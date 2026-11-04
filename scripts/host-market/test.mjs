import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  parseMarketIndex,
  marketInstallTarget,
} from '@deepseek-ai/dsh-plugin-market-index'
import {
  generateIndex,
  npmTarget,
  projectPackage,
  selectTopPlugins,
} from './generate.mjs'
import { MAX_PLUGINS } from './policy.mjs'
import {
  blockedPluginRepository,
  repositorySlug,
} from './repository-policy.mjs'

const metadata = (name = 'demo') => ({
  'dist-tags': { latest: '1.2.3' },
  time: { '1.2.3': '2026-10-01T00:00:00Z' },
  versions: {
    '1.2.3': {
      name,
      version: '1.2.3',
      description: 'Demo bundle',
      dsh: { bundle: { patch: './cordis.patch.yml' } },
      engines: { dsh: '>=0.2.1-alpha.5 <0.3.0' },
    },
  },
})

test('official index pins registry tags to manifest versions and preserves host requirements', () => {
  const { plugin, diagnostics } = projectPackage(
    'demo',
    ['latest', '1.2.3'],
    metadata(),
  )
  assert.deepEqual(diagnostics, [])
  const index = parseMarketIndex(
    { format: 1, title: 'Test', plugins: [plugin] },
    'https://example.com/index.json',
  )
  assert.equal(index.plugins[0].versions.length, 1)
  const version = index.plugins[0].versions[0]
  assert.equal(version.publishTimestamp, 1790812800)
  assert.equal(version.engines.dsh, '>=0.2.1-alpha.5 <0.3.0')
  assert.deepEqual(marketInstallTarget('demo', version), {
    spec: 'demo@1.2.3',
    registry: 'https://registry.npmjs.org/',
  })
})

test('missing evidence is excluded rather than assigned fabricated compatibility or dates', () => {
  for (const alter of [
    (p) => {
      p.versions['1.2.3'].engines.dsh = ''
    },
    (p) => {
      p.versions['1.2.3'].engines.dsh = 'workspace:*'
    },
    (p) => {
      delete p.versions['1.2.3'].dsh
    },
    (p) => {
      delete p.time['1.2.3']
    },
    (p) => {
      p.versions['1.2.3'].name = 'other'
    },
  ]) {
    const p = metadata()
    alter(p)
    const result = projectPackage('demo', ['latest'], p)
    assert.equal(result.plugin, undefined)
    assert.equal(result.diagnostics.length, 1)
  }
})

test('generation deduplicates npm targets, processes Git and skips manual instructions, and reports registry failures', async () => {
  const calls = []
  const result = await generateIndex(
    {
      schema_version: 2,
      entries: [
        {
          packages: {
            mode: 'command',
            targets: [
              { install: 'demo' },
              { install: 'demo@1.2.3' },
              { install: 'https://github.com/owner/demo#main' },
              { install: 'missing' },
            ],
          },
        },
        {
          packages: {
            mode: 'manual',
            targets: [{ install: 'do-not-install' }],
          },
        },
      ],
    },
    async (name) => {
      calls.push(name)
      if (name === 'missing') throw new Error('Registry HTTP 404')
      return metadata(name)
    },
    async () => ({
      plugins: [],
      evidence: [],
      diagnostics: [
        { code: 'invalid_host_range', status: 'excluded', reason: 'fixture' },
      ],
    }),
  )
  assert.deepEqual(calls.sort(), ['demo', 'missing'])
  assert.equal(result.index.plugins.length, 1)
  assert.equal(result.diagnostics.length, 2)
  for (const spec of [
    'npm install demo',
    'demo;id',
    'file:./demo',
    'git+https://github.com/a/b',
    'demo@^1.0.0',
  ])
    assert.equal(npmTarget(spec), null)
})

test('missing git repository is excluded without blocking publication', async () => {
  const { classifyGitFailure } = await import('./generate.mjs')
  const missing = classifyGitFailure(
    new Error(
      "Command failed: git ls-remote\nremote: Repository not found.\nfatal: repository 'https://github.com/crosery/dsh-viewer/' not found\n",
    ),
  )
  assert.deepEqual(missing, {
    permanent: true,
    code: 'git_repository_not_found',
  })
  assert.deepEqual(
    classifyGitFailure(Object.assign(new Error('指定 Git 引用不存在'), { code: 'git_ref_not_found' })),
    { permanent: true, code: 'git_ref_not_found' },
  )
  assert.deepEqual(classifyGitFailure(new Error('ECONNRESET')), {
    permanent: false,
    code: 'git_fetch_failed',
  })
  assert.deepEqual(
    classifyGitFailure(new Error('Command failed: git ls-tree\nfatal: not a tree object\n')),
    { permanent: true, code: 'git_object_not_found' },
  )
  assert.deepEqual(
    classifyGitFailure(
      Object.assign(
        new Error(
          "EPERM, Permission denied: \\\\?\\C:\\Users\\Bruce\\AppData\\Local\\Temp\\plugin-market-git-abc123",
        ),
        { code: 'EPERM' },
      ),
    ),
    { permanent: true, code: 'git_temp_cleanup_failed' },
  )
})

test('publication preserves existing data on network failure, empty output or a collapsed candidate', async () => {
  const { assertPublishable } = await import('./policy.mjs')
  const index = (n) => ({ plugins: Array.from({ length: n }, () => ({})) })
  assert.throws(
    () => assertPublishable({ index: index(10), fetchFailures: 1 }),
    /Source lookup failed/,
  )
  assert.throws(() => assertPublishable({ index: index(0) }), /No eligible/)
  assert.throws(
    () => assertPublishable({ index: index(7) }, index(10)),
    /collapsed/,
  )
  assert.throws(
    () => assertPublishable({ index: index(MAX_PLUGINS + 1) }),
    /published cap/,
  )
  assert.doesNotThrow(() => assertPublishable({ index: index(8) }, index(10)))
})

test('publication requires 50 source repositories and allows multiple plugins per repository', async () => {
  const { assertPublishable } = await import('./policy.mjs')
  const index = { plugins: Array.from({ length: 52 }, (_, i) => ({ name: `plugin-${i}` })) }
  assert.doesNotThrow(() => assertPublishable({ index, featuredRepositoryCount: 50, expectedFeaturedRepositoryCount: 50 }))
  for (const count of [24, 49, 51]) {
    assert.throws(() => assertPublishable({ index, featuredRepositoryCount: count, expectedFeaturedRepositoryCount: 50 }), /repositories, expected 50/)
  }
})

test('pinned upstream file readers match their recorded SHA-256', async () => {
  const { readFile } = await import('node:fs/promises')
  const { createHash } = await import('node:crypto')
  const record = JSON.parse(
    await readFile(new URL('./vendor/upstream.json', import.meta.url), 'utf8'),
  )
  for (const [name, hash] of Object.entries(record.files))
    assert.equal(
      createHash('sha256')
        .update(await readFile(new URL(`./vendor/${name}`, import.meta.url)))
        .digest('hex'),
      hash,
    )
})

test('npm tarball verification checks integrity, identity and declared compatibility', async () => {
  const { createServer } = await import('node:http')
  const { mkdtemp, mkdir, writeFile, readFile, rm } = await import(
    'node:fs/promises'
  )
  const { tmpdir } = await import('node:os')
  const { join } = await import('node:path')
  const { execFileSync } = await import('node:child_process')
  const { createHash } = await import('node:crypto')
  const { verifyNpmPlugin } = await import('./npm.mjs')
  const dir = await mkdtemp(join(tmpdir(), 'market-npm-test-'))
  let server
  try {
    const p = metadata(),
      manifest = p.versions['1.2.3']
    manifest.peerDependencies = { '@deepseek-ai/dsh': '>=0.2.1-alpha.5', '@deepseek-ai/dsh-tools': '<0.3.0' }
    delete manifest.engines
    await mkdir(join(dir, 'package'))
    await writeFile(join(dir, 'package/package.json'), JSON.stringify(manifest))
    execFileSync('tar', ['-czf', join(dir, 'test.tgz'), '-C', dir, 'package'])
    const bytes = await readFile(join(dir, 'test.tgz'))
    server = createServer((req, res) => {
      res.end(bytes)
    })
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
    manifest.dist = {
      tarball: `http://127.0.0.1:${server.address().port}/test.tgz`,
      integrity:
        'sha512-' + createHash('sha512').update(bytes).digest('base64'),
    }
    manifest.peerDependencies = { '@deepseek-ai/dsh-tools': '<0.3.0', '@deepseek-ai/dsh': '>=0.2.1-alpha.5' }
    const { plugin } = projectPackage('demo', ['latest'], p)
    assert.equal((await verifyNpmPlugin(plugin, p)).plugin.name, 'demo')
    const bad = structuredClone(plugin)
    bad.versions[0].engines.dsh = '*'
    await assert.rejects(verifyNpmPlugin(bad, p), /differ/)
    manifest.dist.integrity = 'sha512-' + Buffer.alloc(64).toString('base64')
    await assert.rejects(verifyNpmPlugin(plugin, p), /integrity/)
  } finally {
    if (server) await new Promise((resolve) => server.close(resolve))
    await rm(dir, { recursive: true, force: true })
  }
})


test('size policy excludes an oversized package but keeps integrity and network errors fatal', async () => {
  for (const [message, excluded] of [
    ['demo@1.2.3: tarball exceeds 67108864 bytes', true],
    ['unpacked tarball exceeds 67108864 bytes', true],
    ['demo@1.2.3: unpacked tarball exceeds 67108864 bytes', true],
    ['demo@1.2.3: integrity mismatch', false],
    ['fetch failed', false],
  ]) {
    const result = await generateIndex(
      { schema_version: 2, entries: [{ packages: {
        mode: 'command', targets: [{ install: 'demo' }],
      } }] },
      async () => metadata(),
      undefined,
      async () => { throw new Error(message) },
    )
    assert.equal(result.index.plugins.length, 0)
    assert.equal(result.fetchFailures, excluded ? 0 : 1)
    assert.equal(result.diagnostics[0].code, excluded ? 'package_size_limit' : 'npm_fetch_failed')
    assert.equal(result.diagnostics[0].status, excluded ? 'excluded' : 'error')
  }
})


test('default order mixes npm and Git by repository stars with stable repository and package ties', async () => {
  const row = (repo, stars, install) => ({ full_name: repo, stargazers_count: stars,
    packages: { mode: 'command', targets: [{ install }] } })
  const result = await generateIndex({ schema_version: 2, entries: [
    row('z/low', 1, 'low'), row('b/tie', 10, 'tie-b'),
    row('a/tie', 10, 'tie-z'), row('a/tie', 10, 'tie-a'),
    row('g/high', 100, 'https://github.com/g/high#main'),
    row('u/unknown', undefined, 'unknown'),
  ], featured: { entries: [row('z/low', 999, 'low')] } },
  async name => metadata(name),
  async () => ({ plugins: [projectPackage('git-high', ['latest'], metadata('git-high')).plugin],
    evidence: [], diagnostics: [] }))
  assert.deepEqual(result.index.plugins.map(p => p.name),
    ['git-high', 'tie-a', 'tie-z', 'tie-b', 'low', 'unknown'])
})


test('selection caps only after verification and keeps the highest-star plugins', () => {
  const plugins = Array.from({ length: MAX_PLUGINS + 5 }, (_, i) => ({
    name: `plugin-${String(i).padStart(3, '0')}`,
  }))
  const ranks = new Map(
    plugins.map((plugin, i) => [
      plugin.name,
      { stars: i, repo: `owner/${plugin.name}` },
    ]),
  )
  const selection = selectTopPlugins(plugins, ranks)
  assert.equal(selection.eligiblePlugins, MAX_PLUGINS + 5)
  assert.equal(selection.plugins.length, MAX_PLUGINS)
  assert.equal(selection.droppedByLimit, 5)
  assert.equal(selection.cutoffStars, 5)
  assert.equal(selection.plugins[0].name, `plugin-${String(MAX_PLUGINS + 4).padStart(3, '0')}`)
  assert.equal(selection.plugins.at(-1).name, 'plugin-005')
})

test('featured plugins stay in the selection even when they rank below the star cap', () => {
  const plugins = Array.from({ length: MAX_PLUGINS + 5 }, (_, i) => ({
    name: `plugin-${String(i).padStart(3, '0')}`,
  }))
  const ranks = new Map(
    plugins.map((plugin, i) => [
      plugin.name,
      { stars: i, repo: `owner/${plugin.name}` },
    ]),
  )
  const selection = selectTopPlugins(
    plugins,
    ranks,
    MAX_PLUGINS,
    new Set(['owner/plugin-000']),
  )
  assert.equal(selection.plugins.length, MAX_PLUGINS)
  assert.equal(selection.plugins[0].name, `plugin-${String(MAX_PLUGINS + 4).padStart(3, '0')}`)
  assert.equal(selection.plugins.at(-1).name, 'plugin-000')
  assert.equal(selection.cutoffStars, 0)
})


test('package-level repository exclusions override an otherwise eligible mapping', async () => {
  assert.equal(repositorySlug('git+https://github.com/Owner/Repo.git'), 'owner/repo')
  assert.equal(repositorySlug('github:Owner/Repo'), 'owner/repo')
  const plugin = projectPackage('demo', ['latest'], metadata()).plugin
  plugin.repository = { url: 'https://github.com/Blocked/Repo' }
  const result = await generateIndex(
    {
      schema_version: 2,
      excludedRepositories: ['blocked/repo'],
      entries: [{
        full_name: 'allowed/candidate',
        stargazers_count: 100,
        packages: { mode: 'command', targets: [{ install: 'demo' }] },
      }],
    },
    async () => metadata(),
    undefined,
    async () => ({ plugin, diagnostics: [] }),
  )
  assert.equal(result.index.plugins.length, 0)
  assert.equal(result.selection.eligiblePlugins, 0)
  assert.deepEqual(result.repositoryExclusions, [{
    name: 'demo',
    repository: 'blocked/repo',
    reference: 'https://github.com/Blocked/Repo',
  }])
  assert.equal(result.diagnostics[0].code, 'excluded_repository')
  assert.equal(
    blockedPluginRepository(plugin, new Set(['blocked/repo'])).slug,
    'blocked/repo',
  )
})


test('official compatibility rules resolve peers and omit unrestricted engines', () => {
  const p = metadata(), m = p.versions['1.2.3']
  const result = () => projectPackage('demo', ['latest'], p)
  delete m.engines
  assert.equal(Object.hasOwn(result().plugin.versions[0], 'engines'), false)
  m.peerDependencies = { '@deepseek-ai/dsh': '>=0.2.1-alpha.5', '@deepseek-ai/dsh-tools': '<0.3.0' }
  assert.equal(result().plugin.versions[0].engines.dsh, '>=0.2.1-alpha.5 <0.3.0')
  m.peerDependencies['@deepseek-ai/dsh-tools'] = '<0.2.0'
  assert.equal(result().diagnostics[0].code, 'invalid_host_range')
  m.engines = { dsh: '>=0.2.1-alpha.5' }
  assert.equal(result().plugin.versions[0].engines.dsh, '>=0.2.1-alpha.5')
  delete m.engines
  m.peerDependencies = { '@deepseek-ai/dsh': 'workspace:*', '@deepseek-ai/dsh-tools': '*' }
  assert.equal(Object.hasOwn(result().plugin.versions[0], 'engines'), false)
})
