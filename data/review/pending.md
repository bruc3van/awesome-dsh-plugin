# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-27**
- 快照日期 / Snapshot date: **2026-09-27 (UTC)**
- 待审核 / Pending: **161**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **16**
- Star 异常增长 / Star-growth alerts: **7** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-26** / vs previous snapshot **2026-09-26**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **7**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [voyager-crew/voyager](https://github.com/voyager-crew/voyager) | 待审 / pending | 20232 | +25 | 675 | 357d | 待审高星 | 核准即 Top 1 |
| ⚠️ [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) | 已核准 / approved | 1662 | +423 | 164 | 43d | 日增百星 | 日增 +423★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 9958 | +362 | 392 | 44d | 日增百星 | 日增 +362★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 3619 | +297 | 223 | 44d | 日增百星 | 日增 +297★ |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7487 | +146 | 534 | 96d | 日增百星 | 日增 +146★；已不进榜单 |
| ⚠️ [chiphoton/DeepSeek-Harness-Video-Director](https://github.com/chiphoton/DeepSeek-Harness-Video-Director) | 已核准 / approved | 67 | +67 | 0 | 44d | 新入 Top 200 | 新入 Top 200 #190 |
| ⚠️ [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) | 已核准 / approved | 638 | +10 | 53 | 40d | 冲入 Top 20 | 冲入 Top 20（21→20） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [voyager-crew/voyager](https://github.com/voyager-crew/voyager) ⚠️ | 20232 | 2025-10-04 | 2026-09-27 | Enhancement suite for Gemini, AI Studio, Claude, ChatGPT &amp; DeepSeek — plus a prompt manager for any website, DeepSeek Harness included. / 面向 Gemini、AI Studio、Claude、ChatGPT 与 DeepSeek 的增强套件；其中的提示词管理器可用于任意网站，如 DeepSeek Harness。 |
| 2 | [Finderchangchang/brewreel](https://github.com/Finderchangchang/brewreel) | 65 | 2026-09-26 | 2026-09-27 | 精酿 BrewReel：让 DeepSeek 这类便宜模型也能做出好看的竖版宣传片。写一份产品简报，AI 挑镜头、写文案，一条命令出片。3 种配方、6 个行业、广告法校验，开源可商用。 |
| 3 | [hikarioyama/Smart-DSH](https://github.com/hikarioyama/Smart-DSH) | 32 | 2026-09-06 | 2026-09-27 | Unofficial DeepSeek Harness plugin: mobile-friendly UI, Web Push notifications, and Linux Tailscale setup guide |
| 4 | [OMSociety/dsh-kimi-ppt](https://github.com/OMSociety/dsh-kimi-ppt) | 7 | 2026-09-03 | 2026-09-27 | 基于 open-kimi-ppt 技能开发：创建 / 编辑 / 复刻 / 导出 PPT |
| 5 | [jamesxxx-ai/ashare-agent](https://github.com/jamesxxx-ai/ashare-agent) | 5 | 2026-08-17 | 2026-09-27 | 基于 DeepSeek Harness + AKShare 的本地 A 股 AI Agent 工作台：数据获取 / 每日晨报 / 交易复盘三大技能，只做分析、不做交易。 |
| 6 | [xianyuyijinban/boardwise](https://github.com/xianyuyijinban/boardwise) | 5 | 2026-09-22 | 2026-09-27 | AI harness for EasyEDA Pro — offline schematic/PCB design review, live bridge (daemon + editor extension), review-to-local-edit with verified persistence |
| 7 | [elangan1997-cmyk/dsh-canvas-suite](https://github.com/elangan1997-cmyk/dsh-canvas-suite) | 3 | 2026-08-30 | 2026-09-27 | 本地生图工作台(Lovart 平价平替):开自己的 API 生图,画布排版+修图/去背景/OCR/转矢量,可编辑 PSD/AI 交付,PS/AI 图层级双向桥接 · DSH 插件 npm: canvas-workbench |
| 8 | [133563825as-ai/oha-whale-compress](https://github.com/133563825as-ai/oha-whale-compress) | 2 | 2026-09-10 | 2026-09-27 | DeepSeek Harness「压缩会话」插件：自定义 token 阈值自动压缩、一键压缩当前会话、输入框常驻按钮可开关。哦鲸鲸出品。 |
| 9 | [dpskk2/dsh-chatsync](https://github.com/dpskk2/dsh-chatsync) | 2 | 2026-09-01 | 2026-09-27 | DSH 接着聊：换台电脑，聊天和项目一起接着做。通过自己的 GitHub 私有仓库同步会话、附件、工作区文件和设置。 |
| 10 | [wbb316/dsh-novel](https://github.com/wbb316/dsh-novel) | 2 | 2026-09-27 | 2026-09-27 | DSH 插件：小说创作台 —— 给 agent 5 个 novel_* 工具 + 一个能改设定、画关系图、一键续写并流式直播的右侧栏面板 |
| 11 | [173787247/dsh-device-bridge](https://github.com/173787247/dsh-device-bridge) | 1 | 2026-09-24 | 2026-09-27 | DeepSeek Harness plugin: dsh-device-bridge |
| 12 | [173787247/dsh-mac-companion](https://github.com/173787247/dsh-mac-companion) | 1 | 2026-09-24 | 2026-09-27 | DeepSeek Harness plugin: dsh-mac-companion |
| 13 | [173787247/dsh-remote-ssh](https://github.com/173787247/dsh-remote-ssh) | 1 | 2026-09-24 | 2026-09-27 | DeepSeek Harness plugin: dsh-remote-ssh |
| 14 | [173787247/dsh-wsl-clock](https://github.com/173787247/dsh-wsl-clock) | 1 | 2026-08-31 | 2026-09-27 | Detect WSL2 clock drift that breaks TLS and tokens after sleep. |
| 15 | [173787247/dsh-wsl-defender](https://github.com/173787247/dsh-wsl-defender) | 1 | 2026-09-27 | 2026-09-27 | Windows security posture from WSL: Defender antivirus status and firewall profile state. |
| 16 | [173787247/dsh-wsl-dns](https://github.com/173787247/dsh-wsl-dns) | 1 | 2026-08-31 | 2026-09-27 | Compare WSL vs Windows DNS resolution for common endpoints. |
| 17 | [173787247/dsh-wsl-docker](https://github.com/173787247/dsh-wsl-docker) | 1 | 2026-08-31 | 2026-09-27 | Report Docker Desktop vs WSL docker context confusion. |
| 18 | [173787247/dsh-wsl-download](https://github.com/173787247/dsh-wsl-download) | 1 | 2026-08-31 | 2026-09-27 | Copy a file from the Windows Downloads folder into the WSL workspace. |
| 19 | [173787247/dsh-wsl-editor](https://github.com/173787247/dsh-wsl-editor) | 1 | 2026-08-31 | 2026-09-27 | Open a WSL Linux path in Windows Cursor/VS Code/Notepad. |
| 20 | [173787247/dsh-wsl-encoding](https://github.com/173787247/dsh-wsl-encoding) | 1 | 2026-08-31 | 2026-09-27 | Diagnose UTF-8 vs Windows code-page issues for cmd/PowerShell. |
| 21 | [173787247/dsh-wsl-eventlog](https://github.com/173787247/dsh-wsl-eventlog) | 1 | 2026-09-27 | 2026-09-27 | Read recent Windows event log entries from WSL, by log name and level. |
| 22 | [173787247/dsh-wsl-expose](https://github.com/173787247/dsh-wsl-expose) | 1 | 2026-08-31 | 2026-09-27 | Advise or apply allowlisted Windows portproxy for exposing a WSL port. |
| 23 | [173787247/dsh-wsl-hostsvc](https://github.com/173787247/dsh-wsl-hostsvc) | 1 | 2026-08-31 | 2026-09-27 | Probe Windows-host services (Ollama, etc.) from WSL and suggest baseURL. |
| 24 | [173787247/dsh-wsl-mnt](https://github.com/173787247/dsh-wsl-mnt) | 1 | 2026-08-31 | 2026-09-27 | Warn when the workspace lives on slow /mnt/c and suggest a Linux home path. |
| 25 | [173787247/dsh-wsl-perf](https://github.com/173787247/dsh-wsl-perf) | 1 | 2026-09-27 | 2026-09-27 | Windows host performance counters from WSL: CPU, memory, disk and top processes. |
| 26 | [173787247/dsh-wsl-picker](https://github.com/173787247/dsh-wsl-picker) | 1 | 2026-08-31 | 2026-09-27 | Browse WSL directories from / and /mnt drives for workspace picking. |
| 27 | [173787247/dsh-wsl-power](https://github.com/173787247/dsh-wsl-power) | 1 | 2026-09-27 | 2026-09-27 | Windows power state from WSL: active power plan, battery status and sleep settings. |
| 28 | [173787247/dsh-wsl-registry](https://github.com/173787247/dsh-wsl-registry) | 1 | 2026-09-27 | 2026-09-27 | Read-only Windows registry access from WSL, restricted to an allowlist of key prefixes. |
| 29 | [173787247/dsh-wsl-service](https://github.com/173787247/dsh-wsl-service) | 1 | 2026-09-27 | 2026-09-27 | Read Windows service state from WSL: list services and inspect one by name. |
| 30 | [173787247/dsh-wsl-shot](https://github.com/173787247/dsh-wsl-shot) | 1 | 2026-08-31 | 2026-09-27 | Save a Windows clipboard image into a WSL file for multimodal chat. |
| 31 | [173787247/dsh-wsl-ssh-agent](https://github.com/173787247/dsh-wsl-ssh-agent) | 1 | 2026-08-31 | 2026-09-27 | Hint how to forward Windows OpenSSH agent into WSL. |
| 32 | [173787247/dsh-wsl-tray](https://github.com/173787247/dsh-wsl-tray) | 1 | 2026-08-31 | 2026-09-27 | Install or report a Windows tray/shortcut launcher for dsh web in WSL. |
| 33 | [173787247/dsh-wsl-uia](https://github.com/173787247/dsh-wsl-uia) | 1 | 2026-09-27 | 2026-09-27 | Windows UI Automation observation from WSL: enumerate top-level windows and read a bounded element tree with per-observation handles. |
| 34 | [173787247/dsh-wsl-winctl](https://github.com/173787247/dsh-wsl-winctl) | 1 | 2026-09-27 | 2026-09-27 | Enumerate and control Windows top-level windows from WSL: activate, minimize, restore, move and resize. |
| 35 | [173787247/dsh-wsl-wininput](https://github.com/173787247/dsh-wsl-wininput) | 1 | 2026-09-27 | 2026-09-27 | Targeted Windows input from WSL: invoke a UI Automation element, or send keys and clicks to a chosen window without stealing focus. |
| 36 | [173787247/dsh-wsl-winshot](https://github.com/173787247/dsh-wsl-winshot) | 1 | 2026-09-27 | 2026-09-27 | Capture a specific Windows window to a WSL file, by process id or the foreground window. |
| 37 | [173787247/dsh-wsl-workspace](https://github.com/173787247/dsh-wsl-workspace) | 1 | 2026-08-31 | 2026-09-27 | List WSL distros and validate a Linux workspace path for DSH. |
| 38 | [173787247/dsh-wsl-wslconfig](https://github.com/173787247/dsh-wsl-wslconfig) | 1 | 2026-08-31 | 2026-09-27 | Read-only advice for .wslconfig memory/mirrored networking. |
| 39 | [crossoverthere/dsh-whale-desktop](https://github.com/crossoverthere/dsh-whale-desktop) | 1 | 2026-09-27 | 2026-09-27 | 桌面级鲸鱼娘桌宠：基于dsh-whale-widget（DSH 插件版），做成透明置顶、可点击穿透的 Windows 桌面挂件（Electron） |
| 40 | [csiroqa/self-iteration-forge](https://github.com/csiroqa/self-iteration-forge) | 1 | 2026-08-15 | 2026-09-27 | DeepSeek Harness（DSH）插件生成工具：AI 自发发现能力缺口，子代理开发、迁移为独立 git 仓库并自动提交、热挂载与装入 profile。AI-native plugin generator for DeepSeek Harness: self-iterating subagent pipeline, independent repos, hot-mount. |
| 41 | [David7583/baigong_research_atlas](https://github.com/David7583/baigong_research_atlas) | 1 | 2026-09-27 | 2026-09-27 | Local research continuity across agents and AI clients, with versioned tasks, traceable evidence and verifiable handoffs. |
| 42 | [ethanwong-hk/dsh-thinking-guard](https://github.com/ethanwong-hk/dsh-thinking-guard) | 1 | 2026-09-26 | 2026-09-27 | Circuit breaker for pure-thinking idle loops in DSH agent turns — triple fusing on timeout, reasoning volume, and degenerate repetition. |
| 43 | [felixzhang-glitch/dsh-token-usage](https://github.com/felixzhang-glitch/dsh-token-usage) | 1 | 2026-08-16 | 2026-09-27 | DeepSeek Harness token usage dashboard: settings UI with overview / by-date / by-model breakdowns, host aggregation over session logs |
| 44 | [jackxu925/dsh-pwa](https://github.com/jackxu925/dsh-pwa) | 1 | 2026-08-30 | 2026-09-27 | Phone-first PWA for DeepSeek Harness — sessions, streaming chat, approvals on iOS and Android. No app install. |
| 45 | [jeffreyren1/dsh-custom-js](https://github.com/jeffreyren1/dsh-custom-js) | 1 | 2026-09-27 | 2026-09-27 | Customize DeepSeek Harness without forking it—load, edit, manage, and hot-reload trusted JavaScript and TypeScript userscripts from the Web UI.自定义 DeepSeek Harness，无需 Fork——直接在 Web UI 中加载、编辑、管理并热重载可信的 JavaScript 和 TypeScript 用户脚本。 |
| 46 | [jingchangzhao-gif/dsh-errkb](https://github.com/jingchangzhao-gif/dsh-errkb) | 1 | 2026-09-26 | 2026-09-27 | DeepSeek Harness plugin: recycle errors into a numbered, human-editable knowledge base, and inject the recorded fix before the model re-diagnoses. Design stage - no code yet. |
| 47 | [kyle123740/dsh-message-recall](https://github.com/kyle123740/dsh-message-recall) | 1 | 2026-09-26 | 2026-09-27 | 删掉不喜欢的 AI 回复，或删掉已发送的错误提示词 —— 每条消息可撤回 / 删除 / 删除此处及之后（DSH 插件，append-only 墓碑，模型上下文与界面同步）。Per-message recall &amp; delete for DeepSeek Harness. Requires dsh &gt;= 0.1.7. |
| 48 | [Leafstory/dsh-context-checkpoint](https://github.com/Leafstory/dsh-context-checkpoint) | 1 | 2026-09-27 | 2026-09-27 | 为解决 DeepSeek V4.1 Flash 在 DSH 长上下文下丢失结论 / 幻觉升高而做的自动总结-压缩-注入插件：达限 → 总结落盘 → 自动压缩 → 压缩后注入回上下文开头（含 skill 与一键安装器） |
| 49 | [Leaveing00001/dsh-fusion360](https://github.com/Leaveing00001/dsh-fusion360) | 1 | 2026-09-27 | 2026-09-27 | Drive Autodesk Fusion 360 from DeepSeek Harness (DSH) - 13 MCP tools including arbitrary Fusion API Python. Vibe-coded end to end by DSH; every modelling command measured against closed-form volumes. |
| 50 | [luobosibing2/deepseek-harness-jev](https://github.com/luobosibing2/deepseek-harness-jev) | 1 | 2026-09-27 | 2026-09-27 | Native DeepSeek Harness (DSH) plugin integrating TypeSafe Jev as a System One decision layer for agent selection, supervision, corrections, and approvals. |
| 51 | [SFLAQiu/dsh-waker](https://github.com/SFLAQiu/dsh-waker) | 1 | 2026-09-27 | 2026-09-27 | 正在苏醒的数字员工 |
| 52 | [SJTUMalPan/dsh-subpages](https://github.com/SJTUMalPan/dsh-subpages) | 1 | 2026-09-23 | 2026-09-27 | DSH 子页面宿主插件：复用 DSH 端口提供 /subpages 网关与统一门户，把独立开发的下级页面一键挂载 |
| 53 | [Theflowyears/dsh-arknights-theme](https://github.com/Theflowyears/dsh-arknights-theme) | 1 | 2026-09-27 | 2026-09-27 | Arknights theme pack for the DeepSeek Harness Web GUI: wallpapers with saturation-driven edge blur, an acrylic sidebar, and a one-click wallpaper picker. |
| 54 | [XINGRUYU33224/dsh-liquid-glass-wallpaper](https://github.com/XINGRUYU33224/dsh-liquid-glass-wallpaper) | 1 | 2026-09-26 | 2026-09-27 | Liquid-glass Wallpaper Engine backdrop for the DeepSeek Harness Web GUI |
| 55 | [2211431960/dsh-wallpaper-theme](https://github.com/2211431960/dsh-wallpaper-theme) | 0 | 2026-09-27 | 2026-09-27 | Wallpaper + liquid glass theme for DeepSeek Harness. No runtime dependencies. |
| 56 | [3289192-bot/dsh-adaptive-max-tokens](https://github.com/3289192-bot/dsh-adaptive-max-tokens) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 动态输出额度插件：随上下文增长调整 maxTokens，压缩后恢复额度。支持 DSH 0.1.6-alpha.1 / 0.1.7-rc.2。 |
| 57 | [643048695/dsh-compaction-route](https://github.com/643048695/dsh-compaction-route) | 0 | 2026-09-27 | 2026-09-27 | Pick the DeepSeek Harness conversation-compaction summarizer in the Web settings page, and give it a fallback model |
| 58 | [Aeroscis/dsh-temptask](https://github.com/Aeroscis/dsh-temptask) | 0 | 2026-09-27 | 2026-09-27 | Temporary task mode for DeepSeek Harness (dsh) — one-click disposable working dir + session, no long-lived workspace bound. |
| 59 | [AllenWES365/dsh-local-memory](https://github.com/AllenWES365/dsh-local-memory) | 0 | 2026-09-27 | 2026-09-27 | Project-isolated long-term memory for DeepSeek Harness:每个项目各存各的库，一个总视角看遍全部。Seeds a project's memory from its git history without opening a session. |
| 60 | [b8yg7vjstj-ctrl/dsh-llamacpp-bridge](https://github.com/b8yg7vjstj-ctrl/dsh-llamacpp-bridge) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness plugin: local llama.cpp (llama-server) as a first-class model provider — process/router management, catalog sync with mmproj vision pairing, auto-start, stop-then-load switching, and a sidebar terminal monitor panel. |
| 61 | [bigbigtooth/DSH-DevOps-Plugin](https://github.com/bigbigtooth/DSH-DevOps-Plugin) | 0 | 2026-09-27 | 2026-09-27 | DSH 远程运维插件：SSH 服务器管理、硬件/进程/日志监控、只读 AI 巡检、Git 部署闭环。 Remote operations for DeepSeek Harness: SSH server management, monitoring, read-only AI inspection, and a Git deploy loop. |
| 62 | [borgez/dsh-project-mcp](https://github.com/borgez/dsh-project-mcp) | 0 | 2026-09-18 | 2026-09-27 | Per-project MCP servers for DeepSeek Harness — project-declared MCP mounts, scoped to sessions working in that project |
| 63 | [btsd321/dsh-oh-my-terminal](https://github.com/btsd321/dsh-oh-my-terminal) | 0 | 2026-09-24 | 2026-09-27 | A bottom terminal panel plugin for DSH GUI. Supports Windows ConPTY and POSIX openpty with no local compilation required. |
| 64 | [catsenior507/dsh-command-center](https://github.com/catsenior507/dsh-command-center) | 0 | 2026-09-27 | 2026-09-27 | Command center for DeepSeek Harness: watch running background jobs in one panel, tell a long silence apart from a hang, and see when the agent is waiting on you. |
| 65 | [ChengqianHuang/dsh-personal](https://github.com/ChengqianHuang/dsh-personal) | 0 | 2026-09-27 | 2026-09-27 | Personal assistant bundle for DeepSeek Harness: natural-language capture, query, and review tools over one SQLite file |
| 66 | [cjx12036/TaskWatch](https://github.com/cjx12036/TaskWatch) | 0 | 2026-09-27 | 2026-09-27 | User-intent tracking and agent supervision for DeepSeek Harness (DSH) · 用户意图监督与受控纠偏 |
| 67 | [cnyc6n/dsh-uia-agent](https://github.com/cnyc6n/dsh-uia-agent) | 0 | 2026-09-27 | 2026-09-27 | Windows UI Automation agent for DeepSeek Harness: enumerate/snapshot/find/click/set_text/scroll/drag/swipe/screenshot + window state as a dsh plugin (single C++ exe) |
| 68 | [cnyc6n/uia-agent](https://github.com/cnyc6n/uia-agent) | 0 | 2026-09-27 | 2026-09-27 | Windows UI Automation agent - single C++ exe (enumerate/snapshot/find/click/set_text/scroll/drag/swipe/screenshot/window-state). Built with MSVC, static CRT. |
| 69 | [DevTarlow/dsh-background-swapper](https://github.com/DevTarlow/dsh-background-swapper) | 0 | 2026-09-26 | 2026-09-27 | A DeepSeek Harness plugin that sets a photo as the harness background. |
| 70 | [dianziboluo/dsh-cost-meter-bai-credits](https://github.com/dianziboluo/dsh-cost-meter-bai-credits) | 0 | 2026-09-27 | 2026-09-27 | Show your B.AI Credits balance inside dsh-cost-meter. Bilingual (EN/ZH) recipe with a machine-readable preset and a portable applier script. |
| 71 | [EIGHTfs/dsh-session-conductor](https://github.com/EIGHTfs/dsh-session-conductor) | 0 | 2026-08-18 | 2026-09-27 | DSH 会话功能增强插件（重命名/分支/归档） |
| 72 | [fzy-yy/dsh-mcp-inventory](https://github.com/fzy-yy/dsh-mcp-inventory) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness plugin: a Settings page listing the MCP servers the current profile has switched on |
| 73 | [G57651/dsh-dual-checkin](https://github.com/G57651/dsh-dual-checkin) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 插件 — Trae 与 WorkBuddy 每日自动签到（本机登录态、双平台互不阻塞、积分与到期提醒） |
| 74 | [G57651/dsh-one-click-restart](https://github.com/G57651/dsh-one-click-restart) | 0 | 2026-09-26 | 2026-09-27 | One-click restart plugin for DeepSeek Harness: sidebar button + detached watchdog that quits and relaunches the app. |
| 75 | [G57651/dsh-session-manager](https://github.com/G57651/dsh-session-manager) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness 会话管理面板插件：全部/已归档/已删除视图、批量管理、软删除回收站 |
| 76 | [Gaozx1/dsh-web-search-engine](https://github.com/Gaozx1/dsh-web-search-engine) | 0 | 2026-09-27 | 2026-09-27 | DSH 插件：用 Bing / DuckDuckGo / Mojeek / Google / Brave 多引擎混合替代默认网络搜索，带可视化设置页 |
| 77 | [GooDAnDReaDY/dsh-smart-restart](https://github.com/GooDAnDReaDY/dsh-smart-restart) | 0 | 2026-09-24 | 2026-09-27 | Verified restart for DeepSeek Harness with recovery confirmation and session handoff |
| 78 | [hanbernate/dsh-save-button](https://github.com/hanbernate/dsh-save-button) | 0 | 2026-09-27 | 2026-09-27 | Adds a Download button to DSH delivery cards, so files delivered with present save straight from the browser. |
| 79 | [hbgdjb/dsh-session-shield](https://github.com/hbgdjb/dsh-session-shield) | 0 | 2026-09-27 | 2026-09-27 | Session Shield —— 让 DSH 会话日志永远不会因为一次畸形 tool call（空 id / 空 name / 非法 arguments）而打不开。装上即用，零配置、零依赖。 |
| 80 | [hiJoeLee/dsh-suggest-actions](https://github.com/hiJoeLee/dsh-suggest-actions) | 0 | 2026-09-26 | 2026-09-27 | 在每条回复下方给出可点的下一步建议，点一下就作为你的消息发出去 |
| 81 | [hu568/dsh-plugin-browser-use](https://github.com/hu568/dsh-plugin-browser-use) | 0 | 2026-09-27 | 2026-09-27 | DSH 插件：ARIA 快照优先的浏览器操作工具集（导航/点击/输入/截图/多标签）+ 右侧栏实时投屏与用户接管面板。移植自 zai-org/ZCode（Apache-2.0）。MIT。 |
| 82 | [hu568/dsh-plugin-pack-memory-browser](https://github.com/hu568/dsh-plugin-pack-memory-browser) | 0 | 2026-09-27 | 2026-09-27 | DSH 插件包：记忆 + 浏览器（Schema v1 分发清单，spec 指向各插件仓库，随包附带离线 tarball 与自检脚本）。MIT。 |
| 83 | [hu568/dsh-plugin-persona-memory](https://github.com/hu568/dsh-plugin-persona-memory) | 0 | 2026-09-27 | 2026-09-27 | DSH 插件：角色设定与长期记忆（角色库 persona.yml/SOUL.md/USER.md + FACT.md/MEMORY.md + JOURNAL.jsonl），注册在宿主组合层，对所有 agent 预设生效，附右侧栏管理面板。MIT。 |
| 84 | [HuaiminHuang/dsh-subscription-plugin](https://github.com/HuaiminHuang/dsh-subscription-plugin) | 0 | 2026-09-27 | 2026-09-27 | Experimental DeepSeek Harness (DSH) plugin for ChatGPT/Codex subscription sign-in and model routing. v0.0.2 preview; real login unverified. |
| 85 | [JackZo400/dsh-carryover](https://github.com/JackZo400/dsh-carryover) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：会话交接——开新会话前先把上一段摘要成笔记，笔记真的落盘了才允许删旧轨迹 · Session handover for dsh: summarize first; delete the transcript only after the note is read back. |
| 86 | [JackZo400/dsh-group-feed](https://github.com/JackZo400/dsh-group-feed) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：群聊上下文投喂——非 @ 的消息攒批挂进上下文（零 token、不唤醒模型），每天再压成日结 · Batched group-chat context feeding for dsh: zero-token injection plus daily digests. |
| 87 | [JackZo400/dsh-memory-search](https://github.com/JackZo400/dsh-memory-search) | 0 | 2026-09-27 | 2026-09-27 | Markdown 笔记变成 Agent 的长期记忆：本地 embedding + SQLite FTS5 混合召回，可选密级过滤（dsh 插件）· Long-term memory for dsh agents: hybrid search (local embeddings + SQLite FTS5) over your markdown notes. |
| 88 | [JackZo400/dsh-netguard](https://github.com/JackZo400/dsh-netguard) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：出网护栏——只放公网、重定向逐跳复查、边读边限大小（防 SSRF） · Egress guard for dsh: public addresses only, every redirect hop re-checked, size capped while streaming. |
| 89 | [JackZo400/dsh-onebot](https://github.com/JackZo400/dsh-onebot) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：QQ 通道（OneBot 11 标准客户端）——正向 WebSocket + HTTP，把你的 Agent 接进 QQ 群和私聊，零依赖 · OneBot 11 client channel for dsh: your agent in QQ groups and DMs, zero dependencies. |
| 90 | [JackZo400/dsh-sticker-library](https://github.com/JackZo400/dsh-sticker-library) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：聊天表情包库——收图去重、视觉打标、按含义挑图，脏话与烂梗在入库那一刻拦掉 · Sticker library for dsh: dedup, vision tagging, pick by meaning; unsafe stickers rejected at ingest. |
| 91 | [JackZo400/dsh-voice-transcribe](https://github.com/JackZo400/dsh-voice-transcribe) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件：本地语音/视频转写——QQ/微信那种 SILK 语音先解码，再用 faster-whisper 转成文字，全程不花 API 钱 · Local speech-to-text for dsh: SILK decoding + faster-whisper, no API cost. |
| 92 | [jcjyids/dsh-web-advanced-settings](https://github.com/jcjyids/dsh-web-advanced-settings) | 0 | 2026-09-27 | 2026-09-27 | 完全由DeepSeek大模型生成 |
| 93 | [jetformat/dsh-plugin](https://github.com/jetformat/dsh-plugin) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness plugin for Jetformat: Office to PDF and PDF tools via the local CLI |
| 94 | [jipika/dsh-preset-hotswap](https://github.com/jipika/dsh-preset-hotswap) | 0 | 2026-09-27 | 2026-09-27 | Switch the agent preset (standard / PTC / cordis) of an already-started conversation from the session header. DSH host+client plugin. |
| 95 | [john-walks-slow/dsh-live2d-voice](https://github.com/john-walks-slow/dsh-live2d-voice) | 0 | 2026-09-27 | 2026-09-27 | Live2D companion for DeepSeek Harness (DSH): realtime TTS voice, continuous speech input, subtitle translation, multi-model catalog, standalone entry |
| 96 | [jr-create/dsh-prompt-wisp](https://github.com/jr-create/dsh-prompt-wisp) | 0 | 2026-09-27 | 2026-09-27 | 提示词精灵 — 在 DeepSeek Harness 输入框旁一键把草稿优化成结构化提示词 / One-click prompt optimization button for the DeepSeek Harness composer |
| 97 | [KAsyori/dsh-unicode-guard](https://github.com/KAsyori/dsh-unicode-guard) | 0 | 2026-09-27 | 2026-09-27 | DSH plugin: keeps the glyph class that trips content moderation out of every model-visible surface, so a fetched page cannot permanently break a session. |
| 98 | [koinrokka/dsh-plugins](https://github.com/koinrokka/dsh-plugins) | 0 | 2026-09-27 | 2026-09-27 | dsh (DeepSeek Harness) extension bundles for Koinrokka: sandbox runtime providers, IDE tools, LLM adapters |
| 99 | [LeeLizuoLiu/rice-patrol](https://github.com/LeeLizuoLiu/rice-patrol) | 0 | 2026-09-26 | 2026-09-27 | Rice Patrol: a bounded reasoning loop guard and clean recovery plugin for DeepSeek Harness |
| 100 | [luckbiao/dsh-markdown-highlighter](https://github.com/luckbiao/dsh-markdown-highlighter) | 0 | 2026-09-27 | 2026-09-27 | Rich syntax highlighting for DSH Markdown: activates builtin Shiki theme colors and styles diff codeblocks with green/red backgrounds and split-view |
| 101 | [lyp88997/dsh-browser-service](https://github.com/lyp88997/dsh-browser-service) | 0 | 2026-09-26 | 2026-09-27 | 自建 DSH 浏览器服务：单例 CDP 守护 + DSH ctx.browser provider + 兼容 dsh-univer-office 的可执行包装（非 root 服务器环境） |
| 102 | [malko/dsh-malko-prefs](https://github.com/malko/dsh-malko-prefs) | 0 | 2026-09-26 | 2026-09-27 | Some settings to make deepseek harness more comfortable to use |
| 103 | [MerkurevSergei/dsh-notion-oauth-ui](https://github.com/MerkurevSergei/dsh-notion-oauth-ui) | 0 | 2026-09-27 | 2026-09-27 | Notion integration for DeepSeek Harness via the official Notion MCP (OAuth 2.0 + PKCE) with a GUI login page and a CLI \`dsh notion login\` fallback. |
| 104 | [mic1on/dsh-read](https://github.com/mic1on/dsh-read) | 0 | 2026-09-27 | 2026-09-27 | Read local EPUB / MOBI / text books inside DeepSeek Harness: /read streams the text into the conversation like an AI reply, with speed control, pause and progress. |
| 105 | [mimajiushi/dsh-plugins](https://github.com/mimajiushi/dsh-plugins) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness (dsh) community plugins: AgentTeams approval switch and limits card, compaction model picker, gateway-wide LLM retry, plan-card sidebar, subagent model guard and toggle, web_fetch fake-ip allowance, and an IDE-style git changes panel. |
| 106 | [mingdui/dsh-growth-workbench](https://github.com/mingdui/dsh-growth-workbench) | 0 | 2026-09-26 | 2026-09-27 | 面向普通用户的AI个人成长工作台：画像 → 能力模型 → 90 天计划 → 今日执行 → 证据 → 考核复盘。基于DSH底座。 |
| 107 | [mrbeandev/dsh-hypercompact](https://github.com/mrbeandev/dsh-hypercompact) | 0 | 2026-09-26 | 2026-09-27 | Deterministic, zero-LLM, byte-budget context compaction for DeepSeek Harness, with byte-exact recall of compacted history |
| 108 | [MuzeWinter/dscomputer-control](https://github.com/MuzeWinter/dscomputer-control) | 0 | 2026-09-27 | 2026-09-27 | Windows desktop automation for DeepSeek Harness: 14 tools for real GUI input (click, type, keys, scroll, drag), occlusion-proof window screenshots and the accessibility tree. |
| 109 | [NeoWangKing/dsh-activity-line](https://github.com/NeoWangKing/dsh-activity-line) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness web plugin: a live activity line under the composer (source of truth: NeoWangKing/neo-dsh) |
| 110 | [OctoberaYours/dsh-rightbar-default-width](https://github.com/OctoberaYours/dsh-rightbar-default-width) | 0 | 2026-09-26 | 2026-09-27 | DSH Web plugin: right sidebar defaults to a configurable fraction of the viewport (1/6 by default) instead of half the screen, while keeping drag-to-resize and remembering the width you dragged to. |
| 111 | [oiuv/dsh-achievements](https://github.com/oiuv/dsh-achievements) | 0 | 2026-09-27 | 2026-09-27 | Usage statistics and achievements for DeepSeek Harness — track your progress, explore capabilities, and level up your developer journey. |
| 112 | [Paimonshen/dsh-coding-plugin](https://github.com/Paimonshen/dsh-coding-plugin) | 0 | 2026-09-27 | 2026-09-27 | 代码学习插件 — DSH 动态 Cordis 插件：悬浮窗代码编辑器/多语言执行/课程关卡评判/分析直投对话 |
| 113 | [pandarayc/dsh-skill-tier](https://github.com/pandarayc/dsh-skill-tier) | 0 | 2026-09-27 | 2026-09-27 | Progressive disclosure for DSH skill collections: one generated index skill stays in the catalog, every member stays user-invocable but leaves the model catalog. Zero dependencies. |
| 114 | [qingyou002/dsh-git-commit](https://github.com/qingyou002/dsh-git-commit) | 0 | 2026-09-27 | 2026-09-27 | DSH slash command /commit: stages all changes, summarizes the staged diff with the session model, and commits; no browser UI required, with a local fallback when the model call fails. |
| 115 | [QTATQ233/dsh-jingcha](https://github.com/QTATQ233/dsh-jingcha) | 0 | 2026-09-27 | 2026-09-27 | DSH 运行时监察：工具调用 / 事件循环 / 错误风暴实时体检 + 按调用强制停止 + 右下角红绿灯挂件（0 token） |
| 116 | [Ragnoryok1/dsh-client-locale-ru](https://github.com/Ragnoryok1/dsh-client-locale-ru) | 0 | 2026-09-03 | 2026-09-27 | Russian (ru) language pack for the DeepSeek Harness web GUI - installable hybrid dsh.bundle + dsh.client plugin. |
| 117 | [rajpaulsingh6-stack/dsh-genoffice-captain](https://github.com/rajpaulsingh6-stack/dsh-genoffice-captain) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness plugin: launch GenOffice for GenOffice task-list skills, or designate a Captain session to orchestrate first |
| 118 | [rezon-aki/dsh-doc-kit](https://github.com/rezon-aki/dsh-doc-kit) | 0 | 2026-09-27 | 2026-09-27 | 文档体系体检：只读工具 doc_lint（注入层配额 / 被禁措辞 / 索引路径 / 是否进 git）+ 随包 doc-governance 技能 |
| 119 | [rickwindman/dsh-destinywind-mcp](https://github.com/rickwindman/dsh-destinywind-mcp) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 插件：MCP 可视化管理（服务器/工具开关/环境变量/凭据托管）· Visual MCP manager UI plugin for DeepSeek Harness |
| 120 | [rickwindman/dsh-destinywind-memory](https://github.com/rickwindman/dsh-destinywind-memory) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 插件：长期记忆库，注入每个会话的系统提示，设置页增删，HTTP API 改数 · Durable long-term memory bank plugin for DeepSeek Harness |
| 121 | [rickwindman/dsh-destinywind-tpm](https://github.com/rickwindman/dsh-destinywind-tpm) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 插件：TPM/DPAPI 封存的凭据提供器，取代明文凭据文件 · TPM/DPAPI-sealed credential provider plugin for DeepSeek Harness |
| 122 | [Rosa42/dsh-sync](https://github.com/Rosa42/dsh-sync) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness plugin: sync sessions and profile configuration across machines with rclone bisync, with a configurable sync scope and guided WebDAV setup. |
| 123 | [s11phere/dsh-btw-sidebar](https://github.com/s11phere/dsh-btw-sidebar) | 0 | 2026-09-27 | 2026-09-27 | dsh plugin: Codex-style /btw — fork the current conversation into the native right sidebar and keep chatting there. Official session UI and full tool use, without interrupting or polluting the main conversation. |
| 124 | [s11phere/dsh-commandcode-quota](https://github.com/s11phere/dsh-commandcode-quota) | 0 | 2026-09-26 | 2026-09-27 | Command Code plan quota in your DSH session header — 5h / weekly / monthly windows, reset countdowns, and billing-period usage |
| 125 | [s11phere/dsh-tex-block-normalizer](https://github.com/s11phere/dsh-tex-block-normalizer) | 0 | 2026-09-27 | 2026-09-27 | DSH plugin: fix Pandoc-style $$ display-math blocks that DSH mis-parses into a red KaTeX parse error. |
| 126 | [Sen70s/dsh-workspace-plus](https://github.com/Sen70s/dsh-workspace-plus) | 0 | 2026-09-27 | 2026-09-27 | 增强deepseek harness的工作区的多级目录功能 |
| 127 | [SJTUMalPan/dsh-ask-timeout-notify](https://github.com/SJTUMalPan/dsh-ask-timeout-notify) | 0 | 2026-09-27 | 2026-09-27 | DSH 宿主插件：ask_user_question 超过阈值（默认 60 分钟）无人回答时，向 notify-hub 投递一条待办并通过飞书/webhook/email 推送 |
| 128 | [SJTUMalPan/dsh-usage-dashboard](https://github.com/SJTUMalPan/dsh-usage-dashboard) | 0 | 2026-09-27 | 2026-09-27 | DSH 宿主插件：把 dsh-usage-stats 生成的用量报表挂到宿主 Web 的 /usage，鉴权复用宿主登录态（零依赖） |
| 129 | [Sostay/dsh-wallpaper](https://github.com/Sostay/dsh-wallpaper) | 0 | 2026-09-27 | 2026-09-27 | Custom full-window wallpaper plugin for DeepSeek Harness (DSH): gradient presets, image URLs, local uploads, frosted glass, and a theme-aware top gradient. |
| 130 | [Stolyarovmn/dsh-ui-registry-aggregator](https://github.com/Stolyarovmn/dsh-ui-registry-aggregator) | 0 | 2026-09-24 | 2026-09-27 | Federated plugin registry aggregator for DeepSeek Harness — combine npm, GitHub, and JSON catalogs into one searchable index. |
| 131 | [supengpeng/dsh-ssh](https://github.com/supengpeng/dsh-ssh) | 0 | 2026-09-27 | 2026-09-27 | SSH plugin for DSH (DeepSeek Harness): connection, exec/PTY, SFTP transfer, right-sidebar UI |
| 132 | [suufon/dsh-429-guard](https://github.com/suufon/dsh-429-guard) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness 429 守卫：Web UI 右上角精美弹窗 + 开关，开启后遇到 429 / 配额不足(insufficient_quota) 错误无限次自动重试，避免任务中断。 |
| 133 | [suufon/dsh-turn-speed](https://github.com/suufon/dsh-turn-speed) | 0 | 2026-09-26 | 2026-09-27 | DeepSeek Harness (DSH) 插件：在「会话统计」弹窗里追加本轮的输出速度（TPS）等行——decode 口径与端到端口径并存，并附 TTFT 平均、用时、输出 tokens、步数与轮次，直接排在官方「输出速度（TPS）」行下方，口径与官方投影逐项一致。 |
| 134 | [sviktor75/dsh-sound-notification](https://github.com/sviktor75/dsh-sound-notification) | 0 | 2026-09-27 | 2026-09-27 | DeepSeek Harness Web plugin: plays a chime when any session's response finishes (rising tone) or a question/approval is asked (falling tone), with a click-to-mute badge. |
| 135 | [tayuLuc/dsh-ru-voice-input](https://github.com/tayuLuc/dsh-ru-voice-input) | 0 | 2026-09-27 | 2026-09-27 | Russian-first Voice input for DeepSeek Harness: local GigaAM v3 with punctuation, and a speech registry fix that makes recognizer switching work |
| 136 | [Timebro9999/dsh-session-deck](https://github.com/Timebro9999/dsh-session-deck) | 0 | 2026-09-27 | 2026-09-27 | Manage your whole workspace in the DeepSeek Harness sidebar: a pinned band for projects and conversations, a bell activity view with answer previews, per-project emoji icons, and collapsible 置顶/项目/组件 sections. On npm as dsh-session-deck. Bilingual (EN/中文). |
| 137 | [toddpan/dsh-feyagate](https://github.com/toddpan/dsh-feyagate) | 0 | 2026-09-25 | 2026-09-27 | feyagate dsh plugin |
| 138 | [underworld-oddball/sh-volume-shuff](https://github.com/underworld-oddball/sh-volume-shuff) | 0 | 2026-09-27 | 2026-09-27 | Read the newest turn aloud from the DSH composer |
| 139 | [upcyan/dsh-mimo-extension](https://github.com/upcyan/dsh-mimo-extension) | 0 | 2026-09-27 | 2026-09-27 | MiMo (Xiaomi) quota ring and usage detail tab for DeepSeek Harness |
| 140 | [uu88s/dsh-session-handoff](https://github.com/uu88s/dsh-session-handoff) | 0 | 2026-09-26 | 2026-09-27 | DSH Web plugin: copy a DSH session id, or hand the whole session over to codex so \`codex resume &lt;id&gt;\` restores it. |
| 141 | [victorygod/dsh-tavern-fengyue](https://github.com/victorygod/dsh-tavern-fengyue) | 0 | 2026-09-22 | 2026-09-27 | 活用工具的酒馆agent，支持ST卡、FY卡直接导入，直接在叙事中调用自定义tool call，告别掉面板、瞎执行逻辑等问题，让模型专注于讲故事 |
| 142 | [viyiviyi/dsh-tree-task-flow](https://github.com/viyiviyi/dsh-tree-task-flow) | 0 | 2026-09-27 | 2026-09-27 | 树形任务流 · DeepSeek Harness 插件：把多步任务组织成目标→任务→子任务三级树，节点完成时由 AI 提交结果，插件随即把该节点的执行过程从上下文里折叠掉。 |
| 143 | [weibaohui/dsh-dashboard](https://github.com/weibaohui/dsh-dashboard) | 0 | 2026-09-27 | 2026-09-27 | dsh 插件 · 使用量仪表盘：离线扫描会话日志的统计分析与可编排 Dashboard（gridstack + ECharts） |
| 144 | [Weihong-Liu/dsh-html-live-preview](https://github.com/Weihong-Liu/dsh-html-live-preview) | 0 | 2026-09-27 | 2026-09-27 | Live HTML preview inside DeepSeek Harness conversations: a render_html tool plus an inline, sandboxed, auto-sized renderer. |
| 145 | [x102201/dsh-helper-plugin-workspace-browser](https://github.com/x102201/dsh-helper-plugin-workspace-browser) | 0 | 2026-09-25 | 2026-09-27 | DSH 插件：为当前工作区单独启动一个 Chrome，在右侧栏看画面，并用 workspace_browser_* 让模型阅读和操作页面。 |
| 146 | [xbzbing/dsh-decision-layer](https://github.com/xbzbing/dsh-decision-layer) | 0 | 2026-09-26 | 2026-09-27 | A structured decision layer for the DeepSeek Harness agent loop, backed by a pluggable adjudication model (dev / laya). |
| 147 | [xiaohanqing/dsh-relay](https://github.com/xiaohanqing/dsh-relay) | 0 | 2026-09-26 | 2026-09-27 | 手机随时访问你自己的 DSH —— 流量走你自己的服务端，不依赖任何第三方云。 |
| 148 | [yang101and/dsh-cyber-muyu](https://github.com/yang101and/dsh-cyber-muyu) | 0 | 2026-09-27 | 2026-09-27 | Cyber wooden fish (muyu) plugin for DeepSeek Harness: every agent tool call earns merit, failed calls count as tribulations, with a merit ledger and real-time I-Ching coin divination (金钱卦). Fully local, zero runtime dependencies. |
| 149 | [yfwu2020/dsh-think-flow](https://github.com/yfwu2020/dsh-think-flow) | 0 | 2026-09-27 | 2026-09-27 | DSH 思维链可视化：把模型的实时思考按 turn → step →（思考原文 + 工具调用）聚合成可读的右侧栏视图 |
| 150 | [yoggu/dsh-brave-search-provider](https://github.com/yoggu/dsh-brave-search-provider) | 0 | 2026-09-12 | 2026-09-27 | Brave-backed ctx.web search provider and settings card for the DeepSeek Harness. |
| 151 | [yoggu/dsh-codex-account](https://github.com/yoggu/dsh-codex-account) | 0 | 2026-09-12 | 2026-09-27 | OpenAI Codex OAuth accounts with explicit account selection for the DeepSeek Harness. |
| 152 | [yoggu/dsh-escape-to-stop](https://github.com/yoggu/dsh-escape-to-stop) | 0 | 2026-09-19 | 2026-09-27 | Stops the current DeepSeek Harness generation when unmodified Escape is pressed. |
| 153 | [yoggu/dsh-git-graph](https://github.com/yoggu/dsh-git-graph) | 0 | 2026-09-19 | 2026-09-27 | Git history and working-tree diff graph for the DeepSeek Harness web sidebar. |
| 154 | [yoggu/dsh-new-session](https://github.com/yoggu/dsh-new-session) | 0 | 2026-09-19 | 2026-09-27 | Adds a /new command to start and open a new Session in the current Workspace. |
| 155 | [yoggu/dsh-qr-phone-login](https://github.com/yoggu/dsh-qr-phone-login) | 0 | 2026-09-12 | 2026-09-27 | QR-code phone login for a DeepSeek Harness over its configured public HTTPS origin. |
| 156 | [yoggu/dsh-restart](https://github.com/yoggu/dsh-restart) | 0 | 2026-09-19 | 2026-09-27 | Adds /dsh-restart to restart the DeepSeek Harness process. |
| 157 | [yoggu/dsh-token-cost-estimate](https://github.com/yoggu/dsh-token-cost-estimate) | 0 | 2026-09-12 | 2026-09-27 | Estimated current-session token cost from local pi-ai catalog prices; not a billed amount. |
| 158 | [yousj666/dsh-audio-converter](https://github.com/yousj666/dsh-audio-converter) | 0 | 2026-09-27 | 2026-09-27 | DSH 音频转换器：解密网易云 NCM / 酷我 KWM / 酷狗 KGM / QQ音乐 QMC，格式互转 + 音质增强（EBU R128 响度归一化、EQ、重采样、位深）。可打成 197MB 单文件 exe，零依赖。 |
| 159 | [Zessi-C/dsh-model-thinking-levels](https://github.com/Zessi-C/dsh-model-thinking-levels) | 0 | 2026-09-27 | 2026-09-27 | Per-model thinking levels (reasoningEfforts) for custom DSH llm-pi-ai routes, with gateway-side capability probing |
| 160 | [zeusxx/dsh-composer-live](https://github.com/zeusxx/dsh-composer-live) | 0 | 2026-09-27 | 2026-09-27 | Live Markdown rendering and typing enhancements for the DSH web composer - syntax-highlighted code blocks, list/quote continuation, format toolbars. |
| 161 | [zhengjy01/dsh-mcp-manager](https://github.com/zhengjy01/dsh-mcp-manager) | 0 | 2026-09-27 | 2026-09-27 | MCP server manager for DeepSeek Harness: add, edit, enable and test stdio / Streamable HTTP MCP servers from the Web settings page and from agent tools, connected and disconnected at runtime without restarting DSH |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- BlueChonk/dsh-cli-anything
- CJL-1995/dsh-memory-self-evolution
- dpskk2/dsh-sync-plugin
- felixzhang-glitch/dsh-panel
- liuhao11223/dsh-oneclick-restart
- luoyu-xingu/dsh-background
- lywusichen/dsh-jmcomic
- lywusichen/dsh-sidebar-buttons
- lywusichen/dsh-skill-panel
- OMSociety/kimi-ppt-skill
- raydez/dsh-pet-plugin
- sfeng49/ashare-agent
- synmindai/dsh-nanobananapro
- synmindai/dsh-seedance2
- tkhs101/DSH-DesktopX
- wht567/dsh-user-steer
