# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-03**
- 快照日期 / Snapshot date: **2026-10-03 (UTC)**
- 待审核 / Pending: **210**
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

对比上一份快照 **2026-10-02** / vs previous snapshot **2026-10-02**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **3**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [ChisaAlter/WhaleIsle](https://github.com/ChisaAlter/WhaleIsle) | 待审 / pending | 173 | +0 | 9 | 50d | 待审高星 | 核准即榜 #79 |
| ⚠️ [DSH-EAC/DSH-Desktop-EAC](https://github.com/DSH-EAC/DSH-Desktop-EAC) | 待审 / pending | 1832 | — | 69 | 49d | 待审高星 | 核准即 Top 8 |
| ⚠️ [Clearailhc/clearai-dsh](https://github.com/Clearailhc/clearai-dsh) | 已核准 / approved | 1209 | +112 | 40 | 20d | 日增百星 | 日增 +112★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [DSH-EAC/DSH-Desktop-EAC](https://github.com/DSH-EAC/DSH-Desktop-EAC) ⚠️ | 1832 | 2026-08-14 | 2026-10-03 | Embracing All Creation — A plugin suite for harmonious coexistence of hundreds of plugins / 揽尽万象 —— 致力于让数百个插件和谐共存的插件整合包 |
| 2 | [ChisaAlter/WhaleIsle](https://github.com/ChisaAlter/WhaleIsle) ⚠️ | 173 | 2026-08-13 | 2026-10-03 | 鲸屿 Whale Isle · DeepSeek Harness 社区增强桌面版：官方核心功能齐备，扩展主题壁纸、鲸鱼娘桌宠、用量统计与手机远程连接。Community-enhanced DeepSeek Harness desktop client. |
| 3 | [jingyi0605/Codingns4DSH](https://github.com/jingyi0605/Codingns4DSH) | 21 | 2026-09-25 | 2026-10-03 | 把外部 Agent CLI、持久终端、工作区调试和远程访问，装进 DSH 原生界面。 |
| 4 | [DSH-EAC/dsh-ui-skin-loader](https://github.com/DSH-EAC/dsh-ui-skin-loader) | 15 | 2026-09-25 | 2026-10-03 | DSH UI Skin Loader / DSH UI 皮肤加载器 |
| 5 | [Cristallin2006/ghidra-skill-for-dsh](https://github.com/Cristallin2006/ghidra-skill-for-dsh) | 7 | 2026-09-13 | 2026-10-03 | 定制化dsh (DeepSeek Harness) 逆向 agent skill 家族：Ghidra headless daemon + 分诊/脱壳/静态/漏洞/动态/流量/安卓七场景 \| Reverse-engineering agent skills: triage, unpacking, decompile, pwn audit, pcap forensics, APK analysis |
| 6 | [Dalizi2026/dsh-factory-provider](https://github.com/Dalizi2026/dsh-factory-provider) | 7 | 2026-10-02 | 2026-10-03 | 把 Factory (Droid) 订阅额度接入 DeepSeek Harness (DSH) 的原生 LLM provider 插件 · Factory (Droid) subscription quota as native DSH providers |
| 7 | [c3cvld7aag/fujiang-dsh](https://github.com/c3cvld7aag/fujiang-dsh) | 5 | 2026-10-03 | 2026-10-03 | 富江DSH完美破甲｜富江破甲 DSH 本地插件，内置提示词规则，支持 Windows 一键安装、环境自动准备与一键卸载，全中文使用说明。 |
| 8 | [guzhou079-arch/deepseek-harness-android](https://github.com/guzhou079-arch/deepseek-harness-android) | 4 | 2026-09-29 | 2026-10-03 | 把 DeepSeek Harness 打包成能直接装的安卓 APK：不用 Termux、不用 root、不用配环境。它还能在手机上自己编译、打包、签名、发布。 |
| 9 | [HorusJiang/dsh-map-tools](https://github.com/HorusJiang/dsh-map-tools) | 3 | 2026-08-19 | 2026-10-03 | 给 DeepSeek Harness 的原生地图工具：驾车/公交/步行/骑行路线、地理编码、逆地理编码、POI 搜索。 Map &amp; routing tools for DeepSeek Harness — native tools (no MCP) with a real map card in every answer, via Amap (高德) or free OSM/OSRM. |
| 10 | [PPsz-qqq/dsh-restart-button](https://github.com/PPsz-qqq/dsh-restart-button) | 3 | 2026-10-03 | 2026-10-03 | DeepSeek Harness plugin: one-click restart button in the top-right of the session header (Windows desktop + dsh web). 一键重启 DeepSeek Harness 客户端。 |
| 11 | [T-Auto/dsh-dpx](https://github.com/T-Auto/dsh-dpx) | 3 | 2026-09-08 | 2026-10-03 | Isolated Multi-Environment Manager for DSH / DSH 多隔离环境管理器 |
| 12 | [A42Null/dsh-opencode-zen-plugin](https://github.com/A42Null/dsh-opencode-zen-plugin) | 2 | 2026-10-03 | 2026-10-03 | OpenCode Console (Zen) models for DeepSeek Harness: paste your Console API key and the Console's chat models become selectable in DSH. |
| 13 | [lpeixin/dsh-project-compass](https://github.com/lpeixin/dsh-project-compass) | 2 | 2026-10-03 | 2026-10-03 | An AI-powered DSH plugin for codebase analysis, developer onboarding, and project-level Q&amp;A. 项目罗盘 / Project Compass — DSH 插件，通过 AST、依赖图、RAG 和 LLM 分析代码库，自动生成架构、模块、调用链与上手指南，并提供项目级 AI Q&amp;A，帮助开发者快速理解和接手项目。  |
| 14 | [3likofj/dsh-custom-reasoning](https://github.com/3likofj/dsh-custom-reasoning) | 1 | 2026-10-03 | 2026-10-03 | deepseek harness 第三方模型推理强度选择 |
| 15 | [447662/dsh-native-codex-cli](https://github.com/447662/dsh-native-codex-cli) | 1 | 2026-10-03 | 2026-10-03 | Drive Codex from DeepSeek Harness: DSH owns the chat UI, Codex CLI owns task execution and native thread history - no second AI in the loop. |
| 16 | [AK-blank/dsh-plugin-offpeak-badge](https://github.com/AK-blank/dsh-plugin-offpeak-badge) | 1 | 2026-10-03 | 2026-10-03 | Unofficial DSH (DeepSeek Harness) Web GUI plugin: shows whether the DeepSeek API is billing at the off-peak or peak rate right now — bilingual 空闲/高峰 · Idle/Peak, Chinese holiday calendar built in. |
| 17 | [DSH-EAC/dsh-skin-prompt-packages](https://github.com/DSH-EAC/dsh-skin-prompt-packages) | 1 | 2026-09-22 | 2026-10-03 | EAC 与 AIO 自定义皮肤的 AI Prompt 包、来源清单与 Schema |
| 18 | [DSH-EAC/EAC-mojobox](https://github.com/DSH-EAC/EAC-mojobox) | 1 | 2026-08-28 | 2026-10-03 | 整合包式 DSH 插件管理平台 / Pre-built, verified, reversible plugin packs for DSH |
| 19 | [edwardzhou21/dsh-reasoning-slider](https://github.com/edwardzhou21/dsh-reasoning-slider) | 1 | 2026-10-03 | 2026-10-03 | DSH 插件 · 仿 Codex 的推理等级滑条，内嵌在模型选择器里 \| Codex-style reasoning-effort slider embedded in the DSH model selector |
| 20 | [gollasmari87-commits/dsh-whale-voice](https://github.com/gollasmari87-commits/dsh-whale-voice) | 1 | 2026-10-03 | 2026-10-03 | 鲸声 · DSH 非官方语音交互修复与海洋动态皮肤 |
| 21 | [herenfor/dsh-task-notify](https://github.com/herenfor/dsh-task-notify) | 1 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 任务完成通知插件，支持浏览器通知和 Windows 通知保底。 |
| 22 | [huguangyu666/dsh-plugin-ai-super-search](https://github.com/huguangyu666/dsh-plugin-ai-super-search) | 1 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 插件：超级搜索 toolkit——集成 TinyFish 结构化检索、AnySearch REST、Bing 免 Key 爬取、Jina 与 DuckDuckGo，接管 DSH 原生 web_search，零 Token 消耗。 |
| 23 | [IHS470/dsh-desktop-tray-restart](https://github.com/IHS470/dsh-desktop-tray-restart) | 1 | 2026-10-03 | 2026-10-03 | Adds a "Restart DeepSeek Harness" item to the desktop shell tray menu — a local, reversible patch, because a plugin cannot reach the tray. |
| 24 | [IHS470/dsh-plugin-restart](https://github.com/IHS470/dsh-plugin-restart) | 1 | 2026-10-01 | 2026-10-03 | DeepSeek Harness restart button in the DSH desktop window title bar |
| 25 | [Isle-ux/dsh-archive-keeper-plugin](https://github.com/Isle-ux/dsh-archive-keeper-plugin) | 1 | 2026-10-03 | 2026-10-03 | 归档守护：DSH 会话归档后自动提炼要点，由你自己决定每条归档的去留（保留原文 / 只留摘要 / 彻底删除，删除可恢复）。 |
| 26 | [j62268781-alt/dsh-skills-mcp-manager](https://github.com/j62268781-alt/dsh-skills-mcp-manager) | 1 | 2026-10-02 | 2026-10-03 | DSH 设置面板：一个页面管理技能（SKILL.md）与 MCP 服务器，全局 / 项目级分层，改完即生效。Manage skills and MCP servers from one DSH settings panel. |
| 27 | [LJY7812/dsh-winui-skin](https://github.com/LJY7812/dsh-winui-skin) | 1 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 的 Windows 11 / WinUI 3 (Fluent 2) 皮肤插件 \| A WinUI 3 skin for the DeepSeek Harness web client |
| 28 | [louisyeaaah/dsh-doctor](https://github.com/louisyeaaah/dsh-doctor) | 1 | 2026-10-03 | 2026-10-03 | Read-only diagnostics for DeepSeek Harness: why a plugin row is not running, why a skill is invisible, whether patch rows conflict, and why an edited plugin did not take effect — plus a redacted card you can paste into an issue. |
| 29 | [lsmax-72/dsh-rsi](https://github.com/lsmax-72/dsh-rsi) | 1 | 2026-10-02 | 2026-10-03 | 面向个人用户、安装在 dsh 中的 Chat Memory＋Skill 自动演化插件 |
| 30 | [moon-partner/dsh-anime25d-pets-v2](https://github.com/moon-partner/dsh-anime25d-pets-v2) | 1 | 2026-10-03 | 2026-10-03 | DSH0.2.0compatible anime 2.5D desktop pet |
| 31 | [NoProblUm/dsh-codexlike-projectless](https://github.com/NoProblUm/dsh-codexlike-projectless) | 1 | 2026-10-03 | 2026-10-03 | Provides a Codex-like, project-free session experience for DeepSeek Harness, automatically creating a working directory organized by date and topic upon first sending.为 DeepSeek Harness 提供类 Codex 的无项目会话体验，首次发送时自动创建按日期和主题组织的工作目录。 |
| 32 | [nydsg/dsh-mindmap](https://github.com/nydsg/dsh-mindmap) | 1 | 2026-10-01 | 2026-10-03 | 把 DSH 的对话轨迹渲染成一张横向层级树：最左侧是唯一的起始总标题（内容就是这场会话的第一个提问），之后每一轮从它向右逐层展开，卡片上只显示你的提问。插件会比较每轮提问与前序提问的相似度自动续接分支，也能手动改父节点。全部分析在浏览器本地完成，无网络请求、无模型调用、无构建步骤。 |
| 33 | [piecuzwhynot/dsh-external-workers](https://github.com/piecuzwhynot/dsh-external-workers) | 1 | 2026-10-03 | 2026-10-03 | Give your DeepSeek Harness agent three more pairs of hands. It sends long tasks to Claude Code, Codex and Antigravity using your own subscription logins, keeps one persistent session per lane, and never loses a job.                       给 DeepSeek Harness 用的外部 agent 泳道：把长任务派给 Claude Code、Codex、Antigravity 三个 CLI，用你自己已有的订阅登录。每条泳道一个持久会话，作业重启和压缩都不会丢。 |
| 34 | [pokerface-1224/deepseek-whale-girl-pet](https://github.com/pokerface-1224/deepseek-whale-girl-pet) | 1 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 鲸鱼娘桌宠插件：透明 Windows 桌宠、五种动作立绘与互动菜单 |
| 35 | [qiweiii/dsh-brand-studio](https://github.com/qiweiii/dsh-brand-studio) | 1 | 2026-10-03 | 2026-10-03 | Customize in-app branding in DeepSeek Harness Web, PWA, and Desktop. |
| 36 | [reverse-PAI/dsh-minimal-session-delete](https://github.com/reverse-PAI/dsh-minimal-session-delete) | 1 | 2026-10-02 | 2026-10-03 | Permanently delete a DeepSeek Harness session: a sidebar session-row "..." menu item plus a hover button, a risk-consent dialog, and an authenticated Host route that removes the session log, its projection-cache row and its archive mark. |
| 37 | [sayho-pm/dsh-locale-pack](https://github.com/sayho-pm/dsh-locale-pack) | 1 | 2026-10-03 | 2026-10-03 | 26-language locale pack for the DeepSeek Harness desktop app |
| 38 | [shuxidemosheng/dsh-tool-todo-plus](https://github.com/shuxidemosheng/dsh-tool-todo-plus) | 1 | 2026-10-03 | 2026-10-03 | Enhanced todo_write plugin for DeepSeek Harness: floating task panel with capsule mode, priority tags, full checklist rendering. Fork of @deepseek-ai/dsh-tool-todo. |
| 39 | [southsnowL/dsh-bulletin](https://github.com/southsnowL/dsh-bulletin) | 1 | 2026-10-03 | 2026-10-03 | DSH 插件：让一台电脑上的 AI 会话跨工作区互通消息 —— 公告、单子、侧栏面板。会话之间对等：没有队长，可互相派活。推荐让本机的 agent 读 README 来装。 |
| 40 | [T-Auto/dsh-distribution](https://github.com/T-Auto/dsh-distribution) | 1 | 2026-09-04 | 2026-10-03 | DSH Environment Identity &amp; Portability Meta-Protocol / DSH 环境身份与可迁移性元协议 |
| 41 | [wbb316/dsh-comfyui-image](https://github.com/wbb316/dsh-comfyui-image) | 1 | 2026-10-03 | 2026-10-03 | DSH（DeepSeek Harness）的本地 ComfyUI 图片生成插件：一个 generate_image 工具覆盖文生图 / 图生图 / 局部重绘 / 去背景，参数有智能默认值、报错可照做；零第三方运行时依赖，附 doctor 自检与 88 项测试（自带 mock ComfyUI，无需真装）。Local ComfyUI image plugin for DSH — one generate_image tool with text2img / img2img / inpaint / remove-background modes. |
| 42 | [YYTbit/dsh-plugin-jev-compaction](https://github.com/YYTbit/dsh-plugin-jev-compaction) | 1 | 2026-10-03 | 2026-10-03 | Jev-scored context compaction for DeepSeek Harness. Score every message by relevance to the current task instead of dropping the oldest, pin the tracebacks and constraints, and fall back to stock behavior on any failure. |
| 43 | [YYTbit/dsh-plugin-jev-router](https://github.com/YYTbit/dsh-plugin-jev-router) | 1 | 2026-10-03 | 2026-10-03 | Per-turn model and reasoning-effort routing for DeepSeek Harness, decided by one Jev choice question. Jev picks the candidate, a confidence gate falls back, and every turn appends a receipt that can be replayed at zero cost. |
| 44 | [zhuweiyou/dsh-plugin-clawbot](https://github.com/zhuweiyou/dsh-plugin-clawbot) | 1 | 2026-09-01 | 2026-10-03 | DSH（DeepSeek Harness）的微信 ClawBot 通道插件 |
| 45 | [zkforge/dsh-claude-desktop-theme](https://github.com/zkforge/dsh-claude-desktop-theme) | 1 | 2026-10-01 | 2026-10-03 | Claude Code Desktop-style theme for DeepSeek Harness (DSH) Desktop — macOS &amp; Windows, light/dark themes, model &amp; effort pickers｜DSH 桌面端 Claude 风格主题插件 |
| 46 | [zudazhuang/dsh-upgrade](https://github.com/zudazhuang/dsh-upgrade) | 1 | 2026-10-03 | 2026-10-03 | DeepSeek Harness update plugin: official release checks, scheduled updates and supervised rollback |
| 47 | [0mao0/dsh-inline-figures](https://github.com/0mao0/dsh-inline-figures) | 0 | 2026-10-03 | 2026-10-03 | DSH 插件：让模型把矢量图穿插在回答段落之间，回答变成「文字-图-文字」 · DeepSeek Harness plugin: inline vector figures between the paragraphs of a reply |
| 48 | [141w/dsh-quorum](https://github.com/141w/dsh-quorum) | 0 | 2026-10-03 | 2026-10-03 | Mechanism-enforced discipline layer for DeepSeek Harness agent teams: role cards, quorum termination, evidence-gated reports, cost budgets. |
| 49 | [15372010668-dot/dsh-bluewhale-pet](https://github.com/15372010668-dot/dsh-bluewhale-pet) | 0 | 2026-10-03 | 2026-10-03 | 一只陪你处理 DeepSeek Harness 任务的蓝鲸桌宠（dsh-bluewhale-pet）。In-page blue whale companion for DeepSeek Harness (DSH). |
| 50 | [2123043818/dsh-sidebar-enhance](https://github.com/2123043818/dsh-sidebar-enhance) | 0 | 2026-10-01 | 2026-10-03 | 利用 DSH 官方 API，使 AI 可以直接使用 dsh 侧栏功能自主展示成果文件/网页和进行浏览器搜索获取信息。 |
| 51 | [2DogsLee/dsh-watcher](https://github.com/2DogsLee/dsh-watcher) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness (DSH) 插件 API 面自动比对引擎：升级前一条命令看清插件依赖的 API/配置字段变了没有 · Auto diff engine for DSH plugin-breaking changes, with CI watch &amp; agent skill |
| 52 | [334456777/dsh_plugins](https://github.com/334456777/dsh_plugins) | 0 | 2026-10-03 | 2026-10-03 | 蓝色大肥鱼的电脑插件 |
| 53 | [a5557/dsh-agent-guard](https://github.com/a5557/dsh-agent-guard) | 0 | 2026-10-03 | 2026-10-03 | DSH guardrail plugin: evidence-first inspection, write governance, and per-turn rollback points. Zero runtime dependencies, no network, no telemetry. |
| 54 | [ADkun/dsh-convergence-notice](https://github.com/ADkun/dsh-convergence-notice) | 0 | 2026-10-03 | 2026-10-03 | DSH (DeepSeek Harness) plugin: append one convergence line to every user message and inject it every N steps — both switchable, adjustable from the Settings page · 每条用户消息末尾追加一句收敛提示，并每 N 步注入一次，两项均可在设置页开关 |
| 55 | [AK-blank/dsh-plugin-mac-notify](https://github.com/AK-blank/dsh-plugin-mac-notify) | 0 | 2026-10-03 | 2026-10-03 | Unofficial DSH (DeepSeek Harness) plugin: macOS Notification Center alerts when a session finishes or needs you — the banner carries the last reply, plays your system alert sound, and clicking it jumps back to the DSH page. |
| 56 | [als3453/dsh-docs-reader](https://github.com/als3453/dsh-docs-reader) | 0 | 2026-10-03 | 2026-10-03 | DSH 的开发文档阅读器插件(文档浏览 + 知识图谱) |
| 57 | [artorias-zj/dsh-cc-switch-skills](https://github.com/artorias-zj/dsh-cc-switch-skills) | 0 | 2026-10-03 | 2026-10-03 | DSH plugin: load every skill from the current user's .cc-switch\\skills into DeepSeek Harness at startup |
| 58 | [asdukw/dsh-plugin-android-tools](https://github.com/asdukw/dsh-plugin-android-tools) | 0 | 2026-10-03 | 2026-10-03 | Android device automation tools for DeepSeek Harness (dsh): read screen, tap, type, back, launch app, swipe over a local HTTP bridge |
| 59 | [asdukw/dsh-plugin-chat-tools](https://github.com/asdukw/dsh-plugin-chat-tools) | 0 | 2026-10-03 | 2026-10-03 | Chat-page context tracking tools for DeepSeek Harness (dsh): collect and incrementally read on-screen chat messages over a local HTTP bridge |
| 60 | [AusertDream/TravelPlanner](https://github.com/AusertDream/TravelPlanner) | 0 | 2026-10-02 | 2026-10-03 | 旅行规划师：DeepSeek Harness (DSH) 的中文旅行规划 agent，实时查 12306 / 飞猪 / 途牛 / 高德，交付单文件 HTML 路书 |
| 61 | [baldovinmarques391-design/dsh-computer-control](https://github.com/baldovinmarques391-design/dsh-computer-control) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness bundle: Windows desktop operation as discrete tool calls, each returning the frames captured around the call. |
| 62 | [Balla1ore/dsh-locale-ru](https://github.com/Balla1ore/dsh-locale-ru) | 0 | 2026-10-03 | 2026-10-03 | Русский язык для DeepSeek Harness: 2615 строк веб-интерфейса + 165 строк оболочки (меню, трей, диалоги, окно входа) |
| 63 | [bdydgz114514/dsh-free-media](https://github.com/bdydgz114514/dsh-free-media) | 0 | 2026-10-03 | 2026-10-03 | DSH 免费多模态三件套：零 Key 文生图 + 零 Key 视频理解 + 免费文生视频/图生视频。三个工具 + 一份 skill，MIT。 |
| 64 | [beibeihk/dsh-agent-observability](https://github.com/beibeihk/dsh-agent-observability) | 0 | 2026-10-03 | 2026-10-03 | Community plugin for event-grounded, privacy-first agent observability and reliability analysis in DeepSeek Harness. |
| 65 | [bjzkhy/dsh-multiplatform-balance](https://github.com/bjzkhy/dsh-multiplatform-balance) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness skill plugin for multi-platform model account balances. |
| 66 | [caishzh/dsh-hot-search](https://github.com/caishzh/dsh-hot-search) | 0 | 2026-10-03 | 2026-10-03 | Resident hot search for DeepSeek Harness (DSH): fuzzy filename search, indexed grep and CJK typo-tolerant content search, all served from the host process with no per-query process spawn. |
| 67 | [CaiZongyuan/dsh-my-homepage](https://github.com/CaiZongyuan/dsh-my-homepage) | 0 | 2026-10-03 | 2026-10-03 | 小组件式个人工作台｜把多个信息源聚合成一个 bento 网格，每个源有自己的卡片形态 · A widget-style personal homepage for DeepSeek Harness |
| 68 | [CaveNightingale/dsh-rcon](https://github.com/CaveNightingale/dsh-rcon) | 0 | 2026-10-03 | 2026-10-03 | A DeepSeek Harness plugin for minecraft rcon |
| 69 | [ch1bug/dsh-shell-host](https://github.com/ch1bug/dsh-shell-host) | 0 | 2026-09-30 | 2026-10-03 | DSH bundle: native MSYS2 (UCRT64) bash for the DSH shell seam — fork of @deepseek-ai/dsh-bash-local with configurable bash path |
| 70 | [ch1bug/dsh-shell-remote](https://github.com/ch1bug/dsh-shell-remote) | 0 | 2026-10-03 | 2026-10-03 | Remote one-shot shell execution (thin ssh transport) - the remote world per ADR-0004 |
| 71 | [chinahhy/DSH-plugins](https://github.com/chinahhy/DSH-plugins) | 0 | 2026-10-03 | 2026-10-03 | Hoya自用DeepSeek-Harness插件仓库 |
| 72 | [citrusli2026/dsh-verified-plugins](https://github.com/citrusli2026/dsh-verified-plugins) | 0 | 2026-10-03 | 2026-10-03 | Execution-verified plugin reports for DeepSeek Harness — install it, load it, run it, measure it. Evidence-linked, reproducible, not another star list. |
| 73 | [cslkkl/dsh-web-annotator](https://github.com/cslkkl/dsh-web-annotator) | 0 | 2026-10-03 | 2026-10-03 | Annotate pages and ask questions inside the existing DeepSeek Harness Browser. |
| 74 | [Cyrene-xl/dsh-cyrene-chat](https://github.com/Cyrene-xl/dsh-cyrene-chat) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 插件：增加「纯文本对话模式」agent 预设——整份替换系统提示词进行纯角色对话，只保留联网搜索与表情包。随包人设文本整理自开源项目 Cyrene-Agent（MIT）。 |
| 75 | [d0ublecl1ck/dsh-csdn-theme](https://github.com/d0ublecl1ck/dsh-csdn-theme) | 0 | 2026-10-03 | 2026-10-03 | CSDN 博文的配色与正文排版主题插件，用于 DeepSeek Harness Web GUI · CSDN-blog typography theme for the DeepSeek Harness web GUI. |
| 76 | [d0ublecl1ck/dsh-search-enhance](https://github.com/d0ublecl1ck/dsh-search-enhance) | 0 | 2026-10-03 | 2026-10-03 | Search inside the DeepSeek Harness New-Session workspace picker: pinyin initials, full pinyin spelling and substring matching. / 在「新建会话」的工作区下拉里直接搜索，支持拼音首字母、全拼与任意位置子串匹配。 |
| 77 | [dajie2014/dsh-dictation-turbo](https://github.com/dajie2014/dsh-dictation-turbo) | 0 | 2026-10-03 | 2026-10-03 | 双击 Control 说话，文字落进 DSH 输入框；中文/德语/英文自动换引擎，不用切输入法（可选 VoiceStudio 支持 600+ 语言） |
| 78 | [daoyu1993-lab/dsh-plugin-composer-align](https://github.com/daoyu1993-lab/dsh-plugin-composer-align) | 0 | 2026-10-03 | 2026-10-03 | Pin the New Session composer to the exact place the conversation composer occupies, so the input box stops jumping after the first message. |
| 79 | [daoyu1993-lab/dsh-plugin-sidebar-polish](https://github.com/daoyu1993-lab/dsh-plugin-sidebar-polish) | 0 | 2026-10-03 | 2026-10-03 | Polish the DSH left sidebar: drop the brand row, redraw New Session as a panel row, unify row heights, tune the fill, pin the collapse toggle, add a settings entry, mark idle sessions. |
| 80 | [daoyu1993-lab/dsh-plugin-type-to-compose](https://github.com/daoyu1993-lab/dsh-plugin-type-to-compose) | 0 | 2026-10-03 | 2026-10-03 | DSH plugin: type or paste anywhere in the window and it lands in the current conversation's composer — no click needed. |
| 81 | [datit309/dsh-sound-notifier](https://github.com/datit309/dsh-sound-notifier) | 0 | 2026-10-03 | 2026-10-03 | Sound and desktop notifications plugin for DeepSeek Harness (DSH) |
| 82 | [day-day-dream/dsh-page-refresh](https://github.com/day-day-dream/dsh-page-refresh) | 0 | 2026-10-02 | 2026-10-03 | Refresh button in the DeepSeek Harness conversation header (desktop-first, client-only, zero tokens) |
| 83 | [DevTarlow/dsh-chrome-devtools](https://github.com/DevTarlow/dsh-chrome-devtools) | 0 | 2026-10-03 | 2026-10-03 | Give your DeepSeek Harness Agent a real Chrome browser to drive and inspect. |
| 84 | [DmitPerson42/dsh-yandex-browser](https://github.com/DmitPerson42/dsh-yandex-browser) | 0 | 2026-10-03 | 2026-10-03 | DSH plugin: persistent Yandex Browser profile for the agent plus tools to read and drive pages over CDP |
| 85 | [DSH-EAC/dsh-eac-pack-installer](https://github.com/DSH-EAC/dsh-eac-pack-installer) | 0 | 2026-10-01 | 2026-10-03 | EAC 整合包安装器（dsh-eac-pack-installer）——EAC Core/Full 双形态桌面整合包的离线安装器 |
| 86 | [DSH-EAC/dsh-ui-skin-loader-convention](https://github.com/DSH-EAC/dsh-ui-skin-loader-convention) | 0 | 2026-09-25 | 2026-10-03 | DSH UI Skin Loader Covenant / DSH UI 皮肤加载公约 |
| 87 | [DSH-EAC/END-EAC-on-Deespeek-desktop](https://github.com/DSH-EAC/END-EAC-on-Deespeek-desktop) | 0 | 2026-09-29 | 2026-10-03 | 通过插件形式夺舍Deepseek官方GUI、借尸还魂EAC、又名360计划 |
| 88 | [DuJunxi1993/DSH-Shell](https://github.com/DuJunxi1993/DSH-Shell) | 0 | 2026-08-14 | 2026-10-03 | Native desktop shells for the DeepSeek Harness (dsh) web UI: a Tauri app for Windows and a SwiftUI app for macOS, one per top-level directory. |
| 89 | [EarthPretender/dsh-session-delete](https://github.com/EarthPretender/dsh-session-delete) | 0 | 2026-10-03 | 2026-10-03 | DSH 插件：在会话“…”菜单的“归档会话”下方新增红色“删除会话”行，二次确认后真正删除该会话的日志与工作区登记（不可逆；当次启动使用过的会话先停用再删，正在执行任务的会话再点一次停止任务并删除）。 |
| 90 | [easerlee/dsh-session-shift](https://github.com/easerlee/dsh-session-shift) | 0 | 2026-09-30 | 2026-10-03 | DSH 插件：上下文压力到阈值时，把当前工作交接给一个新会话（文件式交接包 + handoff_now 工具 + HTTP 接口）。 |
| 91 | [Elari39/dsh-session-insight](https://github.com/Elari39/dsh-session-insight) | 0 | 2026-10-03 | 2026-10-03 | Read-only session-health strip for the DeepSeek Harness: steps, tool calls, failures, repeats and failure rate, delivered as a sessionInsight projection plus a conversation.input.dock card. MIT. |
| 92 | [fancyui/dsh-openrouter-imagen-v2](https://github.com/fancyui/dsh-openrouter-imagen-v2) | 0 | 2026-10-02 | 2026-10-03 | dsh plugin: use openrouter models to generate images |
| 93 | [Frost-rA9/dsh-plugins](https://github.com/Frost-rA9/dsh-plugins) | 0 | 2026-10-02 | 2026-10-03 | Plugin index for the DeepSeek Harness (dsh) Web UI |
| 94 | [Frost-rA9/dsh-theme-everforest](https://github.com/Frost-rA9/dsh-theme-everforest) | 0 | 2026-10-02 | 2026-10-03 | Six complete Everforest palettes (hard/medium/soft × dark/light) for the DeepSeek Harness Web UI |
| 95 | [guzhou079-arch/dsh-plugin-android-vscreen](https://github.com/guzhou079-arch/dsh-plugin-android-vscreen) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness plugin — let an agent drive an Android phone on a virtual display, so your own screen stays untouched. · 让 AI 在安卓手机的「虚拟屏」上干活，手机照常用。 |
| 96 | [gxpppp/dsh-boot-anim](https://github.com/gxpppp/dsh-boot-anim) | 0 | 2026-10-03 | 2026-10-03 | DSH 桌面版启动动画（SteamOS 风格七段分镜）+ UI 由外向内分层入场过渡。宿主侧插件，经 webserver/index-inject 注入，零依赖、零源码改动。 |
| 97 | [HaiYu-22/dsh-session-purge](https://github.com/HaiYu-22/dsh-session-purge) | 0 | 2026-10-03 | 2026-10-03 | Deep delete for DeepSeek Harness sessions: remove a session's log, projection cache, and archive entry from disk instead of only hiding it |
| 98 | [hiocobueno653-pixel/dsh-ui-polish](https://github.com/hiocobueno653-pixel/dsh-ui-polish) | 0 | 2026-10-03 | 2026-10-03 | DSH UI 打磨层：毛玻璃浮层修复 + 推理强度滑杆 + 模型选择导航增强（浏览器侧注入插件） |
| 99 | [Hobartoakes/dsh-model-shelf](https://github.com/Hobartoakes/dsh-model-shelf) | 0 | 2026-10-03 | 2026-10-03 | Model Shelf for DeepSeek Harness: a wide, collapsible model picker with a manually managed uncommon list. |
| 100 | [hoshF/dsh-md-export](https://github.com/hoshF/dsh-md-export) | 0 | 2026-10-03 | 2026-10-03 | Export DeepSeek Harness conversations as clean Markdown |
| 101 | [hqa-shu/dsh-review-mode](https://github.com/hqa-shu/dsh-review-mode) | 0 | 2026-10-03 | 2026-10-03 | Work in progress: an independent conversation-review plugin for DeepSeek Harness and local Codex sessions. Evidence-aware feedback, goal-drift analysis, and a dedicated review panel. 正在开发中。 |
| 102 | [huohua-dev/dsh-compaction-policy](https://github.com/huohua-dev/dsh-compaction-policy) | 0 | 2026-10-03 | 2026-10-03 | A lightweight compaction policy plugin for DeepSeek Harness: capped output reservation, useful-range selection, and no-progress retry guards. |
| 103 | [huohua-dev/dsh-web-search-brave](https://github.com/huohua-dev/dsh-web-search-brave) | 0 | 2026-09-03 | 2026-10-03 | Brave Search API web search provider plugin for DeepSeek Harness (ctx.web) - one search is one HTTP request, no model turn |
| 104 | [Hwayn-pixel/dsh-clipbook](https://github.com/Hwayn-pixel/dsh-clipbook) | 0 | 2026-10-03 | 2026-10-03 | 灏忓す瀛?路 dsh-clipbook: a clipbook for DeepSeek Harness conversations 鈥?one click on any assistant reply to keep it; a header panel to browse, search, copy, delete and export your clips. |
| 105 | [Hwayn-pixel/dsh-touchstone](https://github.com/Hwayn-pixel/dsh-touchstone) | 0 | 2026-10-03 | 2026-10-03 | 璇曢噾鐭?路 dsh-touchstone: the missing evaluation half of DSH's self-evolution 鈥?same golden cases, run the current config vs a candidate prompt change, score with rule checks + an LLM judge, keep it only if it got better. |
| 106 | [hy-sde/dsh-av](https://github.com/hy-sde/dsh-av) | 0 | 2026-09-06 | 2026-10-03 | Read-only Automic Vault plumbing for DeepSeek Harness: the host ctx.av service (av CLI probe, scan/doctor/detectors/hardeners) backing the read-only av tools — standalone plugin, no upstream changes. |
| 107 | [hy-sde/dsh-browser](https://github.com/hy-sde/dsh-browser) | 0 | 2026-08-26 | 2026-10-03 | Agentic browser plumbing for DeepSeek Harness: ctx.browser service (stealth launch, CDP-attach, local relay + companion extension driving your own tabs) backing the model-facing browser tool. |
| 108 | [hy-sde/dsh-code-runtime-kernels](https://github.com/hy-sde/dsh-code-runtime-kernels) | 0 | 2026-08-20 | 2026-10-03 | The run_kernel_code tool for DeepSeek Harness: persistent Python and JavaScript kernels (a long-lived python3/node subprocess per session, state that survives across calls). |
| 109 | [hy-sde/dsh-fs-archive](https://github.com/hy-sde/dsh-fs-archive) | 0 | 2026-08-26 | 2026-10-03 | Pure-TS multi-format archive engine for DeepSeek Harness (zip/tar/tar.gz/rar/7z/iso/deb/rpm/cpio/cab/arj/asar + codecs), ported from @oh-my-pi/pi-utils (MIT). |
| 110 | [hy-sde/dsh-git](https://github.com/hy-sde/dsh-git) | 0 | 2026-08-26 | 2026-10-03 | Agentic git plumbing for DeepSeek Harness: the host ctx.git service (diff capture/parsing, hunk staging, commit/push/log over the subprocess seam) + the dsh-tool-git test-parity package. |
| 111 | [hy-sde/dsh-graph](https://github.com/hy-sde/dsh-graph) | 0 | 2026-10-03 | 2026-10-03 | Agent Graph for DeepSeek Harness (durable supervisor): control plane, operator executor, stream layer, projection, wakes, host assembly and supervisor tools — the dsh-graph-* / dsh-tool-graph packages. |
| 112 | [hy-sde/dsh-internal-urls](https://github.com/hy-sde/dsh-internal-urls) | 0 | 2026-08-26 | 2026-10-03 | Internal URL schemes for DeepSeek Harness (conflict://, pr://, issue://, …): one registry behind fs-shaped tools plus agent-scope read/write/edit and glob/grep shadows resolving internal resources. |
| 113 | [hy-sde/dsh-llm-slots](https://github.com/hy-sde/dsh-llm-slots) | 0 | 2026-09-06 | 2026-10-03 | Host-wide model-slot admission control (ctx.modelSlots) for DeepSeek Harness: a shared FIFO budget over every model call at the llm/stream waterfall. |
| 114 | [hy-sde/dsh-logseq](https://github.com/hy-sde/dsh-logseq) | 0 | 2026-09-06 | 2026-10-03 | Logseq for DeepSeek Harness: host-plane wiki-graph service (ctx.wikiGraph) over the Logseq CLI plus model-facing logseq_* tools — a headless alternative to the desktop MCP bridge. |
| 115 | [hy-sde/dsh-memory](https://github.com/hy-sde/dsh-memory) | 0 | 2026-08-26 | 2026-10-03 | Agent-curated long-horizon memory for DeepSeek Harness: durable project-scoped memory banks (ctx.memory) with a provider registry + model-facing retain/recall/reflect/learn tools. |
| 116 | [hy-sde/dsh-memory-extraction](https://github.com/hy-sde/dsh-memory-extraction) | 0 | 2026-10-03 | 2026-10-03 | Automatic long-term-memory extraction at compaction checkpoints for DeepSeek Harness: evidence projection, proposal/canonicalization pipeline, gated ctx.memory writes. |
| 117 | [hy-sde/dsh-omp-native](https://github.com/hy-sde/dsh-omp-native) | 0 | 2026-08-26 | 2026-10-03 | Rust sidecar template for DeepSeek Harness native capabilities (stable channel, pinned JSON CLI contract, magic-byte routing) — the dsh-omp-native pattern. |
| 118 | [hy-sde/dsh-openwiki](https://github.com/hy-sde/dsh-openwiki) | 0 | 2026-09-06 | 2026-10-03 | OpenWiki 0.4.3 deterministic engine (MIT) as an in-process library for DeepSeek Harness: resumable page-job lifecycle with durable .run state + model-facing openwiki_* lifecycle tools. |
| 119 | [hy-sde/dsh-orchestration-policy](https://github.com/hy-sde/dsh-orchestration-policy) | 0 | 2026-09-06 | 2026-10-03 | Parallelize-by-default orchestration policy for DeepSeek Harness: config-driven fan-out rules, fail-closed task-isolation guard, review-gate posture resolution. |
| 120 | [hy-sde/dsh-pi-durable](https://github.com/hy-sde/dsh-pi-durable) | 0 | 2026-10-03 | 2026-10-03 | Durable-agent engine for DeepSeek Harness: host-plane cordis service mounting @earendil-works/pi-durable (conversations, exactly-once submits) + model-facing durable_agent_* tools. |
| 121 | [hy-sde/dsh-session-intelligence](https://github.com/hy-sde/dsh-session-intelligence) | 0 | 2026-10-03 | 2026-10-03 | The session_health tool for DeepSeek Harness: per-session health intelligence (outcome classification, tool-health signals, prompt-quality heuristics, context pressure). |
| 122 | [hy-sde/dsh-session-url](https://github.com/hy-sde/dsh-session-url) | 0 | 2026-09-06 | 2026-10-03 | session:// internal-URL scheme handler for DeepSeek Harness: read a session transcript, read one event as JSON, list sessions, and search past history. |
| 123 | [hy-sde/dsh-tool-ast](https://github.com/hy-sde/dsh-tool-ast) | 0 | 2026-08-18 | 2026-10-03 | The ast_grep (structural code search) and ast_edit (structural rewrite) tools for DeepSeek Harness over the packaged ast-grep native engine. |
| 124 | [hy-sde/dsh-tool-codebase-memory](https://github.com/hy-sde/dsh-tool-codebase-memory) | 0 | 2026-09-06 | 2026-10-03 | Model-facing codebase-memory CLI tools for DeepSeek Harness: index repositories and query definitions, callers, call chains, routes and architecture from a knowledge graph. |
| 125 | [hy-sde/dsh-tool-debug](https://github.com/hy-sde/dsh-tool-debug) | 0 | 2026-08-22 | 2026-10-03 | The debug tool for DeepSeek Harness: a model-facing Debug Adapter Protocol tool with 28 operations (launch/attach, breakpoints, continue/step, evaluate, memory, terminate) + the dsh-dap capability seam. |
| 126 | [hy-sde/dsh-tool-edit](https://github.com/hy-sde/dsh-tool-edit) | 0 | 2026-08-17 | 2026-10-03 | The rich edit tool for DeepSeek Harness (replace / patch / apply_patch / hashline modes) with embedded format-on-write and diagnostics — plus dsh-hashline, the pure line-anchored patch engine. |
| 127 | [hy-sde/dsh-tool-library-search](https://github.com/hy-sde/dsh-tool-library-search) | 0 | 2026-10-03 | 2026-10-03 | Model-facing library_search tool for DeepSeek Harness: free cross-ecosystem (npm/crates.io/Maven/Go/PyPI/RubyGems + GitHub) "has this already been built?" search. |
| 128 | [hy-sde/dsh-tool-subagent-report](https://github.com/hy-sde/dsh-tool-subagent-report) | 0 | 2026-09-06 | 2026-10-03 | The child-scoped report tool for continuable in-process subagents on DeepSeek Harness: installs \`report\` plus its usage guidance into every subagent. |
| 129 | [hy-sde/dsh-vcs](https://github.com/hy-sde/dsh-vcs) | 0 | 2026-09-06 | 2026-10-03 | Native vcs plumbing for DeepSeek Harness: the host ctx.vcs service (pi-vcs CLI resolution + probe, repo-info / rev-diff / staged-diff / worktree operations). |
| 130 | [hy-sde/dsh-web-search-public](https://github.com/hy-sde/dsh-web-search-public) | 0 | 2026-08-15 | 2026-10-03 | Credential-free concurrent web search fan-out for DeepSeek Harness (Startpage, DuckDuckGo, Ecosia, Google, Mojeek + consensus merging) — the web_search tool. |
| 131 | [hy-sde/dsh-zstd-frame](https://github.com/hy-sde/dsh-zstd-frame) | 0 | 2026-08-26 | 2026-10-03 | Zstandard frame primitives (scan / compress / decompress / multi-frame decoder) shared by the DeepSeek Harness session persistence backend and its tooling. |
| 132 | [IHS470/dsh-global-rules](https://github.com/IHS470/dsh-global-rules) | 0 | 2026-10-03 | 2026-10-03 | DSH plugin: one user-owned rule list, injected into every request system prompt, so the agent has to walk the rules before answering. |
| 133 | [Inceptzws/dsh-emil-skills](https://github.com/Inceptzws/dsh-emil-skills) | 0 | 2026-10-02 | 2026-10-03 | Emil Kowalski's design-engineering skills (animation, UI polish, Apple design, mobile-native, Swift) bundled as a DeepSeek Harness plugin. |
| 134 | [Inceptzws/dsh-project-guard](https://github.com/Inceptzws/dsh-project-guard) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness permission guard: work inside the workspace is never interrupted; only the extra permission a call asks for is judged — machine-safe actions pass, system changes ask with a consequence analysis, destructive ones are refused. |
| 135 | [Inceptzws/software-design-test](https://github.com/Inceptzws/software-design-test) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 插件：模拟真实用户做软件设计测试 / Simulate a real user to test software — personas, task cards, three input modes, screen evidence, zero input injection. |
| 136 | [InInNHD/dsh-recheck](https://github.com/InInNHD/dsh-recheck) | 0 | 2026-10-03 | 2026-10-03 | Unofficial DSH plugin: bind conclusions to evidence files and revisit them when files change. 原生侧栏与结论复核历史。 |
| 137 | [InkDemon911/dsh-theme-miyabi](https://github.com/InkDemon911/dsh-theme-miyabi) | 0 | 2026-10-03 | 2026-10-03 | 《绝区零》星见雅主题的 DeepSeek Harness Web UI 皮肤：霜蓝冷调令牌层 + 新艾利都 CRT 身份层 |
| 138 | [Iris0fTheValley/Thaliris-dsh](https://github.com/Iris0fTheValley/Thaliris-dsh) | 0 | 2026-10-03 | 2026-10-03 | Thaliris plugin for DeepSeek Harness using native agents, subagents, Settings and shared Web/Desktop client extensions. |
| 139 | [janpauldahlke/dsh-agent-processes](https://github.com/janpauldahlke/dsh-agent-processes) | 0 | 2026-09-27 | 2026-10-03 | DeepSeek Harness plugin: host-owned process &amp; port lifecycle for local agents. start/stop/list/logs/wait-ready, tracked port reclaim, Processes rightbar + dock chip. |
| 140 | [janpauldahlke/dsh-local-long-horizon](https://github.com/janpauldahlke/dsh-local-long-horizon) | 0 | 2026-09-27 | 2026-10-03 | DeepSeek Harness plugin: host-owned long-horizon task board for local coding agents. Next≤3, in-flight, done+verify, inject file + STATUS.md + rightbar/dock chip. |
| 141 | [janpauldahlke/dsh-memento](https://github.com/janpauldahlke/dsh-memento) | 0 | 2026-10-02 | 2026-10-03 | DeepSeek Harness plugin: bounded-file memory for local agents. ME.md + project MEMORY.md vault, cache-stable inject, plain-line inbox, Memory rightbar. No embeddings, no LLM calls. |
| 142 | [jizenghui81/dsh-huashu-pixel](https://github.com/jizenghui81/dsh-huashu-pixel) | 0 | 2026-10-03 | 2026-10-03 | Warm pixel theme for the DeepSeek Harness Web UI: cream-paper and arcade-phosphor palettes, pixel chrome with bundled pixel fonts, CRT motion on streaming and state changes, three intensity tiers, and a pixel loading bar while a turn runs. |
| 143 | [jxboop/dsh-plugin-mobile-bridge](https://github.com/jxboop/dsh-plugin-mobile-bridge) | 0 | 2026-10-03 | 2026-10-03 | 给 DeepSeek Harness 用的手机端桥接插件：手机发图、下发任务、实时看输出，支持局域网 / USB 共享 / Cloudflare 隧道外网访问。 |
| 144 | [kaine380/dsh-mcp-unified-panel](https://github.com/kaine380/dsh-mcp-unified-panel) | 0 | 2026-10-03 | 2026-10-03 | 能力库 (Unified MCP &amp; Skill Hub): All-in-One MCP &amp; Skill manager for DeepSeek Harness with feature-based row recognition and built-in OAuth 2.1 client driver. |
| 145 | [kvashninsasha-gif/dsh-locale-ru](https://github.com/kvashninsasha-gif/dsh-locale-ru) | 0 | 2026-10-03 | 2026-10-03 | Русский язык для DeepSeek Harness: 2615 строк интерфейса в 58 namespace — штатный DSH-плагин, добавляющий Русский рядом с 中文 и English |
| 146 | [kyan001/DSH-Jev-Thinking](https://github.com/kyan001/DSH-Jev-Thinking) | 0 | 2026-10-02 | 2026-10-03 | Ask TypeSafe's Jev how deep a prompt needs to think. Apply that level to the model request. |
| 147 | [l33tdawg/dsh-workbench](https://github.com/l33tdawg/dsh-workbench) | 0 | 2026-10-01 | 2026-10-03 | DeepSeek Harness Plugins |
| 148 | [lachowkinman-bot/PiDSH-Nexus](https://github.com/lachowkinman-bot/PiDSH-Nexus) | 0 | 2026-10-02 | 2026-10-02 | PiDSH Nexus · Universal Workbench 3.0 — 13 域企业工作台源码包（Tauri 桌面壳 + dsh 工作台插件 + 领域模型/工作流/契约），可在本机离线复现并继续迭代 |
| 149 | [laoye666-6/dsh-plugin-media-wallpaper](https://github.com/laoye666-6/dsh-plugin-media-wallpaper) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness 壁纸插件：图片/视频背景（GIF/APNG/动图WebP/PNG/JPEG/MP4/WebM），格式自动识别，压暗/亮度/模糊，界面色调跟随，逐组件透明化。纯客户端，一条指令安装。 |
| 150 | [lbqcgza/dsh-quota-usage](https://github.com/lbqcgza/dsh-quota-usage) | 0 | 2026-10-03 | 2026-10-03 | 在 DSH 侧边栏底部、用户名正上方显示 DeepSeek 账号剩余额度（总余额 + 赠金余额）的 Web 插件 |
| 151 | [littlefish04/dsh-turn-price](https://github.com/littlefish04/dsh-turn-price) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness (dsh) plugin: shows the CNY cost of every completed turn under the turn |
| 152 | [lolipop-1x1/dsh-you-should-know](https://github.com/lolipop-1x1/dsh-you-should-know) | 0 | 2026-10-03 | 2026-10-03 | A DeepSeek Harness plugin that surfaces important facts, trade-offs, and useful context while your AI agent works. |
| 153 | [Loliyer520/dsh-launcher-link](https://github.com/Loliyer520/dsh-launcher-link) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness launcher connection plugin: native sessions, full chat content and real-time WebSocket bridge |
| 154 | [louisyeaaah/dsh-receipt](https://github.com/louisyeaaah/dsh-receipt) | 0 | 2026-10-03 | 2026-10-03 | Turn one DSH session into a shareable receipt: duration, turns, tool calls, files touched, tokens. Read-only, redacted by default, zero dependencies. |
| 155 | [lovezi0/dsh-open-in-androidstudio](https://github.com/lovezi0/dsh-open-in-androidstudio) | 0 | 2026-10-03 | 2026-10-03 | dsh第三方插件：向会话（Session）头部工具栏的 **"Open In..."** 按钮组注册 **Android Studio** 目标，一键用本机 Android Studio打开当前会话的 workspace 目录。 |
| 156 | [lql341/deepseek-harness-linux-desktop](https://github.com/lql341/deepseek-harness-linux-desktop) | 0 | 2026-09-30 | 2026-10-03 | Unofficial Linux x64 (AppImage/deb) port patch set for the DeepSeek Harness desktop app, aiming at macOS-like behaviour |
| 157 | [ltmroberthk915/dsh-session-telecom](https://github.com/ltmroberthk915/dsh-session-telecom) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness session communication without vendored runtime dependencies |
| 158 | [lxchapu/dsh-session-purge](https://github.com/lxchapu/dsh-session-purge) | 0 | 2026-10-03 | 2026-10-03 | DSH（DeepSeek Harness）插件：把会话从磁盘上彻底删除。任意会话的「…」菜单里可删单条，侧边栏切到「仅显示已归档」时可一键删除全部已归档会话；两者都先弹二次确认，正在运行的会话会被拒绝删除。 |
| 159 | [lzyyzznl/dsh-prompt-tuner](https://github.com/lzyyzznl/dsh-prompt-tuner) | 0 | 2026-10-03 | 2026-10-03 | Composer prompt tuner for the DeepSeek Harness Web GUI: rewrites the input draft through a model you choose, with a review card, SSE streaming, and a settings page for model / reasoning effort / style / optimization prompt. |
| 160 | [maboloshi/dsh-ask-template](https://github.com/maboloshi/dsh-ask-template) | 0 | 2026-10-03 | 2026-10-03 | DSH 客户端插件 + 配套 skill：/ask 直接把五段结构化空白模板写进输入框草稿（零模型调用） |
| 161 | [majinggui/dsh-plugin-skill-manager](https://github.com/majinggui/dsh-plugin-skill-manager) | 0 | 2026-10-03 | 2026-10-03 | Skill management for the DeepSeek Harness Web client: scan user-level skill roots, list source and precedence, switch a skill off, edit SKILL.md, and install skills from documents or a GitHub link |
| 162 | [metaone01/dsh-better-float](https://github.com/metaone01/dsh-better-float) | 0 | 2026-10-02 | 2026-10-03 | Live DOM floating panels and screenshot overview for DeepSeek Harness Desktop |
| 163 | [metaone01/dsh-easy-hotkey](https://github.com/metaone01/dsh-easy-hotkey) | 0 | 2026-10-03 | 2026-10-03 | Window-local shortcut guide for DeepSeek Harness Desktop: hold-to-open overlay, keycap search, temporary pinning, light/dark themes, and bilingual UI. |
| 164 | [Missher12/Missher-Archive-DSH-Desktop](https://github.com/Missher12/Missher-Archive-DSH-Desktop) | 0 | 2026-08-13 | 2026-10-03 | 历史仓库（停止分发新版）：保留旧下载与 PR；当前 Intel Mac / Ubuntu 桌面和插件见主页链接。 |
| 165 | [Missher12/Missher-Archive-DSH-Enhance](https://github.com/Missher12/Missher-Archive-DSH-Enhance) | 0 | 2026-09-14 | 2026-10-03 | Independent enhancement bundle for DeepSeek Harness: usage, sessions, model helpers, documents and piano navigation. |
| 166 | [Missher12/Missher-DSH-Brain](https://github.com/Missher12/Missher-DSH-Brain) | 0 | 2026-09-14 | 2026-10-03 | Shared, bounded recall coordination for DeepSeek Harness Memory and MSE providers.；桌面入口与其他插件见主页链接。 |
| 167 | [Missher12/Missher-DSH-Evolution](https://github.com/Missher12/Missher-DSH-Evolution) | 0 | 2026-08-24 | 2026-10-03 | Privacy-bounded self-improvement plugin for DeepSeek Harness；桌面入口与其他插件见主页链接。 |
| 168 | [Missher12/Missher-DSH-Memory](https://github.com/Missher12/Missher-DSH-Memory) | 0 | 2026-08-23 | 2026-10-03 | Project-scoped reviewed long-project memory for DeepSeek Harness；桌面入口与其他插件见主页链接。 |
| 169 | [Missher12/Missher-DSH-Project-Ops](https://github.com/Missher12/Missher-DSH-Project-Ops) | 0 | 2026-08-27 | 2026-10-03 | Scoped project task discovery and execution receipts for DeepSeek Harness；桌面入口与其他插件见主页链接。 |
| 170 | [mixx993/dsh-forcnfps](https://github.com/mixx993/dsh-forcnfps) | 0 | 2026-10-03 | 2026-10-03 | ForCNFps: pixel-art FPS warm-up arcade for DeepSeek Harness (dsh) — Schulte / Aim trainer / CS angle-holding, with CS2 &amp; Valorant sensitivity conversion |
| 171 | [mostkia/dsh-launcher](https://github.com/mostkia/dsh-launcher) | 0 | 2026-10-03 | 2026-10-03 | Power controls (shutdown / restart) for the DSH sidebar plus a Windows tray launcher with start-at-logon. |
| 172 | [moxiaoren/dsh-xiaoyiwork-connect](https://github.com/moxiaoren/dsh-xiaoyiwork-connect) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness plugin: reuse the signed-in XiaoyiWork desktop app's local model proxy. Windows only. |
| 173 | [mvalentsev/dsh-wsl-projects](https://github.com/mvalentsev/dsh-wsl-projects) | 0 | 2026-10-02 | 2026-10-03 | One DeepSeek Harness web server per project, inside WSL2 — started, stopped and opened from a panel in the Windows app. |
| 174 | [MYX-0211/dsh-sidebar-image-zoom](https://github.com/MYX-0211/dsh-sidebar-image-zoom) | 0 | 2026-10-03 | 2026-10-03 | Pointer-anchored wheel zoom and drag-to-pan for images in the DeepSeek Harness right sidebar. Replaces the built-in image viewport. |
| 175 | [myYangyunfan/dsh-deepisland](https://github.com/myYangyunfan/dsh-deepisland) | 0 | 2026-10-03 | 2026-10-03 | DSH 智能体灵动岛：macOS 刘海 / Windows Fluent 双端兼容，实时显示 Agent 思考、工具调用与子代理并行状态 |
| 176 | [N3kOk0/dsh-acrylic](https://github.com/N3kOk0/dsh-acrylic) | 0 | 2026-10-03 | 2026-10-03 | Deepseek Harness Windows 10 Theme |
| 177 | [nikitafedorov008/dsh-flutter-tools](https://github.com/nikitafedorov008/dsh-flutter-tools) | 0 | 2026-10-03 | 2026-10-03 | Flutter panel for the DeepSeek Harness sidebar: devices, launch, VM Service controls, debug toggles, embedded DevTools, memory and profiling |
| 178 | [oopsdoes/dsh-welcome-back](https://github.com/oopsdoes/dsh-welcome-back) | 0 | 2026-10-03 | 2026-10-03 | A DSH plugin that welcomes users back to today's active conversations after a configurable idle period. |
| 179 | [ouransishen/dsh-identity](https://github.com/ouransishen/dsh-identity) | 0 | 2026-10-03 | 2026-10-03 | DSH agent 自身身份（did:web + X.509）的器官化出入口 |
| 180 | [panando/dsh-pua](https://github.com/panando/dsh-pua) | 0 | 2026-10-03 | 2026-10-03 | DSH PUA 修订版（基于 @michengai/dsh-pua v0.3.22）：解除上游全局总闸，让「入口常显」与「功能默认关闭」共存——输入栏菜单一键开关 PUA，界面紧凑化。 |
| 181 | [qianai05233/dsh-codex-panel](https://github.com/qianai05233/dsh-codex-panel) | 0 | 2026-10-03 | 2026-10-03 | Floating control panel for DSH: one-tap approval for git &amp; GitHub write tools |
| 182 | [qianai05233/dsh-codex-preset](https://github.com/qianai05233/dsh-codex-preset) | 0 | 2026-10-03 | 2026-10-03 | Codex-mode agent preset for DSH: explore → plan → implement → verify → integrate |
| 183 | [qianai05233/dsh-freeapi-panel](https://github.com/qianai05233/dsh-freeapi-panel) | 0 | 2026-10-03 | 2026-10-03 | Free-API aggregator panel for DSH: 29 legit free LLM providers with automatic failover |
| 184 | [rocketstar666/dsh-approval-comment](https://github.com/rocketstar666/dsh-approval-comment) | 0 | 2026-10-03 | 2026-10-03 | fork and fix from MaYiFei1995/dsh-approval-comment |
| 185 | [RoseSamaras/reaudit-ai-plugin](https://github.com/RoseSamaras/reaudit-ai-plugin) | 0 | 2026-03-04 | 2026-10-03 | Official Reaudit plugin for Cursor and Claude Code. AI Search Visibility Platform - track, optimize, and grow your brand presence across 11 AI engines. |
| 186 | [sailoumili/dsh-file-opener](https://github.com/sailoumili/dsh-file-opener) | 0 | 2026-10-03 | 2026-10-03 | DSH 插件：对话里的文件与目录路径点一下就打开——可预览的在右侧侧边栏显示，其余用系统默认程序打开。Click file and directory paths in DSH chat to preview them in the right sidebar or open them with the system default application. |
| 187 | [seaison/dsh-eva-ui](https://github.com/seaison/dsh-eva-ui) | 0 | 2026-10-03 | 2026-10-03 | EVA / MAGI 主题皮肤：把 NERV 中央教条区的界面语言装进 DSH Web GUI（--dsw-* 令牌层覆盖 + CRT 装饰层） |
| 188 | [t2094308-star/dsh-agent-contract](https://github.com/t2094308-star/dsh-agent-contract) | 0 | 2026-10-03 | 2026-10-03 | DSH 多智能体契约工作流引擎：契约注入 / 按角色委派 / 台账与审计 / 文档治理与索引 / 面板。 |
| 189 | [Totoro-qaq/dsh-jot](https://github.com/Totoro-qaq/dsh-jot) | 0 | 2026-10-03 | 2026-10-03 | Human-editable notes, todos and documents for DeepSeek Harness, with search, tables, attachments, export and optional agent collaboration. |
| 190 | [TowardsDawn/dsh-plugin-source-link](https://github.com/TowardsDawn/dsh-plugin-source-link) | 0 | 2026-09-30 | 2026-10-03 | 显示插件来源 |
| 191 | [tuoLuoSuan/dsh-peak-badge](https://github.com/tuoLuoSuan/dsh-peak-badge) | 0 | 2026-10-03 | 2026-10-03 | Peak / off-peak billing badge for the DeepSeek API - click to see which rate you are on right now. A DSH plugin. |
| 192 | [uniwell9797/dsh-voice-f9](https://github.com/uniwell9797/dsh-voice-f9) | 0 | 2026-10-03 | 2026-10-03 | Global hold-to-talk voice input for Windows, driven by a local SenseVoice model via sherpa-onnx. Hold F9 to speak in any application, release to insert the text at the caret; no network, no GPU. |
| 193 | [Very12345/dsh-skill-manager](https://github.com/Very12345/dsh-skill-manager) | 0 | 2026-10-03 | 2026-10-03 | DSH 技能管理：多来源安装、完整资源、更新合并和可回退历史 |
| 194 | [War-God0108/dsh-dt-bg](https://github.com/War-God0108/dsh-dt-bg) | 0 | 2026-10-03 | 2026-10-03 | DSH 背景替换插件 v2：给 DeepSeek Harness 桌面端换上图片/纯色壁纸，并让侧边栏、内容区、输入框一起透出壁纸（自动挂载，装完即用） |
| 195 | [WhatCannotBeSaid/dsh-disable-unofficial-plugins](https://github.com/WhatCannotBeSaid/dsh-disable-unofficial-plugins) | 0 | 2026-10-03 | 2026-10-03 | A "Disable unofficial plugins…" button for the DSH Plugins page: it opens a checklist of the unofficial plugins in the current direction (all checked by default) and toggles only the ones you keep checked. Once everything is off it flips to enabling them again. Never uninstalls. |
| 196 | [winniesi/dsh-hide-sidebar](https://github.com/winniesi/dsh-hide-sidebar) | 0 | 2026-10-03 | 2026-10-03 | Mobile left sidebar for the DeepSeek Harness Web GUI: the 56px collapsed rail becomes a top toggle button that slides the sidebar in over the content. |
| 197 | [WONGIII/dsh-expose](https://github.com/WONGIII/dsh-expose) | 0 | 2026-10-03 | 2026-10-03 | Publish a running DeepSeek Harness (DSH) instance to the LAN or the public internet: pick a bind address and port, flip one switch, and copy the remote URL. |
| 198 | [WovenJunct/dsh-plugin-power-button](https://github.com/WovenJunct/dsh-plugin-power-button) | 0 | 2026-10-02 | 2026-10-03 | 一键直接关闭或者重新启动dsh，适用于Windows  dsh桌面端（版本 0.2.0-rc.2 ） |
| 199 | [wwwyxsuper/dsh-session-purge](https://github.com/wwwyxsuper/dsh-session-purge) | 0 | 2026-10-03 | 2026-10-03 | DSH 插件：在侧栏「已归档」会话的 ⋯ 菜单里彻底删除会话（日志 + 投影缓存 + 工作区登记；二次确认；五道安全闸门）。DSH plugin: permanently delete a session straight from the archived list. |
| 200 | [XG221B/dsh-deepseek-status](https://github.com/XG221B/dsh-deepseek-status) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness plugin: a peak/off-peak billing indicator and a live account balance beside the composer. Both self-updating, both credential-free. |
| 201 | [xia0x1/dsh-ExitOnClose](https://github.com/xia0x1/dsh-ExitOnClose) | 0 | 2026-10-03 | 2026-10-03 | DeepSeek Harness Desktop plugin:click × let window closes, every DSH process is gone |
| 202 | [xs1023/dsh-memory-vault](https://github.com/xs1023/dsh-memory-vault) | 0 | 2026-10-03 | 2026-10-03 | DSH 外置记忆库插件（修复分支）— SQLite 长期记忆、分层压缩、搜索与归档 |
| 203 | [yang208691-source/dsh-nutstore-backup](https://github.com/yang208691-source/dsh-nutstore-backup) | 0 | 2026-10-03 | 2026-10-03 |  en: 'Backs up DeepSeek Harness sessions, plugin config and workspace memory to Nutstore (Jianguoyun) over WebDAV, with incremental upload, connection test and one-click restore on a new machine.'   zh: '把 DeepSeek Harness 的会话记录、插件配置与工作区记忆通过 WebDAV 增量备份到坚果云，支持连接测试与在新机器上一键恢复。' |
| 204 | [Yelj20001223/dsh-plugin-session-delete](https://github.com/Yelj20001223/dsh-plugin-session-delete) | 0 | 2026-10-03 | 2026-10-03 | Permanently delete DSH conversations from the web GUI session row menu: batch selection, running-turn refusal, and automatic switch away from a deleted chat |
| 205 | [YizhouLouisLu/dsh-math-copy](https://github.com/YizhouLouisLu/dsh-math-copy) | 0 | 2026-10-02 | 2026-10-03 | Copy rendered math in the DSH Web UI as its LaTeX source instead of KaTeX's glyph text. |
| 206 | [YMRwithNoworry/dsh-prompt-optimizer](https://github.com/YMRwithNoworry/dsh-prompt-optimizer) | 0 | 2026-10-03 | 2026-10-03 | A general-purpose prompt optimizer plugin for DeepSeek Harness: turn a casual composer draft into a clear, structured, executable prompt — reviewed by the user, written back to the draft, and never sent automatically. |
| 207 | [yue-xiaxing/dsh-chang-kaishen-mode](https://github.com/yue-xiaxing/dsh-chang-kaishen-mode) | 0 | 2026-10-03 | 2026-10-03 | 常凯申模式：纯娱乐向的 DSH 人物饰演开关。开关位于「设置 → 通用」；本插件的代码与发布流程全部由 AI 完成。 |
| 208 | [YuMo-233/dsh-subagent-model-switch](https://github.com/YuMo-233/dsh-subagent-model-switch) | 0 | 2026-10-03 | 2026-10-03 | DSH ??:???/?????????????--??????????,????? turn ????? |
| 209 | [yunliya-cuter/dsh-warm-ui](https://github.com/yunliya-cuter/dsh-warm-ui) | 0 | 2026-09-30 | 2026-10-03 | DSH Web GUI 暖色主题 + 液态玻璃材质 + 输入栏工具行整形（客户端插件包） |
| 210 | [zws20070309/dsh-dispatch-agent-team](https://github.com/zws20070309/dsh-dispatch-agent-team) | 0 | 2026-10-03 | 2026-10-03 | 调度模式（dispatch-mode）agent preset + 智能体团队插件 for DeepSeek Harness：12 类队员角色、共享队员卡（缓存友好）、report_result 结构化汇报、wake_teammate、缓存保活、会话级团队开关记忆。一条命令安装：node tools/install.cjs |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- baidd1011/dsh-code-impact
- ChisaAlter/Deepseek-Harness-Desktop
- DuJunxi1993/dsh-swiftUI
- easerlee/dsh-session-handoff
- l33tdawg/dsh-workspace-mcp
- Missher12/deepseek-harness-desktop
- Missher12/dsh-missher-brain
- Missher12/dsh-missher-enhance
- Missher12/dsh-missher-evolution
- Missher12/dsh-missher-memory
- Missher12/dsh-project-ops
- MistyBridge/dsh-agent-bus
- rasyidmmz/dsh-ai-memory
- rasyidmmz/dsh-paper-search
- w1661884010-jpg/dsh-plugin-feibi-pet
- w1661884010-jpg/dsh-plugin-github-market
- XG221B/dsh-peak-price
- yeastcloud/dsh-anchor
- yuloong07-star/dsh-usb
- zkforge/dsh-ccd-style
- Zomcxj/dsh-desktop
