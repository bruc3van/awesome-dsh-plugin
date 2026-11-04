/** Refresh into a staging directory; failed or collapsed generations never replace published data. */
import { readFile, copyFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { buildCandidates } from './candidates.mjs'
import { assertPublishable } from './policy.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))
const candidate = resolve(root, '.output/host-market/index.json')
const target = resolve(root, 'data/dsh-market-index.json')
const inputs = { market: 'market-v2', snapshot: 'repositories', curated: 'curated', approved: 'approved', packages: 'packages' }
const values = {}, hashes = {}
for (const [key, name] of Object.entries(inputs)) {
  const raw = await readFile(resolve(root, `data/${name}.json`))
  values[key] = JSON.parse(raw)
  hashes[`data/${name}.json`] = createHash('sha256').update(raw).digest('hex')
}
const feed = buildCandidates(values)
feed.subscriptionCandidates.sourceSha256 = hashes
const input = resolve(root, '.output/host-market/candidates.json')
await mkdir(resolve(root, '.output/host-market'), { recursive: true })
await writeFile(input, JSON.stringify(feed) + '\n')
const run = spawnSync(
  process.execPath,
  [
    '--import',
    new URL('./node_modules/tsx/dist/loader.mjs', import.meta.url).href,
    fileURLToPath(new URL('./generate.mjs', import.meta.url)),
    input,
    candidate,
  ],
  { stdio: 'inherit' },
)
if (run.status !== 0) process.exit(run.status ?? 1)
const next = JSON.parse(await readFile(candidate, 'utf8'))
let previous
try {
  previous = JSON.parse(await readFile(target, 'utf8'))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}
assertPublishable({ index: next, featuredRepositoryCount: feed.featuredRepositories.length, expectedFeaturedRepositoryCount: values.market.featured?.expected_repository_count }, previous)
await copyFile(candidate, target)
await copyFile(
  `${candidate}.report.json`,
  resolve(root, 'data/dsh-market-index.report.json'),
)
