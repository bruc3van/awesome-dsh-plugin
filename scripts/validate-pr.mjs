#!/usr/bin/env node

// Validates an open pull request against the submission rules:
//
// 1. The PR title must be proper UTF-8 text: no replacement characters
//    (U+FFFD) and no runs of "?" left behind by a failed encoding round-trip.
//    Garbled titles are rejected outright.
// 2. Every changed path must belong to a known lane. PRs may touch the
//    hand-maintained pages, the curation data files, scripts/, .github/, and
//    repo meta files; generated pages (CATALOG.md, catalog/, TOP200.md,
//    MARKET.md, data/market.json) are accepted only alongside scripts/
//    changes; the daily-pipeline files (data/repositories.json,
//    data/review/pending.*) are never accepted. Anything else — e.g. a made-up
//    data/plugins/*.yml submission — is rejected: no lane consumes it.
//    Maintainers can bypass with the `ci: allow-any-path` label (re-run the
//    workflow after labeling).
// 3. Every repository the PR ADDS to (or rewrites in) the author-showcase
//    sections must be public, carry the `dsh-plugin` topic, and have MORE
//    THAN 10 stars. Only lines the PR itself introduces (diff lines starting
//    with `+`) are checked, so entries that predate this rule stay untouched.
//
// Runs in CI (.github/workflows/validate-pr.yml); PR_NUMBER and PR_TITLE are
// provided by the workflow environment and the diff is fetched through the
// GitHub API with GITHUB_TOKEN.

import process from 'node:process';

const prNumber = process.env.PR_NUMBER;
const prTitle = (process.env.PR_TITLE ?? '').trim();
const repoSlug = process.env.GITHUB_REPOSITORY || 'bruc3van/awesome-dsh-plugin';
const starThreshold = 10;

const errors = [];

// --- 1. Title sanity ---------------------------------------------------------
if (!prTitle) {
  errors.push('PR title is empty — give the PR a readable UTF-8 title');
}
if (prTitle.includes('\uFFFD')) {
  errors.push('PR title contains replacement characters (\\uFFFD) — the title is not valid UTF-8; fix it and re-submit');
}
if (/(\?){4,}/.test(prTitle)) {
  errors.push(`PR title looks garbled: "${prTitle}" — titles must be proper UTF-8 text; fix it and re-submit`);
}

// --- 2. Stars of the repositories introduced in the showcase diff -------------
const headers = {
  'User-Agent': 'awesome-dsh-plugin',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

// An author-showcase line added by this PR, in the documented format:
//   - **[name](https://github.com/owner/repo)** (@author · YYYY-MM-DD) — ...
const addedEntryPattern = /^\+\s*-\s+\*\*\[[^\]]+\]\(https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\)/;
const repos = [];

let diff = '';
if (prNumber) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoSlug}/pulls/${prNumber}`, {
      headers: { ...headers, Accept: 'application/vnd.github.diff' },
    });
    if (!response.ok) {
      errors.push(`could not fetch the PR diff: GitHub API ${response.status}`);
    } else {
      diff = await response.text();
    }
  } catch (error) {
    errors.push(`could not fetch the PR diff: ${error.message}`);
  }
} else {
  errors.push('PR_NUMBER is not set — run this script from the validate-pr workflow');
}

// --- 3. Changed paths must belong to a known lane ----------------------------
const handMaintainedPaths = new Set([
  'SHOWCASE.md', 'README.md', 'README_EN.md', 'CONTRIBUTING.md', 'LICENSE',
  '.gitattributes', '.gitignore',
  'data/approved.json', 'data/curated.json', 'data/leaderboard-descriptions-zh.json',
  'data/review/README.md',
]);
const touchesScripts = (path) => path === 'scripts' || path.startsWith('scripts/');
const touchesWorkflow = (path) => path === '.github' || path.startsWith('.github/');
const isGenerated = (path) =>
  path === 'CATALOG.md' || path === 'TOP200.md' || path === 'MARKET.md' ||
  path === 'data/market.json' || path === 'catalog' || path.startsWith('catalog/');
const isPipeline = (path) =>
  path === 'data/repositories.json' ||
  path === 'data/review/pending.json' || path === 'data/review/pending.md';

const changedPaths = [];
let pathBypass = false;
if (prNumber) {
  try {
    // Labels decide the maintainer bypass; the files API gives clean paths.
    const [pullResponse, ...filePages] = await Promise.all([
      fetch(`https://api.github.com/repos/${repoSlug}/pulls/${prNumber}`, {
        headers: { ...headers, Accept: 'application/vnd.github+json' },
      }),
      fetch(`https://api.github.com/repos/${repoSlug}/pulls/${prNumber}/files?per_page=100`, {
        headers: { ...headers, Accept: 'application/vnd.github+json' },
      }),
    ]);
    if (pullResponse.ok) {
      const pull = await pullResponse.json();
      pathBypass = (pull.labels || []).some((label) => label.name === 'ci: allow-any-path');
    }
    let filesJson = null;
    if (filePages[0].ok) {
      filesJson = await filePages[0].json();
      for (const file of filesJson) changedPaths.push(file.filename);
      // Follow pagination, but cap the audit at 300 files — beyond that the PR
      // is noise whatever it contains, and the error says so.
      for (let page = 2; page <= 3 && filesJson.length === 100; page++) {
        const next = await fetch(
          `https://api.github.com/repos/${repoSlug}/pulls/${prNumber}/files?per_page=100&page=${page}`,
          { headers: { ...headers, Accept: 'application/vnd.github+json' } },
        );
        if (!next.ok) break;
        filesJson = await next.json();
        for (const file of filesJson) changedPaths.push(file.filename);
      }
      if (filesJson.length === 100) {
        errors.push('PR touches 300+ files — split it into reviewable chunks');
      }
    } else {
      errors.push(`could not list the PR files: GitHub API ${filePages[0].status}`);
    }
  } catch (error) {
    errors.push(`could not inspect the PR files: ${error.message}`);
  }

  if (!pathBypass) {
    const alsoChangesScripts = changedPaths.some(touchesScripts);
    for (const path of changedPaths) {
      if (isPipeline(path)) {
        errors.push(
          `${path}: refreshed daily by the update-catalog workflow — do not commit it in a PR`,
        );
      } else if (isGenerated(path) && !alsoChangesScripts) {
        errors.push(
          `${path}: generated file — include generated pages only in PRs that also change scripts/ (see CONTRIBUTING.md)`,
        );
      } else if (
        !handMaintainedPaths.has(path) && !touchesScripts(path) &&
        !touchesWorkflow(path) && !isGenerated(path)
      ) {
        errors.push(
          `${path}: not part of any submission lane — PRs may touch SHOWCASE.md, README.md / README_EN.md, ` +
          'data/curated.json, data/approved.json, data/leaderboard-descriptions-zh.json, scripts/ or .github/ ' +
          '(see CONTRIBUTING.md; maintainers may label `ci: allow-any-path` and re-run)',
        );
      }
    }
  }
}

for (const line of diff.split('\n')) {
  const match = line.match(addedEntryPattern);
  if (match && !repos.some((repo) => repo.toLowerCase() === match[1].toLowerCase())) {
    repos.push(match[1]);
  }
}

await Promise.all(repos.map(async (fullName) => {
  let repo;
  try {
    const response = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers: { ...headers, Accept: 'application/vnd.github+json' },
    });
    if (response.status === 404) {
      errors.push(`${fullName}: repository not found — deleted, renamed, or not public`);
      return;
    }
    if (!response.ok) {
      errors.push(`${fullName}: GitHub API ${response.status}`);
      return;
    }
    repo = await response.json();
  } catch (error) {
    errors.push(`${fullName}: GitHub API request failed (${error.message})`);
    return;
  }
  if (repo.private) errors.push(`${fullName}: repository is private`);
  if (!(repo.topics || []).includes('dsh-plugin')) {
    errors.push(`${fullName}: missing the "dsh-plugin" topic`);
  }
  const stars = repo.stargazers_count ?? 0;
  if (typeof repo.stargazers_count !== 'number' || stars <= starThreshold) {
    errors.push(
      `${fullName}: ${stars} star(s) — the author showcase requires more than ${starThreshold} stars`,
    );
  }
}));

if (errors.length) {
  console.error(`PR validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `PR #${prNumber ?? '?'} is valid — title ok${
    pathBypass
      ? '; path check bypassed via `ci: allow-any-path`'
      : `; ${changedPaths.length} changed path(s) within the allowed lanes`
  }${
    repos.length
      ? `; ${repos.join(', ')} checked (public, dsh-plugin topic, > ${starThreshold} stars)`
      : '; no author-showcase entries added'
  }.`,
);
