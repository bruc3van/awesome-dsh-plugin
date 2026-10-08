# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-08**
- 快照日期 / Snapshot date: **2026-10-08 (UTC)**
- 待审核 / Pending: **180**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **24**
- Star 异常增长 / Star-growth alerts: **5** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-07** / vs previous snapshot **2026-10-07**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **5**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 4433 | +1091 | 80 | 13d | 日增百星 | 日增 +1091★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 12360 | +177 | 458 | 55d | 日增百星 | 日增 +177★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 8440 | +129 | 600 | 107d | 日增百星 | 日增 +129★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 5863 | +113 | 253 | 54d | 日增百星 | 日增 +113★；已不进榜单 |
| ⚠️ [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) | 已核准 / approved | 705 | +24 | 38 | 20d | 冲入 Top 20 | 冲入 Top 20（21→20） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [Contexera/dsh-agent-team](https://github.com/Contexera/dsh-agent-team) | 56 | 2026-08-23 | 2026-10-08 | dsh-agent-team gives DeepSeek Harness agents that don't reset: durable Members with their own memory, notes, and skills across sessions, rollovers, and restarts. You set the direction; agents coordinate through Channels and Tasks. |
| 2 | [Sev7eEn7/dsh-sieve](https://github.com/Sev7eEn7/dsh-sieve) | 49 | 2026-10-04 | 2026-10-08 | dsh-sieve: context engineering &amp; token optimization plugin for DeepSeek Harness (DSH) — tool output filtering, context pruning, progressive skill disclosure. 36% smaller payload in offline replay. DSH 上下文管理与 token 优化插件。 |
| 3 | [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) | 10 | 2026-10-08 | 2026-10-08 | Provides bash, PowerShell 7, and a suite of high-performance tools written in Rust for Windows DSH to enhance token efficiency / 为windows的dsh提供bash、powershell7及一系列rust编写的高性能tools来提高token效率 |
| 4 | [HaoyanZhang123/dsh-plugin-control-your-development](https://github.com/HaoyanZhang123/dsh-plugin-control-your-development) | 6 | 2026-10-07 | 2026-10-08 | 把 AI 开发的进展变成人人看得懂、能拍板的产品仪表盘（DSH skill + 右侧栏面板）｜A product dashboard for AI-assisted development — readable and controllable (DSH skill + sidebar panel) |
| 5 | [Zai-G/dsh-preset-workshop](https://github.com/Zai-G/dsh-preset-workshop) | 5 | 2026-10-08 | 2026-10-08 | 预设工坊 · Preset Workshop：为 DeepSeek Harness 管理人设、系统提示词、工具与技能，并预览请求组成。 |
| 6 | [cccchensy/dsh-token-heatmap](https://github.com/cccchensy/dsh-token-heatmap) | 4 | 2026-10-01 | 2026-10-08 | dsh使用token活动统计，token热力图 |
| 7 | [MagicalYuYu/agent-operating-system](https://github.com/MagicalYuYu/agent-operating-system) | 4 | 2026-06-21 | 2026-10-08 | AOS — Agent Operating System: 运行在类 Claude Code agent harness 上的个人文件治理层（DSH 完整适配 / AGENTS.md 工具通用适配） |
| 8 | [chenxiang6663635/job-workbench](https://github.com/chenxiang6663635/job-workbench) | 3 | 2026-09-08 | 2026-10-08 | Local-first, auditable AI-assisted job-search workbench: JD analysis, application tracking, resume workflows with anti-fabrication safeguards, interview &amp; offer pipeline. Plain Markdown/CSV on your own disk, BYOK, no telemetry or project-run cloud; optional online features use services you enable. |
| 9 | [dingmengchang/dsh-OyamaMahiro](https://github.com/dingmengchang/dsh-OyamaMahiro) | 3 | 2026-08-26 | 2026-10-08 | 🎀《别当欧尼酱了！》(Onimai) 绪山真寻主题皮肤 for DeepSeek Harness (dsh-web)：马卡龙亮/暗双主题 × 纯 CSS 状态感知背景（待命/干活中/需要你三态立绘自动切换），零脚本零网络请求。粉丝二创，非官方非商用。 |
| 10 | [xiaoso456/dsh-workflow-lite](https://github.com/xiaoso456/dsh-workflow-lite) | 3 | 2026-10-08 | 2026-10-08 | DeepSeek Harness 的软工作流插件：在画布上设计流程，编译成计划提示词，由模型按计划执行；运行状态由模型自己记，没有执行引擎 |
| 11 | [Amo-aibiancheng/dsh-balance-meter](https://github.com/Amo-aibiancheng/dsh-balance-meter) | 2 | 2026-10-08 | 2026-10-08 | DSH Web 界面底部常驻标注：充值余额 + 本次会话消费（按账户余额差测量，非本地 token 估算） |
| 12 | [CarrotFish/dsh-file-and-terminal](https://github.com/CarrotFish/dsh-file-and-terminal) | 2 | 2026-10-08 | 2026-10-08 | 为 DSH Web 配置添加“文件管理”和“终端”面板。 |
| 13 | [cq-guojia/dsh-task-dispatch-table](https://github.com/cq-guojia/dsh-task-dispatch-table) | 2 | 2026-09-20 | 2026-10-08 | 一个 dsh host 层插件：用一张任务定义表驱动周期性任务，按时间窗与依赖把任务派发成独立会话执行（调度层零大模型介入） |
| 14 | [leolee9086/dsh-tool-image](https://github.com/leolee9086/dsh-tool-image) | 2 | 2026-09-12 | 2026-10-08 | DeepSeek Harness 的远程文生图/参考生图 Cordis 插件:接入 OpenAI 兼容中转站,出图落盘并注册为附件,自带工具卡与中转站查询 |
| 15 | [nexmoe/dsh-monitor-pro](https://github.com/nexmoe/dsh-monitor-pro) | 2 | 2026-10-02 | 2026-10-08 | Real-time host resource monitoring for DeepSeek Harness, adapted from VS Code Monitor Pro |
| 16 | [wonderandyou/dsh-qwen-paint](https://github.com/wonderandyou/dsh-qwen-paint) | 2 | 2026-10-08 | 2026-10-08 | DSH 插件：在对话里调用本机 ComfyUI，用千问 Qwen-Image 2.1 出图。纯本地、不出网、不需要 API Key。 |
| 17 | [AEmbers/dsh-adjudication](https://github.com/AEmbers/dsh-adjudication) | 1 | 2026-10-01 | 2026-10-08 | Multi-domain adjudication engine for DeepSeek Harness — a deterministic pipeline (gate/bundle/anchor/critique) plus a registry of on-demand domain packs. Ported from Alibaba's open-code-review. |
| 18 | [azazo1/dsh-browser](https://github.com/azazo1/dsh-browser) | 1 | 2026-10-08 | 2026-10-08 | Drive the user's real Google Chrome from DeepSeek Harness without CDP: native messaging + MV3 extension, numbered-text snapshots, persistent profile. 不走 Chrome 调试协议, 用扩展驱动本机 Chrome. |
| 19 | [boring-cuzzz/dsh-chimes](https://github.com/boring-cuzzz/dsh-chimes) | 1 | 2026-10-08 | 2026-10-08 | Startup &amp; turn-completion chimes for the DeepSeek Harness desktop app, with an in-app control panel and switchable sound library (Windows, zero dependencies). |
| 20 | [COH2357/dsh-workspace-api-key](https://github.com/COH2357/dsh-workspace-api-key) | 1 | 2026-10-07 | 2026-10-08 | 一个Deepseek Harness插件，可以为每一个工作区配置独立的Api Key |
| 21 | [deepseekv41flash/dsh-remote-trust](https://github.com/deepseekv41flash/dsh-remote-trust) | 1 | 2026-10-08 | 2026-10-08 | DeepSeek Harness plugin: makes a reverse-proxied (non-loopback) dsh web page count as a trusted host, so the Settings surface loads instead of reporting "settings are unavailable in this browser". |
| 22 | [ethanweave/workbuddy-gateway-dsh](https://github.com/ethanweave/workbuddy-gateway-dsh) | 1 | 2026-10-08 | 2026-10-08 | 在 DSH 中免费使用腾讯 CodeBuddy（WorkBuddy）账号额度：本机网关一键安装、开机自启、统一管理 \| Use your CodeBuddy quota inside DSH for free: one-shot Windows installer, logon autostart and unified management for workbuddy-gateway |
| 23 | [jerryxff26-alt/dsh-delivery-board](https://github.com/jerryxff26-alt/dsh-delivery-board) | 1 | 2026-10-08 | 2026-10-08 | DeepSeek Harness (dsh) plugin: delivery board with stage pipeline, handoff audit trail and weekly Markdown report |
| 24 | [kmyqchy/dsh-3d-preview](https://github.com/kmyqchy/dsh-3d-preview) | 1 | 2026-10-08 | 2026-10-08 | STL / 3MF file preview for the DSH plugin dsh-better-sidebar: orbit, zoom, slicer plate switching and per-object filament colours from Bambu Studio / OrcaSlicer projects. Three.js based, no runtime dependencies. |
| 25 | [LilianDOF4/gal-eat](https://github.com/LilianDOF4/gal-eat) | 1 | 2026-10-08 | 2026-10-08 | 一款为gal-view添加挂机赚钱买饭喂养小鲸鱼的插件 |
| 26 | [MindLab-Research/dsh-generative-ui](https://github.com/MindLab-Research/dsh-generative-ui) | 1 | 2026-08-20 | 2026-10-08 | Generative UI for DeepSeek Harness — the agent writes TSX and the web UI compiles every frame as it streams, so a card renders while its JSX is still unclosed. Inline in the conversation, or in a side canvas. |
| 27 | [mutoharohfiqhiabcd-source/dsh-updater](https://github.com/mutoharohfiqhiabcd-source/dsh-updater) | 1 | 2026-09-05 | 2026-10-08 | DeepSeek Harness 自动检测与更新器：Windows 桌面小工具 + DSH 网页版插件（会话标题栏「检测 / 回滚 / 版本」） |
| 28 | [Mynaniao/dsh-whale-food-expack](https://github.com/Mynaniao/dsh-whale-food-expack) | 1 | 2026-10-06 | 2026-10-08 | 给插件市场的「DSH 小鲸鱼记账挂件」加上吃白米饭和工作时反馈的功能，使鲸鱼娘成为真正吃白饭的大肥鱼和工作伙伴，打发你的等待时间 |
| 29 | [O789Real/dsh-usage-cost](https://github.com/O789Real/dsh-usage-cost) | 1 | 2026-10-08 | 2026-10-08 | DSH 插件：在自带「用量」弹窗里把每个 token 环节折算成金额显示在 token 数字右边（DeepSeek 官方价目表 + 峰谷价，口径与 dsh-whale-widget 同源） |
| 30 | [OliYogSothoth/dsh-plugin-session-purge](https://github.com/OliYogSothoth/dsh-plugin-session-purge) | 1 | 2026-10-06 | 2026-10-08 | Delete DeepSeek Harness sessions for good — via a recycle bin: move, restore, then the next start wipes the log, projection cache, spill files and workspace accounting. |
| 31 | [PlayForm/DeepSeek](https://github.com/PlayForm/DeepSeek) | 1 | 2026-10-06 | 2026-10-08 | DeepSeek 🐳 |
| 32 | [residenthiago2011/DSH-Laya-Tool-Router](https://github.com/residenthiago2011/DSH-Laya-Tool-Router) | 1 | 2026-10-08 | 2026-10-08 | Laya Tool Router Using the SystemOne Jev Typed Decisions for Local Laya Model and Equivalents. |
| 33 | [wuanthony397-hash/dsh-codex-peer](https://github.com/wuanthony397-hash/dsh-codex-peer) | 1 | 2026-10-08 | 2026-10-08 | Run the local Codex CLI as a peer agent from DeepSeek Harness: split work between the two agents, hand tasks over, review each other's changes, and keep every run on disk. |
| 34 | [xgxx666/dsh-clear-usage](https://github.com/xgxx666/dsh-clear-usage) | 1 | 2026-10-08 | 2026-10-08 | DSH 本地 Token 用量统计与模型分析，支持热力图、自定义日期和模型筛选。 |
| 35 | [XHXnb123/dsh-plugin-archive-reader](https://github.com/XHXnb123/dsh-plugin-archive-reader) | 1 | 2026-10-08 | 2026-10-08 | 只读翻看 asar / zip 归档的 dsh 插件：列条目、读条目、正则搜内容（零依赖） |
| 36 | [ZiOstudio/dsh-budget-handoff](https://github.com/ZiOstudio/dsh-budget-handoff) | 1 | 2026-10-07 | 2026-10-08 | Session budget brake for DeepSeek Harness — meters every call against the official price table, halts the run when the budget runs out, and leaves a resumable handoff snapshot. · DSH 会话预算刹车 |
| 37 | [4444Hao/dsh-codefall](https://github.com/4444Hao/dsh-codefall) | 0 | 2026-10-08 | 2026-10-08 | 适用于dsh的数字瀑布开机动画与绿色字样主题 |
| 38 | [adamcjm/dsh-memo](https://github.com/adamcjm/dsh-memo) | 0 | 2026-10-08 | 2026-10-08 | DSH 备忘录插件：侧边栏快速记录 + 本地 SQLite + GitHub 私有仓库同步 + 图片截图｜Memo plugin for DeepSeek Harness |
| 39 | [adamcjm/dsh-window-drag-probe](https://github.com/adamcjm/dsh-window-drag-probe) | 0 | 2026-10-08 | 2026-10-08 | Restore macOS window dragging in DSH Desktop: a 16px top drag band plus an in-window diagnostic panel (upstream discussion #9112). |
| 40 | [ags-neto/dsh-status-telemetry](https://github.com/ags-neto/dsh-status-telemetry) | 0 | 2026-10-08 | 2026-10-08 | A DSH client plugin: a session telemetry pill in the composer dock that expands into a token, performance and context panel. |
| 41 | [akash-digitavision/dsh-agent-reach](https://github.com/akash-digitavision/dsh-agent-reach) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness bundle: Agent Reach skill - one-command internet reach for DSH agents (web, YouTube, GitHub, Twitter/X, Reddit, RSS, Exa search) via the Agent Reach CLI |
| 42 | [akash-digitavision/dsh-playwright](https://github.com/akash-digitavision/dsh-playwright) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness bundle: official Microsoft Playwright MCP (@playwright/mcp) - accessibility-tree browser automation for DSH agents |
| 43 | [akash-digitavision/dsh-serena](https://github.com/akash-digitavision/dsh-serena) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness bundle: Serena MCP integration - IDE-grade symbolic code intelligence (find/rename/edit symbols) for DSH agents, plus tool-usage hooks bridge |
| 44 | [AngleZhang-ZhangJiao/dsh-orchestrator2](https://github.com/AngleZhang-ZhangJiao/dsh-orchestrator2) | 0 | 2026-10-08 | 2026-10-08 | 自动开发调度器2.0（dsh-orchestrator2）：DSH agent preset 插件——交互设计 → goal 驱动开发流水线 → 验收修复循环。发布镜像：插件源码 + 最新安装包（当前 v2.9.0）。 |
| 45 | [Arbeiter-bit/dsh-open-branch](https://github.com/Arbeiter-bit/dsh-open-branch) | 0 | 2026-10-08 | 2026-10-08 | Fork a writable side conversation from any completed DSH turn, in the right sidebar. |
| 46 | [arzvaak/dsh-provider-hub](https://github.com/arzvaak/dsh-provider-hub) | 0 | 2026-10-08 | 2026-10-08 | BharatCode and OpenAI-compatible provider setup alongside ChatGPT and GitHub Copilot subscriptions for DeepSeek Harness. |
| 47 | [azazo1/dsh-open-dir](https://github.com/azazo1/dsh-open-dir) | 0 | 2026-10-08 | 2026-10-08 | 通过 dsh-open CLI 在 DSH Desktop 或 Web 中打开指定目录对应的工作区. |
| 48 | [BaoBao1996121/dsh-chatgpt-subscription](https://github.com/BaoBao1996121/dsh-chatgpt-subscription) | 0 | 2026-10-08 | 2026-10-08 | DSH 插件：ChatGPT 订阅登录、主 Agent 模型选择与直连/Clash 网络设置 |
| 49 | [beicause/dsh-extra-sandbox-presets](https://github.com/beicause/dsh-extra-sandbox-presets) | 0 | 2026-09-29 | 2026-10-08 | Registers arbitrary configured DSH permission presets, each selecting a sandbox mode and approval policy plus the directories writable on top of it. Linux bwrap only. |
| 50 | [bitxeno/dsh-git-plus](https://github.com/bitxeno/dsh-git-plus) | 0 | 2026-10-05 | 2026-10-08 | An IDE-style Git panel for the DeepSeek Harness web GUI |
| 51 | [blueziii/dsh-mc-agent](https://github.com/blueziii/dsh-mc-agent) | 0 | 2026-10-08 | 2026-10-08 | 让 DeepSeek Harness 真的玩 Minecraft：AI 有自己的角色，能探索、挖矿、合成、熔炼、打怪、建造。基于 yzi1b/whale-craft 独立维护。 |
| 52 | [bosd/odoo-lint](https://github.com/bosd/odoo-lint) | 0 | 2026-10-07 | 2026-10-08 | Blazing fast Rust-native linter for Odoo modules |
| 53 | [callqh/dsh-project-summary](https://github.com/callqh/dsh-project-summary) | 0 | 2026-10-08 | 2026-10-08 | Compact floating Git project summary for DeepSeek Harness: branch, changes, commits and GitHub PR. Follows DSH themes and conversation bounds. |
| 54 | [Chi-hong22/dsh-plan-spend](https://github.com/Chi-hong22/dsh-plan-spend) | 0 | 2026-10-08 | 2026-10-08 | Plan Spend：DSH Web GUI 弹窗插件，展示已配置服务商的套餐花销（DeepSeek 官方余额 / OpenCode Go 5h·7d·月配额） |
| 55 | [Chi-hong22/dsh-session-autoname](https://github.com/Chi-hong22/dsh-session-autoname) | 0 | 2026-10-08 | 2026-10-08 | 根会话首轮结束后按 MMDD｜类型｜主题 自动命名，并支持按全文内容按需命名指定会话 |
| 56 | [ChrisLou-bioinfo/dsh-usage-lite](https://github.com/ChrisLou-bioinfo/dsh-usage-lite) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: token usage statistics across all sessions as a settings page (zero-dep, no build) |
| 57 | [ChrisLou-bioinfo/dsh-workspace-badge](https://github.com/ChrisLou-bioinfo/dsh-workspace-badge) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: workspace badge on each session row in the flat (recency-sorted) sidebar list |
| 58 | [Cjamiel/manoo-manos](https://github.com/Cjamiel/manoo-manos) | 0 | 2026-10-08 | 2026-10-08 | Manoo: manos para DeepSeek Harness. Ve tu pantalla, mueve el mouse y escribe por ti ‚Äî barra, aro para ense√±ar y voz, en espa√±ol, para quien no sabe usar la computadora. macOS. |
| 59 | [ckanner/dsh-subagent-codex-pro](https://github.com/ckanner/dsh-subagent-codex-pro) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness plugin: a Codex delegation that can carry a model and a reasoning effort per call |
| 60 | [cm860712ch-cloud/dsh-quick-input](https://github.com/cm860712ch-cloud/dsh-quick-input) | 0 | 2026-10-08 | 2026-10-08 | 应声 · 快捷输入：输入框左侧的九宫格快捷短语面板。9-grid quick-phrase pad docked left of the composer. |
| 61 | [DDDMUC/dsh-url-router](https://github.com/DDDMUC/dsh-url-router) | 0 | 2026-10-08 | 2026-10-08 | DSH Web GUI plugin: one URL for every surface — the address bar names what is on screen (a conversation or a main panel) and a link opens it. Single owner of the URL fragment. |
| 62 | [dingchenhui0618-arch/dsh-market-sidebar](https://github.com/dingchenhui0618-arch/dsh-market-sidebar) | 0 | 2026-10-08 | 2026-10-08 | 把 dshmarket 插件市场搬进 DSH 侧边栏 / Puts the dshmarket plugin market on the DSH sidebar |
| 63 | [dingchenhui0618-arch/dsh-warden](https://github.com/dingchenhui0618-arch/dsh-warden) | 0 | 2026-10-08 | 2026-10-08 | Adversary review gate for DeepSeek Harness: an independent small model reviews destructive tool calls before they run, and reports every verdict. · DSH 对抗式审查门：危险工具调用在执行前由一个独立小模型复核。 |
| 64 | [dreamtao2199/dsh-plugin-handbook](https://github.com/dreamtao2199/dsh-plugin-handbook) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness (DSH) plugin engineering handbook — build checklist, slot map, safety invariants, release/publish flow and pitfalls, distilled from a real plugin. |
| 65 | [EdisonYang1982/dsh-skill-switch](https://github.com/EdisonYang1982/dsh-skill-switch) | 0 | 2026-10-08 | 2026-10-08 | Per-session skill switch for DeepSeek Harness: see which skills a session loads, toggle them off, and keep a pure-chat session free of skill overhead. Also mounts whole skill families in and out of the host's skill hub. |
| 66 | [eighteentang/dsh-plugin-im-bridge](https://github.com/eighteentang/dsh-plugin-im-bridge) | 0 | 2026-10-07 | 2026-10-08 | 把 QQ / 微信等 IM 接成 DSH 的对话入口：手机上给机器人发消息，电脑上的 agent 干活（QQ 与微信可收发并接 agent，企微 / 飞书 / 钉钉目前只能收） |
| 67 | [elegant01/agent-acta](https://github.com/elegant01/agent-acta) | 0 | 2026-10-08 | 2026-10-08 | 本地 AI agent 请求日志面板 |
| 68 | [elegant01/dsh-codearts](https://github.com/elegant01/dsh-codearts) | 0 | 2026-09-30 | 2026-10-08 | dsh-plugin, 在DSH中使用华为codearts的积分，token, |
| 69 | [Endless-zby/dsh-jenkins-plugin](https://github.com/Endless-zby/dsh-jenkins-plugin) | 0 | 2026-10-08 | 2026-10-08 | dsh-jenkins-plugin |
| 70 | [Everglow28/dsh-glm-quota-dock](https://github.com/Everglow28/dsh-glm-quota-dock) | 0 | 2026-10-08 | 2026-10-08 | GLM Coding Plan quota pill for the DeepSeek Harness web GUI - real-time per-window usage in the composer stats row |
| 71 | [EvilJoker/dsh-experimental-computer-use-linux-nde-mcp](https://github.com/EvilJoker/dsh-experimental-computer-use-linux-nde-mcp) | 0 | 2026-09-30 | 2026-10-08 | DSH Cordis computer-use provider that spawns the Nde-adapted musl binary from computer-use-linux-zte-nde v0.7.7-nde.3 (downloaded at npm install). Published as @ashtonsun/dsh-experimental-computer-use-linux-nde-mcp on npmjs. |
| 72 | [Faide-cyber/dsh-workbuddy](https://github.com/Faide-cyber/dsh-workbuddy) | 0 | 2026-10-08 | 2026-10-08 | DSH WorkBuddy - bring WorkBuddy (domestic + international) models into DeepSeek Harness. Browser OAuth, multi-account, free models by default. |
| 73 | [fanjinduo111/dsh-service-board](https://github.com/fanjinduo111/dsh-service-board) | 0 | 2026-10-08 | 2026-10-08 | DSH（DeepSeek Harness）服务面板插件：按会话查看由哪个 Agent 会话启动了哪些服务，三态健康点 + HTTP 码、启动时间与运行时长、礼貌停止、实时日志带、原地重启并重放原命令行。基于上游 dsh-process-board 的补丁分叉（Windows）：修好重启后日志失效、扫描器误合并同名启动器、面板抢走输入框焦点。A docked DSH service panel plugin. |
| 74 | [Femad-6/dsh-lumen-market](https://github.com/Femad-6/dsh-lumen-market) | 0 | 2026-10-08 | 2026-10-08 | 流明市场：DSH 插件发现、介绍与文档、GitHub 仓库查验，以及官方管线安装和更新。 |
| 75 | [Free-LZJ/free-dsh-plugins](https://github.com/Free-LZJ/free-dsh-plugins) | 0 | 2026-09-29 | 2026-10-08 | DeepSeek Harness (dsh) plugins: import Codex and Claude Code MCP servers and skills, with a Plugins-page card |
| 76 | [fuqiancheng/dsh-commandcode-quota](https://github.com/fuqiancheng/dsh-commandcode-quota) | 0 | 2026-10-08 | 2026-10-08 | Command Code balance and quota panel for DeepSeek Harness: balance and the 5-hour, weekly and monthly windows as a status row under the composer. |
| 77 | [Fyue7/dsh-emotion](https://github.com/Fyue7/dsh-emotion) | 0 | 2026-10-08 | 2026-10-08 | 让 DSH agent 的输出自带情绪：会话投影情绪状态机 + 两段提示词注入 + 会话头部情绪条，附文本蒸馏流水线（两轨蒸馏 / 保真门 / 输出护栏）。非官方插件。 |
| 78 | [gh-gongjin/dsh-plugin-appearance](https://github.com/gh-gongjin/dsh-plugin-appearance) | 0 | 2026-10-04 | 2026-10-08 | DSH (DeepSeek Harness) 外观插件：8 张内置配色皮肤走宿主官方主题通道，brand slot 换侧栏/首屏标志与名称行（内置六枚或用户自己的图片）。零第三方依赖，不写宿主文件、不注入全局 CSS。 |
| 79 | [gh-gongjin/dsh-plugin-gh-trending](https://github.com/gh-gongjin/dsh-plugin-gh-trending) | 0 | 2026-10-07 | 2026-10-08 | dsh 插件：GitHub 日/周/月热榜监控 + 仓库详情中文描述与 README 节译（全程只读 GET） |
| 80 | [ghgjkbf/dsh-session-deleter](https://github.com/ghgjkbf/dsh-session-deleter) | 0 | 2026-09-25 | 2026-10-08 | Delete stored DSH sessions and individual messages from the web UI: recycle bin by default; per-message shadow (line A) and truncate (line B) with reversibility. |
| 81 | [gygygfg/dsh-winstage-sandbox](https://github.com/gygygfg/dsh-winstage-sandbox) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: Windows staging-candidate-selective-commit sandbox (files + registry) with a review panel |
| 82 | [helloHupc/dsh-git-branch](https://github.com/helloHupc/dsh-git-branch) | 0 | 2026-10-08 | 2026-10-08 | DSH 插件：在对话框工具行、权限选择框右侧只读显示当前项目的 git 分支；目录不是仓库时不显示。 |
| 83 | [hh719509125/deepseek_harness_plugin](https://github.com/hh719509125/deepseek_harness_plugin) | 0 | 2026-10-07 | 2026-10-08 | DeepSeek Harness (DSH) 插件集：GitHub 连接器 —— 用 Personal Access Token 只读访问 GitHub 的四个工具。文本编辑器插件已独立成仓：hh719509125/dsh-preview-editor。DSH plugins: read-only GitHub tools for DeepSeek Harness. |
| 84 | [hh719509125/dsh-preview-editor](https://github.com/hh719509125/dsh-preview-editor) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness (DSH) 文档编辑插件：在右侧栏的文档预览里就地编辑文本文件并保存，支持 Ctrl+S、冲突保护、行尾逐字节保留。In-place document editor for the DSH Sidebar preview: Ctrl+S, conflict protection, byte-exact line-ending preservation. |
| 85 | [Hope-Phenom/dsh-plugin-notify](https://github.com/Hope-Phenom/dsh-plugin-notify) | 0 | 2026-10-08 | 2026-10-08 | 一个标准的 DeepSeek Harness 插件：每轮回答结束时发一条桌面通知。A standard DeepSeek Harness plugin that posts a desktop notification whenever a turn ends. |
| 86 | [HsgtLgt/dsh-plugin-screenshot](https://github.com/HsgtLgt/dsh-plugin-screenshot) | 0 | 2026-10-08 | 2026-10-08 | 面向模型的「截图」工具插件（DeepSeek Harness，Windows 宿主）。  注册一个 screenshot 工具，让会话里的 AI 能真正「看见」并展示你的屏幕。 |
| 87 | [huangxp12/dsh-plugin-search](https://github.com/huangxp12/dsh-plugin-search) | 0 | 2026-10-08 | 2026-10-08 | Keyword search for the DeepSeek Harness Plugins page: filter installed and official plugins by name, description, or package name. · 给 DSH「插件」页加上关键词搜索。 |
| 88 | [huhu23333/dsh-plugin-subagent-model-route](https://github.com/huhu23333/dsh-plugin-subagent-model-route) | 0 | 2026-10-08 | 2026-10-08 | DSH client plugin: annotate every subagent with the model route it actually ran on (parent-catalog rows + child session header). |
| 89 | [icrefin/dsh-notify-push](https://github.com/icrefin/dsh-notify-push) | 0 | 2026-10-08 | 2026-10-08 | Push DeepSeek Harness agent notifications to your phone and watch via ntfy, Bark, Gotify, Telegram or a webhook. |
| 90 | [ImHaoYuan/dsh-mobile-mirror](https://github.com/ImHaoYuan/dsh-mobile-mirror) | 0 | 2026-10-07 | 2026-10-08 | DSH 插件：一键搭建局域网服务器，手机浏览器直连，也可下载调试版 App |
| 91 | [iuuuuuuuu/dsh-session-handoff](https://github.com/iuuuuuuuu/dsh-session-handoff) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: memory-preserving session handoff. Carries a conversation into a fresh session before it becomes unusable, and rescues sessions that already are. |
| 92 | [jessicacui99/dsh-plugin-token-cost](https://github.com/jessicacui99/dsh-plugin-token-cost) | 0 | 2026-10-08 | 2026-10-08 | Live token spend for the current DSH session, priced with your profile's table and shown beside the composer. |
| 93 | [Jimmyliweihao/dsh-aurora-effort-slider](https://github.com/Jimmyliweihao/dsh-aurora-effort-slider) | 0 | 2026-10-08 | 2026-10-08 | 把 DeepSeek Harness 模型座位的「推理等级」换成一条可直接拖动的星河滑轨：极光填充、粒子曲速、MAX 蓄能光环 / A draggable aurora starfield slider for the DSH reasoning-effort row |
| 94 | [jingkun05/dsh-session-delete-native](https://github.com/jingkun05/dsh-session-delete-native) | 0 | 2026-10-08 | 2026-10-08 | Sidebar session deletion for DeepSeek Harness — a native "Delete session" row in the Session "…" menu. UI-only, registers no agent tools. |
| 95 | [jyb114/pocket-bridge](https://github.com/jyb114/pocket-bridge) | 0 | 2026-09-26 | 2026-10-08 | A lightweight, encrypted phone interface for DeepSeek Harness on your Windows PC, with an optional DSH Settings plugin for pairing, gateway controls, and diagnostics. |
| 96 | [kee0012/dsh-restart](https://github.com/kee0012/dsh-restart) | 0 | 2026-10-08 | 2026-10-08 | DSH 桌面版标题栏重启按钮：一键重启整个应用（含 shell 与宿主进程）。 |
| 97 | [kee0012/dsh-science-skill](https://github.com/kee0012/dsh-science-skill) | 0 | 2026-10-08 | 2026-10-08 | 科研技能中心 for DeepSeek Harness：技能目录、分类、按会话启用门控，以及用户可调用的 /command 技能栏。 |
| 98 | [kee0012/expert-team](https://github.com/kee0012/expert-team) | 0 | 2026-10-08 | 2026-10-08 | DSH 专家团插件：把一支多角色专家团队装进当前会话 —— 团队画廊、成员名册、一键召唤，每位专家在独立子会话中并行工作，主会话汇总产出。 |
| 99 | [Kerberos255/dsh-browser-tools](https://github.com/Kerberos255/dsh-browser-tools) | 0 | 2026-10-08 | 2026-10-08 | 连接已启动的浏览器，通过结构快照、引用、原生审批与截图完成网页操作。 |
| 100 | [Kerberos255/dsh-channel-core](https://github.com/Kerberos255/dsh-channel-core) | 0 | 2026-10-08 | 2026-10-08 | 统一管理 Discord、飞书渠道、会话绑定、消息交付与进度卡片的单插件。 |
| 101 | [Kerberos255/dsh-instruction-files](https://github.com/Kerberos255/dsh-instruction-files) | 0 | 2026-10-08 | 2026-10-08 | 配置指令文件自动更新、角色的独立工作区和新会话默认模型与权限。 |
| 102 | [Kerberos255/dsh-lossless-context](https://github.com/Kerberos255/dsh-lossless-context) | 0 | 2026-10-08 | 2026-10-08 | 使用原生压缩引擎分层整理上下文，保留原始会话并提供检索与展开。 |
| 103 | [Kerberos255/dsh-memory-dreaming](https://github.com/Kerberos255/dsh-memory-dreaming) | 0 | 2026-10-08 | 2026-10-08 | 从原生会话整理日常记忆、Dream 与每周复查，保留出处并审阅长期事实。 |
| 104 | [Kerberos255/dsh-skill-workshop](https://github.com/Kerberos255/dsh-skill-workshop) | 0 | 2026-10-08 | 2026-10-08 | 从日常工作自动提炼、发布和更新技能，按使用情况整理受管技能；也支持手工编辑与导入。 |
| 105 | [Kerberos255/dsh-status-cards](https://github.com/Kerberos255/dsh-status-cards) | 0 | 2026-10-08 | 2026-10-08 | 统一查看运行状态，并在原有边缘卡片查看 OpenCode Go 额度和 DeepSeek 余额。 |
| 106 | [kissazi2/dsh-personalization-local](https://github.com/kissazi2/dsh-personalization-local) | 0 | 2026-10-08 | 2026-10-08 | dsh个性化插件 |
| 107 | [korosu/dsh-web-search-ddg](https://github.com/korosu/dsh-web-search-ddg) | 0 | 2026-10-08 | 2026-10-08 | Keyless DuckDuckGo HTML-scrape web_search provider for the DeepSeek Harness (ctx.web seam): no API key, no extra model turn, one command to install. |
| 108 | [Kuaizr/dsh-vps-live](https://github.com/Kuaizr/dsh-vps-live) | 0 | 2026-10-08 | 2026-10-08 | Codex-style live browser &amp; desktop mirror for DeepSeek Harness |
| 109 | [leolee9086/dsh-bazaar](https://github.com/leolee9086/dsh-bazaar) | 0 | 2026-10-04 | 2026-10-08 | DeepSeek Harness plugin bazaar with GitHub discovery and official plugin installation |
| 110 | [leolee9086/dsh-fetch-router](https://github.com/leolee9086/dsh-fetch-router) | 0 | 2026-09-14 | 2026-10-08 | DSH plugin: route and rewrite outbound HTTP requests by host and path, with a native right-sidebar monitor |
| 111 | [leolee9086/dsh-tool-everything](https://github.com/leolee9086/dsh-tool-everything) | 0 | 2026-09-25 | 2026-10-08 | DSH plugin: instant file search via the Everything HTTP API |
| 112 | [leolee9086/dsh-tool-websearch](https://github.com/leolee9086/dsh-tool-websearch) | 0 | 2026-09-25 | 2026-10-08 | DSH metasearch plugin: 200+ engines, no API key |
| 113 | [letterk/dsh-adhd-mode](https://github.com/letterk/dsh-adhd-mode) | 0 | 2026-10-08 | 2026-10-08 | ADHD-friendly output style for DeepSeek Harness: a system-prompt hook, a live switch, and a settings page. |
| 114 | [linglanxin/dsh-aiagent-taskboard](https://github.com/linglanxin/dsh-aiagent-taskboard) | 0 | 2026-10-08 | 2026-10-08 | Minimal live taskboard plugin for DSH (DeepSeek Harness): what Claude Code / Codex / DSH / Open Design are doing right now - list + swimlane timeline. |
| 115 | [liumorrisclaw/dsh-composer-input-history](https://github.com/liumorrisclaw/dsh-composer-input-history) | 0 | 2026-10-07 | 2026-10-08 | Shell-style input history for the DeepSeek Harness Web composer: ArrowUp recalls messages already sent in the Session, ArrowDown restores your draft. |
| 116 | [llafztq/dsh-video-tool](https://github.com/llafztq/dsh-video-tool) | 0 | 2026-10-08 | 2026-10-08 | Video editing toolset for DeepSeek Harness - trim, concat, audio, subtitles, transform, transcode and frame grabbing, powered by ffmpeg. |
| 117 | [LostAbaddon/dsh-llm-proxy-router](https://github.com/LostAbaddon/dsh-llm-proxy-router) | 0 | 2026-10-08 | 2026-10-08 | DSH的自动切换Proxy插件 |
| 118 | [marsma-101/dsh-qoder-connect](https://github.com/marsma-101/dsh-qoder-connect) | 0 | 2026-10-06 | 2026-10-08 | Bring Qoder CN desktop-app models into DeepSeek Harness: decrypt the OSCrypt local sign-in, sign requests with the COSY scheme, and register a Qoder model group. No OAuth interaction needed. |
| 119 | [marsma-101/dsh-trae-connect](https://github.com/marsma-101/dsh-trae-connect) | 0 | 2026-10-06 | 2026-10-08 | Bring Trae CN desktop-app models into DeepSeek Harness: decrypt the local sign-in, translate the remote-session protocol behind a loopback OpenAI-compatible shim, register a Trae model group. |
| 120 | [Matthew-Laplace/dsh-ark-pet](https://github.com/Matthew-Laplace/dsh-ark-pet) | 0 | 2026-10-08 | 2026-10-08 | DSH 方舟桌宠：干员库按需下载、自定义 Codex 图集与普通图片导入。Arknights library and custom image pets for DeepSeek Harness. |
| 121 | [Mchsd/dsh-qqbot-yuro](https://github.com/Mchsd/dsh-qqbot-yuro) | 0 | 2026-08-23 | 2026-10-08 | Yuro 拟人化 QQ 群聊机器人插件：情绪/作息/画像/预算/识图/技能自进化，基于 DeepSeek Harness (DSH) qqbot 通道 |
| 122 | [miiy/dsh-terminal-keybar](https://github.com/miiy/dsh-terminal-keybar) | 0 | 2026-10-08 | 2026-10-08 | A touch key bar for the DSH Web terminal.  |
| 123 | [NianjunZou/dsh-session-manager](https://github.com/NianjunZou/dsh-session-manager) | 0 | 2026-10-08 | 2026-10-08 | Codex-style left session manager for DSH — a reversible left-workspace UI overlay with a pinned section, project-session grouping and status dots. |
| 124 | [NutshellLee/dsh-voice-mode-desktop](https://github.com/NutshellLee/dsh-voice-mode-desktop) | 0 | 2026-09-30 | 2026-10-08 | DSH 0.2 桌面版语音插件（dsh-voice-mode 的非官方兼容分支）：流式识别入草稿、按句朗读 + 实时字幕、开口即打断，另含 ASR 纠错词表与整段丢字修复。 · Unofficial dsh-voice-mode port for the DSH 0.2 desktop app: streaming ASR into the draft, per-sentence TTS with live captions, true barge-in, plus a local ASR correction dictionary. |
| 125 | [Octen-Team/dsh-octen](https://github.com/Octen-Team/dsh-octen) | 0 | 2026-10-08 | 2026-10-08 | Octen web search and fetch for DeepSeek Harness: web_search via Octen /search, web_fetch via Octen /extract. |
| 126 | [OraSkyC/dsh-bundle-default-workspace](https://github.com/OraSkyC/dsh-bundle-default-workspace) | 0 | 2026-10-08 | 2026-10-08 | A DeepSeek Harness plugin that gives the small miscellaneous stuff one default workspace — with an AGENTS.md top-level rule and a default_workspace agent tool. |
| 127 | [OraSkyC/dsh-bundle-memory](https://github.com/OraSkyC/dsh-bundle-memory) | 0 | 2026-10-08 | 2026-10-08 | Workspace-local memory for DeepSeek Harness: an agent-managed ./memory/ store with an auto-generated MEMORY.md index, subdirectories created on demand, and four tools (save / recall / search / forget). |
| 128 | [OraSkyC/dsh-bundle-screen-view](https://github.com/OraSkyC/dsh-bundle-screen-view) | 0 | 2026-10-08 | 2026-10-08 | Desktop Control for DeepSeek Harness: screenshot and window listing, plus real mouse and keyboard control — with safety gates and a settings card to turn input off. Windows only. |
| 129 | [oumaekumiko0821/dsh-splash-gojo](https://github.com/oumaekumiko0821/dsh-splash-gojo) | 0 | 2026-10-07 | 2026-10-08 | DeepSeek Harness 开机动画插件 · Full-screen boot splash for DeepSeek Harness — 图片内联、零运行依赖、纯 host 半边 |
| 130 | [paayton/dsh-link](https://github.com/paayton/dsh-link) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness 移动端 H5 桥接插件：手机浏览器经内网 / Tailscale 用连接密钥接入桌面版正在运行的会话（流式回复、Markdown、工具卡、图片上传）。 |
| 131 | [PerryLink/dsh-phocinae](https://github.com/PerryLink/dsh-phocinae) | 0 | 2026-10-08 | 2026-10-08 | Local non-generative decision layer for DeepSeek Harness: phocinae_ask / phocinae_gate tools plus a fail-closed approval gate |
| 132 | [pridurok-goxa/dsh-tweaks](https://github.com/pridurok-goxa/dsh-tweaks) | 0 | 2026-10-08 | 2026-10-08 | Набор твиков DeepSeek Harness: масштаб интерфейса, дальше — перевод и другое. Каждый твик включается отдельно. |
| 133 | [publicwww-com/dsh-publicwww](https://github.com/publicwww-com/dsh-publicwww) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness plugin: search the source code of hundreds of millions of websites with PublicWWW |
| 134 | [qiz42144-web/dsh-ai-curfew](https://github.com/qiz42144-web/dsh-ai-curfew) | 0 | 2026-10-08 | 2026-10-08 | AI 也要下班。到点话越来越少，凌晨三点只剩一句「明天再说」；已下班照样收消息，只是只回一个「。」 |
| 135 | [raymondkm2025/dsh-go-game](https://github.com/raymondkm2025/dsh-go-game) | 0 | 2026-10-07 | 2026-10-08 | Go (圍棋) plugin for the DeepSeek Harness: full rules engine, three-level AI, dead-stone estimator, LLM review, SGF, and an optional KataGo GTP bridge |
| 136 | [Respawn-ID/dsh-rhine-splash](https://github.com/Respawn-ID/dsh-rhine-splash) | 0 | 2026-10-08 | 2026-10-08 | Rhine Lab style boot splash bundle for DeepSeek Harness desktop — 莱茵生命风格的 DeepSeek Harness 开屏动画插件 |
| 137 | [ruaibeite/dsh-files-to-chat](https://github.com/ruaibeite/dsh-files-to-chat) | 0 | 2026-10-08 | 2026-10-08 | Right-click a file or folder in the DSH right sidebar file tree to add it to the conversation as an @ reference, with multi-select batch insertion. |
| 138 | [ruaibeite/dsh-undo](https://github.com/ruaibeite/dsh-undo) | 0 | 2026-10-08 | 2026-10-08 | Turn-level file undo for DeepSeek Harness: every write and edit is snapshotted before it lands, and the model can call the undo tool to roll back all files a conversation turn changed. |
| 139 | [sbVAN/dsh-skill-mimo](https://github.com/sbVAN/dsh-skill-mimo) | 0 | 2026-10-08 | 2026-10-08 | 将每个MiMo Desktop / MiMoCode skill读取到 DeepSeek Harness 会话技能目录中。Reads every Xiaomi MiMo (MiMo Desktop / MiMoCode) skill into the DeepSeek Harness session skill catalog. |
| 140 | [seonzzy/dsh-zen-adapter](https://github.com/seonzzy/dsh-zen-adapter) | 0 | 2026-10-08 | 2026-10-08 | OpenCode Zen free models for DeepSeek Harness, with live catalog discovery and no dependencies. |
| 141 | [SHADOW-LI0327/dsh-process-kit](https://github.com/SHADOW-LI0327/dsh-process-kit) | 0 | 2026-10-08 | 2026-10-08 | 面向任意仓库的开发流程增强插件：以文件状态机驱动，内置 7 角色 Subagent、门禁脚本与 GUI 状态看板；仅执行确定性读取、渲染、安全追加与脚手架落地。 |
| 142 | [shenjackyuanjie/dsh-openrouter-service-tier](https://github.com/shenjackyuanjie/dsh-openrouter-service-tier) | 0 | 2026-10-07 | 2026-10-08 | DeepSeek Harness 原生 OpenRouter service tier 控制插件，兼容 0.2.0-rc.2 与 0.2.1-alpha.1 |
| 143 | [SiteEnglish10/DSHCordis](https://github.com/SiteEnglish10/DSHCordis) | 0 | 2026-10-08 | 2026-10-08 | DeepSeekHarness 插件 |
| 144 | [Smallballoons01/dsh-idle-scholar](https://github.com/Smallballoons01/dsh-idle-scholar) | 0 | 2026-10-08 | 2026-10-08 | Idle-time micro-learning for DeepSeek Harness: turns agent waiting gaps into study cards. Ships English, Japanese, and 法考 (Chinese National Judicial Examination) seed decks; extensible with JSON course packs. |
| 145 | [Smallballoons01/echo-notes](https://github.com/Smallballoons01/echo-notes) | 0 | 2026-10-08 | 2026-10-08 | Emotion-first encrypted diary plugin for DeepSeek Harness: templates, mood browsing, writing reminders, MCP adapter |
| 146 | [smter/dsh-codebase-memory](https://github.com/smter/dsh-codebase-memory) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness plugin: connects the codebase-memory-mcp code graph, nudges the model at the decision point, corrects failed MCP calls, and indexes repositories by itself. |
| 147 | [solstice621/dsh-openai-auth](https://github.com/solstice621/dsh-openai-auth) | 0 | 2026-10-08 | 2026-10-08 | OpenAI / Codex ChatGPT subscription auth for DeepSeek Harness Desktop, with native account and quota UI. |
| 148 | [stargacha/stargacha-](https://github.com/stargacha/stargacha-) | 0 | 2026-10-08 | 2026-10-08 | 星穹召唤 · DeepSeek Harness (dsh) 插件：二次元抽卡 + 和抽到的角色聊天 \| A dsh plugin: anime gacha cards you can chat with   |
| 149 | [StarterMonk/dsh-adhd-session-mode](https://github.com/StarterMonk/dsh-adhd-session-mode) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness plugin converted from ayghri/i-have-adhd: ADHD-friendly output shaping that takes effect in a single session, never globally. |
| 150 | [sumingwang233/dsh-code-review-graph](https://github.com/sumingwang233/dsh-code-review-graph) | 0 | 2026-10-08 | 2026-10-08 | Native DeepSeek Harness code intelligence, review workflows and interactive graphs powered by Code Review Graph |
| 151 | [Tangcuyu4/dsh-area-progress](https://github.com/Tangcuyu4/dsh-area-progress) | 0 | 2026-10-08 | 2026-10-08 | DSH 跨工作区任务进度查看器：全区概览、跨区任务进度详情、异常与待办扫描，只读会话日志 |
| 152 | [Tangcuyu4/dsh-cuoti](https://github.com/Tangcuyu4/dsh-cuoti) | 0 | 2026-10-08 | 2026-10-08 | DSH 错题本插件：坑、根因、解法与预防守则钉进提示词，同样的错不犯第二遍 |
| 153 | [Tangcuyu4/dsh-im-alive](https://github.com/Tangcuyu4/dsh-im-alive) | 0 | 2026-10-08 | 2026-10-08 | DSH IM 主动消息守护进程：不定时发家常主动消息，抖动间隔、免打扰时段、日预算、防重复 |
| 154 | [tangu2023/dsh-menu](https://github.com/tangu2023/dsh-menu) | 0 | 2026-10-01 | 2026-10-08 | DeepSeek Harness 插件：为侧边栏「工作区文件」提供自定义右键菜单（新建文件夹 / 重命名 / 在文件管理器中显示 / 浏览器打开 / VS Code 打开 / 复制路径 / 下载 ZIP / 删除），零依赖、无构建步骤。 |
| 155 | [Tonywqs/dsh-session-folders](https://github.com/Tonywqs/dsh-session-folders) | 0 | 2026-10-08 | 2026-10-08 | 每个 DSH 会话一个时间戳产物目录：会话留在原工作区，插件注入「产物目录」规则；可选硬隔离模式。 Per-conversation output directories for DeepSeek Harness sessions. |
| 156 | [Travizm/dsh-openai-live](https://github.com/Travizm/dsh-openai-live) | 0 | 2026-10-07 | 2026-10-08 | Full-duplex voice for DeepSeek Harness: a realtime capability seam, a GPT-Live-1 adapter, and a keyless replay backend. |
| 157 | [Twofruitsgrape/dsh-comsol](https://github.com/Twofruitsgrape/dsh-comsol) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: drive COMSOL Multiphysics end to end (steady + transient workflows) with a bundled MCP engine |
| 158 | [underworld-oddball/dsh-volume-knob](https://github.com/underworld-oddball/dsh-volume-knob) | 0 | 2026-09-27 | 2026-10-08 | Read the newest turn aloud from the DSH composer |
| 159 | [VCPr0j3k7/dsh-workflow-studio](https://github.com/VCPr0j3k7/dsh-workflow-studio) | 0 | 2026-10-08 | 2026-10-08 | Workflow Studio for the DeepSeek Harness desktop shell - launch workflows with /workflow and watch every subagent's work and structure on a live board |
| 160 | [wang6077/dsh-ide-vscode](https://github.com/wang6077/dsh-ide-vscode) | 0 | 2026-10-08 | 2026-10-08 | DSH 右栏内置 IDE 插件：左文件树 + 右编辑区，右键新建文件/文件夹、重命名改后缀、删除，Ctrl+S 保存（中文界面） |
| 161 | [WhichWitchWin/dsh-power-button](https://github.com/WhichWitchWin/dsh-power-button) | 0 | 2026-10-07 | 2026-10-08 | 给 DSH 桌面版补一个可拖动的电源按钮：贴边自动收起，点开可重启或退出 DSH。Windows 专用、零依赖 · A draggable power button for DSH Desktop — latches to the window edge, click to restart or quit. |
| 162 | [winditer/dsh-recent-tasks](https://github.com/winditer/dsh-recent-tasks) | 0 | 2026-09-29 | 2026-10-08 | DSH 侧边栏常驻末位、可折叠的「最近任务」工作区分组：没有工作区的对话归到这里。/ An always-last, collapsible Recent tasks workspace group for the DSH sidebar. |
| 163 | [wjvalue/dsh-answer-me-with-html](https://github.com/wjvalue/dsh-answer-me-with-html) | 0 | 2026-10-08 | 2026-10-08 | Answer me with HTML as a DeepSeek Harness plugin: a skill-only bundle that answers hard questions with a one-page HTML. 让 DSH 用一页 HTML 回答复杂问题。 |
| 164 | [wobenshiwomu/dsh-tide](https://github.com/wobenshiwomu/dsh-tide) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness 插件：看时机的优雅暂停 —— 峰时提醒（15 秒窗口）、余额不足优雅降级停机、看门狗自动唤醒续跑。人机双交接，日志全留痕 \| Graceful pause on timing for DSH |
| 165 | [Wraindrock/dsh-ian-rules](https://github.com/Wraindrock/dsh-ian-rules) | 0 | 2026-09-21 | 2026-10-08 | DSH（DeepSeek Harness）个人插件：把你的项目开发规则交给 agent —— 右侧栏面板可视化维护（全局 + 按项目），并自动注入每个会话的系统提示。 |
| 166 | [xiaoming132887/dsh-rely](https://github.com/xiaoming132887/dsh-rely) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness 插件：输入框下方常驻显示 绿萝中转站 余额。支持阈值灯、可配置刷新间隔 |
| 167 | [xinyang20/dsh-decision-router](https://github.com/xinyang20/dsh-decision-router) | 0 | 2026-10-08 | 2026-10-08 | Decision-model-powered routing for DeepSeek Harness, with local inference and opt-in cloud decisions. |
| 168 | [xinyang20/dsh-project-space](https://github.com/xinyang20/dsh-project-space) | 0 | 2026-10-08 | 2026-10-08 | Workspace resource library for DeepSeek Harness: organize, preview and reuse references and deliverables. |
| 169 | [xuhao1/VibeWand](https://github.com/xuhao1/VibeWand) | 0 | 2026-10-04 | 2026-10-08 | Native macOS controller for AI workflows,includes Codex, deepseek harness |
| 170 | [xuxinxinpro/dsh-news-plugin](https://github.com/xuxinxinpro/dsh-news-plugin) | 0 | 2026-10-08 | 2026-10-08 | 每日新闻简报 DeepSeek Harness 插件 — 一键获取今日全国新闻热搜 |
| 171 | [xuzihao66/dsh-token-frugal](https://github.com/xuzihao66/dsh-token-frugal) | 0 | 2026-10-08 | 2026-10-08 | Cut the input-token cost of long DeepSeek Harness sessions: source-side tool-output compression on tools/post-execute plus per-agent tool-catalogue visibility, with a measurement script. |
| 172 | [yanggaihao5-sys/dsh-sci-figures](https://github.com/yanggaihao5-sys/dsh-sci-figures) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness skill: publication-quality scientific figures - CJK vector output, colorblind-safe palette, SciencePlots styling |
| 173 | [Yanshi-Robotics/yanshifu-plugin-cn](https://github.com/Yanshi-Robotics/yanshifu-plugin-cn) | 0 | 2026-10-08 | 2026-10-08 | 偃师傅八号：把《偃师傅的 SO-101 落地指南》等四份资料做成一个能问的 DSH 插件（中文版）。英文版见 yanshifu-plugin，尚未开放。 |
| 174 | [YE-ZINAN/dsh-wb](https://github.com/YE-ZINAN/dsh-wb) | 0 | 2026-10-08 | 2026-10-08 | 把 DeepSeek Harness 和 WorkBuddy 连起来：记忆/技能同步 + 无界面遥控 + 界面驱动（CDP）+ 对话面板，四合一插件。 |
| 175 | [YHzed/dsh-doc-annotate](https://github.com/YHzed/dsh-doc-annotate) | 0 | 2026-10-08 | 2026-10-08 | DSH plugin: open files in the right sidebar, annotate text selections or regions, and send annotations to the Agent conversation. |
| 176 | [zhangyy0423/dsh-veripipe](https://github.com/zhangyy0423/dsh-veripipe) | 0 | 2026-10-08 | 2026-10-08 | dsh plugin: per-turn receipts (todo counts, goal id, fail-closed plan verdict) that survive the next turn, plus a read-only veripipe_receipt tool. |
| 177 | [zi7tian/dsh_desktop_for_linux](https://github.com/zi7tian/dsh_desktop_for_linux) | 0 | 2026-10-07 | 2026-10-08 | Standalone Linux x86_64 desktop packaging for DeepSeek Harness — pinned upstream submodule, patches, deb/rpm/pkg.tar.zst |
| 178 | [zi7tian/dsh-deepseek-billing-period](https://github.com/zi7tian/dsh-deepseek-billing-period) | 0 | 2026-10-08 | 2026-10-08 | DeepSeek Harness (dsh) web plugin: shows whether DeepSeek API pricing is peak or off-peak, plus a countdown to the next switch, below the composer. |
| 179 | [zizhuang/dsh-file-dedupe](https://github.com/zizhuang/dsh-file-dedupe) | 0 | 2026-10-08 | 2026-10-08 | AI生成。DSH 文件查重插件：按 SHA-256 内容哈希找出重复文件，可视化面板 + 对话工具，隔离区可恢复 \| DSH file dedupe plugin |
| 180 | [zouzhipeng/dsh-npm-script](https://github.com/zouzhipeng/dsh-npm-script) | 0 | 2026-10-06 | 2026-10-08 | Floating panel for the DeepSeek Harness Web UI that lists, runs, and tails this workspace's npm scripts, with clickable output links |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- an4nsi/dsh-fork-view
- beicause/dsh-workspace-write-extra
- bobjia/dsh-context-milvus
- CNSeniorious000/dsh-generative-ui
- Fivezy2005/dsh-plugin-updater
- Grant-Felix/dsh-ian-rules
- haotian-lu-prog/dsh-cold-backup
- haotian-lu-prog/dsh-update-plugin
- JoblessJoe/dsh-llm-ollama-native
- Johnnylin2121/dsh-agent
- k53689649-lab/dsh-splash-gojo
- ming-14/dsh-forwarder
- Minglink/dsh-infinite-gen-4
- Sev7eEn7/sieve
- Tazio7/dsh-web-search-glm
- underworld-oddball/sh-volume-shuff
- wangxiang0605qvq/dsh-auto-compact
- wangxiang0605qvq/dsh-clock
- wangxiang0605qvq/dsh-deepseek-balance
- wangxiang0605qvq/dsh-session-history
- wowyuarm/dsh-agent-team
- yefeng7531/dsh-image-gen
- ZhangBo-cmd/dsh-coros-badge
- zisekongling/deepseek-peak-blocker
