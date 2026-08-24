#!/usr/bin/env node

// Validates data/curated.json and the README author-showcase sections before
// they reach main.
//
// category_overrides references are checked against the live GitHub API rather
// than data/repositories.json: the stored snapshot always lags behind, so a
// freshly submitted repository would otherwise look invalid. Archived or
// disabled repositories are not flagged — they stay listed in the catalog with
// their status, and their overrides remain meaningful. The exclusion list is
// intentionally not checked against the API: entries may be deleted or renamed,
// and keeping them out of the catalog by name is still correct.
//
// Two reference-checking modes:
//   - Live API (default): queries api.github.com/repos/* for every referenced
//     repository (category overrides + showcase). Transient failures (rate
//     limit 403/429, gateway 502/503/504) are retried with backoff and degrade
//     to warnings only when GitHub itself stays unavailable; a real 404 still
//     hard-fails. CI runs this mode with a token.
//   - --from-snapshot: checks references against the stored data/repositories.json
//     instead. The snapshot already proves existence, publicity, and the
//     dsh-plugin topic, so a reference missing from it is only warned about
//     (it may have been renamed/deleted after the last refresh, or added too
//     recently). Suitable for local runs without a token.
//
// The author-showcase (self-promotion) lists are parsed straight from the
// markdown. SHOWCASE.md carries the complete list for both languages (the
// source of truth, capped at 30 entries, first in first out); README.md and
// README_EN.md carry a preview of the 10 most recent entries on the home
// pages. All four sections must follow the documented line format, the
// previews must stay in sync with SHOWCASE.md, and every referenced repository
// is checked against the GitHub API exactly like a category override.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categoryKeys } from './categories.mjs';
import { fetchWithRetry, githubHeaders } from './github.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const validCategories = new Set(categoryKeys);
const ownerRepoPattern = /^[\w.-]+\/[\w.-]+$/;
const fromSnapshot = process.argv.includes('--from-snapshot');

let curated;
try {
  curated = JSON.parse(await readFile(resolve(root, 'data/curated.json'), 'utf8'));
} catch (error) {
  console.error(`data/curated.json could not be parsed: ${error.message}`);
  process.exit(1);
}

// fullName -> where it is referenced from; drives the API check below.
const referenced = new Map();

for (const [fullName, category] of Object.entries(curated.category_overrides || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`category_overrides key "${fullName}" is not a valid owner/repo reference`);
    continue;
  }
  if (!validCategories.has(category)) {
    errors.push(`category_overrides["${fullName}"]: unknown category "${category}" (valid: ${categoryKeys.join(', ')})`);
    continue;
  }
  referenced.set(fullName, 'category override');
}
const overrideCount = referenced.size;

for (const fullName of Object.keys(curated.excluded_repos || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`excluded_repos key "${fullName}" is not a valid owner/repo reference`);
  }
}

for (const fullName of Object.keys(curated.leaderboard_exclusions || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`leaderboard_exclusions key "${fullName}" is not a valid owner/repo reference`);
  }
}

for (const fullName of Object.keys(curated.market_exclusions || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`market_exclusions key "${fullName}" is not a valid owner/repo reference`);
  }
}

// data/approved.json is the maintainer's review gate: only approved repositories
// appear on CATALOG.md / TOP200.md. It must parse, hold valid owner/repo keys,
// and never overlap with excluded_repos (an excluded repository must not stay
// approved — scripts/merge.mjs would otherwise re-list it).
let approved = {};
try {
  approved = JSON.parse(await readFile(resolve(root, 'data/approved.json'), 'utf8'));
} catch (error) {
  errors.push(`data/approved.json could not be parsed: ${error.message}`);
}
const approvedNames = Object.keys(approved);
const excludedNames = new Set(Object.keys(curated.excluded_repos || {}).map((fullName) => fullName.toLowerCase()));
for (const fullName of approvedNames) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`approved.json key "${fullName}" is not a valid owner/repo reference`);
  }
  if (excludedNames.has(fullName.toLowerCase())) {
    errors.push(`approved.json entry "${fullName}" is also listed in excluded_repos — remove it from one of the two lists`);
  }
}

// --- Author showcase sections ----------------------------------------------
// SHOWCASE.md is the source of truth: one full list per language, then a
// header line and intro paragraph followed by one hand-maintained entry per
// line. The home pages (README.md / README_EN.md) carry only a preview of the
// most recent entries, parsed the same way.
const showcaseCap = 30;
const showcasePreviewCap = 10;
const showcaseEntryPattern =
  /^-\s+\*\*\[[^\]]+\]\(https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\)\*\*\s*[（(]\[@[\w.-]+\]\(https:\/\/github\.com\/[\w.-]+\)\s*·\s*(\d{4}-\d{2}-\d{2})[)）]\s*[—-]\s*\S/;

const showcaseFullFiles = [
  { file: 'SHOWCASE.md', header: '## 📣 作者自荐', label: 'zh' },
  { file: 'SHOWCASE.md', header: '## 📣 Author showcase', label: 'en' },
];
const showcasePreviewFiles = [
  { file: 'README.md', header: '## 📣 作者自荐', label: 'zh' },
  { file: 'README_EN.md', header: '## 📣 Author showcase', label: 'en' },
];
const showcaseMarkdowns = new Map();

async function readShowcaseMarkdown(file) {
  if (!showcaseMarkdowns.has(file)) {
    try {
      showcaseMarkdowns.set(file, await readFile(resolve(root, file), 'utf8'));
    } catch (error) {
      errors.push(`${file}: could not be read (${error.message})`);
      showcaseMarkdowns.set(file, '');
    }
  }
  return showcaseMarkdowns.get(file);
}

function parseShowcaseSection(markdown, file, header) {
  const lines = markdown.split('\n');
  const headerIndex = lines.indexOf(header);
  if (headerIndex === -1) {
    errors.push(`${file}: author-showcase section "${header}" is missing`);
    return null;
  }
  const sectionEnd = lines.findIndex((line, index) => index > headerIndex && line.startsWith('## '));
  const entries = lines
    .slice(headerIndex + 1, sectionEnd === -1 ? undefined : sectionEnd)
    .filter((line) => line.startsWith('- '));

  const repos = [];
  let wellFormed = true;
  for (const line of entries) {
    const match = line.match(showcaseEntryPattern);
    if (!match) {
      wellFormed = false;
      errors.push(`${file}: showcase entry does not follow the documented format: ${line.slice(0, 100)}`);
      continue;
    }
    const [, repo, date] = match;
    if (Number.isNaN(Date.parse(date))) {
      errors.push(`${file}: showcase entry for ${repo} has an invalid date "${date}"`);
    }
    if (repos.includes(repo)) {
      errors.push(`${file}: ${repo} appears more than once in the showcase`);
    }
    repos.push(repo);
    referenced.set(repo, 'author showcase');
  }
  return { entries, repos, wellFormed };
}

const showcaseReposByLabel = new Map();
for (const { file, header, label } of showcaseFullFiles) {
  const markdown = await readShowcaseMarkdown(file);
  const parsed = parseShowcaseSection(markdown, file, header);
  if (!parsed) continue;
  showcaseReposByLabel.set(`full:${label}`, parsed.repos);
  if (parsed.entries.length > showcaseCap) {
    errors.push(`${file}: showcase holds ${parsed.entries.length} entries, cap is ${showcaseCap} — drop the oldest (first in, first out)`);
  }
}
for (const { file, header, label } of showcasePreviewFiles) {
  const markdown = await readShowcaseMarkdown(file);
  const parsed = parseShowcaseSection(markdown, file, header);
  if (parsed) showcaseReposByLabel.set(`preview:${label}`, parsed.repos);
}

if (showcaseReposByLabel.has('full:zh') && showcaseReposByLabel.has('full:en')) {
  if (showcaseReposByLabel.get('full:zh').join() !== showcaseReposByLabel.get('full:en').join()) {
    errors.push('SHOWCASE.md zh/en sections list different repositories or orders — keep both sections in sync');
  }
}
for (const label of ['zh', 'en']) {
  const fullList = showcaseReposByLabel.get(`full:${label}`);
  const preview = showcaseReposByLabel.get(`preview:${label}`);
  if (!fullList || !preview) continue;
  const expected = fullList.slice(-showcasePreviewCap);
  if (preview.join() !== expected.join()) {
    errors.push(
      `${label === 'zh' ? 'README.md' : 'README_EN.md'}: the home-page showcase preview must show the ${showcasePreviewCap} most recent SHOWCASE.md entries in order — keep it in sync`,
    );
  }
}
const showcaseCount = new Set(
  ['zh', 'en'].flatMap((label) => showcaseReposByLabel.get(`full:${label}`) ?? []),
).size;

const headers = githubHeaders();

// In --from-snapshot mode the live API is replaced by the stored topic snapshot
// (data/repositories.json). The snapshot already proves existence, publicity,
// and the dsh-plugin topic; only a rename / deletion that landed after the last
// snapshot refresh is indistinguishable from a brand-new repository, so those
// cases degrade to warnings instead of hard failures. CI keeps the live API
// (it has a token and the freshest data); local runs can use the snapshot.
if (fromSnapshot) {
  let snapshot;
  try {
    snapshot = JSON.parse(await readFile(resolve(root, 'data/repositories.json'), 'utf8'));
  } catch (error) {
    console.error(`--from-snapshot requires data/repositories.json — run "node scripts/update.mjs" first (${error.message})`);
    process.exit(1);
  }
  const snapshotNames = new Map(
    snapshot.repositories.map((repo) => [repo.full_name.toLowerCase(), repo]),
  );
  const label = (fullName) => referenced.get(fullName) ?? 'reference';
  for (const fullName of referenced.keys()) {
    const repo = snapshotNames.get(fullName.toLowerCase());
    if (!repo) {
      warnings.push(
        `${fullName}: not present in the stored snapshot (${label(fullName)}) — deleted, renamed after the last refresh, or added too recently; verify against the live API`,
      );
      continue;
    }
    if (!(repo.topics || []).includes('dsh-plugin')) {
      errors.push(`${fullName}: missing the "dsh-plugin" topic in the stored snapshot (${label(fullName)})`);
    }
    if (repo.archived || repo.disabled) {
      warnings.push(`${fullName}: archived or disabled in the stored snapshot (${label(fullName)})`);
    }
  }
} else {
  // Live mode: transient API failures (rate limit / 504) are retried with
  // backoff inside fetchWithRetry (scripts/github.mjs, shared with update.mjs),
  // and degrade to warnings only when GitHub itself stays unavailable — a
  // repository that is really gone still hard-fails with 404.
  await Promise.all([...referenced.keys()].map(async (fullName) => {
    const label = referenced.get(fullName);
    let response;
    try {
      response = await fetchWithRetry(`https://api.github.com/repos/${fullName}`, { headers });
    } catch (error) {
      warnings.push(`${fullName}: GitHub API unreachable (${error.message}) — skipped, re-run when the network/API recovers (${label})`);
      return;
    }
    if (response.status === 404) {
      errors.push(`${fullName}: repository not found — deleted, renamed, or not public`);
      return;
    }
    if (response.status === 403 || response.status === 429 || response.status === 502 || response.status === 503 || response.status === 504) {
      warnings.push(`${fullName}: GitHub API ${response.status} after retries — skipped, re-run when the rate limit recovers (${label})`);
      return;
    }
    if (!response.ok) {
      errors.push(`${fullName}: GitHub API ${response.status} ${await response.text()}`);
      return;
    }
    const repo = await response.json();
    if (repo.private) errors.push(`${fullName}: repository is private`);
    if (!(repo.topics || []).includes('dsh-plugin')) {
      errors.push(`${fullName}: missing the "dsh-plugin" topic (${label})`);
    }
    if (repo.full_name.toLowerCase() !== fullName.toLowerCase()) {
      errors.push(`${fullName}: repository was renamed to "${repo.full_name}" — update the reference`);
    }
  }));
}

if (errors.length) {
  console.error(`validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

if (warnings.length) {
  console.warn(`validation passed with ${warnings.length} warning(s):\n`);
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

const mode = fromSnapshot ? 'the stored snapshot' : 'the GitHub API';
console.log(`data/curated.json, data/approved.json, and the showcase sections are valid — ${overrideCount} category overrides, ${approvedNames.length} approved repositories, and ${showcaseCount} showcase repositories checked against ${mode} (${errors.length} errors, ${warnings.length} warnings).`);
