/** Refresh into a staging directory; failed or collapsed generations never replace published data. */
import { readFile, copyFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { buildCandidates } from './candidates.mjs'
import { assertPublishable, PINNED_SELECTION_POLICY, SUBSCRIPTION_PICK } from './policy.mjs'
import { buildMarketShadow } from '../market-shadow.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))
const candidate = resolve(root, '.output/host-market/index.json')
const target = resolve(root, 'data/dsh-market-index.json')
// The index generator predates schema 3: build its schema-2-shaped input in
// memory (the published market-v2 file was retired on 2026-11-18).
const inputs = { snapshot: 'repositories', curated: 'curated', approved: 'approved', packages: 'packages' }
const values = {}, hashes = {}
for (const [key, name] of Object.entries(inputs)) {
  const raw = await readFile(resolve(root, `data/${name}.json`))
  values[key] = JSON.parse(raw)
  hashes[`data/${name}.json`] = createHash('sha256').update(raw).digest('hex')
}
const featuredRaw = await readFile(resolve(root, 'data/featured.json'))
const featured = JSON.parse(featuredRaw)
hashes['data/featured.json'] = createHash('sha256').update(featuredRaw).digest('hex')
values.market = buildMarketShadow({
  ...values,
  featured: {
    ...featured,
    entries: [SUBSCRIPTION_PICK, ...featured.entries],
    expected_repository_count: featured.expected_repository_count + 1,
  },
})
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
const candidateBytes = await readFile(candidate)
const next = JSON.parse(candidateBytes)
let previous
try {
  previous = JSON.parse(await readFile(target, 'utf8'))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}
try {
  assertPublishable({ index: next, indexBytes: candidateBytes.byteLength, featuredRepositoryCount: feed.featuredRepositories.length, expectedFeaturedRepositoryCount: values.market.featured.expected_repository_count, selectionPolicy: PINNED_SELECTION_POLICY }, previous)
} catch (error) {
  // The generic policy message hides which source lookups failed; surface them
  // from the staging report so a transient registry/Git failure is debuggable
  // without a local 20-minute regeneration.
  try {
    const staging = JSON.parse(await readFile(`${candidate}.report.json`, 'utf8'))
    console.error('staging diagnostics by code:', JSON.stringify(staging.summary?.diagnosticsByCode ?? {}))
    const failed = (staging.diagnostics ?? []).filter((entry) => /fetch_failed|not_found|cleanup_failed/.test(String(entry.code)))
    console.error(`source lookups that failed: ${failed.length}`)
    for (const entry of failed.slice(0, 25)) console.error(' -', entry.code, entry.name ?? '', entry.target ?? '', entry.reason ?? '')
    const evidenceFailures = [...(staging.npmEvidence ?? []), ...(staging.gitEvidence ?? [])].filter((entry) => entry?.fetchFailed || entry?.status === 'failed' || entry?.ok === false)
    for (const entry of evidenceFailures.slice(0, 10)) console.error(' - evidence:', JSON.stringify(entry).slice(0, 300))
  } catch (reportError) {
    console.error(`staging report unreadable: ${reportError instanceof Error ? reportError.message : String(reportError)}`)
  }
  throw error
}
await copyFile(candidate, target)
await copyFile(
  `${candidate}.report.json`,
  resolve(root, 'data/dsh-market-index.report.json'),
)
