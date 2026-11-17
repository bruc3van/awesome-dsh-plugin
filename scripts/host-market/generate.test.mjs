/** Fixture test for the package-level repository exclusion and its
 * editor's-pick exemption inside generateIndex: no network, no tarballs —
 * fetchPackument serves minimal registry packuments and verifyNpm stamps the
 * repository a real tarball manifest would declare. */
import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateIndex, projectPackage } from './generate.mjs'

test('the real generator CLI completes budget processing before rejecting an empty publication', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'dsh-market-cli-'))
  try {
    const input = join(directory, 'feed.json')
    const output = join(directory, 'index.json')
    await writeFile(input, JSON.stringify({ schema_version: 2, entries: [] }))
    const result = spawnSync(process.execPath, [
      '--import', new URL('./node_modules/tsx/dist/loader.mjs', import.meta.url).href,
      fileURLToPath(new URL('./generate.mjs', import.meta.url)), input, output,
    ], { encoding: 'utf8' })
    assert.equal(result.status, 1)
    assert.match(result.stderr, /No eligible bundles; see staging report/)
    const report = JSON.parse(await readFile(`${output}.report.json`, 'utf8'))
    assert.equal(report.included, 0)
    assert.equal(report.selection.included, 0)
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})

const manifest = (name) => ({
  name,
  version: '1.0.0',
  description: `${name} fixture`,
  dsh: { bundle: { patch: 'cordis.patch.yml' } },
  engines: { dsh: '>=0.2.0-0' },
  dist: {
    tarball: `https://registry.npmjs.org/${name}/-/${name}-1.0.0.tgz`,
    integrity: `sha512-${'a'.repeat(64)}`,
  },
})
const packument = (name) => ({
  'dist-tags': { latest: '1.0.0' },
  time: { '1.0.0': '2026-10-31T00:00:00.000Z' },
  versions: { '1.0.0': manifest(name) },
})

const repositoryOf = {
  'dsh-claude-slides': 'https://github.com/JimLiu/baoyu-design',
  'dsh-claude-design': 'https://github.com/JimLiu/baoyu-design',
  'dsh-claude-motion': 'https://github.com/JimLiu/baoyu-design',
  'other-blocked-pkg': 'https://github.com/other/blocked-repo',
}

const feed = {
  schema_version: 2,
  entries: [
    {
      full_name: 'JimLiu/baoyu-design',
      stargazers_count: 5887,
      packages: {
        mode: 'command',
        targets: ['dsh-claude-slides', 'dsh-claude-design', 'dsh-claude-motion'].map(
          (install) => ({ profile: 'web', install, command: `dsh plugin --profile web add ${install}` }),
        ),
      },
    },
    {
      full_name: 'other/blocked-repo',
      stargazers_count: 10,
      packages: {
        mode: 'command',
        targets: [
          { profile: 'web', install: 'other-blocked-pkg', command: 'dsh plugin --profile web add other-blocked-pkg' },
        ],
      },
    },
  ],
  featured: { entries: [] },
  featuredRepositories: ['JimLiu/baoyu-design'],
  excludedRepositories: ['jimliu/baoyu-design', 'other/blocked-repo'],
}

test('editor-pick repositories are exempt from the package-level repository block', async () => {
  const { index, diagnostics, repositoryExclusions } = await generateIndex(
    structuredClone(feed),
    (name) => Promise.resolve(packument(name)),
    undefined,
    (plugin) =>
      Promise.resolve({
        plugin: { ...plugin, repository: { url: repositoryOf[plugin.name] } },
        diagnostics: [],
        evidence: [],
      }),
  )
  const names = index.plugins.map((plugin) => plugin.name)
  for (const name of ['dsh-claude-slides', 'dsh-claude-design', 'dsh-claude-motion'])
    assert.ok(names.includes(name), `${name} should survive the block as an editor's pick`)
  assert.ok(!names.includes('other-blocked-pkg'), 'non-featured blocked repository must stay excluded')
  assert.deepEqual(
    repositoryExclusions.map((row) => row.name),
    ['other-blocked-pkg'],
  )
  const exemptions = diagnostics.filter((d) => d.code === 'featured_repository_exempt')
  assert.equal(exemptions.length, 3)
  assert.ok(exemptions.every((d) => d.status === 'included' && /baoyu-design/.test(d.reason)))
})

test('latest feeds keep verified host fallbacks while excluding private and deprecated versions', () => {
  const name = 'host-fallback'
  const registry = { 'dist-tags': { latest: '3.0.0' }, versions: {}, time: {} }
  for (const [version, range, extra] of [
    ['5.0.0', '*', {}],
    ['4.0.0', '*', { private: true }],
    ['3.1.0', '*', { deprecated: 'Use 3.0.0' }],
    ['3.0.0', '0.2.2-rc.3', {}],
    ['2.0.0', '0.2.2-rc.1', {}],
    ['1.0.0', '0.2.1-rc.2', {}],
    ['0.9.0', '*', {}],
  ]) {
    registry.versions[version] = { ...manifest(name), version, engines: { dsh: range }, ...extra }
    registry.time[version] = '2026-11-14T00:00:00Z'
  }
  const result = projectPackage(name, ['latest'], registry)
  assert.deepEqual(result.plugin.versions.map(v => v.version), ['3.0.0', '2.0.0', '1.0.0'])
  assert.equal(result.diagnostics.filter(d => d.code === 'compatibility_version_added').length, 2)
  assert.deepEqual(projectPackage(name, ['3.0.0'], registry).plugin.versions.map(v => v.version), ['3.0.0'])
  for (const [version, code] of [['4.0.0', 'private_package'], ['3.1.0', 'deprecated_version']]) {
    const excluded = projectPackage(name, [version], registry)
    assert.equal(excluded.plugin, undefined)
    assert.equal(excluded.diagnostics[0].code, code)
  }
})
