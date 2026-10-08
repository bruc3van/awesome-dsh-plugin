#!/usr/bin/env node

// Generates data/market.json — the curated downstream-market file consumed by
// dsh-desktop-safe-market — and MARKET.md, its human-readable twin, so the
// feed can be previewed on GitHub without installing the plugin. The contract
// lives in the downstream repo at docs/market-json-spec.md; this script is its
// publishing half.
//
// The file is a pure projection of data/repositories.json (the raw topic
// snapshot) + data/approved.json (the review gate) + data/curated.json (the
// editorial decisions): filter (description set, maintainer-approved, not
// archived/disabled, not excluded, category determinable), clean every
// text field, dedup by id, then deal the pool round-robin across categories so
// any prefix of the file is a balanced list. No fetching happens here — the
// snapshot is always read from disk; the daily workflow runs scripts/update.mjs
// first, and the curation path passes --from-snapshot to declare that the
// stored snapshot is the intended input.
//
// Safety valves (§6 of the spec): the file is only written when the new pool is
// not empty and holds at least 60% of the previously published pool, and only
// when the payload actually changed (same snapshot + same curation = keep the
// old file, old generated_at included, so nothing gets re-committed).

import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { assignableCategories, categoryFallback, categoryRules } from './categories.mjs';
import { escapeCell } from './markdown.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const SCHEMA_VERSION = 1;
export const MAX_ENTRIES = 600;
export const MAX_FILE_BYTES = 500 * 1024;
export const MARKDOWN_OUTPUT = 'MARKET.md';
export const BREAKER_RATIO = 0.6;
export const STALE_SNAPSHOT_MS = 26 * 60 * 60 * 1000;

// Repositories the publisher itself never lists (spec §4).
export const SELF_EXCLUDED_REPOS = [
  'bruc3van/dsh-desktop',
  'bruc3van/safer-dsh-market',
  'bruc3van/awesome-dsh-plugin',
];

// Verbatim copies of the downstream wire rules (src/contract.ts in
// safer-dsh-market) — the two sides must never drift.
export const REPOSITORY_SLUG_PATTERN = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/;
export const BRANCH_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._/-]*$/;

export function isSafeBranchName(value) {
  if (!BRANCH_PATTERN.test(value)) return false;
  if (value.includes('..') || value.includes('//') || value.endsWith('/') || value.endsWith('.')) return false;
  return !value.split('/').some((segment) => segment === '.' || segment.endsWith('.lock'));
}

export const TEXT_LIMITS = {
  description: 300,
  language: 40,
  license: 40,
  pushed_at: 30,
  category: 60,
  category_zh: 60,
  category_en: 60,
};

// The spec's text-cleaning rule, matching the consumer's wire pass exactly:
// collapse all whitespace runs to one space, trim, and when the value exceeds
// the limit cut by code point (never inside a surrogate pair) and end with '…'.
export function cleanText(value, limit) {
  if (typeof value !== 'string') return '';
  const trimmed = value.replace(/\s+/g, ' ').trim();
  const points = [...trimmed];
  return points.length > limit ? `${points.slice(0, limit - 1).join('')}…` : trimmed;
}

// Code-point comparison — localeCompare is environment-dependent and must not
// decide the published order (spec §4.4).
export const codepointCompare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const starsOf = (value) =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;

// The consumer's branch fallback, verbatim: collapse to 100 code points first,
// keep only names passing the safe pattern, otherwise 'main'.
const branchName = (value) => {
  if (typeof value !== 'string') return 'main';
  const trimmed = cleanText(value, 100);
  return trimmed !== '' && isSafeBranchName(trimmed) ? trimmed : 'main';
};

// Same category assignment as scripts/render.mjs: category_overrides first
// (keys matched case-insensitively, like update.mjs), then pattern matching
// over name + description + topics, then the fallback category.
export function categoryForRepo(curated, repo) {
  const overrides = curated.category_overrides || {};
  const override = Object.entries(overrides).find(
    ([key]) => key.toLowerCase() === String(repo.full_name).toLowerCase(),
  )?.[1];
  if (override) {
    const match = assignableCategories.find(([key]) => key === override);
    if (match) return match;
  }
  const name = repo.name || String(repo.full_name).split('/')[1];
  const haystack = [name, repo.description, ...(repo.topics || [])].filter(Boolean).join(' ');
  return categoryRules.find((rule) => rule[3].test(haystack)) || categoryFallback;
}

// Spec §4.1: filter, in rule order. Returns the surviving repos (with their
// assigned category) plus warnings about category_overrides values that name
// an unknown category (those fall back to pattern matching, as in render.mjs).
//
// `approved` is data/approved.json and is required: the feed reaches users'
// desktop market, so an unreviewed repository must never ride into it just
// because it carries the topic — the same gate CATALOG.md / TOP200.md use.
export function filterPool(snapshot, curated, approved) {
  if (approved === null || typeof approved !== 'object' || Array.isArray(approved)) {
    throw new TypeError('filterPool needs data/approved.json (an owner/name -> date object) — the market is review-gated');
  }
  const approvedNames = new Set(Object.keys(approved).map((key) => key.toLowerCase()));
  const excluded = new Set(Object.keys(curated.excluded_repos || {}).map((key) => key.toLowerCase()));
  const leaderboard = new Set(
    Object.keys(curated.leaderboard_exclusions || {}).map((key) => key.toLowerCase()),
  );
  // Non-plugin forms (desktop shells, launchers, docs, Docker packaging, VS Code
  // extensions, …) and competing plugin markets / directories / stores
  // (market-in-market conflict) stay in the catalog and leaderboard but must
  // not reach the downstream market — spec §4.2, editorial list in curated.json.
  const marketExcluded = new Set(
    Object.keys(curated.market_exclusions || {}).map((key) => key.toLowerCase()),
  );
  const self = new Set(SELF_EXCLUDED_REPOS.map((key) => key.toLowerCase()));
  const excludedIds = new Set(
    Object.keys(curated.excluded_repo_ids || {}).map(Number).filter((id) => Number.isInteger(id)),
  );
  const warnings = [];
  for (const [fullName, category] of Object.entries(curated.category_overrides || {})) {
    if (!assignableCategories.some(([key]) => key === category)) {
      warnings.push(`unknown category_overrides value "${category}" for ${fullName} — ignored, pattern matching applies`);
    }
  }
  const repos = [];
  for (const repo of snapshot.repositories || []) {
    if (!repo.description || !String(repo.description).trim()) continue;
    if (repo.archived === true || repo.disabled === true) continue;
    const lower = String(repo.full_name).toLowerCase();
    if (!approvedNames.has(lower)) continue;
    if (excluded.has(lower) || leaderboard.has(lower) || self.has(lower) || marketExcluded.has(lower)) continue;
    if (excludedIds.has(repo.id)) continue;
    const category = categoryForRepo(curated, repo);
    if (!category) continue; // unreachable with the fallback rule; defensive
    repos.push({ repo, category });
  }
  return { repos, warnings };
}

// Spec §3 entry schema. Every field is written (no nulls); empty strings where
// the source has nothing.
export function buildEntry(repo, category) {
  return {
    id: repo.id,
    full_name: String(repo.full_name),
    description: cleanText(repo.description, TEXT_LIMITS.description),
    stargazers_count: starsOf(repo.stargazers_count),
    language: cleanText(repo.language, TEXT_LIMITS.language),
    license: cleanText(repo.license, TEXT_LIMITS.license),
    pushed_at: cleanText(repo.pushed_at, TEXT_LIMITS.pushed_at),
    default_branch: branchName(repo.default_branch),
    category: cleanText(category[0], TEXT_LIMITS.category),
    category_zh: cleanText(category[1], TEXT_LIMITS.category_zh),
    category_en: cleanText(category[2], TEXT_LIMITS.category_en),
  };
}

// Defensive dedup by id — the snapshot is already id-deduped; first (highest-
// star, snapshot order) wins.
export function dedupById(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    if (seen.has(entry.id)) return false;
    seen.add(entry.id);
    return true;
  });
}

// Spec §4.4: the balanced deal. Bucket by category; within a bucket sort by
// stars desc then full_name asc (code-point order); order the buckets by their
// strongest entry's stars desc, ties by category key asc; then deal round-robin
// — round r takes each bucket's r-th entry in bucket order — until maxEntries
// rows are dealt or every bucket is exhausted. The result is the published
// order and must NOT be re-sorted.
export function dealEntries(entries, maxEntries = MAX_ENTRIES) {
  const buckets = new Map();
  for (const entry of entries) {
    const list = buckets.get(entry.category) ?? [];
    list.push(entry);
    buckets.set(entry.category, list);
  }
  for (const list of buckets.values()) {
    list.sort((a, b) => b.stargazers_count - a.stargazers_count || codepointCompare(a.full_name, b.full_name));
  }
  const keys = [...buckets.keys()].sort(
    (a, b) =>
      buckets.get(b)[0].stargazers_count - buckets.get(a)[0].stargazers_count || codepointCompare(a, b),
  );
  const lists = keys.map((key) => buckets.get(key));
  const dealt = [];
  let round = 0;
  while (dealt.length < maxEntries) {
    let placed = false;
    for (let i = 0; i < lists.length; i++) {
      if (round < lists[i].length) {
        dealt.push(lists[i][round]);
        placed = true;
        if (dealt.length >= maxEntries) break;
      }
    }
    if (!placed) break;
    round++;
  }
  return dealt;
}

// The full generation decision. Returns one of:
//   { outcome: 'written', envelope, poolCount, warnings, trimmedCount }
//   { outcome: 'unchanged', envelope, poolCount, warnings }  — nothing to do
//   { outcome: 'aborted', reason, poolCount }                — breaker fired
export function buildMarket({ snapshot, curated, approved, previous = null, now = new Date(), maxBytes = MAX_FILE_BYTES }) {
  const { repos, warnings } = filterPool(snapshot, curated, approved);
  const pool = dedupById(repos.map(({ repo, category }) => buildEntry(repo, category)));
  const poolCount = pool.length;
  const dealt = dealEntries(pool);

  // Breaker (§6): never publish an empty market or one whose pool collapsed to
  // under 60% of the last published pool — that smells like a half-failed
  // crawl, and yesterday's file is the better answer.
  if (dealt.length === 0) {
    return { outcome: 'aborted', reason: 'the filtered pool is empty — refusing to publish an empty market', poolCount };
  }
  if (previous && poolCount < previous.pool_count * BREAKER_RATIO) {
    return {
      outcome: 'aborted',
      reason: `pool_count ${poolCount} is below ${Math.round(BREAKER_RATIO * 100)}% of the previously published pool (${previous.pool_count}) — keeping the previous market.json`,
      poolCount,
    };
  }

  const nowIso = now.toISOString();
  // generated_at must be monotonically non-decreasing (§6); clock skew between
  // machines must never move it backwards.
  const generatedAt =
    previous && typeof previous.generated_at === 'string' && nowIso < previous.generated_at
      ? previous.generated_at
      : nowIso;
  const envelopeWith = (list) => ({
    schema_version: SCHEMA_VERSION,
    generated_at: generatedAt,
    source_fetched_at: snapshot.fetched_at,
    source_repo_count: snapshot.total_count,
    pool_count: poolCount,
    entries: list,
  });

  // The artifact cap (§2, ≤500 KB) wins over the deal cap (600): when the full
  // deal does not fit, publish the largest prefix of it that does. A prefix
  // keeps every structural property the consumer relies on — the §5 star-order
  // invariant and the category balance — and the consumer's default truncation
  // (marketSize 200) is untouched. 600 is the deal's upper bound, and the
  // published entry count may legally be anywhere in 1–600. The budget is
  // injectable so the trim path stays testable at a smaller size.
  const fits = (list) => Buffer.byteLength(`${JSON.stringify(envelopeWith(list))}\n`, 'utf8') <= maxBytes;
  let entries = dealt;
  let trimmedCount = 0;
  if (!fits(dealt)) {
    let lo = 1;
    let hi = dealt.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi + 1) / 2);
      if (fits(dealt.slice(0, mid))) lo = mid;
      else hi = mid - 1;
    }
    if (!fits(dealt.slice(0, lo))) {
      return {
        outcome: 'aborted',
        reason: `even a single entry exceeds the ${maxBytes}-byte cap — refusing to publish`,
        poolCount,
      };
    }
    entries = dealt.slice(0, lo);
    trimmedCount = dealt.length - lo;
  }

  // Same source, same curation, same payload: keep the previous file bit for
  // bit (its generated_at included) so the daily run stays a no-op commit.
  if (
    previous &&
    previous.schema_version === SCHEMA_VERSION &&
    previous.source_fetched_at === snapshot.fetched_at &&
    previous.source_repo_count === snapshot.total_count &&
    previous.pool_count === poolCount &&
    JSON.stringify(previous.entries) === JSON.stringify(entries)
  ) {
    return { outcome: 'unchanged', envelope: previous, poolCount, warnings };
  }

  return { outcome: 'written', envelope: envelopeWith(entries), poolCount, warnings, trimmedCount };
}

// Same cell escaping as scripts/render.mjs (scripts/markdown.mjs): the wire
// text is whitespace-collapsed and length-capped, but descriptions are still
// owner-written, so markup must render as literal text.
const mdCell = escapeCell;

// MARKET.md — the readable twin of data/market.json. Bilingual, like
// CATALOG.md / TOP200.md. Ranked by stars because that is the order the
// consumer's "All plugins" view shows; the feed itself stays in deal order
// (§4.4), and the consumer truncates it to its configured size — every row
// here is published, the tail may not be shown in the app.
export function renderMarketMarkdown(envelope) {
  const labels = new Map();
  const counts = new Map();
  for (const entry of envelope.entries) {
    labels.set(entry.category, `${entry.category_en} · ${entry.category_zh}`);
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  }
  const categories = [...counts.keys()].sort(
    (a, b) => counts.get(b) - counts.get(a) || codepointCompare(a, b),
  );
  const byStars = [...envelope.entries].sort(
    (a, b) => b.stargazers_count - a.stargazers_count || codepointCompare(a.full_name, b.full_name),
  );
  const rows = byStars.map((entry, index) => {
    const pushed = String(entry.pushed_at ?? '').slice(0, 10);
    return `| ${index + 1} | [${mdCell(entry.full_name)}](https://github.com/${entry.full_name}) | ${mdCell(entry.description)} | ${mdCell(labels.get(entry.category))} | ${mdCell(entry.language)} | ${entry.stargazers_count} | ${mdCell(entry.license)} | ${mdCell(pushed)} |`;
  });
  return [
    '# 下游市场文件预览 / Downstream market feed preview',
    '',
    '[返回中文首页](./README.md) · [Back to English home](./README_EN.md) · [完整目录 / Full catalog](./CATALOG.md) · [Star 榜单 / Star board](./TOP200.md) · [JSON data](./data/market.json)',
    '',
    '[data/market.json](./data/market.json) 的人类可读镜像——即 [dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) 插件在桌面端渲染的同一份市场数据，由 `scripts/market.mjs` 随市场文件一同生成，供在 GitHub 上直接预览确认，无需安装插件；请勿手工编辑。下表按 Star 数排名，与插件「全部插件」视图一致；文件本身按类目均衡发牌顺序存储，插件默认仅展示其配置条数。',
    '',
    'The human-readable twin of [data/market.json](./data/market.json) — the same market data the [dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) plugin renders in the desktop app, generated alongside the feed by `scripts/market.mjs` so it can be previewed on GitHub without installing anything. Do not edit by hand. The table ranks by stars, matching the plugin\u2019s "All plugins" view; the feed itself is stored in balanced deal order, and the plugin shows only its configured prefix by default.',
    '',
    `- 生成时间 / Feed generated: **${envelope.generated_at}**`,
    `- 来源快照 / Source snapshot: **${envelope.source_fetched_at}**（${envelope.source_repo_count} 个仓库 / repositories scanned）`,
    `- 过滤后候选池 / Candidate pool after filtering: **${envelope.pool_count}**`,
    `- 发布条目 / Published entries: **${envelope.entries.length}**（上限 / cap: ${MAX_ENTRIES}）`,
    '',
    '## 分类 / Categories',
    '',
    '| Category | Entries |',
    '| --- | ---: |',
    ...categories.map((key) => `| ${mdCell(labels.get(key))} | ${counts.get(key)} |`),
    '',
    '## 全部插件（按 Star 排名）/ All plugins (ranked by stars)',
    '',
    '| # | Repository | Description | Category | Language | Stars | License | Updated |',
    '| ---: | --- | --- | --- | --- | ---: | --- | --- |',
    ...rows,
  ].join('\n');
}

async function summaryBlock(title, body) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `### ${title}\n\n${body}\n\n`);
}

// MARKET.md is a projection of the published feed, so it is rewritten whenever
// the feed is — and self-healed even on an 'unchanged' run, so a stale or
// hand-edited page cannot outlive the run that notices it. Aborted and
// oversize runs touch nothing: the page must keep describing the feed that is
// actually published, which is still yesterday's.
async function syncMarkdown(envelope, rootDir) {
  const page = `${renderMarketMarkdown(envelope)}\n`;
  const target = resolve(rootDir, MARKDOWN_OUTPUT);
  let current = null;
  try {
    current = await readFile(target, 'utf8');
  } catch {
    // First run — no page to compare against yet.
  }
  if (current === page) return;
  await writeFile(target, page);
  console.log(
    `Wrote ${MARKDOWN_OUTPUT} — the readable twin of data/market.json (${envelope.entries.length} entries).`,
  );
}

// The CLI body, exported so tests can run it against a scratch root and assert
// that an aborted run never touches the previous file. Returns the outcome:
// 'written' | 'unchanged' | 'aborted' | 'oversize'.
export async function runMarket({ rootDir = root, argv = process.argv } = {}) {
  const fromSnapshot = argv.includes('--from-snapshot');
  const [snapshot, curated, approved] = await Promise.all([
    readFile(resolve(rootDir, 'data/repositories.json'), 'utf8').then(JSON.parse),
    readFile(resolve(rootDir, 'data/curated.json'), 'utf8').then(JSON.parse),
    readFile(resolve(rootDir, 'data/approved.json'), 'utf8').then(JSON.parse),
  ]);
  // Same editorial description fixes as scripts/render.mjs loadState: applied
  // to the in-memory snapshot only (the stored file mirrors the API). A repo
  // whose upstream description is permanently unreadable mojibake must not
  // reach the downstream market in that state, should it ever enter the feed.
  const descriptionOverrides = new Map(
    Object.entries(curated.description_overrides || {}).map(([fullName, description]) => [
      fullName.toLowerCase(),
      description,
    ]),
  );
  for (const repo of snapshot.repositories) {
    const override = descriptionOverrides.get(repo.full_name.toLowerCase());
    if (typeof override === 'string' && override.trim()) repo.description = override;
  }
  let previous = null;
  try {
    previous = JSON.parse(await readFile(resolve(rootDir, 'data/market.json'), 'utf8'));
  } catch {
    // First run — no previous market to compare against.
  }

  if (!fromSnapshot) {
    const fetchedAt = Date.parse(snapshot.fetched_at);
    if (!Number.isFinite(fetchedAt) || Date.now() - fetchedAt > STALE_SNAPSHOT_MS) {
      const warning =
        `data/repositories.json was fetched at ${snapshot.fetched_at}, older than 26h — ` +
        'run scripts/update.mjs first, or pass --from-snapshot to build from the stored snapshot anyway.';
      console.warn(`Warning: ${warning}`);
      await summaryBlock('Market generation warnings', `- ${warning}`);
    }
  }

  const result = buildMarket({ snapshot, curated, approved, previous });

  if (result.outcome === 'aborted') {
    console.error(`Market generation aborted: ${result.reason}`);
    await summaryBlock(
      '⚠️ Market generation aborted',
      `${result.reason}\n\nThe previously published \`data/market.json\` is left untouched.`,
    );
    return 'aborted';
  }

  if (result.outcome === 'unchanged') {
    console.log(
      `market.json unchanged for snapshot ${snapshot.fetched_at} — keeping the previous file (${result.envelope.entries.length} entries, pool ${result.poolCount}).`,
    );
    await syncMarkdown(result.envelope, rootDir);
    return 'unchanged';
  }

  const json = `${JSON.stringify(result.envelope)}\n`;
  const bytes = Buffer.byteLength(json, 'utf8');
  if (bytes > MAX_FILE_BYTES) {
    console.error(`market.json would be ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap — not written.`);
    await summaryBlock(
      '⚠️ Market generation aborted',
      `The generated payload is ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap — not written; the previous \`data/market.json\` is left untouched.`,
    );
    return 'oversize';
  }

  await writeFile(resolve(rootDir, 'data/market.json'), json);
  console.log(
    `Wrote data/market.json — ${result.envelope.entries.length} entries dealt from a pool of ${result.poolCount} ` +
      `(source snapshot holds ${snapshot.total_count} repositories, fetched ${snapshot.fetched_at}), ${bytes} bytes.`,
  );
  await syncMarkdown(result.envelope, rootDir);

  const warnings = [...result.warnings];
  if (result.trimmedCount > 0) {
    warnings.push(
      `${result.trimmedCount} deal entries dropped so the file fits the ${MAX_FILE_BYTES}-byte cap ` +
        `(${result.envelope.entries.length} of ${MAX_ENTRIES} published) — deal order and category balance are preserved.`,
    );
  }
  if (warnings.length) {
    for (const warning of warnings) console.warn(`Warning: ${warning}`);
    await summaryBlock(
      'Market generation warnings',
      warnings.map((warning) => `- ${warning}`).join('\n'),
    );
  }
  return 'written';
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const outcome = await runMarket();
  if (outcome !== 'written' && outcome !== 'unchanged') process.exitCode = 1;
}
