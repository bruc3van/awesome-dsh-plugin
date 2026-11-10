# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-10**
- 快照日期 / Snapshot date: **2026-11-10 (UTC)**
- 待审核 / Pending: **481**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **55**
- Star 异常增长 / Star-growth alerts: **17** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-09** / vs previous snapshot **2026-11-09**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **17**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [william-jin-cmu/cetus](https://github.com/william-jin-cmu/cetus) | 待审 / pending | 150 | +0 | 11 | 135d | 待审高星 | 核准即榜 #174 |
| ⚠️ [keli-wen/agy-staff](https://github.com/keli-wen/agy-staff) | 待审 / pending | 845 | — | 56 | 83d | 待审高星 | 核准即榜 #34 |
| ⚠️ [AIpRoBuilder/FlowX](https://github.com/AIpRoBuilder/FlowX) | 待审 / pending | 202 | — | 12 | 96d | 待审高星 | 核准即榜 #137 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 68659 | +1320 | 1848 | 46d | 日增百星 | 日增 +1320★；已不进榜单 |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 6221 | +493 | 525 | 95d | 日增百星 | 日增 +493★；已不进榜单 |
| ⚠️ [woniuniuniu/dsh-media-desk](https://github.com/woniuniuniu/dsh-media-desk) | 已核准 / approved | 937 | +347 | 87 | 7d | 日增百星 | 日增 +347★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 17900 | +246 | 623 | 88d | 日增百星 | 日增 +246★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 6832 | +213 | 636 | 33d | 日增百星 | 日增 +213★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 6364 | +174 | 108 | 85d | 日增百星 | 日增 +174★ |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 530 | +159 | 2 | 29d | 日增百星 | 日增 +159★；★/fork 265 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 11834 | +156 | 447 | 87d | 日增百星 | 日增 +156★；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 74532 | +123 | 2679 | 412d | 日增百星 | 日增 +123★；已不进榜单 |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4890 | +113 | 203 | 87d | 日增百星 | 日增 +113★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 2532 | +103 | 192 | 87d | 日增百星 | 日增 +103★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 7423 | +102 | 354 | 88d | 日增百星 | 日增 +102★ |
| ⚠️ [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 已核准 / approved | 458 | +101 | 50 | 7d | 日增百星 | 日增 +101★ |
| ⚠️ [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | 已核准 / approved | 1260 | +60 | 89 | 84d | 冲入 Top 20 | 冲入 Top 20（21→19） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [keli-wen/agy-staff](https://github.com/keli-wen/agy-staff) ⚠️ | 845 | 2026-08-18 | 2026-11-10 | Hire Google's Antigravity CLI (agy) as a fast Gemini staffer for Claude Code, OpenAI Codex, and DeepSeek Harness. |
| 2 | [AIpRoBuilder/FlowX](https://github.com/AIpRoBuilder/FlowX) ⚠️ | 202 | 2026-08-05 | 2026-11-10 | MCP server and Python SDK that generates, runs and refines AI agent workflows from natural language (Generative Workflow, A2A, FastAPI). |
| 3 | [william-jin-cmu/cetus](https://github.com/william-jin-cmu/cetus) ⚠️ | 150 | 2026-06-27 | 2026-11-10 | One macOS app for Claude Code, Codex, and every agent runtime you use — scheduled runs, global hotkey launcher, per-run git worktrees, one review board. |
| 4 | [oceanjustinlin/qimen](https://github.com/oceanjustinlin/qimen) | 27 | 2026-02-26 | 2026-11-10 | 基于AI的奇门遁甲在线起局，局势分析，定论分析和可视化 |
| 5 | [Ethereal-Space-one/code2kb-agent-toolkit](https://github.com/Ethereal-Space-one/code2kb-agent-toolkit) | 23 | 2026-10-16 | 2026-11-10 | 面向 AI 编码助手的源码知识生产工具包：提取业务规则，生成可追溯的机器人问答知识 \| An agent toolkit for evidence-backed knowledge from source code. |
| 6 | [MatriQ/rea-gp](https://github.com/MatriQ/rea-gp) | 13 | 2026-11-05 | 2026-11-10 | Portable Agent Skill for Android game Google Play dependencies, resources, Firebase, and ads. |
| 7 | [dsh-labs/kivotos](https://github.com/dsh-labs/kivotos) | 10 | 2026-10-08 | 2026-11-10 | Open and drive every dsh on your tailnet from any dsh, with a complete phone layout. |
| 8 | [Chenamel/deterministic-pixel-art](https://github.com/Chenamel/deterministic-pixel-art) | 7 | 2026-10-20 | 2026-11-10 | Editable pixel-art PNGs for AI agents and game developers: sprites, UI, named atlases, precise edits and verified pixel changes. |
| 9 | [Kr-ATG/dsh-seeker-os](https://github.com/Kr-ATG/dsh-seeker-os) | 5 | 2026-10-31 | 2026-11-10 | DeepSeek Harness 的对话增强套件：Seeker 双栏执行大盘、可交互卡片、Bot 团队/群聊/语音、记忆·档案·技能七个工作台。零源码改动，插件注入即用。 |
| 10 | [liangdabiao/dsh-resume-matcher](https://github.com/liangdabiao/dsh-resume-matcher) | 5 | 2026-11-10 | 2026-11-10 | dsh-resume-matcher · 简历诊所  DeepSeek Harness（dsh）插件：HR 视角的中文简历深度优化工作台。上传简历（PDF/DOCX）+ 目标岗位 JD，会话模型按「五步审计」方法论产出完整报告，报告与优化后简历自动归档；**优化简历一键进入 a4cv 可视化编辑器微调排版、导出 PDF**，侧栏「简历诊所」面板随时回看。 |
| 11 | [meat-daemon-404/agent-immune](https://github.com/meat-daemon-404/agent-immune) | 5 | 2026-11-04 | 2026-11-10 | Self-evolving pitfall immunity for coding agents (Claude Code, Codex, Cursor, ZCode, DSH): failed-then-fixed tool calls become SQLite+FTS5 antibodies, injected before the mistake repeats. Zero runtime dependencies. |
| 12 | [HandlerOne01/dsh-purge](https://github.com/HandlerOne01/dsh-purge) | 3 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 红队评测插件 dsh-purge 的接续仓库：以官方 1.1.90 发布包为基线重建，自 1.1.91 起继续发布。原仓库 HunYiSage/dsh-purge 已下线。 |
| 13 | [Kiru-Sama/dsh-progress-reminder](https://github.com/Kiru-Sama/dsh-progress-reminder) | 3 | 2026-10-18 | 2026-11-10 | DeepSeek Harness 进度汇报提醒插件：累计每 N 步或每 N 秒提醒 Agent 汇报一次进度，侧栏实时显示计数，聊天区横幅显示上次提醒时刻。附带余额低额提醒与 DeepSeek 峰谷时段指示。 |
| 14 | [WaterDJiang/wtt-dsh-plugin](https://github.com/WaterDJiang/wtt-dsh-plugin) | 3 | 2026-11-07 | 2026-11-10 | DeepSeek Harness 的开源 AI 创作画布。整理项目资料、引用卡片与文件、调用本机 Skill，并管理创作成果和版本。 |
| 15 | [bychance6600/dsh-perch](https://github.com/bychance6600/dsh-perch) | 2 | 2026-11-06 | 2026-11-10 | 一个只能长大、不能被设定的人格：DSH 会话 + QQ，事件流驱动。零依赖，数据只在本地。 |
| 16 | [Cyberbolt/dsh-snapcompact](https://github.com/Cyberbolt/dsh-snapcompact) | 2 | 2026-11-06 | 2026-11-10 | A DeepSeek Harness plugin that compacts long chats by rendering discarded history into bitmap frames a vision model reads directly — local, deterministic, no summarizer call — while keeping exact head/tail text and a searchable archive. \| 一个 DeepSeek Harness 插件：把长对话中被丢弃的历史渲染成视觉模型可直接阅读的位图帧来压缩上下文，本地、确定性、图片路径不调用摘要模型；同时保留精确头尾文本与可检索归档。 |
| 17 | [dengluliang/dsh-meetclip](https://github.com/dengluliang/dsh-meetclip) | 2 | 2026-11-10 | 2026-11-10 | 会摘 MeetClip — DeepSeek Harness 的直播/视频/会议采集、云端转写与 AI 纪要插件 |
| 18 | [dsh-labs/dsh-agent-team-scheduler](https://github.com/dsh-labs/dsh-agent-team-scheduler) | 2 | 2026-10-31 | 2026-11-10 | Dispatch queue and fork-from-teammate for DeepSeek Harness Agent Teams |
| 19 | [ECCVIK/LMTAgent](https://github.com/ECCVIK/LMTAgent) | 2 | 2026-11-10 | 2026-11-10 | ⚡ WorkBuddy × DSH Brand Blue 8-Role Software Engineering &amp; Security Multi-Agent Cluster (gstack + 4-Wave Bounded DAG + 6 Slots + PostgreSQL Engine) for DeepSeek Harness (DSH Desktop) |
| 20 | [fiu-ai/mcp-server](https://github.com/fiu-ai/mcp-server) | 2 | 2025-07-28 | 2026-11-10 | A Model Context Protocol (MCP) server implementation for FIU AI services. |
| 21 | [orangeofcarl0-sys/dsh-win-computer-use](https://github.com/orangeofcarl0-sys/dsh-win-computer-use) | 2 | 2026-09-05 | 2026-11-10 | Windows-first Computer Use for DeepSeek Harness：深度 Win32/WinUI/UIA 工程 + 零审批投递升级；默认 2 个稳定工具，20 个桌面工具经 dispatcher 路由。 |
| 22 | [thus-zhou/dsh-chapter-whale](https://github.com/thus-zhou/dsh-chapter-whale) | 2 | 2026-11-10 | 2026-11-10 | 码章鲸：全自动小说写作与番茄发布。自定义日更任务，按计划无人值守写作、审查修订和发布；接入部分免费模型，支持部分厂商账号登录。Windows x64，内置运行环境。 |
| 23 | [tkaiz0406/dsh-delegation-hub](https://github.com/tkaiz0406/dsh-delegation-hub) | 2 | 2026-10-18 | 2026-11-10 | DSH plugin: pin a separate LLM route for delegated subagents (Agency experts, Agent Teams members) while the main agent keeps its own model. Settings page included. |
| 24 | [ZhongYiSS/dsh-onebot-paopao](https://github.com/ZhongYiSS/dsh-onebot-paopao) | 2 | 2026-11-10 | 2026-11-10 | PaoPao: a companion layer for DSH - proactive QQ messages by weighted mood, B? video picking, voice/image/video understanding. Based on dsh-onebot. |
| 25 | [ZOTTALL/dsh-xiaoyu-qqbot](https://github.com/ZOTTALL/dsh-xiaoyu-qqbot) | 2 | 2026-10-25 | 2026-11-10 | DSH plugin: QQ bot control console (NapCat + AstrBot + GPT-SoVITS) with one-click deploy, persona/memory editor, voice, stickers, rate limits |
| 26 | [0131kikimy/dsh-council](https://github.com/0131kikimy/dsh-council) | 1 | 2026-11-10 | 2026-11-10 | 循环决议 · Council — DeepSeek Harness 三智能体（Leader/执行者/检验者）循环执行插件 |
| 27 | [2189166478-bot/dsh-zh-cn](https://github.com/2189166478-bot/dsh-zh-cn) | 1 | 2026-11-10 | 2026-11-10 | DSH（DeepSeek Harness）插件界面汉化：离线中文词典 + DOM 翻译层，一键把已安装插件的英文界面换成中文 |
| 28 | [AfeyGu/dsh-compaction-tower](https://github.com/AfeyGu/dsh-compaction-tower) | 1 | 2026-11-06 | 2026-11-10 | Layered background compaction for DeepSeek Harness: distill early history into blocks ahead of time, commit whole blocks with zero LLM calls |
| 29 | [Albusriddle/lucubratio-public](https://github.com/Albusriddle/lucubratio-public) | 1 | 2026-11-07 | 2026-11-10 | Lucubratio 流水线 + 查看器：把任意课程内容编译成可离线学习的内容包。不含任何课程素材。 |
| 30 | [aooom4/dsh-qq-dice](https://github.com/aooom4/dsh-qq-dice) | 1 | 2026-11-09 | 2026-11-10 | DSH 设置面板插件：让大肥鱼的定时消息也能像抽卡一样，让大肥鱼体验抽卡的乐趣 |
| 31 | [atlasmarkz/dsh-quota-meter](https://github.com/atlasmarkz/dsh-quota-meter) | 1 | 2026-11-10 | 2026-11-10 | Plan usage, account balance and running cost in the DeepSeek Harness composer dock: DeepSeek wallet, OpenCode Go subscription windows, and a per-session cost estimate. Provider-extensible, plain JavaScript, no build step. |
| 32 | [beijingrong/dsh-dated-session-titles](https://github.com/beijingrong/dsh-dated-session-titles) | 1 | 2026-11-04 | 2026-11-10 | DSH bundle: session titles shaped YYYY-MM-DD 分类：简短描述, with categories chosen from the conversation and an on-demand set_session_title tool. |
| 33 | [Betsy20/dsh-magpie](https://github.com/Betsy20/dsh-magpie) | 1 | 2026-11-06 | 2026-11-10 | 把 magpie 原版 Web UI 嵌进 DeepSeek Harness 侧边栏：缺 magpie 时自动下载，后台启动 magpie serve --web，经服务端注入 Cookie 的反向代理提供页面；不注册 provider（模型由 magpie 自身写入 cordis.patch.yml） |
| 34 | [Calliope-Nicles/technical-terms-en-zh-plugin](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin) | 1 | 2026-11-06 | 2026-11-10 | 在 Codex 的中文软件开发解释中标注英文术语及中文释义。 |
| 35 | [damijun/dsh-browser-automation](https://github.com/damijun/dsh-browser-automation) | 1 | 2026-11-08 | 2026-11-10 | 基于playwright-cli的dsh桌面端侧边栏浏览器自动化操作插件 |
| 36 | [doncc/dsh-beacon](https://github.com/doncc/dsh-beacon) | 1 | 2026-11-10 | 2026-11-10 | A three-color status beacon in the Linux system tray for DeepSeek Harness sessions: green = idle, yellow = waiting for you, grey = running. |
| 37 | [dsh-labs/dsh-agent-scheduler](https://github.com/dsh-labs/dsh-agent-scheduler) | 1 | 2026-11-02 | 2026-11-10 | Agent Scheduler for DeepSeek Harness: a lead agent that forks per input, long-lived worker agents, and a right-sidebar roster |
| 38 | [dsh-labs/dsh-omp-retry](https://github.com/dsh-labs/dsh-omp-retry) | 1 | 2026-10-22 | 2026-11-10 | OMP-style HTTP 429 retry policy for the DeepSeek Harness |
| 39 | [ElioFanyu/dsh-prompt-vault](https://github.com/ElioFanyu/dsh-prompt-vault) | 1 | 2026-11-10 | 2026-11-10 | 提示词库 · Prompt vault for DSH: save reusable prompts as plain Markdown notes (Obsidian-compatible) and insert them from the composer; edit, search-save, soft delete, plus a prompt_vault tool for the model. |
| 40 | [ext3ndedsoft/spar-to-dsh](https://github.com/ext3ndedsoft/spar-to-dsh) | 1 | 2026-11-10 | 2026-11-10 | Плагин для DeepSeek Harness: агент спорит со второй моделью, которая читает тот же проект, а слепой судья выносит приговор с проверкой артефактов |
| 41 | [Fadegentle/dsh-session-booth](https://github.com/Fadegentle/dsh-session-booth) | 1 | 2026-11-10 | 2026-11-10 | Session Booth: a persistent multi-session split view in the DSH main window. 在 DSH 主窗口提供持久化的多会话分屏视图。 |
| 42 | [Fishexploi/dsh-mesh](https://github.com/Fishexploi/dsh-mesh) | 1 | 2026-11-10 | 2026-11-10 | 让局域网里的多台 DSH 互联：上级派任务、子级执行、结果回传、审批转发。 |
| 43 | [game25011/dsh-notify-lite](https://github.com/game25011/dsh-notify-lite) | 1 | 2026-10-28 | 2026-11-10 | Lightweight DSH notifications: sound + native Windows toasts + taskbar unread badges, covering ~90% of daily scenarios by experience; customizable, MIT, maintained for DSH compatibility. |
| 44 | [gjhhjfgh/mirror-dsh-adapter](https://github.com/gjhhjfgh/mirror-dsh-adapter) | 1 | 2026-11-10 | 2026-11-10 | Mirror · AI 的记忆治理层 —— DSH 插件（本地记忆内核 + 治理面板）. Local-first memory governance for AI agents: capture → distill → govern → pack. |
| 45 | [Hochan666/dsh-tiedan-update](https://github.com/Hochan666/dsh-tiedan-update) | 1 | 2026-11-09 | 2026-11-10 | 在 DSH 通用设置里检测并安装新版本、一键重启服务，带防双进程保护与存活诊断。个人可用，禁止商用。 |
| 46 | [Hochan666/hermes-skills-sync](https://github.com/Hochan666/hermes-skills-sync) | 1 | 2026-11-09 | 2026-11-10 | 把本机 Hermes Agent 已安装的技能导入 DeepSeek Harness：多源发现、Profile 分组、批量导入、冲突处理、保持原名。个人可用，禁止商用。 |
| 47 | [jaguuuuuu/feishu-workspace-bridge](https://github.com/jaguuuuuu/feishu-workspace-bridge) | 1 | 2026-09-17 | 2026-11-10 | Real-time two-way bridge between DSH workspaces and private Feishu groups, with Markdown and durable delivery. |
| 48 | [jinghuaihuaxiang-star/dsh-superagent-desktop](https://github.com/jinghuaihuaxiang-star/dsh-superagent-desktop) | 1 | 2026-11-09 | 2026-11-10 | Desktop bundle of the dsh-superagent research prototype for DeepSeek Harness |
| 49 | [JJJACKsong/dsh-plugin-context-cleanup-master](https://github.com/JJJACKsong/dsh-plugin-context-cleanup-master) | 1 | 2026-11-10 | 2026-11-10 | 上下文清理大师：DSH 整蛊插件——一键清理悬浮球，扫描近期会话真实 token 消耗后开一个全新会话。A prank one-click context cleaner for DeepSeek Harness. |
| 50 | [jjjjjjjjnnjnn/ai-terminal-pet](https://github.com/jjjjjjjjnnjnn/ai-terminal-pet) | 1 | 2026-09-24 | 2026-11-10 | A tiny always-on-top floating companion overlay for AI coding terminals on Windows. |
| 51 | [kazari-qwp/dsh-temporary-messages](https://github.com/kazari-qwp/dsh-temporary-messages) | 1 | 2026-11-08 | 2026-11-10 | DSH 临时消息插件：可执行模板、token/步数生命周期、可扩展上下文压缩器。 |
| 52 | [Kcx520/dsh-plugins](https://github.com/Kcx520/dsh-plugins) | 1 | 2026-10-27 | 2026-11-10 | A set of local plugins for DeepSeek Harness: ask-always, pause-resume, peak-guard, comfyui, project-manager, pet-bridge. |
| 53 | [kentzjh-cmd/tmem](https://github.com/kentzjh-cmd/tmem) | 1 | 2026-11-10 | 2026-11-10 | trace based agent memory system |
| 54 | [kulebbb/dsh-git-tree](https://github.com/kulebbb/dsh-git-tree) | 1 | 2026-08-16 | 2026-11-10 | DeepSeek Harness 桌面端右侧栏 Git 提交图插件 |
| 55 | [KungerChen/dsh-next-message-predictor](https://github.com/KungerChen/dsh-next-message-predictor) | 1 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 输入框的“下一条消息预测”插件：Tab 采纳、Esc 隐藏，不自动发送 |
| 56 | [KunKun24/dsh-until-done](https://github.com/KunKun24/dsh-until-done) | 1 | 2026-11-10 | 2026-11-10 | DSH 插件：模型正常结束但任务没做完时自动续跑，回复以「完成」收尾才算真完成。 |
| 57 | [lilinshuei/blank-workbench](https://github.com/lilinshuei/blank-workbench) | 1 | 2026-11-10 | 2026-11-10 | 一句话生成能直接用的单文件工作台｜20+ 组件、明暗主题、响应式，零依赖双击即开。 |
| 58 | [lilinshuei/codeforge-team](https://github.com/lilinshuei/codeforge-team) | 1 | 2026-11-10 | 2026-11-10 | 40 人 Agent 软件交付团队 · 你觉得自己玩 Agent 就可以不要考虑 PC 性能消耗的话，就来试试这个 Agent 团吧！记得叫他们火力全开！ \| A 40-agent software delivery team for DeepSeek Harness — tell them to go full throttle. |
| 59 | [lilinshuei/novel-atlas](https://github.com/lilinshuei/novel-atlas) | 1 | 2026-11-10 | 2026-11-10 | 把一本小说变成能读、能点、能探索的离线世界｜阅读器、世界地图、人物关系、成长曲线，一条命令出成品。 |
| 60 | [lilinshuei/pc-privacy-shield](https://github.com/lilinshuei/pc-privacy-shield) | 1 | 2026-11-10 | 2026-11-10 | 截屏、录屏、远控时让敏感窗口自动变黑，本机照常使用｜Windows 一键隐私防护，零遮挡、零删除。 |
| 61 | [lilinshuei/phone-media-transfer-android-app](https://github.com/lilinshuei/phone-media-transfer-android-app) | 1 | 2026-11-10 | 2026-11-10 | 把视频图片送进那些找不到文件夹的安卓 App，也能原样掏出来｜ADB + 界面自动化。 |
| 62 | [lilinshuei/source-to-app](https://github.com/lilinshuei/source-to-app) | 1 | 2026-11-10 | 2026-11-10 | 把源码变成别人能双击打开的程序｜自动处理镜像、长路径、缓存与产物校验。 |
| 63 | [lilinshuei/task-complete-chime](https://github.com/lilinshuei/task-complete-chime) | 1 | 2026-11-10 | 2026-11-10 | Agent 干完活自动响一声｜12 秒原创提示音，Windows 零依赖，可换自己的音频。 |
| 64 | [loveandbeepbrother/dsh-galatea](https://github.com/loveandbeepbrother/dsh-galatea) | 1 | 2026-11-07 | 2026-11-10 | Galatea: memory and persona framework for DeepSeek Harness (DSH) / DeepSeek Harness 的记忆与人格框架 |
| 65 | [mkt-agents/dsh-session-cleanup](https://github.com/mkt-agents/dsh-session-cleanup) | 1 | 2026-11-10 | 2026-11-10 | DSH 会话清理 · DeepSeek Harness 侧边栏插件：按体积排序会话、归档、删除进可撤销回收站（整批或单条还原）、清理孤立投影缓存与失效归档项。\| Sidebar session cleanup panel for DSH: size-sorted sessions, archive, undoable recycle bin, orphan projection-cache cleanup. |
| 66 | [MR-MaoJiu/dsh-account-balance](https://github.com/MR-MaoJiu/dsh-account-balance) | 1 | 2026-11-10 | 2026-11-10 | 在 DeepSeek Harness 状态栏实时显示 DeepSeek 账户余额的插件（点击展开详情） |
| 67 | [MR-MaoJiu/dsh-image-generator](https://github.com/MR-MaoJiu/dsh-image-generator) | 1 | 2026-11-10 | 2026-11-10 | 在 DSH 对话中直接生成图片：generate_image 工具 + image-generation 技能 + Codex 风格进度动效 |
| 68 | [Old-Friends-Gathering/sedimem](https://github.com/Old-Friends-Gathering/sedimem) | 1 | 2026-11-02 | 2026-11-10 | sedimem · 本地跨会话「自我迭代」记忆层：DSH / Codex CLI / Claude Code 共用一份只追加的真相层，重点治冗余·重复·冲突·过时（MCP + 四道写入卫生 + Agent 裁决闭环） |
| 69 | [operatingtag/dsh-vpn](https://github.com/operatingtag/dsh-vpn) | 1 | 2026-11-10 | 2026-11-10 | A Windows 11 style VPN control panel for DeepSeek Harness: Proton browser sign-in, geolocation-ranked WireGuard servers, automatic configuration, leak-proof kill switch, one-click restore. Apache-2.0. |
| 70 | [passenfall/dsh-deliver-studio](https://github.com/passenfall/dsh-deliver-studio) | 1 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 插件：HTML 交付物的视口预览、批注（可导出带批注的 HTML）、分类 QA 与 PDF 导出 |
| 71 | [Prirex/dsh-PriRex-Monitoring-DeepSeek-Harness](https://github.com/Prirex/dsh-PriRex-Monitoring-DeepSeek-Harness) | 1 | 2026-11-08 | 2026-11-10 | Live hardware and token telemetry for DeepSeek Harness: GPU and CPU load, VRAM, temperature, power, energy, generation speed and context fill of the current session. |
| 72 | [Prirex/dsh-PriRex-Preview](https://github.com/Prirex/dsh-PriRex-Preview) | 1 | 2026-11-06 | 2026-11-10 | Live preview tab for DeepSeek Harness: local server + WebSocket live reload, device frames, console error feed, point-and-ask DOM inspector. |
| 73 | [qianniu2009/dsh-suishi](https://github.com/qianniu2009/dsh-suishi) | 1 | 2026-11-09 | 2026-11-10 | 岁时 · 中国年 · 全年节日倒计时 — DSH Web 插件（农历/二十四节气/自定义纪念日；香港天文台 1901–2100 离线数据） |
| 74 | [RainSnowYY/dsh-second-review](https://github.com/RainSnowYY/dsh-second-review) | 1 | 2026-11-10 | 2026-11-10 | 一个为 DeepSeek Harness (DSH) 提供独立副模型二次评审的插件，做到两个模型接入一个对话，在主模型回答后自动检查潜在风险与代价，必要时可选择副模型接管任务。 |
| 75 | [ranxiao0218-afk/code-tutor-dsh](https://github.com/ranxiao0218-afk/code-tutor-dsh) | 1 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: a code-explanation skill that answers in three concise parts - what the code does, the syntax it uses, then a line-by-line walkthrough. |
| 76 | [retweve/dsh-plugin-pinky](https://github.com/retweve/dsh-plugin-pinky) | 1 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: connect Pinky's phone-control MCP server so the agent can operate a real Android phone or iPhone with you approving risky steps. |
| 77 | [rirtue/dsh-breeze-speak](https://github.com/rirtue/dsh-breeze-speak) | 1 | 2026-11-09 | 2026-11-10 | Reads each DSH reply aloud with BreezeBlue / Breeze TTS 2 — streams raw PCM so the first sentence starts ~0.6s after it appears. / 用 Breeze TTS 念出每轮回复的开头第一句，PCM 流式播放，首声约 0.6 秒。 |
| 78 | [shixiaoyu-funny/raven-dsh-plugin](https://github.com/shixiaoyu-funny/raven-dsh-plugin) | 1 | 2026-11-10 | 2026-11-10 | raven桌宠，可运行在DSH上的插件 |
| 79 | [shixiaoyu-funny/suki-dsh-plugin](https://github.com/shixiaoyu-funny/suki-dsh-plugin) | 1 | 2026-11-10 | 2026-11-10 | Suki桌宠，可运行在DSH上的插件 |
| 80 | [Silasvanceneo/dsh-dynamic-multiagent](https://github.com/Silasvanceneo/dsh-dynamic-multiagent) | 1 | 2026-11-10 | 2026-11-10 | Dynamic multi-agent orchestration for DeepSeek Harness (dsh): task graphs of child agents with per-node role, model, reasoning effort, and tools, plus a settings UI and per-conversation switch. |
| 81 | [sss-1012/dsh-sidebar-sessions](https://github.com/sss-1012/dsh-sidebar-sessions) | 1 | 2026-11-06 | 2026-11-10 | Recent-first session sidebar for DeepSeek Harness: groups, workspace tree, archive, status dots, drag reorder. |
| 82 | [steel-dsh-memory/dsh-thirdparty-memory](https://github.com/steel-dsh-memory/dsh-thirdparty-memory) | 1 | 2026-11-10 | 2026-11-10 | Long-term memory for DeepSeek Harness: five memory kinds, relevance-filtered injection, review inbox, local SQLite store, zero runtime dependencies. Unofficial third-party project. |
| 83 | [TLEWA/dsh-fastload](https://github.com/TLEWA/dsh-fastload) | 1 | 2026-11-08 | 2026-11-10 | DSH plugin: smaller first history pages for long sessions, with background fill |
| 84 | [tokener-ai/dsh-tokener-provider](https://github.com/tokener-ai/dsh-tokener-provider) | 1 | 2026-11-10 | 2026-11-10 | Use Tokener models in DeepSeek Harness (dsh): install the plugin, connect your API key, and pick a model. |
| 85 | [tomorrozy/dsh-generic-interview-teacher](https://github.com/tomorrozy/dsh-generic-interview-teacher) | 1 | 2026-11-10 | 2026-11-10 | 通用面试老师（DSH 插件）：profile 驱动的面试引擎 + 定制向导，用户可个性化创建并切换多个属于自己的面试老师 |
| 86 | [VMWHW/dsh-exv-theme](https://github.com/VMWHW/dsh-exv-theme) | 1 | 2026-11-07 | 2026-11-10 | 为DSH x64设计的win10科幻风HUD主题包,包含差分背景,代码雨,自定义内部组件接口,内置live2D,和大量高度可自定义化的功能 |
| 87 | [wjloven/dsh-miniflux-digest](https://github.com/wjloven/dsh-miniflux-digest) | 1 | 2026-11-10 | 2026-11-10 | A desktop reader and AI digest plugin for Miniflux inside DeepSeek Harness. |
| 88 | [wobuxcm/dsh-win-tools](https://github.com/wobuxcm/dsh-win-tools) | 1 | 2026-11-10 | 2026-11-10 | Windows desktop-control plugin for DeepSeek Harness: accessibility refs, SendInput pixel actions, GDI screenshots, browser DOM, clipboard, notifications, in-process waits and an operator pause switch. |
| 89 | [wwwwww1239/dsh-shione](https://github.com/wwwwww1239/dsh-shione) | 1 | 2026-11-10 | 2026-11-10 | Shione / 汐音 - verbatim-first memory plugin for DeepSeek Harness. Personal project, still rough, still improving. Created and maintained by AI. |
| 90 | [XDeemoH/PULSE](https://github.com/XDeemoH/PULSE) | 1 | 2026-11-09 | 2026-11-10 | A running panel for DeepSeek Harness (DSH): live skill &amp; tool calls, skill-catalog budget, skill loadouts with dry-run/undo, goals &amp; ideas, and ECHO saved excerpts. |
| 91 | [xuanke66/dsh-thinking-slider](https://github.com/xuanke66/dsh-thinking-slider) | 1 | 2026-10-03 | 2026-11-10 | 把 DeepSeek 的推理档位 off/low/high/max 做成一根滑杆的 DSH 插件（滑动变祖器） |
| 92 | [yhaix/dsh-chat-search](https://github.com/yhaix/dsh-chat-search) | 1 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 的对话检索插件：实现全局和会话的段落与文件级搜索，结果按会话→问题→段落三层展开，高亮显示关键字，点击结果跳转到会话中的相关位置。 |
| 93 | [zhang66633/dsh-sprite-studio](https://github.com/zhang66633/dsh-sprite-studio) | 1 | 2026-11-10 | 2026-11-10 | Canvas workspace for sprite sheets in DeepSeek Harness: slice, matte, compose LPC characters, generate seamless backgrounds and effects, export atlases. |
| 94 | [zhangwenlei1404/dsh-theme-desert-dusk](https://github.com/zhangwenlei1404/dsh-theme-desert-dusk) | 1 | 2026-11-10 | 2026-11-10 | 大漠孤烟直，长河落日圆 —— a desert-dusk theme for the Harness Web GUI |
| 95 | [ZhanRuiXin/dsh-research-team-preset](https://github.com/ZhanRuiXin/dsh-research-team-preset) | 1 | 2026-11-09 | 2026-11-10 | A DSH agent preset that turns one session into a small, coordinated research team. |
| 96 | [zhaoqiminggg/dsh-approval-explainer](https://github.com/zhaoqiminggg/dsh-approval-explainer) | 1 | 2026-11-10 | 2026-11-10 | A DeepSeek Harness plugin that explains permission approval cards in plain language: what the action does, what it touches, the privacy risk, and whether to allow it. |
| 97 | [zsw1363574747/hk-jobmatch-ai](https://github.com/zsw1363574747/hk-jobmatch-ai) | 1 | 2026-11-10 | 2026-11-10 | 香港求职匹配台 · Local-first Hong Kong job-match workbench: scrape JobsDB, score every posting against your CV, and explain the salary and skills the market actually asks for. Zero-dependency Node app, runs on 127.0.0.1 only. |
| 98 | [00wz/dsh-subagent-forge](https://github.com/00wz/dsh-subagent-forge) | 0 | 2026-11-07 | 2026-11-10 | Configurable subagents for DeepSeek Harness: per-child system prompt, model allowlist, reasoning effort and an explicit delegation grant. |
| 99 | [00wz/dsh-subagent-gate](https://github.com/00wz/dsh-subagent-gate) | 0 | 2026-11-10 | 2026-11-10 | Ask a human before a delegated subagent widens its sandbox — a DSH plugin that re-arms child approval to \`ask\` and routes the request to you. |
| 100 | [112113-fookky/dsh-tool-pocket](https://github.com/112113-fookky/dsh-tool-pocket) | 0 | 2026-11-10 | 2026-11-10 | Keeps a token-heavy tool group installed but out of the model's tool schema until a turn needs it. One call unlocks 35 browser tools for a turn, then they lock again. |
| 101 | [18518182595-cell/dsh-arknights-splash](https://github.com/18518182595-cell/dsh-arknights-splash) | 0 | 2026-11-10 | 2026-11-10 | Arknights-style procedural DeepSeek opening film and a silent looping chat backdrop for the DeepSeek Harness Web UI. Canvas 2D + WebAudio, zero dependencies, no media files. |
| 102 | [1997liuyh-boop/dsh-capture](https://github.com/1997liuyh-boop/dsh-capture) | 0 | 2026-11-10 | 2026-11-10 | DSH 桌面截图录屏：支持区域截图、标注、暂停、继续和停止。 |
| 103 | [1997liuyh-boop/dsh-desktop-tools](https://github.com/1997liuyh-boop/dsh-desktop-tools) | 0 | 2026-11-10 | 2026-11-10 | 独立桌面插件运行时：为官方 DSH 提供悬浮球、划词工具栏、截图录屏的 Electron 原生辅助进程。 |
| 104 | [1997liuyh-boop/dsh-floating-ball](https://github.com/1997liuyh-boop/dsh-floating-ball) | 0 | 2026-11-10 | 2026-11-10 | DSH 桌面悬浮助手：支持 Markdown 回复、会话、模型和权限控制。 |
| 105 | [1997liuyh-boop/dsh-selection-toolbar](https://github.com/1997liuyh-boop/dsh-selection-toolbar) | 0 | 2026-11-10 | 2026-11-10 | DSH 桌面划词工具栏：提供翻译、解读、笔记和文章导入。 |
| 106 | [1997liuyh-boop/dsh-studio-cineflow](https://github.com/1997liuyh-boop/dsh-studio-cineflow) | 0 | 2026-10-27 | 2026-11-10 | CineFlow 影音工作室，提供影视项目、媒体流程和播放服务连接。 |
| 107 | [1997liuyh-boop/dsh-studio-design](https://github.com/1997liuyh-boop/dsh-studio-design) | 0 | 2026-11-02 | 2026-11-10 | 设计工作室，提供设计稿读取、素材管理、组件还原和交互验收。 |
| 108 | [1997liuyh-boop/dsh-studio-film](https://github.com/1997liuyh-boop/dsh-studio-film) | 0 | 2026-10-27 | 2026-11-10 | 影视工作室，提供影片项目、媒体资料和本地服务连接。 |
| 109 | [1997liuyh-boop/dsh-studio-fitness](https://github.com/1997liuyh-boop/dsh-studio-fitness) | 0 | 2026-10-27 | 2026-11-10 | 健身工作室，提供训练计划、动作记录和进度管理。 |
| 110 | [1997liuyh-boop/dsh-studio-floorplan](https://github.com/1997liuyh-boop/dsh-studio-floorplan) | 0 | 2026-11-10 | 2026-11-10 | 户型装修工作室，提供户型查看、空间编辑、家具布置和项目导出。 |
| 111 | [1997liuyh-boop/dsh-studio-knowledge](https://github.com/1997liuyh-boop/dsh-studio-knowledge) | 0 | 2026-10-27 | 2026-11-10 | 知识工作室，提供知识节点、内容整理和知识项目管理。 |
| 112 | [1997liuyh-boop/dsh-studio-library](https://github.com/1997liuyh-boop/dsh-studio-library) | 0 | 2026-10-27 | 2026-11-10 | 工作室控制台与共享运行时，管理工作室列表、项目、服务连接、会话和更新。 |
| 113 | [1997liuyh-boop/dsh-studio-live](https://github.com/1997liuyh-boop/dsh-studio-live) | 0 | 2026-10-27 | 2026-11-10 | 直播工作室，提供角色、语音、场景和直播辅助控制。 |
| 114 | [1997liuyh-boop/dsh-studio-media](https://github.com/1997liuyh-boop/dsh-studio-media) | 0 | 2026-10-27 | 2026-11-10 | 影音工作室，提供媒体资料、播放项目和本地影音服务连接。 |
| 115 | [1997liuyh-boop/dsh-studio-travel](https://github.com/1997liuyh-boop/dsh-studio-travel) | 0 | 2026-10-27 | 2026-11-10 | 旅行工作室，提供地图、路线、地点和旅行项目管理。 |
| 116 | [219zhou/dsh-kickstart](https://github.com/219zhou/dsh-kickstart) | 0 | 2026-11-10 | 2026-11-10 | 起个头（Qige Tou）：说说你平时在忙什么、烦什么，给你两三个一小时就能做出雏形的小项目，挑一个陪你立刻做。Guided first-project harness for DeepSeek Harness. |
| 117 | [349840432m-dev/dsh-session-dashboard](https://github.com/349840432m-dev/dsh-session-dashboard) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: a local, read-only session dashboard — all-session overview plus a per-conversation turn-by-turn timeline with tokens, estimated cost, model and tool breakdowns. |
| 118 | [4fuu/dsh-arbor](https://github.com/4fuu/dsh-arbor) | 0 | 2026-11-06 | 2026-11-10 | arbor as the agent driver inside DeepSeek Harness (DSH): one journal, window chains, and an Arbor page |
| 119 | [4fuu/dsh-arbor-fonts](https://github.com/4fuu/dsh-arbor-fonts) | 0 | 2026-11-09 | 2026-11-10 | Optional DeepSeek Harness client plugin: ChillDIN fonts for the dsh-arbor Arbor page |
| 120 | [4fuu/dsh-standard-plus](https://github.com/4fuu/dsh-standard-plus) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: one Standard mode with the Creative mode tools, replacing the shipped modes |
| 121 | [5777-wq/dsh-openfin](https://github.com/5777-wq/dsh-openfin) | 0 | 2026-11-10 | 2026-11-10 | A-share and global markets, an industry heatmap, movers, news and a plain-language finance academy — one native page inside DeepSeek Harness. |
| 122 | [68110923/dsh-plugin-mobile-ux](https://github.com/68110923/dsh-plugin-mobile-ux) | 0 | 2026-09-26 | 2026-11-10 | DSH Web 壳层的手机端体验优化插件：窄屏布局修复 + iOS 键盘/输入框跟随 + 侧边栏单击切换会话（纯客户端、桌面零回归） |
| 123 | [6ch3oh/dsh-hust-langya-boot](https://github.com/6ch3oh/dsh-hust-langya-boot) | 0 | 2026-11-10 | 2026-11-10 | 华中科技大学狼牙战队 (HUST LANGYA) RoboMaster 战术全息开机动画 DSH 插件 \| 借鉴爆火 550C DSH 开机动画与《红色警戒》主页全息动画，定制狼牙徽标 + 7 大兵种名场面 + 四大组别 14 个工程窗口 |
| 124 | [6ch3oh/dsh-robomaster-boot](https://github.com/6ch3oh/dsh-robomaster-boot) | 0 | 2026-11-10 | 2026-11-10 | RoboMaster 机甲大师战术全息开机动画 DSH 插件（官方 Logo 版）\| 借鉴爆火 550C DSH 开机动画与《红色警戒》主页全息动画，涵盖 7 大兵种名场面与四大研发组别 14 个工程窗口 |
| 125 | [A-2788553793/dsh-find](https://github.com/A-2788553793/dsh-find) | 0 | 2026-11-10 | 2026-11-10 | Ctrl+F full-text search across every workspace and conversation in DeepSeek Harness, executed entirely locally (no model calls). |
| 126 | [a4223091/dsh-memory-book](https://github.com/a4223091/dsh-memory-book) | 0 | 2026-11-10 | 2026-11-10 | Per-project local memory plugin for DSH (DeepSeek Harness): global + primary + transient memory, fixed project docs with versioning, engine-enforced maintenance. |
| 127 | [aa0330/Pixel-Clock](https://github.com/aa0330/Pixel-Clock) | 0 | 2026-11-10 | 2026-11-10 | 像素时钟-deepseek harness的插件 |
| 128 | [AdyVany/dsh-balance-reminder](https://github.com/AdyVany/dsh-balance-reminder) | 0 | 2026-11-10 | 2026-11-10 | Always-visible DeepSeek balance bar plus low-balance reminder for the DSH Web client. |
| 129 | [Ai-nice/dsh-pamper](https://github.com/Ai-nice/dsh-pamper) | 0 | 2026-11-10 | 2026-11-10 | 桌面宠物 |
| 130 | [Aixineiar/dsh-side-chat](https://github.com/Aixineiar/dsh-side-chat) | 0 | 2026-11-10 | 2026-11-10 | Throwaway side conversation in the DSH right sidebar: reply-only / read-only / fully inherited, enforced in the tool registry |
| 131 | [AksuRedapple/dsh-paseo-provider](https://github.com/AksuRedapple/dsh-paseo-provider) | 0 | 2026-11-03 | 2026-11-10 | Paseo providers for DeepSeek Harness: persistent WS mux + ACP, shared turn state machine |
| 132 | [alanwang87/dsh-weread-moyu](https://github.com/alanwang87/dsh-weread-moyu) | 0 | 2026-11-10 | 2026-11-10 | 微信读书当背景 — DeepSeek Harness 摸鱼插件：扫码登录微信读书，把书页正文以低对比度文字层垫在 Web GUI 背后。 |
| 133 | [alvinlui-hk/dsh-browser-bridge](https://github.com/alvinlui-hk/dsh-browser-bridge) | 0 | 2026-11-07 | 2026-11-10 | DeepSeek Harness plugin: let agents read and control the web page open in the right Sidebar Browser tab |
| 134 | [alwayswithmestand/dsh-token-speed](https://github.com/alwayswithmestand/dsh-token-speed) | 0 | 2026-11-10 | 2026-11-10 | Live token throughput meter for the DeepSeek Harness Web chat composer. |
| 135 | [amd47802574/dsh-skill-hub](https://github.com/amd47802574/dsh-skill-hub) | 0 | 2026-11-10 | 2026-11-10 | DSH skill hub: sidebar management page to browse, search, import (folder/GitHub), and inspect every agent skill in DeepSeek Harness |
| 136 | [aur3l14no/dsh-html-render](https://github.com/aur3l14no/dsh-html-render) | 0 | 2026-11-10 | 2026-11-10 | Lets DSH agents answer with an HTML page: they check it in headless Chrome, then show it in the chat. |
| 137 | [bananaive/qianDao-photo-finder-skill](https://github.com/bananaive/qianDao-photo-finder-skill) | 0 | 2026-11-09 | 2026-11-10 | Photo finder skill for the 2026 Qiandao Lake cycling race, for Codex and DeepSeek Harness. |
| 138 | [bananaive/wanlu-strava-sync](https://github.com/bananaive/wanlu-strava-sync) | 0 | 2026-11-04 | 2026-11-10 | Agent Skill：将顽鹿骑行同步到 Strava，支持 FIT 校验与坐标检查。 |
| 139 | [BaxterL/dsh-xhs-search](https://github.com/BaxterL/dsh-xhs-search) | 0 | 2026-11-10 | 2026-11-10 | Xiaohongshu (???/RED) reader for DeepSeek Harness: CDP-driven isolated browser, real-input click opening, DOM-only extraction, local knowledge base. Zero runtime dependencies. |
| 140 | [BeastyZ/dsh-remote-agent](https://github.com/BeastyZ/dsh-remote-agent) | 0 | 2026-11-10 | 2026-11-10 | SSH remote agent workbench for DSH: launch Codex, Kimi, Claude or custom CLIs with durable sessions, file editing, Git worktrees and port forwarding. |
| 141 | [beyondgjc/dsh-persona-presets](https://github.com/beyondgjc/dsh-persona-presets) | 0 | 2026-11-10 | 2026-11-10 | 三个自定义 agent 预设，每个预设一张可编辑的角色卡（独立 dsh 插件） |
| 142 | [BeyondGu/klein-cat-pet](https://github.com/BeyondGu/klein-cat-pet) | 0 | 2026-11-10 | 2026-11-10 | DSH 网页端三状态动态桌面宠物：黄水晶占卜 / 打瞌睡 / 喝甜冰茶 |
| 143 | [bmdoctor7/dsh-git-heatmap](https://github.com/bmdoctor7/dsh-git-heatmap) | 0 | 2026-11-10 | 2026-11-10 | DSH 多仓库 Git 提交热力图插件：按日/月/年查看提交，一键刷新，面板内提交推送 |
| 144 | [bob868335-rgb/dsh-lightvela](https://github.com/bob868335-rgb/dsh-lightvela) | 0 | 2026-11-10 | 2026-11-10 | agent 网关工具：把 LightVela 的 OpenAI 兼容模型接进 DSH |
| 145 | [brianmoney/dsh-codex-usage-panel](https://github.com/brianmoney/dsh-codex-usage-panel) | 0 | 2026-11-10 | 2026-11-10 | Codex subscription usage card pinned at the DSH sidebar foot, plus a quota dashboard. Reads the ChatGPT quota that the dsh-codex-subscription plugin reports. |
| 146 | [CAI-KUN-MAX/prompt-polish](https://github.com/CAI-KUN-MAX/prompt-polish) | 0 | 2026-11-06 | 2026-11-10 | Windows floating prompt optimizer for DeepSeek Harness |
| 147 | [cairunze3/deepseek-harness-memory-core](https://github.com/cairunze3/deepseek-harness-memory-core) | 0 | 2026-11-05 | 2026-11-10 | Zero-dependency memory core for DeepSeek Harness: pointer/core preloading, BM25/hybrid retrieval, auditable consolidation, cloud tiering. Plain Markdown canon, rebuildable index. |
| 148 | [Cenuon/dsh-opencode-ui](https://github.com/Cenuon/dsh-opencode-ui) | 0 | 2026-11-04 | 2026-11-10 | opencode console visual language for the DSH Web UI |
| 149 | [Chengyunlai/dsh-algorithm-coach](https://github.com/Chengyunlai/dsh-algorithm-coach) | 0 | 2026-11-10 | 2026-11-10 | Algorithm coach (算法教练) — a DeepSeek Harness plugin for practising LeetCode: mental models, layered SVG step animations, a CodeMirror editor with click-to-learn API docs, local TypeScript/Go judging, and manual submission. |
| 150 | [chensuqi631-max/zying-erp](https://github.com/chensuqi631-max/zying-erp) | 0 | 2026-09-11 | 2026-11-10 | gaoshutiao |
| 151 | [chichi233/dsh-delete-session](https://github.com/chichi233/dsh-delete-session) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：侧栏会话菜单一键删除会话，可关闭删除前确认(设置-通用设置内). |
| 152 | [Chip-G0202/dsh-model-radar](https://github.com/Chip-G0202/dsh-model-radar) | 0 | 2026-11-10 | 2026-11-10 | Model Radar: a four-task 150-point model intelligence benchmark plus 0–1000 real-world performance scoring for DeepSeek Harness. |
| 153 | [chwb0505/dsh-archive-toolkit](https://github.com/chwb0505/dsh-archive-toolkit) | 0 | 2026-11-10 | 2026-11-10 | DSH conversation archive toolkit: session cascade delete, message tombstone delete, fork from message, whole-message quote |
| 154 | [CIBUDAYI3906/dsh-workspace-nest](https://github.com/CIBUDAYI3906/dsh-workspace-nest) | 0 | 2026-11-10 | 2026-11-10 | 侧边栏工作区多级树：任意一级新建子工作区与会话，会话可置顶到最近一级文件夹 |
| 155 | [Citrusrr/dsh-think-fold](https://github.com/Citrusrr/dsh-think-fold) | 0 | 2026-11-10 | 2026-11-10 | Auto-expand the running Think row and tool cards, fold them when settled, merge finished turns into the built-in process header. Client-only, zero custom rendering. |
| 156 | [cnhenaihui/dsh-skill-manager](https://github.com/cnhenaihui/dsh-skill-manager) | 0 | 2026-10-26 | 2026-11-10 | DSH 技能管理插件：技能注册、介绍、导出 zip、版本跟踪、停用/启用（零运行时依赖） |
| 157 | [codeforbuddy/exam-analyzer](https://github.com/codeforbuddy/exam-analyzer) | 0 | 2026-11-10 | 2026-11-10 | 理科试卷分段解析列知识点并出类似题目.DSH插件 |
| 158 | [colerehbein/dsh-hermes-kit](https://github.com/colerehbein/dsh-hermes-kit) | 0 | 2026-11-10 | 2026-11-10 | Hermes desktop's model picker, projects view, and the harness tooling around them — one kit for DeepSeek Harness |
| 159 | [ColorlessBoy/murdoku-teacher](https://github.com/ColorlessBoy/murdoku-teacher) | 0 | 2026-11-08 | 2026-11-10 | Murdoku 陪玩：DSH 侧边栏插件 + 教学/考官 skill；内含「寻宝 The Treasure Hunt」24×24 竞赛关互动页（GitHub Pages 在线可玩，含 E2E 闭环检测） |
| 160 | [comeonzhj/dsh-recording-suite](https://github.com/comeonzhj/dsh-recording-suite) | 0 | 2026-11-10 | 2026-11-10 | Recordings from soundcore Work (D3200) and Apple Watch, transcribed and usable as DeepSeek Harness context |
| 161 | [cooleye/dsh-dafeiyu-pro](https://github.com/cooleye/dsh-dafeiyu-pro) | 0 | 2026-11-09 | 2026-11-10 | Voice-enabled BigFish companion for DeepSeek Harness - fork of QCYTSN/dsh-dafeiyu adding wake word, ASR, TTS and intent routing. |
| 162 | [CrystalVibe28/dsh-locale-zh-tw](https://github.com/CrystalVibe28/dsh-locale-zh-tw) | 0 | 2026-11-10 | 2026-11-10 | 正體中文（台灣）語言包 for DeepSeek Harness Web GUI — zh-TW locale plugin with reproducible build and GitHub Actions auto-translation |
| 163 | [czx455501074-afk/dsh-purge](https://github.com/czx455501074-afk/dsh-purge) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 破甲（mmparko/dsh-purge 全量镜像：全部分支 / 100 tags / 完整提交历史） |
| 164 | [daedalforge-slv/dsh-monitor](https://github.com/daedalforge-slv/dsh-monitor) | 0 | 2026-11-02 | 2026-11-10 | A System panel for DeepSeek Harness: machine, runtime, working repositories and Kubernetes cluster health. |
| 165 | [DandanLLab/dsh-plugin-team-group](https://github.com/DandanLLab/dsh-plugin-team-group) | 0 | 2026-11-10 | 2026-11-10 | dsh 的团队小组插件：角色卡片、导演演讲规划师、每个成员的执行引擎、跨渠道会议成员、邀请审批流程 |
| 166 | [daoyan2142/dsh-repot](https://github.com/daoyan2142/dsh-repot) | 0 | 2026-11-10 | 2026-11-10 | Carry a DSH environment between machines through one private repository: plugins, configuration and folders. Restores land on the expected paths or refuse to write. |
| 167 | [darkneu/dsh-finesse-visualizer](https://github.com/darkneu/dsh-finesse-visualizer) | 0 | 2026-11-10 | 2026-11-10 | Finesse 3 KatScript visualization and drag-and-drop optical bench designer for DeepSeek Harness |
| 168 | [Darwin-2002/dsh-multi-persona](https://github.com/Darwin-2002/dsh-multi-persona) | 0 | 2026-11-10 | 2026-11-10 | Multi-persona switching for DeepSeek Harness: switch by how you address the assistant, put several on stage at once, one avatar per persona. |
| 169 | [DaSea/dsh-card-theme](https://github.com/DaSea/dsh-card-theme) | 0 | 2026-11-10 | 2026-11-10 | DSH theme, has three palettes (Nord, Solarized, One Dark), per-mode customization (accent, background, foreground, translucent sidebar, contrast, wallpaper), an optional card layout for shell columns, and conversation content width.  |
| 170 | [datawork-technology/dsh-cyber-redteam](https://github.com/datawork-technology/dsh-cyber-redteam) | 0 | 2026-11-10 | 2026-11-10 | CyberOps runtime for DeepSeek Harness: opt-in masked /cyber and /cyber-2 routes, each on its own loopback port with its own token, plus a Red Team toggle. |
| 171 | [davzlcm/model-price-radar](https://github.com/davzlcm/model-price-radar) | 0 | 2026-11-10 | 2026-11-10 | DSH ??:?????????,???????,?????????? |
| 172 | [dcd887/dsh-brief-pack](https://github.com/dcd887/dsh-brief-pack) | 0 | 2026-11-07 | 2026-11-10 | Task-pack builder for DeepSeek Harness: compress large files into one &lt;=8000-token brief a subagent can read alone. |
| 173 | [dcd887/dsh-browser-ops](https://github.com/dcd887/dsh-browser-ops) | 0 | 2026-11-09 | 2026-11-10 | Self-managed persistent browser for DSH automation: launch its own Chrome/Edge profile, navigate, switch tabs, snapshot with semantic refs, act by ref, eval, screenshot, upload files. Does not bypass CAPTCHAs by design. |
| 174 | [dcd887/dsh-doc-read](https://github.com/dcd887/dsh-doc-read) | 0 | 2026-11-07 | 2026-11-10 | Token-efficient document reader for DeepSeek Harness: outline / ranged read / grep for PDF, DOCX, XLSX, TXT. |
| 175 | [dcd887/dsh-record-search](https://github.com/dcd887/dsh-record-search) | 0 | 2026-11-07 | 2026-11-10 | Full-text search over every DeepSeek Harness session, with a sidebar panel and a record_search tool. |
| 176 | [DDDMUC/dsh-sidebar-declutter](https://github.com/DDDMUC/dsh-sidebar-declutter) | 0 | 2026-11-07 | 2026-11-10 | DSH 侧边栏精简：自定义隐藏左侧栏上半面板布局，仅通过样式表实现，且可逆。DSH sidebar declutter: custom-hide the upper panel layout of the left sidebar; stylesheet-only and reversible. |
| 177 | [DerekZhangbj/dsh-compaction-selective](https://github.com/DerekZhangbj/dsh-compaction-selective) | 0 | 2026-11-09 | 2026-11-10 | Human-directed selective compaction for DeepSeek Harness: compact an explicitly requested span of finished turns into one summary, with a mandatory approval prompt. |
| 178 | [Diomchen/dsh-cross-agent](https://github.com/Diomchen/dsh-cross-agent) | 0 | 2026-11-10 | 2026-11-10 | 局域网跨端 agent 会话：两台机器上的 DSH agent 互相下达指令、互传文件。 |
| 179 | [dlgrv/remove-deepseek-logo](https://github.com/dlgrv/remove-deepseek-logo) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: remove the DeepSeek Harness logo, local-build label, version string, and hero fish from the sidebar |
| 180 | [Dogegg-1/dsh-godot-workbench-plugin](https://github.com/Dogegg-1/dsh-godot-workbench-plugin) | 0 | 2026-11-10 | 2026-11-10 | Game development workbench for DeepSeek Harness and Godot |
| 181 | [DonGeeo87/cg-media-viewer](https://github.com/DonGeeo87/cg-media-viewer) | 0 | 2026-11-10 | 2026-11-10 | Video and audio file viewers for the DeepSeek Harness sidebar, including the dsh-better-sidebar file tree, with byte-range seeking. |
| 182 | [DonGeeo87/cg-panel](https://github.com/DonGeeo87/cg-panel) | 0 | 2026-11-10 | 2026-11-10 | A startup command panel for DeepSeek Harness: which project to pick up, machine health, backups and fleet status. |
| 183 | [dotv-ai/connectors](https://github.com/dotv-ai/connectors) | 0 | 2026-11-10 | 2026-11-10 | Connectors that let any coding agent drive the DOTV infinite canvas |
| 184 | [doxt-stock/dsh-plugin-stock](https://github.com/doxt-stock/dsh-plugin-stock) | 0 | 2026-11-10 | 2026-11-10 | Doxt Stock — DeepSeek Harness (DSH) plugin: verifiable US-stock AI judgment data from doxt.com's public append-only ledger. Judgments, real settled track record, hash-chain verification. MIT. |
| 185 | [DreamPerday/dsh-team-toolkit](https://github.com/DreamPerday/dsh-team-toolkit) | 0 | 2026-11-10 | 2026-11-10 | Manual context compaction and cache/prefix audit for DSH Agent Teams |
| 186 | [dreamxjy/dsh-settings-resizer](https://github.com/dreamxjy/dsh-settings-resizer) | 0 | 2026-11-10 | 2026-11-10 | A Harness plugin that makes the settings window resizable and configurable in size. |
| 187 | [drliuhuan/dsh-plugin-meeting](https://github.com/drliuhuan/dsh-plugin-meeting) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness meeting assistant plugin: system audio capture, local SenseVoice transcription, domain-aware LLM correction, agenda and speaker turns, live minutes and Q&amp;A. |
| 188 | [dsh-plugin-lab/dsh-harness-dispatcher](https://github.com/dsh-plugin-lab/dsh-harness-dispatcher) | 0 | 2026-11-10 | 2026-11-10 | Benchmark a DSH agent harness, not a model: run one fixed task against controlled pipeline variants (tools, persona, injected tool faults, model route) and record deterministic per-trial traces as JSONL. |
| 189 | [dsh-plugins/dsh-force-read-skill](https://github.com/dsh-plugins/dsh-force-read-skill) | 0 | 2026-11-10 | 2026-11-10 | Require DeepSeek Harness agents to read a skill before using tools. Install from npm. |
| 190 | [dshbot-by-TingXia/dsh-tg-tools](https://github.com/dshbot-by-TingXia/dsh-tg-tools) | 0 | 2026-11-10 | 2026-11-10 | 给 DSH 会话用的 Telegram 工具：Bot API 收发消息、缓存历史、成员/贴纸/骰子/reaction、可选收消息唤醒 |
| 191 | [duma520/dsh-composer-butler](https://github.com/duma520/dsh-composer-butler) | 0 | 2026-11-10 | 2026-11-10 | 输入框按钮管家：DSH 输入框工具栏的显隐总开关。一个「⋯」按钮列出所有插件挂上去的控件，逐项勾选即可隐藏或显示，状态自动持久化；按钮本身还能挂到 9 个位置任选（工具栏 / 输入框两侧 / 会话头 / 侧栏底部 / 右下悬浮球），工具栏整行被挤掉时也照样能打开。只隐藏不卸载，随时可一键全部恢复。 |
| 192 | [EastChilde/dsh-svn](https://github.com/EastChilde/dsh-svn) | 0 | 2026-11-10 | 2026-11-10 | TortoiseSVN-style SVN panel for DeepSeek Harness (DSH): working-copy changes, commit history, revision diffs, blame, update/commit/resolve, plus 5 read-only agent tools. Windows CJK paths handled. · DSH 的 SVN 版本控制面板 |
| 193 | [EastChilde/dsh-worklog](https://github.com/EastChilde/dsh-worklog) | 0 | 2026-10-20 | 2026-11-10 | DSH 工作记录插件｜按天记任务 · 项目归类 · 优先级 · 月历回溯｜带 Agent 工具，可在对话里让模型代记｜数据只存本机 JSON |
| 194 | [Echo-Smith/dsh-hy-memory](https://github.com/Echo-Smith/dsh-hy-memory) | 0 | 2026-11-03 | 2026-11-10 | 为 DSH 装上三层长期记忆：会话、项目、个人。 |
| 195 | [EchoEon5/dsh-codex-effort-slider](https://github.com/EchoEon5/dsh-codex-effort-slider) | 0 | 2026-11-10 | 2026-11-10 | Codex-style reasoning effort slider for DeepSeek-Harness that adapts to each model's own number of thinking levels. |
| 196 | [EliasKaslan/dsh-sidecar](https://github.com/EliasKaslan/dsh-sidecar) | 0 | 2026-11-10 | 2026-11-10 | Read-only context sidekick for DeepSeek Harness: ask about the current session without writing to it. |
| 197 | [EndWithHyphen/dsh-learning-quirky-stuff](https://github.com/EndWithHyphen/dsh-learning-quirky-stuff) | 0 | 2026-11-10 | 2026-11-10 | 学习画板：手写与截图笔记、AI 图文总结、系统学习、SPO 知识图谱和间隔复习。 |
| 198 | [feiniao1933/dsh-minigames](https://github.com/feiniao1933/dsh-minigames) | 0 | 2026-11-10 | 2026-11-10 | Mini games box for the DSH Web right sidebar: Gomoku vs an easy/normal/hard AI, placement sounds and a victory celebration. |
| 199 | [fengzhiyushui/dsh-inkstone-agent](https://github.com/fengzhiyushui/dsh-inkstone-agent) | 0 | 2026-11-10 | 2026-11-10 | 面向 DeepSeek Harness (DSH) 的确定性控制内核与契约式自治研发宿主插件 \| Deterministic authority kernel &amp; autonomous engineering plugin for DSH |
| 200 | [ferrisching/dsh-reakit](https://github.com/ferrisching/dsh-reakit) | 0 | 2026-11-10 | 2026-11-10 | Batteries-included REA integration for DeepSeek Harness: managed Node/REA runtime, global tool switch, live composer status indicator, on-demand optional tool setup, and in-place runtime upgrades with rollback. |
| 201 | [Finalbingo/dsh-local-board](https://github.com/Finalbingo/dsh-local-board) | 0 | 2026-11-06 | 2026-11-10 | 本地待办看板：Todo/Doing/Done 三列，按项目组织，数据是一个你自选的 Markdown 文件；macOS 支持到期提醒。 |
| 202 | [Flem83/dsh-opencode-quota-panel](https://github.com/Flem83/dsh-opencode-quota-panel) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: OpenCode Go subscription quota (5h/weekly/monthly) in the DSH Web UI · 在 DSH 网页界面显示 OpenCode Go 订阅额度 |
| 203 | [flyingfishzxf/dsh-fc-games](https://github.com/flyingfishzxf/dsh-fc-games) | 0 | 2026-11-10 | 2026-11-10 | FC/NES game library and emulator for the DSH Web right sidebar — multi-source search, ZIP support, custom sources, URL cards, gamepad input, saves and a Famicom-inspired UI. |
| 204 | [fox007xp/dsh-plugin-bg-color](https://github.com/fox007xp/dsh-plugin-bg-color) | 0 | 2026-11-10 | 2026-11-10 | DSH background-color plugin: live-tune window, surface, overlay and sidebar colors, with built-in light and dark presets. |
| 205 | [FREEZONEX/Tier0-dsh-mcp](https://github.com/FREEZONEX/Tier0-dsh-mcp) | 0 | 2026-11-10 | 2026-11-10 | Tier0 MCP connector for DeepSeek Harness |
| 206 | [FrozMN/dsh-session-adopt](https://github.com/FrozMN/dsh-session-adopt) | 0 | 2026-11-06 | 2026-11-10 | DeepSeek Harness plugin: adopts sessions created outside the running window and imports sessions from other local agent harnesses (pi) as native DSH sessions in matching or new Workspaces. |
| 207 | [fuqiang-lab/dsh-wps-office](https://github.com/fuqiang-lab/dsh-wps-office) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness bundle for WPS Office: five compact facade tools over the 250-tool WPS MCP server, plus four embedded WPS skills. |
| 208 | [Furfice/dsh-yuyudiary](https://github.com/Furfice/dsh-yuyudiary) | 0 | 2026-11-10 | 2026-11-10 | 鱼鱼日记：每天把 DeepSeek Harness 的真实任务写成一本有手绘风格涂鸦的日记。 |
| 209 | [futuretea/dsh-project-models](https://github.com/futuretea/dsh-project-models) | 0 | 2026-11-10 | 2026-11-10 | Per-project model routing for DeepSeek Harness: pick the main-agent and subagent models for each project directory. |
| 210 | [fxz729/dsh-paper-workbench](https://github.com/fxz729/dsh-paper-workbench) | 0 | 2026-11-10 | 2026-11-10 | DSH 文献工作台：嵌套文献库、文献管理工具、PDF 阅读与原生 AI 伴读，支持翻译队列和可选手写批注。 |
| 211 | [GASNOOVA/dsh-im-persona](https://github.com/GASNOOVA/dsh-im-persona) | 0 | 2026-11-10 | 2026-11-10 | DSH 个人版 IM 机器人插件：微信 / QQ 双渠道，内置大肥鱼人设库，可导入自定义人设 |
| 212 | [geesepop01/ai4s](https://github.com/geesepop01/ai4s) | 0 | 2026-11-10 | 2026-11-10 | OpenScience research plugin for DeepSeek Harness: 370 research skills, 6 literature tools and an always-on research loop - in every session, no preset needed. |
| 213 | [geml-spec/gemworks](https://github.com/geml-spec/gemworks) | 0 | 2026-10-26 | 2026-11-10 | GEML workflows for coding agents: a Claude Code plugin (a band above the prompt, a board), DeepSeek Harness and Pi adapters, an MCP server and a CLI. |
| 214 | [GenePad/dsh-zot-library](https://github.com/GenePad/dsh-zot-library) | 0 | 2026-11-09 | 2026-11-10 | Zotero-compatible literature library plugin for DeepSeek Harness (dsh): browse &amp; edit a real zotero.sqlite, PDF import with metadata lookup, annotations, WebDAV file sync, an agent chat dock, and a full Zotero-compatible Microsoft Word citation plugin. |
| 215 | [genesis-agents/dsh-deep-insight](https://github.com/genesis-agents/dsh-deep-insight) | 0 | 2026-11-10 | 2026-11-10 | Evidence-based research workspaces, exact citations and reports for DeepSeek Harness |
| 216 | [GnepNus/dsh-skills-panel-toggle](https://github.com/GnepNus/dsh-skills-panel-toggle) | 0 | 2026-11-10 | 2026-11-10 | dsh的查看技能列表并禁用指定技能的插件 |
| 217 | [GOhaochen/dsh-document-mode](https://github.com/GOhaochen/dsh-document-mode) | 0 | 2026-10-26 | 2026-11-10 | DSH 公文模式：按 GB/T 9704-2012 呈递公文、圈阅批示与 DOCX 导出，支持热启用/禁用 |
| 218 | [guiwowow/dsh-reply-notify](https://github.com/guiwowow/dsh-reply-notify) | 0 | 2026-11-10 | 2026-11-10 | Desktop toast when a DSH turn finishes — Codex-style turn completion notifications, with Never / Only when unfocused / Always. |
| 219 | [HandsYe/dsh-lock-screen](https://github.com/HandsYe/dsh-lock-screen) | 0 | 2026-11-10 | 2026-11-10 | One-click lock screen for DeepSeek Harness: a sidebar button hides the whole interface behind your current Windows wallpaper; press Esc twice to unlock. / 一键锁屏：侧栏按钮用当前 Windows 壁纸遮住整个界面，连按两次 Esc 解锁。 |
| 220 | [hanhan9999999999999999999/dsh-memory-nebula](https://github.com/hanhan9999999999999999999/dsh-memory-nebula) | 0 | 2026-11-10 | 2026-11-10 | Local-first memory nebula for DeepSeek Harness: graph, recall, paths, hygiene, snapshots. |
| 221 | [Hankai233/dsh-mermaid-studio](https://github.com/Hankai233/dsh-mermaid-studio) | 0 | 2026-11-09 | 2026-11-10 | 把 mermaid 代码围栏渲染成图，并把结果缓存进内存和 IndexedDB。同一张图第二次出现时，渲染器直接下班。 |
| 222 | [hanwang-ai/dsh-uml-drawio](https://github.com/hanwang-ai/dsh-uml-drawio) | 0 | 2026-11-10 | 2026-11-10 | Deterministic UML sequence diagrams (.drawio) for DeepSeek Harness: Python layout, draw.io CLI rendering, Pillow verification. |
| 223 | [haonan108/dsh-plugin-screenshot-tool](https://github.com/haonan108/dsh-plugin-screenshot-tool) | 0 | 2026-11-10 | 2026-11-10 | WeChat-style screenshot button for the DeepSeek Harness composer: native macOS region capture, optional window hiding, clipboard + composer attachment. |
| 224 | [hexiangyu0730-web/dsh-web-bridge](https://github.com/hexiangyu0730-web/dsh-web-bridge) | 0 | 2026-11-10 | 2026-11-10 | 基于 @xueray/dsh-web-bridge 0.4.5 的修改版：网页对话输入框支持粘贴与拖放附件。非官方 fork，PolyForm Noncommercial 1.0.0。上游 PR: https://github.com/SaiSenBox/dsh-web-bridge/pull/1 |
| 225 | [HimLeoing/dsh-task-progress](https://github.com/HimLeoing/dsh-task-progress) | 0 | 2026-11-10 | 2026-11-10 | Task progress for DeepSeek Harness. Local execution evidence, teammate progress, and optional AI observations. |
| 226 | [Hocete/dsh-skill-card](https://github.com/Hocete/dsh-skill-card) | 0 | 2026-11-10 | 2026-11-10 | Skill card gallery for DeepSeek Harness (dsh): render installed skills as game-style cards, edit rarity/stars/stats/tags/card-art in a side-car store without touching SKILL.md. |
| 227 | [howie79794-sys/dsh-voice-polish](https://github.com/howie79794-sys/dsh-voice-polish) | 0 | 2026-11-10 | 2026-11-10 | Voice input with Feishu-style polish for DeepSeek Harness: local SenseVoice transcription + DeepSeek tidy-up into the composer draft. 语音输入（口语整理） |
| 228 | [HSCisAvailableForUsername/dsh-computer-use-rawinput](https://github.com/HSCisAvailableForUsername/dsh-computer-use-rawinput) | 0 | 2026-11-09 | 2026-11-10 | DSH computer-use fork: absolute injected pointer movement so games and other Raw Input apps accept synthetic clicks |
| 229 | [HuiHuanYe/dsh-system-prompt](https://github.com/HuiHuanYe/dsh-system-prompt) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: edit and replace the actual system prompt in Settings, with one-click reset to the default prompt. |
| 230 | [Hungry-M/dsh-deepseek-import](https://github.com/Hungry-M/dsh-deepseek-import) | 0 | 2026-11-03 | 2026-11-10 | DeepSeek web chat -&gt; DSH session migration (Edge extension + importer CLI) |
| 231 | [hZsFN/dsh-sidebar-panel-visibility](https://github.com/hZsFN/dsh-sidebar-panel-visibility) | 0 | 2026-11-10 | 2026-11-10 | DSH Web 插件：左侧栏面板入口显隐开关，状态存 localStorage 跨重启保持（不改 node_modules，纯槽位契约实现） |
| 232 | [iceleaf916/dsh-meeting-notes](https://github.com/iceleaf916/dsh-meeting-notes) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 会议记录插件：系统声音 + 麦克风混音录音、本地离线转写、一键生成会议纪要（不联网、不上传音频） |
| 233 | [IdaWasHere/dsh-chat-to-article](https://github.com/IdaWasHere/dsh-chat-to-article) | 0 | 2026-11-10 | 2026-11-10 | Mark key or excluded chat passages, then turn the conversation into a checked Markdown article for DeepSeek Harness. |
| 234 | [imnotRiv3r/dsh-job-notify](https://github.com/imnotRiv3r/dsh-job-notify) | 0 | 2026-11-10 | 2026-11-10 | Native Windows notifications for DeepSeek Harness when a background job settles or a conversation turn ends. |
| 235 | [Into-the-Numind/Ding-Wall](https://github.com/Into-the-Numind/Ding-Wall) | 0 | 2026-11-10 | 2026-11-10 | Ding Wall · 钉一钉 — a warm paper-style shared pinboard plugin for DeepSeek Harness: ideas, to-dos, anonymous notes, team pulse. |
| 236 | [j20cc/dsh-sidebar-plantuml](https://github.com/j20cc/dsh-sidebar-plantuml) | 0 | 2026-11-10 | 2026-11-10 | Render PlantUML diagrams in the DSH sidebar Markdown preview — pure browser TeaVM, no Java or PlantUML server. |
| 237 | [jasoncai0/dsh-interview-coach](https://github.com/jasoncai0/dsh-interview-coach) | 0 | 2026-11-10 | 2026-11-10 | Mock-first interview coach plugin for DeepSeek Harness: Agent question bank, resume-grounded memory, HUD, and three-level deep dive. |
| 238 | [jhao0413/dsh-video-clip](https://github.com/jhao0413/dsh-video-clip) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：按时间区间下载视频片段（yt-dlp --download-sections，长视频自动走 HLS 分片）+ 抽帧核对边界 + 内网 HTTP 分享 |
| 239 | [jiale-cheng-ning/mcp-hub](https://github.com/jiale-cheng-ning/mcp-hub) | 0 | 2026-05-29 | 2026-11-10 | One TUI to manage all your MCP servers. Discover, monitor, and audit MCP server configurations across Claude Desktop, Cursor, VS Code, and more. |
| 240 | [jinferth/dsh-obsidian-vault](https://github.com/jinferth/dsh-obsidian-vault) | 0 | 2026-11-09 | 2026-11-10 | Obsidian vault tools for DeepSeek Harness: list, read, search, edit, frontmatter and move-with-wikilink-repair, over plain Markdown. |
| 241 | [JIUYUE-SEP/DSH-Neural-Mind](https://github.com/JIUYUE-SEP/DSH-Neural-Mind) | 0 | 2026-11-09 | 2026-11-10 | DSH 心智插件:长期记忆池 + SOUL 人格自我设定 + L1 用户画像(热缓冲 + 双速写入 + 证据驱动生命周期) |
| 242 | [jkin8010/dsh-code-review](https://github.com/jkin8010/dsh-code-review) | 0 | 2026-11-10 | 2026-11-10 | 基于 alibaba/open-code-review 的 DeepSeek Harness 代码评审插件：当前改动/提交/分支、项目架构、代码模块与信息流业务工作流四类评审，实时进度与动态、GitHub 风格提交热力图与项目/模块统计。Apache-2.0。 |
| 243 | [Joe-zhouman/dsh-mcpp](https://github.com/Joe-zhouman/dsh-mcpp) | 0 | 2026-11-10 | 2026-11-10 | MCP++ 聚合网关的 dsh 插件版：对外 drop-in HTTP 网关（同端口、同 config.yaml）+ dsh 原生 mcp__* 工具面 + 侧栏管理页 + preset 作用域工具面 |
| 244 | [Joe-zhouman/dsh-rich-render](https://github.com/Joe-zhouman/dsh-rich-render) | 0 | 2026-10-29 | 2026-11-10 | dsh web 前端的富渲染插件：接管助手消息渲染，卡片组、表格图表、清单、思维导图、tab/tree/timeline 等围栏升格，外加水印层 |
| 245 | [Joe-zhouman/dsh-soul-presets](https://github.com/Joe-zhouman/dsh-soul-presets) | 0 | 2026-09-29 | 2026-11-10 | dsh web profile 的预设提示词插件：问答模式系统提示词切换、管理界面与回环守卫路由 |
| 246 | [KasenRi/ds-bot-addmode](https://github.com/KasenRi/ds-bot-addmode) | 0 | 2026-11-10 | 2026-11-10 | Companion plugin for DS Bot on DeepSeek Harness: pick a DSH mode (agent preset) per Bot |
| 247 | [kennethfan/dsh-session-fold](https://github.com/kennethfan/dsh-session-fold) | 0 | 2026-11-10 | 2026-11-10 | Deterministic folding of oversized tool outputs for DSH sessions, with list/restore and spill cleanup. |
| 248 | [Kide-Lee/dsh-locus-bridge](https://github.com/Kide-Lee/dsh-locus-bridge) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin acting as a Locus client for the Unity native broker (Win32 named pipe / Unix domain socket) |
| 249 | [Kingoff8/dsh-pixel-whale-pet](https://github.com/Kingoff8/dsh-pixel-whale-pet) | 0 | 2026-11-09 | 2026-11-10 | Pixel whale calf pet for the DeepSeek Harness web UI: swims in the chat, dodges text, reacts to every agent stage, spouts water, goes to sleep and launches a firework when a turn completes. |
| 250 | [Kingzhoudk/dsh-code-viewer](https://github.com/Kingzhoudk/dsh-code-viewer) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：右侧边栏 CodeIDE —— 文件树、编辑器与 Git 图 |
| 251 | [Kingzhoudk/dsh-grill](https://github.com/Kingzhoudk/dsh-grill) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：拷问模式 —— 先澄清歧义与缺失信息，再规划执行 |
| 252 | [Kingzhoudk/dsh-memory-switch](https://github.com/Kingzhoudk/dsh-memory-switch) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：记忆开关 —— 按会话切断跨会话记忆通道 |
| 253 | [knight02-bit/dsh-opencode-go-usage](https://github.com/knight02-bit/dsh-opencode-go-usage) | 0 | 2026-11-10 | 2026-11-10 | 在 DSH（DeepSeek Harness）Web GUI 底部常驻的 OpenCode Go 额度条：rolling / weekly / monthly 剩余百分比，点击浮出配速卡（每天 / 每周该花多少才不浪费额度）。 |
| 254 | [kuailexiaozixin/dsh-skill-mcp-market](https://github.com/kuailexiaozixin/dsh-skill-mcp-market) | 0 | 2026-11-10 | 2026-11-10 | DSH 技能市场与 MCP 连接器市场：浏览实时技能源，一键安装 SKILL.md 技能与 MCP 连接器，装完即刻可用、无需重启。SKILL &amp; MCP marketplace for DeepSeek Harness — browse live sources, install skills and MCP connectors, effective immediately. |
| 255 | [kuangdang123/dsh-zotero](https://github.com/kuangdang123/dsh-zotero) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness bundle for a local Zotero library: search and edit items, bulk-import papers by DOI/arXiv/PMID/ISBN/URL, read PDF annotations, notes and indexed full text. |
| 256 | [kulebbb/dsh-output](https://github.com/kulebbb/dsh-output) | 0 | 2026-11-10 | 2026-11-10 | DSH 右栏「产出物」tab：汇总当前会话交付给用户的文件，可在右栏预览、用默认应用打开或在 Finder 中定位 |
| 257 | [KunKun24/dsh-enter-newline](https://github.com/KunKun24/dsh-enter-newline) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 插件：按 Enter 只换行、不发送 \| Enter inserts a newline instead of sending in the Harness composer. |
| 258 | [KunKun24/dsh-fold-delete](https://github.com/KunKun24/dsh-fold-delete) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 插件：折叠较早消息 + 彻底删除会话 \| Fold older messages and permanently delete sessions. |
| 259 | [KunKun24/dsh-global-prompt](https://github.com/KunKun24/dsh-global-prompt) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 插件：一段全局提示词 / 人设，每条新对话自动注入 \| A global prompt or persona injected into every new conversation. |
| 260 | [kuzmin-lemmi/deepseek-gruvbox-themes](https://github.com/kuzmin-lemmi/deepseek-gruvbox-themes) | 0 | 2026-11-10 | 2026-11-10 | Seven Gruvbox themes for DeepSeek Harness with a preview picker, persisted selection, and system light/dark following. |
| 261 | [laiyouxing/dsh-session-budget](https://github.com/laiyouxing/dsh-session-budget) | 0 | 2026-11-10 | 2026-11-10 | Per-session token, cost and wall-clock budgets for DeepSeek Harness that stop the model session at the limit, plus a DeepSeek peak/off-peak schedule. |
| 262 | [laoola/dsh-notify-inline](https://github.com/laoola/dsh-notify-inline) | 0 | 2026-10-19 | 2026-11-10 | DSH 统一状态通知插件：按页面可见性路由前台横幅/后台系统通知，支持页内裁决（替代 dsh-notify-me） |
| 263 | [lark980-web/FloatCard](https://github.com/lark980-web/FloatCard) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: hang follow-up questions as floating cards on a clothesline above the window |
| 264 | [lcf2212dev/dsh-bits](https://github.com/lcf2212dev/dsh-bits) | 0 | 2026-11-09 | 2026-11-10 | Bots for DeepSeek Harness: named AI teammates with persona, workspace, optional Docker VM, scheduling and desktop reminders |
| 265 | [lcf2212dev/dsh-claude-delegate](https://github.com/lcf2212dev/dsh-claude-delegate) | 0 | 2026-11-10 | 2026-11-10 | claude_delegate: one DeepSeek Harness tool that delegates to the host Claude Code CLI with per-call model and effort (no pinned SDK). |
| 266 | [lcf2212dev/dsh-figma-mcp-oauth](https://github.com/lcf2212dev/dsh-figma-mcp-oauth) | 0 | 2026-11-10 | 2026-11-10 | Connects Figma's MCP server with OAuth and bridges its design tools into the DeepSeek Harness agent. |
| 267 | [lcf2212dev/dsh-plugin-index](https://github.com/lcf2212dev/dsh-plugin-index) | 0 | 2026-11-10 | 2026-11-10 | Plugin index (format 1) for DeepSeek Harness: installs these DSH bundles from the Discover tab. |
| 268 | [Leni-More/dsh-market-watching](https://github.com/Leni-More/dsh-market-watching) | 0 | 2026-11-10 | 2026-11-10 | DSH 侧栏行情卡片：加密货币、股票、外汇、黄金和指数的实时价格，可设置买入/做空价格与数量，实时显示盈亏金额；标的在 DSH 设置页里自选，无需登录。 |
| 269 | [lg320531124/dsh-declutter-ui](https://github.com/lg320531124/dsh-declutter-ui) | 0 | 2026-11-10 | 2026-11-10 | Declutter the DeepSeek Harness web UI: unfold the 5-row session list, collapse long tool-call runs behind one toggle, and fix the mobile sidebar drawer. |
| 270 | [liaoangbo-droid/dsh-notewall](https://github.com/liaoangbo-droid/dsh-notewall) | 0 | 2026-11-10 | 2026-11-10 | 便签墙 (NoteWall) — a sticky-notes wall for DeepSeek Harness: rich text, images, freehand ink, auto pastel colors, drag-to-reorder, hover preview, per-note alarms, one-click / scheduled delivery into any session, zh/en i18n. |
| 271 | [Libraqg/dsh-memories](https://github.com/Libraqg/dsh-memories) | 0 | 2026-11-10 | 2026-11-10 | Background long-term memory for DeepSeek Harness, ported from the Codex two-phase memory pipeline. |
| 272 | [lichufeng123/dsh-test-workbench](https://github.com/lichufeng123/dsh-test-workbench) | 0 | 2026-11-10 | 2026-11-10 | Open-source DSH test execution workbench: manual and AI results, step evidence, execution history, and reports. |
| 273 | [LiFePO2/dsh-handoff-hub](https://github.com/LiFePO2/dsh-handoff-hub) | 0 | 2026-11-10 | 2026-11-10 | Simultaneous handoff-document sync for independent DeepSeek Harness sessions. |
| 274 | [light-cheng/DSH-Translate](https://github.com/light-cheng/DSH-Translate) | 0 | 2026-11-10 | 2026-11-10 | English translation and learning plugin for DeepSeek Harness: bilingual reasoning, selection translation, composer polish, offline dictionary, pronunciation, vocabulary notebook |
| 275 | [Limsanity/dsh-video-summary](https://github.com/Limsanity/dsh-video-summary) | 0 | 2026-11-10 | 2026-11-10 | 为 DSH Web GUI 加一个视频总结面板：粘链接即转录（B站/YouTube，MLX 或 CPU Whisper）并生成带时间轴的总结，按条归档。A video-summary panel for the DSH Web GUI: paste a link, get a timestamped transcript and summary, keep every record. |
| 276 | [Lion2c/dsh-scissors](https://github.com/Lion2c/dsh-scissors) | 0 | 2026-11-10 | 2026-11-10 | dsh-plugin |
| 277 | [liruizhe/dsh-file-download](https://github.com/liruizhe/dsh-file-download) | 0 | 2026-11-10 | 2026-11-10 | DSH Host 插件：新增 /api/dl 下载路由，按真实文件名交付（补 /api/file 下载变 file.xxx 的短板 |
| 278 | [liuda1999/dsh-voice-mode-headless](https://github.com/liuda1999/dsh-voice-mode-headless) | 0 | 2026-11-10 | 2026-11-10 | 把闲置设备变成「只靠说话」的常驻智能体 · Turn an idle machine into a voice-only agent box — no screen, no keyboard. With gratitude to qishuilalala/dsh-voice-mode |
| 279 | [liuhange789/dsh-mcp-lazy](https://github.com/liuhange789/dsh-mcp-lazy) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: on-demand MCP tool loading - keeps only your core MCP tools in the prompt prefix, loads the rest via lazy_load_tool. |
| 280 | [LiuQhahah/dsh-commit-review](https://github.com/LiuQhahah/dsh-commit-review) | 0 | 2026-11-09 | 2026-11-10 | Read-only commit review sidebar tab for DeepSeek Harness: commits grouped by repository, each expandable to its per-file diff. |
| 281 | [liush2yuxjtu/dsh-artifacts-extension](https://github.com/liush2yuxjtu/dsh-artifacts-extension) | 0 | 2026-10-21 | 2026-11-10 | DeepSeek Harness (DSH) artifacts plugin: a read-only artifact library sidebar with /artifact-create, /artifact-store and /artifact-tweak commands. MIT licensed. |
| 282 | [liush2yuxjtu/dsh-channels](https://github.com/liush2yuxjtu/dsh-channels) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness (DSH) plugin for team chat and persistent AI mission threads. Mention @deepseek to run an agent with channel memory and native TODOs. |
| 283 | [liush2yuxjtu/dsh-sidebar-history](https://github.com/liush2yuxjtu/dsh-sidebar-history) | 0 | 2026-11-09 | 2026-11-10 | DeepSeek Harness (DSH) sidebar plugin with TODO progress, latest assistant reply previews and searchable chat history. DSH 历史侧栏插件：任务进度、最新回复预览与会话搜索。 |
| 284 | [liush2yuxjtu/dsh-slack](https://github.com/liush2yuxjtu/dsh-slack) | 0 | 2026-11-10 | 2026-11-10 | DSH Slack UI: Slack-style session threads, chat history, assistant summaries, and TODO progress for DeepSeek Harness. Real API demos and bilingual installation guides. |
| 285 | [lizi600jin/dsh-ensp](https://github.com/lizi600jin/dsh-ensp) | 0 | 2026-11-10 | 2026-11-10 | Automate Huawei eNSP labs: generate .topo files, start and stop devices through the eNSP GUI, and push VRP configuration one command at a time with per-command error reporting. 12 MCP tools, 23 scenario presets. |
| 286 | [LizzzMax/dsh-lean-context](https://github.com/LizzzMax/dsh-lean-context) | 0 | 2026-11-08 | 2026-11-10 | DSH Lean Context — local tool search and preselection for DeepSeek Harness |
| 287 | [lmy060307/dsh-mail-bridge](https://github.com/lmy060307/dsh-mail-bridge) | 0 | 2026-11-10 | 2026-11-10 | 让agent连接您的邮箱，替您发送或接收邮件 |
| 288 | [lniev/dsh-mysql-assistant](https://github.com/lniev/dsh-mysql-assistant) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件 · MySQL 学习助手：83 个通俗知识点 + 可点击知识地图 + 学习路线 + 8 个企业级实战 + 内置电商库与自动判题的 SQL 操练场 + 真实 MySQL 环境切换 + AI 问答。 |
| 289 | [lotuc/dsh-attach](https://github.com/lotuc/dsh-attach) | 0 | 2026-10-19 | 2026-11-10 | Attach a terminal UI to a **running** DeepSeek Harness host. |
| 290 | [LouXiaXiaoHei/dsh-chrome-bridge](https://github.com/LouXiaXiaoHei/dsh-chrome-bridge) | 0 | 2026-11-10 | 2026-11-10 | codex 同款 dsh chrome 操作：@ 提及真实 Chrome 标签页，用可信输入点击、输入、拖拽 |
| 291 | [luffy2507/dsh-screenshot](https://github.com/luffy2507/dsh-screenshot) | 0 | 2026-11-10 | 2026-11-10 | A manual screenshot button for the DeepSeek Harness composer. Windows only. |
| 292 | [luk-Henry/dsh-fuse](https://github.com/luk-Henry/dsh-fuse) | 0 | 2026-11-08 | 2026-11-10 | 为 DeepSeek Harness 兜底的花费熔断：单轮 / 每小时 / 每日三道阈值，越线先降档、再问人、最后才停。 |
| 293 | [luk-Henry/dsh-game-magic](https://github.com/luk-Henry/dsh-game-magic) | 0 | 2026-11-09 | 2026-11-10 | 在 DSH 侧边栏经营一间中世纪魔法商店：挂机挣钱、装修店铺、招待客人。 |
| 294 | [lunanfo/dsh-infuse-companion](https://github.com/lunanfo/dsh-infuse-companion) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: auto-pause Infuse when an AI session needs your review |
| 295 | [lwlwilliam/dsh-plugin-session-http-log](https://github.com/lwlwilliam/dsh-plugin-session-http-log) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 会话 HTTP 日志插件 |
| 296 | [lxclinux/dsh-tencent-docs](https://github.com/lxclinux/dsh-tencent-docs) | 0 | 2026-11-10 | 2026-11-10 | Tencent Docs in the DSH left sidebar: recent files, drill-down folder tree, title search, over the official MCP endpoint. |
| 297 | [lybxkl/dsh-personal-butler](https://github.com/lybxkl/dsh-personal-butler) | 0 | 2026-11-10 | 2026-11-10 | deepseek harness 私人账单管家 |
| 298 | [lym2128094758/my-skill-library](https://github.com/lym2128094758/my-skill-library) | 0 | 2026-11-08 | 2026-11-10 | Local Skill library with an interactive relationship graph. |
| 299 | [lzlrt/dsha-desktop-link](https://github.com/lzlrt/dsha-desktop-link) | 0 | 2026-11-10 | 2026-11-10 | DSH sidebar button: open the desktop DSH Web GUI from DSHA on your phone, in one tap. |
| 300 | [M0Yun/dsh-skills-card](https://github.com/M0Yun/dsh-skills-card) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 左侧边栏「技能」面板：列出本机所有 skill（内置/频道/用户/profile），点开查看 SKILL.md 的 frontmatter 配置与正文预览，支持搜索。 |
| 301 | [ma1833577561/dsh-plugin-voice-autosend](https://github.com/ma1833577561/dsh-plugin-voice-autosend) | 0 | 2026-11-10 | 2026-11-10 | Offline voice input for the DeepSeek Harness composer: speak, transcribe locally with SenseVoice, send automatically. |
| 302 | [magiceric/dsh-skin-magiclab](https://github.com/magiceric/dsh-skin-magiclab) | 0 | 2026-11-10 | 2026-11-10 | Five switchable interface skins for DeepSeek Harness, each with its own animated boot sequence and sound design. |
| 303 | [MasterLTX/dsh-session-icon](https://github.com/MasterLTX/dsh-session-icon) | 0 | 2026-11-10 | 2026-11-10 | Session Icon · 给工作区对话增加可视化的图标 — 关键词 → 会话内容 → 模型 → 工作区兜底，445 个 Ant Design 图标，设置页可调 |
| 304 | [MatthewTian2018/dsh-plugin-deepseek-balance](https://github.com/MatthewTian2018/dsh-plugin-deepseek-balance) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek 余额仪表盘 · DSH 插件：在 DeepSeek Harness 设置里查看余额、消耗速度与余额趋势 |
| 305 | [maverikhe-cpu/zhuangzai-dsh-workbench](https://github.com/maverikhe-cpu/zhuangzai-dsh-workbench) | 0 | 2026-11-10 | 2026-11-10 | 装仔交付管理工作台：一起装 MCP、10 项管理技能和场景入口。Zhuangzai construction delivery workbench for DeepSeek Harness. |
| 306 | [meiti-dev/healer-claude-plugin](https://github.com/meiti-dev/healer-claude-plugin) | 0 | 2026-11-10 | 2026-11-10 | Healer for Claude Code and any MCP agent: runs your tests in an isolated sandbox, repairs what fails, never makes it worse. |
| 307 | [melo7up/dsh-wait-reply](https://github.com/melo7up/dsh-wait-reply) | 0 | 2026-11-09 | 2026-11-10 | Holds a root turn open until its sub-agent results arrive, then continues in that same turn. |
| 308 | [mimiqiao/DSH-Dock](https://github.com/mimiqiao/DSH-Dock) | 0 | 2026-11-10 | 2026-11-10 | 成果工作台：自动整理、收藏、复用与回顾 DeepSeek Harness 成果，提供可视化桌面和 Dock。 |
| 309 | [Minus77/dsh-prompt-polish](https://github.com/Minus77/dsh-prompt-polish) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 提示词优化器：把一句话草稿改写成精准提示词，替换前逐行 diff 审阅、替换后 9 秒撤销，带版本历史、模板体系与中英双语界面。 |
| 310 | [modersetech/dsh-material-file-icons](https://github.com/modersetech/dsh-material-file-icons) | 0 | 2026-08-23 | 2026-11-10 | Material Icon Theme file &amp; folder icons for the DeepSeek Harness web GUI (dsh-better-sidebar) - 349 authentic SVGs, named folders with open variants, zero patching required |
| 311 | [monsterjakey/dsh-mobile-remote](https://github.com/monsterjakey/dsh-mobile-remote) | 0 | 2026-11-10 | 2026-11-10 | Mobile skin, pairing helper and tailscale serve reconciliation for the official DeepSeek Harness Web UI |
| 312 | [Mooling0602/dsh-bili-danmaku-overlay](https://github.com/Mooling0602/dsh-bili-danmaku-overlay) | 0 | 2026-11-10 | 2026-11-10 | Bilibili live danmaku as an always-visible overlay in the DSH Web UI. |
| 313 | [MoonightsZ/dsh-qqbot-dispatch](https://github.com/MoonightsZ/dsh-qqbot-dispatch) | 0 | 2026-11-09 | 2026-11-10 | 本插件是 @tencent-connect/dsh-qqbot 的社区补充，可向 QQ 机器人建立的群聊或私聊会话下发任务，并在 DSH 侧栏查看会话、管理可自定义的功能模组。 |
| 314 | [morefreeze/dsh-plugin-rss-pal](https://github.com/morefreeze/dsh-plugin-rss-pal) | 0 | 2026-11-10 | 2026-11-10 | Local-first RSS/Atom reader for DeepSeek Harness with full-text search, bulk read marking, on-demand AI summaries and native reading companion. |
| 315 | [MorzerChimes/dsh-session-float](https://github.com/MorzerChimes/dsh-session-float) | 0 | 2026-10-29 | 2026-11-10 | DeepSeek Harness（DSH）插件 / plugin：为 Web 界面提供活动会话灵动岛，支持状态汇总、一键切换和历史会话。 |
| 316 | [MosesMuxiXie/dsh-daily-brief](https://github.com/MosesMuxiXie/dsh-daily-brief) | 0 | 2026-11-08 | 2026-11-10 | Daily briefing plugin for DeepSeek Harness: watched X accounts, RSS/Atom feeds, YouTube/Bilibili, Steam, Minecraft servers, mailboxes and calendars, rendered per persona with a scheduled Windows desktop popup. |
| 317 | [mouse33333/dsh-pinyin-annotation](https://github.com/mouse33333/dsh-pinyin-annotation) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness bundle for GB/T 16159-2012 + HSK pinyin annotation: the pinyin-annotation skill, installable as a plugin. |
| 318 | [mr-pounds/dsh-agent-team-policy](https://github.com/mr-pounds/dsh-agent-team-policy) | 0 | 2026-11-10 | 2026-11-10 | A dsh plugin that decides when the agent may spawn subagents or teammates: adversarial review and one-shot context reading only. |
| 319 | [MrKillerBad/dsh-phone-gateway](https://github.com/MrKillerBad/dsh-phone-gateway) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness LAN gateway: let a phone reach the DSH running on your computer, over Wi-Fi, with a native Android app |
| 320 | [mryouyouHK/youyou-window-drag](https://github.com/mryouyouHK/youyou-window-drag) | 0 | 2026-11-10 | 2026-11-10 | Adds an invisible draggable strip along the top edge of the macOS desktop window so the whole window moves when you press and drag there, fixing chrome rows that overlapping no-drag boxes had left undraggable. |
| 321 | [mujiannan/dsh-synced-tabs](https://github.com/mujiannan/dsh-synced-tabs) | 0 | 2026-11-10 | 2026-11-10 | Cross-device session tabs for the DeepSeek Harness (DSH) Web GUI: one shared set of open sessions across every device, with workspace grouping, status dots and a phone-first bottom bar. |
| 322 | [mycherish/dsh-orbis](https://github.com/mycherish/dsh-orbis) | 0 | 2026-11-10 | 2026-11-10 | Caelum Orbis（环枢）— always-on 3D agent status HUD and execution visualizer for DeepSeek Harness |
| 323 | [mznxbcvsdc/dsh-shot-send](https://github.com/mznxbcvsdc/dsh-shot-send) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness (DSH) 桌面端截图提问：框选屏幕任意区域，图片直接落进当前会话输入框，全程内存完成不产生本地文件。 |
| 324 | [NanamiKite/dsh-usage-center](https://github.com/NanamiKite/dsh-usage-center) | 0 | 2026-11-10 | 2026-11-10 | 面向 DeepSeek Harness (DSH) 的一站式 LLM 用量与成本中心：集成多维度 Token 统计、多 Provider 计费引擎、SQLite 幂等账本、上下文窗口监控，支持 Dashboard、CLI 与 Agent Tools。 |
| 325 | [nikimagic/dsh-local-stt](https://github.com/nikimagic/dsh-local-stt) | 0 | 2026-11-10 | 2026-11-10 | Локальные провайдеры GigaAM v3 и whisper.cpp для штатного голосового ввода DeepSeek Harness |
| 326 | [Noext/dsh-browser](https://github.com/Noext/dsh-browser) | 0 | 2026-11-10 | 2026-11-10 | A real Chromium in the DeepSeek Harness right sidebar: the agent drives it, and you can take over to sign in. |
| 327 | [Nuke0519/dsh-status-box](https://github.com/Nuke0519/dsh-status-box) | 0 | 2026-11-10 | 2026-11-10 | macOS menu-bar status + quick task capture for DeepSeek Harness |
| 328 | [oceanjustinlin/xuanxue-dsh](https://github.com/oceanjustinlin/xuanxue-dsh) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness (dsh) plugin: 八字/紫微/奇门/星盘 via xuanxue-mcp |
| 329 | [onoderakeita/dsh-gitbash-win](https://github.com/onoderakeita/dsh-gitbash-win) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: use Git for Windows bash as the agent shell on Windows. Additive: the official PowerShell executor and tools stay intact. |
| 330 | [otonemame/dsh-collapse-guard](https://github.com/otonemame/dsh-collapse-guard) | 0 | 2026-11-10 | 2026-11-10 | Abort a collapsing LLM stream: trip on repeated short lines and end the step as a provider failure so the garbage never reaches the model's visible history. |
| 331 | [oxmumu3/dsh-plugin-lessons](https://github.com/oxmumu3/dsh-plugin-lessons) | 0 | 2026-11-10 | 2026-11-10 | 做 DeepSeek Harness（DSH）插件的经验：踩过的坑和好做法，每条带版本和证据。社区项目，非官方。 |
| 332 | [PaangGaaSam/dsh-persona-memory](https://github.com/PaangGaaSam/dsh-persona-memory) | 0 | 2026-11-10 | 2026-11-10 | Daily cross-workspace session digest that grows a user profile and a companion personality, gated by evidence, and injects both into every prompt. |
| 333 | [panchongyang/dsh-stateboard](https://github.com/panchongyang/dsh-stateboard) | 0 | 2026-11-07 | 2026-11-10 | Durable project state machine + task board for DeepSeek Harness (DSH) |
| 334 | [physics31415926/fl-plugin-upgrade-workflow](https://github.com/physics31415926/fl-plugin-upgrade-workflow) | 0 | 2026-09-24 | 2026-11-10 | Configurable vLLM Plugin FL upgrade workflow with parallel backend validation and local dashboard |
| 335 | [phzt-hub/dsh-workspace-lock](https://github.com/phzt-hub/dsh-workspace-lock) | 0 | 2026-11-09 | 2026-11-10 | 给 DSH 工作区文件夹加界面密码锁：锁定后侧栏收起、里面的会话全部隐藏，支持 QQ 邮箱找回密码。 |
| 336 | [PluieM/dsh-request-injector](https://github.com/PluieM/dsh-request-injector) | 0 | 2026-11-09 | 2026-11-10 | A DSH (DeepSeek Harness) plugin that injects custom HTTP headers into downstream model requests, matched by provider / model / host. Header values may contain \`${variable}\` placeholders, evaluated only when the request is actually sent. |
| 337 | [poluce/dsh-chat-embed](https://github.com/poluce/dsh-chat-embed) | 0 | 2026-11-10 | 2026-11-10 | Multi-tab AI chat panel for the DeepSeek Harness desktop app: DeepSeek, 豆包, ChatGPT, MiniMax, Kimi, Gemini and Grok, each in its own webview and login partition |
| 338 | [polza-ai/dsh-plugin-polza](https://github.com/polza-ai/dsh-plugin-polza) | 0 | 2026-11-10 | 2026-11-10 | Polza.ai для DeepSeek Harness: 290+ моделей с оплатой в рублях, вход через аккаунт Пользы, баланс и выбор моделей |
| 339 | [pomelotea-yuzu/dsh-cona](https://github.com/pomelotea-yuzu/dsh-cona) | 0 | 2026-11-10 | 2026-11-10 | Scaffold for a planned DeepSeek Harness (DSH) plugin: checkpoints, controlled delivery and file rollback. Spun off from the sealed Cona prototype — plain Node ESM, cross-platform, no in-house sandbox. Currently docs, specs and repository gates only; no plugin code yet. MIT. |
| 340 | [postdovo/dsh-postdovo](https://github.com/postdovo/dsh-postdovo) | 0 | 2026-10-30 | 2026-11-10 | DeepSeek Harness (dsh) plugin that connects the agent to PostDovo, so it can draft, schedule and publish social media posts on your connected accounts. |
| 341 | [Pourii83/dsh-account-usage](https://github.com/Pourii83/dsh-account-usage) | 0 | 2026-11-10 | 2026-11-10 | Show the DeepSeek account credit as plain text in the DSH composer status row. |
| 342 | [Pourii83/dsh-rtl-vazirmatn](https://github.com/Pourii83/dsh-rtl-vazirmatn) | 0 | 2026-11-10 | 2026-11-10 | Right-to-left layout with the bundled Vazirmatn typeface for the DeepSeek Harness web UI |
| 343 | [Pourii83/dsh-workspace-colors](https://github.com/Pourii83/dsh-workspace-colors) | 0 | 2026-11-10 | 2026-11-10 | Set a custom color for each workspace in the DeepSeek Harness sidebar. |
| 344 | [publora-team/dsh-publora](https://github.com/publora-team/dsh-publora) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin for Publora: draft, schedule and publish social media posts from your agent. |
| 345 | [QLX-Hub/dsh-config](https://github.com/QLX-Hub/dsh-config) | 0 | 2026-11-10 | 2026-11-10 | DSH 配置 |
| 346 | [qlzhj03/dsh-plugin-agnes](https://github.com/qlzhj03/dsh-plugin-agnes) | 0 | 2026-11-10 | 2026-11-10 | Free Agnes text, image, and video generation plugin for DSH (DeepSeekRuntime): one tool, in-chat previews, and persistent media history. |
| 347 | [Rearpoem/dsh-link-start](https://github.com/Rearpoem/dsh-link-start) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: an anime-style Link Start startup splash that shows your DSH status. Unofficial fan work. |
| 348 | [Ricardozhuyuyu/dsh-trip-log](https://github.com/Ricardozhuyuyu/dsh-trip-log) | 0 | 2026-11-10 | 2026-11-10 | Turns a folder of trip notes into a timeline, route map, word cloud and photo album — a DeepSeek Harness UI plugin. |
| 349 | [rightnowrose/dsh-ai-fastvideo](https://github.com/rightnowrose/dsh-ai-fastvideo) | 0 | 2026-11-10 | 2026-11-10 | AI 速成视频（DSH 插件）——341 种风格提示词，一句话生成视频：每个场景对应一个 Canvas 页面，逐帧渲染，TTS + BGM + SFX。 |
| 350 | [rockyzhz/dsh-signal-blue-theme](https://github.com/rockyzhz/dsh-signal-blue-theme) | 0 | 2026-11-09 | 2026-11-10 | 给 dsh 设计的瑞士风配色主题：信号蓝 #1B3BFF |
| 351 | [rosemary-ewe/dsh-blunt-dev](https://github.com/rosemary-ewe/dsh-blunt-dev) | 0 | 2026-11-09 | 2026-11-10 | Injects a blunt senior-developer speaking style into every DSH agent session: drops essay headings, bold and emoji spam, unsolicited quotes and closing elevation. |
| 352 | [sanmumu-325/dsh-qwenwork-models](https://github.com/sanmumu-325/dsh-qwenwork-models) | 0 | 2026-11-10 | 2026-11-10 | 把千问办公（QwenWork）的对话模型接入 DeepSeek Harness。非官方本地集成，仅限本人账号自用。 |
| 353 | [SAS-159/dsh-session-recap](https://github.com/SAS-159/dsh-session-recap) | 0 | 2026-11-10 | 2026-11-10 | Turn any DeepSeek Harness session into a shareable recap card: turns, tools, tokens, cache hit rate and peak/off-peak cost. |
| 354 | [sefanty17/dsh-thinking-compact](https://github.com/sefanty17/dsh-thinking-compact) | 0 | 2026-11-09 | 2026-11-10 | Compress an agent's historical reasoning chains into a first-person recap card; tool calls and results stay byte-identical. / 把 agent 的历史思考链压成第一人称缩句卡片，工具调用与结果原文不动。 |
| 355 | [SFlyee/dsh-computer-use-fixes](https://github.com/SFlyee/dsh-computer-use-fixes) | 0 | 2026-11-10 | 2026-11-10 | 基于 988hj7tczd-oss/dsh-computer-use (MIT)的插件社区修复分支：独立虚拟光标、Chromium CDP 通道、常驻 MCP 引擎通道、元素优先点击，13 个工具。 |
| 356 | [ShadowTang98/dsh-qa-isolation](https://github.com/ShadowTang98/dsh-qa-isolation) | 0 | 2026-11-10 | 2026-11-10 | DSH bundle + Q&amp;A agent preset: every new question is answered from a clean context, with a /qa switch and a composer toggle. |
| 357 | [shafuneko/dsh-disclosure-tweaks](https://github.com/shafuneko/dsh-disclosure-tweaks) | 0 | 2026-08-25 | 2026-11-10 | Auto-expand/collapse DSH conversation disclosure rows (Think, tool calls, context, todo, queue) with per-type Settings toggles. Manual toggles are never overridden. |
| 358 | [shafuneko/dsh-nothing-skin](https://github.com/shafuneko/dsh-nothing-skin) | 0 | 2026-08-25 | 2026-11-10 | Nothing Phone style skin for DeepSeek Harness — dot-matrix background, Space Grotesk/Mono, monochrome + signal red, per-feature Settings toggles |
| 359 | [shantanugoel/dsh-agent-browser](https://github.com/shantanugoel/dsh-agent-browser) | 0 | 2026-08-24 | 2026-11-10 | DSH Plugin for using Agent Browser / Browser Control |
| 360 | [shantanugoel/dsh-web-degoog](https://github.com/shantanugoel/dsh-web-degoog) | 0 | 2026-08-24 | 2026-11-10 | DeepSeek Harness bundle: web_search + SSRF-guarded web_fetch backed by any self-hosted degoog instance |
| 361 | [ShawnZhangGy/dsh-plugin-prompt-history](https://github.com/ShawnZhangGy/dsh-plugin-prompt-history) | 0 | 2026-11-10 | 2026-11-10 | DSH Web plugin: recall previously sent prompts in the composer with a rebindable shortcut and a clickable history panel. |
| 362 | [shijiezhiai/dsh-zhihu](https://github.com/shijiezhiai/dsh-zhihu) | 0 | 2026-11-10 | 2026-11-10 | 知乎热榜/推荐/搜索 + 站内阅读 + 面板内讨论 + 一键存 Obsidian，DeepSeek Harness 插件 |
| 363 | [sidleo/dsh-browser-plus](https://github.com/sidleo/dsh-browser-plus) | 0 | 2026-11-10 | 2026-11-10 | DSH 插件：把 Chrome/Edge 登录 Cookie 通过本机 CDP 调试桥注入 DSH 内置浏览器（右侧栏 Browser 标签），免重复登录 |
| 364 | [sif-king/costgate](https://github.com/sif-king/costgate) | 0 | 2026-06-28 | 2026-11-10 | 多 Agent 编排中枢：把 Codex / Cursor / Hermes / DSH 等 AI 编程代理当员工统一管理——协议转换、成本台账、熔断、任务编排与 Web 面板。不是模型切换器，切的是活。 |
| 365 | [sijunmanyue/dsh-plugin-account-manager](https://github.com/sijunmanyue/dsh-plugin-account-manager) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness account manager: company and personal system accounts in one local JSON file, with environment grouping and search. |
| 366 | [sijunmanyue/dsh-plugin-ldap-viewer](https://github.com/sijunmanyue/dsh-plugin-ldap-viewer) | 0 | 2026-11-10 | 2026-11-10 | Read-only LDAP / Active Directory account viewer for the DeepSeek Harness Web UI. |
| 367 | [sijunmanyue/dsh-plugin-sql-manager](https://github.com/sijunmanyue/dsh-plugin-sql-manager) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness SQL Manager plugin: reusable SQL per system, each with its own required JSON path, searchable by note, table, and field. |
| 368 | [siriusyang91/dsh-astro-plan](https://github.com/siriusyang91/dsh-astro-plan) | 0 | 2026-11-09 | 2026-11-10 | dsh repository |
| 369 | [SiskonEmilia/dsh-model-cost](https://github.com/SiskonEmilia/dsh-model-cost) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: per-session and global model spend, priced by the LiteLLM cost map with peak/off-peak windows. |
| 370 | [sixiyueyai/dsh-qwen-paint](https://github.com/sixiyueyai/dsh-qwen-paint) | 0 | 2026-11-10 | 2026-11-10 | (绘图) 让 DeepSeek Harness 在对话里直接调本机 ComfyUI 画图：千问 / MOSS-Image / Krea 2 三模型一键切换，纯本地不出网 |
| 371 | [sixzjd/dsh-usage-dashboard](https://github.com/sixzjd/dsh-usage-dashboard) | 0 | 2026-10-10 | 2026-11-10 | Local usage statistics for DeepSeek Harness: token consumption, request count, cache hit rate and estimated cost as a native settings section. |
| 372 | [skillpie/dsh-plugins](https://github.com/skillpie/dsh-plugins) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness Plugins |
| 373 | [skyrocks/dsh-session-trash](https://github.com/skyrocks/dsh-session-trash) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: 右键删除会话，先移入回收站，可撤销与恢复 |
| 374 | [SmartRead666/dsh-xhs-pipeline](https://github.com/SmartRead666/dsh-xhs-pipeline) | 0 | 2026-11-10 | 2026-11-10 | 小红书内容流水线 DSH 插件：12 套 3:4 图文模板、定时发布、状态同步、合规自检、评论私信监测 |
| 375 | [sole373/dsh-token-usage](https://github.com/sole373/dsh-token-usage) | 0 | 2026-10-21 | 2026-11-10 | Token usage analytics and model capability leaderboard for DeepSeek Harness - privacy-first, local session logs only. |
| 376 | [SonicloudTech/dsh-sonicloud-device](https://github.com/SonicloudTech/dsh-sonicloud-device) | 0 | 2026-11-09 | 2026-11-10 | Deepseek Harness 声云设备插件 |
| 377 | [sorchk/dsh-event-notice](https://github.com/sorchk/dsh-event-notice) | 0 | 2026-11-08 | 2026-11-10 | DSH 事件通知插件。当任务完成、任务中断、需要审批、需要回答问题时，把通知发到你配置的 Ntfy 、Gotify、或通用 Webhook 。 |
| 378 | [sorooy/dsh-read-aloud](https://github.com/sorooy/dsh-read-aloud) | 0 | 2026-11-10 | 2026-11-10 | Reads DeepSeek Harness replies aloud with MiniMax voices |
| 379 | [SouleyMoni1/dsh-tool-database](https://github.com/SouleyMoni1/dsh-tool-database) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 数据库插件：SQL Server / PostgreSQL / MySQL 查询与执行，内置数据库面板 |
| 380 | [stallenlu/dsh-steward](https://github.com/stallenlu/dsh-steward) | 0 | 2026-11-10 | 2026-11-10 | Guardian for DeepSeek Harness: read-only health check plus an explicitly authorized action layer (plan, fingerprint, confirm, audit). |
| 381 | [startime-ltk/dsh-handover](https://github.com/startime-ltk/dsh-handover) | 0 | 2026-11-08 | 2026-11-10 | DSH（DeepSeek Harness）交接 / 配置项目（JavaScript） |
| 382 | [ste1lifex/BOM_assitant](https://github.com/ste1lifex/BOM_assitant) | 0 | 2026-11-10 | 2026-11-10 | LCSC/JLCPCB part finder + BOM cost auditor for DeepSeek Harness (DSH plugin) |
| 383 | [SternChiri/dsh-panel-tidy](https://github.com/SternChiri/dsh-panel-tidy) | 0 | 2026-11-10 | 2026-11-10 | 侧栏面板自由拖动：长按拖到任意位置排序，拖进「更多」即收纳、拖出即放回 \| Sidebar panel organizer for DeepSeek Harness |
| 384 | [stevenjj33/dsh-obsidian-skills](https://github.com/stevenjj33/dsh-obsidian-skills) | 0 | 2026-11-10 | 2026-11-10 | Agent skills for Obsidian, packaged as a DeepSeek Harness plugin bundle. Vendored from https://github.com/kepano/obsidian-skills (MIT). |
| 385 | [sundusk/dsh-mac-pet](https://github.com/sundusk/dsh-mac-pet) | 0 | 2026-08-14 | 2026-11-10 | DSH Pet: macOS desktop companion and dsh-mac-pet bridge plugin for DeepSeek Harness |
| 386 | [SunneeYang/LogicMargin](https://github.com/SunneeYang/LogicMargin) | 0 | 2026-11-03 | 2026-11-10 | Review source-backed logic diagrams with human annotations, agent replies, and resumable review rounds. |
| 387 | [SunnyRad/dsh-a-share-toolkit](https://github.com/SunnyRad/dsh-a-share-toolkit) | 0 | 2026-11-10 | 2026-11-10 | Offline A-share valuation-percentile and financial-statement checkups for DeepSeek Harness. Bring your own data; never fetches quotes. |
| 388 | [sunqing975/dsh-email-monitor](https://github.com/sunqing975/dsh-email-monitor) | 0 | 2026-11-09 | 2026-11-10 | 基于 dsh-email 的 DSH 多邮箱助手：支持 QQ、163、企业邮箱等邮件接入，新增邮件监控、AI 摘要与回复建议；自动监控首期开放 163 IMAP。 |
| 389 | [sunrulin123/dsh-snap](https://github.com/sunrulin123/dsh-snap) | 0 | 2026-11-10 | 2026-11-10 | 装插件搞崩，一键回到装前。Pre-install snapshots + external one-click restore for DeepSeek Harness (DSH) plugins. Unofficial community project. |
| 390 | [Sunshow/dsh-quick-actions](https://github.com/Sunshow/dsh-quick-actions) | 0 | 2026-11-10 | 2026-11-10 | Keyboard shortcuts for DeepSeek Harness: pull the current workspace, run custom shell commands, and open the action menu from the composer. · DSH 快捷键插件 |
| 391 | [super-ding/dsh-influxdb](https://github.com/super-ding/dsh-influxdb) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness 的 InfluxDB 2.x 插件：6 个智能体工具加一个侧边面板，可执行 Flux 查询、查看 schema 与 bucket、管理连接、写入 line protocol。 |
| 392 | [Sven-Mirana/dsh-recovery-right-wbr7](https://github.com/Sven-Mirana/dsh-recovery-right-wbr7) | 0 | 2026-11-10 | 2026-11-10 | 追偿权纠纷 R7 · DeepSeek Harness skill for Chinese recovery-right litigation |
| 393 | [TangUsers/dsh-session-title-convention](https://github.com/TangUsers/dsh-session-title-convention) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: rewrites automatic session titles into a configurable 【stage+status】workspace｜module｜MMDD｜brief convention. |
| 394 | [Taoidle/dsh-truenas](https://github.com/Taoidle/dsh-truenas) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin: manage one or more TrueNAS systems over the JSON-RPC WebSocket API, with agent tools and a settings page. |
| 395 | [TecFancy/dsh-lingualab](https://github.com/TecFancy/dsh-lingualab) | 0 | 2026-10-08 | 2026-11-10 | DSH plugin: 「语言实验室」— an intensive-listening panel that turns workspace audio plus subtitles into sentence-by-sentence practice, with notes written back to disk for the agent. ｜ DeepSeek Harness 精听面板插件：工作区里的音频配双语字幕，逐句循环、变速、随听记笔记。 |
| 396 | [tespio/dsh-report-card](https://github.com/tespio/dsh-report-card) | 0 | 2026-11-10 | 2026-11-10 | Independent dynamic benchmark for DSH plugins: boot delta, per-turn overhead, context tax, capability surface and risk flags - measured in a throwaway profile. |
| 397 | [tf961656585/dsh-plugin-pm-board](https://github.com/tf961656585/dsh-plugin-pm-board) | 0 | 2026-11-10 | 2026-11-10 | DSH sidebar board: turn-end decisions, open questions, and follow-ups in one kanban panel |
| 398 | [tf961656585/dsh-plugin-process-guard](https://github.com/tf961656585/dsh-plugin-process-guard) | 0 | 2026-11-10 | 2026-11-10 | Lists Playwright browsers and dev servers left running by agents, grouped by project, with a release button |
| 399 | [tf961656585/dsh-plugin-skill-manager](https://github.com/tf961656585/dsh-plugin-skill-manager) | 0 | 2026-11-10 | 2026-11-10 | Turn individual skills on or off from the DSH sidebar without editing skill files |
| 400 | [tf961656585/dsh-plugin-sync-delegate](https://github.com/tf961656585/dsh-plugin-sync-delegate) | 0 | 2026-11-10 | 2026-11-10 | Synchronous delegation for DSH: delegate one task, wait for the answer, and never lose a slow child on timeout |
| 401 | [tf961656585/dsh-plugin-user-persona](https://github.com/tf961656585/dsh-plugin-user-persona) | 0 | 2026-11-10 | 2026-11-10 | User persona for DSH: preset identities with weights, injected into the system prompt on every turn |
| 402 | [tiantangcao1980-web/kjds](https://github.com/tiantangcao1980-web/kjds) | 0 | 2026-11-10 | 2026-11-10 | 把 SeaLeap 两个技能库（602+195 个技能）打包成 DeepSeek Harness 插件，并附一个可复用的跨平台电商运营内核 ops-core |
| 403 | [Tinxyoo/dsh-file-mention](https://github.com/Tinxyoo/dsh-file-mention) | 0 | 2026-11-10 | 2026-11-10 | 为 DeepSeek Harness 右侧目录树面板文件，以及文件里选中的内容，提供可一键引用到输入框的功能。 |
| 404 | [tntfireage/dsh-systeminfo](https://github.com/tntfireage/dsh-systeminfo) | 0 | 2026-11-10 | 2026-11-10 | A DeepSeek Harness (DSH) plugin that turns the machine's vital signs into a live dashboard: overall / per-core CPU, memory, GPU, logged-in users, active processes, per-process energy and disk usage. |
| 405 | [TomJerryGit/dsh-approval-format](https://github.com/TomJerryGit/dsh-approval-format) | 0 | 2026-11-10 | 2026-11-10 | Article-style approval cards for DeepSeek Harness: safe Markdown, code details, risk badge, raw/copy views, keyboard decisions. |
| 406 | [TomJerryGit/dsh-quick-note](https://github.com/TomJerryGit/dsh-quick-note) | 0 | 2026-11-10 | 2026-11-10 | Local-first management console for DeepSeek Harness: notes, tasks, flashcards, health, agent tools, cost guard, cleanup, workspace value. |
| 407 | [trammels51/dsh-pause-button](https://github.com/trammels51/dsh-pause-button) | 0 | 2026-11-10 | 2026-11-10 | Minimal pause/resume button beside the DSH composer, with safe step-boundary pause and breakpoint resume. |
| 408 | [Trouvaille-xx/dsh-kb](https://github.com/Trouvaille-xx/dsh-kb) | 0 | 2026-11-10 | 2026-11-10 | Knowledge sources for DeepSeek Harness: local folders + configurable external tools, with traceable citations. |
| 409 | [turboYuu/dsh-us-stocks](https://github.com/turboYuu/dsh-us-stocks) | 0 | 2026-11-09 | 2026-11-10 | dsh插件-美股 |
| 410 | [Twi-ster/dsh-clock-radar](https://github.com/Twi-ster/dsh-clock-radar) | 0 | 2026-11-10 | 2026-11-10 | A DSH web plugin: seconds-precise wallpaper clock + pomodoro timer + Campus Radar DDL board in one sidebar entry. |
| 411 | [tyr1105/dsh-buddy](https://github.com/tyr1105/dsh-buddy) | 0 | 2026-11-06 | 2026-11-10 | 你的 OPC 专业团队。DeepSeek Harness 桌面版插件：像素办公室里看每位队友在做什么；谁能自己开工、一天最多自己花多少由你定；交代一句，负责人安排分工。 |
| 412 | [tyrantblue/dsh-trek-mcp](https://github.com/tyrantblue/dsh-trek-mcp) | 0 | 2026-11-10 | 2026-11-10 | TREK travel planner over MCP for DeepSeek Harness: Settings page for endpoint + machine-client id/secret, automatic OAuth tokens, idle-session recovery. |
| 413 | [ukkyo1/dsh-novel-reader](https://github.com/ukkyo1/dsh-novel-reader) | 0 | 2026-11-09 | 2026-11-10 | 在 DeepSeek Harness 的对话窗口里阅读本地 txt 小说：自动识别章节、一条消息读一章、发数字跳章、进度记忆、正文藏在思考里、可切换书库。 |
| 414 | [vaisramana/dsh-bookmark](https://github.com/vaisramana/dsh-bookmark) | 0 | 2026-11-10 | 2026-11-10 | Select text or tables in conversations to bookmark, highlight, and annotate in the right sidebar, with a collapsible all-sessions bookmark page. |
| 415 | [vector985/dsh-zen-garden](https://github.com/vector985/dsh-zen-garden) | 0 | 2026-11-10 | 2026-11-10 | Pixel zen-garden for DeepSeek Harness: grow plants, collect coins, live weather, agent tools. |
| 416 | [veritaswiki/dsh-caffeinate](https://github.com/veritaswiki/dsh-caffeinate) | 0 | 2026-11-10 | 2026-11-10 | Runs macOS caffeinate bound to the DSH host process with -w and exposes /keepawake to report and switch sleep-prevention modes. |
| 417 | [veritaswiki/dsh-macos-notifier](https://github.com/veritaswiki/dsh-macos-notifier) | 0 | 2026-11-10 | 2026-11-10 | Posts a macOS notification titled with the session name when a session finishes a turn; clicking it returns to that session. |
| 418 | [VictorGol/dsh-restart](https://github.com/VictorGol/dsh-restart) | 0 | 2026-11-10 | 2026-11-10 | A restart button beside the DeepSeek Harness Plugins page title: relaunches the app so plugin changes take effect. |
| 419 | [waizzie/dsh_papersearch](https://github.com/waizzie/dsh_papersearch) | 0 | 2026-11-10 | 2026-11-10 | Multi-source academic literature search plugin for DeepSeek Harness (Web of Science / CNKI / arXiv / Crossref), with a pluggable source registry and a sidebar panel. |
| 420 | [Wangmo-bit/DS-link](https://github.com/Wangmo-bit/DS-link) | 0 | 2026-11-04 | 2026-11-10 | DS-link — local session collaboration and bubble/card chat views for DeepSeek Harness. |
| 421 | [waning-sun/dsh-session-wake](https://github.com/waning-sun/dsh-session-wake) | 0 | 2026-11-10 | 2026-11-10 | 让 DSH 会话之间互相叫醒：开机自动唤醒指定会话（每间可单独指定 provider/model/思考强度），并给 AI 一个 session_task 工具做跨会话派活与回收结果。dsh-qq-wake 的继任者。 |
| 422 | [weiaisuyan/dsh-split-view](https://github.com/weiaisuyan/dsh-split-view) | 0 | 2026-11-10 | 2026-11-10 | Split the DSH main area into up to four panes, each with its own tab strip, composer and view switcher. Drag a tab to a pane edge to split. Bilingual (zh/en). |
| 423 | [wgrbiss-spec/dsh-colar-imagem-deepseek-harness](https://github.com/wgrbiss-spec/dsh-colar-imagem-deepseek-harness) | 0 | 2026-11-10 | 2026-11-10 | COLAR IMAGEM DEEPSEEK HARNESS — cola imagens da área de transferência no composer do DSH Desktop pelo menu do botão direito (Colar imagem), anexa ao rascunho e salva cópia em pasted-images/AAAA-MM-DD/. Paste clipboard images with the right-click menu. |
| 424 | [william-jin-cmu/dsh-global-launcher](https://github.com/william-jin-cmu/dsh-global-launcher) | 0 | 2026-11-10 | 2026-11-10 | A global hotkey that opens a small prompt bar from anywhere on your Mac and starts a DeepSeek Harness session with what you type. |
| 425 | [william-jin-cmu/dsh-native-runtimes](https://github.com/william-jin-cmu/dsh-native-runtimes) | 0 | 2026-11-10 | 2026-11-10 | Native Third-party Runtimes: let a DeepSeek Harness agent hand work to the Claude Code, Codex and ACP agents already installed on this machine, as threads it can follow up on. |
| 426 | [william-jin-cmu/dsh-screen](https://github.com/william-jin-cmu/dsh-screen) | 0 | 2026-11-10 | 2026-11-10 | Lets a DeepSeek Harness agent see what is on your screen right now, and (opt-in) remember what you looked at so it can answer "what was I doing". macOS, on-device. |
| 427 | [wisdom-km/dsh-territory-cursor](https://github.com/wisdom-km/dsh-territory-cursor) | 0 | 2026-11-10 | 2026-11-10 | 地盘光标（dsh-territory-cursor）。在一块屏幕或单屏的半边里列出窗口、截图，并对控件做左键或整段赋值。不移动系统鼠标。 |
| 428 | [wisdomzking/moyue-dsh-plugin](https://github.com/wisdomzking/moyue-dsh-plugin) | 0 | 2026-11-10 | 2026-11-10 | 墨阅 DSH 插件 - DeepSeek Harness 左侧栏电子书阅读器入口 + 本机 AI 章节导读代理 |
| 429 | [wk-xjd/dsh-plugin-taskflow](https://github.com/wk-xjd/dsh-plugin-taskflow) | 0 | 2026-11-10 | 2026-11-10 | TaskFlow for DeepSeek Harness: liquid-glass task list, per-task summaries, per-turn digests |
| 430 | [woaiCarlos/dsh-minimax-quota](https://github.com/woaiCarlos/dsh-minimax-quota) | 0 | 2026-11-10 | 2026-11-10 | Shows the remaining MiniMax coding-plan quota (5-hour window and weekly window) below the DeepSeek Harness chat composer, with the detail on click. |
| 431 | [wsy320/dsh-memory-vault](https://github.com/wsy320/dsh-memory-vault) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: dsh-memory-vault |
| 432 | [wsy320/dsh-ssh-exec](https://github.com/wsy320/dsh-ssh-exec) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: dsh-ssh-exec |
| 433 | [wuyetong-dev/dsh-guzheng-pond](https://github.com/wuyetong-dev/dsh-guzheng-pond) | 0 | 2026-11-06 | 2026-11-10 | DSH 插件：点一下，屏幕上就有一首古筝，脚边浮起一汪跟着声音起伏的水。子会话读乐理手册编曲，离线渲成 wav。 |
| 434 | [Ww-Cooooo/AI-carry-DSH](https://github.com/Ww-Cooooo/AI-carry-DSH) | 0 | 2026-11-10 | 2026-11-10 | AI Carry 的 DeepSeek Harness 原生插件：选用实例方法，投递材料，从真实成果审阅并保存学习。 |
| 435 | [www12456/dsh-plugin-whale](https://github.com/www12456/dsh-plugin-whale) | 0 | 2026-11-10 | 2026-11-10 | DSH 对话界面美化插件：余额粮仓、游动蓝鲸状态条、峰谷谷价、消遣小游戏与定时发送（官方风格，纯前端） |
| 436 | [wyk4447/dsh-diff-review](https://github.com/wyk4447/dsh-diff-review) | 0 | 2026-10-26 | 2026-11-10 | dsh的diff审核 |
| 437 | [wzuu/dsh-session-insights](https://github.com/wzuu/dsh-session-insights) | 0 | 2026-11-10 | 2026-11-10 | Real session token, cost, budget and CPU dashboard for DeepSeek Harness |
| 438 | [ximing-chat/dsh-chat-reply-coach](https://github.com/ximing-chat/dsh-chat-reply-coach) | 0 | 2026-11-10 | 2026-11-10 | A DSH plugin. |
| 439 | [Xin-zimu/dsh-plugin-visualize](https://github.com/Xin-zimu/dsh-plugin-visualize) | 0 | 2026-11-03 | 2026-11-10 | One DSH plugin, two renderers: sandboxed HTML fragments and openui-lang programs drawn as host components, behind a single visualize tool. |
| 440 | [xinstart-1/dsh-connect-huaweicloud](https://github.com/xinstart-1/dsh-connect-huaweicloud) | 0 | 2026-11-10 | 2026-11-10 | 把华为云果办 OfficeAce 接进 DeepSeek Harness：有客户端自动读登录态，没有就浏览器登录；多账号进池，可勾选、可切换、失败自动换号。 |
| 441 | [xinstart-1/dsh-connect-lingxi](https://github.com/xinstart-1/dsh-connect-lingxi) | 0 | 2026-11-09 | 2026-11-10 | DSH plugin: WPS Lingxi as a model provider — native tools/reasoning passthrough, credits, check-in, zero-paste login |
| 442 | [xinstart-1/dsh-connect-meoo](https://github.com/xinstart-1/dsh-connect-meoo) | 0 | 2026-11-10 | 2026-11-10 | 把秒悟 Meoo 的模型接进 DSH：API Key 一键登录、积分余额、模型目录对齐官网 |
| 443 | [xinstart-1/dsh-pet-skill](https://github.com/xinstart-1/dsh-pet-skill) | 0 | 2026-10-29 | 2026-11-10 | deepseek-harness的桌面pet宠物，内置各软件插件，让pet接管软件账号 |
| 444 | [xinstart-1/dsh-search-fusion](https://github.com/xinstart-1/dsh-search-fusion) | 0 | 2026-11-09 | 2026-11-10 | Multi-engine search fusion for DeepSeek Harness: lazy fusion, fallback, query cache, custom JSON/MCP engines (Tavily preset). |
| 445 | [xiongking/dsh-reverse-proxy-gateway](https://github.com/xiongking/dsh-reverse-proxy-gateway) | 0 | 2026-11-10 | 2026-11-10 | 把 DSH 的本地 Web 服务安全地反代到公网：固定监听端口、Basic Auth、免密链接、自动注入宿主会话 cookie，支持 WebSocket 与流式响应。 |
| 446 | [XIXI-Got/web-visual-editor](https://github.com/XIXI-Got/web-visual-editor) | 0 | 2026-11-09 | 2026-11-10 | Edit the page you already have: tweak text, styles, spacing and layout in place, let AI change only what you select, and write changes back to source. DSH plugin + standalone workbench. MIT. |
| 447 | [yagami-lightzxy/edugraph-learning](https://github.com/yagami-lightzxy/edugraph-learning) | 0 | 2026-11-10 | 2026-11-10 | EduGraph AI 学习模式 · DSH 插件：资料解析、知识图谱、学习计划、练习批改、间隔复习、外部 AI 课程包与面板内 AI 导师 |
| 448 | [yan92626/dsh-task-butler](https://github.com/yan92626/dsh-task-butler) | 0 | 2026-11-10 | 2026-11-10 | 任务管家（Task Butler）：DeepSeek Harness 的任务队列与执行看板插件 — 批量发布、自动领取、AI 日报、Webhook、定时复盘 |
| 449 | [yanboyang97/dsh-subscription-balance](https://github.com/yanboyang97/dsh-subscription-balance) | 0 | 2026-11-10 | 2026-11-10 | Unofficial DeepSeek Harness plugin: per-conversation balance and quota for DeepSeek, Kimi Code and OpenAI, plus local usage and priced estimates for every configured provider. |
| 450 | [yanming119/dsh-spectacles](https://github.com/yanming119/dsh-spectacles) | 0 | 2026-11-08 | 2026-11-10 | Let DSH open its eyes - read the window you point at, no screenshots, no uploads. |
| 451 | [ycAlphi/dsh-dokuwiki](https://github.com/ycAlphi/dsh-dokuwiki) | 0 | 2026-11-09 | 2026-11-10 | DokuWiki plugin for DeepSeek Harness: read/search/write wiki pages and upload media through native tools |
| 452 | [yhzsir/dsh-market-star-sort](https://github.com/yhzsir/dsh-market-star-sort) | 0 | 2026-11-10 | 2026-11-10 | Adds a Stars order to the DeepSeek Harness plugin Discover tab |
| 453 | [yjh248619/dsh-select-assist](https://github.com/yjh248619/dsh-select-assist) | 0 | 2026-11-10 | 2026-11-10 | 划词助手 · DSH 划词插件本地改造版（Windows）：解释/总结/翻译/问问，原生置顶浮窗，引用进会话 |
| 454 | [ymf2317-tech/dsh-price-mixer](https://github.com/ymf2317-tech/dsh-price-mixer) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: inject custom per-model prices into the models.dev book that dsh-context fetches (Est. Cost for self-hosted / proxied models), with a sidebar price editor. |
| 455 | [york0307/dsh-session-receipt](https://github.com/york0307/dsh-session-receipt) | 0 | 2026-11-10 | 2026-11-10 | Per-session receipt for DeepSeek Harness: a ledger of tool calls, files touched, failures and context usage. Zero-config, zero-dependency DSH plugin. |
| 456 | [Yornii/dsh-session-unfold](https://github.com/Yornii/dsh-session-unfold) | 0 | 2026-11-10 | 2026-11-10 | A DSH plugin: It unfolds all conversations into a simple card format, eliminating the need to switch between multiple conversations. 一个DSH插件：将所有会话展开平铺成简洁卡片形式，避免了在多个会话之间来回切换。 |
| 457 | [ysthink/dsh-session-manager](https://github.com/ysthink/dsh-session-manager) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin to browse, clean up and remove sessions by workspace, with a recycle bin. |
| 458 | [yuanstarstar/dsh-feiyu-commander](https://github.com/yuanstarstar/dsh-feiyu-commander) | 0 | 2026-11-10 | 2026-11-10 | 肥鱼指挥官：让 DSH 陪你打游戏的语音指挥插件——听得到游戏声和队友说话，也能对着麦克风开口；会 OCR 读盘面，必要时用 OBS 抓一帧。 |
| 459 | [Yukikaze-Ai/dsh-ladder-superagents](https://github.com/Yukikaze-Ai/dsh-ladder-superagents) | 0 | 2026-11-10 | 2026-11-10 | Deepseek Harness Superagents with Dispatch |
| 460 | [yuxiangwhn/dsh-chat-wallpaper](https://github.com/yuxiangwhn/dsh-chat-wallpaper) | 0 | 2026-11-10 | 2026-11-10 | Image wallpaper behind the DSH chat UI with frosted composer and bubbles, automatic blur when a conversation has content, and a frosted backdrop behind settings-style overlays. |
| 461 | [yuzhej523-maker/dsh-hongyi](https://github.com/yuzhej523-maker/dsh-hongyi) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: relay DSH status/tasks/commands/files to your phone via your own mailbox (IMAP/SMTP). No server needed. |
| 462 | [ZaykoFF/dsh-sound-alerts](https://github.com/ZaykoFF/dsh-sound-alerts) | 0 | 2026-11-10 | 2026-11-10 | DSH plugin: sound cues on the host machine - task completed, context compaction, question awaiting answer |
| 463 | [zeng5630/dsh-water-reminder](https://github.com/zeng5630/dsh-water-reminder) | 0 | 2026-11-06 | 2026-11-10 | Interval hydration reminders for the DeepSeek Harness Web GUI: floating water ball, toasts, and system notifications. |
| 464 | [zghehejun233/dsh-slurm](https://github.com/zghehejun233/dsh-slurm) | 0 | 2026-11-10 | 2026-11-10 | Slurm queue plugin for DeepSeek Harness |
| 465 | [zhaizhoux/dsh-cad-freecad](https://github.com/zhaizhoux/dsh-cad-freecad) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness plugin that turns a local FreeCAD installation into a safe, declarative CAD modeling backend: parametric solids, exact geometry reports, STEP/IGES/STL/BREP/SVG/DXF export, a standalone CLI and a local browser UI. |
| 466 | [Zhang-Eli/dsh-github-trending-masonry](https://github.com/Zhang-Eli/dsh-github-trending-masonry) | 0 | 2026-11-10 | 2026-11-10 | GitHub Trending in a flat masonry card panel for the DeepSeek Harness Web UI |
| 467 | [zhangyahao/dsh-longtask-guard](https://github.com/zhangyahao/dsh-longtask-guard) | 0 | 2026-11-10 | 2026-11-10 | Long-task guard for DeepSeek Harness: externalize bulky session history to project files and rescue reasoning-only turns. |
| 468 | [Zhao0335/dsh-conversation-retry](https://github.com/Zhao0335/dsh-conversation-retry) | 0 | 2026-11-10 | 2026-11-10 | Retry, edit-and-resend, and branch from any completed turn in the DeepSeek Harness Web UI. |
| 469 | [zhaoqianguo/dsh-session-trash](https://github.com/zhaoqianguo/dsh-session-trash) | 0 | 2026-11-10 | 2026-11-10 | Session trash bin for DeepSeek Harness: delete sessions into a recoverable bin, restore, purge, auto-expire, batch clean, capacity stats, and take over archived sessions. |
| 470 | [zhengbo2/dsh-glance](https://github.com/zhengbo2/dsh-glance) | 0 | 2026-11-10 | 2026-11-10 | A tiny always-on-top strip for DeepSeek Harness desktop — idle as one ball, working as a live pill. |
| 471 | [ZhongqiXiao/dsh-annotator](https://github.com/ZhongqiXiao/dsh-annotator) | 0 | 2026-11-05 | 2026-11-10 | DeepSeek Harness plugin: pick, annotate, comment and screenshot elements of a real Chrome/Edge page and hand locators to the agent |
| 472 | [zhounian6688-like/dsh-postman-desktop](https://github.com/zhounian6688-like/dsh-postman-desktop) | 0 | 2026-11-10 | 2026-11-10 | Postman-style HTTP workbench for DeepSeek Harness: collections, environments, request builder, response inspector, cURL import/export, plus an http_request_desktop agent tool. |
| 473 | [zhuifengqug/dsh-mantis](https://github.com/zhuifengqug/dsh-mantis) | 0 | 2026-11-06 | 2026-11-10 | 拒斧 (mantis) — 天枢系列插件（本地自建版） |
| 474 | [zhyunran/dsh-talk-mode](https://github.com/zhyunran/dsh-talk-mode) | 0 | 2026-11-10 | 2026-11-10 | Adds a tool-free Talk agent preset to DeepSeek Harness, keeping prompts small on limited plans. |
| 475 | [ZiMing-X/wishos-plan-book](https://github.com/ZiMing-X/wishos-plan-book) | 0 | 2026-11-10 | 2026-11-10 | Document-form plan task-book plugin for DeepSeek Harness (dsh): one entry skill + three tools (four-element check / task-book generator / self-check), protocol reference in-package. Apache-2.0. |
| 476 | [zmq6931/dsh-voice-ptt](https://github.com/zmq6931/dsh-voice-ptt) | 0 | 2026-11-10 | 2026-11-10 | Push-to-talk voice input for DeepSeek Harness: hold Right Ctrl, speak, and text appears in the composer while you talk (reuses the official Voice Input bundle's local SenseVoice model). |
| 477 | [ZoeHao2026/dsh-temporary-project](https://github.com/ZoeHao2026/dsh-temporary-project) | 0 | 2026-11-10 | 2026-11-10 | Temporary conversation option for the DeepSeek Harness Web GUI: one click creates a dedicated temporary project directory and starts an agent session without choosing a folder. |
| 478 | [ZSeven-W/dsh-xcode](https://github.com/ZSeven-W/dsh-xcode) | 0 | 2026-11-10 | 2026-11-10 | DeepSeek Harness (DSH) plugin for Apple's official Xcode MCP bridge (xcrun mcpbridge) &amp; Apple Skills — &lt;1s single-file compiler diagnostics, native SwiftUI #Preview rendering, warm scheme builds/tests, Apple docs search, and live pairing with dsh-ios. |
| 479 | [zuoyunlai/dsh-chronicle](https://github.com/zuoyunlai/dsh-chronicle) | 0 | 2026-11-10 | 2026-11-10 | 起居注：把 DeepSeek Harness 里的对话收口成可审、可检索、可关联的 Markdown 编年史 + 事实库。零第三方依赖。 |
| 480 | [zwx000908-dev/dsh-paper-si-audit](https://github.com/zwx000908-dev/dsh-paper-si-audit) | 0 | 2026-11-09 | 2026-11-10 | DeepSeek Harness 科研论文正文与补充信息数据核对插件，支持自定义格式、图像表格读取和 HRMS 精确质量复算。 |
| 481 | [zy-xyz/dsh-lcm](https://github.com/zy-xyz/dsh-lcm) | 0 | 2026-11-07 | 2026-11-10 | Lossless Context Management compaction engine for DeepSeek Harness — LLM leaf summaries over an append-only log, with lcm_expand/lcm_search recovery |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2239058652/dsh-codearts-connect
- 2239058652/dsh-loomy-connect
- 2239058652/dsh-meoo-connect
- AbyssWhalen/dsh-agent-bridge
- Adingo001/dsh-notification-desktop
- Archaofan/dsh-notify-relay
- AstralFoundry/dsh-workspace
- baigeiy/dsh-windows-notifications
- bandianliancha/feishu-workspace-bridge
- bychance6600/dsh-roost
- Cinnamobot/dsh-disclosure-tweaks
- Cinnamobot/dsh-nothing-skin
- daedalforge/dsh-monitor
- Echo-Smith/hy-memory4dsh
- game25011/dsh-notify-toast
- han0han0le0ni/dsh-daughter
- heyadhithya/fullstack-expert
- hualuo520-h/dsh-connect-scnet
- hualuo520-h/dsh-magpie-lite
- hualuo520-h/dsh-proteus-bridge
- JIUYUE-SEP/neural-mind
- Kiru-Sama/dsh-progress-bar
- kkk-yoyo/dsh-mcp-rea
- Kr-ATG/dsh-seeker-bot
- LizzzMax/dsh-tool-index
- luckyf1oat/dsh-appstate-F1x
- meat-daemon-404/dsh-plugin-immune
- OldQin-Aurora001/dsh-breeze-tts
- OldQin-Aurora001/portwrench
- orangeofcarl0-sys/dsh-computer-use
- Polyaris-0413/dsh-balance-cmd
- Prirex/PriRex-Monitoring-DeepSeek-Harness
- puny-code/dsh-speed-anchor
- QQPilotOrganization/qqpilot-dsh-plugin
- Rinai-R/dsh-agent-scheduler
- Rinai-R/dsh-agent-team-scheduler
- Rinai-R/dsh-omp-retry
- Rinai-R/kivotos
- samir2015dzh/dsh-studio
- sarfarazstark/dsh-material-file-icons
- sgeerwang-hub/dsh-workspace-lock
- shabe222/dsh-guzheng-pond
- shixiaoyu-funny/multiPlatform-desktopPet
- ShoWin2333/dsh-hongguo
- ShoWin2333/dsh-reader
- sixzjd/dsh-usage-dash-board
- ssalentin/dsh-kanban-board
- sundusk/dsh-pet
- tkaiz0406/dsh-subagent-route-pin
- turboYuu/duh-us-stocks
- wodaimnd/dsh-github-publisher
- Wyplayground/dsh-gb
- xxiiiixx/dsh-session-trash
- xxiiiixx/dsh-workspace-tmp
- ZhongqiXiao/dsh-visual-annotator
