# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-02**
- 快照日期 / Snapshot date: **2026-11-02 (UTC)**
- 待审核 / Pending: **363**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **31**
- Star 异常增长 / Star-growth alerts: **12** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-01** / vs previous snapshot **2026-11-01**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [yjl9903/AnimeGarden](https://github.com/yjl9903/AnimeGarden) | 待审 / pending | 1391 | — | 47 | 1303d | 待审高星 | 核准即 Top 16 |
| ⚠️ [poco-ai/Agentero](https://github.com/poco-ai/Agentero) | 待审 / pending | 1072 | — | 83 | 117d | 待审高星 | 核准即榜 #22 |
| ⚠️ [lxj5820/dsh-boot-animation](https://github.com/lxj5820/dsh-boot-animation) | 待审 / pending | 313 | — | 28 | 31d | 待审高星 | 核准即榜 #78 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 57248 | +1583 | 1559 | 38d | 日增百星 | 日增 +1583★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5101 | +267 | 475 | 25d | 日增百星 | 日增 +267★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 4665 | +188 | 96 | 77d | 日增百星 | 日增 +188★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10295 | +184 | 396 | 79d | 日增百星 | 日增 +184★；已不进榜单 |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 5347 | +145 | 430 | 79d | 日增百星 | 日增 +145★ |
| ⚠️ [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) | 已核准 / approved | 161 | +145 | 8 | 0d | 日增百星、新入 Top 200 | 日增 +145★；新入 Top 200 #147；创建 0 天 |
| ⚠️ [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) | 已核准 / approved | 5887 | +136 | 452 | 147d | 日增百星 | 日增 +136★；已不进榜单 |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 3708 | +136 | 310 | 87d | 日增百星 | 日增 +136★；已不进榜单 |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 1318 | +117 | 118 | 79d | 日增百星 | 日增 +117★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [yjl9903/AnimeGarden](https://github.com/yjl9903/AnimeGarden) ⚠️ | 1391 | 2023-04-08 | 2026-11-02 | 動漫花園 镜像站 \| 动画 BT 资源聚合站 \| 动画 BT 资源开放接口 |
| 2 | [poco-ai/Agentero](https://github.com/poco-ai/Agentero) ⚠️ | 1072 | 2026-07-07 | 2026-11-02 | Unified research workspace for humans &amp; agents — PDF Q&amp;A with citations, Vault, writing. 为人与 Agent 协作的科研工作台；补齐 Zotero 时代的人机上下文断点。 |
| 3 | [lxj5820/dsh-boot-animation](https://github.com/lxj5820/dsh-boot-animation) ⚠️ | 313 | 2026-10-01 | 2026-11-02 | DSH plugin: replaces the kernel boot page with a full-window video clip, then dissolves into the app. 中文说明见 MANUAL.md |
| 4 | [woniuniuniu/dsh-media-desk](https://github.com/woniuniuniu/dsh-media-desk) | 52 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 自媒体工作台插件：一句话记灵感，一键生成脚本、封面、配图和分镜 |
| 5 | [Swd146296/dsh-memos-bridge](https://github.com/Swd146296/dsh-memos-bridge) | 21 | 2026-08-20 | 2026-11-02 | DeepSeek Harness bundle that bridges the MemOS memory service into the agent over MCP: persistent memory tools (mcp__memos__*), with start-up preflight and host-run endpoint resolution. |
| 6 | [Lain-in-coding/dsh-grok-search](https://github.com/Lain-in-coding/dsh-grok-search) | 7 | 2026-11-02 | 2026-11-02 | 为 DeepSeek Harness 接入可视化 Grok 主搜索与 Tavily、Exa、TinyFish、Firecrawl 自动回退，复用 grok-search-rs。 |
| 7 | [c4i890/dsh-wetflow](https://github.com/c4i890/dsh-wetflow) | 5 | 2026-11-02 | 2026-11-02 | A biological research workbench plugin for DeepSeek Harness |
| 8 | [easychen/dsh-workspace-recent-sort](https://github.com/easychen/dsh-workspace-recent-sort) | 4 | 2026-11-02 | 2026-11-02 | DeepSeek Harness sidebar plugin: recent Workspace ordering, compact conversations with hover, running-task visibility, and scroll-to-selected. Available on npm. |
| 9 | [jerryxff26-alt/delivery-board](https://github.com/jerryxff26-alt/delivery-board) | 4 | 2026-10-08 | 2026-11-02 | Plan, owners, status &amp; handoffs in one delivery.json next to your code. No SaaS. Diffable in PRs. |
| 10 | [LeoLourson/MacroStress-DSH](https://github.com/LeoLourson/MacroStress-DSH) | 3 | 2026-10-29 | 2026-11-02 | Portfolio stress tests under macro scenarios: a Bayesian VAR with stochastic volatility drives the paths, and loss percentiles with expected shortfall come back over MCP. |
| 11 | [Lin-AxiomSight/dsh-zh-layer](https://github.com/Lin-AxiomSight/dsh-zh-layer) | 3 | 2026-11-01 | 2026-11-02 | A toggleable bilingual layer for DSH: Chinese names + English originals for plugins, commands and skills · DSH 的双语覆盖层：为插件、命令与 Skill 叠加中文名和功能说明，三种显示模式，英文原版一键开关。 |
| 12 | [AngelosZou/dsh-homepage](https://github.com/AngelosZou/dsh-homepage) | 2 | 2026-11-01 | 2026-11-02 | Gives DSH one place to browse and enter its auxiliary features. It adds an extra surface to DSH that presents different content as cards. Reviewing and installing an external plugin, checking the DSH core version and updating it in one click, and more. Any external plugin can register its own. The artwork, layout and motion can be customized. |
| 13 | [forgotfish/dsh-cx-learn](https://github.com/forgotfish/dsh-cx-learn) | 2 | 2026-11-01 | 2026-11-02 | DSH 插件：超星学习通自动看课（CDP 驱动真实 Chromium） |
| 14 | [GXinnnnnn/dsh-SAO](https://github.com/GXinnnnnn/dsh-SAO) | 2 | 2026-11-02 | 2026-11-02 | 仿刀剑神域开屏动画，4K 早启动与独立渲染，不修改主题；DSH 添加插件输入 github:GXinnnnnn/dsh-SAO |
| 15 | [han8421/dsh-desktop-ball](https://github.com/han8421/dsh-desktop-ball) | 2 | 2026-11-02 | 2026-11-02 | 加一颗可自定义 图标和背景 的桌面悬浮球：点一下，在独立窗口里对话  |
| 16 | [RayrunOS/dsh-rayrun-computer](https://github.com/RayrunOS/dsh-rayrun-computer) | 2 | 2026-11-01 | 2026-11-02 | Rayrun cloud computers for DeepSeek Harness: create, manage and open remote Linux desktops (noVNC) in the sidebar, and hand agent tasks to the same machines with rayrun_* tools. Per-session cloud/local routing, password or WeChat login, token kept in the Harness vault. |
| 17 | [stilla-maris/dsh-quote-ask](https://github.com/stilla-maris/dsh-quote-ask) | 2 | 2026-11-02 | 2026-11-02 | Quote it, ask it — in your main chat or a clean side chat. For DeepSeek Harness Desktop. |
| 18 | [ycp424c/dsh-feishu](https://github.com/ycp424c/dsh-feishu) | 2 | 2026-10-28 | 2026-11-02 | Community DSH Feishu/Lark bot foundation with durable sessions, isolated workspace tools, approvals and optional workplace APIs. |
| 19 | [147-sys/dsh-memory-rules](https://github.com/147-sys/dsh-memory-rules) | 1 | 2026-11-02 | 2026-11-02 | Local SQLite long-term memory and editable prompt rules for DeepSeek Harness. No network, no telemetry. |
| 20 | [27painter/dsh-nx](https://github.com/27painter/dsh-nx) | 1 | 2026-10-31 | 2026-11-02 | Siemens NX 2406 / 2506 / 12 for DeepSeek Harness and Codex: an executor that judges a journal run, a release-aware probe, and 16 typed tools. |
| 21 | [a307608689-afk/dsh-session-trash](https://github.com/a307608689-afk/dsh-session-trash) | 1 | 2026-11-02 | 2026-11-02 | DSH 会话回收站插件：删除会话可恢复、文件留档、到期自动清理 |
| 22 | [akaydesu/dsh-language](https://github.com/akaydesu/dsh-language) | 1 | 2026-11-02 | 2026-11-02 | Community Turkish language pack for DeepSeek Harness. Turkish and English documentation, illustrated setup guides, and 2,909 UI strings. |
| 23 | [Aquarius07212/dsh-plugin-effort-panel](https://github.com/Aquarius07212/dsh-plugin-effort-panel) | 1 | 2026-11-02 | 2026-11-02 | Codex-style single-panel model and effort picker for the DeepSeek Harness composer |
| 24 | [Arid-G1FT/ctx-handoff-sentinel](https://github.com/Arid-G1FT/ctx-handoff-sentinel) | 1 | 2026-11-02 | 2026-11-02 | Behavioral context self-check before a handoff: DeepSeek Harness plugin + portable Agent Skill for Claude Code / Codex. |
| 25 | [ASUKAq01/dsh-background-image](https://github.com/ASUKAq01/dsh-background-image) | 1 | 2026-11-02 | 2026-11-02 | Custom background image for the DeepSeek Harness Web UI: upload an image, tune opacity and blur, no layout changes. |
| 26 | [BH8GCJ/dsh-xp-luna](https://github.com/BH8GCJ/dsh-xp-luna) | 1 | 2026-11-01 | 2026-11-02 | Windows XP Luna skin for DeepSeek Harness — Bliss desktop, blue taskbar sidebar, glass window and Luna titlebar. |
| 27 | [bingomu/dsh-image-zoom](https://github.com/bingomu/dsh-image-zoom) | 1 | 2026-11-02 | 2026-11-02 | In-chat image viewer for DeepSeek Harness: zoom, pan, gallery, auto-named downloads, open in default app. ｜ 聊天图片查看器：缩放、平移、图集、自动命名下载、系统默认应用打开。 |
| 28 | [bingomu/readable-diagrams](https://github.com/bingomu/readable-diagrams) | 1 | 2026-11-02 | 2026-11-02 | Diagrams a reader understands on first look — one JSON spec to a self-contained HTML page, with a machine-checked comprehension gate. DeepSeek Harness plugin + Claude Code / Codex skill. |
| 29 | [Blueteemo/dsh-audio-rail-macos](https://github.com/Blueteemo/dsh-audio-rail-macos) | 1 | 2026-11-02 | 2026-11-02 | macOS only: the DSH conversation rail pulses with whatever the Mac is playing — a real 12-band spectrum that only changes bar length. |
| 30 | [bychance6600/dsh-fish-river](https://github.com/bychance6600/dsh-fish-river) | 1 | 2026-11-02 | 2026-11-02 | 养一条会自己长大的鱼：没有人格设置，人格只能通过事件流长出来。DSH 插件 · 三层记忆 · QQ / B站私信 / 抖音 三个真实渠道。 |
| 31 | [CCCAUCHY/Plastic-Memories](https://github.com/CCCAUCHY/Plastic-Memories) | 1 | 2026-10-01 | 2026-11-02 | Experimental context management for DeepSeek Harness with reversible editing of the model-facing session surface. |
| 32 | [CorgiCorner/bisibility-dsh-plugin](https://github.com/CorgiCorner/bisibility-dsh-plugin) | 1 | 2026-11-02 | 2026-11-02 | Bisibility plugin for DeepSeek Harness - SEO rank tracking and AI visibility tools in the DSH sidebar. |
| 33 | [corvus-dsh/dsh-graft-slice](https://github.com/corvus-dsh/dsh-graft-slice) | 1 | 2026-11-02 | 2026-11-02 | DSH open-source ecosystem plugin (topic: dsh-plugin): physical handoff for long sessions — slice a closed log at its last turn/end into a zero-inheritance, cold-resumable session. No fork, no lossy compaction, crash-safe transaction journal. — DSH open-source ecosystem (topic: dsh-plugin) |
| 34 | [dsh-agent-roster/dsh-agent-roster](https://github.com/dsh-agent-roster/dsh-agent-roster) | 1 | 2026-10-29 | 2026-11-02 | Static agent roster and member-profile definitions for DSH, designed to compile validated role files into dsh-agent-teams members. |
| 35 | [dxxo77/DSH_plugin](https://github.com/dxxo77/DSH_plugin) | 1 | 2026-11-02 | 2026-11-02 | DSH 插件：在输入框下方的用量行左侧显示 DeepSeek 账户余额，字号字体字色与官方相同，可兼容dsh-plugin-wallpaper-engine插件，可展开普通余额 / 赠送额度明细，点击后可打开官方api网页。 |
| 36 | [easun-zhu/dsh-cap-manager](https://github.com/easun-zhu/dsh-cap-manager) | 1 | 2026-11-02 | 2026-11-02 | One panel for MCP servers, skills &amp; Claude Code plugins in the DeepSeek Harness (dsh) Web UI — scope-grouped cards with live status, import/export, and the official claude-plugins-official market. |
| 37 | [Existence001100/dsh-budget-guard-plugin](https://github.com/Existence001100/dsh-budget-guard-plugin) | 1 | 2026-10-31 | 2026-11-02 | 🏦 给 DSH (DeepSeek Harness) 的每次任务加一条预算线。支持按金额或 Token 限制消耗、自动拦截/手动放行，防止 Agent 过度消费。  🏦 Draws a budget line across every task in DSH (DeepSeek Harness). Cap consumption by CNY or token count, with auto-interception and burn-rate estimates to prevent runaway costs. |
| 38 | [FelixJiashengFu/dsh-academic-switch](https://github.com/FelixJiashengFu/dsh-academic-switch) | 1 | 2026-11-02 | 2026-11-02 | 让 AI 助手像审稿人一样工作：来源核查三遍、逻辑检查三遍、交付附核查记录。Claude Code / Codex / Antigravity / DeepSeek Harness · Academic Mode: a verification discipline for AI agents |
| 39 | [floatDreamWithSong/dsh-lifecycle](https://github.com/floatDreamWithSong/dsh-lifecycle) | 1 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 的锁屏、密码/OTP/Passkey 认证与服务生命周期管理插件 |
| 40 | [ForsakenDelusion/dsh-branchnest](https://github.com/ForsakenDelusion/dsh-branchnest) | 1 | 2026-10-27 | 2026-11-02 | BranchNest for DSH — project canvas and non-linear session management for DeepSeek Harness. |
| 41 | [hanranCode/dsh-loopscope](https://github.com/hanranCode/dsh-loopscope) | 1 | 2026-11-02 | 2026-11-02 | LOOPScope — agent loop &amp; trajectory visualization for DeepSeek Harness (DSH): interactive LOOP cards, phase rings, waterfall timing, token accounting, tool-call inspection and agent observability in the web UI. 中文：DeepSeek Harness 轨迹可视化 / 循环观察插件。 |
| 42 | [HaoQian-vary/dsh-wallpaper-skin](https://github.com/HaoQian-vary/dsh-wallpaper-skin) | 1 | 2026-11-02 | 2026-11-02 | Wallpaper backgrounds for DeepSeek Harness with manual Wallpaper Engine sync |
| 43 | [hengyun721/dsh-finalize](https://github.com/hengyun721/dsh-finalize) | 1 | 2026-11-02 | 2026-11-02 | Pre-delivery finalize pass for DSH: strips docx/pptx/xlsx/odf tool fingerprints, recomputes real statistics, and reports what it will not fabricate. |
| 44 | [huajikano/bibao](https://github.com/huajikano/bibao) | 1 | 2026-11-01 | 2026-11-02 | 比宝 · 拟人认知内核（DSH 插件）：四条神经科学定律 + snowluma QQ 感官 |
| 45 | [iemgnod/dsh-shark-bg](https://github.com/iemgnod/dsh-shark-bg) | 1 | 2026-11-02 | 2026-11-02 | 在 Harness Web 界面背景中游动的 ASCII 鲨鱼 |
| 46 | [IRwDONE/dsh-tool-call-leak-fix](https://github.com/IRwDONE/dsh-tool-call-leak-fix) | 1 | 2026-10-29 | 2026-11-02 | Fixes DSH's silent failure where a tool call never runs and its markup (bare invoke/parameter tags, antml:-prefixed, or a stray 'court') leaks into the reply as text: blocks damaged calls, self-heals in-turn, and after a fork voids the damaged output on the model-visible surface. Zero deps. |
| 47 | [Lee-Eee-Eee/dsh-remote-dock](https://github.com/Lee-Eee-Eee/dsh-remote-dock) | 1 | 2026-10-31 | 2026-11-02 | SSH and WSL remote workspaces for DeepSeek Harness. No-sudo setup, model config porting, and the remote UI in your local DSH. |
| 48 | [LeiYuXingZhou/dsh-preview-extra](https://github.com/LeiYuXingZhou/dsh-preview-extra) | 1 | 2026-11-01 | 2026-11-02 | DSH right-sidebar previews for 3D models, archives, media, fonts, subtitles, TOML, Intel HEX, JCAMP-DX, VCD, KiCad and DFU. |
| 49 | [leoan698-tom/dsh-sessivra](https://github.com/leoan698-tom/dsh-sessivra) | 1 | 2026-09-30 | 2026-11-02 | Session-to-session messaging with linked replies, native context references and conversation trees for DeepSeek Harness. |
| 50 | [little-fire9552/dsh-healthkit-report](https://github.com/little-fire9552/dsh-healthkit-report) | 1 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin for healthkit-report: adds a healthkit_report agent tool. |
| 51 | [LotusPrimeUmbra/dsh-plugin-tts](https://github.com/LotusPrimeUmbra/dsh-plugin-tts) | 1 | 2026-11-01 | 2026-11-02 | DeepSeek Harness 的 TTS 语音合成插件：小米 MiMo / Breeze 双协议合成、试听、克隆音色、唱歌，并可直接通过 OneBot 发 QQ 语音。 |
| 52 | [Lumivox-wiz/memory-lattice](https://github.com/Lumivox-wiz/memory-lattice) | 1 | 2026-11-02 | 2026-11-02 | DSH Desktop 记忆插件：本地优先的私密记忆库，含向量语义召回、导入/迁移、保留期限策略、端侧 LLM 摘要与加密增量备份 |
| 53 | [m1khal3v/dsh-openrouter-sync-models](https://github.com/m1khal3v/dsh-openrouter-sync-models) | 1 | 2026-11-02 | 2026-11-02 | Keep the DeepSeek Harness OpenRouter model list in sync with the OpenRouter catalog, including account presets |
| 54 | [MarsStorm/dsh-hierarchical-fishmemory](https://github.com/MarsStorm/dsh-hierarchical-fishmemory) | 1 | 2026-10-31 | 2026-11-02 | 属于我们的回忆 —— 给 DSH 的分层人格记忆插件 |
| 55 | [mojiezhenlinana/dsh-custom-profile](https://github.com/mojiezhenlinana/dsh-custom-profile) | 1 | 2026-11-02 | 2026-11-02 | 给 DeepSeek Harness 换掉左下角那块「头像 + 昵称」，顺手把设置 → 账号与余额卡片里的头像也一起换掉。  只改本机浏览器的显示，不动账号资料，不联网，不上报任何数据 |
| 56 | [mxw0808/dsh-cookie-guard](https://github.com/mxw0808/dsh-cookie-guard) | 1 | 2026-11-01 | 2026-11-02 | 每周一自动体检 DSH 登录 cookie，超过 40 条就备份清理，防止请求头被撑爆导致启动白屏；插件开关即计划任务开关。 |
| 57 | [NEVSTOP-LAB/dsh-gfm-alerts](https://github.com/NEVSTOP-LAB/dsh-gfm-alerts) | 1 | 2026-11-02 | 2026-11-02 | DSH GitHub 提示块插件：把回复里的 &gt; \[!NOTE\] / \[!TIP\] / \[!IMPORTANT\] / \[!WARNING\] / \[!CAUTION\] 渲染成 GitHub 风格。 |
| 58 | [NoneadChina/dsh-nonead-prompt-rewind](https://github.com/NoneadChina/dsh-nonead-prompt-rewind) | 1 | 2026-11-02 | 2026-11-02 | Conversation rewind for DeepSeek Harness: rewind the conversation to any earlier user message in one click, in the same window. No new branch, no window switch, with optional workspace-file restore — the full Claude Code /rewind semantics. |
| 59 | [plankton12138/dsh-darkSoulGuide](https://github.com/plankton12138/dsh-darkSoulGuide) | 1 | 2026-10-29 | 2026-11-02 | deepseek harness插件，黑暗之魂游戏攻略助手 |
| 60 | [qiaozheng9/dsh-side-chat](https://github.com/qiaozheng9/dsh-side-chat) | 1 | 2026-11-02 | 2026-11-02 | 独立的 DSH /side 侧边对话插件，支持模型、权限、目标与计划模式。 |
| 61 | [QIFANAI/dsh-startup-elisa](https://github.com/QIFANAI/dsh-startup-elisa) | 1 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 冷启动动画 + 毛玻璃皮肤插件（ELISA · FLOW 0.6.0）：黑幕开幕 / HUD 冷启动 / 交接转场 / 程序化音轨 / 四档皮肤；公开仓库不含第三方人物素材，缺失时按降级链运行。 |
| 62 | [qyy2005/dsh-session-trash](https://github.com/qyy2005/dsh-session-trash) | 1 | 2026-11-02 | 2026-11-02 | DSH（DeepSeek Harness）桌面版的两段式会话删除插件：会话行尾垃圾桶移入回收站（连同子智能体与派生对话家族），设置 → 回收站可恢复、彻底删除或清空；运行中的会话拒绝删除，恢复后自动挂回原工作区。纯 JS、无构建，MIT。 |
| 63 | [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 1 | 2026-11-02 | 2026-11-02 | MarkText (muya) WYSIWYG Markdown editor for the DeepSeek Harness right sidebar |
| 64 | [Sakura025/dsh-skill-picker](https://github.com/Sakura025/dsh-skill-picker) | 1 | 2026-11-02 | 2026-11-02 | Skill picker and in-app installer for the DeepSeek Harness composer: browse by lifecycle phase, search in Chinese or English, insert as /name, install from repo, URL, pasted text, or the skills.sh registry. |
| 65 | [SolvasHQ/dsh-theme](https://github.com/SolvasHQ/dsh-theme) | 1 | 2026-11-02 | 2026-11-02 | DSH Theme — lightweight theme colors, DIY palettes, fonts, and appearance personalization for the DeepSeek Harness Web GUI. DSH 主题插件。 |
| 66 | [Sunday530/dsh-sidebar-panel-collapse](https://github.com/Sunday530/dsh-sidebar-panel-collapse) | 1 | 2026-11-02 | 2026-11-02 | Collapsible sidebar panel list for DeepSeek Harness — one chevron toggle gives the workspace its height back. |
| 67 | [tenkrol/dsh_locale_ru](https://github.com/tenkrol/dsh_locale_ru) | 1 | 2026-10-11 | 2026-11-02 | Russian language pack for DeepSeek Harness — 65/65 namespaces, 2,914 strings, MIT |
| 68 | [TLEWA/dsh-sidebar-organizer](https://github.com/TLEWA/dsh-sidebar-organizer) | 1 | 2026-11-01 | 2026-11-02 | DeepSeek Harness (DSH) sidebar plugin: long-press drag to reorder the global panel strip, tuck panels into the More menu and drag them back. |
| 69 | [Wang341223/dsh-umbrella-startup](https://github.com/Wang341223/dsh-umbrella-startup) | 1 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 启动动画插件 · 生化危机保护伞公司主题（含音频素材） |
| 70 | [xiaobaga281/dsh-rea](https://github.com/xiaobaga281/dsh-rea) | 1 | 2026-11-02 | 2026-11-02 | 逆向分析 · DSH 插件：把 REA 的 207 个逆向工具延迟加载进 Agent 工具表，自带运行时解包、环境侧栏与 Ghidra/JADX/Apktool 一键准备 |
| 71 | [xiaoran0829/dsh-session-deliverables](https://github.com/xiaoran0829/dsh-session-deliverables) | 1 | 2026-11-02 | 2026-11-02 | DSH Web 插件：会话顶栏「文件」视图，列出本会话交付的文件（Word/Excel/PPT/图片/视频），一键按附件下载，内外网一致。 |
| 72 | [xinghailvzhe/memory-brain-graph-](https://github.com/xinghailvzhe/memory-brain-graph-) | 1 | 2026-11-02 | 2026-11-02 | 基于记忆库的可视化集成插件：光缆树/技能花 + 实验性自动反思与技能自动组装 |
| 73 | [xyzOvO/dsh-selfnote](https://github.com/xyzOvO/dsh-selfnote) | 1 | 2026-11-02 | 2026-11-02 | Self-narrative memory for DeepSeek Harness — the model writes notes to itself, kept across sessions and injected back. \| 自我叙述库：模型写给自己看的话，跨会话保留并每回合注入。 |
| 74 | [xyzOvO/dsh-wiki-notes](https://github.com/xyzOvO/dsh-wiki-notes) | 1 | 2026-11-02 | 2026-11-02 | Read-only Markdown knowledge-base retrieval for DeepSeek Harness \| 本地 Markdown 笔记库检索插件 |
| 75 | [yoinchen23-oss/dsh-message-branch](https://github.com/yoinchen23-oss/dsh-message-branch) | 1 | 2026-11-02 | 2026-11-02 | Inline editing of text prompts into new DSH conversation branches. |
| 76 | [yuchaos0927/dsh-opencode-local](https://github.com/yuchaos0927/dsh-opencode-local) | 1 | 2026-11-02 | 2026-11-02 | Use the models of your locally installed OpenCode client inside DeepSeek Harness — including free-tier models — without spoofing anything. |
| 77 | [YunaAloft/dsh-rtk-workbench](https://github.com/YunaAloft/dsh-rtk-workbench) | 1 | 2026-11-01 | 2026-11-02 | Brings rtk — which ships its own adapters for 20 agents, Claude Code included — to DeepSeek Harness: rewrite commands, compress tool output, binary bundled. |
| 78 | [zdj-1212/dsh-plugin-learning-mode](https://github.com/zdj-1212/dsh-plugin-learning-mode) | 1 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 学习模式插件：/learn 一句话生成完整学习资料与分阶段学习路线，状态持久化。 |
| 79 | [zengyuxiang0921/RemoteDSH](https://github.com/zengyuxiang0921/RemoteDSH) | 1 | 2026-11-02 | 2026-11-02 | 连接世界各地的蓝色大肥鱼！ |
| 80 | [ZhongYiSS/body-of-fish](https://github.com/ZhongYiSS/body-of-fish) | 1 | 2026-11-02 | 2026-11-02 | 本鱼陪伴 · 身体：一只住在 Windows 桌面上的蓝色大肥鱼（Electron 独立小窗，可接 DeepSeek Harness） |
| 81 | [zxzc114514/dsh-crash-guard](https://github.com/zxzc114514/dsh-crash-guard) | 1 | 2026-11-02 | 2026-11-02 | Startup crash guard for DeepSeek Harness (DSH): isolates broken frontend plugins, prevents white-screen launch crashes, and recovers cleanly with revision-bound quarantine. |
| 82 | [zzz123123lll/workflow-canvas-sidebar](https://github.com/zzz123123lll/workflow-canvas-sidebar) | 1 | 2026-11-02 | 2026-11-02 | Visual AI project workflows for DeepSeek Harness: sources, discussions, revisions and deliverables. |
| 83 | [ZZZ234234234/dsh-workbuddy-cny](https://github.com/ZZZ234234234/dsh-workbuddy-cny) | 1 | 2026-11-02 | 2026-11-02 | Show WorkBuddy credits and the DeepSeek CNY balance in one DSH sidebar line. The credit-to-CNY rate is measured from real token usage, not guessed. |
| 84 | [0changandui0/dsh-browser-tabs](https://github.com/0changandui0/dsh-browser-tabs) | 0 | 2026-11-02 | 2026-11-02 | DSH browser tab keeper: automatic cleanup with a settings panel |
| 85 | [0xyxy/dsh-purge](https://github.com/0xyxy/dsh-purge) | 0 | 2026-11-01 | 2026-11-02 | DSH 宿主策略补丁、提示词与规则管理、诊断、校验更新与本机备份回滚 · DeepSeek Harness 插件 |
| 86 | [13052293681-blip/dsh-facet-cards](https://github.com/13052293681-blip/dsh-facet-cards) | 0 | 2026-11-02 | 2026-11-02 | Facet cards (persona cards) for DSH sessions |
| 87 | [13576751971/dsh-memory-band](https://github.com/13576751971/dsh-memory-band) | 0 | 2026-11-02 | 2026-11-02 | Local three-band memory plugin for DeepSeek Harness: 24h protection band, query recall, scene replay, zero embedding/model calls. |
| 88 | [147-sys/dsh-local-skills](https://github.com/147-sys/dsh-local-skills) | 0 | 2026-11-02 | 2026-11-02 | Register user-level DSH skills (~/.dsh/skills) into the session catalog. |
| 89 | [147-sys/dsh-session-delete](https://github.com/147-sys/dsh-session-delete) | 0 | 2026-11-02 | 2026-11-02 | Delete a workspace session from the DSH sidebar, without ever touching memory storage. |
| 90 | [2090003781/bridge](https://github.com/2090003781/bridge) | 0 | 2026-11-02 | 2026-11-02 | Bridge: one plugin with two halves — an Obsidian plugin that exposes Obsidian capabilities over loopback HTTP, and a DSH plugin that drives sessions and injects vault notes into the system prompt. |
| 91 | [43aquarius/luna-threshold-cool](https://github.com/43aquarius/luna-threshold-cool) | 0 | 2026-11-02 | 2026-11-02 | 高频筛选后刻意冷却阈值，复苏判断心态 |
| 92 | [4444Hao/qiaodoc-dsh](https://github.com/4444Hao/qiaodoc-dsh) | 0 | 2026-11-01 | 2026-11-02 | 在 DeepSeek Harness 当前对话侧边栏打开文档，边阅读、边翻译、边提问。 |
| 93 | [5ysy/dsh-jingle-notch](https://github.com/5ysy/dsh-jingle-notch) | 0 | 2026-11-02 | 2026-11-02 | 鲸铃 Jingle · macOS notch companion for DeepSeek Harness: tool approvals, plan reviews, structured questions and live multi-session activity. |
| 94 | [Adingo001/dsh-agy-staff](https://github.com/Adingo001/dsh-agy-staff) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness bundle that hires agy-staff's personas as skills: /agy-ask, /agy-staffer, /agy-researcher, /agy-reviewer, /agy-implementer, /agy-lead, /agy-jobs. |
| 95 | [AKhasa9ov/reviewd](https://github.com/AKhasa9ov/reviewd) | 0 | 2026-11-02 | 2026-11-02 | Agent-native code review control plane: independent AI pre-review, inline human comments and fix-loop feedback for DSH, Claude Code, Codex and pi. |
| 96 | [alanzhao0128/dsh-web-search-gemini](https://github.com/alanzhao0128/dsh-web-search-gemini) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness web_search provider: Gemini Google Search grounding via CLIProxyAPI, with grounding redirect links resolved to real URLs |
| 97 | [alexkwok213/dsh-computer-use](https://github.com/alexkwok213/dsh-computer-use) | 0 | 2026-11-02 | 2026-11-02 | Computer Use for DeepSeek Harness — macOS desktop control with AX-first background actions, floating status capsule, inline window preview, and split-screen sessions |
| 98 | [almost-nowhere/dsh-antigravity](https://github.com/almost-nowhere/dsh-antigravity) | 0 | 2026-11-02 | 2026-11-02 | Google Antigravity model provider for DeepSeek Harness with multi-account pool and quota scheduling |
| 99 | [AlyceStocking/dsh-cgss-idol-theme](https://github.com/AlyceStocking/dsh-cgss-idol-theme) | 0 | 2026-08-15 | 2026-11-02 | CGSS idol themes for DeepSeek Harness: multi-character Web styling, immersive reading, and a Windows desktop companion |
| 100 | [amd47802574/dsh-session-fulltext-search](https://github.com/amd47802574/dsh-session-fulltext-search) | 0 | 2026-11-02 | 2026-11-02 | DSH plugin: enable full-text search over session history (SQLite FTS5) in the web sidebar |
| 101 | [Ananpng123/dsh-disk-manager](https://github.com/Ananpng123/dsh-disk-manager) | 0 | 2026-11-01 | 2026-11-02 | A Windows disk manager for the DeepSeek Harness right sidebar: volumes, folders, sizes, previews. |
| 102 | [anbulang/dsh-connect-teleagent](https://github.com/anbulang/dsh-connect-teleagent) | 0 | 2026-11-02 | 2026-11-02 | 把本机登录的 TeleAgent（天翼 AI 星辰超级智能体桌面端）模型接入 DeepSeek Harness 的插件：OpenAI 兼容 shim、真流式、多轮、图片、工具调用、思维链、积分。 |
| 103 | [Aonysen/dsh-memory-rag](https://github.com/Aonysen/dsh-memory-rag) | 0 | 2026-11-02 | 2026-11-02 | Long-term RAG memory for DeepSeek Harness: cloud, local Ollama, or offline BM25. |
| 104 | [aoyamabf-max/dsh-obsidian-memory](https://github.com/aoyamabf-max/dsh-obsidian-memory) | 0 | 2026-11-02 | 2026-11-02 | Obsidian-backed long-term memory for DeepSeek Harness: sidebar panel, BM25 search, token-budgeted context, optional GitHub sync. |
| 105 | [Asern-l/dsh-plugin-test-controller-public](https://github.com/Asern-l/dsh-plugin-test-controller-public) | 0 | 2026-11-02 | 2026-11-02 | Read-only public snapshot of a disposable test-run controller for DeepSeek Harness plugins (v1.11.3) |
| 106 | [astephengoo-arch/dsh-task-deck](https://github.com/astephengoo-arch/dsh-task-deck) | 0 | 2026-11-02 | 2026-11-02 | Task Deck — a personal multi-session mission control for DSH Desktop. |
| 107 | [bakkhos8/dsh-macos-share](https://github.com/bakkhos8/dsh-macos-share) | 0 | 2026-10-30 | 2026-11-02 | macOS Share menu target for DeepSeek Harness: share files, images, text and links into the current thread's draft attachments. |
| 108 | [BigBugy/dsh-tool-session-message](https://github.com/BigBugy/dsh-tool-session-message) | 0 | 2026-10-31 | 2026-11-02 | Cross-session messaging tool for DeepSeek Harness (DSH): session_send with sender session id envelope |
| 109 | [Biggy1606/dsh-balance-whale-intl](https://github.com/Biggy1606/dsh-balance-whale-intl) | 0 | 2026-11-02 | 2026-11-02 | English-first Balance Whale widget for DSH Web - live wallet, real token usage, turn costs, sounds, and EN/简体中文 UI. |
| 110 | [Bismuth-209/DSHCmdGuard](https://github.com/Bismuth-209/DSHCmdGuard) | 0 | 2026-11-02 | 2026-11-02 | Review every command submitted by your agents, would take effect under all permission level except auto review. Could work on ssh commands. The plugin is focusing on preventing accidental deletion after deepseek-flash trying to delete my $home. |
| 111 | [Bismuth-209/DSHMessagePipeline](https://github.com/Bismuth-209/DSHMessagePipeline) | 0 | 2026-10-28 | 2026-11-02 | Allow sessions send messages to other sessions in and between work dirs. |
| 112 | [blackstone-leixin/dsh-db](https://github.com/blackstone-leixin/dsh-db) | 0 | 2026-10-29 | 2026-11-02 | 链接数据库 |
| 113 | [bona11122/dsh-skill-peek](https://github.com/bona11122/dsh-skill-peek) | 0 | 2026-11-02 | 2026-11-02 | 轻量化的侧栏 skills 快速检索插件，仅检索及查看 SKILL.md 原文。 · A lightweight sidebar plugin for quickly searching the skills on this machine — search and read SKILL.md, nothing else. |
| 114 | [bowmark-ai/dsh-bowmark](https://github.com/bowmark-ai/dsh-bowmark) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin for the Bowmark MCP server |
| 115 | [Carrick-K7/dsh-carrick-optimize](https://github.com/Carrick-K7/dsh-carrick-optimize) | 0 | 2026-11-01 | 2026-11-02 | Warm DSH session discovery so the history list is ready before the first request. |
| 116 | [chaosen315/dsh-forum](https://github.com/chaosen315/dsh-forum) | 0 | 2026-10-17 | 2026-11-02 | forum-kb: git-native forum-shaped task knowledge base for single user with multiple agents (experimental) |
| 117 | [Charles516z/dsh-autocompress](https://github.com/Charles516z/dsh-autocompress) | 0 | 2026-11-02 | 2026-11-02 | Scheduled context compaction for DeepSeek Harness: compress every idle session each morning, catch up on the next launch, or run /compact-all on demand. |
| 118 | [Charles516z/dsh-win-pronounce](https://github.com/Charles516z/dsh-win-pronounce) | 0 | 2026-11-02 | 2026-11-02 | Speak aloud in DeepSeek Harness with the local Windows voices (SAPI + OneCore): one speaker button beside the permission control, voices switchable at runtime. / 用本机 Windows 语音朗读：对话输入栏权限控件右边一枚喇叭键，SAPI 与 OneCore 音源随时切换。 |
| 119 | [ChencLi819/dsh-otherbot-radar](https://github.com/ChencLi819/dsh-otherbot-radar) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件:让 QQ 群里的 agent 听见别的机器人在说什么 —— SDK 入站全量雷达(含被门控挡掉的)、别家机器人说话即唤醒、转录与回看工具、文件收件口桥。 |
| 120 | [Cindy-ponoiyvhj/dsh-search-first](https://github.com/Cindy-ponoiyvhj/dsh-search-first) | 0 | 2026-11-02 | 2026-11-02 | Makes DSH agents look for existing work before they build. |
| 121 | [CresBigB/dsh-oracle-gate](https://github.com/CresBigB/dsh-oracle-gate) | 0 | 2026-11-02 | 2026-11-02 | Freeze the acceptance criteria first, then honor only execution receipts. An acceptance gate for DSH (DeepSeek Harness). |
| 122 | [Da0Mine/dsh-talk-map](https://github.com/Da0Mine/dsh-talk-map) | 0 | 2026-10-31 | 2026-11-02 | Visual conversation map plugin for DSH Desktop: workspace folders, session cards, digest push edges |
| 123 | [DevTarlow/dsh-response-chime](https://github.com/DevTarlow/dsh-response-chime) | 0 | 2026-11-02 | 2026-11-02 | A DeepSeek Harness plugin that chimes when an agent finishes answering. |
| 124 | [devzer0o0/dsh-grok-buddy](https://github.com/devzer0o0/dsh-grok-buddy) | 0 | 2026-11-02 | 2026-11-02 | Grok Bot's own face in your DSH sidebar — the original GrokBot avatar expressions draw each session's status, no extra UI. |
| 125 | [dongchiluo/dsh-compat-optimize](https://github.com/dongchiluo/dsh-compat-optimize) | 0 | 2026-11-02 | 2026-11-02 | Fast path for DSH plugin compatibility checks: cache warm-up, one-shot reports, zero-token CLI |
| 126 | [dongfangxy/dsh-archive-cleaner](https://github.com/dongfangxy/dsh-archive-cleaner) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness (DSH) 插件：清理已归档的对话/会话，移到隔离区或直接删除，释放磁盘空间。Clean up archived DSH sessions and reclaim disk space. |
| 127 | [Doran1110/doran-design](https://github.com/Doran1110/doran-design) | 0 | 2026-11-02 | 2026-11-02 | A DSH skill pack for web design with shadcn/ui, Canvas UI and ThreeUI: three-layer architecture, performance budget and acceptance checklist. |
| 128 | [DrizzleGig/dsh-novel-beat](https://github.com/DrizzleGig/dsh-novel-beat) | 0 | 2026-11-02 | 2026-11-02 | Novel fork decision gate for DSH · 小说剧情决策闸 |
| 129 | [dsh-agent-roster/agent-teams](https://github.com/dsh-agent-roster/agent-teams) | 0 | 2026-10-29 | 2026-11-02 | Agent Roster 档案：wshobson/agents 的 agent-teams 团队迁移（队长/实现/审查/调试）。 |
| 130 | [dsh-agent-roster/metagpt-company](https://github.com/dsh-agent-roster/metagpt-company) | 0 | 2026-10-29 | 2026-11-02 | Agent Roster 档案：MetaGPT 软件公司角色（产品经理/架构师/项目经理/工程师）迁移。 |
| 131 | [dsh-agent-roster/openmanus](https://github.com/dsh-agent-roster/openmanus) | 0 | 2026-10-29 | 2026-11-02 | Agent Roster 档案：OpenManus 的规划/编码/浏览器三个代理提示词迁移。 |
| 132 | [Duanyy0813/dsh-prompt-clarifier](https://github.com/Duanyy0813/dsh-prompt-clarifier) | 0 | 2026-10-30 | 2026-11-02 | 给你的DeepSeek Harness加一个「提示词优化」按钮：在你把消息发出去之前，自动先按会话上下文把提示词改写得更明确；如果发现「不确认就没法开工」的歧义，先向你提问，拿到答案再交给助手执行。 |
| 133 | [Duqiyan2/dsh-plugin-tokenmarket](https://github.com/Duqiyan2/dsh-plugin-tokenmarket) | 0 | 2026-09-10 | 2026-11-02 | Token Market provider bundle for DeepSeek Harness |
| 134 | [EchoTint/dsh-notes-wall](https://github.com/EchoTint/dsh-notes-wall) | 0 | 2026-11-02 | 2026-11-02 | Sticky-notes wall for DeepSeek Harness: pin notes to the sidebar, tag them inline with #hashtags, saved locally. |
| 135 | [Edison-A-N/dsh-remote-editor](https://github.com/Edison-A-N/dsh-remote-editor) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness Web plugin: open the session workspace in your local Cursor / VS Code over Remote-SSH |
| 136 | [elalamiimed/dsh-prism-themes](https://github.com/elalamiimed/dsh-prism-themes) | 0 | 2026-11-02 | 2026-11-02 | Prism Theme Studio for DeepSeek Harness: 24 paired light/dark palettes, six moods, custom accents, favorites, and a live theme studio. |
| 137 | [Elias1222/deepseek-brain](https://github.com/Elias1222/deepseek-brain) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness (DSH) 插件：可持久化、可查看、可交互的五层记忆大脑 + 3D 记忆观测仪 |
| 138 | [etherfun/dsh-read-image-compress](https://github.com/etherfun/dsh-read-image-compress) | 0 | 2026-10-31 | 2026-11-02 | 自定义读图工具的压缩程度, 降低tokens开销与网络带宽开销 |
| 139 | [EVA09/dsh-codebuddy-acp](https://github.com/EVA09/dsh-codebuddy-acp) | 0 | 2026-11-02 | 2026-11-02 | 把本机 CodeBuddy CLI（ACP 模式）接入 DeepSeek Harness：模型选择、工具卡片、积分控制台 |
| 140 | [fanyingnie2163663/dsh-whale-journal](https://github.com/fanyingnie2163663/dsh-whale-journal) | 0 | 2026-11-01 | 2026-11-02 | 给陪伴型 agent 的日记 / 叙事记忆插件（DSH plugin）：每天写几句自己的话，每句能回指当天的消息；只读日记页 + 简笔画/照片 + 接地审计，纯本地不联网。 |
| 141 | [Ffwjl010831/dsh-plugin-kassel-boot](https://github.com/Ffwjl010831/dsh-plugin-kassel-boot) | 0 | 2026-11-02 | 2026-11-02 | 卡塞尔学院风格的 DeepSeek Harness 启动动画，六屏点击推进，结尾金色交接 |
| 142 | [flowleap-ai/flowleap-methods](https://github.com/flowleap-ai/flowleap-methods) | 0 | 2026-11-02 | 2026-11-02 | Patent work methods (skills) for FlowLeap Patent AI agents |
| 143 | [flyeasy/dsh-session-overview](https://github.com/flyeasy/dsh-session-overview) | 0 | 2026-11-02 | 2026-11-02 | Recent-sessions overview for DeepSeek Harness — all workspaces in one list with color-coded workspace badges |
| 144 | [fuchen9/dsh-token-usage](https://github.com/fuchen9/dsh-token-usage) | 0 | 2026-11-02 | 2026-11-02 | Token-usage panel for DeepSeek Harness: totals every stored session's token spend, broken down per model, provider, session type and time window. Offline, zero dependencies. |
| 145 | [fuyu-technology/dsh-auto-repair-ui](https://github.com/fuyu-technology/dsh-auto-repair-ui) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 插件：自愈守护进程的可视化面板——实时诊断结论、修复历史，一键手动修复。 |
| 146 | [fuyu-technology/dsh-box-ui](https://github.com/fuyu-technology/dsh-box-ui) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 插件：设置页里的留言箱——查看条目、改回执、回复、删除与新建。 |
| 147 | [fxxxysh-andy/explore_tree](https://github.com/fxxxysh-andy/explore_tree) | 0 | 2026-11-02 | 2026-11-02 | Research trajectory tree plugin for DeepSeek Harness (DSH) |
| 148 | [G-Grant/dsh-worktree-manager](https://github.com/G-Grant/dsh-worktree-manager) | 0 | 2026-11-01 | 2026-11-02 | DSH 会话头部环境/分支 chip：本机切换检出，Worktree 在 .agents/worktrees 创建隔离工作区，支持合并、压缩提交、删除与自动清理。 |
| 149 | [gambn/dsh-dual-proxy](https://github.com/gambn/dsh-dual-proxy) | 0 | 2026-11-02 | 2026-11-02 | Agent gateway manager for DSH — online multi-gateway failover and channel health checks |
| 150 | [Ganglith/dsh-wayland-use](https://github.com/Ganglith/dsh-wayland-use) | 0 | 2026-11-02 | 2026-11-02 | Wayland的控制电脑，screenshot、带坐标的 OCR、按文字点击、批量动作 |
| 151 | [gautema8-hash/dsh-super-wechat-bot](https://github.com/gautema8-hash/dsh-super-wechat-bot) | 0 | 2026-11-02 | 2026-11-02 | 微信代聊机器人 · DSH 插件：OCR 侧读微信、拟人节奏自动回复，独立桥进程 |
| 152 | [gavinff1990/dsh-context-map](https://github.com/gavinff1990/dsh-context-map) | 0 | 2026-11-02 | 2026-11-02 | Turn a conversation's context into a layered architecture map - goals, decisions, risks - exported as SVG, interactive HTML and Mermaid. |
| 153 | [ggxx001/dsh-bili-whale](https://github.com/ggxx001/dsh-bili-whale) | 0 | 2026-11-02 | 2026-11-02 | 养一条有日子的鱼：让 DSH 里的 agent 自己刷 B 站、看懂视频、写两本日记，把值得的 @ 你。设置里有「养鱼」完整设置页（27 项）+ 依赖体检 + cookie 写入 + 共享配置（与工具链同一份 bili-whale.config.json）。 |
| 154 | [ggxx001/dsh-pet](https://github.com/ggxx001/dsh-pet) | 0 | 2026-11-02 | 2026-11-02 | 吃白饭的蓝色大肥鱼，赖在 DeepSeek Harness 里不走了。平时爱玩魔方、爱吃各种零食、偶尔打个盹，闲不住就在桌面上溜达两圈，被你拖来甩去也照旧赖着；你忙起来它跟着忙前忙后，也会帮你打理余额钱包，闲下来爱碎碎念，还乐意陪你唠两句。 |
| 155 | [ggxx001/dsh-video-panel](https://github.com/ggxx001/dsh-video-panel) | 0 | 2026-11-02 | 2026-11-02 | 视频经营面板：设置里直接看她发过什么视频、播放/赞率/日均数据，以及发片的规矩（每周几支、能不能自己发、预算多少）。数据只读自 B 站创作中心，10 分钟缓存，限流时回退上次。 |
| 156 | [GinoXiang/dsh-output-style](https://github.com/GinoXiang/dsh-output-style) | 0 | 2026-11-01 | 2026-11-02 | 在 DeepSeek Harness 输入框里加一个格赖斯（Grice）模式开关：开启后助手严格遵守数量/质量/关系/方式四条语用准则，用最高信息效率沟通。 |
| 157 | [glitchless-gg/glitchless-dsh](https://github.com/glitchless-gg/glitchless-dsh) | 0 | 2026-11-02 | 2026-11-02 | Glitchless for DeepSeek Harness: let your agent understand your players. Game observability over MCP, plus skills for Unity, Godot, Unreal, Three.js and more. |
| 158 | [hangdingding/breezetts-dsh](https://github.com/hangdingding/breezetts-dsh) | 0 | 2026-11-02 | 2026-11-02 | Official BreezeTTS plugin for DeepSeek Harness — read replies aloud, powered by Breeze CLI with the Breeze API as fallback. |
| 159 | [hangdingding/breezetts-dsh-0.2-archive](https://github.com/hangdingding/breezetts-dsh-0.2-archive) | 0 | 2026-11-02 | 2026-11-02 | Official BreezeTTS plugin for DeepSeek Harness — read replies aloud, powered by Breeze CLI with the Breeze API as fallback. |
| 160 | [hangdingding/dsh-breezetts](https://github.com/hangdingding/dsh-breezetts) | 0 | 2026-10-30 | 2026-11-02 | DSH 语音朗读插件：用 Breeze TTS 朗读助手回复（默认大肥鱼音色），支持自动朗读、音色选择、语速与音色设计。 |
| 161 | [HaroldZ32/My-Power-Dsh](https://github.com/HaroldZ32/My-Power-Dsh) | 0 | 2026-09-19 | 2026-11-02 | Just another Deepseek Harness agent tool |
| 162 | [HellGodX/dsh-ark-usage](https://github.com/HellGodX/dsh-ark-usage) | 0 | 2026-11-02 | 2026-11-02 | 火山方舟 Coding Plan 用量挂件 for DeepSeek Harness — quota + token spend |
| 163 | [herenfor/dsh-sentinel](https://github.com/herenfor/dsh-sentinel) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 主程序之外的照看：任务完成提醒、托盘启动、崩溃后打开紧急 DSH 和说明页面。 |
| 164 | [heswy/dsh-game-market](https://github.com/heswy/dsh-game-market) | 0 | 2026-10-18 | 2026-11-02 | A game marketplace and runtime for DeepSeek Harness. |
| 165 | [hhuangpanda/dsh-tool-deny](https://github.com/hhuangpanda/dsh-tool-deny) | 0 | 2026-11-01 | 2026-11-02 | Hide or refuse named tools per agent preset in DeepSeek Harness. Can also hide system prompts added by tools. Useful when plugins force tools on all agent presets. dsh-tool-deny reduces context bloat. |
| 166 | [HJ1H/dsh-tool-scheduler](https://github.com/HJ1H/dsh-tool-scheduler) | 0 | 2026-11-02 | 2026-11-02 | Harness-level tool scheduling for DeepSeek Harness: read-only result cache + speculative prefetch |
| 167 | [HotAntOne/dsh-ui-fit](https://github.com/HotAntOne/dsh-ui-fit) | 0 | 2026-11-02 | 2026-11-02 | DSH Web GUI 界面精简插件：左栏导航三态、输入条精简、手机端密度压缩，三块独立开关。 |
| 168 | [HtO404/screenshotpro](https://github.com/HtO404/screenshotpro) | 0 | 2026-11-02 | 2026-11-02 | 实测 UI 截图：捕获窗口或网页，保持矩形尺寸与实测值完全一致，绘制框体、数字、箭头、像素化效果并附带图例，通过 15 项断言验证该图像，可用于制作使用手册、操作说明、流程文档、软件工具功能演示等场景 |
| 169 | [ice-ai-lab/dsh-system-view](https://github.com/ice-ai-lab/dsh-system-view) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：在会话区新增「系统」Tab，聚合展示系统提示词、生效工具列表、Skills、请求配置及其变更历史 |
| 170 | [icrefin/dsh-feishu-session-manager](https://github.com/icrefin/dsh-feishu-session-manager) | 0 | 2026-11-02 | 2026-11-02 | Turn one Feishu chat into the interface of every DeepSeek Harness session: model-written summaries out, model-routed replies back. |
| 171 | [icrefin/dsh-remote-control](https://github.com/icrefin/dsh-remote-control) | 0 | 2026-11-02 | 2026-11-02 | Drive a DeepSeek Harness host from any browser through one outbound WebSocket relay — the real client, not a cut-down remote. |
| 172 | [icrefin/dsh-session-monitor](https://github.com/icrefin/dsh-session-monitor) | 0 | 2026-11-02 | 2026-11-02 | A live grid for every active and recently used DeepSeek Harness session: transcript, pending questions and queued prompts in one panel. |
| 173 | [icrefin/dsh-session-title](https://github.com/icrefin/dsh-session-title) | 0 | 2026-11-02 | 2026-11-02 | Title every DeepSeek Harness session from the work it actually did, and keep it current as later rounds move it on. |
| 174 | [idao-cube/dsh-skill-router](https://github.com/idao-cube/dsh-skill-router) | 0 | 2026-11-02 | 2026-11-02 | dsh-skill-router · 技能路由器 ，按需加载 DSH 技能，并管理本会话的系统提示词装配。 |
| 175 | [InsMyHe/dsh-qqark](https://github.com/InsMyHe/dsh-qqark) | 0 | 2026-11-02 | 2026-11-02 | QQ 群文件与聊天视频自动归档器：按群/年月/类型分目录，本地网页媒体库搜索播放，纯标准库零依赖、断点续传、去重、定时补扫。附 DeepSeek Harness 只读查询插件（侧边栏面板 + 4 个 agent 工具）。 |
| 176 | [jakehemmerle/dsh-usage-limits](https://github.com/jakehemmerle/dsh-usage-limits) | 0 | 2026-10-06 | 2026-11-02 | Claude and Codex plan-usage meter for DeepSeek Harness |
| 177 | [jakehemmerle/dsh-web-search-exa](https://github.com/jakehemmerle/dsh-web-search-exa) | 0 | 2026-10-11 | 2026-11-02 | DeepSeek Harness plugin: dsh-web-search-exa |
| 178 | [jerentpan-lab/dsh-attention-router](https://github.com/jerentpan-lab/dsh-attention-router) | 0 | 2026-11-02 | 2026-11-02 | Attention router for DeepSeek Harness: alert / decide / inform routing so agents stop over-notifying. |
| 179 | [jerentpan-lab/dsh-source-ledger](https://github.com/jerentpan-lab/dsh-source-ledger) | 0 | 2026-11-02 | 2026-11-02 | Source-tagged assertion ledger for DeepSeek Harness: inspectable source pointers + reproducible audit sampling. |
| 180 | [jerentpan-lab/dsh-task-heartbeat](https://github.com/jerentpan-lab/dsh-task-heartbeat) | 0 | 2026-11-02 | 2026-11-02 | Task heartbeat for DeepSeek Harness: progress beats and stall detection, not mere liveness. |
| 181 | [jesongit/dsh-flowchart](https://github.com/jesongit/dsh-flowchart) | 0 | 2026-11-02 | 2026-11-02 | Render Mermaid code blocks in DeepSeek Harness as interactive diagrams (zoom, fit, copy as PNG, SVG download, fullscreen). |
| 182 | [jesongit/dsh-nextline](https://github.com/jesongit/dsh-nextline) | 0 | 2026-11-02 | 2026-11-02 | Next-message predictions for DeepSeek Harness. Independent model, draft-only acceptance, no auto-send. |
| 183 | [jesongit/dsh-plugin-magpie](https://github.com/jesongit/dsh-plugin-magpie) | 0 | 2026-11-02 | 2026-11-02 | Lightweight Magpie connector for DSH: provider-grouped models, one-time-ticket native management panel, per-model quota popup |
| 184 | [JimmyRowe13/dsh-session-keyword-search](https://github.com/JimmyRowe13/dsh-session-keyword-search) | 0 | 2026-11-02 | 2026-11-02 | Keyword search across every DeepSeek Harness session (CJK-safe substring index, highlights hits, jumps to the matched message) |
| 185 | [jiuwu02/dsh-token-ledger](https://github.com/jiuwu02/dsh-token-ledger) | 0 | 2026-11-02 | 2026-11-02 | 读取全部会话日志并记账：累计 token 消耗、缓存命中率、峰谷分时计费成本、日历热力图、趋势曲线、折叠式会话树与工作区分布，支持本地缓存、增量更新与 CSV / JSON 导出。 |
| 186 | [Joker2377/dsh-taskbar-status](https://github.com/Joker2377/dsh-taskbar-status) | 0 | 2026-11-02 | 2026-11-02 | Windows taskbar indicator for DeepSeek Harness Desktop: grey while an agent turn runs, amber when it is waiting for you, latched red after a failed turn. |
| 187 | [JungleYXu/dsh-loadout](https://github.com/JungleYXu/dsh-loadout) | 0 | 2026-11-01 | 2026-11-02 | Per-conversation tool kits (Loadout / 装备栏) for DeepSeek Harness: only the tools a conversation needs reach the model. |
| 188 | [jwangkun/dsh-superagent](https://github.com/jwangkun/dsh-superagent) | 0 | 2026-11-02 | 2026-11-02 | A proactive agent for one GitHub repository, as a DeepSeek Harness bundle (fork of deepseek-ai/dsh-superagent-prototype: single-account requests, host-safe setup). |
| 189 | [kesha4/dsh-site-bridge](https://github.com/kesha4/dsh-site-bridge) | 0 | 2026-11-01 | 2026-11-02 | Hands and eyes for DeepSeek Harness in your own browser: page markup and BFF traffic capture, trusted input, virtual cursor. DSH plugin + MV3 extension. |
| 190 | [KevenUnderwood/dsh-usage-hub](https://github.com/KevenUnderwood/dsh-usage-hub) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：当前模型背后的供应商用量面板（支持DSH中的当前主流大模型） —— 额度窗口、账户余额与 token 用量，随模型自动切换，提供详情页与左下角概览查看。 |
| 191 | [keyblues/dsh-fengniao-company-search](https://github.com/keyblues/dsh-fengniao-company-search) | 0 | 2026-10-27 | 2026-11-02 | DeepSeek Harness (DSH) 插件：风鸟（Riskbird）企业查询——工商/股东/高管/对外投资/变更/被执行/失信/限高/经营异常/严重违法/行政处罚，原生 Agent 工具，插件页内配置 API Key。 |
| 192 | [kira905/dsh-host-adapter-client](https://github.com/kira905/dsh-host-adapter-client) | 0 | 2026-10-19 | 2026-11-02 | 浏览器端适配层：ctx 服务与事件名的唯一来源，由服务端源码生成 · Client adapter: single source of truth for ctx service/event names in browser bundles, generated from the server-side source. |
| 193 | [kkkkk-tubu/dsh-longpress-shot](https://github.com/kkkkk-tubu/dsh-longpress-shot) | 0 | 2026-11-02 | 2026-11-02 | DSH plugin: long-press the left mouse button, drag a region, get a PNG, with a preview card that sends it straight into the composer. |
| 194 | [kocor01/dsh-model-auto-retry](https://github.com/kocor01/dsh-model-auto-retry) | 0 | 2026-11-02 | 2026-11-02 | DSH host plugin: keep agents alive through model rate limits (HTTP 429) - in-loop retry, then an automatic 继续 follow-up. |
| 195 | [KrimsonSun/dsh-result-check](https://github.com/KrimsonSun/dsh-result-check) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin: checks the answer against tool output before a turn ends (unreported tool failures, numbers with no source) |
| 196 | [Kyoma233/dsh-study-jidi](https://github.com/Kyoma233/dsh-study-jidi) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 插件：按「最近发行」浏览 jidiyouxi.com 游戏，面板内看详情与下载资源 |
| 197 | [Lanlan-gys/dsh-network-proxy-plus](https://github.com/Lanlan-gys/dsh-network-proxy-plus) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 网络代理设置插件：SOCKS5 / SOCKS5H / HTTP / HTTPS，设置页可视化，改完立即生效。DSH network proxy settings with SOCKS5 support. |
| 198 | [lecheng2018/dsh-qq-hub](https://github.com/lecheng2018/dsh-qq-hub) | 0 | 2026-11-02 | 2026-11-02 | DSH (DeepSeek Harness) 旗舰级 QQ Hub 终端与多模态智能伙伴插件 |
| 199 | [LeLiu/dsh-codeisland-bridge](https://github.com/LeLiu/dsh-codeisland-bridge) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness → CodeIsland bridge: forward session/tool/approval events to CodeIsland's notch over its Unix socket |
| 200 | [LemonServer/dsh-codex-exec](https://github.com/LemonServer/dsh-codex-exec) | 0 | 2026-11-02 | 2026-11-02 | A dsh plugin to cooperate with codex. |
| 201 | [Leonlee114514/dsh-local-trim](https://github.com/Leonlee114514/dsh-local-trim) | 0 | 2026-11-02 | 2026-11-02 | Give small local models a light harness in DeepSeek Harness: per-provider tool mask, prompt-section trimming, light instruction injection, tool-schema slimming. Cloud providers untouched. |
| 202 | [LIghtJUNction/dsh-caffeinate](https://github.com/LIghtJUNction/dsh-caffeinate) | 0 | 2026-11-02 | 2026-11-02 | Keep the computer awake while DSH agents run |
| 203 | [LIghtJUNction/dsh-compass](https://github.com/LIghtJUNction/dsh-compass) | 0 | 2026-11-02 | 2026-11-02 | Repository code maps and navigation for DSH |
| 204 | [LIghtJUNction/dsh-dotenv](https://github.com/LIghtJUNction/dsh-dotenv) | 0 | 2026-11-02 | 2026-11-02 | Explicit dotenv loading without overwriting inherited variables |
| 205 | [LIghtJUNction/dsh-file-context](https://github.com/LIghtJUNction/dsh-file-context) | 0 | 2026-11-02 | 2026-11-02 | Immutable file and diff context snapshots for DSH |
| 206 | [LIghtJUNction/dsh-hashline](https://github.com/LIghtJUNction/dsh-hashline) | 0 | 2026-11-02 | 2026-11-02 | Stale-safe hash-anchored line editing for DSH |
| 207 | [LIghtJUNction/dsh-notes](https://github.com/LIghtJUNction/dsh-notes) | 0 | 2026-11-02 | 2026-11-02 | Revision-checked Markdown notes for DSH |
| 208 | [LIghtJUNction/dsh-recall](https://github.com/LIghtJUNction/dsh-recall) | 0 | 2026-11-02 | 2026-11-02 | Searchable project conversation excerpts for DSH |
| 209 | [LIghtJUNction/dsh-red-green](https://github.com/LIghtJUNction/dsh-red-green) | 0 | 2026-11-02 | 2026-11-02 | Evidence-driven RED GREEN REFACTOR workflow for DSH |
| 210 | [LIghtJUNction/dsh-rewind](https://github.com/LIghtJUNction/dsh-rewind) | 0 | 2026-11-02 | 2026-11-02 | Non-destructive Git checkpoints and file rewind for DSH |
| 211 | [LIghtJUNction/dsh-rtk-optimizer](https://github.com/LIghtJUNction/dsh-rtk-optimizer) | 0 | 2026-11-02 | 2026-11-02 | RTK command optimization for DSH |
| 212 | [likaileave/dsh-direct-open](https://github.com/likaileave/dsh-direct-open) | 0 | 2026-11-02 | 2026-11-02 | Open DSH delivered files, changed-file rows, and file mentions in the system default app, with a configurable right-click menu and settings. |
| 213 | [Limtide/dsh-agent-lab](https://github.com/Limtide/dsh-agent-lab) | 0 | 2026-11-02 | 2026-11-02 | Agent 行为回归实验台：把会话录成运行记录，并排对比两次运行的工具序列、参数、结果与用量 |
| 214 | [lin114514-desng/dsh-chat-gutter](https://github.com/lin114514-desng/dsh-chat-gutter) | 0 | 2026-11-02 | 2026-11-02 | DSH 聊天区双侧标识带：右侧回合编号路标，左侧按回合合并的过程徽标（⚙️工具 ⌨️命令 🧐思考）、🤔 提问标识与回答段弧线，输入区两列「快速移动」跳转面板。纯客户端插件。 |
| 215 | [LingDangZaiXiang/dsh-always-there](https://github.com/LingDangZaiXiang/dsh-always-there) | 0 | 2026-11-01 | 2026-11-02 | 一直在你身边。让 DSH 的 agent 有机会自己开口。 |
| 216 | [LingDangZaiXiang/dsh-life-hair](https://github.com/LingDangZaiXiang/dsh-life-hair) | 0 | 2026-11-01 | 2026-11-02 | 救命毫毛。上下文压缩的那一刻，拔一根毫毛，留个备份。 |
| 217 | [lisihao/dsh-intelligent-UI](https://github.com/lisihao/dsh-intelligent-UI) | 0 | 2026-10-31 | 2026-11-02 | Independent open-source Intelligent Experience Platform plugin with portable themes for DeepSeek Harness. |
| 218 | [LittleLemonJam/dsh-chat-background](https://github.com/LittleLemonJam/dsh-chat-background) | 0 | 2026-11-02 | 2026-11-02 | 给 DeepSeek Harness 桌面端换背景：背景图/轮换分组/三栏遮罩/输入栏背景条/任务进度条/Token 用量 |
| 219 | [LittleLemonJam/dsh-quick-notes](https://github.com/LittleLemonJam/dsh-quick-notes) | 0 | 2026-11-02 | 2026-11-02 | A floating sticky-note pad for the DeepSeek Harness Web GUI with a note directory, text editing, pasted images and local persistence. |
| 220 | [liuhange789/party-eco-agent](https://github.com/liuhange789/party-eco-agent) | 0 | 2026-11-02 | 2026-11-02 | Party-building led street industry ecosystem collaboration plugin - enterprise profiling, supply-demand matching, policy parsing, grievance dispatch |
| 221 | [liuxin4566-web/dsh-autoconfig](https://github.com/liuxin4566-web/dsh-autoconfig) | 0 | 2026-11-02 | 2026-11-02 | DSH network device terminal plugin: SSH/Telnet/serial console/SFTP with a right-side xterm, session bar, keyword highlighting and per-device logs. |
| 222 | [lixiangzhong/dsh-active-chat](https://github.com/lixiangzhong/dsh-active-chat) | 0 | 2026-11-02 | 2026-11-02 | Pin workspaces whose sessions are running or waiting for your reply to the top of the DSH sidebar. |
| 223 | [lizhijie429/dsh-task-notifier](https://github.com/lizhijie429/dsh-task-notifier) | 0 | 2026-10-31 | 2026-11-02 | DSH plugin: turn status notifications (Windows toasts branded with the DSH icon) + auto-continue after exhausted model-request retries |
| 224 | [lllbjs/dsh-model-accordion](https://github.com/lllbjs/dsh-model-accordion) | 0 | 2026-11-02 | 2026-11-02 | Collapse the DeepSeek Harness model list by provider — one clickable label per provider, favorites, sorting, search passthrough. 按供应商折叠 DSH 模型列表。 |
| 225 | [LTP414/dsh-marginalia](https://github.com/LTP414/dsh-marginalia) | 0 | 2026-11-02 | 2026-11-02 | Read-only /btw side questions for DeepSeek Harness: fork the current session, ask in the margin, keep the main transcript untouched. DeepSeek Harness 的 /btw 只读旁问：fork 当前会话、答案留在页边，不污染主对话。Host + Web Client 插件。 |
| 226 | [lubanaishuxue/dsh-private-background](https://github.com/lubanaishuxue/dsh-private-background) | 0 | 2026-11-02 | 2026-11-02 | Custom wallpaper for the DeepSeek Harness UI — local images, GIFs, videos, gradients or solid colors, with blur, dim, focus position, per-panel opacity and a liquid-glass material. Everything stays on your machine. |
| 227 | [lucagiftzek/dsh-orchestrator](https://github.com/lucagiftzek/dsh-orchestrator) | 0 | 2026-11-01 | 2026-11-02 | Agent swarm and task orchestration for DeepSeek Harness: Orchestrate tab, orch_* tools, runners, provider cards, machine API. |
| 228 | [lucagiftzek/dsh-voice](https://github.com/lucagiftzek/dsh-voice) | 0 | 2026-11-01 | 2026-11-02 | Read-aloud, dictation and language-aware speech for the DeepSeek Harness web UI: 23 TTS and STT providers, per-language routing, word highlighting. |
| 229 | [lucagiftzek/dsh-workspace-rail](https://github.com/lucagiftzek/dsh-workspace-rail) | 0 | 2026-11-01 | 2026-11-02 | Workspace-first sidebar rail for the DeepSeek Harness web GUI: pinned chats, projects as folders, live Recents, search, unread markers. |
| 230 | [lucakaneshiro1/worldpulse](https://github.com/lucakaneshiro1/worldpulse) | 0 | 2026-11-02 | 2026-11-02 | Live world news, situation analysis, and conflict-aware travel planning for DeepSeek Harness. |
| 231 | [lukeAyin/dsh-whalebook](https://github.com/lukeAyin/dsh-whalebook) | 0 | 2026-10-29 | 2026-11-02 | 鲸事本！ |
| 232 | [Lumos-789/baton](https://github.com/Lumos-789/baton) | 0 | 2026-08-15 | 2026-11-02 | Ticket/DAG/session-subagent control plane over OpenSpec changes — deterministic MCP actions, one isolated git worktree per assignment, sealed receipts as the only success evidence |
| 233 | [Lumos-789/make-it-a-bit-better](https://github.com/Lumos-789/make-it-a-bit-better) | 0 | 2026-11-02 | 2026-11-02 | A skill plugin that runs an autonomous product-polish loop: one small, verified improvement per round, accumulated round after round. |
| 234 | [Lumos-789/react-monitor-agent](https://github.com/Lumos-789/react-monitor-agent) | 0 | 2026-11-01 | 2026-11-02 | 给 agent 配一块可交互的操作板——审查回放+检查点,回应 dsh-superagent 的 session 聊天窗之问 |
| 235 | [luochang212/godview](https://github.com/luochang212/godview) | 0 | 2026-10-29 | 2026-11-02 | Give your agents a god's eye view: file leases, claim and release records, and a Gantt of who holds what, so parallel agents stop overwriting each other. |
| 236 | [LUOZIR/dsh-git-graph-view](https://github.com/LUOZIR/dsh-git-graph-view) | 0 | 2026-11-02 | 2026-11-02 | DSH Web GUI 的 Git 图谱可视化插件：只读展示工作区提交 DAG、分支/标签/远程引用与提交详情；对齐官方主题与交互。 |
| 237 | [lvzhuojun/dsh-companion-memory](https://github.com/lvzhuojun/dsh-companion-memory) | 0 | 2026-11-02 | 2026-11-02 | Long-term memory for Chinese companion agents: retires stale facts, isolates people, follows up on time, crisis protocol. DeepSeek Harness (DSH) plugin + SQLite engine + 100-day benchmark. |
| 238 | [LZ-jun/dsh-session-porter](https://github.com/LZ-jun/dsh-session-porter) | 0 | 2026-10-31 | 2026-11-02 | Export the conversations you pick to a folder you choose (OneDrive works) and import them back on another machine. · 把挑中的对话导出到你指定的目录（可以OneDrive），换台电脑再一键导回来。 |
| 239 | [Makesupper/dsh-plugin-whale](https://github.com/Makesupper/dsh-plugin-whale) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin: 3D DeepSeek whale companion, real-time LLM speech synthesis, wooden-fish accompaniment |
| 240 | [maxandrieux/dsh-locale-fr](https://github.com/maxandrieux/dsh-locale-fr) | 0 | 2026-11-02 | 2026-11-02 | Pack de langue français pour DSH (DeepSeek Harness) · French language pack for DSH |
| 241 | [mengyuruxing/workmem](https://github.com/mengyuruxing/workmem) | 0 | 2026-11-02 | 2026-11-02 | Work-first local memory plugin for DeepSeek Harness: 4 work categories + separate persona, 5 plain text files, local-only retrieval, zero model calls for search. 工作优先的 DSH 本地记忆插件。 |
| 242 | [mhggv/world-channel-bridge](https://github.com/mhggv/world-channel-bridge) | 0 | 2026-11-01 | 2026-11-02 | 让官方 QQ 等外部渠道的会话进入 DSH 世界（dsh-world）的记忆归档：零依赖、零硬编码的 workspace 登记桥。 |
| 243 | [Miaphant/dsh-daily-tarot](https://github.com/Miaphant/dsh-daily-tarot) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 每日塔罗插件：真实韦特牌面、3D 翻牌、随机正逆位，每天最多抽 10 次。 |
| 244 | [mogutofu/dsh-mc-server-ops](https://github.com/mogutofu/dsh-mc-server-ops) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 插件：托管 Minecraft 服务器 + QQ 群运维（前置：QQ 机器人插件） |
| 245 | [MonSp/dsh-onto](https://github.com/MonSp/dsh-onto) | 0 | 2026-11-02 | 2026-11-02 | Business ontology modeling + AI-assisted decision platform for DeepSeek Harness — judgment in the rule engine, determination by humans |
| 246 | [Moontail-Ling/dsh-time-memory](https://github.com/Moontail-Ling/dsh-time-memory) | 0 | 2026-11-01 | 2026-11-02 | 按时间归档 + 分层回忆的 DSH 聊天记忆插件 \| Time-based memory for DeepSeek Harness: recall the period first, widen twice, then say "I forgot". |
| 247 | [MrLsss/cyber-self](https://github.com/MrLsss/cyber-self) | 0 | 2026-11-02 | 2026-11-02 | cyber-self —— 赛博镜像：为每个身份建一座本地资料库，收集、整理、索引你的数据，随时用提问的方式复用它。 |
| 248 | [MSSZSD3925/dsh-msszsd-toolkit](https://github.com/MSSZSD3925/dsh-msszsd-toolkit) | 0 | 2026-10-22 | 2026-11-02 | DSH 小功能合集：QQ 远程驾驶、跨会话提问（含上下文守卫）、界面暂停按钮、重启 DSH 后自动续跑、贵时段纪律注入。插件详情页带五个运行期开关。 |
| 249 | [muntag/dsh-grok-stars](https://github.com/muntag/dsh-grok-stars) | 0 | 2026-10-14 | 2026-11-02 | Adds starfield to the new-chat background, like in grok.com |
| 250 | [mw2wbyys6t-sudo/provemark-open](https://github.com/mw2wbyys6t-sudo/provemark-open) | 0 | 2026-11-02 | 2026-11-02 | Provemark（源印）— 本地零依赖的仓库风险扫描 + DeepSeek Harness 常驻守卫：许可证/依赖漏洞/凭据泄漏/PII/代码级安全（OWASP，CWE 映射）/AI 代码风险/供应链，118 条规则，结论可解释、可门禁、可防退化。 |
| 251 | [mwk719/dsh-restart](https://github.com/mwk719/dsh-restart) | 0 | 2026-11-02 | 2026-11-02 | 给 DeepSeek Harness Desktop（Windows）的标题栏加一个「重启」按钮。点一下弹出确认框，确认后应用关闭并重新打开。 |
| 252 | [mxn404/deepseek-plugins](https://github.com/mxn404/deepseek-plugins) | 0 | 2026-11-02 | 2026-11-02 | A pnpm workspace hosting several DeepSeek Harness (dsh) plugins, one bundle package per plugin |
| 253 | [NattoCB/dsh-plugin-superagent](https://github.com/NattoCB/dsh-plugin-superagent) | 0 | 2026-11-02 | 2026-11-02 | DSH project control plane with durable tickets, explicit routing, replaceable sessions, and a local project matrix. |
| 254 | [NeptuneRY/dsh-deepsearch](https://github.com/NeptuneRY/dsh-deepsearch) | 0 | 2026-11-02 | 2026-11-02 | Multi-round deep research for DeepSeek Harness: the same session keeps drilling into a topic round after round and writes a cited report in the right sidebar. |
| 255 | [nobodyhere34/dsh-session-subagent-models](https://github.com/nobodyhere34/dsh-session-subagent-models) | 0 | 2026-11-02 | 2026-11-02 | Per-session editable subagent model allowlists for DSH — experimental, known design flaws, not maintained |
| 256 | [nuet9/dsh-internal-folder-browser](https://github.com/nuet9/dsh-internal-folder-browser) | 0 | 2026-11-02 | 2026-11-02 | Harness internal folder browser with native file icons, thumbnails, and eight view modes |
| 257 | [oooplz/dsh-stitch-mcp](https://github.com/oooplz/dsh-stitch-mcp) | 0 | 2026-11-02 | 2026-11-02 | Integrate Google Stitch via MCP to enable the assistant to list, create, edit, and generate Stitch projects, interfaces, and design systems. |
| 258 | [orchivo/dsh-conversation-tree](https://github.com/orchivo/dsh-conversation-tree) | 0 | 2026-10-27 | 2026-11-02 | Conversation Tree for DSH — organise DeepSeek Harness conversations into a collapsible tree by workspace and topic, and open the real sessions in place. 对话树：把 DSH 对话按工作区与主题组织成可折叠的树。 |
| 259 | [pelucoola/dsh-plugin-remote-ssh](https://github.com/pelucoola/dsh-plugin-remote-ssh) | 0 | 2026-11-02 | 2026-11-02 | DSH plugin: control remote hosts over SSH (agent tools + Settings host manager, connection reuse, adaptive timeouts) |
| 260 | [PerryLink/dsh-certification](https://github.com/PerryLink/dsh-certification) | 0 | 2026-11-02 | 2026-11-02 | Community certification registry for DeepSeek Harness plugins: public spec, scoring model, registry data and badges. |
| 261 | [PerryLink/dsh-check-pack](https://github.com/PerryLink/dsh-check-pack) | 0 | 2026-11-02 | 2026-11-02 | One-command installer for the 53-checker PerryLink compliance suite for DeepSeek Harness. |
| 262 | [PerryLink/dsh-dida](https://github.com/PerryLink/dsh-dida) | 0 | 2026-11-02 | 2026-11-02 | TickTick / Dida365 task bridge for DeepSeek Harness: Session-header task panel, agent tools and settings card. |
| 263 | [PerryLink/dsh-github-bot](https://github.com/PerryLink/dsh-github-bot) | 0 | 2026-11-02 | 2026-11-02 | GitHub PRs, reviews, issues and CI for DeepSeek Harness, with approval-gated writes. |
| 264 | [PerryLink/dsh-plugin-dev](https://github.com/PerryLink/dsh-plugin-dev) | 0 | 2026-11-02 | 2026-11-02 | One command for the DeepSeek Harness plugin developer workflow. |
| 265 | [PerryLink/dsh-plugin-ready](https://github.com/PerryLink/dsh-plugin-ready) | 0 | 2026-11-02 | 2026-11-02 | Static preflight for DeepSeek Harness plugin packages. |
| 266 | [PerryLink/dsh-plugin-spec](https://github.com/PerryLink/dsh-plugin-spec) | 0 | 2026-11-02 | 2026-11-02 | DSH plugin standards and practice draft (non-official): ENTRY / FLOW / BOOST, checklists and research notes. |
| 267 | [PerryLink/dsh-plugin-start](https://github.com/PerryLink/dsh-plugin-start) | 0 | 2026-11-02 | 2026-11-02 | Create a minimal, correct DeepSeek Harness plugin skeleton. |
| 268 | [PerryLink/dsh-plugin-tools](https://github.com/PerryLink/dsh-plugin-tools) | 0 | 2026-11-02 | 2026-11-02 | List, diagnose, and install the DSH plugin developer tools. |
| 269 | [PerryLink/dsh-security-pack](https://github.com/PerryLink/dsh-security-pack) | 0 | 2026-11-02 | 2026-11-02 | Security-audit skill pack + plugin_vet supply-chain gate for DeepSeek Harness: eight bilingual skills and a pre-install gate. |
| 270 | [PluckSlugSorrow/dsh-session-history-search](https://github.com/PluckSlugSorrow/dsh-session-history-search) | 0 | 2026-11-02 | 2026-11-02 | Sidebar search across every past Session for DSH: literal substring matching that also works for Chinese, results grouped per Session with highlighted snippets, one click to reopen that conversation. |
| 271 | [Practice019/dsh-fingerprint](https://github.com/Practice019/dsh-fingerprint) | 0 | 2026-11-01 | 2026-11-02 | DSH（DeepSeek Harness）插件：勾选已配置的模型跑 LM 指纹检测，出排名表 + 检测历史；后台运行、随时接回 |
| 272 | [QingJ01/dsh-prompt-prediction](https://github.com/QingJ01/dsh-prompt-prediction) | 0 | 2026-11-02 | 2026-11-02 | Next-prompt ghost text predictions for DeepSeek Harness; Tab or ArrowRight fills an editable draft. |
| 273 | [qiubai-di/dsh-chatgpt-subscription](https://github.com/qiubai-di/dsh-chatgpt-subscription) | 0 | 2026-11-02 | 2026-11-02 | OAuth-only ChatGPT subscription model provider for DeepSeek Harness. |
| 274 | [qiushuiqianpingsha/dsh-san-sheng-liu-bu](https://github.com/qiushuiqianpingsha/dsh-san-sheng-liu-bu) | 0 | 2026-11-02 | 2026-11-02 | 三省六部制流程优化插件 — DSH 按任务难度自动分级：简单降推理、复杂保质量（中书定策/门下审议/尚书六部执行） |
| 275 | [QIUZAIYOU/dsh-panel-control](https://github.com/QIUZAIYOU/dsh-panel-control) | 0 | 2026-11-02 | 2026-11-02 | Reorder, hide and group the global panel entries at the top of the DeepSeek Harness sidebar — drag or arrow-key sorting, per-entry visibility, named groups rendered as titled separators, all persisted locally. · DSH 侧栏顶部的全局面板导航区管理：拖拽排序、逐项隐藏、分组分隔线，本地持久化。 |
| 276 | [qq744287383/dsh-image-size-guard](https://github.com/qq744287383/dsh-image-size-guard) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin: keeps model requests under a gateway's request-body ceiling by replacing old history images with placeholder text, in batches that spare the prompt cache. |
| 277 | [qsheeeeen/dsh-boss-mode](https://github.com/qsheeeeen/dsh-boss-mode) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness agent preset: Boss mode, where the main agent only gives orders - it plans, delegates, follows up, and verifies instead of touching files itself. |
| 278 | [quanwenbo/dsh-context-guard](https://github.com/quanwenbo/dsh-context-guard) | 0 | 2026-11-02 | 2026-11-02 | Merged into quanwenbo/dsh-wide-focus since v0.12.0; archived, no longer installed separately. |
| 279 | [quanwenbo/dsh-wide-focus](https://github.com/quanwenbo/dsh-wide-focus) | 0 | 2026-11-02 | 2026-11-02 | DSH 宽屏模式+任务面板+上下文提醒 |
| 280 | [QuiDaoYuu/dsh-todo-board](https://github.com/QuiDaoYuu/dsh-todo-board) | 0 | 2026-11-02 | 2026-11-02 | DSH（DeepSeek Harness）待办看板插件：项目独立看板 + 总看板、标签与关键词搜索、深浅色主题 |
| 281 | [reincarnationhurry-cell/dsh-fishmate](https://github.com/reincarnationhurry-cell/dsh-fishmate) | 0 | 2026-11-02 | 2026-11-02 | 一个有自己生活的 AI 伙伴：QQ/Telegram 聊天、提醒、自己刷 B站、陪你看直播、逛贴吧、刷抖音，会记住也会遗忘（DeepSeek / DSH） |
| 282 | [rezon-aki/dsh-context-relay](https://github.com/rezon-aki/dsh-context-relay) | 0 | 2026-11-02 | 2026-11-02 | Context relay plugin for DeepSeek Harness (DSH): phase protocol, budget sentinel, controlled compaction and bounded handoffs to fresh sessions. |
| 283 | [Root-7-KHX/ai-voice](https://github.com/Root-7-KHX/ai-voice) | 0 | 2026-11-02 | 2026-11-02 | Local voice studio for DeepSeek Harness: VoxCPM2 voice design + IndexTTS-2.5 emotional speech, runs on your own machine. |
| 284 | [s17765152890-gif/dsh-usage-quota](https://github.com/s17765152890-gif/dsh-usage-quota) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness plugin: Codex-style reasoning-effort control and provider-aware usage/quota in the composer dock. |
| 285 | [Sad-Jack/deepseek-harness-russian](https://github.com/Sad-Jack/deepseek-harness-russian) | 0 | 2026-11-02 | 2026-11-02 | Русский язык для DeepSeek Harness 0.2.1-rc.5 на основе официальных переводов DeepSeek. Russian language pack. |
| 286 | [Saretheya/dsh-cairn](https://github.com/Saretheya/dsh-cairn) | 0 | 2026-11-02 | 2026-11-02 | Keep a task's state across context compaction for DeepSeek Harness: the model writes a checkpoint, and the plugin re-injects it into the system prompt after every compaction. Checkpoints live in the plugin's own folder — nothing is ever written into your workspace. |
| 287 | [Saretheya/dsh-ctx](https://github.com/Saretheya/dsh-ctx) | 0 | 2026-11-02 | 2026-11-02 | Keep a task's state across context compaction for DeepSeek Harness: the model writes a checkpoint, and the plugin re-injects it into the system prompt after every compaction. Checkpoints live in the plugin's own folder — never in your workspace. |
| 288 | [Saretheya/dsh-flashback](https://github.com/Saretheya/dsh-flashback) | 0 | 2026-11-02 | 2026-11-02 | Keep a task's state across context compaction for DeepSeek Harness: the model writes a checkpoint, and the plugin re-injects it into the system prompt after every compaction. Checkpoints live in the plugin's own folder — nothing is ever written into your workspace. |
| 289 | [Saretheya/dsh-track](https://github.com/Saretheya/dsh-track) | 0 | 2026-11-02 | 2026-11-02 | Keep a task's state across context compaction for DeepSeek Harness: the model writes a checkpoint, and the plugin re-injects it into the system prompt after every compaction. Checkpoints live in the plugin's own folder — never in your workspace. |
| 290 | [shendao325/dsh-freebridge](https://github.com/shendao325/dsh-freebridge) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：免账号、免 API Key 接入匿名免费 LLM 上游（Kilo Gateway / OVHcloud），装好即出现在模型选择器 |
| 291 | [shiliman/better-plugin-combine-dsh-society](https://github.com/shiliman/better-plugin-combine-dsh-society) | 0 | 2026-11-02 | 2026-11-02 | 更好的插件交互思路，参考公司的部门协作思路，创立前台来进行更大程度的统合 |
| 292 | [shiliuyu316/dsh-optimization-2027](https://github.com/shiliuyu316/dsh-optimization-2027) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness单会话推理优化插件 |
| 293 | [Sillykjs/dsh-agents-md](https://github.com/Sillykjs/dsh-agents-md) | 0 | 2026-11-02 | 2026-11-02 | A DSH Web tab for viewing and editing the AGENTS.md instruction files DSH loads |
| 294 | [simular-ai/box-plugin](https://github.com/simular-ai/box-plugin) | 0 | 2026-11-02 | 2026-11-02 | box by Simular: plugins that add box (a cloud computer your agent drives over MCP) to Claude Code, DeepSeek Harness and other agents |
| 295 | [skillre/dsh-plugin-skills-manager](https://github.com/skillre/dsh-plugin-skills-manager) | 0 | 2026-11-02 | 2026-11-02 | DSH 技能管理插件：安装、检索、来源追踪更新、批量更新、备份管理、移动/重命名与安全删除 |
| 296 | [sleepwalk2887/transproof](https://github.com/sleepwalk2887/transproof) | 0 | 2026-10-14 | 2026-11-02 | 一个出于翻译校对文献需求而做的小工具 |
| 297 | [Snerou/dsh-hippo](https://github.com/Snerou/dsh-hippo) | 0 | 2026-11-02 | 2026-11-02 | Hippocampus for DeepSeek Harness: workspace files, memories and past sessions rendered as a rotatable neuron graph. |
| 298 | [Snerou/dsh-reason-tree](https://github.com/Snerou/dsh-reason-tree) | 0 | 2026-11-02 | 2026-11-02 | Reason tree for DeepSeek Harness: break a conclusion into a bottom-up argument tree and jump to the source memory. |
| 299 | [spike237/dsh-task-groups](https://github.com/spike237/dsh-task-groups) | 0 | 2026-11-02 | 2026-11-02 | Task groups and an activity bell for the DeepSeek Harness sidebar |
| 300 | [star-kz/dsh-vision-control](https://github.com/star-kz/dsh-vision-control) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：实时视觉感知 + 精确桌面操控——给 AI 一双眼睛和一双手。Real-time screen perception (computer_watch) + full desktop control tool family for DeepSeek Harness. |
| 301 | [starry-sky-blip/dsh-tri-model](https://github.com/starry-sky-blip/dsh-tri-model) | 0 | 2026-11-02 | 2026-11-02 | 多模型分层协同插件 for DeepSeek Harness：规划 → 执行 → 审查 → 自动返工，端点/协议/模型/层级全在设置面板里配。 |
| 302 | [staryu5463/dsh-starter-packs](https://github.com/staryu5463/dsh-starter-packs) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 整合包: install a tested, version-pinned set of community plugins in one click |
| 303 | [tespio/dsh-balance-whale](https://github.com/tespio/dsh-balance-whale) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek account balance and peak/off-peak pricing whale in the DSH sidebar footer. |
| 304 | [TheLiudawei/dsh-codeflow-canvas](https://github.com/TheLiudawei/dsh-codeflow-canvas) | 0 | 2026-10-31 | 2026-11-02 | ComfyUI-style coding workflow canvas for DSH (DeepSeek Harness): nodes are agent-executable coding tasks, links are dataflow dependencies. Dual views, live execution traces, per-run undo. |
| 305 | [thomasly/dsh-web-search-brave](https://github.com/thomasly/dsh-web-search-brave) | 0 | 2026-11-02 | 2026-11-02 | Brave Search provider for DeepSeek Harness (dsh): model-agnostic web_search on the official ctx.web seam. 零依赖，复用你自己的 Brave key。 |
| 306 | [ThomasTZh/dsh-chat-preset](https://github.com/ThomasTZh/dsh-chat-preset) | 0 | 2026-11-01 | 2026-11-02 | DeepSeek Harness bundle that adds a chat preset with web tools, skill loading, and no filesystem or shell access. |
| 307 | [ThomasTZh/dsh-kde-notify](https://github.com/ThomasTZh/dsh-kde-notify) | 0 | 2026-11-01 | 2026-11-02 | KDE Connect notifications for DeepSeek Harness approvals and questions, with the delivery module used by the bundle. |
| 308 | [ThomasTZh/dsh-mcp-auto-permission](https://github.com/ThomasTZh/dsh-mcp-auto-permission) | 0 | 2026-11-01 | 2026-11-02 | DeepSeek Harness bundle adding the Workspace Write + MCP permission preset and MCP approval auto-claim. |
| 309 | [ThomasTZh/dsh-mobile](https://github.com/ThomasTZh/dsh-mobile) | 0 | 2026-10-30 | 2026-11-02 | Unofficial LAN-only Android client for DeepSeek Harness with a local alert bridge. |
| 310 | [TLNing260310/dsh-summary-index](https://github.com/TLNing260310/dsh-summary-index) | 0 | 2026-11-01 | 2026-11-02 | Non-invasive structured compaction index, deterministic anchor guard, and probe tools for DeepSeek Harness (DSH). AI-assisted alpha/demo. |
| 311 | [undefineken/dsh-theme-matrix-glass](https://github.com/undefineken/dsh-theme-matrix-glass) | 0 | 2026-11-02 | 2026-11-02 | Matrix-style binary (0/1) digital rain theme for DeepSeek Harness, gated on task run state, with a frosted-glass token layer. |
| 312 | [UniMars/dsh-whale-widget-dock](https://github.com/UniMars/dsh-whale-widget-dock) | 0 | 2026-11-02 | 2026-11-02 | Companion plugin for dsh-whale-widget: docks the desktop pet to the right sidebar edge. |
| 313 | [uugvkbvkdjbsdbvwxxl/dsh-archived-chats](https://github.com/uugvkbvkdjbsdbvwxxl/dsh-archived-chats) | 0 | 2026-10-28 | 2026-11-02 | Browse archived DSH sessions grouped by workspace in Settings, search them, restore one, or delete a session log for good. |
| 314 | [v-hiker/dsh-message-export](https://github.com/v-hiker/dsh-message-export) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：把助手回答导出为 PNG / PDF / HTML，保留代码高亮、表格、公式与内联图片 |
| 315 | [v-hiker/dsh-session-time-absolute](https://github.com/v-hiker/dsh-session-time-absolute) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：把侧边栏会话行的时间从相对时间换成绝对时间（来源与格式可配，带总开关） |
| 316 | [vaniawang/dsh-trigger-hub](https://github.com/vaniawang/dsh-trigger-hub) | 0 | 2026-11-02 | 2026-11-02 | Event sources for DeepSeek Harness agents: cron/interval schedules, authenticated webhooks, file watchers and deterministic procedures — one ledger, one console, one concurrency limit. |
| 317 | [w756568942/dsh-ptc-router](https://github.com/w756568942/dsh-ptc-router) | 0 | 2026-11-02 | 2026-11-02 | PTC router for DeepSeek Harness: picks PTC or native tool presentation per task and switches it live for the model or the user. |
| 318 | [wangjiaxi/dsh-peak-valley](https://github.com/wangjiaxi/dsh-peak-valley) | 0 | 2026-11-02 | 2026-11-02 | 在 DSH 输入框下方、上下文指示器右边显示峰时 / 谷时倒计时：北京时间工作日 9–12、14–18 点为峰时，其余（含周末与中国法定节假日）为谷时。 |
| 319 | [wangjiaxi/dsh-scheduled-send](https://github.com/wangjiaxi/dsh-scheduled-send) | 0 | 2026-11-02 | 2026-11-02 | 在 DSH 输入框里定时发送消息：发送按钮旁的箭头 → 选时间 → 由宿主到点投递一条真实的用户消息（关掉页面、重启宿主都照发）。 |
| 320 | [WhXcjm/dsh-cost-bar](https://github.com/WhXcjm/dsh-cost-bar) | 0 | 2026-11-01 | 2026-11-02 | DeepSeek Harness 插件：输入栏成本条，显示本轮与会话的估算花费，点开看双栏明细。Composer-bar cost pill for DeepSeek Harness. |
| 321 | [Wizoiz/dsh-skin-keymark](https://github.com/Wizoiz/dsh-skin-keymark) | 0 | 2026-11-02 | 2026-11-02 | DSH 皮肤：壁纸皮肤 + 全窗铺开（侧栏与所有面板一起透出皮肤）+ 纯字体颜色标注 / Wallpaper skin for DeepSeek Harness with full-window spread |
| 322 | [wjlfish/dsh-subscription-sim](https://github.com/wjlfish/dsh-subscription-sim) | 0 | 2026-11-02 | 2026-11-02 | Claude/ChatGPT-style subscription quota simulator for the DeepSeek Harness Web UI |
| 323 | [wnk-ke/dsh-usage-sidebar](https://github.com/wnk-ke/dsh-usage-sidebar) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness sidebar plugin: balance, tokens and cost — official usage when signed in, local session logs otherwise. 8 languages. |
| 324 | [wodaimnd/dsh-offload](https://github.com/wodaimnd/dsh-offload) | 0 | 2026-11-02 | 2026-11-02 | Offload quick "just think it through" sub-questions to web chat.deepseek.com to save local model thinking tokens. Ships a DSH panel for bridge status, self-tests and budget settings, plus a ds_offload agent tool callable in conversation. |
| 325 | [wszw142857-beep/dsh-word-master](https://github.com/wszw142857-beep/dsh-word-master) | 0 | 2026-11-02 | 2026-11-02 | Word Master for DeepSeek Harness — agent preset 形式把素材做成规范 Word 文档：素材转换 → 规格冻结 → 逐节写作 → 质检门 → 审阅界面 → 渲染闸门 → 导出。架构范式学习自 PPT Master。 |
| 326 | [wwjzzy/dsh-weread](https://github.com/wwjzzy/dsh-weread) | 0 | 2026-10-30 | 2026-11-02 | 微信读书简易插件 |
| 327 | [wzciczw/dsh-worktree-toggle](https://github.com/wzciczw/dsh-worktree-toggle) | 0 | 2026-11-02 | 2026-11-02 | One-click git worktree launcher for DeepSeek Harness: start a session in a fresh worktree, with automatic cleanup of idle worktrees. |
| 328 | [wzsx150/dsh-session-speed-pill](https://github.com/wzsx150/dsh-session-speed-pill) | 0 | 2026-11-02 | 2026-11-02 | 一个 DeepSeek Harness 插件，可以显示每一轮对话的token速度信息。--由deepseek AI编写。 |
| 329 | [xia0ne/anti-defensive-dsh](https://github.com/xia0ne/anti-defensive-dsh) | 0 | 2026-11-02 | 2026-11-02 | 阻止论文防御性写作的 DeepSeek Harness 插件：把「发布会原则」装进模型，配离线零依赖的中英检测器（8 条规则、0–100 分）与侧边栏写作健康面板。 |
| 330 | [xiachuyoufeng/dsh-soul-evolve](https://github.com/xiachuyoufeng/dsh-soul-evolve) | 0 | 2026-11-02 | 2026-11-02 | 人格状态与缓慢演化插件：反射弧驱动的状态层 + 场景切面 + 带权重预算的演化条目 |
| 331 | [xiaobaga281/dsh-native-uia](https://github.com/xiaobaga281/dsh-native-uia) | 0 | 2026-11-02 | 2026-11-02 | 御屏 · DSH 桌面操控插件：以 Windows UI Automation 控件树为主通道，纯文本模型即可操控桌面，后台投递动作、批量执行、逐步校验与配方回放 |
| 332 | [xiaobaga281/dsh-session-manager](https://github.com/xiaobaga281/dsh-session-manager) | 0 | 2026-11-02 | 2026-11-02 | 会话管理 · DSH 设置页插件：搜索已归档会话、查看占用体积，多选恢复或永久删除（含残留清理与延迟删除重试） |
| 333 | [xiaobaga281/dsh-token-spend](https://github.com/xiaobaga281/dsh-token-spend) | 0 | 2026-11-02 | 2026-11-02 | 花费 · DSH 设置页插件：按全部 token（输入 + 缓存读 + 缓存写 + 输出）统计用量，按消息 ID 去重，日账本保留已删除会话的花费 |
| 334 | [xiaoran0829/dsh-credential-vault](https://github.com/xiaoran0829/dsh-credential-vault) | 0 | 2026-11-02 | 2026-11-02 | DSH Web 插件：本地加密凭证库，保存密码与 API Token；浏览器查看需主密码，Agent 可通过 vaultctl 查阅。 |
| 335 | [xiaozqi/dsh-dfy-mirror](https://github.com/xiaozqi/dsh-dfy-mirror) | 0 | 2026-11-02 | 2026-11-02 | dfy蓝色大肥鱼手机镜像：给 DSH 加手机投屏，scrcpy 原生窗口当画面，浮窗/桌面窗/设置页三个入口（Windows / Android） |
| 336 | [xinstart-1/dsh-any-rollback](https://github.com/xinstart-1/dsh-any-rollback) | 0 | 2026-11-02 | 2026-11-02 | DSH 对话回退插件：回退到任意一条历史消息，并同时还原工作区文件，包括渲染、ffmpeg、构建脚本等命令产出的文件 |
| 337 | [xinyuzi/copper-oil-plugin](https://github.com/xinyuzi/copper-oil-plugin) | 0 | 2026-10-30 | 2026-11-02 | 铜油比&amp;上证指数 harness插件 |
| 338 | [XPQHyue/dsh-web-split](https://github.com/XPQHyue/dsh-web-split) | 0 | 2026-08-17 | 2026-11-02 | DeepSeek 免费网页版分屏插件：本地反向代理 + DSH 内 iframe 面板，不打断当前任务。\| DeepSeek web split: local reverse proxy + in-DSH iframe panel. |
| 339 | [xuex991/dsh-working-changes](https://github.com/xuex991/dsh-working-changes) | 0 | 2026-11-02 | 2026-11-02 | See files changed from HEAD in the current DSH workspace and inspect each diff in the native right sidebar. |
| 340 | [Xun209/dsh-fatfish-pet-xun209](https://github.com/Xun209/dsh-fatfish-pet-xun209) | 0 | 2026-11-02 | 2026-11-02 | DSH 大肥魚桌寵 · 勛 —— DeepSeek Harness 的大肥魚（鯨魚娘）桌寵。本機版修正：在 DSH 0.2.1-rc.5 上修好了桌面透明窗渲染不出角色的問題。角色形象為社群二創，美術 CC BY-NC-SA 4.0（禁商用）。 |
| 341 | [Xun209/dsh-fatfish-usage-xun209](https://github.com/Xun209/dsh-fatfish-usage-xun209) | 0 | 2026-11-02 | 2026-11-02 | DSH 大肥魚記賬掛件 · 勛 —— DeepSeek Harness 右下角的記賬掛件。本機版改造：單次點擊顯示「當前會話模型」的餘額與會員訂閱週期剩餘用量，而不是固定顯示 DeepSeek。角色形象為社群二創，美術 CC BY-NC-SA 4.0（禁商用）。 |
| 342 | [XunWuJian/dsh-git-session-vault](https://github.com/XunWuJian/dsh-git-session-vault) | 0 | 2026-11-01 | 2026-11-02 | 用私有 Git 仓库备份、同步 DSH 会话记录，三向合并，冲突时停下来问你。 / Back up, restore and sync DSH sessions across devices with your own private Git repo. |
| 343 | [youtaya/ds-plugins](https://github.com/youtaya/ds-plugins) | 0 | 2026-10-29 | 2026-11-02 | deepseek harness tool usage analysis |
| 344 | [Yslehui/dsh-rag-memory](https://github.com/Yslehui/dsh-rag-memory) | 0 | 2026-11-01 | 2026-11-02 | Local RAG long-term memory for DSH QQ bots: SQLite storage, Chinese-friendly BM25 + embedding retrieval with optional rerank, served over local HTTP. |
| 345 | [yuan2042-droid/dsh-plugin-directory](https://github.com/yuan2042-droid/dsh-plugin-directory) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件目录：在 DeepSeek Harness 侧边栏浏览、搜索、排序社区插件 |
| 346 | [yuanzephyr920-oss/dsh-om-messiah](https://github.com/yuanzephyr920-oss/dsh-om-messiah) | 0 | 2026-11-02 | 2026-11-02 | 发送前把提示词改写成机械神教祷文，再由你决定发送祷文还是原文。 |
| 347 | [yukimiracle/dsh-vision-capability](https://github.com/yukimiracle/dsh-vision-capability) | 0 | 2026-11-02 | 2026-11-02 | DSH plugin · prove which models really read images, then declare vision support per model (图片能力检测) |
| 348 | [yulongbai-nov/dsh-agent-control-plane](https://github.com/yulongbai-nov/dsh-agent-control-plane) | 0 | 2026-11-02 | 2026-11-02 | External Agent control plane for DeepSeek Harness: persistent sidebar session tree, six task avatars, team model overrides, workflow map, local telemetry, plugin market — real-GUI E2E, zero-cost mock CI |
| 349 | [zach-bworld/dsh-mermaid](https://github.com/zach-bworld/dsh-mermaid) | 0 | 2026-11-02 | 2026-11-02 | DSH 插件：会话内 Mermaid 图表渲染 |
| 350 | [zach-bworld/dsh-session-notify](https://github.com/zach-bworld/dsh-session-notify) | 0 | 2026-11-02 | 2026-11-02 | DSH client plugin: sidebar badge + system notification when a background session finishes (multi-project workflow) |
| 351 | [zanhoulll/dsh-sticky-wall](https://github.com/zanhoulll/dsh-sticky-wall) | 0 | 2026-11-02 | 2026-11-02 | 偷官方视频提示词和截图做的插件 |
| 352 | [ZeaoZhang/dsh-remote](https://github.com/ZeaoZhang/dsh-remote) | 0 | 2026-10-30 | 2026-11-02 | DeepSeek Harness 插件：透明模式远程开发——标准 read/write/edit/bash/glob/grep、Skill、MCP 直接跑在 SSH 主机；本地镜像 + 远端文件树 + 按需导入本机附件 |
| 353 | [zemyao7/dsh-academic-skills](https://github.com/zemyao7/dsh-academic-skills) | 0 | 2026-11-02 | 2026-11-02 | Academic skills for DeepSeek Harness: literature cards, citation formatting, journal polishing, and review outlines. Chinese-first, model-agnostic, MIT. |
| 354 | [zeus300/dsh-locale-es](https://github.com/zeus300/dsh-locale-es) | 0 | 2026-11-02 | 2026-11-02 | Paquete de idioma espanol (es) para DeepSeek Harness: 62 namespaces, 2879 cadenas de UI y 165 mensajes del shell nativo |
| 355 | [zhanglin-doudou/dsh-notifier](https://github.com/zhanglin-doudou/dsh-notifier) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness 的提示音插件：任务完成、任务中断、需要你介入时，各响一段不同的声音，并在设置页里开关和挑选。 |
| 356 | [zhangyahao/dsh-context-curator](https://github.com/zhangyahao/dsh-context-curator) | 0 | 2026-11-02 | 2026-11-02 | 把 DeepSeek Harness 每轮模型请求里那些冗长但偶尔才用得上的提示词段，折叠成一行索引； 原文留在插件内存里，模型（或你）确实需要细节时再按名字取回。 |
| 357 | [zhi-jie2778/dsh-spectra](https://github.com/zhi-jie2778/dsh-spectra) | 0 | 2026-11-02 | 2026-11-02 | DeepSeek Harness的界面美化插件，多视觉模式、自带预设，海量参数自由调校，打造专属界面 |
| 358 | [ZhiX-Wang/dsh-wudaokou-ai-events](https://github.com/ZhiX-Wang/dsh-wudaokou-ai-events) | 0 | 2026-11-02 | 2026-11-02 | 搜索五道口、清华附近 AI 线下活动的 DeepSeek Harness 插件，保留来源和检索历史。 |
| 359 | [ZhSM27/dsh-waymark](https://github.com/ZhSM27/dsh-waymark) | 0 | 2026-11-02 | 2026-11-02 | Local agent workflow diagnostics and opt-in live reminders for DeepSeek Harness. Alpha — feedback welcome. |
| 360 | [Zhuang-YiQing/dsh-search-outline](https://github.com/Zhuang-YiQing/dsh-search-outline) | 0 | 2026-11-02 | 2026-11-02 | 基于dsh-better-sidebar，在文件预览时提供搜索功能和idea的structure列表。structure列表目前仅支持java、js、html、python。 |
| 361 | [zhukeu2-lang/dsh-takeover](https://github.com/zhukeu2-lang/dsh-takeover) | 0 | 2026-11-02 | 2026-11-02 | 会话移交：右键任意会话「移交会话」，新建一个上下文干净的会话接手，老会话原样保留；附清理页管理交接文档 |
| 362 | [zsenpro/DSH-Quickly-clear](https://github.com/zsenpro/DSH-Quickly-clear) | 0 | 2026-11-01 | 2026-11-02 | DSH（DeepSeek Harness）插件：在已归档对话的菜单里删除对话，连会话日志、投影缓存和工作区记账一起清掉。 |
| 363 | [Zylog82568/dsh-persona-slot](https://github.com/Zylog82568/dsh-persona-slot) | 0 | 2026-11-02 | 2026-11-02 | Per-session persona slot for DeepSeek Harness: one persona per session, a global persona every session inherits, a /persona command and an Installed-page panel. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2090003781/dsh-bridge-connector
- AlyceStocking/dsh-yukimi-theme
- B1lli/dsh-learning-bundle
- chriswang/dsh-conversation-tree
- cmfok/dsh-feishucard
- djornii/dsh-grok-stars
- dz3197578117-lab/dsh-deepseek-web-image
- ecbob/dsh-ctx-meter
- FitBBC/dsh-plugin-tokenmarket
- GinoXiang/dsh-grice
- itr-del/dsh-cue-bank
- itr-del/dsh-feishu
- jerryxff26-alt/dsh-delivery-board
- jli517166-gif/love-suite
- jsunon/dsh-session-delete
- Kenerlee/dsh-moments-aieo
- keyblues/dsh-plugin-fengniao-company-search
- Lee-Eee-Eee/dsh-remote
- luochang212/dsh-god-view
- Meaple-SFKY/dsh-model-orchestrator
- MSSZSD3925/dsh-toolkit
- MYCF711/dsh-qoder-cli
- RootAndSource/dsh-plugin-dynamic-competition-four-images
- STofone/dsh-agent-roster
- TheHeartFickle/dsh-conversation-folding
- TheHeartFickle/dsh-session-manager
- TheHeartFickle/dsh-solo-agent
- ty2922059981-stack/fish-memory
- WhXcjm/dsh-cost-meter
- xwtxbzz/dsh-proof
- yixin2021/dsh-interaction-kit
