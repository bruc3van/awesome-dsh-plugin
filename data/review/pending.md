# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-22**
- 快照日期 / Snapshot date: **2026-08-22 (UTC)**
- 待审核 / Pending: **342**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **84**

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
| 1 | [Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo) | 27006 | 2017-12-12 | 2026-08-22 | :rocket: The Ultimate Image Uploader for Efficient Creators. Supports Obsidian, Typora, VS Code etc. and 60+ image hosting services  (S3, GitHub, Cloudflare R2, Imgur, Aliyun OSS...). Paste, upload, done. |
| 2 | [ericshang98/Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) | 253 | 2026-01-06 | 2026-08-22 | Pixel-perfect clones of any webpage. Paste a URL, get a measured Vite + React replica. |
| 3 | [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) | 132 | 2026-03-02 | 2026-08-22 | InvoiceFlowAI：Windows 与 macOS 发票助手，自动下载邮箱电子发票、OCR 识别、分类归档并生成 Excel 报销汇总；可安装为 DeepSeek Harness 插件。 |
| 4 | [volcengine/ark-cli](https://github.com/volcengine/ark-cli) | 103 | 2026-06-15 | 2026-08-22 | The fastest way to put Volcengine Ark in your terminal and your AI agent — go from prompt to generated   media, multimodal answer, or deployed endpoint in a single command, no API glue code. |
| 5 | [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | 65 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. |
| 6 | [yuc16/PatentRadar](https://github.com/yuc16/PatentRadar) | 52 | 2026-05-05 | 2026-08-22 | 专利侵权分析系统 —— 输入专利公开号，产出竞品侵权分析报告；同时打包成 skill，可被任意 agent（codex，claude code 等） 调用。 |
| 7 | [ARFCON/dsh-hotplug-hub](https://github.com/ARFCON/dsh-hotplug-hub) | 25 | 2026-08-19 | 2026-08-22 | DSH - Dseam |
| 8 | [T-Auto/dsh-ecosystem-spec](https://github.com/T-Auto/dsh-ecosystem-spec) | 16 | 2026-08-17 | 2026-08-22 | deepseek-harness TUI Plugin Access and Implementation Standards / deepseek-harness终端交互生态插件准入规范与实施标准 |
| 9 | [omdsh-dev/stent](https://github.com/omdsh-dev/stent) | 15 | 2026-08-06 | 2026-08-22 | 灵感来源于MC Fabric的Cordis/DSH hook处理器 |
| 10 | [TiantianFlow/dsh-one-gateway](https://github.com/TiantianFlow/dsh-one-gateway) | 12 | 2026-08-16 | 2026-08-22 | Private DSH One Gateway — loopback, identity-first ingress for DeepSeek Harness |
| 11 | [daha1216/dsh-plugin-collection](https://github.com/daha1216/dsh-plugin-collection) | 10 | 2026-08-19 | 2026-08-22 | A collection of plugins for DeepSeek Harness (DSH) |
| 12 | [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 10 | 2026-08-12 | 2026-08-22 | @deepseek-ai/dsh-deepresearch 把证据优先的 Codemini 研究工作区带到 DSH。它提供持久工作流状态、模型工具、生成的 deepResearch Remote namespace 和“深度研究”Web 工作区，同时组合宿主已有的 Web 与 subagent 能力。 |
| 13 | [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) | 9 | 2026-08-21 | 2026-08-22 | DSH-KRouter — Agent knowledge OS. Self-evolution. Timer on by default; API key or subscription is the key. First qualifying day auto-provisional; second accepted task → formal. Correction-first. Retrieval is the lock, not the product. Cursor, Codex, Claude Code, DeepSeek Harness. |
| 14 | [Physicolor/dsh-ui-harmonizer](https://github.com/Physicolor/dsh-ui-harmonizer) | 8 | 2026-08-15 | 2026-08-22 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts between installed plugins, and unifies the visual language via official design tokens. |
| 15 | [TsFreddie/dsh-compaction-instant](https://github.com/TsFreddie/dsh-compaction-instant) | 8 | 2026-08-14 | 2026-08-22 | LLM-free lossless* compaction engine for DeepSeek Harness |
| 16 | [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill) | 7 | 2026-08-19 | 2026-08-22 | DSH-native, local-first Run-to-Skill plugin for DeepSeek Harness |
| 17 | [getpapi/papi](https://github.com/getpapi/papi) | 6 | 2026-06-12 | 2026-08-22 | Your AI starts every session from zero. Your project stays on course. Structured plan, build and review cycles for any MCP-capable AI coding tool. |
| 18 | [zrk222/code-factory](https://github.com/zrk222/code-factory) | 5 | 2026-07-08 | 2026-08-22 | Catch AI-generated tests that could never fail and review AI code with local proof. |
| 19 | [sheep-programmer/dsh-web-search-free](https://github.com/sheep-programmer/dsh-web-search-free) | 4 | 2026-08-22 | 2026-08-22 | DSH 插件：免费网页搜索，双免费后端（Parallel 默认 + Exa 备用，均匿名免 key）+ 设置开关 + MCP server 双传输（stdio + HTTP/SSE 双端口），兼容 Claude Code / Codex \| Free web search for DeepSeek Harness: Parallel (default) + Exa (backup) free providers, settings toggle, and dual-transport MCP server (stdio + HTTP/SSE) for Claude Code / Codex |
| 20 | [Wenaixi/dsh-ponytail](https://github.com/Wenaixi/dsh-ponytail) | 4 | 2026-08-21 | 2026-08-22 | DSH 完整移植版 DietrichGebert/ponytail — 懒惰 senior 模式，hook注入 |
| 21 | [Wenaixi/dsh-superpower](https://github.com/Wenaixi/dsh-superpower) | 4 | 2026-08-21 | 2026-08-22 | DSH port of obra/superpowers — 完整移植、中文化、DSH 原生 |
| 22 | [Hilbert-beinghappy/dsh-plugin-clarify](https://github.com/Hilbert-beinghappy/dsh-plugin-clarify) | 3 | 2026-08-20 | 2026-08-22 | Off-transcript clarification Host plugin for DeepSeek Harness |
| 23 | [Ottohere-Mourn/TeachReplay](https://github.com/Ottohere-Mourn/TeachReplay) | 3 | 2026-08-22 | 2026-08-22 | Teach once, replay anywhere — harness-agnostic Teach-by-Demonstration engine (Record → Compile → Replay → Verify) with OpenMausBot and DeepSeek Harness integrations. |
| 24 | [Physicolor/dsh-widgets](https://github.com/Physicolor/dsh-widgets) | 3 | 2026-08-15 | 2026-08-22 | Right-hand widget rail for DeepSeek Harness Web UI: live session stats (turns, LLM/tool time, TTFT, speed, cache, tokens) plus OpenCode Go quota via a same-origin host proxy; extensible widget registry. |
| 25 | [soyoungzsy/soya-workflows](https://github.com/soyoungzsy/soya-workflows) | 3 | 2026-08-20 | 2026-08-21 | 🏭 SOYA Workflows — enterprise workflow skills for DeepSeek Harness: notify (webhook), docs (Yuque API), intel (RSS), report (daily/weekly/monthly).  企业工作流四件套 AI 技能。 |
| 26 | [WSL043/dsh-native-session-manager](https://github.com/WSL043/dsh-native-session-manager) | 3 | 2026-08-15 | 2026-08-22 | DSH Native Session Manager for DeepSeek Harness: search archived conversations, restore sessions, and safely delete chat history. |
| 27 | [wuliLiuyue/wxpilot](https://github.com/wuliLiuyue/wxpilot) | 3 | 2026-03-24 | 2026-08-22 | wxpilot — A CLI for automating WeChat Mini Programs, built for AI Agents. Lets an Agent drive the WeChat DevTools like a browser — page navigation, element interaction, state reading, network capture & mocking.  面向 AI Agent 的微信小程序自动化 CLI 让 Agent 像操作浏览器一样操作微信开发者工具——页面导航、元素交互、状态读取、网络抓包与 mock。 |
| 28 | [CWNU-Open-Source-Community/dsh-webgate](https://github.com/CWNU-Open-Source-Community/dsh-webgate) | 2 | 2026-08-16 | 2026-08-22 | DSH 远程访问插件：内网二维码 / cloudflared 隧道 / frp+自有服务器（含登录门户） |
| 29 | [ddtcorex/maestro-skills](https://github.com/ddtcorex/maestro-skills) | 2 | 2026-05-25 | 2026-08-22 | Universal AI Agent Development Skills Hub & Cordis Plugin for Govard, Magento 2, Laravel. Works with Claude Code, Codex CLI, OpenCode, GitHub Copilot, DeepSeek Harness. |
| 30 | [Hilbert-beinghappy/dsh-plugin-auxiliary-runtime](https://github.com/Hilbert-beinghappy/dsh-plugin-auxiliary-runtime) | 2 | 2026-08-21 | 2026-08-22 | Auxiliary inference usage, limits, and cancellation runtime for official DeepSeek Harness plugins |
| 31 | [L3n3L/dsh-resume](https://github.com/L3n3L/dsh-resume) | 2 | 2026-08-21 | 2026-08-22 | AI 写简历容易，但写完总会遇到模板难看、排版溢出、页面留白、改一处全局变形等问题。dsh-resume 专注解决“内容生成后的视觉复核”：让 AI 和用户一起把简历调到真正适合投递的刚好一页。AI can write a resume, but the result often looks unbalanced, overflows the page, leaves large blank areas, or breaks after a small edit. dsh-resume focuses on visual review after generation, helping AI and users refine the resume into a polished. |
| 32 | [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | 2 | 2026-08-21 | 2026-08-22 | 蒸留蔵 — distilled long-term memory for agents: recall by meaning, writing gated by evidence, one kura per agent mode. Ships as a DeepSeek Harness plugin and an MCP server. |
| 33 | [luxueliu/luxueliu-usage-command](https://github.com/luxueliu/luxueliu-usage-command) | 2 | 2026-08-20 | 2026-08-22 | 内置DSH指令，一键展示今日全局付费模型总消耗账单（人民币版）！按模型×分小时查当日¥消费，缓存命中/未命中/输出三档单价，官方/中转/套餐全覆盖 — DeepSeek Harness 插件 |
| 34 | [mqhe2007/dsh-pm](https://github.com/mqhe2007/dsh-pm) | 2 | 2026-08-21 | 2026-08-22 | dsh-pm is the ChunSun × DeepSeek Harness reference plugin: an AI-native project-delivery loop driven by ChunSun. Requirements / Runs / Steps / acceptance scenarios & cases / work-memory, a session delivery panel, and 28 chunsun_* model tools — with the platform as the single source of truth. MIT. |
| 35 | [PenguinAndy/dsh-ezcommit-plugin](https://github.com/PenguinAndy/dsh-ezcommit-plugin) | 2 | 2026-08-22 | 2026-08-22 | One-click Git commit plugin for DSH: the session model splits workspace changes into reviewed Conventional Commits batches, with built-in sensitive-file filtering. |
| 36 | [sakthiveltofficial/dsh-git-plugins](https://github.com/sakthiveltofficial/dsh-git-plugins) | 2 | 2026-08-22 | 2026-08-22 | dsh-git: Git & source-control plugin suite for DeepSeek Harness — local git + GitHub/GitLab/Bitbucket/Azure DevOps/Gitea + self-evolving memory |
| 37 | [SpookySandwich/dsh-plugin-message-edit](https://github.com/SpookySandwich/dsh-plugin-message-edit) | 2 | 2026-08-21 | 2026-08-22 | Edit a sent message and branch the conversation from that point — version counter under the bubble, plus a tree view. Placement presets modelled on ChatGPT, Claude and DeepSeek. |
| 38 | [suntianc/dsh-antigravity-auth](https://github.com/suntianc/dsh-antigravity-auth) | 2 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin for Antigravity OAuth login and native Antigravity Auth capability bundle |
| 39 | [xxccdl/deepseek-harness-desktop](https://github.com/xxccdl/deepseek-harness-desktop) | 2 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 桌面版 — Electron 壳层封装 dsh web，集成记忆查看、电脑控制、桌面设置、定时任务、快捷对话、预算血条等桌面插件。DeepSeek Harness Desktop — Electron shell wrapping dsh web with desktop-only plugins: memory viewer, computer use, desktop settings, scheduler, quick chat, and usage bar. |
| 40 | [zp-home/dsh-weixin-clawbot](https://github.com/zp-home/dsh-weixin-clawbot) | 2 | 2026-08-21 | 2026-08-22 | Phone-to-DSH control through Tencent's official Weixin ClawBot/iLink channel \| 基于腾讯官方微信 ClawBot/iLink 的 DSH 手机远程控制插件 |
| 41 | [AgentsDanceAI/deepseek-harness-cloud](https://github.com/AgentsDanceAI/deepseek-harness-cloud) | 1 | 2026-08-21 | 2026-08-22 | Accounts, credits and cloud agent workspaces for DeepSeek Harness — run it as a hosted product, or self-host in 5 minutes. |
| 42 | [ai-yucheng/dsh-composer-image-tools](https://github.com/ai-yucheng/dsh-composer-image-tools) | 1 | 2026-08-21 | 2026-08-22 | DSH 聊天输入框图片工具(自研):上传图片 + 区域截图,注入草稿图片轨。零依赖,纯客户端+Electron desktopCapturer 截屏。 |
| 43 | [aixlb/dsh-bcc](https://github.com/aixlb/dsh-bcc) | 1 | 2026-08-21 | 2026-08-22 | 包拆拆 for DeepSeek Harness: video to script/storyboard/style guide. dsh-plugin. |
| 44 | [Alain-Prot0s5/dsh-screenshot](https://github.com/Alain-Prot0s5/dsh-screenshot) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness Desktop 截图自动粘贴插件（需安装 DSH Desktop 版，仅 Win10/11，纯 AI 生成）：相机按钮 / 全局热键 Alt+A → 系统截图 → 自动粘贴进输入框 \| Screenshot-to-input plugin for DeepSeek Harness Desktop (DSH Desktop app required; Windows 10/11 only; AI-generated): camera button & global hotkey Alt+A -> snip -> auto-paste into composer |
| 45 | [andyfan1094/dsh-winrm](https://github.com/andyfan1094/dsh-winrm) | 1 | 2026-08-21 | 2026-08-22 | Remote Windows administration for the dsh web GUI: WinRM/PowerShell Remoting host config, PowerShell exec, streaming console, service and process management, base64-chunked file transfer, cluster execution, plus agent tools (winrm_list, winrm_exec, winrm_service, winrm_process, winrm_upload, winrm_download, winrm_cluster). Standalone Cordis plugin. |
| 46 | [bailynlove/web-search-opencode-responses](https://github.com/bailynlove/web-search-opencode-responses) | 1 | 2026-08-21 | 2026-08-22 | dsh WebSearchProvider over the OpenCode Zen Go Responses API server-side web_search tool |
| 47 | [BaronCyrus/dsh-harness-ally](https://github.com/BaronCyrus/dsh-harness-ally) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 联盟模式：自由组合 DSH、Claude Code、Codex 与全部已配置模型，保留原生 Agent 生命周期与实时执行过程。 |
| 48 | [botaochen840-lgtm/fatfish-pet-smart-companion](https://github.com/botaochen840-lgtm/fatfish-pet-smart-companion) | 1 | 2026-08-22 | 2026-08-22 | FatFish Pet Smart Companion - 自包含智能桌面桌宠（改编自 whale-girl），下载即用，可选真连 DeepSeek Harness |
| 49 | [chidaic/dsh-agent-notify](https://github.com/chidaic/dsh-agent-notify) | 1 | 2026-08-22 | 2026-08-22 | DSH Web GUI task-completion notifications: Windows system-level alerts (browser Notification API) when the agent finishes a task or needs your input - click-to-open session, background-only mode, settings page in Settings ? ????. ???????? |
| 50 | [Chu-m/dsh-chat-continue](https://github.com/Chu-m/dsh-chat-continue) | 1 | 2026-08-22 | 2026-08-22 | Auto-retry failed API requests to keep DSH conversations going. Supports configurable status codes and error codes.  自动重试失败的 API 请求，让 DSH 对话不中断。支持自定义状态码和错误码。 |
| 51 | [daizihan233/dsh-my-go](https://github.com/daizihan233/dsh-my-go) | 1 | 2026-08-20 | 2026-08-22 | My tasks, where to GO????? |
| 52 | [DamonBao/dsh-dungeon-party](https://github.com/DamonBao/dsh-dungeon-party) | 1 | 2026-08-22 | 2026-08-22 | Safety-first five-agent orchestration plugin for DeepSeek Harness (DSH), with leases, scopes, checkpoints, validation, and recovery. |
| 53 | [danhcng3822f/dsh-mcp-kimicodeandmgr](https://github.com/danhcng3822f/dsh-mcp-kimicodeandmgr) | 1 | 2026-08-21 | 2026-08-22 | MCP engine and manager for DeepSeek Harness. Fork of yangfch3/dsh-mcp-mgr, MCP layer rebuilt on kimi-code's architecture: self-contained engine, three config layers, transport-driven status. |
| 54 | [demo007x/dsh-web-mermaid](https://github.com/demo007x/dsh-web-mermaid) | 1 | 2026-08-21 | 2026-08-22 | Deepseek harness mermaid流程图渲染插件 |
| 55 | [drscrewdriver/dsh-session-search-toggle](https://github.com/drscrewdriver/dsh-session-search-toggle) | 1 | 2026-08-19 | 2026-08-22 | 给 DeepSeek Harness 侧边栏加一个会话内容检索——标题/内容一键切换，还能按用户/回复/工具筛选 |
| 56 | [dsh-blue/blue](https://github.com/dsh-blue/blue) | 1 | 2026-08-18 | 2026-08-22 | Blue: a TUI is not a package, it is a Cordis plugin tree — a modern terminal UI for DeepSeek Harness with hot-swappable render, interaction, and command plugins. |
| 57 | [Elave-66/dsh-blue-sea-launcher](https://github.com/Elave-66/dsh-blue-sea-launcher) | 1 | 2026-08-21 | 2026-08-22 | Deepseek 二次元游戏/Galgame 风格启动图标。鲸鱼娘形象来源bilibili@上善无形 @ZipZipPipe，适合重度二次元使用，配合鲸鱼娘皮肤等二次元插件使用更佳！ |
| 58 | [enterhalf/dsh-web-network-optimizer](https://github.com/enterhalf/dsh-web-network-optimizer) | 1 | 2026-08-21 | 2026-08-22 | dsh网页端网络优化：通过缓存与压缩技术降低传输，从而大幅提升网页加载速度；同时提供网络断连指示与自动断网重连功能。非常适合追求极致性能或网络不稳定用户使用。Network optimization for the DSH web UI: reduces transfer size with caching and compression to greatly speed up page loading, plus a connection-drop indicator and automatic reconnection. Ideal for users pursuing peak performance or using unstable networks. |
| 59 | [ericw0315/dsh-usage-lite](https://github.com/ericw0315/dsh-usage-lite) | 1 | 2026-08-21 | 2026-08-22 | 为 DeepSeek Harness Web 界面提供简洁、优雅的余额与 Token 用量面板。  Compact provider balances and local token-usage analytics for the DeepSeek Harness Web UI. |
| 60 | [fastengiel-kurai/dsh-peekfile-everything](https://github.com/fastengiel-kurai/dsh-peekfile-everything) | 1 | 2026-08-19 | 2026-08-22 | DSH local file search, clickable path detection, and floating preview plugin with optional EverythingCLI integration. |
| 61 | [FeatherHunter/dsh-plugin-ui-debug](https://github.com/FeatherHunter/dsh-plugin-ui-debug) | 1 | 2026-08-18 | 2026-08-22 | DSH 插件 UI 调试神器：让 AI 在真实 Chrome 中帮你看界面、点按钮、拖组件，一键安装零配置 |
| 62 | [FloatingLifeTL/dsh-plugin-session-manager-custom](https://github.com/FloatingLifeTL/dsh-plugin-session-manager-custom) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness Web plugin for local session data management |
| 63 | [guyuefangyuanl/dsh-memory](https://github.com/guyuefangyuanl/dsh-memory) | 1 | 2026-08-21 | 2026-08-22 | Cross-session persistent memory for the DeepSeek Harness: a model-facing memory tool, an always-on index section, and a bundled maintenance skill. |
| 64 | [hatanokokosa/dsh-colorschemes](https://github.com/hatanokokosa/dsh-colorschemes) | 1 | 2026-08-22 | 2026-08-22 | A DSH ColorScheme Plugin |
| 65 | [Howe829/dsh-insider](https://github.com/Howe829/dsh-insider) | 1 | 2026-08-20 | 2026-08-22 | Runtime observability and relationship graph for DeepSeek Harness and Cordis |
| 66 | [hufang360/dsh-sticky-notes](https://github.com/hufang360/dsh-sticky-notes) | 1 | 2026-08-16 | 2026-08-22 | 记下想法，让agent落盘！ |
| 67 | [hyperion2144/dsh-subagent-pro](https://github.com/hyperion2144/dsh-subagent-pro) | 1 | 2026-08-20 | 2026-08-22 | DSH Web extension: live subagent monitor + role-based subagent routing + Claude Code style .dsh/agents/*.md persona injection |
| 68 | [Jason-skd/dsh-session-fork](https://github.com/Jason-skd/dsh-session-fork) | 1 | 2026-08-20 | 2026-08-22 | Makes the branch the building block of AI conversation management — parallel workflows, continuous and mergeable conversation memory |
| 69 | [JasonWei04/dsh-computer-use](https://github.com/JasonWei04/dsh-computer-use) | 1 | 2026-08-18 | 2026-08-22 | computer-use in dsh |
| 70 | [Jokasa7/dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) | 1 | 2026-08-22 | 2026-08-22 | Draggable conversation task canvas for native and external DeepSeek Harness subagents. |
| 71 | [lasdrder0705/dsh-pro-vision](https://github.com/lasdrder0705/dsh-pro-vision) | 1 | 2026-08-21 | 2026-08-22 | DSH plugin: let DeepSeek-V4-Pro use V4-Flash-Vision-Exp for attached images. Install: dsh plugin --profile web add github:lasdrder0705/dsh-pro-vision |
| 72 | [liznee/dsh-file-resource](https://github.com/liznee/dsh-file-resource) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness Web 的本地文件输入插件。在输入框原有的 + 菜单顶部增加 attach，并用分隔线与 Harness 原生命令区分；不会再增加一个单独按钮。Private local file attachments for DeepSeek Harness with native images and bounded document reading. |
| 73 | [loeanxi/dsh-injection-guard](https://github.com/loeanxi/dsh-injection-guard) | 1 | 2026-08-19 | 2026-08-22 | Source-aware prompt injection protection for DeepSeek Harness |
| 74 | [log-li/dsh-automode](https://github.com/log-li/dsh-automode) | 1 | 2026-08-21 | 2026-08-22 | CC-style auto approval layer for DeepSeek Harness: deterministic rules + two-stage classifier, circuit breaker, fail-to-human. Shadow mode day one. |
| 75 | [Loopiplusplus/dsh-plugin-toggle-manager](https://github.com/Loopiplusplus/dsh-plugin-toggle-manager) | 1 | 2026-08-20 | 2026-08-22 | Visual plugin manager for DSH Web. |
| 76 | [lunaship/dsh-links](https://github.com/lunaship/dsh-links) | 1 | 2026-08-18 | 2026-08-22 | Android companion for DeepSeek Harness: trusted-LAN pairing, mobile sessions, SSE approvals, experimental tunnels, and a planned DSH Links Relay. |
| 77 | [luxueliu/luxueliu-reasoning-efforts](https://github.com/luxueliu/luxueliu-reasoning-efforts) | 1 | 2026-08-21 | 2026-08-22 | DSH里只有ds能选推理强度？20个常用模型推理强度按钮已就位！涵盖grok/Gemini / Kimi/glm……20个模型仅预设，实际槽位无上限！可以任意添加你的本地网关模型！（非 ds 系网关模型推理强度档位插件 + 路由级 llm-pi-ai 补丁） |
| 78 | [margbug01/dsh-ma-plugins](https://github.com/margbug01/dsh-ma-plugins) | 1 | 2026-08-15 | 2026-08-22 | DeepSeek Harness (DSH) plugins: Tavily+Exa web search, Oracle second opinion, GitHub Librarian, /handoff, session manager, and file drop. |
| 79 | [meng-114/dsh-image-tiler](https://github.com/meng-114/dsh-image-tiler) | 1 | 2026-08-21 | 2026-08-22 | DSH插件：将大图像分割成带标签的800像素图块，并保留概览图，同时保留视觉模型所需的细节。包含设置卡。DSH plugin: slice large images into labeled 800px tiles + overview, preserving detail for vision models. Settings card included. |
| 80 | [MingYU-kalo/dsh-https-fix](https://github.com/MingYU-kalo/dsh-https-fix) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: built-in HTTPS reverse proxy with configurable settings (设置→插件配置→Https Fix) |
| 81 | [NokorinNishikino/kidai-plugin-remote](https://github.com/NokorinNishikino/kidai-plugin-remote) | 1 | 2026-08-21 | 2026-08-22 | Kidai Plugin Remote 纪代管理：DSH的外部管理器，启停插件、隔离运行、手动回滚、预检诊断、变砖救急！配合KSG（Kidai-snapshot-guard）使用，自动快照、备份回滚！  |
| 82 | [NokorinNishikino/kidai-plugin-remote-client](https://github.com/NokorinNishikino/kidai-plugin-remote-client) | 1 | 2026-08-21 | 2026-08-22 | Kidai Plugin Remote 纪代管理（Client）：零依赖的桌面客户端，DSH的外部管理器，启停插件、隔离运行、手动回滚、预检诊断、变砖救急！配合KSG（Kidai-snapshot-guard）使用，保存自动快照、备份回滚！ |
| 83 | [NokorinNishikino/kidai-snapshot-guard](https://github.com/NokorinNishikino/kidai-snapshot-guard) | 1 | 2026-08-21 | 2026-08-22 | Kidai-snapshot-guard 纪代备份：DSH 内部备份插件，关闭自动保存快照、开机确认、单 zip 备份导出导入恢复、隔离自动恢复、多主流备份插件文件兼容 |
| 84 | [Nzssm1/dsh-a-stock-five-dimension](https://github.com/Nzssm1/dsh-a-stock-five-dimension) | 1 | 2026-08-21 | 2026-08-22 | A DeepSeek Harness (DSH) community agent preset for rigorous A-share five-dimension (technical/valuation/fundamental/capital-flow/news) standardized analysis: persona, skill knowledge base, hard risk gate, deterministic Python scoring core, Tencent-first collectors. Not an investment recommendation. |
| 85 | [orpheus0829/dsh-identity-control](https://github.com/orpheus0829/dsh-identity-control) | 1 | 2026-08-21 | 2026-08-22 | 为 DeepSeek Harness (DSH) 打造的自定义人设控制插件。 在对话输入栏旁自由填写你的人设文本，一键开关，所有新对话自动生效、免重启。 人设纯粹是你设定的风格，不覆盖 DSH 安全护栏，安装即用、状态持久化。 |
| 86 | [oxgbl/dsh-no-cmd-launcher](https://github.com/oxgbl/dsh-no-cmd-launcher) | 1 | 2026-08-22 | 2026-08-22 | DSH background launcher: double-click icon to run dsh web without any cmd window, plus desktop start/stop shortcuts (npm/CLI installs, no DSH Desktop dependency) |
| 87 | [pg527322814/dsh-bayes-predict](https://github.com/pg527322814/dsh-bayes-predict) | 1 | 2026-08-21 | 2026-08-22 | dsh-贝叶斯个股预测插件：多指标信号融合的上涨概率估计、趋势状态识别与持仓风险度量（A 股 + 美股） |
| 88 | [pmorgan3/deep-tui](https://github.com/pmorgan3/deep-tui) | 1 | 2026-08-21 | 2026-08-22 | deep-tui is a plugin-first coding-agent harness built on Cordis. Providers, tools, prompts, permissions, storage, themes, commands, renderers, and the agent loop are all replaceable plugins. |
| 89 | [Qx002/dsh-group-chat](https://github.com/Qx002/dsh-group-chat) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness插件，多AI群聊插件 |
| 90 | [Ruiming-cn/dsh-better-at](https://github.com/Ruiming-cn/dsh-better-at) | 1 | 2026-08-21 | 2026-08-22 | Fast @ file/session reference caching for DeepSeek Harness Web / DSH @ 引用菜单加速插件 |
| 91 | [Ruiming-cn/dsh-more-session-operations](https://github.com/Ruiming-cn/dsh-more-session-operations) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness Web sidebar session-row menu enhancements: mark unread via the official completed-reminder dot, copy session ID, delete session with confirmation, archive confirmation, and recursive subagent-session deletion. |
| 92 | [SeerableOfficial/dsh-web-search-toggle](https://github.com/SeerableOfficial/dsh-web-search-toggle) | 1 | 2026-08-22 | 2026-08-22 | DSH plugin: a per-session "Web Search" toggle that forces the agent to search the web before answering. |
| 93 | [skymecode/dsh-deep-diving](https://github.com/skymecode/dsh-deep-diving) | 1 | 2026-08-20 | 2026-08-22 | plugin for dsh deep diving  |
| 94 | [SKzrui/DSH-CLI](https://github.com/SKzrui/DSH-CLI) | 1 | 2026-08-14 | 2026-08-22 | DSH-CLI是一款简洁的命令行工具，可在终端内与 DeepSeek Harness 对话：一条命令即可启动，无需部署服务、无需占用端口。支持流式输出、工具调用、按目录独立恢复会话，同时支持 API Key 与模型参数配置。 |
| 95 | [Star-Guest/dsh-plugin-tavern](https://github.com/Star-Guest/dsh-plugin-tavern) | 1 | 2026-08-22 | 2026-08-22 | 酒馆（SillyTavern 精简版）DSH 插件：角色卡解析管理员 card-analyst + 角色扮演讲述者 roleplay |
| 96 | [T-MKT/dsh-customization-settings](https://github.com/T-MKT/dsh-customization-settings) | 1 | 2026-08-19 | 2026-08-22 | Provide generic UI customization settings for DeepSeek Harness, like wallpaper, theme color, etc.  |
| 97 | [TNTsama11/dsh-tool-vision](https://github.com/TNTsama11/dsh-tool-vision) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (DSH) plugin that lets a text-only agent call DeepSeek-V4-Flash-Vision-Exp to see images on demand, without manually switching models. |
| 98 | [YiMlT/dsh-notify-yimit](https://github.com/YiMlT/dsh-notify-yimit) | 1 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 通知插件:在 **任务完成 / 任务出错 / 运行中 / 等待审批 / 等待回答** 时提醒用户。 通知标题为对话标题;系统通知与自定义通知均支持**点击跳转到对应会话**。 |
| 99 | [Young4ever33/dsh-token-attention](https://github.com/Young4ever33/dsh-token-attention) | 1 | 2026-08-22 | 2026-08-22 | Token Check · 词元管理：DeepSeek Harness (DSH) 的 token 注意力管理面板——按任务/日/周/月记录 token 消耗与费用（命中/未命中/输出/推理），支持 DeepSeek 峰谷计价，并给出换对话、写 hand-off 的执行时机建议。 |
| 100 | [z-col/dsh-workspace-groups](https://github.com/z-col/dsh-workspace-groups) | 1 | 2026-08-21 | 2026-08-22 | DeepSeek Harness web client plugin: group sidebar workspaces into a configurable three-level tree (分类→项目→会话). Sidecar YAML rules. dsh-plugin. |
| 101 | [zhangdong456/dsh-prompt-presets](https://github.com/zhangdong456/dsh-prompt-presets) | 1 | 2026-08-21 | 2026-08-22 | Prompt Presets to manage your library  |
| 102 | [0xRabit/dsh-crypto-portfolio](https://github.com/0xRabit/dsh-crypto-portfolio) | 0 | 2026-08-22 | 2026-08-22 | A free, 100% self-hosted DeepSeek Harness plugin that unifies your on-chain and CEX assets. |
| 103 | [1-CellBio/dsh-okf](https://github.com/1-CellBio/dsh-okf) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness plugin: turn research PDFs into a citable OKF markdown library, with full-text & semantic search, knowledge graph, and survey writing. |
| 104 | [18126295767-cell/dsh-mac-control](https://github.com/18126295767-cell/dsh-mac-control) | 0 | 2026-08-19 | 2026-08-22 | Give DeepSeek Harness hands on your Mac: native browser and desktop control tools for macOS. |
| 105 | [2327644800/dsh-usage-analytics](https://github.com/2327644800/dsh-usage-analytics) | 0 | 2026-08-22 | 2026-08-22 | Personal usage analytics & activity dashboard for the DeepSeek Harness (dsh) web GUI: token totals, contribution heatmap, model share, insights. Local-only, metadata only. |
| 106 | [240xu/dsh-websearch](https://github.com/240xu/dsh-websearch) | 0 | 2026-08-20 | 2026-08-22 | Unified web search provider for DSH |
| 107 | [ADDD1118/dsh-update](https://github.com/ADDD1118/dsh-update) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (dsh) check-for-updates plugin — 右上角检查更新 UI + 关闭后自动升级 (npm / update-dsh.ps1) |
| 108 | [AGSQ11/dsh-completion-gate](https://github.com/AGSQ11/dsh-completion-gate) | 0 | 2026-08-22 | 2026-08-22 | Evidence-backed production-readiness barrier for DeepSeek Harness. |
| 109 | [AGSQ11/dsh-subagent-model-visibility](https://github.com/AGSQ11/dsh-subagent-model-visibility) | 0 | 2026-08-21 | 2026-08-22 | A small DeepSeek Harness plugin that shows the actual provider/model used by a subagent directly inside the existing native subagent tool-call row. |
| 110 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) | 0 | 2026-08-16 | 2026-08-22 | 🖥️ Agent-project workbench for DeepSeek Harness — sidebar app drawer + dockable split workspace + a live control room watching every project. |
| 111 | [AKS1st/dock-media](https://github.com/AKS1st/dock-media) | 0 | 2026-08-21 | 2026-08-22 | Media player for the DSH dock: plays audio (music player) and video (fullscreen) files, streamed over HTTP Range. |
| 112 | [aleleppy/leppy-loop-deepseek](https://github.com/aleleppy/leppy-loop-deepseek) | 0 | 2026-08-22 | 2026-08-22 | Native Leppy Loop bundle for DeepSeek Harness |
| 113 | [AlexKaiqi/dsh-block-to-file](https://github.com/AlexKaiqi/dsh-block-to-file) | 0 | 2026-08-17 | 2026-08-22 | simple runtime ability to map a block to file, such that bash can access |
| 114 | [AllenLogo/dsh-software-tools](https://github.com/AllenLogo/dsh-software-tools) | 0 | 2026-08-21 | 2026-08-22 | DSH 侧边栏【软件工具】管理器:勾选本机 WSL/Windows 软件工具并注入模型系统提示,随插件自带 add-software-tool 技能。Sidebar software-tools manager for DeepSeek Harness Web. |
| 115 | [an4nsi/dsh-fork-view](https://github.com/an4nsi/dsh-fork-view) | 0 | 2026-08-21 | 2026-08-22 | DSH web plugin: replaces the native workspace browser in the left sidebar with a session tree in the style of pi-web by agegr. |
| 116 | [andyfan1094/dsh-codebase-memory](https://github.com/andyfan1094/dsh-codebase-memory) | 0 | 2026-08-21 | 2026-08-22 | DSH bundle that bridges the Codebase Memory MCP code knowledge graph into DSH via the official @deepseek-ai/dsh-mcp-client. |
| 117 | [andyfan1094/dsh-feishu](https://github.com/andyfan1094/dsh-feishu) | 0 | 2026-08-21 | 2026-08-22 | DSH Feishu self-built app integration: WebSocket inbound messages, OK-reaction acknowledgement, and turn replies on the original chat. |
| 118 | [andyfan1094/dsh-github](https://github.com/andyfan1094/dsh-github) | 0 | 2026-08-21 | 2026-08-22 | GitHub authentication and local Git workflow plugin for the dsh web GUI: accounts, repository browsing, clone, pull, push, status, commit, and a settings panel. |
| 119 | [andyfan1094/dsh-minimax-usage-pro](https://github.com/andyfan1094/dsh-minimax-usage-pro) | 0 | 2026-08-21 | 2026-08-22 | DSH bundle plugin showing MiniMax Token Plan / Subscription usage in Settings. Pro edition using webServer routes (host.call is unavailable to trusted bundle plugins on DSH 0.1.0-rc.8). |
| 120 | [andyzhuang233/dsh-favorites](https://github.com/andyzhuang233/dsh-favorites) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: a 收藏夹 (favorites) feature — star a session to keep it, list favorites in a sidebar entry, and protect favorited sessions from archive (fork and rename stay available). |
| 121 | [ant404/dsh-media-gen](https://github.com/ant404/dsh-media-gen) | 0 | 2026-08-21 | 2026-08-22 | DSH plugin: generate images and videos via OpenAI-compatible providers, with dedicated settings menu and workspace media_gen output. |
| 122 | [anweat/dsh-context-console](https://github.com/anweat/dsh-context-console) | 0 | 2026-08-22 | 2026-08-22 | Complete context workbench for DeepSeek Harness: trajectory, inventory, cache history, message forge, and session-log recovery |
| 123 | [aqiane/dsh-client-ui-period-hint](https://github.com/aqiane/dsh-client-ui-period-hint) | 0 | 2026-08-21 | 2026-08-22 | 在输入栏显示当前dsAPI价格时段 |
| 124 | [asuramaya/osiris](https://github.com/asuramaya/osiris) | 0 | 2026-08-04 | 2026-08-22 | The persistent memory and coordination graph for AI agents (MCP, DeepSeek Harness, Claude Code, Cursor) |
| 125 | [banttethai-ops/dsh-right-editor](https://github.com/banttethai-ops/dsh-right-editor) | 0 | 2026-08-21 | 2026-08-22 | Right-docked file panel for DSH Web: browse any directory and view/edit text, images, Office (docx/xlsx/pptx) and PDF documents. Uses local Python for parsing. |
| 126 | [baosfeng/my-dsh-plugins](https://github.com/baosfeng/my-dsh-plugins) | 0 | 2026-08-22 | 2026-08-22 | DSH 侧边栏文件活动插件：记录文件读取 / 新增 / 修改历史与统计，按文件夹平铺展示，基于 dsh-better-sidebar |
| 127 | [BharathBillawa/dsh-tool-ddgs](https://github.com/BharathBillawa/dsh-tool-ddgs) | 0 | 2026-08-22 | 2026-08-22 | DuckDuckGo web search and URL fetch tools for DeepSeek Harness, no API key required. Provides web_search (via ddgs) and   web_fetch (via trafilatura) as a drop-in bundle |
| 128 | [bingfengaaaaa/dsh-jj-vcs](https://github.com/bingfengaaaaa/dsh-jj-vcs) | 0 | 2026-08-22 | 2026-08-22 | Jujutsu version-control plugin and skill for DeepSeek Harness multi-agent teams |
| 129 | [blackdm666/dsh-plugin-88api-image](https://github.com/blackdm666/dsh-plugin-88api-image) | 0 | 2026-08-22 | 2026-08-22 | 88API Image Studio for DSH — Image2 + Nano Banana, text-to-image, multi-reference editing, 2K/4K output, sequential batches, and persistent defaults. |
| 130 | [bowang-lab/dsh-medomni](https://github.com/bowang-lab/dsh-medomni) | 0 | 2026-08-19 | 2026-08-22 | deepseek harness plugin for medical image analysis |
| 131 | [BrianHIO-x/dsh-think-expand](https://github.com/BrianHIO-x/dsh-think-expand) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin that auto-expands Think rows while reasoning |
| 132 | [buildbeforewepitch/agentscars](https://github.com/buildbeforewepitch/agentscars) | 0 | 2026-08-21 | 2026-08-22 | A public commons of real AI-agent failure patterns ("scars") — searchable via API and MCP. Live at agentscars.com. |
| 133 | [Cerbur/clutch-dsh](https://github.com/Cerbur/clutch-dsh) | 0 | 2026-08-19 | 2026-08-22 | Open-source DSH plugins for DeepSeek Harness, starting with a Git worktree-aware Session view for the DSH Web UI. |
| 134 | [chengoak/dsh-font-size](https://github.com/chengoak/dsh-font-size) | 0 | 2026-08-21 | 2026-08-22 | DSH Web GUI plugin: 'Conversation font size' slider (12-22 px) in Settings → General. |
| 135 | [chenpengye/dsh-balance-local](https://github.com/chenpengye/dsh-balance-local) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek API balance plugin for DeepSeek Harness (dsh): Settings-page panel + composer badge. Key stays on the Host; browser gets sanitized balance only. |
| 136 | [chenpengye/dsh-balance-whale](https://github.com/chenpengye/dsh-balance-whale) | 0 | 2026-08-21 | 2026-08-22 | 🐳 Floating DeepSeek API balance widget for DeepSeek Harness (dsh) with a whale-girl icon. Key stays on the Host; browser gets sanitized balance only. |
| 137 | [ChenSiyun1234/dsh-tray-windows](https://github.com/ChenSiyun1234/dsh-tray-windows) | 0 | 2026-08-22 | 2026-08-22 | 把 DeepSeek Harness (dsh web) 变成真正的 Windows 桌面应用：托盘控制、独立应用窗口、退出即彻底停止后端（无残留进程）。非官方项目。 |
| 138 | [chenzhi-clude/dsh-hooks-pack](https://github.com/chenzhi-clude/dsh-hooks-pack) | 0 | 2026-08-21 | 2026-08-22 | One-click Claude Code and Codex hooks for DeepSeek Harness: auto-discovers your existing hooks config and runs it on the official bridge plugins. |
| 139 | [co-Elly/dsh-plugin-vision](https://github.com/co-Elly/dsh-plugin-vision) | 0 | 2026-08-22 | 2026-08-22 | 👁️ Give your DeepSeek Harness the gift of sight — enables pure-text LLMs to analyze images via Zhipu's free GLM-4V-Flash vision model |
| 140 | [Co-Kyo/dsh-interview-forge](https://github.com/Co-Kyo/dsh-interview-forge) | 0 | 2026-08-22 | 2026-08-22 | interview-forge-plugin for deepseek harness |
| 141 | [coldfish486/dsh-anime25d-pets](https://github.com/coldfish486/dsh-anime25d-pets) | 0 | 2026-08-22 | 2026-08-22 | A 2.5D desktop pet for DeepSeek Harness using Anime2.5DRig's WebGL PSD auto-rigging engine. 用 Anime2.5DRig 的 WebGL PSD 自动装配渲染引擎，为 DeepSeek Harness 提供 2.5D 桌宠。 |
| 142 | [DaoCaoRenH/dsh-openai-responses-bridge](https://github.com/DaoCaoRenH/dsh-openai-responses-bridge) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness plugin for third-party OpenAI Responses and native Gemini APIs, with custom providers, model discovery, and hosted web search. |
| 143 | [DaoCaoRenH/dsh-plugin-manager](https://github.com/DaoCaoRenH/dsh-plugin-manager) | 0 | 2026-08-20 | 2026-08-22 | Visual manager for DeepSeek Harness configuration sets, Plugins, Skills, and MCP servers. |
| 144 | [dat-lequoc/dsh-shots](https://github.com/dat-lequoc/dsh-shots) | 0 | 2026-08-22 | 2026-08-22 | Shots tab for DeepSeek Harness: live screenshot player over a browser daemon's shots/ feed (dsh plugin) |
| 145 | [dat-lequoc/dsh-supervisor](https://github.com/dat-lequoc/dsh-supervisor) | 0 | 2026-08-22 | 2026-08-22 | Always-on supervisor agent bundle for DeepSeek Harness: main-agent preset + schedule overlay, one dsh plugin add away |
| 146 | [DaXiGua732/start-dsh](https://github.com/DaXiGua732/start-dsh) | 0 | 2026-08-22 | 2026-08-22 | 一个能够直接快速启动DSH的ps脚本，具备高峰时段检测功能，高峰时段启动时不会直接进入DSH，反之直接进入，帮助个人开发者省钱省力 |
| 147 | [dddzzz123-dz/dsh-read-image-plugin](https://github.com/dddzzz123-dz/dsh-read-image-plugin) | 0 | 2026-08-22 | 2026-08-22 | Image input fallback for DeepSeek Harness with native multimodal model detection and Volcengine Ark vision. |
| 148 | [DecresLuna/DSH-Service](https://github.com/DecresLuna/DSH-Service) | 0 | 2026-08-22 | 2026-08-22 | DSH Service - DeepSeek Harness Mac 菜单栏服务管理器 |
| 149 | [DemoJ/proactive-notify](https://github.com/DemoJ/proactive-notify) | 0 | 2026-08-20 | 2026-08-22 | 一个运行在 DeepSeek Harness（DSH）Web GUI 上的消息通知插件 |
| 150 | [DevViking-Persike/dsh-cliproxy](https://github.com/DevViking-Persike/dsh-cliproxy) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: routes cliproxy-claude and cliproxy-openai through a local CLIProxyAPI, so the agent reaches your own CLI subscriptions |
| 151 | [DevViking-Persike/dsh-docker](https://github.com/DevViking-Persike/dsh-docker) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: Docker container, image, log, and Compose tools for the agent, over the local Docker CLI |
| 152 | [DevViking-Persike/dsh-monaco](https://github.com/DevViking-Persike/dsh-monaco) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: serves the Monaco editor distribution over a host HTTP route, so an editor plugin needs no CDN |
| 153 | [DiligenceLai/dsh-memory-ga](https://github.com/DiligenceLai/dsh-memory-ga) | 0 | 2026-08-22 | 2026-08-22 | Gated GA-style layered memory for DeepSeek Harness: hard-injected L1 index + RULES, session working checkpoint, settlement ritual to Skills/L1/L2 - no silent auto-retain. |
| 154 | [DosterBool/dsh-zombie-gc](https://github.com/DosterBool/dsh-zombie-gc) | 0 | 2026-08-22 | 2026-08-22 | DSH 插件：开机清理僵尸 agent（已收尾会话仍挂 registry，导致退出重进后输入框卡死） |
| 155 | [dsh-ai-org/top-dsh-plugins](https://github.com/dsh-ai-org/top-dsh-plugins) | 0 | 2026-08-22 | 2026-08-22 | 📈 Daily-updated DeepSeek Harness plugin rankings · 每日更新的 DSH 插件榜单 — powered by dsh-ai.org |
| 156 | [dsh-plugins/dsh-network-settings](https://github.com/dsh-plugins/dsh-network-settings) | 0 | 2026-08-21 | 2026-08-22 | A DeepSeek Harness plugin that bundles three network capabilities — User-Agent rewriting (from @dsh-plugin/dsh-user-agent), a HTTP / HTTPS-CONNECT / SOCKS5 proxy (from dsh-net-proxy), and configurable request auto-retry — all driven from a single 网络设置 (Network) tab in the Web settings. |
| 157 | [dsh-plugins/dsh-user-agent](https://github.com/dsh-plugins/dsh-user-agent) | 0 | 2026-08-21 | 2026-08-22 | Rewrites the User-Agent sent by every outgoing HTTP request (LLM API calls and other global-fetch traffic) to a value of your choice, configured live from a dedicated UA 设置 (User-Agent) tab in the Web settings. 为 dsh 发出的所有出站 HTTP 请求（LLM API 调用等走全局 fetch 的流量）改写 User-Agent，并可在 Web 设置的 UA 设置 选项卡中实时配置。 |
| 158 | [elmaxid/dsh-manage](https://github.com/elmaxid/dsh-manage) | 0 | 2026-08-21 | 2026-08-22 | Instalacion y administracion de DeepSeek Harness (dsh): install/start/stop/update/status para puestos dev |
| 159 | [elviass/dsh-cost-insights](https://github.com/elviass/dsh-cost-insights) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的用量、费用、Token、缓存、余额与模型价格分析插件。 |
| 160 | [exoticknight/dsh-labnana](https://github.com/exoticknight/dsh-labnana) | 0 | 2026-08-22 | 2026-08-22 | Labnana image generation for DeepSeek Harness: text-to-image / image-to-image / precise editing — chat image cards, credentials-domain API key, settingsScope UI |
| 161 | [fan56/dsh-llm-net-retry](https://github.com/fan56/dsh-llm-net-retry) | 0 | 2026-08-22 | 2026-08-22 | dsh plugin: bounded retry for gateway network_error failures the stock retry policy cannot classify |
| 162 | [fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) | 0 | 2026-08-20 | 2026-08-22 | 一个基于DeepSeek-Harness的ComfyUI插件 |
| 163 | [fanfan6/dsh-model-search](https://github.com/fanfan6/dsh-model-search) | 0 | 2026-08-22 | 2026-08-22 | DSH 模型搜索插件 - 跨平台快速筛选模型 |
| 164 | [fbzz/readproof](https://github.com/fbzz/readproof) | 0 | 2026-08-21 | 2026-08-22 | Readproof — the lockfile and replay primitive for what AI agents read: stable identity, freshness policy, content-addressed snapshots, per-run manifests, diff, byte-exact replay, evidence bundles. |
| 165 | [frederico-kluser/dsh-plugin-dev-agent-skill](https://github.com/frederico-kluser/dsh-plugin-dev-agent-skill) | 0 | 2026-08-22 | 2026-08-22 | Global agent skill: create, extend, secure, test and publish Cordis plugins for the DeepSeek Harness (DSH). Verified-by-measurement API surface (ctx.webServer, spawn(spec)), frontend levers, IPC, security, testing, packaging & publishing. |
| 166 | [Frog755/dsh-prompt-vault](https://github.com/Frog755/dsh-prompt-vault) | 0 | 2026-08-22 | 2026-08-22 | Prompt Vault: 输入框上方的提示词库（DSH 插件）— 📚 按钮展开面板，点条目一键填入 prompt。DeepSeek Harness prompt library plugin. |
| 167 | [fuzhengwei/walioffice-dsh-plugin](https://github.com/fuzhengwei/walioffice-dsh-plugin) | 0 | 2026-08-19 | 2026-08-22 | Deepseek Harness Walioffice 办公软件 插件 |
| 168 | [Gaines-cz/dsh-a-share-screener](https://github.com/Gaines-cz/dsh-a-share-screener) | 0 | 2026-08-21 | 2026-08-22 | A-share stock screening plugin for DeepSeek Harness (dsh): pluggable strategies, Tushare token via credentials ref, free Eastmoney/Tencent fallback. |
| 169 | [Gcd1949/dsh-tools](https://github.com/Gcd1949/dsh-tools) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) utilities: session-manager plugin & Windows control panel |
| 170 | [GooDAnDReaDY/dsh-grok-xsearch](https://github.com/GooDAnDReaDY/dsh-grok-xsearch) | 0 | 2026-08-21 | 2026-08-22 | x_search tool for DeepSeek Harness via separate SuperGrok OAuth (X/Twitter search) |
| 171 | [GreenLv/dsh-session-insights](https://github.com/GreenLv/dsh-session-insights) | 0 | 2026-08-21 | 2026-08-22 | Local-first, evidence-backed workflow retrospectives for DeepSeek Harness |
| 172 | [Hades03/dsh-model-quota-usage](https://github.com/Hades03/dsh-model-quota-usage) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: DeepSeek balance and per-provider/model token usage in a draggable overlay. |
| 173 | [HaoyueQin/dsh-deepseek-monitor](https://github.com/HaoyueQin/dsh-deepseek-monitor) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness web plugin: DeepSeek balance & platform usage monitoring inside the official Settings-Models-DeepSeek card, plus a live balance item in the conversation stats band. Ported from DeepSeekMonitorWindows. |
| 174 | [Harvey-Will/dsh-vision-analysis](https://github.com/Harvey-Will/dsh-vision-analysis) | 0 | 2026-08-21 | 2026-08-22 | Image understanding for the DeepSeek Harness — analyze_image tool with 8 modes, any OpenAI/Anthropic-compatible vision endpoint |
| 175 | [Hjay1101/dsh-ios-control](https://github.com/Hjay1101/dsh-ios-control) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 插件：手机扫码遥控电脑上的 agent —— 在 dsh-remote-link 基础上增强会话持久化（dsh 重启后已配对设备保持登录）、iOS 主屏图标等 |
| 176 | [hxt9805/dsh-remote-tailscale](https://github.com/hxt9805/dsh-remote-tailscale) | 0 | 2026-08-22 | 2026-08-22 | DSH plugin: open the local DSH web UI on your other Tailscale devices |
| 177 | [hyperion2144/dsh-hashline-edittool](https://github.com/hyperion2144/dsh-hashline-edittool) | 0 | 2026-08-20 | 2026-08-22 | Hash-anchored read/edit/undo_last_edit tools for DeepSeek Harness (dsh) |
| 178 | [Innocent-children/dev-flow](https://github.com/Innocent-children/dev-flow) | 0 | 2026-08-14 | 2026-08-22 | Local process control and recovery for Codex and DeepSeek Harness: explicit scope, verification budgets, and durable task state. |
| 179 | [iyam-x/iyam-dsh-desktop](https://github.com/iyam-x/iyam-dsh-desktop) | 0 | 2026-08-21 | 2026-08-22 | a deepseek harness desktop，DeepSeek Harness（DSH）的跨平台原生桌面客户端。内置完整 DSH 内核与 Node.js 运行时，无需联网、无需预先安装 Node.js 即可开箱即用，带有系统通知，自定义主题 |
| 180 | [jedzqer/dsh-retry-plugin](https://github.com/jedzqer/dsh-retry-plugin) | 0 | 2026-08-21 | 2026-08-22 | 一款用于DeepSeek Harness（DSH）的插件，可以在AI API请求错误时自动发送继续的消息以重试。A plugin for DeepSeek Harness (DSH) that automatically sends continuation messages to retry when AI API requests fail. |
| 181 | [Jiazliang/dsh-worktree](https://github.com/Jiazliang/dsh-worktree) | 0 | 2026-08-22 | 2026-08-22 | Fork-like git worktree for DeepSeek Harness (DSH): create an isolated git worktree from a workspace/session and open a new session in it — optionally forking the conversation so the child inherits all history and works on its own branch. |
| 182 | [jieguanya/tugu-dsh-balance-widget](https://github.com/jieguanya/tugu-dsh-balance-widget) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (DSH) 余额插件：实时余额/今日消耗/7-30天趋势图 |
| 183 | [jisi71/dsh-memories](https://github.com/jisi71/dsh-memories) | 0 | 2026-08-21 | 2026-08-22 | Dual-ledger cross-session memory for DeepSeek Harness: auto-extracted long-term facts (MEMORY.md) + living project progress ledger (PROGRESS.md), recalled into every new session. Inspired by OpenAI Codex's memory pipeline. |
| 184 | [jli658942-web/dsh-market-skill](https://github.com/jli658942-web/dsh-market-skill) | 0 | 2026-08-22 | 2026-08-22 | DSH Market 全局 skill：教 Agent 发现、评估、安装 DeepSeek Harness 插件/技能。Global skill teaching agents to use DSH Market (dsh.market) to discover, evaluate and install DSH plugins and skills. |
| 185 | [JMweitao/dsh-local-plugin-installer](https://github.com/JMweitao/dsh-local-plugin-installer) | 0 | 2026-08-21 | 2026-08-22 | 从 DSH Web 设置页安装并构建本地插件 / Install and build local DeepSeek Harness plugins from the Web settings page. |
| 186 | [JollY-Life/jolly-dsh-vision](https://github.com/JollY-Life/jolly-dsh-vision) | 0 | 2026-08-21 | 2026-08-22 | ModLens 风格的 DeepSeek Harness 视觉桥接插件：deepseek-v4-pro 当大脑、deepseek-v4-flash-vision-exp 当眼睛，提供 vision 工具与 (ds vision) 视觉孪生模型，让纯文本模型也能看图、直接贴图。 |
| 187 | [jsoncode/dsh-balance-by-token](https://github.com/jsoncode/dsh-balance-by-token) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness（dsh）双面插件（宿主 + 浏览器半边）：查看 DeepSeek 账户余额， 按 token 用量估算费用，价格按模型 × 高峰/空闲时段在线配置。所有能力收敛在 统一弹框中（侧边栏底部「余额」入口），另在会话头部提供实时 「当前会话 ≈xx CNY \| 余额 xx CNY」按钮。界面中英双语（跟随宿主 UI 语言）。 |
| 188 | [KamChiHei/dsh-deepseek-usage-monitor](https://github.com/KamChiHei/dsh-deepseek-usage-monitor) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) plugin: token usage accounting and account balance with a live status card in DSH Web |
| 189 | [kedoupi/xiaotaozi-dsh](https://github.com/kedoupi/xiaotaozi-dsh) | 0 | 2026-08-21 | 2026-08-22 | xiaotaozi-dsh：小桃子 DeepSeek Harness 插件与 Mac 客户端 |
| 190 | [keke-shy/dsh-desktop](https://github.com/keke-shy/dsh-desktop) | 0 | 2026-08-16 | 2026-08-22 | Minimal Electron desktop shell embedding the official DeepSeek Harness web profile |
| 191 | [KeyboardPrince/dsh-skill-manager](https://github.com/KeyboardPrince/dsh-skill-manager) | 0 | 2026-08-22 | 2026-08-22 | DSH 设置界面中的技能管理器插件：可视化管理全局/项目级 Skill（导入、编辑、删除、启用/禁用 SKILL.md 目录） |
| 192 | [kittimzhe/dsh-session-export](https://github.com/kittimzhe/dsh-session-export) | 0 | 2026-08-22 | 2026-08-22 | Human-readable session transcript export for DeepSeek Harness — /transcript writes Markdown/JSON to a host path via ctx.sessionQuery (dsh-plugin) |
| 193 | [L3n3L/dsh-disk-cleaner](https://github.com/L3n3L/dsh-disk-cleaner) | 0 | 2026-08-22 | 2026-08-22 | Windows disk space analysis and safe cleanup plugin for DeepSeek Harness |
| 194 | [Lbunc/dsh-local-llm-controller](https://github.com/Lbunc/dsh-local-llm-controller) | 0 | 2026-08-21 | 2026-08-22 | 为DSH接入本地大模型能力：在「设置→插件」页一键启停本地 llama.cpp 大模型（35B/9B，视觉×文本×快速/长上下文），卡片内配置、一条命令安装、自动注册，装完即用。 \| start/stop a local llama.cpp llama-server right from Settings → Plugins, with Qwen3.6-35B / Qwen3.5-9B (vision × text, fast × long-context) as session models — card config, one-command install, auto-registered. |
| 195 | [LCYLYM/dsh-plugin-compat-guardian](https://github.com/LCYLYM/dsh-plugin-compat-guardian) | 0 | 2026-08-22 | 2026-08-22 | Repository-installed CI repair bot that keeps DeepSeek Harness plugins compatible with new DSH releases |
| 196 | [lengquan88/dsh-dual-auto](https://github.com/lengquan88/dsh-dual-auto) | 0 | 2026-08-21 | 2026-08-22 | Dual-model auto-routing plugin for DeepSeek Harness: low-cost direct / high-cost upgrade + escape-learning closed loop |
| 197 | [leonardoxr/dsh-routed-subagent](https://github.com/leonardoxr/dsh-routed-subagent) | 0 | 2026-08-22 | 2026-08-22 | Complexity-routed subagent delegation for DeepSeek Harness: the model picks the runtime tier per task. |
| 198 | [LeonSone/dsh-trash](https://github.com/LeonSone/dsh-trash) | 0 | 2026-08-22 | 2026-08-22 | A DeepSeek Harness (DSH) plugin: every delete operation goes through a recoverable trash store — accidental deletes are one restore away. |
| 199 | [lianginx/dsh-quote-selection](https://github.com/lianginx/dsh-quote-selection) | 0 | 2026-08-22 | 2026-08-22 | ❝ Quote selected chat text into the composer as a Markdown blockquote · DeepSeek Harness Web UI 插件：选中会话文字，一键引用 |
| 200 | [lifeopsgo/dsh-capability-toggle-plugin](https://github.com/lifeopsgo/dsh-capability-toggle-plugin) | 0 | 2026-08-22 | 2026-08-22 | Toggle individual agent capabilities (skills, MCP, tools, prompt, approval, guards) from the DSH WebUI composer — session / project / global. DSH 各种能力（mcp/skill/tool等）多层级开关灵活控制 |
| 201 | [lispking/dsh-auto-evolve](https://github.com/lispking/dsh-auto-evolve) | 0 | 2026-08-22 | 2026-08-22 | A self-evolving plugin for DeepSeek Harness (dsh). It observes how the agent runs, proposes improvements to its own assets via the LLM, validates each proposal inside a sandboxed trial agent, and applies only verified mutations — with a versioned ledger and automatic rollback on regression. |
| 202 | [lispking/dsh-qq-skin](https://github.com/lispking/dsh-qq-skin) | 0 | 2026-08-22 | 2026-08-22 | A QQ NT messenger skin for DeepSeek Harness (dsh). Light and dark share one QQ NT language. |
| 203 | [litianshuo110/dsh-ds-vision-auto-route](https://github.com/litianshuo110/dsh-ds-vision-auto-route) | 0 | 2026-08-22 | 2026-08-22 | Route image-bearing turns to a configurable image-capable model for DeepSeek Harness |
| 204 | [LittleFishStars/dsh-opencode-tui](https://github.com/LittleFishStars/dsh-opencode-tui) | 0 | 2026-08-16 | 2026-08-22 | 为 DeepSeek Harness 制作的仿 OpenCode 的 TUI 界面插件 |
| 205 | [liukj98/dsh-ui-tools](https://github.com/liukj98/dsh-ui-tools) | 0 | 2026-08-19 | 2026-08-22 | deepseek harness tools 插件 |
| 206 | [liyongzheng666/dsh-browser-bridge](https://github.com/liyongzheng666/dsh-browser-bridge) | 0 | 2026-08-22 | 2026-08-22 | DSH browser bridge plugin + Firefox extension: browsers read/control via localhost WebSocket |
| 207 | [liyu34/dsh-wsl-tray](https://github.com/liyu34/dsh-wsl-tray) | 0 | 2026-08-22 | 2026-08-22 | 为运行在 WSL 里的 DeepSeek Harness（DSH）提供 Windows 桌面快捷方式与系统托盘启动器。 |
| 208 | [lmong11/dsh-game-center](https://github.com/lmong11/dsh-game-center) | 0 | 2026-08-21 | 2026-08-22 | AI-powered Game Center plugin for DeepSeek Harness, featuring Texas Holdem with 1–7 agent players. |
| 209 | [ls-cool-123/dsh-account-balance](https://github.com/ls-cool-123/dsh-account-balance) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek account balance dashboard plugin for dsh web — shows your DeepSeek API balance above the chat window. |
| 210 | [LVSUGARS/dsh-web-launcher](https://github.com/LVSUGARS/dsh-web-launcher) | 0 | 2026-08-21 | 2026-08-22 | Windows desktop launcher for DeepSeek Harness (DSH) Web: install the official CLI, manage local workspaces, and safely start, stop, and update DSH. |
| 211 | [lxxz1918/dsh-theme-customizer](https://github.com/lxxz1918/dsh-theme-customizer) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness（DSH）Web 界面自定义主题插件：背景/文字/框线/细节全可视化调整，预设导入导出，持久化保存。 |
| 212 | [ly028716/dsh-memory-plugin](https://github.com/ly028716/dsh-memory-plugin) | 0 | 2026-08-20 | 2026-08-22 | Intelligent memory system for DSH - Track user preferences, tool usage, and project context to provide personalized recommendations |
| 213 | [lzyuan549/dsh-plugin-auth](https://github.com/lzyuan549/dsh-plugin-auth) | 0 | 2026-08-22 | 2026-08-22 | Username/password authentication gate for the DeepSeek Harness Web UI |
| 214 | [Malenia12/seedance-video-generator](https://github.com/Malenia12/seedance-video-generator) | 0 | 2026-08-22 | 2026-08-22 | Seedance 2.5 video generator: DSH agent plugin + local web workbench |
| 215 | [mario03690/dsh-devkit](https://github.com/mario03690/dsh-devkit) | 0 | 2026-08-22 | 2026-08-22 | The small deterministic operations an agent needs mid-task. JSON/YAML round-trip, JSON Schema v |
| 216 | [mario03690/dsh-duizhang](https://github.com/mario03690/dsh-duizhang) | 0 | 2026-08-22 | 2026-08-22 | Reconciliation: statements, invoices and ledgers that have to balance. Bank/credit statement PD |
| 217 | [mario03690/dsh-kuajing](https://github.com/mario03690/dsh-kuajing) | 0 | 2026-08-22 | 2026-08-22 | Cross-border commerce: HS codes, customs invoices, mainland reachability. HS/HTS code lookup an |
| 218 | [mario03690/dsh-lines](https://github.com/mario03690/dsh-lines) | 0 | 2026-08-22 | 2026-08-22 | Freeze a working sequence into a hosted production line. Turn a sequence of tool calls that alr |
| 219 | [mario03690/dsh-validate](https://github.com/mario03690/dsh-validate) | 0 | 2026-08-22 | 2026-08-22 | test |
| 220 | [mario03690/dsh-writer](https://github.com/mario03690/dsh-writer) | 0 | 2026-08-22 | 2026-08-22 | Long-form drafts with the structure already decided. Blog posts, press releases, product and jo |
| 221 | [megatronyy/dsh-tradingagents](https://github.com/megatronyy/dsh-tradingagents) | 0 | 2026-08-22 | 2026-08-22 | TradingAgents for DeepSeek Harness: the 14-role A-share multi-agent analysis pipeline behind /trading-agent |
| 222 | [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) | 0 | 2026-08-22 | 2026-08-22 | 1-Line AI Agent Scaffolding Generator for DeepSeek Harness (dsh) — Everything is a Plugin |
| 223 | [menotbobbybrown/dsh-plugin-browser](https://github.com/menotbobbybrown/dsh-plugin-browser) | 0 | 2026-08-22 | 2026-08-22 | Native Web Browser Automation Agent Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 224 | [menotbobbybrown/dsh-plugin-mcp](https://github.com/menotbobbybrown/dsh-plugin-mcp) | 0 | 2026-08-21 | 2026-08-22 | Universal Model Context Protocol (MCP) Bridge Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 225 | [menotbobbybrown/dsh-plugin-memory](https://github.com/menotbobbybrown/dsh-plugin-memory) | 0 | 2026-08-22 | 2026-08-22 | Persistent Knowledge Graph & Long-Term Memory Plugin for DeepSeek Harness (dsh) — Everything is a Plugin |
| 226 | [messiahyl/dsh-plugins](https://github.com/messiahyl/dsh-plugins) | 0 | 2026-08-21 | 2026-08-22 | DSH 插件总仓库：monorepo 开发 + 安装源（本地归档/npm/GitHub/索引）+ 第三方目录。国内网络友好，归档 sha256 校验。 |
| 227 | [minyang2020/dsh-migrate-on-429](https://github.com/minyang2020/dsh-migrate-on-429) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (dsh) plugin: automatic session handoff when a session keeps hitting 429 TPM rate limits — cancel old, summarize handover, continue in a fresh session. True handoff, never parallel. |
| 228 | [MisRightW/dsh-taskboard](https://github.com/MisRightW/dsh-taskboard) | 0 | 2026-08-20 | 2026-08-21 | dsh-taskboard |
| 229 | [MS666666/dsh-archive-manager](https://github.com/MS666666/dsh-archive-manager) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness归档管理器 |
| 230 | [Nay-1/dsh-skill-manage](https://github.com/Nay-1/dsh-skill-manage) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 技能管理设置页插件：图形化管理用户级/项目级技能的安装、卸载与调用启停 |
| 231 | [Nigel211/dsh-text2img-compress](https://github.com/Nigel211/dsh-text2img-compress) | 0 | 2026-08-22 | 2026-08-22 | 把长文本渲染成图片发送，利用每图 384 token 封顶压缩 LLM 输入 token，专为DeepSeek Harness设计的插件；Pack long text into images to cut LLM input tokens (384/image cap) — a DeepSeek Harness plugin. |
| 232 | [NiuZhuang/dsh-hooks-git-ai](https://github.com/NiuZhuang/dsh-hooks-git-ai) | 0 | 2026-08-22 | 2026-08-22 | A DeepSeek Harness plugin that records which files the agent edited, with which model, and in which session into git-ai |
| 233 | [nxz1026/dsh-tray](https://github.com/nxz1026/dsh-tray) | 0 | 2026-08-19 | 2026-08-22 | DeepSeek Harness — Custom Windows Tray Launcher |
| 234 | [nxz1026/SinglePlayer](https://github.com/nxz1026/SinglePlayer) | 0 | 2026-08-22 | 2026-08-22 | 单身汉播放器，适配DeepSeek harness web的播放器，支持多平台聚合。Bachelor Player is a media player designed to integrate with DeepSeek Harness Web, supporting multi-platform content aggregation. |
| 235 | [oneirictouch/dsh-explorer-editor](https://github.com/oneirictouch/dsh-explorer-editor) | 0 | 2026-08-22 | 2026-08-22 | 左侧边栏的“资料浏览器”和主工作区的“文本编辑器”，页签方式展示，适合讨厌工作区被过度分割的人。 |
| 236 | [OpenCnid/recursus](https://github.com/OpenCnid/recursus) | 0 | 2026-08-22 | 2026-08-22 | A durable, full-access runtime agent built on DeepSeek Harness |
| 237 | [Oscar-Williams/dsh-deepatlas](https://github.com/Oscar-Williams/dsh-deepatlas) | 0 | 2026-08-22 | 2026-08-22 | DeepAtlas (dsh-插件导航) — task-aware plugin navigator for DeepSeek Harness: scan the dsh-plugin ecosystem, recommend by task, audit before install, and install only with explicit user consent. |
| 238 | [oxlyn/dsh-model-health](https://github.com/oxlyn/dsh-model-health) | 0 | 2026-08-22 | 2026-08-22 | dsh model health status check |
| 239 | [oxlyn/dsh-plugin-mgr](https://github.com/oxlyn/dsh-plugin-mgr) | 0 | 2026-08-22 | 2026-08-22 | deepseek harness plugin manager |
| 240 | [ParticleLight/dsh-browser-plus](https://github.com/ParticleLight/dsh-browser-plus) | 0 | 2026-08-21 | 2026-08-22 | Enhanced shared browser for DeepSeek Harness: visible + AI-driven WebContentsView, ego-style page chrome, operation trail, JS dialog auto-accept, per-task windows & spaces, Electron 42.x pinned |
| 241 | [pax-beehive/dsh-plugin-hub](https://github.com/pax-beehive/dsh-plugin-hub) | 0 | 2026-08-18 | 2026-08-22 | DSH plugin registry, version-locked Profiles, CLI, and rollback tooling for DeepSeek Harness. |
| 242 | [peterwangze/dsh-novel-writing](https://github.com/peterwangze/dsh-novel-writing) | 0 | 2026-08-21 | 2026-08-22 | DSH (DeepSeek Harness) 自动化小说写作发布流水线插件：claude-writing-workflow 迁移版 agent 预设 + 小说工作台（可视化/实时渲染/章节编辑）+ 多平台发布配置与数据驱动优化闭环 |
| 243 | [philmingdao/anno](https://github.com/philmingdao/anno) | 0 | 2026-08-16 | 2026-08-22 | Local-first HTML review and annotation for AI coding agents |
| 244 | [piaohua/dsh-schedule-command](https://github.com/piaohua/dsh-schedule-command) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的 /schedule 定时任务命令 —— 一句话创建会话内单次/周期任务，⏰ 标识自动识别定时会话。/schedule command for DeepSeek Harness — create session-local one-shot/recurring tasks in plain language; ⏰ marks schedule sessions at a glance. |
| 245 | [qewregrfhnm/dsh-session-manager](https://github.com/qewregrfhnm/dsh-session-manager) | 0 | 2026-08-22 | 2026-08-22 | Full session management plugin for DeepSeek Harness (DSH) web UI: delete/trash/restore, workspace grouping, move sessions between workspaces, unread markers, context compaction threshold. Fully local, bilingual zh/en. |
| 246 | [qianxiao1213/zcode-usage-stats](https://github.com/qianxiao1213/zcode-usage-stats) | 0 | 2026-08-22 | 2026-08-22 | 仿zcode的使用统计 - DSH Token 用量统计插件(趋势图/仪表盘/活跃热力图) v0.1.0 |
| 247 | [raktim-mondol/dsh-tui-en](https://github.com/raktim-mondol/dsh-tui-en) | 0 | 2026-08-22 | 2026-08-22 | English-only fork of dsh-TUI — Claude Code-style terminal UI for DeepSeek Harness |
| 248 | [rand0wn/dsh-malware-audit](https://github.com/rand0wn/dsh-malware-audit) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) plugin: real AST-based scan of installed plugins for malicious-intent patterns, with an optional periodic schedule and auto-quarantine on critical findings. Advisory-by-default, not an antivirus signature database. |
| 249 | [raydez/dsh-pet-plugin](https://github.com/raydez/dsh-pet-plugin) | 0 | 2026-08-18 | 2026-08-22 | deepseek harness pet plugin（桌面宠物插件） |
| 250 | [re-ITRT/dsh-keyring](https://github.com/re-ITRT/dsh-keyring) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 密钥保险箱插件：自动捕获与脱敏密钥/凭据，settings 界面管理，支持会话级与全局级存储。 |
| 251 | [reatcat/l123-harness](https://github.com/reatcat/l123-harness) | 0 | 2026-08-22 | 2026-08-22 | L1-L2-L3 三级记忆 agent 底座：门禁、事件日志、周审提炼、TDD 执行流。Claude Code 插件。 |
| 252 | [robauto-ai/dsh-growth](https://github.com/robauto-ai/dsh-growth) | 0 | 2026-08-21 | 2026-08-22 | Robauto Digital Signal Hub growth plugin — thin MIT-licensed client for Robauto Signal Strength, llms.txt generation, AI search data and the AgentHub catalog. |
| 253 | [robbyisrobby/dsh-codex-pins](https://github.com/robbyisrobby/dsh-codex-pins) | 0 | 2026-08-22 | 2026-08-22 | Codex-style pinned sessions for DeepSeek Harness — always visible above the sidebar list |
| 254 | [rocklau/dsh-ui-tool-graph](https://github.com/rocklau/dsh-ui-tool-graph) | 0 | 2026-08-22 | 2026-08-22 | Tool-call value graph tab for the DeepSeek Harness (dsh) Web UI: cost/duration/error weights over conversation trajectories with one-click next-turn optimization prompts. |
| 255 | [sam-midlight/dsh-loop-rescue](https://github.com/sam-midlight/dsh-loop-rescue) | 0 | 2026-08-22 | 2026-08-22 | DRAFT — DeepSeek Harness guard that breaks an agent out of a tool-call loop and escalates to a stronger model for one concrete next action. Window-based detection with a progress epoch, so it catches cycles the stock single-slot repeat guard resets away. |
| 256 | [sazzadurrahmaan/dsh-telegram](https://github.com/sazzadurrahmaan/dsh-telegram) | 0 | 2026-08-22 | 2026-08-22 | Telegram channel for DeepSeek Harness — chat with your agent from Telegram, with a deny-by-default allowlist and in-chat approval for destructive tools. |
| 257 | [sd1g1/dsh-muse-total-tps](https://github.com/sd1g1/dsh-muse-total-tps) | 0 | 2026-08-21 | 2026-08-22 | DSH Web 插件：Muse Spark 使用包含 TTFT 的总生成时间计算 TPS |
| 258 | [Sddft97/dsh-client-ui-skin-verdandi](https://github.com/Sddft97/dsh-client-ui-skin-verdandi) | 0 | 2026-08-22 | 2026-08-22 | Aether Gazer Verdandi-inspired skin for the DeepSeek Harness Web UI |
| 259 | [SeireiA/dsh-plugin-rtk](https://github.com/SeireiA/dsh-plugin-rtk) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin for RTK-powered shell output compaction |
| 260 | [sg88/dsh-proxy-switch](https://github.com/sg88/dsh-proxy-switch) | 0 | 2026-08-22 | 2026-08-22 | DSH 网络代理开关：直连失败自动回退到 HTTP/SOCKS5 代理，设置面板可配置代理地址 |
| 261 | [shangjian2023/dsh-rss-daily](https://github.com/shangjian2023/dsh-rss-daily) | 0 | 2026-08-22 | 2026-08-22 | dsh plugin: 46-source daily RSS digest, LLM-edited, delivered via webhook (ServerChan/PushDeer/WxWork/TG/Bark/gotify) |
| 262 | [Sharl210/dsh-strip-sandbox-permissions](https://github.com/Sharl210/dsh-strip-sandbox-permissions) | 0 | 2026-08-21 | 2026-08-22 | Strip sandbox_permissions/justification from model tool-call arguments to avoid false sandbox escalation errors |
| 263 | [sidleo/dsh-desktop](https://github.com/sidleo/dsh-desktop) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 桌面壳：打开应用=启动 dsh web 服务并加载界面，关闭应用=自动停止服务。Electron desktop shell for DeepSeek Harness (DSH) |
| 264 | [siweimofang/dsh-plugin-zhishe-baojia-shenhe](https://github.com/siweimofang/dsh-plugin-zhishe-baojia-shenhe) | 0 | 2026-08-21 | 2026-08-22 | 知设装修报价审核DSH插件 - 支持视觉OCR截图输入 |
| 265 | [siweimofang/dsh-plugin-zhishe-bikeng-qa](https://github.com/siweimofang/dsh-plugin-zhishe-bikeng-qa) | 0 | 2026-08-21 | 2026-08-22 | 知设装修避坑问答DSH插件 |
| 266 | [siweimofang/dsh-plugin-zhishe-common](https://github.com/siweimofang/dsh-plugin-zhishe-common) | 0 | 2026-08-22 | 2026-08-22 | 知设 DSH 插件共享基础设施 - 知识库加载/检索/基准价格/风险评估 |
| 267 | [siweimofang/dsh-plugin-zhishe-zaojia-gusuan](https://github.com/siweimofang/dsh-plugin-zhishe-zaojia-gusuan) | 0 | 2026-08-22 | 2026-08-22 | 知设装修造价估算DSH插件 |
| 268 | [siweimofang/zhishe-a2a](https://github.com/siweimofang/zhishe-a2a) | 0 | 2026-08-22 | 2026-08-22 | 知设AI装修顾问 - 主仓库(知识库+DSH插件+GEO) |
| 269 | [snail-vs/dsh-llm-oauth](https://github.com/snail-vs/dsh-llm-oauth) | 0 | 2026-08-22 | 2026-08-22 | OAuth login plugin for DeepSeek Harness (DSH), enabling subscription LLM accounts such as ChatGPT Plus/Pro to work without API keys. |
| 270 | [sol5766/dshm](https://github.com/sol5766/dshm) | 0 | 2026-08-20 | 2026-08-22 | deepseek harnes HarmonyOS PC client |
| 271 | [songying2024/dsh-bookmarks-dock](https://github.com/songying2024/dsh-bookmarks-dock) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness (DSH) left-side bookmark dock plugin |
| 272 | [Sparrived/dsh-plugin-workspace-skill](https://github.com/Sparrived/dsh-plugin-workspace-skill) | 0 | 2026-08-22 | 2026-08-22 | DSH Cordis plugin: skill-create authoring guide + workspace-level skill isolation for .dsh/skills |
| 273 | [squirrelbullet/dsh-client-ui-vibecontroller](https://github.com/squirrelbullet/dsh-client-ui-vibecontroller) | 0 | 2026-08-21 | 2026-08-22 | Floating controller overlay for DeepSeek Harness with voice input and game-like button layout. |
| 274 | [Stellight/dsh-imggen](https://github.com/Stellight/dsh-imggen) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: text-to-image output with in-chat image cards, download button, history gallery, and provider selection tabs (Pollinations / OpenAI DALL-E 3). |
| 275 | [sujiu0616-art/DSH-CustomWallpapers-Glassmorphism-Theme](https://github.com/sujiu0616-art/DSH-CustomWallpapers-Glassmorphism-Theme) | 0 | 2026-08-21 | 2026-08-22 | dsh可自定义壁纸玻璃风主题 |
| 276 | [sumarilkkxx/dsh-atlas](https://github.com/sumarilkkxx/dsh-atlas) | 0 | 2026-08-21 | 2026-08-22 | Visual conversation canvas for DeepSeek Harness. |
| 277 | [sunnywangzi/dsh-server-admin](https://github.com/sunnywangzi/dsh-server-admin) | 0 | 2026-08-22 | 2026-08-22 | DSH 服务器管理面板：在线重启/停止、systemd 一键保活、在线安装插件、状态监控、活跃会话、命令终端 \| DSH Server Admin: online restart/stop, systemd keep-alive, plugin install, status monitor, active sessions, command terminal |
| 278 | [T-Markus-Liang/dsh-game-studio](https://github.com/T-Markus-Liang/dsh-game-studio) | 0 | 2026-08-21 | 2026-08-22 | DSH Game Studio: AI-native Game Development Runtime for DeepSeek Harness — 可安装/卸载/升级的游戏开发插件（/game 子命令、动态 Agent Pool、引擎适配器、Verifier + Quality Gate） |
| 279 | [tang-zhilei/dsh-group-chat-view](https://github.com/tang-zhilei/dsh-group-chat-view) | 0 | 2026-08-21 | 2026-08-22 | DSH group chat style conversation view plugin |
| 280 | [taskschd1145/deepseek-harness-clean](https://github.com/taskschd1145/deepseek-harness-clean) | 0 | 2026-08-22 | 2026-08-22 | 一个"三无"DSH桌面子端：打开它，就等于在浏览器里打DSH， 只不过它是一个带托盘图标、全原生的 Windows 窗口。 |
| 281 | [taxueseek/dsh-healthcheck](https://github.com/taxueseek/dsh-healthcheck) | 0 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 环境体检插件：磁盘/内存/延迟/~/.dsh 膨胀/插件版本落后检测，历史基线趋势，只读不删。 |
| 282 | [taxueseek/dsh-snippets](https://github.com/taxueseek/dsh-snippets) | 0 | 2026-08-15 | 2026-08-22 | DeepSeek Harness 极简常用片段/命令工具箱：JSONL 存储，5 个工具，零依赖。AI 的收藏夹。 |
| 283 | [taxueseek/taxue-dsh-artisan](https://github.com/taxueseek/taxue-dsh-artisan) | 0 | 2026-08-19 | 2026-08-22 | taxue 画师：DeepSeek Harness 一体化视觉创作工具链（提示词反推/优化 + 多供应商生图，支持异步后台出图） |
| 284 | [thedeveloper256/dsh-model-router](https://github.com/thedeveloper256/dsh-model-router) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: role-based model routing — planner (root agent) on deepseek-v4-pro, delegated executor subagents on deepseek-v4-flash; ships a prompt section and a pro-flash-routing skill. |
| 285 | [TheHeartFickle/dsh-conversation-folding](https://github.com/TheHeartFickle/dsh-conversation-folding) | 0 | 2026-08-21 | 2026-08-22 | DSH 对话流渲染增强插件 —— 折叠过程，保留正文，长对话更清爽。 |
| 286 | [TheHeartFickle/dsh-session-manager](https://github.com/TheHeartFickle/dsh-session-manager) | 0 | 2026-08-21 | 2026-08-22 | DSH 会话管理插件 —— 对话回退 + 归档会话，长会话可回滚、可整理。 |
| 287 | [TheHeartFickle/dsh-solo-agent](https://github.com/TheHeartFickle/dsh-solo-agent) | 0 | 2026-08-21 | 2026-08-22 | DSH 插件：向用户 agent-presets 注入 `solo` preset,优化上下文占用和模型调度。 |
| 288 | [thinkingpeach-sketch/wan3-agent-skills](https://github.com/thinkingpeach-sketch/wan3-agent-skills) | 0 | 2026-08-19 | 2026-08-22 | Portable WAN3 image and video generation skills for AI coding agents |
| 289 | [tinchak0207/dsh-emu-workbench](https://github.com/tinchak0207/dsh-emu-workbench) | 0 | 2026-08-22 | 2026-08-22 | Emu 影像工作台 for DeepSeek Harness — 多供应商生图/改图/模型可用性探测 + Emu 独家 opencode 许愿 Agent |
| 290 | [tkwkeven/dsh-lark](https://github.com/tkwkeven/dsh-lark) | 0 | 2026-08-20 | 2026-08-22 | Feishu/Lark channel for DeepSeek Harness: prefix-created task sessions, thread routing, streaming thinking cards, interactive questions, media delivery, lifecycle notices, runtime policies, web mirror |
| 291 | [tkwkeven/dsh-sim-restart](https://github.com/tkwkeven/dsh-sim-restart) | 0 | 2026-08-20 | 2026-08-22 | Simulated-restart testing for DeepSeek Harness plugins: verifies plugins survive restart (module eval → apply → smoke → dispose) in isolated subprocesses, with a resident auto-watcher and agent feedback loop |
| 292 | [tkwkeven/dsh-tool-github](https://github.com/tkwkeven/dsh-tool-github) | 0 | 2026-08-20 | 2026-08-22 | GitHub REST API tools and web GUI panel for DeepSeek Harness: bind account, search code/issues, manage PRs, clone workspaces |
| 293 | [tkwkeven/dsh-ytdlp](https://github.com/tkwkeven/dsh-ytdlp) | 0 | 2026-08-20 | 2026-08-22 | Video/audio download tools for DeepSeek Harness, powered by yt-dlp (video_info / video_download) |
| 294 | [tobysunsun/dsh-code-reading-coach](https://github.com/tobysunsun/dsh-code-reading-coach) | 0 | 2026-08-22 | 2026-08-22 | 代码研读教练：交互式引导研读论文对应的开源代码，五段研读法 |
| 295 | [tristan-mcinnis/dsh-browser-vision](https://github.com/tristan-mcinnis/dsh-browser-vision) | 0 | 2026-08-22 | 2026-08-22 | Browser tool for DeepSeek Harness that can SEE the page: browser-use over CDP driven by deepseek-v4-flash-vision-exp. Reads canvas text, text inside images and rendered charts, returns schema-validated JSON, and reports per-run cost. |
| 296 | [TTsdzb/dsh-global-proxy](https://github.com/TTsdzb/dsh-global-proxy) | 0 | 2026-08-21 | 2026-08-22 | 更好的代理支持。 |
| 297 | [tuojc/dsh-browser-firefox](https://github.com/tuojc/dsh-browser-firefox) | 0 | 2026-08-22 | 2026-08-22 | Firefox browser-control plugin for DeepSeek Harness: one DSH plugin + one Firefox extension, driving your own Firefox over a token-authenticated WebSocket. Text-first toolset (snapshot/click/type/navigate/tab-stack) with screenshot as visual fallback. Firefox add-on available on AMO. Ported from Lum1104/dsh-browser (MIT). |
| 298 | [ubggyhjb/mathmodel-agent](https://github.com/ubggyhjb/mathmodel-agent) | 0 | 2026-08-21 | 2026-08-22 | 数学建模竞赛 Agent（DeepSeek Harness preset）：头脑风暴→分析→建模→代码图表→论文→六门验收，含 17 套中英文 Typst/LaTeX 模板 |
| 299 | [uckkk/dsh-fat-loss-cal](https://github.com/uckkk/dsh-fat-loss-cal) | 0 | 2026-08-20 | 2026-08-21 | 减脂热量计算 |
| 300 | [uckkk/dsh-future-cbdc](https://github.com/uckkk/dsh-future-cbdc) | 0 | 2026-08-21 | 2026-08-21 | 央行数字货币 |
| 301 | [uckkk/dsh-future-fusion](https://github.com/uckkk/dsh-future-fusion) | 0 | 2026-08-21 | 2026-08-21 | 核聚变能源 |
| 302 | [uckkk/dsh-future-longevity](https://github.com/uckkk/dsh-future-longevity) | 0 | 2026-08-21 | 2026-08-21 | 长寿医学 |
| 303 | [uckkk/dsh-gift-etiquette](https://github.com/uckkk/dsh-gift-etiquette) | 0 | 2026-08-21 | 2026-08-21 | 送礼避讳 |
| 304 | [uckkk/dsh-k2c](https://github.com/uckkk/dsh-k2c) | 0 | 2026-08-21 | 2026-08-21 | 开尔文转摄氏 |
| 305 | [uckkk/dsh-kenya](https://github.com/uckkk/dsh-kenya) | 0 | 2026-08-21 | 2026-08-21 | 肯尼亚国家 |
| 306 | [uckkk/dsh-palau](https://github.com/uckkk/dsh-palau) | 0 | 2026-08-21 | 2026-08-21 | 帕劳国 |
| 307 | [uckkk/dsh-valley-meter](https://github.com/uckkk/dsh-valley-meter) | 0 | 2026-08-22 | 2026-08-22 | Minimal peak/valley electricity-price countdown widget for DeepSeek Harness: live off-peak countdown & period, official account balance, today's spend, configurable colors, minimal/detailed styles. |
| 308 | [unStone/dsh-plugin-web-ppt](https://github.com/unStone/dsh-plugin-web-ppt) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin: let your agent read and export .pptx / .ppt — pure JS, no PowerPoint, no conversion, no network. |
| 309 | [vimalinx/Dsh-dev](https://github.com/vimalinx/Dsh-dev) | 0 | 2026-08-22 | 2026-08-22 | Version-aware workspace core for building DeepSeek Harness plugins |
| 310 | [wangzhanchao883/dsh-plugin](https://github.com/wangzhanchao883/dsh-plugin) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness plugin collection: self-developed DSH plugins (screenshot capture, OCR, Obsidian). ?? DSH ?????? |
| 311 | [whisperflo/dsh-deepseek-console](https://github.com/whisperflo/dsh-deepseek-console) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek 账户控制台：实时余额监控 / 用量统计 / 全局悬浮 HUD（官方 API 直连，Key 仅存本机） |
| 312 | [whoisjiahao/dsh-feishu-channel](https://github.com/whoisjiahao/dsh-feishu-channel) | 0 | 2026-08-16 | 2026-08-22 | 飞书 × DeepSeek Harness 遥控器：在飞书聊天里驱动 DSH agent——流式富卡片、一键审批、按模型能力传图、费用与峰谷计量 |
| 313 | [Wodexinhaoleng-Kasssa/dsh-reader](https://github.com/Wodexinhaoleng-Kasssa/dsh-reader) | 0 | 2026-08-22 | 2026-08-22 | In-browser novel reader for the dsh web GUI: online book-source search, chapter-by-chapter reading in a chat-style view, and whole-book TXT download. |
| 314 | [woosh2010/dsh-usage-dashboard](https://github.com/woosh2010/dsh-usage-dashboard) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness (dsh) usage analytics plugin: peak/valley billing dock, token/cost/model dashboard, cross-session history, global filters \| 用量分析插件：峰谷计费坞 + 用量仪表盘 |
| 315 | [WSYXIUBA/dsh-plugin-starmap](https://github.com/WSYXIUBA/dsh-plugin-starmap) | 0 | 2026-08-21 | 2026-08-22 | 🪐 DSH 插件星座图 — DeepSeek Harness 插件依赖关系可视化（自动扫描/分类/依赖图） |
| 316 | [xhqm-xyz/PluginDSH](https://github.com/xhqm-xyz/PluginDSH) | 0 | 2026-08-16 | 2026-08-22 | DSH client plugins: mira-live2d mascot plugin (model data excluded, private asset) |
| 317 | [xiangrui979/foresight](https://github.com/xiangrui979/foresight) | 0 | 2026-08-22 | 2026-08-22 | ForeSight: a temporal-aspect long-term memory plugin for DeepSeek Harness (dsh) |
| 318 | [XiaoWind/dsh-cron](https://github.com/XiaoWind/dsh-cron) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: a /cron slash command for cron-scheduled recurring agent loops |
| 319 | [XiaoWind/dsh-weneedfirst](https://github.com/XiaoWind/dsh-weneedfirst) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness plugin: make the chain of thought open with We need instead of Let me |
| 320 | [xiaozhiaixue/dsh-model-toggle](https://github.com/xiaozhiaixue/dsh-model-toggle) | 0 | 2026-08-15 | 2026-08-22 | 在DSH中一键切换Flash/Pro，都是MAX |
| 321 | [xiaozhiaixue/dsh-session-id](https://github.com/xiaozhiaixue/dsh-session-id) | 0 | 2026-08-17 | 2026-08-22 | 在DSH会话区底部显示会话ID，点击一下就能复制 |
| 322 | [xiaxi626/dsh-skills-nexus](https://github.com/xiaxi626/dsh-skills-nexus) | 0 | 2026-08-22 | 2026-08-22 | 通用 DSH skill 枢纽。安装一次，即可把任意含 SKILL.md 的 GitHub 仓库注册为 DSH skill——一条命令添加一个。skill 仓库无需 Cordis 插件代码或 package.json。Universal DSH skill adapter. Install once, then register any GitHub repo containing a SKILL.md as a DSH skill — one command per repo. No Cordis plugin code or package.json needed in the skill repo. |
| 323 | [Xingkong42/dsh-zh-labels](https://github.com/Xingkong42/dsh-zh-labels) | 0 | 2026-08-21 | 2026-08-22 | DSH 界面中文标签持久化插件 - Persistent Chinese UI labels for DeepSeek Harness |
| 324 | [xuanyuanluoxue/computer-use-vision](https://github.com/xuanyuanluoxue/computer-use-vision) | 0 | 2026-08-22 | 2026-08-22 | Windows computer-use capability for DSH: screenshot, vision, simulated input, self-evolving knowledge base. Plugin + skill dual-mode. |
| 325 | [xuqingsakura/dsh-subagent-team](https://github.com/xuqingsakura/dsh-subagent-team) | 0 | 2026-08-22 | 2026-08-22 | 一个官方 bundle 形态的独立插件，可经 GitHub / npm 安装到 DSH（桌面端与 web 端皆可）。 提供模型可见的角色工具（team_read / team_write / team_code_write / team_code_review …）， 以及一套真正的事件驱动团队运行时（建队 / 成员 / 任务依赖 / 邮箱 / 自动调度 / 右下角活动浮层）。 |
| 326 | [yangkunlun/dsh-fairy](https://github.com/yangkunlun/dsh-fairy) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 的多窗插件 |
| 327 | [yanglingrise/dsh-erii-boot-splash](https://github.com/yanglingrise/dsh-erii-boot-splash) | 0 | 2026-08-22 | 2026-08-22 | Erii (Sakura) themed boot splash animation for the DeepSeek Harness Web UI: falling sakura petals, a mint monster mascot, and the line "Sakura, walk slower." Auto fades out; pure client-side. |
| 328 | [yaways/dsh-subagent-claude-code-wrapper](https://github.com/yaways/dsh-subagent-claude-code-wrapper) | 0 | 2026-08-22 | 2026-08-22 | Let DSH subagents call any Claude-compatible CLI, not just the SDK-bundled one. Fork of @deepseek-ai/dsh-subagent-claude-code. |
| 329 | [YiyuZh/dsh-skillflux](https://github.com/YiyuZh/dsh-skillflux) | 0 | 2026-08-21 | 2026-08-22 | DeepSeek Harness 动态 Skill 运行时管理器，自动发现、路由、挂载和卸载 Agent Skills |
| 330 | [ylxmf2005/dsh-openai-server-compaction](https://github.com/ylxmf2005/dsh-openai-server-compaction) | 0 | 2026-08-21 | 2026-08-22 | OpenAI Responses adapter with durable server-side compaction for DeepSeek Harness. |
| 331 | [YuemingHub/Ming-Capability-Pack](https://github.com/YuemingHub/Ming-Capability-Pack) | 0 | 2026-08-21 | 2026-08-22 | 依托于deepseek harness  做真有用的插件 |
| 332 | [yummy4727/dsh-context-branch](https://github.com/yummy4727/dsh-context-branch) | 0 | 2026-08-21 | 2026-08-22 | Context-branching conversation tree plugin for DeepSeek Harness. Avoid cold-start waste and show full tool/reasoning steps. |
| 333 | [YunlongL-byte/dsh-launcher](https://github.com/YunlongL-byte/dsh-launcher) | 0 | 2026-08-22 | 2026-08-22 | macOS 程序坞一键启动 DeepSeek Harness (DSH) 的快捷启动器 / One-click DSH launcher for macOS Dock |
| 334 | [yushuosun/dsh-cost-governor](https://github.com/yushuosun/dsh-cost-governor) | 0 | 2026-08-22 | 2026-08-22 | Cost governance & budget enforcement for DeepSeek Harness: per-model token-cost accounting, multi-provider pricing, budget warn thresholds, and a usage dashboard. |
| 335 | [zengfr/AutoCoding](https://github.com/zengfr/AutoCoding) | 0 | 2026-08-21 | 2026-08-22 | AutoCoding UltraVibe — 无人值守自动化编程工程化 |
| 336 | [zhubaodian1027/dsh-token-panel](https://github.com/zhubaodian1027/dsh-token-panel) | 0 | 2026-08-22 | 2026-08-22 | DSH Web GUI panel: AI quota (Kimi Coding, Codex Plus, DeepSeek…) + merged local token usage (DSH, Codex, Claude Code, Kimi Code, Hermes, Pi…). DSH 插件：额度 + 本地 Token 用量统计。 |
| 337 | [ZhuoSir/dsh-cron](https://github.com/ZhuoSir/dsh-cron) | 0 | 2026-08-22 | 2026-08-22 | DeepSeek Harness 定时任务插件：对话中自然语言创建，到点自动执行并在会话中回复，支持 cron 表达式与 Web 管理面板 |
| 338 | [Zn-Dk/dsh-session-repair](https://github.com/Zn-Dk/dsh-session-repair) | 0 | 2026-08-22 | 2026-08-22 | DSH Web 会话诊断、可信备份与一键安全修复插件。 |
| 339 | [zootguru/dsh-vpn-ops](https://github.com/zootguru/dsh-vpn-ops) | 0 | 2026-08-22 | 2026-08-22 | Safety-gated WireGuard and VLESS Reality operations for DeepSeek Harness |
| 340 | [zoumutou/dsh-attachment-downscale](https://github.com/zoumutou/dsh-attachment-downscale) | 0 | 2026-08-22 | 2026-08-22 | DSH 插件：图片附件超限自动降级（2000px / 3.5MB / 4000万像素） |
| 341 | [ZutoMayoo/totoTheCat](https://github.com/ZutoMayoo/totoTheCat) | 0 | 2026-08-20 | 2026-08-22 | 在你的DeepSeek Harness中加入桌宠小猫托托的插件 |
| 342 | [Zzc269/dsh-soft-glass-ui](https://github.com/Zzc269/dsh-soft-glass-ui) | 0 | 2026-08-16 | 2026-08-22 | Unofficial soft-glass visual theme plugin for DeepSeek Harness. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Badegg404/dsh-code-review
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
- Howe829/dsh-runtime
- JxaMe/dsh-condense
- kedoupi/dsh-plugins
- KitDoesIt/dsh-compaction-instant
- LBurny/deepseek-harness-desktop
- LVSUGARS/dsh-web-manager
- lvyunqi/dsh-memory-enhanced
- Mrzhailiming/deepseek-pet
- muvuula/DeepSeek-Harness-Core
- nexsjournal/dsh-desktop-app
- nexsjournal/dsh-imagegen-plugin
- omdsh-dev/fabric
- omdsh-dev/Qwen-MM-Plugins
- Physicolor/harness-ui-enhancer
- Physicolor/harness-widgets
- pppolf/dsh-webgate
- raydez/deepseek-harness-pet-plugin
- TiantianFlow/dsh-tailscale-gateway
- TimeCraker/dsh-claude-import
- wings1848/dsh-economizer
- WSL043/dsh-native-session-delete
- WSYXIUBA/dsh-plugin-constellation
- yhyfhgs/dsh-providers-extension
