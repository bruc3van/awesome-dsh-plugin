// Tests for scripts/check-entry.mjs, run with
//   node --test scripts/test-check-entry.mjs
//
// The invariants under test: the selection is npm-only, deduplicated and
// lexicographic with a hard 50-entry cap; a failed npm pack or a missing
// checker becomes `not_run` without aborting the run; the process exits 0 in
// every failure mode; the report carries the fixed non-blocking fields and
// the not-checked notes; and the mapping/curation files are never written.

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { chmod, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  BANNED_TERMS,
  CHECKER_ARGS,
  MAX_ENTRIES,
  REGISTRY,
  assertNoBannedTerms,
  buildReport,
  classifyCheckerResult,
  clampLimit,
  collectNpmSubjects,
  isNpmSpecSafe,
  npmSpecOf,
  parseCheckerVersion,
  renderMarkdown,
  runEntryReport,
  parseArgs,
  selectSubjects,
  splitNpmSpec,
  validateReport,
} from './check-entry.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const scriptPath = resolve(here, 'check-entry.mjs');
const dataDir = resolve(here, '..', 'data');
const digest = (value) => createHash('sha256').update(value).digest('hex');
const hasBannedTerm = (value) => BANNED_TERMS.some((term) => value.includes(term));

// --- fixtures ---------------------------------------------------------------

const packagesFixture = () => ({
  schema_version: 1,
  updated_at: '2026-11-07',
  entries: {
    'owner/zeta': {
      packages: [{ profile: 'web', source: 'npm:zeta-plugin', install: 'zeta-plugin', command: 'dsh plugin add zeta-plugin' }],
    },
    'owner/alpha': {
      packages: [{ profile: 'web', source: 'npm:alpha-plugin@1.2.3', install: 'alpha-plugin@1.2.3', command: 'dsh plugin add alpha-plugin@1.2.3' }],
    },
    'owner/shared': {
      packages: [{ profile: 'web', source: 'npm:shared-plugin', install: 'shared-plugin', command: 'dsh plugin add shared-plugin' }],
    },
    'owner/gh': {
      packages: [{ profile: 'web', source: 'github:owner/gh', install: 'https://github.com/owner/gh', command: 'dsh plugin add https://github.com/owner/gh' }],
    },
    'owner/no-source': { packages: [{ profile: 'web', install: 'mystery' }] },
  },
});

const marketFixture = () => ({
  schema_version: 2,
  generated_at: '2026-11-07T00:00:00.000Z',
  entries: [
    { full_name: 'owner/zeta', packages: { targets: [{ source: 'npm:zeta-plugin' }] } },
    { full_name: 'owner/beta', packages: { targets: [{ source: 'npm:@scope/beta' }] } },
    { full_name: 'owner/shared', packages: { targets: [{ source: 'npm:shared-plugin' }] } },
    { full_name: 'owner/gh2', packages: { targets: [{ source: 'github:owner/gh2' }] } },
    { full_name: 'owner/no-targets', packages: { targets: [] } },
    { full_name: 'owner/bad-targets', packages: {} },
  ],
});

const checkedResult = (spec) => ({
  subject: splitNpmSpec(spec).name,
  spec,
  repositories: ['owner/alpha'],
  sources: ['data/packages.json'],
  state: 'checked',
  checked_at: '2026-11-07T00:00:01.000Z',
  duration_ms: 2500,
  raw: { status: 'warn', exit_code: 0 },
  entry_blocking: {
    pass: false,
    required: 6,
    checked: ['C-1.1', 'C-1.2', 'C-1.4'],
    not_checked: ['C-3.1', 'C-3.2', 'C-3.5'],
    failed: [],
  },
  npm: { version: '1.2.3' },
  checker: { version: '1.6.8', level: 'DSH-ENTRY recognized (warnings)', reason: 'WARN: DSC-02' },
  coverage: { total: 14, checked: 12 },
  checks: [{ id: 'DSC-01', clause: 'C-1', result: 'PASS', coverage: 'full' }],
  checker_not_checked: [{ id: 'DSC-03', clause: 'C-3', result: 'NA', coverage: 'not-run' }],
});

const notRun = (spec, reason = 'npm-pack-failed: E404 Not Found') => ({
  subject: splitNpmSpec(spec).name,
  spec,
  repositories: ['owner/missing'],
  sources: ['data/packages.json'],
  state: 'not_run',
  checked_at: '2026-11-07T00:00:01.000Z',
  duration_ms: 120,
  reason,
});

// --- selection --------------------------------------------------------------

test('npmSpecOf accepts only npm: sources', () => {
  assert.equal(npmSpecOf('npm:@scope/name@0.1.0'), '@scope/name@0.1.0');
  assert.equal(npmSpecOf('  npm:name  '), 'name');
  assert.equal(npmSpecOf('github:owner/repo'), null);
  assert.equal(npmSpecOf('url:https://example.com/pkg.tgz'), null);
  assert.equal(npmSpecOf('npm:'), null);
  assert.equal(npmSpecOf(null), null);
});

test('splitNpmSpec separates scoped and pinned names', () => {
  assert.deepEqual(splitNpmSpec('@scope/name@1.2.3'), { name: '@scope/name', version: '1.2.3' });
  assert.deepEqual(splitNpmSpec('@scope/name'), { name: '@scope/name', version: null });
  assert.deepEqual(splitNpmSpec('name@latest'), { name: 'name', version: 'latest' });
  assert.deepEqual(splitNpmSpec('name'), { name: 'name', version: null });
});

test('isNpmSpecSafe rejects option-like and whitespace-bearing input', () => {
  for (const spec of ['name', 'name@1.2.3', '@scope/name', '@scope/name@^1.0.0', 'dsh-wallpaper_share@26.10.13-D']) {
    assert.equal(isNpmSpecSafe(spec), true, spec);
  }
  for (const spec of ['-x', 'name with space', 'name\nother', '', '@scope', '@scope/']) {
    assert.equal(isNpmSpecSafe(spec), false, spec);
  }
});

test('collectNpmSubjects keeps npm targets from both files, deduplicated and sorted', () => {
  const subjects = collectNpmSubjects(packagesFixture(), marketFixture());
  assert.deepEqual(subjects.map((subject) => subject.spec), [
    '@scope/beta',
    'alpha-plugin@1.2.3',
    'shared-plugin',
    'zeta-plugin',
  ]);
  const zeta = subjects.find((subject) => subject.spec === 'zeta-plugin');
  assert.deepEqual(zeta.repositories, ['owner/zeta']);
  assert.deepEqual(zeta.sources, ['data/market-v2.json', 'data/packages.json']);
  assert.deepEqual(zeta.version, null);
  const alpha = subjects.find((subject) => subject.spec === 'alpha-plugin@1.2.3');
  assert.equal(alpha.name, 'alpha-plugin');
  assert.equal(alpha.version, '1.2.3');
  assert.deepEqual(alpha.sources, ['data/packages.json']);
});

test('selection is capped at 50 and lexicographic even for shuffled input', () => {
  const many = Array.from({ length: 75 }, (_, index) => ({
    name: `pkg-${String(index).padStart(3, '0')}`,
    spec: `pkg-${String(index).padStart(3, '0')}`,
    version: null,
    repositories: [],
    sources: [],
  })).reverse();

  const capped = selectSubjects(many, 1000, 0);
  assert.equal(capped.limit, MAX_ENTRIES);
  assert.equal(capped.selected.length, MAX_ENTRIES);
  assert.equal(capped.truncated, true);
  assert.deepEqual(capped.selected.slice(0, 3).map((subject) => subject.name), [
    'pkg-000',
    'pkg-001',
    'pkg-002',
  ]);

  const small = selectSubjects(many, 2, 0);
  assert.equal(small.selected.length, 2);
  assert.deepEqual(small.selected.map((subject) => subject.name), ['pkg-000', 'pkg-001']);

  const rotated = selectSubjects(many, 2, 1);
  assert.deepEqual(rotated.selected.map((subject) => subject.name), ['pkg-002', 'pkg-003']);
  assert.equal(rotated.offset, 2);
  assert.equal(rotated.windows, Math.ceil(75 / 2));
  const wrapped = selectSubjects(many, 2, rotated.windows);
  assert.equal(wrapped.offset, 0);
  assert.deepEqual(wrapped.selected.map((subject) => subject.name), ['pkg-000', 'pkg-001']);

  // The default step is injectable and advances on Monday 00:00 UTC.
  const monday = Date.UTC(1970, 0, 5);
  assert.equal(selectSubjects(many, 2, null, monday).step, 0);
  assert.equal(selectSubjects(many, 2, null, monday + 7 * 24 * 3600 * 1000).step, 1);
  assert.equal(selectSubjects(many, 2, null, monday - 1).step, Math.ceil(75 / 2) - 1);
});

test('clampLimit never exceeds the per-run cap and never goes below one', () => {
  assert.equal(clampLimit(0), 1);
  assert.equal(clampLimit(-5), 1);
  assert.equal(clampLimit(Number.NaN), MAX_ENTRIES);
  assert.equal(clampLimit('12'), 12);
  assert.equal(clampLimit(9999), MAX_ENTRIES);
});

// --- checker classification -------------------------------------------------

test('checker exit codes map to neutral states without inventing a result', () => {
  assert.equal(classifyCheckerResult(0, { conclusion: { status: 'warn', level: 'DSH-ENTRY recognized (warnings)' } }), 'checked');
  assert.equal(classifyCheckerResult(1, { conclusion: { status: 'fail', level: null } }), 'checked');
  assert.equal(classifyCheckerResult(2, { conclusion: { status: 'incomplete', level: 'DSH-ENTRY unavailable' } }), 'unavailable');
  assert.equal(classifyCheckerResult(2, { conclusion: { status: 'incomplete', level: 'DSH-ENTRY static' } }), 'not_run');
  assert.equal(classifyCheckerResult(2, { conclusion: {} }), 'not_run');
  assert.equal(classifyCheckerResult(null, null), 'not_run');
});

test('parseCheckerVersion only accepts the pinned version string', () => {
  assert.equal(parseCheckerVersion('dsh-standards 1.6.8 (checker 0.1.0)'), '1.6.8');
  assert.equal(parseCheckerVersion('dsh-standards 1.6.7'), '1.6.7');
  assert.equal(parseCheckerVersion('not a checker'), null);
});

// --- report -----------------------------------------------------------------

test('buildReport keeps the fixed non-blocking fields and the not-checked notes', () => {
  const report = buildReport({
    results: [checkedResult('alpha-plugin@1.2.3'), notRun('missing-plugin')],
    totalMapped: 3,
    limit: 2,
    now: new Date('2026-11-07T00:00:00.000Z'),
  });

  assert.equal(report.schema, 'dsh-entry-report/1');
  assert.equal(report.state, 'partial');
  assert.equal(report.checked_at, '2026-11-07T00:00:00.000Z');
  assert.equal(report.checker_version, '1.6.8');
  assert.equal(report.entry_blocking, false);
  assert.equal(report.flow, 'not-run');
  assert.equal(report.boost, 'not-measured');
  assert.equal(report.subject.kind, 'npm-published-package');
  assert.equal(report.subject.scope, 'entry');
  assert.equal(report.subject.claim, 'static');
  assert.equal(report.subject.registry, REGISTRY);
  assert.deepEqual(report.selection, {
    total_mapped: 3,
    limit: 2,
    selected: 2,
    truncated: true,
    offset: 0,
    windows: 2,
    step: 0,
    window: 1,
    order: 'npm-package-name-asc',
    rotation: 'weekly',
  });
  assert.ok(report.not_checked.some((item) => item.kind === 'entry' && item.subject === 'missing-plugin'));
  assert.ok(report.not_checked.some((item) => item.kind === 'limit'));
  assert.ok(report.not_checked.some((item) => item.kind === 'checker' && item.subject.startsWith('DSC-03')));
  assert.ok(report.not_checked.some((item) => item.kind === 'scope' && item.subject.startsWith('FLOW')));
  assert.ok(report.not_checked.some((item) => item.kind === 'scope' && item.subject.startsWith('BOOST')));
  assert.equal(hasBannedTerm(JSON.stringify(report)), false);
  validateReport(report);
});

test('buildReport uses not_run when nothing produced a checker result', () => {
  const report = buildReport({
    results: [notRun('a'), notRun('b')],
    totalMapped: 2,
    limit: 2,
    now: new Date('2026-11-07T00:00:00.000Z'),
  });
  assert.equal(report.state, 'not_run');
  assert.equal(report.selection.truncated, false);
  assert.equal(report.not_checked.filter((item) => item.kind === 'entry').length, 2);
});

test('buildReport reports checked only when every mapped entry produced a checker result', () => {
  const complete = buildReport({
    results: [checkedResult('a'), checkedResult('b')],
    totalMapped: 2,
    limit: 2,
    now: new Date('2026-11-07T00:00:00.000Z'),
  });
  assert.equal(complete.state, 'checked');
  assert.ok(complete.not_checked.every((item) => item.kind !== 'limit'));
});

test('buildReport rejects results above the cap or above the mapped total', () => {
  assert.throws(
    () => buildReport({ results: new Array(MAX_ENTRIES + 1).fill(checkedResult('a')), totalMapped: 100, limit: 100 }),
    /per-run limit/,
  );
  assert.throws(
    () => buildReport({ results: [checkedResult('a')], totalMapped: 0 }),
    /totalMapped/,
  );
});

test('validateReport rejects a report that dropped a required constant', () => {
  const report = buildReport({
    results: [checkedResult('a')],
    totalMapped: 1,
    limit: 1,
    now: new Date('2026-11-07T00:00:00.000Z'),
  });
  assert.throws(() => validateReport({ ...report, flow: 'run' }), /flow/);
  assert.throws(() => validateReport({ ...report, boost: 'measured' }), /boost/);
  assert.throws(() => validateReport({ ...report, entry_blocking: true }), /entry_blocking/);
  assert.throws(() => validateReport({ ...report, not_checked: null }), /not_checked/);
  assert.throws(() => validateReport({ ...report, selection: { ...report.selection, selected: 2 } }), /selection.selected/);
});

test('renderMarkdown shows the not-checked notes next to the results', () => {
  const report = buildReport({
    results: [checkedResult('alpha-plugin@1.2.3'), notRun('missing-plugin', 'npm-pack-failed: E404')],
    totalMapped: 3,
    limit: 2,
    now: new Date('2026-11-07T00:00:00.000Z'),
  });
  const markdown = renderMarkdown(report);
  assert.match(markdown, /^# Static ENTRY report — 2026-11-07/m);
  assert.match(markdown, /## Not checked/);
  assert.match(markdown, /\*\*entry\*\* · missing-plugin — npm-pack-failed: E404/);
  assert.match(markdown, /\| FLOW \| `not-run` \|/);
  assert.match(markdown, /\| BOOST \| `not-measured` \|/);
  assert.match(markdown, /\| entry_blocking \| `false` \|/);
  assert.match(markdown, /dsh-standards@1\.6\.8/);
  assert.match(markdown, /## Results/);
  assert.equal(hasBannedTerm(markdown), false);

  const failedResult = {
    ...checkedResult('broken-plugin'),
    subject: 'broken-plugin',
    spec: 'broken-plugin',
    state: 'checked',
    raw: { status: 'fail', exit_code: 1 },
    checker: { ...checkedResult('broken-plugin').checker, level: null, reason: 'FAIL: DSC-01' },
    entry_blocking: {
      pass: false,
      required: 6,
      checked: ['C-1.1'],
      not_checked: ['C-3.1'],
      failed: ['C-1.2'],
    },
    coverage: { total: 14, checked: 11 },
  };
  const failedMarkdown = renderMarkdown(
    buildReport({
      results: [failedResult],
      totalMapped: 1,
      limit: 1,
      now: new Date('2026-11-07T00:00:00.000Z'),
    }),
  );
  assert.match(
    failedMarkdown,
    /\| `broken-plugin` \| 1\.2\.3 \| `checked` \| false \| 11\/14 \|/,
  );
  // The Markdown summary stays neutral: the checker's raw verdict is JSON-only.
  assert.doesNotMatch(failedMarkdown, /fail \(1\)|DSH-ENTRY failed/);
  assert.throws(() => assertNoBannedTerms(`x${BANNED_TERMS[0]}x`), /disallowed/);
  assert.throws(() => assertNoBannedTerms(`x${BANNED_TERMS[3]}x`), /disallowed/);
});

// --- fake binaries for the end-to-end path ----------------------------------

const FAKE_NPM = `#!/usr/bin/env node
import { appendFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
appendFileSync(process.env.FAKE_NPM_LOG, JSON.stringify(argv) + '\\n');
const separator = argv.indexOf('--');
const spec = separator >= 0 ? argv.slice(separator + 1).join(' ') : argv.at(-1);
if (spec.includes('missing')) {
  console.log(JSON.stringify({ error: { code: 'E404', summary: 'Not Found - GET https://registry.npmjs.org/' + spec } }));
  console.error('npm error 404 ' + spec);
  process.exit(1);
}
const destination = argv[argv.indexOf('--pack-destination') + 1];
copyFileSync(process.env.FAKE_TGZ, join(destination, 'fixture.tgz'));
console.log(JSON.stringify([{
  name: 'alpha-plugin',
  version: '1.2.3',
  filename: 'fixture.tgz',
  integrity: 'sha512-fixture',
  shasum: 'fixture',
  size: 123,
  unpackedSize: 456,
  entryCount: 2,
}]));
`;

const FAKE_CHECKER = `#!/usr/bin/env node
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
appendFileSync(process.env.FAKE_CHECKER_LOG, JSON.stringify(argv) + '\\n');
if (argv.includes('--version')) {
  console.log('dsh-standards 1.6.8 (checker 0.1.0)');
  process.exit(0);
}
const pkgDir = argv[0];
const out = argv[argv.indexOf('--out') + 1];
const pkg = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8'));
const mode = process.env.FAKE_CHECKER_STATE || 'recognized';
const level = mode === 'recognized' ? 'DSH-ENTRY recognized (warnings)'
  : mode === 'unavailable' ? 'DSH-ENTRY unavailable'
  : mode === 'static' ? 'DSH-ENTRY static'
  : null;
const status = mode === 'recognized' ? 'warn' : mode === 'failed' ? 'fail' : 'incomplete';
const exitCode = mode === 'recognized' ? 0 : mode === 'failed' ? 1 : 2;
writeFileSync(out, JSON.stringify({
  schema: 'dsh-conformance/1',
  subject: { name: pkg.name, version: pkg.version, kind: 'bundle', kindEvaluated: 'bundle' },
  conclusion: { level, status, exitCode, scope: 'entry', entryClaim: 'static', reason: mode === 'failed' ? 'FAIL: DSC-01' : 'fixture ' + mode },
  checks: [{ id: 'DSC-01', clause: 'C-1', layer: 'L0', result: 'PASS', coverage: 'full', reason: '' }],
  coverage: {
    total: 14, mandatory: 5, checked: 12, pass: 9, warn: 3, advisory: 2,
    fail: mode === 'failed' ? 1 : 0, na: 2, notRun: 0, partial: 6, error: 0,
    entryBlocking: { required: 6, checked: ['C-1.1', 'C-1.2', 'C-1.4'], notChecked: ['C-3.1', 'C-3.2', 'C-3.5'], failed: mode === 'failed' ? ['C-1.2'] : [], pass: false },
  },
  notChecked: [
    { id: 'DSC-03', clause: 'C-3', result: 'NA', coverage: 'not-run' },
    { id: 'DSC-14', clause: 'C-14', result: 'NA', coverage: 'not-run' },
  ],
  runtimeChecks: { executed: false, reason: '--no-exec' },
}));
process.exit(exitCode);
`;

async function makeWorkspace({ extraMissing = true } = {}) {
  const rootDir = await mkdtemp(join(tmpdir(), 'entry-check-test-'));
  await mkdir(join(rootDir, 'data'), { recursive: true });
  await mkdir(join(rootDir, 'bin'), { recursive: true });

  const packages = packagesFixture();
  if (extraMissing) {
    packages.entries['owner/missing'] = {
      packages: [{ source: 'npm:missing-plugin@9.9.9', install: 'missing-plugin@9.9.9' }],
    };
  }
  const packagesRaw = `${JSON.stringify(packages, null, 2)}\n`;
  await writeFile(join(rootDir, 'data/packages.json'), packagesRaw);
  await writeFile(join(rootDir, 'data/market-v2.json'), `${JSON.stringify(marketFixture(), null, 2)}\n`);

  const fixtureDir = join(rootDir, 'fixture');
  await mkdir(join(fixtureDir, 'package'), { recursive: true });
  await writeFile(
    join(fixtureDir, 'package/package.json'),
    JSON.stringify({ name: 'alpha-plugin', version: '1.2.3', type: 'module' }),
  );
  const tarball = join(rootDir, 'fixture.tgz');
  const tar = spawnSync('tar', ['-czf', tarball, '-C', fixtureDir, 'package'], { encoding: 'utf8' });
  assert.equal(tar.status, 0, tar.stderr);

  const npmBin = join(rootDir, 'bin/npm');
  const checkerBin = join(rootDir, 'bin/dsh-standards');
  const npmLog = join(rootDir, 'npm.log');
  const checkerLog = join(rootDir, 'checker.log');
  const unavailableChecker = join(rootDir, 'bin/not-installed');
  await writeFile(npmBin, FAKE_NPM);
  await writeFile(checkerBin, FAKE_CHECKER);
  await chmod(npmBin, 0o755);
  await chmod(checkerBin, 0o755);

  return {
    rootDir,
    packagesRaw,
    packagesHash: digest(packagesRaw),
    npmBin,
    checkerBin,
    npmLog,
    checkerLog,
    tarball,
    unavailableChecker,
    env: {
      FAKE_TGZ: tarball,
      FAKE_NPM_LOG: npmLog,
      FAKE_CHECKER_LOG: checkerLog,
    },
  };
}

const readLog = async (file) =>
  (await readFile(file, 'utf8')).split('\n').filter(Boolean).map((line) => JSON.parse(line));

// --- end-to-end -------------------------------------------------------------

test('runEntryReport writes both outputs, keeps mapping files byte-identical, and records a failed pack', async () => {
  const workspace = await makeWorkspace();
  try {
    const outPath = join(workspace.rootDir, 'out/entry-report.json');
    const markdownPath = join(workspace.rootDir, 'out/entry.md');
    const { report } = await runEntryReport({
      rootDir: workspace.rootDir,
      limit: 10,
      outPath,
      markdownPath,
      now: new Date('2026-11-07T00:00:00.000Z'),
      npmBin: workspace.npmBin,
      checkerBin: workspace.checkerBin,
      env: workspace.env,
      log: () => {},
    });

    assert.equal(report.state, 'partial');
    assert.equal(report.selection.selected, 5);
    assert.equal(report.selection.truncated, false);
    assert.deepEqual(report.results.map((result) => result.spec), [
      '@scope/beta',
      'alpha-plugin@1.2.3',
      'missing-plugin@9.9.9',
      'shared-plugin',
      'zeta-plugin',
    ]);
    assert.deepEqual(report.results.map((result) => result.state), [
      'checked',
      'checked',
      'not_run',
      'checked',
      'checked',
    ]);
    assert.match(report.results[2].reason, /^npm-pack-failed: Not Found/);
    assert.ok(report.not_checked.some((item) => item.kind === 'entry' && item.subject === 'missing-plugin@9.9.9'));
    assert.equal(report.flow, 'not-run');
    assert.equal(report.boost, 'not-measured');
    assert.equal(report.entry_blocking, false);
    assert.equal(report.checker_version, '1.6.8');
    assert.equal(report.checker.available, true);
    for (const entry of report.results.filter((result) => result.state === 'checked')) {
      assert.equal(typeof entry.raw.status, 'string');
      assert.equal(typeof entry.raw.exit_code, 'number');
      assert.equal(typeof entry.entry_blocking.pass, 'boolean');
    }

    const onDisk = JSON.parse(await readFile(outPath, 'utf8'));
    assert.deepEqual(onDisk, report);
    const markdown = await readFile(markdownPath, 'utf8');
    assert.match(markdown, /## Not checked/);
    assert.match(markdown, /missing-plugin@9\.9\.9/);
    assert.match(markdown, /\| FLOW \| `not-run` \|/);
    assert.equal(hasBannedTerm(markdown), false);
    const onDiskText = JSON.stringify(onDisk);
    assert.equal(hasBannedTerm(onDiskText), false);
    for (const oldState of ['recognized', 'failed', 'complete']) {
      assert.equal(onDiskText.includes(`"state": "${oldState}"`), false, oldState);
      assert.equal(markdown.includes(`| \`${oldState}\` |`), false, oldState);
    }

    const packagesAfter = await readFile(join(workspace.rootDir, 'data/packages.json'), 'utf8');
    assert.equal(digest(packagesAfter), workspace.packagesHash);
    assert.equal(packagesAfter, workspace.packagesRaw);

    const npmCalls = await readLog(workspace.npmLog);
    assert.equal(npmCalls.length, 5);
    for (const args of npmCalls) {
      assert.equal(args[0], 'pack');
      assert.ok(args.includes('--ignore-scripts'), args.join(' '));
      assert.ok(args.includes(`--registry=${REGISTRY}`), args.join(' '));
      assert.ok(args.includes('--'), args.join(' '));
    }
    assert.deepEqual(npmCalls[2].slice(npmCalls[2].indexOf('--') + 1), ['missing-plugin@9.9.9']);

    const checkerCalls = await readLog(workspace.checkerLog);
    assert.deepEqual(checkerCalls[0], ['--version']);
    assert.equal(checkerCalls.length, 5);
    for (const args of checkerCalls.slice(1)) {
      for (const expected of CHECKER_ARGS) assert.ok(args.includes(expected), args.join(' '));
      assert.ok(args.includes('--format'));
      assert.ok(args.includes('json'));
      assert.ok(args.includes('--out'));
    }
  } finally {
    await rm(workspace.rootDir, { recursive: true, force: true });
  }
});

test('a checker-reported fail stays checked, keeps raw.status fail, and keeps entry_blocking.pass false', async () => {
  const workspace = await makeWorkspace({ extraMissing: false });
  try {
    const outPath = join(workspace.rootDir, 'out/entry-report.json');
    const markdownPath = join(workspace.rootDir, 'out/entry.md');
    const result = spawnSync(
      process.execPath,
      [scriptPath, '--root', workspace.rootDir, '--limit', '1', '--out', outPath, '--md', markdownPath],
      {
        encoding: 'utf8',
        timeout: 30_000,
        env: {
          ...process.env,
          ...workspace.env,
          ENTRY_NPM_BIN: workspace.npmBin,
          ENTRY_CHECKER_BIN: workspace.checkerBin,
          FAKE_CHECKER_STATE: 'failed',
        },
      },
    );
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(await readFile(outPath, 'utf8'));
    const [entry] = report.results;
    assert.equal(entry.state, 'checked');
    assert.deepEqual(entry.raw, { status: 'fail', exit_code: 1 });
    assert.equal(entry.entry_blocking.pass, false);
    assert.deepEqual(entry.entry_blocking.failed, ['C-1.2']);
    assert.equal(entry.checker.level, null);
    assert.match(entry.checker.reason, /^FAIL/);
    assert.equal(report.entry_blocking, false);
    assert.equal(report.flow, 'not-run');
    assert.equal(report.boost, 'not-measured');
    assert.ok(['checked', 'partial', 'not_run'].includes(report.state));
    const markdown = await readFile(markdownPath, 'utf8');
    assert.match(markdown, /\| `checked` \| false \|/);
    assert.doesNotMatch(markdown, /fail \(1\)/);
    assert.equal(await readFile(join(workspace.rootDir, 'data/packages.json'), 'utf8'), workspace.packagesRaw);
  } finally {
    await rm(workspace.rootDir, { recursive: true, force: true });
  }
});

test('the CLI exits 0, stays within the limit, and records not_run when the checker is absent', async () => {
  const workspace = await makeWorkspace();
  try {
    const outPath = join(workspace.rootDir, 'out/entry-report.json');
    const markdownPath = join(workspace.rootDir, 'out/entry.md');
    const result = spawnSync(
      process.execPath,
      [scriptPath, '--root', workspace.rootDir, '--limit', '1', '--out', outPath, '--md', markdownPath],
      {
        encoding: 'utf8',
        timeout: 30_000,
        env: {
          ...process.env,
          ENTRY_NPM_BIN: workspace.npmBin,
          ENTRY_CHECKER_BIN: workspace.unavailableChecker,
        },
      },
    );
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(await readFile(outPath, 'utf8'));
    assert.equal(report.state, 'not_run');
    assert.equal(report.selection.limit, 1);
    assert.equal(report.selection.truncated, true);
    assert.equal(report.selection.selected, 1);
    assert.equal(report.results.length, 1);
    assert.equal(report.results[0].state, 'not_run');
    assert.match(report.results[0].reason, /checker-unavailable/);
    assert.equal(report.checker.available, false);
    assert.ok(report.not_checked.some((item) => item.kind === 'entry'));
    assert.ok(report.not_checked.some((item) => item.kind === 'limit'));
    assert.equal(hasBannedTerm(await readFile(markdownPath, 'utf8')), false);
    assert.equal((await readFile(join(workspace.rootDir, 'data/packages.json'), 'utf8')), workspace.packagesRaw);
  } finally {
    await rm(workspace.rootDir, { recursive: true, force: true });
  }
});

test('an unavailable checker result is reported without being upgraded', async () => {
  const workspace = await makeWorkspace({ extraMissing: false });
  try {
    const outPath = join(workspace.rootDir, 'out/entry-report.json');
    const markdownPath = join(workspace.rootDir, 'out/entry.md');
    const result = spawnSync(
      process.execPath,
      [scriptPath, '--root', workspace.rootDir, '--limit', '1', '--out', outPath, '--md', markdownPath],
      {
        encoding: 'utf8',
        timeout: 30_000,
        env: {
          ...process.env,
          ...workspace.env,
          ENTRY_NPM_BIN: workspace.npmBin,
          ENTRY_CHECKER_BIN: workspace.checkerBin,
          FAKE_CHECKER_STATE: 'unavailable',
        },
      },
    );
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(await readFile(outPath, 'utf8'));
    assert.equal(report.state, 'not_run');
    assert.equal(report.results[0].state, 'unavailable');
    assert.match(report.results[0].reason, /^checker-unavailable:/);
    assert.ok(report.not_checked.some((item) => item.kind === 'entry'));
    assert.equal(report.flow, 'not-run');
  } finally {
    await rm(workspace.rootDir, { recursive: true, force: true });
  }
});

test('runEntryReport refuses to overwrite the mapping files', async () => {
  const workspace = await makeWorkspace();
  try {
    await assert.rejects(
      runEntryReport({
        rootDir: workspace.rootDir,
        outPath: join(workspace.rootDir, 'data/packages.json'),
        markdownPath: join(workspace.rootDir, 'out/entry.md'),
        now: new Date('2026-11-07T00:00:00.000Z'),
        npmBin: workspace.npmBin,
        checkerBin: workspace.checkerBin,
        log: () => {},
      }),
      /protected data file/,
    );
    assert.equal((await readFile(join(workspace.rootDir, 'data/packages.json'), 'utf8')), workspace.packagesRaw);
  } finally {
    await rm(workspace.rootDir, { recursive: true, force: true });
  }
});


test('parseArgs accepts --offset and rejects non-integers', () => {
  assert.equal(parseArgs(['--offset', '3']).offsetStep, 3);
  assert.throws(() => parseArgs(['--offset', 'x']), /--offset/);
  assert.throws(() => parseArgs(['--offset']), /needs a value/);
});
