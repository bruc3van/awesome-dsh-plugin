# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-05**
- 快照日期 / Snapshot date: **2026-10-05 (UTC)**
- 待审核 / Pending: **172**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **31**
- Star 异常增长 / Star-growth alerts: **2** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-04** / vs previous snapshot **2026-10-04**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **2**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 待审 / pending | 1646 | +508 | 45 | 10d | 日增百星、待审高星 | 日增 +508★；核准即 Top 9 |
| ⚠️ [aerovato/operator-memory](https://github.com/aerovato/operator-memory) | 已核准 / approved | 337 | +124 | 10 | 49d | 日增百星 | 日增 +124★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⚠️ | 1646 | 2026-09-24 | 2026-10-05 | 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完全免费，不限量。 All you do is install this plugin in dsh: no login, no sign-up, no API key — the frontier models are just there, DeepSeek V4.1 Flash and Kimi K3 among them. Completely free, with no usage cap. |
| 2 | [KLRSL/dsh-memory-layer](https://github.com/KLRSL/dsh-memory-layer) | 6 | 2026-08-15 | 2026-10-05 | dsh-memory-layer：给 DeepSeek Harness 的「记忆层」——本地单文件 SQLite、触发式召回、五条可解释清理规则、工作流链；零服务、零 API、零遥测。A memory layer for DSH: local SQLite, trigger-driven recall, explainable cleanup, workflow chains. |
| 3 | [Cyrene-xl/DSH-Cyrene](https://github.com/Cyrene-xl/DSH-Cyrene) | 4 | 2026-10-03 | 2026-10-05 | DeepSeek Harness 插件：增加「纯文本对话模式」agent 预设——整份替换系统提示词进行纯角色对话，只保留联网搜索与表情包。随包人设文本整理自开源项目 Cyrene-Agent（MIT）。 |
| 4 | [Epsirom/braid](https://github.com/Epsirom/braid) | 4 | 2026-09-14 | 2026-10-05 | TypeScript runtime for LLM agent graphs with bounded loops, live updates, isolated Git worktrees, and explicit integration. Framework-agnostic core, OpenAI-compatible runner, and plugins for Pi and DeepSeek Harness. |
| 5 | [Zoria-Lind/behavior-enhancer-generic](https://github.com/Zoria-Lind/behavior-enhancer-generic) | 4 | 2026-10-05 | 2026-10-05 | Behavior discipline for coding agents: read-before-write enforcement, failure convergence, write verification with auto-rollback, and a high-risk command gate. Ships FULL plugin/hook adapters for DSH, Claude Code, Codex, and Pi, plus a host-agnostic SOFT skill with ADAPTIVE adapter guidance. |
| 6 | [cherrchen/rivetdeck](https://github.com/cherrchen/rivetdeck) | 2 | 2026-08-13 | 2026-10-05 | DeepSeek Harness 非官方跨平台桌面封装，预装 Git 与 Theme Studio 插件；与上游同步。 / Non-official Cross-platform DeepSeek Harness desktop app with built-in Git and Theme Studio plugins; synchronized with upstream. |
| 7 | [Heyflyingpig/long-draft-input](https://github.com/Heyflyingpig/long-draft-input) | 2 | 2026-08-14 | 2026-10-05 | Deepseek Harness 插件：用于聚合发送框长文本 |
| 8 | [yezisorft/dsh-netease-island](https://github.com/yezisorft/dsh-netease-island) | 2 | 2026-10-05 | 2026-10-05 | DSH 灵动岛风格的网易云音乐状态挂件：顶部胶囊显示封面/歌名/歌手/进度，支持播放暂停、上下首与进度跳转。数据取自 Windows SMTC，不调用网易云私有接口。 |
| 9 | [A7m0spHere/dsh-feiyuFM](https://github.com/A7m0spHere/dsh-feiyuFM) | 1 | 2026-09-26 | 2026-10-05 | 肥鱼电台 FishFM：面向 DeepSeek Harness（DSH）的社区音乐插件，支持网易云听歌、本地偏好学习、可选模型歌单与新歌筛选。开发预览。 |
| 10 | [bilibiliUID1480494301/relay-hub](https://github.com/bilibiliUID1480494301/relay-hub) | 1 | 2026-10-03 | 2026-10-05 | Self-hosted LLM relay/gateway for LAN (pip install hubrelay): multi-upstream key pool, downstream tokens, usage accounting. 局域网大模型中转站，兼容 OpenAI/Anthropic 协议。 |
| 11 | [CYEzero/dsh-style-setting](https://github.com/CYEzero/dsh-style-setting) | 1 | 2026-10-05 | 2026-10-05 | 为dsh next提供高度自定义的样式设置：配色，卡片，圆角，字体，对话密度 |
| 12 | [ddtcorex/dsh-maestro-core](https://github.com/ddtcorex/dsh-maestro-core) | 1 | 2026-08-27 | 2026-10-05 | Supervisor daemon for DSH Web resilience — auto-detect crashes, rollback to LKG, report |
| 13 | [ddtcorex/maestro-ci](https://github.com/ddtcorex/maestro-ci) | 1 | 2026-08-26 | 2026-10-05 | Reusable GitHub Actions workflows for the Maestro suite — Cordis / DSH |
| 14 | [EvangeliMo/dsh-computer-use](https://github.com/EvangeliMo/dsh-computer-use) | 1 | 2026-10-05 | 2026-10-05 | Computer-use mode for DeepSeek Harness: screen capture, mouse and keyboard synthesis, and window control for operating GUI software that has no agent-facing integration. |
| 15 | [ExpertKT/dsh-agent-team-patch](https://github.com/ExpertKT/dsh-agent-team-patch) | 1 | 2026-10-05 | 2026-10-05 | Reproducible hot-patch for DSH Agent Teams: retire states, per-teammate model selection, conversation-header team panel (DSH Desktop, @deepseek-ai/* 0.2.0-rc.2) |
| 16 | [Femad-6/deepseek-moonpet](https://github.com/Femad-6/deepseek-moonpet) | 1 | 2026-10-05 | 2026-10-05 | MoonPet（月伴）：DeepSeek Harness 状态宠物、番茄钟、多语言字幕与可选励志语音。 |
| 17 | [fugui6688661/glom-continuity](https://github.com/fugui6688661/glom-continuity) | 1 | 2026-09-12 | 2026-10-05 | Recaloom (formerly glom-continuity): local project checkpoints and reviewable handoffs for AI assistants. CLI + optional MCP. |
| 18 | [houdinicc/dsh-todos](https://github.com/houdinicc/dsh-todos) | 1 | 2026-10-05 | 2026-10-05 | Todoist-style todos with a dashboard, agent tools and due reminders for DeepSeek Harness · 类 Todoist 的待办管理 + 仪表盘，内建 Agent 工具与到期提醒 |
| 19 | [LM20230311/awesome-dsh-plugin-cn](https://github.com/LM20230311/awesome-dsh-plugin-cn) | 1 | 2026-08-19 | 2026-10-05 | DeepSeek Harness (dsh) 插件精选列表 — 中文社区维护，含国内可用性评分 |
| 20 | [LM20230311/dsh-bundles](https://github.com/LM20230311/dsh-bundles) | 1 | 2026-08-31 | 2026-10-05 | Curated persona plugin bundles for DeepSeek Harness |
| 21 | [loubaji083-rgb/dsh-plugin-aivideo-shotkit](https://github.com/loubaji083-rgb/dsh-plugin-aivideo-shotkit) | 1 | 2026-10-05 | 2026-10-05 | 把 AI 生成的视频（或录屏）自动切成能直接投喂人物替换工具的片段：识别并裁掉播放器 UI 覆盖层、按场景分镜、逐镜头量运动量、超长镜头再切子段。DSH plugin + standalone CLI, zero runtime deps. |
| 22 | [montersy123/dsh-skill-market](https://github.com/montersy123/dsh-skill-market) | 1 | 2026-10-04 | 2026-10-05 | Browse, search and install SkillHub skills inside DeepSeek Harness. / 在 DeepSeek Harness 内浏览、搜索并安装 SkillHub 技能。 |
| 23 | [O1dZ/dsh-balance-chip](https://github.com/O1dZ/dsh-balance-chip) | 1 | 2026-10-04 | 2026-10-05 | DeepSeek Harness 多供应商余额圆环：悬停看余额，点击看详情，跟随模型自动刷新。 |
| 24 | [panando/dsh-prompt-optimizer](https://github.com/panando/dsh-prompt-optimizer) | 1 | 2026-10-05 | 2026-10-05 | One button prompt optimizer with configurable strategy. |
| 25 | [playinginzzz/Fairy-DSH-compat](https://github.com/playinginzzz/Fairy-DSH-compat) | 1 | 2026-10-03 | 2026-10-05 | DSH Desktop 跨内核兼容版 Fairy 插件套件（视觉 / HDD 主题 / 朗读 / 余额）。基于孤舟版 v0.3.8（原作者 橙汁本色，上游 Guzhou2002）追加 18 个内核兼容提交，适配 dsh 0.1.5-rc.1 → 0.2.0-rc.2（DSH Desktop 2.0.9 / 2.0.17 实测），feature-detection 双内核兼容。一键安装见 Releases。 |
| 26 | [VSworder/deepseek-harness-visual-studio](https://github.com/VSworder/deepseek-harness-visual-studio) | 1 | 2026-10-05 | 2026-10-05 | DeepSeek Harness (dsh) for Visual Studio: review every file edit the agent proposes in Visual Studio's native diff window before it touches disk. Read-only IDE tools over MCP. Community-built, unofficial. \| 在 Visual Studio 原生 diff 里审阅 agent 的每处文件改动，接受才落盘。社区作品，非官方。 |
| 27 | [wjw0419/-deadline-pulse](https://github.com/wjw0419/-deadline-pulse) | 1 | 2026-10-05 | 2026-10-05 | 一个帮你记住deadline的小工具 |
| 28 | [121212165/dsh-plugin-family-cards](https://github.com/121212165/dsh-plugin-family-cards) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness client plugin: rich toolview cards for the 121212165 family plugins — registers per-tool renderers in the tool.call.toolview slot |
| 29 | [19north/dsh-shot](https://github.com/19north/dsh-shot) | 0 | 2026-10-05 | 2026-10-05 | Composer screenshot control for DeepSeek Harness: box-select and annotate a capture in an in-window overlay, optionally hiding the DSH window while capturing. |
| 30 | [439436269-ctrl/dsh-zspace](https://github.com/439436269-ctrl/dsh-zspace) | 0 | 2026-10-05 | 2026-10-05 | 极空间 (ZSpace) NAS plugin for DeepSeek Harness — cross-network agent tools over the desktop client's relay: no LAN, no WebDAV, no SSH. |
| 31 | [7771sd/dsh-text-guard](https://github.com/7771sd/dsh-text-guard) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness plugin: neutralize configured code-point sequences before they reach the session log |
| 32 | [962599627/agent-development-constraints](https://github.com/962599627/agent-development-constraints) | 0 | 2026-10-04 | 2026-10-05 | Intelligent agent development constraints |
| 33 | [a2580vb/dsh-llm-opencode-go](https://github.com/a2580vb/dsh-llm-opencode-go) | 0 | 2026-10-03 | 2026-10-05 | OpenCode Go (opencode.ai/zen/go) as a DeepSeek Harness model provider: model discovery, three wire protocols, x-opencode-session affinity, and the subscription's quota in the sidebar. |
| 34 | [ahian-lee/dsh-bliss-glass](https://github.com/ahian-lee/dsh-bliss-glass) | 0 | 2026-10-05 | 2026-10-05 | XP scenery wallpapers x frosted-glass UI for DeepSeek Harness. Desktop and mobile. |
| 35 | [AL1ghtm3ter/dsh-right-click-menu](https://github.com/AL1ghtm3ter/dsh-right-click-menu) | 0 | 2026-10-04 | 2026-10-05 | DSH（DeepSeek Harness）的右键菜单插件：对着文件、对话里的文件路径、超链接右键，即可在 DSH 内预览、用默认程序打开、在资源管理器定位、复制路径或内容、另存为，以及把链接在侧边栏或系统浏览器中打开。A Codex-style right-click menu for the DSH web UI: files, chat file paths, and hyperlinks. |
| 36 | [alenjdl/dsh-chrome-operation](https://github.com/alenjdl/dsh-chrome-operation) | 0 | 2026-10-05 | 2026-10-05 | DSH desktop plugin — local Chrome bridge exposing browser actions as DSH tools |
| 37 | [Andy-scy/harmonyos-ui-icons](https://github.com/Andy-scy/harmonyos-ui-icons) | 0 | 2026-10-04 | 2026-10-05 | HarmonyOS / ArkTS icon toolkit shipped as a DeepSeek Harness skill bundle - fetch+decrypt Iconsax free icons, ArkTS tint templates, zero-dependency SVG SMIL animation. Run bootstrap.mjs after install. |
| 38 | [anneqaq/dsh-embedded-kit](https://github.com/anneqaq/dsh-embedded-kit) | 0 | 2026-10-05 | 2026-10-05 | 芯片与工具链中立的嵌入式固件工具包（DSH 插件，32 工具 + 11 技能）：体积/构建/总线协议/时序/功耗/异常分诊。公式均标出处，严格区分设计值与实测值，缺数据标 pending 而不编造。 |
| 39 | [ApakohZzz/DSHPluginHub-Market-Framework](https://github.com/ApakohZzz/DSHPluginHub-Market-Framework) | 0 | 2026-10-03 | 2026-10-05 | DeepSeek Harness 插件市场通用模板框架（DSH Plugin Market framework） |
| 40 | [ara-hwang/dsh-ko-locale](https://github.com/ara-hwang/dsh-ko-locale) | 0 | 2026-10-05 | 2026-10-05 | Korean (ko) language pack for the DeepSeek Harness desktop and web GUI: 2,412 strings across 56 namespaces, plus the tooling that extracts, translates, verifies and rebuilds them. |
| 41 | [artorias-zj/dsh-opencode-free-model](https://github.com/artorias-zj/dsh-opencode-free-model) | 0 | 2026-10-05 | 2026-10-05 | Key-free OpenCode Zen free model lane for DeepSeek Harness — Host-only cordis plugin with three-wire streaming decode. |
| 42 | [averyzhoux/dsh-session-balance](https://github.com/averyzhoux/dsh-session-balance) | 0 | 2026-10-05 | 2026-10-05 | ⚖️ Quietly to display the balance. |
| 43 | [beijingwahw/dsh-proof](https://github.com/beijingwahw/dsh-proof) | 0 | 2026-10-04 | 2026-10-05 | Evidence-driven completion proof &amp; regression attribution plugin for DeepSeek Harness (dsh) |
| 44 | [bilibiliUID1480494301/dsh-relayhub-bridge](https://github.com/bilibiliUID1480494301/dsh-relayhub-bridge) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness plugin: join a relay-hub station with a TOIP dynamic password and get per-plugin log accounting on the station side. 用动态口令把 DSH 接入中转站。 |
| 45 | [BrethofAI/brethof-brain-client](https://github.com/BrethofAI/brethof-brain-client) | 0 | 2026-07-04 | 2026-10-05 | brethof-brain client — long-term memory for AI agents: the Claude Code plugin, a Gemini CLI extension and adapters for 20 coding harnesses. Source-available. |
| 46 | [bsfcxz/dsh-ui-ux-pro-max](https://github.com/bsfcxz/dsh-ui-ux-pro-max) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 插件：当请求涉及 UI/UX 时自动加载 ui-ux-pro-max 设计智能技能（内置 7 个技能包，开箱即用） |
| 47 | [ChuxueTeam/dshOwnerCaller](https://github.com/ChuxueTeam/dshOwnerCaller) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 插件 · 需要你本人回到电脑前时弹窗并出声喊你，提示音一直响到你亲手关掉。 \| DSH plugin: pops a card and rings on loop until you dismiss it. |
| 48 | [Daizhdd/dsh-pet-quota](https://github.com/Daizhdd/dsh-pet-quota) | 0 | 2026-10-05 | 2026-10-05 | 给 DSH 桌面宠物挂一条今日 token 额度气泡：轻度/中度/重度三档只用一个彩色圆点表示，没有进度条也没有百分比。A token-quota bubble for the DSH desktop pet. |
| 49 | [dannndouglas/dsh-antigravity-acp](https://github.com/dannndouglas/dsh-antigravity-acp) | 0 | 2026-10-05 | 2026-10-05 | Official Antigravity ACP primary provider for DeepSeek Harness, with DSH-owned tools over MCP and automatic setup. |
| 50 | [daoyu1993-lab/dsh-plugin-composer-expand](https://github.com/daoyu1993-lab/dsh-plugin-composer-expand) | 0 | 2026-10-05 | 2026-10-05 | DSH composer plugin: an expand button that turns the input into an immersive overlay writing surface where Enter makes a newline and only the send button submits. |
| 51 | [dgmico/dsh-markdown-composer](https://github.com/dgmico/dsh-markdown-composer) | 0 | 2026-10-05 | 2026-10-05 | 让 DSH 的输入框支持 Markdown：草稿实时渲染预览 + 格式化工具栏 + 语法快捷键（保留官方 composer 的附件、模型、权限、斜杠命令等全部能力） |
| 52 | [doitian/dsh-music](https://github.com/doitian/dsh-music) | 0 | 2026-10-04 | 2026-10-05 | NetEase Cloud Music (music.163.com) player and AI DJ bundle for DeepSeek Harness |
| 53 | [dreamtao2199/dsh-colors](https://github.com/dreamtao2199/dsh-colors) | 0 | 2026-10-03 | 2026-10-05 | DeepSeek Harness theme plugin: 22 light-only palettes (Pantone / Chinese traditional / Morandi) and 14 composable surface effects, plus twelve-shichen clock rotation, workspace colour binding, per-session colour marks and a nickname/avatar row. |
| 54 | [eghrhegpe/dsh-connect-modelscope-token-plan](https://github.com/eghrhegpe/dsh-connect-modelscope-token-plan) | 0 | 2026-10-04 | 2026-10-05 | ModelScope (modelscope.cn) connect bundle for the DeepSeek Harness: a local-usage quota panel for the free API-Inference tier plus optional provider registration. |
| 55 | [ESROAMER/codex-dsh-collab](https://github.com/ESROAMER/codex-dsh-collab) | 0 | 2026-10-04 | 2026-10-05 | Delegate tasks from Codex to desktop-visible DeepSeek Harness agents, with scoped credentials, persistent sessions and a reusable skill. |
| 56 | [fufu1437/dsh-model-commands](https://github.com/fufu1437/dsh-model-commands) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness (DSH) plugin: declare shell commands in Settings, and every one becomes a tool the model can call directly. |
| 57 | [gosomea/dsh-task-supervisor](https://github.com/gosomea/dsh-task-supervisor) | 0 | 2026-09-24 | 2026-10-05 | DSH task supervision with DAG progress, plan review, persistent control and stage/completion checks. |
| 58 | [Grant-Felix/dsh-ian-rules](https://github.com/Grant-Felix/dsh-ian-rules) | 0 | 2026-09-21 | 2026-10-05 | DSH（DeepSeek Harness）个人插件：把你的项目开发规则交给 agent —— 右侧栏面板可视化维护（全局 + 按项目），并自动注入每个会话的系统提示。 |
| 59 | [H2CO3w/dsh-theme-frost](https://github.com/H2CO3w/dsh-theme-frost) | 0 | 2026-10-05 | 2026-10-05 | DSH (DeepSeek Harness) plugin — turn an image folder into a frosted-glass global wallpaper, keeping the official palette. 一个 DSH壁纸插件。 |
| 60 | [having5548/dsh-downloader](https://github.com/having5548/dsh-downloader) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 下载代理插件：模型下载境外文件时自动走插件自带的代理内核（订阅自包含，不依赖本机 Clash），境内直连，带 sha256 / 大小上限 / 停滞检测与「设置 -&gt; 下载代理」管理面板。 |
| 61 | [HitMargin/ai-proxy](https://github.com/HitMargin/ai-proxy) | 0 | 2026-09-12 | 2026-10-05 | 多上游 AI API 聚合代理：对外一个 OpenAI 兼容入口，对内适配 10 个上游的协议差异（网页端逆向 / 私有 CLI 网关 / 透传）。Deno 本地 + cloudflared 隧道 + Cloudflare Worker，附 DSH 插件设置面板。 |
| 62 | [hoshino114/dsh-server-box](https://github.com/hoshino114/dsh-server-box) | 0 | 2026-10-05 | 2026-10-05 | DSH ????:???????? + ???? + SFTP ????(? dsh-server-deck ??) |
| 63 | [hy-sde/dsh-plugins](https://github.com/hy-sde/dsh-plugins) | 0 | 2026-09-09 | 2026-10-05 | Standalone @hy-sde-org/dsh-* plugins for DeepSeek Harness (monorepo) |
| 64 | [iuuuuuuuu/dsh-model-capability](https://github.com/iuuuuuuuu/dsh-model-capability) | 0 | 2026-09-15 | 2026-10-05 | DSH plugin: configure per-model vision, reasoning levels and capacity from the Models settings UI (no host source changes). |
| 65 | [iuuuuuuuu/dsh-projection-persist](https://github.com/iuuuuuuuu/dsh-projection-persist) | 0 | 2026-10-03 | 2026-10-05 | DSH plugin: keep session projection values (titles) alive across a Host generation reset, so the session list never falls back to the untitled placeholder. |
| 66 | [iuuuuuuuu/dsh-reverse-skill](https://github.com/iuuuuuuuu/dsh-reverse-skill) | 0 | 2026-10-04 | 2026-10-05 | DSH skill provider bundling the zhaoxuya520/reverse-skill corpus (88 skills), with automated upstream sync. |
| 67 | [iuuuuuuuu/dsh-usage-stats](https://github.com/iuuuuuuuu/dsh-usage-stats) | 0 | 2026-09-16 | 2026-10-05 | DSH plugin: per-day token usage and time-to-first-token statistics, broken down by workspace and session. Reads local session logs only. |
| 68 | [jazhu/dsh-hillstone-cli-ops](https://github.com/jazhu/dsh-hillstone-cli-ops) | 0 | 2026-10-05 | 2026-10-05 | DSH plugin: Hillstone/StoneOS device ops in the right sidebar - device CRUD, live SSH terminal, per-connection audit log, and seven agent tools. |
| 69 | [JessenReinhart/dsh-poke-todo](https://github.com/JessenReinhart/dsh-poke-todo) | 0 | 2026-10-05 | 2026-10-05 | Port of jcode's auto-poke incomplete-todos feature as a Cordis plugin for DeepSeek Harness. |
| 70 | [JuYueYe/dsh-personal-model-picker](https://github.com/JuYueYe/dsh-personal-model-picker) | 0 | 2026-09-28 | 2026-10-05 | DSH（DeepSeek Harness）的紧凑双栏模型选择器：左栏供应商、右栏模型，鼠标悬停左栏即切换右栏；输入框旁的触发器同时显示当前模型与推理等级。 |
| 71 | [kbaynes/dsh-exploration-kit](https://github.com/kbaynes/dsh-exploration-kit) | 0 | 2026-10-05 | 2026-10-05 | A hands-on, nine-lesson curriculum for learning DeepSeek Harness by building real plugins. |
| 72 | [kkaporn/dsh-workflow-plugins](https://github.com/kkaporn/dsh-workflow-plugins) | 0 | 2026-10-05 | 2026-10-05 | DSH 插件：在输入框旁边给当前会话单独挑要挂载的插件 \| Per-session plugin picker for DeepSeek Harness |
| 73 | [KouzakiUmi/dsh-model-names](https://github.com/KouzakiUmi/dsh-model-names) | 0 | 2026-10-04 | 2026-10-05 | DSH 插件：为实际启用的模型提供可读名称，统一美化 provider / 模型选择器与设置页；只改 UI 展示，不改变模型 ID、路由、凭据或请求。 |
| 74 | [KouzakiUmi/dsh-model-refresh](https://github.com/KouzakiUmi/dsh-model-refresh) | 0 | 2026-10-02 | 2026-10-05 | DSH 插件：从 pi-ai 上游目录发现和管理模型，支持人工确认、按 provider 开关、安全写入与回滚；models.dev 可作可选备用数据源。 |
| 75 | [KouzakiUmi/dsh-preset-tool-guard](https://github.com/KouzakiUmi/dsh-preset-tool-guard) | 0 | 2026-10-04 | 2026-10-05 | DeepSeek Harness 插件：按 Agent preset 限制每个 Agent 可见的工具，保留全局 provider 挂载；基于 agent/created 与 ctx.tools.restrict()。 |
| 76 | [KouzakiUmi/dsh-prompt-zh](https://github.com/KouzakiUmi/dsh-prompt-zh) | 0 | 2026-10-02 | 2026-10-05 | DeepSeek Harness 插件：将系统提示词本地化为简体中文，并按会话当前可见工具裁剪相关指引；保留英文工具 schema。 |
| 77 | [KouzakiUmi/dsh-tool-discovery](https://github.com/KouzakiUmi/dsh-tool-discovery) | 0 | 2026-10-05 | 2026-10-05 | Progressive discovery of native DSH tool schemas through a single local search tool. |
| 78 | [Lennon-lylt/dsh-agnes](https://github.com/Lennon-lylt/dsh-agnes) | 0 | 2026-10-05 | 2026-10-05 | Agnes AI image/video generation plugin for DeepSeek Harness: agent tools plus a settings page. |
| 79 | [LJH-snow/dsh-tool-airtable](https://github.com/LJH-snow/dsh-tool-airtable) | 0 | 2026-10-05 | 2026-10-05 | Airtable base tools for DeepSeek Harness |
| 80 | [LJH-snow/dsh-tool-browser](https://github.com/LJH-snow/dsh-tool-browser) | 0 | 2026-10-05 | 2026-10-05 | Playwright browser automation tools for DeepSeek Harness with isolated sessions and origin allowlists |
| 81 | [LJH-snow/dsh-tool-cloudflare](https://github.com/LJH-snow/dsh-tool-cloudflare) | 0 | 2026-10-05 | 2026-10-05 | Cloudflare REST tools for DeepSeek Harness: zones, DNS records, Workers scripts, and deployments |
| 82 | [LJH-snow/dsh-tool-context7](https://github.com/LJH-snow/dsh-tool-context7) | 0 | 2026-10-05 | 2026-10-05 | Context7 up-to-date documentation tools for DeepSeek Harness |
| 83 | [LJH-snow/dsh-tool-discord](https://github.com/LJH-snow/dsh-tool-discord) | 0 | 2026-10-05 | 2026-10-05 | Discord REST tools for DeepSeek Harness: communities, channels, messages, search, and moderated reactions |
| 84 | [LJH-snow/dsh-tool-figma](https://github.com/LJH-snow/dsh-tool-figma) | 0 | 2026-10-05 | 2026-10-05 | Figma design context tools for DeepSeek Harness |
| 85 | [LJH-snow/dsh-tool-firecrawl](https://github.com/LJH-snow/dsh-tool-firecrawl) | 0 | 2026-10-05 | 2026-10-05 | Firecrawl web scraping tools for DeepSeek Harness |
| 86 | [LJH-snow/dsh-tool-gmail](https://github.com/LJH-snow/dsh-tool-gmail) | 0 | 2026-10-05 | 2026-10-05 | Gmail read-only tools for DeepSeek Harness: profile, labels, messages, threads, and bounded attachment content |
| 87 | [LJH-snow/dsh-tool-memory](https://github.com/LJH-snow/dsh-tool-memory) | 0 | 2026-10-05 | 2026-10-05 | Local knowledge-graph memory tools for DeepSeek Harness |
| 88 | [LJH-snow/dsh-tool-microsoft-365](https://github.com/LJH-snow/dsh-tool-microsoft-365) | 0 | 2026-10-05 | 2026-10-05 | Read-only Microsoft 365 tools for DeepSeek Harness using Microsoft Graph v1.0 |
| 89 | [LJH-snow/dsh-tool-mongodb](https://github.com/LJH-snow/dsh-tool-mongodb) | 0 | 2026-10-05 | 2026-10-05 | MongoDB inspection and guarded write tools for DeepSeek Harness |
| 90 | [LJH-snow/dsh-tool-n8n](https://github.com/LJH-snow/dsh-tool-n8n) | 0 | 2026-10-05 | 2026-10-05 | n8n workflow automation tools for DeepSeek Harness |
| 91 | [LJH-snow/dsh-tool-redis](https://github.com/LJH-snow/dsh-tool-redis) | 0 | 2026-10-05 | 2026-10-05 | Redis inspection and guarded write tools for DeepSeek Harness |
| 92 | [LJH-snow/dsh-tool-stripe](https://github.com/LJH-snow/dsh-tool-stripe) | 0 | 2026-10-05 | 2026-10-05 | Read-only Stripe billing and customer tools for DeepSeek Harness with Restricted API Key support |
| 93 | [LM20230311/dsh-billing-cn](https://github.com/LM20230311/dsh-billing-cn) | 0 | 2026-08-19 | 2026-10-05 | DeepSeek Harness 中文计费插件 — 支持国内六大模型，人民币计费，消费等级 🐟→🌊 |
| 94 | [LM20230311/dsh-code-review](https://github.com/LM20230311/dsh-code-review) | 0 | 2026-08-19 | 2026-10-05 | DeepSeek Harness AI 代码审查插件 — /review 一键触发，四维度分析，支持自定义规则 |
| 95 | [loubaji083-rgb/aemeath-desktop-pet](https://github.com/loubaji083-rgb/aemeath-desktop-pet) | 0 | 2026-10-05 | 2026-10-05 | 爱弥斯桌面宠物 · 零依赖零构建的 Q 版动态形象 + 点击互动 + DeepSeek 聊天 + 浏览器语音 + 自备数据的声音训练工具链（仅供个人娱乐，禁止商用） |
| 96 | [lov0vo/dsh-composer-autopair](https://github.com/lov0vo/dsh-composer-autopair) | 0 | 2026-10-05 | 2026-10-05 | DSH 聊天输入框的括号/引号自动配对插件 —— Auto-pair brackets and quotes in the DeepSeek Harness chat composer |
| 97 | [luoshuizhiwei/dsh-desktop-restart](https://github.com/luoshuizhiwei/dsh-desktop-restart) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 桌面版重启插件：会话标题栏按钮 / 斜杠命令 / 设置页入口，经分离的 helper 重启整个 Electron 应用 |
| 98 | [luoxin10086/dsh-session-backup](https://github.com/luoxin10086/dsh-session-backup) | 0 | 2026-09-06 | 2026-10-05 | Cold backup for DeepSeek Harness session histories: full + incremental backup with sha256 manifest and loader-mirror pre-validation, plus verified restore. 会话历史冷备份工具。 |
| 99 | [luoxin10086/dsh-session-doctor](https://github.com/luoxin10086/dsh-session-doctor) | 0 | 2026-09-04 | 2026-10-05 | Session doctor for DeepSeek Harness: scan/repair/watch stored session logs against loader-mirror validation, plus render-contract audit. 会话体检与修复插件。 |
| 100 | [luoyukun3-oss/dsh-todo-panel](https://github.com/luoyukun3-oss/dsh-todo-panel) | 0 | 2026-10-05 | 2026-10-05 | DSH sidebar todo panel: shows your memory-bank todos.md in the sidebar, click to fill the input box, collapsible groups with progress, live refresh, and scheduled auto-dispatch |
| 101 | [luoyukun3-oss/gh-my-posts](https://github.com/luoyukun3-oss/gh-my-posts) | 0 | 2026-10-04 | 2026-10-05 | Local dashboard for your own GitHub discussions, issues and inbox (read-only; single Node file, no git needed) |
| 102 | [luzonghao/dsh-input-light](https://github.com/luzonghao/dsh-input-light) | 0 | 2026-10-05 | 2026-10-05 | Input Light — Tab cycles the DSH permission preset (Read Only ⇄ Workspace Write), ⌘S resumes interrupted work with two-step confirm, and the permission chip is color-coded by preset. Client-only DSH plugin. |
| 103 | [luzonghao/dsh-sidebar-light](https://github.com/luzonghao/dsh-sidebar-light) | 0 | 2026-10-04 | 2026-10-05 | Sidebar Light — sidebar Workspaces\|Tags tabs (tag tree / view options / drag / search) + four-state workspace status lights with tree roll-up + session-row tag button &amp; mark-unread + system button row with refresh (⌘R). Client-only, zero-config DSH plugin. |
| 104 | [lxl8182/dsh-llm-error-classify](https://github.com/lxl8182/dsh-llm-error-classify) | 0 | 2026-10-05 | 2026-10-05 | DSH 错误分类修正插件：把适配器一律判成 AUTH 的提供方失败改写为 PROVIDER_ERROR，让网关原文原样显示，而不是被 UI 替换成「API 密钥无效」。 |
| 105 | [m-rui001/dsh-mate-companion](https://github.com/m-rui001/dsh-mate-companion) | 0 | 2026-10-05 | 2026-10-05 | Persisto Mate companion as a DeepSeek Harness (dsh) bundle |
| 106 | [mengjiemy/dsh-dynamic-bg](https://github.com/mengjiemy/dsh-dynamic-bg) | 0 | 2026-10-05 | 2026-10-05 | 给 DSH 铺整屏动态背景：静态图 / GIF / 视频三种都支持，配可调蒙版、模糊、不透明度与面板半透明。只改 CSS 变量、不碰哈希类名。动态背景插件（DSH plugin for dynamic wallpaper/background） |
| 107 | [mengjiemy/dsh-plugin-devkit](https://github.com/mengjiemy/dsh-plugin-devkit) | 0 | 2026-10-05 | 2026-10-05 | DSH 插件开发四件套：冒烟测试 / 副本漂移检测 / 版本对齐检测 / CSS 变量冲突扫描。写完插件跑一遍就知道对不对（DSH plugin devkit: smoke test, sync drift detection, version alignment, CSS variable conflict scan） |
| 108 | [mengjiemy/dsh-session-tools](https://github.com/mengjiemy/dsh-session-tools) | 0 | 2026-10-05 | 2026-10-05 | DSH 会话与数据急救包：会话体检与安全截断 / 会话真校验器 / 工作区数据校验。动聊天记录或配置数据之前先验一遍（DSH session &amp; data safety toolkit: session doctor, real validator, storage schema check） |
| 109 | [meowmeowloong/dsh-session-id-for-desktop](https://github.com/meowmeowloong/dsh-session-id-for-desktop) | 0 | 2026-10-02 | 2026-10-05 | DSH 会话行菜单扩展：复制会话 ID、永久删除会话（含存储）｜DSH sidebar row-menu actions built on official slots |
| 110 | [miao-ge/dsh-project-tabs](https://github.com/miao-ge/dsh-project-tabs) | 0 | 2026-10-05 | 2026-10-05 | DSH plugin: browser-style project tabs in the window title bar - one tab per session, running / finished / waiting-for-approval badges, drag to reorder, restored across restarts. |
| 111 | [miao-ge/dsh-sidebar-context-menu](https://github.com/miao-ge/dsh-sidebar-context-menu) | 0 | 2026-10-05 | 2026-10-05 | DSH plugin: right-click menu on the left sidebar workspace rows - rename, delete workspace, open in VS Code, reveal in File Explorer, plus open in a new tab when dsh-project-tabs is installed. |
| 112 | [MingShi350/kiwix-wiki](https://github.com/MingShi350/kiwix-wiki) | 0 | 2026-10-05 | 2026-10-05 | DSH Host 插件：通过本地 kiwix-serve + ZIM 离线查询维基百科，给无网/内网环境的 Agent 补上事实检索能力。Offline Wikipedia (Kiwix ZIM) query tools for DSH agents in air-gapped or offline environments. |
| 113 | [mingxuanzi/dsh-plugins](https://github.com/mingxuanzi/dsh-plugins) | 0 | 2026-10-05 | 2026-10-05 | Three DeepSeek Harness plugins: desktop pet, consistent global wallpaper, and Open In… with the desktop-build launch fixes. |
| 114 | [Missher12/Missher-DSH-Computer-Browser](https://github.com/Missher12/Missher-DSH-Computer-Browser) | 0 | 2026-10-05 | 2026-10-05 | Visible Browser Use and session-owned Computer Use for compatible Missher DeepSeek Harness Desktop builds. |
| 115 | [Missher12/Missher-DSH-Context-Manager](https://github.com/Missher12/Missher-DSH-Context-Manager) | 0 | 2026-09-27 | 2026-10-05 | Independent Missher plugin: current source, installable bundle and documentation.；桌面入口与其他插件见主页链接。 |
| 116 | [Missher12/Missher-DSH-Output-Renderer](https://github.com/Missher12/Missher-DSH-Output-Renderer) | 0 | 2026-09-27 | 2026-10-05 | Independent Missher plugin: current source, installable bundle and documentation. |
| 117 | [Missher12/Missher-DSH-Reasoning-Effort](https://github.com/Missher12/Missher-DSH-Reasoning-Effort) | 0 | 2026-09-27 | 2026-10-05 | Independent Missher plugin: current source, installable bundle and documentation.；桌面入口与其他插件见主页链接。 |
| 118 | [Missher12/Missher-DSH-Session-Bridge](https://github.com/Missher12/Missher-DSH-Session-Bridge) | 0 | 2026-09-27 | 2026-10-05 | Independent Missher plugin: current source, installable bundle and documentation.；桌面入口与其他插件见主页链接。 |
| 119 | [Missher12/Missher-DSH-Usage-Statistics](https://github.com/Missher12/Missher-DSH-Usage-Statistics) | 0 | 2026-09-27 | 2026-10-05 | Independent Missher plugin: current source, installable bundle and documentation.；桌面入口与其他插件见主页链接。 |
| 120 | [Missher12/Missher-MSE-Learning](https://github.com/Missher12/Missher-MSE-Learning) | 0 | 2026-09-27 | 2026-10-05 | Missher MSE Learning: standalone learning product for DSH and other agents; no personal learning data.；桌面入口与其他插件见主页链接。 |
| 121 | [moazzamak/dsh-knowledge-dag](https://github.com/moazzamak/dsh-knowledge-dag) | 0 | 2026-10-04 | 2026-10-05 | A DeepSeek Harness plugin that shows a research graph: one JSON node store drawn as a node-link graph, a filterable board, and a steering frontier in the right pane, with a knowledge_dag tool for the model. |
| 122 | [mrbeandev/dsh-image-edge-cap](https://github.com/mrbeandev/dsh-image-edge-cap) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness plugin that caps the longest side of images sent to chosen providers or models (default 2000 px), with its own Settings tab |
| 123 | [Nwflower/dsh-perf-lens](https://github.com/Nwflower/dsh-perf-lens) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 插件资源开销面板：按插件归因 CPU / 内存 / 磁盘占用。A DSH plugin panel showing which plugins use the host CPU, memory and disk, attributed per plugin. |
| 124 | [Nwflower/dsh-pilot](https://github.com/Nwflower/dsh-pilot) | 0 | 2026-10-05 | 2026-10-05 | Contract-driven master/subagent dispatch for DeepSeek Harness: the master drafts a contract, cheap subagents execute, and the plugin adjudicates deterministically (acceptance exit codes, git-diff whitelist, receipt cross-check) so the master only reads a verdict. |
| 125 | [ohtokaah-sys/dsh-plugins](https://github.com/ohtokaah-sys/dsh-plugins) | 0 | 2026-08-14 | 2026-10-05 | DSH plugins by ohtokaah-sys: 行为宪法 / 协作模式 / 机械门禁 (tagged dsh-plugin) |
| 126 | [orfeomorello/dsh-localforge](https://github.com/orfeomorello/dsh-localforge) | 0 | 2026-10-05 | 2026-10-05 | Connects DSH to local AI models |
| 127 | [pavel-logachev/dsh-mobile](https://github.com/pavel-logachev/dsh-mobile) | 0 | 2026-10-04 | 2026-10-05 | Неофициальное Android-приложение для DeepSeek Harness: чаты всех проектов, задачи и ответы агента с телефона. QR-привязка, Wi‑Fi/Tailscale, без облачного сервера. Модели и инструменты остаются на компьютере. |
| 128 | [PerseusNana7mi/dsh-model-kit](https://github.com/PerseusNana7mi/dsh-model-kit) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 模型参数补全、导入与编辑插件，支持 USD/CNY 原币种定价。 |
| 129 | [qaz320621/dsh-likemobaxtearm-chumc](https://github.com/qaz320621/dsh-likemobaxtearm-chumc) | 0 | 2026-10-04 | 2026-10-05 | DSH（DeepSeek Harness）右侧栏 SSH 控制台插件 · 安装：https://github.com/qaz320621/dsh-likemobaxtearm-chumc |
| 130 | [qin839/dsh-visual-system](https://github.com/qin839/dsh-visual-system) | 0 | 2026-10-05 | 2026-10-05 | Wallpaper-driven visual system for the DeepSeek Harness Web GUI — one preset.json swaps the whole colour system and the background. 壁纸驱动视觉系统 |
| 131 | [RyabykinIlya/dsh-openrouter-spend](https://github.com/RyabykinIlya/dsh-openrouter-spend) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness plugin: real OpenRouter spend — today's cost under the composer, per-key and per-model analytics and prepaid balance in Settings. Install: dsh plugin add dsh-openrouter-spend |
| 132 | [S1m0n1314/dsh-TaskCompletedNotification-plugin](https://github.com/S1m0n1314/dsh-TaskCompletedNotification-plugin) | 0 | 2026-10-05 | 2026-10-05 | 用WorkBuddy有感，于是照做了个横幅通知 |
| 133 | [sailoflight/dsh-tui-compact-carry](https://github.com/sailoflight/dsh-tui-compact-carry) | 0 | 2026-10-05 | 2026-10-05 | TUI-only DeepSeek Harness plugin: compaction count/progress in the status line + /carry to bring a cached compaction summary into the current session |
| 134 | [Sepolian/dsh-ponytail](https://github.com/Sepolian/dsh-ponytail) | 0 | 2026-10-02 | 2026-10-05 | A thin Ponytail adapter for DeepSeek Harness |
| 135 | [ShihaoShenCreator/dsh-project-agent-instructions](https://github.com/ShihaoShenCreator/dsh-project-agent-instructions) | 0 | 2026-10-05 | 2026-10-05 | Project-level AGENTS.md loader for DeepSeek Harness: injects .dsh/AGENTS.md (and custom paths) into the agent system prompt, with a settings page. |
| 136 | [SolidiFact/dsh-auto-archive](https://github.com/SolidiFact/dsh-auto-archive) | 0 | 2026-10-05 | 2026-10-05 | dsh web plugin: archive finished dsh sessions idle for three weeks, once a night |
| 137 | [SolidiFact/dsh-session-list-cache](https://github.com/SolidiFact/dsh-session-list-cache) | 0 | 2026-10-05 | 2026-10-05 | dsh web plugin: stop an open page from rebuilding every stored session's list row every 5 seconds |
| 138 | [spix18/dsh-auto-continue](https://github.com/spix18/dsh-auto-continue) | 0 | 2026-10-04 | 2026-10-05 | Auto-continue plugin for DeepSeek Harness (DSH): automatically resumes a turn that ended on a 429 rate limit, an exhausted quota, an empty response, or your own configured error codes. |
| 139 | [spix18/dsh-ghidra](https://github.com/spix18/dsh-ghidra) | 0 | 2026-10-04 | 2026-10-05 | Ghidra bridge plugin for DeepSeek Harness (DSH): 218 reverse-engineering tools, single-JVM unified mode, in-tree Ghidra install, Settings UI with doctor/download/folder picker. |
| 140 | [summmmerz/dsh-notes](https://github.com/summmmerz/dsh-notes) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 实战笔记：环境体检、插件筛选与逐条核验、升级与修复记录、token 花费诊断，另附三个 PowerShell 修复/升级脚本。 |
| 141 | [summmmerz/dsh-spend-guard](https://github.com/summmmerz/dsh-spend-guard) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 宿主插件：滚动 10 分钟花费熔断（¥1 弹窗提醒 / ¥2 结束当前轮），弥补 dsh 核心没有花费上限的空白。 |
| 142 | [superSizzzz/dsh-pitfalls](https://github.com/superSizzzz/dsh-pitfalls) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness 插件：把工作中踩过的坑记成可检索的档案（现象 / 怎么踩进去的 / 怎么解决），下次遇到同类问题先翻历史 |
| 143 | [tenebris173/dsh-skin-abyssal](https://github.com/tenebris173/dsh-skin-abyssal) | 0 | 2026-10-05 | 2026-10-05 | 深渊 ABYSSAL —— DSH (DeepSeek Harness) UI 皮肤：近黑深海底 + 单一生物荧光光源 + 玻璃面板，4 底色 × 5 强调色 × 3 圆角密度，一键安装 |
| 144 | [tenebris173/dsh-skin-prts](https://github.com/tenebris173/dsh-skin-prts) | 0 | 2026-10-05 | 2026-10-05 | PRTS —— DSH (DeepSeek Harness) UI 皮肤：罗德岛终端风格，直角切角 + 黑色发丝线 + 黄黑警示条，纸面/终端两套底可跟随应用主题 |
| 145 | [toposferapro/dsh-status-beacon](https://github.com/toposferapro/dsh-status-beacon) | 0 | 2026-10-01 | 2026-10-05 | DeepSeek API availability traffic light for DeepSeek Harness (DSH) |
| 146 | [Ukashi0/dsh-memory-guardian](https://github.com/Ukashi0/dsh-memory-guardian) | 0 | 2026-10-05 | 2026-10-05 | Local-first memory governance for DeepSeek Harness: scoped recall, provenance, conflict review, and a Web dashboard. |
| 147 | [VibeDev-Si/dsh-ecosystem](https://github.com/VibeDev-Si/dsh-ecosystem) | 0 | 2026-10-05 | 2026-10-05 | VibeDev 插件中心：集中了解、一键安装和管理 VibeDev 官方插件 · VibeDev Plugin Center: one-click install and manage the official VibeDev plugins |
| 148 | [VibeDev-Si/dsh-media-viewer](https://github.com/VibeDev-Si/dsh-media-viewer) | 0 | 2026-10-05 | 2026-10-05 | 右侧栏媒体预览：直接预览视频、音频和 HTML，并提供文件夹媒体画廊 · Inline video/audio/HTML preview + media gallery for dsh-better-sidebar |
| 149 | [wajotary/dsh-turn-model](https://github.com/wajotary/dsh-turn-model) | 0 | 2026-10-04 | 2026-10-05 | DeepSeek Harness 插件：在每轮对话上方显示当前使用的模型 |
| 150 | [wbdxy/dsh-tabbit-brain](https://github.com/wbdxy/dsh-tabbit-brain) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness subagent provider: delegate reasoning to Tabbit-served models through a local gateway. Ships its own minimal preset, gateway management, and delegation guidance. |
| 151 | [wuqingzhong2020/dsh-multi-git-repo-manager](https://github.com/wuqingzhong2020/dsh-multi-git-repo-manager) | 0 | 2026-10-05 | 2026-10-05 | 多git代码仓管理 |
| 152 | [WwW7olFWwW/dsh-codebase-watcher](https://github.com/WwW7olFWwW/dsh-codebase-watcher) | 0 | 2026-10-04 | 2026-10-05 | DSH × Codebase Memory 圖譜保鮮插件：讓 CBM 知識圖譜自動跟上各專案的 git HEAD（落後偵測、條件式 CLI 重建、每專案監看、設定頁觀測卡片與 REST 控制面） |
| 153 | [xiaoshuai1024/dsh-brief](https://github.com/xiaoshuai1024/dsh-brief) | 0 | 2026-10-05 | 2026-10-05 | DeepSeek Harness plugin: one tool (brief_fetch) that feeds Hacker News + new high-star GitHub entries to your agent — the agent writes your morning digest. Public APIs only, fetch-on-demand, no polling. |
| 154 | [xingzhen199186/dsh-advisor-group](https://github.com/xingzhen199186/dsh-advisor-group) | 0 | 2026-09-04 | 2026-10-05 | DeepSeek Harness (DSH)插件:主模型在遇到专业、长尾世界知识、高风险或不确定的问题时,召集多位专家顾问模型,在复古 CRT聊天组卡片中真流式对话。 |
| 155 | [xinvxueyuan/cordis-plugin-local-dream](https://github.com/xinvxueyuan/cordis-plugin-local-dream) | 0 | 2026-10-05 | 2026-10-05 | Cordis / DeepSeek Harness plugin — drive the Android Local Dream Stable Diffusion app over its HTTP backend (LAN-first, USB/adb fallback) with automatic device connection management |
| 156 | [xinvxueyuan/cordis-plugin-secret](https://github.com/xinvxueyuan/cordis-plugin-secret) | 0 | 2026-10-05 | 2026-10-05 | Cordis / DeepSeek Harness plugin — the agent asks the human for a secret in an inline conversation card and only ever receives an opaque session-scoped DSH_SECRET_* name, never the value |
| 157 | [xulianglong-akk/dsh-whale-intro](https://github.com/xulianglong-akk/dsh-whale-intro) | 0 | 2026-10-05 | 2026-10-05 | 鲸鱼娘开场：DSH 启动时她先出现，挥手、眨眼，然后连贯地沉回界面里。A pre-boot opening screen for DeepSeek Harness, injected into &lt;head&gt; before the kernel boot page. |
| 158 | [XWIDE/dsh-draft-keeper](https://github.com/XWIDE/dsh-draft-keeper) | 0 | 2026-10-04 | 2026-10-05 | DeepSeek Harness plugin: keeps the images you pasted or attached in the composer, per session; they are mirrored locally and put back when you return to that conversation, and forgotten once the message is sent or you remove them. |
| 159 | [XWIDE/dsh-picflow](https://github.com/XWIDE/dsh-picflow) | 0 | 2026-10-04 | 2026-10-05 | DeepSeek Harness plugin: pasted screenshots become numbered image references, with a composer-dock thumbnail panel, an @-menu image source, and optional auto-insert of the reference at the caret. |
| 160 | [yangwenjie1231/dsh-zhuang-fangyi](https://github.com/yangwenjie1231/dsh-zhuang-fangyi) | 0 | 2026-10-05 | 2026-10-05 | 庄方宜主题 for DeepSeek Harness —— 4 套风格预设（配色/明度/边框/材质/排版）× 浅色深色完整适配，附官方素材壁纸、观测台（官方右栏标签页）、强调色色相自选与启动动效 |
| 161 | [YE-ZINAN/dsh-lan-gate](https://github.com/YE-ZINAN/dsh-lan-gate) | 0 | 2026-10-03 | 2026-10-05 | LAN gateway for DeepSeek Harness. Use your desktop DSH from a phone or iPad over Wi-Fi, with per-device approval and a mobile layout. Nothing to install. |
| 162 | [YE-ZINAN/dsh-skin-im2005](https://github.com/YE-ZINAN/dsh-skin-im2005) | 0 | 2026-10-02 | 2026-10-05 | 2005-era IM skin for DeepSeek Harness (unofficial, original artwork only)QQ2005DSH皮肤 |
| 163 | [yfwu2020/dsh-recent-sessions](https://github.com/yfwu2020/dsh-recent-sessions) | 0 | 2026-10-05 | 2026-10-05 | DSH sidebar plugin: a floating recent-sessions sheet that blends into the sidebar |
| 164 | [YizhouLouisLu/dsh-select-ask](https://github.com/YizhouLouisLu/dsh-select-ask) | 0 | 2026-10-03 | 2026-10-05 | Select text in the DSH Web UI conversation to quote it into the composer, or ask about it in a throwaway side panel that leaves no record. |
| 165 | [YSwo-fei/dsh-qoder-connect](https://github.com/YSwo-fei/dsh-qoder-connect) | 0 | 2026-10-05 | 2026-10-05 | 把 Qoder CN 桌面 App 的模型接入 DeepSeek Harness —— 零配置 provider：自动读凭据、自动续期、1M 上下文档位、联网搜索、图片上传。Bring Qoder CN desktop models into DeepSeek Harness with zero configuration. |
| 166 | [YumenoSayuri/dsh-github-sync](https://github.com/YumenoSayuri/dsh-github-sync) | 0 | 2026-10-05 | 2026-10-05 | 把工作区里的 DSH 插件按「干净副本」推送到各自独立的 GitHub 仓库：/git 指令按需触发，平时不注入任何提示词，token 只存本地一次。 |
| 167 | [zhang-tod/dsh-codebuddy](https://github.com/zhang-tod/dsh-codebuddy) | 0 | 2026-10-03 | 2026-10-05 | Unofficial CodeBuddy provider plugin for DeepSeek Harness |
| 168 | [Zhen-Bo/dsh-translate-tab](https://github.com/Zhen-Bo/dsh-translate-tab) | 0 | 2026-10-05 | 2026-10-05 | Translation plugin for DeepSeek Harness. Adds a two-pane Translate page to the sidebar with model, reasoning effort and prompt controls. |
| 169 | [zhouwu97/ds-pet](https://github.com/zhouwu97/ds-pet) | 0 | 2026-10-05 | 2026-10-05 | 若叶睦形态大肥鱼，欢迎提交 PR 或者加入修改 |
| 170 | [Zian-anson/dsh-prompt-seed](https://github.com/Zian-anson/dsh-prompt-seed) | 0 | 2026-10-05 | 2026-10-05 | DSH composer plugin: turn a one-line seed into an executable prompt behind a semantic fidelity gate; signals infer, directives stay in degree, conversations stay yours. |
| 171 | [zzzxxxxxxxxxx/dsh-balance](https://github.com/zzzxxxxxxxxxx/dsh-balance) | 0 | 2026-10-05 | 2026-10-05 | Live DeepSeek API balance and time-to-empty for the composer dock — projects spend from this machine's own token usage and prices it by peak/off-peak rates. |
| 172 | [zzzxxxxxxxxxx/dsh-dcp](https://github.com/zzzxxxxxxxxxx/dsh-dcp) | 0 | 2026-10-04 | 2026-10-05 | Dynamic context pruning for DeepSeek Harness — model-driven compaction and duplicate-output pruning. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- cherrchen/deepseek-harness-electron
- cradler-ai/dsh-plugin
- Cyrene-xl/dsh-cyrene-chat
- ddtcorex/dsh-maestro-ci
- ddtcorex/dsh-maestro-config
- ddtcorex/dsh-maestro-config-lib
- ddtcorex/dsh-maestro-devkit
- ddtcorex/dsh-maestro-diagram
- ddtcorex/dsh-maestro-guard
- ddtcorex/dsh-maestro-meta
- ddtcorex/dsh-maestro-observe
- ddtcorex/dsh-maestro-supervisor
- ddtcorex/dsh-maestro-sync
- Developerprit/dsh-new-ui
- Grant-Felix/dsh-agent-rules
- KLRSL/dsh-biomemory
- lanyunshijian/dsh-file-download
- luzonghao/dsh-workspace-light
- nijika-boyfriend/dsh-notify-macos
- siweimofang/dsh-plugin-zhishe-baojia-shenhe
- siweimofang/dsh-plugin-zhishe-bikeng-qa
- siweimofang/dsh-plugin-zhishe-zaojia-gusuan
- tttnny/my-dsh
- WwW7olFWwW/dsh-cbm-keeper
- xiajiajun516/dsh-settings-organizer
- yueyexiayu/dsh-subagents
- zf-666888/dsh-session-id-for-desktop
- zoumutou/dsh-attachment-downscale
- zoumutou/dsh-cost-balance
- zoumutou/dsh-web-preview
- zouyuxuan122/dsh-our-free-model
