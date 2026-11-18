// One delivery snapshot for the standalone market: the reviewed repository
// catalog after every market exclusion, and the exact published subscription
// plugin list. Each row states its install_status (command / manual / none)
// so a consumer can separate an installable plugin from a catalog-only
// repository without re-deriving it, and a repository that publishes a
// subscription plugin borrows that plugin's title and copy instead of its
// repository blurb.
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { catalogRepositories, loadState } from './render.mjs'
import { buildEntry, categoryForRepo, cleanText, marketBlockedRepoNames, TEXT_LIMITS } from './market-pool.mjs'
import { packagesBlockFor } from './market-wire.mjs'

const localized = (value) => (typeof value === 'string' ? value : '')

// The wire status of one row's install target: a paste-ready command target,
// a hand-written manual note, or nothing at all (catalog-only).
function installStatusOf(record) {
  if (record === undefined) return 'none'
  return record.install_mode === 'manual' ? 'manual' : 'command'
}

/**
 * The editorial shortlist data/featured.json stays hand-maintained; the
 * catalog carries it so the picks survive the schema-2 retirement and a future
 * client can render a real editor's-picks shelf (the subscription is the
 * published set, not a curated shortlist).
 */
function featuredBlockFor(featured) {
  if (featured === null || typeof featured !== 'object' || Array.isArray(featured)) return undefined
  if (!Array.isArray(featured.entries) || featured.entries.length === 0) return undefined
  const seen = new Set()
  const entries = []
  for (const entry of featured.entries) {
    const fullName = typeof entry?.full_name === 'string' ? entry.full_name : ''
    if (!/^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(fullName) || seen.has(fullName)) {
      throw new Error(`featured entry ${JSON.stringify(fullName)} is invalid or duplicated`)
    }
    seen.add(fullName)
    const description = cleanText(entry.description, TEXT_LIMITS.description)
    if (description === '') throw new Error(`featured entry ${fullName} has no description`)
    entries.push({ full_name: fullName, description })
  }
  return {
    schema_version: 1,
    title_zh: cleanText(featured.title_zh, TEXT_LIMITS.title),
    title_en: cleanText(featured.title_en, TEXT_LIMITS.title),
    updated_at: cleanText(featured.updated_at, 30),
    entries,
  }
}

export function buildSafeMarketCatalog(state, packages, index, report, indexRaw, featured = null) {
  const subscriptionSha256 = createHash('sha256').update(indexRaw).digest('hex')
  if (index.format !== 1 || !index.plugins?.length || report.indexSha256 !== subscriptionSha256
    || report.included !== index.plugins.length || report.fetchFailures !== 0)
    throw new Error('Subscription index and its validated publication report do not match')
  const mappings = new Map(Object.entries(packages.entries).map(([name, record]) => [name.toLowerCase(), record]))
  const searchByRepo = new Map()
  const iconsByRepo = new Map()
  const pluginsByRepo = new Map()
  for (const plugin of index.plugins) {
    const match = plugin.repository?.url?.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/i)
    if (!match) continue
    const key = match[1].replace(/\.git$/, '').toLowerCase()
    const words = searchByRepo.get(key) ?? new Set()
    for (const word of [plugin.name, ...Object.values(plugin.title ?? {}), ...(plugin.metadata?.keywords ?? [])]) words.add(word)
    searchByRepo.set(key, words)
    if (plugin.icon && !iconsByRepo.has(key)) iconsByRepo.set(key, plugin.icon)
    // The first plugin of a repository is the one that names its card. A
    // monorepo publishing several plugins still has exactly one row here, and
    // picking in index order keeps the feed byte-stable.
    if (!pluginsByRepo.has(key)) {
      pluginsByRepo.set(key, {
        titleZh: cleanText(localized(plugin.title?.zh), TEXT_LIMITS.title),
        titleEn: cleanText(localized(plugin.title?.en), TEXT_LIMITS.title),
        descriptionZh: cleanText(localized(plugin.description?.zh), TEXT_LIMITS.description),
        descriptionEn: cleanText(localized(plugin.description?.en), TEXT_LIMITS.description),
      })
    }
  }
  const marketBlocked = marketBlockedRepoNames(state.curated)
  const entries = []
  for (const repo of catalogRepositories(state)) {
    const key = repo.full_name.toLowerCase()
    if (marketBlocked.has(key)) continue
    const record = mappings.get(key)
    const plugin = pluginsByRepo.get(key)
    const row = buildEntry(repo, categoryForRepo(state.curated, repo))
    const categoryTitle = index.metadata?.categories?.[row.category]?.title
    const titleZh = plugin?.titleZh || plugin?.titleEn || ''
    const titleEn = plugin?.titleEn || plugin?.titleZh || ''
    entries.push({
      ...row,
      // A repository that publishes a subscription plugin is a plugin first
      // and a repository second: its card should read "Mole · Computer
      // Cleanup", not "Open-source Mac and PC cleaner".
      ...(plugin?.descriptionZh ? { description: cleanText(plugin.descriptionZh, TEXT_LIMITS.description) } : {}),
      ...(titleZh ? { title_zh: titleZh } : {}),
      ...(titleEn ? { title_en: titleEn } : {}),
      ...(plugin?.descriptionEn ? { description_en: cleanText(plugin.descriptionEn, TEXT_LIMITS.description) } : {}),
      install_status: installStatusOf(record),
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
  const featuredBlock = featuredBlockFor(featured)
  return {
    schema_version: 3,
    source_fetched_at: state.snapshot.fetched_at,
    source_repo_count: state.snapshot.total_count,
    repository_count: entries.length,
    subscription_sha256: subscriptionSha256,
    subscription_updated_at: report.generatedAt,
    entries,
    ...(featuredBlock === undefined ? {} : { featured: featuredBlock }),
    subscription: index,
  }
}

export async function readSafeMarketCatalog(root) {
  const [state, packages, indexRaw, report, featured] = await Promise.all([
    loadState(),
    readFile(new URL('data/packages.json', root), 'utf8').then(JSON.parse),
    readFile(new URL('data/dsh-market-index.json', root), 'utf8'),
    readFile(new URL('data/dsh-market-index.report.json', root), 'utf8').then(JSON.parse),
    readFile(new URL('data/featured.json', root), 'utf8').then(JSON.parse).catch(() => null),
  ])
  return buildSafeMarketCatalog(state, packages, JSON.parse(indexRaw), report, indexRaw, featured)
}
