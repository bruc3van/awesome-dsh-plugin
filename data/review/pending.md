# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-23**
- 快照日期 / Snapshot date: **2026-09-23 (UTC)**
- 待审核 / Pending: **135**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **14**
- Star 异常增长 / Star-growth alerts: **3** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-22** / vs previous snapshot **2026-09-22**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **3**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [slow-stack/mneme](https://github.com/slow-stack/mneme) | 待审 / pending | 119 | +1 | 16 | 40d | 待审高星 | 核准即榜 #98 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 6883 | +313 | 498 | 92d | 日增百星 | 日增 +313★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 8708 | +254 | 358 | 40d | 日增百星 | 日增 +254★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [slow-stack/mneme](https://github.com/slow-stack/mneme) ⚠️ | 119 | 2026-08-13 | 2026-09-23 | 🧠 The memory that dreams — cross-session memory for DeepSeek Harness. Offline & private, auto-consolidates in its sleep (autoDream), visualized in a memory panel. |
| 2 | [KongFangXun/sofagent](https://github.com/KongFangXun/sofagent) | 48 | 2026-06-18 | 2026-09-23 | sofagent is an open-source FDE Harness — on entry, write your business judgment into files (workflows, ontology, AI nodes); after departure, audit every change against them. 24 git-diff rules, tamper-evident chain, snapshots (107 tools, 11 plugins). Everything can be FDEing — turning FDE labor into FDEing capability. |
| 3 | [MnemosyneOS/mnemosyne](https://github.com/MnemosyneOS/mnemosyne) | 37 | 2026-08-10 | 2026-09-23 | Mnemosyne OS 8.0.0 — zero-dependency, local-first AI memory system (MCP / API / CLI / Python). MIT. https://ai-memory.net |
| 4 | [klarkxy/dsh-editor](https://github.com/klarkxy/dsh-editor) | 11 | 2026-09-04 | 2026-09-23 | 基于 DeepSeek Harness 的桌面写作应用，提供稿纸编辑、AI 写作辅助与可选插件。 |
| 5 | [1225Sakura/oh-my-deepseekharness](https://github.com/1225Sakura/oh-my-deepseekharness) | 7 | 2026-09-21 | 2026-09-23 | Multi-agent orchestration layer for DeepSeek Harness (omd) — autopilot/ralph/team modes, 19 role cards, 40 bilingual skills, bundled MCP state server. OMC/OMX adaptation. |
| 6 | [jackie-cqz/dsh-jev-plugin](https://github.com/jackie-cqz/dsh-jev-plugin) | 6 | 2026-09-22 | 2026-09-23 | DeepSeek Harness plugin for TypeSafe Jev: typed decisions, configurable guardrails, and Web UI result cards. |
| 7 | [ai-tools-mtl/Aurify](https://github.com/ai-tools-mtl/Aurify) | 5 | 2026-09-18 | 2026-09-23 | dsh（DeepSeek Harness）专利撰写把关人：先检索中国专利判断点子值不值得写（可反驳可批评），再走五方对齐访谈与八章交底书全流程：附图、仿真实验、七维审查、docx/PDF 导出。 |
| 8 | [LeoEthanZ/dsh-beyond-glass](https://github.com/LeoEthanZ/dsh-beyond-glass) | 4 | 2026-09-22 | 2026-09-23 | A three-column glass UI for deepseek-harness, delivered as installable packages instead of a fork. |
| 9 | [Kr-ATG/dsh-chat-plus](https://github.com/Kr-ATG/dsh-chat-plus) | 3 | 2026-08-31 | 2026-09-23 | DSH 对话体验增强套件（零 DSH 源码改动，纯插件注入）。回合呈现：思考/工具调用聚合 chip · 步骤卡/总结卡 · 共享活动抽屉。正文增强：proto-tabs 卡片 · diagram 流程图 · 生图画廊。界面与工具：会话头部标签上移 · 桌面壳窗口控制留位与主题同步 · 对话截图（无头浏览器渲染 markdown/shiki/mermaid）· download 下载工具（实时进度/速度/ETA）。另有可选的 KR 对话双栏执行大盘。 |
| 10 | [1475505/miliastra-beyond-simulator](https://github.com/1475505/miliastra-beyond-simulator) | 2 | 2026-09-23 | 2026-09-23 | 千星沙箱模拟器：Lua 驱动的 2D 奇域外置沙箱 ，支持 DeepSeek Harness、Web 和 MCP |
| 11 | [alaliqing/dsh-annotate](https://github.com/alaliqing/dsh-annotate) | 2 | 2026-09-20 | 2026-09-23 | Visual annotation plugin for DeepSeek Harness: select elements in local app previews and send structured UI feedback to your agent. |
| 12 | [fastcrw/dsh-crw](https://github.com/fastcrw/dsh-crw) | 2 | 2026-08-14 | 2026-09-23 | fastCRW-backed web_search and web_fetch providers for DeepSeek Harness (ctx.web) |
| 13 | [hongxin/dsh-tvision](https://github.com/hongxin/dsh-tvision) | 2 | 2026-09-22 | 2026-09-23 | Turbo Vision-style character-cell window manager for DeepSeek Harness agents |
| 14 | [lovedheart/dsh-plugin-telegram](https://github.com/lovedheart/dsh-plugin-telegram) | 2 | 2026-08-14 | 2026-09-23 | DSH plugin for Telegram bot integration |
| 15 | [yu381792/dsh-superlcm](https://github.com/yu381792/dsh-superlcm) | 2 | 2026-08-31 | 2026-09-23 | SuperLcm — Lossless Context for DeepSeek Harness: fully asynchronous, cache-friendly compaction with exact recall. |
| 16 | [AIcivilization/deepseek-harness-vps](https://github.com/AIcivilization/deepseek-harness-vps) | 1 | 2026-09-19 | 2026-09-23 | One-command DeepSeek Harness on your VPS: a zero-dependency login gateway puts the stock DSH web UI - settings, API keys, plugin market - behind HTTPS and a password, reachable from anywhere. · 一条命令把 DeepSeek Harness 装进 VPS：零依赖登录网关 + 自动 HTTPS，公网可达，设置、API Key、插件市场全都能用。 |
| 17 | [AIcivilization/dsh-vps-manager](https://github.com/AIcivilization/dsh-vps-manager) | 1 | 2026-09-16 | 2026-09-23 | VPS & SSH manager plugin for DeepSeek Harness (DSH): zero-token /vps- commands, an in-conversation web terminal, and AI server ops with risk-tiered confirmation. 在 DSH 里像 SSH 一样无感地用 VPS：零 token 命令、对话内终端、AI 分级确认运维。 |
| 18 | [alllllinnrann/dsh-inapp-browser](https://github.com/alllllinnrann/dsh-inapp-browser) | 1 | 2026-09-21 | 2026-09-23 | DeepSeek Harness 内置浏览器：人机共享网页、鼠标键盘操作与高清截图 |
| 19 | [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) | 1 | 2026-09-22 | 2026-09-23 | ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification & evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件 |
| 20 | [banana770/dsh-model-select-collapse](https://github.com/banana770/dsh-model-select-collapse) | 1 | 2026-09-23 | 2026-09-23 | DSH (DeepSeek Harness) web UI plugin: collapsible per-provider groups in the model selector. English + Chinese docs. |
| 21 | [banana770/dsh-work-badge](https://github.com/banana770/dsh-work-badge) | 1 | 2026-09-23 | 2026-09-23 | Tiny click-through badge for DeepSeek Harness (DSH): shows at a glance whether Beijing time (UTC+8) is inside the peak window - Mon-Fri 09:00-12:00 / 14:00-18:00 - or off-peak. Bilingual: Chinese and English UI text. |
| 22 | [bbaz123/novel-writing-plugin](https://github.com/bbaz123/novel-writing-plugin) | 1 | 2026-09-02 | 2026-09-23 | DeepSeek Harness plugin for long-form Chinese AI novel writing: layered context, foreshadowing ledger, anti-AI-cliché redlines. 13 个 novel_* 工具，零依赖 JavaScript。 |
| 23 | [chinazkk/dsh-console](https://github.com/chinazkk/dsh-console) | 1 | 2026-09-23 | 2026-09-23 | DSH 控制台插件：主视图「控制台」标签页，真 PTY 交互终端（iTerm 风格多标签），vim/top/ctrl+c 全支持。 |
| 24 | [ComeCaramelos/dsh-hOver-information](https://github.com/ComeCaramelos/dsh-hOver-information) | 1 | 2026-09-20 | 2026-09-23 | DSH plugin that makes the session hover card genuinely useful |
| 25 | [davidtan2008/deepseek-harness-desktop](https://github.com/davidtan2008/deepseek-harness-desktop) | 1 | 2026-09-23 | 2026-09-23 | deepseek-harness-desktop |
| 26 | [DDDMUC/dsh-provider-hub](https://github.com/DDDMUC/dsh-provider-hub) | 1 | 2026-09-22 | 2026-09-23 | DSH plugin: paste an API key to add a provider. 21 curated presets (OpenAI-compatible + Anthropic Messages) with per-app de-duplication and a custom endpoint form. |
| 27 | [dpwgc/dsh-coding-workflow](https://github.com/dpwgc/dsh-coding-workflow) | 1 | 2026-09-23 | 2026-09-23 | 一个 DeepSeek Harness 编程工作流模式预设(Preset)，用于更好地约束LLM进行编程工作。 |
| 28 | [ffyfox/dsh-linux-desktop](https://github.com/ffyfox/dsh-linux-desktop) | 1 | 2026-09-20 | 2026-09-23 | DeepSeek Harness 的 Linux 原生桌面集成：XDG 桌面入口、无边框独立窗口、关窗自动停服务。 |
| 29 | [flandre2233/dsh-recovery-resume](https://github.com/flandre2233/dsh-recovery-resume) | 1 | 2026-09-22 | 2026-09-23 | Resumes DSH turns interrupted by a DeepSeek Harness restart |
| 30 | [FNOSP/fnos-dsh](https://github.com/FNOSP/fnos-dsh) | 1 | 2026-09-17 | 2026-09-23 | DeepSeek Harness应用与harness插件 monorepo |
| 31 | [jackovibe/dsh-codex-pin](https://github.com/jackovibe/dsh-codex-pin) | 1 | 2026-09-23 | 2026-09-23 | Codex 式会话置顶与归档风格的 DSH Web 插件（置顶=标记不是排序，宿主持久，零顺序改动） |
| 32 | [jackovibe/dsh-settings-order](https://github.com/jackovibe/dsh-settings-order) | 1 | 2026-09-23 | 2026-09-23 | DSH Web 设置左列自由排序插件：拖动 / Alt+↑↓ / ↑↓ 按钮，宿主持久，跨浏览器生效（Free ordering for the DeepSeek Harness Web Settings navigation） |
| 33 | [janpauldahlke/dsh-gpu-monitor-nvml](https://github.com/janpauldahlke/dsh-gpu-monitor-nvml) | 1 | 2026-09-23 | 2026-09-23 | DeepSeek Harness (dsh) plugin: live NVIDIA GPU monitor in the web rightbar. NVML-first on Linux (nvidia-smi fallback). NVIDIA only! Not AMD/Intel/macOS. Multi-GPU util/VRAM/power/temp, processes, sparklines. Installable dsh.bundle. |
| 34 | [Juntiantan/dsh-permission-gate](https://github.com/Juntiantan/dsh-permission-gate) | 1 | 2026-09-23 | 2026-09-23 | UI-level access gate + process-wide agent tool brake for DeepSeek Harness (dsh). Shared 60-min idle lock. NOT authentication — pair it with a real boundary. |
| 35 | [LovelyDazai/dsh-model-menu-search](https://github.com/LovelyDazai/dsh-model-menu-search) | 1 | 2026-09-22 | 2026-09-23 | Allow user search model in the deepseekharness model list. |
| 36 | [luxus0946/dsh-uuyc](https://github.com/luxus0946/dsh-uuyc) | 1 | 2026-09-22 | 2026-09-23 | UU Remote (uuyc-cli) Windows remote-control plugin for DeepSeek Harness - device management & remote terminal execution. Everything is a Plugin. |
| 37 | [lycheelink/dsh-workbench](https://github.com/lycheelink/dsh-workbench) | 1 | 2026-09-22 | 2026-09-23 | Enterprise Agent Workbench for DeepSeek Harness (DSH)  |
| 38 | [MaybeMeibeMaybi/dsh-harmonyos-hiboard](https://github.com/MaybeMeibeMaybi/dsh-harmonyos-hiboard) | 1 | 2026-09-23 | 2026-09-23 | Push DeepSeek Harness (dsh) task results to Huawei HarmonyOS assistant-today service cards. Compatible with dsh 0.1.5 / cordis 4. |
| 39 | [njjpro/dsh-remote-workspace](https://github.com/njjpro/dsh-remote-workspace) | 1 | 2026-09-22 | 2026-09-23 | Device-workspace federation plugin for the dsh web GUI: pair into another DSH instance and browse its projects and sessions from the local sidebar, with each peer session opening in the local center column through a loopback embed proxy. |
| 40 | [owen-si-zhou/dsh-plugin-minimax-usage](https://github.com/owen-si-zhou/dsh-plugin-minimax-usage) | 1 | 2026-08-15 | 2026-09-23 | DeepSeek Harness plugin: MiniMax Coding Plan quota monitor with progress bars in sidebar |
| 41 | [Suguyun/dsh-insight](https://github.com/Suguyun/dsh-insight) | 1 | 2026-09-23 | 2026-09-23 | dsh（DeepSeek Harness）浏览器伴侣：网页划词即解读、侧栏多轮追问，并让 dsh 智能体读取页面、抓取流量、驱动浏览器。Chrome/Edge MV3 扩展 + 配套 dsh host 插件。 |
| 42 | [vikasranax/dsh-plugin-cats](https://github.com/vikasranax/dsh-plugin-cats) | 1 | 2026-08-23 | 2026-09-23 | A DeepSeek Harness plugin that fetches random cat facts from a public API. |
| 43 | [w2310670047-code/ai-eight-honors-eight-shames](https://github.com/w2310670047-code/ai-eight-honors-eight-shames) | 1 | 2026-09-20 | 2026-09-23 | 面向 AI 编码代理的八荣八耻工作准则 — DSH 原生 Skill，含安装与配置指南 |
| 44 | [Yijian-quiet/dsh-mol](https://github.com/Yijian-quiet/dsh-mol) | 1 | 2026-09-23 | 2026-09-23 | 本地优先的化学工作台：给 DeepSeek Harness（及任意 MCP 客户端）的化学基础工具 —— SMILES 校验(人话诊断/三级结果)、画分子、性质计算、格式互转、标准化、批量清洗。纯 RDKit，零网络。\| Local-first chemistry workbench for AI agents over MCP. |
| 45 | [YIRC99/dsh-jev-context](https://github.com/YIRC99/dsh-jev-context) | 1 | 2026-09-23 | 2026-09-23 | 面向 DeepSeek Harness 的 JEV 上下文管理插件：按相关度裁剪与召回历史片段，可视化追踪每轮决策和 token 变化。 |
| 46 | [zdz6215591/dsh-theme-doubao](https://github.com/zdz6215591/dsh-theme-doubao) | 1 | 2026-09-22 | 2026-09-23 | 豆包主题 — DeepSeek Harness Web 客户端主题插件。 |
| 47 | [1317209322/calorie-deficit-tracker](https://github.com/1317209322/calorie-deficit-tracker) | 0 | 2026-09-23 | 2026-09-23 | 豆包任务模式技能：本地食物库 + 脚本计算，固化热量与缺口计算流程 |
| 48 | [1317209322/qwen-image-skill](https://github.com/1317209322/qwen-image-skill) | 0 | 2026-09-22 | 2026-09-23 | Agent skill for generating and editing images with Alibaba Bailian Qwen-Image-3.0 |
| 49 | [1959377950-dotcom/dsh-workspace-archive-all](https://github.com/1959377950-dotcom/dsh-workspace-archive-all) | 0 | 2026-09-23 | 2026-09-23 | DSH Web plugin: Archive-All action on every workspace folder menu in the sidebar (Ungrouped included). Running / open / blank / subagent sessions are skipped. |
| 50 | [2huy4n/roleplaytimer](https://github.com/2huy4n/roleplaytimer) | 0 | 2026-09-23 | 2026-09-23 | 每隔一段时间主动唤醒会话中的AI，以此达到更沉浸式的角色扮演体验。 |
| 51 | [adamkhalile/luau-docs-oracle](https://github.com/adamkhalile/luau-docs-oracle) | 0 | 2026-09-22 | 2026-09-23 | Best Roblox Luau Bug Checker and API Verifier 2026 DevForum MCP Tool |
| 52 | [AFAP/dsh-desktop-notify](https://github.com/AFAP/dsh-desktop-notify) | 0 | 2026-09-23 | 2026-09-23 | Desktop notifications for the DeepSeek Harness web GUI: a system toast when a tool needs authorization, a question or plan review is waiting, or a turn finishes. |
| 53 | [azazo1/dsh-approve-prefix](https://github.com/azazo1/dsh-approve-prefix) | 0 | 2026-09-23 | 2026-09-23 | 按单命令前缀自动放行 DSH 沙箱提权请求, 含管道与链式的命令一律转人工审批. |
| 54 | [AzcHui/dsh-buddy-spike](https://github.com/AzcHui/dsh-buddy-spike) | 0 | 2026-09-23 | 2026-09-23 | dsh的换心手术 |
| 55 | [Boomerangz/dsh-openrouter-live](https://github.com/Boomerangz/dsh-openrouter-live) | 0 | 2026-09-22 | 2026-09-23 | OpenRouter provider for DeepSeek Harness with a live model list, prices and spend tracking |
| 56 | [BOWLUNA/dsh-multi-instance](https://github.com/BOWLUNA/dsh-multi-instance) | 0 | 2026-09-17 | 2026-09-23 | DSH 多开桌面客户端：把 dsh web 装进原生 webview 窗口，按 URL 接入多个实例 —— 本机、WSL2、或服务器上的远程 DSH 都能接。多窗口自由排布与缩放，多实例之间互不干扰，每格独立浏览器会话。｜Desktop client and webview shell for DeepSeek Harness: multi-instance, multi-window panes that attach to any number of DSH instances by URL - local, WSL2 or remote - one isolated browser session per pane. |
| 57 | [boyl/dsh-sidebar-pins](https://github.com/boyl/dsh-sidebar-pins) | 0 | 2026-09-23 | 2026-09-23 | Codex-style pinned/recent sidebar panes for DeepSeek Harness, with one full row menu on every row (pins, unread, rename/fork/archive, reveal in Finder, guarded workspace delete). |
| 58 | [CetOeil/dsh-process-guard](https://github.com/CetOeil/dsh-process-guard) | 0 | 2026-09-21 | 2026-09-23 | DeepSeek Harness plugin that refuses shell commands killing processes by image name, wildcard, or unfiltered enumeration — the cleanup that closes the DSH GUI window. |
| 59 | [CJYLZS/dsh-browser](https://github.com/CJYLZS/dsh-browser) | 0 | 2026-09-23 | 2026-09-23 | Give dsh agent a real browser to use |
| 60 | [ClearLeaf13/dsh-llamacpp-connect](https://github.com/ClearLeaf13/dsh-llamacpp-connect) | 0 | 2026-09-23 | 2026-09-23 | 把本地 llama.cpp 管理器里的模型接入 DeepSeek Harness — bring local llama.cpp manager models into DeepSeek Harness |
| 61 | [cup113/dsh-plugin-pyrun](https://github.com/cup113/dsh-plugin-pyrun) | 0 | 2026-09-23 | 2026-09-23 | DeepSeek Harness（DSH）插件：Python 快捷执行工具，源码经 stdin 直灌 `python -X utf8 -u -`，一步返回结果，全链路 UTF-8，支持后台作业与沙箱提权。 |
| 62 | [Eapp1e/dsh-poker](https://github.com/Eapp1e/dsh-poker) | 0 | 2026-09-23 | 2026-09-23 | DeepSeek Harness 的德州扑克插件：无限注规则、机器人对手、真实感牌桌，教练模式讲解打法与赔率。 |
| 63 | [exoticknight/dsh-plugin-template](https://github.com/exoticknight/dsh-plugin-template) | 0 | 2026-09-23 | 2026-09-23 | One sentence to an AI agent: create, release and list a DeepSeek Harness plugin. DSH 插件模板与 AI 操作手册 |
| 64 | [exoticknight/dsh-system1](https://github.com/exoticknight/dsh-system1) | 0 | 2026-09-23 | 2026-09-23 | System One foundation and Cordis plugin for DeepSeek Harness \| DeepSeek Harness 的 System One 基础能力与 Cordis 插件 |
| 65 | [fengchang618gmail/dsh-course-subtitles](https://github.com/fengchang618gmail/dsh-course-subtitles) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin: fetch course/video captions (DeepLearning.AI, YouTube, Bilibili, Coursera), rebuild whole sentences, translate EN/ZH, auto-generate section headings, publish one Feishu doc per lesson. Also exports a course outline. Zero hardcoded keys - everything comes from env or the harness credential store. |
| 66 | [ffyfox/dsh-zcode-project-memory](https://github.com/ffyfox/dsh-zcode-project-memory) | 0 | 2026-09-22 | 2026-09-23 | ZCode 项目记忆的 DeepSeek Harness 非官方社区移植：项目级长效记忆插件。Unofficial community port of ZCode's project memory to DeepSeek Harness: project-scoped long-term memory plugin |
| 67 | [fufuyin/dsh-prompt-workbench](https://github.com/fufuyin/dsh-prompt-workbench) | 0 | 2026-09-23 | 2026-09-23 | Prompt rewrite workbench for DeepSeek Harness: four rewrite modes, cancellable streaming output, and a token-level before/after diff. |
| 68 | [FuLuTang/dsh-message-hub](https://github.com/FuLuTang/dsh-message-hub) | 0 | 2026-09-22 | 2026-09-23 | Transport-neutral communication hub plugin for DeepSeek Harness |
| 69 | [Gdenich/dsh-live-teams](https://github.com/Gdenich/dsh-live-teams) | 0 | 2026-09-22 | 2026-09-23 | A team of long-lived DSH Sessions: durable tasks, declared paths, review with evidence, and a Git-bound submission flow |
| 70 | [ginkgonine/dsh-server-hub](https://github.com/ginkgonine/dsh-server-hub) | 0 | 2026-09-23 | 2026-09-23 | A persistent multi-server switcher for DeepSeek Harness Web |
| 71 | [Gnatnaituy/dsh-sidebar-browser](https://github.com/Gnatnaituy/dsh-sidebar-browser) | 0 | 2026-09-23 | 2026-09-23 | A browser panel in DSH's right sidebar: browse a site through a per-origin loopback proxy, pick elements into [label][DOMn] references, with tabs, page zoom, phone/tablet viewport preview and saved logins. |
| 72 | [GNX001/dsh-system-monitor](https://github.com/GNX001/dsh-system-monitor) | 0 | 2026-09-22 | 2026-09-23 | DeepSeek Harness 的悬浮状态条：一行纯文字显示 CPU、内存、多 GPU 的温度与占用率，以及实时网速。零运行时依赖，数据仅在本机回环地址读取。 |
| 73 | [gustavofullstack/harness-mac](https://github.com/gustavofullstack/harness-mac) | 0 | 2026-09-23 | 2026-09-23 | Unofficial native macOS app for DeepSeek Harness (dsh): the official web UI in a native window, with a typed Swift client for the dsh SDK. |
| 74 | [harde1/dsh-xcodebuild](https://github.com/harde1/dsh-xcodebuild) | 0 | 2026-09-22 | 2026-09-23 | Xcode build, test, archive, run and log streaming for DeepSeek Harness: build/test/clean/archive/run an iOS or macOS project, with a live filterable build log and simulator and USB device log channels. macOS only. |
| 75 | [hasan-aghayev/dsh-pet-companion](https://github.com/hasan-aghayev/dsh-pet-companion) | 0 | 2026-09-22 | 2026-09-23 | Floating desktop pet for DeepSeek Harness with a growing local pet library |
| 76 | [jackchen13755/dsh-jev-core](https://github.com/jackchen13755/dsh-jev-core) | 0 | 2026-09-23 | 2026-09-23 | Shared kernel for the Jev DSH plugins: transport, retry/breaker/limiter, verdict cache, service shims. Extracted from byte-identical copies in dsh-jev-lens and dsh-jev-kit. |
| 77 | [JD579g/dsh-mcp-hub](https://github.com/JD579g/dsh-mcp-hub) | 0 | 2026-09-23 | 2026-09-23 | DeepSeek Harness (DSH) plugin: one-click MCP deployment + built-in MCP toolkit + doctor. Windows-first, connects without restarting. |
| 78 | [JessenReinhart/dsh-snapcompact](https://github.com/JessenReinhart/dsh-snapcompact) | 0 | 2026-09-23 | 2026-09-23 | Bitmap-frame context compression plugin for DeepSeek Harness (DSH): deterministic pixel-font visual archiving of conversation history |
| 79 | [jianghu-lao-yao/sh-volume-knob](https://github.com/jianghu-lao-yao/sh-volume-knob) | 0 | 2026-09-23 | 2026-09-23 | Read the agent's newest reply aloud and control volume from the DSH composer. |
| 80 | [jipika/dsh-memory](https://github.com/jipika/dsh-memory) | 0 | 2026-09-23 | 2026-09-23 | Two-layer long-term memory for DeepSeek Harness (DSH): global + per-project markdown, live re-read, zero extra LLM cost, with a Settings panel. 给 DSH 的两层长期记忆。 |
| 81 | [JohnGD/dsh-office-preview](https://github.com/JohnGD/dsh-office-preview) | 0 | 2026-09-23 | 2026-09-23 | Previews Word (.docx) and Excel (.xlsx) files in the DeepSeek Harness sidebar document pane — OOXML parsed in the browser, no Office, no network. |
| 82 | [knighthongyu/dsh-handoff-compaction](https://github.com/knighthongyu/dsh-handoff-compaction) | 0 | 2026-08-31 | 2026-09-23 | Structured DSH context handoffs with full-prefix compaction, a retained recent tail, and searchable session history |
| 83 | [lemonmmice/dsh-agent-toolchain](https://github.com/lemonmmice/dsh-agent-toolchain) | 0 | 2026-09-16 | 2026-09-23 | Evidence over claims for coding agents: 55 DSH/MCP tools (23 read-only) that build, drive, capture and profile a live Windows desktop app, then adjudicate what the agent claims against real evidence. Failure corpus included. |
| 84 | [liaowenqi123/dsh-meeting-coordinator](https://github.com/liaowenqi123/dsh-meeting-coordinator) | 0 | 2026-09-23 | 2026-09-23 | DSH 多 Agent「会议室」插件：会议室会籍 + fork 上下文入场 + 主持人控场多轮讨论 + 会后各自压缩纪要并回到工作区继续干活。基于 dsh-std 元协议（Community v0.15）。 |
| 85 | [LiHeng99/dsh-starbridge-client](https://github.com/LiHeng99/dsh-starbridge-client) | 0 | 2026-09-23 | 2026-09-23 | StarBridge (星桥) gateway client for DSH — address or platform-account sign-in, chat / feedback / knowledge-base tools, and Web UI panels. Ships with no baked-in gateway address. |
| 86 | [ljcoder2015/dsh-canvas](https://github.com/ljcoder2015/dsh-canvas) | 0 | 2026-09-17 | 2026-09-23 | dsh-plugin |
| 87 | [loyalchiiina/dsh-lobsterai-daddy](https://github.com/loyalchiiina/dsh-lobsterai-daddy) | 0 | 2026-09-23 | 2026-09-23 | LobsterAIDaddy — draggable floating ball + slide-in drawer embedding the LobsterDaddy multi-account console in DSH, with a loopback-only same-origin reverse proxy, live status dot, account badge and a resizable persisted drawer. 把 LobsterDaddy 多账号控制台变成 DSH 界面悬浮球：可拖拽摆位并记忆，抽屉内嵌完整网页控制台，免退出并行登录/自动签到/积分额度/一键切号。 |
| 88 | [LuckVd/dsh-taskflow](https://github.com/LuckVd/dsh-taskflow) | 0 | 2026-09-09 | 2026-09-23 | AI 合同式任务看板 · DeepSeek Harness Web 插件:AI 拆解/实现/举证,人工验收,打回迭代,状态留痕 |
| 89 | [MaybeMeibeMaybi/dsh-lan-remote-access](https://github.com/MaybeMeibeMaybi/dsh-lan-remote-access) | 0 | 2026-09-23 | 2026-09-23 | Reach the DeepSeek Harness (dsh) web GUI from any device on your LAN. Loopback-only server plus a local entry proxy that tunnels HTTP and WebSocket. |
| 90 | [McBonB/dsh-dd-forge](https://github.com/McBonB/dsh-dd-forge) | 0 | 2020-09-29 | 2026-09-23 | Due-diligence document review for DeepSeek Harness: deterministic engine (documents → rule packs → risk report), evidence chain, docx/xlsx reports |
| 91 | [minivv/dsh-activity-bell](https://github.com/minivv/dsh-activity-bell) | 0 | 2026-09-23 | 2026-09-23 | DSH 侧边栏活动铃铛：会话完成给角标，一键切换最近活动列表 |
| 92 | [MyPanda-Hash/CHENGXIAO](https://github.com/MyPanda-Hash/CHENGXIAO) | 0 | 2026-09-02 | 2026-09-23 | Pairs two DeepSeek Harness machines over a local network with a one-time code, so one agent can run tasks and exchange files on the other while each machine keeps its own files in place. |
| 93 | [N107meow/dsh-plugin-figma](https://github.com/N107meow/dsh-plugin-figma) | 0 | 2026-09-23 | 2026-09-23 | Read-only Figma design-source tools for DeepSeek Harness: inspect file structure, colors, typography and export images as native tools. |
| 94 | [NanamiKite/Coyote-x-dsh](https://github.com/NanamiKite/Coyote-x-dsh) | 0 | 2026-09-23 | 2026-09-23 | AI 接入的体感文字冒险 MCP 插件。 AI 主持场景包驱动的角色扮演剧情，用实时文字状态推进故事， 并通过郊狼 Coyote V2/V3 外置反馈设备执行有界物理反馈增强沉浸感。 |
| 95 | [Neptune810/dsh-power-button](https://github.com/Neptune810/dsh-power-button) | 0 | 2026-09-23 | 2026-09-23 | A draggable one-press stop button for the DeepSeek Harness Web GUI. / DSH 一键结束服务按钮。 |
| 96 | [passerby325799/dsh-trans-md](https://github.com/passerby325799/dsh-trans-md) | 0 | 2026-09-23 | 2026-09-23 | Keeps DSH chat replies short: final replies over 15 lines are written to a Markdown file in the workspace, leaving a digest and file path in chat. |
| 97 | [pbwheel/dsh-workbuddy-expert](https://github.com/pbwheel/dsh-workbuddy-expert) | 0 | 2026-09-23 | 2026-09-23 | 把 WorkBuddy 专家装进 DSH：专家市场一键导入 · 会话选择器随时切换 |
| 98 | [ptrel1/dsh-global-prompt-and-compress](https://github.com/ptrel1/dsh-global-prompt-and-compress) | 0 | 2026-08-21 | 2026-09-23 | dsh拓展全局提示词插件 |
| 99 | [ptrel1/dsh-postapi-bridge](https://github.com/ptrel1/dsh-postapi-bridge) | 0 | 2026-08-20 | 2026-09-23 | DeepSeek Harness (DSH) 官方标准双半侧扩展插件：为外部机器人（MaiBot / 飞书 / 微信）及 CI/CD 系统提供开箱即用的轻量 HTTP POST / RESTful 任务调度、会话管理与 MCP 工具调用网关。 |
| 100 | [rasyidmmz/dsh-ai-memory](https://github.com/rasyidmmz/dsh-ai-memory) | 0 | 2026-09-23 | 2026-09-23 | Memory bridge between DeepSeek Harness and ai-memory: finalizes DSH sessions so they become wiki pages every other harness ai-memory serves can read. |
| 101 | [RaulLazaro/dsh-jev-plugin](https://github.com/RaulLazaro/dsh-jev-plugin) | 0 | 2026-09-21 | 2026-09-23 | Ask Jev (TypeSafe System One) typed questions from DeepSeek Harness: batch judgements with probabilities, configured per user in Settings. |
| 102 | [SciF-Lin/dsh-browsercontrol-mcp](https://github.com/SciF-Lin/dsh-browsercontrol-mcp) | 0 | 2026-09-23 | 2026-09-23 | Real browser control for DeepSeek Harness: mounts Playwright MCP as native tools so the agent drives a browser you actually use. |
| 103 | [SeanTolstoyevski/dsh-code-review](https://github.com/SeanTolstoyevski/dsh-code-review) | 0 | 2026-09-22 | 2026-09-23 | On-demand code review for DeepSeek Harness.  |
| 104 | [sweet-boby/dsh-session-isolation](https://github.com/sweet-boby/dsh-session-isolation) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin for per-session working directories: keep parallel agent sessions from overwriting each other. |
| 105 | [TACONailoong/dsh-plugin-smart-config](https://github.com/TACONailoong/dsh-plugin-smart-config) | 0 | 2026-09-23 | 2026-09-23 | DeepSeek Harness plugin for model smart configuration and parameter adaptation ported from ZCode |
| 106 | [tokai-teiodh/dsh-script-cards](https://github.com/tokai-teiodh/dsh-script-cards) | 0 | 2026-09-23 | 2026-09-23 | Script-archive card panel for DeepSeek Harness: rounded card grid, two-level branch canvas, and a host-side Typert bridge that keeps structure inside your own project folder. |
| 107 | [TOP1Wu/dsh-session-isolation](https://github.com/TOP1Wu/dsh-session-isolation) | 0 | 2026-09-23 | 2026-09-23 | 为 DeepSeek Harness 提供工作区级会话隔离：同一工作区里多个会话各自写自己的产出目录，拒绝覆盖其他会话的文件。 |
| 108 | [tr1v3r/dsh-ltm](https://github.com/tr1v3r/dsh-ltm) | 0 | 2026-09-21 | 2026-09-23 | Local-first long-term memory for DeepSeek Harness, with CJK-aware search and memory lifecycle management. |
| 109 | [VermilionPasvikin/dsh-coderag](https://github.com/VermilionPasvikin/dsh-coderag) | 0 | 2026-09-17 | 2026-09-23 | dsh-coderag 是一个以 MCP 服务器形态提供的代码库检索引擎：让 DeepSeek Harness（DSH）的 Agent 能按语义与结构找到代码，而不是靠猜关键词反复 grep。 |
| 110 | [virzs/dsh-plugin-data-mask](https://github.com/virzs/dsh-plugin-data-mask) | 0 | 2026-09-23 | 2026-09-23 | Paste-time data masking plugin for DeepSeek Harness: sensitive values are masked before they reach the composer |
| 111 | [wangzhuoyuan229-source/DeepSeekLauncher](https://github.com/wangzhuoyuan229-source/DeepSeekLauncher) | 0 | 2026-09-23 | 2026-09-23 | macOS desktop launcher for DeepSeek Harness — Chrome, custom transparent icon, and installation skill |
| 112 | [Witherwithwinter/DSH-Codinput](https://github.com/Witherwithwinter/DSH-Codinput) | 0 | 2026-09-16 | 2026-09-23 | DeepSeek Harness 的代码编辑器风格输入面板（CodeMirror 6）：普通 / 悬浮 / 侧栏标签三态单实例，与官方输入机同源。 \| Code-editor style input panel for DeepSeek Harness (CodeMirror 6) — inline, floating or sidebar tab, always exactly one, sharing the official input machine. |
| 113 | [wuenna/dsh-deepseek-cost](https://github.com/wuenna/dsh-deepseek-cost) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin: DeepSeek-official cost accounting (session total + current turn) added to the built-in Token usage panel. |
| 114 | [wuenna/dsh-obsidian-bridge](https://github.com/wuenna/dsh-obsidian-bridge) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin: an Obsidian bridge - fill the composer draft from a selection, open files and wikilinks in Obsidian, and inject consent-based region edits. |
| 115 | [wuenna/dsh-workspace-focus](https://github.com/wuenna/dsh-workspace-focus) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin: an eye toggle that hides every workspace except the one holding the current session. |
| 116 | [xchannel1987/dsh-sdd-progress-xc](https://github.com/xchannel1987/dsh-sdd-progress-xc) | 0 | 2026-09-22 | 2026-09-23 | DSH web plugin: right-sidebar tab showing SDD task progress (todos) and ledger (sdd/progress.md) for the current session. 在右侧边栏展示当前会话的 SDD 任务进度与进度台账。 |
| 117 | [XGUIMAX/dsh-wrongbook](https://github.com/XGUIMAX/dsh-wrongbook) | 0 | 2026-09-23 | 2026-09-23 | DSH Tavern 错题库：按人物卡分类记下调试中踩过的坑，先查本卡、再跨卡。 / Per-card defect ledger for DSH Tavern. |
| 118 | [xianyu9n/dsh-exp-ops](https://github.com/xianyu9n/dsh-exp-ops) | 0 | 2026-09-23 | 2026-09-23 | Remote experiment operations for DeepSeek Harness (dsh): a credential-reference server registry, signal/GPU/rollout watchers that wake the agent instead of polling, box metrics, and one right-sidebar panel with live configuration. |
| 119 | [XiaoBinGan/dsh-mermaid-fence](https://github.com/XiaoBinGan/dsh-mermaid-fence) | 0 | 2026-09-23 | 2026-09-23 | Render settled ```mermaid fences in the dsh Web GUI chat as SVG diagrams — hardened output, source toggle, and a code-block fallback that never loses the source. |
| 120 | [Xixixiao2007/dsh-mail-digest](https://github.com/Xixixiao2007/dsh-mail-digest) | 0 | 2026-09-23 | 2026-09-23 | 把每轮回答压成一条详略得当的摘要发到邮箱，并支持邮件回信作答或续接对话（DeepSeek Harness 插件） |
| 121 | [Yang-Spec-0202/hdsl-rs](https://github.com/Yang-Spec-0202/hdsl-rs) | 0 | 2026-09-23 | 2026-09-23 | Rust desktop launcher for isolated DeepSeek Harness versions and compatible plugins. |
| 122 | [YevheniiMiachyn/dsh-tts-live](https://github.com/YevheniiMiachyn/dsh-tts-live) | 0 | 2026-09-23 | 2026-09-23 | Live sentence-level TTS for DeepSeek Harness with early speech, ordered streaming, barge-in cancellation, and custom WAV provider fixes. |
| 123 | [yicun0316/dsh-claude-slider](https://github.com/yicun0316/dsh-claude-slider) | 0 | 2026-09-23 | 2026-09-23 | DSH / DeepSeek Harness 推理强度滑块插件：Claude 风格拖拽滑块 + 23 种 Canvas 粒子动效 + 客制动效自由组合 + 配色与图标自定义。Claude-style reasoning-effort slider plugin for DSH. |
| 124 | [yixiuzhemu/dsh-redis-plugin](https://github.com/yixiuzhemu/dsh-redis-plugin) | 0 | 2026-09-23 | 2026-09-23 | dsh连接redis插件 |
| 125 | [yixiuzhemu/Skills-Manager](https://github.com/yixiuzhemu/Skills-Manager) | 0 | 2026-09-22 | 2026-09-23 | Skills管理 |
| 126 | [yueyexiayu/dsh-chrome](https://github.com/yueyexiayu/dsh-chrome) | 0 | 2026-09-22 | 2026-09-23 | DSH desktop plugin: drive a dedicated visible Chrome window over CDP, with screenshots the model can see |
| 127 | [yvhcel888/dsh-slide-gauge](https://github.com/yvhcel888/dsh-slide-gauge) | 0 | 2026-09-23 | 2026-09-23 | DSH 滑动测量仪挂件：右下角拖动角色显示状态，边界彩蛋，记住上次位置 · DeepSeek Harness plugin |
| 128 | [zhang-guo-wen/dsh-memory](https://github.com/zhang-guo-wen/dsh-memory) | 0 | 2026-09-23 | 2026-09-23 | Claude-compatible memory for DeepSeek Harness: a user-chosen memory directory with MEMORY.md index and topic files, the memory tool, and a settings page |
| 129 | [zhang-guo-wen/dsh-ui-beautify](https://github.com/zhang-guo-wen/dsh-ui-beautify) | 0 | 2026-09-23 | 2026-09-23 | Page beautification for DeepSeek Harness: ship open-source CJK webfonts and let the Web GUI pick its body font |
| 130 | [zhang-guo-wen/dsh-worktree](https://github.com/zhang-guo-wen/dsh-worktree) | 0 | 2026-09-23 | 2026-09-23 | Git worktree isolation for DeepSeek Harness: create a worktree, register it as its own project, and start the session inside it |
| 131 | [zhang0098/dsh-telegram-channel](https://github.com/zhang0098/dsh-telegram-channel) | 0 | 2026-09-23 | 2026-09-23 | Telegram mobile remote for DeepSeek Harness sessions (Martty/ACP-compatible fork of hi-wenw/dsh-telegram-channel): bind a chat to a live session, plain text = followup, /model /last /sessions. |
| 132 | [zhanghao3693/dsh-client-ui-route-badge](https://github.com/zhanghao3693/dsh-client-ui-route-badge) | 0 | 2026-08-15 | 2026-09-23 | Route log badge UI plugin for DSH Web |
| 133 | [zongzack/dsh-jev-router](https://github.com/zongzack/dsh-jev-router) | 0 | 2026-09-23 | 2026-09-23 | DSH plugin that uses the JEV model to score task complexity and switch to the appropriate model for each dispatch request. |
| 134 | [Ztyss/dsh-draft-fold](https://github.com/Ztyss/dsh-draft-fold) | 0 | 2026-09-22 | 2026-09-23 | 长输入自动折叠为一张附件式摘要卡 |
| 135 | [Ztyss/dsh-llm-provider](https://github.com/Ztyss/dsh-llm-provider) | 0 | 2026-09-19 | 2026-09-23 | 全量接管模型服务，并提供直观的配置方式与额度显示 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- CochraneK/dsh-gate-game-plugin
- KeS1Ke/dsh-start-and-exit
- Kr-ATG/dsh-chat-flow
- LovelyDazai/dsh-model-selector
- Miyamiz39/dsh-koein
- ovensi/dsh-plugin-minimax-usage
- qcsjjjjj/dsh-hero-rightbar-hold
- RaulLazaro/dsh-jev
- slow-stack/dsh-mneme
- tttnny/DSH-Launcher
- us/dsh-crw
- WSL043/dsh-dictation
- ygc3817922006-sketch/SuperLcm-Lossless-Context
- zeyu-j/centricmem-skill
