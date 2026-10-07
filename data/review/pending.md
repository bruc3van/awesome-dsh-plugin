# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-07**
- 快照日期 / Snapshot date: **2026-10-07 (UTC)**
- 待审核 / Pending: **213**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **21**
- Star 异常增长 / Star-growth alerts: **3** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-06** / vs previous snapshot **2026-10-06**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **3**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 3342 | +1175 | 65 | 12d | 日增百星 | 日增 +1175★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 12183 | +127 | 454 | 54d | 日增百星 | 日增 +127★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 8311 | +106 | 595 | 106d | 日增百星 | 日增 +106★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [thibautrey/multivibe](https://github.com/thibautrey/multivibe) | 62 | 2026-02-27 | 2026-10-07 | OpenAI-compatible multi-account Codex and vibe coding proxy |
| 2 | [gosomea/dsh-godot-ai](https://github.com/gosomea/dsh-godot-ai) | 9 | 2026-08-25 | 2026-10-07 | AI-assisted Godot game creation for DeepSeek Harness: build scenes, edit scripts, run games, and verify results. |
| 3 | [BotHarness/DeepSeekBot](https://github.com/BotHarness/DeepSeekBot) | 6 | 2026-09-16 | 2026-10-07 | DeepSeekBot: the open-source GrokBot alternative, built on DeepSeek Harness (DSH). PersonaBots with their own identity, persona and Git-backed memory you can share via GitHub; group chat, task delegation, and IM identities on Lark/Feishu, Slack, Discord and WeChat. Works with other DSH plugins. Bot marketplace: market.botharness.ai. MIT. |
| 4 | [lunaship/dsh-cetus](https://github.com/lunaship/dsh-cetus) | 5 | 2026-08-18 | 2026-10-07 | Android companion for DeepSeek Harness: trusted-LAN pairing, mobile sessions, SSE approvals, experimental tunnels, and DeepLinks Relay (private testing). |
| 5 | [EvangeliMo/dsh-computer-use-mode](https://github.com/EvangeliMo/dsh-computer-use-mode) | 3 | 2026-10-05 | 2026-10-07 | Computer-use mode for DeepSeek Harness: screen capture, mouse and keyboard synthesis, and window control for operating GUI software that has no agent-facing integration. |
| 6 | [lkhfrgc/scholar-llm-wiki](https://github.com/lkhfrgc/scholar-llm-wiki) | 3 | 2026-10-06 | 2026-10-07 | A knowledge base toolkit for research and literature review. AI agents compile papers, books and notes into a structured, densely interlinked Obsidian wiki. Built on Karpathy's llm-wiki.md: ingest/query/lint skills, controlled tag vocabulary, concept hierarchy + Canvas, arXiv-&gt;LaTeX formula pipeline, exit-code audits.  |
| 7 | [dugujun3-cloud/dsh-wallpaper](https://github.com/dugujun3-cloud/dsh-wallpaper) | 2 | 2026-09-02 | 2026-10-07 | DSH web plugin: whole-app background wallpaper - local library, wallhaven online search, local import, right-click actions |
| 8 | [dugujun3-cloud/dshos-dock](https://github.com/dugujun3-cloud/dshos-dock) | 2 | 2026-09-04 | 2026-10-07 | Workspace-OS status bar for DeepSeek Harness (DSH): task counts, latest run event, checkup date. Zero deps, read-only, .dshos/ data contract. |
| 9 | [huaizhuanghub/dsh-persona-dafeiyu](https://github.com/huaizhuanghub/dsh-persona-dafeiyu) | 2 | 2026-10-06 | 2026-10-07 | Persona library plugin for DeepSeek Harness: built-in personas, import your own, switch without restart. |
| 10 | [Som2233/dsh-session-task-tags](https://github.com/Som2233/dsh-session-task-tags) | 2 | 2026-10-07 | 2026-10-07 | Tag every DeepSeek Harness session as a long-term or short-term task plus its agent mode, and auto-archive it when its window elapses. |
| 11 | [SuperWheel/cliworker-now](https://github.com/SuperWheel/cliworker-now) | 2 | 2026-10-06 | 2026-10-07 | DeepSeek Harness 多 CLI 智能体侧栏插件：独立对话、账号管理、角色预设与任务续聊 |
| 12 | [wobenshiwomu/dsh-calm](https://github.com/wobenshiwomu/dsh-calm) | 2 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 插件：情绪检查点与修复 —— 安抚、折叠封存争吵段、注入结论，从干净上下文继续任务 \| Emotional checkpoint &amp; repair for DSH |
| 13 | [AmmarByFar/dsh-trustedrouter](https://github.com/AmmarByFar/dsh-trustedrouter) | 1 | 2026-10-07 | 2026-10-07 | TrustedRouter privacy and routing settings per model for DeepSeek Harness (dsh) |
| 14 | [eicon-xyz/dsh-voice-ptt](https://github.com/eicon-xyz/dsh-voice-ptt) | 1 | 2026-10-07 | 2026-10-07 | Push-to-talk dictation for DeepSeek Harness: hold a single key in the composer, speak, release — the transcript lands in your draft. |
| 15 | [Elysia11451/dsh-auto-model-router](https://github.com/Elysia11451/dsh-auto-model-router) | 1 | 2026-10-07 | 2026-10-07 | 一个按会话来源自动切换模型与推理档位的 DSH 插件 |
| 16 | [Flooding-Rain/dsh-tool-jizura](https://github.com/Flooding-Rain/dsh-tool-jizura) | 1 | 2026-10-07 | 2026-10-07 | 调用 JIZURA 在线应用，将歌词文本自动生成为文字 PV（MP4 视频或 PNG 序列）的 DSH 工具插件。 |
| 17 | [fqxxzyw/dsh-groupchat](https://github.com/fqxxzyw/dsh-groupchat) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 多智能体群聊插件：独立会话、多模型角色、跨群 @ 协作、任务分工、成员记忆与审批。 |
| 18 | [gavinc-cn/touchstone-dsh](https://github.com/gavinc-cn/touchstone-dsh) | 1 | 2026-10-07 | 2026-10-07 | Automated testing platform for DeepSeek Harness (dsh): case library, bug reports, per-project serial queue, dev board, built-in load testing. |
| 19 | [GRmaid/dsh-quick-session](https://github.com/GRmaid/dsh-quick-session) | 1 | 2026-10-07 | 2026-10-07 | DSH plugin: start a session without picking a workspace; each quick session gets its own scratch directory. |
| 20 | [hello-heyongping/dsh-helloai-bak](https://github.com/hello-heyongping/dsh-helloai-bak) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 备份与恢复：把设置、凭据、技能、预设和本地插件一起打包，换电脑可还原回原目录 |
| 21 | [hello-heyongping/dsh-helloai-skills](https://github.com/hello-heyongping/dsh-helloai-skills) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 技能与仓库管理：扫描本机所有 Agent 技能并注册成 DSH 可调用技能，支持从 GitHub 仓库一键安装 |
| 22 | [hello-heyongping/dsh-helloai-theme](https://github.com/hello-heyongping/dsh-helloai-theme) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 主题插件：十款内置配色 + 自建主题编辑器，可选玻璃质感与逐 token 覆盖 |
| 23 | [hello-heyongping/dsh-helloai-works](https://github.com/hello-heyongping/dsh-helloai-works) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 卡片资料库：标签分类的图文卡片，可在对话里用 @ 引用单张卡片或整个标签分组 |
| 24 | [huhui-tech/dsh-host-notify](https://github.com/huhui-tech/dsh-host-notify) | 1 | 2026-10-07 | 2026-10-07 | Host-side macOS notifications for DeepSeek Harness: ask_user_question / approval / reply-finished via a vendored signed notifier app — immune to hidden-renderer notification loss. 宿主侧系统通知：提问/审批/回复完成，免疫渲染层隐藏丢通知。 |
| 25 | [huliux/dsh-asr-plugin](https://github.com/huliux/dsh-asr-plugin) | 1 | 2026-10-02 | 2026-10-07 | Unofficial local meeting transcription for DeepSeek Harness on Apple Silicon macOS |
| 26 | [IRdotAI/dsh-studio](https://github.com/IRdotAI/dsh-studio) | 1 | 2026-10-07 | 2026-10-07 | Themes and personalisation for DeepSeek Harness: 17 themes, a theme editor, liquid-glass panels, wallpapers, custom logo/greeting, saved prompts and a Ctrl+K quick switcher |
| 27 | [K9m1a5c/dsh-qqreminder](https://github.com/K9m1a5c/dsh-qqreminder) | 1 | 2026-10-07 | 2026-10-07 | 让 DSH 成为你的 QQ 信息管家：几百条群聊里，只挑出你该知道的那几条 |
| 28 | [leolee9086/dsh-context-care](https://github.com/leolee9086/dsh-context-care) | 1 | 2026-09-08 | 2026-10-07 | DeepSeek Harness 的疲劳度、唤醒值与自主上下文压缩 Cordis 插件 |
| 29 | [liqiaohuia/dsh-proxy-routes](https://github.com/liqiaohuia/dsh-proxy-routes) | 1 | 2026-08-27 | 2026-10-07 | Adding a network proxy routing plugin for DSH. |
| 30 | [lpeixin/dsh-xiangqi-mate](https://github.com/lpeixin/dsh-xiangqi-mate) | 1 | 2026-10-06 | 2026-10-07 | A human-vs-AI Chinese Chess (Xiangqi) plugin for DeepSeek Harness. 一款运行在 DeepSeek Harness 中的中国象棋人机对弈插件。  |
| 31 | [mazov2love/dsh-remote-control](https://github.com/mazov2love/dsh-remote-control) | 1 | 2026-10-02 | 2026-10-07 | 为 Agent 提供直接操控本机完整 DSH 实例的能力：目标 DSH 无需安装任何插件或额外组件，零侵入，开箱即用、无需手动配置，并提供接近用户的操作语义、增量读取、引用保存以及远端会话与工作区搜索等功能。 |
| 32 | [OrderG-X/dsh-chrome-bridge](https://github.com/OrderG-X/dsh-chrome-bridge) | 1 | 2026-10-07 | 2026-10-07 | DSH (DeepSeek Harness) browser plugin: give your agent hands inside the Chrome you already use — native messaging + CDP, no TCP port, no Connect button, 9 native browser_* tools. |
| 33 | [snnh/dsh-role-config](https://github.com/snnh/dsh-role-config) | 1 | 2026-10-07 | 2026-10-07 | Role presets and a model pool for dsh: the model delegates to a role, the operator's rules pick the model, and a failure walks the role's chain. |
| 34 | [sqzw-x/dsh-alerts](https://github.com/sqzw-x/dsh-alerts) | 1 | 2026-10-07 | 2026-10-07 | 焦点感知的 DeepSeek Harness 通知插件：审批/提问/方案确认/回复完成统一推送；当前对话失焦才弹、后台对话随时弹、子代理不弹 |
| 35 | [std-microblock/dsh-plugin-environments](https://github.com/std-microblock/dsh-plugin-environments) | 1 | 2026-10-07 | 2026-10-07 | DSH environments plugin: remote/local environments all in one. |
| 36 | [stefanohe/deepseek-harness-datasecure](https://github.com/stefanohe/deepseek-harness-datasecure) | 1 | 2026-10-06 | 2026-10-07 | DeepSeek Harness DataSecure Remastered is a data-security-focused remastered edition of the official open-source DeepSeek Harness, maintained by Stefano's AI Lab. It is not affiliated with DeepSeek Inc. |
| 37 | [tony1duan/builder-hud](https://github.com/tony1duan/builder-hud) | 1 | 2026-09-29 | 2026-10-07 | Unofficial third-party vitals-cluster skins for the DSH sidebar — three bars, an engraved covenant medallion, and a live token-burn gauge |
| 38 | [try-works/dsh-stt](https://github.com/try-works/dsh-stt) | 1 | 2026-10-07 | 2026-10-07 | STT support for DeepSeek Harness using local models from Cactus Compute and Desert Ant Labs |
| 39 | [twenty-3rd/dsh-skill-switch](https://github.com/twenty-3rd/dsh-skill-switch) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 项目级 Skill 开关：一键屏蔽/恢复、全局删除、有效性判定。 |
| 40 | [YanKaFei/ascii-h3-director](https://github.com/YanKaFei/ascii-h3-director) | 1 | 2026-10-07 | 2026-10-07 | ASCII / kinetic-typography film direction for MiniMax H3 — DeepSeek Harness plugin + portable Agent Skill. Deterministic zero-dependency preview engine, 21-mechanism motion grammar, seam-checked continuation, and a Director Console. |
| 41 | [yefeng7531/dsh-image-gen](https://github.com/yefeng7531/dsh-image-gen) | 1 | 2026-10-05 | 2026-10-07 | DSH 生图插件：OpenAI 兼容图像生成（官方 / 中转站 / Azure）、GPT-Image 提示词方法论 skill、精灵图工作流。不含任何服务商地址与密钥。 |
| 42 | [Yeqij/dsh-disk-doctor](https://github.com/Yeqij/dsh-disk-doctor) | 1 | 2026-10-06 | 2026-10-07 | DSH 空间体检：只读统计 DeepSeek Harness 的磁盘占用（数据 / 程序 / 系统缓存三区并排 + 每类 Top N 明细），清理只做可一键撤销的隔离移动，从不删除。 · Read-only disk accounting for DSH with a reversible quarantine cleanup; it never deletes. |
| 43 | [yupaoa/dsh-persona-switcher](https://github.com/yupaoa/dsh-persona-switcher) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 人设切换插件：会话中途只换人设与语言风格，不动工具、技能与模型 |
| 44 | [zxyxxby/dsh-appearance-tuner](https://github.com/zxyxxby/dsh-appearance-tuner) | 1 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 外观调校插件：浮层/面板不透明度与配色、毛玻璃模糊、背景与侧栏色、强调色、圆角、正文字号、滚动条宽度 \| Appearance tuner for DSH UI tokens |
| 45 | [438417623wq/dseepseek-ha-API](https://github.com/438417623wq/dseepseek-ha-API) | 0 | 2026-10-07 | 2026-10-07 | 把 DeepSeek Harness（DSH）里能调用的所有模型，开放成本机 OpenAI / Anthropic 兼容网关，Claude Code、Cline、ZCode 等工具可直接使用，无需再填 API Key。Expose every model DSH can already call through one loopback OpenAI/Anthropic gateway, so other local dev tools can use them. |
| 46 | [adesbusy/dsh-peak-indicator](https://github.com/adesbusy/dsh-peak-indicator) | 0 | 2026-10-07 | 2026-10-07 | Peak / off-peak pricing badge for the DeepSeek Harness Web GUI: a dot beside the brand wordmark, with the next switch in local time, UTC and a countdown on hover. |
| 47 | [Alex-wangyang/dsh-orca-terminal-status](https://github.com/Alex-wangyang/dsh-orca-terminal-status) | 0 | 2026-10-07 | 2026-10-07 | Unofficial DSH TUI plugin for Orca terminal readiness and finalized completion |
| 48 | [Angela-lwh/dsh-archive-purge](https://github.com/Angela-lwh/dsh-archive-purge) | 0 | 2026-10-07 | 2026-10-07 | Delete button for archived DeepSeek Harness sessions: removes a Session's log, its Workspace membership and its archive mark — with a deferred mode for Sessions the Host still holds. |
| 49 | [Ansellwan/DSH-Custom-Wallpaper](https://github.com/Ansellwan/DSH-Custom-Wallpaper) | 0 | 2026-10-07 | 2026-10-07 | 可以自定义Harness的壁纸，比如透明度和虚化之类的。可以尝试一下哦 |
| 50 | [baixiaoustc/dsh-kidlab](https://github.com/baixiaoustc/dsh-kidlab) | 0 | 2026-10-07 | 2026-10-07 | 给小朋友的电脑启蒙插件系列（DeepSeek Harness / Cordis）：7 个插件，一个仓库一个系列 |
| 51 | [bauerelizabeth07139/dsh-pet-dafeiyu](https://github.com/bauerelizabeth07139/dsh-pet-dafeiyu) | 0 | 2026-10-07 | 2026-10-07 | 大肥鱼 (Dafeiyu) desktop pet for the DeepSeek Harness Web GUI — a chibi character with a three-frame walk cycle, blinking, idle micro-scenes and drop physics, a steel basin on her head, voiced Chinese dialogue, sound effects and music on separate switches, plus a link with dsh-pet-liangzi. |
| 52 | [bauerelizabeth07139/dsh-pet-liangzi](https://github.com/bauerelizabeth07139/dsh-pet-liangzi) | 0 | 2026-10-07 | 2026-10-07 | 梁子 (Liangzi) desktop pet for the DeepSeek Harness Web GUI — a realistic character with a three-frame walk cycle, blinking, idle micro-scenes and drop physics, voiced Chinese dialogue, sound effects and music on separate switches, plus a father-and-daughter link with dsh-pet-dafeiyu. |
| 53 | [benz-ai-x/dsh-24-PA](https://github.com/benz-ai-x/dsh-24-PA) | 0 | 2026-10-05 | 2026-10-07 | 24私助（24PA）— Feishu personal-assistant plugin for dsh: dual-entry coordination, ledger-driven workers, offline-capable reminders, handwriting review, and a staged Feishu setup wizard. 飞书私人助理 dsh 插件。 |
| 54 | [bitxeno/dsh-magpie-connect](https://github.com/bitxeno/dsh-magpie-connect) | 0 | 2026-10-02 | 2026-10-07 | 将 Magpie 网关模型快速接入 DeepSeek Harness 的插件 |
| 55 | [Castor6/dsh-auto-workspace](https://github.com/Castor6/dsh-auto-workspace) | 0 | 2026-10-07 | 2026-10-07 | Codex-style project-less chats for the DeepSeek Harness: a new chat with no project gets its own local working directory, and keeps DSH's native new-chat screen |
| 56 | [chengshenyangtai/dsh-workbuddy-trae-qoder-connect](https://github.com/chengshenyangtai/dsh-workbuddy-trae-qoder-connect) | 0 | 2026-10-06 | 2026-10-07 | One DSH plugin for WorkBuddy / Qoder / Trae: auto check-in, multi-channel aggregation, in-session model switching, reasoning effort. |
| 57 | [chenzi666/dsh-account-switch](https://github.com/chenzi666/dsh-account-switch) | 0 | 2026-10-06 | 2026-10-07 | DSH 多账号插件：热切换、额度耗尽自动换号并原地重跑。官方新用户首登送 6 元额度，接码 0.2-0.3 元/号，账号池就是连续可用的额度池。 |
| 58 | [ckanner/dsh-plugin-lcu](https://github.com/ckanner/dsh-plugin-lcu) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness plugin: drive the desktop and Chrome through LCU (Codex computer use, decoupled from the app) |
| 59 | [dang13021993/olachill-dsh-plugin](https://github.com/dang13021993/olachill-dsh-plugin) | 0 | 2026-10-07 | 2026-10-07 | OlaChill Japan travel services for DeepSeek Harness |
| 60 | [dcsnkj/dsh-agent-sync](https://github.com/dcsnkj/dsh-agent-sync) | 0 | 2026-10-07 | 2026-10-07 | 让 DeepSeek Harness 与 Codex / WorkBuddy 实时共享对话与关键操作：互相看见对方在同一个实验里做了什么，避免重复改文件 / 重复跑命令，并支持把某一方的活无缝接过来继续干。 |
| 61 | [DDDMUC/dsh-session-url](https://github.com/DDDMUC/dsh-session-url) | 0 | 2026-10-06 | 2026-10-07 | DSH Web GUI plugin: one conversation, one link — mirrors the main-view session into the URL fragment (and opens the linked conversation on load). Browser half only, no dependencies, no telemetry. |
| 62 | [DDDMUC/dsh-tab-groups](https://github.com/DDDMUC/dsh-tab-groups) | 0 | 2026-10-07 | 2026-10-07 | Edge/Chrome extension that auto-groups every DeepSeek Harness (DSH) Web GUI tab, plus the DSH plugin that mirrors it to a fixed path, detects it inside the GUI and drives it. One package, two faces. |
| 63 | [erkinalp/dsh-decisions-classifiers](https://github.com/erkinalp/dsh-decisions-classifiers) | 0 | 2026-10-07 | 2026-10-07 | A DeepSeek Harness plugin to use OpenAI decisions API |
| 64 | [Ersith/akasha-book](https://github.com/Ersith/akasha-book) | 0 | 2026-10-07 | 2026-10-07 | 阿卡夏之书（Akasha Book）— an auditable external memory layer for LLM agents: six purpose-typed stores, supersession chain, bi-temporality, write gating, DSH plugins, paper included. |
| 65 | [Feizhaiqianqian/dsh-email-board](https://github.com/Feizhaiqianqian/dsh-email-board) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 邮件看板插件：把 dsh-email 各账号的未读邮件汇总成右侧栏卡片列表 / Unread-mail board for DSH — per-account card list in the right sidebar. |
| 66 | [Ferien-sein/dsh-dajiangjun](https://github.com/Ferien-sein/dsh-dajiangjun) | 0 | 2026-10-07 | 2026-10-07 | 大管家 — DeepSeek Harness 的会话接力：写档 / 建会话 / 投递，让新会话自己开工。纯由 AI 开发。Session relay for DeepSeek Harness — write a handoff doc, create a session, deliver it, and let it start working. 100% AI-developed. |
| 67 | [ff66ccff/dsh-ATN](https://github.com/ff66ccff/dsh-ATN) | 0 | 2026-10-03 | 2026-10-07 | Adaptive topology multi-agent preset for DeepSeek Harness, with peer messaging, a shared board and live network visualization. |
| 68 | [FiVE0016/dsh-bubble-fold](https://github.com/FiVE0016/dsh-bubble-fold) | 0 | 2026-10-07 | 2026-10-07 | DSH 插件：把过长的消息与工作步骤折起来，最新一轮保持展开｜Fold overlong messages and work-step blocks in DeepSeek Harness — the newest turn stays open. |
| 69 | [GemChance/dsh-chinese-minimal-mode](https://github.com/GemChance/dsh-chinese-minimal-mode) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness Minimal preset with an editable Markdown system prompt |
| 70 | [gh-gongjin/dsh-plugin-it-tools](https://github.com/gh-gongjin/dsh-plugin-it-tools) | 0 | 2026-10-07 | 2026-10-07 | DSH 面板内的 IT 工具箱：it-tools（sharevb fork）全量 474 个工具，中文分类壳 + 同源 iframe，零第三方依赖 |
| 71 | [gilsaia/dsh-web-search-doubao](https://github.com/gilsaia/dsh-web-search-doubao) | 0 | 2026-10-07 | 2026-10-07 | Doubao Search (Volcengine) web search provider for DeepSeek Harness — makes the standard web_search tool return real excerpts, not just titles and links. |
| 72 | [Gniy7Ga/dsh-reverie](https://github.com/Gniy7Ga/dsh-reverie) | 0 | 2026-10-07 | 2026-10-07 | Reverie：DeepSeek Harness 读书笔记插件——链接转录/抓取、中英对照精读、flomo 式笔记与 AI 回顾（GPL-3.0） |
| 73 | [H2CO3w/scholia](https://github.com/H2CO3w/scholia) | 0 | 2026-10-07 | 2026-10-07 | A formal proof is legible to a compiler, not to a mathematician. This DSH plugin renders a Lean 4 / Mathlib theorem as a paper page and reduces its 1,829-module dependency cone to one readable main line. 形式化证明 → 可读论文。 |
| 74 | [imlida/dsh-plugin-prompt-polish](https://github.com/imlida/dsh-plugin-prompt-polish) | 0 | 2026-10-07 | 2026-10-07 | 在 DeepSeek Harness 提示词输入框右下角加一个润色按钮：一键让模型改写草稿，润色用的提示词可随时修改 |
| 75 | [improveTheWorld/dsh-quorum](https://github.com/improveTheWorld/dsh-quorum) | 0 | 2026-10-07 | 2026-10-07 | Quorum mode for DeepSeek Harness: multi-agent deep reasoning with role-isolated subagents, adversarial verification, persistent return channel, and context budget management |
| 76 | [ingeb0rga/dsh-sidebar-hover](https://github.com/ingeb0rga/dsh-sidebar-hover) | 0 | 2026-10-07 | 2026-10-07 | Claude Code-style hover sidebar and session history arrows for DeepSeek Harness (DSH plugin) |
| 77 | [ishanshmalviya5/dsh-local-plugins](https://github.com/ishanshmalviya5/dsh-local-plugins) | 0 | 2026-10-06 | 2026-10-07 | Keeps edited dsh plugins as local git repos; deploys committed snapshots via atomic symlink swap. |
| 78 | [jerrywang21-debug/dsh-session-delete](https://github.com/jerrywang21-debug/dsh-session-delete) | 0 | 2026-10-07 | 2026-10-07 | Sidebar delete action for the DeepSeek Harness (DSH) web client: removes a conversation from the Harness and moves its log + projection cache to the system Trash. |
| 79 | [john-walks-slow/dsh-aivn](https://github.com/john-walks-slow/dsh-aivn) | 0 | 2026-10-07 | 2026-10-07 | AIVN stage engine inside DeepSeek Harness: a workspace is a play, the playwright preset writes Stage DSL, and a Stage tab in the conversation renders it live (backgrounds, sprites, dialog, stop-point choices, line-by-line TTS). AIVN 舞台引擎的 DSH 插件。 |
| 80 | [juliankang4/dsh-spark-scope](https://github.com/juliankang4/dsh-spark-scope) | 0 | 2026-10-07 | 2026-10-07 | Spark Scope's mini window in the DeepSeek Harness (dsh) sidebar: decode, prefill and every DGX Spark node at a glance |
| 81 | [k53689649-lab/dsh-splash-gojo](https://github.com/k53689649-lab/dsh-splash-gojo) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 开机动画插件 · Full-screen boot splash for DeepSeek Harness — 图片内联、零运行依赖、纯 host 半边 |
| 82 | [KKYZD/dsh-model-fold](https://github.com/KKYZD/dsh-model-fold) | 0 | 2026-10-07 | 2026-10-07 | ZCode-style model picker for DeepSeek Harness: provider submenus that open upward, reasoning-effort selection, keyboard navigation. DSH 的 ZCode 式模型选择器。 |
| 83 | [koking0/dsh-plugin-google](https://github.com/koking0/dsh-plugin-google) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness plugin for Google Calendar &amp; Google Tasks - 30 tools, natural-language scheduling, zero runtime dependencies |
| 84 | [kongbai9420/dsh-boss-worker](https://github.com/kongbai9420/dsh-boss-worker) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 主从协作团队插件：主控架构统筹，子模型并行执行，闭环严苛验收 |
| 85 | [Kylanfang/ArchiLens](https://github.com/Kylanfang/ArchiLens) | 0 | 2026-10-07 | 2026-10-07 | 面向 DeepSeek Harness 的可溯源 RTL 拓扑图插件：扫 Verilog/SystemVerilog 生成带 file:line 证据的模块拓扑 SVG，交付前复核幻觉率、非零拒交；零依赖离线，接 RTLens 证据后端。 |
| 86 | [lakeofsky347/dsh-meihua](https://github.com/lakeofsky347/dsh-meihua) | 0 | 2026-10-03 | 2026-10-07 | 梅花易数 plugin for DeepSeek Harness desktop |
| 87 | [lakeofsky347/dsh-video-studio](https://github.com/lakeofsky347/dsh-video-studio) | 0 | 2026-10-05 | 2026-10-07 | DSH 视频工作台：图文分镜、前端代码生成与编辑、本地 MP4 导出 |
| 88 | [Lindemellis/dsh-tavern-extras](https://github.com/Lindemellis/dsh-tavern-extras) | 0 | 2026-10-07 | 2026-10-07 | DSH Tavern plugin: edit-and-resend the last message, plus a long-form novel writing mode with projects, subagent review and editable prompts \| 编辑上一条发言 + 长篇写作模式 |
| 89 | [Lindemellis/dsh-tavern-preset-roles](https://github.com/Lindemellis/dsh-tavern-preset-roles) | 0 | 2026-10-07 | 2026-10-07 | DSH Tavern plugin: send SillyTavern preset entries with their own role (system/user/assistant) instead of forcing system/user \| 游玩时预设条目按自身 role 发送 |
| 90 | [LinXueyuanStdio/dsh-git](https://github.com/LinXueyuanStdio/dsh-git) | 0 | 2026-09-30 | 2026-10-07 | dsh plugin of git |
| 91 | [lone-wolf-akela/dsh-sandboxie-redirect](https://github.com/lone-wolf-akela/dsh-sandboxie-redirect) | 0 | 2026-10-07 | 2026-10-07 | DSH bundle: a copy-on-write permission preset that runs shell commands in a per-workspace Sandboxie box |
| 92 | [long6177/dsh-markdown-input](https://github.com/long6177/dsh-markdown-input) | 0 | 2026-09-06 | 2026-10-07 | a dsh‑plugin for enhancing users' Markdown input experience \| 一个 用于增强用户 markdown 输入体验的 dsh-plugin |
| 93 | [lw0129a/dsh-app-packager](https://github.com/lw0129a/dsh-app-packager) | 0 | 2026-10-07 | 2026-10-07 | uni-app x 打包流水线：npm 可安装 CLI + DeepSeek Harness 插件（iOS / Android / HarmonyOS，macOS 全功能，Windows/Linux 走 Git Bash 或 WSL） |
| 94 | [lzqzm/dsh-magical-lowcode-project](https://github.com/lzqzm/dsh-magical-lowcode-project) | 0 | 2026-10-07 | 2026-10-07 | Deepseek Harness 插件 |
| 95 | [maoqizhen/dsh-pc-manager](https://github.com/maoqizhen/dsh-pc-manager) | 0 | 2026-10-07 | 2026-10-07 | DSH plugin for system monitor and junk cleanup |
| 96 | [maozhuoshushu/dsh-local-host-guard](https://github.com/maozhuoshushu/dsh-local-host-guard) | 0 | 2026-10-07 | 2026-10-07 | DSH 宿主内哨兵：同步调用打点 + 主线程卡死取证 + 内存三闸（写闸 / 冷回填闸 / 闲置会话下放）+ 队列哨兵。零依赖，全中文。 |
| 97 | [Max-Null/dsh-jubensha](https://github.com/Max-Null/dsh-jubensha) | 0 | 2026-10-05 | 2026-10-07 | Solo murder-mystery in the DSH sidebar: AI hosts the game and fills every seat but yours (up to five AI players) · 一个人的剧本杀：AI 当主持人并填满其余座位，留一个位子给你 |
| 98 | [mirror9933/dsh-pixmart](https://github.com/mirror9933/dsh-pixmart) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness电商生图插件：主图 / 详情图 / 广告图、风格复刻、白底图。 |
| 99 | [neo805/dsh-effort-router](https://github.com/neo805/dsh-effort-router) | 0 | 2026-10-07 | 2026-10-07 | DSH plugin: context-aware per-step reasoning-effort routing — classify → escalate → hysteresis → capability clamp; Auto mask in the native selector; default effort fill + wire mapping for custom llm-pi-ai models. AI-authored (kimi-k3), produced by @neo805. No Issues/PRs; forks welcome (MIT). |
| 100 | [NIRVANA-APOC/dsh-api-cost](https://github.com/NIRVANA-APOC/dsh-api-cost) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness plugin: real-time API cost with peak / off-peak rates — a composer pill, /cost, a session_cost tool and a JSON snapshot, with subagent and agent-team spend rolled in. |
| 101 | [nnnanann/Deepseek-harness-freeze-content-on-window-resize](https://github.com/nnnanann/Deepseek-harness-freeze-content-on-window-resize) | 0 | 2026-10-07 | 2026-10-07 | Freeze content on window resize — a DSH (DeepSeek Harness) Web GUI plugin that locks the conversation reading column and keeps your reading position, so long answers stop re-wrapping. |
| 102 | [NoiraBaka/dsh-compact-suite](https://github.com/NoiraBaka/dsh-compact-suite) | 0 | 2026-10-07 | 2026-10-07 | 面向本地部署的 DSH 上下文压缩控制面：摘要改走指定模型、阈值真正生效、口径对齐卡片、暂停即完整还原 |
| 103 | [nx9161/seller-protocol](https://github.com/nx9161/seller-protocol) | 0 | 2026-10-07 | 2026-10-07 | Seller Protocol — autonomous virtual office for Amazon FBA + DTC e-commerce led by Mercer (Chief Operator). 15 specialists, 7 divisions: sourcing, logistics, marketplaces, storefront, legal/finance, intelligence. |
| 104 | [nx9161/war-room-protocol](https://github.com/nx9161/war-room-protocol) | 0 | 2026-10-07 | 2026-10-07 | War Room Protocol — autonomous AI-run software office led by Sloane (Chief Orchestrator). 15 specialists, 5 divisions, four-phase War Room with Prompt Writer + Knowledge Wizard. |
| 105 | [online111111/dsh-hindsight-bridge](https://github.com/online111111/dsh-hindsight-bridge) | 0 | 2026-10-07 | 2026-10-07 | Native Hindsight memory for DeepSeek Harness: automatic recall, per-turn retention, safe configuration. |
| 106 | [paolomandica/dsh-cost-usage-monitor](https://github.com/paolomandica/dsh-cost-usage-monitor) | 0 | 2026-10-06 | 2026-10-07 | DeepSeek Harness plugin: account balance and per-session usage cost in the composer dock, priced from provider-reported token usage. |
| 107 | [peanutcd2005/dsh-plugin-pdf-text](https://github.com/peanutcd2005/dsh-plugin-pdf-text) | 0 | 2026-10-07 | 2026-10-07 | Read text out of local PDF files inside DeepSeek Harness: page-by-page text, page statistics, scanned-PDF detection, no Python, no network. |
| 108 | [PerryLink/dsh-aqua-input-check](https://github.com/PerryLink/dsh-aqua-input-check) | 0 | 2026-10-07 | 2026-10-07 | ???????????(?????????????????????,?????,???????) |
| 109 | [PerryLink/dsh-archive-check](https://github.com/PerryLink/dsh-archive-check) | 0 | 2026-10-07 | 2026-10-07 | 档案归档完整性与保管期限核对(依据《档案法》及配套规定,仅提示差异,不作出定性结论) |
| 110 | [PerryLink/dsh-bid-ca-precheck](https://github.com/PerryLink/dsh-bid-ca-precheck) | 0 | 2026-10-07 | 2026-10-07 | 投标文件符合性预检(按招标文件逐条核对响应情况,仅提示差异,不作出定性结论) |
| 111 | [PerryLink/dsh-bid-qual-check](https://github.com/PerryLink/dsh-bid-qual-check) | 0 | 2026-10-07 | 2026-10-07 | 投标人资格条件核对(按资格条件与证明材料核对逐条响应,仅提示差异,不作出定性结论) |
| 112 | [PerryLink/dsh-contract-stance](https://github.com/PerryLink/dsh-contract-stance) | 0 | 2026-10-07 | 2026-10-07 | ??????????(???????????????????,?????,???????) |
| 113 | [PerryLink/dsh-customs-doc-check](https://github.com/PerryLink/dsh-customs-doc-check) | 0 | 2026-10-07 | 2026-10-07 | 报关单证一致性核对(按公开的报关单填制规范核对单证间字段一致性,仅提示差异,不作出定性结论) |
| 114 | [PerryLink/dsh-demurrage-ledger](https://github.com/PerryLink/dsh-demurrage-ledger) | 0 | 2026-10-07 | 2026-10-07 | 滞箱费台账核对(按免箱期与费率核对超期天数与金额的自洽性,仅提示差异,不作出定性结论) |
| 115 | [PerryLink/dsh-drill-script-check](https://github.com/PerryLink/dsh-drill-script-check) | 0 | 2026-10-07 | 2026-10-07 | ????????(??????????????????????,?????,???????) |
| 116 | [PerryLink/dsh-eia-guide-check](https://github.com/PerryLink/dsh-eia-guide-check) | 0 | 2026-10-07 | 2026-10-07 | ?????????(???????????????????,?????,???????) |
| 117 | [PerryLink/dsh-emergency-plan](https://github.com/PerryLink/dsh-emergency-plan) | 0 | 2026-10-07 | 2026-10-07 | 应急预案要素齐备性与条款级页码定位(依据 GB/T 29639-2020 等公开文件,仅提示差异,不作出定性结论) |
| 118 | [PerryLink/dsh-essay-rubric-check](https://github.com/PerryLink/dsh-essay-rubric-check) | 0 | 2026-10-07 | 2026-10-07 | ????????(????????????????????,?????,???????) |
| 119 | [PerryLink/dsh-evidence-check](https://github.com/PerryLink/dsh-evidence-check) | 0 | 2026-10-07 | 2026-10-07 | 证据清单齐备性核对(按待证事实与证据要素核对清单自洽,仅提示差异,不作出定性结论) |
| 120 | [PerryLink/dsh-export-ctl-check](https://github.com/PerryLink/dsh-export-ctl-check) | 0 | 2026-10-07 | 2026-10-07 | ????????(????????????????????,?????,???????) |
| 121 | [PerryLink/dsh-fmea-table-check](https://github.com/PerryLink/dsh-fmea-table-check) | 0 | 2026-10-07 | 2026-10-07 | FMEA 分析表要素齐备性与风险顺序数一致性核对(按公开的 FMEA 方法标准核对表内自洽,仅提示差异,不作出定性结论) |
| 122 | [PerryLink/dsh-forecast-penalty](https://github.com/PerryLink/dsh-forecast-penalty) | 0 | 2026-10-07 | 2026-10-07 | ?????????(???????????????????????,?????,???????) |
| 123 | [PerryLink/dsh-gongwen-flow-check](https://github.com/PerryLink/dsh-gongwen-flow-check) | 0 | 2026-10-07 | 2026-10-07 | 公文流转与办理时限核对(按公开的公文处理规范核对环节完整性与时限,仅提示差异,不作出定性结论) |
| 124 | [PerryLink/dsh-gongwen-word-check](https://github.com/PerryLink/dsh-gongwen-word-check) | 0 | 2026-10-07 | 2026-10-07 | 公文格式要素核对(按公开的党政机关公文格式标准核对版头与主体要素,仅提示差异,不作出定性结论) |
| 125 | [PerryLink/dsh-guard-plan-qc](https://github.com/PerryLink/dsh-guard-plan-qc) | 0 | 2026-10-07 | 2026-10-07 | 劳动保护与安全防护用品配置表核对(按公开的配备标准核对品名规格与配置数量,仅提示差异,不作出定性结论) |
| 126 | [PerryLink/dsh-hazchem-check](https://github.com/PerryLink/dsh-hazchem-check) | 0 | 2026-10-07 | 2026-10-07 | 危险化学品临界量与重大危险源辨识核对(按储存量与临界量核对台账自洽,仅提示差异,不作出定性结论) |
| 127 | [PerryLink/dsh-hazplan-check](https://github.com/PerryLink/dsh-hazplan-check) | 0 | 2026-10-07 | 2026-10-07 | HAZOP ??????????????????(????????????????,?????,???????) |
| 128 | [PerryLink/dsh-hidden-risk-map](https://github.com/PerryLink/dsh-hidden-risk-map) | 0 | 2026-10-07 | 2026-10-07 | ???????????????????????(???????10?)??????(?????,???????) |
| 129 | [PerryLink/dsh-hs-classify](https://github.com/PerryLink/dsh-hs-classify) | 0 | 2026-10-07 | 2026-10-07 | ???????????(??????????????????????,?????,???????) |
| 130 | [PerryLink/dsh-icd-rule-check](https://github.com/PerryLink/dsh-icd-rule-check) | 0 | 2026-10-07 | 2026-10-07 | ICD ????????????(?? GB/T 14396-2016 ???? ICD ????,?????,???????) |
| 131 | [PerryLink/dsh-lawcite-adapter](https://github.com/PerryLink/dsh-lawcite-adapter) | 0 | 2026-10-07 | 2026-10-07 | ???????????(??????????????????????,?????,???????) |
| 132 | [PerryLink/dsh-lc-doc-check](https://github.com/PerryLink/dsh-lc-doc-check) | 0 | 2026-10-07 | 2026-10-07 | ?????????(?????????????????????,?????,???????) |
| 133 | [PerryLink/dsh-learning-gap-check](https://github.com/PerryLink/dsh-learning-gap-check) | 0 | 2026-10-07 | 2026-10-07 | ???????????(??????????????????????,?????,???????) |
| 134 | [PerryLink/dsh-medrec-qc](https://github.com/PerryLink/dsh-medrec-qc) | 0 | 2026-10-07 | 2026-10-07 | ???????????????(????????2016?24??????,?????,???????) |
| 135 | [PerryLink/dsh-nsfc-form-check](https://github.com/PerryLink/dsh-nsfc-form-check) | 0 | 2026-10-07 | 2026-10-07 | ?????????????????????(?????????????????????????,?????,???????) |
| 136 | [PerryLink/dsh-nurse-record-check](https://github.com/PerryLink/dsh-nurse-record-check) | 0 | 2026-10-07 | 2026-10-07 | ??????????????????(?????????????????,?????,???????) |
| 137 | [PerryLink/dsh-origin-rvc-check](https://github.com/PerryLink/dsh-origin-rvc-check) | 0 | 2026-10-07 | 2026-10-07 | ???????????(? RVC ???????????????,?????,???????) |
| 138 | [PerryLink/dsh-ota-review-check](https://github.com/PerryLink/dsh-ota-review-check) | 0 | 2026-10-07 | 2026-10-07 | ??????????(?????????????????????,?????,???????) |
| 139 | [PerryLink/dsh-paper-doc-adapter](https://github.com/PerryLink/dsh-paper-doc-adapter) | 0 | 2026-10-07 | 2026-10-07 | ????????(?????????? yotta ??????????,?????,???????) |
| 140 | [PerryLink/dsh-permit-report-check](https://github.com/PerryLink/dsh-permit-report-check) | 0 | 2026-10-07 | 2026-10-07 | ????????(?????????????????????,?????,???????) |
| 141 | [PerryLink/dsh-pipeline-check](https://github.com/PerryLink/dsh-pipeline-check) | 0 | 2026-10-07 | 2026-10-07 | ???????????(????????????????,?????,???????) |
| 142 | [PerryLink/dsh-pleading-draft](https://github.com/PerryLink/dsh-pleading-draft) | 0 | 2026-10-07 | 2026-10-07 | ??????????(?????????????????????,?????,???????) |
| 143 | [PerryLink/dsh-policy-brief-draft](https://github.com/PerryLink/dsh-policy-brief-draft) | 0 | 2026-10-07 | 2026-10-07 | ????????(??????????????????,?????,???????) |
| 144 | [PerryLink/dsh-power-loss-split](https://github.com/PerryLink/dsh-power-loss-split) | 0 | 2026-10-07 | 2026-10-07 | ????????????(???????????,?????,???????) |
| 145 | [PerryLink/dsh-power-ticket-check](https://github.com/PerryLink/dsh-power-ticket-check) | 0 | 2026-10-07 | 2026-10-07 | ???????????????????(????????????,?????,???????) |
| 146 | [PerryLink/dsh-ppap-check](https://github.com/PerryLink/dsh-ppap-check) | 0 | 2026-10-07 | 2026-10-07 | PPAP ?????????(???? PPAP ??????????????????,?????,???????) |
| 147 | [PerryLink/dsh-protest-deadline](https://github.com/PerryLink/dsh-protest-deadline) | 0 | 2026-10-07 | 2026-10-07 | ?????????(???????????????????????,?????,???????) |
| 148 | [PerryLink/dsh-railway-window](https://github.com/PerryLink/dsh-railway-window) | 0 | 2026-10-07 | 2026-10-07 | ??????????(???????????????????,?????,???????) |
| 149 | [PerryLink/dsh-repair-order-qc](https://github.com/PerryLink/dsh-repair-order-qc) | 0 | 2026-10-07 | 2026-10-07 | ????????(???????????????????????,?????,???????) |
| 150 | [PerryLink/dsh-review-reply-check](https://github.com/PerryLink/dsh-review-reply-check) | 0 | 2026-10-07 | 2026-10-07 | ????????????(?????????????????,?????,???????) |
| 151 | [PerryLink/dsh-rulefile-check](https://github.com/PerryLink/dsh-rulefile-check) | 0 | 2026-10-07 | 2026-10-07 | ?????????(?????????????????????,?????,???????) |
| 152 | [PerryLink/dsh-safety-brief-check](https://github.com/PerryLink/dsh-safety-brief-check) | 0 | 2026-10-07 | 2026-10-07 | ????????????????????(????????????????,?????,???????) |
| 153 | [PerryLink/dsh-site-log-check](https://github.com/PerryLink/dsh-site-log-check) | 0 | 2026-10-07 | 2026-10-07 | ????????????????(?? GB/T 50319-2013 ?????,?????,???????) |
| 154 | [PerryLink/dsh-soe-decision-check](https://github.com/PerryLink/dsh-soe-decision-check) | 0 | 2026-10-07 | 2026-10-07 | ??????????(?????????????????????,?????,???????) |
| 155 | [PerryLink/dsh-soilwater-check](https://github.com/PerryLink/dsh-soilwater-check) | 0 | 2026-10-07 | 2026-10-07 | ????????????(??????????????????????,?????,???????) |
| 156 | [PerryLink/dsh-sop-sync-check](https://github.com/PerryLink/dsh-sop-sync-check) | 0 | 2026-10-07 | 2026-10-07 | ????? FMEA/?????????(????????????????,?????,???????) |
| 157 | [PerryLink/dsh-spc-gbt-adapter](https://github.com/PerryLink/dsh-spc-gbt-adapter) | 0 | 2026-10-07 | 2026-10-07 | ??????????????(? GB/T 4091 ??????????????? Cp/Cpk ????,?????,???????) |
| 158 | [PerryLink/dsh-tender-extract](https://github.com/PerryLink/dsh-tender-extract) | 0 | 2026-10-07 | 2026-10-07 | ??????????(???????????????,?????,???????) |
| 159 | [PerryLink/dsh-tender-matrix](https://github.com/PerryLink/dsh-tender-matrix) | 0 | 2026-10-07 | 2026-10-07 | ??????????(??????????????,?????,???????) |
| 160 | [PerryLink/dsh-warranty-calc](https://github.com/PerryLink/dsh-warranty-calc) | 0 | 2026-10-07 | 2026-10-07 | ??????????(????????????????????,?????,???????) |
| 161 | [Player-MINEPIG/dsh-prompt-assembler](https://github.com/Player-MINEPIG/dsh-prompt-assembler) | 0 | 2026-10-06 | 2026-10-07 | Independent DSH prompt assembly plugin with source-owned adapters and per-session strategies. |
| 162 | [PolitaryMonicy/dsh-agent-clean](https://github.com/PolitaryMonicy/dsh-agent-clean) | 0 | 2026-10-06 | 2026-10-07 | Remove subagent entries from DeepSeek Harness session logs without breaking the log, delete orphaned projection caches, and purge whole sessions — always dry-run first, always with a backup. |
| 163 | [PrismScopes/dsh-account-alias](https://github.com/PrismScopes/dsh-account-alias) | 0 | 2026-10-07 | 2026-10-07 | DSH 插件：左下角账户入口不再显示手机号前2后3位，改用自定义 id，可在「插件」页配置 \| DSH plugin: use a custom id instead of the server-masked phone number in the sidebar account entry |
| 164 | [PrismScopes/dsh-prompt-studio-compat](https://github.com/PrismScopes/dsh-prompt-studio-compat) | 0 | 2026-10-07 | 2026-10-07 | DSH 0.2.x 兼容分支：Prompt Studio 插件（可视化编辑/覆盖运行时系统提示词并实时预览）。上游 Moeblack/dsh-prompt-studio |
| 165 | [qiqqqqq517/dsh-update-plus](https://github.com/qiqqqqq517/dsh-update-plus) | 0 | 2026-10-07 | 2026-10-07 | Multi-channel update checker and one-click restart for DeepSeek Harness Desktop: stable, beta and nightly channels, direct installer download with SHA-512 verification, and restart of the app together with its Host. DSH 桌面端多通道更新与重启插件。 |
| 166 | [RaditPasya/dsh-web-git-sidebar](https://github.com/RaditPasya/dsh-web-git-sidebar) | 0 | 2026-10-06 | 2026-10-07 | Git panel for DeepSeek Harness — branch dropdown, commit graph, and previews in the left rail, plus an always-on footer dock that follows your session |
| 167 | [realDGD/dsh-macos-notify](https://github.com/realDGD/dsh-macos-notify) | 0 | 2026-10-06 | 2026-10-07 | Native interactive macOS notifications, approvals and full question forms for DeepSeek Harness Desktop |
| 168 | [RichardYZLu/dsh-cad-preview](https://github.com/RichardYZLu/dsh-cad-preview) | 0 | 2026-10-07 | 2026-10-07 | CAD 3D 模型预览 / CAD 3D model preview for the DSH sidebar: STEP/STP/IGES/BREP (OpenCascade WASM, parsed in a Web Worker) + STL/3MF/OBJ/PLY, with orbit camera, structural edges, wireframe and an axis gizmo. Works with dsh-better-sidebar or DSH's built-in document preview. |
| 169 | [ripls56/dsh-voice-ru](https://github.com/ripls56/dsh-voice-ru) | 0 | 2026-10-06 | 2026-10-07 | Local Russian speech-to-text provider for DeepSeek Harness voice input: NVIDIA Nemotron 3.5 ASR 0.6B (GGUF) on transcribe.cpp. Model and native runtime download on first use, sha256-verified. |
| 170 | [running-grass/dsh-team-mode](https://github.com/running-grass/dsh-team-mode) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness plugin: a \`team\` agent preset whose Lead decides and dispatches while short-lived workers do the writing |
| 171 | [samsam560/chat-share-card](https://github.com/samsam560/chat-share-card) | 0 | 2026-10-07 | 2026-10-07 | 对话截图美化器（分享卡片）：一键把 AI 对话生成精美的分享卡片，支持自定义背景/字体/配色/圆角，导出 PNG |
| 172 | [samsam560/dog-kjdh](https://github.com/samsam560/dog-kjdh) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 开场 / 退场动画插件：5 套纯代码自绘样式，也可以换成你自己的视频或动图；设置页可调速度、粒子、主色、文案。退场动画需要可选地打一次桌面壳补丁。 |
| 173 | [SciF-Lin/dsh-notify-sound-plus](https://github.com/SciF-Lin/dsh-notify-sound-plus) | 0 | 2026-10-07 | 2026-10-07 | DSH 提示音插件：任务完成/需要回答/需要授权/出错四类事件的 Web Audio 实时合成提示音，可在通用设置里逐事件选音、上传自定义音频，对话左下角有临时静音喇叭；兼容桌面端与网页端 |
| 174 | [sh1robana/dsh-plugin-message-edit](https://github.com/sh1robana/dsh-plugin-message-edit) | 0 | 2026-10-07 | 2026-10-07 | DSH 桌面端消息编辑：原地保存、附件编辑、分支重生成与版本时间线 |
| 175 | [shanhai-city-states/kaipu-dsh-plugin-release](https://github.com/shanhai-city-states/kaipu-dsh-plugin-release) | 0 | 2026-10-06 | 2026-10-07 | 山海・开铺 — DeepSeek Harness 的「场地」插件：多人多灯会商审校，执行位可替换，全程留痕。 |
| 176 | [ShuangWang-cn/workbuddy-shared-model](https://github.com/ShuangWang-cn/workbuddy-shared-model) | 0 | 2026-10-07 | 2026-10-07 | Share your WorkBuddy credits with DeepSeek Harness, OpenCode, Cursor and other AI tools. Windows desktop app. |
| 177 | [Shuffle-1992/dsh-context-pilot](https://github.com/Shuffle-1992/dsh-context-pilot) | 0 | 2026-10-06 | 2026-10-07 | DSH 上下文智能压缩 + 智能思考：每轮注入用量、模型自主决定压缩并自动续跑；可选让模型按任务难度自主调整思考强度档位 |
| 178 | [slinxiaosun-blip/dsh-ai-passport-plugin](https://github.com/slinxiaosun-blip/dsh-ai-passport-plugin) | 0 | 2026-10-07 | 2026-10-07 | DSH 插件：把 AI Passport 变成 DeepSeek Harness 的随身任务终端（蓝牙链路、任务桥接、语音识别、桌面挂件） |
| 179 | [SodiumLayer/dsh-obscura](https://github.com/SodiumLayer/dsh-obscura) | 0 | 2026-10-07 | 2026-10-07 | Obscura settings-page plugin for DeepSeek Harness: starts and health-checks the obscura MCP server, resolves its binary from PATH or bin/, and keeps the mcp-obscura entry in your profile in sync. |
| 180 | [SOH4C4759/dsh-plugin-cicd](https://github.com/SOH4C4759/dsh-plugin-cicd) | 0 | 2026-10-06 | 2026-10-07 | 发布台 (Release Console) for DeepSeek Harness: a sidebar entry and a main-panel page showing each repository's latest CI run, its releases, and whether the local checkout is ahead of the release — with one-click build / release / publish-draft. Reuses the machine's authenticated gh CLI and stores no credential. |
| 181 | [stephenlstrange2/dsh-remote-dashboard](https://github.com/stephenlstrange2/dsh-remote-dashboard) | 0 | 2026-10-01 | 2026-10-07 | Read-only wall dashboard for DeepSeek Harness sessions across several machines: pull or push, one hub, tablet page that fits the screen. |
| 182 | [stushansusu/dsh-web-start-ui](https://github.com/stushansusu/dsh-web-start-ui) | 0 | 2026-10-07 | 2026-10-07 | dsh web start ui - 启动动画 / launch-video plugin for the DSH Web GUI and desktop client: built-in and custom launch skins, a settings page, and a feedback group QR code. |
| 183 | [Tacrine/oh-my-dsh-omo-fork](https://github.com/Tacrine/oh-my-dsh-omo-fork) | 0 | 2026-10-07 | 2026-10-07 | Oh My DSH — fork of OMO: the tri-agent agent preset (Atlas orchestration + Prometheus planning) packaged as a DeepSeek Harness extension plugin |
| 184 | [teilomillet/dsh-openai-subscription](https://github.com/teilomillet/dsh-openai-subscription) | 0 | 2026-10-07 | 2026-10-07 | Connect DeepSeek Harness to a ChatGPT subscription through official browser sign-in. macOS community add-on. |
| 185 | [tenebris173/dsh-skin-strata](https://github.com/tenebris173/dsh-skin-strata) | 0 | 2026-10-07 | 2026-10-07 | STRATA · 地层 — DSH UI 皮肤：工业网格 + 等高线背景，浅色纸面 / 深色终端两套底 |
| 186 | [thisisname123/wechat4-auto](https://github.com/thisisname123/wechat4-auto) | 0 | 2026-10-07 | 2026-10-07 | Send WeChat 4.x (Windows) messages via OCR + coordinate automation — zero dependencies |
| 187 | [TwinsEarth/dsh-windows2macos](https://github.com/TwinsEarth/dsh-windows2macos) | 0 | 2026-10-07 | 2026-10-07 | DSH: W2M — one DeepSeek account, one instruction, every online Windows/macOS machine runs the same project. Rabbit relay + per-machine Localside + five DSH tools. |
| 188 | [uio-o/dsh-model-control](https://github.com/uio-o/dsh-model-control) | 0 | 2026-10-07 | 2026-10-07 | Unified model control for DeepSeek Harness: model picker + model management (channels, per-model capabilities) + reasoning-effort advisory, in one seat and one settings page. |
| 189 | [uio-o/dsh-plugin-operation-log](https://github.com/uio-o/dsh-plugin-operation-log) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 会话面板插件：按轮次/步骤统计 Skill、MCP 调用与文件读写，含失败详情、按来源筛选、文件删除标注。 |
| 190 | [Uloboros/dsh-design-ledger](https://github.com/Uloboros/dsh-design-ledger) | 0 | 2026-10-07 | 2026-10-07 | Turn design documents into a live development progress tree and inject it into DSH session context, so new sessions can pick up where the last one left off. |
| 191 | [weibaohui/dsh-ambient](https://github.com/weibaohui/dsh-ambient) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 插件：白噪音播放器——场景纯目录驱动，AI 后台分门别类下载氛围音，四播放模式+定时关 |
| 192 | [Wepoi9/dsh-local-font-picker](https://github.com/Wepoi9/dsh-local-font-picker) | 0 | 2026-08-23 | 2026-10-07 | Community DSH plugin for selecting installed local UI and code fonts in the DeepSeek Harness Web UI. |
| 193 | [Wepoi9/dsh-max-token-auto-continue](https://github.com/Wepoi9/dsh-max-token-auto-continue) | 0 | 2026-09-20 | 2026-10-07 | Community DSH host plugin that automatically resumes root-agent sessions after max-token truncation, with bounded retries and fail-closed safeguards. |
| 194 | [Wepoi9/dsh-web-notify](https://github.com/Wepoi9/dsh-web-notify) | 0 | 2026-09-20 | 2026-10-07 | Community DSH plugin for browser and OS notifications on session completion, errors, and pending interactions. |
| 195 | [WhatCannotBeSaid/dsh-session-eva-status](https://github.com/WhatCannotBeSaid/dsh-session-eva-status) | 0 | 2026-10-07 | 2026-10-07 | DSH plugin: colors sidebar session rows by their official status in an Evangelion-flavored palette - orange = pending interaction, red = selected session, purple = finished but unviewed, rainbow title = pinned. |
| 196 | [WihteCo/dsh-opencode-go-quota](https://github.com/WihteCo/dsh-opencode-go-quota) | 0 | 2026-10-07 | 2026-10-07 | OpenCode Go quota in the DeepSeek Harness sidebar foot: one 42px cell plus a hover popover with the rolling 5-hour, weekly and monthly windows, each carrying a usage bar, an elapsed-time marker, the remaining share and a reset countdown. |
| 197 | [WindFromKadath/dsh-plugin-branch-origin](https://github.com/WindFromKadath/dsh-plugin-branch-origin) | 0 | 2026-10-07 | 2026-10-07 | DSH (DeepSeek Harness) plugin for people who fork sessions: it labels each fork with the conversation it came from — a title prefix (⤷ 来源：) plus a sidebar badge that survives renaming. Zero dependencies; v0.1.2, MIT. |
| 198 | [WindFromKadath/dsh-plugin-workspace-archive](https://github.com/WindFromKadath/dsh-plugin-workspace-archive) | 0 | 2026-10-07 | 2026-10-07 | DSH plugin: archive the sessions of a workspace whose folder disappears, and bring them back (grouping included) when the folder returns. |
| 199 | [xcisxc29/dsh-wechat](https://github.com/xcisxc29/dsh-wechat) | 0 | 2026-10-07 | 2026-10-07 | WeChat channel for DeepSeek Harness |
| 200 | [XIA-2005/dsh-usage-stats](https://github.com/XIA-2005/dsh-usage-stats) | 0 | 2026-10-07 | 2026-10-07 | DSH（DeepSeek Harness）用量与工具调用统计插件：token 四桶、费用估算、工具调用次数与耗时排行、按对话与按模型定位开销，Web 设置页面板展示 |
| 201 | [xiake-1/dsh-unity-mcp-bridge](https://github.com/xiake-1/dsh-unity-mcp-bridge) | 0 | 2026-09-30 | 2026-10-07 | 连接unitymcp（第三方unitymcp工具，实测速度和质量兼具）和dsh的插件，同时加入了技能工具，精简了unitymcp的输入和输出量，加快使用agent协助unity开发速度 |
| 202 | [xikan0/dsh-outerwilds-theme](https://github.com/xikan0/dsh-outerwilds-theme) | 0 | 2026-10-07 | 2026-10-07 | 以《星际拓荒》为主题的 DSH Web 与 DSH Desktop 外观插件 |
| 203 | [xingxue-ux/dsh-comfyUI-control](https://github.com/xingxue-ux/dsh-comfyUI-control) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 绘图模式 preset plugin: 18 comfyui_* tools — Anima/Krea2 generation, LoRA search, Danbooru tags, PNG metadata, Ollama vision, 小番茄 de-obfuscation |
| 204 | [XylaAlyx/dsh-plugin-dex-style-edit](https://github.com/XylaAlyx/dsh-plugin-dex-style-edit) | 0 | 2026-10-07 | 2026-10-07 | Codex-style edit for DeepSeek Harness. |
| 205 | [yang1604454533-netizen/dsh-ASD-100](https://github.com/yang1604454533-netizen/dsh-ASD-100) | 0 | 2026-10-07 | 2026-10-07 | Always-on ASD-STE100 Simplified Technical English output for DSH. Commands: /ste on, /ste off, /ste. |
| 206 | [yuxiaole-bili/dsh-mobile-proxy-agent](https://github.com/yuxiaole-bili/dsh-mobile-proxy-agent) | 0 | 2026-10-07 | 2026-10-07 | 让 DeepSeek Harness 在老手机（Chrome 114 WebView）上可用：反向代理 + 热补丁通道 + DSH 插件。零 DSH 改动、免重装 APK，改文件刷新即生效。 |
| 207 | [zcmilan/lelogin-skill](https://github.com/zcmilan/lelogin-skill) | 0 | 2026-05-01 | 2026-10-07 | LeLogin skill plugin for DeepSeek Harness: credential injection and authenticated business applications without exposing plaintext secrets. |
| 208 | [zeranhub/dsh-context-shaping](https://github.com/zeranhub/dsh-context-shaping) | 0 | 2026-10-07 | 2026-10-07 | Interactive behavioral shaping for a DeepSeek Harness (DSH) session: rewrite the model-visible conversation history in place - edit a reply or its reasoning chain, delete a message, undo any rewrite, with an audit trail. Continuation of @wasd258/dsh-context-surgery (MIT, (c) 2026 WASD258-jpg). |
| 209 | [zhairy/dsh-agent-swarm](https://github.com/zhairy/dsh-agent-swarm) | 0 | 2026-10-07 | 2026-10-07 | DeepSeek Harness 中文多智能体插件「百工」：天枢统筹 12 位专家，证据门禁、多层模型路由与回退、内嵌 Jev 判断工具 |
| 210 | [zhang-tod/dsh-win-notify](https://github.com/zhang-tod/dsh-win-notify) | 0 | 2026-10-07 | 2026-10-07 | Windows native toast notifications plugin for DeepSeek Harness (DSH): agent turn done, subagent done, background job done - click to open the Web UI. |
| 211 | [zhanghao3693/dsh-deepseek-web](https://github.com/zhanghao3693/dsh-deepseek-web) | 0 | 2026-10-07 | 2026-10-07 | 网页版 AI 一键入口：在右侧边栏浏览器 tab 里打开 DeepSeek / Kimi / 豆包 / 腾讯元宝 / 通义千问 / 智谱清言的免费网页版（走 Electron webview，不受 CSP frame-ancestors 限制）。站点列表在 lib/client.js 的 SITES 常量里，可自由增删。 |
| 212 | [zheyuanlinye7/dsh-web-service](https://github.com/zheyuanlinye7/dsh-web-service) | 0 | 2026-10-07 | 2026-10-07 | Run \`dsh web\` as a Windows service: auto-start at boot, no console window, survives sign-out. A DeepSeek Harness plugin with MCP tools, a CLI, and a diagnostic engine built from real failures. |
| 213 | [zzstar101/dsh-sandbox-noop-escalation](https://github.com/zzstar101/dsh-sandbox-noop-escalation) | 0 | 2026-10-06 | 2026-10-07 | DSH plugin: drop sandbox_permissions that cannot widen the current sandbox mode, fixing 'not strictly wider' errors from GPT models |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 111111AAA111111/dsh-premise-guard-cn
- AIMFllyYS/dsh-operating-context
- andershfranzen/dsh-brand-a5
- AntheaLaffy/missing-semester-skills-dsh
- BotHarness/BotHarness
- EvangeliMo/dsh-computer-use
- festoney8/deepseek-harness-GUI
- jipika/dsh-claude-theme
- jipika/dsh-plugin-console
- jipika/dsh-ui-fixes
- kkaporn/dsh-workflow-plugins
- lunaship/dsh-links
- qcsjjjjj/dsh-github-accel
- qcsjjjjj/dsh-hero-rightbar
- qcsjjjjj/dsh-planner
- Vim0x3c/dsh-session-manager
- Vim0x3c/dsh-skin-appearance
- Vim0x3c/dsh-tts
- wantosure/dsh-plugin-browser-memory
- yan4342/dsh-session-roots
- yhPrime/dsh-github-installer
