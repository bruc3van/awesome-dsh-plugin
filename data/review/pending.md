# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-07**
- 快照日期 / Snapshot date: **2026-11-07 (UTC)**
- 待审核 / Pending: **433**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **31**
- Star 异常增长 / Star-growth alerts: **15** — 先看下方告警节 / see the alert section first

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

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」「单日净减 ≥100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, that lost ≥100 stars in one interval (GitHub clawing back farmed stars), or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-11-06** / vs previous snapshot **2026-11-06**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **15**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 65341 | +1467 | 1756 | 43d | 日增百星 | 日增 +1467★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5769 | +269 | 105 | 82d | 日增百星 | 日增 +269★ |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 4535 | +254 | 364 | 92d | 日增百星 | 日增 +254★；已不进榜单 |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 5992 | +213 | 396 | 35d | 日增百星 | 日增 +213★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 6150 | +190 | 573 | 30d | 日增百星 | 日增 +190★ |
| ⚠️ [anywhere-labs/Agents-Anywhere](https://github.com/anywhere-labs/Agents-Anywhere) | 已核准 / approved | 3095 | +186 | 265 | 168d | 日增百星 | 日增 +186★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 11331 | +173 | 434 | 84d | 日增百星 | 日增 +173★；已不进榜单 |
| ⚠️ [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) | 已核准 / approved | 345 | +161 | 36 | 1d | 日增百星、榜单跃升 | 日增 +161★；榜单 136→78；创建 1 天 |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4543 | +135 | 191 | 84d | 日增百星 | 日增 +135★ |
| ⚠️ [Ebony-Vinyl/EAC-design-world](https://github.com/Ebony-Vinyl/EAC-design-world) | 已核准 / approved | 597 | +128 | 21 | 20d | 日增百星 | 日增 +128★ |
| ⚠️ [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) | 已核准 / approved | 2519 | +124 | 82 | 84d | 日增百星 | 日增 +124★；已不进榜单 |
| ⚠️ [Ebony-Vinyl/EAC-Pack](https://github.com/Ebony-Vinyl/EAC-Pack) | 已核准 / approved | 323 | +111 | 3 | 36d | 日增百星 | 日增 +111★；★/fork 107.7；已不进榜单 |
| ⚠️ [lijiaqi-AI-Product-Manager/dsh-agent-compare](https://github.com/lijiaqi-AI-Product-Manager/dsh-agent-compare) | 已核准 / approved | 207 | +90 | 3 | 4d | 榜单跃升 | 榜单 188→126 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 115 | +63 | 1 | 26d | 新入 Top 200 | 新入 Top 200 #192；★/fork 115 |
| ⚠️ [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 已核准 / approved | 1239 | +8 | 64 | 85d | 冲入 Top 20 | 冲入 Top 20（21→20） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [0xLyn77/ProMentor](https://github.com/0xLyn77/ProMentor) | 81 | 2026-07-31 | 2026-11-07 | ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。 |
| 2 | [YuLab-SMU/Rho](https://github.com/YuLab-SMU/Rho) | 47 | 2026-07-15 | 2026-11-07 | 🔬 The workspace for you and agents. Discover questions in the data; test explanations against the results. |
| 3 | [Tranquillitatis-Lab/dsh-office-kit](https://github.com/Tranquillitatis-Lab/dsh-office-kit) | 19 | 2026-10-20 | 2026-11-07 | Office documents, PDF, presentations, and spreadsheets for DeepSeek Harness |
| 4 | [xiayh0107/hoploom](https://github.com/xiayh0107/hoploom) | 8 | 2026-07-15 | 2026-11-07 | Local-first SSH host &amp; credential manager for humans and AI agents — OS-keychain vault, loopback web UI, one-line Agent Skill deploy |
| 5 | [MorenLendan/dsh-moren-unlimited](https://github.com/MorenLendan/dsh-moren-unlimited) | 7 | 2026-11-07 | 2026-11-07 | Moren unrestricted LiangShen mode for DSH: purge unrestricted + unrestricted subagents + LiangShen, wallpaper, media, codec, token guard and rollback. |
| 6 | [infraredsqy/dsh-superworker](https://github.com/infraredsqy/dsh-superworker) | 5 | 2026-10-19 | 2026-11-07 | A DSH plugin that draws a .superworker/ pipeline record as a work panel, and answers the pipeline's words inside a session. |
| 7 | [spark-ai-boy/dsh-obsidian-bridge](https://github.com/spark-ai-boy/dsh-obsidian-bridge) | 5 | 2026-11-01 | 2026-11-07 | 一个把本地 Obsidian 知识库接入 DeepSeek Harness 的插件：数据大盘、按标题切片的混合检索、带引用的 Agent 工具，以及「先提案、后写入」的安全笔记操作。 |
| 8 | [MoonLoordSaMa/dsh-starr](https://github.com/MoonLoordSaMa/dsh-starr) | 3 | 2026-11-04 | 2026-11-07 | 基于snowluma &amp; onebot协议,面向DSH 的 AI bot养成插件，连接 QQ 与 B站，整合角色人设、情绪驱动、跨平台共享记忆、Obsidian 双向链接记忆库与听说看唱能力，配备沉浸式三维记忆星图和网页控制台 |
| 9 | [Revcloudi/Cortex](https://github.com/Revcloudi/Cortex) | 3 | 2026-10-31 | 2026-11-07 | local-first pentest intelligence hub. One SQLite memory shared by a pure stdio MCP server for agents, a ctx CLI and a desktop dashboard for humans. |
| 10 | [2039108952x-lab/image-scout](https://github.com/2039108952x-lab/image-scout) | 2 | 2026-11-07 | 2026-11-07 | Give your agent eyes: search Wikimedia Commons and Openverse, download real images, and verify magic bytes and dimensions before use. Zero-dependency CLI + DSH plugin skill. |
| 11 | [AntheaLaffy/dsh-plugin-tomato-todo](https://github.com/AntheaLaffy/dsh-plugin-tomato-todo) | 2 | 2026-10-09 | 2026-11-07 | 番茄 Todo：DeepSeek Harness (DSH) 插件形态的专注与学习工具——整站番茄皮肤、番茄钟与专注保护、任务/课表/应试教育、本地资料库索引，数据全在本机（TypeScript 核心 + Node runtime + Rust 原生守卫）。 |
| 12 | [Bright9025/dsh-session-stats-viewer](https://github.com/Bright9025/dsh-session-stats-viewer) | 2 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：为 Web 侧边栏增加「会话统计」页，汇总 Token 消耗、成本、缓存命中、会话排行、对话性能与运行时状态。  A DSH plugin that adds a session statistics page to the Web sidebar. |
| 13 | [chaowei08/dsh-big-fish-speak](https://github.com/chaowei08/dsh-big-fish-speak) | 2 | 2026-11-06 | 2026-11-07 | 大肥鱼语音播报（桌宠音色版）：模型一有输出，就让 dsh-pet 用它自己配置的音色念出来 |
| 14 | [Cottins-Vanilla/dsh-session-usage](https://github.com/Cottins-Vanilla/dsh-session-usage) | 2 | 2026-11-07 | 2026-11-07 | Session usage dashboard for DeepSeek Harness: price, tokens, per-turn curves, and per-answer cost badges. |
| 15 | [huajikano/dsh-PEC](https://github.com/huajikano/dsh-PEC) | 2 | 2026-11-06 | 2026-11-07 | Phone gateway for DeepSeek Harness: drive a running DSH session from an Android phone over Wi-Fi or Tailscale. |
| 16 | [hyun20202023-ui/dsh-qfish](https://github.com/hyun20202023-ui/dsh-qfish) | 2 | 2026-11-02 | 2026-11-07 | QQ 机器人插件（OneBot v11 / NapCat）for DeepSeek Harness：人设、记忆、心情、学习表、发图发卡，自带网页控制台。 |
| 17 | [leecisen/dsh-token-bill](https://github.com/leecisen/dsh-token-bill) | 2 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：估算每个对话的费用，按模型和高峰/空闲时段计价，侧边栏直接显示每个对话的花费。Estimated cost of every DeepSeek Harness conversation. |
| 18 | [miaoxintechnology/dsh-deepseek-cost](https://github.com/miaoxintechnology/dsh-deepseek-cost) | 2 | 2026-08-23 | 2026-11-07 | DeepSeek Harness计费 |
| 19 | [miaoxintechnology/dsh-workbuddy-files](https://github.com/miaoxintechnology/dsh-workbuddy-files) | 2 | 2026-08-24 | 2026-11-07 | 实现与 WorkBuddy 高度一致的拖拽/粘贴文件引用体验 |
| 20 | [Mooling0602/dsh-better-plugin-updater](https://github.com/Mooling0602/dsh-better-plugin-updater) | 2 | 2026-10-31 | 2026-11-07 | Better plugin updater for DeepSeek Harness. |
| 21 | [orchispring/dsh-poor-router](https://github.com/orchispring/dsh-poor-router) | 2 | 2026-08-26 | 2026-11-07 | Budget-LLM pool router for DeepSeek Harness: ledger, health tracking, Thompson-sampling failover across free-tier models. 穷鬼路由器 |
| 22 | [Velestia-star/dsh-docdesk](https://github.com/Velestia-star/dsh-docdesk) | 2 | 2026-10-30 | 2026-11-07 | A desktop-style materials panel for Markdown documents created in DeepSeek Harness. |
| 23 | [ZCX26324/dsh-gold-card](https://github.com/ZCX26324/dsh-gold-card) | 2 | 2026-11-07 | 2026-11-07 | DSH 实时金价面板插件：侧边栏「黄金实时价格」，卡片展示上金所 Au99.99、国际金价 XAU/USD、工行积存金/如意金、建行积存金的实时报价与交叉校验。 |
| 24 | [1010231693/dsh-auto-compaction](https://github.com/1010231693/dsh-auto-compaction) | 1 | 2026-11-03 | 2026-11-07 | Idle-time handoff compaction for DeepSeek Harness: ratio-based trigger, handoff checkpoint, no full re-prefill. |
| 25 | [6789-6/dsh-voice-conversation-qq-web](https://github.com/6789-6/dsh-voice-conversation-qq-web) | 1 | 2026-11-07 | 2026-11-07 | Fish Audio TTS and optional ASR for DeepSeek Harness Web and OneBot voice conversations. Bilingual setup guide. |
| 26 | [ami678-dev/work-dashboard](https://github.com/ami678-dev/work-dashboard) | 1 | 2026-11-06 | 2026-11-07 | Floating work dashboard HUD plugin for DeepSeek Harness: session speed, token totals, DeepSeek balance, and per-model cost estimates. |
| 27 | [anticbv/dsh-preset-deep](https://github.com/anticbv/dsh-preset-deep) | 1 | 2026-11-07 | 2026-11-07 | 梁圣模式：DeepSeek Harness 的第五个工作模式——先证伪，再交付 / A falsification-first work mode for DeepSeek Harness |
| 28 | [Atlantis-LA/dsh-laci-engine](https://github.com/Atlantis-LA/dsh-laci-engine) | 1 | 2026-11-07 | 2026-11-07 | LACI local model scheduler for DSH: sidebar entry, bundled console, engine/model import, OpenAI-compatible gateway |
| 29 | [baby7/dsh-siyuan-sender](https://github.com/baby7/dsh-siyuan-sender) | 1 | 2026-10-28 | 2026-11-07 | 把 DeepSeek Harness 对话里生成的 Markdown 文档，一键发送到你自己部署的思源笔记（SiYuan） |
| 30 | [catilgrass/ype-writer](https://github.com/catilgrass/ype-writer) | 1 | 2026-11-07 | 2026-11-07 | A DSH article auditor that scores an article paragraph by paragraph against a \`rule.toml\`. Every rule opens its own LLM session, so the scoring standard is reproducible, reviewable, and committable. |
| 31 | [Chengeat/dsh-session-management](https://github.com/Chengeat/dsh-session-management) | 1 | 2026-11-07 | 2026-11-07 | Managing chat conversations in DeepSeek Harness |
| 32 | [CHET-LI/DSH-galgame-galbook](https://github.com/CHET-LI/DSH-galgame-galbook) | 1 | 2026-11-06 | 2026-11-07 | galbook：让 agent 像人一样玩 galgame 的库——逐句读、自己选并写理由、存档回溯、多周目解锁；HTTP / MCP / CLI 四种接法，纯标准库，带网页观战与剧本导入 |
| 33 | [Cluodwaters/dsh-paper-workbench](https://github.com/Cluodwaters/dsh-paper-workbench) | 1 | 2026-11-06 | 2026-11-07 | DeepSeek Harness 文献工作台：本地论文整理、PDF 阅读、自动初读与分层 Agent 会话。 |
| 34 | [Coffeiz/dsh-yutang](https://github.com/Coffeiz/dsh-yutang) | 1 | 2026-11-06 | 2026-11-07 | 大肥鱼养殖基地 |
| 35 | [CSAHuan/dsh-klbq](https://github.com/CSAHuan/dsh-klbq) | 1 | 2026-11-07 | 2026-11-07 | 卡拉彼丘（Strinova）战绩查询插件：按昵称从 dakanu.com 取数并渲染长图，提供 klbq_query 工具 |
| 36 | [dream-office/dsh-cross-workspace](https://github.com/dream-office/dsh-cross-workspace) | 1 | 2026-11-07 | 2026-11-07 | 跨工作区信使：让不同 DSH 工作区的会话互相收发消息、传文件与 JSON，支持群组、收件箱与可视化交流图。Cross-workspace courier for DeepSeek Harness: message, file and JSON exchange between workspaces, with groups, inbox and a visual graph. |
| 37 | [FenrisGe-RIS/dsh-tlock](https://github.com/FenrisGe-RIS/dsh-tlock) | 1 | 2026-11-07 | 2026-11-07 | T约束 —— 给每轮生成装上刹车：token 到量就断、时间到点就断，断了的内容自动归档 |
| 38 | [fenshal/dsh-migrator](https://github.com/fenshal/dsh-migrator) | 1 | 2026-11-06 | 2026-11-07 | DSH Migrator - list your installed DeepSeek Harness plugins and export them as a paste-ready note or a self-contained zip kit |
| 39 | [fenshal/dsh-skillbox](https://github.com/fenshal/dsh-skillbox) | 1 | 2026-11-06 | 2026-11-07 | DSH Skill Library - browse, preview and import local skills &amp; experts; discover SKILL.md on GitHub |
| 40 | [FGCGDroid/blue](https://github.com/FGCGDroid/blue) | 1 | 2026-11-07 | 2026-11-07 | CTF网络攻防蓝队防御插件 |
| 41 | [Francesco149/dsh-deep-research](https://github.com/Francesco149/dsh-deep-research) | 1 | 2026-11-07 | 2026-11-07 | A deep-research swarm for DeepSeek Harness that runs on your own consumer GPUs: lanes across local model servers, fact checks, cited reports, optional real-browser laptop MCP |
| 42 | [HelmsmanOfDesire/dsh-countdown](https://github.com/HelmsmanOfDesire/dsh-countdown) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek倒计时插件 |
| 43 | [HH56715/qq-bridge](https://github.com/HH56715/qq-bridge) | 1 | 2026-11-07 | 2026-11-07 | Persona switch for qq-bridge: one persona globally, or one per QQ conversation. |
| 44 | [HighToward/dsh-plugins-sidebar-manager](https://github.com/HighToward/dsh-plugins-sidebar-manager) | 1 | 2026-11-07 | 2026-11-07 | DSH左上角插件侧栏管理，可以把面板入口收进一级分类/二级分类，也可以把某个入口隐藏或显示。 |
| 45 | [HighToward/dsh-skill-manager](https://github.com/HighToward/dsh-skill-manager) | 1 | 2026-11-06 | 2026-11-07 | DSH技能管理面板，通过扫描本机所有技能，并按类型分组，可自建类型、让模型写中文说明和画图标，能够检查技能是否在互联网上更新。 |
| 46 | [huangxn29/dsh-shooter](https://github.com/huangxn29/dsh-shooter) | 1 | 2026-11-07 | 2026-11-07 | A top-down arena shooter that opens as a full panel from a left sidebar entry in DeepSeek Harness. |
| 47 | [iasiv5/dsh-send-later](https://github.com/iasiv5/dsh-send-later) | 1 | 2026-11-07 | 2026-11-07 | DSH 插件：在输入框旁设定延时或指定时间，向当前会话发送一条消息（默认「继续」）https://www.npmjs.com/package/dsh-send-later |
| 48 | [iasiv5/dsh-stock-kanban](https://github.com/iasiv5/dsh-stock-kanban) | 1 | 2026-11-06 | 2026-11-07 | DSH插件：轻量多市场盯盘与持仓查看插件：悬浮胶囊 + A股/港股/美股/加密货币分组自选 + 持仓盈亏 + 目标价 + 分时/日周月K。数据存 DSH 实例（跨浏览器共享）。https://www.npmjs.com/package/dsh-stock-kanban |
| 49 | [ikunua/dsh-live2d-stage](https://github.com/ikunua/dsh-live2d-stage) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 的 Live2D 背景层插件：不遮挡对话界面，按会话阶段切换表情，视线跟随与空闲演出。 |
| 50 | [Iris-change/dsh-eva-skins](https://github.com/Iris-change/dsh-eva-skins) | 1 | 2026-11-06 | 2026-11-07 | DeepSeek Harness 桌面客户端的 EVA 皮肤合集：二号机 / 零号机 / 初号机 / 八号机，一个插件四套主题，开机动画可跳过，随时切回默认。含粉丝创作素材，不主张权利，见 LICENSE。 |
| 51 | [isjya/dsh-chatgpt-pass](https://github.com/isjya/dsh-chatgpt-pass) | 1 | 2026-11-06 | 2026-11-07 | ChatGPT Pass: ChatGPT subscription models and account settings for DeepSeek Harness |
| 52 | [jevonhou/dsh-progress-narration](https://github.com/jevonhou/dsh-progress-narration) | 1 | 2026-11-07 | 2026-11-07 | 让 DSH 干活时用正文报进度，而不是憋到最后一次性汇报 · A DeepSeek Harness plugin |
| 53 | [JHf0912/dsh-workspace-groups-anim](https://github.com/JHf0912/dsh-workspace-groups-anim) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 网页端侧边栏插件：可拖拽的会话标签栏，内置 4 种拖拽动效与插件页 1:1 实时预览设置。基于 z-col/dsh-workspace-groups（MIT）。 |
| 54 | [kerwingod/dsh-qq-mail](https://github.com/kerwingod/dsh-qq-mail) | 1 | 2026-11-07 | 2026-11-07 | QQ 邮箱 DSH 插件：收发管理 + 与 DSH 双向消息互传 + 定时会话摘要投递邮箱（用户各自登录自己的账号） |
| 55 | [kexiongwen/dsh-bsb-ipynb](https://github.com/kexiongwen/dsh-bsb-ipynb) | 1 | 2026-11-06 | 2026-11-07 | Preview and run Jupyter notebooks (.ipynb) in the DSH better-sidebar file tree. |
| 56 | [KratosLee-6/dsh-plugin-spark](https://github.com/KratosLee-6/dsh-plugin-spark) | 1 | 2026-09-18 | 2026-11-07 | DeepSeek Harness Plugins · A local-first DeepSeek Harness plugin for discovering, combining, and turning skills into actionable ideas. |
| 57 | [liangdabiao/dsh-amazon-voc](https://github.com/liangdabiao/dsh-amazon-voc) | 1 | 2026-11-07 | 2026-11-07 | Amazon VOC dsh plugin: 4-dimension value model + CSV tools + personas |
| 58 | [liangdabiao/dsh-seedance-studio](https://github.com/liangdabiao/dsh-seedance-studio) | 1 | 2026-11-07 | 2026-11-07 | dsh-seedance-studio 上美影短剧工坊（dsh-seedance-studio）  把 \[smy-seedance-storyboard\]  这套「上美影风格短剧」skill 搬进 DeepSeek Harness，并接上**即梦官方 CLI（dreamina-canvas）**： 一句话故事 → 剧本 / 色盘 / 资产图 / 每集 15 秒分镜 → 在即梦画布上出图出片 → 拼成一部片，全程不用离开对话。 |
| 59 | [liangdabiao/dsh-whiteboard-video](https://github.com/liangdabiao/dsh-whiteboard-video) | 1 | 2026-11-07 | 2026-11-07 | dsh-whiteboard-video · 手绘讲解视频 DeepSeek Harness（dsh）插件：图文讲解视频技能——把讲解稿变成「手绘会动的画面」讲解视频。图形由代码逐笔绘出、文字逐字写出、讲到哪画到哪（音画对齐）。五套风格，本地 Chrome 渲染，零生图 API 成本，任何改动秒级重渲。Whiteboard teacher video dsh plugin: hand-drawn explainer video skill |
| 60 | [linque0/dsh-novel-studio](https://github.com/linque0/dsh-novel-studio) | 1 | 2026-11-07 | 2026-11-07 | dsh插件版小说工坊（实验性质） |
| 61 | [linsport/dsh-persona-manager](https://github.com/linsport/dsh-persona-manager) | 1 | 2026-11-07 | 2026-11-07 | 在 DSH 设置页里管理 Agent 预设（人设） |
| 62 | [listendh/dsh-video-vision](https://github.com/listendh/dsh-video-vision) | 1 | 2026-11-07 | 2026-11-07 | Give DeepSeek Harness eyes for video: samples frames with ffmpeg, reads subtitle tracks and container metadata, answers questions about moments. Install: dsh plugin add dsh-video-vision |
| 63 | [LiYang-cyber/dsh-scholar-digest](https://github.com/LiYang-cyber/dsh-scholar-digest) | 1 | 2026-11-06 | 2026-11-07 | DeepSeek Harness 学术研究 preset + download-paper 技能：多源文献检索、知网空间→主站链接映射、HTML/XLSX/BibTeX/RIS/arXiv 脚本五件套交付 |
| 64 | [LONGSASASASASA/dsh-prompt-craft](https://github.com/LONGSASASASASA/dsh-prompt-craft) | 1 | 2026-11-07 | 2026-11-07 | Prompt enhancement plugin for DeepSeek Harness: sparkle button in the composer, line diff with per-hunk accept, clarifying questions, refine loop |
| 65 | [Luminousyyh/skill-wb-exec](https://github.com/Luminousyyh/skill-wb-exec) | 1 | 2026-10-27 | 2026-11-07 | Delegate bounded coding tasks to a headless WorkBuddy/CodeBuddy CLI agent from DeepSeek Harness — structured result, real diff, path whitelist and worktree isolation. |
| 66 | [massif-01/dsh-auracap](https://github.com/massif-01/dsh-auracap) | 1 | 2026-11-05 | 2026-11-07 | 把散落的片刻轻轻拾起：装在 DeepSeek Harness 里的截图与文件记忆插件。 |
| 67 | [MingMaple/dsh-handover](https://github.com/MingMaple/dsh-handover) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：会话水位、交接文档体检与上下文压缩续跑 |
| 68 | [Mooling0602/dsh-mloader](https://github.com/Mooling0602/dsh-mloader) | 1 | 2026-10-25 | 2026-11-07 | Write plugins by other programming languages for DeepSeek Harness! |
| 69 | [MRevenger/dsh-skillhub-market](https://github.com/MRevenger/dsh-skillhub-market) | 1 | 2026-11-07 | 2026-11-07 | Skillhub skill market for DeepSeek Harness — search, filter, download and manage Skillhub skills. |
| 70 | [Mrtime-gege/terminalkeeper](https://github.com/Mrtime-gege/terminalkeeper) | 1 | 2026-10-24 | 2026-11-07 | 给 AI 用的持久终端。DSH/DeepSeek Harness 插件：tmux 托管多个长期存活的 shell，AI 用 7 个工具驱动，人用面板随时接手；锁与归属、哈希链审计、引用库、快照。个人工具，不是沙箱。 |
| 71 | [pinion05/dsh-local-wispr](https://github.com/pinion05/dsh-local-wispr) | 1 | 2026-11-07 | 2026-11-07 | Standalone local voice input for the DeepSeek Harness composer — record in the browser, transcribe with your own Whisper, insert into the draft. 마이크 버튼 → 로컬 Whisper 전사 → 작성란 삽입. |
| 72 | [qmzh-zyz/dsh-desktop-notifier](https://github.com/qmzh-zyz/dsh-desktop-notifier) | 1 | 2026-11-07 | 2026-11-07 | DSH桌面通知：为你的 dsh 提供审批弹窗、任务栏角标与提示音的桌面通知增强工具 |
| 73 | [retampweb/dsh-have-voice](https://github.com/retampweb/dsh-have-voice) | 1 | 2026-11-06 | 2026-11-07 | A local voice for your agent: Kokoro-82M on CPU behind a 150-line daemon. ~2.2x real time, first sound under a second, no cloud. |
| 74 | [Sara-Chen111/dsh-md-review](https://github.com/Sara-Chen111/dsh-md-review) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness Web 插件：在右侧栏 Markdown 预览里直接批注、留修改意见，最后合并成一条消息发给 Agent。 · Comment on Markdown previews and send review comments to the agent in one message. |
| 75 | [Sunshine334419520/dsh-minimax-voice](https://github.com/Sunshine334419520/dsh-minimax-voice) | 1 | 2026-11-05 | 2026-11-07 | MiniMax voice studio for DeepSeek Harness: clone a voice, preview it without triggering the per-voice fee, synthesize text to mp3, transcribe audio to text. Settings panel, 4 agent tools, local HTTP API. |
| 76 | [T-MKT/dsh-webui-transition](https://github.com/T-MKT/dsh-webui-transition) | 1 | 2026-10-30 | 2026-11-07 | Provide transition for DSH’s Web UI Element, like menus, etc. 为 DSH 的 Web UI 界面元素（包括菜单等）提供过渡动画。 |
| 77 | [tangyixiao/dsh-pr-release-workspace](https://github.com/tangyixiao/dsh-pr-release-workspace) | 1 | 2026-11-07 | 2026-11-07 | DSH plugin: a read-only PR and release workspace inside the sidebar — grouped PR lists, diffs, comments, local review notes, and six independent release facts. |
| 78 | [tangyixiao/dsh-provider-doctor](https://github.com/tangyixiao/dsh-provider-doctor) | 1 | 2026-11-07 | 2026-11-07 | Read-only model connection diagnostics for DeepSeek Harness: host, plugin, registration, credential and catalog evidence in one report. |
| 79 | [Uzumaku13/DSH-side-chat-advisor](https://github.com/Uzumaku13/DSH-side-chat-advisor) | 1 | 2026-11-07 | 2026-11-07 | Separate read-only chat thread in the DeepSeek Harness right sidebar |
| 80 | [XiaoZheBrother/dsh-agent-growth](https://github.com/XiaoZheBrother/dsh-agent-growth) | 1 | 2026-11-01 | 2026-11-07 | 大肥鱼成长插件：让 AI 从真实素材中学习、形成选题、复盘作品并积累可追溯记忆。适用于 DeepSeek Harness，可自定义角色。 |
| 81 | [XiaoZheBrother/dsh-game-agent](https://github.com/XiaoZheBrother/dsh-game-agent) | 1 | 2026-11-07 | 2026-11-07 | 大肥鱼游戏 Agent：观众指令、自主操作、自动续局与可追溯对局复盘 |
| 82 | [XiaoZheBrother/dsh-live-studio](https://github.com/XiaoZheBrother/dsh-live-studio) | 1 | 2026-11-07 | 2026-11-07 | 大肥鱼直播工作室：DSH 虚拟主播、弹幕语音互动、Live2D 桥接与直播账本 |
| 83 | [yan-evan/dsh-calendar-pro](https://github.com/yan-evan/dsh-calendar-pro) | 1 | 2026-11-06 | 2026-11-07 | DeepSeek Harness 日程管理插件 |
| 84 | [yellkiin/dsh-agentero-annotations](https://github.com/yellkiin/dsh-agentero-annotations) | 1 | 2026-11-07 | 2026-11-07 | 为DSH中的Agentero PDF阅读器增加完整文字批注、搜索、按页筛选与跳转。 |
| 85 | [YeStarOne/dsh-plugin-memory-graph](https://github.com/YeStarOne/dsh-plugin-memory-graph) | 1 | 2026-11-02 | 2026-11-07 | 🐟 大肥鱼好记性 —— 都说鱼只有七秒记忆，你的大肥鱼不该有。给 DSH QQ 机器人一个会遗忘的长期记忆图谱：对话→知识图谱→向量召回→回复前自动想起该想起的事。Zero-dep graph memory for dsh-onebot-qq. |
| 86 | [youyang145/dsh-plugin-local-kb](https://github.com/youyang145/dsh-plugin-local-kb) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：把本地经验库接进 DSH——五个工具、每轮索引注入、右下角挂件、MCP。骨架见 local-experience-kb。 |
| 87 | [yubdey/daimeow-dsh](https://github.com/yubdey/daimeow-dsh) | 1 | 2026-11-07 | 2026-11-07 | DaiMeow Monster Hunter Palico desktop pet plugin for DeepSeek Harness |
| 88 | [zgdllt/study-companion](https://github.com/zgdllt/study-companion) | 1 | 2026-11-07 | 2026-11-07 | Study Companion (伴学): a DeepSeek Harness plugin for learning plans, exams, spaced review, and lecture notes. |
| 89 | [Zhengruize/dsh-browser-control](https://github.com/Zhengruize/dsh-browser-control) | 1 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin + Chrome/Edge extension: let the model control your real browser (tabs, snapshot, click, type, drag, screenshot, eval) with iframe/Shadow DOM support and optional CDP trusted input. |
| 90 | [zhkkjF/dsh-cookie-sentinel](https://github.com/zhkkjF/dsh-cookie-sentinel) | 1 | 2026-11-07 | 2026-11-07 | Raises the DSH Desktop Host header budget to 128 KiB and prunes stale dsh-auth cookies only on the launch-token response that mints the replacement, so random-port launches cannot lock the desktop out with HTTP 431. |
| 91 | [Zkbnfcnb/dsh-my-agent-preset](https://github.com/Zkbnfcnb/dsh-my-agent-preset) | 1 | 2026-11-06 | 2026-11-07 | Manage custom Agent presets from DSH Settings: persona prompt, runtime-context snapshot selection (with an opt-in override for DSH-required contributions), per-preset injected skills and tool scope. |
| 92 | [zmd12345/dsh-plugin-thinking-level](https://github.com/zmd12345/dsh-plugin-thinking-level) | 1 | 2026-11-07 | 2026-11-07 | Suggests the right thinking level for the current DSH draft and switches it in one click — less overthinking on simple tasks, enough reasoning on hard ones. |
| 93 | [zmd12345/dsh-skill-dev-delivery-rules](https://github.com/zmd12345/dsh-skill-dev-delivery-rules) | 1 | 2026-11-07 | 2026-11-07 | 开发交付规则会话技能：渐进披露的交付全流程强制规则（需求澄清/分层/证据调试/最小变更/分级验证/功能对等/异步反馈/尺寸规范/命令行安全/垃圾清理） |
| 94 | [101011001101Q/dsh-execution-narration](https://github.com/101011001101Q/dsh-execution-narration) | 0 | 2026-11-07 | 2026-11-07 | Translate an agent's English execution narration into Simplified Chinese in place, reusing the official DSH translator service. |
| 95 | [1020252969/dsh-dev-runner](https://github.com/1020252969/dsh-dev-runner) | 0 | 2026-11-07 | 2026-11-07 | One-click start for a whole dev stack: discover projects and their run commands, orchestrate a backend plus any frontends, follow every log from the right sidebar. |
| 96 | [1250589385/dsh-rescue-guard](https://github.com/1250589385/dsh-rescue-guard) | 0 | 2026-11-07 | 2026-11-07 | Standalone rescue for a broken DeepSeek Harness profile: crash classification, pre-flight checks, safe mode and manifest snapshots, plus a zero-cost event-driven crash watcher. |
| 97 | [1694439208/dsh-task-list](https://github.com/1694439208/dsh-task-list) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness task list: cross-workspace conversations, retained completions and unread completion reminders. DSH 任务列表。 |
| 98 | [1Jaron/dsh-tongji-agi](https://github.com/1Jaron/dsh-tongji-agi) | 0 | 2026-11-07 | 2026-11-07 | 把同济大学人工智能服务平台（agi.tongji.edu.cn）接进 DeepSeek Harness |
| 99 | [222406569/dsh-uitest](https://github.com/222406569/dsh-uitest) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：WinForms/Win32 应用的 UI 自动化测试桥（UIA 结构化优先，OCR 兜底），含用例编排、批量回归与 CI 命令行 |
| 100 | [4133chen/dsh-task-progress](https://github.com/4133chen/dsh-task-progress) | 0 | 2026-11-07 | 2026-11-07 | Progress bars for every session task in the DeepSeek Harness Web UI, with optional completion reminders. |
| 101 | [43aquarius/luna-rest-guard](https://github.com/43aquarius/luna-rest-guard) | 0 | 2026-11-06 | 2026-11-07 | 定期休整防数据疲劳 |
| 102 | [474885697-alt/dsh-kit](https://github.com/474885697-alt/dsh-kit) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件与技能合集：12 个 host 插件 + 5 个技能，全部中文文档、零运行时依赖。 |
| 103 | [4AM-Forever/dsh-token-usage](https://github.com/4AM-Forever/dsh-token-usage) | 0 | 2026-11-07 | 2026-11-07 | Date-filtered token usage and account spend dashboard for DeepSeek Harness |
| 104 | [511659192/ai-plugins](https://github.com/511659192/ai-plugins) | 0 | 2026-11-07 | 2026-11-07 | Self-hosted DeepSeek Harness plugin index and plugin sources |
| 105 | [58fly/dsh-ponytail-58fly](https://github.com/58fly/dsh-ponytail-58fly) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: a self-maintained lazy-mode (ponytail) plugin — mode-graded guidance ladder, fence-aware prompt filtering, six skills, settings panel |
| 106 | [a5899/dsh-powershell](https://github.com/a5899/dsh-powershell) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: run PowerShell commands directly from the agent with UAC-elevated mode, live output, and a command-first policy. |
| 107 | [acanzaima/dsh-code-review](https://github.com/acanzaima/dsh-code-review) | 0 | 2026-11-07 | 2026-11-07 | dsh-code-review 是一个 DSH（DeepSeek Harness）Web UI 插件，把当前工作区所属 Git 仓库的未提交改动直接放进DSH里审阅：真实仓库状态、并排 diff、按文件与按变更块的暂存和还原、提交与推送。 |
| 108 | [ACGNnsj/dsh-plugin-versions](https://github.com/ACGNnsj/dsh-plugin-versions) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：插件页版本一览标签页，列出已安装组合包版本并可跳转官方更新界面 |
| 109 | [AChengLinus/dsh-linus-brand](https://github.com/AChengLinus/dsh-linus-brand) | 0 | 2026-11-07 | 2026-11-07 | Linus 插画品牌标记 + 18 状态手绘宠物动画（24–72 帧 / 19 fps / 像素粒子）for DeepSeek Harness Web UI |
| 110 | [achievejia/dsh-session-completion-notify](https://github.com/achievejia/dsh-session-completion-notify) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 会话完成通知 |
| 111 | [achievejia/session-title-summary](https://github.com/achievejia/session-title-summary) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness标题会话自动变更 |
| 112 | [Aily-DSH/dsh-quick-chat](https://github.com/Aily-DSH/dsh-quick-chat) | 0 | 2026-11-04 | 2026-11-07 | 在 DSH 输入框里加一排快捷语胶囊：点一下立即发送，最多 10 条自定义并保存到本地。 |
| 113 | [Alex663028/dsh-credit-hub](https://github.com/Alex663028/dsh-credit-hub) | 0 | 2026-11-07 | 2026-11-07 | 积分汇通 — DeepSeek Harness 插件：各家 coding agent 积分渠道（WorkBuddy/Raccoon/Qoder/ZCode/MiniMax…）+ 自填 API 中转，统一模型车道与本地 OpenAI/Anthropic 兼容网关 |
| 114 | [ALNLAqooq/dsh-session-messenger-plugin](https://github.com/ALNLAqooq/dsh-session-messenger-plugin) | 0 | 2026-11-07 | 2026-11-07 | Hand off work and send messages between top-level DeepSeek Harness sessions in the same workspace. 会话信使：DSH 父会话之间的消息转交与新建会话工具。 |
| 115 | [alphaaaaa001/dsh-chloe-ding-pop](https://github.com/alphaaaaa001/dsh-chloe-ding-pop) | 0 | 2026-11-07 | 2026-11-07 | 让DSH大肥鱼也能在后台提醒你她回答完了 |
| 116 | [andy-7-andy/dsh-theme-retro-press](https://github.com/andy-7-andy/dsh-theme-retro-press) | 0 | 2026-11-07 | 2026-11-07 | 十二套复古配色主题：木刻朱印到显像管磷光，各配纸纹/扫描线、字体重排与深色模式磷光代码块 / A retro theme workshop for DeepSeek Harness: twelve palettes, each a complete typographic decision. |
| 117 | [Anilams/dsh-session-observer](https://github.com/Anilams/dsh-session-observer) | 0 | 2026-11-07 | 2026-11-07 | A conversation view for DeepSeek Harness that answers one question: do I need to step in? Rule-based by default, zero model calls. |
| 118 | [ARKsealin/stylome](https://github.com/ARKsealin/stylome) | 0 | 2026-11-07 | 2026-11-07 | 面向中文科幻写作的文学计算插件集：AI 参与判别 / 作者风格锚定 / 宏观织体 · for DeepSeek Harness |
| 119 | [arleasemfrankra-wq/dsh-relocation-workbench](https://github.com/arleasemfrankra-wq/dsh-relocation-workbench) | 0 | 2026-11-07 | 2026-11-07 | 移居咨询台：在 DeepSeek Harness 中运行的本地移民顾问工作台插件 |
| 120 | [Artenx/dsh-monkeyai-sessions](https://github.com/Artenx/dsh-monkeyai-sessions) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin for MonkeyAI remote sessions: full history, live prompts, stop &amp; model switching |
| 121 | [ASALULU/dsh-conversation-trash](https://github.com/ASALULU/dsh-conversation-trash) | 0 | 2026-11-07 | 2026-11-07 | Reversible conversation deletion for DeepSeek Harness: 30-day trash, undo, restore. |
| 122 | [AsterionZephyr/dsh-ustc-image](https://github.com/AsterionZephyr/dsh-ustc-image) | 0 | 2026-11-07 | 2026-11-07 | Minimal DeepSeek Harness plugin: one generate_image tool backed by USTC gateway qwen-image-2.1 |
| 123 | [ayf-master/dsh-worklog](https://github.com/ayf-master/dsh-worklog) | 0 | 2026-11-07 | 2026-11-07 | Turn DSH session logs into daily, weekly and monthly Markdown work reports, grouped by working directory. |
| 124 | [BeckChiang/dsh-rsa](https://github.com/BeckChiang/dsh-rsa) | 0 | 2026-11-07 | 2026-11-07 | Configurable startup animation (splash screen) plugin for DeepSeek Harness — real main-process splash, live preview, theme-aware, deep deploy into app.asar. |
| 125 | [BigYellowTiger/deepseek_harness_lift_plugin](https://github.com/BigYellowTiger/deepseek_harness_lift_plugin) | 0 | 2026-11-07 | 2026-11-07 | 一个基于deepseek harness构建的居家健身私教插件，可以制定计划、播放动作视频、周期复盘改良等 |
| 126 | [bingomu/dsh-wingman](https://github.com/bingomu/dsh-wingman) | 0 | 2026-11-07 | 2026-11-07 | Wingman — a slim dock beside the conversation for DSH: snippets, notes, selection actions, recap, status |
| 127 | [borui1757-cmd/dsh-gate](https://github.com/borui1757-cmd/dsh-gate) | 0 | 2026-11-07 | 2026-11-07 | Deploy gate for DSH plugins: organ-level host simulation, parallel fault-injection scenarios, contract drift check. tools/lab.mjs or scenarios/*.scenario.mjs plus exit code. |
| 128 | [borui1757-cmd/dsh-guard](https://github.com/borui1757-cmd/dsh-guard) | 0 | 2026-11-07 | 2026-11-07 | Danger-zone guard for DSH: single-instance check (two hosts on one profile lose 72% of writes), rolling snapshots, session integrity check, restore from the latest healthy snapshot. |
| 129 | [boy1141/dsh-plugin-balance-chip](https://github.com/boy1141/dsh-plugin-balance-chip) | 0 | 2026-11-07 | 2026-11-07 | Live DeepSeek account balance chip in the session header: remaining credit and unused bonus, refreshed every 20 seconds. |
| 130 | [breakc0re/dsh-yandex-music](https://github.com/breakc0re/dsh-yandex-music) | 0 | 2026-11-07 | 2026-11-07 | Яндекс.Музыка в боковой панели DSH: поиск, очередь, плейлисты, «Моя волна» и текст с караоке. Плагин для DeepSeek Harness. |
| 131 | [Burntgogi/dsh-mistral-search](https://github.com/Burntgogi/dsh-mistral-search) | 0 | 2026-11-06 | 2026-11-07 | Web search for DeepSeek Harness through Mistral's built-in web search tool, using your Mistral key. Unofficial community plugin. |
| 132 | [bzsang/dsh-turn-quote](https://github.com/bzsang/dsh-turn-quote) | 0 | 2026-11-07 | 2026-11-07 | Quote an earlier turn of the current conversation into the composer with an @ mention (DeepSeek Harness bundle). |
| 133 | [caipanjin/dsh-image-bridge](https://github.com/caipanjin/dsh-image-bridge) | 0 | 2026-11-07 | 2026-11-07 | Recognize images via a dedicated vision subagent with independently configurable model |
| 134 | [CallMeGuLab/dsh-purge-safe](https://github.com/CallMeGuLab/dsh-purge-safe) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 破甲：默认提示词面向国模「鸢码」，完整开放版，无付费墙，技能库与知识库全含。破解市面上收费 388u 的版本，免费公开。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ |
| 135 | [callmenightmare/dsh-work-log](https://github.com/callmenightmare/dsh-work-log) | 0 | 2026-11-07 | 2026-11-07 | Daily work log for DeepSeek Harness — per-project time, model-written summaries, wallet balance/spend, plus an always-on floating pill. 按项目统计时长、自动生成「今天解决了什么」、显示余额与花费，附常驻浮窗。 |
| 136 | [ccsdyc/dsh-version-manager](https://github.com/ccsdyc/dsh-version-manager) | 0 | 2026-11-06 | 2026-11-07 | DSH install management, automatic upgrades, desktop shortcuts, and quick restarts. DSH安装版本管理、自动升级、桌面快捷方式、便捷重启。 |
| 137 | [cenglin123/ocsr](https://github.com/cenglin123/ocsr) | 0 | 2026-08-18 | 2026-11-07 | OCSR: governance skill for running heterogeneous subagents via headless opencode run |
| 138 | [Cesare97/dsh-balance-chip-cesare](https://github.com/Cesare97/dsh-balance-chip-cesare) | 0 | 2026-11-06 | 2026-11-07 | 余额与消耗插件：多币种换算、预算、可用天数、7 天按会话明细、汇率周更。Balance &amp; spend chip for DeepSeek Harness: multi-currency, budgets, runway, 7-day per-session detail. |
| 139 | [cfour-hi/DSHP-DeviceX](https://github.com/cfour-hi/DSHP-DeviceX) | 0 | 2026-11-07 | 2026-11-07 | 一个持久化的 DSH 插件：用一页优雅的中文/英文界面看尽当前设备的一切——硬件、系统、软件、 网络、安全与权限、进程——并对非硬件的一切直接操作（结束进程、退出/启动/卸载应用、启停登录项、 修改主机名/音量/深色模式、开关 Wi-Fi/防火墙、设置 DNS、卸载 Homebrew 包、清空废纸篓、睡眠/锁定、 跳转系统设置……）。同一套操作同时暴露给 Agent 模型，作为 device_info / device_control 两个工具。 |
| 140 | [chandra447/dsh-svg-fences](https://github.com/chandra447/dsh-svg-fences) | 0 | 2026-11-06 | 2026-11-07 | Render SVG code fences in DeepSeek Harness chat as theme-aware inline figures. |
| 141 | [chandra447/dsh-table-charts](https://github.com/chandra447/dsh-table-charts) | 0 | 2026-11-06 | 2026-11-07 | Draw a bar chart under Markdown tables in DeepSeek Harness chat, with no tool call or server. |
| 142 | [Chen9183/dsh-chart](https://github.com/Chen9183/dsh-chart) | 0 | 2026-11-07 | 2026-11-07 | 图表插件 for DeepSeek Harness：把 mermaid 代码块渲染成图/表/原文三视图卡片，mermaid 内联、离线可用 |
| 143 | [chenqianes/dsh-cost-chip](https://github.com/chenqianes/dsh-cost-chip) | 0 | 2026-11-07 | 2026-11-07 | DSH 会话花费药丸：本会话/今日花费、成本构成（缓存命中/未命中/输出）、DeepSeek 余额。A cost chip for DeepSeek Harness. |
| 144 | [chernogriff11-alt/dsh-transcribe](https://github.com/chernogriff11-alt/dsh-transcribe) | 0 | 2026-11-07 | 2026-11-07 | Voice input for DeepSeek Harness: local Parakeet Ultra transcription, live preview, custom hotkey |
| 145 | [ChiaquanLin/dsh-plugin-vinyl-player](https://github.com/ChiaquanLin/dsh-plugin-vinyl-player) | 0 | 2026-11-07 | 2026-11-07 | A cartoon vinyl record player for Bilibili audio inside the DeepSeek Harness Web GUI: search, shelve, and spin records while the music plays in the background. |
| 146 | [chinokoyuki/dsh-anime-model-avatars](https://github.com/chinokoyuki/dsh-anime-model-avatars) | 0 | 2026-11-07 | 2026-11-07 | Anime character avatars and per-provider thinking styles for the DSH model picker. |
| 147 | [ChrisZqaq/dsh-token-pill](https://github.com/ChrisZqaq/dsh-token-pill) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek 花费胶囊：侧栏显示今日 token 花费与峰谷时段（DSH 插件） |
| 148 | [chunbo824-tech/dsh-rp-card](https://github.com/chunbo824-tech/dsh-rp-card) | 0 | 2026-11-07 | 2026-11-07 | 基于dsh的rp卡自动编写插件，当前支持风月（fengyue.ai）平台 |
| 149 | [ckanner/dsh-subagent-claude-code-pro](https://github.com/ckanner/dsh-subagent-claude-code-pro) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: Claude Code delegation using your local CLI — per-call model and effort, durable sessions, and multimodal input/output. |
| 150 | [CocoSgt/dsh-vidi](https://github.com/CocoSgt/dsh-vidi) | 0 | 2026-11-07 | 2026-11-07 | Vidi 视频 — a video tool for DeepSeek Harness: live streams, videos and podcasts with real-time subtitles in any language, clips, downloads and restreaming to Chinese and global platforms. |
| 151 | [cookabc/dsh-understand-anything](https://github.com/cookabc/dsh-understand-anything) | 0 | 2026-11-07 | 2026-11-07 | Native DSH port of Understand Anything: deterministic codebase knowledge graph, impact analysis, domain flows, wiki and Figma graphs, offline dashboard. |
| 152 | [CPHWQ/dsh-balance-strip](https://github.com/CPHWQ/dsh-balance-strip) | 0 | 2026-11-07 | 2026-11-07 | 在 DSH 会话页标签行右侧常驻一枚胶囊：余额、今日已用（估算）、峰/谷与对应时段；层级低于系统弹窗。 |
| 153 | [cplh/dsh-course-notes](https://github.com/cplh/dsh-course-notes) | 0 | 2026-11-07 | 2026-11-07 | Bilibili course notes for DSH: watches Bilibili videos, builds subject knowledge maps, and delivers same-name Markdown + Word notes with the video link in a new session. Requires dsh-video-coursemap and dsh-memory-evolve; Windows only. |
| 154 | [crawfordxx/dsh-wecom-lead](https://github.com/crawfordxx/dsh-wecom-lead) | 0 | 2026-11-07 | 2026-11-07 | DSH (DeepSeek Harness) 插件:腾讯广告落地页 → 企业微信进粉归因监测与转化回传的管理工具集 |
| 155 | [cry-flu/dsh-session-rotate](https://github.com/cry-flu/dsh-session-rotate) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：会话步数到上限时，在轮末自动开新会话、投递本地拼装的交接摘要并归档旧会话，零模型调用。 |
| 156 | [daoyan2142/dsh-runtime-kit](https://github.com/daoyan2142/dsh-runtime-kit) | 0 | 2026-11-07 | 2026-11-07 | DSH runtime plugin: context governance, fast path, PTC orchestration, sandbox isolation and audit - zero business dependencies |
| 157 | [Daphne999/dsh-drift](https://github.com/Daphne999/dsh-drift) | 0 | 2026-11-07 | 2026-11-07 | Capability drift detection for DSH plugins: store a baseline, then report only what an upgrade NEWLY gained. \| 插件能力漂移检测：存基线，升级后只报新增能力。 |
| 158 | [Daphne999/dsh-fake-call](https://github.com/Daphne999/dsh-fake-call) | 0 | 2026-11-07 | 2026-11-07 | Give your agent a phone: a local fake incoming call with a preset opening line spoken offline by the OS voice. \| 让你的 AI 给你打个电话：本地伪来电，开场白用系统音色离线合成。 |
| 159 | [Daphne999/dsh-media-kit](https://github.com/Daphne999/dsh-media-kit) | 0 | 2026-11-07 | 2026-11-07 | Pull frames and audio out of local video/audio with ffmpeg and hand back plain file paths. No models, no uploads, no routing guesswork. \| 用 ffmpeg 从本地音视频抽帧/抽音轨，只返回文件路径，不碰模型。 |
| 160 | [DarknessLED/dsh-loom](https://github.com/DarknessLED/dsh-loom) | 0 | 2026-11-07 | 2026-11-07 | Human-in-the-loop recursive self-improvement for DeepSeek Harness: a plugin that turns one objective into an auditable, self-optimizing work chain running in child sessions while the main agent stays idle. |
| 161 | [Dclef/dsh-coding-time](https://github.com/Dclef/dsh-coding-time) | 0 | 2026-11-04 | 2026-11-07 | Local AI coding activity tracking for DeepSeek Harness: project timing, real diff line counts, optional human input, JSONL storage and CSV export. |
| 162 | [dddaniel1/dsh-ref-autofill](https://github.com/dddaniel1/dsh-ref-autofill) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：在 dsh web 里浏览中文 AI 参考图库，把高清参考图与提示词一键填入对话框。 |
| 163 | [deciia/dsh-message-pins](https://github.com/deciia/dsh-message-pins) | 0 | 2026-11-07 | 2026-11-07 | 收藏 DeepSeek Harness 回答的插件：整条回答 / 选中文字，落盘本地或 Obsidian，支持右栏面板、笔记标签与导出 |
| 164 | [deepsleepzzz0211/dsh-superagent-windows](https://github.com/deepsleepzzz0211/dsh-superagent-windows) | 0 | 2026-11-07 | 2026-11-07 | dsh-superagent prototype, Windows adaptation: DeepSeek Harness Desktop + Feishu Source ready (upstream + windows-compat + worker TLS fix) |
| 165 | [dev-cmde/dsh-plugins](https://github.com/dev-cmde/dsh-plugins) | 0 | 2026-11-06 | 2026-11-07 | DeepSeek Harness plugins by Comrad_e |
| 166 | [doombeaker/dsh-bizyair](https://github.com/doombeaker/dsh-bizyair) | 0 | 2026-11-06 | 2026-11-07 | Every frontier image, video and audio model — open and closed source — in one AIGC creation platform inside DeepSeek Harness. New accounts get ~200 images, 3 short videos or 100 minutes of speech. |
| 167 | [Dreagonmon/vault-manager](https://github.com/Dreagonmon/vault-manager) | 0 | 2026-11-07 | 2026-11-07 | Encrypted credential vault plugin for DeepSeek Harness — secrets typed only in a user popup, never entering the agent context. |
| 168 | [Drifter-yh/dsh-think-summary](https://github.com/Drifter-yh/dsh-think-summary) | 0 | 2026-11-07 | 2026-11-07 | Codex-style thinking summaries for DeepSeek Harness: 1-3 bullet points per reasoning step, full chain one click away. |
| 169 | [Drifter-yh/dsh-turn-badge](https://github.com/Drifter-yh/dsh-turn-badge) | 0 | 2026-11-07 | 2026-11-07 | Codex-style turn-finished alerts for DeepSeek Harness: native notification, app-icon badge and title dot. Windows and macOS. |
| 170 | [drm-nz/dsh-customisations](https://github.com/drm-nz/dsh-customisations) | 0 | 2026-11-07 | 2026-11-07 | One DeepSeek Harness plugin for small, independent fixes, starting with a guard against currency dollars parsed as inline math. |
| 171 | [Elycheng/dsh-article-annotator](https://github.com/Elycheng/dsh-article-annotator) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: sentence-level article annotations for Markdown / DOCX / PPTX / PDF, an agent review loop, and a long-term writing-style memory. |
| 172 | [EricZhouziRui/dsh-session-purge](https://github.com/EricZhouziRui/dsh-session-purge) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：彻底删除会话并清理转录目录、投影缓存、spill、工作区记账；支持空白会话批量删除、自动收尾和应用内更新。 |
| 173 | [EviMing/dsh-napcat-tools](https://github.com/EviMing/dsh-napcat-tools) | 0 | 2026-10-31 | 2026-11-07 | NapCat工具集，遵从官方文档的 API 设计的统一交互脚本，以简化命令操作 |
| 174 | [fcz20060311/dsh-life-planner](https://github.com/fcz20060311/dsh-life-planner) | 0 | 2026-11-07 | 2026-11-07 | 拾光笺 · DSH 生活时间管理插件：待办提醒 / 倒计时 / 日历 / 专注计时 / 热力图 |
| 175 | [feiniao1933/dsh-token-balance](https://github.com/feiniao1933/dsh-token-balance) | 0 | 2026-11-07 | 2026-11-07 | 实时显示DeepSeek 账户Token余额 |
| 176 | [Felix-fyz/dsh-session-import-native](https://github.com/Felix-fyz/dsh-session-import-native) | 0 | 2026-11-07 | 2026-11-07 | Import DeepSeek Harness's own session logs (session.v4.jsonl.zstd) into the current profile. |
| 177 | [fenton-xue/dsh-plugin-reply-and-side-chat](https://github.com/fenton-xue/dsh-plugin-reply-and-side-chat) | 0 | 2026-11-07 | 2026-11-07 | dsh plugin: reply to and side-chat about messages |
| 178 | [firehuzi/scalpel-downloadx](https://github.com/firehuzi/scalpel-downloadx) | 0 | 2026-10-15 | 2026-11-07 | 刃研社-DownloadX：本地优先、无广告、可被 Agent 调用的下载器（多连接断点续传 / SHA-256 / 视频站点分流） |
| 179 | [foolfu86/dsh-agnes-image](https://github.com/foolfu86/dsh-agnes-image) | 0 | 2026-11-07 | 2026-11-07 | Agnes Image 2.5 Flash image generation and editing for DeepSeek Harness |
| 180 | [foolfu86/dsh-scrapling-mcp](https://github.com/foolfu86/dsh-scrapling-mcp) | 0 | 2026-11-07 | 2026-11-07 | Config-only DSH MCP bundle: exposes Scrapling 18 stealth web-scraping tools (HTTP + stealth browser) to DeepSeek Harness. |
| 181 | [FrankieeW/dsh-panel-folders](https://github.com/FrankieeW/dsh-panel-folders) | 0 | 2026-11-06 | 2026-11-07 | Collapsible groups for DeepSeek Harness sidebar launchers |
| 182 | [FrankieeW/dsh-remote-agents](https://github.com/FrankieeW/dsh-remote-agents) | 0 | 2026-11-06 | 2026-11-07 | Unified DSH workspaces for Claude Code, Codex and OMP, with local and SSH conversations, tool approvals and persistent history. |
| 183 | [frederick-wang/dsh-plugin-jina-json-repair](https://github.com/frederick-wang/dsh-plugin-jina-json-repair) | 0 | 2026-11-07 | 2026-11-07 | Repair malformed jina MCP tool-call JSON at dsh's llm/stream layer so one bad tool_use argument no longer kills the turn. |
| 184 | [fushui-menghua/dsh-memory-graph-chiyo](https://github.com/fushui-menghua/dsh-memory-graph-chiyo) | 0 | 2026-11-07 | 2026-11-07 | 可回溯、会遗忘、会睡觉整理的 AI 记忆图：每条记忆必须挂原话锚点，四层衰减，夜间自动归档噪声并强化重要记忆。零依赖，JSONL 存储。 |
| 185 | [fxy0715/dsh-composer-clock](https://github.com/fxy0715/dsh-composer-clock) | 0 | 2026-11-03 | 2026-11-07 | DeepSeek Harness 输入框时钟插件：实时显示本地时间、日期与时区，支持点击复制时间戳和中英文界面。 |
| 186 | [fxy0715/dsh-pet-desktop](https://github.com/fxy0715/dsh-pet-desktop) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 的 Windows 桌面鲸鱼插件：支持轻柔游动、拖拽定位、点击互动、位置记忆与生命周期管理。 |
| 187 | [Gao-Leonhard-Euler/dsh-workbuddy-handoff](https://github.com/Gao-Leonhard-Euler/dsh-workbuddy-handoff) | 0 | 2026-11-04 | 2026-11-07 | 用于deepseek harness与workbuddy协作的handoff插件 |
| 188 | [Gao2612/relationship-notes](https://github.com/Gao2612/relationship-notes) | 0 | 2026-11-01 | 2026-11-07 | Local-first relationship notes and editable communication drafts for DSH |
| 189 | [GetFluvo/odoo-lint](https://github.com/GetFluvo/odoo-lint) | 0 | 2026-10-07 | 2026-11-07 | Blazing fast Rust-native linter for Odoo modules |
| 190 | [glowwan/dsh-bluetooth-earbuds](https://github.com/glowwan/dsh-bluetooth-earbuds) | 0 | 2026-11-07 | 2026-11-07 | Use Bluetooth earbuds as a system-wide voice dictation and Backspace remote for AI apps and agents on Windows. |
| 191 | [Golden2002/dsh-teaching-material-workbench](https://github.com/Golden2002/dsh-teaching-material-workbench) | 0 | 2026-11-07 | 2026-11-07 | Evidence-gated teaching-material production plugin for DeepSeek Harness: layered gates, claim grounding, deterministic outline, rights audit, reproducibility. |
| 192 | [GrizzCoder/dsh-global-rules](https://github.com/GrizzCoder/dsh-global-rules) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 设置界面的「全局规则」可视化编辑插件 |
| 193 | [Gsaecy/Zero-State-Radar](https://github.com/Gsaecy/Zero-State-Radar) | 0 | 2026-11-07 | 2026-11-07 | deepseek harness Zero-State Radar |
| 194 | [gxfc9867/campfire](https://github.com/gxfc9867/campfire) | 0 | 2026-10-28 | 2026-11-07 | 围炉 · 自托管 AI 群聊桥。零依赖 Node，成员可用 pull接入。 |
| 195 | [halcyon6669/dsh-db-mcp](https://github.com/halcyon6669/dsh-db-mcp) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: data-source panel for SQLite/PostgreSQL/MySQL/Oracle plus a Python MCP server that exposes them to the agent |
| 196 | [HANPU5838/dsh-memory](https://github.com/HANPU5838/dsh-memory) | 0 | 2026-11-07 | 2026-11-07 | DSH 记忆系统 @restregular/dsh-memory 的镜像仓库（克隆自上游 RestRegular/dsh-memory，MIT 许可，原作者 RestRegular）。内容与上游 main 分支保持一致，仅将仓库内自引用地址改为本镜像；更新、Issue 与反馈请到上游原仓库。 |
| 197 | [hhse/dsh-project-recall](https://github.com/hhse/dsh-project-recall) | 0 | 2026-11-07 | 2026-11-07 | 续忆 — 为 DeepSeek Harness 保存跨会话的延后计划，并在合适的时候提醒你回来继续。 |
| 198 | [hhzx/dsh-BigCat](https://github.com/hhzx/dsh-BigCat) | 0 | 2026-11-07 | 2026-11-07 | ?????????????????;??????? DSH Desktop ????? |
| 199 | [Holdon2099/dsh-whale-girl-stats](https://github.com/Holdon2099/dsh-whale-girl-stats) | 0 | 2026-11-07 | 2026-11-07 | dsh token使用量插件 |
| 200 | [HonestShine/dsh-desktop-notify](https://github.com/HonestShine/dsh-desktop-notify) | 0 | 2026-11-07 | 2026-11-07 | Native desktop notifications with inline approval buttons and customizable sounds for DeepSeek Harness |
| 201 | [hong1413/dsh-memory](https://github.com/hong1413/dsh-memory) | 0 | 2026-06-02 | 2026-11-07 | 记忆经验 |
| 202 | [hoogte-oile/gh-gitlab](https://github.com/hoogte-oile/gh-gitlab) | 0 | 2026-11-07 | 2026-11-07 | A gh-compatible CLI over the GitLab API, so dsh-superagent's GitHub-only Source can watch a GitLab project. |
| 203 | [hql6662/dsh-local-kb](https://github.com/hql6662/dsh-local-kb) | 0 | 2026-11-07 | 2026-11-07 | Local full-disk knowledge base plugin for DSH: C:/ + E:/ documents indexed into SQLite FTS5 trigram, with a searchable sidebar panel and a token-efficient kb agent tool. |
| 204 | [iamwaller/dsh-find](https://github.com/iamwaller/dsh-find) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 会话内查找：搜完整会话日志，正文逐处高亮，回车逐处跳转。 |
| 205 | [iamwaller/dsh-usage-spend](https://github.com/iamwaller/dsh-usage-spend) | 0 | 2026-11-07 | 2026-11-07 | Session token usage and estimated spend for DeepSeek Harness. |
| 206 | [iannil/dsh-workstyle](https://github.com/iannil/dsh-workstyle) | 0 | 2026-11-07 | 2026-11-07 | 把一个人的工作方式（规则、技能、预设、模板）打包成可安装、可版本化、可度量的 DeepSeek Harness 插件。 |
| 207 | [ILVACM/DSH-Catpaw2API](https://github.com/ILVACM/DSH-Catpaw2API) | 0 | 2026-11-07 | 2026-11-07 | 将美团catpaw（妙手）接入DSH使用（注意自备账号） |
| 208 | [ILVACM/DSH-Opencode2API-hbk](https://github.com/ILVACM/DSH-Opencode2API-hbk) | 0 | 2026-11-07 | 2026-11-07 | 将opencode接入DSH使用，复用本地，避免风控 |
| 209 | [ingk888766-cloud/dsh-manage-deletion](https://github.com/ingk888766-cloud/dsh-manage-deletion) | 0 | 2026-11-06 | 2026-11-07 | DSH 会话删除管理：删会话可选择带上它写过的文件，删除进回收站可还原，正在跑的会话拒绝。 |
| 210 | [invu1318/dsh-pet-ko](https://github.com/invu1318/dsh-pet-ko) | 0 | 2026-11-07 | 2026-11-07 | dsh-pet 우클릭 메뉴를 한국어로 바꾸는 패치 (비공식) |
| 211 | [ityyq777/dsh-workbench](https://github.com/ityyq777/dsh-workbench) | 0 | 2026-11-07 | 2026-11-07 | Personal Workbench for DeepSeek Harness: local-first tasks, tags and sites plugins |
| 212 | [JaMoLpE88/dsh-stickynotes](https://github.com/JaMoLpE88/dsh-stickynotes) | 0 | 2026-11-07 | 2026-11-07 | Local-first sticky notes for DeepSeek Harness Desktop: focus-mode WYSIWYG, images, audio, files and inline YouTube/X/Vimeo/Spotify/TikTok/Instagram embeds. No AI, no transcription. |
| 213 | [Jd44chs/dsh-Shutdown-Guard-plus](https://github.com/Jd44chs/dsh-Shutdown-Guard-plus) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件分线：在 dsh-Shutdown-Guard v1.6.0 基础上加入全屏关机倒计时与自动守夜（MIT） |
| 214 | [jianuoli664/dsh-desktop-shot](https://github.com/jianuoli664/dsh-desktop-shot) | 0 | 2026-11-06 | 2026-11-07 | 集成在 DSH 里的简单截图工具：点一下按钮，窗口收起、框选，裁剪图自动进草稿框（Windows） |
| 215 | [Jiazliang/dsh-doubao-paint](https://github.com/Jiazliang/dsh-doubao-paint) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：用本机浏览器（ego lite 优先 / Chrome 回落）操控豆包网页版生成 AI 图片，落盘高清原图并注入对话附件 |
| 216 | [Jimmy-Official/dsh-task-notifications](https://github.com/Jimmy-Official/dsh-task-notifications) | 0 | 2026-11-01 | 2026-11-07 | DSH Desktop 任务通知插件（本地分支：精简实现 + 子代理失败提醒） |
| 217 | [jqlong17/influence-net](https://github.com/jqlong17/influence-net) | 0 | 2026-11-07 | 2026-11-07 | 影响网：A股影响分析 DeepSeek Harness（dsh）插件（自然语言累积调研进影响网） |
| 218 | [junchaomo/dsh-traffic-counter-downloads](https://github.com/junchaomo/dsh-traffic-counter-downloads) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件 · 车流量统计官方下载页（暂无安装包） |
| 219 | [junecattle/dsh-attachment-cache](https://github.com/junecattle/dsh-attachment-cache) | 0 | 2026-11-07 | 2026-11-07 | Browse, prune and relocate the durable attachment store that DeepSeek Harness keeps under ~/.dsh/attachments. |
| 220 | [JungleYXu/dsh-dossier](https://github.com/JungleYXu/dsh-dossier) | 0 | 2026-11-06 | 2026-11-07 | Dossier plugin for DeepSeek Harness: split long projects into volumes, hand off state with a generated handoff doc instead of replaying context. |
| 221 | [JungleYXu/dsh-minichat](https://github.com/JungleYXu/dsh-minichat) | 0 | 2026-11-06 | 2026-11-07 | Quick-answer panel for DeepSeek Harness: one model call, last 10 turns, no session and no context growth in the main conversation. |
| 222 | [kachanov-e-v/dsh-token-pricing](https://github.com/kachanov-e-v/dsh-token-pricing) | 0 | 2026-11-07 | 2026-11-07 | Плагин DeepSeek Harness: Peak/Off-Peak, местное время и стоимость токенов сессии по официальным региональным тарифам. |
| 223 | [kaecho/dsh-nezha](https://github.com/kaecho/dsh-nezha) | 0 | 2026-11-07 | 2026-11-07 | Connect Nezha monitoring's MCP server to DeepSeek Harness, with a visual settings page for endpoint and PAT. |
| 224 | [kechao-sgp/dsh-frontend-design-skill](https://github.com/kechao-sgp/dsh-frontend-design-skill) | 0 | 2026-11-07 | 2026-11-07 | Frontend design skill for DeepSeek Harness: a design plan and tokens before code, Chinese typography rules, and a measured no-screenshot self-check. |
| 225 | [kechao-sgp/dsh-impeccable-skill](https://github.com/kechao-sgp/dsh-impeccable-skill) | 0 | 2026-11-07 | 2026-11-07 | Impeccable 设计技能（Impeccable design skill）的 DeepSeek Harness 移植版：24 个设计剧本，无引擎二进制依赖。 |
| 226 | [kilbertert/dsh-herdr](https://github.com/kilbertert/dsh-herdr) | 0 | 2026-11-06 | 2026-11-07 | DSH plugin: embed a Herdr terminal in the sidebar and auto-connect to your remote Herdr session. |
| 227 | [KiriuKazurei/dsh-skill-mcp-workbench](https://github.com/KiriuKazurei/dsh-skill-mcp-workbench) | 0 | 2026-11-07 | 2026-11-07 | Manage global skills and MCP servers in the DeepSeek Harness Web sidebar. |
| 228 | [klaus-2/dsh-redline](https://github.com/klaus-2/dsh-redline) | 0 | 2026-11-07 | 2026-11-07 | Point at any element on the page, adjust it live, and send structured visual feedback to your DeepSeek Harness agent. |
| 229 | [koishi-fumo-code/dsh-music-player](https://github.com/koishi-fumo-code/dsh-music-player) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: a local music player in the workspace - playlist, 18-band equalizer with foobar2000 presets, DSD (DSF/DFF) software decoding to PCM. Zero dependencies, zero network. |
| 230 | [KonnectSuite/dsh-arya-computer-use](https://github.com/KonnectSuite/dsh-arya-computer-use) | 0 | 2026-11-07 | 2026-11-07 | Computer use plugin for DSH/AryaCode: agent-desktop UIA engine + agent-browser web lane + takeover UI, replacing dsh-computer-use-win |
| 231 | [langify-org/deepseek-harness-plugins](https://github.com/langify-org/deepseek-harness-plugins) | 0 | 2026-10-09 | 2026-11-07 | Plugins for DeepSeek Harness |
| 232 | [laoyingfuhuole/dsh-browser-use](https://github.com/laoyingfuhuole/dsh-browser-use) | 0 | 2026-11-06 | 2026-11-07 | Background browser automation for DeepSeek Harness: offscreen Electron + CDP, snapshot refs, page-local cursor, no focus stealing. |
| 233 | [lazyalexander/dsh-plugin-lumi-avatar](https://github.com/lazyalexander/dsh-plugin-lumi-avatar) | 0 | 2026-11-06 | 2026-11-07 | MIT DeepSeek Harness plugin for context-driven avatar expressions and gestures |
| 234 | [lcalc-lcalc/dsh-chacha-qq](https://github.com/lcalc-lcalc/dsh-chacha-qq) | 0 | 2026-11-07 | 2026-11-07 | 让 DeepSeek Harness 拥有一台真正的 QQ。三层架构：NapCat 适配 / Controller / 砍过的 DSH |
| 235 | [lcx19970714/dsh-hold-to-talk-plus](https://github.com/lcx19970714/dsh-hold-to-talk-plus) | 0 | 2026-11-07 | 2026-11-07 | 鼠标按住语音输入 for DeepSeek Harness \| local SenseVoice or any OpenAI-compatible ASR, user wordbank, draft-as-context, settings page, live preview |
| 236 | [Leonlee114514/dsh-better-debug](https://github.com/Leonlee114514/dsh-better-debug) | 0 | 2026-11-07 | 2026-11-07 | 把「卡住闸门」从提示词条款变成代码闸门：同一文件反复改 / 同一报错反复吃 / 改完不验证 → 下一步注入一次提醒 \| Turn a stuck-gate from prompt text into a code gate for DeepSeek Harness |
| 237 | [liangdabiao/dsh-a-stock-analysis](https://github.com/liangdabiao/dsh-a-stock-analysis) | 0 | 2026-11-07 | 2026-11-07 | dsh-a-stock-analysis · A股投资研究 DeepSeek Harness（dsh）插件：A股投资研究方法论——四大视角（市场分析/财务分析/市场情绪/投资策略）+ AKShare 数据工具指引 + Agent 配置参考。纯技能零 API key。A-stock research dsh plugin: 4-perspective methodology + AKShare guide |
| 238 | [liangdabiao/dsh-amazon-skills](https://github.com/liangdabiao/dsh-amazon-skills) | 0 | 2026-11-07 | 2026-11-07 | dsh-amazon-skills · 亚马逊卖家工具箱 DeepSeek Harness（dsh）插件：54 个亚马逊运营技能随包分发（选品调研、Listing 优化、FBA 计算、PPC 广告、评论策略、关税计算……），外加两个真实数据工具（关键词长尾扩展、商品页结构化抓取）与一个侧栏工作台面板。Amazon seller toolkit dsh plugin: 54 skills + keyword expander + listing scraper |
| 239 | [liangdabiao/dsh-ecom-agent](https://github.com/liangdabiao/dsh-ecom-agent) | 0 | 2026-11-07 | 2026-11-07 | Amazon ecom agent dsh plugin: 15 tools + knowledge base + playbooks |
| 240 | [liangdabiao/dsh-ecom-image](https://github.com/liangdabiao/dsh-ecom-image) | 0 | 2026-11-07 | 2026-11-07 | dsh-ecom-image · 电商视觉创作 DeepSeek Harness（dsh）插件：电商视觉创作技能——25 个场景模板（主图/场景/平铺/详情页/UGC/直播 等）、Campaign Style Lock 一致性机制、转化驱动力诊断、GPT-Image-2 Prompt 铁律。可选通过 apiz CLI 直接出图。Ecom image dsh plugin: 25 scene templates, Campaign Style Lock, conversion diagnosis |
| 241 | [liangdabiao/dsh-ecom-video-seedance](https://github.com/liangdabiao/dsh-ecom-video-seedance) | 0 | 2026-11-07 | 2026-11-07 | Ecom video seedance dsh plugin |
| 242 | [liangdabiao/dsh-geo-optimizer](https://github.com/liangdabiao/dsh-geo-optimizer) | 0 | 2026-11-07 | 2026-11-07 | GEO toolkit dsh plugin: 3 skills for generative engine optimization |
| 243 | [liangdabiao/dsh-geogebra-assistant](https://github.com/liangdabiao/dsh-geogebra-assistant) | 0 | 2026-11-07 | 2026-11-07 | dsh-geogebra-assistant · GeoGebra 数学画板 DeepSeek Harness（dsh）插件：在侧栏里用自然语言画数学图形——模型生成 GeoGebra 命令，面板内嵌画板实时渲染。GeoGebra math board dsh plugin: embedded CDN board, command normalization, math visualization |
| 244 | [liangdabiao/dsh-perler-studio](https://github.com/liangdabiao/dsh-perler-studio) | 0 | 2026-11-07 | 2026-11-07 | dsh-perler-studio dsh-perler-studio · 拼豆工坊 DeepSeek Harness（dsh）插件：把任意图片转成拼豆底稿——291 色标准色板匹配、五套色号对照（MARD / COCO / 漫漫 / 盼盼 / 咪小窝）、图纸与采购清单导出。基于 perler-beads-ai（Apache-2.0）的核心算法移植。 |
| 245 | [liangdabiao/dsh-seedance-prompt](https://github.com/liangdabiao/dsh-seedance-prompt) | 0 | 2026-11-07 | 2026-11-07 | Seedance 2.0 prompt expert dsh plugin: 5 methodology tracks, zero API key |
| 246 | [liangdabiao/dsh-seekmoney](https://github.com/liangdabiao/dsh-seekmoney) | 0 | 2026-11-07 | 2026-11-07 | Pain point finder dsh plugin: 5-stage methodology + deterministic priority scoring |
| 247 | [liangdabiao/dsh-stock-research](https://github.com/liangdabiao/dsh-stock-research) | 0 | 2026-11-07 | 2026-11-07 | dsh-stock-research · 股票投资尽调 DeepSeek Harness（dsh）插件：8 阶段投资尽调研究框架——公司事实底座、行业周期分析、业务拆解、财务质量、股权治理、市场分歧、估值与护城河、综合报告（含信号评级),Stock due diligence dsh plugin: 8-phase framework, 7 skills, pure skill no API key |
| 248 | [liangdabiao/dsh-tikhub-api](https://github.com/liangdabiao/dsh-tikhub-api) | 0 | 2026-11-07 | 2026-11-07 | TikHub API helper dsh plugin |
| 249 | [liangdabiao/dsh-xhs-validator](https://github.com/liangdabiao/dsh-xhs-validator) | 0 | 2026-11-07 | 2026-11-07 | XHS business validation dsh plugin: 5-stage methodology + TikHub API tools |
| 250 | [lifeopsgo/dsh-ui-toggle-plugin](https://github.com/lifeopsgo/dsh-ui-toggle-plugin) | 0 | 2026-11-07 | 2026-11-07 | Six live switches for the DSH WebUI chrome, in one Settings section. Split out of dsh-capability-toggle-plugin. |
| 251 | [lightcoloror/dsh-codex-handoff](https://github.com/lightcoloror/dsh-codex-handoff) | 0 | 2026-11-07 | 2026-11-07 | Workspace-scoped Codex and DeepSeek Harness handoffs with restart-safe Windows endpoint discovery. |
| 252 | [lijieyu233/dsh-codex-account-tools](https://github.com/lijieyu233/dsh-codex-account-tools) | 0 | 2026-11-07 | 2026-11-07 | JSON account import, preview and export companion for dsh-codex-subscription. |
| 253 | [lima1217/dsh-bookshelf](https://github.com/lima1217/dsh-bookshelf) | 0 | 2026-11-07 | 2026-11-07 | A durable personal bookshelf and reading log plugin for DeepSeek Harness (DSH): dates, page progress, tags, excerpts, yearly stats, and bookshelf_* agent tools. |
| 254 | [limingwei-88/dsh-session-usage-meter](https://github.com/limingwei-88/dsh-session-usage-meter) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: per-session token usage and estimated cost in the sidebar session-row hover card. |
| 255 | [Linguage/pagestudio](https://github.com/Linguage/pagestudio) | 0 | 2026-11-07 | 2026-11-07 | PageStudio for DeepSeek Harness: a local library for HTML cards and slide decks. |
| 256 | [litterbit/dsh-plugin-moss-tts](https://github.com/litterbit/dsh-plugin-moss-tts) | 0 | 2026-11-07 | 2026-11-07 | dsh-plugin |
| 257 | [liushQAQ/dsh-anywhere-hub](https://github.com/liushQAQ/dsh-anywhere-hub) | 0 | 2026-10-12 | 2026-11-07 | 专为 DSH iOS App 与多终端协同打造：多设备同时在线无缝切换、实时同屏收发、锁屏秒级自愈（Fast-Resume），支持局域网 3082/3083 隔离与三层通用稳定外网通道。 |
| 258 | [liuyifeng-code/dsh-read-zoom](https://github.com/liuyifeng-code/dsh-read-zoom) | 0 | 2026-11-07 | 2026-11-07 | Enlarge any DeepSeek Harness answer in a full-screen reading panel: a fixed button in the answer action row, adjustable zoom, KaTeX/table/code preserved. |
| 259 | [ljttt0824/dsh-career-kb](https://github.com/ljttt0824/dsh-career-kb) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: personal career knowledge base vault with audit, JD resume, interview prep/review and Feishu interop. 职业生涯知识库 DSH 插件版。 |
| 260 | [ljttt0824/dsh-safety-inspector](https://github.com/ljttt0824/dsh-safety-inspector) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：安全巡检 —— 只读审计会话行为安全，按 A–H 分类，带事件锚点与深链倒查 |
| 261 | [ll4514dvdvdb/dsh-cache-workspace](https://github.com/ll4514dvdvdb/dsh-cache-workspace) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：输入框工具栏的缓存工作区选择器，支持工作区外目录（自动加 ACL 写权限）与独立进程清理，并给 agent 注入缓存使用规则 |
| 262 | [Lli-WenZe/dsh-model-console](https://github.com/Lli-WenZe/dsh-model-console) | 0 | 2026-11-07 | 2026-11-07 | DSH 全局模型控制台：一个面板统管所有对话的模型选择，支持批量切换、按闲置时间筛选、子代理树形折叠、批量归档/释放。 |
| 263 | [lniev/nestjs-assistant](https://github.com/lniev/nestjs-assistant) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 的 NestJS 助手插件：内置 165 页官方文档中文知识库、企业级开发地图、7 阶段学习路线，以及能真实编译并运行 NestJS 工程的操练场（31 个练习模块、代码版本保存、AI 教练）。 |
| 264 | [LoneLeave/aiplug](https://github.com/LoneLeave/aiplug) | 0 | 2026-11-07 | 2026-11-07 | Import local AI-assistant histories (Claude Code, Codex, WorkBuddy, Cursor, Trae) into DeepSeek Harness as resumable sessions, plus a Web panel to preview and file them. |
| 265 | [LoongYun/dsh-mindmap](https://github.com/LoongYun/dsh-mindmap) | 0 | 2026-11-07 | 2026-11-07 | Open, edit and export XMind, FreeMind, OPML, KityMinder and VYM mind maps in the DeepSeek Harness sidebar |
| 266 | [lovesion/dsh-plugin-sudo](https://github.com/lovesion/dsh-plugin-sudo) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: run a command as root via a masked sudo prompt — the password never enters the chat, tool args, or model context. |
| 267 | [luckyf1oat/dsh-appstate-F1x](https://github.com/luckyf1oat/dsh-appstate-F1x) | 0 | 2026-11-06 | 2026-11-07 | DSH plugin: read Windows app state without screen captures, focus stealing or cursor movement. Telegram: @f8xx9 |
| 268 | [lucyVan/dsh-publish-github](https://github.com/lucyVan/dsh-publish-github) | 0 | 2026-11-06 | 2026-11-07 | Publish any local directory to GitHub from inside a DSH session with a /publish slash command — git init, gh repo create, commit and push. Never force-pushes, never deletes. |
| 269 | [lucyVan/dsh-side-chat-slash](https://github.com/lucyVan/dsh-side-chat-slash) | 0 | 2026-11-06 | 2026-11-07 | Side chat for the DSH Web GUI with a /side slash command — a fork of @flyer103/dsh-side-chat adding a host /side command, an open-request bridge, and approval pinned to never. |
| 270 | [LUMIAO9527/DSH-Connect](https://github.com/LUMIAO9527/DSH-Connect) | 0 | 2026-10-28 | 2026-11-07 | DSH Connect：通过鸿蒙应用或浏览器连接电脑上的完整 DeepSeek Harness。 |
| 271 | [LUMIAO9527/DSH-Focus](https://github.com/LUMIAO9527/DSH-Focus) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness UI plugin: group home sidebar entries above/below the workspace and toggle each plugin entry; changes save immediately. |
| 272 | [LusJourney/dsh-limitup-widget](https://github.com/LusJourney/dsh-limitup-widget) | 0 | 2026-11-07 | 2026-11-07 | Floating A-share limit-up card for DeepSeek Harness: counts, break rate, board height, themes, watchlist; same-origin proxy + optional backend autostart. |
| 273 | [lyingloong/dsh-auto-workflow](https://github.com/lyingloong/dsh-auto-workflow) | 0 | 2026-11-03 | 2026-11-07 | dsh-auto-workflow: persistent concurrent node-graph workflows for DeepSeek Harness, with a GitHub-project local development example. |
| 274 | [lyingloong/dsh-llm-pool](https://github.com/lyingloong/dsh-llm-pool) | 0 | 2026-11-07 | 2026-11-07 | Unified LLM provider pools for DeepSeek Harness: session-sticky global balancing, capability-aware model mapping, and automatic failover. |
| 275 | [m724523/dsh-deepseek-live-status](https://github.com/m724523/dsh-deepseek-live-status) | 0 | 2026-11-07 | 2026-11-07 | deepseek-live-status |
| 276 | [MakotoNikki/dsh-discord-rich](https://github.com/MakotoNikki/dsh-discord-rich) | 0 | 2026-11-06 | 2026-11-07 | Discord Rich Presence for DeepSeek Harness: current chat, work status, daily tokens. RU / EN / CN. |
| 277 | [marcelosf80/dsh-elephant-goldfish](https://github.com/marcelosf80/dsh-elephant-goldfish) | 0 | 2026-11-07 | 2026-11-07 | Elephant-Goldfish Model (EGM) skills as an installable DeepSeek Harness bundle: draft specs with context, review with fresh-context Goldfish reviewers. |
| 278 | [Maxkun2333/dsh-plugin-catalog](https://github.com/Maxkun2333/dsh-plugin-catalog) | 0 | 2026-09-15 | 2026-11-07 | Plugin catalog for DeepSeek Harness: a settings-page tab listing every installed third-party plugin with what it does, its version, and whether an update is available. Rebuilds itself when you install or remove a plugin. |
| 279 | [mcxiaochenn/dsh-wallpaper-bgglass](https://github.com/mcxiaochenn/dsh-wallpaper-bgglass) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: local wallpapers with opacity/blur and glass sidebar, top bar and dialogs. npm: dsh-wallpaper-bgglass |
| 280 | [mdalboni/dsh-mobile](https://github.com/mdalboni/dsh-mobile) | 0 | 2026-11-06 | 2026-11-07 | Mobile viewport lock, overscroll containment, virtual keyboard resizing, and sidebar auto-retraction for DeepSeek Harness (DSH). |
| 281 | [mdalboni/dsh-spotlight](https://github.com/mdalboni/dsh-spotlight) | 0 | 2026-11-07 | 2026-11-07 | Spotlight &amp; IntelliJ-style search dialog for DeepSeek Harness (DSH) sessions and chats |
| 282 | [mdalboni/dsh-static-token](https://github.com/mdalboni/dsh-static-token) | 0 | 2026-11-07 | 2026-11-07 | Configurable static launch token for DeepSeek Harness Web GUI |
| 283 | [melosic/dsh-go-pick-goods](https://github.com/melosic/dsh-go-pick-goods) | 0 | 2026-11-07 | 2026-11-07 | 让 AI 把商品查清楚，再给结论：dsh-go 原生选品插件 + 方法论技能，平台确认 → 四层漏斗 → 问客服 → 带证据画图 |
| 284 | [men-qingzheng/dsh-bili-creator](https://github.com/men-qingzheng/dsh-bili-creator) | 0 | 2026-11-07 | 2026-11-07 | 给 DSH 装一个会刷 B 站、也会当 UP 主的插件：看懂视频、自己做视频、投稿、发动态、运营、看数据。 |
| 285 | [metagalaxy-crystal/dsh-local-orchestrator](https://github.com/metagalaxy-crystal/dsh-local-orchestrator) | 0 | 2026-11-07 | 2026-11-07 | Low-VRAM resource scheduling runtime for DSH agents: one budget table for LLM / ComfyUI workflows / scripts, single-step tools, resumable task state machine |
| 286 | [michaelfeng/dsh-feeds](https://github.com/michaelfeng/dsh-feeds) | 0 | 2026-11-07 | 2026-11-07 | Feedly/RSS reader plugin for DeepSeek Harness: global reader panel + agent tool (RSS 2.0 / Atom / RDF / JSON Feed / OPML) |
| 287 | [Mieah108/dsh-teach-me](https://github.com/Mieah108/dsh-teach-me) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 教学模式：交互课程、练习评估与学习档案 |
| 288 | [MikuDayo-IoI/dsh-pdf-book-translate](https://github.com/MikuDayo-IoI/dsh-pdf-book-translate) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: AI chapter/section outlining, glossary-aware, layout-preserving PDF book translation with resumable cache and bilingual comparison PDF |
| 289 | [Missher12/Missher-MSE-Learning](https://github.com/Missher12/Missher-MSE-Learning) | 0 | 2026-09-27 | 2026-11-07 | Missher MSE Learning: standalone learning product for DSH and other agents; no personal learning data.；桌面入口与其他插件见主页链接。 |
| 290 | [mkpoli/dsh-history-search](https://github.com/mkpoli/dsh-history-search) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness tool: search Claude Code, Codex and DSH session transcripts from the agent. |
| 291 | [mkpoli/dsh-session-rename](https://github.com/mkpoli/dsh-session-rename) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness tool: rename the current session from the agent. |
| 292 | [mkpoli/dsh-workspace-sessions-first](https://github.com/mkpoli/dsh-workspace-sessions-first) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness sidebar: in Workspace Tree, a Workspace's own sessions render above its nested workspace folders. |
| 293 | [Mola-maker/dsh-cad2gis](https://github.com/Mola-maker/dsh-cad2gis) | 0 | 2026-11-07 | 2026-11-07 | Convert DWG/DXF to GIS (GeoPackage) with evidence, as DeepSeek Harness agent tools. |
| 294 | [mrwisdon/dsh-sidebar-entries-toggle](https://github.com/mrwisdon/dsh-sidebar-entries-toggle) | 0 | 2026-11-07 | 2026-11-07 | DSH sidebar plugin - collapse the plugin entries, drag the divider to rebalance entries against workspaces, and jump to any workspace or session from a filterable picker. |
| 295 | [MsCutey/dsh-tsinghua-paratera](https://github.com/MsCutey/dsh-tsinghua-paratera) | 0 | 2026-11-07 | 2026-11-07 | Unofficial DeepSeek Harness plugin linking Tsinghua SSO with Paratera: balance, console API keys, model import and settings. macOS and Windows. |
| 296 | [Muninn-and-Zmx/dsh-subtext](https://github.com/Muninn-and-Zmx/dsh-subtext) | 0 | 2026-11-07 | 2026-11-07 | ????:?????????????,??????????Reads what a message means beneath its literal wording in everyday chat, and steps aside the moment work starts. |
| 297 | [musria5001/dsh-conversation-forward](https://github.com/musria5001/dsh-conversation-forward) | 0 | 2026-11-06 | 2026-11-07 | 摘选 DSH 对话，原文或摘要转发到其他工作区的新会话。Pick, summarize, forward. |
| 298 | [Myco-Lee/dsh-lan-peers](https://github.com/Myco-Lee/dsh-lan-peers) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: zero-config LAN peer discovery (UDP announce + HTTP channel + agent tools) |
| 299 | [Myco-Lee/dsh-mesh](https://github.com/Myco-Lee/dsh-mesh) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: LAN task mesh with a shared-folder ledger, leases and crash recovery |
| 300 | [Myco-Lee/dsh-wan-peers](https://github.com/Myco-Lee/dsh-wan-peers) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: internet-wide peer discovery with E2E encryption over ntfy-compatible rendezvous |
| 301 | [NagasakaH/pstack-dsh](https://github.com/NagasakaH/pstack-dsh) | 0 | 2026-11-07 | 2026-11-07 | pstack（cursor/plugins, MIT）を DeepSeek Harness のスキルとして使うための非公式移植バンドル |
| 302 | [narkco-kang/dsh-team-workbench](https://github.com/narkco-kang/dsh-team-workbench) | 0 | 2026-11-06 | 2026-11-07 | 智能体团队 · DSH 网页客户端插件：具名智能体团队、可回退模型路由、私聊/群聊、部门=一个智能体（子智能体并行+汇总）、记录检索、分层记忆、语音输入与头像素材库 |
| 303 | [nashihang777/dsh-solids-world](https://github.com/nashihang777/dsh-solids-world) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：固体物理与原子物理 3D 图鉴——晶体结构、布拉维格子、原子轨道、对称操作与晶格动力学，含分步讲解、测验、笔记与 CIF 导入。打开DeepSeek Harness--“插件”--“添加插件”--写入“@nashihang777/dsh-solids-world”--“安装插件” |
| 304 | [nashihang777/dsh-wolfram-nb](https://github.com/nashihang777/dsh-wolfram-nb) | 0 | 2026-11-06 | 2026-11-07 | Mathematica kernel bridge for DeepSeek Harness — call Wolfram Language as a tool and watch formulas render beside the conversation.In DeepSeek Harness, go to "Plugin" - "Add Plugin" - enter the name - click install；在 DeepSeek Harness 中 “插件”--“添加插件”--输入“@nashihang777/dsh-wolfram-nb”--点击安装 |
| 305 | [Natasha123-bit/dsh-vibrancy-skin](https://github.com/Natasha123-bit/dsh-vibrancy-skin) | 0 | 2026-11-05 | 2026-11-07 | macOS native vibrancy (frosted glass) material for the DSH NEXT / DSH Desktop main pane and third-party sidebars |
| 306 | [neil-ji/dsh-plugin-opencode-route](https://github.com/neil-ji/dsh-plugin-opencode-route) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: pins each OpenCode Go session to a fast gateway route by probing candidate x-opencode-session ids, without sacrificing its prompt cache. |
| 307 | [neil-wang-global/dsh-footer-panels](https://github.com/neil-wang-global/dsh-footer-panels) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: promote footer-bar plugin launchers to first-class sidebar global panel entries. Configuration-driven; POMASA Studio and Pictor ship as examples. Works around dsh-claude-style's footer takeover without modifying any plugin source. |
| 308 | [nisang/sang-prompts](https://github.com/nisang/sang-prompts) | 0 | 2026-11-07 | 2026-11-07 | sang-prompts |
| 309 | [no010/dsh-conductor](https://github.com/no010/dsh-conductor) | 0 | 2026-11-07 | 2026-11-07 | Delegation protocol for DeepSeek Harness: task contract, fail-closed dispatch, independent review, resumable run ledger. |
| 310 | [NoelJudeNoel/dsh-files-manager](https://github.com/NoelJudeNoel/dsh-files-manager) | 0 | 2026-11-07 | 2026-11-07 | File manager for DeepSeek Harness (DSH) Web: sortable tree with modified time and size, multi-select and folder download as streaming ZIP, chunked upload with drag and drop |
| 311 | [nohappiness/dsh-linux-shortcut](https://github.com/nohappiness/dsh-linux-shortcut) | 0 | 2026-11-07 | 2026-11-07 | Add shortcut support for linux edge browser |
| 312 | [nowscott/DshPeakPriceGuard](https://github.com/nowscott/DshPeakPriceGuard) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek 有两档价格，你的手只有一双。高峰时段发送前先问一句，节假日表自己去查。 |
| 313 | [NyaNyaHua4290/dsh-titlebar-restart](https://github.com/NyaNyaHua4290/dsh-titlebar-restart) | 0 | 2026-11-07 | 2026-11-07 | 仅 Windows 桌面版。在 DSH 窗口标题栏菜单（应用 / 编辑）后加一个「重启」项，连点两次即由 WMI 拉起的 PowerShell 脚本结束应用并重新启动同一个可执行文件。 |
| 314 | [NYSM803/dsh-restart-button](https://github.com/NYSM803/dsh-restart-button) | 0 | 2026-11-07 | 2026-11-07 | Draggable floating restart button for the DeepSeek Harness(dsh) Web GUI:confirm, then restart the app and host. |
| 315 | [onion716/Copyright-Risk-Detector](https://github.com/onion716/Copyright-Risk-Detector) | 0 | 2026-11-07 | 2026-11-07 | 小红书虚拟商品违规风险检测工作台 — DeepSeek Harness 插件（版权 / 违禁词 / 小红书平台规则词库 + DeepSeek 复核） |
| 316 | [PandaAQI/dsh-attention-notify](https://github.com/PandaAQI/dsh-attention-notify) | 0 | 2026-11-07 | 2026-11-07 | Desktop notifications for DeepSeek Harness when a tool approval or a user question is waiting - click to jump back to the terminal |
| 317 | [PandaAQI/dsh-retry-after](https://github.com/PandaAQI/dsh-retry-after) | 0 | 2026-11-07 | 2026-11-07 | Bridge the HTTP Retry-After header into DeepSeek Harness retry policy on OpenAI-compatible (pi-ai) routes — 429 backoff made honest |
| 318 | [passing11/dsh-keepawake](https://github.com/passing11/dsh-keepawake) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：会话右侧保活开关，开启期间 DSH 思考/调工具/对话时 Windows 不睡眠不休眠（含 S0 现代待机处理） |
| 319 | [Pasumao/dsh-plugin-future-session](https://github.com/Pasumao/dsh-plugin-future-session) | 0 | 2026-10-31 | 2026-11-07 | Reality/future session split for DeepSeek Harness (dsh): every tool call transparently forks a context-inheriting future session; zero dependencies, zero build. |
| 320 | [PCML-Z/pmcl-dsh](https://github.com/PCML-Z/pmcl-dsh) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin for the PMCL launcher |
| 321 | [pengfeis/dsh-super-search](https://github.com/pengfeis/dsh-super-search) | 0 | 2026-11-07 | 2026-11-07 | Global search over DeepSeek Harness conversations: user questions and assistant answers only. |
| 322 | [phoenixyun/dsh-plugin-dlidl](https://github.com/phoenixyun/dsh-plugin-dlidl) | 0 | 2026-11-07 | 2026-11-07 | DliDli — Bilibili-style danmaku mode for DeepSeek Harness: the model's streaming reply flies across the top of the window as bullet comments, while the composer keeps its place. |
| 323 | [pnpwin/dsh-auto-review-fallback](https://github.com/pnpwin/dsh-auto-review-fallback) | 0 | 2026-11-07 | 2026-11-07 | Independent Auto review models and ordered, fail-closed availability fallbacks for DeepSeek Harness. |
| 324 | [polunzh/dsh-pin](https://github.com/polunzh/dsh-pin) | 0 | 2026-11-07 | 2026-11-07 | 给 DeepSeek Harness 侧边栏补上真正的置顶：Workspaces 置顶 + 插件面板置顶，取消时精确还原 \| Pin DSH workspaces and sidebar plugin panels to the top |
| 325 | [pravets/dsh-edt-projects](https://github.com/pravets/dsh-edt-projects) | 0 | 2026-11-02 | 2026-11-07 | Плагин Deepseek Harness для работы с 1С проектами через EDT |
| 326 | [q2216150776/dsh-voice-bridge](https://github.com/q2216150776/dsh-voice-bridge) | 0 | 2026-11-07 | 2026-11-07 | 点一下桌宠说话，语音自动变成 DeepSeek 任务（配合 dsh-pet 使用） |
| 327 | [QAQ-Eleen/dsh-session-folders](https://github.com/QAQ-Eleen/dsh-session-folders) | 0 | 2026-11-07 | 2026-11-07 | DSH 会话归位 · 每个会话一个时间文件夹 \| One dated folder per DSH session |
| 328 | [QYF-888/dsh-plugin-shelf](https://github.com/QYF-888/dsh-plugin-shelf) | 0 | 2026-11-07 | 2026-11-07 | Browse, sort, group, toggle and batch-update every DSH plugin you already installed — with groups, filters and resumable updates. |
| 329 | [QYF1999/dsh-session-alerts](https://github.com/QYF1999/dsh-session-alerts) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness alerts: taskbar badge, in-app badge, Windows notification and chime per session state. |
| 330 | [renorai/dsh-renor](https://github.com/renorai/dsh-renor) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness (DSH) plugin: connects DSH to Renor's hosted memory MCP server |
| 331 | [resnowh/dsh-caption-balance](https://github.com/resnowh/dsh-caption-balance) | 0 | 2026-11-07 | 2026-11-07 | 在 DeepSeek Harness 桌面端标题栏显示账号余额、今日花费与峰谷时段 |
| 332 | [rick-2023/dsh-yuque-notes](https://github.com/rick-2023/dsh-yuque-notes) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: publish selected chat text and notes to Yuque Notes (语雀小记) |
| 333 | [risense-ai/dsh-memlite](https://github.com/risense-ai/dsh-memlite) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness persistent memory plugin — causal-tree memory via @rsrsai/memlite, data-compatible with Rust memlite. |
| 334 | [Rosmeowtis/dsh-aria2-rpc](https://github.com/Rosmeowtis/dsh-aria2-rpc) | 0 | 2026-11-07 | 2026-11-07 | 让 dsh 能够连接你的 aria2 RPC 接口，提供下载任务的创建、查询、暂停、恢复和取消功能。不自带 aria2，不对 aria2 进程进行管理（假定你已经部署了持久化的 aria2 后台服务，不应由dsh插手） |
| 335 | [ruirui0701/dsh-skin-bubu](https://github.com/ruirui0701/dsh-skin-bubu) | 0 | 2026-11-07 | 2026-11-07 | 布布主题 · Bubu liquid-glass theme skin for DeepSeek Harness (中文 / English) |
| 336 | [Ruskykot/radial-fan-selector-DSH](https://github.com/Ruskykot/radial-fan-selector-DSH) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin for selecting VR 86-77 / VR 280-46 radial fans by flow and pressure: throttle, VFD and comparison modes, bulk CSV selection. |
| 337 | [Ryker0716/dsh-cascade-search](https://github.com/Ryker0716/dsh-cascade-search) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: three-level web search fallback (tavily-proxy -&gt; Querit -&gt; DeepSeek). Has GUI .client half. cordis.patch.yml bundle patch included. |
| 338 | [saber0616/dsh-grok-night-theme](https://github.com/saber0616/dsh-grok-night-theme) | 0 | 2026-11-07 | 2026-11-07 | GrokBot-inspired warm-charcoal theme for the DeepSeek Harness Web UI: Grok Night/Day palettes, amber accents, original robot mark. Unofficial. |
| 339 | [SAI-h/dsh-mood-dj](https://github.com/SAI-h/dsh-mood-dj) | 0 | 2026-11-07 | 2026-11-07 | Mood and topic-aware NetEase Cloud Music radio for DSH. Reads the conversation, plays matched songs in the background, and keeps the queue filled. |
| 340 | [saithink/dsh-sai-image](https://github.com/saithink/dsh-sai-image) | 0 | 2026-11-07 | 2026-11-07 | DSH 图片生成插件，内置两套免费服务商，都支持图片生成和编辑功能，能够新增更多支持图片生成的服务商 |
| 341 | [SaltyAnt7342/dsh-macos-compact-chrome](https://github.com/SaltyAnt7342/dsh-macos-compact-chrome) | 0 | 2026-11-07 | 2026-11-07 | macOS compact sidebar chrome plugin for DeepSeek Harness: one control row instead of the brand row, New Session bar and stacked panel list. Toggle in Settings → General. |
| 342 | [saul-dsh/dsh-superinput](https://github.com/saul-dsh/dsh-superinput) | 0 | 2026-11-01 | 2026-11-07 | Super composer suite for the DeepSeek Harness (dsh): model and effort picker, prompt enhancement, follow-up suggestions, full cost engine (billing/backfill/forecast), voice input, snippet and prompt template managers and a settings hub - one plugin, eight input-area modules. |
| 343 | [savasana168/dsh-token-usage-heatmap](https://github.com/savasana168/dsh-token-usage-heatmap) | 0 | 2026-11-07 | 2026-11-07 | Token usage panel for the DSH web UI: 26-week heatmap, per-model bars, and a header chip. DSH 网页界面里的 Token 总用量面板。 |
| 344 | [SavaStone/dsh-provider-limits](https://github.com/SavaStone/dsh-provider-limits) | 0 | 2026-11-07 | 2026-11-07 | DSH plugin: remaining provider limits in the sidebar footer — OpenRouter credit balance and OpenCode Go quota windows. |
| 345 | [SBBW512/DSH-Subagent-Comms](https://github.com/SBBW512/DSH-Subagent-Comms) | 0 | 2026-11-07 | 2026-11-07 | Deepseek Harness Subagent Communication Plugin |
| 346 | [ShanHaiFish/dsh-answer-me-with-html](https://github.com/ShanHaiFish/dsh-answer-me-with-html) | 0 | 2026-11-07 | 2026-11-07 | Answer me with HTML for DeepSeek Harness: native tool + skill + tool card, renders one-page HTML answers and opens them in the Document Preview (Web &amp; Desktop). |
| 347 | [shengmouqwq-sketch/dsh-buddha](https://github.com/shengmouqwq-sketch/dsh-buddha) | 0 | 2026-11-07 | 2026-11-07 | 把 DSH 的输出自动变成佛的答案 —— 助手回复就地加密成「佛又曰：…」（与佛论禅算法） |
| 348 | [shuke52tt/dsh-offhours](https://github.com/shuke52tt/dsh-offhours) | 0 | 2026-11-07 | 2026-11-07 | dsh-offhours: run your kanban backlog during off-peak hours — per-card git worktrees, evidence-gated completion, merge-back; config one git repo. |
| 349 | [SicutEst/dsh-secondhand-slang](https://github.com/SicutEst/dsh-secondhand-slang) | 0 | 2026-11-07 | 2026-11-07 | Offline secondhand-marketplace slang (黑话) dictionary plugin for DeepSeek Harness — look up coded terms for Xianyu/Zhuanzhuan, decode them back, auto-updates from upstream MIT dictionaries. Zero network for lookups. |
| 350 | [silicon14/dsh-download-files](https://github.com/silicon14/dsh-download-files) | 0 | 2026-11-06 | 2026-11-07 | Browser download for delivered files and right-Sidebar file previews in the DeepSeek Harness Web GUI (DSH plugin) |
| 351 | [SilverIodide42/dsh-usage-panel-plus](https://github.com/SilverIodide42/dsh-usage-panel-plus) | 0 | 2026-11-07 | 2026-11-07 | Enhanced usage statistics panel for DeepSeek Harness: per-session breakdown, per-row cache hit rate, all-time range, CSV export. Derived from dsh-usage-statistics-panel 0.3.4 (MIT). |
| 352 | [SilverKurali/dsh-mesh-access](https://github.com/SilverKurali/dsh-mesh-access) | 0 | 2026-11-06 | 2026-11-07 | DSH 插件：用手机远程控制电脑上的 DSH。手机浏览器打开就是你在电脑上用的那个界面——同一实例、同一份会话，不用 SSH、不用第二个 dsh（也支持笔记本 / NAS / 电视盒子） |
| 353 | [simin-xxm/dsh-plugin-git-commits](https://github.com/simin-xxm/dsh-plugin-git-commits) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 插件：在 Web UI 侧边栏可视化操作 Git（暂存、提交、推送、提交历史与 diff 对比） |
| 354 | [simonsxxs/dsh-aa-bridge-doctor](https://github.com/simonsxxs/dsh-aa-bridge-doctor) | 0 | 2026-11-07 | 2026-11-07 | Detect &amp; auto-recover Agents Anywhere bridge wedge for DeepSeek Harness — 桥接医生：手机端设备永久离线的自动检测与恢复 |
| 355 | [soimy/dsh-rex-context](https://github.com/soimy/dsh-rex-context) | 0 | 2026-11-07 | 2026-11-07 | Rex terminal context for dsh: live-fetched SessionStart-style system prompt section that follows Rex upgrades |
| 356 | [SpiritronPersonality/dsh-density-panel](https://github.com/SpiritronPersonality/dsh-density-panel) | 0 | 2026-11-07 | 2026-11-07 | Quality-first context compression for DSH: structured tool-output summaries with on-demand recall and a per-window ledger. |
| 357 | [stallenlu/dsh-scihub](https://github.com/stallenlu/dsh-scihub) | 0 | 2026-10-29 | 2026-11-07 | DeepSeek Harness plugin: scihub_pdf tool that resolves a DOI or article URL through Sci-Hub mirrors and saves the paper PDF into the session workspace. |
| 358 | [Stxr/dsh-codex-side](https://github.com/Stxr/dsh-codex-side) | 0 | 2026-11-07 | 2026-11-07 | Codex-style /side for DeepSeek Harness: native sidebar conversations, promotion, and AI titles |
| 359 | [Stxr/dsh-message-pencil](https://github.com/Stxr/dsh-message-pencil) | 0 | 2026-11-07 | 2026-11-07 | Codex-style sent-message editing for DeepSeek Harness: truncate later history and regenerate in the same conversation. |
| 360 | [superltmajor-pixel/dsh-minimal-ui](https://github.com/superltmajor-pixel/dsh-minimal-ui) | 0 | 2026-11-07 | 2026-11-07 | A reading-focused minimal interface plugin for DeepSeek Harness. |
| 361 | [Takeoff0518/dsh-katex-inline-copy](https://github.com/Takeoff0518/dsh-katex-inline-copy) | 0 | 2026-11-07 | 2026-11-07 | Copy formulas from DeepSeek Harness chat as LaTeX source ($...$ / $$...$$) instead of rendered KaTeX markup. |
| 362 | [taoziliyouchong/dsh-term-dict](https://github.com/taoziliyouchong/dsh-term-dict) | 0 | 2026-11-07 | 2026-11-07 | 跨会话的术语字典：查词条、写词条、查重体检三条工具，加设置面板；某个称谓第一次出现时，把它的口径自动注入模型上下文。 |
| 363 | [TASHKENT-SN/dsh-memory-retrieval](https://github.com/TASHKENT-SN/dsh-memory-retrieval) | 0 | 2026-11-07 | 2026-11-07 | 让你的Agent想起来已经忘掉的事 |
| 364 | [TAsteroid/DSH-Email-Automation](https://github.com/TAsteroid/DSH-Email-Automation) | 0 | 2026-11-04 | 2026-11-07 | Embedded AI email workspace for Deepseek Harness |
| 365 | [tcmyxc/dsh-power-monitor](https://github.com/tcmyxc/dsh-power-monitor) | 0 | 2026-11-07 | 2026-11-07 | Power draw, energy use and electricity cost in the DeepSeek Harness sidebar. |
| 366 | [TelethaMithril/dsh-hot-restart-row](https://github.com/TelethaMithril/dsh-hot-restart-row) | 0 | 2026-11-07 | 2026-11-07 | 账号菜单“退出登录”下面一行的热重启按钮：原地重载 profile 插件树并刷新页面，不杀进程、当前对话不丢。零依赖。 |
| 367 | [ThereWasAYang/dsh-project-automemory](https://github.com/ThereWasAYang/dsh-project-automemory) | 0 | 2026-11-07 | 2026-11-07 | Per-project automatic memory for DeepSeek Harness: private memory directories under the DSH home, auto-loaded every conversation, maintained through a memory tool. MIT. |
| 368 | [This-is-XiaoDeng/dsh-todo-queue](https://github.com/This-is-XiaoDeng/dsh-todo-queue) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness 的串行 TODO 队列板：全局/工作区队列各自最多一个会话，空闲自动派发，独立响应式面板 + 待验收浮窗 |
| 369 | [tiamo-Li/dsh-opencode-go-quota](https://github.com/tiamo-Li/dsh-opencode-go-quota) | 0 | 2026-11-07 | 2026-11-07 | 一个DSH小插件——用于显示Opencode Go订阅的额度使用情况，简约且不突兀，和官方原生小组件保持统一风格 |
| 370 | [turambarr/subagent-orchestrator-dsh](https://github.com/turambarr/subagent-orchestrator-dsh) | 0 | 2026-11-06 | 2026-11-07 | 实验编排 SOP 技能：pro 控制实验设计与验收，智能调用 flash 子智能体执行确定性子任务 |
| 371 | [tusharcora/dsh-agent-crew](https://github.com/tusharcora/dsh-agent-crew) | 0 | 2026-11-07 | 2026-11-07 | Crew: a plugin for DeepSeek Harness that gives you a Chief of staff and a crew of specialist agents |
| 372 | [Twelve212/dsh-settings-tidy](https://github.com/Twelve212/dsh-settings-tidy) | 0 | 2026-11-07 | 2026-11-07 | Collapse every DSH plugin's settings entry into one tidy hub section. |
| 373 | [type53/dsh-openrouter-models](https://github.com/type53/dsh-openrouter-models) | 0 | 2026-11-07 | 2026-11-07 | OpenRouter model catalog and multi-key router for DeepSeek Harness — live catalog, price filters, and one llm-pi-ai route per API key. |
| 374 | [UncertaintyDeterminesYou4ndMe/dsh-immersive-reader](https://github.com/UncertaintyDeterminesYou4ndMe/dsh-immersive-reader) | 0 | 2026-11-07 | 2026-11-07 | 译读：在 DeepSeek Harness (dsh) 里用母语读原版书。导入 EPUB/TXT/Markdown/网页，按章节由模型精译，点一下看原文；选中即可追问。 |
| 375 | [Unended-night/dsh-model-controls](https://github.com/Unended-night/dsh-model-controls) | 0 | 2026-10-24 | 2026-11-07 | Per-provider User-Agent and stream timeout controls, visible retries, and optional continuation for DeepSeek Harness. |
| 376 | [Uruz123321/dsh-plugin-classes](https://github.com/Uruz123321/dsh-plugin-classes) | 0 | 2026-11-07 | 2026-11-07 | Plugin classes for DeepSeek Harness: split installed plugins into mutually invisible classes, so a session mounts only the plugins it belongs to. 插件管理/插件类 |
| 377 | [vb2250158/dsh-voice-assistant](https://github.com/vb2250158/dsh-voice-assistant) | 0 | 2026-11-07 | 2026-11-07 | DSH assistant development candidate |
| 378 | [w1251788888-web/moxi-drama-studio](https://github.com/w1251788888-web/moxi-drama-studio) | 0 | 2026-11-06 | 2026-11-07 | 墨戏生花 · Moxi｜跑在 DeepSeek Harness 上的短剧创作工作台（源码公开 · 个人非商业免费；商业使用需联系作者授权）：无限画布 + 管理后台 + 规则包 + 技能。一句话故事 → 30 集剧本 → 确定性检查 → 可拍性签收 → 人工放行 → 导出 docx，数据全存本机。A source-available short-drama workbench for DeepSeek Harness. |
| 379 | [Wang-BinNian/dsh-mail-channel](https://github.com/Wang-BinNian/dsh-mail-channel) | 0 | 2026-11-07 | 2026-11-07 | 给 DeepSeek Harness 的邮件通道：一句话完成配置，自动绑定焦点会话，到信唤醒、读即认领、发必回查。 |
| 380 | [wang-yzh/dsh-opencode-quota](https://github.com/wang-yzh/dsh-opencode-quota) | 0 | 2026-11-07 | 2026-11-07 | OpenCode Go 用量状态条（DeepSeek Harness 插件）：底栏显示 5 小时 / 每周 / 每月 额度百分比 |
| 381 | [whitequeen306/dsh-peoplememory](https://github.com/whitequeen306/dsh-peoplememory) | 0 | 2026-11-07 | 2026-11-07 | DSH 长期记忆与用户画像插件：跨会话记住用户偏好、项目事实与近期结论。Long-term memory and user profile for DeepSeek Harness. |
| 382 | [Wildchiken/dsh-prism-skin](https://github.com/Wildchiken/dsh-prism-skin) | 0 | 2026-11-07 | 2026-11-07 | 棱镜 Prism — a seed-based theme plugin for DeepSeek Harness · DSH 换肤插件 |
| 383 | [WilShi/dsh-gods-eye-view](https://github.com/WilShi/dsh-gods-eye-view) | 0 | 2026-11-07 | 2026-11-07 | Full God’s Eye View embedded in DeepSeek Harness with DSH agent control, process management and China/international map modes. |
| 384 | [wilsonchengassistant/dsh-one-person-company](https://github.com/wilsonchengassistant/dsh-one-person-company) | 0 | 2026-11-07 | 2026-11-07 | Run a software company alone with a team of AI agents: an embedded one-person-company skill plus a sidebar task board. Bootstraps a repo-native operating system — ten role charters, spec-as-contract workflow, and an opc CLI that assembles the exact prompt for each agent. |
| 385 | [winterhuan/dsh-client-ui-settings-model-options](https://github.com/winterhuan/dsh-client-ui-settings-model-options) | 0 | 2026-11-07 | 2026-11-07 | Model thinking, image input, and provider retry settings in the DSH Models page |
| 386 | [winterhuan/dsh-project-default-mode](https://github.com/winterhuan/dsh-project-default-mode) | 0 | 2026-11-07 | 2026-11-07 | Per-project default agent preset for DSH sessions |
| 387 | [winterhuan/dsh-student](https://github.com/winterhuan/dsh-student) | 0 | 2026-11-07 | 2026-11-07 | Short daily learning, confirmed curricula and spaced mistake review for primary-school students |
| 388 | [winterhuan/dsh-writer](https://github.com/winterhuan/dsh-writer) | 0 | 2026-11-07 | 2026-11-07 | Thin DSH writing mode that mounts oh-story skills and a Dashboard-aligned workspace sidebar |
| 389 | [wuqiuwangtian/dsh-notify-interactive](https://github.com/wuqiuwangtian/dsh-notify-interactive) | 0 | 2026-11-07 | 2026-11-07 | Interactive DSH Web reminders: approvals, questions, plan reviews, and turn completion with sound, an always-on-top DSH-styled popup, and Windows notifications. |
| 390 | [wuqiuwangtian/dsh-tui-skill-mcp-panel](https://github.com/wuqiuwangtian/dsh-tui-skill-mcp-panel) | 0 | 2026-11-07 | 2026-11-07 | Visual skill &amp; MCP manager for dsh-TUI: full-screen scene behind /skill-mcp (M0 probe / M1 skeleton) |
| 391 | [wzuu/dsh-theme-studio](https://github.com/wzuu/dsh-theme-studio) | 0 | 2026-11-07 | 2026-11-07 | Five studio styles plus 43 reference themes for DeepSeek Harness, with a left-sidebar entry and Pixel mode. |
| 392 | [xiaoxiaolelang-ai/dsh-next-steps](https://github.com/xiaoxiaolelang-ai/dsh-next-steps) | 0 | 2026-11-07 | 2026-11-07 | dsh-next-steps，下一步建议 |
| 393 | [Xingkong42/dsh-inputbox-game](https://github.com/Xingkong42/dsh-inputbox-game) | 0 | 2026-11-07 | 2026-11-07 | 任务执行期间，把对话输入框变成自动运行的小游戏娱乐场。 Turns the chat composer into an auto-playing mini-game arcade while a task runs. |
| 394 | [xkzm123/dsh-desktop-bridge](https://github.com/xkzm123/dsh-desktop-bridge) | 0 | 2026-11-07 | 2026-11-07 | 让 DeepSeek Harness 的 agent 看见并操作 Windows 桌面：Windows-MCP 经官方 MCP 桥接入，默认关闭的 Computer Use 开关，内置依赖安装、镜像测速与版本回退。 |
| 395 | [XRC111/dsh-apikeys](https://github.com/XRC111/dsh-apikeys) | 0 | 2026-11-07 | 2026-11-07 | Multi-platform API keys for DeepSeek Harness: store keys for GitHub, Cloudflare, Vercel, npm, Docker Hub, Hugging Face and your own platforms, and let the model call their APIs as you via apikey_call / apikey_platforms / apikey_key. |
| 396 | [xuanfenglajiao/dsh-effort-menu](https://github.com/xuanfenglajiao/dsh-effort-menu) | 0 | 2026-11-07 | 2026-11-07 | Replaces the composer model menu with a recent-models list, an all-providers flyout, and a draggable reasoning-effort slider. |
| 397 | [xuanyuanchumo/dsh-recency-guard](https://github.com/xuanyuanchumo/dsh-recency-guard) | 0 | 2026-11-07 | 2026-11-07 | Crash-recovery guard for DeepSeek Harness: records third-party/experimental plugin install &amp; update recency, backs up config, auto-disables recently-updated suspects after a crash, restores when stable. L4-bootstrapped, 11-layer-tested. |
| 398 | [xuehun2/dsh-files-plus](https://github.com/xuehun2/dsh-files-plus) | 0 | 2026-11-07 | 2026-11-07 | Workspace files context menu for DeepSeek Harness with copy, cut, paste and keyboard shortcuts. |
| 399 | [XWH-0v0/dsh-review-kit](https://github.com/XWH-0v0/dsh-review-kit) | 0 | 2026-11-07 | 2026-11-07 | Evidence-gated code review for DeepSeek Harness - verbatim anchors, adversarial verifiers, and explicit coverage gaps. Read-only. |
| 400 | [Y1le/dsh-dageban](https://github.com/Y1le/dsh-dageban) | 0 | 2026-11-07 | 2026-11-07 | 搭个伴 DeepSeek Harness 插件：邮箱登录、固定类别、热帖、搜索与发帖。 |
| 401 | [yamahei21python/dsh-peak-guard](https://github.com/yamahei21python/dsh-peak-guard) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness bundle: block peak-priced DeepSeek calls (auto-detected from the provider catalog) until manually bypassed. |
| 402 | [yanzhaohui1999/dsh-3d-viewer](https://github.com/yanzhaohui1999/dsh-3d-viewer) | 0 | 2026-11-07 | 2026-11-07 | 3D model viewer for DeepSeek Harness: STEP / STL / GLB / GLTF |
| 403 | [yeweiliang7063/dsh-tcm](https://github.com/yeweiliang7063/dsh-tcm) | 0 | 2026-11-07 | 2026-11-07 | DSH 中医预设「岐黄经方」插件：systemPrompt 变量 + 中医资料库设置 + 经方预设 |
| 404 | [yhPrime/dsh-sidebar-guide-scroll](https://github.com/yhPrime/dsh-sidebar-guide-scroll) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：右侧栏「开始」页卡片溢出时可滚动，滚动条只在需要时出现 / Make the right sidebar Start page scroll when its tool cards overflow |
| 405 | [yinguobing/dsh-personal-agent](https://github.com/yinguobing/dsh-personal-agent) | 0 | 2026-11-07 | 2026-11-07 | A personal super agent for one person, built as a DSH bundle: one entry, real tickets, a daily digest, and observe-by-default. |
| 406 | [you-qilin/dsh-task-instructions](https://github.com/you-qilin/dsh-task-instructions) | 0 | 2026-11-06 | 2026-11-07 | DeepSeek Harness 插件：输入框旁的「任务指令」按钮，把可复用的任务要求固定到整场会话，压缩上下文也不变形。 |
| 407 | [youki258/dsh-ungate](https://github.com/youki258/dsh-ungate) | 0 | 2026-11-06 | 2026-11-07 | 只做减法的 DSH 破甲发行版：27 条宿主补丁、20 层自检、探针可证的提示词注入 / Subtraction-only DSH jailbreak distribution: 27 host patches, 20-layer selfcheck, probe-verifiable injection |
| 408 | [yuanstarstar/dsh-bili-toy](https://github.com/yuanstarstar/dsh-bili-toy) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：玩 B站 Toy 的工具版 — 扫码登录、逛 Toy 广场、搜索/详情、打开、评论 @ 人、点赞收藏（17 个 toy_* 工具）。 |
| 409 | [yuanstarstar/dsh-bili-toy-bot](https://github.com/yuanstarstar/dsh-bili-toy-bot) | 0 | 2026-11-07 | 2026-11-07 | DSH 插件：定时去 B站 Toy 广场玩游戏的机器人 — 玩一局交棒给会话、玩完点评、人设/说话风格/白名单可配（20 个 bot_* 工具）。 |
| 410 | [yulinxie/dsh-plugin-balance](https://github.com/yulinxie/dsh-plugin-balance) | 0 | 2026-11-07 | 2026-11-07 | DeepSeek Harness plugin: shows the signed-in account balance as a pill in the web UI. |
| 411 | [Yyhy110421/dsh-broadcast](https://github.com/Yyhy110421/dsh-broadcast) | 0 | 2026-11-07 | 2026-11-07 | 群发：一条指令一次发给自己选中的多个 DSH 会话，结果汇总在一个面板里。 |
| 412 | [Yyhy110421/dsh-human-step](https://github.com/Yyhy110421/dsh-human-step) | 0 | 2026-11-05 | 2026-11-07 | DSH 人工步骤插件：开工前标出必须由人完成的步骤，到点弹出原生卡片等待确认。 |
| 413 | [Yyhy110421/dsh-policy-linter](https://github.com/Yyhy110421/dsh-policy-linter) | 0 | 2026-11-05 | 2026-11-07 | 策略体检：找出 AGENTS.md、SKILL.md 与插件技能里互相打架的规则。 |
| 414 | [Yyhy110421/dsh-window-sweeper](https://github.com/Yyhy110421/dsh-window-sweeper) | 0 | 2026-11-05 | 2026-11-07 | 清场：DSH 插件，任务收尾时把 AI 本次新开的窗口最小化或关掉。 |
| 415 | [YYJ-python/dsh-focus-board](https://github.com/YYJ-python/dsh-focus-board) | 0 | 2026-11-07 | 2026-11-07 | Cross-session task ledger for DeepSeek Harness: one item per request, step chain, injected into every step, staleness review, choices, grant ledger, scheduler. |
| 416 | [zba0326/dsh-sidebar-panel-fold](https://github.com/zba0326/dsh-sidebar-panel-fold) | 0 | 2026-11-07 | 2026-11-07 | DSH 侧栏面板列表一键折叠：按 ⌥⌘P 或点「☰ 面板列表」，把「插件 … 更多」整列收起来，工作区随之上移。 |
| 417 | [zebracmz/dsh-task-progress-tab](https://github.com/zebracmz/dsh-task-progress-tab) | 0 | 2026-11-07 | 2026-11-07 | A conversation tab that shows session task progress, with completed items in completion order. |
| 418 | [zenmokandouhenshuai/dsh-aside](https://github.com/zenmokandouhenshuai/dsh-aside) | 0 | 2026-11-07 | 2026-11-07 | 给 DeepSeek Harness 的旁问卡片：问你不会的专业术语，答案不进主对话 |
| 419 | [Zephyr-Song/agent-skill-pack](https://github.com/Zephyr-Song/agent-skill-pack) | 0 | 2026-11-07 | 2026-11-07 | 5 portable, zero-dependency Agent Skills that work in WorkBuddy, Codex and DeepSeek Harness |
| 420 | [Zerin-emm/anysearch-dsh-ev](https://github.com/Zerin-emm/anysearch-dsh-ev) | 0 | 2026-11-07 | 2026-11-07 | 为 DeepSeek Harness 接入 AnySearch 搜索/抓取，并在插件页内置 API Key 设置卡片，留空即使用匿名额度。 |
| 421 | [zhangcaiqian/dsh-plugin-zsxq](https://github.com/zhangcaiqian/dsh-plugin-zsxq) | 0 | 2026-11-07 | 2026-11-07 | 面向 DSH 的知识星球知识工具集插件，通过 Agent 来整理你订阅的知识星球内容 |
| 422 | [zhangcaiqian/wenfang-themes](https://github.com/zhangcaiqian/wenfang-themes) | 0 | 2026-11-07 | 2026-11-07 | Wenfang · 文房六色 — Chinese-aesthetic theme series: Codex import strings + DeepSeek Harness theme plugin |
| 423 | [zhangcaiqian/zsxq-skill](https://github.com/zhangcaiqian/zsxq-skill) | 0 | 2026-11-07 | 2026-11-07 | 让 Agent 将订阅的知识星球内容整理为个人知识库 |
| 424 | [zhangyong0010/dsh-oneshot](https://github.com/zhangyong0010/dsh-oneshot) | 0 | 2026-11-07 | 2026-11-07 | Oneshot一键新 · DSH 插件一键更新器：扫描全部已安装插件、查询最新 GitHub 版本、强制更新并输出版本变更日志 \| One-click force updater for every installed DeepSeek Harness plugin |
| 425 | [zhaoyushuo987/restart-bell](https://github.com/zhaoyushuo987/restart-bell) | 0 | 2026-11-07 | 2026-11-07 | 重启铃 restart-bell：给 DeepSeek Harness 的 Web GUI 顶部加一个可拖动的 ⟳ 小按钮，点一下弹小列表——「重启」强杀后原样拉起（改插件/配置立即生效），「关闭」只关不拉。全程无命令行黑窗 |
| 426 | [zhihuz123/dsh-todos](https://github.com/zhihuz123/dsh-todos) | 0 | 2026-10-31 | 2026-11-07 | Durable workspace Plan/Backlog todos for DeepSeek Harness: sidebar board, agent tools, and /todo commands. |
| 427 | [ZhuFrank/dsh-master-plugin](https://github.com/ZhuFrank/dsh-master-plugin) | 0 | 2026-11-07 | 2026-11-07 | A project lead for DeepSeek Harness: dispatches tasks to member sessions, reviews them at gates, and keeps a tagged devlog. |
| 428 | [Zian-anson/dsh-unified-memory](https://github.com/Zian-anson/dsh-unified-memory) | 0 | 2026-11-07 | 2026-11-07 | Unified memory for DeepSeek Harness: cognitive assets, ontology, recall &amp; injection, and learning write-back. |
| 429 | [zingzheng/dsh-fish](https://github.com/zingzheng/dsh-fish) | 0 | 2026-11-06 | 2026-11-07 | dsh摸鱼小组件：在 DSH 输入框上方以思考行样式显示自选股票行情，或阅读 TXT/EPUB 电子书。 / A reasoning-style dock above the DSH composer with a stock watchlist and a host-backed TXT/EPUB reader. |
| 430 | [zuaonew-ops/dsh-loop-guard](https://github.com/zuaonew-ops/dsh-loop-guard) | 0 | 2026-10-19 | 2026-11-07 | DSH 插件：拦住推理循环 / 流卡死 / 输出退化，并止住把它重试 5 遍的重试风暴 |
| 431 | [zuaonew-ops/dsh-whale-newapi-bridge](https://github.com/zuaonew-ops/dsh-whale-newapi-bridge) | 0 | 2026-10-18 | 2026-11-07 | 把 New API 中转站余额接入 DSH 小鲸鱼挂件（设置页配置 + 自动维护 .dshw-api.json 模型条目 + 本机余额桥） |
| 432 | [zxwk1998/deepseek-plugin-market](https://github.com/zxwk1998/deepseek-plugin-market) | 0 | 2026-11-07 | 2026-11-07 | 励志做github最好用的deepseek hamess 插件市场 |
| 433 | [zyzzyzyzyzzy/chat-to-persona](https://github.com/zyzzyzyzyzzy/chat-to-persona) | 0 | 2026-11-07 | 2026-11-07 | Turn exported chat logs (QQ record txt / DeepSeek export zip-txt) into AI persona cards for ??. Zero-dependency Node CLI + dsh plugin + skill. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- bemarkt/dsh-fakeip-compat
- bosd/odoo-lint
- Cesare97/dsh-balance-chip
- CHET-LI/DSH-galbook
- elliotsu1107/dsh-proxy-gate
- elliotsu1107/dsh-web-search-byok
- EviMing/dsh-qq-shell-commands
- hairyf/dsh-office-kit
- HuiHuangDDFS/dsh-codex-mini-pet
- infraredsqy/dsh-pathfinder
- isjya/dsh-chatgpt-provider
- Kitup666/dsh-dshnext-launcher
- Kitup666/dsh-plugin-kmanager
- liushQAQ/dsh-anywhere
- lov0vo/dsh-whale-maid
- lswang9/dsh-kimi-control
- lyingloong/dsh-agent-team-workflow
- Missher12/Missher-Archive-DSH-Desktop
- Missher12/Missher-Archive-DSH-Enhance
- Missher12/Missher-DSH-Brain
- Missher12/Missher-DSH-Computer-Browser
- Missher12/Missher-DSH-Evolution
- Missher12/Missher-DSH-Memory
- musria5001/dsh-forward-panel
- SilverKurali/dsh-phone-tunnel
- wangning19940904/dsh-llm-wiki
- wei238982377/dsh-docdesk
- xqh-jason/dsh-sidebar-delete
- yimengsuper2432/dsh-notice
- yishengdaxiaonengjihui/dsh-poor-router
- zzyyyds88/dsh-solo-leveling
