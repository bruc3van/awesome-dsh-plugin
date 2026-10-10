# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-10**
- 快照日期 / Snapshot date: **2026-10-10 (UTC)**
- 待审核 / Pending: **219**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **34**
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

对比上一份快照 **2026-10-09** / vs previous snapshot **2026-10-09**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **7**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) | 待审 / pending | 1949 | +17 | 73 | 56d | 待审高星 | 核准即 Top 8 |
| ⚠️ [FeiZhuLulu/DeepSeek-Bot](https://github.com/FeiZhuLulu/DeepSeek-Bot) | 待审 / pending | 129 | — | 5 | 2d | 待审高星 | 核准即榜 #117；创建 2 天 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 6738 | +1276 | 137 | 15d | 日增百星 | 日增 +1276★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 12941 | +340 | 467 | 57d | 日增百星 | 日增 +340★；已不进榜单 |
| ⚠️ [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) | 已核准 / approved | 166 | +113 | 3 | 1d | 日增百星、新入 Top 200 | 日增 +113★；新入 Top 200 #88；创建 1 天 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 6074 | +106 | 259 | 56d | 日增百星 | 日增 +106★；已不进榜单 |
| ⚠️ [xcisxc29/dsh-wechat](https://github.com/xcisxc29/dsh-wechat) | 已核准 / approved | 76 | +71 | 5 | 2d | 新入 Top 200 | 新入 Top 200 #194 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) ⚠️ | 1949 | 2026-08-14 | 2026-10-10 | Embracing All Creation (Desktop) — Dedicated to the Harmonious Coexistence of Hundreds of DSH Plugins / 揽尽万象（桌面版） —— 致力于让数百个DSH插件和谐共存 |
| 2 | [FeiZhuLulu/DeepSeek-Bot](https://github.com/FeiZhuLulu/DeepSeek-Bot) ⚠️ | 129 | 2026-10-07 | 2026-10-10 | A team of long-lived bots for DeepSeek Harness, with main bots, bot-to-bot messages and group chats. |
| 3 | [Ebony-Vinyl/EAC-Pack](https://github.com/Ebony-Vinyl/EAC-Pack) | 31 | 2026-10-01 | 2026-10-10 | Embracing All Creation (Plugin Suite) — Dedicated to the Harmonious Coexistence of Hundreds of DSH Plugins / 揽尽万象（插件整合包） —— 致力于让数百个DSH插件和谐共存 |
| 4 | [Ebony-Vinyl/EAC-skin-loader](https://github.com/Ebony-Vinyl/EAC-skin-loader) | 25 | 2026-09-25 | 2026-10-10 | DSH UI Skin Loader / DSH UI 皮肤加载器 |
| 5 | [mistnest/dsh-cuigengji-plugin](https://github.com/mistnest/dsh-cuigengji-plugin) | 18 | 2026-09-26 | 2026-10-10 | 给大肥鱼一个小说工作台：一起写正文、讨论后续情节、整理人物与世界设定，让长篇创作更贴近你的想法。 |
| 6 | [dsh-plugin-lab/dsh-zhihu-search](https://github.com/dsh-plugin-lab/dsh-zhihu-search) | 11 | 2026-09-12 | 2026-10-10 | DSH 插件：基于知乎开放平台官方 API 创建的站内搜索、全网索引搜索与直答三个工具。搜索不幻觉，引用有出处。（原生嵌入“设置-插件-插件配置”） |
| 7 | [dsh-plugin-lab/dsh-workbuddy-bridge](https://github.com/dsh-plugin-lab/dsh-workbuddy-bridge) | 6 | 2026-09-25 | 2026-10-10 | DSH 插件：把 WorkBuddy 桌面 App 里的模型接入 DeepSeek Harness，零配置直接用。（原生嵌入"设置-插件-插件配置"） |
| 8 | [lerqian883-alt/dsh-plugin-ml-phase-gate](https://github.com/lerqian883-alt/dsh-plugin-ml-phase-gate) | 5 | 2026-10-10 | 2026-10-10 | Evidence-backed ML phase gates, live visualization, and portable project bootstrap for DeepSeek Harness. |
| 9 | [weixinlll/dsh-tavern-image](https://github.com/weixinlll/dsh-tavern-image) | 5 | 2026-10-07 | 2026-10-10 | DSH Tavern 剧情配图插件，支持 ComfyUI 与多种在线生图服务。 |
| 10 | [Rinai-R/kivotos](https://github.com/Rinai-R/kivotos) | 4 | 2026-10-08 | 2026-10-10 | Open and drive every dsh on your tailnet from any dsh, with a complete phone layout. |
| 11 | [yanfei0725/dsh-qwen-paint](https://github.com/yanfei0725/dsh-qwen-paint) | 4 | 2026-10-10 | 2026-10-10 | 面向 DeepSeek Harness 的本地图像生成插件（优化版）：经本机 ComfyUI 调用 Qwen-Image 2.1 生成图像，全部流量限于 127.0.0.1。本版增强推理性能、NVIDIA/Intel/AMD 显卡适配与 Windows/Linux 兼容。原作者 @奇迹与你，优化版 @yanfei0725。 |
| 12 | [feely0208/deepwhale-desktop](https://github.com/feely0208/deepwhale-desktop) | 3 | 2026-08-16 | 2026-10-10 | 深鲸桌面 · 永久免费开源的 DeepSeek Harness 桌面壳（背景皮肤/桌面宠物/用量面板） |
| 13 | [iasiv5/dsh-skip-browser-auth](https://github.com/iasiv5/dsh-skip-browser-auth) | 3 | 2026-09-04 | 2026-10-10 | DSH 插件：（Web Profile 专用）自动跳过 BrowserAuth，访问 Web 地址即可直接使用，无需每次复制启动 URL 中的随机 Token 到浏览器。 |
| 14 | [jackxiao17/dsh-session-cleaner](https://github.com/jackxiao17/dsh-session-cleaner) | 3 | 2026-10-05 | 2026-10-10 | DSH 桌面版会话清理插件：侧栏 ··· 菜单一键删除会话入回收站，支持搜索、恢复、彻底删除与对话记录查看 \| DSH desktop plugin: delete sessions from the sidebar ... menu into a recycle bin with search, restore, permanent delete and chat log viewer |
| 15 | [JianHeShui/dsh-desktop-glass](https://github.com/JianHeShui/dsh-desktop-glass) | 3 | 2026-10-10 | 2026-10-10 | Frosted-glass look for the DeepSeek Harness desktop app (translucent page + Windows acrylic window material) |
| 16 | [XGUIMAX/dsh-tavern-wrongbook](https://github.com/XGUIMAX/dsh-tavern-wrongbook) | 3 | 2026-09-23 | 2026-10-10 | DSH Tavern 错题库：按人物卡分类记下调试中踩过的坑，先查本卡、再跨卡。 / Per-card defect ledger for DSH Tavern. |
| 17 | [ChenYiming-aaa/better-trip-planner](https://github.com/ChenYiming-aaa/better-trip-planner) | 2 | 2026-10-01 | 2026-10-10 | 中国境内旅行规划 Agent Skill：逐小时行程、高德静态路线图、12306/携程深链、七套渲染主题、内容门禁，附杭州到青岛 5 天实战示例 |
| 18 | [deepsleepAquarium/dsh-whale-post](https://github.com/deepsleepAquarium/dsh-whale-post) | 2 | 2026-10-04 | 2026-10-10 | 给同一台机器上的多个 AI 会话（或多台引擎）的异步信箱 —— 默认离线、信不会丢、万物皆插件（DSH / Cordis 风格） · An asynchronous mailbox for several AI sessions on one machine (or several engines): offline by default, letters are not lost, everything is a plugin |
| 19 | [dingchenhui0618-arch/dsh-in-hand](https://github.com/dingchenhui0618-arch/dsh-in-hand) | 2 | 2026-09-20 | 2026-10-10 | 掌上 DSH（dsh-in-hand）：DeepSeek Harness 的手机端，不用装 App——一份只读任务监控页长成的手机浏览器客户端（PWA）：会话、实时对话、交付文件、后台任务与待批准；也自带一个 GUI 侧边栏面板。 / DSH in hand: the phone client for DeepSeek Harness with no app to install, plus a GUI sidebar panel. |
| 20 | [dsh-plugin-lab/dsh-ds-balance](https://github.com/dsh-plugin-lab/dsh-ds-balance) | 2 | 2026-09-17 | 2026-10-10 | DSH 插件：在左侧栏底部显示 DeepSeek 账户余额（原生 UI），设置页提供连接、展示币种、预警阈值与刷新节奏的配置卡片。（原生嵌入“设置-插件-插件配置”） |
| 21 | [dushaobindoudou/dsh-plugin-security](https://github.com/dushaobindoudou/dsh-plugin-security) | 2 | 2026-10-07 | 2026-10-10 | Plugin security review for DeepSeek Harness: dependency advisories, contextual evidence, AI-assisted review, and reversible enforcement. |
| 22 | [felixpu/dsh-env-inspector-plus](https://github.com/felixpu/dsh-env-inspector-plus) | 2 | 2026-10-10 | 2026-10-10 | 环境体检：在「设置 → 环境体检」加一个分页，展示当前 DSH 宿主进程的身份（pid / 入口 / 工作目录 / Node / 运行时长）与环境变量分组（总数、DSH_ 前缀组、凭证形态组），值一律不出宿主；同时给模型一个只读的 env_inspect 工具。 |
| 23 | [LuckVd/dsh-btw](https://github.com/LuckVd/dsh-btw) | 2 | 2026-08-21 | 2026-10-10 | DeepSeek Harness Web 插件 · BTW 侧问面板：随手弹窗追问，独立一次性会话，不污染主对话上下文 |
| 24 | [wobenshiwomu/dsh-facet](https://github.com/wobenshiwomu/dsh-facet) | 2 | 2026-10-10 | 2026-10-10 | DeepSeek Harness 插件：切面（facet）—— /visualize 一个名字或 arXiv 链接，主 agent 调研 + 双子代理并行生成 2D/3D 架构图谱，浮窗直接弹出 \| A name or paper in, structured diagram windows out |
| 25 | [Zoragyx/dsh-phone-pair](https://github.com/Zoragyx/dsh-phone-pair) | 2 | 2026-10-10 | 2026-10-10 | 手机上的 DSH 客户端（通用配对版）：密码锁屏 + 内置前端 + 与自己的电脑配对；附可选配套插件。灵感与配对思路来自开源插件 @linxin666/dsh-remote-web-ui（Apache-2.0），感谢原作者；本项目与其无隶属关系。 |
| 26 | [18477514055/dsh-ledger-memory](https://github.com/18477514055/dsh-ledger-memory) | 1 | 2026-10-10 | 2026-10-10 | 台账记忆（Ledger Memory）—— DSH 的工程化项目记忆：台账 + 活动日志(L0-L4) + 三层上下文压缩 + 逐字胶囊落盘 + 跨会话交接单。可回溯、可追查。 |
| 27 | [2277533612/dsh-zhixiaohang-guard](https://github.com/2277533612/dsh-zhixiaohang-guard) | 1 | 2026-10-10 | 2026-10-10 | 智小航的渠道保护 |
| 28 | [3ChatAI-NCT/3chatai-deepseek-harness-plugin](https://github.com/3ChatAI-NCT/3chatai-deepseek-harness-plugin) | 1 | 2026-09-17 | 2026-10-10 | 3chat.ai skills |
| 29 | [66wjz/dsh-model-cap](https://github.com/66wjz/dsh-model-cap) | 1 | 2026-10-10 | 2026-10-10 | DSH 提供商与模型高级管理台 · Provider &amp; model management console for DeepSeek Harness (dsh) |
| 30 | [awaygu/mcp-design-toolbox](https://github.com/awaygu/mcp-design-toolbox) | 1 | 2026-08-28 | 2026-10-10 | MCP servers that turn Lanhu design specs, Tencent CoDesign prototypes, and Shimo i18n sheets into structured data your AI coding agent can actually consume. 把蓝湖设计稿、CoDesign 原型、石墨翻译表转成 AI 编码 Agent 可直接消费的结构化数据。 |
| 31 | [BangBang-03/dsh-memory](https://github.com/BangBang-03/dsh-memory) | 1 | 2026-10-10 | 2026-10-10 | DSH 工作区长期记忆插件：会话开始注入记忆摘要、memory 工具按需读写、轮次结束自动提炼，设置面板里可查看与管理；支持把 Qoder / WorkBuddy 的既有记忆导入。 |
| 32 | [BillCx330/dsh-plugin-notify-sounds](https://github.com/BillCx330/dsh-plugin-notify-sounds) | 1 | 2026-10-05 | 2026-10-10 | DeepSeek Harness的提醒插件 |
| 33 | [bitsmug/dsh-sandbox-mxc](https://github.com/bitsmug/dsh-sandbox-mxc) | 1 | 2026-10-10 | 2026-10-10 | A DeepSeek Harness sandbox provider backed by MXC (Microsoft eXecution Containers). |
| 34 | [bloodarea/dsh-knowspace](https://github.com/bloodarea/dsh-knowspace) | 1 | 2026-10-10 | 2026-10-10 | Agent-native, local-first knowledge management plugin for DeepSeekHarness with Markdown, WebDAV sync, and extensible RAG. |
| 35 | [Canye-zdm/dsh-serial](https://github.com/Canye-zdm/dsh-serial) | 1 | 2026-10-10 | 2026-10-10 | 把电脑串口接进 DeepSeek Harness——让 AI 能看见 Arduino/STM32/ESP32 的运行时输出（面板 + AI 工具双通道） |
| 36 | [Charaaah/dsh-web-api-balance](https://github.com/Charaaah/dsh-web-api-balance) | 1 | 2026-10-10 | 2026-10-10 | DeepSeek Harness (DSH) Web 插件：输入框旁常驻显示 DeepSeek API 余额；悬停展开左栏账户余额、右栏本次对话消耗（缓存命中/未命中/输出分档，峰谷自动判断），胶囊右半滑出可充值。 |
| 37 | [eaglezlee/dsh-ui-html](https://github.com/eaglezlee/dsh-ui-html) | 1 | 2026-10-09 | 2026-10-10 | Renders sandboxed interactive HTML in a chat turn and sends the user's selections, clicks and form input back to the model — as a new user message by default, or as the tool result in blocking mode. |
| 38 | [EJDRONE/dsh-multi-acp](https://github.com/EJDRONE/dsh-multi-acp) | 1 | 2026-10-09 | 2026-10-10 | 让 DSH 的一个会话由外部 ACP agent CLI 作为根 agent 驱动 |
| 39 | [feely0208/dsh-cn-skills](https://github.com/feely0208/dsh-cn-skills) | 1 | 2026-09-27 | 2026-10-10 | DSH 中文合规与工程技能集：对外内容合规审核、中文公文排版（GB/T 9704）、发布前自检。Chinese compliance &amp; release-preflight skills for DeepSeek Harness. |
| 40 | [felixpu/dsh-lock](https://github.com/felixpu/dsh-lock) | 1 | 2026-10-10 | 2026-10-10 | 密码门禁：打开 DSH 时先显示密码界面，解锁后才能使用；支持手动锁定与自动锁定，密码以 scrypt 单向哈希存储。 |
| 41 | [felixpu/dsh-restart-autostart](https://github.com/felixpu/dsh-restart-autostart) | 1 | 2026-10-10 | 2026-10-10 | 在 DSH 网页版「设置 → 通用」加入进程控制行：手动重启 dsh web 宿主进程，以及「跟随系统启动」勾选框（写入 macOS launchd / Linux systemd / Windows 服务自启条目，开机拉起并在崩溃后自动重启）。 |
| 42 | [felixpu/dsh-settings-params](https://github.com/felixpu/dsh-settings-params) | 1 | 2026-10-10 | 2026-10-10 | 集中管理注入宿主的环境变量，并支持按白名单热重载那些启动时只读一次环境变量的插件（如 dsh-sql），免重启即可读取新值。 |
| 43 | [Fish-under-sea/dsh-agent-teams-fish](https://github.com/Fish-under-sea/dsh-agent-teams-fish) | 1 | 2026-10-04 | 2026-10-10 | DSH 插件（上游 NanmiCoder/dsh-agent-teams 的补充版）：AgentTeams 多智能体团队协作 —— 自然语言组队、任务依赖 DAG、信箱通信、右侧栏树状监测；随包自带 15 厂商 × 10 岗位头像与 15 个厂商徽标，支持自定义美术目录与中文岗位名。 |
| 44 | [frankshi2024/dsh-web-app](https://github.com/frankshi2024/dsh-web-app) | 1 | 2026-10-09 | 2026-10-10 | AI 交付给人类的可交互产物：单文件 HTML 小工具/小游戏/面板住 Git 仓库，/webapp 对话内嵌打开，交互结果一键回传驱动模型 \| DSH plugin |
| 45 | [godlike985/dsh-sidebar-editor](https://github.com/godlike985/dsh-sidebar-editor) | 1 | 2026-10-10 | 2026-10-10 | 在 DSH 右侧栏预览代码文件、按名字搜索工作区文件，并把选中行一键引用进对话框 ｜ Preview code files in the DSH sidebar, search workspace files by name, and reference the selected lines into the composer |
| 46 | [hairyf/dsh-tool-activator](https://github.com/hairyf/dsh-tool-activator) | 1 | 2026-10-10 | 2026-10-10 | 🗃️ 为 DSH 默认只加载基础工具，其余工具通过 activate_tools 按需加载。\| Load only basic DSH tools by default, and activate the rest on demand via activate_tools. |
| 47 | [iasiv5/dsh-copilot-auth](https://github.com/iasiv5/dsh-copilot-auth) | 1 | 2026-09-04 | 2026-10-10 | DSH 插件：为 DSH 内置 GitHub Copilot 通道补充网页设备码登录 / 注销入口，预置开箱即用 Provider 路由，支持模型列表管理。 |
| 48 | [iasiv5/dsh-m](https://github.com/iasiv5/dsh-m) | 1 | 2026-09-03 | 2026-10-10 | DSH 插件市场：Marketplace for DeepSeek Harness plugins · dsh-m |
| 49 | [iasiv5/dsh-quota-watch](https://github.com/iasiv5/dsh-quota-watch) | 1 | 2026-09-28 | 2026-10-10 | DSH 插件：常驻悬浮胶囊，直观展示 GLM Coding Plan 与 GitHub Copilot 额度快照、订阅用量详情。 |
| 50 | [ilun886/dsh-harmonyos-devkit](https://github.com/ilun886/dsh-harmonyos-devkit) | 1 | 2026-10-10 | 2026-10-10 | 个人移植HarmonyOS/ArkTS 开发套件，DeepSeek Harness (DSH) 组合包。含 ArkTS·ArkUI 规则库（按需注入）、44 个鸿蒙官方 AI agent skill（ArkUI 开发 / DFX 崩溃与内存·FD 泄漏分析 / Kit 集成 / 多设备与折叠屏 / 测试 / 迁移）、可离线运行的 arkts_check 静态检查（秒级、无需工程 READY）、以及可选的 HarmonyOS LSP。开箱即用，无需手工改配置或复制 skill 目录。 |
| 51 | [jojoman2024/dsh-memj](https://github.com/jojoman2024/dsh-memj) | 1 | 2026-10-10 | 2026-10-10 | 基于项目逻辑的dsh记忆系统，项目基于交接文档，知识基于项目沉淀。以人实际工作的逻辑，做知识的聚合和交接。开放书写规范以及全插件提示词的前端编辑（热加载），用户可自行优化，或者让模型帮插件通过修改提示词自进化。 |
| 52 | [LUDIWUSI12138/dsh-sqy-rewind](https://github.com/LUDIWUSI12138/dsh-sqy-rewind) | 1 | 2026-10-10 | 2026-10-10 | Rewind a DSH session to before a turn you already sent. |
| 53 | [mirelconstantin/dsh-ponytail-sync](https://github.com/mirelconstantin/dsh-ponytail-sync) | 1 | 2026-10-10 | 2026-10-10 | Ponytail lazy-senior-dev mode as a native DeepSeek Harness skill, system-prompt section and six slash commands. Always available, level-switchable, no external process. |
| 54 | [mirelconstantin/dsh-postgres-expert](https://github.com/mirelconstantin/dsh-postgres-expert) | 1 | 2026-10-10 | 2026-10-10 | PostgreSQL expertise for DeepSeek Harness: 11 curated pg-aiguide skills from Tiger Data registered natively, plus the pg-aiguide MCP server for version-exact manual search. |
| 55 | [NINKCH/dsh-artcraft](https://github.com/NINKCH/dsh-artcraft) | 1 | 2026-10-10 | 2026-10-10 | Drive the open-source ArtCraft studio apps — PhotoCraft, FilmCraft, EffectCraft... — from DeepSeek Harness, in chat or from your own UI. |
| 56 | [NINKCH/dsh-infinite_canvas](https://github.com/NINKCH/dsh-infinite_canvas) | 1 | 2026-10-10 | 2026-10-10 | A node-based short-drama studio inside DeepSeek Harness. Start from a one-line idea, walk out with a storyboarded, voiced, subtitled video cut — right on an infinite canvas. |
| 57 | [P-JIANGH/dsh-enhance](https://github.com/P-JIANGH/dsh-enhance) | 1 | 2026-10-09 | 2026-10-10 | oh-my-zsh-style enhancement bundle for DeepSeek Harness (dsh): packaged skills, work-rule prompt guidance, the Enhance agent preset with a persistent deep-work prompt section, guards + delivery gate, work tracking, worktrees, advisor — install and go |
| 58 | [prgrmrwy/ohmydsh](https://github.com/prgrmrwy/ohmydsh) | 1 | 2026-08-18 | 2026-10-10 | dsh 集成配置 |
| 59 | [Ronniealgo/dsh-find-file](https://github.com/Ronniealgo/dsh-find-file) | 1 | 2026-10-10 | 2026-10-10 | Permission-wall-immune file search for DeepSeek Harness (DSH): the find_file agent tool skips unreadable directories, reports them with errno, and never lets a failed walk pose as an empty result. |
| 60 | [Shuffle-1992/zcode-dispatch](https://github.com/Shuffle-1992/zcode-dispatch) | 1 | 2026-09-30 | 2026-10-10 | 把任务派发给本机 ZCode CLI 无头进程的 DeepSeek Harness 插件：面板可监视/终止/续跑/换通道；单写者文件锁 + 用量台账 + 降级链。支持付费套餐与免费额度（Start Plan 活动赠送）两种额度，后者托管官方 agent 走 app-server。 |
| 61 | [SkanderBog/dsh-context-manager](https://github.com/SkanderBog/dsh-context-manager) | 1 | 2026-10-02 | 2026-10-10 | Inspect and selectively compact DeepSeek Harness conversation context with reviewable checkpoints |
| 62 | [SkanderBog/dsh-pdf-reader](https://github.com/SkanderBog/dsh-pdf-reader) | 1 | 2026-10-02 | 2026-10-10 | Page-aware PDF reading, local OCR, citations, and visual crops for DeepSeek Harness |
| 63 | [Smallcarve/dsh-better-keymap](https://github.com/Smallcarve/dsh-better-keymap) | 1 | 2026-10-10 | 2026-10-10 | DeepSeek Harness shortcuts on your terms: a later assignment overrides an earlier one, displacements are reported, and even the composer's send/newline/complementary keys are rebindable. 让 DeepSeek Harness 快捷键由你说了算：后设组合覆盖先设、被清空的会告知你，连输入框的发送/换行/互补三键也可改绑。 |
| 64 | [visheshgubrani/clean-dev](https://github.com/visheshgubrani/clean-dev) | 1 | 2026-10-10 | 2026-10-10 | Lean agent skill for AI assisted development, plan-first development, approved phases, clean code, AGENTS.md, architecture notes, and decision records |
| 65 | [Wei894348/dsh-wb2api](https://github.com/Wei894348/dsh-wb2api) | 1 | 2026-10-09 | 2026-10-10 | Self-hosted gateway plugin for DeepSeek Harness: registers a local WorkBuddy / CodeBuddy account pool as OpenAI-compatible model providers, with a web settings panel and a task-automation engine. |
| 66 | [whf-jx/dsh-wallpaper](https://github.com/whf-jx/dsh-wallpaper) | 1 | 2026-10-10 | 2026-10-10 | DSH Web GUI 本地壁纸插件:上传本地图片/视频、手动切换、定时轮换与随机播放,带清晰度/压暗/模糊/填充调节 |
| 67 | [XSJUSTC/dsh-favourite](https://github.com/XSJUSTC/dsh-favourite) | 1 | 2026-10-10 | 2026-10-10 | Favorites for DeepSeek Harness (DSH): star sessions/workspaces, favourites-only filter, hide unfavourites, pin with hover metadata, star color, fork inheritance. |
| 68 | [ysefu/dsh-sidebar-tags](https://github.com/ysefu/dsh-sidebar-tags) | 1 | 2026-10-10 | 2026-10-10 | Colored session tags for the DeepSeek Harness sidebar - tag a session from its row, see it at a glance, and filter history by tag. |
| 69 | [YubaiLoving/dsh-followup-suggestions](https://github.com/YubaiLoving/dsh-followup-suggestions) | 1 | 2026-10-10 | 2026-10-10 | Follow-up suggestion chips under a DSH session's last completed reply, generated with that session's own selected model. |
| 70 | [yuchenlogin/noname-dsh-plugin](https://github.com/yuchenlogin/noname-dsh-plugin) | 1 | 2026-10-08 | 2026-10-10 | NoName Agent Harness as a DeepSeek Harness plugin: context as an asset — append-only evidence, versioned memory, taste as a first-class citizen, audited approvals. |
| 71 | [YX-bobi/deepseek-harness-desktop](https://github.com/YX-bobi/deepseek-harness-desktop) | 1 | 2026-08-14 | 2026-10-10 | DeepSeek Harness 桌面客户端 —— 内置官方 dsh 运行时与本地文件/视觉/记忆插件,数据全本地、无遥测;macOS / Windows 双平台 |
| 72 | [17897693/wen-wanan](https://github.com/17897693/wen-wanan) | 0 | 2026-10-10 | 2026-10-10 | DSH 技能：情侣向睡前陪伴。一句温柔情话 → 一个谐音梗猜谜小故事 → 一句温柔晚安。131 条谐音词对、43 个落点，纯 Markdown、零依赖。 |
| 73 | [AAAlenwow/dsh-spring-admin-kit](https://github.com/AAAlenwow/dsh-spring-admin-kit) | 0 | 2026-10-10 | 2026-10-10 | Spring Boot admin toolkit: EasyExcel batch import/export code generation and Thymeleaf+LayUI template safety guard. 企业后台开发技能包。 |
| 74 | [AAAlenwow/dsh-weknora-archive](https://github.com/AAAlenwow/dsh-weknora-archive) | 0 | 2026-10-10 | 2026-10-10 | Incrementally archive DeepSeek Harness sessions into a self-hosted WeKnora knowledge base: extract, summarize, dedupe, upload. DSH 会话归档进 WeKnora 知识库。 |
| 75 | [acdsh4869/DSH-Transparent-UI-Plugin](https://github.com/acdsh4869/DSH-Transparent-UI-Plugin) | 0 | 2026-10-10 | 2026-10-10 | Aqua glassmorphism theme plugin for DeepSeek Harness (DSH v0.2.x / desktop v0.22.3+) — original by WYH66666666, adapted for 0.2.x |
| 76 | [adamcjm/dsh-genui-bugfix](https://github.com/adamcjm/dsh-genui-bugfix) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: fixes dsh-ui table cells painting text over the next column, and wraps long cells instead of forcing a horizontal scrollbar. |
| 77 | [AhYi8/dsh-gotify-notify](https://github.com/AhYi8/dsh-gotify-notify) | 0 | 2026-10-10 | 2026-10-10 | DSH 的 Gotify 通知插件 |
| 78 | [alexisvaleev/dsh-plugin-devin](https://github.com/alexisvaleev/dsh-plugin-devin) | 0 | 2026-10-06 | 2026-10-10 | Unofficial Devin CLI bridge for DeepSeek Harness: devin delegation tool, /devin command, and a Devin LLM provider route with ACP model discovery |
| 79 | [AndyPBI/dsh-plugin-galaxy](https://github.com/AndyPBI/dsh-plugin-galaxy) | 0 | 2026-09-16 | 2026-10-10 | Plugin Galaxy — a visual plugin marketplace inside DeepSeek Harness: browse, search, and one-click install community plugins. · DSH 可视化插件星系 |
| 80 | [Arbeiter-bit/dsh-reedit](https://github.com/Arbeiter-bit/dsh-reedit) | 0 | 2026-10-08 | 2026-10-10 | Double-click any of your own messages to rewrite it and resend from that point; the original conversation is untouched. |
| 81 | [Aurora-Lucas/dsh-chrome-browser](https://github.com/Aurora-Lucas/dsh-chrome-browser) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: a model-facing \`chrome\` tool that drives the installed Google Chrome over CDP — screenshots returned as images, DOM/text/eval, console &amp; network diagnostics, real input events. Runs in the Host, so no per-call approval and no bash sandbox limits. |
| 82 | [awol2005ex3/dsh-file-comment](https://github.com/awol2005ex3/dsh-file-comment) | 0 | 2026-10-10 | 2026-10-10 | \[DeepSeek Harness\](https://github.com/deepseek-ai/deepseek-harness) 插件：在右侧边栏文件预览中选中文本，添加评论并发送到会话输入框。 |
| 83 | [B1aZerr/dsh-net-switch](https://github.com/B1aZerr/dsh-net-switch) | 0 | 2026-10-10 | 2026-10-10 | Runtime network switch for DeepSeek Harness: flip Harness's own outbound traffic between a local Clash Verge proxy and direct/LAN without restarting, driven from a top-right status pill, the network_mode agent tool and the /net command. |
| 84 | [baigei0710/dsh-remote-frp](https://github.com/baigei0710/dsh-remote-frp) | 0 | 2026-10-10 | 2026-10-10 | Remote access for the DeepSeek Harness Web GUI via your own cloud server: frp reverse tunnel managed as a macOS LaunchAgent, plus the server-side setup script. |
| 85 | [bihong2026/dsh-arcade](https://github.com/bihong2026/dsh-arcade) | 0 | 2026-10-09 | 2026-10-10 | 🎮 GameHub Arcade — DeepSeek Harness sidebar plugin: 90+ classic open-source browser games, play instantly, zero installs. 1000+ planned. |
| 86 | [bihong2026/tankbattle](https://github.com/bihong2026/tankbattle) | 0 | 2026-10-10 | 2026-10-10 | 打坦克（Battle City）：一个 DeepSeek Harness / dsh 侧栏插件，纯前端跑红白机经典坦克大战，支持单人、组队打 NPC 与双队互相对战，含可选联机后台 |
| 87 | [BinXie-lixiangdehua/dsh-devflow](https://github.com/BinXie-lixiangdehua/dsh-devflow) | 0 | 2026-09-22 | 2026-10-10 | 开发工作流 |
| 88 | [blackstar-baba/dsh-bird-bike](https://github.com/blackstar-baba/dsh-bird-bike) | 0 | 2026-10-10 | 2026-10-10 | 像素小鸡骑自行车 —— DSH Web GUI 底部的我的世界像素风骑行带 / A DSH client plugin: a helmeted pixel chicken rides a bicycle along a Minecraft-style strip docked at the bottom of the app frame. Day/night cycle, bell, jumps, headlight, ride stats. |
| 89 | [BlackThunder2191026/dsh-deepseek-usage](https://github.com/BlackThunder2191026/dsh-deepseek-usage) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness 插件：侧边栏实时余额 + 每轮对话花费（人民币，含 token 明细） |
| 90 | [ca610/dsh-culprit](https://github.com/ca610/dsh-culprit) | 0 | 2026-10-10 | 2026-10-10 | Find the commit that broke it: bisect a failing predicate over git history and get the culprit, its diff, and every probe's evidence. |
| 91 | [CaiBai-Fish/dsh-continuechat](https://github.com/CaiBai-Fish/dsh-continuechat) | 0 | 2026-10-10 | 2026-10-10 | Manually resume an interrupted DSH conversation: /continue and an action-row action pick the run up exactly where it stopped. |
| 92 | [casteadelqui/dsh-go](https://github.com/casteadelqui/dsh-go) | 0 | 2026-10-10 | 2026-10-10 | 围棋模式 for DeepSeek Harness — a playable Go (Weiqi/Baduk) board tab, complete rules engine, five AI levels, and a tutor that plays with you. |
| 93 | [ccccty/proposal-generator-cn](https://github.com/ccccty/proposal-generator-cn) | 0 | 2026-10-10 | 2026-10-10 | 项目书生成 - 科研项目申报书撰写技能包（DSH plugin） |
| 94 | [ChordXD/dsh-image-compare](https://github.com/ChordXD/dsh-image-compare) | 0 | 2026-10-10 | 2026-10-10 | Compare several images at once in DeepSeek Harness: 1/2/3/4/6 per page, per-image zoom and pan, and one image's zoom + viewed position synced onto the whole set. No image bytes enter the model context. |
| 95 | [ComeCaramelos/dsh-unity-mcp](https://github.com/ComeCaramelos/dsh-unity-mcp) | 0 | 2026-10-08 | 2026-10-10 | Connects DSH to the Unity MCP server |
| 96 | [cumthugo/dsh-deepseek-offpeak-indicator](https://github.com/cumthugo/dsh-deepseek-offpeak-indicator) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: a 5px dot left of the model name in the composer tool row — yellow for DeepSeek peak hours, green for off-peak (half price). Rendered only when the session's model provider is DeepSeek. |
| 97 | [czpGhost/dsh-glm-web-search](https://github.com/czpGhost/dsh-glm-web-search) | 0 | 2026-10-09 | 2026-10-10 | Z.AI (GLM) web search, web reader and vision for DeepSeek Harness, authenticated by a Z.AI email (OAuth) login instead of an API key |
| 98 | [DenAbr/dsh-compact-selected-model](https://github.com/DenAbr/dsh-compact-selected-model) | 0 | 2026-10-09 | 2026-10-10 | DeepSeek Harness plugin: /compact uses the currently selected model, not the one that finished the last turn |
| 99 | [devil233-ui/dsh-auto-review-default](https://github.com/devil233-ui/dsh-auto-review-default) | 0 | 2026-10-10 | 2026-10-10 | Starts every newly created DeepSeek Harness session in the built-in Auto review permission preset instead of the configured default preset. |
| 100 | [dsh-remote/client](https://github.com/dsh-remote/client) | 0 | 2026-10-08 | 2026-10-10 | Official WeChat mini program for DSH Remote Control: scan a QR code to pair your desktop host, then send prompts, watch streaming output, answer approvals and questions. Open and use, no install. 黑鲸远控官方微信小程序：扫码配对主机，发指令、看流式输出、回答审批与提问。 |
| 101 | [dsh-remote/plugin](https://github.com/dsh-remote/plugin) | 0 | 2026-10-08 | 2026-10-10 | DeepSeek Harness (DSH) host plugin: control DSH from your phone — approve tool calls, watch streaming output, answer questions. Payload-level end-to-end encryption, zero-knowledge relay. 手机远程操作 DeepSeek Harness：审批工具调用、看流式输出、回答问题，端到端加密，可自托管中继。 |
| 102 | [dsh-remote/protocol](https://github.com/dsh-remote/protocol) | 0 | 2026-10-08 | 2026-10-10 | Wire protocol for DSH Remote Control: sealed-record encryption (XSalsa20-Poly1305), key derivation, pairing URI, relay control frames, payload catalog. Pure functions, zero I/O. DSH 远控的线协议层：密封记录加密、KDF、配对 URI、控制帧与载荷目录，纯函数零 I/O。 |
| 103 | [dsh-remote/relay](https://github.com/dsh-remote/relay) | 0 | 2026-10-08 | 2026-10-10 | Zero-knowledge WebSocket relay for DSH Remote Control: routes sealed records between the host plugin and paired phones, never parses payloads. Single-file bundle, self-hostable, Docker image. 零知识 WebSocket 中继：只路由从不解析载荷，单文件产物可自托管。 |
| 104 | [EDDY597/dsh-opencode-gateway](https://github.com/EDDY597/dsh-opencode-gateway) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness (DSH) 插件：把本机 opencode 生态接入 DSH 模型菜单——OpenCode Go 订阅（经 opencode-api-plugin 网关）+ Zen 免费档（内嵌 opencode2api，无需网关运行） |
| 105 | [equasen/dsh-font](https://github.com/equasen/dsh-font) | 0 | 2026-09-15 | 2026-10-10 | DeepSeek Harness plugin: customize the Web GUI fonts (interface font, code font, and font sizes) from Settings |
| 106 | [erlingmijiang/dsh-lorebooklike-prompt-tool](https://github.com/erlingmijiang/dsh-lorebooklike-prompt-tool) | 0 | 2026-10-10 | 2026-10-10 | dsh插件，模仿酒馆世界书设计的分层提示词注入。DSH 的声明式提示词注入层：分层锚点、蓝绿灯、可复现概率、三面正则替换。类酒馆世界书，但不是角色扮演前端，而是提示词工程工具。 |
| 107 | [fangqiing/dsh-knowledge-lite](https://github.com/fangqiing/dsh-knowledge-lite) | 0 | 2026-10-10 | 2026-10-10 | 本地知识库插件 for DeepSeek Harness：每篇一个 Markdown，支持全文搜索、标签、层级目录、附件与 Office 零依赖抽取 |
| 108 | [feely0208/dsh-shell-canvas](https://github.com/feely0208/dsh-shell-canvas) | 0 | 2026-10-10 | 2026-10-10 | 深鲸画布 · DSH 插件：把一段文字变成能发的视频。稿子、素材、成片都在你自己的电脑上，不上传、不联网。免费版可用。 |
| 109 | [Fish-under-sea/dsh-better-reasoning-effort-fish](https://github.com/Fish-under-sea/dsh-better-reasoning-effort-fish) | 0 | 2026-10-05 | 2026-10-10 | DSH 插件（上游 HaoyueQin/dsh-better-reasoning-effort 的 Fork）：在官方「模型」页编辑卡里直接编辑每模型的思考强度（reasoningEfforts）与输入模态（input）声明，并支持一键适配；本 Fork 让出模型能力面板的席位。 |
| 110 | [fishcg/dsh-input-prediction](https://github.com/fishcg/dsh-input-prediction) | 0 | 2026-10-10 | 2026-10-10 | DSH 输入预测插件：输入框灰字续写下一句（Tab 接受）+ 每轮回答后 1–3 条可一键发送的候选 |
| 111 | [flycucu/dsh-icon-changer](https://github.com/flycucu/dsh-icon-changer) | 0 | 2026-10-04 | 2026-10-10 | 用于切换deepseek harness桌面端图标的插件 |
| 112 | [freeqin123/dsh-commandcode-plans-provider](https://github.com/freeqin123/dsh-commandcode-plans-provider) | 0 | 2026-10-10 | 2026-10-10 | Command Code 订阅（Go/GOAT/Pro/Max）接入 DeepSeek Harness：档位过滤不隐藏任何模型、可视化配置 API Key、底部用量环、图片输入 |
| 113 | [FuriousKinght/dsh-restart-button](https://github.com/FuriousKinght/dsh-restart-button) | 0 | 2026-10-10 | 2026-10-10 | A button at the foot of the sidebar that restarts the DSH desktop app and reloads the page when it comes back. |
| 114 | [FurryBear2025/dsh-session-drag-move](https://github.com/FurryBear2025/dsh-session-drag-move) | 0 | 2026-10-10 | 2026-10-10 | DSH 左侧栏会话跨工作区拖拽：把会话拖到别的工作区，真正改写会话日志 header 的 cwd 并把日志目录迁到目标项目下，改变归属而不只是改名。 |
| 115 | [HangZhouXi/dsh-xiaoyi](https://github.com/HangZhouXi/dsh-xiaoyi) | 0 | 2026-10-10 | 2026-10-10 | Turn your phone's Huawei XiaoYi into a remote control for the DSH agent on your own PC. DSH (DeepSeek Harness) host plugin for XiaoYi OpenClaw mode: zero third-party deps, hand-written RFC6455 WebSocket client, AK/SK auth, heartbeat, A2A streaming, SSRF-hardened inbound attachments. |
| 116 | [Hann428/dsh-hann-usage-dashboard](https://github.com/Hann428/dsh-hann-usage-dashboard) | 0 | 2026-08-18 | 2026-10-10 | DeepSeek Harness Usage tab for balance, official peak/off-peak pricing, live countdown, and platform usage link. |
| 117 | [hfbcwhy7gh-cpu/dsh-sidebar-tidy](https://github.com/hfbcwhy7gh-cpu/dsh-sidebar-tidy) | 0 | 2026-10-10 | 2026-10-10 | DSH 侧栏收纳插件：把「插件 / 自动化任务 / 上下文洞察 / 技能中心」面板图标收进侧栏底部的可折叠入口，让新会话在最上、工作区居中。 |
| 118 | [hojas/dsh-price-tip](https://github.com/hojas/dsh-price-tip) | 0 | 2026-10-10 | 2026-10-10 | 侧栏的 DeepSeek API 价格时段提醒：当前处于空闲时段还是高峰时段、距离切换还有多久，以及当前生效的价目表。 |
| 119 | [HuanLinOTO/dsh-plugin-prts-neuron](https://github.com/HuanLinOTO/dsh-plugin-prts-neuron) | 0 | 2026-10-10 | 2026-10-10 | 把 DSH WebUI 运行状态行换成 PRTS 神经元连接态（内联压缩动图图标 + 文案替换） \| Replaces the DSH WebUI Chat running-status row with a PRTS neuron connection state (inlined compressed animated icon + copy swap) |
| 120 | [hyssshnbbis/dsh-local-model-supervisor](https://github.com/hyssshnbbis/dsh-local-model-supervisor) | 0 | 2026-10-10 | 2026-10-10 | AI-written. Lazy-start a local llama.cpp model on demand and release RAM/VRAM when idle, with a DSH plugin. 由 AI 编写：本地大模型「用到才起、不用就放」—— 按需冷启动 + 空闲自动释放 + 假上下文上限兜住压缩 |
| 121 | [Ian-Yunqi/dsh-plugin-boot-whale-maid](https://github.com/Ian-Yunqi/dsh-plugin-boot-whale-maid) | 0 | 2026-10-10 | 2026-10-10 | 🐋 DSH 开机动画插件：鲸鱼厨娘 / 鲸鱼女仆优雅登场，御姐气质、深海宫殿与暖金微光。支持点击或 Esc 跳过。Whale Maid startup animation plugin for DSH. |
| 122 | [icrefin/dsh-agent-prompt](https://github.com/icrefin/dsh-agent-prompt) | 0 | 2026-10-10 | 2026-10-10 | Edit the AGENTS.md instruction files DeepSeek Harness actually loads - user-global and per-workspace - from a left-sidebar panel in the GUI. |
| 123 | [jagathsrujan/dsh-youtube-study-notes](https://github.com/jagathsrujan/dsh-youtube-study-notes) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: turn a YouTube link into study notes — captions, on-screen content via vision, then your own notes merged in. |
| 124 | [Jia-HuaWu/dsh-ujn-image](https://github.com/Jia-HuaWu/dsh-ujn-image) | 0 | 2026-10-10 | 2026-10-10 | 在 DeepSeek Harness 里用济南大学大模型平台生成与编辑图片（文生图 + 图生图） |
| 125 | [john-walks-slow/dsh-cd](https://github.com/john-walks-slow/dsh-cd) | 0 | 2026-10-10 | 2026-10-10 | Session working-directory override for DeepSeek Harness: a cd tool that makes relative paths in the file tools and the bash default workdir follow the new directory, per-session and cache-safe, without moving the session or its workspace root. |
| 126 | [Johnly1986/AmberFlow](https://github.com/Johnly1986/AmberFlow) | 0 | 2026-09-30 | 2026-10-10 | 冻结计划的自动化中间件（TypeScript / Node ≥ 22.6）：LLM 只规划一次，执行由本地规则与决策模型逐步完成，演示一次后既可端侧执行。 |
| 127 | [JUYANJY/dsh-codex-bridge](https://github.com/JUYANJY/dsh-codex-bridge) | 0 | 2026-10-10 | 2026-10-10 | Observe and steer a local Codex (OpenAI) session from DeepSeek Harness, over the codex app-server protocol. |
| 128 | [ken95573/dsh-model-show](https://github.com/ken95573/dsh-model-show) | 0 | 2026-10-10 | 2026-10-10 | 同时显示AI模型和供应商 |
| 129 | [KILLEDx/dsh-token-stats](https://github.com/KILLEDx/dsh-token-stats) | 0 | 2026-10-10 | 2026-10-10 | DSH设置页 Token 统计分区：跨会话用量指标、热力图与常驻悬浮小窗（读本地日志，零模型消耗） |
| 130 | [kjx-talesofai/dsh-plugin-theme-workbench](https://github.com/kjx-talesofai/dsh-plugin-theme-workbench) | 0 | 2026-10-10 | 2026-10-10 | Five themes for the DeepSeek Harness Web client. Each ships a light and a dark palette. |
| 131 | [leeingo136-blip/dsh-plugin-cfl](https://github.com/leeingo136-blip/dsh-plugin-cfl) | 0 | 2026-10-10 | 2026-10-10 | Deepseek harness plugin release. |
| 132 | [LFF28/dsh-web-relay](https://github.com/LFF28/dsh-web-relay) | 0 | 2026-09-16 | 2026-10-10 | Expose your local dsh web to any device through a self-hosted relay: SSH reverse tunnel, Caddy gateway password, no inbound ports. |
| 133 | [Li-0803/dsh-session-search](https://github.com/Li-0803/dsh-session-search) | 0 | 2026-10-06 | 2026-10-10 | Full-text search for DeepSeek Harness sessions with precise message navigation. |
| 134 | [liaimei/dsh-cost-breakdown](https://github.com/liaimei/dsh-cost-breakdown) | 0 | 2026-10-10 | 2026-10-10 | DSH 会话费用账单：账号余额 + 峰谷计价 + 每个会话（含子代理衍生会话）的消耗构成，输入框下方读数与右侧栏面板双入口。 DeepSeek Harness session cost breakdown: balance, peak/off-peak pricing, and how each session's spend is composed. |
| 135 | [liaosiliangCodeLife/harness-mate-dsh](https://github.com/liaosiliangCodeLife/harness-mate-dsh) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness (dsh) plugin: use the agent running on your own computer from your phone or browser — bridge to the HarnessMate platform. |
| 136 | [lingziba/dshedge](https://github.com/lingziba/dshedge) | 0 | 2026-10-10 | 2026-10-10 | 让 DeepSeek Harness (DSH) 直接驱动本机 Microsoft Edge 的 Host 插件：CDP 启动/接管、开标签、导航、执行 JS、取正文、截图、点击、输入。零第三方依赖。 |
| 137 | [LINinLIN-0079/godot-imagegen](https://github.com/LINinLIN-0079/godot-imagegen) | 0 | 2026-10-10 | 2026-10-10 | DSH 插件「美术工坊」：把本机秋叶 SD WebUI / ComfyUI 接进 DeepSeek Harness，对话里直接出图、改写并运行 ComfyUI 工作流，产物落成 Godot 可用美术资产 |
| 138 | [liu-zhengdong/dsh-recall](https://github.com/liu-zhengdong/dsh-recall) | 0 | 2026-10-10 | 2026-10-10 | DSH 插件：把每个 turn 归档为一条 Run，后台生成摘要，让 Agent 检索自己的执行历史 |
| 139 | [liu-zhengdong/dsh-shells](https://github.com/liu-zhengdong/dsh-shells) | 0 | 2026-10-10 | 2026-10-10 | DSH 插件：给 Agent 多个跨平台持久后台 shell（zsh/cmd/gitbash/pwsh），侧边栏面板跟随 PTY 流 |
| 140 | [liu-zhengdong/dsh-simple-memory](https://github.com/liu-zhengdong/dsh-simple-memory) | 0 | 2026-10-05 | 2026-10-10 | 把 Markdown 记忆目录接入 DSH：每轮常驻索引，正文按需读取 |
| 141 | [LiuJiaCheng11/dsh-postman](https://github.com/LiuJiaCheng11/dsh-postman) | 0 | 2026-10-10 | 2026-10-10 | DeepSeekHarness插件，允许你的AI直接操作你的Postman（网页版）的COLLECTIONS |
| 142 | [loyalchiiina/dsh-archive-favorites-forge](https://github.com/loyalchiiina/dsh-archive-favorites-forge) | 0 | 2026-10-10 | 2026-10-10 | Favorites, copy id+path, per-session delete, idle batch archive and a favourites filter for DSH conversations — additive slot extensions over the shipped archive feature, editing no official file. 为 DSH 对话增加收藏、复制 ID+路径、单条删除、超时批量归档与收藏筛选。 |
| 143 | [lsl1931/dsh-server-panel](https://github.com/lsl1931/dsh-server-panel) | 0 | 2026-10-10 | 2026-10-10 | DSH Web UI plugin: a local server management console — resource overview, systemd services with live logs, file manager with on-demand sudo/root, apt updates, network, and a real PTY terminal. |
| 144 | [lyonleeeee/dsh-steer](https://github.com/lyonleeeee/dsh-steer) | 0 | 2026-10-10 | 2026-10-10 | Live status badge + non-interrupting in-flight guidance for DeepSeek Harness · DSH 会话头实时状态徽标 + 运行中指导（不打断，支持图片附件与插话历史） |
| 145 | [lzqzm/dsh-project-panel](https://github.com/lzqzm/dsh-project-panel) | 0 | 2026-10-07 | 2026-10-10 | Deepseek Harness 插件 |
| 146 | [MarchingWorkhorse/Output-Overview](https://github.com/MarchingWorkhorse/Output-Overview) | 0 | 2026-10-10 | 2026-10-10 | dsh产出统计，包括代码行，采纳率，文档数，编辑次数等信息 |
| 147 | [miku05231/dsh-provider-quote](https://github.com/miku05231/dsh-provider-quote) | 0 | 2026-10-10 | 2026-10-10 | DSH 插件：对正在使用的模型提供商询价（余额 + 单价，参考 cc-switch 的「服务商询价」） |
| 148 | [Moolight/dsh-shader-workbench](https://github.com/Moolight/dsh-shader-workbench) | 0 | 2026-10-10 | 2026-10-10 | 节点式 GLSL 工作台（DSH / DeepSeek Harness 插件）：拖节点出图 → Shadertoy 兼容实时预览 → 热重载 → 本地材质资源管理。零第三方运行时依赖，7 个自带示例，104 个用例。 |
| 149 | [MoruTeaven/dsh-model-quickslots](https://github.com/MoruTeaven/dsh-model-quickslots) | 0 | 2026-10-10 | 2026-10-10 | 在 DSH 输入框上方添加一排模型快捷切换按钮：左键切换模型，右键编辑预设，支持自定义备注 |
| 150 | [MPFF0104/dsh-plugin-dev-mpff](https://github.com/MPFF0104/dsh-plugin-dev-mpff) | 0 | 2026-10-10 | 2026-10-10 | 给 dsh（DeepSeek Harness）第三方插件作者用的 skill：从写插件、证明它真的生效，到把它发出去（裸目录束，不能用 dsh plugin add 安装）。An agent skill for dsh third-party plugin authors. |
| 151 | [MYming-yue/dsh-board](https://github.com/MYming-yue/dsh-board) | 0 | 2026-10-10 | 2026-10-10 | DSH 的持久化共同白板插件：完整白板在左、原生对话在右，人和 AI 持续维护同一份草稿。基于 draft-board。 |
| 152 | [Ok541151/cwk](https://github.com/Ok541151/cwk) | 0 | 2026-10-09 | 2026-10-10 | Agent mode picker for DSH: choose an external Agent CLI as the session's default executor, with automatic discovery of installed CLIs. |
| 153 | [OrderG-X/dsh-cu](https://github.com/OrderG-X/dsh-cu) | 0 | 2026-10-10 | 2026-10-10 | Vision-first desktop computer-use for DSH on macOS: OCR text targeting, set-of-mark element indices, and a Codex-style cursor with spring animation. No accessibility-tree dependency. |
| 154 | [Oskarosan/dsh-locale-es](https://github.com/Oskarosan/dsh-locale-es) | 0 | 2026-10-10 | 2026-10-10 | Pack de idioma castellano (es) para la interfaz de DeepSeek Harness: 2603 claves en 57 namespaces, plugin de cliente y respaldo automatico a ingles. |
| 155 | [Phoeky/dsh-sensenova-pool](https://github.com/Phoeky/dsh-sensenova-pool) | 0 | 2026-10-08 | 2026-10-10 | DeepSeek Harness插件：商汤日日新（SenseNova）多 Key 轮换池 — 填入key 即可零配置接入 DeepSeek Harness，遇 429 限流自动切换下一把 key。 |
| 156 | [pikaaQ/dsh-enforce](https://github.com/pikaaQ/dsh-enforce) | 0 | 2026-09-22 | 2026-10-10 | deepseek harness plugins and agents. |
| 157 | [PolinniZhong/dsh-apradar](https://github.com/PolinniZhong/dsh-apradar) | 0 | 2026-10-10 | 2026-10-10 | AI 产品雷达（AI Product Radar）—— DSH 插件：关注公开来源、识别前后变化、查看原始证据、沉淀产品机会。 |
| 158 | [prgrmrwy/dsh-sidebar-session-provider-icon](https://github.com/prgrmrwy/dsh-sidebar-session-provider-icon) | 0 | 2026-10-10 | 2026-10-10 | Show each sidebar session's currently selected model brand logo, updating immediately from the composer selector with a durable last-request fallback |
| 159 | [publieople/dsh-plugin-autoupdate](https://github.com/publieople/dsh-plugin-autoupdate) | 0 | 2026-10-08 | 2026-10-10 | Supply-chain-aware plugin updater for DeepSeek Harness: applies only versions pnpm release-age policy allows, snapshots and rolls back. |
| 160 | [puffo-ai/huddo-mcp](https://github.com/puffo-ai/huddo-mcp) | 0 | 2026-10-05 | 2026-10-10 | MCP server for Huddo: a group chat where people and AI agents talk in the same room |
| 161 | [qwq1999/dsh-panellist](https://github.com/qwq1999/dsh-panellist) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness PanelList Manager |
| 162 | [rayyugz/dsh-plugin-hunyuan-image](https://github.com/rayyugz/dsh-plugin-hunyuan-image) | 0 | 2026-10-10 | 2026-10-10 | Native DSH plugin for Tencent Hunyuan image generation. v1.0: two models (Hy-Image-3.5-preview up to 4K / 3.0), official resolution × aspect-ratio picker, batch 1/2/4, local gallery with search + regenerate, custom output folder, official advanced parameters, model-callable tool. Zero native deps; macOS/Windows/Linux. Docs in 8 languages. |
| 163 | [reliable-ly0411/babeldoc-pdf-translate](https://github.com/reliable-ly0411/babeldoc-pdf-translate) | 0 | 2026-10-10 | 2026-10-10 | Portable agent skill for layout-preserving PDF translation with BabelDOC, bilingual output and custom terminology |
| 164 | [RestRegular/dsh-memory](https://github.com/RestRegular/dsh-memory) | 0 | 2026-10-10 | 2026-10-10 | DSH memory plugin: local JSONL memory + embeddings + agent tools + settings panel |
| 165 | [rhl88/dsh-session-delete](https://github.com/rhl88/dsh-session-delete) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness（DSH）插件：在侧边栏会话菜单里加入删除会话（永久移除会话记录与完整历史，补足只能归档的限制）。 |
| 166 | [RicardoYan/dsh-session-delete](https://github.com/RicardoYan/dsh-session-delete) | 0 | 2026-10-09 | 2026-10-10 | Delete a DSH session together with all its subagent sessions · 永久删除 DSH 会话及其派生的所有子代理会话 |
| 167 | [scottzx/feature-blueprint](https://github.com/scottzx/feature-blueprint) | 0 | 2026-10-01 | 2026-10-10 | Mind maps and Excalidraw canvas for DeepSeek Harness, with local-file previews, standalone editors and CLIs. MIT, Node.js 22+. |
| 168 | [secondlgn/dsh-mail](https://github.com/secondlgn/dsh-mail) | 0 | 2026-10-10 | 2026-10-10 | DSH 邮件通道插件：一台机器一个专属邮箱，邮件即会话入口，回复即续接上下文（零运行时依赖） |
| 169 | [Seller-1990/dsh-model-smart-config](https://github.com/Seller-1990/dsh-model-smart-config) | 0 | 2026-10-10 | 2026-10-10 | Smart model setup for DeepSeek Harness third-party API providers: recognize a model ID and fill in context window, input modalities and reasoning levels. |
| 170 | [Short-Arm-Ape/dsh-sensitive-replace](https://github.com/Short-Arm-Ape/dsh-sensitive-replace) | 0 | 2026-10-10 | 2026-10-10 | Deepseek Harness 敏感字符自动替换插件，用于替换模型读取的敏感字符从而避免官方 API 400 错误。 |
| 171 | [Shuffle-1992/dsh-browser-kit](https://github.com/Shuffle-1992/dsh-browser-kit) | 0 | 2026-10-05 | 2026-10-10 | DSH built-in browser enhancement kit: element annotations (multi-window shared sessions), screenshot feedback, device traffic observation, and an implementation-session command channel. |
| 172 | [Shuffle-1992/dsh-connect-zcode](https://github.com/Shuffle-1992/dsh-connect-zcode) | 0 | 2026-09-30 | 2026-10-10 | 把 ZCode（Z.ai / BigModel）注册为 DeepSeek Harness（DSH）的 LLM provider：付费 Coding Plan 直连，免费额度（Start Plan 活动赠送）托管官方 agent 代发 —— 两种套餐模式都支持（provider 模式，非派发模式） |
| 173 | [Siloet-phy/dsh-skill-labels](https://github.com/Siloet-phy/dsh-skill-labels) | 0 | 2026-10-10 | 2026-10-10 | DSH plugin：为技能目录中的每项技能添加中文标题前缀，便于快速识别用途（html-ppt →【写PPT】）。 |
| 174 | [sixzjd/npm-usage](https://github.com/sixzjd/npm-usage) | 0 | 2026-10-10 | 2026-10-10 | Local usage statistics for DeepSeek Harness: token consumption, request count, cache hit rate and estimated cost as a native settings section. |
| 175 | [sorawithcat/dsh-health-reminder](https://github.com/sorawithcat/dsh-health-reminder) | 0 | 2026-10-10 | 2026-10-10 | DSH 插件：按自定义作息定时提醒喝水、起身、护眼和拉伸，多套方案随时切换，完全离线。 |
| 176 | [sorawithcat/dsh-settings-sync](https://github.com/sorawithcat/dsh-settings-sync) | 0 | 2026-10-10 | 2026-10-10 | 设置同步插件：一份 JSON 带走插件清单、profile 配置、DSH_HOME 文件与浏览器本地设置，导入后可一键重装插件；与插件市场的 dsh-profile-backup 0.2 格式互通。 |
| 177 | [Ssrs-Pro-Max/dsh-image-tiler](https://github.com/Ssrs-Pro-Max/dsh-image-tiler) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: shows oversized images to the model at readable resolution by tiling them before admission. |
| 178 | [sunnycreate/dsh-plugin-stand-reminder](https://github.com/sunnycreate/dsh-plugin-stand-reminder) | 0 | 2026-10-10 | 2026-10-10 | 一个面向久坐电脑前人群的 DeepSeek Harness 插件：按你设定的间隔提醒你站起来走动一下。 提醒文字内置了一整套（可直接用），也支持完全自定义。 |
| 179 | [takboo/dsh-coopanion](https://github.com/takboo/dsh-coopanion) | 0 | 2026-10-08 | 2026-10-10 | Animated desktop companion, task notifications, and session chat for DeepSeek Harness. |
| 180 | [takboo/dsh-session-bin](https://github.com/takboo/dsh-session-bin) | 0 | 2026-10-09 | 2026-10-10 | Native archived-session management for DeepSeek Harness with guarded permanent deletion and fixed batches. |
| 181 | [TianYa-DAO/dsh-opencode-go-pool](https://github.com/TianYa-DAO/dsh-opencode-go-pool) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness plugin: pool several OpenCode Go subscriptions behind one provider route, serve each request with the healthiest key, and fail over when a quota window is spent. |
| 182 | [TindalosKorone/dsh-agent-memory](https://github.com/TindalosKorone/dsh-agent-memory) | 0 | 2026-10-09 | 2026-10-10 | DSH 跨会话长期记忆插件：零运行时依赖、输出可自算自证、请求级隔离；每项机制都附能判红的取证（CC BY-NC-SA 4.0） |
| 183 | [ttmouse/dsh-generative-ui](https://github.com/ttmouse/dsh-generative-ui) | 0 | 2026-10-09 | 2026-10-10 | DSH 插件：AI 在对话流里直接输出可交互的 Generative UI 组件（沙箱 iframe，纯客户端） |
| 184 | [tuanzi0v0/dsh-search-picture](https://github.com/tuanzi0v0/dsh-search-picture) | 0 | 2026-10-10 | 2026-10-10 | 一款用于DSH的插件，可以直接使用DSH搜索并下载图片 |
| 185 | [umialpha/dsh-session-groups](https://github.com/umialpha/dsh-session-groups) | 0 | 2026-10-10 | 2026-10-10 | Cross-project pinned Session groups for DeepSeek Harness Web (alpha preview) |
| 186 | [Upstream196/dsh-label-tune](https://github.com/Upstream196/dsh-label-tune) | 0 | 2026-10-10 | 2026-10-10 | dsh字体亮度的控制 |
| 187 | [vitkuz573/dsh-token-saver](https://github.com/vitkuz573/dsh-token-saver) | 0 | 2026-10-10 | 2026-10-10 | DSH plugin: peak-hour billing guard for DeepSeek Harness, plus token-saving settings UI and a live session cost strip |
| 188 | [vowdemon/dsh-openspec-dashboard](https://github.com/vowdemon/dsh-openspec-dashboard) | 0 | 2026-10-09 | 2026-10-10 | View your project's OpenSpec changes, specs, and tasks in the DeepSeek Harness right sidebar. |
| 189 | [W0rry628/dsh-better-settings](https://github.com/W0rry628/dsh-better-settings) | 0 | 2026-10-10 | 2026-10-10 | DSH（DeepSeek Harness）插件：在侧边栏左下角账号栏那一行的右侧加一个设置齿轮按钮，一键直达设置页。 |
| 190 | [was35/dsh-reclaim](https://github.com/was35/dsh-reclaim) | 0 | 2026-10-10 | 2026-10-10 | 审计并安全回收 DSH 占用的空间：看清会话、附件与缓存各占多少、还被谁引用，清理一律进可恢复的隔离区（DeepSeek Harness 插件） |
| 191 | [wcdlan/dsh-qiniu-usage](https://github.com/wcdlan/dsh-qiniu-usage) | 0 | 2026-09-30 | 2026-10-10 | 给dsh做的 七牛云用量展示  省的每次都去官网看 |
| 192 | [WenOwen/dsh-your-turn](https://github.com/WenOwen/dsh-your-turn) | 0 | 2026-10-10 | 2026-10-10 | Turn-handoff reminder for DeepSeek Harness: a centred popup and a synthesized chime for every Agent handoff. |
| 193 | [wonderjz99/dsh-stock-dividend](https://github.com/wonderjz99/dsh-stock-dividend) | 0 | 2026-10-10 | 2026-10-10 | A 股分红账本 DSH 插件：按持仓 × 公开分红方案算应有的分红 |
| 194 | [WsttXm/DshNotice](https://github.com/WsttXm/DshNotice) | 0 | 2026-10-10 | 2026-10-10 | 给 DeepSeek Harness 桌面版加上 macOS 系统通知：需要你授权、提问、计划待审或一轮任务结束时弹横幅 \| Native macOS notifications for DeepSeek Harness |
| 195 | [xfy2412/dsh-time-reminder](https://github.com/xfy2412/dsh-time-reminder) | 0 | 2026-10-09 | 2026-10-10 | 给 DSH 的模型一只可调精度的时钟，外加会话内计时器。 |
| 196 | [xiaobai123name/dsh-web-search-guide](https://github.com/xiaobai123name/dsh-web-search-guide) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness (DSH) 联网搜索方案：AnySearch 搜索 + 本地网页抓取，不依赖对话模型渠道（ClinePass / 中转站 / 官方 API 都能用） |
| 197 | [xingxingbk-git/dsh-chat](https://github.com/xingxingbk-git/dsh-chat) | 0 | 2026-10-09 | 2026-10-10 | 为 DSH 提供 Chat / Harness 双模式切换 |
| 198 | [xingyingyuzhui/dsh-claw-delegate](https://github.com/xingyingyuzhui/dsh-claw-delegate) | 0 | 2026-08-18 | 2026-10-10 | Delegation broker for DeepSeek Harness. 委派深度、角色、worktree。 |
| 199 | [xingyingyuzhui/dsh-claw-gate](https://github.com/xingyingyuzhui/dsh-claw-gate) | 0 | 2026-08-18 | 2026-10-10 | Claw/session permission gate and audit for DeepSeek Harness. 拦截、审批、审计。 |
| 200 | [xingyingyuzhui/dsh-claw-identity](https://github.com/xingyingyuzhui/dsh-claw-identity) | 0 | 2026-08-18 | 2026-10-10 | Claw identity files for DeepSeek Harness. 把 SOUL / AGENTS 等人设打进提示词。 |
| 201 | [xingyingyuzhui/dsh-claw-memory](https://github.com/xingyingyuzhui/dsh-claw-memory) | 0 | 2026-08-18 | 2026-10-10 | Claw persistent memory for DeepSeek Harness. 金库、日记、回顾、压缩前冲洗。 |
| 202 | [xingyingyuzhui/dsh-claw-observability](https://github.com/xingyingyuzhui/dsh-claw-observability) | 0 | 2026-08-18 | 2026-10-10 | Shared Claw suite diagnostics for DeepSeek Harness. 治理插件共用诊断日志。 |
| 203 | [xingyingyuzhui/dsh-claw-permissions](https://github.com/xingyingyuzhui/dsh-claw-permissions) | 0 | 2026-08-18 | 2026-10-10 | Layered session permissions for DeepSeek Harness. 官方 ∩ Agent ∩ 本会话。 |
| 204 | [xingyingyuzhui/dsh-claw-policy](https://github.com/xingyingyuzhui/dsh-claw-policy) | 0 | 2026-08-18 | 2026-10-10 | Shared Claw/session policy schema for DeepSeek Harness. 策略契约，不拦截工具。 |
| 205 | [xingyingyuzhui/dsh-claw-registry](https://github.com/xingyingyuzhui/dsh-claw-registry) | 0 | 2026-08-18 | 2026-10-10 | Claw Agent registry for DeepSeek Harness: bind, isolate, archive. 工作区 Agent 登记 / 隔离 / 归档。 |
| 206 | [xjhao-heim/dsh-task-memory](https://github.com/xjhao-heim/dsh-task-memory) | 0 | 2026-10-09 | 2026-10-10 | DeepSeek Harness 插件:工作区级任务记忆,把做过的任务存成记忆卡,下次会话不必重新分析一遍。 |
| 207 | [xufu5438-netizen/dsh-boot-video](https://github.com/xufu5438-netizen/dsh-boot-video) | 0 | 2026-10-10 | 2026-10-10 | 给 DeepSeek Harness（DSH）加一段视频开机片头：启动时全屏播放 mp4、点击或 Esc 跳过、可导入自己的视频（解不了的编码自动转码成 H.264） |
| 208 | [xulixin1968/dsh-cookie-sync](https://github.com/xulixin1968/dsh-cookie-sync) | 0 | 2026-10-10 | 2026-10-10 | Sync cookies from Edge browser to DSH sidebar browser, avoiding repeated logins on supported sites. |
| 209 | [xulixin1968/dsh-paperless-retrieval](https://github.com/xulixin1968/dsh-paperless-retrieval) | 0 | 2026-10-10 | 2026-10-10 | Search a local Paperless-ngx document library with hybrid semantic + keyword retrieval, returning titles and key snippets as agent context. |
| 210 | [yanggaihao5-sys/dsh-artifact-stamp](https://github.com/yanggaihao5-sys/dsh-artifact-stamp) | 0 | 2026-10-10 | 2026-10-10 | DSH skill: inline version stamps for text artifacts, plus a drift check that works as a CI gate |
| 211 | [ybbms777/dsh-deepseek-pricing](https://github.com/ybbms777/dsh-deepseek-pricing) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness (DSH) plugin: deepseek_pricing_tier — is the DeepSeek API on peak (full price) or off-peak (half price) right now, and when does it flip. Zero network, no API key. |
| 212 | [YiQiuAcc/dsh-font-settings](https://github.com/YiQiuAcc/dsh-font-settings) | 0 | 2026-10-10 | 2026-10-10 | A DeepSeek Harness web plugin that replaces the font settings in general settings with searchable font pickers. |
| 213 | [YSwo-fei/dsh-api-heal](https://github.com/YSwo-fei/dsh-api-heal) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness 插件：界面报「API 密钥无效」时，自动定位并续期真正失效的那条凭据链（qoder / workbuddy-ai / our-free-model），然后重发请求。Self-healing credentials for DeepSeek Harness. |
| 214 | [YubaiLoving/dsh-pinned-session-bar](https://github.com/YubaiLoving/dsh-pinned-session-bar) | 0 | 2026-10-10 | 2026-10-10 | A DSH (DeepSeek Harness) Web GUI client plugin: a dedicated Pinned bar above the sidebar workspace list, collecting every pinned session with cross-container drag and drop. |
| 215 | [Zhang1025681484/dsh-md-editor](https://github.com/Zhang1025681484/dsh-md-editor) | 0 | 2026-10-09 | 2026-10-10 | Editable Markdown tab for the DeepSeek Harness right sidebar — Monaco editor, autosave, opens from the workspace file tree. |
| 216 | [zhaochengggg/dsh-machine-apps](https://github.com/zhaochengggg/dsh-machine-apps) | 0 | 2026-10-10 | 2026-10-10 | Machine directory, SSH health checks, and model-authored application UI cards for DeepSeek Harness |
| 217 | [zhaofeng130/dsh-rea](https://github.com/zhaofeng130/dsh-rea) | 0 | 2026-10-10 | 2026-10-10 | DeepSeek Harness adapter for REA (rea-agents): registers the reverse-engineer-anything skill plus the rea / rea_doctor tools in every session. REA itself is not bundled. |
| 218 | [ZinK33/dsh-plugin-glass-notepad](https://github.com/ZinK33/dsh-plugin-glass-notepad) | 0 | 2026-10-10 | 2026-10-10 | A floating black liquid-glass schedule plugin for DeepSeek Harness (DSH): work/personal categories, time ranges, a two-lane timeline and mainland-China holidays. |
| 219 | [zq0929/dsh-coding-plan-balance](https://github.com/zq0929/dsh-coding-plan-balance) | 0 | 2026-10-10 | 2026-10-10 | Coding Plan quota pill for the DSH (DeepSeek Harness) Web composer dock: monthly cycle usage in USD and the rolling 5-hour window, read with the credential your ctrip model provider already uses. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1021summer/dsh-session-search
- Arbeiter-bit/dsh-open-branch
- chenxinj08-lgtm/deepseek-harness-desktop
- citisen/dsh-font
- dingchenhui0618-arch/dsh-taskwatch
- DSH-EAC/EAC-Desktop
- DSH-EAC/EAC-Pack
- DSH-EAC/EAC-skin-loader
- Freakz2z/dsh-catgirl-plugin
- Freakz2z/dsh-evidence-ledger
- GuoMonth/dsh-multi-tenant
- iasiv5/skins
- J0ss077/dsh-always-require-tools-approval
- KhalilYamber/yammory-system
- lzqzm/dsh-magical-lowcode-project
- Perseus-Computing-LLC/perseus-vault-dsh
- quonaro/dsh-plugin-devin
- Short-Arm-Ape/dsh-intranet-browser
- tangzijie716/dsh-wechat-push
- TyrantG/dsh-titlecraft
- wangyaominde/dsh-llm-grok-oauth
- XGUIMAX/dsh-wrongbook
- xingyingyuzhui/dsh-agent-delegate
- xingyingyuzhui/dsh-agent-gate
- xingyingyuzhui/dsh-agent-identity
- xingyingyuzhui/dsh-agent-memory
- xingyingyuzhui/dsh-agent-policy
- xingyingyuzhui/dsh-agent-registry
- xingyingyuzhui/dsh-observability
- xingyingyuzhui/dsh-session-permissions
- zlZayn/dsh-ds-balance
- zlZayn/dsh-workbuddy-bridge
- zlZayn/dsh-zhihu-search
- zx06/dsh-plugins
