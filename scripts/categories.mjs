// Shared category definitions for scripts/update.mjs and scripts/validate-curated.mjs.
// Each rule is [key, label_zh, label_en, pattern]; the fallback carries no pattern.
//
// Patterns match anywhere in name + description + topics, so short keywords
// must be anchored: a bare `hub` matched every "GitHub" mention (41% of the
// ecosystem volume), `pet` matched repetition/snippets/puppeteer, `lean`
// matched clean/cleanup, and `kb` matched workbench/taskboard.
//
// 2026-11-19 recalibration (data/review/2026-11-19-category-recalibration.md):
// - `harness` was dropped from the agents-workflows pattern: DSH is itself a
//   harness, so the boilerplate rode in every description and the catch-all
//   swallowed 74% of the corpus (7,427 of 9,982 entries matched on it alone).
// - Every rule gained keywords mined from a full semantic re-review of those
//   9,980 displaced entries (Temp/category-recalibration/mine-keywords.mjs
//   measured precision on the decided set; only tokens scoring ≥0.93 with
//   verified samples were promoted — e.g. `token`/`余额` here mean usage
//   meters, which is what they meant in 98%+ of the reviewed corpus).
// - `auth`/`secrets`/`meter` carry word-boundary guards: bare they would
//   substring-match "author", "parameter", "costume".

export const categoryRules = [
  [
    'ecosystem-resources',
    '生态与资源',
    'Ecosystem & Resources',
    /awesome|(?<!git)hub|find-plugin|plugin-registry|plugin-check|plugin-dev|template|community|插件管理|技能管理|plugin[- ]?manager|skills?[- ]?manager/i,
  ],
  [
    'ui-experience',
    '界面与体验',
    'UI & Experience',
    /\bui\b|web-ui|sidebar|navbar|side-panel|skin|theme|css|chat-width|focus-chat|input|paste|status|notification|split-pane|annotation|genui|emoji|sticker|\bpet|deskpet|whale|usage|token|composer|cost|balance|quota|billing|\bmeter\b|pricing|price|spend|dashboard|widget|badge|picker|selector|splash|slider|dock|输入框|用量|余额|费用|花费|计费|额度|峰谷|时段|悬浮|按钮|状态栏/i,
  ],
  [
    'media-vision',
    '设计、媒体与视觉',
    'Design, Media & Vision',
    /vision|photo|canvas|aigc|visual|multimodal|qwen-mm|image|openpencil|design|tts|asr|speech/i,
  ],
  ['web-browser', '网页与浏览器', 'Web & Browser', /web|browser|archive|computer-use|spotlight|launcher|desktop|deeplink|drag-and-drop/i],
  [
    'integrations-sharing',
    '集成与分享',
    'Integrations & Sharing',
    /share|github(?!\.com|usercontent)|telegram|qq|zotero|acp|connect|remote|teleport|tonghuashun|stock-market|identity|lark|feishu|飞书|微信|wechat/i,
  ],
  ['knowledge-research', '知识与研究', 'Knowledge & Research', /knowledge|research|\bkb|distill|mnemon|math|\blean4?\b|sieve|mineru|memory|scholar/i],
  [
    'developer-tools',
    '开发者工具',
    'Developer Tools',
    /vscode|git|diff|inspect|custom-tool|tool-search|doctor|runtime|sandbox|encoding|schema|regex|json|csv|calculator|\bstat\b|proxy|failover|\bauth\b|oauth|\bsecrets?\b/i,
  ],
  // Multi-agent orchestration is carved out of the agent catch-all below so the
  // subcategory gets its own catalog volume; the pattern is matched before it,
  // so nothing outside the old agents-workflows pool can move categories.
  ['multi-agents', '多 Agent 编排与协作', 'Multi-Agent Orchestration & Teams', /subagent|multi[- ]?agent|agent[- ]?team|\bteams?\b|swarm|fleet|crew|squad|orchestrat|commander/i],
  [
    'agents-workflows',
    'Agent、自动化与工作流',
    'Agents, Automation & Workflows',
    /agent|workflow|advisor|approval|subagent|budget|fallback|deep-research|evolve|team|loop|sentinel|checkpoint|compaction|compression/i,
  ],
];

export const categoryFallback = ['utilities', '实用工具与其他', 'Utilities & Other'];

// Overrides may target any category, including the fallback.
export const assignableCategories = [...categoryRules, categoryFallback];

export const categoryKeys = assignableCategories.map(([key]) => key);
