#!/usr/bin/env node

// Validates data/market-v2.json against its two sources. v2 is a generated
// projection of the published v1 feed + data/packages.json, so the strongest
// possible check is recomputation: rebuild every piece with the same exported
// transform (packagesBlockFor) and demand byte-level structural equality.
// A hand-edited market-v2.json — a tweaked command, an extra entry, a dropped
// requirements list — can never survive that. Beyond the join, this pass also
// checks the envelope (schema v2, source counters mirrored from v1, mapped
// count honest) and the size cap.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAX_FILE_BYTES, packagesBlockFor, V2_SCHEMA_VERSION } from './market-v2.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const [rawV2, market, packages] = await Promise.all([
  readFile(resolve(root, 'data/market-v2.json'), 'utf8'),
  readFile(resolve(root, 'data/market.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
]);

let v2;
try {
  v2 = JSON.parse(rawV2);
} catch (error) {
  console.error(`data/market-v2.json could not be parsed: ${error.message}`);
  process.exit(1);
}

const bytes = Buffer.byteLength(rawV2, 'utf8');
if (bytes > MAX_FILE_BYTES) {
  errors.push(`file is ${bytes} bytes, over the ${MAX_FILE_BYTES}-byte cap`);
}

// Envelope: v2 counters must mirror the v1 feed it extends.
if (v2?.schema_version !== V2_SCHEMA_VERSION) {
  errors.push(`schema_version must be ${V2_SCHEMA_VERSION}, got ${JSON.stringify(v2?.schema_version)}`);
}
for (const field of ['source_fetched_at', 'source_repo_count', 'pool_count']) {
  if (JSON.stringify(v2?.[field]) !== JSON.stringify(market[field])) {
    errors.push(`${field} must mirror the v1 feed (${JSON.stringify(market[field])}), got ${JSON.stringify(v2?.[field])}`);
  }
}
if (typeof v2?.generated_at !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(v2.generated_at)) {
  errors.push('generated_at must be an ISO-8601 UTC timestamp');
} else if (v2.generated_at < market.generated_at) {
  warnings.push(`generated_at ${v2.generated_at} predates the v1 feed's ${market.generated_at} — v2 was not rebuilt after the last v1 publish`);
}

// The join: same entry count, same order, v1 fields untouched, packages
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
  errors.push(`entries must hold the v1 feed's ${market.entries.length} entries, got ${v2Entries.length}`);
} else {
  const seenSlugs = new Set();
  v2Entries.forEach((entry, index) => {
    const v1 = market.entries[index];
    const slug = String(v1.full_name).toLowerCase();
    for (const [field, value] of Object.entries(v1)) {
      if (JSON.stringify(entry[field]) !== JSON.stringify(value)) {
        errors.push(`entries[${index}] (${v1.full_name}): v1 field ${field} was altered — v2 must extend the v1 feed, never rewrite it`);
      }
    }
    const extraKeys = Object.keys(entry).filter((key) => !(key in v1) && key !== 'packages');
    if (extraKeys.length > 0) {
      errors.push(`entries[${index}] (${v1.full_name}): unknown extra field(s) ${extraKeys.join(', ')}`);
    }

    if (!('packages' in entry)) {
      if (expectedSlugs.has(slug)) {
        errors.push(`entries[${index}] (${v1.full_name}): mapping exists in packages.json but the entry carries no packages block`);
      }
      return;
    }
    blockCount += 1;
    seenSlugs.add(slug);
    if (!expectedSlugs.has(slug)) {
      errors.push(`entries[${index}] (${v1.full_name}): packages block present but packages.json has no mapping for it`);
      return;
    }
    try {
      const expected = packagesBlockFor(recordBySlug.get(slug));
      if (JSON.stringify(entry.packages) !== JSON.stringify(expected)) {
        errors.push(`entries[${index}] (${v1.full_name}): packages block does not match the packages.json record (recomputed)`);
      }
    } catch (error) {
      errors.push(`entries[${index}] (${v1.full_name}): packages.json record fails the wire transform — ${error.message}`);
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

if (errors.length) {
  console.error(`data/market-v2.json: ${errors.length} error(s)`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(
  `data/market-v2.json: ${v2Entries.length} entries, ${blockCount} packages blocks, ${bytes} bytes — matches market.json + packages.json`,
);
for (const warning of warnings) console.warn(`  ⚠ ${warning}`);
