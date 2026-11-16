import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  applyProposals,
  githubSlugFromUrl,
  identityClear,
  planOutsidePool,
  proposeRecord,
} from './expand-mappings.mjs'

const commit = 'b'.repeat(40)
const gitPlugin = (name = 'demo') => ({
  name,
  versions: [
    {
      version: '1.0.0',
      source: {
        type: 'git',
        url: 'https://github.com/Owner/Demo',
        commit,
      },
    },
  ],
})
const npmPlugin = (name, extra = {}, engines) => ({
  name,
  ...extra,
  versions: [{
    version: '1.2.3',
    source: { type: 'npm', registry: 'https://registry.npmjs.org/' },
    ...(engines ? { engines: { dsh: engines } } : {}),
  }],
})

test('github slug normalization ignores git suffix, plus and case', () => {
  assert.equal(
    githubSlugFromUrl('git+https://GitHub.com/Owner/Demo.git'),
    'owner/demo',
  )
  assert.equal(githubSlugFromUrl('https://example.com/Owner/Demo'), '')
})

test('identity accepts matching repository URL, package name or README target', () => {
  assert.equal(
    identityClear('Owner/Demo', npmPlugin('other', { repository: { url: 'https://github.com/Owner/Demo' } })).ok,
    true,
  )
  assert.equal(identityClear('Owner/Demo', npmPlugin('demo')).ok, true)
  assert.equal(
    identityClear('Owner/Demo', npmPlugin('@acme/tool'), ['@acme/tool']).ok,
    true,
  )
  assert.equal(identityClear('Owner/Demo', npmPlugin('@acme/tool')).ok, false)
})

test('unconstrained Git and matching npm become applyable mappings; incompatible ranges do not', () => {
  const git = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [],
    candidates: [
      {
        origin: 'repository_discovery',
        name: 'demo',
        status: 'eligible_metadata',
        compatibilityUnconstrained: true,
        declaredCompatibleWithHost: null,
        plugin: gitPlugin(),
      },
    ],
    repository: { commit },
    outcome: 'mapping_can_be_added',
  })
  assert.equal(git.decision, 'apply')
  assert.equal(git.status, 'repo-fallback')
  // Tracked form: the repository pointer without the evidence commit; daily
  // regeneration re-resolves HEAD and pins that exact commit in the index.
  assert.equal(git.packages[0].source, 'github:Owner/Demo')
  assert.equal(git.packages[0].install, 'https://github.com/Owner/Demo')
  assert.match(git.verified_via, new RegExp(`manifest@${commit.slice(0, 12)}`))

  const npm = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [{ targets: [{ install: 'demo' }] }],
    candidates: [
      {
        origin: 'npm',
        name: 'demo',
        status: 'eligible_metadata',
        compatibilityUnconstrained: true,
        declaredCompatibleWithHost: null,
        plugin: npmPlugin('demo', { repository: { url: 'https://github.com/Owner/Demo' } }),
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(npm.decision, 'apply')
  assert.equal(npm.status, 'readme-verified')
  // Tracked form: unversioned npm so the daily regeneration resolves the
  // newest verified exact version into the published index.
  assert.equal(npm.packages[0].source, 'npm:demo')
  assert.equal(npm.packages[0].install, 'demo')

  const pinned = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [{ targets: [{ install: 'demo@1.2.3' }] }],
    candidates: [
      {
        origin: 'npm',
        name: 'demo',
        status: 'eligible_metadata',
        compatibilityUnconstrained: true,
        declaredCompatibleWithHost: null,
        plugin: npmPlugin('demo', { repository: { url: 'https://github.com/Owner/Demo' } }),
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(pinned.decision, 'apply')
  // The README only pins a version, so the mapping keeps the verified exact
  // version — a manually pinned item keeps its intent.
  assert.equal(pinned.packages[0].source, 'npm:demo@1.2.3')
  assert.equal(pinned.packages[0].install, 'demo@1.2.3')

  const documentedGit = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [{ targets: [{ install: 'https://github.com/Owner/Demo#main' }] }],
    candidates: [
      {
        origin: 'repository_discovery',
        name: 'demo',
        status: 'eligible_metadata',
        compatibilityUnconstrained: true,
        declaredCompatibleWithHost: null,
        plugin: gitPlugin(),
      },
    ],
    repository: { commit },
    outcome: 'mapping_can_be_added',
  })
  assert.equal(documentedGit.decision, 'apply')
  // A README-documented ref is recorded verbatim — upstream states the target.
  assert.equal(documentedGit.packages[0].source, 'github:Owner/Demo#main')
  assert.equal(documentedGit.status, 'readme-verified')

  const unpinned = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [],
    candidates: [
      {
        origin: 'repository_discovery',
        name: 'demo',
        status: 'eligible_metadata',
        plugin: { name: 'demo', versions: [{ version: '1.0.0', source: { type: 'git', url: 'https://github.com/Owner/Demo' } }] },
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(unpinned.decision, 'skip')

  const blocked = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [],
    candidates: [
      {
        origin: 'npm',
        name: 'demo',
        status: 'eligible_metadata',
        declaredCompatibleWithHost: false,
        plugin: npmPlugin('demo', { repository: { url: 'https://github.com/Owner/Demo' } }, '>=0.3.0'),
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(blocked.decision, 'skip', 'a range no supported host satisfies stays unmapped')

  // Regression: evidence audited against a retired host version froze
  // `declaredCompatibleWithHost: false`; the proposal re-derives compatibility
  // from the declared range, so ranges the current hosts satisfy map again.
  const staleAudit = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [{ targets: [{ install: 'demo' }] }],
    candidates: [
      {
        origin: 'npm',
        name: 'demo',
        status: 'eligible_metadata',
        declaredCompatibleWithHost: false,
        plugin: npmPlugin('demo', { repository: { url: 'https://github.com/Owner/Demo' } }, '>=0.2.1-rc.2 <0.3.0'),
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(staleAudit.decision, 'apply')
})

test('opaque npm identity and templates wait for review; apply never overwrites', () => {
  const review = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [],
    candidates: [
      {
        origin: 'npm',
        name: '@acme/other',
        status: 'eligible_metadata',
        plugin: npmPlugin('@acme/other'),
      },
    ],
    outcome: 'mapping_can_be_added',
  })
  assert.equal(review.decision, 'identity_review')
  const template = proposeRecord({
    full_name: 'Owner/Demo',
    errors: [],
    readmes: [],
    inputMode: 'unmapped',
    candidates: [
      {
        status: 'eligible_metadata',
        name: '@yourscope/your-plugin',
        path: 'examples/plugin',
        plugin: gitPlugin('@yourscope/your-plugin'),
      },
    ],
  })
  assert.equal(template.decision, 'identity_review')
  const applied = applyProposals(
    {
      schema_version: 1,
      entries: {
        'owner/existing': { packages: [{ profile: 'web', source: 'npm:old', install: 'old', command: 'dsh plugin add old' }], status: 'readme-verified', verified_date: '2026-10-01', verified_via: 'README' },
      },
    },
    [
      { repository: 'Owner/Existing', decision: 'apply', packages: [{ profile: 'web', source: 'npm:new@1.0.0', install: 'new@1.0.0', command: 'dsh plugin --profile web add new@1.0.0' }], status: 'readme-verified', verified_via: 'README' },
      { repository: 'Owner/Demo', decision: 'apply', packages: [{ profile: 'web', source: 'npm:demo@1.2.3', install: 'demo@1.2.3', command: 'dsh plugin --profile web add demo@1.2.3' }], status: 'readme-verified', verified_via: 'README' },
    ],
    '2026-10-22',
  )
  assert.equal(applied.packages.entries['owner/existing'].packages[0].source, 'npm:old')
  assert.ok(applied.packages.entries['owner/demo'])
  assert.deepEqual(applied.applied, ['Owner/Demo'])
})

test('outside pool is star-ranked unmapped approved plugins', () => {
  const plan = planOutsidePool(
    {
      snapshot: {
        repositories: [
          { id: 1, full_name: 'a/high', description: 'plugin', stargazers_count: 9 },
          { id: 2, full_name: 'a/mapped', description: 'plugin', stargazers_count: 90 },
          { id: 3, full_name: 'a/low', description: 'plugin', stargazers_count: 2 },
          { id: 4, full_name: 'a/archived', description: 'plugin', stargazers_count: 80, archived: true },
        ],
      },
      curated: {},
      approved: { 'a/high': '2026-10-01', 'a/mapped': '2026-10-01', 'a/low': '2026-10-01', 'a/archived': '2026-10-01' },
      packages: { entries: { 'a/mapped': {} } },
    },
    10,
  )
  assert.deepEqual(plan.map((row) => row.full_name), ['a/high', 'a/low'])
})
