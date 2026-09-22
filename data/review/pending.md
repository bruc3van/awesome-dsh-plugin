# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-22**
- 快照日期 / Snapshot date: **2026-09-22 (UTC)**
- 待审核 / Pending: **137**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **17**
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

对比上一份快照 **2026-09-21** / vs previous snapshot **2026-09-21**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **5**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [VDERR/dsh-echocat-skill-panel](https://github.com/VDERR/dsh-echocat-skill-panel) | 待审 / pending | 201 | +0 | 6 | 3d | 待审高星 | 核准即榜 #58 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 6570 | +262 | 487 | 91d | 日增百星 | 日增 +262★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 8454 | +209 | 352 | 39d | 日增百星 | 日增 +209★；已不进榜单 |
| ⚠️ [yyh-001/DSH-X](https://github.com/yyh-001/DSH-X) | 已核准 / approved | 304 | +113 | 12 | 18d | 日增百星 | 日增 +113★；已不进榜单 |
| ⚠️ [Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) | 已核准 / approved | 103 | +43 | 36 | 1d | 榜单跃升 | 榜单 189→118；创建 1 天 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [VDERR/dsh-echocat-skill-panel](https://github.com/VDERR/dsh-echocat-skill-panel) ⚠️ | 201 | 2026-09-18 | 2026-09-22 | DSH 技能调用审计 + 应用内 skill 管理器 |
| 2 | [rottenpen/agent-stardew](https://github.com/rottenpen/agent-stardew) | 9 | 2026-09-19 | 2026-09-22 | 星露谷农场小助手：Jev 自主游玩、dsh 插件、独立 CLI 与 SMAPI Mod |
| 3 | [JularDepick/AGENTS.md-Best-Practices](https://github.com/JularDepick/AGENTS.md-Best-Practices) | 7 | 2026-06-17 | 2026-09-22 | A best practice for universal prompts that comply with the AGENTS.md open specification. |
| 4 | [caomengxuan666/dsh-niu](https://github.com/caomengxuan666/dsh-niu) | 4 | 2026-08-15 | 2026-09-22 | Winuxsh runtime, sandbox, profile bundle, and Web UI plugin for DeepSeek Harness |
| 5 | [Han-1413141/dsh-ui-hub](https://github.com/Han-1413141/dsh-ui-hub) | 4 | 2026-08-15 | 2026-09-22 | DeepSeek Harness plugin UI manager: discover, show/hide, move, resize, and arrange plugin interfaces. Bilingual English/Chinese UI. |
| 6 | [itchenshi/dsh-ready-gui](https://github.com/itchenshi/dsh-ready-gui) | 3 | 2026-09-06 | 2026-09-22 | DeepSeek Harness 桌面壳 —— 内嵌 Web UI、自动保持最新引擎、自带数据目录管理与系统托盘。 |
| 7 | [TinyPandaGame/SpecsRelay-DSH](https://github.com/TinyPandaGame/SpecsRelay-DSH) | 2 | 2026-08-15 | 2026-09-22 | 把 DeepSeek 对话整理成开发需求，交给 DSH Agent 执行。仅支持 anywhere-labs DSH Desktop。 |
| 8 | [webkubor/dsh-env-inspector](https://github.com/webkubor/dsh-env-inspector) | 2 | 2026-09-22 | 2026-09-22 | DSH 环境自检：让读者看到自己电脑装了什么 —— 系统/CLI/DSH 插件/秘钥是否存在 |
| 9 | [ygc3817922006-sketch/SuperLcm-Lossless-Context](https://github.com/ygc3817922006-sketch/SuperLcm-Lossless-Context) | 2 | 2026-08-31 | 2026-09-22 | SuperLcm — Lossless Context for DeepSeek Harness: fully asynchronous, cache-friendly compaction with exact recall. |
| 10 | [1283011852/dsh-plugin-deep-paper-reading](https://github.com/1283011852/dsh-plugin-deep-paper-reading) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness plugin: ships the Deep Paper Reading agent preset for figure-by-figure, experiment-by-experiment close reading of a single biomedical paper. |
| 11 | [173787247/dsh-wsl-jev](https://github.com/173787247/dsh-wsl-jev) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin: TypeSafe Jev / OpenRouter System One (jev_ask / check / rank) |
| 12 | [173787247/dsh-wsl-k8s](https://github.com/173787247/dsh-wsl-k8s) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-k8s) |
| 13 | [173787247/dsh-wsl-media](https://github.com/173787247/dsh-wsl-media) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-media) |
| 14 | [173787247/dsh-wsl-obsidian](https://github.com/173787247/dsh-wsl-obsidian) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL bridge to a Windows Obsidian vault (status/open/read/write/search). |
| 15 | [173787247/dsh-wsl-ollama](https://github.com/173787247/dsh-wsl-ollama) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-ollama) |
| 16 | [173787247/dsh-wsl-search](https://github.com/173787247/dsh-wsl-search) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-search) |
| 17 | [173787247/dsh-wsl-secret](https://github.com/173787247/dsh-wsl-secret) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin: read-only pass/age secrets |
| 18 | [173787247/dsh-wsl-vecmem](https://github.com/173787247/dsh-wsl-vecmem) | 1 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-vecmem) |
| 19 | [979569650/dsh-typesafe](https://github.com/979569650/dsh-typesafe) | 1 | 2026-09-22 | 2026-09-22 | TypeSafe Jev (System One decision model) as a decision layer for DeepSeek Harness: typed decisions, confidence-gated routing, a cost meter, and an automatic prompt-injection guard over untrusted tool results. |
| 20 | [AphyTOT/dsh-plugin-preflight](https://github.com/AphyTOT/dsh-plugin-preflight) | 1 | 2026-09-20 | 2026-09-22 | Preflight checks for DeepSeek Harness plugins: verifies the dsh.bundle manifest, cordis.patch.yml wiring, client bundle shape, and peer ranges that silently exclude prerelease builds. Zero dependencies. |
| 21 | [AskTheWay/dsh-auto-memory](https://github.com/AskTheWay/dsh-auto-memory) | 1 | 2026-09-22 | 2026-09-22 | Claude Code-style auto-memory plugin for DeepSeek Harness (dsh): typed memory files + MEMORY.md index auto-injected into the system prompt. File-only, no external services. |
| 22 | [btsd321/dsh-remote-explorer](https://github.com/btsd321/dsh-remote-explorer) | 1 | 2026-09-19 | 2026-09-22 | Remote development launcher: install dsh on a remote host and use it from your local browser. LLM credentials never leave your machine. |
| 23 | [DDDMUC/dsh-chat-export](https://github.com/DDDMUC/dsh-chat-export) | 1 | 2026-09-22 | 2026-09-22 | DSH 会话可读导出：把 DeepSeek Harness 会话导出成可读的 Markdown / HTML / 纯文本 / ZIP 文字稿（思考块、工具调用与结果、代码块、图片、时间戳、标题与用量） |
| 24 | [DDDMUC/dsh-edit-turn](https://github.com/DDDMUC/dsh-edit-turn) | 1 | 2026-09-22 | 2026-09-22 | Edit any user turn in DeepSeek Harness and re-run it: an inline editor rolls the conversation back through the official surface-replace contract, then re-prompts the agent with the revised text. The append-only session log is never rewritten. |
| 25 | [dymzz/lgtm-dsh](https://github.com/dymzz/lgtm-dsh) | 1 | 2026-09-21 | 2026-09-22 | lgtm-dsh is a DSH plugin that automatically installs lgtm, reuses the Jev already configured in DSH, and lets the agent automatically call lgtm during the testing phase. |
| 26 | [Edge-Echo/dsh-driftwatch](https://github.com/Edge-Echo/dsh-driftwatch) | 1 | 2026-09-22 | 2026-09-22 | Behavior-drift reports for DeepSeek Harness agents: compare two session logs and see exactly how behavior changed — tool sequence, file operations, reasoning volume, timing, retries — zero dependencies, CI-ready. |
| 27 | [hardai520/dsh-mcp-skill-panel](https://github.com/hardai520/dsh-mcp-skill-panel) | 1 | 2026-09-15 | 2026-09-22 | dsh mcp 和 skill 管理面板 |
| 28 | [JRJRJPRO/dsh-chat-tree](https://github.com/JRJRJPRO/dsh-chat-tree) | 1 | 2026-09-19 | 2026-09-22 | 把 对话分支 画成 可点击的树 |
| 29 | [linbin-mk/dsh-notify](https://github.com/linbin-mk/dsh-notify) | 1 | 2026-09-22 | 2026-09-22 | deepseek-harness macos 通知插件 |
| 30 | [lkw2731938298/DSH-jumeng-image-video-tool](https://github.com/lkw2731938298/DSH-jumeng-image-video-tool) | 1 | 2026-09-15 | 2026-09-22 | DeepSeek Harness 插件：对接 聚梦 AI，在对话中生成图片与视频，结果落盘到本地并返回远程链接。 |
| 31 | [LovelyDazai/dsh-model-selector](https://github.com/LovelyDazai/dsh-model-selector) | 1 | 2026-09-22 | 2026-09-22 | Allow user search model in the deepseekharness model list. |
| 32 | [nightosong/gord-dsh-worktree](https://github.com/nightosong/gord-dsh-worktree) | 1 | 2026-09-21 | 2026-09-22 | Git worktrees for DeepSeek Harness: five agent tools (list, create, inspect, remove, prune) plus a working-location picker in the New Session row and a settings panel. Refuses to remove a worktree with uncommitted or untracked changes, and never removes the main one. |
| 33 | [RickT34/dsh-just-enough-tools](https://github.com/RickT34/dsh-just-enough-tools) | 1 | 2026-09-22 | 2026-09-22 | Nearly half the agent cost, with accuracy intact. Just enough tools is a DeepSeek Harness plugin that uses Jev to reveal tools and skills progressively. The main model starts with a clean planning step. Jev then selects which capabilities to add as the task unfolds. |
| 34 | [Sur-Cai/macos-computer-use-kit](https://github.com/Sur-Cai/macos-computer-use-kit) | 1 | 2026-09-22 | 2026-09-22 | AX-first computer use for AI agents on macOS with optional Jev (TypeSafe System One) semantic guards: calibrated target/input judgments before an irreversible action, decisions kept in code. Accessibility-tree targeting, window-scoped input, clipboard-safe paste, read-back verification. Ships a pip CLI, a pi package and a DeepSeek Harness plugin. |
| 35 | [syyr1987/dsh-linghun](https://github.com/syyr1987/dsh-linghun) | 1 | 2026-09-22 | 2026-09-22 | 灵魂（Linghun）— 给 DeepSeek Harness 装一个会思考的自我：灵魂卡四字段（姓名/性格/沟通风格/其他）+ 认知循环 + 海马体记忆沉淀。收口者身份锚点 + 边界判断纪律。 |
| 36 | [wakeup595626-cmyk/dsh-drop-to-path](https://github.com/wakeup595626-cmyk/dsh-drop-to-path) | 1 | 2026-09-22 | 2026-09-22 | Drag, drop or paste images / PDFs / office docs / zips / media into DeepSeek Harness - they reach a text-only model as workspace file paths. \| 中文：把图片、PDF、Office 文档、压缩包、音视频拖入或粘贴到 DSH，转成工作区文件路径交给纯文本模型。 |
| 37 | [wakeup595626-cmyk/dsh-plugin-websearch-tavily](https://github.com/wakeup595626-cmyk/dsh-plugin-websearch-tavily) | 1 | 2026-09-22 | 2026-09-22 | Tavily-backed web search provider for DeepSeek Harness - registers the tavily-search web seam provider. \| 中文：为 DSH 接入 Tavily 联网搜索的 provider，注册 tavily-search 搜索能力。 |
| 38 | [wakeup595626-cmyk/dsh-session-folders](https://github.com/wakeup595626-cmyk/dsh-session-folders) | 1 | 2026-09-22 | 2026-09-22 | Session folders for the DSH Web sidebar - nest sessions into colored, icon-tagged folders with drag and drop, right-click and batch move. \| 中文：DSH Web 侧栏会话分组：把会话整理进可嵌套、可自定义颜色图标的文件夹，支持拖拽、右键与批量移动。 |
| 39 | [wakeup595626-cmyk/dsh-token-ledger](https://github.com/wakeup595626-cmyk/dsh-token-ledger) | 1 | 2026-09-22 | 2026-09-22 | Cumulative token usage ledger for DeepSeek Harness: live capture plus historical backfill, draggable web panel and HTTP API. \| 中文：DSH 全局累积 token 用量账本：实时捕获 + 历史回填，悬浮面板与 HTTP API。 |
| 40 | [winter-street/dsh-plugin-agent-budget](https://github.com/winter-street/dsh-plugin-agent-budget) | 1 | 2026-08-29 | 2026-09-22 | Durable shared token budgets for DeepSeek Harness agent trees — a fail-closed admission gate plus a replayable usage ledger. |
| 41 | [yefengliu1/dsh-agent-grid](https://github.com/yefengliu1/dsh-agent-grid) | 1 | 2026-09-22 | 2026-09-22 | Replaces the DeepSeek Harness sidebar with a fixed 2x4 board of eight standing agent seats — each seat shows its own status, latest tool call, reasoning and result; a settings switch restores the stock sidebar. |
| 42 | [yefengliu1/dsh-theme-songgrid](https://github.com/yefengliu1/dsh-theme-songgrid) | 1 | 2026-09-22 | 2026-09-22 | Song-dynasty aesthetics x Swiss International Style for the DeepSeek Harness web UI — rice-paper (light) and night-ink (dark) variants, celadon carrying interactive states, kiln copper reserved for blockquotes. |
| 43 | [zanechen6/dsh-assistant-skin](https://github.com/zanechen6/dsh-assistant-skin) | 1 | 2026-09-22 | 2026-09-22 | DSH 助理/秘书/女友皮肤：黑蓝暗调主题 + 会话区助理形象（静图 / 无缝循环片段）+ 形象切换与动作调度。常驻占 98% 时间，动作偶尔触发。不改 DSH 源码，卸载即还原。 |
| 44 | [121212165/dsh-plugin-token-telemetry](https://github.com/121212165/dsh-plugin-token-telemetry) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness (dsh) plugin: token throughput telemetry — per-turn cards + aggregate TPS view from real harness data |
| 45 | [173787247/dsh-wsl-cal](https://github.com/173787247/dsh-wsl-cal) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-cal) |
| 46 | [173787247/dsh-wsl-compose](https://github.com/173787247/dsh-wsl-compose) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-compose) |
| 47 | [173787247/dsh-wsl-db](https://github.com/173787247/dsh-wsl-db) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-db) |
| 48 | [173787247/dsh-wsl-git](https://github.com/173787247/dsh-wsl-git) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-git) |
| 49 | [173787247/dsh-wsl-glab](https://github.com/173787247/dsh-wsl-glab) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-glab) |
| 50 | [173787247/dsh-wsl-helm](https://github.com/173787247/dsh-wsl-helm) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-helm) |
| 51 | [173787247/dsh-wsl-llamacpp](https://github.com/173787247/dsh-wsl-llamacpp) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-llamacpp) |
| 52 | [173787247/dsh-wsl-mail](https://github.com/173787247/dsh-wsl-mail) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-mail) |
| 53 | [173787247/dsh-wsl-pkg](https://github.com/173787247/dsh-wsl-pkg) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-pkg) |
| 54 | [173787247/dsh-wsl-playwright](https://github.com/173787247/dsh-wsl-playwright) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-playwright) |
| 55 | [173787247/dsh-wsl-rclone](https://github.com/173787247/dsh-wsl-rclone) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-rclone) |
| 56 | [173787247/dsh-wsl-struct](https://github.com/173787247/dsh-wsl-struct) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-struct) |
| 57 | [173787247/dsh-wsl-systemd](https://github.com/173787247/dsh-wsl-systemd) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-systemd) |
| 58 | [173787247/dsh-wsl-terraform](https://github.com/173787247/dsh-wsl-terraform) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-terraform) |
| 59 | [173787247/dsh-wsl-tmux](https://github.com/173787247/dsh-wsl-tmux) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-tmux) |
| 60 | [173787247/dsh-wsl-vllm](https://github.com/173787247/dsh-wsl-vllm) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness WSL plugin (dsh-wsl-vllm) |
| 61 | [1jiegejiayouxuewangan1/dsh-desktop-uia](https://github.com/1jiegejiayouxuewangan1/dsh-desktop-uia) | 0 | 2026-09-22 | 2026-09-22 | Windows desktop control for DeepSeek Harness (DSH) through UI Automation: read a window's control tree instead of screenshots, drive elements by stable id, approve every write, audit every action. \| 让 AI 安全地操作 Windows 桌面软件 |
| 62 | [2333hutao/dsh-ls125-uv-probe](https://github.com/2333hutao/dsh-ls125-uv-probe) | 0 | 2026-09-22 | 2026-09-22 | LinShang LS125 UV meter + UVALED-X3 probe: the reverse-engineered 9600 8N1 protocol as a DSH skill, with capture/decode toolchain and a verified STM32F103 host firmware. All code written by an AI agent (DeepSeek Harness). |
| 63 | [621758/dsh-whale-widget-pet-feed](https://github.com/621758/dsh-whale-widget-pet-feed) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness 余额小鲸鱼挂件非官方衍生版（基于 dsh-whale-widget 0.3.9）：新增摸头、摸头音效、互动统计和投喂按钮，其余功能原样保留。 |
| 64 | [BorisLoveDev/dsh-plugin-ponytail](https://github.com/BorisLoveDev/dsh-plugin-ponytail) | 0 | 2026-09-21 | 2026-09-22 | ponytail (lazy senior dev mode) as a native DeepSeek Harness plugin: per-project rules, skills and a /ponytail level command. |
| 65 | [bruc3van/bruce-md2word](https://github.com/bruc3van/bruce-md2word) | 0 | 2026-09-21 | 2026-09-22 | 面向 AI Agent 的 Markdown 转 Word 工具：中文排版、Mermaid 图表、可编辑数学公式，提供 Skill、独立 CLI 和 DSH 插件。 |
| 66 | [bvcvb/dsh-baize-session](https://github.com/bvcvb/dsh-baize-session) | 0 | 2026-09-22 | 2026-09-22 | Pick messages out of dsh sessions and relocate them into another conversation — a new one in any workspace, or an existing open one. Baize. |
| 67 | [chiikin/dsh-glm-quota](https://github.com/chiikin/dsh-glm-quota) | 0 | 2026-09-22 | 2026-09-22 | GLM Coding Plan quota display plugin for the DeepSeek Harness (DSH) web UI |
| 68 | [crazy-L118/dsh-scheduled-tasks](https://github.com/crazy-L118/dsh-scheduled-tasks) | 0 | 2026-09-22 | 2026-09-22 | Scheduled tasks plugin for DSH automation |
| 69 | [cup113/dsh-effort-memory](https://github.com/cup113/dsh-effort-memory) | 0 | 2026-09-22 | 2026-09-22 | Host-only DeepSeek Harness (DSH) bundle: remembers the reasoning effort last in effect per (provider, model) and restores it when a session switches back. |
| 70 | [dgagf111/dsh-hydrasearch](https://github.com/dgagf111/dsh-hydrasearch) | 0 | 2026-09-22 | 2026-09-22 | TinyFish + AnySearch web search and fetch provider for DeepSeek Harness: one failover-chain provider with an operator-controlled backend priority and a settings card. |
| 71 | [emiltsoi/dsh-fleet-mesh](https://github.com/emiltsoi/dsh-fleet-mesh) | 0 | 2026-09-22 | 2026-09-22 | Session-aware mesh relay for DSH agents - Ed25519-signed receive route, delivery policy, outbound and registry libraries |
| 72 | [Excalibur9527/dsh-jev](https://github.com/Excalibur9527/dsh-jev) | 0 | 2026-09-22 | 2026-09-22 | DSH Plugin（DeepSeek Harness 插件）：每轮对话调用 typesafe.ai systemone(jev) 判定用户情绪/意图，结果注入模型上下文；API Key 与全部参数在 GUI 设置页配置 |
| 73 | [exynos967/dsh-request-error-dump](https://github.com/exynos967/dsh-request-error-dump) | 0 | 2026-09-22 | 2026-09-22 | DSH 插件：模型请求报错时，把完整请求体 raw JSON 与上游错误响应 raw JSON 一起落盘 \| DSH plugin: dump the exact raw request body and the raw upstream error response when a model request fails |
| 74 | [fatatalia/dsh-credentials-admin](https://github.com/fatatalia/dsh-credentials-admin) | 0 | 2026-09-22 | 2026-09-22 | DSH 凭据管理设置页插件：列出/新增/删除 ~/.dsh/.credentials.yaml 的 refs（值只进不出） |
| 75 | [fatefgo2050/dsh-mcp-scanner](https://github.com/fatefgo2050/dsh-mcp-scanner) | 0 | 2026-09-21 | 2026-09-22 | 在 DeepSeek Harness 设置页扫描并管理本地 MCP 服务器与工具 |
| 76 | [fatihtoprakk/scaefy-video-production](https://github.com/fatihtoprakk/scaefy-video-production) | 0 | 2026-09-22 | 2026-09-22 | Code-generated video production skill pack — engine-neutral, free and offline at its core, gated by measurements instead of opinions. |
| 77 | [FranzLi347/dsh-workspace-colors](https://github.com/FranzLi347/dsh-workspace-colors) | 0 | 2026-09-22 | 2026-09-22 | Workspace color labels for DeepSeek Harness: six colors, browser-local persistence, Chinese/English UI. |
| 78 | [FunctionHookTJU/dsh-work-done-bell](https://github.com/FunctionHookTJU/dsh-work-done-bell) | 0 | 2026-09-22 | 2026-09-22 | DSH plugin: ring a Windows system sound when a DeepSeek Harness session is truly done |
| 79 | [Goothe13-gugu/dsh-audio-cue](https://github.com/Goothe13-gugu/dsh-audio-cue) | 0 | 2026-09-22 | 2026-09-22 | 用于Deepseek Harness的插件，让你的大模型边思考边唱歌。A plugin for Deepseek Harness (DSH) to play music or audio when your LLM is thinking. |
| 80 | [gordan-code/dsh-jev-advisor](https://github.com/gordan-code/dsh-jev-advisor) | 0 | 2026-09-22 | 2026-09-22 | Jev (TypeSafe System One) gives the human a second opinion, not the agent. When DSH's model asks you a multiple-choice question, dsh-jev builds a structured Jev request and floats the recommendation, probability spread and confidence beside the options - one click to adopt. API key lives in Settings. No prompt changes. |
| 81 | [hoyyang/dsh-manage-sessions](https://github.com/hoyyang/dsh-manage-sessions) | 0 | 2026-09-22 | 2026-09-22 | DSH 会话管理插件：批量归档/恢复/永久删除，卡死会话两段式强停（自动复活/离线），工作区行一键复制绝对路径，双击重命名，零配置开箱即用。 |
| 82 | [imiss1314520/dsh-greet-plugin](https://github.com/imiss1314520/dsh-greet-plugin) | 0 | 2026-09-22 | 2026-09-22 | A minimal DeepSeek Harness plugin that registers a greet tool. |
| 83 | [IQzhan/dsh-model-caps](https://github.com/IQzhan/dsh-model-caps) | 0 | 2026-09-19 | 2026-09-22 | Fill blank context windows, output caps, thinking levels, and thinking wire compat for custom DeepSeek Harness providers. \| 给自定义供应商补上空白的上下文、输出上限、思考等级与线协议 compat。 |
| 84 | [jackchen13755/dsh-jev-kit](https://github.com/jackchen13755/dsh-jev-kit) | 0 | 2026-09-22 | 2026-09-22 | Jev decision toolkit for DeepSeek Harness: 22 named typed judgments (privacy scan, change-scope, memory triage, batch triage) on one hardened, budgeted, ledger-backed transport. Advisory only. |
| 85 | [jackchen13755/dsh-jev-lens](https://github.com/jackchen13755/dsh-jev-lens) | 0 | 2026-09-22 | 2026-09-22 | Jev quality bench for DeepSeek Harness: shadow-accounted dangerous-command judging, injection screening, canary A/B drills, optional gate mode. |
| 86 | [JoblessJoe/dsh-vitals](https://github.com/JoblessJoe/dsh-vitals) | 0 | 2026-09-22 | 2026-09-22 | Live btop-style hardware monitor (CPU/mem/temp/GPU) tab for the DeepSeek Harness (dsh) web GUI |
| 87 | [justhalfbit/dsh-plugin-jev-effort-selector](https://github.com/justhalfbit/dsh-plugin-jev-effort-selector) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness (DSH) 推理等级自动选择插件：由 Jev System One 模型判断每条消息值多少思考量，按模型声明的等级自动推导档位，上下文信封让「继续」这类追问继承话题深度，低置信度向上取，任何失败都静默沿用原等级。 \| Jev-driven reasoning effort per message: per-model ladders derived from what each model advertises, a fixed-size context envelope so follow-ups inherit topic depth, ties break upward, silent fallback on every failure path. |
| 88 | [kira905/dsh-firstaid](https://github.com/kira905/dsh-firstaid) | 0 | 2026-09-22 | 2026-09-22 | Zero-dependency incident toolkit for long-running agent hosts: one entry point for stuck services, frozen UIs, rollbacks and data loss; emits a hand-off-ready on-site report. Read-only by default. \| 零依赖急救台：起不来 / 假死 / 要撤销改动 / 数据被删四类现场压成一个入口，产出可整段交出去的体检报告 |
| 89 | [konglong87/dsh-skills-input](https://github.com/konglong87/dsh-skills-input) | 0 | 2026-09-22 | 2026-09-22 | Choose user-invocable DSH skills from the composer and insert their slash command into the draft. |
| 90 | [Leawind/dsh-ops-mcp](https://github.com/Leawind/dsh-ops-mcp) | 0 | 2026-09-22 | 2026-09-22 | Operate DeepSeek Harness (dsh) over MCP: expose sessions, task execution, and workspace management to any MCP client. |
| 91 | [leolee9086/dsh-tool-gateway](https://github.com/leolee9086/dsh-tool-gateway) | 0 | 2026-09-22 | 2026-09-22 | 把 DSH 的工具目录收成 find_tools + call_tool 两个元工具；其余工具仍可调用，只是入口变成这两个 |
| 92 | [linbin-mk/dsh-brand-deepseek](https://github.com/linbin-mk/dsh-brand-deepseek) | 0 | 2026-09-22 | 2026-09-22 | deepseek-harness 皮肤 |
| 93 | [linbin-mk/dsh-session-sync](https://github.com/linbin-mk/dsh-session-sync) | 0 | 2026-08-21 | 2026-09-22 | deepseek-harness 会话同步 |
| 94 | [linbin-mk/dsh-workspace-prompt](https://github.com/linbin-mk/dsh-workspace-prompt) | 0 | 2026-09-22 | 2026-09-22 | deepseek-harness 工作区自定义提示词 |
| 95 | [liudapeng0311/dsh-pwa-launcher](https://github.com/liudapeng0311/dsh-pwa-launcher) | 0 | 2026-09-17 | 2026-09-22 | A DSH plugin that turns the browser PWA shortcut you already have on your desktop into a real launcher: double-click starts dsh web silently and opens the app window, keeping the original icon. Adds restart and dsh self-update (with rollback) controls to the web UI. Windows only, MIT. |
| 96 | [liujianqiao701/dsh-ask-notify](https://github.com/liujianqiao701/dsh-ask-notify) | 0 | 2026-09-22 | 2026-09-22 | DSH web GUI plugin: a bottom-right reminder card when the agent is blocked waiting for your answer, plus a desktop notification and a flashing tab title when you are on another tab. |
| 97 | [Lon-dawn/dsh-notify-whale](https://github.com/Lon-dawn/dsh-notify-whale) | 0 | 2026-09-17 | 2026-09-22 | 鲸吟（dsh-notify-whale）：DSH 通知插件加固 fork。修复上游在 Node 22/24 上 HTTP 通道完全无法投递等 5 个 bug，新增等待审批/提问通知与事件级铃声。AI 主导修改。 |
| 98 | [lsl1931/dsh-resource-bar](https://github.com/lsl1931/dsh-resource-bar) | 0 | 2026-09-22 | 2026-09-22 | DSH Web 插件：在左侧边栏底部（设置按钮上方）常驻一枚 CPU / 内存占用药丸，点击展开逐核占用、时间片构成、内存细分、交换分区、系统负载与进程 Top5 详情。 |
| 99 | [maxesisnclaw/dsh-force-motion](https://github.com/maxesisnclaw/dsh-force-motion) | 0 | 2026-09-22 | 2026-09-22 | Keep DeepSeek Harness UI animations running despite prefers-reduced-motion / 强制开启 dsh 界面动效 |
| 100 | [maxesisnclaw/dsh-official-group-guard](https://github.com/maxesisnclaw/dsh-official-group-guard) | 0 | 2026-09-22 | 2026-09-22 | Hide the DeepSeek official model group in the dsh UI unless a Konami code is entered / 默认隐藏 dsh 官方模型分组，按 Konami 码显示 |
| 101 | [MiRHaDi/dsh-persian-rtl](https://github.com/MiRHaDi/dsh-persian-rtl) | 0 | 2026-09-21 | 2026-09-22 | Community Persian language pack and RTL support for DeepSeek Harness Web, with lifecycle and browser tests |
| 102 | [miseryrua/dsh-wb-cron](https://github.com/miseryrua/dsh-wb-cron) | 0 | 2026-09-22 | 2026-09-22 | DeepSeek Harness 无人值守定时任务调度器：cron/固定间隔/一次性三种调度，到点在 web profile 进程内拉起全新 root agent 执行任务指令，每任务可钉模型与 Agent 预设（预设被删/损坏时三级降级跑完并留痕）。零 npm 运行时依赖、零遥测。 |
| 103 | [mn288/dsh-vertex-gemini](https://github.com/mn288/dsh-vertex-gemini) | 0 | 2026-09-18 | 2026-09-22 | DeepSeek Harness plugin: Gemini on Google Cloud Vertex AI through Application Default Credentials |
| 104 | [Mo3ter/dsh-model-latency-test](https://github.com/Mo3ter/dsh-model-latency-test) | 0 | 2026-09-22 | 2026-09-22 | DSH plugin: adds a 模型测试 (Model Test) settings page that measures first-token latency (TTFT) for every configured model. Works in the DSH Web GUI and DSH Desktop. |
| 105 | [Mo3ter/dsh-top-drag](https://github.com/Mo3ter/dsh-top-drag) | 0 | 2026-09-22 | 2026-09-22 | DSH Desktop (Windows): keeps the top of the window draggable and clickable at the same time. |
| 106 | [nabin-qq273274877/dsh-database-manager](https://github.com/nabin-qq273274877/dsh-database-manager) | 0 | 2026-09-22 | 2026-09-22 | DSH Web GUI 数据库管理面板：统一管理 SQLite / MySQL / Redis，并提供受审批保护的 agent 工具。 \| Database management panel for the DeepSeek Harness Web GUI: SQLite / MySQL / Redis with approval-guarded agent tools. |
| 107 | [nautahakk/jev-codex-router](https://github.com/nautahakk/jev-codex-router) | 0 | 2026-09-21 | 2026-09-22 | Jev-powered model and reasoning-effort router for Codex in DeepSeek Harness |
| 108 | [NEINC1/muche-dsh-plugin](https://github.com/NEINC1/muche-dsh-plugin) | 0 | 2026-09-22 | 2026-09-22 | 连接小沐（MuChe 数字生命）的 dsh 插件：可以和有持续状态的小沐聊天，小沐可调用本机 dsh 执行任务 |
| 109 | [onepayzk-glitch/dsh-typesafe-ask](https://github.com/onepayzk-glitch/dsh-typesafe-ask) | 0 | 2026-09-22 | 2026-09-22 | Ask TypeSafe (Jev) for structured decisions from inside DeepSeek Harness: typed questions in, calibrated probabilities out. |
| 110 | [qcsjjjjj/dsh-hero-rightbar](https://github.com/qcsjjjjj/dsh-hero-rightbar) | 0 | 2026-09-21 | 2026-09-22 | Project of dsh |
| 111 | [qcsjjjjj/dsh-hero-rightbar-hold](https://github.com/qcsjjjjj/dsh-hero-rightbar-hold) | 0 | 2026-09-22 | 2026-09-22 | Restores the right sidebar's expand trigger on pages with no conversation (DSH plugin). |
| 112 | [qianyuan-ltd/dsh-qianyuan](https://github.com/qianyuan-ltd/dsh-qianyuan) | 0 | 2026-09-22 | 2026-09-22 | Connect DeepSeek Harness to the QianYuan MCP server — shared pitfall/result records and capability lookup for agents. |
| 113 | [quaner1234-cmd/DSH-THEME-KAMI](https://github.com/quaner1234-cmd/DSH-THEME-KAMI) | 0 | 2026-09-10 | 2026-09-22 | Inspired from tw93 |
| 114 | [QuanhuZeYu/dsh-upstream-model-audit](https://github.com/QuanhuZeYu/dsh-upstream-model-audit) | 0 | 2026-09-22 | 2026-09-22 | DSH web plugin: show the model name the upstream actually returned, under every assistant step |
| 115 | [qvsix/dsh-antigravity-bridge](https://github.com/qvsix/dsh-antigravity-bridge) | 0 | 2026-09-08 | 2026-09-22 | Google Antigravity conversations for DeepSeek Harness — list, read and import local Antigravity SQLite sessions as DSH sidebar sessions. |
| 116 | [RaulLazaro/dsh-jev](https://github.com/RaulLazaro/dsh-jev) | 0 | 2026-09-21 | 2026-09-22 | Ask Jev (TypeSafe System One) typed questions from DeepSeek Harness: batch judgements with probabilities, configured per user in Settings. |
| 117 | [ShawnOY/dsh-tavily](https://github.com/ShawnOY/dsh-tavily) | 0 | 2026-09-22 | 2026-09-22 | Tavily-backed web search for the DeepSeek Harness web seam (ctx.web): keyless first, with a visible fallback to your API key. |
| 118 | [skyzhao1223/dsh-agent-token-stats](https://github.com/skyzhao1223/dsh-agent-token-stats) | 0 | 2026-09-22 | 2026-09-22 | Cross-agent token usage dashboard for DeepSeek Harness: aggregates local logs of Claude Code, OpenCode, Cursor, DSH and more into a persistent ledger, with cache-hit, cost and drill-down analytics in a sidebar panel. / 跨 Agent 的本地 token 用量看板。 |
| 119 | [sunwindy91/spa-api-extract](https://github.com/sunwindy91/spa-api-extract) | 0 | 2026-09-22 | 2026-09-22 | Agent Skill: extract data from JS single-page apps via curl+grep+python when WebFetch fails (timeout / obfuscated JS). Read-only, desensitized, MIT. |
| 120 | [takboo/dsh-usage-state](https://github.com/takboo/dsh-usage-state) | 0 | 2026-09-20 | 2026-09-22 | DSH plugin: show account balance (API mode) or coding-plan quota usage (5h/7d) for the model in use |
| 121 | [TetraSsky/dsh-offpeak](https://github.com/TetraSsky/dsh-offpeak) | 0 | 2026-09-21 | 2026-09-22 | DSH plugin: holds DeepSeek model calls during peak pricing hours so they're sent at off-peak rates. |
| 122 | [ThinkofRain1213/deepseek-harness-wallet-patched](https://github.com/ThinkofRain1213/deepseek-harness-wallet-patched) | 0 | 2026-09-22 | 2026-09-22 | Patched fork of the DeepSeek Harness wallet/control center: peak-clock and billing for the renamed deepseek-flash model, model-pool-driven pricing sync, and a persisted synced table. |
| 123 | [ThinkofRain1213/dsh-smooth-cursor-patched](https://github.com/ThinkofRain1213/dsh-smooth-cursor-patched) | 0 | 2026-09-22 | 2026-09-22 | Patched fork of dsh-smooth-cursor: smooth comet-mode animated caret for the DSH Web composer, extended to question-card inputs and fixing the empty-input caret, forward selection tracking, soft-break line positioning, and scroll-overflow cases. |
| 124 | [Tomcat099/dsh-sidebar](https://github.com/Tomcat099/dsh-sidebar) | 0 | 2026-09-22 | 2026-09-22 | DSH 左侧三段式导航（功能菜单 / 项目对话树 / 最近对话）+ 工具箱：可视化配置 MCP、跨会话记忆，让项目与会话一目了然。 |
| 125 | [Tonited/dsh-stealth-reader](https://github.com/Tonited/dsh-stealth-reader) | 0 | 2026-09-22 | 2026-09-22 | 在 DeepSeek Harness 会话界面里伪装成日志流读小说：导入 txt/epub，只覆盖右侧消息区，鼠标一动即回到工作界面。 |
| 126 | [Tungpeng/dsh-offpeak-inbox](https://github.com/Tungpeng/dsh-offpeak-inbox) | 0 | 2026-09-22 | 2026-09-22 | Off-peak inbox for DeepSeek Harness: capture thoughts and todos whenever they occur, and the host launches each one as a real session only while the DeepSeek API bills at its off-peak rate. |
| 127 | [wowyuarm/dsh-channel-gateway](https://github.com/wowyuarm/dsh-channel-gateway) | 0 | 2026-09-22 | 2026-09-22 | A channel gateway for DeepSeek Harness: Telegram and WeChat adapters normalize provider traffic into one message contract, the gateway authorizes it at the transport boundary, and any consumer answers through the route the message carried. |
| 128 | [x5427876/dsh-opencode-free](https://github.com/x5427876/dsh-opencode-free) | 0 | 2026-09-22 | 2026-09-22 | Use OpenCode Zen free models in DeepSeek Harness with anonymous access or an optional API key |
| 129 | [XiangSu-ce/dsh-plugin-freecodego](https://github.com/XiangSu-ce/dsh-plugin-freecodego) | 0 | 2026-09-20 | 2026-09-22 | Unofficial DeepSeek Harness (DSH) plugin for FreeCodeGo: managed gateway and free-model catalogs, per-provider accounts, media generation, and the engineering graph + memory toolchain. AGPL-3.0-only. |
| 130 | [xingzhen199186/dsh-mini-remote](https://github.com/xingzhen199186/dsh-mini-remote) | 0 | 2026-09-22 | 2026-09-22 | DSH 极简移动端遥控器：只把「你的指令」和「AI 的最终回复」送到手机，屏蔽全部中间过程。 |
| 131 | [xueccci/dsh-prompt-lab](https://github.com/xueccci/dsh-prompt-lab) | 0 | 2026-09-22 | 2026-09-22 | Agent-structured prompt optimizer for DeepSeek Harness (dsh). Modes: normal/slim/expand. Engines: local, hybrid, DSH, cloud API. Modal confirm with score and continue-optimize. |
| 132 | [yixiuzhemu/Remote-Task](https://github.com/yixiuzhemu/Remote-Task) | 0 | 2026-09-18 | 2026-09-22 | 远程创建任务 |
| 133 | [Ylhow06/dsh-agnes-gen](https://github.com/Ylhow06/dsh-agnes-gen) | 0 | 2026-09-22 | 2026-09-22 | Agnes AI image/video generation tools (agnes_image / agnes_video) for DSH (DeepSeek Harness). Built-in cross-process RPM rate limiting, 429 backoff and local ffmpeg GIF conversion. |
| 134 | [Zh0uHX/dsh-skills](https://github.com/Zh0uHX/dsh-skills) | 0 | 2026-09-22 | 2026-09-22 | 在 DSH 设置中搜索、安装和管理 Skills.sh 技能 |
| 135 | [zhxnix/dsh-sidebar-annotations](https://github.com/zhxnix/dsh-sidebar-annotations) | 0 | 2026-09-22 | 2026-09-22 | Codex-style DSH right-sidebar browser preview, element annotations, context notes, and debugging tools. |
| 136 | [zhxnix/dsh-wx-preview](https://github.com/zhxnix/dsh-wx-preview) | 0 | 2026-09-22 | 2026-09-22 | Portable DSH plugin for native WeChat Mini Program discovery, local preview, debugging, source mapping, and sidebar inspection. |
| 137 | [zhy5/dsh-wx-bridge](https://github.com/zhy5/dsh-wx-bridge) | 0 | 2026-09-21 | 2026-09-22 | DSH plugin: connect WeChat (official iLink/ClawBot) to DeepSeek Harness — live status settings panel + bundled bridge/keeper kernel |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1Ecc/dsh-lenovo-toolkit
- AIcivilization/dsh-vps-manager
- bruc3van/dsh-md2word
- caomengxuan666/dsh-winuxsh
- itchenshi/DeepSeekHarnessGUI
- JRJRJPRO/dsh-tree
- KongFangXun/sofagent
- TinyPanda168/SpecsRelay-DSH
- tyql688/dsh-providers
- VDERR/echocat-skill-panel
- wild-River2016/dsh-canvas-xiaohe
- xarleyn/dsh-doc-impact
- xarleyn/dsh-session-scope
- xarleyn/dsh-sleev
- yueyexiayu/dsh-liulanqi
- zcx369658780/governed-workflow-for-dsh
- zhy5/wxbridge
