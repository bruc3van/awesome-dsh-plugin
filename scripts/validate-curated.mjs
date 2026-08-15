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
// The author-showcase (self-promotion) sections in README.md and README_EN.md
// are parsed straight from the markdown: both pages must carry the section,
// entries must follow the documented line format, stay within the FIFO cap,
// list the same repositories in the same order, and every referenced repository
// is checked against the GitHub API exactly like a category override.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categoryKeys } from './categories.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const validCategories = new Set(categoryKeys);
const ownerRepoPattern = /^[\w.-]+\/[\w.-]+$/;

const showcaseCap = 30;
const showcaseEntryPattern =
  /^-\s+\*\*\[[^\]]+\]\(https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\)\*\*\s*[（(]\[@[\w.-]+\]\(https:\/\/github\.com\/[\w.-]+\)\s*·\s*(\d{4}-\d{2}-\d{2})[)）]\s*[—-]\s*\S/;

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

// --- Author showcase sections ----------------------------------------------
// Each README carries one showcase section: a header line, an intro paragraph,
// then one hand-maintained entry per line. The markdown is the source of truth,
// so it is parsed here rather than duplicated into curated.json.
const showcaseFiles = [
  { file: 'README.md', header: '## 📣 作者自荐' },
  { file: 'README_EN.md', header: '## 📣 Author showcase' },
];
const showcaseReposByFile = new Map();
let showcaseEntriesAreWellFormed = true;

for (const { file, header } of showcaseFiles) {
  let markdown;
  try {
    markdown = await readFile(resolve(root, file), 'utf8');
  } catch (error) {
    errors.push(`${file}: could not be read (${error.message})`);
    continue;
  }

  const lines = markdown.split('\n');
  const headerIndex = lines.indexOf(header);
  if (headerIndex === -1) {
    errors.push(`${file}: author-showcase section "${header}" is missing`);
    continue;
  }
  const sectionEnd = lines.findIndex((line, index) => index > headerIndex && line.startsWith('## '));
  const entries = lines
    .slice(headerIndex + 1, sectionEnd === -1 ? undefined : sectionEnd)
    .filter((line) => line.startsWith('- '));

  const repos = [];
  for (const line of entries) {
    const match = line.match(showcaseEntryPattern);
    if (!match) {
      showcaseEntriesAreWellFormed = false;
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
  if (entries.length > showcaseCap) {
    errors.push(`${file}: showcase holds ${entries.length} entries, cap is ${showcaseCap} — drop the oldest (first in, first out)`);
  }
  showcaseReposByFile.set(file, repos);
}

const showcaseRepoLists = showcaseFiles.map(({ file }) => showcaseReposByFile.get(file) ?? []);
if (showcaseEntriesAreWellFormed && showcaseRepoLists.length === 2) {
  const [zhRepos, enRepos] = showcaseRepoLists;
  if (zhRepos.join() !== enRepos.join()) {
    errors.push('README.md and README_EN.md showcase sections list different repositories or orders — keep both pages in sync');
  }
}
const showcaseCount = new Set(showcaseRepoLists.flat()).size;

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'awesome-dsh-plugin',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

await Promise.all([...referenced.keys()].map(async (fullName) => {
  const label = referenced.get(fullName);
  let response;
  try {
    response = await fetch(`https://api.github.com/repos/${fullName}`, { headers });
  } catch (error) {
    errors.push(`${fullName}: GitHub API request failed (${error.message})`);
    return;
  }
  if (response.status === 404) {
    errors.push(`${fullName}: repository not found — deleted, renamed, or not public`);
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

if (errors.length) {
  console.error(`validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`data/curated.json and the README showcase sections are valid — ${overrideCount} category overrides and ${showcaseCount} showcase repositories checked against the GitHub API.`);
