#!/usr/bin/env node

// Generates TOP200.md (the star leaderboard) from data/repositories.json,
// data/approved.json, and data/curated.json.
//
// The board only contains repositories the maintainer has verified
// (data/approved.json); new repositories wait in data/review/pending.md until
// they are approved. The full catalog lives in CATALOG.md plus its catalog/
// volumes, written by the same review merge. In the normal workflow this script runs as part of
// scripts/merge.mjs after a review — the daily automation never regenerates
// the board on its own.
//
// The board size is controlled by TOP_N (default 200; run with TOP_N=100 for a
// shorter board). TOP100.md is retired — the page stays TOP200.md.

import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildBoard, loadState } from './render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TOP_N = Number(process.env.TOP_N ?? 200);
const OUTPUT = 'TOP200.md';

const state = await loadState();
const page = buildBoard(state, TOP_N);

await writeFile(resolve(root, OUTPUT), page);
console.log(`Generated ${OUTPUT} with ${TOP_N} repositories (snapshot ${state.date}).`);
