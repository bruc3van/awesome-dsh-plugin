import test from 'node:test'
import assert from 'node:assert/strict'
import { presentationQuality } from './quality.mjs'

test('compatibility coverage distinguishes current and older supported hosts without inventing requirements', () => {
  const index = { plugins: [
    { name: 'current', versions: [{ version: '2.0.0', engines: { dsh: '0.2.2-rc.3' } }] },
    { name: 'retained', versions: [
      { version: '2.0.0', engines: { dsh: '0.2.2-rc.3' } },
      { version: '1.0.0', engines: { dsh: '0.2.1-rc.2' } },
    ] },
    { name: 'unconstrained', versions: [{ version: '1.0.0' }] },
  ] }
  const result = presentationQuality(index)
  assert.equal(result.targetHostVersion, '0.2.2-rc.3')
  assert.equal(result.withoutMatchingVersion, 0)
  assert.deepEqual(result.compatibilityByHost, {
    '0.2.1-rc.2': { withoutMatchingVersion: 1 },
    '0.2.2-rc.1': { withoutMatchingVersion: 2 },
    '0.2.2-rc.3': { withoutMatchingVersion: 0 },
  })
  assert.equal(result.withMultipleVersions, 1)
})
