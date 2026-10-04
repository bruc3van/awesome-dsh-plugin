# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-04**
- 快照日期 / Snapshot date: **2026-10-04 (UTC)**
- 待审核 / Pending: **182**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **21**
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

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-10-03** / vs previous snapshot **2026-10-03**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **7**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [DSH-EAC/EAC-Desktop](https://github.com/DSH-EAC/EAC-Desktop) | 待审 / pending | 1847 | +15 | 70 | 50d | 待审高星 | 核准即 Top 8 |
| ⚠️ [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | 待审 / pending | 158 | — | 7 | 20d | 待审高星 | 核准即榜 #89 |
| ⚠️ [techflag/workdsh](https://github.com/techflag/workdsh) | 待审 / pending | 157 | — | 37 | 23d | 待审高星 | 核准即榜 #89 |
| ⚠️ [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | 已核准 / approved | 1138 | +378 | 36 | 9d | 日增百星 | 日增 +378★；已不进榜单 |
| ⚠️ [aerovato/operator-memory](https://github.com/aerovato/operator-memory) | 已核准 / approved | 213 | +143 | 7 | 48d | 日增百星、榜单跃升 | 日增 +143★；榜单 193→61 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 11861 | +100 | 434 | 51d | 日增百星 | 日增 +100★；已不进榜单 |
| ⚠️ [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) | 已核准 / approved | 667 | +28 | 48 | 48d | 冲入 Top 20 | 冲入 Top 20（22→19） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [DSH-EAC/EAC-Desktop](https://github.com/DSH-EAC/EAC-Desktop) ⚠️ | 1847 | 2026-08-14 | 2026-10-04 | Embracing All Creation (Desktop) — Dedicated to the Harmonious Coexistence of Hundreds of DSH Plugins / 揽尽万象（桌面版） —— 致力于让数百个DSH插件和谐共存 |
| 2 | [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) ⚠️ | 158 | 2026-09-13 | 2026-10-04 | DSH x Blender direct realtime plugin v1.0 — let an AI model drive Blender over a direct TCP channel: viewport frames, custom-angle renders, inner-loop search, render profiling, safe decimation, headless offload, one-call GUI launch (15 tools + blender_rt_plan: 28 families / 183 ops). 配套 skill：sixtysevenlf/dsh-skill-blender-modeling |
| 3 | [techflag/workdsh](https://github.com/techflag/workdsh) ⚠️ | 157 | 2026-09-10 | 2026-10-04 | A WorkBuddy-style desktop workspace powered by the DSH plugin ecosystem. WorkDSH manages projects, assets, experts, skills and connectors locally on desktop. All features are extensible via DeepSeek Harness plugins. Local-first, open ecosystem. |
| 4 | [DSH-EAC/EAC-skin-loader](https://github.com/DSH-EAC/EAC-skin-loader) | 18 | 2026-09-25 | 2026-10-04 | DSH UI Skin Loader / DSH UI 皮肤加载器 |
| 5 | [Lzcdebear/better-dsh-session-deletetool](https://github.com/Lzcdebear/better-dsh-session-deletetool) | 9 | 2026-09-29 | 2026-10-04 | Delete DSH conversations instead of archiving them, see the whole family a conversation spawned (its subagents and derived conversations), and delete in bulk. / 真正删除 DeepSeek Harness 里的会话，并看清它生出的子智能体与派生对话。 |
| 6 | [DSH-EAC/EAC-Pack](https://github.com/DSH-EAC/EAC-Pack) | 7 | 2026-10-01 | 2026-10-04 | Embracing All Creation (Plugin Suite) — Dedicated to the Harmonious Coexistence of Hundreds of DSH Plugins / 揽尽万象（插件整合包） —— 致力于让数百个DSH插件和谐共存 |
| 7 | [chunsi-w/dsh-ctxopt-compaction](https://github.com/chunsi-w/dsh-ctxopt-compaction) | 6 | 2026-10-03 | 2026-10-04 | DeepSeek Harness 的上下文压缩插件 |
| 8 | [lemonhall/asd-ste100-skill-zh](https://github.com/lemonhall/asd-ste100-skill-zh) | 5 | 2026-10-03 | 2026-10-04 | 受控中文技术写作技能：ASD-STE100 的中文对应物，含 stdlib-only 确定性 linter。Controlled Chinese technical writing skill for agents. |
| 9 | [DoveLi-Gu/dsh-showcase](https://github.com/DoveLi-Gu/dsh-showcase) | 3 | 2026-08-19 | 2026-10-04 | Local, verifiable delivery evidence reports and DSH plugin for coding-agent projects. |
| 10 | [orangeofcarl0-sys/dsh-epistemic-fold](https://github.com/orangeofcarl0-sys/dsh-epistemic-fold) | 3 | 2026-09-27 | 2026-10-04 | A contract-preserving context runtime for long-horizon agents on DeepSeek Harness |
| 11 | [yintaocheng/dsh-github-harness](https://github.com/yintaocheng/dsh-github-harness) | 3 | 2026-10-04 | 2026-10-04 | Minimal single-agent GitHub task loop for DeepSeek Harness |
| 12 | [Aenotr/local-imagegen-skill](https://github.com/Aenotr/local-imagegen-skill) | 2 | 2026-10-04 | 2026-10-04 | DSH Skill: 用本机 GPU 上的 ComfyUI + Z-Image Turbo 离线生图（零 API 费用），含显卡能力自检、文生图与局部重绘 CLI |
| 13 | [Exagone313/dsh-trusted-host-is-loopback](https://github.com/Exagone313/dsh-trusted-host-is-loopback) | 2 | 2026-09-29 | 2026-10-04 | Workaround to make dsh web client treat trusted hosts as loopback. |
| 14 | [ZHOU-ZHIZHEN/dsh-terminal-context](https://github.com/ZHOU-ZHIZHEN/dsh-terminal-context) | 2 | 2026-10-04 | 2026-10-04 | Turns a selection in DSH's built-in sidebar terminal into an @file reference in the composer, through a button above the composer and a keyboard shortcut. |
| 15 | [49zr664rb8-hue/dsh-codex-effort](https://github.com/49zr664rb8-hue/dsh-codex-effort) | 1 | 2026-10-04 | 2026-10-04 | 把 DSH 输入框的「模型·推理等级」菜单换成 Codex 那样的横向滑动滑条 |
| 16 | [AliceSaikawa/dsh-webui-m3e](https://github.com/AliceSaikawa/dsh-webui-m3e) | 1 | 2026-09-26 | 2026-10-04 | Material 3 Expressive mobile Web UI plugin for DeepSeek Harness (DSH), switched per device |
| 17 | [AnFRuJ/dsh-lark-plus](https://github.com/AnFRuJ/dsh-lark-plus) | 1 | 2026-10-04 | 2026-10-04 | DeepSeek Harness × 飞书/Lark 双向桥接：私聊/群聊、卡片按钮、审批与提问回传、任务板、goal、定时任务；另含全程本机的语音转写（音频不出本机）与网页端播放条。Feishu/Lark bridge for DSH + fully local voice transcription. |
| 18 | [Astemiir/dsh-client-locale-ru](https://github.com/Astemiir/dsh-client-locale-ru) | 1 | 2026-10-04 | 2026-10-04 | Russian localization plugin for the DeepSeek Harness (dsh) web UI - adds the ru language (63 namespaces, 3119 strings) |
| 19 | [cckbc/dsh-session-recycle-bin](https://github.com/cckbc/dsh-session-recycle-bin) | 1 | 2026-10-04 | 2026-10-04 | DSH plugin for DeepSeek Harness: delete a session into a recycle bin (kept for 15 days by default), restorable or permanently deletable. DSH 插件：删除会话进回收站（默认保留 15 天），可还原或彻底删除。 |
| 20 | [ccneedb/dsh-information-environment-governance](https://github.com/ccneedb/dsh-information-environment-governance) | 1 | 2026-10-02 | 2026-10-04 | An additive project-governance layer for DeepSeek Harness. Verifiable prototype — see the status section before relying on it. |
| 21 | [CLnum42/dsh-DSchat](https://github.com/CLnum42/dsh-DSchat) | 1 | 2026-10-03 | 2026-10-04 | 在 DSH 原生面板里聊 DeepSeek 网页端，并一键迁移成 harness 会话 |
| 22 | [cslkkl/dsh-cpa-switch](https://github.com/cslkkl/dsh-cpa-switch) | 1 | 2026-10-02 | 2026-10-04 | DeepSeek Harness 插件：在 DSH 里管理 CLIProxyAPI 的账号（余额 / 签到 / 切换账号），自动注册四个渠道的对话模型，CPA 随 DSH 启停 —— 装完即用。 |
| 23 | [datit309/dsh-telegram-bridge](https://github.com/datit309/dsh-telegram-bridge) | 1 | 2026-10-03 | 2026-10-04 | Full 2-way Telegram Remote Control, Vision, Voice, Shell, Diff &amp; Sound Notifications for DeepSeek Harness (DSH) |
| 24 | [DSH-EAC/EAC-skin-packages](https://github.com/DSH-EAC/EAC-skin-packages) | 1 | 2026-09-22 | 2026-10-04 | EAC 与 AIO 自定义皮肤的 AI Prompt 包、来源清单与 Schema |
| 25 | [du460138504/dsh-dual-balance](https://github.com/du460138504/dsh-dual-balance) | 1 | 2026-10-04 | 2026-10-04 | 在 DSH 侧栏底部同时显示 DeepSeek 官方余额与 WorkBuddy 积分余额 — show DeepSeek balance and WorkBuddy credits in the DeepSeek Harness sidebar. |
| 26 | [gnk478/dsh-client-ui-wallpaper](https://github.com/gnk478/dsh-client-ui-wallpaper) | 1 | 2026-10-04 | 2026-10-04 | 把本地图片/视频（Dynamic Wallpaper.app 素材）用作 DSH 桌面客户端壁纸的客户端插件 · Wallpaper/image background plugin for the DeepSeek Harness desktop client |
| 27 | [haoxuanjng-lang/kaggle-solutions-skills](https://github.com/haoxuanjng-lang/kaggle-solutions-skills) | 1 | 2026-10-04 | 2026-10-04 | Maintained Kaggle solution research skill: evidence, transfer experiments, archive retrieval and decision cards |
| 28 | [Ianzhyh/workbuddy-to-dsh](https://github.com/Ianzhyh/workbuddy-to-dsh) | 1 | 2026-10-04 | 2026-10-04 | 把本机 WorkBuddy 桌面端已登录的模型原生接进 DeepSeek Harness：本地桥 + 数据控制台 + dsh 原生插件（自带 bridge/控制台，单文件夹即可安装） |
| 29 | [ItQianChen/dsh-github-flow](https://github.com/ItQianChen/dsh-github-flow) | 1 | 2026-10-04 | 2026-10-04 | 基于 GitHub CLI (gh) 为 DeepSeek Harness (DSH) 打造的现代化原生工作流集成插件。 深度打通本地 Git 仓库开发与远程 GitHub 协作（PR、Issue、Actions CI 诊断与代码审查），兼备 Agent 模型工具、人类 Slash 指令以及原生 Web UI 双重视图。 |
| 30 | [LiangHeOvO/dsh-zh-cn](https://github.com/LiangHeOvO/dsh-zh-cn) | 1 | 2026-10-04 | 2026-10-04 | DSH 插件：让所有会话、所有模型的思考过程与回复永久使用简体中文，直到卸载。Force Simplified Chinese thinking and replies in every DeepSeek Harness session. |
| 31 | [Madao1210/dsh-deep-reading](https://github.com/Madao1210/dsh-deep-reading) | 1 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 的深度阅读插件——逐章理解书籍，不是摘要，不是搬运目录，而是真正理解并解释。有AI自己的观点，让用户真正读懂一本书DeepSeek Harness's deep reading plugin—understand books chapter by chapter, retain traceable reading memories, enabling users to truly comprehend a book |
| 32 | [OMSociety/dsh-xiaoai-bridge](https://github.com/OMSociety/dsh-xiaoai-bridge) | 1 | 2026-10-02 | 2026-10-04 | DSH 插件：把小爱音箱接进 DeepSeek Harness。喊一声唤醒词，答案从音箱里念出来。 |
| 33 | [overact/dsh-statusline-plus](https://github.com/overact/dsh-statusline-plus) | 1 | 2026-10-04 | 2026-10-04 | Statusline for DeepSeek Harness Web: quotas, Git, context, API reference costs, Subagents and streaming speed |
| 34 | [Quimos-M/dsh-sidebar-size](https://github.com/Quimos-M/dsh-sidebar-size) | 1 | 2026-10-04 | 2026-10-04 | 为DeepSeek Harness开发的右侧边栏尺寸持久化记忆插件 |
| 35 | [ShoTakujo/dsh-platform-usage](https://github.com/ShoTakujo/dsh-platform-usage) | 1 | 2026-10-03 | 2026-10-04 | DSH 用量插件：读 DeepSeek 开放平台的账号级数据，把该账号下全部 API Key 的消耗画成 52 周热力图（每天/每周/累计可切）。不是只统计 DSH 自己。 |
| 36 | [Stmol/dsh-rub-cost](https://github.com/Stmol/dsh-rub-cost) | 1 | 2026-10-02 | 2026-10-04 | DSH plugin: session cost in RUB in the conversation dock |
| 37 | [ventisyn/dsh-agent-control](https://github.com/ventisyn/dsh-agent-control) | 1 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 插件：用一个确认流程与一套失败码，删除一个会话或单独一轮对话 |
| 38 | [xieani090612/dsh-remote-panel](https://github.com/xieani090612/dsh-remote-panel) | 1 | 2026-10-03 | 2026-10-04 | DSH（DeepSeek Harness）插件：探测本机 WSL 发行版与远程 SSH 机器  注：主要部分均为ai编写 |
| 39 | [yijiezhong/dsh-output-setting](https://github.com/yijiezhong/dsh-output-setting) | 1 | 2026-10-03 | 2026-10-04 | DSH output settings plugin: auto-expand reasoning/tool nodes, code block font size &amp; line height, model output language (auto/Chinese/English) |
| 40 | [YOU-SHOULD-KNOW-ME/dsh-rail-music](https://github.com/YOU-SHOULD-KNOW-ME/dsh-rail-music) | 1 | 2026-10-04 | 2026-10-04 | DSH Web 插件：轮次导航轨道随本机正在播放的声音律动。彩虹频谱、悬停还原、不占用端口。Windows WASAPI / Linux PulseAudio / macOS CoreAudio。 |
| 41 | [yuanstarstar/dsh-maid](https://github.com/yuanstarstar/dsh-maid) | 1 | 2026-10-03 | 2026-10-04 | DSH 女仆模式插件 |
| 42 | [zczgagat/token2rice](https://github.com/zczgagat/token2rice) | 1 | 2026-10-04 | 2026-10-04 | 一个能把你消耗的token转换为白米饭的dsh插件 |
| 43 | [1134478268-dev/dsh-peak-clock](https://github.com/1134478268-dev/dsh-peak-clock) | 0 | 2026-10-03 | 2026-10-04 | DeepSeek Harness 峰谷时段 + 用量/费用指示器 · Peak/off-peak timing with token usage and spend tracking for the DSH Web UI |
| 44 | [123wansui-989/dsh-flight-compare](https://github.com/123wansui-989/dsh-flight-compare) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: registers flight_compare, fetches Travelpayouts fares, groups by flight and date, marks lowest price in Markdown table. |
| 45 | [AGImentu/dsh-prompt-editor](https://github.com/AGImentu/dsh-prompt-editor) | 0 | 2026-10-04 | 2026-10-04 | DSH 插件：在「更多设置」里查看、修改并保存所有 agent 共用的全局系统提示词，保存后立即生效。 |
| 46 | [AKHYui/DSH-Remote-plugin](https://github.com/AKHYui/DSH-Remote-plugin) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness desktop plugin that exposes a local harness to your own relay over a single outbound WebSocket - no inbound ports, works behind NAT. Forwards a fixed op allowlist, session events, prompts and attachments, and relays approvals or questions to the companion mobile app. Node ESM, zero runtime dependencies. |
| 47 | [ALIve114514awa/dsh-prompt-optimizer](https://github.com/ALIve114514awa/dsh-prompt-optimizer) | 0 | 2026-10-04 | 2026-10-04 | Guided prompt optimization for DeepSeek Harness: Harness AI and Codex, editable previews, and explicit draft insertion across desktop, Web and TUI. |
| 48 | [AndPuQing/dsh-acp-plus](https://github.com/AndPuQing/dsh-acp-plus) | 0 | 2026-10-04 | 2026-10-04 | Extended Agent Client Protocol server bundle for DeepSeek Harness (dsh) |
| 49 | [annkun/dsh-memory](https://github.com/annkun/dsh-memory) | 0 | 2026-10-04 | 2026-10-04 | Deepseek harness memory |
| 50 | [apherchin/dsh-photo2dsh-by-lan](https://github.com/apherchin/dsh-photo2dsh-by-lan) | 0 | 2026-10-03 | 2026-10-04 | 手机拍照经局域网一键进 PC 文件夹，DSH 插件面板可配落地目录 \| DSH plugin: one-tap photo transfer from phone to a configurable folder on this PC over the LAN, with a config card on the Plugins page. |
| 51 | [apherchin/dsh-session-rewind](https://github.com/apherchin/dsh-session-rewind) | 0 | 2026-10-04 | 2026-10-04 | （已合并进 dsh-wonder-tools）重新生成（从这里重来）：把某轮及之后从模型视野作废、原提示词回填输入框，支持分支找回。 |
| 52 | [apherchin/dsh-wonder-tools](https://github.com/apherchin/dsh-wonder-tools) | 0 | 2026-10-04 | 2026-10-04 | DSH 工具箱（装配包）：一个插件装好五个功能 —— 删除对话 / 重新生成 / 队友命令 / 跨会话提醒 / 首轮结束自动命名。插件页呈现为 1 张卡 + 5 行组件，每行独立开关。 |
| 53 | [atlas5301/dsh-remote-sessions](https://github.com/atlas5301/dsh-remote-sessions) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: run remote DSH agent sessions through the unchanged native UI — strict-SSH resident lifecycle, session/file-tree/terminal forwarding, durable bindings |
| 54 | [AzureSkyHuHu/dsh-chinese-mode-modern](https://github.com/AzureSkyHuHu/dsh-chinese-mode-modern) | 0 | 2026-10-04 | 2026-10-04 | Chinese mode for DeepSeek Harness: a composer toggle that opens a panel for reply / reasoning / tool-narration language. |
| 55 | [bauerelizabeth07139/dsh-plugin-dxpdf](https://github.com/bauerelizabeth07139/dsh-plugin-dxpdf) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness plugin: convert Word .docx to PDF with the dxpdf Rust/Skia engine — no Microsoft Office, no LibreOffice, no network. It repairs the schema-invalid constructs WPS Office writes and restores Word's odd/even page parity. |
| 56 | [bauerelizabeth07139/image-gen-mcp](https://github.com/bauerelizabeth07139/image-gen-mcp) | 0 | 2026-07-23 | 2026-10-04 | DeepSeek Harness plugin and Codex plugin: configurable, provider-agnostic image generation over MCP, plus a bundled image-generation skill. Exposes mcp__image_generation__image_generate. |
| 57 | [bauerelizabeth07139/math-rigor](https://github.com/bauerelizabeth07139/math-rigor) | 0 | 2026-09-16 | 2026-10-04 | Auditable mathematical proving for DeepSeek Harness: a local stdio MCP server (23 tools), a bundled workflow skill, and the /prove and /audit-proof commands. proven / refuted / inconclusive are never conflated, and unproven steps are reported, not hidden. |
| 58 | [bauerelizabeth07139/mcp-simple-image](https://github.com/bauerelizabeth07139/mcp-simple-image) | 0 | 2026-08-03 | 2026-10-04 | DeepSeek Harness plugin and MCP server: text-to-image through a StepFun-compatible /images/generations endpoint, with the configurable base URL, key and model. Exposes mcp__simple_image__simple_image. |
| 59 | [bauerelizabeth07139/opencode-eyes](https://github.com/bauerelizabeth07139/opencode-eyes) | 0 | 2026-08-13 | 2026-10-04 | DeepSeek Harness plugin and OpenCode MCP server: describe an image with StepFun step-3.7-flash, so a text-only model can see. Exposes mcp__opencode_eyes__describe_image. |
| 60 | [bauerelizabeth07139/opencode-eyes-nvidia](https://github.com/bauerelizabeth07139/opencode-eyes-nvidia) | 0 | 2026-08-20 | 2026-10-04 | DeepSeek Harness plugin and OpenCode MCP server: describe an image with any of seven NVIDIA NIM vision models, rotating several API keys. Exposes mcp__opencode_eyes_nvidia__describe_image. |
| 61 | [bauerelizabeth07139/opencode-ppocr-mcp](https://github.com/bauerelizabeth07139/opencode-ppocr-mcp) | 0 | 2026-08-23 | 2026-10-04 | DeepSeek Harness plugin and OpenCode MCP server: local PP-OCRv6 Medium OCR (PaddleOCR on ONNX Runtime, CPU) for images and multi-page PDFs. Exposes mcp__ppocr__ocr_image and mcp__ppocr__ocr_pdf. |
| 62 | [bauerelizabeth07139/opencode-tokenrhythm-image-mcp](https://github.com/bauerelizabeth07139/opencode-tokenrhythm-image-mcp) | 0 | 2026-08-12 | 2026-10-04 | DeepSeek Harness plugin and OpenCode MCP server: generate images with TokenRhythm (qwen-image-2.0, wan2.7-image) and save them to a directory you choose. Exposes mcp__tokenrhythm_image__generate_image. |
| 63 | [bauerelizabeth07139/plan-guardian-skill](https://github.com/bauerelizabeth07139/plan-guardian-skill) | 0 | 2026-07-23 | 2026-10-04 | DeepSeek Harness plugin: the plan-guardian skill — a mandatory 7-step plan with binary acceptance criteria, executed through worker subagents and validated by memoryless verifiers. The Codex original is kept. |
| 64 | [bauerelizabeth07139/simple-plan](https://github.com/bauerelizabeth07139/simple-plan) | 0 | 2026-08-01 | 2026-10-04 | DeepSeek Harness plugin: the simple-plan skill — plan 2-7 steps, execute with worker subagents, verify every deliverable with a memoryless verifier, fix in at most three cycles. The Codex original is kept. |
| 65 | [bjpd6/dsh-client-ui-usage-hud](https://github.com/bjpd6/dsh-client-ui-usage-hud) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness sidebar HUD: account balance, gifted balance, cumulative spend and token usage. |
| 66 | [Cangjier/dsh-tts](https://github.com/Cangjier/dsh-tts) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: text to speech with a pluggable engine - Edge read-aloud (per-word timings, no API key) or any local TTS command line. One utterance, or a multi-speaker script laid out on a verified timeline. |
| 67 | [cfyofjackie/dsh-selection-quote](https://github.com/cfyofjackie/dsh-selection-quote) | 0 | 2026-10-04 | 2026-10-04 | DSH client plugin: select text in a conversation and attach it to the composer as an atomic quote reference. |
| 68 | [Cicero010/dsh-whale-atelier](https://github.com/Cicero010/dsh-whale-atelier) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 的鲸鱼皮肤包：全界面壁纸 + 金/银描边装饰 + 蕾丝蝴蝶结 + 角落立绘 + 环境粒子，支持第三方皮肤包与 Agent 状态联动 |
| 69 | [ckanner/dsh-plugin-chatgpt](https://github.com/ckanner/dsh-plugin-chatgpt) | 0 | 2026-10-03 | 2026-10-04 | Use your ChatGPT subscription as a model provider in DeepSeek Harness (dsh). Sign in with ChatGPT over OAuth — no API key — and the account's own models appear in the model picker. |
| 70 | [copylee711/dsh-better-display](https://github.com/copylee711/dsh-better-display) | 0 | 2026-09-29 | 2026-10-04 | 让 DeepSeek Harness Web 的回答图文并茂，并为联网搜索内容加上 GPT 式引用角标。 |
| 71 | [copylee711/dsh-computer-use](https://github.com/copylee711/dsh-computer-use) | 0 | 2026-10-02 | 2026-10-04 | DeepSeek Harness 的 Windows 电脑控制插件：截图、鼠标、键盘、窗口与剪贴板工具，按应用授权，Esc 暂停。 |
| 72 | [copylee711/dsh-image-gen](https://github.com/copylee711/dsh-image-gen) | 0 | 2026-10-01 | 2026-10-04 | DeepSeek Harness 生图插件：侧边栏绘画页与图库，对话中生图和改图，可自定义服务商端点与代理。 |
| 73 | [copylee711/dsh-office](https://github.com/copylee711/dsh-office) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 插件：AI 直接在你打开的 Word / Excel / PowerPoint 里改文档，改动实时可见，可以一起编辑（Windows） |
| 74 | [copylee711/dsh-remote-control](https://github.com/copylee711/dsh-remote-control) | 0 | 2026-10-03 | 2026-10-04 | DeepSeek Harness 远程控制插件：手机扫码、电脑确认后，用手机浏览器继续会话、审批和管理设置。 |
| 75 | [d0ublecl1ck/dsh-session-radar](https://github.com/d0ublecl1ck/dsh-session-radar) | 0 | 2026-09-28 | 2026-10-04 | DSH 侧边栏的未读 + 待办 + 状态读数中枢：跨重启也不丢的未读，⌘⇧J / ⌘⇧I 顺序定位，⌘⇧K 弹出未读与待决策总览；另带六项会话状态读数。 |
| 76 | [d0ublecl1ck/dsh-session-watch](https://github.com/d0ublecl1ck/dsh-session-watch) | 0 | 2026-10-02 | 2026-10-04 | 已并入 dsh-session-radar（会话状态读数 + 未归档告警），本仓库不再单独维护。Merged into dsh-session-radar; no longer maintained separately. |
| 77 | [Depar7ure/dsh-desktop-web-refresh](https://github.com/Depar7ure/dsh-desktop-web-refresh) | 0 | 2026-10-04 | 2026-10-04 | DSH Desktop 插件：标题栏「编辑」右侧新增蓝底白字伪 3D「刷新」按钮；有对话运行时禁用并弹警告，全静默才允许刷新。 |
| 78 | [dgmico/dsh-workspace-recency-order](https://github.com/dgmico/dsh-workspace-recency-order) | 0 | 2026-10-04 | 2026-10-04 | DSH 插件：按工作区内最新会话活动时间自动重排左侧工作区顺序（Host 侧，写入官方持久工作区顺序，不覆盖官方 UI） |
| 79 | [doitian/dsh-provider-aliyun](https://github.com/doitian/dsh-provider-aliyun) | 0 | 2026-10-04 | 2026-10-04 | Aliyun DashScope (Bailian) model provider preset for DeepSeek Harness: adds an OpenAI-compatible aliyun route with a starter Qwen catalog to the llm-pi-ai adapter. |
| 80 | [drscrewdriver/dsh-mcp-registry](https://github.com/drscrewdriver/dsh-mcp-registry) | 0 | 2026-10-03 | 2026-10-04 | DeepSeek Harness 插件：MCP 连接器受治理注册表（stdio / streamable-http）——四级 fail-closed 授权、mcpServers 导入大声报错、凭据全程脱敏、review-all 诚实拒绝 |
| 81 | [du-yuxuan/OneKey-Models](https://github.com/du-yuxuan/OneKey-Models) | 0 | 2026-10-04 | 2026-10-04 | OneKey-Models — one-click access to all 108 TokenDance models in DeepSeek Harness. API support powered by TokenDance. |
| 82 | [epik7th/dsh-task-worktree](https://github.com/epik7th/dsh-task-worktree) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: task-scoped git worktrees for the dsh 0.2.0 host line (fork of Letter2025/dsh-task-worktree) |
| 83 | [fred-chen/dsh-subagent-model-director](https://github.com/fred-chen/dsh-subagent-model-director) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness plugin: smart subagent model assignment - model profiles (intelligence/speed/tags), tag-first matching, load balancing |
| 84 | [G57651/dsh-diy-layout](https://github.com/G57651/dsh-diy-layout) | 0 | 2026-10-03 | 2026-10-04 | DIY Layout for the DSH home sidebar — one/two columns, icon-only with tooltips, ordering &amp; hiding. No source changes. |
| 85 | [GalileoNio/dsh-cost](https://github.com/GalileoNio/dsh-cost) | 0 | 2026-10-04 | 2026-10-04 | A DeepSeek Harness plugin: per-segment Session cost in the composer statistics strip, priced from the harness model catalog (41 providers, ~1495 models). |
| 86 | [gaoyian7251/dsh-window-state](https://github.com/gaoyian7251/dsh-window-state) | 0 | 2026-10-04 | 2026-10-04 | 在 DSH 桌面客户端「设置 → 通用设置」中选择启动窗口状态（默认 / 最大化 / 全屏）。Windows. |
| 87 | [happyDABAI7/jiafang-plugins](https://github.com/happyDABAI7/jiafang-plugins) | 0 | 2026-09-20 | 2026-10-04 | DeepSeek Harness plugins for textile-factory management: document extraction (image/text), voice work-report transcription, whitelisted NL-to-SQL query. |
| 88 | [HarryHeYu/dsh-sessionflow](https://github.com/HarryHeYu/dsh-sessionflow) | 0 | 2026-10-04 | 2026-10-04 | Cross-agent session continuity for DeepSeek Harness — continue work from Codex, Claude Code, Grok, ZCode and more with sessionFlow. |
| 89 | [HongtaoWang75/dsh-video-see](https://github.com/HongtaoWang75/dsh-video-see) | 0 | 2026-10-04 | 2026-10-04 | Look at video with your own eyes: a DeepSeek Harness plugin that samples frames with ffmpeg and returns them to the agent as real images, each labelled with its timestamp — no vision API, no key, nothing leaves the machine. |
| 90 | [HOPE-LGNF/dsh-state-notifier](https://github.com/HOPE-LGNF/dsh-state-notifier) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 的完成、审批、提问、受阻和错误通知插件 |
| 91 | [hoshino114/dsh-skill-hub](https://github.com/hoshino114/dsh-skill-hub) | 0 | 2026-10-04 | 2026-10-04 | DSH Skill Hub - browse and manage local Agent Skills, and browse/download skills from ClawHub, ModelScope and QwenPaw |
| 92 | [HTROY/dsh-terminal-font](https://github.com/HTROY/dsh-terminal-font) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness 插件：在设置中为侧边栏终端选择字体与字号，修正 oh-my-posh / Powerline / Nerd Font 图标显示为方块的问题。 |
| 93 | [huangxp12/dsh-recent-sessions](https://github.com/huangxp12/dsh-recent-sessions) | 0 | 2026-10-04 | 2026-10-04 | Recent sessions across every workspace in one panel for DeepSeek Harness (DSH) - plus deferred notes that come back when you reopen the conversation. |
| 94 | [jessehoo89/markdown_monitor](https://github.com/jessehoo89/markdown_monitor) | 0 | 2026-09-21 | 2026-10-04 | 实时监控目录，把新增/改动的文档自动转成 Markdown（docx/doc/xlsx/xls/pdf/图片）。扫描件与复杂版面 PDF 走多后端 OCR（本地+云端，带熔断切换），配置热加载、state.db 防重复转换；Windows 安装程序 + Linux 单文件一键安装 |
| 95 | [jianyuepei/dsh-session-mindmap](https://github.com/jianyuepei/dsh-session-mindmap) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: turn a session into a self-contained interactive HTML mind map. |
| 96 | [Joker-Principal/dsh-proxy-control](https://github.com/Joker-Principal/dsh-proxy-control) | 0 | 2026-10-04 | 2026-10-04 | 在运行中控制 DeepSeek Harness 的出站代理 |
| 97 | [JokerAn/dsh-mcp-manager](https://github.com/JokerAn/dsh-mcp-manager) | 0 | 2026-10-04 | 2026-10-04 | DSH（DeepSeek Harness）的 MCP 总管理器：一个页面装好、找到、开关、改配所有 MCP 服务器 —— 活体 MCP Registry / npm 目录搜索、卡片式一键安装、自定义 stdio 与流式 HTTP 接入。 |
| 98 | [jonah791/dsh-goal-ops](https://github.com/jonah791/dsh-goal-ops) | 0 | 2026-10-04 | 2026-10-04 | 目标生命周期扩展（不改 DSH 核心包）：goal_abandon 放弃原语 —— 以 block + blockedReason.code='abandoned' 承载主动放弃，停续跑且原因可辨识 |
| 99 | [joslynSmall/dsh-plugin-graphify-watch](https://github.com/joslynSmall/dsh-plugin-graphify-watch) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness plugin: supervise one \`graphify watch\` per project so code changes rebuild your graphify knowledge graph automatically, from any source. |
| 100 | [joslynSmall/dsh-plugin-reasoning-effort-sync](https://github.com/joslynSmall/dsh-plugin-reasoning-effort-sync) | 0 | 2026-10-04 | 2026-10-04 | Synchronize DeepSeek Harness model reasoning-effort levels with gateway metadata and models.dev |
| 101 | [juliankang4/dsh-locale-ko](https://github.com/juliankang4/dsh-locale-ko) | 0 | 2026-10-04 | 2026-10-04 | Korean (한국어) language pack for the DeepSeek Harness (dsh) Web UI and desktop app |
| 102 | [juliankang4/dsh-ui-scale](https://github.com/juliankang4/dsh-ui-scale) | 0 | 2026-10-04 | 2026-10-04 | Interface scale setting (50% to 200%) for the DeepSeek Harness (dsh) Web UI and desktop app |
| 103 | [JWE24-code/dsh-pii-anonymizer](https://github.com/JWE24-code/dsh-pii-anonymizer) | 0 | 2026-10-03 | 2026-10-04 | Deterministic, one-way PII anonymizer at the start of the DeepSeek Harness agent loop |
| 104 | [kmagwenzi/dsh-ai-suplex](https://github.com/kmagwenzi/dsh-ai-suplex) | 0 | 2026-09-28 | 2026-10-04 | The 7-7-7 execution loop for DeepSeek Harness — plan, run, capture, close, compound, with a human gate. |
| 105 | [KouzakiUmi/dsh-guard](https://github.com/KouzakiUmi/dsh-guard) | 0 | 2026-10-04 | 2026-10-04 | DSH 沙箱加固工具集：持久审计与文件回滚（dsh-audit-rollback）、可指定模型的自动审批（dsh-auto-review-router）。 |
| 106 | [ladyya0306/dsh-office-plugin](https://github.com/ladyya0306/dsh-office-plugin) | 0 | 2026-10-04 | 2026-10-04 | DSH办公程序复用与精确填报插件；当前rc7，提供Windows离线安装方式。 |
| 107 | [LeeGuanWei-a/serial-story-writer](https://github.com/LeeGuanWei-a/serial-story-writer) | 0 | 2026-10-04 | 2026-10-04 | 为 DeepSeek Harness 提供的短篇集创作插件,提供「世界观 → 多短篇集」项目格式,共享人物档案跨集引用,SHA-256 资产修订号保证并发一致,所有写入经原生一次审批。 |
| 108 | [lemonhall/birefnet-cutout-skill](https://github.com/lemonhall/birefnet-cutout-skill) | 0 | 2026-10-03 | 2026-10-04 | 抠人物的方法与实测边界：模型代际、rembg 的 1024 陷阱、官方 2048 HR-matting 的软 alpha、8GB 显卡跑不了 2048 的原因，以及用「半透明像素占比」客观量发丝。附两个通用脚本（GPU 快路线 / 官方高清路线）。DSH 与 Codex 都能用。 |
| 109 | [lemonhall/dsh-calendar-dock](https://github.com/lemonhall/dsh-calendar-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏通用日历：月视图 + 当天事件 + 接下来；本地存储，Agent 也能加删勾（calendar_panel）。 |
| 110 | [lemonhall/dsh-calorie-dock](https://github.com/lemonhall/dsh-calorie-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏卡路里日记：内置食物热量表，选食物+克数自动算 kcal（calorie_panel）。 |
| 111 | [lemonhall/dsh-dock-batch](https://github.com/lemonhall/dsh-dock-batch) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏十个插件的总文与面板拼图（RSS/日历/账本/卡路里/待办/番茄/IRC/QQ邮箱 + 车载电台/金融终端）。 |
| 112 | [lemonhall/dsh-finance-dock](https://github.com/lemonhall/dsh-finance-dock) | 0 | 2026-10-02 | 2026-10-04 | DSH right-sidebar finance terminal: cross-asset quotes, 3D globe, risk-appetite gauge, Chinese glossary, bilingual news, and a two-way state channel with the agent (finance_panel tool). |
| 113 | [lemonhall/dsh-irc-dock](https://github.com/lemonhall/dsh-irc-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏 IRC 客户端：node tls 直连或走 HTTP CONNECT 隧道，SASL、自签证书、限次重连（irc_panel）。 |
| 114 | [lemonhall/dsh-ledger-dock](https://github.com/lemonhall/dsh-ledger-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏记账本：记一笔、本月结余、分类统计；金额按分存整数（ledger_panel）。 |
| 115 | [lemonhall/dsh-lucy-companion](https://github.com/lemonhall/dsh-lucy-companion) | 0 | 2026-09-30 | 2026-10-04 | Lucy 伴侣插件：复用 dsh-whale-widget 的数据管线，把余额/今日/峰谷/每轮消耗念给左侧 Lucy 的气泡 |
| 116 | [lemonhall/dsh-media-dock](https://github.com/lemonhall/dsh-media-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏媒体台：抖音/YouTube 链接进来，本机 yt-dlp 下载 + ffmpeg 转码 + 官方 speechToText（SenseVoice）本地转写，字幕进面板，一键让 Agent 总结。 |
| 117 | [lemonhall/dsh-pomodoro-dock](https://github.com/lemonhall/dsh-pomodoro-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏番茄闹钟：专注/休息循环，计时只存 endsAt、切 tab 不中断（pomodoro_panel）。 |
| 118 | [lemonhall/dsh-qqmail-dock](https://github.com/lemonhall/dsh-qqmail-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏 QQ 邮箱：读最近邮件、看正文、发纯文本；凭据只读私有文件，发送要 confirm（qqmail_panel）。 |
| 119 | [lemonhall/dsh-radio-dock](https://github.com/lemonhall/dsh-radio-dock) | 0 | 2026-10-02 | 2026-10-04 | Car radio dock for DeepSeek Harness: three.js in-car view + winding night road + radio-browser stations (City Pop). |
| 120 | [lemonhall/dsh-rss-dock](https://github.com/lemonhall/dsh-rss-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏 RSS 阅读器：订阅源在配置里，未读/收藏双向状态，Agent 也能读（rss_panel 工具）。 |
| 121 | [lemonhall/dsh-skin-crt](https://github.com/lemonhall/dsh-skin-crt) | 0 | 2026-09-30 | 2026-10-04 | 磷光 CRT —— DSH Web GUI 皮肤：P1 磷光绿、点阵中文字体、扫描线与余晖辉光 |
| 122 | [lemonhall/dsh-todo-dock](https://github.com/lemonhall/dsh-todo-dock) | 0 | 2026-10-03 | 2026-10-04 | DSH 右侧栏轻量待办：一行一件、回车就加、勾掉即完成（todo_panel）。 |
| 123 | [lemonhall/dsh-tts-reader](https://github.com/lemonhall/dsh-tts-reader) | 0 | 2026-10-02 | 2026-10-04 | DSH 插件：用小艺（Edge TTS）边写边念助手的回答，并可重读任意一条历史回答。零依赖直连、逐句流式合成、Web Audio 无缝连播。 |
| 124 | [lgtuusb/dsh-peer](https://github.com/lgtuusb/dsh-peer) | 0 | 2026-10-04 | 2026-10-04 | ???? AI ????????(??? DSH ??) |
| 125 | [lihanhong2002/dsh-minimax-multimodal](https://github.com/lihanhong2002/dsh-minimax-multimodal) | 0 | 2026-10-04 | 2026-10-04 | MiniMax multimodal tools for DeepSeek Harness: image understanding, image generation, speech synthesis, and transcription. |
| 126 | [linke-e/dsh-opening-animation](https://github.com/linke-e/dsh-opening-animation) | 0 | 2026-10-03 | 2026-10-04 | DeepSeek Harness Web 的开场动画插件：每次 dsh web 页面加载时，在全屏遮罩上播放你选择的开场内容——图片动画或视频——结束后以可配置的过渡效果把画面交还主界面。 |
| 127 | [liuyu-f/dsh-plugin-session-cascade-delete](https://github.com/liuyu-f/dsh-plugin-session-cascade-delete) | 0 | 2026-10-04 | 2026-10-04 | Permanently delete DeepSeek Harness sessions from the UI (header button + sidebar row menu) or via the session_delete tool: removes the log directory, projection cache and workspace accounting, cascades into the subagent sessions a session owns (your forked branches are never touched), and stops a running agent first. |
| 128 | [liyuqian/dsh-flutter-sandbox](https://github.com/liyuqian/dsh-flutter-sandbox) | 0 | 2026-10-04 | 2026-10-04 | dsh plugin: let Flutter and Dart run inside DeepSeek Harness's workspace-write sandbox |
| 129 | [Lorn404/dsh-rift](https://github.com/Lorn404/dsh-rift) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness community plugin: four official-mode Rift clones. Authorized research only — see README disclaimer. |
| 130 | [LostAbaddon/dsh-workspace-sort](https://github.com/LostAbaddon/dsh-workspace-sort) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness sidebar plugin: orders Workspaces by their newest conversation and makes the per-Workspace visible conversation count configurable in Settings (default 5). |
| 131 | [luzonghao/dsh-workspace-light](https://github.com/luzonghao/dsh-workspace-light) | 0 | 2026-10-04 | 2026-10-04 | DSH 插件：侧栏工作区行四态灯（🟡 待交互 / 🔄 执行中 / 🟢 已完成 / ⏰ 仅定时）+ 会话「⋯」菜单 Mark as unread。纯客户端，外观复用宿主原生组件。 |
| 132 | [lvzhiyuan0308/dsh_session_delete](https://github.com/lvzhiyuan0308/dsh_session_delete) | 0 | 2026-10-04 | 2026-10-04 | A DSH plugin for deleting a sidebar conversation after confirmation |
| 133 | [markelayan/billion-context-relief](https://github.com/markelayan/billion-context-relief) | 0 | 2026-10-04 | 2026-10-04 | Agent-requested context export &amp; delete for DSH — companion to billion-context-dsh (ACP). No automation: every change is an explicit agent call. |
| 134 | [maxwell234smith/dsh-desktop-update-entry](https://github.com/maxwell234smith/dsh-desktop-update-entry) | 0 | 2026-10-04 | 2026-10-04 | DSH 桌面版插件：在侧栏常驻一个「检查更新」入口（官方指示器只在有更新时才出现） |
| 135 | [Microqian2th/dsh-codex-effort-slider](https://github.com/Microqian2th/dsh-codex-effort-slider) | 0 | 2026-10-04 | 2026-10-04 | Codex 风格的推理等级滑条（DeepSeek Harness 插件）：可拖动连续滑条 + 高档位渐变星尘特效 |
| 136 | [mikazuhe13-ui/dsh-hook](https://github.com/mikazuhe13-ui/dsh-hook) | 0 | 2026-10-03 | 2026-10-04 | DSH (DeepSeek Harness) lifecycle hooks settings panel plugin — 7-event coverage, guard rules with live toggles, run status. dsh-plugin |
| 137 | [mubaid/dsh-linkedin-agent](https://github.com/mubaid/dsh-linkedin-agent) | 0 | 2026-10-04 | 2026-10-04 | Eleven LinkedIn agent skills for DeepSeek Harness (port of Jakeschincariol/linkedin-agent-skill), MIT. |
| 138 | [nedzen/dsh-web-search-brave](https://github.com/nedzen/dsh-web-search-brave) | 0 | 2026-10-04 | 2026-10-04 | Brave Search provider for DeepSeek Harness (dsh) — independent dsh plugin hardened against web_search hangs, missing request timeouts, and HTTP 429 rate-limit storms. |
| 139 | [NeutronStar714/dsh-budget-watcher](https://github.com/NeutronStar714/dsh-budget-watcher) | 0 | 2026-10-02 | 2026-10-04 | 适配 DeepSeek Harness 的预算监视器插件，让 API 花费变透明。通过图标展示账户余额、当前轮/会话的花费、以及任务花钱速率，提醒或帮助用户阻断突发性大量烧钱（例如未经过协商发放几十个 Subagent 等等）A Deepseek Harness plugin that makes cost transparent: floating window showing balance left on your API account, what the turns you ran actually cost, and how fast is your agent using your balance for tasks. |
| 140 | [ntesicn/dsh-screenshot-xn](https://github.com/ntesicn/dsh-screenshot-xn) | 0 | 2026-10-02 | 2026-10-04 | Full-screen screenshot panel for DSH: marquee select, annotate, insert/copy/save, with offline OCR and translation. |
| 141 | [p455enger/dsh-web-tray](https://github.com/p455enger/dsh-web-tray) | 0 | 2026-10-03 | 2026-10-04 | Windows tray + desktop shortcut for dsh web in WSL, with switchable auto start/stop and live status (fork of dsh-wsl-tray) |
| 142 | [p56568833/dsh-plugin-groups](https://github.com/p56568833/dsh-plugin-groups) | 0 | 2026-10-04 | 2026-10-04 | Category tabs for the DeepSeek Harness Plugins page's Installed list, with patch plugins nested under their parent. |
| 143 | [panando/dsh-quote-sidechat](https://github.com/panando/dsh-quote-sidechat) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: turn any selected reply snippet into an atomic reference chip — delete as one unit, click to jump back to the source, structured serialization on send. |
| 144 | [piggy00544/dsh-workproof](https://github.com/piggy00544/dsh-workproof) | 0 | 2026-10-04 | 2026-10-04 | Local-first DeepSeek Harness plugins for artifact receipts and inspectable evidence. Community project by 牛村木木山. |
| 145 | [ruodongyu/dsh-sidebar-browser-control](https://github.com/ruodongyu/dsh-sidebar-browser-control) | 0 | 2026-10-04 | 2026-10-04 | Lightweight, controlled browser tools for the native DeepSeek Harness desktop sidebar. No desktop app patch required. |
| 146 | [SherinG-official/dsh-siyuan-api](https://github.com/SherinG-official/dsh-siyuan-api) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness plugin for SiYuan (思源笔记): search notes, create documents, read/append blocks, and run read-only SQL over the local kernel HTTP API. |
| 147 | [shuqingyang666/dsh-github-adapted](https://github.com/shuqingyang666/dsh-github-adapted) | 0 | 2026-10-04 | 2026-10-04 | Adapted build of @perrylink/dsh-github 0.7.15 for DeepSeek Harness 0.2.0-rc.2 — classic-script client registration (upstream #12/#13, fix PR #14) |
| 148 | [smj-1680/dsh-plugin-liquid-glass](https://github.com/smj-1680/dsh-plugin-liquid-glass) | 0 | 2026-10-04 | 2026-10-04 | 适用于 DSH 桌面端的液态玻璃美化插件：输入框、消息气泡、侧栏与顶栏等主要界面元素改为液态玻璃材质，可搭配各类壁纸插件使用（需深色模式）。 |
| 149 | [SMSMy/dsh-arabic](https://github.com/SMSMy/dsh-arabic) | 0 | 2026-10-04 | 2026-10-04 | Arabic for DeepSeek Harness: bidi-safe RTL rendering for mixed Arabic/English content plus a full Arabic UI language pack (3,228 strings) |
| 150 | [SnowNight777/dsh-llm-gateway](https://github.com/SnowNight777/dsh-llm-gateway) | 0 | 2026-09-30 | 2026-10-04 | 把 DSH 已配置的模型共享给本机程序——无需重复配置，用 OpenAI 兼容接口直接调用 |
| 151 | [snylonue/dsh-spawn](https://github.com/snylonue/dsh-spawn) | 0 | 2026-10-04 | 2026-10-04 | A tool to enable bashless dsh |
| 152 | [Sorphone/dsh-eyecare-bg](https://github.com/Sorphone/dsh-eyecare-bg) | 0 | 2026-10-04 | 2026-10-04 | 给 DeepSeek Harness（DSH）换护眼绿背景的插件：覆盖 31 个背景 token（画布/卡片/侧栏/输入框/代码块…），自带设置面板并注册进 DSH 设置页。零依赖、无客户端构建、不改 app.asar。 |
| 153 | [Starlight-bananice/dsh-chatgpt-plugin](https://github.com/Starlight-bananice/dsh-chatgpt-plugin) | 0 | 2026-10-04 | 2026-10-04 | 在 DeepSeek Harness 里用 ChatGPT 账号登录，并把 ChatGPT 方案模型当成普通 provider 使用 / Sign in with ChatGPT inside DeepSeek Harness and use ChatGPT-plan models as a normal provider route |
| 154 | [Starlight-bananice/dsh-gpt-agent-preset](https://github.com/Starlight-bananice/dsh-gpt-agent-preset) | 0 | 2026-10-04 | 2026-10-04 | 为 OpenAI GPT-6 系列调优的 DeepSeek Harness Agent 预设：把'防止空转'做成识别无进展而非限制调用次数 / An execution-first DeepSeek Harness Agent preset for the OpenAI GPT-6 family |
| 155 | [Stmol/dsh-prompt-lib](https://github.com/Stmol/dsh-prompt-lib) | 0 | 2026-10-04 | 2026-10-04 | DSH plugin: keep your own prompts in Settings and switch them on per chat |
| 156 | [syc67169-source/dsh-team-employees](https://github.com/syc67169-source/dsh-team-employees) | 0 | 2026-10-04 | 2026-10-04 | 把 DeepSeek Harness 变成多员工协同团队：员工花名册、内容流水线、一道人工闸门，外加一个会动的办公室界面 |
| 157 | [SYXliuliuliu/dsh-apply-model-all](https://github.com/SYXliuliuliu/dsh-apply-model-all) | 0 | 2026-10-04 | 2026-10-04 | Apply the current session's model to every other session in one click, from a control beside the composer's model picker. |
| 158 | [tcgbp/dsh-flash-net-mon](https://github.com/tcgbp/dsh-flash-net-mon) | 0 | 2026-10-04 | 2026-10-04 | Network monitor, outbound audit and network-alert provider for dock-flash — a GitHub mirror of the authoritative Gitee repository. |
| 159 | [thezavtrak-a11y/dsh-image-annotate](https://github.com/thezavtrak-a11y/dsh-image-annotate) | 0 | 2026-10-04 | 2026-10-04 | Draw on a pasted screenshot in the DeepSeek Harness web GUI: pen, arrow, rectangle, ellipse and text stamps, flattened into a PNG attachment at the image native resolution. |
| 160 | [thezavtrak-a11y/dsh-locale-ru](https://github.com/thezavtrak-a11y/dsh-locale-ru) | 0 | 2026-09-11 | 2026-10-04 | Russian language pack for the DeepSeek Harness web UI - a community DSH client plugin adding ru to Settings -&gt; General -&gt; Language |
| 161 | [thezavtrak-a11y/dsh-session-tabs](https://github.com/thezavtrak-a11y/dsh-session-tabs) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek Harness Web UI plugin: browser-style tabs for open Sessions - switch, close, reorder by drag, and tear a tab off into a separate window. |
| 162 | [Tim-ReJet/dsh-plugin-doctor](https://github.com/Tim-ReJet/dsh-plugin-doctor) | 0 | 2026-10-04 | 2026-10-04 | Audit a DeepSeek Harness plugin repository against the dsh-plugin listing rules: dsh.bundle manifest, bundle patch rows, prerelease-safe @deepseek-ai/dsh peer ranges, shipped code, repo age, and the dsh-plugin topic. |
| 163 | [Tim-ReJet/dsh-stack-composer](https://github.com/Tim-ReJet/dsh-stack-composer) | 0 | 2026-10-04 | 2026-10-04 | Compose a working stack of DeepSeek Harness plugins for a purpose — DevOps, content creation, research — by scoring the curated dsh-plugin registry's categories, descriptions, capability flags and red lines against the roles the purpose needs. Read-only. |
| 164 | [Tleon-H/dsh-prompt-prefill](https://github.com/Tleon-H/dsh-prompt-prefill) | 0 | 2026-10-02 | 2026-10-04 | DeepSeek Harness 插件：回答结束后在输入框预填一条灰色的下一句建议（Tab / → 采纳），输入框为空时按 ↑ 填入上一次发送的内容 |
| 165 | [ttmouse/dsh-muse](https://github.com/ttmouse/dsh-muse) | 0 | 2026-10-04 | 2026-10-04 | Muse-like persistence for DSH: durable autonomy across restarts + silent proactive heartbeat |
| 166 | [ttmouse/dsh-recent](https://github.com/ttmouse/dsh-recent) | 0 | 2026-10-04 | 2026-10-04 | The dsh web GUI sidebar gains a Codex-style 最近 (Recent) section — every workspace's newest sessions in one jump list — and both sidebar lists fold to five rows |
| 167 | [u-fw/dsh-token-ledger](https://github.com/u-fw/dsh-token-ledger) | 0 | 2026-10-04 | 2026-10-04 | Cross-project token ledger for DeepSeek Harness: totals every project's provider-billed token usage |
| 168 | [UnitySirx/dsh-kp-notes](https://github.com/UnitySirx/dsh-kp-notes) | 0 | 2026-10-03 | 2026-10-04 | DeepSeek Harness 知识点(Knowledge Point)笔记插件：把 Markdown 笔记目录变成卡片式学习画布，章节/小节/知识点/题目分层，支持 KaTeX 公式、Mermaid 流程图、思维导图与面板内编辑 |
| 169 | [vi0let-dev/dsh-session-trash](https://github.com/vi0let-dev/dsh-session-trash) | 0 | 2026-10-04 | 2026-10-04 | 给 DeepSeek Harness 补上会话删除：删除先进回收站可还原，彻底删除会清干净日志、工作区记账、归档标记与宿主会话表。 |
| 170 | [vrvtvy/dsh-cache-hit-precision](https://github.com/vrvtvy/dsh-cache-hit-precision) | 0 | 2026-10-04 | 2026-10-04 | Precise three-decimal cache-hit readout for the DeepSeek Harness (DSH) Web composer stats row. 将 DSH Web 统计行的缓存命中率原位精化到三位小数。 |
| 171 | [Wany-i/dsh-model-order](https://github.com/Wany-i/dsh-model-order) | 0 | 2026-10-03 | 2026-10-04 | Reorder the model list of any llm-pi-ai route from Settings &gt; Models; the composer model menu follows the same order. |
| 172 | [whaoran1018-cmd/dsh-plugin-weather](https://github.com/whaoran1018-cmd/dsh-plugin-weather) | 0 | 2026-10-04 | 2026-10-04 | Global weather, multi-day forecast and air quality for DeepSeek Harness, Claude Code, Codex, Cursor and any MCP/shell agent - Open-Meteo, no API key. |
| 173 | [windrover/dsh-plugin-update-checker](https://github.com/windrover/dsh-plugin-update-checker) | 0 | 2026-10-04 | 2026-10-04 | A DeepSeek Harness plugin that adds a Check-updates button to the Plugins settings: scans every installed bundle for published updates and DSH-runtime compatibility, with a per-plugin update action. |
| 174 | [WwW7olFWwW/dsh-cbm-keeper](https://github.com/WwW7olFWwW/dsh-cbm-keeper) | 0 | 2026-10-04 | 2026-10-04 | DSH × Codebase Memory 圖譜保鮮插件：讓 CBM 知識圖譜自動跟上各專案的 git HEAD（落後偵測、條件式 CLI 重建、每專案監看、設定頁觀測卡片與 REST 控制面） |
| 175 | [Xeraph627/local-lite](https://github.com/Xeraph627/local-lite) | 0 | 2026-10-03 | 2026-10-04 | 为短上下文窗口的对话提供更轻量的 Agent 预设，能降低78%的固定开销。由 Deepseek 制作 |
| 176 | [xfpuls/dsh-usage-suite](https://github.com/xfpuls/dsh-usage-suite) | 0 | 2026-10-03 | 2026-10-04 | DSH 用量与费用统计 + 提问置顶：本轮花费、今日 token 与消费、空闲/高峰时段，并钉住最新提问 |
| 177 | [xiaocxiaohai666/dsh-plugin-selfcheck](https://github.com/xiaocxiaohai666/dsh-plugin-selfcheck) | 0 | 2026-10-03 | 2026-10-04 | Terminal-first self-check for a DeepSeek Harness install. At boot it prints every plugin row in the loader tree — mounted, disabled, or failed with the exception text — then reports dependency version drift, profile config validity, web port reachability, and the registered tool inventory. Reads whatever plugins you actually have. |
| 178 | [xwtxxxx/XWTXXXX](https://github.com/xwtxxxx/XWTXXXX) | 0 | 2026-10-03 | 2026-10-04 | 插件体检工具包：27 张「AI 假完成」探针卡 ＋ 28 个中立标本装置 ＋ 4 个零依赖 CLI —— 用来验证「检查装置自己会不会骗人」 |
| 179 | [YE-ZINAN/dsh-quiet](https://github.com/YE-ZINAN/dsh-quiet) | 0 | 2026-10-04 | 2026-10-04 | 让 agent 在你离开时替你盯着，只在真的需要你出手时才叫你。DeepSeek Harness 桌面端插件。 |
| 180 | [Yoshino-JF/dsh-deepseek-pet](https://github.com/Yoshino-JF/dsh-deepseek-pet) | 0 | 2026-10-04 | 2026-10-04 | DeepSeek 桌宠：把 DSH 账户余额与桌面蓝鲸女仆连起来（立绘 · 游戏屏 · 台词 · 余额播报） |
| 181 | [yunliya-cuter/dsh-explain-assistant](https://github.com/yunliya-cuter/dsh-explain-assistant) | 0 | 2026-10-04 | 2026-10-04 | DSH Web GUI 插件：主对话右上角「?」弹出独立浮窗，用白话中文解释主 agent 正在做什么。只读、不打扰主 agent |
| 182 | [YunpengDon/dsh-hitl](https://github.com/YunpengDon/dsh-hitl) | 0 | 2026-10-04 | 2026-10-04 | Human-in-the-loop gate for DSH tool calls: mount any tool behind an approve / modify / reject decision card in the DSH Web UI. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- benz-ai-x/dsh-md-preview
- d0ublecl1ck/dsh-unarchived-watch
- datit309/dsh-sound-notifier
- DSH-EAC/DSH-Desktop-EAC
- DSH-EAC/dsh-eac-pack-installer
- DSH-EAC/dsh-ui-skin-loader
- DSH-EAC/END-EAC-on-Deespeek-desktop
- hemppp/dsh-panel-dock-plugin
- KKKKeybird/dsh-turn-rail-persistent
- KurohaneKaoruko/DSH-Novel-App
- Linux-System-0/peaklow
- Lzcdebear/dsh-delete-session
- nickkkkkk123123/dsh-whale-girl
- Noob-stupid/dsh-connection-card-host-preview
- toolazytoname/dsh-plugin-grok
- WASD258-jpg/dsh-context-surgery
- WASD258-jpg/dsh-port-manager
- WASD258-jpg/dsh-preset-force
- WASD258-jpg/dsh-prompt-inject
- zekdeW/deepseek-finder
- zekdeW/dsh-client-workspace-deep-link
