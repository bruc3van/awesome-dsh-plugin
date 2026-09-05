# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-05**
- 快照日期 / Snapshot date: **2026-09-05 (UTC)**
- 待审核 / Pending: **104**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **8**
- Star 异常增长 / Star-growth alerts: **1** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-04** / vs previous snapshot **2026-09-04**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **1**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [chenxiachan/thoughtdag](https://github.com/chenxiachan/thoughtdag) | 待审 / pending | 345 | — | 32 | 199d | 待审高星 | 核准即榜 #32 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [chenxiachan/thoughtdag](https://github.com/chenxiachan/thoughtdag) ⚠️ | 345 | 2026-02-17 | 2026-09-05 | Your thinking deserves a map: an infinite canvas where LLM conversations grow into an editable thought graph. Wires are the context. |
| 2 | [WeiyangPro/dsh-deepseek-usage-panel](https://github.com/WeiyangPro/dsh-deepseek-usage-panel) | 16 | 2026-09-03 | 2026-09-05 | 一个用于DeepSeek Harness（DSH）的用量监测面板（目前仅支持DeepSeek官方模型） |
| 3 | [Small-tailqwq/dsh-internet-angel-desktop](https://github.com/Small-tailqwq/dsh-internet-angel-desktop) | 3 | 2026-09-03 | 2026-09-05 | 一款基于主播女孩重度依赖创建的 适用于 DSH 的 实验性主题皮肤 / Unofficial pixel desktop skin for DSH Web inspired by NEEDY GIRL OVERDOSE. Experimental, non-commercial fan project. |
| 4 | [305037991x-pixel/dsh-account-balance](https://github.com/305037991x-pixel/dsh-account-balance) | 2 | 2026-08-16 | 2026-09-05 | DeepSeek account balance chip for DeepSeek Harness Web: 3-min auto refresh with total/topped-up/granted breakdown |
| 5 | [Jamailar/dsh-server-kit](https://github.com/Jamailar/dsh-server-kit) | 2 | 2026-09-04 | 2026-09-05 | A secure, Docker-first server distribution for DeepSeek Harness with web setup, password authentication, persistent storage, health checks, and repeatable upgrades. |
| 6 | [boe1900/owndsh](https://github.com/boe1900/owndsh) | 1 | 2026-09-04 | 2026-09-05 | The Self-Hosted Control Plane for DeepSeek-Harness |
| 7 | [bottledkzk/dsh-search-router](https://github.com/bottledkzk/dsh-search-router) | 1 | 2026-09-05 | 2026-09-05 | DeepSeek Harness search router plugin: multi-provider web_search with live switching, status, and automatic fallback. |
| 8 | [choco9527/dsh-product-preview](https://github.com/choco9527/dsh-product-preview) | 1 | 2026-09-03 | 2026-09-05 | DSH插件 产物页面 可按照访达分栏的形式显示对话节点中的产物 |
| 9 | [Crosery/dsh-drop](https://github.com/Crosery/dsh-drop) | 1 | 2026-09-05 | 2026-09-05 | Drag and paste files into DeepSeek Harness Web: one preview rail, native image attachments, and file references added only when sending. |
| 10 | [FraYoshi/dsh-widechat](https://github.com/FraYoshi/dsh-widechat) | 1 | 2026-09-04 | 2026-09-05 | Widens the chat view of Deepseek Harness, so the text can fill you the entire screen. It also reduces max height of the text box of the user, plus other perks. |
| 11 | [hyzyn/dsh-safe](https://github.com/hyzyn/dsh-safe) | 1 | 2026-09-05 | 2026-09-05 | dsh 启动保险丝：社区插件不兼容导致 dsh 启动失败时，自动禁用坏插件并重试 |
| 12 | [ijry/DeepSeek-Harness-Desktop-Ultra](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra) | 1 | 2026-09-03 | 2026-09-05 | DeepSeek Harness桌面客户端封装版本基于tauri而不是electron体积更小 |
| 13 | [Kayungko/dsh-plugin-task-coordinator](https://github.com/Kayungko/dsh-plugin-task-coordinator) | 1 | 2026-09-04 | 2026-09-05 | Codex-style cross-task coordination for DeepSeek Harness: list, inspect, spawn, message and steer top-level sessions from a supervisor agent. |
| 14 | [pbadgpmeb22791-sketch/dsh-we-wallpaper](https://github.com/pbadgpmeb22791-sketch/dsh-we-wallpaper) | 1 | 2026-08-16 | 2026-09-05 | Use your Wallpaper Engine library as the DeepSeek Harness (DSH) GUI background: video, web and scene wallpapers, with a native fullscreen HD cache for scene (.pkg) wallpapers. DSH 插件：把 Wallpaper Engine 壁纸接入 DeepSeek Harness。 |
| 15 | [quqxui/dsh-memgas](https://github.com/quqxui/dsh-memgas) | 1 | 2026-09-05 | 2026-09-05 | DeepSeek Harness 长期记忆插件：四通道检索融合 + 记忆演化闭环，记忆构建与检索方法来自 ICLR 2026 论文 MemGAS。Long-term memory plugin for DeepSeek Harness (dsh). |
| 16 | [Retr67/dsh-model-fix](https://github.com/Retr67/dsh-model-fix) | 1 | 2026-08-23 | 2026-09-05 | FIX:Stream ended without finish_reason opencodeGo Dsh |
| 17 | [Retr67/dsh-opencode-models](https://github.com/Retr67/dsh-opencode-models) | 1 | 2026-09-04 | 2026-09-05 | DeepSeek Harness (DSH) plugin: one-click OpenCode Go model sync in the settings panel - fetch all server models, probe availability & vision, write back to llm-pi-ai config |
| 18 | [riki-forsure/dsh-napcatqq-remote](https://github.com/riki-forsure/dsh-napcatqq-remote) | 1 | 2026-09-04 | 2026-09-05 | 基于 NapCatQQ / OneBot 11 的 DeepSeek Harness QQ 远程操控插件，支持文件、图片、表情、任务追加与会话切换。 |
| 19 | [Su2uka111/dsh-document-drop](https://github.com/Su2uka111/dsh-document-drop) | 1 | 2026-09-05 | 2026-09-05 | Document drag-and-drop plugin for DeepSeek Harness: PDF/Word/Excel/text auto-parsed with dual-track context (inline + doc_read), native WinRT OCR for scans. Zero upstream changes, hot-injectable. \| DeepSeek Harness 文档拖拽读取插件：PDF/Word/Excel/文本自动解析，双轨上下文（内联 + doc_read 按需检索），扫描件原生 WinRT OCR。零修改上游，运行时热注入。 |
| 20 | [telagod/dsh-ledger-compact](https://github.com/telagod/dsh-ledger-compact) | 1 | 2026-09-05 | 2026-09-05 | dsh-plugin: OMP-style ingress shaping plus optional local /fast-compact for DeepSeek Harness |
| 21 | [tianjiqx/dsh-runtime-observability](https://github.com/tianjiqx/dsh-runtime-observability) | 1 | 2026-09-05 | 2026-09-05 | DeepSeek Harness 运行时可观测性插件。基于 OpenTelemetry 采集事件循环、内存、CPU、工作负载与子代理生命周期指标；支持断路器、ELU 降级联动及可选 Pyroscope 连续 Profiling。 Runtime metrics, continuous profiling & telemetry resilience plugin for DSH. Collects event loop, memory, CPU, workload & subagent lifecycle metrics; circuit breaker, ELU gating, optional Pyroscope profiling. |
| 22 | [watersxya/dsh-novel-forge](https://github.com/watersxya/dsh-novel-forge) | 1 | 2026-08-15 | 2026-09-05 | AI 编译小说工作台 / AI novel writing workbench for DSH: outline to full book with AI review, writing assets, bookshelf and AI assistant |
| 23 | [xuanyuanchumo/dsh-codegraph-visualizer](https://github.com/xuanyuanchumo/dsh-codegraph-visualizer) | 1 | 2026-08-30 | 2026-09-05 | dsh的代码图谱可视化 |
| 24 | [1052326311/dsh-ask-first](https://github.com/1052326311/dsh-ask-first) | 0 | 2026-09-05 | 2026-09-05 | Adaptive product discovery for DeepSeek Harness using native question dialogs. |
| 25 | [1wanganshi/dsh-marketing-toolkit](https://github.com/1wanganshi/dsh-marketing-toolkit) | 0 | 2026-09-05 | 2026-09-05 | DSH 营销工具箱插件：侧边栏一键进入封面图生成 / 朋友圈文案 / 短视频脚本 / 开头黄金3秒检验四个营销 Agent 通道 |
| 26 | [addie-ace/dsh-mattpocock-skills](https://github.com/addie-ace/dsh-mattpocock-skills) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness 技能包插件（汉化版）：mattpocock/skills 25 个 promoted 技能全文汉化打包，经 ctx.skills 注册。原出处 https://github.com/mattpocock/skills（Matt Pocock，MIT）。 |
| 27 | [AndyWipe13/dsh-session-management](https://github.com/AndyWipe13/dsh-session-management) | 0 | 2026-08-30 | 2026-09-05 | A plugin for managing sessions generated by DeepSeek Harness, allowing users to freely delete legacy sessions and supporting session import from other third-party Agents (Claude Code, Codex). |
| 28 | [ApeInCodeMountain/llm-wiki-sidebar](https://github.com/ApeInCodeMountain/llm-wiki-sidebar) | 0 | 2026-09-05 | 2026-09-05 | LLM Wiki workbench for dsh-better-sidebar: browse and lint a Karpathy-style interlinked markdown wiki, open pages with the native markdown viewer, clickable [[wikilinks]] and provenance/relative .md links, and backlinks. Ships the llm-wiki agent skill. |
| 29 | [ArcaneOrion/dsh-model-channel-manager](https://github.com/ArcaneOrion/dsh-model-channel-manager) | 0 | 2026-09-05 | 2026-09-05 | DSH model channel manager: roundrobin failover engine + model config panel |
| 30 | [ArcaneOrion/dsh-model-selector-search](https://github.com/ArcaneOrion/dsh-model-selector-search) | 0 | 2026-09-05 | 2026-09-05 | DSH session model selector with search and reasoning-effort pane |
| 31 | [ArcaneOrion/dsh-stage-panel](https://github.com/ArcaneOrion/dsh-stage-panel) | 0 | 2026-09-05 | 2026-09-05 | DSH in-session panel view: agent HTML projected into a sandboxed iframe |
| 32 | [biyuhao/dsh-web-searxng](https://github.com/biyuhao/dsh-web-searxng) | 0 | 2026-09-05 | 2026-09-05 | Self-hosted SearXNG search backend for DSH — settings card, one-click connectivity tests, and a self-ranking community instance picker. No third-party search API needed. |
| 33 | [Britneycode/dsh-done-notify](https://github.com/Britneycode/dsh-done-notify) | 0 | 2026-09-05 | 2026-09-05 | dsh 插件：离开页面时 agent 完成任务/等待审批/提问，弹系统通知，点击跳回会话 · System notifications for DeepSeek Harness when agents need you while you're away |
| 34 | [chiphoton/DeepSeek-Harness-Video-Director](https://github.com/chiphoton/DeepSeek-Harness-Video-Director) | 0 | 2026-08-13 | 2026-09-05 | 🎬AI-Powered Director: MiniMax-H3 Video Generation Plugin Directed by DeepSeek-Harness. 🤖More than Prompting. 🪄Canvas UI. |
| 35 | [daha1216/dsh-font-customizer](https://github.com/daha1216/dsh-font-customizer) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness（DSH）字体定制插件：更换界面/代码字体与正文字号，识别本机已安装字体，设置持久化保存。 |
| 36 | [dingminhua/dsh-sub-cli](https://github.com/dingminhua/dsh-sub-cli) | 0 | 2026-08-25 | 2026-09-05 | Unified management and invocation of external Agent CLIs (Codex and Claude Code) in DeepSeek Harness, isolated from native installs; per-CLI Provider/model/reasoning tier, persistent sessions, and Relay/Subagent child sessions with execution-layer guard. |
| 37 | [dusbin/dsh-chat-fold](https://github.com/dusbin/dsh-chat-fold) | 0 | 2026-09-05 | 2026-09-05 | 折叠/展开AI回复的Think、Read、Edit 等操作内容，默认只展示重要信息 |
| 38 | [fangqian616/dsh-local-search](https://github.com/fangqian616/dsh-local-search) | 0 | 2026-09-05 | 2026-09-05 | 拒绝花里胡哨，让你的dsh用本地网络搜索信息 \| Zero-dependency local Bing search DSH plugin |
| 39 | [Fayelin12/dsh-workspace-prompts](https://github.com/Fayelin12/dsh-workspace-prompts) | 0 | 2026-09-05 | 2026-09-05 | Per-workspace custom system prompts for DeepSeek Harness (DSH): one active prompt per workspace, captured into a session at creation time, editable from a session-header dialog. |
| 40 | [Flan246/dsh-research-writing](https://github.com/Flan246/dsh-research-writing) | 0 | 2026-09-05 | 2026-09-05 | Research writing bundle for DeepSeek Harness: literature search/citation + LaTeX/BibTeX guard in one install. |
| 41 | [flashyiyi/dsh-zcode-persona](https://github.com/flashyiyi/dsh-zcode-persona) | 0 | 2026-09-05 | 2026-09-05 | Make the model believe it is inside the Z.ai Code (Zhipu ZCode) agent environment. DSH system-prompt waterfall plugin. |
| 42 | [Floatingfur/dsh-paperpanel](https://github.com/Floatingfur/dsh-paperpanel) | 0 | 2026-09-05 | 2026-09-05 | Papers and data, unified inside DSH. |
| 43 | [flykit-cc/dsh-claude-live](https://github.com/flykit-cc/dsh-claude-live) | 0 | 2026-08-25 | 2026-09-05 | Run Claude Code as a subagent inside DeepSeek Harness with its steps streaming live into the session UI. Works on the released harness. |
| 44 | [flykit-cc/dsh-flykit](https://github.com/flykit-cc/dsh-flykit) | 0 | 2026-09-04 | 2026-09-05 | flykit for DeepSeek Harness — explorer with live file watch, agent terminals (Claude Code, Pi, Codex), DSH agent tools, a searchable model picker and a Claude-Code-style status line. Fly your agents. |
| 45 | [fu827707013/dsh-codebuddy-cli](https://github.com/fu827707013/dsh-codebuddy-cli) | 0 | 2026-09-05 | 2026-09-05 | dsh-codebuddy-cli |
| 46 | [GiantAxeint/DSH-P2M](https://github.com/GiantAxeint/DSH-P2M) | 0 | 2026-09-05 | 2026-09-05 | DSH 插件管家（dsh-p2m / A插件）：统一管理+冲突处理+按用时排序 \| A plugin manager & conflict resolver for DeepSeek Harness (DSH/Cordis) |
| 47 | [GooDAnDReaDY/dsh-clinebot](https://github.com/GooDAnDReaDY/dsh-clinebot) | 0 | 2026-09-04 | 2026-09-05 | DeepSeek Harness companion for ClineBot / ClinePass: dedicated settings page, live quota dashboard, in-UI key saving, curated & custom models, /cline command. |
| 48 | [GooDAnDReaDY/dsh-cron](https://github.com/GooDAnDReaDY/dsh-cron) | 0 | 2026-09-04 | 2026-09-05 | Scheduled cron tasks, background automation and agent execution for DeepSeek Harness. |
| 49 | [Guojin0826/dsh-plugin-guard](https://github.com/Guojin0826/dsh-plugin-guard) | 0 | 2026-09-04 | 2026-09-05 | DeepSeek Harness 插件安全体检：静态代码 + 依赖审查 + AI 在线审计，绿/黄/红三级报告面板。 |
| 50 | [hpyperry/dsh-cajita](https://github.com/hpyperry/dsh-cajita) | 0 | 2026-08-29 | 2026-09-05 | deepseek-harness 小工具合集插件 |
| 51 | [ice5kysl/dsh-file-explorer-kit](https://github.com/ice5kysl/dsh-file-explorer-kit) | 0 | 2026-09-04 | 2026-09-05 | dsh (DeepSeek Harness) file explorer: browse the active session's workspace and preview files (Markdown/image/PDF/text/binary) right inside the chat GUI — a standard Cordis bundle plugin (read-only /dsh-files host routes + a conversation.view file tab). |
| 52 | [ice5kysl/dsh-plugin-health](https://github.com/ice5kysl/dsh-plugin-health) | 0 | 2026-09-05 | 2026-09-05 | Zero-dependency health-check CLI for DeepSeek Harness (dsh) plugins: manifest/npm/repo/docs checks + read-only-surface security scan. 零依赖的 dsh 插件体检 CLI。 |
| 53 | [ice5kysl/dsh-plugin-insights](https://github.com/ice5kysl/dsh-plugin-insights) | 0 | 2026-09-05 | 2026-09-05 | DSH 插件生态质量评估数据层 · objective health scores (A-D, health-v1) for the whole DeepSeek Harness plugin ecosystem — 全量客观健康分/真伪判定/生态分析/开放数据 |
| 54 | [jsoncode/dsh-voice-input-qwen-asr](https://github.com/jsoncode/dsh-voice-input-qwen-asr) | 0 | 2026-09-05 | 2026-09-05 | 基于dsh的语音输入插件 |
| 55 | [kagurazakayashi/dsh-startup-command](https://github.com/kagurazakayashi/dsh-startup-command) | 0 | 2026-08-29 | 2026-09-05 | A DeepSeek Harness Web plugin that runs a user-defined command after the web profile has started successfully.  在 dsh web 启动成功后运行用户自定义命令的 DeepSeek Harness Web 插件。 |
| 56 | [Kayungko/dsh-plugin-product-design](https://github.com/Kayungko/dsh-plugin-product-design) | 0 | 2026-09-04 | 2026-09-05 | Product Design workflow suite for DeepSeek Harness (DSH Desktop): a router plus nine pd-* skills — minimum brief gate, three visual directions, evidence-grounded audits/research, URL cloning, frontend builds with a design-QA gate. Original rewrite of the workflow methodology. |
| 57 | [LeeGuanWei-a/dsh-arch-advisor](https://github.com/LeeGuanWei-a/dsh-arch-advisor) | 0 | 2026-09-05 | 2026-09-05 | 给 DeepSeek Harness 装一位"读过架构书"的架构顾问：实时查阅 40 教程/31 模板/6 案例，引导设计并产出需求/概要/详细/数据库文档。· Persistent DSH plugin: an in-chat architecture consultant that queries the awesome-architecture knowledge base and guides engineering-doc authoring. |
| 58 | [LeeGuanWei-a/dsh-arch-advisor-offline](https://github.com/LeeGuanWei-a/dsh-arch-advisor-offline) | 0 | 2026-09-05 | 2026-09-05 | 给 DeepSeek Harness 装一位"读过架构书"的架构顾问：实时查阅 40 教程/31 模板/6 案例，引导设计并产出需求/概要/详细/数据库文档。· Persistent DSH plugin: an in-chat architecture consultant that queries the awesome-architecture knowledge base and guides engineering-doc authoring. |
| 59 | [Li-Mingshuang/dsh-secure-context-fix](https://github.com/Li-Mingshuang/dsh-secure-context-fix) | 0 | 2026-09-05 | 2026-09-05 | Fix the DeepSeek Harness Web GUI over plain HTTP on a LAN: injects a crypto.randomUUID polyfill (getRandomValues-backed) before dsh bundle code runs |
| 60 | [lovstudio/dsh-model-select-search](https://github.com/lovstudio/dsh-model-select-search) | 0 | 2026-09-05 | 2026-09-05 | Search-enabled composer model seat for DeepSeek Harness (sticky fuzzy search) |
| 61 | [lvguqingyou/dsh-xmap](https://github.com/lvguqingyou/dsh-xmap) | 0 | 2026-09-05 | 2026-09-05 | xmap Excel schema-map tools for DeepSeek Harness (7 tools: sheets/headers/hash/extract/verify/save-spec/aggregate) |
| 62 | [Mknecar/DeepseekHarness-](https://github.com/Mknecar/DeepseekHarness-) | 0 | 2026-09-05 | 2026-09-05 | 本项目是一键静默启动DeepSeek Harness Web 的 Windows 桌面快捷方式包。这个快捷方式有鲸鱼图标并且不会出现黑色终端窗口。双击桌面上的DeepSeek快捷方式即可后台启动dsh web，并自动打开浏览器。也有一些简单纠错，如找不到 `dsh` / `npx` 时会弹出中文提示，不会说是点了没反应，还有一个，就是此脚本按自身所在目录解析路径，放到任意位置都能用 |
| 63 | [Mknecar/dsh_HUDV1.0.0](https://github.com/Mknecar/dsh_HUDV1.0.0) | 0 | 2026-09-05 | 2026-09-05 | 做了一个DeepSeek Harness 的右上角悬浮任务台，它能够实时显示当前时段是波峰（贵/红）还是波谷（便宜/绿），还提供了模型、工具、Agent、定价与 24 小时的峰谷轨迹。整体设计风格就是左侧信息 + 右侧看板娘，希望大家喜欢。。 |
| 64 | [mouseteamlucky/dsh-opencode-go-usage](https://github.com/mouseteamlucky/dsh-opencode-go-usage) | 0 | 2026-09-05 | 2026-09-05 | DSH (DeepSeek Harness) web plugin: floating widget showing real-time OpenCode Go subscription usage (rolling / weekly / monthly) for every API key. Maintained fork of @xiaweiliang060035/dsh-opencode-go-usage. |
| 65 | [NewSpringWei/dsh-biz-bridge](https://github.com/NewSpringWei/dsh-biz-bridge) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness（DSH）业务桥接插件 —— 通过标准 HTTP 协议把 DSH 的 agent 能力开放给业务系统。 |
| 66 | [nguyenduclong-ict/dsh-plugin-live-terminal](https://github.com/nguyenduclong-ict/dsh-plugin-live-terminal) | 0 | 2026-09-04 | 2026-09-05 | Real-time live streaming terminal output viewer for DeepSeek Harness (DSH Desktop) |
| 67 | [Olympianz/dsh-xiaomili](https://github.com/Olympianz/dsh-xiaomili) | 0 | 2026-09-04 | 2026-09-05 | 小米粒（dsh-xiaomili）—— 常驻 chatbox 右侧的金毛秘书插件：实时旁听对话、识别意图、提取关键词/概念、自动生成秘书简报，记忆可持久化。 |
| 68 | [Pasumao/dsh-plugin-context-trim](https://github.com/Pasumao/dsh-plugin-context-trim) | 0 | 2026-09-05 | 2026-09-05 | 会话注入门控：按会话裁剪注入模型的 skill / tool / 提示词段落 · Per-session injection gate for DeepSeek Harness (dsh) |
| 69 | [Plaaasma/dsh-subagent-claude-live](https://github.com/Plaaasma/dsh-subagent-claude-live) | 0 | 2026-09-05 | 2026-09-05 | Claude Code as a real, streaming DeepSeek Harness subagent: session-backed child, per-call model/effort choice, live model list from the CLI |
| 70 | [po-et/dsh-session-guard](https://github.com/po-et/dsh-session-guard) | 0 | 2026-09-05 | 2026-09-05 | Per-session advisory locks that stop two dsh processes from corrupting one session log. Companion to dsh-session-rescue. |
| 71 | [po-et/dsh-session-snapshot](https://github.com/po-et/dsh-session-snapshot) | 0 | 2026-09-05 | 2026-09-05 | Rolling, integrity-verified backups of every dsh session at turn boundaries — corruption costs at most the in-flight turn. Part of the session-integrity suite. |
| 72 | [qihongmu/dsh-plugins](https://github.com/qihongmu/dsh-plugins) | 0 | 2026-08-25 | 2026-09-05 | External plugins for DeepSeek Harness (dsh): Scheduled Tasks (run agent instructions on a schedule) and Token Tracing (per-turn token attribution with a waterfall and a cross-session dashboard). |
| 73 | [roclee2692/dsh-model-groups](https://github.com/roclee2692/dsh-model-groups) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness grouped provider and manufacturer model selector |
| 74 | [Saidoua/dsh-rs](https://github.com/Saidoua/dsh-rs) | 0 | 2026-09-05 | 2026-09-05 | In-process grep and glob for the DeepSeek Harness search tools, on ripgrep's library crates — a napi-rs addon, measured in the harness against the packaged ripgrep spawn |
| 75 | [sandersyao/dsh-workspace-bootstrap](https://github.com/sandersyao/dsh-workspace-bootstrap) | 0 | 2026-09-05 | 2026-09-05 | deepseek harness 插件 增加默认工作区 |
| 76 | [Scorp1o117/dsh-reasoning-options](https://github.com/Scorp1o117/dsh-reasoning-options) | 0 | 2026-09-03 | 2026-09-05 | DeepSeek Harness 插件：自动为 pi-ai 第三方模型添加推理强度（reasoning effort）选项 / Auto-add reasoning-effort picker to every pi-ai model in dsh |
| 77 | [shenhuanageshei/dsh-vision-bridge](https://github.com/shenhuanageshei/dsh-vision-bridge) | 0 | 2026-09-04 | 2026-09-05 | DeepSeek Harness plugin - session screenshots route by model capability: inline for vision models, VLM-read for text-only models (tool/auto modes) |
| 78 | [Short-Arm-Ape/dsh-browser-unified](https://github.com/Short-Arm-Ape/dsh-browser-unified) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness（dsh）浏览器插件 |
| 79 | [shy19805/dsh-tool-args-unwrap](https://github.com/shy19805/dsh-tool-args-unwrap) | 0 | 2026-09-05 | 2026-09-05 | Fix malformed tool-call arguments (nested arguments wrappers, key aliases) at the dsh llm/stream seam. 修复畸形工具参数的 dsh 插件 |
| 80 | [sjh9714/routinekit](https://github.com/sjh9714/routinekit) | 0 | 2026-09-05 | 2026-09-05 | Turn successful agent tool calls into reviewed, parameterized routines you can replay. DSH, MCP, and native WebMCP. |
| 81 | [statem-li/dsh-chat-flow](https://github.com/statem-li/dsh-chat-flow) | 0 | 2026-08-31 | 2026-09-05 | DSH 对话流增强插件（零 DSH 源码改动，纯插件注入）。回合呈现：思考 chip（实时走秒 + 实时文字滚动）· 工具调用聚合 chip · 对话流卡片（步骤卡/总结卡）· 共享活动抽屉。正文增强：proto-tabs 可交互卡片 · diagram 流程图围栏 · 本地 HTML 内嵌预览（识别正文里的 .html 路径，host 读文件 + 同目录资源，iframe 沙箱隔离，高度自适应，1:1/等比缩放，浏览器打开）。界面与工具：会话头部对话/轨迹标签上移 · 对话截图（常驻无头浏览器渲染 markdown/shiki/mermaid 真图，可内嵌本地 HTML）· download 下载工具（实时进度条/速度/ETA）。 |
| 82 | [supanexus/dsh-plugin-supanexus-core](https://github.com/supanexus/dsh-plugin-supanexus-core) | 0 | 2026-09-05 | 2026-09-05 | SupaNexus platform core: branding, OAuth quick setup, dual-line model provider, and app plugin market |
| 83 | [supery0ung/dsh-recovery-center](https://github.com/supery0ung/dsh-recovery-center) | 0 | 2026-09-05 | 2026-09-05 | Local plugin recovery points and an independent emergency recovery UI for DeepSeek Harness. English / 中文. |
| 84 | [TheGoodMorty/chat-pace](https://github.com/TheGoodMorty/chat-pace) | 0 | 2026-09-05 | 2026-09-05 | Configurable chat auto-scroll for the DeepSeek Harness web UI |
| 85 | [Tinnikx/dsh-operation-improve](https://github.com/Tinnikx/dsh-operation-improve) | 0 | 2026-08-30 | 2026-09-05 | DeepSeek Harness 客户端增强插件：侧边栏多选与右键菜单、对话起点导航列、逐行开始时间戳、活跃标记配色、选区右键菜单、思考区限高、设置页 Harness 高级配置面板。仅占一个 slot，不发布。 |
| 86 | [Vmarcelo49/dsh-local-models](https://github.com/Vmarcelo49/dsh-local-models) | 0 | 2026-09-05 | 2026-09-05 | Use local models via Llama.cpp on your deepseek harness |
| 87 | [wangzhanchao883/dsh-disk-manager](https://github.com/wangzhanchao883/dsh-disk-manager) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness plugin: scan the whole C drive, classify every big item (safe cache / relocatable / junction-movable / abandoned / config-memory redline / personal), delete/move/redirect on demand with dry-run & undo. C?????????:????+??+?/?/??,???????? |
| 88 | [Wecury/dsh-owui-chat2api](https://github.com/Wecury/dsh-owui-chat2api) | 0 | 2026-09-03 | 2026-09-05 | Open WebUI models as an OpenAI-compatible API for DeepSeek Harness, with a control panel and usage dashboard. |
| 89 | [weibaohui/context-razor](https://github.com/weibaohui/context-razor) | 0 | 2026-09-02 | 2026-09-05 | dsh 插件 · 上下文剃刀：逐条 token 统计 + 精确裁剪会话上下文，不经 LLM 总结 |
| 90 | [weibaohui/dsh-file-share](https://github.com/weibaohui/dsh-file-share) | 0 | 2026-09-03 | 2026-09-05 | dsh 插件 · 目录共享：任意可配置目录经 HTTP 在线浏览/上传/下载 + 对话框 @ 文件给 agent 处理 |
| 91 | [weibaohui/dsh-kb](https://github.com/weibaohui/dsh-kb) | 0 | 2026-09-05 | 2026-09-05 | dsh 插件 · 团队知识库：离线知识共享（FDE 盒子），浏览/全文检索/加工入口；写路径收口 agent，基于 Karpathy LLM Wiki 模式 |
| 92 | [weibaohui/dsh-xiuxian](https://github.com/weibaohui/dsh-xiuxian) | 0 | 2026-09-04 | 2026-09-05 | dsh 插件 · 修仙陪伴：随机唤醒一位《凡人修仙传》角色，Q版电子宠物悬浮陪伴你写代码（自带2496角色数据集） |
| 93 | [weibaohui/user-management](https://github.com/weibaohui/user-management) | 0 | 2026-09-04 | 2026-09-05 | dsh 插件 · 用户管理：dsh web 登录门禁 + 用户/角色/登录记录/访问记录管理，首个注册者即管理员 |
| 94 | [weisofns/dsh-print3d](https://github.com/weisofns/dsh-print3d) | 0 | 2026-09-05 | 2026-09-05 | 3D printing & additive manufacturing plugin for DeepSeek Harness — parametric STL, calibration G-code, STL/G-code analysis, toolpath rendering, PrusaSlicer bridge, 5 skills, and a concise persona optimized for local models./面向 DeepSeek Harness 的 3D 打印与增材制造插件：参数化建模、校准 G-code、STL/G-code 分析、刀路可视化、PrusaSlicer 桥接，附 5 个技能与面向本地小模型的精简 persona。 |
| 95 | [weisofns/dsh-security-guard](https://github.com/weisofns/dsh-security-guard) | 0 | 2026-09-05 | 2026-09-05 | DSH plugin security guard: 28-rule static scanner, risk scoring, whitelist/blacklist policy, local web dashboard and in-DSH risk popups./DSH 插件安全卫士：28 条规则静态扫描、风险评分、白名单/黑名单、本地 Web 仪表盘与 DSH 内风险弹窗。 |
| 96 | [WLV-ZEDD/dsh-chatgpt-free](https://github.com/WLV-ZEDD/dsh-chatgpt-free) | 0 | 2026-09-04 | 2026-09-05 | DSH ChatGPT Free bridges standard ChatGPT Web directly into DeepSeek Harness |
| 97 | [wuxiangru915/dsh-plugins](https://github.com/wuxiangru915/dsh-plugins) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness plugins by wuxiangru915: session manager, review loop, session navigator |
| 98 | [wyStars/dsh-group-chat](https://github.com/wyStars/dsh-group-chat) | 0 | 2026-09-05 | 2026-09-05 | DSH Host 插件：AI 主持人驱动的多角色群聊（动态调度 + 成员 subagent 深度推理 + 结论导出） |
| 99 | [xi-kari/dsh-amphoreus](https://github.com/xi-kari/dsh-amphoreus) | 0 | 2026-09-05 | 2026-09-05 | 翁法罗斯 × DSH：黄金裔席位工作区与画布工作台（基于 DeepSeek Harness 构建，非官方） |
| 100 | [yh01010/dsh-mcp-matlab](https://github.com/yh01010/dsh-mcp-matlab) | 0 | 2026-09-05 | 2026-09-05 | DSH plugin: bridge to the MATLAB MCP server (matlab-mcp-server-windows-x64). Registers mcp__matlab__* tools: evaluate code, run scripts and tests, inspect toolboxes. |
| 101 | [zhangyuzhangyu233/dsh-rgb-input-glow](https://github.com/zhangyuzhangyu233/dsh-rgb-input-glow) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness Web 插件：「光污染」RGB 流光皮肤（输入框/侧栏/hero 等 WebGL bloom + CSS 光效，独立皮肤不修改任何原皮肤） |
| 102 | [ZiFan1117/dsh-atom-market](https://github.com/ZiFan1117/dsh-atom-market) | 0 | 2026-09-05 | 2026-09-05 | DeepSeek Harness 社区插件（dsh-plugin）：把 Software Atom Market 变成 Agent 可逛/可校验/可投稿的能力库。Tools: atom_search/atom_read/atom_validate/atom_draft. 默认数据源=GitHub 商店，零配置。 |
| 103 | [zjlww/dsh-admin-bridge](https://github.com/zjlww/dsh-admin-bridge) | 0 | 2026-09-05 | 2026-09-05 | Scoped, short-lived administrator access for DeepSeek Harness, without storing sudo passwords |
| 104 | [zouxiaoyang/dsh-message-rewrite](https://github.com/zouxiaoyang/dsh-message-rewrite) | 0 | 2026-09-05 | 2026-09-05 | Codex 风格消息原地编辑 DSH 插件：hover ✎ 编辑 → 同会话截断并重新生成回复（surface replacement） |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 305037991x-pixel/dsh-balance
- clawdwan/orbit-dsh-plugin
- djs326/dsh-plugin-width-slider
- hunterxxn/deep-flow
- Qtfycg/windows-portable
- statem-li/dsh-think-tools
- ther000/DshWebLauncher
- WSL043/dsh-deepseek-dashboard
