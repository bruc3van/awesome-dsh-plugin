import test from 'node:test';
import assert from 'node:assert/strict';
import { MAPPING_MAX_IDLE_DAYS, MAPPING_MIN_STARS, mappingGate } from './mapping-gate.mjs';

const SNAPSHOT = '2026-11-18T21:54:53Z';
const daysBefore = (days) => new Date(Date.parse(SNAPSHOT) - days * 86400000).toISOString();

test('the gate is 5 stars and 90 idle days', () => {
  assert.equal(MAPPING_MIN_STARS, 5);
  assert.equal(MAPPING_MAX_IDLE_DAYS, 90);
});

test('repositories with at least 5 stars and a push in the last 90 days pass', () => {
  assert.deepEqual(mappingGate({ stargazers_count: 5, pushed_at: daysBefore(0) }, SNAPSHOT), { ok: true });
  assert.deepEqual(mappingGate({ stargazers_count: 500, pushed_at: daysBefore(90) }, SNAPSHOT), { ok: true });
});

test('fewer than 5 stars, a stale push or a missing push date never get a new mapping', () => {
  assert.equal(mappingGate({ stargazers_count: 4, pushed_at: daysBefore(1) }, SNAPSHOT).ok, false);
  assert.match(mappingGate({ stargazers_count: 999, pushed_at: daysBefore(91) }, SNAPSHOT).reason, /90 days/);
  assert.equal(mappingGate({ stargazers_count: 999 }, SNAPSHOT).ok, false);
  assert.equal(mappingGate({ pushed_at: daysBefore(1) }, SNAPSHOT).ok, false);
});

test('a missing snapshot timestamp is a caller bug, not a silent pass', () => {
  assert.throws(() => mappingGate({ stargazers_count: 9, pushed_at: daysBefore(1) }, undefined), /snapshot timestamp/);
});
