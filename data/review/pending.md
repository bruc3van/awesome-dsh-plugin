# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-26**
- 快照日期 / Snapshot date: **2026-09-26 (UTC)**
- 待审核 / Pending: **124**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **29**
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

对比上一份快照 **2026-09-25** / vs previous snapshot **2026-09-25**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **5**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) | 已核准 / approved | 1239 | +313 | 121 | 42d | 日增百星 | 日增 +313★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 3322 | +147 | 207 | 43d | 日增百星 | 日增 +147★ |
| ⚠️ [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | 已核准 / approved | 214 | +134 | 14 | 1d | 日增百星、榜单跃升 | 日增 +134★；榜单 162→57；创建 1 天 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7341 | +130 | 526 | 95d | 日增百星 | 日增 +130★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 9596 | +120 | 382 | 43d | 日增百星 | 日增 +120★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [yunxiiQwQ/dsh-maid-whale-UI](https://github.com/yunxiiQwQ/dsh-maid-whale-UI) | 34 | 2026-08-15 | 2026-09-26 | DeepSeek Harness Web UI 鲸鱼女仆主题插件 |
| 2 | [Innocent-children/TaskBelay](https://github.com/Innocent-children/TaskBelay) | 13 | 2026-08-14 | 2026-09-26 | Task control for AI coding agents: explicit scope, bounded verification, durable state, safe recovery. Codex · Claude Code · DeepSeek · ZCode. |
| 3 | [bruc3van/safer-dsh-market](https://github.com/bruc3van/safer-dsh-market) | 7 | 2026-08-15 | 2026-09-26 | 主打安全，提倡先审查再安装的DeepSeek Harness市场。深度扫描 5 分钟，放心使用每一天。 |
| 4 | [taikaikaikai-pixel/dsh-tap-archive-0.9.4](https://github.com/taikaikaikai-pixel/dsh-tap-archive-0.9.4) | 4 | 2026-09-06 | 2026-09-26 | CodeBuddy & Trae provider bundle for DeepSeek Harness (dsh): subscription-quota LLM access via loopback tap bridges — 18+ models, OAuth/API-key, usage metering. Unofficial, BYOC. |
| 5 | [dxww123/dsh-alphasolve](https://github.com/dxww123/dsh-alphasolve) | 2 | 2026-09-25 | 2026-09-26 | Session-scoped AlphaSolve workflow for DeepSeek Harness |
| 6 | [Ln1m/dsh-skill-sets](https://github.com/Ln1m/dsh-skill-sets) | 2 | 2026-09-26 | 2026-09-26 | Group skills into task-type sets: switching a set swaps the injected skill list (catalog + body shadowed) · 技能档：按任务类型分档，切档即换注入的技能清单 |
| 7 | [songoao25/dsh-chatgpt-sub](https://github.com/songoao25/dsh-chatgpt-sub) | 2 | 2026-08-15 | 2026-09-26 | ChatGPT Subscription - a DeepSeek Harness plugin: bind your ChatGPT account via official OAuth and chat with ChatGPT models inside DSH, using your Plus/Pro subscription quota |
| 8 | [YUNmengyuan/Herta-dsh](https://github.com/YUNmengyuan/Herta-dsh) | 2 | 2026-09-19 | 2026-09-26 | dsh插件版herta |
| 9 | [18569663yz-web/dsh-plugin-crypto-ticker](https://github.com/18569663yz-web/dsh-plugin-crypto-ticker) | 1 | 2026-09-26 | 2026-09-26 | DSH 侧边栏左下角的实时加密货币行情卡片：BTC / ETH / SOL / JUP 的价格、24h 涨跌幅与 24 点迷你走势图，价格跳动带脉冲反馈，零依赖、免密钥。A live crypto ticker card in the DeepSeek Harness sidebar footer, above the balance and Settings - zero dependencies, no API key. |
| 10 | [Aicksion/dsh-clean-desktop-shell-pro](https://github.com/Aicksion/dsh-clean-desktop-shell-pro) | 1 | 2026-09-26 | 2026-09-26 | Enhanced fork of dsh-clean-desktop-shell: auto-start backend, no browser tab, ask-before-quit on exit, parallel cold start. |
| 11 | [copylee711/dsh-proxy](https://github.com/copylee711/dsh-proxy) | 1 | 2026-09-26 | 2026-09-26 | Configure proxy for deepseek harness |
| 12 | [Daniel92Q/dsh-sidebar-footer-stack](https://github.com/Daniel92Q/dsh-sidebar-footer-stack) | 1 | 2026-09-26 | 2026-09-26 | DeepSeek Harness plugin: stacks the sidebar footer slot entries vertically, unifies their card chrome, and lets you drag them to reorder. |
| 13 | [ffyfox/dsh-desktop-linux](https://github.com/ffyfox/dsh-desktop-linux) | 1 | 2026-09-26 | 2026-09-26 | 将官方 DeepSeek Harness 桌面打包移植到 Linux：AppImage、deb、rpm 和 Arch PKGBUILD，并通过一套 12 个补丁系列从上游源码构建。Ports the official DeepSeek Harness desktop packaging to Linux: AppImage, deb, rpm and an Arch PKGBUILD, built from upstream sources through a 12-patch series. |
| 14 | [ffyfox/dsh-linux-integration](https://github.com/ffyfox/dsh-linux-integration) | 1 | 2026-09-20 | 2026-09-26 | DeepSeek Harness 的 Linux 原生桌面集成：XDG 桌面入口、无边框独立窗口、关窗自动停服务。Linux native desktop integration for DeepSeek Harness: XDG desktop entry, borderless standalone window, and automatic service shutdown on window close. |
| 15 | [functy23/dsh-mcp-studio](https://github.com/functy23/dsh-mcp-studio) | 1 | 2026-09-26 | 2026-09-26 | DeepSeek Harness 的 MCP 服务与 Skills 管理器：面板里增删改 MCP 行、扫描导入其他 Agent 配置、管理 Skills（DSH Web 插件） |
| 16 | [HapyRain/dsh-router-laya](https://github.com/HapyRain/dsh-router-laya) | 1 | 2026-09-26 | 2026-09-26 | Auto tier routing for DSH: a locally fine-tuned model picks low/high/max thinking effort per message. Private, <1s, no cloud. 自动档位路由 |
| 17 | [Jovan1666/commandcode-usage](https://github.com/Jovan1666/commandcode-usage) | 1 | 2026-09-21 | 2026-09-26 | Command Code plan usage for seven coding agents: one core, seven adapters. Runs locally, so checking your quota costs no quota. |
| 18 | [lakeofsky347/dsh-oauth](https://github.com/lakeofsky347/dsh-oauth) | 1 | 2026-09-24 | 2026-09-26 | 一个适用于dsh的通过oauth认证实现模型注入的插件 |
| 19 | [LexFlowApp/LexFlow](https://github.com/LexFlowApp/LexFlow) | 1 | 2026-09-26 | 2026-09-26 | Local-first macOS desktop app for legal work — conversation, standards, archive, and Markdown workbench powered by DeepSeek Harness. |
| 20 | [Ln1m/anoslide-plugins](https://github.com/Ln1m/anoslide-plugins) | 1 | 2026-09-26 | 2026-09-26 | VS Code-like layout for DSH: file tree / multi-tab viewer / skill & MCP management + global persona injection (@anoslide namespace) · VS Code 式布局：文件树 / 多标签查看器 / Skill 与 MCP 管理 + 全局人设注入 |
| 21 | [Ln1m/dsh-archive-button](https://github.com/Ln1m/dsh-archive-button) | 1 | 2026-09-26 | 2026-09-26 | Sidebar archive button: two-click confirm, zips sessions idle for more than 3 days and deletes the originals · 侧栏归档按钮：两击确认，把空闲超过 3 天的会话打包并删除原目录 |
| 22 | [Ln1m/dsh-extensions-panel](https://github.com/Ln1m/dsh-extensions-panel) | 1 | 2026-09-26 | 2026-09-26 | Registers a virtual-display toggle card in the sidebar Extensions tab · 在左栏「功能」Tab 注册虚拟显示器开关卡片 |
| 23 | [Ln1m/dsh-lan-services](https://github.com/Ln1m/dsh-lan-services) | 1 | 2026-09-26 | 2026-09-26 | LAN service manager: probes ports 3090-3099, lists titles and LAN URLs, one-click start/stop · 局域网服务管理器：探测 3090~3099 端口段的本地 HTTP 服务，一键启停 |
| 24 | [Ln1m/dsh-literature-search](https://github.com/Ln1m/dsh-literature-search) | 1 | 2026-09-26 | 2026-09-26 | Model-callable literature_search tool (OpenAlex by citation count + arXiv by relevance) · 模型可调用的 literature_search 工具（OpenAlex 被引排序 + arXiv 相关度） |
| 25 | [Ln1m/dsh-local-file-search](https://github.com/Ln1m/dsh-local-file-search) | 1 | 2026-09-26 | 2026-09-26 | Adds a machine-wide file search to the composer @ menu (hits never enter the file tree or workspace index) · 在 @ 列表加「搜索本机文件」，全机一次性搜索，不进文件栏与工作区索引 |
| 26 | [Ln1m/dsh-restart-button](https://github.com/Ln1m/dsh-restart-button) | 1 | 2026-09-26 | 2026-09-26 | Session-header two-click Restart DSH button that restarts exactly this instance · 会话头两击确认「重启 DSH」，按本进程身份重启同一实例 |
| 27 | [Ln1m/dsh-vk-suite](https://github.com/Ln1m/dsh-vk-suite) | 1 | 2026-09-26 | 2026-09-26 | Three-column layout suite for DSH: contract + skeleton + files / composer / viewer / settings / terminal / cmdstrip (8 packages) · 三栏 layout 生态：契约 + 骨架 + 8 个功能包 |
| 28 | [Ln1m/dsh-wifi-access](https://github.com/Ln1m/dsh-wifi-access) | 1 | 2026-09-26 | 2026-09-26 | Host-side mobile access for DSH: 3081 reverse proxy (0.0.0.0:3081 -> 127.0.0.1:3080) + mobile browser shims; the UI lives in dsh-pocket · 移动端访问 host 侧实现与 3081 反代热备（界面由 dsh-pocket 提供） |
| 29 | [Planckbaka/dsh-plugin-github-workflows](https://github.com/Planckbaka/dsh-plugin-github-workflows) | 1 | 2026-09-26 | 2026-09-26 | GitHub workflows for DeepSeek Harness (DSH): repos, PRs, issues, commits, releases, Actions, Codespaces, search & raw gh api - one plugin on the GitHub CLI |
| 30 | [pure-craft/dsh-actions](https://github.com/pure-craft/dsh-actions) | 1 | 2026-09-25 | 2026-09-26 | Deterministic project actions for people and agents — a DeepSeek Harness Web plugin. One actions.json, two surfaces: a right-sidebar panel and agent tools. |
| 31 | [re-ITRT/dsh-skill-mcp-panel](https://github.com/re-ITRT/dsh-skill-mcp-panel) | 1 | 2026-09-26 | 2026-09-26 | A Skill list and MCP server manager for DeepSeek Harness, mounted as a sidebar panel and themed entirely from the host's own design tokens. |
| 32 | [rinDBeans/codex-ui](https://github.com/rinDBeans/codex-ui) | 1 | 2026-09-26 | 2026-09-26 | DSH Web 的 Codex 化界面插件 · A Codex-style interface plugin for DSH Web |
| 33 | [s-huizhuy-u/dsh-github-sync](https://github.com/s-huizhuy-u/dsh-github-sync) | 1 | 2026-09-26 | 2026-09-26 | Publish a DeepSeek Harness workspace to GitHub: create the repo, initialize git, commit, and push — with the token held in the DSH credential store. |
| 34 | [sunzphy/dsh-sidebar-status](https://github.com/sunzphy/dsh-sidebar-status) | 1 | 2026-09-26 | 2026-09-26 | DeepSeek account wallet balance and the live peak/off-peak billing period, in a fixed status region at the sidebar foot — plus a one-click official top-up link. |
| 35 | [Zou82/dsh-plugin-git-sync](https://github.com/Zou82/dsh-plugin-git-sync) | 1 | 2026-08-26 | 2026-09-26 | Git + GitHub automation plugin for DeepSeek Harness: ask-before-init repo creation with user-confirmed naming and rename-on-demand, auto-sync on every code update, secure credential handling. |
| 36 | [1497105876/dsh-text-inject](https://github.com/1497105876/dsh-text-inject) | 0 | 2026-09-26 | 2026-09-26 | dsh 插件：在官方设置页把文字注入系统提示词 / 会话上下文，独立文件存储，热加载 + 历史备份 · Inject text into the DSH system prompt or session context from a Settings page |
| 37 | [5havv/dsh-weixin](https://github.com/5havv/dsh-weixin) | 0 | 2026-09-26 | 2026-09-26 | WeChat channel plugin for DeepSeek Harness, over Tencent's iLink Bot API |
| 38 | [Amir83Nasr/dsh-rastin](https://github.com/Amir83Nasr/dsh-rastin) | 0 | 2026-09-25 | 2026-09-26 | Rastin — Persian RTL Cordis bundle for DeepSeek Harness Web GUI: RTL chat, queue, questions on embedded IranYekanX; FiraMono Nerd Font sidebar terminal; todo dock auto-open. |
| 39 | [ardesp0630/dsh-work-progress](https://github.com/ardesp0630/dsh-work-progress) | 0 | 2026-09-26 | 2026-09-26 | Persistent work-progress row for DeepSeek Harness: task completion, a progress bar, and what the agent is doing right now. |
| 40 | [ArthurZhou/dsh-plugin-model-hub](https://github.com/ArthurZhou/dsh-plugin-model-hub) | 0 | 2026-09-26 | 2026-09-26 | A DeepSeek Harness web plugin that adds a Model Hub settings page for configuring |
| 41 | [Billwu18/dsh-cache-hit-monitor](https://github.com/Billwu18/dsh-cache-hit-monitor) | 0 | 2026-09-26 | 2026-09-26 | Live prompt-cache telemetry for the current session in the DSH right sidebar: a register bank, a dot-matrix hit rate and a reactor-core history board. |
| 42 | [Biogod2020/dsh-article-review](https://github.com/Biogod2020/dsh-article-review) | 0 | 2026-09-25 | 2026-09-26 | DSH Markdown manuscript review plugin source: annotations, proposals, version comparison, figures and BibTeX |
| 43 | [bruceyork00-a11y/PinMe](https://github.com/bruceyork00-a11y/PinMe) | 0 | 2026-09-26 | 2026-09-26 | Just Pin a model to Favorites, so you dont need to choose it from menu. (Dsh plugin) |
| 44 | [Chrissadecurved88/Codex-X](https://github.com/Chrissadecurved88/Codex-X) | 0 | 2026-09-25 | 2026-09-26 | Streamline OpenAI Codex workflows with visual prompt injection, provider management, session sync, and TOML config editing for desktop and CLI. |
| 45 | [dienlanhvietnam-lang/deepseek-harness-vietnamese](https://github.com/dienlanhvietnam-lang/deepseek-harness-vietnamese) | 0 | 2026-09-26 | 2026-09-26 | Vietnamese language pack for DeepSeek Harness (DSH) with complete localization, CI verification and upstream tracking. |
| 46 | [drscrewdriver/dsh-browser-cdp](https://github.com/drscrewdriver/dsh-browser-cdp) | 0 | 2026-09-22 | 2026-09-26 | DSH 浏览器插件（原 dsh-ego-browser）：让 Agent 通过 CDP 接入真实 Chrome —— 远程目标序列与激活、实时视频/截图回传、登录导入。Remote-CDP agent browser for DeepSeek Harness. |
| 47 | [eighteentang/dsh-plugin-dev-tools](https://github.com/eighteentang/dsh-plugin-dev-tools) | 0 | 2026-09-26 | 2026-09-26 | DSH 开发工具箱：界面元素定位（Alt+悬浮）、随插件分发的开发经验库、开发模式自检清单注入 |
| 48 | [EXarchive/DshLauncher](https://github.com/EXarchive/DshLauncher) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness (DSH) 桌面控制台 —— 单文件便携，双击即用 |
| 49 | [fan56/dsh-approval-policy](https://github.com/fan56/dsh-approval-policy) | 0 | 2026-09-25 | 2026-09-26 | dsh plugin: unattended approval gate — bounded answer window for subagent/scheduled/cron approvals, fail-closed default instead of hanging (per origin or per session) |
| 50 | [Fishsb/DSH-Mana](https://github.com/Fishsb/DSH-Mana) | 0 | 2026-09-26 | 2026-09-26 | Mana（末那识）：认知架构模拟与长期 AI 助手 —— 基于人类记忆架构的认知内核（DSH 插件集） |
| 51 | [FlyingBamboo/dsh-pkg-atlas](https://github.com/FlyingBamboo/dsh-pkg-atlas) | 0 | 2026-09-26 | 2026-09-26 | DSH 本机代码包依赖图谱（开发工具）：把已安装的 @deepseek-ai/* 包与第三方插件的依赖、挂载关系画成区-组-包三层交互图，支持聚焦、拖拽布局与中英切换。零运行时依赖，内置 cytoscape，断网可用。 |
| 52 | [gezi-wen/dsh-guikit](https://github.com/gezi-wen/dsh-guikit) | 0 | 2026-09-12 | 2026-09-26 | Windows desktop-control tools for DeepSeek Harness (DSH): screen layout, annotated screenshots, click / type / key / scroll, window management, and UI Automation structured queries. Zero dependencies, no resident service, no API key. |
| 53 | [GIN0076/dsh-token-usage](https://github.com/GIN0076/dsh-token-usage) | 0 | 2026-09-26 | 2026-09-26 | 📊 Token usage dashboard for DeepSeek Harness Settings — daily/weekly/monthly per-model token stats with line & bar charts. Local-first, zero deps, pure SVG. DSH 设置面板词元用量统计插件 |
| 54 | [having5548/dsh-backup](https://github.com/having5548/dsh-backup) | 0 | 2026-09-25 | 2026-09-26 | Backup & restore plugin for DeepSeek Harness: workspace, full conversations (byte-exact), attachments, settings and dsh-mnemon memory data in one zip |
| 55 | [Headmaster218/dsh-llm-moe4all](https://github.com/Headmaster218/dsh-llm-moe4all) | 0 | 2026-09-26 | 2026-09-26 | Local MoE4All engine provider for DeepSeek Harness. / DeepSeek Harness MoE4All  |
| 56 | [HuaimaoCy/dsh-agent-hub](https://github.com/HuaimaoCy/dsh-agent-hub) | 0 | 2026-09-26 | 2026-09-26 | DSH plugin: run several agents on different models at once, with a shared real-time progress board. |
| 57 | [HuaimaoCy/dsh-codex-chatgpt](https://github.com/HuaimaoCy/dsh-codex-chatgpt) | 0 | 2026-09-26 | 2026-09-26 | Use the Codex desktop app's ChatGPT models inside DeepSeek Harness: a first-class LLM provider plus conversation-access tools, reusing the desktop app's own ChatGPT sign-in. |
| 58 | [HuaimaoCy/dsh-memory-vault](https://github.com/HuaimaoCy/dsh-memory-vault) | 0 | 2026-09-26 | 2026-09-26 | Knowledge and memory vault for DSH: memory groups with automatic summarization, free assignment between conversation memory and the knowledge base, priorities, a base-prompt layer, and AI curation. |
| 59 | [huguangyu666/dsh-plugin-android-emulator](https://github.com/huguangyu666/dsh-plugin-android-emulator) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness plugin: port of the ZCode official android-emulator plugin — 23 Android build / emulator / ADB / UI-Automator MCP tools + the android-dev skill |
| 60 | [Iambatman1928/dsh-lawagent-ui](https://github.com/Iambatman1928/dsh-lawagent-ui) | 0 | 2026-09-26 | 2026-09-26 | ????????? lawagent-ui:??????????(DSH ??) |
| 61 | [inrainbws/dsh-vibe-mode](https://github.com/inrainbws/dsh-vibe-mode) | 0 | 2026-09-25 | 2026-09-26 | omp's vibe mode for DeepSeek Harness. /vibe turns the session into a director. |
| 62 | [jameswatt139240-crypto/dsh-ATLAS](https://github.com/jameswatt139240-crypto/dsh-ATLAS) | 0 | 2026-09-24 | 2026-09-26 | One @ . Any plugin can register. |
| 63 | [jarvisai615-debug/dsh-plugin-a-gate-must-read-what-the-reader-reads](https://github.com/jarvisai615-debug/dsh-plugin-a-gate-must-read-what-the-reader-reads) | 0 | 2026-09-26 | 2026-09-26 | a-gate-must-read-what-the-reader-reads: a skill published from Jarvis |
| 64 | [jarvisai615-debug/dsh-plugin-reply-short](https://github.com/jarvisai615-debug/dsh-plugin-reply-short) | 0 | 2026-09-26 | 2026-09-26 | reply-short: a skill published from Jarvis |
| 65 | [jarvisai615-debug/dsh-plugin-the-supervisor-also-sleeps](https://github.com/jarvisai615-debug/dsh-plugin-the-supervisor-also-sleeps) | 0 | 2026-09-26 | 2026-09-26 | the-supervisor-also-sleeps: a skill published from Jarvis |
| 66 | [jarvisai615-debug/dsh-plugin-turn-a-defect-into-a-written-rule](https://github.com/jarvisai615-debug/dsh-plugin-turn-a-defect-into-a-written-rule) | 0 | 2026-09-26 | 2026-09-26 | turn-a-defect-into-a-written-rule: a skill published from Jarvis |
| 67 | [jevgpt/dsh-plugin-locale-tr](https://github.com/jevgpt/dsh-plugin-locale-tr) | 0 | 2026-09-26 | 2026-09-26 | Turkish (tr) language pack for the DeepSeek Harness web GUI - 45 namespaces, 1,870 UI strings, no core changes |
| 68 | [jonah791/dsh-temporal-self](https://github.com/jonah791/dsh-temporal-self) | 0 | 2026-09-26 | 2026-09-26 | 时间自我模型 T1 时距注入（距主人上条 / 距自圈 / 今日已醒）——注入坐标，不假装感觉 |
| 69 | [JWE24-code/moqi](https://github.com/JWE24-code/moqi) | 0 | 2026-09-24 | 2026-09-26 | Moqi — the unspoken understanding between you and your harness. A terminal app for DeepSeek Harness, packaged as a bundle: interleaved transcript, model picker, concurrent sessions, background agents, keyboard-first. |
| 70 | [Kaede0614/dsh-history-fictionologists](https://github.com/Kaede0614/dsh-history-fictionologists) | 0 | 2026-09-25 | 2026-09-26 | 基于《崩坏：星穹铁道》官方世界观的 DSH 二创插件（/gs）：神人制造机出科幻灵感、构史文集写短篇、星际构史播报编新闻；12 个 Wiki 数据源增量抓取并本地缓存，抓不到就自动回退缓存。非营利二创，MIT。 |
| 71 | [kangtsang/dsh-worktree-space](https://github.com/kangtsang/dsh-worktree-space) | 0 | 2026-09-26 | 2026-09-26 | dsh-worktree-space is a DSH plugin that creates isolated multi-repo workspaces for AI agents using Git worktrees. Each task gets its own workspace containing separate worktrees for every repository, enabling parallel agents to work without file conflicts, context pollution, or tangled commits. |
| 72 | [laohankk/dsh-crt-skins](https://github.com/laohankk/dsh-crt-skins) | 0 | 2026-09-13 | 2026-09-26 | Two retro terminal skins for the DeepSeek Harness Web UI: amber phosphor CRT and Fallout-style Pip-Boy green. |
| 73 | [leolee9086/dsh-viz](https://github.com/leolee9086/dsh-viz) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness 可视化卡面插件：把数据画成会话里的一张图（时间线、关系网、日历、ECharts、图册） |
| 74 | [Lequait/dsh-glm-web](https://github.com/Lequait/dsh-glm-web) | 0 | 2026-09-26 | 2026-09-26 | 非官方的智谱清言（chatglm.cn）网页版 provider for DeepSeek Harness —— 用网页版登录态与积分驱动 agent。Unofficial Zhipu Qingyan web provider for dsh. |
| 75 | [Lequait/dsh-proxy-router](https://github.com/Lequait/dsh-proxy-router) | 0 | 2026-09-26 | 2026-09-26 | Direct-first fetching with automatic proxy fallback for DeepSeek Harness. 订阅链接 → 本地内核 → 直连优先、失败自动切代理 |
| 76 | [Lgv-H/dsh-maibot-plugin-writer](https://github.com/Lgv-H/dsh-maibot-plugin-writer) | 0 | 2026-09-26 | 2026-09-26 | DSH 插件：让 DSH（DeepSeek Harness）自己编写、校验、安装麦麦（MaiBot）插件。5 个 maibot_* 工具 + 随包 skill，能力白名单与 SDK 方法表实时取自本机 MaiBot |
| 77 | [linanbuan/dsh-usage](https://github.com/linanbuan/dsh-usage) | 0 | 2026-09-26 | 2026-09-26 | 用量 · Usage — DeepSeek Harness (DSH) 设置面板：当日/累计 token 用量、缓存命中、历史日历，以及 kimi-coding / commandcode 的额度与刷新时间。 A DSH settings panel: token usage, cache hits, a history calendar, and provider quotas. |
| 78 | [liuyun847/dsh-client-ui-session-rail](https://github.com/liuyun847/dsh-client-ui-session-rail) | 0 | 2026-09-26 | 2026-09-26 | DSH Web 客户端插件:侧边栏收起时在左侧空白区竖排显示活跃会话横条 (DeepSeek Harness) |
| 79 | [liuyun847/dsh-host-restart](https://github.com/liuyun847/dsh-host-restart) | 0 | 2026-09-26 | 2026-09-26 | DSH 宿主插件:给模型一个 restart_dsh 工具,重启 dsh 后自动恢复原会话续跑 (DeepSeek Harness) |
| 80 | [liuyun847/dsh-llm-auto](https://github.com/liuyun847/dsh-llm-auto) | 0 | 2026-09-23 | 2026-09-26 | DSH 宿主插件:注册 auto 模型,按有序回退链在多条 provider+model 间静默切换 (DeepSeek Harness) |
| 81 | [Ln1m/dsh-hot-memory](https://github.com/Ln1m/dsh-hot-memory) | 0 | 2026-09-26 | 2026-09-26 | Projects Mnemon USER.md / MEMORY.md into every session system prompt · 把 Mnemon 的 USER.md / MEMORY.md 投影进每个会话的 systemPrompt |
| 82 | [longgege-cd/dsh-skin-pixel-anime](https://github.com/longgege-cd/dsh-skin-pixel-anime) | 0 | 2026-09-26 | 2026-09-26 | Pixel-anime skin plugin for DeepSeek Harness web UI: palettes, pixel fonts (incl. simplified Chinese), corner presets, pixel clock. |
| 83 | [lovezi0/dsh-workspace-acl-allow](https://github.com/lovezi0/dsh-workspace-acl-allow) | 0 | 2026-09-26 | 2026-09-26 | 处理沟槽的dsh Windows 的 DACL（Discretionary Access Control List，自主访问控制列表）必须显式授予的问题 |
| 84 | [lychee888/galvanize-dsh](https://github.com/lychee888/galvanize-dsh) | 0 | 2026-08-28 | 2026-09-26 | Triggers inside your DSH agent: wake a fresh DeepSeek Harness session when files, mail, webhooks, or git events happen. Native Cordis bundle, heartbeat-proved install. |
| 85 | [miqian-nomad/dsh-browser-playwright-codex](https://github.com/miqian-nomad/dsh-browser-playwright-codex) | 0 | 2026-09-26 | 2026-09-26 | Codex-merged dsh-browser-playwright (compiled-only fork for DeepSeek Harness) + full diagnosis and patches for the 'minimized browser window gets yanked back' bug. 面向 DeepSeek Harness 的浏览器插件整合版 + 最小化窗口被拽回桌面的诊断与补丁。 |
| 86 | [miseryrua/dsh-wb-memory](https://github.com/miseryrua/dsh-wb-memory) | 0 | 2026-09-26 | 2026-09-26 | 给 DSH 里的 Agent 一份跨会话长期记忆：真值源是工作区里的纯 Markdown，无向量库、无外部服务、零运行时依赖；每回合按预算分层注入 systemPrompt，后台自动流水 → 提炼 → 整理 → 治理。 |
| 87 | [mpetruc/dsh-vcc](https://github.com/mpetruc/dsh-vcc) | 0 | 2026-09-26 | 2026-09-26 | Deterministic VCC compaction for DSH |
| 88 | [NamesMT/dsh-home-hosted](https://github.com/NamesMT/dsh-home-hosted) | 0 | 2026-09-25 | 2026-09-26 | home-hosted servers management with boot autostart from DeepSeek Harness (dsh). |
| 89 | [Neo65536-engineer/dsh-agent-log](https://github.com/Neo65536-engineer/dsh-agent-log) | 0 | 2026-09-26 | 2026-09-26 | Read-only work reports for DeepSeek Harness: reconstruct what an agent task actually did from session logs — tools used, files read/written, commands run, test results, failures, token usage, and whether it finished. Fully offline, no API key, no data leaves your machine.   |
| 90 | [noahchalifour/dsh-anthropic-image-clamp](https://github.com/noahchalifour/dsh-anthropic-image-clamp) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness plugin: downscale images on Claude requests so many-image requests never hit the 2000px limit |
| 91 | [notf0und/dsh-opencode-sounds](https://github.com/notf0und/dsh-opencode-sounds) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness plugin: opencode's notification sound pack for the DSH Web UI (fork of @ai-galaxy/dsh-sound) |
| 92 | [overact/dsh-context-management](https://github.com/overact/dsh-context-management) | 0 | 2026-09-26 | 2026-09-26 | Windowed compaction, session-private notes and paged history recall for DeepSeek Harness (DSH) |
| 93 | [PanChengN/dsh-plugin-session-delete](https://github.com/PanChengN/dsh-plugin-session-delete) | 0 | 2026-09-26 | 2026-09-26 | 给 DeepSeek Harness 侧栏会话菜单加一行「删除会话」：真正从磁盘删除会话记录、派生缓存与子智能体会话（非官方插件） |
| 94 | [pgnqukezrdxmhjso/dsh-llm-codebuddy-power](https://github.com/pgnqukezrdxmhjso/dsh-llm-codebuddy-power) | 0 | 2026-09-26 | 2026-09-26 | 功能齐全的 CodeBuddy（WorkBuddy）提供者插件。 A full-featured CodeBuddy (WorkBuddy) provider plugin. |
| 95 | [plumeume/dsh-copilot-key](https://github.com/plumeume/dsh-copilot-key) | 0 | 2026-09-26 | 2026-09-26 | 把笔记本的 Copilot 硬件键变成启动/唤起 DeepSeek Harness：自研按键钩子 + DSH 管理器插件（dsh-copilot-key，已发布 npm） |
| 96 | [pomelotea-yuzu/dsh-add-files](https://github.com/pomelotea-yuzu/dsh-add-files) | 0 | 2026-08-15 | 2026-09-26 | DSH chat composer file/folder picker: add files or folders to a message as readable references Browse the filesystem and attach files/folders to DSH chat messages as <file>path</file> references the model can read |
| 97 | [pomelotea-yuzu/dsh-memory-layered](https://github.com/pomelotea-yuzu/dsh-memory-layered) | 0 | 2026-08-15 | 2026-09-26 | Layered (global + per-project) bounded file-backed memory for DeepSeek Harness — model-curated with user intervention, versioned writes, TTL expiry, session search, and an in-chat memory panel |
| 98 | [pomelotea-yuzu/dsh-updater](https://github.com/pomelotea-yuzu/dsh-updater) | 0 | 2026-08-25 | 2026-09-26 | DeepSeek Harness (dsh) update checker plugin: check the latest release from GitHub right inside the Settings panel, view the changelog, and copy the upgrade command. Check-only — no auto install. |
| 99 | [ProgrammerAsahi/dsh-client-ui-tweaks](https://github.com/ProgrammerAsahi/dsh-client-ui-tweaks) | 0 | 2026-09-25 | 2026-09-26 | DSH Desktop UI plugin: edit-and-resend with fork branches, sidebar branch-family grouping, unified titles, and auto summary titles with a pixel shimmer effect. |
| 100 | [ramwin/django-generic-websocket-project](https://github.com/ramwin/django-generic-websocket-project) | 0 | 2023-12-24 | 2026-09-26 | a generic websocket (Django + Channels room broadcast) + DSH plugin dsh-plugin-ai-council: AI council that puts DeepSeek, Kimi/Claude and a human in one room — multi-model review with a 3-second human interrupt window |
| 101 | [s867968286/dsh-companion](https://github.com/s867968286/dsh-companion) | 0 | 2026-09-10 | 2026-09-26 | 给 DSH 助手赋予人格、灵魂与长期记忆：用 Markdown 定义伙伴的身份、性格、准则与记忆，自动写日记、自动更新记忆。Give your DSH assistant a soul, personality, and long-term memory. |
| 102 | [seanchen88/dsh-pluginHive](https://github.com/seanchen88/dsh-pluginHive) | 0 | 2026-09-26 | 2026-09-26 | deepseek harness的自定义插件（包括MCP工具、技能管理面板等） |
| 103 | [shiyan688/dsh-paperdesk](https://github.com/shiyan688/dsh-paperdesk) | 0 | 2026-09-26 | 2026-09-26 | DSH paper workbench: arXiv search → local library (metadata/PDF/full text) → L1/L2/L3 three-layer reading notes. Host + browser halves in one package, no build step. |
| 104 | [shuiiiiimu/dsh-selfharness](https://github.com/shuiiiiimu/dsh-selfharness) | 0 | 2026-09-26 | 2026-09-26 | DSH 上的 Harness 层自我改进插件 |
| 105 | [Snowy117/dsh-direnv](https://github.com/Snowy117/dsh-direnv) | 0 | 2026-09-26 | 2026-09-26 | Load each workspace's direnv environment into every DeepSeek Harness command. 让 DSH 每个工作区的子进程自动带上该工作区的 direnv 环境。 |
| 106 | [sundusk/dsh-pet](https://github.com/sundusk/dsh-pet) | 0 | 2026-08-14 | 2026-09-26 | DeepSeek Harness Pet |
| 107 | [superSizzzz/dsh-feishu-bridge](https://github.com/superSizzzz/dsh-feishu-bridge) | 0 | 2026-09-26 | 2026-09-26 | Two-way bridge between DeepSeek Harness (dsh) and a Feishu / Lark bot: stage conclusions out, messages in, work summary at the end. |
| 108 | [superSizzzz/dsh-think-budget](https://github.com/superSizzzz/dsh-think-budget) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness 插件：给单步思考一个字数预算，连续几步没有可见结论时强制先给结论再继续 |
| 109 | [VoodooB0Ys/dsh-desktop-notify](https://github.com/VoodooB0Ys/dsh-desktop-notify) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness 的 Windows 桌面提醒：需要授权 / 提问 / 完成 / 出错 / 被中止时在屏幕角落弹出提醒，点一下回到对应对话 \| Windows desktop reminders for DSH, with click-to-open. |
| 110 | [weibaohui/dsh-fireworks](https://github.com/weibaohui/dsh-fireworks) | 0 | 2026-09-25 | 2026-09-26 | dsh 插件 · 烟花庆祝引擎：agent 编程时在对话窗口上空放烟花——六类事件 × 30 张属性卡 × 洗牌袋随机变种，token 用量决定大小/高度/绚烂度，WebGL2 GPU 累积拖尾渲染 |
| 111 | [weibaohui/dsh-flow](https://github.com/weibaohui/dsh-flow) | 0 | 2026-09-25 | 2026-09-26 | dsh 插件 · 执行流程图：把当前会话的执行过程画成实时三泳道流程图（回合/用户/助手/工具/审批/重试），子代理发散-收敛扇形 + 双击下钻子流程，SSE 事件驱动直播 |
| 112 | [weibaohui/dsh-matrix](https://github.com/weibaohui/dsh-matrix) | 0 | 2026-09-26 | 2026-09-26 | dsh 插件 · 黑客帝国数字雨：对话窗口铺上经典字符雨背景，token 原文掺进雨里，雨势随 agent 活跃度起伏 |
| 113 | [win10ogod/dsh-evidence-first-knowledge-work](https://github.com/win10ogod/dsh-evidence-first-knowledge-work) | 0 | 2026-09-26 | 2026-09-26 | Evidence-first knowledge work skill packaged as a DeepSeek Harness plugin |
| 114 | [win10ogod/dsh-fount-memory](https://github.com/win10ogod/dsh-fount-memory) | 0 | 2026-09-26 | 2026-09-26 | Fount-inspired memory plugin for DeepSeek Harness with in-turn recall and no autonomous conversation turns |
| 115 | [win10ogod/dsh-fount-reality](https://github.com/win10ogod/dsh-fount-reality) | 0 | 2026-09-26 | 2026-09-26 | Autonomous screen attention and private background Agent loop for DeepSeek Harness |
| 116 | [xlxs123/dsh-session-multiselect](https://github.com/xlxs123/dsh-session-multiselect) | 0 | 2026-09-26 | 2026-09-26 | DSH Desktop plugin: multi-select panel for conversations ??grouped by workspace, batch delete / fork / export / summarize / pin / archive. |
| 117 | [yknBugs/dsh-manual-approval](https://github.com/yknBugs/dsh-manual-approval) | 0 | 2026-09-25 | 2026-09-26 | A DeepSeek Harness Plugin that add a new permission that every tool call opens an approval card first |
| 118 | [yuanzukun/dsh-plugin-cards](https://github.com/yuanzukun/dsh-plugin-cards) | 0 | 2026-09-25 | 2026-09-26 | DeepSeek Harness (dsh) 设置卡片 + 对话节点插件 \| Settings cards + conversation node plugin |
| 119 | [yvhcel888/slide-gauge-pygame](https://github.com/yvhcel888/slide-gauge-pygame) | 0 | 2026-09-26 | 2026-09-26 | 滑动测量仪 pygame 原版：拖动角色显示状态，边界彩蛋 · DSH 插件的源游戏 |
| 120 | [ZhangBo-cmd/dsh-coros-badge](https://github.com/ZhangBo-cmd/dsh-coros-badge) | 0 | 2026-09-25 | 2026-09-26 | DeepSeek Harness 插件：常驻显示高驰手表型号与运动天数，点击展开一句话点评与建议 |
| 121 | [ZhaoAndy821/dsh-motion-background](https://github.com/ZhaoAndy821/dsh-motion-background) | 0 | 2026-09-26 | 2026-09-26 | DSH WebUI 的动态背景插件：着色器型（GLSL 实时演算）与媒体型（MP4/WebM/GIF/图片）两类效果，每个效果是 mods/ 下的一个文件夹。Dynamic backdrops for the DeepSeek Harness WebUI. |
| 122 | [ZhaoZeW/dsh-rollback](https://github.com/ZhaoZeW/dsh-rollback) | 0 | 2026-09-26 | 2026-09-26 | TRAE-style conversation rollback for DeepSeek Harness: per-turn checkpoints, in-place context truncation, and an affected-file diff preview. |
| 123 | [ZhengSJCode/jev-dsh](https://github.com/ZhengSJCode/jev-dsh) | 0 | 2026-09-26 | 2026-09-26 | System One (TypeSafe Jev) decision tool for DeepSeek Harness — bounded choice / noul / score judgments as an agent tool + skill. |
| 124 | [Zioove/gpt-6-astra-dsh-preset](https://github.com/Zioove/gpt-6-astra-dsh-preset) | 0 | 2026-09-26 | 2026-09-26 | DeepSeek Harness (dsh) agent preset + bundle plugin: the GPT-6 / Codex Astra persona on dsh standard toolset, with a preset-local reference skill and a slim spawned-subagent persona |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- bruc3van/dsh-desktop-safe-market
- ffyfox/dsh-linux-desktop
- Frank-NF/dsh-drop-md
- Frank-NF/dsh-memory-nexus
- gezi-wen/sage-guikit
- HaydenSmith1121/dsh-excel-viewer
- iii993/computer-use-advance
- Innocent-children/dev-flow
- Itailang2333/dsh-skill-cockpit
- jackylong1987/dsh-long-plugins
- jarvis959/galvanize-dsh
- liuyun847/dsh-host-plugin-registry
- Lyt-LZ/dsh-catpet-desktop-pet
- mikuuuuuue/dsh-planner-executor
- s867968286/dsh-preset-md
- solodov123123-blip/dsh-locale-ru
- songoao25/dsh-chatgpt-subscription
- stnt04/dsh-msg-index
- sundusk/dsh-moodball
- taikaikaikai-pixel/dsh-codebuddy-plugin
- VviLliAm-qwq/dsh-console-utf8
- VviLliAm-qwq/dsh-git-bash
- VviLliAm-qwq/dsh-mama-cheer
- VviLliAm-qwq/dsh-open-terminal
- VviLliAm-qwq/dsh-web-tavily
- wuxiangru915/dsh-plugins
- XCNXNXNX/dsh-gamemode
- XCNXNXNX/dsh-weekly-hot
- yunxiiQwQ/dsh-maid-whale-webUI
