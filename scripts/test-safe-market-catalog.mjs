import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { buildCompactMarketCatalog, buildSafeMarketCatalog, readSafeMarketCatalog } from './safe-market-catalog.mjs'
import { marketBlockedRepoNames, SELF_EXCLUDED_REPOS, TEXT_LIMITS } from './market-pool.mjs'
import { catalogRepositories, loadState } from './render.mjs'

const root = new URL('../', import.meta.url)

test('delivery applies every market exclusion and preserves subscription order', async () => {
  const [catalog, state, raw] = await Promise.all([
    readSafeMarketCatalog(root), loadState(), readFile(new URL('data/dsh-market-index.json', root), 'utf8'),
  ])
  const index = JSON.parse(raw)
  const blocked = marketBlockedRepoNames(state.curated)
  const reviewed = catalogRepositories(state)
  const expected = reviewed.filter(repo => !blocked.has(repo.full_name.toLowerCase()))
  assert.deepEqual(catalog.entries.map(row => row.full_name), expected.map(repo => repo.full_name))
  assert.equal(catalog.repository_count, expected.length)
  assert.deepEqual(catalog.subscription, index)
  for (const flag of ['archived', 'disabled']) {
    assert.deepEqual(catalog.entries.filter(row => row[flag]).map(row => row.full_name),
      expected.filter(repo => repo[flag]).map(repo => repo.full_name))
  }

  const deliveredNames = new Set(catalog.entries.map(row => row.full_name))
  // Market-class and self-excluded repositories never reach the market.
  for (const name of [
    'dsh-market/dsh-market',
    'dataelement/dsh-desktop',
    'CSlawyer1985/dsh-desktop',
    'shutongX/dsh-plugins-index',
    ...SELF_EXCLUDED_REPOS,
  ]) {
    assert.ok(!deliveredNames.has(name), `${name} is excluded from the market`)
  }
  // A board exclusion is a market exclusion: desktop clients and
  // star-inflated repositories must not appear in either feed.
  for (const name of [
    'tw93/Mole',
    'reactive-resume/reactive-resume',
    'alchaincyf/nuwa-skill',
    'Ebony-Vinyl/dsh-our-free-model',
  ]) {
    assert.ok(!deliveredNames.has(name), `${name} is board-excluded and must not reach the market`)
  }
  for (const [name, reason] of Object.entries(state.curated.leaderboard_exclusions)) {
    assert.ok(!deliveredNames.has(name), `${name} is in leaderboard_exclusions (${reason})`)
  }

  assert.ok(catalog.subscription.plugins.some(plugin => plugin.name === 'dsh-vision-bridge-zh'))
  const monorepo = index.plugins.find(plugin => index.plugins.some(other => other !== plugin && other.repository?.url && other.repository.url === plugin.repository?.url))
  assert.ok(monorepo, 'real data must exercise distinct packages from one repository')
  assert.ok(index.plugins.some(plugin => !plugin.repository), 'npm-only plugins are not dropped')
  // Schema 3 keeps the row shape released clients (dsh-market-pro <= 1.2.4) read.
  assert.ok(catalog.entries.some(row => row.keywords?.includes(monorepo.name)), 'subscription package names are searchable from the repository catalog')
  assert.ok(catalog.entries.some(row => row.icon), 'repository cards borrow their published plugin icon when available')
  assert.ok(catalog.entries.every(row => Number.isInteger(row.id)), 'schema-3 rows keep their repository id')

  // Verify schema-4 compact projection stays lossless and dramatically smaller.
  const compact = buildCompactMarketCatalog(catalog)
  assert.equal(compact.schema_version, 4)
  assert.equal(compact.entries.length, catalog.entries.length)
  assert.ok(compact.category_table.length > 0)
  assert.equal(compact.entries[0].n, catalog.entries[0].full_name)
  assert.ok(compact.entries.every(row => row.icon === undefined && row.keywords === undefined), 'schema 4 leaves icons/keywords on subscription.plugins only')
  assert.ok(Buffer.byteLength(JSON.stringify(compact)) < Buffer.byteLength(JSON.stringify(catalog)) * 0.8)
})

test('every row carries an install_status consistent with its packages block', async () => {
  const catalog = await readSafeMarketCatalog(root)
  const byName = new Map(catalog.entries.map(row => [row.full_name.toLowerCase(), row]))
  const counts = { command: 0, manual: 0, none: 0 }
  for (const row of catalog.entries) {
    assert.ok(row.install_status === 'command' || row.install_status === 'manual' || row.install_status === 'none',
      `${row.full_name}: install_status ${JSON.stringify(row.install_status)}`)
    counts[row.install_status] += 1
    if (row.packages === undefined) assert.equal(row.install_status, 'none', `${row.full_name}: packages missing but status is ${row.install_status}`)
    else {
      assert.equal(row.packages.mode, row.install_status, `${row.full_name}: packages.mode ${row.packages.mode} vs ${row.install_status}`)
      if (row.install_status === 'command') assert.ok(row.packages.targets.length > 0, `${row.full_name}: command mode without targets`)
    }
    for (const field of ['title_zh', 'title_en', 'description_en']) {
      if (row[field] === undefined) continue
      assert.equal(typeof row[field], 'string', `${row.full_name}: ${field} must be a string`)
      assert.equal(row[field], row[field].replace(/\s+/g, ' ').trim(), `${row.full_name}: ${field} must be folded`)
      const limit = field === 'description_en' ? TEXT_LIMITS.description : TEXT_LIMITS.title
      assert.ok([...row[field]].length <= limit, `${row.full_name}: ${field} exceeds ${limit} code points`)
    }
  }
  assert.ok(counts.command > 1000, `expected a real installable set, got ${counts.command} command rows`)
  assert.ok(counts.none > 0, 'the catalog keeps its unmapped tail (marked, not hidden)')
  // A repository that publishes a subscription plugin reaches the market with
  // that plugin's title and copy, not with its own repository blurb.
  const sample = catalog.entries.find(row => row.title_zh && row.install_status === 'command')
  assert.ok(sample, 'at least one installable row carries the subscription plugin title')
  assert.ok(byName.size === catalog.entries.length, 'full_name is the row identity')
})

test('mismatched or incomplete subscription publication is never packaged', async () => {
  const [state, packages, indexRaw, report] = await Promise.all([
    loadState(), readFile(new URL('data/packages.json', root), 'utf8').then(JSON.parse),
    readFile(new URL('data/dsh-market-index.json', root), 'utf8'),
    readFile(new URL('data/dsh-market-index.report.json', root), 'utf8').then(JSON.parse),
  ])
  const index = JSON.parse(indexRaw)
  for (const broken of [{ ...report, indexSha256: 'wrong' }, { ...report, included: 1 }, { ...report, fetchFailures: 1 }])
    assert.throws(() => buildSafeMarketCatalog(state, packages, index, broken, indexRaw), /do not match/)
})
