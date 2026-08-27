#!/usr/bin/env node

// Regenerate ONLY the author-showcase preview regions of README.md and
// README_EN.md from SHOWCASE.md's most recent entries.
//
// updateReadmePages() in render.mjs does this too, but it needs the full
// review-merge state (catalog, board, snapshot) and also stamps the review
// queue with a fresh generated_at — side effects nobody wants just because a
// showcase entry landed on main. This script is the showcase slice alone: no
// data files are read, nothing else is written.
//
// refresh-showcase.yml runs it whenever SHOWCASE.md changes on main, so a
// merged showcase PR shows up on the home pages immediately instead of at the
// next review merge. That closes the window that tempts contributors into
// hand-editing the generated region (CONTRIBUTING forbids it, and
// validate-curated.mjs enforces preview == SHOWCASE.md tail once merged —
// on pull requests a lagging preview only warns).

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SHOWCASE_END,
  SHOWCASE_PREVIEW,
  SHOWCASE_START,
  loadShowcase,
  replaceRegion,
} from './render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const warnings = [];
const showcase = await loadShowcase(warnings);

const pages = [
  {
    path: resolve(root, 'README.md'),
    label: 'README.md',
    entries: showcase && showcase.zh,
    totalPattern: /查看全部 \d+ 条自荐/,
    totalReplacement: showcase && `查看全部 ${showcase.total} 条自荐`,
  },
  {
    path: resolve(root, 'README_EN.md'),
    label: 'README_EN.md',
    entries: showcase && showcase.en,
    totalPattern: /See all \d+ showcase entries/,
    totalReplacement: showcase && `See all ${showcase.total} showcase entries`,
  },
];

const updated = [];
for (const page of pages) {
  if (!page.entries) continue;
  let content = await readFile(page.path, 'utf8');
  const before = content;
  content = replaceRegion(
    content,
    SHOWCASE_START,
    SHOWCASE_END,
    page.entries.slice(-SHOWCASE_PREVIEW).join('\n'),
    `${page.label} showcase`,
    warnings,
  );
  if (page.totalPattern.test(content)) content = content.replace(page.totalPattern, page.totalReplacement);
  else warnings.push(`${page.label}: showcase "see all N" link not found — count left untouched`);
  if (content !== before) {
    await writeFile(page.path, content);
    updated.push(page.label);
  }
}

for (const warning of warnings) console.warn(`warning: ${warning}`);
if (updated.length) console.log(`Showcase previews refreshed in ${updated.join(', ')}.`);
else console.log('Showcase previews already current — nothing to update.');
