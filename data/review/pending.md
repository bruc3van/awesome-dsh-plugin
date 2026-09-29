# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-29**
- 快照日期 / Snapshot date: **2026-09-29 (UTC)**
- 待审核 / Pending: **170**
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

对比上一份快照 **2026-09-28** / vs previous snapshot **2026-09-28**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 10721 | +422 | 407 | 46d | 日增百星 | 日增 +422★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 4967 | +171 | 235 | 45d | 日增百星 | 日增 +171★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7888 | +166 | 558 | 98d | 日增百星 | 日增 +166★；已不进榜单 |
| ⚠️ [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 已核准 / approved | 3484 | +131 | 127 | 41d | 日增百星 | 日增 +131★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [luobosibing2/dsh-jev-plugin](https://github.com/luobosibing2/dsh-jev-plugin) | 21 | 2026-09-27 | 2026-09-29 | Native DeepSeek Harness (DSH) plugin integrating TypeSafe Jev as a System One decision layer for agent selection, supervision, corrections, and approvals. |
| 2 | [gezi-wen/sage-mem](https://github.com/gezi-wen/sage-mem) | 6 | 2026-08-14 | 2026-09-29 | File-based cross-session memory for DeepSeek Harness (DSH) — every memory is a plain Markdown file. 纯 Markdown 存储，无数据库、无 worker、无端口；从 Claude Code 无损迁移记忆与人格，带记忆星图与可选的记忆整理。 |
| 3 | [bojansandhaus/tool-repair-skill-for-hermes-and-opencode](https://github.com/bojansandhaus/tool-repair-skill-for-hermes-and-opencode) | 4 | 2026-06-27 | 2026-09-29 | Hermes Tool Repair Skill - deterministic tool call repair for LLM agents. Catches common JSON formatting mistakes open models make and fixes them before dispatch, with repair notes that teach the model to self-correct. |
| 4 | [elangan1997-cmyk/canvas-workbench](https://github.com/elangan1997-cmyk/canvas-workbench) | 4 | 2026-08-30 | 2026-09-29 | 本地生图工作台 canvas-workbench:开自己的 API 生图,画布排版+修图/擦除/去背景/OCR/转矢量,可编辑 PSD/AI 交付,PS/AI 图层级双向桥接 · DSH 插件,与 npm 包同名 |
| 5 | [nguyenduclong-ict/dsh-session-progress](https://github.com/nguyenduclong-ict/dsh-session-progress) | 3 | 2026-09-10 | 2026-09-29 | Session progress tracking for DeepSeek Harness: a live nested checklist with per-item weights, a progress ring in the composer, and a native right sidebar panel. |
| 6 | [zxmqq1234/dsh-auto-retry](https://github.com/zxmqq1234/dsh-auto-retry) | 3 | 2026-09-29 | 2026-09-29 | DeepSeek Harness（dsh）自动重试插件：报错自动重试、中断自动继续、挂起自动唤醒、 每一步右上角弹窗告诉你，不用再手动发"继续"，数据看板还原每一次重试的真相。与 dsh系统重试互补而非替代——在内置重试耗尽或不覆盖的错误码上追加保障。 |
| 7 | [comfylies/dsh-png-pet](https://github.com/comfylies/dsh-png-pet) | 2 | 2026-08-27 | 2026-09-29 | A Windows desktop pet companion for DeepSeek Harness (DSH PNG pet). |
| 8 | [datit309/dsh-live-inspector](https://github.com/datit309/dsh-live-inspector) | 2 | 2026-09-25 | 2026-09-29 | Auto-monitor and reveal active file operations and changes in DeepSeek Harness (DSH) right sidebar |
| 9 | [Ln1m/dsh-input-suite](https://github.com/Ln1m/dsh-input-suite) | 2 | 2026-09-26 | 2026-09-29 | DSH composer suite: skill sets — one switch swaps the skills injected into a session · DSH 输入区家族：技能档——切档即换本会话注入的技能清单 |
| 10 | [Ln1m/dsh-side-suite](https://github.com/Ln1m/dsh-side-suite) | 2 | 2026-09-26 | 2026-09-29 | DSH left column suite: file tree, file opener, tools tab, LAN services, long-running tasks · DSH 左栏家族：文件树 / 文件打开 / 工具 Tab / 局域网服务 / 长期任务 |
| 11 | [Ln1m/dsh-tool-suite](https://github.com/Ln1m/dsh-tool-suite) | 2 | 2026-09-26 | 2026-09-29 | DSH tools and host capabilities: mobile access, literature search, machine-wide file search, hot memory · DSH 工具与宿主能力：移动端访问 / 文献检索 / 全机文件搜索 / 热记忆 |
| 12 | [PhysicalAI-0/dsh-paperforge](https://github.com/PhysicalAI-0/dsh-paperforge) | 2 | 2026-09-29 | 2026-09-29 | PaperForge — forge your understanding of papers inside DSH: selection-to-highlight, selection-to-ask (one dedicated session per paper), marquee-to-note screenshots with backlinks. |
| 13 | [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | 2 | 2026-08-13 | 2026-09-29 | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents. |
| 14 | [zhu1090093659/dsh-skins](https://github.com/zhu1090093659/dsh-skins) | 2 | 2026-09-23 | 2026-09-29 | Skin center plugin and built-in skins for the DSH Web GUI: skins are pure asset directories, loaded and rendered by the skin center, and installed on demand from dsh-market.com. |
| 15 | [asdnmy123/dsh-prompt-optimizer](https://github.com/asdnmy123/dsh-prompt-optimizer) | 1 | 2026-09-29 | 2026-09-29 | 给 DSH 对话输入框加一个 ♂harden 按钮：一键把草稿锻造成硬邦邦、雷霆炫酷、肌肉集团味的提示词 —— 事实一条不丢，废话一句不留。A hard-boiled prompt rewriter for the DeepSeek Harness composer. |
| 16 | [askdkc/dsh-cli](https://github.com/askdkc/dsh-cli) | 1 | 2026-09-27 | 2026-09-29 | DSH向けCLI Plugin / DSH CLIplugin — whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS |
| 17 | [DaYanCCC/DSH-Balance-Mini](https://github.com/DaYanCCC/DSH-Balance-Mini) | 1 | 2026-09-01 | 2026-09-29 | DeepSeek Harness 的极简版余额监视器插件：常驻余额徽章、红绿灯配色、多供应商、高峰/空闲时段。 |
| 18 | [DaYanCCC/DSH-Shortcut](https://github.com/DaYanCCC/DSH-Shortcut) | 1 | 2026-09-01 | 2026-09-29 | DeepSeek Harness 的 Windows 桌面快捷方式工具：双击智能启动/唤起、浏览器打开前自动最小化、崩溃一键重装救援（不删用户数据）。圆角官方图标，纯 PowerShell 零依赖。 |
| 19 | [functy23/dsh-fullscreen-settings](https://github.com/functy23/dsh-fullscreen-settings) | 1 | 2026-09-29 | 2026-09-29 | 把 DSH 的设置弹窗改成 Codex 风格整页全屏设置页 — Codex-style full-page settings for DeepSeek Harness |
| 20 | [gqallen931/paper-gogo-plugin](https://github.com/gqallen931/paper-gogo-plugin) | 1 | 2026-09-29 | 2026-09-29 | DeepSeek Harness plugin for the Paper-gogo evidence-first paper workflow: 18 Phases, G0-G6 gates and four-state evidence audit as native tools, with the workflow and 57 skills bundled in. |
| 21 | [Hjdd14/dsh-toolong-warning](https://github.com/Hjdd14/dsh-toolong-warning) | 1 | 2026-09-24 | 2026-09-29 | dsh（DeepSeek Harness）插件：统计每段对话被压缩过几次并常驻右上角悬浮窗，只有「反复压缩过 + 此后确实又烧掉大量 token」时才提醒新开对话。宁可沉默也不误报，界面中英双语，阈值可在设置页调整。 |
| 22 | [hoyyang/dsh-smart-compact](https://github.com/hoyyang/dsh-smart-compact) | 1 | 2026-09-29 | 2026-09-29 | Codex-style context window auto-management for DeepSeek Harness — lossless zero-model context rollover |
| 23 | [huanglianqi/dsh-math-render](https://github.com/huanglianqi/dsh-math-render) | 1 | 2026-09-29 | 2026-09-29 | Render LaTeX in the DSH web chat: formulas inside your own message bubble and a live preview of the composer draft. |
| 24 | [jafewff/dsh-vdesktop](https://github.com/jafewff/dsh-vdesktop) | 1 | 2026-09-29 | 2026-09-29 | Run GUI apps on an invisible Win32 virtual desktop: an LLM agent drives them via vdesk_* tools, while you watch and take over with real mouse clicks from the DSH (DeepSeek Harness) web GUI panel. |
| 25 | [jiangshirong/dsh-plugin-ui-zoom](https://github.com/jiangshirong/dsh-plugin-ui-zoom) | 1 | 2026-09-29 | 2026-09-29 | Interface zoom (Ctrl+= / Ctrl+- / Ctrl+0) for the DeepSeek Harness client — an out-of-tree Cordis client plugin |
| 26 | [jijiwu3526/dsh-toolsmith](https://github.com/jijiwu3526/dsh-toolsmith) | 1 | 2026-09-29 | 2026-09-29 | Cut the DSH tool set to the job: minimal, task-specific agent presets (117→14 tools) + self-authenticating local CLI. 仅用标准库，无遥测。 |
| 27 | [jiuge613/dsh-amd-free-model](https://github.com/jiuge613/dsh-amd-free-model) | 1 | 2026-09-29 | 2026-09-29 | 每日探测 AMD Radeon Token Factory 免费模型的 DeepSeek Harness 插件（付费区模型不接入） |
| 28 | [Ln1m/dsh-chrome-suite](https://github.com/Ln1m/dsh-chrome-suite) | 1 | 2026-09-26 | 2026-09-29 | DSH window chrome suite: restart button, session archive button, wallet · DSH 窗口边框家族：重启按钮 / 会话归档按钮 / 钱包 |
| 29 | [Ln1m/dsh-foot-archive](https://github.com/Ln1m/dsh-foot-archive) | 1 | 2026-09-26 | 2026-09-29 | Sidebar archive button: two-click confirm, zips sessions idle for more than 3 days and deletes the originals · 侧栏归档按钮：两击确认，把空闲超过 3 天的会话打包并删除原目录 |
| 30 | [Ln1m/dsh-foot-wallet](https://github.com/Ln1m/dsh-foot-wallet) | 1 | 2026-08-16 | 2026-09-29 | DeepSeek Harness wallet: balance, session cost, peak/off-peak pricing, one-click recharge · 左栏钱包面板：余额 / 今日累计 / 本会话消耗 + query_deepseek_balance 工具 |
| 31 | [Ln1m/dsh-host-suite](https://github.com/Ln1m/dsh-host-suite) | 1 | 2026-09-26 | 2026-09-29 | DSH Windows host suite: WebView2 desktop shell, tray guard, boot splash · DSH Windows 宿主家族：WebView2 桌面外壳 / 托盘守护 / 启动片头 |
| 32 | [Ln1m/dsh-side-tasks](https://github.com/Ln1m/dsh-side-tasks) | 1 | 2026-08-15 | 2026-09-29 | Multi-window long-running task management for DeepSeek Harness · 多窗口长期任务管理：任务 = 持久文件夹 + 极简对接文档 |
| 33 | [Ln1m/dsh-tool-file-search](https://github.com/Ln1m/dsh-tool-file-search) | 1 | 2026-09-26 | 2026-09-29 | Adds a machine-wide file search to the composer @ menu (hits never enter the file tree or workspace index) · 在 @ 列表加「搜索本机文件」，全机一次性搜索，不进文件栏与工作区索引 |
| 34 | [Ln1m/dsh-tool-literature](https://github.com/Ln1m/dsh-tool-literature) | 1 | 2026-09-26 | 2026-09-29 | Model-callable literature_search tool (OpenAlex by citation count + arXiv by relevance) · 模型可调用的 literature_search 工具（OpenAlex 被引排序 + arXiv 相关度） |
| 35 | [Ln1m/Ln1m](https://github.com/Ln1m/Ln1m) | 1 | 2026-09-26 | 2026-09-29 | DSH plugin index (zh/en) · DSH 插件清单 |
| 36 | [lordraiden/dsh-9router-web-search](https://github.com/lordraiden/dsh-9router-web-search) | 1 | 2026-09-29 | 2026-09-29 | DSH plugin: 9router-backed web search and web fetch providers |
| 37 | [Movingelated/DSH-LocalModels-TokenSavior](https://github.com/Movingelated/DSH-LocalModels-TokenSavior) | 1 | 2026-09-28 | 2026-09-29 | DSH (DeepSeek Harness) plugin: delegate read-only collection tasks to a local Ollama model — zero cloud token cost, zero API key. 把只读采集任务交给本机 Ollama 模型：含设置面板 + 选型尺 + AI 可读说明书。 |
| 38 | [muqing-kg/dsh-window-state](https://github.com/muqing-kg/dsh-window-state) | 1 | 2026-09-29 | 2026-09-29 | DeepSeek Harness Desktop plugin: remembers the main window's size, position and maximized state · 记住 DSH 桌面版主窗口的尺寸、位置与最大化状态 |
| 39 | [muze63096/dsh-draw-plugin](https://github.com/muze63096/dsh-draw-plugin) | 1 | 2026-09-29 | 2026-09-29 | DeepSeek Harness 画图插件：侧边栏整页面板，写提示词即出图，Q版/正常两档画风，三引擎可选（免费 Pollinations / 硅基流动 Kolors / 任意 OpenAI 兼容）。A text-to-image panel plugin for DeepSeek Harness. |
| 40 | [mydsp/dsh-branchman](https://github.com/mydsp/dsh-branchman) | 1 | 2026-09-29 | 2026-09-29 | Tree-branching engineering directions for DeepSeek Harness: one action = a git worktree + a child session that inherits the conversation + an edge in a tree you can see. |
| 41 | [namehousiqi/dsh-ssh-manager](https://github.com/namehousiqi/dsh-ssh-manager) | 1 | 2026-09-29 | 2026-09-29 | 适配DeepSeek Harness 官方桌面端 - SSH管理插件 |
| 42 | [railgun52/dsh-mcp-servers](https://github.com/railgun52/dsh-mcp-servers) | 1 | 2026-09-29 | 2026-09-29 | MCP servers settings page for the dsh web GUI: a JSON editor over a profile-config namespace that mounts live mcp-client instances from the saved servers |
| 43 | [railgun52/dsh-user-rules](https://github.com/railgun52/dsh-user-rules) | 1 | 2026-09-29 | 2026-09-29 | User rules settings page for the dsh web GUI: a list editor over a profile-config namespace whose rules are injected as a systemPrompt section |
| 44 | [ReLuckyLucy/dsh-Rhine-Lab-theme](https://github.com/ReLuckyLucy/dsh-Rhine-Lab-theme) | 1 | 2026-08-14 | 2026-09-29 | Arknights Rhine Lab (莱茵生命) skin for the DeepSeek Harness Web GUI |
| 45 | [ScreamingMaggot/rcs-context](https://github.com/ScreamingMaggot/rcs-context) | 1 | 2026-09-23 | 2026-09-29 | 把长对话的重复计费砍掉一半，并给模型配一名只读调查员：先核实，后动手。面向 DeepSeek Harness 的上下文压缩与外置推理插件（MIT）。 |
| 46 | [Sovero/dsh_plugins](https://github.com/Sovero/dsh_plugins) | 1 | 2026-09-28 | 2026-09-29 | dsh desktop plugins theme |
| 47 | [SpookyWaste/dsh-plan-compact-execute](https://github.com/SpookyWaste/dsh-plan-compact-execute) | 1 | 2026-09-29 | 2026-09-29 | 为 DSH Web 客户端的 plan 模式审批卡片增加第三个选项「压缩后执行」：先把计划提交之前的上下文压缩成一条摘要检查点，再批准计划，模型带着逐字保留的计划开始执行。 |
| 48 | [toRolex/periscope](https://github.com/toRolex/periscope) | 1 | 2026-08-05 | 2026-09-29 | Bridge vision to text-only coding agents — a Claude Code &amp; Codex plugin for DeepSeek and friends |
| 49 | [windwhiterain/dsh-compaction-threshold](https://github.com/windwhiterain/dsh-compaction-threshold) | 1 | 2026-09-26 | 2026-09-29 | Per-session automatic compaction threshold for DeepSeek Harness: a compaction backend whose trigger percentage is stored per session and adjustable from the Web composer while the session runs. |
| 50 | [windwhiterain/dsh-office](https://github.com/windwhiterain/dsh-office) | 1 | 2026-09-25 | 2026-09-29 | A persistent office of colleague agents for DeepSeek Harness: ordinary sessions with a roster, channels, direct messages, and delivery that wakes a colleague when something is addressed to it. |
| 51 | [WTStarMark/dsh-myskin](https://github.com/WTStarMark/dsh-myskin) | 1 | 2026-09-28 | 2026-09-29 | DSH 皮肤插件：可视化自定义 + 实时预览 + 「皮肤管理」设置页。 非侵入式：不改 DSH 源码 / 配置、不改 DSH 进程；皮肤是完全可逆的覆盖层。  适配：DSH 0.1.7-rc.2 与 0.2.0-rc.1 |
| 52 | [xieluyang912/dsh-live2d-widget](https://github.com/xieluyang912/dsh-live2d-widget) | 1 | 2026-09-29 | 2026-09-29 |  给 DeepSeek Harness Web 界面加一只 Live2D 桌宠：打开 DSH 就能看到可爱的二次元角色站在聊天界面角落。 |
| 53 | [yh4922/dsh-workspace](https://github.com/yh4922/dsh-workspace) | 1 | 2026-09-29 | 2026-09-29 | A remote workspace plugin for DeepSeek Harness (DSH). It manages SSH hosts inside DSH, opens remote terminals, lets you browse and edit remote files and inspect remote Git, and adds remote directories as workspaces, so the Agent's file operations and commands run on the remote machine. |
| 54 | [07vvvv/memory-eternal-ui-restyle](https://github.com/07vvvv/memory-eternal-ui-restyle) | 0 | 2026-09-29 | 2026-09-29 | UI restyle of EternalNight996/memory-eternal — DSH 记忆插件界面重构（衍生版，原作者 EternalNight996，MIT License） |
| 55 | [121212165/dsh-plugin-error-radar](https://github.com/121212165/dsh-plugin-error-radar) | 0 | 2026-09-29 | 2026-09-29 | dsh plugin: tool reliability radar over tool-trace — error rate, failure streaks, p95 latency (/radar) |
| 56 | [121212165/dsh-plugin-fact-vault](https://github.com/121212165/dsh-plugin-fact-vault) | 0 | 2026-09-29 | 2026-09-29 | dsh plugin: cross-session fact notepad with keyword recall (/fact save\|find\|list\|rm + fact_find tool) |
| 57 | [121212165/dsh-plugin-html-report](https://github.com/121212165/dsh-plugin-html-report) | 0 | 2026-09-29 | 2026-09-29 | dsh plugin: render session transcripts into self-contained HTML reports (/report latest\|prefix\|all) |
| 58 | [121212165/dsh-plugin-pinboard](https://github.com/121212165/dsh-plugin-pinboard) | 0 | 2026-09-29 | 2026-09-29 | dsh plugin: cross-session pinboard, pinned notes injected into every session system prompt (/pin /unpin /pins + pin_add) |
| 59 | [121212165/dsh-plugin-spend-forecast](https://github.com/121212165/dsh-plugin-spend-forecast) | 0 | 2026-09-29 | 2026-09-29 | dsh plugin: spend forecasting over cost-ledger sidecars — daily rate, month-end projection, budget exhaustion (/forecast) |
| 60 | [52baihehhh-ai/dsh-splash-screen](https://github.com/52baihehhh-ai/dsh-splash-screen) | 0 | 2026-09-29 | 2026-09-29 | DSH（DeepSeek Harness）开屏动画插件：可跳过的全屏启动动画，纯插件实现、可在插件库开关。A skippable full-screen splash animation plugin for DSH. |
| 61 | [6mt/dsh-plugin-loopback-trust](https://github.com/6mt/dsh-plugin-loopback-trust) | 0 | 2026-09-29 | 2026-09-29 | Restore Host-persisted settings in dsh web behind a reverse proxy — marks the page connection as host-owning so Settings/Models pages load on non-loopback hostnames (dsh 0.1.7). |
| 62 | [9527ccccccc/dsh-xiangqi](https://github.com/9527ccccccc/dsh-xiangqi) | 0 | 2026-09-29 | 2026-09-29 | 中国象棋：棋规引擎 + DSH 插件（右栏棋盘 + 会话可直接调用的工具） |
| 63 | [acdsh4869/dsh-DeepSeek-chat](https://github.com/acdsh4869/dsh-DeepSeek-chat) | 0 | 2026-09-29 | 2026-09-29 | DSH (DeepSeek Harness) 插件：在左侧边栏加原生菜单项打开 chat.deepseek.com（独立窗口 + 登录态持久化），并支持 DSH 与网页端双向划词互传（基于 CDP）。 |
| 64 | [AFunDog/dsh-sidebar-git-graph](https://github.com/AFunDog/dsh-sidebar-git-graph) | 0 | 2026-09-29 | 2026-09-29 | DSH right-sidebar page: a read-only Git commit graph (VS Code style branch/merge lanes). Works with or without dsh-better-sidebar. |
| 65 | [ajia1206/dsh-restart](https://github.com/ajia1206/dsh-restart) | 0 | 2026-09-29 | 2026-09-29 | One-call restart for the running DSH process, with launchd-aware supervision detection, a detached-supervisor fallback, and a verifiable restart log. |
| 66 | [Asheblog/dsh-ollama-cloud](https://github.com/Asheblog/dsh-ollama-cloud) | 0 | 2026-09-29 | 2026-09-29 | Ollama Cloud provider for DeepSeek Harness: one-click setup with per-model reasoning-effort control. 一键配置 Ollama Cloud 供应商，并可调整思维链强度。 |
| 67 | [asun-labs/dsh-plugin-agent-deck](https://github.com/asun-labs/dsh-plugin-agent-deck) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness plugin for interactive agent-switch terminals with tab and grid layouts. |
| 68 | [AzusaKe/dsh-bafx](https://github.com/AzusaKe/dsh-bafx) | 0 | 2026-09-29 | 2026-09-29 | DSH 蔚蓝档案鼠标点击特效与光标拖尾插件 · 竖排侧栏入口 + 弹窗设置 · Blue Archive click effect and cursor trail for DeepSeek Harness |
| 69 | [beicause/dsh-workspace-write-extra](https://github.com/beicause/dsh-workspace-write-extra) | 0 | 2026-09-29 | 2026-09-29 | A DeepSeek Harness permission preset that grants write access to configured extra directories on top of the session workspace. Linux bwrap. |
| 70 | [blibilijojo/dsh-plugin-opencode-go-quota](https://github.com/blibilijojo/dsh-plugin-opencode-go-quota) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness plugin: shows the three OpenCode Go quota windows (5-hour, weekly, monthly) in the composer dock |
| 71 | [BuvkB/dsh-vaultwarden](https://github.com/BuvkB/dsh-vaultwarden) | 0 | 2026-09-29 | 2026-09-29 | Vaultwarden/Bitwarden real-time sync for DeepSeek Harness: WebSocket push, incremental sync, read/write tools and an entry browser panel. |
| 72 | [Canary-Builds/dsh-web-search-zai](https://github.com/Canary-Builds/dsh-web-search-zai) | 0 | 2026-09-29 | 2026-09-29 | Z.AI (GLM) web search provider for DeepSeek Harness — native web_search via the Anthropic-compatible Messages API. Dependency-free DSH Profile Bundle. |
| 73 | [CancerTiN/dsh-set-session-title](https://github.com/CancerTiN/dsh-set-session-title) | 0 | 2026-09-29 | 2026-09-29 | A model-facing set_session_title tool for DeepSeek Harness (dsh) — let the agent rename its own session. |
| 74 | [ChengqianHuang/dsh-lark](https://github.com/ChengqianHuang/dsh-lark) | 0 | 2026-09-29 | 2026-09-29 | Lark/Feishu bridge bundle for DeepSeek Harness: drive local dsh sessions from chat messages and reply in chat |
| 75 | [DDDMUC/dsh-rerun-turn](https://github.com/DDDMUC/dsh-rerun-turn) | 0 | 2026-09-29 | 2026-09-29 | Infix rerun for DeepSeek Harness: re-run any earlier turn in place - the reply is regenerated from the same prompt while every later turn survives, so subsequent calls read A B C1 D E F G. Official seams only; the append-only session log is never rewritten. |
| 76 | [deepseekharness-dsh/agent-mode-change](https://github.com/deepseekharness-dsh/agent-mode-change) | 0 | 2026-09-29 | 2026-09-29 | Agent-mode floating window for DeepSeek Harness (dsh): a draggable Web-UI panel that switches a session's system prompt between the harness's own prompt and 13 archived coding-agent CLI prompts (Claude Code, Codex, Antigravity, Grok, Kimi, MiniMax, opencode…). dsh plugin / Cordis bundle, log-safe via /agent. |
| 77 | [deepseekharness-dsh/dsh-local-file-share](https://github.com/deepseekharness-dsh/dsh-local-file-share) | 0 | 2026-09-29 | 2026-09-29 | Local File Share / 本地文件共享: let the dsh agent list, read and write files on the machine running your browser over a private WebSocket relay + File System Access API. Zero bytes copied onto the dsh host. |
| 78 | [dingyiliao/dsh-bundle-pdf](https://github.com/dingyiliao/dsh-bundle-pdf) | 0 | 2026-09-29 | 2026-09-29 | PDF reader, annotations, OCR, translation and navigation bundle for DeepSeek Harness |
| 79 | [dingyiliao/dsh-bundle-pi-ai-auth](https://github.com/dingyiliao/dsh-bundle-pi-ai-auth) | 0 | 2026-09-19 | 2026-09-29 | OAuth provider-card controls and fallback commands for DeepSeek Harness pi-ai |
| 80 | [EmberwingAviation/dsh-media-gen](https://github.com/EmberwingAviation/dsh-media-gen) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness 生图+生视频整合插件：统一供应商目录、三个工具、中转站实测的异步视频契约、 限流退避纪律、设置页+画廊+快车道 CLI。MIT，fork 合并自 dsh-image-generation 与 dsh-video-gen。\| Unified image+video generation plugin for DeepSeek Harness (MIT, fork-merge of dsh-image-generation &amp; dsh-video-gen) |
| 81 | [Ezisup/dsh-stop-kills-jobs](https://github.com/Ezisup/dsh-stop-kills-jobs) | 0 | 2026-09-29 | 2026-09-29 | 在点击DSH停止时, 不只是停止会话输出而包含了停止后台终端运行 |
| 82 | [fuyu2022/dsh-session-dir](https://github.com/fuyu2022/dsh-session-dir) | 0 | 2026-09-28 | 2026-09-29 | 简单的工作区会话分组插件 |
| 83 | [Fwkkk666/dsh-time-stop-theme](https://github.com/Fwkkk666/dsh-time-stop-theme) | 0 | 2026-09-29 | 2026-09-29 | JoJo-inspired time-stop transition for the DeepSeek Harness light/dark appearance switch |
| 84 | [GIN0076/cross-session-memory](https://github.com/GIN0076/cross-session-memory) | 0 | 2026-09-22 | 2026-09-29 | Zero-dependency cross-session memory for AI coding agents - lessons on disk, evidence-enforced, auto-injected |
| 85 | [GMH13552/dsh-mc-art](https://github.com/GMH13552/dsh-mc-art) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness 面板插件 + 做模组的 skill：从描述到可验证的 Minecraft mod，由游戏自己的 GameTestServer 判定 |
| 86 | [Gnatnaituy/dsh-sidebar-chat](https://github.com/Gnatnaituy/dsh-sidebar-chat) | 0 | 2026-09-26 | 2026-09-29 | A chat panel in DSH's right sidebar: pick any model the deployment routes to, type text and attach images, with an on-chip web search — not bound to a working directory; attachments land in the OS temp folder. |
| 87 | [gxpppp/dsh-computer-use](https://github.com/gxpppp/dsh-computer-use) | 0 | 2026-09-29 | 2026-09-29 | Windows Computer Use plugin for DeepSeek Harness - drives Codex native helper (codex-computer-use.exe) over stdio JSON-RPC |
| 88 | [haiting202-web/jiufeng-invest](https://github.com/haiting202-web/jiufeng-invest) | 0 | 2026-09-20 | 2026-09-29 | 玖峰金融工作台 (Jiufeng FinBox) - 把散落的金融工具装进一个桌面端 \| Finance workbench plugin set for DeepSeek Harness: 7 workflows, 101 skills, 21 zero-key A-share data tools |
| 89 | [haotian-lu-prog/dsh-notifications](https://github.com/haotian-lu-prog/dsh-notifications) | 0 | 2026-09-29 | 2026-09-29 | macOS menu bar activity indicator for DeepSeek Harness (community fork of dsh-notify; supports DSH 0.1.7-rc.2 and 0.2.0-rc.1) |
| 90 | [HarryKong824/fde-copilot](https://github.com/HarryKong824/fde-copilot) | 0 | 2026-09-29 | 2026-09-29 | 给 AI 助手装上工程护栏的 DSH 插件套件 —— AI 改业务规则、推进阶段时没通过校验就动不了，所有动作记在一本改不掉的哈希链账上。零运行时依赖，41 套离线回归。 |
| 91 | [HateYouLittle/dsh-web-tinyfish](https://github.com/HateYouLittle/dsh-web-tinyfish) | 0 | 2026-09-29 | 2026-09-29 | TinyFish search + fetch providers for DeepSeek Harness (dsh): backs the built-in web_search and web_fetch tools. |
| 92 | [huantest2024/dsh-anime-theme](https://github.com/huantest2024/dsh-anime-theme) | 0 | 2026-09-29 | 2026-09-29 | 二次元主题插件 for DeepSeek Harness — anime wallpaper / glass panel / mascot widgets, installable via the official plugin manager |
| 93 | [jaychang1989/dsh-webchat](https://github.com/jaychang1989/dsh-webchat) | 0 | 2026-09-29 | 2026-09-29 | Opens the official chat.deepseek.com web app inside DeepSeek Harness: one sidebar entry renders the real page in the center column through the desktop shell's native browser guest, and keeps you signed in across restarts. No chat UI, no agent tools, no runtime dependencies. |
| 94 | [jclzz/dsh-harbor](https://github.com/jclzz/dsh-harbor) | 0 | 2026-09-29 | 2026-09-29 | 插件港 DSH Harbor · DeepSeek Harness 社区插件收录站｜浏览、搜索、一键安装群友与社区开源的 DSH 插件 |
| 95 | [jiangshirong/dsh-ui-panel-resize](https://github.com/jiangshirong/dsh-ui-panel-resize) | 0 | 2026-09-29 | 2026-09-29 | DSH 插件：给 DeepSeek Harness Web GUI 的对话顶栏加一条可拖动的下边界——上下拖动调高度，拖过最小值即收起，点击细条恢复。A DSH (DeepSeek Harness) client plugin: vertical resize + collapse grip for the conversation top header. |
| 96 | [keenableai/dsh-keenable](https://github.com/keenableai/dsh-keenable) | 0 | 2026-09-29 | 2026-09-29 | Keenable web search and page fetch for DeepSeek Harness, no API key needed |
| 97 | [LeifDai/MACKORN-hydraulic-cone-crusher](https://github.com/LeifDai/MACKORN-hydraulic-cone-crusher) | 0 | 2026-09-26 | 2026-09-29 | MACKORN hydraulic cone crusher selection, plant design and process simulation for AI - 19 tools, MCP server, 10 languages, zero dependencies. Aggregate and metal-mine crushing circuits. |
| 98 | [lifeopsgo/dsh-lark-session-monitor-plugin](https://github.com/lifeopsgo/dsh-lark-session-monitor-plugin) | 0 | 2026-09-18 | 2026-09-29 | 飞书会话监听并投递到指定工作区的会话中 |
| 99 | [Ln1m/dsh-host-splash](https://github.com/Ln1m/dsh-host-splash) | 0 | 2026-09-28 | 2026-09-29 | WebView2 启动片头层：铺满播放动画盖住页面未渲染时的空白，毛玻璃跳过气泡，片库与停顿可配 |
| 100 | [Ln1m/dsh-pane-browser](https://github.com/Ln1m/dsh-pane-browser) | 0 | 2026-09-28 | 2026-09-29 | DSH 右栏内嵌浏览器：面板自绘工具条，画面是桌面外壳里的 WebView2 原生子控件 · Embedded browser in the DSH right column; the panel draws the toolbar while the picture is a WebView2 child control of the desktop shell |
| 101 | [Ln1m/dsh-pane-suite](https://github.com/Ln1m/dsh-pane-suite) | 0 | 2026-09-28 | 2026-09-29 | DSH right column suite: document viewer and embedded browser · DSH 右栏家族：文档查看器与内嵌浏览器 |
| 102 | [Ln1m/dsh-side-files](https://github.com/Ln1m/dsh-side-files) | 0 | 2026-09-28 | 2026-09-29 | DSH Web 左栏文件家族：dsh-files-tree（文件 Tab + 输入区 @）+ dsh-files-open（右栏打开本机文件），需先装 dsh-vk-suite 骨架 |
| 103 | [Ln1m/dsh-side-tools](https://github.com/Ln1m/dsh-side-tools) | 0 | 2026-09-28 | 2026-09-29 | 工具栏：左栏「工具」Tab 面板 + 局域网服务（加卡范式）+ 两种「移动端访问」（自研局域网 / 第三方公网，只装一个） |
| 104 | [Ln1m/dsh-tool-hot-memory](https://github.com/Ln1m/dsh-tool-hot-memory) | 0 | 2026-09-26 | 2026-09-29 | Projects Mnemon USER.md / MEMORY.md into every session system prompt · 把 Mnemon 的 USER.md / MEMORY.md 投影进每个会话的 systemPrompt |
| 105 | [MaudieHakimi/dsh-entry-shaper](https://github.com/MaudieHakimi/dsh-entry-shaper) | 0 | 2026-09-29 | 2026-09-29 | A Deepseek Harness Plugin to Shape The Entry of LLM. |
| 106 | [maxwell234smith/dsh-cost-meter](https://github.com/maxwell234smith/dsh-cost-meter) | 0 | 2026-09-29 | 2026-09-29 | DSH 插件：实时统计并显示你自己的 DeepSeek API 费用（按官方闲时/忙时价，人民币计价） |
| 107 | [MicroSharpAnt/dsh-theme-presets](https://github.com/MicroSharpAnt/dsh-theme-presets) | 0 | 2026-09-18 | 2026-09-29 | 支持的主题：默认、Nord、Dracula、Catppuccin、Tokyo Night、One Dark、Gruvbox、Solarized、GitHub、Everforest、Kanagawa、Rosé Pine |
| 108 | [MMiao79/dsh-pilot-releases](https://github.com/MMiao79/dsh-pilot-releases) | 0 | 2026-09-29 | 2026-09-29 | DSH 领航官 · DSH-Pilot —— DeepSeek Harness Windows x64 管理与运维面板（成品发布仓，只发布成品） |
| 109 | [Nay-1/dsh-session-menu-delete](https://github.com/Nay-1/dsh-session-menu-delete) | 0 | 2026-09-29 | 2026-09-29 | DSH 侧栏会话行菜单里的「删除会话」：级联清理子代理、保护 fork 会话 |
| 110 | [ns-zzj/dsh-scrcpy-core](https://github.com/ns-zzj/dsh-scrcpy-core) | 0 | 2026-09-29 | 2026-09-29 | DSH 投屏控制的共用核心：界面、设备列表、投屏面板与 AI 工具（配合其他 provider 使用） |
| 111 | [oliblue-evan/dsh-cli-inventory](https://github.com/oliblue-evan/dsh-cli-inventory) | 0 | 2026-09-29 | 2026-09-29 | DSH 环境与能力：在「设置」里列出这个 Agent 能操作什么 —— 工具、技能、MCP，以及你自己安装的命令行工具与运行时；只读、容错，系统目录不列出 |
| 112 | [oliblue-evan/dsh-usage-pill](https://github.com/oliblue-evan/dsh-usage-pill) | 0 | 2026-09-29 | 2026-09-29 | DSH 用量与余额：会话用量、按每笔实际发生时刻与模型计价的费用（峰谷/档位）、账户余额；账号登录无需 API Key。 |
| 113 | [omoinoki/dsh-sekaisync-connect](https://github.com/omoinoki/dsh-sekaisync-connect) | 0 | 2026-09-26 | 2026-09-29 | DeepSeek Harness direct-connect module for a local SekaiSync knowledge base — 10 compact tools, zero dependencies. |
| 114 | [Onenightcarnival/dsh-toolkit](https://github.com/Onenightcarnival/dsh-toolkit) | 0 | 2026-09-25 | 2026-09-29 | Plugins for DeepSeek Harness (dsh): database workbench, S3 storage, OpenTelemetry export and browser control — install one or all in a single package |
| 115 | [OwlNjust/DSH-DeepSeek-Balance](https://github.com/OwlNjust/DSH-DeepSeek-Balance) | 0 | 2026-08-23 | 2026-09-29 | DeepSeek balance &amp; usage monitor plugin for DeepSeek Harness (dsh web) — floating widget with peak/off-peak price reminder (梁文峰/梁文谷). |
| 116 | [phoenixyun/dsh-plugin-live-diff](https://github.com/phoenixyun/dsh-plugin-live-diff) | 0 | 2026-09-13 | 2026-09-29 | Live streaming diffs for DSH file edits: a diff that grows while the model is still emitting the edit arguments. |
| 117 | [Piracola/dsh-rtk](https://github.com/Piracola/dsh-rtk) | 0 | 2026-09-29 | 2026-09-29 | 尽量原生精简的 DSH-RTK 连接器 |
| 118 | [psychiiii/dsh-three-window](https://github.com/psychiiii/dsh-three-window) | 0 | 2026-09-24 | 2026-09-29 | Three-window workbench plugin for DeepSeek Harness (dsh): chat, construct, and review side by side, with an anonymous multi-model review. |
| 119 | [pure-serendipity-five/dsh-liquid-glass-studio](https://github.com/pure-serendipity-five/dsh-liquid-glass-studio) | 0 | 2026-09-27 | 2026-09-29 | DSH 液态玻璃主题 + 壁纸库：全透明分层玻璃、可拖动自制控件、自适应设置面板（Liquid glass theme + wallpaper gallery for DeepSeek Harness） |
| 120 | [rezon-aki/dsh-compaction-effort-inherit](https://github.com/rezon-aki/dsh-compaction-effort-inherit) | 0 | 2026-09-29 | 2026-09-29 | 上下文压缩沿用会话思考档位：DeepSeek 前缀缓存按档位分桶，不修就会在每次压缩时把整个上下文按未缓存价重算一遍。零依赖、不碰官方插件。 |
| 121 | [Ruler4396/dsh-shredder](https://github.com/Ruler4396/dsh-shredder) | 0 | 2026-09-29 | 2026-09-29 | dsh 插件：在原生会话菜单里给已归档的会话加一枚红色「彻底删除」行，不额外做归档面板 / dsh plugin: one red delete row in the native session menu, for archived sessions only |
| 122 | [sandyyst/dsh-plugin-mermaid-gb-svg](https://github.com/sandyyst/dsh-plugin-mermaid-gb-svg) | 0 | 2026-09-29 | 2026-09-29 | DSH 插件：Mermaid 流程图 → GB/T 1526-1989（ISO 5807）国标流程图 SVG，符号合规、正交走线、超 A4/A3 自动分页 |
| 123 | [Senti100/dsh-oidc](https://github.com/Senti100/dsh-oidc) | 0 | 2026-09-28 | 2026-09-29 | Provider-neutral OpenID Connect admission for DeepSeek Harness Web |
| 124 | [shay-Ckm/dsh-skill-softcopyright](https://github.com/shay-Ckm/dsh-skill-softcopyright) | 0 | 2026-09-29 | 2026-09-29 | DSH plugin: software-copyright delivery pipeline - 4 skills + 8 tools + 10-phase gated workflow + four-way consistency audit |
| 125 | [shell-error/deepseek-harness-remote-access](https://github.com/shell-error/deepseek-harness-remote-access) | 0 | 2026-09-29 | 2026-09-29 | 面向 DeepSeek Harness 的 Codex Skill：提供局域网访问授权与 SSH 远程工作区能力。 |
| 126 | [shinelon/dsh-workspace-group-plugin](https://github.com/shinelon/dsh-workspace-group-plugin) | 0 | 2026-09-28 | 2026-09-29 | Custom workspace groups for the DSH sidebar: group directories, drag to regroup/reorder, inline search and sessions, one-click official-view fallback. |
| 127 | [Shiyuedong-Jade/DM-inspect](https://github.com/Shiyuedong-Jade/DM-inspect) | 0 | 2026-09-29 | 2026-09-29 | 达梦 DM8 数据库巡检插件：85 项只读巡检，生成 HTML 报告。支持单实例与共享存储集群（DMDSC）。 |
| 128 | [SiriusWJ/dsh-kimi-code-oauth](https://github.com/SiriusWJ/dsh-kimi-code-oauth) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness plugin for Kimi Code subscription OAuth |
| 129 | [SkylerFee/dsh-llm-opencode-go-live](https://github.com/SkylerFee/dsh-llm-opencode-go-live) | 0 | 2026-09-28 | 2026-09-29 | DeepSeek Harness 的 OpenCode Go 动态模型目录插件。它从 Models.dev 更新 \`opencode-go\` 模型列表，注册独立的 \`opencode-go-live\` 路由。An OpenCode Go live model catalog plugin for DeepSeek Harness. It reads the \`opencode-go\` catalog from Models.dev, registers the separate \`opencode-go-live\` route. |
| 130 | [smellgamed3/dsh-plugin-list-sync](https://github.com/smellgamed3/dsh-plugin-list-sync) | 0 | 2026-09-28 | 2026-09-29 | Sync DeepSeek Harness plugin lists across clients via any S3-compatible endpoint (AWS S3 / MinIO / RustFS / R2 / OSS) |
| 131 | [sredevopsorg/dsh-plugins](https://github.com/sredevopsorg/dsh-plugins) | 0 | 2026-09-29 | 2026-09-29 | Our Deepseek Harness custom plugins, skills and tools |
| 132 | [SZYTree0312/dsh-whale-elite-preset](https://github.com/SZYTree0312/dsh-whale-elite-preset) | 0 | 2026-09-29 | 2026-09-29 | 鲸英模式：省 Token、高效率的 DeepSeek Harness Agent 预设 |
| 133 | [tangzijie716/dsh-wechat-push](https://github.com/tangzijie716/dsh-wechat-push) | 0 | 2026-09-29 | 2026-09-29 | 向微信公众号推送草稿 |
| 134 | [Utmotc/dsh-balance-card](https://github.com/Utmotc/dsh-balance-card) | 0 | 2026-09-28 | 2026-09-29 | 在DSH左侧启用一个余额监测卡片 |
| 135 | [W-SING-HUNG/dsh-resume](https://github.com/W-SING-HUNG/dsh-resume) | 0 | 2026-09-29 | 2026-09-29 | 求职简历工坊：粘贴 JD，AI 按岗位重写简历，只基于真实内容，不编造 — DeepSeek Harness 插件 |
| 136 | [wanetcn/dsh-advancesearch](https://github.com/wanetcn/dsh-advancesearch) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness 高级搜索插件:按关键字搜索所有会话 + Claude Code / Codex / ZCode 等 agent 历史记录,工作区搜索按钮、会话跳转,内置 MCP 让 agent 自己检索历史 |
| 137 | [wangbodbs/dsh-plugins](https://github.com/wangbodbs/dsh-plugins) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness plugins: a Feishu (Lark) chat channel and two MCP server bundles (DaVinci Resolve, FilmLight FLAPI). |
| 138 | [wangxiang0605qvq/dsh-clock](https://github.com/wangxiang0605qvq/dsh-clock) | 0 | 2026-09-29 | 2026-09-29 | DSH 桌面端输入框里的实时时钟 \| Live clock chip in the DSH composer tool row |
| 139 | [WeatherWind/dsh-llm-pi-ai-live](https://github.com/WeatherWind/dsh-llm-pi-ai-live) | 0 | 2026-09-29 | 2026-09-29 | Real-time model-list refresh for DeepSeek Harness llm-pi-ai provider routes: query the live endpoint, merge the installed pi-ai catalog metadata onto new ids, append-only writes through the official settings seam. |
| 140 | [weibaohui/dsh-kite](https://github.com/weibaohui/dsh-kite) | 0 | 2026-09-28 | 2026-09-29 | dsh 插件 · 放风筝:agent 编程时屏幕上放一只动画风筝,token 越多飞得越高;潍坊谱系框架卡组,支持自定义贴图 |
| 141 | [weizhida/dsh-voice-danmaku](https://github.com/weizhida/dsh-voice-danmaku) | 0 | 2026-09-29 | 2026-09-29 | 这是dsh的插件，语音发送弹幕。在玩游戏时通过语音输入在b站发弹幕，不切出游戏可以正常操作 |
| 142 | [wenhongquan/dsh-open-file-viewer](https://github.com/wenhongquan/dsh-open-file-viewer) | 0 | 2026-09-29 | 2026-09-29 | Open File Viewer preview for DSH — PDF, Office, images, archives, CAD/3D/GIS preview inside the sidebar |
| 143 | [williamzhangww/dsh-priceflow](https://github.com/williamzhangww/dsh-priceflow) | 0 | 2026-09-28 | 2026-09-29 | Official DeepSeek peak/off-peak pricing, countdown and off-peak message scheduling for DSH. |
| 144 | [wind342/dsh-gfg](https://github.com/wind342/dsh-gfg) | 0 | 2026-09-29 | 2026-09-29 | Lightweight generation-fact graphs for tracing actual DeepSeek Harness tool formation |
| 145 | [windwhiterain/dsh-history-access](https://github.com/windwhiterain/dsh-history-access) | 0 | 2026-09-29 | 2026-09-29 | Agent-facing recall of a session's own pre-compaction history for DeepSeek Harness: an outline, a paginated transcript read, and a literal search over the durable log. |
| 146 | [windwhiterain/dsh-llm-quota-retry](https://github.com/windwhiterain/dsh-llm-quota-retry) | 0 | 2026-09-29 | 2026-09-29 | Keep a DeepSeek Harness agent step alive through an exhausted account quota: retry the same request once per hour, with no attempt limit, until it succeeds or the turn is cancelled. |
| 147 | [windwhiterain/dsh-skill-gate](https://github.com/windwhiterain/dsh-skill-gate) | 0 | 2026-09-29 | 2026-09-29 | Hide the model-facing skill loader for the agents of the preset that mounts it, so a session can load a skill only when the user invokes it explicitly with /name. |
| 148 | [WONGIII/dsh-turn-status-text](https://github.com/WONGIII/dsh-turn-status-text) | 0 | 2026-09-29 | 2026-09-29 | Custom text and colour for the DeepSeek Harness chat running-status line (「深度求索中，用时 12秒 ···」), configured from the Plugins page. |
| 149 | [WovenJunct/dsh-plugin-simple-delete-session](https://github.com/WovenJunct/dsh-plugin-simple-delete-session) | 0 | 2026-09-29 | 2026-09-29 | 一个简单的删除dsh会话的插件，简单可用。 |
| 150 | [wzqvip/dsh-app](https://github.com/wzqvip/dsh-app) | 0 | 2026-09-29 | 2026-09-29 | 效率导向的 DeepSeek Harness 增强：不打开浏览器也能秒回 agent 提问、随时看到进度。桌宠与 galgame 仅为可选交互模块。Productivity-first enhancement for DeepSeek Harness. |
| 151 | [XDTrees/dsh-opencode-xdbridge](https://github.com/XDTrees/dsh-opencode-xdbridge) | 0 | 2026-09-29 | 2026-09-29 | 把 OpenCode 的免费模型（big-pickle、LongCat、MiMo、Nemotron、Space Bunny 等）接进 DSH 的模型选择器，作为 opencode-xdbridge 分组使用，并在设置 → OpenCode-XD 里提供一个可视化的交互入口。 |
| 152 | [xfqz86/dsh-web-fetch-allowlist](https://github.com/xfqz86/dsh-web-fetch-allowlist) | 0 | 2026-09-29 | 2026-09-29 | DSH 网页抓取白名单插件：复用官方传输链路，仅对可配置 CIDR（如 Clash fake-ip 段）放行，其余 SSRF 校验全部保留。纯 JS，无需构建。 |
| 153 | [xinshang777/dsh-per-turn-isolation](https://github.com/xinshang777/dsh-per-turn-isolation) | 0 | 2026-09-29 | 2026-09-29 | DSH 插件：让每轮对话互相独立——每轮只把「本轮输入 + 长期设定」交给模型，历史自动折叠，显著降低上下文占用与费用；界面历史仍完整可回看。 |
| 154 | [xinshang777/dsh-restart-button](https://github.com/xinshang777/dsh-restart-button) | 0 | 2026-09-27 | 2026-09-29 | DSH 插件：网页上一键重启 dsh web 服务，页面自动带新 token 恢复登录，不用回命令行 Ctrl+C 再启动。 |
| 155 | [xinshang777/dsh-skill-manager](https://github.com/xinshang777/dsh-skill-manager) | 0 | 2026-09-27 | 2026-09-29 | DSH 插件：给设置页加上「技能管理」——用图形界面登记、开关、改名、删除技能，不用再手改 SKILL.md 和配置文件。 |
| 156 | [xinshang777/dsh-turn-cost](https://github.com/xinshang777/dsh-turn-cost) | 0 | 2026-09-27 | 2026-09-29 | DSH 插件：在每轮 AI 回复后面显示这一轮花了多少钱（¥）和上下文占用百分比，点百分比即可压缩上下文。按官方峰谷价计费。 |
| 157 | [xmwengxing/dsh-client-ui-sidebar-perfmon](https://github.com/xmwengxing/dsh-client-ui-sidebar-perfmon) | 0 | 2026-09-29 | 2026-09-29 | Real-time host performance monitoring for the DeepSeek Harness right Sidebar: CPU / memory / swap gauges plus a sortable process table. · DSH 右侧栏实时性能监控 |
| 158 | [xuechengzou/dsh-file-drop](https://github.com/xuechengzou/dsh-file-drop) | 0 | 2026-09-03 | 2026-09-29 | Gap-only extension for the DSH web composer attachment intake: a dropped folder is expanded into its individual files and handed back to the built-in intake, so the native rail, upload progress, limits and notices are reused unchanged. |
| 159 | [Yaaaaaaa233/dsh-adaptive-plan](https://github.com/Yaaaaaaa233/dsh-adaptive-plan) | 0 | 2026-09-29 | 2026-09-29 | On-demand planning for DeepSeek Harness: execute simple tasks directly and call a configurable planning model for complex ones. |
| 160 | [YangShen-SWE/dsh-plugin-simple-pet](https://github.com/YangShen-SWE/dsh-plugin-simple-pet) | 0 | 2026-09-29 | 2026-09-29 | A Windows desktop pet for official DeepSeek API balance, usage, and animated reactions in DSH. |
| 161 | [Yaoxxxxxxx/dsh-plugins](https://github.com/Yaoxxxxxxx/dsh-plugins) | 0 | 2026-09-29 | 2026-09-29 | DSH 桌面端插件合集（一个插件一个目录）· Ctrl+I 聚焦输入框等小工具 \| Small plugins for the DeepSeek Harness desktop client, one per directory |
| 162 | [yestone111/RTL_Cockpit](https://github.com/yestone111/RTL_Cockpit) | 0 | 2026-09-29 | 2026-09-29 | RTL_Cockpit —— 面向 RTL 工程师的可视化协同编程驾驶舱，DeepSeek Harness 插件（Verilog/VHDL 框图、信号全链路、时钟域分析、AI Vibe Coding） |
| 163 | [Yokira404/dsh-thinking-highlight](https://github.com/Yokira404/dsh-thinking-highlight) | 0 | 2026-09-29 | 2026-09-29 | 自动标注提示链中的关键词Keyword counts and highlighting for DSH thinking rows |
| 164 | [yorelog/dsh-omarchy-agent](https://github.com/yorelog/dsh-omarchy-agent) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness on Omarchy as Agent |
| 165 | [yourtion/dsh-decision](https://github.com/yourtion/dsh-decision) | 0 | 2026-09-25 | 2026-09-29 | Extensible judgment layer for DeepSeek Harness and Pi: structured probability providers, shared tool-risk policy, and shadow audit traces. Jev adapter included. |
| 166 | [yuluo554/dsh-pipeline](https://github.com/yuluo554/dsh-pipeline) | 0 | 2026-09-29 | 2026-09-29 | Multi-node agent pipeline orchestration plugin for DeepSeek Harness (dsh) — JSON-defined workflows, per-node model/skills routing, web editor, live run cards. Responds to dsh#7704. |
| 167 | [YunpengDon/dsh-knowledge-tree](https://github.com/YunpengDon/dsh-knowledge-tree) | 0 | 2026-09-28 | 2026-09-29 | 一个「把散落知识捋成自己的教程」的个人知识管理系统。在与AI的对话中收集零散知识（树叶），AI 自动归类到知识树，长期积累最终形成个人独有的知识体系。 |
| 168 | [yusufameri/dsh-t3-session-ui](https://github.com/yusufameri/dsh-t3-session-ui) | 0 | 2026-09-28 | 2026-09-29 | T3 Code's session-context UX for DeepSeek Harness: a session-row context block, provider chip, status pill, header context strip, and a context-window meter with compaction. |
| 169 | [zangxx66/dsh-prompt-setting](https://github.com/zangxx66/dsh-prompt-setting) | 0 | 2026-09-29 | 2026-09-29 | DeepSeek Harness 默认 System Prompt 管理插件：在 Web GUI「设置」里浏览、检索并覆盖最终装配进每轮会话的系统提示词 |
| 170 | [zdjmrq/dsh-better-chat](https://github.com/zdjmrq/dsh-better-chat) | 0 | 2026-09-29 | 2026-09-29 | 给 DeepSeek Harness 的「纯对话」模式：像网页版一样聊天，但会自己多轮思考 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2710165659/dsh-web-plugin-explain
- AQian0/dsh-desktop
- DaYanHCD/DSH-Balance-Mini
- Dingpenghui-good/dsh-plugin-manager
- elangan1997-cmyk/dsh-canvas-suite
- invalidnaaaame/dsh-scroll-timeline
- invalidnaaaame/dsh-side-workspace
- ISimon3/dsh-theme-skin
- KKLL2025/dsh-project-anchor
- Ln1m/dsh-archive-button
- Ln1m/dsh-hot-memory
- Ln1m/dsh-lan-services
- Ln1m/dsh-literature-search
- Ln1m/dsh-local-file-search
- Ln1m/dsh-restart-button
- Ln1m/dsh-skill-sets
- Ln1m/dsh-wifi-access
- loyalchiiina/dsh-archive-manager-pro
- luobosibing2/deepseek-harness-jev
- Movingelated/dsh-local-ollama-models
- Nay-1/dsh-skill-manage
- qinyre/dsh-Desktop
- qtjg/dsh-plugin-git-context
- ReLuckyLucy/dsh_Rhine_Lab_theme
- sd1g1/dsh-opencode-go-models
- sd1g1/dsh-response-notification
- sd1g1/dsh-subscription-usage
- tianyuegithub/dsh-pactflow
- trentswd/dsh-escalation-review
- Utmotc/dsh-plugin-balance
- WTStarMark/DSH-QAQ
- Yokira404/dsh-highlight-LETME
