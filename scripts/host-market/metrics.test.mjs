import test from 'node:test'
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'
import { applyDownloadMetrics } from './metrics.mjs'

test('optional npm download reads retain zero, omit failed counts and skip Git and custom registries', async () => {
  const requests = [], batches = []
  const server = createServer((req, res) => {
    const names = req.url.slice(1).split(',').map(decodeURIComponent)
    requests.push(...names)
    batches.push(names.length)
    res.setHeader('Content-Type', 'application/json')
    if (names[0] === '@owner/unavailable') { res.writeHead(503); res.end(); return }
    const values = names.map(name => ({ package: name, downloads: name === 'invalid' ? -1 : name === 'zero' ? 0 : 123,
      start: '2026-11-07', end: '2026-11-13' }))
    res.end(JSON.stringify(names.length === 1 ? values[0] : Object.fromEntries(values.map(value => [value.package, value]))))
  })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  try {
    const plugin = (name, source = { type: 'npm', registry: 'https://registry.npmjs.org/' }) => ({
      name, metadata: { sortKeys: { npm_weekly_downloads: 999 } },
      versions: [{ version: '1.0.0', publishTimestamp: 1, source }],
    })
    const index = { format: 1, title: 'Test', metadata: { sortKeys: { npm_weekly_downloads: { title: 'Old metric', order: 'desc' } } }, plugins: [
      plugin('zero'), plugin('@owner/scoped'), plugin('@owner/unavailable'), plugin('invalid'),
      { ...plugin('git-only', { type: 'git', url: 'https://github.com/owner/plugin', commit: 'a'.repeat(40) }), metadata: { sortKeys: {} } },
      { ...plugin('custom', { type: 'npm', registry: 'https://registry.example.com/' }), metadata: { sortKeys: {} } },
    ] }
    const fetcher = (url, options) => fetch(`http://127.0.0.1:${server.address().port}/${new URL(url).pathname.split('/').at(-1)}`, options)
    const result = await applyDownloadMetrics(index, fetcher, { intervalMs: 0 })
    assert.deepEqual(requests.sort(), ['@owner/scoped', '@owner/unavailable', 'invalid', 'zero'])
    const parsed = parseMarketIndex(index, 'https://example.com/index.json')
    assert.equal(parsed.plugins[0].metadata.sortKeys.npm_weekly_downloads, 0)
    assert.equal(parsed.plugins[1].metadata.sortKeys.npm_weekly_downloads, 123)
    assert.equal(parsed.plugins[2].metadata.sortKeys.npm_weekly_downloads, undefined)
    assert.equal(parsed.plugins[3].metadata.sortKeys.npm_weekly_downloads, undefined)
    assert.equal(result.evidence.length, 2)
    assert.equal(result.diagnostics.length, 2)
    assert.equal(parsed.metadata.sortKeys.npm_weekly_downloads.order, 'desc')
    index.plugins = index.plugins.slice(2, 4)
    await applyDownloadMetrics(index, fetcher, { intervalMs: 0 })
    assert.equal(index.metadata.sortKeys.npm_weekly_downloads, undefined)
    batches.length = 0
    index.plugins = Array.from({ length: 130 }, (_, n) => plugin(`bulk-${n}`))
    assert.equal((await applyDownloadMetrics(index, fetcher, { intervalMs: 0 })).evidence.length, 130)
    assert.deepEqual(batches, [128, 2])
  } finally {
    server.closeAllConnections()
    await new Promise(resolve => server.close(resolve))
  }
})
