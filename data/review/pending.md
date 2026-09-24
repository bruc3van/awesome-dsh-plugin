# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-24**
- 快照日期 / Snapshot date: **2026-09-24 (UTC)**
- 待审核 / Pending: **116**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **28**
- Star 异常增长 / Star-growth alerts: **4** — 先看下方告警节 / see the alert section first

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`
- desktop 客户端 / 桌面壳 / 启动器 → `leaderboard_exclusions`（TOP200 与下游市场都不出现）
- market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ `leaderboard_exclusions` + `market_exclusions` 留底（市场不能包含市场）
- 其余非插件形态（手册教程、Docker、VS Code 扩展、配套工具等）与无安装路径的通用工具 → `excluded_repos` 整体剔除（同步从 `approved.json` 移除）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录
- Star 异常增长（见告警节）→ 先做增强分析；热度并非来自 DSH 插件本身时，核准也加入 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`
- Desktop client / shell / launcher → `leaderboard_exclusions` (absent from both TOP200.md and the downstream market)
- Market class (plugin market, store, skill mall, desktop with a built-in market) → `leaderboard_exclusions` + a `market_exclusions` backstop entry (the market cannot include another market)
- Other non-plugin forms (handbooks, Docker, VS Code extensions, companion tooling) and generic tools without a DSH install path → `excluded_repos` outright (also removed from `approved.json`)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright
- Star-growth alerts (see the section below) → extra analysis first; if the stars are not from the DSH plugin itself, approve into `leaderboard_exclusions` as well

See [data/review/README.md](./README.md) for the full convention.

## ⚠️ Star 异常增长 / Star-growth alerts

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-09-23** / vs previous snapshot **2026-09-23**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) | 待审 / pending | 673 | — | 40 | 40d | 待审高星 | 核准即 Top 18 |
| ⚠️ [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) | 待审 / pending | 266 | — | 17 | 6d | 待审高星 | 核准即榜 #49 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 9084 | +376 | 369 | 41d | 日增百星 | 日增 +376★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7093 | +210 | 512 | 93d | 日增百星 | 日增 +210★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) ⚠️ | 673 | 2026-08-14 | 2026-09-24 | An open-source Office workspace where people and AI agents create, collaborate, and review together. |
| 2 | [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) ⚠️ | 266 | 2026-09-17 | 2026-09-24 | 你的AI学习搭档：定路线、讲知识、做项目，边学边做，学透一门科目 |
| 3 | [memorax-ai/dsh-turn-fold](https://github.com/memorax-ai/dsh-turn-fold) | 13 | 2026-08-19 | 2026-09-24 | Codex-style completed-turn folding for DeepSeek Harness, powered by dsh-harmony. |
| 4 | [KurohaneKaoruko/DSH-Novelist](https://github.com/KurohaneKaoruko/DSH-Novelist) | 8 | 2026-08-13 | 2026-09-24 | 小说作家智能体预设，用于在DeepSeek Herness里让AI写小说。 |
| 5 | [zmh2000829/dsh-web-search-multi](https://github.com/zmh2000829/dsh-web-search-multi) | 6 | 2026-08-18 | 2026-09-24 | Multi-provider web search for DeepSeek Harness: SearXNG, Brave, Tavily, Gemini, and Wikipedia with per-conversation control. |
| 6 | [yangyu666/dsh-jev-prune](https://github.com/yangyu666/dsh-jev-prune) | 3 | 2026-09-21 | 2026-09-24 | Jev-judged context compaction for DeepSeek Harness: semantic tool-result pruning + deterministic receipt compaction |
| 7 | [feiwell/dsh-enhance-prompt](https://github.com/feiwell/dsh-enhance-prompt) | 2 | 2026-09-24 | 2026-09-24 | 这是一个提示词增强插件 |
| 8 | [Jaylor-Wang/dsh-tool-antigravity](https://github.com/Jaylor-Wang/dsh-tool-antigravity) | 2 | 2026-09-18 | 2026-09-24 | Connect Google Antigravity Code Assist OAuth accounts to DeepSeek Harness for Gemini and Claude streaming LLM routing and Nano Banana 2 image generation. |
| 9 | [33Wade333/dsh-dashboard-ai](https://github.com/33Wade333/dsh-dashboard-ai) | 1 | 2026-09-24 | 2026-09-24 | AI-powered universal dashboard plugin for DeepSeek Harness |
| 10 | [adithyanraj03/dsh-schedule-later](https://github.com/adithyanraj03/dsh-schedule-later) | 1 | 2026-09-23 | 2026-09-24 | Schedule a message into a dsh chat for later: a Schedule button in the message box with a date and time picker, a sidebar panel of pending messages across chats, host-side delivery with the browser closed, and model tools plus a skill. |
| 11 | [alllllinnrann/dsh-inapp-browser](https://github.com/alllllinnrann/dsh-inapp-browser) | 1 | 2026-09-21 | 2026-09-23 | DeepSeek Harness 内置浏览器：人机共享网页、鼠标键盘操作与高清截图 |
| 12 | [anze225-max/dsh-mimo-connect](https://github.com/anze225-max/dsh-mimo-connect) | 1 | 2026-09-24 | 2026-09-24 | 复用小米 MiMo 登录态，把 MiMo 模型接入 DeepSeek Harness。桌面端已登录即零配置，也可独立登录；无常驻进程、无开机自启。Bring Xiaomi MiMo models into DeepSeek Harness with zero configuration. |
| 13 | [bandianliancha/feishu-workspace-bridge](https://github.com/bandianliancha/feishu-workspace-bridge) | 1 | 2026-09-17 | 2026-09-24 | Real-time two-way bridge between DSH workspaces and private Feishu groups, with Markdown and durable delivery. |
| 14 | [funcpn/volens](https://github.com/funcpn/volens) | 1 | 2026-09-11 | 2026-09-24 | Keeps a project's design doc in step with its decisions instead of letting it drift: an append-only decision log, a design snapshot derived from it, and a hook that refreshes it automatically. ADR-style docs that stay fresh. Ships as a plugin for Claude Code, Codex and DeepSeek Harness. |
| 15 | [greyhackintoch-dev/dsh-month-tokens](https://github.com/greyhackintoch-dev/dsh-month-tokens) | 1 | 2026-09-24 | 2026-09-24 | DeepSeek Harness plugin: a calendar-month token counter for this DSH home and opencode, from local data only, resetting at 00:00 on the 1st. |
| 16 | [hunan36/dsh-git-flow](https://github.com/hunan36/dsh-git-flow) | 1 | 2026-09-19 | 2026-09-24 | Workspace git branch switcher, commit composer with AI-written messages, and push for DeepSeek Harness |
| 17 | [Jaylor-Wang/dsh-awesome-agent-preset](https://github.com/Jaylor-Wang/dsh-awesome-agent-preset) | 1 | 2026-09-24 | 2026-09-24 | Ultra-lean daily coding agent preset for DeepSeek Harness (dsh) |
| 18 | [jypjypjypjyp/dsh-music-studio](https://github.com/jypjypjypjyp/dsh-music-studio) | 1 | 2026-09-24 | 2026-09-24 | Music composition for DeepSeek Harness: the model writes a score against a bundled composing skill, and a play_score tool renders it as an inline card with a piano roll, Web Audio playback and WAV/JSON export. |
| 19 | [LoveDoLove/Veyra](https://github.com/LoveDoLove/Veyra) | 1 | 2026-09-23 | 2026-09-24 | Persistent engineering memory for DeepSeek Harness. |
| 20 | [memorax-ai/bites-the-dsh](https://github.com/memorax-ai/bites-the-dsh) | 1 | 2026-08-19 | 2026-09-24 | Read-only, scriptable session playback for the DeepSeek Harness WebUI |
| 21 | [memorax-ai/dsh-render-engine](https://github.com/memorax-ai/dsh-render-engine) | 1 | 2026-08-20 | 2026-09-24 | Shiki, syntax highlighting, and code rendering services for DeepSeek Harness |
| 22 | [memorax-ai/the-binding-of-dsh](https://github.com/memorax-ai/the-binding-of-dsh) | 1 | 2026-08-19 | 2026-09-24 | Bidirectional DSH Connection and Typert Gateway integration |
| 23 | [N107meow/figma-mcp-dsh](https://github.com/N107meow/figma-mcp-dsh) | 1 | 2026-09-23 | 2026-09-24 | Read-only Figma design-source tools for DeepSeek Harness: inspect file structure, colors, typography and export images as native tools. |
| 24 | [ReGMeIoN/cancer-meta-pipeline](https://github.com/ReGMeIoN/cancer-meta-pipeline) | 1 | 2026-09-24 | 2026-09-24 | AI-assisted, reproducible pipeline that turns a paper list into publication-ready extraction tables for cancer systematic reviews |
| 25 | [sevoniva-labs/dsh-cloudflare-access](https://github.com/sevoniva-labs/dsh-cloudflare-access) | 1 | 2026-09-22 | 2026-09-24 | Cloudflare Zero Trust access for DeepSeek Harness (DSH). Access 认证、Tunnel 与 DNS 配置，无需公网 IP。 |
| 26 | [site-chenwei/dsh-default-overrides](https://github.com/site-chenwei/dsh-default-overrides) | 1 | 2026-09-24 | 2026-09-24 | Configurable overrides for the DeepSeek Harness standard preset: Bash/PowerShell channel, disabled rows, persona and harness identity |
| 27 | [vitas/dsh-web-search-openrouter](https://github.com/vitas/dsh-web-search-openrouter) | 1 | 2026-09-24 | 2026-09-24 | Grounded web search for DeepSeek Harness on any OpenRouter-compatible gateway: the built-in web_search tool runs on the same endpoint and key as your chat models. |
| 28 | [yembors64632/dsh-qoder-connect](https://github.com/yembors64632/dsh-qoder-connect) | 1 | 2026-09-24 | 2026-09-24 | 把 Qoder CN 桌面 App 的订阅模型接入 DeepSeek Harness（个人自用方案） |
| 29 | [yembors64632/dsh-trae-connect](https://github.com/yembors64632/dsh-trae-connect) | 1 | 2026-09-24 | 2026-09-24 | 把 Trae (SOLO CN) 桌面 App 的订阅模型接入 DeepSeek Harness（个人自用方案） |
| 30 | [yembors64632/dsh-workbuddy-connect](https://github.com/yembors64632/dsh-workbuddy-connect) | 1 | 2026-09-24 | 2026-09-24 | 把 WorkBuddy / WorkBuddy AI 桌面 App 的订阅模型接入 DeepSeek Harness（个人自用方案） |
| 31 | [zeng6125-rgb/dsh-usage-heatmap](https://github.com/zeng6125-rgb/dsh-usage-heatmap) | 1 | 2026-09-24 | 2026-09-24 | DSH 模型用量统计面板：9宫指标卡 + GitHub 风格 Token 热力图（日/周/累计）+ 活动洞察 + 删会话归档不丢数（@dsh-external/dsh-usage-heatmap） |
| 32 | [1622352030/dsh-session-rescue](https://github.com/1622352030/dsh-session-rescue) | 0 | 2026-09-24 | 2026-09-24 | Session-stall watchdog for DeepSeek Harness: releases a hung turn in place instead of restarting the app. |
| 33 | [1azybug/dsh-real-time-computer-use](https://github.com/1azybug/dsh-real-time-computer-use) | 0 | 2026-09-24 | 2026-09-24 | A plugin used for the real-device evaluation in “On the Capability Boundaries of Turn-Based GUI Agents in Real-Time GUI Environments: A Human Perception–Action Perspective” |
| 34 | [2huy4n/ProjectKaren](https://github.com/2huy4n/ProjectKaren) | 0 | 2026-09-24 | 2026-09-24 | A DeepSeek Harness plugin that gives a roleplay character a clock: sleep/wake, greetings, idle actions, proactive small talk, and outing photos. |
| 35 | [adithyanraj03/dsh-memory-recall](https://github.com/adithyanraj03/dsh-memory-recall) | 0 | 2026-09-24 | 2026-09-24 | Persistent memory for dsh in the style of Hermes Agent: a memory tool keeping a user profile and the model's own notes in every new chat's prompt, plus session_search over earlier chats behind an approval prompt. |
| 36 | [Archaofan/dsh-notify-relay](https://github.com/Archaofan/dsh-notify-relay) | 0 | 2026-09-24 | 2026-09-24 | DSH 外联通知中枢：生命周期事件经去重/免打扰/摘要合批后路由到 Bark/Server酱/Telegram/企业微信/飞书/ntfy/webhook。零运行时依赖。 |
| 37 | [AvalonskyAfar/MahoutsukaiNoYoru-DSH-Skin](https://github.com/AvalonskyAfar/MahoutsukaiNoYoru-DSH-Skin) | 0 | 2026-09-23 | 2026-09-24 | Witch on the Holy Night theme for the DeepSeek Harness Web UI - full-screen visual-novel skin with original-style menus, three characters with sprites and expressions, day/night BGM, and an ending sequence. 《魔法使之夜》DSH 皮肤。 |
| 38 | [azazo1/dsh-git-commands](https://github.com/azazo1/dsh-git-commands) | 0 | 2026-09-24 | 2026-09-24 | 把 git 提交, tag, push 与建仓库的工作流规范从 AGENTS.md 搬进 /commit, /commit-fast, /tag, /push, /repo-create 命令: 命令触发时自动附带仓库状态与历史, 省掉常驻上下文和重复的 git 读取 |
| 39 | [azazo1/dsh-reduce-effects](https://github.com/azazo1/dsh-reduce-effects) | 0 | 2026-09-24 | 2026-09-24 | DSH Web 前端特效开关插件: 按分类关闭动画, 毛玻璃, 阴影, 渐变等特效, 降低浏览器渲染负担. |
| 40 | [azazo1/dsh-reveal-context](https://github.com/azazo1/dsh-reveal-context) | 0 | 2026-09-24 | 2026-09-24 | Show DSH's hidden injected-context rows (AGENTS.md notices, skill catalogs, recalled sessions, runtime snapshots) back in the Chat transcript, with a per-kind opt-out. |
| 41 | [baifagg/dsh-plugin-busy-workspace](https://github.com/baifagg/dsh-plugin-busy-workspace) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek Harness (dsh) Web GUI plugin: highlight running sessions and pin busy workspaces to the top of the sidebar. Theme-adaptive, zero-config. |
| 42 | [bonerush/dsh-obsidian-mem](https://github.com/bonerush/dsh-obsidian-mem) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek Harness host plugin that keeps project documents and long-term memory as plain Markdown in a dedicated Obsidian vault. |
| 43 | [byx-darwin/dsh-agent-kit](https://github.com/byx-darwin/dsh-agent-kit) | 0 | 2026-09-23 | 2026-09-24 | DeepSeek Harness plugin kit for always-on agent workers: WebSocket, DingTalk, Claude Code/Codex, Jev. |
| 44 | [changliang-c/zemingxingxiao-brand-diagnosis](https://github.com/changliang-c/zemingxingxiao-brand-diagnosis) | 0 | 2026-08-22 | 2026-09-24 | 择命行效品牌诊断 Skill v2.4.1（私有） |
| 45 | [chenhz01/dsh-sample-plugin](https://github.com/chenhz01/dsh-sample-plugin) | 0 | 2026-09-23 | 2026-09-24 | Verified sample plugins for DeepSeek Harness: hash_sum tool + tools/result hook (8/8 checks) |
| 46 | [chintoleung/dsh-ping](https://github.com/chintoleung/dsh-ping) | 0 | 2026-09-23 | 2026-09-24 | Telegram pings when your DeepSeek Harness agent needs you — question asked, approval requested, turn done. Notification-only: one file, zero deps, real-DSH compat canary. |
| 47 | [CosmoSail/dsh-bloomglass](https://github.com/CosmoSail/dsh-bloomglass) | 0 | 2026-09-24 | 2026-09-24 | Bloom 的 10 套 OKLCH 莫兰迪配色 + 磨砂壁纸玻璃，合并为一个 DeepSeek Harness Web 主题插件 |
| 48 | [cx2002302-lang/dsh-chat-collapse](https://github.com/cx2002302-lang/dsh-chat-collapse) | 0 | 2026-09-23 | 2026-09-24 | DSH Web GUI plugin — one-click collapse for the chat composer, with a floating restore ball. 聊天组件一键收缩：纯浏览器侧，零 DSH 源码改动。 |
| 49 | [DanZai233/dsh-webask](https://github.com/DanZai233/dsh-webask) | 0 | 2026-09-24 | 2026-09-24 | Send one-liner questions to DeepSeek's web chat instead of burning your DSH context. Composer button + global hotkey palette, with history. |
| 50 | [drscrewdriver/dsh-docx-sidebar](https://github.com/drscrewdriver/dsh-docx-sidebar) | 0 | 2026-09-22 | 2026-09-24 | DSH web plugin (dsh-better-sidebar consumer): read .docx documents in the right sidebar — headings, lists, tables, inline images — with a seven-ceiling circuit breaker. Reading view, not a layout reproduction. |
| 51 | [drscrewdriver/dsh-opensheet-sidebar](https://github.com/drscrewdriver/dsh-opensheet-sidebar) | 0 | 2026-09-22 | 2026-09-24 | DSH web plugin (dsh-better-sidebar consumer): CSV/TSV/PSV plus xlsx/xlsm workbook preview in the right sidebar, with sheet tabs and a circuit breaker (rows/cols/cells + two zip-container gates). |
| 52 | [drscrewdriver/dsh-pptx-sidebar](https://github.com/drscrewdriver/dsh-pptx-sidebar) | 0 | 2026-09-22 | 2026-09-24 | DSH plugin: read .pptx decks in the sidebar — slides in deck order, bullets, speaker notes, inline pictures. Reading view, not a slide reproduction. |
| 53 | [ecircle6/dsh-prompt-enhance-local](https://github.com/ecircle6/dsh-prompt-enhance-local) | 0 | 2026-09-24 | 2026-09-24 | DSH composer 一键提示词增强（本地加固 fork）：口语草稿→结构化专业提示词，严格 Origin 栅栏 + 限流 + 零文件写入。Hardened fork of zzy6-a/dsh-prompt-enhance. |
| 54 | [fakeNihilist/dsh-plugin-usage-stats](https://github.com/fakeNihilist/dsh-plugin-usage-stats) | 0 | 2026-09-23 | 2026-09-24 | Whole-corpus token usage statistics for DSH: daily and cumulative tokens, cache hit rate, per-model breakdown, and a year-long activity heatmap. |
| 55 | [ffyfox/dsh-cua-preview](https://github.com/ffyfox/dsh-cua-preview) | 0 | 2026-09-23 | 2026-09-24 | DSH plugin: browser automation whose click and submit actions are gated by a DSH approval, with the current screen captured as a screenshot the user reviews before the action runs. |
| 56 | [frederico-kluser/dsh-tavily-resilient-search](https://github.com/frederico-kluser/dsh-tavily-resilient-search) | 0 | 2026-09-24 | 2026-09-24 | Pesquisa web Tavily para o DeepSeek Harness (plugin Cordis) com rotação atómica e resiliente de um agrupamento de chaves de API — rate limit, cota mensal e revogação sem interromper o agent loop. |
| 57 | [FYKANG/dsh-rss-reader](https://github.com/FYKANG/dsh-rss-reader) | 0 | 2026-09-24 | 2026-09-24 | 内嵌在 DSH 里的 RSS / Atom 阅读器 |
| 58 | [GNX001/dsh-system-monitor-desktop](https://github.com/GNX001/dsh-system-monitor-desktop) | 0 | 2026-09-23 | 2026-09-24 | Windows 独立应用 · 吸顶自动收缩的 CPU / 内存 / GPU / 网速 悬浮状态条（deepseek-harness 插件 dsh-system-monitor 的桌面版） |
| 59 | [goatliamia/dsh-observable-reversibility](https://github.com/goatliamia/dsh-observable-reversibility) | 0 | 2026-09-24 | 2026-09-24 | 让插件卸载不再静默：相对声明观察面的可逆性判定定理（Lean 4 形式化）+ 三态判决（verified-reversible / declared-irreversible / unknown） |
| 60 | [GooDAnDReaDY/dsh-test-pilot](https://github.com/GooDAnDReaDY/dsh-test-pilot) | 0 | 2026-09-20 | 2026-09-24 | Bounded automatic test feedback plugin for DeepSeek Harness |
| 61 | [Hanochhu/dsh-context-offload](https://github.com/Hanochhu/dsh-context-offload) | 0 | 2026-09-24 | 2026-09-24 | Context offloading for DeepSeek Harness: consumed tool calls and their results are replaced in the model-visible history by a short stub, while the originals stay in the session log for replay. |
| 62 | [iceice666/dsh-locale-zh-tw](https://github.com/iceice666/dsh-locale-zh-tw) | 0 | 2026-09-24 | 2026-09-24 | DSH 繁體中文（臺灣）語言包，以 zhtw-mcp 校正，可直接從 GitHub 安裝。 |
| 63 | [idoall/dsh-lan-guard](https://github.com/idoall/dsh-lan-guard) | 0 | 2026-09-24 | 2026-09-24 | 把桌面 DeepSeek Harness 的官方 Web 界面**安全地**开放到局域网 |
| 64 | [jide315/dsh-reasoning-language](https://github.com/jide315/dsh-reasoning-language) | 0 | 2026-09-24 | 2026-09-24 | Choose the language used for DSH reasoning and expand thinking rows by default. |
| 65 | [JinzhaoTian/git-worktree](https://github.com/JinzhaoTian/git-worktree) | 0 | 2026-09-23 | 2026-09-24 | Browse Git worktrees and their commit ancestry in a graph — shipped as a DSH right-sidebar tab plugin (dsh-plugin) and as a Codex MCP App. |
| 66 | [jipika/dsh-claude-theme](https://github.com/jipika/dsh-claude-theme) | 0 | 2026-09-24 | 2026-09-24 | Claude warm-ivory appearance for DeepSeek Harness: color tokens + serif typography, extracted verbatim from dsh-animation-optimization. Appearance only — no behavioral layer, so it coexists with dsh-smooth-stream. |
| 67 | [jipika/dsh-computer-use-compat](https://github.com/jipika/dsh-computer-use-compat) | 0 | 2026-09-24 | 2026-09-24 | Backfill prompt-section order keys that DSH core 0.1.5-rc.2 lacks, so the official DeepSeek Harness computer-use providers can load on an older host. |
| 68 | [jipika/dsh-cron](https://github.com/jipika/dsh-cron) | 0 | 2026-09-24 | 2026-09-24 | DSH native scheduling: run a saved prompt in a brand-new session when the clock says so, with a persisted task table, run history and a restrained management UI. |
| 69 | [jipika/dsh-hide-buttons](https://github.com/jipika/dsh-hide-buttons) | 0 | 2026-09-24 | 2026-09-24 | Hide the conversation-header utility buttons (Session log export) and the sidebar plugin-market launcher by injecting CSS — no layout or behavior changes. |
| 70 | [jipika/dsh-lan-loopback-compat](https://github.com/jipika/dsh-lan-loopback-compat) | 0 | 2026-09-24 | 2026-09-24 | Treat connections that arrive through a LAN proxy as loopback, so a DeepSeek Harness instance reached over a LAN/tunnel keeps its browser connection working. |
| 71 | [jipika/dsh-plugin-console](https://github.com/jipika/dsh-plugin-console) | 0 | 2026-09-24 | 2026-09-24 | DSH 插件中心（本地改版）：插件管理/市场额外提升为设置窗口左侧导航的独立分栏（settings.section#plugin-console），原「设置 → 插件」tab 保留。基于上游 0.3.63。 |
| 72 | [jipika/dsh-skill-mcp-panel](https://github.com/jipika/dsh-skill-mcp-panel) | 0 | 2026-09-24 | 2026-09-24 | dsh-skill-mcp-panel (local build): 技能与 MCP 管理改为设置窗口分栏，不再占用侧栏与中央主区。基于上游 2.1.0。 |
| 73 | [jipika/dsh-todo-float](https://github.com/jipika/dsh-todo-float) | 0 | 2026-09-24 | 2026-09-24 | Float the conversation to-do list as a collapsible card in the top-right corner of the session, switchable back to the stock panel from Settings. |
| 74 | [jipika/dsh-ui-fixes](https://github.com/jipika/dsh-ui-fixes) | 0 | 2026-09-24 | 2026-09-24 | Three CSS fixes for the DSH web GUI: a scrollable settings nav, compact session-header tabs, and a working conversation-width drag handle. |
| 75 | [jipika/dsh-workspace-files](https://github.com/jipika/dsh-workspace-files) | 0 | 2026-09-24 | 2026-09-24 | Left-sidebar file switch: hover a workspace row, click the folder icon, and its session list becomes a lazy file tree. |
| 76 | [jr-create/dsh-session-vault](https://github.com/jr-create/dsh-session-vault) | 0 | 2026-09-19 | 2026-09-24 | Browse, export, import and carry DeepSeek Harness sessions as portable archives. DSH 会话保管库：浏览、导出、导入与跨机器搬运会话。 |
| 77 | [kahomesl/dsh-chat-diff-summary-legacy](https://github.com/kahomesl/dsh-chat-diff-summary-legacy) | 0 | 2026-09-24 | 2026-09-24 | 输入框上方的本轮改动统计条：一轮对话改了哪些文件、增删多少行 —— 专为 DSH Desktop 2.0.13 / DeepSeek Harness 0.1.5-rc.2 编写 |
| 78 | [KurohaneKaoruko/DSH-Novel-App](https://github.com/KurohaneKaoruko/DSH-Novel-App) | 0 | 2026-09-24 | 2026-09-24 | 基于DSH的AI小说工作台 |
| 79 | [kviiinh/dsh-whale-particles-bg](https://github.com/kviiinh/dsh-whale-particles-bg) | 0 | 2026-09-24 | 2026-09-24 | Animated whale particle background for the DeepSeek Harness (dsh) Web UI - assembling from its scattered shell, breathing at idle, and being pushed around by the pointer |
| 80 | [Leawind/dsh-carrot-on-a-stick](https://github.com/Leawind/dsh-carrot-on-a-stick) | 0 | 2026-09-22 | 2026-09-24 | Operate DeepSeek Harness (dsh) over MCP: expose sessions, task execution, and workspace management to any MCP client. |
| 81 | [LR611415/dsh-plugin-documents](https://github.com/LR611415/dsh-plugin-documents) | 0 | 2026-09-23 | 2026-09-24 | `DSH plugin to read/write Word (.docx), PDF and text files` |
| 82 | [ly6170/dsh-session-title](https://github.com/ly6170/dsh-session-title) | 0 | 2026-09-24 | 2026-09-24 | A DeepSeek Harness plugin that gives the model a tool to set the session title using rules you define. DeepSeek Harness 插件：给模型一个按你自己定义的规则设置会话标题的工具。 |
| 83 | [MaybeJustLikeThis/rainbow-fart-dsh](https://github.com/MaybeJustLikeThis/rainbow-fart-dsh) | 0 | 2026-09-24 | 2026-09-24 | A playful combo, scoring and praise plugin for DeepSeek Harness Web |
| 84 | [mikulo/dsh-plugins](https://github.com/mikulo/dsh-plugins) | 0 | 2026-09-24 | 2026-09-24 | mikulo 的 DSH 插件清单 + 一键安装脚本：node install.mjs --profile web [--reinstall] |
| 85 | [mikulo/dsh-prompt-switcher](https://github.com/mikulo/dsh-prompt-switcher) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek Harness (DSH) plugin: pick a local .md prompt template with / when starting a new conversation; it binds the whole conversation with AGENTS.md-level authority. |
| 86 | [Neutron3529/dsh-zh-meow](https://github.com/Neutron3529/dsh-zh-meow) | 0 | 2026-09-24 | 2026-09-24 | dsh插件 喵体中文 ~ 大家一起喵起来喵~ |
| 87 | [nonmean/dsh-meow](https://github.com/nonmean/dsh-meow) | 0 | 2026-09-23 | 2026-09-24 | DSH web plugin: a synthesized meow sound when the harness needs confirmation, needs input, hits an error, or finishes a turn, with a Settings enable/disable toggle. |
| 88 | [perdakovich/dsh-prompt-edit](https://github.com/perdakovich/dsh-prompt-edit) | 0 | 2026-09-21 | 2026-09-24 | The pencil DSH forgot to ship: suckless prompt editing, engineered to feel like it was always there. |
| 89 | [phoenixlucky/business-data-analyst-skill](https://github.com/phoenixlucky/business-data-analyst-skill) | 0 | 2026-04-16 | 2026-09-24 | Business analysis skill for evidence-based reporting, market research, decision models, and end-to-end operating frameworks. |
| 90 | [QT7-C23/DSH-Marketplace](https://github.com/QT7-C23/DSH-Marketplace) | 0 | 2026-09-13 | 2026-09-24 | A community-built marketplace and resource manager for DeepSeek Harness, featuring plugins, skills, MCP servers, slash commands, and prompts. Work in progress. |
| 91 | [relaxyabc/git-sidebar](https://github.com/relaxyabc/git-sidebar) | 0 | 2026-09-24 | 2026-09-24 | 一个 类似 jetbrains 系列 IDE 中的 git 插件 的 dsh Git 插件, 支持 工作区 多 git 仓库 和 git sub module |
| 92 | [Rice00/dsh-loupe](https://github.com/Rice00/dsh-loupe) | 0 | 2026-09-22 | 2026-09-24 | Select text in a DSH conversation and explain it in a floating window — independent channel, no session pollution, can be saved as a real session. / 划词解释浮窗：选中即弹、不污染主会话、可保存成正式会话。 |
| 93 | [smallwhitelin/dsh-feishu-bind](https://github.com/smallwhitelin/dsh-feishu-bind) | 0 | 2026-09-24 | 2026-09-24 | 浏览器扫码绑定飞书机器人 for DeepSeek Harness(dsh) — 打开网页出二维码、扫码即绑定并自动接线，无需终端向导与 dsh web 界面 |
| 94 | [smallwhitelin/dsh-memory-md](https://github.com/smallwhitelin/dsh-memory-md) | 0 | 2026-09-24 | 2026-09-24 | Minimal long-term memory plugin for DeepSeek Harness (dsh): CJK-friendly substring search, hand-editable Markdown, no web surface required. |
| 95 | [Songyanglin-curious/dsh-apb](https://github.com/Songyanglin-curious/dsh-apb) | 0 | 2026-09-03 | 2026-09-24 | 基于标准编码 Agent 的渐进式开发助手。ask/plan/build 三模式由宿主权限预设强制（ask/plan→只读、build→可写工作区），可 Alt+M 或 /apb 切换并随会话持久；遵循先讨论定方向、入口与文件规划、todo 占位、逐模块实现调试、走通后再分步重构的人类式小步开发纪律。 |
| 96 | [Songyanglin-curious/dsh-sift](https://github.com/Songyanglin-curious/dsh-sift) | 0 | 2026-09-10 | 2026-09-24 | 从混杂内容中筛选、整理出有价值部分 |
| 97 | [Stolyarovmn/dsh-schedule-tab](https://github.com/Stolyarovmn/dsh-schedule-tab) | 0 | 2026-09-23 | 2026-09-24 | DeepSeek Harness Web plugin: a global Schedule tab showing reminders across all dialogs |
| 98 | [stone-brick/dsh-report-ledger](https://github.com/stone-brick/dsh-report-ledger) | 0 | 2026-09-24 | 2026-09-24 | DSH 插件：把「汇报」做成代理之间的一等交互原语 —— 可追溯的传递路径账本、回执/结案/修正，以及一个会话时间线标签页。 |
| 99 | [stuga-dev/dsh-plugin](https://github.com/stuga-dev/dsh-plugin) | 0 | 2026-09-24 | 2026-09-24 | Connect a DeepSeek Harness profile to a Stuga workspace: Stuga's MCP tools, the workspace's conventions in the system prompt, and playbook skills for reviewed edits. |
| 100 | [sujalmandal/dsh-tab-plan-toggle](https://github.com/sujalmandal/dsh-tab-plan-toggle) | 0 | 2026-09-24 | 2026-09-24 | Toggle DeepSeek Harness plan mode with Tab in the composer |
| 101 | [sunsun320/dsh-peak-chip](https://github.com/sunsun320/dsh-peak-chip) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek 峰谷指示灯：会话头部一个圆点，面板显示本日消耗与余额。特色是自修复设计——算错的数字自己退回去，不用手工清零。dsh 插件（DSHA / Android）。 |
| 102 | [tonylee2022/dsh-xai-oauth](https://github.com/tonylee2022/dsh-xai-oauth) | 0 | 2026-08-22 | 2026-09-24 | xAI (Grok/X subscription) OAuth login plugin for DeepSeek Harness — device-code auth, token refresh, no API key needed |
| 103 | [VDERR/dsh-echocat-prettier](https://github.com/VDERR/dsh-echocat-prettier) | 0 | 2026-09-24 | 2026-09-24 | 让 DSH AI 回复更美观：15 套视觉风格、9 套排版 DIY、主题表情包、emoji 与长回复性能保护。 |
| 104 | [wanjiaju3108/dsh-feishu-assistant](https://github.com/wanjiaju3108/dsh-feishu-assistant) | 0 | 2026-09-23 | 2026-09-24 | 飞书私聊机器人就是你的 DSH 助理：配对码绑管理员、审批卡放行、串行排队、回答成卡片回到飞书 |
| 105 | [wanjiaju3108/dsh-feishu-cui](https://github.com/wanjiaju3108/dsh-feishu-cui) | 0 | 2026-09-23 | 2026-09-24 | 用飞书私聊远程操作 DSH：消息与卡片走机器人长连接，不用公网入口、不用证书、不用内网穿透 |
| 106 | [wu81313-lab/dsh-company-kb](https://github.com/wu81313-lab/dsh-company-kb) | 0 | 2026-09-24 | 2026-09-24 | DSH local-folder knowledge base: manual-sync SQLite FTS5 index, Chinese hybrid retrieval (BM25 + CJK bigram + trigram, RRF), explicit-invocation gate, and a Web panel. |
| 107 | [xiangnan0811/dsh-clinepass](https://github.com/xiangnan0811/dsh-clinepass) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek Harness plugin for ClinePass: models, API key, and usage limits. |
| 108 | [xiaozhaoz1/dsh-mc-bridge](https://github.com/xiaozhaoz1/dsh-mc-bridge) | 0 | 2026-09-24 | 2026-09-24 | DSH ↔ Minecraft 接入插件：把 MC 的状态/事件/工具接进 DSH，供 AI 看与动（纯后端、零渲染、默认只读） |
| 109 | [xiazhicheng/dsh-remote-retry-llm-plugin](https://github.com/xiazhicheng/dsh-remote-retry-llm-plugin) | 0 | 2026-09-24 | 2026-09-24 | dsh 插件，主要解决 remote 开发和 LLM 无限重试 |
| 110 | [yfwu2020/dsh-selection-explain](https://github.com/yfwu2020/dsh-selection-explain) | 0 | 2026-09-23 | 2026-09-24 | DSH 划词解读：选中文字浮出按钮，点击弹窗流式显示专业中英翻译 + 该文字在当前上下文中的含义详解 |
| 111 | [yusufameri/dsh-t3-model-picker](https://github.com/yusufameri/dsh-t3-model-picker) | 0 | 2026-09-24 | 2026-09-24 | T3 Code's model picker for the DeepSeek Harness composer: provider rail, grouped search, favorites and Cmd/Ctrl+1..9 shortcuts. |
| 112 | [YV919/dmxapi-dsh](https://github.com/YV919/dmxapi-dsh) | 0 | 2026-09-24 | 2026-09-24 | DMXAPI 模型快速配置工具，适用于 DeepSeek Harness｜支持 Chat、Responses、Anthropic 三种协议及自定义服务商。 |
| 113 | [zhang-guo-wen/dsh-web-design](https://github.com/zhang-guo-wen/dsh-web-design) | 0 | 2026-09-23 | 2026-09-24 | Web design for DeepSeek Harness: preview and edit HTML elements in the Sidebar |
| 114 | [ZiYuan258/dsh-skill-router](https://github.com/ZiYuan258/dsh-skill-router) | 0 | 2026-09-23 | 2026-09-24 | DeepSeek Harness plugin: skill_search / skill_load / skill_ref tools that let an agent search a staged skill library on demand instead of paying for every skill in the session catalog, plus a conversation-view tab listing what the session actually loaded. |
| 115 | [zpda88888a88888-debug/dsh-progress-secretary](https://github.com/zpda88888a88888-debug/dsh-progress-secretary) | 0 | 2026-09-24 | 2026-09-24 | dsh的一个简单插件，用于记录和汇报工作进度。 |
| 116 | [zwbao/dsh-plugin-mirobody](https://github.com/zwbao/dsh-plugin-mirobody) | 0 | 2026-09-24 | 2026-09-24 | DeepSeek Harness plugin for Mirobody: offline LOINC/UCUM terminology plus read-only health, medication and genotype tools. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- AgentsDanceAI/AIStore
- arcships/dsh-llm-aimux
- BOWLUNA/dsh-multi-instance
- Centaurea5547196/dsh-page-zoom
- CH4ACKO3/bites-the-dsh
- CH4ACKO3/dsh-render-engine
- CH4ACKO3/dsh-turn-fold
- CH4ACKO3/dsh-ui-container
- CH4ACKO3/dsh-ui-workspace
- CH4ACKO3/the-binding-of-dsh
- DecresLuna/dsh-DSH-Service
- hyojoo207/HyoJoo-MCP
- jypjypjypjyp/dsh-agent-teams
- KurohaneKaoruko/DSH-Novel
- Leawind/dsh-ops-mcp
- ljsysfurryACE/dsh-aura-scheduler
- ljsysfurryACE/dsh-compaction
- ljsysfurryACE/dsh-memory-director
- ljsysfurryACE/dsh-plugin-story
- MoneShadow/DeepSeek-Harness-linux-
- MoneShadow/dsh-plugin-vision
- N107meow/dsh-plugin-figma
- perdakovich/dsh-plugin-prompt-edit
- toRolex/periscope
- Wha1eChai/dsh-cross-session
- zerosloney/dsh-cbx-orch
- zerosloney/dsh-ralph-loop
- zerosloney/dsh-state-graph
