#!/usr/bin/env node

// Generates data/market-v2.json — schema v2 of the downstream market feed.
// v1 (data/market.json) stays the untouched wire contract for the current
// dsh-desktop-safe-market consumer; v2 is its strict superset: the same
// entries, in the same published order, where every entry covered by the
// hand-maintained install mapping (data/packages.json) additionally carries
// a `packages` block — the exact thing to paste into the official
// "插件 → 添加插件" box, plus requirements, task tags, and the verification
// record. Consumers can treat v2 exactly like v1 and simply ignore the
// extra field, or render "复制安装内容" from it.
//
// The file is a pure projection of two already-validated sources: the
// published v1 feed and packages.json. No filtering, dealing, or trimming
// happens here — if the joined payload would not fit the byte cap, the run
// aborts rather than publishing a prefix: v1's trim path is safe because it
// keeps the deal's structural invariants, but a v2 prefix would silently
// disagree with the v1 feed it claims to extend. Fix the mapping instead.
//
// Same-source idempotency as market.mjs: identical inputs re-produce the
// previous file bit for bit (generated_at included), so re-runs triggered
// by upstream workflows that changed nothing stay no-op commits.

import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const V2_SCHEMA_VERSION = 2;
export const V1_SCHEMA_VERSION = 1;
export const MAX_FILE_BYTES = 1024 * 1024; // v2 is a superset of v1's 500 KB feed — generous headroom for the mapping.

// Editorial data is hand-maintained, so oversize text is a data bug to fix,
// never something to truncate: a cut-off install command or requirement is
// worse than a failed build. Prose fields are whitespace-folded like the v1
// wire pass; commands are only trimmed — folding is safe for prose but must
// never touch the string a user will paste.
export const TEXT_LIMITS = {
  profile: 30,
  source: 200,
  command: 400,
  note: 400,
  manual_instructions: 400,
  requirement: 200,
  task: 40,
};

const SOURCE_KIND = /^(npm|github|url|link):(.+)$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const STATUSES = new Set(['readme-verified', 'install-verified', 'repo-fallback', 'unverified']);
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;

const fold = (value) => String(value).replace(/\s+/g, ' ').trim();
const codePoints = (value) => [...value].length;

function prose(value, limit, where) {
  const folded = fold(value ?? '');
  if (folded === '') throw new Error(`${where} must not be empty`);
  if (codePoints(folded) > limit) {
    throw new Error(`${where} is ${codePoints(folded)} code points, cap is ${limit} — fix data/packages.json instead of truncating`);
  }
  return folded;
}

function commandText(value, where) {
  const trimmed = String(value ?? '').trim();
  if (trimmed === '') throw new Error(`${where} must not be empty`);
  if (CONTROL_CHARS.test(trimmed) || trimmed.includes('\n')) {
    throw new Error(`${where} must be a single-line command without control characters`);
  }
  if (/[<>]/.test(trimmed)) {
    throw new Error(`${where} contains placeholder syntax (<…>) — publish a concrete command or use install_mode "manual"`);
  }
  if (codePoints(trimmed) > TEXT_LIMITS.command) {
    throw new Error(`${where} is ${codePoints(trimmed)} code points, cap is ${TEXT_LIMITS.command} — fix data/packages.json instead of truncating`);
  }
  return trimmed;
}

function stringList(values, limit, where) {
  if (values === undefined) return [];
  if (!Array.isArray(values)) throw new Error(`${where} must be an array of strings`);
  return values.map((item, index) => prose(item, limit, `${where}[${index}]`));
}

// The wire shape of one entry's install mapping: { mode, targets | manual_
// instructions, requirements?, tasks?, note?, verification }. Empty optional
// arrays and notes are omitted to keep the payload lean; key order is fixed
// by construction so regeneration is byte-stable.
export function packagesBlockFor(record) {
  if (record === null || typeof record !== 'object' || Array.isArray(record)) {
    throw new Error('mapping record must be an object');
  }
  const mode = record.install_mode ?? 'command';
  if (mode !== 'command' && mode !== 'manual') {
    throw new Error(`install_mode must be "command" or "manual", got ${JSON.stringify(mode)}`);
  }

  const block = {};
  block.mode = mode;
  if (mode === 'manual') {
    block.manual_instructions = prose(record.manual_instructions, TEXT_LIMITS.manual_instructions, 'manual_instructions');
  } else {
    if (!Array.isArray(record.packages) || record.packages.length === 0) {
      throw new Error('command install needs a non-empty packages array');
    }
    block.targets = record.packages.map((pkg, index) => {
      const where = `packages[${index}]`;
      const source = fold(pkg?.source ?? '');
      if (!SOURCE_KIND.test(source)) {
        throw new Error(`${where}.source must look like npm:… / github:… / url:… / link:…`);
      }
      const target = {
        profile: prose(pkg.profile, TEXT_LIMITS.profile, `${where}.profile`),
        install: prose(pkg.install, TEXT_LIMITS.source, `${where}.install`),
        source: prose(source, TEXT_LIMITS.source, `${where}.source`),
        command: commandText(pkg.command, `${where}.command`),
      };
      // The paste-ready name and the terminal command must agree. For github
      // sources the box takes the repo URL while the command keeps the CLI
      // ref (github:owner/repo[#ref]) — agreeing on the slug is enough.
      const githubSlug = source.startsWith('github:') ? source.slice(7).split('#')[0] : null;
      if (!target.command.includes(target.install) && !(githubSlug && target.command.includes(githubSlug))) {
        throw new Error(`${where}.command must reference install (${target.install}) — the paste-ready name and the terminal command must agree`);
      }
      const note = fold(pkg.note ?? '');
      if (note !== '') target.note = prose(note, TEXT_LIMITS.note, `${where}.note`);
      return target;
    });
  }

  const requirements = stringList(record.requirements, TEXT_LIMITS.requirement, 'requirements');
  if (requirements.length > 0) block.requirements = requirements;
  const tasks = stringList(record.tasks, TEXT_LIMITS.task, 'tasks');
  if (tasks.length > 0) block.tasks = tasks;
  const note = fold(record.note ?? '');
  if (note !== '') block.note = prose(note, TEXT_LIMITS.note, 'note');

  const status = record.status;
  if (!STATUSES.has(status)) {
    throw new Error(`status must be one of ${[...STATUSES].join(' / ')}, got ${JSON.stringify(status)}`);
  }
  const verification = { status };
  if (status !== 'unverified') {
    if (!DATE_PATTERN.test(record.verified_date ?? '')) {
      throw new Error('verified_date must be YYYY-MM-DD when status is not "unverified"');
    }
    verification.date = record.verified_date;
    verification.via = prose(record.verified_via, 100, 'verified_via');
  }
  block.verification = verification;
  return block;
}

// The full generation decision. Returns one of:
//   { outcome: 'written', envelope, mappedCount, warnings }
//   { outcome: 'unchanged', envelope, mappedCount, warnings }
//   { outcome: 'aborted', reason, errors, warnings }
export function buildMarketV2({ market, packages, previous = null, now = new Date(), maxBytes = MAX_FILE_BYTES }) {
  const warnings = [];
  if (market === null || typeof market !== 'object' || market.schema_version !== V1_SCHEMA_VERSION) {
    return { outcome: 'aborted', reason: `the base feed must be a schema_version ${V1_SCHEMA_VERSION} market.json, got schema_version ${JSON.stringify(market?.schema_version)}`, warnings };
  }
  if (!Array.isArray(market.entries) || market.entries.length === 0) {
    return { outcome: 'aborted', reason: 'the base feed holds no entries — refusing to publish an empty v2 feed', warnings };
  }
  const mapping = packages?.entries;
  if (mapping === null || typeof mapping !== 'object' || Array.isArray(mapping)) {
    return { outcome: 'aborted', reason: 'packages.json must carry an entries object', warnings };
  }

  const inFeed = new Set(market.entries.map((entry) => String(entry.full_name).toLowerCase()));
  const errors = [];
  const blockBySlug = new Map();
  for (const [slug, record] of Object.entries(mapping)) {
    if (!inFeed.has(slug.toLowerCase())) {
      warnings.push(`${slug}: mapping recorded, but the repo is not in the published feed (catalog-only / filtered) — available via data/packages.json, not via the feed`);
      continue;
    }
    try {
      blockBySlug.set(slug.toLowerCase(), packagesBlockFor(record));
    } catch (error) {
      errors.push(`${slug}: ${error.message}`);
    }
  }
  if (errors.length > 0) {
    return { outcome: 'aborted', reason: `${errors.length} mapping record(s) failed the wire transform — fix data/packages.json`, errors, warnings };
  }

  const entries = market.entries.map((entry) => {
    const block = blockBySlug.get(String(entry.full_name).toLowerCase());
    return block === undefined ? { ...entry } : { ...entry, packages: block };
  });
  const mappedCount = blockBySlug.size;
  if (mappedCount === 0) {
    warnings.push('no mapped entry is currently in the feed — the v2 payload equals v1 plus an empty mapping');
  }

  const envelopeWith = (list) => ({
    schema_version: V2_SCHEMA_VERSION,
    generated_at: generatedAt(previous, now),
    source_fetched_at: market.source_fetched_at,
    source_repo_count: market.source_repo_count,
    pool_count: market.pool_count,
    packages_mapped_count: mappedCount,
    entries: list,
  });

  // generated_at must be monotonically non-decreasing, like the v1 rule:
  // clock skew between machines must never move it backwards.
  const bytes = (list) => Buffer.byteLength(`${JSON.stringify(envelopeWith(list))}\n`, 'utf8');
  if (bytes(entries) > maxBytes) {
    return {
      outcome: 'aborted',
      reason: `the joined v2 payload is ${bytes(entries)} bytes, over the ${maxBytes}-byte cap — trim the mapping, not the feed (a v2 prefix would silently disagree with the v1 feed it extends)`,
      warnings,
    };
  }

  // Same base feed + same mapping: keep the previous file bit for bit (its
  // generated_at included) so re-runs stay no-op commits.
  if (
    previous &&
    previous.schema_version === V2_SCHEMA_VERSION &&
    previous.source_fetched_at === market.source_fetched_at &&
    previous.source_repo_count === market.source_repo_count &&
    previous.pool_count === market.pool_count &&
    previous.packages_mapped_count === mappedCount &&
    JSON.stringify(previous.entries) === JSON.stringify(entries)
  ) {
    return { outcome: 'unchanged', envelope: previous, mappedCount, warnings };
  }

  return { outcome: 'written', envelope: envelopeWith(entries), mappedCount, warnings };
}

function generatedAt(previous, now) {
  const nowIso = now.toISOString();
  return previous && typeof previous.generated_at === 'string' && nowIso < previous.generated_at
    ? previous.generated_at
    : nowIso;
}

async function summaryBlock(title, body) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `### ${title}\n\n${body}\n\n`);
}

// The CLI body, exported so tests can run it against a scratch root.
// Returns 'written' | 'unchanged' | 'aborted' | 'oversize'.
export async function runMarketV2({ rootDir = root } = {}) {
  const [market, packages, previous] = await Promise.all([
    readFile(resolve(rootDir, 'data/market.json'), 'utf8').then(JSON.parse),
    readFile(resolve(rootDir, 'data/packages.json'), 'utf8').then(JSON.parse),
    readFile(resolve(rootDir, 'data/market-v2.json'), 'utf8')
      .then(JSON.parse)
      .catch(() => null),
  ]);

  const result = buildMarketV2({ market, packages, previous });

  if (result.outcome === 'aborted') {
    console.error(`market-v2 generation aborted: ${result.reason}`);
    for (const error of result.errors ?? []) console.error(`  ✗ ${error}`);
    await summaryBlock('⚠️ market-v2 generation aborted', `${result.reason}\n\nThe previously published \`data/market-v2.json\` is left untouched.`);
    return 'aborted';
  }

  if (result.outcome === 'unchanged') {
    console.log(
      `market-v2.json unchanged — same v1 feed, same mapping (${result.mappedCount} mapped entr${result.mappedCount === 1 ? 'y' : 'ies'}); keeping the previous file.`,
    );
    return 'unchanged';
  }

  const json = `${JSON.stringify(result.envelope)}\n`;
  const bytes = Buffer.byteLength(json, 'utf8');
  if (bytes > MAX_FILE_BYTES) {
    console.error(`market-v2.json would be ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap — not written.`);
    await summaryBlock('⚠️ market-v2 generation aborted', `The joined payload is ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap; the previous \`data/market-v2.json\` is left untouched.`);
    return 'oversize';
  }

  await writeFile(resolve(rootDir, 'data/market-v2.json'), json);
  console.log(
    `Wrote data/market-v2.json — ${result.envelope.entries.length} entries from the v1 feed, ${result.mappedCount} carrying a packages block, ${bytes} bytes.`,
  );
  if (result.warnings.length) {
    for (const warning of result.warnings) console.warn(`Warning: ${warning}`);
    await summaryBlock('market-v2 generation warnings', result.warnings.map((warning) => `- ${warning}`).join('\n'));
  }
  return 'written';
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const outcome = await runMarketV2();
  if (outcome !== 'written' && outcome !== 'unchanged') process.exitCode = 1;
}
