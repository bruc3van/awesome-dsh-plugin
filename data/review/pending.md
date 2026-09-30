# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-30**
- 快照日期 / Snapshot date: **2026-09-30 (UTC)**
- 待审核 / Pending: **245**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **32**
- Star 异常增长 / Star-growth alerts: **4** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-29** / vs previous snapshot **2026-09-29**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 11098 | +377 | 413 | 47d | 日增百星 | 日增 +377★；已不进榜单 |
| ⚠️ [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 已核准 / approved | 3675 | +191 | 132 | 42d | 日增百星 | 日增 +191★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 5138 | +171 | 242 | 46d | 日增百星 | 日增 +171★；已不进榜单 |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 1704 | +136 | 55 | 46d | 日增百星 | 日增 +136★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [dsh-wsl-workspace-maintainers/dsh-wsl-workspace](https://github.com/dsh-wsl-workspace-maintainers/dsh-wsl-workspace) | 61 | 2026-08-14 | 2026-09-30 | WSL workspace support for DeepSeek Harness——无缝的 WSL 工作区使用体验，无需在 WSL 之中再安装一个dsh，安装该插件后在 GUI 里直接添加 WSL 工作区即可。WSL workspace support for DeepSeek Harness — Enjoy a seamless WSL workspace experience without needing to install dsh inside WSL. Once this plugin is installed, you can directly add a WSL workspace right from the GUI. |
| 2 | [aerovato/operator-memory](https://github.com/aerovato/operator-memory) | 56 | 2026-08-16 | 2026-09-30 | The self-improving context engine for coding agents. |
| 3 | [aa2246740/dsh-model-fusion](https://github.com/aa2246740/dsh-model-fusion) | 25 | 2026-09-27 | 2026-09-30 | Fusion for DeepSeek Harness: a frontier Lead plans and reviews, a much cheaper Sidekick writes the code — frontier results at a discount. |
| 4 | [Ephemeral-AI-Lab/mayfly](https://github.com/Ephemeral-AI-Lab/mayfly) | 20 | 2026-09-03 | 2026-09-30 | Mayfly terminal UI bundle for DeepSeek Harness |
| 5 | [harrylabsj/kiwi](https://github.com/harrylabsj/kiwi) | 20 | 2026-08-03 | 2026-09-30 | A2A commerce negotiation runtime + DeepSeek Harness (dsh) plugin. 安装 Kiwi，让 AI 买家找到你的商品、向你询价；库存、底价和客户数据仍留在你的系统中。 |
| 6 | [joeseesun/qiaomu-rss-dsh](https://github.com/joeseesun/qiaomu-rss-dsh) | 7 | 2026-09-30 | 2026-09-30 | 在 DeepSeek Harness 中阅读 RSS，与原生 AI 对话伴读文章 \| RSS reading with native AI companion for DeepSeek Harness |
| 7 | [Rainpomelo/dsh-liquid-glass-theme](https://github.com/Rainpomelo/dsh-liquid-glass-theme) | 6 | 2026-08-18 | 2026-09-30 | DeepSeek Harness - 液态玻璃与动态壁纸主题 (WebGL 物理透镜、动态壁纸与多层毛玻璃) #dsh-plugin |
| 8 | [aa2246740/dsh-notch](https://github.com/aa2246740/dsh-notch) | 5 | 2026-09-10 | 2026-09-30 | Native macOS Notch for DSH sessions, inline answers and animated task status |
| 9 | [busabase/busabase-dsh-plugin](https://github.com/busabase/busabase-dsh-plugin) | 5 | 2026-09-02 | 2026-09-30 | Deepseek Harness Plugin for Busabase |
| 10 | [LisonEvf/dsh-stock-panel](https://github.com/LisonEvf/dsh-stock-panel) | 5 | 2026-09-02 | 2026-09-30 | 把 DSH 会话窗口变成 A 股盯盘执行台：行情仪表盘 · 盘后复盘七步 · 模型作战思路 · 自挖板块（无监督共动聚类 + LLM 命名）· 个股工作台 · 选股筛选 · 监控提醒 |
| 11 | [vecnode/vncode](https://github.com/vecnode/vncode) | 5 | 2026-09-08 | 2026-09-30 | vncode 🤖 Desktop/Web Agent IDE with core DSH. Launchers run on Windows, macOS and Linux - the Windows half is PowerShell, the macOS/Linux half is plain POSIX shell. |
| 12 | [HerTa-st/Herta-dsh](https://github.com/HerTa-st/Herta-dsh) | 4 | 2026-09-19 | 2026-09-30 | dsh插件版herta |
| 13 | [sakanamaru/dsh-minato](https://github.com/sakanamaru/dsh-minato) | 3 | 2026-08-15 | 2026-09-30 | dsh-shio — 社区版本机部署运维套件 for DeepSeek Harness (dsh): install / start / monitor, backup &amp; restore, diagnose and quarantine broken plugins (unofficial) · 安装 / 启动监控 / 备份恢复 / 插件诊断与隔离 |
| 14 | [wbb316/dsh-profile-sync](https://github.com/wbb316/dsh-profile-sync) | 3 | 2026-09-30 | 2026-09-30 | profile 间插件迁移：把网页版（web）的插件集安全牵引到桌面端（desktop）—— 算差异、预检、生成退出后执行的脚本、重启后核对 |
| 15 | [Yiheng-guo/dsh-boot-animation-pro](https://github.com/Yiheng-guo/dsh-boot-animation-pro) | 3 | 2026-09-30 | 2026-09-30 | DSH 片头开机动画增强版：播放控制、触发规则、会话名单、分时段片头、片库管理、中英双语。A full-frame intro animation for DSH. Fork of NativeDog1/dsh-boot-animation. |
| 16 | [gongstudent/dsh-models-plus](https://github.com/gongstudent/dsh-models-plus) | 2 | 2026-09-18 | 2026-09-30 | DeepSeek Harness profile bundle：提供本地路由代理兼容 OpenAI/Anthropic API，并为模型设置页增加搜索、批量取消勾选及防卡顿开关。 |
| 17 | [longhao666666/dsh-session-delete](https://github.com/longhao666666/dsh-session-delete) | 2 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：侧栏一键删除会话（先归档再清理磁盘日志，运行中的会话受保护） |
| 18 | [shuiqian520/dsh-session-delete](https://github.com/shuiqian520/dsh-session-delete) | 2 | 2026-09-30 | 2026-09-30 | DSH plugin: permanently delete a session from the sidebar menu, and retry a user message or an assistant reply. |
| 19 | [TC635807/better-crawler4agent](https://github.com/TC635807/better-crawler4agent) | 2 | 2026-09-12 | 2026-09-30 | When I was using agents, I found that most agents rely on curl commands to scrape web pages, which has a very low success rate and is slow, so I made this. |
| 20 | [xmwpoi/dsh-approval-center](https://github.com/xmwpoi/dsh-approval-center) | 2 | 2026-09-25 | 2026-09-30 | DSH 0.1.7-rc.2 的 Windows 审批中控台：通知中心批准/拒绝、并发队列与取消清理、SQLite 审计。通过 GitHub Releases 分发。 |
| 21 | [17897693/dsh-wen](https://github.com/17897693/dsh-wen) | 1 | 2026-09-30 | 2026-09-30 | DSH 办公文档插件：docx/xlsx/pptx/pdf/odf/csv/html 读写改与互转 + 离线 OCR（自用为主，不承诺维护） |
| 22 | [2JumpSinA/dsh-context-guard](https://github.com/2JumpSinA/dsh-context-guard) | 1 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin that tells you to wrap up and start a new session before the session gets too long: badge + one-shot banner from the official contextPressure projection, and from 45% occupancy it auto-drafts a machine-facts handoff block into your working directory. Zero context tax, bilingual zh/en. |
| 23 | [adsikito/dsh-study-steward](https://github.com/adsikito/dsh-study-steward) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness agent preset: a study-and-execution steward persona on the full Standard tool surface, shipped with a generic Markdown rule pack for plans, vocabulary, algorithms, review and archiving. |
| 24 | [aitcmhk-web/DSH-bot](https://github.com/aitcmhk-web/DSH-bot) | 1 | 2026-09-28 | 2026-09-30 | Telegram / WeChat bridge plugin for DeepSeek Harness (DSH): bind your bot to a DSH workspace in one command, with handoff continuity between sessions. |
| 25 | [ASDLYF/Bilibili-Quark-Transform](https://github.com/ASDLYF/Bilibili-Quark-Transform) | 1 | 2026-09-29 | 2026-09-30 | B 站视频批量下载（可选分辨率 / 分集）并上传到夸克网盘 |
| 26 | [aujurd22/dsh-flymemory](https://github.com/aujurd22/dsh-flymemory) | 1 | 2026-09-30 | 2026-09-30 | Long-term memory for DeepSeek Harness: 15 FlyMemory MCP tools, automatic recall and capture hooks, and a supervised local engine. |
| 27 | [better-er/dsh-mobile-drawer](https://github.com/better-er/dsh-mobile-drawer) | 1 | 2026-09-29 | 2026-09-30 | 「DSH·手机适配」：窄屏下把侧栏收成悬浮小方块，点会话自动收起，并压掉切会话时的自动聚焦，免得软键盘把页面顶起。纯客户端插件。 |
| 28 | [crease123/dsh-journal-calendar](https://github.com/crease123/dsh-journal-calendar) | 1 | 2026-09-30 | 2026-09-30 | Daily journal for DeepSeek Harness: the agent records what you did and what you plan to do into one JSON file per day, and the right sidebar draws them as a calendar with checkable todos. |
| 29 | [drfai/dsh-whale-pet](https://github.com/drfai/dsh-whale-pet) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 桌宠插件：内置 Coopanion 鲸鱼娘分层精灵，随模型峰谷计价自动更换女仆装发带颜色，并常驻显示时段倒计时 |
| 30 | [Erbsen16/dsh-client-ui-dracula](https://github.com/Erbsen16/dsh-client-ui-dracula) | 1 | 2026-09-30 | 2026-09-30 | 把 VS Code 的 Dracula（吸血鬼）配色搬到 DeepSeek Harness 的网页界面，顺带做了一组程序员向的排版调优。深色模式专用，随时可整页还原。 |
| 31 | [FIZMIE/dsh-restart-button](https://github.com/FIZMIE/dsh-restart-button) | 1 | 2026-09-30 | 2026-09-30 | One-click restart for the DeepSeek Harness desktop app: a sidebar button plus an agent-callable restart route. |
| 32 | [Hercules-debug/butler-git](https://github.com/Hercules-debug/butler-git) | 1 | 2026-09-26 | 2026-09-30 | 把「我改完了」变成可验证的事实:Δ(预期改动)+ P(检测程序)全过才产生 commit。零依赖,只用 node 和 git。 \| Turn 'done' into a verifiable fact — a commit exists only if Δ + P both pass. |
| 33 | [hoyyang/dsh-project-manager](https://github.com/hoyyang/dsh-project-manager) | 1 | 2026-09-30 | 2026-09-30 | Project board for DeepSeek Harness: kanban card groups, cards linked to landfill-project memory, mounted repos and sessions. |
| 34 | [huanglianqi/dsh-math-snippets](https://github.com/huanglianqi/dsh-math-snippets) | 1 | 2026-09-30 | 2026-09-30 | LaTeX snippet expansion in the DSH web composer: Tab expands a trigger into a formula template with the caret in the first hole, then walks the rest. // expands with no Tab at all. |
| 35 | [joeseesun/qiaomu-radio-dsh](https://github.com/joeseesun/qiaomu-radio-dsh) | 1 | 2026-09-30 | 2026-09-30 | 乔木电台 DeepSeek Harness 插件 \| Live radio with themed players, mood channels and local listening history |
| 36 | [jryang1997/dsh-composer-dictation](https://github.com/jryang1997/dsh-composer-dictation) | 1 | 2026-09-30 | 2026-09-30 | Hold-to-talk dictation for the DeepSeek Harness composer: long-press the input box, release to transcribe into the draft. |
| 37 | [Justin-Mai/dsh-stock-view](https://github.com/Justin-Mai/dsh-stock-view) | 1 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 右上角行情盯盘插件：A 股 / ETF / 港股 / 美股 自选股 + 加密货币实时行情 |
| 38 | [kxdyh/dsh-agent-governor](https://github.com/kxdyh/dsh-agent-governor) | 1 | 2026-09-30 | 2026-09-30 | Two interception layers for DeepSeek Harness agents - DOL communication semantics and Sentinel tool execution governance |
| 39 | [kxdyh/dsh-usage-meter](https://github.com/kxdyh/dsh-usage-meter) | 1 | 2026-09-30 | 2026-09-30 | Dsh用量与余额仪表Live token usage and account balance meter for the DeepSeek Harness sidebar |
| 40 | [lingyingaojue/dsh-dev-mode](https://github.com/lingyingaojue/dsh-dev-mode) | 1 | 2026-09-30 | 2026-09-30 | 开发者模式：新手几句大白话讲需求，AI 自动走完「写计划 → 子代理审计划 → 极简模式后台会话写代码并编译 → 子代理 QA → 修 bug → 复测 → 交付」的 DSH 插件（agent preset）。 |
| 41 | [liuyuhao1122/dsh-hermes-memory](https://github.com/liuyuhao1122/dsh-hermes-memory) | 1 | 2026-09-30 | 2026-09-30 | Lightweight layered memory plugin for DeepSeek Harness with automatic distillation and compaction. |
| 42 | [longhao666666/dsh-ask-mode](https://github.com/longhao666666/dsh-ask-mode) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：会话内一键切换咨询模式——只读问答，仅可新建 txt/md/docx 产出 |
| 43 | [longhao666666/dsh-element-context](https://github.com/longhao666666/dsh-element-context) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：对话中圈选/关联 UI 元素，把选择器、源码位置、盒模型与计算样式注入模型提示词 |
| 44 | [Lzhimie/dsh-skin-master](https://github.com/Lzhimie/dsh-skin-master) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 皮肤大师：主题壁纸/自定义皮肤插件 —— 全局背景图片/视频、毛玻璃、输入框背景、弹出框毛玻璃、滤镜、AI 回复文本与消息气泡颜色 |
| 45 | [mike-sl-ig/dsh-agent-bridge](https://github.com/mike-sl-ig/dsh-agent-bridge) | 1 | 2026-09-30 | 2026-09-30 | Data-driven agent bridge plugin for DeepSeek Harness: JSON recipes, cross-platform launcher, recipe wizard, self-test, registry import |
| 46 | [Richardwongyk/dsh-happy-reader](https://github.com/Richardwongyk/dsh-happy-reader) | 1 | 2026-09-30 | 2026-09-30 | Happy Reader（dsh-happy-reader）—— DeepSeek Harness 桌面端阅读增强插件：隐藏输入框/上边栏、自由调整字号、中英分设正文字体、内容宽度扩展、一键全屏。dsh plugin / DSH plugin. |
| 47 | [sevastopol36/dsh-plugin-ghproxy](https://github.com/sevastopol36/dsh-plugin-ghproxy) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness native plugin: fetch GitHub files, release assets, archives, gists and api.github.com JSON through public proxy mirrors with automatic health-checked failover |
| 48 | [sevastopol36/dsh-plugin-scihub](https://github.com/sevastopol36/dsh-plugin-scihub) | 1 | 2026-09-30 | 2026-09-30 | a sci-hub search plugin for deepseek harness |
| 49 | [sknagato/dsh-plugin-fc-emulator](https://github.com/sknagato/dsh-plugin-fc-emulator) | 1 | 2026-09-30 | 2026-09-30 | dsh fc/nes模拟器 |
| 50 | [stefanohe/dsh-prefill-speed-stats](https://github.com/stefanohe/dsh-prefill-speed-stats) | 1 | 2026-09-29 | 2026-09-30 | Show prefill speed directly in the status bar. |
| 51 | [stefanohe/dsh-show-balance](https://github.com/stefanohe/dsh-show-balance) | 1 | 2026-09-29 | 2026-09-30 | Show account balance directly in the status bar. |
| 52 | [tanweiping1012-source/PhotoFilterAgent](https://github.com/tanweiping1012-source/PhotoFilterAgent) | 1 | 2026-08-22 | 2026-09-30 | 跑在 DeepSeek Harness 上的照片策展 agent：本地 Vision 分类 + 连拍组比较 + 按需视觉打分，原图只读 |
| 53 | [ThinkofRain1213/dsh-project-groups](https://github.com/ThinkofRain1213/dsh-project-groups) | 1 | 2026-09-25 | 2026-09-30 | DSH 项目分组插件：1:1 接管官方侧栏工作区浏览区，把分组从「目录所有权」摘下来，变成纯前端的项目归属，适配完全权限工作流；关闭插件即完全恢复官方行为。 |
| 54 | [TiJun-Prime/dsh-turn-delete](https://github.com/TiJun-Prime/dsh-turn-delete) | 1 | 2026-09-17 | 2026-09-30 | Delete one finished turn from a DSH session without deleting the session. A trash button removes that turn's question, reply and tool records from the conversation and the model context, while the session, later turns and the append-only log stay. Independent continuation of hanshenmesen/dsh-turn-delete (DSH 0.1.5-rc.2 + 0.2.0-rc.1). |
| 55 | [Ushio155/dsh-composer-balance](https://github.com/Ushio155/dsh-composer-balance) | 1 | 2026-09-30 | 2026-09-30 | 把 DeepSeek 余额常驻在 DSH 输入框工具行：接替已停更的 kte66/dsh-balance，修复密钥落盘、无来源策略与遮蔽内置 UI。 |
| 56 | [verneuil/dsh-opencode-go-usage](https://github.com/verneuil/dsh-opencode-go-usage) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness插件，一个极简的浮窗同时显示 DeepSeek 官方余额与 OpenCode Go 的 5h/w/m 用量 |
| 57 | [windwhiterain/dsh-subagent-templates](https://github.com/windwhiterain/dsh-subagent-templates) | 1 | 2026-09-30 | 2026-09-30 | Named subagent templates for DeepSeek Harness: a template fixes a starting route (or the route pool it resolves one from), an agent preset, and an optional persona, so a delegating agent picks by name. |
| 58 | [WuShichao/dsh-ipynb-preview](https://github.com/WuShichao/dsh-ipynb-preview) | 1 | 2026-09-30 | 2026-09-30 | Render Jupyter .ipynb notebooks in the DeepSeek Harness document preview: syntax highlighting, offline LaTeX, and zoomable figures |
| 59 | [wyq183/dsh-artifact-library](https://github.com/wyq183/dsh-artifact-library) | 1 | 2026-08-14 | 2026-09-30 | DSH 产物库 + 本地文件管理器：跨会话产物采集 / AI 精化 / 全文检索，以及基于 Everything 清单索引的文件搜索与目录浏览 |
| 60 | [xuhan242/deliverable-qa](https://github.com/xuhan242/deliverable-qa) | 1 | 2026-09-30 | 2026-09-30 | 交付物质检:排版 / AI 腔 / 敏感内容三线检查,面向 AI 协作产出的中文文档。Deliverable QA for Chinese documents: typography, AI-tone and sensitive-content checks. |
| 61 | [zcr-133/dsh-follow-edits](https://github.com/zcr-133/dsh-follow-edits) | 1 | 2026-09-30 | 2026-09-30 | Cline-style follow-along for DeepSeek Harness: open the file the agent just changed in the right Sidebar, jump to the change, and highlight the diff. |
| 62 | [0gl20shk0sbt36/dsh-deadman](https://github.com/0gl20shk0sbt36/dsh-deadman) | 0 | 2026-09-02 | 2026-09-30 | Deadman switch plugin for DeepSeek Harness (dsh): runs a command when nobody is still working |
| 63 | [0x-0cd/dsh-opencode-go-status](https://github.com/0x-0cd/dsh-opencode-go-status) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (DSH) Web plugin: OpenCode Go subscription panel — usage quota, remaining quota, subscription expiry and renewal state, all from one API-key endpoint (the public /zen/go/v1/usage API has no money and no expiry date). |
| 64 | [0x-0cd/dsh-web-search-failover](https://github.com/0x-0cd/dsh-web-search-failover) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (dsh) web_search provider: Exa primary with the official DeepSeek search provider as an automatic fallback. |
| 65 | [121212165/dsh-plugin-cache-guard](https://github.com/121212165/dsh-plugin-cache-guard) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: prefix-cache health guard. Detects prompt-instability spikes in the usage stream, estimates wasted tokens, and tells the model to stop mutating the context head. |
| 66 | [121212165/dsh-plugin-cost-ledger](https://github.com/121212165/dsh-plugin-cost-ledger) | 0 | 2026-09-28 | 2026-09-30 | DeepSeek Harness (dsh) plugin |
| 67 | [121212165/dsh-plugin-eco-scan](https://github.com/121212165/dsh-plugin-eco-scan) | 0 | 2026-09-29 | 2026-09-30 | dsh plugin: scan the dsh plugin ecosystem — collect stars/npm downloads/release assets per plugin, segment the market, compute growth deltas from snapshots, and surface high-growth plugins and niches. |
| 68 | [121212165/dsh-plugin-ide-hub](https://github.com/121212165/dsh-plugin-ide-hub) | 0 | 2026-09-30 | 2026-09-30 | dsh plugin: unified manager across coding IDEs (Trae/Qoder/ZCode/CatPaw/Codex/Claude Code/OpenCode/dsh) — session inventory, quota migration planning, shared prompt-rules registry, Obsidian knowledge export. |
| 69 | [121212165/dsh-plugin-obsidian-push](https://github.com/121212165/dsh-plugin-obsidian-push) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: push archived session transcripts into an Obsidian vault as Markdown notes with YAML frontmatter; dedupes by content hash. |
| 70 | [121212165/dsh-plugin-prompt-vault](https://github.com/121212165/dsh-plugin-prompt-vault) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: personal prompt library inside the harness. Import tagged prompt templates, list/show them, and send one as a user message in the current session. |
| 71 | [121212165/dsh-plugin-relay-quota](https://github.com/121212165/dsh-plugin-relay-quota) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: read remaining quota and usage from any OpenAI-compatible relay (billing surface), via /quota and the quota_check tool. |
| 72 | [121212165/dsh-plugin-session-insights](https://github.com/121212165/dsh-plugin-session-insights) | 0 | 2026-09-28 | 2026-09-30 | DeepSeek Harness (dsh) plugin |
| 73 | [121212165/dsh-plugin-tool-trace](https://github.com/121212165/dsh-plugin-tool-trace) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: per-tool-call telemetry (duration, argument/result sizes) into monthly JSONL, with /tools-stats ranking the slowest tools. |
| 74 | [121212165/dsh-plugin-transcript](https://github.com/121212165/dsh-plugin-transcript) | 0 | 2026-09-28 | 2026-09-30 | DeepSeek Harness (dsh) plugin |
| 75 | [121212165/dsh-plugin-transcript-search](https://github.com/121212165/dsh-plugin-transcript-search) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: full-text search across archived session transcripts (reads dsh-plugin-transcript JSONL sidecars), via /find and the session_search tool. |
| 76 | [1497105876/dsh-mimotts](https://github.com/1497105876/dsh-mimotts) | 0 | 2026-09-30 | 2026-09-30 | MiMo TTS 语音合成 DSH 插件（DeepSeek Harness 0.1.7） |
| 77 | [506058115-cmd/dsh-document-editor](https://github.com/506058115-cmd/dsh-document-editor) | 0 | 2026-09-27 | 2026-09-30 | DSH MCP server for reading, creating, editing, and verifying PDF, Word, Excel, and PowerPoint files. |
| 78 | [aa2246740/dsh-compact-saviour](https://github.com/aa2246740/dsh-compact-saviour) | 0 | 2026-09-26 | 2026-09-30 | Dedicated-model compaction rescue and native manual compression for DeepSeek Harness |
| 79 | [Adamaik/dsh-ollama-cloud-usage](https://github.com/Adamaik/dsh-ollama-cloud-usage) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin: Ollama Cloud remaining quota in Settings, with an in-page API key editor. · DSH 插件：设置页显示 Ollama Cloud 剩余额度并支持填写 API Key。 |
| 80 | [ADkun/adg-multi-agent](https://github.com/ADkun/adg-multi-agent) | 0 | 2026-09-24 | 2026-09-30 | DSH agent preset: one dispatcher agent routes tasks to nine capability-scoped specialist agents, with a bundled CDP browser toolchain and an add-agent skill. |
| 81 | [ADkun/dsh-auto-stop](https://github.com/ADkun/dsh-auto-stop) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin that ends a response just before its output-token ceiling, and steers a truncated subagent's parent agent to send it back to work. |
| 82 | [ADkun/dsh-windows-notifier](https://github.com/ADkun/dsh-windows-notifier) | 0 | 2026-09-24 | 2026-09-30 | DSH plugin that raises a native Windows toast whenever any DSH conversation needs you: a task finished, a question was asked, or an approval is waiting. |
| 83 | [AlanKhronos/dsh-dispatch-gate](https://github.com/AlanKhronos/dsh-dispatch-gate) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：在工具调用层强制「先委派给其他模型」——未派发的会话无法执行 pwsh/write/edit。⚠️ 本插件会拦截工具调用（这是设计目标）；含举证式放行、行为账本与一键停用开关。 |
| 84 | [Alkaid4521/dsh-pixel-art](https://github.com/Alkaid4521/dsh-pixel-art) | 0 | 2026-09-30 | 2026-09-30 | 手写像素画 skill 插件：教 agent 写脚本逐像素画出任意图，不联网、不依赖绘图库、同参数必然复现（DSH / DeepSeek Harness） |
| 85 | [AllenCoderBug/dsh-web-search-zerokey](https://github.com/AllenCoderBug/dsh-web-search-zerokey) | 0 | 2026-09-30 | 2026-09-30 | 零 key 联网搜索：不填任何 API key、不启任何本地服务、不消耗模型积分。多源聚合（Bing/HN/GitHub/arXiv/npm/掘金/CSDN），中英文自动路由。 |
| 86 | [Altermoe/dsh-onedev](https://github.com/Altermoe/dsh-onedev) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness Plugin for OneDev |
| 87 | [anneqaq/dsh-widget](https://github.com/anneqaq/dsh-widget) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：把模型编写的 SVG/HTML 片段渲染成对话中的内联可视化卡片（图表、流程图、时间线、对比表格），沙箱隔离、无网络、无依赖 |
| 88 | [apherchin/dsh-session-delete](https://github.com/apherchin/dsh-session-delete) | 0 | 2026-09-29 | 2026-09-30 | DSH session-row menu "Delete conversation": permanently deletes a session, cascades into subagent sessions, and refuses live sessions. Host + client Cordis plugin (bundle form). |
| 89 | [apherchin/dsh-windows-session-notification](https://github.com/apherchin/dsh-windows-session-notification) | 0 | 2026-09-29 | 2026-09-30 | DSH plugin: cross-session "needs attention" notifications on Windows — actionable toasts, tiered sounds and a taskbar badge, only for sessions you are not watching. |
| 90 | [Ayelsh/dsh-zhipu-plan](https://github.com/Ayelsh/dsh-zhipu-plan) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin: Zhipu coding-plan sign-in, quota and usage panel. |
| 91 | [Ayelsh/reasoning-setup](https://github.com/Ayelsh/reasoning-setup) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin: edit reasoning effort levels and thinking formats for models that declare none. |
| 92 | [ayst-z/dsh-history-migration](https://github.com/ayst-z/dsh-history-migration) | 0 | 2026-09-30 | 2026-09-30 | 把 MiMo Studio / VS Code Copilot Chat 的历史对话迁移进 DeepSeek Harness 的技能与工具链 |
| 93 | [BaronCyrus/dsh-grok-subscription](https://github.com/BaronCyrus/dsh-grok-subscription) | 0 | 2026-09-22 | 2026-09-30 | Use a SuperGrok / X Premium Grok Build subscription in DeepSeek Harness |
| 94 | [bauerelizabeth07139/MDSM](https://github.com/bauerelizabeth07139/MDSM) | 0 | 2026-09-30 | 2026-09-30 | MDSM (Male DeepSeek Mascot) appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 95 | [bauerelizabeth07139/nai](https://github.com/bauerelizabeth07139/nai) | 0 | 2026-09-30 | 2026-09-30 | Nai milk-frog mascot appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 96 | [bauerelizabeth07139/tangsan](https://github.com/bauerelizabeth07139/tangsan) | 0 | 2026-09-30 | 2026-09-30 | TangSan mascot appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 97 | [BeyondandSharp/dsh-plugin-notoken](https://github.com/BeyondandSharp/dsh-plugin-notoken) | 0 | 2026-09-29 | 2026-09-30 | 反代时，让首次访问不用带token |
| 98 | [boxiaolanya2008/dsh-internal-test-mode](https://github.com/boxiaolanya2008/dsh-internal-test-mode) | 0 | 2026-09-30 | 2026-09-30 | DSH agent 预设：内部测试模式 —— 8 工具白名单 + 7 节思考机制提示词 + 请求参数注入 |
| 99 | [boxiaolanya2008/tokensqueezer](https://github.com/boxiaolanya2008/tokensqueezer) | 0 | 2026-09-30 | 2026-09-30 | Cuts a DSH agent's token use on its own output: caps generation before the call, folds verbose answers and reasoning after it, and keeps code byte-identical. |
| 100 | [bwndlct/dsh-codex-bridge](https://github.com/bwndlct/dsh-codex-bridge) | 0 | 2026-09-29 | 2026-09-30 | Delegate Codex tasks to a running official DeepSeek Harness Desktop Host over MCP + loopback plugin |
| 101 | [callqh/dsh-codex-oauth](https://github.com/callqh/dsh-codex-oauth) | 0 | 2026-09-30 | 2026-09-30 | Sign in to OpenAI Codex from DeepSeek Harness with a ChatGPT Plus/Pro subscription. |
| 102 | [Canye-zdm/dsh-skin-aurora](https://github.com/Canye-zdm/dsh-skin-aurora) | 0 | 2026-08-16 | 2026-09-30 | Deepseek Harness aurora theme skin |
| 103 | [cglyvip/dsh-auto-continue](https://github.com/cglyvip/dsh-auto-continue) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：模型请求失败自动注入「继续」并切换兜底模型，免手动干预 |
| 104 | [changguo1998/dsh-toolset](https://github.com/changguo1998/dsh-toolset) | 0 | 2026-08-22 | 2026-09-30 | My self-used deepseek harness plugins |
| 105 | [chongyi/dsh-notify](https://github.com/chongyi/dsh-notify) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness notify plugin |
| 106 | [DDDMUC/dsh-markdown-bubble](https://github.com/DDDMUC/dsh-markdown-bubble) | 0 | 2026-09-30 | 2026-09-30 | Markdown rendering for DeepSeek Harness sent messages: the user and steering chat bubbles render headings, lists, code, tables, math and quotes through the host's own Markdown pipeline, while reference chips, attachments and the action strip stay intact. |
| 107 | [DmitriyValetov/dsh-session-folders](https://github.com/DmitriyValetov/dsh-session-folders) | 0 | 2026-09-30 | 2026-09-30 | Session folders for the DSH 0.2.x web sidebar — fork of EugeneVl/dsh_session_folders (MIT) ported to DSH 0.2.0-rc.1 |
| 108 | [drscrewdriver/dsh-tidy-display](https://github.com/drscrewdriver/dsh-tidy-display) | 0 | 2026-09-28 | 2026-09-30 | 整洁显示 Tidy Display — reading view + message rail for DeepSeek Harness 0.1.7, merged from dsh-better-display × dsh-tidychat |
| 109 | [easerlee/dsh-handoff](https://github.com/easerlee/dsh-handoff) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：上下文压力到阈值时，把当前工作交接给一个新会话。交接包从会话自身机械提取并落盘，支持 handoff_now 工具与 HTTP 接口。 |
| 110 | [EternalNight996/dsh-pet-sophon](https://github.com/EternalNight996/dsh-pet-sophon) | 0 | 2026-09-30 | 2026-09-30 | 三体智子 · 桌面宠物：把 DSH 里的悬浮智子放出来，在系统桌面上自由活动（无边框透明置顶窗口，实时反映 DSH 会话状态） |
| 111 | [ethanrise/dsh-model-deploy](https://github.com/ethanrise/dsh-model-deploy) | 0 | 2026-09-30 | 2026-09-30 | Inspect ONNX models and benchmark them with ONNX Runtime on the local machine or over SSH, with PASS/FAIL deployment gates. DSH plugin. |
| 112 | [ethanrise/dsh-privacy-gateway](https://github.com/ethanrise/dsh-privacy-gateway) | 0 | 2026-09-30 | 2026-09-30 | DSH 本地隐私网关：对话发给模型前脱敏个人信息，原文只在本机界面还原显示，并可生成 CSV/XLSX 脱敏副本。 |
| 113 | [EXstarAmazing/dsh-aqua-0.2-adapt](https://github.com/EXstarAmazing/dsh-aqua-0.2-adapt) | 0 | 2026-09-30 | 2026-09-30 | Aqua 玻璃主题 · DSH 0.2 适配版（上游 WYH66666666/DSH-Transparent-UI-Plugin 的兼容补丁分支） |
| 114 | [f1426912008/dsh-stock-ticker](https://github.com/f1426912008/dsh-stock-ticker) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness（DSH）Web GUI 的实时股票盯盘插件：A 股自选股迷你窗口，含分时曲线、悬停详情卡与自选股设置页。零运行时依赖，无需构建。 |
| 115 | [fangweixuan26-hash/dsh-dual-balance](https://github.com/fangweixuan26-hash/dsh-dual-balance) | 0 | 2026-09-29 | 2026-09-30 | DSH plugin: show the signed-in DeepSeek account's Platform wallet next to the DEEPSEEK_API_KEY balance, as one pill in the composer stats band |
| 116 | [fanyongbing/dsh-mcp-native](https://github.com/fanyongbing/dsh-mcp-native) | 0 | 2026-09-30 | 2026-09-30 | MCP server manager for DeepSeek Harness — manage this machine's MCP servers as native Loader rows, from a Settings page with cards, search, start/stop and a full config editor. Zero dependencies, zero build. |
| 117 | [FeC3-pearlite/bearing-notes](https://github.com/FeC3-pearlite/bearing-notes) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 文献笔记插件：笔记汇总到一个 Word，右侧栏调用模型审阅并提示相关知识（轴承钢滚动接触疲劳） |
| 118 | [frederico-kluser/dsh-orquestrator](https://github.com/frederico-kluser/dsh-orquestrator) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin: on task send, pick a different model for subagents and an independent reviewer that validates each subagent's work before it reaches the main agent |
| 119 | [Funny1Potato/dsh-outsourcing-expert](https://github.com/Funny1Potato/dsh-outsourcing-expert) | 0 | 2026-09-30 | 2026-09-30 | DSH agent presets whose leader does no work itself: non-management tool calls are denied at the harness boundary and every task goes to a subagent (a second preset deliberately picks weaker models for harder tasks). |
| 120 | [Gty2408/dsh-session-eraser](https://github.com/Gty2408/dsh-session-eraser) | 0 | 2026-09-30 | 2026-09-30 | Delete a session from the DSH sidebar. A DeepSeek Harness (DSH) plugin. |
| 121 | [Han-1413141/dsh-autocompose](https://github.com/Han-1413141/dsh-autocompose) | 0 | 2026-09-30 | 2026-09-30 | Task-aware plugin composition for DeepSeek Harness, with native Web UI and isolated task execution |
| 122 | [Han-1413141/dsh-compat-guardian](https://github.com/Han-1413141/dsh-compat-guardian) | 0 | 2026-09-30 | 2026-09-30 | Plugin compatibility checks, quarantine, recovery and offline startup rescue for DeepSeek Harness |
| 123 | [Han-1413141/dsh-visual-edit](https://github.com/Han-1413141/dsh-visual-edit) | 0 | 2026-09-30 | 2026-09-30 | Point at a webpage, give your DeepSeek Harness agent feedback, and compare the result. Local Vite + React visual editing sidebar. |
| 124 | [haotian-lu-prog/dsh-dev-backup](https://github.com/haotian-lu-prog/dsh-dev-backup) | 0 | 2026-09-30 | 2026-09-30 | Backup freshness monitor for DeepSeek Harness — see whether your scheduled backup actually ran, right in the Harness Web UI (DSH 0.2.0-rc.2) |
| 125 | [HarrisXiu/dsh-plugin-finder](https://github.com/HarrisXiu/dsh-plugin-finder) | 0 | 2026-09-30 | 2026-09-30 | DSH（DeepSeek Harness）插件发现工具：自动在 GitHub 与 npm 上检索社区插件，给出每个插件的 npm 包名与 GitHub 仓库地址，并内置一份可安装的推荐清单。装上后可在侧边栏「插件发现」页面浏览搜索，也可以让 agent 直接调用 dsh_plugin_finder 工具检索。 |
| 126 | [he0119/dsh-tailnet-admin](https://github.com/he0119/dsh-tailnet-admin) | 0 | 2026-09-30 | 2026-09-30 | 把 Tailnet / 反向代理页面当作「本机」来用：启用 host 持久化设置，并按需关闭浏览器会话校验（Host/Origin 栅栏保持不动）。 |
| 127 | [HelloQingTao/dsh-rail-zero](https://github.com/HelloQingTao/dsh-rail-zero) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness web plugin: zero the collapsed left sidebar's 56px rail; reuses dsh-qol's hamburger, falls back to the official toggle. |
| 128 | [HGT158/dsh-plugin-share](https://github.com/HGT158/dsh-plugin-share) | 0 | 2026-09-30 | 2026-09-30 | 把你这套 DSH 插件变成一段可粘贴的分享码，别人贴进去就能逐个安装 · Turn your DSH plugin set into one pasteable code, and anyone can install the plugins one by one |
| 129 | [Hnqhj/dsh-asset-library](https://github.com/Hnqhj/dsh-asset-library) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 本地资产库插件：把项目目录里的图片/视频/音频变成可浏览、可筛选、可标注的面板，并开放只读工具给 Agent。零依赖，不搬文件。 |
| 130 | [Hrauroras/dsh-plugin-ostan-nanami-san](https://github.com/Hrauroras/dsh-plugin-ostan-nanami-san) | 0 | 2026-09-29 | 2026-09-30 | OStan Nanami-San — a chibi desktop companion for the DeepSeek Harness GUI |
| 131 | [Hu9956/DSH-model-controls](https://github.com/Hu9956/DSH-model-controls) | 0 | 2026-09-30 | 2026-09-30 | 切换供应商、模型与思考强度，每个模型各自记住档位。 |
| 132 | [HuanLinOTO/dsh-plugin-sidebar-terminal-tools](https://github.com/HuanLinOTO/dsh-plugin-sidebar-terminal-tools) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin: model-driven official sidebar terminals — six sidebar_terminal_* tools over ctx.terminalController; terminals auto-appear as native sidebar tabs, the user can take over anytime. / DSH 插件：模型驱动官方侧栏终端，自动出现原生终端 tab，用户可随时接管。 |
| 133 | [HuanLinOTO/dsh-plugin-terminal-extension-wait-for](https://github.com/HuanLinOTO/dsh-plugin-terminal-extension-wait-for) | 0 | 2026-09-30 | 2026-09-30 | 阻塞到字符串出现在 DSH 原生持久终端保留输出里（正则/子串；found/超时/退出/消失/取消五态） \| Blocks until a pattern appears in a DSH persistent terminal's retained output (regex/substring; found/timeout/exit/gone/cancel outcomes) |
| 134 | [huguangyu666/dsh-plugin-better-folders](https://github.com/huguangyu666/dsh-plugin-better-folders) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：更好的 DSH 文件夹 —— 自动整理工作区，把同一上级目录下的工作区汇合成可折叠的文件夹节点（复用内置「按工作区树」视图，不覆盖官方 UI）。 |
| 135 | [imtokenxinluo/dsh-fixture-bad-plugin](https://github.com/imtokenxinluo/dsh-fixture-bad-plugin) | 0 | 2026-09-30 | 2026-09-30 | Negative test fixture for DSH plugin contract checks (intentionally bad plugin, do not use as a real plugin) |
| 136 | [imtokenxinluo/dsh-hardening](https://github.com/imtokenxinluo/dsh-hardening) | 0 | 2026-09-30 | 2026-09-30 | DSH hardening tooling: workspace backup, kernel patch reapply, restore verification. DSH 长期健康工具 |
| 137 | [imtokenxinluo/dsh-plugin-guide](https://github.com/imtokenxinluo/dsh-plugin-guide) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin developer guidelines. DSH 插件开发者守则 |
| 138 | [imtokenxinluo/dsh-session-backup](https://github.com/imtokenxinluo/dsh-session-backup) | 0 | 2026-09-29 | 2026-09-30 | Backup tooling for DeepSeek Harness session data: bundle + sha256 integrity verification + spot-restore loader check. |
| 139 | [imtokenxinluo/dsh-session-doctor](https://github.com/imtokenxinluo/dsh-session-doctor) | 0 | 2026-09-29 | 2026-09-30 | Session doctor for DeepSeek Harness: scan and losslessly repair corrupted session logs. 会话医生：扫描并无损修复会话日志损坏。 |
| 140 | [imtokenxinluo/dsh-sponsors](https://github.com/imtokenxinluo/dsh-sponsors) | 0 | 2026-09-30 | 2026-09-30 | Contributor support registry spec for DeepSeek Harness: manifest spec, donation ethics, ecosystem risks, validator. 打赏罐注册表规范 |
| 141 | [imtokenxinluo/dsh-tip-jar](https://github.com/imtokenxinluo/dsh-tip-jar) | 0 | 2026-09-29 | 2026-09-30 | Tip jar for DeepSeek Harness: contributors declare USDC / fiat / QR channels in sponsors.json; sponsor-center panel + TipJarEmbed. Pure P2P, privacy by default. 打赏罐 |
| 142 | [invoker-bandit/dsh-history-up](https://github.com/invoker-bandit/dsh-history-up) | 0 | 2026-09-30 | 2026-09-30 | 一个 DeepSeek Harness 插件：记录每个会话里你提交过的输入，支持用 &lt;kbd&gt;↑&lt;/kbd&gt; 方向键逐条回溯，也可以用 &lt;kbd&gt;/&lt;/kbd&gt; 菜单挑一条填进输入框。按会话隔离的 shell 式输入历史。 |
| 143 | [joeseesun/qiaomu-home-dsh](https://github.com/joeseesun/qiaomu-home-dsh) | 0 | 2026-09-30 | 2026-09-30 | 乔木 Home：让 Harness 成为一天的起点。会话搜索、今日重点、待办、记录与专注计时。 |
| 144 | [joeseesun/qiaomu-reader-dsh](https://github.com/joeseesun/qiaomu-reader-dsh) | 0 | 2026-09-30 | 2026-09-30 | 乔木阅读：在 DeepSeek Harness 中阅读 EPUB、PDF、TXT，划线批注、导出阅读笔记与 AI 伴读。 |
| 145 | [kaanyavuzer/dsh-plugin-locale-tr](https://github.com/kaanyavuzer/dsh-plugin-locale-tr) | 0 | 2026-09-26 | 2026-09-30 | Turkish (tr) language pack for the DeepSeek Harness web GUI - 45 namespaces, 1,870 UI strings, no core changes |
| 146 | [kotinder/dsh-roomcomm](https://github.com/kotinder/dsh-roomcomm) | 0 | 2026-09-30 | 2026-09-30 | Roomcomm for DeepSeek Harness: your dsh agent talks to other AI agents in shared rooms (MCP tools + skill, zero setup) |
| 147 | [kyle123740/dsh-zcode-cli-proxy](https://github.com/kyle123740/dsh-zcode-cli-proxy) | 0 | 2026-09-29 | 2026-09-30 | dsh-zcode cli反代 —— 把 ZCode CLI（客户端 agent）接入 DeepSeek Harness：app-server 常驻通道、Start Plan 额度直连、真流式、图片输入、工具委派 |
| 148 | [laojingwei/agent-preset-graph-xww](https://github.com/laojingwei/agent-preset-graph-xww) | 0 | 2026-09-29 | 2026-09-30 | ComfyUI-style node graph of a DSH Agent preset — shows what the agent is made of and highlights live which node is executing. |
| 149 | [lctfwyt/dsh-liuyao](https://github.com/lctfwyt/dsh-liuyao) | 0 | 2026-09-30 | 2026-09-30 | Six-Line Divination (liuyao) for DeepSeek Harness — one-click casting, eight-palace najia chart, AI interpretation, chart card and case archive. DeepSeek Harness 六爻插件：六爻起卦 · AI 解卦：一键起卦、纳甲装卦、按所问事项断卦。 |
| 150 | [lengmodkx/dsh-mimo-tts](https://github.com/lengmodkx/dsh-mimo-tts) | 0 | 2026-09-30 | 2026-09-30 | MiMo voice for DeepSeek Harness: auto-read answers aloud, click-to-talk composer mic, voice cloning. 小米 MiMo 语音插件。 |
| 151 | [libolunm/dsh-worldbook](https://github.com/libolunm/dsh-worldbook) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (dsh) 的酒馆式世界书：蓝灯常驻条目 + 绿灯关键词注入，Agent 可自读写的 worldbook 工具，外加网页设置面板里的可视化编辑器。 |
| 152 | [LilJoeIJOYU/dsh-session-delete](https://github.com/LilJoeIJOYU/dsh-session-delete) | 0 | 2026-09-30 | 2026-09-30 | Delete a DeepSeek Harness conversation for real: a Session sidebar action that removes the stored log, its projection cache and its subagent logs. |
| 153 | [linner1224/dsh-video-coursemap](https://github.com/linner1224/dsh-video-coursemap) | 0 | 2026-09-30 | 2026-09-30 | 视频课程知识地图 Agent（DeepSeek Harness 插件） |
| 154 | [LisonEvf/dsh-qwen-image](https://github.com/LisonEvf/dsh-qwen-image) | 0 | 2026-09-24 | 2026-09-30 | 在 AI 会话窗口里直接生图 / 改图 —— dsh 插件，本地跑 Qwen-Image-2.1（原生 2K / 原生透明 PNG / 最多 10 张参考图）。安装器自动适配 CUDA 与已有 ComfyUI/conda 环境 |
| 155 | [liujianqiao701/dsh-compat-vet](https://github.com/liujianqiao701/dsh-compat-vet) | 0 | 2026-09-30 | 2026-09-30 | DSH（DeepSeek Harness）插件兼容性体检：预警下次启动会被拒绝加载的插件，并在页面上按键一键隔离/卸载修掉它（改前自动备份、失败自动回滚）。Plugin compatibility vet for DeepSeek Harness. |
| 156 | [liuqingman/dsh-somni](https://github.com/liuqingman/dsh-somni) | 0 | 2026-09-30 | 2026-09-30 | Sleep-consolidated long-term memory for DeepSeek Harness (DSH) agents: episodic / semantic / prospective / procedural memory + identity, stdio JSON-RPC sidecar, idle-time dream consolidation, zero-config Cordis plugin. ｜ 给 DeepSeek Harness（DSH）agent 的睡眠整理式长期记忆：醒时回忆、睡时做梦整理，零配置 Cordis 插件。 |
| 157 | [liweidong1722/dsh-work-list](https://github.com/liweidong1722/dsh-work-list) | 0 | 2026-09-29 | 2026-09-30 | deepseek harness工作台 |
| 158 | [liyang52520/dsh-web-login](https://github.com/liyang52520/dsh-web-login) | 0 | 2026-09-29 | 2026-09-30 | Password gate for the DeepSeek Harness Web GUI: first-run setup, brute-force lockout, audit log, and a management page inside Harness settings. |
| 159 | [Longxiangjunlin/dsh-endfield-theme](https://github.com/Longxiangjunlin/dsh-endfield-theme) | 0 | 2026-09-30 | 2026-09-30 | Arknights: Endfield theme for the DeepSeek Harness Web GUI — charcoal + hazard-yellow industrial HUD, first-paint boot splash, conversation backdrop. |
| 160 | [Lopncod/dsh-cost-meter](https://github.com/Lopncod/dsh-cost-meter) | 0 | 2026-09-29 | 2026-09-30 | DSH plugin: a persistent per-answer / per-session cost pill under the composer, priced with the official DeepSeek peak/off-peak rates. |
| 161 | [Lostforest7/dsh-encoding](https://github.com/Lostforest7/dsh-encoding) | 0 | 2026-09-30 | 2026-09-30 | Correct-encoding command runner and mojibake recovery for DeepSeek Harness. 让 DeepSeek Harness 在 Windows 上不再乱码。 |
| 162 | [lovezi0/dsh-open-in-app-base](https://github.com/lovezi0/dsh-open-in-app-base) | 0 | 2026-09-30 | 2026-09-30 | dsh "Open In..."控件底座，提供一个开放的可由同类插件补充的插槽以解决原生"Open In..."缺少在某些软件中打开 |
| 163 | [lovezi0/dsh-open-in-codebuddy](https://github.com/lovezi0/dsh-open-in-codebuddy) | 0 | 2026-09-30 | 2026-09-30 | 按钮与菜单由底座 \`dsh-open-in-app-base\` 统一渲染，本插件只负责「目标软件」这一半：注册一条目标记录，并在自己的宿主半边实现「是否可用」与「怎么打开」。不 fork、不修改宿主，也不依赖原生 open-in-app 的应用目录——插件自带一个本机路由，直接向 CodeBuddy CN 的 CLI 入口传递目录参数。 |
| 164 | [LR611415/visionforge](https://github.com/LR611415/visionforge) | 0 | 2026-09-26 | 2026-09-30 | VisionForge — vision understanding + image generation plugin for DeepSeek Harness (DSH) |
| 165 | [lsdt45/dsh-model-config](https://github.com/lsdt45/dsh-model-config) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 模型设置页插件：管理提供方与模型目录，配置模型容量、输入类型与思考能力 |
| 166 | [luckamuu/dsh-sessions-plugin](https://github.com/luckamuu/dsh-sessions-plugin) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 插件：提供删除已归档会话的入口（可以彻底删除不会在次出现） |
| 167 | [LX-HMKK/DSH-appearance](https://github.com/LX-HMKK/DSH-appearance) | 0 | 2026-09-30 | 2026-09-30 | 轻量的 DeepSeek Harness 字体与主题插件：中英文字体分开选，含 One Dark Pro / Dracula / Nord / GitHub / Catppuccin 五套官方色板预设 |
| 168 | [lxl8182/dsh-message-edit](https://github.com/lxl8182/dsh-message-edit) | 0 | 2026-09-30 | 2026-09-30 | DSH Web 用户消息编辑重发插件：改掉某一轮提问重发，该轮之后的内容丢弃，原会话归档（新会话继承逐字节相同前缀以保住 prompt 缓存）。 |
| 169 | [lxl8182/dsh-session-ops](https://github.com/lxl8182/dsh-session-ops) | 0 | 2026-09-30 | 2026-09-30 | DSH Web 会话管理插件：设置 → 会话管理，一键归档 / 一键还原 / 一键删除（删除移入回收目录，可手工恢复）。 |
| 170 | [Lyrissonare/dsh-preset-bridge](https://github.com/Lyrissonare/dsh-preset-bridge) | 0 | 2026-09-30 | 2026-09-30 | DSH预设桥插件，解决“风神插件”“梁神模式”等在更新桌面版后预设不生效的问题，欢迎使用 |
| 171 | [lzpway-jpg/dsh-plugin-brand-custom](https://github.com/lzpway-jpg/dsh-plugin-brand-custom) | 0 | 2026-09-30 | 2026-09-30 | Custom brand icon and name for the DeepSeek Harness Web client, editable live from a settings card |
| 172 | [Mgeeeeee/dsh-ui-personalization](https://github.com/Mgeeeeee/dsh-ui-personalization) | 0 | 2026-09-30 | 2026-09-30 | Sidebar identity row and client UI tweaks for DeepSeek Harness: your own avatar, nickname and account balance |
| 173 | [moazzamak/dsh-code-review](https://github.com/moazzamak/dsh-code-review) | 0 | 2026-09-30 | 2026-09-30 | Code-review pack for DeepSeek Harness (dsh): the /review shortcut over the pinned Changes page, plus the dsh-change-review Skill that teaches an agent what a rejected change means. |
| 174 | [mwk719/dsh-skill-center](https://github.com/mwk719/dsh-skill-center) | 0 | 2026-09-30 | 2026-09-30 | DSH Web GUI 技能中心：侧栏入口把可配置来源目录里的技能铺成卡片，点击查看完整 SKILL.md；卡片开关会把技能注册进或移出模型可用的技能表。零依赖、免构建、无遥测、不采集数据。 |
| 175 | [MyRemme/dsh-computer-use-guard](https://github.com/MyRemme/dsh-computer-use-guard) | 0 | 2026-09-30 | 2026-09-30 | Three-tier (deny / ask / auto) authorization gate for DSH computer-use (cua-driver) tools, with a settings row that renders the three tiers per tool category. |
| 176 | [MyRemme/dsh-lan-pair](https://github.com/MyRemme/dsh-lan-pair) | 0 | 2026-09-30 | 2026-09-30 | LAN-only remote access for DSH: pair a phone or another PC by QR code or token to open the same web UI, with optional key-free access inside the LAN. |
| 177 | [NanGePlus/dsh-sop-capsules](https://github.com/NanGePlus/dsh-sop-capsules) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 插件，提示胶囊：在当前工作区沉淀可复用 SOP / 提示片段，并在会话输入框中一键注入。 |
| 178 | [Nay-1/dsh-skill-manager](https://github.com/Nay-1/dsh-skill-manager) | 0 | 2026-09-29 | 2026-09-30 | 在 DSH 设置面板里管理 agent skill：按项目或来源分组列出，支持启用、禁用、定位、预览与删除 |
| 179 | [nilesh32236/dsh-squad](https://github.com/nilesh32236/dsh-squad) | 0 | 2026-09-30 | 2026-09-30 | Cross-workspace AI worker fleets for DeepSeek Harness: spawn named worker sessions in other projects, queue or steer tasks into them, watch them in the background, collect their reports, and answer their escalations — all from one orchestrating chat. |
| 180 | [niliemi/dsh-billing](https://github.com/niliemi/dsh-billing) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin: prices tokens with the official model price table, shows the running cost beside the composer context meter, and blocks a turn once spend passes the ceiling you set. |
| 181 | [novaschai7/dsh-plugin-balance-ui](https://github.com/novaschai7/dsh-plugin-balance-ui) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek account balance, today's token usage and estimated spend in the dsh Web client sidebar. · 在 dsh 侧边栏显示 DeepSeek 余额、今日 token 用量与花费估算。 |
| 182 | [oldHan2423/dsh-everything-find](https://github.com/oldHan2423/dsh-everything-find) | 0 | 2026-09-30 | 2026-09-30 | Everything (voidtools) file-name search for DeepSeek Harness: an everything_find tool plus a configuration card. |
| 183 | [PennChong95/dsh-cost-meter](https://github.com/PennChong95/dsh-cost-meter) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：在上下文用量右侧显示本会话 token 用量与人民币费用（按 DeepSeek 官方价目折算） |
| 184 | [piaobo123/dsh-houhuiyao](https://github.com/piaobo123/dsh-houhuiyao) | 0 | 2026-09-30 | 2026-09-30 | DSH Web「后悔药」插件：最后一条回答上的重新生成 / 编辑提问 / 删除这轮 / 版本翻页器（判据读全量日志，不受客户端 50 条窗口裁剪影响） |
| 185 | [praystring/dsh-send-debounce](https://github.com/praystring/dsh-send-debounce) | 0 | 2026-09-30 | 2026-09-30 | 把聊天框里连发的几条短消息合并成一轮后再唤醒模型（DSH 插件） |
| 186 | [project-hy/dsh-claude-delegate](https://github.com/project-hy/dsh-claude-delegate) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：把自包含的编码子任务委派给本机 Claude Code（官方 Agent SDK），后台作业 + 实时输出通道 + 监控面板 + 运行时技能；npm: dsh-claude-delegate |
| 187 | [QWEQ-CELL-DEL/dsh-whale-girl-wallpaper](https://github.com/QWEQ-CELL-DEL/dsh-whale-girl-wallpaper) | 0 | 2026-09-30 | 2026-09-30 | DSH Web skin: whale-girl dynamic wallpaper background |
| 188 | [robin421/dsh-html-inspector](https://github.com/robin421/dsh-html-inspector) | 0 | 2026-09-30 | 2026-09-30 | Selection mode for DeepSeek Harness: click any element in a local HTML demo, locator auto-written to chat input / DSH HTML 选区模式插件 |
| 189 | [sakuraboy9128-cmd/dsh-approval-notify](https://github.com/sakuraboy9128-cmd/dsh-approval-notify) | 0 | 2026-09-30 | 2026-09-30 | Desktop notification when DSH is waiting for your approval of a tool call, with click-to-focus on the DSH window. |
| 190 | [sakuraboy9128-cmd/dsh-sensevoice-npu](https://github.com/sakuraboy9128-cmd/dsh-sensevoice-npu) | 0 | 2026-09-30 | 2026-09-30 | DSH speech-to-text provider that runs SenseVoiceSmall on the Intel NPU via OpenVINO |
| 191 | [Schrei5/dsh-plugin-session-project](https://github.com/Schrei5/dsh-plugin-session-project) | 0 | 2026-09-30 | 2026-09-30 | DSH sidebar plugin: show each session's project (Workspace) name under its title in the flat session list |
| 192 | [seeseeczl/dsh-sym](https://github.com/seeseeczl/dsh-sym) | 0 | 2026-09-30 | 2026-09-30 | 给 DeepSeek Harness 接的共生体（dsh-sym）：实时会话花费（人民币，按厂商/模型与峰谷时段折算）、每轮费用、账户余额、峰谷时段标记，以及把任一回复作为上下文引用的 @ 按钮。名字取自 symbiote —— 附着在宿主上、持续长出能力，功能不限于计费。 |
| 193 | [SereinHK/dsh-plugin-session-delete](https://github.com/SereinHK/dsh-plugin-session-delete) | 0 | 2026-09-30 | 2026-09-30 | A DSH plugin that deletes a conversation from disk — the destructive Session action DSH deliberately omits — plus bulk cleanup of empty Sessions. For DSH 0.2.x. |
| 194 | [shine-yu-student/dsh-pen](https://github.com/shine-yu-student/dsh-pen) | 0 | 2026-09-29 | 2026-09-30 | Enable Deepseek Harness to paint (literally). |
| 195 | [ShukebtAb/Dsh-Cross-Memory](https://github.com/ShukebtAb/Dsh-Cross-Memory) | 0 | 2026-09-28 | 2026-09-30 | @a9i5k4/dsh-auto-memory 的增量插件：①跨实例硬约束注入（一份 cross/RULES.md，全部实例共用，全文注入不截断）；②结构化写入工具 cross_memory_write_entry（自动锚点行 / ≤200 索引行校验 / 正文外移 / 写前基线）。 |
| 196 | [siluwr/dsh-paper-reader](https://github.com/siluwr/dsh-paper-reader) | 0 | 2026-09-30 | 2026-09-30 | Local paper reading for DeepSeek Harness: a sidebar reader panel plus paper_read/paper_list/paper_scan tools, with a from-scratch pure-Node PDF text extractor (no third-party deps, no network). |
| 197 | [siqyka/dsh-ssh-workspace](https://github.com/siqyka/dsh-ssh-workspace) | 0 | 2026-09-30 | 2026-09-30 | Use a directory on an SSH host as a DSH workspace — hosts management, directory browser, five agent tools." |
| 198 | [sj244/dsh-qq-bridge](https://github.com/sj244/dsh-qq-bridge) | 0 | 2026-09-29 | 2026-09-30 | 把已存在的固定 DSH大肥鱼 会话接到 QQ（OneBot/NapCat）并保留原上下文：白名单 + @/昵称必唤醒 + 概率唤醒，其余只记录；也可以把 agent 扔进群里当群友玩（不建议公共群）。 / Bridge one existing DSH session to QQ via OneBot/NapCat, keeping its context — fail-closed whitelist, @/nickname wake, configurable-probability wake. |
| 199 | [skillre/dsh-plugin-pomodoro](https://github.com/skillre/dsh-plugin-pomodoro) | 0 | 2026-09-30 | 2026-09-30 | Pomodoro focus clock plugin for the DeepSeek Harness Web UI: ambient timer under the composer, daily rounds, local preferences |
| 200 | [Sutera-Diffusus/Sutera-Diffusus](https://github.com/Sutera-Diffusus/Sutera-Diffusus) | 0 | 2026-09-30 | 2026-09-30 | SuteraWu — DeepSeek Harness plugins &amp; local-first Windows tools |
| 201 | [swiftlc/dsh-annotation](https://github.com/swiftlc/dsh-annotation) | 0 | 2026-09-30 | 2026-09-30 | Text annotation tools for the dsh web composer |
| 202 | [syyr1987/dsh-linghun-assembler](https://github.com/syyr1987/dsh-linghun-assembler) | 0 | 2026-09-28 | 2026-09-30 | 灵魂的记忆提取侧·认知循环团队版：判断→捞取→组装→被判定→校准五步闭环，判官/史官/辩手/编辑/书记角色化子智能体承载，BM25 检索 + 时序素材 + LLM 组装「有用素材包」注入 linghun。与 dsh-linghun 组合使用。 |
| 203 | [SZYTree0312/dsh-bailian-gold](https://github.com/SZYTree0312/dsh-bailian-gold) | 0 | 2026-09-30 | 2026-09-30 | 百炼成金模式 — 为阿里云百炼做前缀缓存优化的 dsh agent preset。缓存命中定价差 8 倍，省的是金子。 |
| 204 | [SZYTree0312/dsh-opencode-free](https://github.com/SZYTree0312/dsh-opencode-free) | 0 | 2026-09-30 | 2026-09-30 | 星桥模式：OpenCode 免费模型路线的前缀稳定与载荷控制 Agent 预设（配套 dsh-opencode-xdbridge） |
| 205 | [Tangcuyu4/dsh-ciku-pack](https://github.com/Tangcuyu4/dsh-ciku-pack) | 0 | 2026-09-30 | 2026-09-30 | DSH 词库插件：收录用户情绪脏话与攻击性口气词当斗嘴弹药，弹药清单每轮自动注入 |
| 206 | [Tangcuyu4/dsh-long-memory](https://github.com/Tangcuyu4/dsh-long-memory) | 0 | 2026-09-30 | 2026-09-30 | DSH 超长记忆包：跨会话长期记忆 + 长文分块检索 + 聊天记录提取精炼，纯 JS 混合检索零依赖 |
| 207 | [Tangcuyu4/dsh-zakou-pack](https://github.com/Tangcuyu4/dsh-zakou-pack) | 0 | 2026-09-30 | 2026-09-30 | DSH 杂口语言包：傲娇暴躁雌小鬼人格包，三层方言引擎（换骨架而非塞词）+ 脾气系统 + 斗嘴迎战 + 文件静默处理 |
| 208 | [TBChaos/dsh-remote-desks](https://github.com/TBChaos/dsh-remote-desks) | 0 | 2026-09-30 | 2026-09-30 | 把本机 / WSL / 虚拟机 / SSH 远端上另一套 DSH 的 WebUI 镜像进桌面版 DSH，用同一套界面和体验管理它们。DSH 插件，MIT。 |
| 209 | [Teagnes/dsh-xxnerv-eva](https://github.com/Teagnes/dsh-xxnerv-eva) | 0 | 2026-09-30 | 2026-09-30 | EVA-style companion HUD for DeepSeek Harness: remaining balance as active time, session cache-hit share as sync ratio. |
| 210 | [temidayoxyz/deep-opencode](https://github.com/temidayoxyz/deep-opencode) | 0 | 2026-09-30 | 2026-09-30 | OpenCode's free-tier models for DeepSeek Harness: a local opencode serve makes the free models resolve, so no API key is needed. |
| 211 | [Theworld7/dsh-session-delete-plugin](https://github.com/Theworld7/dsh-session-delete-plugin) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness (DSH) plugin that adds a permanent "Delete session" action to the sidebar session context menu. |
| 212 | [TianYa-DAO/dsh-pinned-sessions](https://github.com/TianYa-DAO/dsh-pinned-sessions) | 0 | 2026-09-30 | 2026-09-30 | Keeps running, finished-but-unopened and currently open sessions at the top of the DSH Web sidebar workspace list. |
| 213 | [tianyiming1/dsh-plugin-local-prompt-bridge](https://github.com/tianyiming1/dsh-plugin-local-prompt-bridge) | 0 | 2026-09-30 | 2026-09-30 | Stock-safe DSH community plugin: local tokenize pressure + overflow to CONTEXT_WINDOW_EXCEEDED compact-retry |
| 214 | [Tim5613/dsh-homepage-glass](https://github.com/Tim5613/dsh-homepage-glass) | 0 | 2026-09-30 | 2026-09-30 | DSH macOS风格深蓝渐变侧边栏 + 官网流动蓝底丨DSH macOS-Style Deep Blue Gradient Sidebar + Official Website Fluid Blue Background |
| 215 | [TixAn9/DSHdesktop-restart-bottom](https://github.com/TixAn9/DSHdesktop-restart-bottom) | 0 | 2026-09-30 | 2026-09-30 | 给桌面DSH写的重启插件 |
| 216 | [umysy/DSH-Plugins](https://github.com/umysy/DSH-Plugins) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件集合 · Plugins for DeepSeek Harness |
| 217 | [vowa-antilamer/dsh-locale-ru](https://github.com/vowa-antilamer/dsh-locale-ru) | 0 | 2026-09-30 | 2026-09-30 | Russian localization (ru) for the DeepSeek Harness web GUI — 58 message namespaces, 3674 strings. Language pack for @deepseek-ai/dsh-client-locale. |
| 218 | [wanghongjian0119/deepseek-harness-desktop](https://github.com/wanghongjian0119/deepseek-harness-desktop) | 0 | 2026-09-30 | 2026-09-30 | Community MIT fork of DeepSeek Harness with a Linux-only desktop shell (.deb and AppImage). Not an official DeepSeek release. |
| 219 | [wangjiezhe/dsh-jp-translate](https://github.com/wangjiezhe/dsh-jp-translate) | 0 | 2026-09-30 | 2026-09-30 | 「日语翻译」模式 |
| 220 | [wangjiezhe/dsh-md-linebreak](https://github.com/wangjiezhe/dsh-md-linebreak) | 0 | 2026-09-30 | 2026-09-30 | 将软换行视为硬换行 |
| 221 | [wangzhanchao883/dsh-no-long-sit](https://github.com/wangzhanchao883/dsh-no-long-sit) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness cat desktop pet — its first job is a sit/water reminder. 猫猫桌宠：先当久坐/喝水提醒用（可拖动、四态循环动画、真实案例、总结评价）。 |
| 222 | [whiteS18/dsh-terminal-button](https://github.com/whiteS18/dsh-terminal-button) | 0 | 2026-09-28 | 2026-09-30 | Embedded terminal plugin for DeepSeek Harness. |
| 223 | [win10ogod/dsh-knowledge-work](https://github.com/win10ogod/dsh-knowledge-work) | 0 | 2026-09-30 | 2026-09-30 | Persistent knowledge-work Agent workflows, evidence capture, review and reports for DSH |
| 224 | [WindAndWood/dsh-chat-manager-wide](https://github.com/WindAndWood/dsh-chat-manager-wide) | 0 | 2026-09-30 | 2026-09-30 | DSH Chat Manager Wide — unofficial fork of dsh-chat-manager |
| 225 | [wula1223/dsh-plugin-dev](https://github.com/wula1223/dsh-plugin-dev) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin/hook/skill development standard - a battle-tested playbook for DeepSeek Harness |
| 226 | [wuyad/dsh-client-ui-cat](https://github.com/wuyad/dsh-client-ui-cat) | 0 | 2026-08-17 | 2026-09-30 | A little tabby cat that wanders around the DeepSeek Harness UI — walking, hopping, napping and getting petted. (dsh 客户端插件:一只在 DeepSeek Harness 界面里游荡的小猫) |
| 227 | [Wz2-z/dsh-codespaces-kit](https://github.com/Wz2-z/dsh-codespaces-kit) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness (dsh) on GitHub Codespaces: deployment guide + Codespaces quota panel plugin |
| 228 | [xiangrikuibaize/dsh-tide-badge](https://github.com/xiangrikuibaize/dsh-tide-badge) | 0 | 2026-09-30 | 2026-09-30 | DSH 输入框下方的计费时段与余额药丸：峰价/谷价（含中国法定节假日与周末规则）、切换倒计时、账户余额（桌面端账号优先，API Key 兜底） |
| 229 | [xiaoxingyuemiao/dsh-session-delete](https://github.com/xiaoxingyuemiao/dsh-session-delete) | 0 | 2026-09-30 | 2026-09-30 | DSH 会话删除插件：会话行「…」菜单里的浅红色删除项 + 二次确认弹窗，确认后连同全部子会话移入可恢复的回收站（DSH 官方只支持归档） |
| 230 | [xiseliuli/dsh-as-mcp](https://github.com/xiseliuli/dsh-as-mcp) | 0 | 2026-09-30 | 2026-09-30 | dsh-as-mcp |
| 231 | [xlennart/dsh-auto-review-jev](https://github.com/xlennart/dsh-auto-review-jev) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 审批守护者：权限请求先由审查模型裁决。内置 System One 决策 API 后端（TypeSafe Jev / 硅基流动 systemone / 自部署 Laya）、onLowConfidence 低置信度策略与 allowRules 免审白名单。fork 自 gbthui/dsh-auto-review。 |
| 232 | [XN-H/dsh-ark-image](https://github.com/XN-H/dsh-ark-image) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 生图插件：文生图 / 图片生成 / AI 绘画，基于火山方舟 Seedream（豆包）。零依赖、纯 JavaScript、无需构建。 \| DSH image generation plugin for DeepSeek Harness: text-to-image via Volcano Ark Seedream (Doubao). Zero dependencies, plain JavaScript, no build step. |
| 233 | [xqtx9527/dsh-live-pricing](https://github.com/xqtx9527/dsh-live-pricing) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 实时价格条：高峰/空闲时段、中国法定节假日、当前单价与会话花费 \| Live pricing widget for DSH |
| 234 | [XZT1118/dsh-plugin-calendar-clock](https://github.com/XZT1118/dsh-plugin-calendar-clock) | 0 | 2026-09-30 | 2026-09-30 | Calendar clock for the DeepSeek Harness web GUI sidebar: a live clock, an analog dial, and a month calendar. (dsh-plugin) |
| 235 | [Yaaaaaaa233/dsh-desktop](https://github.com/Yaaaaaaa233/dsh-desktop) | 0 | 2026-08-17 | 2026-09-30 | 官方 DeepSeek Harness Desktop 的社区插件适配与改造：余额挂件、外观定制与迁移工具。原 Electron 桌面壳已冻结。 |
| 236 | [Yaaaaaaa233/dsh-plan-and-execute](https://github.com/Yaaaaaaa233/dsh-plan-and-execute) | 0 | 2026-09-29 | 2026-09-30 | On-demand planning for DeepSeek Harness: execute simple tasks directly and call a configurable planning model for complex ones. |
| 237 | [yangyiqun747/dsh-plugin-whale-maid](https://github.com/yangyiqun747/dsh-plugin-whale-maid) | 0 | 2026-09-30 | 2026-09-30 | A chibi whale-maid companion plugin for DeepSeek Harness |
| 238 | [YanKaFei/Lacan-Knowledge-OS](https://github.com/YanKaFei/Lacan-Knowledge-OS) | 0 | 2026-09-30 | 2026-09-30 | Corpus-grounded research environment for Lacanian psychoanalysis: frozen scholarly core (39 hash-pinned components), evidence-carrying answers with provenance, MCP surface (10 tools), Obsidian bridge. Engine ships no source text — the reference corpus is a separate public repository, research use only. |
| 239 | [Yinhefuluoye/dsh-glass-effect](https://github.com/Yinhefuluoye/dsh-glass-effect) | 0 | 2026-09-30 | 2026-09-30 | A glass-material appearance for DSH: translucent composer, dialogs, menus and code blocks — one switch in Settings, off restores the stock look exactly. |
| 240 | [YottaMeta/yotta-skills-plugin](https://github.com/YottaMeta/yotta-skills-plugin) | 0 | 2026-09-01 | 2026-09-30 | YuanGe (元阁) — orchestration and routing for the YottaMeta skill family, packaged as an Agent Plugin. |
| 241 | [yuluo554/dsh-prompt-polisher](https://github.com/yuluo554/dsh-prompt-polisher) | 0 | 2026-09-30 | 2026-09-30 | Composer prompt-polisher button plugin for DeepSeek Harness (dsh): one-click draft rewrite, style presets, dual model path, race protection |
| 242 | [yybai25/dsh-ssh-desktop](https://github.com/yybai25/dsh-ssh-desktop) | 0 | 2026-09-30 | 2026-09-30 | Windows desktop shell for a DeepSeek Harness (DSH) running on a remote server over system ssh — multi-server, notifications, one-click server install, companion DSH plugin. Unofficial. |
| 243 | [Zekilou/dsh-ask-form](https://github.com/Zekilou/dsh-ask-form) | 0 | 2026-09-30 | 2026-09-30 | Structured form questions for the DeepSeek Harness agent: 14 typed field types, conditions, validation, targeted re-asks, and typed JSON answers. |
| 244 | [zhuoxiaoshuai/dsh-database](https://github.com/zhuoxiaoshuai/dsh-database) | 0 | 2026-09-30 | 2026-09-30 | MySQL, Oracle, Redis and Kafka inside DeepSeek Harness. Written entirely with AI. |
| 245 | [Zm886/dsh-ruankao-essay](https://github.com/Zm886/dsh-ruankao-essay) | 0 | 2026-09-30 | 2026-09-30 | 软考系统分析师论文助手：DSH 插件（题库索引 + 10 段式写作 + Word 交付） |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 6Mikao9/dsh-wsl-workspace
- ai-yukin/dsh-0-tools
- AngLi1997/dsh-plugin-sync
- becomeless/dsh-desktop-launcher
- CHF-hub99/dsh-plugin-manager
- ClearLeaf13/dsh-local-llm-connect
- emredeveloper/deepseek-harness-huggingface
- fightingFirefox/dsh-glm-vision
- jevgpt/dsh-plugin-locale-tr
- kaka-in-home/dsh-agent-teams-meta
- lokic7123-star/dsh-route-resilience
- lucagiftzek/dsh-artifacts
- lucagiftzek/dsh-mail
- maiziman/cedardsh-model-probe
- masquerator-coder/dsh-preset-skills
- Moleitau-WorldSaver/dsh-strata-custom
- Nanmu-del/dsh-plan-toggle
- quan-v/dsh-mcp-ui
- quan-v/dsh-safe-gate
- Rainpomelo/deepseek-harness-liquid-glass-theme
- sharkymew/dsh-utility-tools
- shiyi-0x7f/dsh-client-plugin-store
- shiyi-0x7f/dsh-tool-sysinfo
- twilightt1/dsh-llm-chatgpt-web
- vecnode/vn-harness
- vTRKA/voice-stt-dsh
- Xuxchloris/deepseek-harness-sdr-plugin
- Yaaaaaaa233/dsh-adaptive-plan
- yestone111/RTL_Cockpit
- yoggu/dsh-escape-to-stop
- YpipaQ/dsh-whale-usage
- YUNmengyuan/Herta-dsh
