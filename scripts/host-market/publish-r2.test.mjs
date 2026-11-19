import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildR2Payload, publishToR2, sha256 } from './publish-r2.mjs'

const revision = 'a'.repeat(40)
const sampleIndex = {
  format: 1,
  title: { zh: '测试', en: 'Test' },
  metadata: { categories: { 'developer-tools': { title: { zh: '开发工具', en: 'Developer Tools' } } } },
  plugins: [
    {
      name: 'demo-plugin',
      title: { zh: '示例插件', en: 'Demo Plugin' },
      description: { zh: '说明', en: 'Description' },
      repository: { url: 'https://github.com/acme/demo-plugin' },
      metadata: { category: 'developer-tools', keywords: ['demo'], labels: ['npm'], sortKeys: { stars: 42, repositoryUpdated: 1700000000 } },
      versions: [{ version: '1.0.0', publishTimestamp: 1700000000, source: { type: 'npm', registry: 'https://registry.npmjs.org/' }, engines: { dsh: '>=0.2.1' } }],
    },
  ],
}
const indexText = JSON.stringify(sampleIndex) + '\n'
const report = { indexSha256: sha256(indexText), included: 1, fetchFailures: 0, generatedAt: '2026-11-19T00:00:00Z' }
const auditText = JSON.stringify(report) + '\n'
const releaseText = JSON.stringify({ format: 1, sourceSha: revision, triggerSha: revision, runId: 1, indexSha256: sha256(indexText), auditSha256: sha256(auditText) }) + '\n'

/** In-memory stand-in for the R2 object REST API (PUT stores, GET returns raw bytes). */
function fakeR2({ corrupt = () => false } = {}) {
  const store = new Map()
  const log = []
  const fetcher = async (url, init) => {
    assert.equal(init.headers.Authorization, 'Bearer secret-token')
    const key = decodeURIComponent(url.split('/objects/')[1])
    log.push(`${init.method} ${key}`)
    if (init.method === 'PUT') {
      store.set(key, corrupt(key) ? `${init.body}x` : init.body)
      return new Response(JSON.stringify({ success: true }), { status: 200 })
    }
    return store.has(key) ? new Response(store.get(key)) : new Response('not found', { status: 404 })
  }
  return { fetcher, log, store }
}
const auth = { accountId: 'acct-1', bucket: 'bruc3van-dsh-market', token: 'secret-token' }

test('every immutable blob is read back intact before latest.json flips, and latest.json is read back too', async () => {
  const r2 = fakeR2()
  await publishToR2({ revision, indexText, auditText, releaseText, ...auth }, r2.fetcher)
  const flip = r2.log.indexOf('PUT latest.json')
  for (const blob of ['index.json', 'audit.json', 'release.json']) {
    assert.ok(r2.log.indexOf(`GET releases/${revision}/${blob}`) < flip, `${blob} is verified before the pointer flips`)
  }
  assert.equal(r2.log.at(-1), 'GET latest.json', 'the pointer itself is read back last')
})

test('a blob that does not read back byte-identical blocks the latest.json flip', async () => {
  const r2 = fakeR2({ corrupt: (key) => key.endsWith('index.json') })
  await assert.rejects(publishToR2({ revision, indexText, auditText, releaseText, ...auth }, r2.fetcher), /read-back of .*index\.json does not match/)
  assert.ok(!r2.store.has('latest.json'), 'latest.json must never point at a corrupt blob')
})

test('publishToR2 uploads all immutable revision objects before flipping latest.json', async () => {
  const uploadedKeys = []
  const r2 = fakeR2()
  const fetcher = async (url, init) => {
    if (init.method === 'PUT') uploadedKeys.push(decodeURIComponent(url.split('/objects/')[1]))
    return r2.fetcher(url, init)
  }
  await publishToR2(
    { revision, indexText, auditText, releaseText, ...auth },
    fetcher,
  )
  assert.equal(uploadedKeys.length, 4)
  assert.equal(uploadedKeys.at(-1), 'latest.json', 'latest.json must be flipped strictly last')
  assert.deepEqual(
    uploadedKeys.slice(0, 3).sort(),
    [
      `releases/${revision}/audit.json`,
      `releases/${revision}/index.json`,
      `releases/${revision}/release.json`,
    ],
  )
})

test('publishToR2 never flips latest.json when an immutable blob upload fails', async () => {
  const uploadedKeys = []
  const fetcher = async (url) => {
    const key = decodeURIComponent(url.split('/objects/')[1])
    uploadedKeys.push(key)
    if (key.endsWith('audit.json')) return new Response('forbidden', { status: 403 })
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  }
  await assert.rejects(
    publishToR2({ revision, indexText, auditText, releaseText, accountId: 'acct-1', bucket: 'b', token: 't' }, fetcher),
    /HTTP 403/,
  )
  assert.ok(!uploadedKeys.includes('latest.json'), 'latest.json must never be written after a blob failure')
})

test('buildR2Payload rejects mismatched digests and never ships a second catalog implementation', () => {
  const objects = buildR2Payload({ revision, indexText, auditText, releaseText })
  assert.ok(objects.every((o) => !o.key.includes('catalog')), 'the web catalog is derived by bruc3van-web only')
  const latest = JSON.parse(objects.at(-1).body)
  assert.equal(latest.revision, revision)
  assert.equal(latest.indexSha256, sha256(indexText))
  assert.equal(latest.auditSha256, sha256(auditText))
  assert.throws(
    () => buildR2Payload({ revision, indexText: indexText + ' ', auditText, releaseText }),
    /digest mismatch/,
  )
})
