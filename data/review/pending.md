# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-01**
- 快照日期 / Snapshot date: **2026-09-01 (UTC)**
- 待审核 / Pending: **179**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **73**
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

对比上一份快照 **2026-08-31** / vs previous snapshot **2026-08-31**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **3**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [anbeime/skill](https://github.com/anbeime/skill) | 待审 / pending | 6030 | — | 578 | 210d | 待审高星 | 核准即 Top 2 |
| ⚠️ [YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) | 待审 / pending | 253 | — | 50 | 12d | 待审高星 | 核准即榜 #40 |
| ⚠️ [leenkcool/Blue-Whale-Harness](https://github.com/leenkcool/Blue-Whale-Harness) | 待审 / pending | 189 | — | 70 | 18d | 待审高星 | 核准即榜 #49 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [anbeime/skill](https://github.com/anbeime/skill) ⚠️ | 6030 | 2026-02-02 | 2026-09-01 | 收录最全、更新最快的技能Skills商店：416个精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取GitHub上万个Skills项目，按分类、更新时间、Star数量整理。 |
| 2 | [YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) ⚠️ | 253 | 2026-08-19 | 2026-09-01 | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ |
| 3 | [leenkcool/Blue-Whale-Harness](https://github.com/leenkcool/Blue-Whale-Harness) ⚠️ | 189 | 2026-08-13 | 2026-09-01 | 🐋 DeepSeek Harness 插件总目录 · The catalog of DSH plugins：1958 个仓库 / 1819 个真插件（Skills · MCP · Tools · UI · Orchestration），中英文搜索、分类筛选、STAR 排序 → leenkcool.github.io |
| 4 | [KongFangXun/sofagent](https://github.com/KongFangXun/sofagent) | 41 | 2026-06-18 | 2026-09-01 | Open-source FDE Harness layer for enterprise AI: 24-rule git-diff audit, auto snapshot rollback, rule injection, self-evolution. Ships as 13 plugins (9 DSH + 4 OpenClaw) + MCP server (79 tools). MIT. |
| 5 | [SepineTam/cnki-mcp](https://github.com/SepineTam/cnki-mcp) | 24 | 2026-07-03 | 2026-09-01 | An MCP server for reach CNKI.  |
| 6 | [tnnevol/fn-os-apps](https://github.com/tnnevol/fn-os-apps) | 24 | 2026-05-15 | 2026-09-01 | 飞牛 fnOS 应用 Monorepo |
| 7 | [GZX2211/dsh-Visual-Workflow](https://github.com/GZX2211/dsh-Visual-Workflow) | 14 | 2026-08-15 | 2026-09-01 | 专为 DeepSeek Harness Web GUI 打造的可视化多 Agent 工作流编排插件。公开测试版已上线！接下来会随着 DSH 的正式版上线一并发布正式版！ |
| 8 | [BertramWang12399/dsh-projects-mode](https://github.com/BertramWang12399/dsh-projects-mode) | 7 | 2026-08-27 | 2026-09-01 | Project mode plugin for DSH Web GUI: sidebar entry, full-screen project manager, live per-project context injection (instructions + refreshable memory), session badge |
| 9 | [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | 7 | 2026-08-15 | 2026-09-01 | dsh plugin: OCR attached images locally with the built-in Windows OCR engine — text-only models can see, privacy-first |
| 10 | [sagirimo/BioDSH](https://github.com/sagirimo/BioDSH) | 7 | 2026-08-31 | 2026-09-01 | The bioinformatics agent desktop for clinicians and wet-lab scientists — built on DeepSeek Harness. One-click installers, a skill store, offline mode. |
| 11 | [liangdabiao/dsh-plugin-developer-skill](https://github.com/liangdabiao/dsh-plugin-developer-skill) | 6 | 2026-09-01 | 2026-09-01 | dsh-plugin-developer — DeepSeek Harness 插件开发 Skill  > 指导 AI Agent 从 0 到 1 开发、构建、安装、测试 DeepSeek Harness（dsh）插件。基于 **dsh 0.1.1-rc.2** 与 dsh-openmaic 项目的完整实战经验，并内置一个**已通过 web 界面实测**的天气插件作为整包参考案例。  ## 这是什么  dsh 采用"无特权内核、万物皆插件"的设计：模型适配器、工具注册表、Agent 循环、网页界面都是插件 |
| 12 | [jukanntenn/grill-me-sleek](https://github.com/jukanntenn/grill-me-sleek) | 5 | 2026-05-28 | 2026-09-01 | Stress-test your plan before vibe coding. The AI asks you questions to build a shared understanding — you answer in a sleek web UI. |
| 13 | [goatliamia/dsh-runtime-capabilities](https://github.com/goatliamia/dsh-runtime-capabilities) | 4 | 2026-08-31 | 2026-09-01 | 不要让 Model 为确定性问题反复思考，也不要让 Harness 为不确定的问题假装知道答案 |
| 14 | [ItBayMax/dsh-replay-theater](https://github.com/ItBayMax/dsh-replay-theater) | 4 | 2026-09-01 | 2026-09-01 | Replay a DeepSeek Harness session at its original token cadence — an in-app playback theater with play/pause/step/speed/seek. |
| 15 | [AstroLiao/dsh-launcher](https://github.com/AstroLiao/dsh-launcher) | 3 | 2026-08-15 | 2026-09-01 | Windows launcher for DeepSeek Harness running in WSL2 (dsh) |
| 16 | [imMamdouhaboammar/get-fable](https://github.com/imMamdouhaboammar/get-fable) | 3 | 2026-08-11 | 2026-09-01 | Make the model you already use work more like a frontier model with better planning, persistent context, skills, hooks, failure handling, and verification |
| 17 | [liangdabiao/dsh-weather-plugin](https://github.com/liangdabiao/dsh-weather-plugin) | 3 | 2026-09-01 | 2026-09-01 | dsh = 一台"所有零件都能换"的智能体机器。写插件 = 造一个零件装上去。本项目展示怎样开发一个天气插件：天气插件的设计：Node 端调 Open-Meteo 拿温度风力，浏览器端用这些数据画一张会动的天气卡片。 |
| 18 | [maxwell-feng/dsh-tesseract-ocr](https://github.com/maxwell-feng/dsh-tesseract-ocr) | 3 | 2026-08-15 | 2026-09-01 | dsh plugin: OCR attached images locally with Tesseract — text-only models can see, privacy-first |
| 19 | [miaomiao636/dsh-message-navigator](https://github.com/miaomiao636/dsh-message-navigator) | 3 | 2026-08-15 | 2026-09-01 | DeepSeek Harness message navigator: a table of contents for long conversations — user-message outline, click-to-jump, scroll-synced highlight, search and Markdown outline export. |
| 20 | [Xyanxhu/kilo-zen2dsh](https://github.com/Xyanxhu/kilo-zen2dsh) | 3 | 2026-08-31 | 2026-09-01 | Kilo Gateway free models for DeepSeek Harness (DSH) |
| 21 | [Andiii208/gzhflow](https://github.com/Andiii208/gzhflow) | 2 | 2026-08-19 | 2026-09-01 | 跨 Agent 公众号内容发布工作流框架 — 素材先行/写作/去AI味/配图/排版/推草稿箱 六阶段流水线，适配 Claude Code/Cursor/Codex/Gemini/Qwen/DeepSeek 等主流 Agent |
| 22 | [AndKinoko/DSH-Search-Citation-Auditor](https://github.com/AndKinoko/DSH-Search-Citation-Auditor) | 2 | 2026-09-01 | 2026-09-01 | Audit citation sources in AI responses – extract URLs from the reply, score and rank them by threat level, and output a detailed report. Domains on your blocklist will be genuinely blocked – web tools such as web_search and web_fetch will directly refuse to access them. The blocklist is fully maintained by you. |
| 23 | [curtainsmall/dsh-electro-lab](https://github.com/curtainsmall/dsh-electro-lab) | 2 | 2026-08-22 | 2026-09-01 | Electrical & electronics calculation plugin for the DeepSeek Harness. 面向 DeepSeek Harness 的电气电子计算插件。 |
| 24 | [hr98w/dsh-memory](https://github.com/hr98w/dsh-memory) | 2 | 2026-09-01 | 2026-09-01 | 融合 Claude Code 的 Auto Memory 与 Codex 的 Session 记忆整理，为 DeepSeek Harness 提供简单、透明、上下文友好的长期记忆。Claude Code-inspired Auto Memory meets Codex-inspired Session consolidation, bringing simple, transparent, and context-efficient long-term memory to DeepSeek Harness. |
| 25 | [Jimmy0123-ux/dsh-token-pet](https://github.com/Jimmy0123-ux/dsh-token-pet) | 2 | 2026-09-01 | 2026-09-01 | DeepSeek Harness Desktop 悬浮用量小宠物：12 个正式逐帧动作反馈请求、工具、上下文压缩、归档与提示词增强；展示实时上下文占用、跨会话 Lifetime Ledger、服务商/模型统计和小时 Token 趋势；支持可编辑提示词增强、拖拽缩放、低性能模式与后台增量索引。 |
| 26 | [whh110112/human-writing-skills](https://github.com/whh110112/human-writing-skills) | 2 | 2026-06-15 | 2026-09-01 | Advanced multilingual AI humanizer and writing toolkit for natural prose, voice preservation, long-form continuity, and focused audits. |
| 27 | [yxv1203-collab/dsh-conversation-archive](https://github.com/yxv1203-collab/dsh-conversation-archive) | 2 | 2026-09-01 | 2026-09-01 | Native archive, retention, safe deletion, and verified backup management for DeepSeek Harness. |
| 28 | [0x5446/rowel](https://github.com/0x5446/rowel) | 1 | 2026-08-14 | 2026-09-01 | Native iOS client for DeepSeek Harness (dsh). Answer your agent from your phone — the relay only ever sees ciphertext. |
| 29 | [17861102832/fleet-os](https://github.com/17861102832/fleet-os) | 1 | 2026-09-01 | 2026-09-01 | Fleet OS · 舰队模式 — 生产级多 Agent 协同引擎：WS 黑板 + 事件溯源 + 盲评对抗 + 跨舰队接力 + 上下文压缩 + 多厂商负载均衡 + 自进化。36 模块，零运行时依赖，MCP 40 工具，48 项 e2e 全绿。 |
| 30 | [Aik358/dsh-literature](https://github.com/Aik358/dsh-literature) | 1 | 2026-08-30 | 2026-09-01 | DSH Literature 文献侧窗插件：在 DeepSeek Harness 侧边栏识别 DOI/arXiv/标题、抓取元数据与全文、写入本地文献库或导出目录，内置 PDF 阅读器。 |
| 31 | [americanjeff/filestab](https://github.com/americanjeff/filestab) | 1 | 2026-08-31 | 2026-09-01 | Adds a file/vcs browser with diff and markdown preview support to the DeepSeek Harness · 为 DeepSeek Harness 添加文件 / VCS 浏览器，支持 diff 与 Markdown 预览。 |
| 32 | [AstroLiao/dsh-memory-core](https://github.com/AstroLiao/dsh-memory-core) | 1 | 2026-09-01 | 2026-09-01 | DeepSeek Harness cross-session long-term memory + user profile plugin: the AI remembers who you are, your projects and preferences across sessions. Pure Markdown, zero-config, fully local. (monorepo: dsh-memory-core + dsh-memory-ui) |
| 33 | [cat552/dsh-agent-quality-diagnosis](https://github.com/cat552/dsh-agent-quality-diagnosis) | 1 | 2026-09-01 | 2026-09-01 | Actionable quality diagnostics for DSH agent sessions, with tool-call evidence and next-step recommendations. |
| 34 | [ddtcorex/dsh-maestro-sync](https://github.com/ddtcorex/dsh-maestro-sync) | 1 | 2026-08-30 | 2026-09-01 | Maestro harness sync — merge memories and sessions across machines (publishable) |
| 35 | [DjangoAILab/dsh-plugins](https://github.com/DjangoAILab/dsh-plugins) | 1 | 2026-08-18 | 2026-09-01 | DeepSeek Harness plugins for browser automation, macOS computer use, external subagents, and guarded SSH operations. |
| 36 | [doublehappy123/dsh-v4flash-tiler](https://github.com/doublehappy123/dsh-v4flash-tiler) | 1 | 2026-09-01 | 2026-09-01 | DSH plugin: auto-tiles oversized chat images into labelled grid tiles for DeepSeek v4Flash vision, with Python tiling engine |
| 37 | [doublemolu/dsh-costometer](https://github.com/doublemolu/dsh-costometer) | 1 | 2026-08-28 | 2026-09-01 | 花知多少 · Cost-O-Meter — DeepSeek Harness cost & balance meter: account balance, recharge history, per-conversation spend & tokens, 50-yuan segmented progress bar, low-balance guard, 8 languages & currencies with auto FX rates (CNY base). |
| 38 | [duhu2000/dsh-data-cleaning-agent](https://github.com/duhu2000/dsh-data-cleaning-agent) | 1 | 2026-09-01 | 2026-09-01 | Data cleaning and enterprise enrichment agent plugin for DeepSeek Harness. |
| 39 | [gengwg/dsh-kubectl-guard](https://github.com/gengwg/dsh-kubectl-guard) | 1 | 2026-09-01 | 2026-09-01 | A dsh policy plugin that gates kubectl by kubeconfig context: deny irreversible verbs outside local clusters, ask for the rest. |
| 40 | [hakimedes/dsh-easyremote](https://github.com/hakimedes/dsh-easyremote) | 1 | 2026-08-25 | 2026-09-01 | Local-first Android remote workspace with one-command Cloudflare Tunnel setup |
| 41 | [HOWILLMAKEIT/dsh-model-context-catalog](https://github.com/HOWILLMAKEIT/dsh-model-context-catalog) | 1 | 2026-09-01 | 2026-09-01 | DeepSeek Harness 插件：维护 llm-pi-ai 模型的准确上下文窗口，避免长会话被误判为上下文溢出。 |
| 42 | [jkStars/dsh-token-usage-stats](https://github.com/jkStars/dsh-token-usage-stats) | 1 | 2026-08-22 | 2026-09-01 | DSH plugin: cross-session token usage analytics with a web dashboard (ctx.tokenUsageStats) |
| 43 | [Jonah-Wu23/dsh-gungnir](https://github.com/Jonah-Wu23/dsh-gungnir) | 1 | 2026-09-01 | 2026-09-01 | Lock the goal. Adapt the loop. Prove the hit. |
| 44 | [Kaiji-Z/dsh-plugin-stardeck](https://github.com/Kaiji-Z/dsh-plugin-stardeck) | 1 | 2026-08-30 | 2026-09-01 | RTS-style multi-agent orchestration board for DeepSeek Harness: issue plain-language strategic orders, a staff agent drafts acceptance-checked task orders, commander agents deploy typed subagent troops on isolated workspaces — with a 3D starfield campaign view, append-only event logs, and machine-checked verification. |
| 45 | [linfengyu94/dsh-balance-panel](https://github.com/linfengyu94/dsh-balance-panel) | 1 | 2026-09-01 | 2026-09-01 | DeepSeek 充值余额悬浮面板 - DSH 插件：悬浮显示充值余额，带可视化进度条与动态按钮动画 |
| 46 | [LouisHaoL/cloudcli-timer-agent](https://github.com/LouisHaoL/cloudcli-timer-agent) | 1 | 2026-09-01 | 2026-09-01 | CloudCLI plugin: cron & fixed-interval scheduler for AI agent prompts and command jobs (dsh-timer-agent port) \| CloudCLI 定时任务插件 |
| 47 | [mycherish/dsh-bridge](https://github.com/mycherish/dsh-bridge) | 1 | 2026-08-29 | 2026-09-01 | DSH Bridge 是 DeepSeek Harness 的原生 macOS 菜单栏快速入口，不是完整聊天客户端，也不是 DSH Web 的套壳。 |
| 48 | [Perfirstvito/dsh-compaction-micro](https://github.com/Perfirstvito/dsh-compaction-micro) | 1 | 2026-09-01 | 2026-09-01 | a context compact strategy plugin |
| 49 | [redfox-data/redfox-skill-gallery](https://github.com/redfox-data/redfox-skill-gallery) | 1 | 2026-08-26 | 2026-09-01 | redfox-skill-gallery是 DeepSeek Harness 的 Web 插件。它在侧边栏底部加一个「红狐Skills」入口，点击后整个界面切换为卡片式技能画廊，集中展示redfox-community-dsh插件内的全部红狐社区 skills |
| 50 | [sperictao/dsh-pro-max](https://github.com/sperictao/dsh-pro-max) | 1 | 2026-08-20 | 2026-09-01 | DeepSeek Harness desktop launcher — one-click local web UI, Tailscale-secured remote access, plugin marketplace & model configuration. Built with Tauri 2 + React + TypeScript. |
| 51 | [v587d/dsh-search-first](https://github.com/v587d/dsh-search-first) | 1 | 2026-09-01 | 2026-09-01 | Search first, verify facts, reply last — enforced by DSH. |
| 52 | [valuelesser/pipeline-mode](https://github.com/valuelesser/pipeline-mode) | 1 | 2026-09-01 | 2026-09-01 | LangGraph-style adaptive Planner→Executor→Reviewer pipeline for DSH (DeepSeek Harness) |
| 53 | [yuioi666/dsh-conversation-nav-dots](https://github.com/yuioi666/dsh-conversation-nav-dots) | 1 | 2026-08-31 | 2026-09-01 | dsh-conversation-nav-dots 在 DSH Web 对话界面的右侧添加一列导航标记。每个标记对应一条用户消息。点击即可跳转，悬停可预览所有消息内容。 |
| 54 | [ZBber-lab/cau-portal-open](https://github.com/ZBber-lab/cau-portal-open) | 1 | 2026-08-31 | 2026-09-01 | 农大门户（cau-portal）：中国农业大学通知公告 DSH 插件 + 爬虫/AI 加工管道（开源工具，数据由使用者自建） |
| 55 | [zerorigin-studio/dsh-desktop-shell](https://github.com/zerorigin-studio/dsh-desktop-shell) | 1 | 2026-08-24 | 2026-09-01 | dsh desktop shell plugin |
| 56 | [abworks-dev/dsh-plugin-lab](https://github.com/abworks-dev/dsh-plugin-lab) | 0 | 2026-09-01 | 2026-09-01 | Workshop and lab for developing, testing, and maintaining DeepSeek Harness Cordis plugins. |
| 57 | [ADXZXCD/dsh-web-mobile](https://github.com/ADXZXCD/dsh-web-mobile) | 0 | 2026-09-01 | 2026-09-01 | Mobile layout enhancement plugin for DeepSeek Harness Web UI |
| 58 | [afterDDL/dsh-creator-shared-blueprint](https://github.com/afterDDL/dsh-creator-shared-blueprint) | 0 | 2026-08-25 | 2026-09-01 | A shared interface for humans and AI to understand, discuss, modify, and extend DeepSeek Harness agents. |
| 59 | [Albertlsy588/dsh-release-sentinel](https://github.com/Albertlsy588/dsh-release-sentinel) | 0 | 2026-09-01 | 2026-09-01 | DSH local read-only control plugin for Release Sentinel |
| 60 | [All3nCN/dsh-qa-suite-N23](https://github.com/All3nCN/dsh-qa-suite-N23) | 0 | 2026-09-01 | 2026-09-01 | DSH quality suite plugin: automatic tsc --noEmit diagnostics (code_check tool) + multi-lens /code-review command. Merged absorption of dsh-code-check (BSD-3) and dsh-command-code-review (MIT). |
| 61 | [ArmyWas/dsh-provider-passport](https://github.com/ArmyWas/dsh-provider-passport) | 0 | 2026-09-01 | 2026-09-01 | Review-first request-dialect preflight for custom DeepSeek Harness providers. |
| 62 | [auggie246/dsh-llm-openai-codex](https://github.com/auggie246/dsh-llm-openai-codex) | 0 | 2026-08-19 | 2026-09-01 | OpenAI Codex (ChatGPT Plus/Pro subscription) LLM provider for the DeepSeek Harness — OAuth tokens from the Codex CLI, no API key required |
| 63 | [awol2005ex3/dsh-export-session](https://github.com/awol2005ex3/dsh-export-session) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness（`dsh`）插件：把**当前会话的完整内容**一键导出为 **Markdown（`.md`）/ Word（`.docx`）/ PDF（`.pdf`）**。 |
| 64 | [awol2005ex3/dsh-logo-custom](https://github.com/awol2005ex3/dsh-logo-custom) | 0 | 2026-08-31 | 2026-09-01 | DeepSeek Harness 自定义 Logo 插件 — 上传图片替换侧边栏左上角的品牌图标和文字。 |
| 65 | [axel286137079-dot/dsh-skill-matcher](https://github.com/axel286137079-dot/dsh-skill-matcher) | 0 | 2026-09-01 | 2026-09-01 | Skill & Expert Matcher for DeepSeek Harness (dsh plugin) |
| 66 | [benz-ai-x/dsh-md-preview](https://github.com/benz-ai-x/dsh-md-preview) | 0 | 2026-09-01 | 2026-09-01 | DSH (DeepSeek Harness) Web GUI plugin — preview, edit & browse workspace markdown/text files right beside the chat: rich preview panel, guarded editing with conflict detection, lazy workspace file tree. 预览/编辑/浏览会话工作区文档 |
| 67 | [BitDG/dsh-cloud-model-providers](https://github.com/BitDG/dsh-cloud-model-providers) | 0 | 2026-09-01 | 2026-09-01 | DSH bundle for Ant Digital MaaS and NVIDIA NIM streaming model providers |
| 68 | [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | 0 | 2026-08-27 | 2026-09-01 | DeepSeek Harness (DSH) 的增强模型选择器：单层菜单（搜索 + 分组）+ 底部内联推理强度（Effort）滑杆。 |
| 69 | [blairlaird/dsh-agent-mailbox](https://github.com/blairlaird/dsh-agent-mailbox) | 0 | 2026-09-01 | 2026-09-01 | Durable agent-to-agent messaging for DeepSeek Harness: threads, receipts, search, broadcast, attachments, presence, SSE streaming, signing. Zero dependencies. |
| 70 | [bvcvb/dsh-baize-rules](https://github.com/bvcvb/dsh-baize-rules) | 0 | 2026-08-31 | 2026-09-01 | dsh plugin: user-set session/global must-do & must-not requirements injected at conversation start (Baize). |
| 71 | [ccr-wer/dsh-dolphin-security](https://github.com/ccr-wer/dsh-dolphin-security) | 0 | 2026-09-01 | 2026-09-01 | 集扫描、远程执行、报告于一体的 DSH 主动安全巡逻插件，基于 SSH + Semgrep |
| 72 | [CDeZT/better-basicfun](https://github.com/CDeZT/better-basicfun) | 0 | 2026-09-01 | 2026-09-01 | Native DSH default workspace with complete paged read-only access to plugins, skills, memory, sessions, storage, settings, credentials, and DSH_HOME files. |
| 73 | [chai1110/dsh-ssh-remote](https://github.com/chai1110/dsh-ssh-remote) | 0 | 2026-08-20 | 2026-09-01 | DeepSeek Harness SSH 远程工作区插件（多机并行）：同时连接多台服务器，Agent 直接查看/编辑/执行远程文件。基于 flymysql/dsh-remote (MIT) 适配 0.1.1-rc.2 |
| 74 | [chendefine/dsh-sidebar-superdoc-docx](https://github.com/chendefine/dsh-sidebar-superdoc-docx) | 0 | 2026-09-01 | 2026-09-01 | DSH web plugin: open and edit .docx in the better-sidebar via SuperDoc — self-hosted, offline-capable, atomic saves |
| 75 | [Doozqoo/dsh-pixel-office](https://github.com/Doozqoo/dsh-pixel-office) | 0 | 2026-08-27 | 2026-09-01 |  DeepSeek Harness Web GUI |
| 76 | [dzf-code/dsh-paste-doc](https://github.com/dzf-code/dsh-paste-doc) | 0 | 2026-08-24 | 2026-09-01 | 粘贴长文本 |
| 77 | [elliseang0000-lang/dsh-pentest-bugtrace](https://github.com/elliseang0000-lang/dsh-pentest-bugtrace) | 0 | 2026-09-01 | 2026-09-01 | BugTraceAI penetration-testing mode for deepseek-harness (dsh): pentester persona, runbook skill, and MCP bridge in one installable bundle |
| 78 | [erdholion/dsh-loop-guard](https://github.com/erdholion/dsh-loop-guard) | 0 | 2026-08-31 | 2026-09-01 | Result-aware stuck-loop guard for DeepSeek Harness: advisory nudges plus a monotonic hard stop. Only repeats with identical results count. |
| 79 | [EsonXie/dsh-agent-toolkit](https://github.com/EsonXie/dsh-agent-toolkit) | 0 | 2026-08-19 | 2026-09-01 | Deepseek Harness工具集 |
| 80 | [Eternalloveone/dsh-palm](https://github.com/Eternalloveone/dsh-palm) | 0 | 2026-08-30 | 2026-09-01 | Standalone mobile surface for the dsh web GUI: scan-to-pair device trust, /m/ phone UI, realtime SSE mux, task plan & background jobs, offline outbox, PWA |
| 81 | [evanfang0054/dsh-init](https://github.com/evanfang0054/dsh-init) | 0 | 2026-09-01 | 2026-09-01 | Claude Code style /init command for DeepSeek Harness (DSH): generates CLAUDE.md and symlinks AGENTS.md to it |
| 82 | [fan56/dsh-llm-proxy](https://github.com/fan56/dsh-llm-proxy) | 0 | 2026-08-24 | 2026-09-01 | dsh plugin: per-host LLM outbound HTTP proxy routing (undici ProxyAgent) with a bundled dsh skill |
| 83 | [fan56/dsh-llmwiki-memory](https://github.com/fan56/dsh-llmwiki-memory) | 0 | 2026-08-31 | 2026-09-01 | dsh-plugin: OKF v0.2 topic memory for dsh - local-first git-tracked bundle, hot-path LLM-free injection, two-stage observer with background distill |
| 84 | [fan56/dsh-vault](https://github.com/fan56/dsh-vault) | 0 | 2026-08-30 | 2026-09-01 | dsh-plugin: encrypted backup / restore / migration of the dsh home config through a private GitHub repo |
| 85 | [FishingTofu0120/Plugin-for-checking-API-balance](https://github.com/FishingTofu0120/Plugin-for-checking-API-balance) | 0 | 2026-09-01 | 2026-09-01 | A plugin for checking API-balance on DSH website conveniently |
| 86 | [ForeverYoungPp/dsh-web-search](https://github.com/ForeverYoungPp/dsh-web-search) | 0 | 2026-09-01 | 2026-09-01 | dsh-web-search — Multi-provider web search for DeepSeek Harness: routes the native web_search tool through a configurable provider fallback chain (Tavily/Brave/Exa/Firecrawl/Jina/Kagi/SearXNG/DuckDuckGo), replacing the built-in deepseek-official backend, with a settings page for key management and ordering. Approach adapted from OMP.  |
| 87 | [FoyonaCZY/dsh-kit](https://github.com/FoyonaCZY/dsh-kit) | 0 | 2026-09-01 | 2026-09-01 | Six quality-of-life plugins for DeepSeek Harness: /rewind workspace undo, desktop notifications, auto-format, live git context, secret redaction, and a done-means-green verify gate. No build step. |
| 88 | [Frank-NF/dsh-memory-nexus](https://github.com/Frank-NF/dsh-memory-nexus) | 0 | 2026-09-01 | 2026-09-01 | DSH integrated memory and context management plugin: 4-layer memory, context compression, prompt orchestration, enterprise security |
| 89 | [GooDAnDReaDY/dsh-context-lens](https://github.com/GooDAnDReaDY/dsh-context-lens) | 0 | 2026-08-31 | 2026-09-01 | DSH plugin for AST context compression, test log filtering, and token budget guard |
| 90 | [GooDAnDReaDY/dsh-kanban](https://github.com/GooDAnDReaDY/dsh-kanban) | 0 | 2026-08-27 | 2026-09-01 | Kanban board for DeepSeek Harness: Gitea-backed tasks, workflow columns, and dedicated agent sessions |
| 91 | [GoshawkGGGG/dsh-safe-tool](https://github.com/GoshawkGGGG/dsh-safe-tool) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness 的 AI 工具审批插件，使用AI审核AGENT调用工具的合规性并决定是否执行，审核标准可定制。 |
| 92 | [gsh150801/dsh-bioinf](https://github.com/gsh150801/dsh-bioinf) | 0 | 2026-09-01 | 2026-09-01 | Bioinformatics plugin for DeepSeek Harness (dsh) |
| 93 | [gsh150801/dsh-bioinf-routed](https://github.com/gsh150801/dsh-bioinf-routed) | 0 | 2026-09-01 | 2026-09-01 | Bioinformatics plugin for DeepSeek Harness (dsh) |
| 94 | [gsh150801/dsh-bioinf-verify](https://github.com/gsh150801/dsh-bioinf-verify) | 0 | 2026-09-01 | 2026-09-01 | Bioinformatics plugin for DeepSeek Harness (dsh) |
| 95 | [gtaifu/dsh-title-index](https://github.com/gtaifu/dsh-title-index) | 0 | 2026-09-01 | 2026-09-01 | Disk-indexed session title lookups for the DeepSeek Harness web GUI — @-mention candidates ~30× faster. |
| 96 | [hanrr92/dsh-code-quote](https://github.com/hanrr92/dsh-code-quote) | 0 | 2026-09-01 | 2026-09-01 | 代码引用 |
| 97 | [hcyinnn/dsh-tool-ssh](https://github.com/hcyinnn/dsh-tool-ssh) | 0 | 2026-09-01 | 2026-09-01 | SSH tools plugin for DeepSeek Harness (dsh): run remote commands and transfer files via OpenSSH. dsh 插件——让 Agent 通过 SSH 在远程主机执行命令、上传/下载文件。 |
| 98 | [heartmove/dsh-session-bridge](https://github.com/heartmove/dsh-session-bridge) | 0 | 2026-09-01 | 2026-09-01 |  DSH 插件，让当前代理直接从提示词驱动其它真实 DSH 会话——创建/发送/等待回复/读取/恢复/跨工作区查找会话，并支持监控调度主任务与归档会话。A DSH plugin that lets the agent drive other real DSH sessions straight from a prompt — create, send, wait, read, resume, and find sessions across workspaces, plus monitor/schedule a main task and archive sessions. |
| 99 | [hehehe1234567894/dsh-ssh-remote](https://github.com/hehehe1234567894/dsh-ssh-remote) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness (DSH) SSH 远程工作插件 — 纯远程模式：多机管理、工作区选择、远程文件读写工具 |
| 100 | [huangjua/dsh-evidence](https://github.com/huangjua/dsh-evidence) | 0 | 2026-09-01 | 2026-09-01 | 🛡️ Verifiable, tamper-proof audit evidence bundles and hash-chained receipts for DSH agents |
| 101 | [huangjua/dsh-local-memory](https://github.com/huangjua/dsh-local-memory) | 0 | 2026-09-01 | 2026-09-01 | 🧠 Persistent cross-session local memory for DSH agents (Markdown SSOT + self-healing SQLite mirror) |
| 102 | [huangjua/dsh-session-index](https://github.com/huangjua/dsh-session-index) | 0 | 2026-09-01 | 2026-09-01 | 🔍 Full-text session search & bookmarking engine for DSH with native CJK substring search |
| 103 | [jackyytche/dsh-hindsight-memory](https://github.com/jackyytche/dsh-hindsight-memory) | 0 | 2026-09-01 | 2026-09-01 | Hindsight long-term memory for DeepSeek Harness |
| 104 | [joao-paulo-santos/dsh-wo-tmux](https://github.com/joao-paulo-santos/dsh-wo-tmux) | 0 | 2026-08-31 | 2026-09-01 | Workspace Overview tmux tab: live/frozen/cold session state, one-click terminal attach through tmux-fridge, freeze/snapshot/recover, and workspace-to-session links. |
| 105 | [justhalfbit/dsh-plugin-show-image](https://github.com/justhalfbit/dsh-plugin-show-image) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness (DSH) 会话内图片渲染插件：全局 show_image 工具 + 点击放大 lightbox。 \| Inline image rendering plugin for DSH: global show_image tool + click-to-enlarge lightbox. |
| 106 | [jwilson411/dsh-compat-probe](https://github.com/jwilson411/dsh-compat-probe) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin: OpenAI-compat server protocol card (loopback probe, no GGUF) |
| 107 | [jwilson411/dsh-mutation-receipt](https://github.com/jwilson411/dsh-mutation-receipt) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin: append-only JSONL of filesystem touches (path, op, sha256 before/after) with no file contents |
| 108 | [jwilson411/dsh-result-cap](https://github.com/jwilson411/dsh-result-cap) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin: deterministic tool-result byte cap with SHA-256 of the omitted tail. Not a compressor model. |
| 109 | [jwilson411/dsh-tool-quota](https://github.com/jwilson411/dsh-tool-quota) | 0 | 2026-08-31 | 2026-09-01 | DeepSeek Harness plugin: per-tool call and result-byte caps |
| 110 | [kalifun/dsh-cwl](https://github.com/kalifun/dsh-cwl) | 0 | 2026-09-01 | 2026-09-01 | Structured context eviction for DeepSeek Harness — deterministic, zero-LLM, no summarization lossiness |
| 111 | [KDronin/dsh-folder](https://github.com/KDronin/dsh-folder) | 0 | 2026-08-16 | 2026-09-01 | DeepSeek Harness plugin: Open Folder in workspace context menu (between Rename and Delete Workspace) |
| 112 | [KDronin/dsh-tray](https://github.com/KDronin/dsh-tray) | 0 | 2026-08-16 | 2026-09-01 | DeepSeek Harness 桌面托盘插件：托盘启动 Harness、任务完成通知、电源管理、进程接管、GitHub 集成 |
| 113 | [kfc966/dsh-native-codex-oauth](https://github.com/kfc966/dsh-native-codex-oauth) | 0 | 2026-09-01 | 2026-09-01 | Native Codex OAuth login and model access for DeepSeek Harness as one installable plugin. |
| 114 | [kongshan-zhuyu/dsh-balance-quota](https://github.com/kongshan-zhuyu/dsh-balance-quota) | 0 | 2026-08-18 | 2026-09-01 | 一块可以配置余额、监测模型监控状态、以及配置模型多模态设置的插件 |
| 115 | [kuanfu0430/dsh-compaction-tune](https://github.com/kuanfu0430/dsh-compaction-tune) | 0 | 2026-09-01 | 2026-09-01 | Composer control for DeepSeek Harness auto-compaction thresholds |
| 116 | [kumanana66/dsh-automation](https://github.com/kumanana66/dsh-automation) | 0 | 2026-09-01 | 2026-09-01 | RPA-style scheduled web automation for DeepSeek Harness: record browser operations -> requirements doc -> LLM generates Python + Playwright -> schedule with run records and email notifications |
| 117 | [l2685209197/dsh-pdf-translate](https://github.com/l2685209197/dsh-pdf-translate) | 0 | 2026-09-01 | 2026-09-01 | DSH 插件：用 DeepSeek 翻译文本型 PDF，保留版式/字体/图片/链接，输出可编辑 PDF（单次 ≤50 页） |
| 118 | [lhuans/dsh-genui](https://github.com/lhuans/dsh-genui) | 0 | 2026-08-15 | 2026-09-01 | GenUI for DeepSeek Harness: interactive charts, forms, calculators, dashboards, and mini apps rendered inline in assistant replies, with actions that flow back to the model. |
| 119 | [lionwill/dsh-compactor](https://github.com/lionwill/dsh-compactor) | 0 | 2026-09-01 | 2026-09-01 | DSH上下文压缩插件 |
| 120 | [liuyangdongdong/dsh-session-rerun](https://github.com/liuyangdongdong/dsh-session-rerun) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin for inspecting and replaying completed main-agent and subagent session steps |
| 121 | [ljh220300-eng/dsh-plugin-ssh-manager](https://github.com/ljh220300-eng/dsh-plugin-ssh-manager) | 0 | 2026-09-01 | 2026-09-01 | Manage multi-IP DSH instances from one terminal via SSH tunnels · 在一台终端上通过 SSH 隧道管理多 IP 的 DSH |
| 122 | [Lohaslee/dsh-super-pm](https://github.com/Lohaslee/dsh-super-pm) | 0 | 2026-09-01 | 2026-09-01 | Super PM product-thinking skill packaged as a DeepSeek Harness plugin |
| 123 | [lovaxi/Rubato_Device](https://github.com/lovaxi/Rubato_Device) | 0 | 2026-08-30 | 2026-09-01 | Rubato is a palm-sized retro-Macintosh screen built for one job: looking after the bodies of programmers and heavy AI users. |
| 124 | [lovaxi/Rubato_Plugins](https://github.com/lovaxi/Rubato_Plugins) | 0 | 2026-08-30 | 2026-09-01 | Rubato is a palm-sized retro-Macintosh screen built for one job: looking after the bodies of programmers and heavy AI users. |
| 125 | [Luisarg03/dsh-memory-vault](https://github.com/Luisarg03/dsh-memory-vault) | 0 | 2026-08-31 | 2026-09-01 | Memoria OKF persistente para DeepSeek Harness: MCP server (SQLite FTS5 + markdown) + plugins memory-mcp / memory-auto |
| 126 | [luyy9apples/dsh-workspace-memory](https://github.com/luyy9apples/dsh-workspace-memory) | 0 | 2026-08-31 | 2026-09-01 | Approval-gated workspace instructions and shared project memory for DeepSeek Harness |
| 127 | [m1452700576/dsh-app-updater](https://github.com/m1452700576/dsh-app-updater) | 0 | 2026-08-26 | 2026-09-01 | 更新dsh客户端 |
| 128 | [magian1127/deepseek-harness-zcode_mask](https://github.com/magian1127/deepseek-harness-zcode_mask) | 0 | 2026-09-01 | 2026-09-01 | 将 ZCode 桌面 App 登录的 Coding Plan 模型接入 DeepSeek Harness，请求头与 ZCode 完全一致 — bring ZCode coding-plan models into DeepSeek Harness with byte-identical request headers. |
| 129 | [markelayan/dsh-taskboard-flow](https://github.com/markelayan/dsh-taskboard-flow) | 0 | 2026-08-31 | 2026-09-01 | Companion plugin to dsh-taskboard (DeepSeek Harness): kanban flow engine + cross-session messaging. File-based config, local-only, no telemetry. |
| 130 | [mengruoa/dsh-rembg](https://github.com/mengruoa/dsh-rembg) | 0 | 2026-08-21 | 2026-09-01 | DSH plugin: auto-install rembg and expose a background-removal tool to the LLM |
| 131 | [Milbaxter/dsh-critique-loop](https://github.com/Milbaxter/dsh-critique-loop) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin: forces one critique-and-improve round after each completed turn. |
| 132 | [mnbvcxzaqwertyuioplm/dsh-memory](https://github.com/mnbvcxzaqwertyuioplm/dsh-memory) | 0 | 2026-09-01 | 2026-09-01 | DSH 跨会话语义记忆插件：智谱 embedding-3 + SQLite，提供 memory_add / memory_search 语义召回；配置可选、绝不因缺 key/缺库/缺服务而崩。 |
| 133 | [mohith-das/dsh-client-ui-model-selection-search](https://github.com/mohith-das/dsh-client-ui-model-selection-search) | 0 | 2026-09-01 | 2026-09-01 | Fork of DeepSeek Harness's official model picker (@deepseek-ai/dsh-client-ui-model-selection) adding an in-menu search box to filter models by name, provider, or id. |
| 134 | [mohith-das/dsh-voice-input-en](https://github.com/mohith-das/dsh-voice-input-en) | 0 | 2026-09-01 | 2026-09-01 | Minimal, English-only voice input plugin for DeepSeek Harness Web UI — a mic button in the composer using the browser's native SpeechRecognition API. Zero dependencies, no subprocess, no tracking. |
| 135 | [MST19711/dsh-session-files](https://github.com/MST19711/dsh-session-files) | 0 | 2026-08-31 | 2026-09-01 | Upload arbitrary files into a DSH session workspace (uploads/<sessionId>/) and let the agent deliver result files as clickable download cards in the conversation. |
| 136 | [NattoCB/dsh-safe-delete](https://github.com/NattoCB/dsh-safe-delete) | 0 | 2026-09-01 | 2026-09-01 | DSH plugin: intercept agent rm in every bash session and move targets to the macOS Trash instead |
| 137 | [ningbonb/dsh-installer](https://github.com/ningbonb/dsh-installer) | 0 | 2026-08-31 | 2026-09-01 | One-click installers for DeepSeek Harness (dsh) on macOS and Windows |
| 138 | [NoelJudeNoel/dshost-plugin](https://github.com/NoelJudeNoel/dshost-plugin) | 0 | 2026-09-01 | 2026-09-01 | Official remote cloud relay plugin for DSHost (dshost.me): securely access your dsh Web UI from anywhere |
| 139 | [pbwheel/dsh-agency-market](https://github.com/pbwheel/dsh-agency-market) | 0 | 2026-09-01 | 2026-09-01 | 把 agency-agents 中的 273 个专业智能体装进 DeepSeek Harness，类似 workbuddy 中的专家 |
| 140 | [pn1024/dsh-skill-hub](https://github.com/pn1024/dsh-skill-hub) | 0 | 2026-09-01 | 2026-09-01 | dsh plugin - skill marketplace (SkillHub + ClawHub) with sidebar entry, overlay panel, and chat input quick-pick |
| 141 | [Q-xuan/dsh-authmux](https://github.com/Q-xuan/dsh-authmux) | 0 | 2026-09-01 | 2026-09-01 | One login plane for subscription-backed model providers in DeepSeek Harness |
| 142 | [qiqiangvae/dsh-obsidian](https://github.com/qiqiangvae/dsh-obsidian) | 0 | 2026-08-29 | 2026-09-01 | dsh obsidian wiki plugin |
| 143 | [que3sui/dsh-darwin](https://github.com/que3sui/dsh-darwin) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness (dsh) 双插件自进化架构：dsh-sentinel 机械挖掘会话日志生成问题工单 + dsh-forge 分级合成/评测门/确定性回滚 \| Two-plugin self-evolution for DSH: hindsight mining, gated synthesis, deterministic rollback (verified in simulation lab) |
| 144 | [qwerty-k-de/dsh-attach-picker](https://github.com/qwerty-k-de/dsh-attach-picker) | 0 | 2026-09-01 | 2026-09-01 | DSH Web composer toolbar picture button: pick images via the OS file dialog - no drag-and-drop needed. |
| 145 | [rangdl/dsh-all-enhance](https://github.com/rangdl/dsh-all-enhance) | 0 | 2026-08-28 | 2026-09-01 | DSH（DeepSeek Harness）功能增强插件 |
| 146 | [RaulLazaro/dsh-preview-plugin](https://github.com/RaulLazaro/dsh-preview-plugin) | 0 | 2026-08-31 | 2026-09-01 | Live preview tab for DeepSeek Harness — embed any dev server in an iframe with transparent SPA proxying |
| 147 | [Renjie-hub-byte/DSH-AutoKnit](https://github.com/Renjie-hub-byte/DSH-AutoKnit) | 0 | 2026-09-01 | 2026-09-01 | AutoKnit —— 省token的分治执行框架：PRD 进，稳定可维护的代码出。程序做调度（0 token），LLM 只出智力，告别"5元写代码，100元改功能"的Vibe Coding困境。AutoKnit — A token-efficient divide-and-conquer execution framework: PRD in, stable maintainable code out. Program handles orchestration (0 token), LLM provides intelligence. Say goodbye to the Vibe Coding trap — paying 5 to write code, 100 to change |
| 148 | [RexYoung000/rex-harness](https://github.com/RexYoung000/rex-harness) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin authoring workspace. First plugin: UI design workflow (@rex-harness/ui-workflow). |
| 149 | [sandersyao/dsh-session-persistence-mysql](https://github.com/sandersyao/dsh-session-persistence-mysql) | 0 | 2026-09-01 | 2026-09-01 | deepseek harness 插件 替换会话持久化引擎为 MySQL 数据库 |
| 150 | [shenhuanageshei/dsh-preset-zombie-guard](https://github.com/shenhuanageshei/dsh-preset-zombie-guard) | 0 | 2026-09-01 | 2026-09-01 | Preset-zombie guard plugin for DeepSeek Harness: auto-archive blank zombie sessions, warn on non-blank, pre-deletion dependency audit (preset_guard_check_remove). |
| 151 | [sidrandom/deepseek-memory-capsule](https://github.com/sidrandom/deepseek-memory-capsule) | 0 | 2026-09-01 | 2026-09-01 | A complete, human-centered memory layer for DeepSeek that stores user preferences, conversation notes, and personal variables across sessions — built as a DeepSeek Harness plugin. |
| 152 | [socai-io/dsh-socai](https://github.com/socai-io/dsh-socai) | 0 | 2026-09-01 | 2026-09-01 | DeepSeek Harness plugin for SocAI Xiaohongshu research tools |
| 153 | [statem-li/dsh-done-pill](https://github.com/statem-li/dsh-done-pill) | 0 | 2026-08-30 | 2026-09-01 | DSH 对话完成胶囊：顶部悬浮消息胶囊（原 webui done-pill 拆出）——任一会话回合完成提醒、点击跳会话、悬停查看记录全文、可拖拽定位、健康提醒与字体/缩放设置。零 DSH 源码改动，可与 dsh-webui 并存（webui 关闭 donePill 模块即可）。 |
| 154 | [statem-li/dsh-think-tools](https://github.com/statem-li/dsh-think-tools) | 0 | 2026-08-31 | 2026-09-01 | DSH 思考与工具调用聚合：回合级思考 chip（实时时长/实时文字滚动）+ 工具调用聚合 chip + 共享活动抽屉 + 对话流卡片（步骤卡/总结卡，回合结束后才出现）——自 dsh-webui 移植。零 DSH 源码改动。 |
| 155 | [statem-li/dsh-web-search-anysearch](https://github.com/statem-li/dsh-web-search-anysearch) | 0 | 2026-08-31 | 2026-09-01 | DSH 外接网页搜索（AnySearch）：注册 AnySearch 网页搜索 provider（替换内置 DeepSeek 搜索）+ 插件设置卡（API Key / Base URL / 默认结果数）。提炼自 statem-li/dsh-webui 的 webSearch 模块，零 DSH 源码改动。 |
| 156 | [Tazio7/dsh-web-search-glm](https://github.com/Tazio7/dsh-web-search-glm) | 0 | 2026-09-01 | 2026-09-01 | Web search plugin for DeepSeek Harness powered by ZAI GLM MCP — auto-injects API key from ~/.dsh/.credentials.yaml or environment variables |
| 157 | [tianjiqx/dsh-agentobs](https://github.com/tianjiqx/dsh-agentobs) | 0 | 2026-09-01 | 2026-09-01 | dsh 可观测解决方案 |
| 158 | [UnKnownFish125/dsh-literature](https://github.com/UnKnownFish125/dsh-literature) | 0 | 2026-09-01 | 2026-09-01 | DSH literature/knowledge plugin: 文献→证据→知识管理（独立 literatum server + Web UI + agent 工具） |
| 159 | [VanadisGithub/dsh-skill-evolution](https://github.com/VanadisGithub/dsh-skill-evolution) | 0 | 2026-09-01 | 2026-09-01 | Hermes-style skill self-evolution plugin for DeepSeek Harness (DSH): crystallizes reusable agent skills from successful turns via signal-triggered LLM review, progressively improves them, and manages everything in a Settings panel. |
| 160 | [Waldsatte/dsh-theme-taojian](https://github.com/Waldsatte/dsh-theme-taojian) | 0 | 2026-09-01 | 2026-09-01 | Taojian (陶笺) — Claude-inspired DSH theme |
| 161 | [wangsan71/dsh-locale-zh-tw](https://github.com/wangsan71/dsh-locale-zh-tw) | 0 | 2026-09-01 | 2026-09-01 | DSH Web 介面繁體中文（台灣）語言包：npm install 即可加入 zh-TW 語系，全介面自動簡轉繁，繁中瀏覽器自動切換 |
| 162 | [WangZetian-IVERSON/dsh-local-path-attachments](https://github.com/WangZetian-IVERSON/dsh-local-path-attachments) | 0 | 2026-09-01 | 2026-09-01 | Drag local files into deepseek Hermes as absolute-path attachment cards without copying them into the workspace |
| 163 | [weibaohui/dsh-settings-ui](https://github.com/weibaohui/dsh-settings-ui) | 0 | 2026-09-01 | 2026-09-01 | dsh 插件 · 设置界面自定义：调整原生设置窗口大小（全屏/预置/自定义）、背景不透明度与背景（亮暗各一色，实时跟随主题） |
| 164 | [weibaohui/experts-management](https://github.com/weibaohui/experts-management) | 0 | 2026-09-01 | 2026-09-01 | dsh 插件 · 专家市场：ntd 格式专家/专家团队管理与注入（＋专家按钮 / /expert-名称 手势），稀疏检出专家市场 |
| 165 | [wingillis/dsh-plugins](https://github.com/wingillis/dsh-plugins) | 0 | 2026-08-30 | 2026-09-01 | Personal deepseek harness plugins like vim keybindings and more |
| 166 | [wrw-dev/dsh-spring-widget](https://github.com/wrw-dev/dsh-spring-widget) | 0 | 2026-08-27 | 2026-09-01 | DSH 插件：Spring Boot 后端服务管理器（顶栏 IDEA 式启动/停止/日志控制台，源码直启 + Jar 打包启动） |
| 167 | [WuJiaoJue/dsh-herdr-site](https://github.com/WuJiaoJue/dsh-herdr-site) | 0 | 2026-09-01 | 2026-09-01 | Reports dsh/cc-tui agent state (working/idle/blocked) to Herdr over the custom-integration protocol. |
| 168 | [WuJiaoJue/dsh-suggest-ghost](https://github.com/WuJiaoJue/dsh-suggest-ghost) | 0 | 2026-09-01 | 2026-09-01 | DSH Web 输入预测插件：回合结束后 LLM 生成下一条建议，输入框空草稿时渲染幽灵文本，Tab 采纳。 |
| 169 | [wyhgoodjob/dsh-checkpoint](https://github.com/wyhgoodjob/dsh-checkpoint) | 0 | 2026-09-01 | 2026-09-01 | Git-snapshot checkpoint/rollback capability for DeepSeek Harness: revert files and conversation to a previous completed turn. |
| 170 | [wyhgoodjob/dsh-sisyphus](https://github.com/wyhgoodjob/dsh-sisyphus) | 0 | 2026-09-01 | 2026-09-01 | Sisyphus orchestration agent preset for DeepSeek Harness: intent gate, decompose-and-delegate to specialist subagents, parallel execution, evidence loop. |
| 171 | [xiaokaizhou/dsh-llm-multimodal](https://github.com/xiaokaizhou/dsh-llm-multimodal) | 0 | 2026-08-31 | 2026-09-01 | DSH 插件：在聊天中提供图像/视频生成工具，基于 OpenAI 兼容 API |
| 172 | [xiaxi626/dsh-math-input](https://github.com/xiaxi626/dsh-math-input) | 0 | 2026-08-31 | 2026-09-01 | dsh-math-input 是一个 DeepSeek Harness 插件，提供零 token 消耗的离线数学输入能力。核心功能包括：手写笔迹识别（基于 ONNX 模型 + 束搜索）、LaTeX 自动修复与渲染（KaTeX）、以及手写画板 UI。所有推理在浏览器端完成，不依赖远程 API。 |
| 173 | [XY1998-debug/dsh-zhinet](https://github.com/XY1998-debug/dsh-zhinet) | 0 | 2026-09-01 | 2026-09-01 | 许愿式编程的项目事实图、只读工作台、角色协作与跨 DSH 迁移 |
| 174 | [yahoolcj/dsh-plugin-zerone](https://github.com/yahoolcj/dsh-plugin-zerone) | 0 | 2026-09-01 | 2026-09-01 | dsh-plugin-zerone |
| 175 | [yin52133/dsh-luban](https://github.com/yin52133/dsh-luban) | 0 | 2026-08-29 | 2026-09-01 | 🛠️ Custom workbench plugin suite for DeepSeek Harness (DSH) — LAN auth, task board, SSH + tmux keep-alive, shared Windows/Ubuntu sessions, context HUD & serial/debug tooling. Built for embedded devs: Windows debug box + LAN Ubuntu build server. Monorepo of dsh-luban-* plugins. |
| 176 | [ytmaps/dsh-subagent-flowtext](https://github.com/ytmaps/dsh-subagent-flowtext) | 0 | 2026-09-01 | 2026-09-01 | 鱼先生模块化OB |
| 177 | [Zayzz-pixel/dsh-ariadne](https://github.com/Zayzz-pixel/dsh-ariadne) | 0 | 2026-09-01 | 2026-09-01 | A visual decision workbench for DeepSeek Harness: explore ideas, focus branches, and turn choices into executable graphs. |
| 178 | [zhangguiping-xydt/dsh-skin-studio](https://github.com/zhangguiping-xydt/dsh-skin-studio) | 0 | 2026-09-01 | 2026-09-01 | A visual, local-first skin authoring studio for DeepSeek Harness Web. |
| 179 | [zuohaisu/dsh-ai-soul](https://github.com/zuohaisu/dsh-ai-soul) | 0 | 2026-08-26 | 2026-09-01 | Persistent identity layer for DeepSeek Harness. The first reference implementation of AI Soul. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 0x5446/reins
- 1lyygit/dsh-launcher
- alaxrpg/dsh-adaptive-model-router
- ColdCGH/dsh-desktop-shell
- cslht11/dsh-custom-patches
- cslht11/dsh-provider-config
- cslht11/dsh-ssh-remote
- cyanfish-x/dsh-picture-fit
- dong3434/dsh-auto-maintenance
- doublemolu/dsh-balance-dock
- dsh-external/chat-width
- dsh-external/dsh-agent-teams
- dsh-external/dsh-at-file
- dsh-external/dsh-automation
- dsh-external/dsh-bash-encoding
- dsh-external/dsh-better-browser
- dsh-external/dsh-book2skill
- dsh-external/dsh-browser4
- dsh-external/dsh-computer-use
- dsh-external/dsh-custom-tool
- dsh-external/dsh-cyber-sec
- dsh-external/dsh-daily-fortune
- dsh-external/dsh-deepcel
- dsh-external/dsh-deeplink
- dsh-external/dsh-deeptag
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
- dsh-external/dsh-qq2006
- dsh-external/dsh-revive
- dsh-external/dsh-sentinel
- dsh-external/dsh-session-hub
- dsh-external/dsh-spotlight
- dsh-external/dsh-tps
- dsh-external/dsh-turn-rewind
- dsh-external/dsh-ui-progress
- dsh-external/dsh-ui-whale
- dsh-external/dsh-vision-toolkit
- dsh-external/dsh-visualize
- dsh-external/dsh-web-workbench
- dsh-external/dsh-webui-live-html
- dsh-external/oh-my-dsh
- henryZhouLikeStudy/deepseek-harness-lattice
- henryZhouLikeStudy/dsh-lattice-adapter-command
- henryZhouLikeStudy/dsh-lattice-adapter-dsh
- henryZhouLikeStudy/dsh-lattice-protocol
- henryZhouLikeStudy/dsh-lattice-runtime
- henryZhouLikeStudy/dsh-lattice-transports
- Kaiji-Z/dsh-plugin-warroom
- Olympianz/dsh-desktop-packager
- plaask/fdtd-mcp
- Tasihi89/dsh-plugin-market
- wanglaixiang-cyber/dsh-composer-scroll-hide
- xmutfyh/dsh-plugin-writing-guard
- yangzhe1991/dsh-project-session-store
