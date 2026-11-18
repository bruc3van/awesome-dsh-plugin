// The install-mapping wire transform: data/packages.json records → the
// `packages` block every market consumer reads. Kept separate from the schema
// pipeline so the catalog can use it without pulling in a feed format.
//
// Editorial data is hand-maintained, so oversize text is a data bug to fix,
// never something to truncate: a cut-off install command or requirement is
// worse than a failed build. Prose fields are whitespace-folded; commands are
// only trimmed — folding is safe for prose but must never touch the string a
// user will paste.

import { installRef, isPasteSafeCommand } from './readme-install.mjs';

export const WIRE_TEXT_LIMITS = {
  profile: 30,
  source: 200,
  command: 400,
  note: 400,
  manual_instructions: 400,
  requirement: 200,
  task: 40,
  verified_via: 100,
  title: 40,
  description: 400,
  full_name: 100,
};

const SOURCE_KIND = /^(npm|github|url|link):(.+)$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const STATUSES = new Set(['readme-verified', 'install-verified', 'repo-fallback', 'unverified']);
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;

const fold = (value) => String(value).replace(/\s+/g, ' ').trim();
const codePoints = (value) => [...value].length;

function prose(value, limit, where) {
  const folded = fold(value ?? '');
  if (folded === '') throw new Error(`${where} must not be empty`);
  if (codePoints(folded) > limit) {
    throw new Error(`${where} is ${codePoints(folded)} code points, cap is ${limit} — fix data/packages.json instead of truncating`);
  }
  return folded;
}

function commandText(value, where) {
  const trimmed = String(value ?? '').trim();
  if (trimmed === '') throw new Error(`${where} must not be empty`);
  if (CONTROL_CHARS.test(trimmed) || trimmed.includes('\n')) {
    throw new Error(`${where} must be a single-line command without control characters`);
  }
  if (/[<>]/.test(trimmed)) {
    throw new Error(`${where} contains placeholder syntax (<…>) — publish a concrete command or use install_mode "manual"`);
  }
  if (!isPasteSafeCommand(trimmed)) {
    throw new Error(`${where} contains shell syntax outside the paste-safe whitelist (; | $ \` ( ) \\ …, or an unterminated quote) — a copyable command must be one plain \`dsh plugin … add\` invocation`);
  }
  if (codePoints(trimmed) > WIRE_TEXT_LIMITS.command) {
    throw new Error(`${where} is ${codePoints(trimmed)} code points, cap is ${WIRE_TEXT_LIMITS.command} — fix data/packages.json instead of truncating`);
  }
  return trimmed;
}

function stringList(values, limit, where) {
  if (values === undefined) return [];
  if (!Array.isArray(values)) throw new Error(`${where} must be an array of strings`);
  return values.map((item, index) => prose(item, limit, `${where}[${index}]`));
}

// The wire shape of one entry's install mapping: { mode, targets | manual_
// instructions, requirements?, tasks?, note?, verification }. Empty optional
// arrays and notes are omitted to keep the payload lean; key order is fixed
// by construction so regeneration is byte-stable.
export function packagesBlockFor(record) {
  if (record === null || typeof record !== 'object' || Array.isArray(record)) {
    throw new Error('mapping record must be an object');
  }
  const mode = record.install_mode ?? 'command';
  if (mode !== 'command' && mode !== 'manual') {
    throw new Error(`install_mode must be "command" or "manual", got ${JSON.stringify(mode)}`);
  }

  const block = {};
  block.mode = mode;
  if (mode === 'manual') {
    block.manual_instructions = prose(record.manual_instructions, WIRE_TEXT_LIMITS.manual_instructions, 'manual_instructions');
  } else {
    if (!Array.isArray(record.packages) || record.packages.length === 0) {
      throw new Error('command install needs a non-empty packages array');
    }
    block.targets = record.packages.map((pkg, index) => {
      const where = `packages[${index}]`;
      const source = fold(pkg?.source ?? '');
      if (!SOURCE_KIND.test(source)) {
        throw new Error(`${where}.source must look like npm:… / github:… / url:… / link:…`);
      }
      const target = {
        profile: prose(pkg.profile, WIRE_TEXT_LIMITS.profile, `${where}.profile`),
        install: prose(pkg.install, WIRE_TEXT_LIMITS.source, `${where}.install`),
        source: prose(source, WIRE_TEXT_LIMITS.source, `${where}.source`),
        command: commandText(pkg.command, `${where}.command`),
      };
      // install is the string the official "添加插件" box recognizes, derived
      // from source via the shared installRef rule. validate-packages.mjs
      // enforces the same equation offline, but the wire transform cannot
      // assume that pass ran — a wrong name must not be able to ride into
      // the feed just because the command happens to contain it.
      const expectedInstall = installRef(target.source);
      if (target.install !== expectedInstall) {
        throw new Error(`${where}.install must be ${JSON.stringify(expectedInstall)} (the installRef of ${JSON.stringify(target.source)}), got ${JSON.stringify(target.install)}`);
      }
      // And the command must carry it as a standalone token — a bare
      // substring test lets `install "foo"` ride a `foo-bar` command token.
      // Matching is scoped to the tokens after `add` (flags skipped, quotes
      // stripped) and the target token may extend the ref the way each
      // source kind pins a variant: npm names a @version/@tag suffix,
      // github CLI refs a #ref suffix. For github sources the box takes the
      // repo URL while the command keeps the CLI ref
      // (github:owner/repo[#ref]) — agreeing on the slug is enough.
      const tokens = target.command.split(' ').map((token) => token.replace(/^["']+|["']+$/g, ''));
      const addAt = tokens.indexOf('add');
      const candidates = (addAt === -1 ? tokens : tokens.slice(addAt + 1)).filter((token) => !token.startsWith('-'));
      const agrees =
        candidates.some((token) => token === target.install) ||
        (target.source.startsWith('npm:') && candidates.some((token) => token.startsWith(`${target.install}@`))) ||
        (() => {
          if (!target.source.startsWith('github:')) return false;
          const ref = `github:${target.source.slice(7).split('#')[0]}`;
          return candidates.some((token) => token === ref || token.startsWith(`${ref}#`));
        })();
      if (!agrees) {
        throw new Error(`${where}.command must reference install (${target.install}) — the paste-ready name and the terminal command must agree`);
      }
      const note = fold(pkg.note ?? '');
      if (note !== '') target.note = prose(note, WIRE_TEXT_LIMITS.note, `${where}.note`);
      return target;
    });
  }

  const requirements = stringList(record.requirements, WIRE_TEXT_LIMITS.requirement, 'requirements');
  if (requirements.length > 0) block.requirements = requirements;
  const tasks = stringList(record.tasks, WIRE_TEXT_LIMITS.task, 'tasks');
  if (tasks.length > 0) block.tasks = tasks;
  const note = fold(record.note ?? '');
  if (note !== '') block.note = prose(note, WIRE_TEXT_LIMITS.note, 'note');

  const status = record.status;
  if (!STATUSES.has(status)) {
    throw new Error(`status must be one of ${[...STATUSES].join(' / ')}, got ${JSON.stringify(status)}`);
  }
  const verification = { status };
  if (status !== 'unverified') {
    if (!DATE_PATTERN.test(record.verified_date ?? '')) {
      throw new Error('verified_date must be YYYY-MM-DD when status is not "unverified"');
    }
    verification.date = record.verified_date;
    verification.via = prose(record.verified_via, WIRE_TEXT_LIMITS.verified_via, 'verified_via');
  }
  block.verification = verification;
  return block;
}
