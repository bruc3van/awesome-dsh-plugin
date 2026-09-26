// Tests for the market-v2 pipeline (scripts/market-v2.mjs), run with
//   node --test scripts/test-market-v2.mjs
// The invariants under test: v2 is a strict superset of the published v1
// feed (same entries, same order, v1 fields untouched), mapping failures
// abort the build instead of publishing half-joined data, and identical
// inputs keep the previous file bit for bit.

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import {
  buildMarketV2,
  MAX_FILE_BYTES,
  packagesBlockFor,
  runMarketV2,
  V1_SCHEMA_VERSION,
  V2_SCHEMA_VERSION,
} from './market-v2.mjs';

let nextId = 1;
const v1Entry = (overrides = {}) => ({
  id: nextId++,
  full_name: 'owner/repo',
  description: 'A plugin.',
  stargazers_count: 10,
  language: 'TypeScript',
  license: 'MIT',
  pushed_at: '2026-01-01T00:00:00Z',
  default_branch: 'main',
  category: 'utilities',
  category_zh: '实用工具',
  category_en: 'Utilities',
  ...overrides,
});

const v1Market = (entries, overrides = {}) => ({
  schema_version: V1_SCHEMA_VERSION,
  generated_at: '2026-09-26T08:00:00.000Z',
  source_fetched_at: '2026-09-26T07:00:00.000Z',
  source_repo_count: 100,
  pool_count: 90,
  entries,
  ...overrides,
});

const commandRecord = (overrides = {}) => ({
  packages: [
    {
      profile: 'web',
      source: 'npm:some-plugin',
      command: 'dsh plugin --profile web add some-plugin',
      note: ' fallback note ',
    },
  ],
  requirements: ['Node >= 22'],
  tasks: ['导出 Word'],
  note: ' entry note ',
  status: 'readme-verified',
  verified_date: '2026-09-26',
  verified_via: 'README@main',
  ...overrides,
});

const packages = (entries) => ({ schema_version: 1, updated_at: '2026-09-26', entries });

const now = new Date('2026-09-26T10:00:00.000Z');

test('packagesBlockFor folds prose, trims commands, and omits empty optional fields', () => {
  const block = packagesBlockFor(commandRecord({ tasks: undefined, note: '' }));
  assert.deepEqual(block, {
    mode: 'command',
    targets: [
      {
        profile: 'web',
        source: 'npm:some-plugin',
        command: 'dsh plugin --profile web add some-plugin',
        note: 'fallback note',
      },
    ],
    requirements: ['Node >= 22'],
    verification: { status: 'readme-verified', date: '2026-09-26', via: 'README@main' },
  });
  assert.equal('tasks' in block, false);
  assert.equal('note' in block, false);
});

test('packagesBlockFor handles manual installs and unverified records', () => {
  const manual = packagesBlockFor({
    packages: [],
    install_mode: 'manual',
    manual_instructions: ' tell DSH: install from https://example.com ',
    status: 'unverified',
  });
  assert.deepEqual(manual, {
    mode: 'manual',
    manual_instructions: 'tell DSH: install from https://example.com',
    verification: { status: 'unverified' },
  });
});

test('packagesBlockFor rejects oversize text, multiline commands, bad sources, bad statuses', () => {
  assert.throws(() => packagesBlockFor(commandRecord({ requirements: ['x'.repeat(201)] })), /requirements\[0\].*cap is 200/);
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', source: 'npm:x', command: 'dsh plugin add x\n&& evil' }] })),
    /single-line/,
  );
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', source: 'not-a-kind', command: 'dsh plugin add x' }] })),
    /source must look like/,
  );
  assert.throws(() => packagesBlockFor(commandRecord({ status: 'hopeful' })), /status must be one of/);
  assert.throws(() => packagesBlockFor(commandRecord({ verified_date: '09/26/2026' })), /verified_date/);
  assert.throws(() => packagesBlockFor({ packages: [] }), /non-empty packages array/);
});

test('buildMarketV2 joins blocks onto mapped entries only, preserving v1 fields and order', () => {
  const entries = [
    v1Entry({ full_name: 'a/mapped' }),
    v1Entry({ full_name: 'B/Unmapped' }),
    v1Entry({ full_name: 'c/also-mapped' }),
  ];
  const result = buildMarketV2({
    market: v1Market(entries),
    packages: packages({
      'a/mapped': commandRecord(),
      // keys are lowercase by convention; the join must match case-insensitively
      'c/also-mapped': commandRecord({ tasks: undefined }),
      'd/catalog-only': commandRecord(),
    }),
    now,
  });
  assert.equal(result.outcome, 'written');
  assert.equal(result.mappedCount, 2);
  assert.equal(result.envelope.schema_version, V2_SCHEMA_VERSION);
  assert.equal(result.envelope.packages_mapped_count, 2);
  assert.equal(result.envelope.entries.length, 3);
  // v1 fields survive untouched on every entry, order preserved.
  result.envelope.entries.forEach((entry, index) => {
    for (const [field, value] of Object.entries(entries[index])) {
      assert.deepEqual(entry[field], value, `${field} on entry ${index}`);
    }
  });
  assert.ok(result.envelope.entries[0].packages);
  assert.equal('packages' in result.envelope.entries[1], false);
  assert.ok(result.envelope.entries[2].packages);
  // The catalog-only mapping is flagged, not published.
  assert.deepEqual(result.warnings.filter((w) => w.includes('d/catalog-only')).length, 1);
});

test('buildMarketV2 keeps the previous file bit for bit on identical inputs', () => {
  const market = v1Market([v1Entry({ full_name: 'a/mapped' })]);
  const pkgs = packages({ 'a/mapped': commandRecord() });
  const first = buildMarketV2({ market, packages: pkgs, now });
  assert.equal(first.outcome, 'written');
  const second = buildMarketV2({ market, packages: pkgs, previous: first.envelope, now: new Date('2026-09-27T00:00:00.000Z') });
  assert.equal(second.outcome, 'unchanged');
  assert.deepEqual(second.envelope, first.envelope);
});

test('buildMarketV2 never moves generated_at backwards', () => {
  const market = v1Market([v1Entry()]);
  const previous = {
    schema_version: V2_SCHEMA_VERSION,
    generated_at: '2027-01-01T00:00:00.000Z',
    source_fetched_at: market.source_fetched_at,
    source_repo_count: market.source_repo_count,
    pool_count: market.pool_count,
    packages_mapped_count: 0,
    entries: market.entries.map((entry) => ({ ...entry })),
  };
  const result = buildMarketV2({ market, packages: packages({}), previous, now });
  assert.equal(result.outcome, 'unchanged');
  assert.equal(result.envelope.generated_at, previous.generated_at);
});

test('buildMarketV2 aborts on mapping errors instead of publishing half-joined data', () => {
  const result = buildMarketV2({
    market: v1Market([v1Entry({ full_name: 'a/bad' })]),
    packages: packages({ 'a/bad': commandRecord({ status: 'nope' }) }),
    now,
  });
  assert.equal(result.outcome, 'aborted');
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /a\/bad: status must be one of/);
});

test('buildMarketV2 aborts over the byte cap rather than trimming the feed', () => {
  const market = v1Market([v1Entry({ full_name: 'a/mapped', description: 'x'.repeat(300) })]);
  const result = buildMarketV2({ market, packages: packages({ 'a/mapped': commandRecord() }), now, maxBytes: 300 });
  assert.equal(result.outcome, 'aborted');
  assert.match(result.reason, /over the 300-byte cap/);
  assert.match(result.reason, /trim the mapping, not the feed/);
});

test('buildMarketV2 refuses bases that are not the published v1 feed', () => {
  const wrongVersion = buildMarketV2({ market: v1Market([v1Entry()], { schema_version: 2 }), packages: packages({}), now });
  assert.equal(wrongVersion.outcome, 'aborted');
  assert.match(wrongVersion.reason, /schema_version/);
  const empty = buildMarketV2({ market: v1Market([]), packages: packages({}), now });
  assert.equal(empty.outcome, 'aborted');
  assert.match(empty.reason, /no entries/);
});

test('runMarketV2 writes the feed, then reports unchanged on a second run', async () => {
  const rootDir = await mkdtemp(resolve(tmpdir(), 'market-v2-test-'));
  await mkdir(resolve(rootDir, 'data'), { recursive: true });
  const market = v1Market([v1Entry({ full_name: 'a/mapped' }), v1Entry({ full_name: 'b/plain' })]);
  const pkgs = packages({ 'a/mapped': commandRecord() });
  await Promise.all([
    writeFile(resolve(rootDir, 'data/market.json'), JSON.stringify(market)),
    writeFile(resolve(rootDir, 'data/packages.json'), JSON.stringify(pkgs)),
  ]);

  const written = await runMarketV2({ rootDir });
  assert.equal(written, 'written');
  const onDisk = JSON.parse(await readFile(resolve(rootDir, 'data/market-v2.json'), 'utf8'));
  assert.equal(onDisk.schema_version, V2_SCHEMA_VERSION);
  assert.equal(onDisk.packages_mapped_count, 1);
  assert.ok(onDisk.entries[0].packages);
  assert.equal('packages' in onDisk.entries[1], false);
  assert.ok(Buffer.byteLength(JSON.stringify(onDisk)) < MAX_FILE_BYTES);

  const again = await runMarketV2({ rootDir });
  assert.equal(again, 'unchanged');

  // A mapping that fails the transform must leave the published file alone.
  await writeFile(resolve(rootDir, 'data/packages.json'), JSON.stringify(packages({ 'a/mapped': commandRecord({ status: 'broken' }) })));
  const aborted = await runMarketV2({ rootDir });
  assert.equal(aborted, 'aborted');
  const afterAbort = JSON.parse(await readFile(resolve(rootDir, 'data/market-v2.json'), 'utf8'));
  assert.deepEqual(afterAbort, onDisk);
});
