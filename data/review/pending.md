# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-25**
- 快照日期 / Snapshot date: **2026-08-25 (UTC)**
- 待审核 / Pending: **327**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **25**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`
- 非插件形态 / market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ 加入 `curated.json` 的 `market_exclusions`（市场不能包含市场）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`
- Non-plugin form / market class (plugin market, store, skill mall, desktop with a built-in market) → `market_exclusions` in `curated.json` (the market cannot include another market)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [chainbase-labs/Agentkey](https://github.com/chainbase-labs/Agentkey) | 595 | 2026-04-23 | 2026-08-25 | Connect your AI agent to the world — Web search, Social media, Crypto & On-chain data. One plugin, zero extra config. |
| 2 | [Unclecheng-li/DeepSec](https://github.com/Unclecheng-li/DeepSec) | 330 | 2026-07-09 | 2026-08-25 | DeepSec — AI Security Offense & Defense Platform. Shield audits AI-generated code for hallucinated packages, missing safeguards & AI pattern errors in real time. Spear automates authorized penetration testing with 40+ skill packs, from recon to PoC.  |
| 3 | [Minglink/dsh-infinite-gen-2](https://github.com/Minglink/dsh-infinite-gen-2) | 248 | 2026-08-15 | 2026-08-25 | DeepSeek 专用破甲插件「无限二代」dsh-infinite-gen-2 — armor-breaking plugin for DeepSeek稳定化破甲提示词，求 Star 收藏 ⭐ |
| 4 | [zenstory-ai/oh-story-dsh](https://github.com/zenstory-ai/oh-story-dsh) | 179 | 2026-08-19 | 2026-08-25 | A DSH plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills. |
| 5 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 150 | 2026-08-13 | 2026-08-25 | 推荐组件（非必须）：DeepSeek Harness 运行时注入器；已随 dsh-routing-suite 单仓库化保留，本仓库继续维护/发布。 |
| 6 | [AgentDebugX/AgentDebugX](https://github.com/AgentDebugX/AgentDebugX) | 50 | 2026-07-10 | 2026-08-25 | A debugging framework for agentic AI systems: diagnose failures, attribute root causes, recover with evidence, and validate fixes through reruns. |
| 7 | [HiWhaleW/dsh-toolbox](https://github.com/HiWhaleW/dsh-toolbox) | 29 | 2026-08-13 | 2026-08-25 | Local-first DeepSeek Harness plugins for product research, context routing, plugin preflight, and compatibility monitoring. |
| 8 | [ZSeven-W/dsh-harbor](https://github.com/ZSeven-W/dsh-harbor) | 20 | 2026-08-22 | 2026-08-25 | DeepSeek Harness (DSH) plugin: a read-only ledger for the plugins you already have installed — a capability inventory with file:line evidence, declared-vs-detected reconciliation, cross-profile version drift, and a diff of what changed since the last scan. |
| 9 | [Minglink/DeepSeek-Harness-Hub](https://github.com/Minglink/DeepSeek-Harness-Hub) | 12 | 2026-08-24 | 2026-08-25 | 🌐 DeepSeek 官方与开源生态插件市场 (deepseek.stream) 使用指南与一键安装协议规范 |
| 10 | [dabaicai001/star-dsh-desktop](https://github.com/dabaicai001/star-dsh-desktop) | 9 | 2026-06-04 | 2026-08-25 | StarHub 是一款跨平台桌面应用（Tauri 2 + Rust 主进程 + DeepSeek Harness React 工作台 + Go Sidecar），把开发运维日常高频工具整合到同一个窗口 —— 数据库、SSH/SFTP、Docker 面板与 AI 助手。目标是减少在 Navicat、Xshell、Portainer、文件管理器和 AI 对话窗口之间来回切换的成本。  前端架构：基于 DeepSeek Harness 原生 React 工作台（/starhub-react 路由）。资产、设置、SSH 终端、SFTP、数据库 |
| 11 | [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) | 8 | 2026-08-14 | 2026-08-25 | Secondary working directories for a DeepSeek Harness project — edit a source repo, a test repo, and a docs repo side by side without leaving the primary workspace. |
| 12 | [LoserFox/marisa-distro](https://github.com/LoserFox/marisa-distro) | 8 | 2026-08-13 | 2026-08-25 | 魔理沙 DSH 整合包发行：29 插件 + 一键安装 + profile 直装 |
| 13 | [newborne/dsh-adb-ultimate](https://github.com/newborne/dsh-adb-ultimate) | 5 | 2026-08-19 | 2026-08-25 | Full-featured ADB device management plugin for DeepSeek Harness - control your Android device via AI |
| 14 | [azwosile/dsh-highres-vision](https://github.com/azwosile/dsh-highres-vision) | 4 | 2026-08-24 | 2026-08-25 | 专供 deepseek-v4-flash-vision-exp 的高清识图增强插件：放宽 DSH 图片限制 + highres_read 分块识图工具。 |
| 15 | [chipweaver/veripower](https://github.com/chipweaver/veripower) | 4 | 2026-06-11 | 2026-08-25 | An open-source agent flow from natural language spec through Verilog RTL and UVM verification to front-end signoff on commercial EDA tools |
| 16 | [staff-os/dsh-workbench](https://github.com/staff-os/dsh-workbench) | 4 | 2026-08-22 | 2026-08-25 | An enterprise workbench for the DeepSeek Harness: AI employees, knowledge bases, skills, MCP servers and DSH plugins, all manageable from a running session. |
| 17 | [Tianbuyu-wwx/DSH-FormatForge](https://github.com/Tianbuyu-wwx/DSH-FormatForge) | 4 | 2026-06-10 | 2026-08-25 | FormatForge — DeepSeek Harness plugin: drag any file (PDF/DOCX/XLSX/EML…, 30+ formats) into dsh and it becomes AI-readable structured data. npm: @tianbuyu-wwx/dsh-formatforge |
| 18 | [aa2246740/dsh-watcher](https://github.com/aa2246740/dsh-watcher) | 3 | 2026-08-20 | 2026-08-25 | Read-only Agent work-path observer for DeepSeek Harness |
| 19 | [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | 3 | 2026-08-16 | 2026-08-25 | Workspace-scoped Python virtual environment management for a DeepSeek Harness project — discover, create, install into, and remove virtual environments without sandbox, network, or subprocess pitfalls. |
| 20 | [f20880479-lab/dsh-peak-gate](https://github.com/f20880479-lab/dsh-peak-gate) | 3 | 2026-08-25 | 2026-08-25 | deep seek harness插件，可以将高峰时段的工作延迟到空闲时段再工作 |
| 21 | [fjzzwxp/dsh-mnemosyne-memory](https://github.com/fjzzwxp/dsh-mnemosyne-memory) | 3 | 2026-08-24 | 2026-08-25 | Mnemosyne 永久记忆插件 - 为 DSH 提供长期记忆、向量搜索和 LLM 反思功能，对标 Hindsight Coding Agents |
| 22 | [hanshanyike/dsh-yolo](https://github.com/hanshanyike/dsh-yolo) | 3 | 2026-08-20 | 2026-08-25 | 把对话里说过的重要事情，变成持续可跟进的计划。  为 deepseek-harness 打造的个人助手：从对话中整理事项、跟踪变化，并在需要时提醒你。 |
| 23 | [Max-Null/dsh-chinese-thinking](https://github.com/Max-Null/dsh-chinese-thinking) | 3 | 2026-08-15 | 2026-08-25 | One-line fix: inject a fixed system-prompt section so the agent always thinks and replies in Chinese, whatever the user's language · 中文思考：注入固定提示词，让 agent 始终用中文思考与回复（无论用户语言） |
| 24 | [Max-Null/dsh-memory](https://github.com/Max-Null/dsh-memory) | 3 | 2026-08-15 | 2026-08-25 | Cross-session plaintext memory for DeepSeek Harness: suggested → human-approved, searchable, human owns the data · 跨会话明文记忆：模型写入待审核、人工确认生效，明文可审计 |
| 25 | [88514205-oss/dsh-ryoshu-slash](https://github.com/88514205-oss/dsh-ryoshu-slash) | 2 | 2026-08-16 | 2026-08-25 | DSH plugin: 天殺拔刀斬——带斩击特效的文件删除工具，强制审查防误删；official bundle, install via `dsh plugin --profile web add` github:88514205-oss/dsh-ryoshu-slash |
| 26 | [AbelKeithsun/dsh-question-nav](https://github.com/AbelKeithsun/dsh-question-nav) | 2 | 2026-08-21 | 2026-08-25 | In-session question minimap for the DeepSeek Harness Web GUI: a vertical column of round dots overlaid on the left edge of the conversation column, one dot per user question — hover enlarges and shows full text, click jumps to that message. |
| 27 | [AI-Scarlett/DSH-Store](https://github.com/AI-Scarlett/DSH-Store) | 2 | 2026-08-16 | 2026-08-25 | DSH STORE — third-party plugin marketplace and guarded lifecycle manager for DeepSeek Harness. |
| 28 | [aorucshiea/dsh-plugin-toggle](https://github.com/aorucshiea/dsh-plugin-toggle) | 2 | 2026-08-24 | 2026-08-25 | Hot-plug enable/disable switches for installed DSH plugins |
| 29 | [aorucshiea/dsh-preset-switch](https://github.com/aorucshiea/dsh-preset-switch) | 2 | 2026-08-24 | 2026-08-25 | Optional mid-session agent-preset switching for DeepSeek Harness |
| 30 | [aorucshiea/dsh-safe-tui](https://github.com/aorucshiea/dsh-safe-tui) | 2 | 2026-08-24 | 2026-08-25 | DeepSeek Harness safe-mode recovery console: minimal TUI, history, repair, model/provider management |
| 31 | [baihui-ai/a2ui-render-in-dsh](https://github.com/baihui-ai/a2ui-render-in-dsh) | 2 | 2026-08-24 | 2026-08-25 | Interactive A2UI cards for the dsh web UI — quizzes, forms, charts and diagrams rendered inline in the conversation, with a full action loop back to the agent. |
| 32 | [BigBlueBaby/codex2dsh](https://github.com/BigBlueBaby/codex2dsh) | 2 | 2026-08-24 | 2026-08-25 | 把 Codex（OpenAI Codex CLI / Desktop）的 MCP 服务器、技能、全局指令、记忆与会话历史一键迁移进 DeepSeek Harness（DSH）——可视化面板 + CLI，源码只读、dry-run 预览、密钥按原样迁移。 |
| 33 | [chunfenxiazhi-collab/dsh-stability-audit](https://github.com/chunfenxiazhi-collab/dsh-stability-audit) | 2 | 2026-08-24 | 2026-08-25 | Scan installed dsh plugins and grade stability risk (hook surface, startup work, preflight, deps) with optional isolated install verification |
| 34 | [dat-lequoc/dsh-kiro](https://github.com/dat-lequoc/dsh-kiro) | 2 | 2026-08-24 | 2026-08-25 | Kiro provider for DeepSeek Harness with Builder ID login, live model discovery, and reasoning effort controls |
| 35 | [ddtcorex/dsh-maestro-memory](https://github.com/ddtcorex/dsh-maestro-memory) | 2 | 2026-08-24 | 2026-08-25 | DSH plugin for durable, cross-session memory & todos — five tracks (global/user/project/key/daily), confirmation-gated writes, Git-backed sync, in-place adoption of ~/.dsh/memories. |
| 36 | [dingminhua/dsh-subagent-default-model](https://github.com/dingminhua/dsh-subagent-default-model) | 2 | 2026-08-16 | 2026-08-25 | Configurable default model for subagent delegations via settings.yaml, with single-model and multi-model round-robin/random strategies. |
| 37 | [DM010727/dsh-cline](https://github.com/DM010727/dsh-cline) | 2 | 2026-08-25 | 2026-08-25 | Deepseek harness 开源插件 — DSH (DeepSeek Harness) + Cline VS Code ecosystem fusion |
| 38 | [Entity-Him/dsh-sky-skin](https://github.com/Entity-Him/dsh-sky-skin) | 2 | 2026-08-25 | 2026-08-25 | Sky: Children of the Light themed skin for DeepSeek Harness web UI - light children on a glowing star map, candlelight gold and starry night. 光遇·遇境主题皮肤。 |
| 39 | [faith1688/dsh-usage-meter-harness](https://github.com/faith1688/dsh-usage-meter-harness) | 2 | 2026-08-17 | 2026-08-25 | 专为 DeepSeek API 打造的实时用量 / 费用 / 余额计量插件 —— 在聊天输入框旁直接看到 tokens、花费与真实余额。 |
| 40 | [HIT-HTML/dsh-ENHANCED](https://github.com/HIT-HTML/dsh-ENHANCED) | 2 | 2026-08-24 | 2026-08-25 | Everyday upgrades for DeepSeek Harness in one plugin: multi-engine free web search, skills & MCP management, auto-compact tuning, instance controls:RESTART/SHUTDOWN, themes |
| 41 | [hw-cola/dsh-dynamic-agents](https://github.com/hw-cola/dsh-dynamic-agents) | 2 | 2026-08-25 | 2026-08-25 | DSH插件，动态AGENTS.md |
| 42 | [hyrinx/dsh-plugin-open-with](https://github.com/hyrinx/dsh-plugin-open-with) | 2 | 2026-08-22 | 2026-08-25 | 在DeepSeek Harness Web 会话头部添加胶囊拆分按钮，一键在当前工作区打开VS Code、终端（CMD / PowerShell）和文件资源管理器。 |
| 43 | [inmny/dsh-continue](https://github.com/inmny/dsh-continue) | 2 | 2026-08-24 | 2026-08-25 | 为 DeepSeek Harness 增加一个直接续跑按钮。当会话异常结束时，可以从现有上下文继续执行，不会引入其他提示词。 |
| 44 | [Letter2025/dsh-task-worktree](https://github.com/Letter2025/dsh-task-worktree) | 2 | 2026-08-18 | 2026-08-25 | Complete Git worktree support for DeepSeek Harness: task-scoped isolated checkouts on their own branches, recorded in a per-repo manifest that survives sessions and restarts |
| 45 | [linxuhao/AItelier](https://github.com/linxuhao/AItelier) | 2 | 2026-04-04 | 2026-08-25 | AI-Atelier, the all in one personal "atelier" (means handcraft studio in french) that can adapt to your need. |
| 46 | [louke6572/dsh-whale-widget-plus](https://github.com/louke6572/dsh-whale-widget-plus) | 2 | 2026-08-25 | 2026-08-25 | 基于DeepSeek-Balance-Whale-Widget开发，新增了两版不同的表情，需要那个版本的表情可以自己让agent帮你换，增加了火山coding plan额度查询，新增加台词自定义切换增加，增加了表情与台词手动切换 |
| 47 | [Max-Null/dsh-draft-polish](https://github.com/Max-Null/dsh-draft-polish) | 2 | 2026-08-21 | 2026-08-25 | Draft polish for DeepSeek Harness: one-click LLM polish of your draft in the composer, rewrites it in place with session context · 草稿润色：发送前一键调用 LLM 润色草稿，结果回填输入框 |
| 48 | [Max-Null/dsh-skill-mcp-center](https://github.com/Max-Null/dsh-skill-mcp-center) | 2 | 2026-08-17 | 2026-08-25 | Skill & MCP center for DeepSeek Harness: manage skills and MCP servers in Settings, live MCP status in the sidebar · Skill 与 MCP 管理中心：设置里管理技能与 MCP 服务器，侧边栏实时状态 |
| 49 | [PetCT/dsh-Bio-image-dup-check](https://github.com/PetCT/dsh-Bio-image-dup-check) | 2 | 2026-08-25 | 2026-08-25 | 科研图片查重 DSH 插件 · 本地离线检测整图重复/翻转/旋转/缩放、copy-move、跨图区域复用与 PDF 稿件图片。A local-offline integrity checker for life-science figures (DeepSeek Harness plugin). |
| 50 | [popeye1113/dsh-question-jump-bar](https://github.com/popeye1113/dsh-question-jump-bar) | 2 | 2026-08-25 | 2026-08-25 | DSH Web 插件：会话右侧的问题索引标尺（Question Jump Bar），每个刻度一次提问，悬停预览、点击/键盘跳转。 |
| 51 | [sqfcyily/dsh-workspace-files](https://github.com/sqfcyily/dsh-workspace-files) | 2 | 2026-08-25 | 2026-08-25 | 在DeepSeek Harness Web GUI 中浏览工作区的目录/文件，并结合 Git 显示文件改动。 |
| 52 | [TaoruiLiu19/dsh-gsv](https://github.com/TaoruiLiu19/dsh-gsv) | 2 | 2026-08-25 | 2026-08-25 | dsh-gsv-tts 是一个为 DeepSeek Harness (DSH) 开发的语音合成插件，将本地高性能 TTS 引擎 GSV-TTS-Lite 无缝接入 DSH 智能体生态。 |
| 53 | [TYEclipse/dsh-musictheory](https://github.com/TYEclipse/dsh-musictheory) | 2 | 2026-08-24 | 2026-08-25 | Music theory math toolbox for DeepSeek Harness (dsh): note parsing, frequency/MIDI conversion, correctly spelled chords (26 qualities) and scales (17 types) — zero runtime dependencies |
| 54 | [Wanbinyu/dsh-concurrency-meter](https://github.com/Wanbinyu/dsh-concurrency-meter) | 2 | 2026-08-19 | 2026-08-25 | Read-only model request concurrency monitoring for DeepSeek Harness |
| 55 | [wang-junjian/dsh-artifact-viewer](https://github.com/wang-junjian/dsh-artifact-viewer) | 2 | 2026-08-24 | 2026-08-25 | DeepSeek Harness 插件：产物浏览器 |
| 56 | [yamingmou/dsh-retrace](https://github.com/yamingmou/dsh-retrace) | 2 | 2026-08-19 | 2026-08-25 | Recall (撤回), edit-and-resend (编辑重发) and regenerate (重新生成) for DeepSeek Harness conversation messages — Web and Desktop plugin |
| 57 | [zhou-yihang/dsh-usage-blance](https://github.com/zhou-yihang/dsh-usage-blance) | 2 | 2026-08-18 | 2026-08-25 | DSH 插件：在对话框下方监控 DeepSeek API 用量与余额（本月/日均/昨日/今日消费 + 账户余额），点击账单行配置 userToken |
| 58 | [ztmajor/DSCoder](https://github.com/ztmajor/DSCoder) | 2 | 2026-08-20 | 2026-08-25 | 这是我给自己写的一个小工具——现在有太多 dsh-desktop 类项目，插件越装越多，越来越重，我就想要个干净的 AI 编码壳，里面有我需要的最基本的功能。于是有了 DSCoder。主要供我自己日常使用，如果你也有类似的需求，也欢迎取用。 |
| 59 | [2522669008-zcy/dsh-time-prefix](https://github.com/2522669008-zcy/dsh-time-prefix) | 1 | 2026-08-24 | 2026-08-25 | 在每条用户消息前自动插入 【2026/08/23，22:36】 这样的时间文本 |
| 60 | [6HOLLIS/DSH-Hiyuki-Frost-Sakura](https://github.com/6HOLLIS/DSH-Hiyuki-Frost-Sakura) | 1 | 2026-08-24 | 2026-08-25 | Immersive Hiyuki dual-form skin for DeepSeek Harness Web, with frost/sakura transitions, themed controls, and native DSH layout. |
| 61 | [aa2246740/dsh-auto-review](https://github.com/aa2246740/dsh-auto-review) | 1 | 2026-08-20 | 2026-08-25 | Codex-style Auto-review and Approve for me mode for DeepSeek Harness |
| 62 | [aa2246740/dsh-creator-mode-plus](https://github.com/aa2246740/dsh-creator-mode-plus) | 1 | 2026-08-20 | 2026-08-25 | Fail-closed Creator Mode+ bridge for DeepSeek Harness, supervised externally by DSHX. |
| 63 | [aa2246740/dsh-oauth-login](https://github.com/aa2246740/dsh-oauth-login) | 1 | 2026-08-15 | 2026-08-25 | Pi-native multi-provider OAuth login for DeepSeek Harness. Independent store — never touches official CLI auth files. |
| 64 | [ac0033/dsh-ctm](https://github.com/ac0033/dsh-ctm) | 1 | 2026-08-16 | 2026-08-25 | dsh 插件：CTM 上下文/终端管理，把模型上下文变成可见、可编辑、可评分的一等对象 |
| 65 | [ai-yukin/dsh-0-tools](https://github.com/ai-yukin/dsh-0-tools) | 1 | 2026-08-20 | 2026-08-25 | Zero-cost, zero-hassle toolkit for DeepSeek Harness (DSH): one-click free model setup (Zhipu GLM-4-Flash + OpenRouter Ox-Alpha) for complete beginners. 小白零门槛零费用套件。 |
| 66 | [AndrasSama/dsh-omp-advisor](https://github.com/AndrasSama/dsh-omp-advisor) | 1 | 2026-08-24 | 2026-08-25 | oh-my-pi advisor subsystem ported to DeepSeek Harness — independent reviewer models watch your agent and advise it (nit injects, concern/blocker steer) |
| 67 | [anonRTtty/DSH-mobile-remote-mode-plugin](https://github.com/anonRTtty/DSH-mobile-remote-mode-plugin) | 1 | 2026-08-25 | 2026-08-25 | DSH (DeepSeek Harness) mobile remote mode plugin - LAN discovery, QR pairing, Level-1 observer and Level-2 remote prompt from Android/iOS phones and any browser. Multi-platform, early development (Dev0.1). |
| 68 | [Anyway-one/dsh-image-gen](https://github.com/Anyway-one/dsh-image-gen) | 1 | 2026-08-25 | 2026-08-25 | DeepSeek Harness Image2 生图插件，通过第三方 OpenAI Images 兼容接口调用 gpt-image-2，只需配置  API Key 和 baseURL。 |
| 69 | [aorucshiea/dsh-omnipotent-preset](https://github.com/aorucshiea/dsh-omnipotent-preset) | 1 | 2026-08-24 | 2026-08-25 | Omnipotent agent preset for DeepSeek Harness: Standard/PTC/Minimal + routing modes |
| 70 | [Ares-song-RD/dsh-desktop-pet](https://github.com/Ares-song-RD/dsh-desktop-pet) | 1 | 2026-08-25 | 2026-08-25 | 桌宠插件：在 DeepSeek Harness Web 界面右下角悬浮一只可拖拽、会眨眼摇尾的小猫。A cute desktop pet plugin for the DeepSeek Harness Web GUI. |
| 71 | [artwar2020/dsh-model-center](https://github.com/artwar2020/dsh-model-center) | 1 | 2026-08-25 | 2026-08-25 | DSH 模型中心插件：免费模型目录 / 真免费实测 / 价格余额 / 一键切换 / 用量统计 — Model center plugin for DeepSeek Harness |
| 72 | [bitterSmilezzz/dsh-plugins](https://github.com/bitterSmilezzz/dsh-plugins) | 1 | 2026-08-18 | 2026-08-25 | DSH 插件伞仓库（DSH Plugin Umbrella）— 所有新增插件的共同遵循仓库：承载插件契约（Pi / DSH 官方 / DSH-Store 准入 / dsh-std 协议）+ 按契约自动校验自有插件（GitHub Actions），经验档案按主题归档。 |
| 73 | [caseyyy/dsh-goal-planner](https://github.com/caseyyy/dsh-goal-planner) | 1 | 2026-08-25 | 2026-08-25 | 目标驱动的每日任务计划器：多目标任务数据 + Web 每日预览面板，与微信提醒推送共享数据 · Goal-driven daily task planner for DSH: multi-goal tasks + daily preview panel, one data file with the WeChat reminder pipeline. |
| 74 | [cking000bigdemon/dsh-acp-interactive](https://github.com/cking000bigdemon/dsh-acp-interactive) | 1 | 2026-08-25 | 2026-08-25 | 面向 Zed 等编辑器的 DeepSeek Harness 交互式 ACP 插件。 |
| 75 | [czx1111/dsh-plugin-manager](https://github.com/czx1111/dsh-plugin-manager) | 1 | 2026-08-22 | 2026-08-25 | dsh-plugin-manager |
| 76 | [ddtcorex/dsh-maestro-mobile](https://github.com/ddtcorex/dsh-maestro-mobile) | 1 | 2026-08-24 | 2026-08-25 | Portrait & mobile adaptation for the DeepSeek Harness Web UI — overlay drawer, full-width conversation, sheet dialogs, safe-area handling. Below 1024px it adapts; at ≥1024px it is a no-op. |
| 77 | [dfzjb/whalemaid-desktop-pet](https://github.com/dfzjb/whalemaid-desktop-pet) | 1 | 2026-08-24 | 2026-08-25 | 像素风蓝发鲸鱼女仆桌面宠物 · DSH Agent 桌面入口 · Electron + TypeScript |
| 78 | [dongsheng123132/dsh-attestation-proof](https://github.com/dongsheng123132/dsh-attestation-proof) | 1 | 2026-08-25 | 2026-08-25 | Offline content-addressed DSSE/in-toto attestation proof for DeepSeek Harness |
| 79 | [Entity-Him/dsh-doc-quick](https://github.com/Entity-Him/dsh-doc-quick) | 1 | 2026-08-25 | 2026-08-25 | Drag documents into the dsh web chat for direct local-file processing; a right sidebar lists outputs and file paths. 拖拽文档进 Web 对话框快速处理，右侧侧栏展示产出。 |
| 80 | [Entity-Him/dsh-harmonyos-market](https://github.com/Entity-Him/dsh-harmonyos-market) | 1 | 2026-08-24 | 2026-08-25 | HarmonyOS-exclusive plugin market for DeepSeek Harness — only plugins that actually run on HarmonyOS |
| 81 | [fatatalia/dsh-dreaming](https://github.com/fatatalia/dsh-dreaming) | 1 | 2026-08-18 | 2026-08-25 | dsh 梦境记忆整合插件：凌晨随机窗口把记忆梦境化（裸上下文 narrative 纯梦写作）+ 信号驱动洞察晋升 + MEMORY.md 预算管理，随 dsh web 启停 |
| 82 | [fengyungithub/dsh-short-video-studio](https://github.com/fengyungithub/dsh-short-video-studio) | 1 | 2026-08-25 | 2026-08-25 | 基于deepseek harness的类MiniMax-Design的AI视频创作工作台 |
| 83 | [goodie1972/prompt-optimizer](https://github.com/goodie1972/prompt-optimizer) | 1 | 2026-08-24 | 2026-08-25 | 🔮 Multi-tool AI prompt optimizer plugin for ZCode, Claude Code, Codex CLI, Reasonix, DSH, MimoCode, OpenCode — 中文提示词优化插件 \| AI prompt optimizer plugin with /optimize command and optimize_prompt MCP tool |
| 84 | [HOWILLMAKEIT/football-mcp](https://github.com/HOWILLMAKEIT/football-mcp) | 1 | 2026-08-24 | 2026-08-25 | 面向 Claude、Codex、Cursor 和 DeepSeek Harness 的足球数据 MCP Server，支持 18 个欧洲联赛、8 个杯赛，以及比赛、积分榜、交锋、赔率和近期状态查询。 |
| 85 | [hoyyang/dsh-mall](https://github.com/hoyyang/dsh-mall) | 1 | 2026-08-25 | 2026-08-25 | DSH Mall (DSH 商场) — the complete plugin mall for DeepSeek Harness: 11,000+ #dsh-plugin catalog, smart AI-reviewed install, five-dimension scores, 9-language UI |
| 86 | [huermi/dsh-JEPA-adapter](https://github.com/huermi/dsh-JEPA-adapter) | 1 | 2026-08-24 | 2026-08-25 | 适配调用JEPA模型的插件，提供一个本地的JEPA模型项目（需要进一步训练持续学习，已完成基本工具调用），可在家用计算机配置上运行。A plugin adapted to call the JEPA model, providing a local JEPA model project (requires further training for continual learning; basic tool calling has been completed) that can run on a home computer CPU. |
| 87 | [hw-cola/dsh-remote-control](https://github.com/hw-cola/dsh-remote-control) | 1 | 2026-08-25 | 2026-08-25 | DSH插件，手机远程控制 |
| 88 | [JasonFreeLab/dsh-command-code-review](https://github.com/JasonFreeLab/dsh-command-code-review) | 1 | 2026-08-25 | 2026-08-25 | /code-review slash command for DeepSeek Harness — five parallel review lenses, per-finding confidence scoring, then a gh reply back on the pull request. |
| 89 | [JasonQQ/dsh-btw-plugin](https://github.com/JasonQQ/dsh-btw-plugin) | 1 | 2026-08-24 | 2026-08-25 | Codex-style /btw command for DeepSeek Harness: side questions answered in a conversation-seeded subagent context, without polluting the main context |
| 90 | [jkamkk/dsh-liquid-glass-input](https://github.com/jkamkk/dsh-liquid-glass-input) | 1 | 2026-08-25 | 2026-08-25 | Liquid Glass input card for the DSH web GUI: kube.io SVG refraction with coupled-spring press animation |
| 91 | [joao-paulo-santos/dsh-event-relay](https://github.com/joao-paulo-santos/dsh-event-relay) | 1 | 2026-08-24 | 2026-08-25 | Event relay: one SSE channel pushing host-side notifications to subscribed browser surfaces (server-side topic-prefix filtering, __relay/open reconnect signal) |
| 92 | [jypjypjypjyp/dsh-guardrail](https://github.com/jypjypjypjyp/dsh-guardrail) | 1 | 2026-08-25 | 2026-08-25 | DSH 插件：工具调用规范守卫（deny/warn 拦截 + 规则管理面板） |
| 93 | [kfirsch/dsh-hebrew-rtl](https://github.com/kfirsch/dsh-hebrew-rtl) | 1 | 2026-08-24 | 2026-08-25 | Hebrew RTL support for the DeepSeek Harness web UI: dominant-script block direction, bidi-safe input fields, and RTL-aware line navigation. |
| 94 | [Kian-Oraish/dsh-prompt-enchant](https://github.com/Kian-Oraish/dsh-prompt-enchant) | 1 | 2026-08-23 | 2026-08-25 | 增强提示词魔法棒:DSH Web 对话输入框的灵活自适应提示词增强插件 |
| 95 | [lansi-ai/dsh-fetch-url](https://github.com/lansi-ai/dsh-fetch-url) | 1 | 2026-08-24 | 2026-08-25 | DeepSeek Harness (DSH) 抓取工具插件 — 注册模型可调用的 fetch_url 工具，抓取任意 URL（境内直连 / 境外走代理），返回有界摘要。 |
| 96 | [lansi-ai/dsh-plugin-starter](https://github.com/lansi-ai/dsh-plugin-starter) | 1 | 2026-08-24 | 2026-08-25 | DSH plugin development starter: a loadable skill (SKILL.md) plus copy-paste templates for building dual-face (Host + Client) DSH plugins |
| 97 | [Laplace-bit/dsh-pianist](https://github.com/Laplace-bit/dsh-pianist) | 1 | 2026-08-17 | 2026-08-25 | 🎹 A DeepSeek Harness piano plugin — deterministic musical timeline, Canvas2D grand piano, sample-based audio. 让 AI 弹一曲，也是模型的本事。 |
| 98 | [longnb47/dsh-agent-gateway](https://github.com/longnb47/dsh-agent-gateway) | 1 | 2026-08-23 | 2026-08-25 | MCP stdio gateway for exposing local AGY, Codex, and OpenCode CLI agents to DeepSeek Harness (DSH). |
| 99 | [Lucasli2018/totoro-pet](https://github.com/Lucasli2018/totoro-pet) | 1 | 2026-08-24 | 2026-08-25 | DSH Web GUI 桌宠插件（悬浮 Q 版龙猫 · 喂食/抚摸/玩耍/睡觉互动养成） |
| 100 | [Max-Null/dsh-capture](https://github.com/Max-Null/dsh-capture) | 1 | 2026-08-22 | 2026-08-25 | Dual-engine screen capture for DeepSeek Harness: box-select + red-box annotation, composer insertion (SSiD shell / plain DSH getDisplayMedia) · 双引擎屏幕截图：框选 + 红框标注，图片直入会话输入框 |
| 101 | [Max-Null/dsh-plugin-center](https://github.com/Max-Null/dsh-plugin-center) | 1 | 2026-08-16 | 2026-08-25 | Plugin center for DeepSeek Harness: browse, install and update community plugins from inside the Web UI · DSH 插件管理中心：在 Web 界面浏览社区市场、一键安装与更新插件 |
| 102 | [mycyg/memory-palace](https://github.com/mycyg/memory-palace) | 1 | 2026-08-25 | 2026-08-25 | Event-based long-term memory for LLM agents — associative surfacing over query RAG. Closed-loop episodic events, budgeted injection, tiered forgetting. Claude Code hooks + DeepSeek Harness plugin, one shared .memory/ format. |
| 103 | [Nasbaye/dsh-launcher](https://github.com/Nasbaye/dsh-launcher) | 1 | 2026-08-24 | 2026-08-25 | DeepSeek Harness one-click restart plugin: status dot, reliable worker (pre-flight + health check), resume-after-restart and auto-continue on token truncation |
| 104 | [nexsjournal/dsh-desktop-app](https://github.com/nexsjournal/dsh-desktop-app) | 1 | 2026-08-17 | 2026-08-25 | Includes image recognition and generation functions. |
| 105 | [pan17/dsh-github-token-injector](https://github.com/pan17/dsh-github-token-injector) | 1 | 2026-08-24 | 2026-08-25 | DSH Web client plugin: auto-inject GitHub Authorization header on api.github.com requests to defeat shared-IP rate limits. |
| 106 | [papachong/deepseek-harness-tui](https://github.com/papachong/deepseek-harness-tui) | 1 | 2026-08-21 | 2026-08-25 | This is a standalone terminal for deepseek-harness (designed based on a plug-in approach), updated in sync with the official deepseek-harness repository, and inherits the capabilities of the official product. |
| 107 | [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) | 1 | 2026-08-25 | 2026-08-25 | DSH voice input plugin: tap Alt to talk, get text in composer. Web Speech default (zero config), optional OpenAI-compatible ASR, polish via DSH LLM. |
| 108 | [Practice019/dsh-kun-pet](https://github.com/Practice019/dsh-kun-pet) | 1 | 2026-08-15 | 2026-08-25 | Kun Like 桌宠 - DSH 桌面宠物插件 |
| 109 | [pwping/moyu_games](https://github.com/pwping/moyu_games) | 1 | 2026-08-25 | 2026-08-25 | 一款Deepseek Harness Web UI 的摸鱼游戏插件，执行任务时,在右下角位置弹窗游戏窗口，任务执行时间玩玩益智游戏 |
| 110 | [ramen-ai-dev/ramen-ai-integrations](https://github.com/ramen-ai-dev/ramen-ai-integrations) | 1 | 2026-06-26 | 2026-08-25 | Pre-execution semantic firewall for AI agents. Signed policy verdicts, BYOK, zero-trust receipts. |
| 111 | [robbywang25/dsh-codex-pins](https://github.com/robbywang25/dsh-codex-pins) | 1 | 2026-08-22 | 2026-08-25 | Codex-style pinned sessions for DeepSeek Harness — always visible above the sidebar list |
| 112 | [Rock-ql/dsh-relay-fast](https://github.com/Rock-ql/dsh-relay-fast) | 1 | 2026-08-25 | 2026-08-25 | DSH relay plugin: reasoning-effort autofill, /models sync, capability-aware Fast toggle \| DSH 中转站思考等级与 Fast 开关插件 |
| 113 | [Ruiming-cn/dsh-ask-in-sidebar](https://github.com/Ruiming-cn/dsh-ask-in-sidebar) | 1 | 2026-08-25 | 2026-08-25 | Ask a sidebar assistant about selected assistant text using the current DeepSeek Harness conversation context, without touching the main conversation. |
| 114 | [sakthiveltofficial/dsh-gmail-plugins](https://github.com/sakthiveltofficial/dsh-gmail-plugins) | 1 | 2026-08-25 | 2026-08-25 | dsh-gmail: Gmail plugin suite for DeepSeek Harness — 61 model-facing tools + 2 polling triggers over the Gmail & People APIs (OAuth2) |
| 115 | [Shizuku-keop/dsh-compat-guard](https://github.com/Shizuku-keop/dsh-compat-guard) | 1 | 2026-08-25 | 2026-08-25 | Compatibility governance for DeepSeek Harness: upgrade pre-flight gate, storage-format fingerprint,  backup, session migration, per-profile lockfile, plugin x DSH compat matrix. |
| 116 | [shuaihaoV/dsh-TheWanderingEarthII](https://github.com/shuaihaoV/dsh-TheWanderingEarthII) | 1 | 2026-08-25 | 2026-08-25 | The Wandering Earth II · 流浪地球2 — DSH Web GUI 电影风格主题：发动机点火联动、MOSS 化发送按钮、星场 HUD |
| 117 | [sryimnoob123/dsh-global-prompt](https://github.com/sryimnoob123/dsh-global-prompt) | 1 | 2026-08-25 | 2026-08-25 | DSH settings plugin for global and project AGENTS.md, identity/persona injection, and result notifications. |
| 118 | [sryimnoob123/dsh-tool-pwsh-safe](https://github.com/sryimnoob123/dsh-tool-pwsh-safe) | 1 | 2026-08-20 | 2026-08-25 | Elbow-proof PowerShell for DeepSeek Harness: pwsh_safe tool runs scripts via base64 -EncodedCommand, immune to quoting/escaping pain, sandbox-seam based |
| 119 | [sryimnoob123/dsh-web-search-ollama](https://github.com/sryimnoob123/dsh-web-search-ollama) | 1 | 2026-08-20 | 2026-08-25 | Ollama-backed web search provider for DeepSeek Harness (ctx.web) |
| 120 | [SsTtone1/dsh-message-cleaner](https://github.com/SsTtone1/dsh-message-cleaner) | 1 | 2026-08-25 | 2026-08-25 | DSH Web GUI 插件：在会话输入框上方提供历史消息记录面板，支持按条删除、原位恢复与内置节点导航条，让长会话的管理像编辑文档一样简单。 |
| 121 | [steve-magne/dsh-plugins](https://github.com/steve-magne/dsh-plugins) | 1 | 2026-08-24 | 2026-08-25 | DeepSeek Harness plugins — dual-face cordis packages extending the DSH web surface: command deck, git worktrees, one-click PRs, cron-scheduled tasks |
| 122 | [sunkeycn/dsh-desktop](https://github.com/sunkeycn/dsh-desktop) | 1 | 2026-08-25 | 2026-08-25 | Native macOS desktop wrapper for DeepSeek Harness with plugin management and FRP remote access |
| 123 | [tma1-ai/dsh-otel](https://github.com/tma1-ai/dsh-otel) | 1 | 2026-08-25 | 2026-08-25 | OpenTelemetry traces, metrics, and logs for DeepSeek Harness, written straight into GreptimeDB |
| 124 | [treers2/qq-operations](https://github.com/treers2/qq-operations) | 1 | 2026-08-25 | 2026-08-25 | QQ NT desktop automation for DeepSeek Harness (DSH) skill - dynamic UI Automation locate, dual mode, self-check; 操控 QQ NT 桌面版的 DSH skill（UIA 类名定位/双模式/自检） |
| 125 | [trrrrrryg/dsh-remote-workspace](https://github.com/trrrrrryg/dsh-remote-workspace) | 1 | 2026-08-24 | 2026-08-25 | 为 DeepSeek Harness（DSH）提供 SSH 远程工作区能力：已核验的服务器身份、失败关闭的 Agent 执行路由、远端文件与命令操作；提供 Windows 离线一键安装包，无需 Node.js 或构建工具。 |
| 126 | [v587d/dsh-LLM-quotes](https://github.com/v587d/dsh-LLM-quotes) | 1 | 2026-08-25 | 2026-08-25 | Latest LLM provider API prices, right inside DeepSeek Harness (dsh) → Settings → Models.最新的大模型（LLM）厂商 API 价格，直接显示在 DeepSeek Harness（dsh） 的 设置 → 模型 页面中。 |
| 127 | [vanhungbui-11/dsh-wallpaper-bridge](https://github.com/vanhungbui-11/dsh-wallpaper-bridge) | 1 | 2026-08-25 | 2026-08-25 | Wallpaper Engine bridge for DeepSeek Harness (DSH) on Windows |
| 128 | [Wanbinyu/dsh-companion](https://github.com/Wanbinyu/dsh-companion) | 1 | 2026-08-21 | 2026-08-25 | Local state-aware desktop companion and task-status overlay for DeepSeek Harness Web |
| 129 | [weshopai/weshop-skill-package](https://github.com/weshopai/weshop-skill-package) | 1 | 2026-08-20 | 2026-08-25 | Creative AI Skills for Codex, Claude Code, Cursor, Deepseek harness and any Agent Skills-compatible runtime. |
| 130 | [wilburli/onlyMemory-plugin](https://github.com/wilburli/onlyMemory-plugin) | 1 | 2026-08-25 | 2026-08-25 | 零外部依赖的 LLM 长期记忆插件，专为 [DeepSeek Harness] 设计。 |
| 131 | [yhyfhgs/dsh-model-hub](https://github.com/yhyfhgs/dsh-model-hub) | 1 | 2026-08-25 | 2026-08-25 | DeepSeek Harness plugin: provider sign-in, model catalog, and selection routing over a loopback-only /model-hub channel |
| 132 | [YJLTF/dsh-plugin-offline-packager](https://github.com/YJLTF/dsh-plugin-offline-packager) | 1 | 2026-08-25 | 2026-08-25 | DeepSeek Harness 离线打包插件 — 在联网环境下将 DSH 插件打包为离线安装包（.tgz），传输到离线 DSH 环境中加载安装。 |
| 133 | [Zh1rV/dsh-web-search-tavily](https://github.com/Zh1rV/dsh-web-search-tavily) | 1 | 2026-08-24 | 2026-08-25 | DeepSeek Harness 的 Tavily 搜索插件 |
| 134 | [zhubaohi/dsh-qwen38-compaction-fix](https://github.com/zhubaohi/dsh-qwen38-compaction-fix) | 1 | 2026-08-25 | 2026-08-25 | DSH plugin: stop qwen3.8-27b from burning its output budget on thinking during context compaction |
| 135 | [zmm863-commits/dsh-paperclip](https://github.com/zmm863-commits/dsh-paperclip) | 1 | 2026-08-16 | 2026-08-25 | DSH Web GUI paperclip button: a single 📎 button in the composer that opens a file picker (drag & drop supported) and inserts file contents into the textarea. 在 DSH Web 输入框右侧添加回形针按钮，点击选择/拖拽文件，内容自动插入输入框。 |
| 136 | [0231071/llm-as-a-verifier](https://github.com/0231071/llm-as-a-verifier) | 0 | 2026-08-25 | 2026-08-25 | LLM-as-a-Verifier plugin for DeepSeek Harness (DSH): best-of-N 候选并行生成 + 概率枢轴锦标赛(PPT)验证器择优, 官方样式设置卡片, lav_status/lav_set 会话工具 \| DSH 插件: 让 AI 回答经过多候选验证器选优 |
| 137 | [0N3-0/dsh-tui-mcp-manager](https://github.com/0N3-0/dsh-tui-mcp-manager) | 0 | 2026-08-25 | 2026-08-25 | 在dsh-TUI提供/mcp-manager命令，可以热插拔、实时配置mcp |
| 138 | [1024483906-pixel/dsh-novel-reader](https://github.com/1024483906-pixel/dsh-novel-reader) | 0 | 2026-08-25 | 2026-08-25 | DSH休闲阅读文本插件 |
| 139 | [142gg-GZX/unity-dsh-bridge](https://github.com/142gg-GZX/unity-dsh-bridge) | 0 | 2026-08-25 | 2026-08-25 | DSH plugin: control Unity / Tuanjie editor over a local HTTP bridge — build scenes, write C#, compile, play, screenshot, simulate input. |
| 140 | [a805026135/dsh-constellation](https://github.com/a805026135/dsh-constellation) | 0 | 2026-08-25 | 2026-08-25 | A live, self-organizing constellation map of your DeepSeek Harness plugin universe — AI-balanced taxonomy, bilingual labels, instant search, health diagnostics, and one-click plugin operations. |
| 141 | [aa2246740/dsh-cuadrive-mac](https://github.com/aa2246740/dsh-cuadrive-mac) | 0 | 2026-08-20 | 2026-08-25 | macOS-only DeepSeek Harness plugin: private cua-driver computer-use for DSH |
| 142 | [aa2246740/dsh-dragndrop-attachments](https://github.com/aa2246740/dsh-dragndrop-attachments) | 0 | 2026-08-24 | 2026-08-25 | Codex-style drag-and-drop files, folders, ZIP and Office attachments for DeepSeek Harness |
| 143 | [aa2246740/dsh-files-panel](https://github.com/aa2246740/dsh-files-panel) | 0 | 2026-08-18 | 2026-08-25 | Community DeepSeek Harness plugin: right-side workspace file tree. Does not patch DSH core. |
| 144 | [aa2246740/dsh-gateway](https://github.com/aa2246740/dsh-gateway) | 0 | 2026-08-25 | 2026-08-25 | One DSH Host, one messaging Gateway. Bring your own Slack and Feishu apps. |
| 145 | [aa2246740/dsh-grok-plan-mode](https://github.com/aa2246740/dsh-grok-plan-mode) | 0 | 2026-08-21 | 2026-08-25 | Full Grok Build Plan Mode port for DeepSeek Harness. Replaces official DSH Plan with Grok's state machine, plan.md edit gate, enter/exit tools, and review surface. |
| 146 | [aa2246740/dsh-image-conatiner](https://github.com/aa2246740/dsh-image-conatiner) | 0 | 2026-08-19 | 2026-08-25 | Codex-style generated-image gallery and lightbox for DeepSeek Harness |
| 147 | [aa2246740/dsh-resume](https://github.com/aa2246740/dsh-resume) | 0 | 2026-08-20 | 2026-08-25 | Continue Codex, Claude Code, and Cursor work in DeepSeek Harness |
| 148 | [aa2246740/pstack-dsh](https://github.com/aa2246740/pstack-dsh) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness port of official pstack. Playbooks and principles are poteto's; only the harness call layer is rewritten. |
| 149 | [alaxrpg/dsh-adaptive-model-router](https://github.com/alaxrpg/dsh-adaptive-model-router) | 0 | 2026-08-14 | 2026-08-25 | Adaptive model discovery, evaluation, tiering, and subagent routing for DeepSeek Harness |
| 150 | [alexfengrui/dsh-client-ui-skin-real-madrid](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid) | 0 | 2026-08-25 | 2026-08-25 | Real Madrid dual-mode skin for DeepSeek Harness: Bernabeu night stadium (dark) and white-kit pinstripes (light). Unofficial fan work. |
| 151 | [AlexKaiqi/dsh-temporary-workspace](https://github.com/AlexKaiqi/dsh-temporary-workspace) | 0 | 2026-08-18 | 2026-08-25 | Isolated temporary Workspaces for DeepSeek Harness |
| 152 | [AliceLJY/dsh-thumb](https://github.com/AliceLJY/dsh-thumb) | 0 | 2026-08-21 | 2026-08-25 | A phone shell for the DeepSeek Harness (dsh) web GUI — sidebar becomes an overlay drawer, settings goes full-screen single column. Zero hardcoded host class hashes. |
| 153 | [anzhaohao/DragView](https://github.com/anzhaohao/DragView) | 0 | 2026-08-24 | 2026-08-25 | Drag-and-drop file attachments and secure in-app previews for DSH. |
| 154 | [ArmyWas/dsh-codex-compat-canary](https://github.com/ArmyWas/dsh-codex-compat-canary) | 0 | 2026-08-25 | 2026-08-25 | Detect Codex App Server protocol drift that DeepSeek Harness cannot safely interpret. |
| 155 | [Asher-2000/dsh-artist-mode](https://github.com/Asher-2000/dsh-artist-mode) | 0 | 2026-08-22 | 2026-08-25 | DSH 艺术家模式 — 对话式设计交付预设（HTML 原生设计 / 反 AI slop / 5维评审 / Agnes AI 生图生视频） |
| 156 | [Asher-2000/dsh-inline-images](https://github.com/Asher-2000/dsh-inline-images) | 0 | 2026-08-24 | 2026-08-25 | 对话内联图片/视频:LLM 回复中输出的本地图片路径在消息正文直接渲染,视频可点击播放。修复增强版(URL自动修正/刷新持久化/反向代理兼容)。 |
| 157 | [AwesomeHou/dsh-trace-collapse](https://github.com/AwesomeHou/dsh-trace-collapse) | 0 | 2026-08-15 | 2026-08-25 | DeepSeek Harness web plugin: collapse the agent trajectory while always keeping the agent's final output; default-collapse after final output is on by default (configurable in Settings). |
| 158 | [Bacskat/dsh-claude-ui](https://github.com/Bacskat/dsh-claude-ui) | 0 | 2026-08-25 | 2026-08-25 | A Claude-flavored visual theme for the DeepSeek Harness Web GUI. |
| 159 | [BaiLiang-233/dsh-off-peak-schedule-widget](https://github.com/BaiLiang-233/dsh-off-peak-schedule-widget) | 0 | 2026-08-25 | 2026-08-25 | 价格时段输入队列调度 Harness 插件（dsh-plugin）：高峰拦截输入进休眠区，低谷按队列投递到目标对话 |
| 160 | [baiyuscc13724-max/dsh-godot-preview](https://github.com/baiyuscc13724-max/dsh-godot-preview) | 0 | 2026-08-25 | 2026-08-25 | Independent Godot 4 Web and native preview plugin for DeepSeek Harness |
| 161 | [birdmanhj/dsh-mv-session](https://github.com/birdmanhj/dsh-mv-session) | 0 | 2026-08-25 | 2026-08-25 | A plug-in for Deepseek Harness that easy to move/rename session from old workspace to new workspace. |
| 162 | [boheastill/phone-eye](https://github.com/boheastill/phone-eye) | 0 | 2026-08-25 | 2026-08-25 | Let your AI agent see and operate a real Android phone — vision + UI-tree fusion over adb, for any MCP client (Claude Code, Codex, dsh…) |
| 163 | [change979666/ox-alpha-dsh](https://github.com/change979666/ox-alpha-dsh) | 0 | 2026-08-25 | 2026-08-25 | [Model Hub for DSH] Lightweight model/provider integration toolkit for DeepSeek Harness Desktop - one plugin installs Ox Alpha (stealth/ox-alpha), plus custom models, custom OpenAI-compatible providers, health check, discovery and rollback. bilingual zh/en |
| 164 | [chemmy-11/dsh-xuegulin](https://github.com/chemmy-11/dsh-xuegulin) | 0 | 2026-08-24 | 2026-08-25 | Vault observation plugin for DeepSeek Harness: Obsidian vault metadata snapshot + edit stats + observation panel |
| 165 | [chenyedamw/dropshipping-product-scout](https://github.com/chenyedamw/dropshipping-product-scout) | 0 | 2026-08-22 | 2026-08-25 | Dropshipping Product Scout MCP 服务的 Claude Code 插件 —— 精选商品搜索、库存查询与物流估算  |
| 166 | [cherrchen/dsh-client-ui-details-host](https://github.com/cherrchen/dsh-client-ui-details-host) | 0 | 2026-08-24 | 2026-08-25 | 可移植 DSH Client Details 栏基础设施，在 AppFrame 详情列承载活动 surface；DeepSeek Harness Desktop 内置。 / Portable DSH Client details-column infrastructure for one active AppFrame surface; built into DeepSeek Harness Desktop. |
| 167 | [cherrchen/dsh-plugin-git](https://github.com/cherrchen/dsh-plugin-git) | 0 | 2026-08-23 | 2026-08-25 | DSH Git 仓库服务与 Client UI 插件，依赖 Details Host；DeepSeek Harness Desktop 预装。 / DSH Git repository service and client UI; requires Details Host; pre-installed in DeepSeek Harness Desktop. |
| 168 | [Cinnamobot/dsh-disclosure-tweaks](https://github.com/Cinnamobot/dsh-disclosure-tweaks) | 0 | 2026-08-25 | 2026-08-25 | Auto-expand/collapse DSH conversation disclosure rows (Think, tool calls, context, todo, queue) with per-type Settings toggles. Manual toggles are never overridden. |
| 169 | [Cinnamobot/dsh-nothing-skin](https://github.com/Cinnamobot/dsh-nothing-skin) | 0 | 2026-08-25 | 2026-08-25 | Nothing Phone style skin for DeepSeek Harness — dot-matrix background, Space Grotesk/Mono, monochrome + signal red, per-feature Settings toggles |
| 170 | [Circleyan/whiteboat-dsh](https://github.com/Circleyan/whiteboat-dsh) | 0 | 2026-08-25 | 2026-08-25 | Whiteboat for DeepSeek Harness; the quiet water surface is the first feature slice. |
| 171 | [ConTr0L0/dsh-balance-monitor](https://github.com/ConTr0L0/dsh-balance-monitor) | 0 | 2026-08-22 | 2026-08-25 | dsh-balance-monitor 是 DeepSeek Harness（DSH）的插件：在侧边栏实时显示 API 余额，按官方峰谷价目（每日自动从 DeepSeek 官方文档同步）精确计算每次请求成本，按会话/模型/日期拆分消耗统计，并支持每日、累计、请求次数三类上限（可硬拦截后续 LLM 请求）。Web 端与桌面端通用，计费口径已与 DeepSeek 平台账单逐项对账 |
| 172 | [daetz-coder/DSH-Mobile](https://github.com/daetz-coder/DSH-Mobile) | 0 | 2026-08-24 | 2026-08-25 | DSH-Mobile · 把 DeepSeek Harness 装进口袋 — scan-to-pair Android companion for the official DeepSeek Harness Web UI. DeepSeek Harness 手机配套：扫码配对、状态通知、桌面远程控制。 |
| 173 | [DavidRm1911/dsh-llm-subscription](https://github.com/DavidRm1911/dsh-llm-subscription) | 0 | 2026-08-24 | 2026-08-25 | Native DeepSeek Harness LLM adapter for Claude Code / Antigravity CLI subscriptions — no API key |
| 174 | [DavidRm1911/dsh-subscription-gateway](https://github.com/DavidRm1911/dsh-subscription-gateway) | 0 | 2026-08-24 | 2026-08-25 | OpenAI-compatible gateway that lets DeepSeek Harness use your existing Claude Code / Antigravity / Ollama logins instead of a paid API key |
| 175 | [dongsheng123132/dsh-retention-settlement-proof](https://github.com/dongsheng123132/dsh-retention-settlement-proof) | 0 | 2026-08-25 | 2026-08-25 | Body-free retention settlement and non-resurrection evidence for DeepSeek Harness |
| 176 | [dubeno/dsh-agent-plugin-bridge](https://github.com/dubeno/dsh-agent-plugin-bridge) | 0 | 2026-08-20 | 2026-08-25 | 将符合Agent Plugin规范的插件适配到DSH生态 |
| 177 | [dujar/dsh-community-plugins](https://github.com/dujar/dsh-community-plugins) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness web-GUI plugin: discover and install community plugins from the dsh-plugin topic — searchable SQLite catalog, fork browser, local-plugin installs |
| 178 | [dujar/dsh-restart](https://github.com/dujar/dsh-restart) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness web-GUI plugin: restart dsh web in one click, toggle installed plugins, git panel for local checkouts |
| 179 | [elevenmoon999/dsh-clash-proxy](https://github.com/elevenmoon999/dsh-clash-proxy) | 0 | 2026-08-25 | 2026-08-25 | 智能分流 · 自包含 · 上手简单 —— DeepSeek Harness 规则分流代理插件（国内直连 / 国外走订阅节点），完全由 AI 生成。 |
| 180 | [Emilia-awa/hermes-dsh-bridge](https://github.com/Emilia-awa/hermes-dsh-bridge) | 0 | 2026-08-24 | 2026-08-25 | Hermes ↔ DeepSeek Harness MCP bridge: drive dsh agents (tasks, sessions, files, presets, stats) from any MCP client. Hermes = brain, Harness = arms. |
| 181 | [entireyu/dsh-webui-plus](https://github.com/entireyu/dsh-webui-plus) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness Webui 增强插件，自带对话锚点、归档任务等功能 |
| 182 | [Fabian-698/dsh-plugin-dev](https://github.com/Fabian-698/dsh-plugin-dev) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness (DSH) plugin development agent skill: 6 form typology, verify-plugin.mjs P1-P13 gate, scaffold generator, security discipline, and curated ecosystem backfills. An Agent Skill (SKILL.md), not an npm bundle. |
| 183 | [fatatalia/dsh-ledger](https://github.com/fatatalia/dsh-ledger) | 0 | 2026-08-18 | 2026-08-25 | dsh 只读记账仪表盘插件：会话页「记账」Tab 展示 beancount 账本月度快照（收支总览/资产结构动态分组/支出分类/最近交易），只读，复用 ledger.py，Fava 保留做深度分析 |
| 184 | [fatatalia/dsh-turn-guard](https://github.com/fatatalia/dsh-turn-guard) | 0 | 2026-08-23 | 2026-08-25 | dsh turn-guard plugin: per-step timeout for agent turns (防模型退化死循环) |
| 185 | [firestige/execution-system](https://github.com/firestige/execution-system) | 0 | 2026-08-17 | 2026-08-25 | Host-neutral execution boundary for workflow-self-recursive: resolves one exact Workflow Package, binds an immutable Delivery Manifest, coordinates the Delivery, emits bounded OTLP observations. Install via dsh plugin add wsr-dsh-intake · 与宿主无关的 Agent 工作流执行边界：解析并校验确定的工作流包，绑定不可变交付清单，协调交付并发出有界观测。 |
| 186 | [Fisfzy/dsh-danus](https://github.com/Fisfzy/dsh-danus) | 0 | 2026-08-23 | 2026-08-25 | Verifier-gated multi-agent mathematical proof-search orchestration, native to DeepSeek Harness: content-addressed fact graph, role-gated tools, cold-start verifier, worker swarm, paper/report rendering. TypeScript, cross-platform. Based on Danus (frenzymath). |
| 187 | [Flonger/dsh-balance-vision](https://github.com/Flonger/dsh-balance-vision) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek balance & session cost for DSH web UI, with official weekday peak/off-peak pricing and deepseek-v4-flash-vision-exp vision model support (same rate as flash) |
| 188 | [fplj-fplj/dsh-ua-headers](https://github.com/fplj-fplj/dsh-ua-headers) | 0 | 2026-08-23 | 2026-08-25 | 为 DeepSeek Harness (DSH) 定制的 User-Agent 与请求头插件：按模型匹配改写 UA / 合并自定义请求头，遵循 dsh-ecosystem-spec 生态规范。A dsh-ecosystem-spec compliant plugin to customize User-Agent and request headers per model. |
| 189 | [Fz2hOpenSource/firmware-forge](https://github.com/Fz2hOpenSource/firmware-forge) | 0 | 2026-08-24 | 2026-08-25 | 基于 DSH 的 AI 嵌入式固件工程工作台，覆盖固件设计、协议设计、测试验证、编译、烧录与调试闭环。 |
| 190 | [Gaochenyuen/dsh-scopus-searcher](https://github.com/Gaochenyuen/dsh-scopus-searcher) | 0 | 2026-08-24 | 2026-08-25 | Deep literature research agent as a Deepseek-Harness preset powered by Scopus API. |
| 191 | [gavenma/dsh-autoresearch-preset](https://github.com/gavenma/dsh-autoresearch-preset) | 0 | 2026-08-25 | 2026-08-25 | AutoResearch Project Mode preset for DeepSeek Harness. |
| 192 | [GooDAnDReaDY/dsh-lanmode](https://github.com/GooDAnDReaDY/dsh-lanmode) | 0 | 2026-08-20 | 2026-08-25 | Settings over the LAN for DeepSeek Harness |
| 193 | [GooDAnDReaDY/dsh-model-sync](https://github.com/GooDAnDReaDY/dsh-model-sync) | 0 | 2026-08-23 | 2026-08-25 | Automatic model catalog synchronization for API-key DeepSeek Harness providers: refreshes the model list from the provider instead of hand-editing it |
| 194 | [GooDAnDReaDY/dsh-subscriptions](https://github.com/GooDAnDReaDY/dsh-subscriptions) | 0 | 2026-08-21 | 2026-08-25 | OAuth subscription LLM providers for DeepSeek Harness (Codex, Claude, Grok, Antigravity) |
| 195 | [GooDAnDReaDY/dsh-usage-guard](https://github.com/GooDAnDReaDY/dsh-usage-guard) | 0 | 2026-08-24 | 2026-08-25 | Keeps a malformed token-usage sample from taking a whole session history down with it: a missing counter is recovered or zeroed before the harness folds it, so replay never yields NaN. |
| 196 | [GuoFengyu110429/dsh-high-fee-alert](https://github.com/GuoFengyu110429/dsh-high-fee-alert) | 0 | 2026-08-24 | 2026-08-25 | 一个由DSH制作的插件，用于在峰谷中的峰时段进行提醒以节省费用。 |
| 197 | [HaoyueQin/dsh-diff-stat](https://github.com/HaoyueQin/dsh-diff-stat) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness web plugin: inline +N −M diff badges on edit/write tool rows and a per-turn file change summary card. Scroll-windowed diffs, PTC/code-dispatch fallback, undo — no git required. |
| 198 | [HellowVirgil/dsh-antv-ava](https://github.com/HellowVirgil/dsh-antv-ava) | 0 | 2026-08-25 | 2026-08-25 | AntV AVA plugin for DeepSeek Harness with streaming narrative text and charts |
| 199 | [HenryHwong/dsh-ui-billing](https://github.com/HenryHwong/dsh-ui-billing) | 0 | 2026-08-25 | 2026-08-25 | Billing widget plugin for the DeepSeek Harness Web GUI: current-session cost and API balance at the sidebar foot (dsh-plugin) |
| 200 | [HenryHwong/dsh-ui-turn-rail](https://github.com/HenryHwong/dsh-ui-turn-rail) | 0 | 2026-08-25 | 2026-08-25 | Turn progress rail plugin for the DeepSeek Harness Web GUI (dsh-plugin) |
| 201 | [henrytang2011win-coder/dsh-task-sounds](https://github.com/henrytang2011win-coder/dsh-task-sounds) | 0 | 2026-08-25 | 2026-08-25 | 为你的DeepSeek harness添加任务结束和提问时的提示音 |
| 202 | [honlnk/dsh-input-assist](https://github.com/honlnk/dsh-input-assist) | 0 | 2026-08-23 | 2026-08-25 | Input assistant for DeepSeek Harness Web UI: inline AI completion (FIM) and Chinese-friendly typo checking |
| 203 | [hzpeng57/dsh-lens-rail](https://github.com/hzpeng57/dsh-lens-rail) | 0 | 2026-08-25 | 2026-08-25 | Codex-style left message navigation rail for DeepSeek Harness |
| 204 | [icearia0219/dsh-memory-spaces](https://github.com/icearia0219/dsh-memory-spaces) | 0 | 2026-08-25 | 2026-08-25 | Human-governed cross-session memory spaces for DeepSeek Harness with provenance, versioning, and injection preview. |
| 205 | [inoricon1/dsh-frontier-math](https://github.com/inoricon1/dsh-frontier-math) | 0 | 2026-08-25 | 2026-08-25 | Evidence-gated frontier mathematics research workflow for DeepSeek Harness |
| 206 | [ivvan3016/dsh-ui-pricing](https://github.com/ivvan3016/dsh-ui-pricing) | 0 | 2026-08-24 | 2026-08-25 | user-configurable cost pricing for dsh |
| 207 | [jer67107-cyber/dsh-skin-chengzi](https://github.com/jer67107-cyber/dsh-skin-chengzi) | 0 | 2026-08-24 | 2026-08-25 | 橙子 · 深海蓝调 — DSH Web 皮肤中心深海蓝护眼皮肤（Deep sea blue skin for DSH web skin-center） |
| 208 | [jerryqx/dsh-ximalaya](https://github.com/jerryqx/dsh-ximalaya) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness 喜马拉雅播客插件：搜索/播放/收藏 + ximalaya_play 模型工具 |
| 209 | [JuwanXu/dsh-camel](https://github.com/JuwanXu/dsh-camel) | 0 | 2026-08-25 | 2026-08-25 | Configurable rate-limit resilience bundle for DeepSeek Harness free models. |
| 210 | [JuwanXu/dsh-continue](https://github.com/JuwanXu/dsh-continue) | 0 | 2026-08-25 | 2026-08-25 | Safe configurable continuation and network recovery bundle for DeepSeek Harness. |
| 211 | [jypjypjypjyp/dsh-agent-teams](https://github.com/jypjypjypjyp/dsh-agent-teams) | 0 | 2026-08-19 | 2026-08-25 | AgentTeams plugin for DeepSeek Harness |
| 212 | [k-ying/dsh-vsceditor](https://github.com/k-ying/dsh-vsceditor) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness 内嵌 VSCode 编辑器插件：嵌入完整 code-server，agent 写文件时自动弹出红绿 diff 跟随（edit sync / file locking / follow mode） |
| 213 | [KakaruHayate/dsh-degen-heal](https://github.com/KakaruHayate/dsh-degen-heal) | 0 | 2026-08-25 | 2026-08-25 | Detect and self-heal LLM output degeneration loops inside a DeepSeek Harness agent session. |
| 214 | [kanchengw/dsh-assembly.resume](https://github.com/kanchengw/dsh-assembly.resume) | 0 | 2026-08-25 | 2026-08-25 | Import local Codex and Claude sessions into DeepSeek Harness |
| 215 | [kane-le/dsh-deepseek-usage](https://github.com/kane-le/dsh-deepseek-usage) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek API 用量与余额查看插件（DSH Plugin）· /usage 命令实时查询余额并汇总本机 token 用量 |
| 216 | [KeS1Ke/dsh-exit](https://github.com/KeS1Ke/dsh-exit) | 0 | 2026-08-24 | 2026-08-25 | A focused DeepSeek Harness web plugin that adds a safe, confirmed host-exit control. |
| 217 | [Kevoyuan/dsh-trading212](https://github.com/Kevoyuan/dsh-trading212) | 0 | 2026-08-24 | 2026-08-25 | Read-only Trading 212 portfolio dashboard and dsh tools for holdings, history, risk, and trade markers. |
| 218 | [kongdexu/dsh-win-notify](https://github.com/kongdexu/dsh-win-notify) | 0 | 2026-08-25 | 2026-08-25 | Real Windows OS toasts for DeepSeek Harness: task-finished / needs-input / needs-approval alerts in Notification Center. Windows-only, zero runtime dependencies. |
| 219 | [kovey/dsh-nvim-tui](https://github.com/kovey/dsh-nvim-tui) | 0 | 2026-08-21 | 2026-08-25 | dsh's tui base on nvim |
| 220 | [krystal-cao/deepseek-harness-swift](https://github.com/krystal-cao/deepseek-harness-swift) | 0 | 2026-08-25 | 2026-08-25 | 基于 AppKit、SwiftUI 与 WKWebView 的 DSH 原生 macOS 桌面壳，提供设置中心、DSH 版本管理、插件管理、通知和 Sparkle 应用更新。 |
| 221 | [L1ttleBad/dsh-multi-task](https://github.com/L1ttleBad/dsh-multi-task) | 0 | 2026-08-25 | 2026-08-25 | A prototype Multi-task Agent Preset for DeepSeek Harness. |
| 222 | [lcsdg/dsh-quick-prompts](https://github.com/lcsdg/dsh-quick-prompts) | 0 | 2026-08-25 | 2026-08-25 | Quick-prompts bar for DeepSeek Harness (dsh): per-category snippet chips above the composer, orange placeholder highlighting, two-column prompt/category management, and per-session category memory. |
| 223 | [lemoncat7/dsh-remote-settings-compat](https://github.com/lemoncat7/dsh-remote-settings-compat) | 0 | 2026-08-22 | 2026-08-25 | Remote settings compatibility plugin for DeepSeek Harness |
| 224 | [lemoncat7/dsh-ssh](https://github.com/lemoncat7/dsh-ssh) | 0 | 2026-08-23 | 2026-08-25 | SSH sessions, SFTP, terminals, proxies and port forwarding for DeepSeek Harness |
| 225 | [lemoncat7/dsh-web-search](https://github.com/lemoncat7/dsh-web-search) | 0 | 2026-08-25 | 2026-08-25 | Configurable and secure multi-provider web search for DeepSeek Harness |
| 226 | [lianginx/dsh-timeline-enhance](https://github.com/lianginx/dsh-timeline-enhance) | 0 | 2026-08-25 | 2026-08-25 | DSH Web UI plugin: auto-fold chat timeline processes + Deep diving fun tips |
| 227 | [liangzhipengdamon-maker/GovernLoop-DSH](https://github.com/liangzhipengdamon-maker/GovernLoop-DSH) | 0 | 2026-08-23 | 2026-08-25 | GovernLoop-DSH automatically connects DeepSeek Harness agents to independent ChatGPT review with checkpoints and evidence. |
| 228 | [lihaoran0412/dsh-narrative-engine](https://github.com/lihaoran0412/dsh-narrative-engine) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness 沉浸叙事双向创作引擎：导入小说为可游玩世界，游玩后反向写成同人小说。仅处理虚构成年人(18+/adult)。 |
| 229 | [lionheartjie/DSH_Shell](https://github.com/lionheartjie/DSH_Shell) | 0 | 2026-08-23 | 2026-08-25 | DeepSeek Harness 的 Rust/Tauri 套壳 |
| 230 | [liuke-zhu/zhenxin-ai-video-manager](https://github.com/liuke-zhu/zhenxin-ai-video-manager) | 0 | 2026-08-25 | 2026-08-25 | 真的爱你：本地智能视频管家 Skill —— 说一句「真的爱你」，接管从素材分析到成片交付的完整剪辑流程 |
| 231 | [lovezi0/dsh-model-extension](https://github.com/lovezi0/dsh-model-extension) | 0 | 2026-08-24 | 2026-08-25 | DSH自定义模型提供商时无法设置推理模式与多模态，可通过扩展插件解决 |
| 232 | [luckybilly/dsh-split-view](https://github.com/luckybilly/dsh-split-view) | 0 | 2026-08-25 | 2026-08-25 | 一个插件把 DeepSeek Harness 主窗口变成多个分屏，同时查看多个会话的状态。再也不用在会话列表里切来切去了。 |
| 233 | [lurejewel/dsh-usage-plugin](https://github.com/lurejewel/dsh-usage-plugin) | 0 | 2026-08-25 | 2026-08-25 | Lightweight, native sidebar usage panel for DeepSeek Harness: official balance + token usage history from session logs. |
| 234 | [lw-storm/dsh-plugin-version-management](https://github.com/lw-storm/dsh-plugin-version-management) | 0 | 2026-08-24 | 2026-08-25 | This plugin provides version management and rollback capabilities. When another plugin causes an error that prevents DSH from launching, forcing you to clear all plugins, this plugin can quickly restore every locally saved plugin configuration. |
| 235 | [MaRi23333/dsh-grok-kit](https://github.com/MaRi23333/dsh-grok-kit) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness 的 Grok 插件：OAuth 登录、主循环融合网页/X 搜索与 Imagine。第三方非官方项目。 |
| 236 | [Marsax110/dsh-model-fixer](https://github.com/Marsax110/dsh-model-fixer) | 0 | 2026-08-25 | 2026-08-25 | 模型无关的沙箱升级修正 + 按模型定制的协议提示段：任何模型（GPT 系最常见）在工具调用中错误携带 sandbox_permissions/justification 导致 'not strictly wider' 死循环时自动剥离；并按会话模型动态注入适配提示段。非 bundle 插件，HMR 实时生效。 |
| 237 | [marshfolx/dsh-rescue-tui](https://github.com/marshfolx/dsh-rescue-tui) | 0 | 2026-08-24 | 2026-08-25 | a minimal emergency maintenance tui used when web ui is broken |
| 238 | [masknull/dsh-session-prompt](https://github.com/masknull/dsh-session-prompt) | 0 | 2026-08-23 | 2026-08-25 | DSH plugin: inject a user-configurable prompt at the very top of every session's system prompt, editable from the settings page |
| 239 | [mengxingGG/dsh-plugin-marketplace](https://github.com/mengxingGG/dsh-plugin-marketplace) | 0 | 2026-08-25 | 2026-08-25 | GitHub plugin discovery and one-click profile installation for DeepSeek Harness |
| 240 | [Minglink/dsh-better-sidebar](https://github.com/Minglink/dsh-better-sidebar) | 0 | 2026-08-25 | 2026-08-25 | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面 |
| 241 | [Minglink/dsh-deep-whale](https://github.com/Minglink/dsh-deep-whale) | 0 | 2026-08-25 | 2026-08-25 | 适用于 DeepSeek Harness 的鲸鱼娘系列皮肤主题 |
| 242 | [Minglink/dsh-plugin-agent-workflow](https://github.com/Minglink/dsh-plugin-agent-workflow) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness Agent Workflow 工作流引擎插件 |
| 243 | [Minglink/modlens](https://github.com/Minglink/modlens) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness 外挂视觉多模态与 OCR 桥接插件 |
| 244 | [mingzeng21/dsh-stock-mentions](https://github.com/mingzeng21/dsh-stock-mentions) | 0 | 2026-08-23 | 2026-08-25 | 你在 DSH 对话中提到的股票名称或股票代码，会自动变成可点击按钮——点一下，行情和资讯就在右侧侧边栏展开。 |
| 245 | [minyang-chen/dsh-stock-lookup](https://github.com/minyang-chen/dsh-stock-lookup) | 0 | 2026-08-25 | 2026-08-25 | DSH plugin: resolve company names to stock symbols via SEC EDGAR and fetch live quotes via Yahoo Finance |
| 246 | [Missher12/dsh-missher-evolution](https://github.com/Missher12/dsh-missher-evolution) | 0 | 2026-08-24 | 2026-08-25 | Privacy-bounded self-improvement plugin for DeepSeek Harness |
| 247 | [mobaixingyao/dsh-inform](https://github.com/mobaixingyao/dsh-inform) | 0 | 2026-08-25 | 2026-08-25 | dsh-inform 是一款为 deepseek harness开发的任务提醒插件，能够在 DSH 完成任务、需要批准 或 需要回答 时自动调用系统通知发出提醒 |
| 248 | [MochiNek0/dsh-vendor-login](https://github.com/MochiNek0/dsh-vendor-login) | 0 | 2026-08-25 | 2026-08-25 | Sign in to AI coding plans that have no API key — Claude Pro/Max/Team, ChatGPT Plus/Pro, Copilot, SuperGrok — from the dsh settings UI. |
| 249 | [Modellix/dsh-modellix](https://github.com/Modellix/dsh-modellix) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness plugin for Modellix Web Search and Web Fetch. |
| 250 | [Momojie-S/dsh-subagent-idle-delivery](https://github.com/Momojie-S/dsh-subagent-idle-delivery) | 0 | 2026-08-25 | 2026-08-25 | DSH plugin: hold busy-parent subagent notices, deliver as fresh turns when idle (hold-and-release) |
| 251 | [monotykamary/dsh-multiprovider](https://github.com/monotykamary/dsh-multiprovider) | 0 | 2026-08-24 | 2026-08-25 | Provider-neutral multi-account scheduling, affinity, health, and Settings UI for DeepSeek Harness |
| 252 | [moreWax/dsh-prime-agent](https://github.com/moreWax/dsh-prime-agent) | 0 | 2026-08-24 | 2026-08-25 | Closed learning loop for DeepSeek Harness: Prime Agent memory/skills bridge + OKF/OpenWiki provenance-aware knowledge serving |
| 253 | [moreWax/dsh-remote-exec](https://github.com/moreWax/dsh-remote-exec) | 0 | 2026-08-24 | 2026-08-25 | SSH / MOSH / SAM remote execution providers for DeepSeek Harness — run the agent locally, execute on your servers |
| 254 | [mtaech/dsh-browser-tool](https://github.com/mtaech/dsh-browser-tool) | 0 | 2026-08-25 | 2026-08-25 | DSH 浏览器工具：驱动 Chromium 标签页（headless / CDP attach / 拉起桌面应用 / 经 Browser Relay 接管真实 Chrome），open-close-run 三段式 + tab 脚本 API，移植自 oh-my-pi |
| 255 | [NecromanAlbert/dsh-show-media](https://github.com/NecromanAlbert/dsh-show-media) | 0 | 2026-08-25 | 2026-08-25 | Show a local image or short video inside the current DeepSeek Harness conversation card. |
| 256 | [NeoRrrr/dsh-project-skill-paths](https://github.com/NeoRrrr/dsh-project-skill-paths) | 0 | 2026-08-25 | 2026-08-25 | Project-scoped custom Skill roots for DeepSeek Harness |
| 257 | [nishuoyang/dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg) | 0 | 2026-08-15 | 2026-08-25 | DeepSeek Harness Web UI Standalone Wallpaper Background Plugin: Three sources including built-in wallpapers, custom uploads, and Wallpaper Engine library (read-only). Supports image, video, and scene preview rendering, along with adjustments for overlay, blur, brightness, and safe zoom. |
| 258 | [NIU-001-LIU/dsh-chat-timeline-plus](https://github.com/NIU-001-LIU/dsh-chat-timeline-plus) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness timeline with hover Q&A preview and panel pin |
| 259 | [Nyzeep/dsh-thinking-level](https://github.com/Nyzeep/dsh-thinking-level) | 0 | 2026-08-25 | 2026-08-25 | A thinking-level (reasoning effort) selector for the DeepSeek Harness Web UI — shows only the levels the current model declares and prefers max by default |
| 260 | [of1102/dsh-web-search-ark](https://github.com/of1102/dsh-web-search-ark) | 0 | 2026-08-25 | 2026-08-25 | Volcengine Ark web-search provider plugin for DeepSeek Harness |
| 261 | [oksure/dsh-mobile-comfort](https://github.com/oksure/dsh-mobile-comfort) | 0 | 2026-08-25 | 2026-08-25 | Touch-device comfort fixes for the DeepSeek Harness web client: ghost tooltip suppression + touch-action policy |
| 262 | [outprintHelloLi/dsh-piggy-bank](https://github.com/outprintHelloLi/dsh-piggy-bank) | 0 | 2026-08-25 | 2026-08-25 | dsh插件：DeepSeek 官方余额状态栏（DSH web 插件） |
| 263 | [Pasumao/dsh-plugin-windows-guard](https://github.com/Pasumao/dsh-plugin-windows-guard) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness (dsh) Windows 环境防坑守则 skill 插件（纯数据）：编码/转义/路径/进程/乱码预防规则，无修复工具 |
| 264 | [pharaohnie/dsh-rtk-tools](https://github.com/pharaohnie/dsh-rtk-tools) | 0 | 2026-08-25 | 2026-08-25 | DSH plugin: expose rtk (Rust Token Killer) as wide-category Tools — save 60-90% tokens on shell output with softRewriteBash routing |
| 265 | [phillarmonic/dsh-llm-kimi](https://github.com/phillarmonic/dsh-llm-kimi) | 0 | 2026-08-25 | 2026-08-25 | A Kimi K3 connector plugin for the DeepSeek Harness LLM capability |
| 266 | [princeofdream/dsh-codebase-memory-mcp](https://github.com/princeofdream/dsh-codebase-memory-mcp) | 0 | 2026-08-25 | 2026-08-25 | dsh-codebase-memory-mcp |
| 267 | [qiaoji1990-alt/aifred-dsh-task-ledger](https://github.com/qiaoji1990-alt/aifred-dsh-task-ledger) | 0 | 2026-08-25 | 2026-08-25 | Provider-neutral task lifecycle and idempotent event ledger plugin for DeepSeek Harness. Works standalone for any DSH project and optionally integrates with Aifred through a bridge. |
| 268 | [quan-v/dsh-safe-gate](https://github.com/quan-v/dsh-safe-gate) | 0 | 2026-08-25 | 2026-08-25 | dsh 装前守门:OSV 供应链扫描 + 插件契约检查。 Pre-flight safety gate for dsh plugins/MCP. |
| 269 | [rchen1207/dsh-password-generator](https://github.com/rchen1207/dsh-password-generator) | 0 | 2026-08-24 | 2026-08-25 | 生成密码，只生不存 |
| 270 | [Rock-ql/dsh-git-branch](https://github.com/Rock-ql/dsh-git-branch) | 0 | 2026-08-25 | 2026-08-25 | DSH Desktop plugin: git branch pill in the composer, with local/remote listing and confirmed checkout \| DSH 对话栏 Git 分支胶囊 |
| 271 | [runfali/dsh-skill-curator](https://github.com/runfali/dsh-skill-curator) | 0 | 2026-08-25 | 2026-08-25 | 为 dsh 打造的自动技能策展插件：每 N 轮真实对话，后台起一个评审子代理阅读会话摘要，主动把值得沉淀的经验提炼为 ~/.dsh/skills/<name>/SKILL.md - 把 Hermes 的「后台评审自我改进」闭环移植到 DSH，零侵入 bundle 插件，不改 dsh 源码。 |
| 272 | [sandersyao/dsh-plugin-ui-session-fork](https://github.com/sandersyao/dsh-plugin-ui-session-fork) | 0 | 2026-08-25 | 2026-08-25 | deepseek harness 插件 增加会话分组方式“树形” |
| 273 | [secyborg/dsh-command-rail](https://github.com/secyborg/dsh-command-rail) | 0 | 2026-08-25 | 2026-08-25 | DSH web plugin: a Codex-style command-history rail covering the WHOLE session |
| 274 | [secyborg/dsh-compact-chat-ui](https://github.com/secyborg/dsh-compact-chat-ui) | 0 | 2026-08-25 | 2026-08-25 | DSH web plugin: a settings card to tune chat reading density — font size, line height, and block spacing of the conversation area (assistant markdown + user bubbles), applied live |
| 275 | [secyborg/dsh-find-bar](https://github.com/secyborg/dsh-find-bar) | 0 | 2026-08-25 | 2026-08-25 | DSH web plugin: a Cmd/Ctrl+F find bar (like the browser's built-in find) for the desktop Electron shell, which has none |
| 276 | [Seetraum/harness-session-delete](https://github.com/Seetraum/harness-session-delete) | 0 | 2026-08-25 | 2026-08-25 | Deepseek Harness 删除会话 |
| 277 | [sharewiner/dsh-model-management](https://github.com/sharewiner/dsh-model-management) | 0 | 2026-08-25 | 2026-08-25 | DSH model management, synchronized model visibility, and OpenAI Responses web search. |
| 278 | [shendeguize/AgentSideCar](https://github.com/shendeguize/AgentSideCar) | 0 | 2026-08-22 | 2026-08-25 | A local-first CLI for observing AI-agent sessions |
| 279 | [Shhaaawwww/vibe-intent-compiler](https://github.com/Shhaaawwww/vibe-intent-compiler) | 0 | 2026-08-25 | 2026-08-25 | A one-click DeepSeek Harness plugin that compiles messy Vibe Coder drafts into concise, faithful, actionable instructions without inventing details. |
| 280 | [shine-233/dsh-waimao](https://github.com/shine-233/dsh-waimao) | 0 | 2026-08-25 | 2026-08-25 | ?????? for DeepSeek Harness (dsh): Google 3-layer lead search (WhatsApp/LinkedIn buyer leads) + WhatsApp customer-service review desk (Evolution API + AI draft + human review). Everything is a plugin. |
| 281 | [shuaihaoV/dsh-mcp-skill-control](https://github.com/shuaihaoV/dsh-mcp-skill-control) | 0 | 2026-08-25 | 2026-08-25 | DSH（DeepSeek Harness）Web GUI 的 MCP 服务器管理面板：状态查看、启停/重启、新增/删除、JSON 导入，以及本地技能启停控制。 |
| 282 | [slohmaier/dsh-a11y-announcer](https://github.com/slohmaier/dsh-a11y-announcer) | 0 | 2026-08-21 | 2026-08-25 | Accessibility plugin for DeepSeek Harness web UI: announces tool calls and finished assistant messages via aria-live for screen readers |
| 283 | [soarGuo/dsh-skin-lab](https://github.com/soarGuo/dsh-skin-lab) | 0 | 2026-08-25 | 2026-08-25 | Skin Lab for the DSH Web GUI: token browser, live try-on, theme freeze, spectrum presets with SVG backdrops, custom backdrop upload. Everything is a plugin. |
| 284 | [sskkde/dsh-oh-my-agent](https://github.com/sskkde/dsh-oh-my-agent) | 0 | 2026-08-25 | 2026-08-25 | oh-my-openagent (OmO) core capabilities ported as a DeepSeek Harness plugin: ultrawork, role delegation, rules engine, boulder memory, hooks, Sisyphus main-prompt discipline |
| 285 | [Starlight-bananice/dsh-zhushou](https://github.com/Starlight-bananice/dsh-zhushou) | 0 | 2026-08-24 | 2026-08-25 | DSH 侧边栏助手插件（dsh-zhushou）：在侧边栏管理/选择助手，选中后在 DSH 会话内直接以助手人设对话；不选则保持原生会话。 |
| 286 | [striveh/dsh-capability-resolver](https://github.com/striveh/dsh-capability-resolver) | 0 | 2026-08-25 | 2026-08-25 | Read-only local capability and community plugin discovery for DeepSeek Harness |
| 287 | [stultuss/dsh-clear-tool-results](https://github.com/stultuss/dsh-clear-tool-results) | 0 | 2026-08-25 | 2026-08-25 | DeepSeek Harness（DSH）host 平面插件：**每个 turn 结束时，把上一轮产生的 `tool/result` 从模型上下文中清除**，并提供聊天命令开关： |
| 288 | [SuiBbinggan/dsh-cn-plugin-center](https://github.com/SuiBbinggan/dsh-cn-plugin-center) | 0 | 2026-08-25 | 2026-08-25 | China-friendly plugin center for DeepSeek Harness with curated and verified community plugins. |
| 289 | [Suixin04/dsh-session-migrator](https://github.com/Suixin04/dsh-session-migrator) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness 可视化跨设备会话迁移插件｜Visual cross-device session migration with drag-and-drop ZIP, JSONL, and folder imports. |
| 290 | [Tangtang232/dsh-recovery](https://github.com/Tangtang232/dsh-recovery) | 0 | 2026-08-25 | 2026-08-25 | Recovery: Web first aid for DeepSeek Harness |
| 291 | [TheChengXi/dsh-session-sync](https://github.com/TheChengXi/dsh-session-sync) | 0 | 2026-08-25 | 2026-08-25 | 广播会话修改实现多窗口同步  |
| 292 | [thomasvvugt/dsh-kanban-flow](https://github.com/thomasvvugt/dsh-kanban-flow) | 0 | 2026-08-25 | 2026-08-25 | Agent-driven kanban board for DeepSeek Harness: one board per workspace, per-task agent sessions, guarded human/agent workflow |
| 293 | [thomasvvugt/dsh-wide-stats-footer](https://github.com/thomasvvugt/dsh-wide-stats-footer) | 0 | 2026-08-24 | 2026-08-25 | Removes the width clamp on the DeepSeek Harness composer stats footer — long turn/token stats lines span the full composer width instead of truncating |
| 294 | [todayer/todayer-dsh-telegram-channel](https://github.com/todayer/todayer-dsh-telegram-channel) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness Telegram channel plugin (Hermes-style gateway): per-topic sessions, DM topics, group gating, media, commands. Fork/extension of hi-wenw/dsh-telegram-channel. |
| 295 | [TropicWiden/dsh-history-question-nav](https://github.com/TropicWiden/dsh-history-question-nav) | 0 | 2026-08-25 | 2026-08-25 | A DeepSeek Harness web plugin that lists every question you ask in the current session in a right-side panel, and scrolls to the matching answer when you click one.  DeepSeek Harness Web 插件：在窗口右侧列出当前会话的每个提问，点击即定位到对应回答。 |
| 296 | [Ury479/dsh-wukong-zenfire](https://github.com/Ury479/dsh-wukong-zenfire) | 0 | 2026-08-25 | 2026-08-25 | Wukong Zenfire skin plugin for DeepSeek Harness (DSH) WebUI and Desktop |
| 297 | [veermetri05/dsh-plugins](https://github.com/veermetri05/dsh-plugins) | 0 | 2026-08-25 | 2026-08-25 | Collection of DeepSeek Harness (DSH) plugins — web-search-omp ported from oh-my-pi (23 providers, fallback chain, credential-free) |
| 298 | [Victor-770/dsh-plugin-directory](https://github.com/Victor-770/dsh-plugin-directory) | 0 | 2026-08-14 | 2026-08-25 | DeepSeek Harness 插件目录：中英双语、按功能分类、README 全文搜索、按热度排序。 |
| 299 | [vladlearns/dsh-fs-deny-policy](https://github.com/vladlearns/dsh-fs-deny-policy) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness plugin: a deployment deny list of filesystem roots the model may never touch |
| 300 | [vritser/dsh-emacs](https://github.com/vritser/dsh-emacs) | 0 | 2026-08-23 | 2026-08-25 | An Emacs client for DeepSeek Harness |
| 301 | [wangyuanchuan2022/dsh-mobile-ux](https://github.com/wangyuanchuan2022/dsh-mobile-ux) | 0 | 2026-08-25 | 2026-08-25 | 一个包、零配置：把 DeepSeek Harness 网页版在手机宽度下的体验从头打磨一遍——响应式抽屉布局、字号/间距适配、≥44px 触控目标、按钮/菜单/表格移动端交互、安全区适配。桌面宽度显示与使用完全不受影响。 |
| 302 | [WayneYu430/dsh-voice-agent](https://github.com/WayneYu430/dsh-voice-agent) | 0 | 2026-08-24 | 2026-08-25 | a full duplex voice mode for DSH |
| 303 | [wolfsonliu/zotero-skill](https://github.com/wolfsonliu/zotero-skill) | 0 | 2026-08-25 | 2026-08-25 | An agent-usable Zotero skill for AI agent — search, read, and write your local Zotero library through a single Python CLI. \| 面向 AI  Agent 的 Zotero 技能：通过单一 Python CLI 搜索、读取、写入本地 Zotero 文献库。 |
| 304 | [woshishadowhunter/dsh-seed-society](https://github.com/woshishadowhunter/dsh-seed-society) | 0 | 2026-08-25 | 2026-08-25 | Yogacara eight-consciousness agent society plugin for DeepSeek Harness: mneme memory consolidation tuning, llm-deepseek reasoning fix, MCP society bridge, and six seed skills |
| 305 | [wpc725562-dotcom/deepfusion](https://github.com/wpc725562-dotcom/deepfusion) | 0 | 2026-08-25 | 2026-08-25 | DeepFusion: DSH x Reasonix 融合 Agent 引擎 (DeepSeek-native 编排 + 前缀缓存优化) |
| 306 | [wwskills/dsh-long-memory](https://github.com/wwskills/dsh-long-memory) | 0 | 2026-08-25 | 2026-08-25 | Long-term cross-session memory plugin for DeepSeek Harness |
| 307 | [XingPeng-Pixel/dsh-commandcode-usage](https://github.com/XingPeng-Pixel/dsh-commandcode-usage) | 0 | 2026-08-24 | 2026-08-25 | DSH插件：实时监测Command Code用量，侧边栏挂件+仪表盘迷你挂件显示 |
| 308 | [xiuyuan18/dsh-auto-approve](https://github.com/xiuyuan18/dsh-auto-approve) | 0 | 2026-08-25 | 2026-08-25 | Unofficial community plugin: automatic review of sandbox escalation requests for DeepSeek Harness (Codex Guardian-style) plus an /approve slash command |
| 309 | [xyzs996/dsh-switch-cost](https://github.com/xyzs996/dsh-switch-cost) | 0 | 2026-08-24 | 2026-08-25 | DeepSeek Harness (dsh) plugin to compare LLM API cost across models and providers: prices the current session on the model that ran it, then reprices the same token counts against 15 routes on file. DeepSeek peak/off-peak resolved per UTC hour, cache read and write priced separately, every rate with its source and check date. |
| 310 | [yankihue/deepseek-harness-voice-mode](https://github.com/yankihue/deepseek-harness-voice-mode) | 0 | 2026-08-23 | 2026-08-25 | Voice mode for DeepSeek Harness: live captions, push-to-talk, spoken agent replies, barge-in, and real thread control via ElevenLabs. |
| 311 | [Yaya716/dsh-msg-nav-track](https://github.com/Yaya716/dsh-msg-nav-track) | 0 | 2026-08-25 | 2026-08-25 | Conversation message navigation rail for DeepSeek Harness Web: a track on the right side of the session scroll area with ▲/▼ endpoints and evenly spaced dots for user messages; click a dot to jump exactly to that message. |
| 312 | [Ycet/dsh-session-plus](https://github.com/Ycet/dsh-session-plus) | 0 | 2026-08-24 | 2026-08-25 | DSH 会话增强插件：一键打开工作区 · 模型提供商菜单头部 · 选中文本加入对话 / DSH session enhancement plugin: open workspace · provider header · add selected text to conversation |
| 313 | [yejiming/dsh-ppt](https://github.com/yejiming/dsh-ppt) | 0 | 2026-08-25 | 2026-08-25 | PPT design preset and editable PPTX production tools for DeepSeek Harness |
| 314 | [yul761/dsh-blackjack](https://github.com/yul761/dsh-blackjack) | 0 | 2026-08-20 | 2026-08-25 | Third-party community perk game: play blackjack inside dsh and win model credit spendable only through this plugin. Not affiliated with any model vendor. \| 社区第三方福利小游戏：在 dsh 里玩 21 点，赢取仅限本插件内消费的模型额度。与任何模型厂商无关。 |
| 315 | [YupegLV/dsh-chat-log](https://github.com/YupegLV/dsh-chat-log) | 0 | 2026-08-25 | 2026-08-25 | Fold DSH session logs into clean chat logs: stream fragments merged, nothing else dropped. /chat + browser download.  把 DSH 会话日志折叠成聊天记录：流式碎片合并，其余内容一行不丢。/chat 命令 + 浏览器下载。 |
| 316 | [YZDame/dsh-suhuang-scroll](https://github.com/YZDame/dsh-suhuang-scroll) | 0 | 2026-08-25 | 2026-08-25 | DSH Web plugin for Suhuang Scroll grading controls in Better Sidebar |
| 317 | [zbc0315/dsh-synomega](https://github.com/zbc0315/dsh-synomega) | 0 | 2026-08-25 | 2026-08-25 | Organic reaction prediction for DeepSeek Harness: retrosynthesis, forward prediction, route planning, SynScore, and multi-component evolution — with in-chat molecule, reaction, and route-tree visualisation. Runs entirely locally. |
| 318 | [zeros335882878/dsh-paper-survey](https://github.com/zeros335882878/dsh-paper-survey) | 0 | 2026-08-25 | 2026-08-25 | Literature survey agent for DeepSeek Harness (dsh): interpret-first workflow, 3 skills (paper-survey / paper-interpret / paper-deck), zero-dependency. 文献综述 Agent：解读先行 → 用户确认 → A/B 两页结构生成综述 PPT。 |
| 319 | [zhaimingyou/dsh.plus](https://github.com/zhaimingyou/dsh.plus) | 0 | 2026-08-25 | 2026-08-25 | DSH plugin that shows the dsh.plus curated plugin catalog inside DeepSeek Harness |
| 320 | [zhou1736948757-cpu/dsh-auto-continue](https://github.com/zhou1736948757-cpu/dsh-auto-continue) | 0 | 2026-08-25 | 2026-08-25 | Automatically resumes replies cut off at the output token limit — built for self-hosted Ollama users with small output caps. · 回答被输出上限截断时自动续写，面向自部署 Ollama 用户。 |
| 321 | [zhouStar7/dsh-kanban](https://github.com/zhouStar7/dsh-kanban) | 0 | 2026-08-25 | 2026-08-25 | AI-assisted local project task board for DeepSeek Harness (DSH) |
| 322 | [ZhuoSir/dsh-chatops](https://github.com/ZhuoSir/dsh-chatops) | 0 | 2026-08-25 | 2026-08-25 | dsh-chatops 是 DeepSeek Harness 的 IM 桥接插件：微信扫码绑定官方 ClawBot 机器人（腾讯 iLink 协议），或接入飞书自建应用，即可在手机 IM 里列出/切换/驱动所有 DSH 会话——发文字就是发 prompt，任务完成自动推送结果，危险操作推送审批（飞书支持卡片按钮一键批准）。多通道并行、纯官方接口、零公网部署 |
| 323 | [Zn-Dk/dsh-plugin-creator](https://github.com/Zn-Dk/dsh-plugin-creator) | 0 | 2026-08-21 | 2026-08-25 | Agent skill: scaffold and iterate DSH (DeepSeek Harness) out-of-tree Web plugins. |
| 324 | [Zn-Dk/dsh-session-explorer](https://github.com/Zn-Dk/dsh-session-explorer) | 0 | 2026-08-24 | 2026-08-25 | DSH Web out-of-tree plugin: message-level full-text search + timeline visualization for sessions. |
| 325 | [ZomiCC/ghost-refresh](https://github.com/ZomiCC/ghost-refresh) | 0 | 2026-08-25 | 2026-08-25 | Ghost Refresh (鬼影提神) |
| 326 | [zouyuanqing/dsh-verify-reflux](https://github.com/zouyuanqing/dsh-verify-reflux) | 0 | 2026-08-25 | 2026-08-25 | Three-plane probabilistic verifier for DeepSeek Harness: tiered logprob/sample/template judges, seeded tournament best-of-N, layered context reflux. |
| 327 | [ztting01/dsh-agentenv-sandbox](https://github.com/ztting01/dsh-agentenv-sandbox) | 0 | 2026-08-24 | 2026-08-25 | AgentENV/E2B microVM execution-world bundle for DeepSeek Harness |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 222wcnm/dsh-manager
- AI-Scarlett/dsh-safe-plugin-manager
- AwesomeHou/dsh-trajectory-collapse
- bitterSmilezzz/dsh-model-fix
- dabaicai001/star-deepseek-harness-desktop
- Deklan-Deng/Dcode
- GuoxinShan/dsh-yzj
- gushiaoke/dsh-qq-bot
- Kian-Oraish/dsh-prompt-enhance
- mattismegevand/dsh-dock
- mattismegevand/dsh-git
- mattismegevand/dsh-open
- mattismegevand/dsh-terminal
- pax-beehive/dsh-plugin-hub
- Practice019/dsh-kun-like-pet
- QLM1234/dsh-dynamic-assembler
- robbyisrobby/dsh-codex-pins
- sjh9714/clippy-harness
- sjh9714/dsh-lean
- sjh9714/dsh-what-changed
- songoao25/dsh-song-memory
- tianji-qingtian/dsh-spec-loop
- WayneYu430/dsh-voice-plugin
- worldwonderer/oh-story-dsh
- yamingmou/dsh-message-editor
