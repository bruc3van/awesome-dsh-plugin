#!/usr/bin/env node

// Builds (and with --publish, publishes) the awesome-dsh-plugin-feed npm
// package — the China-reachable distribution channel for the market feeds.
// registry.npmmirror.com is a mirror of registry.npmjs.org, so the package is
// published to npmjs.org and mirrors over within minutes; consumers behind
// the GFW fetch from npmmirror instead of raw.githubusercontent.com.
//
// Package contents: data/market.json (v1 feed), data/market-v2.json (v2
// superset with install targets), data/packages.json (the hand-maintained
// mapping). Versioning is calver 0.YYYYMMDD.N — one data snapshot per day,
// patch bumps for intraday republications.
//
// Idempotency: the data digest (sha256 over the three files) rides along as
// a `feedDigest` field in package.json. Before publishing, the registry's
// latest version is checked — same digest means nothing changed and the run
// is a no-op, so the daily workflow hook never piles up empty versions.

import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLISH = process.argv.includes('--publish');
const PKG_NAME = 'awesome-dsh-plugin-feed';
const REGISTRY = 'https://registry.npmjs.org';
const DIST = resolve(root, 'dist-npm');

const files = ['data/market.json', 'data/market-v2.json', 'data/packages.json'];
const reads = await Promise.all(files.map((f) => readFile(resolve(root, f), 'utf8')));
const digest = createHash('sha256').update(reads.join('\n')).digest('hex');

const v2 = JSON.parse(reads[1]);
const day = String(v2.generated_at ?? new Date().toISOString()).slice(0, 10).replaceAll('-', '');

async function latestInfo() {
  try {
    const res = await fetch(`${REGISTRY}/${PKG_NAME}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
    });
    if (res.status === 404) return { published: false, versions: [] };
    if (!res.ok) throw new Error(`registry returned HTTP ${res.status}`);
    const doc = await res.json();
    const latest = doc['dist-tags']?.latest;
    return {
      published: true,
      latest,
      feedDigest: doc.versions?.[latest]?.feedDigest,
      versions: Object.keys(doc.versions ?? {}),
    };
  } catch (error) {
    // Offline or registry hiccup: building is still fine, publishing is not.
    return { published: false, versions: [], error: error.message };
  }
}

const info = await latestInfo();
if (info.published && info.feedDigest === digest) {
  console.log(`feed already published as ${info.latest} (digest ${digest.slice(0, 12)}…) — nothing to do.`);
  process.exit(0);
}

// 0.YYYYMMDD.N — N is the first free patch for today.
let patch = 0;
if (info.published) {
  patch = Math.max(
    0,
    ...info.versions
      .filter((v) => v.startsWith(`0.${day}.`))
      .map((v) => Number(v.split('.')[2]) + 1)
      .filter((n) => Number.isFinite(n)),
  );
}
const version = `0.${day}.${patch}`;

await rm(DIST, { recursive: true, force: true });
await mkdir(resolve(DIST, 'data'), { recursive: true });
await Promise.all(files.map((f, i) => writeFile(resolve(DIST, f), reads[i])));

const packageJson = {
  name: PKG_NAME,
  version,
  description: 'DSH plugin market feeds — v1 feed, v2 superset with paste-ready install targets, and the packages mapping. China-reachable via registry.npmmirror.com.',
  license: 'MIT',
  repository: { type: 'git', url: 'git+https://github.com/bruc3van/awesome-dsh-plugin.git' },
  homepage: 'https://github.com/bruc3van/awesome-dsh-plugin#readme',
  files: ['data', 'README.md'],
  feedDigest: digest,
  feedGeneratedAt: v2.generated_at,
};
await writeFile(resolve(DIST, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`);

const readme = [
  '# awesome-dsh-plugin-feed',
  '',
  `Market data snapshot for the [awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) catalog, published so consumers can fetch it from an npm registry — including the China-reachable mirror registry.npmmirror.com — when raw.githubusercontent.com is unreachable.`,
  '',
  `- version: \`${version}\` (calver \`0.YYYYMMDD.N\`)`,
  `- feed generated at: \`${v2.generated_at}\``,
  `- data digest (sha256): \`${digest}\``,
  '',
  '## Files',
  '',
  '| File | What it is |',
  '| --- | --- |',
  '| `data/market.json` | v1 downstream feed (schema 1) — the wire contract dsh-desktop-safe-market consumes today |',
  '| `data/market-v2.json` | v2 superset (schema 2) — same entries, mapped ones carry a `packages` block with `install` (paste-ready into the official 插件→添加插件 box: npm name or repo URL), `command`, requirements and verification |',
  '| `data/packages.json` | the hand-maintained install-target source of truth (includes entries outside the 600-entry feed) |',
  '',
  '## Fetching',
  '',
  '```bash',
  '# npmmirror (China): direct file access, 302-redirected — follow redirects',
  'curl -L -O https://registry.npmmirror.com/awesome-dsh-plugin-feed/latest/files/data/market-v2.json',
  '',
  '# or via jsDelivr\'s npm CDN',
  'curl -O https://cdn.jsdelivr.net/npm/awesome-dsh-plugin-feed/data/market-v2.json',
  '',
  '# or the classic way: packument → dist.tarball',
  'npm view awesome-dsh-plugin-feed dist.tarball --registry=https://registry.npmmirror.com',
  '```',
  '',
  'Check freshness with `npm view awesome-dsh-plugin-feed feedDigest feedGeneratedAt` and compare against this repo\u2019s latest commit.',
  '',
  'Data is generated and validated in [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin); see data/review/README.md there for schemas and curation rules.',
  '',
].join('\n');
await writeFile(resolve(DIST, 'README.md'), `${readme}\n`);

console.log(`built ${PKG_NAME}@${version} in dist-npm/ — digest ${digest.slice(0, 12)}…`);
for (const [i, f] of files.entries()) console.log(`  ${f}: ${Buffer.byteLength(reads[i])} bytes`);

if (!PUBLISH) {
  console.log('dry run only — pass --publish (requires npm auth, e.g. NODE_AUTH_TOKEN) to release.');
} else {
  const { spawnSync } = await import('node:child_process');
  const result = spawnSync('npm', ['publish', DIST, '--access', 'public'], {
    stdio: 'inherit',
    env: { ...process.env, npm_config_registry: REGISTRY },
  });
  if (result.status !== 0) {
    console.error('npm publish failed — if the version already exists, rerun; the script bumps the patch per day.');
    process.exit(result.status ?? 1);
  }
  console.log(`published ${PKG_NAME}@${version}. npmmirror mirrors npmjs.org within minutes.`);
}
