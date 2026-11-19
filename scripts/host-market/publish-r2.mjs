#!/usr/bin/env node
/**
 * Plan A: Publish validated host-market snapshots
 * directly to Cloudflare R2 after atomic Git publication succeeds.
 *
 * Upload order guarantees atomic visibility:
 *   1. releases/<revision>/index.json
 *   2. releases/<revision>/audit.json
 *   3. releases/<revision>/release.json
 *   4. latest.json  (flipped strictly LAST after all immutable blobs succeed)
 *
 * The bilingual web catalog is NOT pre-built here: bruc3van-web derives it from
 * index + audit with its own createCatalog, so there is exactly one implementation.
 *
 * Uses Cloudflare's R2 REST API with zero third-party dependencies:
 *   PUT https://api.cloudflare.com/client/v4/accounts/{accountId}/r2/buckets/{bucket}/objects/{key}
 */
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))
const SHA40 = /^[a-f0-9]{40}$/

export function sha256(text) {
  return createHash('sha256').update(text, 'utf8').digest('hex')
}

/** Build the complete, verified set of R2 objects (latest.json strictly last). */
export function buildR2Payload({ revision, indexText, auditText, releaseText, publishedAt = new Date().toISOString() }) {
  if (!SHA40.test(revision)) throw new Error(`Invalid revision SHA: ${revision}`)
  const index = JSON.parse(indexText)
  const report = JSON.parse(auditText)
  const release = JSON.parse(releaseText)
  const indexSha256 = sha256(indexText)
  const auditSha256 = sha256(auditText)
  if (report.indexSha256 !== indexSha256 || release.indexSha256 !== indexSha256 || release.auditSha256 !== auditSha256) {
    throw new Error('Snapshot digest mismatch — refusing to upload inconsistent R2 release')
  }
  if (report.fetchFailures !== 0 || !Array.isArray(index.plugins) || report.included !== index.plugins.length) {
    throw new Error('Snapshot report integrity check failed')
  }
  const latestText = JSON.stringify({
    format: 1,
    revision,
    generatedAt: report.generatedAt,
    publishedAt,
    indexSha256,
    auditSha256,
    pluginCount: index.plugins.length,
  }) + '\n'

  const prefix = `releases/${revision}`
  return [
    { key: `${prefix}/index.json`, body: indexText, sha256: indexSha256, immutable: true },
    { key: `${prefix}/audit.json`, body: auditText, sha256: auditSha256, immutable: true },
    { key: `${prefix}/release.json`, body: releaseText, sha256: sha256(releaseText), immutable: true },
    { key: 'latest.json', body: latestText, sha256: sha256(latestText), immutable: false },
  ]
}

function objectUrl(accountId, bucket, key) {
  const encodedKey = key.split('/').map(encodeURIComponent).join('/')
  return `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/r2/buckets/${encodeURIComponent(bucket)}/objects/${encodedKey}`
}

/**
 * Read an object back through the same REST API and prove it is byte-identical
 * to what was uploaded. This is what makes the first real run self-checking:
 * a wrong endpoint, a body wrapped in a JSON envelope, or a silent truncation
 * fails here instead of surfacing later as a gateway digest mismatch.
 */
export async function verifyR2Object({ accountId, bucket, token, key, sha256: expected }, fetcher = fetch) {
  const response = await fetcher(objectUrl(accountId, bucket, key), {
    method: 'GET',
    signal: AbortSignal.timeout(60_000),
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!response.ok) throw new Error(`R2 read-back of ${key} failed with HTTP ${response.status}`)
  const actual = sha256(await response.text())
  if (actual !== expected) throw new Error(`R2 read-back of ${key} does not match the upload (sha256 ${actual.slice(0, 12)}… ≠ ${expected.slice(0, 12)}…)`)
}

export async function putR2Object({ accountId, bucket, token, key, body, immutable }, fetcher = fetch) {
  const url = objectUrl(accountId, bucket, key)
  let lastError
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetcher(url, {
        method: 'PUT',
        signal: AbortSignal.timeout(30_000),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=60',
        },
        body,
      })
      if (response.ok) return
      const detail = await response.text().catch(() => '')
      const error = new Error(`R2 PUT ${key} failed with HTTP ${response.status}${detail ? `: ${detail.slice(0, 200)}` : ''}`)
      if (response.status < 500 && response.status !== 429) throw error
      lastError = error
    } catch (error) {
      lastError = error
      if (attempt === 3 || /HTTP 4(?!29)\d\d/.test(String(error?.message))) throw error
    }
    await new Promise((r) => setTimeout(r, attempt * 1000))
  }
  throw lastError
}

export async function publishToR2(options, fetcher = fetch) {
  const objects = buildR2Payload(options)
  if (options.dryRun) return { uploaded: objects.map((o) => ({ key: o.key, bytes: Buffer.byteLength(o.body), sha256: o.sha256 })) }
  const { accountId, bucket, token } = options
  if (!accountId || !bucket || !token) {
    throw new Error('CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_R2_BUCKET, and CLOUDFLARE_API_TOKEN are required')
  }
  // Upload and read back the immutable blobs first; flip latest.json strictly LAST.
  const immutableBlobs = objects.slice(0, -1)
  const pointer = objects.at(-1)
  await Promise.all(immutableBlobs.map((obj) => putR2Object({ accountId, bucket, token, ...obj }, fetcher)))
  // latest.json must never point at a blob that did not land intact.
  await Promise.all(immutableBlobs.map((obj) => verifyR2Object({ accountId, bucket, token, ...obj }, fetcher)))
  await putR2Object({ accountId, bucket, token, ...pointer }, fetcher)
  await verifyR2Object({ accountId, bucket, token, ...pointer }, fetcher)
  return { uploaded: objects.map((o) => ({ key: o.key, bytes: Buffer.byteLength(o.body), sha256: o.sha256 })) }
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const valueOf = (flag) => {
    const i = args.indexOf(flag)
    return i >= 0 ? args[i + 1] : undefined
  }
  const dataDir = resolve(root, valueOf('--dir') ?? 'data')
  const revision =
    valueOf('--revision') ||
    process.env.RELEASE_REVISION ||
    execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
  const [indexText, auditText, releaseText] = await Promise.all([
    readFile(resolve(dataDir, 'dsh-market-index.json'), 'utf8'),
    readFile(resolve(dataDir, 'dsh-market-index.report.json'), 'utf8'),
    readFile(resolve(dataDir, 'dsh-market-release.json'), 'utf8'),
  ])
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || ''
  const token = process.env.CLOUDFLARE_API_TOKEN || ''
  const bucket = process.env.CLOUDFLARE_R2_BUCKET || 'bruc3van-dsh-market'
  const result = await publishToR2({ revision, indexText, auditText, releaseText, accountId, bucket, token, dryRun })
  for (const item of result.uploaded) {
    console.log(`${dryRun ? '[dry-run] ' : ''}R2 ${item.key}: ${item.bytes} bytes (sha256 ${item.sha256.slice(0, 12)}…)`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  })
}
