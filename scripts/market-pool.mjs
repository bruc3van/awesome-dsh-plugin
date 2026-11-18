// Shared catalog projection helpers: the review gate's exclusion set, the
// category assignment, and the display-field cleaning/build rules the schema-3
// market catalog reads. The legacy schema-2 pool/deal/Markdown-preview code
// lived here until market-v2 was retired (2026-11-18); only what the catalog
// projection needs remains.
//
// The input is always the stored snapshot (data/repositories.json) plus
// data/approved.json and data/curated.json; no fetching happens here.

import { assignableCategories, categoryFallback, categoryRules } from './categories.mjs';

// Repositories the publisher itself never lists (spec §4).
export const SELF_EXCLUDED_REPOS = [
  'bruc3van/dsh-desktop-pro',
  'bruc3van/dsh-market-pro',
  'bruc3van/awesome-dsh-plugin-pro',
  // Published old package metadata can still point to the former repositories.
  'bruc3van/safer-dsh-market',
  'bruc3van/awesome-dsh-plugin',
];

// Repositories that must not reach any downstream market. Both editorial
// lists belong here: market_exclusions (non-plugin shapes and other markets)
// and leaderboard_exclusions (desktop clients / shells, star-inflated repos,
// catalog-only entries) — the review convention states that a board exclusion
// also drops the repository from the downstream market, so every projection
// reads this one set and the feeds cannot drift again.
export function marketBlockedRepoNames(curated) {
  return new Set([
    ...Object.keys(curated.market_exclusions || {}),
    ...Object.keys(curated.leaderboard_exclusions || {}),
    ...SELF_EXCLUDED_REPOS,
  ].map((key) => key.toLowerCase()));
}

// Verbatim copies of the downstream wire rules (src/contract.ts in
// dsh-market-pro) — the two sides must never drift.
export const REPOSITORY_SLUG_PATTERN = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/;
export const BRANCH_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._/-]*$/;

export function isSafeBranchName(value) {
  if (!BRANCH_PATTERN.test(value)) return false;
  if (value.includes('..') || value.includes('//') || value.endsWith('/') || value.endsWith('.')) return false;
  return !value.split('/').some((segment) => segment === '.' || segment.endsWith('.lock'));
}

export const TEXT_LIMITS = {
  description: 300,
  title: 60,
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

// The review gate over the stored snapshot: description set, approved, not
// archived/disabled, not excluded in any list, category determinable. Returns
// the surviving repos (with their assigned category) plus warnings about
// category_overrides values that name an unknown category.
//
// `approved` is data/approved.json and is required: the catalog and the
// subscription both reach users, so an unreviewed repository must never ride
// into them just because it carries the topic.
export function filterPool(snapshot, curated, approved) {
  if (approved === null || typeof approved !== 'object' || Array.isArray(approved)) {
    throw new TypeError('filterPool needs data/approved.json (an owner/name -> date object) — the market is review-gated');
  }
  const approvedNames = new Set(Object.keys(approved).map((key) => key.toLowerCase()));
  const excluded = new Set(Object.keys(curated.excluded_repos || {}).map((key) => key.toLowerCase()));
  const blocked = marketBlockedRepoNames(curated);
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
    if (excluded.has(lower) || blocked.has(lower)) continue;
    if (excludedIds.has(repo.id)) continue;
    const category = categoryForRepo(curated, repo);
    if (!category) continue;
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
