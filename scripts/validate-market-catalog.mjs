#!/usr/bin/env node

// Validates the schema-3 market catalog the npm feed ships to dsh-market-pro.
// market-v2 has its own validator; this one guards the other artifact, because
// the two feeds read different projections and only a gate on each can keep
// them from drifting. Rules: repository identity, the review gate, every
// exclusion list (a board exclusion is a market exclusion), the install_status
// contract, plugin-level copy limits, and the subscription envelope.

import { readFile } from 'node:fs/promises';
import { categoryKeys } from './categories.mjs';
import { TEXT_LIMITS, cleanText, marketBlockedRepoNames } from './market-pool.mjs';
import { loadState } from './render.mjs';
import { buildCompactMarketCatalog, readSafeMarketCatalog } from './safe-market-catalog.mjs';

const errors = [];
const warnings = [];

const [catalog, state, indexBytes] = await Promise.all([
  readSafeMarketCatalog(new URL('../', import.meta.url)),
  loadState(),
  readFile(new URL('../data/dsh-market-index.json', import.meta.url)).then((buffer) => buffer.byteLength).catch(() => 0),
]);
const approved = new Set(Object.keys(state.approved).map((key) => key.toLowerCase()));
const blocked = marketBlockedRepoNames(state.curated);
const excluded = new Set(Object.keys(state.curated.excluded_repos || {}).map((key) => key.toLowerCase()));
const excludedIds = new Set(
  Object.keys(state.curated.excluded_repo_ids || {}).map(Number).filter((id) => Number.isInteger(id)),
);
const snapshotIdsBySlug = new Map(
  (state.snapshot.repositories || []).map((repo) => [String(repo.full_name).toLowerCase(), repo.id]),
);
const categories = new Set(categoryKeys);
const SLUG = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/;
const STATUSES = new Set(['command', 'manual', 'none']);

if (catalog.schema_version !== 3) errors.push(`schema_version must be 3, got ${JSON.stringify(catalog.schema_version)}`);
if (!Array.isArray(catalog.entries) || catalog.entries.length === 0) errors.push('entries must be a non-empty array');
if (catalog.repository_count !== catalog.entries.length) {
  errors.push(`repository_count ${catalog.repository_count} does not match ${catalog.entries.length} entries`);
}
if (!Array.isArray(catalog.subscription?.plugins) || catalog.subscription.plugins.length === 0) {
  errors.push('subscription.plugins must be a non-empty array');
}
// The editorial shortlist is an explicit endorsement shelf: a pick may be a
// repository the market rows exclude (the subscription marks such picks
// `featured` too), so membership in entries[] is not required. Identity and
// copy still have to be sane.
if (catalog.featured !== undefined) {
  const featured = catalog.featured;
  if (featured === null || typeof featured !== 'object' || Array.isArray(featured)) errors.push('featured must be an object when present');
  else {
    if (!Array.isArray(featured.entries) || featured.entries.length === 0) errors.push('featured.entries must be a non-empty array');
    else {
      const seenFeatured = new Set();
      for (const [index, entry] of featured.entries.entries()) {
        const where = `featured.entries[${index}]`;
        const slug = typeof entry?.full_name === 'string' ? entry.full_name : '';
        if (!SLUG.test(slug)) errors.push(`${where}: full_name must match owner/name`);
        else if (seenFeatured.has(slug.toLowerCase())) errors.push(`${where}: duplicate pick ${slug}`);
        seenFeatured.add(slug.toLowerCase());
        if (typeof entry?.description !== 'string' || entry.description.trim() === '') errors.push(`${where}: description must not be empty`);
        else if (entry.description !== cleanText(entry.description, TEXT_LIMITS.description)) errors.push(`${where}: description is not folded/capped`);
      }
    }
    for (const field of ['title_zh', 'title_en']) {
      if (featured[field] !== undefined && (typeof featured[field] !== 'string' || featured[field] !== cleanText(featured[field], TEXT_LIMITS.title))) {
        errors.push(`featured.${field} must be a folded string within the title cap`);
      }
    }
    if (featured.updated_at !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(featured.updated_at))) errors.push('featured.updated_at must be YYYY-MM-DD');
  }
}

const seen = new Set();
const counts = { command: 0, manual: 0, none: 0 };
for (const [index, row] of catalog.entries.entries()) {
  const where = `entries[${index}]`;
  if (row === null || typeof row !== 'object' || Array.isArray(row)) {
    errors.push(`${where} is not an object`);
    continue;
  }
  if (typeof row.full_name !== 'string' || !SLUG.test(row.full_name)) {
    errors.push(`${where}: full_name must match owner/name, got ${JSON.stringify(row.full_name)}`);
    continue;
  }
  const lower = row.full_name.toLowerCase();
  if (seen.has(lower)) errors.push(`${where}: duplicate repository ${row.full_name}`);
  seen.add(lower);
  if (!approved.has(lower)) errors.push(`${where}: "${row.full_name}" is not in data/approved.json — the market is review-gated`);
  if (excluded.has(lower)) errors.push(`${where}: "${row.full_name}" is in curated.json excluded_repos`);
  if (blocked.has(lower)) errors.push(`${where}: "${row.full_name}" is on a market exclusion list (market_exclusions / leaderboard_exclusions / self)`);
  const repoId = row.id ?? snapshotIdsBySlug.get(lower);
  if (excludedIds.has(repoId)) errors.push(`${where}: id ${repoId} is in curated.json excluded_repo_ids`);
  if (!categories.has(row.category)) errors.push(`${where}: category ${JSON.stringify(row.category)} is not a valid category key`);
  if (!STATUSES.has(row.install_status)) {
    errors.push(`${where}: install_status ${JSON.stringify(row.install_status)} is not command/manual/none`);
  } else {
    counts[row.install_status] += 1;
    const packages = row.packages;
    if (row.install_status === 'none' && packages !== undefined) errors.push(`${where}: install_status none but packages is present`);
    if (row.install_status !== 'none') {
      if (packages === undefined) errors.push(`${where}: install_status ${row.install_status} but packages is missing`);
      else if (packages.mode !== row.install_status) {
        errors.push(`${where}: packages.mode ${JSON.stringify(packages.mode)} disagrees with install_status ${row.install_status}`);
      } else if (row.install_status === 'command' && (!Array.isArray(packages.targets) || packages.targets.length === 0)) {
        errors.push(`${where}: command install carries no targets`);
      }
    }
  }
  for (const [field, limit] of [['description', TEXT_LIMITS.description], ['title_zh', TEXT_LIMITS.title],
    ['title_en', TEXT_LIMITS.title], ['description_en', TEXT_LIMITS.description]]) {
    const value = row[field];
    if (value === undefined) continue;
    if (typeof value !== 'string' || value.trim() === '') {
      errors.push(`${where}: ${field} must be a non-empty string when present`);
      continue;
    }
    if (value !== cleanText(value, limit)) errors.push(`${where}: ${field} is not folded/capped like the wire pass`);
  }
  // Nothing but the subscription copy may leak markup into a card title.
  for (const field of ['title_zh', 'title_en']) {
    if (typeof row[field] === 'string' && /[<>\u0000-\u001f]/.test(row[field])) errors.push(`${where}: ${field} contains markup or control characters`);
  }
}

// Validate the compact schema-4 projection alongside schema 3.
const compactCatalog = buildCompactMarketCatalog(catalog);
if (compactCatalog.schema_version !== 4) {
  errors.push(`compact schema_version must be 4, got ${JSON.stringify(compactCatalog.schema_version)}`);
}
if (!Array.isArray(compactCatalog.category_table) || compactCatalog.category_table.length === 0) {
  errors.push('compact catalog category_table must be non-empty');
}
if (compactCatalog.entries.length !== catalog.entries.length) {
  errors.push(`compact catalog entries (${compactCatalog.entries.length}) disagree with schema-3 entries (${catalog.entries.length})`);
}

// The CDN serves each file uncompressed to its per-file cap (jsDelivr is
// documented at 20 MB, measured at 50 MiB; unpkg mirrors are less predictable),
// so both payloads get explicit byte budgets.
const catalogBytes = Buffer.byteLength(`${JSON.stringify(catalog)}\n`, 'utf8');
const compactBytes = Buffer.byteLength(`${JSON.stringify(compactCatalog)}\n`, 'utf8');
const WARN_BYTES = 18 * 1000 * 1000;
const MAX_BYTES = 20 * 1000 * 1000;
if (compactBytes > MAX_BYTES) {
  errors.push(`compact market-catalog-v4.json is ${compactBytes} bytes — over the ${MAX_BYTES}-byte CDN cap; split or slim it before publishing`);
} else if (compactBytes > WARN_BYTES) {
  warnings.push(`compact market-catalog-v4.json is ${compactBytes} bytes — past the ${WARN_BYTES}-byte warning line`);
}
if (catalogBytes > 24 * 1000 * 1000) {
  errors.push(`legacy market-catalog.json is ${catalogBytes} bytes — over the 24 MB ceiling`);
} else if (catalogBytes > MAX_BYTES) {
  warnings.push(`legacy market-catalog.json is ${catalogBytes} bytes — past the 20 MB CDN documented cap`);
}
if (indexBytes > 0) {
  const INDEX_LIMIT = 5 * 1024 * 1024;
  const ratio = indexBytes / INDEX_LIMIT;
  if (ratio > 0.9) warnings.push(`subscription index is ${indexBytes} bytes — ${Math.round(ratio * 100)}% of the gateway's 5 MiB limit`);
}

if (errors.length) {
  console.error(`data/market-catalog.json failed validation with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
for (const warning of warnings) console.warn(`  ⚠ ${warning}`);

const total = catalog.entries.length;
console.log(
  `market catalog is valid — ${total} repositories ` +
    `(${counts.command} installable, ${counts.manual} manual, ${counts.none} catalog-only), ` +
    `${catalog.subscription.plugins.length} subscription plugins, ` +
    `v4=${(compactBytes / 1e6).toFixed(2)} MB / v3=${(catalogBytes / 1e6).toFixed(2)} MB, snapshot ${catalog.source_fetched_at}.`,
);
