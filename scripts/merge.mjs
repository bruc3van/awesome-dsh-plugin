#!/usr/bin/env node

// Review merge: regenerates the human-facing pages (CATALOG.md, TOP200.md) and
// the review queue after the maintainer has reviewed data/review/pending.* and
// recorded decisions in data/approved.json and data/curated.json.
//
// This is the only place the user-facing pages are written. The daily
// workflow (scripts/update.mjs) only refreshes the raw snapshot and the
// review queue — nothing users see changes without this script running.

import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CATALOG_DIR,
  buildBoard,
  buildCatalog,
  computePending,
  loadState,
  updateReadmePages,
  writePending,
} from './render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TOP_N = Number(process.env.TOP_N ?? 200);

// --check answers one question for CI: do the published pages still agree with
// the curation data, i.e. did someone change approved.json / curated.json and
// forget to re-run this script?
//
// It deliberately compares catalog membership plus the index structure, not
// bytes. The volume pages embed star counts and the snapshot date, and the daily
// workflow moves both every single day — so a byte-level `git diff
// --exit-code` would fail on every PR that happens to run after a snapshot
// refresh, reporting churn instead of drift. The set only moves when curation
// moves, which is exactly the mistake worth catching.
const checkOnly = process.argv.includes('--check');

async function readPublishedVolumes() {
  let names;
  try {
    names = await readdir(resolve(root, CATALOG_DIR));
  } catch {
    return null;
  }
  const published = new Map();
  const volumeCounts = new Map();
  const duplicates = [];
  for (const name of names) {
    if (!name.endsWith('.md')) continue;
    const key = name.slice(0, -'.md'.length);
    const text = await readFile(resolve(root, CATALOG_DIR, name), 'utf8');
    let count = 0;
    for (const match of text.matchAll(/^\| \[([^\]]+)\]\(/gm)) {
      count += 1;
      if (published.has(match[1])) duplicates.push(`${match[1]}: ${published.get(match[1])}, ${key}`);
      else published.set(match[1], key);
    }
    volumeCounts.set(key, count);
  }
  return { published, volumeCounts, duplicates };
}

async function readPublishedIndex() {
  let text;
  try {
    text = await readFile(resolve(root, 'CATALOG.md'), 'utf8');
  } catch {
    return null;
  }
  const volumes = new Map();
  const duplicates = [];
  for (const match of text.matchAll(/^\| \[[^\]]+\]\(\.\/catalog\/([^)]+)\.md\) \| (\d+) \|$/gm)) {
    const key = match[1];
    if (volumes.has(key)) duplicates.push(key);
    else volumes.set(key, Number(match[2]));
  }
  const totalMatch = text.match(/^- Repositories: \*\*(\d+)\*\*$/m);
  return { volumes, duplicates, total: totalMatch ? Number(totalMatch[1]) : null };
}

const state = await loadState();
const { catalog, pages, stats, warnings, oversized } = buildCatalog(state);

if (checkOnly) {
  const volumeState = await readPublishedVolumes();
  if (!volumeState || volumeState.published.size === 0) {
    console.error(`No catalog volumes found under ${CATALOG_DIR}/ — run "node scripts/merge.mjs".`);
    process.exit(1);
  }
  const { published, volumeCounts, duplicates } = volumeState;
  const index = await readPublishedIndex();
  const expected = new Map();
  for (const page of pages) {
    for (const fullName of page.entries) expected.set(fullName, page.key);
  }
  const snapshotNames = new Set(state.snapshot.repositories.map((repo) => repo.full_name.toLowerCase()));
  const added = [];
  const removed = [];
  const recategorised = [];
  const vanished = [];
  const indexErrors = [];
  const sample = (list) => list.slice(0, 10).map((item) => `    - ${item}`).join('\n') + (list.length > 10 ? `\n    … and ${list.length - 10} more` : '');
  for (const [fullName, key] of expected) {
    const previous = published.get(fullName);
    if (!previous) added.push(fullName);
    else if (previous !== key) recategorised.push(`${fullName}: ${previous} -> ${key}`);
  }
  for (const [fullName] of published) {
    if (expected.has(fullName)) continue;
    // Listed on a page but no longer in the catalog: a repository that dropped
    // out of the snapshot (deleted / renamed upstream) is a data fact the
    // maintainer resolves through the review queue, not a forgotten merge — it
    // warns. Anything still in the snapshot was removed by curation, so the
    // pages really are stale. An absent repository is only tolerated while it
    // remains approved; once the maintainer removes its approval, keeping the
    // published row is forgotten generated output and must fail this check.
    if (snapshotNames.has(fullName.toLowerCase()) || !state.approvedNames.has(fullName.toLowerCase())) {
      removed.push(fullName);
    } else {
      vanished.push(fullName);
    }
  }
  if (duplicates.length) {
    indexErrors.push(`${duplicates.length} repositories appear in more than one volume:\n${sample(duplicates)}`);
  }
  if (!index) {
    indexErrors.push('CATALOG.md is missing or unreadable');
  } else {
    if (index.duplicates.length) indexErrors.push(`CATALOG.md repeats volume rows: ${index.duplicates.join(', ')}`);
    for (const [key, count] of volumeCounts) {
      if (!index.volumes.has(key)) indexErrors.push(`CATALOG.md does not link catalog/${key}.md`);
      else if (index.volumes.get(key) !== count) {
        indexErrors.push(`CATALOG.md reports ${index.volumes.get(key)} entries for ${key}, but the volume contains ${count}`);
      }
    }
    for (const key of index.volumes.keys()) {
      if (!volumeCounts.has(key)) indexErrors.push(`CATALOG.md links missing volume catalog/${key}.md`);
    }
    if (index.total === null) indexErrors.push('CATALOG.md has no repository total');
    else if (index.total !== published.size) {
      indexErrors.push(`CATALOG.md reports ${index.total} repositories, but the volumes contain ${published.size}`);
    }
  }
  for (const [label, list] of [['added to the catalog', added], ['removed from the catalog', removed], ['moved between volumes', recategorised]]) {
    if (list.length) console.error(`${list.length} repositories ${label} but not published:\n${sample(list)}`);
  }
  if (vanished.length) {
    console.warn(
      `Warning: ${vanished.length} published repositories are no longer in the snapshot (deleted or renamed upstream) — resolve them via data/review/pending.md:\n${sample(vanished)}`,
    );
  }
  for (const error of indexErrors) console.error(`Catalog index error: ${error}`);
  if (added.length || removed.length || recategorised.length || indexErrors.length) {
    console.error('\nThe published catalog no longer matches the curation data — run "node scripts/merge.mjs" and commit the result.');
    process.exit(1);
  }
  console.log(
    `Catalog is in sync with the curation data — ${expected.size} repositories across ${pages.length} volumes${vanished.length ? `, ${vanished.length} awaiting review-queue cleanup` : ''}.`,
  );
  process.exit(0);
}

const board = buildBoard(state, TOP_N);
const readme = await updateReadmePages(state);
const { pending, missing } = computePending(state);

// CATALOG.md is the index; the volumes live under catalog/.
await writeFile(resolve(root, 'CATALOG.md'), catalog);
await mkdir(resolve(root, CATALOG_DIR), { recursive: true });
for (const page of pages) {
  await writeFile(resolve(root, page.path), page.content);
}
// A category that lost its last repository (or was renamed in categories.mjs)
// must not leave a stale volume behind, still linked from nothing and still
// showing yesterday's list.
const expected = new Set(pages.map((page) => `${page.key}.md`));
for (const name of await readdir(resolve(root, CATALOG_DIR))) {
  if (name.endsWith('.md') && !expected.has(name)) {
    await unlink(resolve(root, CATALOG_DIR, name));
    console.log(`Removed stale catalog volume ${CATALOG_DIR}/${name}.`);
  }
}
await writeFile(resolve(root, 'TOP200.md'), board);
await writePending(state);

console.log(
  `Review merge done — catalog lists ${stats.repositories} repositories (${stats.languages} languages, ${stats.licenses} licensed, ${stats.active} active) across ${stats.volumes} volumes under ${CATALOG_DIR}/, board holds ${TOP_N} entries, README data islands refreshed in ${readme.updated.join(', ') || 'no files'} (panorama total ${readme.total}, leaderboard top ${readme.top20}, showcase preview ${readme.showcase}), review queue holds ${pending.length} pending, ${missing.length} approved repositories missing from the snapshot.`,
);

for (const warning of oversized) {
  console.warn(`Warning: ${warning}`);
}

for (const warning of readme.warnings) {
  console.warn(`Warning: ${warning}`);
}

if (warnings.size) {
  for (const warning of warnings) {
    console.warn(`Warning: unknown category_overrides value (ignored, repository fell back to pattern matching): ${warning}`);
  }
}
