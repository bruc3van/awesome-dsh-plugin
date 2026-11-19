/** Propose and append install mappings for subscription candidates. Never edits an
 * existing packages.json key: appended auto targets are tracked items (unversioned
 * npm / Git repo pointer) that daily regeneration keeps pinned to the exact
 * upstream version or commit, while manually pinned targets keep their intent. */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import semver from 'semver'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { filterPool } from '../market-pool.mjs'
import { installRef, isPasteSafeCommand, npmBase } from '../readme-install.mjs'
import {
  classifyRepository,
  contentReviewFlags,
  inspectRepository,
} from './audit.mjs'
import { DISCOVERY_HOST_VERSIONS } from './quality.mjs'
import { MAX_PLUGINS } from './policy.mjs'

const root = fileURLToPath(new URL('../..', import.meta.url))
const DATE = /^\d{4}-\d{2}-\d{2}$/

export function githubSlugFromUrl(value) {
  if (!value) return ''
  const text = String(value)
  try {
    const url = new URL(text.replace(/^git\+/, ''))
    if (!/(^|\.)github\.com$/i.test(url.hostname)) return ''
    const parts = url.pathname
      .replace(/\.git$/i, '')
      .replace(/^\/|\/$/g, '')
      .split('/')
    return parts.length >= 2 ? `${parts[0]}/${parts[1]}`.toLowerCase() : ''
  } catch {
    const match = text.match(/github\.com[:/]+([^/#?]+\/[^/#?]+)/i)
    return match ? match[1].replace(/\.git$/i, '').toLowerCase() : ''
  }
}

export function identityClear(fullName, plugin, readmeTargets = []) {
  const slug = String(fullName).toLowerCase()
  const [owner, repo] = slug.split('/')
  const urls = [
    plugin?.repository?.url,
    typeof plugin?.repository === 'string' ? plugin.repository : '',
    plugin?.homepage,
  ]
  if (urls.some((url) => githubSlugFromUrl(url) === slug))
    return { ok: true, basis: 'npm repository/homepage matches GitHub slug' }
  const name = plugin?.name || ''
  const base = npmBase(name).toLowerCase()
  if (name && (base === repo || base === `@${owner}/${repo}` || base === slug))
    return { ok: true, basis: 'package name matches repository' }
  const documented = readmeTargets.map((target) => npmBase(target).toLowerCase())
  if (name && documented.includes(base))
    return { ok: true, basis: 'README documents this npm package' }
  return { ok: false, basis: 'npm identity is not traceable to this repository' }
}

function readmeInstalls(record) {
  return (record.readmes ?? []).flatMap((readme) =>
    (readme.targets ?? []).map((target) => target.install),
  )
}

function commandFor(source) {
  const spec = source.startsWith('npm:') ? source.slice(4) : source
  const quoted = /[@#"&\s]/.test(spec) ? `"${spec}"` : spec
  return `dsh plugin --profile web add ${quoted}`
}

// Tracked vs manually pinned, per upstream intent: a README that documents the
// unversioned (or @latest) npm form marks a tracked item — daily regeneration
// re-resolves and re-verifies the newest exact version — and a README-documented
// Git ref is recorded verbatim as upstream states it. Everything else keeps the
// verified exact version (npm) or tracks the repository itself (Git, repo-
// fallback: daily regeneration pins the verified head commit). Map-time evidence
// keeps its pinned commit in the evidence records and verified_via; existing
// packages.json keys are never rewritten, so manually pinned targets stay pins.
function gitSource(plugin, record, readmeTargets = []) {
  const version = plugin?.versions?.[0]
  const source = version?.source
  if (source?.type !== 'git' || !source.url || !/^[a-f0-9]{40}$/i.test(source.commit || ''))
    return null
  const slug = githubSlugFromUrl(source.url)
  const fullName = String(record.full_name)
  if (slug !== fullName.toLowerCase()) return null
  const documented = readmeTargets.find((target) => githubSlugFromUrl(target) === slug)
  const match = documented
    ? /github\.com[/:]([\w.-]+\/[\w.-]+)(?:#([^\s&]+))?(?:&path:([^\s&]+))?/i.exec(
        String(documented).replace(/^git\+/, '').replace(/\.git(?=#|$)/i, ''),
      )
    : null
  if (match) {
    const ref = match[2] && !/^path:/i.test(match[2]) ? `#${match[2]}` : ''
    const path = (match[2] && /^path:/i.test(match[2]) ? match[2].slice('path:'.length) : match[3])
      ?? (source.path ? `/${source.path.replace(/^\//, '')}` : '')
    const selector = path ? `${ref ? '&' : '#'}path:${path}` : ''
    return `github:${match[1]}${ref}${selector}`
  }
  const path = source.path ? `#path:/${source.path.replace(/^\//, '')}` : ''
  return `github:${fullName}${path}`
}

function npmSource(plugin, readmeTargets = []) {
  const version = plugin?.versions?.[0]
  if (!plugin?.name || version?.source?.type !== 'npm' || !version.version) return null
  const base = plugin.name.toLowerCase()
  const tracks = readmeTargets.some((target) => {
    const item = target.toLowerCase()
    return item === base || item === `${base}@latest`
  })
  return tracks ? `npm:${plugin.name}` : `npm:${plugin.name}@${version.version}`
}

function documented(record, source) {
  const installs = readmeInstalls(record).map((item) => item.toLowerCase())
  if (source.startsWith('npm:')) {
    const spec = source.slice(4).toLowerCase()
    return installs.some(
      (item) => item === spec || npmBase(item) === npmBase(spec),
    )
  }
  const slug = String(record.full_name).toLowerCase()
  return installs.some((item) => githubSlugFromUrl(item) === slug || item.includes(slug))
}

export function eligibleCandidates(record) {
  return (record.candidates ?? []).filter((candidate) => {
    if (candidate.status !== 'eligible_metadata') return false
    // Host compatibility is re-derived from the candidate's own declared range
    // instead of trusting the stored audit verdict: the supported host set
    // moves, and evidence audited against a retired host version froze `false`
    // into hundreds of otherwise-verifiable records. No declared range means
    // unconstrained under the official dshRange rule. The generator re-verifies
    // every version at publication, so this gate only filters what no current
    // host can install.
    const ranges = []
    if (typeof candidate.declaredRange === 'string') ranges.push(candidate.declaredRange)
    for (const version of candidate.plugin?.versions ?? []) {
      const range = version?.engines?.dsh
      if (typeof range === 'string') ranges.push(range)
    }
    if (!ranges.length) return true
    return ranges.some((range) =>
      DISCOVERY_HOST_VERSIONS.some((host) =>
        semver.satisfies(host, range, { includePrerelease: true }),
      ),
    )
  })
}

export function proposeRecord(record) {
  const repository = record.full_name
  if (record.errors?.length)
    return { repository, decision: 'skip', reason: 'retry_required', packages: [] }
  if (contentReviewFlags(record).length)
    return {
      repository,
      decision: 'identity_review',
      reason: 'template_or_example_review',
      packages: [],
    }
  const outcome = record.outcome || classifyRepository(record)
  if (outcome === 'needs_upstream_declaration')
    return { repository, decision: 'skip', reason: outcome, packages: [] }
  if (outcome !== 'mapping_can_be_added' && outcome !== 'eligible_source_verified')
    return { repository, decision: 'skip', reason: outcome || 'no_eligible_bundle_found', packages: [] }
  const readmeTargets = readmeInstalls(record)
  const byName = new Map()
  const pending = []
  for (const candidate of eligibleCandidates(record)) {
    const plugin = candidate.plugin
    const name = candidate.name || plugin?.name
    if (!name) continue
    const npm = npmSource(plugin, readmeTargets)
    const git = gitSource(plugin, record, readmeTargets)
    let source
    let identity
    if (candidate.origin === 'npm' || npm) {
      identity = identityClear(repository, plugin, readmeTargets)
      source = npm
    } else {
      identity = git
        ? { ok: true, basis: 'Git bundle from this repository' }
        : { ok: false, basis: 'no pinned Git commit' }
      source = git
    }
    if (!source) {
      pending.push({ name, reason: identity.basis, origin: candidate.origin, kind: 'skip' })
      continue
    }
    if (!identity.ok) {
      pending.push({ name, reason: identity.basis, origin: candidate.origin, kind: 'review' })
      continue
    }
    if (byName.has(name) && byName.get(name).source.startsWith('npm:')) continue
    const pkg = {
      profile: 'web',
      source,
      install: installRef(source),
      command: commandFor(source),
    }
    if (!isPasteSafeCommand(pkg.command)) {
      pending.push({ name, reason: 'generated command is not paste-safe', origin: candidate.origin, kind: 'skip' })
      continue
    }
    byName.set(name, {
      ...pkg,
      unconstrained: candidate.compatibilityUnconstrained === true,
      documented: documented(record, source),
      basis: identity.basis,
    })
  }
  const selected = [...byName.values()]
  if (!selected.length)
    return {
      repository,
      decision: pending.some((item) => item.kind === 'review') ? 'identity_review' : 'skip',
      reason: pending[0]?.reason || 'no_eligible_bundle_found',
      packages: [],
      pending,
    }
  const unconstrained = selected.some((pkg) => pkg.unconstrained)
  const readmeVerified = selected.every((pkg) => pkg.documented)
  return {
    repository,
    decision: 'apply',
    reason: unconstrained ? 'unconstrained_dshRange' : 'eligible_metadata',
    packages: selected.map(({ profile, source, install, command }) => ({
      profile,
      source,
      install,
      command,
    })),
    status: readmeVerified ? 'readme-verified' : 'repo-fallback',
    verified_via: readmeVerified
      ? `README + ${selected[0].source.startsWith('npm:') ? 'npm registry' : 'Git commit'}`
      : `manifest@${(record.repository?.commit || '').slice(0, 12)}`,
    note: unconstrained
      ? '官方 dshRange 下未声明 engines.dsh 视为不受限；身份由仓库/包名/README 对应关系核实，不是实机兼容验收。'
      : selected.some((pkg) => !pkg.documented)
        ? 'README 未提供可用的安装命令；按已核验来源写入跟踪式目标，每日重新核验并把线上输出固定到精确版本或 commit。'
        : undefined,
    pending,
  }
}

export function planOutsidePool(
  { snapshot, curated, approved, packages, skipNames },
  size = 200,
) {
  const mapped = new Set(
    Object.keys(packages.entries || {}).map((key) => key.toLowerCase()),
  )
  const { repos } = filterPool(snapshot, curated, approved)
  const pending = repos
    .filter(({ repo }) => {
      const name = String(repo.full_name).toLowerCase()
      return !mapped.has(name) && !skipNames?.has(name)
    })
    .sort(
      (left, right) =>
        right.repo.stargazers_count - left.repo.stargazers_count ||
        (left.repo.full_name < right.repo.full_name ? -1 : 1),
    )
  return pending.slice(0, size).map(({ repo }, index) => ({
    full_name: repo.full_name,
    originalPosition: index + 1,
    inputMode: 'unmapped',
    mappedTargets: [],
    manualNote: null,
    ordinal: index + 1,
    batch: 1,
    stargazers_count: repo.stargazers_count,
  }))
}

/**
 * Replay stored evidence into proposals. Already-mapped, ineligible and
 * reviewed-skip repositories are never proposed again; `mapped` is updated so
 * one repository is applied at most once.
 */
export function evidenceProposals(records, { mapped, eligible, skipNames = new Set() }) {
  const proposals = []
  for (const record of records) {
    const key = String(record.full_name).toLowerCase()
    if (mapped.has(key) || !eligible.has(key) || skipNames.has(key)) continue
    const proposal = proposeRecord(record)
    proposals.push(proposal)
    if (proposal.decision === 'apply') mapped.add(key)
  }
  return proposals
}

export function applyProposals(packages, proposals, date) {
  if (!DATE.test(date)) throw new Error('verified_date must be YYYY-MM-DD')
  const entries = { ...packages.entries }
  const applied = []
  for (const proposal of proposals) {
    if (proposal.decision !== 'apply' || !proposal.packages?.length) continue
    const key = proposal.repository.toLowerCase()
    if (entries[key]) continue
    entries[key] = {
      packages: proposal.packages,
      status: proposal.status,
      verified_date: date,
      verified_via: proposal.verified_via,
      ...(proposal.note ? { note: proposal.note } : {}),
    }
    applied.push(proposal.repository)
  }
  return {
    packages: { ...packages, updated_at: date, entries },
    applied,
  }
}

export function renderPendingMarkdown(queue, date) {
  const seen = new Set()
  const rows = queue.filter((item) => {
    if (item.decision !== 'identity_review') return false
    const key = String(item.repository || '').toLowerCase()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
  const lines = [
    '# 订阅映射待 AI 核实',
    '',
    `更新日期：${date}。脚本已自动写入身份可追溯的映射；下表需要人工或 AI 核对后再写入 \`data/packages.json\`。不要改已有映射，不要代填 \`engines.dsh\`。`,
    '',
    '对 AI 助手说：**「按 data/review/subscription/README.md 的约定，审核 mapping-pending.md 并补映射」**',
    '',
    '| 仓库 | 原因 |',
    '| --- | --- |',
    ...rows.map(
      (item) =>
        `| ${item.repository} | ${String(item.reason || '').replace(/[|\r\n]/g, ' ')} |`,
    ),
    '',
  ]
  return lines.join('\n')
}

async function evidenceRecords() {
  const base = resolve(root, 'data/review/subscription')
  if (!existsSync(base)) return []
  const bySlug = new Map()
  const dirs = (await readdir(base, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
  for (const run of dirs) {
    const repos = resolve(base, run.name, 'repos')
    if (!existsSync(repos)) continue
    for (const name of (await readdir(repos)).sort()) {
      if (!name.endsWith('.json')) continue
      try {
        const record = JSON.parse(await readFile(resolve(repos, name), 'utf8'))
        const key = String(record.full_name || '').toLowerCase()
        if (key) bySlug.set(key, record)
      } catch {
        // Ignore torn evidence files so one corrupt record never stalls expansion.
      }
    }
  }
  return [...bySlug.values()]
}

// Same-day terminal outcomes: evidence gathered today concluded these repos
// cannot be mapped today. Re-inspecting them within the same day wastes the
// batch budget on identical probes, so the plan digs past them into fresh
// repositories. Tomorrow's evidence starts clean — upstream READMEs change,
// and the daily crawl is what lets skipped repos come back.
const TERMINAL_SKIP_OUTCOMES = new Set([
  'no_eligible_bundle_found',
  'manual_install_review',
  'needs_upstream_declaration',
  'template_or_example_review',
])

async function sameDaySkipNames(date) {
  const base = resolve(root, 'data/review/subscription')
  const skips = new Set()
  if (!existsSync(base)) return skips
  for (const run of await readdir(base, { withFileTypes: true })) {
    if (!run.isDirectory() || !run.name.startsWith(`expand-${date}`)) continue
    const repos = resolve(base, run.name, 'repos')
    if (!existsSync(repos)) continue
    for (const name of await readdir(repos)) {
      if (!name.endsWith('.json')) continue
      try {
        const record = JSON.parse(await readFile(resolve(repos, name), 'utf8'))
        if (TERMINAL_SKIP_OUTCOMES.has(record.outcome))
          skips.add(String(record.full_name).toLowerCase())
      } catch {
        // A torn record from a concurrent write must not take the batch down.
      }
    }
  }
  return skips
}

async function catalogMappingSkipNames() {
  try {
    const skips = await loadJson('data/catalog-mapping-skips.json')
    return new Set(Object.keys(skips?.entries || {}).map((key) => key.toLowerCase()))
  } catch (error) {
    if (error?.code === 'ENOENT') return new Set()
    throw error
  }
}

async function loadJson(name) {
  return JSON.parse(await readFile(resolve(root, name), 'utf8'))
}

async function main() {
  const args = process.argv.slice(2)
  const value = (key) => {
    const index = args.indexOf(key)
    return index < 0 ? undefined : args[index + 1]
  }
  const size = Number(value('--size') ?? 200)
  const date = (value('--date') ?? new Date().toISOString().slice(0, 10))
  const label = value('--label') ?? ''
  if (!/^[\w.-]{0,16}$/.test(label)) throw new Error('--label must be 0..16 word characters')
  if (!Number.isInteger(size) || size < 1 || size > 200)
    throw new Error('--size must be 1..200')
  const packages = await loadJson('data/packages.json')
  const snapshot = await loadJson('data/repositories.json')
  const curated = await loadJson('data/curated.json')
  const approved = await loadJson('data/approved.json')
  let indexCount = 0
  try {
    indexCount = (await loadJson('data/dsh-market-index.json')).plugins.length
  } catch {
    indexCount = 0
  }
  const mapped = new Set(
    Object.keys(packages.entries).map((key) => key.toLowerCase()),
  )
  const proposals = []
  const eligible = new Set(
    filterPool(snapshot, curated, approved).repos.map(({ repo }) =>
      String(repo.full_name).toLowerCase(),
    ),
  )
  // Reviewed skips bind every path that can add a mapping: stored evidence
  // predates a skip decision, so replaying it must not undo that decision.
  const mappingSkips = await catalogMappingSkipNames()
  if (args.includes('--from-evidence') || args.includes('--fill')) {
    proposals.push(...evidenceProposals(await evidenceRecords(), { mapped, eligible, skipNames: mappingSkips }))
  }
  const inspect = args.includes('--inspect') || args.includes('--fill')
  if (inspect && indexCount < MAX_PLUGINS) {
    const skipNames = new Set([
      ...(await sameDaySkipNames(date)),
      ...mappingSkips,
    ])
    const plan = planOutsidePool(
      {
        snapshot,
        curated,
        approved,
        packages: { entries: Object.fromEntries([...mapped].map((key) => [key, true])) },
        skipNames,
      },
      size,
    )
    const dir = resolve(
      root,
      'data/review/subscription',
      `expand-${date}${label}`,
    )
    await mkdir(resolve(dir, 'repos'), { recursive: true })
    let next = 0
    const concurrency = Math.min(6, plan.length || 1)
    await Promise.all(
      Array.from({ length: concurrency }, async () => {
        while (next < plan.length) {
          const row = plan[next++]
          const file = resolve(
            dir,
            'repos',
            `${String(row.ordinal).padStart(3, '0')}.json`,
          )
          let record
          if (existsSync(file) && !args.includes('--refresh'))
            record = JSON.parse(await readFile(file, 'utf8'))
          else {
            record = await inspectRepository(row)
            await writeFile(file, JSON.stringify(record, null, 2) + '\n')
          }
          const proposal = proposeRecord(record)
          proposals.push(proposal)
          console.log(`${row.ordinal}/${plan.length} ${row.full_name}: ${proposal.decision}`)
        }
      }),
    )
  }
  const result = applyProposals(packages, proposals, date)
  if (args.includes('--apply') || args.includes('--fill')) {
    await writeFile(
      resolve(root, 'data/packages.json'),
      JSON.stringify(result.packages, null, 2) + '\n',
    )
  }
  const pendingPath = resolve(root, 'data/review/subscription/mapping-pending.md')
  if (args.includes('--write-pending') || args.includes('--fill')) {
    await mkdir(dirname(pendingPath), { recursive: true })
    await writeFile(pendingPath, renderPendingMarkdown(proposals, date))
  }
  console.log(
    JSON.stringify({
      indexCount,
      cap: MAX_PLUGINS,
      proposed: proposals.length,
      apply: proposals.filter((item) => item.decision === 'apply').length,
      identityReview: proposals.filter((item) => item.decision === 'identity_review').length,
      skipped: proposals.filter((item) => item.decision === 'skip').length,
      applied: args.includes('--apply') || args.includes('--fill') ? result.applied.length : 0,
    }),
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
