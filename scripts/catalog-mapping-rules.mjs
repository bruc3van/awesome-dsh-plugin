// The decision rule behind scripts/catalog-mappings.mjs, kept pure so the
// auto-map gate is unit-testable: an extracted README candidate becomes a
// published install target only when it is a concrete `dsh plugin … add`
// invocation, it carries the source it installs, and the source is provably
// this repository — an npm package whose registry `repository` field points
// here, or a github: target on this exact slug. Everything else is a review
// candidate for the daily AI pass, never an automatic edit.

import { installRef, isPasteSafeCommand, npmBase } from './readme-install.mjs';

/** Sources this gate can publish on its own; url:/link: targets stay manual. */
const AUTO_SOURCES = /^(npm|github):/;

/**
 * @param slug - lowercase `owner/repo` the mapping would be recorded under.
 * @param picks - `extractInstallTargets(...).picks` entries.
 * @param checks - npm source → { ok, reason } already verified against the registry.
 * @returns {{ verdict: 'auto'|'review', accepted: object[], reason: string }}
 */
export function decideMapping(slug, picks, checks = new Map()) {
  const reasons = [];
  const accepted = [];
  if (!Array.isArray(picks) || picks.length === 0) {
    return { verdict: 'review', accepted, reason: 'no install command extracted' };
  }
  for (const pick of picks) {
    const source = String(pick?.source ?? '');
    const command = String(pick?.command ?? '');
    if (!AUTO_SOURCES.test(source)) {
      reasons.push(`unsupported source ${source || '(empty)'}`);
      continue;
    }
    if (command === '' || /[<>]/.test(command) || !isPasteSafeCommand(command) || !command.includes('plugin')) {
      reasons.push('command is not a concrete paste-safe `dsh plugin` invocation');
      continue;
    }
    const payload = source.slice(source.indexOf(':') + 1);
    if (!command.includes(payload)) {
      reasons.push('command does not carry the source it installs');
      continue;
    }
    if (source.startsWith('github:')) {
      const target = payload.split('#')[0].toLowerCase();
      if (target !== slug) {
        reasons.push(`github target ${target} is not this repository`);
        continue;
      }
    } else {
      const check = checks.get(source);
      if (check === undefined) {
        reasons.push('npm target was not verified');
        continue;
      }
      if (!check.ok) {
        reasons.push(check.reason);
        continue;
      }
    }
    accepted.push({ profile: pick.profile || 'web', source, command, install: installRef(source) });
  }
  // One repository may be documented under several refs (an unpinned repo URL
  // and a release tag, or an unversioned npm name and a pinned one) or several
  // profiles. Collapse to one target per profile+repository, preferring the
  // unpinned form — the same rule `pick()` applies to npm variants.
  const grouped = new Map();
  for (const pkg of accepted) {
    const raw = pkg.source.slice(pkg.source.indexOf(':') + 1);
    const pinned = pkg.source.startsWith('npm:') ? npmBase(raw) !== raw : raw.includes('#');
    const payload = (pkg.source.startsWith('npm:') ? npmBase(raw) : raw.split('#')[0]).toLowerCase();
    const key = `${pkg.profile} ${payload}`;
    const previous = grouped.get(key);
    if (previous === undefined || (previous.pinned && !pinned)) grouped.set(key, { ...pkg, pinned });
  }
  const unique = [...grouped.values()].map(({ pinned, ...pkg }) => pkg);
  if (unique.length === 0) {
    return { verdict: 'review', accepted: [], reason: reasons.join('; ') || 'no acceptable target' };
  }
  return { verdict: 'auto', accepted: unique, reason: reasons.join('; ') };
}

/** The npm package's own repository field, normalized to an owner/repo slug. */
export function npmRepositorySlug(doc) {
  const value = doc?.repository;
  const raw = (typeof value === 'string' ? value : typeof value?.url === 'string' ? value.url : '').trim();
  // npm accepts `owner/repo` and `github:owner/repo` shorthands as well as URLs.
  const shorthand = raw.match(/^(?:github:)?([A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)$/);
  if (shorthand) return shorthand[1].replace(/\.git$/, '').toLowerCase();
  const match = raw.match(/github\.com[/:]([A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)/i);
  return match ? match[1].replace(/\.git$/, '').toLowerCase() : '';
}

/**
 * The fallback target for a repository whose README documents no copyable
 * `dsh plugin … add` line but whose manifest proves it is a plugin:
 *
 *   - a published npm package that declares this repository → the npm name;
 *   - a root `dsh` field or `cordis.patch.yml` → the repository URL itself
 *     (the same `repo-fallback` shape packages.json already records).
 *
 * `npm` is the registry check result for the manifest's package name, or
 * undefined when the package does not exist / was not looked up.
 * @returns {{ profile: string, source: string, command: string, install: string, evidence: string } | null}
 */
export function manifestFallbackTarget(slug, { name = '', hasDsh = false, hasPatch = false, npm } = {}) {
  if (typeof name === 'string' && name !== '' && npm?.ok) {
    return {
      profile: 'web',
      source: `npm:${name}`,
      command: `dsh plugin --profile web add ${name}`,
      install: installRef(`npm:${name}`),
      evidence: 'manifest@package.json (npm repository match)',
    };
  }
  if (hasDsh || hasPatch) {
    return {
      profile: 'web',
      source: `github:${slug}`,
      command: `dsh plugin --profile web add github:${slug}`,
      install: installRef(`github:${slug}`),
      evidence: hasPatch ? 'manifest@cordis.patch.yml' : 'manifest@package.json#dsh',
    };
  }
  return null;
}
