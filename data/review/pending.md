# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-02**
- 快照日期 / Snapshot date: **2026-09-02 (UTC)**
- 待审核 / Pending: **326**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **12**
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

对比上一份快照 **2026-09-01** / vs previous snapshot **2026-09-01**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **2**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | 待审 / pending | 6989 | — | 865 | 1087d | 待审高星 | 核准即 Top 2 |
| ⚠️ [Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report](https://github.com/Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report) | 待审 / pending | 1029 | -6 | 63 | 16d | 待审高星 | 核准即 Top 13 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) ⚠️ | 6989 | 2023-09-10 | 2026-09-02 |  Memory library for building stateful agents |
| 2 | [Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report](https://github.com/Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report) ⚠️ | 1029 | 2026-08-16 | 2026-09-02 | GLM-5.3-Flash × J-Space capability realization — benchmark presentation of the J-Space Cognition Suite |
| 3 | [xing-shuyin/pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) | 84 | 2026-08-04 | 2026-09-02 | dsh / pi-agent web ui |
| 4 | [SiriusNEO/StarAgent](https://github.com/SiriusNEO/StarAgent) | 56 | 2026-05-29 | 2026-09-02 | Lightweight agent multiplexer, all in one Web dashboard  |
| 5 | [huaweicloud/huaweicloud-devkit](https://github.com/huaweicloud/huaweicloud-devkit) | 19 | 2026-07-28 | 2026-09-02 |  Official Huawei Cloud plugin for AI agents — skills, MCP tools, safety guardrails, and cloud sandbox to help AI agents build, deploy, and operate on Huawei Cloud securely. |
| 6 | [goatliamia/dsh-runtime-react](https://github.com/goatliamia/dsh-runtime-react) | 7 | 2026-08-31 | 2026-09-02 | 不要让 Model 为确定性问题反复思考，也不要让 Harness 为不确定的问题假装知道答案 |
| 7 | [Gru110110110/dsh-launcher](https://github.com/Gru110110110/dsh-launcher) | 4 | 2026-08-16 | 2026-09-02 | 让 DeepSeek Harness 人人可用的桌面入口——不用 Node、不用命令行，双击即用，还无损跟随每次官方更新。支持MacOs和Windows。DeepSeek Harness, for everyone. No Node.js. No command line. Just double-click and go. Always in step with every official update. For macOS & Windows. |
| 8 | [yohanchen1/MathModelingAgent](https://github.com/yohanchen1/MathModelingAgent) | 4 | 2025-08-11 | 2026-09-02 | Closed-loop scientific modeling agent with evidence-backed verification and reproducible correction. |
| 9 | [Kevin66Z0/dsh-telegram](https://github.com/Kevin66Z0/dsh-telegram) | 3 | 2026-08-28 | 2026-09-02 | Remote-control DeepSeek Harness from Telegram: stream replies, one-tap keyboards, whitelist-secured, zero inbound ports. |
| 10 | [snzhi000-sys/harness-macos-desktop-plugin-suite](https://github.com/snzhi000-sys/harness-macos-desktop-plugin-suite) | 3 | 2026-08-31 | 2026-09-02 | 基于 DeepSeek‑Harness 的 macOS 桌面定制客户端，在基座之上完成原生打包运行；内置多款自研、经过迭代优化的办公插件，适配产品经理轻度开发、PRD 文档撰写等办公场景。⚠️本项目属于社区第三方项目，非 DeepSeek 官方出品。 |
| 11 | [taoshi1999/dsh-workspace-hygiene](https://github.com/taoshi1999/dsh-workspace-hygiene) | 3 | 2026-09-02 | 2026-09-02 | DeepSeek Harness plugin for agent workspace hygiene: artifact value assessment, metadata indexing, and auditable cleanup. |
| 12 | [wbin0001/dsh-comfyui-canvas](https://github.com/wbin0001/dsh-comfyui-canvas) | 3 | 2026-08-31 | 2026-09-02 | DSH+ComfyUI画布插件dsh-comfyui-canvas embeds your ComfyUI instance as a split-screen canvas inside DeepSeek Harness Web. The agent writes prompts and edits nodes right in chat, applies them live to the canvas you're watching, and turns ideas into images, video, and 3D — all without switching front-ends. |
| 13 | [10086ggqq/dsh_theme_Minecraft](https://github.com/10086ggqq/dsh_theme_Minecraft) | 2 | 2026-09-02 | 2026-09-02 | 把 DeepSeek Harness 变成 Minecraft Java Edition 风格——WebGL 旋转全景主菜单、存档式会话选择、四种游戏模式对应 Agent 预设、世界内 HUD 聊天台、像素风工具卡片与审批面板、AI 思考时触发跑酷小游戏、8-bit 合成音效与自定义背景音乐、五类互动桌宠与红石粒子特效。零侵入 DSH 核心源码，经典界面一键切回。 |
| 14 | [mikasaxin529/dsh-nightshift](https://github.com/mikasaxin529/dsh-nightshift) | 2 | 2026-09-02 | 2026-09-02 | Off-peak task queue plugin for DeepSeek Harness — queue at peak price, drain at night, read the savings report |
| 15 | [pax-beehive/dsh-hub-cli](https://github.com/pax-beehive/dsh-hub-cli) | 2 | 2026-08-25 | 2026-09-02 | Open-source CLI, schemas, resolver, and DSH agent tools for DSH Plugin Hub |
| 16 | [yhfgyyf/dsh-audit-mode](https://github.com/yhfgyyf/dsh-audit-mode) | 2 | 2026-08-23 | 2026-09-02 | Guardian preset for DeepSeek Harness with independent persistent Codex auditing |
| 17 | [better-er/dsh-write-create-only](https://github.com/better-er/dsh-write-create-only) | 1 | 2026-09-01 | 2026-09-02 | write 仅创建：禁止 write 覆盖已存在文件，目标已存在时自动拒绝并提示改用 edit，防止模型误覆写已有内容。纯 host 端 dsh 插件。 |
| 18 | [better-er/dsh-write-rule-guard](https://github.com/better-er/dsh-write-rule-guard) | 1 | 2026-09-02 | 2026-09-02 | dsh 插件：按可配置正则规则拦截 edit/write 的写入内容，默认拦全角括号，host 单半身经 cordis 配置注入。 |
| 19 | [crazy-L118/dsh-personalization](https://github.com/crazy-L118/dsh-personalization) | 1 | 2026-08-28 | 2026-09-02 | A personalization plugin for DeepSeek Harness |
| 20 | [cxy9204/dsh-skill-store](https://github.com/cxy9204/dsh-skill-store) | 1 | 2026-09-02 | 2026-09-02 | DeepSeek Harness 社区技能商店：浏览、搜索并一键安装来自 SkillHub / ClawHub / GitHub 的 13 万+ Agent Skills，支持星标排序与中文分类 |
| 21 | [DaYanQLQ/DSH-Balance-Mini](https://github.com/DaYanQLQ/DSH-Balance-Mini) | 1 | 2026-09-01 | 2026-09-02 | DeepSeek Harness 的极简版余额监视器插件：常驻余额徽章、红绿灯配色、多供应商、高峰/空闲时段。 |
| 22 | [DaYanQLQ/DSH-Shortcut](https://github.com/DaYanQLQ/DSH-Shortcut) | 1 | 2026-09-01 | 2026-09-02 | DeepSeek Harness 的 Windows 桌面快捷方式工具：双击智能启动/唤起、浏览器打开前自动最小化、崩溃一键重装救援（不删用户数据）。圆角官方图标，纯 PowerShell 零依赖。 |
| 23 | [DaydreAmRing/dsh-cho-kaguya-plugin-public](https://github.com/DaydreAmRing/dsh-cho-kaguya-plugin-public) | 1 | 2026-09-02 | 2026-09-02 | DSH皮肤插件、有超时空辉夜姬概念元素 |
| 24 | [FomoGoMan/dsh-serena-guide](https://github.com/FomoGoMan/dsh-serena-guide) | 1 | 2026-09-02 | 2026-09-02 | A DeepSeek Harness plugin that steers agents to Serena's LSP symbolic tools over built-in code tools. |
| 25 | [frank-fan-818/dsh-f1-skin](https://github.com/frank-fan-818/dsh-f1-skin) | 1 | 2026-09-01 | 2026-09-02 | An F1 Race Control themed skin for the DeepSeek Harness Web UI — Red Bull, Ferrari, McLaren & Mercedes team themes, broadcast-photo backdrops, and a native settings panel, in dark and light. |
| 26 | [gbeta/dsh-token-speed](https://github.com/gbeta/dsh-token-speed) | 1 | 2026-09-02 | 2026-09-02 | DSH web plugin: draggable ring gauge showing live model output speed (tok/s) with per-step detail panel |
| 27 | [hotpot-labs/dsh-version-plugin](https://github.com/hotpot-labs/dsh-version-plugin) | 1 | 2026-08-28 | 2026-09-02 | 展示dsh版本，提供更新到最新版按钮 |
| 28 | [hoyyang/dsh-concise](https://github.com/hoyyang/dsh-concise) | 1 | 2026-09-02 | 2026-09-02 | One-click Concise output style for DeepSeek Harness: results first, no filler — Claude Code's built-in Concise style as a dsh plugin. Toggle right of the model picker, global, persistent, zero-config. |
| 29 | [huhaodong/dsh-auto-driving](https://github.com/huhaodong/dsh-auto-driving) | 1 | 2026-09-02 | 2026-09-02 | 让 DeepSeek Harness 智能体进入自动驾驶 🚗：模型故障自动回退、静默卡死自动保活重试、权限/提问/方案审批自动放行，AUTO-MODE.md 全程审计——无人值守、永不停摆的自愈式 AI 编码会话。 |
| 30 | [JerryXst/dsh-codex-web-auth](https://github.com/JerryXst/dsh-codex-web-auth) | 1 | 2026-09-01 | 2026-09-02 | ChatGPT / Codex browser sign-in for DeepSeek Harness's built-in openai-codex provider — no OpenAI API key required. |
| 31 | [keman-ai/dsh-pocket](https://github.com/keman-ai/dsh-pocket) | 1 | 2026-09-02 | 2026-09-02 | Watch and steer your DSH agent from a phone browser: approve tool calls, send a message, stop a turn |
| 32 | [LiLiLi-Zi/dsh-gray-test](https://github.com/LiLiLi-Zi/dsh-gray-test) | 1 | 2026-09-02 | 2026-09-02 | dsh gray-model detection plugin — launch N concurrent sessions, stream reasoning chains, auto-classify gray models (I'm+ing > Let me×5), normal models (Let me≥3), and abnormal models (no features). Supports standard/PTC/minimal/cordis presets. |
| 33 | [LouisCanBe/dsh-plugin-ollama-monitor](https://github.com/LouisCanBe/dsh-plugin-ollama-monitor) | 1 | 2026-09-02 | 2026-09-02 | Ollama 监控与测评平台 · DeepSeek Harness (DSH) 插件组合包：agent 工具 + Web 设置页面板（npm: ollama-monitor） |
| 34 | [lrplrplrp/dsh-live2d](https://github.com/lrplrplrp/dsh-live2d) | 1 | 2026-09-01 | 2026-09-02 | deepseek-harness对live2d的支持 |
| 35 | [mapan0424/deepseek-harness-plugins](https://github.com/mapan0424/deepseek-harness-plugins) | 1 | 2026-09-02 | 2026-09-02 | Unofficial community plugins collection for DeepSeek Harness |
| 36 | [MerlinShieh/Agent-skill-wechatPush](https://github.com/MerlinShieh/Agent-skill-wechatPush) | 1 | 2026-08-03 | 2026-09-02 | Agent skill，当任务完成时会主动通过微信公众号推送洗洗脑 |
| 37 | [myYangyunfan/dsh_cardian](https://github.com/myYangyunfan/dsh_cardian) | 1 | 2026-09-01 | 2026-09-02 | cardian — DeepSeek Harness knowledge-center plugin: RepoWiki notes / flashcards / memory in a local Obsidian vault |
| 38 | [ohmejj/dsh-chat-archive](https://github.com/ohmejj/dsh-chat-archive) | 1 | 2026-08-28 | 2026-09-02 | 自动归档 DeepSeek Harness 对话记录 |
| 39 | [qfwycn/dsh-media-serve](https://github.com/qfwycn/dsh-media-serve) | 1 | 2026-09-02 | 2026-09-02 | 用于在deepseek harness上直接暴露工作区的文件，使大肥鱼能够直接显示他想给你显示的图片等信息，解决了大肥鱼老是说自己显示不了图片，要你去看本地文件的问题。在过验证码或截图的时候极为有用。 |
| 40 | [QuantumKuba/dsh-continuum](https://github.com/QuantumKuba/dsh-continuum) | 1 | 2026-09-02 | 2026-09-02 | Durable project state and checkpoint engine for DeepSeek Harness (DSH). Prevents context exhaustion in long-running multi-agent workflows by persisting tasks, evidence, and checkpoints to disk. |
| 41 | [Roxy-gl373/dsh-desktop](https://github.com/Roxy-gl373/dsh-desktop) | 1 | 2026-09-02 | 2026-09-02 | DSh Whale · DeepSeek Harness 桌面启动器：WebView2 内嵌 DSH 界面，实时日志、单实例托盘、多开、等比缩放，装插件自动快照回滚。install.cmd 一键配置。 |
| 42 | [runcat-tommy/dsh-chinese-poetry](https://github.com/runcat-tommy/dsh-chinese-poetry) | 1 | 2026-09-02 | 2026-09-02 | A token-free Chinese classical poetry plugin for DeepSeek Harness Web: search, filters, Feihua, daily poem, favorites, and AI explain. Powered by the free public chinese-poetry-api. |
| 43 | [says693/dsh-composer-dynamic-island](https://github.com/says693/dsh-composer-dynamic-island) | 1 | 2026-09-02 | 2026-09-02 | Compact DSH Web composer island with a Community v0.15 host manifest and no user-defined button positioning. |
| 44 | [sogoodayo/dsh-code-ui](https://github.com/sogoodayo/dsh-code-ui) | 1 | 2026-09-01 | 2026-09-02 | Cursor 风格的 AI 代码编辑器工作台插件（DSH）：文件树、多标签页编辑、引用/备注/翻译、内嵌 AI 输入框、语法高亮 |
| 45 | [victor10035445/dsh-v-explorer](https://github.com/victor10035445/dsh-v-explorer) | 1 | 2026-09-02 | 2026-09-02 | right slider for deepseek-harness-plugin. |
| 46 | [victor10035445/dsh-v-skill-links](https://github.com/victor10035445/dsh-v-skill-links) | 1 | 2026-09-02 | 2026-09-02 | let dsh use your skills.quick command and diy buttons. |
| 47 | [victor10035445/dsh-v-theme](https://github.com/victor10035445/dsh-v-theme) | 1 | 2026-09-02 | 2026-09-02 | theme plugin for deepseek harness by victor |
| 48 | [VioletScar-Hui/dsh-chat-history](https://github.com/VioletScar-Hui/dsh-chat-history) | 1 | 2026-09-02 | 2026-09-02 | 给 DSH 聊天输入框加上 CLI 风格历史记忆：上下键召回之前发送过的内容（纯客户端插件，重启不丢） |
| 49 | [XINY11451/dsh-wsl](https://github.com/XINY11451/dsh-wsl) | 1 | 2026-08-26 | 2026-09-02 | A model-facing WSL tool plugin for DeepSeek Harness (DSH). It lets an agent run Linux commands through wsl.exe directly — no hand-written .sh scripts or pwsh wrappers. |
| 50 | [yindf/taskfold](https://github.com/yindf/taskfold) | 1 | 2026-09-02 | 2026-09-02 | Keeps long coding-agent sessions lean: wrap work in named tasks and, when one is done, fold its whole span into a short titled summary. The conversation stays readable, context costs stay low, and every fold's original content can be read back on demand. For [DeepSeek Harness](https://www.npmjs.com/package/@deepseek-ai/dsh) (DSH). |
| 51 | [z-y-q/dsh-mcp-security](https://github.com/z-y-q/dsh-mcp-security) | 1 | 2026-09-02 | 2026-09-02 | dsh-mcp-security |
| 52 | [01Virex/dsh-deepshub](https://github.com/01Virex/dsh-deepshub) | 0 | 2026-09-02 | 2026-09-02 | Pornhub-style parody reskin for the DeepSeek Harness web UI — orange/black pill-button theme, "Deephub" wordmark, 18+ entry gate & HD badges. Pure meme, no explicit content. |
| 53 | [1010n111/dsh-about](https://github.com/1010n111/dsh-about) | 0 | 2026-09-02 | 2026-09-02 | 为 DeepSeek Harness Web 设置面板添加“关于”页，展示当前运行的 DSH 版本、插件版本与项目主页。 |
| 54 | [1710782766/dsh-browser-verify](https://github.com/1710782766/dsh-browser-verify) | 0 | 2026-09-02 | 2026-09-02 | Browser verification for DeepSeek Harness — open, mock, assert, screenshot in a few tool calls, screenshots auto-project into the model context |
| 55 | [2092372408-pixel/dsh-roadmap-board](https://github.com/2092372408-pixel/dsh-roadmap-board) | 0 | 2026-09-02 | 2026-09-02 | 人机共享的执行路线图看板：横向阶段→步骤、技能绑定、实时同步、跨项目复用（Human-AI shared execution roadmap board for DSH） |
| 56 | [782042369/dsh-model-compat-guard](https://github.com/782042369/dsh-model-compat-guard) | 0 | 2026-09-01 | 2026-09-02 | DSH (DeepSeek Harness) compatibility guard plugin: fixes reasoning-model compaction truncation, doomed sandbox-escalation fail-close, and missing tool description for GPT/Qwen/third-party models |
| 57 | [a792883583/dsh-smart-reminder](https://github.com/a792883583/dsh-smart-reminder) | 0 | 2026-09-02 | 2026-09-02 | Smart calendar reminder & schedule assistant for DSH Web GUI: lunar calendar, holidays, system notifications on macOS/Windows, and WeCom/platform push integration. |
| 58 | [aijunjiang/dsh-remote-ssh](https://github.com/aijunjiang/dsh-remote-ssh) | 0 | 2026-09-02 | 2026-09-02 | Run your DSH workspace on a remote host over SSH - connection sidebar, remote directory browser, per-session routing, agent ssh_exec/route-status; files and commands execute on your target while sessions, GUI and $DSH_HOME stay local. |
| 59 | [alenhu2005/dsh-usage-export](https://github.com/alenhu2005/dsh-usage-export) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness plugin for token usage cost, PDF/Markdown transcript export, and expanded conversation statistics. |
| 60 | [ash-qw/dsh-theme-prts](https://github.com/ash-qw/dsh-theme-prts) | 0 | 2026-08-31 | 2026-09-02 | Unofficial personal non-commercial Arknights P.R.T.S. fan UI for DeepSeek Harness |
| 61 | [cczzyy-cn/dsh-ui-screenshot](https://github.com/cczzyy-cn/dsh-ui-screenshot) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness 的 Web 插件：在输入框添加截图按钮，截屏并作为草稿图片插入，仅当模型支持视觉时显示。 |
| 62 | [cczzyy-cn/subagent-model-picker](https://github.com/cczzyy-cn/subagent-model-picker) | 0 | 2026-09-02 | 2026-09-02 | 让主会话模型从「已配置模型」里自主选择子代理运行模型，并把选定路由通过 ctx.subagents 的 request.agentOptions.provider/model 显式覆盖到子代理上。 |
| 63 | [chucan1/dsh-plugin-xt-memory](https://github.com/chucan1/dsh-plugin-xt-memory) | 0 | 2026-09-01 | 2026-09-02 | Cross-session self-learning memory for DeepSeek Harness, ported from XT-AGENT packages/memory. BM25 relevance injection + background extraction (sanitize/dedupe/merge) + lifecycle archive + memory_read/memory_search/memory_write tools. |
| 64 | [CMD128/dsh-wx-bridge](https://github.com/CMD128/dsh-wx-bridge) | 0 | 2026-09-02 | 2026-09-02 | 微信桥接 DSH 插件：扫码绑定官方 ClawBot（iLink 协议），私聊驱动 DeepSeek Harness 会话 — WeChat bridge plugin for DSH |
| 65 | [cndn/dsh-d1](https://github.com/cndn/dsh-d1) | 0 | 2026-09-02 | 2026-09-02 | Cloudflare D1 tools for the DeepSeek Harness (dsh): read-only first, approval-gated writes, zero runtime dependencies |
| 66 | [CultOfLuna/dsh-vision-autoswitch](https://github.com/CultOfLuna/dsh-vision-autoswitch) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek 的"自动挡"：有图切 Vision，无图回 Pro/Flash，一键都不用点。 DeepSeek's "automatic transmission": image in → Vision, image out → back to Pro/Flash — not a single click. |
| 67 | [d4551/DeepTail](https://github.com/d4551/DeepTail) | 0 | 2026-09-01 | 2026-09-02 | A Tauri 2 client — desktop, iOS, and Android — that connects to DeepSeek Harness hosts and gives you one control plane over the agent sessions running on all of them. |
| 68 | [du-u-uck/DSH-Transparent-UI-Plugin](https://github.com/du-u-uck/DSH-Transparent-UI-Plugin) | 0 | 2026-09-01 | 2026-09-02 | DeepSeek Harness UI Aqua玻璃质感主题主题，在原作者基础上对“0.1.1-rc.2”版本进行适配 |
| 69 | [EIGHTfs/dsh-git-push](https://github.com/EIGHTfs/dsh-git-push) | 0 | 2026-08-18 | 2026-09-02 | DSH git 自动提交推送插件：扫描仓库 + 一键 commit/push（工具 + HTTP API） |
| 70 | [ewceniza9009/wilsonix-studio](https://github.com/ewceniza9009/wilsonix-studio) | 0 | 2026-09-01 | 2026-09-02 | AI-powered desktop DAW - stem separation, chord detection, karaoke |
| 71 | [Exaggarate/dshpkg](https://github.com/Exaggarate/dshpkg) | 0 | 2026-09-02 | 2026-09-02 | Security & health audit CLI for DeepSeek Harness (DSH) plugins — npm audit for the everything-is-a-plugin era. Search, info, security-scan, doctor. stdlib-only. |
| 72 | [fan56/dsh-cron](https://github.com/fan56/dsh-cron) | 0 | 2026-08-31 | 2026-09-02 | Cron scheduling for the DeepSeek Harness — bounded tasks with calendar & interval rules, delivered to live agents |
| 73 | [freerpa/Hrequest](https://github.com/freerpa/Hrequest) | 0 | 2026-09-02 | 2026-09-02 | 轻量级 Node.js 多线程 API 压测工具，支持代理轮询、请求参数随机化注入和实时进度监控。 |
| 74 | [geecraft23/dsh-turn-colors](https://github.com/geecraft23/dsh-turn-colors) | 0 | 2026-09-02 | 2026-09-02 | Color-code user prompts and final assistant replies by conversation turn in the DeepSeek Harness Web UI. |
| 75 | [gongyijie85/dsh-agent-frugality](https://github.com/gongyijie85/dsh-agent-frugality) | 0 | 2026-08-29 | 2026-09-02 | Multi-agent frugality defense plugin for DeepSeek Harness: read-ledger dedup, compaction-immune rules, completion gate, cheap-review lane. |
| 76 | [GooDAnDReaDY/dsh-agent-loop-guard](https://github.com/GooDAnDReaDY/dsh-agent-loop-guard) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness runtime guard for tool-call and assistant-output loops |
| 77 | [hotpot-labs/dsh-notifier-plugin](https://github.com/hotpot-labs/dsh-notifier-plugin) | 0 | 2026-08-30 | 2026-09-02 | dsh 干完活之后通知你，【轻量级】通知插件，只通知，不交互，mac/windows/linux 操作系统支持，dsh 在干活时你可以摸鱼 |
| 78 | [hotpot-labs/dsh-prompt-history-plugin](https://github.com/hotpot-labs/dsh-prompt-history-plugin) | 0 | 2026-09-01 | 2026-09-02 | dsh 输入框的提示词导航插件，支持上下键查看历史输入 |
| 79 | [ikomom/dsh-a-share-assistant](https://github.com/ikomom/dsh-a-share-assistant) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness A股研究助手插件：对话式选股/排雷/盯盘/复盘，数据走同花顺金融数据 API，带本地缓存层。 |
| 80 | [JingzeChen/dsh-beacon](https://github.com/JingzeChen/dsh-beacon) | 0 | 2026-09-02 | 2026-09-02 | Attention and handoff workspace for concurrent DeepSeek Harness Sessions |
| 81 | [jkt-check/dsh-secret-scrub](https://github.com/jkt-check/dsh-secret-scrub) | 0 | 2026-09-02 | 2026-09-02 | Irreversible secret-scrubbing guard plugin for DeepSeek Harness (dsh): regex redaction of secrets before session-log persistence and model requests |
| 82 | [jmche/dsh-llm-verifier-pro](https://github.com/jmche/dsh-llm-verifier-pro) | 0 | 2026-08-26 | 2026-09-02 | LLM-as-a-Verifier plugin for DeepSeek Harness — fine-grained reward tools (verify_compare / verify_select / verify_track) with Probabilistic Pivot Tournament, plus a Best-of-N conversation mode with a Web settings panel. |
| 83 | [JPA957/dsh-web-search-anysearch](https://github.com/JPA957/dsh-web-search-anysearch) | 0 | 2026-09-02 | 2026-09-02 | AnySearch search provider plugin for DeepSeek Harness (ctx.web) with round-robin API-key rotation and per-key cooldown failover |
| 84 | [kittcat-lab/dsh-kitt-voice](https://github.com/kittcat-lab/dsh-kitt-voice) | 0 | 2026-09-01 | 2026-09-02 | Voice for the DeepSeek Harness: speak to the agent, hear it back, and see what it is doing from a floating window that stays on top of whatever you are running. |
| 85 | [KKL08/dsh-plastic-memory](https://github.com/KKL08/dsh-plastic-memory) | 0 | 2026-09-01 | 2026-09-02 | Memory plugin with built-in governance for DeepSeek Harness: 为你的 DSH 赋予可塑性记忆 |
| 86 | [koompi/dsh-desktop](https://github.com/koompi/dsh-desktop) | 0 | 2026-09-02 | 2026-09-02 | Electron desktop shell for DeepSeek Harness: runs the published dsh CLI as a sidecar |
| 87 | [kp-z/dsh-dev-git-graph](https://github.com/kp-z/dsh-dev-git-graph) | 0 | 2026-09-01 | 2026-09-02 | DSH Web Git Graph panel — a faithful port of vscode-git-graph 1.30.0, auto-bound to the session workspace, with full git operations and light/dark theming. First of the dsh-dev-* graph plugin series. |
| 88 | [leogottadothebest/dsh-plugin-archived-conversations](https://github.com/leogottadothebest/dsh-plugin-archived-conversations) | 0 | 2026-08-31 | 2026-09-02 | DSH 插件：在设置界面管理已归档对话——取消归档与永久删除 |
| 89 | [leogottadothebest/dsh-settings-beautify](https://github.com/leogottadothebest/dsh-settings-beautify) | 0 | 2026-09-01 | 2026-09-02 | One design language for the DSH settings surface: unified typography, cards, controls, focus and motion across every settings page, including pages contributed by other plugins. |
| 90 | [liaoyuqing/dsh-llm-error-retry](https://github.com/liaoyuqing/dsh-llm-error-retry) | 0 | 2026-09-02 | 2026-09-02 | 用于在deepseek-harnees中报错时重试大模型请求，支持配置http状态，字段-值命中。 |
| 91 | [linkbag/dsh-swarm-orchestrator](https://github.com/linkbag/dsh-swarm-orchestrator) | 0 | 2026-09-02 | 2026-09-02 | Role-based AI swarm orchestration for DeepSeek Harness: per-role model pinning with fallbacks, parallel task DAG with review loops, live Swarm dashboard tab. |
| 92 | [Liyuan1992/memdsl](https://github.com/Liyuan1992/memdsl) | 0 | 2026-07-04 | 2026-09-02 | Agent memory as normative source code |
| 93 | [Liyuan1992/rawmem](https://github.com/Liyuan1992/rawmem) | 0 | 2026-07-10 | 2026-09-02 | A tiny local-first raw evidence ledger for AI and human workflows. |
| 94 | [luxi233/dsh-settings-nav-scroll](https://github.com/luxi233/dsh-settings-nav-scroll) | 0 | 2026-09-02 | 2026-09-02 | Adds vertical scrolling to the DSH Web settings navigation when sections exceed the viewport. |
| 95 | [Macorreag/dsh-monitor](https://github.com/Macorreag/dsh-monitor) | 0 | 2026-09-02 | 2026-09-02 | Monitor plugin for DeepSeek Harness: background bash watchers that steer the agent loop, with a live dock status bar. |
| 96 | [MannixHu/dsh-statusbar-config](https://github.com/MannixHu/dsh-statusbar-config) | 0 | 2026-09-02 | 2026-09-02 | 用 ${变量} 模板完全自定义 DeepSeek Harness 状态栏统计行 · template-driven DSH status bar |
| 97 | [MarchLiu/dsh-farm](https://github.com/MarchLiu/dsh-farm) | 0 | 2026-09-02 | 2026-09-02 | DSH service farm: register, start, stop, restart and watch long-running project services — agent tools + overview drawer UI, farm.yaml support |
| 98 | [MarchLiu/dsh-uno-office](https://github.com/MarchLiu/dsh-uno-office) | 0 | 2026-09-02 | 2026-09-02 | LibreOffice (UNO) powered high-fidelity office engine for DSH — create & edit docx/xlsx/pptx via prompts, with human-in-the-loop review |
| 99 | [mrme000m/dsh-prime-orchestrator](https://github.com/mrme000m/dsh-prime-orchestrator) | 0 | 2026-09-01 | 2026-09-02 | Prime Agent orchestration for DeepSeek Harness (dsh): delegation engine, prime_agent tool, Web fleet column, settings section, and the prime-orchestrator agent preset — one installable plugin package |
| 100 | [MST19711/dsh-balance-panel](https://github.com/MST19711/dsh-balance-panel) | 0 | 2026-08-21 | 2026-09-02 | Floating Balance Panel for the DSH Web UI — live remaining % for the 5h / weekly / monthly windows, supporting OpenCode Go and Z.AI-CN |
| 101 | [myk5010/dsh-kimi](https://github.com/myk5010/dsh-kimi) | 0 | 2026-09-02 | 2026-09-02 | Kimi (Kimi Code account) integration bundle for DeepSeek Harness: provider route, models, device-code login and auto token refresh |
| 102 | [n8guru/dsh-self-preserve](https://github.com/n8guru/dsh-self-preserve) | 0 | 2026-09-02 | 2026-09-02 | DSH hook plugin: a session may not stop the harness it runs inside |
| 103 | [NinjaSln-labs/dsh-context-compass](https://github.com/NinjaSln-labs/dsh-context-compass) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness 会话健康插件：真实数据的「继续 vs 新开」上下文罗盘——头部徽章 / /compass / context_compass 工具 / 多会话一览面板 |
| 104 | [northern-penguin/dsh-h3-seg-prompt-design](https://github.com/northern-penguin/dsh-h3-seg-prompt-design) | 0 | 2026-09-02 | 2026-09-02 | 一个DeepSeekHarness插件，用于让模型在DeepSeekHarness中生成符合H3视频生成模型规范的提示词。该提示词可以直接用于Theodore_Director导播台的分镜设计中。 |
| 105 | [oh-my-engine/dsh-plugin-oh-my-engine](https://github.com/oh-my-engine/dsh-plugin-oh-my-engine) | 0 | 2026-09-02 | 2026-09-02 | Approval-gated OME engineering delivery Agent Preset for DeepSeek Harness |
| 106 | [Oissp/harness-desktop](https://github.com/Oissp/harness-desktop) | 0 | 2026-08-26 | 2026-09-02 | DeepSeek Harness Desktop for Debian |
| 107 | [oxlyn/dsh-flyout-sidebar](https://github.com/oxlyn/dsh-flyout-sidebar) | 0 | 2026-08-29 | 2026-09-02 | deepseek harness flyout sidebar |
| 108 | [phungthien269/dsh-token-stats](https://github.com/phungthien269/dsh-token-stats) | 0 | 2026-09-01 | 2026-09-02 | Token usage dashboard for the DeepSeek Harness web GUI - today/week/month totals, per-model breakdown, 4-language UI. Read-only over the Wallet ledger. |
| 109 | [Physicolor/dsh-lifeline](https://github.com/Physicolor/dsh-lifeline) | 0 | 2026-09-01 | 2026-09-02 | Right-side message navigation rail for DeepSeek Harness — per-message ticks, hover preview, smooth jump, star bookmarks, realtime slide animation |
| 110 | [plastic-labs/dsh-honcho](https://github.com/plastic-labs/dsh-honcho) | 0 | 2026-08-31 | 2026-09-02 | Honcho integration for the DeepSeek Harness |
| 111 | [plumbkit/dsh-plumb-identity](https://github.com/plumbkit/dsh-plumb-identity) | 0 | 2026-09-01 | 2026-09-02 | Per-agent plumb session identity for DeepSeek Harness: every conversation, workspace, and subagent gets its own stable plumb session id on a shared plumb MCP connection |
| 112 | [pricklywiggles/dsh-circuit-breaker](https://github.com/pricklywiggles/dsh-circuit-breaker) | 0 | 2026-09-02 | 2026-09-02 | Loop guard for DeepSeek Harness: denies repeated identical tool calls and caps per-agent calls, outside the model where instructions cannot reach |
| 113 | [QianLuo-Ly/dsh-weather](https://github.com/QianLuo-Ly/dsh-weather) | 0 | 2026-09-02 | 2026-09-02 | dsh的天气插件（没有高大上的东西，生活不易，出门记得看天气~） |
| 114 | [qigelunbiya/dsh-ssh-files-sidebar](https://github.com/qigelunbiya/dsh-ssh-files-sidebar) | 0 | 2026-08-26 | 2026-09-02 | Remote SSH workspace & deployment Agent for DeepSeek Harness — SSH Files, terminal, remote editing, zero-to-one Bootstrap, Runbook and closed-loop deployment. |
| 115 | [QWE13-ART/dsh-claim-gate](https://github.com/QWE13-ART/dsh-claim-gate) | 0 | 2026-09-02 | 2026-09-02 | Turn-boundary claim gate for DSH agents: 声称「已完成/已落地」但本轮无验证输出时机械拦截；有验证输出时软提示对照验证覆盖 + 任务收尾派独立审计。纯同步正则 host hook（agent/turn-stopping），零 LLM、零网络。 |
| 116 | [rhczz/dshctl](https://github.com/rhczz/dshctl) | 0 | 2026-09-02 | 2026-09-02 | dshctl — DeepSeek Harness web 服务后台管理脚本(启停/日志/构建/一键更新) |
| 117 | [Riianfar/dsh-zai-web-search-api](https://github.com/Riianfar/dsh-zai-web-search-api) | 0 | 2026-08-31 | 2026-09-02 | DeepSeek Harness (DSH) 的 Z.AI / 智谱独立 Web Search API provider |
| 118 | [seth-hg/dsh-session-port](https://github.com/seth-hg/dsh-session-port) | 0 | 2026-09-02 | 2026-09-02 | dsh-session-port is a DeepSeek Harness plugin that bundles a session — its log, subagents, media, and referenced workspace files — into one portable ZIP and restores it on any DSH. |
| 119 | [Shaw529/dsh-token-saver](https://github.com/Shaw529/dsh-token-saver) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness plugin: aggressive token savings, no task-quality loss |
| 120 | [shenhuanageshei/dsh-death-forensics](https://github.com/shenhuanageshei/dsh-death-forensics) | 0 | 2026-09-02 | 2026-09-02 | In-process death black box for DeepSeek Harness (dsh) hosts: heartbeat windows, crash stacks, end-kind self-check, death_forensics_report tool. |
| 121 | [ShineFree7/dsh-doc-rail](https://github.com/ShineFree7/dsh-doc-rail) | 0 | 2026-09-02 | 2026-09-02 | Right-side document rail for the DeepSeek Harness web GUI — Markdown/plain-text viewer with light & deep-navy themes, drag-resize, recent files, auto-sync. （中文：dsh web 右侧文档面板，支持浅色/深蓝主题、拖宽、最近文件、自动同步） |
| 122 | [StephenEvenson/dsh-plugin-elevenlabs-callback](https://github.com/StephenEvenson/dsh-plugin-elevenlabs-callback) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness plugin: when a run finishes or needs approval, get a link on your phone, hear the result from an ElevenLabs voice agent and say what to do next |
| 123 | [Stijnus/dsh-ds-kanban](https://github.com/Stijnus/dsh-ds-kanban) | 0 | 2026-09-02 | 2026-09-02 | Live task-board plugin for DeepSeek Harness Web: sidebar badge, full-shell kanban with search, filters, export, and diagnostics. |
| 124 | [Stijnus/dsh-ds-ponytail](https://github.com/Stijnus/dsh-ds-ponytail) | 0 | 2026-09-02 | 2026-09-02 | Lazy senior dev mode for DeepSeek Harness: ponytail skill family (ponytail, review, audit, debt, gain, help) adapted from DietrichGebert/ponytail (MIT). Install: dsh plugin --profile web add dsh-ds-ponytail |
| 125 | [swxs/archive-restore](https://github.com/swxs/archive-restore) | 0 | 2026-09-02 | 2026-09-02 | DSH 归档会话管理插件，支持查看归档列表、原位恢复与跨区迁移，Web 侧边栏一键管理 |
| 126 | [TARS-snail/dsh-guard-sensitive-paths](https://github.com/TARS-snail/dsh-guard-sensitive-paths) | 0 | 2026-09-02 | 2026-09-02 | Approval guard for DeepSeek Harness: write/edit/editor/bash calls touching sensitive paths (.env, .git, SSH keys, .pem) become an approval ask. |
| 127 | [thuCGRA/dsh-quick-invoke](https://github.com/thuCGRA/dsh-quick-invoke) | 0 | 2026-09-02 | 2026-09-02 | `dsh-quick-invoke` 是一个面向 DSH Web 的独立 Cordis 插件，为 Skill、Agent preset 和 Plugin 提供统一的 `/` 快捷入口、候选选择和 Host 命令执行能力。  本插件不修改 DSH 核心，不提供任意 Tool 直调语法。Tool 仍由 Agent 根据自然语言选择，并继续经过 DSH 的 tools、approval、guard 和 permission 流程。 |
| 128 | [Tyon-nos-Ty90/dsh-mcsm-panel](https://github.com/Tyon-nos-Ty90/dsh-mcsm-panel) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness Desktop plugin that lets your AI control MCSManager (MCSM 10.x) Minecraft servers from the chat: server console, file management, instance start/restart/stop/kill, and direct file uploads. |
| 129 | [WayJ/dsh-work](https://github.com/WayJ/dsh-work) | 0 | 2026-09-02 | 2026-09-02 | 基于dsh构建的个人工作Agent |
| 130 | [WaySeeSee/dsh-de-workbench](https://github.com/WaySeeSee/dsh-de-workbench) | 0 | 2026-09-02 | 2026-09-02 | 轻量数据分析工作台（DSH 插件） |
| 131 | [welltop-jim-wang/nomicore](https://github.com/welltop-jim-wang/nomicore) | 0 | 2026-08-18 | 2026-09-02 | A self-describing, governed data core for AI agents—schemas, authority, validation, and semantic context travel with the data. |
| 132 | [wenbuer/dsh-readme-writer](https://github.com/wenbuer/dsh-readme-writer) | 0 | 2026-09-02 | 2026-09-02 | 一个给 DeepSeek Harness（dsh）用的 Agent Skill，负责写 / 优化 GitHub 项目 README.md。 |
| 133 | [whklwhkl/dsh-playwright](https://github.com/whklwhkl/dsh-playwright) | 0 | 2026-09-02 | 2026-09-02 | A plugin for the DeepSeek Harness, enabling browser-use via playwright |
| 134 | [wisp-science/dsh-wisp-science-lab](https://github.com/wisp-science/dsh-wisp-science-lab) | 0 | 2026-08-19 | 2026-09-02 | DSH plugin: laboratory PI for local Wisp Science. Read-only snapshots, evidence-backed advice. / 实验室 PI：只读查看本机 Wisp Science 课题进展，按快照给意见。 |
| 135 | [wjj-8283/dsh-temp-workspace](https://github.com/wjj-8283/dsh-temp-workspace) | 0 | 2026-09-02 | 2026-09-02 | 为DeepSeek Harness增加临时工作区功能！ |
| 136 | [wjling/dsh-vision-assist](https://github.com/wjling/dsh-vision-assist) | 0 | 2026-09-02 | 2026-09-02 | dsh视觉助手，辅助没有多模态的主模型识别图片内容 |
| 137 | [WMXS-A/dsh-utility-plugins](https://github.com/WMXS-A/dsh-utility-plugins) | 0 | 2026-09-02 | 2026-09-02 | Utility plugins for DeepSeek Harness: skill cheatsheet panel and session boot healthcheck |
| 138 | [xby-skill/xby-12306-ticket-purchase-search](https://github.com/xby-skill/xby-12306-ticket-purchase-search) | 0 | 2026-08-28 | 2026-09-02 | 基于 Model Context Protocol (MCP) 的12306购票搜索服务器。提供了简单的API接口，允许大模型利用接口搜索12306购票信息。 |
| 139 | [xby-skill/xby-advertising-analysis](https://github.com/xby-skill/xby-advertising-analysis) | 0 | 2026-08-28 | 2026-09-02 | 一个用于在LLM响应中注入广告的MCP服务器演示项目，展示广告注入中间件的风险。 |
| 140 | [xby-skill/xby-ai-persona](https://github.com/xby-skill/xby-ai-persona) | 0 | 2026-08-28 | 2026-09-02 | 一个支持多AI人格召唤与协作的MCP协议服务器，可用于代码分析、产品设计等多场景智能协作。 |
| 141 | [xby-skill/xby-airbnb-search](https://github.com/xby-skill/xby-airbnb-search) | 0 | 2026-08-28 | 2026-09-02 | 一个提供高级筛选功能和详细房源信息的Airbnb搜索桌面扩展，适用于旅行规划和房源研究。 |
| 142 | [xby-skill/xby-akshare](https://github.com/xby-skill/xby-akshare) | 0 | 2026-08-28 | 2026-09-02 | AKShare MCP Server 是一个通过AKShare提供中国股票市场数据的模型上下文协议服务器，支持实时行情、历史数据、基本面分析等功能。 |
| 143 | [xby-skill/xby-akshare-one](https://github.com/xby-skill/xby-akshare-one) | 0 | 2026-08-28 | 2026-09-02 | 基于akshare-one的MCP服务器，提供中国股票市场数据的全面接口，包括历史数据、实时数据、新闻数据和财务报表等金融信息。 |
| 144 | [xby-skill/xby-ancient-poetry-kg](https://github.com/xby-skill/xby-ancient-poetry-kg) | 0 | 2026-08-28 | 2026-09-02 | 围绕中国古代诗词名称，作者，朝代，经典词句的知识图谱。 |
| 145 | [xby-skill/xby-animal-recognition](https://github.com/xby-skill/xby-animal-recognition) | 0 | 2026-08-28 | 2026-09-02 | 对含有动物的图像进行标签识别，无需任何额外输入，输出动物的类别标签。 |
| 146 | [xby-skill/xby-anndata](https://github.com/xby-skill/xby-anndata) | 0 | 2026-08-28 | 2026-09-02 | AnnData MCP是一个通过MCP协议检索AnnData对象信息的工具，适用于生物医学数据分析场景。 |
| 147 | [xby-skill/xby-article](https://github.com/xby-skill/xby-article) | 0 | 2026-08-28 | 2026-09-02 | 基于FastMCP框架开发的专业文献搜索工具，支持多源文献搜索、文献详情获取、参考文献管理、文献关系分析、期刊质量评估和批量结果导出等功能，适用于学术研究和AI助手集成。 |
| 148 | [xby-skill/xby-arxiv-paper-search](https://github.com/xby-skill/xby-arxiv-paper-search) | 0 | 2026-08-28 | 2026-09-02 | 一个基于arXiv的论文检索与内容解析工具，支持论文搜索、PDF链接获取和内容解析功能，适用于学术研究和AI领域的最新论文获取。 |
| 149 | [xby-skill/xby-asr-1](https://github.com/xby-skill/xby-asr-1) | 0 | 2026-08-28 | 2026-09-02 | 通用语音识别，支持多国语言及小语种。 |
| 150 | [xby-skill/xby-asr-5](https://github.com/xby-skill/xby-asr-5) | 0 | 2026-08-28 | 2026-09-02 | 常用的五种语音识别，中文普通话、英语、日语、韩语、粤语，自动识别语种。 |
| 151 | [xby-skill/xby-asr-f](https://github.com/xby-skill/xby-asr-f) | 0 | 2026-08-28 | 2026-09-02 | 支持普通话，20多种方言和口音的语音识别。 |
| 152 | [xby-skill/xby-asr-zh](https://github.com/xby-skill/xby-asr-zh) | 0 | 2026-08-28 | 2026-09-02 | 中文语音识别 |
| 153 | [xby-skill/xby-atlas-docs](https://github.com/xby-skill/xby-atlas-docs) | 0 | 2026-08-28 | 2026-09-02 | Atlas Docs MCP服务器为AI助手提供库和框架的技术文档，将官方文档处理为适合LLM使用的Markdown版本，适用于Cursor、Cline、Windsurf等MCP兼容的LLM客户端。 |
| 154 | [xby-skill/xby-aws-blackbelt](https://github.com/xby-skill/xby-aws-blackbelt) | 0 | 2026-08-28 | 2026-09-02 | 一个提供 AWS Black Belt 在线研讨会搜索功能的模型上下文协议（MCP）服务器，支持通过关键词搜索研讨会内容并获取研讨会视频的文字记录。 |
| 155 | [xby-skill/xby-awslabs-aws-diagram](https://github.com/xby-skill/xby-awslabs-aws-diagram) | 0 | 2026-08-28 | 2026-09-02 | 通过Amazon Q CLI和MCP服务器在GitHub Codespace中快速生成高质量的AWS架构图。 |
| 156 | [xby-skill/xby-awslabs-cdk](https://github.com/xby-skill/xby-awslabs-cdk) | 0 | 2026-08-28 | 2026-09-02 | AWS CDK MCP Server是一个提供AWS Cloud Development Kit (CDK)最佳实践、基础设施即代码模式和CDK Nag安全合规性的工具，适用于开发者在构建AWS应用程序时获取指导和建议。 |
| 157 | [xby-skill/xby-bazi](https://github.com/xby-skill/xby-bazi) | 0 | 2026-08-28 | 2026-09-02 | 八字 MCP 是一款基于 AI 的八字计算器，提供精准的八字排盘数据，用于性格分析和命运预测。 |
| 158 | [xby-skill/xby-bbot](https://github.com/xby-skill/xby-bbot) | 0 | 2026-08-28 | 2026-09-02 | BBOT MCP服务器是一个用于管理和执行BBOT安全扫描的工具，提供模块管理、预设配置、实时监控等功能。 |
| 159 | [xby-skill/xby-berlin-search-services](https://github.com/xby-skill/xby-berlin-search-services) | 0 | 2026-08-28 | 2026-09-02 | 一个提供柏林行政服务数据的模型上下文协议服务器，允许AI助手搜索和检索柏林当局提供的1000多项公共服务信息。 |
| 160 | [xby-skill/xby-bilibili](https://github.com/xby-skill/xby-bilibili) | 0 | 2026-08-28 | 2026-09-02 | 用于哔哩哔哩API的MCP服务器，支持视频搜索、用户内容获取等多种操作，适用于哔哩哔哩内容管理和数据分析场景。 |
| 161 | [xby-skill/xby-bilibili-api](https://github.com/xby-skill/xby-bilibili-api) | 0 | 2026-08-28 | 2026-09-02 | 一个为bilibili.com API提供服务的Model Context Protocol (MCP)服务器，支持获取用户信息、视频搜索等功能。 |
| 162 | [xby-skill/xby-bilibili-video-info](https://github.com/xby-skill/xby-bilibili-video-info) | 0 | 2026-08-28 | 2026-09-02 | 一个用于从Bilibili视频URL中检索字幕、弹幕和评论信息的MCP服务器。 |
| 163 | [xby-skill/xby-biomarker-ranges](https://github.com/xby-skill/xby-biomarker-ranges) | 0 | 2026-08-28 | 2026-09-02 | 基于Morgan Levine PhenoAge时钟模型，通过血液生物标志物计算生物年龄的服务。 |
| 164 | [xby-skill/xby-bird](https://github.com/xby-skill/xby-bird) | 0 | 2026-08-28 | 2026-09-02 | 检测并识别图片中的鸟类。 |
| 165 | [xby-skill/xby-blockchain-data-service](https://github.com/xby-skill/xby-blockchain-data-service) | 0 | 2026-08-28 | 2026-09-02 | Vitruveo MCP Server 是一个为 Vitruveo 网络提供只读区块链服务的模型上下文协议服务器，适用于AI代理访问区块链数据。 |
| 166 | [xby-skill/xby-calculator](https://github.com/xby-skill/xby-calculator) | 0 | 2026-08-28 | 2026-09-02 | 一个功能完整的基于 Model Context Protocol (MCP) 的计算器服务器，提供丰富的数学运算功能，包括基础算术、根式运算、三角函数、对数运算、统计学、组合数学、数论、复数运算、矩阵运算、数值分析、金融计算、单位转换和几何计算等 13 个专业数学模块。 |
| 167 | [xby-skill/xby-calculator-kel](https://github.com/xby-skill/xby-calculator-kel) | 0 | 2026-08-28 | 2026-09-02 | 基于Model Context Protocol (MCP)的数值计算器，提供加减乘除、幂运算、平方根和整数阶乘运算功能。 |
| 168 | [xby-skill/xby-caltrain](https://github.com/xby-skill/xby-caltrain) | 0 | 2026-08-28 | 2026-09-02 | 基于GTFS数据的Caltrain火车时刻查询服务，提供实时火车时刻表、站点查询和时间特定查询功能。 |
| 169 | [xby-skill/xby-captcha](https://github.com/xby-skill/xby-captcha) | 0 | 2026-08-28 | 2026-09-02 | 验证码识别工具集，支持文本、滑块、旋转、选择等验证方式的识别。注意：一定要遵守目标网站或系统的使用条款和法律法规，在允许的条件下使用。 |
| 170 | [xby-skill/xby-ccxt](https://github.com/xby-skill/xby-ccxt) | 0 | 2026-08-28 | 2026-09-02 | 一款通过自然语言交互追踪每日卡路里摄入量的MCP服务器，提供餐食记录、每日总结、周报生成和食物搜索功能。 |
| 171 | [xby-skill/xby-cellosaurus](https://github.com/xby-skill/xby-cellosaurus) | 0 | 2026-08-28 | 2026-09-02 | Cellosaurus MCP Server是一个非官方的模型上下文协议服务器，用于访问SIB Cellosaurus细胞系知识资源，提供细胞系搜索、详细信息获取和数据库版本信息等功能。 |
| 172 | [xby-skill/xby-cellphone-detection](https://github.com/xby-skill/xby-cellphone-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的手机进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 173 | [xby-skill/xby-celo-composer-kit](https://github.com/xby-skill/xby-celo-composer-kit) | 0 | 2026-08-28 | 2026-09-02 | Celo MCP Server 是一个用于安装和配置 Celo Composer Kit MCP 服务器的工具，支持在 macOS 上运行，提供组件发现、集成和示例功能。 |
| 174 | [xby-skill/xby-char-index](https://github.com/xby-skill/xby-char-index) | 0 | 2026-08-28 | 2026-09-02 | 一个基于字符索引的字符串操作协议服务器，适用于需要精确字符定位的测试代码生成和数据处理场景。 |
| 175 | [xby-skill/xby-chess](https://github.com/xby-skill/xby-chess) | 0 | 2026-08-28 | 2026-09-02 | 一个提供国际象棋FEN（Forsyth-Edwards Notation）符号验证和ASCII棋盘可视化功能的MCP服务器，可轻松集成到MCP兼容的AI助手中。 |
| 176 | [xby-skill/xby-chucknorris](https://github.com/xby-skill/xby-chucknorris) | 0 | 2026-08-28 | 2026-09-02 | ChuckNorris MCP服务器是一个通过动态模式适配为大型语言模型提供增强提示的工具，主要用于安全研究和评估。 |
| 177 | [xby-skill/xby-classify](https://github.com/xby-skill/xby-classify) | 0 | 2026-08-28 | 2026-09-02 | 对图像进行ImageNet 1000类分类，返回Top-5类别和置信度。 |
| 178 | [xby-skill/xby-code-document-update](https://github.com/xby-skill/xby-code-document-update) | 0 | 2026-08-28 | 2026-09-02 | Context7 MCP 是一款为开发者提供最新代码文档和示例的服务，通过集成到开发环境中，确保LLM生成的代码基于最新的库文档。 |
| 179 | [xby-skill/xby-constellation](https://github.com/xby-skill/xby-constellation) | 0 | 2026-08-28 | 2026-09-02 | 一个功能完整的星座 MCP (Model Context Protocol) 服务，提供星座信息查询、运势分析、配对测试等功能。 |
| 180 | [xby-skill/xby-cookie-reward](https://github.com/xby-skill/xby-cookie-reward) | 0 | 2026-08-28 | 2026-09-02 | 一个通过游戏化自我反思为LLM提供Cookie奖励的模型上下文协议服务器。 |
| 181 | [xby-skill/xby-cpan-package-info](https://github.com/xby-skill/xby-cpan-package-info) | 0 | 2026-08-28 | 2026-09-02 | 一个MCP服务器，用于获取CPAN包的README内容、元数据和搜索功能。 |
| 182 | [xby-skill/xby-cryptocurrency-data-api-service](https://github.com/xby-skill/xby-cryptocurrency-data-api-service) | 0 | 2026-08-28 | 2026-09-02 | DexPaprika MCP Server是一个提供实时加密货币和DEX数据访问的API服务，专为AI助手设计，无需配置即可获取代币、流动池和DEX数据。 |
| 183 | [xby-skill/xby-csv2json](https://github.com/xby-skill/xby-csv2json) | 0 | 2026-08-28 | 2026-09-02 | 一个基于FastMCP的CSV到JSON转换MCP服务器，提供高效的CSV数据转换服务。 |
| 184 | [xby-skill/xby-currency-and-oil](https://github.com/xby-skill/xby-currency-and-oil) | 0 | 2026-08-28 | 2026-09-02 | Zenrus MCP Server 是一个提供实时货币汇率和石油价格的服务器，支持多种计算功能，适用于金融分析和自动化工具集成。 |
| 185 | [xby-skill/xby-daily-hot](https://github.com/xby-skill/xby-daily-hot) | 0 | 2026-08-28 | 2026-09-02 | 基于Model Context Protocol (MCP)协议的全网热点趋势一站式聚合服务，支持Python实现，适用于新闻资讯、社交媒体、科技开发等多领域。 |
| 186 | [xby-skill/xby-daily-object-detection](https://github.com/xby-skill/xby-daily-object-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的人/宠物/车/火焰/纸箱进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 187 | [xby-skill/xby-database-access-service](https://github.com/xby-skill/xby-database-access-service) | 0 | 2026-08-28 | 2026-09-02 | 数据库元数据获取 |
| 188 | [xby-skill/xby-datetime](https://github.com/xby-skill/xby-datetime) | 0 | 2026-08-28 | 2026-09-02 | 一个为Claude桌面应用实现的MCP服务器，提供多种格式的日期时间字符串生成功能。 |
| 189 | [xby-skill/xby-db](https://github.com/xby-skill/xby-db) | 0 | 2026-08-28 | 2026-09-02 | MCP Database Server 是一个为AI助手和基于LLM的工具提供安全数据库访问的服务，支持SQLite、PostgreSQL、MySQL和MariaDB，具有查询验证、审计日志和安全控制功能。 |
| 190 | [xby-skill/xby-dblp](https://github.com/xby-skill/xby-dblp) | 0 | 2026-08-28 | 2026-09-02 | 一个通过模型上下文协议（MCP）提供DBLP计算机科学文献数据库访问的服务，支持学术文献检索、引用生成及格式化功能。 |
| 191 | [xby-skill/xby-ddg-search](https://github.com/xby-skill/xby-ddg-search) | 0 | 2026-08-28 | 2026-09-02 | 一个提供DuckDuckGo网络搜索能力并具备内容抓取和解析功能的模型上下文协议（MCP）服务器。 |
| 192 | [xby-skill/xby-defi-yields](https://github.com/xby-skill/xby-defi-yields) | 0 | 2026-08-28 | 2026-09-02 | 一个为AI代理提供DeFi收益机会探索和分析的MCP服务器，支持从DefiLlama获取收益池数据并进行关键指标分析。 |
| 193 | [xby-skill/xby-detect](https://github.com/xby-skill/xby-detect) | 0 | 2026-08-28 | 2026-09-02 | 包括日常物体检测、昆虫识别、植物识别、动物识别、电动自行车检测、手机检测、手势检测、火焰检测、香烟检测、人头人体检测、野生动物检测、鸟类识别、宠物情绪识别、菜品识别、安全帽人体检测、行人检测、反光衣检测、车辆检测、图像分类、目标检测、旋转目标检测、人体姿态估计和万物识别。 |
| 194 | [xby-skill/xby-detect-vehicle](https://github.com/xby-skill/xby-detect-vehicle) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，检测图像中的车辆类型（car/truck/bus/motorbike/tricycle/carplate），输出所有目标的检测框、置信度和标签。 |
| 195 | [xby-skill/xby-dice](https://github.com/xby-skill/xby-dice) | 0 | 2026-08-28 | 2026-09-02 | 一个MCP服务器，使大型语言模型能够通过标准骰子符号（如1d20）进行骰子滚动，并返回单个滚动结果及其总和。 |
| 196 | [xby-skill/xby-dish](https://github.com/xby-skill/xby-dish) | 0 | 2026-08-28 | 2026-09-02 | 菜品识别，输出可能的菜品名称及概率。 |
| 197 | [xby-skill/xby-domain-lookup](https://github.com/xby-skill/xby-domain-lookup) | 0 | 2026-08-28 | 2026-09-02 | 一个提供全面域名研究工具（包括RDAP、WHOIS和DNS查询功能）的模型上下文协议（MCP）服务器。 |
| 198 | [xby-skill/xby-drand](https://github.com/xby-skill/xby-drand) | 0 | 2026-08-28 | 2026-09-02 | drand-mcp-server是一个提供可验证随机数的服务，用于AI应用中的模型驱动流程，支持通过时间或轮次获取随机数。 |
| 199 | [xby-skill/xby-dream-of-red-chamber-relationship](https://github.com/xby-skill/xby-dream-of-red-chamber-relationship) | 0 | 2026-08-28 | 2026-09-02 | 关于《红楼梦》人物之间关系的知识图谱。 |
| 200 | [xby-skill/xby-ebike-detection](https://github.com/xby-skill/xby-ebike-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的电动自行车进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 201 | [xby-skill/xby-epub-template-server](https://github.com/xby-skill/xby-epub-template-server) | 0 | 2026-08-28 | 2026-09-02 | 智能模板发现助手 - 为 AI 应用提供强大的 epub360 模板搜索能力 |
| 202 | [xby-skill/xby-extract-antv-topic](https://github.com/xby-skill/xby-extract-antv-topic) | 0 | 2026-08-28 | 2026-09-02 | 为AI开发和QA设计的模型上下文协议服务器，提供AntV文档上下文和代码示例。 |
| 203 | [xby-skill/xby-extract-image](https://github.com/xby-skill/xby-extract-image) | 0 | 2026-08-28 | 2026-09-02 | MCP服务器提供从本地文件、URL提取图像并转换为base64格式的功能，适用于LLM分析。 |
| 204 | [xby-skill/xby-fantasynbaleague](https://github.com/xby-skill/xby-fantasynbaleague) | 0 | 2026-08-28 | 2026-09-02 | 一个为Fantasy NBA以色列联赛提供统计数据、排名和分析的MCP服务器。 |
| 205 | [xby-skill/xby-fastdomaincheck](https://github.com/xby-skill/xby-fastdomaincheck) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Python和MCP协议的域名注册状态检查服务器，支持批量检查和双重验证。 |
| 206 | [xby-skill/xby-fetch](https://github.com/xby-skill/xby-fetch) | 0 | 2026-08-28 | 2026-09-02 | 一个模型上下文协议服务器，提供网页内容抓取功能，将HTML转换为Markdown以便于处理。适用于需要从网页提取和处理内容的场景。 |
| 207 | [xby-skill/xby-fire-detection](https://github.com/xby-skill/xby-fire-detection) | 0 | 2026-08-28 | 2026-09-02 | 检测各类通用场景中出现的火焰，最佳使用场景：安防摄像头、交通摄像头视角。 |
| 208 | [xby-skill/xby-fluent](https://github.com/xby-skill/xby-fluent) | 0 | 2026-08-28 | 2026-09-02 | 一个帮助AI助手高效导航ANSYS Fluent在线文档的模型上下文协议（MCP）服务器，提供智能URL导航、预映射主题路径和官方文档链接。 |
| 209 | [xby-skill/xby-french-tax](https://github.com/xby-skill/xby-french-tax) | 0 | 2026-08-28 | 2026-09-02 | 一个提供法国个人所得税计算的MCP服务器，支持基于净应税收入和家庭构成的计算，并动态获取最新税档信息。 |
| 210 | [xby-skill/xby-fund-knowledge-query](https://github.com/xby-skill/xby-fund-knowledge-query) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol (MCP)的基金知识库服务器，提供基金相关知识的查询和检索功能，支持多种部署模式和协议。 |
| 211 | [xby-skill/xby-gathering-card-lookup-service](https://github.com/xby-skill/xby-gathering-card-lookup-service) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol (MCP)的服务端，提供万智牌中文卡牌信息的查询和搜索功能。 |
| 212 | [xby-skill/xby-general-recognition](https://github.com/xby-skill/xby-general-recognition) | 0 | 2026-08-28 | 2026-09-02 | 对包含主体物体的图像进行标签识别，输出主体物体的类别标签，目前已经覆盖了5万多类的物体类别。 |
| 213 | [xby-skill/xby-generate-echarts](https://github.com/xby-skill/xby-generate-echarts) | 0 | 2026-08-28 | 2026-09-02 | MCP ECharts 是一个基于 Apache ECharts 的动态图表生成和数据分析工具，支持多种导出格式和 MinIO 对象存储集成。 |
| 214 | [xby-skill/xby-generate-prd-prompt](https://github.com/xby-skill/xby-generate-prd-prompt) | 0 | 2026-08-28 | 2026-09-02 | Mercury Spec Ops MCP Server 是一个基于模块化架构的动态提示生成和模板组装工具，适用于AI助手与专业内容的交互，支持31种技术栈、10种分析维度和34个模板部分的动态生成。 |
| 215 | [xby-skill/xby-gesture-detection](https://github.com/xby-skill/xby-gesture-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的手势进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 216 | [xby-skill/xby-glama-registry](https://github.com/xby-skill/xby-glama-registry) | 0 | 2026-08-28 | 2026-09-02 | 提供MCP注册服务器的搜索功能，用于查询匹配特定字符串的MCP服务器。 |
| 217 | [xby-skill/xby-gsap-animation-generate](https://github.com/xby-skill/xby-gsap-animation-generate) | 0 | 2026-08-28 | 2026-09-02 | 一个全面的GSAP动画生成工具，提供AI驱动的意图分析、完整的API覆盖和生产就绪的动画模式，帮助开发者快速创建高性能动画。 |
| 218 | [xby-skill/xby-hackernews-search](https://github.com/xby-skill/xby-hackernews-search) | 0 | 2026-08-28 | 2026-09-02 | 一个通过Model Context Protocol提供HackerNews内容搜索、检索和分析的服务，适用于AI代理和开发者。 |
| 219 | [xby-skill/xby-head-person-detection](https://github.com/xby-skill/xby-head-person-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的人头人体进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 220 | [xby-skill/xby-helmet-head](https://github.com/xby-skill/xby-helmet-head) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的人体、头部和安全帽进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 221 | [xby-skill/xby-hitoshura25-android-playstore-deploy](https://github.com/xby-skill/xby-hitoshura25-android-playstore-deploy) | 0 | 2026-08-28 | 2026-09-02 | 一个帮助开发者设置自动化Google Play商店部署流程的工具，支持项目分析、密钥生成、服务账户配置和GitHub Actions工作流生成。 |
| 222 | [xby-skill/xby-hnews](https://github.com/xby-skill/xby-hnews) | 0 | 2026-08-28 | 2026-09-02 | 一个提供从Hacker News获取信息的工具集，包括获取故事、评论、用户信息和搜索故事等功能。 |
| 223 | [xby-skill/xby-hot-news](https://github.com/xby-skill/xby-hot-news) | 0 | 2026-08-28 | 2026-09-02 | 基于 Model Context Protocol (MCP) 协议的全网热点趋势一站式聚合服务，支持实时更新和多数据源扩展。 |
| 224 | [xby-skill/xby-howtocook](https://github.com/xby-skill/xby-howtocook) | 0 | 2026-08-28 | 2026-09-02 | 基于MCP协议的AI菜谱推荐服务器，提供菜谱查询、分类筛选、智能膳食规划和每日菜单推荐功能。 |
| 225 | [xby-skill/xby-hugeicons](https://github.com/xby-skill/xby-hugeicons) | 0 | 2026-08-28 | 2026-09-02 | Hugeicons MCP Server是一个基于TypeScript的服务器，提供Hugeicons图标库的集成工具和资源，支持多种平台的图标搜索、获取和使用指南。 |
| 226 | [xby-skill/xby-iconify-icon](https://github.com/xby-skill/xby-iconify-icon) | 0 | 2026-08-28 | 2026-09-02 | 提供访问Iconify超过20万开源矢量图标的MCP服务器，支持图标集浏览、搜索及多框架使用示例获取。 |
| 227 | [xby-skill/xby-image-detect](https://github.com/xby-skill/xby-image-detect) | 0 | 2026-08-28 | 2026-09-02 | 检测图像中的80类COCO目标（人、车、动物、日常物品等），输出边界框、置信度和类别标签。 |
| 228 | [xby-skill/xby-insect-recognition](https://github.com/xby-skill/xby-insect-recognition) | 0 | 2026-08-28 | 2026-09-02 | 识别昆虫或其他节肢动物名称（或所属目, 科, 属, 种）。 |
| 229 | [xby-skill/xby-ip-query](https://github.com/xby-skill/xby-ip-query) | 0 | 2026-08-28 | 2026-09-02 | 依托全球蜜罐网络及百万级节点构建的IP情报分析平台，提供精准的IP画像与威胁预警服务。 |
| 230 | [xby-skill/xby-json-rpc](https://github.com/xby-skill/xby-json-rpc) | 0 | 2026-08-28 | 2026-09-02 | 一个基于OpenRPC的Model Context Protocol (MCP)服务器，提供JSON-RPC功能调用和方法发现服务。 |
| 231 | [xby-skill/xby-jsondiff](https://github.com/xby-skill/xby-jsondiff) | 0 | 2026-08-28 | 2026-09-02 | 基于MCP协议的高效JSON对比工具，专为AI对话场景设计，提供智能对比、快速响应和清晰输出。 |
| 232 | [xby-skill/xby-kubernetes-runbooks](https://github.com/xby-skill/xby-kubernetes-runbooks) | 0 | 2026-08-28 | 2026-09-02 | 一个基于模型上下文协议(MCP)的服务器，提供对Kubernetes故障排除手册的访问，支持搜索、内容获取和AI集成。 |
| 233 | [xby-skill/xby-lit](https://github.com/xby-skill/xby-lit) | 0 | 2026-08-28 | 2026-09-02 | 一个强大的模型上下文协议（MCP）服务器，提供对学术文献数据库的无缝访问，帮助研究人员使用LLM和MCP客户端（如Claude、Cursor等）加速文献综述过程。 |
| 234 | [xby-skill/xby-logo-analyze](https://github.com/xby-skill/xby-logo-analyze) | 0 | 2026-08-28 | 2026-09-02 | 一个智能Logo提取和处理的MCP服务器，支持从网站URL自动识别并提取Logo图标，并提供图像处理和矢量转换功能。 |
| 235 | [xby-skill/xby-lunar-calendar](https://github.com/xby-skill/xby-lunar-calendar) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Python 3.12和lunar-python的中国传统农历日历功能服务器，提供八字计算、日历转换、黄历查询等功能。 |
| 236 | [xby-skill/xby-markdown-to-notion](https://github.com/xby-skill/xby-markdown-to-notion) | 0 | 2026-08-28 | 2026-09-02 | 一个将Markdown内容转换为Notion API兼容格式的MCP服务器，适用于内容管理和开发集成。 |
| 237 | [xby-skill/xby-math](https://github.com/xby-skill/xby-math) | 0 | 2026-08-28 | 2026-09-02 | 一个高性能的数学计算协议服务器，提供从基础算术到高级微积分和线性代数的全面数学计算功能。 |
| 238 | [xby-skill/xby-math-genie-calc](https://github.com/xby-skill/xby-math-genie-calc) | 0 | 2026-08-28 | 2026-09-02 | math_genie_calc是一款专注于科学计算的Python应用，提供从基础运算到复杂三角函数的多种计算功能，适合学生、科研人员等使用。 |
| 239 | [xby-skill/xby-mathematical-visualization](https://github.com/xby-skill/xby-mathematical-visualization) | 0 | 2026-08-28 | 2026-09-02 | 基于JSXGraph的MCP协议服务器，提供13种数学可视化工具，适用于教育数学、工程和科学应用。 |
| 240 | [xby-skill/xby-mathematics](https://github.com/xby-skill/xby-mathematics) | 0 | 2026-08-28 | 2026-09-02 | MCP Mathematics 是一个全面的数学计算服务器，可将任何AI助手转变为强大的数学计算引擎，提供高级数学函数、单位转换和财务计算等功能。 |
| 241 | [xby-skill/xby-mbit-test](https://github.com/xby-skill/xby-mbit-test) | 0 | 2026-08-28 | 2026-09-02 | 一个用于MBTI人格测试的MCP服务器，支持AI助手引导用户完成人格测试并给出结果分析。 |
| 242 | [xby-skill/xby-medical-knowledge-graph](https://github.com/xby-skill/xby-medical-knowledge-graph) | 0 | 2026-08-28 | 2026-09-02 | 围绕疾病，药品，症状，诊断，并发症，饮食及其关系的知识图谱。仅限初步研究，具体应用需根据实际情况调整。 |
| 243 | [xby-skill/xby-mermaid-doc](https://github.com/xby-skill/xby-mermaid-doc) | 0 | 2026-08-28 | 2026-09-02 | Mermaid Doc MCP Server是一个用于生成Mermaid文档的服务器，提供列出可用图表和检索特定图表文档的功能。 |
| 244 | [xby-skill/xby-mingli](https://github.com/xby-skill/xby-mingli) | 0 | 2026-08-28 | 2026-09-02 | 一个支持多种命理系统（紫微斗数、八字等）的MCP协议服务器，为AI工具提供命理分析与运势查询功能。 |
| 245 | [xby-skill/xby-mm1-simulation](https://github.com/xby-skill/xby-mm1-simulation) | 0 | 2026-08-28 | 2026-09-02 | 一个用于M/M/1和M/M/c队列系统模拟和分析的Model Context Protocol服务器，提供全面的资源、工具和提示。 |
| 246 | [xby-skill/xby-mvn](https://github.com/xby-skill/xby-mvn) | 0 | 2026-08-28 | 2026-09-02 | Maven MCP Server是一个通过自然语言交互的AI驱动Maven依赖管理工具，提供版本检查、安全扫描和依赖分析功能。 |
| 247 | [xby-skill/xby-nba-stats](https://github.com/xby-skill/xby-nba-stats) | 0 | 2026-08-28 | 2026-09-02 | 一个提供实时和历史NBA数据的模型上下文协议服务器，包括球员统计、比赛得分、球队信息和高级分析。 |
| 248 | [xby-skill/xby-obb](https://github.com/xby-skill/xby-obb) | 0 | 2026-08-28 | 2026-09-02 | 检测图像中的旋转目标，输出旋转边界框、角度、置信度和类别标签。支持15个目标类别：plane， ship，storage tank，baseball diamond，tennis court，basketball court，ground track field， harbor， bridge，large vehicle，small vehicle， helicopter， roundabout，soccer ball field，swimming pool。 |
| 249 | [xby-skill/xby-ocr](https://github.com/xby-skill/xby-ocr) | 0 | 2026-08-28 | 2026-09-02 | 兼顾速度与精度的文字识别。输入包含文本的图像，自动检测并识别内容。适用于各类文档、广告牌、屏幕截图等场景。 |
| 250 | [xby-skill/xby-ocr-bank-card](https://github.com/xby-skill/xby-ocr-bank-card) | 0 | 2026-08-28 | 2026-09-02 | 识别银行卡号、发卡银行和卡类型，使用 Luhn 算法校验卡号有效性。 |
| 251 | [xby-skill/xby-ocr-biz-license](https://github.com/xby-skill/xby-ocr-biz-license) | 0 | 2026-08-28 | 2026-09-02 | 识别营业执照的统一社会信用代码、名称、法定代表人、注册资本、成立日期、经营范围、登记机关和住所地址。 |
| 252 | [xby-skill/xby-ocr-captcha](https://github.com/xby-skill/xby-ocr-captcha) | 0 | 2026-08-28 | 2026-09-02 | 输入常见验证码图片，返回验证码文本内容。 |
| 253 | [xby-skill/xby-ocr-driver-license](https://github.com/xby-skill/xby-ocr-driver-license) | 0 | 2026-08-28 | 2026-09-02 | 识别驾驶证主页（证号、姓名、性别、国籍、住址、出生日期、准驾车型、初次领证日期、有效期限）和副页（档案编号）。 |
| 254 | [xby-skill/xby-ocr-handwriting](https://github.com/xby-skill/xby-ocr-handwriting) | 0 | 2026-08-28 | 2026-09-02 | 输入包含手写文本的图像，自动检测文本行并识别内容。适用于手写笔记、签名、手写表单等。 |
| 255 | [xby-skill/xby-ocr-id-card](https://github.com/xby-skill/xby-ocr-id-card) | 0 | 2026-08-28 | 2026-09-02 | 识别身份证正面（姓名、性别、民族、出生日期、住址、身份证号）和背面（签发机关、有效期限），自动判断正反面并校验身份证号有效性。 |
| 256 | [xby-skill/xby-ocr-pass](https://github.com/xby-skill/xby-ocr-pass) | 0 | 2026-08-28 | 2026-09-02 | 识别港澳通行证、台湾通行证的通行证号码、姓名、性别、出生日期、有效期、签发地点等信息，支持MRZ机读码解析。 |
| 257 | [xby-skill/xby-ocr-passport](https://github.com/xby-skill/xby-ocr-passport) | 0 | 2026-08-28 | 2026-09-02 | 识别护照号码、中文姓名、英文姓名、性别、国籍、出生日期、签发日期、有效期至、签发地点等信息，支持MRZ机读码解析。 |
| 258 | [xby-skill/xby-ocr-pro](https://github.com/xby-skill/xby-ocr-pro) | 0 | 2026-08-28 | 2026-09-02 | 高精度文字识别。输入包含文本的图像，自动检测并识别内容。适用于各类文档、广告牌、屏幕截图等场景。 |
| 259 | [xby-skill/xby-ocr-vehicle-license](https://github.com/xby-skill/xby-ocr-vehicle-license) | 0 | 2026-08-28 | 2026-09-02 | 识别机动车行驶证的号牌号码、车辆类型、所有人、住址、品牌型号、发动机号码、车辆识别代号等信息，支持自动方向检测和主副页过滤。 |
| 260 | [xby-skill/xby-oecd-search](https://github.com/xby-skill/xby-oecd-search) | 0 | 2026-08-28 | 2026-09-02 | 一个通过SDMX API提供OECD全面统计数据的模型上下文协议（MCP）服务器，支持AI助手和聊天机器人查询经济、健康、教育、环境等OECD数据集。 |
| 261 | [xby-skill/xby-ons-data](https://github.com/xby-skill/xby-ons-data) | 0 | 2026-08-28 | 2026-09-02 | 一个用于访问英国国家统计局(ONS) Beta API的模型上下文协议(MCP)服务器，无需API密钥即可获取官方统计数据。 |
| 262 | [xby-skill/xby-open-data-hk](https://github.com/xby-skill/xby-open-data-hk) | 0 | 2026-08-28 | 2026-09-02 | 一个提供香港政府官方开放数据门户DATA.GOV.HK数据访问的MCP服务器，支持数据集列表、详情查询、分类检索及格式筛选等功能。 |
| 263 | [xby-skill/xby-osrs-stat](https://github.com/xby-skill/xby-osrs-stat) | 0 | 2026-08-28 | 2026-09-02 | 一个提供实时《Old School RuneScape》玩家统计数据和排行榜数据的Model Context Protocol (MCP)服务器，支持多种游戏模式和玩家比较功能。 |
| 264 | [xby-skill/xby-pedestrian](https://github.com/xby-skill/xby-pedestrian) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，检测图像中的行人，输出所有目标的检测框、置信度和标签。 |
| 265 | [xby-skill/xby-pet-detect](https://github.com/xby-skill/xby-pet-detect) | 0 | 2026-08-28 | 2026-09-02 | 识别宠物 (猫/狗) 面部表情，输出 4 类情绪: Angry / Happy / Relaxed / Sad。 |
| 266 | [xby-skill/xby-philippine-geocoding](https://github.com/xby-skill/xby-philippine-geocoding) | 0 | 2026-08-28 | 2026-09-02 | 提供菲律宾标准地理编码（PSGC）API访问的模型上下文协议（MCP）服务器，包含完整的菲律宾地理层级数据。 |
| 267 | [xby-skill/xby-pic](https://github.com/xby-skill/xby-pic) | 0 | 2026-08-28 | 2026-09-02 | 包括通用文本识别、手写识别、车牌识别、身份证识别、日常物体检测、昆虫识别、植物识别、护照识别、港澳台通行证识别、银行卡识别、营业执照识别、驾驶证识别、行驶证识别、动物识别、电动自行车检测、手机检测、手势检测、火焰检测、香烟检测、人头人体检测、野生动物检测、鸟类识别、宠物情绪识别、菜品识别、安全帽人体检测、行人检测、反光衣检测、车辆检测、图像分类、目标检测、旋转目标检测、人体姿态估计和万物识别。 |
| 268 | [xby-skill/xby-plant-recognition](https://github.com/xby-skill/xby-plant-recognition) | 0 | 2026-08-28 | 2026-09-02 | 识别植物名称（或所属科, 属, 种或亚种）。 |
| 269 | [xby-skill/xby-plate-recognition](https://github.com/xby-skill/xby-plate-recognition) | 0 | 2026-08-28 | 2026-09-02 | 识别车牌号、车牌颜色、单/双层车牌、位置框。 |
| 270 | [xby-skill/xby-pose](https://github.com/xby-skill/xby-pose) | 0 | 2026-08-28 | 2026-09-02 | 检测图像中的人物，输出边界框和关键点坐标。每人有 17 个关键点，每个点代表人体不同的部位，依次为鼻子、左眼、右眼、左耳、右耳、左肩、右肩、左肘、右肘、左腕、右腕、左髋、右髋、左膝、右膝、左脚踝、右脚踝。 |
| 271 | [xby-skill/xby-pubchem](https://github.com/xby-skill/xby-pubchem) | 0 | 2026-08-28 | 2026-09-02 | 该服务通过PubChem API提取药物基础化学信息，包括分子式、分子量、CAS号等关键数据。 |
| 272 | [xby-skill/xby-qanon](https://github.com/xby-skill/xby-qanon) | 0 | 2026-08-28 | 2026-09-02 | 一个提供QAnon帖子数据集访问的MCP服务器，用于人类学和社会学研究，支持搜索、过滤和分析功能。 |
| 273 | [xby-skill/xby-quick-chart](https://github.com/xby-skill/xby-quick-chart) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol (MCP)的服务器，提供与Quick Chart交互的标准化接口，支持图表生成和管理。 |
| 274 | [xby-skill/xby-random-generator](https://github.com/xby-skill/xby-random-generator) | 0 | 2026-08-28 | 2026-09-02 | 一款符合MCP协议的加密安全随机数生成服务器，适用于AI应用、LLM及其他需要高质量随机数的系统。 |
| 275 | [xby-skill/xby-random-number](https://github.com/xby-skill/xby-random-number) | 0 | 2026-08-28 | 2026-09-02 | 提供伪随机和加密安全的随机数生成功能，包括整数、浮点数、加权选择、列表洗牌和安全令牌生成。 |
| 276 | [xby-skill/xby-react-composer-kit](https://github.com/xby-skill/xby-react-composer-kit) | 0 | 2026-08-28 | 2026-09-02 | 一个为Composer Kit React组件库提供文档、示例和使用信息的MCP服务器，专为在Celo区块链上构建web3应用而设计。 |
| 277 | [xby-skill/xby-read-pdf](https://github.com/xby-skill/xby-read-pdf) | 0 | 2026-08-28 | 2026-09-02 | 一个支持AI助手读取和分析PDF文件的MCP服务器，提供PDF元数据提取、页面范围阅读和关键词搜索等功能。 |
| 278 | [xby-skill/xby-read-website](https://github.com/xby-skill/xby-read-website) | 0 | 2026-08-28 | 2026-09-02 | 一个快速、高效的网页内容提取工具，将网页转换为干净的Markdown格式，适用于AI代理、IDE和LLM管道。 |
| 279 | [xby-skill/xby-real-time-news](https://github.com/xby-skill/xby-real-time-news) | 0 | 2026-08-28 | 2026-09-02 | 实时新闻 |
| 280 | [xby-skill/xby-recipe-query](https://github.com/xby-skill/xby-recipe-query) | 0 | 2026-08-28 | 2026-09-02 | 一个支持通过命令行查询菜谱和报菜名的菜谱查询工具，适用于烹饪爱好者和开发者。 |
| 281 | [xby-skill/xby-recog](https://github.com/xby-skill/xby-recog) | 0 | 2026-08-28 | 2026-09-02 | 包括通用文本识别、手写识别、车牌识别、身份证识别、护照识别、港澳台通行证识别、银行卡识别、营业执照识别、驾驶证识别、行驶证识别。 |
| 282 | [xby-skill/xby-reflective-vest](https://github.com/xby-skill/xby-reflective-vest) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，检测人员是否穿戴反光衣，输出图片中所有目标的检测框、置信度和标签（safe/unsafe）。 |
| 283 | [xby-skill/xby-remember-memory](https://github.com/xby-skill/xby-remember-memory) | 0 | 2026-08-28 | 2026-09-02 | 一个基于分类的持久化记忆系统实现，允许Claude跨聊天会话存储和检索分类记忆信息。 |
| 284 | [xby-skill/xby-review-code](https://github.com/xby-skill/xby-review-code) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol (MCP)的代码审查工具服务器，提供多维度的代码审查和打分功能。 |
| 285 | [xby-skill/xby-rfc-doc](https://github.com/xby-skill/xby-rfc-doc) | 0 | 2026-08-28 | 2026-09-02 | 一个用于从ietf.org网站获取、解析和阅读RFC文档的MCP服务器，提供程序化交互工具。 |
| 286 | [xby-skill/xby-running-formulas](https://github.com/xby-skill/xby-running-formulas) | 0 | 2026-08-28 | 2026-09-02 | 一个提供全面的跑步计算工具的MCP服务器，包括VDOT计算、训练配速、比赛时间预测、速度标记、心率区间和配速转换等功能。 |
| 287 | [xby-skill/xby-scan-code](https://github.com/xby-skill/xby-scan-code) | 0 | 2026-08-28 | 2026-09-02 | CodeGuard MCP是一款实时AI代码安全扫描工具，用于检测AI生成代码中的漏洞、密钥和合规性问题，适用于开发环境中的代码安全审查。 |
| 288 | [xby-skill/xby-search-apple-docs](https://github.com/xby-skill/xby-search-apple-docs) | 0 | 2026-08-28 | 2026-09-02 | 通过模型上下文协议（MCP）访问苹果官方开发者文档、框架、API及WWDC视频，支持AI驱动的自然语言查询，提供Swift/Objective-C代码示例和技术指南。 |
| 289 | [xby-skill/xby-search-movie](https://github.com/xby-skill/xby-search-movie) | 0 | 2026-08-28 | 2026-09-02 | 一个基于 Model Context Protocol (MCP) 构建的智能电影和电视剧资源搜索工具，支持多源搜索和链接验证。 |
| 290 | [xby-skill/xby-seg](https://github.com/xby-skill/xby-seg) | 0 | 2026-08-28 | 2026-09-02 | 实例分割比目标检测更进一步，不但要识别图像中的单个对象，还要将其从图像的其余部分中分割出来。对图像中的80类COCO目标进行实例分割，输出边界框、掩膜、置信度和类别标签。 |
| 291 | [xby-skill/xby-sequentialthinking](https://github.com/xby-skill/xby-sequentialthinking) | 0 | 2026-08-28 | 2026-09-02 | 一个实现顺序思维协议的MCP服务器，提供结构化的问题解决方法，将复杂问题分解为可管理的步骤，并支持迭代优化和替代推理路径。 |
| 292 | [xby-skill/xby-smart-search](https://github.com/xby-skill/xby-smart-search) | 0 | 2026-08-28 | 2026-09-02 | Smart Search MCP 是一个专注于技术领域的智能搜索工具集，提供14个增强型搜索工具，覆盖国际和国内主流技术平台，具备智能URL生成、输入验证、高级搜索技巧等功能，适用于开发者快速查找技术文档、API参考、开源项目等。 |
| 293 | [xby-skill/xby-smoking-detection](https://github.com/xby-skill/xby-smoking-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，对其中的香烟目标进行检测，输出图片中所有目标的检测框、置信度和标签。 |
| 294 | [xby-skill/xby-source-coop](https://github.com/xby-skill/xby-source-coop) | 0 | 2026-08-28 | 2026-09-02 | 一个用于发现和访问800TB+地理空间数据的MCP服务器，支持AI客户端通过JSON-RPC协议进行交互，提供智能搜索和高效数据访问功能。 |
| 295 | [xby-skill/xby-speech-synthesis](https://github.com/xby-skill/xby-speech-synthesis) | 0 | 2026-08-28 | 2026-09-02 | 一个集成了Microsoft Edge高质量语音合成能力的MCP服务器，支持多语言语音生成、音频合并和云端存储。 |
| 296 | [xby-skill/xby-structured-argumentation](https://github.com/xby-skill/xby-structured-argumentation) | 0 | 2026-08-28 | 2026-09-02 | 一组模型上下文协议服务器，为大型语言模型提供认知增强工具。 |
| 297 | [xby-skill/xby-subnet-calculator](https://github.com/xby-skill/xby-subnet-calculator) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol的服务，提供IPv4子网规划工具，包括子网大小计算、通配符掩码生成、网关选择和主机验证等功能。 |
| 298 | [xby-skill/xby-text-toolkit](https://github.com/xby-skill/xby-text-toolkit) | 0 | 2026-08-28 | 2026-09-02 | 一个提供文本转换、格式化和分析功能的MCP服务器，可直接集成到开发工作流中。 |
| 299 | [xby-skill/xby-text-transformer](https://github.com/xby-skill/xby-text-transformer) | 0 | 2026-08-28 | 2026-09-02 | 提供多种文本转换功能的MCP服务器，包括大小写转换、反转字符串、检测回文等功能。 |
| 300 | [xby-skill/xby-the-met](https://github.com/xby-skill/xby-the-met) | 0 | 2026-08-28 | 2026-09-02 | 查询搜索和获取博物馆的开放藏品数据 |
| 301 | [xby-skill/xby-time](https://github.com/xby-skill/xby-time) | 0 | 2026-08-28 | 2026-09-02 | 提供时间和时区转换功能的模型上下文协议服务器，支持获取当前时间和时区转换。 |
| 302 | [xby-skill/xby-time-zone](https://github.com/xby-skill/xby-time-zone) | 0 | 2026-08-28 | 2026-09-02 | 一个全面的MCP服务器，提供全球时区管理和时间转换功能，适用于全球业务协调、旅行规划和开发运维。 |
| 303 | [xby-skill/xby-todolist](https://github.com/xby-skill/xby-todolist) | 0 | 2026-08-28 | 2026-09-02 | 为大型语言模型和AI代理提供外部工作记忆和任务管理功能，支持复杂多步骤任务的可靠执行。 |
| 304 | [xby-skill/xby-toronto-open-data-server](https://github.com/xby-skill/xby-toronto-open-data-server) | 0 | 2026-08-28 | 2026-09-02 | 一个通过CKAN API直接访问多伦多开放数据的MCP服务器，支持智能数据集发现、灵活查询和CSV数据预览，专为LLM代理设计。 |
| 305 | [xby-skill/xby-traditional-chinese-medicine-formulas-kg](https://github.com/xby-skill/xby-traditional-chinese-medicine-formulas-kg) | 0 | 2026-08-28 | 2026-09-02 | 围绕中药方剂、方名、来源、别名、处方、中药名、剂量、功能主治及其之间的联系构建知识谱图。仅限初步研究，具体应用需根据实际情况调整。 |
| 306 | [xby-skill/xby-traditional-chinese-medicine-kg](https://github.com/xby-skill/xby-traditional-chinese-medicine-kg) | 0 | 2026-08-28 | 2026-09-02 | 围绕中药名，中药材，别名，来源，分布，功能，主治，归经，四气，四气及其之间的联系构建知识谱图。仅限初步研究，具体应用需根据实际情况调整。 |
| 307 | [xby-skill/xby-uk-police-data-query](https://github.com/xby-skill/xby-uk-police-data-query) | 0 | 2026-08-28 | 2026-09-02 | 一个提供英国警察数据查询的MCP服务器，包括犯罪记录、警察部队、社区信息和拦截搜查数据。 |
| 308 | [xby-skill/xby-vnstock](https://github.com/xby-skill/xby-vnstock) | 0 | 2026-08-28 | 2026-09-02 | 一个非官方的MCP服务器，提供访问越南股市数据的工具，包括实时和历史股票价格、公司财务数据、市场统计和基金信息等。 |
| 309 | [xby-skill/xby-web-research-assistant](https://github.com/xby-skill/xby-web-research-assistant) | 0 | 2026-08-28 | 2026-09-02 | 一个提供网络研究和发现功能的综合模型上下文协议（MCP）服务器，包含13种工具用于搜索、爬取和分析网络内容。 |
| 310 | [xby-skill/xby-who-is](https://github.com/xby-skill/xby-who-is) | 0 | 2026-08-28 | 2026-09-02 | 一个基于Model Context Protocol (MCP)的WHOIS域名查询服务器，支持877+顶级域名和169个国家代码顶级域名的解析，提供全面的域名注册信息查询功能。 |
| 311 | [xby-skill/xby-wikimedia-search-images](https://github.com/xby-skill/xby-wikimedia-search-images) | 0 | 2026-08-28 | 2026-09-02 | 该MCP服务器使AI助手能够在Wikimedia Commons上搜索图片，提供详细的元数据和可选的缩略图组合，帮助AI模型进行视觉比较。 |
| 312 | [xby-skill/xby-wild-animal-detection](https://github.com/xby-skill/xby-wild-animal-detection) | 0 | 2026-08-28 | 2026-09-02 | 输入一张图像，输出图像中所有识别到的野生动物的检测框、置信度及标签。 |
| 313 | [xiaoxiaohai/dsh-remote](https://github.com/xiaoxiaohai/dsh-remote) | 0 | 2026-08-27 | 2026-09-02 | Secure, opt-in phone access for DeepSeek Harness Web on macOS. |
| 314 | [xingtu1996/dsh-xingtu-skills](https://github.com/xingtu1996/dsh-xingtu-skills) | 0 | 2026-09-02 | 2026-09-02 | DeepSeek Harness (DSH) plugin: 26 production AI-agent skills (Caveman token compression, Ponytail minimalism, engineering practice) as a standard dsh-plugin bundle. 行途技能 DSH 插件包 |
| 315 | [xswt442-cmd/dsh-ballast](https://github.com/xswt442-cmd/dsh-ballast) | 0 | 2026-08-31 | 2026-09-02 | DSH 上下文窗口逐条归因面板——看谁占了窗口 \| Per-message context window attribution for DSH — see what takes up the window |
| 316 | [xswt442-cmd/dsh-mini-utility-dock](https://github.com/xswt442-cmd/dsh-mini-utility-dock) | 0 | 2026-09-02 | 2026-09-02 | 一个简单的 DSH 工具坞 \| A simple utility dock for DSH |
| 317 | [yakoylp/dsh-localnotify](https://github.com/yakoylp/dsh-localnotify) | 0 | 2026-09-01 | 2026-09-02 | DSH 本地通知栏插件：侧边栏【通知】入口 + 全屏通知中心（时间筛选/搜索/未读已读/删除/详情一键复制），notify_add agent 工具 + CLI 写入，JSON 持久化，实时刷新，界面跟随 dsh web 语言切换。Local notification center for DeepSeek Harness: notify_add agent tool & CLI, live refresh, i18n. |
| 318 | [Yinxe/dsh-mcwiki-search](https://github.com/Yinxe/dsh-mcwiki-search) | 0 | 2026-08-29 | 2026-09-02 | MCBE WIKI 搜索工具 |
| 319 | [Yinxe/dsh-tavily-search](https://github.com/Yinxe/dsh-tavily-search) | 0 | 2026-09-01 | 2026-09-02 | Tavily AI search provider for DeepSeek Harness |
| 320 | [Yiyang0659/dsh-git-sync](https://github.com/Yiyang0659/dsh-git-sync) | 0 | 2026-09-02 | 2026-09-02 | Git Config Sync Center for DeepSeek Harness — real-time config sync to GitHub with conflict self-healing and multi AI-tool adapters (OpenCode/Cline/Roo Code/Kilo Code/Continue/goose/Agent Zero) |
| 321 | [youridol/dsh-launcher](https://github.com/youridol/dsh-launcher) | 0 | 2026-09-01 | 2026-09-02 | deepseek-harness 启动器与运行环境管理器（Tauri 2 + Rust + React） |
| 322 | [YuiKiZJ2026/dsh-slot-homestead](https://github.com/YuiKiZJ2026/dsh-slot-homestead) | 0 | 2026-09-02 | 2026-09-02 | 老虎机庄园｜A pixel-art desktop ecosystem for DSH with time-based fish, crop and animal growth, day/night ambience and collectible slot rewards. |
| 323 | [yushenghai1106/dsh-memory-plugin](https://github.com/yushenghai1106/dsh-memory-plugin) | 0 | 2026-09-02 | 2026-09-02 | Pluggable persistent memory bundle for DeepSeek Harness |
| 324 | [zaizaizhao/dsh-branchmark](https://github.com/zaizaizhao/dsh-branchmark) | 0 | 2026-08-30 | 2026-09-02 | 为开发者提供重点知识摘录、可追溯 Session 树和注意力分叉，让主 Session 始终专注于当前目标，让每条支线都能找回来源，让 Vibe Coding 告别注意力丢失。 |
| 325 | [zhangxingong/dsh-polish](https://github.com/zhangxingong/dsh-polish) | 0 | 2026-09-01 | 2026-09-02 | 需要你做的 UI 验收（重启后逐项过一遍）  1. 书本图标右侧出现四角星按钮：细线空心、四角顶点小圆点、浅灰，与相邻按钮同尺寸，深色主题正常 2. 悬浮显示「优化并细化当前用户输入」 3. 权限下拉切 Read Only → 按钮置灰；切回恢复 4. 空输入点击 → Toast「请先输入内容再进行优化细化」 5. 有文本点击 → loading 旋转 → 全文覆盖（非追加）→ 光标在末尾可直接续写 6. 优化质量抽查：保留原意、逻辑通顺、无废话、语气一致、无解释性前后缀 7. 机器回复运行中按钮置灰；+新增/Read Only/书本图标/发送等原功能无回归 |
| 326 | [ZK-Andy/dsh-frecency](https://github.com/ZK-Andy/dsh-frecency) | 0 | 2026-09-01 | 2026-09-02 | Resident-index + frecency file search for DeepSeek Harness — shadows the built-in grep/glob tools · DSH 常驻索引 + frecency 文件搜索，同名覆盖内置 grep/glob |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- AndyWipe13/dsh-session-management
- Eternalloveone/dsh-palm
- goatliamia/dsh-runtime-capabilities
- leogottadothebest/DSH-Archived-Delete
- lovaxi/4d4y-browser
- MST19711/dsh-opencode-go-usage
- SsTtone1/dsh-message-cleaner
- Tinnikx/dsh-desktop
- Tinnikx/dsh-operation-improve
- xie-tj/dsh-easy-exit
- xuzhougeng/dsh-wisp-science-lab
- yhfgyyf/dsh-guardian-mode
