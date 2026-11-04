/** Build the verified candidate pool; the generator applies the final 1000-plugin cap. */
import {
  SELF_EXCLUDED_REPOS,
  buildEntry,
  categoryForRepo,
  filterPool,
} from '../market-pool.mjs'
import { packagesBlockFor } from '../market-v2.mjs'
import { MAX_PLUGINS, SELECTION_POLICY } from './policy.mjs'
const compare = (a, b) => b.stargazers_count - a.stargazers_count || (a.full_name < b.full_name ? -1 : a.full_name > b.full_name ? 1 : 0)
export function buildCandidates({ market, snapshot, curated, approved, packages }) {
  if (market.schema_version !== 2 || packages.schema_version !== 1)
    throw Error('Unsupported candidate input schema')
  const existing = [...market.entries, ...(market.featured?.entries ?? [])]
  const seen = new Set(existing.map(row => row.full_name.toLowerCase()))
  const mappings = new Map(Object.entries(packages.entries).map(([key, value]) => [key.toLowerCase(), value]))
  const { repos } = filterPool(snapshot, curated, approved)
  const excludedRepositories = [...new Set([
    ...Object.keys(curated.excluded_repos || {}),
    ...Object.keys(curated.leaderboard_exclusions || {}),
    ...Object.keys(curated.market_exclusions || {}),
    ...SELF_EXCLUDED_REPOS,
  ].map((name) => name.toLowerCase()))].sort()
  const extra = [], pending = []
  let manual = 0
  for (const { repo, category } of repos) {
    const key = repo.full_name.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    const record = mappings.get(key)
    const block = record ? packagesBlockFor(record) : undefined
    if (block?.mode === 'command') extra.push({ ...buildEntry(repo, category), packages: block })
    else if (block?.mode === 'manual') manual++
    else pending.push({ full_name: repo.full_name, stargazers_count: repo.stargazers_count })
  }
  extra.sort(compare)
  pending.sort(compare)
  // Sorting before target dedup ensures a shared package uses its highest-star repository.
  const unique = new Map()
  const snapshotByName = new Map(snapshot.repositories.map(repo => [repo.full_name.toLowerCase(), repo]))
  for (const row of existing) {
    const key = row.full_name.toLowerCase()
    const repo = snapshotByName.get(key)
    const record = mappings.get(key)
    if (!unique.has(key)) unique.set(key, {
      ...row,
      ...(repo ? buildEntry(repo, categoryForRepo(curated, repo)) : {}),
      ...(record ? { packages: packagesBlockFor(record) } : {}),
    })
  }
  return {
    ...market,
    excludedRepositories,
    entries: [...unique.values(), ...extra].sort(compare),
    featured: { ...market.featured, entries: [] },
    featuredRepositories: [...new Set((market.featured?.entries ?? []).map(row => row.full_name).filter(Boolean))],
    subscriptionCandidates: {
      policy: 'approved-mapped-pool-v1',
      selectionPolicy: SELECTION_POLICY,
      communityRepositories: market.entries.length,
      eligiblePoolRepositories: repos.length,
      additionalMappedRepositories: extra.map(row => row.full_name),
      outsideDirectoryManual: manual,
      outsideDirectoryWithoutMapping: pending.length,
      pendingPreview: pending.slice(0, 200),
      pendingPreviewLimit: 200,
      note: `Missing mappings are pending evidence, not incompatibility. Every candidate is source-verified before the final top-${MAX_PLUGINS}-by-stars selection; repository and package counts differ.`,
    },
  }
}
