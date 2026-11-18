#!/usr/bin/env node

// Merges reviewed mapping decisions into data/packages.json and
// data/catalog-mapping-skips.json.
//
// `scripts/catalog-mappings.mjs` auto-applies only what it can prove; the
// exceptions are reviewed (by a human or the daily AI pass) and returned as
// JSON files with this shape:
//
//   [{ "slug": "owner/repo", "verdict": "command", "packages": [
//        { "profile": "web", "source": "npm:xxx", "command": "dsh plugin --profile web add xxx", "install": "xxx" } ],
//      "reason": "…", "evidence": "README install section" },
//    { "slug": "owner/other", "verdict": "manual",
//      "manual_instructions": "README only documents a local tarball install…", "reason": "…" },
//    { "slug": "owner/skill", "verdict": "skip", "reason": "a skill bundle, not a plugin with an install target" }]
//
// Validation before anything is written: the slug exists in the current
// snapshot, is not excluded, is not already mapped, the command is a concrete
// paste-safe `dsh plugin … add` invocation that carries its source, `install`
// equals installRef(source), and every npm target is re-checked against the
// registry (existence + repository ownership). A skip decision has no install
// target by definition and is recorded so the daily queue stops re-asking.
//
// Usage: node scripts/apply-mapping-review.mjs --from Temp/mapping-review/out
//        [--no-verify] [--dry-run]

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { npmRepositorySlug } from './catalog-mapping-rules.mjs';
import { installRef, isPasteSafeCommand } from './readme-install.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const has = (flag) => process.argv.includes(flag);
const valueOf = (flag, fallback) => {
  const index = process.argv.indexOf(flag);
  return index >= 0 && process.argv[index + 1] !== undefined ? process.argv[index + 1] : fallback;
};

const FROM = valueOf('--from', '');
const VERIFY = !has('--no-verify');
const DRY = has('--dry-run');
const TODAY = new Date().toISOString().slice(0, 10);
const SLUG = /^[a-z0-9._-]+\/[a-z0-9._-]+$/;
const SOURCE = /^(npm|github|url):(.+)$/;

if (FROM === '') {
  console.error('usage: node scripts/apply-mapping-review.mjs --from <dir-with-reviewed-json> [--no-verify] [--dry-run]');
  process.exit(1);
}

const [packages, snapshot, curated, skipRaw] = await Promise.all([
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/repositories.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/curated.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/catalog-mapping-skips.json'), 'utf8').then(JSON.parse).catch(() => ({ schema_version: 1, entries: {} })),
]);
const snapshotNames = new Set((snapshot.repositories || []).map((repo) => String(repo.full_name).toLowerCase()));
const excluded = new Set(Object.keys(curated.excluded_repos || {}).map((key) => key.toLowerCase()));
const blocked = new Set([
  ...Object.keys(curated.leaderboard_exclusions || {}),
  ...Object.keys(curated.market_exclusions || {}),
].map((key) => key.toLowerCase()));

const files = (await readdir(resolve(root, FROM))).filter((name) => name.endsWith('.json')).sort();
if (files.length === 0) {
  console.error(`no reviewed JSON files under ${FROM}`);
  process.exit(1);
}
const decisions = [];
for (const file of files) {
  const parsed = JSON.parse(await readFile(resolve(root, FROM, file), 'utf8'));
  const list = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.decisions) ? parsed.decisions : null;
  if (list === null) {
    console.error(`${file}: expected an array or { decisions: [...] }`);
    process.exit(1);
  }
  for (const decision of list) decisions.push({ ...decision, file });
}

const npmCache = new Map();
async function checkNpm(spec, slug) {
  if (!VERIFY) return { ok: true };
  const cacheKey = `${slug} ${spec}`;
  if (npmCache.has(cacheKey)) return npmCache.get(cacheKey);
  const at = spec.lastIndexOf('@');
  const name = at > 0 ? spec.slice(0, at) : spec;
  const pin = at > 0 ? spec.slice(at + 1) : null;
  const encoded = name.startsWith('@') ? `/@${encodeURIComponent(name.slice(1))}` : `/${encodeURIComponent(name)}`;
  let result;
  try {
    const res = await fetch(`https://registry.npmjs.org${encoded}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
    });
    if (res.status === 404) result = { ok: false, reason: `npm package ${name} does not exist` };
    else if (!res.ok) result = { ok: false, reason: `npm registry HTTP ${res.status} for ${name}` };
    else {
      const doc = await res.json();
      if (pin !== null) {
        const resolved = /^\d+\.\d+\.\d+/.test(pin) ? doc.versions?.[pin] : doc['dist-tags']?.[pin];
        if (!resolved) result = { ok: false, reason: `npm ${spec} pins a ${/^\d/.test(pin) ? 'version' : 'dist-tag'} that was never published` };
      }
      if (result === undefined) {
        const repo = npmRepositorySlug(doc);
        result = repo === slug ? { ok: true } : { ok: false, reason: `npm ${name} belongs to ${repo || 'no declared repository'}` };
      }
    }
  } catch (error) {
    result = { ok: false, reason: `npm lookup for ${name} failed (${error.message})` };
  }
  npmCache.set(cacheKey, result);
  return result;
}

// Warm every registry check in parallel before the sequential validation pass,
// so a few hundred reviewed targets do not serialize into minutes.
const npmWarm = new Map();
for (const decision of decisions) {
  const slug = typeof decision?.slug === 'string' ? decision.slug.trim().toLowerCase() : '';
  for (const pkg of Array.isArray(decision?.packages) ? decision.packages : []) {
    if (typeof pkg?.source === 'string' && pkg.source.startsWith('npm:')) npmWarm.set(`${slug} ${pkg.source.slice(4)}`, { spec: pkg.source.slice(4), slug });
  }
}
await Promise.all([...npmWarm.values()].map(({ spec, slug }) => checkNpm(spec, slug)));

const errors = [];
const accepted = [];
const skippedDecisions = [];
for (const decision of decisions) {
  const where = decision?.file ?? 'decision';
  const slug = typeof decision?.slug === 'string' ? decision.slug.trim().toLowerCase() : '';
  if (!SLUG.test(slug)) {
    errors.push(`${where}: invalid slug ${JSON.stringify(decision?.slug)}`);
    continue;
  }
  if (!snapshotNames.has(slug)) errors.push(`${where}: ${slug} is not in the current snapshot`);
  if (excluded.has(slug)) errors.push(`${where}: ${slug} is in curated.json excluded_repos`);
  if (blocked.has(slug)) errors.push(`${where}: ${slug} is a leaderboard/market exclusion and is not in the catalog`);
  if (packages.entries[slug] !== undefined) {
    errors.push(`${where}: ${slug} is already mapped — review decisions never overwrite a mapping`);
    continue;
  }
  const verdict = decision.verdict;
  if (verdict === 'skip') {
    const reason = typeof decision.reason === 'string' ? decision.reason.trim() : '';
    if (reason === '') errors.push(`${where}: ${slug} skip needs a reason`);
    else skippedDecisions.push({ slug, reason });
    continue;
  }
  if (verdict === 'manual') {
    const manual = typeof decision.manual_instructions === 'string' ? decision.manual_instructions.trim() : '';
    if (manual === '') errors.push(`${where}: ${slug} manual needs manual_instructions`);
    else accepted.push({ slug, record: { packages: [], status: 'readme-verified', verified_date: TODAY, verified_via: 'review', verified_by: 'review', install_mode: 'manual', manual_instructions: manual } });
    continue;
  }
  if (verdict !== 'command') {
    errors.push(`${where}: ${slug} verdict must be command / manual / skip, got ${JSON.stringify(verdict)}`);
    continue;
  }
  const list = Array.isArray(decision.packages) ? decision.packages : [];
  if (list.length === 0) {
    errors.push(`${where}: ${slug} command needs a non-empty packages array`);
    continue;
  }
  const pkgs = [];
  let valid = true;
  for (const [index, pkg] of list.entries()) {
    const at = `${where}: ${slug} packages[${index}]`;
    const source = typeof pkg?.source === 'string' ? pkg.source.trim() : '';
    const command = typeof pkg?.command === 'string' ? pkg.command.trim() : '';
    const match = SOURCE.exec(source);
    if (!match) { errors.push(`${at}: source must look like npm:/github:/url:…`); valid = false; continue; }
    if (command === '' || /[<>]/.test(command) || !isPasteSafeCommand(command) || !command.includes('plugin')) {
      errors.push(`${at}: command must be one concrete paste-safe \`dsh plugin … add\` invocation`);
      valid = false;
      continue;
    }
    if (!command.includes(match[2])) {
      errors.push(`${at}: command does not carry its ${match[1]}: source (${match[2]})`);
      valid = false;
      continue;
    }
    const install = installRef(source);
    if (typeof pkg?.install === 'string' && pkg.install !== install) {
      errors.push(`${at}: install must be ${JSON.stringify(install)}, got ${JSON.stringify(pkg.install)}`);
      valid = false;
      continue;
    }
    if (match[1] === 'github') {
      const target = match[2].split('#')[0].toLowerCase();
      if (!snapshotNames.has(target)) errors.push(`${at}: github source ${target} is not in the snapshot`);
    }
    if (match[1] === 'npm') {
      const check = await checkNpm(match[2], slug);
      if (!check.ok) { errors.push(`${at}: ${check.reason}`); valid = false; continue; }
    }
    pkgs.push({ profile: typeof pkg.profile === 'string' && pkg.profile.trim() !== '' ? pkg.profile.trim() : 'web', source, command, install });
  }
  if (!valid || pkgs.length === 0) continue;
  accepted.push({ slug, record: { packages: pkgs, status: 'readme-verified', verified_date: TODAY, verified_via: 'review', verified_by: 'review' } });
}

if (errors.length > 0) {
  console.error(`${errors.length} problem(s) in the reviewed decisions:\n`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(`reviewed decisions: ${decisions.length} → ${accepted.length} mappings, ${skippedDecisions.length} skips`);
for (const { slug, record } of accepted) {
  console.log(`  + ${slug}: ${record.install_mode === 'manual' ? 'manual' : record.packages.map((pkg) => pkg.source).join(', ')}`);
}
for (const { slug, reason } of skippedDecisions) console.log(`  - ${slug}: skip (${reason})`);

if (DRY) {
  console.log('\ndry run — nothing written');
  process.exit(0);
}

if (accepted.length > 0) {
  for (const { slug, record } of accepted) {
    if (packages.entries[slug] === undefined) packages.entries[slug] = record;
  }
  packages.updated_at = TODAY;
  await writeFile(resolve(root, 'data/packages.json'), `${JSON.stringify(packages, null, 2)}\n`);
  console.log(`wrote data/packages.json — ${Object.keys(packages.entries).length} entries`);
}
if (skippedDecisions.length > 0) {
  const skips = skipRaw?.schema_version === 1 ? skipRaw : { schema_version: 1, entries: {} };
  for (const { slug, reason } of skippedDecisions) skips.entries[slug] = { reason, date: TODAY };
  skips.updated_at = TODAY;
  await writeFile(resolve(root, 'data/catalog-mapping-skips.json'), `${JSON.stringify(skips, null, 2)}\n`);
  console.log(`wrote data/catalog-mapping-skips.json — ${Object.keys(skips.entries).length} skipped repositories`);
}
