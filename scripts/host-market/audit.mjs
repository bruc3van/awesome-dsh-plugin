/** Repository-by-repository evidence collection. Never edits mappings or subscription output. */
import { readFile, mkdir, rename, writeFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { basename, dirname, resolve, posix } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createHash } from 'node:crypto'
import semver from 'semver'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'
import { DISCOVERY_HOST_VERSIONS } from './quality.mjs'
import { gitRefs, withGitObjects } from './vendor/fetchers.ts'
import {
  readManifest,
  findBundlePackages,
  isBundle,
  isPrivate,
  dshRange,
} from './vendor/packages.ts'
import { extractInstallTargets, npmBase, installRef } from '../readme-install.mjs'
import { npmTarget, projectPackage } from './generate.mjs'
import { classifyTarget, readGitTarget } from './git.mjs'
import { withGitHubObjects } from './audit-github.mjs'
import { verifyNpmPlugin } from './npm.mjs'
const root = fileURLToPath(new URL('../../', import.meta.url))
const timeoutIndex = process.argv.indexOf('--timeout-ms')
const timeoutMs =
  timeoutIndex < 0 ? 60000 : Number(process.argv[timeoutIndex + 1])
if (!Number.isInteger(timeoutMs) || timeoutMs < 1000 || timeoutMs > 300000)
  throw Error('timeout-ms must be 1000..300000')
const limits = { timeoutMs, maxTarballBytes: 64 * 1024 * 1024 }
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const README_NAMES = [
  'README.md',
  'readme.md',
  'README.zh-CN.md',
  'README_zh.md',
  'README_CN.md',
  'README.zh.md',
  'README-EN.md',
  'README_EN.md',
]
// A declared range is mappable when SOME supported host satisfies it — the
// supported set moves, so judging against one frozen host version silently
// blocks every plugin that declares compatibility with a newer host (the
// retired 0.2.1-alpha.5 check froze `false` into hundreds of otherwise
// verifiable evidence records). The generator re-verifies per version.
const hostCompatible = (range) =>
  DISCOVERY_HOST_VERSIONS.some((host) =>
    semver.satisfies(host, range, { includePrerelease: true }),
  )
const openObjects = (url, ...args) =>
  (process.argv.includes('--github-api') && new URL(url).hostname === 'github.com'
    ? withGitHubObjects : withGitObjects)(url, ...args)
const escape = (text) => String(text ?? '').replace(/[|\r\n]/g, ' ')
export function planAudit(feed, report, size = 200) {
  if (!Number.isInteger(size) || size < 1 || size > 200)
    throw Error('Batch size must be 1..200')
  const bad = new Set(
    report.diagnostics
      .filter((d) =>
        [
          'git_ref_not_found',
          'ambiguous_short_commit',
          'invalid_manifest',
        ].includes(d.code),
      )
      .map((d) => d.target || d.name),
  )
  const entries = feed.entries.map((row, position) => ({
    full_name: row.full_name,
    originalPosition: position + 1,
    inputMode: row.packages?.mode ?? 'unmapped',
    mappedTargets:
      row.packages?.mode === 'command'
        ? row.packages.targets.map((t) => t.install)
        : [],
    manualNote: row.packages?.mode === 'manual' ? row.packages : null,
  }))
  if (
    new Set(entries.map((r) => r.full_name.toLowerCase())).size !==
    entries.length
  )
    throw Error('Duplicate repository in feed')
  const priority = (r) =>
    r.inputMode === 'unmapped'
      ? 0
      : r.inputMode === 'manual'
        ? 1
        : r.mappedTargets.some((t) => bad.has(t) || bad.has(npmTarget(t)?.name))
          ? 2
          : 3
  entries.sort(
    (a, b) =>
      priority(a) - priority(b) || a.originalPosition - b.originalPosition,
  )
  return entries.map((r, i) => ({
    ...r,
    ordinal: i + 1,
    batch: Math.floor(i / size) + 1,
  }))
}
export function evaluateManifest(manifest, source, publishTimestamp) {
  if (!manifest)
    return { status: 'not_bundle', reason: '该目录没有可读取的 package.json' }
  if (!isBundle(manifest))
    return { status: 'not_bundle', reason: '未声明标准 dsh.bundle.patch' }
  if (isPrivate(manifest))
    return { status: 'private_package', reason: '包声明 private: true，不作为订阅安装候选' }
  const range = dshRange(manifest)
  if (range instanceof Error)
    return {
      status: 'needs_upstream_declaration',
      reason: range.message,
      declaredRange: null,
    }
  const plugin = {
    name: manifest.name,
    versions: [
      {
        version: manifest.version,
        publishTimestamp,
        source,
        ...(typeof range === 'string' ? { engines: { dsh: range } } : {}),
      },
    ],
  }
  try {
    parseMarketIndex(
      { format: 1, title: 'check', plugins: [plugin] },
      'https://example.com/index.json',
    )
  } catch (error) {
    return { status: 'invalid_manifest', reason: error.message }
  }
  return {
    status: 'eligible_metadata',
    declaredRange: range ?? null,
    compatibilityUnconstrained: range === undefined,
    declaredCompatibleWithHost: range === undefined ? null : hostCompatible(range),
    plugin,
  }
}
export function contentReviewFlags(result) {
  return result.candidates
    .filter(
      (c) =>
        c.status === 'eligible_metadata' &&
        /(?:your[-_]?scope|your-plugin|your-scope|plugin-template|plugin-skeleton|(?:^|\/)(?:templates?|examples?)(?:\/|$))/i.test(
          `${c.name ?? c.plugin?.name ?? ''} ${c.path ?? ''}`,
        ),
    )
    .map((c) => ({
      code: 'template_or_placeholder',
      name: c.name ?? c.plugin?.name,
      path: c.path,
      reason:
        '包名或路径具有模板/示例特征；需确认是否是可上架插件，不能仅凭格式合格自动纳入',
    }))
}
export function classifyRepository(result) {
  if (result.errors.length) return 'retry_required'
  const eligible = result.candidates.filter(
    (c) => c.status === 'eligible_metadata',
  )
  if (eligible.length && contentReviewFlags(result).length)
    return 'template_or_example_review'
  if (eligible.length)
    return result.inputMode === 'command'
      ? 'eligible_source_verified'
      : 'mapping_can_be_added'
  if (result.candidates.some((c) => c.status === 'needs_upstream_declaration'))
    return 'needs_upstream_declaration'
  if (result.inputMode === 'manual' || result.readmes.some((r) => r.localOnly))
    return 'manual_install_review'
  return 'no_eligible_bundle_found'
}
async function atomicJson(file, value) {
  await mkdir(dirname(file), { recursive: true })
  const temp =
    file + '.tmp-' + process.pid + '-' + Math.random().toString(36).slice(2)
  await writeFile(temp, JSON.stringify(value, null, 2) + '\n')
  await rename(temp, file)
}
export function extractRepositoryTargets(text, context, names) {
  const extracted = extractInstallTargets(text, context)
  const seen = new Set(extracted.picks.map(p => p.install))
  for (const found of extracted.found) {
    if (found.cls.kind !== 'npm' || !names.has(npmBase(found.target))) continue
    const install = installRef(found.cls.source)
    if (seen.has(install)) continue
    seen.add(install)
    extracted.picks.push({ install, source: found.cls.source, command: found.command, profile: found.profile })
  }
  return extracted
}
/** Follow explicit local README links only, never external URLs or arbitrary instruction files. */
export function linkedReadmes(text) {
  return [...new Set([...text.matchAll(/\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)]
    .map(match => match[1].split('#')[0])
    .filter(path => !/[:?\\]/.test(path) && !path.startsWith('/') && !path.split('/').includes('..'))
    .map(path => posix.normalize(path))
    .filter(path => /(?:^|\/)readme(?:[._-][a-z-]+)?\.md$/i.test(path)))]
}
export async function inspectRepository(row) {
  const startedAt = new Date().toISOString(),
    url = `https://github.com/${row.full_name}`
  const result = {
    ...row,
    startedAt,
    scope:
      '默认分支、README 已提取目标及已有安装映射；不穷举历史版本、不安装或执行插件',
    readmes: [],
    candidates: [],
    mappingFindings: [],
    errors: [],
  }
  let refs
  try {
    refs = await gitRefs(url, ['https'], limits)
    result.repository = {
      url,
      commit: refs.head,
      releaseTags: refs.tags.size,
      reader: process.argv.includes('--github-api')
        ? 'github_objects_api'
        : 'git_bare_objects',
    }
    await openObjects(url, refs, ['https'], limits, async (objects) => {
      const files = await objects.tree(refs.head, ''),
        publishTimestamp = await objects.committed(refs.head)
      const warnings = []
      const paths = await findBundlePackages(files, (m) => warnings.push(m))
      result.discoveryWarnings = warnings
      if (!paths.length)
        result.rootManifest = {
          ...((await readManifest(files, '')) ?? {}),
          note: '没有按宿主发现规则找到 bundle；仅展示根 manifest 的身份字段',
        }
      if (result.rootManifest) {
        const m = result.rootManifest
        result.rootManifest = {
          name: m.name ?? null,
          version: m.version ?? null,
          dsh: m.dsh ?? null,
          engines: m.engines ?? null,
        }
      }
      for (const path of paths) {
        const scoped = files.within(path),
          manifest = await readManifest(scoped, '')
        const source = {
          type: 'git',
          url,
          commit: refs.head,
          ...(path ? { path } : {}),
        }
        result.candidates.push({
          origin: 'repository_discovery',
          name: manifest?.name,
          version: manifest?.version,
          path,
          source,
          manifestSha256: hash(await scoped.read('package.json')),
          manifestUrl: `https://github.com/${row.full_name}/blob/${refs.head}/${path ? path + '/' : ''}package.json`,
          ...evaluateManifest(manifest, source, publishTimestamp),
        })
      }
      const readmePaths = new Set(README_NAMES)
      for (const name of readmePaths) {
        const bytes = await files.read(name)
        if (!bytes) continue
        if (!name.includes('/')) {
          for (const linked of linkedReadmes(Buffer.from(bytes).toString('utf8'))) {
            if (readmePaths.size >= 40) {
              result.discoveryWarnings.push('README link scan capped at 40 paths; remaining links require review')
              break
            }
            readmePaths.add(linked)
          }
        }
        const [owner, repo] = row.full_name.split('/'),
          extracted = extractRepositoryTargets(
            Buffer.from(bytes).toString('utf8'),
            { owner, repo, maxTargets: 20 },
            new Set(result.candidates.map(c => c.name).filter(Boolean)),
          )
        result.readmes.push({
          path: name,
          sha256: hash(bytes),
          url: `https://github.com/${row.full_name}/blob/${refs.head}/${name}`,
          ambiguous: extracted.ambiguous,
          localOnly: extracted.localOnly,
          targets: extracted.picks.map((p) => ({
            install: p.install,
            command: p.command,
            profile: p.profile,
          })),
        })
      }
    })
  } catch (error) {
    result.errors.push({ stage: 'repository', reason: error.message })
    result.outcome = classifyRepository(result)
    return { ...result, finishedAt: new Date().toISOString() }
  }
  const documented = new Set(
    result.readmes.flatMap((r) => r.targets.map((t) => t.install)),
  )
  for (const target of row.mappedTargets)
    if (!documented.has(target))
      result.mappingFindings.push({
        code: 'mapped_target_not_extracted_from_readme',
        target,
        action:
          '核对 README 中的替代命令或旧版本；提取器没找到不等于目标无效，不自动删除',
      })
  for (const target of documented)
    if (!row.mappedTargets.includes(target))
      result.mappingFindings.push({
        code: 'documented_target_not_mapped',
        target,
        action: '核实下列来源结果后由维护者补录，不自动覆盖映射',
      })
  const targets = [...new Set([...row.mappedTargets, ...documented])]
  for (const target of targets) {
    const parsed = npmTarget(target)
    try {
      if (parsed) {
        const response = await fetch(
          `https://registry.npmjs.org/${encodeURIComponent(parsed.name)}`,
          { redirect: 'error', signal: AbortSignal.timeout(limits.timeoutMs) },
        )
        if (response.status === 404) {
          result.candidates.push({
            target,
            origin: 'npm',
            status: 'source_not_found',
            reason: 'npm registry 404',
          })
          continue
        }
        if (!response.ok) throw Error(`Registry HTTP ${response.status}`)
        const body = await response.text(),
          packument = JSON.parse(body)
        const projected = projectPackage(
          parsed.name,
          [parsed.selector],
          packument,
        )
        if (!projected.plugin) {
          for (const d of projected.diagnostics)
            result.candidates.push({
              target,
              origin: 'npm',
              ...d,
              status:
                d.code === 'invalid_host_range'
                  ? 'needs_upstream_declaration'
                  : 'invalid_manifest',
              statusCode: d.code,
              registrySha256: hash(body),
            })
          continue
        }
        const verified = await verifyNpmPlugin(
          projected.plugin,
          packument,
          limits,
        )
        result.candidates.push({
          target,
          origin: 'npm',
          name: verified.plugin.name,
          status: 'eligible_metadata',
          plugin: verified.plugin,
          registrySha256: hash(body),
          evidence: verified.evidence,
          diagnostics: verified.diagnostics,
          compatibilityUnconstrained: verified.plugin.versions.some((v) => !v.engines),
          declaredCompatibleWithHost: verified.plugin.versions.some((v) => !v.engines)
            ? null
            : verified.plugin.versions.some((v) => hostCompatible(v.engines.dsh)),
        })
      } else {
        const git = classifyTarget(target)
        if (git.kind !== 'git') {
          result.candidates.push({
            target,
            status: 'unsupported_source',
            ...git,
          })
          continue
        }
        if (
          git.url.toLowerCase() === url.toLowerCase() &&
          !git.ref &&
          git.path === undefined
        )
          continue
        const verified = await readGitTarget(git, {
          openObjects: (url, refs, transports, _limits, read) =>
            openObjects(url, refs, transports, limits, read),
        })
        result.candidates.push(
          ...verified.plugins.map((plugin) => ({
            target,
            origin: 'git_target',
            name: plugin.name,
            status: 'eligible_metadata',
            plugin,
            evidence: verified.evidence,
          })),
        )
        result.candidates.push(
          ...verified.diagnostics
            .filter((d) => d.status !== 'warning')
            .map((d) => ({
              target,
              origin: 'git_target',
              ...d,
              status:
                d.code === 'invalid_host_range'
                  ? 'needs_upstream_declaration'
                  : 'invalid_manifest',
            })),
        )
      }
    } catch (error) {
      if (
        [
          'ambiguous_short_commit',
          'ambiguous_git_ref',
          'git_ref_not_found',
        ].includes(error.code)
      )
        result.candidates.push({
          target,
          status: 'mapping_needs_review',
          code: error.code,
          reason: error.message,
        })
      else if (/^(?:[^\n]+: tarball|unpacked tarball) exceeds \d+ bytes$/.test(error.message))
        result.candidates.push({ target, status: 'policy_excluded', code: 'package_size_limit', reason: error.message })
      else
        result.errors.push({
          stage: 'install_target',
          target,
          reason: error.message,
        })
    }
  }
  result.outcome = classifyRepository(result)
  return { ...result, finishedAt: new Date().toISOString() }
}
export async function summarize(dir, plan, normalize = false) {
  const records = []
  for (const row of plan.entries) {
    const file = resolve(
      dir,
      'repos',
      `${String(row.ordinal).padStart(3, '0')}.json`,
    )
    if (existsSync(file)) {
      const record = JSON.parse(await readFile(file, 'utf8'))
      record.contentReviewFlags = contentReviewFlags(record)
      record.outcome = classifyRepository(record)
      if (normalize) await atomicJson(file, record)
      records.push(record)
    }
  }
  const outcomes = {}
  for (const r of records) outcomes[r.outcome] = (outcomes[r.outcome] ?? 0) + 1
  const summary = {
    feedSha256: plan.feedSha256,
    total: plan.entries.length,
    attempted: records.length,
    evidenceCollected: records.filter((r) => r.outcome !== 'retry_required')
      .length,
    manualReviewRequired: records.filter(
      (r) =>
        r.mappingFindings.length > 0 ||
        [
          'mapping_can_be_added',
          'manual_install_review',
          'template_or_example_review',
          'no_eligible_bundle_found',
        ].includes(r.outcome),
    ).length,
    mappingDifferenceRepositories: records.filter(
      (r) => r.mappingFindings.length > 0,
    ).length,
    retryRequired: outcomes.retry_required ?? 0,
    pending: plan.entries.length - records.length,
    outcomes,
    batches: Array.from(
      { length: Math.ceil(plan.entries.length / plan.batchSize) },
      (_, i) => ({
        batch: i + 1,
        total: plan.entries.filter((r) => r.batch === i + 1).length,
        attempted: records.filter((r) => r.batch === i + 1).length,
        retryRequired: records.filter(
          (r) => r.batch === i + 1 && r.outcome === 'retry_required',
        ).length,
      }),
    ),
  }
  const triage = records
    .filter(
      (r) =>
        r.mappingFindings.length ||
        r.contentReviewFlags.length ||
        r.inputMode !== 'command' ||
        r.errors.length,
    )
    .map((r) => ({
      full_name: r.full_name,
      batch: r.batch,
      ordinal: r.ordinal,
      outcome: r.outcome,
      contentReviewFlags: r.contentReviewFlags,
      mappingFindings: r.mappingFindings,
      errors: r.errors,
      eligibleCandidates: r.candidates
        .filter((c) => c.status === 'eligible_metadata')
        .map((c) => ({
          name: c.name ?? c.plugin?.name,
          target: c.target,
          source: c.source,
          manifestUrl: c.manifestUrl,
          plugin: c.plugin,
        })),
    }))
  await atomicJson(resolve(dir, 'triage.json'), triage)
  await atomicJson(resolve(dir, 'summary.json'), summary)
  const labels = {
    eligible_source_verified: '已有来源核验通过',
    mapping_can_be_added: '发现合格元数据，待补映射复核',
    template_or_example_review: '模板或示例待复核',
    needs_upstream_declaration: '需补宿主声明',
    manual_install_review: '需核对手动步骤',
    no_eligible_bundle_found: '在检查范围内未找到合格 bundle',
    retry_required: '读取或核验失败待复查',
  }
  const lines = [
    '# 分批订阅资格核验',
    '',
    `固定输入：\`${plan.feedSha256}\`；共 ${summary.total} 个仓库，每批 ${plan.batchSize} 个。`,
    `已尝试 ${summary.attempted}，取证完成 ${summary.evidenceCollected}，待重试 ${summary.retryRequired}，尚未尝试 ${summary.pending}。`,
    '',
    '这里只核实默认分支、可提取的 README 安装目标和已有映射，不穷举所有历史 tag/版本。合格表示元数据符合订阅格式，不代表运行或安全验收。无安装映射的仓库也读取源代码中的 manifest；失败不能计入完成。',
    '',
    '| 批次 | 仓库 | 核验结果 | 发现 | 证据 |',
    '| --- | --- | --- | --- | --- |',
  ]
  for (const r of records)
    lines.push(
      `| ${r.batch} | ${escape(r.full_name)} | ${labels[r.outcome]} | ${r.candidates.filter((c) => c.status === 'eligible_metadata').length} 个合格来源；${r.mappingFindings.length} 条映射差异 | [记录](repos/${String(r.ordinal).padStart(3, '0')}.json) |`,
    )
  await writeFile(resolve(dir, 'README.md'), lines.join('\n') + '\n')
  for (const batch of summary.batches) {
    const selected = records.filter((r) => r.batch === batch.batch)
    const body = [
      `# 第 ${batch.batch} 批：${batch.total} 个仓库`,
      '',
      `已尝试 ${batch.attempted}，取证完成 ${batch.attempted - batch.retryRequired}，待重试 ${batch.retryRequired}。`,
      '',
      '[全部批次与检查范围](README.md) · [待处理清单](triage.json)',
      '',
      '| 序号 | 仓库 | 结果 | 证据 |',
      '| --- | --- | --- | --- |',
      ...selected.map(
        (r) =>
          `| ${r.ordinal} | ${escape(r.full_name)} | ${labels[r.outcome]} | [记录](repos/${String(r.ordinal).padStart(3, '0')}.json) |`,
      ),
    ]
    await writeFile(
      resolve(dir, `batch-${batch.batch}.md`),
      body.join('\n') + '\n',
    )
  }
  await writeFile(
    resolve(dirname(dir), 'README.md'),
    [
      '# 订阅资格分批核验',
      '',
      `当前固定快照：\`${plan.feedSha256}\`。`,
      '',
      `[本轮总览](${basename(dir)}/README.md) · [逐仓库待处理清单](${basename(dir)}/triage.json)`,
      '',
      ...summary.batches.map(
        (b) =>
          `- [第 ${b.batch} 批：${b.total} 个仓库](${basename(dir)}/batch-${b.batch}.md)`,
      ),
      '',
      '取证结果不会自动修改安装映射或订阅索引；先核实，再逐项修正。',
    ].join('\n') + '\n',
  )
  return summary
}
async function main() {
  const args = process.argv.slice(2),
    value = (key) => {
      const i = args.indexOf(key)
      return i < 0 ? undefined : args[i + 1]
    }
  const batch = Number(value('--batch') ?? 1),
    size = Number(value('--size') ?? 200),
    concurrency = Number(value('--concurrency') ?? 6)
  if (
    !Number.isInteger(batch) ||
    batch < 1 ||
    !Number.isInteger(concurrency) ||
    concurrency < 1 ||
    concurrency > 12
  )
    throw Error('Invalid batch/concurrency')
  const raw = await readFile(resolve(root, 'data/market-v2.json')),
    feed = JSON.parse(raw),
    feedSha256 = hash(raw)
  const dir = resolve(root, 'data/review/subscription', feedSha256.slice(0, 12))
  const planFile = resolve(dir, 'plan.json')
  let plan
  if (existsSync(planFile)) {
    plan = JSON.parse(await readFile(planFile, 'utf8'))
    if (plan.feedSha256 !== feedSha256 || plan.batchSize !== size)
      throw Error('Plan input/size mismatch')
  } else {
    plan = {
      schemaVersion: 1,
      createdAt: new Date().toISOString(),
      feedSha256,
      feedGeneratedAt: feed.generated_at,
      batchSize: size,
      scope: '主目录仓库；精选目录不另计',
      entries: planAudit(
        feed,
        JSON.parse(
          await readFile(
            resolve(root, 'data/dsh-market-index.report.json'),
            'utf8',
          ),
        ),
        size,
      ),
    }
    await atomicJson(planFile, plan)
  }
  const snapshot = resolve(dir, 'feed.snapshot.json')
  try { await writeFile(snapshot, raw, { flag: 'wx' }) }
  catch (error) { if (error.code !== 'EEXIST') throw error }
  if (hash(await readFile(snapshot)) !== feedSha256) throw Error('Saved feed snapshot mismatch')
  if (args.includes('--summary')) {
    console.log(JSON.stringify(await summarize(dir, plan, true), null, 2))
    return
  }
  const rows = plan.entries.filter((r) => r.batch === batch)
  if (!rows.length) throw Error('Batch out of range')
  let next = 0
  await Promise.all(
    Array.from({ length: Math.min(concurrency, rows.length) }, async () => {
      while (next < rows.length) {
        const row = rows[next++],
          file = resolve(
            dir,
            'repos',
            `${String(row.ordinal).padStart(3, '0')}.json`,
          )
        if (args.includes('--retry-only') && !existsSync(file)) continue
        if (existsSync(file)) {
          const old = JSON.parse(await readFile(file, 'utf8'))
          if (old.outcome !== 'retry_required' && !args.includes('--refresh'))
            continue
        }
        const result = await inspectRepository(row)
        await atomicJson(file, result)
        console.log(
          `${row.ordinal}/${plan.entries.length} ${row.full_name}: ${result.outcome}`,
        )
      }
    }),
  )
  const summary = await summarize(dir, plan)
  console.log(JSON.stringify(summary))
  console.log('Report:', resolve(dir, 'README.md'))
  if (summary.batches.find((r) => r.batch === batch).retryRequired)
    process.exitCode = 1
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
