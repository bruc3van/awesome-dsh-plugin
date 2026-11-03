/** Fixture test for the package-level repository exclusion and its
 * editor's-pick exemption inside generateIndex: no network, no tarballs —
 * fetchPackument serves minimal registry packuments and verifyNpm stamps the
 * repository a real tarball manifest would declare. */
import test from 'node:test'
import assert from 'node:assert/strict'
import { generateIndex } from './generate.mjs'

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
