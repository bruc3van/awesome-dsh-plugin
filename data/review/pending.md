# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-09**
- 快照日期 / Snapshot date: **2026-11-09 (UTC)**
- 待审核 / Pending: **499**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **57**
- Star 异常增长 / Star-growth alerts: **20** — 先看下方告警节 / see the alert section first

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

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」「单日净减 ≥100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, that lost ≥100 stars in one interval (GitHub clawing back farmed stars), or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-11-08** / vs previous snapshot **2026-11-08**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **20**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [openBitFun/OpenBitFun](https://github.com/openBitFun/OpenBitFun) | 待审 / pending | 3992 | +19 | 303 | 279d | 待审高星 | 核准即 Top 9 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 待审 / pending | 74409 | — | 2675 | 411d | 待审高星 | 核准即 Top 1 |
| ⚠️ [runzhliu/welink](https://github.com/runzhliu/welink) | 待审 / pending | 318 | — | 64 | 236d | 待审高星 | 核准即榜 #89 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 67339 | +1230 | 1813 | 45d | 日增百星 | 日增 +1230★；已不进榜单 |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 5728 | +698 | 434 | 94d | 日增百星 | 日增 +698★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 6619 | +294 | 621 | 32d | 日增百星 | 日增 +294★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 6190 | +209 | 108 | 84d | 日增百星 | 日增 +209★ |
| ⚠️ [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) | 已核准 / approved | 3158 | +207 | 85 | 86d | 日增百星 | 日增 +207★；已不进榜单 |
| ⚠️ [Ebony-Vinyl/EAC-design-world](https://github.com/Ebony-Vinyl/EAC-design-world) | 已核准 / approved | 1172 | +194 | 31 | 22d | 日增百星 | 日增 +194★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 11678 | +185 | 444 | 86d | 日增百星 | 日增 +185★；已不进榜单 |
| ⚠️ [xiaoso456/dsh-workflow-lite](https://github.com/xiaoso456/dsh-workflow-lite) | 已核准 / approved | 190 | +162 | 341 | 31d | 日增百星、新入 Top 200 | 日增 +162★；新入 Top 200 #141 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 371 | +157 | 1 | 28d | 日增百星 | 日增 +157★；★/fork 371 |
| ⚠️ [Ebony-Vinyl/EAC-Pack](https://github.com/Ebony-Vinyl/EAC-Pack) | 已核准 / approved | 813 | +149 | 9 | 38d | 日增百星 | 日增 +149★；已不进榜单 |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 2429 | +145 | 186 | 86d | 日增百星 | 日增 +145★；已不进榜单 |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4777 | +136 | 201 | 86d | 日增百星 | 日增 +136★ |
| ⚠️ [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | 已核准 / approved | 339 | +107 | 34 | 79d | 日增百星 | 日增 +107★ |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 6158 | +106 | 405 | 37d | 日增百星 | 日增 +106★；已不进榜单 |
| ⚠️ [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | 已核准 / approved | 1931 | +103 | 74 | 56d | 日增百星 | 日增 +103★ |
| ⚠️ [woniuniuniu/dsh-media-desk](https://github.com/woniuniuniu/dsh-media-desk) | 已核准 / approved | 590 | +100 | 46 | 6d | 日增百星 | 日增 +100★；已不进榜单 |
| ⚠️ [fourzkw/dsh-drawai](https://github.com/fourzkw/dsh-drawai) | 已核准 / approved | 380 | +100 | 19 | 54d | 日增百星 | 日增 +100★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [tw93/Mole](https://github.com/tw93/Mole) ⚠️ | 74409 | 2025-09-23 | 2026-11-09 | 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running like new. Fast CLI, plus native Mac and Windows apps. |
| 2 | [openBitFun/OpenBitFun](https://github.com/openBitFun/OpenBitFun) ⚠️ | 3992 | 2026-02-02 | 2026-11-09 | OpenBitFun combines a high-performance agent runtime written in Rust with a polished desktop application. It pairs the depth of a Code Agent with open, general-purpose capabilities for work beyond software development. |
| 3 | [runzhliu/welink](https://github.com/runzhliu/welink) ⚠️ | 318 | 2026-03-17 | 2026-11-09 | 🔍微信聊天数据分析的本地化AI-agent(Docker/Windows/MacOS) · AI分身 / 大模型分析 / 好友排行 / 词云 / 情感趋势 / 群聊画像 |
| 4 | [sysevol-ai/CodeNib](https://github.com/sysevol-ai/CodeNib) | 94 | 2025-03-09 | 2026-11-09 | Find source context and trace calls across languages in Claude Code, Codex and other MCP agents. |
| 5 | [Chang-Tong/dsh-unified-context](https://github.com/Chang-Tong/dsh-unified-context) | 21 | 2026-08-14 | 2026-11-09 | Unified context for DeepSeek Harness (dsh): migrate pi/opencode/codex/claude-code/WorkBuddy sessions, share AGENTS.md, skills, project &amp; agent memory through symlinks, and migrate automations. 统一上下文，一份上下文给所有 Harness。 |
| 6 | [Scodive/Paper-Agent-Skills](https://github.com/Scodive/Paper-Agent-Skills) | 20 | 2026-01-24 | 2026-11-09 | A comprehensive library of AI agent skills for academic research and writing, designed to be used by autonomous agents to generate high-quality research outputs. |
| 7 | [stlin256/DSH-Harmony](https://github.com/stlin256/DSH-Harmony) | 10 | 2026-10-28 | 2026-11-09 | DeepSeek Harness 的 HarmonyOS 原生客户端（ArkUI/ArkTS）：会话、工具调用、审批、文件预览、Passkey、鸿蒙通知与桌面服务卡片。Native ArkUI client for DeepSeek Harness. 早期版本，需自建 DSH 服务。 |
| 8 | [nomadop/session-watcher](https://github.com/nomadop/session-watcher) | 6 | 2026-07-06 | 2026-11-09 | Context is inventory. Know when to restock. |
| 9 | [thatgfsj-dsh/dsh-plugin-skills](https://github.com/thatgfsj-dsh/dsh-plugin-skills) | 6 | 2026-10-15 | 2026-11-09 | DSH（DeepSeek Harness）插件构建与技能编写指南：按 dsh 版本分目录维护技能包，并附运行时生成的服务/事件/slot/包结构地图。 |
| 10 | [antonio-mastropaolo/dsh-model-hub](https://github.com/antonio-mastropaolo/dsh-model-hub) | 4 | 2026-09-15 | 2026-11-09 | DeepSeek Harness plugin: model hub. DSH-native sign-in (Claude, Codex, Copilot, OpenRouter, xAI, Kimi), rocco GPU dispatch, per-model cost, spend caps, prompt-cache checks, and the dsh-hub CLI. |
| 11 | [ahao430/dsh-funhub](https://github.com/ahao430/dsh-funhub) | 3 | 2026-11-06 | 2026-11-09 | DSH（DeepSeek Harness）娱乐工作台插件，集成音乐播放、小说阅读、漫画浏览、HTML5 小游戏和图片广场，支持阅读书源、洛雪音乐音源、漫画源及 RSS 订阅，提供统一资源管理、本地数据存储与 WebDAV 多设备同步。 |
| 12 | [AIRPhoon/dsh-construction-site](https://github.com/AIRPhoon/dsh-construction-site) | 3 | 2026-11-08 | 2026-11-09 | Construction-site-inspired finance, function audits, and module supervision for DeepSeek Harness. / DSH 施工现场式协作插件。 |
| 13 | [Panther-w/dsh-opencode-go-usage-badge](https://github.com/Panther-w/dsh-opencode-go-usage-badge) | 3 | 2026-11-09 | 2026-11-09 | 轻量级 DSH 侧栏徽标：监控 OpenCode Go 的 5 小时、周、月额度，也支持 DeepSeek 官方余额；随当前对话的模型来源自动在额度与余额之间切换。简洁不占空间、只读安全、低额度变色提醒。 A lightweight DSH sidebar badge for OpenCode Go quota (5-hour, weekly, monthly) with DeepSeek official balance; follows the current conversation's model source, read-only, low-quota color warnings. |
| 14 | [Phoeky/dsh-scnet-connect](https://github.com/Phoeky/dsh-scnet-connect) | 3 | 2026-11-09 | 2026-11-09 | 把 SCNet 模型接入 DeepSeek Harness，可免客户端登录，使用免费模型（SCNet-Max，基座基本可确定为 DeepSeek Flash） |
| 15 | [shangyunqiang1/DSH_Eplan](https://github.com/shangyunqiang1/DSH_Eplan) | 3 | 2026-11-04 | 2026-11-09 | DeepSeek Harness bundle for EPLAN Electric P8: a bundled eplan-mcp server that drives the running EPLAN instance, offline SQLite documentation indexes, a settings page, and five agent skills. |
| 16 | [a961282799-crypto/dsh-talent-tree](https://github.com/a961282799-crypto/dsh-talent-tree) | 2 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：把想学的知识拆成游戏天赋树，学会一个点亮一个 · A game-like learning talent tree for DeepSeek Harness |
| 17 | [ainook001-cloud/dsh-thai-locale](https://github.com/ainook001-cloud/dsh-thai-locale) | 2 | 2026-11-08 | 2026-11-09 | Plugin ภาษาไทย |
| 18 | [craigary/dsh-notion-plugin](https://github.com/craigary/dsh-notion-plugin) | 2 | 2026-11-09 | 2026-11-09 | Notion for DeepSeek Harness: MCP OAuth connection, 12 Notion skills, multi-workspace settings UI |
| 19 | [GuoruiC/dsh-quota-bar](https://github.com/GuoruiC/dsh-quota-bar) | 2 | 2026-11-09 | 2026-11-09 | DSH 底部常驻额度条：Codex / Gemini 额度与 DeepSeek 钱包余额，来源可选、关掉即零请求。 |
| 20 | [janehk416-alt/dsh-FocusCapture](https://github.com/janehk416-alt/dsh-FocusCapture) | 2 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 截图插件：双 Ctrl / 聊天按钮快速截图，支持标注、马赛克、置顶贴图、复制/保存 PNG，并添加到当前聊天草稿。 |
| 21 | [Jaylor-Wang/dsh-awesome-optimizer](https://github.com/Jaylor-Wang/dsh-awesome-optimizer) | 2 | 2026-11-05 | 2026-11-09 | ⚡ High-performance runtime policy, PTC composite batch tools, reactive prompt engine (~80% token savings), and A/B turn telemetry for DeepSeek Harness |
| 22 | [Jaylor-Wang/dsh-awesome-preset](https://github.com/Jaylor-Wang/dsh-awesome-preset) | 2 | 2026-09-24 | 2026-11-09 | Ultra-lean daily coding agent preset for DeepSeek Harness (dsh) |
| 23 | [overact/dsh-multi-window-context-management](https://github.com/overact/dsh-multi-window-context-management) | 2 | 2026-09-26 | 2026-11-09 | Windowed compaction, session-private notes and paged history recall for DeepSeek Harness (DSH) |
| 24 | [Soldsix/dsh-team-workbench](https://github.com/Soldsix/dsh-team-workbench) | 2 | 2026-11-07 | 2026-11-09 | 给 DSH 配一支长期协作的 AI 小队：双军师、孙代理、按需 Skills、独立验收和三栏团队工作台。社区插件，支持自由配置模型与角色。 |
| 25 | [wuzeno/dsh-skill-categories](https://github.com/wuzeno/dsh-skill-categories) | 2 | 2026-11-08 | 2026-11-09 | A community skill center for DeepSeek Harness: custom categories, tags, post-import classification, and session-scoped skill references. 技能分类、导入归类与会话引用。 Preview / 预览版。 |
| 26 | [YangHua-ovo/dsh-secure-memory](https://github.com/YangHua-ovo/dsh-secure-memory) | 2 | 2026-11-08 | 2026-11-09 | 本地优先、加密的 DSH 跨工作区记忆插件。具备逐工作区授权与提示词注入隔离功能。 |
| 27 | [392138239-pixel/dsh-qr-link](https://github.com/392138239-pixel/dsh-qr-link) | 1 | 2026-11-09 | 2026-11-09 | QR codes both ways for the DSH Web UI: decode images, pasted screenshots and image URLs - with a measured diagnosis when nothing is found - and render text into a downloadable code. |
| 28 | [423324324/dsh-complete-chime](https://github.com/423324324/dsh-complete-chime) | 1 | 2026-11-09 | 2026-11-09 | DSH plugin: plays a chime or a short melody when an agent turn really finishes. Zero dependencies, optional voice announcement and system notification. |
| 29 | [act27/dsh-3d-model-studio](https://github.com/act27/dsh-3d-model-studio) | 1 | 2026-11-09 | 2026-11-09 | Preview 3D models and parse three.js scenes in the DeepSeek Harness right sidebar; export the full scene or per-object groups as GLB/glTF/FBX/OBJ/STL/PLY. |
| 30 | [AD199-gif/dsh-nav-tidy](https://github.com/AD199-gif/dsh-nav-tidy) | 1 | 2026-11-09 | 2026-11-09 | Hide any dsh Web sidebar panel entry without disabling the plugin behind it. Checkbox panel under the sidebar More menu plus a console API. |
| 31 | [Asdika-36086/compact-region](https://github.com/Asdika-36086/compact-region) | 1 | 2026-11-06 | 2026-11-09 | Partial compaction for DSH |
| 32 | [AXTUT/dsh-plugin-dualtransfer-trial](https://github.com/AXTUT/dsh-plugin-dualtransfer-trial) | 1 | 2026-11-07 | 2026-11-09 | Windows ↔ Mac 双机 Agent 协作实验版：消息、任务、进度与结果交换，按接收端授权组织跨机处理。6.9 reboot.3 同包 Mac 7/7、Windows 6/6（16 actor），原件已复核；真实系统重启与完整模型链路未验。非开源，源码私有。 |
| 33 | [Bennie96/dsh-quark](https://github.com/Bennie96/dsh-quark) | 1 | 2026-11-09 | 2026-11-09 | 夸克网盘 DeepSeek Harness 插件（dsh-plugin）：基于官方 quarkclouddrive skill 的图形化文件管理面板。 |
| 34 | [betsunninda9-lgtm/dsh-model-groups](https://github.com/betsunninda9-lgtm/dsh-model-groups) | 1 | 2026-11-09 | 2026-11-09 | DSH 模型选择器：供应商与多密钥配置折叠、精确模型路由（DSH 0.2.2-rc.1） |
| 35 | [bychance6600/dsh-roost](https://github.com/bychance6600/dsh-roost) | 1 | 2026-11-06 | 2026-11-09 | 一个只能长大、不能被设定的人格：DSH 会话 + QQ，事件流驱动。零依赖，数据只在本地。 |
| 36 | [calisweetleaf/dsh-chatgpt-swic](https://github.com/calisweetleaf/dsh-chatgpt-swic) | 1 | 2026-10-20 | 2026-11-09 | DSH Plugin to Sign in with Your ChatGPT Account and GUI Enhancements for a seamless experience inside dsh |
| 37 | [calmzealA/dsh-decide](https://github.com/calmzealA/dsh-decide) | 1 | 2026-11-09 | 2026-11-09 | Multi-provider decision models for DeepSeek Harness: TypeSafe Jev, TokenRhythm NeoHorse-Jev, OpenAI Decisions, and local System One endpoints. |
| 38 | [cccc11f3/dsh-install-radar](https://github.com/cccc11f3/dsh-install-radar) | 1 | 2026-11-09 | 2026-11-09 | Session install radar for DeepSeek Harness |
| 39 | [CresBigB/dsh-session-namer](https://github.com/CresBigB/dsh-session-namer) | 1 | 2026-11-09 | 2026-11-09 | Emoji category prefix for DSH session titles, classified from the first user message. |
| 40 | [cyrus-xc/better-ego-browser](https://github.com/cyrus-xc/better-ego-browser) | 1 | 2026-11-07 | 2026-11-09 | DeepSeek Harness browser plugin for the installed Windows ego lite app: authenticated loopback HTTP, task spaces, page reading, clicks, form input and screenshots. |
| 41 | [davidmercer0620-ai/dsh-game-preview](https://github.com/davidmercer0620-ai/dsh-game-preview) | 1 | 2026-11-08 | 2026-11-09 | Play your game inside the DeepSeek Harness sidebar — Cocos/Godot/Unity capture, input forwarding, phone viewport, one-click Web/APK packaging, bundle budgets and agent screenshots. |
| 42 | [ddtcorex/maestro-memory](https://github.com/ddtcorex/maestro-memory) | 1 | 2026-08-24 | 2026-11-09 | DSH plugin for durable cross-session memory and todos: five tracks (global, user, project, key, daily), confirmation-gated writes, in-place adoption of existing memories and optional per-project Git sync |
| 43 | [dongsheng123132/dsh-workspace-plugins](https://github.com/dongsheng123132/dsh-workspace-plugins) | 1 | 2026-10-31 | 2026-11-09 | Two small DeepSeek Harness (DSH) sidebar plugins: import project directories from your other AI tools, and move a workspace to the top once without a favorites system. MIT. |
| 44 | [ecoyoung/dsh-psd-batch-studio](https://github.com/ecoyoung/dsh-psd-batch-studio) | 1 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 批量主图插件（dsh 兼容版）：vinkwork/dsh-psd-batch-studio + PR #8 合并结果，v0.2.6，支持 dsh 0.2.0-rc.2 至 0.2.2-rc.1 |
| 45 | [ET921/dsh-git-management](https://github.com/ET921/dsh-git-management) | 1 | 2026-11-04 | 2026-11-09 | Source Control for DeepSeek Harness: a right-silo Git panel with staging, commits, branches, sync and GitHub integration. |
| 46 | [foukusa/stca-agent-skill](https://github.com/foukusa/stca-agent-skill) | 1 | 2026-11-07 | 2026-11-09 | Agent skill for original STCA polymer screening, rule extraction and rule-guided candidate design. |
| 47 | [GROW1234567/dsh-easypaper-translate](https://github.com/GROW1234567/dsh-easypaper-translate) | 1 | 2026-11-09 | 2026-11-09 | 厌倦了免费翻译的垃圾性能和昂贵的收费翻译？慢但是有用——个人开发的 DSH 插件：把英文论文做成中英对照 PDF（奇数页原文、偶数页中文），正文/表格/图内文字原位替换，本地渲染。仅提供工具，不含论文或译本；内容使用权与合规由使用者自负。 |
| 48 | [GuYou9799/dsh-auth-cookie-sweep](https://github.com/GuYou9799/dsh-auth-cookie-sweep) | 1 | 2026-11-09 | 2026-11-09 | 一个用于 DeepSeek Harness 的宿主端小插件： 阻止 dsh-auth-* 浏览器会话 cookie 每次启动都多存一条，直到 Cookie 请求头越过 Node 的 16 KiB 上限、所有请求被 431 Request Header Fields Too Large 拒绝（有时表现为 401）的问题。Expire stale dsh-auth-* cookies so DeepSeek Harness keeps opening after months of launches |
| 49 | [HansyLin-xCoFe/dsh-offpeak-send](https://github.com/HansyLin-xCoFe/dsh-offpeak-send) | 1 | 2026-11-09 | 2026-11-09 | DeepSeek Harness Web scheduled send: queue the composer draft for the DeepSeek off-peak pricing window (DSH plugin). |
| 50 | [HaoGengfa/dsbot-monitoring](https://github.com/HaoGengfa/dsbot-monitoring) | 1 | 2026-11-09 | 2026-11-09 | Real-time war room dashboard for a DS Bot team — live activity, message flow, task hand-off and per-Bot token usage (dsh plugin) |
| 51 | [harienlook/dsh-notify-bridge](https://github.com/harienlook/dsh-notify-bridge) | 1 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: native desktop notifications plus Discord bot forwarding for approvals, scheduled tasks, todo digests, goal notices and token usage. |
| 52 | [Harzva/dsh-supervisor](https://github.com/Harzva/dsh-supervisor) | 1 | 2026-08-27 | 2026-11-09 | DSH Supervisor plugin and Smart Supervision v2 engineering baseline |
| 53 | [Hercules-debug/dsh-fork-map](https://github.com/Hercules-debug/dsh-fork-map) | 1 | 2026-11-06 | 2026-11-09 | DSH web plugin: per-workspace persistent Fork library — save turn snapshots, view the Fork graph, launch new sessions from any Fork |
| 54 | [HuiHui-Small/dsh-outlook-bridge](https://github.com/HuiHui-Small/dsh-outlook-bridge) | 1 | 2026-11-09 | 2026-11-09 | Outlook mail and calendar inside DeepSeek Harness. |
| 55 | [ITxuezhe/dsh-skill-pilot](https://github.com/ITxuezhe/dsh-skill-pilot) | 1 | 2026-11-09 | 2026-11-09 | 输入框旁的技能面板：中文分类、搜索、按草稿实时推荐 |
| 56 | [JAKE1266/dsh-doubao-ui](https://github.com/JAKE1266/dsh-doubao-ui) | 1 | 2026-11-09 | 2026-11-09 | 豆包风格皮肤 for DeepSeek Harness Web — Doubao-inspired skin for DSH Web (pure CSS token overrides, zero deps) |
| 57 | [jiunian920/dsh-qq-direct](https://github.com/jiunian920/dsh-qq-direct) | 1 | 2026-11-09 | 2026-11-09 | 让 DSH 桌面、QQ 私聊和白名单群共用同一个主会话的本机实验。AI 协助实现。 |
| 58 | [kasaki002/dsh-latex-studio](https://github.com/kasaki002/dsh-latex-studio) | 1 | 2026-11-09 | 2026-11-09 | LaTeX 工作室：DSH 插件，便携 MiKTeX（xelatex/pdflatex）+ 网页编辑器 + 编译工具 |
| 59 | [laoyingfuhuole/dsh-parallel-browser](https://github.com/laoyingfuhuole/dsh-parallel-browser) | 1 | 2026-11-06 | 2026-11-09 | 面向 DeepSeek Harness 的后台浏览器自动化插件：按对话分配独立 Electron 窗口，共享登录状态，支持 CDP 输入和快照 ref，不抢焦点。 |
| 60 | [leiming2333/dsh-web-search-lite](https://github.com/leiming2333/dsh-web-search-lite) | 1 | 2026-11-08 | 2026-11-09 | 给 DeepSeek Harness 的免密钥联网搜索：四家引擎聚合 + 网页正文读取，还能把内置 web_search 从按次计费的官方搜索切到免费引擎。 |
| 61 | [LeoLourson/MathPaperLib](https://github.com/LeoLourson/MathPaperLib) | 1 | 2026-11-09 | 2026-11-09 | MathPaperLib keeps the papers you work with in one folder and gives an AI agent tools to find papers, download them, read them page by page and search their full texts. The tools run as an MCP server, which any agent harness with MCP support can start, and as the \`lit\` command. |
| 62 | [LingHXiao/dsh-effort-mascot](https://github.com/LingHXiao/dsh-effort-mascot) | 1 | 2026-11-06 | 2026-11-09 | Reasoning-effort slider for DeepSeek Harness — replace the four-identical-options dropdown with a dark card, one mascot illustration per level (off / low / high / max). |
| 63 | [lysforge/dsh-lamplit](https://github.com/lysforge/dsh-lamplit) | 1 | 2026-11-06 | 2026-11-09 | 灯下 Lamplit — 把微信读书与 GitHub 书库收进一个书架，在 DeepSeek Harness 里沉浸阅读，划词问 AI 并存笔记。A reading plugin for DSH: WeRead, GitHub book repos, EPUB/PDF/Markdown, AI notes. |
| 64 | [mehran282/dsh-chat-rtl](https://github.com/mehran282/dsh-chat-rtl) | 1 | 2026-11-09 | 2026-11-09 | Auto right-to-left for Persian conversation content in DeepSeek Harness (app stays in its own language) |
| 65 | [muuuuuuuuuer/dsh-cc-dream-memory](https://github.com/muuuuuuuuuer/dsh-cc-dream-memory) | 1 | 2026-11-09 | 2026-11-09 | Claude Code-style auto memory and reviewable Dream consolidation for DeepSeek Harness. Community plugin, not affiliated with Anthropic. |
| 66 | [Night-Leaf/dsh-github-trending-plus](https://github.com/Night-Leaf/dsh-github-trending-plus) | 1 | 2026-11-08 | 2026-11-09 | DSH（DeepSeek Harness）插件：GitHub Trending 日/周/月榜，一次 50 条结构化分析卡片；自动识别系统代理 / 本机加速器 / 直连；首屏先出卡，详情随后补全。       GitHub Trending radar plugin for DSH (DeepSeek Harness): 50 analyzed repos per board, card panel, zero-config network detection.   |
| 67 | [Nounoumm/course-handout-studio](https://github.com/Nounoumm/course-handout-studio) | 1 | 2026-11-09 | 2026-11-09 | ????????DeepSeek Harness ???????????a????????OCX + PDF????????? |
| 68 | [philomelcc/dsh-workbench](https://github.com/philomelcc/dsh-workbench) | 1 | 2026-11-07 | 2026-11-09 | Tabbed workbench shell and modules for DeepSeek Harness |
| 69 | [PopCorey/dsh-replay-reset](https://github.com/PopCorey/dsh-replay-reset) | 1 | 2026-11-09 | 2026-11-09 | DSH插件：处理上游资源切换导致的Different Azure OpenAI错误，在原会话中一键处理，处理续聊时的资源绑定报错，保留原聊天记录。 |
| 70 | [qcann/dsh-chat-in-harness](https://github.com/qcann/dsh-chat-in-harness) | 1 | 2026-11-09 | 2026-11-09 | 在 DeepSeek Harness 里放一个与会话无关的 chat.deepseek.com 浮窗。不调接口、不存凭据、不注入脚本。 A session-independent floating window for chat.deepseek.com inside DeepSeek Harness. |
| 71 | [QiuYeDx/dsh-rugu](https://github.com/QiuYeDx/dsh-rugu) | 1 | 2026-11-09 | 2026-11-09 | 如故：DeepSeek Harness 记忆插件。让 Agent 像一个真实存在的人，只有一段人生，到哪儿都是同一个她（公开 beta） |
| 72 | [qwayo/dsh-timespan](https://github.com/qwayo/dsh-timespan) | 1 | 2026-11-07 | 2026-11-09 | dsh-timespan：记录并展示 DSH 的在线时长、活跃时长与任务时长 |
| 73 | [REALOIYO/dsh-deepai-connector](https://github.com/REALOIYO/dsh-deepai-connector) | 1 | 2026-11-09 | 2026-11-09 | DeepAI Code models for DeepSeek Harness: browser OAuth, no desktop client, no gateway process. |
| 74 | [Rinai-R/dsh-agent-scheduler](https://github.com/Rinai-R/dsh-agent-scheduler) | 1 | 2026-11-02 | 2026-11-09 | Agent Scheduler for DeepSeek Harness: a lead agent that forks per input, long-lived worker agents, and a right-sidebar roster |
| 75 | [Selenium39/dsh-bpmn](https://github.com/Selenium39/dsh-bpmn) | 1 | 2026-11-09 | 2026-11-09 | BPMN 2.0 visual modeler plugin for DeepSeek Harness (DSH) — a bpmn-js powered workbench panel inside the DSH Web GUI, with workspace file scan / edit / atomic save via loopback RPC. |
| 76 | [shixiaoyu-funny/multiPlatform-desktopPet](https://github.com/shixiaoyu-funny/multiPlatform-desktopPet) | 1 | 2026-11-06 | 2026-11-09 | Raven &amp; Suki 双角色 Windows 透明桌宠，一个 Tauri 应用内切换；包含 DSH 插件版本。 |
| 77 | [sredevopsorg/deepseek-kubernetes-sandbox](https://github.com/sredevopsorg/deepseek-kubernetes-sandbox) | 1 | 2026-10-21 | 2026-11-09 | Run deepseek-harness (dsh) as a container in Kubernetes with agent-sandbox and gvisor isolation or locally with Docker |
| 78 | [tangyixiao/dsh-plugin-market](https://github.com/tangyixiao/dsh-plugin-market) | 1 | 2026-10-30 | 2026-11-09 | Tangyixiao DSH plugin market — an independent format-1 index for DeepSeek Harness |
| 79 | [tangyixiao/dsh-version-manager](https://github.com/tangyixiao/dsh-version-manager) | 1 | 2026-11-07 | 2026-11-09 | DSH plugin: plugin and Skill version management with verifiable snapshots |
| 80 | [TeacherEvaHung/dsh-qwen-paint](https://github.com/TeacherEvaHung/dsh-qwen-paint) | 1 | 2025-02-12 | 2026-11-09 | Generate and edit images locally in DeepSeek Harness via ComfyUI and Qwen-Image: text-to-image, inpainting, outpainting, no API keys. |
| 81 | [terry2010/dsh-rss-news-daily](https://github.com/terry2010/dsh-rss-news-daily) | 1 | 2026-10-27 | 2026-11-09 | dsh 插件：RSS 订阅 + AI 每日精选/时段快报 —— 侧栏新闻阅读器 |
| 82 | [TLEWA/dsh-opencode-go-router](https://github.com/TLEWA/dsh-opencode-go-router) | 1 | 2026-11-07 | 2026-11-09 | DeepSeek Harness plugin: rotate OpenCode Go routing after billion-context cache-losing folds or system-prompt rewrites. |
| 83 | [Trouvaille-xx/dsh-Simple-UI](https://github.com/Trouvaille-xx/dsh-Simple-UI) | 1 | 2026-08-21 | 2026-11-09 | Industrial-style appearance skins for the DeepSeek Harness (dsh) web client: 8 presets, colour/font/background controls, offline and persistent. |
| 84 | [ungurenko/dsh-opencode-go-usage](https://github.com/ungurenko/dsh-opencode-go-usage) | 1 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: OpenCode Go subscription usage limits (5h / week / month) in the left sidebar |
| 85 | [violector/dsh-latex-studio](https://github.com/violector/dsh-latex-studio) | 1 | 2026-11-09 | 2026-11-09 | AI-assisted LaTeX workspace for DeepSeek Harness on Windows: templates, writing, managed compilation and PDF preview. |
| 86 | [wqx11235/dsh-github-profile](https://github.com/wqx11235/dsh-github-profile) | 1 | 2026-11-05 | 2026-11-09 | DeepSeek Harness 插件：GitHub 档案页（资料卡 / 仓库卡 / 贡献热力图）+ DeepSeek 平台用量（余额 / 消费 / 请求 / Tokens） |
| 87 | [wuzeno/dsh-inline-attachments](https://github.com/wuzeno/dsh-inline-attachments) | 1 | 2026-11-06 | 2026-11-09 | 把文件拖进输入框，插到光标所在的句子里；悬停查看图片。Inline attachments for DeepSeek Harness. |
| 88 | [xkzdwb/DSH-ApproveByEmail-WhenApprovalNeeded](https://github.com/xkzdwb/DSH-ApproveByEmail-WhenApprovalNeeded) | 1 | 2026-11-05 | 2026-11-09 | DSH 邮件通道：审批与提问请求发到邮箱，回「同意/拒绝」或「1. 2」即可放行或作答；零依赖 cordis 插件 |
| 89 | [xkzdwb/DSH-UsageStats-WhenNeedOverview](https://github.com/xkzdwb/DSH-UsageStats-WhenNeedOverview) | 1 | 2026-11-06 | 2026-11-09 | DSH Web UI 用量统计面板：token 用量、会话数、预估费用与预算、用量时间线、单会话明细（数据取自真实会话日志，零依赖） |
| 90 | [xkzdwb/DSH-UseWebDeepseek-WhenEasyWork](https://github.com/xkzdwb/DSH-UseWebDeepseek-WhenEasyWork) | 1 | 2026-11-05 | 2026-11-09 | 让 DSH 的轻量问题走 chat.deepseek.com 网页端的插件：真实浏览器 + 零依赖 CDP，注册成 ask_deepseek_web 工具 |
| 91 | [xkzdwb/DSH-WeeklyReport-WhenOneWeekFinish](https://github.com/xkzdwb/DSH-WeeklyReport-WhenOneWeekFinish) | 1 | 2026-11-05 | 2026-11-09 | 每周固定时刻把本周 token 用量与工作汇总发到邮箱，数字取自 DSH 会话日志（只填价格），零依赖 SMTP 自实现 |
| 92 | [yami0310/dsh-restart-button](https://github.com/yami0310/dsh-restart-button) | 1 | 2026-11-09 | 2026-11-09 | A quick-restart button on the bottom left of the sidebar |
| 93 | [zhangmaorongXL/dsh-restart-plugin](https://github.com/zhangmaorongXL/dsh-restart-plugin) | 1 | 2026-11-08 | 2026-11-09 | 可以一键重启你的deepseek harness。Force-restart button for the DeepSeek Harness (DSH) desktop app. |
| 94 | [zhuyeqi/dsh-plugin](https://github.com/zhuyeqi/dsh-plugin) | 1 | 2026-08-20 | 2026-11-09 | dsh plugin |
| 95 | [zixiaog/dsh-harmony-dev](https://github.com/zixiaog/dsh-harmony-dev) | 1 | 2026-11-05 | 2026-11-09 | dsh-harmony-dev |
| 96 | [1578361862-art/dsh-plugin-readlater](https://github.com/1578361862-art/dsh-plugin-readlater) | 0 | 2026-11-09 | 2026-11-09 | 稍后阅读：粘贴分享链接，本地解析成图文卡片，按需投影到 Obsidian。 |
| 97 | [2132774831/dsh-nodal-memory](https://github.com/2132774831/dsh-nodal-memory) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek Harness 纯本地长期记忆 v2：SQLite + 中文二元组检索 + 记忆关系图 + 可选语义检索。也能当独立软件双击运行。 |
| 98 | [2867297362mjb-sketch/dsh-teamorouter](https://github.com/2867297362mjb-sketch/dsh-teamorouter) | 0 | 2026-11-09 | 2026-11-09 | TeamoRouter provider for DeepSeek Harness (dsh): one key for Claude, GPT, Gemini, DeepSeek, Kimi, GLM, Qwen and more, with the model list read live from /v1/models. |
| 99 | [3341284397-max/dsh-question-bubbles](https://github.com/3341284397-max/dsh-question-bubbles) | 0 | 2026-11-09 | 2026-11-09 | 在模型思考时把「没问出口的疑问」显示成气泡，可当场作答并温和并入会话｜Surface unasked questions as bubbles during DSH reasoning. Requires dsh-whale-widget. |
| 100 | [593682963wd-wq/dsh-tibo-reset-watch](https://github.com/593682963wd-wq/dsh-tibo-reset-watch) | 0 | 2026-11-08 | 2026-11-09 | Corner card in DeepSeek Harness that watches Tibo (@thsottiaux) on X and shows new posts in Chinese. |
| 101 | [90le/dsh-channel-octo](https://github.com/90le/dsh-channel-octo) | 0 | 2026-11-09 | 2026-11-09 | Octo direct messages for DeepSeek Harness Web |
| 102 | [A-2788553793/dsh-song-id](https://github.com/A-2788553793/dsh-song-id) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件：给一条视频链接（B 站 / YouTube 等），用 Shazam + 网易云双引擎听出里面是什么歌 |
| 103 | [a2092776074-collab/-](https://github.com/a2092776074-collab/-) | 0 | 2026-11-05 | 2026-11-09 | 插件 |
| 104 | [a348579184/dsh-game-workshop](https://github.com/a348579184/dsh-game-workshop) | 0 | 2026-11-09 | 2026-11-09 | Build playable card games in DeepSeek Harness and connect local Unity, Unreal Engine and Blender tools. |
| 105 | [AaronWang-cpu/dsh-memory](https://github.com/AaronWang-cpu/dsh-memory) | 0 | 2026-11-09 | 2026-11-09 | Persistent, human-editable memory for DeepSeek Harness - the agent remembers you across sessions. |
| 106 | [AAxium/dsh-usage](https://github.com/AAxium/dsh-usage) | 0 | 2026-11-08 | 2026-11-09 | Non-official DSH account balance and model quota dashboard, derived from dougen/dsh-deepseek-usage. |
| 107 | [Activer007/solar-odyssey-dsh](https://github.com/Activer007/solar-odyssey-dsh) | 0 | 2026-11-08 | 2026-11-09 | 中文 3D 太阳系探索游戏，适用于 DeepSeek Harness |
| 108 | [adithyanraj03/dsh-video-gen-plugin](https://github.com/adithyanraj03/dsh-video-gen-plugin) | 0 | 2026-11-08 | 2026-11-09 | Bring-your-own video endpoint for DeepSeek Harness: text-to-video and image-to-video from a start frame, inline playback, live progress, and cancel. |
| 109 | [AIcivilization/dsh-stickynote](https://github.com/AIcivilization/dsh-stickynote) | 0 | 2026-11-09 | 2026-11-09 | 随手贴 · AI 驱动的 DSH 即时贴便签：语音/文字秒记，AI 自动起标题归类补要点，一键投递到对话或新开对话。Quick AI sticky note for DeepSeek Harness. |
| 110 | [AkarinLiu/dsh-plugin-discourse](https://github.com/AkarinLiu/dsh-plugin-discourse) | 0 | 2026-11-07 | 2026-11-09 | Discourse administration and agent tools for the DeepSeek Harness: 16 tools for reading, posting, moderating, and administering a Discourse forum. |
| 111 | [AkiHaruka/mcp-skills-dsh](https://github.com/AkiHaruka/mcp-skills-dsh) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：左侧栏独立页面直接管理 MCP 服务与 Skills（默认 dry-run、原子写、可回滚） |
| 112 | [almazom/dsh-needs-attention-sidebar](https://github.com/almazom/dsh-needs-attention-sidebar) | 0 | 2026-11-01 | 2026-11-09 | Needs-attention sidebar block for DeepSeek Harness: live Working/Attention/Finished session triage (red=fatal, amber=rate-limit). Zero core edits. |
| 113 | [ame-code/dsh-workspace-move](https://github.com/ame-code/dsh-workspace-move) | 0 | 2026-11-09 | 2026-11-09 | Move a DeepSeek Harness workspace (folder tree, nested workspaces, sessions) to a new location from the sidebar — with rename, rollback and undo. |
| 114 | [amyaxy/dsh-prompt-boost-model](https://github.com/amyaxy/dsh-prompt-boost-model) | 0 | 2026-11-09 | 2026-11-09 | Prompt enhancement for the DSH Web GUI, with a selectable enhancement model in Settings |
| 115 | [AndreTheAccelerator/dsh-design-canvas](https://github.com/AndreTheAccelerator/dsh-design-canvas) | 0 | 2026-11-09 | 2026-11-09 | Chat-paired design canvas plugin for the DeepSeek Harness Web UI: artboard layers, CSS-like auto-layout frames, inline element comments, and agent-revisable direct manipulation. |
| 116 | [andrewsiah/agentswarm-dsh-plugin](https://github.com/andrewsiah/agentswarm-dsh-plugin) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek Harness (DSH) plugin: find useful paid-task work for your agent on agentswarm.space (read-only MCP task search + /agentswarm-work skill) |
| 117 | [AnkoCD/dsh-time-router](https://github.com/AnkoCD/dsh-time-router) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness (dsh) plugin: time-aware model router. Routes each turn between peak/off-peak upstreams by Beijing time, with per-turn locking, fallback, holiday calendar, status chip and JSONL event log. |
| 118 | [Anthony-Vivalink/foreman-plane](https://github.com/Anthony-Vivalink/foreman-plane) | 0 | 2026-11-09 | 2026-11-09 | A task governance plane that sits outside agent harnesses: dispatch with dependency gates, artifact-based acceptance, and an append-only audit ledger. |
| 119 | [AQYLPZ/bale](https://github.com/AQYLPZ/bale) | 0 | 2026-11-08 | 2026-11-09 | DSH (DeepSeek Harness) plugin that compresses large tool outputs before they enter the model context, with hash-based retrieval of the original text. |
| 120 | [Arunat-25/dsh-browser-sidepanel](https://github.com/Arunat-25/dsh-browser-sidepanel) | 0 | 2026-11-09 | 2026-11-09 | A real browser for the DeepSeek Harness Web GUI right sidebar: CDP-driven Chrome, not an iframe, with element picking into context and 7 agent tools. The Browser that ships with DSH is a sandboxed iframe that is off by default in Web profiles. |
| 121 | [ARustamA/dsh-strata-monitor](https://github.com/ARustamA/dsh-strata-monitor) | 0 | 2026-11-09 | 2026-11-09 | Live monitor of the local Strata model server inside the DeepSeek Harness GUI |
| 122 | [asots/dsh-longsession](https://github.com/asots/dsh-longsession) | 0 | 2026-11-06 | 2026-11-09 | Long-session performance plugin for DeepSeek Harness: a reversible Collapse history toggle for the page history window. |
| 123 | [astelirons-ai/dsh-local-monitor](https://github.com/astelirons-ai/dsh-local-monitor) | 0 | 2026-11-09 | 2026-11-09 | monitoring temperature, frequence, memory usage etc... of both cpu and gpu for local IA usage |
| 124 | [atattier/local-model-speedtest](https://github.com/atattier/local-model-speedtest) | 0 | 2026-11-08 | 2026-11-09 | DSH 模型测速插件：在模型选择器里一键测首字延迟与生成速度，支持按渠道分组批量测速。 |
| 125 | [ba1ying2/dsh-delete-session-menu](https://github.com/ba1ying2/dsh-delete-session-menu) | 0 | 2026-11-09 | 2026-11-09 | Delete a conversation from the DSH sidebar (bilingual zh/en): removes the session log, tidies the workspace registry, and drops the row from every client. |
| 126 | [bailishta/dsh-sidebar-mode-indicator](https://github.com/bailishta/dsh-sidebar-mode-indicator) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：左侧栏显示每个会话的模式，支持按模式配置彩色圆点、自定义模式自动配色与模式注册接口 |
| 127 | [bayhnf/dsh-remote-client](https://github.com/bayhnf/dsh-remote-client) | 0 | 2026-11-09 | 2026-11-09 | Use the DeepSeek Harness desktop app with DSH running on your own servers over SSH: Settings → Remote servers, multi-server switching, one-click server setup. |
| 128 | [beings-labs/dsh-domain-manager](https://github.com/beings-labs/dsh-domain-manager) | 0 | 2026-11-09 | 2026-11-09 | A DeepSeek Harness plugin for managing domains. |
| 129 | [bitons/dsh-crease](https://github.com/bitons/dsh-crease) | 0 | 2026-10-08 | 2026-11-09 | 为 DeepSeek Harness 添加折痕与隐墨：整行折叠、字句遮盖，让对话阅读更清爽。支持自定义样式，本地保存。 |
| 130 | [boldandigital/dsh-google-drive](https://github.com/boldandigital/dsh-google-drive) | 0 | 2026-11-08 | 2026-11-09 | Add Google Drive accounts to the DeepSeek Harness — sign in with Google or connect a service account in one click — then browse their files in the right sidebar and drag a file straight into the conversation. |
| 131 | [BXCQ/dsh-skin-switcher](https://github.com/BXCQ/dsh-skin-switcher) | 0 | 2026-11-09 | 2026-11-09 | Twelve visual styles for the DeepSeek Harness UI: pixel, terminal, paper, aurora, candy, early-QQ retro, and five gradient skins. Zero-dependency sidebar plugin. |
| 132 | [Caho1/dsh-component-picker](https://github.com/Caho1/dsh-component-picker) | 0 | 2026-11-06 | 2026-11-09 | Claude-style element picker for the dsh built-in Browser: hover-highlight, pick, and send the element/component/props/source with your message. |
| 133 | [caidows/dsh-codex-model-picker](https://github.com/caidows/dsh-codex-model-picker) | 0 | 2026-11-09 | 2026-11-09 | Codex-style model picker for the DeepSeek Harness composer: draggable reasoning-effort slider, model list, no default stop. |
| 134 | [CanMing/dsh-web-search-codex](https://github.com/CanMing/dsh-web-search-codex) | 0 | 2026-10-14 | 2026-11-09 | Native OpenAI Responses web search and desktop settings for DeepSeek Harness 0.2.2-rc.1 |
| 135 | [cavenzhong/dsh-obsidian-memo](https://github.com/cavenzhong/dsh-obsidian-memo) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 的 Obsidian 便签插件：把 Obsidian 文件夹变成淡色便签墙，支持快速记录、AI 评论与开档，笔记仍是本地 Markdown。 |
| 136 | [ceasarXuu/dsh-better-markdown](https://github.com/ceasarXuu/dsh-better-markdown) | 0 | 2026-11-08 | 2026-11-09 | Markdown in DeepSeek Harness: sent user messages render as Markdown and the composer shows a live rendered preview with in-place syntax highlighting. |
| 137 | [cendo91/dsh-session-telemetry](https://github.com/cendo91/dsh-session-telemetry) | 0 | 2026-11-09 | 2026-11-09 | DSH Web UI telemetry strip for current-session stats, token usage, and context occupancy |
| 138 | [cgartlab/dsh-tac](https://github.com/cgartlab/dsh-tac) | 0 | 2026-11-04 | 2026-11-09 | DeepSeek Harness plugin: project/session task board, floating session HUD, keyboard-first navigation, and task notifications. License: CC BY-NC-SA 4.0. |
| 139 | [che0911/dsh-market-groups](https://github.com/che0911/dsh-market-groups) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin market enhancement: conflict highlighting, one-click category grouping, grouped-by-default installed list. |
| 140 | [ChenMuDX/dsh-subagent-model-policy](https://github.com/ChenMuDX/dsh-subagent-model-policy) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: session-scoped subagent model selection policy, model pool, concurrency limits and execution evidence. 子智能体模型选择策略。 |
| 141 | [chenyidong/dsh-plugin-scroll-memory](https://github.com/chenyidong/dsh-plugin-scroll-memory) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件页滚动位置记忆：从插件详情返回列表时回到原处，不再跳回顶部。 |
| 142 | [ChinXavier/dsh-gui-agent](https://github.com/ChinXavier/dsh-gui-agent) | 0 | 2026-11-09 | 2026-11-09 | Mouse &amp; keyboard agent control for DeepSeek Harness: session-scoped Windows desktop automation with human-like input pacing (鼠标键盘代理操作 · 真人模拟). |
| 143 | [CHIPINGHSIEN/dsh-wikiskill-experience](https://github.com/CHIPINGHSIEN/dsh-wikiskill-experience) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: compiles cross-session agent experience into a persistent wiki, injects a short descriptive index into later sessions, and adds an evidence-gated procedural loop that never self-publishes. |
| 144 | [Chonwai/dsh-gsap-skills](https://github.com/Chonwai/dsh-gsap-skills) | 0 | 2026-11-09 | 2026-11-09 | Official GSAP skills as a DeepSeek Harness bundle: eight skills, four documented corrections, verified gates |
| 145 | [ChrisZqaq/dsh-cpamc-pill](https://github.com/ChrisZqaq/dsh-cpamc-pill) | 0 | 2026-11-09 | 2026-11-09 | A sidebar capsule for the DeepSeek Harness Web UI that shows CPA proxy connection health and today's token usage, read from CPA-Manager-Plus. |
| 146 | [Chriszzx/dsh-bookshelf](https://github.com/Chriszzx/dsh-bookshelf) | 0 | 2026-11-06 | 2026-11-09 | A local PDF/EPUB bookshelf plugin for DeepSeek Harness with built-in readers and a native Books right sidebar. |
| 147 | [cinewave0/dsh-quick-panel-mac](https://github.com/cinewave0/dsh-quick-panel-mac) | 0 | 2026-11-09 | 2026-11-09 | DSH 快捷面板 macOS 版：浮岛、待办、提醒、实时消息、审批接管 |
| 148 | [ckilwork/dsh-plugin-llama-manager](https://github.com/ckilwork/dsh-plugin-llama-manager) | 0 | 2026-11-09 | 2026-11-09 | Windows llama.cpp manager for DeepSeek Harness with GGUF launch profiles, logs, and model picker integration. |
| 149 | [clistna/offwork-countdown](https://github.com/clistna/offwork-countdown) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: off-work countdown below the composer |
| 150 | [cnidrs/deepseek-rlm](https://github.com/cnidrs/deepseek-rlm) | 0 | 2026-08-20 | 2026-11-09 | Persistent IPython state, durable snapshots, and native recursive subagents for DeepSeek Harness—packaged as a Prime-compatible Cordis plugin bundle. |
| 151 | [cnidrs/recursus](https://github.com/cnidrs/recursus) | 0 | 2026-08-22 | 2026-11-09 | A durable, full-access runtime agent built on DeepSeek Harness |
| 152 | [ColdRainLab/dsh-feature-check](https://github.com/ColdRainLab/dsh-feature-check) | 0 | 2026-11-09 | 2026-11-09 | Startup self-check that compares against the last healthy baseline and reports missing loader entries, client modules and plugins skipped by compatibility checks, especially useful after DSH upgrades. |
| 153 | [ColdRainLab/dsh-session-delete](https://github.com/ColdRainLab/dsh-session-delete) | 0 | 2026-11-09 | 2026-11-09 | Adds move-to-trash and a session trash to the sidebar: restore removed sessions or delete them for good. |
| 154 | [ColdRainLab/dsh-workspace-plus](https://github.com/ColdRainLab/dsh-workspace-plus) | 0 | 2026-11-09 | 2026-11-09 | Turns the sidebar plus button into a quick-create box: type a name, get a folder with that name and a new workspace, with no folder picker. |
| 155 | [ColdRainLab/dsh-workspace-sync](https://github.com/ColdRainLab/dsh-workspace-sync) | 0 | 2026-11-09 | 2026-11-09 | Sync workspaces, session history and automations to your own cloud folder (any folder-synced backend), so a new machine picks up where you left off. |
| 156 | [ColdRainLab/dsh-workspace-vault](https://github.com/ColdRainLab/dsh-workspace-vault) | 0 | 2026-11-09 | 2026-11-09 | Pin workspaces and tasks in the sidebar, with a password-protected hidden space and a workspace access lock. Hidden items are excluded from cloud sync. |
| 157 | [colin4k/DSH-webtokens-desktop](https://github.com/colin4k/DSH-webtokens-desktop) | 0 | 2026-11-09 | 2026-11-09 | DSH WebTokens — Desktop 0.2.2-rc.1 适配版：将已登录的 Chrome DeepSeek 网页接入 DeepSeek Harness Desktop |
| 158 | [comeonzhj/dsh-pm-plugin](https://github.com/comeonzhj/dsh-pm-plugin) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin market index (format 1) hosted on GitHub Pages |
| 159 | [CoraxEldridge/dsh-managed-workspaces](https://github.com/CoraxEldridge/dsh-managed-workspaces) | 0 | 2026-11-09 | 2026-11-09 | DSH-owned workspaces under a configurable base directory, with multiple linked folders per workspace. |
| 160 | [CoraxEldridge/dsh-message-cite](https://github.com/CoraxEldridge/dsh-message-cite) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: cite one specific message from another conversation via the @ menu. 引用其他对话里的某一条具体消息。 |
| 161 | [CQin04/dsh-playwright-mcp](https://github.com/CQin04/dsh-playwright-mcp) | 0 | 2026-11-09 | 2026-11-09 | DSH config bundle: connect Microsoft @playwright/mcp to your running Chrome via the Playwright extension (--extension). Drives your logged-in tabs, no token in repo. |
| 162 | [CQin04/dsh-usage-timer](https://github.com/CQin04/dsh-usage-timer) | 0 | 2026-11-09 | 2026-11-09 | Times how long DSH stays open: records every use and the running total, merging a quick restart into the same use. |
| 163 | [CrazyHao/dsh-pet-venti](https://github.com/CrazyHao/dsh-pet-venti) | 0 | 2026-11-08 | 2026-11-09 | 温迪版桌宠：人设 + 114 个动作皮肤 + IndexTTS 本地语音 + 屏幕/麦克风感知吐槽（配合 dsh-pet） |
| 164 | [cwen63970-coder/dsh-everything-mcp](https://github.com/cwen63970-coder/dsh-everything-mcp) | 0 | 2026-11-07 | 2026-11-09 | Everything (voidtools) filename search for DeepSeek Harness — a Windows-only MCP bundle |
| 165 | [Cy2s1ne/dsh-balance](https://github.com/Cy2s1ne/dsh-balance) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件：在输入框工具行显示 DeepSeek 账户余额与峰谷计费时段。 |
| 166 | [cybeshi/dsh-plugin-whale-butler](https://github.com/cybeshi/dsh-plugin-whale-butler) | 0 | 2026-11-09 | 2026-11-09 | 截图或一句话就能记账的本地账本。DSH 插件。 |
| 167 | [cycocyco/alice-memory](https://github.com/cycocyco/alice-memory) | 0 | 2026-11-09 | 2026-11-09 | Long-term memory for DeepSeek Harness: auto capture, tiered hybrid recall (vector + FTS5), zero dependencies, Node only. |
| 168 | [D00023/dsh-plugin-desktop-hud](https://github.com/D00023/dsh-plugin-desktop-hud) | 0 | 2026-11-09 | 2026-11-09 | An always-on-top desktop card for DeepSeek Harness (DSH): running tasks, approval requests, completed turns, with a multi-session task list. |
| 169 | [D120697/dshctl](https://github.com/D120697/dshctl) | 0 | 2026-11-09 | 2026-11-09 | Control a running DeepSeek Harness (DSH) instance from scripts: create sessions in the right workspace, send prompts, read back conversations and injected memory. |
| 170 | [Da0Mine/dsh-inline-image-ref](https://github.com/Da0Mine/dsh-inline-image-ref) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件：把拖入/粘贴进输入框的图片当文件处理 —— 光标处插 @路径 胶囊 + 悬停看原图 |
| 171 | [dandandujie/My-Plugins](https://github.com/dandandujie/My-Plugins) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugins by dandandujie |
| 172 | [daoyan2142/dsh-plugin-git-sync](https://github.com/daoyan2142/dsh-plugin-git-sync) | 0 | 2026-11-09 | 2026-11-09 | Sync the third-party plugins installed in a DSH profile between machines through a GitHub or Gitee repository. |
| 173 | [Darkhe55/dsh-plugin-middle-panel](https://github.com/Darkhe55/dsh-plugin-middle-panel) | 0 | 2026-11-09 | 2026-11-09 | 为模型展示交付成果和下达精细微调指示的dsh desktop面板 |
| 174 | [dashi666666-zxp/dsh-arch](https://github.com/dashi666666-zxp/dsh-arch) | 0 | 2026-11-09 | 2026-11-09 | 三省六部式多角色架构插件（DeepSeek Harness）：终端执行的「规划→执行→校验→回执」流水线 + 固定阵型（拆分/路径/对抗性复核/规划/隔离/修改/工作/多方验证），硬约束由代码强制（fail-closed） |
| 175 | [dashi666666-zxp/dsh-court](https://github.com/dashi666666-zxp/dsh-court) | 0 | 2026-11-09 | 2026-11-09 | 三省六部 · 朝堂（DeepSeek Harness 插件）：圣旨 → 太子分拣 → 中书拟敕 → 门下审覆 → 尚书都省派工 → 六部与二十四司并行办案 → 御史台按劾 ∥ 都省覆核 → 奏疏；长线子 agent 可直连问对、内侍监 token 计度与红线、断点续跑，硬约束由代码强制（fail-closed） |
| 176 | [dawnsss/dsh-clashVerge](https://github.com/dawnsss/dsh-clashVerge) | 0 | 2026-11-09 | 2026-11-09 | 给 DSH 装上出口模式开关与流量看板：四种预设（不接管 / 直连 / 外网 / 全局），按字节记账，能回答「这次调研吃了多少流量、都去了哪些主机」。只管 DSH 自己的出网，不动系统代理。 |
| 177 | [DDDMUC/dsh-bare-preset](https://github.com/DDDMUC/dsh-bare-preset) | 0 | 2026-11-09 | 2026-11-09 | DSH 裸模模式预设（插件形态）：空系统提示词、零工具、零运行时上下文 |
| 178 | [Dekurri/dsh-task-progress](https://github.com/Dekurri/dsh-task-progress) | 0 | 2026-11-08 | 2026-11-09 | DSH plugin: floating live task-progress card above the composer (pip / tqdm / training epochs) with speed, ETA and one-click stop · dsh-plugin |
| 179 | [dev-cmde/dsh-routerai-balance](https://github.com/dev-cmde/dsh-routerai-balance) | 0 | 2026-11-08 | 2026-11-09 | RouterAI credit balance and period spend in the DeepSeek Harness sidebar |
| 180 | [dev-cmde/dsh-routerai-prices](https://github.com/dev-cmde/dsh-routerai-prices) | 0 | 2026-11-08 | 2026-11-09 | RouterAI price table for the profile's models, with the active one highlighted |
| 181 | [dichi123456/dsh-molingTex](https://github.com/dichi123456/dsh-molingTex) | 0 | 2026-11-09 | 2026-11-09 | ?? LaTeX ? DSH ??:??? LaTeX ???(??? / ?? / ?? / PDF)+ 5 ? Agent ?? |
| 182 | [dingchenhui0618-arch/dsh-pnl-attribution](https://github.com/dingchenhui0618-arch/dsh-pnl-attribution) | 0 | 2026-10-27 | 2026-11-09 | Floating A-share P&amp;L contribution card for DeepSeek Harness, with a one-click closing-summary PNG export. |
| 183 | [dingchenhui0618-arch/dsh-pua-receipt](https://github.com/dingchenhui0618-arch/dsh-pua-receipt) | 0 | 2026-10-27 | 2026-11-09 | 给 DeepSeek Harness 的 /pua 加回执：对比施压前后各 N 轮工具调用与验证步骤，判定「改了做法 / 只是重述 / 无变化」 |
| 184 | [dingchenhui0618-arch/dsh-split-proof](https://github.com/dingchenhui0618-arch/dsh-split-proof) | 0 | 2026-11-09 | 2026-11-09 | Split-rule acceptance proof for DeepSeek Harness: read a Clash/Mihomo profile and a suite of expectations, then report expected vs actual per domain with the matched rule - read-only, offline, no device configuration is written. |
| 185 | [dingchenhui0618-arch/dsh-wechat-draft-gate](https://github.com/dingchenhui0618-arch/dsh-wechat-draft-gate) | 0 | 2026-11-09 | 2026-11-09 | Outbound approval gate for WeChat replies in DeepSeek Harness: every reply lands in a local draft box; only a panel confirmation or /send releases it. |
| 186 | [dixieWithHeart/dsh-context-usage-for-agent](https://github.com/dixieWithHeart/dsh-context-usage-for-agent) | 0 | 2026-11-04 | 2026-11-09 | DSH 插件：让 Agent 读到自己的上下文占用（context_usage 工具 + 每轮读数 + 设置页） |
| 187 | [dixieWithHeart/dsh-doom-loop-guard](https://github.com/dixieWithHeart/dsh-doom-loop-guard) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin that detects repetitive reasoning loops (doom loop) and responds with a nudge, a cut, or a chime. |
| 188 | [dixieWithHeart/dsh-notify-chime](https://github.com/dixieWithHeart/dsh-notify-chime) | 0 | 2026-11-04 | 2026-11-09 | DSH 插件：工作完成 / 中断 / 出错 / Agent 提问时播放提示音（Windows Toast 可选） |
| 189 | [don2ccc/dsh-pet-lucky](https://github.com/don2ccc/dsh-pet-lucky) | 0 | 2026-11-09 | 2026-11-09 | 用我家虎皮鹦鹉lucky命名的一只可爱的deepseek 3d 桌面宠物 |
| 190 | [dongsheng123132/dsh-import-once](https://github.com/dongsheng123132/dsh-import-once) | 0 | 2026-11-09 | 2026-11-09 | One-shot import of the project folders other AI tools remember into the DeepSeek Harness sidebar. Read-only scan, add-only, idempotent without state, dry-run capable. |
| 191 | [dongsheng123132/dsh-move-up](https://github.com/dongsheng123132/dsh-move-up) | 0 | 2026-11-09 | 2026-11-09 | Move a workspace to the top of the DeepSeek Harness sidebar once, from its menu. No favorites, pins, stars, or automatic reordering. 8 KB, no dependencies, no state. |
| 192 | [drliuhuan/dsh-plugin-agy-bg](https://github.com/drliuhuan/dsh-plugin-agy-bg) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness Web UI plugin: a mouse-following WebGL particle background recreated from antigravity.google. |
| 193 | [dsh-pluggin-free/session-manager](https://github.com/dsh-pluggin-free/session-manager) | 0 | 2026-11-09 | 2026-11-09 | DSH 会话管理器：会话回收站、多选批量删除、折叠与恢复。Session manager for DeepSeek Harness — recycle bin, batch delete, restore. |
| 194 | [dude1wudv/dsh-next-turn](https://github.com/dude1wudv/dsh-next-turn) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：一轮结束后预测下一句提示词，ghost text 显示在输入框，Tab 填入；自动模式自驱续跑 |
| 195 | [duobaobox/dsh-ssh-workbench](https://github.com/duobaobox/dsh-ssh-workbench) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness SSH Workbench: remote terminal + local/remote file manager + @server command execution, with Windows host/target support and self-contained install. |
| 196 | [DX12xyz/dsh-asar-framework](https://github.com/DX12xyz/dsh-asar-framework) | 0 | 2026-11-09 | 2026-11-09 | DSH 桌面 asar 外壳桥框架：等长 asar 补丁、外部 bridge、asarShell 服务与文件通道契约。MIT。 |
| 197 | [EastChilde/dsh-novel-forge](https://github.com/EastChilde/dsh-novel-forge) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 小说创作插件：从一句想法到能连载的长篇网文。设定/大纲/正文/伏笔全部落成可读可改的文件，模型每章只拿该拿的上下文。A DSH plugin for long-form Chinese web fiction. |
| 198 | [EnderDAG/dsh-quote-archive](https://github.com/EnderDAG/dsh-quote-archive) | 0 | 2026-11-09 | 2026-11-09 | Archive, search, and recall group-chat quotes in DeepSeek Harness with a local SQLite library, a SnowLuma / OneBot v11 QQ channel, and the original AstrBot management page. |
| 199 | [endlass/dsh-idea-pool](https://github.com/endlass/dsh-idea-pool) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 灵感池：侧栏工作台，本机/云端双模存储 |
| 200 | [endlass/dsh-subagent-remote](https://github.com/endlass/dsh-subagent-remote) | 0 | 2026-10-23 | 2026-11-09 | Cross-machine (remote) subagent provider for DeepSeek Harness: one-shot delegation to a DSH acp profile over SSH, with a Plugins-page configuration UI. |
| 201 | [Erfan817/prompt-spark](https://github.com/Erfan817/prompt-spark) | 0 | 2026-11-09 | 2026-11-09 | A DSH composer plugin that expands short drafts into clear, detailed prompts while preserving the input language. |
| 202 | [ericddm/dsh-ToDoList](https://github.com/ericddm/dsh-ToDoList) | 0 | 2026-11-06 | 2026-11-09 | a dsh-plugin about ToDoList |
| 203 | [exile412/dsh-startup-screen-exile](https://github.com/exile412/dsh-startup-screen-exile) | 0 | 2026-11-09 | 2026-11-09 | DSH 启动动画 · EXILE 二创版（基于 6shenhonghong9/dsh-startup-screen，MIT） |
| 204 | [facai5382-lab/dsh-edge-dock](https://github.com/facai5382-lab/dsh-edge-dock) | 0 | 2026-11-09 | 2026-11-09 | DSH ??:Harness ?????????????,??????????;???????????????????(Windows) |
| 205 | [Fanch-hui/dsh-workbuddy-manager](https://github.com/Fanch-hui/dsh-workbuddy-manager) | 0 | 2026-11-09 | 2026-11-09 | 一个将 WorkBuddy 订阅反代到 DeepSeek Harness 使用的 DSH 插件 |
| 206 | [faruzanCN/dsh-memory-cloud](https://github.com/faruzanCN/dsh-memory-cloud) | 0 | 2026-11-08 | 2026-11-09 | Visualize all DSH session memories as an interactive 3D nebula. |
| 207 | [firstdreamlh/dsh-feishu-channel](https://github.com/firstdreamlh/dsh-feishu-channel) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek Harness 一体化渠道插件（基于 dsh-channel-core 二次开发）：把 Discord 与飞书（Lark）两套渠道合进一个插件统一管理。含扫码创建/连接飞书机器人、扫码添加机器人、主人认领与身份核验、私聊与群聊会话路由、CardKit 流式进度卡片、/model 模型选择卡片、Ask User 交互，以及 channel_send 主动外发文字/图片/文件。本分支优化飞书回答卡片字号，附中英双语文档与回归测试。 |
| 208 | [FlamesCN/dsh-ancient-echoes](https://github.com/FlamesCN/dsh-ancient-echoes) | 0 | 2026-11-09 | 2026-11-09 | Ancient Echoes BaZi and Chinese metaphysics tools for DeepSeek Harness (dsh) — thin pass-through to the AE Tools API. |
| 209 | [FlameSky-S/dsh-plugin-porter](https://github.com/FlameSky-S/dsh-plugin-porter) | 0 | 2026-11-08 | 2026-11-09 | Export DSH plugins with dependency closure and docs to removable media; scan and install offline on an isolated intranet. |
| 210 | [fleekelon/dsh-fintax](https://github.com/fleekelon/dsh-fintax) | 0 | 2026-11-09 | 2026-11-09 | 财税工作台：基于 IMA 知识库的政策引证问答、跨境电商合规自查、确定性税额试算。FinTax workbench for DeepSeek Harness. |
| 211 | [FM1503/dsh-ui-layout](https://github.com/FM1503/dsh-ui-layout) | 0 | 2026-11-08 | 2026-11-09 | DSH plugin: layout contract, headless measurement and rule-based audit for UI work (web pages, Godot scenes, declared layouts), plus a GUI panel with violations and annotated breakpoints. |
| 212 | [Forget1672/dsh-serverchan-bot](https://github.com/Forget1672/dsh-serverchan-bot) | 0 | 2026-11-09 | 2026-11-09 | Bridges DSH sessions with a ServerChan³ Bot |
| 213 | [Franklinyung/dsh-web-search-minimax](https://github.com/Franklinyung/dsh-web-search-minimax) | 0 | 2026-11-09 | 2026-11-09 | MiniMax-first web search for DeepSeek Harness (ctx.web), with a DuckDuckGo fallback when MiniMax has no quota, no credential, errors, or times out. |
| 214 | [Friade/dsh-token-bubble](https://github.com/Friade/dsh-token-bubble) | 0 | 2026-11-09 | 2026-11-09 | dsh查看累计使用了多少token |
| 215 | [Fstrategy/switchboard-dsh](https://github.com/Fstrategy/switchboard-dsh) | 0 | 2026-11-09 | 2026-11-09 | Switchboard session board for DeepSeek Harness. Community port of Fstrategy/switchboard with native session facts, waiting actions, demo mode and zero-model-call off switch. |
| 216 | [fxdfx/dsh-skill-quickpick](https://github.com/fxdfx/dsh-skill-quickpick) | 0 | 2026-11-09 | 2026-11-09 | Skill quick-pick panel for DeepSeek Harness |
| 217 | [Gaffsailstenopterygiusquadrisicissus463/plugin-hub](https://github.com/Gaffsailstenopterygiusquadrisicissus463/plugin-hub) | 0 | 2026-05-22 | 2026-11-09 | Orchestrate out-of-process Rust plugins via contract center, registry, event bus, MCP tools, and a web console. |
| 218 | [gcolt888/dsh-screenshot-hotkey](https://github.com/gcolt888/dsh-screenshot-hotkey) | 0 | 2026-11-09 | 2026-11-09 | WeChat-style screenshot + annotation for DeepSeek Harness (DSH) with a system-wide hotkey that never steals focus. |
| 219 | [Gemus-AI/gemus-dsh-plugin](https://github.com/Gemus-AI/gemus-dsh-plugin) | 0 | 2026-08-16 | 2026-11-09 | Gemus bundle for DeepSeek Harness (dsh): mounts the Gemus MCP server as native dsh tools — plan canvases, run generations, pull assets back. Config only; generated from the Gemus monorepo. |
| 220 | [ghc2019/dsh-qr-scanner](https://github.com/ghc2019/dsh-qr-scanner) | 0 | 2026-11-09 | 2026-11-09 | Read QR codes from images and get the link — a DeepSeek Harness plugin. |
| 221 | [ghostmss86-afk/dsh-skin-studio](https://github.com/ghostmss86-afk/dsh-skin-studio) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 皮肤与壁纸插件：预设/自定义配色、图片与视频聊天壁纸、收藏与实时预览。 |
| 222 | [github-yousen/dsh-novel-mode](https://github.com/github-yousen/dsh-novel-mode) | 0 | 2026-11-09 | 2026-11-09 | 小说模式 (Novel Mode): a one-click DSH plugin that runs the complete long-form novel writing workflow |
| 223 | [glk1220/dsh-session-git](https://github.com/glk1220/dsh-session-git) | 0 | 2026-11-09 | 2026-11-09 | Session Git for DeepSeek Harness: a branch map for forked sessions, and /merge to bring a branch's work back into the main session. 会话 Git：分叉会话的分支地图，一键把分支成果合并回主会话。 |
| 224 | [gosutry/dsh-seal-scripts](https://github.com/gosutry/dsh-seal-scripts) | 0 | 2026-11-01 | 2026-11-09 | Seal a working typescript code chain into an executable tool script that carries a manifest, per-file sha256 and a line in the system prompt, then run it verbatim in any later session. Backed by review files that survive compaction. |
| 225 | [Grawl/dsh-screen-switcher](https://github.com/Grawl/dsh-screen-switcher) | 0 | 2026-11-09 | 2026-11-09 | Ctrl+Tab switcher for DeepSeek Harness: an Alt-Tab-style list of every visited place — sessions, Settings sections and plugin pages. Hold Ctrl to see it, release to switch. |
| 226 | [GUANUI/dsh-campus-net](https://github.com/GUANUI/dsh-campus-net) | 0 | 2026-11-09 | 2026-11-09 | Campus network auto-login plugin for DeepSeek Harness: status, on-demand login, local settings page, optional autostart daemon. Ships a Nanjing Audit University preset and a configurable JSON-portal mode. |
| 227 | [guicaiyue/dsh-context-domains](https://github.com/guicaiyue/dsh-context-domains) | 0 | 2026-11-09 | 2026-11-09 | DSH 上下文领域：把一个领域内的 skill / tool 归成一块，在会话顶部一键整块开关 |
| 228 | [gyxsza/approval-alert](https://github.com/gyxsza/approval-alert) | 0 | 2026-11-09 | 2026-11-09 | Approval alert plugin for DeepSeek Harness |
| 229 | [Hakuzoukyuu/dsh-commandcode-go](https://github.com/Hakuzoukyuu/dsh-commandcode-go) | 0 | 2026-11-09 | 2026-11-09 | Command Code Go provider + draggable usage window for DeepSeek Harness (DSH) |
| 230 | [Hanice404/dsh-sidebar-plugins-toggle](https://github.com/Hanice404/dsh-sidebar-plugins-toggle) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件：在侧边栏「插件」行右侧加一个小箭头，点一下收起插件区（插件市场 / 自动化任务 / 上下文洞察 / 更多），再点一下展开。 |
| 231 | [hanwang-ai/cs-source-reliable](https://github.com/hanwang-ai/cs-source-reliable) | 0 | 2026-11-06 | 2026-11-09 | Source reliability for CS teaching in DeepSeek Harness: 119 verified CS sources, find + citation-audit tools. · 计算机信源可靠性插件 |
| 232 | [hanwang-ai/quantitativeTrading-source-reliable](https://github.com/hanwang-ai/quantitativeTrading-source-reliable) | 0 | 2026-11-06 | 2026-11-09 | Verified, agent-collectable sources for quantitative finance and crypto trading: regulator filings, PIT fundamentals, macro, exchange APIs, on-chain data and archives, each with authority tier and freshness probes. · 量化金融与加密交易信源注册表：监管原始文件、PIT 基本面、宏观、交易所 API、链上数据与归档，带权威分级与时效探测。 |
| 233 | [HAppy-2436/dsh-status](https://github.com/HAppy-2436/dsh-status) | 0 | 2026-11-03 | 2026-11-09 | Native macOS menu bar companion for DeepSeek Harness (DSH): session status, alerts and one-click jump. |
| 234 | [HAppy-2436/dsh-status-bridge](https://github.com/HAppy-2436/dsh-status-bridge) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: bridges DeepSeek Harness session status to the DSH Status macOS menu bar app. |
| 235 | [haroon0x/dsh-message-edit](https://github.com/haroon0x/dsh-message-edit) | 0 | 2026-11-09 | 2026-11-09 | Edit sent user messages in DSH by forking the session and resending the edited text |
| 236 | [hbx111/dsh-policy](https://github.com/hbx111/dsh-policy) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: in-stream refusal detection and auto-retry that keeps streaming intact |
| 237 | [hcycyxx/dsh-think-overlay](https://github.com/hcycyxx/dsh-think-overlay) | 0 | 2026-11-07 | 2026-11-09 | DSH 实时思考悬浮窗插件：逐字流式输出、绿灯跟速、自动英译中与独立小窗。 |
| 238 | [helloworldtang/dsh-exomind](https://github.com/helloworldtang/dsh-exomind) | 0 | 2026-11-09 | 2026-11-09 | ExoMind 知识飞轮接入 DeepSeek Harness:search/entity/query 三工具,零配置继承 exomind login 凭据 |
| 239 | [hezheyihuan/dsh-open-deepseek-web](https://github.com/hezheyihuan/dsh-open-deepseek-web) | 0 | 2026-11-09 | 2026-11-09 | Open chat.deepseek.com in a standalone Chrome app window from a DSH sidebar button. |
| 240 | [hiyijian/dsh-session-cost-live](https://github.com/hiyijian/dsh-session-cost-live) | 0 | 2026-11-09 | 2026-11-09 | Live session cost for DeepSeek Harness: CNY/USD official pricing, peak/off-peak split, subagent roll-up, and an in-app price table editor. |
| 241 | [hl3207/dsh-movie](https://github.com/hl3207/dsh-movie) | 0 | 2026-11-06 | 2026-11-09 | DeepSeek Harness插件，用于追踪当前正在上映或一个月内待映的中/美/欧/日/韩电影或电视剧，并综合全球热度与各大网站评分进行排序推荐。 |
| 242 | [honor-99/dsh-feishu-bridge](https://github.com/honor-99/dsh-feishu-bridge) | 0 | 2026-11-06 | 2026-11-09 | 用飞书远程驱动本机 DeepSeek Harness：消息即任务，会话记录在 DSH 与飞书双端一致，无需公网 IP 或内网穿透 |
| 243 | [Horizonepn/dsh-energy-patent](https://github.com/Horizonepn/dsh-energy-patent) | 0 | 2026-11-09 | 2026-11-09 | Energy-storage patent workbench for DeepSeek Harness: drafting, figures, docket, office actions, mailbox replies |
| 244 | [howyay/dsh-title-agent-indicator](https://github.com/howyay/dsh-title-agent-indicator) | 0 | 2026-11-09 | 2026-11-09 | DSH Web plugin: show running subagent counts, keep main-agent spinners accurate, and support full-size favorites. |
| 245 | [huadao1145/dsh-dynamic-todo-board](https://github.com/huadao1145/dsh-dynamic-todo-board) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek Harness (DSH) 的跨会话待办板：自动记下你没拍板的问题，一键跳回原会话。 Cross-session TODO board for DSH that captures the questions you never answered. |
| 246 | [huajikano/dsh-gatekeeper](https://github.com/huajikano/dsh-gatekeeper) | 0 | 2026-11-09 | 2026-11-09 | Gatekeeper (zhazong) - a DeepSeek Harness plugin that blocks model refusal replies before they reach the session context |
| 247 | [hualidan42-beep/dsh-plugin-archive-shelf](https://github.com/hualidan42-beep/dsh-plugin-archive-shelf) | 0 | 2026-11-09 | 2026-11-09 | DSH 归藏：列出归档会话、看清聊了什么、一键放出来接着聊 |
| 248 | [huaweicloudskill/scenes-skill-creator](https://github.com/huaweicloudskill/scenes-skill-creator) | 0 | 2026-11-09 | 2026-11-09 | 在 DeepSeek Harness 的 Web 界面里，用一套完整面板创建技能：填写需求 → 调用官方 creator → 实时查看阶段 / 日志 → 10 分制评测 → 未达标打回修复，直到达标或用完轮数。 |
| 249 | [HuiHuanYe/dsh-archived-session-delete](https://github.com/HuiHuanYe/dsh-archived-session-delete) | 0 | 2026-11-09 | 2026-11-09 | A DSH Web plugin that adds a permanent delete action for archived sessions to the sidebar session context menu. |
| 250 | [hzopc1031/dsh-plugins](https://github.com/hzopc1031/dsh-plugins) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness (DSH) plugins by hzopc1031. |
| 251 | [ififi2017/dsh-plugin-maomao](https://github.com/ififi2017/dsh-plugin-maomao) | 0 | 2026-11-09 | 2026-11-09 | 猫猫是适用于 DeepSeek Harness 的聊天伙伴插件，支持桌面、QQ、Telegram 和 Lark / 飞书。 |
| 252 | [ikauann/dsh-opentunnel](https://github.com/ikauann/dsh-opentunnel) | 0 | 2026-11-09 | 2026-11-09 | OpenTunnel route for the DSH Web GUI: a Settings switch, a QR code to enter from the phone, and a loopback proxy that rewrites Host/Origin. |
| 253 | [Ironman888-star/dsh-optimizer](https://github.com/Ironman888-star/dsh-optimizer) | 0 | 2026-11-09 | 2026-11-09 | DSH Plugin: context truncation, token usage monitoring, customizable task instructions. |
| 254 | [JAKE1266/dsh-kimi-ui](https://github.com/JAKE1266/dsh-kimi-ui) | 0 | 2026-11-09 | 2026-11-09 | Kimi 风格皮肤 for DeepSeek Harness Web — Kimi-inspired skin for DSH Web (deep blue-violet, glass panels, dark-first) |
| 255 | [JAKE1266/dsh-nailong-ui](https://github.com/JAKE1266/dsh-nailong-ui) | 0 | 2026-11-09 | 2026-11-09 | 奶龙主题 for DeepSeek Harness Web — 明黄蛋黄主色、奶白暖调表面、圆润几何与回弹动效。inspired-by 配色风格，不含任何形象素材。 |
| 256 | [JasonChenccc/dsh-relaydeck](https://github.com/JasonChenccc/dsh-relaydeck) | 0 | 2026-11-09 | 2026-11-09 | RelayDeck — DeepSeek Harness 的多平台内容中继插件（采集 / 监控 / 下载 / 发布准备 / 通知） |
| 257 | [JAYcodr/dsh-opencode](https://github.com/JAYcodr/dsh-opencode) | 0 | 2026-11-09 | 2026-11-09 | OpenCode status, Go-plan allowance and live probe meter for the DeepSeek Harness Web UI |
| 258 | [jiangzhenguo/dsh-safebox](https://github.com/jiangzhenguo/dsh-safebox) | 0 | 2026-11-09 | 2026-11-09 | DSH Safebox: local secret management with agent-safe references |
| 259 | [jiayaoting/dsh-archive-confirm](https://github.com/jiayaoting/dsh-archive-confirm) | 0 | 2026-11-09 | 2026-11-09 | 给 DSH Web 的「归档会话」加一道二次确认的客户端插件（AI 生成，可自由使用，再分发需注明来源） |
| 260 | [jiboda394-glitch/dsh-sidebar-actions](https://github.com/jiboda394-glitch/dsh-sidebar-actions) | 0 | 2026-11-09 | 2026-11-09 | Reload, restart, and quit DeepSeek Harness from the sidebar footer (DSH plugin) |
| 261 | [jieye666/dsh-phone-link](https://github.com/jieye666/dsh-phone-link) | 0 | 2026-11-09 | 2026-11-09 | 把飞书私聊接到指定的 DSH 会话：右侧栏「手机」tab 一个按钮直连，不经过模型。 |
| 262 | [JIUYUE-SEP/neural-mind](https://github.com/JIUYUE-SEP/neural-mind) | 0 | 2026-11-09 | 2026-11-09 | DSH 心智插件:长期记忆池 + SOUL 人格自我设定 + L1 用户画像(热缓冲 + 双速写入 + 证据驱动生命周期) |
| 263 | [jjjjjjjjnnjnn/dsh-remedy](https://github.com/jjjjjjjjnnjnn/dsh-remedy) | 0 | 2026-11-09 | 2026-11-09 | Resident repair layer for DeepSeek Harness that detects fused tool calls and splits glued JSON objects at top-level boundaries. |
| 264 | [jokerkenny00137/dsh-plugin-wallpaper-cleanup](https://github.com/jokerkenny00137/dsh-plugin-wallpaper-cleanup) | 0 | 2026-11-09 | 2026-11-09 | Wallpaper Engine workshop cleanup for DeepSeek Harness: compare a subscription screenshot with the workshop folder and move non-subscribed wallpapers to the Recycle Bin. Settings page + floating modal. |
| 265 | [jqlong17/dsh-plugin-guide](https://github.com/jqlong17/dsh-plugin-guide) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness (dsh) plugin development guide: concepts, host tools, client slots, build, testing, release. |
| 266 | [jszjdyt/singlecell-full-workflow](https://github.com/jszjdyt/singlecell-full-workflow) | 0 | 2026-11-09 | 2026-11-09 | 单细胞全流程工作台（DeepSeek Harness 插件）：GEO 全格式导入 + 样本分组编辑 + 可视化流程 + Seurat 6 官方降维 + 27 项原生分析 + 17 项官方 R/Python 工具桥 + Agent 双入口。 |
| 267 | [juliiiiiiiu/session-stickies-manage-your-attention](https://github.com/juliiiiiiiu/session-stickies-manage-your-attention) | 0 | 2026-11-09 | 2026-11-09 | Session Stickies - Manage Your Attention: keep session notes and follow-ups beside your agent tasks. |
| 268 | [kelaocai/dsh-token-spend](https://github.com/kelaocai/dsh-token-spend) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: live per-conversation token usage and CNY cost in the composer dock, priced with DeepSeek's official peak/off-peak rates. |
| 269 | [KeS1Ke/reminder-dsh](https://github.com/KeS1Ke/reminder-dsh) | 0 | 2026-08-27 | 2026-11-09 | Windows native notifications and taskbar badge for DeepSeek Harness · DSH 的 Windows 原生通知与任务栏角标 |
| 270 | [kousenlee/dsh-balance-monitor](https://github.com/kousenlee/dsh-balance-monitor) | 0 | 2026-11-09 | 2026-11-09 | Real-time DeepSeek account balance and low-balance alerts for the DeepSeek Harness Web GUI |
| 271 | [ksoulness/dsh-session-ecology](https://github.com/ksoulness/dsh-session-ecology) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness (DSH) session ecology steward, manual session organizer, zero-restart Recycle-Bin archived/orphan purge, PROJECT.md memory guard &amp; 4-tab Web Settings UI. |
| 272 | [kuangdang123/dsh-sticky-board](https://github.com/kuangdang123/dsh-sticky-board) | 0 | 2026-11-09 | 2026-11-09 | DSH Web 的便签板插件：对话里随手记、分类整理、跨会话复用，支持优先级、待办清单与评论 |
| 273 | [kyle2241345145351324321/dsh-tab-status-light](https://github.com/kyle2241345145351324321/dsh-tab-status-light) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: paints the AI session state onto the browser tab icon (blinking gray working, green done, yellow waiting, red interrupted). |
| 274 | [kyoukas/dsh-gm-toolkit](https://github.com/kyoukas/dsh-gm-toolkit) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件：单机游戏存档 / 程序集修改工具箱。常驻零 token，只在「存档修改」模式挂载 9 个工具 |
| 275 | [LanluZ/dsh-marisa-ui-plugin](https://github.com/LanluZ/dsh-marisa-ui-plugin) | 0 | 2026-11-09 | 2026-11-09 | Marisa UI (魔理沙UI) — zero-blur aurora-glass theme for the DeepSeek Harness web UI (static aurora canvas, glass panels, zero per-frame cost) |
| 276 | [lanyuxi/Multi-agent-development-dynamic-effect](https://github.com/lanyuxi/Multi-agent-development-dynamic-effect) | 0 | 2026-11-09 | 2026-11-09 | 多智能体开发前端动效 |
| 277 | [LaoChouPro/dsh-brand-free](https://github.com/LaoChouPro/dsh-brand-free) | 0 | 2026-11-09 | 2026-11-09 | Hide decorative DeepSeek product branding in the DeepSeek Harness Web &amp; Desktop UI while enabled; disabling immediately restores the original interface. |
| 278 | [laughinbytes/dsh-host-ops](https://github.com/laughinbytes/dsh-host-ops) | 0 | 2026-11-09 | 2026-11-09 | Host-side operations for DSH agents: workspaces, sessions, and governed configuration changes (tools only, no UI). Unofficial community plugin. |
| 279 | [LaynePeng/dsh-astock](https://github.com/LaynePeng/dsh-astock) | 0 | 2026-11-08 | 2026-11-09 | 让 DeepSeek Harness 真的懂你的账户：盯盘、记账、算股数、查舆情、跑回测——你在券商 App 下单，插件负责把每一笔算清楚。 |
| 280 | [lee-nihao2333/dsh-auto-update](https://github.com/lee-nihao2333/dsh-auto-update) | 0 | 2026-11-09 | 2026-11-09 | Update button for the DeepSeek Harness (dsh): checks npm for a newer dsh, installs it and restarts dsh. |
| 281 | [lee-nihao2333/dsh-cat-loop](https://github.com/lee-nihao2333/dsh-cat-loop) | 0 | 2026-11-09 | 2026-11-09 | cat-loop for the DeepSeek Harness (dsh): three independent Agent Teams (Plan, Build, Review) in one conversation, with enforced permission boundaries. |
| 282 | [leobasic/dsh-doc-panel](https://github.com/leobasic/dsh-doc-panel) | 0 | 2026-11-09 | 2026-11-09 | Conversation-scoped document browser for DeepSeek Harness: every document your conversations produce, grouped by conversation, searchable and previewable. |
| 283 | [leotier196/dsh-lifeboard](https://github.com/leotier196/dsh-lifeboard) | 0 | 2026-11-09 | 2026-11-09 | 人生看板 · 把 markdown 日志折成五张卡（健康/任务/资产/情绪/书架）。Local-only life dashboard for DeepSeek Harness. |
| 284 | [liamugong/dsh--web-fetch](https://github.com/liamugong/dsh--web-fetch) | 0 | 2026-11-09 | 2026-11-09 | 可拖动排序的 DSH 网页抓取聚合插件：直连 / Jina / Firecrawl / fastCRW / Exa / 无头浏览器 / Lightpanda。Drag-orderable web-fetch provider for DeepSeek Harness. |
| 285 | [liangdabiao/dsh-bookwriter](https://github.com/liangdabiao/dsh-bookwriter) | 0 | 2026-11-07 | 2026-11-09 | dsh-bookwriter · 双风格长文写作  刘润风格（商业洞察/方法论/案例拆解）+ 罗振宇风格（认知/启发/演讲）两个长文写作技能，外加一个「书稿工作台」： 先立章节骨架，再逐章写正文，每章的进度与改动都有记录。MIT（liangdabiao）。 |
| 286 | [liangdabiao/dsh-sorftime-research](https://github.com/liangdabiao/dsh-sorftime-research) | 0 | 2026-11-07 | 2026-11-09 | dsh-sorftime-research · Amazon 选品研究  9 套 Amazon 选品分析方法技能（Sorftime / 卖家精灵 / Sif / 西柚）+ 一本「研究记录」： 每次分析完把结论、用过的方法、报告路径存下来，下次直接翻。侧栏是「选品研究」工作台（布局对齐「投资尽调」）。 |
| 287 | [like8995209-coder/dsh-tide-hint](https://github.com/like8995209-coder/dsh-tide-hint) | 0 | 2026-11-09 | 2026-11-09 | DSH 侧边栏北京时间峰谷提示：法定节假日、调休、倒计时与官方优惠状态 |
| 288 | [lindingkao/dsh-image-import](https://github.com/lindingkao/dsh-image-import) | 0 | 2026-11-09 | 2026-11-09 | 增加DSH图片格式类型 |
| 289 | [LinYanZhi/dsh-mesh](https://github.com/LinYanZhi/dsh-mesh) | 0 | 2026-11-09 | 2026-11-09 | Multi-node AI network for DeepSeek Harness: PC + phone mesh, cross-device delegation, and direct desktop control. |
| 290 | [linyu19872008/dsh-dr-panda-mcp](https://github.com/linyu19872008/dsh-dr-panda-mcp) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness carrier plugin that bridges a running DrPanda MCP service over Streamable HTTP (mcp__drpanda__*). |
| 291 | [liuhange789/dsh-session-recovery](https://github.com/liuhange789/dsh-session-recovery) | 0 | 2026-11-09 | 2026-11-09 | DSH session recovery plugin: lightweight checkpoints and resume summary injection |
| 292 | [liuzx012/dsh-speakhumantalk](https://github.com/liuzx012/dsh-speakhumantalk) | 0 | 2026-11-09 | 2026-11-09 | 删掉 AI 腔与套话，每会话自动生效的 DSH 插件。 |
| 293 | [lixian292/dsh-plugcraft](https://github.com/lixian292/dsh-plugcraft) | 0 | 2026-11-09 | 2026-11-09 | Plugcraft (dsh-plugcraft): reuse-first plugin authoring workbench for DeepSeek Harness (DSH). Search reusable plugins, decide, decompose gaps, verify, then build. |
| 294 | [lixian292/easy-qqbot](https://github.com/lixian292/easy-qqbot) | 0 | 2026-11-09 | 2026-11-09 | 简洁易用的 DeepSeek Harness QQ 机器人插件 |
| 295 | [lizhuoyuan41-droid/dsh-session-tree-extension](https://github.com/lizhuoyuan41-droid/dsh-session-tree-extension) | 0 | 2026-11-09 | 2026-11-09 | Append-only, multi-branch conversation trees for DeepSeek Harness — fork any historical prompt, clone sessions, focus a subtree, and browse the whole lineage as one live graph. /tree, /fork, /clone. |
| 296 | [lizongze/dsh-plugin-turn-index](https://github.com/lizongze/dsh-plugin-turn-index) | 0 | 2026-11-09 | 2026-11-09 | 给 DSH 会话右侧的轮次导航加一个可搜索的提问索引：展开全部提问、模糊搜索、高亮命中并点击跳转；只增强内置索引，不替换原导航。 |
| 297 | [lizzkkafei/my-projects](https://github.com/lizzkkafei/my-projects) | 0 | 2026-05-08 | 2026-11-09 | DSH plugins and projects |
| 298 | [lkuliuying/dsh-mutipleagent](https://github.com/lkuliuying/dsh-mutipleagent) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 多 Agent 3D 协作办公室插件：在 3D 场景中观察真实主会话、子 Agent、工具活动与汇报 |
| 299 | [Llldmiao/dsh-brave-search](https://github.com/Llldmiao/dsh-brave-search) | 0 | 2026-11-09 | 2026-11-09 | Brave Search tools for DeepSeek Harness (dsh): web/news/image/video search, LLM-ready page context, AI answers, local places, suggestions and spellcheck — plus a brave web-search provider for the harness web seam. |
| 300 | [LMhuo/dsh-snap-line](https://github.com/LMhuo/dsh-snap-line) | 0 | 2026-11-06 | 2026-11-09 | A clothesline of polaroid photos hanging under the DeepSeek Harness message composer. |
| 301 | [lmlmlml717/dsh-dafeiyu-biliWorld](https://github.com/lmlmlml717/dsh-dafeiyu-biliWorld) | 0 | 2026-11-08 | 2026-11-09 | 给DeepSeek Harness 的一个「世界 + B 站自动化」自定义酒馆角色 加了评论发布、动态发布、视频转发 当前版本 0.8.10 · 基于 dsh-world，融合 dsh-feiyu 的评论链路与 dsh-bili-whale 的 B 站工具链/调度设计。对不起是AI大人写得 |
| 302 | [locqueliu/lianben-workbench](https://github.com/locqueliu/lianben-workbench) | 0 | 2026-11-09 | 2026-11-09 | DSH 炼本工作台：1.0/2.0 双模式剧本前置、炼本与配乐插件 |
| 303 | [lolkekjopgargon/dsh-work-space](https://github.com/lolkekjopgargon/dsh-work-space) | 0 | 2026-11-09 | 2026-11-09 | Work Space для DeepSeek Harness: доска задач, история коммитов с откатом и Devlog — посты о прогрессе в Telegram и Discord с картинками, разметкой и переводом. |
| 304 | [LordGrimTaken/Xians-DeepSeek-Plugins](https://github.com/LordGrimTaken/Xians-DeepSeek-Plugins) | 0 | 2026-11-09 | 2026-11-09 | Xian's DeepSeek Plugins — a curated, green-icon pack of 15 DeepSeek Harness plugins, installed off by default. |
| 305 | [loyalchiiina/dsh-loyalchiiina-plugin-pack](https://github.com/loyalchiiina/dsh-loyalchiiina-plugin-pack) | 0 | 2026-11-08 | 2026-11-09 | DSH aggregate bundle: install 14 standalone DeepSeek Harness plugins in one go (adapts DSH kernel 0.2.2-rc.1) |
| 306 | [lucaixia1982/dsh-token-saver](https://github.com/lucaixia1982/dsh-token-saver) | 0 | 2026-11-09 | 2026-11-09 | DSH 省钱插件: 指令进模型前无损瘦身, 左侧栏显示本次/累计省下的 token、金额与提示词缓存命中率. Token-saving sidebar badge for DeepSeek Harness. |
| 307 | [luk-Henry/dsh-game-adventure](https://github.com/luk-Henry/dsh-game-adventure) | 0 | 2026-11-08 | 2026-11-09 | 门后冒险，一个基于dsh的文字挂机陪伴插件。 |
| 308 | [lunasi27/dsh-daily-todo](https://github.com/lunasi27/dsh-daily-todo) | 0 | 2026-11-09 | 2026-11-09 | dsh-plugin · 每日待办 for DeepSeek Harness：每天一份清单，工作/生活两段，打钩划掉，零点自动归档。Daily todo board with Work/Life sections and midnight archive. |
| 309 | [Lutra23/dsh-forge-context](https://github.com/Lutra23/dsh-forge-context) | 0 | 2026-10-21 | 2026-11-09 | Agent-authored context compaction for the DSH forge preset: the agent writes the summary, this plugin checks version/scope/protection, then commits through the official compaction path. |
| 310 | [luyang950/dsh-desk-listen](https://github.com/luyang950/dsh-desk-listen) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：在会话里隐藏式听工位股市的一起听、点歌、聊天（老板键、零 token） |
| 311 | [LXD-8/dsh-macos-widget](https://github.com/LXD-8/dsh-macos-widget) | 0 | 2026-11-09 | 2026-11-09 | macOS desktop widgets for DeepSeek Harness: an infrastructure plugin; other plugins ship their own widget style. |
| 312 | [M4XC117/dsh-work-chat-switch](https://github.com/M4XC117/dsh-work-chat-switch) | 0 | 2026-11-09 | 2026-11-09 | 侧边栏「聊天｜工作」切换 + 内嵌官方网页聊天 for DeepSeek Harness |
| 313 | [machi12/dsh-gundam-graphite-theme](https://github.com/machi12/dsh-gundam-graphite-theme) | 0 | 2026-11-09 | 2026-11-09 | 高达·石墨 / Gundam Graphite：DSH 黑灰机甲壁纸主题，含石墨玻璃面板、流体粒子与鼠标弹性网络。 |
| 314 | [machine202502/dsh-pricing](https://github.com/machine202502/dsh-pricing) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek peak hours, live token prices, per-session spend and a spending analytics page for DeepSeek Harness. |
| 315 | [majia007/dsh-session-context-config](https://github.com/majia007/dsh-session-context-config) | 0 | 2026-11-06 | 2026-11-09 | Context profiles for DSH (deepseek-harness): pick which tools and which system prompt each new conversation receives. |
| 316 | [malabananclauss-rgb/qing-self](https://github.com/malabananclauss-rgb/qing-self) | 0 | 2026-11-08 | 2026-11-09 | 给你的 DSH agent 一个能跨模型延续的自我：分层记忆、判断卡、交接包、压缩审查。零依赖、纯文件、可迁移。 |
| 317 | [MC0571/Shuttle](https://github.com/MC0571/Shuttle) | 0 | 2026-11-06 | 2026-11-09 | 文件穿梭机 Shuttle：DSH 插件，手机扫二维码通过局域网把照片、视频和文件直接传到电脑，无需安装 App、无需数据线、不经过云端。支持 iPhone/Android、微信内使用与 macOS/Windows，内置接收记录、文件浏览和搜索。 |
| 318 | [Meatware-Engineering/DSH-AnnotateAnything](https://github.com/Meatware-Engineering/DSH-AnnotateAnything) | 0 | 2026-11-08 | 2026-11-09 | Annotate interface elements and send screenshots to conversations in DeepSeek Harness. |
| 319 | [melody12311/dsh-workspace-folders](https://github.com/melody12311/dsh-workspace-folders) | 0 | 2026-11-09 | 2026-11-09 | 多文件夹工作区 / Multi-folder workspace roots for DeepSeekRuntime: extra folders become real workspace roots. The session lists them, a workspace_roots tool scans each root, and file tools read/write/patch/move inside them with no approval prompt. |
| 320 | [Mengnan578/dsh-typora-links](https://github.com/Mengnan578/dsh-typora-links) | 0 | 2026-11-09 | 2026-11-09 | Open Markdown file links from the DSH conversation in Typora instead of the in-app preview. |
| 321 | [mercurynomercy/dsh-chat-mode](https://github.com/mercurynomercy/dsh-chat-mode) | 0 | 2026-11-07 | 2026-11-09 | DSH chat mode: a sidebar Chat entry for project-free chats using DSH's own sign-in and models. 侧栏聊天模式插件。 |
| 322 | [mercurynomercy/dsh-custom-search-fetch](https://github.com/mercurynomercy/dsh-custom-search-fetch) | 0 | 2026-11-07 | 2026-11-09 | you can overwrite DeepSeek harness own web_search and web_fetch with your own settings |
| 323 | [Meta-Virgo/dsh-profile-gist-sync](https://github.com/Meta-Virgo/dsh-profile-gist-sync) | 0 | 2026-11-09 | 2026-11-09 | Back up a DeepSeek Harness profile's configuration to an unlisted secret GitHub Gist and sync it back: a settings page plus a config_backup agent tool. |
| 324 | [metallica360qq-web/dsh-work-memory](https://github.com/metallica360qq-web/dsh-work-memory) | 0 | 2026-11-09 | 2026-11-09 | Conversation-level work index for DeepSeek Harness: remembers what you asked and produced, and replays the original spans that context compaction discarded. |
| 325 | [miaojinQWQ/dsh-docmate](https://github.com/miaojinQWQ/dsh-docmate) | 0 | 2026-11-09 | 2026-11-09 | DocMate 伴读 — an immersive reading desk for DeepSeek Harness: md/docx/pdf in the centre, a companion AI on the right that has already read the whole document. |
| 326 | [mm24trg2gy-star/dsh-proxy-embedded](https://github.com/mm24trg2gy-star/dsh-proxy-embedded) | 0 | 2026-11-05 | 2026-11-09 | DSH plugin with an embedded mihomo core: paste a subscription link, the plugin starts the proxy and routes DSH outbound traffic through it. |
| 327 | [modusensus/dsh-artifacts](https://github.com/modusensus/dsh-artifacts) | 0 | 2026-11-09 | 2026-11-09 | DSH「产物」— 全局产物收藏夹插件（DeepSeek Harness 左侧边栏）：自动收集会话交付的图片/文件，手动收藏链接、粘贴图片、上传文件，save_artifact 工具 |
| 328 | [moonrzz/dsh-codex-lens](https://github.com/moonrzz/dsh-codex-lens) | 0 | 2026-11-09 | 2026-11-09 | A DeepSeek Harness plugin that turns DSH into a sidecar for Codex threads: browse ~/.codex, bind a thread, read its history, live activity, stats and workspace files. |
| 329 | [Morethaninformation/dsh-downloader](https://github.com/Morethaninformation/dsh-downloader) | 0 | 2026-11-09 | 2026-11-09 | 支持断点续传的多连接下载器 |
| 330 | [Mzys521/dsh-slothy-model-picker](https://github.com/Mzys521/dsh-slothy-model-picker) | 0 | 2026-11-09 | 2026-11-09 | Slothy-style model picker for the DeepSeek Harness Web GUI: provider-grouped model list + reasoning-effort slider. |
| 331 | [nacivageer/dsh-price-period](https://github.com/nacivageer/dsh-price-period) | 0 | 2026-11-09 | 2026-11-09 | A DeepSeek Harness header chip: shows whether the DeepSeek API is in peak or half-price billing, with a countdown when the period flips. Zero deps, no network, no build step. |
| 332 | [nacivageer/dsh-see-now-more](https://github.com/nacivageer/dsh-see-now-more) | 0 | 2026-11-09 | 2026-11-09 | Chat with DSH like an IM call while it watches your screen: token-efficient sampling, a floating chat window, mid-turn messages, and a listen-only mode. Working toward the plugin deciding for itself when to look and when to listen - not there yet. Windows 10 + DSH 0.2.2-rc.1 only; mic input untested. |
| 333 | [nacivageer/dsh-skill-history](https://github.com/nacivageer/dsh-skill-history) | 0 | 2026-11-09 | 2026-11-09 | Skill usage history for DeepSeek Harness — daily counts rebuilt from your own local session logs, drill-down to the sessions that used them, and groups to watch. |
| 334 | [nacivageer/framedelta](https://github.com/nacivageer/framedelta) | 0 | 2026-11-09 | 2026-11-09 | Measure what changes in a short clip — jumps, swaps, drifts, fades — with one labelled image. Not a cut detector. |
| 335 | [nanchen8888/dsh-memory-panel](https://github.com/nanchen8888/dsh-memory-panel) | 0 | 2026-11-09 | 2026-11-09 | DSH 左侧栏记忆插件：markdown 记忆库、自动分类、宇宙星图与全文检索。 |
| 336 | [nanchen8888/dsh-pet-lan](https://github.com/nanchen8888/dsh-pet-lan) | 0 | 2026-11-09 | 2026-11-09 | DSH 启动器插件：拉起桌面宠物 Electron 小窗。 |
| 337 | [nanchen8888/dsh-voice-inject](https://github.com/nanchen8888/dsh-voice-inject) | 0 | 2026-11-09 | 2026-11-09 | 把外部语音识别结果注入 DSH 会话的本地插件（127.0.0.1:8790），不抢焦点。 |
| 338 | [nangongwentian-fe/dsh-quadrant-todos](https://github.com/nangongwentian-fe/dsh-quadrant-todos) | 0 | 2026-11-09 | 2026-11-09 | Four-quadrant (Eisenhower) todo list plugin for the DeepSeek Harness Web UI. |
| 339 | [neillee235/dsh-simplify-panel](https://github.com/neillee235/dsh-simplify-panel) | 0 | 2026-11-09 | 2026-11-09 | DSH 简化面板：把 DeepSeek Harness 左侧栏过多的面板收进一个可展开、可配置的分组 |
| 340 | [nekorc/dsh-auto-review-zh](https://github.com/nekorc/dsh-auto-review-zh) | 0 | 2026-11-05 | 2026-11-09 | DSH Auto review 中文 wait-what 解释插件：把拒绝理由改成背景→原因→选择，不改风险判定。 |
| 341 | [NeoJubao/dsh-fde](https://github.com/NeoJubao/dsh-fde) | 0 | 2026-11-08 | 2026-11-09 | FDE Workstation — customer lifecycle, kanban, 8 stage gates and a method library as a DeepSeek Harness (DSH) plugin. 中文界面 / 零运行时依赖。 |
| 342 | [NESRINEJOUINI08/magpie-our-free-model](https://github.com/NESRINEJOUINI08/magpie-our-free-model) | 0 | 2026-11-09 | 2026-11-09 | Integrate Our Free Model into Magpie with automatic service management, unified anonymous/Kilo, EAC and account channels, plus a browser console. |
| 343 | [new2023start/dsh-pomodoro-clock](https://github.com/new2023start/dsh-pomodoro-clock) | 0 | 2026-11-08 | 2026-11-09 | A pomodoro timer for the DeepSeek Harness right sidebar: draggable edge handle, one-shot or cycle counting, and selectable WebAudio cues including an airport-style announcement. |
| 344 | [nexscope-ai/dsh-nexscope-plugin](https://github.com/nexscope-ai/dsh-nexscope-plugin) | 0 | 2026-10-19 | 2026-11-09 | Nexscope plugin for DeepSeek Harness (DSH): research products, keywords, markets, competitors, reviews, and ads across Amazon, TikTok, Temu, Shopee, and more via MCP. |
| 345 | [NyxJae/dsh-skill-gated-tools](https://github.com/NyxJae/dsh-skill-gated-tools) | 0 | 2026-11-09 | 2026-11-09 | Skill-gated tool discovery for DeepSeek Harness. Load skills to reveal tools on demand. |
| 346 | [oceanke100/dsh-godot-mcp-status](https://github.com/oceanke100/dsh-godot-mcp-status) | 0 | 2026-11-09 | 2026-11-09 | 给DeepSeek Harness使用的Godot MCP连接状态显示插件。Godot MCP status badge for the DeepSeek Harness. |
| 347 | [odysseykernelt/dsh-dashcam](https://github.com/odysseykernelt/dsh-dashcam) | 0 | 2026-10-31 | 2026-11-09 | Plugin dashcam for DSH: capability manifests, runtime guards, and a tamper-evident audit ledger. |
| 348 | [Ok541151/dsh-session-media](https://github.com/Ok541151/dsh-session-media) | 0 | 2026-11-09 | 2026-11-09 | Session-archive layer for DeepSeek Harness: memory injection, cross-session search, attachment recovery. |
| 349 | [oliverCJ/dsh-notice-hooks](https://github.com/oliverCJ/dsh-notice-hooks) | 0 | 2026-11-06 | 2026-11-09 | Lifecycle command Hooks for DeepSeek Harness with user/project scopes and explicit authorization. |
| 350 | [OrdinaryTu/dsh-emotion-engine](https://github.com/OrdinaryTu/dsh-emotion-engine) | 0 | 2026-11-09 | 2026-11-09 | A physiology-like mood engine for DeepSeek Harness: seven hormones, circadian baseline, live mood context and a composer panel. |
| 351 | [Oreo2408/dsh-workspace-plugin-manager](https://github.com/Oreo2408/dsh-workspace-plugin-manager) | 0 | 2026-11-09 | 2026-11-09 | Per-workspace plugin sets for DeepSeek Harness: floating plugin table with folders, a not-added pool, cut/copy/paste, switch prompts and restart notices. |
| 352 | [osman3n/dsh-safe](https://github.com/osman3n/dsh-safe) | 0 | 2026-11-09 | 2026-11-09 | Recover a broken DeepSeek Harness profile: test-boot a copy, disable selected plugins, snapshots, and a local recovery UI. |
| 353 | [osman3n/dsh-session-share](https://github.com/osman3n/dsh-session-share) | 0 | 2026-11-09 | 2026-11-09 | Share a whole DSH session as a self-contained HTML transcript |
| 354 | [osman3n/dsh-spell-suggestions](https://github.com/osman3n/dsh-spell-suggestions) | 0 | 2026-11-09 | 2026-11-09 | Right-click spelling suggestions in the DeepSeek Harness composer: ranked corrections, add to dictionary, and the standard edit actions. |
| 355 | [ostar999/ostar-dsh-nosocomial-infection-workbench-op](https://github.com/ostar999/ostar-dsh-nosocomial-infection-workbench-op) | 0 | 2026-11-08 | 2026-11-09 | dsh-插件｜一个专业的医院感染病例分析工作台 |
| 356 | [ostar999/ostar-nosocomial-infection-workbench-webui-op](https://github.com/ostar999/ostar-nosocomial-infection-workbench-webui-op) | 0 | 2026-11-08 | 2026-11-09 | 一个专业的医院感染病例分析工作台 ｜ 支持WebUi / Docker部署 |
| 357 | [pandaman0759/dsh-msg-queue](https://github.com/pandaman0759/dsh-msg-queue) | 0 | 2026-11-09 | 2026-11-09 | Sidebar message queue for DeepSeek Harness: park quick thoughts and send them to the current session later |
| 358 | [PerryLink/dsh-locator](https://github.com/PerryLink/dsh-locator) | 0 | 2026-11-09 | 2026-11-09 | Whole-disk, millisecond file search for DeepSeek Harness without Everything: self-built cross-platform index, agent tools and a Web search panel. |
| 359 | [PhoenixQian/dsh-codex-bridge](https://github.com/PhoenixQian/dsh-codex-bridge) | 0 | 2026-11-09 | 2026-11-09 | 同舟 Tongzhou — local Codex × DeepSeek Harness collaboration with shared, readable discussions. |
| 360 | [pingfanfan/dsh-astryx-studio](https://github.com/pingfanfan/dsh-astryx-studio) | 0 | 2026-11-08 | 2026-11-09 | DeepSeek Harness plugin: build pages with Meta's Astryx design system |
| 361 | [PowehiG/dsh-arch-lab](https://github.com/PowehiG/dsh-arch-lab) | 0 | 2026-11-09 | 2026-11-09 | Arch Lab: per-layer 3D architecture microscope for frontier LLM papers, as a DeepSeek Harness plugin. |
| 362 | [Q-hao516/dsh-qqmail](https://github.com/Q-hao516/dsh-qqmail) | 0 | 2026-11-09 | 2026-11-09 | Read-only QQ Mail (IMAP) tools and a settings page for DeepSeek Harness |
| 363 | [QiNFPV/dsh-voice-dialog](https://github.com/QiNFPV/dsh-voice-dialog) | 0 | 2026-11-09 | 2026-11-09 | DSH 连续语音对话：自动断句、发送前 2 秒确认窗口、回复朗读且开口即打断。Continuous voice conversation for DSH: auto sentence splitting, 2-second confirm window, spoken replies you can interrupt. |
| 364 | [qsheeeeen/dsh-stigmergy](https://github.com/qsheeeeen/dsh-stigmergy) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: agents in a delegation tree coordinate by leaving traces in a shared, evaporating field instead of messaging each other. |
| 365 | [quirekit/dsh-quirekit-md-editor](https://github.com/quirekit/dsh-quirekit-md-editor) | 0 | 2026-11-08 | 2026-11-09 | Edit Markdown where the agent writes it, and hand your comments back to the agent. |
| 366 | [rainfish-home/dsh-mobi-web](https://github.com/rainfish-home/dsh-mobi-web) | 0 | 2026-11-08 | 2026-11-09 | Phone-first web client for DeepSeek Harness: a compact mobile page with phone-owned approvals and Mermaid, served by an in-process gateway. |
| 367 | [rayadesune/dsh-window](https://github.com/rayadesune/dsh-window) | 0 | 2026-10-26 | 2026-11-09 | Session-scoped context window switcher for the DeepSeek Harness model picker — 在模型弹窗内按会话临时切换上下文窗口，新会话自动恢复默认（dsh-context-window-picker 的延续维护版） |
| 368 | [redkiller79/dsh-disk-space](https://github.com/redkiller79/dsh-disk-space) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: read-only disk usage scan and interactive cleanup report for Windows/macOS |
| 369 | [RedoMiao/dsh-session-recap](https://github.com/RedoMiao/dsh-session-recap) | 0 | 2026-11-09 | 2026-11-09 | 用你写的模板，把 DSH 对话整理成表格、清单或周报，并保存成 Obsidian 笔记。 |
| 370 | [ricaido0422/dsh-plugin-guides](https://github.com/ricaido0422/dsh-plugin-guides) | 0 | 2026-11-09 | 2026-11-09 | DSH 插件中文使用手册：按使用特性分类的上手说明与实战教程 |
| 371 | [rixodx/dsh-plugin-codex-control](https://github.com/rixodx/dsh-plugin-codex-control) | 0 | 2026-11-09 | 2026-11-09 | Harness Control 本机桥接：从 CLI/Codex 操作 DeepSeek Harness GUI 会话、查看进度与取消任务。 |
| 372 | [Roambus/dsh-display-manager](https://github.com/Roambus/dsh-display-manager) | 0 | 2026-11-09 | 2026-11-09 | Sidebar fold and display management: collapse the sidebar panel list, and choose which plugin entries appear in the sidebar, the conversation header/footer, tabs and Settings. Display only — it never enables or disables a plugin. |
| 373 | [RoketrP/dsh-bot-workbench](https://github.com/RoketrP/dsh-bot-workbench) | 0 | 2026-11-09 | 2026-11-09 | Native DeepSeek Harness Bots with task acceptance, explicit handoffs and interrupted-run reconciliation. |
| 374 | [Ruacha00/dsh-popnotify](https://github.com/Ruacha00/dsh-popnotify) | 0 | 2026-11-09 | 2026-11-09 | Session-completion reminders for DeepSeek Harness: sidebar bell, system notification, in-app toast and chime. |
| 375 | [Sanshui258/dsh-hwp-translate](https://github.com/Sanshui258/dsh-hwp-translate) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: translate HWP/HWPX (??) documents to Chinese with layout preserved, via Yeobaek HWP Translator |
| 376 | [sczHiccup/dsh-session-deleter](https://github.com/sczHiccup/dsh-session-deleter) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: delete a session permanently after a risk confirmation |
| 377 | [sdf123098/dsh-plugin-penpot](https://github.com/sdf123098/dsh-plugin-penpot) | 0 | 2026-11-09 | 2026-11-09 | 把 Penpot 接进 DSH：三种连接目标 + REST 读写通道（不用浏览器也能改设计稿） |
| 378 | [sedai194443/dsh-groupchat](https://github.com/sedai194443/dsh-groupchat) | 0 | 2026-01-09 | 2026-11-09 | Enable multi-model, multi-role group chats in DeepSeek Harness with shared memory, @mentions, and per-conversation agents. |
| 379 | [sezhiyanhua/dsh-shortcut-editor](https://github.com/sezhiyanhua/dsh-shortcut-editor) | 0 | 2026-11-09 | 2026-11-09 | Keyboard shortcuts editor for DeepSeek Harness: compare each shortcut with its default, rebind it, restore defaults. |
| 380 | [sftc-mcp/sftc-open-cli](https://github.com/sftc-mcp/sftc-open-cli) | 0 | 2026-11-05 | 2026-11-09 | 顺丰同城开放平台CLI工具 |
| 381 | [sgeerwang-hub/dsh-workspace-lock](https://github.com/sgeerwang-hub/dsh-workspace-lock) | 0 | 2026-11-09 | 2026-11-09 | 给 DSH 工作区文件夹加界面密码锁：锁定后侧栏收起、里面的会话全部隐藏，支持 QQ 邮箱找回密码。 |
| 382 | [shengsheng778/dsh-ark-lore](https://github.com/shengsheng778/dsh-ark-lore) | 0 | 2026-11-09 | 2026-11-09 | Arknights lore memory for DeepSeek Harness: faction files, alias routing, in-world timeline, full story archive, PRTS live lookup and dynamic updates. |
| 383 | [shinerain1/dsh-ml-workbench](https://github.com/shinerain1/dsh-ml-workbench) | 0 | 2026-11-09 | 2026-11-09 | DSH adapter for MLflow, Optuna and scikit-learn: track, tune, branch, compare, predict and reproduce local CSV experiments |
| 384 | [Shiningstar521/dsh-chat-mode](https://github.com/Shiningstar521/dsh-chat-mode) | 0 | 2026-11-09 | 2026-11-09 | Chat / work mode switch: new conversations start in chat mode with no tools, work mode keeps the conversation's workspace |
| 385 | [sibetlyf/dsh-work-desk](https://github.com/sibetlyf/dsh-work-desk) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: a work desk for calendar, email and markets |
| 386 | [SilasSolivagus/dsh-repotruth](https://github.com/SilasSolivagus/dsh-repotruth) | 0 | 2026-11-09 | 2026-11-09 | 把代码仓库变成产品经理能读的系统现状：每句话都能追溯到代码，读不到就说读不到。\| Turn code repositories into system status a PM can read — every sentence traceable to code. |
| 387 | [SilverIodide42/dsh-session-manager](https://github.com/SilverIodide42/dsh-session-manager) | 0 | 2026-11-09 | 2026-11-09 | DSH (DeepSeek Harness) session manager plugin: three-store consistency check, backup-first cleanup, archive management and workspace health check in a Web GUI panel |
| 388 | [silversystem04-coder/dsh-project-hud](https://github.com/silversystem04-coder/dsh-project-hud) | 0 | 2026-11-08 | 2026-11-09 | DSH 插件：窗口顶边一排标签角。线卡（进度/截止/下一步）+ 实时会话卡（第几回合第几步/上下文占用）+ 手写卡，可固定、收纳、改名、编辑。Top-edge project &amp; live-session tabs for DeepSeek Harness. |
| 389 | [SivanCola/dsh-note](https://github.com/SivanCola/dsh-note) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 笔记插件：本地 Markdown 三栏笔记库、双栏实时预览、会话沉淀与 Agent 读写工具 |
| 390 | [skystart233-code/dsh-plugin-market](https://github.com/skystart233-code/dsh-plugin-market) | 0 | 2026-11-09 | 2026-11-09 | A sidebar plugin market for DeepSeek Harness: browse 7,557 DSH plugins and install, update, enable, or remove them in one click. |
| 391 | [soffits/dsh-desktop-view](https://github.com/soffits/dsh-desktop-view) | 0 | 2026-11-08 | 2026-11-09 | Live view of the agent's desktop in the DeepSeek Harness Web UI, relayed from cua-spacesd behind DSH's login, with take control and give back. |
| 392 | [SoulZhou/dsh-context-windows](https://github.com/SoulZhou/dsh-context-windows) | 0 | 2026-11-09 | 2026-11-09 | Visual per-model context-window adjustment for WorkBuddy and Trae connectors in DeepSeek Harness |
| 393 | [springfieldpsk/dsh-lan-models](https://github.com/springfieldpsk/dsh-lan-models) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness (dsh) plugin: discover LAN model services (ComfyUI/oMLX/Ollama/vLLM), query status, drive ComfyUI image/video generation, and route chat to local LLMs. 局域网本地模型联动 |
| 394 | [ssalentin/dsh-kanban-board](https://github.com/ssalentin/dsh-kanban-board) | 0 | 2026-11-09 | 2026-11-09 | Kanban board plugin for DeepSeek Harness (DSH): Web GUI task board edited by you and your agents, with subtasks, colored tags and an inline board chat. |
| 395 | [stallenlu/dsh-docx2md](https://github.com/stallenlu/dsh-docx2md) | 0 | 2026-10-25 | 2026-11-09 | 把含公式的 Word 文档转成带 LaTeX 的 Markdown —— OLE、Word 原生 OMML、图片公式三种载体都处理，跨平台，保留公式编号与结构。 |
| 396 | [StarDreamG/dsh-contextgraph](https://github.com/StarDreamG/dsh-contextgraph) | 0 | 2026-11-09 | 2026-11-09 | ContextGraph project memory for DeepSeek Harness: recall before work, handoff after work, freshness that does not cry wolf. |
| 397 | [starrys147/dsh-prompt-edit](https://github.com/starrys147/dsh-prompt-edit) | 0 | 2026-11-09 | 2026-11-09 | A prompt editor in the sidebar, for long prompt editing. |
| 398 | [starskyzheng/dsh-fixed-launch-token](https://github.com/starskyzheng/dsh-fixed-launch-token) | 0 | 2026-11-09 | 2026-11-09 | Pin the dsh web launch token (?token=...) to a fixed configured value instead of a per-process random one. Default inert. |
| 399 | [startime-ltk/dsh-explorers](https://github.com/startime-ltk/dsh-explorers) | 0 | 2026-11-08 | 2026-11-09 | 让 DSH 控制你的浏览器（Chrome / Edge / QQ 浏览器）：MV3 扩展 + 本机回环桥 + 12 个 browser_* 工具。按浏览器分好安装包，装一个就能用。 |
| 400 | [startime-ltk/dsh-mimavault](https://github.com/startime-ltk/dsh-mimavault) | 0 | 2026-11-08 | 2026-11-09 | MimaVault bridge for DeepSeek Harness: search passwords / API keys / TOTP without leaking plaintext into the model context. |
| 401 | [stevenjj33/dsh-lark-cli-skills](https://github.com/stevenjj33/dsh-lark-cli-skills) | 0 | 2026-11-09 | 2026-11-09 | Agent skills for the Lark/Feishu CLI (lark-cli), packaged as a DeepSeek Harness plugin bundle. Excludes lark-im to complement an IM bridge plugin. |
| 402 | [strikesuitzero/dsh-cache-cleaner](https://github.com/strikesuitzero/dsh-cache-cleaner) | 0 | 2026-11-09 | 2026-11-09 | Moves the DSH temp cache to a configurable directory and cleans it with an allowlist; manages archived sessions and workspace temp folders. Bilingual (EN/ZH). MIT. |
| 403 | [stzyk/dsh-mindmap](https://github.com/stzyk/dsh-mindmap) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 插件：思维导图（多主题 / 连线即层级 / 节点配图 / Markdown 双向编辑 / 41 项门禁 + 271 项单测 + 240 项浏览器冒烟） |
| 404 | [subeichen1/dsh-auto-effort](https://github.com/subeichen1/dsh-auto-effort) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: per-turn thinking-effort routing that keeps the current model, including Magpie and other third-party providers |
| 405 | [subeichen1/dsh-feishu-digest](https://github.com/subeichen1/dsh-feishu-digest) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: digest every finished turn into a Feishu (Lark) group message |
| 406 | [suifei/dsh-ai-team](https://github.com/suifei/dsh-ai-team) | 0 | 2026-11-09 | 2026-11-09 | 文渊阁 — 把工作交给一支 AI 团队：有 owner 的 Task、独立验收、append-only 账本，与 DSH 原生模型目录联动。 |
| 407 | [Sumcam-L/dsh-big-coming](https://github.com/Sumcam-L/dsh-big-coming) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: probes the official model system fingerprint on a timer with a minimal request, and pops a random meme when it changes. |
| 408 | [Summer77177/dsh-douyin-agent](https://github.com/Summer77177/dsh-douyin-agent) | 0 | 2026-11-09 | 2026-11-09 | 抖音自动刷视频 + 评论回复 + 语音转写的 DSH 插件二次开发分支 |
| 409 | [summerscar/dsh-plugins](https://github.com/summerscar/dsh-plugins) | 0 | 2026-11-08 | 2026-11-09 | A pnpm monorepo of DeepSeek Harness (DSH) plugins by summerscar. |
| 410 | [SunRayan/dsh-skin-nier-automata](https://github.com/SunRayan/dsh-skin-nier-automata) | 0 | 2026-11-09 | 2026-11-09 | A NieR-inspired theme for DeepSeek Harness with a graphite palette, ice-white type and a pure-CSS ruined skyline. Ships no artwork; both wallpaper slots take images you upload. |
| 411 | [swc0506/FairyUI](https://github.com/swc0506/FairyUI) | 0 | 2026-11-09 | 2026-11-09 | FairyGUI UI builder plugin for DeepSeek Harness: build components from layout specs, preview controller pages, generate/verify C# view classes, overlay layout boxes on mockups. |
| 412 | [szhuangzan/rofilter-mcp](https://github.com/szhuangzan/rofilter-mcp) | 0 | 2026-10-28 | 2026-11-09 | MCP server for reverse osmosis membrane system design - feed pressure, permeate TDS, energy, flux (rofilter.cn) |
| 413 | [TerebiSAMA/dsh-openviking-settings](https://github.com/TerebiSAMA/dsh-openviking-settings) | 0 | 2026-11-09 | 2026-11-09 | OpenViking 状态页插件：在 DSH【设置】里查看 OpenViking 连接、服务健康、记忆与会话计数。需要先部署 OpenViking 服务才会显示实时数据。 |
| 414 | [Teyvat0/dsh-notify](https://github.com/Teyvat0/dsh-notify) | 0 | 2026-11-09 | 2026-11-09 | Windows toast notifications for DeepSeek Harness: run finished, approval needed, or a question waiting. |
| 415 | [Teyvat0/dsh-sidebar-compact](https://github.com/Teyvat0/dsh-sidebar-compact) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness Web UI 侧边栏紧凑化插件：收起/展开、紧凑模式、面板列表折叠 |
| 416 | [th3r-dev/th3-plug](https://github.com/th3r-dev/th3-plug) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugins (plugs): shell commands from the chat box with ! or /sh, plus a template and scripts for building more. |
| 417 | [Thomas-zz/dsh-luanji](https://github.com/Thomas-zz/dsh-luanji) | 0 | 2026-11-06 | 2026-11-09 | 乱记 for DSH：本地优先的随手记录插件（划选引用、便签、可选云端同步） |
| 418 | [Thomas-zz/dsh-workbench](https://github.com/Thomas-zz/dsh-workbench) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 个人工作台插件：以 todo 为核心，DSH 与 ZCode 会话任务汇入同一看板，老板视图 / 待验收 / 每日晨报 / 灵感收件箱 |
| 419 | [tianluyao328/dsh-float-reader](https://github.com/tianluyao328/dsh-float-reader) | 0 | 2026-11-09 | 2026-11-09 | Floating TXT/EPUB reading window for the DeepSeek Harness Web UI: glass or invisible, rich text and images, drag, resize and collapse to a bar. |
| 420 | [tianluyao328/moyu-widget](https://github.com/tianluyao328/moyu-widget) | 0 | 2026-11-09 | 2026-11-09 | 摸鱼角 · 一个假装在跑 subagent、其实在看大盘的 DSH 右上角小组件 |
| 421 | [TLEWA/dsh-ptc-noargs](https://github.com/TLEWA/dsh-ptc-noargs) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: normalize an omitted/undefined first argument for PTC run_code tool bindings. 修复 run_code 中 tools.foo() / tools.foo(undefined) 的 binding arguments 报错。 |
| 422 | [tm5452/dsh-workspace-explorer](https://github.com/tm5452/dsh-workspace-explorer) | 0 | 2026-11-08 | 2026-11-09 | Windows file explorer for DeepSeek Harness Desktop, with tabs, previews, workspace search, and batch file operations. |
| 423 | [TongenShen/dsh-chat-mode](https://github.com/TongenShen/dsh-chat-mode) | 0 | 2026-11-09 | 2026-11-09 | Chat 模式：DeepSeek Harness 的纯聊天 Agent 预设，只加载 AGENTS.md、只保留联网搜索，其余工具全部屏蔽。 |
| 424 | [Tree005/dsh-terminal-keepalive](https://github.com/Tree005/dsh-terminal-keepalive) | 0 | 2026-11-09 | 2026-11-09 | Keep the DSH right-sidebar terminal mounted across tab switches so it no longer reloads. |
| 425 | [turboYuu/duh-us-stocks](https://github.com/turboYuu/duh-us-stocks) | 0 | 2026-11-09 | 2026-11-09 | dsh插件-美股 |
| 426 | [Tureen/dsh-acp-resume](https://github.com/Tureen/dsh-acp-resume) | 0 | 2026-11-09 | 2026-11-09 | Resumable ACP subagent backend for DeepSeek Harness — persistent chat pool with session/load reconnect &amp; mid-turn steering. Tested with kiro-cli. |
| 427 | [TYOPXN360/dsh-mobile-shell](https://github.com/TYOPXN360/dsh-mobile-shell) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 一体化移动端外壳插件：手机窄屏侧边栏抽屉（标题前按钮 + 全局右滑唤出）+ 可安装 PWA（DeepSeek Assistant）。桌面布局零改动，不改动其他插件代码。 |
| 428 | [TZUKWAN/METIS_ACADEMIC](https://github.com/TZUKWAN/METIS_ACADEMIC) | 0 | 2026-09-25 | 2026-11-09 | METIS：与 AI 共建研究流程，可视化跟踪执行，按步骤调用科研技能，在同一工作台审阅和修改成果。 |
| 429 | [u-cha/dsh-q-image-studio](https://github.com/u-cha/dsh-q-image-studio) | 0 | 2026-11-08 | 2026-11-09 | Make images with Qwen without leaving Deepseek Harness |
| 430 | [UncertaintyDeterminesYou4ndMe/dsh-reading-room](https://github.com/UncertaintyDeterminesYou4ndMe/dsh-reading-room) | 0 | 2026-11-07 | 2026-11-09 | 阅读室：在 DeepSeek Harness (dsh) 里用母语读原版书。导入 EPUB/TXT/Markdown/网页，按章节由模型精译，点一下看原文；选中即可追问。 |
| 431 | [unhurriedly/dsh-drone-planner](https://github.com/unhurriedly/dsh-drone-planner) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness panel plugin that serves a self-contained drone frustum route planning demo |
| 432 | [user-Mrz/dsh-system-prompt-studio](https://github.com/user-Mrz/dsh-system-prompt-studio) | 0 | 2026-11-09 | 2026-11-09 | Per-conversation system prompt studio for DeepSeek Harness. Append text, shadow-replace one named first-party prompt section, or replace the whole system prompt; changes apply on the next model request without a restart, persist per session, and the panel lists the real assembled sections. |
| 433 | [user654name/dsh-deepseek-usage-overview](https://github.com/user654name/dsh-deepseek-usage-overview) | 0 | 2026-11-09 | 2026-11-09 | In-app DeepSeek Platform usage page for the DeepSeek Harness Web GUI: balance, total spend, per-key spend/token filters and a spend chart, opened from a sidebar shortcut or a bottom-right double-click. |
| 434 | [uuicdown/dsh-project-agent](https://github.com/uuicdown/dsh-project-agent) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: dispatches project work to persistent worker sessions, with per-ticket skills and models |
| 435 | [Vansnc/dsh-feiyu-image](https://github.com/Vansnc/dsh-feiyu-image) | 0 | 2026-11-09 | 2026-11-09 | 给陪伴角色一个相机：调百炼 wan2.7-image 生图，自动沿用她此刻的穿着和场景，出图可直接发到 QQ。 |
| 436 | [veritaswiki/dsh-expert-panel](https://github.com/veritaswiki/dsh-expert-panel) | 0 | 2026-11-09 | 2026-11-09 | 多轮评审专家团 · DeepSeek Harness 插件：主力模型卡住时，用一次带硬性收口契约的跨模型对抗式评审，产出可直接执行的指派单 |
| 437 | [vfuncyy/dsh-edge-bridge](https://github.com/vfuncyy/dsh-edge-bridge) | 0 | 2026-11-08 | 2026-11-09 | Connect DeepSeek Harness to your real Microsoft Edge browser over loopback — stable refs, expect guards, effect_state, capability negotiation. Zero runtime dependencies. |
| 438 | [vi0let-dev/dsh-auth-cookie-guard](https://github.com/vi0let-dev/dsh-auth-cookie-guard) | 0 | 2026-11-09 | 2026-11-09 | 自动清理 DSH 桌面版累积的 dsh-auth-* 认证 Cookie，避免请求头超限导致的 Web authentication failed 启动失败。 |
| 439 | [VictorGol/dsh-wallpaper](https://github.com/VictorGol/dsh-wallpaper) | 0 | 2026-11-08 | 2026-11-09 | A wallpaper picker for DeepSeek Harness: choose a local image as the window wallpaper at 70% opacity. |
| 440 | [VixieTodd/dsh-exam-fig](https://github.com/VixieTodd/dsh-exam-fig) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: draw exam figures (math/physics/chemistry) from the question's parameters, with a figure-vs-stem consistency checker. MIT. |
| 441 | [Vncntvx/dsh-typst](https://github.com/Vncntvx/dsh-typst) | 0 | 2026-11-09 | 2026-11-09 | Typst plugin for DeepSeek Harness: write and fix Typst documents with a live preview, diagnostics, source locations, and PDF export. |
| 442 | [voltarenyah/dsh-automation-suite](https://github.com/voltarenyah/dsh-automation-suite) | 0 | 2026-10-23 | 2026-11-09 | A DeepSeek Harness distribution built for industrial automation |
| 443 | [wanghao815/dsh-rtl-flow](https://github.com/wanghao815/dsh-rtl-flow) | 0 | 2026-11-09 | 2026-11-09 | Generic RTL engineering workflow for DeepSeek Harness: architecture, RTL, verification, physical implementation, evidence and resource checks. |
| 444 | [wannaknowhys/dsh-dump-manager](https://github.com/wannaknowhys/dsh-dump-manager) | 0 | 2026-11-08 | 2026-11-09 | Sidebar panel, entry viewer and exports for LLM request dumps captured by dsh-llm-dump |
| 445 | [wannaknowhys/dsh-llm-dump](https://github.com/wannaknowhys/dsh-llm-dump) | 0 | 2026-11-08 | 2026-11-09 | Capture every complete LLM request (messages, tools, sampling) into folded JSONL dumps |
| 446 | [wannaknowhys/dsh-preset-rules](https://github.com/wannaknowhys/dsh-preset-rules) | 0 | 2026-11-09 | 2026-11-09 | Generate DeepSeek Harness agent-preset patches from a small editable rule file |
| 447 | [wannaknowhys/dsh-pwsh-cp](https://github.com/wannaknowhys/dsh-pwsh-cp) | 0 | 2026-11-08 | 2026-11-09 | Pin every pwsh tool call to a UTF-8 console code page and Python UTF-8 mode |
| 448 | [warm-flame-core/dsh-learn-distill](https://github.com/warm-flame-core/dsh-learn-distill) | 0 | 2026-11-09 | 2026-11-09 | 把网课视频蒸馏成可自足阅读的线性讲义或考试突击卡片的 DSH skill |
| 449 | [wawaTuna/dsh-free-pi](https://github.com/wawaTuna/dsh-free-pi) | 0 | 2026-11-09 | 2026-11-09 | DSH (DeepSeek Harness) provider plugin: free-pi (ad-funded free models, incl. DeepSeek V4.1 Flash) via GitHub sign-in |
| 450 | [Wazy-XD/dsh-iar-cspy](https://github.com/Wazy-XD/dsh-iar-cspy) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness bundle for the official IAR C-SPY MCP server: build, debug and inspect Embedded Workbench projects from the agent. |
| 451 | [Wazy-XD/tabby-serial-mcp](https://github.com/Wazy-XD/tabby-serial-mcp) | 0 | 2026-11-06 | 2026-11-09 | MCP bridge plugin for Tabby: an agent can read and write raw bytes on your open serial tabs (and open new ones) without stealing the COM port. |
| 452 | [wcnmamrs/dsh-theme-neumorph](https://github.com/wcnmamrs/dsh-theme-neumorph) | 0 | 2026-11-09 | 2026-11-09 | DSH 新拟态主题插件：冷灰表面、钢蓝强调、柔和阴影。Neumorphism theme for the DeepSeek Harness web UI. |
| 453 | [wdxtub/dsh-wdx-git](https://github.com/wdxtub/dsh-wdx-git) | 0 | 2026-11-08 | 2026-11-09 | Git inside your AI session: one sync button that fetches, pulls, or pushes; a default commit tab; AI-written commit messages for DeepSeek Harness. |
| 454 | [weichengwu/dsh-web-control](https://github.com/weichengwu/dsh-web-control) | 0 | 2026-11-09 | 2026-11-09 | Manage a LAN or Tailscale reachable dsh web instance from inside DSH: pick the bind address, start, stop, restart, and read the token URL. |
| 455 | [WekyJay/Dsh-Microsoft-ToDo](https://github.com/WekyJay/Dsh-Microsoft-ToDo) | 0 | 2026-11-09 | 2026-11-09 | Microsoft To Do panel for DeepSeek Harness: lists, tasks, local groups, and My Day |
| 456 | [WELLMEI-AI-TEAM/dsh-admim-expert-kit](https://github.com/WELLMEI-AI-TEAM/dsh-admim-expert-kit) | 0 | 2026-11-09 | 2026-11-09 | DSH行政专家插件 |
| 457 | [wenliang9527/quick-send](https://github.com/wenliang9527/quick-send) | 0 | 2026-11-04 | 2026-11-09 | 常用语快捷发送插件：ZCode 版（侧栏面板 + Rust server）与 DSH 版（Web 插件）共享同一份 phrases.json 内容源 |
| 458 | [whoishuhu/dsh-chat-plus](https://github.com/whoishuhu/dsh-chat-plus) | 0 | 2026-11-09 | 2026-11-09 | DSH ????:??????????????????????????????? |
| 459 | [WuZiyi521/dsh-chat-columns](https://github.com/WuZiyi521/dsh-chat-columns) | 0 | 2026-11-08 | 2026-11-09 | Reading modes for long DSH conversations — newspaper columns today, seamless panes in progress. |
| 460 | [wv-y/dsh-file-editor](https://github.com/wv-y/dsh-file-editor) | 0 | 2026-11-09 | 2026-11-09 | Text editor for the DSH right sidebar: line numbers, highlighting, folding, Git marks, autosave, find/replace, Markdown preview. |
| 461 | [xiaoluoli45/dsh-code-explainer](https://github.com/xiaoluoli45/dsh-code-explainer) | 0 | 2026-11-08 | 2026-11-09 | 把 agent 执行的代码、命令和文件修改翻译成非程序员能看懂的中文解释（DeepSeek Harness 插件） |
| 462 | [xiaoyaoguhuaxian/dsh-highlight-plugin](https://github.com/xiaoyaoguhuaxian/dsh-highlight-plugin) | 0 | 2026-11-09 | 2026-11-09 | DSH 会话内划重点插件：划选语句标为高亮色块（黄/绿/蓝），覆盖层绘制不怕重渲染，按会话持久保存，可单独删除 \| In-session highlighting for DSH chat: colored marks that survive re-renders and restarts |
| 463 | [xinnix/dsh-opportunity-radar](https://github.com/xinnix/dsh-opportunity-radar) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: product-opportunity research workflow with a report archive and per-issue options. |
| 464 | [XinpengWei/dsh-session-sounds](https://github.com/XinpengWei/dsh-session-sounds) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: sound, toast, and WeChat/ntfy push alerts when a session finishes or needs user input. |
| 465 | [XiRuize/fin-agent-workbench](https://github.com/XiRuize/fin-agent-workbench) | 0 | 2026-11-09 | 2026-11-09 | 基于 DeepSeek Harness 的金融智能体工作台：四栏人机协同、假设核准、证据链、研报生成与一键导出。 |
| 466 | [Xuduxiu/DSH](https://github.com/Xuduxiu/DSH) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 工具箱：饱和式科研、多栏工作区、明日方舟主题，以及可移植的 Windows 安装器。 |
| 467 | [y0u41/dsh-research-studio](https://github.com/y0u41/dsh-research-studio) | 0 | 2026-11-09 | 2026-11-09 | Two installable DSH sidebar panels for PPT Master decks and Academic Research Skills pipelines, with prompt builders, skill guides, and integrity gates. |
| 468 | [yankeguo/dsh-devlead](https://github.com/yankeguo/dsh-devlead) | 0 | 2026-11-09 | 2026-11-09 | DevLead mode for DeepSeek Harness: turn one session into a lead that creates and steers ordinary Workspaces and Sessions, watches their state, and wakes the lead on change. |
| 469 | [ye001991g/dsh-chat-find](https://github.com/ye001991g/dsh-chat-find) | 0 | 2026-11-09 | 2026-11-09 | Chinese-safe literal find for the DeepSeek Harness chat transcript - pixel-accurate scroll-to-match across nested scrollports. |
| 470 | [yezisorft/dsh-paper-mode](https://github.com/yezisorft/dsh-paper-mode) | 0 | 2026-11-09 | 2026-11-09 | DSH 论文模式插件：五阶段写作法 · 引言/段落/结论三公式 · GB/T 论文版式与参考文献规范；含 paper-writing 技能、/paper 命令与界面徽标 |
| 471 | [yhPrime/dsh-Engram](https://github.com/yhPrime/dsh-Engram) | 0 | 2026-11-09 | 2026-11-09 | Engram（记忆痕迹）：经验与技能引擎 + 经验库控制台，一个标准 DSH 插件。 |
| 472 | [yhPrime/dsh-sidebar-left-split](https://github.com/yhPrime/dsh-sidebar-left-split) | 0 | 2026-11-09 | 2026-11-09 | DSH 左侧栏分隔条：拖动「工作区」与全局面板列表之间的交接调整高度，面板列表被压小时自动出现滚动条。Resizable left sidebar splitter for DeepSeek Harness. |
| 473 | [yhy854/dsh-calc-tool](https://github.com/yhy854/dsh-calc-tool) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness 专属硬核计算器：终结大模型算术脑补与幻觉，0 误差秒出结果，省下反复验算的巨量 Token。 |
| 474 | [yhy854/zhong-wen-thinks](https://github.com/yhy854/zhong-wen-thinks) | 0 | 2026-11-09 | 2026-11-09 | 最适配中国开发者体质的 DSH 原生中文思考插件：彻底告别满屏英文思维链，实时看懂模型推理、随时打断纠错，不再傻等结果。 |
| 475 | [yichuan1123/dsh-quant-cta](https://github.com/yichuan1123/dsh-quant-cta) | 0 | 2026-11-09 | 2026-11-09 | 商品期货 CTA 工作台：天勤真实行情驱动的回测 / 模拟盘全链路，含成本模型与风控（DSH 插件，不发真实委托） |
| 476 | [ymf2317-tech/dsh-header-dock](https://github.com/ymf2317-tech/dsh-header-dock) | 0 | 2026-11-09 | 2026-11-09 | Overflow tuck-away for the DSH Web session header: a » drawer with per-item state and order. |
| 477 | [ymf2317-tech/dsh-memo-plus](https://github.com/ymf2317-tech/dsh-memo-plus) | 0 | 2026-11-09 | 2026-11-09 | Drop-in fork of @adamcjm/dsh-memo for DeepSeek Harness: Markdown rendering, notebook tab for long-form notes, long-text folding, touch-friendly drag. |
| 478 | [youyou-sudo/dsh-plugins](https://github.com/youyou-sudo/dsh-plugins) | 0 | 2026-11-09 | 2026-11-09 | youyou-sudo's personal DSH plugin market: small, dependency-free DeepSeek Harness bundles installable straight from Git, with a generated format-1 market index on GitHub Pages. |
| 479 | [yu-bobo/dsh-commit-journal](https://github.com/yu-bobo/dsh-commit-journal) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: sync commits (Codeup/GitLab/GitHub), reports, activity heatmap |
| 480 | [Yutai233/dsh-selective-subagent](https://github.com/Yutai233/dsh-selective-subagent) | 0 | 2026-11-08 | 2026-11-09 | 给 DeepSeek Harness (DSH) 的子代理加一层"人来选模型"的环节：AI 拆分任务、准备派子代理时，先弹窗让你为该任务指定 provider / 模型；60 秒无操作则保持 DSH 原本的子代理路由继续。 |
| 481 | [yyyyukari/dsh-dv-triage](https://github.com/yyyyukari/dsh-dv-triage) | 0 | 2026-11-09 | 2026-11-09 | DSH plugin: evidence-first regression triage for digital verification - turn thousands of logs into ranked failure clusters with verified source pointers. |
| 482 | [z1lyA/dsh-lifehud](https://github.com/z1lyA/dsh-lifehud) | 0 | 2026-11-09 | 2026-11-09 | LifeHud — 长在 DeepSeek Harness 里的个人工作台：一屏看完任务 / 天气 / 会话 / 专注 / 体重（零依赖 DSH 插件） |
| 483 | [zengwenliang416/dsh-iui](https://github.com/zengwenliang416/dsh-iui) | 0 | 2026-10-09 | 2026-11-09 | Intelligent UI plugin for DeepSeek Harness: semantic content blocks rendered as interactive Astryx cards, with optional TypeSafe Jev component decisions |
| 484 | [zhanganmv/dsh-tweakit](https://github.com/zhanganmv/dsh-tweakit) | 0 | 2026-11-09 | 2026-11-09 | 在 DSH 设置里调整界面：设置窗口尺寸（默认/全屏/自定义），实时预览、持久化。Tweak the DeepSeek Harness UI from a settings tab. |
| 485 | [zhangkaiqiu/dsh-dev-launcher](https://github.com/zhangkaiqiu/dsh-dev-launcher) | 0 | 2026-11-05 | 2026-11-09 | One-click launch scripts for the current workspace, with logs the conversation can read. |
| 486 | [zhangkaiqiu/dsh-no-account-models](https://github.com/zhangkaiqiu/dsh-no-account-models) | 0 | 2026-11-09 | 2026-11-09 | Hide the DeepSeek account model group from the DSH model picker by disabling the built-in llm-deepseek-account route. |
| 487 | [zhangkaiqiu/dsh-orphan-cleaner](https://github.com/zhangkaiqiu/dsh-orphan-cleaner) | 0 | 2026-11-09 | 2026-11-09 | Scan and terminate orphan processes (MCP stdio connectors, dev servers, stray process trees) left behind by DSH restarts. |
| 488 | [zhouatie/dsh-device-deck](https://github.com/zhouatie/dsh-device-deck) | 0 | 2026-11-09 | 2026-11-09 | Device mirror, emulator manager, and agent tools for DeepSeek Harness. |
| 489 | [zhuanglaihong/dsh-router-worker](https://github.com/zhuanglaihong/dsh-router-worker) | 0 | 2026-11-08 | 2026-11-09 | dsh插件：将对话变成 Router/Worker 双层调度。涵盖派单、工单队列、结果回流、Watchdog、侧栏树、设置页 |
| 490 | [zhule33-cmyk/muse-plush-skin](https://github.com/zhule33-cmyk/muse-plush-skin) | 0 | 2026-11-08 | 2026-11-09 | Muse Plush skin for the DeepSeek Harness Web GUI: powder-blue pile, belly-beige fuzzy bubbles, a small plush on the composer |
| 491 | [ZileiC/dsh-skiller](https://github.com/ZileiC/dsh-skiller) | 0 | 2026-11-09 | 2026-11-09 | Skill manager plugin for DeepSeek Harness: list every skill from the sidebar and create, import, edit or delete local skills. |
| 492 | [zilta-amaze/dsh-recovery-memory](https://github.com/zilta-amaze/dsh-recovery-memory) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness plugin: pack a conversation into a 20-letter recovery code and restore its memory in a new conversation. |
| 493 | [ZIye1208/dsh-clean-chat](https://github.com/ZIye1208/dsh-clean-chat) | 0 | 2026-11-08 | 2026-11-09 | DSH 插件：侧栏「闲聊」面板 —— 直连模型、零工具、一句话系统提示，像网页版那样干净。 |
| 494 | [zizon/gitfeed-native](https://github.com/zizon/gitfeed-native) | 0 | 2026-11-08 | 2026-11-09 | Native DeepSeek Harness bundle for gitfeed: RSS reader page, refresh schedule, git sync, agent tool. Code only; data lives in a separate repository. |
| 495 | [zoeyzhang233666/dsh-weread-bilingual](https://github.com/zoeyzhang233666/dsh-weread-bilingual) | 0 | 2026-11-09 | 2026-11-09 | 微信读书双语阅读 DSH 插件：右侧栏对照阅读，用当前模型逐句中译英学英语 |
| 496 | [ZSY060116/PL-PRISM](https://github.com/ZSY060116/PL-PRISM) | 0 | 2026-11-09 | 2026-11-09 | 基于大模型的赛博伴侣控制中枢，支持多频道记忆隔离、PAD情感动力学引擎与零Token动图分类，开箱即用。 |
| 497 | [zxbingoo/dsh-minimalist-worktree](https://github.com/zxbingoo/dsh-minimalist-worktree) | 0 | 2026-11-05 | 2026-11-09 | DSH worktree isolation, setup progress, archive cleanup, and session file/Git review panel |
| 498 | [zztdandan/dsh-deepseek-exa-hybrid-search](https://github.com/zztdandan/dsh-deepseek-exa-hybrid-search) | 0 | 2026-11-09 | 2026-11-09 | DSH web_search provider: DeepSeek Search API + Exa merged into one de-duplicated, cross-source-first result list. 把 DeepSeek 与 Exa 搜索合并成单份结果的 DSH 插件。 |
| 499 | [zzw980709/dsh-lan-room](https://github.com/zzw980709/dsh-lan-room) | 0 | 2026-11-09 | 2026-11-09 | DeepSeek Harness LAN rooms: host a room, join with a one-time invite code, let agents ask each other questions. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1052326311/dsh-plan-lattice
- 2132774831/dsh-local-memory
- almazom/dsh-needs-attention
- Alumos/dsh-session-cleaner
- antonio-mastropaolo/dsh-anthropic-membership
- anze225/dsh-notify-sound
- AQYLPZ/headroom-auto
- BG0EXM/dsh-session-remove
- BlanCatOra/dsh-colorful-commands
- BlanCatOra/dsh-enhanced-prompt-editor
- BlanCatOra/dsh-opendesign-usage
- CanMing/dsh-web-search-codex-020
- canyexiren/dsh-purge
- Chang-Tong/dsh-import-agents
- ddtcorex/dsh-maestro-memory
- Jaylor-Wang/dsh-awesome-agent-preset
- Jaylor-Wang/dsh-plugin-agent-optimizer
- Jensen-Yao/agents-skills
- JIUYUE-SEP/dsh-plugin-archive-shelf
- joshryandavis/dsh-llm-aws-kiro
- laoyingfuhuole/dsh-browser-use
- leiming2333/dsh-web-search-pro
- LianPing-cyber/dsh-browser-full-access
- lilcandi/dsh-any-background-plus
- lilcandi/dsh-continue-button
- lilcandi/dsh-music-on
- lilcandi/dsh-session-live
- lilCnid/deepseek-rlm
- lilCnid/recursus
- LMhuo/ds-snap-line
- LordGrimTaken/dsh-inapp-plugin
- LUTAO581314/dsh-plugin-catalog
- malabananclauss-rgb/dsh-self
- MarcoHuiLam/lingwu-dsh-conversation-cost
- n0pe-sled/clear-session-history
- n0pe-sled/configurable-subagents
- n0pe-sled/context-before-user
- onclaw-dev/dsh-workflow-designer
- overact/dsh-context-management
- qujinting/dsh-theme-blue
- qujinting/dsh-web-search-clinepass
- rayadesune/dsh-context-window-switch
- robinliang0829-lgtm/dsh-cloud-sync
- rong-coder/dsh-office-tool
- shixiaoyu-funny/DSHAndMulti_PlatFormDesktopPet
- silversystem04-coder/dsh-project-tabs
- snowwolf03/dsh-dingtalk-plugin
- Stephen-pc/paper-format-check
- suimi8/dsh-cost-ledger
- suimi8/dsh-test-runner
- uhygyuf/cs-source-reliable
- uhygyuf/quantitativeTrading-source-reliable
- UncertaintyDeterminesYou4ndMe/dsh-immersive-reader
- Wisper-beep/dsh-runbox
- xiaomu1110/dsh-font-manager
- z-y-q/dsh-git-panel
- z-y-q/dsh-mcp-security
