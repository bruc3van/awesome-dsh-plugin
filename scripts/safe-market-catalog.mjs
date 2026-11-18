// One delivery snapshot for the standalone market: the reviewed repository
// catalog after market exclusions, and the exact published subscription plugin list.
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { catalogRepositories, loadState } from './render.mjs'
import { buildEntry, categoryForRepo, marketExcludedRepoNames } from './market-pool.mjs'
import { packagesBlockFor } from './market-v2.mjs'

export function buildSafeMarketCatalog(state, packages, index, report, indexRaw) {
  const subscriptionSha256 = createHash('sha256').update(indexRaw).digest('hex')
  if (index.format !== 1 || !index.plugins?.length || report.indexSha256 !== subscriptionSha256
    || report.included !== index.plugins.length || report.fetchFailures !== 0)
    throw new Error('Subscription index and its validated publication report do not match')
  const mappings = new Map(Object.entries(packages.entries).map(([name, record]) => [name.toLowerCase(), record]))
  const searchByRepo = new Map()
  const iconsByRepo = new Map()
  for (const plugin of index.plugins) {
    const match = plugin.repository?.url?.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/i)
    if (!match) continue
    const key = match[1].replace(/\.git$/, '').toLowerCase()
    const words = searchByRepo.get(key) ?? new Set()
    for (const word of [plugin.name, ...Object.values(plugin.title ?? {}), ...(plugin.metadata?.keywords ?? [])]) words.add(word)
    searchByRepo.set(key, words)
    if (plugin.icon && !iconsByRepo.has(key)) iconsByRepo.set(key, plugin.icon)
  }
  const marketExcluded = marketExcludedRepoNames(state.curated)
  const entries = []
  for (const repo of catalogRepositories(state)) {
    const key = repo.full_name.toLowerCase()
    if (marketExcluded.has(key)) continue
    const record = mappings.get(key)
    const row = buildEntry(repo, categoryForRepo(state.curated, repo))
    const categoryTitle = index.metadata?.categories?.[row.category]?.title
    entries.push({
      ...row,
      category_zh: categoryTitle?.zh || row.category_zh,
      category_en: categoryTitle?.en || row.category_en,
      ...(iconsByRepo.has(key) ? { icon: iconsByRepo.get(key) } : {}),
      ...(searchByRepo.has(key) ? { keywords: [...searchByRepo.get(key)] } : {}),
      ...(repo.archived ? { archived: true } : {}),
      ...(repo.disabled ? { disabled: true } : {}),
      ...(record ? { packages: packagesBlockFor(record) } : {}),
    })
  }
  if (!entries.length) throw new Error('The reviewed repository catalog is empty')
  return {
    schema_version: 3,
    source_fetched_at: state.snapshot.fetched_at,
    source_repo_count: state.snapshot.total_count,
    repository_count: entries.length,
    subscription_sha256: subscriptionSha256,
    subscription_updated_at: report.generatedAt,
    entries,
    subscription: index,
  }
}

export async function readSafeMarketCatalog(root) {
  const [state, packages, indexRaw, report] = await Promise.all([
    loadState(),
    readFile(new URL('data/packages.json', root), 'utf8').then(JSON.parse),
    readFile(new URL('data/dsh-market-index.json', root), 'utf8'),
    readFile(new URL('data/dsh-market-index.report.json', root), 'utf8').then(JSON.parse),
  ])
  return buildSafeMarketCatalog(state, packages, JSON.parse(indexRaw), report, indexRaw)
}
