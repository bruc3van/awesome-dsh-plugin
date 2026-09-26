#!/usr/bin/env node

// Validates data/market.json against §8 of the downstream publishing spec
// (docs/market-json-spec.md in dsh-desktop-safe-market): envelope shape,
// slug/identity rules, the approved.json review gate, exclusion lists,
// category keys, branch whitelist,
// the per-category star-order invariant, size caps, and the text-cleaning
// rules. Runs after every generation — daily cron and curation merges —
// and fails the workflow when the published file would break the consumer.

import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categoryKeys } from './categories.mjs';
import {
  isSafeBranchName,
  MAX_ENTRIES,
  MAX_FILE_BYTES,
  REPOSITORY_SLUG_PATTERN,
  SCHEMA_VERSION,
  SELF_EXCLUDED_REPOS,
  TEXT_LIMITS,
} from './market.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const marketPath = resolve(root, 'data/market.json');
const errors = [];

const [rawMarket, curatedRaw, snapshotRaw, approvedRaw] = await Promise.all([
  readFile(marketPath, 'utf8'),
  readFile(resolve(root, 'data/curated.json'), 'utf8'),
  readFile(resolve(root, 'data/repositories.json'), 'utf8'),
  readFile(resolve(root, 'data/approved.json'), 'utf8'),
]);

const curated = JSON.parse(curatedRaw);
const approvedNames = new Set(Object.keys(JSON.parse(approvedRaw)).map((key) => key.toLowerCase()));
const snapshot = JSON.parse(snapshotRaw);

let market;
try {
  market = JSON.parse(rawMarket);
} catch (error) {
  console.error(`data/market.json could not be parsed: ${error.message}`);
  process.exit(1);
}

const validCategories = new Set(categoryKeys);
const excludedNames = new Set(Object.keys(curated.excluded_repos || {}).map((key) => key.toLowerCase()));
const leaderboardNames = new Set(
  Object.keys(curated.leaderboard_exclusions || {}).map((key) => key.toLowerCase()),
);
const marketExcludedNames = new Set(
  Object.keys(curated.market_exclusions || {}).map((key) => key.toLowerCase()),
);
const selfNames = new Set(SELF_EXCLUDED_REPOS.map((key) => key.toLowerCase()));
const excludedIds = new Set(
  Object.keys(curated.excluded_repo_ids || {}).map(Number).filter((id) => Number.isInteger(id)),
);

const ISO_TIMESTAMP_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

// §8.8: the field must be a string, already whitespace-folded and trimmed, and
// within its code-point limit.
function checkText(where, row, field, limit) {
  const value = row[field];
  if (typeof value !== 'string') {
    errors.push(`${where}: ${field} must be a string`);
    return;
  }
  if (value !== value.replace(/\s+/g, ' ').trim()) {
    errors.push(`${where}: ${field} is not whitespace-folded/trimmed`);
  }
  if ([...value].length > limit) {
    errors.push(`${where}: ${field} is ${[...value].length} code points, cap is ${limit}`);
  }
}

// §8.1: envelope.
if (market === null || typeof market !== 'object' || Array.isArray(market)) {
  errors.push('envelope must be a JSON object');
} else {
  if (market.schema_version !== SCHEMA_VERSION) {
    errors.push(`schema_version must be ${SCHEMA_VERSION}, got ${JSON.stringify(market.schema_version)}`);
  }
  for (const field of ['generated_at', 'source_fetched_at']) {
    if (typeof market[field] !== 'string' || !Number.isFinite(Date.parse(market[field]))) {
      errors.push(`${field} must be an ISO 8601 UTC string, got ${JSON.stringify(market[field])}`);
    }
  }
  if (market.source_fetched_at !== snapshot.fetched_at) {
    errors.push(`source_fetched_at must equal the snapshot's fetched_at verbatim (${snapshot.fetched_at})`);
  }
  for (const field of ['source_repo_count', 'pool_count']) {
    if (!Number.isInteger(market[field]) || market[field] < 0) {
      errors.push(`${field} must be a non-negative integer, got ${JSON.stringify(market[field])}`);
    }
  }
  if (market.source_repo_count !== snapshot.total_count) {
    errors.push(`source_repo_count must equal the snapshot's total_count (${snapshot.total_count})`);
  }
  if (!Array.isArray(market.entries)) {
    errors.push('entries must be an array');
  } else if (market.entries.length < 1 || market.entries.length > MAX_ENTRIES) {
    errors.push(`entries must hold 1–${MAX_ENTRIES} rows, got ${market.entries.length}`);
  }
}

// §8.7: file size.
const { size } = await stat(marketPath);
if (size > MAX_FILE_BYTES) {
  errors.push(`file is ${size} bytes, cap is ${MAX_FILE_BYTES}`);
}

// §8.2–8.6 and 8.8: entries.
const seenIds = new Set();
const seenNames = new Set();
const starsByCategory = new Map();
for (const [index, row] of (Array.isArray(market?.entries) ? market.entries : []).entries()) {
  const where = `entries[${index}]`;
  if (row === null || typeof row !== 'object' || Array.isArray(row)) {
    errors.push(`${where} is not an object`);
    continue;
  }
  if (!Number.isInteger(row.id) || row.id <= 0) {
    errors.push(`${where}: id must be a positive integer, got ${JSON.stringify(row.id)}`);
  } else if (seenIds.has(row.id)) {
    errors.push(`${where}: duplicate id ${row.id}`);
  } else {
    seenIds.add(row.id);
  }
  if (typeof row.full_name !== 'string' || !REPOSITORY_SLUG_PATTERN.test(row.full_name)) {
    errors.push(`${where}: full_name must match the owner/name slug pattern, got ${JSON.stringify(row.full_name)}`);
  } else if (seenNames.has(row.full_name)) {
    errors.push(`${where}: duplicate full_name "${row.full_name}"`);
  } else {
    seenNames.add(row.full_name);
  }
  const lower = typeof row.full_name === 'string' ? row.full_name.toLowerCase() : '';
  if (!approvedNames.has(lower)) errors.push(`${where}: "${row.full_name}" is not in data/approved.json — the market is review-gated`);
  if (excludedNames.has(lower)) errors.push(`${where}: "${row.full_name}" is in curated.json excluded_repos`);
  if (leaderboardNames.has(lower)) errors.push(`${where}: "${row.full_name}" is in curated.json leaderboard_exclusions`);
  if (marketExcludedNames.has(lower)) errors.push(`${where}: "${row.full_name}" is in curated.json market_exclusions`);
  if (selfNames.has(lower)) errors.push(`${where}: "${row.full_name}" is on the publisher self-exclusion list`);
  if (excludedIds.has(row.id)) errors.push(`${where}: id ${row.id} is in curated.json excluded_repo_ids`);
  if (!Number.isInteger(row.stargazers_count) || row.stargazers_count < 0) {
    errors.push(`${where}: stargazers_count must be a non-negative integer, got ${JSON.stringify(row.stargazers_count)}`);
  }
  checkText(where, row, 'description', TEXT_LIMITS.description);
  if (typeof row.description === 'string' && row.description.trim() === '') {
    errors.push(`${where}: description must not be empty`);
  }
  checkText(where, row, 'language', TEXT_LIMITS.language);
  checkText(where, row, 'license', TEXT_LIMITS.license);
  if (typeof row.pushed_at !== 'string' || !ISO_TIMESTAMP_PATTERN.test(row.pushed_at)) {
    errors.push(`${where}: pushed_at must be an ISO 8601 timestamp, got ${JSON.stringify(row.pushed_at)}`);
  }
  if (row.pushed_at && row.pushed_at.length > TEXT_LIMITS.pushed_at) {
    errors.push(`${where}: pushed_at is ${row.pushed_at.length} characters, cap is ${TEXT_LIMITS.pushed_at}`);
  }
  if (typeof row.default_branch !== 'string' || row.default_branch === '' || !isSafeBranchName(row.default_branch)) {
    errors.push(`${where}: default_branch "${String(row.default_branch)}" fails the branch whitelist`);
  }
  if (typeof row.category !== 'string' || !validCategories.has(row.category)) {
    errors.push(`${where}: category ${JSON.stringify(row.category)} is not a valid category key`);
  }
  checkText(where, row, 'category', TEXT_LIMITS.category);
  for (const field of ['category_zh', 'category_en']) {
    if (typeof row[field] !== 'string' || row[field].trim() === '') {
      errors.push(`${where}: ${field} must be a non-empty string, got ${JSON.stringify(row[field])}`);
    } else {
      checkText(where, row, field, TEXT_LIMITS[field]);
    }
  }
  if (typeof row.category === 'string') {
    const stars = starsByCategory.get(row.category) ?? [];
    stars.push(Number.isInteger(row.stargazers_count) ? row.stargazers_count : 0);
    starsByCategory.set(row.category, stars);
  }
}

// §8.6 / §5: within each category, the deal order is non-increasing in stars.
for (const [category, stars] of starsByCategory) {
  for (let i = 1; i < stars.length; i++) {
    if (stars[i] > stars[i - 1]) {
      errors.push(
        `order invariant broken in category "${category}": ${stars[i - 1]} < ${stars[i]} at position ${i + 1}`,
      );
      break;
    }
  }
}

if (errors.length) {
  console.error(`data/market.json failed validation with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `data/market.json is valid — ${market.entries.length} entries, ${size} bytes, ` +
    `${starsByCategory.size} categories, source snapshot ${snapshot.fetched_at}.`,
);
