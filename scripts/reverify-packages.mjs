#!/usr/bin/env node

// Weekly upstream re-verification for data/packages.json: re-fetches the
// README behind every mapped entry, re-runs the shared extractor
// (scripts/readme-install.mjs — the same rules that produced the mapping),
// and reports drift between what we publish and what the repos currently
// document:
//
//   DRIFT (fails the run, exit 1)
//     - a recorded install target is no longer documented upstream
//     - a recorded target is documented with a different command (version
//       bump, new flag, renamed source)
//     - a recorded npm package does not exist on the registry, or its pinned
//       version/dist-tag was never published — "paste it into the box" dies
//       with a 404, so phantom packages are drift, not noise (2026-09-26
//       audit: 14 of 384 npm targets were documented-but-never-published)
//   WARNING (summary only)
//     - upstream documents extra targets we don't record yet
//     - an unmapped feed entry has become extractable (new install docs)
//     - a README could not be fetched, or the registry lookup errored (network)
//
// Report-only by design: packages.json is hand-maintained and never rewritten
// by scripts — this output is a review queue, the same philosophy as
// data/review/pending.md. `--write-pending` additionally (re)generates
// data/review/packages-pending.md, the work list of unmapped feed entries
// bucketed by why they are unmapped, with the README hint that a human needs
// to resolve them.

import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractInstallTargets, npmBase } from './readme-install.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE_PENDING = process.argv.includes('--write-pending');
const README_NAMES = ['README.md', 'readme.md', 'README.zh-CN.md', 'README_zh.md', 'README_CN.md', 'README.zh.md', 'README-EN.md', 'README_EN.md'];
const CONCURRENCY = 10;

const [packages, market, snapshot] = await Promise.all([
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/market.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/repositories.json'), 'utf8').then(JSON.parse),
]);

const branchBySlug = new Map(
  (snapshot.repositories || []).map((repo) => [String(repo.full_name).toLowerCase(), repo.default_branch]),
);
const marketBySlug = new Map(market.entries.map((entry) => [String(entry.full_name).toLowerCase(), entry]));
const starsOf = (slug) => marketBySlug.get(slug)?.stargazers_count ?? 0;

const readmeCache = new Map();
async function fetchReadme(slug) {
  if (readmeCache.has(slug)) return readmeCache.get(slug);
  const branch = branchBySlug.get(slug) ?? 'main';
  const attempt = async () => {
    for (const name of README_NAMES) {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/${slug}/${branch}/${name}`, {
          signal: AbortSignal.timeout(20000),
          headers: { 'User-Agent': 'awesome-dsh-plugin packages-reverify' },
        });
        if (!res.ok) continue;
        const text = await res.text();
        if (text.length >= 40) return text;
      } catch {}
    }
    return null;
  };
  const result = (await attempt()) ?? (await attempt()); // one retry across the name list
  readmeCache.set(slug, result);
  return result;
}

// A recorded source counts as still-documented when the extractor picks it,
// OR its package token appears anywhere after an `add` in an install line
// (covers multi-package single-line installs and suites beyond the pick cap).
const normalKey = (source) => (source.startsWith('npm:') ? `npm:${npmBase(source.slice(4))}` : source);

async function reverifyEntry(slug, record) {
  const problems = [];
  const notes = [];
  const text = await fetchReadme(slug);
  if (text === null) {
    return { problems, notes: [...notes, `README unreachable (${branchBySlug.get(slug) ?? 'main'} branch)`] };
  }
  if ((record.install_mode ?? 'command') === 'manual') return { problems, notes };

  const [owner, repo] = slug.split('/');
  const { picks, found, segments } = extractInstallTargets(text, { owner, repo, maxTargets: Infinity });
  const extractedKeys = new Set(picks.map((p) => normalKey(p.source)));
  // One package can be documented under several profiles (web / desktop /
  // dsh-tui / …) with different command lines — a recorded command is fresh
  // as long as it matches ANY of them, not just the last one seen.
  const extractedCommands = new Map();
  for (const pick of picks) {
    const key = normalKey(pick.source);
    if (!extractedCommands.has(key)) extractedCommands.set(key, new Set());
    extractedCommands.get(key).add(pick.command);
  }
  // Presence check: a recorded target still counts as documented when it
  // appears as any token after an `add` — covers multi-package single-line
  // installs (`add dsh-shared dsh-md-render`) and suites beyond the pick cap.
  const upstreamTokens = new Set(
    found.flatMap((f) => [f.target, npmBase(f.target)]),
  );
  for (const { command } of segments) {
    const addM = /(?:^|\s)add\s+/.exec(command);
    if (!addM) continue;
    for (const token of command.slice(addM.index + addM[0].length).split(' ')) {
      if (token.startsWith('-')) continue;
      const stripped = token.replace(/^["']+|["']+$/g, '');
      if (stripped !== '' && !/[<>{}"'`$\\|]/.test(stripped)) {
        upstreamTokens.add(stripped);
        upstreamTokens.add(npmBase(stripped));
      }
    }
  }

  for (const pkg of record.packages ?? []) {
    const key = normalKey(pkg.source);
    const payload = pkg.source.replace(/^(npm|github|url):/, '');
    // A github target pointing at this very repo needs no README documentation:
    // it is the repo-fallback channel for entries whose documented npm package
    // was never published, and the repo's existence is vouched for by the
    // snapshot.
    const selfRepo = pkg.source.startsWith('github:') && pkg.source.slice(7).split('#')[0].toLowerCase() === slug;
    const stillDocumented =
      selfRepo || extractedKeys.has(key) || upstreamTokens.has(payload) || upstreamTokens.has(npmBase(payload));
    if (!stillDocumented) {
      problems.push(`${slug}: recorded target ${pkg.source} is no longer documented in the upstream README — update or drop the mapping`);
      continue;
    }
    if (extractedCommands.has(key) && !extractedCommands.get(key).has(pkg.command)) {
      problems.push(
        `${slug}: command for ${pkg.source} changed upstream — recorded "${pkg.command}", README now shows ${[...extractedCommands.get(key)].map((c) => `"${c}"`).join(' / ')}`,
      );
    }
  }
  for (const pick of picks) {
    if (!(record.packages ?? []).some((pkg) => normalKey(pkg.source) === normalKey(pick.source))) {
      notes.push(`${slug}: upstream additionally documents ${pick.source} (${pick.command}) — consider recording it`);
    }
  }
  return { problems, notes };
}

async function summaryBlock(title, body) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `### ${title}\n\n${body}\n\n`);
}

const mdEscape = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');

// ---------------------------------------------------------------------------
// Pass 1: every mapped entry, feed or not.
const problems = [];
const notes = [];
const mappedSlugs = Object.keys(packages.entries);
const queue = [...mappedSlugs];
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const slug = queue.shift();
    const result = await reverifyEntry(slug, packages.entries[slug]);
    problems.push(...result.problems);
    notes.push(...result.notes);
  }
});
await Promise.all(workers);

// ---------------------------------------------------------------------------
// Pass 2: registry verification — every recorded npm target must exist. A
// pinned semver must be a published version; a non-semver pin (@next,
// @latest, …) must be a dist-tag. Registry/network errors are warnings, not
// drift — they say nothing about the data.
const registryProblems = [];
const npmQueue = [];
for (const [slug, record] of Object.entries(packages.entries)) {
  for (const pkg of record.packages ?? []) {
    if (typeof pkg.source === 'string' && pkg.source.startsWith('npm:')) npmQueue.push({ slug, spec: pkg.source.slice(4) });
  }
}
const SEMVER = /^\d+\.\d+\.\d+(-[\w.-]+)?(\+[\w.-]+)?$/;
const registryWorkers = Array.from({ length: CONCURRENCY }, async () => {
  while (npmQueue.length) {
    const { slug, spec } = npmQueue.shift();
    const at = spec.lastIndexOf('@');
    const name = at > 0 ? spec.slice(0, at) : spec;
    const pin = at > 0 ? spec.slice(at + 1) : null;
    const encoded = name.startsWith('@') ? `/@${encodeURIComponent(name.slice(1))}` : `/${encodeURIComponent(name)}`;
    try {
      const res = await fetch(`https://registry.npmjs.org${encoded}`, {
        headers: { Accept: 'application/vnd.npm.install-v1+json' },
        signal: AbortSignal.timeout(20000),
      });
      if (res.status === 404) {
        registryProblems.push(`${slug}: npm package ${spec} does not exist on the registry — drop the target or switch the entry to manual`);
        continue;
      }
      if (!res.ok) {
        notes.push(`${slug}: registry lookup for ${spec} returned HTTP ${res.status} — retry next run`);
        continue;
      }
      if (pin === null) continue;
      const doc = await res.json();
      const resolved = SEMVER.test(pin) ? doc.versions?.[pin] : doc['dist-tags']?.[pin];
      if (!resolved) {
        registryProblems.push(`${slug}: ${spec} pins a ${SEMVER.test(pin) ? 'version' : 'dist-tag'} ("${pin}") that was never published — update or drop the pin`);
      }
    } catch (error) {
      notes.push(`${slug}: registry lookup for ${spec} failed (${error.message}) — retry next run`);
    }
  }
});
await Promise.all(registryWorkers);
problems.push(...registryProblems);

// ---------------------------------------------------------------------------
// Pass 3: unmapped feed entries — the coverage work list.
const gaps = [];
const pendingBuckets = { ambiguous: [], localOnly: [], noCommand: [] };
const pendingQueue = market.entries
  .map((entry) => String(entry.full_name).toLowerCase())
  .filter((slug) => !packages.entries[slug]);
const pendingWorkers = Array.from({ length: CONCURRENCY }, async () => {
  while (pendingQueue.length) {
    const slug = pendingQueue.shift();
    const text = await fetchReadme(slug);
    if (text === null) {
      pendingBuckets.noCommand.push({ slug, hint: 'README unreachable or missing' });
      continue;
    }
    const [owner, repo] = slug.split('/');
    const { picks, ambiguous, localOnly, segments } = extractInstallTargets(text, { owner, repo });
    const hint = segments[0]?.command ?? segments[0]?.seg ?? text.split(/\r?\n/).find((l) => /install|安装/i.test(l)) ?? '';
    if (picks.length > 0) gaps.push({ slug, picks, hint });
    else if (ambiguous) pendingBuckets.ambiguous.push({ slug, hint });
    else if (localOnly) pendingBuckets.localOnly.push({ slug, hint });
    else pendingBuckets.noCommand.push({ slug, hint });
  }
});
await Promise.all(pendingWorkers);

// ---------------------------------------------------------------------------
// Report.
console.log(`re-verified ${mappedSlugs.length} mapped entries against upstream READMEs`);
if (problems.length) {
  console.error(`\n${problems.length} drift problem(s):`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  await summaryBlock('⚠️ Packages mapping drift', problems.map((p) => `- ${p}`).join('\n'));
}
if (notes.length) {
  for (const note of notes) console.warn(`Warning: ${note}`);
  await summaryBlock('Packages re-verification notes', notes.map((n) => `- ${n}`).join('\n'));
}
const gapLines = gaps.map((g) => `- ${g.slug}: ${g.picks.map((p) => p.source).join(', ')}`);
if (gapLines.length) {
  for (const line of gapLines) console.warn(`Gap (now extractable): ${line}`);
  await summaryBlock('Unmapped feed entries that became extractable', gapLines.join('\n'));
}

if (WRITE_PENDING) {
  const today = new Date().toISOString().slice(0, 10);
  const row = ({ slug, hint }) =>
    `| [${slug}](https://github.com/${slug}) | ${starsOf(slug)} | ${mdEscape(String(hint).slice(0, 140))} |`;
  const bucketTable = (title, rows) =>
    [`## ${title}（${rows.length}）`, '', '| 仓库 / Repo | ★ | Hint |', '| --- | ---: | --- |', ...rows.sort((a, b) => starsOf(b.slug) - starsOf(a.slug)).map(row), ''].join('\n');
  const page = [
    '# packages 映射待补清单 / Packages mapping work list',
    '',
    `市场 feed 中尚无安装映射的仓库，按“为什么没映射”分桶。由 \`node scripts/reverify-packages.mjs --write-pending\` 生成于 ${today}；人工核实后把结论写入 \`data/packages.json\`（命令逐字来自 README 的标 readme-verified；占位符/特殊形态用 install_mode: manual），再重建 \`market-v2.json\`。本清单是快照不是门控——重建前的新增仓库不会自动出现。`,
    '',
    bucketTable('README 有多个候选包，需人工裁决 / Ambiguous', pendingBuckets.ambiguous),
    bucketTable('仅本地或 link: 安装 / Local-only installs', pendingBuckets.localOnly),
    bucketTable('无 dsh plugin 安装命令 / No install command', pendingBuckets.noCommand),
  ].join('\n');
  await writeFile(resolve(root, 'data/review/packages-pending.md'), `${page}\n`);
  console.log(`\nwrote data/review/packages-pending.md — ${pendingBuckets.ambiguous.length} ambiguous, ${pendingBuckets.localOnly.length} local-only, ${pendingBuckets.noCommand.length} without a command`);
}

const mappedInFeed = market.entries.filter((e) => packages.entries[String(e.full_name).toLowerCase()]).length;
console.log(
  `\nfeed coverage: ${mappedInFeed}/${market.entries.length} feed entries mapped` +
    (gaps.length ? `, ${gaps.length} newly extractable` : ''),
);

if (problems.length) process.exit(1);
