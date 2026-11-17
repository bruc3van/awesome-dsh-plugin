import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { buildSafeMarketCatalog, readSafeMarketCatalog } from './safe-market-catalog.mjs'
import { catalogRepositories, loadState } from './render.mjs'

const root = new URL('../', import.meta.url)

test('delivery contains the complete reviewed catalog and every subscription package in order', async () => {
  const [catalog, state, raw] = await Promise.all([
    readSafeMarketCatalog(root), loadState(), readFile(new URL('data/dsh-market-index.json', root), 'utf8'),
  ])
  const index = JSON.parse(raw)
  const expected = catalogRepositories(state)
  assert.deepEqual(catalog.entries.map(row => row.full_name), expected.map(row => row.full_name))
  assert.equal(catalog.repository_count, expected.length)
  assert.deepEqual(catalog.subscription, index)
  assert.deepEqual(catalog.subscription.metadata, index.metadata)
  assert.equal(catalog.entries.filter(row => row.archived || row.disabled).length, expected.filter(repo => repo.archived || repo.disabled).length)
  for (const row of catalog.entries) {
    const title = index.metadata.categories[row.category]?.title
    if (title) assert.equal(row.category_zh, title.zh)
  }
  const monorepo = index.plugins.find(plugin => index.plugins.some(other => other !== plugin && other.repository?.url && other.repository.url === plugin.repository?.url))
  assert.ok(monorepo, 'real data must exercise distinct packages from one repository')
  assert.ok(index.plugins.some(plugin => !plugin.repository), 'npm-only plugins are not dropped')
  assert.ok(catalog.entries.some(row => row.keywords?.includes(monorepo.name)), 'subscription package names are searchable from the repository catalog')
  assert.ok(catalog.entries.some(row => row.icon), 'repository cards borrow their published plugin icon when available')
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
