/** Validate the committed index, its report hash, and the published plugin cap. */
import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'
import { SELF_EXCLUDED_REPOS } from '../market-pool.mjs'
import { assertPublishable, MAX_PLUGINS } from './policy.mjs'
import { repositorySlug } from './repository-policy.mjs'

const root = fileURLToPath(new URL('../..', import.meta.url))
const indexPath = resolve(process.argv[2] ?? resolve(root, 'data/dsh-market-index.json'))
const reportPath = resolve(
  process.argv[3] ?? indexPath.replace(/\.json$/, '.report.json'),
)

const indexText = await readFile(indexPath, 'utf8')
const index = parseMarketIndex(
  JSON.parse(indexText),
  'https://bruc3van.com/dsh-plugins/index.json',
)
const report = JSON.parse(await readFile(reportPath, 'utf8'))
const curated = JSON.parse(
  await readFile(resolve(root, 'data/curated.json'), 'utf8'),
)
const featured = JSON.parse(
  await readFile(resolve(root, 'data/featured.json'), 'utf8'),
)

function fail(message) {
  throw new Error(`${message}; published data must not be committed`)
}

assertPublishable({ index, fetchFailures: report.fetchFailures, featuredRepositoryCount: report.summary.featuredRepositories, expectedFeaturedRepositoryCount: featured.expected_repository_count })

if (index.plugins.length > MAX_PLUGINS)
  fail(`index contains ${index.plugins.length} plugins, cap is ${MAX_PLUGINS}`)
if (report.included !== index.plugins.length)
  fail(`report included=${report.included}, index plugins=${index.plugins.length}`)
if (report.indexSha256 !== createHash('sha256').update(indexText).digest('hex'))
  fail('report indexSha256 does not match the index bytes')
if (report.selection) {
  if (report.selection.included !== index.plugins.length)
    fail(
      `report selection included=${report.selection.included}, index plugins=${index.plugins.length}`,
    )
  if (report.selection.eligiblePlugins < index.plugins.length)
    fail('report selection eligible count is smaller than the published index')
  if (
    report.selection.droppedByLimit !==
    report.selection.eligiblePlugins - index.plugins.length
  )
    fail('report selection droppedByLimit is inconsistent')
}
const blockedRepositories = new Set([
  ...Object.keys(curated.excluded_repos || {}),
  ...Object.keys(curated.leaderboard_exclusions || {}),
  ...Object.keys(curated.market_exclusions || {}),
  ...SELF_EXCLUDED_REPOS,
].map((name) => name.toLowerCase()))
const featuredRepositories = new Set(
  (featured.entries ?? [])
    .map((entry) => String(entry?.full_name ?? '').toLowerCase())
    .filter(Boolean),
)

let previousStars = Infinity
const names = new Set()
for (const plugin of index.plugins) {
  if (names.has(plugin.name))
    fail(`duplicate plugin name in index: ${plugin.name}`)
  names.add(plugin.name)
  const stars = plugin.metadata?.sortKeys?.stars ?? -1
  if (stars > previousStars)
    fail(`index is not sorted by stars: ${plugin.name}`)
  previousStars = stars
  for (const reference of [
    plugin.repository?.url,
    ...plugin.versions.map((version) =>
      version.source?.type === 'git' ? version.source.url : null,
    ),
  ]) {
    const slug = repositorySlug(reference)
    // Editor's-pick repositories are exempt from the package-level blacklist
    // (same rule as generate.mjs): board/leaderboard exclusions police star
    // provenance, not market fitness.
    if (slug && blockedRepositories.has(slug) && !featuredRepositories.has(slug))
      fail(`index contains blacklisted repository ${slug} via ${plugin.name}`)
  }
}

console.log(
  `Index policy OK: ${index.plugins.length}/${MAX_PLUGINS} plugins, ` +
    `report hash matches, stars are non-increasing, no blacklisted package sources` +
    (report.selection
      ? `, ${report.selection.droppedByLimit} verified plugins beyond the cap`
      : ''),
)
