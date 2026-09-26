// Shared Markdown escaping for every generated table (CATALOG volumes,
// TOP200.md, the README data islands, pending.md, MARKET.md, the packages
// work list).
//
// Repository descriptions are written by repository owners and can change at
// any time after approval, so they are untrusted input. Escaping only the
// table-breaking characters is not enough: raw `<tag>` text is swallowed by
// GitHub's HTML sanitizer (the text silently disappears), `[text](url)` turns
// into a live link on our pages, and an HTML comment could impersonate the
// `<!-- dsh:*:end -->` markers that delimit the README data islands.
//
// The result renders as the literal text: HTML entities for & < >, backslash
// escapes for \ ` [ ] |, and line breaks folded to spaces so a row stays a
// row. Backticks must be escaped too: entities and backslash escapes are not
// decoded inside a code span, so a description like `--resume <id>` would
// otherwise show "&lt;id&gt;" verbatim. The whole cell is plain text, with
// the author's backticks displayed as literal characters.
export function escapeCell(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\\', '\\\\')
    .replaceAll('`', '\\`')
    .replaceAll('[', '\\[')
    .replaceAll(']', '\\]')
    .replaceAll('|', '\\|')
    .replace(/\r\n|\r|\n/g, ' ');
}
