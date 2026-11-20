import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildCandidates } from './candidates.mjs'
import { SELECTION_POLICY } from './policy.mjs'
const mapping = { packages: [{ profile: 'web', source: 'npm:demo', install: 'demo', command: 'dsh plugin add demo' }], status: 'readme-verified', verified_date: '2026-10-17', verified_via: 'README' }
test('candidate pool expands beyond the community cap before the final verified cap', () => {
  const names = ['base', 'low', 'board-only', 'blocked', 'archived', 'unapproved', 'pending', 'manual']
  const snapshot = { repositories: names.map((name, id) => ({ id: id + 1, full_name: `owner/${name}`, description: 'DSH plugin', stargazers_count: name === 'base' ? 100 : 1, archived: name === 'archived' })) }
  const market = { schema_version: 2, entries: [{ full_name: 'owner/base', stargazers_count: 100 }], featured: { entries: [{ full_name: 'owner/base' }] } }
  const input = { market, snapshot, approved: Object.fromEntries(names.filter(n => n !== 'unapproved').map(n => [`owner/${n}`, '2026-10-17'])), curated: { leaderboard_exclusions: { 'owner/board-only': 'stars accrued elsewhere' }, market_exclusions: { 'owner/blocked': 'excluded' } }, packages: { schema_version: 1, entries: Object.fromEntries(names.filter(n => n !== 'pending').map(n => [`owner/${n}`, n === 'manual' ? { ...mapping, install_mode: 'manual', manual_instructions: 'Install manually' } : mapping])) } }
  const before = JSON.stringify(input)
  const result = buildCandidates(input)
  assert.deepEqual(result.entries.map(r => r.full_name), ['owner/base', 'owner/board-only', 'owner/low'])
  assert.ok(result.excludedRepositories.includes('owner/blocked'))
  assert.ok(!result.excludedRepositories.includes('owner/board-only'))
  assert.ok(result.excludedRepositories.includes('bruc3van/awesome-dsh-plugin-pro'))
  assert.equal(result.subscriptionCandidates.selectionPolicy, SELECTION_POLICY)
  assert.deepEqual(result.featuredRepositories, ['owner/base'])
  assert.deepEqual(result.featured.entries, [])
  assert.equal(result.subscriptionCandidates.outsideDirectoryWithoutMapping, 1)
  assert.equal(result.subscriptionCandidates.outsideDirectoryManual, 1)
  assert.equal(JSON.stringify(input), before)
})
