#!/usr/bin/env node

// Read-only static ENTRY report for the npm targets mapped in this repo.
//
// Sources: data/packages.json (hand-maintained install mapping) and
// data/market-v2.json (published feed). Only npm: targets are selected; a
// github:/url: target is out of scope here.
//
// Each selected target is checked from its published registry artifact, not
// from a source checkout:
//
//   1. `npm pack --ignore-scripts` the exact mapped spec from
//      https://registry.npmjs.org (no git clone, no lifecycle scripts);
//   2. unpack the tarball and run the pinned dsh-standards checker with
//      `--scope entry --entry-claim static --no-exec`;
//   3. record the checker's own conclusion, coverage, and not-checked items.
//
// A source checkout is deliberately not used: the published tarball is what
// users install, and a repository tree may omit the built lib/ directory that
// the package.json exports. A static ENTRY check on such a tree can report a
// false C-1.2 finding that the published package does not have.
//
// Outputs: data/entry-report.json and reports/entry-check/<date>.md. The
// report is non-blocking by construction:
//
//   - per-entry failures become `state: "not_run"` and never abort the run;
//   - the process exits 0 even when entries fail or the checker is missing;
//   - `entry_blocking` is the constant false, FLOW is the constant "not-run",
//     and BOOST is the constant "not-measured";
//   - `not_checked` is written next to the results in both outputs;
//   - the mapping/curation files are opened read-only and are never written.
//
// Run: node scripts/check-entry.mjs [--limit N] [--offset STEP] [--out FILE] [--md FILE]
// Test: node --test scripts/test-check-entry.mjs

import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { access, mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const REPORT_SCHEMA = 'dsh-entry-report/1';
export const CHECKER_PACKAGE = 'dsh-standards';
export const CHECKER_VERSION = '1.6.8';
export const REGISTRY = 'https://registry.npmjs.org';
export const MAX_ENTRIES = 50;
export const MAX_DURATION_MS = 20 * 60 * 1000;
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
// 1970-01-05 was a Monday; anchoring here makes the window advance on
// Monday 00:00 UTC, not on an arbitrary 7-day epoch block.
const WEEK_ANCHOR_MS = Date.UTC(1970, 0, 5);
export const CHECKER_ARGS = ['--scope', 'entry', '--entry-claim', 'static', '--no-exec'];
// The report must not read as a verdict or an endorsement. Keep the guard
// terms as escapes so the guard list itself never appears in a loose grep of
// the generated JSON/Markdown (or of this patch).
export const BANNED_TERMS = Object.freeze([
  '\u5408\u683c',
  '\u5b89\u5168',
  '\u8ba4\u8bc1',
  '\u6392\u540d',
]);
export const RESULT_STATES = Object.freeze(['checked', 'not_run', 'unavailable']);
export const REPORT_STATES = Object.freeze(['checked', 'partial', 'not_run']);

const PACK_TIMEOUT_MS = 60_000;
const CHECK_TIMEOUT_MS = 60_000;
const TAR_TIMEOUT_MS = 30_000;
const MAX_BUFFER = 32 * 1024 * 1024;
const PROTECTED_FILES = [
  'data/packages.json',
  'data/approved.json',
  'data/curated.json',
  'data/market-v2.json',
];
const SOURCE_FILES = ['data/packages.json', 'data/market-v2.json'];

const USAGE = `Usage: node scripts/check-entry.mjs [options]

  --limit N    maximum entries to check in this run (1..${MAX_ENTRIES}; default ${MAX_ENTRIES})
  --offset N   window step to check (default: one step per ISO week)
  --out FILE   report JSON path (default entry-check-out/entry-report.json)
  --md FILE    report Markdown path (default entry-check-out/entry-check.md)
  --root DIR   repository root to read (default: this checkout)
  --help       show this message

The checker binary comes from $ENTRY_CHECKER_BIN (default: dsh-standards).
The npm binary comes from $ENTRY_NPM_BIN (default: npm). Both must already be
installed; this script downloads nothing itself.`;

// --- small helpers ----------------------------------------------------------

const compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const oneLine = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();

const cell = (value) => oneLine(value).replace(/\|/g, '\\|');

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

function tail(text, tempDir) {
  let message = String(text ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(-3)
    .join(' | ');
  if (!message) message = 'no diagnostic output';
  if (tempDir) message = message.split(tempDir).join('<tmp>');
  return message.length > 300 ? `${message.slice(0, 297)}...` : message;
}

function describeFailure(result) {
  if (result.error?.code === 'ENOENT') return 'binary not found';
  if (result.error?.code === 'ETIMEDOUT' || result.signal) return 'timed out';
  if (typeof result.status === 'number') return `exit ${result.status}`;
  return 'did not run';
}

async function readJson(file) {
  const raw = await readFile(file, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(`${file}: ${error.message}`);
  }
}

async function writeAtomic(file, content) {
  await mkdir(dirname(file), { recursive: true });
  const temp = `${file}.${process.pid}.tmp`;
  try {
    await writeFile(temp, content, 'utf8');
    await rename(temp, file);
  } finally {
    await rm(temp, { force: true }).catch(() => {});
  }
}

// --- selection --------------------------------------------------------------

export function npmSpecOf(source) {
  if (typeof source !== 'string') return null;
  const match = /^npm:(.+)$/.exec(source.trim());
  if (!match) return null;
  const spec = match[1].trim();
  return spec || null;
}

export function splitNpmSpec(spec) {
  if (typeof spec !== 'string' || !spec) return { name: spec ?? '', version: null };
  if (spec.startsWith('@')) {
    const slash = spec.indexOf('/');
    if (slash === -1) return { name: spec, version: null };
    const at = spec.indexOf('@', slash);
    if (at === -1) return { name: spec, version: null };
    return { name: spec.slice(0, at), version: spec.slice(at + 1) || null };
  }
  const at = spec.indexOf('@');
  if (at <= 0) return { name: spec, version: null };
  return { name: spec.slice(0, at), version: spec.slice(at + 1) || null };
}

// The mapping is reviewed data, but it still arrives from files: keep option
// injection (leading dash) and whitespace out of argv, and reject anything
// that is not a plain registry name (optionally pinned) before npm runs.
export function isNpmSpecSafe(spec) {
  if (typeof spec !== 'string' || !spec || spec.length > 214) return false;
  if (spec.startsWith('-') || /[\s\u0000-\u001f\u007f]/.test(spec)) return false;
  return /^(?:@[^/@\s]+\/)?[^/@\s]+(?:@[^/\s]+)?$/.test(spec);
}

function packageEntries(doc) {
  const entries = doc?.entries;
  if (Array.isArray(entries)) return entries.map((entry) => [entry.full_name ?? entry.repo, entry]);
  if (entries && typeof entries === 'object') return Object.entries(entries);
  return [];
}

function marketEntries(doc) {
  const entries = doc?.entries;
  if (Array.isArray(entries)) return entries;
  if (entries && typeof entries === 'object') {
    return Object.entries(entries).map(([key, value]) =>
      value && typeof value === 'object' && !Array.isArray(value) ? { full_name: key, ...value } : value,
    );
  }
  return [];
}

export function collectNpmSubjects(packagesDoc, marketDoc) {
  const bySpec = new Map();

  const add = (repo, source, sourceFile) => {
    const spec = npmSpecOf(source);
    if (!spec) return;
    const { name, version } = splitNpmSpec(spec);
    if (!name) return;
    let subject = bySpec.get(spec);
    if (!subject) {
      subject = { name, spec, version, repositories: new Map(), sources: new Set() };
      bySpec.set(spec, subject);
    }
    if (typeof repo === 'string' && repo.trim()) {
      const key = repo.trim().toLowerCase();
      if (!subject.repositories.has(key)) subject.repositories.set(key, repo.trim());
    }
    subject.sources.add(sourceFile);
  };

  for (const [repo, entry] of packageEntries(packagesDoc)) {
    for (const pkg of Array.isArray(entry?.packages) ? entry.packages : []) {
      add(repo, pkg?.source, 'data/packages.json');
    }
  }
  for (const entry of marketEntries(marketDoc)) {
    const targets = Array.isArray(entry?.packages?.targets) ? entry.packages.targets : [];
    for (const target of targets) add(entry?.full_name, target?.source, 'data/market-v2.json');
  }

  return [...bySpec.values()]
    .map((subject) => ({
      name: subject.name,
      spec: subject.spec,
      version: subject.version,
      repositories: [...subject.repositories.values()].sort(compare),
      sources: [...subject.sources].sort(compare),
    }))
    .sort((a, b) => compare(a.name, b.name) || compare(a.spec, b.spec));
}

export function clampLimit(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return MAX_ENTRIES;
  return Math.min(MAX_ENTRIES, Math.max(1, Math.floor(parsed)));
}

export function selectSubjects(subjects, limit = MAX_ENTRIES, offsetStep = null, nowMs = Date.now()) {
  const capped = clampLimit(limit);
  const ordered = [...subjects].sort(
    (a, b) => compare(a.name, b.name) || compare(a.spec, b.spec),
  );
  const total = ordered.length;
  // Deterministic weekly rotation: a fixed name prefix would re-check the same
  // scoped packages forever, so the window advances one step per week (Monday
  // 00:00 UTC). `nowMs` is injectable so tests do not depend on the clock.
  const windows = Math.max(1, Math.ceil(total / capped));
  const rawStep =
    offsetStep === null || offsetStep === undefined
      ? Math.floor((nowMs - WEEK_ANCHOR_MS) / WEEK_MS)
      : offsetStep;
  const step = ((Math.trunc(rawStep) % windows) + windows) % windows;
  const offset = step * capped;
  const selected = ordered.slice(offset, offset + capped);
  return {
    total,
    limit: capped,
    selected,
    truncated: total > selected.length,
    offset,
    windows,
    step,
    window: step + 1,
  };
}

// --- checker ----------------------------------------------------------------

export function parseCheckerVersion(output) {
  const match = /dsh-standards\s+(\d+\.\d+\.\d+)/.exec(String(output ?? ''));
  return match ? match[1] : null;
}

// Neutralize the result state: `checked` only says a checker report was
// produced. The checker's own pass/warn/fail verdict is kept verbatim under
// `raw.status`, so the report never turns a raw status into our own verdict.
export function classifyCheckerResult(exitCode, report) {
  const level = report?.conclusion?.level;
  if (level === 'DSH-ENTRY unavailable') return 'unavailable';
  if (exitCode === 0 || exitCode === 1) return 'checked';
  return 'not_run';
}

function probeChecker(checkerBin, env = {}) {
  const result = spawnSync(checkerBin, ['--version'], {
    encoding: 'utf8',
    timeout: 30_000,
    maxBuffer: 1024 * 1024,
    env: { ...process.env, ...env },
  });
  if (result.error || result.status !== 0) {
    return {
      ok: false,
      reason: `checker-unavailable: ${describeFailure(result)}: ${tail(result.stderr || result.stdout)}`,
    };
  }
  const version = parseCheckerVersion(`${result.stdout}\n${result.stderr}`);
  if (!version) {
    return { ok: false, reason: `checker-version-unreadable: ${tail(result.stdout || result.stderr)}` };
  }
  if (version !== CHECKER_VERSION) {
    return {
      ok: false,
      reason: `checker-version-mismatch: observed ${version}, pinned ${CHECKER_VERSION}`,
    };
  }
  return { ok: true, version };
}

// --- per-entry work ---------------------------------------------------------

function baseResult(subject, state, reason, startedAt) {
  return {
    subject: subject.name,
    spec: subject.spec,
    repositories: subject.repositories,
    sources: subject.sources,
    state,
    checked_at: new Date().toISOString(),
    duration_ms: Date.now() - startedAt,
    ...(reason ? { reason } : {}),
  };
}

async function packNpm({ npmBin, spec, dir, env = {} }) {
  const npmrc = join(dir, '.npmrc');
  const globalNpmrc = join(dir, '.npmrc-global');
  await Promise.all([writeFile(npmrc, '', 'utf8'), writeFile(globalNpmrc, '', 'utf8')]);
  const args = [
    'pack',
    '--ignore-scripts',
    '--json',
    '--prefer-online',
    `--registry=${REGISTRY}`,
    `--userconfig=${npmrc}`,
    `--globalconfig=${globalNpmrc}`,
    '--pack-destination',
    dir,
    '--',
    spec,
  ];
  const result = spawnSync(npmBin, args, {
    cwd: dir,
    encoding: 'utf8',
    timeout: PACK_TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
    env: { ...process.env, ...env, npm_config_registry: REGISTRY, npm_config_update_notifier: 'false' },
  });
  if (result.error || result.status !== 0) {
    let parsed = null;
    try {
      parsed = JSON.parse(result.stdout);
    } catch {
      // npm prints a JSON error envelope for most failures; fall back to stderr.
    }
    const summary =
      parsed?.error?.summary ||
      tail(result.stderr || result.stdout, dir) ||
      describeFailure(result);
    return { ok: false, reason: `npm-pack-failed: ${oneLine(summary)}` };
  }

  let parsed;
  try {
    parsed = JSON.parse(result.stdout);
  } catch {
    return { ok: false, reason: `npm-pack-output-invalid: ${tail(result.stdout, dir)}` };
  }
  const meta = Array.isArray(parsed) ? parsed[0] : null;
  if (!meta || typeof meta.filename !== 'string') {
    return { ok: false, reason: `npm-pack-output-invalid: no filename in ${tail(result.stdout, dir)}` };
  }
  const tarball = resolve(dir, meta.filename);
  if (!tarball.startsWith(`${resolve(dir)}${sep}`)) {
    return { ok: false, reason: 'npm-pack-output-invalid: tarball escapes the pack directory' };
  }
  let info;
  try {
    info = await stat(tarball);
  } catch {
    return { ok: false, reason: `npm-pack-output-invalid: missing ${meta.filename}` };
  }
  const buffer = await readFile(tarball);
  return {
    ok: true,
    tarball,
    meta: {
      name: typeof meta.name === 'string' ? meta.name : null,
      version: typeof meta.version === 'string' ? meta.version : null,
      integrity: typeof meta.integrity === 'string' ? meta.integrity : null,
      shasum: typeof meta.shasum === 'string' ? meta.shasum : null,
      size: info.size,
      unpacked_size: Number.isFinite(meta.unpackedSize) ? meta.unpackedSize : null,
      entry_count: Number.isFinite(meta.entryCount) ? meta.entryCount : null,
      sha256: sha256(buffer),
    },
  };
}

async function extractTarball(tarball, dir) {
  const result = spawnSync('tar', ['-xzf', tarball, '-C', dir], {
    encoding: 'utf8',
    timeout: TAR_TIMEOUT_MS,
    maxBuffer: 4 * 1024 * 1024,
  });
  if (result.error || result.status !== 0) {
    return {
      ok: false,
      reason: `tarball-extract-failed: ${describeFailure(result)}: ${tail(result.stderr, dir)}`,
    };
  }
  const pkgDir = join(dir, 'package');
  try {
    await access(join(pkgDir, 'package.json'));
  } catch {
    return { ok: false, reason: 'tarball-extract-failed: npm tarball has no package/package.json' };
  }
  return { ok: true, pkgDir };
}

async function runChecker({ checkerBin, pkgDir, dir, env = {} }) {
  const out = join(dir, 'checker-report.json');
  const args = [pkgDir, ...CHECKER_ARGS, '--format', 'json', '--out', out];
  const result = spawnSync(checkerBin, args, {
    cwd: dir,
    encoding: 'utf8',
    timeout: CHECK_TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
    env: { ...process.env, ...env },
  });
  if (result.error || result.signal || result.status === null) {
    return {
      ok: false,
      reason: `checker-failed: ${describeFailure(result)}: ${tail(result.stderr || result.stdout, dir)}`,
    };
  }
  let report;
  try {
    report = JSON.parse(await readFile(out, 'utf8'));
  } catch {
    return {
      ok: false,
      reason: `checker-output-missing: ${describeFailure(result)}: ${tail(result.stderr || result.stdout, dir)}`,
    };
  }
  if (!report || typeof report !== 'object' || !report.conclusion || !Array.isArray(report.checks)) {
    return { ok: false, reason: 'checker-output-malformed: missing conclusion/checks' };
  }
  return { ok: true, report, exitCode: result.status };
}

const COVERAGE_KEYS = [
  'total',
  'mandatory',
  'checked',
  'pass',
  'warn',
  'advisory',
  'fail',
  'na',
  'notRun',
  'partial',
  'error',
];

function pickCoverage(report) {
  const coverage = report?.coverage;
  if (!coverage || typeof coverage !== 'object') return null;
  const picked = {};
  for (const key of COVERAGE_KEYS) {
    picked[key] = Number.isFinite(coverage[key]) ? coverage[key] : null;
  }
  return picked;
}

// Per-entry copy of the checker's own blocking-prerequisite summary. The
// top-level `entry_blocking: false` stays the report-level non-blocking flag;
// this object preserves `pass`, so a `raw.status: "fail"` entry still carries
// `entry_blocking.pass: false` instead of losing the finding in the neutral
// state.
function pickEntryBlocking(report) {
  const blocking = report?.coverage?.entryBlocking;
  if (!blocking || typeof blocking !== 'object') return null;
  return {
    pass: blocking.pass === true ? true : blocking.pass === false ? false : null,
    required: Number.isFinite(blocking.required) ? blocking.required : null,
    checked: Array.isArray(blocking.checked) ? blocking.checked : [],
    not_checked: Array.isArray(blocking.notChecked) ? blocking.notChecked : [],
    failed: Array.isArray(blocking.failed) ? blocking.failed : [],
  };
}

const pickCheck = (check) => ({
  id: check?.id ?? null,
  clause: check?.clause ?? null,
  result: check?.result ?? null,
  coverage: check?.coverage ?? null,
});

async function checkOne(subject, { npmBin, checkerBin, env }) {
  const startedAt = Date.now();
  if (!isNpmSpecSafe(subject.spec)) {
    return baseResult(subject, 'not_run', 'invalid-npm-spec: not a plain registry name', startedAt);
  }

  let dir = null;
  try {
    dir = await mkdtemp(join(tmpdir(), 'dsh-entry-check-'));
    const packed = await packNpm({ npmBin, spec: subject.spec, dir, env });
    if (!packed.ok) return baseResult(subject, 'not_run', packed.reason, startedAt);

    const extracted = await extractTarball(packed.tarball, dir);
    if (!extracted.ok) return baseResult(subject, 'not_run', extracted.reason, startedAt);

    const checked = await runChecker({ checkerBin, pkgDir: extracted.pkgDir, dir, env });
    if (!checked.ok) return baseResult(subject, 'not_run', checked.reason, startedAt);

    const report = checked.report;
    const state = classifyCheckerResult(checked.exitCode, report);
    const result = {
      subject: subject.name,
      spec: subject.spec,
      repositories: subject.repositories,
      sources: subject.sources,
      state,
      checked_at: new Date().toISOString(),
      duration_ms: Date.now() - startedAt,
      raw: {
        status: report.conclusion?.status ?? null,
        exit_code: checked.exitCode,
      },
      entry_blocking: pickEntryBlocking(report),
      npm: packed.meta,
      checker: {
        package: CHECKER_PACKAGE,
        version: CHECKER_VERSION,
        level: report.conclusion?.level ?? null,
        reason: report.conclusion?.reason ?? null,
        kind: report.subject?.kindEvaluated ?? report.subject?.kind ?? null,
        runtime_executed: report.runtimeChecks?.executed === true,
      },
      coverage: pickCoverage(report),
      checks: report.checks.map(pickCheck),
      checker_not_checked: Array.isArray(report.notChecked) ? report.notChecked.map(pickCheck) : [],
    };
    if (state === 'not_run') {
      const detail = oneLine(report.conclusion.reason || report.conclusion.level || 'checker did not complete');
      result.reason = `checker-incomplete: ${detail || 'no reason reported'}`;
    } else if (state === 'unavailable') {
      const detail = oneLine(report.conclusion.reason || report.conclusion.level || 'no attributed result');
      result.reason = `checker-unavailable: ${detail}`;
    }
    return result;
  } catch (error) {
    return baseResult(subject, 'not_run', `unexpected: ${tail(error.message, dir)}`, startedAt);
  } finally {
    if (dir) await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}

// --- report -----------------------------------------------------------------

export function buildReport({
  results,
  totalMapped,
  limit = MAX_ENTRIES,
  offset = 0,
  windows = null,
  now = new Date(),
  checkerInfo = { ok: true, version: CHECKER_VERSION },
}) {
  const capped = clampLimit(limit);
  const windowCount =
    Number.isInteger(windows) && windows > 0 ? windows : Math.max(1, Math.ceil(totalMapped / capped));
  const selected = results.length;
  if (!Number.isInteger(totalMapped) || totalMapped < selected) {
    throw new Error(`totalMapped (${totalMapped}) must be an integer >= results (${selected})`);
  }
  if (selected > capped) throw new Error(`results (${selected}) exceed the per-run limit (${capped})`);

  const checked = results.filter((result) => result.state === 'checked').length;
  const truncated = totalMapped > selected;
  const state =
    selected === 0 || checked === 0 ? 'not_run' : checked < selected || truncated ? 'partial' : 'checked';

  const notChecked = [];
  if (selected === 0) {
    notChecked.push({
      kind: 'selection',
      subject: '0 mapped npm specs',
      reason: 'no npm: source was found in data/packages.json or data/market-v2.json',
    });
  }
  for (const result of results) {
    if (result.state !== 'not_run' && result.state !== 'unavailable') continue;
    notChecked.push({
      kind: 'entry',
      subject: result.spec,
      reason: result.reason || `checker reported ${result.state}`,
    });
  }
  if (truncated) {
    notChecked.push({
      kind: 'limit',
      subject: `${totalMapped - selected} mapped npm specs`,
      reason:
        `per-run limit ${capped}; this run covers ${offset + 1}-${offset + selected} of ` +
        `${totalMapped} mapped specs (${windowCount} windows, weekly rotation)`,

    });
  }
  // The checker's own notChecked list includes both checks that never ran
  // (C-3, C-14) and checks with partial coverage (the L1-L3 static subset). Roll
  // them up once so the top-level not_checked field is complete, not just the
  // packaging failures above.
  const checkerGaps = new Map();
  for (const result of results) {
    for (const item of result.checker_not_checked ?? []) {
      const key = `${item.id ?? '?'}\u0000${item.coverage ?? '?'}`;
      const gap = checkerGaps.get(key) ?? {
        id: item.id ?? '?',
        clause: item.clause ?? '?',
        coverage: item.coverage ?? '?',
        count: 0,
      };
      gap.count += 1;
      checkerGaps.set(key, gap);
    }
  }
  for (const gap of [...checkerGaps.values()].sort(
    (a, b) => compare(a.id, b.id) || compare(a.coverage, b.coverage),
  )) {
    notChecked.push({
      kind: 'checker',
      subject: `${gap.id} (${gap.clause}) · ${gap.coverage}`,
      reason: `checker reported this gap for ${gap.count} entr${gap.count === 1 ? 'y' : 'ies'}`,
    });
  }
  notChecked.push(
    {
      kind: 'scope',
      subject: 'runtime execution (DSC-14 / L1-L3 / bundle G0-G3)',
      reason: '--no-exec with a static entry claim',
    },
    {
      kind: 'scope',
      subject: 'C-3 install-spec checks',
      reason: 'no --install-spec or --market-index supplied',
    },
    { kind: 'scope', subject: 'FLOW (J1-J8)', reason: 'not run by this report' },
    { kind: 'scope', subject: 'BOOST (LEV-1..8)', reason: 'not measured by this report' },
  );

  return {
    schema: REPORT_SCHEMA,
    state,
    checked_at: now.toISOString(),
    checker_version: CHECKER_VERSION,
    subject: {
      kind: 'npm-published-package',
      scope: 'entry',
      claim: 'static',
      registry: REGISTRY,
      checker: `${CHECKER_PACKAGE}@${CHECKER_VERSION}`,
      sources: SOURCE_FILES,
      selection: 'lexicographic by npm package name',
    },
    entry_blocking: false,
    not_checked: notChecked,
    flow: 'not-run',
    boost: 'not-measured',
    selection: {
      total_mapped: totalMapped,
      limit: capped,
      selected,
      truncated,
      offset,
      windows: windowCount,
      step: Math.floor(offset / capped),
      window: Math.floor(offset / capped) + 1,
      order: 'npm-package-name-asc',
      rotation: 'weekly',
    },
    checker: {
      package: CHECKER_PACKAGE,
      version: CHECKER_VERSION,
      available: checkerInfo?.ok === true,
      ...(checkerInfo?.ok ? {} : { reason: checkerInfo?.reason ?? 'checker unavailable' }),
    },
    results,
  };
}

export function validateReport(report) {
  const fail = (message) => {
    throw new Error(`invalid entry report: ${message}`);
  };
  if (report?.schema !== REPORT_SCHEMA) fail('schema');
  if (!REPORT_STATES.includes(report.state)) fail('state');
  if (typeof report.checked_at !== 'string' || Number.isNaN(Date.parse(report.checked_at))) {
    fail('checked_at');
  }
  if (report.checker_version !== CHECKER_VERSION) fail('checker_version');
  if (!report.subject || typeof report.subject !== 'object') fail('subject');
  if (report.entry_blocking !== false) fail('entry_blocking');
  if (!Array.isArray(report.not_checked)) fail('not_checked');
  if (report.flow !== 'not-run') fail('flow');
  if (report.boost !== 'not-measured') fail('boost');
  if (!Array.isArray(report.results)) fail('results');
  const selection = report.selection;
  if (!selection || typeof selection !== 'object') fail('selection');
  if (selection.selected !== report.results.length) fail('selection.selected');
  if (!Number.isInteger(selection.total_mapped) || selection.total_mapped < report.results.length) {
    fail('selection.total_mapped');
  }
  if (typeof selection.truncated !== 'boolean') fail('selection.truncated');
  if (!Number.isInteger(selection.offset) || selection.offset < 0) fail('selection.offset');
  if (!Number.isInteger(selection.windows) || selection.windows < 1) fail('selection.windows');
  if (!Number.isInteger(selection.step) || selection.step < 0) fail('selection.step');
  if (!Number.isInteger(selection.window) || selection.window < 1) fail('selection.window');
  if (selection.offset + selection.selected > selection.total_mapped) fail('selection.bounds');
  for (const [index, result] of report.results.entries()) {
    if (typeof result?.subject !== 'string' || !result.subject) fail(`results[${index}].subject`);
    if (typeof result.spec !== 'string' || !result.spec) fail(`results[${index}].spec`);
    if (!RESULT_STATES.includes(result.state)) fail(`results[${index}].state`);
    if (!Array.isArray(result.repositories)) fail(`results[${index}].repositories`);
    if (
      (result.state === 'not_run' || result.state === 'unavailable') &&
      typeof result.reason !== 'string'
    ) {
      fail(`results[${index}].reason`);
    }
    if (result.state !== 'checked') continue;
    if (!result.raw || typeof result.raw !== 'object') fail(`results[${index}].raw`);
    if (!Number.isInteger(result.raw.exit_code)) fail(`results[${index}].raw.exit_code`);
    if (!result.entry_blocking || typeof result.entry_blocking !== 'object') {
      fail(`results[${index}].entry_blocking`);
    }
    if (typeof result.entry_blocking.pass !== 'boolean') {
      fail(`results[${index}].entry_blocking.pass`);
    }
    if (!result.checker || typeof result.checker !== 'object') fail(`results[${index}].checker`);
    if (!result.coverage || typeof result.coverage !== 'object') fail(`results[${index}].coverage`);
  }
  return report;
}

export function assertNoBannedTerms(text, label = 'report') {
  for (const term of BANNED_TERMS) {
    if (String(text).includes(term)) {
      throw new Error(`${label} contains a disallowed claim term`);
    }
  }
  return text;
}

export function renderMarkdown(report) {
  const lines = [];
  const date = report.checked_at.slice(0, 10);
  const checked = report.results.filter((result) => result.state === 'checked').length;

  lines.push(`# Static ENTRY report — ${date}`, '');
  lines.push(
    'Read-only, non-blocking report for npm-published entries mapped in',
    '`data/packages.json` and `data/market-v2.json`. Each row is the pinned',
    "checker's result on the unpacked `npm pack --ignore-scripts` tarball; no",
    'source checkout is used. This page does not gate PRs and does not change',
    'the mapped data.',
    '',
  );
  lines.push('| field | value |', '| --- | --- |');
  lines.push(`| state | \`${report.state}\` |`);
  lines.push(`| checked_at | \`${report.checked_at}\` |`);
  lines.push(
    `| checker | \`${CHECKER_PACKAGE}@${CHECKER_VERSION}\` (\`--scope entry --entry-claim static --no-exec\`) |`,
  );
  lines.push(`| registry | \`${REGISTRY}\` |`);
  lines.push('| entry_blocking | `false` |');
  lines.push(`| FLOW | \`${report.flow}\` |`);
  lines.push(`| BOOST | \`${report.boost}\` |`);
  lines.push(
    `| selection | ${report.selection.selected} of ${report.selection.total_mapped} mapped npm specs ` +
      `(limit ${report.selection.limit}, window ${report.selection.window}/${report.selection.windows}, ` +
      `entries ${report.selection.offset + 1}-${report.selection.offset + report.selection.selected}, ` +
      'weekly rotation) |',
  );
  lines.push(`| entries with a checker result | ${checked} |`, '');

  lines.push('## Not checked', '');
  for (const item of report.not_checked) {
    lines.push(`- **${item.kind}** · ${cell(item.subject)} — ${cell(item.reason)}`);
  }
  lines.push('');

  lines.push('## Results', '');
  // The summary stays neutral: it reports whether a checker result exists, not
  // the checker's own verdict. `raw.status` remains in the JSON artifact only.
  lines.push(
    '| package | resolved | state | blocking pass | checks reported | duration |',
    '| --- | --- | --- | --- | --- | --- |',
  );
  for (const result of report.results) {
    const blockingPass = typeof result.entry_blocking?.pass === 'boolean'
      ? String(result.entry_blocking.pass)
      : '—';
    const resolved = result.npm?.version ?? '—';
    const coverage =
      result.coverage && Number.isFinite(result.coverage.checked) && Number.isFinite(result.coverage.total)
        ? `${result.coverage.checked}/${result.coverage.total}`
        : '—';
    const duration = Number.isFinite(result.duration_ms)
      ? `${(result.duration_ms / 1000).toFixed(1)}s`
      : '—';
    lines.push(
      `| \`${cell(result.spec)}\` | ${cell(resolved)} | \`${result.state}\` | ${blockingPass} | ${coverage} | ${duration} |`,
    );
  }
  lines.push('');

  const gaps = new Map();
  for (const result of report.results) {
    for (const item of result.checker_not_checked ?? []) {
      const key = `${item.id ?? '?'} (${item.clause ?? '?'}) · ${item.coverage ?? '?'}`;
      gaps.set(key, (gaps.get(key) ?? 0) + 1);
    }
  }
  lines.push('## Checker-reported not checked', '');
  if (gaps.size === 0) {
    lines.push('No per-check gaps were reported by the checker.');
  } else {
    lines.push('| check | entries |', '| --- | --- |');
    for (const key of [...gaps.keys()].sort(compare)) {
      lines.push(`| ${cell(key)} | ${gaps.get(key)} |`);
    }
  }
  lines.push('');

  lines.push('## Notes', '');
  lines.push(
    '- `state` is neutral: `checked` only means a checker report was produced.',
    "  The checker's own verdict is kept in the JSON artifact under `raw.status`",
    '  (`pass` / `warn` / `fail` / `incomplete`); this Markdown summary exposes',
    '  only the neutral `state` and `blocking pass` (`entry_blocking.pass`).',
    '- `not_run` and `unavailable` mean no checker result was produced; both are',
    '  recorded and neither blocks this workflow or a pull request.',
    '- The top-level `entry_blocking` is the constant false: this page never',
    '  gates a workflow or a pull request.',
    "- `blocking pass` is the checker's own `coverage.entryBlocking.pass`.",
    '  With a static entry claim and no install spec, C-3.1/3.2/3.5 are not',
    '  evaluated, so it is normally false even when `raw.status` is `warn`; it',
    '  is not a verdict on the plugin.',
    '- Only published npm tarballs are checked. A source checkout may omit the',
    '  built `lib/` directory and cause a false ENTRY finding.',
    '- Top-level `state` describes completeness: `checked` only when every',
    '  mapped npm spec was selected and produced a checker result; `partial`',
    '  when the list is truncated or some entries did not run.',
    '- FLOW and BOOST data are never collected here; both fields above are',
    '  constants until a separate evidence run exists.',
    '',
  );
  lines.push('Generated by `scripts/check-entry.mjs`.', '');
  return lines.join('\n');
}

// --- run --------------------------------------------------------------------

function assertWritablePath(rootDir, file) {
  const relativePath = relative(resolve(rootDir), resolve(file)).split(sep).join('/');
  if (relativePath.startsWith('..') || relativePath === '') {
    throw new Error(`output path must be inside the repository root: ${relativePath}`);
  }
  if (PROTECTED_FILES.includes(relativePath)) {
    throw new Error(`refusing to overwrite protected data file: ${relativePath}`);
  }
}

export async function runEntryReport({
  rootDir = root,
  limit = MAX_ENTRIES,
  offsetStep = null,
  outPath = null,
  markdownPath = null,
  now = new Date(),
  npmBin = process.env.ENTRY_NPM_BIN || 'npm',
  checkerBin = process.env.ENTRY_CHECKER_BIN || CHECKER_PACKAGE,
  env = {},
  log = console.log,
} = {}) {
  const capped = clampLimit(limit);
  const [packagesDoc, marketDoc] = await Promise.all([
    readJson(resolve(rootDir, 'data/packages.json')),
    readJson(resolve(rootDir, 'data/market-v2.json')),
  ]);

  const mapped = collectNpmSubjects(packagesDoc, marketDoc);
  const selection = selectSubjects(mapped, capped, offsetStep);
  const resolvedOut = outPath ?? resolve(rootDir, 'entry-check-out/entry-report.json');
  const resolvedMarkdown = markdownPath ?? resolve(rootDir, 'entry-check-out/entry-check.md');
  assertWritablePath(rootDir, resolvedOut);
  assertWritablePath(rootDir, resolvedMarkdown);

  const checkerInfo = probeChecker(checkerBin, env);
  if (!checkerInfo.ok) log(`Checker unavailable: ${checkerInfo.reason}`);

  const results = [];
  const startedAt = Date.now();
  for (const [index, subject] of selection.selected.entries()) {
    const position = `${index + 1}/${selection.selected.length}`;
    if (checkerInfo.ok && Date.now() - startedAt > MAX_DURATION_MS) {
      for (const rest of selection.selected.slice(index)) {
        results.push(
          baseResult(rest, 'not_run', 'run-budget-exhausted: 20-minute soft limit reached', Date.now()),
        );
      }
      log(`Run budget exhausted at ${position}; remaining entries recorded as not_run.`);
      break;
    }
    log(`[${position}] ${subject.spec}`);
    if (!checkerInfo.ok) {
      results.push(baseResult(subject, 'not_run', checkerInfo.reason, Date.now()));
      continue;
    }
    results.push(await checkOne(subject, { npmBin, checkerBin, env }));
  }

  const report = buildReport({
    results,
    totalMapped: selection.total,
    limit: selection.limit,
    offset: selection.offset,
    windows: selection.windows,
    now,
    checkerInfo,
  });
  validateReport(report);

  const json = `${JSON.stringify(report, null, 2)}\n`;
  const markdown = `${renderMarkdown(report)}\n`;
  assertNoBannedTerms(json, 'entry report JSON');
  assertNoBannedTerms(markdown, 'entry report Markdown');
  await writeAtomic(resolvedOut, json);
  await writeAtomic(resolvedMarkdown, markdown);

  const checkedCount = results.filter((result) => result.state === 'checked').length;
  log(
    `Wrote ${relative(resolve(rootDir), resolvedOut)} and ${relative(resolve(rootDir), resolvedMarkdown)} ` +
      `— state ${report.state}, ${checkedCount}/${results.length} entries reported, ` +
      `${report.not_checked.length} not-checked note(s).`,
  );
  return { report, outPath: resolvedOut, markdownPath: resolvedMarkdown };
}

export function parseArgs(argv) {
  const options = {
    rootDir: root,
    limit: MAX_ENTRIES,
    offsetStep: null,
    outPath: null,
    markdownPath: null,
    help: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    const value = () => {
      index += 1;
      if (index >= argv.length) throw new Error(`${argument} needs a value`);
      return argv[index];
    };
    if (argument === '--limit') options.limit = clampLimit(value());
    else if (argument === '--offset') {
      const parsed = Number(value());
      if (!Number.isInteger(parsed)) throw new Error('--offset needs an integer');
      options.offsetStep = parsed;
    }
    else if (argument === '--out') options.outPath = resolve(value());
    else if (argument === '--md') options.markdownPath = resolve(value());
    else if (argument === '--root') options.rootDir = resolve(value());
    else if (argument === '--help' || argument === '-h') options.help = true;
    else throw new Error(`unknown option: ${argument}`);
  }
  return options;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  // Report-only contract: even a mapping/read failure must not turn this
  // workflow red. The error stays on stderr and no partial report is written.
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) {
      console.log(USAGE);
    } else {
      await runEntryReport(options);
    }
  } catch (error) {
    console.error(`check-entry: ${error.message}`);
  }
  process.exitCode = 0;
}
