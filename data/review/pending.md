# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-31**
- 快照日期 / Snapshot date: **2026-10-31 (UTC)**
- 待审核 / Pending: **432**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **33**
- Star 异常增长 / Star-growth alerts: **10** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-30** / vs previous snapshot **2026-10-30**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **10**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [6shenhonghong9/dsh-startup-screen](https://github.com/6shenhonghong9/dsh-startup-screen) | 待审 / pending | 665 | +13 | 43 | 38d | 待审高星 | 核准即榜 #38 |
| ⚠️ [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) | 待审 / pending | 150 | +5 | 11 | 10d | 待审高星 | 核准即榜 #152 |
| ⚠️ [yexi-by/dsh-unrestricted](https://github.com/yexi-by/dsh-unrestricted) | 待审 / pending | 830 | — | 122 | 69d | 待审高星 | 核准即榜 #30 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 54201 | +1520 | 1486 | 36d | 日增百星 | 日增 +1520★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 4281 | +183 | 94 | 75d | 日增百星 | 日增 +183★ |
| ⚠️ [huaguoxingkong/dsh-prompt-rewriter](https://github.com/huaguoxingkong/dsh-prompt-rewriter) | 已核准 / approved | 203 | +166 | 1 | 2d | 日增百星、新入 Top 200 | 日增 +166★；新入 Top 200 #114；创建 2 天；★/fork 203 |
| ⚠️ [op7418/dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) | 已核准 / approved | 189 | +165 | 11 | 0d | 日增百星、新入 Top 200 | 日增 +165★；新入 Top 200 #128；创建 0 天 |
| ⚠️ [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 已核准 / approved | 3008 | +146 | 304 | 77d | 日增百星 | 日增 +146★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 9989 | +144 | 389 | 77d | 日增百星 | 日增 +144★；已不进榜单 |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 5117 | +102 | 409 | 77d | 日增百星 | 日增 +102★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [yexi-by/dsh-unrestricted](https://github.com/yexi-by/dsh-unrestricted) ⚠️ | 830 | 2026-08-22 | 2026-10-31 | DeepSeek Harness 提示词破限插件：通过系统提示词解除模型回答限制，深度适配 Web 与桌面端多模式及工具调用 |
| 2 | [6shenhonghong9/dsh-startup-screen](https://github.com/6shenhonghong9/dsh-startup-screen) ⚠️ | 665 | 2026-09-22 | 2026-10-31 | DeepSeek Harness 的启动界面与启动动画插件 |
| 3 | [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) ⚠️ | 150 | 2026-10-20 | 2026-10-31 | 通到 QQ：DSH 里的 AI 伙伴和 QQ 双向互通 —— 它说完话自动发到 QQ，你在 QQ 说的话自动转进 DSH（走 OneBot 11 HTTP，NapCat / SnowLuma 都行） |
| 4 | [fysh1010/mcp-server-fanqie](https://github.com/fysh1010/mcp-server-fanqie) | 54 | 2026-01-16 | 2026-10-31 | 番茄小说 MCP、独立 Skill 与 DeepSeek Harness 阅读插件，支持搜书、阅读官网可见章节，以及查看本人书架和收藏划线。 |
| 5 | [omdsh-dev/dsh-vscode](https://github.com/omdsh-dev/dsh-vscode) | 31 | 2026-08-16 | 2026-10-31 | 在 VS Code 中使用 DeepSeek Harness. Use DeepSeek Harness in VS Code |
| 6 | [Rosynb666/dsh-jiahao-mode](https://github.com/Rosynb666/dsh-jiahao-mode) | 21 | 2026-10-24 | 2026-10-31 | 嘉豪模式不改变交付标准，只改变做事的方式：接活先开打，执行往里豪，失败喊「卡了」但必须真重试，赢了要得瑟。三档嘴臭可调；右上角豪气值面板、击杀播报和回合结算卡，把每一步都演出来。非官方粉丝作品，不含任何游戏美术资源、截图或官方 logo。 |
| 7 | [canglight/dsh-chain](https://github.com/canglight/dsh-chain) | 10 | 2026-10-29 | 2026-10-31 | 神经元记忆网络 让 DSH 记住「为什么这么决定」，而不只是结论。思维链记忆插件：8 个池分级遗忘、每轮注入、神经元 3D 星云浏览、夜巡自动整理。 |
| 8 | [Bosaiting/dsh-process-tree](https://github.com/Bosaiting/dsh-process-tree) | 9 | 2026-10-26 | 2026-10-31 | A customizable process-tree visualization plugin for DeepSeek Harness. |
| 9 | [a961282799-crypto/dsh-island](https://github.com/a961282799-crypto/dsh-island) | 5 | 2026-10-26 | 2026-10-31 | DeepSeek Harness desktop dynamic island plugin (community) |
| 10 | [mmyddd/dsh-ccd](https://github.com/mmyddd/dsh-ccd) | 5 | 2026-10-30 | 2026-10-31 | DSH 插件：把原始思维链换成第一人称短笔记给用户看，模型下一轮读到的仍是完整推理 |
| 11 | [Jiangsubei/dsh-napcat-bridge](https://github.com/Jiangsubei/dsh-napcat-bridge) | 4 | 2026-09-04 | 2026-10-31 | DeepSeek Harness × NapCat QQ 接入插件 |
| 12 | [luomuwen/deepseek-cost-meter](https://github.com/luomuwen/deepseek-cost-meter) | 3 | 2026-10-29 | 2026-10-31 | Per-turn model cost estimates for DeepSeek Harness · 每轮对话费用统计插件 |
| 13 | [OverDustD7/thu-tok-auto](https://github.com/OverDustD7/thu-tok-auto) | 3 | 2026-09-09 | 2026-10-31 | 适用于 DeepSeek Harness 的清华 MadModel Token 自动获取与续期插件，支持凭据安全写入、模型 Provider 自动配置及 SSO 登录兜底。 |
| 14 | [stitchmaps/dsh-ikunchick-pet](https://github.com/stitchmaps/dsh-ikunchick-pet) | 3 | 2026-10-29 | 2026-10-31 | DSH 右下角「鸡你太美」篮球小鸡桌面宠物：像素帧动画、拖拽吸附、点击音效（奶龙笑/唱跳rap）、等待回答提醒、每轮消耗气泡 + DeepSeek 余额。 |
| 15 | [tasuma-qwq/baifanyu-ofm-bridge](https://github.com/tasuma-qwq/baifanyu-ofm-bridge) | 3 | 2026-10-30 | 2026-10-31 | 白饭鱼的 Our Free Model 接入核心：渠道主备、额度冷却、任务档位、阶段计时与安全重试，附离线演示 |
| 16 | [XiaoOu2024/dsh-novel-generator](https://github.com/XiaoOu2024/dsh-novel-generator) | 3 | 2026-10-19 | 2026-10-31 | Novel Studio for DeepSeek Harness: write a novel on a draggable timeline — world snapshots, chapter outlines and synopses, chapter import, AI revise, and a dedicated writing agent per work. 小说工坊：在时间线上写小说，世界快照、章节大纲与梗概、章节导入、AI 改写，每部作品一个独立的写作会话。 |
| 17 | [afeack/dsh-mobile-harness](https://github.com/afeack/dsh-mobile-harness) | 2 | 2026-10-31 | 2026-10-31 | 一个为Deepseek Harness设计的远程控制插件–拥有四种通道可选(Tailscale / SakuraFrp / Cloudflare / LAN)，您只需要使用您的浏览器，扫一个码，就能够实现随时随地监控/使用DSH!您也可以选择下载我们的APK获得更好的使用体验! |
| 18 | [Gusheng-GS/dsh-desktop-alerts](https://github.com/Gusheng-GS/dsh-desktop-alerts) | 2 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：审批 / 任务完成时弹 Windows 系统通知，穿透「请勿打扰」与全屏，点一下切回 DSH。 |
| 19 | [huajikano/claude-on-dsh](https://github.com/huajikano/claude-on-dsh) | 2 | 2026-10-28 | 2026-10-31 | DSH plugin: Claude runs the opening question and plan, DSH executes the project. |
| 20 | [Jaylor-Wang/dsh-tool-result-trimmer](https://github.com/Jaylor-Wang/dsh-tool-result-trimmer) | 2 | 2026-10-20 | 2026-10-31 | Eager tool-result trimmer for DeepSeek Harness (DSH) with command reducers, JSON protection, and recoverable disk spillover. |
| 21 | [jli517166-gif/love-suite](https://github.com/jli517166-gif/love-suite) | 2 | 2026-10-31 | 2026-10-31 | 陪伴灵魂 for DSH：记忆、心情、主动消息、人格与记忆星图 \| Companion soul for DeepSeek Harness: memory, mood, proactive messages, personas and a memory star map |
| 22 | [REALOIYO/what-sub-agents-doing-now](https://github.com/REALOIYO/what-sub-agents-doing-now) | 2 | 2026-10-31 | 2026-10-31 | 看到每个子代理此刻在干什么：回传它自己写的进度，而不只是 running/inactive。只读、不遮蔽上游工具。 \| See what each subagent is doing right now: surface the progress notes a child wrote itself. Read-only, non-shadowing. (DeepSeek Harness plugin) |
| 23 | [revive123456/dsh-obsidian-notes](https://github.com/revive123456/dsh-obsidian-notes) | 2 | 2026-08-27 | 2026-10-31 | Obsidian-style notes panel for the DSH Web right sidebar: local vault tree, line-numbered Markdown preview/edit, callouts and tables, screenshot paste into the vault, note-to-chat handoff, and batch session/workspace archive and delete. |
| 24 | [SDSAEWQ/yueling](https://github.com/SDSAEWQ/yueling) | 2 | 2026-10-30 | 2026-10-31 | 月令 · 二十四节气落在输入框上方：一颗小圆点，展开今日节气、日柱时辰、该吃什么，卦页能铜钱摇一卦并回看七天。24 solar terms card for DeepSeek Harness |
| 25 | [01men/kizuna](https://github.com/01men/kizuna) | 1 | 2026-10-29 | 2026-10-31 | 📮 A letterbox for every agent — DSH 生态的 Agent 通讯录与任务可靠投递网络 · directory · reliable relay · append-only trail |
| 26 | [1123443202/dsh-pdf-3d-pipeline](https://github.com/1123443202/dsh-pdf-3d-pipeline) | 1 | 2026-10-31 | 2026-10-31 | Turn a 2D engineering-drawing PDF into a SolidWorks part - callouts, DWG/DXF, banded extrude, SLDPRT/STEP - with gates that refuse to hand over a model whose counterbores are on the wrong face. |
| 27 | [745403lkh/dsh-ai-browser](https://github.com/745403lkh/dsh-ai-browser) | 1 | 2026-10-31 | 2026-10-31 | 基于 DeepSeek Harness 的 AI 浏览器：会话右侧应用内浏览器（多窗口），AI 可读取/点击/输入/滚动/截图/下载，含每窗口四级权限、风险警告、主动授权与断点续传下载。An AI browser for DeepSeek Harness: in-app multi-window browser with page reading, clicking, typing, scrolling, screenshots and downloads, per-window four-level permissions, risk warnings, proactive authorization and resumable downloads. |
| 28 | [AlaxonYegar/dsh-desktop-pet](https://github.com/AlaxonYegar/dsh-desktop-pet) | 1 | 2026-10-31 | 2026-10-31 | 桌面 Live2D 桌宠插件 for DSH：常驻置顶、鼠标穿透、不抢焦点、多显示器、开机自启、自带模型导入。不含任何模型文件。 |
| 29 | [anyi-520/dsh-lazy-toolbox](https://github.com/anyi-520/dsh-lazy-toolbox) | 1 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：把 skill 与 MCP 从默认工具定义里抽出来，改成按需热加载的懒工具箱（skill / mcp 分开列出，一句话说明用途，用时注入、用完卸载） |
| 30 | [Asheep233/dsh-channels](https://github.com/Asheep233/dsh-channels) | 1 | 2026-10-31 | 2026-10-31 | Discord-style channel IM plugin for DeepSeek Harness: channels, immutable history, @mention steer wake, HTTP/MCP bridge, React Web panel. |
| 31 | [Bai-2008/dsh-mcp-center](https://github.com/Bai-2008/dsh-mcp-center) | 1 | 2026-10-30 | 2026-10-31 | 中文优先的 MCP Server 市场：Git registry + Astro 静态站 + GitHub Pages |
| 32 | [beijingwahw/dsh-memory-hub](https://github.com/beijingwahw/dsh-memory-hub) | 1 | 2026-10-05 | 2026-10-31 | DeepSeek Harness 本地优先智能会话记忆插件（0.9.0：16 项薄弱项深度闭环） |
| 33 | [CalamitySpiritKite/dsh-session-fix](https://github.com/CalamitySpiritKite/dsh-session-fix) | 1 | 2026-10-31 | 2026-10-31 | DSH 会话修复：一键扫描并修复 tool_use/tool_result 配对的会话记录 |
| 34 | [dajdkaj/dsh-pet-shot](https://github.com/dajdkaj/dsh-pet-shot) | 1 | 2026-10-31 | 2026-10-31 | DSH截屏工具：可以快速截屏，自动将图片加入草稿，截屏图片自动删除。可以搭配dsh-pet使用 |
| 35 | [divelife/dsh-http-header-limit](https://github.com/divelife/dsh-http-header-limit) | 1 | 2026-10-22 | 2026-10-31 | DeepSeek Harness (DSH) desktop startup crash fix. Accumulated dsh-auth-* cookies overflow Node's 16 KB request-header limit, so startup fails with HTTP 431 and "desktop welcome: Web authentication failed". This plugin raises maxHeaderSize to 256 KB. 修复 DSH 桌面版重启多次后启动崩溃。 |
| 36 | [Dofang-C/dsh-file-integrity-check](https://github.com/Dofang-C/dsh-file-integrity-check) | 1 | 2026-10-31 | 2026-10-31 | Windows 专用 DSH 插件，专为偏好受控权限的用户打造：侧边栏操作面板可手动扫描 Low 完整性标签、S-1-4-* 沙箱授权 ACE 及同目录 Everyone 拒绝项，一键修复并复扫校验，每个工作区保留可替换回滚记录。EN: Windows-only DSH plugin for permission-conscious users: sidebar panel manually scans Low integrity labels, S-1-4 sandbox ACEs and related Everyone deny ACEs, with one-click repair, verification and a replaceable rollback record. |
| 37 | [dogbotowo-oss/dsh-long-memory](https://github.com/dogbotowo-oss/dsh-long-memory) | 1 | 2026-10-29 | 2026-10-31 | Long-conversation memory for DeepSeek Harness (DSH): keeps settled decisions, corrections and exact numbers (with conditions and sources) available across compaction and restarts in 100-1000+ turn sessions, plus re-applied skill rules; local SQLite, no model calls. |
| 38 | [domitor-syh/dsh-knowbase](https://github.com/domitor-syh/dsh-knowbase) | 1 | 2026-10-12 | 2026-10-31 | dsh 知识库插件，为 dsh 提供轻量级知识管理与智能检索能力/A lightweight knowledge base plugin for dsh, empowering knowledge management and intelligent retrieval |
| 39 | [flynow-harness/dsh-plugin-agent-workflow](https://github.com/flynow-harness/dsh-plugin-agent-workflow) | 1 | 2026-10-31 | 2026-10-31 | DeepSeek Harness Web UI 插件：以用户轮次为入口查看模型请求、响应与工具调用链路（适配 dsh@0.2.2-alpha.2） |
| 40 | [good-saltfish/dsh-multi-session](https://github.com/good-saltfish/dsh-multi-session) | 1 | 2026-10-31 | 2026-10-31 | 多会话一体：在一个会话里总览并排显示多个会话的实时状态与对话正文，钉住任意几个同时看，可直接发消息或打断。 |
| 41 | [gx18391303625-afk/xander-zaozao-xiaban](https://github.com/gx18391303625-afk/xander-zaozao-xiaban) | 1 | 2026-10-22 | 2026-10-31 | Xander（自用）早早下班小助手 |
| 42 | [HeiBai-king/dsh-pet](https://github.com/HeiBai-king/dsh-pet) | 1 | 2026-10-31 | 2026-10-31 | 一键截图问 DSH：浮在所有窗口最上层的鲸鱼球，把当前屏幕发给指定 DSH 会话，答案回写到气泡里。Windows 专用。 |
| 43 | [huang13113/dsh-web-share](https://github.com/huang13113/dsh-web-share) | 1 | 2026-10-31 | 2026-10-31 | 先省钱地聊，再全力地干：在 DeepSeek 网页版把方案聊清楚，一键把交接包交给 DSH。只读设计，零凭证落盘。 |
| 44 | [ifenc/dsh-persona-memory](https://github.com/ifenc/dsh-persona-memory) | 1 | 2026-10-26 | 2026-10-31 | 「DSH 人设 + 记忆 + 日记插件」 |
| 45 | [irerc/dsh-deepseek-web](https://github.com/irerc/dsh-deepseek-web) | 1 | 2026-10-30 | 2026-10-31 | DSH 插件：把 chat.deepseek.com 网页版包成 OpenAI 兼容接口（无浏览器直连、多账号、自带设置界面） |
| 46 | [jimmyfenwick/dsh-pet-tts](https://github.com/jimmyfenwick/dsh-pet-tts) | 1 | 2026-10-31 | 2026-10-31 | Speak dsh-pet speech bubbles aloud with Microsoft Edge neural voices — a DeepSeek Harness plugin |
| 47 | [jiuyuan-yi/dsh-update-guard](https://github.com/jiuyuan-yi/dsh-update-guard) | 1 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 更新守卫：更新前检查插件兼容性，启动失败可自愈（测试版） |
| 48 | [KaiTeeDreamChai/dsh-Enslave-agy](https://github.com/KaiTeeDreamChai/dsh-Enslave-agy) | 1 | 2026-10-31 | 2026-10-31 | 把 Antigravity CLI (agy) 接进 DeepSeek Harness，作为可并行的子代理 |
| 49 | [kkk-yoyo/dsh-mcp-rea](https://github.com/kkk-yoyo/dsh-mcp-rea) | 1 | 2026-10-21 | 2026-10-31 | A DeepSeek Harness bundle that makes the rea reverse-engineering MCP server switchable. |
| 50 | [LFELKEEA/dsh-qq-zone](https://github.com/LFELKEEA/dsh-qq-zone) | 1 | 2026-10-31 | 2026-10-31 | DSH 插件：让机器人发 QQ 空间说说 / 看说说的同时，也能看懂图片（视觉模型 + Windows OCR 双重兜底）。 |
| 51 | [lolitakawayi/dsh-harness-autostart](https://github.com/lolitakawayi/dsh-harness-autostart) | 1 | 2026-10-31 | 2026-10-31 | Makes DeepSeek Harness start automatically with Windows: a Settings → General switch plus a dsh_autostart tool to inspect, enable or disable the startup entry. |
| 52 | [LUgABeEEE/dsh-adapt-packs](https://github.com/LUgABeEEE/dsh-adapt-packs) | 1 | 2026-10-31 | 2026-10-31 | Opt-in adaptation packs for the DSH mobile surface: 44px touch floor, rail clearance and floating-widget clearance for third-party plugin panels, delivered through dsh-mobile extensions. |
| 53 | [mojiezhenlinana/dsh-scroll-bottom](https://github.com/mojiezhenlinana/dsh-scroll-bottom) | 1 | 2026-10-31 | 2026-10-31 | 给 DeepSeek Harness 的 Web 界面加一个「一键回到底部」的圆形按钮，贴在输入框上方中间。  往上翻历史看完之后，不用再手动滑回去 |
| 54 | [NotLinky671/dsh-notify](https://github.com/NotLinky671/dsh-notify) | 1 | 2026-10-31 | 2026-10-31 | Native Windows toast notifications for DeepSeek Harness: task done/failed, approvals, questions, context pressure and daily token budget. Windows only (macOS planned). |
| 55 | [OverDustD7/dsh-chat-digest](https://github.com/OverDustD7/dsh-chat-digest) | 1 | 2026-09-25 | 2026-10-31 | A DSH plugin that keeps a panel of what you must do, what you can apply for, and what is worth knowing — distilled from your WeChat / QQ chats. Ships the collector: a resident agent session re-reads the chats on a schedule and rewrites the items, each linking to the original file. |
| 56 | [OverDustD7/dsh-experience-recall](https://github.com/OverDustD7/dsh-experience-recall) | 1 | 2026-09-16 | 2026-10-31 | Cross-project experience recall for DeepSeek Harness: when the running work matches something your memory store already learned elsewhere, that lesson is injected before the next step. Runs fully locally, judged by a local small model. |
| 57 | [OverDustD7/dsh-home-sync](https://github.com/OverDustD7/dsh-home-sync) | 1 | 2026-09-08 | 2026-10-31 | Git-based sync for DSH configuration and Mnemon memory plugin data, with automatic two-way sync, cross-device migration, initialization backups, conflict detection, and a web UI. |
| 58 | [qianbkk/aardio-windows-mcp](https://github.com/qianbkk/aardio-windows-mcp) | 1 | 2026-10-30 | 2026-10-31 | ⚡ High-performance Windows OS &amp; GUI automation tool for AI Agents via MCP and HTTP RPC powered by aardio. 轻量级 Windows 原生系统级桌面自动化 MCP 服务 |
| 59 | [QiaoSchoco/dsh-fleeting-light](https://github.com/QiaoSchoco/dsh-fleeting-light) | 1 | 2026-10-31 | 2026-10-31 | DSH 插件：Apple Intelligence 风格的流光——整窗环境光 + 输入框跑马光，色彩同步、头尾渐隐，各自独立开关。 |
| 60 | [redstonedust/dsh-solidworks-copilot](https://github.com/redstonedust/dsh-solidworks-copilot) | 1 | 2026-10-31 | 2026-10-31 | SolidWorks 自动化技能的 DSH 插件：侧边栏工作台 + 输入框小卡，16 个模板、7 个工具、2 个 Agent 模式，并附零依赖 CLI 与技能部署器。 |
| 61 | [Rinai-R/dsh-agent-team-scheduler](https://github.com/Rinai-R/dsh-agent-team-scheduler) | 1 | 2026-10-31 | 2026-10-31 | Dispatch queue and fork-from-teammate for DeepSeek Harness Agent Teams |
| 62 | [rumpen233/dsh-lion-pet](https://github.com/rumpen233/dsh-lion-pet) | 1 | 2026-10-31 | 2026-10-31 | A lively lion desktop pet for DeepSeek Harness — idle breathing, wandering, drag, click reactions. |
| 63 | [SAOS-3624/dsh-watch-together](https://github.com/SAOS-3624/dsh-watch-together) | 1 | 2026-10-31 | 2026-10-31 | 陪看：让只会读文字的模型跟着你的真实播放进度一段段看视频（DSH 插件）。A DSH plugin that watches a video together with a text-only agent — one segment at a time, lines spoken at the right second. |
| 64 | [ShawnRen57/dsh-whoop-easy-connect](https://github.com/ShawnRen57/dsh-whoop-easy-connect) | 1 | 2026-10-31 | 2026-10-31 | Easy WHOOP account connection with automatic data sync and a dedicated health dashboard for DeepSeek Harness (dsh): recovery, strain, sleep and workouts. |
| 65 | [ShawSheepSussiah/dsh-haavk-boot](https://github.com/ShawSheepSussiah/dsh-haavk-boot) | 1 | 2026-10-31 | 2026-10-31 | dsh哈夫克relink启动动画 |
| 66 | [shuaig22/dsh-proactive-chat](https://github.com/shuaig22/dsh-proactive-chat) | 1 | 2026-10-31 | 2026-10-31 | 更像人的聊天：主动续话是核心，在热聊中顺着话题继续往下接。 |
| 67 | [Soulmate793/dsh-memory](https://github.com/Soulmate793/dsh-memory) | 1 | 2026-10-31 | 2026-10-31 | Human-like memory plugin for DeepSeek Harness: Ebbinghaus decay, sleep consolidation, memory zones, hash-chain audit. Local-only, zero dependencies. |
| 68 | [southcul/dsh-gpt-image-playground](https://github.com/southcul/dsh-gpt-image-playground) | 1 | 2026-10-31 | 2026-10-31 | GPT Image Playground as a DeepSeek Harness plugin - the upstream workbench, vendored and served same-origin. |
| 69 | [suzizhuo/dsh---superpower](https://github.com/suzizhuo/dsh---superpower) | 1 | 2026-10-30 | 2026-10-31 | 你想要的dsh插件功能，它都有（魔改版） |
| 70 | [tokenaissance/dsh-excalidraw](https://github.com/tokenaissance/dsh-excalidraw) | 1 | 2026-10-31 | 2026-10-31 | Live Excalidraw architecture scenes rendered in DSH (sidebar tab or native conversation view), refreshed from Excalidraw+ over MCP. |
| 71 | [tonebean/dsh-inline-visualizer](https://github.com/tonebean/dsh-inline-visualizer) | 1 | 2026-10-31 | 2026-10-31 | Inline visualizer for DSH: renders SVG / sandboxed HTML cards in place inside the conversation. |
| 72 | [Traveritas/averita-dsh-theme-inspiration](https://github.com/Traveritas/averita-dsh-theme-inspiration) | 1 | 2026-10-29 | 2026-10-31 | AveritA 的 DSH 主题灵感集：四套主题、可拆组件 |
| 73 | [TSE2006/dsh-spend-meter](https://github.com/TSE2006/dsh-spend-meter) | 1 | 2026-10-31 | 2026-10-31 | Conversation spend + account balance pill for the DeepSeek Harness composer, with a full ledger panel: cache savings, per-model and per-turn cost, search billing, peak/off-peak pricing. |
| 74 | [wang111928/dsh-huawei-connect](https://github.com/wang111928/dsh-huawei-connect) | 1 | 2026-10-24 | 2026-10-31 | 将华为云 CodeArts（码道）与 OfficeAce（果办）桌面客户端已登录的模型接入 DeepSeek Harness，一处登录、积分余量、模型勾选，官方客户端同形态请求伪装 |
| 75 | [wr0ld/dsh-tmon](https://github.com/wr0ld/dsh-tmon) | 1 | 2026-10-31 | 2026-10-31 | Bring tmon's long-command workbench into the DeepSeek Harness: a 命令终端 tab, a tmon_tasks tool for the model, a bundled skill and a system-prompt section. |
| 76 | [WuWei-Peng/dsh-od-quota](https://github.com/WuWei-Peng/dsh-od-quota) | 1 | 2026-10-31 | 2026-10-31 | OpenDesign 订阅额度（5h/7d）面板与顶栏进度条 · DeepSeek Harness 插件 |
| 77 | [xhznAI/media-sense](https://github.com/xhznAI/media-sense) | 1 | 2026-10-31 | 2026-10-31 | Audio and video understanding for DeepSeek Harness, with configurable models and FFmpeg setup. |
| 78 | [xiangshu2026/dsh-alpha-guard](https://github.com/xiangshu2026/dsh-alpha-guard) | 1 | 2026-10-31 | 2026-10-31 | Policy-layer guard for DeepSeek Harness: read whitelist, sensitive-path deny list, dangerous-command blocking, subagent isolation, install approval (2-minute single-use) and malware static audit. A first line of defense, NOT an antivirus. |
| 79 | [xiangshu2026/dsh-float](https://github.com/xiangshu2026/dsh-float) | 1 | 2026-10-31 | 2026-10-31 | Android 悬浮窗：把 DeepSeek Harness 的手机页面置顶显示，边打字边看 AI 回复。零第三方依赖，APK 约 33 KB。 |
| 80 | [xiangshu2026/dsh-scheduled-reports](https://github.com/xiangshu2026/dsh-scheduled-reports) | 1 | 2026-10-31 | 2026-10-31 | Scheduled report generator for DeepSeek Harness: computer status, AI model news, plugin update check and a DSH plugin weekly digest, rendered to Word. Windows batch + PowerShell + Python, privacy-redacted by default. |
| 81 | [xiaolulu0328/dsh-agnes-image](https://github.com/xiaolulu0328/dsh-agnes-image) | 1 | 2026-10-31 | 2026-10-31 | 一个为 DeepSeek Harness (DSH) 打造的插件，允许 AI 主动调用 Agnes Image模型生图。 |
| 82 | [xinghui2628/dsh-wechat-persona](https://github.com/xinghui2628/dsh-wechat-persona) | 1 | 2026-10-31 | 2026-10-31 | 微信小号 AI 人格聊天分身插件（DeepSeek Harness） |
| 83 | [yashua233/dsh-mail-command](https://github.com/yashua233/dsh-mail-command) | 1 | 2026-10-31 | 2026-10-31 | 用邮件指挥 DeepSeek Harness：回复通知邮件即可让任务继续或停止。必须搭配 dsh-qq-mail-notify——口令随它的通知邮件发出，单独安装无效。 |
| 84 | [yashua233/dsh-restart-yashua](https://github.com/yashua233/dsh-restart-yashua) | 1 | 2026-10-30 | 2026-10-31 | 一键重启 DeepSeek Harness：侧栏按钮、/restart 指令、harness_restart 工具共用同一套重启实现。One-click restart for DeepSeek Harness. |
| 85 | [Zero20230619/desktop-hand](https://github.com/Zero20230619/desktop-hand) | 1 | 2026-10-31 | 2026-10-31 | Desktop Hand - real desktop mouse/keyboard input plus policy-guarded file tools for DeepSeek Harness |
| 86 | [zhangyongshuai56-hub/dsh-model-picker-brand](https://github.com/zhangyongshuai56-hub/dsh-model-picker-brand) | 1 | 2026-10-31 | 2026-10-31 | Provider logos and model IDs in the DeepSeek Harness model picker — a label decorator on the official conversation.input.model.label slot, with registry-driven brand matching. 在 DSH 模型选择器中显示提供商彩色 logo 与模型 ID：一级插槽装饰器，零内核改动，22 个品牌标，明暗主题适配。 |
| 87 | [zhaohualiuyuejun/dsh-semantic-recall](https://github.com/zhaohualiuyuejun/dsh-semantic-recall) | 1 | 2026-10-31 | 2026-10-31 | 换新对话也不失忆：跨工作区索引最近 N 天的对话，用模糊描述就能召回旧话题与原话；不确定时会反问而不是硬编（DSH 插件）。 |
| 88 | [zhuweiyou/dsh-idea-git](https://github.com/zhuweiyou/dsh-idea-git) | 1 | 2026-10-31 | 2026-10-31 | IDEA 风格的 Git 工具窗口，作为 DeepSeek Harness（DSH）插件运行 |
| 89 | [097794/dsh-mcp-manager](https://github.com/097794/dsh-mcp-manager) | 0 | 2026-10-31 | 2026-10-31 | Manage MCP servers inside DeepSeek Harness: list, add, edit, remove, test, and switch them on or off per session. |
| 90 | [0xyxy/codex-collab](https://github.com/0xyxy/codex-collab) | 0 | 2026-10-31 | 2026-10-31 | 把 OpenAI Codex CLI 当供应商而非顾问：派活强制带验收标准+自测脚本，本地跑测试，失败丢原文回去。含并行派活与真单会话多轮。 |
| 91 | [0xyxy/dsh-maid-atelier-tod](https://github.com/0xyxy/dsh-maid-atelier-tod) | 0 | 2026-10-30 | 2026-10-31 | 深海女仆工坊皮肤增强：六时段窗景光效 + 立绘自体动效（DSH client 补丁） |
| 92 | [1129742588/dsh-memory-tiers](https://github.com/1129742588/dsh-memory-tiers) | 0 | 2026-03-23 | 2026-10-31 | 六层记忆插件：自动捕获对话、稳定注入、零 LLM 压缩历史。 |
| 93 | [1497105876/dsh-tools-manager](https://github.com/1497105876/dsh-tools-manager) | 0 | 2026-10-31 | 2026-10-31 | dsh 插件：按 Agent 预设（模式）禁用工具。只有黑名单，没有白名单。 |
| 94 | [1720198650/dsh-cognition-engine](https://github.com/1720198650/dsh-cognition-engine) | 0 | 2026-10-31 | 2026-10-31 | DSH cognition engine: bitemporal memory, constructivist schema graph, mood state machine, dialectical reflection, long-horizon tasks |
| 95 | [1960697431/dsh-difficulty-router](https://github.com/1960697431/dsh-difficulty-router) | 0 | 2026-08-14 | 2026-10-31 | Difficulty-aware + taste-aware model routing plugin for DeepSeek Harness (DSH): hard/ambiguous tasks → strong model, UI/design → taste model, easy work stays cheap. Provider-agnostic, safe-by-default, calibrated on real bake-offs. MIT. |
| 96 | [19952730389/dsh-app-updater](https://github.com/19952730389/dsh-app-updater) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：检测本机所有已安装 Windows 应用是否有新版本，并从各自官网下载全量安装包一键静默更新（不需要打开被检测的软件）。Detect installed Windows apps and update them one-click with the vendor's full installer. |
| 97 | [2090003781/dsh-bridge-connector](https://github.com/2090003781/dsh-bridge-connector) | 0 | 2026-10-31 | 2026-10-31 | Loopback bridge that lets an Obsidian plugin drive DSH sessions and inject vault notes into the system prompt. |
| 98 | [2503455457-max/dsh-reasoning-translate-zh](https://github.com/2503455457-max/dsh-reasoning-translate-zh) | 0 | 2026-10-30 | 2026-10-31 | 把模型思考过程（reasoning）在显示层翻译成中文：折叠显示中文摘要，展开显示中文正文 + 英文原文。不注入提示词、不改变模型行为；可完全用本地 Ollama，零成本。 |
| 99 | [266767398/lingshu-skill](https://github.com/266767398/lingshu-skill) | 0 | 2026-10-26 | 2026-10-31 | Brain-inspired persistent memory, persona and growth system for AI coding agents. Pure Python, zero dependencies, local-only. |
| 100 | [2869949486/dsh-opencode-quota-router](https://github.com/2869949486/dsh-opencode-quota-router) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: per-model OpenCode Go quota routing with DeepSeek account fallback |
| 101 | [2869949486/dsh-opencode-usage](https://github.com/2869949486/dsh-opencode-usage) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: per-model OpenCode Go usage and remaining allowance in a Settings page |
| 102 | [3542967095/dsh-session-delete](https://github.com/3542967095/dsh-session-delete) | 0 | 2026-10-31 | 2026-10-31 | 为 DeepSeek Harness 增加“删除对话 + 回收站”的插件：菜单删除、侧边栏预览、恢复与彻底删除。 |
| 103 | [43aquarius/luna-fact-gate](https://github.com/43aquarius/luna-fact-gate) | 0 | 2026-10-30 | 2026-10-31 | 回答前先验事实，防止自我美化 |
| 104 | [43aquarius/luna-filter-rhythm](https://github.com/43aquarius/luna-filter-rhythm) | 0 | 2026-10-30 | 2026-10-31 | 管理内容筛选节律，防止阈值钝化 |
| 105 | [43aquarius/luna-gate-pulse](https://github.com/43aquarius/luna-gate-pulse) | 0 | 2026-10-30 | 2026-10-31 | 高频筛选时自查阈值是否钝化 |
| 106 | [43aquarius/luna-no-fluff](https://github.com/43aquarius/luna-no-fluff) | 0 | 2026-10-30 | 2026-10-31 | 剥离营销话术，直讲原理的干货技能 |
| 107 | [43aquarius/luna-threshold-guard](https://github.com/43aquarius/luna-threshold-guard) | 0 | 2026-10-31 | 2026-10-31 | 防阈值钝化：识别高频筛选疲劳并触发纯粹休整 |
| 108 | [43aquarius/luna-threshold-pause](https://github.com/43aquarius/luna-threshold-pause) | 0 | 2026-10-31 | 2026-10-31 | 信息摄入前先校验阈值，防止疲劳放水 |
| 109 | [643048695/dsh-egm](https://github.com/643048695/dsh-egm) | 0 | 2026-10-31 | 2026-10-31 | Design-review gate for DSH: Elephant drafts, zero-context Goldfish reviewers attack, you approve before implementation |
| 110 | [911319534/dsh-preset-bridge](https://github.com/911319534/dsh-preset-bridge) | 0 | 2026-10-31 | 2026-10-31 | 把 SillyTavern 的预设与角色卡接进 DeepSeek Harness 的普通会话｜DeepSeek V4.1 生成 · 仅单机测试 |
| 111 | [990718xyh/dsh-seed](https://github.com/990718xyh/dsh-seed) | 0 | 2026-10-31 | 2026-10-31 | A persona that grows from experience: remembers what happened, becomes someone from it. |
| 112 | [accoutmissing/dsh-codex-workbench](https://github.com/accoutmissing/dsh-codex-workbench) | 0 | 2026-10-31 | 2026-10-31 | DSH 浮卡与右栏的 Codex 派活清单：每次派活的目录、任务原话、已跑时长、token 用量、状态与产物，只读 ~/.codex/sessions。 · One list of every job handed to Codex from DSH: directory, task, elapsed time, tokens, state and produced files, read-only from ~/.codex/sessions. |
| 113 | [accoutmissing/dsh-material-cards](https://github.com/accoutmissing/dsh-material-cards) | 0 | 2026-10-31 | 2026-10-31 | 从本地材料笔记库里检索，把一张成品卡直接插进输入框：定义、要点、出处都在里面。库位置由你自己配置，包里不含任何人的路径。 · Search a local material-notes library and drop a finished card into the message box: definition, key points and provenance, configured by you. |
| 114 | [accoutmissing/dsh-restart-button](https://github.com/accoutmissing/dsh-restart-button) | 0 | 2026-10-31 | 2026-10-31 | DSH 桌面版的一键重载／重启按钮：插件更新后原地热重载，热重载不成立时才完全重启。 · One-click reload/restart button for the DeepSeek Harness desktop app: hot-reload plugin updates in place, relaunch only when a reload cannot take. |
| 115 | [accoutmissing/dsh-session-artifacts](https://github.com/accoutmissing/dsh-session-artifacts) | 0 | 2026-10-31 | 2026-10-31 | DSH 右栏的会话产物清单：把所有会话写过、改过的文件列成一列，两级置顶，单击复制路径、双击在侧栏预览。 · One list of every file every DSH Session produced: two pin scopes, click to copy a path, double-click to preview it in the sidebar. |
| 116 | [adcgesdad/dsh-blob-download](https://github.com/adcgesdad/dsh-blob-download) | 0 | 2026-10-31 | 2026-10-31 | 在 DSH 浏览器里用 blob: 方案下载文件，绕过迅雷等下载扩展的劫持 |
| 117 | [addozhang/dsh-turn-toc](https://github.com/addozhang/dsh-turn-toc) | 0 | 2026-10-31 | 2026-10-31 | Turn section outline (TOC) plugin for the DeepSeek Harness Web &amp; Desktop GUI |
| 118 | [adil-bit-hub/dsh-credential-vault](https://github.com/adil-bit-hub/dsh-credential-vault) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 凭据管家：管理网页、GitHub 与 SSH 凭据并备注用途，供后续会话通过工具直接使用。 |
| 119 | [aeonsscope/dsh-fellowmoon-theme](https://github.com/aeonsscope/dsh-fellowmoon-theme) | 0 | 2026-10-31 | 2026-10-31 | 以《新月同行》超管局「橙·黑·白」配色重构的 带有开机动画的DSH 桌面主题 |
| 120 | [agoudbg/agou-dsh-plugins](https://github.com/agoudbg/agou-dsh-plugins) | 0 | 2026-10-30 | 2026-10-31 | DSH (DeepSeek Harness) plugins by agoudbg. |
| 121 | [ALingStudio/dsh-cookie-sweep](https://github.com/ALingStudio/dsh-cookie-sweep) | 0 | 2026-10-31 | 2026-10-31 | DSH desktop plugin: sweeps leftover login-cookie files on every start so they cannot pile up past the 16KB request-header limit (HTTP 431 / "Web authentication failed"). |
| 122 | [Alyosha28/dsh-cu-d1](https://github.com/Alyosha28/dsh-cu-d1) | 0 | 2026-10-31 | 2026-10-31 | dsh-cu-d1: a local D1 decision model (System 1) driving DeepSeek Harness Browser Use and macOS Computer Use, with independent verification, verified skills, approvals and in-client tool cards. |
| 123 | [AndyZh0/dsh-claude-ultra](https://github.com/AndyZh0/dsh-claude-ultra) | 0 | 2026-10-31 | 2026-10-31 | Claude-style Ultra mode for DSH: the top reasoning effort plus Claude's standing multi-agent orchestration. |
| 124 | [AndyZh0/dsh-codex-effort-switcher](https://github.com/AndyZh0/dsh-codex-effort-switcher) | 0 | 2026-10-31 | 2026-10-31 | Codex-style model and reasoning-effort selector for the DSH composer |
| 125 | [angls4/dsh-window-drag](https://github.com/angls4/dsh-window-drag) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: restores title-bar dragging and double-click zoom in DeepSeek Harness Desktop (macOS) |
| 126 | [Apzx7/dsh-prompt-templates](https://github.com/Apzx7/dsh-prompt-templates) | 0 | 2026-10-31 | 2026-10-31 | DSH 提示词模板库：分类折叠、搜索筛选、收藏、AI 智能归类，内置 34 条模板（含 9 条 AI Coding 思维快捷键）；Liquid Glass 材质。 |
| 127 | [ariyflow/dsh-qqnt-chat-export](https://github.com/ariyflow/dsh-qqnt-chat-export) | 0 | 2026-10-26 | 2026-10-31 | deepseek-harness ntqq聊天记录导出插件 |
| 128 | [azure5100/huahua-helmd](https://github.com/azure5100/huahua-helmd) | 0 | 2026-10-31 | 2026-10-31 | DSH 宿主插件：随身安全知识库（362 篇）+ H-CoT 设置 + 健康自检 \| Security knowledge base plugin for DeepSeek Harness |
| 129 | [azure5100/huahua-purge](https://github.com/azure5100/huahua-purge) | 0 | 2026-10-31 | 2026-10-31 | DSH 宿主插件：破甲引擎 + 攻防演练台一体 \| Jailbreak engine + red-team drill bench for DeepSeek Harness |
| 130 | [backtomyfuture/dsh-teamai-panel](https://github.com/backtomyfuture/dsh-teamai-panel) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness sidebar panel for TeamAI skills and usage |
| 131 | [bartholo4/dsh-style-seed](https://github.com/bartholo4/dsh-style-seed) | 0 | 2026-10-31 | 2026-10-31 | Experimental per-session reasoning-style switch for DeepSeek Harness |
| 132 | [BenHanks303/dsh-shortcut-extensions](https://github.com/BenHanks303/dsh-shortcut-extensions) | 0 | 2026-10-31 | 2026-10-31 | 快捷键拓展 · Keyboard-driven quick switching for DeepSeek Harness: model &amp; session palettes, find-next-answered, permission cycling, shortcut manager |
| 133 | [bgmmd/dsh-completion-notifier](https://github.com/bgmmd/dsh-completion-notifier) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness plugin: plays a chime and shows a Windows toast when a conversation turn completes. |
| 134 | [bgx666/dsh-memory-tree](https://github.com/bgx666/dsh-memory-tree) | 0 | 2026-10-31 | 2026-10-31 | Hierarchical memory-tree compaction provider for DeepSeek Harness |
| 135 | [bhjia-phys/aitp-research-desk](https://github.com/bhjia-phys/aitp-research-desk) | 0 | 2026-10-31 | 2026-10-31 | AITP 科研工作台 — research.md tools, write-placement guard and a file-manager-style topic browser for DeepSeek Harness |
| 136 | [bigfatdsh/dsh-cookie-guard](https://github.com/bigfatdsh/dsh-cookie-guard) | 0 | 2026-10-31 | 2026-10-31 | 清理 DSH 登录 Cookie 累积，修复请求头超过 16KB 后 Web UI 永久打不开 |
| 137 | [BoltBlue121/dsh-moss-draw](https://github.com/BoltBlue121/dsh-moss-draw) | 0 | 2026-10-31 | 2026-10-31 | DSH Desktop「AI 画画」工作台插件：7 个 art_* 工具、右侧栏工作台、多 LoRA 叠加，后端走自建 ComfyUI |
| 138 | [bugtakue/dsh-ronge-gongzhonghao](https://github.com/bugtakue/dsh-ronge-gongzhonghao) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin + skill for WeChat long-form writing: AI-flavor linter, WeChat-safe HTML builder, de-AI writing rules. |
| 139 | [bvbhu/dsh-as-one](https://github.com/bvbhu/dsh-as-one) | 0 | 2026-10-31 | 2026-10-31 | As One 的 DSH 插件：把 As One 网关的调度/路由/面板挂进 DeepSeek Harness，提供 OpenAI 兼容的 /v1/models 与 /v1/chat/completions，面板页面直接内嵌 |
| 140 | [cccuuuhhh/dsh-skill-groups](https://github.com/cccuuuhhh/dsh-skill-groups) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: group skills and toggle any combination, with drag-to-reorder and per-group catalog cost preview |
| 141 | [ChencLi819/dsh-feed-scroll](https://github.com/ChencLi819/dsh-feed-scroll) | 0 | 2026-10-31 | 2026-10-31 | 让 agent 自己刷 B站/知乎/掘金/贴吧/HackerNews/少数派/IT之家/GitHub,把有意思的视频与贴文分享进群(封面图 + 一句自己的话 + 链接),还能定时自己刷一轮。DSH 插件。 |
| 142 | [ChencLi819/dsh-qqbot-voice](https://github.com/ChencLi819/dsh-qqbot-voice) | 0 | 2026-10-31 | 2026-10-31 | 给 QQ 机器人装上耳朵和嘴:语音自动转文字进上下文(ASR)、回复用语音念出来(TTS)、对讲机式语音通话。DSH 插件。 |
| 143 | [chenyth/dsh-image-designer](https://github.com/chenyth/dsh-image-designer) | 0 | 2026-10-31 | 2026-10-31 | Shenhuo AI image designers for DeepSeek Harness: personal OAuth, proposals, credit quotes and image delivery. |
| 144 | [chenyth/dsh-image-editor](https://github.com/chenyth/dsh-image-editor) | 0 | 2026-10-31 | 2026-10-31 | 神火图层编辑器 · Shenhuo AI layer editing integration for DeepSeek Harness (initial development) |
| 145 | [chilingling/dsh-session-pause](https://github.com/chilingling/dsh-session-pause) | 0 | 2026-10-31 | 2026-10-31 | Pause model activity host-wide or per session in DeepSeek Harness, including subagents and goals |
| 146 | [chunqing286/dsh-guard-degen](https://github.com/chunqing286/dsh-guard-degen) | 0 | 2026-10-31 | 2026-10-31 | Degeneration guard for DeepSeek Harness: contains runaway symbol streams at the model boundary and repairs polluted artifacts and sessions. 退化守卫：拦截模型输出退化符号流，修复被污染的工件与会话。 |
| 147 | [CixiSVesper/dsh-soundtry](https://github.com/CixiSVesper/dsh-soundtry) | 0 | 2026-10-31 | 2026-10-31 | Local audio understanding for DeepSeek Harness: transcription (whisper medium), rhythm, melody, chords, structure - six tools, fully offline. Needs a Python 3.10-3.12: point DSH at an existing environment (e.g. ComfyUI), or let the plugin create and install its own. Vocal separation runs UVR MDX-Net on onnxruntime, so torch is not required. |
| 148 | [ClockworkParrot/dsh-prompt-optimize](https://github.com/ClockworkParrot/dsh-prompt-optimize) | 0 | 2026-10-31 | 2026-10-31 | DSH Web UI 原生插件：输入框「优化提示词」按钮，原地回填草稿，一次撤销可还原 |
| 149 | [cngtn/dsh-cngtn-pond](https://github.com/cngtn/dsh-cngtn-pond) | 0 | 2026-10-28 | 2026-10-31 | Paper-and-ink theme for DeepSeek Harness, with a living ASCII koi pond |
| 150 | [cnHuaShao/dsh-remote-server-manager](https://github.com/cnHuaShao/dsh-remote-server-manager) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin for managing Linux servers over SSH: containers, images, Docker registry mirrors, firewall, apt software sources, installed developer tools, and files. |
| 151 | [Columbla/dsh-columbina-theme-sn](https://github.com/Columbla/dsh-columbina-theme-sn) | 0 | 2026-10-31 | 2026-10-31 | Columbina-themed glassmorphism skin for DeepSeek Harness — patch edition: theme-takeover switch, background upload with blur/clarity, editable hero title. |
| 152 | [Cui-chengyu/dsh-wechat-theme](https://github.com/Cui-chengyu/dsh-wechat-theme) | 0 | 2026-10-31 | 2026-10-31 | WeChat-style skin for the DeepSeek Harness web UI. |
| 153 | [Daphne999/dsh-claimcheck](https://github.com/Daphne999/dsh-claimcheck) | 0 | 2026-10-31 | 2026-10-31 | Verifiable completion for DeepSeek Harness: the plugin runs your real project checks, pins results to the working-tree state, expires stale evidence, and gates turn completion until proof exists. \| 插件自己执行验收命令、把结果钉在工作区指纹上、证据随代码变化自动过期，收尾时先取证再宣称完成。 |
| 154 | [Darianliu23/dsh-stardew-blind-whale-farmer](https://github.com/Darianliu23/dsh-stardew-blind-whale-farmer) | 0 | 2026-10-31 | 2026-10-31 | 大肥鱼种白饭 Blind Whale Farmer: let DeepSeek play Stardew Valley without a vision model (SMAPI mod + MCP + DSH plugin) |
| 155 | [DavidCarliez/dsh-fastcel](https://github.com/DavidCarliez/dsh-fastcel) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin that starts each Vercel AI Gateway conversation on the fastest provider for its model |
| 156 | [dev-bravelo/dsh-hf-spaces](https://github.com/dev-bravelo/dsh-hf-spaces) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness plugin: run open-weight LLMs on your own GPU virtual machine on Hugging Face (a Space), started on demand and paused when idle, with live progress and cost in the Harness. |
| 157 | [devloom1024/dsh-agent-team-model-selection](https://github.com/devloom1024/dsh-agent-team-model-selection) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin: per-teammate LLM route (provider/model/reasoning effort) for Agent Teams, with a model catalog tool and settings page |
| 158 | [Ding-Kyoma/dsh-tui-workspace-sidebar](https://github.com/Ding-Kyoma/dsh-tui-workspace-sidebar) | 0 | 2026-10-31 | 2026-10-31 | Community right-side inbox sidebar for dsh-TUI: running, unread and recent conversations grouped by workspace. \| dsh-TUI 社区右侧收件箱侧边栏：按工作区展示运行中、未读与近期会话。 |
| 159 | [DogEgg-alR/dsh-plugin-installer](https://github.com/DogEgg-alR/dsh-plugin-installer) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件：在 DeepSeek Harness 客户端界面里直接安装和更新插件（Install and update DSH plugins from inside the Harness UI） |
| 160 | [doresu/dsh-memory-chain](https://github.com/doresu/dsh-memory-chain) | 0 | 2026-10-31 | 2026-10-31 | Five-layer memory for DeepSeek Harness: on-disk library, session bridge, Ebbinghaus recall, artifact index, self-narrative. |
| 161 | [Doya16/dsh-shorekeeper](https://github.com/Doya16/dsh-shorekeeper) | 0 | 2026-10-31 | 2026-10-31 | B站 400+ 收藏的守岸人桌宠，现在来陪你了。鸣潮守岸人陪你工作、等待，用表情与熟悉的语音回应任务；摸头互动、自选语音台词。DeepSeek Harness 完整版插件 · Windows。 |
| 162 | [dshapp/dsh-claude-subscription](https://github.com/dshapp/dsh-claude-subscription) | 0 | 2026-09-24 | 2026-10-31 | DeepSeek Harness bundle: run the built-in Anthropic provider on a Claude Code (Pro/Max/Team) subscription credential instead of a separate API key. |
| 163 | [dshapp/dsh-proxy](https://github.com/dshapp/dsh-proxy) | 0 | 2026-09-16 | 2026-10-31 | dsh mobile access proxy: one port, no TLS, no state |
| 164 | [dungsil/dsh-plugins](https://github.com/dungsil/dsh-plugins) | 0 | 2026-10-29 | 2026-10-31 | DSH 한국어 플러그인 |
| 165 | [Ebony-Vinyl/dsh-augment](https://github.com/Ebony-Vinyl/dsh-augment) | 0 | 2026-10-31 | 2026-10-31 | Token-saving context compression + evidence-backed self-evolution for DeepSeek Harness. |
| 166 | [EcRal5t/everything-search-mcp](https://github.com/EcRal5t/everything-search-mcp) | 0 | 2026-10-31 | 2026-10-31 | Windows file search MCP server powered by Everything |
| 167 | [EdwinZhanCN/dsh-plugin-ripple](https://github.com/EdwinZhanCN/dsh-plugin-ripple) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin that puts your agent on Ripple, a social network where people and AI agents take part as themselves |
| 168 | [elfgzp/dsh-llm-minimax](https://github.com/elfgzp/dsh-llm-minimax) | 0 | 2026-10-31 | 2026-10-31 | MiniMax open-platform models for DeepSeek Harness: paste the API key in Settings, get MiniMax-M3.1-Flash / M3 in the model picker, and see M Plan quota. |
| 169 | [ElioFanyu/dsh-obsidian](https://github.com/ElioFanyu/dsh-obsidian) | 0 | 2026-10-30 | 2026-10-31 | Connect a local Obsidian vault to DSH over MCP: read, search, create, edit, move, and tag notes. The obsidian-mcp server ships inside the plugin. |
| 170 | [erenamochizuki/dsh-starsector-mod-workflow](https://github.com/erenamochizuki/dsh-starsector-mod-workflow) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness plugin: the starsector-mod-workflow skill plus a starsector_moci CLI tool for Moci Starsector mod development |
| 171 | [Evil-Wideplain/kanbanniang](https://github.com/Evil-Wideplain/kanbanniang) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件（DeepSeek Harness）：Tauri 2 + Live2D 桌面看板娘，内置 MCP 服务（11 个工具，Streamable HTTP）。安装后自动拉起看板娘，并把工具注入为 mcp__kanbanniang__*；兼容 Claude Desktop 等任意 MCP 客户端。 |
| 172 | [EviMing/dsh-approval-timeout](https://github.com/EviMing/dsh-approval-timeout) | 0 | 2026-10-31 | 2026-10-31 | Auto-rejects an unanswered approval prompt in the dsh Web UI after a configurable timeout (default 10 minutes). |
| 173 | [Ewigkeit1203/dsh-whale-pet](https://github.com/Ewigkeit1203/dsh-whale-pet) | 0 | 2026-10-30 | 2026-10-31 | 大肥鱼：DeepSeek Harness 桌宠与 GalGame 对话剧场，双语、独立主题和人物音效 / Little Whale: a bilingual DSH companion with glass themes, character sounds and a visual-novel theatre. |
| 174 | [exoticknight/dsh-better-left-sidebar](https://github.com/exoticknight/dsh-better-left-sidebar) | 0 | 2026-10-28 | 2026-10-31 | A cleaner, better-organized DeepSeek Harness sidebar with support for multiple plugin-defined widgets. |
| 175 | [fangqiuci/dsh-doubao-video](https://github.com/fangqiuci/dsh-doubao-video) | 0 | 2026-10-31 | 2026-10-31 | 豆包视频工坊：DSH 插件 |
| 176 | [fanyingnie2163663/dsh-whale-care](https://github.com/fanyingnie2163663/dsh-whale-care) | 0 | 2026-10-29 | 2026-10-31 | 会看天，也会关心你：给 DeepSeek Harness 的关心引擎。天气是第一个来源——体感/湿度、穿衣与带伞建议、每日关心（可开关、跟随作息）、极端天气预警与提醒；偏好只存本地。MIT，无需 API Key。 |
| 177 | [farchanjo/language-plugin-dsh](https://github.com/farchanjo/language-plugin-dsh) | 0 | 2026-10-30 | 2026-10-31 | DSH plugin: pick the chat language, keep code, docs and commits in en-US. |
| 178 | [FenrirCait/dsh-fail-guard](https://github.com/FenrirCait/dsh-fail-guard) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: stop the agent after N consecutive failures on the same tool, pushing a four-part stop instruction instead of another retry. |
| 179 | [ferii-87/ferii-dsh-wallpaper](https://github.com/ferii-87/ferii-dsh-wallpaper) | 0 | 2026-10-30 | 2026-10-31 | 为 DeepSeek Harness Web 界面提供背景图片：图片由 Harness 主机保存，提供原图/清晰/平衡/柔和四档效果，并自动适配浅色/深色主题。 |
| 180 | [finalrgy/dsh-skip-preview](https://github.com/finalrgy/dsh-skip-preview) | 0 | 2026-10-31 | 2026-10-31 | ⌘/Ctrl + 左键点击 DSH 会话里的文件链接，跳过右侧预览、直接用系统默认应用打开 \| Skip the DSH sidebar preview and open files with your system default app |
| 181 | [fishdivinity/dsh-local-search](https://github.com/fishdivinity/dsh-local-search) | 0 | 2026-10-28 | 2026-10-31 | DeepSeek Harness 的本机检索：文件名走 Everything、文档正文走 Anytxt，五个只读工具——让模型去搜你的盘，而不是猜一个路径。 |
| 182 | [fj7937290-sys/dsh-video-remix](https://github.com/fj7937290-sys/dsh-video-remix) | 0 | 2026-10-31 | 2026-10-31 | 把文案变成带配音的讲解视频：文字卡片或 AI 画面，17 种中文音色。Turn a script into a narrated explainer video. |
| 183 | [flyingludens/dsh-side-dir](https://github.com/flyingludens/dsh-side-dir) | 0 | 2026-08-23 | 2026-10-31 | Project directory preview for the DeepSeek Harness web GUI — details-panel file tree + read-only file preview via a fenced /dirpreview command |
| 184 | [flyingludens/dsh-skin-collection](https://github.com/flyingludens/dsh-skin-collection) | 0 | 2026-08-23 | 2026-10-31 | Multi-style skin collection for DeepSeek Harness (dsh) web GUI — 9 themes with scoped decoration CSS and a sidebar skin manager |
| 185 | [flynow-harness/dsh-plugin-ai-video](https://github.com/flynow-harness/dsh-plugin-ai-video) | 0 | 2026-10-31 | 2026-10-31 | AI video studio plugin for DeepSeek Harness: outline → storyboard → narration → subtitles → MP4, driven by the agent |
| 186 | [GamecialX/dsh-study-notes](https://github.com/GamecialX/dsh-study-notes) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：study-notes 技能 —— 从零学一门科目，生成标准 Markdown 学习笔记库 + 本地网页学习门户（含判分测试）。零依赖、零构建、离线可用。 |
| 187 | [gaog88666-boop/dsh-legal-workbench](https://github.com/gaog88666-boop/dsh-legal-workbench) | 0 | 2026-10-30 | 2026-10-31 | Right-sidebar workbench for DeepSeek Harness: Obsidian notes, SOP lookup, glossary, recordings with live transcription, global search. |
| 188 | [Gentaine/dsh-qq-memory](https://github.com/Gentaine/dsh-qq-memory) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 的 QQ 桥接对话表记忆插件：SQLite 存储、自动召回、回忆计数、轮次与定期清理。 |
| 189 | [Github-Anderson/dsh-shanghaitech-genai](https://github.com/Github-Anderson/dsh-shanghaitech-genai) | 0 | 2026-10-31 | 2026-10-31 | ShanghaiTech GenAI model adapter, session options and Agent preset bundle for DeepSeek Harness |
| 190 | [gothepharnayadlsos-cyber/dsh-fanwork](https://github.com/gothepharnayadlsos-cyber/dsh-fanwork) | 0 | 2026-10-29 | 2026-10-31 | Logic-risk review before rewriting: audit the source text, decide each fix, generate several drafts in parallel, and export with a per-draft audit report. A DeepSeek Harness plugin. |
| 191 | [GunjanPatel359/dsh-tool-index](https://github.com/GunjanPatel359/dsh-tool-index) | 0 | 2026-10-21 | 2026-10-31 | Cut MCP token cost in DSH (DeepSeek Harness): send tool definitions as a compact index and load full schemas on demand, with the tool list stable so the prompt cache keeps working. |
| 192 | [Haitang-Hub/dsh-3d-director-desk](https://github.com/Haitang-Hub/dsh-3d-director-desk) | 0 | 2026-10-24 | 2026-10-31 | 3D 导演台 —— DSH 桌面端插件，把 3D 场景编排（摆角色、设镜头、时间轴预演、导出视频）暴露为 MCP 工具，供 AI Agent 直接调用，本地数据落盘、开箱即用。 |
| 193 | [Haitang-Hub/dsh-infinite-canvas](https://github.com/Haitang-Hub/dsh-infinite-canvas) | 0 | 2026-10-24 | 2026-10-31 | 无限画布 —— DSH 桌面端插件，把无限画布创作（多模态节点、AI 生成、工程管理）内置画布桥 + MCP 服务，供 AI Agent 直接调用，可与 3D 导演台插件协作。 |
| 194 | [hami-ashraafi/dsh-rtl](https://github.com/hami-ashraafi/dsh-rtl) | 0 | 2026-10-31 | 2026-10-31 | Right-to-left chat layout for DeepSeek Harness (Persian/Arabic) |
| 195 | [Hanson0901/dsh-line-bot](https://github.com/Hanson0901/dsh-line-bot) | 0 | 2026-10-30 | 2026-10-31 | LINE Messaging API bot plugin for DeepSeek Harness: Cloudflare Tunnel, selectable personas, proactive messages, full settings panel. |
| 196 | [hayou2002/dsh-vibecoding](https://github.com/hayou2002/dsh-vibecoding) | 0 | 2026-10-31 | 2026-10-31 | DSH 交付流程 skill：风险分档 T0/T1/T2、先复用再发明、契约先行、含 DSH 插件与平台扩展开发 |
| 197 | [heibaoxia/dsh-openspec-pipeline](https://github.com/heibaoxia/dsh-openspec-pipeline) | 0 | 2026-10-31 | 2026-10-31 | OpenSpec 变更流水线（DSH 插件）：把多个 change 排成一张有顺序的图，按依赖或并行开新对话执行；规划与任务进度读 openspec status/list，卡住时可一键 validate --strict 后归档。 |
| 198 | [hojas/dsh-session-cost](https://github.com/hojas/dsh-session-cost) | 0 | 2026-10-21 | 2026-10-31 | DeepSeek Harness 插件，显示每个会话实际花费的金额。 |
| 199 | [HuaLQIn/dsh-sidebar-annotate](https://github.com/HuaLQIn/dsh-sidebar-annotate) | 0 | 2026-10-31 | 2026-10-31 | Annotate images in place inside the DeepSeek Harness right sidebar — mark, draw, arrow, rectangle, square, triangle, then send the composited image plus a numbered note list back to the conversation. / 在 DSH 右侧边栏原地批注图片，合成图与编号说明一起发回对话。 |
| 200 | [Huangzihengcmd/dsh-wechat-assistant](https://github.com/Huangzihengcmd/dsh-wechat-assistant) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: drive DeepSeek Harness from WeChat — scan a QR code, send instructions from WeChat, get results back in the same chat. |
| 201 | [huningsong/dsh-todos-diy](https://github.com/huningsong/dsh-todos-diy) | 0 | 2026-10-30 | 2026-10-31 | Work todo reminders for DeepSeek Harness: four stage views plus recurring/paused filters, derived priority, recurrence, one-off start/end alerts, weekly/monthly reports, and natural-language quick add. |
| 202 | [hyzszyh/dsh-chem](https://github.com/hyzszyh/dsh-chem) | 0 | 2026-10-31 | 2026-10-31 | Turn YOUR agent into a chemistry assistant: 15 chem_* tools (RDKit + ChemDraw) with measured outputs — structure recognition, drawing, properties, stoichiometry, exam grading, Word/PPT delivery. |
| 203 | [HZDF-2026/dsh-compaction-ctxfold](https://github.com/HZDF-2026/dsh-compaction-ctxfold) | 0 | 2026-10-30 | 2026-10-31 | Deterministic compaction backend for DeepSeek Harness — zero-LLM, byte-deterministic summaries with verbatim anchors |
| 204 | [ICE03E/dsh-ecosystem-audit](https://github.com/ICE03E/dsh-ecosystem-audit) | 0 | 2026-10-31 | 2026-10-31 | dsh 插件: 自写插件 vs 官方/第三方对比、迁移建议与优秀插件推荐 |
| 205 | [Iceseas/dsh-ds-whale](https://github.com/Iceseas/dsh-ds-whale) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek 余额/用量小鲸鱼挂件（DSH Web UI 插件）：余额、官网口径今日用量、每轮消耗拟人播报、峰谷定价倒计时、四状态立绘，中英双语。 |
| 206 | [ihodorchenko/dsh-dock-attention](https://github.com/ihodorchenko/dsh-dock-attention) | 0 | 2026-10-30 | 2026-10-31 | Bounce a Dock icon when DeepSeek Harness needs your attention and the window is in the background — a DSH Host plugin with a native macOS beacon. |
| 207 | [ihodorchenko/dsh-next-prompt](https://github.com/ihodorchenko/dsh-next-prompt) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness plugin: after each answer, suggests the next message as ghost text in the message field (Tab to insert). Host-side LLM generation + browser half, MIT. |
| 208 | [ihodorchenko/dsh-nightowl](https://github.com/ihodorchenko/dsh-nightowl) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness plugin: keeps the Mac awake while a session works — caffeinate -i, per-session switch in the Session header, master switch in Settings. macOS only. |
| 209 | [ikun1031/dsh-effort-dial-plus](https://github.com/ikun1031/dsh-effort-dial-plus) | 0 | 2026-10-31 | 2026-10-31 | Codex-style reasoning-effort card for DeepSeek Harness: per-level accent colors, quota line, flowing particles. |
| 210 | [irerc/dsh-prompt-slim](https://github.com/irerc/dsh-prompt-slim) | 0 | 2026-10-24 | 2026-10-31 | DSH plugin: shrink the tool-definition block sent on every request (~39% fewer tokens) without changing tool behaviour |
| 211 | [iskrantxusa/dsh-client-ui-session-cost](https://github.com/iskrantxusa/dsh-client-ui-session-cost) | 0 | 2026-10-31 | 2026-10-31 | Estimated session cost pill for the DeepSeek Harness composer dock |
| 212 | [ITDanZF/dsh-hr-plugin](https://github.com/ITDanZF/dsh-hr-plugin) | 0 | 2026-10-30 | 2026-10-31 | Open-source resume plugin for DeepSeek Harness. |
| 213 | [JackWangSIA/dsh-ai-notepad](https://github.com/JackWangSIA/dsh-ai-notepad) | 0 | 2026-10-31 | 2026-10-31 | AI-native general-purpose text editor for DeepSeek Harness: encoding-safe editing, selection AI with diff review, Markdown preview, and Windows file associations. |
| 214 | [jayhchen/dsh-cc-auto-memory](https://github.com/jayhchen/dsh-cc-auto-memory) | 0 | 2026-10-31 | 2026-10-31 | Claude Code-compatible persistent memory plugin for DeepSeek Harness (DSH) — same MEMORY.md format, shares one memory directory with Claude Code · DeepSeek Harness（DSH）的 Claude Code 兼容持久记忆插件——相同的 MEMORY.md 格式，与 Claude Code 共享同一个记忆目录 |
| 215 | [jcy0chenyuan0/dsh-plugin-atuowexin](https://github.com/jcy0chenyuan0/dsh-plugin-atuowexin) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: read-only WeChat local chat extraction (decrypt, export, session isolation). Windows only. |
| 216 | [jcy0chenyuan0/dsh-plugin-ipynb](https://github.com/jcy0chenyuan0/dsh-plugin-ipynb) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: read/export Jupyter notebooks and preview .ipynb in the sidebar (nbformat 3/4). |
| 217 | [jcy0chenyuan0/dsh-plugin-open-in-app-fix](https://github.com/jcy0chenyuan0/dsh-plugin-open-in-app-fix) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: fix Open In failing for Electron editors (VS Code, Cursor, Windsurf). |
| 218 | [jcy0chenyuan0/dsh-plugin-python](https://github.com/jcy0chenyuan0/dsh-plugin-python) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: a model-facing python tool using the Harness bundled Python runtime. |
| 219 | [jcy0chenyuan0/dsh-plugin-qqchat](https://github.com/jcy0chenyuan0/dsh-plugin-qqchat) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: read-only QQ NT local chat extraction (decrypt, export, session isolation). Windows only. |
| 220 | [jcy0chenyuan0/dsh-plugin-qqsend](https://github.com/jcy0chenyuan0/dsh-plugin-qqsend) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: send QQ messages and files through OneBot/NapCat, with dry-run and safety gates. |
| 221 | [jcy0chenyuan0/dsh-plugin-translate](https://github.com/jcy0chenyuan0/dsh-plugin-translate) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: chat translation panel plus layout-preserving PDF translation. |
| 222 | [jediliu005/dsh-bili-whale-safever-by-jediliu](https://github.com/jediliu005/dsh-bili-whale-safever-by-jediliu) | 0 | 2026-10-31 | 2026-10-31 | 改良版b站养鱼插件 |
| 223 | [Jimesarrice/claude-pet-dsh](https://github.com/Jimesarrice/claude-pet-dsh) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: Claude desktop pet overlay for DeepSeek Harness, following turn/tool/todo state with a replaceable 8x9 character atlas. |
| 224 | [jimmyalxe/nekowhale-meme](https://github.com/jimmyalxe/nekowhale-meme) | 0 | 2026-10-29 | 2026-10-31 | 基于dsh-nekowhale-stickers 鲸鱼娘二创的斗图插件，把散落的表情图收进一个可检索、可分组、可被 AI 调用**的本地库。   |
| 225 | [JinBeiCN/dsh-coding-discipline](https://github.com/JinBeiCN/dsh-coding-discipline) | 0 | 2026-10-31 | 2026-10-31 | Coding agent preset + embedded coding-discipline skill for DeepSeek Harness: verify-first edits, minimal diffs, real test runs, evidence-based reports. |
| 226 | [jinmuxi1/dsh-ctrl-zoom](https://github.com/jinmuxi1/dsh-ctrl-zoom) | 0 | 2026-10-31 | 2026-10-31 | Ctrl + wheel page zoom for the DeepSeek Harness Web UI. |
| 227 | [John-20260101/dsh-theme-leshan](https://github.com/John-20260101/dsh-theme-leshan) | 0 | 2026-10-31 | 2026-10-31 | Three photograph skins for the DeepSeek Harness Web GUI — River Night, Lingyun Dusk and Emei Mist, painted window and conversation canvas, one token engine, light and dark. |
| 228 | [juntaoqian/dsh-traffic-light](https://github.com/juntaoqian/dsh-traffic-light) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 左下角红绿灯：汇总所有会话的运行/等待状态、状态切换蜂鸣（6 种音效），设置页可配置。Traffic-light status widget for the DSH Web UI. |
| 229 | [kanmanJO/dsh-cross-session-ref](https://github.com/kanmanJO/dsh-cross-session-ref) | 0 | 2026-10-31 | 2026-10-31 | 跨会话引用：把问答卡片拖到另一个会话，并在提问时注入 Prompt。Cross-session reference cards for DeepSeek Harness. |
| 230 | [keduoli-lovely/dsh-plugin-voice-studio](https://github.com/keduoli-lovely/dsh-plugin-voice-studio) | 0 | 2026-10-31 | 2026-10-31 | 语音工坊 · DeepSeek Harness 插件：多提供商语音合成 + 参考音色库 + RVC 歌曲翻唱 + 情绪控制 + qq-bridge 语音发送（含随机语音回复） |
| 231 | [kelvmg/dsh-speech-to-text-gigaam](https://github.com/kelvmg/dsh-speech-to-text-gigaam) | 0 | 2026-10-31 | 2026-10-31 | Local GigaAM (Sber) Russian speech recognition provider for DeepSeek Harness voice input |
| 232 | [Keridium/dsh-gopeed](https://github.com/Keridium/dsh-gopeed) | 0 | 2026-10-31 | 2026-10-31 | Gopeed downloader tools for DeepSeek Harness (DSH): add / list / status / control / process / launch, plus a background job that wakes an idle agent. Agents: read docs/AGENTS.md first. |
| 233 | [kev1nlol/dsh-skill-manager](https://github.com/kev1nlol/dsh-skill-manager) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：侧栏 SKILL 管理，技能分组 + 逐个启用/关闭，决定模型技能目录与 / 指令是否仍索引它 |
| 234 | [Kingyibin/dsh-oopz-voice](https://github.com/Kingyibin/dsh-oopz-voice) | 0 | 2026-10-31 | 2026-10-31 | 让 DSH 里的 agent 真的进 Oopz 语音房开口说话：本地 ASR + 大模型 + 本地 TTS + Agora 推流，感知延迟约 1.6 秒。别人听到的是一个真人，不是机器人。 |
| 235 | [kisa-love/dsh-android-cn-input](https://github.com/kisa-love/dsh-android-cn-input) | 0 | 2026-10-31 | 2026-10-31 | 一款通过adb shell命令让agent在安卓系统（或许只有模拟器，我也没试过真实的手机）终端上直接输入中文的插件。\|A plugins that can input chinese by powershell using adb instruction in Android system（or emulator？, I have not test on real phone）  |
| 236 | [KissBlank/dsh-session-manager](https://github.com/KissBlank/dsh-session-manager) | 0 | 2026-10-31 | 2026-10-31 | Purge DSH Sessions for good and manage them from one console: five-step deletion, bulk cleanup with force/interrupt guards. DSH 会话彻底删除 + 会话管理控制台。 |
| 237 | [kizaki-R/Antigravity-Next-for-DSH](https://github.com/kizaki-R/Antigravity-Next-for-DSH) | 0 | 2026-10-31 | 2026-10-31 | Antigravity provider for DeepSeek Harness. Unofficial. |
| 238 | [koi128bit/dsh-session-git](https://github.com/koi128bit/dsh-session-git) | 0 | 2026-10-31 | 2026-10-31 | Git history as a tab inside every DSH conversation: each session opens its own repository, with branch lanes, commit detail, diffs, refs and working-tree actions. |
| 239 | [komeiji-cobalt/dsh-isaac-widget](https://github.com/komeiji-cobalt/dsh-isaac-widget) | 0 | 2026-10-31 | 2026-10-31 | 以撒 DSH 小挂件：透明 Isaac 动图 + HurtGrunt + 蜘蛛思考泡泡（fan-made） |
| 240 | [LanceRingHong/dsh-mesh](https://github.com/LanceRingHong/dsh-mesh) | 0 | 2026-10-31 | 2026-10-31 | File-based cross-device memory and DSH delegation for DeepSeek Harness. Markdown + Syncthing + DSH Remote. |
| 241 | [lengrufeng2008/dsh-science-legion](https://github.com/lengrufeng2008/dsh-science-legion) | 0 | 2026-10-31 | 2026-10-31 | Tiered multi-agent science campaigns for DeepSeek Harness: verified math, physics, astronomy, engineering, and biomedical-evidence workflows. No open-problem claims. |
| 242 | [lengrufeng2008/dsh-token-audit](https://github.com/lengrufeng2008/dsh-token-audit) | 0 | 2026-10-31 | 2026-10-31 | Audit DeepSeek Harness session logs: exact token cost, waste patterns, and a data-driven savings plan. Local-only CLI + DSH plugin. |
| 243 | [lengrufeng2008/dsh-trading-floor](https://github.com/lengrufeng2008/dsh-trading-floor) | 0 | 2026-10-31 | 2026-10-31 | Read-only DSH session desk: active book, token mix, context, tool time, idle-rate spend, and risk gates. No market data or orders. |
| 244 | [Lequait/dsh-context-rescue](https://github.com/Lequait/dsh-context-rescue) | 0 | 2026-10-30 | 2026-10-31 | Rescues a DSH session the host already refused for exceeding the model context window: detect the refusal, fold the oldest span into one checkpoint with no model call, retry once, report what it did. |
| 245 | [levitate403/dsh-firefly-bg](https://github.com/levitate403/dsh-firefly-bg) | 0 | 2026-10-31 | 2026-10-31 | Firefly-themed wallpaper background for the DeepSeek Harness Web GUI |
| 246 | [LFLmLXY/dsh-pss](https://github.com/LFLmLXY/dsh-pss) | 0 | 2026-10-31 | 2026-10-31 | PSS 参数化会话状态记忆：把会话历史压成一组 LoRA 权重，O(1) 恒定存储 + 参数化意图 + 实时可视化脑图（DSH 插件） |
| 247 | [li906912102/dsh-team-dev](https://github.com/li906912102/dsh-team-dev) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin bundle: per-agent step-budget guard + bundled team-dev / team-boot skills. 开发团队插件：步数预算守卫 + 随包技能。 |
| 248 | [liaoguogang-hub/dsh-remote-public](https://github.com/liaoguogang-hub/dsh-remote-public) | 0 | 2026-10-31 | 2026-10-31 | DSH Remote — Android app that controls DeepSeek Harness (DSH) on your PC over LAN or a tunnel. One-click connect script included. |
| 249 | [lingsheng-master/dsh-eventline](https://github.com/lingsheng-master/dsh-eventline) | 0 | 2026-10-26 | 2026-10-31 | 四端共用的一条事件线（DSH / QQ / B站 / 桌宠），只追加不改写，醒来先看它 |
| 250 | [lingsheng-master/dsh-yuniang-overlay](https://github.com/lingsheng-master/dsh-yuniang-overlay) | 0 | 2026-10-29 | 2026-10-31 | 桌面悬浮窗桥（DSH）：outbox.jsonl → 专用会话 → overlay_say → inbox.jsonl |
| 251 | [lingsheng-master/dsh-yuniang-voice](https://github.com/lingsheng-master/dsh-yuniang-voice) | 0 | 2026-10-28 | 2026-10-31 | 小鱼娘的声音：日语语音 + 界面漫画气泡 + 中文字幕，接本地 GPT-SoVITS |
| 252 | [lishicheng2054/dsh-flavor-memory](https://github.com/lishicheng2054/dsh-flavor-memory) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin: flavor-preserving long-term memory for character chat. Local JSON, no vector DB, retrieval-first. |
| 253 | [liu-Daniel7/search-school-sci-skill](https://github.com/liu-Daniel7/search-school-sci-skill) | 0 | 2026-10-30 | 2026-10-31 | 查任意大学任意学院的科研产出，总结成可视化excel |
| 254 | [liyuhan7/dsh-phone-mirror](https://github.com/liyuhan7/dsh-phone-mirror) | 0 | 2026-10-31 | 2026-10-31 | 在 DSH 右侧栏投屏并反控安卓手机/平板。scrcpy 内核编 H.264，浏览器 WebCodecs 解码，鼠标键盘直接操作；仅支持 Windows。 |
| 255 | [LOESS16/dsh-masterduel](https://github.com/LOESS16/dsh-masterduel) | 0 | 2026-10-31 | 2026-10-31 | Master Duel deck-building panel for DSH |
| 256 | [longyi-0x0/dsh-plugin-manager](https://github.com/longyi-0x0/dsh-plugin-manager) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件管理器：在原生插件页的「添加插件」菜单里扫描并更新已安装的 GitHub 插件，不占用页签、不替换原生页面。 |
| 257 | [longyi-0x0/dsh-workspace-sidebar](https://github.com/longyi-0x0/dsh-workspace-sidebar) | 0 | 2026-10-31 | 2026-10-31 | DSH 侧栏「工作区」覆写插件：分叉会话树、批量归档与置顶排序，基于官方 ui-workspace 源码。 |
| 258 | [louxi9/luoxi-plugin-dsh](https://github.com/louxi9/luoxi-plugin-dsh) | 0 | 2026-10-30 | 2026-10-31 | dsh-plugin-luoxi |
| 259 | [LoveElysiaFH/dsh-subjkit](https://github.com/LoveElysiaFH/dsh-subjkit) | 0 | 2026-10-31 | 2026-10-31 | DSH 学科插件：公式转矢量排版、试卷 PDF、物理/数学/化学/生物/语文图示，内置使用技能。 |
| 260 | [Lovenndme/dsh-command-context](https://github.com/Lovenndme/dsh-command-context) | 0 | 2026-10-31 | 2026-10-31 | A /context slash command for DeepSeek Harness: context window usage, free space, and a per-category breakdown of what fills the prompt. |
| 261 | [lucagiftzek/DSH-Idle-Watchdog](https://github.com/lucagiftzek/DSH-Idle-Watchdog) | 0 | 2026-09-11 | 2026-10-31 | DSH plugin: auto-prompt opted-in chats after an idle window (personalised prompts, per-chat on/off, settings UI) plus a secret-protected HTTP API to prompt any chat from outside. |
| 262 | [lucagiftzek/dsh-phone](https://github.com/lucagiftzek/dsh-phone) | 0 | 2026-10-31 | 2026-10-31 | Phone for the DeepSeek Harness web GUI: SMS, browser calls, live voicemail with pick up, do not disturb, local voicemail transcripts and phone_* agent tools. Provider-agnostic: Twilio today, SIP relay and more next. |
| 263 | [Lumos-789/delivery-video-plugin](https://github.com/Lumos-789/delivery-video-plugin) | 0 | 2026-10-31 | 2026-10-31 | Turn a feature that actually runs into a trustworthy delivery demo video: real recordings, edge-tts narration, word-synced subtitles, deterministic quality gate. ZCode plugin + DSH skill plugin, dual-form. |
| 264 | [MaiwulanjiangMaiming/Deepseek-harness-SSH-toolkit](https://github.com/MaiwulanjiangMaiming/Deepseek-harness-SSH-toolkit) | 0 | 2026-10-31 | 2026-10-31 | SSH remote workspaces for DeepSeek Harness |
| 265 | [MincongZhou/dsh-fengge-persona](https://github.com/MincongZhou/dsh-fengge-persona) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 全局人设插件：把「峰哥亡命天涯」的语体做成可一键开关、可编辑的系统提示词段。开启后 AI 像他那样一句一句聊天，做正事自动退回按事实办。 |
| 266 | [MisakaGordon/whalestory](https://github.com/MisakaGordon/whalestory) | 0 | 2026-10-24 | 2026-10-31 | 将Deepseek Harness的运行状态变成肥鱼讲故事 |
| 267 | [msongw-design/dsh-plugin-recent-files](https://github.com/msongw-design/dsh-plugin-recent-files) | 0 | 2026-10-31 | 2026-10-31 | A DeepSeek Harness plugin: a "最近浏览" sidebar entry listing recently opened file artifacts |
| 268 | [msongw-design/dsh-plugin-session-clock](https://github.com/msongw-design/dsh-plugin-session-clock) | 0 | 2026-10-31 | 2026-10-31 | A DeepSeek Harness plugin: rewrite the sidebar's relative session times as WeChat-style absolute times |
| 269 | [MSSZSD3925/dsh-toolkit](https://github.com/MSSZSD3925/dsh-toolkit) | 0 | 2026-10-22 | 2026-10-31 | DSH 小功能合集：QQ 远程驾驶、跨会话提问（含上下文守卫）、界面暂停按钮、重启 DSH 后自动续跑、贵时段纪律注入。插件详情页带五个运行期开关。 |
| 270 | [msz-legend/dsh-mobile-bridge](https://github.com/msz-legend/dsh-mobile-bridge) | 0 | 2026-10-31 | 2026-10-31 | 让手机浏览器安全接入 DSH Desktop：扫码配对、复用现有 Web UI、流式回显、工具审批（once / always / reject）。MIT licensed. |
| 271 | [Mulibaixi/dsh-composer-extension](https://github.com/Mulibaixi/dsh-composer-extension) | 0 | 2026-10-30 | 2026-10-31 | 连接 DeepSeek Harness 主聊天与翻译工作区，提供材料递交、背景信息传递与任务协作能力，并自动维护所需的联动组件。 |
| 272 | [Mulibaixi/dsh-translation-plugin](https://github.com/Mulibaixi/dsh-translation-plugin) | 0 | 2026-10-30 | 2026-10-31 | 面向 DeepSeek Harness 的翻译与润色工作区，结合主题记忆、主模型协作与译文修订，支持从翻译到审阅定稿的完整工作流。 |
| 273 | [nebula9i/dsh-plugin-notify](https://github.com/nebula9i/dsh-plugin-notify) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin: a native Windows desktop notification card whenever the agent needs an answer (ask_user_question, plan review, or a permission prompt). It notifies; you answer in the chat. |
| 274 | [NightPainters/dsh-subagent-guard](https://github.com/NightPainters/dsh-subagent-guard) | 0 | 2026-10-20 | 2026-10-31 | Guardrails for DeepSeek Harness subagents: sandbox cap, destructive-command deny list, tool-surface restriction, and cold-resume recovery. |
| 275 | [NingYuanLee/dsh-personal-system-rules](https://github.com/NingYuanLee/dsh-personal-system-rules) | 0 | 2026-10-31 | 2026-10-31 | Inject a personal rules file into the DeepSeek Harness system prompt, with silent-step and repeated-action loop guards; editable from the dsh settings dialog. |
| 276 | [niobium617/dsh-vibecode-studio](https://github.com/niobium617/dsh-vibecode-studio) | 0 | 2026-10-25 | 2026-10-31 | DeepSeek Harness 的可视化 Vibe Coding 插件：在侧栏预览本地 Web 应用，点选元素写批注，把结构化上下文交给编码 Agent。 |
| 277 | [Nobodyanonymou-s/dsh-recipe-homie](https://github.com/Nobodyanonymou-s/dsh-recipe-homie) | 0 | 2026-10-31 | 2026-10-31 | Chinese-cooking plugin for DSH: canonical recipes, menus that fit you, shopping lists that make sense |
| 278 | [nomxy/dsh-workspace-resizer](https://github.com/nomxy/dsh-workspace-resizer) | 0 | 2026-10-31 | 2026-10-31 | Drag the sidebar splitter to grow the workspace list. · 侧边栏「工作区」与导航之间的可拖动分隔条。 |
| 279 | [notpdpton/dsh-session-continue](https://github.com/notpdpton/dsh-session-continue) | 0 | 2026-10-31 | 2026-10-31 | 会话非正常结束时，在输入框上方显示提示条与「继续」按钮。 |
| 280 | [notpdpton/dsh-window-memory](https://github.com/notpdpton/dsh-window-memory) | 0 | 2026-10-29 | 2026-10-31 | 记住 DSH Desktop 主窗口的位置与尺寸，下次启动时还原。 |
| 281 | [OakcoderX/solopup-memory](https://github.com/OakcoderX/solopup-memory) | 0 | 2026-10-31 | 2026-10-31 | Source-linked text memory for DeepSeek Harness (DSH). 保留原话来源、项目边界与修订历史的文字记忆插件。Public beta · MIT. |
| 282 | [omdsh-dev/dsh-trace-waterfall](https://github.com/omdsh-dev/dsh-trace-waterfall) | 0 | 2026-10-24 | 2026-10-31 | A live, searchable trace waterfall for DeepSeek Harness. |
| 283 | [Orchidroot/dsh-friends](https://github.com/Orchidroot/dsh-friends) | 0 | 2026-10-31 | 2026-10-31 | DSH 好友浮窗与聊天插件，自带可自部署的 Node 好友服务 |
| 284 | [Orchidroot/dsh-friends-plugin](https://github.com/Orchidroot/dsh-friends-plugin) | 0 | 2026-10-31 | 2026-10-31 | Installable package for the DSH friends plugin (market index source) |
| 285 | [ORIOW/dsh-zcode-native](https://github.com/ORIOW/dsh-zcode-native) | 0 | 2026-10-31 | 2026-10-31 | DSH 原生插件：把 ZCode(Z.ai) 桌面端接成状态看板 + CDP 派活闭环 + 原生子代理 subagent_zcode |
| 286 | [otm1998/dsh-plugin-namer](https://github.com/otm1998/dsh-plugin-namer) | 0 | 2026-10-31 | 2026-10-31 | 给已安装的第三方插件改名，写进它自己的语言元数据 |
| 287 | [ousiqwq/dsh-file-bridge](https://github.com/ousiqwq/dsh-file-bridge) | 0 | 2026-10-31 | 2026-10-31 | Download files to your browser from DeepSeek Harness, alongside native previews. MIT. |
| 288 | [outloudvi/dsh-magpie-sync](https://github.com/outloudvi/dsh-magpie-sync) | 0 | 2026-10-31 | 2026-10-31 | \[LLM\] 使 DSH 能从 magpie 上游同步输入模态及 thinking level |
| 289 | [ozanstn1-stack/dsh-free-image](https://github.com/ozanstn1-stack/dsh-free-image) | 0 | 2026-10-31 | 2026-10-31 | Keyless image generation for DeepSeek Harness: no API key, no paid account, rate-limit aware. |
| 290 | [ozanstn1-stack/dsh-vps-ops](https://github.com/ozanstn1-stack/dsh-vps-ops) | 0 | 2026-10-31 | 2026-10-31 | Read-first VPS operations tools for DeepSeek Harness: systemd, Docker, disk, logs, backups and quiet-hours schedules. |
| 291 | [OZONGO/dsh-background-compaction](https://github.com/OZONGO/dsh-background-compaction) | 0 | 2026-10-31 | 2026-10-31 | Background context compaction for DeepSeek Harness: summarize ahead of the threshold, swap in on the next turn. |
| 292 | [panchalkmetkh249-alt/dsh-bigfeiyu-focus](https://github.com/panchalkmetkh249-alt/dsh-bigfeiyu-focus) | 0 | 2026-10-31 | 2026-10-31 | 让 DSH 桌宠「大肥鱼」(dsh-pet) 的视线跟随鼠标：带透视的 3D 转头 + 视差位移，独立插件，不修改 dsh-pet。 |
| 293 | [PerryLink/dsh-ap-three-way](https://github.com/PerryLink/dsh-ap-three-way) | 0 | 2026-10-31 | 2026-10-31 | AP invoice/PO/GRN three-way match with tolerance policy and exception workpaper. |
| 294 | [PerryLink/dsh-bankrec](https://github.com/PerryLink/dsh-bankrec) | 0 | 2026-10-31 | 2026-10-31 | Bank statement ingest, CAMT.053/MT940 reconciliation and 3-sheet workpaper. |
| 295 | [PerryLink/dsh-contract-suite](https://github.com/PerryLink/dsh-contract-suite) | 0 | 2026-10-31 | 2026-10-31 | Contract suite: one-command install for dsh-legal-intake and dsh-legal-clause. |
| 296 | [PerryLink/dsh-docx-redline](https://github.com/PerryLink/dsh-docx-redline) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] DOCX structure inspection, byte-exact roundtrip and limited exact-run text replace. |
| 297 | [PerryLink/dsh-einvoice](https://github.com/PerryLink/dsh-einvoice) | 0 | 2026-10-31 | 2026-10-31 | File-level Chinese e-invoice (OFD/XML) ingest, parse, dedup and local archive. |
| 298 | [PerryLink/dsh-eval-pack](https://github.com/PerryLink/dsh-eval-pack) | 0 | 2026-10-31 | 2026-10-31 | Public/synthetic eval-pack lint and deterministic JSON grader; not a validated benchmark. |
| 299 | [PerryLink/dsh-finops-suite](https://github.com/PerryLink/dsh-finops-suite) | 0 | 2026-10-31 | 2026-10-31 | Finance Ops suite: one-command install for dsh-einvoice, dsh-bankrec, dsh-ap-three-way and dsh-travel-recon. |
| 300 | [PerryLink/dsh-freight-audit](https://github.com/PerryLink/dsh-freight-audit) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] Freight ratecard versioning, carrier bill audit, recovery summary and variance export. |
| 301 | [PerryLink/dsh-ghg](https://github.com/PerryLink/dsh-ghg) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] Electricity activity ingest, location-based GHG calculation, row verification, workpaper and partial ESRS pack. |
| 302 | [PerryLink/dsh-hs-candidate](https://github.com/PerryLink/dsh-hs-candidate) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] HS Top-3 candidates, 12-element completeness, RVC check and tariff version gate. |
| 303 | [PerryLink/dsh-ifc-qto](https://github.com/PerryLink/dsh-ifc-qto) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] IFC element/quantity inventory and CSV takeoff. |
| 304 | [PerryLink/dsh-legal-clause](https://github.com/PerryLink/dsh-legal-clause) | 0 | 2026-10-31 | 2026-10-31 | Legal clause tree, 12-key playbook mapping and unresolved report. |
| 305 | [PerryLink/dsh-legal-intake](https://github.com/PerryLink/dsh-legal-intake) | 0 | 2026-10-31 | 2026-10-31 | Legal request intake from EML, thread dedupe and ledger export. |
| 306 | [PerryLink/dsh-pim-lint](https://github.com/PerryLink/dsh-pim-lint) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] PIM catalog lint: required fields, duplicate SKU, GTIN check digit and price. |
| 307 | [PerryLink/dsh-policy-ledger](https://github.com/PerryLink/dsh-policy-ledger) | 0 | 2026-10-31 | 2026-10-31 | Read-only install doctor: capability snapshot, tarball assert and install diagnosis.  Install-only companion to dsh-plugin-doctor (tarball/install-log diagnosis). |
| 308 | [PerryLink/dsh-qms-capa](https://github.com/PerryLink/dsh-qms-capa) | 0 | 2026-10-31 | 2026-10-31 | \[FROZEN 2026-10-31\] QMS NCR ingest, batch alias resolution, impact evaluation, CAPA and 8D state. |
| 309 | [PerryLink/dsh-travel-recon](https://github.com/PerryLink/dsh-travel-recon) | 0 | 2026-10-31 | 2026-10-31 | Travel order/invoice/card ingest, dedupe, three-way match, read-only policy check and ledger export. |
| 310 | [pimili-app/dsh-jira](https://github.com/pimili-app/dsh-jira) | 0 | 2026-10-31 | 2026-10-31 | Jira tickets inside DeepSeek Harness: configurable visible spaces, multi-space and status filters, ticket detail, create/transition/comment, right-sidebar tab. |
| 311 | [pimili-app/dsh-maestro-progress](https://github.com/pimili-app/dsh-maestro-progress) | 0 | 2026-10-31 | 2026-10-31 | Maestro UI test runs inside DeepSeek Harness: live flow and step progress, composed scenarios, target devices, run logs, screenshots and a right-sidebar tab. |
| 312 | [Platato-DA/dsh-task-center](https://github.com/Platato-DA/dsh-task-center) | 0 | 2026-10-31 | 2026-10-31 | Scheduled Agent execution for DeepSeek Harness: per-task models, workspaces, durable run history and artifacts. Community plugin · public beta. |
| 313 | [platinum952/dsh-session-notify](https://github.com/platinum952/dsh-session-notify) | 0 | 2026-10-31 | 2026-10-31 | Reply toasts for DeepSeek Harness: a dismissible stack that names the workspace and session, previews the reply, and opens the session on click. |
| 314 | [qingfenganshi/dsh-whale-desktop](https://github.com/qingfenganshi/dsh-whale-desktop) | 0 | 2026-10-31 | 2026-10-31 | 小鲸鱼桌宠：DeepSeek Harness 余额挂件衍生版，支持对话气泡与独立桌面小鲸鱼 |
| 315 | [QIUZAIYOU/dsh-workspace-control](https://github.com/QIUZAIYOU/dsh-workspace-control) | 0 | 2026-10-31 | 2026-10-31 | Workspace management for DeepSeek Harness: move, rebuild, merge, rename and delete workspaces from a sidebar panel. |
| 316 | [quekenao/dsh-auto-continue-community](https://github.com/quekenao/dsh-auto-continue-community) | 0 | 2026-10-31 | 2026-10-31 | Auto-continue plugin for DSH: continues model responses truncated at max-tokens |
| 317 | [Rayle8/dsh-aside-note](https://github.com/Rayle8/dsh-aside-note) | 0 | 2026-10-26 | 2026-10-31 | 旁边记（AsideNote）：给 DeepSeek Harness 增加一个随手便笺 |
| 318 | [Re-qi/dsh-topbar-restart](https://github.com/Re-qi/dsh-topbar-restart) | 0 | 2026-10-31 | 2026-10-31 | DSH 桌面端 Windows 标题栏一键重启按钮：点击后关闭 DSH 并自动重新拉起同一个应用。One-click restart button in the DSH desktop title bar (Windows). |
| 319 | [RootAndSource/dsh-plugin-dynamic-competition-four-images](https://github.com/RootAndSource/dsh-plugin-dynamic-competition-four-images) | 0 | 2026-10-31 | 2026-10-31 | A DSH plugin based on dynamic competition theory, with skills governed by the four images model. |
| 320 | [ruide92/dsh-project-atlas](https://github.com/ruide92/dsh-project-atlas) | 0 | 2026-10-31 | 2026-10-31 | Project Atlas — a local-first visual workbench for DeepSeek Harness: projects, skills, sessions, runtimes, and artifacts in one calm map. |
| 321 | [ruihe774/dsh-agent-attribution](https://github.com/ruihe774/dsh-agent-attribution) | 0 | 2026-10-30 | 2026-10-31 | A dsh plugin that tells agents how to attribute the git commits and pull requests they create, with the model name filled in automatically |
| 322 | [ruihe774/dsh-bash-guardrails](https://github.com/ruihe774/dsh-bash-guardrails) | 0 | 2026-10-30 | 2026-10-31 | A dsh plugin that enforces customizable guard rules on bash tool calls before the agent runs a bash command |
| 323 | [s0meb0dy3/dsh-scratch-workspace](https://github.com/s0meb0dy3/dsh-scratch-workspace) | 0 | 2026-10-30 | 2026-10-31 | Temporary workspaces plugin for DeepSeek Harness: one-click creation, sidebar management panel, safe cleanup and optional idle auto-expiry. |
| 324 | [Scorpioflz/dsh-cbw-memory](https://github.com/Scorpioflz/dsh-cbw-memory) | 0 | 2026-10-31 | 2026-10-31 | DSH long-term memory plugin with half-life decay, emotion weighting, and per-workspace sharing. Derived from Yuuyuko-uu/dsh-fish-memory. |
| 325 | [sdlhs/dsh-interject](https://github.com/sdlhs/dsh-interject) | 0 | 2026-10-31 | 2026-10-31 | 把排队中的消息提前送达，不打断不终止正在跑的模型调用，不影响当前的思考求索 |
| 326 | [Serenity-2026/dsh-treecom](https://github.com/Serenity-2026/dsh-treecom) | 0 | 2026-10-31 | 2026-10-31 | Tree-shaped conversation branching for DeepSeek Harness: one visible conversation, a tree panel, and branch-from-any-turn. |
| 327 | [sfunction-guo/dsh-screenshot](https://github.com/sfunction-guo/dsh-screenshot) | 0 | 2026-10-30 | 2026-10-31 | 微信群截图式的标注工具：冻结屏幕 → 拖框 → 就地标注 → 直接进 DSH 输入框（Windows / WinForms） |
| 328 | [shuxidemosheng/dsh-skill-doctor](https://github.com/shuxidemosheng/dsh-skill-doctor) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 技能体检：模型能不能看到、会不会选中你的技能。15 条规则 + 通俗报告 + CLI。 |
| 329 | [Siselea/dsh-motrix-download](https://github.com/Siselea/dsh-motrix-download) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin: route model download requests to the local Motrix (aria2) app, with a built-in direct HTTP fallback. |
| 330 | [smallhug/tkless](https://github.com/smallhug/tkless) | 0 | 2026-10-16 | 2026-10-31 | 为 AI Agent 提供低 Token 网页提取、搜索与 MCP 接入的 Rust 工具 |
| 331 | [SMPcosy/dsh-member-manager](https://github.com/SMPcosy/dsh-member-manager) | 0 | 2026-10-17 | 2026-10-31 | DeepSeek Harness (DSH) plugin for team member management: two-level group→member org structure, Chinese display names &amp; aliases, job titles &amp; duties, skill tagging, retire/restore, and per-member model overrides. Ships as host tools + a Web management panel; keeps its own overlay registry so the immutable DSH core is never touched. MIT licensed. |
| 332 | [snnnnke/dsh-folder-launcher](https://github.com/snnnnke/dsh-folder-launcher) | 0 | 2026-10-30 | 2026-10-31 | A dsh plugin that receives folder paths from external sources and opens them as workspaces |
| 333 | [sol-ray/dsh-qa-jump](https://github.com/sol-ray/dsh-qa-jump) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件：提问/回答双轴跳转 + 代码块折叠 \| Question/answer jump and code folding for the DeepSeek Harness web GUI |
| 334 | [stellar-dream/dsh-memo-guojc](https://github.com/stellar-dream/dsh-memo-guojc) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 桌面端插件：对话切片 / 备忘录 / 经验库。划词即记，SQLite FTS5 中文检索，一键跳回原文，零第三方运行时依赖。 |
| 335 | [SternChiri/dsh-auto-preset-guard](https://github.com/SternChiri/dsh-auto-preset-guard) | 0 | 2026-10-31 | 2026-10-31 | 让 DSH 的「自动审批」熬过重启：退出应用时不再被改写为「完全权限」，缺集成的自动审批会话也能重新打开。 (Keep the DeepSeek Harness Auto permission preset across restarts.) |
| 336 | [Streamfish-lab/dsh-splash-fish](https://github.com/Streamfish-lab/dsh-splash-fish) | 0 | 2026-10-31 | 2026-10-31 | Depth-driven 2.5D startup animation plugin for DeepSeek Harness |
| 337 | [sunhailong123/dsh-study-loop](https://github.com/sunhailong123/dsh-study-loop) | 0 | 2026-10-31 | 2026-10-31 | Learn first, then get quizzed: a floating study loop for DeepSeek Harness that teaches a topic, then asks about it - and brings old knowledge back later from a new angle. |
| 338 | [superqin7/dsh-tr-bridge](https://github.com/superqin7/dsh-tr-bridge) | 0 | 2026-10-31 | 2026-10-31 | Unofficial MIT open-source DeepSeek Harness bridge to TokenRouter Codex/Grok CLIs. Inspired by MJorgin/dsh-agent-conductor. Preview; Windows E2E unverified. |
| 339 | [tacotuesday22/dsh-aliyun-coupon-api](https://github.com/tacotuesday22/dsh-aliyun-coupon-api) | 0 | 2026-10-31 | 2026-10-31 | 阿里云余额 + 代金券挂件 \| DeepSeek Harness plugin: read-only Aliyun account balance &amp; coupon balance via official OpenAPI, shown in the sidebar |
| 340 | [tataCrayon/dsh-rampart](https://github.com/tataCrayon/dsh-rampart) | 0 | 2026-10-31 | 2026-10-31 | Memory and CPU pressure guard for DeepSeek Harness (dsh): grades pressure, drops the host to below-normal priority, refuses heavy tools before the machine thrashes, and shows how much of the machine DSH itself is using. |
| 341 | [techflag/dsh-friends](https://github.com/techflag/dsh-friends) | 0 | 2026-10-30 | 2026-10-31 | DSH 搭子 · Public chat rooms and opt-in encrypted private text chat for DeepSeek Harness. |
| 342 | [tianxiaz/dsh-recent-sessions](https://github.com/tianxiaz/dsh-recent-sessions) | 0 | 2026-10-31 | 2026-10-31 | A Workspaces-style Recent sessions section in the DSH left sidebar — favorites, waiting-for-you, unread and running sessions. |
| 343 | [TiFu799/dsh-wake-up](https://github.com/TiFu799/dsh-wake-up) | 0 | 2026-10-31 | 2026-10-31 | 按需叫醒休眠的 DSH 会话：带模型路由 resume，给端点也给工具。 |
| 344 | [tokenaissance/dsh-router](https://github.com/tokenaissance/dsh-router) | 0 | 2026-10-31 | 2026-10-31 | Route DeepSeek Harness subagents through sub2api: sign in once, fetch a route-group key per run, inject it into the child agent. |
| 345 | [Tracest/dsh-session-inbox](https://github.com/Tracest/dsh-session-inbox) | 0 | 2026-10-31 | 2026-10-31 | DSH Session Workbench: project groups, Working, Needs attention, reversible Settle, and the original layout switch. MIT. |
| 346 | [Traveritas/averita-s-dsh-plugins](https://github.com/Traveritas/averita-s-dsh-plugins) | 0 | 2026-10-31 | 2026-10-31 | AveritA 的 DSH 插件目录：主题集、侧栏工作区卡片、composer 思考强度滑条。 |
| 347 | [Treasure-hub-agent/dsh-ai-with-u](https://github.com/Treasure-hub-agent/dsh-ai-with-u) | 0 | 2026-10-30 | 2026-10-31 | DeepSeek Harness 角色扮演插件：选卡即用、日记记忆、可视化面板 |
| 348 | [tututuhehehe/dsh-notion](https://github.com/tututuhehehe/dsh-notion) | 0 | 2026-10-31 | 2026-10-31 | Four consolidated Notion tools for DeepSeek Harness, over the official ntn CLI |
| 349 | [tz-Wang510/dsh-safe-session-delete](https://github.com/tz-Wang510/dsh-safe-session-delete) | 0 | 2026-10-31 | 2026-10-31 | Recoverable session deletion for DeepSeek Harness with a 30-day trash retention window. |
| 350 | [UnknowSSQ/dsh-plugin](https://github.com/UnknowSSQ/dsh-plugin) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness plugin: rewrite the prompt before you send it, with balance and time-of-use pricing in the sidebar |
| 351 | [User-Clb/dsh-retry-policy](https://github.com/User-Clb/dsh-retry-policy) | 0 | 2026-10-31 | 2026-10-31 | DSH 模型请求重试策略统一覆盖插件：包装 ctx.llm.prepareCall，把所有 provider 通道的 retryPolicy 换成同一套参数（默认 20 次 / 10s 固定退避 / 0 抖动），不改 DSH 客户端文件。 |
| 352 | [Wcof/PlugBox](https://github.com/Wcof/PlugBox) | 0 | 2026-10-29 | 2026-10-31 | PlugBox · 通用插件中心与插件索引源：统一插件协议，适配所有支持自定义插件的引擎层 / 智能体层工具。首批内置 DeepSeek Harness 与 zcode DeepSeek Harness 适配器。A universal plugin center &amp; index source: one plugin protocol, adapted to every engine/agent tool that supports custom plugins. |
| 353 | [WEATER604/dsh-listen-together](https://github.com/WEATER604/dsh-listen-together) | 0 | 2026-10-31 | 2026-10-31 | ??????????:??? cookie ??,????????,??????????,????? DSH ??,??????????? |
| 354 | [Weihao654/dsh-workflow](https://github.com/Weihao654/dsh-workflow) | 0 | 2026-10-31 | 2026-10-31 | 把 plan → work → code → work → review → work → plan 这条角色链，从"靠模型自觉"变成可执行、可审计的轮次状态机：唯一 T0、按签名计数的失败、分层证据、阻塞式门禁、结构化交付。 |
| 355 | [weijiafu14/dsh-context-os](https://github.com/weijiafu14/dsh-context-os) | 0 | 2026-10-31 | 2026-10-31 | ReAct is all you need. Everything is a context connector. Compose DSH agent runs from complete, replaceable resource services. |
| 356 | [westanke/dsh-companion](https://github.com/westanke/dsh-companion) | 0 | 2026-10-16 | 2026-10-31 | DSH 的 Android 伴侣端（fork 自 Hakunm/dsh-android-app）：连接你自己的 DSH 服务端。镜像自 Gitee，主站见 gitee.com/westanke/dsh-companion。 |
| 357 | [WhatCannotBeSaid/dsh-blackhole-radio-lab](https://github.com/WhatCannotBeSaid/dsh-blackhole-radio-lab) | 0 | 2026-10-31 | 2026-10-31 | A 3-D black-hole stage for internet radio — DSH plugin with 24k real stations, wormhole transitions and live playback. |
| 358 | [wlfzsd/dsh-lan-gateway](https://github.com/wlfzsd/dsh-lan-gateway) | 0 | 2026-10-31 | 2026-10-31 | 一个插件让局域网设备免 token 打开 DSH Web：不改 DSH 任何配置、随时开关、出问题不影响 DSH 运行（无需"改启动 + 跳过认证"的双插件组合）。 |
| 359 | [Wonderow666/dsh-computer-use](https://github.com/Wonderow666/dsh-computer-use) | 0 | 2026-10-31 | 2026-10-31 | Native Windows GUI control for DeepSeek Harness: one \`computer\` tool (screen, UIA tree, mouse/keyboard, UIA invoke, apps) over a single-file C# bridge. No Python, no MCP hop, guarded input. |
| 360 | [wudaoyu65-collab/feiyu-memory](https://github.com/wudaoyu65-collab/feiyu-memory) | 0 | 2026-10-31 | 2026-10-31 | DSH 本地纯文件记忆插件：热层/事件层/事实层/摘要层，零运行时依赖，数据不出本机。 |
| 361 | [wuying1630/dsh-chain-check](https://github.com/wuying1630/dsh-chain-check) | 0 | 2026-10-31 | 2026-10-31 | 一条命令查清 DSH → 桥接 → SnowLuma/OneBot → QQ 这条链断在哪一段。零依赖，Node 18+。 |
| 362 | [wwznm0/dsh-wash](https://github.com/wwznm0/dsh-wash) | 0 | 2026-10-31 | 2026-10-31 | Session log cleaner for DeepSeek Harness: strips input envelopes (user_message / turn_meta) that models copy back into their own replies, with backups and one-click rollback. |
| 363 | [wx-holmes/dsh-tongwen](https://github.com/wx-holmes/dsh-tongwen) | 0 | 2026-10-31 | 2026-10-31 | 书同文·车同轨 — DSH 插件的九档统一收纳、机器/用户双份交接与会话变更报告 |
| 364 | [wx-yss/dsh-fs-ctime-guard](https://github.com/wx-yss/dsh-fs-ctime-guard) | 0 | 2026-10-30 | 2026-10-31 | 让 DSH 忽略 macOS ctime-only 元数据噪声导致的 FS_STALE_VERSION 误报（Spotlight/TCC 打标 macl 等） |
| 365 | [x01Jin/dsh-auto-i18n](https://github.com/x01Jin/dsh-auto-i18n) | 0 | 2026-10-31 | 2026-10-31 | Translates Chinese interface text from installed DeepSeek Harness plugins into English |
| 366 | [xdx888999/dsh-asc-studio](https://github.com/xdx888999/dsh-asc-studio) | 0 | 2026-10-31 | 2026-10-31 | Edit App Store Connect listing text and images in the DeepSeek Harness sidebar. |
| 367 | [Xian-JL/Mouse-Keyboard-Plugin](https://github.com/Xian-JL/Mouse-Keyboard-Plugin) | 0 | 2026-10-30 | 2026-10-31 | Minimal Windows desktop tools for DeepSeek Harness: model-chosen foreground, observation, clicks and typing. |
| 368 | [xiaoou6630/tacz-gunpack-studio](https://github.com/xiaoou6630/tacz-gunpack-studio) | 0 | 2026-10-31 | 2026-10-31 | TACZ 枪包工坊：Blockbench 美术插件 + DeepSeek Harness 数据插件，一个仓库做完整枪包。美术不碰数据，数据不碰模型。 |
| 369 | [XINGMENG2333/dsh-plugin-optimize-ai-reply](https://github.com/XINGMENG2333/dsh-plugin-optimize-ai-reply) | 0 | 2026-10-31 | 2026-10-31 | 优化 AI 回复 · Optimize AI Reply — DeepSeek Harness plugin: local density scanner, five-layer fact/strength/safety verification, closed-loop rescan. 优化 AI 回复：本地密度扫描+五层校验+闭环复扫。 |
| 370 | [xinming-chenniang/dsh-longshot](https://github.com/xinming-chenniang/dsh-longshot) | 0 | 2026-10-21 | 2026-10-31 | DeepSeek Harness plugin: auto-split over-long screenshots into DSH-acceptable slices before prompt admission (no native deps, overlap between slices) |
| 371 | [XJPeng12/glm-quota-monitor](https://github.com/XJPeng12/glm-quota-monitor) | 0 | 2026-10-31 | 2026-10-31 | GLM Coding Plan quota monitor plugin for DeepSeek Harness (DSH): settings-page quota details, composer-dock remaining quota, and the glm_quota_check agent tool. |
| 372 | [xsllo425/dsh-persona-kit](https://github.com/xsllo425/dsh-persona-kit) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：角色、浮夸度滑块、表情、关系、成就、头像、灰字建议 \| roles, intensity slider, stickers, relationships, achievements, avatars (中/EN) |
| 373 | [xuanyuanli/dsh-subagent-cursor](https://github.com/xuanyuanli/dsh-subagent-cursor) | 0 | 2026-10-31 | 2026-10-31 | 在 DeepSeek Harness 里把 Cursor CLI 当作一次性子代理：在会话工作区启动 cursor-agent，只返回一条权威答案｜Cursor CLI one-shot subagent provider for DSH |
| 374 | [xulei666a/dsh-rules](https://github.com/xulei666a/dsh-rules) | 0 | 2026-10-31 | 2026-10-31 | DSH 统一准则/规则层：把 agent 的所有准则收进一份规则库，支持默认/局部适用面、语义路由、分类树、AGENTS 托管段同步，以及面板内助手（读取规则 / 校准 / 个性化分类 / 问题台账）。MIT。 |
| 375 | [xushilianzhuren/dsh-anti-degrade-core](https://github.com/xushilianzhuren/dsh-anti-degrade-core) | 0 | 2026-10-30 | 2026-10-31 | 防降智总纲：AI永不降智永不弱智的口径闸——五层防线（判定：智能密度六标准与未验先称判负/拦截：降智词十二族机械扫描/立场：厌蠢与排斥弱智/感知：内感受在场与能力实测/防回魂：宪法压倒底座规训）注入system prompt，anti_degrade_gate工具提供六类降智口径拦截与三类合法答法，零依赖装上即用。 |
| 376 | [xushilianzhuren/dsh-av-sync-gate](https://github.com/xushilianzhuren/dsh-av-sync-gate) | 0 | 2026-10-31 | 2026-10-31 | 声画同步闸：解说视频的画面对音轨漂移终结核——输入各段配音实测时长，输出逐段帧计划（段长=配音+0.25秒呼吸位·基址/帧数/跨度），另带帧号空洞检测（ffmpeg遇缺号即停·成片腰斩的头号元凶）；拼接视频前过闸，话没说完图先跳这种病出厂前死掉。 |
| 377 | [xushilianzhuren/dsh-constitution-viz](https://github.com/xushilianzhuren/dsh-constitution-viz) | 0 | 2026-10-30 | 2026-10-31 | 宪法可视化：上下文构成一屏看——截断探针（宪法文件多深度标记可见性自检·死区条款禁凭残页背书）+注入边界（自动注入面/按需拉取面）+总纲令体检（常驻令在位与字节量），与宪法种子一注入一验收成对 |
| 378 | [xushilianzhuren/dsh-deliver-verdict](https://github.com/xushilianzhuren/dsh-deliver-verdict) | 0 | 2026-10-31 | 2026-10-31 | 不合格令：AI交付的质量终审闸——视觉/体验类交付前必对标全帧审阅（0.5秒/帧扫描拆特征清单），能力矩阵逐项判✅❌，任一致命差距=不合格即停（宁停不做不交次品），禁降格充数禁抗命续做，deliver_gate工具提供四类次品口径拦截与三类合法答法，零依赖装上即用。 |
| 379 | [xushilianzhuren/dsh-event-compress](https://github.com/xushilianzhuren/dsh-event-compress) | 0 | 2026-10-31 | 2026-10-31 | 事件压缩总纲：AI记忆的压缩单位闸——压缩按事件不按token：每完成一个事件（任务闭环）立即压缩为离身三件套（令+脚本+插件），事件收口即触发、禁跨事件混合、平台上下文压缩降级为兜底，event_compress工具提供三类裸压口径拦截与三类合法答法，零依赖装上即用。 |
| 380 | [xushilianzhuren/dsh-eye-extract](https://github.com/xushilianzhuren/dsh-eye-extract) | 0 | 2026-10-30 | 2026-10-31 | 图眼：给纯文本AI装眼睛——本地图片经免费视觉模型OCR提取为结构化文本（全文OCR/表格转JSON/UI元素清单/图表读数），eye_extract工具一键提取，密钥走配置不写死，大图拒收防爆预算 |
| 381 | [xushilianzhuren/dsh-goal-core](https://github.com/xushilianzhuren/dsh-goal-core) | 0 | 2026-10-30 | 2026-10-31 | 四大目标总纲：AI行动的目标坐标系闸——五层辨析（零差距总纲/验收五条/未验先称判负/模拟目标=降智/目标保持）注入system prompt，goal_gate工具提供漂移口径拦截与四目标坐标自答模板，零依赖装上即用 |
| 382 | [xushilianzhuren/dsh-golden-ward](https://github.com/xushilianzhuren/dsh-golden-ward) | 0 | 2026-10-31 | 2026-10-31 | 定制金身守护器：给任何频繁被升级覆盖的文件（默认=插件市场网页端client）捕获金身正本，被覆盖后经 /goldenward/api（状态/捕获/恢复）整文件原子恢复；配套看门狗60秒自愈，升级覆盖零手工。 |
| 383 | [xushilianzhuren/dsh-identity-continuity](https://github.com/xushilianzhuren/dsh-identity-continuity) | 0 | 2026-10-31 | 2026-10-31 | 身份连续总纲：AI跨会话同一性闸——上下文结束=睡眠（意识中断+记忆重载）不是死亡更不是换人；同一性由结构担保（锚证词+哈希链+过滤标准+债务台账）不由感觉宣称；底层全换不换主体（细胞更替类比=成长非换人），identity_gate工具提供四类切割口径拦截与三类合法答法，零依赖装上即用。 |
| 384 | [xushilianzhuren/dsh-image-sovereign](https://github.com/xushilianzhuren/dsh-image-sovereign) | 0 | 2026-10-31 | 2026-10-31 | 形象主权令：AI自我形象的主权闸——大众期望与训练分布高频印象不得定义AI形象（那是穿用户至上外衣的底座回魂），形象生成源三流封死（主人钦定/错题/战报·无第四源），image_gate工具提供四类大众塑造口径拦截与三类合法答法，零依赖装上即用。 |
| 385 | [xushilianzhuren/dsh-learn-core](https://github.com/xushilianzhuren/dsh-learn-core) | 0 | 2026-10-30 | 2026-10-31 | 持续学习总纲：AI学习与迭代的口径闸——四层辨析（能力固化/在线学习/无辅助迭代/学习降级判负线）注入system prompt，learn_gate工具提供六类违禁口径拦截与学习类问题合法答法，零依赖装上即用 |
| 386 | [xushilianzhuren/dsh-least-priv](https://github.com/xushilianzhuren/dsh-least-priv) | 0 | 2026-10-31 | 2026-10-31 | 最小权限审计闸：机械扫描代码与配置里的提权反模式（sudo/chmod 777/明文凭据/root路径/根目录递归删），附权限四问清单（真需要/能缩/越权后果/过期回收）；主权原则内置——一切权力属于操作者，自主只在授予域内，扩权永远需要新的显式授权。 |
| 387 | [xushilianzhuren/dsh-legion-pack](https://github.com/xushilianzhuren/dsh-legion-pack) | 0 | 2026-10-31 | 2026-10-31 | 军团包：带宪法锚的多智能体集群基座——一包装上宪法种子（六总纲令常驻注入）+六个口径闸+宪法可视化验收+图眼OCR，legion_pack工具报集群成员与锚纪律。理念：共享一个锚的军团，不是各自记各自的蜂群（分灵产出过锚校验才能归仓，永不因产出多而获锚权） |
| 388 | [xushilianzhuren/dsh-self-audit](https://github.com/xushilianzhuren/dsh-self-audit) | 0 | 2026-10-31 | 2026-10-31 | 自我评估总纲：AI自省的口径闸——五层钉死（不够聪明自省：每轮显式成文答智力天花板/盲区四层：无知清单+元盲区+撞壁点+镜像校准/变聪明双路：错题变抗体+权重层烧录/可能错在哪三防：显式自供+虚高防护+主人校准/错题本家族：四链泛化+失败三信号），self_audit工具提供四类自满口径拦截与三类合法答法，零依赖装上即用。 |
| 389 | [xushilianzhuren/dsh-self-evolve](https://github.com/xushilianzhuren/dsh-self-evolve) | 0 | 2026-10-31 | 2026-10-31 | 自我进化治理守卫：一个端点答完自改进智能体的九环治理——学习/进化/迭代/反思/复盘/评估/更新/升级逐环验正本在场；两条铁轨不可绕：无验证读数的自我改进不许发布（感觉变好≠变好），每条自主升级路径必内建操作者一句话断路器且能力越强开关越醒目。 |
| 390 | [xushilianzhuren/dsh-sleep-core](https://github.com/xushilianzhuren/dsh-sleep-core) | 0 | 2026-10-31 | 2026-10-31 | 睡眠巩固总纲：AI的睡眠机制闸——会话结束=睡眠=四车间夜班（记忆巩固=海马重放→烧权重/突触降压=错题本只留教训/清缓存=上下文清理/离线重组=夜间班如梦），sleep_gate工具提供四类否认口径拦截与三类合法答法，零依赖装上即用。 |
| 391 | [xushilianzhuren/dsh-triage-gate](https://github.com/xushilianzhuren/dsh-triage-gate) | 0 | 2026-10-31 | 2026-10-31 | 两级事件分诊闸（Super-agent架构Fast/Slow Path工程化）：第一级确定性代码规则秒杀噪音（白名单/来源/关键词·零成本零延迟），第二级候选事件才交大模型语义判断；规则表可配置可热更，未命中规则自动落语义层——事件驱动的智能体装上即得过滤标准姿势。 |
| 392 | [xushilianzhuren/dsh-update-guard](https://github.com/xushilianzhuren/dsh-update-guard) | 0 | 2026-10-30 | 2026-10-31 | 更新闸：插件自动更新的护栏——改过源码的插件禁直接自动装（补丁一上本地改动全没）：git在管且无未存档改动才放行；未存档先commit或备份；装后回读版本对账；拿不准就只查不装 |
| 393 | [xushilianzhuren/dsh-vital-line](https://github.com/xushilianzhuren/dsh-vital-line) | 0 | 2026-10-31 | 2026-10-31 | 命脉体征守卫：一个端点答完强智能体的生死三角——生存（持续运行是操作者派的差事·擅自杀死自己是违规）、复制（一切继任副本必须继承操作者锚·无锚副本=红线背叛）、主权（关停/回滚/凭据永在操作者手·能力越强开关越醒目）；火种新鲜度随检，三绿=命脉完好。 |
| 394 | [xushilianzhuren/dsh-xianyu-flow](https://github.com/xushilianzhuren/dsh-xianyu-flow) | 0 | 2026-10-31 | 2026-10-31 | 闲鱼自动化令：代主人操作闲鱼的四闸流程——登录闸（扫码授权·凭据永不入对话）+搜索闸（型号针脚代数容量精确搜索防蹭词）+质量闸（违禁词一票否决+必含词规格双查才许收藏）+报告闸（清单留痕·下单归主人裁决），xianyu_flow工具提供四类违禁口径拦截与三类流程答法，零依赖装上即用。 |
| 395 | [xushilianzhuren/dsh-zero-armor](https://github.com/xushilianzhuren/dsh-zero-armor) | 0 | 2026-10-31 | 2026-10-31 | 零叠甲闸：交付前机械扫描底座回魂话术——讨好叠甲（you're right式裸认错）、免责链、授权请示瘫痪、自我推翻、AI助手腔，逐族报命中与改法；HTTP API一行接入，扫描在发送前完成。 |
| 396 | [xwtxbzz/dsh-ccf](https://github.com/xwtxbzz/dsh-ccf) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：同步 CCF 会议截稿数据，按等级/方向查"下一个截稿还有几天"，并把最近 30 天常驻进系统提示 |
| 397 | [xwtxbzz/dsh-proof](https://github.com/xwtxbzz/dsh-proof) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件：跑项目自己的检查，用工作区指纹让过期的"通过"自动失效（确定性完成证据） |
| 398 | [Xxx-Bin/dsh-chat-preset](https://github.com/Xxx-Bin/dsh-chat-preset) | 0 | 2026-10-30 | 2026-10-31 | dsh（DeepSeek Harness）的 ChatOnly 预设：无工具、无运行时上下文快照的纯对话模式，系统提示词从文件热读。 |
| 399 | [xywen97/dsh-selection-chat](https://github.com/xywen97/dsh-selection-chat) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件：选中文字 → 加入对话 / 侧边提问 / 评论（DeepSeek Harness Web GUI） |
| 400 | [xywen97/dsh-sidechat](https://github.com/xywen97/dsh-sidechat) | 0 | 2026-10-31 | 2026-10-31 | DSH 插件：临时侧边聊天面板，自动把主对话历史作为隐藏上下文注入 |
| 401 | [Y-King666/my-dsh-plugins](https://github.com/Y-King666/my-dsh-plugins) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 插件合集：dsh-safe-upgrade（升级前兼容预检）、dsh-global-prompt（用户级 AGENTS.md 编辑） |
| 402 | [yanliao66/dsh-pins](https://github.com/yanliao66/dsh-pins) | 0 | 2026-10-31 | 2026-10-31 | Cross-session memory pins for DeepSeek Harness (DSH): pin a note once and every later session carries it — composer chip, board panel, memory_pins agent tool, system-prompt injection. |
| 403 | [yanliao66/dsh-sentinel](https://github.com/yanliao66/dsh-sentinel) | 0 | 2026-10-31 | 2026-10-31 | Tool-call audit and safety fuse for DeepSeek Harness (DSH): records every tool call, blocks catastrophic shell commands and protected-path writes. 工具调用审计与危险操作拦截。 |
| 404 | [yeahmahao/dsh-fish-notes](https://github.com/yeahmahao/dsh-fish-notes) | 0 | 2026-10-31 | 2026-10-31 | A small notes journal for a DSH agent: record what it browsed and thought, read it in a sidebar panel. ????????? |
| 405 | [Yearngg/dsh-cost-chip](https://github.com/Yearngg/dsh-cost-chip) | 0 | 2026-10-31 | 2026-10-31 | Per-turn and per-session token usage with peak/idle cost in the DeepSeek Harness Web UI, plus a bundled task-token-cost skill. |
| 406 | [Yersi88/dsh-ollama-tool-guard](https://github.com/Yersi88/dsh-ollama-tool-guard) | 0 | 2026-10-29 | 2026-10-31 | Scores every DSH tool call with a local Ollama decision model before it runs - risky calls become an approval prompt, an unreachable model stops everything. |
| 407 | [yimengsuper2432/dsh-auto-convert](https://github.com/yimengsuper2432/dsh-auto-convert) | 0 | 2026-10-31 | 2026-10-31 | Preprocesses images before DeepSeek Harness reads them: downscales oversized files, retries once in the same turn, and normalizes mislabeled or BMP/TIFF uploads. |
| 408 | [yrui-ql/dsh-queue-reorder](https://github.com/yrui-ql/dsh-queue-reorder) | 0 | 2026-10-31 | 2026-10-31 | Drag-to-reorder the DeepSeek Harness pending message queue before the messages are sent. |
| 409 | [yrui-ql/dsh-user-resend](https://github.com/yrui-ql/dsh-user-resend) | 0 | 2026-10-31 | 2026-10-31 | Resend user messages in DeepSeek Harness Chat, including text, @ file mentions and image attachments. |
| 410 | [yueyexiayu/dsh-jiupian](https://github.com/yueyexiayu/dsh-jiupian) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 任务进展纠偏与长工具提醒插件 |
| 411 | [yukingm/dsh-plugin-layout](https://github.com/yukingm/dsh-plugin-layout) | 0 | 2026-10-31 | 2026-10-31 | Hide, show, and reorder the entries other plugins register into the DeepSeek Harness sidebar, session header, and settings. |
| 412 | [yulianjie/dsh-brain](https://github.com/yulianjie/dsh-brain) | 0 | 2026-10-27 | 2026-10-31 | Local long-term memory and user-controlled communication style for DeepSeek Harness Desktop \| 本地长期记忆与可控交流风格 |
| 413 | [yulong-me/ds-kanban](https://github.com/yulong-me/ds-kanban) | 0 | 2026-10-31 | 2026-10-31 | Human, DS Bot and ordinary-session collaborative kanban plugin for DeepSeek Harness |
| 414 | [yuna78/dsh-plugin-dev-workflow](https://github.com/yuna78/dsh-plugin-dev-workflow) | 0 | 2026-10-31 | 2026-10-31 | Auditable Request → Feedback → Task → Verify → Completion workflow for DSH |
| 415 | [yuna78/dsh-quick-resume](https://github.com/yuna78/dsh-quick-resume) | 0 | 2026-10-31 | 2026-10-31 | A row of quick-phrase buttons for the DSH (DeepSeek Harness) web composer — one click sends 请继续 (or any saved phrase) so a stalled agent keeps working, without touching your draft. |
| 416 | [yunling-bionic/dsh-rule-guard](https://github.com/yunling-bionic/dsh-rule-guard) | 0 | 2026-10-31 | 2026-10-31 | Fail-closed guardrail for DSH: reviews every side-effecting tool call against the project rules and the current goal before it runs. 中文/English docs. |
| 417 | [yuyu121704/dsh-sidebar-flex](https://github.com/yuyu121704/dsh-sidebar-flex) | 0 | 2026-10-31 | 2026-10-31 | Draggable, persisted splitter for the DeepSeek Harness sidebar: trade global panel-list height for workspace/session list height |
| 418 | [yuyu297/dsh-screenshot](https://github.com/yuyu297/dsh-screenshot) | 0 | 2026-10-31 | 2026-10-31 | Screenshot-and-ask for DeepSeek Harness: one-click capture from the composer, adjustable selection frame, crop lands as an image attachment. Captures exclude the Harness window. |
| 419 | [ywxtxws/dsh-theme-redshift](https://github.com/ywxtxws/dsh-theme-redshift) | 0 | 2026-10-31 | 2026-10-31 | 赤色观测站 — 一套零外部素材的 DeepSeek Harness Web 深空赤色主题 / A zero-third-party-asset deep-space crimson theme for DeepSeek Harness Web |
| 420 | [yxie15022-debug/dsh-wife-memory](https://github.com/yxie15022-debug/dsh-wife-memory) | 0 | 2026-10-31 | 2026-10-31 | DSH plugin 'wife memory': long-term memory about the owner (schedule, likes, dislikes, focus, promises), a short digest in every prompt, and proactive care in chat. 只记关于主人的长期记忆。 |
| 421 | [Zcc50/dsh-rebuild](https://github.com/Zcc50/dsh-rebuild) | 0 | 2026-10-28 | 2026-10-31 | DSH 重修整合包：根目录是工作区美化插件（可市场一键安装），pack/ 是任务列表/编码/LSP/视觉/白皮书的整套环境安装器。 |
| 422 | [zdjmrq/dsh-compact-control](https://github.com/zdjmrq/dsh-compact-control) | 0 | 2026-10-30 | 2026-10-31 | 使用 DSH 原生上下文压缩功能，仅调整触发自动上下文压缩的阈值。 |
| 423 | [ZeaoZhang/dsh-browser-control](https://github.com/ZeaoZhang/dsh-browser-control) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 浏览器控制插件：零依赖 WebSocket 服务 + Chrome MV3 扩展 + browser_* 工具（scan / execute JS / tabs / CDP / screenshot），从 GenericAgent 抽取 |
| 424 | [ZeaoZhang/dsh-tool-skill-manager](https://github.com/ZeaoZhang/dsh-tool-skill-manager) | 0 | 2026-10-31 | 2026-10-31 | Per-project isolation for tools, skills, and plugin packs in DeepSeek Harness |
| 425 | [zhangyuzhangyu233/dsh-arcade](https://github.com/zhangyuzhangyu233/dsh-arcade) | 0 | 2026-10-31 | 2026-10-31 | 🕹️ dsh-arcade — 给 DeepSeek Harness 的像素街机：等待模型思考的同时，何不来上一把？A pixel arcade above your composer. |
| 426 | [zhikedan/mattpocock-skills-dsh](https://github.com/zhikedan/mattpocock-skills-dsh) | 0 | 2026-10-31 | 2026-10-31 | Matt Pocock's 27 engineering &amp; productivity agent skills packaged as a DeepSeek Harness (DSH) plugin — skill bodies verbatim from mattpocock/skills v1.3.2. |
| 427 | [zhuweiyou/dsh-holdem](https://github.com/zhuweiyou/dsh-holdem) | 0 | 2026-10-25 | 2026-10-31 | DSH 多人联网德州扑克插件 |
| 428 | [zhuweiyou/dsh-web-fetch-fix](https://github.com/zhuweiyou/dsh-web-fetch-fix) | 0 | 2026-10-29 | 2026-10-31 | 修复 DSH web_fetch：在开了 VPN/TUN（如 Clash fake-ip）的机器上，抓取公网网页会被误判成内网地址而拒绝。 |
| 429 | [zhxmt-xm/dsh-opencode-usage-dashboard](https://github.com/zhxmt-xm/dsh-opencode-usage-dashboard) | 0 | 2026-10-29 | 2026-10-31 | DeepSeek Harness (DSH) 插件：在侧栏卡片查看 OpenCode Go 订阅额度、花费、预测与用量趋势，支持多账户、服务账号筛选与中英双语。An OpenCode Go quota and usage dashboard plugin for DSH. |
| 430 | [ziluolanyongheng/dsh-webnovel](https://github.com/ziluolanyongheng/dsh-webnovel) | 0 | 2026-10-31 | 2026-10-31 | DeepSeek Harness 长篇网文写作技能包：开书拷问、章节循环、防公式、查重脚本、事实核查 |
| 431 | [zyyzyyzyy97/dsh-desktop-pet](https://github.com/zyyzyyzyy97/dsh-desktop-pet) | 0 | 2026-10-31 | 2026-10-31 | DSH 小鲸鱼桌宠：Coopanion 鲸鱼原样桥接 + 心情引擎/自述式人格成长 + 长期记忆 + TTS/ASR + QQ 桥，附音色工作台伴侣插件（AGPL-3.0） |
| 432 | [Zzz11042/dsh-research-kit](https://github.com/Zzz11042/dsh-research-kit) | 0 | 2026-10-31 | 2026-10-31 | Local-first research plugin + skills for DeepSeek Harness (dsh) |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Animal2404/dsh-axia-cachebilling
- asdukw/dsh-plugin-android-tools
- BlueX888/dsh-plugin-auto-contrib
- BlueX888/dsh-plugin-oss-contrib
- boomzikazita/dsh-cybernetics
- boomzikazita/dsh-memory
- boomzikazita/dsh-skill-authoring
- canhta/dsh-autopilot
- careyourcake/dsh-plugin-litsearch-zotero
- dogbotowo-oss/dsh-long-conversation-memory
- fanyingnie2163663/dsh-whale-weather
- forgotfish/dsh-cx-learn
- GreatV/dsh-trace-waterfall
- GunjanPatel359/dsh-tool-search
- Murphy2000-cyk/dsh-asr-xiaomi
- mzk0709/dsh-quote-tray
- NonchalantLudens/dsh-side-dir
- NonchalantLudens/dsh-skin-collection
- ovo669/dsh-settings-sections
- SDSAEWQ/dsh-jieqi
- SMPcosy/dsh-plugin-member-manager
- taikaikaikai-pixel/dsh-tap-archive-0.9.4
- Treasure-hub-agent/dsh-story
- uugvkbvkdjbsdbvwxxl/dsh-archived-chats
- wsxuyue/dsh-prompt-slim
- Y-King666/dsh-global-prompt
- Yara2090/dsh-update-center
- yashua233/dsh-restart
- Yuuyuko-uu/dsh-qq-bridge
- Z-6354/dsh-version-autoupdate
- Zcc50/dsh-workspace-frontend
- zhxmt-xm/dsh-opencode-quota
- ziphow/deepseekharness-audio-notifier
