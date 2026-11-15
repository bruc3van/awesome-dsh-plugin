import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'
import { applyDiscovery, discoveryLabels, FEATURED_LABEL } from './discovery.mjs'
const now = Date.parse('2026-10-22T00:00:00Z')
test('official schema preserves localized categories, keywords, labels and sortable facts', () => {
  const plugins = [{ name: 'demo', metadata: { keywords: ['search'] }, versions: [{ version: '1.0.0', publishTimestamp: 1, source: { type: 'npm' } }] }]
  const metadata = applyDiscovery(plugins, new Map([['demo', { stars: 8, repo: 'owner/demo', row: { category: 'tools', category_zh: '工具', category_en: 'Tools', pushed_at: '2026-10-17T00:00:00Z', packages: { tasks: ['检索', 'search'] } } }]]), { now })
  const index = parseMarketIndex({ format: 1, title: 'Test', metadata, plugins }, 'https://example.com/index.json')
  assert.equal(index.metadata.categories.tools.title.zh, '工具')
  assert.equal(index.metadata.sortKeys.stars.order, 'desc')
  assert.deepEqual(index.plugins[0].metadata.keywords, ['search', '检索'])
  assert.deepEqual(index.plugins[0].metadata.labels, ['npm', 'updated-week'])
  assert.equal(index.plugins[0].metadata.sortKeys.stars, 8)
  assert.equal(index.plugins[0].metadata.sortKeys.repositoryUpdated, 1792195200)
  applyDiscovery(plugins, new Map([['demo', { stars: -1, row: {} }]]))
  assert.deepEqual(plugins[0].metadata.sortKeys, {})
  assert.equal(plugins[0].metadata.category, undefined)
})
test('featured plugins retain their task category and expose an independent editor-pick label', () => {
  const plugins = [{ name: 'pick', metadata: { keywords: ['sidebar'] }, versions: [{ version: '1.0.0', publishTimestamp: 1, source: { type: 'npm' } }] }]
  const metadata = applyDiscovery(
    plugins,
    new Map([['pick', { stars: 80, repo: 'omdsh-dev/better-sidebar', row: { full_name: 'omdsh-dev/better-sidebar', category: 'ui-experience', category_zh: '界面与体验', category_en: 'UI & Experience', pushed_at: '2026-09-01T00:00:00Z' } }]]),
    { featured: ['omdsh-dev/better-sidebar'], now },
  )
  const index = parseMarketIndex({ format: 1, title: 'Test', metadata, plugins }, 'https://example.com/index.json')
  assert.equal(index.metadata.categories['ui-experience'].title.zh, '界面与体验')
  assert.equal(index.metadata.categories.featured, undefined)
  assert.equal(index.metadata.labels[FEATURED_LABEL].title.zh, '编辑推荐')
  assert.equal(index.plugins[0].metadata.category, 'ui-experience')
  assert.ok(index.plugins[0].metadata.labels.includes(FEATURED_LABEL))
  assert.ok(index.plugins[0].metadata.keywords.includes('界面体验'))
  assert.ok(index.plugins[0].metadata.keywords.includes('编辑推荐'))
})
test('recency and star labels each select one tier from snapshot facts', () => {
  assert.deepEqual(
    discoveryLabels({ stars: 666, pushedAt: '2026-10-20T00:00:00Z', now }),
    ['updated-week', 'stars-500'],
  )
  assert.deepEqual(
    discoveryLabels({ stars: 120, pushedAt: '2026-10-01T00:00:00Z', now }),
    ['updated-month', 'stars-100'],
  )
  assert.deepEqual(
    discoveryLabels({ stars: 8, pushedAt: '2026-08-01T00:00:00Z', now }),
    [],
  )
  const plugins = [{ name: 'hot', versions: [{ version: '1.0.0', publishTimestamp: 1, source: { type: 'npm' } }] }]
  applyDiscovery(
    plugins,
    new Map([['hot', { stars: 500, repo: 'owner/hot', row: { category: 'utilities', category_zh: '实用工具', category_en: 'Utilities', pushed_at: '2026-10-20T00:00:00Z' } }]]),
    { now },
  )
  assert.deepEqual(plugins[0].metadata.labels, ['npm', 'updated-week', 'stars-500'])
  assert.equal(plugins[0].metadata.category, 'utilities')
})

test('star tiers are exclusive at every threshold and omit unknown facts', () => {
  for (const [stars, expected] of [
    [0, null], [49, null], [50, 'stars-50'], [99, 'stars-50'],
    [100, 'stars-100'], [499, 'stars-100'], [500, 'stars-500'], [999, 'stars-500'],
    [1000, 'stars-1000'], [4999, 'stars-1000'], [5000, 'stars-5000'], [9999, 'stars-5000'],
    [10000, 'stars-10000'], [100000, 'stars-10000'],
  ]) {
    assert.deepEqual(discoveryLabels({ stars }), expected ? [expected] : [], `${stars} stars`)
  }
  for (const stars of [-1, NaN, Infinity, undefined, null, '500']) {
    assert.deepEqual(discoveryLabels({ stars }), [], `unknown stars: ${stars}`)
  }
})

test('recency tiers are exclusive at seven and thirty days and omit invalid dates', () => {
  const day = 24 * 60 * 60 * 1000
  for (const [age, expected] of [
    [0, ['updated-week']], [7 * day - 1, ['updated-week']],
    [7 * day, ['updated-month']], [30 * day - 1, ['updated-month']],
    [30 * day, []], [-1, []],
  ]) {
    assert.deepEqual(discoveryLabels({ pushedAt: new Date(now - age).toISOString(), now }), expected)
  }
  assert.deepEqual(discoveryLabels({ pushedAt: 'invalid', now }), [])
})

test('reapplying discovery replaces old tiers while preserving source and capability labels', () => {
  const plugins = [{ name: 'demo', metadata: { labels: ['stars-100', 'stars-500', 'updated-week', 'updated-month', 'theme'] },
    versions: [{ version: '1.0.0', publishTimestamp: 1, source: { type: 'npm' } }] }]
  const ranks = new Map([['demo', { stars: 5000, row: { pushed_at: '2026-10-20T00:00:00Z' } }]])
  const metadata = applyDiscovery(plugins, ranks, { now })
  const index = parseMarketIndex({ format: 1, title: 'Test', metadata, plugins }, 'https://example.com/index.json')
  assert.deepEqual(index.plugins[0].metadata.labels, ['npm', 'updated-week', 'stars-5000', 'theme'])
  ranks.get('demo').stars = 50
  ranks.get('demo').row.pushed_at = '2026-10-01T00:00:00Z'
  applyDiscovery(plugins, ranks, { now })
  assert.deepEqual(plugins[0].metadata.labels, ['npm', 'updated-month', 'stars-50', 'theme'])
})

test('short milestone labels are localized and low star counts stay quiet', () => {
  const metadata = applyDiscovery([], new Map())
  assert.equal(metadata.labels['stars-1000'].title.zh, '1k+ Star')
  assert.equal(metadata.labels['stars-10000'].title.en, '10k+ stars')
  assert.equal(metadata.labels['updated-month'].title.zh, '近30天更新')
  assert.equal(metadata.labels['stars-0'], undefined)
})

test('value labels stay concise and never infer capabilities from broad categories or keywords', () => {
  const plugin = { name: 'demo', metadata: { keywords: ['voice', 'image generation'],
    labels: ['voice-input', 'voice-input', 'read-aloud', 'voice-bridge-required', 'pets', 'unknown'] },
    versions: [{ version: '1.0.0', publishTimestamp: 1, source: { type: 'npm' } }] }
  const ranks = new Map([['demo', { stars: 666, row: { category: 'media-vision', pushed_at: '2026-10-20T00:00:00Z' } }]])
  const metadata = applyDiscovery([plugin], ranks, { now })
  const index = parseMarketIndex({ format: 1, title: 'Test', metadata, plugins: [plugin] }, 'https://example.com/index.json')
  assert.deepEqual(index.plugins[0].metadata.labels,
    ['npm', 'updated-week', 'stars-500', 'voice-input', 'read-aloud', 'voice-bridge-required'])
  assert.equal(index.metadata.labels['voice-input'].title.zh, '语音输入')
  assert.equal(index.metadata.labels['voice-input'].dimension, undefined)
  assert.equal(index.metadata.labels.pets, undefined)
  delete plugin.metadata.labels
  applyDiscovery([plugin], ranks, { now })
  assert.deepEqual(plugin.metadata.labels, ['npm', 'updated-week', 'stars-500'])
})


test('reviewed task aliases improve discovery and pinned Git sources supply missing repository links', () => {
  const plugin = { name: 'reviewer', metadata: { labels: ['code-review'] },
    versions: [{ version: '1.0.0', publishTimestamp: 1,
      source: { type: 'git', url: 'https://github.com/owner/tools.git', commit: 'a'.repeat(40), path: 'plugins/reviewer' } }] }
  const metadata = applyDiscovery([plugin], new Map([['reviewer', { stars: 80, repo: 'owner/tools', row: { category: 'developer-tools' } }]]),
    { featured: ['owner/tools'], now })
  const index = parseMarketIndex({ format: 1, title: 'Test', metadata, plugins: [plugin] }, 'https://example.com/index.json')
  assert.equal(index.plugins[0].metadata.category, 'developer-tools')
  assert.ok(index.plugins[0].metadata.labels.includes('featured'))
  assert.ok(index.plugins[0].metadata.labels.includes('code-review'))
  assert.ok(index.plugins[0].metadata.keywords.includes('审查代码'))
  assert.deepEqual(index.plugins[0].repository, { url: 'https://github.com/owner/tools', directory: 'plugins/reviewer' })
  plugin.repository = { url: 'https://github.com/owner/declared' }
  applyDiscovery([plugin], new Map([['reviewer', { stars: 80, row: {} }]]))
  assert.equal(plugin.repository.url, 'https://github.com/owner/declared')
})
