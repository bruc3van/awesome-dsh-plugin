/** Optional public npm usage counts; failures omit the metric without rejecting an installable plugin. */
import { setTimeout as delay } from 'node:timers/promises'

export async function applyDownloadMetrics(index, fetcher = fetch, { intervalMs = 1500 } = {}) {
  const plugins = index.plugins.filter(plugin => plugin.versions.some(version =>
    version.source.type === 'npm' && version.source.registry === 'https://registry.npmjs.org/'))
  const unscoped = plugins.filter(plugin => !plugin.name.startsWith('@'))
  const batches = []
  // npm's bulk endpoint accepts at most 128 unscoped names; scoped packages require separate requests.
  for (let offset = 0; offset < unscoped.length; offset += 128) batches.push(unscoped.slice(offset, offset + 128))
  batches.push(...plugins.filter(plugin => plugin.name.startsWith('@')).map(plugin => [plugin]))
  const diagnostics = [], evidence = []
  for (const plugin of index.plugins) delete plugin.metadata.sortKeys.npm_weekly_downloads
  for (const [position, batch] of batches.entries()) {
    if (position > 0) await delay(intervalMs)
    let payload
    try {
      const names = batch.map(plugin => encodeURIComponent(plugin.name)).join(',')
      const response = await fetcher(`https://api.npmjs.org/downloads/point/last-week/${names}`, {
        signal: AbortSignal.timeout(15000), redirect: 'error', headers: { accept: 'application/json' },
      })
      if (!response.ok) {
        await response.body?.cancel()
        throw Error(`HTTP ${response.status}`)
      }
      payload = await response.json()
    } catch (error) {
      diagnostics.push(...batch.map(plugin => ({ name: plugin.name, code: 'npm_downloads_unavailable', status: 'warning', reason: error.message })))
      continue
    }
    for (const plugin of batch) {
      const value = batch.length === 1 ? payload : payload?.[plugin.name]
      if (value?.package !== plugin.name || !Number.isSafeInteger(value.downloads) || value.downloads < 0
        || !/^\d{4}-\d{2}-\d{2}$/.test(value.start) || !/^\d{4}-\d{2}-\d{2}$/.test(value.end)
        || value.start > value.end) {
        diagnostics.push({ name: plugin.name, code: 'npm_downloads_unavailable', status: 'warning', reason: 'Invalid npm download window or count' })
        continue
      }
      plugin.metadata.sortKeys.npm_weekly_downloads = value.downloads
      evidence.push({ name: plugin.name, downloads: value.downloads, start: value.start, end: value.end })
    }
  }
  delete index.metadata.sortKeys.npm_weekly_downloads
  if (evidence.length) index.metadata.sortKeys.npm_weekly_downloads = {
    title: { zh: 'npm 周下载量', en: 'npm weekly downloads' }, order: 'desc',
  }
  evidence.sort((a, b) => a.name.localeCompare(b.name, 'en'))
  diagnostics.sort((a, b) => a.name.localeCompare(b.name, 'en'))
  return { diagnostics, evidence }
}
