// The shared install-command extractor for DSH plugin READMEs — the rules
// behind the 2026-09-26 batch fill of data/packages.json and the weekly
// upstream re-verification (scripts/reverify-packages.mjs). Pure functions,
// no I/O, so the whole confidence model is unit-testable:
//
//   1. Clean each line (strip markdown backticks/emphasis, blockquote and
//      list markers, collapse whitespace, cut at a trailing comment), split
//      markdown-table rows into cells, split on && / ;, keep segments
//      containing `dsh plugin … add` whose subcommand span before `add`
//      holds no other subcommand (remove/update/doctor/…). Hyphenated plugin
//      names like dsh-update-guard stay safe: only the span between `plugin`
//      and `add` is checked.
//   2. The command is reconstructed from the `dsh plugin` match backwards
//      over runner prefixes (npx, pnpm, ENV=x, @scope/pkg) and truncated at
//      the install target, so same-line prose never leaks into what a user
//      would copy.
//   3. Targets: skip flags between `add` and the target (-w, --save-exact),
//      strip surrounding quotes, classify as github: / url: / npm: / local.
//      Placeholder slugs from template READMEs (github:you/…) are rejected.
//   4. Selection: targets that self-reference the repo win (github:<owner>/,
//      or an npm/url target naming the repo's name part); otherwise the
//      README's target is adopted only when the whole README points at
//      exactly one package (legit repo→npm renames). Same-package npm
//      variants collapse by base name, preferring unversioned > @latest >
//      pinned. Local dev installs (link:/file:/paths) are never published.
//
// Every recorded command is expected to be a verbatim substring of a cleaned
// README segment — callers rely on that for self-verification.

// Template READMEs ship placeholder slugs (github:you/dsh-plugin-template,
// USERNAME/dsh-skin#main) — never publishable as install targets. Kept to
// names that only ever appear in templates: real owners are unlikely to be
// called any of these, and over-matching would silently drop live mappings.
export const PLACEHOLDER_OWNERS = new Set([
  'you', 'your', 'you-name', 'username', 'user', 'owner', 'yourname', 'your-name',
]);

export const npmBase = (name) => {
  const at = name.lastIndexOf('@');
  return at > 0 ? name.slice(0, at) : name;
};

export function cleanSegment(raw) {
  let line = raw.replace(/`+/g, ' ').replaceAll('**', '').trim();
  line = line.replace(/^\s*(?:[-*+>|$~]+\s*)+/, '');
  line = line.replace(/\s+/g, ' ').trim();
  const ci = line.indexOf(' #');
  if (ci > 0) line = line.slice(0, ci).trim();
  return line;
}

export function commandsFrom(text) {
  const segments = [];
  for (const raw of String(text).split(/\r?\n/)) {
    // Markdown tables: split into cells and treat every cell as its own
    // candidate line. A command sitting in a middle cell survives with its
    // surrounding cells (version columns, host requirements, …) stripped,
    // and junk that used to trail a first-cell command is gone for good.
    const cleaned = cleanSegment(raw);
    const cells = /\s\|\s/.test(cleaned) ? cleaned.split(/\s\|\s/) : [cleaned];
    for (const cell of cells) {
    for (const piece of cell.split(/\s*(?:&&|;)\s*/)) {
      const seg = piece.trim();
      if (seg === '' || !/\bdsh\s+plugin\b/.test(seg) || !/\badd\b/.test(seg)) continue;
      const m = /\bdsh\s+plugin\b/.exec(seg);
      let start = seg.lastIndexOf(' ', m.index) + 1;
      // The command starts at the `dsh plugin` token — or earlier when that
      // token is itself the bin of a scoped runner package (@deepseek-ai/dsh)
      // or an env assignment. Anything else glued to it (CJK prose like
      // "插件：dsh plugin …") means start at the match itself.
      const space = seg.indexOf(' ', start);
      const leadToken = seg.slice(start, space === -1 ? undefined : space);
      if (leadToken !== 'dsh' && !/^@[\w.-]+\/[\w.-]+$/.test(leadToken) && !/^[A-Z_][A-Z0-9_]*=\S*$/.test(leadToken)) {
        start = m.index;
      }
      const tail = seg.slice(start);
      const before = seg.slice(0, start).trim();
      const tok = before === '' ? [] : before.split(' ');
      const keep = [];
      while (tok.length) {
        const t = tok[tok.length - 1];
        if (
          /^(npx|pnpm|yarn|node|bunx?|dlx)$/i.test(t) ||
          /^@[\w.-]+\/[\w.-]+$/.test(t) ||
          /^[A-Z_][A-Z0-9_]*=\S*$/.test(t) ||
          t.startsWith('-') // runner flags live here: npx -y, npx --legacy-peer-deps=false, pnpm --package …
        ) {
          keep.unshift(t);
          tok.pop();
        } else break;
      }
      const command = [...keep, tail].join(' ').replace(/\s+/g, ' ').trim();
      // Reject other subcommands: a keyword like remove/update/doctor between
      // `plugin` and the first standalone `add` means this is not an install
      // line; only that span is checked so plugin names stay safe.
      const after = command.slice(command.indexOf('plugin') + 'plugin'.length);
      const addM = /(?:^|\s)add\s+/.exec(after);
      if (!addM) continue;
      if (/\b(remove|uninstall|update|list|doctor|repair|verify|enable|disable)\b/i.test(after.slice(0, addM.index))) continue;
      segments.push({ seg: cell, command });
    }
    }
  }
  return segments;
}

export function classify(target) {
  const t = target;
  if (/^github:[\w.-]+\/[\w.-]+(#\S+)?$/i.test(t)) {
    const owner = t.slice(7).split('/')[0].toLowerCase();
    if (PLACEHOLDER_OWNERS.has(owner)) return { kind: 'other' };
    return { kind: 'github', source: `github:${t.slice(7)}` };
  }
  if (/^(?:git\+)?https:\/\/\S+$/.test(t)) return { kind: 'url', source: `url:${t}` };
  if (
    /^(?:file|link):/i.test(t) ||
    t === '.' ||
    t.startsWith('./') ||
    t.startsWith('.\\') ||
    t.startsWith('/') ||
    t.startsWith('~') ||
    /^[A-Za-z]:[\\/]/.test(t)
  ) {
    return { kind: 'local' };
  }
  if (/^(@[\w.-]+\/)?[\w.-]+(@[\w.-]+)?$/.test(t) && /[a-z]/i.test(t) && !t.includes(':')) {
    return { kind: 'npm', source: `npm:${t}` };
  }
  return { kind: 'other' };
}

export function targetsFrom(segments) {
  const found = [];
  for (const { command } of segments) {
    const addM = /(?:^|\s)add\s+/.exec(command);
    if (!addM) continue;
    const restStart = addM.index + addM[0].length;
    const rest = command.slice(restStart);
    // Skip flags between `add` and the target (-w, --save-exact, …); the
    // first positional token is the install target, quotes included.
    let offset = 0;
    let targetToken = null;
    for (const token of rest.split(' ')) {
      if (token.startsWith('-')) {
        offset += token.length + 1;
        continue;
      }
      targetToken = token;
      break;
    }
    if (targetToken === null) continue;
    const target = targetToken.replace(/^["']+|["']+$/g, '');
    if (target === '' || /[<>{}"'`$\\|]/.test(target)) continue;
    // The recorded command ends at the target — same-line prose after it
    // (". See the setup guide…") is not part of what a user should copy.
    const cleanCommand = command.slice(0, restStart + offset + targetToken.length);
    const cls = classify(target);
    if (cls.kind === 'other' || cls.kind === 'local') continue;
    const profile = /--profile[= ]([\w.-]+)/.exec(command)?.[1] ?? 'default';
    const dedupeKey = cls.kind === 'npm' ? `npm:${npmBase(target)}` : cls.source;
    found.push({ target, cls, profile, command: cleanCommand, dedupeKey });
  }
  return found;
}

export const MAX_TARGETS = 3;

export function pick(found, ownerLower, repoName, maxTargets = MAX_TARGETS) {
  const self = found.filter((f) => {
    const t = f.target.toLowerCase();
    if (f.cls.kind === 'github') return t.startsWith(`github:${ownerLower}/`) || t.includes(repoName);
    if (f.cls.kind === 'url') return t.includes(`${ownerLower}/${repoName}`) || t.includes(repoName);
    const base = npmBase(t);
    return base === repoName || base.endsWith(`/${repoName}`);
  });
  let chosen = self;
  if (chosen.length === 0) {
    // No self-reference: adopt the README's install target only when the
    // whole README points at exactly one package (legit renames like a repo
    // named X whose npm package is Y).
    const distinct = new Set(found.map((f) => f.dedupeKey));
    if (distinct.size !== 1) return { picks: [], ambiguous: distinct.size > 1 };
    chosen = found;
  }
  // Group by profile + package; among versions of the same npm package
  // prefer the unversioned form, then @latest, then a pinned one.
  const rank = (f) =>
    f.cls.kind !== 'npm' ? 0 : !f.target.includes('@', 1) ? 0 : f.target.endsWith('@latest') ? 1 : 2;
  const groups = new Map();
  for (const f of chosen) {
    const key = `${f.profile} ${f.dedupeKey}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(f);
  }
  const picks = [];
  for (const list of groups.values()) {
    const best = [...list].sort((a, b) => rank(a) - rank(b))[0];
    picks.push({ profile: best.profile, source: best.cls.source, command: best.command });
    if (picks.length >= maxTargets) break;
  }
  return { picks, ambiguous: false };
}

// The exact string to paste into the official "插件 → 添加插件" box. That box
// recognizes npm package names (the part after `dsh plugin add`, version
// included) and Git repository URLs — NOT the CLI's github:owner/repo ref
// syntax. So npm:/url: classification prefixes are stripped, and github:
// refs become their https://github.com/owner/repo form; a #ref stays in the
// terminal command only.
export function installRef(source) {
  if (source.startsWith('npm:')) return source.slice(4);
  if (source.startsWith('github:')) return `https://github.com/${source.slice(7).split('#')[0]}`;
  return source.startsWith('url:') ? source.slice(4) : source;
}

// The one-stop helper: everything a caller needs from one README.
// Returns { picks, ambiguous, localOnly } — picks is [] when nothing
// confident can be published. Pass a larger maxTargets to see every
// candidate (re-verification compares against the full set).
export function extractInstallTargets(text, { owner, repo, maxTargets = MAX_TARGETS }) {
  const segments = commandsFrom(text);
  const found = targetsFrom(segments);
  const { picks, ambiguous } = pick(found, owner.toLowerCase(), repo.toLowerCase(), maxTargets);
  return {
    picks: picks.map((p) => ({ ...p, install: installRef(p.source) })),
    ambiguous,
    localOnly: found.length === 0 && segments.length > 0,
    found,
    segments,
  };
}
