import { test } from 'node:test'
import assert from 'node:assert/strict'
import { planAudit, evaluateManifest, classifyRepository, linkedReadmes, extractRepositoryTargets } from './audit.mjs'
test('batch plan covers every repository once and prioritizes coverage gaps', () => {
  const feed = {
    entries: Array.from({ length: 600 }, (_, i) => ({
      full_name: `owner/repo-${i}`,
      packages:
        i < 400
          ? { mode: 'command', targets: [{ install: `pkg-${i}` }] }
          : i < 424
            ? { mode: 'manual' }
            : undefined,
    })),
  }
  const plan = planAudit(feed, { diagnostics: [] }, 200)
  assert.equal(plan.length, 600)
  assert.equal(new Set(plan.map((r) => r.full_name)).size, 600)
  assert.deepEqual(
    [1, 2, 3].map((b) => plan.filter((r) => r.batch === b).length),
    [200, 200, 200],
  )
  assert.equal(plan[0].inputMode, 'unmapped')
  assert.equal(plan[199].inputMode, 'manual')
  assert.equal(plan[200].inputMode, 'command')
  assert.throws(
    () =>
      planAudit(
        { entries: [feed.entries[0], feed.entries[0]] },
        { diagnostics: [] },
      ),
    /Duplicate/,
  )
  assert.throws(() => planAudit(feed, { diagnostics: [] }, 201), /Batch size/)
})
test('source inspection follows official peer and unrestricted compatibility rules', () => {
  const m = {
    name: 'fixture',
    version: '1.0.0',
    dsh: { bundle: { patch: './patch.yml' } },
    peerDependencies: { '@deepseek-ai/dsh': '*' },
  }
  const source = {
    type: 'git',
    url: 'https://github.com/example/repo',
    commit: '1'.repeat(40),
  }
  assert.equal(
    evaluateManifest(m, source, 1).status,
    'eligible_metadata',
  )
  m.engines = { dsh: '>=0.2.1-alpha.5' }
  assert.equal(evaluateManifest(m, source, 1).status, 'eligible_metadata')
  m.engines.dsh = '<0.2.0'
  assert.equal(evaluateManifest(m, source, 1).declaredCompatibleWithHost, false)
  m.private = true
  assert.equal(evaluateManifest(m, source, 1).status, 'private_package')
})
test('read failures remain incomplete even if another source is eligible', () => {
  const r = {
    errors: [],
    candidates: [{ status: 'eligible_metadata' }],
    inputMode: 'unmapped',
    readmes: [],
  }
  assert.equal(classifyRepository(r), 'mapping_can_be_added')
  r.errors.push({ reason: 'timeout' })
  assert.equal(classifyRepository(r), 'retry_required')
  r.errors = []
  r.candidates = [{ status: 'needs_upstream_declaration' }]
  assert.equal(classifyRepository(r), 'needs_upstream_declaration')
  r.candidates = []
  r.inputMode = 'manual'
  assert.equal(classifyRepository(r), 'manual_install_review')
})

test('a valid example manifest does not automatically qualify a template for listing', () => {
  const result = {
    errors: [],
    inputMode: 'unmapped',
    readmes: [],
    candidates: [
      {
        status: 'eligible_metadata',
        name: '@yourscope/your-plugin',
        path: 'assets/plugin-skeleton',
      },
    ],
  }
  assert.equal(classifyRepository(result), 'template_or_example_review')
  result.candidates = [{ status: 'eligible_metadata', name: 'actual-tool' }]
  assert.equal(classifyRepository(result), 'mapping_can_be_added')
})

test('GitHub retry reads only regular blobs and verifies immutable content hashes', async () => {
  const { withGitHubObjects } = await import('./audit-github.mjs'),
    { createHash } = await import('node:crypto')
  const bytes = Buffer.from('{"name":"fixture"}'),
    blob = createHash('sha1')
      .update(`blob ${bytes.length}\0`)
      .update(bytes)
      .digest('hex'),
    sha = '1'.repeat(40),
    treeSha = '2'.repeat(40)
  const api = async (path) =>
    path.includes('/commits/')
      ? {
          sha,
          tree: { sha: treeSha },
          committer: { date: '2026-10-01T00:00:00Z' },
        }
      : path.includes('/trees/')
        ? {
            sha: treeSha,
            truncated: false,
            tree: [
              {
                path: 'package.json',
                type: 'blob',
                mode: '100644',
                size: bytes.length,
                sha: blob,
              },
              {
                path: 'linked.json',
                type: 'blob',
                mode: '120000',
                size: bytes.length,
                sha: blob,
              },
            ],
          }
        : { sha: blob, encoding: 'base64', content: bytes.toString('base64') }
  await withGitHubObjects(
    'https://github.com/example/repo',
    { head: sha },
    ['https'],
    { timeoutMs: 1000 },
    async (objects) => {
      const files = await objects.tree(sha, '')
      assert.deepEqual(await files.read('package.json'), bytes)
      assert.equal(await files.read('linked.json'), undefined)
    },
    { api },
  )
  await assert.rejects(
    withGitHubObjects(
      'https://github.com/example/repo',
      { head: sha },
      [],
      { timeoutMs: 1000 },
      () => {},
      {
        api: async (path) =>
          path.includes('/trees/')
            ? { sha: treeSha, truncated: true }
            : api(path),
      },
    ),
    /truncated/,
  )
})

test('summary keeps missing rows and failed evidence distinct from completed collection', async () => {
  const { mkdtemp, mkdir, writeFile, readFile, rm } = await import(
      'node:fs/promises'
    ),
    { tmpdir } = await import('node:os'),
    { join } = await import('node:path'),
    { summarize } = await import('./audit.mjs')
  const parent = await mkdtemp(join(tmpdir(), 'audit-summary-')),
    dir = join(parent, 'run')
  await mkdir(join(dir, 'repos'), { recursive: true })
  const plan = {
    feedSha256: 'a'.repeat(64),
    batchSize: 2,
    entries: [1, 2, 3].map((ordinal) => ({
      ordinal,
      batch: ordinal < 3 ? 1 : 2,
    })),
  }
  const record = {
    ordinal: 1,
    batch: 1,
    full_name: 'example/plugin',
    inputMode: 'unmapped',
    readmes: [],
    mappingFindings: [],
    candidates: [{ name: 'fixture', status: 'eligible_metadata' }],
    errors: [],
  }
  try {
    await writeFile(join(dir, 'repos/001.json'), JSON.stringify(record))
    await writeFile(
      join(dir, 'repos/002.json'),
      JSON.stringify({
        ...record,
        ordinal: 2,
        errors: [{ reason: 'timeout' }],
      }),
    )
    const result = await summarize(dir, plan, true)
    assert.equal(result.attempted, 2)
    assert.equal(result.evidenceCollected, 1)
    assert.equal(result.retryRequired, 1)
    assert.equal(result.pending, 1)
    assert.match(await readFile(join(dir, 'batch-1.md'), 'utf8'), /待重试 1/)
  } finally {
    await rm(parent, { recursive: true, force: true })
  }
})


test('linked installation READMEs stay within the fixed repository', () => {
  const text = '[install](dsh-openstory/README.zh.md) [same](./dsh-openstory/README.zh.md#install) '
    + '[outside](https://example.com/README.md) [parent](../README.md) '
    + '[absolute](/README.md) [instructions](SKILL.md) [query](README.md?x=1)'
  assert.deepEqual(linkedReadmes(text), ['dsh-openstory/README.zh.md'])
})


test('manifest identity preserves the primary npm target beside an optional companion repository', () => {
  const result = extractRepositoryTargets('```sh\ndsh plugin --profile web add pmp-dsh-tavern@3.0.4\n```\n```sh\ndsh plugin --profile web add github:Player-MINEPIG/dsh-memory-manager#v1.0.0\n```',
    { owner: 'Player-MINEPIG', repo: 'dsh-tavern', maxTargets: 20 }, new Set(['pmp-dsh-tavern']))
  assert.ok(result.picks.some(p => p.install === 'pmp-dsh-tavern@3.0.4'))
})
