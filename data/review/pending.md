# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-30**
- 快照日期 / Snapshot date: **2026-08-30 (UTC)**
- 待审核 / Pending: **176**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **77**
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

对比上一份快照 **2026-08-29** / vs previous snapshot **2026-08-29**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 待审 / pending | 133 | +6 | 12 | 15d | 待审高星 | 核准即榜 #66 |
| ⚠️ [wecode-ai/Wegent](https://github.com/wecode-ai/Wegent) | 待审 / pending | 747 | — | 128 | 231d | 待审高星 | 核准即 Top 16 |
| ⚠️ [myYangyunfan/dsh_desktop](https://github.com/myYangyunfan/dsh_desktop) | 待审 / pending | 610 | — | 30 | 16d | 待审高星 | 核准即 Top 18 |
| ⚠️ [theBigGavin/marketingdashboard](https://github.com/theBigGavin/marketingdashboard) | 待审 / pending | 126 | — | 24 | 43d | 待审高星 | 核准即榜 #72 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [wecode-ai/Wegent](https://github.com/wecode-ai/Wegent) ⚠️ | 747 | 2026-01-10 | 2026-08-30 | Plan, build, and deliver with an open-source, self-hostable AI workspace for coding, collaboration, and automation. |
| 2 | [myYangyunfan/dsh_desktop](https://github.com/myYangyunfan/dsh_desktop) ⚠️ | 610 | 2026-08-13 | 2026-08-30 | DeepSeek Harness (dsh) Windows desktop client - bundled Node.js + dsh CLI, one-click launch |
| 3 | [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) ⚠️ | 133 | 2026-08-14 | 2026-08-30 | 一个基于 DeepSeek Harness 插件机制构建的多端远程访问方案，通过安全、低延迟、端到端加密的 P2P 优先网络，支持从 PC、Android 和 Web 随时访问并操作远程 Harness。 (A multi-device remote access solution built on the DeepSeek Harness plugin system, enabling PC, Android, and Web clients to securely access and operate a remote Harness over a low-latency, end-to-end encrypted, P2P-first network.) |
| 4 | [theBigGavin/marketingdashboard](https://github.com/theBigGavin/marketingdashboard) ⚠️ | 126 | 2026-07-17 | 2026-08-30 | 面向金融与产业研究的一屏式实时行情大屏：A股/港股/美股指数、大宗商品、美债收益率、板块热点、主力资金流、7×24 快讯、产业链自选股、AI 大模型 Token 追踪。A real-time market research cockpit on a single screen: CN/HK/US indices, commodities, treasury yields, sector hotspots, capital flows, 7×24 news, industry-chain watchlists and AI token usage trends.  |
| 5 | [Ed-Marcavage/awesome-security-agent-harnesses](https://github.com/Ed-Marcavage/awesome-security-agent-harnesses) | 16 | 2026-08-03 | 2026-08-30 | AI agents for pentesting, code audit, fuzzing, vulnerability discovery, and reverse engineering — harnesses, sandboxes, security MCP servers, benchmarks, and evals. |
| 6 | [Suiwan/whale-purse](https://github.com/Suiwan/whale-purse) | 16 | 2026-08-14 | 2026-08-30 | A cute whale desktop pet for DeepSeek Harness that keeps an eye on your DeepSeek balance and session usage/cost. Drag her anywhere, click to open a live panel with real-time spend, peak/off-peak pricing, budget alerts, and history trends. |
| 7 | [greenthree/ProbHub-skill](https://github.com/greenthree/ProbHub-skill) | 8 | 2026-05-25 | 2026-08-30 | 算法竞赛出题自动化skill（个人出题习惯），支持完善题面、构造数据、组卷用typ编译pdf和生成domjudge题目包 |
| 8 | [fangqian616/consensus-pipeline](https://github.com/fangqian616/consensus-pipeline) | 7 | 2026-07-16 | 2026-08-30 | Multi-agent department framework for long-form complex tasks, fighting AI hallucination, validated on academic research. 共识管线：多智能体部门长线任务解决框架，对抗AI幻觉，以学术研究为验证场景。 |
| 9 | [liceses/dsh-workspace-tree](https://github.com/liceses/dsh-workspace-tree) | 6 | 2026-08-18 | 2026-08-30 | 把 DSH Web 左侧栏的「工作区」重做为文件系统树双模式。核心原则： 工作区 = 目录强绑定——会话的 cwd 就是它所在的目录，环境真正隔离。 |
| 10 | [LaoYueHanNi/dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree) | 5 | 2026-08-16 | 2026-08-30 | 在 Web 界面进行分支切换与 git worktree 隔离的 DSH 插件 |
| 11 | [tta-lab/organon](https://github.com/tta-lab/organon) | 5 | 2026-03-18 | 2026-08-30 | Structure-aware tools for AI agents. Tree-sitter code editing, web page navigation, search. No daemon, no JSON, just stdin. |
| 12 | [flymysql/dsh-memory](https://github.com/flymysql/dsh-memory) | 4 | 2026-08-14 | 2026-08-30 | DeepSeek Harness 跨会话记忆库：memory_remember/recall/forget 三个工具 + 系统提示注入，agent 持久化记忆 |
| 13 | [null119/dsh-mcp-manage](https://github.com/null119/dsh-mcp-manage) | 4 | 2026-08-17 | 2026-08-30 | DSH（DeepSeek Harness）Web GUI 插件：在设置页管理 MCP 服务器——列出已安装工具，添加/编辑/删除、启用/停用；组合配置提供的 MCP 同样可在运行时直接编辑、停用、移除并恢复，无需重启宿主。 |
| 14 | [RexCue/dsh-wallpaper](https://github.com/RexCue/dsh-wallpaper) | 4 | 2026-08-14 | 2026-08-30 | Wallpaper skin for the DeepSeek Harness (dsh) web UI: image background with opacity, mask and blur controls. |
| 15 | [wkscc310/dsh-client-ui-cpa-quota](https://github.com/wkscc310/dsh-client-ui-cpa-quota) | 3 | 2026-08-17 | 2026-08-30 | Easily view your CLiProxyAPI quota in DeepSeek Harness. |
| 16 | [bettermen/xiashuo](https://github.com/bettermen/xiashuo) | 2 | 2026-08-23 | 2026-08-30 | 虾说教材写作 · dsh-course-writer — AI course-authoring workspace plugin for DeepSeek Harness (DSH). 三栏式工作台 · 九阶段门禁 · 课程/章节/资料库/知识图谱 · 导出 TXT/Word · 分享协作。Three-pane workspace, nine-phase gated workflow, lorebook, export & share. |
| 17 | [EL4CTEO/roblox-devforum-mcp](https://github.com/EL4CTEO/roblox-devforum-mcp) | 2 | 2026-03-30 | 2026-08-30 | Give your AI coding agent the Roblox DevForum and official creator docs — check if a bug is already known, read the accepted answer, and verify APIs before writing Luau. |
| 18 | [kiligzzz/dsh-skill-mcp-manager](https://github.com/kiligzzz/dsh-skill-mcp-manager) | 2 | 2026-08-21 | 2026-08-30 | Capability Manager for DeepSeek Harness: manage MCP servers and Skills from a Settings-page UI (dual-face dsh plugin) |
| 19 | [omdsh-dev/dsh-file-trace](https://github.com/omdsh-dev/dsh-file-trace) | 2 | 2026-08-28 | 2026-08-30 | DSH Web UI 文件追踪插件：记录并查看模型读取/写入/编辑的文件，带行号内容与终端风逐行 diff(红删绿增蓝改)、hunk 上下文折叠、可拖拽高度。适配 DSH dsh-v0.1.2-alpha.1，纯客户端零核心改动。 |
| 20 | [PianoPrince/dsh-workspace-mover](https://github.com/PianoPrince/dsh-workspace-mover) | 2 | 2026-08-26 | 2026-08-30 | 拖拽跨工作区真迁移 DSH 会话：批量移动、挂错归位、分组合并；步步备份回滚，零 token 消耗 / Move DSH sessions across workspaces by drag & drop — true migration, batch move, misfiled homing, group merge; backups + rollback, zero tokens. |
| 21 | [PolinniZhong/dsh-session-workbench](https://github.com/PolinniZhong/dsh-session-workbench) | 2 | 2026-08-21 | 2026-08-30 | Session Workbench for DeepSeek Harness: session-library full-text search + recall + conversation-view management (show/hide + reorder). 会话工作台：会话库（历史会话全文搜索与召回）+ 会话视图（标签栏显示/隐藏 + 拖拽排序）。 |
| 22 | [Stylelinzzz/dsh-chat-history](https://github.com/Stylelinzzz/dsh-chat-history) | 2 | 2026-08-17 | 2026-08-30 | Chat history TOC for DeepSeek Harness: a History conversation view tab listing user messages with auto-paging and click-to-jump back into the chat. / DeepSeek Harness 会话目录插件：用户消息历史一键跳转。 |
| 23 | [Yvesgao/dsh-shortcut-creator](https://github.com/Yvesgao/dsh-shortcut-creator) | 2 | 2026-08-15 | 2026-08-30 | DSH 启动器- 在 DSH 设置页一键创建 Windows 桌面快捷方式，自动打开浏览器、可固定任务栏。DSH plugin: one-click Windows desktop shortcut launcher from the Settings page (DeepSeek Harness or any local server) —Install: dsh plugin --profile web add github:Yvesgao/dsh-desktop-shortcut#main |
| 24 | [166767/dsh-error-audit](https://github.com/166767/dsh-error-audit) | 1 | 2026-08-29 | 2026-08-30 | DeepSeek Harness 实时 AI 自审插件：任何报错/警告第一时间连同时间、错误码、会话、用户原话、AI 动作与工作区写入专用日志目录，并主动通知 AI、内置 read_error_logs 工具随时读取。Real-time AI self-audit for DeepSeek Harness — captures every error/warning with timestamp, error code, session, user prompt, AI action and workspace into a dedicated log folder; instantly notifies the agent and ships a read_error_logs tool. |
| 25 | [33moren33/dsh-slice-bench](https://github.com/33moren33/dsh-slice-bench) | 1 | 2026-08-30 | 2026-08-30 | 把插件放进一台真起来的最小 DSH 机器，让 harness 自己说它站不站得住 · Runtime bench for DSH plugin version conflicts — the harness gives the verdict, not us |
| 26 | [d3vmeh/dsh-fetch-timeouts](https://github.com/d3vmeh/dsh-fetch-timeouts) | 1 | 2026-08-30 | 2026-08-30 | DeepSeek Harness plugin: raise Node's HTTP timeouts process-wide so slow local models (Ollama, LM Studio) are not cut off at 5 minutes |
| 27 | [difimim/dsh-voice-input-npm](https://github.com/difimim/dsh-voice-input-npm) | 1 | 2026-08-30 | 2026-08-30 | 语音输入插件 for Deepseek Harness |
| 28 | [EastMG/dsh-gacha-calendar](https://github.com/EastMG/dsh-gacha-calendar) | 1 | 2026-08-27 | 2026-08-30 | DeepSeek Harness 二游卡池/活动排期速查插件：侧边栏按钮 内置 11 款主流二游 可添加自定义游戏 |
| 29 | [Edge-Echo/dsh-netassist](https://github.com/Edge-Echo/dsh-netassist) | 1 | 2026-08-30 | 2026-08-30 | Network & proxy assistant for DeepSeek Harness (dsh): one-shot GitHub connectivity check, system proxy status, proxy port probing, full diag chain and hosts conflict scan. |
| 30 | [Edge-Echo/dsh-win-toolkit](https://github.com/Edge-Echo/dsh-win-toolkit) | 1 | 2026-08-30 | 2026-08-30 | Windows-native capability pack for DeepSeek Harness (dsh): clipboard, notifications, hosts file, network diagnostics — safe PowerShell-backed tools. |
| 31 | [f1yan9/dsh-balance-pie](https://github.com/f1yan9/dsh-balance-pie) | 1 | 2026-08-30 | 2026-08-30 | DSH 插件：可拖拽余额饼图 / 真实消耗 / 历史热力图 — balance pie with real spending & monthly heatmap for DeepSeek Harness. |
| 32 | [GuionAI/web](https://github.com/GuionAI/web) | 1 | 2026-08-22 | 2026-08-30 | A web research toolkit with multi-provider search and clean Markdown extraction from static and JavaScript-rendered pages, plus public code and library docs search—available via CLI and MCP. |
| 33 | [Haniubub/seo-toolkit](https://github.com/Haniubub/seo-toolkit) | 1 | 2026-08-29 | 2026-08-30 | Native local & technical SEO audit toolkit for DeepSeek Harness (DSH) — self-contained port of claude-seo v2.2.5. Weighted scoring, gated multi-agent fan-out, 24 sub-skills + 18 agents, schema.org, E-E-A-T, GBP, GEO/AI Overviews, Google APIs & extensions. No Claude Code required. |
| 34 | [hejielijob-commits/SemaRail](https://github.com/hejielijob-commits/SemaRail) | 1 | 2026-08-17 | 2026-08-30 | Governed semantic layer for AI agents, with a DeepSeek Harness plugin that turns Harness into a data agent. |
| 35 | [hjj345/dsh-sm-version-display](https://github.com/hjj345/dsh-sm-version-display) | 1 | 2026-08-28 | 2026-08-30 | 用于在侧边栏“设置”按钮上方显示已安装 dsh 版本的 DeepSeek Harness Web 插件。  \|  DeepSeek Harness Web plugin that displays the installed dsh version above the sidebar Settings button. |
| 36 | [HuanLinOTO/dsh-plugin-better-glob](https://github.com/HuanLinOTO/dsh-plugin-better-glob) | 1 | 2026-08-30 | 2026-08-30 | 以 per-agent 阴影顶替内置 glob：自动排除无底洞目录（node_modules 等），传 include 白名单才能搜入 \| Shadows the built-in glob per agent: auto-excludes bottomless directories (node_modules etc.), pass an include whitelist to search inside them |
| 37 | [ianho7/dsh-port-inspector](https://github.com/ianho7/dsh-port-inspector) | 1 | 2026-08-20 | 2026-08-30 | DeepSeek Harness 的 Windows Web 插件，可将本地 TCP 监听回溯至进程、会话与工具调用，保障编程助手安全处理端口冲突/A Windows DSH Web plugin for DeepSeek Harness that traces local TCP listeners back to processes, Sessions, and Tool Calls for safe Coding Agent port-conflict handling. |
| 38 | [Idreamxkl/dsh-conversation-flat](https://github.com/Idreamxkl/dsh-conversation-flat) | 1 | 2026-08-30 | 2026-08-30 | Document-flow conversation layout for DeepSeek Harness web GUI — full-width column, user message bars, sender label, full-width tables. 纯 CSS 的 dsh 对话区通栏布局插件 |
| 39 | [iimaguest/dsh-contradictions-indicator](https://github.com/iimaguest/dsh-contradictions-indicator) | 1 | 2026-08-30 | 2026-08-30 | DSH plugin: 0-100 conversation coherence badge with parallel contradiction analysis |
| 40 | [KannaKuron/dsh-better-workspace](https://github.com/KannaKuron/dsh-better-workspace) | 1 | 2026-08-30 | 2026-08-30 | DSH web plugin: a hierarchical workspace tree for the sidebar — titles containing / group into virtual folders; the add-workspace flow gains a parent-group popup |
| 41 | [LamplitIsles/kepos-imagegen](https://github.com/LamplitIsles/kepos-imagegen) | 1 | 2026-08-27 | 2026-08-30 | Image generation tools via kepos exposed codex endpoint |
| 42 | [lhh010/dsh-file-trace](https://github.com/lhh010/dsh-file-trace) | 1 | 2026-08-28 | 2026-08-30 | DSH Web UI 文件追踪插件：记录并查看模型读取/写入/编辑的文件，带行号内容与终端风逐行 diff(红删绿增蓝改)、hunk 上下文折叠、可拖拽高度。适配 DSH dsh-v0.1.2-alpha.1，纯客户端零核心改动。 |
| 43 | [LONGSASASASASA/dsh-issue2pr](https://github.com/LONGSASASASASA/dsh-issue2pr) | 1 | 2026-08-29 | 2026-08-30 | 从一条 Issue 到一份被合并的 PR，每一段都有自己的输入契约、失败信号、可回滚产物与可独立审查的 Artifact。 |
| 44 | [m1khal3v/dsh-tool-codegraph](https://github.com/m1khal3v/dsh-tool-codegraph) | 1 | 2026-08-29 | 2026-08-30 | CodeGraph navigation tools for DeepSeek Harness |
| 45 | [maxwell-feng/dsh-tinyfish-search](https://github.com/maxwell-feng/dsh-tinyfish-search) | 1 | 2026-08-30 | 2026-08-30 | TinyFish-backed web search provider for DeepSeek Harness (ctx.web) — 将内置 web_search 接入 TinyFish Search API 的 DeepSeek Harness 插件 |
| 46 | [my-dsh/dsh-web-search-tavily](https://github.com/my-dsh/dsh-web-search-tavily) | 1 | 2026-08-30 | 2026-08-30 | Tavily web-search provider plugin for DeepSeek Harness (dsh) — registers into ctx.web so the model-facing web_search tool uses Tavily |
| 47 | [njjpro/dsh-vault](https://github.com/njjpro/dsh-vault) | 1 | 2026-08-30 | 2026-08-30 | Persistent credential vault plugin for DeepSeek Harness (DSH) - manage API tokens, server logins, and site credentials in one settings panel. |
| 48 | [phantomSuying/dsh-module-driven-develop](https://github.com/phantomSuying/dsh-module-driven-develop) | 1 | 2026-08-30 | 2026-08-30 | DSH plugin for module-driven development: decompose requirements into a module tree, generate each module with an independent agent, and fully regenerate from design on any change. |
| 49 | [promisez322-prog/dsh-vox-input](https://github.com/promisez322-prog/dsh-vox-input) | 1 | 2026-08-30 | 2026-08-30 | Voice (speech-to-text) input for the DSH Web composer via Web Speech API — tap, speak, transcript fills the input box. Zero server, zero API keys. |
| 50 | [Qian-Ning/prompt-skill-armory](https://github.com/Qian-Ning/prompt-skill-armory) | 1 | 2026-08-27 | 2026-08-30 | Managing prompts，, skills, MCP tools & wallpaper for DeepSeek Harness |
| 51 | [shaomingbo/dsh-subscription-search](https://github.com/shaomingbo/dsh-subscription-search) | 1 | 2026-08-19 | 2026-08-30 | ChatGPT/Grok subscription OAuth, model routes, and ChatGPT to Grok to Exa to DeepSeek web-search fallback for DeepSeek Harness |
| 52 | [supersyh-sss/dsh-voice-assistant](https://github.com/supersyh-sss/dsh-voice-assistant) | 1 | 2026-08-29 | 2026-08-30 | Offline voice assistant for dsh web — wake word, speech dictation, voice edit commands & Chinese TTS. On-device sherpa-onnx WASM ASR, no Google dependency, works in China. |
| 53 | [warment/deepseek-harness-locale-ru](https://github.com/warment/deepseek-harness-locale-ru) | 1 | 2026-08-30 | 2026-08-30 | Русский язык для DeepSeek Harness web UI — one-command install, 1061 строка, 100% покрытие |
| 54 | [xiaoguomeiyitian/dsh-qr-share](https://github.com/xiaoguomeiyitian/dsh-qr-share) | 1 | 2026-08-29 | 2026-08-30 | DSH web plugin: a sidebar-footer QR-code button that lets a phone scan and re-issue the current browser's authenticated launch URL. |
| 55 | [xiaozuishuai-eng/prompt_optimize_dsh](https://github.com/xiaozuishuai-eng/prompt_optimize_dsh) | 1 | 2026-08-30 | 2026-08-30 | DeepSeek Harness (DSH) 提示词优化器插件：一句口语化需求 → 结构化高质量提示词，结果自动填入会话输入框。复用 DSH 内置模型路由，零 API Key 管理。 |
| 56 | [xjailll/dsh-portfolio-publisher](https://github.com/xjailll/dsh-portfolio-publisher) | 1 | 2026-08-29 | 2026-08-30 | DeepSeek Harness 插件：GitHub 求职仓库一键发布助手（LLM README + Web 面板 + 一键推送） |
| 57 | [Ycet/dsh-awesome-hud](https://github.com/Ycet/dsh-awesome-hud) | 1 | 2026-08-29 | 2026-08-30 | dsh侧边HUD面板，包含多个信息展示模块（可自定义是否展示），集成压缩上下文、查看git graph等功能。DSH side HUD panel, containing multiple information display modules (customizable whether to display), integrating features such as compressed context, viewing git graph, etc. |
| 58 | [yj-liuzepeng/dsh-project-brain](https://github.com/yj-liuzepeng/dsh-project-brain) | 1 | 2026-08-30 | 2026-08-30 | Persistent project intelligence and memory plugin for DSH: architecture analysis, cross-session context, TODOs, and optional hybrid retrieval |
| 59 | [yx222yx/DSH-Feedback-Bridge](https://github.com/yx222yx/DSH-Feedback-Bridge) | 1 | 2026-08-29 | 2026-08-30 | 一个 DeepSeek Harness 插件，帮助用户将功能想法和错误反馈整理为清晰、注重隐私的 GitHub Discussions。A DeepSeek Harness plugin that helps users turn ideas and bug reports into clear, privacy-aware GitHub Discussions. |
| 60 | [Zhanxueyou/deepseek-balance](https://github.com/Zhanxueyou/deepseek-balance) | 1 | 2026-08-30 | 2026-08-30 | 零依赖 Python CLI 查询 DeepSeek API 余额，低余额自动提醒并发送 macOS 通知；附带 DSH 侧边栏插件，实时展示余额、今日/本月用量与缓存命中率。 |
| 61 | [Zhanxueyou/dsh-plugin-manager](https://github.com/Zhanxueyou/dsh-plugin-manager) | 1 | 2026-08-30 | 2026-08-30 | DSH Web 客户端插件管理器侧边栏面板：全量插件清单（描述/状态/来源/版本/分类）、启停热重载、删除本地自定义插件，并可浏览、搜索、一键安装 GitHub topic:dsh-plugin 远程插件。 |
| 62 | [zhongjie10086/dsh-adaptive-native](https://github.com/zhongjie10086/dsh-adaptive-native) | 1 | 2026-08-16 | 2026-08-30 | Windows-native Adaptive preset for DeepSeek Harness |
| 63 | [zzy-12345678/dsh-file-convert](https://github.com/zzy-12345678/dsh-file-convert) | 1 | 2026-08-29 | 2026-08-30 | Local-first file conversion for DeepSeek Harness — images, PDF, data, audio/video & office docs. 7 tools, 26 conversions, no API keys, no uploads. |
| 64 | [618527/dsh-install-guard](https://github.com/618527/dsh-install-guard) | 0 | 2026-08-30 | 2026-08-30 | DSH 插件安装前兼容性预检守卫：检查 Node/engines、@deepseek-ai peer 版本与 dsh 清单，可选隔离试启动。 |
| 65 | [6jeffr3y/dsh-burpsuite-mcp](https://github.com/6jeffr3y/dsh-burpsuite-mcp) | 0 | 2026-08-30 | 2026-08-30 | Native Burp Suite MCP tools and live settings for DeepSeek Harness |
| 66 | [6jeffr3y/dsh-session-manager](https://github.com/6jeffr3y/dsh-session-manager) | 0 | 2026-08-30 | 2026-08-30 | Session archive, tagging, relationship graph and safe deletion for DeepSeek Harness Web |
| 67 | [AlgoVaultLabs/dsh-algovault](https://github.com/AlgoVaultLabs/dsh-algovault) | 0 | 2026-08-30 | 2026-08-30 | Preconfigured DeepSeek Harness bundle for the AlgoVault MCP server — composite trade calls, market regime and cross-venue funding arbitrage as mcp__algovault__* tools. |
| 68 | [alpacachen/dsh-automation](https://github.com/alpacachen/dsh-automation) | 0 | 2026-08-30 | 2026-08-30 | Schedule and manage one-time and recurring Agent tasks in DeepSeek Harness |
| 69 | [AnakinWu/DSH-plugin](https://github.com/AnakinWu/DSH-plugin) | 0 | 2026-08-30 | 2026-08-30 | Anakin‘s dsh-plugins |
| 70 | [AndyWipe13/dsh-session-management](https://github.com/AndyWipe13/dsh-session-management) | 0 | 2026-08-30 | 2026-08-30 | A plugin for managing sessions generated by DeepSeek Harness, allowing users to freely delete legacy sessions and supporting session import from other third-party Agents (Claude Code, Codex). |
| 71 | [benz-ai-x/dsh-session-graph](https://github.com/benz-ai-x/dsh-session-graph) | 0 | 2026-08-28 | 2026-08-30 | Visual session graph for DeepSeek Harness — browse, arrange, branch, merge, and summarize AI agent sessions on an interactive canvas. |
| 72 | [bjzkhy/dsh-token-ledger-pro](https://github.com/bjzkhy/dsh-token-ledger-pro) | 0 | 2026-08-30 | 2026-08-30 | DSH cost panel: meters every request from session events, prices it against a built-in catalog of 136 models across 16 providers, and shows model, balance, session/today/month spend and a monthly budget bar next to the composer. |
| 73 | [bosinHU/dsh-skill-editor](https://github.com/bosinHU/dsh-skill-editor) | 0 | 2026-08-29 | 2026-08-30 | Edit skills directly in DSH web settings |
| 74 | [Britneycode/dsh-distillery](https://github.com/Britneycode/dsh-distillery) | 0 | 2026-08-30 | 2026-08-30 | dsh 插件：本地蒸馏器——扫历史会话挖「用户纠错 → 改对」片段，脱敏后蒸馏成微调 JSONL / SKILL.md 技能草稿 / AGENTS.md 规则补丁，带人工审核队列 |
| 75 | [Britneycode/dsh-live-room](https://github.com/Britneycode/dsh-live-room) | 0 | 2026-08-30 | 2026-08-30 | dsh 插件：把会话变成免登录、只读、可分享的实时直播间（SSE 观看页 + 弹幕 + agent 工具） |
| 76 | [c0nfident/github-slideshow](https://github.com/c0nfident/github-slideshow) | 0 | 2020-07-07 | 2026-08-30 | A robot powered training repository :robot: |
| 77 | [changyinliangbaikai/dsh-b2us-schedule](https://github.com/changyinliangbaikai/dsh-b2us-schedule) | 0 | 2026-08-29 | 2026-08-30 | dsh定时任务插件，支持延迟、固定间隔、cron表达式，支持执行shell命令，支持发起Agent会话 |
| 78 | [chen70456-lang/dsh-tmwebdriver](https://github.com/chen70456-lang/dsh-tmwebdriver) | 0 | 2026-08-30 | 2026-08-30 | One tool, infinite reach: arbitrary JS in your real logged-in browser. Unlike fixed-action plugins, browser_execute_js does anything DevTools can — read, click, type, fill, navigate, screenshot, CDP. Plus list_tabs/snapshot/type. Zero-setup, self-healing. |
| 79 | [chenyangcun/dsh-command-palette](https://github.com/chenyangcun/dsh-command-palette) | 0 | 2026-08-30 | 2026-08-30 | A keyboard-first command palette for standard DeepSeek Harness |
| 80 | [chenyangcun/dsh-fixed-new-session-model](https://github.com/chenyangcun/dsh-fixed-new-session-model) | 0 | 2026-08-30 | 2026-08-30 | 为 DSH 固定新会话的默认 Agent 预设与模型，支持全局默认设置和工作区独立配置。 |
| 81 | [chocobo77/dsh-infinite-context](https://github.com/chocobo77/dsh-infinite-context) | 0 | 2026-08-29 | 2026-08-30 | DeepSeek Harness plugin: multi-tier memory management, semantic retrieval, structured memory, and model-context awareness for infinite context. |
| 82 | [CoolTea001/dsh-cool-theme](https://github.com/CoolTea001/dsh-cool-theme) | 0 | 2026-08-30 | 2026-08-30 | A plugin for changing themes for DSH, with a number of popular default themes built in. |
| 83 | [CyberFox-lab/dsh-rss](https://github.com/CyberFox-lab/dsh-rss) | 0 | 2026-08-30 | 2026-08-30 | RSS/Atom reader and Agent tools plugin for DeepSeek Harness |
| 84 | [d3vmeh/dsh-context-budget](https://github.com/d3vmeh/dsh-context-budget) | 0 | 2026-08-29 | 2026-08-30 | DeepSeek Harness plugin: keep a local model's context at a size your GPU handles well (measured prefill speed, hard ceiling, early compaction) |
| 85 | [dengyier/openworkproof-dsh-plugin](https://github.com/dengyier/openworkproof-dsh-plugin) | 0 | 2026-08-30 | 2026-08-30 | Community DeepSeek Harness plugin for verifiable AI agent authorization, execution evidence, and offline delivery verification |
| 86 | [DepressionL/fortune-assistant](https://github.com/DepressionL/fortune-assistant) | 0 | 2026-08-28 | 2026-08-30 | dsh算命插件 |
| 87 | [difimim/dsh-voice-input](https://github.com/difimim/dsh-voice-input) | 0 | 2026-08-29 | 2026-08-30 | 语音输入插件 for Deepseek Harness |
| 88 | [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) | 0 | 2026-08-28 | 2026-08-30 | Connect locally signed-in WorkBuddy models to DeepSeek Harness with a read-only credits overview and model management. |
| 89 | [dingyi580/dsh-plugin-gemini-theme](https://github.com/dingyi580/dsh-plugin-gemini-theme) | 0 | 2026-08-29 | 2026-08-30 | A Gemini-styled skin for the DeepSeek Harness web client |
| 90 | [dusbin/dsh-attention](https://github.com/dusbin/dsh-attention) | 0 | 2026-08-30 | 2026-08-30 | 任务完成后进行提醒，发完任务就可以去喝杯咖啡了，完成了会叫你的 |
| 91 | [Exception-H/dsh-gpt56-ptc](https://github.com/Exception-H/dsh-gpt56-ptc) | 0 | 2026-08-30 | 2026-08-30 | Native DSH Bundle: user-owned pure PTC / Code Mode preset for GPT-5.6 with plain-language answers and bounded execution. |
| 92 | [firestige/wsr-execution](https://github.com/firestige/wsr-execution) | 0 | 2026-08-17 | 2026-08-30 | Host-neutral execution boundary for workflow-self-recursive: resolves one exact Workflow Package, binds an immutable Delivery Manifest, coordinates the Delivery, emits bounded OTLP observations. Install via dsh plugin add wsr-dsh-intake · 与宿主无关的 Agent 工作流执行边界：解析并校验确定的工作流包，绑定不可变交付清单，协调交付并发出有界观测。 |
| 93 | [Frank-NF/dsh-drop-md](https://github.com/Frank-NF/dsh-drop-md) | 0 | 2026-08-30 | 2026-08-30 | Drag-and-drop markdown enhancer for DeepSeek Harness (DSH): inline small files, @-reference large ones, one-click SKILL.md install |
| 94 | [freedomkk-qfeng/dsh-oidc](https://github.com/freedomkk-qfeng/dsh-oidc) | 0 | 2026-08-30 | 2026-08-30 | Enterprise OIDC, secure API-key binding, declarative branding, and OpenAI-compatible model integration for DeepSeek Harness. |
| 95 | [GavinQiEr/dsh-cmdwatch](https://github.com/GavinQiEr/dsh-cmdwatch) | 0 | 2026-08-30 | 2026-08-30 | Real-time command monitor for DeepSeek Harness (DSH). Watch foreground/background command output in the Web UI without pausing the conversation. 命令窗：实时显示 DSH 命令与执行输出。 |
| 96 | [goldgish/dsh-gamepad-approval](https://github.com/goldgish/dsh-gamepad-approval) | 0 | 2026-08-30 | 2026-08-30 | Xbox 手柄硬件审批插件 for DeepSeek Harness (dsh) — Agent 高危工具调用需物理按键确认，A 批准 / B 驳回 |
| 97 | [Gorilla-Kevv/scnu-thesis-formatter](https://github.com/Gorilla-Kevv/scnu-thesis-formatter) | 0 | 2026-08-30 | 2026-08-30 | 华南师范大学本科毕业论文格式改写 + matplotlib 数据可视化（DeepSeek Harness 技能） |
| 98 | [guazixiong/dsh-coding-mode-preset](https://github.com/guazixiong/dsh-coding-mode-preset) | 0 | 2026-08-30 | 2026-08-30 | 为本地 DeepSeek Harness（`@deepseek-ai/dsh`）追加一个**编码模式** Agent Preset：门禁式工程交付流水线，包含三条独立流程——**需求开发**、**Bug 修复**、**功能迭代**。每个阶段的产物由全新上下文的"空白子代理"独立专家评审，通过后须经用户确认才进入下一阶段；最终以用户验收作为任务完结条件。 |
| 99 | [haoranwang0921/dsh-bid-desk](https://github.com/haoranwang0921/dsh-bid-desk) | 0 | 2026-08-28 | 2026-08-30 | DSH 投标合规工作台是一个 DSH 插件 MVP，服务于投标文件编制过程。它将招标来源证据、要求记录、人工复核决定和生成报告关联起来，帮助具备相应资质或经验的人员在提交前核查缺口。 |
| 100 | [haozheou/dsh-exam-expert](https://github.com/haozheou/dsh-exam-expert) | 0 | 2026-08-30 | 2026-08-30 | 出题专家 · Exam Expert plugin for DeepSeek Harness: 把出题流程固化成值守流水线（角色+目录→通读→勾选表单→六分身流水线→看板交付） \| Turn the exam-paper workflow into an agent-supervised pipeline: wizard dialog, prefilled checklist form, six-role dual-kanban production |
| 101 | [hehetoshang/dsh-talebook-plugin](https://github.com/hehetoshang/dsh-talebook-plugin) | 0 | 2026-08-27 | 2026-08-30 | DeepSeek Harness plugin for safely operating Talebook |
| 102 | [hhb1028/dsh-client-ui-timeline](https://github.com/hhb1028/dsh-client-ui-timeline) | 0 | 2026-08-30 | 2026-08-30 | DSH Web GUI 会话问题导航条：聊天区左缘一问一杠，随滚动高亮当前问题、悬停显示问答预览气泡、点击把该问平滑滚到视口顶（未渲染的更早历史自动翻页加载），无需改动 dsh 本体源码 |
| 103 | [HiSeax/dsh-agent-outputs-reader](https://github.com/HiSeax/dsh-agent-outputs-reader) | 0 | 2026-08-29 | 2026-08-30 | Overlay reader for agent output files: Markdown/GFM rendering, in-panel PDF, DOCX/XLSX/PPTX text preview, reply-end file chips. Pure JS, zero deps. |
| 104 | [hunbs-1/dsh-codepect](https://github.com/hunbs-1/dsh-codepect) | 0 | 2026-08-29 | 2026-08-30 | dsh-codepect is a DSH plugin generating OpenAPI 3.0 from TS/JS. Features: visual docs, versioning, change detection, mock & auto-rescan. Zero-dep, offline, ensures code-doc sync for backend API delivery. dsh-codepect是DSH插件，扫描TS/JS生成OpenAPI3.0文档。支持可视化、多版本、变更检测、Mock及自动重扫。零依赖离线可用，确保代码文档一致，助后端交付API契约。 |
| 105 | [IKEASven69/dsh-opencli](https://github.com/IKEASven69/dsh-opencli) | 0 | 2026-08-30 | 2026-08-30 | 让 DeepSeek Harness (dsh) 会办事:登录态真实浏览器 + 170+ 站点适配器 + write 审批门 |
| 106 | [jaaty/dsh-gsd-bundle](https://github.com/jaaty/dsh-gsd-bundle) | 0 | 2026-08-23 | 2026-08-30 | A DeepSeek Harness bundle reimplementing opengsd-core (Git Ship Done) as host-plane Cordis plugins, replacing the default agent-loop behaviour with the GSD phase loop. |
| 107 | [jimmyzhang219/dsh-plan-and-execute](https://github.com/jimmyzhang219/dsh-plan-and-execute) | 0 | 2026-08-30 | 2026-08-30 | dsh插件plan-and-execute |
| 108 | [jingzhonghui/dsh-mcp-manager](https://github.com/jingzhonghui/dsh-mcp-manager) | 0 | 2026-08-30 | 2026-08-30 | DSH dynamic Cordis plugin: visually manage MCP servers (stdio) from the settings sidebar, and expose their tools to the agent as mcp__<server>__<tool>. |
| 109 | [jo32/dsh-strudel-studio](https://github.com/jo32/dsh-strudel-studio) | 0 | 2026-08-29 | 2026-08-30 | A professional song-level Strudel visual sequencer with structured AI arrangement for DeepDeck. |
| 110 | [joshryandavis/dsh-catalog-refresh](https://github.com/joshryandavis/dsh-catalog-refresh) | 0 | 2026-08-30 | 2026-08-30 | DSH plugin to automatically rebuild model catalogues for OpenRouter, OpenCode, Fireworks, etc |
| 111 | [joshryandavis/dsh-goal-restart](https://github.com/joshryandavis/dsh-goal-restart) | 0 | 2026-08-30 | 2026-08-30 | DSH plugin to automatically restart goals on harness restart |
| 112 | [junwei529/work-charter-dsh](https://github.com/junwei529/work-charter-dsh) | 0 | 2026-08-28 | 2026-08-30 | DSH-native Work Charter policy plugin backed by session-coordinator-dsh |
| 113 | [jwilson411/dsh-arxiv](https://github.com/jwilson411/dsh-arxiv) | 0 | 2026-08-29 | 2026-08-30 | DeepSeek Harness plugin: tiny read-only arXiv search + abstract fetch (Atom API, no PDF ingest) |
| 114 | [jwilson411/dsh-kokoro](https://github.com/jwilson411/dsh-kokoro) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness plugin: HTTP TTS client for jwilson411/kokoro-tts-api. No weights. |
| 115 | [jwilson411/dsh-modelprint](https://github.com/jwilson411/dsh-modelprint) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness plugin: fingerprint provider, model id, sampling, tool schemas, and system-prompt prefix; pin the card and fail structured on drift. |
| 116 | [jwilson411/dsh-otel](https://github.com/jwilson411/dsh-otel) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness plugin: emit OpenTelemetry spans from a session log (turn / step / tool execute). Export only. |
| 117 | [Kehao/dsh-client-ui-weather](https://github.com/Kehao/dsh-client-ui-weather) | 0 | 2026-08-30 | 2026-08-30 | Deepseek harness 天气插件 |
| 118 | [LamplitIsles/dsh-companion](https://github.com/LamplitIsles/dsh-companion) | 0 | 2026-08-30 | 2026-08-30 | dsh as companion ai frontend in Svelte |
| 119 | [LamplitIsles/kepos-tts](https://github.com/LamplitIsles/kepos-tts) | 0 | 2026-08-29 | 2026-08-30 | Qwen/Volcengine TTS for dsh |
| 120 | [Lanzgale/dsh-listener](https://github.com/Lanzgale/dsh-listener) | 0 | 2026-08-30 | 2026-08-30 | 安全版本地语音输入插件 for DeepSeek Harness:同源宿主代理 + 127.0.0.1 + token,SenseVoice-Small INT8 ONNX 本地转写,音频不出网。 |
| 121 | [liangminhua/agent-notes-toolkit](https://github.com/liangminhua/agent-notes-toolkit) | 0 | 2026-08-30 | 2026-08-30 | Agent Notes mechanism as a portable toolkit: verification gates, scaffolding CLI, and the AN dsh preset/bundle |
| 122 | [Lion-Li-git/dsh-external-links](https://github.com/Lion-Li-git/dsh-external-links) | 0 | 2026-08-30 | 2026-08-30 | DSH desktop (Deepseek Harness EAC) plugin: open http/https/mailto/tel/file links in the default browser/app, bypassing the broken shell.open-external bridge |
| 123 | [ljc6413/pkg-dev](https://github.com/ljc6413/pkg-dev) | 0 | 2026-08-29 | 2026-08-30 | YiHe 编程认知内核 for DeepSeek Harness：27 领域包 + 55 RFB 经验库 + 工程工具链 + 商业/安全/进化体系（会进化的编程助手） |
| 124 | [LJH-snow/dsh-tool-slack](https://github.com/LJH-snow/dsh-tool-slack) | 0 | 2026-08-30 | 2026-08-30 | Slack tools for DeepSeek Harness |
| 125 | [Lubaoshuai/dsh-notify](https://github.com/Lubaoshuai/dsh-notify) | 0 | 2026-08-30 | 2026-08-30 | Push notifications for DeepSeek Harness: agent-callable notify_send tool + external delivery for schedule reminders (Telegram/Slack/Discord/飞书/钉钉/Bark/ntfy/webhook). DSH plugin. |
| 126 | [luoghong/dsh-session-recorder](https://github.com/luoghong/dsh-session-recorder) | 0 | 2026-08-29 | 2026-08-30 | 记录和deek Harness对话记录为md格式 |
| 127 | [luomeii/dsh-review-squad](https://github.com/luomeii/dsh-review-squad) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness 并行多角色代码评审插件：/review 派出安全/正确性/测试/风格四名只读评审员子代理（可各自指定模型与思考强度），汇总为结构化报告。 |
| 128 | [makajo/dsh-gemini-m3e-theme](https://github.com/makajo/dsh-gemini-m3e-theme) | 0 | 2026-08-29 | 2026-08-30 | Gemini-style Material 3 Expressive theme for DeepSeek Harness Web (persistent client bundle) |
| 129 | [Mason-1011/dsh-schematic](https://github.com/Mason-1011/dsh-schematic) | 0 | 2026-08-25 | 2026-08-30 | Live plugin-topology viewer for DeepSeek Harness — the wiring diagram of mounted plugins, their runtime activity, and a composer-side star map. Pure observer. |
| 130 | [meyaomiao/dsh-files-native](https://github.com/meyaomiao/dsh-files-native) | 0 | 2026-08-30 | 2026-08-30 | DSH 插件：接近原生质感的附件上传（拖入/粘贴/回形针，图片与文件混排） |
| 131 | [moonwellxh/DSH-Launcher](https://github.com/moonwellxh/DSH-Launcher) | 0 | 2026-08-27 | 2026-08-30 | DSH 魔偶助手（DSH一键启动托盘）(DeepSeek Harness launcher / tray) |
| 132 | [nicecx/dsh-reset-handoff](https://github.com/nicecx/dsh-reset-handoff) | 0 | 2026-08-30 | 2026-08-30 | DSH never restarts itself: host plugin that hands reset requests to an external ops agent (e.g. Hermes) via a versioned JSON protocol — preflight → gate → restart → health-check → recover → deliver back |
| 133 | [NOirBRight/dsh-plugins](https://github.com/NOirBRight/dsh-plugins) | 0 | 2026-08-29 | 2026-08-30 | Independent catalog of DSH plugins and mobile companion published by NOirBRight |
| 134 | [Nth-5620/dsh-crystal-viewer](https://github.com/Nth-5620/dsh-crystal-viewer) | 0 | 2026-08-29 | 2026-08-30 | A crystal-structure visualization window for DeepSeek Harness: 3D structure + Q-peak viewer and parameter panel, opened as a dsh-better-sidebar tab. |
| 135 | [oh-summy/dsh-remote-control](https://github.com/oh-summy/dsh-remote-control) | 0 | 2026-08-30 | 2026-08-30 | Secure remote access for DeepSeek Harness (DSH): Cloudflare Tunnel + password gate + Feishu notifications. macOS first, Linux first-class. |
| 136 | [Olympianz/dsh-deploy-master](https://github.com/Olympianz/dsh-deploy-master) | 0 | 2026-08-30 | 2026-08-30 | A DSH deploy-assistant plugin: GitHub publish + Linear sync + npm publish + community announcement. |
| 137 | [Olympianz/dsh-heatmap](https://github.com/Olympianz/dsh-heatmap) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness 页面埋点与热力图分析插件：科学埋点采集、本地热力图与统计、CLI/HTTP 接口、上传授权。 |
| 138 | [onclaw-dev/dsh-ima-copilot](https://github.com/onclaw-dev/dsh-ima-copilot) | 0 | 2026-08-30 | 2026-08-30 | 腾讯 IMA 是一个非常好的知识库应用，但是他们提供的skill版本针对公开知识库的检索方式只提供了基于文件标题的关键字检索，好一阵无语。为了补足在harness的这种知识库检索能力，基于tencent-ima-copilot-mcp迭代了对应的dsh版本。 |
| 139 | [Oscar-Williams/dsh-deepcanary](https://github.com/Oscar-Williams/dsh-deepcanary) | 0 | 2026-08-29 | 2026-08-30 | Local attention supervision for DeepSeek Harness: evidence-first signals, quiet notifications, and an actionable inbox. |
| 140 | [peikuo/dayreel](https://github.com/peikuo/dayreel) | 0 | 2026-08-30 | 2026-08-30 | Dayreel — a DeepSeek Harness (dsh) community plugin: turn your day of work sessions into a designed daily report + a narrated summary video. |
| 141 | [peiyucn/dsh-sparrow](https://github.com/peiyucn/dsh-sparrow) | 0 | 2026-08-30 | 2026-08-30 | DeepSeek Harness Web 插件小合集（dsh-chat-fim / dsh-vision-access / dsh-archive-session） |
| 142 | [PerryLink/dsh-plugin-certification](https://github.com/PerryLink/dsh-plugin-certification) | 0 | 2026-08-29 | 2026-08-30 | Community certification spec and registry for DeepSeek Harness plugins: five machine-checkable dimensions, A-D grades, and a security veto. |
| 143 | [PerryLink/perrylink](https://github.com/PerryLink/perrylink) | 0 | 2026-08-16 | 2026-08-30 | DeepSeek Harness ecosystem: 33 plugins - second-model approval, permission rules, memory, MCP panel, supply-chain security & certification |
| 144 | [pixellover1433/dsh-plugin-dev-skills](https://github.com/pixellover1433/dsh-plugin-dev-skills) | 0 | 2026-08-30 | 2026-08-30 | This set of skills allows your agent to create plugins for Deepseek Harness. |
| 145 | [QWE13-ART/dsh-skill-folder](https://github.com/QWE13-ART/dsh-skill-folder) | 0 | 2026-08-30 | 2026-08-30 | Fold the DSH skill catalog prompt surface: static KV-cache-stable catalog + BM25/bge-m3 hybrid skill_search + autoRoute hints. v0.3.0. npm: dsh-skill-folder |
| 146 | [QWE13-ART/dsh-tool-folder](https://github.com/QWE13-ART/dsh-tool-folder) | 0 | 2026-08-30 | 2026-08-30 | Fold the DSH tool surface per request + ChainGuard firewall (high-risk block + exfil-chain detection + anti-obfuscation) + BM25/bge-m3 hybrid tools_search. Shrinks schema tokens 80-90% while keeping selection accuracy. v0.2.0 adds a semantic retrieval leg (local Ollama bge-m3, RRF hybrid) and ChainGuard obfuscation detection. npm: dsh-tool-folder |
| 147 | [renat3u/dsh-upgrade-skill](https://github.com/renat3u/dsh-upgrade-skill) | 0 | 2026-08-30 | 2026-08-30 | dsh 插件升级适配skill |
| 148 | [shaneconner/canon](https://github.com/shaneconner/canon) | 0 | 2026-08-10 | 2026-08-30 | Canonical project memory for the Pi coding agent: one governing article per asset, an append-only journal, capsule surfacing. A project wiki with a spine. |
| 149 | [ShanHaiFish/dsh-theme-brick](https://github.com/ShanHaiFish/dsh-theme-brick) | 0 | 2026-08-30 | 2026-08-30 | DSH 主题插件（Brick/砌砖）：纯 token 覆盖层，暖石膏与火烧黏土、灰缝线条、一砖一色，零全局 CSS；Settings → General 开关可随时关闭还原。A restrained token-only theme for DeepSeek Harness web — plaster & fired-clay, one accent, no global CSS, with an on/off switch. |
| 150 | [shaomingbo/dsh-token-usage](https://github.com/shaomingbo/dsh-token-usage) | 0 | 2026-08-30 | 2026-08-30 | Accounts, subscription allowance observations, and local usage ledger for DeepSeek Harness |
| 151 | [shengyvself/narrative-prompt-polish](https://github.com/shengyvself/narrative-prompt-polish) | 0 | 2026-08-28 | 2026-08-30 | DSH 插件：主输入框 ✨ 一键把草稿润色成清晰、可执行的提示词，经 better-sidebar 侧栏对话多轮打磨后回填。A DSH plugin: ✨ one-click draft polish into agent-ready prompts, multi-turn side-chat via better-sidebar (>=0.16.1). |
| 152 | [shuaweng/DSH_xieshujing](https://github.com/shuaweng/DSH_xieshujing) | 0 | 2026-08-30 | 2026-08-30 | 写书鲸：面向 DeepSeek Harness 的原生 AI 小说创作工作台插件 |
| 153 | [SiriusWJ/dsh-mihome](https://github.com/SiriusWJ/dsh-mihome) | 0 | 2026-08-30 | 2026-08-30 | Mi Home (米家) control for DeepSeek Harness agents — list homes/devices, read props, control devices behind a human approval gate. |
| 154 | [Snow-ea/dsh-token-optimizer](https://github.com/Snow-ea/dsh-token-optimizer) | 0 | 2026-08-30 | 2026-08-30 | Deterministic, recoverable tool-result compression and cache-aware compaction for DeepSeek Harness. |
| 155 | [soberbiak/amazon-sucareer](https://github.com/soberbiak/amazon-sucareer) | 0 | 2026-08-28 | 2026-08-30 | 基于真实证据，把亚马逊运营经历酥成招聘方看得懂、面试讲得透的职业定位、简历与求职表达。拒绝硬编 KPI，争取人生大结果。 |
| 156 | [steven-ngle/dsh-elden](https://github.com/steven-ngle/dsh-elden) | 0 | 2026-08-30 | 2026-08-30 | Elden Ring style event overlays for the DeepSeek Harness web UI |
| 157 | [sunyuhuirong/fsviewer](https://github.com/sunyuhuirong/fsviewer) | 0 | 2026-08-29 | 2026-08-30 | Codex-style right-edge workspace for DeepSeek dsh web: file tree + preview, embedded browser, and side chat |
| 158 | [tianhanly/dsh-official-port-nav](https://github.com/tianhanly/dsh-official-port-nav) | 0 | 2026-08-29 | 2026-08-30 | Perfectly replicate DeepSeek's official right-side chat navigation in Harness |
| 159 | [tianyuegithub/dsh-pactflow](https://github.com/tianyuegithub/dsh-pactflow) | 0 | 2026-08-30 | 2026-08-30 | DSH PactFlow（零脉模式）外部 Profile Bundle |
| 160 | [trueRISCOacnt/maa-dsh-skill](https://github.com/trueRISCOacnt/maa-dsh-skill) | 0 | 2026-08-28 | 2026-08-30 | 基于 MaaAssistantArknights (MAA) 官方命令行工具 maa-cli 构建的 DeepSeek Harness Skill：让 DeepSeek Harness 直接驱动 MaaCore，自动化完成《明日方舟》日常任务。 |
| 161 | [wenyixiaoqingnian/ds-mobile-skin](https://github.com/wenyixiaoqingnian/ds-mobile-skin) | 0 | 2026-08-30 | 2026-08-30 | Mobile DeepSeek-app look for DSH Web GUI + dsh-token-viewer billing patch |
| 162 | [wf-ping/dsh-message-injector](https://github.com/wf-ping/dsh-message-injector) | 0 | 2026-08-30 | 2026-08-30 | dsh（DeepSeek Harness）插件：预设消息注入内容组合，每条消息自动注入 —— auto-inject preset content into every message |
| 163 | [winghv/dsh-acp-activity](https://github.com/winghv/dsh-acp-activity) | 0 | 2026-08-30 | 2026-08-30 | Community ACP automation server for DeepSeek Harness with committed tool-activity frames (tool_call/tool_call_update) — dsh-plugin |
| 164 | [wjf1/dsh-commandcode](https://github.com/wjf1/dsh-commandcode) | 0 | 2026-08-30 | 2026-08-30 | DSH-Desktop LLM provider plugin for Command Code with model catalog sync, request retry, multi-credential support, and a settings UI. |
| 165 | [Xylocarpro/dsh-plugin-recycle-bin](https://github.com/Xylocarpro/dsh-plugin-recycle-bin) | 0 | 2026-08-29 | 2026-08-30 | 强制 DSH 删除走回收站、禁用 del/rm/Remove-Item，回收站或硬盘满时停手询问用户。 |
| 166 | [yaodongH/dsh-vscode-bridge](https://github.com/yaodongH/dsh-vscode-bridge) | 0 | 2026-08-30 | 2026-08-30 | DSH web 插件：在 DeepSeek Harness 中心区嵌入固定版本 code-server（VS Code Web），跟随当前工作空间，支持自定义端口/路径与热切换。 |
| 167 | [YUEYUEXYS/dsh-think-ultra](https://github.com/YUEYUEXYS/dsh-think-ultra) | 0 | 2026-08-30 | 2026-08-30 | Reasoning layer for the official DeepSeek Harness: every request stays on native max effort, with isolated Flash/Vision/Pro depth controls, stability axes and reasoning toolboxes built above it. Delivered build only; commercial use open, reverse/modify/extract closed. |
| 168 | [Zessi-C/biofigure-self-evolve](https://github.com/Zessi-C/biofigure-self-evolve) | 0 | 2026-08-29 | 2026-08-30 | Self-evolving bioinformatics figure library skill: learn plots from papers/PDFs/WeChat articles/screenshots into reusable recipes (R/Python), imitate them when plotting. 自进化的生信 figure 学习库与复用引擎 |
| 169 | [zhang-jiazhi/dsh-prompt-optimizer](https://github.com/zhang-jiazhi/dsh-prompt-optimizer) | 0 | 2026-08-30 | 2026-08-30 | 将原作者 linshenkx 的 prompt-optimizer 移植到 DeepSeek Harness 的第三方插件（非官方） |
| 170 | [zhangzhenwen1/dsh-task-effort](https://github.com/zhangzhenwen1/dsh-task-effort) | 0 | 2026-08-30 | 2026-08-30 | Auto-adjust model reasoning effort per task with DeepSeek peak-pricing-period capping: off/low/high/max classification, [effort=...] markers, error escalation, countdown notices |
| 171 | [zhaozixi/dsh-attention](https://github.com/zhaozixi/dsh-attention) | 0 | 2026-08-28 | 2026-08-30 | DSH 跑任务时你通常只能盯着进度条。dsh-attention 把这段等待变成有产出的碎片时间 |
| 172 | [zhchxiao123/dsh-devflow-plugins](https://github.com/zhchxiao123/dsh-devflow-plugins) | 0 | 2026-08-26 | 2026-08-30 | File-backed development workflow for DeepSeek Harness: durable cards, artifact and agent checks, human approvals, and a read-only web board. |
| 173 | [zhengjy01/dsh-vercel-mcp](https://github.com/zhengjy01/dsh-vercel-mcp) | 0 | 2026-08-30 | 2026-08-30 | Vercel MCP connection for DeepSeek Harness (DSH): official OAuth 2.0 flow (dynamic client registration + PKCE) against mcp.vercel.com, Vercel API tools under mcp__vercel__*, and a web settings panel |
| 174 | [zhoujianbin/dsh-codex-continue](https://github.com/zhoujianbin/dsh-codex-continue) | 0 | 2026-08-29 | 2026-08-30 | DSH 插件：读取本机 Codex 项目与会话，一键在 DSH 里继续。Read local OpenAI Codex sessions and continue them in DeepSeek Harness. |
| 175 | [zhubaohi/dsh-gpu-pulse](https://github.com/zhubaohi/dsh-gpu-pulse) | 0 | 2026-08-30 | 2026-08-30 | Floating GPU monitor (nvidia-smi) for the DSH Web UI — live per-GPU utilization, VRAM, temperature, power and fan, in the corner of the page. |
| 176 | [zisen123/dsh-reasoning-ruler](https://github.com/zisen123/dsh-reasoning-ruler) | 0 | 2026-08-30 | 2026-08-30 | Minimal reasoning-effort ruler for the DSH web composer: hairline + sliding marker, per-model memory, optimistic switching, streamlined model picker |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- bettermen/dsh-course-writer
- bitterSmilezzz/dsh-ui-tweaks
- BlackDawnNova/dsh-web-open
- Cheerwhy/dsh-chat-anchors
- chinaRXQ/dsh-wallpaper
- collapsey/xiaokui-pet
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
- firestige/execution-system
- hejielijob-commits/dsh-data-agent
- kiligzzz/dsh-capability-manager
- liguobao/deepseek-harness-remote
- mrlfarano/dsh-tailscale-surface
- mrpulor-gh/nuphus-mcp
- Nyzeep/dsh-thinking-level
- PolinniZhong/dsh-session-kb
- qingzhuo-cn/agent-fix
- statem-li/dsh-better-markdown
- statem-li/dsh-browser
- statem-li/dsh-image-gallery
- statem-li/dsh-reasoning-effort
- statem-li/dsh-tool-summary
- statem-li/dsh-usage-skill
- statem-li/dsh-vision-helper
- statem-li/dsh-zh-thinking
- vikasranax/dsh-plugin-cats
- webkubor/dsh-mirror
- Yvesgao/dsh-desktop-launcher
- zhongjie10086/dsh-adaptive-native-standard
