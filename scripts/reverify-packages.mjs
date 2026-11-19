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
//     - a README could not be fetched, or the registry lookup errored (network)
//
// Report-only by design: packages.json is hand-maintained and never rewritten
// by scripts — this output is a review queue, the same philosophy as
// data/review/pending.md. The coverage work list (unmapped catalog entries and
// how to resolve them) is scripts/catalog-mappings.mjs now; the retired
// --write-pending pass only ever saw the old 1000-entry schema-2 feed.

import { appendFile, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractInstallTargets, npmBase } from './readme-install.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const README_NAMES = ['README.md', 'readme.md', 'README.zh-CN.md', 'README_zh.md', 'README_CN.md', 'README.zh.md', 'README-EN.md', 'README_EN.md'];
const CONCURRENCY = 10;

const [packages, snapshot] = await Promise.all([
  readFile(resolve(root, 'data/packages.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'data/repositories.json'), 'utf8').then(JSON.parse),
]);

const branchBySlug = new Map(
  (snapshot.repositories || []).map((repo) => [String(repo.full_name).toLowerCase(), repo.default_branch]),
);

const readmeCache = new Map();
async function fetchReadme(slug) {
  if (readmeCache.has(slug)) return readmeCache.get(slug);
  const branch = branchBySlug.get(slug) ?? 'main';
  const attempt = async () => {
    for (const name of README_NAMES) {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/${slug}/${branch}/${name}`, {
          signal: AbortSignal.timeout(20000),
          headers: { 'User-Agent': 'awesome-dsh-plugin-pro packages-reverify' },
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
  // dsh-tui / …) and several variants of the same command — a recorded
  // command is fresh as long as it matches ANY documented candidate, not
  // just the deduped pick. Picks collapse same-package variants
  // (unversioned / @latest / pinned) to one representative, and a
  // "paste this prompt to your AI" fence can win that dedupe with prose
  // glued onto the command (michengai/*, 2026-09-29) while the README's
  // manual-install block still documents the exact clean command we
  // recorded — so the equality set is built from every candidate `found`
  // holds, not only from `picks`.
  const extractedCommands = new Map();
  const addDocumentedCommand = (source, command) => {
    const key = normalKey(source);
    if (!extractedCommands.has(key)) extractedCommands.set(key, new Set());
    extractedCommands.get(key).add(command);
  };
  for (const pick of picks) addDocumentedCommand(pick.source, pick.command);
  for (const candidate of found) addDocumentedCommand(candidate.cls.source, candidate.command);
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
  // Paste-string presence: a README may document the install target only as a
  // paste name — plugin-panel prose ("Add plugin, enter `ds-bot`"), a bare
  // fence with the package/version or GitHub URL, or an inline-code name —
  // with no extractable `dsh plugin … add` line at all (2026-11-17). For
  // those pure-prose READMEs, an inline-code span or fence line carrying the
  // recorded install name / npm base / GitHub owner-repo slug counts as
  // documented. Command freshness is meaningless there (no candidates), so
  // only presence is checked.
  const proseTokens = new Set();
  if (segments.length === 0) {
    let fenceM;
    const fenceRe = /```[^\n]*\n([\s\S]*?)```/g;
    while ((fenceM = fenceRe.exec(text))) {
      for (const line of fenceM[1].split('\n')) if (line.trim()) proseTokens.add(line.trim());
    }
    let inlineM;
    const inlineRe = /`([^`\n]+)`/g;
    while ((inlineM = inlineRe.exec(text))) proseTokens.add(inlineM[1]);
  }
  const mentionsNeedle = (needle, tokens) => {
    if (!needle) return false;
    const re = new RegExp(`(^|[^\\w@/.-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\w-])`);
    for (const token of tokens) if (re.test(token)) return true;
    return false;
  };

  for (const pkg of record.packages ?? []) {
    const key = normalKey(pkg.source);
    const payload = pkg.source.replace(/^(npm|github|url):/, '');
    // The README-documentation requirement is waived for repo-fallback entries:
    // - self-repo github targets (documented npm package 404s, or manifest-backed repo fallback)
    // - manifest-verified npm/git fallbacks (verified_via starts with `manifest@`),
    //   where the root package.json / cordis.patch.yml is the source of truth rather
    //   than a copyable README command (Pass 2 still verifies npm registry existence).
    const selfRepo =
      record.status === 'repo-fallback' &&
      pkg.source.startsWith('github:') &&
      pkg.source.slice(7).split('#')[0].toLowerCase() === slug;
    const manifestFallback =
      record.status === 'repo-fallback' &&
      typeof record.verified_via === 'string' &&
      record.verified_via.startsWith('manifest@');
    const githubSlug = pkg.source.startsWith('github:')
      ? payload.split('#')[0]
      : null;
    const proseDocumented =
      segments.length === 0 &&
      (mentionsNeedle(pkg.install, proseTokens) ||
        mentionsNeedle(npmBase(payload), proseTokens) ||
        mentionsNeedle(payload, proseTokens) ||
        mentionsNeedle(githubSlug, proseTokens));
    const stillDocumented =
      selfRepo ||
      manifestFallback ||
      extractedKeys.has(key) ||
      upstreamTokens.has(payload) ||
      upstreamTokens.has(npmBase(payload)) ||
      proseDocumented;
    if (!stillDocumented) {
      problems.push(`${slug}: recorded target ${pkg.source} is no longer documented in the upstream README — update or drop the mapping`);
      continue;
    }
    if (extractedCommands.has(key) && !extractedCommands.get(key).has(pkg.command)) {
      // Profile-placeholder equivalence: a README that switched its command
      // to the `--profile <profile>` placeholder form documents the same
      // install as our concrete-profile record — the placeholder names
      // whichever profile the reader runs, and the official add box takes the
      // bare package name regardless (2026-11-17). Cosmetic quote differences
      // are likewise equivalent.
      const normalize = (command) =>
        command.replace(/"/g, '').replace(/(--profile\s+)(<[^>]*>|\S+)/gi, '$1<profile>');
      const equivalent = [...extractedCommands.get(key)].some(
        (candidate) => normalize(candidate) === normalize(pkg.command),
      );
      if (!equivalent) {
        problems.push(
          `${slug}: command for ${pkg.source} changed upstream — recorded "${pkg.command}", README now shows ${[...extractedCommands.get(key)].map((c) => `"${c}"`).join(' / ')}`,
        );
      }
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

if (problems.length) process.exit(1);
