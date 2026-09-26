// Tests for the market.json pipeline (scripts/market.mjs), run with
//   node --test scripts/test-market.mjs
// The circuit-breaker tests are the spec's DoD: a pool collapse must never
// overwrite the previously published file.

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import {
  buildEntry,
  buildMarket,
  cleanText,
  codepointCompare,
  dealEntries,
  dedupById,
  filterPool,
  isSafeBranchName,
  MAX_FILE_BYTES,
  renderMarketMarkdown,
  runMarket,
  SCHEMA_VERSION,
} from './market.mjs';
import { categoryFallback } from './categories.mjs';
import { escapeCell } from './markdown.mjs';

let nextId = 1;
const repo = (overrides = {}) => ({
  id: nextId++,
  full_name: 'owner/repo',
  name: 'repo',
  description: 'A plugin.',
  language: 'TypeScript',
  stargazers_count: 0,
  license: 'MIT',
  archived: false,
  disabled: false,
  pushed_at: '2026-01-01T00:00:00Z',
  default_branch: 'main',
  topics: ['dsh-plugin'],
  ...overrides,
});
const snapshot = (repos) => ({
  source: 'test',
  query: 'test',
  fetched_at: '2026-08-16T01:00:00.000Z',
  total_count: repos.length,
  repositories: repos,
});
const curated = (overrides = {}) => ({
  category_overrides: {},
  leaderboard_exclusions: {},
  excluded_repos: {},
  ...overrides,
});
// data/approved.json approving every repository in a snapshot — the market is
// review-gated, so most tests approve their whole fixture up front.
const approveAll = (s) => Object.fromEntries(s.repositories.map((r) => [r.full_name, '2026-08-16']));
const previous = (overrides = {}) => ({
  schema_version: SCHEMA_VERSION,
  generated_at: '2026-08-15T01:00:00.000Z',
  source_fetched_at: '2026-08-15T01:00:00.000Z',
  source_repo_count: 10,
  pool_count: 10,
  entries: [],
  ...overrides,
});

test('cleanText folds whitespace, trims, and truncates by code point with an ellipsis', () => {
  assert.equal(cleanText('  a\n\tb  c ', 10), 'a b c');
  assert.equal(cleanText('x'.repeat(10), 5), 'xxxx…');
  assert.equal(cleanText('x'.repeat(5), 5), 'xxxxx');
  assert.equal(cleanText(123, 10), '');
  // A limit landing inside a surrogate pair must not leave a lone half behind.
  assert.equal(cleanText('😀😀😀😀😀', 3), '😀😀…');
  assert.equal([...cleanText('😀😀😀😀😀', 3)].length, 3);
});

test('isSafeBranchName accepts safe refs and rejects every injection shape', () => {
  for (const ok of ['main', 'feat/x-1', 'v1.2-beta', 'release/2026.1', 'a_b.c-d/e']) {
    assert.equal(isSafeBranchName(ok), true, `${ok} should pass`);
  }
  for (const bad of [
    '',
    '..',
    'a..b',
    'a//b',
    'trail/',
    'trail.',
    '.',
    'a/./b',
    '.lock',
    'x.lock',
    'a/x.lock',
    '-lead',
    'has space',
    'tab\there',
    '${IFS}',
  ]) {
    assert.equal(isSafeBranchName(bad), false, `${JSON.stringify(bad)} should fail`);
  }
});

test('codepointCompare is the code-point order, not localeCompare', () => {
  // 'Z' (0x5A) < 'a' (0x61) in code points; localeCompare puts 'a' first.
  assert.equal(codepointCompare('x/Z', 'x/a'), -1);
  assert.deepEqual(['x/a', 'x/Z'].sort(codepointCompare), ['x/Z', 'x/a']);
});

test('filterPool applies every exclusion rule', () => {
  const repos = [
    repo({ id: 1, full_name: 'no/description', description: '   ' }),
    repo({ id: 2, full_name: 'no/desc-null', description: null }),
    repo({ id: 3, full_name: 'arch/ived', archived: true }),
    repo({ id: 4, full_name: 'dis/abled', disabled: true }),
    repo({ id: 5, full_name: 'Case/Excluded', description: 'a' }),
    repo({ id: 6, full_name: 'Board/Excluded', description: 'a' }),
    repo({ id: 7, full_name: 'bruc3van/awesome-dsh-plugin', description: 'a' }),
    repo({ id: 8, full_name: 'By/Id', description: 'a' }),
    repo({ id: 9, full_name: 'keep/me', description: 'a' }),
  ];
  const c = curated({
    excluded_repos: { 'case/excluded': 'reason' }, // case-insensitive match
    leaderboard_exclusions: { 'board/excluded': 'reason' },
    excluded_repo_ids: { 8: 'blacklisted after rename' },
  });
  const { repos: kept } = filterPool(snapshot(repos), c, approveAll(snapshot(repos)));
  assert.deepEqual(
    kept.map(({ repo: r }) => r.full_name),
    ['keep/me'],
  );
});

test('filterPool is review-gated: unapproved repositories never reach the feed', () => {
  const s = snapshot([
    repo({ id: 1, full_name: 'Approved/Plugin', description: 'a' }),
    repo({ id: 2, full_name: 'pending/plugin', description: 'a', stargazers_count: 5000 }),
  ]);
  const { repos: kept } = filterPool(s, curated(), { 'approved/plugin': '2026-08-16' }); // case-insensitive
  assert.deepEqual(kept.map(({ repo: r }) => r.full_name), ['Approved/Plugin']);
  // The gate is not optional: forgetting approved.json must fail loudly.
  assert.throws(() => filterPool(s, curated()), /review-gated/);
  assert.throws(() => buildMarket({ snapshot: s, curated: curated() }), /review-gated/);
});

test('filterPool drops market-class competitors listed in market_exclusions', () => {
  const market = repo({
    id: 1,
    full_name: 'competitor/plugin-market',
    name: 'plugin-market',
    description: 'A plugin marketplace for DSH.',
  });
  const ordinary = repo({ id: 2, full_name: 'keep/me' });
  const c = curated({
    market_exclusions: {
      'competitor/plugin-market':
        'A competing DSH plugin market — market-in-market conflict; stays in the catalog and leaderboard, excluded from the downstream market.',
    },
  });
  const { repos: kept } = filterPool(snapshot([market, ordinary]), c, approveAll(snapshot([market, ordinary])));
  assert.deepEqual(
    kept.map(({ repo: r }) => r.full_name),
    ['keep/me'],
  );
  // The market-class entry must not reappear in the published feed either.
  const result = buildMarket({
    snapshot: snapshot([market, ordinary]),
    approved: approveAll(snapshot([market, ordinary])),
    curated: c,
    previous: null,
    now: new Date('2026-08-16T01:30:00Z'),
  });
  assert.equal(result.outcome, 'written');
  assert.deepEqual(result.envelope.entries.map((entry) => entry.full_name), ['keep/me']);
});

test('filterPool reports unknown category_overrides values without dropping the repo', () => {
  const c = curated({ category_overrides: { 'a/agent-thing': 'no-such-category' } });
  const { repos, warnings } = filterPool(snapshot([repo({ full_name: 'a/agent-thing', name: 'agent-thing' })]), c, approveAll(snapshot([repo({ full_name: 'a/agent-thing', name: 'agent-thing' })])));
  assert.equal(repos.length, 1);
  assert.equal(repos[0].category[0], 'agents-workflows'); // pattern fallback
  assert.equal(warnings.length, 1);
});

test('categoryForRepo: override wins case-insensitively, unknown override falls back to patterns', () => {
  const c = curated({ category_overrides: { 'A/Over-ridden': 'media-vision' } });
  const overridden = repo({ full_name: 'a/over-ridden', name: 'over-ridden', description: 'nothing agent-ish' });
  assert.equal(filterPool(snapshot([overridden]), c, approveAll(snapshot([overridden]))).repos[0].category[0], 'media-vision');
  const fallback = repo({ full_name: 'z/zzz', name: 'zzz', description: 'qwerty' });
  assert.equal(filterPool(snapshot([fallback]), c, approveAll(snapshot([fallback]))).repos[0].category[0], categoryFallback[0]);
});

test('dedupById keeps the first entry per id', () => {
  const first = buildEntry(repo({ id: 5, full_name: 'a/first', stargazers_count: 9 }), categoryFallback);
  const second = buildEntry(repo({ id: 5, full_name: 'a/second', stargazers_count: 1 }), categoryFallback);
  assert.deepEqual(dedupById([first, second]), [first]);
});

test('buildEntry cleans every field and falls back to main for unsafe branches', () => {
  const entry = buildEntry(
    repo({
      description: '   spaced \n\n out   ',
      language: null,
      license: null,
      stargazers_count: -3,
      default_branch: 'bad//branch',
      pushed_at: '2026-01-01T00:00:00Z',
    }),
    categoryFallback,
  );
  assert.equal(entry.description, 'spaced out');
  assert.equal(entry.language, '');
  assert.equal(entry.license, '');
  assert.equal(entry.stargazers_count, 0);
  assert.equal(entry.default_branch, 'main');
  assert.deepEqual(Object.keys(entry), [
    'id',
    'full_name',
    'description',
    'stargazers_count',
    'language',
    'license',
    'pushed_at',
    'default_branch',
    'category',
    'category_zh',
    'category_en',
  ]);
});

test('dealEntries sorts buckets, orders categories by strongest entry, and deals round-robin', () => {
  const mk = (category, stars, name) =>
    buildEntry(repo({ full_name: `o/${name}`, name, stargazers_count: stars, description: `${category} ${name}` }), [category, category, category]);
  // Category B has the strongest entry (100), so it deals first; tie at 50
  // between A and C breaks by key. Inside C, 'Z' sorts before 'a' in code
  // points even though localeCompare disagrees.
  const entries = [
    mk('cat-b', 100, 'b1'),
    mk('cat-b', 10, 'b2'),
    mk('cat-a', 50, 'a1'),
    mk('cat-c', 50, 'Z'),
    mk('cat-c', 50, 'a'),
    mk('cat-a', 5, 'a2'),
  ];
  const dealt = dealEntries(entries);
  assert.deepEqual(
    dealt.map((e) => [e.category, e.stargazers_count, e.full_name]),
    [
      ['cat-b', 100, 'o/b1'],
      ['cat-a', 50, 'o/a1'],
      ['cat-c', 50, 'o/Z'], // code-point order inside the tie
      ['cat-b', 10, 'o/b2'],
      ['cat-a', 5, 'o/a2'],
      ['cat-c', 50, 'o/a'],
    ],
  );
  // The cap stops the deal mid-round at exactly maxEntries.
  assert.equal(dealEntries(entries, 3).length, 3);
  // Any prefix is balanced: after the first round, one row per category.
  assert.deepEqual(dealEntries(entries, 3).map((e) => e.category), ['cat-b', 'cat-a', 'cat-c']);
});

test('the deal preserves the per-category non-increasing star invariant', () => {
  const mk = (category, stars, name) =>
    buildEntry(repo({ full_name: `o/${name}`, name, stargazers_count: stars, description: `${category} ${name}` }), [category, category, category]);
  const entries = [
    mk('cat-a', 10, 'a1'),
    mk('cat-a', 7, 'a2'),
    mk('cat-a', 7, 'a3'),
    mk('cat-b', 100, 'b1'),
    mk('cat-b', 1, 'b2'),
  ];
  const dealt = dealEntries(entries);
  const starsByCategory = new Map();
  for (const entry of dealt) {
    const stars = starsByCategory.get(entry.category) ?? [];
    stars.push(entry.stargazers_count);
    starsByCategory.set(entry.category, stars);
  }
  for (const stars of starsByCategory.values()) {
    for (let i = 1; i < stars.length; i++) assert.ok(stars[i] <= stars[i - 1]);
  }
});

test('buildMarket publishes a valid envelope in the spec field order', () => {
  const s = snapshot([repo({ id: 1, full_name: 'o/one', stargazers_count: 3 })]);
  const result = buildMarket({ snapshot: s, approved: approveAll(s), curated: curated(), previous: null, now: new Date('2026-08-16T01:30:00Z') });
  assert.equal(result.outcome, 'written');
  assert.deepEqual(Object.keys(result.envelope), [
    'schema_version',
    'generated_at',
    'source_fetched_at',
    'source_repo_count',
    'pool_count',
    'entries',
  ]);
  assert.equal(result.envelope.schema_version, 1);
  assert.equal(result.envelope.generated_at, '2026-08-16T01:30:00.000Z');
  assert.equal(result.envelope.source_fetched_at, s.fetched_at);
  assert.equal(result.envelope.source_repo_count, 1);
  assert.equal(result.envelope.pool_count, 1);
  assert.equal(result.envelope.entries.length, 1);
});

test('circuit breaker: a pool collapse below 60% aborts and never writes', () => {
  const s = snapshot([repo({ id: 1, full_name: 'o/one' })]);
  const prev = previous({ pool_count: 100 });
  const result = buildMarket({ snapshot: s, approved: approveAll(s), curated: curated(), previous: prev });
  assert.equal(result.outcome, 'aborted');
  assert.match(result.reason, /below 60%/);
});

test('circuit breaker: an empty pool aborts even without a previous file', () => {
  const s = snapshot([repo({ id: 1, full_name: 'x/out', description: 'a' })]);
  const c = curated({ excluded_repos: { 'x/out': 'reason' } });
  const result = buildMarket({ snapshot: s, approved: approveAll(s), curated: c, previous: null });
  assert.equal(result.outcome, 'aborted');
});

test('a pool at or above 60% passes the breaker', () => {
  const s = snapshot([repo({ id: 1, full_name: 'o/one' })]);
  const prev = previous({ pool_count: 1 });
  const result = buildMarket({ snapshot: s, approved: approveAll(s), curated: curated(), previous: prev });
  assert.equal(result.outcome, 'written');
});

test('unchanged source and curation keep the previous file and its generated_at', () => {
  const s = snapshot([repo({ id: 1, full_name: 'o/one' })]);
  const first = buildMarket({
    snapshot: s,
    approved: approveAll(s),
    curated: curated(),
    previous: null,
    now: new Date('2026-08-16T01:30:00Z'),
  });
  assert.equal(first.outcome, 'written');
  const second = buildMarket({
    snapshot: s,
    approved: approveAll(s),
    curated: curated(),
    previous: first.envelope,
    now: new Date('2026-08-17T01:30:00Z'),
  });
  assert.equal(second.outcome, 'unchanged');
  assert.equal(second.envelope.generated_at, '2026-08-16T01:30:00.000Z');
});

test('generated_at never moves backwards, even with clock skew', () => {
  const s = snapshot([repo({ id: 1, full_name: 'o/one' })]);
  const prev = previous({
    pool_count: 1,
    source_fetched_at: '2026-08-15T01:00:00.000Z',
    generated_at: '2026-08-17T00:00:00.000Z', // a future timestamp
  });
  const result = buildMarket({ snapshot: s, approved: approveAll(s), curated: curated(), previous: prev, now: new Date('2026-08-16T01:30:00Z') });
  assert.equal(result.outcome, 'written');
  assert.equal(result.envelope.generated_at, '2026-08-17T00:00:00.000Z');
});

test('the byte cap trims the deal to its largest fitting prefix', () => {
  // Max-length descriptions push a full 600-row deal past a tight injected
  // budget, so the trim path is exercised without depending on real data.
  const repos = Array.from({ length: 600 }, (_, i) =>
    repo({ id: i + 1, full_name: `o/r${i}`, name: `r${i}`, description: 'x'.repeat(300), stargazers_count: i }),
  );
  const budget = 40 * 1024;
  const result = buildMarket({
    snapshot: snapshot(repos),
    approved: approveAll(snapshot(repos)),
    curated: curated(),
    previous: null,
    now: new Date('2026-08-16T01:30:00Z'),
    maxBytes: budget,
  });
  assert.equal(result.outcome, 'written');
  assert.ok(result.envelope.entries.length >= 1 && result.envelope.entries.length < 600);
  assert.ok(
    Buffer.byteLength(`${JSON.stringify(result.envelope)}\n`, 'utf8') <= budget,
    'published envelope must fit the injected byte budget',
  );
  // The published list is exactly a prefix of the full deal — order preserved.
  const fullDeal = dealEntries(repos.map((r) => buildEntry(r, categoryFallback)));
  assert.deepEqual(result.envelope.entries, fullDeal.slice(0, result.envelope.entries.length));
});

test('a full 600-row deal fits the default 500 KB cap', () => {
  // Worst-case text: every entry at the maximum description length.
  const repos = Array.from({ length: 600 }, (_, i) =>
    repo({ id: i + 1, full_name: `o/r${i}`, name: `r${i}`, description: 'x'.repeat(300), stargazers_count: i }),
  );
  const result = buildMarket({
    snapshot: snapshot(repos),
    approved: approveAll(snapshot(repos)),
    curated: curated(),
    previous: null,
    now: new Date('2026-08-16T01:30:00Z'),
  });
  assert.equal(result.outcome, 'written');
  assert.equal(result.envelope.entries.length, 600);
  assert.ok(
    Buffer.byteLength(`${JSON.stringify(result.envelope)}\n`, 'utf8') <= MAX_FILE_BYTES,
    'published envelope must fit the default byte cap',
  );
});

test('the CLI never overwrites the previous file when the breaker fires', async () => {
  const dir = await mkdtemp(resolve(tmpdir(), 'market-broken-'));
  await mkdir(resolve(dir, 'data'));
  await writeFile(
    resolve(dir, 'data/repositories.json'),
    JSON.stringify(snapshot([repo({ id: 1, full_name: 'o/one' })])),
  );
  await writeFile(resolve(dir, 'data/curated.json'), JSON.stringify(curated()));
  await writeFile(
    resolve(dir, 'data/approved.json'),
    JSON.stringify(approveAll(JSON.parse(await readFile(resolve(dir, 'data/repositories.json'), 'utf8')))),
  );
  const prev = previous({
    pool_count: 100,
    generated_at: '2026-08-15T01:00:00.000Z',
    source_fetched_at: '2026-08-15T01:00:00.000Z',
  });
  await writeFile(resolve(dir, 'data/market.json'), JSON.stringify(prev));

  const outcome = await runMarket({ rootDir: dir, argv: ['node', 'market.mjs', '--from-snapshot'] });
  assert.equal(outcome, 'aborted');

  // Spec §6: yesterday's data must survive the aborted run bit for bit.
  const kept = JSON.parse(await readFile(resolve(dir, 'data/market.json'), 'utf8'));
  assert.deepEqual(kept, prev);
});

test('renderMarketMarkdown ranks by stars, links repos, and escapes cell hazards', () => {
  const fallback = categoryFallback; // [key, zh, en]
  const fixture = snapshot([
    repo({ id: 1, full_name: 'o/low', name: 'low', description: 'plain text', stargazers_count: 10 }),
    repo({ id: 2, full_name: 'o/high', name: 'high', description: 'pipe | tick ` new\nline', stargazers_count: 9000 }),
  ]);
  const result = buildMarket({
    snapshot: fixture,
    approved: approveAll(fixture),
    curated: curated(),
    previous: null,
    now: new Date('2026-08-16T01:30:00Z'),
  });
  assert.equal(result.outcome, 'written');
  const page = renderMarketMarkdown(result.envelope);

  // The preview ranks by stars (the consumer's All view), not deal order.
  const highRow = page.indexOf('[o/high](https://github.com/o/high)');
  const lowRow = page.indexOf('[o/low](https://github.com/o/low)');
  assert.ok(highRow !== -1 && lowRow !== -1, 'both repos appear as links');
  assert.ok(highRow < lowRow, 'the 9000-star repo ranks before the 10-star one');

  // Table-cell hazards are escaped, never rendered as structure.
  assert.ok(page.includes('pipe \\| tick \\` new line'));
  assert.ok(page.includes('Utilities &amp; Other'), 'markup in labels renders literally');
  assert.ok(!page.includes('pipe | tick'));

  // The category roll-up counts every published entry.
  const rollup = page.split('\n').find((line) => line.startsWith(`| ${escapeCell(`${fallback[2]} · ${fallback[1]}`)} |`));
  assert.ok(rollup !== undefined, 'the category row exists in the roll-up');
  assert.ok(rollup.endsWith('| 2 |'), 'both entries are counted once each');
});

test('runMarket writes MARKET.md beside market.json and leaves both untouched when the breaker fires', async () => {
  const dir = await mkdtemp(resolve(tmpdir(), 'market-md-'));
  await mkdir(resolve(dir, 'data'));
  await writeFile(
    resolve(dir, 'data/repositories.json'),
    JSON.stringify(snapshot([
      repo({ id: 1, full_name: 'o/one', stargazers_count: 3 }),
      repo({ id: 2, full_name: 'o/two', stargazers_count: 5 }),
    ])),
  );
  await writeFile(resolve(dir, 'data/curated.json'), JSON.stringify(curated()));
  await writeFile(
    resolve(dir, 'data/approved.json'),
    JSON.stringify(approveAll(JSON.parse(await readFile(resolve(dir, 'data/repositories.json'), 'utf8')))),
  );

  const first = await runMarket({ rootDir: dir, argv: ['node', 'market.mjs', '--from-snapshot'] });
  assert.equal(first, 'written');
  const json = await readFile(resolve(dir, 'data/market.json'), 'utf8');
  const page = await readFile(resolve(dir, 'MARKET.md'), 'utf8');
  assert.ok(page.includes('[o/two](https://github.com/o/two)'));
  assert.ok(page.endsWith('\n'));

  // Inflate the published pool so the next run's 2-entry pool trips the 60%
  // breaker: the run aborts and both artifacts survive bit for bit.
  const published = JSON.parse(json);
  const inflated = { ...published, pool_count: 100 };
  await writeFile(resolve(dir, 'data/market.json'), JSON.stringify(inflated));

  const second = await runMarket({ rootDir: dir, argv: ['node', 'market.mjs', '--from-snapshot'] });
  assert.equal(second, 'aborted');
  assert.equal(await readFile(resolve(dir, 'data/market.json'), 'utf8'), JSON.stringify(inflated));
  assert.equal(await readFile(resolve(dir, 'MARKET.md'), 'utf8'), page);
});

test('an unchanged run self-heals a stale MARKET.md without touching market.json', async () => {
  const dir = await mkdtemp(resolve(tmpdir(), 'market-md-heal-'));
  await mkdir(resolve(dir, 'data'));
  await writeFile(
    resolve(dir, 'data/repositories.json'),
    JSON.stringify(snapshot([repo({ id: 1, full_name: 'o/one', stargazers_count: 3 })])),
  );
  await writeFile(resolve(dir, 'data/curated.json'), JSON.stringify(curated()));
  await writeFile(
    resolve(dir, 'data/approved.json'),
    JSON.stringify(approveAll(JSON.parse(await readFile(resolve(dir, 'data/repositories.json'), 'utf8')))),
  );

  assert.equal(await runMarket({ rootDir: dir, argv: ['node', 'market.mjs', '--from-snapshot'] }), 'written');
  const frozenJson = await readFile(resolve(dir, 'data/market.json'), 'utf8');
  const expectedPage = await readFile(resolve(dir, 'MARKET.md'), 'utf8');

  await writeFile(resolve(dir, 'MARKET.md'), 'a stale hand edit\n');
  const again = await runMarket({ rootDir: dir, argv: ['node', 'market.mjs', '--from-snapshot'] });
  assert.equal(again, 'unchanged');
  assert.equal(await readFile(resolve(dir, 'data/market.json'), 'utf8'), frozenJson);
  assert.equal(await readFile(resolve(dir, 'MARKET.md'), 'utf8'), expectedPage);
});
