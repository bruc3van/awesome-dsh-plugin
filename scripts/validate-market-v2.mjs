#!/usr/bin/env node

// Validate pool identity, wire fields, install mappings and featured data
// against their owning sources. No legacy feed participates in validation.

import './validate-market-entries.mjs';
import { buildMarket } from './market-pool.mjs';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { featuredBlockFor, MAX_FILE_BYTES, packagesBlockFor, V2_SCHEMA_VERSION } from './market-v2.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const [rawV2, snapshot, curated, approved, packages, featured] = await Promise.all([
  readFile(resolve(root, 'data/market-v2.json'), 'utf8'),
  readFile(resolve(root, 'data/repositories.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/curated.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/approved.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/featured.json'), 'utf8')
    .then(JSON.parse)
    .catch((error) => {
      if (error.code !== 'ENOENT') throw error;
      return null;
    }),
]);

let v2;
try {
  v2 = JSON.parse(rawV2);
} catch (error) {
  console.error(`data/market-v2.json could not be parsed: ${error.message}`);
  process.exit(1);
}

const pool = buildMarket({ snapshot, curated, approved });
if (pool.outcome === 'aborted') {
  console.error(`Market pool validation failed: ${pool.reason}`);
  process.exit(1);
}
const market = pool.envelope;

const bytes = Buffer.byteLength(rawV2, 'utf8');
if (bytes > MAX_FILE_BYTES) {
  errors.push(`file is ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap`);
}

// Envelope: v2 counters must mirror the reviewed pool.
if (v2?.schema_version !== V2_SCHEMA_VERSION) {
  errors.push(`schema_version must be ${V2_SCHEMA_VERSION}, got ${JSON.stringify(v2?.schema_version)}`);
}
for (const field of ['source_fetched_at', 'source_repo_count', 'pool_count']) {
  if (JSON.stringify(v2?.[field]) !== JSON.stringify(market[field])) {
    errors.push(`${field} must mirror the reviewed pool (${JSON.stringify(market[field])}), got ${JSON.stringify(v2?.[field])}`);
  }
}
if (typeof v2?.generated_at !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(v2.generated_at)) {
  errors.push('generated_at must be an ISO-8601 UTC timestamp');
}

// The join: same entry count, same order, pool fields untouched, packages
// blocks exactly where the mapping says and equal to the recomputed wire
// transform of the packages.json record.
const mapping = packages?.entries ?? {};
const recordBySlug = new Map(Object.keys(mapping).map((key) => [key.toLowerCase(), mapping[key]]));
const inFeed = new Set((market.entries ?? []).map((entry) => String(entry.full_name).toLowerCase()));
const expectedSlugs = new Set([...recordBySlug.keys()].filter((slug) => inFeed.has(slug)));

let blockCount = 0;
const v2Entries = v2?.entries;
if (!Array.isArray(v2Entries)) {
  errors.push('entries must be an array');
} else if (v2Entries.length !== market.entries.length) {
  errors.push(`entries must hold the reviewed pool's ${market.entries.length} entries, got ${v2Entries.length}`);
} else {
  const seenSlugs = new Set();
  v2Entries.forEach((entry, index) => {
    const base = market.entries[index];
    const slug = String(base.full_name).toLowerCase();
    for (const [field, value] of Object.entries(base)) {
      if (JSON.stringify(entry[field]) !== JSON.stringify(value)) {
        errors.push(`entries[${index}] (${base.full_name}): pool field ${field} was altered — published fields must match the reviewed pool`);
      }
    }
    const extraKeys = Object.keys(entry).filter((key) => !(key in base) && key !== 'packages');
    if (extraKeys.length > 0) {
      errors.push(`entries[${index}] (${base.full_name}): unknown extra field(s) ${extraKeys.join(', ')}`);
    }

    if (!('packages' in entry)) {
      if (expectedSlugs.has(slug)) {
        errors.push(`entries[${index}] (${base.full_name}): mapping exists in packages.json but the entry carries no packages block`);
      }
      return;
    }
    blockCount += 1;
    seenSlugs.add(slug);
    if (!expectedSlugs.has(slug)) {
      errors.push(`entries[${index}] (${base.full_name}): packages block present but packages.json has no mapping for it`);
      return;
    }
    try {
      const expected = packagesBlockFor(recordBySlug.get(slug));
      if (JSON.stringify(entry.packages) !== JSON.stringify(expected)) {
        errors.push(`entries[${index}] (${base.full_name}): packages block does not match the packages.json record (recomputed)`);
      }
    } catch (error) {
      errors.push(`entries[${index}] (${base.full_name}): packages.json record fails the wire transform — ${error.message}`);
    }
  });
  for (const slug of expectedSlugs) {
    if (!seenSlugs.has(slug)) errors.push(`${slug}: expected a packages block on its feed entry, found none`);
  }
}

if (v2?.packages_mapped_count !== blockCount) {
  errors.push(`packages_mapped_count must be ${blockCount} (the blocks actually present), got ${JSON.stringify(v2?.packages_mapped_count)}`);
}

for (const slug of Object.keys(mapping)) {
  if (!inFeed.has(slug.toLowerCase())) {
    warnings.push(`${slug}: mapping recorded, but the repo is not in the published feed — available via data/packages.json, not via the feed`);
  }
}

// The featured section: recompute the whole block from its source and demand
// equality — order and the inline packages blocks of picks outside the feed
// are editorial decisions that must round-trip through data/featured.json,
// never through the published file.
if (featured !== null) {
  try {
    const recordByLower = new Map(Object.entries(mapping).map(([slug, record]) => [slug.toLowerCase(), record]));
    const { block: expectedFeatured, warnings: featuredWarnings } = featuredBlockFor(
      featured,
      (lower) => recordByLower.get(lower),
      inFeed,
    );
    for (const warning of featuredWarnings) warnings.push(warning);
    if (!v2?.featured) {
      errors.push('featured: data/featured.json exists but the v2 feed carries no featured block — rebuild data/market-v2.json');
    } else {
      if (JSON.stringify(v2.featured) !== JSON.stringify(expectedFeatured)) {
        errors.push('featured: block does not match the recomputed projection of data/featured.json + data/packages.json (order, reasons, or inline packages drifted)');
      }
      if (v2.featured_count !== expectedFeatured.entries.length) {
        errors.push(`featured_count must be ${expectedFeatured.entries.length}, got ${JSON.stringify(v2.featured_count)}`);
      }
    }
  } catch (error) {
    errors.push(`featured: data/featured.json fails the wire transform — ${error.message}`);
  }
} else if (v2?.featured) {
  errors.push('featured: v2 feed carries a featured block but data/featured.json is missing — rebuild from the source instead of trusting the published file');
}

if (errors.length) {
  console.error(`data/market-v2.json: ${errors.length} error(s)`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(
  `data/market-v2.json: ${v2Entries.length} entries, ${blockCount} packages blocks, ${v2?.featured ? `${v2.featured.entries.length} featured picks, ` : ''}${bytes} bytes — matches snapshot + curation + packages.json${featured !== null ? ' + featured.json' : ''}`,
);
for (const warning of warnings) console.warn(`  ⚠ ${warning}`);
