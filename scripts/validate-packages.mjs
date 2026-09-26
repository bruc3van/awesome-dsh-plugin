#!/usr/bin/env node

// Validates data/packages.json — the hand-maintained install-target mapping
// (repo slug → exact `dsh plugin` command / npm package / install source,
// plus requirements and verification status). Unlike every other data file
// under data/, this one is written only by humans and AI assistants, never
// regenerated, so this offline pass is what keeps it honest:
//
//   - envelope and entry schema (statuses, dates, install modes)
//   - keys are lowercase owner/repo slugs that exist in the current snapshot
//     (a renamed or deleted repo must have its key fixed, like pending.md
//     rename handling)
//   - keys never point at excluded_repos entries
//   - each package's command actually contains its declared source (the
//     coherence of the "copy this" line users will paste)
//
// Warnings cover soft mismatches (not yet approved, catalog-only repos,
// github sources outside the snapshot). A later CI stage can add upstream
// re-verification — fetch each repo's README and confirm the documented
// command still matches what we recorded; this pass deliberately stays
// offline and dependency-free.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { installRef } from './readme-install.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const [rawPackages, curatedRaw, snapshotRaw] = await Promise.all([
  readFile(resolve(root, 'data/packages.json'), 'utf8'),
  readFile(resolve(root, 'data/curated.json'), 'utf8'),
  readFile(resolve(root, 'data/repositories.json'), 'utf8'),
]);

const curated = JSON.parse(curatedRaw);
const snapshot = JSON.parse(snapshotRaw);

let packages;
try {
  packages = JSON.parse(rawPackages);
} catch (error) {
  console.error(`data/packages.json could not be parsed: ${error.message}`);
  process.exit(1);
}

const LOWER_SLUG = /^[a-z0-9._-]+\/[a-z0-9._-]+$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SOURCE_KIND = /^(npm|github|url|link):(.+)$/;
const STATUSES = new Set(['readme-verified', 'install-verified', 'repo-fallback', 'unverified']);

const snapshotNames = new Set(
  (snapshot.repositories || []).map((repo) => String(repo.full_name).toLowerCase()),
);
const excludedNames = new Set(
  Object.keys(curated.excluded_repos || {}).map((key) => key.toLowerCase()),
);
const leaderboardNames = new Set(
  Object.keys(curated.leaderboard_exclusions || {}).map((key) => key.toLowerCase()),
);
const marketExcludedNames = new Set(
  Object.keys(curated.market_exclusions || {}).map((key) => key.toLowerCase()),
);

if (packages === null || typeof packages !== 'object' || Array.isArray(packages)) {
  console.error('data/packages.json must be a JSON object');
  process.exit(1);
}
if (packages.schema_version !== 1) errors.push(`schema_version must be 1, got ${packages.schema_version}`);
const entries = packages.entries;
if (entries === null || typeof entries !== 'object' || Array.isArray(entries)) {
  console.error(`data/packages.json entries must be an object — ${errors.length} structural errors above`);
  process.exit(1);
}

const stringList = (entry, key, slug) => {
  const value = entry[key];
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || !item.trim())) {
    errors.push(`${slug}: ${key} must be an array of non-empty strings`);
    return [];
  }
  return value;
};

let packageCount = 0;

for (const [slug, entry] of Object.entries(entries)) {
  if (!LOWER_SLUG.test(slug)) {
    errors.push(`${slug}: key must be a lowercase owner/repo slug`);
    continue;
  }
  if (entry === null || typeof entry !== 'object' || Array.isArray(entry)) {
    errors.push(`${slug}: entry must be an object`);
    continue;
  }

  const status = entry.status;
  if (!STATUSES.has(status)) {
    errors.push(`${slug}: status must be one of ${[...STATUSES].join(' / ')}, got ${JSON.stringify(status)}`);
  } else if (status !== 'unverified') {
    if (!DATE.test(entry.verified_date ?? '')) {
      errors.push(`${slug}: verified_date must be YYYY-MM-DD when status is ${status}`);
    } else if (entry.verified_date > new Date().toISOString().slice(0, 10)) {
      errors.push(`${slug}: verified_date ${entry.verified_date} is in the future`);
    }
    if (typeof entry.verified_via !== 'string' || !entry.verified_via.trim()) {
      errors.push(`${slug}: verified_via must be a non-empty string when status is ${status}`);
    }
  }

  stringList(entry, 'requirements', slug);
  stringList(entry, 'tasks', slug);
  for (const field of ['note', 'manual_instructions']) {
    if (field in entry && (typeof entry[field] !== 'string' || !entry[field].trim())) {
      errors.push(`${slug}: ${field} must be a non-empty string when present`);
    }
  }

  const installMode = entry.install_mode ?? 'command';
  if (installMode !== 'command' && installMode !== 'manual') {
    errors.push(`${slug}: install_mode must be "command" or "manual", got ${JSON.stringify(installMode)}`);
    continue;
  }

  if (installMode === 'manual') {
    if (typeof entry.manual_instructions !== 'string' || !entry.manual_instructions.trim()) {
      errors.push(`${slug}: manual install needs manual_instructions`);
    }
    if ((entry.packages ?? []).length > 0) {
      errors.push(`${slug}: install_mode "manual" must not declare packages`);
    }
    continue;
  }

  const pkgs = entry.packages;
  if (!Array.isArray(pkgs) || pkgs.length === 0) {
    errors.push(`${slug}: command install needs a non-empty packages array`);
    continue;
  }
  for (const [index, pkg] of pkgs.entries()) {
    const where = `${slug} packages[${index}]`;
    packageCount += 1;
    if (typeof pkg.command !== 'string' || !pkg.command.includes('plugin')) {
      errors.push(`${where}: command must be a dsh plugin install command`);
    } else if (/[<>]/.test(pkg.command)) {
      errors.push(`${where}: command contains placeholder syntax (<…>) — quote it via install_mode "manual" instead of publishing it as copyable`);
    }
    if (typeof pkg.profile !== 'string' || !pkg.profile.trim()) {
      errors.push(`${where}: profile must be a non-empty string`);
    }
    const source = typeof pkg.source === 'string' ? pkg.source : '';
    const match = SOURCE_KIND.exec(source);
    if (!match) {
      errors.push(`${where}: source must look like npm:… / github:… / url:… / link:…`);
      continue;
    }
    const [, kind, payload] = match;
    // The command users copy must carry the exact thing it installs — the
    // npm name, the github slug, or the URL. link: sources are local paths,
    // so there is nothing stable to cross-check.
    if (kind !== 'link' && typeof pkg.command === 'string' && !pkg.command.includes(payload)) {
      errors.push(`${where}: command does not contain its ${kind}: source (${payload})`);
    }
    // install is the string the official "添加插件" box recognizes: the npm
    // package name (version included) or the Git repository URL — derived
    // from source via the shared installRef rule.
    const expectedInstall = installRef(source);
    if (pkg.install === undefined) {
      errors.push(`${where}: install is required — the paste-ready install name (expected "${expectedInstall}")`);
    } else if (pkg.install !== expectedInstall) {
      errors.push(`${where}: install must be "${expectedInstall}", got ${JSON.stringify(pkg.install)}`);
    } else if (kind === 'github') {
      // The box takes the repo URL while the command keeps the CLI ref
      // (github:owner/repo[#ref]) — both must at least agree on the slug.
      if (!pkg.command.includes(payload.split('#')[0])) {
        errors.push(`${where}: command does not reference the repo of its source (${payload})`);
      }
    }
    // github:owner/repo#ref — the ref suffix is not part of the slug.
    if (kind === 'github' && !snapshotNames.has(payload.split('#')[0].toLowerCase())) {
      warnings.push(`${where}: github source ${payload} is not in the snapshot (cross-org / renamed source?)`);
    }
  }

  if (!snapshotNames.has(slug)) {
    errors.push(`${slug}: not in the current snapshot — renamed or deleted repo, fix the key`);
  }
  if (excludedNames.has(slug)) {
    errors.push(`${slug}: excluded_repos entry must not carry a packages mapping`);
  }
  if (leaderboardNames.has(slug) || marketExcludedNames.has(slug)) {
    warnings.push(`${slug}: catalog-only repo (leaderboard/market-excluded) — recorded, but it will not appear in market.json`);
  }
}

if (errors.length) {
  console.error(`data/packages.json: ${errors.length} error(s)`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(
  `data/packages.json: ${Object.keys(entries).length} entries, ${packageCount} packages — OK` +
    (warnings.length ? ` (${warnings.length} warning(s))` : ''),
);
for (const warning of warnings) console.warn(`  ⚠ ${warning}`);
