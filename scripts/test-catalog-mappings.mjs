import test from 'node:test'
import assert from 'node:assert/strict'
import { decideMapping, npmRepositorySlug } from './catalog-mapping-rules.mjs'

const pick = (over = {}) => ({ profile: 'web', command: 'dsh plugin --profile web add acme-widget', source: 'npm:acme-widget', ...over })
const ok = new Map([['npm:acme-widget', { ok: true }]])

test('a verified npm target is auto-mapped with its paste-ready install name', () => {
  const decision = decideMapping('acme/widget', [pick()], ok)
  assert.equal(decision.verdict, 'auto')
  assert.deepEqual(decision.accepted, [{ profile: 'web', source: 'npm:acme-widget', command: 'dsh plugin --profile web add acme-widget', install: 'acme-widget' }])
})

test('an unverified npm target stays a review exception, never an automatic edit', () => {
  const denied = new Map([['npm:acme-widget', { ok: false, reason: 'npm acme-widget belongs to someone-else/fork' }]])
  const decision = decideMapping('acme/widget', [pick()], denied)
  assert.equal(decision.verdict, 'review')
  assert.match(decision.reason, /belongs to someone-else\/fork/)
  assert.equal(decideMapping('acme/widget', [pick()], new Map()).verdict, 'review')
})

test('a github target is auto-mapped only for this exact repository', () => {
  const self = pick({ source: 'github:acme/widget#main', command: 'dsh plugin --profile web add github:acme/widget#main' })
  const decision = decideMapping('acme/widget', [self])
  assert.equal(decision.verdict, 'auto')
  assert.equal(decision.accepted[0].install, 'https://github.com/acme/widget#main')

  const other = pick({ source: 'github:acme/other', command: 'dsh plugin --profile web add github:acme/other' })
  const refused = decideMapping('acme/widget', [other])
  assert.equal(refused.verdict, 'review')
  assert.match(refused.reason, /is not this repository/)
})

test('local, url and placeholder targets are not auto-published', () => {
  const local = pick({ source: 'link:./packages/widget', command: 'dsh plugin --profile web add ./packages/widget' })
  assert.equal(decideMapping('acme/widget', [local]).verdict, 'review')

  const placeholder = pick({ command: 'dsh plugin --profile <profile> add acme-widget' })
  assert.equal(decideMapping('acme/widget', [placeholder]).verdict, 'review')

  const url = pick({ source: 'url:https://example.com/widget.tgz', command: 'dsh plugin --profile web add https://example.com/widget.tgz' })
  assert.equal(decideMapping('acme/widget', [url]).verdict, 'review')

  assert.equal(decideMapping('acme/widget', []).verdict, 'review')
})

test('the command must carry the source it installs', () => {
  const mismatched = pick({ command: 'dsh plugin --profile web add another-package' })
  const decision = decideMapping('acme/widget', [mismatched], ok)
  assert.equal(decision.verdict, 'review')
  assert.match(decision.reason, /does not carry the source/)
})

test('one repository documented under several refs collapses to the unpinned target', () => {
  const sameProfile = decideMapping('acme/widget', [
    pick({ source: 'npm:acme-widget@0.1.0', command: 'dsh plugin --profile web add acme-widget@0.1.0' }),
    pick(),
  ], new Map([['npm:acme-widget@0.1.0', { ok: true }], ['npm:acme-widget', { ok: true }]]))
  assert.equal(sameProfile.accepted.length, 1)
  assert.equal(sameProfile.accepted[0].source, 'npm:acme-widget')

  const otherProfile = decideMapping('acme/widget', [pick(), pick({ profile: 'desktop' })], ok)
  assert.equal(otherProfile.accepted.length, 2, 'distinct profiles stay distinct targets')
})

test('the manifest fallback maps a published package, else the repository itself', async () => {
  const { manifestFallbackTarget } = await import('./catalog-mapping-rules.mjs')
  const npm = manifestFallbackTarget('acme/widget', { name: 'acme-widget', hasDsh: true, npm: { ok: true } })
  assert.equal(npm?.source, 'npm:acme-widget')
  assert.equal(npm?.install, 'acme-widget')
  const repo = manifestFallbackTarget('acme/widget', { name: 'acme-widget', hasDsh: true, npm: { ok: false, reason: 'missing' } })
  assert.equal(repo?.source, 'github:acme/widget')
  assert.equal(repo?.install, 'https://github.com/acme/widget')
  assert.equal(manifestFallbackTarget('acme/widget', { name: 'acme-widget', hasDsh: false, hasPatch: false }), null)
  assert.equal(manifestFallbackTarget('acme/widget', { name: 'acme-widget', hasDsh: false, hasPatch: true, npm: { ok: false } })?.source, 'github:acme/widget')
})

test('npmRepositorySlug normalizes the registry repository field', () => {
  assert.equal(npmRepositorySlug({ repository: { type: 'git', url: 'git+https://github.com/Acme/Widget.git' } }), 'acme/widget')
  assert.equal(npmRepositorySlug({ repository: 'github:Acme/Widget' }), 'acme/widget')
  assert.equal(npmRepositorySlug({ repository: { url: 'git+https://gitlab.com/acme/widget.git' } }), '')
  assert.equal(npmRepositorySlug({}), '')
})
