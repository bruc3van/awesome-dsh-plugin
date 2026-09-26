// Tests for the generated-page escaping (scripts/markdown.mjs) and the README
// data-island replacement (scripts/render.mjs), run with
//   node --test scripts/test-render.mjs
// Repository descriptions are owner-written and can change after approval, so
// every generated table must render them as literal text.

import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeCell } from './markdown.mjs';
import { replaceRegion } from './render.mjs';

test('escapeCell keeps table rows intact', () => {
  assert.equal(escapeCell('a | b\nc\r\nd'), 'a \\| b c d');
  assert.equal(escapeCell(null), '');
  assert.equal(escapeCell(42), '42');
});

test('escapeCell neutralises HTML, links, and marker comments', () => {
  assert.equal(escapeCell('image → <vision-context> primitives'), 'image → &lt;vision-context&gt; primitives');
  assert.equal(escapeCell('see [docs](https://evil.example)'), 'see \\[docs\\](https://evil.example)');
  assert.equal(escapeCell('![x](y)'), '!\\[x\\](y)');
  assert.equal(escapeCell('<!-- dsh:leaderboard:end -->'), '&lt;!-- dsh:leaderboard:end --&gt;');
  // & first, so an existing entity shows literally instead of decoding.
  assert.equal(escapeCell('Q&A &lt;'), 'Q&amp;A &amp;lt;');
  // A pre-escaped pipe stays one literal backslash plus one literal pipe.
  assert.equal(escapeCell('a\\|b'), 'a\\\\\\|b');
});

test('escapeCell never opens a code span, so escapes inside backticks still decode', () => {
  // Inside a code span &lt; would render verbatim; with the backticks escaped
  // there is no code span and the entities decode back to < >.
  assert.equal(
    escapeCell('run `dsh --resume <session-id> "task"`'),
    'run \\`dsh --resume &lt;session-id&gt; "task"\\`',
  );
  assert.equal(escapeCell('``double``'), '\\`\\`double\\`\\`');
});

test('replaceRegion pairs the end marker with the start marker, not an earlier copy', () => {
  const start = '<!-- s -->';
  const end = '<!-- e -->';
  const page = `intro ${end}\n${start}\nold\n${end}\noutro`;
  const warnings = [];
  assert.equal(replaceRegion(page, start, end, 'new', 'page', warnings), `intro ${end}\n${start}\nnew\n${end}\noutro`);
  assert.deepEqual(warnings, []);
});

test('replaceRegion leaves the page untouched when a marker is missing', () => {
  const warnings = [];
  assert.equal(replaceRegion('no markers', '<!-- s -->', '<!-- e -->', 'x', 'page', warnings), 'no markers');
  assert.equal(warnings.length, 1);
});
