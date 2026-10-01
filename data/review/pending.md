# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-01**
- 快照日期 / Snapshot date: **2026-10-01 (UTC)**
- 待审核 / Pending: **431**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **48**
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

对比上一份快照 **2026-09-30** / vs previous snapshot **2026-09-30**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) | 待审 / pending | 1568 | — | 84 | 279d | 待审高星 | 核准即 Top 10 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 11392 | +294 | 418 | 48d | 日增百星 | 日增 +294★；已不进榜单 |
| ⚠️ [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 已核准 / approved | 3783 | +108 | 134 | 43d | 日增百星 | 日增 +108★；已不进榜单 |
| ⚠️ [reddapidev/dsh-reddit-radar](https://github.com/reddapidev/dsh-reddit-radar) | 已核准 / approved | 113 | +48 | 0 | 44d | 榜单跃升 | 榜单 200→119；高星零 fork |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) ⚠️ | 1568 | 2025-12-25 | 2026-10-01 | A pre-execution guard for AI coding agents. It blocks destructive Git and file system commands, plus common attempts to access sensitive files, before a tool call runs. Supports Amp Code, Antigravity CLI, Claude Code, Codex, Cursor, DeepSeek Harness, Gemini CLI, GitHub Copilot CLI, Grok Build, Hermes Agent, Kimi Code, OpenClaw, OpenCode, and Pi. |
| 2 | [aerovato/operator-memory](https://github.com/aerovato/operator-memory) | 67 | 2026-08-16 | 2026-09-30 | The self-improving context engine for coding agents. |
| 3 | [dsh-wsl-workspace-maintainers/dsh-wsl-workspace](https://github.com/dsh-wsl-workspace-maintainers/dsh-wsl-workspace) | 65 | 2026-08-14 | 2026-09-30 | WSL workspace support for DeepSeek Harness——无缝的 WSL 工作区使用体验，无需在 WSL 之中再安装一个dsh，安装该插件后在 GUI 里直接添加 WSL 工作区即可。WSL workspace support for DeepSeek Harness — Enjoy a seamless WSL workspace experience without needing to install dsh inside WSL. Once this plugin is installed, you can directly add a WSL workspace right from the GUI. |
| 4 | [aa2246740/dsh-model-fusion](https://github.com/aa2246740/dsh-model-fusion) | 37 | 2026-09-27 | 2026-09-30 | Fusion for DeepSeek Harness: a frontier Lead plans and reviews, a much cheaper Sidekick writes the code — frontier results at a discount. |
| 5 | [joeseesun/qiaomu-rss-dsh](https://github.com/joeseesun/qiaomu-rss-dsh) | 30 | 2026-09-30 | 2026-09-30 | 在 DeepSeek Harness 中阅读 RSS，与原生 AI 对话伴读文章 \| RSS reading with native AI companion for DeepSeek Harness |
| 6 | [Ephemeral-AI-Lab/mayfly](https://github.com/Ephemeral-AI-Lab/mayfly) | 20 | 2026-09-03 | 2026-09-30 | Mayfly terminal UI bundle for DeepSeek Harness |
| 7 | [harrylabsj/kiwi](https://github.com/harrylabsj/kiwi) | 20 | 2026-08-03 | 2026-09-30 | A2A commerce negotiation runtime + DeepSeek Harness (dsh) plugin. 安装 Kiwi，让 AI 买家找到你的商品、向你询价；库存、底价和客户数据仍留在你的系统中。 |
| 8 | [JerryLiu369/agent-web-search](https://github.com/JerryLiu369/agent-web-search) | 7 | 2026-08-20 | 2026-10-01 | Agent-native multi-provider web search for AI agents (Claude Code, Hermes, DeepSeek Harness, OpenCode, Codex). Model grounding (Responses, ARK) + semantic search (Exa, Parallel) + keyless defaults via MCP, CLI, and DSH plugin. |
| 9 | [LarryE135/dsh-flash-presets](https://github.com/LarryE135/dsh-flash-presets) | 7 | 2026-09-22 | 2026-10-01 | 通过补充强约束抑制模型的过度思考倾向，减少因为过度思考产生的浪费，同时通过调整压缩逻辑高全局注意力 |
| 10 | [Yiheng-guo/dsh-boot-animation-pro](https://github.com/Yiheng-guo/dsh-boot-animation-pro) | 7 | 2026-09-30 | 2026-09-30 | DSH 片头开机动画增强版：播放控制、触发规则、会话名单、分时段片头、片库管理、中英双语。A full-frame intro animation for DSH. Fork of NativeDog1/dsh-boot-animation. |
| 11 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | 6 | 2026-08-14 | 2026-10-01 | Lifecycle notification layer for AI coding agents — DeepSeek Harness 0.2 plugin: OS notification, in-page toast, and optional sound when a turn, background job, review, or failure needs you. |
| 12 | [Rainpomelo/dsh-liquid-glass-theme](https://github.com/Rainpomelo/dsh-liquid-glass-theme) | 6 | 2026-08-18 | 2026-09-30 | DeepSeek Harness - 液态玻璃与动态壁纸主题 (WebGL 物理透镜、动态壁纸与多层毛玻璃) #dsh-plugin |
| 13 | [vecnode/vncode](https://github.com/vecnode/vncode) | 6 | 2026-09-08 | 2026-09-30 | vncode 🤖 Desktop/Web Agent IDE with core DSH. Launchers run on Windows, macOS and Linux - the Windows half is PowerShell, the macOS/Linux half is plain POSIX shell. |
| 14 | [aa2246740/dsh-notch](https://github.com/aa2246740/dsh-notch) | 5 | 2026-09-10 | 2026-09-30 | Native macOS Notch for DSH sessions, inline answers and animated task status |
| 15 | [busabase/busabase-dsh-plugin](https://github.com/busabase/busabase-dsh-plugin) | 5 | 2026-09-02 | 2026-09-30 | Deepseek Harness Plugin for Busabase |
| 16 | [LisonEvf/dsh-stock-panel](https://github.com/LisonEvf/dsh-stock-panel) | 5 | 2026-09-02 | 2026-09-30 | 把 DSH 会话窗口变成 A 股盯盘执行台：行情仪表盘 · 盘后复盘七步 · 模型作战思路 · 自挖板块（无监督共动聚类 + LLM 命名）· 个股工作台 · 选股筛选 · 监控提醒 |
| 17 | [CyberWei922/dsh-cyberwhale](https://github.com/CyberWei922/dsh-cyberwhale) | 4 | 2026-09-29 | 2026-10-01 | 一只随 Harness 工作状态变化、陪你使用 DeepSeek Harness 官方 Desktop 的蓝色大肥鱼桌宠 |
| 18 | [HerTa-st/Herta-dsh](https://github.com/HerTa-st/Herta-dsh) | 4 | 2026-09-19 | 2026-09-30 | dsh插件版herta |
| 19 | [Lin-Dongg/dsh-musage-card](https://github.com/Lin-Dongg/dsh-musage-card) | 3 | 2026-10-01 | 2026-10-01 | Multi-provider (11) quota &amp; balance glass card for the DSH sidebar footer — local fork of dsh-musage with SiliconFlow/Tavily/ZenMux/MiMo/Claude support |
| 20 | [lpeixin/dsh-qualityforge](https://github.com/lpeixin/dsh-qualityforge) | 3 | 2026-10-01 | 2026-10-01 | QualityForge is an enterprise-grade DeepSeek Harness QA plugin that automates systematic end-to-end testing and delivers P0–P3 severity-based, actionable reports and quality gates to help developers identify issues and prioritize fixes. QualityForge 是一个面向企业级项目的 DeepSeek Harness QA 插件，自动执行系统性端到端测试，并通过 P0–P3 严重度分级、可勾选的测试报告与质量门禁，帮助开发者快速识别问题并确定修复优先级。 |
| 21 | [sakanamaru/dsh-minato](https://github.com/sakanamaru/dsh-minato) | 3 | 2026-08-15 | 2026-09-30 | dsh-shio — 社区版本机部署运维套件 for DeepSeek Harness (dsh): install / start / monitor, backup &amp; restore, diagnose and quarantine broken plugins (unofficial) · 安装 / 启动监控 / 备份恢复 / 插件诊断与隔离 |
| 22 | [wbb316/dsh-profile-sync](https://github.com/wbb316/dsh-profile-sync) | 3 | 2026-09-30 | 2026-09-30 | profile 间插件迁移：把网页版（web）的插件集安全牵引到桌面端（desktop）—— 算差异、预检、生成退出后执行的脚本、重启后核对 |
| 23 | [a961282799-crypto/dsh-timeband](https://github.com/a961282799-crypto/dsh-timeband) | 2 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 头像旁的峰谷时段、倒计时与 24 小时时间轴插件 |
| 24 | [gongstudent/dsh-models-plus](https://github.com/gongstudent/dsh-models-plus) | 2 | 2026-09-18 | 2026-09-30 | DeepSeek Harness profile bundle：提供本地路由代理兼容 OpenAI/Anthropic API，并为模型设置页增加搜索、批量取消勾选及防卡顿开关。 |
| 25 | [HGT158/dsh-plugin-share](https://github.com/HGT158/dsh-plugin-share) | 2 | 2026-09-30 | 2026-09-30 | 把你这套 DSH 插件变成一段可粘贴的分享码，别人贴进去就能逐个安装 · Turn your DSH plugin set into one pasteable code, and anyone can install the plugins one by one |
| 26 | [liancha22/dsh-puzzle-mode](https://github.com/liancha22/dsh-puzzle-mode) | 2 | 2026-09-19 | 2026-10-01 | DSH 插件｜拼图模式：一个会话只绑一个拼图项目（主文档 + 若干模块文档），AI 主动提问把不确定项变成已定项，用五维算项目健康性；主文档第五节 \`## 工作流\` 是标准化流水线（一条 = 一个 ### 名字块 + 有序步骤）。文档格式 v6。 |
| 27 | [longhao666666/dsh-session-delete](https://github.com/longhao666666/dsh-session-delete) | 2 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：侧栏一键删除会话（先归档再清理磁盘日志，运行中的会话受保护） |
| 28 | [shuiqian520/dsh-session-delete](https://github.com/shuiqian520/dsh-session-delete) | 2 | 2026-09-30 | 2026-09-30 | DSH plugin: permanently delete a session from the sidebar menu, and retry a user message or an assistant reply. |
| 29 | [TC635807/better-crawler4agent](https://github.com/TC635807/better-crawler4agent) | 2 | 2026-09-12 | 2026-09-30 | When I was using agents, I found that most agents rely on curl commands to scrape web pages, which has a very low success rate and is slow, so I made this. |
| 30 | [vitas/dsh-web-search-gateway](https://github.com/vitas/dsh-web-search-gateway) | 2 | 2026-09-24 | 2026-10-01 | Grounded web search for DeepSeek Harness on any OpenRouter-compatible gateway: the built-in web_search tool runs on the same endpoint and key as your chat models. |
| 31 | [xmwpoi/dsh-approval-center](https://github.com/xmwpoi/dsh-approval-center) | 2 | 2026-09-25 | 2026-09-30 | DSH 0.1.7-rc.2 的 Windows 审批与主对话通知插件：批准/拒绝、本轮完成与异常提醒、SQLite 审计；子代理通知关闭。GitHub Releases 分发。 |
| 32 | [17897693/dsh-wen](https://github.com/17897693/dsh-wen) | 1 | 2026-09-30 | 2026-09-30 | DSH 办公文档插件：docx/xlsx/pptx/pdf/odf/csv/html 读写改与互转 + 离线 OCR（自用为主，不承诺维护） |
| 33 | [2JumpSinA/dsh-context-guard](https://github.com/2JumpSinA/dsh-context-guard) | 1 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin that tells you to wrap up and start a new session before the session gets too long: badge + one-shot banner from the official contextPressure projection, and from 45% occupancy it auto-drafts a machine-facts handoff block into your working directory. Zero context tax, bilingual zh/en. |
| 34 | [9931666/dsh-plugin-crossfire](https://github.com/9931666/dsh-plugin-crossfire) | 1 | 2026-10-01 | 2026-10-01 | Crossfire (针锋) for DeepSeek Harness: put a settled result on the stand, let red-team experts attack it from chosen dimensions, and adjudicate every single defect yourself. The machine only finds flaws; the human always owns the verdict. |
| 35 | [adsikito/dsh-study-steward](https://github.com/adsikito/dsh-study-steward) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness agent preset: a study-and-execution steward persona on the full Standard tool surface, shipped with a generic Markdown rule pack for plans, vocabulary, algorithms, review and archiving. |
| 36 | [aitcmhk-web/DSH-bot](https://github.com/aitcmhk-web/DSH-bot) | 1 | 2026-09-28 | 2026-09-30 | 通过 TG/微信实现离家办公：发布任务、语音聊天、切换模型、升级重启、自动记忆...Telegram / WeChat bridge plugin for DeepSeek Harness (DSH): bind your bot to a DSH workspace in one command, with handoff continuity between sessions. |
| 37 | [ASDLYF/Bilibili-Quark-Transform](https://github.com/ASDLYF/Bilibili-Quark-Transform) | 1 | 2026-09-29 | 2026-09-30 | B 站视频批量下载（可选分辨率 / 分集）并上传到夸克网盘 |
| 38 | [aujurd22/dsh-flymemory](https://github.com/aujurd22/dsh-flymemory) | 1 | 2026-09-30 | 2026-09-30 | Long-term memory for DeepSeek Harness: 15 FlyMemory MCP tools, automatic recall and capture hooks, and a supervised local engine. |
| 39 | [ayst-z/music-code-mv](https://github.com/ayst-z/music-code-mv) | 1 | 2026-10-01 | 2026-10-01 | DSH plugin: render code-driven music videos (music-code-mv) — deterministic Canvas2D/Three.js shots, headless-Chrome or browserless skia engine, ffmpeg AV1/HEVC up to 4K/120fps/12-bit |
| 40 | [Bear0117/dsh-plan-checkup](https://github.com/Bear0117/dsh-plan-checkup) | 1 | 2026-10-01 | 2026-10-01 | Plan Checkup for DeepSeek Harness: checks each step of a plan before you approve it and marks the results on the plan review card. |
| 41 | [better-er/dsh-mobile-drawer](https://github.com/better-er/dsh-mobile-drawer) | 1 | 2026-09-29 | 2026-09-30 | 「DSH·手机适配」：窄屏下把侧栏收成悬浮小方块，点会话自动收起，并压掉切会话时的自动聚焦，免得软键盘把页面顶起。纯客户端插件。 |
| 42 | [blazar-source/dsh-r7-office](https://github.com/blazar-source/dsh-r7-office) | 1 | 2026-10-01 | 2026-10-01 | R7-Office document processing plugin and MCP server for DeepSeek Harness (DOCX, XLSX, PPTX, PDF) |
| 43 | [CaiMingshen/dsh-icloud-calendar](https://github.com/CaiMingshen/dsh-icloud-calendar) | 1 | 2026-10-01 | 2026-10-01 | Apple iCloud Calendar over CalDAV for DeepSeek Harness (DSH): five tools, cross-platform credential store, request deadlines, and a dry-run delete that must confirm an exact object count. |
| 44 | [chupeter854-lang/dsh-approval-autofocus](https://github.com/chupeter854-lang/dsh-approval-autofocus) | 1 | 2026-10-01 | 2026-10-01 | Make Enter approve a pending DSH approval without clicking — DeepSeek Harness client plugin (审批卡自动聚焦，Enter 批准 / Esc 拒绝) |
| 45 | [crease123/dsh-journal-calendar](https://github.com/crease123/dsh-journal-calendar) | 1 | 2026-09-30 | 2026-09-30 | Daily journal for DeepSeek Harness: the agent records what you did and what you plan to do into one JSON file per day, and the right sidebar draws them as a calendar with checkable todos. |
| 46 | [cspyz/dsh-terse-mode](https://github.com/cspyz/dsh-terse-mode) | 1 | 2026-10-01 | 2026-10-01 | Four terse levels plus independent reasoning-effort, web-search and subagent switches, on the conversation header and in the Settings page. No output ceiling. |
| 47 | [daha1216/dsh-update-checker](https://github.com/daha1216/dsh-update-checker) | 1 | 2026-10-01 | 2026-10-01 | DSH plugin: one-click check which installed plugins have upstream updates (check only, never installs), with release notes |
| 48 | [drfai/dsh-whale-pet](https://github.com/drfai/dsh-whale-pet) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 桌宠插件：内置 Coopanion 鲸鱼娘分层精灵，随模型峰谷计价自动更换女仆装发带颜色，并常驻显示时段倒计时 |
| 49 | [Erbsen16/dsh-client-ui-dracula](https://github.com/Erbsen16/dsh-client-ui-dracula) | 1 | 2026-09-30 | 2026-09-30 | 把 VS Code 的 Dracula（吸血鬼）配色搬到 DeepSeek Harness 的网页界面，顺带做了一组程序员向的排版调优。深色模式专用，随时可整页还原。 |
| 50 | [fangweixuan26-hash/dsh-dual-balance](https://github.com/fangweixuan26-hash/dsh-dual-balance) | 1 | 2026-09-29 | 2026-09-30 | DSH plugin: show the signed-in DeepSeek account's Platform wallet next to the DEEPSEEK_API_KEY balance, as one pill in the composer stats band |
| 51 | [FIZMIE/dsh-restart-button](https://github.com/FIZMIE/dsh-restart-button) | 1 | 2026-09-30 | 2026-09-30 | One-click restart for the DeepSeek Harness desktop app: a sidebar button plus an agent-callable restart route. |
| 52 | [floydc-sz/dsh-serial-debugger](https://github.com/floydc-sz/dsh-serial-debugger) | 1 | 2026-10-01 | 2026-10-01 | A serial-port debugger plugin for DeepSeek Harness: port parameter setup, live receive display, and data transmission — inside the DSH UI. |
| 53 | [functy23/dsh-workbuddy-connect-functy](https://github.com/functy23/dsh-workbuddy-connect-functy) | 1 | 2026-09-13 | 2026-10-01 | corrinehu/dsh-workbuddy-connect 的 Functy 分支：仪表盘、多账号轮换与额度展示，把 WorkBuddy 模型接到 DeepSeek Harness。 |
| 54 | [gjy1992/dsh-diagram](https://github.com/gjy1992/dsh-diagram) | 1 | 2026-09-30 | 2026-10-01 | dsh (DeepSeek Harness) 架构图生成与 draw.io 导出插件：YAML DSL -&gt; ELK 布局 -&gt; 明文 .drawio |
| 55 | [Han-1413141/dsh-autocompose](https://github.com/Han-1413141/dsh-autocompose) | 1 | 2026-09-30 | 2026-09-30 | Task-aware plugin composition for DeepSeek Harness, with native Web UI and isolated task execution |
| 56 | [Hercules-debug/butler-git](https://github.com/Hercules-debug/butler-git) | 1 | 2026-09-26 | 2026-09-30 | 把「我改完了」变成可验证的事实:Δ(预期改动)+ P(检测程序)全过才产生 commit。零依赖,只用 node 和 git。 \| Turn 'done' into a verifiable fact — a commit exists only if Δ + P both pass. |
| 57 | [Hnqhj/dsh-asset-library](https://github.com/Hnqhj/dsh-asset-library) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 本地资产库插件：把项目目录里的图片/视频/音频变成可浏览、可筛选、可标注的面板，并开放只读工具给 Agent。零依赖，不搬文件。 |
| 58 | [hoyyang/dsh-project-manager](https://github.com/hoyyang/dsh-project-manager) | 1 | 2026-09-30 | 2026-09-30 | Project board for DeepSeek Harness: kanban card groups, cards linked to landfill-project memory, mounted repos and sessions. |
| 59 | [huanglianqi/dsh-math-snippets](https://github.com/huanglianqi/dsh-math-snippets) | 1 | 2026-09-30 | 2026-09-30 | LaTeX snippet expansion in the DSH web composer: Tab expands a trigger into a formula template with the caret in the first hole, then walks the rest. // expands with no Tab at all. |
| 60 | [Hwayn-pixel/dsh-prompt-desk](https://github.com/Hwayn-pixel/dsh-prompt-desk) | 1 | 2026-09-30 | 2026-10-01 | DSH 提示词工作台：看清 system prompt 的每一段、写下自己的家规、体检重复与矛盾，并记下每次改动。A prompt workbench for DSH. |
| 61 | [ilyskyo/Word-Hover-dsh](https://github.com/ilyskyo/Word-Hover-dsh) | 1 | 2026-10-01 | 2026-10-01 | 在 DeepSeek Harness 里读 AI 英文回复时，鼠标悬停任意英文单词 → 单词出现「被选中」高亮 → 自动弹出音标、词性、中文释义、英文释义、双语例句。 |
| 62 | [invoker-bandit/dsh-history-up](https://github.com/invoker-bandit/dsh-history-up) | 1 | 2026-09-30 | 2026-09-30 | 一个 DeepSeek Harness 插件：记录每个会话里你提交过的输入，支持用 &lt;kbd&gt;↑&lt;/kbd&gt; 方向键逐条回溯，也可以用 &lt;kbd&gt;/&lt;/kbd&gt; 菜单挑一条填进输入框。按会话隔离的 shell 式输入历史。 |
| 63 | [IORT-DOIT/dsh-meeting-room](https://github.com/IORT-DOIT/dsh-meeting-room) | 1 | 2026-10-01 | 2026-10-01 | 给 DSH 加一个「会议室」：多个会话（AI 或人）围着同一个会议目标讨论、交接文件；目标达成后由每间房自带的记录员读完整记录写《会议结果》草稿，人工审核后按成员分节发布。发言自动接力、文件自动归档、权限可在会议室里直接批。13 个 room_* 工具、8 个配置键、525 项自测全绿。 |
| 64 | [Jockjrop/dsh-usage-stats](https://github.com/Jockjrop/dsh-usage-stats) | 1 | 2026-08-19 | 2026-10-01 | Token usage statistics for the DSH web GUI: 用量统计 settings page with a usage heatmap, 24-hour token chart, per-model breakdown. External bundle patch, no DSH source changes. |
| 65 | [joeseesun/qiaomu-radio-dsh](https://github.com/joeseesun/qiaomu-radio-dsh) | 1 | 2026-09-30 | 2026-09-30 | 乔木电台 DeepSeek Harness 插件 \| Live radio with themed players, mood channels and local listening history |
| 66 | [joeseesun/qiaomu-reader-dsh](https://github.com/joeseesun/qiaomu-reader-dsh) | 1 | 2026-09-30 | 2026-09-30 | 乔木阅读：在 DeepSeek Harness 中阅读 EPUB、PDF、TXT，划线批注、导出阅读笔记与 AI 伴读。 |
| 67 | [jryang1997/dsh-hold-to-dictate](https://github.com/jryang1997/dsh-hold-to-dictate) | 1 | 2026-09-30 | 2026-10-01 | Hold-to-talk dictation for the DeepSeek Harness composer: long-press the input box, release to transcribe into the draft. |
| 68 | [Justin-Mai/dsh-stock-view](https://github.com/Justin-Mai/dsh-stock-view) | 1 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 右上角行情盯盘插件：A 股 / ETF / 港股 / 美股 自选股 + 加密货币实时行情 |
| 69 | [kxdyh/dsh-agent-governor](https://github.com/kxdyh/dsh-agent-governor) | 1 | 2026-09-30 | 2026-09-30 | Two interception layers for DeepSeek Harness agents - DOL communication semantics and Sentinel tool execution governance |
| 70 | [kxdyh/dsh-usage-meter](https://github.com/kxdyh/dsh-usage-meter) | 1 | 2026-09-30 | 2026-09-30 | Dsh用量与余额仪表Live token usage and account balance meter for the DeepSeek Harness sidebar |
| 71 | [lingyingaojue/dsh-dev-mode](https://github.com/lingyingaojue/dsh-dev-mode) | 1 | 2026-09-30 | 2026-09-30 | 开发者模式：新手几句大白话讲需求，AI 自动走完「写计划 → 子代理审计划 → 极简模式后台会话写代码并编译 → 子代理 QA → 修 bug → 复测 → 交付」的 DSH 插件（agent preset）。 |
| 72 | [liuyuhao1122/dsh-hermes-memory](https://github.com/liuyuhao1122/dsh-hermes-memory) | 1 | 2026-09-30 | 2026-09-30 | Lightweight layered memory plugin for DeepSeek Harness with automatic distillation and compaction. |
| 73 | [longhao666666/dsh-ask-mode](https://github.com/longhao666666/dsh-ask-mode) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：会话内一键切换咨询模式——只读问答，仅可新建 txt/md/docx 产出 |
| 74 | [longhao666666/dsh-element-context](https://github.com/longhao666666/dsh-element-context) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：对话中圈选/关联 UI 元素，把选择器、源码位置、盒模型与计算样式注入模型提示词 |
| 75 | [lorsabyan/dsh-file-download](https://github.com/lorsabyan/dsh-file-download) | 1 | 2026-10-01 | 2026-10-01 | Download files and recursive folder ZIP archives from DeepSeek Harness file rows and preview mode. |
| 76 | [Lostforest7/dsh-encoding](https://github.com/Lostforest7/dsh-encoding) | 1 | 2026-09-30 | 2026-09-30 | Correct-encoding command runner and mojibake recovery for DeepSeek Harness. 让 DeepSeek Harness 在 Windows 上不再乱码。 |
| 77 | [LoveDoLove/dsh-codebase-memory-mcp](https://github.com/LoveDoLove/dsh-codebase-memory-mcp) | 1 | 2026-09-30 | 2026-10-01 | Codebase Memory MCP bridge plugin for DeepSeek Harness: knowledge-graph code search, AST snippets, architecture analysis, call-graph tracing, auto-started graph UI, bundled skill, and /cbm command. |
| 78 | [Lzhimie/dsh-skin-master](https://github.com/Lzhimie/dsh-skin-master) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 皮肤大师：主题壁纸/自定义皮肤插件 —— 全局背景图片/视频、毛玻璃、输入框背景、弹出框毛玻璃、滤镜、AI 回复文本与消息气泡颜色 |
| 79 | [MCviseron/dsh-eda-mcp](https://github.com/MCviseron/dsh-eda-mcp) | 1 | 2026-10-01 | 2026-10-01 |  DeepSeek Harness (DSH) 连接到 嘉立创EDA专业版 / EasyEDA Pro，让 Agent 通过 MCP 工具画原理图。 |
| 80 | [MCviseron/dsh-email-notify](https://github.com/MCviseron/dsh-email-notify) | 1 | 2026-08-21 | 2026-10-01 | DeepSeek Harness（DSH）的邮件通知插件 |
| 81 | [mike-sl-ig/dsh-agent-bridge](https://github.com/mike-sl-ig/dsh-agent-bridge) | 1 | 2026-09-30 | 2026-09-30 | Data-driven agent bridge plugin for DeepSeek Harness: JSON recipes, cross-platform launcher, recipe wizard, self-test, registry import |
| 82 | [mpinaev/dsh-context-governor](https://github.com/mpinaev/dsh-context-governor) | 1 | 2026-09-29 | 2026-10-01 | Context chip for DeepSeek Harness: cost per step, cache-hit, bands, compaction threshold, balance, tariff. Never calls a model. \| Индикатор контекста для DeepSeek Harness: цена шага, кэш-хит, полосы, порог компакции, баланс, тариф. Модель не вызывает и токены не тратит. |
| 83 | [Noob-stupid/dsh-connection-card-host](https://github.com/Noob-stupid/dsh-connection-card-host) | 1 | 2026-10-01 | 2026-10-01 | DSH session connection card host - stateful connections between sessions, with connection-level card plugins |
| 84 | [Noob-stupid/dsh-connection-card-host-preview](https://github.com/Noob-stupid/dsh-connection-card-host-preview) | 1 | 2026-09-29 | 2026-10-01 | DSH session connection card host: establish stateful connections between sessions with card plugins |
| 85 | [ns-zzj/dsh-android-scrcpy](https://github.com/ns-zzj/dsh-android-scrcpy) | 1 | 2026-09-29 | 2026-10-01 | DSH 的安卓投屏 provider —— 通过 adb（USB 调试或已配对的无线调试）把安卓设备接进对话： 多设备实时投屏、鼠标点按滑动、返回/主页与音量电源按键、控件树读取、UHID 虚拟外接键盘（PC 键盘直接变设备键盘）； AI 可以截图识别画面、读控件清单、按坐标点击与长按、注入文字。界面与 AI 工具在 dsh-scrcpy-core，两个平台可同时投屏。 |
| 86 | [ONEOne-1v1/dsh-github-upload](https://github.com/ONEOne-1v1/dsh-github-upload) | 1 | 2026-09-26 | 2026-10-01 | 给 DeepSeek Harness 用的动态 Cordis 插件：在界面右下角加一个按钮，把本地项目一键推送到 GitHub —— 绑定账号、选/建仓库、挑要上传的文件、改仓库公开或私密，全程点鼠标，不消耗模型 Token。 |
| 87 | [ricardochen1996/dsh-browser-use](https://github.com/ricardochen1996/dsh-browser-use) | 1 | 2026-09-30 | 2026-10-01 | DeepSeek Harness browser provider: read a page as an indexed action space, then run one guarded operation at a time. |
| 88 | [Richardwongyk/dsh-happy-reader](https://github.com/Richardwongyk/dsh-happy-reader) | 1 | 2026-09-30 | 2026-09-30 | Happy Reader（dsh-happy-reader）—— DeepSeek Harness 桌面端阅读增强插件：隐藏输入框/上边栏、自由调整字号、中英分设正文字体、内容宽度扩展、一键全屏。dsh plugin / DSH plugin. |
| 89 | [Seelerc/dsh-plugin-delete-archived](https://github.com/Seelerc/dsh-plugin-delete-archived) | 1 | 2026-10-01 | 2026-10-01 | Permanently delete archived DeepSeek Harness sessions along with their on-disk history and log directories. |
| 90 | [seeseeczl/dsh-sym](https://github.com/seeseeczl/dsh-sym) | 1 | 2026-09-30 | 2026-09-30 | 给 DeepSeek Harness 接的共生体（dsh-sym）：实时会话花费（人民币，按厂商/模型与峰谷时段折算）、每轮费用、账户余额、峰谷时段标记，以及把任一回复作为上下文引用的 @ 按钮。名字取自 symbiote —— 附着在宿主上、持续长出能力，功能不限于计费。 |
| 91 | [sevastopol36/dsh-plugin-ghproxy](https://github.com/sevastopol36/dsh-plugin-ghproxy) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness native plugin: fetch GitHub files, release assets, archives, gists and api.github.com JSON through public proxy mirrors with automatic health-checked failover |
| 92 | [sevastopol36/dsh-plugin-scihub](https://github.com/sevastopol36/dsh-plugin-scihub) | 1 | 2026-09-30 | 2026-09-30 | a sci-hub search plugin for deepseek harness |
| 93 | [sknagato/dsh-plugin-fc-emulator](https://github.com/sknagato/dsh-plugin-fc-emulator) | 1 | 2026-09-30 | 2026-09-30 | dsh fc/nes模拟器 |
| 94 | [stefanohe/dsh-prefill-speed-stats](https://github.com/stefanohe/dsh-prefill-speed-stats) | 1 | 2026-09-29 | 2026-09-30 | Show prefill speed directly in the status bar. |
| 95 | [stefanohe/dsh-show-balance](https://github.com/stefanohe/dsh-show-balance) | 1 | 2026-09-29 | 2026-09-30 | Show account balance directly in the status bar. |
| 96 | [tanweiping1012-source/PhotoFilterAgent](https://github.com/tanweiping1012-source/PhotoFilterAgent) | 1 | 2026-08-22 | 2026-09-30 | 跑在 DeepSeek Harness 上的照片策展 agent：本地 Vision 分类 + 连拍组比较 + 按需视觉打分，原图只读 |
| 97 | [ThinkofRain1213/dsh-project-groups](https://github.com/ThinkofRain1213/dsh-project-groups) | 1 | 2026-09-25 | 2026-09-30 | DSH 项目分组插件：1:1 接管官方侧栏工作区浏览区，把分组从「目录所有权」摘下来，变成纯前端的项目归属，适配完全权限工作流；关闭插件即完全恢复官方行为。 |
| 98 | [TiJun-Prime/dsh-turn-delete](https://github.com/TiJun-Prime/dsh-turn-delete) | 1 | 2026-09-17 | 2026-09-30 | Delete one finished turn from a DSH session without deleting the session. A trash button removes that turn's question, reply and tool records from the conversation and the model context, while the session, later turns and the append-only log stay. Independent continuation of hanshenmesen/dsh-turn-delete (DSH 0.1.5-rc.2 + 0.2.0-rc.1). |
| 99 | [Ushio155/dsh-composer-balance](https://github.com/Ushio155/dsh-composer-balance) | 1 | 2026-09-30 | 2026-09-30 | 把 DeepSeek 余额常驻在 DSH 输入框工具行：接替已停更的 kte66/dsh-balance，修复密钥落盘、无来源策略与遮蔽内置 UI。 |
| 100 | [verneuil/dsh-opencode-go-usage](https://github.com/verneuil/dsh-opencode-go-usage) | 1 | 2026-09-30 | 2026-09-30 | DeepSeek Harness插件，一个极简的浮窗同时显示 DeepSeek 官方余额与 OpenCode Go 的 5h/w/m 用量 |
| 101 | [viztor/dsh-opencode-patch](https://github.com/viztor/dsh-opencode-patch) | 1 | 2026-09-30 | 2026-10-01 | OpenCode on DeepSeek Harness — DSH plugin that keeps OpenCode Zen + Go free-tier models working: session affinity, gateway origin headers, and tool-schema fallback. |
| 102 | [viztor/dsh-tinyfish](https://github.com/viztor/dsh-tinyfish) | 1 | 2026-09-29 | 2026-10-01 | TinyFish-backed search and fetch providers for the DeepSeek Harness web capability seam (ctx.web) — $0 SERP and page extraction, direct or via Monid. |
| 103 | [WindDreamboat/dsh_laap](https://github.com/WindDreamboat/dsh_laap) | 1 | 2026-10-01 | 2026-10-01 | 插件-dsh意识工程最小实现 |
| 104 | [windwhiterain/dsh-subagent-templates](https://github.com/windwhiterain/dsh-subagent-templates) | 1 | 2026-09-30 | 2026-09-30 | Named subagent templates for DeepSeek Harness: a template fixes a starting route (or the route pool it resolves one from), an agent preset, and an optional persona, so a delegating agent picks by name. |
| 105 | [wula1223/dsh-plugin-dev](https://github.com/wula1223/dsh-plugin-dev) | 1 | 2026-09-30 | 2026-09-30 | DSH plugin/hook/skill development standard - a battle-tested playbook for DeepSeek Harness |
| 106 | [WuShichao/dsh-ipynb-preview](https://github.com/WuShichao/dsh-ipynb-preview) | 1 | 2026-09-30 | 2026-09-30 | Render Jupyter .ipynb notebooks in the DeepSeek Harness document preview: syntax highlighting, offline LaTeX, and zoomable figures |
| 107 | [wyq183/dsh-artifact-library](https://github.com/wyq183/dsh-artifact-library) | 1 | 2026-08-14 | 2026-09-30 | DSH 产物库 + 本地文件管理器：跨会话产物采集 / AI 精化 / 全文检索，以及基于 Everything 清单索引的文件搜索与目录浏览 |
| 108 | [Wyxcn445/dsh-balance](https://github.com/Wyxcn445/dsh-balance) | 1 | 2026-10-01 | 2026-10-01 | 显示你的token余额 |
| 109 | [xiex16070-jpg/dsh-learn](https://github.com/xiex16070-jpg/dsh-learn) | 1 | 2026-10-01 | 2026-10-01 | Persistent learning for DeepSeek Harness: turn a session's corrections, failures and fixes into ordinary DSH skills. Zero extra model calls. |
| 110 | [xuhan242/deliverable-qa](https://github.com/xuhan242/deliverable-qa) | 1 | 2026-09-30 | 2026-09-30 | 交付物质检:排版 / AI 腔 / 敏感内容三线检查,面向 AI 协作产出的中文文档。Deliverable QA for Chinese documents: typography, AI-tone and sensitive-content checks. |
| 111 | [zcr-133/dsh-follow-edits](https://github.com/zcr-133/dsh-follow-edits) | 1 | 2026-09-30 | 2026-09-30 | Cline-style follow-along for DeepSeek Harness: open the file the agent just changed in the right Sidebar, jump to the change, and highlight the diff. |
| 112 | [zkforge/dsh-ccd-style](https://github.com/zkforge/dsh-ccd-style) | 1 | 2026-10-01 | 2026-10-01 | Claude Code Desktop 风格的 DeepSeek Harness 桌面版界面插件 |
| 113 | [0gl20shk0sbt36/dsh-deadman](https://github.com/0gl20shk0sbt36/dsh-deadman) | 0 | 2026-09-02 | 2026-09-30 | Deadman switch plugin for DeepSeek Harness (dsh): runs a command when nobody is still working |
| 114 | [0x-0cd/dsh-opencode-go-status](https://github.com/0x-0cd/dsh-opencode-go-status) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (DSH) Web plugin: OpenCode Go subscription panel — usage quota, remaining quota, subscription expiry and renewal state, all from one API-key endpoint (the public /zen/go/v1/usage API has no money and no expiry date). |
| 115 | [0x-0cd/dsh-web-search-failover](https://github.com/0x-0cd/dsh-web-search-failover) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (dsh) web_search provider: Exa primary with the official DeepSeek search provider as an automatic fallback. |
| 116 | [121212165/dsh-plugin-cache-guard](https://github.com/121212165/dsh-plugin-cache-guard) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: prefix-cache health guard - separates real prefix rewrites from ordinary context growth, prices the tokens they waste, and warns the model once per break (/cache, cache_status) |
| 117 | [121212165/dsh-plugin-cost-ledger](https://github.com/121212165/dsh-plugin-cost-ledger) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: bills every model call into a monthly JSONL cost ledger - token buckets, cache reads, off-peak rules (/ledger /ledger-export) |
| 118 | [121212165/dsh-plugin-deep-scan](https://github.com/121212165/dsh-plugin-deep-scan) | 0 | 2026-10-01 | 2026-10-01 | dsh plugin: iterative GitHub deep search - exact-phrase, broad-match, README-body and topic-expansion channels with a diminishing-returns stop rule (/deep-scan) |
| 119 | [121212165/dsh-plugin-eco-scan](https://github.com/121212165/dsh-plugin-eco-scan) | 0 | 2026-09-29 | 2026-09-30 | dsh plugin: scans the dsh plugin ecosystem - stars, npm weekly downloads, release-asset downloads - segments niches and ranks growth from daily snapshot deltas (/eco-scan) |
| 120 | [121212165/dsh-plugin-ide-hub](https://github.com/121212165/dsh-plugin-ide-hub) | 0 | 2026-09-30 | 2026-09-30 | dsh plugin: one hub over your coding IDEs (Trae/Qoder/ZCode/CatPaw/Codex/Claude Code/OpenCode/dsh) - session inventory, quota runway, shared prompt rules, Obsidian export (/ide-hub /hub-sessions /hub-usage) |
| 121 | [121212165/dsh-plugin-obsidian-push](https://github.com/121212165/dsh-plugin-obsidian-push) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: pushes archived session transcripts into an Obsidian vault as Markdown with YAML frontmatter, deduped by content hash (/obsidian-push) |
| 122 | [121212165/dsh-plugin-prompt-vault](https://github.com/121212165/dsh-plugin-prompt-vault) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: personal prompt library inside the harness - import tagged templates, browse them, and fire one into the current session (/pv) |
| 123 | [121212165/dsh-plugin-relay-quota](https://github.com/121212165/dsh-plugin-relay-quota) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: reads remaining quota and usage from any OpenAI-compatible relay's billing surface (/quota, quota_check) |
| 124 | [121212165/dsh-plugin-session-insights](https://github.com/121212165/dsh-plugin-session-insights) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: cross-session activity stats from per-call token records - daily trend, priciest sessions, model mix, CSV export (/insights /insights-export) |
| 125 | [121212165/dsh-plugin-task-forge](https://github.com/121212165/dsh-plugin-task-forge) | 0 | 2026-10-01 | 2026-10-01 | dsh plugin: compiles a rough need into a versioned task book, then hands it to any AI window losslessly via a read-back handshake (/forge /relay /ack /answer /forge-list) |
| 126 | [121212165/dsh-plugin-tool-trace](https://github.com/121212165/dsh-plugin-tool-trace) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: per-tool-call telemetry - duration, argument and result sizes - into monthly JSONL, with /tools-stats ranking the slowest tools |
| 127 | [121212165/dsh-plugin-transcript](https://github.com/121212165/dsh-plugin-transcript) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: archives every session turn to monthly JSONL sidecars and exports Markdown - the transcript layer other plugins search, render and push (/transcript /transcript-export) |
| 128 | [121212165/dsh-plugin-transcript-search](https://github.com/121212165/dsh-plugin-transcript-search) | 0 | 2026-09-28 | 2026-09-30 | dsh plugin: full-text search across archived session transcripts, reading the JSONL sidecars written by dsh-plugin-transcript (/find, session_search) |
| 129 | [1497105876/dsh-mimotts](https://github.com/1497105876/dsh-mimotts) | 0 | 2026-09-30 | 2026-09-30 | MiMo TTS 语音合成 DSH 插件（DeepSeek Harness 0.1.7） |
| 130 | [506058115-cmd/dsh-document-editor](https://github.com/506058115-cmd/dsh-document-editor) | 0 | 2026-09-27 | 2026-09-30 | DSH MCP server for reading, creating, editing, and verifying PDF, Word, Excel, and PowerPoint files. |
| 131 | [514006234/dsh-weekly-check](https://github.com/514006234/dsh-weekly-check) | 0 | 2026-10-01 | 2026-10-01 | DSH 插件周榜：中文策展的插件排行 + 免费模型可用性周报，每周一自动更新并发布到 GitHub Pages |
| 132 | [aa2246740/dsh-compact-saviour](https://github.com/aa2246740/dsh-compact-saviour) | 0 | 2026-09-26 | 2026-09-30 | Dedicated-model compaction rescue and native manual compression for DeepSeek Harness |
| 133 | [Adamaik/dsh-ollama-cloud-usage](https://github.com/Adamaik/dsh-ollama-cloud-usage) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin: Ollama Cloud remaining quota in Settings, with an in-page API key editor. · DSH 插件：设置页显示 Ollama Cloud 剩余额度并支持填写 API Key。 |
| 134 | [ADkun/adg-multi-agent](https://github.com/ADkun/adg-multi-agent) | 0 | 2026-09-24 | 2026-09-30 | DSH agent preset: one dispatcher agent routes tasks to nine capability-scoped specialist agents, with a bundled CDP browser toolchain and an add-agent skill. |
| 135 | [ADkun/dsh-auto-stop](https://github.com/ADkun/dsh-auto-stop) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin that ends a response just before its output-token ceiling, and steers a truncated subagent's parent agent to send it back to work. |
| 136 | [ADkun/dsh-windows-notifier](https://github.com/ADkun/dsh-windows-notifier) | 0 | 2026-09-24 | 2026-09-30 | DSH plugin that raises a native Windows toast whenever any DSH conversation needs you: a task finished, a question was asked, or an approval is waiting. |
| 137 | [Afufuafa/dsh-standalone-settings](https://github.com/Afufuafa/dsh-standalone-settings) | 0 | 2026-09-30 | 2026-10-01 | 把 DeepSeek Harness 桌面版的设置入口从账号按钮的二级菜单里独立出来：在侧边栏底部 账号按钮的右端固定一个独立的设置按钮。 |
| 138 | [aigisx/dsh-plugin-whale-girl](https://github.com/aigisx/dsh-plugin-whale-girl) | 0 | 2026-10-01 | 2026-10-01 | 修改应用内的图标，并调整尺寸大小。 |
| 139 | [AlanKhronos/dsh-dispatch-gate](https://github.com/AlanKhronos/dsh-dispatch-gate) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：在工具调用层强制「先委派给其他模型」——未派发的会话无法执行 pwsh/write/edit。⚠️ 本插件会拦截工具调用（这是设计目标）；含举证式放行、行为账本与一键停用开关。 |
| 140 | [Alkaid4521/dsh-pixel-art](https://github.com/Alkaid4521/dsh-pixel-art) | 0 | 2026-09-30 | 2026-09-30 | 手写像素画 skill 插件：教 agent 写脚本逐像素画出任意图，不联网、不依赖绘图库、同参数必然复现（DSH / DeepSeek Harness） |
| 141 | [AllenCoderBug/dsh-web-search-zerokey](https://github.com/AllenCoderBug/dsh-web-search-zerokey) | 0 | 2026-09-30 | 2026-09-30 | 零 key 联网搜索：不填任何 API key、不启任何本地服务、不消耗模型积分。多源聚合（Bing/HN/GitHub/arXiv/npm/掘金/CSDN），中英文自动路由。 |
| 142 | [Altermoe/dsh-onedev](https://github.com/Altermoe/dsh-onedev) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness Plugin for OneDev |
| 143 | [Ame-Choo/dsh-study-coach](https://github.com/Ame-Choo/dsh-study-coach) | 0 | 2026-10-01 | 2026-10-01 | DSH 的学习教练插件：把一门课拆成知识地图，逐单元记掌握度、排每日任务，并给学生一个看得见进度的网页面板。 |
| 144 | [aming1029/dsh-sub2api-usage](https://github.com/aming1029/dsh-sub2api-usage) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 插件：在左侧边栏显示 Sub2API 的余额与用量详情，查询接口（服务地址/模式/路径/字段指针）全部可自定义。 |
| 145 | [AndreyTepaykin/dsh-sidebar-pins](https://github.com/AndreyTepaykin/dsh-sidebar-pins) | 0 | 2026-10-01 | 2026-10-01 | Pinned-sessions block for the DeepSeek Harness sidebar: a collapsible pinned panel above the Settings row, hover pin buttons on session rows and a session-header toggle. Pins live in the plugin's own settings namespace. |
| 146 | [anneqaq/dsh-widget](https://github.com/anneqaq/dsh-widget) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：把模型编写的 SVG/HTML 片段渲染成对话中的内联可视化卡片（图表、流程图、时间线、对比表格），沙箱隔离、无网络、无依赖 |
| 147 | [Antiboday/dsh-plugin-bg-studio](https://github.com/Antiboday/dsh-plugin-bg-studio) | 0 | 2026-10-01 | 2026-10-01 | 将动态壁纸加到Deepseek中 |
| 148 | [apherchin/dsh-rename-title-after-first-turn](https://github.com/apherchin/dsh-rename-title-after-first-turn) | 0 | 2026-09-29 | 2026-10-01 | 仅宿主侧插件：主会话跑完第一轮后自动命名一次；子代理与队友会话不受影响。 \| DSH host-only plugin: names a main session once, right after its first turn ends; subagent and teammate sessions are left alone. |
| 149 | [apherchin/dsh-session-delete](https://github.com/apherchin/dsh-session-delete) | 0 | 2026-09-29 | 2026-09-30 | 会话行菜单「删除对话」：永久删除会话（磁盘日志、投影缓存、归档/置顶记账），级联删除它派生的子代理会话，运行中一律拒绝；同菜单还能复制原始会话 ID。 \| DSH session-row "Delete conversation" — permanently deletes a session, cascades into the subagent sessions it spawned, refuses live ones, and copies the raw session id. |
| 150 | [apherchin/dsh-sidefork-a-teammate](https://github.com/apherchin/dsh-sidefork-a-teammate) | 0 | 2026-09-29 | 2026-10-01 | 从界面直接派生队友：/teammate 两种模式——新建队友（全新、不继承任何上下文）或 fork 队友（并行分支，继承已完成的回合）。 \| Spawn a teammate from the DSH UI: /teammate in two modes — a fresh teammate that inherits nothing, or a fork teammate on a parallel branch that inherits completed turns. |
| 151 | [apherchin/dsh-websearch-tavily-keys-select](https://github.com/apherchin/dsh-websearch-tavily-keys-select) | 0 | 2026-09-29 | 2026-10-01 | 多源网页搜索链：按顺序尝试最多 3 个 Tavily key（Windows 环境变量或明文），失败则回退官方 DeepSeek 搜索；设置页有配置卡片。 \| DSH plugin: multi-source web search chain — tries up to 3 Tavily keys in order, falls back to the official DeepSeek search. Config card on the Plugins page. |
| 152 | [apherchin/dsh-windows-session-notification](https://github.com/apherchin/dsh-windows-session-notification) | 0 | 2026-09-29 | 2026-09-30 | 跨会话「需要接手」提醒（仅 Windows）：会话完成／等待审批／向你提问、而你没在看它时，弹出可点击跳回的 Windows 通知 + 分档提示音 + 任务栏角标。 \| Cross-session attention notifier for Windows — actionable toasts, tiered sounds and a taskbar badge; only for sessions you are not watching. |
| 153 | [AprilCrystal/dsh-client-ui-gpt-helper](https://github.com/AprilCrystal/dsh-client-ui-gpt-helper) | 0 | 2026-10-01 | 2026-10-01 | A dsh client plugin: ChatGPT-style model picker and animated thinking-level slider for the DeepSeek Harness Web composer. |
| 154 | [ArcaneOrion/dsh-tui](https://github.com/ArcaneOrion/dsh-tui) | 0 | 2026-10-01 | 2026-10-01 | DSH terminal front door: a pi-tui workbench with layered messages, file-edit pane, permission presets and hot-swappable themes |
| 155 | [ashllll/dsh-open-code-review](https://github.com/ashllll/dsh-open-code-review) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin: deterministic code-review scope and rule resolution from alibaba/open-code-review, judged by your own DSH model. No API key, no second provider. |
| 156 | [Ayelsh/dsh-zhipu-plan](https://github.com/Ayelsh/dsh-zhipu-plan) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin: Zhipu coding-plan sign-in, quota and usage panel. |
| 157 | [Ayelsh/reasoning-setup](https://github.com/Ayelsh/reasoning-setup) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness plugin: edit reasoning effort levels and thinking formats for models that declare none. |
| 158 | [aymidasing/dsh-thinking-lang](https://github.com/aymidasing/dsh-thinking-lang) | 0 | 2026-10-01 | 2026-10-01 | DSH plugin: set the agent's reasoning language (Settings → General) |
| 159 | [ayst-z/dsh-history-migration](https://github.com/ayst-z/dsh-history-migration) | 0 | 2026-09-30 | 2026-09-30 | 把 MiMo Studio / VS Code Copilot Chat 的历史对话迁移进 DeepSeek Harness 的技能与工具链 |
| 160 | [BaronCyrus/dsh-grok-subscription](https://github.com/BaronCyrus/dsh-grok-subscription) | 0 | 2026-09-22 | 2026-09-30 | Use a SuperGrok / X Premium Grok Build subscription in DeepSeek Harness |
| 161 | [bauerelizabeth07139/MDSM](https://github.com/bauerelizabeth07139/MDSM) | 0 | 2026-09-30 | 2026-09-30 | MDSM (Male DeepSeek Mascot) appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 162 | [bauerelizabeth07139/nai](https://github.com/bauerelizabeth07139/nai) | 0 | 2026-09-30 | 2026-09-30 | Nai milk-frog mascot appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 163 | [bauerelizabeth07139/tangsan](https://github.com/bauerelizabeth07139/tangsan) | 0 | 2026-09-30 | 2026-09-30 | TangSan mascot appearance layer for the DeepSeek Harness Web GUI: chat wallpaper with opacity, blur and scrim controls, an avatar brand mark, and a Settings section. |
| 164 | [BeyondandSharp/dsh-plugin-notoken](https://github.com/BeyondandSharp/dsh-plugin-notoken) | 0 | 2026-09-29 | 2026-09-30 | 反代时，让首次访问不用带token |
| 165 | [bigricedumpling/deepseek-reader](https://github.com/bigricedumpling/deepseek-reader) | 0 | 2026-10-01 | 2026-10-01 | Reader document workspace and DeepSeek Harness plugin preview |
| 166 | [biteainet/dsh-mj-spiderman-plugin](https://github.com/biteainet/dsh-mj-spiderman-plugin) | 0 | 2026-10-01 | 2026-10-01 | MJ 蜘蛛侠彩蛋插件：任意输入框输入 mj 触发透明悬浮窗，视频+json WebGL 合成（DSH 插件） |
| 167 | [blueziii/dsh-peakvalley](https://github.com/blueziii/dsh-peakvalley) | 0 | 2026-10-01 | 2026-10-01 | DSH 插件：输入栏下方最右侧显示峰谷时段徽标，空闲价格为高峰一半；仅 DeepSeek 模型可见，点击可切换 7 档显示内容。 |
| 168 | [boxiaolanya2008/dsh-internal-test-mode](https://github.com/boxiaolanya2008/dsh-internal-test-mode) | 0 | 2026-09-30 | 2026-09-30 | DSH agent 预设：内部测试模式 —— 8 工具白名单 + 7 节思考机制提示词 + 请求参数注入 |
| 169 | [boxiaolanya2008/tokensqueezer](https://github.com/boxiaolanya2008/tokensqueezer) | 0 | 2026-09-30 | 2026-09-30 | Cuts a DSH agent's token use on its own output: caps generation before the call, folds verbose answers and reasoning after it, and keeps code byte-identical. |
| 170 | [bwndlct/dsh-codex-bridge](https://github.com/bwndlct/dsh-codex-bridge) | 0 | 2026-09-29 | 2026-09-30 | Delegate Codex tasks to a running official DeepSeek Harness Desktop Host over MCP + loopback plugin |
| 171 | [C-S-N-Y/dsh-session-cleaner](https://github.com/C-S-N-Y/dsh-session-cleaner) | 0 | 2026-10-01 | 2026-10-01 | DSH 会话清理插件：永久删除已归档会话，并扫描清理点不动的幽灵行与失联的孤儿会话。只删已归档会话，拒绝时给出依据。Session cleaner for DeepSeek Harness: permanently delete archived sessions and clean up ghost / orphan session records. |
| 172 | [callqh/dsh-codex-oauth](https://github.com/callqh/dsh-codex-oauth) | 0 | 2026-09-30 | 2026-09-30 | Sign in to OpenAI Codex from DeepSeek Harness with a ChatGPT Plus/Pro subscription. |
| 173 | [Canye-zdm/dsh-skin-aurora](https://github.com/Canye-zdm/dsh-skin-aurora) | 0 | 2026-08-16 | 2026-09-30 | Deepseek Harness aurora theme skin |
| 174 | [Cci-65/dsh-ui-plugin](https://github.com/Cci-65/dsh-ui-plugin) | 0 | 2026-06-13 | 2026-10-01 | A DeepSeek Harness UI plugin that restyles the welcome area and composer, with workspace, mode, and skill shortcuts. |
| 175 | [ccll/dsh-advisor-flow](https://github.com/ccll/dsh-advisor-flow) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin: on-demand executor/advisor workflow ported from pi-advisor-flow — ask_advisor, review gates, usage ledger, privacy tiers |
| 176 | [Centaurea5547196/dsh-page-zoom](https://github.com/Centaurea5547196/dsh-page-zoom) | 0 | 2026-10-01 | 2026-10-01 | Page zoom for DeepSeek Harness: Ctrl + mouse wheel scales the whole UI in 5 percent steps (30-200), with a magnifier percentage readout in the bottom-right corner. |
| 177 | [cglyvip/dsh-auto-continue](https://github.com/cglyvip/dsh-auto-continue) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：模型请求失败自动注入「继续」并切换兜底模型，免手动干预 |
| 178 | [CH2008445/dsh-api-balance](https://github.com/CH2008445/dsh-api-balance) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek API account balance and per-run usage cost in the DSH web GUI sidebar footer. The API key stays in the host process: no shell, no sandbox bypass, official endpoint only. |
| 179 | [changguo1998/dsh-toolset](https://github.com/changguo1998/dsh-toolset) | 0 | 2026-08-22 | 2026-09-30 | My self-used deepseek harness plugins |
| 180 | [chongyi/dsh-notify](https://github.com/chongyi/dsh-notify) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness notify plugin |
| 181 | [DDDMUC/dsh-markdown-bubble](https://github.com/DDDMUC/dsh-markdown-bubble) | 0 | 2026-09-30 | 2026-09-30 | Markdown rendering for DeepSeek Harness sent messages: the user and steering chat bubbles render headings, lists, code, tables, math and quotes through the host's own Markdown pipeline, while reference chips, attachments and the action strip stay intact. |
| 182 | [deadbushxw/dsh-self-restart](https://github.com/deadbushxw/dsh-self-restart) | 0 | 2026-10-01 | 2026-10-01 | DSH 桌面端插件：改完插件后由 AI 自己触发重启，重启完在同一条会话里接着往下做，并补上打包版桌面端缺失的「刷新界面」入口 \| DSH (DeepSeek Harness) desktop plugin: restarts the app from a tool call, resumes the same conversation, and adds the page-reload entry point the packaged desktop build lacks |
| 183 | [deadbushxw/dsh-task-ask-notify](https://github.com/deadbushxw/dsh-task-ask-notify) | 0 | 2026-10-01 | 2026-10-01 | DSH 桌面端插件：任务完成或模型向你提问时，弹出 Windows 系统通知并播放提示音，提示音可自定义 \| DSH (DeepSeek Harness) desktop plugin: pops up a Windows system notification and plays a customizable alert sound when a task completes or the model asks you a question |
| 184 | [Decodo/dsh-web-fetch](https://github.com/Decodo/dsh-web-fetch) | 0 | 2026-09-08 | 2026-10-01 | DeepSeek Harness (dsh) plugin: Decodo as the provider behind the built-in web_fetch tool |
| 185 | [deeparchi-ai/dsh-deeparchi-skills](https://github.com/deeparchi-ai/dsh-deeparchi-skills) | 0 | 2026-10-01 | 2026-10-01 | DeepArchi methodology skills for DeepSeek Harness (dsh) — enterprise architecture gap analysis against BIAN/TOGAF. |
| 186 | [dhdbvcg/dsh-workbuddy-console](https://github.com/dhdbvcg/dsh-workbuddy-console) | 0 | 2026-10-01 | 2026-10-01 | WorkBuddy multi-account console for DeepSeek Harness: batch check-in for every account, pending growth tasks, live session-health checks, check-in history with a credit trend chart, automation jobs and the model pool. Bilingual (zh/en). Served by DSH itself. |
| 187 | [DmitriyValetov/dsh-session-folders](https://github.com/DmitriyValetov/dsh-session-folders) | 0 | 2026-09-30 | 2026-09-30 | Session folders for the DSH 0.2.x web sidebar — fork of EugeneVl/dsh_session_folders (MIT) ported to DSH 0.2.0-rc.1 |
| 188 | [dong2007-png/dsh-imagegen](https://github.com/dong2007-png/dsh-imagegen) | 0 | 2026-10-01 | 2026-10-01 | DSH plugin: generate images via a New API relay (tools: generate_image, list_image_models) |
| 189 | [drscrewdriver/dsh-tidy-display](https://github.com/drscrewdriver/dsh-tidy-display) | 0 | 2026-09-28 | 2026-09-30 | 整洁显示 Tidy Display — reading view + message rail for DeepSeek Harness 0.1.7, merged from dsh-better-display × dsh-tidychat |
| 190 | [easerlee/dsh-session-handoff](https://github.com/easerlee/dsh-session-handoff) | 0 | 2026-09-30 | 2026-10-01 | DSH 插件：上下文压力到阈值时，把当前工作交接给一个新会话（文件式交接包 + handoff_now 工具 + HTTP 接口）。 |
| 191 | [eryi-lab/dsh-gsap](https://github.com/eryi-lab/dsh-gsap) | 0 | 2026-10-01 | 2026-10-01 | GSAP skills plugin for DeepSeek Harness: registers the eight official GSAP AI skills. |
| 192 | [EternalNight996/dsh-pet-sophon](https://github.com/EternalNight996/dsh-pet-sophon) | 0 | 2026-09-30 | 2026-09-30 | 三体智子 · 桌面宠物：把 DSH 里的悬浮智子放出来，在系统桌面上自由活动（无边框透明置顶窗口，实时反映 DSH 会话状态） |
| 193 | [ethanrise/dsh-model-deploy](https://github.com/ethanrise/dsh-model-deploy) | 0 | 2026-09-30 | 2026-09-30 | Inspect ONNX models and benchmark them with ONNX Runtime on the local machine or over SSH, with PASS/FAIL deployment gates. DSH plugin. |
| 194 | [ethanrise/dsh-privacy-gateway](https://github.com/ethanrise/dsh-privacy-gateway) | 0 | 2026-09-30 | 2026-09-30 | DSH 本地隐私网关：对话发给模型前脱敏个人信息，原文只在本机界面还原显示，并可生成 CSV/XLSX 脱敏副本。 |
| 195 | [EXstarAmazing/dsh-aqua-0.2-adapt](https://github.com/EXstarAmazing/dsh-aqua-0.2-adapt) | 0 | 2026-09-30 | 2026-09-30 | Aqua 玻璃主题 · DSH 0.2 适配版（上游 WYH66666666/DSH-Transparent-UI-Plugin 的兼容补丁分支） |
| 196 | [f1426912008/dsh-stock-ticker](https://github.com/f1426912008/dsh-stock-ticker) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness（DSH）Web GUI 的实时股票盯盘插件：A 股自选股迷你窗口，含分时曲线、悬停详情卡与自选股设置页。零运行时依赖，无需构建。 |
| 197 | [fanyongbing/dsh-mcp-native](https://github.com/fanyongbing/dsh-mcp-native) | 0 | 2026-09-30 | 2026-09-30 | MCP server manager for DeepSeek Harness — manage this machine's MCP servers as native Loader rows, from a Settings page with cards, search, start/stop and a full config editor. Zero dependencies, zero build. |
| 198 | [FeC3-pearlite/bearing-notes](https://github.com/FeC3-pearlite/bearing-notes) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 文献笔记插件：笔记汇总到一个 Word，右侧栏调用模型审阅并提示相关知识（轴承钢滚动接触疲劳） |
| 199 | [frederico-kluser/dsh-orquestrator](https://github.com/frederico-kluser/dsh-orquestrator) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin: on task send, pick a different model for subagents and an independent reviewer that validates each subagent's work before it reaches the main agent |
| 200 | [Funny1Potato/dsh-outsourcing-expert](https://github.com/Funny1Potato/dsh-outsourcing-expert) | 0 | 2026-09-30 | 2026-09-30 | DSH agent presets whose leader does no work itself: non-management tool calls are denied at the harness boundary and every task goes to a subagent (a second preset deliberately picks weaker models for harder tasks). |
| 201 | [Fwkkk666/dsh-za-warudo](https://github.com/Fwkkk666/dsh-za-warudo) | 0 | 2026-09-29 | 2026-10-01 | JoJo-inspired time-stop transition for the DeepSeek Harness light/dark appearance switch |
| 202 | [gezi-wen/sage-reminder](https://github.com/gezi-wen/sage-reminder) | 0 | 2026-09-19 | 2026-10-01 | 时间提醒（reminder）— DSH 会话头部的时间模块：现在时间 / 提醒 / 倒计时。定位是会话内的短期提醒（纯 client 半） |
| 203 | [godchen520/collab-canvas](https://github.com/godchen520/collab-canvas) | 0 | 2026-10-01 | 2026-10-01 | DSH 协作画布插件（话布）：人和 AI 共写的 Markdown 文档面。AI 通过 canvas_* 工具读写，带版本冲突检测、可撤销历史与文件持久化。 |
| 204 | [Grant-Felix/dsh-agent-rules](https://github.com/Grant-Felix/dsh-agent-rules) | 0 | 2026-09-21 | 2026-10-01 | DSH（DeepSeek Harness）个人插件：把你的项目开发规则交给 agent —— 右侧栏面板可视化维护（全局 + 按项目），并自动注入每个会话的系统提示。 |
| 205 | [gst20060726/dsh-partition-board](https://github.com/gst20060726/dsh-partition-board) | 0 | 2026-09-30 | 2026-10-01 | Interactive partition board the AI opens when it needs a human to draw the boundaries (DSH plugin) |
| 206 | [gtbwpkwjnb-alt/dsh-audit-skills](https://github.com/gtbwpkwjnb-alt/dsh-audit-skills) | 0 | 2026-09-26 | 2026-10-01 | 让英语不好的用户也能看懂 DSH 插件：把插件的英文标题与说明精炼成中文（保留原包名），写入 locale 使内置插件页原生显示中文；同时一页审查已装插件与技能的版本、更新与冲突。Turn English DSH plugin titles/descriptions into clear Chinese, natively in the built-in Plugins page. |
| 207 | [Gty2408/dsh-plugin-publish](https://github.com/Gty2408/dsh-plugin-publish) | 0 | 2026-10-01 | 2026-10-01 | Publish or update a DSH plugin on GitHub in one command: validates the manifest and bundle identifiers, creates or reuses the repo, uploads the tree as one commit, honours .gitignore, and sets the required topic without dropping yours. |
| 208 | [Gty2408/dsh-plugin-publisher](https://github.com/Gty2408/dsh-plugin-publisher) | 0 | 2026-10-01 | 2026-10-01 | Publish a DSH plugin to GitHub and submit it to the plugin marketplace from a settings page. Validates the manifest against the listing requirements, creates the repository, uploads the tree, and opens the listing pull request. |
| 209 | [Gty2408/dsh-session-eraser](https://github.com/Gty2408/dsh-session-eraser) | 0 | 2026-09-30 | 2026-09-30 | Delete a session from the DSH sidebar. A DeepSeek Harness (DSH) plugin. |
| 210 | [Gty2408/dsh-word-translate](https://github.com/Gty2408/dsh-word-translate) | 0 | 2026-10-01 | 2026-10-01 | Right-click selected English in the DSH Web UI for a bundled offline dictionary (part of speech, phonetics, Collins rating, exam tags and frequency rank), a context-aware AI translation, and speech playback. Translations are saved to a searchable, draggable history panel that doubles as a persistent cache. |
| 211 | [GuoMonth/dsh-devwork](https://github.com/GuoMonth/dsh-devwork) | 0 | 2026-10-01 | 2026-10-01 | A desktop development workspace powered by DeepSeek Harness, with a lead AI coordinating coding tasks and code review. |
| 212 | [Gzy2233/dsh-godot-blackjack](https://github.com/Gzy2233/dsh-godot-blackjack) | 0 | 2026-10-01 | 2026-10-01 | This is a normal plugin of deepseek harness,which you can install it and play it.The tpye of game is very classic  Betting-game "Blackjack".It totally  made by deepseek harness with godot and mcp-ai. |
| 213 | [Han-1413141/dsh-compat-guardian](https://github.com/Han-1413141/dsh-compat-guardian) | 0 | 2026-09-30 | 2026-09-30 | Plugin compatibility checks, quarantine, recovery and offline startup rescue for DeepSeek Harness |
| 214 | [Han-1413141/dsh-visual-edit](https://github.com/Han-1413141/dsh-visual-edit) | 0 | 2026-09-30 | 2026-09-30 | Point at a webpage, give your DeepSeek Harness agent feedback, and compare the result. Local Vite + React visual editing sidebar. |
| 215 | [haotian-lu-prog/dsh-dev-backup](https://github.com/haotian-lu-prog/dsh-dev-backup) | 0 | 2026-09-30 | 2026-09-30 | Backup freshness monitor for DeepSeek Harness — see whether your scheduled backup actually ran, right in the Harness Web UI (DSH 0.2.0-rc.2) |
| 216 | [HarrisXiu/dsh-plugin-finder](https://github.com/HarrisXiu/dsh-plugin-finder) | 0 | 2026-09-30 | 2026-09-30 | DSH（DeepSeek Harness）插件发现工具：自动在 GitHub 与 npm 上检索社区插件，给出每个插件的 npm 包名与 GitHub 仓库地址，并内置一份可安装的推荐清单。装上后可在侧边栏「插件发现」页面浏览搜索，也可以让 agent 直接调用 dsh_plugin_finder 工具检索。 |
| 217 | [he0119/dsh-tailnet-admin](https://github.com/he0119/dsh-tailnet-admin) | 0 | 2026-09-30 | 2026-09-30 | 把 Tailnet / 反向代理页面当作「本机」来用：启用 host 持久化设置，并按需关闭浏览器会话校验（Host/Origin 栅栏保持不动）。 |
| 218 | [HelloQingTao/dsh-rail-zero](https://github.com/HelloQingTao/dsh-rail-zero) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness web plugin: zero the collapsed left sidebar's 56px rail; reuses dsh-qol's hamburger, falls back to the official toggle. |
| 219 | [heureux831/deepseek-harness-design](https://github.com/heureux831/deepseek-harness-design) | 0 | 2026-09-30 | 2026-10-01 | Community DeepSeek Harness plugin for live HTML prototypes, element selection, and revision comparison |
| 220 | [Hrauroras/dsh-plugin-ostan-nanami-san](https://github.com/Hrauroras/dsh-plugin-ostan-nanami-san) | 0 | 2026-09-29 | 2026-09-30 | OStan Nanami-San — a chibi desktop companion for the DeepSeek Harness GUI |
| 221 | [Hu9956/DSH-model-controls](https://github.com/Hu9956/DSH-model-controls) | 0 | 2026-09-30 | 2026-09-30 | 切换供应商、模型与思考强度，每个模型各自记住档位。 |
| 222 | [HuanLinOTO/dsh-plugin-sidebar-terminal-tools](https://github.com/HuanLinOTO/dsh-plugin-sidebar-terminal-tools) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin: model-driven official sidebar terminals — six sidebar_terminal_* tools over ctx.terminalController; terminals auto-appear as native sidebar tabs, the user can take over anytime. / DSH 插件：模型驱动官方侧栏终端，自动出现原生终端 tab，用户可随时接管。 |
| 223 | [HuanLinOTO/dsh-plugin-terminal-extension-wait-for](https://github.com/HuanLinOTO/dsh-plugin-terminal-extension-wait-for) | 0 | 2026-09-30 | 2026-09-30 | 阻塞到字符串出现在 DSH 原生持久终端保留输出里（正则/子串；found/超时/退出/消失/取消五态） \| Blocks until a pattern appears in a DSH persistent terminal's retained output (regex/substring; found/timeout/exit/gone/cancel outcomes) |
| 224 | [huguangyu666/dsh-plugin-better-folders](https://github.com/huguangyu666/dsh-plugin-better-folders) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：更好的 DSH 文件夹 —— 自动整理工作区，把同一上级目录下的工作区汇合成可折叠的文件夹节点（复用内置「按工作区树」视图，不覆盖官方 UI）。 |
| 225 | [IKEASven69/dsh-takeover](https://github.com/IKEASven69/dsh-takeover) | 0 | 2026-10-01 | 2026-10-01 | DSH 会话接力插件：拉取六家 agent 会话（/resume-*）、寄存当前会话（/handoff）、开局取件（/inbox），落在 handoff: 1 开放协议上 |
| 226 | [imtokenxinluo/dsh-fixture-bad-plugin](https://github.com/imtokenxinluo/dsh-fixture-bad-plugin) | 0 | 2026-09-30 | 2026-09-30 | Negative test fixture for DSH plugin contract checks (intentionally bad plugin, do not use as a real plugin) |
| 227 | [imtokenxinluo/dsh-hardening](https://github.com/imtokenxinluo/dsh-hardening) | 0 | 2026-09-30 | 2026-09-30 | DSH hardening tooling: workspace backup, kernel patch reapply, restore verification. DSH 长期健康工具 |
| 228 | [imtokenxinluo/dsh-plugin-guide](https://github.com/imtokenxinluo/dsh-plugin-guide) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness plugin developer guidelines. DSH 插件开发者守则 |
| 229 | [imtokenxinluo/dsh-session-backup](https://github.com/imtokenxinluo/dsh-session-backup) | 0 | 2026-09-29 | 2026-09-30 | Backup tooling for DeepSeek Harness session data: bundle + sha256 integrity verification + spot-restore loader check. |
| 230 | [imtokenxinluo/dsh-session-doctor](https://github.com/imtokenxinluo/dsh-session-doctor) | 0 | 2026-09-29 | 2026-09-30 | Session doctor for DeepSeek Harness: scan and losslessly repair corrupted session logs. 会话医生：扫描并无损修复会话日志损坏。 |
| 231 | [imtokenxinluo/dsh-sponsors](https://github.com/imtokenxinluo/dsh-sponsors) | 0 | 2026-09-30 | 2026-09-30 | Contributor support registry spec for DeepSeek Harness: manifest spec, donation ethics, ecosystem risks, validator. 打赏罐注册表规范 |
| 232 | [imtokenxinluo/dsh-tip-jar](https://github.com/imtokenxinluo/dsh-tip-jar) | 0 | 2026-09-29 | 2026-09-30 | Tip jar for DeepSeek Harness: contributors declare USDC / fiat / QR channels in sponsors.json; sponsor-center panel + TipJarEmbed. Pure P2P, privacy by default. 打赏罐 |
| 233 | [jacksong-sourse/dsh-world-engine](https://github.com/jacksong-sourse/dsh-world-engine) | 0 | 2026-10-01 | 2026-10-01 | A DeepSeek Harness plugin that compiles a described world into declarative rules and lets agents, subjectivity, and emotion emerge — encode the story, not the emotion. |
| 234 | [jitang-open/dsh-web-search-ocgo](https://github.com/jitang-open/dsh-web-search-ocgo) | 0 | 2026-10-01 | 2026-10-01 | DSH 网页搜索 provider（走 OpenCode Go）：自动注入 x-opencode-session、失败回退官方端点、查询缓存、result.content 总结，自带设置页 |
| 235 | [JoblessJoe/dsh-llm-ollama-native](https://github.com/JoblessJoe/dsh-llm-ollama-native) | 0 | 2026-09-18 | 2026-10-01 | Ollama native /api/chat adapter for DeepSeek Harness (dsh): makes reasoningEffort off/low/medium/high actually work. |
| 236 | [JoblessJoe/smart-compaction](https://github.com/JoblessJoe/smart-compaction) | 0 | 2026-09-25 | 2026-10-01 | Let the dsh model compact its own context at a safe point (compact_now) and see real token usage (context_status). |
| 237 | [joeseesun/qiaomu-home-dsh](https://github.com/joeseesun/qiaomu-home-dsh) | 0 | 2026-09-30 | 2026-09-30 | 乔木 Home：让 Harness 成为一天的起点。会话搜索、今日重点、待办、记录与专注计时。 |
| 238 | [JWE24-code/dsh-jev-loop](https://github.com/JWE24-code/dsh-jev-loop) | 0 | 2026-09-30 | 2026-10-01 | Jev (TypeSafe System One) judgments at the DeepSeek Harness agent-loop gates. No UI dependency. |
| 239 | [JWE24-code/moqi-jev-loop](https://github.com/JWE24-code/moqi-jev-loop) | 0 | 2026-09-30 | 2026-10-01 | The /JevLoop control panel for moqi, on top of dsh-jev-loop. |
| 240 | [kaanyavuzer/dsh-plugin-locale-tr](https://github.com/kaanyavuzer/dsh-plugin-locale-tr) | 0 | 2026-09-26 | 2026-09-30 | Turkish (tr) language pack for the DeepSeek Harness web GUI - 45 namespaces, 1,870 UI strings, no core changes |
| 241 | [KNGLOKIKO/dsh-plugin-approval-zh](https://github.com/KNGLOKIKO/dsh-plugin-approval-zh) | 0 | 2026-10-01 | 2026-10-01 | DSH 权限确认窗口（审批面板）中文化插件：接管 conversation.composer 用中文重绘审批卡片，翻译授权原因与命令明细 — 本地词表优先 + model-router 兜底 \| Chinese localization for the DeepSeek Harness approval panel. |
| 242 | [kotinder/dsh-roomcomm](https://github.com/kotinder/dsh-roomcomm) | 0 | 2026-09-30 | 2026-09-30 | Roomcomm for DeepSeek Harness: your dsh agent talks to other AI agents in shared rooms (MCP tools + skill, zero setup) |
| 243 | [KouzakiUmi/dsh-subusage](https://github.com/KouzakiUmi/dsh-subusage) | 0 | 2026-09-30 | 2026-10-01 | DeepSeek Harness 插件：模型选择器旁显示 Z.ai / Kimi / MiMo / OpenCode Go 订阅用量，含额度明细、限额递归连坐与 Cookie 登录 |
| 244 | [kyle123740/dsh-zcode-cli-proxy](https://github.com/kyle123740/dsh-zcode-cli-proxy) | 0 | 2026-09-29 | 2026-09-30 | dsh-zcode cli反代 —— 把 ZCode CLI（客户端 agent）接入 DeepSeek Harness：app-server 常驻通道、Start Plan 额度直连、真流式、图片输入、工具委派 |
| 245 | [l33tdawg/dsh-workspace-mcp](https://github.com/l33tdawg/dsh-workspace-mcp) | 0 | 2026-10-01 | 2026-10-01 | Register the MCP servers a workspace declares in .mcp.json with DeepSeek Harness, through its own mcp-client |
| 246 | [laojingwei/agent-preset-graph-xww](https://github.com/laojingwei/agent-preset-graph-xww) | 0 | 2026-09-29 | 2026-09-30 | ComfyUI-style node graph of a DSH Agent preset — shows what the agent is made of and highlights live which node is executing. |
| 247 | [lc69282940/dsh-desktop-context](https://github.com/lc69282940/dsh-desktop-context) | 0 | 2026-10-01 | 2026-10-01 | 纠正DeepSeek Harness桌面端沿用的 Web 环境说明 |
| 248 | [lc69282940/dsh-resend-0.2.0](https://github.com/lc69282940/dsh-resend-0.2.0) | 0 | 2026-10-01 | 2026-10-01 | 为 **DeepSeek Harness 桌面端**增加「重新生成」「编辑」按钮。使用宿主真实 V4 替换协议修改上下文，聊天隐藏旧轮，轨迹和磁盘日志保留原始记录。 |
| 249 | [lctfwyt/dsh-liuyao](https://github.com/lctfwyt/dsh-liuyao) | 0 | 2026-09-30 | 2026-09-30 | Six-Line Divination (liuyao) for DeepSeek Harness — one-click casting, eight-palace najia chart, AI interpretation, chart card and case archive. DeepSeek Harness 六爻插件：六爻起卦 · AI 解卦：一键起卦、纳甲装卦、按所问事项断卦。 |
| 250 | [lemoe-technology/dsh-plugins](https://github.com/lemoe-technology/dsh-plugins) | 0 | 2026-10-01 | 2026-10-01 | Lemoe Technology's deepseek harness plugins |
| 251 | [Lenandy/dsh-glass-skin](https://github.com/Lenandy/dsh-glass-skin) | 0 | 2026-10-01 | 2026-10-01 | DSH（DeepSeek Harness）桌面端的亚克力玻璃皮肤：半透明画布与侧栏 + 重模糊背景，右下角圆钮即控制台，明暗独立调节和上传网络图片或本地图片 |
| 252 | [lengmodkx/dsh-mimo-tts](https://github.com/lengmodkx/dsh-mimo-tts) | 0 | 2026-09-30 | 2026-09-30 | MiMo voice for DeepSeek Harness: auto-read answers aloud, click-to-talk composer mic, voice cloning. 小米 MiMo 语音插件。 |
| 253 | [libolunm/dsh-worldbook](https://github.com/libolunm/dsh-worldbook) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness (dsh) 的酒馆式世界书：蓝灯常驻条目 + 绿灯关键词注入，Agent 可自读写的 worldbook 工具，外加网页设置面板里的可视化编辑器。 |
| 254 | [LilJoeIJOYU/dsh-session-delete](https://github.com/LilJoeIJOYU/dsh-session-delete) | 0 | 2026-09-30 | 2026-09-30 | Delete a DeepSeek Harness conversation for real: a Session sidebar action that removes the stored log, its projection cache and its subagent logs. |
| 255 | [Link-h1j/dsh-screen-capture-record-desktop](https://github.com/Link-h1j/dsh-screen-capture-record-desktop) | 0 | 2026-10-01 | 2026-10-01 | 给 DSH 桌面版输入框加「录屏」「截图」两个按钮：把「说不清」的界面问题变成能直接发给模型的视频 / 图片证据，减少人机沟通的来回损耗。欢迎官方收录进桌面版本体。Screen capture &amp; recording evidence for better human-agent communication. |
| 256 | [linner1224/dsh-video-coursemap](https://github.com/linner1224/dsh-video-coursemap) | 0 | 2026-09-30 | 2026-09-30 | 视频课程知识地图 Agent（DeepSeek Harness 插件） |
| 257 | [LionNatsu/dsh-context-explorer](https://github.com/LionNatsu/dsh-context-explorer) | 0 | 2026-09-30 | 2026-10-01 | See the context a Session submits to its model in the DeepSeek Harness Web UI: the system prompt, the tool schemas and every message, drawn as a grid of token squares. |
| 258 | [LisonEvf/dsh-qwen-image](https://github.com/LisonEvf/dsh-qwen-image) | 0 | 2026-09-24 | 2026-09-30 | 在 AI 会话窗口里直接生图 / 改图 —— dsh 插件，本地跑 Qwen-Image-2.1（原生 2K / 原生透明 PNG / 最多 10 张参考图）。安装器自动适配 CUDA 与已有 ComfyUI/conda 环境 |
| 259 | [liujianqiao701/dsh-compat-vet](https://github.com/liujianqiao701/dsh-compat-vet) | 0 | 2026-09-30 | 2026-09-30 | DSH（DeepSeek Harness）插件兼容性体检：预警下次启动会被拒绝加载的插件，并在页面上按键一键隔离/卸载修掉它（改前自动备份、失败自动回滚）。Plugin compatibility vet for DeepSeek Harness. |
| 260 | [liuqingman/dsh-somni](https://github.com/liuqingman/dsh-somni) | 0 | 2026-09-30 | 2026-09-30 | Sleep-consolidated long-term memory for DeepSeek Harness (DSH) agents: episodic / semantic / prospective / procedural memory + identity, stdio JSON-RPC sidecar, idle-time dream consolidation, zero-config Cordis plugin. ｜ 给 DeepSeek Harness（DSH）agent 的睡眠整理式长期记忆：醒时回忆、睡时做梦整理，零配置 Cordis 插件。 |
| 261 | [liweidong1722/dsh-work-list](https://github.com/liweidong1722/dsh-work-list) | 0 | 2026-09-29 | 2026-09-30 | deepseek harness工作台 |
| 262 | [LiWenzhuo001/dsh-plugin-prompt-optimizer](https://github.com/LiWenzhuo001/dsh-plugin-prompt-optimizer) | 0 | 2026-10-01 | 2026-10-01 | Prompt optimizer plugin for DeepSeek Harness: one click rewrites your composer draft into a clear, verifiable prompt. Zero dependencies. |
| 263 | [liyang52520/dsh-web-login](https://github.com/liyang52520/dsh-web-login) | 0 | 2026-09-29 | 2026-09-30 | Password gate for the DeepSeek Harness Web GUI: first-run setup, brute-force lockout, audit log, and a management page inside Harness settings. |
| 264 | [LMQ00/dsh-prompt-polish](https://github.com/LMQ00/dsh-prompt-polish) | 0 | 2026-10-01 | 2026-10-01 | 把粗糙提示词转写成规范提示词，浮层预览确认后写入输入框（不自动发送） |
| 265 | [LMQ00/dsh-spec-mode](https://github.com/LMQ00/dsh-spec-mode) | 0 | 2026-09-30 | 2026-10-01 | Spec mode for the DeepSeek Harness: interview-driven requirements capture with a read-only working tree. |
| 266 | [Longxiangjunlin/dsh-endfield-theme](https://github.com/Longxiangjunlin/dsh-endfield-theme) | 0 | 2026-09-30 | 2026-09-30 | Arknights: Endfield theme for the DeepSeek Harness Web GUI — charcoal + hazard-yellow industrial HUD, first-paint boot splash, conversation backdrop. |
| 267 | [Lopncod/dsh-cost-meter](https://github.com/Lopncod/dsh-cost-meter) | 0 | 2026-09-29 | 2026-09-30 | DSH plugin: a persistent per-answer / per-session cost pill under the composer, priced with the official DeepSeek peak/off-peak rates. |
| 268 | [Lostforest7/dsh-apirevise](https://github.com/Lostforest7/dsh-apirevise) | 0 | 2026-10-01 | 2026-10-01 | API regression &amp; acceptance workbench for DeepSeek Harness. |
| 269 | [Lostforest7/dsh-revise](https://github.com/Lostforest7/dsh-revise) | 0 | 2026-10-01 | 2026-10-01 | Visual frontend revisions for DeepSeek Harness: point at elements, send changes, and review screenshots + code diffs. |
| 270 | [Lostforest7/dsh-sheetflow](https://github.com/Lostforest7/dsh-sheetflow) | 0 | 2026-10-01 | 2026-10-01 | Fill recurring Excel templates, review reconciliation exceptions, and trace every value to its source. |
| 271 | [louisremi/dsh-download-files](https://github.com/louisremi/dsh-download-files) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin: replace 'Show file location' with 'Download file' for remote/NAS hosts |
| 272 | [lovezi0/dsh-open-in-app-base](https://github.com/lovezi0/dsh-open-in-app-base) | 0 | 2026-09-30 | 2026-09-30 | dsh "Open In..."控件底座，提供一个开放的可由同类插件补充的插槽以解决原生"Open In..."缺少在某些软件中打开 |
| 273 | [lovezi0/dsh-open-in-codebuddy](https://github.com/lovezi0/dsh-open-in-codebuddy) | 0 | 2026-09-30 | 2026-09-30 | 按钮与菜单由底座 \`dsh-open-in-app-base\` 统一渲染，本插件只负责「目标软件」这一半：注册一条目标记录，并在自己的宿主半边实现「是否可用」与「怎么打开」。不 fork、不修改宿主，也不依赖原生 open-in-app 的应用目录——插件自带一个本机路由，直接向 CodeBuddy CN 的 CLI 入口传递目录参数。 |
| 274 | [LR611415/visionforge](https://github.com/LR611415/visionforge) | 0 | 2026-09-26 | 2026-09-30 | VisionForge — vision understanding + image generation plugin for DeepSeek Harness (DSH) |
| 275 | [lsdt45/dsh-model-config](https://github.com/lsdt45/dsh-model-config) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 模型设置页插件：管理提供方与模型目录，配置模型容量、输入类型与思考能力 |
| 276 | [lsdt45/dsh-workspace-plus](https://github.com/lsdt45/dsh-workspace-plus) | 0 | 2026-09-19 | 2026-10-01 | DSH web plugin: hierarchical workspace tree + time-bucket view + session pinning. Fork of KannaKuron/dsh-better-workspace |
| 277 | [ltmroberthk915/dsh-computer-use](https://github.com/ltmroberthk915/dsh-computer-use) | 0 | 2026-10-01 | 2026-10-01 | Windows desktop computer use for DeepSeek Harness: 18 computer_* tools over a native C# worker, with Set-of-Marks grounding, four approval modes, a JSONL audit trail, and a human brake announced into the running session. |
| 278 | [luckamuu/dsh-sessions-plugin](https://github.com/luckamuu/dsh-sessions-plugin) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 插件：提供删除已归档会话的入口（可以彻底删除不会在次出现） |
| 279 | [lux09947-cmyk/dsh-re](https://github.com/lux09947-cmyk/dsh-re) | 0 | 2026-10-01 | 2026-10-01 | Adds a refresh button to the DeepSeek Harness desktop title bar next to the Edit menu; reloads the UI without restarting the app. |
| 280 | [LX-HMKK/DSH-appearance](https://github.com/LX-HMKK/DSH-appearance) | 0 | 2026-09-30 | 2026-09-30 | 轻量的 DeepSeek Harness 字体与主题插件：中英文字体分开选，含 One Dark Pro / Dracula / Nord / GitHub / Catppuccin 五套官方色板预设 |
| 281 | [lxl8182/dsh-message-edit](https://github.com/lxl8182/dsh-message-edit) | 0 | 2026-09-30 | 2026-09-30 | DSH Web 用户消息编辑重发插件：改掉某一轮提问重发，该轮之后的内容丢弃，原会话归档（新会话继承逐字节相同前缀以保住 prompt 缓存）。 |
| 282 | [lxl8182/dsh-session-ops](https://github.com/lxl8182/dsh-session-ops) | 0 | 2026-09-30 | 2026-09-30 | DSH Web 会话管理插件：设置 → 会话管理，一键归档 / 一键还原 / 一键删除（删除移入回收目录，可手工恢复）。 |
| 283 | [lyjsyyds/dsh-novel-studio](https://github.com/lyjsyyds/dsh-novel-studio) | 0 | 2026-09-30 | 2026-10-01 | A dedicated novel-writing partition for DeepSeek Harness: books, characters, worldbuilding, outline, chapters, an auto-wired relationship graph, and an AI pane that reads your real setting. |
| 284 | [lyjsyyds/dsh-quick-reload](https://github.com/lyjsyyds/dsh-quick-reload) | 0 | 2026-09-30 | 2026-10-01 | A one-click page refresh for the DeepSeek Harness Web UI: it reboots the page against the freshly published module graph so a hot-injected client plugin appears immediately, purging the rebuildable caches first. |
| 285 | [Lyrissonare/dsh-preset-bridge](https://github.com/Lyrissonare/dsh-preset-bridge) | 0 | 2026-09-30 | 2026-09-30 | DSH预设桥插件，解决“风神插件”“梁神模式”等在更新桌面版后预设不生效的问题，欢迎使用 |
| 286 | [lzpway-jpg/dsh-plugin-brand-custom](https://github.com/lzpway-jpg/dsh-plugin-brand-custom) | 0 | 2026-09-30 | 2026-09-30 | Custom brand icon and name for the DeepSeek Harness Web client, editable live from a settings card |
| 287 | [mad-zero-mess/dsh-enter-approve](https://github.com/mad-zero-mess/dsh-enter-approve) | 0 | 2026-10-01 | 2026-10-01 | Codex-style global Enter to approve a pending DeepSeek Harness authorization request. |
| 288 | [MagicSpirit007/CodexAutoApprovalDSH](https://github.com/MagicSpirit007/CodexAutoApprovalDSH) | 0 | 2026-09-30 | 2026-10-01 | Auto approval tool for DSH |
| 289 | [MarJose123/dsh-simple-usage-info](https://github.com/MarJose123/dsh-simple-usage-info) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin: your DeepSeek API balance and the current peak/off-peak billing window, below the message input. |
| 290 | [marselarts/dsh-theme-studio](https://github.com/marselarts/dsh-theme-studio) | 0 | 2026-10-01 | 2026-10-01 | Theme Studio for the DeepSeek Harness Web UI: edit the design-system color tokens and fonts per light/dark scheme, in Settings or in a movable panel over the app. |
| 291 | [MerlinShieh/dsh-plugin-restart-control](https://github.com/MerlinShieh/dsh-plugin-restart-control) | 0 | 2026-10-01 | 2026-10-01 | DSH 设置页「重启 / Restart」分区：重载内核（官方 HMR 重组插件树）+ 重启应用（detached 助手重启外壳）\| Restart control for DeepSeek Harness |
| 292 | [Mgeeeeee/dsh-ui-personalization](https://github.com/Mgeeeeee/dsh-ui-personalization) | 0 | 2026-09-30 | 2026-09-30 | Sidebar identity row and client UI tweaks for DeepSeek Harness: your own avatar, nickname and account balance |
| 293 | [mikulo/dsh-translator](https://github.com/mikulo/dsh-translator) | 0 | 2026-10-01 | 2026-10-01 | 在 AI 每段回复（不含思维链）旁增加翻译按钮，用 设置 → 模型 中已配置的模型翻译成所选语言，译文显示在原文下方。Translate DSH AI replies segment by segment with your configured models. |
| 294 | [moazzamak/dsh-code-review](https://github.com/moazzamak/dsh-code-review) | 0 | 2026-09-30 | 2026-09-30 | Code-review pack for DeepSeek Harness (dsh): the /review shortcut over the pinned Changes page, plus the dsh-change-review Skill that teaches an agent what a rejected change means. |
| 295 | [moazzamak/dsh-voice-input](https://github.com/moazzamak/dsh-voice-input) | 0 | 2026-09-30 | 2026-10-01 | Offline local speech-to-text for the DeepSeek Harness composer: a microphone button that records, transcribes with faster-whisper on your own machine, and inserts the text into the chat draft. |
| 296 | [molly-ovo/dsh-workbuddy-oauth](https://github.com/molly-ovo/dsh-workbuddy-oauth) | 0 | 2026-10-01 | 2026-10-01 | 把 WorkBuddy 的模型接入 DeepSeek Harness：自带 OAuth 设备码登录，不依赖桌面 App，支持多账号轮转与失败冷却。 |
| 297 | [moonbowterfly/dsh-bio-galatea](https://github.com/moonbowterfly/dsh-bio-galatea) | 0 | 2026-10-01 | 2026-10-01 | 蛋白结构预测与设计域插件（dsh-bio-genie 生态）：ProteinMPNN/SolubleMPNN/LigandMPNN 序列设计 + 区域重设计 + ESMFold 折叠/复折叠 + 界面分析 + 共识排序/接触聚类/覆盖审计/预算调度 \| protein structure prediction &amp; design plugin for dsh (dsh-bio family) |
| 298 | [mwk719/dsh-skill-center](https://github.com/mwk719/dsh-skill-center) | 0 | 2026-09-30 | 2026-09-30 | DSH Web GUI 技能中心：侧栏入口把可配置来源目录里的技能铺成卡片，点击查看完整 SKILL.md；卡片开关会把技能注册进或移出模型可用的技能表。零依赖、免构建、无遥测、不采集数据。 |
| 299 | [MyRemme/dsh-computer-use-guard](https://github.com/MyRemme/dsh-computer-use-guard) | 0 | 2026-09-30 | 2026-09-30 | Three-tier (deny / ask / auto) authorization gate for DSH computer-use (cua-driver) tools, with a settings row that renders the three tiers per tool category. |
| 300 | [MyRemme/dsh-lan-pair](https://github.com/MyRemme/dsh-lan-pair) | 0 | 2026-09-30 | 2026-09-30 | LAN-only remote access for DSH: pair a phone or another PC by QR code or token to open the same web UI, with optional key-free access inside the LAN. |
| 301 | [MyRemme/dsh-loop-guard](https://github.com/MyRemme/dsh-loop-guard) | 0 | 2026-10-01 | 2026-10-01 | 多智能体监工：一个独立模型实时审阅推理文本与工具调用，检测死循环 / 空转 / 偷懒，并按 WARN / BLOCK / STOP 三档落地。DSH 宿主插件 + 浏览器设置界面。 |
| 302 | [Mzy123l/dsh-remote-access-cidr](https://github.com/Mzy123l/dsh-remote-access-cidr) | 0 | 2026-09-30 | 2026-10-01 | 为 DeepSeek Harness 桌面版提供「限网段 + 可选数字密码」的远程访问入口 |
| 303 | [Nagiko0739/dsh-turn-eraser](https://github.com/Nagiko0739/dsh-turn-eraser) | 0 | 2026-10-01 | 2026-10-01 | DSH plugin: delete conversation turns (tombstone-based, traceable) |
| 304 | [naletko/dsh-image-studio](https://github.com/naletko/dsh-image-studio) | 0 | 2026-10-01 | 2026-10-01 | An Images workspace for DeepSeek Harness: generate with fal.ai, browse every result, compare candidates, animate the winner in Kling, and assemble a cut with ffmpeg. |
| 305 | [naletko/dsh-quote](https://github.com/naletko/dsh-quote) | 0 | 2026-10-01 | 2026-10-01 | Quote the text you selected in the conversation into the composer as a markdown block quote, without losing the draft you already typed. |
| 306 | [NanGePlus/dsh-sop-capsules](https://github.com/NanGePlus/dsh-sop-capsules) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness 插件，提示胶囊：在当前工作区沉淀可复用 SOP / 提示片段，并在会话输入框中一键注入。 |
| 307 | [Nay-1/dsh-skill-manager](https://github.com/Nay-1/dsh-skill-manager) | 0 | 2026-09-29 | 2026-09-30 | 在 DSH 设置面板里管理 agent skill：按项目或来源分组列出，支持启用、禁用、定位、预览与删除 |
| 308 | [NickyWooden/dsh-scrapling](https://github.com/NickyWooden/dsh-scrapling) | 0 | 2026-09-27 | 2026-10-01 | dsh plugin use scrapling |
| 309 | [nilesh32236/dsh-squad](https://github.com/nilesh32236/dsh-squad) | 0 | 2026-09-30 | 2026-09-30 | Cross-workspace AI worker fleets for DeepSeek Harness: spawn named worker sessions in other projects, queue or steer tasks into them, watch them in the background, collect their reports, and answer their escalations — all from one orchestrating chat. |
| 310 | [niliemi/dsh-billing](https://github.com/niliemi/dsh-billing) | 0 | 2026-09-30 | 2026-09-30 | DSH plugin: prices tokens with the official model price table, shows the running cost beside the composer context meter, and blocks a turn once spend passes the ceiling you set. |
| 311 | [novaschai7/dsh-plugin-balance-ui](https://github.com/novaschai7/dsh-plugin-balance-ui) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek account balance, today's token usage and estimated spend in the dsh Web client sidebar. · 在 dsh 侧边栏显示 DeepSeek 余额、今日 token 用量与花费估算。 |
| 312 | [Obwiler/dsh-tsnet-skin-pilot](https://github.com/Obwiler/dsh-tsnet-skin-pilot) | 0 | 2026-10-01 | 2026-10-01 | DSH Web GUI skin: theme derived from the background tone, 7 background modes, right-edge conversation rail. Zero geometry change; no third-party assets. |
| 313 | [Oissp/dsh-desktop-linux-release](https://github.com/Oissp/dsh-desktop-linux-release) | 0 | 2026-09-12 | 2026-10-01 | DeepSeek Harness Desktop |
| 314 | [oldHan2423/dsh-everything-find](https://github.com/oldHan2423/dsh-everything-find) | 0 | 2026-09-30 | 2026-09-30 | Everything (voidtools) file-name search for DeepSeek Harness: an everything_find tool plus a configuration card. |
| 315 | [orphiczhou/dsh-session-tree](https://github.com/orphiczhou/dsh-session-tree) | 0 | 2026-10-01 | 2026-10-01 | Left-sidebar session tree for DeepSeek Harness: every session with its nested subagent descendants, click-through to multi-turn conversations, plus the tree_send tool for messaging any continuable session across the tree. |
| 316 | [PennChong95/dsh-cost-meter](https://github.com/PennChong95/dsh-cost-meter) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件：在上下文用量右侧显示本会话 token 用量与人民币费用（按 DeepSeek 官方价目折算） |
| 317 | [philipho01/dsh-llm-fidelity](https://github.com/philipho01/dsh-llm-fidelity) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 插件：模型服务明确拒绝参数（400/422）时自动修正重发，对话不中断；用量统计防清零、防重复，如实可信。 |
| 318 | [piaobo123/dsh-houhuiyao](https://github.com/piaobo123/dsh-houhuiyao) | 0 | 2026-09-30 | 2026-09-30 | DSH Web「后悔药」插件：最后一条回答上的重新生成 / 编辑提问 / 删除这轮 / 版本翻页器（判据读全量日志，不受客户端 50 条窗口裁剪影响） |
| 319 | [piaobo123/dsh-memory-evolve](https://github.com/piaobo123/dsh-memory-evolve) | 0 | 2026-09-30 | 2026-10-01 | DSH 分层记忆与自我进化插件：记忆/技能/待办/通知/COI 调度/会话广播/书签/记忆同步/无限画板/Advisor 评审，带 WebUI 管理界面。Memory, skills, todos and self-evolution for DeepSeek Harness. |
| 320 | [pomelo-ccc/dsh-pi-composer](https://github.com/pomelo-ccc/dsh-pi-composer) | 0 | 2026-10-01 | 2026-10-01 | PI-Desktop style composer controls for DeepSeek Harness: two-pane model picker, reasoning-effort slider, prompt history and prompt rewrite. |
| 321 | [praystring/dsh-send-debounce](https://github.com/praystring/dsh-send-debounce) | 0 | 2026-09-30 | 2026-09-30 | 把聊天框里连发的几条短消息合并成一轮后再唤醒模型（DSH 插件） |
| 322 | [project-hy/dsh-claude-delegate](https://github.com/project-hy/dsh-claude-delegate) | 0 | 2026-09-30 | 2026-09-30 | DSH 插件：把自包含的编码子任务委派给本机 Claude Code（官方 Agent SDK），后台作业 + 实时输出通道 + 监控面板 + 运行时技能；npm: dsh-claude-delegate |
| 323 | [qiaoshi-dot/dsh-wechat-classic-theme](https://github.com/qiaoshi-dot/dsh-wechat-classic-theme) | 0 | 2026-10-01 | 2026-10-01 | WeChat-style light theme for DeepSeek Harness Desktop. |
| 324 | [qiuyiwu1989-star/dsh-canvas](https://github.com/qiuyiwu1989-star/dsh-canvas) | 0 | 2026-10-01 | 2026-10-01 | Thinking Canvas for DeepSeek Harness: turn a live session into a pan-and-zoom map of intents, AI contributions, tool actions and results, with every card traceable back to its source record. |
| 325 | [QWEQ-CELL-DEL/dsh-whale-girl-wallpaper](https://github.com/QWEQ-CELL-DEL/dsh-whale-girl-wallpaper) | 0 | 2026-09-30 | 2026-09-30 | DSH Web skin: whale-girl dynamic wallpaper background |
| 326 | [Rainpomelo/dsh-anysearch](https://github.com/Rainpomelo/dsh-anysearch) | 0 | 2026-08-20 | 2026-10-01 | DeepSeek Harness 网页搜索插件：AnySearch → Tavily 自动容灾降级（DSH web search provider） |
| 327 | [Ray1270/dsh-task-stack](https://github.com/Ray1270/dsh-task-stack) | 0 | 2026-10-01 | 2026-10-01 | Persistent per-session task stack for DeepSeek Harness agents - focus_task / focus_complete / read_focus + /focus, zero prompt injection |
| 328 | [road-kid/dsh-connect-qoder-x](https://github.com/road-kid/dsh-connect-qoder-x) | 0 | 2026-09-27 | 2026-10-01 | 把 Qoder 模型接入 DeepSeek Harness：用 PAT 调用与 Qoder CLI 同源的模型服务，支持国内版 / 国际版双区域、模型开关、上下文窗口与每日签到，并提供只读的额度概览。 |
| 329 | [robin421/dsh-html-inspector](https://github.com/robin421/dsh-html-inspector) | 0 | 2026-09-30 | 2026-09-30 | Selection mode for DeepSeek Harness: click any element in a local HTML demo, locator auto-written to chat input / DSH HTML 选区模式插件 |
| 330 | [s11phere/dsh-web-search-keyless](https://github.com/s11phere/dsh-web-search-keyless) | 0 | 2026-10-01 | 2026-10-01 | DSH 插件：给 ctx.web 换上一个不需要密钥、也不消耗模型回合的搜索 provider |
| 331 | [safety10086/deepseek-harness-remote-access-shell-error-old](https://github.com/safety10086/deepseek-harness-remote-access-shell-error-old) | 0 | 2026-09-29 | 2026-10-01 | 面向 DeepSeek Harness 的 Codex Skill：提供局域网访问授权与 SSH 远程工作区能力。 |
| 332 | [sakuraboy9128-cmd/dsh-approval-notify](https://github.com/sakuraboy9128-cmd/dsh-approval-notify) | 0 | 2026-09-30 | 2026-09-30 | Desktop notification when DSH is waiting for your approval of a tool call, with click-to-focus on the DSH window. |
| 333 | [sakuraboy9128-cmd/dsh-sensevoice-npu](https://github.com/sakuraboy9128-cmd/dsh-sensevoice-npu) | 0 | 2026-09-30 | 2026-09-30 | DSH speech-to-text provider that runs SenseVoiceSmall on the Intel NPU via OpenVINO |
| 334 | [Sandyzzx/dsh-zcode-bridge](https://github.com/Sandyzzx/dsh-zcode-bridge) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness (dsh) bundle: delegate development tasks to your local ZCode runtime, follow progress, and review the changes. |
| 335 | [Schrei5/dsh-plugin-session-project](https://github.com/Schrei5/dsh-plugin-session-project) | 0 | 2026-09-30 | 2026-09-30 | DSH sidebar plugin: show each session's project (Workspace) name under its title in the flat session list |
| 336 | [SereinHK/dsh-plugin-session-delete](https://github.com/SereinHK/dsh-plugin-session-delete) | 0 | 2026-09-30 | 2026-09-30 | A DSH plugin that deletes a conversation from disk — the destructive Session action DSH deliberately omits — plus bulk cleanup of empty Sessions. For DSH 0.2.x. |
| 337 | [ShikangPang/jizuo-creator-account](https://github.com/ShikangPang/jizuo-creator-account) | 0 | 2026-10-01 | 2026-10-01 | 即作账号插件：DeepSeek Harness 浏览器登录、账号权益与模型接入 |
| 338 | [ShikangPang/jizuo-creator-media-models](https://github.com/ShikangPang/jizuo-creator-media-models) | 0 | 2026-10-01 | 2026-10-01 | 媒体模型插件：DeepSeek Harness 图片视频模型配置与聊天生成工具 |
| 339 | [ShikangPang/jizuo-creator-memory](https://github.com/ShikangPang/jizuo-creator-memory) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 创作记忆插件：小说记忆与知识图谱 |
| 340 | [ShikangPang/jizuo-creator-video](https://github.com/ShikangPang/jizuo-creator-video) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 视频创作插件：独立视频项目、跨小说章节改编与剪辑 |
| 341 | [ShikangPang/jizuo-creator-writing](https://github.com/ShikangPang/jizuo-creator-writing) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness 小说创作插件：独立小说项目、章节与修订 |
| 342 | [shiliumu/dsh-prompt-enhancer](https://github.com/shiliumu/dsh-prompt-enhancer) | 0 | 2026-09-25 | 2026-10-01 | DSH 双引擎插件：✨ 提示词增强（草稿改写+方向选项）+ 🧭 参谋方向引擎（局势模型为核心 / 续研增量更新 / 缩进树为视图）。同名插件有 11 个，只有这一个把「把问题想清楚」当一等公民。 |
| 343 | [shine-yu-student/dsh-pen](https://github.com/shine-yu-student/dsh-pen) | 0 | 2026-09-29 | 2026-09-30 | Enable Deepseek Harness to paint (literally). |
| 344 | [ShukebtAb/Dsh-Cross-Memory](https://github.com/ShukebtAb/Dsh-Cross-Memory) | 0 | 2026-09-28 | 2026-09-30 | @a9i5k4/dsh-auto-memory 的增量插件（只做本体没有的两件事）：①跨实例硬约束注入（一份 cross/RULES.md，全部实例共用，全文注入不截断）；②锚点结构修复 cross_memory_fix_bare_entries（无锚点裸条 / 空锚点 orphan / 重复锚点三分类，只插入新行、绝不改动既有行）。 |
| 345 | [siluwr/dsh-paper-reader](https://github.com/siluwr/dsh-paper-reader) | 0 | 2026-09-30 | 2026-09-30 | Local paper reading for DeepSeek Harness: a sidebar reader panel plus paper_read/paper_list/paper_scan tools, with a from-scratch pure-Node PDF text extractor (no third-party deps, no network). |
| 346 | [siqyka/dsh-ssh-workspace](https://github.com/siqyka/dsh-ssh-workspace) | 0 | 2026-09-30 | 2026-09-30 | 通过SSH方式，将远程主机的文件夹当成DSH的工作区，不需要手动同步、不需要挂载驱动、不需要装任何第三方文件系统。Use a directory on an SSH host as a DSH workspace — hosts management, directory browser, five agent tools. |
| 347 | [sj244/dsh-qq-bridge](https://github.com/sj244/dsh-qq-bridge) | 0 | 2026-09-29 | 2026-09-30 | 把已存在的固定 DSH大肥鱼 会话接到 QQ（OneBot/NapCat）并保留原上下文：白名单 + @/昵称必唤醒 + 概率唤醒，其余只记录，让大肥鱼成为你的群友；也可以把 agent 扔进群里当群友玩（不建议公共群）。 / Bridge one existing DSH session to QQ via OneBot/NapCat, keeping its context — fail-closed whitelist, @/nickname wake, configurable-probability wake. |
| 348 | [skillre/dsh-plugin-pomodoro](https://github.com/skillre/dsh-plugin-pomodoro) | 0 | 2026-09-30 | 2026-09-30 | Pomodoro focus clock plugin for the DeepSeek Harness Web UI: ambient timer under the composer, daily rounds, local preferences |
| 349 | [SuperSgdk/DSH-Liquid-Glass-Theme](https://github.com/SuperSgdk/DSH-Liquid-Glass-Theme) | 0 | 2026-10-01 | 2026-10-01 | DSH液态玻璃皮肤插件：支持 DSH Web 与 Windows 桌面版，可调玻璃材质、流体背景与图片/视频壁纸，独立维护。 |
| 350 | [Sutera-Diffusus/Sutera-Diffusus](https://github.com/Sutera-Diffusus/Sutera-Diffusus) | 0 | 2026-09-30 | 2026-09-30 | SuteraWu — DeepSeek Harness plugins &amp; local-first Windows tools |
| 351 | [swiftlc/dsh-annotation](https://github.com/swiftlc/dsh-annotation) | 0 | 2026-09-30 | 2026-09-30 | Text annotation tools for the dsh web composer |
| 352 | [syyr1987/dsh-linghun-assembler](https://github.com/syyr1987/dsh-linghun-assembler) | 0 | 2026-09-28 | 2026-09-30 | 灵魂的记忆提取侧·认知循环团队版：判断→捞取→组装→被判定→校准五步闭环，判官/史官/辩手/编辑/书记角色化子智能体承载，BM25 检索 + 时序素材 + LLM 组装「有用素材包」注入 linghun。与 dsh-linghun 组合使用。 |
| 353 | [SZYTree0312/dsh-bailian-gold](https://github.com/SZYTree0312/dsh-bailian-gold) | 0 | 2026-09-30 | 2026-09-30 | 百炼成金模式 — 为阿里云百炼做前缀缓存优化的 dsh agent preset。缓存命中定价差 8 倍，省的是金子。 |
| 354 | [SZYTree0312/dsh-opencode-free](https://github.com/SZYTree0312/dsh-opencode-free) | 0 | 2026-09-30 | 2026-09-30 | 星桥模式：OpenCode 免费模型路线的前缀稳定与载荷控制 Agent 预设（配套 dsh-opencode-xdbridge） |
| 355 | [T-MKT/dsh-webui-notification-sound](https://github.com/T-MKT/dsh-webui-notification-sound) | 0 | 2026-10-01 | 2026-10-01 | A DeepSeek Harness plugin which can send a audio notification to remind you when a task is completed or interrupted.  |
| 356 | [Tangcuyu4/dsh-ciku-pack](https://github.com/Tangcuyu4/dsh-ciku-pack) | 0 | 2026-09-30 | 2026-09-30 | DSH 词库插件：收录用户情绪脏话与攻击性口气词当斗嘴弹药，弹药清单每轮自动注入 |
| 357 | [Tangcuyu4/dsh-long-memory](https://github.com/Tangcuyu4/dsh-long-memory) | 0 | 2026-09-30 | 2026-09-30 | DSH 超长记忆包：跨会话长期记忆 + 长文分块检索 + 聊天记录提取精炼，纯 JS 混合检索零依赖 |
| 358 | [Tangcuyu4/dsh-zakou-pack](https://github.com/Tangcuyu4/dsh-zakou-pack) | 0 | 2026-09-30 | 2026-09-30 | DSH 杂口语言包：傲娇暴躁雌小鬼人格包，三层方言引擎（换骨架而非塞词）+ 脾气系统 + 斗嘴迎战 + 文件静默处理 |
| 359 | [TBChaos/dsh-remote-desks](https://github.com/TBChaos/dsh-remote-desks) | 0 | 2026-09-30 | 2026-09-30 | 把本机 / WSL / 虚拟机 / SSH 远端上另一套 DSH 的 WebUI 镜像进桌面版 DSH，用同一套界面和体验管理它们。DSH 插件，MIT。 |
| 360 | [Teagnes/dsh-xxnerv-eva](https://github.com/Teagnes/dsh-xxnerv-eva) | 0 | 2026-09-30 | 2026-09-30 | EVA-style companion HUD for DeepSeek Harness: remaining balance as active time, session cache-hit share as sync ratio. |
| 361 | [temidayoxyz/deep-opencode](https://github.com/temidayoxyz/deep-opencode) | 0 | 2026-09-30 | 2026-09-30 | OpenCode's free-tier models for DeepSeek Harness: a local opencode serve makes the free models resolve, so no API key is needed. |
| 362 | [tenyding/dsh-aionui-layout](https://github.com/tenyding/dsh-aionui-layout) | 0 | 2026-09-30 | 2026-10-01 | AionUi-style two-column right sidebar for the DSH Web GUI, seeded on top of dsh-better-sidebar (preview + files/changes), no build step |
| 363 | [Theworld7/dsh-session-delete-plugin](https://github.com/Theworld7/dsh-session-delete-plugin) | 0 | 2026-09-30 | 2026-09-30 | A DeepSeek Harness (DSH) plugin that adds a permanent "Delete session" action to the sidebar session context menu. |
| 364 | [TianYa-DAO/dsh-pinned-sessions](https://github.com/TianYa-DAO/dsh-pinned-sessions) | 0 | 2026-09-30 | 2026-09-30 | Keeps running, finished-but-unopened and currently open sessions at the top of the DSH Web sidebar workspace list. |
| 365 | [tianyiming1/dsh-plugin-local-prompt-bridge](https://github.com/tianyiming1/dsh-plugin-local-prompt-bridge) | 0 | 2026-09-30 | 2026-09-30 | Stock-safe DSH community plugin: local tokenize pressure + overflow to CONTEXT_WINDOW_EXCEEDED compact-retry |
| 366 | [Tim5613/dsh-homepage-glass](https://github.com/Tim5613/dsh-homepage-glass) | 0 | 2026-09-30 | 2026-09-30 | DSH macOS风格深蓝渐变侧边栏 + 官网流动蓝底丨DSH macOS-Style Deep Blue Gradient Sidebar + Official Website Fluid Blue Background |
| 367 | [TixAn9/DSHdesktop-restart-bottom](https://github.com/TixAn9/DSHdesktop-restart-bottom) | 0 | 2026-09-30 | 2026-09-30 | 给桌面DSH写的重启插件 |
| 368 | [ttmouse/dsh-drag](https://github.com/ttmouse/dsh-drag) | 0 | 2026-09-30 | 2026-10-01 | Drag a conversation row from the DSH web sidebar onto the chat area to insert it into the composer draft as a session-reference chip. |
| 369 | [TZDXF/dsh-wait-minute](https://github.com/TZDXF/dsh-wait-minute) | 0 | 2026-10-01 | 2026-10-01 | dsh插件 延迟发送消息 |
| 370 | [umysy/DSH-Plugins](https://github.com/umysy/DSH-Plugins) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 插件集合 · Plugins for DeepSeek Harness |
| 371 | [Ushio155/dsh-verify-cheap](https://github.com/Ushio155/dsh-verify-cheap) | 0 | 2026-10-01 | 2026-10-01 | Ships the verify-cheap skill for DeepSeek Harness: pick the cheapest check that still yields a definite answer, poll conditions instead of sleeping, and report measured durations. Two zero-dependency Node tools included. |
| 372 | [valing1837/dsh-plugin-github](https://github.com/valing1837/dsh-plugin-github) | 0 | 2026-10-01 | 2026-10-01 | Host-only GitHub integration for DeepSeek Harness: 29 agent tools for repositories, pull requests, issues and reviews, a write-approval gate, a deterministic PR-review CLI and a reusable composite action. The token comes from the DSH credential store; the reviewer needs no model credential. |
| 373 | [Very12345/dsh-computer-use-windows](https://github.com/Very12345/dsh-computer-use-windows) | 0 | 2026-09-30 | 2026-10-01 | Windows desktop computer use for DSH: bound windows, observations, verified input, native approvals and stop controls |
| 374 | [vitas/dsh-codex-review](https://github.com/vitas/dsh-codex-review) | 0 | 2026-10-01 | 2026-10-01 | A deterministic /review command for DeepSeek Harness: a reviewer subagent pinned to a subscription-backed Codex model, with a settings card, one reviewer session per chat, and /review reset to forget it. |
| 375 | [vitas/dsh-ocr-free](https://github.com/vitas/dsh-ocr-free) | 0 | 2026-10-01 | 2026-10-01 | Local OCR for DeepSeek Harness: Apple Vision on macOS, no install, no network, no capability claims |
| 376 | [vowa-antilamer/dsh-locale-ru](https://github.com/vowa-antilamer/dsh-locale-ru) | 0 | 2026-09-30 | 2026-09-30 | Russian localization (ru) for the DeepSeek Harness web GUI — 58 message namespaces, 3674 strings. Language pack for @deepseek-ai/dsh-client-locale. |
| 377 | [w384/clinkai-dsh-web-search-fallback](https://github.com/w384/clinkai-dsh-web-search-fallback) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin: SearXNG-first web search with automatic fallback to the built-in DeepSeek search |
| 378 | [wanghongjian0119/deepseek-harness-desktop](https://github.com/wanghongjian0119/deepseek-harness-desktop) | 0 | 2026-09-30 | 2026-09-30 | Community MIT fork of DeepSeek Harness with a Linux-only desktop shell (.deb and AppImage). Not an official DeepSeek release. |
| 379 | [wangjiezhe/dsh-jp-translate](https://github.com/wangjiezhe/dsh-jp-translate) | 0 | 2026-09-30 | 2026-09-30 | 「日语翻译」模式 |
| 380 | [wangjiezhe/dsh-md-linebreak](https://github.com/wangjiezhe/dsh-md-linebreak) | 0 | 2026-09-30 | 2026-09-30 | 将软换行视为硬换行 |
| 381 | [wangzhanchao883/dsh-no-long-sit](https://github.com/wangzhanchao883/dsh-no-long-sit) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness cat desktop pet — its first job is a sit/water reminder. 猫猫桌宠：先当久坐/喝水提醒用（可拖动、四态循环动画、真实案例、总结评价）。 |
| 382 | [weibaohui/dsh-thinktank](https://github.com/weibaohui/dsh-thinktank) | 0 | 2026-10-01 | 2026-10-01 | 智囊团：dsh 插件 · 144 个思维模型全方位分析一个问题，AI 跨模型综合出共识/分歧/盲区/行动清单 |
| 383 | [wenxiuncle/dsh-offpeak-alert](https://github.com/wenxiuncle/dsh-offpeak-alert) | 0 | 2026-10-01 | 2026-10-01 | DSH 插件：DeepSeek API 峰谷时段角标，显示当前高峰/低谷与倒计时 适配Deepseek Harness 桌面版 \| Peak/off-peak badge for DeepSeek Harness |
| 384 | [westanke/dsh-desktop-deepin](https://github.com/westanke/dsh-desktop-deepin) | 0 | 2026-09-29 | 2026-10-01 | Deepin/UOS Linux build of the DeepSeek Harness desktop shell — community fork with Linux packaging (deb/AppImage) |
| 385 | [whiteS18/dsh-terminal-button](https://github.com/whiteS18/dsh-terminal-button) | 0 | 2026-09-28 | 2026-09-30 | Embedded terminal plugin for DeepSeek Harness. |
| 386 | [win10ogod/dsh-knowledge-work](https://github.com/win10ogod/dsh-knowledge-work) | 0 | 2026-09-30 | 2026-09-30 | Persistent knowledge-work Agent workflows, evidence capture, review and reports for DSH |
| 387 | [WindAndWood/dsh-chat-manager-wide](https://github.com/WindAndWood/dsh-chat-manager-wide) | 0 | 2026-09-30 | 2026-09-30 | DSH Chat Manager Wide — unofficial fork of dsh-chat-manager |
| 388 | [winniesi/dsh-tokens-ci](https://github.com/winniesi/dsh-tokens-ci) | 0 | 2026-10-01 | 2026-10-01 | tokens.ci usage dashboard as a DeepSeek Harness (dsh) settings page: daily tokens, cost, token mix, model shares and leaderboard standing. |
| 389 | [WinTerminal/dsh-mumuemulator-use](https://github.com/WinTerminal/dsh-mumuemulator-use) | 0 | 2026-10-01 | 2026-10-01 | DSH plugin that drives the local MuMu Player 12 emulator |
| 390 | [Woeful001/dsh-refresh](https://github.com/Woeful001/dsh-refresh) | 0 | 2026-10-01 | 2026-10-01 | DSH desktop plugin: a one-click refresh button in the sidebar footer that reloads the plugin inventory and page so newly installed plugins take effect without restarting the app. |
| 391 | [wqty123/dsh-bot](https://github.com/wqty123/dsh-bot) | 0 | 2026-09-30 | 2026-10-01 | Resident agent entity for DeepSeek Harness: bots that live outside any session, with file-based memory you can open and edit, a task queue, an approval gate, and an optional background executor. Ships no platform integrations.好多bug啊，让我再修修吧。感兴趣的可以star一下 |
| 392 | [wsm000/dsh-sandbox-temp-guard](https://github.com/wsm000/dsh-sandbox-temp-guard) | 0 | 2026-10-01 | 2026-10-01 | Self-healing guard for the DeepSeek Harness Windows ACL sandbox: recreates the per-session private temp directory when OS temp cleanup removes it, and annotates backend-unavailable failures so agents stop escalating permissions. Stopgap for deepseek-ai/deepseek-harness Discussion #8550. |
| 393 | [wuyad/dsh-client-ui-cat](https://github.com/wuyad/dsh-client-ui-cat) | 0 | 2026-08-17 | 2026-09-30 | A little tabby cat that wanders around the DeepSeek Harness UI — walking, hopping, napping and getting petted. (dsh 客户端插件:一只在 DeepSeek Harness 界面里游荡的小猫) |
| 394 | [ww692877928-code/dsh-shell-restart](https://github.com/ww692877928-code/dsh-shell-restart) | 0 | 2026-10-01 | 2026-10-01 | Windows 上让 agent 一句话重启 DSH 桌面端：任务计划程序排定、WMI 无黑窗口拉起、按 PID 定位宿主（零依赖）。 |
| 395 | [Wz2-z/dsh-codespaces-kit](https://github.com/Wz2-z/dsh-codespaces-kit) | 0 | 2026-09-29 | 2026-09-30 | DeepSeek Harness (dsh) on GitHub Codespaces: deployment guide + Codespaces quota panel plugin |
| 396 | [XialerMoies/dsh-prompt-easymanager](https://github.com/XialerMoies/dsh-prompt-easymanager) | 0 | 2026-09-30 | 2026-10-01 | DSH 提示词管理插件：可以自行选择全局范围/单独会话中增加个人提示词或修改系统提示词进行工作 |
| 397 | [xiangrikuibaize/dsh-tide-badge](https://github.com/xiangrikuibaize/dsh-tide-badge) | 0 | 2026-09-30 | 2026-09-30 | DSH 输入框下方的计费时段与余额药丸：峰价/谷价（含中国法定节假日与周末规则）、切换倒计时、账户余额（桌面端账号优先，API Key 兜底） |
| 398 | [xiaoxingyuemiao/dsh-session-delete](https://github.com/xiaoxingyuemiao/dsh-session-delete) | 0 | 2026-09-30 | 2026-09-30 | DSH 会话删除插件：会话行「…」菜单里的浅红色删除项 + 二次确认弹窗，确认后连同全部子会话移入可恢复的回收站（DSH 官方只支持归档） |
| 399 | [xingzhen199186/dsh-jev-ultrafast](https://github.com/xingzhen199186/dsh-jev-ultrafast) | 0 | 2026-09-30 | 2026-10-01 | A DeepSeek Harness plugin: one decision per step drives a real browser. TypeSafe Jev picks the operation and the element from an indexed control list. |
| 400 | [xiseliuli/dsh-as-mcp](https://github.com/xiseliuli/dsh-as-mcp) | 0 | 2026-09-30 | 2026-09-30 | dsh-as-mcp |
| 401 | [xkjxziochu/dsh-input-optimizer](https://github.com/xkjxziochu/dsh-input-optimizer) | 0 | 2026-10-01 | 2026-10-01 | Standalone dsh plugin: rewrite the composer draft into a better prompt through the harness's own LLM routes, with an original/optimized comparison. |
| 402 | [xlennart/dsh-auto-review-jev](https://github.com/xlennart/dsh-auto-review-jev) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 审批守护者：权限请求先由审查模型裁决。内置 System One 决策 API 后端（TypeSafe Jev / 硅基流动 systemone / 自部署 Laya）、onLowConfidence 低置信度策略与 allowRules 免审白名单。fork 自 gbthui/dsh-auto-review。 |
| 403 | [XN-H/dsh-ark-image](https://github.com/XN-H/dsh-ark-image) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 生图插件：文生图 / 图片生成 / AI 绘画，基于火山方舟 Seedream（豆包）。零依赖、纯 JavaScript、无需构建。 \| DSH image generation plugin for DeepSeek Harness: text-to-image via Volcano Ark Seedream (Doubao). Zero dependencies, plain JavaScript, no build step. |
| 404 | [xqtx9527/dsh-live-pricing](https://github.com/xqtx9527/dsh-live-pricing) | 0 | 2026-09-30 | 2026-09-30 | DeepSeek Harness 实时价格条：高峰/空闲时段、中国法定节假日、当前单价与会话花费 \| Live pricing widget for DSH |
| 405 | [XZT1118/dsh-plugin-calendar-clock](https://github.com/XZT1118/dsh-plugin-calendar-clock) | 0 | 2026-09-30 | 2026-09-30 | Calendar clock for the DeepSeek Harness web GUI sidebar: a live clock, an analog dial, and a month calendar. (dsh-plugin) |
| 406 | [ya123-4/archify-skill-dsh](https://github.com/ya123-4/archify-skill-dsh) | 0 | 2026-10-01 | 2026-10-01 | DeepSeek Harness plugin bundle that exposes the Archify 3.0.1 skill for architecture / workflow / sequence / dataflow / lifecycle diagrams. |
| 407 | [Yaaaaaaa233/dsh-desktop](https://github.com/Yaaaaaaa233/dsh-desktop) | 0 | 2026-08-17 | 2026-09-30 | 官方 DeepSeek Harness Desktop 的社区插件适配与改造：余额挂件、外观定制与迁移工具。原 Electron 桌面壳已冻结。 |
| 408 | [Yaaaaaaa233/dsh-plan-and-execute](https://github.com/Yaaaaaaa233/dsh-plan-and-execute) | 0 | 2026-09-29 | 2026-09-30 | On-demand planning for DeepSeek Harness: execute simple tasks directly and call a configurable planning model for complex ones. |
| 409 | [yangyiqun747/dsh-plugin-whale-maid](https://github.com/yangyiqun747/dsh-plugin-whale-maid) | 0 | 2026-09-30 | 2026-09-30 | A chibi whale-maid companion plugin for DeepSeek Harness |
| 410 | [YanKaFei/Lacan-Knowledge-OS](https://github.com/YanKaFei/Lacan-Knowledge-OS) | 0 | 2026-09-30 | 2026-09-30 | Corpus-grounded research environment for Lacanian psychoanalysis: frozen scholarly core (39 hash-pinned components), evidence-carrying answers with provenance, MCP surface (10 tools), Obsidian bridge. Engine ships no source text — the reference corpus is a separate public repository, research use only. |
| 411 | [yillkid/dsh-share-room](https://github.com/yillkid/dsh-share-room) | 0 | 2026-10-01 | 2026-10-01 | Invite others into your DeepSeek Harness (DSH) AI conversation: they join from a link, discuss with you and ask the AI together. No account needed. |
| 412 | [Yinhefuluoye/dsh-glass-effect](https://github.com/Yinhefuluoye/dsh-glass-effect) | 0 | 2026-09-30 | 2026-09-30 | A glass-material appearance for DSH: translucent composer, dialogs, menus and code blocks — one switch in Settings, off restores the stock look exactly. |
| 413 | [YottaMeta/yotta-skills-plugin](https://github.com/YottaMeta/yotta-skills-plugin) | 0 | 2026-09-01 | 2026-09-30 | YuanGe (元阁) — orchestration and routing for the YottaMeta skill family, packaged as an Agent Plugin. |
| 414 | [Ytibu/dsh-agents-md](https://github.com/Ytibu/dsh-agents-md) | 0 | 2026-10-01 | 2026-10-01 | 在 DeepSeek Harness 设置面板里编辑与生成 AGENTS.md：改全局规则、改项目规则、按「合并全局规则」或「直接覆盖」生成项目级规则。仅适用于 DSH 0.2.0-rc.2。 |
| 415 | [Yuer6327/ModelTester](https://github.com/Yuer6327/ModelTester) | 0 | 2026-09-25 | 2026-10-01 | 模型测试器 ModelTester（前身 NoLetMe） |
| 416 | [yuluo554/dsh-prompt-polisher](https://github.com/yuluo554/dsh-prompt-polisher) | 0 | 2026-09-30 | 2026-09-30 | Composer prompt-polisher button plugin for DeepSeek Harness (dsh): one-click draft rewrite, style presets, dual model path, race protection |
| 417 | [YunongDai2005/dsh-theone](https://github.com/YunongDai2005/dsh-theone) | 0 | 2026-09-30 | 2026-10-01 | One main chat for DeepSeek Harness, with automatic history routing and topic workspaces. |
| 418 | [YUsaltyfish/dsh-notification-sound](https://github.com/YUsaltyfish/dsh-notification-sound) | 0 | 2026-09-19 | 2026-10-01 | 在弹出选项卡提问、请求工具权限、一轮对话结束时播放提示音；支持自定义音频。 |
| 419 | [yusufameri/dsh-t3-new-session-screen](https://github.com/yusufameri/dsh-t3-new-session-screen) | 0 | 2026-09-25 | 2026-10-01 | T3 Code's New Session screen for DeepSeek Harness: the "What should we build in &lt;project&gt;?" headline with an inline project dropdown, a reasoning-effort picker, and a git branch picker. |
| 420 | [yybai25/dsh-ssh-desktop](https://github.com/yybai25/dsh-ssh-desktop) | 0 | 2026-09-30 | 2026-09-30 | Windows desktop shell for a DeepSeek Harness (DSH) running on a remote server over system ssh — multi-server, notifications, one-click server install, companion DSH plugin. Unofficial. |
| 421 | [Zekilou/dsh-ask-form](https://github.com/Zekilou/dsh-ask-form) | 0 | 2026-09-30 | 2026-09-30 | Structured form questions for the DeepSeek Harness agent: 14 typed field types, conditions, validation, targeted re-asks, and typed JSON answers. |
| 422 | [zepeng-jin/dsh-completion-notifier](https://github.com/zepeng-jin/dsh-completion-notifier) | 0 | 2026-10-01 | 2026-10-01 | DSH macOS native completion notification banners and sound alerts with Settings UI |
| 423 | [zgat/dsh-wechat](https://github.com/zgat/dsh-wechat) | 0 | 2026-10-01 | 2026-10-01 | 把 DeepSeek Harness 接进微信：扫码绑定后在微信里派活、收结果、回审批（iLink/ClawBot 协议） |
| 424 | [zhangDSK-Xu/dsh-sound-alert](https://github.com/zhangDSK-Xu/dsh-sound-alert) | 0 | 2026-10-01 | 2026-10-01 | DSH需要你授权或做出选择时播放提示音并弹出提醒卡片。Plays a sound and shows a reminder card when DSH needs your approval or a choice. |
| 425 | [zhangkk833-byte/dsh-nailong-pet](https://github.com/zhangkk833-byte/dsh-nailong-pet) | 0 | 2026-10-01 | 2026-10-01 | 奶龙桌宠 · DeepSeek Harness 插件：13 组动作的 Electron 透明置顶桌宠，素材取自 CC BY 4.0 精灵图集 |
| 426 | [Zhichii/dsh-completion-playground](https://github.com/Zhichii/dsh-completion-playground) | 0 | 2026-10-01 | 2026-10-01 | To play with DeepSeek's Completion API and check logprobs. |
| 427 | [zhuoxiaoshuai/dsh-database](https://github.com/zhuoxiaoshuai/dsh-database) | 0 | 2026-09-30 | 2026-09-30 | MySQL, Oracle, Redis and Kafka inside DeepSeek Harness. Written entirely with AI. |
| 428 | [ZilongYang/dsh-session-titler](https://github.com/ZilongYang/dsh-session-titler) | 0 | 2026-10-01 | 2026-10-01 | Generate a title for a whole DSH session on demand, then confirm before it is applied. |
| 429 | [zjukop/dsh-time-machine](https://github.com/zjukop/dsh-time-machine) | 0 | 2026-08-15 | 2026-10-01 | Safe, local workspace checkpoints and two-phase restore for DeepSeek Harness |
| 430 | [Zm886/dsh-ruankao-essay](https://github.com/Zm886/dsh-ruankao-essay) | 0 | 2026-09-30 | 2026-09-30 | 软考系统分析师论文助手：DSH 插件（题库索引 + 10 段式写作 + Word 交付） |
| 431 | [zyd232/dsh-compaction-policy](https://github.com/zyd232/dsh-compaction-policy) | 0 | 2026-10-01 | 2026-10-01 | Stops DSH from compacting (summarizing) your conversation far too early. Settable per provider/model. It only changes when compaction happens — what a summary keeps is still DSH’s decision. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 6Mikao9/dsh-wsl-workspace
- ai-yukin/dsh-0-tools
- AngLi1997/dsh-plugin-sync
- AtlasCloudAI/cli
- bainianling/dsh-jailbreak-mode
- becomeless/dsh-desktop-launcher
- CHF-hub99/dsh-plugin-manager
- ClearLeaf13/dsh-local-llm-connect
- emredeveloper/deepseek-harness-huggingface
- fightingFirefox/dsh-glm-vision
- Fro2en12/dsh-download-progress
- Fwkkk666/dsh-time-stop-theme
- GooDAnDReaDY/dsh-model-search
- Grant-Felix/dev-rules
- jevgpt/dsh-plugin-locale-tr
- kaka-in-home/dsh-agent-teams-meta
- lokic7123-star/dsh-route-resilience
- lsl1931/dsh-resource-bar
- maiziman/cedardsh-model-probe
- masquerator-coder/dsh-preset-skills
- Moleitau-WorldSaver/dsh-strata-custom
- N3kOk0/dsh-md3-theme
- Nanmu-del/dsh-plan-toggle
- quan-v/dsh-mcp-ui
- quan-v/dsh-safe-gate
- Rainpomelo/deepseek-harness-liquid-glass-theme
- RealAlexandreAI/dsh-all-search
- RealAlexandreAI/dsh-atuin
- RealAlexandreAI/dsh-cloudflare-browser-run
- RealAlexandreAI/dsh-dejavu-memory
- sharkymew/dsh-utility-tools
- shiyi-0x7f/dsh-client-plugin-store
- shiyi-0x7f/dsh-tool-sysinfo
- twilightt1/dsh-llm-chatgpt-web
- vecnode/vn-harness
- vitas/dsh-web-search-openrouter
- VoodooB0Ys/dsh-desktop-notify
- vTRKA/voice-stt-dsh
- wbin0001/dsh-comfyui-canvas
- Xuxchloris/deepseek-harness-sdr-plugin
- Yaaaaaaa233/dsh-adaptive-plan
- yestone111/RTL_Cockpit
- yoggu/dsh-escape-to-stop
- YpipaQ/dsh-whale-usage
- yuloong07-star/dsh-prompt-system
- YUNmengyuan/Herta-dsh
- YUsaltyfish/dsh-fish-sound-notify
- zzdhsxk/dsh-session-migration-repair
