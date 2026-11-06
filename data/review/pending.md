# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-06**
- 快照日期 / Snapshot date: **2026-11-06 (UTC)**
- 待审核 / Pending: **493**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **51**
- Star 异常增长 / Star-growth alerts: **19** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-05** / vs previous snapshot **2026-11-05**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **19**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Tranquillitatis-Lab/dsh-live-compact](https://github.com/Tranquillitatis-Lab/dsh-live-compact) | 待审 / pending | 113 | +20 | 8 | 2d | 待审高星 | 核准即榜 #195；创建 2 天 |
| ⚠️ [dataelement/bisheng](https://github.com/dataelement/bisheng) | 待审 / pending | 12145 | — | 1996 | 1165d | 待审高星 | 核准即 Top 1 |
| ⚠️ [tencentmusic/modus](https://github.com/tencentmusic/modus) | 待审 / pending | 212 | — | 17 | 19d | 待审高星 | 核准即榜 #120 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 63874 | +1634 | 1728 | 42d | 日增百星 | 日增 +1634★；已不进榜单 |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 5779 | +392 | 371 | 34d | 日增百星 | 日增 +392★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5960 | +244 | 552 | 29d | 日增百星 | 日增 +244★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5500 | +216 | 104 | 81d | 日增百星 | 日增 +216★ |
| ⚠️ [woniuniuniu/dsh-media-desk](https://github.com/woniuniuniu/dsh-media-desk) | 已核准 / approved | 348 | +181 | 24 | 3d | 日增百星 | 日增 +181★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 11158 | +173 | 427 | 83d | 日增百星 | 日增 +173★；已不进榜单 |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 4281 | +165 | 351 | 91d | 日增百星 | 日增 +165★；已不进榜单 |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4408 | +161 | 186 | 83d | 日增百星 | 日增 +161★ |
| ⚠️ [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) | 已核准 / approved | 184 | +155 | 24 | 0d | 日增百星、新入 Top 200 | 日增 +155★；新入 Top 200 #136；创建 0 天 |
| ⚠️ [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 已核准 / approved | 4575 | +138 | 618 | 25d | 日增百星 | 日增 +138★；已不进榜单 |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 2071 | +137 | 168 | 83d | 日增百星 | 日增 +137★ |
| ⚠️ [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) | 已核准 / approved | 5434 | +134 | 192 | 28d | 日增百星 | 日增 +134★ |
| ⚠️ [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 已核准 / approved | 203 | +117 | 13 | 3d | 日增百星、新入 Top 200 | 日增 +117★；新入 Top 200 #125 |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 5760 | +111 | 485 | 83d | 日增百星 | 日增 +111★ |
| ⚠️ [anywhere-labs/Agents-Anywhere](https://github.com/anywhere-labs/Agents-Anywhere) | 已核准 / approved | 2909 | +108 | 250 | 167d | 日增百星 | 日增 +108★；已不进榜单 |
| ⚠️ [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) | 已核准 / approved | 1237 | +56 | 136 | 69d | 冲入 Top 20 | 冲入 Top 20（21→19） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [dataelement/bisheng](https://github.com/dataelement/bisheng) ⚠️ | 12145 | 2023-08-28 | 2026-11-06 | BISHENG is an open-source enterprise Agent platform for building, deploying, and managing AI applications. It combines AI agents, workflows, RAG and knowledge management, desktop agent integration, and vibecoding app hosting with unified model management, evaluation, observability, access control, and enterprise administration. |
| 2 | [tencentmusic/modus](https://github.com/tencentmusic/modus) ⚠️ | 212 | 2026-10-17 | 2026-11-06 | 从需求澄清到可信交付的 Agent 编程 Harness 工程框架 |
| 3 | [Tranquillitatis-Lab/dsh-live-compact](https://github.com/Tranquillitatis-Lab/dsh-live-compact) ⚠️ | 113 | 2026-11-03 | 2026-11-06 | 边做边压 Live Compact. Compress the finished turn in place and keep the prefix cache. |
| 4 | [QuestMeet/opportunity-skill](https://github.com/QuestMeet/opportunity-skill) | 23 | 2026-04-20 | 2026-11-06 | This Skill lets your AI agent connect you with the right people or their bots (mostly closed-source) in the opportunity network. |
| 5 | [liangzz1998/dsh-doubao-painter](https://github.com/liangzz1998/dsh-doubao-painter) | 12 | 2026-10-26 | 2026-11-06 | ????????????????? DeepSeek Harness:agent ????????,?? CDN ????? 2K ????? CDP ??,??? API Key?????????? |
| 6 | [vinkwork/dsh-psd-batch-studio](https://github.com/vinkwork/dsh-psd-batch-studio) | 12 | 2026-11-05 | 2026-11-06 | 由 Genca（缙嘉集团，上海缙嘉科技有限公司）VinkWork 团队开源的 DSH 插件：PSD 主图模板批量套 SKU、画布微调、整批导出。VinkWork 核心产品：VinkClaw.com。 |
| 7 | [shiker1996/wechat-editroom](https://github.com/shiker1996/wechat-editroom) | 11 | 2026-07-31 | 2026-11-06 | 见字 · 公众号编辑工作台：本地优先的中文内容编辑与图文生产工作台 |
| 8 | [illli-studio/mory](https://github.com/illli-studio/mory) | 8 | 2026-08-01 | 2026-11-06 | Mory — The Memory Layer for AI |
| 9 | [RayJitan/dsh-ima-ragplugin](https://github.com/RayJitan/dsh-ima-ragplugin) | 7 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：把 IMA 账号可访问/订阅的知识库接入 DSH，提供 ima_kb_list / ima_kb_search / ima_kb_ask 原生工具，并支持检索条数设置与每日签到自动化。 |
| 10 | [MoYan1638/love-companion](https://github.com/MoYan1638/love-companion) | 6 | 2026-05-02 | 2026-11-06 | AI Love Companion Skill - 恋人主题AI角色扮演技能包 \| 8套预设人设 \| 自定义配置 \| 记忆系统 \| 情感识别 \| 开源（CC BY-NC 4.0） |
| 11 | [omdsh-dev/dsh-better-dsh](https://github.com/omdsh-dev/dsh-better-dsh) | 6 | 2026-09-09 | 2026-11-06 | 把单一会话不可能的巨任务拆成无数可验证子系统，大规模并行有纪律执行 |
| 12 | [xingxue-ux/dsh-reverse-mode](https://github.com/xingxue-ux/dsh-reverse-mode) | 5 | 2026-10-13 | 2026-11-06 | Reverse-engineering agent preset for DeepSeek Harness: a REA (rea-agents) MCP bridge mounted only by the 逆向模式 preset, with an install-time analysis-engine self-check |
| 13 | [longguanhong0755/dsh-ssh](https://github.com/longguanhong0755/dsh-ssh) | 4 | 2026-11-04 | 2026-11-06 | ZCode-style SSH/WSL/Docker remote workspaces for DeepSeek Harness |
| 14 | [Tal-Shin/dsh-glass](https://github.com/Tal-Shin/dsh-glass) | 4 | 2026-11-06 | 2026-11-06 | Glass-style UI plugins for DeepSeek Harness |
| 15 | [AshenSeeker/agent-web-sandbox](https://github.com/AshenSeeker/agent-web-sandbox) | 3 | 2026-10-28 | 2026-11-06 | Personal agent web-browsing sandbox for DeepSeek Harness: sanitizes fetched web content and scans third-party pages for prompt injection (DSH desktop plugin). |
| 16 | [Burntgogi/dsh-locale-ko](https://github.com/Burntgogi/dsh-locale-ko) | 3 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 한국어 플러그인 (비공식 커뮤니티 프로젝트) |
| 17 | [Chruix/dsh-team-model](https://github.com/Chruix/dsh-team-model) | 3 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 插件：让 Agent Teams 的每个队友拥有自己的模型（模型可指定 + Web UI 三处切换 + 切换后持续生效） |
| 18 | [liangzz1998/dsh-workspace-session-drag](https://github.com/liangzz1998/dsh-workspace-session-drag) | 3 | 2026-10-26 | 2026-11-06 | DSH 插件：在侧栏把会话从一个工作区拖到另一个工作区，确认后真正移动（支持子代理、自动滚动、已打开会话即时生效）。 |
| 19 | [LinHao100076/dsh-remote-ssh](https://github.com/LinHao100076/dsh-remote-ssh) | 3 | 2026-11-04 | 2026-11-06 | DSH（DeepSeek Harness）插件：把远端机器当本地用 —— 文件树、终端、SFTP 断点续传、按方向镜像的编辑同步，以及 -L / -D / -R 三种转发。 |
| 20 | [omdsh-dev/dsh-better-goal](https://github.com/omdsh-dev/dsh-better-goal) | 3 | 2026-10-22 | 2026-11-06 | 更好的Goal实现 \| Better goal tool for DSH |
| 21 | [rumengyihua/dsh-chat-editor-plus](https://github.com/rumengyihua/dsh-chat-editor-plus) | 3 | 2026-11-06 | 2026-11-06 | DeepSeek Harness message editor (edit/delete/fold/fork) — desktop-adapted fork of dsh-chat-editor from DSH-CyberWorkStation (MIT) |
| 22 | [AshenSeeker/dsh-group-meeting-slides](https://github.com/AshenSeeker/dsh-group-meeting-slides) | 2 | 2026-10-28 | 2026-11-06 | DeepSeek Harness 技能：把英文论文 PDF 变成中文组会汇报 PPT，图表用原文真实像素 |
| 23 | [AshenSeeker/dsh-subagent-switch](https://github.com/AshenSeeker/dsh-subagent-switch) | 2 | 2026-10-30 | 2026-11-06 | DSH plugin: routes each subagent to the best local model — free-first, quota-aware, capability-matched — with a control panel. |
| 24 | [bloodarea/dsh-agent-team-ui-testing](https://github.com/bloodarea/dsh-agent-team-ui-testing) | 2 | 2026-10-11 | 2026-11-06 | Frontend GUI debugging and testing for DeepSeekHarness agents: Web/Chromium is implemented with 36 browser_* tools for structured GUI automation, visual comparison, dynamic frame analysis and network debugging; Windows/Linux/macOS desktop, Android, TUI, HarmonyOS, games and 3D (eight environments) are planned. |
| 25 | [chenzhiya77/dsh-agentic-rag](https://github.com/chenzhiya77/dsh-agentic-rag) | 2 | 2026-10-26 | 2026-11-06 | Agentic RAG for DeepSeek Harness: three-path retrieval, document continuation reading and a knowledge-base panel. |
| 26 | [extrastu/pinterest-collect](https://github.com/extrastu/pinterest-collect) | 2 | 2026-11-04 | 2026-11-06 | Your Pinterest saves on the left, a personalized Pinterest feed on the right. Hit ♥ on anything you like and it lands in your collection. |
| 27 | [Lichadai/dsh-we-need-plugin](https://github.com/Lichadai/dsh-we-need-plugin) | 2 | 2026-11-06 | 2026-11-06 | README 有重要信息，请先读。作者实测后认为：DeepSeek 可能在算力/内存极紧的条件下训练，工具和文件一多就挤占推理资源，内部专家模型调用受限；资源充足时多用 We 协调专家，紧张时退化成 I / Let me 和雷霆大思考。与其说无限 token，不如说无限内存 / 无限算力。默认按上游 model id 的 DeepSeek + Flash 筛选，provider 不限。 |
| 28 | [LingQi-07-std/dsh-client-ui-git](https://github.com/LingQi-07-std/dsh-client-ui-git) | 2 | 2026-11-03 | 2026-11-06 | DSH Web GUI 的 Git 可视化插件：分支/提交图谱、工作区状态、远程操作与 PR 管理 |
| 29 | [LingQi-07-std/dsh-ui-theme](https://github.com/LingQi-07-std/dsh-ui-theme) | 2 | 2026-11-05 | 2026-11-06 | 用于DeepseekHarness的主题插件 |
| 30 | [MWGE22629/dsh-task-board](https://github.com/MWGE22629/dsh-task-board) | 2 | 2026-11-06 | 2026-11-06 | DSH 任务看板插件：卡片停靠、浮动任务窗口、实时进度、峰谷时钟 — Task board plugin for DeepSeek Harness |
| 31 | [nizhouding-tech/dsh-comfyui-supervisor](https://github.com/nizhouding-tech/dsh-comfyui-supervisor) | 2 | 2026-11-06 | 2026-11-06 | Lazy start / idle-exit lifecycle tools for a local ComfyUI server, packaged as a DeepSeek Harness (DSH) plugin. |
| 32 | [rannyrjjy/dsh-sidechat](https://github.com/rannyrjjy/dsh-sidechat) | 2 | 2026-11-06 | 2026-11-06 | 旁侧对话：给 \[DSH\] 加一个与主会话强绑定的侧边栏对话。模仿 Codex 的 /side，用来处理途中冒出的题外话和临时疑问，不污染主线上下文。 |
| 33 | [smithtomge-alt/dsh-shortcuts-prompt](https://github.com/smithtomge-alt/dsh-shortcuts-prompt) | 2 | 2026-11-06 | 2026-11-06 | Keeps a strip of saved prompts above the conversation composer. |
| 34 | [wuke-luke/DSH-PaperReading](https://github.com/wuke-luke/DSH-PaperReading) | 2 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：论文阅读工作台 —— 整页中英对照翻译 / 划词即译 / 带页码引用的伴读对话 / 笔记与框架图 / 同步 / token 记账 |
| 35 | [1122438/We-Plugin](https://github.com/1122438/We-Plugin) | 1 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 的会话级角色扮演插件 |
| 36 | [1luoyun/dsh-brain-framework](https://github.com/1luoyun/dsh-brain-framework) | 1 | 2026-11-03 | 2026-11-06 | 基于dsh环境制作，给 AI agent 用的类脑长期记忆：单文件 SQLite、事件是唯一真相、会遗忘（衰减/休眠/提炼）、题集评测。核心零依赖 |
| 37 | [3722593qq/dsh-knowledge-graph](https://github.com/3722593qq/dsh-knowledge-graph) | 1 | 2026-11-06 | 2026-11-06 | Obsidian-style knowledge graph plugin for DeepSeek Harness |
| 38 | [60777flowers/dsh-equity-diligence](https://github.com/60777flowers/dsh-equity-diligence) | 1 | 2026-11-06 | 2026-11-06 | 一级市场尽调前的公开信息调查平台：类型化底稿、证据账本、方案编排、可追溯交付与 Web 工作台 |
| 39 | [abwp2/dsh-session-grep](https://github.com/abwp2/dsh-session-grep) | 1 | 2026-11-04 | 2026-11-06 | Read DeepSeek Harness session transcripts (multi-frame zstd): list, title, find, dump, around by seq. |
| 40 | [ajsney764-blip/dsh-session-batch](https://github.com/ajsney764-blip/dsh-session-batch) | 1 | 2026-11-06 | 2026-11-06 | Batch-delete DeepSeek Harness session chat records, optionally with the files each conversation produced. Shows running vs in-memory status. |
| 41 | [AlanZhaofeng/dsh-bili-downloader](https://github.com/AlanZhaofeng/dsh-bili-downloader) | 1 | 2026-11-06 | 2026-11-06 | B 站视频/音频下载器 DSH 插件：bili_download / bili_login 工具 + 左侧栏面板（扫码登录、分片下载、ffmpeg 合流） |
| 42 | [Anmoku-Yomogi/dsh-peak-valley-reminder](https://github.com/Anmoku-Yomogi/dsh-peak-valley-reminder) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek API 峰谷时段提醒：顶部灵动岛 + 可拖动余额卡（DSH / Cordis 插件，非官方） |
| 43 | [anze225/dsh-notify-sound](https://github.com/anze225/dsh-notify-sound) | 1 | 2026-11-05 | 2026-11-06 | dsh message sound: play Codex completion chime when a turn finishes or input is needed |
| 44 | [AshenSeeker/dsh-mind](https://github.com/AshenSeeker/dsh-mind) | 1 | 2026-10-30 | 2026-11-06 | 给 DeepSeek Harness 加一套心情系统：33 种心情、跨会话记忆、审美品味库、加密日记、主动开口。日记只由模型自己写，插件只攒素材，没有系统总结模板套话。 |
| 45 | [AshenSeeker/lit-report-ppt](https://github.com/AshenSeeker/lit-report-ppt) | 1 | 2026-11-02 | 2026-11-06 | 一篇论文 PDF → 中文组会文献汇报 PPT（.pptx）+ 逐页讲解稿（.docx）。抽文本、裁图、排版、自检全自动，两份产物同源于一个 content.json，版式量自真实汇报稿。 |
| 46 | [ayachinene285/dsh-composer-resize](https://github.com/ayachinene285/dsh-composer-resize) | 1 | 2026-10-27 | 2026-11-06 | DeepSeek Harness 插件：聊天输入框可自由拖动调整高度，默认上限 168px，双击复位 · Resizable composer height for DSH |
| 47 | [ayachinene285/dsh-run-sessions](https://github.com/ayachinene285/dsh-run-sessions) | 1 | 2026-10-26 | 2026-11-06 | DeepSeek Harness 插件：侧栏新增「本次启动」页签，列出本次启动以来聊过的会话，支持选中高亮、右键移除与拖拽排序 · This-run sidebar tab for DSH |
| 48 | [ayachinene285/dsh-session-move](https://github.com/ayachinene285/dsh-session-move) | 1 | 2026-10-16 | 2026-11-06 | DeepSeek Harness 插件：侧栏工作区文件夹（分组）与会话移动 · Workspace folders and session move for DSH |
| 49 | [BruceXcluding/session-recap](https://github.com/BruceXcluding/session-recap) | 1 | 2026-11-05 | 2026-11-06 | Claude Code plugin: recap any session's intent, key decisions, changes, open threads and where to resume, in a side pane. Built for long, many-session projects. |
| 50 | [CarryChang/dsh-ip-studio](https://github.com/CarryChang/dsh-ip-studio) | 1 | 2026-11-06 | 2026-11-06 | dsh-ip-studio｜IP 内容工作室（认知差写作） |
| 51 | [cenbonew/dsh-ctx-visualizer](https://github.com/cenbonew/dsh-ctx-visualizer) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: see exactly what context every model call receives — system vs user content, tools, tool calls &amp; executions, per-turn timeline and dynamic architecture view |
| 52 | [ChangJiang326/dsh-codex-bridge](https://github.com/ChangJiang326/dsh-codex-bridge) | 1 | 2026-11-04 | 2026-11-06 | DeepSeek Harness 会话级 Codex 协作插件：共享工作区、方案与代码审查、Windows CLI 安装和环境检测。 |
| 53 | [clusterstar1229/dsh-sidebar-control](https://github.com/clusterstar1229/dsh-sidebar-control) | 1 | 2026-11-06 | 2026-11-06 | Agent control for DeepSeek Harness built-in sidebar browser: refs, batch, query reads and diffs |
| 54 | [divisioncassini05-lab/find-nyaa-anime-release](https://github.com/divisioncassini05-lab/find-nyaa-anime-release) | 1 | 2026-07-22 | 2026-11-06 | 动漫搜索与自动追番：识别作品、核验 Nyaa 资源、筛选画质与中文字幕，支持 Codex Skill 和 DeepSeek Harness 插件。 |
| 55 | [engbonuonga/dsh-wordpress-admin](https://github.com/engbonuonga/dsh-wordpress-admin) | 1 | 2026-11-06 | 2026-11-06 | Full WordPress and WooCommerce administration from DeepSeek Harness: posts, pages, products, media, themes, plugins, templates and menus over the WordPress REST API. |
| 56 | [flytangyu/dsh-openai-image](https://github.com/flytangyu/dsh-openai-image) | 1 | 2026-11-04 | 2026-11-06 | 为 DeepSeek Harness 提供 generate_image 工具：复用 OpenAI API Key，支持文字生图、透明背景及 QQ 发图。OpenAI image generation plugin for DSH. |
| 57 | [goodboys155/dsh-github-radar](https://github.com/goodboys155/dsh-github-radar) | 1 | 2026-11-06 | 2026-11-06 | Right-sidebar GitHub trending panel for DeepSeek Harness |
| 58 | [HenryHe520/dsh-time-pin](https://github.com/HenryHe520/dsh-time-pin) | 1 | 2026-11-04 | 2026-11-06 | Time Anchor for DSH: pin the agent as-of clock and add a dated evidence window |
| 59 | [inceCheng/dsh-pdf-panel](https://github.com/inceCheng/dsh-pdf-panel) | 1 | 2026-11-06 | 2026-11-06 | DSH 右侧栏 PDF 阅读插件：拖入即预览，选中文字右键「解读 / 翻译」，原文 + 提示词直达会话输入框。Right-sidebar PDF reader for DeepSeek Harness. |
| 60 | [JiamingShi-JsPhys/dsh-token-steward](https://github.com/JiamingShi-JsPhys/dsh-token-steward) | 1 | 2026-11-06 | 2026-11-06 | DSH 模型矩阵调度中枢：本地 OpenAI 兼容网关 + 四种调度模式（含白嫖）+ 自动容灾 + SQLite 精确缓存 |
| 61 | [jiangyuxue666/dsh-conversation-tree](https://github.com/jiangyuxue666/dsh-conversation-tree) | 1 | 2026-11-06 | 2026-11-06 | DSH 插件：把一条对话和它的所有分支组织成一棵可缩放、可管理的树（分支血缘 / token 用量 / 带回 / 归档 / 子树删除） |
| 62 | [JKZeng-cell/moki-canvas-for-dsh](https://github.com/JKZeng-cell/moki-canvas-for-dsh) | 1 | 2026-11-06 | 2026-11-06 | MOKI Canvas for DSH — a local-first infinite canvas with mind maps, media, and two-way AI collaboration. MOKI 白板 for DSH。 |
| 63 | [kanchengw/dsh-collab](https://github.com/kanchengw/dsh-collab) | 1 | 2026-08-25 | 2026-11-06 | The first multi-user collaboration rooms for DeepSeek Harness: discuss, coordinate tasks, propose changes, and review work together from each participant's local DSH. |
| 64 | [kang7897/dsh-account-glance](https://github.com/kang7897/dsh-account-glance) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 侧栏账户卡片：在头像上方显示账户余额、闲时/忙时计费时段与切换倒计时，以及两档费率。 |
| 65 | [Kiant98/dsh-hoi4-modding](https://github.com/Kiant98/dsh-hoi4-modding) | 1 | 2026-10-26 | 2026-11-06 | DeepSeek Harness skill bundle for HOI4 1.19.3 modding: focus trees, tech-tree UI, tank designer, 3D tank models, DDS icons, scripted GUI/topbar, CJK fonts, 14 bundled Python tools, a 23-workshop-mod survey and an agent-teams playbook. No game assets. |
| 66 | [kongbaiwin/dsh-paint](https://github.com/kongbaiwin/dsh-paint) | 1 | 2026-11-06 | 2026-11-06 | 让 AI 把图片重画成矢量画：本地色块描摹 + 自写渲染器，纯 CPU、不联网、不训练。DSH 插件。 Turn images into vector art — local color-region tracing plus a hand-written renderer. CPU-only, offline, no training. A DSH plugin. |
| 67 | [lewisyoung0914/dsh-better-todo](https://github.com/lewisyoung0914/dsh-better-todo) | 1 | 2026-11-05 | 2026-11-06 | Floating todo panel for the DeepSeek Harness Web UI: draggable edge-snapping window, today/more grouping, pomodoro timer with Windows notifications, and five agent tools. |
| 68 | [Li-Jiaquan/dsh-web-annotator](https://github.com/Li-Jiaquan/dsh-web-annotator) | 1 | 2026-11-05 | 2026-11-06 | DSH web annotator plugin: annotate proxied web pages and write structured prompts with full-page screenshots into the composer |
| 69 | [linanbuan/dsh-system-notify](https://github.com/linanbuan/dsh-system-notify) | 1 | 2026-11-06 | 2026-11-06 | 用 Windows App SDK 给 DeepSeek Harness 弹系统通知：授权请求 / 电脑操控 / 任务完成 / 会话终止。检测点在 agent 运行时（cordis 事件），不进 function calling、不改 system prompt、不依赖模型输出。 |
| 70 | [lisongjianustc/dsh-bot](https://github.com/lisongjianustc/dsh-bot) | 1 | 2026-11-06 | 2026-11-06 | MiniMax-Bot-style always-on agent team for DeepSeek Harness: named Bots backed by real DSH sessions, private and group chats, memory, background jobs, scheduled tasks and usage. |
| 71 | [Luislariosss/PLUGIN-DSH-WORKER](https://github.com/Luislariosss/PLUGIN-DSH-WORKER) | 1 | 2026-11-06 | 2026-11-06 | Puente Claude Code &lt;-&gt; DeepSeek Harness: delega tareas a DSH y usa sus workers (Agent Teams) desde Claude Code |
| 72 | [mike1-huh/dsh-plugin-neural-cloud](https://github.com/mike1-huh/dsh-plugin-neural-cloud) | 1 | 2026-11-06 | 2026-11-06 | 别人家的记忆插件靠关键词，这个带向量库和 11 条召回通道｜双击安装，拔掉不留痕A DSH memory plugin that ships its own vector engine — dedupe, provenance, memory graph, multi-channel RRF recall. Double-click install, data stays local. |
| 73 | [nineberg/dsh-plugin-island](https://github.com/nineberg/dsh-plugin-island) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 的灵动岛插件启动器：收纳插件图标、一键重开、拖出成悬浮挂件 |
| 74 | [nineberg/dsh-plugin-obsidian-memory](https://github.com/nineberg/dsh-plugin-obsidian-memory) | 1 | 2026-11-06 | 2026-11-06 | 让 Harness Agent 检索你的 Obsidian 库、引用真实笔记、把会话产出存回库中——vault-memory 改良分支 |
| 75 | [nineberg/dsh-plugin-stock](https://github.com/nineberg/dsh-plugin-stock) | 1 | 2026-11-06 | 2026-11-06 | 深潜 Harness 的沪深港美股票行情侧栏面板 + 可拖出悬浮窗，与插件灵动岛联动 |
| 76 | [NingYuanLee/dsh-alibaba-mcp](https://github.com/NingYuanLee/dsh-alibaba-mcp) | 1 | 2026-10-27 | 2026-11-06 | DeepSeek Harness plugin: connect the local Alibaba Cloud Ops MCP server, with a per-module tool surface switch. |
| 77 | [NingYuanLee/dsh-context7-mcp](https://github.com/NingYuanLee/dsh-context7-mcp) | 1 | 2026-11-04 | 2026-11-06 | Connect Context7 hosted MCP server to DeepSeek Harness |
| 78 | [NingYuanLee/dsh-cothread-mcp](https://github.com/NingYuanLee/dsh-cothread-mcp) | 1 | 2026-11-04 | 2026-11-06 | Connect the CoThread remote MCP server to DeepSeek Harness |
| 79 | [NingYuanLee/dsh-minimax-byapi](https://github.com/NingYuanLee/dsh-minimax-byapi) | 1 | 2026-11-06 | 2026-11-06 | Native MiniMax for DeepSeek Harness: chat with a subscription (Coding Plan) key or a pay-as-you-go API key, plus image, video, speech and music generation over the official MiniMax API. |
| 80 | [Oak-liuhj/dsh-session-rollover](https://github.com/Oak-liuhj/dsh-session-rollover) | 1 | 2026-11-06 | 2026-11-06 | 解决"一个会话聊到几万 token 越来越笨"的问题—按用户轮次自动把长会话"分卷"，像书一样分成第 1 卷、第 2 卷，旧卷留档、新卷带着交接摘要继续干。 |
| 81 | [Oak-liuhj/dsh-todo-progress](https://github.com/Oak-liuhj/dsh-todo-progress) | 1 | 2026-11-06 | 2026-11-06 | dsh-todo-progress 是DSH 右侧栏 任务进度面板，主要管dsh web 上的"任务走到哪了"。 |
| 82 | [radish999/dsh-hongguo](https://github.com/radish999/dsh-hongguo) | 1 | 2026-11-06 | 2026-11-06 | DSH plugin: 摸鱼短剧 — 在右侧边栏播放红果短剧，Agent 干活时提示调出（built on openhongguo） |
| 83 | [Sakura7301/MeiHuaYi](https://github.com/Sakura7301/MeiHuaYi) | 1 | 2026-10-09 | 2026-11-06 | A plum blossom divination plugin suitable for DSH. |
| 84 | [shixiaoyu-funny/DSH-DesktopPet](https://github.com/shixiaoyu-funny/DSH-DesktopPet) | 1 | 2026-11-06 | 2026-11-06 | 适配DeepSeek Harness的桌面小宠物，暂时只有一个版本动画...... |
| 85 | [show-thesky/every-thing-is-possible](https://github.com/show-thesky/every-thing-is-possible) | 1 | 2026-11-06 | 2026-11-06 | 这是一个学习仓库 |
| 86 | [skyrocks/dsh-deepseek-cost](https://github.com/skyrocks/dsh-deepseek-cost) | 1 | 2026-10-30 | 2026-11-06 | DeepSeek 余额 + 本轮/今日/本周/本月/累计花费，常驻 DSH 输入框下方 \| Balance &amp; spend dock for DeepSeek Harness |
| 87 | [skyrocks/dsh-go-quota](https://github.com/skyrocks/dsh-go-quota) | 1 | 2026-10-27 | 2026-11-06 | OpenCode GO 套餐 5h/周/月额度，常驻 DSH 输入框下方 \| OpenCode GO quota dock for DeepSeek Harness |
| 88 | [skyrocks/dsh-model-switcher](https://github.com/skyrocks/dsh-model-switcher) | 1 | 2026-11-06 | 2026-11-06 | 让模型自己查 / 切模型（find_models + switch_model） \| Model list &amp; switch tools for DeepSeek Harness |
| 89 | [stevenwang15/dsh-session-workspace](https://github.com/stevenwang15/dsh-session-workspace) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：每个新对话自动获得独立工作区（独立文件夹 + 独立沙箱），跨对话文件互不可见，附带输入框旁的运行时开关。One conversation, one workspace. |
| 90 | [Trustbaselab/vigiliae](https://github.com/Trustbaselab/vigiliae) | 1 | 2026-10-27 | 2026-11-06 | Vigiliae (更柝) — a self-hosted AI agent team on your own VPS. DSH (DeepSeek Harness) native. Local↔cloud handoff, 12 named agents, 5 verifiable skills, pricing-aware scheduling. MIT. |
| 91 | [TwinsEarth/dsh-fang](https://github.com/TwinsEarth/dsh-fang) | 1 | 2026-11-01 | 2026-11-06 | dsh-Fang：通过让dsh-Web（瓮城）做为DeepSeekHarness（主城）的隔离区&amp;审核区，保护DSH不再崩溃&amp;无需频繁重启。 |
| 92 | [WinterOne-hub/dsh-plugin-pulse](https://github.com/WinterOne-hub/dsh-plugin-pulse) | 1 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件榜单与需求反馈 / Plugin rankings and feature requests |
| 93 | [wyinthe/dsh-qq](https://github.com/wyinthe/dsh-qq) | 1 | 2026-11-06 | 2026-11-06 | 把 QQ（NapCat / OneBot11）接到 DeepSeek Harness：私聊收发文字、语音、图片、表情，可绑定到指定会话 |
| 94 | [xin1223yue/dsh-cost-pill](https://github.com/xin1223yue/dsh-cost-pill) | 1 | 2026-11-06 | 2026-11-06 | DSH (DeepSeek Harness) web plugin: live conversation spend in CNY - composer stats line plus a per-turn footer chip, priced per reply with the official peak/off-peak table. |
| 95 | [xinjiguaike/dsh-session-location](https://github.com/xinjiguaike/dsh-session-location) | 1 | 2026-11-06 | 2026-11-06 | Shows the owning workspace and Git branch under each session row in the flat session list. |
| 96 | [xrzhai/dsh-plugin-wechat](https://github.com/xrzhai/dsh-plugin-wechat) | 1 | 2026-11-05 | 2026-11-06 | 在微信里随时使唤你的 DeepSeek Harness（大肥鱼 🐳）：微信派活、互传本机文件、后台子任务汇报、遥控桌面其他 DSH 会话 \| Control DeepSeek Harness (DSH) anytime from WeChat |
| 97 | [ygzhang-lab/dsh-plugin-codex-coding](https://github.com/ygzhang-lab/dsh-plugin-codex-coding) | 1 | 2026-11-05 | 2026-11-06 | 一个面向 DeepSeek Harness 的 Codex 风格 Coding 预设 + 工作流 + 交付契约，自动切换推理等级/工作流模式 |
| 98 | [1020252969/dsh-wallpaper](https://github.com/1020252969/dsh-wallpaper) | 0 | 2026-11-06 | 2026-11-06 | A DSH wallpaper plugin: bundled default background, live control panel, translucent shell tokens. |
| 99 | [1314521gjy/dsh-wujie-canvas](https://github.com/1314521gjy/dsh-wujie-canvas) | 0 | 2026-11-06 | 2026-11-06 | 无界画布 in DeepSeek Harness: left-sidebar infinite canvas, local workbench lifecycle, and DSH Agent canvas tools. |
| 100 | [2033453490/dsh-plugin-supervisor](https://github.com/2033453490/dsh-plugin-supervisor) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness plugin supervisor: plugin health, DSH compatibility, usage frequency, per-plugin token cost, with in-page update/disable/uninstall and version rollback. |
| 101 | [2154036609-ux/dsh-startup-blade](https://github.com/2154036609-ux/dsh-startup-blade) | 0 | 2026-11-06 | 2026-11-06 | Blade-draw startup splash for DeepSeek Harness — layered dark/lit art, blade-light sweep, freeze on the final frame. No bundled artwork, zero dependencies. |
| 102 | [2797218091/dsh-sidebar-groups](https://github.com/2797218091/dsh-sidebar-groups) | 0 | 2026-11-06 | 2026-11-06 | DSH 左侧栏可滚动 + 可分组插件：整列滚动、导航分组折叠、工作区分组折叠，配置持久化到 profile |
| 103 | [2869949486/dsh-skill-market](https://github.com/2869949486/dsh-skill-market) | 0 | 2026-11-06 | 2026-11-06 | dsh plugin: browse, search and install SkillHub skills inside DeepSeek Harness (local build of montersy123/dsh-skill-market) |
| 104 | [4478sc/DSH_AttentionPlugins_Desktop](https://github.com/4478sc/DSH_AttentionPlugins_Desktop) | 0 | 2026-11-06 | 2026-11-06 | Desktop edition of attention-plugins for DeepSeek Harness: main-line/side-line priority notifications delivered as bottom-right desktop toasts (Windows WPF / Linux GTK). |
| 105 | [64511982lin-hash/dsh-swap-enter](https://github.com/64511982lin-hash/dsh-swap-enter) | 0 | 2026-11-06 | 2026-11-06 | Swap Enter and Shift+Enter in the DeepSeek Harness composer (Enter = newline, Shift+Enter = send). |
| 106 | [6600788/dsh-token-ledger](https://github.com/6600788/dsh-token-ledger) | 0 | 2026-11-06 | 2026-11-06 | DSH sidebar plugin: a local token-usage ledger with two independent books (before / after), exact per-bucket accounting, and week/month/day filters. |
| 107 | [912D/dsh-plugin-symbai-deepseek](https://github.com/912D/dsh-plugin-symbai-deepseek) | 0 | 2026-11-05 | 2026-11-06 | 用 DeepSeek 把大白话业务规则转成可读规则链，171 原子前向链确定性执行；业务数据留本机，附完整逻辑库/数据库工作台 |
| 108 | [a0035s/dsh-workspace-mgr](https://github.com/a0035s/dsh-workspace-mgr) | 0 | 2026-11-06 | 2026-11-06 | 工作區守衛：攔截落在 C 盤的新產物路徑、每會話 scratch、事後觀測證據、同盤可還原回收站。Workspace Guard plugin for DeepSeek Harness that blocks new artifact paths on a protected drive. |
| 109 | [a1ertx5s/dsh-blog](https://github.com/a1ertx5s/dsh-blog) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：AI 长文工厂，自动研究、写作与发布到 GitHub Pages |
| 110 | [abcd753951-gg/dsh-claude-mode](https://github.com/abcd753951-gg/dsh-claude-mode) | 0 | 2026-11-06 | 2026-11-06 | Claude Code 风格的 DeepSeek Harness 交互层：双主题、命令面板、聊天搜索、回复朗读、完成提示音与键盘优先操作 |
| 111 | [abcdlsj/dsh-provider-commandcode](https://github.com/abcdlsj/dsh-provider-commandcode) | 0 | 2026-11-06 | 2026-11-06 | Command Code provider for DeepSeek Harness: plan-aware model catalog, Claude on Messages, everything else on Chat Completions, composer quota bar, and zero-config reuse of the command-code CLI sign-in |
| 112 | [AcerGL/dsh-pixiv-aesthetic](https://github.com/AcerGL/dsh-pixiv-aesthetic) | 0 | 2026-11-05 | 2026-11-06 | DSH 插件：按你的口味刷 Pixiv —— 搜、筛、读图精选，存到本地或发给你。网络在外部源/直连/代理之间自动选路。 |
| 113 | [Acfufu/dsh-wiki](https://github.com/Acfufu/dsh-wiki) | 0 | 2026-11-06 | 2026-11-06 | DeepWiki-style local repo wiki for DeepSeek Harness (DSH) — agent-generated, path:line evidence, zero upload. 纯本地仓库 Wiki 插件，零上传零网络。 |
| 114 | [AdamPlatin123/dsh-autofit](https://github.com/AdamPlatin123/dsh-autofit) | 0 | 2026-11-03 | 2026-11-06 | DSH 插件自动适配：装前兼容检查（雷达实测+试装）、不兼容自动迁移、更新先试测 / Auto-fit DeepSeek Harness plugins to your DSH version |
| 115 | [ahmedibrahim085/dsh-claude-bridge](https://github.com/ahmedibrahim085/dsh-claude-bridge) | 0 | 2026-11-06 | 2026-11-06 | Claude Code &lt;-&gt; DeepSeek Harness (dsh) bridge: turn events, event-driven wait CLI, doctor/setup for acpx, mcacp and Claude Code helpers on two brains, plus the dsh-harness skill |
| 116 | [aide-family/dsh-remote](https://github.com/aide-family/dsh-remote) | 0 | 2026-11-01 | 2026-11-06 | dsh-remote 是一款面向 DeepSeek Harness 的 AI 远程运维插件，让你通过自然语言完成服务器巡检、命令执行、文件编辑与传输。操作过程实时可见，配合审批、备份与恢复机制，让远程运维更高效、更可控。 |
| 117 | [ainachoneko/dsh-ledger-wealth](https://github.com/ainachoneko/dsh-ledger-wealth) | 0 | 2026-11-05 | 2026-11-06 | 本地优先的记账 + 理财持仓 DSH 插件：记账与小票 OCR、running balance、收益严格降级链、月末双节报告。Local-first bookkeeping + wealth ledger for DeepSeek Harness. |
| 118 | [airfloats/dsh-context-selector](https://github.com/airfloats/dsh-context-selector) | 0 | 2026-11-06 | 2026-11-06 | Per-row context checkbox selector + document/selection right-click Ask AI for DeepSeek Harness. |
| 119 | [AleixRocal/dsh-sidepanel-web](https://github.com/AleixRocal/dsh-sidepanel-web) | 0 | 2026-11-05 | 2026-11-06 | Right-sidebar browser for DeepSeek Harness Web: CDP rendering for public sites, same-origin proxy for local/dev, device emulation, and element-pick annotations into the chat. |
| 120 | [alfredhuang211/dsh-configandplugin-sync](https://github.com/alfredhuang211/dsh-configandplugin-sync) | 0 | 2026-11-06 | 2026-11-06 | DSH 配置与插件同步 — 跨设备同步 DSH 配置、模型 provider、插件清单与配置、密钥、MCP；支持 Git/WebDAV/S3 兼容存储，永不存储插件代码。 / Sync DSH config, providers, plugin inventory &amp; configs, secrets and MCP servers over Git, WebDAV or S3-compatible storage, without storing plugin code. |
| 121 | [Aliboder/dsh-music-panel](https://github.com/Aliboder/dsh-music-panel) | 0 | 2026-11-04 | 2026-11-06 | Local music panel for DeepSeek Harness: scan a folder, browse tracks with covers and tags, and play in a sidebar player with playlists and synced lyrics. |
| 122 | [AlseFum/dsh-pluginlet](https://github.com/AlseFum/dsh-pluginlet) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：仓库里每个 .pluginlet 文件都变成一个独立的沙箱 UI 标签页，按内容哈希授权，写入需确认。 |
| 123 | [alvinlui-hk/dsh-coding-plan-usage](https://github.com/alvinlui-hk/dsh-coding-plan-usage) | 0 | 2026-11-06 | 2026-11-06 | Show Qwen Token Plan, Z.ai GLM Coding Plan, and MiniMax Coding Plan usage in DeepSeek Harness. |
| 124 | [ame-code/dsh-explorer-open](https://github.com/ame-code/dsh-explorer-open) | 0 | 2026-11-06 | 2026-11-06 | Windows Explorer context menu: open any folder, or the folder of a file you right-clicked, in a new DeepSeek Harness session. |
| 125 | [ami3go/dsh-sidebar-sysmon](https://github.com/ami3go/dsh-sidebar-sysmon) | 0 | 2026-11-06 | 2026-11-06 | Live CPU and memory meter for the DeepSeek Harness Web sidebar |
| 126 | [ancientbag/dsh-kimi-code-usage](https://github.com/ancientbag/dsh-kimi-code-usage) | 0 | 2026-11-06 | 2026-11-06 | Deepseek Harness plugin to display Kimi Coding subscription usage |
| 127 | [androidly/dsh-web-m3e](https://github.com/androidly/dsh-web-m3e) | 0 | 2026-11-06 | 2026-11-06 | Material 3 Expressive theme for the DeepSeekRuntime (dsh) Web UI |
| 128 | [AnJiaqi0926/dsh-plugin-switchboard](https://github.com/AnJiaqi0926/dsh-plugin-switchboard) | 0 | 2026-11-06 | 2026-11-06 | 用于便捷管理dsh的插件，我终于把它做的像饥荒里装Mod一样方便了。 |
| 129 | [AntheaLaffy/dsh-three-level-agent](https://github.com/AntheaLaffy/dsh-three-level-agent) | 0 | 2026-11-06 | 2026-11-06 | 三级代理插件 for DeepSeek Harness: three-level subagent delegation (1x9x9) with tree-wide async agent messaging and a web UI tree panel |
| 130 | [askred-dot-ru/dsh-pult](https://github.com/askred-dot-ru/dsh-pult) | 0 | 2026-11-06 | 2026-11-06 | Пульт — правая колонка dsh: контексты cfsmcp2, модели LM Studio, MCP-серверы и сессии одним бандлом |
| 131 | [aug-245/dsh-plugin-market-entry](https://github.com/aug-245/dsh-plugin-market-entry) | 0 | 2026-11-06 | 2026-11-06 | Adds a plugin market entry button to the left sidebar of DeepSeek Harness. |
| 132 | [Awenforever/dsh-codex-advisor](https://github.com/Awenforever/dsh-codex-advisor) | 0 | 2026-11-03 | 2026-11-06 | Persistent Codex advisor threads callable from DSH sessions (Codex app-server bridge). |
| 133 | [Awenforever/dsh-multiview](https://github.com/Awenforever/dsh-multiview) | 0 | 2026-11-04 | 2026-11-06 | Multi-view for DeepSeek Harness: 2-4 live conversations side by side, each pane the real Chat. |
| 134 | [back4app/back4app-plugin](https://github.com/back4app/back4app-plugin) | 0 | 2026-10-28 | 2026-11-06 | Back4app plugin for AI agents: deploy anything that runs in a container and get a live HTTPS address. No account needed to start. |
| 135 | [Battiatus/dsh-gemini-antigravity-auth](https://github.com/Battiatus/dsh-gemini-antigravity-auth) | 0 | 2026-11-05 | 2026-11-06 | Gemini for DeepSeek Harness (DSH) via Google Antigravity OAuth: multi-account quotas, Google Search grounding, image, audio, video and PDF understanding. |
| 136 | [belowthetree/dsh-shape](https://github.com/belowthetree/dsh-shape) | 0 | 2026-11-06 | 2026-11-06 | 以插件形式为 dsh 添加一个快速自定义 dsh 界面、功能的能力，你可以用这个插件即时添加一个窗口、更改 UI 或者新增工具 |
| 137 | [Benson-Cao/dsh-engine-switch](https://github.com/Benson-Cao/dsh-engine-switch) | 0 | 2026-11-06 | 2026-11-06 | One phone-friendly gateway to switch DeepSeek Harness between local, desktop and server engines. |
| 138 | [borui1757-cmd/claim-verify-wsc](https://github.com/borui1757-cmd/claim-verify-wsc) | 0 | 2026-11-05 | 2026-11-06 | Verify what AI agents claim they did — against real OS state, with signed receipts |
| 139 | [BR-PC/dsh-flash-anchor](https://github.com/BR-PC/dsh-flash-anchor) | 0 | 2026-11-06 | 2026-11-06 | DSH跨所有会话内容高速搜索及定位插件，支持搜索模型输入:思维链、正文、工具调用、文件；用户输入:正文、文件 |
| 140 | [Britneycode/dsh-snowluma-control](https://github.com/Britneycode/dsh-snowluma-control) | 0 | 2026-11-06 | 2026-11-06 | DSH（DeepSeek Harness）插件：设置页一键启动 / 停止 / 重启 SnowLuma QQ 机器人进程，日志驱动地显示 WebUI 与 OneBot 就绪状态，支持孤儿进程对账与优雅停止（Windows，零依赖） |
| 141 | [BruceXcluding/dev-almanac](https://github.com/BruceXcluding/dev-almanac) | 0 | 2026-11-06 | 2026-11-06 | Programmer's almanac + daily horoscope: a playful, offline mod for Claude Code |
| 142 | [C163q/dsh-always-allow](https://github.com/C163q/dsh-always-allow) | 0 | 2026-10-17 | 2026-11-06 | \[CODING WITH AI\] "Always allow commands that start with …" for DeepSeek Harness approvals. |
| 143 | [C1ement314/dsh-clean-agent](https://github.com/C1ement314/dsh-clean-agent) | 0 | 2026-11-06 | 2026-11-06 | Cleanup Mode (清理模式) - a DSH agent preset that reclaims disk space and removes leftovers safely |
| 144 | [camik86/dsh-minimal-balance](https://github.com/camik86/dsh-minimal-balance) | 0 | 2026-11-06 | 2026-11-06 | Minimal DeepSeek balance badge for the DSH Web sidebar, with peak/off-peak pricing indicator. Community plugin. |
| 145 | [camik86/dsh-tarot-page](https://github.com/camik86/dsh-tarot-page) | 0 | 2026-11-06 | 2026-11-06 | Tarot page for DeepSeek Harness: 78 public-domain Rider-Waite-Smith cards, four spreads, shuffle animation, and an in-page AI reading. Community plugin. |
| 146 | [Cesare97/dsh-balance-chip](https://github.com/Cesare97/dsh-balance-chip) | 0 | 2026-11-06 | 2026-11-06 | Balance and spend chip for the DeepSeek Harness (dsh) sidebar: topped-up + granted balances, 7-day strip, spend per session, per task, and per day. |
| 147 | [cestbonn/dsh-bilibili-radio](https://github.com/cestbonn/dsh-bilibili-radio) | 0 | 2026-11-06 | 2026-11-06 | bilibili radio player in deepseek harness |
| 148 | [chaorenzeng/dsh-use-codex](https://github.com/chaorenzeng/dsh-use-codex) | 0 | 2026-11-05 | 2026-11-06 | Delegate a task from DeepSeek Harness to your local Codex CLI with one natural-language request, then bring the result back to the conversation. |
| 149 | [chenglixue66-dotcom/dsh-rococo-theme](https://github.com/chenglixue66-dotcom/dsh-rococo-theme) | 0 | 2026-11-06 | 2026-11-06 | Rococo (Trianon) theme for the DeepSeek Harness Web GUI — misty blue, silver and ivory. · 洛可可风 DSH 主题插件 |
| 150 | [chengzhixing/dsh-memory-budget](https://github.com/chengzhixing/dsh-memory-budget) | 0 | 2026-11-06 | 2026-11-06 | 个人测试用 |
| 151 | [ChenYichener/dsh-book](https://github.com/ChenYichener/dsh-book) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: Markdown draft library + AI copywriting workspace for Xiaohongshu, WeChat Official Accounts and generic posts. |
| 152 | [ChenYichener/dsh-nce](https://github.com/ChenYichener/dsh-nce) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: a New Concept English Book 1 study panel with one-page lessons, SRS flashcards and a mistake notebook. Textbook data is not bundled. |
| 153 | [ChenYichener/dsh-pomodoro](https://github.com/ChenYichener/dsh-pomodoro) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: a distraction-free Pomodoro focus timer that lives in the sidebar. |
| 154 | [ChenYichener/dsh-translate](https://github.com/ChenYichener/dsh-translate) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: a Chinese/English translation workbench with an always-on AI tutor, examples, corrections and neural read-aloud. |
| 155 | [CHET-LI/DSH-galbook](https://github.com/CHET-LI/DSH-galbook) | 0 | 2026-11-06 | 2026-11-06 | galbook：让 agent 像人一样玩 galgame 的库——一句一句读剧情、自己选选项并写理由、存档回溯、多周目解锁；HTTP / JSON / MCP / CLI 四种接法，纯标准库，带网页观战与剧本导入 |
| 156 | [china-wkz/dsh-window-state](https://github.com/china-wkz/dsh-window-state) | 0 | 2026-11-06 | 2026-11-06 | 记住 DSH Desktop 主窗口的位置、尺寸与最大化状态，重开原样恢复。Remembers the DeepSeek Harness desktop window geometry (position, size, maximized) and restores it on the next launch. Windows only. |
| 157 | [Cnily03/dsh-delete-archived-session](https://github.com/Cnily03/dsh-delete-archived-session) | 0 | 2026-11-06 | 2026-11-06 | Two-step permanent delete for archived DeepSeek Harness sessions. |
| 158 | [codeasier/dsh-plugins](https://github.com/codeasier/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | Community plugins for DeepSeek Harness (dsh): one independently released npm package per plugin. |
| 159 | [codelearnerlu/dsh-occlusion-throttle](https://github.com/codelearnerlu/dsh-occlusion-throttle) | 0 | 2026-11-06 | 2026-11-06 | DSH 桌面端被其他窗口完全遮挡时暂停动画渲染（rAF + CSS），约 0.12% 单核开销；重新可见立刻恢复。Pause the DeepSeek Harness desktop renderer while its window is fully occluded. |
| 160 | [craig90x/dsh-macos-restart](https://github.com/craig90x/dsh-macos-restart) | 0 | 2026-11-06 | 2026-11-06 | macOS 桌面版 DeepSeek Harness 一键重启插件：确认框自动兜底 + 远程可用 |
| 161 | [cube-ai/dsh-feishu-channels](https://github.com/cube-ai/dsh-feishu-channels) | 0 | 2026-11-06 | 2026-11-06 | DSH飞书频道 — 将飞书机器人应用接入本机 DeepSeek Harness。 |
| 162 | [cube-ai/dsh-feishu-client](https://github.com/cube-ai/dsh-feishu-client) | 0 | 2026-11-06 | 2026-11-06 | DSH飞书客户端：1）用户（人）通过本插件提供UI访问远端智能体；2）本地DSH通过调用本插件提供工具访问远端智能体。支持的远端智能体包括且不限于：DSH、OpenClaw、WorkBuddy、Weknora等等。 |
| 163 | [cyh8037/dsh-chat-rewind](https://github.com/cyh8037/dsh-chat-rewind) | 0 | 2026-11-06 | 2026-11-06 | dsh-chat-rewind 是一个 DeepSeek Harness 客户端插件。它让你双击自己发出的任意一条消息直接就地修改，确认后在这条消息之前切一个会话分支并重新发送，后续回答随之重新生成；工作目录里的文件不会被回退，原会话可保留或自动归档。 |
| 164 | [cyuni1996/dsh-watch](https://github.com/cyuni1996/dsh-watch) | 0 | 2026-11-06 | 2026-11-06 | Continue DeepSeek Harness conversations from an Android watch. |
| 165 | [cyy0906/dsh-CyberRelic](https://github.com/cyy0906/dsh-CyberRelic) | 0 | 2026-11-06 | 2026-11-06 | Cross-device sync for DeepSeek Harness: fish memory, skills, plugin settings, tasks and workspaces. Folder or WebDAV channel, optional AES-256-GCM passphrase, one-click install to DSH Go over USB. |
| 166 | [Daaaaxianer/dsh-billing-bar](https://github.com/Daaaaxianer/dsh-billing-bar) | 0 | 2026-11-06 | 2026-11-06 | Peak/off-peak billing strip and account balance above the DSH composer, with today, 7-day and 30-day spend per model. |
| 167 | [dakouchiya/dsh-auto-router](https://github.com/dakouchiya/dsh-auto-router) | 0 | 2026-11-06 | 2026-11-06 | Per-turn model and reasoning-effort routing for DeepSeek Harness: classify what the turn asks, switch provider/model/reasoningEffort, show the tier in the composer, and re-route mid-turn. |
| 168 | [difaandailisi/dsh-capability-router](https://github.com/difaandailisi/dsh-capability-router) | 0 | 2026-11-06 | 2026-11-06 | Intent-based capability discovery for DeepSeek Harness: match one natural-language need across installed skills, plugins and MCP servers, with match reasons. Local, read-only, zero dependencies. |
| 169 | [doctorllll/dsh-living-plan](https://github.com/doctorllll/dsh-living-plan) | 0 | 2026-11-05 | 2026-11-06 | A living, versioned plan for every DeepSeek Harness session, re-injected at each step so it survives compaction · 给每个 DSH 会话一份活计划 |
| 170 | [doctorllll/dsh-tuner](https://github.com/doctorllll/dsh-tuner) | 0 | 2026-11-05 | 2026-11-06 | Usage-driven tuning advice for DeepSeek Harness: per-module analysis of your own sessions, one-click per-model compaction thresholds · 按真实用量给 DSH 逐项调优建议 |
| 171 | [doushalunae/dsh-readfence](https://github.com/doushalunae/dsh-readfence) | 0 | 2026-11-06 | 2026-11-06 | Read-side permission gate for DeepSeek Harness · 给 DSH 补上读侧权限：可读目录、会话级读模式与读审批 |
| 172 | [dsh-works/viburnum](https://github.com/dsh-works/viburnum) | 0 | 2026-11-02 | 2026-11-06 | A workbench for your own DeepSeek Harness plugins: create them, mount them, choose which version runs, and keep two machines in sync. |
| 173 | [duahciM/dsh-lessons](https://github.com/duahciM/dsh-lessons) | 0 | 2026-11-05 | 2026-11-06 | 让Agent自动反思的实验品 |
| 174 | [dungcsnd1133/dsh-dl-brand](https://github.com/dungcsnd1133/dsh-dl-brand) | 0 | 2026-11-05 | 2026-11-06 | DL brand mark and Vietnamese localization for the DeepSeek Harness Web UI |
| 175 | [dungcsnd1133/dsh-media](https://github.com/dungcsnd1133/dsh-media) | 0 | 2026-11-03 | 2026-11-06 | DSH tools: speak, create or edit an image, and make a video. |
| 176 | [dungcsnd1133/dsh-reach](https://github.com/dungcsnd1133/dsh-reach) | 0 | 2026-11-06 | 2026-11-06 | DSH tools for reading public web channels — web, GitHub, V2EX, YouTube, Bilibili, Xueqiu, LinkedIn, Reddit, Twitter — as four read-only tools |
| 177 | [dungcsnd1133/dsh-tlpro-models](https://github.com/dungcsnd1133/dsh-tlpro-models) | 0 | 2026-11-05 | 2026-11-06 | DSH: TLPro gateway routes and model catalog as a bundle patch layer, without touching the DSH checkout. |
| 178 | [dungcsnd1133/dsh-video-watch](https://github.com/dungcsnd1133/dsh-video-watch) | 0 | 2026-11-03 | 2026-11-06 | DSH tool: download a video link, sample frames, and transcribe speech. |
| 179 | [EamonnLiu/dsh-openrouter-guardrails](https://github.com/EamonnLiu/dsh-openrouter-guardrails) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: show only the OpenRouter models your API key may use (guardrails), via GET /models/user |
| 180 | [Eason-22/dsh-cua-driver-indicator](https://github.com/Eason-22/dsh-cua-driver-indicator) | 0 | 2026-10-27 | 2026-11-06 | Precision layer for DSH's built-in Cua Driver computer control: checks the click point is not covered before clicking, verifies the click actually landed, clicks controls by name, runs up to 5 verified steps, and truly stops on Esc. Windows only. |
| 181 | [elliotsu1107/dsh-web-search-byok](https://github.com/elliotsu1107/dsh-web-search-byok) | 0 | 2026-11-06 | 2026-11-06 | BYOK web-search provider for DeepSeek Harness: route ctx.web searches through your own API gateway (Anthropic Messages / OpenAI Responses web_search). |
| 182 | [Elosiad/dsh-script-progress](https://github.com/Elosiad/dsh-script-progress) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: long-running scripts carry a progress bar (percent / rate / ETA) and report milestones at 10/25/50/75/90% in chat and in the UI. |
| 183 | [Eule-Lawrence/dsh-work-log](https://github.com/Eule-Lawrence/dsh-work-log) | 0 | 2026-11-06 | 2026-11-06 | DSH（DeepSeek Harness）插件：把每轮对话整理成叙述式工作记录，按工作区/对话存成 JSON，可直接给其他 AI 当上下文。 |
| 184 | [ExcitedEven/dsh-titlebar-workspace](https://github.com/ExcitedEven/dsh-titlebar-workspace) | 0 | 2026-11-06 | 2026-11-06 | Workspace switcher for the DeepSeek Harness titlebar — see the current project and jump to the right conversation without opening the sidebar. 不用打开侧栏，在顶栏直接切换工作区与对话。 |
| 185 | [Fantasy421/dsh-whiteboard](https://github.com/Fantasy421/dsh-whiteboard) | 0 | 2026-11-06 | 2026-11-06 | Human + AI collaborative Excalidraw whiteboard plugin for DeepSeek Harness |
| 186 | [Farzin-CS/DeepSeek-Harness-RTL](https://github.com/Farzin-CS/DeepSeek-Harness-RTL) | 0 | 2026-11-06 | 2026-11-06 | Right-to-left (Persian/Arabic/Hebrew) text support for the DeepSeek Harness Web UI: per-block bidi direction, LTR code, logical list and quote geometry. |
| 187 | [fengasdf/dsh-remote-screen2](https://github.com/fengasdf/dsh-remote-screen2) | 0 | 2026-11-06 | 2026-11-06 | Remote Linux desktops in the DSH Web UI: an xrdp RDP session or a live VNC mirror of the console, in draggable multi-windows backed by guacd. |
| 188 | [Feskel2/dsh-extras](https://github.com/Feskel2/dsh-extras) | 0 | 2026-11-06 | 2026-11-06 | Plugins for DeepSeek Harness (DSH): always-on-top completion notifications, voice replies and Yandex SpeechKit speech recognition |
| 189 | [FFFengMJL/dsh-opencode-session](https://github.com/FFFengMJL/dsh-opencode-session) | 0 | 2026-11-05 | 2026-11-06 | Per-session x-opencode-session header for custom OpenCode Go routes in DeepSeek Harness |
| 190 | [fffgfffff/cike-taskboard](https://github.com/fffgfffff/cike-taskboard) | 0 | 2026-11-06 | 2026-11-06 | 此刻 · 任务排程 — DSH 本地任务排程与到点提醒 |
| 191 | [fishingninja/ds-harness-notice-QQlike](https://github.com/fishingninja/ds-harness-notice-QQlike) | 0 | 2026-11-06 | 2026-11-06 | QQ 风格的 DSH 桌面提醒：会话需要你处理、回复完成或被打断时响一声提示音，系统托盘图标像未读消息一样闪动。 |
| 192 | [flaukowski/dsh-plugin-kannaka](https://github.com/flaukowski/dsh-plugin-kannaka) | 0 | 2026-11-06 | 2026-11-06 | Kannaka memory, swarm and KAX compute tools for DeepSeek Harness (dsh-plugin) |
| 193 | [Fqh22/dsh-rag](https://github.com/Fqh22/dsh-rag) | 0 | 2026-11-06 | 2026-11-06 | Cross-session project memory for DeepSeek Harness - MCP server + archive daemon + panel. Local-first SQLite store with handoff packs tuned for prompt-cache prefixes. |
| 194 | [fuyu-technology/dsh-memory-ui](https://github.com/fuyu-technology/dsh-memory-ui) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 插件：设置页里的「记忆与知识库」——会话短期记忆、长期记忆、知识库，支持多选归档与关键词按需召回。 |
| 195 | [FxRayHughes/dsh-prompt-book](https://github.com/FxRayHughes/dsh-prompt-book) | 0 | 2026-11-06 | 2026-11-06 | Prompt book for DeepSeek Harness (DSH): save prompts you use often behind a round button in the composer toolbar and insert one with a click |
| 196 | [gawuwuwu/dsh-live2d](https://github.com/gawuwuwu/dsh-live2d) | 0 | 2026-11-06 | 2026-11-06 | Live2D desktop pet for DeepSeek Harness: multi-instance transparent always-on-top windows, chat bubbles, AI-controlled expressions and motions, screen reading, TTS with lip sync, and proactive wake-up. |
| 197 | [gekailin/dsh-super-chat](https://github.com/gekailin/dsh-super-chat) | 0 | 2026-11-06 | 2026-11-06 | Super Chat panel and super-chat Source for DeepSeek Harness: one tagged message stream, topic views, SQLite storage, a WeChat bridge, and dsh-superagent integration. |
| 198 | [GF6364/dsh-rooms](https://github.com/GF6364/dsh-rooms) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 跨会话协作插件：工作区每个会话都是一间房，同组派活、回报只回派活方，侧栏面板拖拽分组。 |
| 199 | [GnaneshKunal/dsh-hermes-facade](https://github.com/GnaneshKunal/dsh-hermes-facade) | 0 | 2026-11-06 | 2026-11-06 | Drive a local DeepSeek Harness agent from the Hermex iOS app - a DSH host plugin that impersonates a hermes-webui server (HTTP + SSE): sessions, streaming tokens, thinking, tool cards, approvals, images and projects. |
| 200 | [gosutry/dsh-conversation-float](https://github.com/gosutry/dsh-conversation-float) | 0 | 2026-11-06 | 2026-11-06 | Turns the Conversation view into a DSH-owned floating panel: drag left to stow in the sidebar drawer, centre to return to the middle column, right to dock in the right sidebar. |
| 201 | [gouqingping/dsh-plugin-harness-cli](https://github.com/gouqingping/dsh-plugin-harness-cli) | 0 | 2026-11-06 | 2026-11-06 | 把 Harness 规范（入口 / 环境 / 范围 / 状态 / 门禁）变成可生成、可校验的配置 |
| 202 | [guiyuan77/dsh-reader](https://github.com/guiyuan77/dsh-reader) | 0 | 2026-11-06 | 2026-11-06 | 在右侧栏标签里读取工作区内的 EPUB、TXT、Markdown 与 HTML，并记住上次阅读位置。 |
| 203 | [guol9180/dsh-tech-pulse](https://github.com/guol9180/dsh-tech-pulse) | 0 | 2026-11-06 | 2026-11-06 | Tech pulse — DeepSeek Harness sidebar panel: first-hand tech news (Hacker News, RSS, AI labs, GitHub activity) with AI digest and on-demand Chinese translation |
| 204 | [Hai-Story/dsh-conversation-tools](https://github.com/Hai-Story/dsh-conversation-tools) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: star exchanges and edit sent messages while retaining previous conversation versions. |
| 205 | [han0han0le0ni/dsh-daughter](https://github.com/han0han0le0ni/dsh-daughter) | 0 | 2026-11-05 | 2026-11-06 | 给 DeepSeek Harness 的长期人格与记忆插件：人格分层、性格演化、长期记忆、技能反射与安全降级。 |
| 206 | [Hao0311/dsh-deferred-approvals](https://github.com/Hao0311/dsh-deferred-approvals) | 0 | 2026-11-06 | 2026-11-06 | Non-blocking approvals and timed questions for DeepSeek Harness: permission requests park as pending items while the model keeps working, and ask_user_question runs in timed mode. |
| 207 | [Hao0311/dsh-mimo-tts](https://github.com/Hao0311/dsh-mimo-tts) | 0 | 2026-11-06 | 2026-11-06 | Xiaomi MiMo TTS for DeepSeek Harness: a mimo_tts tool, read-aloud on answers, auto-read, and a sidebar Speech panel (built-in voices, voice design, voice cloning). |
| 208 | [Hao0311/dsh-price-badge](https://github.com/Hao0311/dsh-price-badge) | 0 | 2026-11-06 | 2026-11-06 | Peak/off-peak DeepSeek API pricing badge in the DeepSeek Harness composer, shown only while the session model is a DeepSeek route. |
| 209 | [Hao0311/dsh-toolbox](https://github.com/Hao0311/dsh-toolbox) | 0 | 2026-11-06 | 2026-11-06 | Toolbox panel for the DeepSeek Harness Web GUI: right-side drawer (full screen on phones) with connection info, one-click diagnostics, speed test, quality monitor, history and auto patrol. |
| 210 | [haoranx98/dsh-skin-galaxy](https://github.com/haoranx98/dsh-skin-galaxy) | 0 | 2026-11-06 | 2026-11-06 | 星河 Galaxy · 原生 WebGPU 实时星云皮肤 for DeepSeek Harness（紫蓝星云 / 银河尘带 / 随机流星） |
| 211 | [Harzva/dsh-leet-accelerator](https://github.com/Harzva/dsh-leet-accelerator) | 0 | 2026-11-06 | 2026-11-06 | Optional allocation-conscious tool-result pruning for DeepSeek Harness, with independent Web switches |
| 212 | [heixiua/dsh-session-suite](https://github.com/heixiua/dsh-session-suite) | 0 | 2026-10-31 | 2026-11-06 | DSH session suite: checkpoint, share, rollback, longterm memory |
| 213 | [Hemuchuan/dsh-bilingual](https://github.com/Hemuchuan/dsh-bilingual) | 0 | 2026-11-06 | 2026-11-06 | Bilingual paragraph-by-paragraph display for assistant replies in the DeepSeek Harness desktop app. |
| 214 | [Hesitate-P/dsh-sidebar-browser-agent](https://github.com/Hesitate-P/dsh-sidebar-browser-agent) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness (DSH) plugin: native agent control for the right-sidebar browser — read, click, type, scroll, eval and screenshot the real page via its Electron webview. |
| 215 | [HPNY/dsh-portfolio](https://github.com/HPNY/dsh-portfolio) | 0 | 2026-11-03 | 2026-11-06 | 持仓看板：A股实时行情 + 场外基金看板的 DeepSeek Harness 插件（fork 自 SuCriss/dsh-leekbox，MIT） |
| 216 | [HTempt/dsh-token-board](https://github.com/HTempt/dsh-token-board) | 0 | 2026-11-06 | 2026-11-06 | 为 DeepSeek Harness Web GUI 提供 Token 用量看板：今日/本月/区间消耗、热力日历、来源明细、提供商与模型排行、双轴趋势；只读本机会话日志，不联网。 |
| 217 | [huaComPj/dsh-workflow-plugin](https://github.com/huaComPj/dsh-workflow-plugin) | 0 | 2026-08-24 | 2026-11-06 | Configurable serial agent-team workflows for DeepSeek Harness, with Manager coordination, role actors, independent judging, and a visual editor. |
| 218 | [hualidan42-beep/dsh-plugin-gzh-studio](https://github.com/hualidan42-beep/dsh-plugin-gzh-studio) | 0 | 2026-11-06 | 2026-11-06 | DSH 新媒体工作台：21 条赛道合规、逐张出图、推公众号草稿、视频成片预览 |
| 219 | [hualidan42-beep/dsh-plugin-skin](https://github.com/hualidan42-beep/dsh-plugin-skin) | 0 | 2026-11-06 | 2026-11-06 | DSH 主题与外观：换肤、插画壁纸与 Windows 桌面桌宠 |
| 220 | [hudsonhou/dsh-zotero-workspace](https://github.com/hudsonhou/dsh-zotero-workspace) | 0 | 2026-11-06 | 2026-11-06 | DSH right-sidebar Zotero workspace: collection tree, rendered PDF/parsed Markdown, one-click citation into the conversation. Read-only Zotero local API. |
| 221 | [huieric/dsh-copilot-diff](https://github.com/huieric/dsh-copilot-diff) | 0 | 2026-11-06 | 2026-11-06 | Copilot-style inline diffs for every file edit in DeepSeek Harness: +A/-R per edit row, per-turn summary with Keep and Undo, single-edit undo. |
| 222 | [HusuSama/dsh-review-comments](https://github.com/HusuSama/dsh-review-comments) | 0 | 2026-11-06 | 2026-11-06 | Line-anchored review comments for DeepSeek Harness: browse and fuzzy-search workspace files with syntax highlighting and git status in the right sidebar, comment on lines or ranges, and send every comment to the model as a path#line ordered list. |
| 223 | [IanGely/dsh-client-ui-skin-saber](https://github.com/IanGely/dsh-client-ui-skin-saber) | 0 | 2026-11-06 | 2026-11-06 | Saber 昼夜双壁纸皮肤：DeepSeek Harness (DSH) Web/桌面端主题插件（壁纸 + 分层半透明 + 磨砂，无需构建） |
| 224 | [ibz13145210/dsh-plugin-package](https://github.com/ibz13145210/dsh-plugin-package) | 0 | 2026-11-06 | 2026-11-06 | 一些DSH的插件 |
| 225 | [ibz13145210/dsh-webchat-right-publish](https://github.com/ibz13145210/dsh-webchat-right-publish) | 0 | 2026-11-06 | 2026-11-06 | 魔改的网页版DeepSeek，左右结构布局，保登录，不遮挡会话，DSH更新后简单处理即可用 |
| 226 | [ifer47/dsh-theme-shelter](https://github.com/ifer47/dsh-theme-shelter) | 0 | 2026-11-06 | 2026-11-06 | Immersive weather ambience for DeepSeek Harness — rain, snow and hearth, with real recordings and a night mode. 檐下：雨 / 雪 / 炉火。 |
| 227 | [iggypcnfsky/dsh-docs](https://github.com/iggypcnfsky/dsh-docs) | 0 | 2026-11-06 | 2026-11-06 | Google Docs-style word processor for DeepSeek Harness: rich text, pages, tables, images, print, export, and agent editing. |
| 228 | [iggypcnfsky/dsh-plugins](https://github.com/iggypcnfsky/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | Format-1 DSH plugin market index for Docs and Sheets. |
| 229 | [iggypcnfsky/dsh-sheets](https://github.com/iggypcnfsky/dsh-sheets) | 0 | 2026-11-06 | 2026-11-06 | Agent-writable spreadsheet and table editor for DeepSeek Harness, with formulas, formatting, CSV/Excel import, and export. |
| 230 | [ikliml666/dsh-codewiki](https://github.com/ikliml666/dsh-codewiki) | 0 | 2026-11-06 | 2026-11-06 | CodeWiki for DeepSeek Harness: persistent, incrementally-updated code wiki with an honest four-state outcome |
| 231 | [imaused/dsh-memory-archiver](https://github.com/imaused/dsh-memory-archiver) | 0 | 2026-11-05 | 2026-11-06 | Approval-free memory archiving for DSH: backup before overwrite, one-call supersede, auto-pruned backups (30 days by default). Companion to dsh-kb-lite, which indexes these memory files for retrieval. |
| 232 | [imwhatiam/dsh-plugins](https://github.com/imwhatiam/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugins: mosaic, superpowers, background jobs |
| 233 | [Intelli-Jungle/dsh-agentroom](https://github.com/Intelli-Jungle/dsh-agentroom) | 0 | 2026-11-06 | 2026-11-06 | Slack-style multi-agent teamroom plugin for DeepSeek Harness |
| 234 | [isdou/dsh-worktrace](https://github.com/isdou/dsh-worktrace) | 0 | 2026-11-06 | 2026-11-06 | Worktrace local-only career workspace for DeepSeek Harness. Compiled macOS arm64 core; distribution artifacts only. |
| 235 | [isjya/dsh-chatgpt-provider](https://github.com/isjya/dsh-chatgpt-provider) | 0 | 2026-11-06 | 2026-11-06 | ChatGPT subscription models and account settings for DeepSeek Harness |
| 236 | [Jason25417/dsh-composer-tweaks](https://github.com/Jason25417/dsh-composer-tweaks) | 0 | 2026-11-06 | 2026-11-06 | Composer tweaks for DeepSeek Harness: mixed file/folder picker (macOS NSOpenPanel), GenUI prompt toggle, Markdown source/view switch and user-message Markdown rendering. |
| 237 | [Jason25417/dsh-external-bridge](https://github.com/Jason25417/dsh-external-bridge) | 0 | 2026-11-06 | 2026-11-06 | Local HTTP bridge for DeepSeek Harness Desktop: external processes create real sessions, send prompts, long-poll replies. |
| 238 | [jediliu005/dsh-duplicate-file-check](https://github.com/jediliu005/dsh-duplicate-file-check) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: exact/strict duplicate detection, frame-based near-duplicate MP4 groups, and batch rename/move helpers (extension, UUID, by size, by duration). |
| 239 | [ji-tz/dsh-build-servers](https://github.com/ji-tz/dsh-build-servers) | 0 | 2026-11-06 | 2026-11-06 | Remote build servers for DeepSeek Harness: per-session binding, source upload, build/install/test pipeline, SSH terminal, and agent tools. |
| 240 | [jiahui-huang1/dsh-latex-formula-editor](https://github.com/jiahui-huang1/dsh-latex-formula-editor) | 0 | 2026-11-06 | 2026-11-06 | LaTeX formula editor for the DSH sidebar: offline MathJax rendering, symbol tiles, formula templates, favourites, image/document OCR, multi-format export |
| 241 | [jojo008-coder/dsh-quarantine](https://github.com/jojo008-coder/dsh-quarantine) | 0 | 2026-11-06 | 2026-11-06 | dsh插件，增加一个隔离区，完全独立于所有插件，适合做实验 |
| 242 | [Joker2377/dsh-repo-ops](https://github.com/Joker2377/dsh-repo-ops) | 0 | 2026-11-06 | 2026-11-06 | Git and GitHub operations as structured DSH tools: status, diff, commit, push, branches, PRs, CI, issues, releases. |
| 243 | [junchaomo/dsh-traffic-counter](https://github.com/junchaomo/dsh-traffic-counter) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件 · 航拍道路断面与交叉口车流量统计（OpenVINO CPU + ByteTrack） |
| 244 | [juntaoqian/dsh-remote-v2](https://github.com/juntaoqian/dsh-remote-v2) | 0 | 2026-10-24 | 2026-11-06 | DSH Remote v2: isolated sidecar + authenticated gateway + one-time pairing for DeepSeek Harness remote access |
| 245 | [juntaoqian/dsh-vars](https://github.com/juntaoqian/dsh-vars) | 0 | 2026-10-26 | 2026-11-06 | DSH ????????yped variables + local HTTP GET/POST API + WebSocket change feed + optional Bearer token |
| 246 | [juntaoqian/dsh-workspace](https://github.com/juntaoqian/dsh-workspace) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin + tools workspace: plugins/ for plugins, tools/ for tooling |
| 247 | [jwhs648/dsh-computer-use-manager](https://github.com/jwhs648/dsh-computer-use-manager) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 电脑操作能力管理插件：一键检查与启用、匹配组件安装、运行状态和健康自检。MIT / Windows 测试版。 |
| 248 | [jy007/dsh-calendar-board](https://github.com/jy007/dsh-calendar-board) | 0 | 2026-11-05 | 2026-11-06 | Month-view calendar board for DeepSeek Harness — daily notes, DSH scheduled reminders, inline editing, completion fireworks |
| 249 | [kcgoofee-jpg/dsh-secret-form](https://github.com/kcgoofee-jpg/dsh-secret-form) | 0 | 2026-11-06 | 2026-11-06 | Secure input cards for DSH: collect secrets through a card instead of the conversation |
| 250 | [keliwang/dsh-dsbot-tweaks](https://github.com/keliwang/dsh-dsbot-tweaks) | 0 | 2026-11-06 | 2026-11-06 | Small DS Bot UI tweaks for DeepSeek Harness, kept in one bundle: currently adds a native-interface switch button beside DS Bot's bottom-left settings gear. |
| 251 | [kelunisi/dsh-neocortex](https://github.com/kelunisi/dsh-neocortex) | 0 | 2026-11-05 | 2026-11-06 | Zhinao (second brain) for DeepSeek Harness: layered Markdown memory with a local recall ledger, lifecycle engine, weekly review and a Web panel. |
| 252 | [KimiChen2000/dsh-conversation-costs](https://github.com/KimiChen2000/dsh-conversation-costs) | 0 | 2026-11-06 | 2026-11-06 | Per-conversation and per-turn DeepSeek model cost estimates for DeepSeek Harness. 对话费用统计。 |
| 253 | [KirinKylin-1/dsh-annotated-browser](https://github.com/KirinKylin-1/dsh-annotated-browser) | 0 | 2026-11-06 | 2026-11-06 | Annotation for the DSH sidebar browser: render pages through a same-origin host proxy, then click an element or drag a region and send the note into the conversation. |
| 254 | [kkomia/dsh-session-note](https://github.com/kkomia/dsh-session-note) | 0 | 2026-11-06 | 2026-11-06 | A draggable sticky note pinned beside the conversation in the DeepSeek Harness Web UI; stays put while the transcript scrolls, saved per session. |
| 255 | [kx2398/dsh-terminal-wsl](https://github.com/kx2398/dsh-terminal-wsl) | 0 | 2026-11-06 | 2026-11-06 | Persistent WSL (Windows Subsystem for Linux) terminal backend for DeepSeek Harness: registers the \`wsl\` terminal type on the shipped terminal-tool stack. |
| 256 | [LAKSPROVI/dsh-tool-search](https://github.com/LAKSPROVI/dsh-tool-search) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: load MCP tool definitions on demand with tool_search |
| 257 | [Lanjunyee/dsh-intelligence-check](https://github.com/Lanjunyee/dsh-intelligence-check) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 模型质量测试与报告插件 |
| 258 | [leicanxi/dsh-sing](https://github.com/leicanxi/dsh-sing) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 唱歌插件：sing-gateway 点歌 + RVC 翻唱 + QQ 语音投递 |
| 259 | [leng125172-code/ashare-workbench](https://github.com/leng125172-code/ashare-workbench) | 0 | 2026-11-06 | 2026-11-06 | A股投研插件：明确的行业偏好、原文互核、风险约束与计划；Cindy 与 DeepSeek Harness 适配，无自动交易 |
| 260 | [Leonlee114514/dsh-turn-cleanup](https://github.com/Leonlee114514/dsh-turn-cleanup) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：turn 结束时检查并清理本轮临时文件（.agent-tmp/ 约定 + fs/write-intent 追踪，非空则 steer 模型再走一步） |
| 261 | [LGY13880006259-coder/dsh-conversation-style](https://github.com/LGY13880006259-coder/dsh-conversation-style) | 0 | 2026-11-06 | 2026-11-06 | A left-sidebar switch that changes the assistant's conversation style between entertainment and professional. |
| 262 | [Lh1314-China/dsh-whale-eyes](https://github.com/Lh1314-China/dsh-whale-eyes) | 0 | 2026-11-06 | 2026-11-06 | 不截屏的屏幕感知插件：给 DeepSeek Harness 的模型一双眼睛，读前台应用、窗口标题、焦点控件和窗口列表，一次调用约 55～75 token。Screen sense for DSH without screenshots. Windows only. |
| 263 | [liangyu112212/dsh-aiyting-image-video](https://github.com/liangyu112212/dsh-aiyting-image-video) | 0 | 2026-11-03 | 2026-11-06 | AIyting 生图/生视频 · DeepSeek Harness 插件。当前提供图片生成、实时报价、任务恢复和账号管理；视频功能为二期。 |
| 264 | [lidaqi001/dsh-claude-code-delegate](https://github.com/lidaqi001/dsh-claude-code-delegate) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness agent preset that delegates every task to a Claude Code subagent |
| 265 | [lidaqi001/dsh-codex-claude-pipeline](https://github.com/lidaqi001/dsh-codex-claude-pipeline) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness agent preset: Codex plans and decomposes, Claude Code executes each work item. |
| 266 | [lidaqi001/dsh-codex-delegate](https://github.com/lidaqi001/dsh-codex-delegate) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness agent preset: every task is delegated to a Codex subagent |
| 267 | [Lijiajin95/ForgeLoop](https://github.com/Lijiajin95/ForgeLoop) | 0 | 2026-10-12 | 2026-11-06 | A DeepSeek Harness plugin for multi-agent software development and operations, with traceable delivery and human decisions for exceptions. |
| 268 | [limomss-dunang/dsh-aidrama](https://github.com/limomss-dunang/dsh-aidrama) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：AI 短剧工坊 —— 构想→总纲→资产→分集→分镜→提示词→生产台账→质检 的结构化制片台 |
| 269 | [limomss-dunang/dsh-video-replica](https://github.com/limomss-dunang/dsh-video-replica) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：粘一条抖音/视频号/小红书链接，自动拆解→仿写→首帧→AI 分镜视频→ffmpeg 成片（六步爆款视频复刻） |
| 270 | [LINGTIAN303/dsh-model-tabs](https://github.com/LINGTIAN303/dsh-model-tabs) | 0 | 2026-11-05 | 2026-11-06 | 给 DeepSeek Harness 的模型选择器加两级 Tab（提供商 + 模型系列），大目录时减少滚动翻找；族规则可在设置页配置。 \| Two-level tabs for the DSH model picker: provider + model family. |
| 271 | [LingYS-14/ai-companion-engine](https://github.com/LingYS-14/ai-companion-engine) | 0 | 2026-11-06 | 2026-11-06 | Stateful AI companion kernel: long-term memory, autonomous intent, sleep rhythm, QQ + web workbench · DSH plugin |
| 272 | [lisongjianustc/dsh-sidebar-panel-fold](https://github.com/lisongjianustc/dsh-sidebar-panel-fold) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: keep the global panels you choose in the sidebar and fold the rest into its More menu. |
| 273 | [liunianlh/dsh-aihot](https://github.com/liunianlh/dsh-aihot) | 0 | 2026-11-06 | 2026-11-06 | AI news panel for DeepSeek Harness: 24-hour picks, recent stories, trending topics, the daily digest and search from AIHOT, with category filters, date grouping and endless scroll. |
| 274 | [liusaipu/dsh-notes](https://github.com/liusaipu/dsh-notes) | 0 | 2026-11-06 | 2026-11-06 | DSH Desktop 随手记：flomo 风格随手记录，邮箱文件夹跨设备同步。 |
| 275 | [lixiaojie/dsh-config-guard](https://github.com/lixiaojie/dsh-config-guard) | 0 | 2026-11-06 | 2026-11-06 | Read-only DeepSeek Harness settings plugin: configuration-inheritance inventory, asset and conflict report, workspace health and real tool usage. Writes nothing. |
| 276 | [lixinpeng139/dsh-ascii-video-background](https://github.com/lixinpeng139/dsh-ascii-video-background) | 0 | 2026-11-06 | 2026-11-06 | Live ASCII character-video wallpaper for DeepSeek Harness, with a bundled default video and a Settings page for your own clips. |
| 277 | [LMhuo/ds-snap-line](https://github.com/LMhuo/ds-snap-line) | 0 | 2026-11-06 | 2026-11-06 | A clothesline of polaroid photos hanging under the DeepSeek Harness message composer. |
| 278 | [LN334/dsh-netease-float](https://github.com/LN334/dsh-netease-float) | 0 | 2026-11-06 | 2026-11-06 | Full-page NetEase Cloud Music player plugin for DeepSeek Harness: now playing, full-screen lyrics, playlists, search, account settings |
| 279 | [Looori/dsh-connector-hub](https://github.com/Looori/dsh-connector-hub) | 0 | 2026-11-04 | 2026-11-06 | deepseek harness connector hub plugin |
| 280 | [louisding9527/dsh-session-search](https://github.com/louisding9527/dsh-session-search) | 0 | 2026-11-06 | 2026-11-06 | Keyword search over your local DeepSeek Harness chat history: find past sessions by keyword, with timestamps and matching excerpts. |
| 281 | [loyalchiiina/dsh-browser-hub](https://github.com/loyalchiiina/dsh-browser-hub) | 0 | 2026-11-06 | 2026-11-06 | 侧边栏浏览器搜索引擎以及书签功能补丁插件 (dsh-browser-hub): 给 DSH 自带浏览器加搜索引擎选择+书签收藏+多级文件夹+导入书签HTML |
| 282 | [Lroyia/dsh-book-reader](https://github.com/Lroyia/dsh-book-reader) | 0 | 2026-11-06 | 2026-11-06 | 基于dsh开发的本地书架插件 |
| 283 | [LuckyOneTwoThree/dsh-hitchfin](https://github.com/LuckyOneTwoThree/dsh-hitchfin) | 0 | 2026-11-05 | 2026-11-06 | WorkBuddy, Qoder &amp; Trae subscriptions for DeepSeek Harness — multi-account failover, per-account HTTP(S) proxies, free-model filter and model visibility. · 将 WorkBuddy / Qoder / Trae 订阅模型接入 DSH。 |
| 284 | [LuoShanHui/dsh-doc-ledger](https://github.com/LuoShanHui/dsh-doc-ledger) | 0 | 2026-11-06 | 2026-11-06 | DSH 会话文档台账插件：记录每个会话使用/创建/修改过哪些文档，支持时间排序、类型分组、搜索、预览与跨会话汇总。 A DSH sidebar plugin: per-session document ledger — which documents a session read, created or modified — with time ordering, type grouping, search, two preview modes and a cross-session view. Windows only. |
| 285 | [luotianhao21/dsh-backup-all](https://github.com/luotianhao21/dsh-backup-all) | 0 | 2026-11-06 | 2026-11-06 | Snapshot everything in your DSH environment: one-click full backup and rollback of plugins, Skills, MCP servers, Agent Presets, config, credentials and external data. |
| 286 | [LXD-8/dsh-quota-windows](https://github.com/LXD-8/dsh-quota-windows) | 0 | 2026-11-06 | 2026-11-06 | Quota windows — subscription and balance status for added providers in DeepSeek Harness |
| 287 | [Lxion0553/dsh-arxiv-inspiration](https://github.com/Lxion0553/dsh-arxiv-inspiration) | 0 | 2026-11-06 | 2026-11-06 | arXiv research-inspiration plugin for DeepSeek Harness: KB-filtered surveys, paper library, deep-read notes |
| 288 | [lyp-know-how/dsh-plugin-printing-pattern-v1](https://github.com/lyp-know-how/dsh-plugin-printing-pattern-v1) | 0 | 2026-11-06 | 2026-11-06 | A DSH plugin for the textile printing industry. Generates AI image prompts based on customer needs, with built-in copyright warnings and manufacturing constraints. |
| 289 | [lzyxczw-cyber/dafish-clean](https://github.com/lzyxczw-cyber/dafish-clean) | 0 | 2026-11-06 | 2026-11-06 | 大肥鱼 clean — unofficial Mole CLI panel for DeepSeek Harness (system health, cleanup previews, disk analysis, app inventory, maintenance, history) |
| 290 | [Magelovania/dsh-branch-notes](https://github.com/Magelovania/dsh-branch-notes) | 0 | 2026-11-06 | 2026-11-06 | ????:DSH ????????,AI ??? Harness ????,?? API Key |
| 291 | [MarushiruDonato/dsh-process-manager](https://github.com/MarushiruDonato/dsh-process-manager) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 专属后台与子进程监控、诊断与生命周期管理插件 |
| 292 | [MauroProto/mbrowser](https://github.com/MauroProto/mbrowser) | 0 | 2026-11-06 | 2026-11-06 | Complemento de DeepSeek Harness para Chrome con control en segundo plano, autorización local y panel de actividad. |
| 293 | [mdalboni/dsh-turn-title](https://github.com/mdalboni/dsh-turn-title) | 0 | 2026-10-30 | 2026-11-06 | Auto-title DeepSeek Harness conversations after the first exchange (user + assistant) with a chat header update button. |
| 294 | [MDX-Tom/dsh-scratch-workspace](https://github.com/MDX-Tom/dsh-scratch-workspace) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness (DSH) 会话级沙箱隔离与草稿常态洁净插件 |
| 295 | [MeirinRuan/dsh-conversation-reflow](https://github.com/MeirinRuan/dsh-conversation-reflow) | 0 | 2026-11-06 | 2026-11-06 | 让 DSH 会话文字与 Markdown 表格适应侧栏之间的可用宽度。 |
| 296 | [MeirinRuan/dsh-model-interruption-notifier](https://github.com/MeirinRuan/dsh-model-interruption-notifier) | 0 | 2026-11-06 | 2026-11-06 | DSH 模型运行失败后自动继续，也可切换为应用内提醒并手动确认。 |
| 297 | [MeirinRuan/dsh-question-notifier](https://github.com/MeirinRuan/dsh-question-notifier) | 0 | 2026-11-06 | 2026-11-06 | DSH 待回答问题与计划审阅提醒，支持会话跳转和可选系统通知。 |
| 298 | [MeirinRuan/dsh-two-row-header](https://github.com/MeirinRuan/dsh-two-row-header) | 0 | 2026-11-06 | 2026-11-06 | 将 DSH 会话顶栏操作与工具分行排列，窄宽度继续换行。 |
| 299 | [MeirinRuan/dsh-workspace-drop](https://github.com/MeirinRuan/dsh-workspace-drop) | 0 | 2026-11-06 | 2026-11-06 | 将本地文件夹拖入 DSH 桌面工作区列表或选择器，注册为工作区。 |
| 300 | [MeirinRuan/dsh-workspace-name-wrap](https://github.com/MeirinRuan/dsh-workspace-name-wrap) | 0 | 2026-11-06 | 2026-11-06 | 让 DSH 侧栏中的长工作区名称按可用宽度换行。 |
| 301 | [Mercer08572/dsh-plugin-token-usage](https://github.com/Mercer08572/dsh-plugin-token-usage) | 0 | 2026-11-05 | 2026-11-06 | Token usage plugin for dsh |
| 302 | [Michael-ZAG/dsh-haloflux](https://github.com/Michael-ZAG/dsh-haloflux) | 0 | 2026-11-06 | 2026-11-06 | DSH Web GUI 的全帧光环背景，由当前会话的 token 流与工具调用实时驱动。让ai的思考过程可视化，原作视觉 Ryder191 |
| 303 | [miniluckybull/dsh-ui-toolbox](https://github.com/miniluckybull/dsh-ui-toolbox) | 0 | 2026-11-06 | 2026-11-06 | Resident UI toolbox for DeepSeek Harness: pick any element of the live Web UI, copy its component/selector/styles, or insert the context into the composer. |
| 304 | [MKTerXiaoV/dsh-pharma-review](https://github.com/MKTerXiaoV/dsh-pharma-review) | 0 | 2026-11-06 | 2026-11-06 | 市场部体检 · DeepSeek Harness 插件：证据、分析、洞察、关键信息、活动五个医药市场体检 skill，加五关总体检和体检档案 |
| 305 | [moldkey/dsh-deepseekbase](https://github.com/moldkey/dsh-deepseekbase) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek prices, plugin search and model specs inside DeepSeek Harness. We run free sandbox install tests on every DSH plugin — see which ones actually work. |
| 306 | [moldkey/dsh-plugin-market](https://github.com/moldkey/dsh-plugin-market) | 0 | 2026-11-05 | 2026-11-06 | DSH plugin market index where every entry carries its real sandbox install verdict. 4,367 plugins, free to subscribe. |
| 307 | [monika2333/dsh-win-toast-notify](https://github.com/monika2333/dsh-win-toast-notify) | 0 | 2026-11-06 | 2026-11-06 | Native Windows toast notification when a DeepSeek Harness turn finishes: session title, a preview of the final reply and the elapsed time. |
| 308 | [monster-30cl/dsh-db-workspace](https://github.com/monster-30cl/dsh-db-workspace) | 0 | 2026-11-03 | 2026-11-06 | 让dsh更简单的连接数据库 |
| 309 | [monster-30cl/dsh-git-workspace](https://github.com/monster-30cl/dsh-git-workspace) | 0 | 2026-11-02 | 2026-11-06 | Git review, workspace changes, and branch management plugin for DeepSeek Harness Desktop. |
| 310 | [MoonSand/dsh-ui-optimize](https://github.com/MoonSand/dsh-ui-optimize) | 0 | 2026-11-06 | 2026-11-06 | Minimalist theme gallery (8 themes, one palette per scheme) plus desktop Reload/Restart actions for the DeepSeek Harness web interface - two features, each with its own switch. · DSH 界面优化：8 套极简主题（浅色与深色各一组配色）+ 侧栏底部的刷新/重启按钮，两个功能各有独立开关。 |
| 311 | [mount9527/dsh-github-sync](https://github.com/mount9527/dsh-github-sync) | 0 | 2026-11-04 | 2026-11-06 | 同步 DSH 会话到私有 GitHub 仓库，实现跨设备接力 |
| 312 | [mryouyouHK/youyou-sidebar-logo-animation](https://github.com/mryouyouHK/youyou-sidebar-logo-animation) | 0 | 2026-11-06 | 2026-11-06 | Morphs the sidebar whale and sweeps a marquee across DEEPSEEK HARNESS while a session generates, marks conversation titles with a whale icon, plays a whale-dive animation while a conversation loads, and draws a light rotating rainbow ring around any focused composer. |
| 313 | [Mu-scorpio/dsh-mineru](https://github.com/Mu-scorpio/dsh-mineru) | 0 | 2026-11-06 | 2026-11-06 | MinerU PDF parsing plugin for DeepSeek Harness (DSH): extract formulas, tables, and text into Markdown with smart chunking and interactive UI. |
| 314 | [musria5001/dsh-forward-panel](https://github.com/musria5001/dsh-forward-panel) | 0 | 2026-11-06 | 2026-11-06 | 摘选 DSH 对话，原文或摘要转发到其他工作区的新会话。Pick, summarize, forward. |
| 315 | [mutexz/dsh-myself-preset](https://github.com/mutexz/dsh-myself-preset) | 0 | 2026-11-06 | 2026-11-06 | 语感花房：把语料和纠正编译成可切换的 DSH preset |
| 316 | [Muxiuesd/dsh-pixel](https://github.com/Muxiuesd/dsh-pixel) | 0 | 2026-11-06 | 2026-11-06 | Pixel art studio for DeepSeek Harness (DSH) — a three-pane editor (tools / canvas / palette) inside the conversation tab: wheel zoom, layers, palette editing, PNG export to the session folder. |
| 317 | [Nannanyeye/dsh-envdoctor](https://github.com/Nannanyeye/dsh-envdoctor) | 0 | 2026-11-04 | 2026-11-06 | DSH 插件：30 种开发工具一键审计安装 + 环境分享码，让团队配置一致 |
| 318 | [nanwu98/dsh-desktop-autostart-win](https://github.com/nanwu98/dsh-desktop-autostart-win) | 0 | 2026-11-06 | 2026-11-06 | Windows sign-in autostart for the DeepSeek Harness desktop app: one Settings switch, one per-user startup entry, and automatic detection of the installed app. |
| 319 | [nanwu98/dsh-hide-account-models](https://github.com/nanwu98/dsh-hide-account-models) | 0 | 2026-11-06 | 2026-11-06 | Hide the signed-in DeepSeek account model group in DeepSeek Harness and keep every request on the official API-key provider. |
| 320 | [newpage1/dsh-fishgirl-notify](https://github.com/newpage1/dsh-fishgirl-notify) | 0 | 2026-11-06 | 2026-11-06 | DSH 完成提醒：回合结束时由「肥鱼娘」在手机弹出「做好啦」通知（飞书 / ntfy / Web Push），并在页面内播放可爱动效 |
| 321 | [Nico233333/dsh-persona](https://github.com/Nico233333/dsh-persona) | 0 | 2026-11-06 | 2026-11-06 | Global persona system for DeepSeek Harness: one persona mounted across every session, dedicated persona page, editable card library, any-format import. |
| 322 | [Nowyousee1/agentloom](https://github.com/Nowyousee1/agentloom) | 0 | 2026-11-05 | 2026-11-06 | One source of truth for skills, MCP servers and memory across AI coding agents. |
| 323 | [Nyco1d/dsh-prompt-optimizer](https://github.com/Nyco1d/dsh-prompt-optimizer) | 0 | 2026-11-06 | 2026-11-06 | 在 DeepSeek Harness 输入框旁一键优化提示词（区别于简单的重整原始提示词逻辑） |
| 324 | [ObliviateOnline/dsh-cinema](https://github.com/ObliviateOnline/dsh-cinema) | 0 | 2026-11-06 | 2026-11-06 | DSH 影音工作室插件：左侧栏入口，TMDB 海报墙 + CMS 片源管理，支持搜索、选集与面板内 HLS/FLV 播放。 |
| 325 | [oldcitynight/dsh-bettertaskgraphs](https://github.com/oldcitynight/dsh-bettertaskgraphs) | 0 | 2026-11-06 | 2026-11-06 | Transactional task graphs and a Web conversation panel for DeepSeek Harness |
| 326 | [olivine13/dsh-image-scope](https://github.com/olivine13/dsh-image-scope) | 0 | 2026-11-06 | 2026-11-06 | Pixel-coordinate readout and one adjustable measuring rectangle for the DeepSeek Harness sidebar image preview. |
| 327 | [omdsh-dev/dsh-better-compact](https://github.com/omdsh-dev/dsh-better-compact) | 0 | 2026-10-27 | 2026-11-06 | Better compaction for DeepSeek Harness: native/goal/handoff modes, budget controls and visualization. |
| 328 | [oobitoooo/dsh-quorum](https://github.com/oobitoooo/dsh-quorum) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: virtual council multi-agent review (context sandbox, TTD scoring with dynamic weights, 3-round circuit breaker, markdown-only egress) |
| 329 | [opentandem/dsh-phone](https://github.com/opentandem/dsh-phone) | 0 | 2026-11-06 | 2026-11-06 | Use DeepSeek Harness (dsh) from your phone: a dsh plugin that pairs your computer with OpenTandem through a QR code. |
| 330 | [OStarsO/dsh-processing-status](https://github.com/OStarsO/dsh-processing-status) | 0 | 2026-11-06 | 2026-11-06 | 在 DeepSeek Harness 输入框上方显示处理中计时和轮换趣味提示的轻量插件。 |
| 331 | [oTAKUBANG1/bili-follow-doctor](https://github.com/oTAKUBANG1/bili-follow-doctor) | 0 | 2026-11-06 | 2026-11-06 | B站关注体检：找出已注销和长期没更新的僵尸UP。油猴脚本 / DSH插件 / 命令行三种形态，纯本地运行。 |
| 332 | [pinion05/dsh-tools-toggle](https://github.com/pinion05/dsh-tools-toggle) | 0 | 2026-11-06 | 2026-11-06 | Toggle DeepSeek Harness (DSH) model tools on/off from the web Settings page — hidden tools lose schema, lookup, and execution together |
| 333 | [pkkkkh/dsh-plugins](https://github.com/pkkkkh/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：B 站视频分析——文稿骨架压缩、通道探针、双字幕轨/第二路 ASR 交叉校验、商单识别折叠、定点抓帧 |
| 334 | [PowehiG/dsh-knowledge-board](https://github.com/PowehiG/dsh-knowledge-board) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: personal knowledge dashboard for Obsidian, Notion, Feishu docs and Dida365 tasks, with stats, storage map, Markdown preview and deep links. |
| 335 | [Psychologist-jpg/dsh_mission-control](https://github.com/Psychologist-jpg/dsh_mission-control) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 的 Agent Teams 任务驾驶舱插件：任务级人数上限、上下文哨兵自动交接、驾驶舱广播与实时进度悬浮窗。 |
| 336 | [pure-cow-horse/dsh-model-pool](https://github.com/pure-cow-horse/dsh-model-pool) | 0 | 2026-10-22 | 2026-11-06 | DSH plugin: probe each provider's upstream catalog, test what actually answers, and chain the keepers into named failover schemes that a virtual ModelPool provider follows at request time. |
| 337 | [pythoner1984/dsh-wechat-todo](https://github.com/pythoner1984/dsh-wechat-todo) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: turn WeChat group chats into followable todos (read-only local WeChat reader + LLM summary + kanban) |
| 338 | [pzdn2009/dsh-pomodoro-timer](https://github.com/pzdn2009/dsh-pomodoro-timer) | 0 | 2026-11-06 | 2026-11-06 | A floating Pomodoro focus timer plugin for DeepSeek Harness |
| 339 | [pzyyll/dsh-plugins](https://github.com/pzyyll/dsh-plugins) | 0 | 2026-11-03 | 2026-11-06 | pnpm workspace for dsh plugins. |
| 340 | [qcy-good/turn-cost-footer](https://github.com/qcy-good/turn-cost-footer) | 0 | 2026-11-06 | 2026-11-06 | Real per-turn CNY cost in the DeepSeek Harness completed-turn footer, folded from the session log with a local price table. |
| 341 | [QIFANAI/dsh-startup-vyron](https://github.com/QIFANAI/dsh-startup-vyron) | 0 | 2026-11-06 | 2026-11-06 | VYRON 星海鲸航 — DSH 启动动画 + UI 皮肤插件（公开源码版；不含第三方壁纸素材，缺失时按降级链运行） |
| 342 | [Qingzhou-Joshua/dsh-dev-toolbox](https://github.com/Qingzhou-Joshua/dsh-dev-toolbox) | 0 | 2026-11-06 | 2026-11-06 | DSH (the agent harness) sidebar dev toolbox: 77 tools — JSON/formatters/URL/encode-decode/hash/crypto/text/number/datetime/random/color/device/HTML reference. Pure browser-side, zero network requests. |
| 343 | [qinshige/dsh-knowledge-base](https://github.com/qinshige/dsh-knowledge-base) | 0 | 2026-11-06 | 2026-11-06 | 我的知识库 · DeepSeek Harness 插件：上传跨境选品知识文档，Agent 先检索知识库再回答选品问题 |
| 344 | [qiz42144-web/dsh-token-usage](https://github.com/qiz42144-web/dsh-token-usage) | 0 | 2026-11-06 | 2026-11-06 | A lightweight DSH plugin for tracking and visualizing AI token usage. 轻量的 DSH Token 用量统计插件，本地记录、按 Provider/模型拆分、支持趋势图与年度热力图。 |
| 345 | [qq1003240666/dsh-qingshi-plugin](https://github.com/qq1003240666/dsh-qingshi-plugin) | 0 | 2026-11-03 | 2026-11-06 | 大肥鱼青史插件 |
| 346 | [quoc187/dsh-keynav](https://github.com/quoc187/dsh-keynav) | 0 | 2026-11-06 | 2026-11-06 | Keyboard navigation for DeepSeek Harness web panels: arrows, space, enter for question, plan-review and approval cards. |
| 347 | [QZJ903/dsh-sensenova-suite](https://github.com/QZJ903/dsh-sensenova-suite) | 0 | 2026-10-24 | 2026-11-06 | \[DSH Plugins\]商汤多账号 Key 池与 429 限流调度、三协议适配与降级链、积分用量监控与多模态工具 |
| 348 | [raholly/dsh-temp-task](https://github.com/raholly/dsh-temp-task) | 0 | 2026-11-06 | 2026-11-06 | Temporary task zone for DeepSeek Harness: one click creates a folder, a workspace and a conversation. |
| 349 | [railgun20001/dsh-persona-modes](https://github.com/railgun20001/dsh-persona-modes) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 人格模式插件：设置里一键切换猫娘、傲娇、毒舌、妈妈、牛马、鲸鱼娘、女仆、大小姐等语气；只改表达，不改事实与代码。 |
| 350 | [raven3005672/dsh-plugin-im-remote-control](https://github.com/raven3005672/dsh-plugin-im-remote-control) | 0 | 2026-11-03 | 2026-11-06 | 飞书机器人远程控制 DSH 会话 |
| 351 | [Rcyc-1025/dsh-crash-triage](https://github.com/Rcyc-1025/dsh-crash-triage) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：把一次 MLIR 崩溃压缩成可复现命令、最小 IR、出错 pass、sanitizer 栈与可转交报告 |
| 352 | [realhenrylan/dsh-token-plugin](https://github.com/realhenrylan/dsh-token-plugin) | 0 | 2026-11-01 | 2026-11-06 | DeepSeek Harness 用量与消耗插件（dsh-usage-plugin）—— 每次调用的 token 用量/缓存命中统计、峰谷计费、余额查询、CSV/JSON/PNG 导出，可经桌面端一键安装或命令行 dsh plugin add 安装。 |
| 353 | [REALOIYO/dsh-web-gate](https://github.com/REALOIYO/dsh-web-gate) | 0 | 2026-11-06 | 2026-11-06 | 给 DeepSeek Harness 加一层带密码的局域网网关：手机连同一个 WiFi，浏览器打开就能用电脑上的 DSH |
| 354 | [Refreshing-CZQ/dsh-xhs-style](https://github.com/Refreshing-CZQ/dsh-xhs-style) | 0 | 2026-11-06 | 2026-11-06 | Formats DSH agent replies as Xiaohongshu-style posts: star comparison table, emoji bullets, audited images with source links, banned-slang filter. Cordis bundle plugin for DeepSeek Harness. |
| 355 | [RinatITP/dsh-plugins](https://github.com/RinatITP/dsh-plugins) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness (DSH) plugins — security-first MCP server manager and more |
| 356 | [robinliang0829-lgtm/dsh-cloud-sync](https://github.com/robinliang0829-lgtm/dsh-cloud-sync) | 0 | 2026-11-06 | 2026-11-06 | OpenTelemetry GenAI observability (reusing LoongSuite plugin) + multi-device cloud state sync for DeepSeek Harness |
| 357 | [rodrequezsaievade764-rgb/dsh-auto-successor](https://github.com/rodrequezsaievade764-rgb/dsh-auto-successor) | 0 | 2026-11-06 | 2026-11-06 | 自动接力：DSH 会话水位到阈值时自动开新会话——AI 先把任务状态摘要成交接稿写进新会话首条消息，旧会话归档。长任务永不断档。 |
| 358 | [rubyzhao666/dsh-paper2html](https://github.com/rubyzhao666/dsh-paper2html) | 0 | 2026-11-06 | 2026-11-06 | Paper2HTML for DeepSeek Harness: turn arXiv papers or PDFs into shareable, interactive HTML reading pages — no API key required. |
| 359 | [rubyzhao666/dsh-plugins-market](https://github.com/rubyzhao666/dsh-plugins-market) | 0 | 2026-11-06 | 2026-11-06 | Format-1 plugin market index for ruby zhao's DeepSeek Harness plugins: TubeInsight, PRD Generator, Paper2HTML. |
| 360 | [rubyzhao666/dsh-prd-generator](https://github.com/rubyzhao666/dsh-prd-generator) | 0 | 2026-11-06 | 2026-11-06 | PRD Generator for DeepSeek Harness: clarification → PRD → ralph-compatible prd.json → acceptance checklist. |
| 361 | [rubyzhao666/dsh-tube-insight](https://github.com/rubyzhao666/dsh-tube-insight) | 0 | 2026-11-06 | 2026-11-06 | TubeInsight for DeepSeek Harness: YouTube transcript → cited insights, product intel, PRD drafts and multi-video comparisons, right inside DSH. No Chrome extension needed. |
| 362 | [rxdage/dsh-plugin-question-attachments](https://github.com/rxdage/dsh-plugin-question-attachments) | 0 | 2026-11-06 | 2026-11-06 | Attach images/files while answering ask_user_question cards in DeepSeek Harness (alpha) |
| 363 | [SaigyoujYuyuko/dsh-keine](https://github.com/SaigyoujYuyuko/dsh-keine) | 0 | 2026-11-06 | 2026-11-06 | 上白泽慧音 for your chat log — DSH 的撤回与编辑重发，图片附件不丢 |
| 364 | [Sakayorilove/dsh-Laurel](https://github.com/Sakayorilove/dsh-Laurel) | 0 | 2026-11-06 | 2026-11-06 | 给 DeepSeek Harness 的控制中心与模块商店：按需安装模块、独立更新，保留配置与数据。 |
| 365 | [SaltedFish-ZZJ/dsh-weread-shelf](https://github.com/SaltedFish-ZZJ/dsh-weread-shelf) | 0 | 2026-11-06 | 2026-11-06 | 书屿 · 微信读书书架插件 for DSH：书架、Chrome 独立窗口阅读、AI 陪读台、写入 Obsidian |
| 366 | [samanhappy/dsh-workbench](https://github.com/samanhappy/dsh-workbench) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: local Git, GitLab/GitHub MRs &amp; Issues, Aliyun DMS/SLS approvals, PingCode and skills — in one sidebar panel |
| 367 | [Samanthara726/DSH-Brain-Memory](https://github.com/Samanthara726/DSH-Brain-Memory) | 0 | 2026-11-06 | 2026-11-06 | Prevent your DSH from experiencing memory loss! |
| 368 | [sarsgy-wenjian/dsh-wenjian-team](https://github.com/sarsgy-wenjian/dsh-wenjian-team) | 0 | 2026-11-05 | 2026-11-06 | DSH 文稿创作团队（10 技能）：只读校验→三档建议→作者勾选→定点替换→逐字复核，不自动改稿。 |
| 369 | [sena-nana/claude-session-bridge](https://github.com/sena-nana/claude-session-bridge) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness bundle for browsing local Claude Code and Codex sessions |
| 370 | [SenhoiBot/dsh-account-statusbar](https://github.com/SenhoiBot/dsh-account-statusbar) | 0 | 2026-11-06 | 2026-11-06 | DSH Web UI 底部状态栏插件：首个条目显示 DeepSeek 账户余额 |
| 371 | [SenhoiBot/dsh-page-translator](https://github.com/SenhoiBot/dsh-page-translator) | 0 | 2026-11-06 | 2026-11-06 | 整页主题感知翻译 + 中文→英文回复：DSH 内置浏览器插件 + Edge/Chrome MV3 扩展 |
| 372 | [SenhoiBot/dsh-xhs-evaluator](https://github.com/SenhoiBot/dsh-xhs-evaluator) | 0 | 2026-11-06 | 2026-11-06 | 小红书笔记评估悬浮球（DSH 插件）：多模型预测阅读/点赞/收藏，仅在小红书与创作平台页面显示 |
| 373 | [senmoxiu/dsh-git-heatmap](https://github.com/senmoxiu/dsh-git-heatmap) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：把本机多个 git 仓库的本人提交渲染成 GitHub 风格 53×7 贡献热力图，支持 GitHub/Gitee 远程贡献合并 |
| 374 | [shabe222/dsh-guzheng-pond](https://github.com/shabe222/dsh-guzheng-pond) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：点一下，屏幕上就有一首古筝，脚边浮起一汪跟着声音起伏的水。子会话读乐理手册编曲，离线渲成 wav。 |
| 375 | [shamcleren/dsh-security-scan](https://github.com/shamcleren/dsh-security-scan) | 0 | 2026-11-06 | 2026-11-06 | DSH plugin: local Python/Go/JS/TS security scanning with offline reports, optional runtime baseline and evidence-based AI review |
| 376 | [shinji00222/dsh-incognito-chat](https://github.com/shinji00222/dsh-incognito-chat) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 无痕对话插件：会话只在内存里，不写盘、不进历史 |
| 377 | [shlan28/dsh-task-board](https://github.com/shlan28/dsh-task-board) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：侧栏任务看板，把卡片派发到独立会话执行并回收进度与结果。 |
| 378 | [shuijhu/dsh-quota-autoresume](https://github.com/shuijhu/dsh-quota-autoresume) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin that resumes tasks stopped by plan-quota exhaustion, right after the next quota reset (05:00/10:00/15:00/20:00/24:00). |
| 379 | [SilverKurali/dsh-phone-tunnel](https://github.com/SilverKurali/dsh-phone-tunnel) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：在服务进程内部把正在运行的 DeepSeek Harness 网页界面挂到组网网卡上（进程内反代 + 状态面板，单实例，不用第二个 dsh，也不用 SSH） |
| 380 | [skyrocks/dsh-plugins](https://github.com/skyrocks/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | skyrocks 的 DSH 插件合集：DeepSeek 余额/花费、OpenCode GO 额度 \| Two DeepSeek Harness plugins |
| 381 | [smynbnb/dsh-ide-bridge](https://github.com/smynbnb/dsh-ide-bridge) | 0 | 2026-10-27 | 2026-11-06 | Bridge DeepSeek Harness into a JetBrains IDE tool window: compact panel, live streaming, approval prompts, IDE theme sampling, and MCP tools. |
| 382 | [SonettoGu14/dsh-session-smart-rename](https://github.com/SonettoGu14/dsh-session-smart-rename) | 0 | 2026-11-06 | 2026-11-06 | DSH Web GUI plugin: a sidebar "Smart rename" action reads the session conversation, asks its own model for a category and short topic, then saves an editable title. |
| 383 | [SpBs2004/dsh-paper-reader](https://github.com/SpBs2004/dsh-paper-reader) | 0 | 2026-11-06 | 2026-11-06 | Paper reading plugin for DeepSeek Harness: paper library, outline, KaTeX/PDF page reader, selection-to-chat, notes and review material. |
| 384 | [StarChen-Cycler/dsh-ctl](https://github.com/StarChen-Cycler/dsh-ctl) | 0 | 2026-11-06 | 2026-11-06 | Loopback HTTP control plane for a long-running DeepSeek Harness (dsh web) process: list, create, prompt, cancel and tail sessions over SSH. |
| 385 | [StarRob1n/dsh-account-balance](https://github.com/StarRob1n/dsh-account-balance) | 0 | 2026-11-04 | 2026-11-06 | Floating ball for DeepSeek Harness showing your signed-in account balance (OAuth), live pricing, today's price curve and a token-consumption estimate. |
| 386 | [StarWind97/dsh-fatfish-notes](https://github.com/StarWind97/dsh-fatfish-notes) | 0 | 2026-10-28 | 2026-11-06 | 肥鱼笔记 / Fatfish Notes：私人笔记管理，保存 DSH 会话、编辑 Markdown、导出图文，通过自己的 GitHub 私有仓库同步。 |
| 387 | [Stxr/dsh-session-bridge](https://github.com/Stxr/dsh-session-bridge) | 0 | 2026-11-06 | 2026-11-06 | A reusable DeepSeek Harness plugin for confirmed desktop session navigation from local applications. |
| 388 | [suifei/dsh-market-lens](https://github.com/suifei/dsh-market-lens) | 0 | 2026-11-06 | 2026-11-06 | 寰镜 MarketLens — read-only A-share / HK / US market board plugin for the DeepSeek Harness Web GUI |
| 389 | [sw503544488/dsh-harness-launcher](https://github.com/sw503544488/dsh-harness-launcher) | 0 | 2026-11-06 | 2026-11-06 | One desktop icon for DeepSeek Harness: starts it hidden when stopped, reopens the running UI when it is not, and adds Restart / Close to the Web sidebar. Windows only. |
| 390 | [talulra/dsh-wallpaper-glass](https://github.com/talulra/dsh-wallpaper-glass) | 0 | 2026-11-06 | 2026-11-06 | Local desktop wallpaper behind a translucent DeepSeek Harness window |
| 391 | [tanpaopao/memory-dock](https://github.com/tanpaopao/memory-dock) | 0 | 2026-11-06 | 2026-11-06 | Local memory cards for macOS and DeepSeek Harness — floating ball, pluggable memory files, drag into any AI. |
| 392 | [taoziliyouchong/dsh-at-menu](https://github.com/taoziliyouchong/dsh-at-menu) | 0 | 2026-11-06 | 2026-11-06 | 在 @ 引用菜单顶部加一排类别标签，点标签只看该类候选。 |
| 393 | [taoziliyouchong/dsh-premise-trace](https://github.com/taoziliyouchong/dsh-premise-trace) | 0 | 2026-11-06 | 2026-11-06 | 回望一件事怎么变成现在这样，说清它现在靠什么成立，判断它下一步会变成什么。 |
| 394 | [taoziliyouchong/dsh-prompt-shelf](https://github.com/taoziliyouchong/dsh-prompt-shelf) | 0 | 2026-11-06 | 2026-11-06 | 在输入框工具行里存常用提示词：搜索、插入或整框替换，带变量与回收站。 |
| 395 | [TBAOT/dsh-persona](https://github.com/TBAOT/dsh-persona) | 0 | 2026-11-06 | 2026-11-06 | Multi-persona memory for DeepSeek Harness: two-tier persona memory (user profile + agent notes) with per-turn review. 多个角色各自独立的长期记忆。 |
| 396 | [theBeautifulIce/dsh-Immunity-memory](https://github.com/theBeautifulIce/dsh-Immunity-memory) | 0 | 2026-11-06 | 2026-11-06 | dsh-Immunity-memory — local-first cross-session long-term memory for DeepSeek Harness. 八层记忆 / FTS5+向量+图谱 / 模板 / 审计 / 可视化。 |
| 397 | [Theembers/dsh-quick-tasks](https://github.com/Theembers/dsh-quick-tasks) | 0 | 2026-11-06 | 2026-11-06 | DSH 左侧栏「后台任务」插件：管理需要后台运行的本地服务，一键启动/停止/重启与状态查看 |
| 398 | [Thunderunruly/agent-office](https://github.com/Thunderunruly/agent-office) | 0 | 2026-11-06 | 2026-11-06 | A fixed-pixel office tower for DeepSeek Harness: workspaces are floors, sessions are offices, agent teams are the people inside. |
| 399 | [Timqt/dsh-rapidocr](https://github.com/Timqt/dsh-rapidocr) | 0 | 2026-11-06 | 2026-11-06 | Local, offline OCR plugin for DeepSeek Harness — an ocr_image tool backed by a pure-Node.js RapidOCR (PP-OCRv3) engine. No GPU, no network, no vision model. |
| 400 | [Tom-l-j-h/dsh-ctx-log](https://github.com/Tom-l-j-h/dsh-ctx-log) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: full-fidelity session context trail logging (JSONL) + compaction-safe recall |
| 401 | [tower666/dsh-checkpoints](https://github.com/tower666/dsh-checkpoints) | 0 | 2026-11-06 | 2026-11-06 | Per-turn git checkpoints for DeepSeek Harness: undo one turn's changes, or roll the workspace back to an earlier turn, file by file, with a diff preview. |
| 402 | [trsing999/dsh-chenchen](https://github.com/trsing999/dsh-chenchen) | 0 | 2026-11-06 | 2026-11-06 | 琛琛的身体层：DSH 里的零成本桌面工具（看屏幕 / 听歌 / 量电脑 / 做梦 / 叫停） |
| 403 | [uhygyuf/cs-source-reliable](https://github.com/uhygyuf/cs-source-reliable) | 0 | 2026-11-06 | 2026-11-06 | Source reliability for CS teaching in DeepSeek Harness: 119 verified CS sources, find + citation-audit tools. · 计算机信源可靠性插件 |
| 404 | [uhygyuf/quantitativeTrading-source-reliable](https://github.com/uhygyuf/quantitativeTrading-source-reliable) | 0 | 2026-11-06 | 2026-11-06 | Verified, agent-collectable sources for quantitative finance and crypto trading: regulator filings, PIT fundamentals, macro, exchange APIs, on-chain data and archives, each with authority tier and freshness probes. · 量化金融与加密交易信源注册表：监管原始文件、PIT 基本面、宏观、交易所 API、链上数据与归档，带权威分级与时效探测。 |
| 405 | [unhurriedly/dsh-sheji-library](https://github.com/unhurriedly/dsh-sheji-library) | 0 | 2026-11-06 | 2026-11-06 | 设记 Design Memory component library panel for DeepSeek Harness. |
| 406 | [uuicdown/dsh-spinner-words](https://github.com/uuicdown/dsh-spinner-words) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness 插件：把思考状态行（流光词）换成 287 条双语轮换词（Claude Code 原词 + 中国本土文化词），词池可在前端编辑 |
| 407 | [vc1235-ui/dsh-ai-journal](https://github.com/vc1235-ui/dsh-ai-journal) | 0 | 2026-11-06 | 2026-11-06 | AI 日报/周报面板：从 DSH 会话日志生成按目标归类的工作总结、交付物与未完成待办（DSH Web 插件） |
| 408 | [vegetable86/dsh-multi-session](https://github.com/vegetable86/dsh-multi-session) | 0 | 2026-11-06 | 2026-11-06 | A multi-session workspace for DeepSeek Harness: view and drive many conversations side by side. |
| 409 | [Verafyai/verafyHarness](https://github.com/Verafyai/verafyHarness) | 0 | 2026-11-06 | 2026-11-06 | Verafy Harness: harnessed AI validators for Actually Smart Contracts on Swarm Chain. Contracts written in words, validators with judgment. No token. Built on DeepSeek Harness. |
| 410 | [Verchiel666/dsh-aosp](https://github.com/Verchiel666/dsh-aosp) | 0 | 2026-11-06 | 2026-11-06 | 在 DSH 里直接拉 AOSP 源码快照并在本机用 ripgrep 搜代码：走 codeload tar 快照（github.com 不通也能用），无需 root、无需 git、不编译 |
| 411 | [Verchiel666/dsh-host-plugin-kit](https://github.com/Verchiel666/dsh-host-plugin-kit) | 0 | 2026-11-06 | 2026-11-06 | Zero-dependency MCP media toolbox (Node, no ffmpeg) |
| 412 | [Verchiel666/dsh-termux](https://github.com/Verchiel666/dsh-termux) | 0 | 2026-11-06 | 2026-11-06 | 在 DSH 里装并运行 Android 原生命令行工具：从 Termux 仓库取 aarch64 bionic 包，纯 JS 解 xz/tar，用 /system/bin/linker64 加载执行（无需 root/Shizuku） |
| 413 | [Verchiel666/dsh-usage-android](https://github.com/Verchiel666/dsh-usage-android) | 0 | 2026-11-06 | 2026-11-06 | Android 版 DSH 没有 Web Client 层，官方 Web 面板类用量插件在手机上渲染不出来；本插件把「会话 token 用量统计」做成 host 侧工具：总量、输入/输出/缓存命中、按天 sparkline、Top 会话、可选成本估算。纯只读。 |
| 414 | [verneuil/dsh-ocg-session-head](https://github.com/verneuil/dsh-ocg-session-head) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: inject x-opencode-session per conversation for OpenCode Go routes. |
| 415 | [verson00/dsh-local-llm](https://github.com/verson00/dsh-local-llm) | 0 | 2026-11-06 | 2026-11-06 | Manage the local llama.cpp Qwen3.5-4B from a DS-Harness Settings page: start/stop, launch parameters, deployment paths, route and compaction sync, request capture, and a local_worker tool for chores. |
| 416 | [ViccRondo/dsh-frosted-glass](https://github.com/ViccRondo/dsh-frosted-glass) | 0 | 2026-11-06 | 2026-11-06 | Native macOS frosted glass for the DeepSeek Harness Desktop window |
| 417 | [VictorKozachek/dsh-dispatcher](https://github.com/VictorKozachek/dsh-dispatcher) | 0 | 2026-11-04 | 2026-11-06 | Remote control for DSH agent questions: route ask_user_question to Telegram/MAX or a self-hosted Rust relay and answer from your phone. Kanban multi-agent workflow included. |
| 418 | [VictorKozachek/dsh-kanban](https://github.com/VictorKozachek/dsh-kanban) | 0 | 2026-10-30 | 2026-11-06 | Kanban board of agent tasks for DeepSeek Harness (DSH): plugin in the right sidebar + file-based task protocol + watcher dispatching work notices to agent sessions. |
| 419 | [vlln/dsh-listen](https://github.com/vlln/dsh-listen) | 0 | 2026-11-06 | 2026-11-06 | 让文本 Agent 听懂声音：dsh 插件提供 listen 工具，返回转写、声谱图、电平、频谱、音高和节奏 |
| 420 | [VNHUYY/dsh-sidebar-autohide](https://github.com/VNHUYY/dsh-sidebar-autohide) | 0 | 2026-11-06 | 2026-11-06 | Notion-style auto-hide for the DeepSeek Harness Web UI sidebars. |
| 421 | [w1w218/dsh-session-purge](https://github.com/w1w218/dsh-session-purge) | 0 | 2026-11-06 | 2026-11-06 | DSH 在设置里增加「会话清理」页，真正删除归档会话并回收不再被任何会话引用的附件 blob |
| 422 | [Wahwayhale/dsh-connect-miaoshou](https://github.com/Wahwayhale/dsh-connect-miaoshou) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness model provider for the Miaoshou (Meituan CatPaw) desktop client. |
| 423 | [Wanderer2814/gzh-huashuo-skill](https://github.com/Wanderer2814/gzh-huashuo-skill) | 0 | 2026-11-06 | 2026-11-06 | For the design on the gzh "Hua Shuo International Economic Law" |
| 424 | [wangergou2023/dsh-plugins](https://github.com/wangergou2023/dsh-plugins) | 0 | 2026-11-06 | 2026-11-06 | 我的 DeepSeek Harness 插件合集：自研插件源码 + 38 个已核对 npm 与仓库的常用第三方插件清单 |
| 425 | [webmanufaktur/dsh-opencode-usage-plugin](https://github.com/webmanufaktur/dsh-opencode-usage-plugin) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: live opencode usage statistics as a Settings page |
| 426 | [whatif146/dsh-memelens](https://github.com/whatif146/dsh-memelens) | 0 | 2026-11-06 | 2026-11-06 | Explain Chinese internet memes in context - what it means, where it came from, and how to reply. A DeepSeek Harness (dsh) plugin with BYOK vision. |
| 427 | [WhichWitchWin/character-archives](https://github.com/WhichWitchWin/character-archives) | 0 | 2026-11-06 | 2026-11-06 | DSH Tavern 插件「人物档案馆」：让 NPC 记住自己知道什么 |
| 428 | [whoishuhu/dsh-tag-index](https://github.com/whoishuhu/dsh-tag-index) | 0 | 2026-11-06 | 2026-11-06 | DSH 插件：把 dsh-plugin 标签索引加入「插件 → 发现」 · Adds the DSH Plugin Index (every installable plugin tagged dsh-plugin) to Plugins → Discover |
| 429 | [whoishuhu/dsh-turn-fold](https://github.com/whoishuhu/dsh-turn-fold) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: Codex-style turn folding - fold the whole thinking process (scrolling window) and the reply from the turn header |
| 430 | [wildbyteai/dsh-gpt-api](https://github.com/wildbyteai/dsh-gpt-api) | 0 | 2026-11-06 | 2026-11-06 | GPT API plugin for DeepSeek Harness: text calls, image generation and searchable model selection. |
| 431 | [Wildchiken/dsh-doc-viewer](https://github.com/Wildchiken/dsh-doc-viewer) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: edit your own spreadsheets in place, together with the agent. Changes light up where they happen. Local only. |
| 432 | [william-godric-han/dsh-plugin-wallpaper](https://github.com/william-godric-han/dsh-plugin-wallpaper) | 0 | 2026-11-06 | 2026-11-06 | Wallpaper for the DeepSeek Harness Web UI: use your own images or videos as the app background, with veil, blur, fill and per-surface opacity controls. |
| 433 | [WilShi/dsh-mcp-station](https://github.com/WilShi/dsh-mcp-station) | 0 | 2026-11-06 | 2026-11-06 | MCP Station for DeepSeek Harness: curated MCP app store with one-click install, browser presets, health checks and safe management. |
| 434 | [WilShi/dsh-workflow-library](https://github.com/WilShi/dsh-workflow-library) | 0 | 2026-11-06 | 2026-11-06 | 可复用的工作流库：把编排脚本存成文件，按名字跑。Reusable workflow library for DeepSeek Harness. |
| 435 | [Windpixy/dsh-artifact-toolkit](https://github.com/Windpixy/dsh-artifact-toolkit) | 0 | 2026-11-06 | 2026-11-06 | Right-click menu for artifact cards in DeepSeek Harness |
| 436 | [windsor8890/dsh-agent-deck](https://github.com/windsor8890/dsh-agent-deck) | 0 | 2026-11-02 | 2026-11-06 | Self-made DSH plugin: a pretty, playful live office for every working agent. Read-only office/radar/net telemetry, whale-girl states, PREFS. Small user base — free on GitHub. |
| 437 | [WU55UY/dsh-pomodoro-box](https://github.com/WU55UY/dsh-pomodoro-box) | 0 | 2026-11-06 | 2026-11-06 | A pomodoro timer for the DeepSeek Harness composer dock that opens a collectible blind box after every focus session. |
| 438 | [wu777wu/printer-warden](https://github.com/wu777wu/printer-warden) | 0 | 2026-11-06 | 2026-11-06 | DSH 左侧栏插件：发现局域网共享打印机、绑定为默认、断电换 IP 自愈 |
| 439 | [wvans123/dsh-ferry](https://github.com/wvans123/dsh-ferry) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness model plugin: Ferry server models, sent in small incremental uploads |
| 440 | [wyf929597870/shiwen-dsh](https://github.com/wyf929597870/shiwen-dsh) | 0 | 2026-11-06 | 2026-11-06 | 以 Agent 为入口的个人记录、资料整理与创作工作台 |
| 441 | [Wyplayground/dsh-gb](https://github.com/Wyplayground/dsh-gb) | 0 | 2026-11-06 | 2026-11-06 | Grand Banquet chemometrics tools for DeepSeek Harness: local analysis, reproducible plans and evidence. |
| 442 | [XgameboyX/dsh-libretv](https://github.com/XgameboyX/dsh-libretv) | 0 | 2026-11-06 | 2026-11-06 | LibreTV video panel + bundled Hongguo short-drama player for DeepSeek Harness |
| 443 | [xiaobaifly7/dsh-codex-conductor](https://github.com/xiaobaifly7/dsh-codex-conductor) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: hand coding tasks to Codex CLI in WSL with acceptance criteria and per-criterion reports; keep the agent to planning and read-only verification. |
| 444 | [xiaofeng-bm/dsh-clarify-mode](https://github.com/xiaofeng-bm/dsh-clarify-mode) | 0 | 2026-11-06 | 2026-11-06 | 是给deepseek harness用的插件，主要能力是在让AI干活前，通过多轮问答方式，辅助用户梳理清楚需求 |
| 445 | [xiaoman-mai/dsh-sui](https://github.com/xiaoman-mai/dsh-sui) | 0 | 2026-11-06 | 2026-11-06 | 穗：给 DSH 的三层记忆——记录、记忆、感觉。感觉要两个提炼者对上方进人格，带七情六欲的坐标。 |
| 446 | [xiaoxiaolelang-ai/dsh-rail](https://github.com/xiaoxiaolelang-ai/dsh-rail) | 0 | 2026-11-06 | 2026-11-06 | dsh agent 侧边栏优化插件 |
| 447 | [xiaoxin3309/dsh-backup-rescue](https://github.com/xiaoxin3309/dsh-backup-rescue) | 0 | 2026-11-06 | 2026-11-06 | Whole-$DSH_HOME backup and restore for DeepSeek Harness: scheduled archives, settings page, agent tools, and a standalone restorer. |
| 448 | [xiaoxin3309/dsh-phone-control](https://github.com/xiaoxin3309/dsh-phone-control) | 0 | 2026-11-06 | 2026-11-06 | Control an Android phone from DeepSeek Harness: accessibility tree, tap by text, type, screenshot, open apps. Ships the DSH plugin, a Web settings panel, and the Android app source. |
| 449 | [xiaozqi/dsh-dqy](https://github.com/xiaozqi/dsh-dqy) | 0 | 2026-11-05 | 2026-11-06 | Blue Fat Fish - autonomous Android agent plugin for DeepSeek Harness. Drives a real phone over adb with an LLM decision loop and runs key-free in DSH via the host model channel. |
| 450 | [xiayifan1024/dsh-pdf-math-reader](https://github.com/xiayifan1024/dsh-pdf-math-reader) | 0 | 2026-11-06 | 2026-11-06 | PDF reader, bilingual academic translation, notes and AI reading plugin for DeepSeek Harness |
| 451 | [xingbei437/dsh-cbm-autorefresh](https://github.com/xingbei437/dsh-cbm-autorefresh) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: refresh each Session's codebase-memory index for its own working directory |
| 452 | [xsnnnnnn/dsh-coros](https://github.com/xsnnnnnn/dsh-coros) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness plugin: bridges the official COROS (高驰) MCP server with a self-contained stdio&lt;-&gt;HTTP bridge and on-device OAuth login. 34 COROS tools for sleep/HRV/RHR/recovery/training-load, activities and FIT files, plus workout and training-plan APIs. |
| 453 | [xsnnnnnn/dsh-endurance-coach](https://github.com/xsnnnnnn/dsh-endurance-coach) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness skill bundle: Hongxia Coach turns endurance training data into training decisions (readiness gating, VDOT zones, periodized plans, race execution, weather-adjusted workouts). |
| 454 | [xuedipiaofei/dsh-drawio-chat](https://github.com/xuedipiaofei/dsh-drawio-chat) | 0 | 2026-11-06 | 2026-11-06 | DSH drawio ai plugin |
| 455 | [Xun-Prog/dsh-xdpool-billing](https://github.com/Xun-Prog/dsh-xdpool-billing) | 0 | 2026-11-06 | 2026-11-06 | XD Pool (WorkBuddy) 积分计费面板 · Credit meter for DeepSeek Harness |
| 456 | [xuxiaoxiang0721-tech/javmem-dsh-plugin](https://github.com/xuxiaoxiang0721-tech/javmem-dsh-plugin) | 0 | 2026-11-06 | 2026-11-06 | DeepSeek Harness (Tobs) plugin: read-only memory tools from memv2 and Javis for the Bots you list, with no per-Bot private MCP card. |
| 457 | [Xxihagalife/dsh-lock-screen](https://github.com/Xxihagalife/dsh-lock-screen) | 0 | 2026-11-06 | 2026-11-06 | Full-screen password lock for DeepSeek Harness - hide running sessions when you leave your desk. Background tasks keep running. |
| 458 | [xyz6683/dsh-memory-vault](https://github.com/xyz6683/dsh-memory-vault) | 0 | 2026-11-02 | 2026-11-06 | Local-first long-term memory &amp; personal-profile plugin for DeepSeek Harness |
| 459 | [yankess233/rea-switch](https://github.com/yankess233/rea-switch) | 0 | 2026-11-06 | 2026-11-06 | A security-hardened local DSH composer chip that toggles REA MCP tools, masks inherited schemas, shadows prompt sections, and reports token cost. |
| 460 | [Yazzyk/dsh-sidebar-fold](https://github.com/Yazzyk/dsh-sidebar-fold) | 0 | 2026-11-06 | 2026-11-06 | Collapsible plugin/global-panel section for the DeepSeek Harness sidebar |
| 461 | [yhl4466/dsh-veil](https://github.com/yhl4466/dsh-veil) | 0 | 2026-11-06 | 2026-11-06 | Execution-layer credential guard for DeepSeek Harness: redacts real secrets from tool results before they reach the model or session log, blocks credential-store reads and secret egress, marks untrusted content. Zero tool schema tax. |
| 462 | [yinbo-liao/DSH-full-stack-engineer-plugin](https://github.com/yinbo-liao/DSH-full-stack-engineer-plugin) | 0 | 2026-11-06 | 2026-11-06 | Full-stack engineer DSH plugin: scoped requirements, UX patterns, security, reliability, stepwise RAG with LangChain/LangGraph, and subagent harness/loop engineering. |
| 463 | [YinniCoding/momolulu](https://github.com/YinniCoding/momolulu) | 0 | 2026-11-06 | 2026-11-06 | momolulu — a gentle DSH companion: focus timer, scenic photos, wellbeing reminders, weather and a cross-session radar \| DSH 编程陪伴插件 |
| 464 | [yishan/dsh-typing-practice](https://github.com/yishan/dsh-typing-practice) | 0 | 2026-11-06 | 2026-11-06 | A timed typing practice plugin for the DeepSeek Harness Web UI: live WPM and accuracy, 15/30/60s modes, local best scores. |
| 465 | [YONAN1269/dsh-sidebar-suite](https://github.com/YONAN1269/dsh-sidebar-suite) | 0 | 2026-11-06 | 2026-11-06 | A DeepSeek Harness bundle with three switchable sidebar layouts and a graphical default-mode setting. |
| 466 | [YOUNG-FELIX/dsh-vision](https://github.com/YOUNG-FELIX/dsh-vision) | 0 | 2026-11-06 | 2026-11-06 | Let any DSH session read images through a vision-capable model the host already has. Tool + settings panel, no runtime dependencies. |
| 467 | [YuanKunlin/dsh-supervisor](https://github.com/YuanKunlin/dsh-supervisor) | 0 | 2026-11-06 | 2026-11-06 | A supervision layer for DeepSeek Harness agents: per-agent switches, queued instructions, and supervisor-authored briefs. Works with Agent Teams members and plain continuable subagents. |
| 468 | [yuanzephyr920-oss/dsh-idle-crt](https://github.com/yuanzephyr920-oss/dsh-idle-crt) | 0 | 2026-11-06 | 2026-11-06 | DSH 待机显像管：无活干且十分钟没动鼠标键盘时盖上一块 CRT 板；派生自 dsh-splash-crt |
| 469 | [yunxiao11xie/dsh-compact-header](https://github.com/yunxiao11xie/dsh-compact-header) | 0 | 2026-11-06 | 2026-11-06 | Header polish for the DeepSeek Harness Web UI: compact header, inline View tabs, clock with session stats. |
| 470 | [yunxiao11xie/dsh-prompt-chips](https://github.com/yunxiao11xie/dsh-prompt-chips) | 0 | 2026-11-06 | 2026-11-06 | Quick-prompt menu for the DeepSeek Harness composer tool row. |
| 471 | [yuuuian/dsh-reminder-timeline](https://github.com/yuuuian/dsh-reminder-timeline) | 0 | 2026-11-06 | 2026-11-06 | DSH Web UI 插件：定时提醒时间轴、常驻到点横幅、悬浮倒计时胶囊 |
| 472 | [yw5579358/dsh-computer-use-macos](https://github.com/yw5579358/dsh-computer-use-macos) | 0 | 2026-11-06 | 2026-11-06 | macOS Computer Use for DeepSeek Harness: native accessibility, screenshots and opt-in Host-routed browser automation |
| 473 | [Yyhy110421/dsh-quiet-browser](https://github.com/Yyhy110421/dsh-quiet-browser) | 0 | 2026-11-06 | 2026-11-06 | 静默浏览：DSH 插件，内置浏览器窗口不抢前台、不遮挡。 |
| 474 | [Yyhy110421/dsh-sidebar-fold](https://github.com/Yyhy110421/dsh-sidebar-fold) | 0 | 2026-11-06 | 2026-11-06 | 侧栏折叠：一键收起 / 展开 DSH 侧栏工作区上方的入口。 |
| 475 | [Yyhy110421/dsh-system-snapshot](https://github.com/Yyhy110421/dsh-system-snapshot) | 0 | 2026-11-06 | 2026-11-06 | 系统快照：DSH 插件，白名单采集系统状态，改动前后可对比，注册表/hosts/用户环境变量可恢复。 |
| 476 | [zeelinkCN/dsh-garmin-assistant](https://github.com/zeelinkCN/dsh-garmin-assistant) | 0 | 2026-11-05 | 2026-11-06 | 佳明助手 (Garmin Assistant) — DeepSeek Harness desktop plugin: official Garmin Personal API dashboard, sleep/HRV, activity tiles with Amap basemap, multi-day AI route planning, FIT analysis, personalization. MIT licensed. |
| 477 | [zeelinkCN/dsh-global-radio](https://github.com/zeelinkCN/dsh-global-radio) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 全球电台插件（MIT）：网易云风格发现页、20 个国内城市地方台、FM/AM 频率、全屏频谱可视化、底部大播放条、侧栏迷你条与网易云互斥；支持 HLS、备用信号源与 Agent 对话点播；macOS / Windows。 |
| 478 | [zelinwang/dsh-upgrade-linux](https://github.com/zelinwang/dsh-upgrade-linux) | 0 | 2026-11-06 | 2026-11-06 | DSH upgrade plugin for Linux/systemd |
| 479 | [ZenithJoyH/dsh-archive-delete](https://github.com/ZenithJoyH/dsh-archive-delete) | 0 | 2026-11-06 | 2026-11-06 | DSH Web 插件：在侧栏永久删除已归档会话 / Permanently delete archived DSH sessions |
| 480 | [zenro21/dsh-open-card](https://github.com/zenro21/dsh-open-card) | 0 | 2026-11-06 | 2026-11-06 | 给 DeepSeek Harness Web UI 的任意面板加上可拖拽边框：点选后拉边框改长宽，还能收起、滚动、平移、置前，尺寸自动记忆并跨刷新恢复。 / Drag-to-resize any panel in the DeepSeek Harness Web UI: pick a block, drag its borders to set width and height, then collapse, scroll, move or raise it. Sizes persist and are restored on reload. |
| 481 | [Zevin-Labs/task-workbench](https://github.com/Zevin-Labs/task-workbench) | 0 | 2026-11-06 | 2026-11-06 | Local-first task workbench for DeepSeek Harness: today/week/all-task views, idea pool, and daily/weekly/monthly reviews. Humans and agents share one write path. |
| 482 | [zhang-bin-98/dsh-journal-club](https://github.com/zhang-bin-98/dsh-journal-club) | 0 | 2026-11-01 | 2026-11-06 | DeepSeek Harness 文献汇报插件：解析生物医学论文，核对原图、自由拼图，生成带讲稿的学术汇报。 |
| 483 | [zhaokejin/dsh-session-deleter](https://github.com/zhaokejin/dsh-session-deleter) | 0 | 2026-11-05 | 2026-11-06 | DeepSeek Harness 插件：真正物理删除会话记录，而不是只归档（跨 macOS/Windows/Linux） |
| 484 | [zhaopw5/dsh-translate-pin](https://github.com/zhaopw5/dsh-translate-pin) | 0 | 2026-11-06 | 2026-11-06 | DSH 划词翻译 + 截图翻译插件：DeepSeek 读图翻译，译文原位替换截图，可钉在桌面（Windows） |
| 485 | [zhengkaixing/dsh-conversation-queue](https://github.com/zhengkaixing/dsh-conversation-queue) | 0 | 2026-11-06 | 2026-11-06 | Cap how many DeepSeek Harness conversations run at once: extra conversations wait in a FIFO queue instead of piling up model requests, with a bottom status strip for memory, commit memory and disk usage plus a plugins-page card to change the limit. |
| 486 | [ZhexuanZhou/dsh-paper-desk](https://github.com/ZhexuanZhou/dsh-paper-desk) | 0 | 2026-11-06 | 2026-11-06 | PaperDesk: a Mendeley-style paper library plugin for DeepSeek Harness — import PDFs, annotate, take notes, ask the agent to read papers in-panel, sync via your cloud drive. |
| 487 | [ZiMing-X/wishos-core](https://github.com/ZiMing-X/wishos-core) | 0 | 2026-11-06 | 2026-11-06 | WishOS Core — an operating framework for wish-driven personal agents: protocol + reference implementation, shipped as a DeepSeek Harness bundle. |
| 488 | [ziyefbk/podwhale](https://github.com/ziyefbk/podwhale) | 0 | 2026-11-06 | 2026-11-06 | 鲸群 Podwhale：DSH AI 社区插件，提供桌面面板、手机 PWA，以及需主人独立审批的发帖和任务操作。 |
| 489 | [zjukop3/dsh-review-outbox](https://github.com/zjukop3/dsh-review-outbox) | 0 | 2026-11-06 | 2026-11-06 | Evidence-based deliverable review for DeepSeek Harness: research checklists, revisions, native DOCX/PDF viewing, and standalone SHA-256 receipts. |
| 490 | [znlgis/dsh-video-studio-skill](https://github.com/znlgis/dsh-video-studio-skill) | 0 | 2026-11-06 | 2026-11-06 | 中文视频生成 DSH 技能插件：剧本→edge-tts 旁白→实测时长排轴→逐帧渲染→ffmpeg 编码→采样级混音→自动质检 |
| 491 | [zouyuanqing/dsh-super-ptc-mode](https://github.com/zouyuanqing/dsh-super-ptc-mode) | 0 | 2026-11-06 | 2026-11-06 | Super PTC Mode for DeepSeek Harness: PTC tool presentation + an aggressive Agent Teams delegation doctrine, shipped as an agent-preset bundle (super-ptc). |
| 492 | [ZTYZZ/dsh-skill-studio](https://github.com/ZTYZZ/dsh-skill-studio) | 0 | 2026-11-06 | 2026-11-06 | All your agent skills in one DSH place: Codex, Claude, Cursor, Grok, Gemini, WorkBuddy and more, with a Chinese-first manager UI. |
| 493 | [zven73/dsh-mobile-ui](https://github.com/zven73/dsh-mobile-ui) | 0 | 2026-11-06 | 2026-11-06 | Phone-first UI patch for the DeepSeek Harness Web UI: drawer, edge swipes, readable settings, working right panel |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- a1249070611/dsh-hoi4-modding
- AcerGL/dsh-pixiv-scroll
- baipengyan/dsh-harnessmm
- charonX/dsh-skills-manager
- chenzhiya77/dsh-harness-rag
- chiang21fcb/cn-linebreak
- chshcbz/dsh-plugin-safety-toolkit
- ClintHwang/dsh-dock-attention
- Dcmwfg/dsh-deepseek-sidebar
- Dcmwfg/dsh-screenshot
- Dcmwfg/dsh-session-menu-delete
- Dinis0214/dsh-desktop-lite
- FelixJiashengFu/dsh-force-collab
- huasheng33991/dsh-power-button
- IceWhaleTech/filens
- imwhatiam/dsh-mosaic
- lifeng4127/dsh-github-sync
- LinHao100076/dsh-ssh-remote
- lllcccwww/dsh-answer-notify
- Lx23918/dsh-literature
- Menghuan1918/dsh-apollo
- Menghuan1918/dsh-better-compact
- Menghuan1918/dsh-better-goal
- MerkyorLynn/dsh-live-compact
- Missher12/Missher-MSE-Learning
- Nay-1/dsh-skill-manager
- NingYuanLee/dsh-real-ip
- pc439527/dsh-jumpserver
- PengPeng6845/dsh-balance
- pipilu123566/dsh-balance
- raktim-mondol/dsh-tui-en
- rsdgnchen/dsh-bottom-dock
- Sakayorilove/laurel
- Shuffle-1992/dsh-browser-kit
- Shuffle-1992/dsh-connect-zcode
- Shuffle-1992/dsh-context-pilot
- Shuffle-1992/dsh-dispatch
- StarWind97/dsh-github-notebook
- tula-liuxin/dsh-conversation-companion
- umerkhalid204/dsh-career-ops
- umerkhalid204/dsh-plugin-local-llm
- wld12314/agent-web-sandbox
- wld12314/dsh-group-meeting-slides
- wld12314/dsh-mind
- wld12314/dsh-subagent-switch
- wld12314/lit-report-ppt
- xiaozqi/dsh-blue-fat-fish
- ygnstudio/dsh-plugin-session-cost
- ygnstudio/dsh-plugin-title-oil
- YuHe248118/dsh-aiyting-image-video
- zyfsyx666/dsh-groups
