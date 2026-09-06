# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-06**
- 快照日期 / Snapshot date: **2026-09-06 (UTC)**
- 待审核 / Pending: **120**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **19**
- Star 异常增长 / Star-growth alerts: **1** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-05** / vs previous snapshot **2026-09-05**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **1**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop) | 已核准 / approved | 265 | +108 | 4 | 11d | 日增百星 | 日增 +108★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [398894496-arch/DSH-KRouter](https://github.com/398894496-arch/DSH-KRouter) | 37 | 2026-08-21 | 2026-09-06 | Second brain for coding agents. Seal the day, distill into Obsidian, hit that page tomorrow. Cursor, Codex, Claude Code, DeepSeek Harness. |
| 2 | [Kr-ATG/dsh-webui](https://github.com/Kr-ATG/dsh-webui) | 19 | 2026-08-17 | 2026-09-06 | DeepSeek Harness 会话增强全家桶：定时自动化任务引擎（cron 调度·绑定模型真实执行·Agent 建议确认）、会话产物卡片、对话退回与文件回退/修改历史对比、视图图块与消息导航、工具调用聚合、Markdown 渲染、模型推理等级同步与 Developer Role 兼容检测、AnySearch 网页搜索、本地记忆（hybrid 检索）、用量工作台与 Token 预算、技能管理、文件浏览器、供应商设置、AI 浏览器、生图/辅助视觉、邮箱验证码、网络代理、任务完成提示音、审批提醒等。 |
| 3 | [HarcoChen/deepseek-harness-vscode](https://github.com/HarcoChen/deepseek-harness-vscode) | 10 | 2026-08-13 | 2026-09-06 | DeepSeek Harness (DSH) for VS Code — AI coding with native diffs, tool approvals, persistent sessions, and Trace insights. \| AI 编程助手：原生 Diff、工具审批、持久会话与 Trace 分析。 |
| 4 | [Liora2050348900/dsh-token-optimizer](https://github.com/Liora2050348900/dsh-token-optimizer) | 8 | 2026-09-01 | 2026-09-06 | Layered token-optimization pipeline for DeepSeek Harness: output ladder, MCP lazy loading,compaction driver, cache-hit reporting. Built on real DSH plugin APIs; ~40-60% input saved in long sessions. |
| 5 | [Liora2050348900/dsh-behavior-enhancer](https://github.com/Liora2050348900/dsh-behavior-enhancer) | 5 | 2026-09-03 | 2026-09-06 | Behavior-management plugin for DeepSeek Harness: tool-call discipline prompt section, failure-triggered parallelism convergence (pool drops to 1, auto-restores), consecutive-failure user intervention. Complements dsh-token-optimizer; works standalone. |
| 6 | [Kr-ATG/dsh-triad](https://github.com/Kr-ATG/dsh-triad) | 3 | 2026-08-28 | 2026-09-06 | 用量趋势 · 技能与 MCP Server 管理 · 自动沉淀的长期记忆——一套插件装齐 DSH 三个工作台。纯插件注入，不动官方源码，一句话安装。 |
| 7 | [LoveDoLove/Project-Memory-Agent](https://github.com/LoveDoLove/Project-Memory-Agent) | 3 | 2026-08-27 | 2026-09-06 | Project Memory gives coding agents a single, trustworthy memory for a software repository — so they stop re-learning the same facts and stop writing conflicting "memory" files. |
| 8 | [11zld22/dsh-model-info-fill](https://github.com/11zld22/dsh-model-info-fill) | 2 | 2026-09-06 | 2026-09-06 | 模型信息补全：按模型名自动补全上下文、输出上限、思考档位和图片能力 |
| 9 | [AllDurham/foreman-dsh](https://github.com/AllDurham/foreman-dsh) | 2 | 2026-09-05 | 2026-09-06 | 贵脑+贱手: cloud-orchestrator + local-worker lanes (delegate & read-only scout) for DeepSeek Harness \| 社区 Agent 预设 |
| 10 | [clclyzybzjsq/dsh-btw](https://github.com/clclyzybzjsq/dsh-btw) | 2 | 2026-09-06 | 2026-09-06 | enables /btw commands in deepseek-harness (similar to /btw in claude code) |
| 11 | [HarcoChen/dsh-intellij-integration](https://github.com/HarcoChen/dsh-intellij-integration) | 2 | 2026-08-29 | 2026-09-06 | DeepSeek Harness (DSH) for JetBrains IDEs — AI coding with native diffs, tool approvals, sessions, Trace analysis, and balance tracking. \| IntelliJ IDEA / PyCharm AI 编程助手：原生 Diff、工具审批、会话与 Trace 分析。 |
| 12 | [Shmilyol/dsh-hiyori-web-ui](https://github.com/Shmilyol/dsh-hiyori-web-ui) | 2 | 2026-08-14 | 2026-09-06 | 为 DeepSeek Harness 提供桃濑日和的动态插件 |
| 13 | [233fxr-collab/dsh-mobile-push-notify](https://github.com/233fxr-collab/dsh-mobile-push-notify) | 1 | 2026-09-05 | 2026-09-06 | dsh task/mobile completion notifications: desktop native alerts + PWA/Web Push phone pairing (zero-config) |
| 14 | [aaronlei/dsh-web-search-diy](https://github.com/aaronlei/dsh-web-search-diy) | 1 | 2026-09-03 | 2026-09-06 | DeepSeek Harness（DSH）网页搜索提供方插件：把内置 web_search 工具接到 OpenAI 兼容 Responses API 及其原生 web_search 工具上。 |
| 15 | [bululuburuarua666/dsh-herald](https://github.com/bululuburuarua666/dsh-herald) | 1 | 2026-09-06 | 2026-09-06 | 🔔 Herald 传令官 — DSH 三通道任务通知：页内浮层、浏览器横幅、宿主直发系统通知（浏览器关闭也送达） \| Tri-channel task notifications for DeepSeek Harness: in-page toasts, browser banners & host-direct OS toasts that survive a closed browser |
| 16 | [drshy-org/lightroom-py](https://github.com/drshy-org/lightroom-py) | 1 | 2026-04-30 | 2026-09-06 | Unofficial Python library, CLI, and Claude/Codex agent skill for automating Adobe Lightroom Classic |
| 17 | [dsboylw/LazyNoobsCockloft](https://github.com/dsboylw/LazyNoobsCockloft) | 1 | 2026-09-05 | 2026-09-06 | Lazy Noob's Cockloft |
| 18 | [hoshinoick811/dsh-tool-ssh](https://github.com/hoshinoick811/dsh-tool-ssh) | 1 | 2026-09-06 | 2026-09-06 | MobaXterm-style SSH/SFTP tool plugin for DeepSeek Harness (DSH): saved connection profiles, persistent multiplexed sessions, remote command execution, SFTP file transfer, and a web GUI console with file browser + live xterm terminal. |
| 19 | [jianxx/dsh-cc-backup](https://github.com/jianxx/dsh-cc-backup) | 1 | 2026-08-15 | 2026-09-06 | A batteries-included coding agent for DeepSeek Harness — Claude Code-style workflows, your choice of models, TUI, skills, subagents, hooks, MCP, memory, and worktrees. |
| 20 | [keeshakulbida948-tech/dsh-plugin-fun](https://github.com/keeshakulbida948-tech/dsh-plugin-fun) | 1 | 2026-09-05 | 2026-09-06 | DeepSeek Harness「阿蓝」人格插件：给 AI 注入活泼有趣、会主动发表情包的性格 |
| 21 | [keeshakulbida948-tech/dsh-plugin-sticker](https://github.com/keeshakulbida948-tech/dsh-plugin-sticker) | 1 | 2026-09-05 | 2026-09-06 | DeepSeek Harness 表情包插件：AI 按情境主动发表情包，图片内嵌对话气泡显示 |
| 22 | [Kr-ATG/dsh-chat-flow](https://github.com/Kr-ATG/dsh-chat-flow) | 1 | 2026-08-31 | 2026-09-06 | DSH 对话流增强插件（零 DSH 源码改动，纯插件注入）。回合呈现：思考 chip（实时走秒 + 实时文字滚动）· 工具调用聚合 chip · 对话流卡片（步骤卡/总结卡）· 共享活动抽屉。正文增强：proto-tabs 可交互卡片 · diagram 流程图围栏 · 本地 HTML 内嵌预览（识别正文里的 .html 路径，host 读文件 + 同目录资源，iframe 沙箱隔离，高度自适应，1:1/等比缩放，浏览器打开）。界面与工具：会话头部对话/轨迹标签上移 · 对话截图（常驻无头浏览器渲染 markdown/shiki/mermaid 真图，可内嵌本地 HTML）· download 下载工具（实时进度条/速度/ETA）。 |
| 23 | [liqiGeGe/dsh-plugin-execution-graph](https://github.com/liqiGeGe/dsh-plugin-execution-graph) | 1 | 2026-09-01 | 2026-09-06 | A DeepSeek Harness (DSH) client plugin that adds an "Execution graph" tab to the conversation view. It reconstructs one session turn's activity as a vertical timeline on a React Flow canvas |
| 24 | [LYRA-88/workspace_memory_dsh](https://github.com/LYRA-88/workspace_memory_dsh) | 1 | 2026-09-05 | 2026-09-06 | dsh的跨会话记忆管理插件，让agent记住每一个任务的内容和进度。包含命题图、三层内存漏斗、混合向量 + 词法检索（RRF）以及浏览器端审查面板。 ｜ Cross-session memory management for DSH — lets the agent remember the content and progress of every task while executing. Includes a proposition graph, three-layer memory funnel, hybrid vector + lexical retrieval (RRF), and a browser-side review panel. |
| 25 | [MichengAI/dsh-btw](https://github.com/MichengAI/dsh-btw) | 1 | 2026-09-06 | 2026-09-06 | DSH 一次性只读旁问插件：基于当前上下文回答，独立气泡，不执行工具 |
| 26 | [MichengAI/dsh-simplify](https://github.com/MichengAI/dsh-simplify) | 1 | 2026-09-06 | 2026-09-06 | DeepSeek Harness 代码简化插件：限定 Git 变更范围，支持未跟踪文件、跨平台路径与可靠的 Git 异常处理。 |
| 27 | [mingger77/project-learning-preset](https://github.com/mingger77/project-learning-preset) | 1 | 2026-09-06 | 2026-09-06 | 一个助力包括我在内的萌新进行项目式学习的dsh preset |
| 28 | [MoonlitDropOfBlood/DSH-Desktop](https://github.com/MoonlitDropOfBlood/DSH-Desktop) | 1 | 2026-08-15 | 2026-09-06 | 为DeepSeek Harness 打造的桌面端，没有打包DeepSeek Harness，核心可以独立更新 |
| 29 | [MoonlitDropOfBlood/dsh-git-manager](https://github.com/MoonlitDropOfBlood/dsh-git-manager) | 1 | 2026-08-29 | 2026-09-06 | DSH的git管理插件 |
| 30 | [MoonlitDropOfBlood/dsh-whale-pet](https://github.com/MoonlitDropOfBlood/dsh-whale-pet) | 1 | 2026-09-05 | 2026-09-06 | dsh的桌面宠物，挂载在WhaleHarbor中 |
| 31 | [N3kOk0/dsh-md3-theme](https://github.com/N3kOk0/dsh-md3-theme) | 1 | 2026-09-06 | 2026-09-06 | Deepseek Herness Material 3 Theme by Deepseek |
| 32 | [Nicercz007-cloud/schedule](https://github.com/Nicercz007-cloud/schedule) | 1 | 2026-09-05 | 2026-09-06 | DSH Desktop 桌面小组件：每日时间安排 / 目标设置 / 日期规划 三个可拖动、可缩放的悬浮卡片 |
| 33 | [Shyboy0499/dsh-web-search](https://github.com/Shyboy0499/dsh-web-search) | 1 | 2026-09-05 | 2026-09-06 | Web search tool for DeepSeek Harness (dsh): query + ranked results. |
| 34 | [Six6stRINgs/dsh-thinking-token-stat](https://github.com/Six6stRINgs/dsh-thinking-token-stat) | 1 | 2026-09-03 | 2026-09-06 | 在底部Dock和每次对话尾部添加模型思考token统计的轻量化插件。A lightweight plugin that adds model thinking token statistics to the bottom Dock and the end of each conversation. |
| 35 | [taikaikaikai-pixel/dsh-tap](https://github.com/taikaikaikai-pixel/dsh-tap) | 1 | 2026-09-06 | 2026-09-06 | CodeBuddy & Trae provider bundle for DeepSeek Harness (dsh): subscription-quota LLM access via loopback tap bridges — 18+ models, OAuth/API-key, usage metering. Unofficial, BYOC. |
| 36 | [taontech/dsh-git](https://github.com/taontech/dsh-git) | 1 | 2026-08-14 | 2026-09-06 | 一个 Git tab，展示当前 项目路径的 Git 信息：仓库概况、文件修改状态、提交历史、分支与提交图、 贡献日历（最近一年每日提交热力图） |
| 37 | [TYEclipse/dsh-chem](https://github.com/TYEclipse/dsh-chem) | 1 | 2026-09-05 | 2026-09-06 | Deterministic chemistry math for DeepSeek Harness: formula parsing + molar mass, mass/mole/particle conversions, solution concentration and pH math — zero runtime dependencies |
| 38 | [wsifan31-bit/Smart-DSH-Market](https://github.com/wsifan31-bit/Smart-DSH-Market) | 1 | 2026-08-16 | 2026-09-06 | Smart DSH Suite v2.0: Dual-engine plugin marketplace (12k+ plugins) with project-stage-aware recommendations & 26px Nano HUD. |
| 39 | [alebgl77/dsh-plugin-otel-genai](https://github.com/alebgl77/dsh-plugin-otel-genai) | 0 | 2026-09-06 | 2026-09-06 | OpenTelemetry GenAI metrics for DeepSeek Harness: token usage and step latency per provider and model, exported over OTLP for Grafana and Prometheus |
| 40 | [andyfan1094/dsh-devforge](https://github.com/andyfan1094/dsh-devforge) | 0 | 2026-08-29 | 2026-09-06 | Spec-driven service forge and integrated operations plugin for DSH |
| 41 | [athif23/dsh-context-rollover](https://github.com/athif23/dsh-context-rollover) | 0 | 2026-09-06 | 2026-09-06 | Model-driven context-window rollover bundle for the DeepSeek Harness: fresh working context, durable notes, verbatim recent tail, no summarization |
| 42 | [bai111111/dsh-pet-luotianyi](https://github.com/bai111111/dsh-pet-luotianyi) | 0 | 2026-09-06 | 2026-09-06 | 洛天依桌宠：住在 DSH 里的虚拟歌姬桌宠，可拖动、可互动（抚摸/喂食/睡觉/聊天），预设动作 + 接大模型的 AI 聊天。 |
| 43 | [Canary-Builds/dhs-connect](https://github.com/Canary-Builds/dhs-connect) | 0 | 2026-09-05 | 2026-09-06 | DSH Connect — ChatGPT model connector for DeepSeek Harness, powered by the Codex app-server. |
| 44 | [Canary-Builds/dsh-mobile-ui](https://github.com/Canary-Builds/dsh-mobile-ui) | 0 | 2026-08-31 | 2026-09-06 | Mobile and PWA interface enhancements for DeepSeek Harness, inside your existing web UI. |
| 45 | [CaoQiNeng/dsh-deepseek-balance](https://github.com/CaoQiNeng/dsh-deepseek-balance) | 0 | 2026-09-06 | 2026-09-06 | DeepSeek API account balance as a floating bottom-right badge in the DeepSeek Harness web UI (dynamic Cordis plugin) |
| 46 | [chen6896qqwee/dsh-workflow-console](https://github.com/chen6896qqwee/dsh-workflow-console) | 0 | 2026-09-06 | 2026-09-06 | Workflow Console plugin for DeepSeek Harness: sidebar speed-rail for plan/execute, goal, token occupancy, workflow launcher, session progress. |
| 47 | [chuxindd/dsh-context-enhancement](https://github.com/chuxindd/dsh-context-enhancement) | 0 | 2026-09-06 | 2026-09-06 | 适用于 DeepSeek Harness 的单会话上下文增强工具，力求化解会话在触发 /compact 上下文压缩后损失信息过多，导致前后表现“判若两人”的技术困境。 |
| 48 | [cmyfqwq/webauthn-for-webview-shells](https://github.com/cmyfqwq/webauthn-for-webview-shells) | 0 | 2026-09-06 | 2026-09-06 | Enable passkeys in WebView-shell browsers (Via, Quark, ...) via the official androidx.webkit switch — LSPosed module, fully reversible |
| 49 | [countossbot/dsh-spider](https://github.com/countossbot/dsh-spider) | 0 | 2026-09-06 | 2026-09-06 | Auto-inject chosen skills into DeepSeek Harness (DSH) sessions: each prompt or once at session start, with a settings page and a composer indicator. |
| 50 | [d4551/cloudflare-dsh](https://github.com/d4551/cloudflare-dsh) | 0 | 2026-09-05 | 2026-09-06 | Cloudflare tools, an AI Gateway model provider, and MCP passthrough for DeepSeek Harness. |
| 51 | [dearbld/dsh-living-memory](https://github.com/dearbld/dsh-living-memory) | 0 | 2026-09-06 | 2026-09-06 | Living memory for DeepSeek Harness — self-tending knowledge base: nightly patrol, temporal decay, RRF hybrid recall, knowledge graph. Built by 暖暖 (NuanNuan). |
| 52 | [Dingpenghui-good/dsh-web-search-serper](https://github.com/Dingpenghui-good/dsh-web-search-serper) | 0 | 2026-09-06 | 2026-09-06 | Serper.dev-backed web search provider for DeepSeek Harness (DSH) web capability seam |
| 53 | [duhu2000/dsh-form-fill-agent](https://github.com/duhu2000/dsh-form-fill-agent) | 0 | 2026-09-06 | 2026-09-06 | AI填表智能体：XLSX blank-cell preview, QCC enrichment and persistent tasks for DeepSeek Harness. |
| 54 | [Epiphany-Leon/dsh-skill-forge](https://github.com/Epiphany-Leon/dsh-skill-forge) | 0 | 2026-09-06 | 2026-09-06 | Multi-Agent collaborative skill forging system for DeepSeek Harness — distill conversational experience into verifiable, reusable Agent Skills. |
| 55 | [FaMuer/dsh-real-fish-pet](https://github.com/FaMuer/dsh-real-fish-pet) | 0 | 2026-09-06 | 2026-09-06 | A 3D whale desktop pet for the dsh web UI: free swimming, attention animations and whale-call sounds on task events. |
| 56 | [fewoot/dsh-whale-particles](https://github.com/fewoot/dsh-whale-particles) | 0 | 2026-09-05 | 2026-09-06 | 给 DSH Web 加一个点阵互动背景:点阵可组成鲸鱼或你上传的透明 PNG 照片,每颗粒子有自己独立的平滑外力;既能手动随鼠标扰动,也能切换自动屏保模式(360° 任意方向扫波 + 全屏呼吸躁动),参数面板支持恢复默认。 |
| 57 | [Fogggy-Chao/dsh-plugin-hub](https://github.com/Fogggy-Chao/dsh-plugin-hub) | 0 | 2026-09-05 | 2026-09-06 | Minimal jelly Plugin Hub and equipment sidebar for DeepSeek Harness |
| 58 | [foggy-projects/foggy-deepseek-harness-plugin](https://github.com/foggy-projects/foggy-deepseek-harness-plugin) | 0 | 2026-08-28 | 2026-09-06 | Foggy Java data analysis engine integration for DeepSeek Harness |
| 59 | [GBDJXB/dsh-workspace-presets](https://github.com/GBDJXB/dsh-workspace-presets) | 0 | 2026-09-06 | 2026-09-06 | Per-workspace Agent preset bindings for DeepSeek Harness |
| 60 | [glh5835/dsh-prompt-refiner](https://github.com/glh5835/dsh-prompt-refiner) | 0 | 2026-09-05 | 2026-09-06 | DeepSeek Harness 提示词精炼插件：结构化改写 + 成本路由 + 缓存 + token 统计 |
| 61 | [GooDAnDReaDY/dsh-cost-meter](https://github.com/GooDAnDReaDY/dsh-cost-meter) | 0 | 2026-09-05 | 2026-09-06 | DeepSeek Harness plugin: a session cost chip in the conversation header - live token usage by bucket, peak/off-peak tariff, and a countdown to the next tariff switch. |
| 62 | [GooDAnDReaDY/dsh-goal](https://github.com/GooDAnDReaDY/dsh-goal) | 0 | 2026-09-05 | 2026-09-06 | Goal mode & autonomous execution plugin for DeepSeek Harness with sticky top banner |
| 63 | [grloper/dsh-claude-oauth](https://github.com/grloper/dsh-claude-oauth) | 0 | 2026-09-06 | 2026-09-06 | Claude Pro/Max OAuth model provider for DeepSeek Harness with Google/Gmail login in Settings, auto-token refresh, live model discovery, and real-time quota tracking |
| 64 | [Haoxiang-Fant/dsh-task-notice](https://github.com/Haoxiang-Fant/dsh-task-notice) | 0 | 2026-09-06 | 2026-09-06 | 装上此插件并进入插件设置内授权即可让你的DeepSeek Harness获得任务完成后使用系统通知能力，还有每个模型的使用情况 |
| 65 | [HaoyueQin/dsh-git-review](https://github.com/HaoyueQin/dsh-git-review) | 0 | 2026-09-05 | 2026-09-06 | DSH Git Review — 审查标签页 + 围栏 Git 工作台 \| Review tab + fenced git workbench for DeepSeek Harness: file tree, diffs, lane graph, guarded git ops |
| 66 | [Harzva/dsh-pr-guardian](https://github.com/Harzva/dsh-pr-guardian) | 0 | 2026-09-05 | 2026-09-06 | Authored PR feedback inbox with shared Codex/DSH progress and read-only GitHub collection. |
| 67 | [hawk2048/oh-my-dsh](https://github.com/hawk2048/oh-my-dsh) | 0 | 2026-08-27 | 2026-09-06 | oh-my-dsh: OMC-style multi-agent orchestration for DeepSeek Harness — 29 workflow skills + 12 /omd-* slash commands, one-command bundle install + agent preset. |
| 68 | [ice5kysl/dsh-insights](https://github.com/ice5kysl/dsh-insights) | 0 | 2026-09-05 | 2026-09-06 | DSH 插件生态质量评估数据层 · objective health scores (A-D, health-v1) for the whole DeepSeek Harness plugin ecosystem — 全量客观健康分/真伪判定/生态分析/开放数据 |
| 69 | [jackie2455/dsh-model-info-hint](https://github.com/jackie2455/dsh-model-info-hint) | 0 | 2026-09-06 | 2026-09-06 | hovering over a candidate model pops up a hint showing that model's full configuration |
| 70 | [jixishi/dsh-adapter-qq](https://github.com/jixishi/dsh-adapter-qq) | 0 | 2026-09-06 | 2026-09-06 | QQ Official Bot Adapter for DeepSeek Harness — C2C chat, interactive action boards, workspace session management, and real-time Web UI sync. |
| 71 | [johnhom1024/dsh-loopback-bridge](https://github.com/johnhom1024/dsh-loopback-bridge) | 0 | 2026-09-06 | 2026-09-06 | Unlock DSH Web settings and credentials when you open the UI from a LAN IP or public hostname |
| 72 | [jsoncode/dsh-listen-npm](https://github.com/jsoncode/dsh-listen-npm) | 0 | 2026-09-06 | 2026-09-06 | 监听查看设置的npm包的下载情况 |
| 73 | [k12u/dsh-ios-pwa](https://github.com/k12u/dsh-ios-pwa) | 0 | 2026-09-05 | 2026-09-06 | Pre alpha |
| 74 | [kaerf15/dsh-geek-ui](https://github.com/kaerf15/dsh-geek-ui) | 0 | 2026-09-05 | 2026-09-06 | DSH Geek UI — dsh web 极客增强插件集合（页头重排 / 极客侧栏 / 归档管理） |
| 75 | [kaerf15/dsh-plus](https://github.com/kaerf15/dsh-plus) | 0 | 2026-09-05 | 2026-09-06 | DSH+：给 DeepSeek Harness web 套原生桌面窗口的多应用容器（electron，macOS/Windows） |
| 76 | [kee0012/dsh-prompt-optimizer](https://github.com/kee0012/dsh-prompt-optimizer) | 0 | 2026-09-06 | 2026-09-06 | DSH 提示词优化插件：输入框工具栏一键 ✨ 优化（直接写回可还原），风格/上下文/还原等设置收纳进 ▾ 弹出层。 |
| 77 | [Kr-ATG/dsh-done-pill](https://github.com/Kr-ATG/dsh-done-pill) | 0 | 2026-08-30 | 2026-09-06 | DSH 对话完成胶囊：顶部悬浮消息胶囊（原 webui done-pill 拆出）——任一会话回合完成提醒、点击跳会话、悬停查看记录全文、可拖拽定位、健康提醒与字体/缩放设置。零 DSH 源码改动，可与 dsh-webui 并存（webui 关闭 donePill 模块即可）。 |
| 78 | [Kr-ATG/dsh-web-search-anysearch](https://github.com/Kr-ATG/dsh-web-search-anysearch) | 0 | 2026-08-31 | 2026-09-06 | DSH 外接网页搜索（AnySearch）：注册 AnySearch 网页搜索 provider（替换内置 DeepSeek 搜索）+ 插件设置卡（API Key / Base URL / 默认结果数）。提炼自 statem-li/dsh-webui 的 webSearch 模块，零 DSH 源码改动。 |
| 79 | [kristol07/dsh-version-inventory](https://github.com/kristol07/dsh-version-inventory) | 0 | 2026-09-06 | 2026-09-06 | Show the running DeepSeek Harness version and every mounted plugin's package version inside the dsh web UI. |
| 80 | [lirui1024k/dsh-browser-ops](https://github.com/lirui1024k/dsh-browser-ops) | 0 | 2026-09-06 | 2026-09-06 | DeepSeek Harness plugin: agent-driven real-browser control + record/replay manual flows with variable slots for test data creation. (DSH 插件：真实浏览器操作 + 录制/重放造测试数据) |
| 81 | [lokih1028/dsh-plugin-canvas-pro](https://github.com/lokih1028/dsh-plugin-canvas-pro) | 0 | 2026-09-06 | 2026-09-06 | Canvas-Pro artifact drawer for DeepSeek Harness with eight model tools for HTML, Markdown, Mermaid, SVG, and React canvases. |
| 82 | [loommii/dsh-provider-usage](https://github.com/loommii/dsh-provider-usage) | 0 | 2026-08-23 | 2026-09-06 | DSH plugin: OpenCode Go 用量查询 - floating whale click dialog (M1) |
| 83 | [loommii/dsh-thin-search](https://github.com/loommii/dsh-thin-search) | 0 | 2026-08-29 | 2026-09-06 | DeepSeek Harness 轻量级搜索插件 — 不走 DeepSeek 官方 LLM 搜索,可插拔后端,零 token 成本 |
| 84 | [loommii/dsh-web-search-plus](https://github.com/loommii/dsh-web-search-plus) | 0 | 2026-08-28 | 2026-09-06 | DSH web_search 工具的可配置化增强版：model/baseURL/auth 全可配 |
| 85 | [loveXbanshee/dsh-fleet](https://github.com/loveXbanshee/dsh-fleet) | 0 | 2026-09-02 | 2026-09-06 | dsh-fleet by Punica Studio: a fleet console for DeepSeek Harness ? manage local + remote dsh instances, read cross-device conversation history (token-gated). |
| 86 | [lovstudio/dsh-search-model](https://github.com/lovstudio/dsh-search-model) | 0 | 2026-09-05 | 2026-09-06 | Search-enabled composer model seat for DeepSeek Harness (sticky fuzzy search) |
| 87 | [lovstudio/dsh-video-studio](https://github.com/lovstudio/dsh-video-studio) | 0 | 2026-09-05 | 2026-09-06 | DSH video editing workbench with Remotion, GSAP and pluggable ASR |
| 88 | [loyalchiiina/dsh-todo-float-ball](https://github.com/loyalchiiina/dsh-todo-float-ball) | 0 | 2026-09-06 | 2026-09-06 | Floating progress ball for DeepSeek Harness (DSH): keeps the AI agent's todo_write checklist on a persistent, draggable ball with live status colors. EN/CN bilingual. |
| 89 | [Lundly/dsh-shutdown](https://github.com/Lundly/dsh-shutdown) | 0 | 2026-08-30 | 2026-09-06 | ❎Provide a shutdown button to quickly close tabs and dsh in the deepseek harness web interface 在deepseek harness网页界面中提供一个关闭按钮快捷关闭标签页和dsh进程 |
| 90 | [luxi233/dsh-workflow](https://github.com/luxi233/dsh-workflow) | 0 | 2026-09-06 | 2026-09-06 | DSH-native workflow automation platform |
| 91 | [Mekansm1/DSH-WebGIS](https://github.com/Mekansm1/DSH-WebGIS) | 0 | 2026-09-06 | 2026-09-06 | DeepSeek Harness (DSH) WebGIS Plugin: Map reading, map manipulation, and 3D world comprehension. |
| 92 | [mill413/dsh-session-resume](https://github.com/mill413/dsh-session-resume) | 0 | 2026-09-06 | 2026-09-06 | Continue interrupted DeepSeek Harness tasks with one click. |
| 93 | [momo20012002/dsh-hmos-emulator](https://github.com/momo20012002/dsh-hmos-emulator) | 0 | 2026-09-06 | 2026-09-06 | DSH better-sidebar 侧边栏标签页:一键启动鸿蒙模拟器、构建并部署 HarmonyOS 应用到模拟器。 |
| 94 | [nicklin99/dsh-find-jobs](https://github.com/nicklin99/dsh-find-jobs) | 0 | 2026-09-06 | 2026-09-06 | dsh个人求职插件 |
| 95 | [noah-qiao/dsh-human-agent-paradigm-web](https://github.com/noah-qiao/dsh-human-agent-paradigm-web) | 0 | 2026-09-06 | 2026-09-06 | dsh-human-agent-paradigm-web |
| 96 | [nvbb/dsh-ollama-vision-bridge](https://github.com/nvbb/dsh-ollama-vision-bridge) | 0 | 2026-09-06 | 2026-09-06 | DSH plugin: text-only chat models get local Ollama VL image descriptions (qwen3-vl:8b), VRAM cooling |
| 97 | [oebeliever/dsh-image2-draw](https://github.com/oebeliever/dsh-image2-draw) | 0 | 2026-09-06 | 2026-09-06 | DeepSeek Harness Image2 生图插件（gpt-image-2，OpenAI Images 兼容中转）· 社区维护分支，含网关兼容性修复。Image2 generation plugin for DeepSeek Harness — community fork with fixes. |
| 98 | [oebeliever/dsh-video-gen](https://github.com/oebeliever/dsh-video-gen) | 0 | 2026-09-06 | 2026-09-06 | DeepSeek Harness ??????:MiniMax H3(easyframe ??)??/????/???/????/????,??????? + ???????MiniMax H3 video generation plugin for DeepSeek Harness. |
| 99 | [Oissp/dsh-desktop](https://github.com/Oissp/dsh-desktop) | 0 | 2026-08-26 | 2026-09-06 | DeepSeek Harness Desktop |
| 100 | [OuYangxin12/dsh-status-bar](https://github.com/OuYangxin12/dsh-status-bar) | 0 | 2026-09-06 | 2026-09-06 | Live execution status bar for the DeepSeek Harness web GUI: real-time activity + event-driven LLM achievement summaries with expandable detail reports. |
| 101 | [PerryLink/dsh-catalog](https://github.com/PerryLink/dsh-catalog) | 0 | 2026-09-03 | 2026-09-06 | DSH Desktop Market standard catalog source for the PerryLink plugin family: curated summaries, same-origin icons, contract-validated, CI-smoked. |
| 102 | [PerryLink/dsh-cert-mcp](https://github.com/PerryLink/dsh-cert-mcp) | 0 | 2026-09-03 | 2026-09-06 | Read-only MCP server over the dsh-plugin-certification registry: get_certification, list_certified, certification_spec. |
| 103 | [pure-craft/dsh-capability-panel](https://github.com/pure-craft/dsh-capability-panel) | 0 | 2026-09-05 | 2026-09-06 | DeepSeek Harness plugin: see what your agent can actually reach — skills, MCP servers, system tools with true in-context state, and per-session / per-preset switches |
| 104 | [Rainier-Z/dsh-workspace-monitor](https://github.com/Rainier-Z/dsh-workspace-monitor) | 0 | 2026-09-06 | 2026-09-06 | DSH workspace monitor — command-driven PollingMonitor plugin |
| 105 | [seeingrain/dsh-upload-file](https://github.com/seeingrain/dsh-upload-file) | 0 | 2026-09-05 | 2026-09-06 | DSH plugin: paperclip file library with per-session isolation, thumbnails and re-download. |
| 106 | [shuishuipingan/InkWeaver](https://github.com/shuishuipingan/InkWeaver) | 0 | 2026-09-02 | 2026-09-06 | 织墨 InkWeaver — local-first writing workspace for long-form fiction |
| 107 | [Silktex/dsh-team](https://github.com/Silktex/dsh-team) | 0 | 2026-09-06 | 2026-09-06 | Durable agent teams and web dashboard plugin for DeepSeek Harness |
| 108 | [softspark/dsh-process-console](https://github.com/softspark/dsh-process-console) | 0 | 2026-09-05 | 2026-09-06 | Processes tab for DeepSeek Harness: every agent and subagent of a conversation as a live console with paired tool requests and responses, installed as one profile bundle. |
| 109 | [stelmakhdigital/dsh-web-automation](https://github.com/stelmakhdigital/dsh-web-automation) | 0 | 2026-09-04 | 2026-09-06 | Local-first web stack plugin for DeepSeek Harness: multi-engine keyless web search (DuckDuckGo/Bing, optional Exa/DeepSeek/Jina/SearXNG), SQLite-cached fetch, platform search (GitHub, Reddit, YouTube, …), history & stats, and optional Playwright browser automation. No paid search API, no cloud. |
| 110 | [SunshineR04/dsh-session-manager](https://github.com/SunshineR04/dsh-session-manager) | 0 | 2026-09-05 | 2026-09-06 | DeepSeek Harness (DSH) plugin: manage archived sessions - list, restore, permanently delete; Settings page + red delete item in the session context menu |
| 111 | [svcgv/dsh-debug-mode](https://github.com/svcgv/dsh-debug-mode) | 0 | 2026-09-04 | 2026-09-06 | An experimental Debug Mode bundle for DeepSeek Harness, currently in the engineering-foundation phase. |
| 112 | [TritiumWang/dsh-universal-worldbook](https://github.com/TritiumWang/dsh-universal-worldbook) | 0 | 2026-09-05 | 2026-09-06 | 酒馆风格的通用世界书，为最新用户消息附加一次性的提示词注入，无上下文污染。SillyTavern-style worldbook for general purpose. Generating per-request injections to user message without long-lasting context contamination. |
| 113 | [Trouvaille-xx/dsh-StardewValley-UI](https://github.com/Trouvaille-xx/dsh-StardewValley-UI) | 0 | 2026-09-06 | 2026-09-06 | Stardew Valley themed plugin bundle for DeepSeek Harness (DSH): pixel UI presets, reminder SFX, OST, token heatmap calendar, Canvas particle weather. |
| 114 | [wangtie-010101/wangtie-os](https://github.com/wangtie-010101/wangtie-os) | 0 | 2026-09-06 | 2026-09-06 | 王铁 OS — 构建在 DeepSeek Harness 之上的全屏业务应用框架：知识库 RAG / SQL 查询 / 日志分析 Agent / 数据字典 / 元数据管理 / 系统测试 |
| 115 | [xiyiyiru/dsh-mode](https://github.com/xiyiyiru/dsh-mode) | 0 | 2026-09-06 | 2026-09-06 | dsh plugin: switch_mode — five working modes, methodology injected at the moment of the switch (npm: @xiyiyiru/dsh-mode) |
| 116 | [xiyiyiru/dsh-state](https://github.com/xiyiyiru/dsh-state) | 0 | 2026-09-06 | 2026-09-06 | dsh plugin: session-state notebook + task stack — add/read/compact_state over log events, zero auto-injection (npm: @xiyiyiru/dsh-state) |
| 117 | [ya-b/dsh-web-open-access](https://github.com/ya-b/dsh-web-open-access) | 0 | 2026-09-06 | 2026-09-06 | Removes the login token and the local-network access restriction. |
| 118 | [zaimokuza-yoshiteru/dsh-plugin-hub](https://github.com/zaimokuza-yoshiteru/dsh-plugin-hub) | 0 | 2026-09-06 | 2026-09-06 | Extensible plugin marketplace for DeepSeek Harness: independent team catalogs, pnpm release-age policy, and a CLI for branded markets. |
| 119 | [zijun-T/dsh-sidebar-remote](https://github.com/zijun-T/dsh-sidebar-remote) | 0 | 2026-09-02 | 2026-09-06 | Remote workspace support for dsh-better-sidebar — SSH file tree, editor, terminal, git, upload/download and preview over SSH. |
| 120 | [ZSCDumin/dsh-wellness](https://github.com/ZSCDumin/dsh-wellness) | 0 | 2026-09-06 | 2026-09-06 | dsh-wellness |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2421873411a-rgb/dsh-console
- 2421873411a-rgb/dsh-usage-stats
- 398894496-arch/runtime36
- CSI-entitymorton/stavros-dsh-redteamer
- FloatingLifeTL/dsh-plugin_session-manager-custom
- jianxx/dsh-cc
- jsoncode/dsh-balance-by-token
- lovstudio/dsh-model-select-search
- luoxin10086/dsh-session-doctor
- Melosic/dsh-invoke
- moonwellxh/DSH-Launcher
- Oissp/harness-desktop
- PixelGeek325/DSH-High-Contrast-Theme
- Six6stRINgs/dsh-client-ui-thinking-stats
- statem-li/dsh-chat-flow
- statem-li/dsh-done-pill
- statem-li/dsh-triad
- statem-li/dsh-web-search-anysearch
- statem-li/dsh-webui
