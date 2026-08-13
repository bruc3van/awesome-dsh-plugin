// Shared category definitions for scripts/update.mjs and scripts/validate-curated.mjs.
// Each rule is [key, label_zh, label_en, pattern]; the fallback carries no pattern.

export const categoryRules = [
  ['ecosystem-resources', '生态与资源', 'Ecosystem & Resources', /awesome|hub|find-plugin|plugin-registry|plugin-check|plugin-dev|template|community/i],
  ['ui-experience', '界面与体验', 'UI & Experience', /\bui\b|web-ui|sidebar|navbar|side-panel|skin|theme|css|chat-width|focus-chat|input|paste|status|notification|split-pane|annotation|genui|emoji|sticker|pet|whale/i],
  ['media-vision', '设计、媒体与视觉', 'Design, Media & Vision', /vision|photo|canvas|aigc|visual|multimodal|qwen-mm|image|openpencil|design/i],
  ['web-browser', '网页与浏览器', 'Web & Browser', /web|browser|archive|computer-use|spotlight|launcher|desktop|deeplink|drag-and-drop/i],
  ['integrations-sharing', '集成与分享', 'Integrations & Sharing', /share|github|telegram|qq|zotero|acp|connect|remote|teleport|tonghuashun|stock-market|identity/i],
  ['knowledge-research', '知识与研究', 'Knowledge & Research', /knowledge|research|kb|distill|mnemon|math|lean|sieve|mineru|memory|scholar/i],
  ['developer-tools', '开发者工具', 'Developer Tools', /vscode|git|diff|inspect|custom-tool|tool-search|doctor|runtime|sandbox|encoding|schema|regex|json|csv|calculator|\bstat\b/i],
  ['agents-workflows', 'Agent、自动化与工作流', 'Agents, Automation & Workflows', /agent|workflow|harness|advisor|approval|subagent|budget|fallback|deep-research|evolve|team|loop|sentinel|checkpoint/i],
];

export const categoryFallback = ['utilities', '实用工具与其他', 'Utilities & Other'];

// Overrides may target any category, including the fallback.
export const assignableCategories = [...categoryRules, categoryFallback];

export const categoryKeys = assignableCategories.map(([key]) => key);
