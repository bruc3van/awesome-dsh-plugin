// Tests for the shared README install-command extractor, run with
//   node --test scripts/test-readme-install.mjs
// These rules decided what landed in data/packages.json during the batch
// fill, so every confidence rule gets a regression test: what is extracted,
// what is truncated, and — just as important — what is refused.

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cleanSegment,
  commandsFrom,
  classify,
  extractInstallTargets,
  npmBase,
} from './readme-install.mjs';

test('cleanSegment strips markdown and trailing comments', () => {
  assert.equal(cleanSegment('  `- dsh plugin add x`  '), 'dsh plugin add x');
  assert.equal(cleanSegment('> **dsh plugin add x**'), 'dsh plugin add x');
  assert.equal(cleanSegment('dsh plugin add x # one-line install'), 'dsh plugin add x');
  assert.equal(cleanSegment('github:owner/repo#main is not a comment cut'), 'github:owner/repo#main is not a comment cut');
});

test('commandsFrom keeps install lines and rejects other subcommands', () => {
  const cmds = (text) => commandsFrom(text).map((s) => s.command);
  assert.deepEqual(cmds(['dsh plugin --profile web add dsh-x']), ['dsh plugin --profile web add dsh-x']);
  assert.deepEqual(cmds(['npx @deepseek-ai/dsh plugin --profile web add dsh-x']), ['npx @deepseek-ai/dsh plugin --profile web add dsh-x']);
  // Runner flags between npx and the package must not cut the prefix off —
  // the recorded command has to stay runnable when copied alone. (The prose
  // tail survives at this stage; targetsFrom truncates at the target.)
  assert.deepEqual(
    cmds(['install it with one command: `npx -y @deepseek-ai/dsh plugin --profile web add dsh-x`. See the guide for details.']),
    ['npx -y @deepseek-ai/dsh plugin --profile web add dsh-x . See the guide for details.'],
  );
  assert.deepEqual(
    cmds(['npx --legacy-peer-deps=false @deepseek-ai/dsh plugin --profile web add dsh-x']),
    ['npx --legacy-peer-deps=false @deepseek-ai/dsh plugin --profile web add dsh-x'],
  );
  // CJK prose glued to the match must not leak into the command.
  assert.deepEqual(cmds(['插件：dsh plugin --profile web add dsh-x']), ['dsh plugin --profile web add dsh-x']);
  assert.deepEqual(cmds(['DSH_HOME=~/.ohdsh npx @deepseek-ai/dsh plugin --profile desktop add dsh-x']), [
    'DSH_HOME=~/.ohdsh npx @deepseek-ai/dsh plugin --profile desktop add dsh-x',
  ]);
  assert.deepEqual(cmds(['dsh plugin --profile web remove dsh-x']), []);
  assert.deepEqual(cmds(['dsh plugin update dsh-x']), []);
  assert.deepEqual(cmds(['dsh plugin --profile web add dsh-x && dsh plugin --profile web add dsh-y']), [
    'dsh plugin --profile web add dsh-x',
    'dsh plugin --profile web add dsh-y',
  ]);
  // A banned word inside the plugin name is fine — only the span between
  // `plugin` and `add` decides.
  assert.deepEqual(cmds(['dsh plugin --profile web add dsh-update-guard']), ['dsh plugin --profile web add dsh-update-guard']);
});

test('classify separates github / url / npm / local and rejects placeholders', () => {
  assert.deepEqual(classify('github:SomeOwner/Repo#main'), { kind: 'github', source: 'github:SomeOwner/Repo#main' });
  assert.deepEqual(classify('github:you/dsh-plugin-template'), { kind: 'other' });
  assert.deepEqual(classify('github:USERNAME/dsh-skin#main'), { kind: 'other' });
  assert.deepEqual(classify('https://github.com/o/r/releases/download/v1/r.tgz'), {
    kind: 'url',
    source: 'url:https://github.com/o/r/releases/download/v1/r.tgz',
  });
  assert.deepEqual(classify('git+https://github.com/o/r.git'), { kind: 'url', source: 'url:git+https://github.com/o/r.git' });
  assert.deepEqual(classify('@scope/name@1.2.3'), { kind: 'npm', source: 'npm:@scope/name@1.2.3' });
  assert.deepEqual(classify('dsh-x@latest'), { kind: 'npm', source: 'npm:dsh-x@latest' });
  assert.deepEqual(classify('./local'), { kind: 'local' });
  assert.deepEqual(classify('link:../repo'), { kind: 'local' });
  assert.deepEqual(classify('D:\\path\\repo'), { kind: 'local' });
  assert.deepEqual(classify('${VAR}'), { kind: 'other' });
});

test('npmBase strips versions but keeps scoped names intact', () => {
  assert.equal(npmBase('@scope/name@1.2.3'), '@scope/name');
  assert.equal(npmBase('@scope/name'), '@scope/name');
  assert.equal(npmBase('dsh-x@latest'), 'dsh-x');
  assert.equal(npmBase('dsh-x'), 'dsh-x');
});

test('extractInstallTargets: flags before the target, quoted github refs, prose truncation', () => {
  // Self-referencing channels win; unrelated packages in the same README
  // (here: the nanmicoder and modlens lines) are correctly left out.
  const text = [
    'Install: `dsh plugin --profile web add --save-exact @nanmicoder/dsh-agent-teams@0.1.21`',
    'or `dsh plugin --profile web add "github:PerryLink/dsh-auto-review#main"`',
    'npm channel: dsh plugin --profile web add dsh-auto-review',
    'The plugin @liustack/modlens@3.26.5 installs via npx @deepseek-ai/dsh plugin --profile web add @liustack/modlens@3.26.5 . See the setup guide for details.',
  ].join('\n');
  const { picks } = extractInstallTargets(text, { owner: 'PerryLink', repo: 'dsh-auto-review' });
  assert.deepEqual(picks.map((p) => p.source), ['github:PerryLink/dsh-auto-review#main', 'npm:dsh-auto-review']);
  assert.equal(picks[0].command, 'dsh plugin --profile web add "github:PerryLink/dsh-auto-review#main"');
  assert.equal(picks[1].command, 'dsh plugin --profile web add dsh-auto-review');

  // Same README read for its own repo: the flag survives and the pinned
  // version is kept verbatim; reading it for modlens truncates the prose.
  const flagged = extractInstallTargets(text, { owner: 'NanmiCoder', repo: 'dsh-agent-teams' }).picks;
  assert.equal(flagged.length, 1);
  assert.equal(flagged[0].command, 'dsh plugin --profile web add --save-exact @nanmicoder/dsh-agent-teams@0.1.21');

  const renamed = extractInstallTargets(text, { owner: 'liustack', repo: 'modlens' }).picks;
  assert.equal(renamed.length, 1);
  assert.ok(renamed[0].command.endsWith('@liustack/modlens@3.26.5'));
  assert.ok(!renamed[0].command.includes('See the'), 'prose must be truncated');
});

test('extractInstallTargets: recorded commands are verbatim substrings of cleaned segments', () => {
  const lines = [
    '1. run npx -y @deepseek-ai/dsh plugin --profile web add dsh-foo',
    '2. or add -w @owner/dsh-foo',
  ];
  const { picks } = extractInstallTargets(lines.join('\n'), { owner: 'owner', repo: 'dsh-foo' });
  assert.ok(picks.length >= 1);
  const segs = commandsFrom(lines.join('\n')).map((s) => s.seg);
  for (const p of picks) assert.ok(segs.some((s) => s.includes(p.command)), p.command);
});

test('commandsFrom handles markdown table rows wherever the command cell sits', () => {
  const middle = commandsFrom('| 0.1.7-rc.1+ | dsh plugin --profile web add dsh-bar@latest | 0.21.1 |').map((s) => s.command);
  assert.deepEqual(middle, ['dsh plugin --profile web add dsh-bar@latest']);
  const first = commandsFrom('> | dsh plugin --profile web add dsh-bar | 0.21.1， ^0.1.7-rc.1 |').map((s) => s.command);
  assert.deepEqual(first, ['dsh plugin --profile web add dsh-bar']);
});

test('extractInstallTargets: npm variants collapse to the best form per package', () => {
  const text = [
    '| 0.1.7 | dsh plugin --profile web add dsh-bar@0.19.1 | pinned |',
    '| latest | dsh plugin --profile web add dsh-bar@latest |',
    '| simple | dsh plugin --profile web add dsh-bar |',
  ].join('\n');
  const { picks } = extractInstallTargets(text, { owner: 'o', repo: 'dsh-bar' });
  assert.equal(picks.length, 1);
  assert.equal(picks[0].source, 'npm:dsh-bar');
});

test('extractInstallTargets: no self-match adopts a single distinct package, refuses several', () => {
  const renamed = extractInstallTargets('install: dsh plugin --profile web add totally-other-name', {
    owner: 'o', repo: 'renamed-repo',
  });
  assert.equal(renamed.picks.length, 1);
  assert.equal(renamed.picks[0].source, 'npm:totally-other-name');

  const ambiguous = extractInstallTargets(
    ['dsh plugin --profile web add pkg-a', 'dsh plugin --profile web add pkg-b'].join('\n'),
    { owner: 'o', repo: 'multi-repo' },
  );
  assert.equal(ambiguous.picks.length, 0);
  assert.equal(ambiguous.ambiguous, true);
});

test('extractInstallTargets: local-only installs and dsh:// deep links are refused', () => {
  const local = extractInstallTargets('git clone … && dsh plugin --profile web add link:./repo', {
    owner: 'o', repo: 'repo',
  });
  assert.equal(local.picks.length, 0);
  assert.equal(local.localOnly, true);

  const deepLink = extractInstallTargets('click dsh://plugin/install?id=x to install', {
    owner: 'o', repo: 'x',
  });
  assert.equal(deepLink.picks.length, 0);
  assert.equal(deepLink.localOnly, false);
});

test('extractInstallTargets: caps at three targets, github and npm channels coexist', () => {
  const text = [
    'dsh plugin --profile web add github:o/dsh-x',
    'dsh plugin --profile web add dsh-x',
    'dsh plugin --profile desktop add github:o/dsh-x',
    'dsh plugin --profile web add dsh-x-extra',
  ].join('\n');
  const { picks } = extractInstallTargets(text, { owner: 'o', repo: 'dsh-x' });
  assert.equal(picks.length, 3);
  assert.deepEqual(picks.map((p) => `${p.profile} ${p.source}`), [
    'web github:o/dsh-x',
    'web npm:dsh-x',
    'desktop github:o/dsh-x',
  ]);
});
