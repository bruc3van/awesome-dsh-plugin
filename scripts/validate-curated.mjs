#!/usr/bin/env node

// Validates data/curated.json before it reaches main.
//
// Repository references are checked against the live GitHub API rather than
// data/repositories.json: the stored snapshot always lags behind, so a freshly
// submitted repository would otherwise look invalid.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categoryKeys } from './categories.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const validCategories = new Set(categoryKeys);

let curated;
try {
  curated = JSON.parse(await readFile(resolve(root, 'data/curated.json'), 'utf8'));
} catch (error) {
  console.error(`data/curated.json could not be parsed: ${error.message}`);
  process.exit(1);
}

for (const [fullName, category] of Object.entries(curated.category_overrides || {})) {
  if (!validCategories.has(category)) {
    errors.push(`category_overrides["${fullName}"]: unknown category "${category}" (valid: ${categoryKeys.join(', ')})`);
  }
}

const referenced = new Set();

function checkEntry(entry, label, fields) {
  for (const field of fields) {
    const value = entry[field];
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && !value.length)) {
      errors.push(`${label}: missing or empty "${field}"`);
    }
  }
  for (const fullName of entry.repos || (entry.repo ? [entry.repo] : [])) {
    if (typeof fullName !== 'string' || !/^[\w.-]+\/[\w.-]+$/.test(fullName)) {
      errors.push(`${label}: "${fullName}" is not a valid owner/repo reference`);
      continue;
    }
    referenced.add(fullName);
  }
}

(curated.scenarios || []).forEach((item, index) =>
  checkEntry(item, `scenarios[${index}]`, ['goal_zh', 'goal_en', 'why_zh', 'why_en', 'repos']));
(curated.starter_kits || []).forEach((kit, index) =>
  checkEntry(kit, `starter_kits[${index}]`, ['title_zh', 'title_en', 'summary_zh', 'summary_en', 'repos']));
(curated.editor_picks || []).forEach((pick, index) =>
  checkEntry(pick, `editor_picks[${index}]`, ['repo', 'title_zh', 'title_en', 'summary_zh', 'summary_en', 'labels_zh', 'labels_en']));

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'awesome-dsh-plugin',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

await Promise.all([...referenced].map(async (fullName) => {
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
  if (repo.archived) errors.push(`${fullName}: repository is archived`);
  if (repo.disabled) errors.push(`${fullName}: repository is disabled`);
  if (!(repo.topics || []).includes('dsh-plugin')) {
    errors.push(`${fullName}: missing the "dsh-plugin" topic, so it never enters the catalog snapshot`);
  }
  if (repo.full_name.toLowerCase() !== fullName.toLowerCase()) {
    errors.push(`${fullName}: repository was renamed to "${repo.full_name}" — update the reference`);
  }
}));

if (errors.length) {
  console.error(`data/curated.json validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`data/curated.json is valid — ${referenced.size} referenced repositories checked against the GitHub API.`);
