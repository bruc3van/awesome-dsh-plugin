#!/usr/bin/env node

// Progressive install-mapping coverage for the schema-3 market catalog.
//
// The catalog keeps ~25k reviewed repositories that have no install target
// yet; the client marks them `install_status: none` and hides them behind its
// "not yet mapped" toggle. This script closes that gap from the upstream
// READMEs, tier by tier, starting with the repositories that carry stars:
//
//   1. Read the catalog projection (same source the npm feed ships) and take
//      the unmapped rows at or above --min-stars (default 10).
//   2. Fetch each repository's README, run the shared extractor
//      (readme-install.mjs — the same rules behind packages.json).
//   3. Verify every npm target against the registry: the package must exist,
//      a pin must resolve, and its `repository` field must point at this very
//      repository. A github: target must be this exact slug. Anything else is
//      a review exception — a README that installs a renamed package, a local
//      path, a poisoned bare-name npm package, an ambiguous multi-package
//      page — and is never written automatically.
//   4. --apply appends the confident mappings to data/packages.json (it never
//      rewrites an existing entry), then the market workflows rebuild both
//      feeds. --write-report always emits the applied set and the exception
//      queue to data/review/catalog-mapping.{md,json} so the daily AI review
//      has an exact work list.
//
// Report-only by default: run without --apply to inspect a tier first.

import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeCell } from './markdown.mjs';
import { decideMapping, manifestFallbackTarget, npmRepositorySlug } from './catalog-mapping-rules.mjs';
import { extractInstallTargets } from './readme-install.mjs';
import { readSafeMarketCatalog } from './safe-market-catalog.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const has = (flag) => process.argv.includes(flag);
const valueOf = (flag, fallback) => {
  const index = process.argv.indexOf(flag);
  return index >= 0 && process.argv[index + 1] !== undefined ? process.argv[index + 1] : fallback;
};

const APPLY = has('--apply');
const WRITE_REPORT = has('--write-report');
const MIN_STARS = Number(valueOf('--min-stars', '10'));
const LIMIT = Number(valueOf('--limit', '0')) || Infinity;
const CONCURRENCY = 10;
const TODAY = new Date().toISOString().slice(0, 10);
const README_NAMES = ['README.md', 'readme.md', 'README.zh-CN.md', 'README_zh.md', 'README_CN.md', 'README.zh.md', 'README-EN.md', 'README_EN.md'];

if (!Number.isFinite(MIN_STARS) || MIN_STARS < 0) {
  console.error('--min-stars must be a non-negative number');
  process.exit(1);
}

const [catalog, packages, snapshot] = await Promise.all([
  readSafeMarketCatalog(new URL('../', import.meta.url)),
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/repositories.json'), 'utf8').then(JSON.parse),
]);
const branchBySlug = new Map(
  (snapshot.repositories || []).map((repo) => [String(repo.full_name).toLowerCase(), repo.default_branch || 'main']),
);

// Editorial decisions that a repository has no install target to map (a skill,
// a docs app, a desktop client, …): once recorded they leave the queue, so the
// daily run never re-asks the same question.
const SKIPS_PATH = resolve(root, 'data/catalog-mapping-skips.json');
let skips = { schema_version: 1, entries: {} };
try {
  skips = JSON.parse(await readFile(SKIPS_PATH, 'utf8'));
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}
const skipped = new Map(Object.entries(skips.entries ?? {}).map(([slug, record]) => [slug.toLowerCase(), record]));

const SHARD = valueOf('--shard', '');
const SHARD_OUT = valueOf('--out', '');
let shardIndex = 0;
let shardCount = 1;
if (SHARD !== '') {
  const [index, count] = SHARD.split('/').map(Number);
  if (!Number.isInteger(index) || !Number.isInteger(count) || count < 1 || index < 0 || index >= count) {
    console.error('--shard must look like <index>/<count>, e.g. 0/4');
    process.exit(1);
  }
  shardIndex = index;
  shardCount = count;
  if (SHARD_OUT === '') {
    console.error('--shard requires --out <json> — shards collect mappings, they do not write data');
    process.exit(1);
  }
}

const allGaps = catalog.entries
  .filter((row) => row.install_status === 'none' && !row.archived && !row.disabled)
  .filter((row) => row.stargazers_count >= MIN_STARS)
  .filter((row) => packages.entries[row.full_name.toLowerCase()] === undefined)
  .filter((row) => !skipped.has(row.full_name.toLowerCase()))
  .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name))
  .slice(0, LIMIT);
// Sharded runs exist because one Node process serializes on the shared
// raw.githubusercontent.com connection pool; modulo sharding keeps the
// star-descending order inside every shard and overlaps nothing.
const gaps = shardCount === 1 ? allGaps : allGaps.filter((_, index) => index % shardCount === shardIndex);

console.log(
  `catalog mapping: ${catalog.entries.length} rows, ${catalog.entries.filter((row) => row.install_status === 'none').length} unmapped; ` +
    `${allGaps.length} in scope at >=${MIN_STARS} stars${Number.isFinite(LIMIT) ? ` (limit ${LIMIT})` : ''}` +
    (shardCount === 1 ? '' : ` — shard ${SHARD} carries ${gaps.length}`),
);

const readmeCache = new Map();
async function fetchReadme(slug) {
  if (readmeCache.has(slug)) return readmeCache.get(slug);
  const branch = branchBySlug.get(slug) ?? 'main';
  const probe = async (name) => {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${slug}/${branch}/${name}`, {
        signal: AbortSignal.timeout(6000),
        headers: { 'User-Agent': 'awesome-dsh-plugin-pro catalog-mappings' },
      });
      if (!res.ok) return null;
      const text = await res.text();
      return text.length >= 40 ? text : null;
    } catch {
      return null;
    }
  };
  // README.md is by far the common case: one request, then fall back to the
  // whole (parallel) name list only when it misses.
  let result = await probe(README_NAMES[0]);
  if (result === null) {
    const rest = await Promise.all(README_NAMES.slice(1).map(probe));
    result = rest.find((text) => text !== null) ?? null;
  }
  readmeCache.set(slug, result);
  return result;
}

// A README may document installation only in prose ("add it from the plugin
// panel", "search dsh-kit"), yet the repository itself is a plugin. The
// manifest is the second, independent piece of evidence: a root `dsh` field or
// `cordis.patch.yml` means installing the repository (or its published npm
// package) is what the author intends.
const packageCache = new Map();
async function fetchPackageJson(slug) {
  if (packageCache.has(slug)) return packageCache.get(slug);
  let manifest = null;
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${slug}/${branchBySlug.get(slug) ?? 'main'}/package.json`, {
      signal: AbortSignal.timeout(20000),
      headers: { 'User-Agent': 'awesome-dsh-plugin-pro catalog-mappings' },
    });
    if (res.ok) {
      const body = await res.json();
      if (body !== null && typeof body === 'object' && !Array.isArray(body)) manifest = body;
    }
  } catch {}
  packageCache.set(slug, manifest);
  return manifest;
}

const patchCache = new Map();
async function hasCordisPatch(slug) {
  if (patchCache.has(slug)) return patchCache.get(slug);
  let found = false;
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${slug}/${branchBySlug.get(slug) ?? 'main'}/cordis.patch.yml`, {
      method: 'HEAD',
      signal: AbortSignal.timeout(20000),
      headers: { 'User-Agent': 'awesome-dsh-plugin-pro catalog-mappings' },
    });
    found = res.ok;
  } catch {}
  patchCache.set(slug, found);
  return found;
}

const npmCache = new Map();async function checkNpm(spec, slug) {
  if (npmCache.has(spec)) return npmCache.get(spec);
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
      const repo = npmRepositorySlug(doc);
      if (pin !== null) {
        const resolved = /^\d+\.\d+\.\d+/.test(pin) ? doc.versions?.[pin] : doc['dist-tags']?.[pin];
        if (!resolved) result = { ok: false, reason: `npm ${spec} pins a ${/^\d/.test(pin) ? 'version' : 'dist-tag'} that was never published` };
      }
      if (result === undefined) {
        if (repo !== slug) {
          result = { ok: false, reason: repo === '' ? `npm ${name} declares no repository (authorship unproven)` : `npm ${name} belongs to ${repo}` };
        } else result = { ok: true };
      }
    }
  } catch (error) {
    result = { ok: false, reason: `npm lookup for ${name} failed (${error.message})` };
  }
  npmCache.set(spec, result);
  return result;
}

const applied = [];
let processed = 0;
const review = [];
const queue = [...gaps];
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const row = queue.shift();
    processed += 1;
    if (processed % 50 === 0) console.log(`  … ${processed}/${gaps.length} scanned (${applied.length} auto, ${review.length} review)`);
    const slug = row.full_name.toLowerCase();
    const branch = branchBySlug.get(slug) ?? 'main';
    const text = await fetchReadme(slug);
    if (text === null) {
      review.push({ slug: row.full_name, stars: row.stargazers_count, reason: `README unreachable on ${branch}`, hint: '' });
      continue;
    }
    const [owner, repo] = slug.split('/');
    const extraction = extractInstallTargets(text, { owner, repo });
    const checks = new Map();
    for (const pick of extraction.picks) {
      if (pick.source.startsWith('npm:')) checks.set(pick.source, await checkNpm(pick.source.slice(4), slug));
    }
    let decision = decideMapping(slug, extraction.picks, checks);
    let via = 'readme';
    let evidence = '';
    let manifestNote = '';
    if (decision.verdict !== 'auto') {
      const manifest = await fetchPackageJson(slug);
      const name = typeof manifest?.name === 'string' ? manifest.name.trim() : '';
      const hasDsh = manifest !== null && manifest.dsh !== undefined && manifest.dsh !== null;
      const npm = name === '' ? undefined : await checkNpm(name, slug);
      // The patch file only matters when neither the registry package nor the
      // package.json `dsh` field settles it.
      const hasPatch = npm?.ok ? false : hasDsh ? false : await hasCordisPatch(slug);
      const target = manifestFallbackTarget(slug, { name, hasDsh, hasPatch, npm });
      if (target !== null) {
        evidence = target.evidence;
        delete target.evidence;
        decision = { verdict: 'auto', accepted: [target], reason: '' };
        via = 'manifest';
      } else {
        manifestNote = manifest === null ? 'no package.json' : name === '' ? 'package.json without a name' : 'package.json declares no dsh bundle';
      }
    }
    const hint = extraction.segments?.[0]?.command ?? extraction.picks[0]?.command ?? '';
    if (decision.verdict === 'auto') {
      applied.push({
        slug: row.full_name,
        stars: row.stargazers_count,
        branches: branch,
        packages: decision.accepted,
        via,
        ...(evidence ? { evidence } : {}),
        ...(decision.reason ? { note: decision.reason } : {}),
      });
    } else {
      review.push({
        slug: row.full_name,
        stars: row.stargazers_count,
        reason: [decision.reason, manifestNote].filter(Boolean).join('; '),
        hint: String(hint).slice(0, 200),
        candidates: extraction.picks.map((pick) => pick.source),
      });
    }
  }
});
await Promise.all(workers);

applied.sort((a, b) => b.stars - a.stars || a.slug.localeCompare(b.slug));
review.sort((a, b) => b.stars - a.stars || a.slug.localeCompare(b.slug));

console.log(`auto-mappable: ${applied.length}, needs review: ${review.length}`);
for (const item of applied) {
  console.log(`  ✓ ${item.slug} (${item.stars}★) → ${item.packages.map((pkg) => pkg.source).join(', ')} [${item.via}]${item.note ? `  [dropped: ${item.note}]` : ''}`);
}
for (const item of review.slice(0, 20)) console.log(`  ? ${item.slug} (${item.stars}★) — ${item.reason}`);
if (review.length > 20) console.log(`  … ${review.length - 20} more in the review report`);

if (shardCount > 1) {
  await writeFile(resolve(root, SHARD_OUT), `${JSON.stringify({ shard: SHARD, generated_at: new Date().toISOString(), applied, review })}\n`);
  console.log(`shard ${SHARD}: wrote ${applied.length} mappings and ${review.length} review entries to ${SHARD_OUT}`);
  process.exit(0);
}

if (APPLY && applied.length > 0) {
  const added = [];
  // Append-only: an existing mapping is a reviewed decision and is never
  // rewritten by a crawl. Insertion order follows stars for readability.
  for (const item of applied) {
    const slug = item.slug.toLowerCase();
    if (packages.entries[slug] !== undefined) continue;
    packages.entries[slug] = {
      packages: item.packages.map((pkg) => ({ profile: pkg.profile, source: pkg.source, command: pkg.command, install: pkg.install })),
      status: 'readme-verified',
      verified_date: TODAY,
      verified_via: item.via === 'manifest' ? `${item.evidence} @${item.branches}` : `README@${item.branches}`,
      verified_by: 'ci-auto',
    };
    added.push(slug);
  }
  if (added.length > 0) {
    packages.updated_at = TODAY;
    await writeFile(resolve(root, 'data/packages.json'), `${JSON.stringify(packages, null, 2)}\n`);
    console.log(`\nwrote data/packages.json — ${added.length} new mappings, ${Object.keys(packages.entries).length} entries total`);
  } else {
    console.log('\nnothing new to write — every auto mapping already exists');
  }
} else if (APPLY) {
  console.log('\nnothing to apply');
}

if (WRITE_REPORT) {
  const md = escapeCell;
  const row = (item) =>
    `| [${item.slug}](https://github.com/${item.slug}) | ${item.stars} | ${item.packages ? item.packages.map((pkg) => `\`${pkg.source}\``).join('<br>') : md(item.reason)} | ${md(item.via === 'manifest' ? (item.evidence || 'manifest') : 'README')} |`;
  const reviewRow = (item) =>
    `| [${item.slug}](https://github.com/${item.slug}) | ${item.stars} | ${md(item.reason)} | ${md(item.hint || '')} |`;
  const page = [
    '# 市场目录安装映射 / Catalog install mappings',
    '',
    `由 \`node scripts/catalog-mappings.mjs --min-stars ${MIN_STARS}${APPLY ? ' --apply' : ''} --write-report\` 生成于 ${TODAY}。`,
    '',
    '范围：schema 3 市场目录中尚无安装映射、且 ≥ 该星级门槛的仓库（`data/catalog-mapping-skips.json` 已裁决过的除外）。自动补充只接受「命令逐字来自 README」或「manifest 证明是本仓库插件」的条目：npm 包的 registry `repository` 必须指向本仓库；README 没有可复制命令时，以根 `package.json` / `cordis.patch.yml` 的 dsh 声明作为证据（npm 包存在则用包名，否则用仓库地址）。其余进入下方待裁决清单，供每日 AI 审核补齐。',
    '',
    `- 本次扫描 / scanned: **${gaps.length}**`,
    `- 自动补充 / auto-applied: **${applied.length}**（manifest 证据 ${applied.filter((item) => item.via === 'manifest').length}）`,
    `- 待裁决 / needs review: **${review.length}**`,
    '',
    `## 自动补充 / Auto-applied（${applied.length}）`,
    '',
    '| 仓库 / Repo | ★ | 安装目标 / Targets | 证据 / Evidence |',
    '| --- | ---: | --- | --- |',
    ...(applied.length ? applied.map(row) : ['| — | — | — | — |']),
    '',
    `## 待裁决 / Needs review（${review.length}）`,
    '',
    '| 仓库 / Repo | ★ | 原因 / Why not automatic | README 提示 / Hint |',
    '| --- | ---: | --- | --- |',
    ...(review.length ? review.map(reviewRow) : ['| — | — | — | — |']),
    '',
  ].join('\n');
  await writeFile(resolve(root, 'data/review/catalog-mapping.md'), `${page}\n`);
  await writeFile(
    resolve(root, 'data/review/catalog-mapping.json'),
    `${JSON.stringify({ generated_at: new Date().toISOString(), min_stars: MIN_STARS, scanned: gaps.length, applied, review }, null, 2)}\n`,
  );
  console.log('wrote data/review/catalog-mapping.md and .json');
}

if (process.env.GITHUB_STEP_SUMMARY) {
  await appendFile(
    process.env.GITHUB_STEP_SUMMARY,
    `### Catalog install mappings\n\n- scanned (>=${MIN_STARS}★): ${gaps.length}\n- auto-mappable: ${applied.length}\n- needs review: ${review.length}\n\n` +
      (applied.length ? `Top auto: ${applied.slice(0, 10).map((item) => item.slug).join(', ')}\n` : ''),
  );
}
