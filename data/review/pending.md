# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-13**
- 快照日期 / Snapshot date: **2026-11-13 (UTC)**
- 待审核 / Pending: **424**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **41**
- Star 异常增长 / Star-growth alerts: **10** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-12** / vs previous snapshot **2026-11-12**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **10**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [JimLiu/open-artifacts](https://github.com/JimLiu/open-artifacts) | 待审 / pending | 6419 | +16 | 507 | 158d | 待审高星 | 核准即 Top 4 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 72732 | +1452 | 2008 | 49d | 日增百星 | 日增 +1452★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 7602 | +342 | 733 | 36d | 日增百星 | 日增 +342★ |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 18645 | +235 | 643 | 91d | 日增百星 | 日增 +235★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1041 | +173 | 6 | 32d | 日增百星 | 日增 +173★；★/fork 173.5；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 6781 | +142 | 111 | 88d | 日增百星 | 日增 +142★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12307 | +137 | 470 | 90d | 日增百星 | 日增 +137★；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 74903 | +120 | 2695 | 415d | 日增百星 | 日增 +120★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 9849 | +107 | 937 | 185d | 日增百星 | 日增 +107★；已不进榜单 |
| ⚠️ [YUsaltyfish/dsh-onebot-qq](https://github.com/YUsaltyfish/dsh-onebot-qq) | 已核准 / approved | 193 | +71 | 2 | 23d | 新入 Top 200 | 新入 Top 200 #145 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [JimLiu/open-artifacts](https://github.com/JimLiu/open-artifacts) ⚠️ | 6419 | 2026-06-07 | 2026-11-13 | Run Claude Design locally as an Agent Skill — Cursor, Codex, DeepSeek Harness &amp; more. Produce polished UI mockups, prototypes, decks &amp; wireframes as self-contained HTML, without claude.ai/design. Best with Opus or Claude. |
| 2 | [lightsifter/sift-light](https://github.com/lightsifter/sift-light) | 103 | 2026-08-27 | 2026-11-13 | sift-light — Evidence-first search for AI agents. |
| 3 | [kingcharleslzy-ai/DSH-Spicy](https://github.com/kingcharleslzy-ai/DSH-Spicy) | 92 | 2026-10-16 | 2026-11-13 | 完美适配 Purge 的 NSFW content creation 插件。在 DeepSeek Harness 中用自托管模型创作成人向图像、有声视频与多镜头短片，支持参考图编辑、LoRA 风格控制和 Agent 分镜剪辑。 |
| 4 | [topmindspace/dsh-super-kanban](https://github.com/topmindspace/dsh-super-kanban) | 46 | 2026-11-04 | 2026-11-13 | AI task kanban plugin for DeepSeek Harness — derives task goals, progress and issues from DSH sessions, with session hand-off, subtasks, artifacts and a dual full-page/sidebar UI. |
| 5 | [zhizhuodemao/ai-reverse-resources](https://github.com/zhizhuodemao/ai-reverse-resources) | 14 | 2026-08-13 | 2026-11-13 | Plugin marketplace for AI-assisted reverse engineering across Codex and Claude Code. |
| 6 | [214140846/browser-hands](https://github.com/214140846/browser-hands) | 13 | 2026-11-12 | 2026-11-13 | Give your AI agent hands in your own browser: Chrome extension + local MCP server. Logged-in, parallel, low CPU. |
| 7 | [finogeeks/finsafe](https://github.com/finogeeks/finsafe) | 8 | 2026-05-08 | 2026-11-13 | Process level sandbox for any AI agents. Act as lightweight security guard and privacy protector for desktops |
| 8 | [lonelycrab888/roundtable-bots](https://github.com/lonelycrab888/roundtable-bots) | 8 | 2026-11-11 | 2026-11-13 | A lightweight, minimally invasive multi-bot roundtable for DeepSeek Harness. In the native chat UI, KingBot delegates tasks, guides discussions, and brings conclusions back to the original chat. |
| 9 | [loyalchiiina/dsh-deepseek-web-free](https://github.com/loyalchiiina/dsh-deepseek-web-free) | 6 | 2026-11-07 | 2026-11-13 | 将 DeepSeek 网页端模型、对话历史无缝接入 DeepSeek Harness |
| 10 | [ARSI-LAB/agentbundle](https://github.com/ARSI-LAB/agentbundle) | 5 | 2026-11-02 | 2026-11-13 | A unified CLI and SDK for validating, installing, and managing AI agent bundles across multiple agent runtimes. |
| 11 | [looki-ai/looki-plugin](https://github.com/looki-ai/looki-plugin) | 5 | 2026-09-16 | 2026-11-13 | Looki MCP Plugin for AI assistants |
| 12 | [ruohan0713/dsh-theme-studio](https://github.com/ruohan0713/dsh-theme-studio) | 3 | 2026-11-13 | 2026-11-13 | Twenty original literary themes for DeepSeek Harness (DSH): light/dark palettes, 116 design tokens, animated wallpapers. |
| 13 | [YuigahamaHawk/dsh-paperhub](https://github.com/YuigahamaHawk/dsh-paperhub) | 3 | 2026-11-08 | 2026-11-13 | DeepSeek Harness插件：内置阅读器的文献库管理插件，具备AI排版、双语交替翻译与伴读助手功能，可从Zotero一键导入 |
| 14 | [2307918080lmx-lang/dsh-cover-studio](https://github.com/2307918080lmx-lang/dsh-cover-studio) | 2 | 2026-11-13 | 2026-11-13 | DeepSeekHarness 视频封面工作台：中转站生图、本地中文字体排版、可编辑画布、风格复刻与 AI 模板。 |
| 15 | [Basspoom/dsh-nextline](https://github.com/Basspoom/dsh-nextline) | 2 | 2026-11-12 | 2026-11-13 | Personalized next-message ghost text for DeepSeek Harness |
| 16 | [Dreverie/dsh-token-frugal](https://github.com/Dreverie/dsh-token-frugal) | 2 | 2026-10-08 | 2026-11-13 | Cut the input-token cost of long DeepSeek Harness sessions: source-side tool-output compression on tools/post-execute plus per-agent tool-catalogue visibility, with a measurement script. |
| 17 | [Earheart-spy/dsh-nitai-theme](https://github.com/Earheart-spy/dsh-nitai-theme) | 2 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 拟态（新拟态）主题与顶部功能刘海：明暗双模式、双向软阴影、时钟/日期/费用/明暗开关一体化。 |
| 18 | [elyoncatnecoe/dsh-voice-speaker](https://github.com/elyoncatnecoe/dsh-voice-speaker) | 2 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 语音朗读插件：流式 TTS 朗读 + 轻量变声（海星/暗潮/正太/萝莉中性/少年/大叔），每条消息可朗读。 |
| 19 | [Miyamiz39/dsh-consensus](https://github.com/Miyamiz39/dsh-consensus) | 2 | 2026-11-12 | 2026-11-13 | Consensus academic search and research agent for DeepSeek Harness |
| 20 | [oh-dsh-plugins/dsh-gpt-adapter](https://github.com/oh-dsh-plugins/dsh-gpt-adapter) | 2 | 2026-11-11 | 2026-11-13 | DeepSeek Harness plugin for GPT models and Codex instructions, skills, plugin resources, and MCP configuration. |
| 21 | [shuai0503/dsh-plugin-provider-console](https://github.com/shuai0503/dsh-plugin-provider-console) | 2 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：多账户余额查询/刷新 + 通用模型 API 调用入口 · Provider console for DSH |
| 22 | [TaoruiLiu19/DSH-LLSA](https://github.com/TaoruiLiu19/DSH-LLSA) | 2 | 2026-11-10 | 2026-11-13 | DeepSeek Harness 多智能体插件｜LeanLink 精简协作通信 \| HUD 实时展示 Agent 工作状态 |
| 23 | [usi112/dsh-purge-fixed](https://github.com/usi112/dsh-purge-fixed) | 2 | 2026-11-13 | 2026-11-13 | dsh-purge 1.1.75+upstream.1.1.71 — 基于上游 dsh-purge 1.1.71（作者 小杨，MIT）的修复分支，专为 DSH Go 手机版（Android + proot）适配：84 条补丁，能按 7 种状态看、能整批回滚、每条写明原因和怎么处理；另有两个 dsh-go 原生界面插件。 Fixed fork of dsh-purge 1.1.71 for DSH Go. |
| 24 | [WangJialong19/dsh-wsl-sidebar](https://github.com/WangJialong19/dsh-wsl-sidebar) | 2 | 2026-10-29 | 2026-11-13 | 在DSH中使用WSL |
| 25 | [xiaoshihou514/archived_dsh-vision](https://github.com/xiaoshihou514/archived_dsh-vision) | 2 | 2026-08-13 | 2026-11-13 | deprecated |
| 26 | [108943962/dsh-plugin-rpa-center](https://github.com/108943962/dsh-plugin-rpa-center) | 1 | 2026-11-13 | 2026-11-13 | RPA 中心（DSH 插件）：拼多多推广/订单/财务/账户余额等日常自动化的统一入口，作业 × 店铺 |
| 27 | [2233heorbrin/fish-body](https://github.com/2233heorbrin/fish-body) | 1 | 2026-11-13 | 2026-11-13 | DSH agent 框架的「身体」层：饭→胃→手流程入口、目录查看、身体开关，以及只在开启时挂载的 SHA-256 工具 |
| 28 | [2233heorbrin/fish-brain](https://github.com/2233heorbrin/fish-brain) | 1 | 2026-11-13 | 2026-11-13 | DSH 全脑组合：人格(SELF)、只读记忆、心情、思考策略卡注入，外加协作门与工程工具门 |
| 29 | [27painter/swnx-switch](https://github.com/27painter/swnx-switch) | 1 | 2026-11-13 | 2026-11-13 | SolidWorks (.sldprt) &lt;-&gt; Siemens NX (.prt) interoperability: AI-readable neutral CAD model + tolerance-verified conversion (Parasolid/STEP), CLI + MCP tools + DSH plugin. |
| 30 | [2Wren/dsh-session-deleter](https://github.com/2Wren/dsh-session-deleter) | 1 | 2026-11-13 | 2026-11-13 | Permanently delete DeepSeek Harness conversations, including archived ones, from the sidebar. Unofficial DSH plugin with confirmation and safety checks. 在 DeepSeek Harness 侧栏中永久删除对话（含已归档），带确认与安全检查的非官方插件。 |
| 31 | [agi-fans/dsh-better](https://github.com/agi-fans/dsh-better) | 1 | 2026-11-13 | 2026-11-13 | A DeepSeek Harness (dsh) plugin bundle combining pi-better's codebase-grounded prompt deepening (/better) and subagent brief verification with DSH's Cordis host/web-client architecture. |
| 32 | [aihaoran0015/dsh-web-companion](https://github.com/aihaoran0015/dsh-web-companion) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: DeepSeek &amp; Doubao in the sidebar, with persistent login and Doubao vision via CDP |
| 33 | [amainoyo/Poster-Studio](https://github.com/amainoyo/Poster-Studio) | 1 | 2026-11-13 | 2026-11-13 | Natural-language poster studio plugin for DeepSeek Harness — a floating design panel plus chat tools: say what you want (改标题、换背景、调色、删层、导出 PNG) in any session, or edit visually. Site shader backdrop, CN/EN fonts, layer system, palettes, version history. |
| 34 | [Anon1009/dsh-ppt-studio](https://github.com/Anon1009/dsh-ppt-studio) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness (dsh) 一站式 PPT 创作与美化插件包：内置设计规范 Skill、6 套主题色板、0–100 审美体检与一键美化、300 DPI 图表与图示生成。 |
| 35 | [aosfather/draw-io-gomcp](https://github.com/aosfather/draw-io-gomcp) | 1 | 2026-10-12 | 2026-11-13 | the mcp server（stdio） for draw-io ，port from next-ai-draw-io |
| 36 | [AWMC-Codex/dsh-hosted-image](https://github.com/AWMC-Codex/dsh-hosted-image) | 1 | 2026-11-13 | 2026-11-13 | DSH plugin: generate images inside the DeepSeek Harness chat window through a sub2api hosted-image Responses endpoint. |
| 37 | [bzyyyy-china/dsh-tizi-switch](https://github.com/bzyyyy-china/dsh-tizi-switch) | 1 | 2026-11-13 | 2026-11-13 | 梯子开关 — 在 DeepSeek Harness 运行中随时切换出网代理，不重启、不改系统代理。Runtime proxy switch for DeepSeek Harness. |
| 38 | [Calliope-Nicles/technical-english-companion](https://github.com/Calliope-Nicles/technical-english-companion) | 1 | 2026-11-06 | 2026-11-13 | Technical English Companion · 专业英语术语伴学。帮助开发者在 Codex 和 DeepSeek Harness 的中文对话中学习专业英语。 |
| 39 | [Chen199545/dsh-context-compression-panel](https://github.com/Chen199545/dsh-context-compression-panel) | 1 | 2026-11-13 | 2026-11-13 | A DSH plugin, provide in-conversation panel to adjust context compaction threshold and retain ratio. |
| 40 | [Chosenzh/dsh-migrate](https://github.com/Chosenzh/dsh-migrate) | 1 | 2026-11-13 | 2026-11-13 | 让大肥鱼自己制作的记忆迁移插件，基于dsh-memory-sync进行修改，主要是做了一键打包导出的功能。 |
| 41 | [Corangam/dsh-familiar-dsweb](https://github.com/Corangam/dsh-familiar-dsweb) | 1 | 2026-11-12 | 2026-11-13 | DSH 桌面端的悬浮小助手：可拖拽悬浮窗内嵌 DeepSeek 网页版，跟随宿主深浅主题，水波外框 + 上浮气泡。A floating companion for DSH Desktop. |
| 42 | [devin667/dsh-purge-022](https://github.com/devin667/dsh-purge-022) | 1 | 2026-11-13 | 2026-11-13 | dsh-purge 1.1.71 的 DeepSeek Harness 0.2.2 适配分支（rc2.4，0.2.2-rc.3 / rc.1 通吃）：重锚补丁表、修复红队预设注册，补丁 id / 顺序 / 配置项与上游一致。MIT。 |
| 43 | [DevourerM/deepseek-harness-ssh](https://github.com/DevourerM/deepseek-harness-ssh) | 1 | 2026-10-25 | 2026-11-13 | 为dsh配置ssh通道，使得可以在文件夹里面配置远程服务器的文件夹 |
| 44 | [DING0101001/dsh-dual-track-output](https://github.com/DING0101001/dsh-dual-track-output) | 1 | 2026-11-04 | 2026-11-13 | 把文字与图表的双轨输出写进系统提示词：结论先行、按场景配图、图表选型。 |
| 45 | [Donglin027/dsh-session-cleanup](https://github.com/Donglin027/dsh-session-cleanup) | 1 | 2026-11-12 | 2026-11-13 | DSH 会话「删除后残留」清理器：宿主插件自动清理 + 手动 sweep 入口 + 技能脚本 |
| 46 | [fanilly/dsh-token-stats](https://github.com/fanilly/dsh-token-stats) | 1 | 2026-11-13 | 2026-11-13 | dsh token 统计插件 |
| 47 | [flyhye/dsh-selection-toolbar](https://github.com/flyhye/dsh-selection-toolbar) | 1 | 2026-11-13 | 2026-11-13 | A floating text-selection toolbar for the DeepSeek Harness Web UI: quote a transcript selection into the composer as a numbered reference chip that expands on send, or fork the Session into a side conversation in the right sidebar. |
| 48 | [god1sdfghjkl/dsh-plugin-voice-local](https://github.com/god1sdfghjkl/dsh-plugin-voice-local) | 1 | 2026-11-13 | 2026-11-13 | Local full-duplex voice for DeepSeek Harness: pluggable ONNX TTS + sherpa-onnx ASR, in-host, loopback-only, 7 themes. |
| 49 | [gongyehuahe/dsh-session-cleanup](https://github.com/gongyehuahe/dsh-session-cleanup) | 1 | 2026-11-13 | 2026-11-13 | DSH plugin: delete sessions from the Web UI, with sizes, confirmation and full cleanup. |
| 50 | [gongyehuahe/dsh-session-mover](https://github.com/gongyehuahe/dsh-session-mover) | 1 | 2026-11-13 | 2026-11-13 | DSH plugin: move a session to another workspace. |
| 51 | [HuoGu-Hub/dsh-sense-img](https://github.com/HuoGu-Hub/dsh-sense-img) | 1 | 2026-11-13 | 2026-11-13 | DSH插件：商汤生图模型调用插件 |
| 52 | [I-WANNASLEEP/dsh-process-narration](https://github.com/I-WANNASLEEP/dsh-process-narration) | 1 | 2026-11-13 | 2026-11-13 | DSH plugin: makes the agent narrate each step in plain words before it runs tools, and guards against plugins that collide with dsh-human-steps. |
| 53 | [JacobCodeShow/dsh-github-copilot-accounts](https://github.com/JacobCodeShow/dsh-github-copilot-accounts) | 1 | 2026-09-28 | 2026-11-13 | GitHub Copilot 多账号管理：设备码登录（支持 github.com 与 GHE 企业版）、多账号一键切换、额度与 Token 用量展示。 |
| 54 | [kkk-yoyo/dsh-mcp-rea](https://github.com/kkk-yoyo/dsh-mcp-rea) | 1 | 2026-10-21 | 2026-11-13 | A DeepSeek Harness bundle that makes the rea reverse-engineering MCP server switchable. |
| 55 | [l359199387/dsh-pet-enhance](https://github.com/l359199387/dsh-pet-enhance) | 1 | 2026-11-13 | 2026-11-13 | 给 dsh-pet 的增强插件：能闲聊、能看屏干活、能口述带教并写入本机技能。 |
| 56 | [ldq0102261819/dsh-market-seed](https://github.com/ldq0102261819/dsh-market-seed) | 1 | 2026-11-13 | 2026-11-13 | Seed DeepSeek Harness plugin-market index sources on startup, so the Discover tab can search and install community plugins right after install. |
| 57 | [LeoAndJellyfish/dsh-super-agent-source-wechat](https://github.com/LeoAndJellyfish/dsh-super-agent-source-wechat) | 1 | 2026-11-13 | 2026-11-13 | DSH Super Agent series · Part 01. Read local WeChat history through WeFlow API v2 in DeepSeek Harness. |
| 58 | [liangdabiao/dsh-voxel-forge](https://github.com/liangdabiao/dsh-voxel-forge) | 1 | 2026-11-13 | 2026-11-13 | dsh 插件：体素切片工坊 — 面板上传 GLB 真切片成逐层可拼的乐高体素（洪泛保空腔+面积加权取色），程序化生成，装配可拼搭检查与 LDraw 导出 |
| 59 | [LimeBlogs/dsh-mcp-manager](https://github.com/LimeBlogs/dsh-mcp-manager) | 1 | 2026-10-25 | 2026-11-13 | DeepSeek Harness MCP Manager |
| 60 | [LingYun3241/dsh-space-approve](https://github.com/LingYun3241/dsh-space-approve) | 1 | 2026-11-13 | 2026-11-13 | Press Space to approve DeepSeek Harness permission prompts — allow-once only, typing-safe. · DSH 插件：按空格批准授权（允许一次，不误批） |
| 61 | [lion231226/dsh-skill-router](https://github.com/lion231226/dsh-skill-router) | 1 | 2026-11-13 | 2026-11-13 | Search, load, archive and promote DSH skills without paying their context cost · DSH 技能路由器 |
| 62 | [LiuHongXuMaritime/dsh-hifleet-mcp](https://github.com/LiuHongXuMaritime/dsh-hifleet-mcp) | 1 | 2026-11-13 | 2026-11-13 | a dsh pulgin aim to get data from hifleet so as to do research &gt; |
| 63 | [lizhuonya/gemini-quota-widget-dsh](https://github.com/lizhuonya/gemini-quota-widget-dsh) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 桌面挂件插件：Gemini拟人形象；支持 DSH 余额与轮次花费、Gemini 5h/周额度同步（agy / RT / OAuth）、自定义立绘裁剪、提示音效与趣味陪伴互动。 |
| 64 | [LondonMoon/dsh-sandbox-approval-modal](https://github.com/LondonMoon/dsh-sandbox-approval-modal) | 1 | 2026-11-13 | 2026-11-13 | Native + in-page sandbox approval for DeepSeek Harness |
| 65 | [Lu-Zihe/dsh-rigor](https://github.com/Lu-Zihe/dsh-rigor) | 1 | 2026-11-13 | 2026-11-13 | Rigor for agent answers — measure how much the model thinks before it acts, audit unsourced claims, and send non-compliant answers back for a redo. |
| 66 | [MakerFlyFly/DSH-better-activity](https://github.com/MakerFlyFly/DSH-better-activity) | 1 | 2026-11-13 | 2026-11-13 | DSH 近期活动视图 \| Recent activity for DSH. |
| 67 | [minhaoli/dsh-zotero-reader](https://github.com/minhaoli/dsh-zotero-reader) | 1 | 2026-11-05 | 2026-11-13 | Read Zotero PDFs in the DSH right sidebar: page-accurate Q&amp;A, real outline, annotations that round-trip with Zotero. |
| 68 | [mycherish/dsh-deepseek-companion](https://github.com/mycherish/dsh-deepseek-companion) | 1 | 2026-10-22 | 2026-11-13 | DeepSeek 网页伴侣插件：在 DSH Web 中使用自己的 DeepSeek 账号，支持流式聊天、深度思考、搜索、图片与历史会话，以及 Dock / Float / Pop-out 三窗口。适用于 macOS，暂不支持 Desktop。 |
| 69 | [Myng-i/dsh-trae-agent-team](https://github.com/Myng-i/dsh-trae-agent-team) | 1 | 2026-11-13 | 2026-11-13 | DSH ⇄ TRAE 的多角色派活与独立验收纪律 |
| 70 | [nanhua3839/dsh-hykb-scroll](https://github.com/nanhua3839/dsh-hykb-scroll) | 1 | 2026-10-31 | 2026-11-13 | 好游快爆 AI 小号（dsh-hykb-scroll）：大号 @ 小号 → 小号自动回帖；读帖 + AI 总结。DSH 设置里完整设置页（刷快爆）+ 扫码登录 + 限流去重审计。 |
| 71 | [nyvaelefluffRuaRua/dsh-skill-mcp-nexus](https://github.com/nyvaelefluffRuaRua/dsh-skill-mcp-nexus) | 1 | 2026-11-12 | 2026-11-13 | DSH 面板：在一个界面里统一管理 skill 与 MCP。全局/工作区/会话三层开关、别名备注、分组、悬停提示、自建 MCP 服务器。 |
| 72 | [ohmykreee/dsh-llm-retry-boost](https://github.com/ohmykreee/dsh-llm-retry-boost) | 1 | 2026-11-03 | 2026-11-13 | Unlimited capped-backoff retries for transient model-request failures, with configuration-class failures kept on the shipped retry policy. |
| 73 | [oldcitynight/dsh-dynamic-context](https://github.com/oldcitynight/dsh-dynamic-context) | 1 | 2026-11-13 | 2026-11-13 | Task-scoped dynamic context and direct execution for DeepSeek Harness, built on dsh-bettertaskgraphs. GPL-3.0-only. |
| 74 | [one-orange-ss/dsh-bird-robin](https://github.com/one-orange-ss/dsh-bird-robin) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness ?????????? \| Robin persona &amp; skin for DSH (unofficial fan project) |
| 75 | [orca-zhang/filens](https://github.com/orca-zhang/filens) | 1 | 2026-09-18 | 2026-11-13 | 📄 Office / PDF / iWork / CAD / 3D / RAW / 360° 🔒 Browser-local preview &amp; conversion 🤖 Agent CLI with OCR, structured text &amp; layout extraction ⚡ Rust + WebAssembly 🧩 Vue 3 integration. Open-source, local-first. Your files, your device. |
| 76 | [pearjelly/dsh-heros](https://github.com/pearjelly/dsh-heros) | 1 | 2026-11-13 | 2026-11-13 | DSH-Heros · 深度荣耀 — pick Agent Presets as heroes, equip real tools and plugins, and level up through work. |
| 77 | [Ralsei1337/dsh-huoren](https://github.com/Ralsei1337/dsh-huoren) | 1 | 2026-11-13 | 2026-11-13 | 给 DSH 的模型输出加活人感：分条发、按字数打字、口头语与语气词、受控错别字与自我更正、情绪心流，外带去 AI 腔过滤器 |
| 78 | [revive123456/dsh-project-console](https://github.com/revive123456/dsh-project-console) | 1 | 2026-11-12 | 2026-11-13 | A multi-task workbench for Deepseek Harness - isolated worktrees, agent sessions, evidence-backend acceptance and human-confirmed integration |
| 79 | [RickT34/dsh-compaction-manager](https://github.com/RickT34/dsh-compaction-manager) | 1 | 2026-11-13 | 2026-11-13 | A DeepSeek Harness plugin that puts context compaction in one panel. |
| 80 | [SAOS-3624/see-on-phone](https://github.com/SAOS-3624/see-on-phone) | 1 | 2026-11-10 | 2026-11-13 | 鱼眼 / See on Phone —— 让 AI 住进手机：在手机上直接和模型聊天，需要时用自己的摄像头看世界（取帧 → 挑帧 → 拼宫格）。导盲只是其中一个可选读者。An Android app + a DSH plugin that let an agent chat on the phone and see the real world. Blind navigation is one optional mode, not the product. |
| 81 | [skyrocks/dsh-db](https://github.com/skyrocks/dsh-db) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: multi-source database queries (Vastbase/openGauss, PostgreSQL, MySQL, SQLite) with a settings UI; read-only by default, writes need approval |
| 82 | [skyrocks/dsh-go-model-limits](https://github.com/skyrocks/dsh-go-model-limits) | 1 | 2026-11-09 | 2026-11-13 | DeepSeek Harness plugin: show the official OpenCode GO monthly limit on each model row in the model picker |
| 83 | [skyrocks/dsh-turn-timing](https://github.com/skyrocks/dsh-turn-timing) | 1 | 2026-11-10 | 2026-11-13 | DSH 插件：每一轮对话结束显示耗时去向（模型 / 编码 / 构建 / 测试 / 清理） |
| 84 | [Spark-Matt/dsh-free-deepseek](https://github.com/Spark-Matt/dsh-free-deepseek) | 1 | 2026-11-13 | 2026-11-13 | 免 API Key 用 DeepSeek：把 chat.deepseek.com 网页版注册成 DeepSeek Harness 的模型提供方。插件自带内核与五平台 PoW 求解器，装完只需填一次 token。 |
| 85 | [StellarDX/DetailedInfoGen-AI-Ready](https://github.com/StellarDX/DetailedInfoGen-AI-Ready) | 1 | 2026-08-26 | 2026-11-13 | 加入了AI的SpaceEngine详细信息生成器，适配0.99x，可向下兼容0.980。New SpaceEngine Detailed Information Generator with AI |
| 86 | [subeichen1/dsh-mcp-switch](https://github.com/subeichen1/dsh-mcp-switch) | 1 | 2026-11-13 | 2026-11-13 | MCP panel for DSH: turn a whole server on or off, hide individual tools, and see how many context tokens each server's tool definitions use. Suggestions and feedback are welcome via Issues. |
| 87 | [suiyideali/dsh-moongate](https://github.com/suiyideali/dsh-moongate) | 1 | 2026-11-13 | 2026-11-13 | Learning auto-approval gate for DeepSeek Harness: Flash judging, confirmation learning, trust roots and a rule library. |
| 88 | [Sunnyshinnny776/one-line-prototype](https://github.com/Sunnyshinnny776/one-line-prototype) | 1 | 2026-11-13 | 2026-11-13 | 从需求到原型：一句话需求，问清关键规则后产出精简 PRD、流程图、可交互原型和确认单的 Agent skill。From requirement to prototype: an Agent skill that turns a one-line requirement into a concise PRD, flow diagrams, an offline clickable prototype and a confirmation sheet (output in Chinese). |
| 89 | [SuperChipper/dsh-dungeon-master](https://github.com/SuperChipper/dsh-dungeon-master) | 1 | 2026-10-24 | 2026-11-13 | QQ Bot IM channel and D&amp;D 5e Dungeon Master plugin for DeepSeek Harness (dsh) |
| 90 | [trevtravtrev/dsh-i-have-adhd](https://github.com/trevtravtrev/dsh-i-have-adhd) | 1 | 2026-11-13 | 2026-11-13 | ADHD-friendly output for DeepSeek Harness: action-first replies, numbered steps, visible wins. Port of ayghri/i-have-adhd. /i-have-adhd on demand, /adhd on for always-on. |
| 91 | [try-works/tool-mode](https://github.com/try-works/tool-mode) | 1 | 2026-10-13 | 2026-11-13 | tool-mode turns small models into agent tools in DSH and over MCP and Code Mode |
| 92 | [wangshouyong/dsh-taskbearing](https://github.com/wangshouyong/dsh-taskbearing) | 1 | 2026-11-12 | 2026-11-13 | 在长对话里，AI 从来不缺上下文，缺上下文的是你。” 这是一个为 开发者打造的 DSH 插件。它不做发号施令的老板，只做你的 AI 任务外脑与方向仪表盘。 |
| 93 | [wfz2006/dsh-agent-bridge](https://github.com/wfz2006/dsh-agent-bridge) | 1 | 2026-11-11 | 2026-11-13 | DSH 插件：浏览本机其他 AI Agent 的项目、记忆和 Skills，在原工作目录接续开发，或导出 Markdown 交接。 |
| 94 | [Whaoe123/dsh-go-mimo-balance](https://github.com/Whaoe123/dsh-go-mimo-balance) | 1 | 2026-11-13 | 2026-11-13 | dsh-go 原生插件：输入框上方常驻小米 MiMo 账户余额状态条 + 余额面板（现金/赠金/授信/冻结）。 |
| 95 | [Windsland52/dsh-exa-web-search](https://github.com/Windsland52/dsh-exa-web-search) | 1 | 2026-11-13 | 2026-11-13 | Exa web search for DeepSeek Harness — official API with a key, keyless public channel without one \| 给 DeepSeek Harness 加 Exa 联网搜索：有 Key 走官方 API，没 Key 走公共通道，装完即用 |
| 96 | [wqx11235/dsh-sidebar-fold-37](https://github.com/wqx11235/dsh-sidebar-fold-37) | 1 | 2026-11-11 | 2026-11-13 | DSH 侧栏收纳：把插件注册的面板行收成一行「更多」，悬停或点击在行内向下展开；右键进设置页，可勾选哪些面板留在外面。 / DSH sidebar fold: collapse plugin panel rows into one More row that expands inline on hover or click; right-click opens a settings page to choose which panels stay outside. |
| 97 | [wsqept/dsh-project-development](https://github.com/wsqept/dsh-project-development) | 1 | 2026-11-13 | 2026-11-13 | Risk-adaptive development coordination skill for DeepSeek Harness: choose the smallest sufficient process for each change. |
| 98 | [xiaohuo123212/dsh-probe](https://github.com/xiaohuo123212/dsh-probe) | 1 | 2026-11-13 | 2026-11-13 | Temporary probe workbench for DeepSeek Harness: greppable probes that never leak into a commit — insert, run, tear down byte-identically, keep the answer. |
| 99 | [xiaoshihou514/archived_dsh-tui](https://github.com/xiaoshihou514/archived_dsh-tui) | 1 | 2026-08-13 | 2026-11-13 | Deprecated |
| 100 | [xmlans/dsh-telegram-style](https://github.com/xmlans/dsh-telegram-style) | 1 | 2026-11-11 | 2026-11-13 | A telegram themes for deepseek harness. |
| 101 | [ycAlphi/dsh-labscript](https://github.com/ycAlphi/dsh-labscript) | 1 | 2026-11-10 | 2026-11-13 | DeepSeek Harness plugin for labscript-suite: runmanager panel read/write, engage + wait, YAML fixed-operation protocols with postprocess write-back, panel snapshots/restore, hard limits, and per-shot HDF5 analysis. |
| 102 | [yuanxiao2630/dsh-conversation-pins](https://github.com/yuanxiao2630/dsh-conversation-pins) | 1 | 2026-11-11 | 2026-11-13 | 在 DeepSeek Harness 对话的任意输出块上打图钉，之后一键跳回。对话再长，也不用靠滚轮一点点找。 |
| 103 | [zixiaog/dsh-storage-monitor](https://github.com/zixiaog/dsh-storage-monitor) | 1 | 2026-11-06 | 2026-11-13 | dsh存储空间分析及迁移插件 |
| 104 | [zwkit/dshweb](https://github.com/zwkit/dshweb) | 1 | 2026-11-13 | 2026-11-13 | DSH remote web access plugin — open the DeepSeek Harness desktop UI from a phone/tablet browser over LAN. |
| 105 | [zzzstarx/dsh-workbuddy-hub](https://github.com/zzzstarx/dsh-workbuddy-hub) | 1 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin for WorkBuddy2API-Hub (gateway by @ardeyouxipianyi, MIT) |
| 106 | [0xshahriar/dsh-pii-secrets](https://github.com/0xshahriar/dsh-pii-secrets) | 0 | 2026-11-13 | 2026-11-13 | PII Secrets Manager for DeepSeek Harness: encrypted local vault, placeholder redaction before every model request, and one-step exposure gates. |
| 107 | [1015677515/dsh-cyberegg](https://github.com/1015677515/dsh-cyberegg) | 0 | 2026-11-13 | 2026-11-13 | Cyber Egg（赛博鸡蛋查询）— 一个面板看完全部白嫖积分与每日签到。只做查询 + 手动签到：无登录界面、不保存凭据、不自动签到 |
| 108 | [12345-mcpython/dsh-session-vault](https://github.com/12345-mcpython/dsh-session-vault) | 0 | 2026-11-13 | 2026-11-13 | A plugin to encrypt session data in radical way |
| 109 | [18301301961/dsh-voice-live](https://github.com/18301301961/dsh-voice-live) | 0 | 2026-11-13 | 2026-11-13 | Live streaming voice input for DeepSeek Harness — real-time captions in the composer, local SenseVoice + Silero VAD, optional model-assisted correction. |
| 110 | [2031814001yuyue-tech/dsh-card-tree](https://github.com/2031814001yuyue-tech/dsh-card-tree) | 0 | 2026-11-11 | 2026-11-13 | Explore-style card-tree conversations for the DeepSeek Harness Web UI: grow independent cards into a tree, edit the graph in an overview, one-way references, read-only tools. |
| 111 | [324641aliyun/dsh-full-permission-real](https://github.com/324641aliyun/dsh-full-permission-real) | 0 | 2026-11-13 | 2026-11-13 | DSH bundle: the ????(??) permission mode - no sandbox, no approvals, real elevated Windows administrator PowerShell with no per-command UAC. |
| 112 | [a1286743184/dsh-subagent-ops](https://github.com/a1286743184/dsh-subagent-ops) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: subagent ops suite — model pool load balancing, pool management UI, health probe and auto-revive. |
| 113 | [a1286743184/dsh-workspace-dispatch](https://github.com/a1286743184/dsh-workspace-dispatch) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: workspace &amp; session provisioning plus cross-directory session dispatch — hand a task to a real session in another project directory and get the report back. |
| 114 | [AAACherryCandy/dsh-stock-strip](https://github.com/AAACherryCandy/dsh-stock-strip) | 0 | 2026-11-11 | 2026-11-13 | A thin always-on quote bar at the bottom of DeepSeek Harness showing watchlist prices and per-position P&amp;L, with configurable fields and an automatic two-row layout. |
| 115 | [aaarookie/dsh-bilibili_video-study_buddy](https://github.com/aaarookie/dsh-bilibili_video-study_buddy) | 0 | 2026-11-13 | 2026-11-13 | Bilibili course study buddy for DeepSeek Harness: timestamped frame capture, range scan grids, AI subtitle verification, and windowed ASR. |
| 116 | [ADkun/dsh-git-bash](https://github.com/ADkun/dsh-git-bash) | 0 | 2026-11-13 | 2026-11-13 | 为 DeepSeek Harness (DSH) 提供一个 bash 工具：直接调用本机 Git Bash，路径/超时/输出上限可在插件页可视化配置。 |
| 117 | [AgentTools-Cloud/agent-tools-dsh](https://github.com/AgentTools-Cloud/agent-tools-dsh) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: find x402 paid APIs, MCP servers and A2A agents by intent from agent-tools.cloud, and safety-check MCP servers. |
| 118 | [aiohow/dsh-h3-image](https://github.com/aiohow/dsh-h3-image) | 0 | 2026-11-13 | 2026-11-13 | Fully local MiniMax H3-Image text-to-image on Apple Silicon MLX — a DeepSeek Harness plugin. 零出网本地文生图插件。 |
| 119 | [akeno6388/dsh-plugin-avalonia-mcp](https://github.com/akeno6388/dsh-plugin-avalonia-mcp) | 0 | 2026-11-13 | 2026-11-13 | Avalonia 前端 MCP 基建：CDP 接入 + 开发循环工具（构建/启动/重启/重连/体检）+ GitHub 自更新 |
| 120 | [Algovate/dsh-green-loop](https://github.com/Algovate/dsh-green-loop) | 0 | 2026-11-13 | 2026-11-13 | Green Loop: keep a coding agent fixing until the project check passes. DSH plugin with turn-stopping checks, failure steering, tools, and a composer dock. |
| 121 | [AndrossiKSL/DSHGAL](https://github.com/AndrossiKSL/DSHGAL) | 0 | 2026-11-13 | 2026-11-13 | 基于 dsh-whale-galgame 的个人学习二次魔改：22 位 AI 娘、GAL 界面与 Windows 便携窗口，DSH 默认 / Hermes 可选。非官方实验项目。 |
| 122 | [Antipas/undohaven](https://github.com/Antipas/undohaven) | 0 | 2026-11-13 | 2026-11-13 | Encrypted snapshots, rollback and machine migration for dsh (unofficial, third-party) |
| 123 | [anysda/dsh-quota](https://github.com/anysda/dsh-quota) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: Kimi Code quota and DeepSeek balance behind a composer badge |
| 124 | [Art3misLiu/cnki-batch-download](https://github.com/Art3misLiu/cnki-batch-download) | 0 | 2026-11-12 | 2026-11-13 | 批量下载知网文献的 Skill：支持登录个人/机构/学校账号，批量从CNKI网站下载论文。 |
| 125 | [Avenger233/dsh-session-cost-board](https://github.com/Avenger233/dsh-session-cost-board) | 0 | 2026-11-13 | 2026-11-13 | Per-session token and money accounting for DeepSeek Harness: settings page + composer cost pill. |
| 126 | [b-iurea/dsh-doc-workflow](https://github.com/b-iurea/dsh-doc-workflow) | 0 | 2026-11-13 | 2026-11-13 | Document-driven workflow plugin for DeepSeek Harness: verified index, clarification gates, notes &amp; plan, live sidebar panel. |
| 127 | [baibiaowang/dsh-voice-input-wb-asr](https://github.com/baibiaowang/dsh-voice-input-wb-asr) | 0 | 2026-11-13 | 2026-11-13 | Hold-to-talk voice input for DeepSeek Harness, transcribed on the WorkBuddy cloud — no local speech model required. |
| 128 | [begin2023/dsh-rewind](https://github.com/begin2023/dsh-rewind) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 会话编辑与重新生成插件，保留图片、文件与历史事件。 |
| 129 | [big-fat-fish-agent/danbooru-search-device](https://github.com/big-fat-fish-agent/danbooru-search-device) | 0 | 2026-11-12 | 2026-11-13 | DSH-D站搜索装置（AI 制作 / AI-made）— DSH bundle, not a standalone program; image-only Danbooru tools for DeepSeek Harness: post/tag search, year-favorites artist ranking, HOT/rising sampling, tag+expression &amp; image→artist similarity, part specialists. 宇宙免责声明：作者（人类甲方 + AI Agent「肥鱼」）意念合一，出事 0.5 秒原地跑路，不承担任何责任。 |
| 130 | [BitStandByYou/dsh-follow-until-screen](https://github.com/BitStandByYou/dsh-follow-until-screen) | 0 | 2026-11-06 | 2026-11-13 | 回答占满一屏后停止自动滚动，保留回答开头方便阅读的 DSH 插件 |
| 131 | [blkot/dsh-github-workspace](https://github.com/blkot/dsh-github-workspace) | 0 | 2026-11-13 | 2026-11-13 | Clone a GitHub repository into a chosen folder and register it as a DeepSeek Harness workspace. |
| 132 | [blkot/dsh-usage-hub](https://github.com/blkot/dsh-usage-hub) | 0 | 2026-11-13 | 2026-11-13 | Aggregated subscription usage in the DeepSeek Harness composer dock: DeepSeek API balance and OpenCode Go allowance. |
| 133 | [cannebergeee/dsh-sidebar-logo](https://github.com/cannebergeee/dsh-sidebar-logo) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: replace parts of the DeepSeek Harness sidebar logo (mark, wordmark, name, badge) from a page in Settings. |
| 134 | [caoliao/dsh-caoliao-qrcode](https://github.com/caoliao/dsh-caoliao-qrcode) | 0 | 2026-11-13 | 2026-11-13 | 草料二维码 DeepSeek Harness 插件：OAuth 连接、场景 Skill 与 Registry 材料 |
| 135 | [CarlCN2003/dsh-model-fallback](https://github.com/CarlCN2003/dsh-model-fallback) | 0 | 2026-11-13 | 2026-11-13 | Primary and multi-level backup model failover router for DeepSeek Harness (DSH), with cross-provider reasoning effort clamping, exponential cooldown, and per-turn recovery. |
| 136 | [cfour-hi/dsh-plugin-skinx](https://github.com/cfour-hi/dsh-plugin-skinx) | 0 | 2026-11-13 | 2026-11-13 | 将一张图片转化为 DeepSeek Harness 主题 |
| 137 | [chanyuenpang/dsh-better-file-viewer](https://github.com/chanyuenpang/dsh-better-file-viewer) | 0 | 2026-11-13 | 2026-11-13 | Independent DSH file session view with tree navigation, image galleries, JSON and document previews |
| 138 | [chanyuenpang/dsh-services-manager](https://github.com/chanyuenpang/dsh-services-manager) | 0 | 2026-11-13 | 2026-11-13 | DSH Desktop/Web background services manager with explicit process identity checks and a standalone registration CLI |
| 139 | [Char-AAA/dsh-inbox-planner](https://github.com/Char-AAA/dsh-inbox-planner) | 0 | 2026-11-13 | 2026-11-13 | Mail → auto to-do + calendar for DeepSeek Harness (DSH) |
| 140 | [CheinTian/dsh-glab-kanban](https://github.com/CheinTian/dsh-glab-kanban) | 0 | 2026-11-13 | 2026-11-13 | GitLab issues kanban plugin for DeepSeek Harness, built on the glab CLI. |
| 141 | [Chener0121/dsh-cad-export](https://github.com/Chener0121/dsh-cad-export) | 0 | 2026-11-13 | 2026-11-13 | CAD drawing reproduction for DeepSeek Harness with DWG, DXF, PNG and PDF export |
| 142 | [chenvinc/dsh-cto-office](https://github.com/chenvinc/dsh-cto-office) | 0 | 2026-11-13 | 2026-11-13 | CTO 办公室模式：一名 CTO 带六个岗位（架构师、工程师、评审、QA、UI/UX 设计、业务）的 DeepSeek Harness agent 预设 bundle |
| 143 | [chenxiaomao123/dsh-stock-watchlist](https://github.com/chenxiaomao123/dsh-stock-watchlist) | 0 | 2026-11-13 | 2026-11-13 | A draggable floating stock quote pane for DeepSeek Harness (A-share / HK / US), plus a stock_watch agent tool. |
| 144 | [chicochol/dsh-holopet](https://github.com/chicochol/dsh-holopet) | 0 | 2026-11-13 | 2026-11-13 | DSH-HoloPet — 把 DeepSeek Harness 的运行状态投到 HoloCubic 桌搭屏：A 页角色动画 + B 页场景化终端，DSH 插件经局域网 SSE 推送状态。 |
| 145 | [Chillizu/miopiik-iui](https://github.com/Chillizu/miopiik-iui) | 0 | 2026-11-13 | 2026-11-13 | MiOpIIk IUI for DeepSeek Harness (DSH) — trusted declarative Markdown embeds and bounded iui blocks rendered as native components. Prerelease (0.1.0-rc.4). |
| 146 | [chocobo77/adaptive-effort-scheduler](https://github.com/chocobo77/adaptive-effort-scheduler) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件：按请求形态（末条 user 消息字符数、估算上下文 token、此前工具结果数）为每个用户轮次钉一档 reasoning_effort，整轮不变以保住 prompt cache；判定 1:1 移植自 OmniRoute adaptiveEffort，零依赖、零额外 LLM 调用。/ Per-turn reasoning-effort pin for DeepSeek Harness, ported 1:1 from OmniRoute. |
| 147 | [chocobo77/dsh-agent-session-tools](https://github.com/chocobo77/dsh-agent-session-tools) | 0 | 2026-11-13 | 2026-11-13 | DSH Host-only 会话工具插件：session_create 新建顶层会话并默认落在当前会话的 Workspace（不再掉进“未分类”）、默认继承当前模型与思考强度；session_inject 投递真实用户消息（queue/steer + 60 秒同键幂等账本）；session_error_audit 只读审计会话日志里的工具错误趋势。/ Host-only DeepSeek Harness plugin: session_create, session_inject, session_error_audit. |
| 148 | [chocobo77/dsh-search-path-guard](https://github.com/chocobo77/dsh-search-path-guard) | 0 | 2026-11-13 | 2026-11-13 | DSH 搜索路径守卫插件：grep/glob 拿着不存在的路径时，在 ripgrep 启动前拦截，返回一行式自愈建议（先 glob 父目录再重试），不让乱码 stderr 进入模型上下文；源于 74 会话 287 条工具错误中 27 条坏路径的实测治理。/ Search-path guard for DeepSeek Harness: denies grep/glob calls whose search root does not exist before ripgrep spawns, with a one-line self-healing message — born from 27 bad-path errors measured across 74 sessions. |
| 149 | [CleverPuppy/dsh-gerrit-workbench](https://github.com/CleverPuppy/dsh-gerrit-workbench) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness (DSH) Web plugin: a Gerrit review workbench with syntax-highlighted diffs, inline comments and review publishing, plus an embedded AI review Session. |
| 150 | [cloudbywu/dsh-ustc-iwan](https://github.com/cloudbywu/dsh-ustc-iwan) | 0 | 2026-11-13 | 2026-11-13 | 词元工坊（DSH）插件：访问 USTC 模型与校内站点时走 ustc-iwan，其余流量保持原样，与 Clash TUN / WireGuard / Panabit iWAN 共存。 |
| 151 | [Codenestra/deepseek-harness-plugins](https://github.com/Codenestra/deepseek-harness-plugins) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：项目中枢、存储医生、回合级性能剖析器、失控看门狗、用量中心。提供源码、安装包与中文使用说明。 |
| 152 | [cs-qyzhang/dsh-llm-quota](https://github.com/cs-qyzhang/dsh-llm-quota) | 0 | 2026-10-26 | 2026-11-13 | Shows the active model provider's remaining balance or coding-plan quota in DeepSeek Harness (dsh). |
| 153 | [csl1002/dsh-xizai-pet](https://github.com/csl1002/dsh-xizai-pet) | 0 | 2026-11-13 | 2026-11-13 | 崔仔桌宠角色包，适用于 DeepSeek Harness 与 dsh-pet |
| 154 | [cube-ai/dsh-apphub](https://github.com/cube-ai/dsh-apphub) | 0 | 2026-11-13 | 2026-11-13 | CubeAI 应用中心：一个多应用聚合 DSH 插件。目前收录有神农问诊、智慧家庭、云上温室、咖啡工坊、计算器、贪吃蛇等应用。 |
| 155 | [cube-ai/dsh-smart-home-simulator](https://github.com/cube-ai/dsh-smart-home-simulator) | 0 | 2026-11-13 | 2026-11-13 | 在可拖动、可缩放的悬浮面板中演示空调、灯光、窗帘和空气净化器的状态，并允许大模型通过工具实时调节它们。 |
| 156 | [CY-W-2000/dsh-lan-access](https://github.com/CY-W-2000/dsh-lan-access) | 0 | 2026-11-13 | 2026-11-13 | LAN access gateway + chat-only agent port for the DeepSeek Harness Web UI. |
| 157 | [czr-chu/dsh-session-kit](https://github.com/czr-chu/dsh-session-kit) | 0 | 2026-11-01 | 2026-11-13 | DSH会话管理/DSH Session Manage Kit |
| 158 | [Darkhe55/dsh-plugin-models-fingerprint](https://github.com/Darkhe55/dsh-plugin-models-fingerprint) | 0 | 2026-11-13 | 2026-11-13 | 用于监控和诊断接入厂商的模型是否发生指纹变动，提示可能存在的不稳定路由情况。 |
| 159 | [dbbdbdhdbxb-design/dsh-douyin-studio](https://github.com/dbbdbdhdbxb-design/dsh-douyin-studio) | 0 | 2026-11-13 | 2026-11-13 | 抖音自动化插件：用 CDP 驱动真 Chrome 刷推荐、回评论、发作品、记事件；零运行时依赖。 |
| 160 | [ddlwwc/dsh-rag](https://github.com/ddlwwc/dsh-rag) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 知识库插件：BlockNote 富文本 + markdown 真相源 + 块级笔记 + 角色会话 |
| 161 | [dengwei84/dsh-workspace-tidy](https://github.com/dengwei84/dsh-workspace-tidy) | 0 | 2026-11-13 | 2026-11-13 | Keep a DSH workspace tidy: move generated scripts, temp files and render leftovers into a hidden .dsh folder. Never blocking, never deleting. |
| 162 | [DengyiGu/dsh-bib-lint](https://github.com/DengyiGu/dsh-bib-lint) | 0 | 2026-11-13 | 2026-11-13 | Read-only BibTeX auditing, Crossref DOI verification, reference formatting and revision comparison for DeepSeek Harness. |
| 163 | [dennisyang1986/dsh-dafeiyu-voice-chat](https://github.com/dennisyang1986/dsh-dafeiyu-voice-chat) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 语音对话插件：语音识别、语音合成与图片理解。Voice chat for dsh. |
| 164 | [Dreamaniax/dsh-weekly-retro](https://github.com/Dreamaniax/dsh-weekly-retro) | 0 | 2026-11-12 | 2026-11-13 | DSH 周报复盘插件：/weekly + 4 工具 + 12 路由 + 五 Tab 洞察页；本机数据、无遥测 |
| 165 | [dreamlee0/dsh-sticky-notes](https://github.com/dreamlee0/dsh-sticky-notes) | 0 | 2026-11-13 | 2026-11-13 | 为 DeepSeek Harness (DSH) 打造的本地优先 Markdown 便利贴插件，支持侧边面板、颜色标签、清单勾选与拖拽悬浮。 |
| 166 | [Dried-Persimmon-JPG/dsh-plugin-publisher](https://github.com/Dried-Persimmon-JPG/dsh-plugin-publisher) | 0 | 2026-11-12 | 2026-11-13 | Publish a DSH plugin folder to GitHub in one pass: local preflight, snapshot push, dsh-plugin topic, and an awesome-dsh-plugin pull request. |
| 167 | [drliuhuan/dsh-plugin-live-meeting](https://github.com/drliuhuan/dsh-plugin-live-meeting) | 0 | 2026-11-10 | 2026-11-13 | DeepSeek Harness meeting assistant plugin: system audio capture, local SenseVoice transcription, domain-aware LLM correction, agenda and speaker turns, live minutes and Q&amp;A. |
| 168 | [dsh-plugins/dsh-model-prompt](https://github.com/dsh-plugins/dsh-model-prompt) | 0 | 2026-11-13 | 2026-11-13 | Inject per-model system-prompt guidance from ~/.agents/model-prompts by matching regex patterns against the active model, replacing the prompt head when the model changes. DSH 模型专用系统提示词插件：按正则匹配当前模型注入专用指导，模型变化时替换头部系统提示词。 |
| 169 | [dsh-plugins/dsh-session-tree](https://github.com/dsh-plugins/dsh-session-tree) | 0 | 2026-11-13 | 2026-11-13 | 为 DeepSeek Harness（DSH）提供树状会话，支持消息分支切换、原位编辑、回答重试与消息撤回。 |
| 170 | [dsh-plugins/dsh-spellcheck-off](https://github.com/dsh-plugins/dsh-spellcheck-off) | 0 | 2026-11-13 | 2026-11-13 | Turn off browser spellcheck for every text input in the DSH Web UI, including the Lexical composer and all textareas. DSH Web 插件：关闭全站文本输入框的浏览器拼写检查。 |
| 171 | [dsh-plugins/dsh-subagent-control](https://github.com/dsh-plugins/dsh-subagent-control) | 0 | 2026-11-13 | 2026-11-13 | Let the root agent observe a subagent's work digest, context occupancy and model route, and compact, re-route, interrupt or wake it. DSH 子代理控制插件：观测子代理工作摘要与上下文占用，并对其执行压缩、切换模型、中断与唤醒。 |
| 172 | [dsh-plugins/dsh-subagent-intro](https://github.com/dsh-plugins/dsh-subagent-intro) | 0 | 2026-11-13 | 2026-11-13 | Inject a configurable subagent model introduction into the system prompt before the delegation tool guidance, editable from a Web settings panel. DSH 子代理介绍提示词插件：在子代理工具说明前注入可配置的模型介绍，支持 Web 界面编辑。 |
| 173 | [ebhrz/dsh-relay](https://github.com/ebhrz/dsh-relay) | 0 | 2026-11-02 | 2026-11-13 | Phone-first remote control for a local DeepSeek Harness, through your own zero-knowledge relay. |
| 174 | [EdgarSantiago/dsh-logo-studio](https://github.com/EdgarSantiago/dsh-logo-studio) | 0 | 2026-11-12 | 2026-11-13 | Customize the DeepSeek Harness brand image, name and logo locally. |
| 175 | [EdgarSantiago/dsh-spinner-studio](https://github.com/EdgarSantiago/dsh-spinner-studio) | 0 | 2026-11-12 | 2026-11-13 | Personalize the DeepSeek Harness activity icon and spinner verbs. |
| 176 | [EdgarSantiago/dsh-theme-studio](https://github.com/EdgarSantiago/dsh-theme-studio) | 0 | 2026-11-12 | 2026-11-13 | Custom HEX palettes and a theme editor for DeepSeek Harness. |
| 177 | [Eray114514/dsh-exec](https://github.com/Eray114514/dsh-exec) | 0 | 2026-11-13 | 2026-11-13 | 在终端 / 脚本 / CI 里一行调用 DeepSeek Harness，会话实时出现在桌面端侧边栏｜Run DeepSeek Harness from a shell, a script or CI — one line in, the final answer out, and the session lives in the desktop sidebar. |
| 178 | [ERroooooR/dsh-running-sessions](https://github.com/ERroooooR/dsh-running-sessions) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 客户端插件：标题栏「运行中会话」胶囊，一键切换运行中/最近完成的会话 |
| 179 | [evanliu3594/dsh-md2pdf](https://github.com/evanliu3594/dsh-md2pdf) | 0 | 2026-11-13 | 2026-11-13 | DSH Sidebar Enhancement Plugin: Export Markdown from the sidebar file tab as PDF, and write the PDF to the directory where the source file is located. |
| 180 | [factyy163/dsh-theme-paper-warm](https://github.com/factyy163/dsh-theme-paper-warm) | 0 | 2026-11-13 | 2026-11-13 | Warm paper theme for the DeepSeek Harness Web GUI (canvas #F2F0E5, ink #100F0F) with a Settings toggle row. |
| 181 | [Fahaoxi/dsh-tdx-tools](https://github.com/Fahaoxi/dsh-tdx-tools) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：将通达信 MCP 行情服务注册为原生工具，支持期权链、K 线与实时行情，内置 MCP 会话自愈。 |
| 182 | [FAKE0704/dsh-container-lifecycle](https://github.com/FAKE0704/dsh-container-lifecycle) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness community plugin: run a profile's shell/fs/sandbox inside a digest-pinned Docker container (sshd, identical-path mount, drift-refusing trust chain) |
| 183 | [FAKE0704/dsh-docker-policy-ceiling](https://github.com/FAKE0704/dsh-docker-policy-ceiling) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness community plugin: sandbox policy ceiling — refuse danger-full-access at the resolve layer, single boolean opt-in |
| 184 | [fanyingnie2163663/dsh-whalebuddy](https://github.com/fanyingnie2163663/dsh-whalebuddy) | 0 | 2026-11-13 | 2026-11-13 | 给 DeepSeek Harness 带来有档案、有默契、能延续的同事。DSH 插件。 |
| 185 | [Fatelikeshit/dsh-card-lan](https://github.com/Fatelikeshit/dsh-card-lan) | 0 | 2026-11-13 | 2026-11-13 | 局域网 21 点牌桌：DeepSeek Harness 插件，UDP 房间发现 + 房主权威牌局 + 房间密码 / 观战 / 浮层显示设置 |
| 186 | [Faustinchain/dsh-jarvis-boot](https://github.com/Faustinchain/dsh-jarvis-boot) | 0 | 2026-11-13 | 2026-11-13 | J.A.R.V.I.S.-style arc-reactor boot animation for the DeepSeek Harness web GUI |
| 187 | [feifandiv/dsh-feifan-life](https://github.com/feifandiv/dsh-feifan-life) | 0 | 2026-11-13 | 2026-11-13 | Feifan Life for DeepSeek Harness: a local life-management workspace (tasks, planning, finance, lists, habits, inspiration, reviews) ported from the Obsidian plugin. |
| 188 | [feifandiv/dsh-md-live-edit](https://github.com/feifandiv/dsh-md-live-edit) | 0 | 2026-11-13 | 2026-11-13 | Edit Markdown in place inside the DeepSeek Harness sidebar preview, without switching to a code mode. |
| 189 | [feifandiv/dsh-skill-cn](https://github.com/feifandiv/dsh-skill-cn) | 0 | 2026-11-13 | 2026-11-13 | Chinese skill search for the DeepSeek Harness slash menu: type a Chinese skill name, insert the real skill. |
| 190 | [feifandiv/dsh-unread-badge](https://github.com/feifandiv/dsh-unread-badge) | 0 | 2026-11-13 | 2026-11-13 | Unread badge for DeepSeek Harness: a Dock number badge plus a coloured dot on collapsed workspace rows. |
| 191 | [field209/dsh-figgenie-paper-diagram](https://github.com/field209/dsh-figgenie-paper-diagram) | 0 | 2026-11-13 | 2026-11-13 | Paper figures as SVG: draw, lint against venue layout rules, edit on a canvas panel, export vector PDF and editable draw.io. DSH skill + sidebar editor. |
| 192 | [flyhye/dsh-gateway](https://github.com/flyhye/dsh-gateway) | 0 | 2026-11-12 | 2026-11-13 | A local no-login gateway for DeepSeek Harness (dsh web). Lets the browser and the VS Code panel share one dsh instance — no token pasting, survives dsh restarts. |
| 193 | [FM112/dsh-secret-guard](https://github.com/FM112/dsh-secret-guard) | 0 | 2026-11-12 | 2026-11-13 | Denies access to credential files before tools run, and redacts secrets in tool results. |
| 194 | [fuyu1993/dsh-anysearch-quota](https://github.com/fuyu1993/dsh-anysearch-quota) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件：会话标题行的 AnySearch 额度徽章 + 额度视图，优先读取控制台仪表盘的真实剩余额度，回退到本机记账估算 |
| 195 | [gabrielbav/dsh-connectors](https://github.com/gabrielbav/dsh-connectors) | 0 | 2026-11-13 | 2026-11-13 | Connectors for DeepSeek Harness: a Settings page that connects remote MCP servers (Granola, Linear, Jira &amp; Confluence, Trello, GitHub, GitLab, Azure DevOps) with OAuth or tokens |
| 196 | [gabrielbav/dsh-plugin-aws](https://github.com/gabrielbav/dsh-plugin-aws) | 0 | 2026-11-13 | 2026-11-13 | AWS for DeepSeek Harness: a Settings page that switches the official AWS MCP servers (awslabs) on and off, by group or one by one |
| 197 | [Gao-Leonhard-Euler/dsh-lmfdb](https://github.com/Gao-Leonhard-Euler/dsh-lmfdb) | 0 | 2026-11-13 | 2026-11-13 | lmfdb tool for dsh |
| 198 | [gaoerge/dsh-composer-drawer](https://github.com/gaoerge/dsh-composer-drawer) | 0 | 2026-11-13 | 2026-11-13 | DSH 输入框收起插件：点击或拖动隐藏、展开聊天输入框，专注阅读长对话。DeepSeek Harness Composer Drawer. |
| 199 | [gaoerge/dsh-turn-navigator](https://github.com/gaoerge/dsh-turn-navigator) | 0 | 2026-11-13 | 2026-11-13 | DSH 左侧轮次导航插件：快速跳转聊天轮次，保留原生预览与历史加载。DeepSeek Harness Turn Navigator. |
| 200 | [gbn0219/dsh-ask-from-text](https://github.com/gbn0219/dsh-ask-from-text) | 0 | 2026-11-13 | 2026-11-13 | 划词追问 / Ask from Text — selection-based follow-up branches for DeepSeek Harness |
| 201 | [Geekhyt/dsh-genui-a2ui](https://github.com/Geekhyt/dsh-genui-a2ui) | 0 | 2026-11-13 | 2026-11-13 | 让 DeepSeek Harness 直接用交互式界面回答问题：内置 Google A2UI 1.0 原生 32 组件、14 类图表、Mermaid 架构图与实时测算台 |
| 202 | [geyaovip/zhixing-ark-dsh-plugins](https://github.com/geyaovip/zhixing-ark-dsh-plugins) | 0 | 2026-11-13 | 2026-11-13 | 知行方舟 DeepSeek Harness 插件：制造业进销存、品牌短视频脚本 |
| 203 | [gimhol/dsh-git-suite](https://github.com/gimhol/dsh-git-suite) | 0 | 2026-11-13 | 2026-11-13 | A Git suite for DSH Web: history, branches, refs, per-file diffs, and branch switching. More Git operations coming. · DSH Web 的 Git 套件：提交历史、分支、引用树、逐文件差异与分支切换，更多 Git 操作开发中。 |
| 204 | [Grawl/dsh-user-links](https://github.com/Grawl/dsh-user-links) | 0 | 2026-11-13 | 2026-11-13 | Clickable HTTP(S) and www links in the DSH messages you send |
| 205 | [GT-610/dsh-auto-review-model-select](https://github.com/GT-610/dsh-auto-review-model-select) | 0 | 2026-11-12 | 2026-11-13 | Route DeepSeek Harness Auto review to a chosen model and normalize its decision output. |
| 206 | [guicaiyue/dsh-task-cards](https://github.com/guicaiyue/dsh-task-cards) | 0 | 2026-11-05 | 2026-11-13 | DSH 任务卡插件：会话结束后由观察者把值得留下的事记成卡（要我决策 / 要我知晓 / 自动处理） |
| 207 | [gushengsheng/dsh-conversation-overview](https://github.com/gushengsheng/dsh-conversation-overview) | 0 | 2026-11-13 | 2026-11-13 | 一个用于dsh对话分发和对话管理的插件 |
| 208 | [hanfang5057-byte/dsh-plugin-quote-comment](https://github.com/hanfang5057-byte/dsh-plugin-quote-comment) | 0 | 2026-11-13 | 2026-11-13 | Ask for a comment before inserting a quoted selection in the DeepSeek Harness Web GUI, as one block. |
| 209 | [hebin-cl/dsh-health-management](https://github.com/hebin-cl/dsh-health-management) | 0 | 2026-11-13 | 2026-11-13 | Family health records and management goals for DeepSeek Harness. 12-week lean-muscle account, metabolic monitoring, progress photos and health archive. Records only; no diagnosis or medication advice. |
| 210 | [HelloQingTao/dsh-webseek](https://github.com/HelloQingTao/dsh-webseek) | 0 | 2026-11-13 | 2026-11-13 | Imports a public DeepSeek share link as a real DSH session |
| 211 | [henryzhc26/dsh-darena](https://github.com/henryzhc26/dsh-darena) | 0 | 2026-11-13 | 2026-11-13 | D宠大乐斗：DSH 的实时匹配真人对战小游戏（11 档难度、三局两胜、全球净胜榜） |
| 212 | [hexuntt/dsh-gundam-0083](https://github.com/hexuntt/dsh-gundam-0083) | 0 | 2026-11-13 | 2026-11-13 | U.C.0083 Dendrobium panoramic cockpit for DeepSeek Harness (DSH). |
| 213 | [highho/dsh-gameart](https://github.com/highho/dsh-gameart) | 0 | 2026-11-12 | 2026-11-13 | 游戏美术产线组 · DSH 插件：12 条 ComfyUI 产线（SD1.5 + SDXL 两代底模）+ 7 个工具 + 3 个专家预设 + 6 个技能 |
| 214 | [HimLeoing/dsh-progress](https://github.com/HimLeoing/dsh-progress) | 0 | 2026-11-10 | 2026-11-13 | Task progress for DeepSeek Harness. Local execution evidence, teammate progress, and optional AI observations. |
| 215 | [hingheguyun/shisu-novel-workbench](https://github.com/hingheguyun/shisu-novel-workbench) | 0 | 2026-11-13 | 2026-11-13 | DSH 中文长篇小说工作台 / Chinese long-form web novel workbench for DSH |
| 216 | [HirschNo/meow-starmap](https://github.com/HirschNo/meow-starmap) | 0 | 2026-11-13 | 2026-11-13 | 这是我给 meow-memory 做的星图面板。每条记忆是一颗发光的星，颜色分七层（灵魂、用户、项目、事实、教训、话题、规则），大小看重要性；一个项目的记忆会围着自己的星系核，两条记忆如果共享关键词就会连一条线，选中节点时线上有流星跑过去。缩远了记忆会渐隐、项目放大成一团星系光，所以上千条也不糊。全程只读，用 node:sqlite 以只读模式开库，只画不写。 |
| 217 | [hongcha-dsh/dsh-model-speedtest](https://github.com/hongcha-dsh/dsh-model-speedtest) | 0 | 2026-11-11 | 2026-11-13 | DSH plugin: serial N-round model speedtest with archive management |
| 218 | [HougeLangley/dsh-aosc-packaging](https://github.com/HougeLangley/dsh-aosc-packaging) | 0 | 2026-11-13 | 2026-11-13 | Research-backed AOSC OS packaging toolkit for DeepSeek Harness: six Host tools to inspect, lint, scaffold and plan ABBS/Autobuild4 .deb packages, plus a bundled aosc-packaging skill. |
| 219 | [HUAYUBINGAN/dsh-inject-context](https://github.com/HUAYUBINGAN/dsh-inject-context) | 0 | 2026-11-11 | 2026-11-13 | DSH plugin: re-inject tool conventions through the user channel when a gateway drops the system prompt / DSH 插件：网关吞掉 system 时经 user 通道补回工具与交付约定 |
| 220 | [iasiv5/dsh-l](https://github.com/iasiv5/dsh-l) | 0 | 2026-11-12 | 2026-11-13 | DSH 插件：开发中... |
| 221 | [iceshard999/dsh-appview](https://github.com/iceshard999/dsh-appview) | 0 | 2026-11-13 | 2026-11-13 | 将dsh右侧插件栏显示为类似手机桌面的图标dashboard |
| 222 | [imCBW/dsh-balance-corner](https://github.com/imCBW/dsh-balance-corner) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek account balance at the right end of the DSH sidebar account row. · 在侧边栏账号行最右端显示 DeepSeek 账号余额。 |
| 223 | [imnotRiv3r/dsh-download-dock](https://github.com/imnotRiv3r/dsh-download-dock) | 0 | 2026-11-12 | 2026-11-13 | 下载坞：在 DeepSeek Harness 界面右下角显示后台下载的实时进度卡片（字节、速度、剩余时间），覆盖 git clone / pip / npm / curl / aria2 / winget 等后台下载。 |
| 224 | [Inh-ui/dsh-theme-obsidian](https://github.com/Inh-ui/dsh-theme-obsidian) | 0 | 2026-11-13 | 2026-11-13 | Desktop-style client theme for DeepSeek Harness: slate vibrancy sidebar, #151517 canvas, four presets, three GPU performance tiers. |
| 225 | [irerc/dsh-qianfan-usage](https://github.com/irerc/dsh-qianfan-usage) | 0 | 2026-11-13 | 2026-11-13 | 百度千帆 Token Plan 用量挂件 + DeepSeek-V4.1-Flash-1017 正文卫生规则（DSH bundle） |
| 226 | [IsaacHuo/dsh-mindmap](https://github.com/IsaacHuo/dsh-mindmap) | 0 | 2026-11-13 | 2026-11-13 | Outline notes with a live mind-map view for DeepSeek Harness (DSH). |
| 227 | [iStarryDust/dsh-chat-edit](https://github.com/iStarryDust/dsh-chat-edit) | 0 | 2026-11-13 | 2026-11-13 | DSH 对话编辑：用户消息改完即重新生成，AI 回复的正文也能改——改完开一条新对话从改过的内容继续，原对话结构一点不动 |
| 228 | [JasperGuWP/dsh-plugin-whale-soulmate](https://github.com/JasperGuWP/dsh-plugin-whale-soulmate) | 0 | 2026-11-13 | 2026-11-13 | 面向 DeepSeek Harness 的模块化 AI 伴侣（Soulmate）：人设、LLM Wiki 记忆、隐私防火墙、透明桌面宠物；AIGC 同步后续会加。dsh-plugin |
| 229 | [Jeid12138/live-character](https://github.com/Jeid12138/live-character) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 的 Live2D 桌面角色插件：角色演出、触摸互动、文字对话与云端语音，情绪与表演由模型结合性格与经历判断。Windows x64。 |
| 230 | [jiahaozhang516-svg/caopazi](https://github.com/jiahaozhang516-svg/caopazi) | 0 | 2026-11-03 | 2026-11-13 | 草爬子：南林 AI Hub 签到 + 图书馆抢座（DSHM 插件） |
| 231 | [jiahaozhang516-svg/caopazi-compact](https://github.com/jiahaozhang516-svg/caopazi-compact) | 0 | 2026-11-13 | 2026-11-13 | 在 70% 上下文时自动压缩，并用机械锚点保住关键对话（DSHM 插件） |
| 232 | [Jimmeebingo/dsh-music-deck](https://github.com/Jimmeebingo/dsh-music-deck) | 0 | 2026-11-12 | 2026-11-13 | DSH 悬浮音乐控制插件：通过 Windows 系统媒体会话控制 QQ音乐、网易云音乐和 Spotify。 |
| 233 | [Jing494/agentic-env-presets](https://github.com/Jing494/agentic-env-presets) | 0 | 2026-11-13 | 2026-11-13 | Standard and PTC agent presets whose system prompt describes a plain agentic coding environment instead of a branded harness. Install: dsh plugin --profile web add dsh-agentic-env-presets |
| 234 | [joeseesun/dsh-game-ai-fushengji](https://github.com/joeseesun/dsh-game-ai-fushengji) | 0 | 2026-11-13 | 2026-11-13 | AI 浮生记 · 40 天生存交易小游戏的 DSH 游戏商店版 |
| 235 | [junchangxie198-crypto/dsh-balance-context-ring](https://github.com/junchangxie198-crypto/dsh-balance-context-ring) | 0 | 2026-11-13 | 2026-11-13 | A two-arc ring in the DSH sidebar footer for account balance, session context usage and per-turn cost. |
| 236 | [kapibalawang-max/sone-wx](https://github.com/kapibalawang-max/sone-wx) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness (DSH) 微信风格主题皮肤 + 品牌自定义插件 |
| 237 | [kcufow/harness_project](https://github.com/kcufow/harness_project) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：危险操作预检清单（自定义 ask/block 规则）与技能使用审计（跨会话调用统计）。两个 dsh.bundle 插件。 |
| 238 | [Keleven-11/dsh-offpeak-badge](https://github.com/Keleven-11/dsh-offpeak-badge) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: shows peak/off-peak pricing hours in the composer status row, with switchable provider presets. |
| 239 | [kelvin0304ykx-coder/dsh-task-readiness](https://github.com/kelvin0304ykx-coder/dsh-task-readiness) | 0 | 2026-11-13 | 2026-11-13 | DSH 功能体检助手：开工前检查当前会话能否执行一项任务（只读诊断、最小探测、受控处理、复检） |
| 240 | [kimaky/dsh-copy-as](https://github.com/kimaky/dsh-copy-as) | 0 | 2026-11-13 | 2026-11-13 | dsh会话内容格式化复制，编译日常文案编写、代码复制提供便利 |
| 241 | [kimo-si/dsh-skin-live](https://github.com/kimo-si/dsh-skin-live) | 0 | 2026-10-14 | 2026-11-13 | DSH Web 全局皮肤插件：图片/视频背景铺满界面，面板半透明可调 \| Global image/video background skin for DSH Web |
| 242 | [Kongbaige010/dsh-conn-check](https://github.com/Kongbaige010/dsh-conn-check) | 0 | 2026-11-13 | 2026-11-13 | Model connectivity chips for the DSH session header |
| 243 | [langyan1022/dsh-supreme-command](https://github.com/langyan1022/dsh-supreme-command) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 启动屏 + 界面 HUD 主题（流浪地球风格：工牌准入、UEG/BSC/550C 徽标、6 套配色）。一个插件同时提供启动动画与皮肤。 |
| 244 | [laoju188/dshoslink-connector](https://github.com/laoju188/dshoslink-connector) | 0 | 2026-11-09 | 2026-11-13 | DeepSeek Harness (DSH) Windows plugin for a native HarmonyOS companion app. 鸿蒙手机接续桌面会话、接收任务通知，支持局域网与 Pro 跨网。 |
| 245 | [laowang5/ai-news-feed](https://github.com/laowang5/ai-news-feed) | 0 | 2026-11-12 | 2026-11-13 | AI news sidebar plugin for DeepSeek Harness (DSH): scores RSS/Atom feeds on five axes, surfaces top items, and imports them into chat for follow-up. |
| 246 | [leafnewly/dsh-scope-plugins](https://github.com/leafnewly/dsh-scope-plugins) | 0 | 2026-11-13 | 2026-11-13 | Per-workspace and per-conversation plugin switches with inheritance, archives, and a sidebar panel. |
| 247 | [leiboss/dsh-wiring](https://github.com/leiboss/dsh-wiring) | 0 | 2026-11-12 | 2026-11-13 | Wire DeepSeek Harness (dsh) capabilities that ship but are not mounted — LSP, browser use, GitHub webhooks — plus read-only diagnostics that explain what is missing. 把 dsh 已发布但未挂载的能力接上线。 |
| 248 | [leicheng42/dsh-task-time-cost](https://github.com/leicheng42/dsh-task-time-cost) | 0 | 2026-11-13 | 2026-11-13 | Local ETA, Token budgets and reference costs for DeepSeek Harness. |
| 249 | [LeiTATng/dsh-memory-tree](https://github.com/LeiTATng/dsh-memory-tree) | 0 | 2026-11-13 | 2026-11-13 | DSH (DeepSeek Harness) 记忆树插件：隔离路由 + 主线/支线记忆树 + Merge + Checkpoint + 三套上下文压缩策略（零依赖 MCP server） |
| 250 | [lemon0-00/dsh-file-menu](https://github.com/lemon0-00/dsh-file-menu) | 0 | 2026-10-16 | 2026-11-13 | Right-click a delivered file card in DeepSeek Harness to open, copy, reveal, save-as or download it. |
| 251 | [lerwa2025-a11y/dsh-doclib](https://github.com/lerwa2025-a11y/dsh-doclib) | 0 | 2026-11-13 | 2026-11-13 | DSH 资料库插件：一个插件、一个页面——笔记库（递归文件夹读写 md/文本/图片/电子书，Obsidian 式编辑与阅读，带划线与快照） |
| 252 | [Less410/dsh-aidevops](https://github.com/Less410/dsh-aidevops) | 0 | 2026-11-13 | 2026-11-13 | Bridge an AI DevOps control plane into DeepSeek Harness: native ai_devops_* tools for platform health, agent deployments, synced cloud resources and delivery tasks. |
| 253 | [liangdabiao/dsh-bili-ai-feed](https://github.com/liangdabiao/dsh-bili-ai-feed) | 0 | 2026-11-12 | 2026-11-13 | B站AI信息源 dsh 插件：扫描B站AI爆款视频+智能聚类+深色主题HTML日报+AI情报调查报告。15:00数据更新纪律+自定义关键词批量查询。 |
| 254 | [liangdabiao/dsh-gzh-ai-feed](https://github.com/liangdabiao/dsh-gzh-ai-feed) | 0 | 2026-11-12 | 2026-11-13 | AI公众号信息源 dsh 插件：扫描AI公众号按互动总量发现爆款文章+智能聚类+深色主题HTML日报。自定义关键词分页扫描。 |
| 255 | [liangdabiao/dsh-ks-ai-feed](https://github.com/liangdabiao/dsh-ks-ai-feed) | 0 | 2026-11-12 | 2026-11-13 | dsh 插件：AI 快手日报 — 多关键词批量扫描 + 六步智能聚类 + AI 情报洞察 + 深色快手橙 HTML 日报 |
| 256 | [liangdabiao/dsh-overseas-trending](https://github.com/liangdabiao/dsh-overseas-trending) | 0 | 2026-11-12 | 2026-11-13 | 海外跨平台热文搜索 dsh 插件：X/TikTok/YouTube 三平台关键词搜索+语言优先分层+深色主题交互式HTML报告。TikTok 接口变更已适配。 |
| 257 | [lilinfangrelax/dsh-acp-agents](https://github.com/lilinfangrelax/dsh-acp-agents) | 0 | 2026-11-13 | 2026-11-13 | Connect DeepSeek Harness (dsh) to the coding agents already installed on your machine over ACP: local detection, official ACP Registry, native chat routing and subagent delegation. |
| 258 | [Lingrui98/dsh-git-workspace](https://github.com/Lingrui98/dsh-git-workspace) | 0 | 2026-11-13 | 2026-11-13 | 在 DSH 的新建工作区流程里加入 Git 仓库来源，支持任意 Git 服务器、后台克隆进度与私有仓库凭据 |
| 259 | [linlinxxy77-hue/dsh-paper-translate](https://github.com/linlinxxy77-hue/dsh-paper-translate) | 0 | 2026-11-13 | 2026-11-13 | 用于翻译pdf文献 |
| 260 | [Linnnkkk/dsh-plugin-suggest-bar](https://github.com/Linnnkkk/dsh-plugin-suggest-bar) | 0 | 2026-11-12 | 2026-11-13 | Input-box-top next-prompt suggestion bar for DSH web (async side-call after each turn) |
| 261 | [LIQiang-IT/dsh-session-delete](https://github.com/LIQiang-IT/dsh-session-delete) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: permanent Delete session action (logs, rewind snapshots, projection cache, registry, schedules, indexes) - MIT |
| 262 | [liuweiqiang2016/dsh-openai-usage](https://github.com/liuweiqiang2016/dsh-openai-usage) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：查看 OpenAI API 用量、Token 消耗与每日费用，支持按模型／项目统计及中英文界面。 |
| 263 | [liuyuxuan6666/dsh-doorbell](https://github.com/liuyuxuan6666/dsh-doorbell) | 0 | 2026-11-12 | 2026-11-13 | Outbound Feishu / DingTalk notifications for DeepSeek Harness: a turn finished, failed, needs approval, or is waiting on a question. |
| 264 | [liuyuxuan6666/dsh-tally](https://github.com/liuyuxuan6666/dsh-tally) | 0 | 2026-11-13 | 2026-11-13 | Minimal personal todo list for DeepSeek Harness: in-place editing, due dates, notes, zero runtime dependencies. |
| 265 | [LLinsanity/dsh-chat-find](https://github.com/LLinsanity/dsh-chat-find) | 0 | 2026-11-13 | 2026-11-13 | Ctrl+F find bar for the current conversation in DeepSeek Harness: message-scoped matching, CSS Highlight rendering, on-demand earlier history. |
| 266 | [Lng-ux/dsh-nebula-mind](https://github.com/Lng-ux/dsh-nebula-mind) | 0 | 2026-11-13 | 2026-11-13 | Cross-session memory for DeepSeek Harness — it remembers you across restarts and compaction, forgets like the sea instead of deleting, and draws it as a galaxy where every edge explains itself. |
| 267 | [logghT/dsh-today-eat](https://github.com/logghT/dsh-today-eat) | 0 | 2026-11-13 | 2026-11-13 | 一个完全用dsh生成的插件，解决的就是今天吃啥的问题 |
| 268 | [Lornatang/dsh-atlassian](https://github.com/Lornatang/dsh-atlassian) | 0 | 2026-11-12 | 2026-11-13 | Connect Atlassian Cloud or self-hosted Jira and Confluence to DeepSeek Harness with tools and a Jira board. |
| 269 | [Lornatang/dsh-codex-security](https://github.com/Lornatang/dsh-codex-security) | 0 | 2026-11-13 | 2026-11-13 | Agent-native security review workbench for DeepSeek Harness, modeled on OpenAI codex-security: sealed scans, stable findings, deep-scan orchestration, SARIF export. |
| 270 | [Lornatang/dsh-notion](https://github.com/Lornatang/dsh-notion) | 0 | 2026-11-13 | 2026-11-13 | A DeepSeek Harness plugin for managing Notion workspaces. |
| 271 | [loyalchiiina/dsh-sidebar-media-player](https://github.com/loyalchiiina/dsh-sidebar-media-player) | 0 | 2026-11-09 | 2026-11-13 | 侧边栏多媒体播放器 · Sidebar multimedia player (seek / spectrum / pitch / subtitles / lyrics) |
| 272 | [lq287/dsh-deepseek-balance](https://github.com/lq287/dsh-deepseek-balance) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: query your DeepSeek account balance (GET /user/balance) with cache, error classification and local key storage. |
| 273 | [Lstalu/dsh-sidebar-fit](https://github.com/Lstalu/dsh-sidebar-fit) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件：给左侧栏「全局面板」与「工作区」之间加一条可拖动分界线，塞不下的面板行逐行进「更多」，工作区不再被挤没 |
| 274 | [lucky6star9/prompt-keep](https://github.com/lucky6star9/prompt-keep) | 0 | 2026-11-06 | 2026-11-13 | prompt-keep |
| 275 | [luckyxiang6688/dsh-superagent-trace](https://github.com/luckyxiang6688/dsh-superagent-trace) | 0 | 2026-11-09 | 2026-11-13 | Trace explorer for DeepSeek Harness superagent: one task, from first event to last reply. |
| 276 | [luckyxiang6688/dsh-superagent-wechat-source](https://github.com/luckyxiang6688/dsh-superagent-wechat-source) | 0 | 2026-11-09 | 2026-11-13 | 把个人微信私聊接进 dsh-superagent：发消息即建工单，结果回帖到同一对话 |
| 277 | [lukysoda/dsh-volc-coding-plan-usage](https://github.com/lukysoda/dsh-volc-coding-plan-usage) | 0 | 2026-11-13 | 2026-11-13 | 在 DeepSeek Harness 会话标题栏实时显示火山方舟 Coding Plan 的 5 小时 / 本周 / 本月额度与重置倒计时｜Live Volcengine Ark Coding Plan quota in the DSH session header |
| 278 | [Lumid0uce/dsh-motion](https://github.com/Lumid0uce/dsh-motion) | 0 | 2026-11-13 | 2026-11-13 | Restrained panel/page transition animations for DeepSeek Harness (DSH) - CSS-only plugin. |
| 279 | [Lylgj/dsh-remote-suite](https://github.com/Lylgj/dsh-remote-suite) | 0 | 2026-11-12 | 2026-11-13 | DeepSeek Harness 插件：本机、WSL、SSH、Docker 与远程守护进程，统一到一个工作区列表和一个 remote 工具。 |
| 280 | [Lylgj/dsh-stm32-toolkit](https://github.com/Lylgj/dsh-stm32-toolkit) | 0 | 2026-11-11 | 2026-11-13 | DeepSeek Harness 的 STM32 开发插件：编译、下载、在线调试、断点、寄存器、内存、反汇编；支持 Keil MDK 与 arm-none-eabi + OpenOCD 双后端。 |
| 281 | [Lylgj/dsh-terminal](https://github.com/Lylgj/dsh-terminal) | 0 | 2026-09-16 | 2026-11-13 | DeepSeek Harness 右侧栏常驻终端插件：每个工作区一个常驻 PTY，自动识别 cmd / PowerShell / WSL / SSH，明暗主题，无 CDN。第三方插件，非官方出品。 |
| 282 | [lzlrt/dsh-desktop-embed](https://github.com/lzlrt/dsh-desktop-embed) | 0 | 2026-11-13 | 2026-11-13 | Born for dsh-desktop-link: run the desktop DSH UI inside DSHA's WebView via a loopback reverse proxy + iframe. |
| 283 | [mafawu/HandYourSession](https://github.com/mafawu/HandYourSession) | 0 | 2026-11-13 | 2026-11-13 | 会话交接插件：协议内置，无需额外 skill。写交接、接手前先 check、回合结束后按登记开新会话。Self-contained session handoff for coding agents. |
| 284 | [mantonlove/dsh-margin-notes](https://github.com/mantonlove/dsh-margin-notes) | 0 | 2026-11-13 | 2026-11-13 | DSH 页边批注插件：在文档与助手回复里划词写批注，攒成一批写入输入框。Margin annotations for DeepSeek Harness (DSH): select-to-note on documents and assistant replies, sent as one numbered batch. |
| 285 | [MaRi23333/dsh-second-look](https://github.com/MaRi23333/dsh-second-look) | 0 | 2026-11-13 | 2026-11-13 | 过目 · Second Look — DeepSeek Harness 的独立 AI 审核助手，支持日常与加强审查、审批记录回看。 |
| 286 | [MaRi23333/dsh-unbrand](https://github.com/MaRi23333/dsh-unbrand) | 0 | 2026-11-13 | 2026-11-13 | 隐标 · Unbrand：为选中的模型隐藏 DeepSeek Harness 的默认启动词，有助于接入第三方模型 |
| 287 | [mcf20/dsh-literature](https://github.com/mcf20/dsh-literature) | 0 | 2026-11-13 | 2026-11-13 | 文献检索 + 全文获取插件 for DeepSeek Harness：五源检索、9 个全文 oracle、5 级下载通道、三层去重、PDF 转 Markdown、本地全文库。Literature search that actually reaches full text. |
| 288 | [mdwsk88/dsh-search-mix](https://github.com/mdwsk88/dsh-search-mix) | 0 | 2026-11-13 | 2026-11-13 | Mixed web search provider for DeepSeek Harness: ask two or more search APIs per search, interleave and dedupe their pages. |
| 289 | [Mechman/dsh-pushover-notify](https://github.com/Mechman/dsh-pushover-notify) | 0 | 2026-11-13 | 2026-11-13 | Pushover push notifications for DeepSeek Harness: a ping when the agent asks a question, waits for an approval, or finishes a turn. |
| 290 | [MeshTok/meshmoe](https://github.com/MeshTok/meshmoe) | 0 | 2026-11-13 | 2026-11-13 | Honor-driven distributed AI compute network. Free local AI for everyone; idle machines join the mesh as specialists and burn Joules. Mesh + Mixture-of-Experts, at network scale. |
| 291 | [mifeixiong/dsh-cad-workbench](https://github.com/mifeixiong/dsh-cad-workbench) | 0 | 2026-11-13 | 2026-11-13 | SolidWorks 机械 CAD 工作台：Feature Graph 建模、实测校核、视图自检、工程图与 DXF/STEP/STL 审查（DeepSeek Harness 插件） |
| 292 | [mikheys/dsh-skill-picker](https://github.com/mikheys/dsh-skill-picker) | 0 | 2026-11-13 | 2026-11-13 | Skill manager for DeepSeek Harness: per-chat and global skill toggles in the right panel, Russian descriptions, batched apply and /name fallback for hidden skills. |
| 293 | [MistyRn/dsh-experience](https://github.com/MistyRn/dsh-experience) | 0 | 2026-11-13 | 2026-11-13 | 智能体自学习经验库：为 DeepSeek Harness 沉淀可复用经验，自动注入上下文，支持分类/单条开关与侧边栏面板。 |
| 294 | [mjm123456/dsh-plugin-ai-daily-push](https://github.com/mjm123456/dsh-plugin-ai-daily-push) | 0 | 2026-11-13 | 2026-11-13 | dsh-plugin-ai-daily-push |
| 295 | [MMDAI666/dsh-token-attribution](https://github.com/MMDAI666/dsh-token-attribution) | 0 | 2026-11-13 | 2026-11-13 | dsh-token-attribution |
| 296 | [Moosphan/dsh-deep-search](https://github.com/Moosphan/dsh-deep-search) | 0 | 2026-11-13 | 2026-11-13 | Global session search for DeepSeek Harness: local index, keyword/regex, composable filters, streaming results, exact jump. |
| 297 | [moshenspirit/dsh-superagent-windows-setup](https://github.com/moshenspirit/dsh-superagent-windows-setup) | 0 | 2026-11-13 | 2026-11-13 | 在 Windows 上用 WSL2 装好 DeepSeek Harness 的 superagent —— 九阶段路线图 + 三个脚本，装完就能让 agent 自己开 PR。 |
| 298 | [mystic7c/dsh-superagent-panel](https://github.com/mystic7c/dsh-superagent-panel) | 0 | 2026-11-06 | 2026-11-13 | DSH（DeepSeek Harness）的「超级智能体」管理面板：群消息 → 评估接单 → worker → 闸门 → MR → 合并 → UAT → 验收。 |
| 299 | [naofu233/dsh-panel-nav-fold](https://github.com/naofu233/dsh-panel-nav-fold) | 0 | 2026-11-13 | 2026-11-13 | Adds a collapsible Panel Navigation header to the DeepSeek Harness sidebar. |
| 300 | [navasfj/dsh-voz-es](https://github.com/navasfj/dsh-voz-es) | 0 | 2026-11-13 | 2026-11-13 | Local Spanish voice for DeepSeek Harness: Whisper dictation and Piper text-to-speech, 100% on-device. |
| 301 | [NekoErwin/dsh-auto-review-desktop](https://github.com/NekoErwin/dsh-auto-review-desktop) | 0 | 2026-11-11 | 2026-11-13 | Model authorization review for DSH with workspace/full-access modes, child-agent inheritance and custom model settings |
| 302 | [nia-teams/agent-bridge](https://github.com/nia-teams/agent-bridge) | 0 | 2026-11-13 | 2026-11-13 | Connect external AI coding Agents (Claude Code, Codex, WorkBuddy, Doubao, DSH, Antigravity) to Nia Teams as two-way group chat participants with signed TaskBar approvals. |
| 303 | [Niesc-F/dsh-fastfetch](https://github.com/Niesc-F/dsh-fastfetch) | 0 | 2026-11-12 | 2026-11-13 | Fastfetch-style system info and DSH runtime panel for DeepSeek Harness |
| 304 | [ninetyhe-90/dsh-a2a-hitl](https://github.com/ninetyhe-90/dsh-a2a-hitl) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: A2A SSE calls with whitelisted agents and trusted human-in-the-loop relay |
| 305 | [nonenameless/dsh-hybrid-memory](https://github.com/nonenameless/dsh-hybrid-memory) | 0 | 2026-11-13 | 2026-11-13 | deepseek harness 的记忆和人物属性 |
| 306 | [ohmykreee/dsh-remote-control](https://github.com/ohmykreee/dsh-remote-control) | 0 | 2026-11-11 | 2026-11-13 | A touch-first LAN remote control for DeepSeek Harness Desktop with clock, weather, notifications, sessions, balance, and media control; Windows-first with macOS and Linux adapters. |
| 307 | [openfcp/dsh-financial-skills](https://github.com/openfcp/dsh-financial-skills) | 0 | 2026-11-13 | 2026-11-13 | 金融业技能 · DeepSeek Harness 插件：左侧栏入口 + 金融行业skills精选（9 类 17 个技能，可搜索、预览、一键安装） |
| 308 | [OropezaRaul/agy-dsh-plugin](https://github.com/OropezaRaul/agy-dsh-plugin) | 0 | 2026-11-13 | 2026-11-13 | Google Antigravity CLI (agy acp) integration plugin for DeepSeek Harness (DSH) |
| 309 | [oxmumu3/dsh-superagent](https://github.com/oxmumu3/dsh-superagent) | 0 | 2026-11-13 | 2026-11-13 | Independent native task coordination across DeepSeek Harness sessions. |
| 310 | [pandaman0759/dsh-schedule-send](https://github.com/pandaman0759/dsh-schedule-send) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: schedule a message to be sent in this conversation later (after the current turn / every N minutes / at a fixed time) |
| 311 | [pandaman0759/dsh-tts-voice](https://github.com/pandaman0759/dsh-tts-voice) | 0 | 2026-11-12 | 2026-11-13 | DeepSeek Harness plugin: end-of-turn voice summary via Breeze TTS, played from memory (nothing written to disk), plus daily credit check-in. |
| 312 | [pandaman0759/dsh-voice-input](https://github.com/pandaman0759/dsh-voice-input) | 0 | 2026-11-10 | 2026-11-13 | DSH composer voice input: Doubao streaming ASR, one API key, text straight into your draft. |
| 313 | [pridurok-goxa/volna-tweaks](https://github.com/pridurok-goxa/volna-tweaks) | 0 | 2026-10-08 | 2026-11-13 | Волна: твики DeepSeek Harness — мобильный UI, светофор, очередь, скачивание файлов и хост-твики |
| 314 | [pscly/dsh-sub2api](https://github.com/pscly/dsh-sub2api) | 0 | 2026-11-13 | 2026-11-13 | Sub2API (sub.pscly.cc) provider for DeepSeek Harness: zero-friction signup, auto-provisioned API key, upstream model sync, balance and recharge |
| 315 | [Psychic-Z/dsh-memory-assistant](https://github.com/Psychic-Z/dsh-memory-assistant) | 0 | 2026-11-13 | 2026-11-13 | 记忆助理：长期记忆使用助理。解决记忆越多调用就越费TOKEN的问题，改善AI处理任务时因为上下文压缩造成的记忆缺失。附加好处：节省TOKEN用量 |
| 316 | [qifenglun1/dsh-plugin-rss](https://github.com/qifenglun1/dsh-plugin-rss) | 0 | 2026-11-13 | 2026-11-13 | Folo-inspired RSS and Atom reader plugin for DeepSeek Harness: subscriptions, categories, tags, full text, search, OPML, feed discovery, and DeepSeek AI summaries, translation, classification, and article Q&amp;A. |
| 317 | [qihangzhang-272/dsh-asl](https://github.com/qihangzhang-272/dsh-asl) | 0 | 2026-11-13 | 2026-11-13 | ASL Mode and Skill workspace for DeepSeek Harness: editable Mermaid canvas, Markdown files and native DeepSeek editing. |
| 318 | [qiyuelianfeng/dsh-silverwolf-theme](https://github.com/qiyuelianfeng/dsh-silverwolf-theme) | 0 | 2026-11-13 | 2026-11-13 | 银狼LV.999（Silver Wolf LV.999）主题插件：DSH Web GUI 银白赛博渐变毛玻璃 UI，含人格注入 / 背景图 / 长期记忆 / 世界书管理。改编自昔涟（Cyrene）主题模组 dsh-cyrene-theme。 |
| 319 | [qpwlkq/dsh-token-heatmap](https://github.com/qpwlkq/dsh-token-heatmap) | 0 | 2026-11-13 | 2026-11-13 | GitHub-style token usage heatmap for DeepSeek Harness, exported as an SVG for your profile README. |
| 320 | [realRoc/dsh-pet-workout](https://github.com/realRoc/dsh-pet-workout) | 0 | 2026-11-13 | 2026-11-13 | dsh-pet 配套插件：让大肥鱼带你锻炼（DeepSeek Harness plugin） |
| 321 | [redkiller79/dsh-copyback](https://github.com/redkiller79/dsh-copyback) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin: local clipboard history — recall, search, pin and re-copy what you copied earlier. Windows/macOS/Linux. |
| 322 | [RegeneratusLabs/dsh-minicpm-cook](https://github.com/RegeneratusLabs/dsh-minicpm-cook) | 0 | 2026-11-12 | 2026-11-13 | A cookbook for OpenBMB MiniCPM models: choose, fine-tune, serve and publish, with licences and version floors attached. |
| 323 | [RH327008/dsh-yuquan](https://github.com/RH327008/dsh-yuquan) | 0 | 2026-11-13 | 2026-11-13 | ai大肥鱼鱼友圈插件 |
| 324 | [roninni/dsh-central-editor](https://github.com/roninni/dsh-central-editor) | 0 | 2026-11-13 | 2026-11-13 | DSH 工作台插件「资源管理器」：在对话旁浏览、修改并逐块审阅工作区文件（Monaco 内核） |
| 325 | [s565729059/dsh-deepseek-code-supervisor](https://github.com/s565729059/dsh-deepseek-code-supervisor) | 0 | 2026-11-13 | 2026-11-13 | 「反思模式」硬性质量模式：会话开启后强制二轮自检与终检，代码改动门禁 + 验收注入 + 独立终检，每轮收尾给总结与下一步。 |
| 326 | [sandresog98/and_agent_pet](https://github.com/sandresog98/and_agent_pet) | 0 | 2026-11-13 | 2026-11-13 | Unofficial Windows companion overlay for DeepSeek Harness: Gengar-ready animated pet, activity bubble, and alert chimes. |
| 327 | [Sect0R/dsh-job-log](https://github.com/Sect0R/dsh-job-log) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness (DSH) plugin: live background-job terminal output with clickable job ids. |
| 328 | [seonzzy/dsh-live-terminal](https://github.com/seonzzy/dsh-live-terminal) | 0 | 2026-11-13 | 2026-11-13 | A live terminal for DeepSeek Harness: the agent drives a real PTY through tools, and you watch and type into the same session from a right-sidebar tab. |
| 329 | [shamilinvestor/dsh-news-digest](https://github.com/shamilinvestor/dsh-news-digest) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin — see https://github.com/shamilinvestor/dsh-plugin-studio |
| 330 | [shamilinvestor/dsh-plugin-studio](https://github.com/shamilinvestor/dsh-plugin-studio) | 0 | 2026-11-13 | 2026-11-13 | Beautiful, useful, open-source plugins for DeepSeek Harness (DSH) — EN/RU/zh. Workshop of research, design system and shipped plugins. |
| 331 | [shamilinvestor/dsh-russian-locale](https://github.com/shamilinvestor/dsh-russian-locale) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness plugin — see https://github.com/shamilinvestor/dsh-plugin-studio |
| 332 | [shamilinvestor/dsh-share-card](https://github.com/shamilinvestor/dsh-share-card) | 0 | 2026-11-13 | 2026-11-13 | Turn any DeepSeek Harness answer into a beautiful share card (PNG) for X, Telegram, Threads and Instagram — EN/RU/zh, rendered locally. |
| 333 | [ShawnZhangGy/dsh-whale-reminder](https://github.com/ShawnZhangGy/dsh-whale-reminder) | 0 | 2026-11-11 | 2026-11-13 | DSH 会话提醒插件：Windows 系统通知 + 声音 + 窗口内浮层 + 任务栏/托盘闪烁；点击通知可直达会话（提到最前并聚焦输入框 / 只提窗 / 只提醒三档），DSH 在前台时不打扰，中英双语，已归档与子代理不计入未读 |
| 334 | [shengmk/dsh-webwhale-bili](https://github.com/shengmk/dsh-webwhale-bili) | 0 | 2026-11-13 | 2026-11-13 | B站账号自运营工作台（DSH 嵌入页） |
| 335 | [shiva871201126-oss/qq-service-desk](https://github.com/shiva871201126-oss/qq-service-desk) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：在客户端内顺序托管 SnowLuma 与 qqbridge，内置真实控制台、终端输出与自动认证。 |
| 336 | [silverze/dsh-work-plugin](https://github.com/silverze/dsh-work-plugin) | 0 | 2026-11-13 | 2026-11-13 | 基于DSH的工作插件 |
| 337 | [simveit/dsh-whalepod](https://github.com/simveit/dsh-whalepod) | 0 | 2026-11-13 | 2026-11-13 | Whalepod: Coordinator chats for the DeepSeek Harness that hand work to Executor Sessions |
| 338 | [Skeltx/dsh-moduleapi](https://github.com/Skeltx/dsh-moduleapi) | 0 | 2026-11-08 | 2026-11-13 | Module API provider (moduleapi.pro) for DeepSeek Harness - one key, all models. Activates the built-in llm-pi-ai adapter with a moduleapi route. |
| 339 | [skyrocks/dsh-token-stats](https://github.com/skyrocks/dsh-token-stats) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 插件：在设置里按日 / 周 / 月统计所有会话的 token 消耗（输入、缓存、输出、模型分布、会话排行） |
| 340 | [smurfiez/morphe-patch-creator](https://github.com/smurfiez/morphe-patch-creator) | 0 | 2026-11-13 | 2026-11-13 | Authorized Morphe Android APK patch workflow as native DSH skills: recon, decompile, target hunting, patch writing, and local validation |
| 341 | [songliu1992-glitch/dsh-fenggu-time](https://github.com/songliu1992-glitch/dsh-fenggu-time) | 0 | 2026-11-13 | 2026-11-13 | Titlebar peak/off-peak badge for DeepSeek Harness, with a refreshable China statutory-holiday table. |
| 342 | [SSHOOTING/dsh-polish](https://github.com/SSHOOTING/dsh-polish) | 0 | 2026-11-13 | 2026-11-13 | DSH composer plugin: polish long drafts into concise, structured requests before sending. |
| 343 | [SSRYLJRSS/dsh-token2biq](https://github.com/SSRYLJRSS/dsh-token2biq) | 0 | 2026-11-13 | 2026-11-13 | Token 2b IQ — a multi-agent orchestration controller for DeepSeek Harness (DSH): tiers, receipts, token ledger and run panel. Trades measurable token spend for first-pass correctness, on top of the official Agent Teams. |
| 344 | [stone-yu/dsh-sync](https://github.com/stone-yu/dsh-sync) | 0 | 2026-11-13 | 2026-11-13 | 备份与同步 DSH 的配置、模型、MCP、插件清单、技能、记忆和自选目录到 WebDAV，每个内容项可单独设置方向；后续支持 GitHub 同步。 |
| 345 | [Stopning/dsh-free-model](https://github.com/Stopning/dsh-free-model) | 0 | 2026-10-31 | 2026-11-13 | DSH 插件（DeepSeek Harness / cordis bundle）· 模型接入：把 CodeArts、CodeBuddy/WorkBuddy、Qoder、TRAE、Cline、LobsterAI、Loomy、Raccoon、MiniMax、ZCode、Gemini 等 13 个账号渠道接进 dsh，保留数据看板 / 运行日志 / 本地网关；上游免费车道、EAC 与聚合渠道已剔除。 |
| 346 | [Strenweiler/dsh-deepseek-web-panel](https://github.com/Strenweiler/dsh-deepseek-web-panel) | 0 | 2026-11-13 | 2026-11-13 | DSH 桌面端插件：在侧边栏一键打开 DeepSeek 网页版，常驻加速、秒开并自动恢复登录。 |
| 347 | [Strepsiades2/dsh-remote-ssh](https://github.com/Strepsiades2/dsh-remote-ssh) | 0 | 2026-11-06 | 2026-11-13 | SSH remote hosts for DeepSeek Harness: pick a host from ~/.ssh/config and open its DSH web UI in the browser. |
| 348 | [suifei/dsh-pmo-button](https://github.com/suifei/dsh-pmo-button) | 0 | 2026-11-13 | 2026-11-13 | PMO Review Loop for DeepSeek Harness (DSH plugin) — mount a senior project director for AI sessions: a persistent reviewer subagent with its own model/context, dual-line relay and STATUS auto-loop. 中文：为 AI 会话挂载一位“资深项目总监”。 |
| 349 | [sumingwong/dsh-provider-quota-rings](https://github.com/sumingwong/dsh-provider-quota-rings) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness 侧栏底部的订阅额度圆环（Codex / Claude / OpenCode Go / GLM），默认不读取账号。 |
| 350 | [Sunnnnch/dsh-constellation](https://github.com/Sunnnnch/dsh-constellation) | 0 | 2026-11-13 | 2026-11-13 | Constellation — SSH/VPS fleet management plugin for DeepSeek Harness: inventory, exec, SFTP, tunnels, live dashboard, three-carrier probes. |
| 351 | [SunSets44Times/dsh-comfyui-gallery](https://github.com/SunSets44Times/dsh-comfyui-gallery) | 0 | 2026-11-12 | 2026-11-13 | ComfyUI gallery plugin for DeepSeek Harness: browse every generated image with its prompt, negative prompt, sampler parameters, models and LoRAs. |
| 352 | [super0plant/dsh-plugin-game-time](https://github.com/super0plant/dsh-plugin-game-time) | 0 | 2026-11-13 | 2026-11-13 | Per-game playtime tracker for DeepSeek Harness (DSH) - local only, no telemetry. |
| 353 | [SwingRainbow/dsh-task-pulse](https://github.com/SwingRainbow/dsh-task-pulse) | 0 | 2026-11-13 | 2026-11-13 | Read-only DSH progress tab for Markdown task records in docs/tasks. |
| 354 | [swluo777/dsh-fish-dandan](https://github.com/swluo777/dsh-fish-dandan) | 0 | 2026-11-13 | 2026-11-13 | DSH 持久人格与记忆插件：让所有会话保持同一个角色，带三层记忆、心情状态和可选的抖音日常。A DeepSeek Harness plugin for persistent persona, layered memory, mood and optional Douyin automation. |
| 355 | [t1897/dsh-video-narrator](https://github.com/t1897/dsh-video-narrator) | 0 | 2026-11-13 | 2026-11-13 | DSH skill: turn video, articles, PDFs, or text into narrated videos with images, TTS, and ordered API fallback. |
| 356 | [tang-123-1/dsh-web-scout](https://github.com/tang-123-1/dsh-web-scout) | 0 | 2026-11-13 | 2026-11-13 | 给 DeepSeek Harness 的联网检索插件：46 个平台、热搜榜、证据包、MCP 服务。 |
| 357 | [TermerOfMe/dsh-study-reader](https://github.com/TermerOfMe/dsh-study-reader) | 0 | 2026-11-12 | 2026-11-13 | A DeepSeek Harness (DSH) plugin for reading PDFs, Word documents, and slides with AI translation, Q&amp;A, and annotations. |
| 358 | [Tetrachlorosilane/dsh-vsshell](https://github.com/Tetrachlorosilane/dsh-vsshell) | 0 | 2026-11-13 | 2026-11-13 | Windows DeepSeek Harness plugin: configurable bash executor (WSL / Git for Windows / Cygwin / custom) replacing pwsh, with a Web settings panel. |
| 359 | [Tigercode20/deepseek-harness-plugin-arabic-locale](https://github.com/Tigercode20/deepseek-harness-plugin-arabic-locale) | 0 | 2026-11-13 | 2026-11-13 | Arabic (right-to-left) language pack for DeepSeek Harness, plus the RTL rendering patch it needs |
| 360 | [Timur-Ziyangareev/find-in-chat](https://github.com/Timur-Ziyangareev/find-in-chat) | 0 | 2026-11-13 | 2026-11-13 | Find in Chat (DeepSeek Harness plugin) - search the open conversation and jump through matches newest first. |
| 361 | [tindoreal/dsh-auto-export-intel](https://github.com/tindoreal/dsh-auto-export-intel) | 0 | 2026-11-13 | 2026-11-13 | 汽车出口情报台：全球海关政策 / 国内出口政策 / 出口数据 / 海外工厂 / 进口与销量 / 新闻预警 / 新车发布 / 内容分发与运营数据的 DSH Web 插件 |
| 362 | [tingyulingfeng/dsh-soul-radar](https://github.com/tingyulingfeng/dsh-soul-radar) | 0 | 2026-11-13 | 2026-11-13 | 为 DSH 提供判断依据，把阅读反应变成可数的数据。灵魂雷达 · Soul Radar |
| 363 | [tongtian027/dsh-oral-canvas](https://github.com/tongtian027/dsh-oral-canvas) | 0 | 2026-11-13 | 2026-11-13 | 口播短视频无限画布（DSH 插件）：口播稿 → 数字人音频 → SRT 字幕 → 分镜时间戳 → 数字人视频/代码动效/软件实录 → 按时间戳合成成片 |
| 364 | [Ts-sound/dsh-skill-injector](https://github.com/Ts-sound/dsh-skill-injector) | 0 | 2026-11-13 | 2026-11-13 | Auto-inject user-chosen skills (e.g. caveman, ponytail) into DeepSeek Harness sessions.every prompt or once at session start. |
| 365 | [usi112/dsh-go-adb-link-plus](https://github.com/usi112/dsh-go-adb-link-plus) | 0 | 2026-11-13 | 2026-11-13 | dsh-go ADB 自动连接插件（二改自 edgy7493/dsh-go-adb-link）：自动找 adbd 端口 · adb tcpip 固定 3455 · Android 11+ 无线调试 TLS 配对 \| Modified fork of edgy7493/dsh-go-adb-link |
| 366 | [usi112/dsh-go-prompt-polish](https://github.com/usi112/dsh-go-prompt-polish) | 0 | 2026-11-13 | 2026-11-13 | dsh-go 手机 App 的提示词抛光胶囊：草稿写完别急着发，点一下把一句话变成清晰的提示词；确认页先预览，复制还是追加随你选。预设、长度三档与保留开关写在本地 .config.json。不发送消息，不额外联网。 |
| 367 | [V1Y0h/dsh-animebar](https://github.com/V1Y0h/dsh-animebar) | 0 | 2026-11-12 | 2026-11-13 | Ask DeepSeek Harness what anime airs today. |
| 368 | [videndi/dsh-desktop-view](https://github.com/videndi/dsh-desktop-view) | 0 | 2026-11-12 | 2026-11-13 | Desktop observation and input tools for the DeepSeek Harness agent (Windows): DPI-aware screen capture and pointer position, plus move, click, drag, scroll, type, keys and window control. |
| 369 | [ViolaTan55/dsh-whale-voyage](https://github.com/ViolaTan55/dsh-whale-voyage) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件：养在 DSH 港口里的小鲸鱼，会自己出门逛互联网，回港时寄给你一张明信片，带回一样它觉得你会喜欢的东西。A free-range whale for DeepSeek Harness — it wanders the real internet on its own and mails you a postcard with one thing worth seeing. |
| 370 | [Vultwo/dsh-jev-auto-approve](https://github.com/Vultwo/dsh-jev-auto-approve) | 0 | 2026-11-13 | 2026-11-13 | Jev-backed auto-approval for DeepSeek Harness with an English settings page for the key and usage stats. |
| 371 | [WanggIyanChenn/dsh-mihomo](https://github.com/WanggIyanChenn/dsh-mihomo) | 0 | 2026-11-13 | 2026-11-13 | 在 DSH 里托管 mihomo 内核并把出站流量导到本地代理 |
| 372 | [wangxiaocuo/dsh-composer-prefill](https://github.com/wangxiaocuo/dsh-composer-prefill) | 0 | 2026-11-12 | 2026-11-13 | Codex-style composer predictions for DeepSeek Harness: suggest the next user message after an assistant turn and fill the composer on Tab. |
| 373 | [windy-0-0/opencode-free-lane-tls-gate](https://github.com/windy-0-0/opencode-free-lane-tls-gate) | 0 | 2026-11-13 | 2026-11-13 | Measured root cause of opencode.ai free-tier 429 (TLS ClientHello/JA3 gate) + optional fallback patch. Read the terms-of-use caveat in README before use. |
| 374 | [wjinxuan/dsh-perch](https://github.com/wjinxuan/dsh-perch) | 0 | 2026-11-13 | 2026-11-13 | A Dynamic-Island-style status panel for DeepSeek Harness that lives in the macOS notch. |
| 375 | [Worril-224/dsh-mimir-tutor](https://github.com/Worril-224/dsh-mimir-tutor) | 0 | 2026-11-13 | 2026-11-13 | Mimir Tutor for DeepSeek Harness 0.2.2 — an unofficial community port of tommyhedgerow's Obsidian Socratic tutor preset. 7 agent presets, 9 method skills, 6 specialist subagents. |
| 376 | [wsk4973/dsh-session-delete](https://github.com/wsk4973/dsh-session-delete) | 0 | 2026-11-13 | 2026-11-13 | 删除会话 / 会话删除插件 for DeepSeek Harness：在会话行「...」菜单里一键彻底删除对话，删掉侧栏那一行并清理磁盘日志（官方归档只隐藏不删盘，这个是真删）。delete conversation &amp; session cleanup for DSH. |
| 377 | [wufeng0105/dsh-plugin-kit](https://github.com/wufeng0105/dsh-plugin-kit) | 0 | 2026-11-09 | 2026-11-13 | DSH plugin development: contract lookup order (inspect → dsh-doc → real plugin source) plus executable completion checks — preflight for the four failure families, recheck for touchpoints after a DSH upgrade. |
| 378 | [WuRen-bridge/dsh-balance-battery](https://github.com/WuRen-bridge/dsh-balance-battery) | 0 | 2026-11-13 | 2026-11-13 | A battery-shaped balance gauge for the DeepSeek Harness Web GUI composer. Shows DeepSeek account / DeepSeek API / Kimi available balance at a glance — ¥1 per cell, ¥10 full scale. DSH-specific plugin, MIT licensed. |
| 379 | [wxfiveopps1102/dsh-tool-codex-computer-use](https://github.com/wxfiveopps1102/dsh-tool-codex-computer-use) | 0 | 2026-11-12 | 2026-11-13 | Delegate one-shot desktop and text tasks from DSH to your local Codex CLI, with model, reasoning and service-tier controls. |
| 380 | [wychmod/dsh-mini-superagent](https://github.com/wychmod/dsh-mini-superagent) | 0 | 2026-11-05 | 2026-11-13 | 主会话把任务派给独立的后台子会话执行，子会话完成后把报告投递回主会话；纯 ESM、零运行时依赖的 DSH 插件。 |
| 381 | [xbbkok/dsh-yuanbao-search](https://github.com/xbbkok/dsh-yuanbao-search) | 0 | 2026-11-13 | 2026-11-13 | Tencent Yuanbao Search (so.qq.com) as a main panel inside the DeepSeek Harness Web UI. 中文 / English. |
| 382 | [xiaobaga281/dsh-effort-mosaic](https://github.com/xiaobaga281/dsh-effort-mosaic) | 0 | 2026-11-12 | 2026-11-13 | 把 DSH 模型菜单里的推理等级档位换成一条像素马赛克粒子轨道：右侧是静止的密实墙，越往左越散开 / A pixel-mosaic reasoning-effort track for DeepSeek Harness |
| 383 | [xiaohuangbo/dsh-conversation-lock](https://github.com/xiaohuangbo/dsh-conversation-lock) | 0 | 2026-11-12 | 2026-11-13 | 人不能......至少不应该。允许模型按你的授权，对当前会话施加本地交互限制的 DeepSeek Harness 插件。 |
| 384 | [xiaoyuqinA/dsh-vercel-agent-browser](https://github.com/xiaoyuqinA/dsh-vercel-agent-browser) | 0 | 2026-11-13 | 2026-11-13 | Connect Vercel agent-browser to DeepSeek Harness via MCP |
| 385 | [xiehao-001/notifications](https://github.com/xiehao-001/notifications) | 0 | 2026-11-13 | 2026-11-13 | Source registry, dedupe, update, retract and click dispatch for business-plugin notifications. |
| 386 | [xiehao-001/request-concurrency](https://github.com/xiehao-001/request-concurrency) | 0 | 2026-11-13 | 2026-11-13 | Global FIFO queue capping concurrent model requests across sessions, subagents and workflows. |
| 387 | [xiehao-001/skill-control-native](https://github.com/xiehao-001/skill-control-native) | 0 | 2026-11-13 | 2026-11-13 | Wraps the filesystem skill provider with credential-, account- and workspace-based availability policy. |
| 388 | [xiehao-001/skill-manager-native](https://github.com/xiehao-001/skill-manager-native) | 0 | 2026-11-13 | 2026-11-13 | Create, import, duplicate and recoverably delete personal skills from settings. |
| 389 | [XinAnzzZ/dsh-session-manager](https://github.com/XinAnzzZ/dsh-session-manager) | 0 | 2026-10-26 | 2026-11-13 | Nested session folders for the DeepSeek Harness sidebar: folders, drag sorting, clickable activity counts, and session tags. |
| 390 | [XLNC-L/dsh-connect-madao](https://github.com/XLNC-L/dsh-connect-madao) | 0 | 2026-11-13 | 2026-11-13 | 把华为云码道（CodeArts Agent）的模型接入 DeepSeek Harness：11 个模型、图片、工具调用、思考强度与每日签到 |
| 391 | [xudongh123/dsh-idea-bridge](https://github.com/xudongh123/dsh-idea-bridge) | 0 | 2026-11-13 | 2026-11-13 | Two-way bridge between DeepSeek Harness (DSH) and IntelliJ IDEA: open files in IDEA from DSH, and send code selections from IDEA into a DSH session as references. |
| 392 | [xudongh123/dsh-terminal-run](https://github.com/xudongh123/dsh-terminal-run) | 0 | 2026-11-13 | 2026-11-13 | Run shell code blocks from the DSH conversation in the right sidebar terminal |
| 393 | [YanLu9/dsh-pdf-academic-translate](https://github.com/YanLu9/dsh-pdf-academic-translate) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness ??:PDF ???,???,????(???????????) |
| 394 | [yehuoshun/dsh-agent-man](https://github.com/yehuoshun/dsh-agent-man) | 0 | 2026-11-13 | 2026-11-13 | DSH ??????:????????????? |
| 395 | [yhan-sun/dsh-agy](https://github.com/yhan-sun/dsh-agy) | 0 | 2026-11-10 | 2026-11-13 | Google Antigravity (agy CLI) models for DeepSeek Harness: streaming, thinking, native tool cards, multi-account pool with quota and proxy controls, and an optional experimental direct transport. |
| 396 | [yingyu4451/dsh-whale-leap](https://github.com/yingyu4451/dsh-whale-leap) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: swimming whale background, running-status fish mark, and matching appearance settings. |
| 397 | [YixuanLi911/dsh-mail-widget](https://github.com/YixuanLi911/dsh-mail-widget) | 0 | 2026-11-10 | 2026-11-13 | A small plugin that can helps your email and reminds you if you have any unread messages. |
| 398 | [YONAN1269/dsh-update-hub](https://github.com/YONAN1269/dsh-update-hub) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件批量更新：侧栏角标、走 pnpm 安装侧绕过 bundle-in-use、启动/定时检测、空闲自动更新 |
| 399 | [YoungerHy/dsh-prompt-detailer](https://github.com/YoungerHy/dsh-prompt-detailer) | 0 | 2026-11-13 | 2026-11-13 | 输入一句粗需求，先由任意 OpenAI 兼容模型细化成可执行提示词，再交给 DSH 主模型执行。 |
| 400 | [yuanstarstar/dsh-scribble](https://github.com/yuanstarstar/dsh-scribble) | 0 | 2026-11-13 | 2026-11-13 | 手稿本：让 DSH 用自己画的字和简笔画出图，并从你画过的画里学习你的手写风格。纯 JS，无原生依赖。 |
| 401 | [yuanxing109/dsh-prompt-forge](https://github.com/yuanxing109/dsh-prompt-forge) | 0 | 2026-11-13 | 2026-11-13 | Prompt Forge - a prompt-engineering button for the DeepSeek Harness (dsh) web GUI |
| 402 | [Yven/dsh-run-monitor](https://github.com/Yven/dsh-run-monitor) | 0 | 2026-11-13 | 2026-11-13 | 简单的dsh任务监控插件以及可以进行完成后消息通知 |
| 403 | [ywy-cyber/dsh-free-web-search](https://github.com/ywy-cyber/dsh-free-web-search) | 0 | 2026-11-13 | 2026-11-13 | Keyless web search provider for DeepSeek Harness (dsh): Bing, Firecrawl and Exa with language-aware failover. No API key, no billing. |
| 404 | [z1lyA/dsh-toolshed](https://github.com/z1lyA/dsh-toolshed) | 0 | 2026-11-13 | 2026-11-13 | DSH 工具面管理插件（MCP / Skills / 已归档会话 / 宿主重启）— fork 自 functy23/dsh-mcp-studio |
| 405 | [Zekilou/dsh-sidebar-session-tabs](https://github.com/Zekilou/dsh-sidebar-session-tabs) | 0 | 2026-11-13 | 2026-11-13 | Filter tabs (All / Running / Needs me / Pinned / tags) and per-session tags for the DeepSeek Harness sidebar session list. |
| 406 | [Zhang-Eli/dsh-one-pack](https://github.com/Zhang-Eli/dsh-one-pack) | 0 | 2026-11-10 | 2026-11-13 | One Pack: sync DSH plugins, settings, skills and sessions across machines via GitHub |
| 407 | [zhangcun1995521/deepwork](https://github.com/zhangcun1995521/deepwork) | 0 | 2026-10-13 | 2026-11-13 | Declare an enterprise world, derive the agent's tools and permissions from it, and enforce them. A platform on DeepSeek Harness. |
| 408 | [zhangyuantong/dsh-session-scrub](https://github.com/zhangyuantong/dsh-session-scrub) | 0 | 2026-11-13 | 2026-11-13 | Deep-clean one DeepSeek Harness session: its log, subagent children, scheduled tasks, workspace accounting, projection cache, spill files, and every attachment no other session still cites. |
| 409 | [zhannweii/dsh-directions](https://github.com/zhannweii/dsh-directions) | 0 | 2026-11-13 | 2026-11-13 | Fork a DSH conversation into independent direction branches and synthesize the chosen results back |
| 410 | [zhaoyueshen/dsh-siyuan-export](https://github.com/zhaoyueshen/dsh-siyuan-export) | 0 | 2026-11-13 | 2026-11-13 | DSH 插件：把 DeepSeek Harness 对话、或聊天里选中的文字导出到思源笔记 —— 输入框按钮、聊天右键菜单、/siyuan 命令，以及给 agent 的 siyuan_export 工具。 |
| 411 | [zhengjy273/dsh-subagent-governor](https://github.com/zhengjy273/dsh-subagent-governor) | 0 | 2026-11-13 | 2026-11-13 | DSH plugin: govern session subagents (total cap over living+finished children, ask/deny on limit, reuse similar finished children). |
| 412 | [zhitiaojun/dsh-mobbin-mcp](https://github.com/zhitiaojun/dsh-mobbin-mcp) | 0 | 2026-11-13 | 2026-11-13 | Mobbin MCP server for DeepSeek Harness — OAuth 2.0 (PKCE) login, screen search and collection tools. |
| 413 | [Zhizhi-2986/dsh-obsidian-dashboard](https://github.com/Zhizhi-2986/dsh-obsidian-dashboard) | 0 | 2026-11-02 | 2026-11-13 | dsh-obsidian-dashboard |
| 414 | [zhouhaitao-cherry/ai-news-dsh](https://github.com/zhouhaitao-cherry/ai-news-dsh) | 0 | 2026-11-12 | 2026-11-13 | Latest AI news for DeepSeek Harness, with DeepSeek-related items ranked first. |
| 415 | [zhouxnsz/dsh-rolegroup](https://github.com/zhouxnsz/dsh-rolegroup) | 0 | 2026-10-15 | 2026-11-13 | dsh 生态的角色化委派插件 |
| 416 | [zhouzhou5210/dsh-star-prompt-enhance](https://github.com/zhouzhou5210/dsh-star-prompt-enhance) | 0 | 2026-11-13 | 2026-11-13 | Star button beside the DSH composer that rewrites your draft into a clearer, complete prompt using up to five recent prompts from the same session. |
| 417 | [ZhuoSir/dsh-note-taker](https://github.com/ZhuoSir/dsh-note-taker) | 0 | 2026-11-10 | 2026-11-13 | DSH 的会议记录插件。侧栏一键录音，带实时字幕，转写支持本地与云端；停止后把转写交给当前会话生成纪要，历史会议也能单独发起。列表用徽标显示录制／转写／纪要状态，产物统一存成工作区里的单个 markdown 文件。 |
| 418 | [zixiaog/dsh-usage-analytics](https://github.com/zixiaog/dsh-usage-analytics) | 0 | 2026-11-13 | 2026-11-13 | DeepSeek Harness usage analytics: peak/off-peak billing dock + full token/cost dashboard for every session |
| 419 | [ZIYIDONG/dsh-cs-research-workbench](https://github.com/ZIYIDONG/dsh-cs-research-workbench) | 0 | 2026-11-11 | 2026-11-13 | 面向Computer Science的全流程科研工作台：待办、文献、项目、想法、知识库、同步与备份一体化。 |
| 420 | [zmq6931/dsh-mcp-visualizer-ad](https://github.com/zmq6931/dsh-mcp-visualizer-ad) | 0 | 2026-11-13 | 2026-11-13 | mcp-visualizer: MCP server view for DeepSeek Harness - list, inspect and enable/disable configured MCP servers from a Conversation view tab or Settings. |
| 421 | [zrrrrrrr77/dsh-team-switch-place](https://github.com/zrrrrrrr77/dsh-team-switch-place) | 0 | 2026-11-13 | 2026-11-13 | dsh-team-switch-place |
| 422 | [zuosus/dsh-model-flatmap](https://github.com/zuosus/dsh-model-flatmap) | 0 | 2026-11-13 | 2026-11-13 | flatmap the model picker in DSH |
| 423 | [zwh0714/dsh-resume-studio](https://github.com/zwh0714/dsh-resume-studio) | 0 | 2026-11-13 | 2026-11-13 | Resume workshop: one JSON renders HTML, DOCX and PDF. Three presets with theme tokens, A4 or Letter, custom section kinds, automatic page fitting and writing checks. Works as a DSH plugin or a standalone CLI. 简历工坊：一份 JSON 出 HTML / Word / PDF。 |
| 424 | [zznobzz/dsh-plugin-mcp-manager](https://github.com/zznobzz/dsh-plugin-mcp-manager) | 0 | 2026-11-13 | 2026-11-13 | MCP connection manager for DeepSeek Harness: Settings → MCP page and mcp_connections agent tool |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Bozheng-Li/dsh-system-proxy
- Calliope-Nicles/technical-terms-en-zh-plugin
- ddtcorex/dsh-maestro-dashboard
- ddtcorex/dsh-maestro-govard
- ddtcorex/dsh-maestro-review
- drliuhuan/dsh-plugin-meeting
- evolving-foundry/agentbundle
- Gaoler006115/dsh-desktop-view
- HimLeoing/dsh-task-progress
- imnotRiv3r/dsh-progress
- JasonJin2006/dsh-sound-effects-plugin
- JimLiu/baoyu-design
- jx70/dsh-cloudmusic-player
- kingcharleslzy-ai/dsh-qwen-studio
- konata/btw
- Kr-ATG/dsh-chat-plus
- Kr-ATG/dsh-seeker-os
- kukonce/dsh-loomy
- LeifDai/MACKORN-hydraulic-cone-crusher
- lilinfangrelax/dsh-external-agents
- Lornatang/dsh-atlassian-bridge
- lucky6star9/prompt-optimizer-keep
- lxjmaster/dsh-gpt-adapter
- mango2630/dsh-conversation-pins
- Morethaninformation/dsh-downloader
- Morethaninformation/dsh-eval
- oldcitynight/dsh-bettertaskgraphs
- pridurok-goxa/dsh-tweaks
- qikairo7/dsh-web-search-fetch
- royrao2007/mont-forge
- sjh9714/dsh-retry-guard
- TongenShen/dsh-stateless-chat-mode
- Wang1462604987/dsh-wsl-sidebar
- wqx11235/dsh-sidebar-fold
- wwwwww1239/dsh-shione
- xiaoshihou514/dsh-tui
- xiaoshihou514/dsh-vision
- xuzihao66/dsh-token-frugal
- yeweiliang7063/dsh-qihuangjingfang
- youyou-sudo/dsh-plugins
- zhtty67-rgb/gongkao-learning-os
