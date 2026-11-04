/** Build a validated DSH format-1 index from curated npm and Git targets without executing packages. */
import './git-temp-cleanup.mjs'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createHash } from 'node:crypto'
import semver from 'semver'
import { applyDiscovery } from './discovery.mjs'
import { applyPresentation } from './presentation.mjs'
import { presentationQuality } from './quality.mjs'
import { verifyNpmPlugin } from './npm.mjs'
import { classifyTarget, readGitTarget } from './git.mjs'
import { blockedPluginRepository } from './repository-policy.mjs'
import { isBundle, dshRange } from './vendor/packages.ts'
import { assertPublishable, MAX_PLUGINS, SELECTION_POLICY } from './policy.mjs'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'

const REGISTRY = 'https://registry.npmjs.org/'
const INDEX_URL = 'https://bruc3van.com/dsh-plugins/index.json'

const PERMANENT_GIT_CODES = new Set([
  'ambiguous_short_commit',
  'ambiguous_git_ref',
  'git_ref_not_found',
])

/** Deleted, private, or mistyped remotes should not freeze catalog publication. */
export function classifyGitFailure(error) {
  if (PERMANENT_GIT_CODES.has(error?.code))
    return { permanent: true, code: error.code }
  const reason = String(error?.message ?? '')
  if (
    /Repository not found|fatal: repository ['"].+['"] not found/i.test(reason)
  )
    return { permanent: true, code: 'git_repository_not_found' }
  if (/fatal: not a tree object/i.test(reason))
    return { permanent: true, code: 'git_object_not_found' }
  if (
    (error?.code === 'EPERM' || /EPERM, Permission denied/.test(reason)) &&
    /plugin-market-git-/.test(reason)
  )
    return { permanent: true, code: 'git_temp_cleanup_failed' }
  return { permanent: false, code: 'git_fetch_failed' }
}

/** Only registry targets are resolved here. Git requires separate commit/manifest evidence. */
export function npmTarget(spec) {
  if (typeof spec !== 'string') return null
  const match =
    /^(@[a-z0-9._-]+\/[a-z0-9._-]+|[a-z0-9][a-z0-9._-]*)(?:@([^\s]+))?$/.exec(
      spec,
    )
  if (!match) return null
  const selector = match[2] ?? 'latest'
  if (!semver.valid(selector) && !/^[a-zA-Z][a-zA-Z0-9._-]*$/.test(selector))
    return null
  return { name: match[1], selector }
}

/** Rank verified plugins by repository stars, then cap the published selection. */
export function selectTopPlugins(plugins, ranks, max = MAX_PLUGINS, featured = new Set()) {
  const compareText = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
  const rankOf = (plugin) => ranks.get(plugin.name) ?? { stars: -1, repo: '' }
  const compare = (a, b) => {
    const left = rankOf(a), right = rankOf(b)
    return (
      right.stars - left.stars ||
      compareText(left.repo, right.repo) ||
      compareText(a.name, b.name)
    )
  }
  const ordered = [...plugins].sort(compare)
  const featuredRepos = new Set(
    [...featured].map((name) => String(name).toLowerCase()),
  )
  const isFeatured = (plugin) => featuredRepos.has(rankOf(plugin).repo.toLowerCase())
  const selected = [
    ...ordered.filter(isFeatured),
    ...ordered.filter((plugin) => !isFeatured(plugin)),
  ]
    .slice(0, max)
    .sort(compare)
  const last = selected.at(-1)
  return {
    plugins: selected,
    eligiblePlugins: ordered.length,
    droppedByLimit: Math.max(0, ordered.length - selected.length),
    cutoffStars: last ? (rankOf(last).stars ?? -1) : null,
  }
}

/** Project registry evidence, using the official host compatibility resolver. */
export function projectPackage(name, selectors, packument) {
  const diagnostics = []
  const versions = []
  const wanted = [
    ...new Set(
      selectors.map((selector) =>
        semver.valid(selector) ? selector : packument['dist-tags']?.[selector],
      ),
    ),
  ]
  for (const version of wanted) {
    const manifest = packument.versions?.[version]
    const range = manifest ? dshRange(manifest) : undefined
    const reason =
      !semver.valid(version) ||
      manifest?.name !== name ||
      manifest.version !== version
        ? 'missing or mismatched manifest'
        : !isBundle(manifest)
          ? 'not a declared DSH bundle'
          : range instanceof Error
            ? 'invalid DSH compatibility range'
            : !Number.isFinite(Date.parse(packument.time?.[version]))
              ? 'missing registry publish time'
              : null
    if (reason) {
      diagnostics.push({
        name,
        version: version ?? null,
        code: {
          'missing or mismatched manifest': 'invalid_manifest',
          'not a declared DSH bundle': 'not_dsh_bundle',
          'invalid DSH compatibility range': 'invalid_host_range',
          'missing registry publish time': 'missing_publish_time',
        }[reason],
        status: 'excluded',
        reason: range instanceof Error ? range.message : reason,
      })
      continue
    }
    versions.push({
      version,
      publishTimestamp: Math.floor(Date.parse(packument.time[version]) / 1000),
      source: { type: 'npm', registry: REGISTRY },
      ...(typeof range === 'string' ? { engines: { dsh: range } } : {}),
    })
  }
  versions.sort((a, b) => semver.rcompare(a.version, b.version))
  if (!versions.length) return { diagnostics }
  const manifest = packument.versions[versions[0].version]
  const plugin = {
    name,
    ...(typeof manifest.description === 'string' && manifest.description.trim()
      ? { description: manifest.description }
      : {}),
    versions,
  }
  // Optional presentation fields are omitted unless their package form is unambiguous.
  if (typeof manifest.author?.name === 'string' && manifest.author.name.trim())
    plugin.author = manifest.author.name
  if (typeof manifest.homepage === 'string') {
    try {
      const url = new URL(manifest.homepage)
      if (
        ['http:', 'https:'].includes(url.protocol) &&
        !url.username &&
        !url.password
      )
        plugin.homepage = url.href
    } catch {
      /* Invalid optional presentation metadata is not an install target. */
    }
  }
  // Use the actual host validator before accepting even one row.
  parseMarketIndex(
    { format: 1, title: 'Validation', plugins: [plugin] },
    INDEX_URL,
  )
  return { plugin, diagnostics }
}

export async function generateIndex(
  feed,
  fetchPackument,
  fetchGit = readGitTarget,
  verifyNpm,
) {
  if (feed?.schema_version !== 2 || !Array.isArray(feed.entries))
    throw new Error('Expected a curated market-v2 feed')
  const npmRanks = new Map(), gitRanks = new Map(), ranks = new Map()
  const blockedRepositories = new Set(
    (feed.excludedRepositories ?? []).map((name) => String(name).toLowerCase()),
  )
  const targets = new Map()
  const gitTargets = new Map()
  const sourceTargets = new Set()
  const diagnostics = []
  const rows = [...feed.entries, ...(feed.featured?.entries ?? [])]
  for (const row of rows) {
    if (row.packages?.mode !== 'command') continue
    const rank = {
      stars: Number.isFinite(row.stargazers_count) && row.stargazers_count >= 0
        ? row.stargazers_count : -1,
      repo: row.full_name ?? '',
      row,
    }
    for (const target of row.packages.targets ?? []) {
      const parsed = npmTarget(target.install)
      sourceTargets.add(target.install)
      if (!parsed) {
        const classified = classifyTarget(target.install)
        if (classified.kind === 'git') {
          const key = JSON.stringify(classified)
          if (!gitTargets.has(key)) {
            gitTargets.set(key, { ...classified, target: target.install })
            gitRanks.set(key, rank)
          }
        } else if (!diagnostics.some((d) => d.target === target.install))
          diagnostics.push({
            target: target.install,
            status: 'unsupported',
            ...classified,
          })
        continue
      }
      if (!targets.has(parsed.name)) {
        targets.set(parsed.name, new Set())
        npmRanks.set(parsed.name, rank)
      }
      targets.get(parsed.name).add(parsed.selector)
    }
  }
  const entries = [...targets]
  const results = new Array(entries.length)
  let cursor = 0
  await Promise.all(
    Array.from({ length: Math.min(6, entries.length) }, async () => {
      while (cursor < entries.length) {
        const i = cursor++
        const [name, selectors] = entries[i]
        try {
          const packument = await fetchPackument(name)
          const result = projectPackage(name, [...selectors], packument)
          if (result.plugin && verifyNpm) {
            const verified = await verifyNpm(result.plugin, packument)
            results[i] = {
              ...verified,
              diagnostics: [...result.diagnostics, ...verified.diagnostics],
            }
          } else results[i] = result
        } catch (error) {
          // The pinned reader's bounded size rejection is a policy exclusion,
          // not a transient lookup failure. Integrity/network errors stay fatal.
          const sizeLimited =
            /^(?:[^\n]+: )?(?:unpacked )?tarball exceeds \d+ bytes$/.test(error.message)
          results[i] = {
            fetchFailed: !sizeLimited,
            diagnostics: [
              {
                name,
                code: sizeLimited ? 'package_size_limit' : 'npm_fetch_failed',
                status: sizeLimited ? 'excluded' : 'error',
                reason: error.message,
              },
            ],
          }
        }
      }
    }),
  )
  const plugins = results.flatMap((result) =>
    result.plugin ? [result.plugin] : [],
  )
  for (const plugin of plugins) ranks.set(plugin.name, npmRanks.get(plugin.name))
  diagnostics.push(...results.flatMap((result) => result.diagnostics))
  const gitKeys = [...gitTargets.keys()]
  const gitEntries = [...gitTargets.values()]
  const gitResults = new Array(gitEntries.length)
  let nextGit = 0
  await Promise.all(
    Array.from({ length: Math.min(4, gitEntries.length) }, async () => {
      while (nextGit < gitEntries.length) {
        const i = nextGit++,
          target = gitEntries[i]
        try {
          gitResults[i] = await fetchGit(target)
        } catch (error) {
          const failure = classifyGitFailure(error)
          gitResults[i] = {
            plugins: [],
            evidence: [],
            fetchFailed: !failure.permanent,
            diagnostics: [
              {
                code: failure.code,
                status: failure.permanent ? 'excluded' : 'error',
                reason: error.message,
              },
            ],
          }
        }
      }
    }),
  )
  const seen = new Set(plugins.map((p) => p.name))
  for (let i = 0; i < gitResults.length; i++) {
    const result = gitResults[i],
      target = gitEntries[i].target
    diagnostics.push(...result.diagnostics.map((d) => ({ target, ...d })))
    for (const plugin of result.plugins) {
      if (seen.has(plugin.name)) {
        diagnostics.push({
          target,
          name: plugin.name,
          code: 'duplicate_package',
          status: 'excluded',
          reason: '同名包已收录；优先 npm，再按目录来源顺序，避免来源替换',
        })
        continue
      }
      seen.add(plugin.name)
      plugins.push(plugin)
      ranks.set(plugin.name, gitRanks.get(gitKeys[i]))
    }
  }
  const featured = new Set(
    [
      ...(feed.featuredRepositories ?? []),
      ...(feed.featured?.entries ?? []).map((entry) => entry.full_name),
    ]
      .filter(Boolean)
      .map((name) => String(name).toLowerCase()),
  )
  // Cap only after every candidate has passed source, compatibility and
  // package-level repository exclusion checks. A repository that is itself an
  // editor's pick is exempt from that block: leaderboard/board exclusions
  // police star provenance, not market fitness, and the curated pick is the
  // editorial override. Packages from other excluded repositories that merely
  // reference a featured repository are exempt too — featuring the upstream is
  // the decision that its packages ship.
  const eligiblePlugins = []
  const repositoryExclusions = []
  for (const plugin of plugins) {
    const blocked = blockedPluginRepository(plugin, blockedRepositories)
    if (!blocked) {
      eligiblePlugins.push(plugin)
      continue
    }
    if (featured.has(blocked.slug)) {
      diagnostics.push({
        name: plugin.name,
        code: 'featured_repository_exempt',
        status: 'included',
        reason: `包或 Git 来源指向编辑推荐仓库 ${blocked.slug}，豁免包级仓库排除`,
      })
      eligiblePlugins.push(plugin)
      continue
    }
    repositoryExclusions.push({
      name: plugin.name,
      repository: blocked.slug,
      reference: blocked.reference,
    })
    diagnostics.push({
      name: plugin.name,
      code: 'excluded_repository',
      status: 'excluded',
      reason: `包或 Git 来源指向已排除仓库 ${blocked.slug}`,
    })
  }
  const selection = selectTopPlugins(eligiblePlugins, ranks, MAX_PLUGINS, featured)
  const selectedPlugins = selection.plugins
  diagnostics.push(...applyPresentation(selectedPlugins))
  const index = {
    format: 1,
    title: { en: "Bruce's Plugin Picks", zh: 'Bruce 的精选插件' },
    description: {
      en: "DSH community plugin picks by Bruce, sourced from awesome-dsh-plugin. npm metadata and Git commits are verified; inclusion is not a security review.",
      zh: 'Bruce 整理的 DSH 社区插件精选，数据来自 awesome-dsh-plugin。核实 npm 元数据与 Git 提交；收录不代表安全审查。',
    },
    metadata: applyDiscovery(selectedPlugins, ranks, { featured }),
    plugins: selectedPlugins,
  }
  parseMarketIndex(index, INDEX_URL)
  return {
    index,
    featuredRepositoryCount: featured.size,
    expectedFeaturedRepositoryCount: feed.featured?.expected_repository_count,
    diagnostics,
    candidates: entries.length + gitEntries.length,
    npmCandidates: entries.length,
    gitCandidates: gitEntries.length,
    uniqueTargets: sourceTargets.size,
    npmEvidence: results.flatMap((r) => r.evidence ?? []),
    gitEvidence: gitResults.flatMap((r) => r.evidence),
    selection,
    repositoryExclusions,
    fetchFailures: [...results, ...gitResults].filter(
      (result) => result.fetchFailed,
    ).length,
  }
}

async function main() {
  const [feedPath, outputPath] = process.argv.slice(2)
  if (!feedPath || !outputPath)
    throw new Error(
      'Usage: node scripts/host-market/generate.mjs <market-v2.json> <output.json>',
    )
  const raw = await readFile(feedPath)
  const feed = JSON.parse(raw)
  const evidence = []
  const result = await generateIndex(
    feed,
    async (name) => {
      const url = `${REGISTRY}${encodeURIComponent(name)}`
      const response = await fetch(url, {
        redirect: 'error',
        signal: AbortSignal.timeout(20_000),
        headers: { accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Registry HTTP ${response.status}`)
      const body = await response.text()
      evidence.push({
        name,
        url,
        sha256: createHash('sha256').update(body).digest('hex'),
        fetchedAt: new Date().toISOString(),
      })
      return JSON.parse(body)
    },
    readGitTarget,
    (plugin, packument) =>
      verifyNpmPlugin(plugin, packument, {
        // Large-but-valid tarballs need more than the reader's default 60s
        // on slow registry links; the 64 MiB size cap still applies.
        timeoutMs: 180_000,
        maxTarballBytes: 64 * 1024 * 1024,
      }),
  )
  await mkdir(dirname(resolve(outputPath)), { recursive: true })
  const serialized = JSON.stringify(result.index, null, 2) + '\n'
  const reasons = Object.fromEntries(
    [...new Set(result.diagnostics.map((d) => d.code))]
      .sort()
      .map((code) => [
        code,
        result.diagnostics.filter((d) => d.code === code).length,
      ]),
  )
  const report = {
    reportVersion: 2,
    title: '索引生成与排除报告',
    scope:
      '生成取证与收录诊断；非 DSH 官方审计认证、非安全审查、非实机兼容验收',
    remediation: {
      invalid_host_range:
        '修正无效的 engines.dsh 或相互冲突的 DSH peer 范围；遵循官方 dshRange 规则，不代填兼容范围。',
      unsupported_tarball:
        '提供已发布 npm 包名或 HTTPS Git 仓库及固定引用，不能直接将下载链接作为 format-1 来源。',
      ambiguous_short_commit: '提供完整的 40 位 commit SHA。',
      git_ref_not_found: '修正目录中的分支或标签；不会自动换成默认分支。',
      duplicate_package:
        '同名包优先 npm，其次按目录顺序；需要人工核实身份后调整来源。',
      not_dsh_bundle:
        '确认该版本或子目录声明 dsh.bundle.patch，而非普通库或尚未打包的源码。',
      package_size_limit:
        '压缩包或解压文件总量超过生成器 64 MiB 上限；请精简发布产物后发布新版本，再重新核验。',
      excluded_repository:
        '安装包或 Git 来源指向目录黑名单、市场竞品或平台自身仓库；需要改用独立、可审查的插件仓库。',
      npm_fetch_failed:
        '检查网络、registry 和安装包完整性；失败时保留已发布索引。',
      git_fetch_failed:
        '检查仓库访问权限和网络；不能据此判断插件兼容性或安全性。',
      git_repository_not_found:
        'Git 仓库已删除、设为私有或地址写错；排除该来源后继续发布，不因单个缺失仓库冻结整份索引。',
      git_object_not_found:
        '固定 commit 不是可读的 tree 对象；排除该 Git 目标，不猜测改用默认分支。',
      git_temp_cleanup_failed:
        'Windows 临时目录清理被文件锁打断；该条 Git 核验结果作废，不因此冻结整份索引。Linux CI 通常不会出现。',
    },
    generator: {
      hostVersion: '0.2.1-alpha.5',
      discoveryHostVersion: '0.2.1-rc.2',
      compatibilityPolicy: 'official-dshRange-v1',
      gitReaderCommit: '1517a4dbca0a2789ff1d41ba439600f8547d23fa',
    },
    presentationQuality: presentationQuality(result.index),
    summary: {
      npmCandidates: result.npmCandidates,
      gitCandidates: result.gitCandidates,
      uniqueTargets: result.uniqueTargets,
      eligiblePluginsBeforeLimit: result.selection.eligiblePlugins,
      excludedByRepositoryPolicy: result.repositoryExclusions.length,
      excludedByLimit: result.selection.droppedByLimit,
      cutoffStars: result.selection.cutoffStars,
      includedNpm: result.index.plugins.filter(
        (p) => p.versions[0].source.type === 'npm',
      ).length,
      includedGit: result.index.plugins.filter(
        (p) => p.versions[0].source.type === 'git',
      ).length,
      featuredRepositories: result.featuredRepositoryCount,
      featuredPlugins: result.index.plugins.filter(plugin => plugin.metadata?.category === 'featured').length,
      expectedFeaturedRepositories: result.expectedFeaturedRepositoryCount,
      diagnosticsByCode: reasons,
      counting:
        '候选按 npm 包或 Git 目标去重；诊断可按版本/路径多条记录，不等于独立插件数量',
    },
    selection: {
      policy: SELECTION_POLICY,
      eligiblePlugins: result.selection.eligiblePlugins,
      included: result.index.plugins.length,
      droppedByLimit: result.selection.eligiblePlugins - result.index.plugins.length,
      cutoffStars: result.selection.cutoffStars,
    },
    indexSha256: createHash('sha256').update(serialized).digest('hex'),
    fetchFailures: result.fetchFailures,
    generatedAt: new Date().toISOString(),
    ...(feed.subscriptionCandidates ? { candidateSelection: feed.subscriptionCandidates } : {}),
    feedSha256: createHash('sha256').update(raw).digest('hex'),
    candidates: result.candidates,
    included: result.index.plugins.length,
    repositoryExclusions: result.repositoryExclusions,
    diagnostics: result.diagnostics,
    evidence,
    gitEvidence: result.gitEvidence,
    npmEvidence: result.npmEvidence,
  }
  const reportText = JSON.stringify(report, null, 2) + '\n'
  if (
    Buffer.byteLength(serialized) > 5 * 1024 * 1024 ||
    Buffer.byteLength(reportText) > 5 * 1024 * 1024
  )
    throw new Error('Generated JSON exceeds the HTTPS route size limit')
  await writeFile(`${outputPath}.report.json`, reportText)
  await writeFile(outputPath, serialized)
  assertPublishable(result)
  console.log(
    `Generated ${result.index.plugins.length}/${result.selection.eligiblePlugins} verified plugins ` +
      `(${result.selection.droppedByLimit} beyond the ${MAX_PLUGINS}-plugin cap) ` +
      `from ${result.candidates} sources; ${result.diagnostics.length} diagnostics. ${outputPath}`,
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}
