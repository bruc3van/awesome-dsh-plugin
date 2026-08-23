# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-23**
- 快照日期 / Snapshot date: **2026-08-23 (UTC)**
- 待审核 / Pending: **674**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **106**

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
| 1 | [Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo) | 27017 | 2017-12-12 | 2026-08-22 | :rocket: The Ultimate Image Uploader for Efficient Creators. Supports Obsidian, Typora, VS Code etc. and 60+ image hosting services  (S3, GitHub, Cloudflare R2, Imgur, Aliyun OSS...). Paste, upload, done. |
| 2 | [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | 6692 | 2026-08-14 | 2026-08-23 | dsh-routing-suite — injector + router-standard kit: install the runtime injector first, then the task-aware reasoning-mode router preset (measured P1-P23). |
| 3 | [Tiger3807861189/J-Space-Cognition-Suite-V3.7](https://github.com/Tiger3807861189/J-Space-Cognition-Suite-V3.7) | 3015 | 2026-07-22 | 2026-08-23 | J-Space Cognition Suite V3.7 - AI cognitive-enhancement Skills based on Anthropic's J-space global workspace research. \| 哔哩哔哩：Tiger380 (UID 3494375382321675) — https://space.bilibili.com/3494375382321675 |
| 4 | [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | 989 | 2026-08-14 | 2026-08-23 | DeepSeek Harness Tauri 桌面版 \| Only 5mb installer, zero environment setup, preset plugins, Windows / macOS / Linux. |
| 5 | [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | 657 | 2026-07-14 | 2026-08-23 | Memory for coding agents — Claude Code, Codex, Cursor and 17 others. Indexes the sessions they already wrote to disk, including months from before you installed it, and recalls them in any of them. No LLM, no embeddings, one local Go binary. |
| 6 | [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) | 621 | 2026-08-13 | 2026-08-23 | DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, plugins, and Office artifacts. |
| 7 | [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) | 368 | 2026-08-14 | 2026-08-23 | Task-aware reasoning-mode router for DeepSeek Harness: three measured behavior bands (spec/mixed/react) with phase-transition evidence, persona + first-turn tool injection, agent-visible tuning. Dual-attractor policy paper included. |
| 8 | [ericshang98/Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) | 254 | 2026-01-06 | 2026-08-22 | Pixel-perfect clones of any webpage. Paste a URL, get a measured Vite + React replica. |
| 9 | [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) | 132 | 2026-03-02 | 2026-08-22 | InvoiceFlowAI：Windows 与 macOS 发票助手，自动下载邮箱电子发票、OCR 识别、分类归档并生成 Excel 报销汇总；可安装为 DeepSeek Harness 插件。 |
| 10 | [volcengine/ark-cli](https://github.com/volcengine/ark-cli) | 104 | 2026-06-15 | 2026-08-22 | The fastest way to put Volcengine Ark in your terminal and your AI agent — go from prompt to generated   media, multimodal answer, or deployed endpoint in a single command, no API glue code. |
| 11 | [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | 94 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. |
| 12 | [peiyuwang54/deepseek-harness-cli](https://github.com/peiyuwang54/deepseek-harness-cli) | 55 | 2026-08-14 | 2026-08-23 | DeepSeek CLI (UnOfficial) |
| 13 | [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) | 55 | 2026-08-15 | 2026-08-23 | deepSeek 余额监控与用量统计（DSH 动态 Cordis 插件）：余额监控 · 官方充值入口 · 用量统计 · 三方插件管理 |
| 14 | [yuc16/PatentRadar](https://github.com/yuc16/PatentRadar) | 52 | 2026-05-05 | 2026-08-22 | 专利侵权分析系统 —— 输入专利公开号，产出竞品侵权分析报告；同时打包成 skill，可被任意 agent（codex，claude code 等） 调用。 |
| 15 | [Akimiya-z/codex-guard](https://github.com/Akimiya-z/codex-guard) | 47 | 2026-08-20 | 2026-08-23 | Quality gate for AI/Codex-generated pull requests: blocks TODO leftovers, leaked secrets, sloppy commits and red CI before they reach main. |
| 16 | [xi-zhao/OpenQuantum](https://github.com/xi-zhao/OpenQuantum) | 44 | 2026-08-15 | 2026-08-23 | Open-source quantum Agent workspace with a desktop client, Web UI, messaging, Qiskit/MCP tools, and scientific validation |
| 17 | [ARFCON/dsh-hotplug-hub](https://github.com/ARFCON/dsh-hotplug-hub) | 26 | 2026-08-19 | 2026-08-22 | DSH - Dseam |
| 18 | [T-Auto/dsh-ecosystem-spec](https://github.com/T-Auto/dsh-ecosystem-spec) | 16 | 2026-08-17 | 2026-08-22 | deepseek-harness TUI Plugin Access and Implementation Standards / deepseek-harness终端交互生态插件准入规范与实施标准 |
| 19 | [omdsh-dev/stent](https://github.com/omdsh-dev/stent) | 15 | 2026-08-06 | 2026-08-22 | 灵感来源于MC Fabric的Cordis/DSH hook处理器 |
| 20 | [Clarklevis1995/dsh-mobile](https://github.com/Clarklevis1995/dsh-mobile) | 12 | 2026-08-17 | 2026-08-23 | DeepSeek Harness Mobile 是一个面向 DeepSeek Harness 的原生 iOS 客户端。它通过 dsh-plugin-mobile-gateway 与 Harness 建立 WebSocket 连接，将工作区、会话、实时回复和 Agent 执行轨迹带到 iPhone，同时延续 DeepSeek WebUI 克制、清晰的视觉语言 |
| 21 | [TiantianFlow/dsh-one-gateway](https://github.com/TiantianFlow/dsh-one-gateway) | 12 | 2026-08-16 | 2026-08-22 | Private DSH One Gateway — loopback, identity-first ingress for DeepSeek Harness |
| 22 | [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) | 10 | 2026-08-22 | 2026-08-23 | 把 DeepSeek Harness 的 AI 编码控制台变成泰拉瑞亚像素世界——向导陪你写代码，真实对话、工具审批、难度切换，单文件零依赖。 |
| 23 | [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) | 10 | 2026-08-21 | 2026-08-22 | DSH-KRouter — Agent knowledge OS. Self-evolution. Timer on by default; API key or subscription is the key. First qualifying day auto-provisional; second accepted task → formal. Correction-first. Retrieval is the lock, not the product. Cursor, Codex, Claude Code, DeepSeek Harness. |
| 24 | [daha1216/dsh-plugin-collection](https://github.com/daha1216/dsh-plugin-collection) | 10 | 2026-08-19 | 2026-08-22 | A collection of plugins for DeepSeek Harness (DSH) |
| 25 | [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 10 | 2026-08-12 | 2026-08-22 | @deepseek-ai/dsh-deepresearch 把证据优先的 Codemini 研究工作区带到 DSH。它提供持久工作流状态、模型工具、生成的 deepResearch Remote namespace 和“深度研究”Web 工作区，同时组合宿主已有的 Web 与 subagent 能力。 |
| 26 | [Physicolor/dsh-ui-harmonizer](https://github.com/Physicolor/dsh-ui-harmonizer) | 9 | 2026-08-15 | 2026-08-22 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts between installed plugins, and unifies the visual language via official design tokens. |
| 27 | [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill) | 8 | 2026-08-19 | 2026-08-22 | DSH-native, local-first Run-to-Skill plugin for DeepSeek Harness |
| 28 | [sqs404/dsh-portable](https://github.com/sqs404/dsh-portable) | 8 | 2026-08-16 | 2026-08-23 | DeepSeek Harness 免安装便携版（Windows）：官方 npm 包 + 内置 Node.js，双击 exe 即用，拷贝到任意 64 位 Windows 电脑独立运行 |
| 29 | [TsFreddie/dsh-compaction-instant](https://github.com/TsFreddie/dsh-compaction-instant) | 8 | 2026-08-14 | 2026-08-22 | LLM-free lossless* compaction engine for DeepSeek Harness |
| 30 | [Angel2518975237/deepseek-harness-hello-kitty-suite](https://github.com/Angel2518975237/deepseek-harness-hello-kitty-suite) | 7 | 2026-08-23 | 2026-08-23 | 💗 一套给 DeepSeek Harness 的粉色 Hello Kitty 主题皮肤 + 任务完成/提问提醒插件（Sweetheart Workspace Expressive skin & Hello Kitty Task-Done Notifier） |
| 31 | [liustack/pptwise](https://github.com/liustack/pptwise) | 7 | 2026-07-16 | 2026-08-23 | Stable, editable PPTX generation for AI agents — semantic IR in, native DrawingML out. DSH plugin + Claude Code plugin + CLI. \| 给 AI agent 的稳定可编辑 PPTX 生成：语义 IR 进，原生 DrawingML 出。DSH 插件 / Claude Code 插件 / CLI。 |
| 32 | [getpapi/papi](https://github.com/getpapi/papi) | 6 | 2026-06-12 | 2026-08-22 | Your AI starts every session from zero. Your project stays on course. Structured plan, build and review cycles for any MCP-capable AI coding tool. |
| 33 | [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | 6 | 2026-08-21 | 2026-08-22 | 蒸留蔵 — distilled long-term memory for agents: recall by meaning, writing gated by evidence, one kura per agent mode. Ships as a DeepSeek Harness plugin and an MCP server. |
| 34 | [zzhang82/Agent-Memory-Bridge](https://github.com/zzhang82/Agent-Memory-Bridge) | 6 | 2026-04-05 | 2026-08-23 | Persistent engineering memory for coding agents over MCP. |
| 35 | [EachSheep/dsh-mario-pixel-skin](https://github.com/EachSheep/dsh-mario-pixel-skin) | 5 | 2026-08-16 | 2026-08-23 | Unofficial Mario-inspired pixel-adventure skin for DeepSeek Harness. |
| 36 | [liang-today/dsh-liangxiang](https://github.com/liang-today/dsh-liangxiang) | 5 | 2026-08-15 | 2026-08-23 | 众香成势，梁子显相。DeepSeek Harness 的 WebUI 插件，欢迎一起打梁。 |
| 37 | [sheep-programmer/dsh-web-search-free](https://github.com/sheep-programmer/dsh-web-search-free) | 5 | 2026-08-22 | 2026-08-22 | DSH 插件：免费网页搜索，双免费后端（Parallel 默认 + Exa 备用，均匿名免 key）+ 设置开关 + MCP server 双传输（stdio + HTTP/SSE 双端口），兼容 Claude Code / Codex \| Free web search for DeepSeek Harness: Parallel (default) + Exa (backup) free providers, settings toggle, and dual-transport MCP server (stdio + HTTP/SSE) for Claude Code / Codex |
| 38 | [zrk222/code-factory](https://github.com/zrk222/code-factory) | 5 | 2026-07-08 | 2026-08-22 | Catch AI-generated tests that could never fail and review AI code with local proof. |
| 39 | [Nicholas023/vision-exp-tile](https://github.com/Nicholas023/vision-exp-tile) | 4 | 2026-08-22 | 2026-08-23 | DSH 插件：大图切 800×800 无损小块 + 坐标标注 + 分块聚合逻辑，直连 deepseek-v4-flash-vision-exp 识别；仅用纯官方 DSH 功能，零依赖第三方插件，不统计 token/费用。 |
| 40 | [Wenaixi/dsh-ponytail](https://github.com/Wenaixi/dsh-ponytail) | 4 | 2026-08-21 | 2026-08-22 | DSH 完整移植版 DietrichGebert/ponytail — 懒惰 senior 模式，hook注入 |
| 41 | [Wenaixi/dsh-superpower](https://github.com/Wenaixi/dsh-superpower) | 4 | 2026-08-21 | 2026-08-22 | DSH port of obra/superpowers — 完整移植、中文化、DSH 原生 |
| 42 | [xinchen03/minta](https://github.com/xinchen03/minta) | 4 | 2026-05-31 | 2026-08-23 | The context quality layer for AI agents — memory that checks itself: lifecycle governance, calibrated confidence, and   staged claim gates. Local-first, MCP 19 tools, DeepSeek Harness plugin. |
| 43 | [Decrabbityyy/dsh-discovery](https://github.com/Decrabbityyy/dsh-discovery) | 3 | 2026-08-19 | 2026-08-23 | DeepSeek Harness model discovery plugins for local engines and API gateways |
| 44 | [dsh-blue/blue](https://github.com/dsh-blue/blue) | 3 | 2026-08-18 | 2026-08-22 | Blue: a TUI is not a package, it is a Cordis plugin tree — a modern terminal UI for DeepSeek Harness with hot-swappable render, interaction, and command plugins. |
| 45 | [Hilbert-beinghappy/dsh-plugin-clarify](https://github.com/Hilbert-beinghappy/dsh-plugin-clarify) | 3 | 2026-08-20 | 2026-08-22 | Off-transcript clarification Host plugin for DeepSeek Harness |
| 46 | [klarkxy/zhihu-search](https://github.com/klarkxy/zhihu-search) | 3 | 2026-06-17 | 2026-08-23 | DeepSeek Harness plugin, Skill, CLI and MCP for Zhihu search, Zhida ask, and official open-platform APIs |
| 47 | [Ottohere-Mourn/TeachReplay](https://github.com/Ottohere-Mourn/TeachReplay) | 3 | 2026-08-22 | 2026-08-22 | Teach once, replay anywhere — harness-agnostic Teach-by-Demonstration engine (Record → Compile → Replay → Verify) with OpenMausBot and DeepSeek Harness integrations. |
| 48 | [Physicolor/dsh-widgets](https://github.com/Physicolor/dsh-widgets) | 3 | 2026-08-15 | 2026-08-22 | Right-hand widget rail for DeepSeek Harness Web UI: live session stats (turns, LLM/tool time, TTFT, speed, cache, tokens) plus OpenCode Go quota via a same-origin host proxy; extensible widget registry. |
| 49 | [soyoungzsy/soya-workflows](https://github.com/soyoungzsy/soya-workflows) | 3 | 2026-08-20 | 2026-08-21 | 🏭 SOYA Workflows — enterprise workflow skills for DeepSeek Harness: notify (webhook), docs (Yuque API), intel (RSS), report (daily/weekly/monthly).  企业工作流四件套 AI 技能。 |
| 50 | [suntianc/dsh-antigravity-auth](https://github.com/suntianc/dsh-antigravity-auth) | 3 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin for Antigravity OAuth login and native Antigravity Auth capability bundle |
| 51 | [WSL043/dsh-native-session-manager](https://github.com/WSL043/dsh-native-session-manager) | 3 | 2026-08-15 | 2026-08-22 | DSH Native Session Manager for DeepSeek Harness: search archived conversations, restore sessions, and safely delete chat history. |
| 52 | [wuliLiuyue/wxpilot](https://github.com/wuliLiuyue/wxpilot) | 3 | 2026-03-24 | 2026-08-22 | wxpilot — A CLI for automating WeChat Mini Programs, built for AI Agents. Lets an Agent drive the WeChat DevTools like a browser — page navigation, element interaction, state reading, network capture & mocking.  面向 AI Agent 的微信小程序自动化 CLI 让 Agent 像操作浏览器一样操作微信开发者工具——页面导航、元素交互、状态读取、网络抓包与 mock。 |
| 53 | [1014029855/dsh-context-lens](https://github.com/1014029855/dsh-context-lens) | 2 | 2026-08-23 | 2026-08-23 | Inspect, measure, search, and compare the exact provider-neutral context assembled by DeepSeek Harness. |
| 54 | [AgentsDanceAI/deepseek-harness-cloud](https://github.com/AgentsDanceAI/deepseek-harness-cloud) | 2 | 2026-08-21 | 2026-08-22 | Accounts, credits and cloud agent workspaces for DeepSeek Harness — run it as a hosted product, or self-host in 5 minutes. |
| 55 | [AQian0/dsh-desktop](https://github.com/AQian0/dsh-desktop) | 2 | 2026-08-14 | 2026-08-23 | 基于Tauri的简易dsh桌面端套壳 \| A simple Tauri-based desktop wrapper for dsh |
| 56 | [BenjaminSHI4008/deepseek-pet-Seeki](https://github.com/BenjaminSHI4008/deepseek-pet-Seeki) | 2 | 2026-08-17 | 2026-08-23 | DeepSeek Harness 桌宠插件：透明置顶的桌面精灵（2D 像素风状态机） |
| 57 | [CWNU-Open-Source-Community/dsh-webgate](https://github.com/CWNU-Open-Source-Community/dsh-webgate) | 2 | 2026-08-16 | 2026-08-22 | DSH 远程访问插件：内网二维码 / cloudflared 隧道 / frp+自有服务器（含登录门户） |
| 58 | [daizihan233/dsh-my-go](https://github.com/daizihan233/dsh-my-go) | 2 | 2026-08-20 | 2026-08-22 | My tasks, where to GO????? |
| 59 | [ddtcorex/maestro-skills](https://github.com/ddtcorex/maestro-skills) | 2 | 2026-05-25 | 2026-08-22 | Universal AI Agent Development Skills Hub & Cordis Plugin for Govard, Magento 2, Laravel. Works with Claude Code, Codex CLI, OpenCode, GitHub Copilot, DeepSeek Harness. |
| 60 | [Elave-66/dsh-blue-sea-launcher](https://github.com/Elave-66/dsh-blue-sea-launcher) | 2 | 2026-08-21 | 2026-08-22 | Deepseek 二次元游戏/Galgame 风格启动图标。鲸鱼娘形象来源bilibili@上善无形 @ZipZipPipe，适合重度二次元使用，配合鲸鱼娘皮肤等二次元插件使用更佳！ |
| 61 | [fashionmascherine-svg/dsh-polymarket-knowhow](https://github.com/fashionmascherine-svg/dsh-polymarket-knowhow) | 2 | 2026-08-22 | 2026-08-23 | DeepSeek Harness plugin (dsh-plugin): complete Polymarket superpowers — 31 verified tools across Gamma/CLOB/Data-API/Perps/RFQ/Bridge, embedded knowhow skill, live WebSocket stream. Read-only by default. |
| 62 | [fenglin-ai/dsh-funasr-voice](https://github.com/fenglin-ai/dsh-funasr-voice) | 2 | 2026-08-22 | 2026-08-23 | DeepSeek Harness 本地离线语音输入插件：麦克风 → FunASR(SenseVoice) → 输入框，全离线识别。 |
| 63 | [fxylabs/superself](https://github.com/fxylabs/superself) | 2 | 2026-07-23 | 2026-08-23 | The open Company State Runtime — version control for your project's state. Goals, decisions, work, and evidence outlive every chat, context window, and agent session. Ships the self CLI. |
| 64 | [Hilbert-beinghappy/dsh-plugin-auxiliary-runtime](https://github.com/Hilbert-beinghappy/dsh-plugin-auxiliary-runtime) | 2 | 2026-08-21 | 2026-08-22 | Auxiliary inference usage, limits, and cancellation runtime for official DeepSeek Harness plugins |
| 65 | [Jason-skd/dsh-session-fork](https://github.com/Jason-skd/dsh-session-fork) | 2 | 2026-08-20 | 2026-08-22 | Makes the branch the building block of AI conversation management — parallel workflows, continuous and mergeable conversation memory |
| 66 | [L3n3L/dsh-resume](https://github.com/L3n3L/dsh-resume) | 2 | 2026-08-21 | 2026-08-22 | AI 写简历容易，但写完总会遇到模板难看、排版溢出、页面留白、改一处全局变形等问题。dsh-resume 专注解决“内容生成后的视觉复核”：让 AI 和用户一起把简历调到真正适合投递的刚好一页。AI can write a resume, but the result often looks unbalanced, overflows the page, leaves large blank areas, or breaks after a small edit. dsh-resume focuses on visual review after generation, helping AI and users refine the resume into a polished. |
| 67 | [luxueliu/luxueliu-usage-command](https://github.com/luxueliu/luxueliu-usage-command) | 2 | 2026-08-20 | 2026-08-22 | 内置DSH指令，一键展示今日全局付费模型总消耗账单（人民币版）！按模型×分小时查当日¥消费，缓存命中/未命中/输出三档单价，官方/中转/套餐全覆盖 — DeepSeek Harness 插件 |
| 68 | [lywusichen/dsh-sidebar-buttons](https://github.com/lywusichen/dsh-sidebar-buttons) | 2 | 2026-08-23 | 2026-08-23 | 管理 DeepSeek Harness 左下侧栏按钮的插件：拖拽排序、显隐控制，隐藏按钮收进"更多"菜单，可统一按钮高度。 |
| 69 | [modelbus/deepseek-harness-pro](https://github.com/modelbus/deepseek-harness-pro) | 2 | 2026-08-21 | 2026-08-23 | deepseek-harness-pro 是基于 deepseek-harness 的 Web+Electron 客户端，兼容已有的deepseek-harness环境，并支持一键部署最新版deepseek-harness。相比原web功能做出增强：新增实时任务看板、电脑管家（清理/调优/进程管理）、独立插件中心等功能。界面友好，跨平台，开源免费，让 deepseek-harness 更强大易用。 |
| 70 | [mqhe2007/dsh-pm](https://github.com/mqhe2007/dsh-pm) | 2 | 2026-08-21 | 2026-08-22 | dsh-pm is the ChunSun × DeepSeek Harness reference plugin: an AI-native project-delivery loop driven by ChunSun. Requirements / Runs / Steps / acceptance scenarios & cases / work-memory, a session delivery panel, and 28 chunsun_* model tools — with the platform as the single source of truth. MIT. |
| 71 | [nisconder/npm-safe-forDSH](https://github.com/nisconder/npm-safe-forDSH) | 2 | 2026-08-19 | 2026-08-23 | 本地优先的 npm 包供应链安全扫描引擎，deepseek harness 插件版本 |
| 72 | [Nono-neko/dsh-browser](https://github.com/Nono-neko/dsh-browser) | 2 | 2026-08-21 | 2026-08-23 | Cordis bundle plugin for DeepSeek Harness(DSH). Built‑in multi‑tab browser powered by Puppeteer, provides browser_open/browser_read agent tools & workspace file preview inside DSH Web GUI. |
| 73 | [Nzssm1/dsh-a-stock-five-dimension](https://github.com/Nzssm1/dsh-a-stock-five-dimension) | 2 | 2026-08-21 | 2026-08-22 | A DeepSeek Harness (DSH) community agent preset for rigorous A-share five-dimension (technical/valuation/fundamental/capital-flow/news) standardized analysis: persona, skill knowledge base, hard risk gate, deterministic Python scoring core, Tencent-first collectors. Not an investment recommendation. |
| 74 | [OneCat2015/Remote-My-DSH](https://github.com/OneCat2015/Remote-My-DSH) | 2 | 2026-08-21 | 2026-08-23 | 一个Deepseek Harness远程插件（AI Coding注意） |
| 75 | [PenguinAndy/dsh-ezcommit-plugin](https://github.com/PenguinAndy/dsh-ezcommit-plugin) | 2 | 2026-08-22 | 2026-08-22 | One-click Git commit plugin for DSH: the session model splits workspace changes into reviewed Conventional Commits batches, with built-in sensitive-file filtering. |
| 76 | [qinyuehuan/dsh-whale-status](https://github.com/qinyuehuan/dsh-whale-status) | 2 | 2026-08-22 | 2026-08-23 | 把鲸鱼娘思考时的 deep diving 状态文案换成任意多句随机播放，蓝青水流动画，颜色/流速可自定义（DeepSeek Harness plugin） |
| 77 | [sakthiveltofficial/dsh-git-plugins](https://github.com/sakthiveltofficial/dsh-git-plugins) | 2 | 2026-08-22 | 2026-08-22 | dsh-git: Git & source-control plugin suite for DeepSeek Harness — local git + GitHub/GitLab/Bitbucket/Azure DevOps/Gitea + self-evolving memory |
| 78 | [SpookySandwich/dsh-plugin-message-edit](https://github.com/SpookySandwich/dsh-plugin-message-edit) | 2 | 2026-08-21 | 2026-08-22 | DSH 消息编辑插件：编辑已发送的消息并从该处分叉对话，气泡下方带版本计数与树状视图。Edit a sent message and branch from that point — version counter, tree view, placement presets. |
| 79 | [tdyangbo/PianpianUI](https://github.com/tdyangbo/PianpianUI) | 2 | 2026-08-23 | 2026-08-23 | 用于DeepSeek Harness的林翩翩主题UI插件。使用《哀鸿：城破十日记》的角色林翩翩作为页面半透明背景，并支持透明度和深度调节。 |
| 80 | [TuringCorp-net/mosaic-memory-compress](https://github.com/TuringCorp-net/mosaic-memory-compress) | 2 | 2026-06-08 | 2026-08-23 | Stateless dialogue compression that mimics human memory. LLM conversations stay bounded forever — no session management, no context overflow. |
| 81 | [vcxmug/dsh-evo](https://github.com/vcxmug/dsh-evo) | 2 | 2026-08-13 | 2026-08-23 | Native Firecrawl tools for DeepSeek Harness agents via MCP — one composition row, zero custom code |
| 82 | [xxccdl/deepseek-harness-desktop](https://github.com/xxccdl/deepseek-harness-desktop) | 2 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 桌面版 — Electron 壳层封装 dsh web，集成记忆查看、电脑控制、桌面设置、定时任务、快捷对话、预算血条等桌面插件。DeepSeek Harness Desktop — Electron shell wrapping dsh web with desktop-only plugins: memory viewer, computer use, desktop settings, scheduler, quick chat, and usage bar. |
| 83 | [zhiyaoli0221/dsh-finance-db](https://github.com/zhiyaoli0221/dsh-finance-db) | 2 | 2026-08-22 | 2026-08-23 | Read-only market data for DeepSeek Harness. Ask about a stock, and let DSH call the data tools directly. \| 为 DeepSeek Harness 提供只读金融市场数据。让 DSH 直接调用工具查询行情。 |
| 84 | [zmh2000829/DSH-agent-bridge](https://github.com/zmh2000829/DSH-agent-bridge) | 2 | 2026-08-23 | 2026-08-23 | Use Grok Build inside DeepSeek Harness Web through ACP |
| 85 | [zp-home/dsh-weixin-clawbot](https://github.com/zp-home/dsh-weixin-clawbot) | 2 | 2026-08-21 | 2026-08-22 | Phone-to-DSH control through Tencent's official Weixin ClawBot/iLink channel \| 基于腾讯官方微信 ClawBot/iLink 的 DSH 手机远程控制插件 |
| 86 | [0xRabit/dsh-crypto-portfolio](https://github.com/0xRabit/dsh-crypto-portfolio) | 1 | 2026-08-22 | 2026-08-22 | A free, 100% self-hosted DeepSeek Harness plugin that unifies your on-chain and CEX assets. |
| 87 | [ai-yucheng/dsh-composer-image-tools](https://github.com/ai-yucheng/dsh-composer-image-tools) | 1 | 2026-08-21 | 2026-08-22 | DSH 聊天输入框图片工具(自研):上传图片 + 区域截图,注入草稿图片轨。零依赖,纯客户端+Electron desktopCapturer 截屏。 |
| 88 | [aixlb/dsh-bcc](https://github.com/aixlb/dsh-bcc) | 1 | 2026-08-21 | 2026-08-22 | 包拆拆 for DeepSeek Harness: video to script/storyboard/style guide. dsh-plugin. |
| 89 | [ajuwm/dsh-roleplay-plugin](https://github.com/ajuwm/dsh-roleplay-plugin) | 1 | 2026-08-23 | 2026-08-23 | 以角色扮演为主体、桌宠为附加功能的 DeepSeek Harness 插件 |
| 90 | [Alain-Prot0s5/dsh-screenshot](https://github.com/Alain-Prot0s5/dsh-screenshot) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness Desktop 截图自动粘贴插件（需安装 DSH Desktop 版，仅 Win10/11，纯 AI 生成）：相机按钮 / 全局热键 Alt+A → 系统截图 → 自动粘贴进输入框 \| Screenshot-to-input plugin for DeepSeek Harness Desktop (DSH Desktop app required; Windows 10/11 only; AI-generated): camera button & global hotkey Alt+A -> snip -> auto-paste into composer |
| 91 | [andyfan1094/dsh-winrm](https://github.com/andyfan1094/dsh-winrm) | 1 | 2026-08-21 | 2026-08-22 | Remote Windows administration for the dsh web GUI: WinRM/PowerShell Remoting host config, PowerShell exec, streaming console, service and process management, base64-chunked file transfer, cluster execution, plus agent tools (winrm_list, winrm_exec, winrm_service, winrm_process, winrm_upload, winrm_download, winrm_cluster). Standalone Cordis plugin. |
| 92 | [artec/clat](https://github.com/artec/clat) | 1 | 2025-12-07 | 2026-08-23 | Cmd-Line Agent, a Rust basement compatible with the DeepSeek Harness framework. 命令行智能体，兼容深度探索驾具的 Rust 基座。 |
| 93 | [backrooms-yrc/dsh-openai-gateway](https://github.com/backrooms-yrc/dsh-openai-gateway) | 1 | 2026-08-23 | 2026-08-23 | Expose DeepSeek Harness (dsh) as an OpenAI-compatible API server — /v1/chat/completions + /v1/models, backed by real agent sessions with tools and workspaces. 把 DeepSeek Harness 暴露为 OpenAI 兼容 API 服务端。 |
| 94 | [baihejiangnan/deepseek-harness-desktop](https://github.com/baihejiangnan/deepseek-harness-desktop) | 1 | 2026-08-21 | 2026-08-23 | DeepSeek Harness 三端兼容桌面启动器：多实例完全隔离、并行协作，协作画布编排 Agent 工作流；便携版 Exe 一键启动、仅约 18M（不超过 20M）；双隔离机制让兼容性极强，无论 DSH 本体如何更新，兼容原生到野生狗奶。 |
| 95 | [bailynlove/web-search-opencode-responses](https://github.com/bailynlove/web-search-opencode-responses) | 1 | 2026-08-21 | 2026-08-22 | dsh WebSearchProvider over the OpenCode Zen Go Responses API server-side web_search tool |
| 96 | [BaronCyrus/dsh-harness-ally](https://github.com/BaronCyrus/dsh-harness-ally) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 联盟模式：自由组合 DSH、Claude Code、Codex 与全部已配置模型，保留原生 Agent 生命周期与实时执行过程。 |
| 97 | [botaochen840-lgtm/fatfish-pet-smart-companion](https://github.com/botaochen840-lgtm/fatfish-pet-smart-companion) | 1 | 2026-08-22 | 2026-08-22 | FatFish Pet Smart Companion - 自包含智能桌面桌宠（改编自 whale-girl），下载即用，可选真连 DeepSeek Harness |
| 98 | [Boy-Grid/dsh-multi-folder-workspace](https://github.com/Boy-Grid/dsh-multi-folder-workspace) | 1 | 2026-08-22 | 2026-08-23 | Multi-folder workspaces for DeepSeek Harness: one workspace spanning several folders, with sessions able to read and write every member. Core patch set + plugin + a one-command npx launcher. |
| 99 | [buguoshixc/dsh-user-message-navigator](https://github.com/buguoshixc/dsh-user-message-navigator) | 1 | 2026-08-23 | 2026-08-23 | Codex-style user-message navigation sidebar for DeepSeek Harness Web |
| 100 | [caob23/dsh-browser-control](https://github.com/caob23/dsh-browser-control) | 1 | 2026-08-22 | 2026-08-23 | Chrome 浏览器扩展 + DeepSeek Harness 插件，让 AI Agent 直接操控你的真实浏览器。 |
| 101 | [chensl139-ok/dsh-archived-panel](https://github.com/chensl139-ok/dsh-archived-panel) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness 插件:侧边栏「已归档」面板,可查看/打开/取消归档会话 A side panel that lists, opens, and unarchives archived sessions. |
| 102 | [chidaic/dsh-agent-notify](https://github.com/chidaic/dsh-agent-notify) | 1 | 2026-08-22 | 2026-08-22 | DSH Web GUI task-completion notifications: Windows system-level alerts (browser Notification API) when the agent finishes a task or needs your input - click-to-open session, background-only mode, settings page in Settings  |
| 103 | [chidaic/dsh-light-memory](https://github.com/chidaic/dsh-light-memory) | 1 | 2026-08-23 | 2026-08-23 | 轻量记忆系统插件：四个 Markdown 文件（USER/PROJECT/WORKLOG/CONVENTION）+ append/distill 两个动作，零外部部件，prefix-cache 友好 |
| 104 | [Chu-m/dsh-chat-continue](https://github.com/Chu-m/dsh-chat-continue) | 1 | 2026-08-22 | 2026-08-22 | Auto-retry failed API requests to keep DSH conversations going. Supports configurable status codes and error codes.  自动重试失败的 API 请求，让 DSH 对话不中断。支持自定义状态码和错误码。 |
| 105 | [chuxumilk/dsh-404-panic-lock](https://github.com/chuxumilk/dsh-404-panic-lock) | 1 | 2026-08-23 | 2026-08-23 | 用DSH 开发的轻量化插件:按 Ctrl+Shift+L 一键把页面伪装成静态 404 截图,暂时锁死鼠标键盘,防止别人乱动电脑 |
| 106 | [clclyzybzjsq/deepseek-harness-yunoseek](https://github.com/clclyzybzjsq/deepseek-harness-yunoseek) | 1 | 2026-08-23 | 2026-08-23 | 一个基于tv动画yumemita中的人物千石由乃，使用剧照素材，应用于deepseek-harness的自定义配色插件；A custom color scheme plugin for deepseek-harness, based on the character Yuno Sengoku from the TV anime "Yumemita" |
| 107 | [d3cker/dsh-open-terminal](https://github.com/d3cker/dsh-open-terminal) | 1 | 2026-08-23 | 2026-08-23 | OpenTerminal support for DeepSeek Harness |
| 108 | [DamonBao/dsh-dungeon-party](https://github.com/DamonBao/dsh-dungeon-party) | 1 | 2026-08-22 | 2026-08-22 | Safety-first five-agent orchestration plugin for DeepSeek Harness (DSH), with leases, scopes, checkpoints, validation, and recovery. |
| 109 | [danhcng3822f/dsh-mcp-kimicodeandmgr](https://github.com/danhcng3822f/dsh-mcp-kimicodeandmgr) | 1 | 2026-08-21 | 2026-08-22 | MCP engine and manager for DeepSeek Harness. Fork of yangfch3/dsh-mcp-mgr, MCP layer rebuilt on kimi-code's architecture: self-contained engine, three config layers, transport-driven status. |
| 110 | [dat-lequoc/dsh-supervisor](https://github.com/dat-lequoc/dsh-supervisor) | 1 | 2026-08-22 | 2026-08-22 | Always-on supervisor agent bundle for DeepSeek Harness: main-agent preset + schedule overlay, one dsh plugin add away |
| 111 | [demo007x/dsh-web-mermaid](https://github.com/demo007x/dsh-web-mermaid) | 1 | 2026-08-21 | 2026-08-22 | Deepseek harness mermaid流程图渲染插件 |
| 112 | [Dingpenghui-good/dsh-plugin-manager](https://github.com/Dingpenghui-good/dsh-plugin-manager) | 1 | 2026-08-16 | 2026-08-23 | Writable plugin management tab for DeepSeek Harness - toggle, enable/disable, and uninstall user-installed Cordis plugins from Settings |
| 113 | [drscrewdriver/dsh-session-search-toggle](https://github.com/drscrewdriver/dsh-session-search-toggle) | 1 | 2026-08-19 | 2026-08-22 | 给 DeepSeek Harness 侧边栏加一个会话内容检索——标题/内容一键切换，还能按用户/回复/工具筛选 |
| 114 | [dsh-ai-org/top-dsh-plugins](https://github.com/dsh-ai-org/top-dsh-plugins) | 1 | 2026-08-22 | 2026-08-22 | 📈 Daily-updated DeepSeek Harness plugin rankings · 每日更新的 DSH 插件榜单 — powered by dsh-ai.org |
| 115 | [EarzuChan/DshVibeLearning](https://github.com/EarzuChan/DshVibeLearning) | 1 | 2026-08-22 | 2026-08-23 | A Vibe Learning Plugin made for DeepSeek Harness |
| 116 | [elviass/dsh-cost-insights](https://github.com/elviass/dsh-cost-insights) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的用量、费用、Token、缓存、余额与模型价格分析插件。 |
| 117 | [enterhalf/dsh-web-network-optimizer](https://github.com/enterhalf/dsh-web-network-optimizer) | 1 | 2026-08-21 | 2026-08-22 | dsh网页端网络优化：通过缓存与压缩技术降低传输，从而大幅提升网页加载速度；同时提供网络断连指示与自动断网重连功能。非常适合追求极致性能或网络不稳定用户使用。Network optimization for the DSH web UI: reduces transfer size with caching and compression to greatly speed up page loading, plus a connection-drop indicator and automatic reconnection. Ideal for users pursuing peak performance or using unstable networks. |
| 118 | [ericw0315/dsh-usage-lite](https://github.com/ericw0315/dsh-usage-lite) | 1 | 2026-08-21 | 2026-08-22 | 为 DeepSeek Harness Web 界面提供简洁、优雅的余额与 Token 用量面板。  Compact provider balances and local token-usage analytics for the DeepSeek Harness Web UI. |
| 119 | [EternalNight996/dsh-theme](https://github.com/EternalNight996/dsh-theme) | 1 | 2026-08-22 | 2026-08-23 | DeepSeek Harness theme skin plugin - built-in themes / static image / dynamic 360-follow video. |
| 120 | [fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) | 1 | 2026-08-20 | 2026-08-22 | 一个基于DeepSeek-Harness的ComfyUI插件 |
| 121 | [fastengiel-kurai/dsh-peekfile-everything](https://github.com/fastengiel-kurai/dsh-peekfile-everything) | 1 | 2026-08-19 | 2026-08-22 | DSH local file search, clickable path detection, and floating preview plugin with optional EverythingCLI integration. |
| 122 | [FeatherHunter/dsh-plugin-ui-debug](https://github.com/FeatherHunter/dsh-plugin-ui-debug) | 1 | 2026-08-18 | 2026-08-22 | DSH 插件 UI 调试神器：让 AI 在真实 Chrome 中帮你看界面、点按钮、拖组件，一键安装零配置 |
| 123 | [FloatingLifeTL/dsh-plugin-session-manager-custom](https://github.com/FloatingLifeTL/dsh-plugin-session-manager-custom) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness Web plugin for local session data management |
| 124 | [FYHC1/dsh-webui-installer](https://github.com/FYHC1/dsh-webui-installer) | 1 | 2026-08-20 | 2026-08-23 | Legacy dsh plugin (v1.x, EOL): one-click desktop shortcuts that launch the DeepSeek Harness WebUI (dsh web) as a standalone app window on Windows / WSL / Linux. Need tray-based background management (multi-instance, systemd, self-update)? Use dsh-web-manager instead: https://github.com/FYHC1/dsh-web-manager |
| 125 | [GM-HZ/dsh-workflow](https://github.com/GM-HZ/dsh-workflow) | 1 | 2026-08-23 | 2026-08-23 | Durable DAG workflows for DeepSeek Harness: Agent-guided templates, SQLite recovery, plugin nodes, and XYFlow Canvas. |
| 126 | [graceen2331-prog/find-plugin](https://github.com/graceen2331-prog/find-plugin) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness tool for finding and verifying community DSH plugins on GitHub |
| 127 | [gtbwpkwjnb-alt/learn-skill](https://github.com/gtbwpkwjnb-alt/learn-skill) | 1 | 2026-06-21 | 2026-08-23 | 学习+链接 → 全自动采集·AI总结·亮点·术语·评分·图谱·深度OCR·入库 \| One link → AI analysis+highlights+glossary+rating+knowledge graph → KB import (v3.5) |
| 128 | [gtbwpkwjnb-alt/skills-summarize-audit-skill](https://github.com/gtbwpkwjnb-alt/skills-summarize-audit-skill) | 1 | 2026-06-18 | 2026-08-23 | Skills Audit — 技能审查·画像·评分·优化 / Universal agent tool auditor — profile, score, optimize |
| 129 | [gtbwpkwjnb-alt/summarize-skill](https://github.com/gtbwpkwjnb-alt/summarize-skill) | 1 | 2026-06-17 | 2026-08-23 | 会话级全维总结 — 项目·进度·建议·错误，一个命令全清 \| Session-level summary for project/progress/suggestion/error |
| 130 | [guyuefangyuanl/dsh-memory](https://github.com/guyuefangyuanl/dsh-memory) | 1 | 2026-08-21 | 2026-08-22 | Cross-session persistent memory for the DeepSeek Harness: a model-facing memory tool, an always-on index section, and a bundled maintenance skill. |
| 131 | [hatanokokosa/dsh-colorschemes](https://github.com/hatanokokosa/dsh-colorschemes) | 1 | 2026-08-22 | 2026-08-22 | A DSH ColorScheme Plugin |
| 132 | [Howe829/dsh-insider](https://github.com/Howe829/dsh-insider) | 1 | 2026-08-20 | 2026-08-22 | Runtime observability and relationship graph for DeepSeek Harness and Cordis |
| 133 | [HuanLinOTO/dsh-plugin-better-locale](https://github.com/HuanLinOTO/dsh-plugin-better-locale) | 1 | 2026-08-23 | 2026-08-23 | DSH web 插件：通过运行时 monkey-patch LocaleRuntime.lookup 注入第三语言（ja/ko/...）覆盖，保持 dsh active locale 不变；通过 DSH 设置页通用分区暴露切换 UI。 \| DSH web plugin: injects third-language (ja/ko/...) overrides via a runtime monkey-patch of LocaleRuntime.lookup, leaving the dsh active locale unchanged; exposes a switcher UI through the DSH settings page (General section). |
| 134 | [hufang360/dsh-sticky-notes](https://github.com/hufang360/dsh-sticky-notes) | 1 | 2026-08-16 | 2026-08-22 | 记下想法，让agent落盘！ |
| 135 | [huyang218/dsh-desktop](https://github.com/huyang218/dsh-desktop) | 1 | 2026-08-17 | 2026-08-23 | Unofficial macOS/Windows desktop app for DeepSeek Harness (dsh): manages the runtime, supervises the server, and puts the web UI in a real window. |
| 136 | [hyperion2144/dsh-subagent-pro](https://github.com/hyperion2144/dsh-subagent-pro) | 1 | 2026-08-20 | 2026-08-22 | DSH Web extension: live subagent monitor + role-based subagent routing + Claude Code style .dsh/agents/*.md persona injection |
| 137 | [IcyCreamDAS/shidi-skill](https://github.com/IcyCreamDAS/shidi-skill) | 1 | 2026-08-03 | 2026-08-23 | AI4S 科研 Agent 技能 \| AI-for-Science research workflow skill for coding agents: literature review · experiment design · figures · paper reading — files out, cross-verified, zero deps \| 文献调研/实验方案/作图/精读，交付文件+交叉验证，零依赖，MIT |
| 138 | [ImCabbage/dsh-plugin-mindmap](https://github.com/ImCabbage/dsh-plugin-mindmap) | 1 | 2026-08-20 | 2026-08-23 | MindMap: a DeepSeek Harness plugin that distills conversations into persistent storylines with an interactive map tab. |
| 139 | [iskshadow195563/DeepSeek_Harness_Balance_Banner](https://github.com/iskshadow195563/DeepSeek_Harness_Balance_Banner) | 1 | 2026-08-22 | 2026-08-23 | 💵 DeepSeek 余额横幅(dsh 插件):页面顶部右侧(主题切换按钮左侧)同时显示 USD/CNY 余额,负值高亮,60s 自动刷新,一条命令安装 |
| 140 | [iskshadow195563/DeepSeek_Harness_Files_Panel](https://github.com/iskshadow195563/DeepSeek_Harness_Files_Panel) | 1 | 2026-08-22 | 2026-08-23 | 📁 右侧可折叠的 DeepSeek 上传文件管理面板(dsh 插件):列出/复制/清理 DeepSeek Files API 上传的图片,密钥零暴露,一条命令安装 |
| 141 | [jasonliu119/find-image-prompt-skill](https://github.com/jasonliu119/find-image-prompt-skill) | 1 | 2026-08-23 | 2026-08-23 | Open AI-agent skill and DeepSeek function-calling adapter for turning ideas and public reference images into production-ready image prompts. |
| 142 | [JasonWei04/dsh-computer-use](https://github.com/JasonWei04/dsh-computer-use) | 1 | 2026-08-18 | 2026-08-22 | computer-use in dsh |
| 143 | [jli658942-web/dsh-market-skill](https://github.com/jli658942-web/dsh-market-skill) | 1 | 2026-08-22 | 2026-08-22 | DSH Market 全局 skill：教 Agent 发现、评估、安装 DeepSeek Harness 插件/技能。Global skill teaching agents to use DSH Market (dsh.market) to discover, evaluate and install DSH plugins and skills. |
| 144 | [Jokasa7/dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) | 1 | 2026-08-22 | 2026-08-22 | Plan, run, and compare multi-Agent work inside DeepSeek Harness conversations |
| 145 | [komoai2026/dsh-zpdf](https://github.com/komoai2026/dsh-zpdf) | 1 | 2026-08-22 | 2026-08-23 | Zpdf tools for DeepSeek Harness with durable API-key settings and CLI configuration. |
| 146 | [lasdrder0705/dsh-pro-vision](https://github.com/lasdrder0705/dsh-pro-vision) | 1 | 2026-08-21 | 2026-08-22 | DSH plugin: let DeepSeek-V4-Pro use V4-Flash-Vision-Exp for attached images. Install: dsh plugin --profile web add github:lasdrder0705/dsh-pro-vision |
| 147 | [LCYLYM/dsh-plugin-compat-guardian](https://github.com/LCYLYM/dsh-plugin-compat-guardian) | 1 | 2026-08-22 | 2026-08-22 | Repository-installed CI repair bot that keeps DeepSeek Harness plugins compatible with new DSH releases |
| 148 | [lindog114514/dsh-dglab](https://github.com/lindog114514/dsh-dglab) | 1 | 2026-08-23 | 2026-08-23 | Deepseek harness的DG-LAB 控制插件为 AI 提供 dglab-kit 工具集 |
| 149 | [Linux-System-0/peaklow](https://github.com/Linux-System-0/peaklow) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness (Cordis) 高峰/低峰自动调度插件：宿主 + 浏览器端 client 状态卡。dsh-plugin |
| 150 | [liznee/dsh-file-resource](https://github.com/liznee/dsh-file-resource) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness Web 的本地文件输入插件。在输入框原有的 + 菜单顶部增加 attach，并用分隔线与 Harness 原生命令区分；不会再增加一个单独按钮。Private local file attachments for DeepSeek Harness with native images and bounded document reading. |
| 151 | [loadingvx/deepseeh-harness-ultra-slash](https://github.com/loadingvx/deepseeh-harness-ultra-slash) | 1 | 2026-08-17 | 2026-08-23 | /steer commands for deepseek-harness |
| 152 | [loeanxi/dsh-injection-guard](https://github.com/loeanxi/dsh-injection-guard) | 1 | 2026-08-19 | 2026-08-22 | Source-aware prompt injection protection for DeepSeek Harness |
| 153 | [log-li/dsh-automode](https://github.com/log-li/dsh-automode) | 1 | 2026-08-21 | 2026-08-22 | CC-style auto approval layer for DeepSeek Harness: deterministic rules + two-stage classifier, circuit breaker, fail-to-human. Shadow mode day one. |
| 154 | [Loopiplusplus/dsh-plugin-toggle-manager](https://github.com/Loopiplusplus/dsh-plugin-toggle-manager) | 1 | 2026-08-20 | 2026-08-22 | Visual plugin manager for DSH Web. |
| 155 | [ltxlong/dsh-session-kit](https://github.com/ltxlong/dsh-session-kit) | 1 | 2026-08-22 | 2026-08-23 | 为会话增加管理菜单、归档会话管理、轮次级删除、重新生成，以及右侧话题快捷导航。Add a management menu for conversations, archive conversation management, delete by round, regenerate, and a quick topic navigation on the right. |
| 156 | [lunaship/dsh-links](https://github.com/lunaship/dsh-links) | 1 | 2026-08-18 | 2026-08-22 | Android companion for DeepSeek Harness: trusted-LAN pairing, mobile sessions, SSE approvals, experimental tunnels, and a planned DSH Links Relay. |
| 157 | [luxueliu/luxueliu-reasoning-efforts](https://github.com/luxueliu/luxueliu-reasoning-efforts) | 1 | 2026-08-21 | 2026-08-22 | DSH里只有ds能选推理强度？20个常用模型推理强度按钮已就位！涵盖grok/Gemini / Kimi/glm……20个模型仅预设，实际槽位无上限！可以任意添加你的本地网关模型！（非 ds 系网关模型推理强度档位插件 + 路由级 llm-pi-ai 补丁） |
| 158 | [LVSUGARS/dsh-web-launcher](https://github.com/LVSUGARS/dsh-web-launcher) | 1 | 2026-08-21 | 2026-08-22 | Windows desktop launcher for DeepSeek Harness (DSH) Web: install the official CLI, manage local workspaces, and safely start, stop, and update DSH. |
| 159 | [margbug01/dsh-ma-plugins](https://github.com/margbug01/dsh-ma-plugins) | 1 | 2026-08-15 | 2026-08-22 | DeepSeek Harness (DSH) plugins: Tavily+Exa web search, Oracle second opinion, GitHub Librarian, /handoff, session manager, and file drop. |
| 160 | [Max-Null/seek-soul-in-darkness](https://github.com/Max-Null/seek-soul-in-darkness) | 1 | 2026-08-15 | 2026-08-23 | Seek Soul in Darkness (SSiD) — DSH-based desktop AI: finding the soul of silicon life in darkness |
| 161 | [megatronyy/dsh-tradingagents](https://github.com/megatronyy/dsh-tradingagents) | 1 | 2026-08-22 | 2026-08-22 | TradingAgents for DeepSeek Harness: the 14-role A-share multi-agent analysis pipeline behind /trading-agent |
| 162 | [meng-114/dsh-image-tiler](https://github.com/meng-114/dsh-image-tiler) | 1 | 2026-08-21 | 2026-08-22 | DSH插件：将大图像分割成带标签的800像素图块，并保留概览图，同时保留视觉模型所需的细节。包含设置卡。DSH plugin: slice large images into labeled 800px tiles + overview, preserving detail for vision models. Settings card included. |
| 163 | [Mikuzjc/dsh-office-for-mso](https://github.com/Mikuzjc/dsh-office-for-mso) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness (DSH) plugin/skill: control open Word/Excel/PowerPoint via Office add-in (33 actions, AI-orchestrated, near-Copilot workflows) \| DSH 的 Office 技能：操控打开的 Word/Excel/PPT |
| 164 | [MingYU-kalo/dsh-https-fix](https://github.com/MingYU-kalo/dsh-https-fix) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: built-in HTTPS reverse proxy with configurable settings (设置→插件配置→Https Fix) |
| 165 | [Moon-shiyue/dsh-github-connect](https://github.com/Moon-shiyue/dsh-github-connect) | 1 | 2026-08-22 | 2026-08-23 | 便携式 GitHub 连接插件 for DeepSeek Harness (DSH)：composer 左下角一键授权，AI 可通过 github_api 工具操作你的 GitHub。Portable GitHub connection plugin: OAuth device flow / PAT, proxy & system-CA aware. |
| 166 | [MoonlitDropOfBlood/dsh-archive-manager](https://github.com/MoonlitDropOfBlood/dsh-archive-manager) | 1 | 2026-08-18 | 2026-08-23 | DSH的归档管理插件 |
| 167 | [MoonlitDropOfBlood/dsh-token-stats](https://github.com/MoonlitDropOfBlood/dsh-token-stats) | 1 | 2026-08-18 | 2026-08-23 | dsh的token消耗的统计插件 |
| 168 | [necokeine/dsh-codex-relay](https://github.com/necokeine/dsh-codex-relay) | 1 | 2026-08-22 | 2026-08-23 | Selectable Codex model provider for DeepSeek Harness over the local Codex app-server |
| 169 | [NokorinNishikino/kidai-plugin-remote](https://github.com/NokorinNishikino/kidai-plugin-remote) | 1 | 2026-08-21 | 2026-08-22 | Kidai Plugin Remote 纪代管理：DSH的外部管理器，启停插件、隔离运行、手动回滚、预检诊断、变砖救急！配合KSG（Kidai-snapshot-guard）使用，自动快照、备份回滚！  |
| 170 | [NokorinNishikino/kidai-plugin-remote-client](https://github.com/NokorinNishikino/kidai-plugin-remote-client) | 1 | 2026-08-21 | 2026-08-22 | Kidai Plugin Remote 纪代管理（Client）：零依赖的桌面客户端，DSH的外部管理器，启停插件、隔离运行、手动回滚、预检诊断、变砖救急！配合KSG（Kidai-snapshot-guard）使用，保存自动快照、备份回滚！ |
| 171 | [NokorinNishikino/kidai-snapshot-guard](https://github.com/NokorinNishikino/kidai-snapshot-guard) | 1 | 2026-08-21 | 2026-08-22 | Kidai-snapshot-guard 纪代备份：DSH 内部备份插件，关闭自动保存快照、开机确认、单 zip 备份导出导入恢复、隔离自动恢复、多主流备份插件文件兼容 |
| 172 | [notload/dsh-session-toc](https://github.com/notload/dsh-session-toc) | 1 | 2026-08-23 | 2026-08-23 | 为 DeepSeek Harness Web UI 每个会话页右侧加一个类似deepseek网页端的常驻、可折叠的目录栏：每条用户提问对应一个条目，点击即可滚动定位到对应消息并高亮当前条目。 |
| 173 | [OpenCnid/recursus](https://github.com/OpenCnid/recursus) | 1 | 2026-08-22 | 2026-08-22 | A durable, full-access runtime agent built on DeepSeek Harness |
| 174 | [orpheus0829/dsh-identity-control](https://github.com/orpheus0829/dsh-identity-control) | 1 | 2026-08-21 | 2026-08-22 | 为 DeepSeek Harness (DSH) 打造的自定义人设控制插件。 在对话输入栏旁自由填写你的人设文本，一键开关，所有新对话自动生效、免重启。 人设纯粹是你设定的风格，不覆盖 DSH 安全护栏，安装即用、状态持久化。 |
| 175 | [oxgbl/dsh-no-cmd-launcher](https://github.com/oxgbl/dsh-no-cmd-launcher) | 1 | 2026-08-22 | 2026-08-22 | DSH background launcher: double-click icon to run dsh web without any cmd window, plus desktop start/stop shortcuts (npm/CLI installs, no DSH Desktop dependency) |
| 176 | [ParticleLight/dsh-browser-plus](https://github.com/ParticleLight/dsh-browser-plus) | 1 | 2026-08-21 | 2026-08-22 | Enhanced shared browser for DeepSeek Harness: visible + AI-driven WebContentsView, ego-style page chrome, operation trail, JS dialog auto-accept, per-task windows & spaces, Electron 42.x pinned |
| 177 | [pengls/dsh-quick-view](https://github.com/pengls/dsh-quick-view) | 1 | 2026-08-23 | 2026-08-23 | dsh quick view plugin |
| 178 | [peterwangze/dsh-novel-writing](https://github.com/peterwangze/dsh-novel-writing) | 1 | 2026-08-21 | 2026-08-22 | DSH (DeepSeek Harness) 自动化小说写作发布流水线插件：claude-writing-workflow 迁移版 agent 预设 + 小说工作台（可视化/实时渲染/章节编辑）+ 多平台发布配置与数据驱动优化闭环 |
| 179 | [pg527322814/dsh-bayes-predict](https://github.com/pg527322814/dsh-bayes-predict) | 1 | 2026-08-21 | 2026-08-22 | dsh-贝叶斯个股预测插件：多指标信号融合的上涨概率估计、趋势状态识别与持仓风险度量（A 股 + 美股） |
| 180 | [Phant0Meow/dsh-meow-cachebilling](https://github.com/Phant0Meow/dsh-meow-cachebilling) | 1 | 2026-08-22 | 2026-08-23 | 喵账单：DSH 缓存账单插件——本轮请求的缓存命中/未命中/输出实时计费读数，峰谷自动计价。Cache billing readout for DeepSeek Harness: per-round cache-hit / miss / output costs with peak & off-peak pricing. |
| 181 | [pmorgan3/deep-tui](https://github.com/pmorgan3/deep-tui) | 1 | 2026-08-21 | 2026-08-22 | deep-tui is a plugin-first coding-agent harness built on Cordis. Providers, tools, prompts, permissions, storage, themes, commands, renderers, and the agent loop are all replaceable plugins. |
| 182 | [ppjun2026/dsh-client-ui-lingxi](https://github.com/ppjun2026/dsh-client-ui-lingxi) | 1 | 2026-08-23 | 2026-08-23 | 灵犀（Lingxi）— DSH Web GUI 灵感工作台插件：想法池录入/孵化/计划/立项管理 + AI 解析评分与关联图谱，单文件 JSON 存储，零构建工具链，MIT。 |
| 183 | [purezhi/dsh-plugin-confirmo](https://github.com/purezhi/dsh-plugin-confirmo) | 1 | 2026-08-22 | 2026-08-23 | 复刻 confirmo for DeepSeek Harness |
| 184 | [purezhi/dsh-plugin-whale3](https://github.com/purezhi/dsh-plugin-whale3) | 1 | 2026-08-22 | 2026-08-23 | 鲸鱼 for DeepSeek Harness |
| 185 | [QinXi-ai/dsh-codex-import](https://github.com/QinXi-ai/dsh-codex-import) | 1 | 2026-08-13 | 2026-08-23 | Read-only Codex setup compatibility scanner for DeepSeek Harness |
| 186 | [qinyre/dsh-plugin-atlas](https://github.com/qinyre/dsh-plugin-atlas) | 1 | 2026-08-18 | 2026-08-23 | Archive manager (browse / unarchive / auto-rules) plus a Codex-style fisheye conversation rail for dsh.·归档管理与对话刻度尺插件 |
| 187 | [Quophic/dsh-plugin-installer](https://github.com/Quophic/dsh-plugin-installer) | 1 | 2026-08-18 | 2026-08-23 | DeepSeek Harness（dsh）插件安全安装/卸载器：自动备份配置、失败自动回滚（卸载失败自动重新安装插件）、重启并做健康检查。\| Safe dsh plugin installer & uninstaller: config backup, rollback (reinstall on uninstall failure), restart & health check. |
| 188 | [qwert702/dsh-commander](https://github.com/qwert702/dsh-commander) | 1 | 2026-08-22 | 2026-08-23 | Commander for the DeepSeek Harness Web GUI: one conversation orchestrates others via <dsh-dispatch> protocol blocks, with automatic result receipts. |
| 189 | [Qx002/dsh-group-chat](https://github.com/Qx002/dsh-group-chat) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness插件，多AI群聊插件 |
| 190 | [Ruiming-cn/dsh-better-at](https://github.com/Ruiming-cn/dsh-better-at) | 1 | 2026-08-21 | 2026-08-22 | Fast @ file/session reference caching for DeepSeek Harness Web / DSH @ 引用菜单加速插件 |
| 191 | [Ruiming-cn/dsh-more-session-operations](https://github.com/Ruiming-cn/dsh-more-session-operations) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness Web sidebar session-row menu enhancements: mark unread via the official completed-reminder dot, copy session ID, delete session with confirmation, archive confirmation, and recursive subagent-session deletion. |
| 192 | [ruisenbai/dsh-annotation](https://github.com/ruisenbai/dsh-annotation) | 1 | 2026-08-17 | 2026-08-23 | Inline, batchable comments for DeepSeek Harness assistant replies |
| 193 | [SeerableOfficial/dsh-web-search-toggle](https://github.com/SeerableOfficial/dsh-web-search-toggle) | 1 | 2026-08-22 | 2026-08-22 | DSH plugin: a per-session "Web Search" toggle that forces the agent to search the web before answering. |
| 194 | [shenjackyuanjie/dsh-sfw](https://github.com/shenjackyuanjie/dsh-sfw) | 1 | 2026-08-05 | 2026-08-23 | 为了防止你的好bro/同事看到内测dsh然后：？这是什么 |
| 195 | [Shrbuz/dsh-session-buddy](https://github.com/Shrbuz/dsh-session-buddy) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness 插件：回复/提问/审批三类会话通知（系统原生 toast）+ 会话内梯子目录导航。DeepSeek Harness plugin: session notifications (reply/ask/approval) with native OS toasts + an in-conversation ladder outline. |
| 196 | [sjlgg/dsh-free-web-search](https://github.com/sjlgg/dsh-free-web-search) | 1 | 2026-08-23 | 2026-08-23 | a deepseek plugin for free web search |
| 197 | [skymecode/dsh-deep-diving](https://github.com/skymecode/dsh-deep-diving) | 1 | 2026-08-20 | 2026-08-22 | plugin for dsh deep diving  |
| 198 | [SKzrui/DSH-CLI](https://github.com/SKzrui/DSH-CLI) | 1 | 2026-08-14 | 2026-08-22 | DSH-CLI是一款简洁的命令行工具，可在终端内与 DeepSeek Harness 对话：一条命令即可启动，无需部署服务、无需占用端口。支持流式输出、工具调用、按目录独立恢复会话，同时支持 API Key 与模型参数配置。 |
| 199 | [spirits001/dsh-user-message-rail](https://github.com/spirits001/dsh-user-message-rail) | 1 | 2026-08-23 | 2026-08-23 | A dsh client plugin: a tick rail on the window left edge marking every message you sent, with hover preview and jump-to-message. |
| 200 | [SSShooter/dsh-mindmap-live](https://github.com/SSShooter/dsh-mindmap-live) | 1 | 2026-08-23 | 2026-08-23 | DSH 实时思维导图插件：Agent 与你共编同一棵树，改动即时互相同步，支持停靠分屏与全屏专注两种视图 |
| 201 | [Star-Guest/dsh-plugin-tavern](https://github.com/Star-Guest/dsh-plugin-tavern) | 1 | 2026-08-22 | 2026-08-22 | 酒馆（SillyTavern 精简版）DSH 插件：角色卡解析管理员 card-analyst + 角色扮演讲述者 roleplay |
| 202 | [stas130286-blip/dsh-brainagent](https://github.com/stas130286-blip/dsh-brainagent) | 1 | 2026-08-22 | 2026-08-23 | BrainAgent - brain-inspired cognitive plugin for DeepSeek Harness (dsh): memory, emotions, learning, autonomy, self-regulation. 571 tests. Free noncommercial use. |
| 203 | [T-MKT/dsh-customization-settings](https://github.com/T-MKT/dsh-customization-settings) | 1 | 2026-08-19 | 2026-08-22 | Provide generic UI customization settings for DeepSeek Harness, like wallpaper, theme color, etc.  |
| 204 | [TalkingRainTuT/dsh-VoiceChat](https://github.com/TalkingRainTuT/dsh-VoiceChat) | 1 | 2026-08-23 | 2026-08-23 | 一个DSH的语音聊天插件 \| Realtime voice chat plugin for DeepSeek Harness: configurable translate + multi-TTS + auto-start local servers. |
| 205 | [tanle-mtr/dsh-plogin-plugin-recommender](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender) | 1 | 2026-08-22 | 2026-08-23 | The most comprehensive AI-curated list of DeepSeek Harness (DSH) plugins - 190+ plugins, 12 categories, updated hourly by AI. |
| 206 | [TNTsama11/dsh-tool-vision](https://github.com/TNTsama11/dsh-tool-vision) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (DSH) plugin that lets a text-only agent call DeepSeek-V4-Flash-Vision-Exp to see images on demand, without manually switching models. |
| 207 | [Triple3h/dsh-reasoning-effort](https://github.com/Triple3h/dsh-reasoning-effort) | 1 | 2026-08-19 | 2026-08-23 | DSH Web plugin: per-model reasoning-effort configuration and selection — settings page + slider embedded in the model picker. DSH Web 插件：逐模型推理力度配置与选择（设置页 + 模型选择器内嵌滑块）。 |
| 208 | [Vesna-Strivozha/DSH-LLM-wiki-plugin](https://github.com/Vesna-Strivozha/DSH-LLM-wiki-plugin) | 1 | 2026-08-23 | 2026-08-23 | 基于Karpathy的wiki方法论搭建的插件，让你的DSH直接变身成LLM wiki，不需要Obsidian+Claudian插件，国内网络友好 |
| 209 | [wangyuanchuan2022/dsh-prompt-optimizer](https://github.com/wangyuanchuan2022/dsh-prompt-optimizer) | 1 | 2026-08-23 | 2026-08-23 | 一键优化提示词：在输入框工具行（发送按钮左侧）新增「优化」按钮。 点击后读取当前草稿把草稿重写为结构更清晰的提示词，并直接写回输入框。 长文本支持（输入框架构修复）： 修复 composer 的长文本缺陷 |
| 210 | [Whale-Zhang/dsh-complete-chime](https://github.com/Whale-Zhang/dsh-complete-chime) | 1 | 2026-08-23 | 2026-08-23 | DSH plugin: play a chime when a conversation turn finishes. Built-in tones plus custom upload in Settings → Plugins. |
| 211 | [wozoulesky/dsh-obsidian](https://github.com/wozoulesky/dsh-obsidian) | 1 | 2026-08-14 | 2026-08-23 | DSH（DeepSeek Harness）嵌入 Obsidian 的 AI 协作者插件：聊天侧边栏、内联编辑、@提及与计划模式（连接本地 http://127.0.0.1:3080） |
| 212 | [xiangrui979/foresight](https://github.com/xiangrui979/foresight) | 1 | 2026-08-22 | 2026-08-22 | ForeSight: a temporal-aspect long-term memory plugin for DeepSeek Harness (dsh) |
| 213 | [XuXcode/dsh-loghud](https://github.com/XuXcode/dsh-loghud) | 1 | 2026-08-23 | 2026-08-23 | Live Spring Boot error HUD with opt-in AI diagnosis for DeepSeek Harness |
| 214 | [xxccdl/DeepSeek-Harness-Mobile](https://github.com/xxccdl/DeepSeek-Harness-Mobile) | 1 | 2026-08-21 | 2026-08-23 | 在 Android 手机上运行 DeepSeek Harness AI 助手的 React Native 应用，内置 Termux + proot-distro 完整 Linux 环境，无需 root，支持手机控制 |
| 215 | [YiMlT/dsh-notify-yimit](https://github.com/YiMlT/dsh-notify-yimit) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 通知插件:在 **任务完成 / 任务出错 / 运行中 / 等待审批 / 等待回答** 时提醒用户。 通知标题为对话标题;系统通知与自定义通知均支持**点击跳转到对应会话**。 |
| 216 | [yingzaicc/dsh-editor-selection](https://github.com/yingzaicc/dsh-editor-selection) | 1 | 2026-08-23 | 2026-08-23 | 让 DSH 理解"用户此刻在编辑器里看着什么"。当你在编辑器中选中某个文件或行区间,后续对话自动聚焦于它——通过 @path:10-25 的环境知会行注入,而不是把文件内容塞进上下文。 |
| 217 | [yingzaicc/dsh-editor-selection-vscode](https://github.com/yingzaicc/dsh-editor-selection-vscode) | 1 | 2026-08-23 | 2026-08-23 | DSH 编辑器选区桥接扩展:把 VS Code 的主选区(路径+行区间,不含任何文件内容)推送给本地 DeepSeek Harness,使对话自动聚焦你正在看的代码。 |
| 218 | [yingzaicc/dsh-gitland](https://github.com/yingzaicc/dsh-gitland) | 1 | 2026-08-23 | 2026-08-23 | DeepSeek Harness（DSH）的 Git 面板插件：在 Web GUI 中呈现 GoLand 风格的 Git 工具窗口 —— 提交日志时间线（彩色泳道图）、分支管理、worktree 管理，以及工作区状态摘要，并支持简单的 分支/worktree 操作。 |
| 219 | [Young4ever33/dsh-token-attention](https://github.com/Young4ever33/dsh-token-attention) | 1 | 2026-08-22 | 2026-08-22 | Token Check · 词元管理：DeepSeek Harness (DSH) 的 token 注意力管理面板——按任务/日/周/月记录 token 消耗与费用（命中/未命中/输出/推理），支持 DeepSeek 峰谷计价，并给出换对话、写 hand-off 的执行时机建议。 |
| 220 | [YuemingHub/Ming-Capability-Pack](https://github.com/YuemingHub/Ming-Capability-Pack) | 1 | 2026-08-21 | 2026-08-22 | 依托于deepseek harness  做真有用的插件 |
| 221 | [yxy050208/multisim-mcp](https://github.com/yxy050208/multisim-mcp) | 1 | 2026-08-08 | 2026-08-23 | Unofficial MCP server for AI-driven NI Multisim circuit generation, simulation, data export, and reports |
| 222 | [z-col/dsh-workspace-groups](https://github.com/z-col/dsh-workspace-groups) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness web client plugin: group sidebar workspaces into a configurable three-level tree (分类→项目→会话). Sidecar YAML rules. dsh-plugin. |
| 223 | [zhangdong456/dsh-prompt-presets](https://github.com/zhangdong456/dsh-prompt-presets) | 1 | 2026-08-21 | 2026-08-22 | Prompt Presets to manage your library  |
| 224 | [zhouzhencheng07/dsh-kit](https://github.com/zhouzhencheng07/dsh-kit) | 1 | 2026-08-21 | 2026-08-23 | DSH web 页面能力插件包：VSCode 风格页内终端（首个能力），零依赖零构建 |
| 225 | [zyh20041227/improved_vision_for_deepseek](https://github.com/zyh20041227/improved_vision_for_deepseek) | 1 | 2026-08-22 | 2026-08-23 | Full-coverage image tiling for DeepSeek Harness vision models, dense-text OCR, and document AI |
| 226 | [1-CellBio/dsh-okf](https://github.com/1-CellBio/dsh-okf) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness plugin: turn research PDFs into a citable OKF markdown library, with full-text & semantic search, knowledge graph, and survey writing. |
| 227 | [18126295767-cell/dsh-mac-control](https://github.com/18126295767-cell/dsh-mac-control) | 0 | 2026-08-19 | 2026-08-22 | Give DeepSeek Harness hands on your Mac: native browser and desktop control tools for macOS. |
| 228 | [1clickreport/dsh-1clickreport](https://github.com/1clickreport/dsh-1clickreport) | 0 | 2026-08-22 | 2026-08-23 | Connect your marketing data (Google Ads, Meta, GA4, Search Console, Shopify, Stripe) to DeepSeek Harness via MCP |
| 229 | [2327644800/dsh-usage-analytics](https://github.com/2327644800/dsh-usage-analytics) | 0 | 2026-08-22 | 2026-08-22 | Personal usage analytics & activity dashboard for the DeepSeek Harness (dsh) web GUI: token totals, contribution heatmap, model share, insights. Local-only, metadata only. |
| 230 | [240xu/dsh-websearch](https://github.com/240xu/dsh-websearch) | 0 | 2026-08-20 | 2026-08-22 | Unified web search provider for DSH |
| 231 | [937862061/dsh-project-workbench](https://github.com/937862061/dsh-project-workbench) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness Web 本地项目工作台：按项目、需求组和会话管理原生对话，并以渐进式共享记忆自动衔接组内上下文。  Local DeepSeek Harness Web plugin that organizes native conversations by project and requirement group, with progressive shared memory automatically carried into each group conversation. |
| 232 | [ABccgh/dsh-agent-studio](https://github.com/ABccgh/dsh-agent-studio) | 0 | 2026-08-23 | 2026-08-23 | DSH 智能体与插件开发预设：为 DeepSeek Harness 构建 agent preset 与预设本地插件的开发智能体，含 preset_* 工具集、插件/技能脚手架、静态审查与挂载校验。 |
| 233 | [ABccgh/dsh-github-plugin-tools](https://github.com/ABccgh/dsh-github-plugin-tools) | 0 | 2026-08-23 | 2026-08-23 | GitHub ↔ DSH plugin management: install / upload / uninstall tools |
| 234 | [ABccgh/dsh-ima-plugin](https://github.com/ABccgh/dsh-ima-plugin) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness dynamic Cordis plugin: ima_kb tool for Tencent IMA knowledge base, notes and experimental RAG qa |
| 235 | [ABccgh/dsh-plugin-dev](https://github.com/ABccgh/dsh-plugin-dev) | 0 | 2026-08-23 | 2026-08-23 | DSH dynamic Cordis plugin development: agent preset, demo plugins and templates |
| 236 | [Abel-86/task-chime](https://github.com/Abel-86/task-chime) | 0 | 2026-08-22 | 2026-08-23 | DSH task chime: play local sounds for approval/permission requests and task completion, configurable from the Web GUI. DSH 任务提示音插件 |
| 237 | [ADDD1118/dsh-balance](https://github.com/ADDD1118/dsh-balance) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness (dsh) balance card — floating glass card (estimated days, balance, conversation usage/cost) + adjustable-size settings card |
| 238 | [ADDD1118/dsh-update](https://github.com/ADDD1118/dsh-update) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (dsh) check-for-updates plugin — 右上角检查更新 UI + 关闭后自动升级 (npm / update-dsh.ps1) |
| 239 | [AGSQ11/dsh-completion-gate](https://github.com/AGSQ11/dsh-completion-gate) | 0 | 2026-08-22 | 2026-08-22 | Evidence-backed production-readiness barrier for DeepSeek Harness. |
| 240 | [AGSQ11/dsh-subagent-model-visibility](https://github.com/AGSQ11/dsh-subagent-model-visibility) | 0 | 2026-08-21 | 2026-08-22 | A small DeepSeek Harness plugin that shows the actual provider/model used by a subagent directly inside the existing native subagent tool-call row. |
| 241 | [AIMarshallLee/dsh-mcp-orchestrator](https://github.com/AIMarshallLee/dsh-mcp-orchestrator) | 0 | 2026-08-19 | 2026-08-23 | MCP orchestration layer for DeepSeek Harness — multi-server routing, health monitoring, fallback, and tool aggregation |
| 242 | [AIMarshallLee/dsh-obsidian-bridge](https://github.com/AIMarshallLee/dsh-obsidian-bridge) | 0 | 2026-08-18 | 2026-08-23 | Bidirectional knowledge bridge between DeepSeek Harness and Obsidian Vault — FTS5 search, draft writing, session linking |
| 243 | [AIMarshallLee/dsh-teacher-preset](https://github.com/AIMarshallLee/dsh-teacher-preset) | 0 | 2026-08-19 | 2026-08-23 | Teacher-focused vertical industry preset for DeepSeek Harness — lesson plans, rubrics, quizzes, and teaching materials generation |
| 244 | [AKS1st/dock-media](https://github.com/AKS1st/dock-media) | 0 | 2026-08-21 | 2026-08-22 | Media player for the DSH dock: plays audio (music player) and video (fullscreen) files, streamed over HTTP Range. |
| 245 | [alanpaul1969/dsh-agent-sticky-note](https://github.com/alanpaul1969/dsh-agent-sticky-note) | 0 | 2026-08-23 | 2026-08-23 | 📌 Sticky-note plugin for DeepSeek Harness — agent notices & pending decisions visible in the Web GUI (Tailscale-friendly) |
| 246 | [aleleppy/leppy-loop-deepseek](https://github.com/aleleppy/leppy-loop-deepseek) | 0 | 2026-08-22 | 2026-08-22 | Native Leppy Loop bundle for DeepSeek Harness |
| 247 | [AlexKaiqi/dsh-block-to-file](https://github.com/AlexKaiqi/dsh-block-to-file) | 0 | 2026-08-17 | 2026-08-22 | simple runtime ability to map a block to file, such that bash can access |
| 248 | [alexpadholol/dsh-plugin-fusion](https://github.com/alexpadholol/dsh-plugin-fusion) | 0 | 2026-08-23 | 2026-08-23 | llm自采样插件 |
| 249 | [AlexPeng07/dsh-custom-plugin](https://github.com/AlexPeng07/dsh-custom-plugin) | 0 | 2026-08-22 | 2026-08-23 | dsh-custom-plugin是一个为 DeepSeek Harness (DSH) Web GUI 打造的增强插件。提供：背景天气特效/玻璃拟态、时间线轨道、项目文件夹、提示词库、对话导出、Mermaid 图表渲染、引用回复、余额查询与每日 Token 用量面板等多种便利功能 |
| 250 | [AlexZhou19871030/dsh-cron-scheduler](https://github.com/AlexZhou19871030/dsh-cron-scheduler) | 0 | 2026-08-22 | 2026-08-23 | dsh-cron-scheduler |
| 251 | [AllenLogo/dsh-software-tools](https://github.com/AllenLogo/dsh-software-tools) | 0 | 2026-08-21 | 2026-08-22 | DSH 侧边栏【软件工具】管理器:勾选本机 WSL/Windows 软件工具并注入模型系统提示,随插件自带 add-software-tool 技能。Sidebar software-tools manager for DeepSeek Harness Web. |
| 252 | [an4nsi/dsh-fork-view](https://github.com/an4nsi/dsh-fork-view) | 0 | 2026-08-21 | 2026-08-22 | DSH web plugin: replaces the native workspace browser in the left sidebar with a session tree in the style of pi-web by agegr. |
| 253 | [andyfan1094/dsh-codebase-memory](https://github.com/andyfan1094/dsh-codebase-memory) | 0 | 2026-08-21 | 2026-08-22 | DSH bundle that bridges the Codebase Memory MCP code knowledge graph into DSH via the official @deepseek-ai/dsh-mcp-client. |
| 254 | [andyfan1094/dsh-feishu](https://github.com/andyfan1094/dsh-feishu) | 0 | 2026-08-21 | 2026-08-22 | DSH Feishu self-built app integration: WebSocket inbound messages, OK-reaction acknowledgement, and turn replies on the original chat. |
| 255 | [andyfan1094/dsh-github](https://github.com/andyfan1094/dsh-github) | 0 | 2026-08-21 | 2026-08-22 | GitHub authentication and local Git workflow plugin for the dsh web GUI: accounts, repository browsing, clone, pull, push, status, commit, and a settings panel. |
| 256 | [andyfan1094/dsh-minimax-usage-pro](https://github.com/andyfan1094/dsh-minimax-usage-pro) | 0 | 2026-08-21 | 2026-08-22 | DSH bundle plugin showing MiniMax Token Plan / Subscription usage in Settings. Pro edition using webServer routes (host.call is unavailable to trusted bundle plugins on DSH 0.1.0-rc.8). |
| 257 | [ant404/dsh-media-gen](https://github.com/ant404/dsh-media-gen) | 0 | 2026-08-21 | 2026-08-22 | DSH plugin: generate images and videos via OpenAI-compatible providers, with dedicated settings menu and workspace media_gen output. |
| 258 | [anweat/dsh-context-console](https://github.com/anweat/dsh-context-console) | 0 | 2026-08-22 | 2026-08-22 | Complete context workbench for DeepSeek Harness: trajectory, inventory, cache history, message forge, and session-log recovery |
| 259 | [anzhaohao/dsh-side-chat-plus-plus](https://github.com/anzhaohao/dsh-side-chat-plus-plus) | 0 | 2026-08-23 | 2026-08-23 | Codex 式多标签侧聊增强 - dsh-side-chat 破坏式 fork(多标签+整条消息引用+去 More details) |
| 260 | [aqiane/dsh-client-ui-period-hint](https://github.com/aqiane/dsh-client-ui-period-hint) | 0 | 2026-08-21 | 2026-08-22 | 在输入栏显示当前dsAPI价格时段 |
| 261 | [asuramaya/osiris](https://github.com/asuramaya/osiris) | 0 | 2026-08-04 | 2026-08-22 | The persistent memory and coordination graph for AI agents (MCP, DeepSeek Harness, Claude Code, Cursor) |
| 262 | [B1lli/dsh-plugin-bench](https://github.com/B1lli/dsh-plugin-bench) | 0 | 2026-08-22 | 2026-08-23 | Evidence-backed, type-aware quality scorecards for DeepSeek Harness plugins. |
| 263 | [Baisbt/dsh-GreaterClarity-plugin](https://github.com/Baisbt/dsh-GreaterClarity-plugin) | 0 | 2026-08-23 | 2026-08-23 | 对话快速定位，AI头像，支持导出对话流内容 |
| 264 | [banttethai-ops/dsh-right-editor](https://github.com/banttethai-ops/dsh-right-editor) | 0 | 2026-08-21 | 2026-08-22 | Right-docked file panel for DSH Web: browse any directory and view/edit text, images, Office (docx/xlsx/pptx) and PDF documents. Uses local Python for parsing. |
| 265 | [baosfeng/my-dsh-plugins](https://github.com/baosfeng/my-dsh-plugins) | 0 | 2026-08-22 | 2026-08-22 | DSH 侧边栏文件活动插件：记录文件读取 / 新增 / 修改历史与统计，按文件夹平铺展示，基于 dsh-better-sidebar |
| 266 | [BenYuan-Nolove-onani/dsh-token-stats](https://github.com/BenYuan-Nolove-onani/dsh-token-stats) | 0 | 2026-08-15 | 2026-08-23 | Token usage statistics plugin for DeepSeek Harness — per-window consumption metrics with an enable/disable switch, right in Settings.----------DeepSeek Harness 的 Token 用量统计插件：按时间窗统计消耗指标，设置页内随时启停。 |
| 267 | [bettermen/dsh-course-writer](https://github.com/bettermen/dsh-course-writer) | 0 | 2026-08-23 | 2026-08-23 | 虾说教材写作 — AI 教材写作工作台（DeepSeek Harness 插件）：三栏式界面 + 九阶段门禁 + 课程/章节/资料库管理 + 导出 + 分享协作 |
| 268 | [BharathBillawa/dsh-tool-ddgs](https://github.com/BharathBillawa/dsh-tool-ddgs) | 0 | 2026-08-22 | 2026-08-22 | DuckDuckGo web search and URL fetch tools for DeepSeek Harness, no API key required. Provides web_search (via ddgs) and   web_fetch (via trafilatura) as a drop-in bundle |
| 269 | [bingfengaaaaa/dsh-jj-vcs](https://github.com/bingfengaaaaa/dsh-jj-vcs) | 0 | 2026-08-22 | 2026-08-22 | Jujutsu version-control plugin and skill for DeepSeek Harness multi-agent teams |
| 270 | [bitterSmilezzz/dsh-ui-tweaks](https://github.com/bitterSmilezzz/dsh-ui-tweaks) | 0 | 2026-08-19 | 2026-08-23 | DeepSeek Harness 的界面增强插件：模型选择器（推理强度滑块）、粘贴/拖拽上传、插件列表增强、请求重试设置、全局快捷键、桌面通知 |
| 271 | [biyuhao/dsh-model-proxy](https://github.com/biyuhao/dsh-model-proxy) | 0 | 2026-08-22 | 2026-08-23 | DSH plugin: per-model proxy routing (http/https/socks5) with a settings UI — e.g. opencode/muse-spark-1.2-contributor needs a proxy while sibling models stay direct |
| 272 | [blackdm666/dsh-plugin-88api-image](https://github.com/blackdm666/dsh-plugin-88api-image) | 0 | 2026-08-22 | 2026-08-22 | 统一接入 Image2 与 Nano Banana 四款模型，覆盖文生图、多参考图编辑、2K/4K 输出、顺序批量任务、默认模型持久化和脱敏 Key 配置。 |
| 273 | [bowang-lab/dsh-medomni](https://github.com/bowang-lab/dsh-medomni) | 0 | 2026-08-19 | 2026-08-22 | deepseek harness plugin for medical image analysis |
| 274 | [BrianHIO-x/dsh-think-expand](https://github.com/BrianHIO-x/dsh-think-expand) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin that auto-expands Think rows while reasoning |
| 275 | [BrucePayton/dsh-plugin-graphgpt](https://github.com/BrucePayton/dsh-plugin-graphgpt) | 0 | 2026-08-22 | 2026-08-23 | Run validated GraphGPT workflows as native DeepSeek Harness tools |
| 276 | [BugraAkdemir/gosearch](https://github.com/BugraAkdemir/gosearch) | 0 | 2026-07-29 | 2026-08-23 | Zero-API-key Go library for web search (Google, Yandex, DuckDuckGo) and page-content extraction |
| 277 | [buildbeforewepitch/agentscars](https://github.com/buildbeforewepitch/agentscars) | 0 | 2026-08-21 | 2026-08-22 | A public commons of real AI-agent failure patterns ("scars") — searchable via API and MCP. Live at agentscars.com. |
| 278 | [c-ling/dsh-plugin-request-retry](https://github.com/c-ling/dsh-plugin-request-retry) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness 请求重试插件：模型请求失败且错误信息命中关键词时，在内置重试策略耗尽后继续自动追加重试；设置面板可管理关键词与退避参数。 |
| 279 | [CaiZongyuan/dsh-ag-ui](https://github.com/CaiZongyuan/dsh-ag-ui) | 0 | 2026-08-23 | 2026-08-23 | AG-UI protocol gateway plugin for DeepSeek Harness |
| 280 | [cczzyy-cn/C-Vision](https://github.com/cczzyy-cn/C-Vision) | 0 | 2026-08-22 | 2026-08-23 | 给 DeepSeek Harness 提供自动视觉能力：deepseek-v4-flash-vision-exp 模型调用 see 工具，得到一张真实截图（作为图片），从而原生看到画面（描述、识别截图文字、读图表/文档）。 |
| 281 | [Cerbur/clutch-dsh](https://github.com/Cerbur/clutch-dsh) | 0 | 2026-08-19 | 2026-08-22 | Open-source DSH plugins for DeepSeek Harness, starting with a Git worktree-aware Session view for the DSH Web UI. |
| 282 | [chenbin-dev/dsh-scan-mcp](https://github.com/chenbin-dev/dsh-scan-mcp) | 0 | 2026-08-23 | 2026-08-23 | 能够扫描本地claudecode、codex、codebuddy等Agent配置过的mcp工具的插件 |
| 283 | [chendefine/dsh-web-search-aggregation](https://github.com/chendefine/dsh-web-search-aggregation) | 0 | 2026-08-23 | 2026-08-23 | Aggregated web-search provider for DeepSeek Harness (DSH): one prioritized queue over AnySearch / TinyFish / Tavily with multi-key rotation and ordered fallback. |
| 284 | [chengoak/dsh-font-size](https://github.com/chengoak/dsh-font-size) | 0 | 2026-08-21 | 2026-08-22 | DSH Web GUI plugin: 'Conversation font size' slider (12-22 px) in Settings → General. |
| 285 | [ChengxiuCDP/dsh-migrate-codex](https://github.com/ChengxiuCDP/dsh-migrate-codex) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin: safely migrate a Codex environment between machines (/migrate-codex command + codex-migration skill) |
| 286 | [chenpengye/dsh-balance-local](https://github.com/chenpengye/dsh-balance-local) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek API balance plugin for DeepSeek Harness (dsh): Settings-page panel + composer badge. Key stays on the Host; browser gets sanitized balance only. |
| 287 | [chenpengye/dsh-balance-whale](https://github.com/chenpengye/dsh-balance-whale) | 0 | 2026-08-21 | 2026-08-22 | 🐳 Floating DeepSeek API balance widget for DeepSeek Harness (dsh) with a whale-girl icon. Key stays on the Host; browser gets sanitized balance only. |
| 288 | [ChenSiyun1234/dsh-tray-windows](https://github.com/ChenSiyun1234/dsh-tray-windows) | 0 | 2026-08-22 | 2026-08-22 | 把 DeepSeek Harness (dsh web) 变成真正的 Windows 桌面应用：托盘控制、独立应用窗口、退出即彻底停止后端（无残留进程）。非官方项目。 |
| 289 | [chenzheshushi-commits/dsh-evolve](https://github.com/chenzheshushi-commits/dsh-evolve) | 0 | 2026-08-23 | 2026-08-23 | Self-evolving memory + skill lifecycle for DeepSeek Harness — durable cross-session memory with zero-token deterministic recall, tiered approval, reinforcement learning from repetition, and anti-bloat convergence for both skills and memory. |
| 290 | [chenzhi-clude/dsh-hooks-pack](https://github.com/chenzhi-clude/dsh-hooks-pack) | 0 | 2026-08-21 | 2026-08-22 | One-click Claude Code and Codex hooks for DeepSeek Harness: auto-discovers your existing hooks config and runs it on the official bridge plugins. |
| 291 | [cKNKSnd/dsh-model-provider-badge](https://github.com/cKNKSnd/dsh-model-provider-badge) | 0 | 2026-08-19 | 2026-08-23 | DeepSeek Harnes 输入框当前模型提供商名称 |
| 292 | [cmhaoren-sudo/dsh-tab-status](https://github.com/cmhaoren-sudo/dsh-tab-status) | 0 | 2026-08-22 | 2026-08-23 | DSH plugin: leave long-running tasks and watch yellow/green/blue on the Firefox, Chrome, or Edge tab. 长程任务可切出去，标签仍能看到状态。 |
| 293 | [cn-zhangpeng/dsh-shanhai-stats](https://github.com/cn-zhangpeng/dsh-shanhai-stats) | 0 | 2026-08-22 | 2026-08-23 | 山海系列 DeepSeek Harness 用量统计插件：总量徽章、每日走势、GitHub 风格热力图、按模型/提供商分组明细 |
| 294 | [co-Elly/dsh-plugin-vision](https://github.com/co-Elly/dsh-plugin-vision) | 0 | 2026-08-22 | 2026-08-22 | 👁️ Give your DeepSeek Harness the gift of sight — enables pure-text LLMs to analyze images via Zhipu's free GLM-4V-Flash vision model |
| 295 | [Co-Kyo/dsh-interview-forge](https://github.com/Co-Kyo/dsh-interview-forge) | 0 | 2026-08-22 | 2026-08-22 | interview-forge-plugin for deepseek harness |
| 296 | [coffee-man666/dsh-lens](https://github.com/coffee-man666/dsh-lens) | 0 | 2026-08-22 | 2026-08-23 | Repository and agent-runtime analysis skills as an installable DeepSeek Harness (dsh) plugin |
| 297 | [coldfish486/dsh-anime25d-pets](https://github.com/coldfish486/dsh-anime25d-pets) | 0 | 2026-08-23 | 2026-08-22 | Anime2.5DRig × DSH 桌宠：只需准备一张分图层 PSD，即可获得带自动装配、发丝物理、表情动画和状态镜像的桌宠 |
| 298 | [CREAIT-nl/dsh-plugins](https://github.com/CREAIT-nl/dsh-plugins) | 0 | 2026-08-22 | 2026-08-23 | Plugins for DeepSeek Harness: deep research as an agent preset, per-model generation limits, Claude Code hook compatibility, and web fetch/search tools. |
| 299 | [DaoCaoRenH/dsh-openai-responses-bridge](https://github.com/DaoCaoRenH/dsh-openai-responses-bridge) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness plugin for third-party OpenAI Responses and native Gemini APIs, with custom providers, model discovery, and hosted web search. |
| 300 | [DaoCaoRenH/dsh-plugin-manager](https://github.com/DaoCaoRenH/dsh-plugin-manager) | 0 | 2026-08-20 | 2026-08-22 | Visual manager for DeepSeek Harness configuration sets, Plugins, Skills, and MCP servers. |
| 301 | [dat-lequoc/dsh-shots](https://github.com/dat-lequoc/dsh-shots) | 0 | 2026-08-22 | 2026-08-22 | Shots tab for DeepSeek Harness: live screenshot player over a browser daemon's shots/ feed (dsh plugin) |
| 302 | [DaXiGua732/start-dsh](https://github.com/DaXiGua732/start-dsh) | 0 | 2026-08-22 | 2026-08-22 | 一个能够直接快速启动DSH的ps脚本，具备高峰时段检测功能，高峰时段启动时不会直接进入DSH，反之直接进入，帮助个人开发者省钱省力 |
| 303 | [dddzzz123-dz/dsh-read-image-plugin](https://github.com/dddzzz123-dz/dsh-read-image-plugin) | 0 | 2026-08-22 | 2026-08-22 | Image input fallback for DeepSeek Harness with native multimodal model detection and Volcengine Ark vision. |
| 304 | [DecarbonizedGlucose/dsh-memory-note](https://github.com/DecarbonizedGlucose/dsh-memory-note) | 0 | 2026-08-17 | 2026-08-23 | Lightweight local cross-session memory for DeepSeek Harness |
| 305 | [DecresLuna/DSH-Service](https://github.com/DecresLuna/DSH-Service) | 0 | 2026-08-22 | 2026-08-22 | DSH Service - DeepSeek Harness Mac 菜单栏服务管理器 |
| 306 | [deluo/dsh-usage-display](https://github.com/deluo/dsh-usage-display) | 0 | 2026-08-22 | 2026-08-23 | 在 dsh（DeepSeek Harness）会话头部展示模型厂商余额/用量徽标的插件：内置 DeepSeek 余额、MiniMax Token Plan 与智谱 GLM Coding Plan 配额，适配器架构支持接入更多厂商；host 侧按轮次取数，经 SSE 同步到浏览器。 |
| 307 | [DemoJ/proactive-notify](https://github.com/DemoJ/proactive-notify) | 0 | 2026-08-20 | 2026-08-22 | 一个运行在 DeepSeek Harness（DSH）Web GUI 上的消息通知插件 |
| 308 | [DevViking-Persike/dsh-cliproxy](https://github.com/DevViking-Persike/dsh-cliproxy) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: routes cliproxy-claude and cliproxy-openai through a local CLIProxyAPI, so the agent reaches your own CLI subscriptions |
| 309 | [DevViking-Persike/dsh-docker](https://github.com/DevViking-Persike/dsh-docker) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: Docker container, image, log, and Compose tools for the agent, over the local Docker CLI |
| 310 | [DevViking-Persike/dsh-monaco](https://github.com/DevViking-Persike/dsh-monaco) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: serves the Monaco editor distribution over a host HTTP route, so an editor plugin needs no CDN |
| 311 | [dHR-P/dsh-safe-launch](https://github.com/dHR-P/dsh-safe-launch) | 0 | 2026-08-23 | 2026-08-23 | DSH (DeepSeek Harness) plugin: dsh-safe-launch - desktop safe-start launcher with last-good boot config, consent-gated canary updates for dsh & plugins, compatibility-checked plugin installation. DeepSeek Harness safe launcher plugin |
| 312 | [DiligenceLai/dsh-memory-ga](https://github.com/DiligenceLai/dsh-memory-ga) | 0 | 2026-08-22 | 2026-08-22 | Gated GA-style layered memory for DeepSeek Harness: hard-injected L1 index + RULES, session working checkpoint, settlement ritual to Skills/L1/L2 - no silent auto-retain. |
| 313 | [DosterBool/dsh-zombie-gc](https://github.com/DosterBool/dsh-zombie-gc) | 0 | 2026-08-22 | 2026-08-22 | DSH 插件：开机清理僵尸 agent（已收尾会话仍挂 registry，导致退出重进后输入框卡死） |
| 314 | [dougen/dsh-deepseek-usage](https://github.com/dougen/dsh-deepseek-usage) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek usage sidebar plugin for DeepSeek Harness: account balance (official API), current unit pricing and peak/off-peak indicator, zh/en UI. |
| 315 | [dsh-plugins/dsh-network-settings](https://github.com/dsh-plugins/dsh-network-settings) | 0 | 2026-08-21 | 2026-08-22 | A DeepSeek Harness plugin that bundles three network capabilities — User-Agent rewriting (from @dsh-plugin/dsh-user-agent), a HTTP / HTTPS-CONNECT / SOCKS5 proxy (from dsh-net-proxy), and configurable request auto-retry — all driven from a single 网络设置 (Network) tab in the Web settings. |
| 316 | [dsh-plugins/dsh-user-agent](https://github.com/dsh-plugins/dsh-user-agent) | 0 | 2026-08-21 | 2026-08-22 | Rewrites the User-Agent sent by every outgoing HTTP request (LLM API calls and other global-fetch traffic) to a value of your choice, configured live from a dedicated UA 设置 (User-Agent) tab in the Web settings. 为 dsh 发出的所有出站 HTTP 请求（LLM API 调用等走全局 fetch 的流量）改写 User-Agent，并可在 Web 设置的 UA 设置 选项卡中实时配置。 |
| 317 | [DSHCorrectover/ccs-runtime-verifier](https://github.com/DSHCorrectover/ccs-runtime-verifier) | 0 | 2026-08-22 | 2026-08-23 | CCS Runtime Verifier Skill — 7-dimension runtime verification for MCP tool calls. Structure, Schema, Latency, Cost, Identity, Integrity, Security checks. |
| 318 | [DSHCorrectover/dsh-ccs-security](https://github.com/DSHCorrectover/dsh-ccs-security) | 0 | 2026-08-22 | 2026-08-23 | CCS security plugin for DeepSeek Harness — 16-rule bidirectional scanning, Ed25519 receipts, P50 <3μs. Blocks rmdir escape, command injection, credential exfiltration. |
| 319 | [duyanta123/dsh-refactor-insight](https://github.com/duyanta123/dsh-refactor-insight) | 0 | 2026-08-22 | 2026-08-23 | Turn codebase smells into an executable, priority-ordered refactoring plan (file-length / deep-nesting / TODO-density). |
| 320 | [dygin/dsh-recover-context](https://github.com/dygin/dsh-recover-context) | 0 | 2026-08-19 | 2026-08-23 | hsd agent context make recover or reedit |
| 321 | [Elave-66/dsh-blue-sea-player](https://github.com/Elave-66/dsh-blue-sea-player) | 0 | 2026-08-23 | 2026-08-23 | 蓝海之约鲸鱼娘 DSH 播放器插件：12 套皮肤 · 5 首默认音乐 · CD 旋转封面 · 收纳小球 |
| 322 | [elmaxid/dsh-manage](https://github.com/elmaxid/dsh-manage) | 0 | 2026-08-21 | 2026-08-22 | Instalacion y administracion de DeepSeek Harness (dsh): install/start/stop/update/status para puestos dev |
| 323 | [elonnzhang/dsh-plugin-template](https://github.com/elonnzhang/dsh-plugin-template) | 0 | 2026-08-21 | 2026-08-23 | DeepSeek Harness (dsh) 插件开发模版：最小化模版 + 全能力模版，含构建方式与加载到 dsh 的完整路径 |
| 324 | [elonnzhang/dsh-system-prompt](https://github.com/elonnzhang/dsh-system-prompt) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness plugin for session-scoped system prompt inspection |
| 325 | [enoughpower/dsh-harmony](https://github.com/enoughpower/dsh-harmony) | 0 | 2026-08-22 | 2026-08-23 | DSH Harmony 客户端 搭配 dsh-pocket 使用 |
| 326 | [Entity-Him/dsh-hiboard-push](https://github.com/Entity-Him/dsh-hiboard-push) | 0 | 2026-08-23 | 2026-08-23 | Push task-completion messages to the Huawei HarmonyOS assistant-today (负一屏) card feed from DeepSeek Harness — wire-compatible with the OpenClaw today-task skill. |
| 327 | [eomis/packhub-workbench-assistant](https://github.com/eomis/packhub-workbench-assistant) | 0 | 2026-08-23 | 2026-08-23 | DSH Desktop workbench installer, switcher, and updater |
| 328 | [esonx/dsh-workforce](https://github.com/esonx/dsh-workforce) | 0 | 2026-08-23 | 2026-08-23 | Project-scoped organization and long-lived AI workforce layer for DeepSeek Harness |
| 329 | [ESxyzbil/dsh-official-document-mode](https://github.com/ESxyzbil/dsh-official-document-mode) | 0 | 2026-08-22 | 2026-08-23 | DSH ??????:?????? + ??????? + ???? |
| 330 | [Evan1u/deepseek-harness-desktop](https://github.com/Evan1u/deepseek-harness-desktop) | 0 | 2026-08-22 | 2026-08-23 | Light-weight Desktop App for Deepseek Harness |
| 331 | [exoticknight/dsh-labnana](https://github.com/exoticknight/dsh-labnana) | 0 | 2026-08-22 | 2026-08-22 | Labnana image generation for DeepSeek Harness: text-to-image / image-to-image / precise editing — chat image cards, credentials-domain API key, settingsScope UI |
| 332 | [fan56/dsh-llm-net-retry](https://github.com/fan56/dsh-llm-net-retry) | 0 | 2026-08-22 | 2026-08-22 | dsh plugin: bounded retry for gateway network_error failures the stock retry policy cannot classify |
| 333 | [fanfan6/dsh-model-search](https://github.com/fanfan6/dsh-model-search) | 0 | 2026-08-22 | 2026-08-22 | DSH 模型搜索插件 - 跨平台快速筛选模型 |
| 334 | [fbzz/readproof](https://github.com/fbzz/readproof) | 0 | 2026-08-21 | 2026-08-22 | Readproof — the lockfile and replay primitive for what AI agents read: stable identity, freshness policy, content-addressed snapshots, per-run manifests, diff, byte-exact replay, evidence bundles. |
| 335 | [Fisfzy/dsh-cae-agent](https://github.com/Fisfzy/dsh-cae-agent) | 0 | 2026-08-21 | 2026-08-23 | 让 DeepSeek Harness (DSH) 通过原生工具直接操控本机 Abaqus/CAE 的 Cordis 插件。21 个 DSH 原生工具覆盖完整建模链（几何/材料/网格/接触/分析步/载荷/边界/作业/ODB），TypeScript 编写，socket bridge 直连本机（不走 MCP）。 |
| 336 | [fishOfOUC/plugin-ui-controls](https://github.com/fishOfOUC/plugin-ui-controls) | 0 | 2026-08-23 | 2026-08-23 | Plugin control composer panel: the conversation.input.plugins seat over the pluginInventory Remote |
| 337 | [flowingboy/dsh-local-perf](https://github.com/flowingboy/dsh-local-perf) | 0 | 2026-08-23 | 2026-08-23 | Durable DeepSeek Harness bundle: local-model performance tuning as a re-installable plugin layer (compaction, tool-result pruning, time context, cloud title routing, text-toolcall guard) — survives dsh updates |
| 338 | [flyhigao/dsh-produced-file-paths](https://github.com/flyhigao/dsh-produced-file-paths) | 0 | 2026-08-20 | 2026-08-23 | DSH Web plugin to show and copy absolute paths for produced files |
| 339 | [fogmodel/dsh-workspace-jump](https://github.com/fogmodel/dsh-workspace-jump) | 0 | 2026-08-23 | 2026-08-23 | DSH web plugin: quickly create or switch to a workspace from a directory path via the sidebar Workspace button. |
| 340 | [frederico-kluser/dsh-plugin-dev-agent-skill](https://github.com/frederico-kluser/dsh-plugin-dev-agent-skill) | 0 | 2026-08-22 | 2026-08-22 | Global agent skill: create, extend, secure, test and publish Cordis plugins for the DeepSeek Harness (DSH). Verified-by-measurement API surface (ctx.webServer, spawn(spec)), frontend levers, IPC, security, testing, packaging & publishing. |
| 341 | [Frog755/dsh-prompt-vault](https://github.com/Frog755/dsh-prompt-vault) | 0 | 2026-08-22 | 2026-08-22 | Prompt Vault: 输入框上方的提示词库（DSH 插件）— 📚 按钮展开面板，点条目一键填入 prompt。DeepSeek Harness prompt library plugin. |
| 342 | [fuzhengwei/walioffice-dsh-plugin](https://github.com/fuzhengwei/walioffice-dsh-plugin) | 0 | 2026-08-19 | 2026-08-22 | Deepseek Harness Walioffice 办公软件 插件 |
| 343 | [FYHC1/dsh-web-manager](https://github.com/FYHC1/dsh-web-manager) | 0 | 2026-08-20 | 2026-08-23 | dsh-plugin + Windows tray manager for DeepSeek Harness WebUI (dsh web): standalone Edge app-window with the official whale icon, quick-launch desktop shortcuts for Windows/WSL, systemd hosting, runtime bridge, self-update. Legacy shortcut-only plugin (v1.x): https://github.com/FYHC1/dsh-webui-installer |
| 344 | [Gaines-cz/dsh-a-share-screener](https://github.com/Gaines-cz/dsh-a-share-screener) | 0 | 2026-08-21 | 2026-08-22 | A-share stock screening plugin for DeepSeek Harness (dsh): pluggable strategies, Tushare token via credentials ref, free Eastmoney/Tencent fallback. |
| 345 | [Gan332/dsh-typography](https://github.com/Gan332/dsh-typography) | 0 | 2026-08-23 | 2026-08-23 | Typography plugin for DeepSeek Harness - independent interface & code fonts, online presets, zero-conversion local font library (woff2/ttf/otf) |
| 346 | [Gcd1949/dsh-tools](https://github.com/Gcd1949/dsh-tools) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) utilities: session-manager plugin & Windows control panel |
| 347 | [GooDAnDReaDY/dsh-grok-xsearch](https://github.com/GooDAnDReaDY/dsh-grok-xsearch) | 0 | 2026-08-21 | 2026-08-22 | x_search tool for DeepSeek Harness via separate SuperGrok OAuth (X/Twitter search) |
| 348 | [GooDAnDReaDY/dsh-image-gen](https://github.com/GooDAnDReaDY/dsh-image-gen) | 0 | 2026-08-18 | 2026-08-23 | Image generation for DeepSeek Harness: a generate_image tool backed by the FAL queue API, with the picture shown inline in the conversation |
| 349 | [GooDAnDReaDY/dsh-russian-lang](https://github.com/GooDAnDReaDY/dsh-russian-lang) | 0 | 2026-08-23 | 2026-08-23 | Russian localization for the DeepSeek Harness web UI: ru dictionaries for core namespaces and a third option in the native language list (Settings - General - Language). |
| 350 | [GreenLv/dsh-session-insights](https://github.com/GreenLv/dsh-session-insights) | 0 | 2026-08-21 | 2026-08-22 | Local-first, evidence-backed workflow retrospectives for DeepSeek Harness |
| 351 | [gubai-future/dsh-background-web](https://github.com/gubai-future/dsh-background-web) | 0 | 2026-08-22 | 2026-08-23 | Self-contained whole-window background plugin for DeepSeek Harness web: browser file picker, host-side single-slot storage, and a General-settings preference row. |
| 352 | [guhanfei-ai/dsh-mindmap](https://github.com/guhanfei-ai/dsh-mindmap) | 0 | 2026-08-22 | 2026-08-23 | 让DSH帮你快速制作思维脑图 |
| 353 | [Gyanano/dsh-grok-auth](https://github.com/Gyanano/dsh-grok-auth) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness plugin that reuses the official Grok CLI login (SuperGrok / X Premium OAuth) for an xai LLM route |
| 354 | [Hades03/dsh-model-quota-usage](https://github.com/Hades03/dsh-model-quota-usage) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: DeepSeek balance and per-provider/model token usage in a draggable overlay. |
| 355 | [hanxuanliang/dsh-chaos](https://github.com/hanxuanliang/dsh-chaos) | 0 | 2026-08-15 | 2026-08-23 | Durable multi-agent collaboration for DeepSeek Harness: channels, threads, tasks, and resumable agent sessions. |
| 356 | [HaoyueQin/dsh-deepseek-monitor](https://github.com/HaoyueQin/dsh-deepseek-monitor) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness web plugin: DeepSeek balance & platform usage monitoring inside the official Settings-Models-DeepSeek card, plus a live balance chip left of the model name in the composer tool row. Ported from DeepSeekMonitorWindows. |
| 357 | [Harvey-Will/dsh-vision-analysis](https://github.com/Harvey-Will/dsh-vision-analysis) | 0 | 2026-08-21 | 2026-08-22 | Image understanding for the DeepSeek Harness — analyze_image tool with 8 modes, any OpenAI/Anthropic-compatible vision endpoint |
| 358 | [Harzva/dsh-agent-project-sync](https://github.com/Harzva/dsh-agent-project-sync) | 0 | 2026-08-23 | 2026-08-23 | Synchronize Codex and Claude project directories into native DeepSeek Harness workspaces. |
| 359 | [helibeiqi/dsh-intent-network](https://github.com/helibeiqi/dsh-intent-network) | 0 | 2026-08-23 | 2026-08-23 | 将用户意图解析为可编辑、可观测、可学习的多跳工具调用图，消费 CDP 语义与 adapter 桥接工具 |
| 360 | [Hjay1101/dsh-ios-control](https://github.com/Hjay1101/dsh-ios-control) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 插件：手机扫码遥控电脑上的 agent —— 在 dsh-remote-link 基础上增强会话持久化（dsh 重启后已配对设备保持登录）、iOS 主屏图标等 |
| 361 | [Hjay1101/dsh-plugin-token-usage](https://github.com/Hjay1101/dsh-plugin-token-usage) | 0 | 2026-08-22 | 2026-08-23 | GitHub-style token usage heat map for DeepSeek Harness — day/week/month granularity, per-model breakdown, hover-today badge. Read-only, fully local. |
| 362 | [hjdhnx/dsh-desktop](https://github.com/hjdhnx/dsh-desktop) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness 桌面端 -- 从 Electron 迁移到 Tauri(Rust 壳 + Node Sidecar)架构 |
| 363 | [honyKing/dsh-session-archive-plugin](https://github.com/honyKing/dsh-session-archive-plugin) | 0 | 2026-08-23 | 2026-08-23 | DSH 上下文存档与历史检索插件：自动压缩前把会话完整存档（zstd 解码为可读 jsonl + 摘要），压缩后按需全文检索历史对话。内置 archive_session / search_archive 工具与打包技能，dsh plugin add 一键安装。 |
| 364 | [htfc786/dsh-awake](https://github.com/htfc786/dsh-awake) | 0 | 2026-08-16 | 2026-08-23 | dsh-awake · 守夜人：在 agent 任务执行期间阻止操作系统休眠 |
| 365 | [hxt9805/dsh-remote-tailscale](https://github.com/hxt9805/dsh-remote-tailscale) | 0 | 2026-08-22 | 2026-08-22 | DSH plugin: open the local DSH web UI on your other Tailscale devices |
| 366 | [hyperion2144/dsh-desktop-tauriapp](https://github.com/hyperion2144/dsh-desktop-tauriapp) | 0 | 2026-08-18 | 2026-08-23 | Tauri 2 desktop shell wrapping the DeepSeek Harness Web GUI (macOS + Windows) — tray daemon, auto-launch/reuse of local dsh, --patch plugin injection, mobile access via LAN/tunnel pairing with cloudflared one-click tunnel. |
| 367 | [hyperion2144/dsh-hashline-edittool](https://github.com/hyperion2144/dsh-hashline-edittool) | 0 | 2026-08-20 | 2026-08-22 | Hash-anchored read/edit/undo_last_edit tools for DeepSeek Harness (dsh) |
| 368 | [hzthzt/dsh-skill-switch](https://github.com/hzthzt/dsh-skill-switch) | 0 | 2026-08-22 | 2026-08-23 | Windows Junction-based global Skill switcher for DeepSeek Harness Web. |
| 369 | [hzthzt/dsh-summary-panel](https://github.com/hzthzt/dsh-summary-panel) | 0 | 2026-08-23 | 2026-08-23 | Extensible Codex-style pinned summary panel for DeepSeek Harness Web. |
| 370 | [IceApriler/dsh-remote-mobile](https://github.com/IceApriler/dsh-remote-mobile) | 0 | 2026-08-21 | 2026-08-23 | DeepSeek Harness 远程与移动端安全网关插件：零修改 DSH 底层代码安全开放局域网与 Tailscale 连接 \| DeepSeek Harness (DSH) Remote & Mobile Security Guard: safely opens Tailscale/LAN with zero core modifications, QR scan auth, RSA encryption & brute-force defense. |
| 371 | [iguowz/dsh-cortex](https://github.com/iguowz/dsh-cortex) | 0 | 2026-08-23 | 2026-08-23 | 低成本多模型编排插件（Cortex）：大模型规划验收，子agent小模型执行，降本保质 |
| 372 | [imaginevoldermert/dsh-minimal-launcher-plugin](https://github.com/imaginevoldermert/dsh-minimal-launcher-plugin) | 0 | 2026-08-23 | 2026-08-23 | A minimal Windows launcher plugin for DeepSeek Harness |
| 373 | [imkingjh999/dsh-deepsea](https://github.com/imkingjh999/dsh-deepsea) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin: 深海垂钓 —— context 越深钩越沉，答完钓起镭射生物卡 \| Deep-sea fishing holo cards |
| 374 | [Innocent-children/dev-flow](https://github.com/Innocent-children/dev-flow) | 0 | 2026-08-14 | 2026-08-22 | Local process control and recovery for Codex and DeepSeek Harness: explicit scope, verification budgets, and durable task state. |
| 375 | [isirin1131/dsh-easy-galgame](https://github.com/isirin1131/dsh-easy-galgame) | 0 | 2026-08-23 | 2026-08-23 | Easy Galgame 模式：一个文件 = 角色卡 + 世界书 + 剧本 + 规则 + 状态的 all-in-one 提示词。DSH 插件提供 galgame_read / galgame_write / galgame_ask 与 Galgame 模式系统提示词。 |
| 376 | [iyam-x/iyam-dsh-desktop](https://github.com/iyam-x/iyam-dsh-desktop) | 0 | 2026-08-21 | 2026-08-22 | a deepseek harness desktop，DeepSeek Harness（DSH）的跨平台原生桌面客户端。内置完整 DSH 内核与 Node.js 运行时，无需联网、无需预先安装 Node.js 即可开箱即用，带有系统通知，自定义主题 |
| 377 | [jackuh105/dsh-message-edit](https://github.com/jackuh105/dsh-message-edit) | 0 | 2026-08-23 | 2026-08-23 | Edit or undo your sent messages in DeepSeek Harness's Web GUI — hides everything after from chat view and model context. |
| 378 | [Jaeger0624/dsh-conversation-nav](https://github.com/Jaeger0624/dsh-conversation-nav) | 0 | 2026-08-23 | 2026-08-23 | Codex-style conversation turn navigation for DeepSeek Harness Web GUI: piano-key rail, hover preview with send time, click-to-jump, per-turn marks |
| 379 | [jedzqer/dsh-retry-plugin](https://github.com/jedzqer/dsh-retry-plugin) | 0 | 2026-08-21 | 2026-08-22 | 一款用于DeepSeek Harness（DSH）的插件，可以在AI API请求错误时自动发送继续的消息以重试。A plugin for DeepSeek Harness (DSH) that automatically sends continuation messages to retry when AI API requests fail. |
| 380 | [Jiazliang/dsh-worktree](https://github.com/Jiazliang/dsh-worktree) | 0 | 2026-08-22 | 2026-08-22 | Fork-like git worktree for DeepSeek Harness (DSH): create an isolated git worktree from a workspace/session and open a new session in it — optionally forking the conversation so the child inherits all history and works on its own branch. |
| 381 | [jieguanya/tugu-dsh-balance-widget](https://github.com/jieguanya/tugu-dsh-balance-widget) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (DSH) 余额插件：实时余额/今日消耗/7-30天趋势图 |
| 382 | [Jimmyzwang-cloud/dsh-inkscreen-theme](https://github.com/Jimmyzwang-cloud/dsh-inkscreen-theme) | 0 | 2026-08-22 | 2026-08-23 | Ink-and-paper Apple-glass theme for DeepSeek Harness (dsh) web client, with a handwritten jimmy sidebar brand |
| 383 | [Jinsight-gif/dsh-plugin-gitbash](https://github.com/Jinsight-gif/dsh-plugin-gitbash) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness 插件：在 DSH 会话里运行 Windows 侧 Git for Windows Bash（WSL 自动探测路径）。Run commands on the Windows host's Git for Windows Bash from DeepSeek Harness — WSL-aware, auto-detects git-bash. |
| 384 | [jisi71/dsh-memories](https://github.com/jisi71/dsh-memories) | 0 | 2026-08-21 | 2026-08-22 | Dual-ledger cross-session memory for DeepSeek Harness: auto-extracted long-term facts (MEMORY.md) + living project progress ledger (PROGRESS.md), recalled into every new session. Inspired by OpenAI Codex's memory pipeline. |
| 385 | [JMweitao/dsh-local-plugin-installer](https://github.com/JMweitao/dsh-local-plugin-installer) | 0 | 2026-08-21 | 2026-08-22 | 从 DSH Web 设置页安装并构建本地插件 / Install and build local DeepSeek Harness plugins from the Web settings page. |
| 386 | [JohnXu22786/auditrail](https://github.com/JohnXu22786/auditrail) | 0 | 2026-08-23 | 2026-08-23 | Security auditing and session forensics for DeepSeek Harness (dsh): full tool-invocation-chain recording (who/what/files/status/duration) fr |
| 387 | [JohnXu22786/calendar](https://github.com/JohnXu22786/calendar) | 0 | 2026-08-23 | 2026-08-23 | CalDAV + iCalendar + RRULE calendar integration bundle for DeepSeek Harness (dsh), with Chinese-bias (lunar calendar / holidays / Asia/Shang |
| 388 | [JohnXu22786/ci-runner](https://github.com/JohnXu22786/ci-runner) | 0 | 2026-08-23 | 2026-08-23 | Trigger GitHub Actions workflow runs and local test pipelines, stream their logs back, and on failure hand the tail of the log to DeepSeek f |
| 389 | [JohnXu22786/dsh-web-submit](https://github.com/JohnXu22786/dsh-web-submit) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness plugin: run headless-style tasks through the live dsh web process — CLI-invoked sessions appear in the Web UI in real time (POST /x/headless, GET status, SSE live events). |
| 390 | [JohnXu22786/subtitle-studio](https://github.com/JohnXu22786/subtitle-studio) | 0 | 2026-08-23 | 2026-08-23 | Multi-language subtitle translation workflow for dsh: SRT/VTT parsing, sentence-level LLM translation, bilingual merge, alignment validation |
| 391 | [JollY-Life/jolly-dsh-vision](https://github.com/JollY-Life/jolly-dsh-vision) | 0 | 2026-08-21 | 2026-08-22 | ModLens 风格的 DeepSeek Harness 视觉桥接插件：deepseek-v4-pro 当大脑、deepseek-v4-flash-vision-exp 当眼睛，提供 vision 工具与 (ds vision) 视觉孪生模型，让纯文本模型也能看图、直接贴图。 |
| 392 | [JovanHE/ds-balance](https://github.com/JovanHE/ds-balance) | 0 | 2026-08-22 | 2026-08-23 | A minimal DeepSeek account balance widget for the DeepSeek Harness web GUI |
| 393 | [jsoncode/dsh-balance-by-token](https://github.com/jsoncode/dsh-balance-by-token) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness（dsh）双面插件（宿主 + 浏览器半边）：查看 DeepSeek 账户余额， 按 token 用量估算费用，价格按模型 × 高峰/空闲时段在线配置。所有能力收敛在 统一弹框中（侧边栏底部「余额」入口），另在会话头部提供实时 「当前会话 ≈xx CNY \| 余额 xx CNY」按钮。界面中英双语（跟随宿主 UI 语言）。 |
| 394 | [junarch/voice_for_dsh](https://github.com/junarch/voice_for_dsh) | 0 | 2026-08-22 | 2026-08-23 | DSH Web 语音朗读插件：每轮输出口语化转写后朗读（代码/表格自动跳过）；免费浏览器 TTS + 可选豆包云 TTS。Read-aloud plugin for DeepSeek Harness web. |
| 395 | [jyao-SUSE-power-group/dsh-provider-rate-limit](https://github.com/jyao-SUSE-power-group/dsh-provider-rate-limit) | 0 | 2026-08-23 | 2026-08-23 | dsh-provider-rate-limit |
| 396 | [KaichenCurry/dsh-design-mode](https://github.com/KaichenCurry/dsh-design-mode) | 0 | 2026-08-22 | 2026-08-23 | Agentic image Design Mode for DeepSeek Harness: infinite canvas, ask_user clarification, image tools, comments, and provider routing. |
| 397 | [KamChiHei/dsh-deepseek-usage-monitor](https://github.com/KamChiHei/dsh-deepseek-usage-monitor) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) plugin: token usage accounting and account balance with a live status card in DSH Web |
| 398 | [KannaKuron/dsh-gitbash-shell](https://github.com/KannaKuron/dsh-gitbash-shell) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin: Git Bash shell for all agent modes on Windows (replaces pwsh executor) |
| 399 | [kedoupi/xiaotaozi-dsh](https://github.com/kedoupi/xiaotaozi-dsh) | 0 | 2026-08-21 | 2026-08-22 | xiaotaozi-dsh：小桃子 DeepSeek Harness 插件与 Mac 客户端 |
| 400 | [keke-shy/dsh-desktop](https://github.com/keke-shy/dsh-desktop) | 0 | 2026-08-16 | 2026-08-22 | Minimal Electron desktop shell embedding the official DeepSeek Harness web profile |
| 401 | [KeyboardPrince/dsh-skill-manager](https://github.com/KeyboardPrince/dsh-skill-manager) | 0 | 2026-08-22 | 2026-08-22 | DSH 设置界面中的技能管理器插件：可视化管理全局/项目级 Skill（导入、编辑、删除、启用/禁用 SKILL.md 目录） |
| 402 | [Kickstartparty3459/dsh-ios](https://github.com/Kickstartparty3459/dsh-ios) | 0 | 2026-08-22 | 2026-08-23 | Run live iOS simulators and your real iPhone over USB inside DeepSeek Harness conversations with 22 agent tools, MJPEG previews, and SwiftUI hot reload. |
| 403 | [kittimzhe/dsh-session-export](https://github.com/kittimzhe/dsh-session-export) | 0 | 2026-08-22 | 2026-08-22 | Human-readable session transcript export for DeepSeek Harness — /transcript writes Markdown/JSON to a host path via ctx.sessionQuery (dsh-plugin) |
| 404 | [kkaktus463/dsh-plugin-desktop](https://github.com/kkaktus463/dsh-plugin-desktop) | 0 | 2026-08-23 | 2026-08-23 | Opens the DeepSeek Harness Web UI in a native window instead of a browser tab. |
| 405 | [Kompetenzteam/dsh-locale-de](https://github.com/Kompetenzteam/dsh-locale-de) | 0 | 2026-08-23 | 2026-08-23 | German UI translation plugin for DeepSeek Harness (locale de): registers all locale namespaces in German. Deutsche UI-Uebersetzung fuer den DeepSeek Harness. |
| 406 | [L3n3L/dsh-disk-cleaner](https://github.com/L3n3L/dsh-disk-cleaner) | 0 | 2026-08-22 | 2026-08-22 | Windows disk space analysis and safe cleanup plugin for DeepSeek Harness |
| 407 | [LaoQianwocao/dsh-client-ui-board](https://github.com/LaoQianwocao/dsh-client-ui-board) | 0 | 2026-08-22 | 2026-08-23 | DSH Web 展板插件：会话视图第三标签，多层白板 + 锚点连线 |
| 408 | [LaoQianwocao/dsh-sound-player](https://github.com/LaoQianwocao/dsh-sound-player) | 0 | 2026-08-22 | 2026-08-23 | DSH Web 音效播放器插件（悬浮窗 + 情况触发音效 + 供其他插件使用的 API） |
| 409 | [Lbunc/dsh-local-llm-controller](https://github.com/Lbunc/dsh-local-llm-controller) | 0 | 2026-08-21 | 2026-08-22 | 为DSH接入本地大模型能力：在「设置→插件」页一键启停本地 llama.cpp 大模型（35B/9B，视觉×文本×快速/长上下文），卡片内配置、一条命令安装、自动注册，装完即用。 \| start/stop a local llama.cpp llama-server right from Settings → Plugins, with Qwen3.6-35B / Qwen3.5-9B (vision × text, fast × long-context) as session models — card config, one-command install, auto-registered. |
| 410 | [lc23313/dsh-autoupdate](https://github.com/lc23313/dsh-autoupdate) | 0 | 2026-08-23 | 2026-08-23 | dsh 内置自动更新插件 — Auto-update for DeepSeek Harness: safe version detection, exit-time apply, health check, auto-rollback & circuit breaker. |
| 411 | [lengquan88/dsh-dual-auto](https://github.com/lengquan88/dsh-dual-auto) | 0 | 2026-08-21 | 2026-08-22 | Dual-model auto-routing plugin for DeepSeek Harness: low-cost direct / high-cost upgrade + escape-learning closed loop |
| 412 | [leonardoxr/dsh-routed-subagent](https://github.com/leonardoxr/dsh-routed-subagent) | 0 | 2026-08-22 | 2026-08-22 | Complexity-routed subagent delegation for DeepSeek Harness: the model picks the runtime tier per task. |
| 413 | [LeonSone/dsh-trash](https://github.com/LeonSone/dsh-trash) | 0 | 2026-08-22 | 2026-08-22 | A DeepSeek Harness (DSH) plugin: every delete operation goes through a recoverable trash store — accidental deletes are one restore away. |
| 414 | [lhbsaa/dsh-visibridge](https://github.com/lhbsaa/dsh-visibridge) | 0 | 2026-08-17 | 2026-08-23 | DeepSeek Harness vision plugin: analyze_image (structured OCR evidence) + capture_image (USB camera visual loop). 摄像头视觉闭环 + 结构化证据，支持 Ollama / DeepSeek / Xiaomi 三后端。 |
| 415 | [lianginx/dsh-quote-selection](https://github.com/lianginx/dsh-quote-selection) | 0 | 2026-08-22 | 2026-08-22 | ❝ Quote selected chat text into the composer as a Markdown blockquote · DeepSeek Harness Web UI 插件：选中会话文字，一键引用 |
| 416 | [lifeopsgo/dsh-capability-toggle-plugin](https://github.com/lifeopsgo/dsh-capability-toggle-plugin) | 0 | 2026-08-22 | 2026-08-22 | Toggle individual agent capabilities (skills, MCP, tools, prompt, approval, guards) from the DSH WebUI composer — session / project / global. DSH 各种能力（mcp/skill/tool等）多层级开关灵活控制 |
| 417 | [lilightspeed/dsh-seekbuddy](https://github.com/lilightspeed/dsh-seekbuddy) | 0 | 2026-08-23 | 2026-08-23 | Desktop pet peer client for DeepSeek Harness (DSH): /api + WebSocket client, MCP server, desktop shell (Electron). |
| 418 | [LingYuYue1/dsh-workbench](https://github.com/LingYuYue1/dsh-workbench) | 0 | 2026-08-23 | 2026-08-23 | VSCode 风格工作台侧边栏：文件树 / 多标签预览 / CodeMirror 编辑 / 终端 / Git / 全库搜索 / 变更审查 \| Workbench sidebar panel for DeepSeek Harness |
| 419 | [LionGateOS/dsh-local-voice-dictation](https://github.com/LionGateOS/dsh-local-voice-dictation) | 0 | 2026-08-21 | 2026-08-23 | Local voice plugin for DeepSeek Harness: microphone dictation with local STT plus assistant-response Kokoro TTS playback. |
| 420 | [lishLRF/dsh-plugin-onekey](https://github.com/lishLRF/dsh-plugin-onekey) | 0 | 2026-08-22 | 2026-08-23 | 适配插件中心的一键安装/卸载 |
| 421 | [lispking/dsh-auto-evolve](https://github.com/lispking/dsh-auto-evolve) | 0 | 2026-08-22 | 2026-08-22 | A self-evolving plugin for DeepSeek Harness (dsh). It observes how the agent runs, proposes improvements to its own assets via the LLM, validates each proposal inside a sandboxed trial agent, and applies only verified mutations — with a versioned ledger and automatic rollback on regression. |
| 422 | [lispking/dsh-qq-skin](https://github.com/lispking/dsh-qq-skin) | 0 | 2026-08-22 | 2026-08-22 | A QQ NT messenger skin for DeepSeek Harness (dsh). Light and dark share one QQ NT language. |
| 423 | [litianshuo110/dsh-ds-vision-auto-route](https://github.com/litianshuo110/dsh-ds-vision-auto-route) | 0 | 2026-08-22 | 2026-08-22 | Route image-bearing turns to a configurable image-capable model for DeepSeek Harness |
| 424 | [LittleFishStars/dsh-opencode-tui](https://github.com/LittleFishStars/dsh-opencode-tui) | 0 | 2026-08-16 | 2026-08-22 | 为 DeepSeek Harness 制作的仿 OpenCode 的 TUI 界面插件 |
| 425 | [liukj98/dsh-ui-tools](https://github.com/liukj98/dsh-ui-tools) | 0 | 2026-08-19 | 2026-08-22 | deepseek harness tools 插件 |
| 426 | [liyongzheng666/dsh-browser-bridge](https://github.com/liyongzheng666/dsh-browser-bridge) | 0 | 2026-08-22 | 2026-08-22 | DSH browser bridge plugin + Firefox extension: browsers read/control via localhost WebSocket |
| 427 | [liyu34/dsh-wsl-tray](https://github.com/liyu34/dsh-wsl-tray) | 0 | 2026-08-22 | 2026-08-22 | 为运行在 WSL 里的 DeepSeek Harness（DSH）提供 Windows 桌面快捷方式与系统托盘启动器。 |
| 428 | [lmong11/dsh-game-center](https://github.com/lmong11/dsh-game-center) | 0 | 2026-08-21 | 2026-08-22 | AI-powered Game Center plugin for DeepSeek Harness, featuring Texas Holdem with 1–7 agent players. |
| 429 | [lovezi0/dsh-web-noOpenBrowser](https://github.com/lovezi0/dsh-web-noOpenBrowser) | 0 | 2026-08-20 | 2026-08-23 | deepseek harness服务启动不要打开浏览器 |
| 430 | [loyalchiiina/dsh-chat-image-lightbox](https://github.com/loyalchiiina/dsh-chat-image-lightbox) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin: display images inline in chat with lightbox zoom, download (save-as), and prev/next navigation |
| 431 | [ls-cool-123/dsh-account-balance](https://github.com/ls-cool-123/dsh-account-balance) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek account balance dashboard plugin for dsh web — shows your DeepSeek API balance above the chat window. |
| 432 | [LuckVd/dsh-pin-color](https://github.com/LuckVd/dsh-pin-color) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness (DSH) web 插件：会话置顶（本组/工作区全局）+ 会话 tab 颜色 + emoji，host 持久化，纯 DOM 增强不改 DSH 源码 |
| 433 | [lxxz1918/dsh-theme-customizer](https://github.com/lxxz1918/dsh-theme-customizer) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness（DSH）Web 界面自定义主题插件：背景/文字/框线/细节全可视化调整，可导入导出预设，持久化保存。 |
| 434 | [ly028716/dsh-memory-plugin](https://github.com/ly028716/dsh-memory-plugin) | 0 | 2026-08-20 | 2026-08-22 | Intelligent memory system for DSH - Track user preferences, tool usage, and project context to provide personalized recommendations |
| 435 | [lzyuan549/dsh-plugin-auth](https://github.com/lzyuan549/dsh-plugin-auth) | 0 | 2026-08-22 | 2026-08-22 | Username/password authentication gate for the DeepSeek Harness Web UI |
| 436 | [Machine-126/dsh-alert-sound](https://github.com/Machine-126/dsh-alert-sound) | 0 | 2026-08-23 | 2026-08-23 | Notification sound + Chinese voice alerts for the DeepSeek Harness web GUI (approval / answer / completion / error), with a settings page. |
| 437 | [Malenia12/seedance-video-generator](https://github.com/Malenia12/seedance-video-generator) | 0 | 2026-08-22 | 2026-08-22 | Seedance 2.5 video generator: DSH agent plugin + local web workbench |
| 438 | [MaRi23333/dsh-subagent-library](https://github.com/MaRi23333/dsh-subagent-library) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness 具名子代理库插件：settings 驱动的角色名册，list_subagents / delegate 工具与设置页。Named subagent roster plugin for DeepSeek Harness. |
| 439 | [mario03690/dsh-devkit](https://github.com/mario03690/dsh-devkit) | 0 | 2026-08-22 | 2026-08-22 | The small deterministic operations an agent needs mid-task. JSON/YAML round-trip, JSON Schema v |
| 440 | [mario03690/dsh-duizhang](https://github.com/mario03690/dsh-duizhang) | 0 | 2026-08-22 | 2026-08-22 | Reconciliation: statements, invoices and ledgers that have to balance. Bank/credit statement PD |
| 441 | [mario03690/dsh-kuajing](https://github.com/mario03690/dsh-kuajing) | 0 | 2026-08-22 | 2026-08-22 | Cross-border commerce: HS codes, customs invoices, mainland reachability. HS/HTS code lookup an |
| 442 | [mario03690/dsh-lines](https://github.com/mario03690/dsh-lines) | 0 | 2026-08-22 | 2026-08-22 | Freeze a working sequence into a hosted production line. Turn a sequence of tool calls that alr |
| 443 | [mario03690/dsh-validate](https://github.com/mario03690/dsh-validate) | 0 | 2026-08-22 | 2026-08-22 | test |
| 444 | [mario03690/dsh-writer](https://github.com/mario03690/dsh-writer) | 0 | 2026-08-22 | 2026-08-22 | Long-form drafts with the structure already decided. Blog posts, press releases, product and jo |
| 445 | [maxwell-feng/dsh-searxng-web](https://github.com/maxwell-feng/dsh-searxng-web) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness plugin: back the native web_search / web_fetch tools with your self-hosted SearXNG instance — keyless, private, no third-party search vendor. |
| 446 | [mba1398/dsh-done](https://github.com/mba1398/dsh-done) | 0 | 2026-08-23 | 2026-08-23 | One plugin that don't consume tokens. |
| 447 | [Mengshang-spec/dsh-plugin-trustlens](https://github.com/Mengshang-spec/dsh-plugin-trustlens) | 0 | 2026-08-23 | 2026-08-23 | Read-only DSH plugin security auditor with current-session model review |
| 448 | [MengYuil/dsh-ponytail](https://github.com/MengYuil/dsh-ponytail) | 0 | 2026-08-23 | 2026-08-23 | Lazy senior dev mode for DeepSeek Harness — ponytail port (always-on minimal-code ruleset, /ponytail-review/audit/debt/gain/help) |
| 449 | [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) | 0 | 2026-08-22 | 2026-08-22 | 1-Line AI Agent Scaffolding Generator for DeepSeek Harness (dsh) — Everything is a Plugin |
| 450 | [menotbobbybrown/dsh-plugin-browser](https://github.com/menotbobbybrown/dsh-plugin-browser) | 0 | 2026-08-22 | 2026-08-22 | Native Web Browser Automation Agent Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 451 | [menotbobbybrown/dsh-plugin-mcp](https://github.com/menotbobbybrown/dsh-plugin-mcp) | 0 | 2026-08-21 | 2026-08-22 | Universal Model Context Protocol (MCP) Bridge Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 452 | [menotbobbybrown/dsh-plugin-memory](https://github.com/menotbobbybrown/dsh-plugin-memory) | 0 | 2026-08-22 | 2026-08-22 | Persistent Knowledge Graph & Long-Term Memory Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 453 | [messiahyl/dsh-plugins](https://github.com/messiahyl/dsh-plugins) | 0 | 2026-08-21 | 2026-08-22 | DSH 插件总仓库：monorepo 开发 + 安装源（本地归档/npm/GitHub/索引）+ 第三方目录。国内网络友好，归档 sha256 校验。 |
| 454 | [mhwww/dsh-bg-image](https://github.com/mhwww/dsh-bg-image) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness (dsh) 背景图片插件：内置默认图 / 自定义上传 / Wallpaper Engine 创意工坊一键应用 / 视频壁纸 ffmpeg 高清抽帧 |
| 455 | [minyang2020/dsh-migrate-on-429](https://github.com/minyang2020/dsh-migrate-on-429) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (dsh) plugin: automatic session handoff when a session keeps hitting 429 TPM rate limits — cancel old, summarize handover, continue in a fresh session. True handoff, never parallel. |
| 456 | [MisRightW/dsh-taskboard](https://github.com/MisRightW/dsh-taskboard) | 0 | 2026-08-20 | 2026-08-21 | dsh-taskboard |
| 457 | [MitsukiJoe/dsh-better-ux](https://github.com/MitsukiJoe/dsh-better-ux) | 0 | 2026-08-17 | 2026-08-23 | Web UX kit for DeepSeek Harness: session row actions and a large model picker |
| 458 | [MitsukiJoe/dsh-vision-router-inline](https://github.com/MitsukiJoe/dsh-vision-router-inline) | 0 | 2026-08-17 | 2026-08-23 | Display companion for dsh-vision-router: square picture button on each original model row |
| 459 | [mokuyoaxis/agent-guard](https://github.com/mokuyoaxis/agent-guard) | 0 | 2026-08-22 | 2026-08-23 | Make destructive AI-agent actions reversible by default — quarantine + audit + human escalation for rm/git destructive operations. Reliability infrastructure, not a sandbox. |
| 460 | [Moolmool114/dsh-client-ui-recipes](https://github.com/Moolmool114/dsh-client-ui-recipes) | 0 | 2026-08-23 | 2026-08-23 | Interface Recipes — a DeepSeek Harness dsh.client plugin: user-defined, switchable chat-surface display schemes (timeline, result panel, process groups, catalog, dimming). |
| 461 | [MoonlitDropOfBlood/dsh-agent-approval](https://github.com/MoonlitDropOfBlood/dsh-agent-approval) | 0 | 2026-08-18 | 2026-08-23 | DSH 的自动审批权限插件 |
| 462 | [MoonlitDropOfBlood/dsh-memory-manager](https://github.com/MoonlitDropOfBlood/dsh-memory-manager) | 0 | 2026-08-18 | 2026-08-23 | DSH基本的记忆功能 |
| 463 | [MrmoLabs/dsh-mermaid](https://github.com/MrmoLabs/dsh-mermaid) | 0 | 2026-08-23 | 2026-08-23 | Render Mermaid code blocks as SVG diagrams in DeepSeek Harness Web, with diagram/code switching, streaming support, dark mode, strict security, and npm/GitHub installation. |
| 464 | [MS666666/dsh-archive-manager](https://github.com/MS666666/dsh-archive-manager) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness归档管理器 |
| 465 | [Mutton-hub/adatile-mcp](https://github.com/Mutton-hub/adatile-mcp) | 0 | 2026-08-22 | 2026-08-23 | AdaTile-MCP: high-resolution image adaptive tiling MCP server for DeepSeek vision model (deepseek-v4-flash-vision-exp). L1-L6 pipeline (fastpath, saliency, adaptive tiling, Files API assembly, streaming VLM, rule-based merge) + eval harness. Setup: clone, run setup.bat, add your agent MCP config -> see README. |
| 466 | [MuziiXzx/dsh-taskdone-notify](https://github.com/MuziiXzx/dsh-taskdone-notify) | 0 | 2026-08-23 | 2026-08-23 | 任务完成时通知用户 |
| 467 | [Nath-Vikky/dsh-modscope](https://github.com/Nath-Vikky/dsh-modscope) | 0 | 2026-08-23 | 2026-08-23 | On-demand V8 CPU profiler and Loader-aware plugin attribution for DeepSeek Harness |
| 468 | [NattoCB/dsh-web-search-session-follow](https://github.com/NattoCB/dsh-web-search-session-follow) | 0 | 2026-08-23 | 2026-08-23 | DSH web_search provider that follows the conversation's routed model provider — per-provider endpoint/credential/dialect table with built-in official fallback |
| 469 | [Nay-1/dsh-skill-manage](https://github.com/Nay-1/dsh-skill-manage) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 技能管理设置页插件：图形化管理用户级/项目级技能的安装、卸载与调用启停 |
| 470 | [Nigel211/dsh-text2img-compress](https://github.com/Nigel211/dsh-text2img-compress) | 0 | 2026-08-22 | 2026-08-22 | 把长文本渲染成图片发送，利用每图 384 token 封顶压缩 LLM 输入 token，专为DeepSeek Harness设计的插件；Pack long text into images to cut LLM input tokens (384/image cap) — a DeepSeek Harness plugin. |
| 471 | [NiuZhuang/dsh-git-ai](https://github.com/NiuZhuang/dsh-git-ai) | 0 | 2026-08-22 | 2026-08-23 | A DeepSeek Harness plugin that records which files the agent edited, with which model, and in which session into git-ai |
| 472 | [njuptlzf/dsh-dynamic-background](https://github.com/njuptlzf/dsh-dynamic-background) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness (DSH) 动态背景切换插件：上传 GIF/静态图与内置 12 色纯色调色板，定时丝滑交叉淡入淡出切换页面背景，聊天区自动叠加主题色保护层。安装：dsh plugin add github:njuptlzf/dsh-dynamic-background |
| 473 | [Nkjv2/dsh-ui-pet](https://github.com/Nkjv2/dsh-ui-pet) | 0 | 2026-08-23 | 2026-08-23 | A canvas sprite-sheet pet plugin for the DeepSeek Harness web GUI. A dsh bundle + client plugin that renders a pointer-following mascot in the shell.overlay layer. MIT licensed. |
| 474 | [NonchalantLudens/dsh-skin-collection](https://github.com/NonchalantLudens/dsh-skin-collection) | 0 | 2026-08-23 | 2026-08-23 | Multi-style skin collection for DeepSeek Harness (dsh) web GUI — 9 themes with scoped decoration CSS and a sidebar skin manager |
| 475 | [nxz1026/dsh-tray](https://github.com/nxz1026/dsh-tray) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness — Custom Windows Tray Launcher |
| 476 | [nxz1026/SinglePlayer](https://github.com/nxz1026/SinglePlayer) | 0 | 2026-08-22 | 2026-08-22 | 单身汉播放器，适配DeepSeek harness web的播放器，支持多平台聚合。Bachelor Player is a media player designed to integrate with DeepSeek Harness Web, supporting multi-platform content aggregation. |
| 477 | [oneinitAI/dsh-thunderforge](https://github.com/oneinitAI/dsh-thunderforge) | 0 | 2026-08-22 | 2026-08-23 | ⚡ ThunderForge — 励志做 0 元以内最 nb 的 DSH 插件（产品目标）：一站式 DSH 插件开发套件（单一 Bundle） |
| 478 | [oneirictouch/dsh-explorer-editor](https://github.com/oneirictouch/dsh-explorer-editor) | 0 | 2026-08-22 | 2026-08-22 | 左侧边栏的“资料浏览器”和主工作区的“文本编辑器”，页签方式展示，适合讨厌工作区被过度分割的人。 |
| 479 | [Oscar-Williams/dsh-deepatlas](https://github.com/Oscar-Williams/dsh-deepatlas) | 0 | 2026-08-22 | 2026-08-22 | DeepAtlas (dsh-插件导航) — task-aware plugin navigator for DeepSeek Harness: scan the dsh-plugin ecosystem, recommend by task, audit before install, and install only with explicit user consent. |
| 480 | [oxlyn/dsh-model-health](https://github.com/oxlyn/dsh-model-health) | 0 | 2026-08-22 | 2026-08-22 | dsh model health status check |
| 481 | [oxlyn/dsh-plugin-mgr](https://github.com/oxlyn/dsh-plugin-mgr) | 0 | 2026-08-22 | 2026-08-22 | deepseek harness plugin manager |
| 482 | [paulalesius/dsh-hindsight-advanced](https://github.com/paulalesius/dsh-hindsight-advanced) | 0 | 2026-08-23 | 2026-08-23 | Long-term memory for DeepSeek Harness agents: automatic recall each turn, a retain/recall/reflect tool, standing rules, and visibility you scope to the whole bank, a preset, or a session. |
| 483 | [pax-beehive/dsh-plugin-hub](https://github.com/pax-beehive/dsh-plugin-hub) | 0 | 2026-08-18 | 2026-08-22 | DSH plugin registry, version-locked Profiles, CLI, and rollback tooling for DeepSeek Harness. |
| 484 | [PetCT/dsh-plugin-marketplace](https://github.com/PetCT/dsh-plugin-marketplace) | 0 | 2026-08-23 | 2026-08-23 | DSH 插件市场 · A plugin marketplace inside DeepSeek Harness — browse, search, favorite, one-click download community plugins |
| 485 | [philmingdao/anno](https://github.com/philmingdao/anno) | 0 | 2026-08-16 | 2026-08-22 | Local-first HTML review and annotation for AI coding agents |
| 486 | [piaohua/dsh-schedule-command](https://github.com/piaohua/dsh-schedule-command) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的 /schedule 定时任务命令 —— 一句话创建会话内单次/周期任务，⏰ 标识自动识别定时会话。/schedule command for DeepSeek Harness — create session-local one-shot/recurring tasks in plain language; ⏰ marks schedule sessions at a glance. |
| 487 | [pick1e-morty/dsh-suggest-reply](https://github.com/pick1e-morty/dsh-suggest-reply) | 0 | 2026-08-22 | 2026-08-23 | 帮我想想 —— 一个基于 DSH-better-sidebar 的侧边栏 tab：用你自己写的 system prompt 对主对话最新一条 AI 回复生成候选回复，点击直填输入框。 |
| 488 | [picoaide/picoaide-harness](https://github.com/picoaide/picoaide-harness) | 0 | 2026-08-16 | 2026-08-23 | PicoAide Harness：企业级 DeepSeek Harness 一体化平台。桌面客户端 + 本地智能体引擎 + 管理后台，支持私有化部署。 |
| 489 | [Practice019/dsh-doubao-plugin](https://github.com/Practice019/dsh-doubao-plugin) | 0 | 2026-08-22 | 2026-08-23 | DSH 插件：通过本地 Quicker 转发（doubao web2api） 提供 `doubao_ask` 动态搜索/图片生成/多模态识图工具， 并支持**粘贴图片 → 本地路径**（paste-to-path）。 |
| 490 | [Practice019/dsh-kun-like-pet](https://github.com/Practice019/dsh-kun-like-pet) | 0 | 2026-08-15 | 2026-08-23 | Kun Like 桌宠 - DSH 桌面宠物插件 |
| 491 | [qewregrfhnm/dsh-session-manager](https://github.com/qewregrfhnm/dsh-session-manager) | 0 | 2026-08-22 | 2026-08-22 | Full session management plugin for DeepSeek Harness (DSH) web UI: delete/trash/restore, workspace grouping, move sessions between workspaces, unread markers, context compaction threshold. Fully local, bilingual zh/en. |
| 492 | [qianxiao1213/zcode-usage-stats](https://github.com/qianxiao1213/zcode-usage-stats) | 0 | 2026-08-22 | 2026-08-22 | 仿zcode的使用统计 - DSH Token 用量统计插件(趋势图/仪表盘/活跃热力图) v0.1.0 |
| 493 | [qinglang8609/deepseek_herdr](https://github.com/qinglang8609/deepseek_herdr) | 0 | 2026-08-21 | 2026-08-23 | 多智能体总指挥插件（DeepSeek Harness 原生版） ——让 DeepSeek 高效打开并指挥一个 claude / opencode / codex 智能体团队，实时看到每个智能体在做什么，通过共享记忆与任务看板编排多人协作。 |
| 494 | [qishuilalala/dsh-voice-mode](https://github.com/qishuilalala/dsh-voice-mode) | 0 | 2026-08-22 | 2026-08-23 | DSH 语音双工对话模式：流式 zipformer2 识别入可编辑草稿，可选唤醒词，Edge TTS 按句朗读 + 实时字幕，开口即打断（barge-in），无需 API Key。Full-duplex voice mode for DeepSeek Harness, no API key. |
| 495 | [quaner1234-cmd/dsh-subagent-watchdog](https://github.com/quaner1234-cmd/dsh-subagent-watchdog) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin that auto-continues a native continuable subagent once when it ends with explicit max-tokens termination — then stops. No loops, no timers, official seams only. |
| 496 | [qwert702/dsh-continue-on-limit](https://github.com/qwert702/dsh-continue-on-limit) | 0 | 2026-08-20 | 2026-08-23 | Auto-continue for DeepSeek Harness: when a local model hits its output-token cap, automatically send "continue" so the reply keeps flowing |
| 497 | [qwert702/dsh-memory](https://github.com/qwert702/dsh-memory) | 0 | 2026-08-22 | 2026-08-23 | Long-term memory plugin for the DeepSeek Harness Web GUI: project+global stores, auto extraction/injection, small-model consolidation, Obsidian-style link graph. |
| 498 | [raktim-mondol/dsh-tui-en](https://github.com/raktim-mondol/dsh-tui-en) | 0 | 2026-08-22 | 2026-08-22 | English-only fork of dsh-TUI — Claude Code-style terminal UI for DeepSeek Harness |
| 499 | [rand0wn/dsh-malware-audit](https://github.com/rand0wn/dsh-malware-audit) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) plugin: real AST-based scan of installed plugins for malicious-intent patterns, with an optional periodic schedule and auto-quarantine on critical findings. Advisory-by-default, not an antivirus signature database. |
| 500 | [raydez/dsh-pet-plugin](https://github.com/raydez/dsh-pet-plugin) | 0 | 2026-08-18 | 2026-08-22 | deepseek harness pet plugin（桌面宠物插件） |
| 501 | [rayzhu1109/dsh-balance](https://github.com/rayzhu1109/dsh-balance) | 0 | 2026-08-22 | 2026-08-23 | balance record & usage tracking |
| 502 | [re-ITRT/dsh-keyring](https://github.com/re-ITRT/dsh-keyring) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 密钥保险箱插件：自动捕获与脱敏密钥/凭据，settings 界面管理，支持会话级与全局级存储。 |
| 503 | [reatcat/l123-harness](https://github.com/reatcat/l123-harness) | 0 | 2026-08-22 | 2026-08-22 | L1-L2-L3 三级记忆 agent 底座：门禁、事件日志、周审提炼、TDD 执行流。Claude Code 插件。 |
| 504 | [rebron1900/dsh-mnemosyne](https://github.com/rebron1900/dsh-mnemosyne) | 0 | 2026-08-22 | 2026-08-23 | Mnemosyne 记忆层在 DeepSeek Harness 中的插件 — 本地优先、SQLite 支持的跨会话记忆。 |
| 505 | [red000000/dsh-cross-session-bridge](https://github.com/red000000/dsh-cross-session-bridge) | 0 | 2026-08-22 | 2026-08-23 | 适用于deepseek harness的根会话桥插件，可令根会话间双向通信 |
| 506 | [riesbri/dshline](https://github.com/riesbri/dshline) | 0 | 2026-08-17 | 2026-08-23 | The terminal-native frontend for the DeepSeek Harness plugin ecosystem. |
| 507 | [rjn32s/dsh-whois-plugin](https://github.com/rjn32s/dsh-whois-plugin) | 0 | 2026-08-22 | 2026-08-23 | RDAP-backed whois tool plugin for DeepSeek Harness (dsh) — look up domain registration data as a model tool |
| 508 | [robauto-ai/dsh-growth](https://github.com/robauto-ai/dsh-growth) | 0 | 2026-08-21 | 2026-08-22 | Digital growth and commerce harness. Grow your brand and transact agent to agent. Monetize your repo or skill via Robauto or let the agent grow your site traffic.  Deepseek harness plugin, works with MetaAI, Copilot, Grok, Claude, Google, Bing, Hubspot and Perplexity agents.  |
| 509 | [robbyisrobby/dsh-codex-pins](https://github.com/robbyisrobby/dsh-codex-pins) | 0 | 2026-08-22 | 2026-08-22 | Codex-style pinned sessions for DeepSeek Harness — always visible above the sidebar list |
| 510 | [rocklau/dsh-ui-tool-graph](https://github.com/rocklau/dsh-ui-tool-graph) | 0 | 2026-08-22 | 2026-08-22 | Tool-call value graph tab for the DeepSeek Harness (dsh) Web UI: cost/duration/error weights over conversation trajectories with one-click next-turn optimization prompts. |
| 511 | [rudyz666/dsh-bili-asr](https://github.com/rudyz666/dsh-bili-asr) | 0 | 2026-08-23 | 2026-08-23 | 解析 B站视频链接，提取完整脚本/字幕：优先字幕轨，无字幕用本地 whisper 转写，导出 SRT/TXT/JSON。DeepSeek Harness 插件，跨平台 Windows/macOS/Linux（纯 Node）。 |
| 512 | [s1lencewill/dsh-markdown-reader](https://github.com/s1lencewill/dsh-markdown-reader) | 0 | 2026-08-23 | 2026-08-23 | DSH Web GUI full-screen Markdown reader with GFM, outline, KaTeX, Mermaid, and relative resource navigation. |
| 513 | [S2P2/dsh-lab](https://github.com/S2P2/dsh-lab) | 0 | 2026-08-21 | 2026-08-23 | My DeepSeek Harness (DSH) plugin lab — workflow extensions, grilling UI experiments, quota widgets, and other things skills alone can't do. pnpm monorepo, one package per plugin. |
| 514 | [sam-midlight/dsh-loop-rescue](https://github.com/sam-midlight/dsh-loop-rescue) | 0 | 2026-08-22 | 2026-08-22 | DRAFT — DeepSeek Harness guard that breaks an agent out of a tool-call loop and escalates to a stronger model for one concrete next action. Window-based detection with a progress epoch, so it catches cycles the stock single-slot repeat guard resets away. |
| 515 | [sarfarazstark/dsh-material-file-icons](https://github.com/sarfarazstark/dsh-material-file-icons) | 0 | 2026-08-23 | 2026-08-23 | Material Icon Theme file & folder icons for the DeepSeek Harness web GUI (dsh-better-sidebar) - 349 authentic SVGs, named folders with open variants, zero patching required |
| 516 | [sazzadurrahmaan/dsh-telegram](https://github.com/sazzadurrahmaan/dsh-telegram) | 0 | 2026-08-22 | 2026-08-22 | Telegram channel for DeepSeek Harness — chat with your agent from Telegram, with a deny-by-default allowlist and in-chat approval for destructive tools. |
| 517 | [sd1g1/dsh-muse-total-tps](https://github.com/sd1g1/dsh-muse-total-tps) | 0 | 2026-08-21 | 2026-08-22 | DSH Web 插件：Muse Spark 使用包含 TTFT 的总生成时间计算 TPS |
| 518 | [Sddft97/dsh-client-ui-skin-verdandi](https://github.com/Sddft97/dsh-client-ui-skin-verdandi) | 0 | 2026-08-22 | 2026-08-22 | Aether Gazer Verdandi-inspired skin for the DeepSeek Harness Web UI |
| 519 | [SeireiA/dsh-plugin-rtk](https://github.com/SeireiA/dsh-plugin-rtk) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin for RTK-powered shell output compaction |
| 520 | [sg88/dsh-proxy-switch](https://github.com/sg88/dsh-proxy-switch) | 0 | 2026-08-22 | 2026-08-22 | DSH 网络代理开关：直连失败自动回退到 HTTP/SOCKS5 代理，设置面板可配置代理地址 |
| 521 | [shangjian2023/dsh-rss-daily](https://github.com/shangjian2023/dsh-rss-daily) | 0 | 2026-08-22 | 2026-08-22 | dsh plugin: 46-source daily RSS digest, LLM-edited, delivered via webhook (ServerChan/PushDeer/WxWork/TG/Bark/gotify) |
| 522 | [Sharl210/dsh-strip-sandbox-permissions](https://github.com/Sharl210/dsh-strip-sandbox-permissions) | 0 | 2026-08-21 | 2026-08-22 | Strip sandbox_permissions/justification from model tool-call arguments to avoid false sandbox escalation errors |
| 523 | [ShineFree7/dsh-daily-log](https://github.com/ShineFree7/dsh-daily-log) | 0 | 2026-08-23 | 2026-08-23 | Daily work log plugin for DeepSeek Harness: /daily scaffold + daily_log_write/read/list tools, YYYY-MM-DD.md + theme-aware HTML dashboard |
| 524 | [shyuan-hub/dsh-compact-button](https://github.com/shyuan-hub/dsh-compact-button) | 0 | 2026-08-23 | 2026-08-23 | one-click Compact context button for the DSH Web context meter panel. |
| 525 | [sidleo/dsh-desktop](https://github.com/sidleo/dsh-desktop) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 桌面壳：打开应用=启动 dsh web 服务并加载界面，关闭应用=自动停止服务。Electron desktop shell for DeepSeek Harness (DSH) |
| 526 | [sidleo/skill-filesystem-plus](https://github.com/sidleo/skill-filesystem-plus) | 0 | 2026-08-17 | 2026-08-23 | Configurable skill discovery provider for DeepSeek Harness (DSH): cwd/project/ancestors/global layers with editable parent dirs, plugin card UI, disk persistence |
| 527 | [Simon-yyy/dsh-theme-escook](https://github.com/Simon-yyy/dsh-theme-escook) | 0 | 2026-08-23 | 2026-08-23 | 为DeepSeek Harness桌面端打造的一款主题 |
| 528 | [siweimofang/dsh-plugin-zhishe-baojia-shenhe](https://github.com/siweimofang/dsh-plugin-zhishe-baojia-shenhe) | 0 | 2026-08-21 | 2026-08-22 | 知设装修报价审核DSH插件 - 支持视觉OCR截图输入 |
| 529 | [siweimofang/dsh-plugin-zhishe-bikeng-qa](https://github.com/siweimofang/dsh-plugin-zhishe-bikeng-qa) | 0 | 2026-08-21 | 2026-08-22 | 知设装修避坑问答DSH插件 |
| 530 | [siweimofang/dsh-plugin-zhishe-common](https://github.com/siweimofang/dsh-plugin-zhishe-common) | 0 | 2026-08-22 | 2026-08-22 | 知设 DSH 插件共享基础设施 - 知识库加载/检索/基准价格/风险评估 |
| 531 | [siweimofang/dsh-plugin-zhishe-zaojia-gusuan](https://github.com/siweimofang/dsh-plugin-zhishe-zaojia-gusuan) | 0 | 2026-08-22 | 2026-08-22 | 知设装修造价估算DSH插件 |
| 532 | [siweimofang/zhishe-a2a](https://github.com/siweimofang/zhishe-a2a) | 0 | 2026-08-22 | 2026-08-22 | 知设AI装修顾问 - 主仓库(知识库+DSH插件+GEO) |
| 533 | [Smith-yue/harness-plugin](https://github.com/Smith-yue/harness-plugin) | 0 | 2026-08-23 | 2026-08-23 | harness-plugin |
| 534 | [snail-vs/dsh-llm-oauth](https://github.com/snail-vs/dsh-llm-oauth) | 0 | 2026-08-22 | 2026-08-22 | OAuth login plugin for DeepSeek Harness (DSH), enabling subscription LLM accounts such as ChatGPT Plus/Pro to work without API keys. |
| 535 | [SnowRikka/dsh-llama-responses](https://github.com/SnowRikka/dsh-llama-responses) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek Harness plugin: run subagents on a local llama.cpp model via the OpenAI Responses (/v1/responses) protocol — LLM adapter + delegation skill |
| 536 | [SoberReport-AI/DeepGuard](https://github.com/SoberReport-AI/DeepGuard) | 0 | 2026-08-22 | 2026-08-23 | A dsh plugin security audit agents team can trigger a security audit and provide a security audit report by submitting an issue |
| 537 | [sol5766/dshm](https://github.com/sol5766/dshm) | 0 | 2026-08-20 | 2026-08-22 | deepseek harnes HarmonyOS PC client |
| 538 | [songying2024/dsh-bookmarks-dock](https://github.com/songying2024/dsh-bookmarks-dock) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (DSH) left-side bookmark dock plugin |
| 539 | [Sparrived/dsh-plugin-workspace-skill](https://github.com/Sparrived/dsh-plugin-workspace-skill) | 0 | 2026-08-22 | 2026-08-22 | DSH Cordis plugin: skill-create authoring guide + workspace-level skill isolation for .dsh/skills |
| 540 | [SpookySandwich/dsh-plugin-no-workspace](https://github.com/SpookySandwich/dsh-plugin-no-workspace) | 0 | 2026-08-22 | 2026-08-23 | DSH 免工作区插件：不选工作区也能直接开始对话，独立会话在侧边栏平铺显示，原生工作区界面保持不变。Start chatting without picking a workspace; standalone conversations list flat in the sidebar. |
| 541 | [sqs404/dsh-client-ui-beautify](https://github.com/sqs404/dsh-client-ui-beautify) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness UI beautify plugin / one-click skin: settings-backed switch, aurora background, glass panels |
| 542 | [squirrelbullet/dsh-client-ui-vibecontroller](https://github.com/squirrelbullet/dsh-client-ui-vibecontroller) | 0 | 2026-08-21 | 2026-08-22 | Floating controller overlay for DeepSeek Harness with voice input and game-like button layout. |
| 543 | [Stellight/dsh-imggen](https://github.com/Stellight/dsh-imggen) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: text-to-image output with in-chat image cards, download button, history gallery, and provider selection tabs (Pollinations / OpenAI DALL-E 3). |
| 544 | [suanniniu/dsh-standard-toolkit](https://github.com/suanniniu/dsh-standard-toolkit) | 0 | 2026-08-17 | 2026-08-23 | DeepSeek Harness 标准工具插件(Standard ToolKit):工具管家——平时工具不占位,会话按需自动装载/用完自动收纳,省token;支持 load_tool / register_new_tool 现场造工具。Tool manager plugin for DeepSeek Harness / dsh. |
| 545 | [SUJIElearning/dsh-trashbin](https://github.com/SUJIElearning/dsh-trashbin) | 0 | 2026-08-23 | 2026-08-23 | DSH 回收站（删除冷静区）：归档的对话进入回收站，支持恢复、立即移除、7 天自动清理 |
| 546 | [SUJIElearning/zhaoyu-restart](https://github.com/SUJIElearning/zhaoyu-restart) | 0 | 2026-08-23 | 2026-08-23 | One-click silent DSH restart button for DeepSeek Harness (dsh-plugin) |
| 547 | [sujiu0616-art/DSH-CustomWallpapers-Glassmorphism-Theme](https://github.com/sujiu0616-art/DSH-CustomWallpapers-Glassmorphism-Theme) | 0 | 2026-08-21 | 2026-08-22 | dsh可自定义壁纸玻璃风主题 |
| 548 | [sujiu222/dsh-one-click-archive](https://github.com/sujiu222/dsh-one-click-archive) | 0 | 2026-08-22 | 2026-08-23 | One-click time-based conversation archiving for the DeepSeek Harness Web GUI |
| 549 | [sumarilkkxx/dsh-atlas](https://github.com/sumarilkkxx/dsh-atlas) | 0 | 2026-08-21 | 2026-08-22 | Visual conversation canvas for DeepSeek Harness. |
| 550 | [sumomok/dsh-plugins](https://github.com/sumomok/dsh-plugins) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness plugins by sumomok: quote earlier messages, edit & rerun a prompt, account balance & spend |
| 551 | [sunnywangzi/dsh-server-admin](https://github.com/sunnywangzi/dsh-server-admin) | 0 | 2026-08-22 | 2026-08-22 | DSH 服务器管理面板：在线重启/停止、systemd 一键保活、在线安装插件、状态监控、活跃会话、命令终端 \| DSH Server Admin: online restart/stop, systemd keep-alive, plugin install, status monitor, active sessions, command terminal |
| 552 | [susirial/dsh-traebao](https://github.com/susirial/dsh-traebao) | 0 | 2026-08-23 | 2026-08-23 | Conversation-aware TRAE Bao digital pet for DeepSeek Harness Desktop |
| 553 | [T-Markus-Liang/dsh-game-studio](https://github.com/T-Markus-Liang/dsh-game-studio) | 0 | 2026-08-21 | 2026-08-22 | DSH Game Studio: AI-native Game Development Runtime for DeepSeek Harness — 可安装/卸载/升级的游戏开发插件（/game 子命令、动态 Agent Pool、引擎适配器、Verifier + Quality Gate） |
| 554 | [tang-zhilei/dsh-group-chat-view](https://github.com/tang-zhilei/dsh-group-chat-view) | 0 | 2026-08-21 | 2026-08-22 | DSH group chat style conversation view plugin |
| 555 | [taskschd1145/deepseek-harness-clean](https://github.com/taskschd1145/deepseek-harness-clean) | 0 | 2026-08-22 | 2026-08-22 | 一个"三无"DSH桌面子端：打开它，就等于在浏览器里打DSH， 只不过它是一个带托盘图标、全原生的 Windows 窗口。 |
| 556 | [taxueseek/dsh-healthcheck](https://github.com/taxueseek/dsh-healthcheck) | 0 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 环境体检插件：磁盘/内存/延迟/~/.dsh 膨胀/插件版本落后检测，历史基线趋势，只读不删。 |
| 557 | [taxueseek/dsh-snippets](https://github.com/taxueseek/dsh-snippets) | 0 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 极简常用片段/命令工具箱：JSONL 存储，5 个工具，零依赖。AI 的收藏夹。 |
| 558 | [taxueseek/taxue-dsh-artisan](https://github.com/taxueseek/taxue-dsh-artisan) | 0 | 2026-08-19 | 2026-08-22 | taxue 画师：DeepSeek Harness 一体化视觉创作工具链（提示词反推/优化 + 多供应商生图，支持异步后台出图） |
| 559 | [thedeveloper256/dsh-model-router](https://github.com/thedeveloper256/dsh-model-router) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: role-based model routing — planner (root agent) on deepseek-v4-pro, delegated executor subagents on deepseek-v4-flash; ships a prompt section and a pro-flash-routing skill. |
| 560 | [TheHeartFickle/dsh-conversation-folding](https://github.com/TheHeartFickle/dsh-conversation-folding) | 0 | 2026-08-21 | 2026-08-22 | DSH 对话流渲染增强插件 —— 折叠过程，保留正文，长对话更清爽。 |
| 561 | [TheHeartFickle/dsh-one-dark-pro](https://github.com/TheHeartFickle/dsh-one-dark-pro) | 0 | 2026-08-22 | 2026-08-23 | DSH（DeepSeek Harness）主题插件：注册 One Dark Pro 配色，并把「外观」设置里的主题添加 One Dark Pro。 |
| 562 | [TheHeartFickle/dsh-session-manager](https://github.com/TheHeartFickle/dsh-session-manager) | 0 | 2026-08-21 | 2026-08-22 | DSH 会话管理插件 —— 对话回退 + 归档会话，长会话可回滚、可整理。 |
| 563 | [TheHeartFickle/dsh-solo-agent](https://github.com/TheHeartFickle/dsh-solo-agent) | 0 | 2026-08-21 | 2026-08-22 | DSH 插件：向用户 agent-presets 注入 `solo` preset,优化上下文占用和模型调度。 |
| 564 | [thinkingpeach-sketch/wan3-agent-skills](https://github.com/thinkingpeach-sketch/wan3-agent-skills) | 0 | 2026-08-19 | 2026-08-22 | Portable WAN3 image and video generation skills for AI coding agents |
| 565 | [tieveto666-code/dsh-data-mode](https://github.com/tieveto666-code/dsh-data-mode) | 0 | 2026-08-23 | 2026-08-23 | DSH 数据模式插件：在原版 DeepSeek Harness 上增加只读问数。连接数据库或上传 CSV/Excel，用自然语言查数，并支持按数据源管理业务知识。 |
| 566 | [Tiko9527/dsh-image-tiler](https://github.com/Tiko9527/dsh-image-tiler) | 0 | 2026-08-23 | 2026-08-23 | DSH high-resolution image tiler: slices large images into <=800x800 tiles before sending to DeepSeek. Highly AI-native, only DeepSeek participation. |
| 567 | [Tiko9527/task-router](https://github.com/Tiko9527/task-router) | 0 | 2026-08-23 | 2026-08-23 | DSH task delegation router plugin: main model plans/verifies, sub-models search/browse/code/verify. Highly AI-native, built with GLM/DeepSeek/Qwen assistance. |
| 568 | [tinchak0207/dsh-emu-workbench](https://github.com/tinchak0207/dsh-emu-workbench) | 0 | 2026-08-22 | 2026-08-22 | Emu 影像工作台 for DeepSeek Harness — 多供应商生图/改图/模型可用性探测 + Emu 独家 opencode 许愿 Agent |
| 569 | [Tinnikx/dsh-desktop](https://github.com/Tinnikx/dsh-desktop) | 0 | 2026-08-20 | 2026-08-23 | DeepSeek Harness 的 Linux Electron 桌面客户端，由claude opus生成, 打包后开箱即用, 已更新至0.1.1-rc.2, 插件安装方式与web端一致, 支持"插件市场"插件, 可以安装插件市场后在插件市场中搜索并安装插件, 也可以通过正常命令 ./bin/dsh plugin --profile web add xxxx, download in the Release Page. |
| 570 | [tkwkeven/dsh-lark](https://github.com/tkwkeven/dsh-lark) | 0 | 2026-08-20 | 2026-08-22 | Feishu/Lark channel for DeepSeek Harness: prefix-created task sessions, thread routing, streaming thinking cards, interactive questions, media delivery, lifecycle notices, runtime policies, web mirror |
| 571 | [tkwkeven/dsh-sim-restart](https://github.com/tkwkeven/dsh-sim-restart) | 0 | 2026-08-20 | 2026-08-22 | Simulated-restart testing for DeepSeek Harness plugins: verifies plugins survive restart (module eval → apply → smoke → dispose) in isolated subprocesses, with a resident auto-watcher and agent feedback loop |
| 572 | [tkwkeven/dsh-tool-github](https://github.com/tkwkeven/dsh-tool-github) | 0 | 2026-08-20 | 2026-08-22 | GitHub REST API tools and web GUI panel for DeepSeek Harness: bind account, search code/issues, manage PRs, clone workspaces |
| 573 | [tkwkeven/dsh-ytdlp](https://github.com/tkwkeven/dsh-ytdlp) | 0 | 2026-08-20 | 2026-08-22 | Video/audio download tools for DeepSeek Harness, powered by yt-dlp (video_info / video_download) |
| 574 | [tobysunsun/dsh-code-reading-coach](https://github.com/tobysunsun/dsh-code-reading-coach) | 0 | 2026-08-22 | 2026-08-22 | 代码研读教练：交互式引导研读论文对应的开源代码，五段研读法 |
| 575 | [Triple3h/dsh-image-read](https://github.com/Triple3h/dsh-image-read) | 0 | 2026-08-19 | 2026-08-23 | DSH native plugin: structured image analysis via multimodal APIs (read_image_mimo tool) with provider failover, caching, SSRF protection and a Web UI config card. DSH 原生插件：多模态识图，返回结构化 JSON 证据，支持故障转移/缓存/SSRF 防护/Web 配置卡片。 |
| 576 | [Triple3h/dsh-input-enhancement](https://github.com/Triple3h/dsh-input-enhancement) | 0 | 2026-08-20 | 2026-08-23 | DSH Web plugin: input enhancement — paste text collapse, file/folder attachment paste & drag-drop, bubble attachment folding, message fold, attachment management & cleanup. DSH Web 插件：输入增强——粘贴文本折叠、附件上传、消息折叠。 |
| 577 | [Triple3h/dsh-rxresume](https://github.com/Triple3h/dsh-rxresume) | 0 | 2026-08-23 | 2026-08-23 | DSH plugin that talks to the Reactive Resume REST API directly: create, read, patch, and manage resumes over /api/openapi with an API key. 直接对接 Reactive Resume REST API 管理简历的 DSH 插件。 |
| 578 | [Triple3h/dsh-session-enhance](https://github.com/Triple3h/dsh-session-enhance) | 0 | 2026-08-19 | 2026-08-23 | DSH Web plugin: session sidebar enhancements — copy session ID from the context menu, etc. DSH Web 插件：会话栏增强（上下文菜单一键复制会话 ID 等）。 |
| 579 | [Triple3h/dsh-stats-expand](https://github.com/Triple3h/dsh-stats-expand) | 0 | 2026-08-20 | 2026-08-23 | DSH Web client plugin: unwrap the session stats bar to full-width, click to toggle truncation (preference persisted). DSH Web 客户端插件：会话底部统计条解除限宽、单行完整铺满，点击可切回官方截断。 |
| 580 | [Triple3h/dsh-usage-stats](https://github.com/Triple3h/dsh-usage-stats) | 0 | 2026-08-19 | 2026-08-23 | DSH Web plugin: usage statistics — daily/model tokens, sessions, messages, activity heatmap in a zcode-style panel. DSH Web 插件：侧边栏使用统计面板（按天/按模型 tokens、会话、消息、活跃热力图）。 |
| 581 | [tristan-mcinnis/dsh-browser-vision](https://github.com/tristan-mcinnis/dsh-browser-vision) | 0 | 2026-08-22 | 2026-08-22 | Browser tool for DeepSeek Harness that can SEE the page: browser-use over CDP driven by deepseek-v4-flash-vision-exp. Reads canvas text, text inside images and rendered charts, returns schema-validated JSON, and reports per-run cost. |
| 582 | [try-works/dsh-browser-agent](https://github.com/try-works/dsh-browser-agent) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness bundle: a Chrome browser for agents (browser_goto / browser_evaluate / browser_screenshot tools) with a live two-way pane inside the DSH Web GUI. The browser engine is a fork of zenbu-labs/terminal-browser with the React Ink terminal UI replaced by a DSH tool surface and web pane. |
| 583 | [TTsdzb/dsh-global-proxy](https://github.com/TTsdzb/dsh-global-proxy) | 0 | 2026-08-21 | 2026-08-22 | 更好的代理支持。 |
| 584 | [tuojc/dsh-browser-firefox](https://github.com/tuojc/dsh-browser-firefox) | 0 | 2026-08-22 | 2026-08-22 | Firefox browser-control plugin for DeepSeek Harness: one DSH plugin + one Firefox extension, driving your own Firefox over a token-authenticated WebSocket. Text-first toolset (snapshot/click/type/navigate/tab-stack) with screenshot as visual fallback. Firefox add-on available on AMO. Ported from Lum1104/dsh-browser (MIT). |
| 585 | [TwilightSpirit/dsh-message-edit](https://github.com/TwilightSpirit/dsh-message-edit) | 0 | 2026-08-22 | 2026-08-23 | 在消息气泡上加修改按钮，通过 DSH surface replace 机制改写模型上下文，fork 继承、支持 markdown、可审计 |
| 586 | [ubggyhjb/mathmodel-agent](https://github.com/ubggyhjb/mathmodel-agent) | 0 | 2026-08-21 | 2026-08-22 | 数学建模竞赛 Agent（DeepSeek Harness preset）：头脑风暴→分析→建模→代码图表→论文→六门验收，含 17 套中英文 Typst/LaTeX 模板 |
| 587 | [uckkk/dsh-fat-loss-cal](https://github.com/uckkk/dsh-fat-loss-cal) | 0 | 2026-08-20 | 2026-08-21 | 减脂热量计算 |
| 588 | [uckkk/dsh-future-cbdc](https://github.com/uckkk/dsh-future-cbdc) | 0 | 2026-08-21 | 2026-08-21 | 央行数字货币 |
| 589 | [uckkk/dsh-future-fusion](https://github.com/uckkk/dsh-future-fusion) | 0 | 2026-08-21 | 2026-08-21 | 核聚变能源 |
| 590 | [uckkk/dsh-future-longevity](https://github.com/uckkk/dsh-future-longevity) | 0 | 2026-08-21 | 2026-08-21 | 长寿医学 |
| 591 | [uckkk/dsh-gift-etiquette](https://github.com/uckkk/dsh-gift-etiquette) | 0 | 2026-08-21 | 2026-08-21 | 送礼避讳 |
| 592 | [uckkk/dsh-k2c](https://github.com/uckkk/dsh-k2c) | 0 | 2026-08-21 | 2026-08-21 | 开尔文转摄氏 |
| 593 | [uckkk/dsh-kenya](https://github.com/uckkk/dsh-kenya) | 0 | 2026-08-21 | 2026-08-21 | 肯尼亚国家 |
| 594 | [uckkk/dsh-palau](https://github.com/uckkk/dsh-palau) | 0 | 2026-08-21 | 2026-08-21 | 帕劳国 |
| 595 | [uckkk/dsh-valley-meter](https://github.com/uckkk/dsh-valley-meter) | 0 | 2026-08-22 | 2026-08-22 | Minimal peak/valley electricity-price countdown widget for DeepSeek Harness: live off-peak countdown & period, official account balance, today's spend, configurable colors, minimal/detailed styles. |
| 596 | [Unintendedz/dsh-attention-notify](https://github.com/Unintendedz/dsh-attention-notify) | 0 | 2026-08-23 | 2026-08-23 | Browser notifications for every DSH event that needs user attention |
| 597 | [Unintendedz/dsh-conversation-tree](https://github.com/Unintendedz/dsh-conversation-tree) | 0 | 2026-08-23 | 2026-08-23 | ChatGPT-style immutable reply branches, inline branch switching, and whole-tree browsing for DeepSeek Harness. |
| 598 | [Unintendedz/dsh-response-meta](https://github.com/Unintendedz/dsh-response-meta) | 0 | 2026-08-23 | 2026-08-23 | Always-visible model, reasoning, throughput, timestamp, runtime, and TTFT metadata for DeepSeek Harness replies. |
| 599 | [Unintendedz/dsh-session-tools](https://github.com/Unintendedz/dsh-session-tools) | 0 | 2026-08-23 | 2026-08-23 | Archive, cross-session read, and copy-ID tools for DeepSeek Harness conversations. |
| 600 | [Unintendedz/dsh-ui-enhancements](https://github.com/Unintendedz/dsh-ui-enhancements) | 0 | 2026-08-23 | 2026-08-23 | Small, focused UI enhancements for DeepSeek Harness |
| 601 | [unStone/dsh-plugin-web-ppt](https://github.com/unStone/dsh-plugin-web-ppt) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: let your agent read and export .pptx / .ppt — pure JS, no PowerPoint, no conversion, no network. |
| 602 | [vibeinging/dsh-red-alert](https://github.com/vibeinging/dsh-red-alert) | 0 | 2026-08-23 | 2026-08-23 | A real Red Alert 2 AI battlefield plugin for DeepSeek Harness with fog-safe control, live DSH Chat, and post-match learning. |
| 603 | [vimalinx/Dsh-dev](https://github.com/vimalinx/Dsh-dev) | 0 | 2026-08-22 | 2026-08-22 | Version-aware workspace core for building DeepSeek Harness plugins |
| 604 | [vINyLogY/dsh-bluebubbles](https://github.com/vINyLogY/dsh-bluebubbles) | 0 | 2026-08-22 | 2026-08-23 | Who needs openclaw? |
| 605 | [vshulcz/dsh-deja](https://github.com/vshulcz/dsh-deja) | 0 | 2026-08-23 | 2026-08-23 | deja for DeepSeek Harness: recall the sessions your other coding agents already wrote |
| 606 | [wackyju2-beep/dsh-better](https://github.com/wackyju2-beep/dsh-better) | 0 | 2026-08-22 | 2026-08-23 | 更好的 DSH \| Unofficial dsh plugin: archived sessions & task notifications / 已归档会话管理 · 任务系统通知 |
| 607 | [wangyong1972/dsh-computer-use-macos](https://github.com/wangyong1972/dsh-computer-use-macos) | 0 | 2026-08-22 | 2026-08-23 | Native macOS computer-use plugin for DeepSeek Harness with trusted mouse/keyboard control, screenshots, and multi-display selection. |
| 608 | [wangzhanchao883/dsh-plugin](https://github.com/wangzhanchao883/dsh-plugin) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin collection: self-developed DSH plugins (screenshot capture, OCR, Obsidian). ?? DSH ?????? |
| 609 | [wheam/dsh-session-groups](https://github.com/wheam/dsh-session-groups) | 0 | 2026-08-22 | 2026-08-23 | Provider-owned virtual session groups for the DeepSeek Harness Web sidebar. |
| 610 | [whisperflo/dsh-deepseek-console](https://github.com/whisperflo/dsh-deepseek-console) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek 账户控制台：实时余额监控 / 用量统计 / 全局悬浮 HUD（官方 API 直连，Key 仅存本机） |
| 611 | [whoisjiahao/dsh-feishu-channel](https://github.com/whoisjiahao/dsh-feishu-channel) | 0 | 2026-08-16 | 2026-08-22 | 飞书 × DeepSeek Harness 遥控器：在飞书聊天里驱动 DSH agent——流式富卡片、一键审批、按模型能力传图、费用与峰谷计量 |
| 612 | [win4r/dsh-pi-review](https://github.com/win4r/dsh-pi-review) | 0 | 2026-08-23 | 2026-08-23 | Read-only Pi Agent code review plugin for DeepSeek Harness |
| 613 | [wkfedor/deepseek-harness-voice-input](https://github.com/wkfedor/deepseek-harness-voice-input) | 0 | 2026-08-22 | 2026-08-23 | Local voice typing and speech-to-text plugin for DeepSeek Harness (dsh), powered by multilingual Whisper. |
| 614 | [Wodexinhaoleng-Kasssa/dsh-reader](https://github.com/Wodexinhaoleng-Kasssa/dsh-reader) | 0 | 2026-08-22 | 2026-08-22 | In-browser novel reader for the dsh web GUI: online book-source search, chapter-by-chapter reading in a chat-style view, and whole-book TXT download. |
| 615 | [woosh2010/dsh-usage-dashboard](https://github.com/woosh2010/dsh-usage-dashboard) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) usage analytics plugin: peak/valley billing dock, token/cost/model dashboard, cross-session history, global filters \| 用量分析插件：峰谷计费坞 + 用量仪表盘 |
| 616 | [writeCasually/dsh-opencode-go-models](https://github.com/writeCasually/dsh-opencode-go-models) | 0 | 2026-08-23 | 2026-08-23 | DSH 插件：自动同步 opencode-go 模型清单到 pi-ai catalog，按官方文档精确标记协议（anthropic-messages / openai-completions / openai-responses）与多模态支持 |
| 617 | [WSL043/dsh-native-reasoning-slider](https://github.com/WSL043/dsh-native-reasoning-slider) | 0 | 2026-08-23 | 2026-08-23 | DSH Native Effort Slider — model-aware reasoning control with native modes and custom light/dark colors |
| 618 | [WSYXIUBA/dsh-plugin-starmap](https://github.com/WSYXIUBA/dsh-plugin-starmap) | 0 | 2026-08-21 | 2026-08-22 | 🪐 DSH 插件星座图 — DeepSeek Harness 插件依赖关系可视化（自动扫描/分类/依赖图） |
| 619 | [Wuxie233/dsh-plugin-blank-session-gc](https://github.com/Wuxie233/dsh-plugin-blank-session-gc) | 0 | 2026-08-18 | 2026-08-23 | Keep at most one unused blank DSH conversation |
| 620 | [wwwwwald/dsh-story](https://github.com/wwwwwald/dsh-story) | 0 | 2026-08-21 | 2026-08-23 | One prompt to cinematic story. AI-powered script-to-video pipeline for DeepSeek Harness. |
| 621 | [xhqm-xyz/mira_live2d](https://github.com/xhqm-xyz/mira_live2d) | 0 | 2026-08-22 | 2026-08-23 | DSH Live2D 看板娘插件：会话界面浮层（拖拽/滚轮缩放/右键表情菜单）+ 模型可说话（OpenAI/阿里 TTS）+ MCP 工具（状态/切模型/表情动画开关/思考等待表情） |
| 622 | [xiaobaiyg09/dsh-pickdom](https://github.com/xiaobaiyg09/dsh-pickdom) | 0 | 2026-08-23 | 2026-08-23 | PickDOM - 在 DSH 中框选本地 HTML 与 Web 页面元素，并将结构化引用交给 Agent |
| 623 | [XIAOke8698/dsh-memory-forget](https://github.com/XIAOke8698/dsh-memory-forget) | 0 | 2026-08-23 | 2026-08-23 | Forgetting engine for AI agents — memory TTL, decay, eviction, audit. The opposite of memory programming. DSH plugin + local skill + CLI. |
| 624 | [xiaoksio/dsh-solution-explorer](https://github.com/xiaoksio/dsh-solution-explorer) | 0 | 2026-08-23 | 2026-08-23 | DSH Web GUI right sidebar: VS Code-style file explorer plus source control (git status, stage/unstage/discard, commit, diff) and a file editor with save. |
| 625 | [XiaoWind/dsh-cron](https://github.com/XiaoWind/dsh-cron) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: a /cron slash command for cron-scheduled recurring agent loops |
| 626 | [XiaoWind/dsh-weneedfirst](https://github.com/XiaoWind/dsh-weneedfirst) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: make the chain of thought open with We need instead of Let me |
| 627 | [xiaozhiaixue/dsh-model-toggle](https://github.com/xiaozhiaixue/dsh-model-toggle) | 0 | 2026-08-15 | 2026-08-22 | 在DSH中一键切换Flash/Pro，都是MAX |
| 628 | [xiaozhiaixue/dsh-session-id](https://github.com/xiaozhiaixue/dsh-session-id) | 0 | 2026-08-17 | 2026-08-22 | 在DSH会话区底部显示会话ID，点击一下就能复制 |
| 629 | [xiaxi626/dsh-skills-nexus](https://github.com/xiaxi626/dsh-skills-nexus) | 0 | 2026-08-22 | 2026-08-22 | 通用 DSH skill 枢纽。安装一次，即可把任意含 SKILL.md 的 GitHub 仓库注册为 DSH skill——一条命令添加一个。skill 仓库无需 Cordis 插件代码或 package.json。Universal DSH skill adapter. Install once, then register any GitHub repo containing a SKILL.md as a DSH skill — one command per repo. No Cordis plugin code or package.json needed in the skill repo. |
| 630 | [xie-tj/dsh-easy-exit](https://github.com/xie-tj/dsh-easy-exit) | 0 | 2026-08-21 | 2026-08-23 | Optional DeepSeek Harness plugin for editing and resending the latest direct-human message |
| 631 | [Xingkong42/dsh-zh-labels](https://github.com/Xingkong42/dsh-zh-labels) | 0 | 2026-08-21 | 2026-08-22 | DSH 界面中文标签持久化插件 - Persistent Chinese UI labels for DeepSeek Harness |
| 632 | [xinvxueyuan/cordis-plugin-github](https://github.com/xinvxueyuan/cordis-plugin-github) | 0 | 2026-08-17 | 2026-08-23 | Cordis / DeepSeek Harness plugin — normalized GitHub API tools for AI agents (gh CLI by default, native HTTP fallback) |
| 633 | [xiuyuan18/dsh-engram-session](https://github.com/xiuyuan18/dsh-engram-session) | 0 | 2026-08-23 | 2026-08-23 | Per-session Engram memory for DeepSeek Harness: spawns an engram MCP child per agent session rooted at the session workspace, registers mem_* tools per agent scope, and injects the Memory Protocol as a system-prompt section. |
| 634 | [XMoon/dsh-profile-settings](https://github.com/XMoon/dsh-profile-settings) | 0 | 2026-08-23 | 2026-08-23 | Per-profile settings overlay for DeepSeek Harness: global settings.yaml plus profiles/<name>/settings.patch.yml, transparently layered under ctx.settings |
| 635 | [xuanyuanluoxue/computer-use-vision](https://github.com/xuanyuanluoxue/computer-use-vision) | 0 | 2026-08-22 | 2026-08-22 | Windows computer-use capability for DSH: screenshot, vision, simulated input, self-evolving knowledge base. Plugin + skill dual-mode. |
| 636 | [xuqingsakura/dsh-subagent-team](https://github.com/xuqingsakura/dsh-subagent-team) | 0 | 2026-08-22 | 2026-08-22 | 一个官方 bundle 形态的独立插件，可经 GitHub / npm 安装到 DSH（桌面端与 web 端皆可）。 提供模型可见的角色工具（team_read / team_write / team_code_write / team_code_review …）， 以及一套真正的事件驱动团队运行时（建队 / 成员 / 任务依赖 / 邮箱 / 自动调度 / 右下角活动浮层）。 |
| 637 | [y2zyyr/dsh-restart-control](https://github.com/y2zyyr/dsh-restart-control) | 0 | 2026-08-18 | 2026-08-23 | @y2zyyr/dsh-restart-button — one-click Restart DSH button in Settings → General (DSH Desktop), using the official desktopRuntime.requestRestart() facade. |
| 638 | [Ya-MiC/hermes](https://github.com/Ya-MiC/hermes) | 0 | 2026-08-23 | 2026-08-23 | Ya-MiC GitHub 全景索引 / Curated index of Ya-MiC's repos & stars — DeepSeek Harness (DSH) compliant, multilingual, multi-branch |
| 639 | [yangkunlun/dsh-fairy](https://github.com/yangkunlun/dsh-fairy) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的多窗插件 |
| 640 | [yanglingrise/dsh-erii-boot-splash](https://github.com/yanglingrise/dsh-erii-boot-splash) | 0 | 2026-08-22 | 2026-08-22 | Erii (Sakura) themed boot splash animation for the DeepSeek Harness Web UI: falling sakura petals, a mint monster mascot, and the line "Sakura, walk slower." Auto fades out; pure client-side. |
| 641 | [yaodongH/dsh-doc-review](https://github.com/yaodongH/dsh-doc-review) | 0 | 2026-08-23 | 2026-08-23 | dsh-doc-review — DeepSeek Harness Web 文档审阅弹窗插件：设计文档与方案审阅以全幅渲染 Markdown 弹窗呈现 (Design documents & plan reviews in a full rendered-Markdown modal) |
| 642 | [yaways/dsh-subagent-claude-code-wrapper](https://github.com/yaways/dsh-subagent-claude-code-wrapper) | 0 | 2026-08-22 | 2026-08-22 | Let DSH subagents call any Claude-compatible CLI, not just the SDK-bundled one. Fork of @deepseek-ai/dsh-subagent-claude-code. |
| 643 | [Yaya716/dsh-add-image-button](https://github.com/Yaya716/dsh-add-image-button) | 0 | 2026-08-23 | 2026-08-23 | Persistent "Add image" button in the composer tool row for DeepSeek Harness Web: opens the system file picker (image/*, multi-select) and routes selected images through the official draft attachment pipeline. |
| 644 | [Ycet/dsh-fun-turn-status](https://github.com/Ycet/dsh-fun-turn-status) | 0 | 2026-08-22 | 2026-08-23 | 替换 DSH 任务运行中的 Deep diving... 状态文案：30 秒随机轮换幽默文案，设置-插件-插件配置页可增删改（最多 50 条），与其他同类插件共存时优先级最高。 |
| 645 | [ydlstartx/dsh-pdf-reader](https://github.com/ydlstartx/dsh-pdf-reader) | 0 | 2026-08-22 | 2026-08-23 | AI-powered PDF reader for DeepSeek Harness with annotations, multi-PDF workflows, mixed image-text evidence, and on-demand OCR. |
| 646 | [yhfgyyf/dsh-guardian-mode](https://github.com/yhfgyyf/dsh-guardian-mode) | 0 | 2026-08-23 | 2026-08-23 | Guardian preset for DeepSeek Harness with independent persistent Codex auditing |
| 647 | [YiyuZh/dsh-skillflux](https://github.com/YiyuZh/dsh-skillflux) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness 动态 Skill 运行时管理器，自动发现、路由、挂载和卸载 Agent Skills |
| 648 | [ylxmf2005/dsh-openai-server-compaction](https://github.com/ylxmf2005/dsh-openai-server-compaction) | 0 | 2026-08-21 | 2026-08-22 | OpenAI Responses adapter with durable server-side compaction for DeepSeek Harness. |
| 649 | [ylxmf2005/dsh-scheduled](https://github.com/ylxmf2005/dsh-scheduled) | 0 | 2026-08-23 | 2026-08-23 | Durable heartbeat and cron automations for DeepSeek Harness |
| 650 | [YpipaQ/dsh-whale-usage](https://github.com/YpipaQ/dsh-whale-usage) | 0 | 2026-08-23 | 2026-08-23 | dsh-whale-usage: a self-contained DeepSeek Harness (DSH) plugin that bridges the whale-widget and usage-stats plugins (balance widget + accounting/real-time-token/app-usage settings). Personal localization bridge, MIT. |
| 651 | [yth1120/deepseek-harness](https://github.com/yth1120/deepseek-harness) | 0 | 2026-08-23 | 2026-08-23 | DeepSeek Harness source with the dsh-web-workbench plugin suite (right workbench, terminal, timeline, review, files and browser preview). |
| 652 | [yth1120/dsh-web-workbench](https://github.com/yth1120/dsh-web-workbench) | 0 | 2026-08-23 | 2026-08-23 | Public mirror for the dsh-external/dsh-web-workbench plugin suite; canonical organization repository is private by org policy. |
| 653 | [yummy4727/dsh-context-branch](https://github.com/yummy4727/dsh-context-branch) | 0 | 2026-08-21 | 2026-08-22 | Context-branching conversation tree plugin for DeepSeek Harness. Avoid cold-start waste and show full tool/reasoning steps. |
| 654 | [YunlongL-byte/dsh-launcher](https://github.com/YunlongL-byte/dsh-launcher) | 0 | 2026-08-22 | 2026-08-22 | macOS 程序坞一键启动 DeepSeek Harness (DSH) 的快捷启动器 / One-click DSH launcher for macOS Dock |
| 655 | [yushuosun/dsh-cost-governor](https://github.com/yushuosun/dsh-cost-governor) | 0 | 2026-08-22 | 2026-08-22 | Cost governance & budget enforcement for DeepSeek Harness: per-model token-cost accounting, multi-provider pricing, budget warn thresholds, and a usage dashboard. |
| 656 | [zaalipro/dsh-workflows](https://github.com/zaalipro/dsh-workflows) | 0 | 2026-08-20 | 2026-08-23 | DeepSeek workflows exactly like grok build CLI. Adds /create-workflow and /workflows slash commands to DeepSeek harness |
| 657 | [zclDragon/dsh-side-chat](https://github.com/zclDragon/dsh-side-chat) | 0 | 2026-08-22 | 2026-08-23 | DSH web plugin: Codex-style /side side conversations — a temporary fork of the current chat in a floating panel, without interrupting the main task. |
| 658 | [ZekaiShi/smart-subagent](https://github.com/ZekaiShi/smart-subagent) | 0 | 2026-08-22 | 2026-08-23 | Unified DeepSeek Harness plugin: role-based subagent routing + per-agent evolution (prefercmd/memory as knowledge allow/deny lists), so repeated tasks start from proven commands and save tokens. Unified subagent routing and evolution: prefercmd/memory serve as knowledge allow/deny lists, saving tokens. |
| 659 | [zengfr/AutoCoding](https://github.com/zengfr/AutoCoding) | 0 | 2026-08-21 | 2026-08-22 | AutoCoding UltraVibe — 无人值守自动化编程工程化 |
| 660 | [zhengjy01/dsh-cubox](https://github.com/zhengjy01/dsh-cubox) | 0 | 2026-08-23 | 2026-08-23 | Cubox sync plugin for DeepSeek Harness: scheduled sync, AI daily brief from your prompt template into Obsidian, per-card markdown export — via the /c/api/cli endpoints |
| 661 | [zhengjy01/dsh-skill-studio](https://github.com/zhengjy01/dsh-skill-studio) | 0 | 2026-08-23 | 2026-08-23 | Skill studio for DeepSeek Harness: visualize, edit and enable/disable agent skills from the web settings panel and via skillmgr_* tools |
| 662 | [zhengjy01/weread-export](https://github.com/zhengjy01/weread-export) | 0 | 2026-08-23 | 2026-08-23 | 微信读书 (WeChat Reading) integration for DeepSeek Harness: official Skills API gateway — bookshelf, highlights/thoughts, reading stats, flomo export |
| 663 | [ZHOUcourier/dsh-theme-whalegirl](https://github.com/ZHOUcourier/dsh-theme-whalegirl) | 0 | 2026-08-22 | 2026-08-23 | DeepSeek-鲸鱼娘 (Whale Girl) theme for the DeepSeek Harness Web UI — ported from DreamSkin ver_cb557ececaa5de3f3dbe: full --dsw-* token remap + ambient wallpaper. |
| 664 | [zhubaodian1027/dsh-token-panel](https://github.com/zhubaodian1027/dsh-token-panel) | 0 | 2026-08-22 | 2026-08-22 | DSH Web GUI panel: AI quota (Kimi Coding, Codex Plus, DeepSeek…) + merged local token usage (DSH, Codex, Claude Code, Kimi Code, Hermes, Pi…). |
| 665 | [zhuifengqug/pixel-skin](https://github.com/zhuifengqug/pixel-skin) | 0 | 2026-08-23 | 2026-08-23 | dsh像素风皮肤 |
| 666 | [ZhuoSir/dsh-cron](https://github.com/ZhuoSir/dsh-cron) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 定时任务插件：对话中自然语言创建，到点自动执行并在会话中回复，支持 cron 表达式与 Web 管理面板 |
| 667 | [zhuzhujunandy/dsh-model-router](https://github.com/zhuzhujunandy/dsh-model-router) | 0 | 2026-08-23 | 2026-08-23 | Tiered model routing plugin for DeepSeek Harness (DSH): route delegated work to fast/medium/heavy model tiers with DoD verification, cross-provider fallback, background delegation, and per-conversation budget modes. |
| 668 | [zjuhbh/dsh-full-with-approval](https://github.com/zjuhbh/dsh-full-with-approval) | 0 | 2026-08-22 | 2026-08-23 | DSH profile plugin: full-access (GPU-capable) sandbox with per-operation approval for writes outside the workspace or to protected files. |
| 669 | [Zn-Dk/dsh-mnemon-gc](https://github.com/Zn-Dk/dsh-mnemon-gc) | 0 | 2026-08-22 | 2026-08-23 | 接入 dsh-mnemon GC 治理插件：冲突驱动的正确性纠错，自动巡检报告。 |
| 670 | [Zn-Dk/dsh-session-repair](https://github.com/Zn-Dk/dsh-session-repair) | 0 | 2026-08-22 | 2026-08-22 | DSH Web 会话诊断、可信备份与一键安全修复插件。 |
| 671 | [zootguru/dsh-vpn-ops](https://github.com/zootguru/dsh-vpn-ops) | 0 | 2026-08-22 | 2026-08-22 | Safety-gated WireGuard and VLESS Reality operations for DeepSeek Harness |
| 672 | [zoumutou/dsh-attachment-downscale](https://github.com/zoumutou/dsh-attachment-downscale) | 0 | 2026-08-22 | 2026-08-22 | DSH 插件：图片附件超限自动降级（2000px / 3.5MB / 4000万像素） |
| 673 | [ZutoMayoo/totoTheCat](https://github.com/ZutoMayoo/totoTheCat) | 0 | 2026-08-20 | 2026-08-22 | 在你的DeepSeek Harness中加入桌宠小猫托托的插件 |
| 674 | [Zzc269/dsh-soft-glass-ui](https://github.com/Zzc269/dsh-soft-glass-ui) | 0 | 2026-08-16 | 2026-08-22 | Unofficial soft-glass visual theme plugin for DeepSeek Harness. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 0Ra1n416/DSH-GUI
- 3yi2u34yu32/dsh-balance-peak
- 918154429/dsh-codex-import
- Badegg404/dsh-code-review
- Baisbt/dsh-api-balance
- Daseanle/dsh-mcp-orchestrator
- Daseanle/dsh-obsidian-bridge
- Daseanle/dsh-teacher-preset
- ddtcorex/agent-dev-skills
- drscrewdriver/dsh-switch-search
- dsh-external/chat-width
- dsh-external/dsh-agent-teams
- dsh-external/dsh-at-file
- dsh-external/dsh-automation
- dsh-external/dsh-bash-encoding
- dsh-external/dsh-better-browser
- dsh-external/dsh-book2skill
- dsh-external/dsh-computer-use
- dsh-external/dsh-custom-tool
- dsh-external/dsh-cyber-sec
- dsh-external/dsh-daily-fortune
- dsh-external/dsh-deepcel
- dsh-external/dsh-deeplink
- dsh-external/dsh-doctor
- dsh-external/dsh-easy-ctx-manager
- dsh-external/dsh-fun-ticker
- dsh-external/dsh-fun-typewriter
- dsh-external/dsh-fun-weather
- dsh-external/dsh-genui
- dsh-external/dsh-grok-tui
- dsh-external/dsh-handoff
- dsh-external/dsh-input-history
- dsh-external/dsh-island
- dsh-external/dsh-minigames
- dsh-external/dsh-my-rsi
- dsh-external/dsh-notification
- dsh-external/dsh-nowledge-mem
- dsh-external/dsh-open-in-vscode
- dsh-external/dsh-openmaic
- dsh-external/dsh-paste-input
- dsh-external/dsh-pet
- dsh-external/dsh-pet-corner
- dsh-external/dsh-pi-adapter
- dsh-external/dsh-plan-execute
- dsh-external/dsh-plannotator
- dsh-external/dsh-plugin-guide
- dsh-external/dsh-qq2006
- dsh-external/dsh-revive
- dsh-external/dsh-session-hub
- dsh-external/dsh-spotlight
- dsh-external/dsh-STAGE
- dsh-external/dsh-STAR
- dsh-external/dsh-tps
- dsh-external/dsh-turn-rewind
- dsh-external/dsh-ui-progress
- dsh-external/dsh-ui-whale
- dsh-external/dsh-vision-toolkit
- dsh-external/dsh-visualize
- dsh-external/dsh-webui-live-html
- dsh-external/oh-my-dsh
- EIGHTfs/dsh-bili-publisher
- EIGHTfs/dsh-git-push
- EIGHTfs/dsh-image-preview
- EIGHTfs/dsh-session-group
- EIGHTfs/dsh-session-manager
- EIGHTfs/dsh-task-completion
- EIGHTfs/dsh-test-env-entry
- EIGHTfs/dsh-test-sync-plugin
- Francis-Xavier-code/dsh-balance-plugin
- GooDAnDReaDY/dsh-fal-image-gen
- Howe829/dsh-runtime
- htq20080119/dsh-token-stats
- JxaMe/dsh-condense
- KannaKuron/dsh-deepseek-vision-bridge
- kedoupi/dsh-plugins
- KitDoesIt/dsh-compaction-instant
- LBurny/deepseek-harness-desktop
- liustack/pptfast
- LVSUGARS/dsh-web-manager
- lvyunqi/dsh-memory-enhanced
- Mrzhailiming/deepseek-pet
- muvuula/DeepSeek-Harness-Core
- nexsjournal/dsh-desktop-app
- nexsjournal/dsh-imagegen-plugin
- Nexus-Aethra/DSH-plugin-switch
- omdsh-dev/fabric
- omdsh-dev/Qwen-MM-Plugins
- Physicolor/harness-ui-enhancer
- Physicolor/harness-widgets
- pppolf/dsh-webgate
- raydez/deepseek-harness-pet-plugin
- riesbri/dsh-tui
- ruisenbai/dsh-inline-comments
- sidleo/skill-scan
- TiantianFlow/dsh-tailscale-gateway
- TimeCraker/dsh-claude-import
- TuringCorp-net/mosaic_compress
- vcxmug/dsh-enhance
- wings1848/dsh-economizer
- WSL043/dsh-native-session-delete
- WSYXIUBA/dsh-plugin-constellation
- xie-tj/deepseek-harness-latest-user-message-revision
- y2zyyr/dsh-restart-button
- yhyfhgs/dsh-providers-extension
- zhou-yihang/dsh-usage-blance
- zhoupengjie/dsh-motion-manager
