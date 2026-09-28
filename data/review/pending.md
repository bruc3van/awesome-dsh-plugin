# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-28**
- 快照日期 / Snapshot date: **2026-09-28 (UTC)**
- 待审核 / Pending: **137**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **28**
- Star 异常增长 / Star-growth alerts: **6** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-27** / vs previous snapshot **2026-09-27**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **6**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) | 已核准 / approved | 2195 | +533 | 219 | 44d | 日增百星 | 日增 +533★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 10299 | +341 | 397 | 45d | 日增百星 | 日增 +341★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7722 | +235 | 551 | 97d | 日增百星 | 日增 +235★；已不进榜单 |
| ⚠️ [Clearailhc/clearai-dsh](https://github.com/Clearailhc/clearai-dsh) | 已核准 / approved | 798 | +143 | 28 | 15d | 日增百星 | 日增 +143★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 3725 | +106 | 228 | 45d | 日增百星 | 日增 +106★ |
| ⚠️ [Finderchangchang/brewreel](https://github.com/Finderchangchang/brewreel) | 已核准 / approved | 94 | +29 | 15 | 1d | 榜单跃升 | 榜单 196→143 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [YottaMeta/deepseek-harness](https://github.com/YottaMeta/deepseek-harness) | 14 | 2026-08-14 | 2026-09-28 | DeepSeek Harness: Everything is a Plugin. |
| 2 | [AngelosZou/dsh-pdf-reader](https://github.com/AngelosZou/dsh-pdf-reader) | 4 | 2026-08-25 | 2026-09-28 | DeepSeek Harness plugin for content-aware PDF reading by vision models |
| 3 | [lemonxiny55/dsh-lint-loop](https://github.com/lemonxiny55/dsh-lint-loop) | 3 | 2026-09-10 | 2026-09-28 | Zero-config lint feedback loop (eslint / biome / ruff) for DeepSeek Harness — lint_diagnostics / lint_workspace_errors / lint_fix tools plus an auto-injected post-edit findings section. |
| 4 | [Barricadetrecharm99/ruvnet-ruflo](https://github.com/Barricadetrecharm99/ruvnet-ruflo) | 2 | 2026-09-27 | 2026-09-28 | 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| 5 | [Menghuan1918/dsh-deep-diving-skin](https://github.com/Menghuan1918/dsh-deep-diving-skin) | 2 | 2026-09-28 | 2026-09-28 | 替换“深度求索中”为任意你想要的文本，比如：少女祈祷中...... |
| 6 | [OMSociety/dsh-git-forge](https://github.com/OMSociety/dsh-git-forge) | 2 | 2026-09-11 | 2026-09-28 | DSH 插件：Git 凭据与推送权限管理器。哪个项目能用哪个账号、允许推到哪些 host，一处说清。账号库与 token 只落在宿主侧。按项目授权决定 agent 用哪个账号，push 拦截决定这个项目允许推到哪。 |
| 7 | [xienda/dsh-jev-verify](https://github.com/xienda/dsh-jev-verify) | 2 | 2026-09-21 | 2026-09-28 | Jev (TypeSafe System One decision model) for DeepSeek Harness: jev_decision, jev_overview, jev_guard_status and jev_verify, structured in-chat tool views, a full settings card, an auto-guard (deterministic + Jev risk/loop) and a /jev dashboard. Real API only, measured numbers. |
| 8 | [zendev-lab/spark](https://github.com/zendev-lab/spark) | 2 | 2026-05-17 | 2026-09-28 | A local-first coding-agent runtime for durable sessions and controlled autonomous work. |
| 9 | [133563825as-ai/oha-whale-session-manager](https://github.com/133563825as-ai/oha-whale-session-manager) | 1 | 2026-09-06 | 2026-09-28 | 哦鲸鲸会话管理插件 |
| 10 | [798645706/dsh-strawberry-data-hub](https://github.com/798645706/dsh-strawberry-data-hub) | 1 | 2026-09-28 | 2026-09-28 | Strawberry research tools for DeepSeek Harness |
| 11 | [americanjeff/changestab](https://github.com/americanjeff/changestab) | 1 | 2026-08-31 | 2026-09-28 | changestab — a sidebar Changes view for DeepSeek Harness (a dsh plugin) · DeepSeek Harness 的侧边栏变更视图（dsh 插件） |
| 12 | [bigPaulSixSixSix/dsh-context-compaction-optimizer](https://github.com/bigPaulSixSixSix/dsh-context-compaction-optimizer) | 1 | 2026-09-21 | 2026-09-28 | A dsh plugin for manually marking conversations/optimizing compressed content |
| 13 | [booondenz/dsh-thesis](https://github.com/booondenz/dsh-thesis) | 1 | 2026-08-16 | 2026-09-28 | 毕业论文全流程 DSH 插件 |
| 14 | [BoyangL04/dsh-task-notify](https://github.com/BoyangL04/dsh-task-notify) | 1 | 2026-09-28 | 2026-09-28 | DeepSeek Harness plugin: in-app toast + macOS notification when a session finishes a turn or is blocked on you (tool approval, question, plan review). |
| 15 | [cyh3436332528/dsh-float-chat](https://github.com/cyh3436332528/dsh-float-chat) | 1 | 2026-09-28 | 2026-09-28 | 把 DSH 的侧边对话弹出来，变成一个能压在所有应用之上的独立置顶浮窗：自带四态外观（浅色/深色/跟随 DSH/跟随 Windows）、不透明度、窗口几何记忆、即用即焚与缓存清理。Windows 专属（WinForms + WebView2）。 |
| 16 | [cyh3436332528/dsh-plugin-session-purge](https://github.com/cyh3436332528/dsh-plugin-session-purge) | 1 | 2026-09-28 | 2026-09-28 | DSH 会话管理插件：永久删除会话，连同它的日志、投影缓存、工作区记账与子会话（子代理）一起清掉。设置页入口，删除不可恢复。 |
| 17 | [demxyuanli/dsh-canvas](https://github.com/demxyuanli/dsh-canvas) | 1 | 2026-09-28 | 2026-09-28 | DeepSeek Harness project-board plugin —— 适配 DeepSeek Harness 的项目看板插件：agent 写的 .canvas.tsx 看板实时编译渲染到右栏，面板决定可回流给 agent。 |
| 18 | [Drkoh-wz/team-craft](https://github.com/Drkoh-wz/team-craft) | 1 | 2026-09-28 | 2026-09-28 | Dependency-ordered multi-agent team orchestration plugin for DeepSeek Harness (dsh): per-role model routes, an independent review gate with bounded rework, a durable run ledger, and a live progress panel in the web UI. |
| 19 | [framecy/dsh-ssh-shell](https://github.com/framecy/dsh-ssh-shell) | 1 | 2026-09-22 | 2026-09-28 | DSH plugin: password SSH into a remote host — a natural-language tool over a persistent ControlMaster session, plus a browser terminal panel with a real PTY over WebSocket. |
| 20 | [Grivn/mnemon-memory-agent](https://github.com/Grivn/mnemon-memory-agent) | 1 | 2026-09-28 | 2026-09-28 | Long-term memory for AI agents on Jev. Keep raw records, judge them with a fast System 1 model and answer from under 4k tokens of context. |
| 21 | [jackControls/dsh-noBS-CAD-step](https://github.com/jackControls/dsh-noBS-CAD-step) | 1 | 2026-09-25 | 2026-09-28 | DeepSeek Harness plugin: 2D plate prints to noBS CAD scripts and STEP files (skill + CAD tools + native print probe) |
| 22 | [likhonmain/voice-input](https://github.com/likhonmain/voice-input) | 1 | 2026-09-27 | 2026-09-28 | 🎙️ Voice Input plugin for DeepSeek Harness — record, pause, playback review, and transcribe speech directly into message drafts with custom OpenAI-compatible models. |
| 23 | [lilcandi/dsh-any-background-plus](https://github.com/lilcandi/dsh-any-background-plus) | 1 | 2026-09-28 | 2026-09-28 | Enhanced fork of dsh-any-background: dual-lane wallpaper (one picture down each side, clear of the centre column) + one folder per side dsh-any-background 的增强分支：左右双图轮播（避开中间会话区）+ 左右各一个文件夹 |
| 24 | [linzimu666/dsh-intent-suggest](https://github.com/linzimu666/dsh-intent-suggest) | 1 | 2026-09-28 | 2026-09-28 | 在 dsh 输入框上方猜你还没打完的意图，给几条可以直接发的任务候选；点一下只填回输入框，不替你发送 |
| 25 | [maxwell-feng/dsh-kingdee](https://github.com/maxwell-feng/dsh-kingdee) | 1 | 2026-09-01 | 2026-09-28 | Kingdee Cloud Starry Sky (金蝶云星空) WebAPI plugin for DeepSeek Harness (DSH) — typed agent tools to query, save, submit, audit, un-audit, view and delete bills/base data and to invoke BOS custom services. |
| 26 | [meng-114/dsh-settings-nav-collapse](https://github.com/meng-114/dsh-settings-nav-collapse) | 1 | 2026-09-28 | 2026-09-28 | DSH web client plugin: one button folds the settings navigation into a narrow icon rail so the content column stays readable on phones. 设置面板导航折叠为图标轨道，手机窄屏下正文重新可读。 |
| 27 | [MengXinSu/dsh-viya-memory](https://github.com/MengXinSu/dsh-viya-memory) | 1 | 2026-09-27 | 2026-09-28 | 本地长期记忆插件 for DeepSeek Harness：卡片以 Markdown 存在你自己的 Obsidian vault 里 · Local long-term memory as plain Markdown cards in your own Obsidian vault |
| 28 | [Moningxuan-bot/blue-fish-station](https://github.com/Moningxuan-bot/blue-fish-station) | 1 | 2026-09-27 | 2026-09-28 | 蓝色大肥鱼工作站 —— DSH 单独应用 + 美化：桌面 EXE（WebView2 外壳，一键启动）+ Web UI 覆盖层（品牌标/思考文案/背景毛玻璃/推理强度滑块），不改 DSH 源码 |
| 29 | [Movingelated/dsh-local-ollama-models](https://github.com/Movingelated/dsh-local-ollama-models) | 1 | 2026-09-28 | 2026-09-28 | DSH (DeepSeek Harness) plugin: delegate read-only collection tasks to a local Ollama model — zero cloud token cost, zero API key. 把只读采集任务交给本机 Ollama 模型：含设置面板 + 选型尺 + AI 可读说明书。 |
| 30 | [Soulize/dsh-agent-teams-prompt-assemble](https://github.com/Soulize/dsh-agent-teams-prompt-assemble) | 1 | 2026-09-28 | 2026-09-28 | Small DeepSeek Harness plugin that changes the official Agent Teams prompt gate without modifying the Agent Teams package itself. |
| 31 | [Soulize/dsh-continue-on-limit-host](https://github.com/Soulize/dsh-continue-on-limit-host) | 1 | 2026-09-27 | 2026-09-28 | Auto-continue for DeepSeek Harness: when a local model hits its output-token cap, automatically send "continue" so the reply keeps flowing |
| 32 | [ventisyn/dsh-approval-gate](https://github.com/ventisyn/dsh-approval-gate) | 1 | 2026-09-27 | 2026-09-28 | 适配 DSH 0.1.7-rc.2 的自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe） |
| 33 | [wqx11235/dsh-upgrade-guard](https://github.com/wqx11235/dsh-upgrade-guard) | 1 | 2026-09-28 | 2026-09-28 | DSH 升级守卫：升级前兼容盘点 / 升级后契约扫描 / 启动冒烟（DeepSeek Harness 插件） |
| 34 | [yannicksong0106/dsh-550c-boot](https://github.com/yannicksong0106/dsh-550c-boot) | 1 | 2026-09-28 | 2026-09-28 | 550C 开机动画 for DeepSeek Harness — 首帧由宿主半边注入，DSH 的 Loading 卡片不露脸；桌面原生标题栏按钮收编成终端配色 \| 550C boot splash plugin for DSH |
| 35 | [zhang66633/dsh-memvault](https://github.com/zhang66633/dsh-memvault) | 1 | 2026-09-28 | 2026-09-28 | DeepSeek Harness 插件：把 MemVault 的核心记忆块注入 system prompt（每步可见、无需工具调用），并把每个完成的回合交给 MemVault 的抽取/向量化管线。Host-only bundle · 零运行时依赖 · 只读直连 SQLite ｜ Inject MemVault core memory into the DSH system prompt and auto-extract finished turns. |
| 36 | [2CHariko/dsh-cost-meter](https://github.com/2CHariko/dsh-cost-meter) | 0 | 2026-09-10 | 2026-09-28 | Session spend for the DSH Web client: a stats-line pill that prices the durable tokenUsage projection with user-configured per-bucket unit prices. |
| 37 | [abdounasser202/dsh-deepseek-budget](https://github.com/abdounasser202/dsh-deepseek-budget) | 0 | 2026-09-28 | 2026-09-28 | Track your DeepSeek spent budget into DeepSeek Harness |
| 38 | [AieXile/dsh-memory-plugin](https://github.com/AieXile/dsh-memory-plugin) | 0 | 2026-09-27 | 2026-09-28 | DSH 记忆/规则插件（profile bundle）：每轮注入记忆与规则，提供 memory_* / rule_* 工具，标题栏图标浮层 + 设置页「记忆与规则」 |
| 39 | [aiyacharley/dsh-at-sider](https://github.com/aiyacharley/dsh-at-sider) | 0 | 2026-09-28 | 2026-09-28 | 给原生侧边栏文件树补上「@ 引用 + 修改时间」：右侧栏的 文件 标签页还是原生的，每一行多了一个紧跟文件名的【@文件】引用按钮，和行尾固定的【修改时间】。 |
| 40 | [asun-labs/dsh-plugin-token-dashboard](https://github.com/asun-labs/dsh-plugin-token-dashboard) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness plugin for generating a self-contained token usage dashboard |
| 41 | [BarneyZhaoooo/dsh-theme-native](https://github.com/BarneyZhaoooo/dsh-theme-native) | 0 | 2026-09-28 | 2026-09-28 | A small, native theme plugin for the DeepSeek Harness Web GUI. |
| 42 | [BeyondandSharp/dsh-plugin-scaling](https://github.com/BeyondandSharp/dsh-plugin-scaling) | 0 | 2026-09-28 | 2026-09-28 | 给 DSH Web-UI 的三栏做了各自独立的缩放 |
| 43 | [Bill-666code/dsh-kimi-shell](https://github.com/Bill-666code/dsh-kimi-shell) | 0 | 2026-09-28 | 2026-09-28 | DSH (DeepSeek Harness) Web UI plugin: turn the dsh-web-mobile session drawer into a kimi-style bottom sheet 把左侧会话抽屉变成 kimi 风格底部浮层 |
| 44 | [BoweiDuan/dsh-tui-session-manager](https://github.com/BoweiDuan/dsh-tui-session-manager) | 0 | 2026-09-28 | 2026-09-28 | Session manager plugin for dsh-TUI: a /sessions scene to browse, filter and truly delete saved sessions, plus cleanup of the state leftovers the host delete path leaves behind. |
| 45 | [CaT-Hode/DSH-app](https://github.com/CaT-Hode/DSH-app) | 0 | 2026-09-23 | 2026-09-28 | Windows desktop plugin for DeepSeek Harness — shared Web sessions and plugins, startup logs and update recovery. DSH 桌面插件：共用 Web 对话与插件。 |
| 46 | [ChenLuoi/dsh-auth-remote](https://github.com/ChenLuoi/dsh-auth-remote) | 0 | 2026-09-24 | 2026-09-28 | Single-user remote authentication for DeepSeek Harness: password, TOTP and revocable sessions |
| 47 | [CrazyPigHead/dsh-plugin-agents-loader](https://github.com/CrazyPigHead/dsh-plugin-agents-loader) | 0 | 2026-09-28 | 2026-09-28 | dsh plugin: auto-load ~/.agents/mcp.json MCP servers (http/stdio), ~/.agents/commands/ slash commands and AGENTS.md, with hot reload |
| 48 | [d0ublecl1ck/dsh-external-link](https://github.com/d0ublecl1ck/dsh-external-link) | 0 | 2026-09-28 | 2026-09-28 | Open http/https/mailto/tel anchor links from the DSH web GUI in the OS default application — including localhost URLs the Electron shell keeps in-app. |
| 49 | [d0ublecl1ck/dsh-skill-dollar](https://github.com/d0ublecl1ck/dsh-skill-dollar) | 0 | 2026-09-22 | 2026-09-28 | Invoke DeepSeek Harness skills with a $name gesture — conflict-free with / commands, with composer completion and blue text-ref parity. 用 $name 手势调用 DSH skill（与 / 命令不冲突）。 |
| 50 | [dao-awa/dsh-computer-use-native](https://github.com/dao-awa/dsh-computer-use-native) | 0 | 2026-09-28 | 2026-09-28 | Windows computer use for DeepSeek Harness, built for a vision model: screenshot the real desktop, read the interface from pixels, and drive it through Win32 FFI with no accessibility tree. Input posts to a window's own queue so the desktop focus is left alone. |
| 51 | [dn4hjtcr9s-del/dsh-wait-guard](https://github.com/dn4hjtcr9s-del/dsh-wait-guard) | 0 | 2026-09-28 | 2026-09-28 | Keep an Agent's turn open until every descendant subagent settles — a pure Host-plane completion gate for DeepSeek Harness. |
| 52 | [dzwalker/dsh-session-keepwarm](https://github.com/dzwalker/dsh-session-keepwarm) | 0 | 2026-09-28 | 2026-09-28 | Keep the most recently used sessions resident in the browser, so switching back reuses the loaded history instead of re-reading it. DSH plugin. |
| 53 | [eghrhegpe/dsh-connect-sensenova-token-plan](https://github.com/eghrhegpe/dsh-connect-sensenova-token-plan) | 0 | 2026-09-28 | 2026-09-28 | dsh - UI 侧边栏里的一个全局面板，展示商汤控制台的积分用量 |
| 54 | [fan56/dsh-agent-dispatch](https://github.com/fan56/dsh-agent-dispatch) | 0 | 2026-09-28 | 2026-09-28 | Jev-guided dispatch advice for DeepSeek Harness: before each turn, Jev judges whether to delegate and to which registered agent. Advice only — jev-optional, fail-open, keychain-first. |
| 55 | [fan56/dsh-jev-core](https://github.com/fan56/dsh-jev-core) | 0 | 2026-09-28 | 2026-09-28 | Shared TypeSafe Jev decision-model client for the dsh ecosystem: strict response validation, keychain-first key resolution, typed fail-open errors. Jev-optional by design. |
| 56 | [feihong-li/dsh-abaqus](https://github.com/feihong-li/dsh-abaqus) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness plugin: drive Abaqus CAE modelling from a declarative JSON spec, with a verified free CalculiX backend for solving and result extraction. |
| 57 | [fengbinmov/R4-Coder-Provider](https://github.com/fengbinmov/R4-Coder-Provider) | 0 | 2026-09-28 | 2026-09-28 | R4 Coder账户的套餐余额、钱包、并发上限、到期时间、今日消费与最近 7 天用量。 |
| 58 | [flyhigao/dsh-file-transfer](https://github.com/flyhigao/dsh-file-transfer) | 0 | 2026-09-28 | 2026-09-28 | Add a download button to DSH document previews |
| 59 | [gausszhou/dsh-scavenger](https://github.com/gausszhou/dsh-scavenger) | 0 | 2026-09-22 | 2026-09-28 | deepseek harness 插件清道夫 🧹🛡️ |
| 60 | [geokkjer/dsh-peak](https://github.com/geokkjer/dsh-peak) | 0 | 2026-08-19 | 2026-09-28 | Peak/off-peak pricing indicator for DeepSeek Harness — live composer pill with countdown, plus a status tool for cost-aware agents. |
| 61 | [geokkjer/dsh-selfup](https://github.com/geokkjer/dsh-selfup) | 0 | 2026-08-16 | 2026-09-28 | Self-update and deployment tools for DeepSeek Harness — status, update, install, and systemd management as an installable plugin bundle. |
| 62 | [GIN0076/dsh-install-review](https://github.com/GIN0076/dsh-install-review) | 0 | 2026-09-28 | 2026-09-28 | Pre-install review gate for DeepSeek Harness plugins: audit, approve the change plan, backup, then install（插件装前审查） |
| 63 | [Gnatnaituy/dsh-token-usage](https://github.com/Gnatnaituy/dsh-token-usage) | 0 | 2026-09-26 | 2026-09-28 | DeepSeek Harness plugin: adds a Token usage page to Settings, folding every provider and model's token spend (today / 7d / 30d / all time) from local session logs, with a GitHub-style usage calendar and per-model breakdowns. |
| 64 | [gosomea/dsh-opencode-go](https://github.com/gosomea/dsh-opencode-go) | 0 | 2026-09-28 | 2026-09-28 | OpenCode Go and Zen live model discovery, pricing and session routing for DeepSeek Harness |
| 65 | [gst20060726/dsh-auto-translate](https://github.com/gst20060726/dsh-auto-translate) | 0 | 2026-09-28 | 2026-09-28 | Zero-token on-demand translation for the DeepSeek Harness Web GUI — hover a block or drag-select text to translate in place; nothing auto-translates, no LLM calls, text never leaves your machine. ｜ 零 token 按需翻译：悬停或框选才翻，绝不自动翻页，文本不出本机。 |
| 66 | [HaoKuo/dsh-notebook-studio](https://github.com/HaoKuo/dsh-notebook-studio) | 0 | 2026-09-24 | 2026-09-28 | dsh-notebook-studio 是 DeepSeek Harness（dsh）插件：上传多篇 PDF，用提示词做文献综述、关键信息提取与研究设计，并生成带页码引用的报告（DOCX/PDF）或演示文稿（PPTX/PDF）。 \| dsh-notebook-studio is a DeepSeek Harness (dsh) plugin: upload PDF papers and use prompts for a literature review, key-finding extraction and a study design, then generate page-cited reports (DOCX/PDF) or slide decks (PPTX/PDF). |
| 67 | [HERO476/dsh-sidecard-ask](https://github.com/HERO476/dsh-sidecard-ask) | 0 | 2026-09-28 | 2026-09-28 | DSH ????(??????):????/????????,???????????????????Selection follow-up for DeepSeek Harness with an independent side-card answerer. |
| 68 | [hu568/dsh-plugin-cluster-preset](https://github.com/hu568/dsh-plugin-cluster-preset) | 0 | 2026-09-28 | 2026-09-28 | DSH「集群模式」agent preset：主控智能体自主编排 5 个具名专家子智能体，附「智能体寿命论」阶段提示器 |
| 69 | [huangmiuXyz/dsh-edit-retry](https://github.com/huangmiuXyz/dsh-edit-retry) | 0 | 2026-09-28 | 2026-09-28 | Right-click any user message to edit it and retry from that point — a client-side plugin for DeepSeek Harness (DSH). · 右键编辑任意一条用户消息并从那里重试。 |
| 70 | [ISimon3/dsh-theme-skin](https://github.com/ISimon3/dsh-theme-skin) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness 主题定制插件 — iOS 27 液态玻璃主题：设置页「主题定制」分区 + 顶栏快捷开关，明暗自适应，零依赖 · DSH theme plugin (glassmorphism) |
| 71 | [its0din-ai/harness-accountant](https://github.com/its0din-ai/harness-accountant) | 0 | 2026-09-28 | 2026-09-28 | DSH (DeepSeek Harness) Simple Balance Monitor Plugin \| DSH（DeepSeek Harness）简易余额监视插件 |
| 72 | [Jaffe2718/s1cap](https://github.com/Jaffe2718/s1cap) | 0 | 2026-09-27 | 2026-09-28 | System-1 decision models (Jev/Laya/Kev-class) as the governance layer for an LLM agent context lifecycle: growing association graph over session segments, relevance-gated recall with Trace-as-State ordering, and plan pre-ranking — measured in solve rate, cache hit/miss tokens, cost and latency. DSH plugin + harness-agnostic proxy. |
| 73 | [Jessie-1939/whalepal](https://github.com/Jessie-1939/whalepal) | 0 | 2026-09-27 | 2026-09-28 | WhalePal — a desktop whale-girl companion that understands what you're working on via cloud vision, with local-only data and no telemetry. |
| 74 | [JinzhaoTian/git-worktree-graph](https://github.com/JinzhaoTian/git-worktree-graph) | 0 | 2026-09-23 | 2026-09-28 | Browse Git worktrees and their commit ancestry in a graph — shipped as a DSH right-sidebar tab plugin. |
| 75 | [johnsonspirit/ocean-wave-theme](https://github.com/johnsonspirit/ocean-wave-theme) | 0 | 2026-09-26 | 2026-09-28 | Animated ocean waves with a whale swimming behind the page, plus translucent surfaces. |
| 76 | [johnsonspirit/open-with-finder-ide](https://github.com/johnsonspirit/open-with-finder-ide) | 0 | 2026-09-26 | 2026-09-28 | Open workspace folders in Finder / Zed / Ghostty from the DSH sidebar (macOS) |
| 77 | [kagura-chen/dsh-memes](https://github.com/kagura-chen/dsh-memes) | 0 | 2026-08-17 | 2026-09-28 | Meme plugin for DeepSeek Harness — 没有表情包的 agent 是没有灵魂的 |
| 78 | [knopki/dsh-prompt-profiles](https://github.com/knopki/dsh-prompt-profiles) | 0 | 2026-09-27 | 2026-09-28 | Per-session prompt profiles for DeepSeek Harness: reusable system-prompt sections, grouped into named profiles, sealed into the session prompt. |
| 79 | [laa1991/dsh-health](https://github.com/laa1991/dsh-health) | 0 | 2026-09-28 | 2026-09-28 | Declarative health readout for DSH: declare where to read, what counts as healthy, and which verdict each reading maps to. Read-only. |
| 80 | [LeiSureYu/dsh-smart-download](https://github.com/LeiSureYu/dsh-smart-download) | 0 | 2026-09-26 | 2026-09-28 | DSH 多线程下载插件：内置 aria2，智能探测文件大小自动选择下载策略（Windows x64/arm64、Linux x64/arm64） |
| 81 | [liggest/dsh-alt-enter-newline](https://github.com/liggest/dsh-alt-enter-newline) | 0 | 2026-09-27 | 2026-09-28 | 拯救 dsh 中的 Alt+Enter 换行选手 |
| 82 | [lildanger/dsh-skin-win2000](https://github.com/lildanger/dsh-skin-win2000) | 0 | 2026-09-28 | 2026-09-28 | Windows 2000 skin for the DSH Web GUI: metric-accurate grey chrome, two-tone gradient title bars, 1px bevels, square corners, 16px scrollbar. 给 DSH Web GUI 换上 Windows 2000 经典外观。 |
| 83 | [Maopk/dsh-termux-kit](https://github.com/Maopk/dsh-termux-kit) | 0 | 2026-09-26 | 2026-09-28 | Running DeepSeek Harness on a non-rooted Android phone, without having to sit and watch it. Termux widgets, a Console app and an Accessibility bridge. |
| 84 | [mattcarvercom/dsh-no-phone-home](https://github.com/mattcarvercom/dsh-no-phone-home) | 0 | 2026-09-27 | 2026-09-28 | Stop DeepSeek Harness (dsh) from phoning home: a patch-only bundle that disables every telemetry, diagnostics-upload, and feedback-collection row |
| 85 | [mattlennon/jev-harness-router](https://github.com/mattlennon/jev-harness-router) | 0 | 2026-09-28 | 2026-09-28 | Budget-aware Jev routing plugin for DeepSeek Harness with multi-provider reasoning, SSE, and cancellation reconciliation |
| 86 | [menghuanshiguang/devctl-dsh](https://github.com/menghuanshiguang/devctl-dsh) | 0 | 2026-09-28 | 2026-09-28 | devctl 家族 · 从另一台设备用 CLI 控制 DSH 会话 |
| 87 | [MengXinSu/floor-limiter](https://github.com/MengXinSu/floor-limiter) | 0 | 2026-09-03 | 2026-09-28 | Floor-triggered session compaction for DeepSeek Harness: compact old history once M real user floors accumulate, keeping the newest N verbatim |
| 88 | [ming-14/download-by-mirror-skill](https://github.com/ming-14/download-by-mirror-skill) | 0 | 2026-09-28 | 2026-09-28 | 让 AI 学会从镜像下载资源 - 覆盖 GitHub NuGet HuggingFace vcpkg Cargo Maven Maven DockerHub apt WinGet pip npm/pnpm |
| 89 | [ming-14/vuln-search-skill](https://github.com/ming-14/vuln-search-skill) | 0 | 2026-07-04 | 2026-09-28 | 多源漏洞搜索 Skill \| A AI Agent skill for CVE vulnerability searching, exploit discovery, and privilege escalation research. Integrates NVD, Exploit-DB, CISA-KEV, and Vulners databases. |
| 90 | [ming-14/weather-skill](https://github.com/ming-14/weather-skill) | 0 | 2026-07-01 | 2026-09-28 | SKILL - 多源 获取天气预报、查询气象信息、台风信息、生活指数（穿衣、洗车、紫外线等）、月相 |
| 91 | [miqian-nomad/dsh-new-workdir](https://github.com/miqian-nomad/dsh-new-workdir) | 0 | 2026-09-28 | 2026-09-28 | 一键领一个独立工作目录并开干净会话：目录即沙盒边界，产物不再互相污染。One click: a fresh timestamped workdir as a DSH workspace with a clean session. 零官方文件改动。 |
| 92 | [mkasoy/dsh-all-notify](https://github.com/mkasoy/dsh-all-notify) | 0 | 2026-09-23 | 2026-09-28 | deepseek harness notify plugin |
| 93 | [mocilukalbj/dsh-open-code-review](https://github.com/mocilukalbj/dsh-open-code-review) | 0 | 2026-09-28 | 2026-09-28 | Alibaba Open Code Review for DeepSeek Harness: native review tools, host-model delegation, and optional OCR-managed reviews. |
| 94 | [MovieMaker93/dsh-plugin-safe-upgrade](https://github.com/MovieMaker93/dsh-plugin-safe-upgrade) | 0 | 2026-09-28 | 2026-09-28 | Safe config history, guarded upgrades and automatic rollback for DeepSeek Harness (dsh) |
| 95 | [MrCashmere/dsh-model-ultra](https://github.com/MrCashmere/dsh-model-ultra) | 0 | 2026-09-28 | 2026-09-28 | 对DeepSeek Harness v0.2.0生效的高自由度模型设置插件 |
| 96 | [Napstablooky233/dsh-agent-dispatch](https://github.com/Napstablooky233/dsh-agent-dispatch) | 0 | 2026-09-28 | 2026-09-28 | Visible dispatch panel for DeepSeek Harness — decide whether other agents help, pick free-lane helpers, and inject the division-of-labour policy. |
| 97 | [OMSociety/dsh-ssh-tunnel](https://github.com/OMSociety/dsh-ssh-tunnel) | 0 | 2026-09-28 | 2026-09-28 | DSH 插件：多机 SSH 工作台。主机库、按项目授权、右侧栏里的终端与双栏 SFTP。模型用 SSHManager 工具执行命令、传文件；你在侧栏管主机与授权。密钥不进模型上下文。 |
| 98 | [orzgithub/dsh-ollama](https://github.com/orzgithub/dsh-ollama) | 0 | 2026-09-23 | 2026-09-28 | A plugin to use ollama in Deepseek Harness. |
| 99 | [pgnqukezrdxmhjso/dsh-prompt-file-injector](https://github.com/pgnqukezrdxmhjso/dsh-prompt-file-injector) | 0 | 2026-09-27 | 2026-09-28 | 把指定的文件注入 DeepSeek Harness（dsh）的模型上下文。Injects files you choose into the model context of DeepSeek Harness (dsh). |
| 100 | [qingyou002/dsh-auto-handoff](https://github.com/qingyou002/dsh-auto-handoff) | 0 | 2026-09-28 | 2026-09-28 | DSH plugin: hands a long session over to a fresh session in the same workspace on /handoff or at a token threshold, carrying the preset, model, permissions and plan mode across; the brief is written by the session's own model and the switch waits for a step boundary instead of interrupting running work. |
| 101 | [qujinting/dsh-web-search-clinepass](https://github.com/qujinting/dsh-web-search-clinepass) | 0 | 2026-09-28 | 2026-09-28 | DSH plugin (DeepSeek Harness): web_search provider that searches with the session's selected model via gateway-native search tools, replacing the built-in DeepSeek-only provider. |
| 102 | [rasyidmmz/dsh-paper-search](https://github.com/rasyidmmz/dsh-paper-search) | 0 | 2026-09-28 | 2026-09-28 | Literature search for DeepSeek Harness: 13 international sources and 3 Indonesian journal portals, all native HTTP, with a status tool that reports which sources answer. |
| 103 | [relaxyabc/dsh-GitPanel](https://github.com/relaxyabc/dsh-GitPanel) | 0 | 2026-09-28 | 2026-09-28 | 一个类似 intellij-idea 中 Git 插件UI 的  dsh git 插件 |
| 104 | [SanChou0627/dsh-token-bill](https://github.com/SanChou0627/dsh-token-bill) | 0 | 2026-09-28 | 2026-09-28 | Live DeepSeek balance and per-hour token costing for DSH: two agent tools read the live balance and the ledger-observed daily charge, then write Markdown/HTML/JSON statements. |
| 105 | [Shadid516/dsh-off-peak-hours](https://github.com/Shadid516/dsh-off-peak-hours) | 0 | 2026-09-27 | 2026-09-28 | DeepSeek Harness (dsh) plugin: an ambient pill under the composer showing whether your selected DeepSeek or z.ai plan is billed at peak or off-peak (half-price) rates right now, with a click-to-open schedule panel. PS: No human touched this code |
| 106 | [shinelon/dsh-mermaid-plugin](https://github.com/shinelon/dsh-mermaid-plugin) | 0 | 2026-09-28 | 2026-09-28 | Render mermaid code blocks in DSH chat as diagrams - 在 DSH 聊天中将 mermaid 代码块渲染为图形 |
| 107 | [ShukebtAb/Dsh-OtherAPI](https://github.com/ShukebtAb/Dsh-OtherAPI) | 0 | 2026-09-28 | 2026-09-28 | One-click setup for any OpenAI-compatible API in DeepSeek Harness, with automatic thinking-mode support. Adapted to the DSH 0.1.7 entry-config settings model. |
| 108 | [simplifyOurLife/dsh-spring-boot-launcher](https://github.com/simplifyOurLife/dsh-spring-boot-launcher) | 0 | 2026-09-22 | 2026-09-28 | 该项目是一个Deepseek Harness的插件，目前是作为Maven Spring Boot 项目的专用启动器。它提供 Agent 工具和 Web 管理面板，用同一套进程管理逻辑完成项目检查、Profile 选择、启停、状态查询和日志查看。A dedicated DSH launcher for discovering, starting and managing Maven Spring Boot services on Windows. |
| 109 | [SpookyWaste/dsh-bash-native](https://github.com/SpookyWaste/dsh-bash-native) | 0 | 2026-09-28 | 2026-09-28 | A Windows-native POSIX bash executor for the DSH shell seam: packaged brush engine, packaged POSIX toolchain, DSH's three-tier file policy honored |
| 110 | [stuga-dev/agent-plugins](https://github.com/stuga-dev/agent-plugins) | 0 | 2026-09-28 | 2026-09-28 | Packages that connect coding agents to Stuga: DeepSeek Harness and Pi. |
| 111 | [TetraSsky/dsh-hold](https://github.com/TetraSsky/dsh-hold) | 0 | 2026-09-25 | 2026-09-28 | Hold a drafted message until the session is actually finished, then send it. |
| 112 | [thissensen/dsh-harden](https://github.com/thissensen/dsh-harden) | 0 | 2026-09-27 | 2026-09-28 | DSH 运行时看护层：API 调用失败自动续接重试、工具调用失败被吞自动拉回、只输出思考的回合自动重试、新增对接 pwsh 的后台 job 工具、一键修复异常会话日志、区分子Agent并且可自定义内容的上下文自动压缩。 |
| 113 | [trentswd/dsh-escalation-review](https://github.com/trentswd/dsh-escalation-review) | 0 | 2026-09-28 | 2026-09-28 | Escalation-only LLM reviewer for DeepSeek Harness: reviews sandbox escapes only, keeps the sandbox, fails closed. |
| 114 | [Utmotc/dsh-plugin-balance](https://github.com/Utmotc/dsh-plugin-balance) | 0 | 2026-09-28 | 2026-09-28 | 在DSH左侧启用一个余额监测卡片 |
| 115 | [winditer/dsh-paste-spill](https://github.com/winditer/dsh-paste-spill) | 0 | 2026-09-28 | 2026-09-28 | Inbound large-paste handling for the DeepSeek Harness composer: each 4-50 KB paste folds into one chip, a &gt;=50 KB paste becomes a real file attachment with a deliverable card. |
| 116 | [wojiao42/dsh-space-optimizer](https://github.com/wojiao42/dsh-space-optimizer) | 0 | 2026-09-28 | 2026-09-28 | DSH 侧栏空间账本：看清每个任务占了多少磁盘、按项回收无主垃圾；会话日志绝不被裁剪 · Per-task disk-space ledger for DeepSeek Harness |
| 117 | [wxlei2004/dsh-plugins](https://github.com/wxlei2004/dsh-plugins) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness plugins collection |
| 118 | [xianshu-virtuous/dsh-nai-artist](https://github.com/xianshu-virtuous/dsh-nai-artist) | 0 | 2026-09-27 | 2026-09-28 | NAI Artist for DeepSeek Harness: a paint tool with in-conversation image cards, translate-to-tags, and a full WebUI workbench |
| 119 | [xianshu-virtuous/dsh-story-mode](https://github.com/xianshu-virtuous/dsh-story-mode) | 0 | 2026-09-27 | 2026-09-28 | Story mode for DeepSeek Harness: a session switch that roleplays in the current persona and loads workspace story/ documents as scene notes |
| 120 | [XIAOZHAOXSXH/dsh-moyu-reader](https://github.com/XIAOZHAOXSXH/dsh-moyu-reader) | 0 | 2026-09-28 | 2026-09-28 | dsh-moyu-reader，dsh小说阅读器 |
| 121 | [xujian519/dsh-annotator](https://github.com/xujian519/dsh-annotator) | 0 | 2026-09-27 | 2026-09-28 | 对DSH的交付物进行标注的插件，人工标注后，DSH会根据标注执行 |
| 122 | [xurunxin/dsh-llm-model-tuning](https://github.com/xurunxin/dsh-llm-model-tuning) | 0 | 2026-09-28 | 2026-09-28 | Per-model reasoning-effort levels and multimodal input settings for custom providers in the DeepSeek Harness Models settings page. |
| 123 | [xut1021/dsh-plugin-host](https://github.com/xut1021/dsh-plugin-host) | 0 | 2026-09-28 | 2026-09-28 | Windows 外置 DSH 插件托管：官方兼容检查、配置保留、版本切换、插件市场与加密快照 |
| 124 | [yfwu2020/dsh-reply-visual](https://github.com/yfwu2020/dsh-reply-visual) | 0 | 2026-09-27 | 2026-09-28 | DSH 回复可视化（图解）：把 AI 回复变成立即看得懂的单页图解——模型写单文件 HTML + 内联 SVG，右侧栏沙箱 iframe 渲染 |
| 125 | [yiyunet/dsh-learn-skills](https://github.com/yiyunet/dsh-learn-skills) | 0 | 2026-09-28 | 2026-09-28 | 一个跑在 DeepSeek Harness 输入区的学习插件：把「收集 → 提炼 → 关联 → 升级 → 沉淀 → 复用」做成有交互引导、预设管理、审核入库与体系体检的运行时能力。DeepSeek Harness plugin: a four-entry learning workspace. |
| 126 | [yoggu/dsh-cache-warmer](https://github.com/yoggu/dsh-cache-warmer) | 0 | 2026-09-27 | 2026-09-28 | Estimated cache time and opt-in, cost-aware prompt-cache warming for DeepSeek Harness. |
| 127 | [yoggu/dsh-model-picker](https://github.com/yoggu/dsh-model-picker) | 0 | 2026-09-27 | 2026-09-28 | Search, pin and hide models in DeepSeek Harness |
| 128 | [yoggu/dsh-telegram-bridge](https://github.com/yoggu/dsh-telegram-bridge) | 0 | 2026-09-26 | 2026-09-28 | Host-only DSH plugin for a pre-authorized private Telegram chat |
| 129 | [yoggu/dsh-token-cost](https://github.com/yoggu/dsh-token-cost) | 0 | 2026-09-12 | 2026-09-28 | Estimated current-session token cost from local pi-ai catalog prices; not a billed amount. |
| 130 | [yonchicy/dsh-composer-modenter](https://github.com/yonchicy/dsh-composer-modenter) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness web plugin: Enter for newline, Cmd/Ctrl+Enter to send |
| 131 | [yueyexiayu/dsh-huoqu](https://github.com/yueyexiayu/dsh-huoqu) | 0 | 2026-09-28 | 2026-09-28 | DSH desktop plugin: capture a rendered webpage into a local offline HTML and MHTML copy. |
| 132 | [yueyexiayu/dsh-subagents](https://github.com/yueyexiayu/dsh-subagents) | 0 | 2026-09-27 | 2026-09-28 | DSH desktop plugin: staged team plans, continuable members, dependency tasks, and a collaboration board. |
| 133 | [yuhhhong/dsh-skill-status](https://github.com/yuhhhong/dsh-skill-status) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness（DSH）的会话技能状态插件。在会话标题栏显示已确认加载的技能数量，点击「技能」打开右侧面板，查看完整正文是否仍在当前主助手上下文中，以及各次加载的正文版本与来源。 |
| 134 | [YV3507/dsh-plugin-allcrash](https://github.com/YV3507/dsh-plugin-allcrash) | 0 | 2026-09-28 | 2026-09-28 | DSH (DeepSeek Harness) Host plugin: a configured forbidden plugin - loaded, enabled, or about to be installed - crashes the Host process on the spot, with a crash report. Inspired by the Minecraft Forge mod allcrash. |
| 135 | [Zhang9628/Hestia](https://github.com/Zhang9628/Hestia) | 0 | 2026-09-15 | 2026-09-28 | DeepSeek Harness (DSH) Web UI 增强插件 —— 让你的 AI 会话界面更顺手。 |
| 136 | [zhuchuovo/dsh-clinepass](https://github.com/zhuchuovo/dsh-clinepass) | 0 | 2026-09-28 | 2026-09-28 | ClinePass subscription gateway for DeepSeek Harness: registers the plan OpenAI-compatible models as a provider route, exposes a local OpenAI-compatible reverse proxy any client can point at, and turns each call token usage into reference-price cost beside the official 5-hour, weekly and monthly quota windows. |
| 137 | [ZnonEn/dsh-mcp-manager](https://github.com/ZnonEn/dsh-mcp-manager) | 0 | 2026-09-28 | 2026-09-28 | DeepSeek Harness (DSH) 插件：在桌面端设置页里管理 MCP 服务器 —— 新增/编辑/删除/启停 + 运行状态，直接读写 profile 的 cordis.patch.yml，零依赖。 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- americanjeff/filestab
- bakasbk/dsh-connect-comate
- CN-WenYu/dsh-live-model-catalog
- fzy-yy/dsh-mcp-inventory
- GooDAnDReaDY/dsh-agent-orchestrator
- GooDAnDReaDY/dsh-im-hub-media
- HFUT-zhengjiahao/dsh-balance
- HFUT-zhengjiahao/dsh-process-control
- jackControls/dsh-nbcad-plate
- JinzhaoTian/git-worktree
- kagura-agent/dsh-memes
- Kr-ATG/dsh-triad
- Kr-ATG/dsh-web-search-anysearch
- Kr-ATG/dsh-webui
- Ln1m/dsh-extensions-panel
- maxwell-feng/dsh-searxng-web
- maxwell-feng/dsh-tesseract-ocr
- maxwell-feng/dsh-windows-ocr
- mykeura/dsh-minimalist-themes
- Nanako660/dsh-cost-meter
- Paloma966/dsh-thesis
- qikairo7/dsh-usage-panel
- SnowCrescenter-tech/dsh-launcher
- TLNing260310/dsh-researcher
- wangxiang0605qvq/dsh-minimal-win
- wangxiang0605qvq/dsh-vision-ocr
- wannanbigpig/dsh-sidebar
- yoggu/dsh-token-cost-estimate
