// Same-owner, same-repository renames — GitHub answers the old slug with a
// redirect to the new one, so the repository id is unchanged by construction —
// sync every stored reference automatically and keep the original approval
// date. Owner transfers, recycled slugs (same name, different id), and mapped
// targets that contain no github slug to move stay with the maintainer: they
// are reported into the review queue instead of being rewritten.
//
// Only the owner/repo slug inside github.com/… and github:… references moves.
// Everything after it — npm names, @version pins, #tag / #commit / &path:
// selectors — is manually pinned intent and is preserved byte for byte.

const GITHUB_SLUG_CONTEXT = /(github\.com\/|github:)([A-Za-z0-9._-]+)\/([A-Za-z0-9._-]+)/g

export function isSameOwnerRename({ from, to }) {
  return from.split('/')[0].toLowerCase() === to.split('/')[0].toLowerCase()
}

/** Rewrite the old slug inside github.com/… or github:… contexts of one string. */
export function syncSlug(value, from, to) {
  const [fromOwner, fromRepo] = from.toLowerCase().split('/')
  const [toOwner, toRepo] = to.split('/')
  return String(value).replace(
    GITHUB_SLUG_CONTEXT,
    (match, prefix, owner, repo) =>
      owner.toLowerCase() === fromOwner && repo.toLowerCase() === fromRepo
        ? `${prefix}${toOwner}/${toRepo}`
        : match,
  )
}

function storedKey(map, lowerKey) {
  if (!map || typeof map !== 'object') return undefined
  return Object.keys(map).find((key) => key.toLowerCase() === lowerKey)
}

function moveKey(object, fromKey, toKey) {
  if (!object || typeof object !== 'object' || !Object.hasOwn(object, fromKey)) return false
  const value = object[fromKey]
  delete object[fromKey]
  object[toKey] = value
  return true
}

function conflicts(map, fromKey, toKey) {
  return !!map && typeof map === 'object' &&
    Object.hasOwn(map, fromKey) && Object.hasOwn(map, toKey) &&
    map[toKey] !== map[fromKey]
}

function syncMappedTargets(record, from, to) {
  const packages = Array.isArray(record.packages) ? record.packages : []
  const synced = packages.map((pkg) => {
    const next = { ...pkg }
    for (const field of ['install', 'source', 'command']) {
      if (typeof next[field] === 'string') next[field] = syncSlug(next[field], from, to)
    }
    return next
  })
  return { ...record, packages: synced }
}

/** Apply same-owner renames to the curation data; return per-file results and
 * the renames left for review (owner transfers, plus renames with nothing to sync). */
export function applyRenames(
  { approved = {}, curated = {}, packages = { entries: {} }, descriptions = [], featured },
  renames,
) {
  const result = {
    approved: { ...approved },
    curated: {},
    packages: { ...packages, entries: { ...packages.entries } },
    descriptions: descriptions.map((dict) => ({ ...dict })),
    featuredEntries: [...(featured?.entries ?? [])],
    applied: [],
    review: [],
  }
  for (const [section, map] of Object.entries(curated)) result.curated[section] = { ...map }
  for (const rename of renames) {
    if (!isSameOwnerRename(rename)) {
      result.review.push({ ...rename, reason: 'owner changed — transfer needs review' })
      continue
    }
    const fromLower = rename.from.toLowerCase()
    if (fromLower === rename.to.toLowerCase()) continue
    // Keys are stored under whatever case each file uses; resolve them
    // case-insensitively and move onto GitHub's current exact-case name.
    // packages.json entries and leaderboard descriptions are lowercase dicts —
    // that is their key convention, so their destination stays lowercase.
    const moves = []
    const approvedKey = storedKey(result.approved, fromLower)
    if (approvedKey !== undefined) moves.push([result.approved, approvedKey, rename.to])
    for (const section of Object.keys(result.curated)) {
      const key = storedKey(result.curated[section], fromLower)
      if (key !== undefined) moves.push([result.curated[section], key, rename.to])
    }
    const packagesKey = storedKey(result.packages.entries, fromLower)
    if (packagesKey !== undefined)
      moves.push([result.packages.entries, packagesKey, rename.to.toLowerCase()])
    const descriptionMoves = []
    for (const dict of result.descriptions) {
      const key = storedKey(dict, fromLower)
      if (key !== undefined) descriptionMoves.push([dict, key, rename.to.toLowerCase()])
    }
    // Peek first: a collision anywhere aborts the whole rename atomically.
    if ([...moves, ...descriptionMoves].some(([map, from, to]) => conflicts(map, from, to))) {
      result.review.push({ ...rename, reason: 'target slug already exists with different data — needs review' })
      continue
    }
    let touched = false
    for (const [map, from, to] of [...moves, ...descriptionMoves])
      touched = moveKey(map, from, to) || touched
    if (packagesKey !== undefined) {
      // The key moved; keep the targets' pinned forms except the github slug itself.
      const movedKey = storedKey(result.packages.entries, rename.to.toLowerCase())
      const record = result.packages.entries[movedKey]
      if (record && record.packages)
        result.packages.entries[movedKey] = syncMappedTargets(record, rename.from, rename.to)
    }
    for (const entry of result.featuredEntries) {
      if (String(entry?.full_name ?? '').toLowerCase() === fromLower) {
        entry.full_name = rename.to
        touched = true
      }
    }
    if (touched) result.applied.push(rename)
    else result.review.push({ ...rename, reason: 'rename detected, but no stored reference found — check manually' })
  }
  return result
}

/** A stored slug that now belongs to a different repository id is an identity
 * change (deleted and re-created), never a rename: report it, touch nothing. */
export function detectIdentityChanges(repositories, previousRepositories, watchedNames) {
  const currentIds = new Map(
    repositories.map((repo) => [repo.full_name.toLowerCase(), repo.id]),
  )
  const previousIds = new Map(
    previousRepositories.map((repo) => [repo.full_name.toLowerCase(), repo.id]),
  )
  const changes = []
  for (const name of watchedNames) {
    const key = name.toLowerCase()
    const before = previousIds.get(key)
    const after = currentIds.get(key)
    if (before !== undefined && after !== undefined && before !== after)
      changes.push({ slug: name, previousId: before, currentId: after })
  }
  return changes.sort((a, b) => (a.slug < b.slug ? -1 : 1))
}
