# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-21**
- 快照日期 / Snapshot date: **2026-09-21 (UTC)**
- 待审核 / Pending: **144**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **2**
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

对比上一份快照 **2026-09-21** / vs previous snapshot **2026-09-21**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **1**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) | 待审 / pending | 7164 | +1 | 1200 | 261d | 待审高星 | 核准即 Top 2 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) ⚠️ | 7164 | 2026-01-02 | 2026-09-21 | 基于 Claude Code 的长篇网文辅助创作系统，解决 AI 写作中的「遗忘」和「幻觉」问题，支持 200 万字量级 连载创作。 |
| 2 | [gulagala001/oh-my-dsh](https://github.com/gulagala001/oh-my-dsh) | 14 | 2026-09-10 | 2026-09-21 | 让你的 DSH，火力全开。长上下文、任务验证、提示词优化、代码理解、电脑操作与四套完整主题。 |
| 3 | [webkubor/dsh-mirror](https://github.com/webkubor/dsh-mirror) | 8 | 2026-09-17 | 2026-09-21 | Let the AI know you. 让模型主动记下你的判断依据（原则/红线/工作方式），跨会话复用 —— 有容量、会遗忘、每条都说得出为什么记。 |
| 4 | [AgentsDanceAI/AIStore](https://github.com/AgentsDanceAI/AIStore) | 7 | 2026-08-21 | 2026-09-21 | Accounts, credits and cloud agent workspaces for DeepSeek Harness — run it as a hosted product, or self-host in 5 minutes. |
| 5 | [realguan/dsh-dock](https://github.com/realguan/dsh-dock) | 7 | 2026-08-23 | 2026-09-21 | 专为 DeepSeek Harness (DSH) 打造的跨平台桌面控制中心：多工作台管理、3,400+ 社区插件市场、会话自愈、凭据与系统诊断。Tauri v2 + Rust + React 19，支持 macOS / Windows / Linux。 |
| 6 | [A8Chann/dsh-pet-live2d](https://github.com/A8Chann/dsh-pet-live2d) | 3 | 2026-09-20 | 2026-09-21 | DSH Web GUI 的 Live2D 桌宠插件：可拖动、跟随鼠标、跟着会话状态换动作与表情，右键面板可换装 |
| 7 | [itchenshi/DeepSeekHarnessGUI](https://github.com/itchenshi/DeepSeekHarnessGUI) | 3 | 2026-09-06 | 2026-09-21 | DeepSeek Harness 桌面壳 —— 内嵌 Web UI、自动保持最新引擎、自带数据目录管理与系统托盘。 |
| 8 | [universe-st/dsh-game-material-master](https://github.com/universe-st/dsh-game-material-master) | 3 | 2026-09-19 | 2026-09-21 | dsh游戏素材大师插件。接入seedream生图模型和minimax视频生成模型，可生成各种游戏素材。 |
| 9 | [Areium/dsh-better-prompt](https://github.com/Areium/dsh-better-prompt) | 2 | 2026-09-09 | 2026-09-21 | dsh plugin: rewrite your draft into a better prompt with the LLM and write the result back into the input box; optimization directions live in an editable skill, editable from the settings UI |
| 10 | [chenweigao/perch](https://github.com/chenweigao/perch) | 2 | 2026-09-21 | 2026-09-21 | Native macOS workspace for remote coding agents — Kimi Code, Oh My Pi, Qoder CN and DeepSeek Harness over SSH, with approvals, queues and a unified work queue |
| 11 | [jgao9906-droid/dsh-task-toast](https://github.com/jgao9906-droid/dsh-task-toast) | 2 | 2026-09-20 | 2026-09-21 | Top-right status plate for DeepSeek Harness. DSH 右上角状态提示板。 |
| 12 | [MrWeiCodes/dsh-loop-guard](https://github.com/MrWeiCodes/dsh-loop-guard) | 2 | 2026-09-21 | 2026-09-21 | 为 DeepSeek Harness（DSH）提供的思考循环守护插件：模型陷入「只想不做」的退化循环时自动打断，不必再手动中止 |
| 13 | [openbkn-ai/bkn-dsh](https://github.com/openbkn-ai/bkn-dsh) | 2 | 2026-09-04 | 2026-09-21 | OpenBKN's DeepSeek Harness Web UI plugin enables business users to safely, accurately and reliably utilize the enterprise's business knowledge network to complete business analysis and decision-making. |
| 14 | [Aliww2468/dsh-client-ui-aqua-patched](https://github.com/Aliww2468/dsh-client-ui-aqua-patched) | 1 | 2026-09-20 | 2026-09-21 | Unofficial patched fork of the Aqua glassmorphism theme for the DeepSeek Harness web UI, repaired for DSH 0.1.2-rc.1 (upstream 1.3.1 crashes there) |
| 15 | [chenmiao8563/dsh-token-ledger](https://github.com/chenmiao8563/dsh-token-ledger) | 1 | 2026-09-10 | 2026-09-21 | Transparent, auditable token accounting for DeepSeek Harness — restart-safe ledger + a CLI that recomputes it from raw logs and diffs the result. |
| 16 | [gzsxy/dsh-plugin-skills-manager](https://github.com/gzsxy/dsh-plugin-skills-manager) | 1 | 2026-09-21 | 2026-09-21 | DSH Desktop 技能管理台：浏览/搜索/安装全部 Agent Skills，内置技能市场（Anthropic 官方 + Superpowers + ClawdHub + 任意 GitHub 仓库）、英文简介自动中文翻译、回收站与更新检查 |
| 17 | [hgp005/dsh-winterskin](https://github.com/hgp005/dsh-winterskin) | 1 | 2026-09-21 | 2026-09-21 | 雪岭皮肤 — 把一张照片变成整个 DeepSeek Harness GUI 的底色，并把面板调成配套的玻璃质感主题。A photo skin for the DeepSeek Harness web GUI. |
| 18 | [IDKWhatID2Use/whales-launcher](https://github.com/IDKWhatID2Use/whales-launcher) | 1 | 2026-09-19 | 2026-09-21 | Instance and version manager launcher for DeepSeek Harness (dsh) 适用于DeepSeek Harness的实例与版本管理器 |
| 19 | [kenz1117/dsh-ui-rainbowspeak](https://github.com/kenz1117/dsh-ui-rainbowspeak) | 1 | 2026-09-21 | 2026-09-21 | Rainbow marquee border for the DeepSeek Harness chat composer |
| 20 | [LovelyDazai/dsh-dynamic-thinking-chain](https://github.com/LovelyDazai/dsh-dynamic-thinking-chain) | 1 | 2026-09-21 | 2026-09-21 | Allows deepseek harness to think dynamically like human,automatically judge the difficulty of tasks with suitable thinking chain. |
| 21 | [nanami-0713/dsh-jev-decide](https://github.com/nanami-0713/dsh-jev-decide) | 1 | 2026-09-19 | 2026-09-21 | DSH plugin: register TypeSafe Jev (System One decision model) as an agent tool — jev_decide returns calibrated probabilities (noul/choice/score) for routing/triage/guardrail judgments, no text generation. 把 TypeSafe Jev 决策模型注册为 DSH agent 工具 |
| 22 | [OtterMind/sqlx](https://github.com/OtterMind/sqlx) | 1 | 2026-09-10 | 2026-09-21 | A Rust database CLI for agents with encrypted datasources and on-demand native/JDBC workers |
| 23 | [popu2do/dsh-call-session](https://github.com/popu2do/dsh-call-session) | 1 | 2026-09-04 | 2026-09-21 | Pure native cross-session collaboration plugin for DeepSeek Harness (DSH) |
| 24 | [RockingSisyphus/dsh-focus-supervisor](https://github.com/RockingSisyphus/dsh-focus-supervisor) | 1 | 2026-09-21 | 2026-09-21 | 大肥鱼监工：DSH 任务监督、桌面证据、提醒与窗口干预；Windows / GNOME Wayland。 |
| 25 | [shetengteng/dsh-lumina-tarot](https://github.com/shetengteng/dsh-lumina-tarot) | 1 | 2026-08-20 | 2026-09-21 | Tarot for DeepSeek Harness. Click the floating card to draw a 78-card spread, then let the chat interpret — the model never invents the cards. DeepSeek Harness 塔罗插件：右下角悬浮牌背，点一下抽牌，对话里由 AI 解读，牌面由工具抽出，模型编不了 |
| 26 | [Smallballoons01/retirement-calc](https://github.com/Smallballoons01/retirement-calc) | 1 | 2026-09-21 | 2026-09-21 | 中国法定退休年龄与养老金测算：2025 渐进式延迟退休、退休倒计时、预计月养老金 —— 单文件网页计算器 + DeepSeek Harness 插件 + 跨工具 Agent Skill |
| 27 | [TheYoungChen/dsh-annotate](https://github.com/TheYoungChen/dsh-annotate) | 1 | 2026-09-21 | 2026-09-21 | Annotate any web element — local or online — with DOM facts and your comments, straight into your DeepSeek Harness chat. Built-in sidebar browser, Codex-style review, no X-Frame-Options pain. / 直接在DeepSeek Harness中用“标记DOM”和你的“评论”来标注任何网页元素——无论是本地的还是在线的。内置侧边栏浏览器，无需担心X-Frame-Options |
| 28 | [vianvio/dsh-plugin-drop-path](https://github.com/vianvio/dsh-plugin-drop-path) | 1 | 2026-09-21 | 2026-09-21 | DSH 客户端插件：把一个文件夹拖进 DSH，输入框里出现的是它的本机绝对路径（引用块），而不是一条传不上去的附件。 |
| 29 | [YMRwithNoworry/dsh-niubash-only](https://github.com/YMRwithNoworry/dsh-niubash-only) | 1 | 2026-09-17 | 2026-09-21 | DeepSeek Harness (dsh) bundle: Niubash as the only shell executor + Bash-on-Windows teaching. Install with: dsh plugin --profile web add github:YMRwithNoworry/dsh-niubash-only |
| 30 | [1207627875/dsh-update-lens](https://github.com/1207627875/dsh-update-lens) | 0 | 2026-09-21 | 2026-09-21 | Read-only update checker for DeepSeek Harness (dsh): version comparison across npm and GitHub, in-app update notification, and breaking-change annotations on release notes. 只读更新检查 + 破坏性变更标注。 |
| 31 | [121212165/dsh-plugin-price-aware](https://github.com/121212165/dsh-plugin-price-aware) | 0 | 2026-09-21 | 2026-09-21 | Make your coding agent know what it costs: live credits, per-model price, task pre-estimates, budget gate |
| 32 | [222wcnm/dsh-manager](https://github.com/222wcnm/dsh-manager) | 0 | 2026-08-14 | 2026-09-21 | DSH Manager — 浏览器一键启动/停止/重启 DeepSeek Harness（dsh）web 服务 |
| 33 | [5101good/amoji](https://github.com/5101good/amoji) | 0 | 2026-09-21 | 2026-09-21 | AI 原生表情 · AI-native expressions for dsh: images for people, fixed text semantics for AI. |
| 34 | [7starsseeker/dsh-fact-check](https://github.com/7starsseeker/dsh-fact-check) | 0 | 2026-09-21 | 2026-09-21 | Fact-checking skill for DeepSeek Harness: multi-source verification against the open web, domestic and international ecosystems, optional TypeSafe Jev (System One) judgements. |
| 35 | [alexzshl/dsh-settings-size](https://github.com/alexzshl/dsh-settings-size) | 0 | 2026-09-21 | 2026-09-21 | config dsh settings size |
| 36 | [argszero/cordis-plugin-tool-deadline-guard](https://github.com/argszero/cordis-plugin-tool-deadline-guard) | 0 | 2026-09-21 | 2026-09-21 | Deployment-level deadlines for dsh tool calls that declare none: mounted on the tools/execute waterfall, it turns a silently wedged tool call into a model-visible TOOL_DEADLINE_EXCEEDED. |
| 37 | [arrow1031/dsh-qq-bot](https://github.com/arrow1031/dsh-qq-bot) | 0 | 2026-09-20 | 2026-09-21 | Deepseek harness plugin for QQ-Bot adataper |
| 38 | [awol2005ex3/dsh-cas](https://github.com/awol2005ex3/dsh-cas) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness (dsh) 插件: 用于实现CAS SSO单点登录 |
| 39 | [BetterZflyee/dsh-jev-adapter](https://github.com/BetterZflyee/dsh-jev-adapter) | 0 | 2026-09-21 | 2026-09-21 | Use the Jev (System One) decision-model paradigm with any OpenAI-compatible LLM — no TypeSafe key required. A jev_decide tool for DeepSeek Harness (dsh). |
| 40 | [bojansandhaus/jev-lcm-dsh-compaction](https://github.com/bojansandhaus/jev-lcm-dsh-compaction) | 0 | 2026-09-21 | 2026-09-21 | Calibrated Jev ranking before lossless context condensation |
| 41 | [BOWLUNA/dsh-zcode-breaker](https://github.com/BOWLUNA/dsh-zcode-breaker) | 0 | 2026-09-17 | 2026-09-21 | Rapid-refill circuit breaker for DeepSeek Harness automatic compaction: stops the futile compact-refill-compact loop that burns a summarization call on every step, and reports the oversized read or tool output behind it. |
| 42 | [BOWLUNA/dsh-zcode-farm](https://github.com/BOWLUNA/dsh-zcode-farm) | 0 | 2026-09-17 | 2026-09-21 | Multi-instance ComfyUI orchestration for DeepSeek Harness: give the agent a live view of every GPU in the farm and dispatch each generation job to the idlest instance instead of always hitting the busiest endpoint. |
| 43 | [BOWLUNA/dsh-zcode-git](https://github.com/BOWLUNA/dsh-zcode-git) | 0 | 2026-09-17 | 2026-09-21 | Structured git tools for DeepSeek Harness agents: status, diff, log, branch, commit and stash - pinned output, no shell involved, approval-gated writes. |
| 44 | [BOWLUNA/dsh-zcode-rewind](https://github.com/BOWLUNA/dsh-zcode-rewind) | 0 | 2026-09-17 | 2026-09-21 | Per-tool-call workspace checkpoints for DeepSeek Harness: captures every file mutation including shell commands, stores content-addressed blobs, previews line-level diffs, and every restore is itself undoable. |
| 45 | [BOWLUNA/dsh-zcode-scribe](https://github.com/BOWLUNA/dsh-zcode-scribe) | 0 | 2026-09-17 | 2026-09-21 | A read-only memory room for DeepSeek Harness: a scribe_recall tool over plain markdown, path-safety rules that refuse traversal, Unicode smuggling and NTFS alternate data streams, and an index that never truncates silently. |
| 46 | [br0ny4/dsh-live2d-pet](https://github.com/br0ny4/dsh-live2d-pet) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness 的 Live2D 桌宠：页面内插件 + 系统全局悬浮外壳，状态与 harness 实时绑定 |
| 47 | [bruc3van/dsh-md2word](https://github.com/bruc3van/dsh-md2word) | 0 | 2026-09-21 | 2026-09-21 | 离线 Markdown 转 Word CLI 与原生 DSH 插件，支持中文样式、本地图片和 Mermaid 图表。 |
| 48 | [brunhildzhou/dsh-context-zip](https://github.com/brunhildzhou/dsh-context-zip) | 0 | 2026-09-21 | 2026-09-21 | DSH 插件：接管 DeepSeek Harness 的会话压缩，产出结构化交接摘要、可回查分段与检索工具｜A DSH plugin that takes over session compaction. |
| 49 | [chenjingchun/dsh-deepseek-balance-badge](https://github.com/chenjingchun/dsh-deepseek-balance-badge) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek account balance badge for the DSH sidebar footer, with a settings card for the refresh period. The API key never reaches the browser. |
| 50 | [chenweigao/dsh-perch-notify](https://github.com/chenweigao/dsh-perch-notify) | 0 | 2026-09-21 | 2026-09-21 | Webhook notifications for DeepSeek Harness sessions — POST on approval requests and turn ends (ntfy / Bark / generic JSON). By the author of Perch. |
| 51 | [chiyu-star499/dsh-folder-drop](https://github.com/chiyu-star499/dsh-folder-drop) | 0 | 2026-09-21 | 2026-09-21 | DSH Desktop 插件：把文件夹拖进 composer，得到它的原生绝对路径（DSH 原生只收文件） |
| 52 | [cinderzhan/dsh-media-workbench](https://github.com/cinderzhan/dsh-media-workbench) | 0 | 2026-09-11 | 2026-09-21 | DSH Desktop 内容运营工作台：选题、达人、排期与数据分析 |
| 53 | [ClawsJoy/dsh-plugins](https://github.com/ClawsJoy/dsh-plugins) | 0 | 2026-09-21 | 2026-09-21 | Community plugins for DeepSeek Harness (DSH): upgrade-survivable, seam-based, publishable. |
| 54 | [corlinniu/dsh-daily-chat](https://github.com/corlinniu/dsh-daily-chat) | 0 | 2026-09-21 | 2026-09-21 | 给DeepSeek Harness增加日常聊天功能 |
| 55 | [ct-jaryn/dsh-plugin-baizhi-agent-toolkit](https://github.com/ct-jaryn/dsh-plugin-baizhi-agent-toolkit) | 0 | 2026-09-21 | 2026-09-21 | Optional community BaizhiCloud Agent Toolkit MCP configuration bundle for DeepSeek Harness |
| 56 | [Dev-Wiki/dev-harness-runtime](https://github.com/Dev-Wiki/dev-harness-runtime) | 0 | 2026-09-17 | 2026-09-21 | dev-harness skill runtime  |
| 57 | [donyue7/dsh-aoci-panel](https://github.com/donyue7/dsh-aoci-panel) | 0 | 2026-09-21 | 2026-09-21 | DSH（DeepSeek Harness）插件：在会话视图标签中展示项目的 AOCI 认知索引、治理状态与条目浏览 |
| 58 | [Drowsy-Zn/dsh-skill-notes](https://github.com/Drowsy-Zn/dsh-skill-notes) | 0 | 2026-09-21 | 2026-09-21 | DSH Web GUI 技能速查：用中文一句话说明每个技能是干什么的，点一行把 /技能名 插进输入框。 |
| 59 | [duo-stack/dsh-session-manager](https://github.com/duo-stack/dsh-session-manager) | 0 | 2026-09-01 | 2026-09-21 | 按工作区分组展示会话，支持归档、取消归档与删除。 |
| 60 | [EiffelBS/dsh-plugin-ideas-manager](https://github.com/EiffelBS/dsh-plugin-ideas-manager) | 0 | 2026-09-16 | 2026-09-21 | Capture ideas, anywhere: the Ideas manager brings an idea backlog straight into the DSH Web GUI. |
| 61 | [elanski/dsh-failover-continue](https://github.com/elanski/dsh-failover-continue) | 0 | 2026-09-21 | 2026-09-21 | Unified auto-continue + model failover plugin for DeepSeek Harness (RU/EN settings card) |
| 62 | [ElioChen240/dsh-prompt-studio](https://github.com/ElioChen240/dsh-prompt-studio) | 0 | 2026-09-21 | 2026-09-21 | Prompt & Agent Preset Evolution Studio for DeepSeek Harness: Git-style versioning, diff timeline, golden test bench, and one-click regression evaluation. |
| 63 | [enderzcx/spire-ctl](https://github.com/enderzcx/spire-ctl) | 0 | 2026-09-21 | 2026-09-21 | Verified control surface for Slay the Spire 2: a JSON state contract, legal actions, and no-replay execution for any agent harness. Zero npm dependencies. |
| 64 | [fangqian616/dsh-say](https://github.com/fangqian616/dsh-say) | 0 | 2026-09-17 | 2026-09-21 | Give your DSH, speak and report in a voice you like！让你的 DSH 用你喜欢的声音开口说话、汇报内容！ |
| 65 | [Gdenich/dsh-opencode-go-key-broker](https://github.com/Gdenich/dsh-opencode-go-key-broker) | 0 | 2026-09-21 | 2026-09-21 | DSH plugin: OpenCode Go API-key pool with quota-driven automatic switching, a Settings tab and a composer quota badge. |
| 66 | [Gdenich/dsh-ru-ui](https://github.com/Gdenich/dsh-ru-ui) | 0 | 2026-09-21 | 2026-09-21 | Russian interface translation for DeepSeek Harness (DSH): 2581 strings across 49 namespaces, adds Русский to the language picker, activates on first run. Translation only. |
| 67 | [GooDAnDReaDY/dsh-web-gateway](https://github.com/GooDAnDReaDY/dsh-web-gateway) | 0 | 2026-09-20 | 2026-09-21 | Resilient web search and page extract tools for DeepSeek Harness with provider fallback and SSRF-safe extract |
| 68 | [Grant-Felix/dev-rules](https://github.com/Grant-Felix/dev-rules) | 0 | 2026-09-21 | 2026-09-21 | DSH（DeepSeek Harness）个人插件：把你的项目开发规则交给 agent —— 右侧栏面板可视化维护（全局 + 按项目），并自动注入每个会话的系统提示。 |
| 69 | [hi-wenw/dsh-csv-viewer](https://github.com/hi-wenw/dsh-csv-viewer) | 0 | 2026-09-21 | 2026-09-21 | DSH Web CSV and TSV table viewer with search, sorting, raw mode, and virtualized rows |
| 70 | [hirohana77/dsh-plugin-trajectory-tracker](https://github.com/hirohana77/dsh-plugin-trajectory-tracker) | 0 | 2026-09-21 | 2026-09-21 | 让你更清楚地了解究竟是什么占据了你的等待耗时 ⏱️ DSH 实时时序轨迹与执行过程追踪插件 |
| 71 | [HoodyHuo/dsh-plugin-dracula-color-theme](https://github.com/HoodyHuo/dsh-plugin-dracula-color-theme) | 0 | 2026-09-21 | 2026-09-21 | DSH (DeepSeek Harness) Web GUI 主题插件：官方 Dracula 配色，覆盖 alias + specific 两层 design token 与 shiki 语法高亮，并可接管系统主题偏好。Official Dracula theme (draculatheme.com) for the DeepSeek Harness web GUI. |
| 72 | [HoodyHuo/dsh-plugin-glm-balance](https://github.com/HoodyHuo/dsh-plugin-glm-balance) | 0 | 2026-09-21 | 2026-09-21 | DSH (DeepSeek Harness) Web GUI 插件：在输入框旁显示智谱 GLM（bigmodel.cn）套餐额度条 —— 小时/周额度、点击刷新、右键菜单，并自带「GLM 余额」设置分区（authorization、供应商 ID、自动刷新间隔，默认 30 分钟）。GLM coding-plan quota indicator for the DeepSeek Harness web GUI. |
| 73 | [hoyyang/dsh-best-ponytail](https://github.com/hoyyang/dsh-best-ponytail) | 0 | 2026-09-21 | 2026-09-21 | Ponytail lazy-senior-dev ruleset for DeepSeek Harness: 7-rung minimal-code ladder, six skills (review/audit/debt/gain/help), /ponytail session command, optional always-on injection. MIT, upstream unmodified. |
| 74 | [ig50-service/ig50-skill](https://github.com/ig50-service/ig50-skill) | 0 | 2026-09-03 | 2026-09-21 | IG50 官方 Agent Skill：340 个股票数据集本地落盘（A股/港股/美股/基金），行情/K线/F10 查询与量化回测。兼容 Claude Code 与 DeepSeek Harness (dsh)。 |
| 75 | [itchenshi/dsh-gui-last-session](https://github.com/itchenshi/dsh-gui-last-session) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness plugin: reopen the conversation you were last in after a restart, without patching engine files |
| 76 | [itchenshi/dsh-keys-setting](https://github.com/itchenshi/dsh-keys-setting) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness plugin: choose whether Enter / Shift+Enter / Ctrl/Cmd+Enter sends the message or inserts a line break |
| 77 | [itchenshi/dsh-model-surplus](https://github.com/itchenshi/dsh-model-surplus) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness plugin: model usage & account balance in the session header (OpenCode Go plan usage + DeepSeek account balance) |
| 78 | [itchenshi/dsh-opencode-go-path](https://github.com/itchenshi/dsh-opencode-go-path) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness plugin: declares the OpenCode Go route wire protocol, auto-adds DeepSeek V4.1 models, and attaches the x-opencode-session header |
| 79 | [jack1545/dsh-weixin-reader](https://github.com/jack1545/dsh-weixin-reader) | 0 | 2026-09-21 | 2026-09-21 | WeChat Official Account article reader for DeepSeek Harness: parses mp.weixin.qq.com article bodies into clean Markdown |
| 80 | [johnny-ggao/trading-agent](https://github.com/johnny-ggao/trading-agent) | 0 | 2026-09-21 | 2026-09-21 | trading agent for dsh |
| 81 | [jonah791/dsh-dream-tavern](https://github.com/jonah791/dsh-dream-tavern) | 0 | 2026-09-21 | 2026-09-21 | 基于 DeepSeek Harness 的文字游戏宿主：每次模型请求都产出逐字节可验的上下文装配单（SillyTavern 人物卡/世界书迁移 + 三 Agent 职责互斥 + 原子回退） |
| 82 | [kai-GitHubaccount/dsh-usage-panel](https://github.com/kai-GitHubaccount/dsh-usage-panel) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek 余额 + Token 用量面板（DSH Web）：三级预警、自定义阈值、一键充值、缓存命中率 ｜ Balance & usage panel for DeepSeek Harness |
| 83 | [kingzhz/dsh-global-rules](https://github.com/kingzhz/dsh-global-rules) | 0 | 2026-09-21 | 2026-09-21 | Global AGENTS-style rules as many independent markdown files, with a settings GUI — fills the gap left by DeepSeek Harness's single hard-coded global AGENTS.md. |
| 84 | [kira905/dsh-diagnostic-tools](https://github.com/kira905/dsh-diagnostic-tools) | 0 | 2026-09-21 | 2026-09-21 | DSH diagnostic tools: dependency-closure & decoupling checks + chat image attachment reconciliation. Zero deps, read-only, reproducible \| DSH 诊断取证工具组：依赖闭包/解耦体检 + 会话图片附件对账，零依赖只读 |
| 85 | [kira905/dsh-ecosystem-panel](https://github.com/kira905/dsh-ecosystem-panel) | 0 | 2026-09-21 | 2026-09-21 | DSH plugin: read-only ecosystem health panel - bundle / patch / skill / upgrade / decoupling diagnosis in one view \| DSH 插件：只读生态健康面板，六类体检一屏看完 |
| 86 | [kira905/dsh-session-title-live](https://github.com/kira905/dsh-session-title-live) | 0 | 2026-09-21 | 2026-09-21 | DSH plugin: live session titles with state prefixes (running/done), pin-safe and fully configurable \| DSH 插件：会话标题实时刷新 + 状态前缀，pin 安全、可配置 |
| 87 | [kira905/dsh-task-board-local](https://github.com/kira905/dsh-task-board-local) | 0 | 2026-09-21 | 2026-09-21 | DSH plugin: self-maintained task board for the DSH web GUI (fork of upstream 0.3.4, detached). A card is a real DSH session, and a human confirms completion rather than the runner. \| DSH 插件：自维护任务看板——一张卡 = 一次真实 DSH 会话，跑完由人验收才算完成 |
| 88 | [KyattoCat/dsh-skills-mcp-panel](https://github.com/KyattoCat/dsh-skills-mcp-panel) | 0 | 2026-09-21 | 2026-09-21 | Skills & MCP panel for the DeepSeek Harness Web GUI: grouped by origin, searchable, hot-toggleable. |
| 89 | [LAwLi3tCoding/dsh-api-ledger](https://github.com/LAwLi3tCoding/dsh-api-ledger) | 0 | 2026-09-21 | 2026-09-21 | DSH API usage and cost ledger with per-pool reports and CNY/USD display |
| 90 | [lijiawei255/dsh-status-chime](https://github.com/lijiawei255/dsh-status-chime) | 0 | 2026-09-20 | 2026-09-21 | Spoken status alerts for DeepSeek Harness where clip LENGTH encodes urgency: a 2s approval chime vs an 8s failure announcement. Eight scenes, zero third-party dependencies on Windows 10/11. · DSH 语音状态提示：用时长编码紧急度，零第三方依赖。 |
| 91 | [liuyuguo99/dsh-task-todo](https://github.com/liuyuguo99/dsh-task-todo) | 0 | 2026-09-21 | 2026-09-21 | Todo & task manager for DeepSeek Harness (dsh): list / board / calendar / gantt, subtasks, recurrence; the same data is exposed to the agent as tools and a slash command. |
| 92 | [LuminariSoftwares/context-guardian](https://github.com/LuminariSoftwares/context-guardian) | 0 | 2026-08-13 | 2026-09-21 | Compaction for local models that actually fires and never bricks the session. OpenAI-compatible proxy + DeepSeek Harness engine. |
| 93 | [LuminariSoftwares/tool-guardian](https://github.com/LuminariSoftwares/tool-guardian) | 0 | 2026-08-29 | 2026-09-21 | Your MCP servers for ~300 tokens instead of ~28,000. MCP server + native DeepSeek Harness bundle. |
| 94 | [lxy271713/dsh-openai-account-connector](https://github.com/lxy271713/dsh-openai-account-connector) | 0 | 2026-08-31 | 2026-09-21 | OpenAI account model and image connector for DeepSeek Harness |
| 95 | [magian1127/GodotMCP](https://github.com/magian1127/GodotMCP) | 0 | 2026-09-21 | 2026-09-21 | Godot MCP |
| 96 | [MaRi23333/dsh-agent-instructions-editor](https://github.com/MaRi23333/dsh-agent-instructions-editor) | 0 | 2026-09-14 | 2026-09-21 | Edit global and project instruction files in DeepSeek Harness settings. 个性化指令编辑器：全局与项目指令、字节预算和保存冲突提示。 |
| 97 | [Marquez807/dsh-experience-memory](https://github.com/Marquez807/dsh-experience-memory) | 0 | 2026-09-20 | 2026-09-21 | Cross-session experience memory for DSH: a lesson reaches the model only with a verifiable source, relevant ones are injected each turn, and what nobody uses is retired. |
| 98 | [Martlet-Tech/dsh-approval-explain](https://github.com/Martlet-Tech/dsh-approval-explain) | 0 | 2026-09-21 | 2026-09-21 | Explain what a pending dsh approval will actually do, with one LLM call: an Explain button beside Allow/Reject in the DeepSeek Harness Web GUI. |
| 99 | [metabolism-tools/dsh-metabolic-maintenance](https://github.com/metabolism-tools/dsh-metabolic-maintenance) | 0 | 2026-09-21 | 2026-09-21 | Native Cordis skill-provider plugin for DeepSeek Harness: evidence-aware maintenance instructions (packaged from the workspace-metabolism repository) |
| 100 | [mia-wong1016/dsh-codex-plus](https://github.com/mia-wong1016/dsh-codex-plus) | 0 | 2026-09-21 | 2026-09-21 | Codex（ChatGPT Plus/Pro）订阅接入 DSH：展示 5 小时与一周额度、重置时间与重置券并支持一键重置；读取额度时自动把订阅模型接进模型选择器；access token 到期前自动续期。无需填写 API key。Codex (ChatGPT Plus/Pro) subscription for DSH: quota panel with one-click reset, subscription model routing, and token upkeep. |
| 101 | [mikasa-servent/dsh-research-check](https://github.com/mikasa-servent/dsh-research-check) | 0 | 2026-09-21 | 2026-09-21 | Deliverable evidence-chain & conformance checks for DSH — turn requirements into an executable spec, trace every number to a provenance ledger, audit PDF/OOXML metadata and archive manifests. MCP-ready. |
| 102 | [mikugui/dsh-session-eater](https://github.com/mikugui/dsh-session-eater) | 0 | 2026-09-20 | 2026-09-21 | 会话清理（喂鱼）：把「余额小胖鱼挂件」放进左侧会话列表底部，拖一条会话到它嘴边就会被吃掉（移入回收站，可撤销）。点图标直达设置；删除前确认可在设置里关掉；15 段界面文案可自定义；撤销有回执与 12 条持久台账两条路。 |
| 103 | [Mirfakk/dsh-plugin-usage](https://github.com/Mirfakk/dsh-plugin-usage) | 0 | 2026-09-21 | 2026-09-21 | DSH 额度面板：输入框下方实时显示本会话消费金额（官方峰谷分时计价）、token 用量与 DeepSeek 账户余额。 |
| 104 | [MosesCharm/dsh-sidebar-stack](https://github.com/MosesCharm/dsh-sidebar-stack) | 0 | 2026-09-20 | 2026-09-21 | Stack DSH sidebar footer actions vertically — no more cramped single row for cost-meter / context plugins |
| 105 | [mrbeandev/dsh-flowglass](https://github.com/mrbeandev/dsh-flowglass) | 0 | 2026-09-20 | 2026-09-21 | English-only Flowglass plugin for DeepSeek Harness, based on Iwctwbh/dsh-flowglass |
| 106 | [nengong-ai/dsh-keychain-credentials](https://github.com/nengong-ai/dsh-keychain-credentials) | 0 | 2026-09-21 | 2026-09-21 | Pure JavaScript macOS Keychain provider for DeepSeek Harness (DSH) ctx.credentials, supporting both refs and records without plaintext credential storage on disk. |
| 107 | [pearjelly/deep-blend](https://github.com/pearjelly/deep-blend) | 0 | 2026-09-13 | 2026-09-21 | Blender 3D animation workbench for DeepSeek Harness (dsh): SceneSpec is the source of truth and .blend is a compiled artifact — 16 tools for scene specs, previews, visual review and delivery renders. |
| 108 | [perdakovich/dsh-plugin-prompt-edit](https://github.com/perdakovich/dsh-plugin-prompt-edit) | 0 | 2026-09-21 | 2026-09-21 | click the pencil, edit your text, enjoy |
| 109 | [PerryLink/dsh-laya](https://github.com/PerryLink/dsh-laya) | 0 | 2026-09-21 | 2026-09-21 | Laya decision engine as a first-class Cordis service and model-visible tools for DeepSeek Harness. |
| 110 | [pinzza/dsh-git-statusline](https://github.com/pinzza/dsh-git-statusline) | 0 | 2026-09-13 | 2026-09-21 | DSH Web 侧边栏底部的紧凑 Git 状态插件，参考 ccstatusline-zh 的 Git widgets |
| 111 | [qaz040619/dsh-bluefatfish](https://github.com/qaz040619/dsh-bluefatfish) | 0 | 2026-09-21 | 2026-09-21 | 大肥鱼 |
| 112 | [rbviz/dsh-plugin-jules](https://github.com/rbviz/dsh-plugin-jules) | 0 | 2026-09-20 | 2026-09-21 | Google Jules as a DeepSeek Harness capability — delegate coding tasks to the remote agent, watch them in the background, approve plans, and land the diff. |
| 113 | [rezon-aki/dsh-streamfold](https://github.com/rezon-aki/dsh-streamfold) | 0 | 2026-09-21 | 2026-09-21 | 流式折叠：一个更好的 DSH 会话窗口——最新思考小窗自动展开、旧窗与工具调用跑完自动折起；思考小窗底边与正文写头带火星特效。零依赖、零构建。 |
| 114 | [S-AN-Shu/dsh-progress-narrator](https://github.com/S-AN-Shu/dsh-progress-narrator) | 0 | 2026-09-21 | 2026-09-21 | Quiet progress narration and folding compatibility for DeepSeek Harness |
| 115 | [Saretheya/dsh-tick](https://github.com/Saretheya/dsh-tick) | 0 | 2026-09-20 | 2026-09-21 | Session-local scheduled tasks for DeepSeek Harness: inject a prompt into the current session after a delay, at a fixed time, or on a repeating interval — with a Web management panel, a /schedule command, and model-facing management tools. |
| 116 | [slow-stack/euthyna](https://github.com/slow-stack/euthyna) | 0 | 2026-09-19 | 2026-09-21 | ⚖️ The audit AI coding agents can't skip — deterministic facts (git history, test coverage) and six-gate claim adjudication for code security audits. Not another scanner. |
| 117 | [sqzssg12138/dsh-service-runner](https://github.com/sqzssg12138/dsh-service-runner) | 0 | 2026-09-21 | 2026-09-21 | 为 DSH (DeepSeek Harness) 加上 IDEA 风格的工作区服务启停面板：多工作区隔离、Node/Java/Python/Docker 自动探测、实时日志与端口占用者处置。 |
| 118 | [SugarFatFree/dsh-agent-extension](https://github.com/SugarFatFree/dsh-agent-extension) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness plugin for workspace commands, skills, and path-scoped rules. |
| 119 | [tynr426/dsh-relationship](https://github.com/tynr426/dsh-relationship) | 0 | 2026-09-18 | 2026-09-21 | Local-first relationship-memory workbench for DeepSeek Harness: AI 写入全过确认门，素材溯源归档，记忆聚合出时间线/时机/回礼视图，零生产依赖 |
| 120 | [Underwater008/deepshell](https://github.com/Underwater008/deepshell) | 0 | 2026-09-20 | 2026-09-21 | A native macOS shell for the official DeepSeek Harness. No Electron, no telemetry, no vendor gateway — ~150 lines of Swift + one bash script. |
| 121 | [vianvio/dsh-assistant](https://github.com/vianvio/dsh-assistant) | 0 | 2026-09-21 | 2026-09-21 | DSH小助手：原生 Swift 悬浮窗 + DSH 会话状态驱动，含素材管线与日报 |
| 122 | [vlln/evo-engineering](https://github.com/vlln/evo-engineering) | 0 | 2026-09-21 | 2026-09-21 | 让 agent 把任意产物（文档、代码、skill）一轮轮改得更好：先定标准，再自动改进与独立评审，人类随时能看、能喊停、能回滚（DeepSeek Harness 插件） |
| 123 | [VoidPrim/dsh-wsl-windows-folder-picker](https://github.com/VoidPrim/dsh-wsl-windows-folder-picker) | 0 | 2026-09-21 | 2026-09-21 | Windows folder picker for dsh on WSL |
| 124 | [wanghuiym123/dsh-cherry-kb](https://github.com/wanghuiym123/dsh-cherry-kb) | 0 | 2026-09-21 | 2026-09-21 | Knowledge-base and memory switch for dsh web — two composer controls and two settings pages, backed by 22 /dsh/kb/* routes. Requires the local 我的知识库 toolchain (记忆开关 / idx / cherry). |
| 125 | [wee-b/disk-sentinel](https://github.com/wee-b/disk-sentinel) | 0 | 2026-09-09 | 2026-09-21 | DeepSeek Harness disk analysis and safe cleanup plugin for Windows. |
| 126 | [wg5759/dsh-pager](https://github.com/wg5759/dsh-pager) | 0 | 2026-09-21 | 2026-09-21 | DeepSeek Harness 的手机寻呼机：33 KB 安卓 App + DSH 插件。后台提醒、通知栏直接审批、服务端折叠省流量。A pager for DeepSeek Harness (unofficial). |
| 127 | [why-did/dsh-tailscale-access](https://github.com/why-did/dsh-tailscale-access) | 0 | 2026-09-20 | 2026-09-21 | Remote access for the DeepSeek Harness Web GUI via Tailscale or cloudflared — early-stage, read the notice first. |
| 128 | [wjw99830/dsh-plugin-noema](https://github.com/wjw99830/dsh-plugin-noema) | 0 | 2026-09-21 | 2026-09-21 | Focus code review on complexity changes after each coding task. |
| 129 | [WONGIII/dsh-effort-dial](https://github.com/WONGIII/dsh-effort-dial) | 0 | 2026-09-21 | 2026-09-21 | A reasoning-effort dial for the DeepSeek Harness composer: a violet particle field with meteors, magnetic level anchors and an eased circular thumb. |
| 130 | [wowyuarm/dsh-context-continuity](https://github.com/wowyuarm/dsh-context-continuity) | 0 | 2026-09-21 | 2026-09-21 | The context-continuity engine for DeepSeek Harness: a subject's context lived as one continuous timeline across many physical Sessions — rollover, checkpoints, and lineage. |
| 131 | [wpeng77/dsh-llm-trace](https://github.com/wpeng77/dsh-llm-trace) | 0 | 2026-09-21 | 2026-09-21 | Wire-level LLM inspector for DeepSeek Harness: capture the raw HTTP request and response bodies of every model provider call, attributed per session, in a Conversation View tab and a loopback viewer page. |
| 132 | [XiaoMao-yty/dsh-netease-music](https://github.com/XiaoMao-yty/dsh-netease-music) | 0 | 2026-09-21 | 2026-09-21 | 网易云音乐 DSH 插件：单曲/MV/歌词/笔记/歌手/图片抓取，歌单管理，以及 AI 私人电台策展。零 npm 依赖。 |
| 133 | [xydijkkk/dsh-voredteam](https://github.com/xydijkkk/dsh-voredteam) | 0 | 2026-09-21 | 2026-09-21 | dsh-voredteam｜DSH 插件形态的单模式安全作战系统：黑板（Fact/Intent/Hint）+ 六阶段六矩阵作业法 + 总控与 12 个专业子 agent + 作战面板（八泳道实时图 / 覆盖矩阵 / 按会话分类）。唯一门禁：禁 DDoS、禁爆破、模糊测试低频化。 |
| 134 | [YLL-KB/dsh-video-to-notes](https://github.com/YLL-KB/dsh-video-to-notes) | 0 | 2026-09-21 | 2026-09-21 | Opt-in DeepSeek Harness skill bundle that turns course, lecture, tutorial, documentary, meeting, and talk videos into structured study notes. |
| 135 | [YMRwithNoworry/dsh-global-system-prompt](https://github.com/YMRwithNoworry/dsh-global-system-prompt) | 0 | 2026-09-21 | 2026-09-21 | Global prompt for DeepSeek Harness (dsh): one user-editable block injected into every conversation's system prompt, mirrored into each session project's AGENTS.md, and edited from the web settings panel. |
| 136 | [yueyexiayu/dsh-shengcheng](https://github.com/yueyexiayu/dsh-shengcheng) | 0 | 2026-09-21 | 2026-09-21 | DSH desktop plugin: generate images with logged-in Grok/GPT accounts, and videos with Grok |
| 137 | [Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | 0 | 2026-09-21 | 2026-09-21 | DSH 鱼的记忆：给会话一份会淡忘的长期记忆，每条都带时间 |
| 138 | [zfdx123/dsh-atelier](https://github.com/zfdx123/dsh-atelier) | 0 | 2026-09-21 | 2026-09-21 | DSH 插件工坊：7 个可独立安装的 DeepSeek Harness 插件（MCP 管理器 / 技能管理器 / 跨会话记忆 / 代码图谱 / 钩子排序 / 会话清理 / Superpowers） |
| 139 | [zhanghao3693/dsh-client-ui-model-clock](https://github.com/zhanghao3693/dsh-client-ui-model-clock) | 0 | 2026-09-21 | 2026-09-21 | Model usage clock for DeepSeek Harness — see which model is cheapest right now: off-peak windows, tiered discounts and limited campaigns on an all-day cost heatmap · DSH 模型使用时钟 |
| 140 | [zhanghao3693/dsh-llm-router](https://github.com/zhanghao3693/dsh-llm-router) | 0 | 2026-08-15 | 2026-09-21 | Task-aware auto model router for DeepSeek Harness |
| 141 | [zhangnan/dsh-chatgpt-oauth](https://github.com/zhangnan/dsh-chatgpt-oauth) | 0 | 2026-09-21 | 2026-09-21 | ChatGPT OAuth login and Codex usage for DeepSeek Harness |
| 142 | [zhy5/wxbridge](https://github.com/zhy5/wxbridge) | 0 | 2026-09-21 | 2026-09-21 | DSH plugin: connect WeChat (official iLink/ClawBot) to DeepSeek Harness — live status settings panel + bundled bridge/keeper kernel |
| 143 | [zjbc2000/attention-plugins](https://github.com/zjbc2000/attention-plugins) | 0 | 2026-09-21 | 2026-09-21 | 🔔 Smart session notifications for DeepSeek Harness (DSH): 4 event types (completed/failed/question/permission), ⭐ main-line/side-line alerts, Web Audio sounds, browser notifications |
| 144 | [zsspub/dsh-personal-todo](https://github.com/zsspub/dsh-personal-todo) | 0 | 2026-08-28 | 2026-09-21 | SQLite-backed personal todo tools and Web panel for DeepSeek Harness |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- AgentsDanceAI/deepseek-harness-cloud
- xiaomao49/dsh-wiki-bridge
