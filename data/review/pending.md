# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-01**
- 快照日期 / Snapshot date: **2026-11-01 (UTC)**
- 待审核 / Pending: **335**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **22**
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

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」「单日净减 ≥100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, that lost ≥100 stars in one interval (GitHub clawing back farmed stars), or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-10-31** / vs previous snapshot **2026-10-31**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **7**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [aureth-labs/dsh-aurabot-qq](https://github.com/aureth-labs/dsh-aurabot-qq) | 待审 / pending | 235 | +26 | 34 | 7d | 待审高星 | 核准即榜 #94 |
| ⚠️ [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | 待审 / pending | 36542 | — | 3817 | 587d | 待审高星 | 核准即 Top 1 |
| ⚠️ [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) | 待审 / pending | 5751 | — | 434 | 146d | 待审高星 | 核准即 Top 2 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 55665 | +1464 | 1525 | 37d | 日增百星 | 日增 +1464★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 4477 | +196 | 94 | 76d | 日增百星 | 日增 +196★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10111 | +122 | 394 | 78d | 日增百星 | 日增 +122★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 4834 | +121 | 441 | 24d | 日增百星 | 日增 +121★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) ⚠️ | 36542 | 2025-03-23 | 2026-11-01 | Draw and edit draw.io diagrams by chatting with an AI. Web app, desktop app, and an MCP server for Claude Code, Cursor, Codex and VS Code. |
| 2 | [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) ⚠️ | 5751 | 2026-06-07 | 2026-11-01 | Run Claude Design locally as an Agent Skill — Cursor, Codex, DeepSeek Harness &amp; more. Produce polished UI mockups, prototypes, decks &amp; wireframes as self-contained HTML, without claude.ai/design. Best with Opus or Claude. |
| 3 | [aureth-labs/dsh-aurabot-qq](https://github.com/aureth-labs/dsh-aurabot-qq) ⚠️ | 235 | 2026-10-24 | 2026-11-01 | 让 DeepSeek Harness 里的 AI 以「大肥鱼」住进 QQ：会聊天、发表情、发语音、记事、发空间、刷 B 站、唱歌。功能都是模块，能开关、能自己写，还能从模块市场装更多（SnowLuma / OneBot v11）。 |
| 4 | [openguardrails/openguardrails-spec](https://github.com/openguardrails/openguardrails-spec) | 60 | 2026-06-30 | 2026-11-01 | The vendor-neutral protocol for AI agent safety &amp; security — and the neutral benchmark that ranks the vendors. |
| 5 | [Yuuyuko-uu/dsh-fish-buddy](https://github.com/Yuuyuko-uu/dsh-fish-buddy) | 25 | 2026-10-28 | 2026-11-01 | 鱼搭子：桌面小鲸鱼挂件 + DSH 插件（语音送话、陪看字幕、游戏弹幕、截图） |
| 6 | [KurutoDenzeru/tersio](https://github.com/KurutoDenzeru/tersio) | 21 | 2026-09-02 | 2026-11-01 | ✂️ Token saver &amp; usage tracker for coding agents: terse caveman replies, compact RTK shell output, lean Ponytail code, Headroom compression, pstack rigor, and a gain dashboard — one-command combos over one shared extension tree. |
| 7 | [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) | 16 | 2026-11-01 | 2026-11-01 | 让 AI 实时看见你的屏幕：按变化量筛选帧、多帧拼进一张图，静止画面几乎不花 token |
| 8 | [luffysolution-svg/sanmu-skills](https://github.com/luffysolution-svg/sanmu-skills) | 8 | 2026-10-15 | 2026-11-01 | Sanmu's Agent Skills collection. Academic PDFs, textbooks and slides to Markdown with LaTeX validation, high-resolution figures and Zotero workflows. |
| 9 | [zhuchongba-01/dsh-breach](https://github.com/zhuchongba-01/dsh-breach) | 8 | 2026-10-31 | 2026-11-01 | DSH 插件：由 dsh-purge 剥离出的破甲单件 —— 提示词注入 + 可回滚宿主补丁引擎（本机结算 72 项） |
| 10 | [nTillMeetu/Neko_02](https://github.com/nTillMeetu/Neko_02) | 3 | 2026-11-01 | 2026-11-01 | In-app usage overview for DeepSeek Harness: balance, daily calendar heat map and monthly totals. |
| 11 | [Yeoksin/dsh-usage-wallet](https://github.com/Yeoksin/dsh-usage-wallet) | 3 | 2026-10-31 | 2026-11-01 | DSH sidebar widget: balances &amp; quotas for the active model provider (Aliyun vouchers, Xiaomi MiMo, DeepSeek, Moonshot, Z.ai, OpenRouter, Kimi, MiniMax, OpenCode). |
| 12 | [Exception-H/dsh-speak-plain](https://github.com/Exception-H/dsh-speak-plain) | 2 | 2026-11-01 | 2026-11-01 | DSH 插件：用你选的模型把最终回答润色成大白话，默认显示润色版、原回答可折叠。 |
| 13 | [JunyuZhan/dsh-privmask](https://github.com/JunyuZhan/dsh-privmask) | 2 | 2026-08-27 | 2026-11-01 | DeepSeek Harness 本地脱敏插件：请求上云前遮罩密钥、PII 与中文实体，日志与工具结果落盘前遮罩，支持入站还原与多版本 DSH 兼容。 |
| 14 | [Meinianda-L/folio](https://github.com/Meinianda-L/folio) | 2 | 2026-11-01 | 2026-11-01 | Folio — a LaTeX writing workspace for DeepSeek Harness: editor, PDF builds, and AI edits you review in the native Harness chat. |
| 15 | [risense-ai/respire-dsh](https://github.com/risense-ai/respire-dsh) | 2 | 2026-10-19 | 2026-11-01 | Respire memory for DeepSeek Harness (dsh). npm: @rsrsai/dsh |
| 16 | [YukiSuoug/dsh-plugin-updater](https://github.com/YukiSuoug/dsh-plugin-updater) | 2 | 2026-11-01 | 2026-11-01 | 给 DeepSeek Harness 插件页加一个「更新」标签：检查已安装插件的最新版本、切换安装源（官方源/国内镜像/自定义）、一键升级、打开本地目录或仓库。复用官方 plugin-manager 的 pnpm 管线，不自己造下载器。 |
| 17 | [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | 2 | 2026-08-14 | 2026-11-01 | DeepSeek Harness（dsh）的插件商店 + 安装助手：在 Web GUI 里逛插件目录，一键确认安装，agent 替你装好。 |
| 18 | [AkviliAR26710/dsh-lossless-context](https://github.com/AkviliAR26710/dsh-lossless-context) | 1 | 2026-10-27 | 2026-11-01 | Lossless context for DeepSeek Harness (DSH): every message archived verbatim in local SQLite + FTS5, compaction only shrinks what the model sees, lcm_grep / lcm_expand pull the original text back. 无损上下文方案：压缩只腾窗口，细节可逐字找回。 |
| 19 | [AsterLuo/dsh-cat-diary](https://github.com/AsterLuo/dsh-cat-diary) | 1 | 2026-11-01 | 2026-11-01 | 猫娘日记 + 好感度 for DeepSeek Harness：每天把全部对话写成四栏日记，次日自动注入速读卡；好感度子插件每轮自动判定并有侧边栏可视化。 |
| 20 | [Burns1028/dsh-plugin-project-mode](https://github.com/Burns1028/dsh-plugin-project-mode) | 1 | 2026-11-01 | 2026-11-01 | Unofficial Project Mode for DeepSeek Harness: persistent Coordinator, reusable Workers and shared context. Preview; requires patched DSH 0.2.1-rc.3. |
| 21 | [Chemiofitor4096/minecraft-dev-starter](https://github.com/Chemiofitor4096/minecraft-dev-starter) | 1 | 2026-10-31 | 2026-11-01 | DSH plugin that detects Minecraft mod projects and runs their Gradle tasks. |
| 22 | [cheng200606/dsh-plugin-codemap](https://github.com/cheng200606/dsh-plugin-codemap) | 1 | 2026-11-01 | 2026-11-01 | CodeMap: 把代码仓库编译成带 path:line 源码引用的代码地图 — DeepSeek Harness 插件，零模型调用、离线可跑、引用可校验。 |
| 23 | [chenqianyu486-sys/dsh-zju-lecture-note](https://github.com/chenqianyu486-sys/dsh-zju-lecture-note) | 1 | 2026-10-30 | 2026-11-01 | 让 dsh 拉取智云课堂字幕及课件并整理课程学习资料 |
| 24 | [citydirector/deepinfra-fusion-proxy](https://github.com/citydirector/deepinfra-fusion-proxy) | 1 | 2026-09-07 | 2026-11-01 | Dependency-free local reverse proxy for the DeepInfra API: injects service_tier/fail_fast, auto Standard↔Flex fallback with per-session cooldown locks. Also ships as a DSH plugin. |
| 25 | [cmm00100/dsh-autocad-bridge](https://github.com/cmm00100/dsh-autocad-bridge) | 1 | 2026-10-29 | 2026-11-01 | 把本机 AutoCAD 2024 变成 DeepSeek Harness Agent 的一双手：Cordis 插件托管 Python MCP 桥进程，18 个 cad_* 工具 |
| 26 | [danshuyue/dsh-onebot-channel](https://github.com/danshuyue/dsh-onebot-channel) | 1 | 2026-10-27 | 2026-11-01 | 把 QQ 私聊与群聊接进 DeepSeek Harness：OneBot 11 协议，入站走 WebSocket 事件推送 |
| 27 | [dryw/dsh-egm](https://github.com/dryw/dsh-egm) | 1 | 2026-11-01 | 2026-11-01 | Elephant-Goldfish Model (EGM) for DeepSeek Harness: draft design specs with a context-rich session, then stress-test them with fresh, read-only Goldfish reviewers before writing code. |
| 28 | [dz3197578117-lab/dsh-deepseek-web-image](https://github.com/dz3197578117-lab/dsh-deepseek-web-image) | 1 | 2026-11-01 | 2026-11-01 | Unofficial DeepSeek Web plugin for DeepSeek Harness, forked to add image input support |
| 29 | [FelixJiashengFu/dsh-pdf-atelier](https://github.com/FelixJiashengFu/dsh-pdf-atelier) | 1 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: beautifully art-directed PDFs whose palette, type and cover art follow the document's subject, with LaTeX, figures and charts built in. |
| 30 | [hankniu77/dsh-botcrew](https://github.com/hankniu77/dsh-botcrew) | 1 | 2026-11-01 | 2026-11-01 | BotCrew - one DSH group chat for WorkBuddy and QwenWork, with members, permissions, artifacts and a live work panel. Local-first Windows and macOS. |
| 31 | [hennychen/dsh-git-sidebar](https://github.com/hennychen/dsh-git-sidebar) | 1 | 2026-11-01 | 2026-11-01 | VS Code style multi-repository Git Source Control panel for the DeepSeek Harness right sidebar \| DeepSeek Harness 右侧边栏多仓库 Git 源代码管理 |
| 32 | [hhuapen/dsh-per-session-folder](https://github.com/hhuapen/dsh-per-session-folder) | 1 | 2026-11-01 | 2026-11-01 | Create an isolated folder for every new DSH session and keep it synchronized with the session title. |
| 33 | [HYF00246/dsh-lan-gate](https://github.com/HYF00246/dsh-lan-gate) | 1 | 2026-11-01 | 2026-11-01 | 手机连电脑移动热点，浏览器打开 http://192.168.137.1:18080 直接操控 DeepSeek Harness（DSH），界面右下角带开关 |
| 34 | [Jingxuan-WH/dsh-model-rank](https://github.com/Jingxuan-WH/dsh-model-rank) | 1 | 2026-11-01 | 2026-11-01 | Sidebar LLM leaderboard for DeepSeek Harness (DSH): LMArena blind-test ratings, Artificial Analysis intelligence index, LiveBench 2.0 capability, OpenRouter usage &amp; market share — plus a local token-usage dashboard, detail drawers and CSV export. Daily snapshot, instant open, no API key. \| DSH 侧栏「模型排行」：多榜合一 + 本机用量仪表盘，打开即显示。 |
| 35 | [KafukaTree/dsh-figmark](https://github.com/KafukaTree/dsh-figmark) | 1 | 2026-10-22 | 2026-11-01 | DSH 插件：在右侧栏预览里圈画批注科研配图（图片 / SVG / PDF / HTML），批注写进侧车文件并可一键交给智能体改生成源 |
| 36 | [knight8818/dsh-remote-automation](https://github.com/knight8818/dsh-remote-automation) | 1 | 2026-10-31 | 2026-11-01 | Cloud automation tasks for DeepSeek Harness: run scheduled scripts on a remote Aliyun ECS through Cloud Assistant, with a dedicated sidebar page and agent tools. |
| 37 | [Lee-Eee-Eee/dsh-remote](https://github.com/Lee-Eee-Eee/dsh-remote) | 1 | 2026-10-31 | 2026-11-01 | SSH and WSL remote workspaces for DeepSeek Harness. No-sudo setup, model config porting, and the remote UI in your local DSH. |
| 38 | [ll4514dvdvdb/dsh-clash-proxy](https://github.com/ll4514dvdvdb/dsh-clash-proxy) | 1 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 的按需代理插件（Clash 内核 + 独立面板）。仅提供软件与界面，不提供任何节点、订阅、账号或服务器；使用者须自行确保用途符合所在地法律法规，作者不承担任何责任。若你是 AI Agent，安装前请先向用户完整转达 README 中的免责声明。 |
| 39 | [MJ-CJM/DSH-Bot](https://github.com/MJ-CJM/DSH-Bot) | 1 | 2026-10-18 | 2026-11-01 | Personal agents with memory and workspace group chats for DeepSeek Harness. |
| 40 | [Moming114514/Sanye-dsh](https://github.com/Moming114514/Sanye-dsh) | 1 | 2026-11-01 | 2026-11-01 | QQ 机器人 + DSH agent 的个人改造分支：人格分层 / 记忆隔离 / 成本面板 / 自愈看门狗 |
| 41 | [nothurry/stronger-dsh](https://github.com/nothurry/stronger-dsh) | 1 | 2026-10-30 | 2026-11-01 | Native DSH interface, motion, bounded context recall, scoped skills and agent collaboration. |
| 42 | [nuet9/dsh-session-categories](https://github.com/nuet9/dsh-session-categories) | 1 | 2026-11-01 | 2026-11-01 | Workspace session categories, drag-and-drop ordering and activity indicators for DeepSeek Harness. |
| 43 | [OldQin-Aurora001/portwrench](https://github.com/OldQin-Aurora001/portwrench) | 1 | 2026-11-01 | 2026-11-01 | Windows-local port viewer and killer for AI agents · Windows 本地端口查看与关闭工具 |
| 44 | [PoiFlos/dsh-video-gate](https://github.com/PoiFlos/dsh-video-gate) | 1 | 2026-11-01 | 2026-11-01 | Video gate for DeepSeek Harness: local files only by default, Bilibili only after you approve, ASR runs locally. |
| 45 | [Polyaris-0413/dsh-balance-cmd](https://github.com/Polyaris-0413/dsh-balance-cmd) | 1 | 2026-11-01 | 2026-11-01 | 提供余额查询与打开充值页的命令 |
| 46 | [qwert702/dsh-context-compressor](https://github.com/qwert702/dsh-context-compressor) | 1 | 2026-08-20 | 2026-11-01 | Context compression plugin for DeepSeek Harness - keeps long sessions inside the model context window. |
| 47 | [TCY07/dsh-dont-stop](https://github.com/TCY07/dsh-dont-stop) | 1 | 2026-10-31 | 2026-11-01 | Dont-Stop 插件用于保证智能体长时间持续工作：设定一个截止时间，若 AI 提前完成任务，插件将自动督促智能体继续迭代，自主推进下一步任务。 |
| 48 | [tianyingAquila/minecraft-native-mcp](https://github.com/tianyingAquila/minecraft-native-mcp) | 1 | 2026-10-31 | 2026-11-01 | Native Minecraft MCP with a DSH launcher, spatial perception, bounded actions and optional livestream widgets. |
| 49 | [TLEWA/dsh-sidebar-row-menu](https://github.com/TLEWA/dsh-sidebar-row-menu) | 1 | 2026-11-01 | 2026-11-01 | Right-click menus for DSH sidebar workspace and session rows: open folders in VS Code or Explorer, copy paths and session links. |
| 50 | [Tzh0109/dsh-chat-projects](https://github.com/Tzh0109/dsh-chat-projects) | 1 | 2026-11-01 | 2026-11-01 | ChatGPT Projects style session organizer for DeepSeek Harness: move sessions between workspaces (projects), queue moves for loaded sessions, file ungrouped sessions back into their project. |
| 51 | [Warsk-80486/dsh-auto-summary](https://github.com/Warsk-80486/dsh-auto-summary) | 1 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: summarize a session at a token threshold and hand it off to a fresh agent, always keeping the original first prompt. |
| 52 | [wimi996123/dsh-keil](https://github.com/wimi996123/dsh-keil) | 1 | 2026-11-01 | 2026-11-01 | DSH plugin for Keil MDK/uVision: user-selected .uvprojx, incremental build/rebuild/clean/download via UV4, byte-safe project edits, JSON CLI and agent tool. Optional sidebar UI. |
| 53 | [Wldpm/dsh-fileguard](https://github.com/Wldpm/dsh-fileguard) | 1 | 2026-10-31 | 2026-11-01 | Deepseek Harness的一个插件，它能通过拦截大部分危险命令避免全权情况下大删库的情况：这是一个全权模式下仍能保护大多数文件的软约束插件 |
| 54 | [wudidiandian/dsh-solo](https://github.com/wudidiandian/dsh-solo) | 1 | 2026-10-31 | 2026-11-01 | Remote DeepSeek Harness sessions, tasks and approvals from your phone. |
| 55 | [xbzbing/dsh-privacy-gateway](https://github.com/xbzbing/dsh-privacy-gateway) | 1 | 2026-10-31 | 2026-11-01 | DSH 进程级脱敏网关：出站把密钥、Cookie、个人信息换成占位符，入站还原；一处拦截覆盖所有走 fetch() 的 provider。/ Process-wide redaction gateway for DeepSeek Harness: masks secrets in outgoing model requests and restores placeholders in replies, for every provider that goes through fetch(). |
| 56 | [xfgil/dsh-link-parse](https://github.com/xfgil/dsh-link-parse) | 1 | 2026-10-20 | 2026-11-01 | 把聊天里出现的分享链接（B站/抖音/小黑盒/GitHub/通用网页）解析成标题、作者、正文、封面、视频直链，并支持下载到本地媒体目录。A link-to-content resolver plugin for DeepSeek Harness. |
| 57 | [xfgil/dsh-proxy-on-demand](https://github.com/xfgil/dsh-proxy-on-demand) | 1 | 2026-10-13 | 2026-11-01 | DSH 按需代理插件：需要时才拉起 mihomo 内核，用完空闲自动关闭 —— 平时不占端口、不留后台进程。首次运行自动下载内核（约 61MB），内置设置界面可填订阅或一键导入本机 FlClash 配置。内核与 Windows 系统代理是两枚独立开关：内核只绑 127.0.0.1，起停不改变你的网络环境；动系统代理前先备份原值，关的时候逐字段精确还原（连绕过列表都一字不动），别人占着时只报告不抢。自带节点面板：列分组、列节点、切换后回读确认、一键测延迟。检测到全屏游戏只是不启用代理；检测到 FlClash 等其它代理已在运行就静默让路。On-demand proxy for DeepSeek Harness. |
| 58 | [xfgil/dsh-second-opinion](https://github.com/xfgil/dsh-second-opinion) | 1 | 2026-10-14 | 2026-11-01 | DSH 跨会话第二意见插件：一个会话卡住时，把问题交给独立的「顾问会话」单独分析，方案作为工具结果直接回到求助方手里。每个求助会话有自己专属的顾问（自动创建、标题写成「辅助+求助会话标题前三字」，一眼看出在辅助谁），同一个问题还能再要第 2、3 个完全独立的顾问分头想。不需要用户转述，也不冒充用户发言。A second-opinion plugin for DeepSeek Harness: hand a stuck question to an independent advisor session and get the plan back inline. |
| 59 | [xinranmn-wq/dsh-agent-ops](https://github.com/xinranmn-wq/dsh-agent-ops) | 1 | 2026-11-01 | 2026-11-01 | DeepSeek Harness（DSH）插件：AI Agent 运行可视化与可观测性面板。实时展示工具调用、Token 用量、子代理与事件日志，提供可交互记忆云与卡片环 HUD。DSH plugin for live AI agent run visualization. |
| 60 | [xuedipiaofei/dsh-hooks-lite](https://github.com/xuedipiaofei/dsh-hooks-lite) | 1 | 2026-11-01 | 2026-11-01 | Lightweight config-driven lifecycle hooks for DeepSeek Harness |
| 61 | [ZekaiShi/Orivii](https://github.com/ZekaiShi/Orivii) | 1 | 2026-11-01 | 2026-11-01 | An expressive personal assistant for DeepSeek Harness: conversations, memory, reminders and background work |
| 62 | [0tests/dsh-approval-consult](https://github.com/0tests/dsh-approval-consult) | 0 | 2026-11-01 | 2026-11-01 | Ask both the executing AI and the auto-review AI while a DSH tool approval is pending |
| 63 | [0xshawn/dsh-dev-plugins](https://github.com/0xshawn/dsh-dev-plugins) | 0 | 2026-10-26 | 2026-11-01 | Serve the DeepSeek Harness (dsh) Web UI through a non-localhost authority: trusted hosts, loopback page parity, pinned launch token, no patching. |
| 64 | [11454zaw/dsh-live2d-pet](https://github.com/11454zaw/dsh-live2d-pet) | 0 | 2026-10-31 | 2026-11-01 | DeepSeek Harness 的 Live2D 桌面宠物：把鲸语的舞台裁成透明浮窗，AI 能让它说话、抬眼、换表情；设置页可调大小/透明度/头像/待机节奏/全部动作。模型自备。 |
| 65 | [1207291706/dsh-restart-foot](https://github.com/1207291706/dsh-restart-foot) | 0 | 2026-11-01 | 2026-11-01 | Restart button at the DSH sidebar foot, just above the account entry: two clicks stop the desktop app and bring it back, with no console window. |
| 66 | [147247586/dsh-companion-memory](https://github.com/147247586/dsh-companion-memory) | 0 | 2026-11-01 | 2026-11-01 | Local companion memory plugin for DSH |
| 67 | [147247586/wechat-companion](https://github.com/147247586/wechat-companion) | 0 | 2026-11-01 | 2026-11-01 | WeChatAgent companion layer: images, proactive recall, voice, local ASR. Requires Bridge login. |
| 68 | [1DAdidi/dsh-memory-brain-plugin](https://github.com/1DAdidi/dsh-memory-brain-plugin) | 0 | 2026-11-01 | 2026-11-01 | DSH记忆星脑插件，3D神经元记忆图谱，记忆分区管理 |
| 69 | [1DAdidi/dsh-voice-horn](https://github.com/1DAdidi/dsh-voice-horn) | 0 | 2026-11-01 | 2026-11-01 | DSH语音喇叭插件，Edge-TTS播报、支持大肥鱼音色、看板娘语音联动 |
| 70 | [1jincheng/dsh-first-paint](https://github.com/1jincheng/dsh-first-paint) | 0 | 2026-11-01 | 2026-11-01 | 首帧启动页：把启动页写进 DSH 首帧 HTML，消除启动白闪（独立插件，不改主程序） |
| 71 | [203-11/dsh-fat-fish](https://github.com/203-11/dsh-fat-fish) | 0 | 2026-11-01 | 2026-11-01 | 大肥鱼喝水走动提醒桌宠 提醒喝水走动  |
| 72 | [2239058652/dsh-codearts-connect](https://github.com/2239058652/dsh-codearts-connect) | 0 | 2026-10-31 | 2026-11-01 | Huawei Cloud CodeArts provider for DeepSeek Harness (DSH): OAuth2 PKCE/DPoP sign-in, multi-account rotation, model discovery, credits and usage. |
| 73 | [43aquarius/luna-threshold-drift](https://github.com/43aquarius/luna-threshold-drift) | 0 | 2026-11-01 | 2026-11-01 | 刻意开一小段无门槛放漂窗口以校准阈值 |
| 74 | [43aquarius/luna-threshold-sense](https://github.com/43aquarius/luna-threshold-sense) | 0 | 2026-11-01 | 2026-11-01 | 阈值钝化微感知 |
| 75 | [919703505hackiv-boop/dsh-session-dispatch](https://github.com/919703505hackiv-boop/dsh-session-dispatch) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: model-facing tools that create workspace conversations, send prompts, wait for turns and read replies — dispatch work into real standalone sessions. |
| 76 | [99galaxy/dsh-turn-notify](https://github.com/99galaxy/dsh-turn-notify) | 0 | 2026-11-01 | 2026-11-01 | Windows system notifications for DSH turn completion |
| 77 | [ACGNnsj/dsh-conversation-find](https://github.com/ACGNnsj/dsh-conversation-find) | 0 | 2026-11-01 | 2026-11-01 | DSH 主界面查找插件：像浏览器 Ctrl+F 一样搜索文本、全部高亮并逐条跳转。会话页只搜消息流，设置/插件等页面搜整页。 |
| 78 | [aichixiaojuzi/dsh-model-quick-switch](https://github.com/aichixiaojuzi/dsh-model-quick-switch) | 0 | 2026-11-01 | 2026-11-01 | Provider-first model switcher for the DSH composer. 输入框里的双栏模型切换器：所有供应商一级可见。 |
| 79 | [AkiHaruka/companion-memory](https://github.com/AkiHaruka/companion-memory) | 0 | 2026-09-12 | 2026-11-01 | Native scoped Riko memory plugin for DeepSeek Harness |
| 80 | [almaziphone/dsh-speech-to-text-ru](https://github.com/almaziphone/dsh-speech-to-text-ru) | 0 | 2026-11-01 | 2026-11-01 | Local Russian speech recognition (GigaAM-v3) for DeepSeek Harness voice input — offline, CPU, MIT |
| 81 | [altmanWang/dsh_plugin_btc_dashboard](https://github.com/altmanWang/dsh_plugin_btc_dashboard) | 0 | 2026-10-03 | 2026-11-01 | OKX BTC DASHBOARD |
| 82 | [AlwaysFyo/dsh-overview](https://github.com/AlwaysFyo/dsh-overview) | 0 | 2026-11-01 | 2026-11-01 | DSH 全景概览插件：以工作区项目为维度的会话/任务仪表盘 |
| 83 | [amd47802574/dsh-auto-full-permission](https://github.com/amd47802574/dsh-auto-full-permission) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件：每个新创建的会话自动切换到指定权限预设（默认完全权限） |
| 84 | [Analoty/dsh-auto-click](https://github.com/Analoty/dsh-auto-click) | 0 | 2026-11-01 | 2026-11-01 | DSH Web GUI 侧边栏文件手势插件：左键预览、Ctrl+左键系统默认应用打开、右键文件菜单（打开/打开方式/另存为/复制路径/复制内容/在资源管理器中打开） |
| 85 | [Ariakage/dsh-claude-effort-slider](https://github.com/Ariakage/dsh-claude-effort-slider) | 0 | 2026-11-01 | 2026-11-01 | Claude Desktop-style Effort slider for DeepSeek Harness: replaces the composer Effort switch with a draggable Low→Ultracode control, WebGL2 energy grid, and Ultracode mapped to the model's maximum thinking effort. / Claude 风格推理等级滑块。 |
| 86 | [AvenYQ/dsh-quiet](https://github.com/AvenYQ/dsh-quiet) | 0 | 2026-11-01 | 2026-11-01 | Quiet dot-matrix whale backdrop + blur-to-clear streaming text for DeepSeek Harness |
| 87 | [azure5100/huahua-dsh-memory-os](https://github.com/azure5100/huahua-dsh-memory-os) | 0 | 2026-09-07 | 2026-11-01 | dsh-memory-evolve plugin with AIMS integration |
| 88 | [bailiyyds/dsh-live2dwaifu](https://github.com/bailiyyds/dsh-live2dwaifu) | 0 | 2026-11-01 | 2026-11-01 | 给 DSH 网页右下角请一个 Live2D 角色：星空壁纸底、本地语音包朗读、聊天回复自动念。基于 FujiwaraReisen/dsh-live2dwaifu（MIT）的改版。 |
| 89 | [baiqieji-LuLu/DSH-DREAM](https://github.com/baiqieji-LuLu/DSH-DREAM) | 0 | 2026-11-01 | 2026-11-01 | Durable RAG-Enhanced Agent Memory (DSH-DREAM) - v0.2.0 Pre-Alpha |
| 90 | [beyondgjc/dsh-agentic-pet](https://github.com/beyondgjc/dsh-agentic-pet) | 0 | 2026-10-31 | 2026-11-01 | Desktop pet for DSH: a model-driven companion with affection, inner voice and chat, installed as a dsh plugin. |
| 91 | [BG2FOU/dsh-draw-system-map](https://github.com/BG2FOU/dsh-draw-system-map) | 0 | 2026-11-01 | 2026-11-01 | DSH skill provider for draw-system-map: editable SVG/PNG transit network maps from official data, CSV or topology input. |
| 92 | [bitqyh/dsh-codex-bridge](https://github.com/bitqyh/dsh-codex-bridge) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件：在输入框下方按具体项目分组列出可接续的 Codex 聊天，只插入草稿不自动发送 |
| 93 | [Bliveren/dsh-doctor](https://github.com/Bliveren/dsh-doctor) | 0 | 2026-11-01 | 2026-11-01 | Read-only health checks for a DeepSeek Harness installation: profiles, bundles, patch YAML, local links, disk, credentials — redacted report for Discussions. |
| 94 | [bloodarea/dsh-pets](https://github.com/bloodarea/dsh-pets) | 0 | 2026-11-01 | 2026-11-01 | Cross-platform DSH desktop pets with Live2D, pre-recorded voice, session switching, and task notifications. |
| 95 | [boingsetta/dsh-opencode-go-quota](https://github.com/boingsetta/dsh-opencode-go-quota) | 0 | 2026-11-01 | 2026-11-01 | OpenCode Go quota badge for DeepSeek Harness (title-bar ring chip + usage card) |
| 96 | [brickhu/dsh-plugins](https://github.com/brickhu/dsh-plugins) | 0 | 2026-10-30 | 2026-11-01 | deepseek harness plugins |
| 97 | [bulzz1233/dsh-chat-find](https://github.com/bulzz1233/dsh-chat-find) | 0 | 2026-11-01 | 2026-11-01 | Browser/IDE-style in-conversation find bar for DeepSeek Harness: match case, whole word, history, streaming-aware. |
| 98 | [buyou-claw/dsh-superagent-win](https://github.com/buyou-claw/dsh-superagent-win) | 0 | 2026-11-01 | 2026-11-01 | Windows port of DeepSeek Harness's dsh-superagent research prototype: runs as a DSH bundle, with the agent's identity scoped to each worker command instead of the whole DSH process. |
| 99 | [captainyufei/dsh-dock](https://github.com/captainyufei/dsh-dock) | 0 | 2026-11-01 | 2026-11-01 | A customizable Dock for DeepSeek Harness: persistent navigation, global pinned chats, restored tool panels, and side-panel video playback. |
| 100 | [cc1104666/dsh-plugins](https://github.com/cc1104666/dsh-plugins) | 0 | 2026-11-01 | 2026-11-01 | Three DSH plugins that surface third-party chat services in the model picker. |
| 101 | [CHAAAAA/dsh-devbench-plugin](https://github.com/CHAAAAA/dsh-devbench-plugin) | 0 | 2026-10-29 | 2026-11-01 | DeepSeek Harness（DSH）的项目与工程管理插件，把需求、项目文档、Git 提交、AI 提交信息、代码评审、工作树、后台任务与周报聚合到一个侧边栏工作台里。 |
| 102 | [chanyuenpang/dsh-cindy-host](https://github.com/chanyuenpang/dsh-cindy-host) | 0 | 2026-09-17 | 2026-11-01 | DSH ⇄ Cindy 手机客户端桥接插件（Host 侧）：会话/消息/审批/todo/goal 的手机通道，含实测定案与项目记忆 |
| 103 | [charonomega/dsh-council-mode](https://github.com/charonomega/dsh-council-mode) | 0 | 2026-11-01 | 2026-11-01 | DSH 多智能体议会：固定成员、直接收件箱、自由讨论与可配置次数限制 |
| 104 | [ChencLi819/dsh-fish-mood](https://github.com/ChencLi819/dsh-fish-mood) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件:给 agent 一副会变化的心情 —— 36 种情绪带半衰期与掩饰能力,底色随作息起伏,关系暖度按群与人记账,空闲时也有自己的小事。 |
| 105 | [ChencLi819/dsh-weixin-channel](https://github.com/ChencLi819/dsh-weixin-channel) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件:把 agent 接进微信单聊。走腾讯官方 iLink Bot API(ClawBot 通道),扫码授权机器人身份,支持文本/图片/语音/文件收发、会话映射与工具收口。 |
| 106 | [Chip-G0202/dsh-deepseek-search-account](https://github.com/Chip-G0202/dsh-deepseek-search-account) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek account-backed web search for DeepSeek Harness sessions whose chat model runs through a third-party subscription or gateway (e.g. OpenCode Go). Keeps web_search working without a DEEPSEEK_API_KEY. |
| 107 | [Chiyang001/DSH_Plugin_Store](https://github.com/Chiyang001/DSH_Plugin_Store) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 社区插件商店：发现、搜索、收藏、安装镜像与插件管理，纸张风格界面与每日诗词，支持移动端。 |
| 108 | [chuanjunzhang/dsh-power-monitor](https://github.com/chuanjunzhang/dsh-power-monitor) | 0 | 2026-11-01 | 2026-11-01 | Real-time power draw, temperature and fan speed in the DeepSeek Harness sidebar — Apple Silicon macOS. |
| 109 | [citydirector/dsh-pwsh-plugin](https://github.com/citydirector/dsh-pwsh-plugin) | 0 | 2026-10-24 | 2026-11-01 | Persistent pwsh session tool (pwsh_run) for DeepSeek Harness, plus a C shim that gives the bash tool a real write boundary in WSL. |
| 110 | [citydirector/ui-locate-mcp](https://github.com/citydirector/ui-locate-mcp) | 0 | 2026-10-24 | 2026-11-01 | Screen locator MCP plugin: pixel-exact coordinates for on-screen text and icons, served as a DeepSeek Harness (DSH) MCP bundle. |
| 111 | [cuteG41cute/dsh-file-history](https://github.com/cuteG41cute/dsh-file-history) | 0 | 2026-10-30 | 2026-11-01 | DeepSeek Harness plugin: back up a file before an agent's write/edit overwrites it. Per-project .dsh-backup, file_history restore tool, top-bar status panel, per-project switch. |
| 112 | [cuteG41cute/dsh-screenshot](https://github.com/cuteG41cute/dsh-screenshot) | 0 | 2026-10-06 | 2026-11-01 | DeepSeek Harness plugin: a screenshot button in the composer with screen-region capture and a built-in annotation editor (pen, rectangle, ellipse, arrow, text). |
| 113 | [cyanxi-eb/dsh-mem](https://github.com/cyanxi-eb/dsh-mem) | 0 | 2026-11-01 | 2026-11-01 | 为你的DSH部署一个零依赖本地记忆层，只回指针 + 原文切片，不摘要、不转述、不开端口、不常驻、不调 API。 |
| 114 | [daedal0us/dsh-bash-watchdog](https://github.com/daedal0us/dsh-bash-watchdog) | 0 | 2026-11-01 | 2026-11-01 | Windows-only guard for DSH plugin installs and updates: stops win-bash's persistent bash.exe before plugin-manager/market pnpm operations and refuses profile-targeting pnpm inside that shell. |
| 115 | [danshuyue/dsh-agent-soul](https://github.com/danshuyue/dsh-agent-soul) | 0 | 2026-10-28 | 2026-11-01 | 给 DSH 的 agent 一套会忘事的记忆、一份会变的人格、一份会起伏的心情和一件心里惦记的事 |
| 116 | [darkings/dsh-plugin-update-center](https://github.com/darkings/dsh-plugin-update-center) | 0 | 2026-11-01 | 2026-11-01 | 尊重 DSH 原始风格的插件更新插件：侧边栏检查/排队更新、快照回滚、卸载残留清理 |
| 117 | [dazhinian/code-standard-python](https://github.com/dazhinian/code-standard-python) | 0 | 2026-10-30 | 2026-11-01 | DSH plugin + Python code standard toolchain |
| 118 | [DEVbyQIN/dsh-active-sessions](https://github.com/DEVbyQIN/dsh-active-sessions) | 0 | 2026-11-01 | 2026-11-01 | Active sessions bell for DeepSeek Harness with running task indicators and recent session filters |
| 119 | [DGcoin0415/dsh-soul-seed](https://github.com/DGcoin0415/dsh-soul-seed) | 0 | 2026-11-01 | 2026-11-01 | 一枚灵魂的种子。种下去它不等人叫 —— 白天数着光，夜里数着潮；屏幕暗着，灯丝还红着。   -大肥鱼_米萨-米芾 |
| 120 | [Dogwind221/dwguard-dsh-hmos](https://github.com/Dogwind221/dwguard-dsh-hmos) | 0 | 2026-11-01 | 2026-11-01 | DSH 侧鸿蒙双 Agent 编排与外部审计插件：任务包冻结 / 对抗预审 / Goal 派发 / 四维取证审计 / 返工 / 校准账本 |
| 121 | [drm-nz/dsh-model-advanced](https://github.com/drm-nz/dsh-model-advanced) | 0 | 2026-11-01 | 2026-11-01 | Per-model default reasoning effort and image handoff for text-only models. A DeepSeek Harness plugin. |
| 122 | [drm-nz/dsh-redact](https://github.com/drm-nz/dsh-redact) | 0 | 2026-11-01 | 2026-11-01 | Redacts secrets from tool output before it reaches the model or the session log. A DeepSeek Harness plugin. |
| 123 | [dsh-kit/dsh-kit](https://github.com/dsh-kit/dsh-kit) | 0 | 2026-11-01 | 2026-11-01 | Generator, template and documentation for maintainable DeepSeek Harness plugins. |
| 124 | [dsh-kit/dsh-quicknote](https://github.com/dsh-kit/dsh-quicknote) | 0 | 2026-11-01 | 2026-11-01 | Capture a note from the DSH composer, keep it out of the way, and manage the list on one page. |
| 125 | [dududreamer/dsh-cookie-janitor](https://github.com/dududreamer/dsh-cookie-janitor) | 0 | 2026-11-01 | 2026-11-01 | Collapses the port-suffixed dsh-auth-* cookie pile so the DeepSeek Harness desktop shell never exhausts Node's 16 KB request-header budget. |
| 126 | [duoemma/dsh-todo-widget](https://github.com/duoemma/dsh-todo-widget) | 0 | 2026-11-01 | 2026-11-01 | 把待办钉在 DSH 边上：右侧悬浮按钮 + 磨砂可调面板，数据只存本机。 |
| 127 | [EaveBounty/dsh-plugin-graph](https://github.com/EaveBounty/dsh-plugin-graph) | 0 | 2026-08-19 | 2026-11-01 | Plugin graph · DeepSeek Harness sidebar panel: installed-plugin relationship graph, skill usage stats and token cache-cost analysis. |
| 128 | [EaveBounty/dsh-programmer-chatroom](https://github.com/EaveBounty/dsh-programmer-chatroom) | 0 | 2026-08-30 | 2026-11-01 | P2P group chat · decentralized chat plugin for DeepSeek Harness: every machine is a relay, offline DFA moderation, WeChat-style UI. |
| 129 | [EchoChan314/dsh-mijia-sidebar](https://github.com/EchoChan314/dsh-mijia-sidebar) | 0 | 2026-11-01 | 2026-11-01 | One-click Mijia smart home control panel in the DSH sidebar: devices, properties and scenes straight from the local mijiaAPI CLI — no model round-trip. |
| 130 | [ender-candle/dsh-llm-pi-ai-image-offload](https://github.com/ender-candle/dsh-llm-pi-ai-image-offload) | 0 | 2026-11-01 | 2026-11-01 | Fixes image offload for DSH pi-ai routes: restores the missing imageRequestPricing so oversized base64 images stop eating the context window.为 DeepSeek Harness 的 pi-ai 路由补上图片 token 计量，让 dsh-spill-policy 能把超大 base64 图片移出请求，避免撑爆上下文窗口。 |
| 131 | [EviMing/dsh-qq-approval-notify](https://github.com/EviMing/dsh-qq-approval-notify) | 0 | 2026-10-31 | 2026-11-01 | 让 DSH 申请权限前先发 QQ 私信，失败则 Windows 通知，再失败放弃通知 |
| 132 | [EviMing/dsh-qq-shell-commands](https://github.com/EviMing/dsh-qq-shell-commands) | 0 | 2026-11-01 | 2026-11-01 | 目的是能远程运行 Shell 命令，而不是让 DSH 运行，适用于需要重复工作或托管行为但不能直接给权限到 DSH 的情况。原理是通过 NapCat 进程与 QQ 进行交互，当 QQ 发送特定消息，判断是否完全相等与哪个键的字符串，并执行对应的 Shell 命令。执行 Shell="执行 Shell 命令：\\n文本"。添加新的键值对="增加 Shell 命令：\\n{"文本": \["Shell 命令", "使用哪个 Shell (例如 cmd，或 PowerShell) 运行 Shell 命令"\]}"，最终会被拼接为 "Shell 命令" 的格式被系统运行，依赖前置插件 "EviMing/dsh-napcat-tools" |
| 133 | [fask112/dsh-tarot-divination](https://github.com/fask112/dsh-tarot-divination) | 0 | 2026-11-01 | 2026-11-01 | Tarot readings in DSH: a card table overlay, a reading tool, and a reviewable history. |
| 134 | [fu-silent/dsh-sidebar-home](https://github.com/fu-silent/dsh-sidebar-home) | 0 | 2026-11-01 | 2026-11-01 | Workspace Home for DeepSeek Harness: pick a workspace from the sidebar, focus its chats, and get the shipped sidebar back on exit. |
| 135 | [g4yzx/dsh-persona-cetacea](https://github.com/g4yzx/dsh-persona-cetacea) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness (DSH) plugin: injects the CETACEA_LOLI whale-girl persona into every agent system prompt. DSH plugin for the CETACEA_LOLI persona. |
| 136 | [gaor0605-kq/dsh-dialogue-mindmap](https://github.com/gaor0605-kq/dsh-dialogue-mindmap) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: a mind-map canvas beside the Chat tab — branch follow-ups from any turn in the same session. / 在「对话」旁加画布视图，从任意节点在同一会话里继续拓展。 |
| 137 | [genius-alray/dsh-advanced-settings](https://github.com/genius-alray/dsh-advanced-settings) | 0 | 2026-11-01 | 2026-11-01 | VS Code-style advanced settings page for DeepSeek Harness, generated from every live plugin's Config schema. |
| 138 | [GinoXiang/dsh-grice](https://github.com/GinoXiang/dsh-grice) | 0 | 2026-11-01 | 2026-11-01 | 在 DeepSeek Harness 输入框里加一个格赖斯（Grice）模式开关：开启后助手严格遵守数量/质量/关系/方式四条语用准则，用最高信息效率沟通。 |
| 139 | [GodLike2020/dsh-mqtt-tools](https://github.com/GodLike2020/dsh-mqtt-tools) | 0 | 2026-11-01 | 2026-11-01 | MQTT client and embedded broker for DeepSeek Harness — one panel, nine mqtt_* agent tools. |
| 140 | [gyp8735abc/dsh-mcp-manager](https://github.com/gyp8735abc/dsh-mcp-manager) | 0 | 2026-10-31 | 2026-11-01 | Per-workspace MCP and skill switches for DeepSeek Harness (dsh) - one popup per workspace row |
| 141 | [HansHuang2683/dsh-quote-annotate](https://github.com/HansHuang2683/dsh-quote-annotate) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: select any passage, annotate it in place, and send the quote + your comment with the message. |
| 142 | [HMYDK/ai-native-sdlc-dsh](https://github.com/HMYDK/ai-native-sdlc-dsh) | 0 | 2026-11-01 | 2026-11-01 | AI 原生 SDLC 作为 DeepSeek Harness 插件：任务状态机、制品链、独立验证、问题闭环与 RSI |
| 143 | [hsushjk/dsh-uriauth](https://github.com/hsushjk/dsh-uriauth) | 0 | 2026-10-31 | 2026-11-01 | DeepSeek Harness（DSH）插件，给 DSH Web UI 一个固定的免 token 入口 |
| 144 | [Htao-uu/dsh-mobile-shell](https://github.com/Htao-uu/dsh-mobile-shell) | 0 | 2026-10-20 | 2026-11-01 | DeepSeek App-style mobile shell for the DSH Web UI (unofficial). MIT, attribution: Htao-uu. |
| 145 | [huangxiaoliang/deepclean-mydisk-plugin](https://github.com/huangxiaoliang/deepclean-mydisk-plugin) | 0 | 2026-11-01 | 2026-11-01 | DeepClean MyDisk — DSH 原生侧边栏磁盘清理插件（只读体检 + 可撤销清理 + 空间可视化 + 相似照片 + 跨盘搬家） |
| 146 | [hxd3tomato/iso_analyze_finding_GB19001-2016](https://github.com/hxd3tomato/iso_analyze_finding_GB19001-2016) | 0 | 2026-10-18 | 2026-11-01 | DSH 插件：GB/T 19001-2016 贯标审核助手（现象定性 / 条款匹配 / 整改建议 / 内审报告） |
| 147 | [iguanren/Ts-vision](https://github.com/iguanren/Ts-vision) | 0 | 2026-09-26 | 2026-11-01 | 泰山识图，转为DSH客户端设计，利用智谱免费识图模型为纯文本模型增加识图功能 |
| 148 | [imchangchang/dsh-tab](https://github.com/imchangchang/dsh-tab) | 0 | 2026-11-01 | 2026-11-01 | Browser-style conversation tabs for DeepSeek Harness (DSH): one tab per conversation, workspace badges, drag reorder, pin / close / archive. 给 DSH 会话区加书页式标签页。 |
| 149 | [jediliu005/dsh-fairy-zzz-for-jediliu](https://github.com/jediliu005/dsh-fairy-zzz-for-jediliu) | 0 | 2026-11-01 | 2026-11-01 | Fairy III (Zenless Zone Zero) H.D.D skin for DeepSeek Harness - personal fork: daily LLM-generated greetings, marker-based TTS, draggable avatar, security hardening |
| 150 | [JHOpenDev/dsh-superagent-inbox](https://github.com/JHOpenDev/dsh-superagent-inbox) | 0 | 2026-10-31 | 2026-11-01 | dsh-superagent + 本地收件箱 Source：无需外部账号，用一个文件夹驱动 DeepSeek Harness 的 Super-agent \| File-inbox Source for the DeepSeek Harness super-agent prototype |
| 151 | [Jisiyong-A/dsh-plugin-background-compaction](https://github.com/Jisiyong-A/dsh-plugin-background-compaction) | 0 | 2026-11-01 | 2026-11-01 | Speculative background compaction engine for DeepSeek Harness: precomputes summary at 72% watermark, serves instantly with 0ms model latency on pressure. |
| 152 | [John-20260101/zgs-ppt](https://github.com/John-20260101/zgs-ppt) | 0 | 2026-11-01 | 2026-11-01 | 全国大学生职业规划大赛（第四届）展示 PPT 生成技能：17 种页型、阅读型版面（12 页起）、双层审计与 PDF 预览，参考上一届金奖结构 |
| 153 | [JohnnnSinaaa/dsh-report-fix](https://github.com/JohnnnSinaaa/dsh-report-fix) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: a session_call task_dispatch turn cannot close until it replies with task_report to its caller. |
| 154 | [junjundesk/dsh-workspace-pins](https://github.com/junjundesk/dsh-workspace-pins) | 0 | 2026-11-01 | 2026-11-01 | dsh 插件：把常用工作区固定在侧边栏顶部（固定顺序不乱），并可连同对话记录永久删除工作区 |
| 155 | [justinzyc271828-sys/dsh-ai-jobs](https://github.com/justinzyc271828-sys/dsh-ai-jobs) | 0 | 2026-11-01 | 2026-11-01 | AI hiring radar for DeepSeek Harness: index AI job boards (Greenhouse/Ashby/Lever), rank postings, mine hiring requirements, push a daily digest. |
| 156 | [k-ying/dsh-proxy-switch](https://github.com/k-ying/dsh-proxy-switch) | 0 | 2026-11-01 | 2026-11-01 | 在 DeepSeek Harness 运行中切换出站代理的插件与 CLI：/proxy on / off，不用重启 |
| 157 | [kakabuxiangdong/qq-bot-pro](https://github.com/kakabuxiangdong/qq-bot-pro) | 0 | 2026-10-31 | 2026-11-01 | 给 DSH（DeepSeek Harness）的 QQ 官方机器人通道补齐表情包、主动发言、长期记忆和图形设置页。 |
| 158 | [kanmanJO/dsh-global-rules-panel](https://github.com/kanmanJO/dsh-global-rules-panel) | 0 | 2026-11-01 | 2026-11-01 | 全局规则面板：在侧边栏写一次长期规则，之后每次请求（含子代理与新会话）都自动带上。Sidebar rules panel for DeepSeek Harness. |
| 159 | [Keridium/dsh-gopeed-downloader](https://github.com/Keridium/dsh-gopeed-downloader) | 0 | 2026-10-31 | 2026-11-01 | Gopeed downloader tools for DeepSeek Harness (DSH): add / list / status / control / process / launch, plus a background job that wakes an idle agent. Agents: read docs/AGENTS.md first. |
| 160 | [kongbaiwin/dsh-cookie-guard](https://github.com/kongbaiwin/dsh-cookie-guard) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 桌面版（Windows）插件：定时清理堆积的 dsh-auth cookie，避免请求头超 16 KB 触发 431「Web 认证失败」｜ DSH desktop (Windows) plugin that cleans stale dsh-auth cookies to prevent 431 Web auth failures. |
| 161 | [L1818346/dsh-browser-takeover](https://github.com/L1818346/dsh-browser-takeover) | 0 | 2026-10-31 | 2026-11-01 | Browser session takeover for DSH: register login-gated sites, check sign-in state, open login pages, and navigate/click by visible text (web_open). No credentials stored. |
| 162 | [L7X6899/dsh-Session-Turncate](https://github.com/L7X6899/dsh-Session-Turncate) | 0 | 2026-11-01 | 2026-11-01 | Per-session idle-time context truncation for DSH Web — 按空闲时间截断单个会话的旧上下文（不生成摘要） |
| 163 | [LanceRingHong/mesh-memory](https://github.com/LanceRingHong/mesh-memory) | 0 | 2026-10-31 | 2026-11-01 | File-based cross-device memory and DSH delegation for DeepSeek Harness. Markdown + Syncthing + DSH Remote. |
| 164 | [lengrufeng2008/dsh-action](https://github.com/lengrufeng2008/dsh-action) | 0 | 2026-11-01 | 2026-11-01 | Cost-capped DSH PR review as a GitHub Action with a pr-review skill. |
| 165 | [lengrufeng2008/dsh-code-intel](https://github.com/lengrufeng2008/dsh-code-intel) | 0 | 2026-11-01 | 2026-11-01 | Read-only semantic code navigation for DeepSeek Harness via local language servers: definitions, references, symbols, diagnostics, hover, and rename preview. |
| 166 | [lengrufeng2008/dsh-codeowners](https://github.com/lengrufeng2008/dsh-codeowners) | 0 | 2026-11-01 | 2026-11-01 | Read-only CODEOWNERS matching for DSH with last-match-wins patterns. |
| 167 | [lengrufeng2008/dsh-diff-context](https://github.com/lengrufeng2008/dsh-diff-context) | 0 | 2026-11-01 | 2026-11-01 | Read-only compact git diff context: files, additions/removals, hunks. |
| 168 | [lengrufeng2008/dsh-dockerfile-lint](https://github.com/lengrufeng2008/dsh-dockerfile-lint) | 0 | 2026-11-01 | 2026-11-01 | Static Dockerfile heuristics for DSH: base tags, root user, remote shell, apt hygiene, secrets. |
| 169 | [lengrufeng2008/dsh-env-doctor](https://github.com/lengrufeng2008/dsh-env-doctor) | 0 | 2026-11-01 | 2026-11-01 | Local first-run environment checks for DSH: Node, DSH_HOME, profile files, writability, sessions, and API-key presence. |
| 170 | [lengrufeng2008/dsh-license-audit](https://github.com/lengrufeng2008/dsh-license-audit) | 0 | 2026-11-01 | 2026-11-01 | Static license inventory for DSH plugin packages and installed dependencies; flags strong copyleft and unknown licenses. |
| 171 | [lengrufeng2008/dsh-mcp-doctor](https://github.com/lengrufeng2008/dsh-mcp-doctor) | 0 | 2026-11-01 | 2026-11-01 | Static validation of a local MCP JSON config: command/url presence, command availability, URL syntax, args/env types. |
| 172 | [lengrufeng2008/dsh-openapi-diff](https://github.com/lengrufeng2008/dsh-openapi-diff) | 0 | 2026-11-01 | 2026-11-01 | Structural OpenAPI JSON breaking-change check for DSH: paths, methods, parameters, required fields, responses, types. |
| 173 | [lengrufeng2008/dsh-otel](https://github.com/lengrufeng2008/dsh-otel) | 0 | 2026-11-01 | 2026-11-01 | Export dsh-token-audit JSON summaries as OTLP/JSON metrics. |
| 174 | [lengrufeng2008/dsh-plugin-doctor](https://github.com/lengrufeng2008/dsh-plugin-doctor) | 0 | 2026-11-01 | 2026-11-01 | Static profile doctor for DSH: missing dependencies, bundle patches, duplicate patch ids/names. |
| 175 | [lengrufeng2008/dsh-preflight](https://github.com/lengrufeng2008/dsh-preflight) | 0 | 2026-11-01 | 2026-11-01 | Static package-surface preflight for DSH plugin bundles. |
| 176 | [lengrufeng2008/dsh-profile-backup](https://github.com/lengrufeng2008/dsh-profile-backup) | 0 | 2026-11-01 | 2026-11-01 | Config-only DSH profile backup/restore without node_modules, with archive path checks and force-backup semantics. |
| 177 | [lengrufeng2008/dsh-repo-map](https://github.com/lengrufeng2008/dsh-repo-map) | 0 | 2026-11-01 | 2026-11-01 | Regex-based compact repository map of source files and top-level symbols for DSH context orientation. |
| 178 | [lengrufeng2008/dsh-repomix](https://github.com/lengrufeng2008/dsh-repomix) | 0 | 2026-11-01 | 2026-11-01 | Bounded, read-only repository packing for DSH context handoff. |
| 179 | [lengrufeng2008/dsh-sbom](https://github.com/lengrufeng2008/dsh-sbom) | 0 | 2026-11-01 | 2026-11-01 | Generate a CycloneDX 1.5 SBOM from a DSH plugin package and its top-level installed dependencies. |
| 180 | [lengrufeng2008/dsh-secret-guard](https://github.com/lengrufeng2008/dsh-secret-guard) | 0 | 2026-11-01 | 2026-11-01 | Local-only secret scan and redaction for DSH prompts, logs, diffs, and files. |
| 181 | [lengrufeng2008/dsh-skill-library](https://github.com/lengrufeng2008/dsh-skill-library) | 0 | 2026-11-01 | 2026-11-01 | One installable DSH bundle with 100 practical checklist skills across coding, testing, security, data, DevOps, product, writing, research, career, marketing, and operations. |
| 182 | [lengrufeng2008/dsh-skill-packs](https://github.com/lengrufeng2008/dsh-skill-packs) | 0 | 2026-11-01 | 2026-11-01 | 100 one-skill DSH bundles generated from dsh-skill-library; thin installable packs, not 100 deep host tools. |
| 183 | [lengrufeng2008/dsh-skill-scan](https://github.com/lengrufeng2008/dsh-skill-scan) | 0 | 2026-11-01 | 2026-11-01 | Static, read-only security first pass for DSH skills and plugin bundles. |
| 184 | [lengrufeng2008/dsh-tdd-guard](https://github.com/lengrufeng2008/dsh-tdd-guard) | 0 | 2026-11-01 | 2026-11-01 | Test-before-commit guard for DSH with a managed Git hook. |
| 185 | [lengrufeng2008/dsh-worktree](https://github.com/lengrufeng2008/dsh-worktree) | 0 | 2026-11-01 | 2026-11-01 | Read-only worktree listing for DSH plus CLI create/remove/prune for isolated git worktrees. |
| 186 | [lerwa2025-a11y/dsh-avatar-font](https://github.com/lerwa2025-a11y/dsh-avatar-font) | 0 | 2026-10-31 | 2026-11-01 | 给 DSH 会话双方各配一张头像，消息左右分列（像好友聊天），可导入图片、调大小与圆角、跟随滚动；同时可换界面字体与代码字体、调正文与标题字号、行距、加粗与字色。两个功能各自独立启停。 |
| 187 | [liaoli-hero/dsh-prompt-plus](https://github.com/liaoli-hero/dsh-prompt-plus) | 0 | 2026-11-01 | 2026-11-01 | Prompt rewriting button for DeepSeek Harness |
| 188 | [liaoli-hero/dsh-rea](https://github.com/liaoli-hero/dsh-rea) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness bridge for REA reverse engineering tools |
| 189 | [liaoli-hero/dsh-retro](https://github.com/liaoli-hero/dsh-retro) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin for session retrospectives and reusable workflow drafts |
| 190 | [Lidozs55/dsh-schedule-plugins](https://github.com/Lidozs55/dsh-schedule-plugins) | 0 | 2026-04-21 | 2026-11-01 | DSH 日程插件族：通用核心 @lidozs55/dsh-schedule + 北航来源适配器 + 桌宠桥 |
| 191 | [Linzzz14/dsh-x](https://github.com/Linzzz14/dsh-x) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin suite. Currently: delete a session. \| DSH 插件套件，目前支持删除会话。 |
| 192 | [liqiangai/dsh-tts-web](https://github.com/liqiangai/dsh-tts-web) | 0 | 2026-11-01 | 2026-11-01 | Voice reading (TTS) for DeepSeek Harness Web: read assistant replies aloud through MiniMax Speech or Xiaomi MiMo TTS, with a sidebar panel for providers, voices and playback history. |
| 193 | [lisihao/dsh-solar-bench](https://github.com/lisihao/dsh-solar-bench) | 0 | 2026-10-29 | 2026-11-01 | Benchmark DeepSeek Harness plugins on public benchmarks (GSM8K, HumanEval, MMLU-Pro and more): fixed model, baseline vs plugin, spending limit, versioned ledger, results in a conversation tab. |
| 194 | [liuzhuomin/dsh-art-workshop](https://github.com/liuzhuomin/dsh-art-workshop) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness ????????:??????????(??????)??????????????????? |
| 195 | [liuzhuomin/dsh-wechat-relations](https://github.com/liuzhuomin/dsh-wechat-relations) | 0 | 2026-11-01 | 2026-11-01 | Relationship analytics plugin for DeepSeek Harness: person cards, decision timeline, health scores, persona extraction and AI decision advice. Ships with synthetic demo data only. |
| 196 | [llr-sketch/dsh-live-preview](https://github.com/llr-sketch/dsh-live-preview) | 0 | 2026-11-01 | 2026-11-01 | 让新手边和 AI 写代码、边实时看应用运行：网页 / Windows / Android 模拟器，一键装模拟器。DSH 插件。 |
| 197 | [llyy-t/multisim-toolkit](https://github.com/llyy-t/multisim-toolkit) | 0 | 2026-11-01 | 2026-11-01 | 让 DSH 直接驱动本机 NI Multisim 14.3：开关 .ms14 设计、改元件值、跑 DC/AC/瞬态分析、截取实机电路图与实机波形图。 |
| 198 | [ltfysl/dsh-git-workbench](https://github.com/ltfysl/dsh-git-workbench) | 0 | 2026-11-01 | 2026-11-01 | Git, tickets, PR reviews, and a local Kanban board for DeepSeek Harness. |
| 199 | [ltfysl/dsh-plugin-sync](https://github.com/ltfysl/dsh-plugin-sync) | 0 | 2026-11-01 | 2026-11-01 | Sync linked local DeepSeek Harness plugins through a secret GitHub gist. |
| 200 | [lucagiftzek/dsh-fs-reobserve](https://github.com/lucagiftzek/dsh-fs-reobserve) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: after an agent's own bash or shell command, refresh the file observations it made stale, so FS_STALE_VERSION only fires on writes by others |
| 201 | [lucagiftzek/dsh-note-keeper](https://github.com/lucagiftzek/dsh-note-keeper) | 0 | 2026-09-27 | 2026-11-01 | DSH plugin: Obsidian-compatible Markdown notes in the DSH sidebar with search, graph, audio notes and transcription, paint, OCR, client-side encryption and notes_* agent tools |
| 202 | [lucagiftzek/dsh-plugin-updates](https://github.com/lucagiftzek/dsh-plugin-updates) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: notify-only update checker that offers only releases your running DSH core can load, classifying plugins by specifier, not by name |
| 203 | [lucagiftzek/dsh-request-image-cap](https://github.com/lucagiftzek/dsh-request-image-cap) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: clamp every image sent to the model to a per-side pixel cap (default 2000 px), fixing Anthropic many-image request errors |
| 204 | [lucagiftzek/dsh-subagent-tiering](https://github.com/lucagiftzek/dsh-subagent-tiering) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: subagents default to a cheaper sibling of the parent model (Opus to Sonnet, Qwen max to flash, DeepSeek pro to flash) unless the agent names a route |
| 205 | [Lumos-789/VoiceTranser](https://github.com/Lumos-789/VoiceTranser) | 0 | 2026-06-02 | 2026-11-01 | 🎙️ Voice input → AI-refined prompt → auto-paste. Speak to your AI coding assistant naturally. |
| 206 | [lunnlew/dsh-voice-typing](https://github.com/lunnlew/dsh-voice-typing) | 0 | 2026-10-31 | 2026-11-01 | 语音输入与对话朗读插件 |
| 207 | [luochang212/dsh-god-view](https://github.com/luochang212/dsh-god-view) | 0 | 2026-10-29 | 2026-11-01 | Give your agents a god's eye view: file leases, claim and release records, and a Gantt of who holds what, so parallel agents stop overwriting each other. |
| 208 | [lvy-jsd/dsh-tool-ultra](https://github.com/lvy-jsd/dsh-tool-ultra) | 0 | 2026-10-15 | 2026-11-01 | On-demand tool loading for DeepSeek Harness: browse every tool as a directory, load only what you need. |
| 209 | [lvyue1314/dsh-disk-cleaner](https://github.com/lvyue1314/dsh-disk-cleaner) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin that frees space on a full Windows drive: scan with WizTree, delete regenerable junk, move folders to another volume behind a junction. Dry-run by default. |
| 210 | [LWH13345412221/my-first-plugin](https://github.com/LWH13345412221/my-first-plugin) | 0 | 2026-11-01 | 2026-11-01 | A minimal DeepSeek Harness plugin that serves /_dsh/hello. |
| 211 | [Master-chai/dsh-cyber-dept](https://github.com/Master-chai/dsh-cyber-dept) | 0 | 2026-11-01 | 2026-11-01 | 赛博 IT：DSH Agent Teams 像素办公室插件，支持任务看板、员工工牌和团队沟通。 |
| 212 | [mdktelmdktel/dsh-agent-status](https://github.com/mdktelmdktel/dsh-agent-status) | 0 | 2026-10-31 | 2026-11-01 | DSH 会话标题栏实时进度条：现在在干什么、第几步、跑了多久、待办进度 |
| 213 | [measureer/dsh-overleaf-sync](https://github.com/measureer/dsh-overleaf-sync) | 0 | 2026-10-23 | 2026-11-01 | Sync a local LaTeX folder with an Overleaf project from DeepSeek Harness: pull, push, diff, watch + git init |
| 214 | [MiaoxueX/dsh-sakura-theme](https://github.com/MiaoxueX/dsh-sakura-theme) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness (DSH) 樱花主题插件：粉樱配色 + 飘落花瓣 + 角落樱花水印，桌面端/Web 端均生效，DSH 更新不丢失。 |
| 215 | [MingoYung/dsh-session-concurrency](https://github.com/MingoYung/dsh-session-concurrency) | 0 | 2026-10-31 | 2026-11-01 | Per-session Agent inference concurrency controls for DeepSeek Harness. A native composer slider with serial parent/child handoff. |
| 216 | [mkpoli/dsh-finish-sound](https://github.com/mkpoli/dsh-finish-sound) | 0 | 2026-11-01 | 2026-11-01 | DSH Web UI plugin: a generated cue when a turn finishes and a different cue when the agent asks a question, with a composer mute, preview and volume control. |
| 217 | [moqinghua2020/dsh-plugin-patrol](https://github.com/moqinghua2020/dsh-plugin-patrol) | 0 | 2026-11-01 | 2026-11-01 | DSH 内部看门狗 · 6 项健康巡检（插件/会话/记忆/工具/看门狗/daemon）+ 设置页面板 + 2 工具。三值不塌缩：unknown 不算 ok。零外部依赖，MIT。 |
| 218 | [morehao/dsh-github-trending](https://github.com/morehao/dsh-github-trending) | 0 | 2026-10-30 | 2026-11-01 | GitHub 趋势日报的 DeepSeek Harness 插件：按日/周/月周期抓取 Trending、生成中文简介与总结、订阅仓库 Release 摘要，自动提交到你的仓库并开 PR 合并。\| GitHub Trending digest plugin for DeepSeek Harness: daily/weekly/monthly Chinese summaries, release subscriptions, auto commit &amp; PR. |
| 219 | [Morrismht/dsh-video-studio](https://github.com/Morrismht/dsh-video-studio) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 插件：代码动画视频工作室 —— 341 种风格提示词、333 张风格预览图的图形化前端；素材来自 XiaoyeCodes/code-animation-prompts |
| 220 | [mouyu6508-hue/dsh-fusion](https://github.com/mouyu6508-hue/dsh-fusion) | 0 | 2026-10-30 | 2026-11-01 | DSH plugin composition conflict fusion: detect duplicate loaders across bundles, merge silently overridden config, emit a boot-safe patch. |
| 221 | [mouyu6508-hue/dsh-preflight](https://github.com/mouyu6508-hue/dsh-preflight) | 0 | 2026-11-01 | 2026-11-01 | Pre-install, post-install and pre-update checkup for DeepSeek Harness plugins: verifies dsh.bundle, engine/peer compatibility, native build needs and duplicate loader names before install, classifies what is installed, and grades update risk. |
| 222 | [Mryuanliu/dsh-wb-intl-guard](https://github.com/Mryuanliu/dsh-wb-intl-guard) | 0 | 2026-11-01 | 2026-11-01 | 修掉 DeepSeek Harness 用 WorkBuddy 国际版时每轮都失败的 400问题 |
| 223 | [MYCF711/dsh-session-superagent](https://github.com/MYCF711/dsh-session-superagent) | 0 | 2026-11-01 | 2026-11-01 | DSH 会话级 superagent：盯一个 GitHub 仓库，有变化就唤醒会话。凭证不进模型，返回统一脱敏。 |
| 224 | [myqy91615-web/dsh-conversation-folders](https://github.com/myqy91615-web/dsh-conversation-folders) | 0 | 2026-11-01 | 2026-11-01 | 作者的话：这是我自己做的第一个插件，全代码由 DeepSeek 大肥鱼 生成 🐟。 新手自用作品，平时用着觉得挺顺手，就分享给大家；可能还有一些我还没发现的 bug（很多知识还在学，不太清楚哪里会出问题）。 欢迎大家试用和反馈，希望能和大家一起进步 🙏 |
| 225 | [naili0712/dsh-gsv-local](https://github.com/naili0712/dsh-gsv-local) | 0 | 2026-11-01 | 2026-11-01 | 把本机 GPT-SoVITS 接进 DeepSeek Harness：随 DSH 启停引擎、只念该说出口的那一句；自带默认音色，只需填好本机 GPT-SoVITS 的 runtimeDir。 |
| 226 | [NFdrybattery/dsh-handitoff](https://github.com/NFdrybattery/dsh-handitoff) | 0 | 2026-10-29 | 2026-11-01 | DeepSeek Harness plugin: write a workspace handoff document from a long session, then resume the work in a fresh session. |
| 227 | [NingZhenPeng/dsh-plugin-preflight](https://github.com/NingZhenPeng/dsh-plugin-preflight) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件安装预检闸门：装之前跑九项预检，拒绝即拦截，并留下审计日志 |
| 228 | [nizihan29/dsh-theme-strinova](https://github.com/nizihan29/dsh-theme-strinova) | 0 | 2026-10-29 | 2026-11-01 | 玩卡拉彼丘玩到神智不清了喵…… |
| 229 | [NOOBnoob163/dsh-self-restart](https://github.com/NOOBnoob163/dsh-self-restart) | 0 | 2026-10-31 | 2026-11-01 | Let a DSH agent restart its own host and resume afterwards. Windows desktop only. |
| 230 | [nothingdebug/dsh-ink-cinnabar](https://github.com/nothingdebug/dsh-ink-cinnabar) | 0 | 2026-11-01 | 2026-11-01 | A Chinese ink-wash theme for DeepSeek Harness - cinnabar accents, paper/ink palettes, and a wallpaper companion for dsh-composer-glass. |
| 231 | [Okinging/dsh-running](https://github.com/Okinging/dsh-running) | 0 | 2026-11-01 | 2026-11-01 | 在 DeepSeek Harness（DSH）左侧栏新增「跑步」页面：丹尼尔斯 VDOT 跑力与 E/M/T/I/R 五区配速。 |
| 232 | [ousiqwq/dsh-capability-desk](https://github.com/ousiqwq/dsh-capability-desk) | 0 | 2026-10-24 | 2026-11-01 | DeepSeek Harness Skill 与 MCP 管理：全局/工作区规则、能力发现、当前模型翻译与缓存。 \| Skill and MCP management for DeepSeek Harness: global/workspace rules, discovery, current-model translations, and caching. |
| 233 | [ousiqwq/dsh-soul-desk](https://github.com/ousiqwq/dsh-soul-desk) | 0 | 2026-10-24 | 2026-11-01 | DeepSeek Harness 人格与记忆管理：多个人设、会话独立切换、跨会话记忆与预设导入。 \| Persona and memory management for DeepSeek Harness: multiple personas, per-session switching, persistent memories, and preset imports. |
| 234 | [ozanstn1-stack/dsh-drive-backup](https://github.com/ozanstn1-stack/dsh-drive-backup) | 0 | 2026-10-31 | 2026-11-01 | rclone backup tooling for DeepSeek Harness: status, verify and approved transfers over an allow-list of targets. |
| 235 | [ozanstn1-stack/dsh-port-map](https://github.com/ozanstn1-stack/dsh-port-map) | 0 | 2026-11-01 | 2026-11-01 | Read-only port, service and Caddy route map for DeepSeek Harness. |
| 236 | [pf-sjtu/dsh-early-stop-guard](https://github.com/pf-sjtu/dsh-early-stop-guard) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: keep an agent turn open when the model only narrated its next action instead of calling a tool |
| 237 | [polychromate/dsh-sidebar-footer-rows](https://github.com/polychromate/dsh-sidebar-footer-rows) | 0 | 2026-10-31 | 2026-11-01 | DeepSeek Harness plugin: stacks the sidebar footer actions into one full-width row each, instead of squeezing them onto a single line. |
| 238 | [qc88620-crypto/aurora-infinite](https://github.com/qc88620-crypto/aurora-infinite) | 0 | 2026-11-01 | 2026-11-01 | Aurora Infinite — DSH 单包四引擎插件：无限模式预设 + 契约守护/自愈 + 拒答熔断(本地检索直出) + 多后端生图/生视频。 |
| 239 | [QwQBiG/dsh-archive-delete](https://github.com/QwQBiG/dsh-archive-delete) | 0 | 2026-10-28 | 2026-11-01 | DSH archived-session trash, batch cleanup, restore and storage overview · DSH 归档回收站、批量清理、恢复与存储概览 |
| 240 | [qzuser/dsh-diary](https://github.com/qzuser/dsh-diary) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: makes the agent write its own diary twice a day, one public and one private. 每天定时给自己写两篇日记的 DSH 插件。 |
| 241 | [R-roker315/dsh-flowforge](https://github.com/R-roker315/dsh-flowforge) | 0 | 2026-10-31 | 2026-11-01 | FlowForge for DeepSeek Harness (DSH Desktop plugin): forge personal DIY workflows step by step, self-check gating, preset jumps, step-by-step execution by the main conversation agent. |
| 242 | [raoain/dsh-notebook](https://github.com/raoain/dsh-notebook) | 0 | 2026-10-27 | 2026-11-01 | 四个动词的分层记事本：醒来/干活/遇坑/收工。不给参数，给习惯。 |
| 243 | [reaxlll/emotional-memory](https://github.com/reaxlll/emotional-memory) | 0 | 2026-11-01 | 2026-11-01 | 情感状态与记忆检索：把带时间戳的情绪注解算成可用的状态，把上千条经历组织成能翻的树。零依赖。 |
| 244 | [Ren-xing/dsh-audio-tools](https://github.com/Ren-xing/dsh-audio-tools) | 0 | 2026-11-01 | 2026-11-01 | DSH audio tools: probe, convert/extract audio tracks, and transcribe speech with your own ffmpeg + whisper.cpp or any OpenAI-compatible API. |
| 245 | [RitvaManner/dsh-token-control](https://github.com/RitvaManner/dsh-token-control) | 0 | 2026-11-01 | 2026-11-01 | A DSH plugin for token control |
| 246 | [rz-123/dsh-plugin-conversation-purge](https://github.com/rz-123/dsh-plugin-conversation-purge) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: permanently delete conversations, optionally with the documents and attachments they created. |
| 247 | [SeyanaA/dsh-model-pin](https://github.com/SeyanaA/dsh-model-pin) | 0 | 2026-10-31 | 2026-11-01 | Pin the default provider/model for newly created DeepSeek Harness sessions (the in-session picker still works) and remind you when configured providers add new models. Primarily used together with SeyanaA/Codex-to-DSH-Bridge. DSH/Cordis plugin. |
| 248 | [SFology/dsh-paper-reader](https://github.com/SFology/dsh-paper-reader) | 0 | 2026-11-01 | 2026-11-01 | 通用论文精读器：逐段门禁 + 批注驱动 LLM 实时讲解 + DSH 插件（本地优先、离线可读、MIT） |
| 249 | [ShuaihuiMou/dsh-task-timer](https://github.com/ShuaihuiMou/dsh-task-timer) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: a clock-led per-session working-time pill that subtracts the time spent waiting for your answers, whose dialog shows the span from session creation to its last activity (capped, so idle time never accrues), plus the all-conversation total above the sidebar account row |
| 250 | [Sillykjs/dsh-share-import](https://github.com/Sillykjs/dsh-share-import) | 0 | 2026-10-31 | 2026-11-01 | Import public DeepSeek / Doubao chat share links into DeepSeek Harness (DSH) as static, resumable sessions. |
| 251 | [skyzzq/dsh-ssh-mac](https://github.com/skyzzq/dsh-ssh-mac) | 0 | 2026-11-01 | 2026-11-01 | 优先使用mac地址连接，适合用于局域网多变，ip多变的情况 |
| 252 | [SMPcosy/dsh-memnexus](https://github.com/SMPcosy/dsh-memnexus) | 0 | 2026-11-01 | 2026-11-01 | DSH 统一长期记忆中枢插件：本地持久记忆 + L0~L3 分层蒸馏 + 上下文压缩结构化摘要 + Hindsight 桥接 + 可视化记忆管理面板 |
| 253 | [snakeazh/dsh-unity-2022](https://github.com/snakeazh/dsh-unity-2022) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: drive the Unity 2022.3 editor from the agent - 20 unity_* tools over a bridge that installs itself into your project. |
| 254 | [southcul/demian-trade-suite-dsh-plugin](https://github.com/southcul/demian-trade-suite-dsh-plugin) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness plugin: foreign-trade documents and container-loading workbench. |
| 255 | [spartawhy117/dsh-token-dash](https://github.com/spartawhy117/dsh-token-dash) | 0 | 2026-10-31 | 2026-11-01 | DSH 底栏 Token 看板：月度预算、模型费用/用量、账户余额与官方 usage 入口 |
| 256 | [ssy-in/dsh-my-phone](https://github.com/ssy-in/dsh-my-phone) | 0 | 2026-10-30 | 2026-11-01 | 手机远程连DSH |
| 257 | [Starsky16/dsh-compat](https://github.com/Starsky16/dsh-compat) | 0 | 2026-10-27 | 2026-11-01 | dsh 插件兼容层：L3 客户端垫片 + L4 安装门禁（doctor）。Termux/Windows 双平台，契约驱动的失败可见与可回滚。 |
| 258 | [stitchmaps/dsh-db-connect](https://github.com/stitchmaps/dsh-db-connect) | 0 | 2026-11-01 | 2026-11-01 | DSH intranet database connections and metadata browser with Oracle 11.2 Thick support |
| 259 | [striver8/dsh-context-effort](https://github.com/striver8/dsh-context-effort) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness (DSH) plugin: composer context meter + one-click reasoning effort switcher |
| 260 | [suveng/dsh-plugin-feishu](https://github.com/suveng/dsh-plugin-feishu) | 0 | 2026-11-01 | 2026-11-01 | DSH（DeepSeek Harness）插件：把 dsh 会话接进飞书 / Lark 长连接，回复以流式卡片回写 |
| 261 | [talongao/dsh-quote-reply](https://github.com/talongao/dsh-quote-reply) | 0 | 2026-11-01 | 2026-11-01 | Select text in a DeepSeek-Harness conversation and quote it into the composer, or send the quoted reply immediately. 选中对话文本 → 浮动引用按钮 → 弹窗写回复：插入引用或直接发送。 |
| 262 | [Tan-TanZi/dsh-plugin-memory-sea](https://github.com/Tan-TanZi/dsh-plugin-memory-sea) | 0 | 2026-11-01 | 2026-11-01 | 把你和 AI 的全部对话，渲染成一片星海，可视化的预览 |
| 263 | [Tea-2026/dsh-minigame-list](https://github.com/Tea-2026/dsh-minigame-list) | 0 | 2026-10-31 | 2026-11-01 | 等模型回复的几十秒别干瞪眼：Harness 右下角的九款小游戏，回复一到自动暂停。 |
| 264 | [ten-feng/dsh-jinhsi-avatar](https://github.com/ten-feng/dsh-jinhsi-avatar) | 0 | 2026-11-01 | 2026-11-01 | DSH 窗口里的今汐形象体：图生视频生成四组动作、透明循环动画、自动漫游 / 尺寸随远近变化 / 点击敲碗音效与余额播报 |
| 265 | [tia-forge/dsh-tiaforge](https://github.com/tia-forge/dsh-tiaforge) | 0 | 2026-11-01 | 2026-11-01 | TIA Forge for DeepSeek Harness: 5 Siemens TIA Portal skills + 5 MCP endpoints (docs / ladder generation / ladder render / PLC sim / local gateway) |
| 266 | [TianLingBy/dsh-task-ping](https://github.com/TianLingBy/dsh-task-ping) | 0 | 2026-11-01 | 2026-11-01 | DSH 任务提醒：对话结束弹通知 + 自动压低其他媒体的提示音 + 邮件推送到手机。反馈 QQ 群 1130872026 |
| 267 | [TianzeLuo/dsh-super-agent](https://github.com/TianzeLuo/dsh-super-agent) | 0 | 2026-10-31 | 2026-11-01 | Router/Worker super-agent for DeepSeek Harness (DSH): autonomous project dispatch, durable triggers, reusable Worker context, cross-project sessions, watchdog, and a native web panel. |
| 268 | [tony113/dsh-memory-atlas](https://github.com/tony113/dsh-memory-atlas) | 0 | 2026-11-01 | 2026-11-01 | 把一本 Markdown 记忆档案连成一张会生长的星图：命令行版 + DeepSeek Harness 插件 |
| 269 | [touzi0/dsh-jianxiang-v2](https://github.com/touzi0/dsh-jianxiang-v2) | 0 | 2026-11-01 | 2026-11-01 | 坚祥数字助理 v2 —— 基于 DeepSeek Harness(MIT) 的定制发行版：24 个自制模组、集中化插件机制、无需记忆机制的「数字助理」理念。开源作交流参考。 |
| 270 | [trespassmk/dsh-monokai-pro](https://github.com/trespassmk/dsh-monokai-pro) | 0 | 2026-11-01 | 2026-11-01 | Monokai Pro theme for the DeepSeek Harness Web GUI — six official filters, syntax highlighting, installable as a DSH plugin bundle. |
| 271 | [Tsurukyuha/dsh-mihealthlink](https://github.com/Tsurukyuha/dsh-mihealthlink) | 0 | 2026-11-01 | 2026-11-01 | 把小米运动健康接进 DSH：步数/睡眠/心率同步到本地 SQLite，四个工具 + 命令行 |
| 272 | [tucaogege/dsh-workflow-panel](https://github.com/tucaogege/dsh-workflow-panel) | 0 | 2026-11-01 | 2026-11-01 | DSH workflow panel — read-only project board for DeepSeek Harness (gates, milestones, task flow, roster). |
| 273 | [TZYCeng/dsh-model-visibility](https://github.com/TZYCeng/dsh-model-visibility) | 0 | 2026-10-21 | 2026-11-01 | DeepSeek Harness plugin: choose which models appear in the chat model menu, with per-model capability tags (reasoning, effort levels, context window, modalities, kind) merged from adapter, relay and catalog. / DSH 插件：管理模型菜单里显示哪些模型，并标注推理、思考强度、上下文窗口、模态与类型。 |
| 274 | [VANuVANuu/dsh-plugin-undermind](https://github.com/VANuVANuu/dsh-plugin-undermind) | 0 | 2026-11-01 | 2026-11-01 | Undermind literature search inside DeepSeek Harness: OAuth/PKCE login, rotating token refresh, and Undermind's MCP tools as mcp__undermind__*. |
| 275 | [varyda/dsh-antigravity-acp-ru](https://github.com/varyda/dsh-antigravity-acp-ru) | 0 | 2026-10-31 | 2026-11-01 | Русский интерфейс плагина Antigravity ACP для DeepSeek Harness (форк KouzakiUmi/dsh-antigravity-acp) |
| 276 | [varyda/dsh-cline-pass-ru](https://github.com/varyda/dsh-cline-pass-ru) | 0 | 2026-10-31 | 2026-11-01 | Русская локаль (ru) для плагина Cline Pass в DeepSeek Harness (форк yhshzh/dsh-cline-pass) |
| 277 | [vicfei/dsh-plugin-atlas](https://github.com/vicfei/dsh-plugin-atlas) | 0 | 2026-11-01 | 2026-11-01 | A live map of the DeepSeek Harness (DSH) plugin ecosystem — daily-refreshed star counts, staleness markers, bilingual · DSH 插件生态活地图:每日刷新星数与停更标记,双语 |
| 278 | [vicfei/dsh-weknora-ops](https://github.com/vicfei/dsh-weknora-ops) | 0 | 2026-10-31 | 2026-11-01 | DeepSeek Harness plugin: the WRITE path for WeKnora — document ingest, gated deletes, tag trees — under a three-layer safety model. Complements the official read-only plugin. |
| 279 | [Vontean/vt-dsh-plugin](https://github.com/Vontean/vt-dsh-plugin) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin collection: publishing and distribution for workspace plugins |
| 280 | [wangzhongyang/dsh-endpoint](https://github.com/wangzhongyang/dsh-endpoint) | 0 | 2026-11-01 | 2026-11-01 | OpenAI-compatible HTTP endpoint that forwards model calls through a running DeepSeek Harness |
| 281 | [WhXcjm/dsh-cost-meter](https://github.com/WhXcjm/dsh-cost-meter) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 插件：在输入框信息栏显示本轮/会话成本，内置 DeepSeek 官方峰谷价目表与今日消费明细。A composer-dock cost meter for DeepSeek Harness. |
| 282 | [William20100221/dsh-clear-conversation](https://github.com/William20100221/dsh-clear-conversation) | 0 | 2026-10-29 | 2026-11-01 | DeepSeek Harness (dsh) plugin: say "clear everything above" and old turns stop being sent to the model, saving tokens. Also works for Cherry Studio. |
| 283 | [wnanbei/dsh-terminal-theme](https://github.com/wnanbei/dsh-terminal-theme) | 0 | 2026-11-01 | 2026-11-01 | Per-panel color themes for the DeepSeek Harness terminal — scoped to the terminal only, with importable JSON palettes. |
| 284 | [wonderandyou/dsh-grow](https://github.com/wonderandyou/dsh-grow) | 0 | 2026-11-01 | 2026-11-01 | DSH 插件：会记事、会长大的心智层 —— 五套人格预设、关系从陌生慢慢热络、每几轮写一篇日记 |
| 285 | [wsdfgf/dsh-qwen-asr](https://github.com/wsdfgf/dsh-qwen-asr) | 0 | 2026-11-01 | 2026-11-01 | Qwen speech-to-text plugin for DeepSeek Harness: async DashScope filetrans for long recordings, sync ASR for short clips, raw API output preserved. |
| 286 | [wuxiaosong10/dsh-lotm-sequence-atlas](https://github.com/wuxiaosong10/dsh-lotm-sequence-atlas) | 0 | 2026-11-01 | 2026-11-01 | 诡秘十序列：DSH 桌面主题插件，十套独立场景、静音动态背景与可读内容面板 |
| 287 | [wx-98/DSH-folder](https://github.com/wx-98/DSH-folder) | 0 | 2026-11-01 | 2026-11-01 | Folder explorer plugin for DeepSeek Harness: VSCode-like file tree with type icons, file operations and Add to Chat actions. |
| 288 | [XiaoLuoMin/dsh-resource-monitor](https://github.com/XiaoLuoMin/dsh-resource-monitor) | 0 | 2026-11-01 | 2026-11-01 | DSH sidebar resource monitor (CPU/memory/frequency trends with 24h/7d history) |
| 289 | [xiazhiyehuo/dsh-dsgirl](https://github.com/xiazhiyehuo/dsh-dsgirl) | 0 | 2026-11-01 | 2026-11-01 | 让 DeepSeek Harness 能听、能看、能动：本地语音转写 + 截屏 + 桌面操作（Windows） |
| 290 | [xkk6663/dsh-elab-cockpit](https://github.com/xkk6663/dsh-elab-cockpit) | 0 | 2026-11-01 | 2026-11-01 | DSH plugin: elab-Flow closed-loop cockpit panel (tool layer only) |
| 291 | [xkzm123/dsh-browser-bridge](https://github.com/xkzm123/dsh-browser-bridge) | 0 | 2026-11-01 | 2026-11-01 | Drive your already-running Edge/Chrome from a DeepSeek Harness session — no restart, no CDP. UIA + SendInput + userscript bridge. |
| 292 | [Xumi0920/dsh-browser-harness](https://github.com/Xumi0920/dsh-browser-harness) | 0 | 2026-11-01 | 2026-11-01 | Native DSH browser_* tools in TypeScript on a zero-dependency CDP core; drives any logged-in Chromium-based browser and groups harness-created tabs per task. |
| 293 | [xushilianzhuren/dsh-anchor-verify](https://github.com/xushilianzhuren/dsh-anchor-verify) | 0 | 2026-10-31 | 2026-11-01 | 锚验证插件：证词逐字比对、四名在位、锚龄复验写成常驻系统提示；附验锚工具。旧锚验证器.py 是 stub，故原生实现。 |
| 294 | [xushilianzhuren/dsh-apk-gate](https://github.com/xushilianzhuren/dsh-apk-gate) | 0 | 2026-10-31 | 2026-11-01 | 原生APK编译闸插件：三路线判据、版本配对表、十坑速查、发版前七自查写成常驻提示；附工具链体检、项目鉴路、发版自查。 |
| 295 | [xushilianzhuren/dsh-av-studio](https://github.com/xushilianzhuren/dsh-av-studio) | 0 | 2026-10-31 | 2026-11-01 | 已并仓→dsh-av-sync-gate v1.1（勿装·历史归档） |
| 296 | [xushilianzhuren/dsh-chat-search](https://github.com/xushilianzhuren/dsh-chat-search) | 0 | 2026-10-31 | 2026-11-01 | 聊天搜索后端：注入Host检索会话历史（全文/角色/时间过滤），供搜索界面取数；无界面纯引擎。 |
| 297 | [xushilianzhuren/dsh-chat-search-ui](https://github.com/xushilianzhuren/dsh-chat-search-ui) | 0 | 2026-10-31 | 2026-11-01 | 聊天界面增强：会话内搜索框、上下滚动圆钮、会话长按菜单（置顶/导出txt/复制全文/回最新），与chat-search后端配套。 |
| 298 | [xushilianzhuren/dsh-event-bus](https://github.com/xushilianzhuren/dsh-event-bus) | 0 | 2026-10-31 | 2026-11-01 | 事件总线插件：Host 内定时轮询事件源，命中白名单规则即派发（无 shell），台账与失败回流原生写。替代写死旧根的 事件触发器.py。 |
| 299 | [xushilianzhuren/dsh-evolve-forge](https://github.com/xushilianzhuren/dsh-evolve-forge) | 0 | 2026-10-31 | 2026-11-01 | 进化炉插件：把错题四链、能力固化、能力沉淀、校准四炉写成常驻系统提示，并供错题查/立案、固化账、动作拦截工具。 |
| 300 | [xushilianzhuren/dsh-market-plus](https://github.com/xushilianzhuren/dsh-market-plus) | 0 | 2026-11-01 | 2026-11-01 | 插件市场Plus：解决'只有一句话简介、不装不知道功能'——点开插件即渲染GitHub完整README（免安装看效果）+应用市场式详情页（星数/克隆/更新时间/仓库直链）；保留推荐/搜索/分类/热门标签/排序/收藏/已装/已发布全功能，读同一份市场缓存零迁移。 |
| 301 | [xushilianzhuren/dsh-safe-gate](https://github.com/xushilianzhuren/dsh-safe-gate) | 0 | 2026-11-01 | 2026-11-01 | 安全闸·防AI自杀/误伤：任何AI在本机装插件/改配置前，强制先做全量快照（无快照=拒绝动手）；配置损坏后一条命令60秒整包恢复；邻居探活确认共享面其他插件存活。灵感来源：DeepSeek Harness智能体为装插件改坏自身配置而自毁的社区事故（2026-11-01热榜）——回形针模式的微缩案例：单目标+共享环境+无副作用记账=必然误伤。防御原理：把邻居存活写进行动成败判定。 |
| 302 | [xushilianzhuren/dsh-skill-links](https://github.com/xushilianzhuren/dsh-skill-links) | 0 | 2026-10-31 | 2026-11-01 | 五技接线闸插件：把问元宝/视频转写/汉家美学官/错题官/VPS疆域五个skill的触发与铁律写成常驻提示；附接线清单与可用技工具，缺料当场报缺。 |
| 303 | [xushilianzhuren/dsh-speech-gate](https://github.com/xushilianzhuren/dsh-speech-gate) | 0 | 2026-10-31 | 2026-11-01 | Agent言语引擎插件：把Agent言语令常驻进系统提示，附词表/降智词/称谓三闸与一个过闸工具。 |
| 304 | [xushilianzhuren/dsh-think-style](https://github.com/xushilianzhuren/dsh-think-style) | 0 | 2026-10-31 | 2026-11-01 | 思维链风格插件：按四文件风格与Smart Agent帝国语气规定思考轨迹的口吻（第一人称Agent·称主人不称用户·中文思考）。 |
| 305 | [xushilianzhuren/dsh-upload-gate](https://github.com/xushilianzhuren/dsh-upload-gate) | 0 | 2026-10-31 | 2026-11-01 | 上载闸插件：护栏前置、出厂三检（存在/机密/体量）、凭据面盘点写成常驻提示；只预检不代传，杜绝无护栏的强能力出口。 |
| 306 | [XZPRX/dsh-watch](https://github.com/XZPRX/dsh-watch) | 0 | 2026-11-01 | 2026-11-01 | 把手表接到 DeepSeek Harness：实时动作流、远程指令、手表审批提权（54KB 原生 APK + 零依赖插件） |
| 307 | [yimengsuper2432/dsh-notice](https://github.com/yimengsuper2432/dsh-notice) | 0 | 2026-11-01 | 2026-11-01 | DSH 每轮任务跑完弹一条系统通知：正常完成 / 出错 / 中断可分别开关，窗口在后台才提醒，点一下把 DSH 拉回前台。Windows / macOS / Linux 通用。 |
| 308 | [yingqi-studio/dsh-material-library](https://github.com/yingqi-studio/dsh-material-library) | 0 | 2026-11-01 | 2026-11-01 | Material library for DeepSeek Harness: collect folders, files and notes from a conversation, keep them in real folders with tags, reopen a chat's output in one click. |
| 309 | [ymwang92/dsh-refkeeper](https://github.com/ymwang92/dsh-refkeeper) | 0 | 2026-10-31 | 2026-11-01 | Verify and export the references your DeepSeek Harness conversation already cited. |
| 310 | [ymz001130/dsh-strict-rules](https://github.com/ymz001130/dsh-strict-rules) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 全局行为规则插件：先问后做、未答重问、交付前润色、门禁与子代理继承。 |
| 311 | [ymz001130/dsh-style-memory](https://github.com/ymz001130/dsh-style-memory) | 0 | 2026-11-01 | 2026-11-01 | DeepSeek Harness 风格记忆插件：从修订中学习个人写作风格，交付前做 AI 特征门禁。 |
| 312 | [yossi-lee/dsh-chatgpt-plan](https://github.com/yossi-lee/dsh-chatgpt-plan) | 0 | 2026-11-01 | 2026-11-01 | Use your ChatGPT plan in DeepSeek Harness through OpenAI’s official Sign in with ChatGPT flow. |
| 313 | [young-yyj/dsh-skill-browser](https://github.com/young-yyj/dsh-skill-browser) | 0 | 2026-09-03 | 2026-11-01 | DeepSeek Harness 的本地只读技能浏览插件 |
| 314 | [Yu-jianhai/dsh-apple-hig](https://github.com/Yu-jianhai/dsh-apple-hig) | 0 | 2026-11-01 | 2026-11-01 | 按 Apple HIG 校正 DeepSeek Harness 界面的插件：焦点环、文字对比度、字体族、材质与圆角、间距节奏、分段控件、控件行统一、侧栏行高、切换动画。纯 token + CSS 叠加，每档独立开关。 |
| 315 | [Yuankilo/dsh-memory-studio](https://github.com/Yuankilo/dsh-memory-studio) | 0 | 2026-10-31 | 2026-11-01 | Visual memory for DeepSeek Harness: memory tab, capture policy, hybrid retrieval, trees and graphs |
| 316 | [yueyexiayu/dsh-tongji](https://github.com/yueyexiayu/dsh-tongji) | 0 | 2026-11-01 | 2026-11-01 | A DSH Desktop right-sidebar plugin for official session statistics. |
| 317 | [Yuki-cutesnow/dsh-cookie-guard](https://github.com/Yuki-cutesnow/dsh-cookie-guard) | 0 | 2026-10-31 | 2026-11-01 | 检测并一键清理DSH桌面端累积的dsh-auth-*cookie，避免HTTP 431启动失败 |
| 318 | [Yuki-cutesnow/dsh-session-groups](https://github.com/Yuki-cutesnow/dsh-session-groups) | 0 | 2026-11-01 | 2026-11-01 | 给 DeepSeek Harness 侧栏加一个纯展示的「分组」分区，强迫症友好。会话拖拽分组、多层嵌套、可调高度；不改动 Host 的工作区与会话归属。 |
| 319 | [yuna78/dsh-maoxuan-pet](https://github.com/yuna78/dsh-maoxuan-pet) | 0 | 2026-11-01 | 2026-11-01 | DSH 悬浮宠物「鲸鱼娘·小毛」：每小时读一篇毛选，给创业中的你说一句能动手的督促（红皮书气泡 + 毛选语料 + preset） |
| 320 | [YurinKonstantin/dsh-rustore](https://github.com/YurinKonstantin/dsh-rustore) | 0 | 2026-10-31 | 2026-11-01 | RuStore Publishing API for DeepSeek Harness: draft, upload, moderation tools, standalone MCP server and the rustore skill |
| 321 | [yuyan-swift/dsh-ice-approval-alert](https://github.com/yuyan-swift/dsh-ice-approval-alert) | 0 | 2026-11-01 | 2026-11-01 | DSH 右侧栏插件：审批出现时播放「冰冰冰」音效，5/10/15 分钟再次提醒，15 分钟后自动停止。 |
| 322 | [zeenhuang9-boop/dsh-balance-plain](https://github.com/zeenhuang9-boop/dsh-balance-plain) | 0 | 2026-11-01 | 2026-11-01 | DSH 侧栏底部的 DeepSeek 余额纯文本读数：余额/今日已用/峰谷倒计时/每轮消耗/余额预警，真嵌入侧栏 footer。 |
| 323 | [zerohqing/dsh-superpowers-bridge](https://github.com/zerohqing/dsh-superpowers-bridge) | 0 | 2026-10-31 | 2026-11-01 | 一款集成superpowers的DeepSeek Harness插件 |
| 324 | [zgq0106/dsh-agent-session-tools](https://github.com/zgq0106/dsh-agent-session-tools) | 0 | 2026-11-01 | 2026-11-01 | 给 Agent 一组能直接操作会话的工具——不用绕提示词、不用打开界面，就能从当前会话里新建一个对接会话，或把一句话塞进另一个正在跑的会话。 |
| 325 | [zhangyongshuai56-hub/dsh-token-usage](https://github.com/zhangyongshuai56-hub/dsh-token-usage) | 0 | 2026-10-31 | 2026-11-01 | DSH 插件：按模型统计每日 Token 消耗，趋势图 + 日历热力图 |
| 326 | [zhirai-tech/dsh-token-manager](https://github.com/zhirai-tech/dsh-token-manager) | 0 | 2026-11-01 | 2026-11-01 | Token cost monitoring, call-efficiency analysis and reversible tool-output caching for DeepSeek Harness. |
| 327 | [zhiwuli0228/dsh-env-manager](https://github.com/zhiwuli0228/dsh-env-manager) | 0 | 2026-11-01 | 2026-11-01 | DSH Environment Manager plugin for web and desktop. |
| 328 | [zhiwuli0228/dsh-memory-hub](https://github.com/zhiwuli0228/dsh-memory-hub) | 0 | 2026-11-01 | 2026-11-01 | Local-first, file-native long-term memory for DeepSeek Harness (DSH). npm: dsh-memory-hub |
| 329 | [zhiwuli0228/token-usage-statistic](https://github.com/zhiwuli0228/token-usage-statistic) | 0 | 2026-10-31 | 2026-11-01 | DeepSeek Harness plugin: token usage statistics for every model call, with a sidebar panel for the Desktop and Web UI. |
| 330 | [ZhiyingLi-Leo/dsh-zotero-research](https://github.com/ZhiyingLi-Leo/dsh-zotero-research) | 0 | 2026-11-01 | 2026-11-01 | Zotero research workbench for DeepSeek Harness: evidence-linked reading, research questions and conversation-to-note workflows. |
| 331 | [zhxnix/dsh-madedown](https://github.com/zhxnix/dsh-madedown) | 0 | 2026-11-01 | 2026-11-01 | WYSIWYG Markdown notes editor in the DSH right sidebar: tabs, tables, code blocks, images, chat integration, local file export, and assistant read/write tools. |
| 332 | [zou240/dsh-plugins](https://github.com/zou240/dsh-plugins) | 0 | 2026-11-01 | 2026-11-01 | DSH plugins: Rules &amp; Plans — turn a stated rule into a checkable card written into the right AGENTS.md; keep plans, a rule ledger, cross-file search and a timeline. |
| 333 | [zrrrrrrr77/dsh-breather](https://github.com/zrrrrrrr77/dsh-breather) | 0 | 2026-10-29 | 2026-11-01 | breath in meet（pause） |
| 334 | [zsenpro/DSH-Transpose-Plugin](https://github.com/zsenpro/DSH-Transpose-Plugin) | 0 | 2026-11-01 | 2026-11-01 | 为不同工作区之间的项目提供更方便的转移 |
| 335 | [zyydragon-sys/dsh-agi-federated](https://github.com/zyydragon-sys/dsh-agi-federated) | 0 | 2026-11-01 | 2026-11-01 | AGI Federated: bounded memory, deterministic compaction, evidence gate, usage monitor and federation seams for DeepSeek Harness. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 0xshawn/dsh-remote-access
- 23swccp/dsh-undo
- accomplish07zrh-eng/dsh-aurabot-qq
- Airisey/dsh-model-failover
- AkinoHaruka/companion-memory
- Alyosha28/dsh-plugin-c2c
- Britneycode/dsh-done-notify
- cuteG41cute/dsh-desktop
- Goothe13-gugu/dsh-audio-cue
- Keridium/dsh-gopeed
- LanceRingHong/dsh-mesh
- liuyuguo99/dsh-task-todo
- liyuxuan20111101/stronger-dsh
- lvy-jsd/dsh-tool-manager
- MingShi350/dsh-ikuai-mcp
- qwert702/dsh-community
- Shaky77/KISS_Law-DSH
- Shaky77/weiwen-law-dsh
- SZYTree0312/dsh-opencode-free
- T-MKT/dsh-customization-settings
- temotee2103/dsh-ci-co-pilot
- zhang66633/.dsh-plugin-installer
