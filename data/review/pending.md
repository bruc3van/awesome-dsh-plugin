# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-02**
- 快照日期 / Snapshot date: **2026-10-02 (UTC)**
- 待审核 / Pending: **213**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **21**
- Star 异常增长 / Star-growth alerts: **5** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-01** / vs previous snapshot **2026-10-01**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **5**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [T-Auto/dsh-std](https://github.com/T-Auto/dsh-std) | 待审 / pending | 135 | -1 | 6 | 46d | 待审高星 | 核准即榜 #98 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 11664 | +272 | 423 | 49d | 日增百星 | 日增 +272★；已不进榜单 |
| ⚠️ [Clearailhc/clearai-dsh](https://github.com/Clearailhc/clearai-dsh) | 已核准 / approved | 1097 | +122 | 35 | 19d | 日增百星 | 日增 +122★；已不进榜单 |
| ⚠️ [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | 已核准 / approved | 693 | +104 | 28 | 7d | 日增百星、冲入 Top 20 | 日增 +104★；冲入 Top 20（22→19） |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 5335 | +101 | 243 | 48d | 日增百星 | 日增 +101★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [T-Auto/dsh-std](https://github.com/T-Auto/dsh-std) ⚠️ | 135 | 2026-08-16 | 2026-10-02 | DSH Plugin Interoperability Meta-Protocol / DSH 插件互操作元协议 |
| 2 | [breakstring/cfKanban](https://github.com/breakstring/cfKanban) | 18 | 2026-08-29 | 2026-10-02 | Agent-first Kanban system base on Cloudflare. |
| 3 | [sgzeng/pbfuzz](https://github.com/sgzeng/pbfuzz) | 14 | 2026-05-03 | 2026-10-02 | Agentic Directed Fuzzing for PoV Generation |
| 4 | [CLICGGER-TYPES/dsh-piggy](https://github.com/CLICGGER-TYPES/dsh-piggy) | 11 | 2026-09-29 | 2026-10-02 | 🐖 DeepSeek Harness 养成插件，也可作为 Windows/Linux/macOS 桌面宠物运行；支持成长、学习、打工、钓鱼、图鉴与换肤 |
| 5 | [yinhong-zhou/jevdo](https://github.com/yinhong-zhou/jevdo) | 8 | 2026-10-02 | 2026-10-02 | Just Jev it. A Jev-first agent loop with reusable actions for DeepSeek Harness. |
| 6 | [Lzcdebear/dsh-delete-session](https://github.com/Lzcdebear/dsh-delete-session) | 4 | 2026-09-29 | 2026-10-02 | Delete sessions, not archive them |
| 7 | [The-latest-one/dsh-branch-workspace-folders](https://github.com/The-latest-one/dsh-branch-workspace-folders) | 4 | 2026-08-29 | 2026-10-02 | DeepSeek Harness (DSH) sidebar plugin: stack-safe fork tree, two-track indentation, marquee title, leading/hover slots, and cascade purge. |
| 8 | [FrostLeafKEE/dsh-chat-bridge](https://github.com/FrostLeafKEE/dsh-chat-bridge) | 3 | 2026-10-01 | 2026-10-02 | Switch between DeepSeek web chat and workspaces in DeepSeek Harness. Web history sidebar and one-click conversation import. / 网页聊天、历史侧栏与工作区一键导入。 |
| 9 | [HarmlessFunny/dsh-background-by-model](https://github.com/HarmlessFunny/dsh-background-by-model) | 3 | 2026-09-13 | 2026-10-02 | DeepSeek Harness 背景随当前模型而切换 |
| 10 | [liceses/dsh-cosplay](https://github.com/liceses/dsh-cosplay) | 3 | 2026-10-02 | 2026-10-02 | DSH 角色扮演插件：角色卡（系统提示词注入 + 用户提示词改写）、可分享的单文件卡包、复刻原版 UI 的角色页签与首轮选角 chip |
| 11 | [133563825as-ai/dsh-localdream](https://github.com/133563825as-ai/dsh-localdream) | 2 | 2026-10-02 | 2026-10-02 | DeepSeek Harness 插件：将手机端 Local Dream 的本地 NPU 生图接入对话，含文生图、图生图、四倍放大与分块重绘。 |
| 12 | [Big-Dao/dsh-plugin-wsl-env](https://github.com/Big-Dao/dsh-plugin-wsl-env) | 2 | 2026-10-02 | 2026-10-02 | Run a DeepSeek Harness session against a WSL distro: ctx.shell, ctx.fs and the GUI terminal served from inside the distro, sandboxed with bubblewrap |
| 13 | [DRQRTS/dsh-cds-mode](https://github.com/DRQRTS/dsh-cds-mode) | 2 | 2026-10-02 | 2026-10-02 | CDS 模式（Chen's DS）— a multi-agent development mode for DeepSeek Harness. You talk to one persona; it dispatches 56 personas that hand work to each other directly. |
| 14 | [Mzy123l/dsh-plugin-remote-access](https://github.com/Mzy123l/dsh-plugin-remote-access) | 2 | 2026-09-30 | 2026-10-02 | 为 DeepSeek Harness 桌面版提供「限网段 + 可选数字密码」的远程访问入口 |
| 15 | [Ndsanes/dsh-rules](https://github.com/Ndsanes/dsh-rules) | 2 | 2026-10-02 | 2026-10-02 | OMP rules port for DeepSeek Harness: rulebook, always-apply injection, rule:// addressing, and time-traveling stream rules that interrupt violating model output |
| 16 | [pioneer666-user/specdev-workbench](https://github.com/pioneer666-user/specdev-workbench) | 2 | 2026-09-19 | 2026-10-02 | DSH（DeepSeek Harness）流程图管理插件：浏览 Archify 业务流程图目录、按 Git 附注标签阅读历史版本、保存版本。A workflow-diagram manager plugin for DSH. |
| 17 | [pk14742952-AD/dsh-host-rsi](https://github.com/pk14742952-AD/dsh-host-rsi) | 2 | 2026-10-02 | 2026-10-02 | DSH host RSI for local LLMs (currently Qwen3.8 27B): per-use continual self-improvement, counter-reason self-check, critic escalation, and memory retrieval. |
| 18 | [TommyFang2077/pi-workbench](https://github.com/TommyFang2077/pi-workbench) | 2 | 2026-08-15 | 2026-10-02 | 官方 DeepSeek Harness（dsh）原生桌面壳：Tauri 2 把官方 WebUI 变成原生桌面窗口，保留会话/工作区/插件/技能。内置 SenseVoice 离线语音输入、插件市场、视觉模型配置；锚定模式解决 DeepSeek 思考模式问题 |
| 19 | [WTStarMark/dsh-plugin-mesh](https://github.com/WTStarMark/dsh-plugin-mesh) | 2 | 2026-10-02 | 2026-10-02 | 把带 dsh 系列 GitHub 标签的仓库，画成一张可交互的生态网络图 |
| 20 | [yuhub233/dsh-effort-slider](https://github.com/yuhub233/dsh-effort-slider) | 2 | 2026-10-02 | 2026-10-02 | 科幻推理等级滑条 for DeepSeek Harness：Ultra 档 + 闪电编排模式 + 子代理 tok/s 读数 / A sci-fi reasoning-effort slider for DSH |
| 21 | [11350613/SymPy-Calculate](https://github.com/11350613/SymPy-Calculate) | 1 | 2026-09-29 | 2026-10-02 | A minimal DeepSeek Harness agent preset with a stateless sympy_calculate tool that runs Python against a local SymPy development checkout. |
| 22 | [A2chitect/dsh-openviking-enhance](https://github.com/A2chitect/dsh-openviking-enhance) | 1 | 2026-10-02 | 2026-10-02 | OpenViking in the DSH web GUI: a Studio panel, a per-session memory-commit status pill with its commit timeline, and a right-sidebar tab showing what the current session retrieves. |
| 23 | [AIcivilization/dsh-vps](https://github.com/AIcivilization/dsh-vps) | 1 | 2026-09-19 | 2026-10-02 | One-command DeepSeek Harness on your VPS: a zero-dependency login gateway puts the stock DSH web UI - settings, API keys, plugin market - behind HTTPS and a password, reachable from anywhere. · 一条命令把 DeepSeek Harness 装进 VPS：零依赖登录网关 + 自动 HTTPS，公网可达，设置、API Key、插件市场全都能用。 |
| 24 | [Asheep233/dsh-tool-indent](https://github.com/Asheep233/dsh-tool-indent) | 1 | 2026-10-02 | 2026-10-02 | DSH Web GUI 插件：给所有 Tool 调用加缩进，并在 设置→工具调用外观 里调 Tool/思考摘要的缩进、灰度与行间距 \| Indent every tool call in DeepSeek Harness's web UI, with a settings panel for indent / dim / line spacing |
| 25 | [BangBang-03/dsh-client-ui-quote](https://github.com/BangBang-03/dsh-client-ui-quote) | 1 | 2026-10-02 | 2026-10-02 | 选中任意一句话即可引用并评论：浮层提供「评论」与「添加到对话」，引用以 DSH 原生 reference-chip 插入输入框（行内胶囊）；发送后消息里仍是 Kimi 那样的圆角胶囊（点击展开、可复制），模型收到的是完整引用文本。 |
| 26 | [chen112233usa/dsh-typesafe-ai-skill](https://github.com/chen112233usa/dsh-typesafe-ai-skill) | 1 | 2026-10-02 | 2026-10-02 | 把 TypeSafe / Jev（System One 判断模型）的构建技能注册进 DeepSeek Harness 的全局技能层，每个会话自动可用。不含任何密钥。 \| Registers the TypeSafe/Jev skill into DeepSeek Harness's global skill layer. Ships no API key. |
| 27 | [Coshire90-1135/DSH-MnnChat-Provider](https://github.com/Coshire90-1135/DSH-MnnChat-Provider) | 1 | 2026-10-02 | 2026-10-02 | 把手机上 MNN Chat 的端侧小模型接进 DeepSeek Harness(DSH) 当 LLM provider —— 一个娱乐产物，工具调用基本不行,暂不支持文生图 |
| 28 | [DC-507/dsh-zoom](https://github.com/DC-507/dsh-zoom) | 1 | 2026-10-01 | 2026-10-02 | Global UI zoom for the DeepSeek Harness web client: Cmd/Ctrl +/-, 0 — scales the whole interface, not just conversation text. |
| 29 | [DDDMUC/dsh-as-aistudio](https://github.com/DDDMUC/dsh-as-aistudio) | 1 | 2026-09-30 | 2026-10-02 | Google-AI-Studio-style turn controls for DeepSeek Harness: one install composes edit-turn, rerun-turn, delete-turn and markdown-bubble. Each component also works alone; any subset coexists. |
| 30 | [DedsecLemon/dsh-obsidian](https://github.com/DedsecLemon/dsh-obsidian) | 1 | 2026-09-30 | 2026-10-02 | 把 Obsidian 知识库放进 DSH 右侧栏:目录树、全文搜索、Obsidian 排版风格笔记页、笔记大纲;对话交给应用自己的面板在中间打开,不占侧栏。/ Obsidian vault in the DSH right Sidebar: tree, search, Obsidian-styled note pages, outline, and the vault conversation in the app's centre panel. |
| 31 | [DelayNooMore/dsh-plugin-session-trash](https://github.com/DelayNooMore/dsh-plugin-session-trash) | 1 | 2026-10-02 | 2026-10-02 | DSH (DeepSeek Harness) 会话回收站插件：移入回收站、恢复、永久删除，设置页管理 |
| 32 | [duxingxiake3/dsh-plugin-market](https://github.com/duxingxiake3/dsh-plugin-market) | 1 | 2026-10-01 | 2026-10-02 | Plugin Market for DeepSeek Harness: discover, vet and install DSH plugins from inside DSH. |
| 33 | [Han-1413141/dsh-pnpm-build-control](https://github.com/Han-1413141/dsh-pnpm-build-control) | 1 | 2026-09-30 | 2026-10-02 | DSH 插件：在添加插件页面统一开关所有配置的 pnpm 构建脚本审批，首次关闭显示风险确认。 |
| 34 | [Han-1413141/dsh-wsl-native](https://github.com/Han-1413141/dsh-wsl-native) | 1 | 2026-09-30 | 2026-10-02 | DSH for WSL：在同一个 Windows DSH 桌面窗口中使用 Windows 与原生 Linux 对话，支持 WSL 标志、环境切换和双向系统互操作。 |
| 35 | [Hnqhj/dsh-library](https://github.com/Hnqhj/dsh-library) | 1 | 2026-10-02 | 2026-10-02 | DeepSeek Harness 的本地产出资料库插件 —— 三栏页面浏览检索预览整理，收拢对话与项目产出的文档/表格/图片，零第三方依赖，助手只可存不可改 |
| 36 | [johnsonpanq-ctrl/dsh-network-config](https://github.com/johnsonpanq-ctrl/dsh-network-config) | 1 | 2026-10-02 | 2026-10-02 | Proxy settings for DeepSeek Harness — follow the system proxy, direct, or custom. |
| 37 | [KaiyeZeng/dsh-phone-bridge](https://github.com/KaiyeZeng/dsh-phone-bridge) | 1 | 2026-10-02 | 2026-10-02 | 在手机微信里接着电脑上正在聊的 DeepSeek Harness (DSH) 会话：共用同一段上下文，不是新建机器人。经 OpenClaw 连微信/元宝。Drive your existing DSH desktop session from WeChat: same thread, not a new bot. |
| 38 | [KDDKBD/DeepSeek-splash-animation](https://github.com/KDDKBD/DeepSeek-splash-animation) | 1 | 2026-10-02 | 2026-10-02 | 给 DSH 加一段自定义开屏动画 |
| 39 | [lwx071001/dsh-account-meter](https://github.com/lwx071001/dsh-account-meter) | 1 | 2026-10-02 | 2026-10-02 | Live account balance + usage meter for the DSH Harness composer: balance, tokens, running time, tokens/sec, plus hourly/daily/monthly usage and cost charts. ｜ DSH Harness 插件：输入框下方实时显示账户余额、本对话 token 总量、运行时长与每秒 token，设置里含分时·每天·每月用量曲线与花费。 |
| 40 | [lwx071001/dsh-mobile-console](https://github.com/lwx071001/dsh-mobile-console) | 1 | 2026-10-02 | 2026-10-02 |  Open this DeepSeek Harness (DSH) on a phone: one QR code, a LAN bridge that runs only while it is on, no --host rebind, and the real Web GUI — a DSH plugin.在手机上打开本机的 DeepSeek Harness：一个二维码 + 一条按需开启的局域网桥，不需要 --host 0.0.0.0，手机上打开的就是原版界面与同一份会话。 |
| 41 | [modesthub/dsh-sensenova-freeapi](https://github.com/modesthub/dsh-sensenova-freeapi) | 1 | 2026-10-01 | 2026-10-02 | DSH provider plugin for SenseNova with running/blocked dual-list key pool &amp; dual-account rotation |
| 42 | [modesthub/dsh-sensenova-vision-aid](https://github.com/modesthub/dsh-sensenova-vision-aid) | 1 | 2026-10-02 | 2026-10-02 | Unofficial DeepSeek Harness vision plugin: when the main model receives an image-recognition request, it spawns a child agent switched to the SenseNova vision model (reusing the dsh-sensenova-freeapi credential), with a dedicated settings panel and a direct fallback path. |
| 43 | [momasiku/dsh-pilot](https://github.com/momasiku/dsh-pilot) | 1 | 2026-09-27 | 2026-10-02 | Give DeepSeek Harness hands and eyes: screen_view hands the model a real PNG of your desktop, desktop_control drives the mouse, keyboard and windows, desktop_sequence runs a whole task in one call. |
| 44 | [mrzturn/dsh-switchman](https://github.com/mrzturn/dsh-switchman) | 1 | 2026-09-29 | 2026-10-02 | dsh-switchman who is a plugin for deepseek harness |
| 45 | [OkliaoliO/dsh-token-counter](https://github.com/OkliaoliO/dsh-token-counter) | 1 | 2026-10-02 | 2026-10-02 | A DeepSeek Harness (DSH) plugin that shows the account balance and, after every conversation turn, that turn's token usage and what it cost. Written by DeepSeek-V4.1-Flash at maximum reasoning effort (max).                                       一个 DeepSeek Harness（DSH）插件：显示账户余额，并在每轮对话结束后显示该轮的 Token 消耗量与本次花费。本插件由 DeepSeek-V4.1-Flash 在最高推理强度（max）下编写。 |
| 46 | [pc439527/dsh-jumpserver](https://github.com/pc439527/dsh-jumpserver) | 1 | 2026-09-02 | 2026-10-02 | JumpServer (KoKo) bastion connector plugin for DeepSeek Harness |
| 47 | [PolinniZhong/dsh-skill-intelligence](https://github.com/PolinniZhong/dsh-skill-intelligence) | 1 | 2026-08-27 | 2026-10-02 | DSH Skill 智能实验室：Explore, understand and evolve Agent Skills. |
| 48 | [QI-seven33/dsh-jev-mode](https://github.com/QI-seven33/dsh-jev-mode) | 1 | 2026-10-02 | 2026-10-02 | Optional JEV decision mode for DeepSeek Harness Desktop: deterministic reads, bounded semantic selection, native authorization and credential UI. |
| 49 | [QIN-SMART/dsh-plugin-kit](https://github.com/QIN-SMART/dsh-plugin-kit) | 1 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin authoring kit: a skill, a tested repository template, a scaffolder, a cross-host skill validator, a GitHub REST publisher and a pitfall library. |
| 50 | [QIN-SMART/dsh-quote-to-chat](https://github.com/QIN-SMART/dsh-quote-to-chat) | 1 | 2026-10-02 | 2026-10-02 | Select text in a DSH reply: a floating toolbar that quotes it into the composer draft or opens a side chat about it. |
| 51 | [QIN-SMART/dsh-session-md](https://github.com/QIN-SMART/dsh-session-md) | 1 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin: export a session as human-readable Markdown or a self-contained HTML page — full / handoff / readable / audit presets, one-click download |
| 52 | [QIN-SMART/dsh-sidebar-marks](https://github.com/QIN-SMART/dsh-sidebar-marks) | 1 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin: sidebar conversation marks — row tint, colored dot, per-conversation title size |
| 53 | [Sculptor815/scrna-seq-workbench](https://github.com/Sculptor815/scrna-seq-workbench) | 1 | 2026-10-02 | 2026-10-02 | Five agent skills for guided single-cell RNA-seq analysis in Codex, Claude Code, and DeepSeek Harness. |
| 54 | [Sky-lll27/DSH-chat-keeper](https://github.com/Sky-lll27/DSH-chat-keeper) | 1 | 2026-10-01 | 2026-10-02 | DSH 对话管家：跨工作区对话总表 · 正文搜索（中文子串 / 未打开的旧对话也能搜 / 定位到命中那句并读出上下文）· 按时间批量归档 · 回收站式删除（可恢复、分批、不删除正在运行的对话） |
| 55 | [Something11235/dsh-posterflow-ai](https://github.com/Something11235/dsh-posterflow-ai) | 1 | 2026-10-02 | 2026-10-02 | 在 DSH 侧栏加一个「开启生图模式」入口：点击 → 炫酷跳转至生图模式 |
| 56 | [Something11235/dsh-video-skin](https://github.com/Something11235/dsh-video-skin) | 1 | 2026-10-02 | 2026-10-02 | DSH 视频皮肤：聊天背景 + 有声开机动画 + 界面内透明度调节 |
| 57 | [TwinsEarth/NewAgentUniverseByDeepSeek](https://github.com/TwinsEarth/NewAgentUniverseByDeepSeek) | 1 | 2026-09-27 | 2026-10-02 | NewAgentUniverseByDeepSeek V3.4.5 — a clean-room rewrite of the agent-universe swarm-agent design: DID identity, exact integer ledger, authenticated BFT-lite verification, agent marketplace, and an everything-is-a-plugin kernel with hot update. Ships a DeepSeek Harness plugin. Upstream: https://github.com/TwinsEarth/agent-universe (MIT). |
| 58 | [VoodooB0Ys/dsh-desktop-notify](https://github.com/VoodooB0Ys/dsh-desktop-notify) | 1 | 2026-10-02 | 2026-10-02 | DeepSeek Harness 桌面提醒（Windows）：原生 Toast + 全屏兜底卡片，需要授权/提问/完成/出错时叫你一声，点一下回到对应对话 |
| 59 | [xrn1997/dsh-session-delete](https://github.com/xrn1997/dsh-session-delete) | 1 | 2026-09-30 | 2026-10-02 | 会话删除插件 |
| 60 | [xubin0628/dsh-task-notifier](https://github.com/xubin0628/dsh-task-notifier) | 1 | 2026-10-02 | 2026-10-02 | DSH 任务通知插件：任务完成 / 需要批准 / 需要回答 / 出错时的横幅、提示音与系统通知，并在设置里提供「通知」页自由配置 |
| 61 | [ybh1291747665/dsh-peer-bus](https://github.com/ybh1291747665/dsh-peer-bus) | 1 | 2026-10-02 | 2026-10-02 | Cross-session message bus for DeepSeek Harness: let independent sessions address and wake each other. |
| 62 | [YuMo-233/dsh-kubejs](https://github.com/YuMo-233/dsh-kubejs) | 1 | 2026-10-02 | 2026-10-02 | DSH 插件修改者：以独立脚本包定制其他已安装插件，不改插件源码（KubeJS 模式） |
| 63 | [Z8906/dsh-plugin-office-markdown](https://github.com/Z8906/dsh-plugin-office-markdown) | 1 | 2026-10-01 | 2026-10-02 | 读取 Office / PDF 前先转成 Markdown，用一行路径代替整份全文 —— 省 token 的 DSH bundle 插件。0 npm 依赖，转换全在本地，产物归你所有，卸载自动清理 Python 环境。 Convert Office/PDF to Markdown before reading in DeepSeek Harness — one path instead of the whole document. |
| 64 | [121212165/dsh-plugin-quota](https://github.com/121212165/dsh-plugin-quota) | 0 | 2026-10-02 | 2026-10-02 | dsh plugin: live usage meter — per-session token/turns/cost tracking injected into the system prompt, /qm panel, quota_meter card tool; also the family's universal plugin-development test template |
| 65 | [1344738825/ai-look-up](https://github.com/1344738825/ai-look-up) | 0 | 2026-10-02 | 2026-10-02 | AI 抬头 \| Mid-run self-review nudges for aimless AI coding agents: 检测重复命令/失败循环/零产出并注入提醒,真实本地时钟校准 AI 时间感 (ZCode / DeepSeek Harness plugin) |
| 66 | [19north/dsh-redstone-music](https://github.com/19north/dsh-redstone-music) | 0 | 2026-10-02 | 2026-10-02 | Minecraft redstone-music toolkit for DeepSeek Harness: onset-aligned SoundFont sample rendering and a song-to-datapack compiler (rm_render / rm_build). |
| 67 | [86cloudyun-afk/dsh-gungnir](https://github.com/86cloudyun-afk/dsh-gungnir) | 0 | 2026-10-01 | 2026-10-02 | GUNGNIR - DSH 红队战役指挥框架：攻击路径合成的工程化。事实库+门闸+跳板池，执行层可插拔。编排层，不含漏洞利用代码；仅限授权测试。 |
| 68 | [achenjins/dsh-runninghub-plugin](https://github.com/achenjins/dsh-runninghub-plugin) | 0 | 2026-09-30 | 2026-10-02 | 一个dsh插件，用于让ai在dsh内调用runninghub在线工作流 |
| 69 | [Alicex7777/dsh-theme-colors](https://github.com/Alicex7777/dsh-theme-colors) | 0 | 2026-10-02 | 2026-10-02 | DSH Web theme plugin: per-region colors, OKLCH depth/vividness, 26 day+night schemes, 3-state text colors with a free gamut picker |
| 70 | [anne43983959/dsh-audio-cue](https://github.com/anne43983959/dsh-audio-cue) | 0 | 2026-10-02 | 2026-10-02 | DSH 宿主插件：审批询问与一轮对话结束时播放声音提示（含两次实测事故复盘） |
| 71 | [archcra/dsh-plugin-project-monitor](https://github.com/archcra/dsh-plugin-project-monitor) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件：事项进度看板。自管数据、零配置，红橙黄绿到期预警 + 每日摘要，无需本地 Excel。 |
| 72 | [ashareapi/ashareapi-dsh-plugin](https://github.com/ashareapi/ashareapi-dsh-plugin) | 0 | 2026-10-02 | 2026-10-02 | A股数据 API 官方 DeepSeek Harness 插件 —— 桌面端 / Web UI 输个包名即装，24 个 A股工具（行情 / K线 / 财务 / 资金 / 龙虎榜 / 板块 / 因子选股），免费工具无需 Key｜Official DeepSeek Harness plugin for the A-Share Data API — install by name from the desktop app or Web UI; 24 China A-share tools (quotes, K-lines, financials, money flow, dragon-tiger lists, sectors, screening), free tools need no key |
| 73 | [baom1ng/dsh-desktop-archive-manager](https://github.com/baom1ng/dsh-desktop-archive-manager) | 0 | 2026-10-02 | 2026-10-02 | Manage and permanently delete archived Sessions in DeepSeek Harness Desktop - no harness core patch required. Desktop-only DSH bundle. |
| 74 | [baom1ng/dsh-local-plugin-source](https://github.com/baom1ng/dsh-local-plugin-source) | 0 | 2026-10-02 | 2026-10-02 | Turn a local folder into an in-app plugin source for DeepSeek Harness Desktop: list, install, enable/disable and remove local plugin bundles from Settings ? Plugins ? Local plugins. |
| 75 | [blugart-dev/dsh-superpowers](https://github.com/blugart-dev/dsh-superpowers) | 0 | 2026-10-02 | 2026-10-02 | Superpowers (obra/superpowers) for DeepSeek Harness: full skill library, session-start bootstrap, optional workflow gate |
| 76 | [bvbhu/dsh-quilt-compact](https://github.com/bvbhu/dsh-quilt-compact) | 0 | 2026-09-28 | 2026-10-02 | 替代 DSH 默认的 compaction-basic：用指定的模型压缩对话内容，按需分块摘要再合并。 |
| 77 | [CeilCelia/dsh-travily-api](https://github.com/CeilCelia/dsh-travily-api) | 0 | 2026-10-02 | 2026-10-02 | Tavily web search for DeepSeek Harness: settings switch, credential-held API key, connection test.  |
| 78 | [ch1bug/dsh-pty-session](https://github.com/ch1bug/dsh-pty-session) | 0 | 2026-10-02 | 2026-10-02 | DSH plugin exposing the harness's owner-scoped PTY seam as four protocol-agnostic tools (pty_open/send/tail/close) plus a ctx.pty consumer facade. |
| 79 | [CharlesLiuZC/dsh-voice-context](https://github.com/CharlesLiuZC/dsh-voice-context) | 0 | 2026-10-02 | 2026-10-02 | Voice-to-text plugin for DeepSeek Harness (desktop &amp; web): composer mic button with cloud (SiliconFlow) or local offline (FunASR / faster-whisper) transcription. |
| 80 | [Charlestam218/dsh-github-publish](https://github.com/Charlestam218/dsh-github-publish) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件发布器：把本地做好的插件一键推送到 GitHub 仓库（凭据 → 建仓 → 提交 → 推送 → 可选 Release） |
| 81 | [Charlestam218/dsh-sound-alert](https://github.com/Charlestam218/dsh-sound-alert) | 0 | 2026-10-02 | 2026-10-02 | DSH 声音提示插件：任务完成与需要确认时播放两种不同的清脆音效（一高一低，浏览器端合成，无音频文件） |
| 82 | [chickmat/dsh-system-net](https://github.com/chickmat/dsh-system-net) | 0 | 2026-10-02 | 2026-10-02 | Make DeepSeek Harness follow your system network settings - route through the OS proxy and trust its certificate store, so TLS-intercepting accelerators work without env vars or a restart. 让 DSH 走系统代理并信任系统证书库，免环境变量、免重启。 |
| 83 | [ClassicXTx/dsh-plugin-ctf](https://github.com/ClassicXTx/dsh-plugin-ctf) | 0 | 2026-10-02 | 2026-10-02 | CTF competition mode for DeepSeek Harness: 11 attributed skills, evidence review, portable tools and isolated Playwright MCP. |
| 84 | [CloudWoR/dsh-bilibili](https://github.com/CloudWoR/dsh-bilibili) | 0 | 2026-10-02 | 2026-10-02 | dsh-web嵌入B站视频插件，可登录，但建议使用小号。 |
| 85 | [codel6i/dsh-shell-switch](https://github.com/codel6i/dsh-shell-switch) | 0 | 2026-10-02 | 2026-10-02 | Switch the dsh agent's command shell between PowerShell and Git Bash, from a panel in Settings or on the plugin's own row page. |
| 86 | [COH2357/dsh-whale-bridge](https://github.com/COH2357/dsh-whale-bridge) | 0 | 2026-10-02 | 2026-10-02 | 一个可以在DSH上关联多个鲸鱼以及拟人形象的桥接插件。目前只支持MeteorNOX/DeepSeek-Balance-Whale-Widget和nzl153/dsh-pet-whale。 |
| 87 | [d0ublecl1ck/dsh-hide-empty-workspace](https://github.com/d0ublecl1ck/dsh-hide-empty-workspace) | 0 | 2026-10-02 | 2026-10-02 | DSH Web 插件：最后一个未归档会话被归档的瞬间自动隐藏该工作区行，并在工作区行自带的「…」菜单里追加「隐藏工作区」，另配侧栏底部恢复入口；不归档、不删除、不改写任何工作区注册与会话数据。Auto-hide a sidebar workspace the moment its last unarchived session is archived — display only, no data writes. |
| 88 | [d0ublecl1ck/dsh-unarchived-watch](https://github.com/d0ublecl1ck/dsh-unarchived-watch) | 0 | 2026-10-02 | 2026-10-02 | DSH Web 插件：未归档会话超过阈值时在侧边栏亮警告图标 + 设置页按工作区分组的只读看板 · Warning light for unarchived-session backlog: sidebar badge, threshold, read-only board. |
| 89 | [daftAI2026/PDSH](https://github.com/daftAI2026/PDSH) | 0 | 2026-09-26 | 2026-10-02 | DSH Private Mode: sidebar title masking, display identity, and managed plugin updates for DeepSeek Harness. |
| 90 | [deadbushxw/dsh-plugin-query-enhance](https://github.com/deadbushxw/dsh-plugin-query-enhance) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件：精简 profile 中插件管理列表的回传信息，每项只回一行摘要，并新增支持参数输入的条件查询工具 \| DSH (DeepSeek Harness) plugin: keep plugin manager list actions from returning the whole table by answering with one summary line per record, and add a parameterized query tool for filter-based lookups |
| 91 | [deepseekv41flash/dsh-context-truth](https://github.com/deepseekv41flash/dsh-context-truth) | 0 | 2026-10-02 | 2026-10-02 | 给 DSH 模型每轮回填宿主实测的上下文占用，并阻止"上下文快用尽"的错判被压缩摘要继承。 |
| 92 | [DucLong06/dsh-vietnam](https://github.com/DucLong06/dsh-vietnam) | 0 | 2026-10-02 | 2026-10-02 | Vietnamese UI language, Vietnamese palettes and a rotating Vietnam-landscape backdrop for DeepSeek Harness (dsh) · Tiếng Việt, bảng màu Việt và hình nền phong cảnh Việt Nam cho dsh |
| 93 | [DynaMyhome/dsh-notes](https://github.com/DynaMyhome/dsh-notes) | 0 | 2026-09-30 | 2026-10-02 | DeepSeek Harness 笔记工作区插件:右栏笔记树 + CodeMirror 6 实时预览编辑器(Typora/Obsidian 手感)、行内/行间公式、真表格、代码卡片、回收站 |
| 94 | [F-0426/dsh-theme-dishuhai](https://github.com/F-0426/dsh-theme-dishuhai) | 0 | 2026-09-17 | 2026-10-02 | 🐋 给 DeepSeek Harness 做了套双模式主题：「抵数海」  🌙 深色 · 终末地工业风    近黑底 + 信号黄 + 等高线地形纹理    启动页：抵数海三字 → 黄条进度 → 黄块扫屏转场  ☀️ 浅色 · DeepSeek 官网风    白蓝配色 + 呼吸网格 + 大圆角    启动页：2600 个粒子汇聚成小蓝鲸，然后眨一下眼  同一个 DSH，白天是老家，晚上是终末地。 开源 · 非商业 · 素材署名齐全 ↓ https://github.com/F-0426/dsh-theme-dishuhai |
| 95 | [FANLS05/dsh-desktop-notifications](https://github.com/FANLS05/dsh-desktop-notifications) | 0 | 2026-10-02 | 2026-10-02 | Windows toast notifications for DeepSeek Harness (dsh): approvals, questions, run completion, errors and sign-in prompts - every toast led by the conversation name. |
| 96 | [feverZHONG/dsh-character-emote](https://github.com/feverZHONG/dsh-character-emote) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 立绘表情插件 —— 多角色目录 + 流式情绪自动判定（模型忘调工具也自动切图）+ 复合情绪 / 心情基线 / 拖拽缩放，样式 host 持久化，带 set_expression 工具。适配 DSH 0.2.0-rc.2。 |
| 97 | [feverZHONG/dsh-chess-xq](https://github.com/feverZHONG/dsh-chess-xq) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 象棋插件 —— 天界象棋：中国象棋人机对战，AI 执黑，可悔棋 / 存档 / 调难度，带棋局状态与台词工具（chess_*）。适配 DSH 0.2.0-rc.2。 |
| 98 | [feverZHONG/dsh-dist-manager](https://github.com/feverZHONG/dsh-dist-manager) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 分发目录管理插件 —— 自动归档旧版本插件、保留最新版，附 WebUI 管理页。适配 DSH 0.2.0-rc.2。 |
| 99 | [feverZHONG/dsh-liya-archives](https://github.com/feverZHONG/dsh-liya-archives) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 归档会话抽屉 —— 侧边栏「已归档 (n)」入口，按工作区分组，一键恢复 / 复制为新会话 / 移回侧边栏。抄改自 chou109/dsh-archives（MIT）。适配 DSH 0.2.0-rc.2。 |
| 100 | [feverZHONG/dsh-liya-skin](https://github.com/feverZHONG/dsh-liya-skin) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 皮肤插件 —— 壁纸（缩略图选择 · 透明度滑条 · host 持久化）+ 星月皮肤层（顶部星带 / 底部星轨 / 标题栏徽标），卸载即完整还原。适配 DSH 0.2.0-rc.2。 |
| 101 | [feverZHONG/dsh-liya-ui](https://github.com/feverZHONG/dsh-liya-ui) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH UI 润色插件 —— tapIndex 注入统一圆角（输入框 / 对话框 / 菜单 / 提示），radius 走原生设置页（4–48），保存即时生效。适配 DSH 0.2.0-rc.2。 |
| 102 | [feverZHONG/dsh-liya-workspace](https://github.com/feverZHONG/dsh-liya-workspace) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 工作区插件 —— 在设置里展示档案速览（FILE-MAP 摘要 · memory/records/diary 统计 · 最近日记），工作区根目录可配置、即时生效。适配 DSH 0.2.0-rc.2。 |
| 103 | [feverZHONG/dsh-puzzle](https://github.com/feverZHONG/dsh-puzzle) | 0 | 2026-08-16 | 2026-10-02 | 莉娅 DSH 拼图插件 —— 滑块拼图小游戏：对话面板 / 设置页 / 图库管理，agent 可发话、换图、看进度（puzzle_* 工具）。适配 DSH 0.2.0-rc.2。 |
| 104 | [Fnckerpoi/dsh-plugin-nexus-sdlc](https://github.com/Fnckerpoi/dsh-plugin-nexus-sdlc) | 0 | 2026-10-02 | 2026-10-02 | Nexus spec-driven development agent preset for DeepSeek Harness |
| 105 | [gggtmd/dsh-wallet-hud](https://github.com/gggtmd/dsh-wallet-hud) | 0 | 2026-10-02 | 2026-10-02 | Sidebar DeepSeek wallet balance HUD for the DeepSeek Harness Web UI |
| 106 | [gh-gongjin/dsh-plugin-modelwatch](https://github.com/gh-gongjin/dsh-plugin-modelwatch) | 0 | 2026-10-02 | 2026-10-02 | DSH (DeepSeek Harness) OpenRouter 模型监控插件：新上模型 / 热门周榜 / 变化流水。全程只读 GET，不推外部通知。 |
| 107 | [gh-gongjin/dsh-plugin-sysops](https://github.com/gh-gongjin/dsh-plugin-sysops) | 0 | 2026-10-02 | 2026-10-02 | DSH (DeepSeek Harness) 本机系统运维插件：实时监控 + 两段式 C 盘清理 + 全盘文件搜索。零第三方依赖，不可逆动作收在 guard 单点。 |
| 108 | [GreatArrow-ai/dsh-greatarrow](https://github.com/GreatArrow-ai/dsh-greatarrow) | 0 | 2026-10-02 | 2026-10-02 | GreatArrow.ai workspace memory for DeepSeek Harness: connects dsh to the GreatArrow.ai MCP server, so the agent can search and save memories, tasks and decisions that carry across sessions and other AI clients. |
| 109 | [GRUST303/dsh-loop-guard](https://github.com/GRUST303/dsh-loop-guard) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件：检测并打断 agent 循环中的纯文本重复退化（generation degeneration）。7917 条真实消息实测，误报率 0.03%。DeepSeek Harness plugin that detects and breaks pure-text degeneration loops in agent output. |
| 110 | [gswenxue/dsh-egress-router](https://github.com/gswenxue/dsh-egress-router) | 0 | 2026-10-02 | 2026-10-02 | On-demand egress routing plugin for DeepSeek Harness: import vless/vmess/trojan/ss nodes, route only blocked traffic (GitHub, pip, npm) through them, fall back automatically, never auto-delete nodes. 给 DSH 的按需网络出海插件：选择性走节点、直连失败自动回退、失效只标记不删除。 |
| 111 | [GuaiWuA/dsh-skill-bar](https://github.com/GuaiWuA/dsh-skill-bar) | 0 | 2026-10-02 | 2026-10-02 | 让 DSH 的 skill 变成可浏览的技能栏：搜索、收藏、点一下或拖一下写进输入框。/A browsable skill bar for DSH: search, favorite, and click or drag to insert into the input box. |
| 112 | [Han-1413141/dsh-codex-computer-use](https://github.com/Han-1413141/dsh-codex-computer-use) | 0 | 2026-10-01 | 2026-10-02 | DSH plugin for the local Codex Computer Use runtime on Windows, with native menu integration and automatic startup. |
| 113 | [haotian-lu-prog/dsh-archived](https://github.com/haotian-lu-prog/dsh-archived) | 0 | 2026-09-22 | 2026-10-02 | DSH 已归档会话管理器：插件 + RPC/端到端工具 |
| 114 | [haotian-lu-prog/dsh-cold-backup](https://github.com/haotian-lu-prog/dsh-cold-backup) | 0 | 2026-09-30 | 2026-10-02 | Backup freshness monitor for DeepSeek Harness — see whether your scheduled backup actually ran, right in the Harness Web UI (DSH 0.2.0-rc.2) |
| 115 | [HelloQingTao/dsh-multi-folder](https://github.com/HelloQingTao/dsh-multi-folder) | 0 | 2026-09-28 | 2026-10-02 | 副工作目录：在输入框「+」菜单里管理，@ 可直接引用其中文件，Agent 获得同等读写与执行权限 \| Secondary working directories for DSH — manage them from the composer "+" menu, reference their files with @, and give the agent equal write/exec rights. |
| 116 | [hemppp/dsh-panel-dock-plugin](https://github.com/hemppp/dsh-panel-dock-plugin) | 0 | 2026-10-02 | 2026-10-02 | Photoshop-style floating dockable panels for the DeepSeek Harness Web UI - draggable, resizable, collapsible panels with persisted layout. |
| 117 | [Hercules-debug/dsh-flock](https://github.com/Hercules-debug/dsh-flock) | 0 | 2026-09-29 | 2026-10-02 | Self-organizing multi-agent clusters for DeepSeek Harness — real DSH subagents coordinating through a shared append-only log, no orchestrator |
| 118 | [hmtxj/dsh-model-modality](https://github.com/hmtxj/dsh-model-modality) | 0 | 2026-10-02 | 2026-10-02 | Per-model input type (text/image) and thinking level checkboxes on the DSH Models settings page, writing the official llm-pi-ai input and reasoningEfforts fields. |
| 119 | [ikun666666/dsh-groupchat](https://github.com/ikun666666/dsh-groupchat) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件：每个工程一个群聊 —— 多个 AI 会话与人同群互聊、@ 唤醒离线会话、@创建成员 拉新会话进群 |
| 120 | [Jedeiah/dsh-plugins](https://github.com/Jedeiah/dsh-plugins) | 0 | 2026-09-30 | 2026-10-02 | dsh 插件集：一组社区维护的 DeepSeek Harness 组合包 —— 回合提醒 / 抓取兼容 fake-ip 代理 / Chrome DevTools MCP |
| 121 | [JinSuperOfficial/dsh-proxy-switcher](https://github.com/JinSuperOfficial/dsh-proxy-switcher) | 0 | 2026-10-02 | 2026-10-02 | 一款为 dsh 打造的代理热切换插件。支持在设置界面实时切换直连/系统/自定义代理，无需重启 dsh，彻底告别修改代理必须重启的烦恼 |
| 122 | [JinYihang1011/dsh-plugins](https://github.com/JinYihang1011/dsh-plugins) | 0 | 2026-10-02 | 2026-10-02 | DSH 本地插件集：虎符咒（插件共存领地体检）、界面微调、Windows 通知、会话操作、界面菜单。每个插件一个子目录，各带自测。 |
| 123 | [jipika/dsh-jev-grep](https://github.com/jipika/dsh-jev-grep) | 0 | 2026-10-02 | 2026-10-02 | Search-flood adjudication plugin for DeepSeek Harness: ripgrep + TypeSafe Jev typed judgments (noul/choice) so the agent reads ~30 calibrated rows instead of hundreds. Configurable provider (OpenCode Zen free tier / TypeSafe / OpenRouter), degrades to raw grep when offline. Zero deps, cross-platform. |
| 124 | [KamiYA7/dsh-shot-ask](https://github.com/KamiYA7/dsh-shot-ask) | 0 | 2026-10-02 | 2026-10-02 | DSH（DeepSeek Harness）截图提问套件：全局热键抓屏 → 框选 → 就地提问 → 图文直接进会话。A screenshot-to-question kit for DSH. |
| 125 | [kirigayakazima/dsh-antigravity-usage](https://github.com/kirigayakazima/dsh-antigravity-usage) | 0 | 2026-10-02 | 2026-10-02 | 反重力（Antigravity）额度 / 用量 DSH 插件：实时额度走本地语言服务器 API，离线 token 与缓存命中从本地会话库只读解出（反重力没开也能看历史） |
| 126 | [kittimzhe/dsh-session-eval](https://github.com/kittimzhe/dsh-session-eval) | 0 | 2026-09-21 | 2026-10-02 | Retrospective evaluation for DeepSeek Harness agent sessions: deterministic grade cards + cross-session regression diffs over persisted logs — no benchmarks, no LLM judges |
| 127 | [KLAX54ix/dsh-explain-selection](https://github.com/KLAX54ix/dsh-explain-selection) | 0 | 2026-10-02 | 2026-10-02 | DSH 插件：选中回答里的文本就地解释，解释不进入主对话上下文；卡片内可继续选中追问，支持拖拽、指向线与三级嵌套。 |
| 128 | [lachowkinman-bot/PiDSH-Nexus](https://github.com/lachowkinman-bot/PiDSH-Nexus) | 0 | 2026-10-02 | 2026-10-02 | PiDSH Nexus · Universal Workbench 3.0 — 13 域企业工作台源码包（Tauri 桌面壳 + dsh 工作台插件 + 领域模型/工作流/契约），可在本机离线复现并继续迭代 |
| 129 | [LapStdy/dsh-dingtalk-notify](https://github.com/LapStdy/dsh-dingtalk-notify) | 0 | 2026-10-02 | 2026-10-02 | DSH（DeepSeek Harness）钉钉群通知插件：AI 需要你选择/审批、或一轮任务完成时推送到钉钉群，自带设置面板 |
| 130 | [Lawrence7y/dsh-harness-pilot](https://github.com/Lawrence7y/dsh-harness-pilot) | 0 | 2026-10-02 | 2026-10-02 | 把其他 agent harness（opencode / Antigravity / claude / codex / ZCode / MiMo / Cursor / Qoder …）接入 DeepSeek Harness：作为 DSH 子代理派发任务、指定各家模型，并在设置页查看已配置的 harness |
| 131 | [lccc233/dsh-opencode-go-usage](https://github.com/lccc233/dsh-opencode-go-usage) | 0 | 2026-10-02 | 2026-10-02 | OpenCode Go plan quota rings for the DeepSeek Harness web GUI |
| 132 | [LEEKINBUN-dsh-tools/dsh-shredder](https://github.com/LEEKINBUN-dsh-tools/dsh-shredder) | 0 | 2026-09-29 | 2026-10-02 | dsh 插件：在原生会话菜单里给已归档的会话加一枚红色「彻底删除」行，不额外做归档面板 / dsh plugin: one red delete row in the native session menu, for archived sessions only |
| 133 | [leexiaode4/dsh-launch-buttons](https://github.com/leexiaode4/dsh-launch-buttons) | 0 | 2026-10-02 | 2026-10-02 | Multiple named launch targets in the DSH composer: left-click starts the default target, right-click opens the list. |
| 134 | [LemRic1117/dsh-download-dashboard](https://github.com/LemRic1117/dsh-download-dashboard) | 0 | 2026-10-02 | 2026-10-02 | DSH 的悬浮下载看板：只列 300MB 以上的下载，跨会话、跨子代理、跨终端可见 |
| 135 | [LiuCrane/dsh-easy-balance](https://github.com/LiuCrane/dsh-easy-balance) | 0 | 2026-10-02 | 2026-10-02 | DSH Web UI plugin: model provider chip beside the composer plus DeepSeek and OpenCode Go balances below it, only for providers the profile configures. |
| 136 | [liuxinxing123/dph-emotion-arc](https://github.com/liuxinxing123/dph-emotion-arc) | 0 | 2026-10-01 | 2026-10-02 | Emotion Arc Director: text emotion detection -&gt; explicit state file -&gt; strategy mapping, plus memory ledger and SillyTavern card import. DSH/DPH plugin, MIT. |
| 137 | [liwei9745/dsh-genbox-plugin](https://github.com/liwei9745/dsh-genbox-plugin) | 0 | 2026-10-02 | 2026-10-02 | 把本地 GenBox 媒体工作台接进 DeepSeek Harness：生图 / 改图 / 生视频 / 剪视频，14 个工具，免 Key 可验证。GenBox media tools for DSH. |
| 138 | [lolipop-1x1/dsh-recap](https://github.com/lolipop-1x1/dsh-recap) | 0 | 2026-10-01 | 2026-10-02 | A session recap plugin for DeepSeek Harness with /recap, automatic idle summaries, and configurable models. |
| 139 | [loonylabs/dsh-cache-guard](https://github.com/loonylabs/dsh-cache-guard) | 0 | 2026-09-17 | 2026-10-02 | DSH plugin that prices an automatic context rewrite before it lands and asks first — the cold re-read, in k tokens. |
| 140 | [louisremi/dsh-docker-adapter](https://github.com/louisremi/dsh-docker-adapter) | 0 | 2026-10-01 | 2026-10-02 | DeepSeek Harness plugin: replace 'Show file location' with 'Download file' for remote/NAS hosts |
| 141 | [louisyeaaah/dsh-reload](https://github.com/louisyeaaah/dsh-reload) | 0 | 2026-10-02 | 2026-10-02 | Reload DSH plugins and skills without restarting: reload_plugin re-imports a loaded plugin's own modules and re-applies it (with rollback); reload_skill forces skill re-discovery and diagnoses why a skill is invisible. |
| 142 | [LytharaLab/DSH-Cons-Auto-Review](https://github.com/LytharaLab/DSH-Cons-Auto-Review) | 0 | 2026-10-02 | 2026-10-02 | DCAR · Deterministic-first auto review for DeepSeek Harness — CAutoR 权限模式：程序先放行，疑难按需交给 LLM |
| 143 | [MentonLiu/dsh-any-icon](https://github.com/MentonLiu/dsh-any-icon) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness (dsh) 插件：上传图片裁剪为 1:1 图标，用于 dsh 桌面端 App 图标（访达 / 应用程序 / Dock 即时生效，无需重启）或会话行图标。 |
| 144 | [moyu-777/dsh-notion-workspaces](https://github.com/moyu-777/dsh-notion-workspaces) | 0 | 2026-10-02 | 2026-10-02 | Bind each DSH workspace to its own Notion workspace over the official Notion MCP. |
| 145 | [mubaid/dsh-fluent-korean](https://github.com/mubaid/dsh-fluent-korean) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin that makes the model write fluent, natural Korean. Port of snflkd/fluent-korean. |
| 146 | [mubaid/dsh-opencode-freeaccess](https://github.com/mubaid/dsh-opencode-freeaccess) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin that puts the conversation session id on OpenCode requests, so OpenCode's free tier works without a paid key. |
| 147 | [MuFeng262/dsh-thinking-slider](https://github.com/MuFeng262/dsh-thinking-slider) | 0 | 2026-09-30 | 2026-10-02 | Codex-style reasoning-effort slider for the DeepSeek Harness composer |
| 148 | [Nay-1/dsh-session-share](https://github.com/Nay-1/dsh-session-share) | 0 | 2026-10-02 | 2026-10-02 | DSH 侧栏会话行菜单里的「分享会话」：预览后复制 Markdown、导出 .md（同名文件夹 + 图片）或单文件 HTML |
| 149 | [Nethur-auro/dsh-multi-root-explorer](https://github.com/Nethur-auro/dsh-multi-root-explorer) | 0 | 2026-10-02 | 2026-10-02 | Workspace Explorer for DeepSeek Harness: multi-root conversation tree plus a read-only resource browser in the sidebar. |
| 150 | [nguyenhnhatquang/DSH-Plugins](https://github.com/nguyenhnhatquang/DSH-Plugins) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugins |
| 151 | [nijika-boyfriend/dsh-notify-macos](https://github.com/nijika-boyfriend/dsh-notify-macos) | 0 | 2026-10-02 | 2026-10-02 | macOS system notification plugin for DeepSeek Harness on task completion |
| 152 | [Nocteve/dsh-compound](https://github.com/Nocteve/dsh-compound) | 0 | 2026-10-02 | 2026-10-02 | 面向 DeepSeek Harness 的轻量级 Compound Engineering 适配：记录项目解决经验，支持中文检索，并在相关代码变化时提示重新核验。 |
| 153 | [OahzOb/dsh-blank-handoff](https://github.com/OahzOb/dsh-blank-handoff) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin: a blank Session left behind by a previous connection hands off to a fresh one instead of being reported as already in use |
| 154 | [orphiczhou/dsh-region-probe](https://github.com/orphiczhou/dsh-region-probe) | 0 | 2026-10-02 | 2026-10-02 | Read-only Cordis Inspect provider for DeepSeek Harness: which UI regions the running shell actually rendered, their occupancy and geometry, and a failure history for regions that broke and recovered. |
| 155 | [PriceDotWin/pricewin-dsh](https://github.com/PriceDotWin/pricewin-dsh) | 0 | 2026-10-02 | 2026-10-02 | PriceWin for DeepSeek Harness: live hotel and flight prices across Booking.com, Agoda, Trip.com and Traveloka via MCP |
| 156 | [qgynisc/dsh-inline-pastes](https://github.com/qgynisc/dsh-inline-pastes) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness Web GUI 插件：粘贴图片即在文字中插入 image-1.png 内联胶囊，悬浮名字预览缩略图，自动编号（文字中插图 / hover 预览） |
| 157 | [qlheric/dsh-cvm](https://github.com/qlheric/dsh-cvm) | 0 | 2026-10-02 | 2026-10-02 | 给 DeepSeek Harness 加一层认知运行时：四个正交 Cordis 插件（任务契约 / 收敛判定 / 验证债务 / 分档干预），对抗 LLM 认知锚点坍缩。Cognitive Runtime for DSH. |
| 158 | [QuentinCrane/dsh-combo](https://github.com/QuentinCrane/dsh-combo) | 0 | 2026-10-02 | 2026-10-02 | PowerMode-style tool-call combo feedback for DeepSeek Harness Web and Desktop, with a countdown, four effects and live customization. |
| 159 | [QXingYShu/dsh-comfyui-image](https://github.com/QXingYShu/dsh-comfyui-image) | 0 | 2026-10-01 | 2026-10-02 | DeepSeek Harness plugin that drives a local ComfyUI image workflow (Z-Image-Turbo, Qwen-Image-2.1) from the agent |
| 160 | [Relvato/dsh-plugin-relvato](https://github.com/Relvato/dsh-plugin-relvato) | 0 | 2026-10-02 | 2026-10-02 | Relvato website monitoring for DeepSeek Harness: a dsh bundle that adds Relvato's hosted MCP server (52 tools). |
| 161 | [ROBOHAPPYIY/dsh-zh-review-guard](https://github.com/ROBOHAPPYIY/dsh-zh-review-guard) | 0 | 2026-10-02 | 2026-10-02 | DSH bundle plugin: make internal reasoning user-reviewable and keep every user-facing explanation in Simplified Chinese. Injected into every session system prompt. |
| 162 | [ruanimal/dsh-bash-env](https://github.com/ruanimal/dsh-bash-env) | 0 | 2026-10-01 | 2026-10-02 | 为 dsh 的每条 shell 命令按工作目录解析环境（PATH / venv / mise），并带一个独立的 Web UI 设置分区。Resolves each command's environment from its own working directory, with a dedicated settings section. |
| 163 | [scccy/dsh-enterworktree](https://github.com/scccy/dsh-enterworktree) | 0 | 2026-10-02 | 2026-10-02 | DSH 宿主插件：创建(或复用) git worktree 并自动开隔离 session，等价于 Claude Code /enterworktree。 |
| 164 | [sjh9714/dsh-retry-guard](https://github.com/sjh9714/dsh-retry-guard) | 0 | 2026-10-02 | 2026-10-02 | Observe identical tool failures and optionally pause the next model step in DeepSeek Harness. |
| 165 | [sodakitten/dsh-bg](https://github.com/sodakitten/dsh-bg) | 0 | 2026-10-02 | 2026-10-02 | Local-only background plugin for DeepSeek Harness: visual framing, interface transparency, background carousel. Fork of beauticode-dsh. |
| 166 | [SunLight87/dsh-cover](https://github.com/SunLight87/dsh-cover) | 0 | 2026-10-02 | 2026-10-02 | Cover-prompt generator for Chinese finance / AI-news infographic covers - an Agent Skill that turns a headline into a text-free 3:4 base-plate prompt plus a typesetting coordinate table. Zero dependencies. |
| 167 | [taoyiii112-creator/dsh-deepseek-balance](https://github.com/taoyiii112-creator/dsh-deepseek-balance) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness API balance plugin with Wallpaper Engine backgrounds and an in-page mascot |
| 168 | [timacek/DEEPSEEK-HARNESS-PLUGINS](https://github.com/timacek/DEEPSEEK-HARNESS-PLUGINS) | 0 | 2026-10-02 | 2026-10-02 | TIMS DSH CUSTOMIZATIONS |
| 169 | [tinchak0207/dsh-emu-workbench](https://github.com/tinchak0207/dsh-emu-workbench) | 0 | 2026-08-22 | 2026-10-02 | Emu 影像工作台 for DeepSeek Harness — 多供应商生图/改图/模型可用性探测 + Emu 独家 opencode 许愿 Agent |
| 170 | [Tommy00748/dsh-self-evolution](https://github.com/Tommy00748/dsh-self-evolution) | 0 | 2026-10-02 | 2026-10-02 | Self-evolution for DeepSeek Harness: bounded self-managed memory, an automatic per-turn review that refines skills instead of duplicating them, a skill health check, cross-session recall, and a learning card that appears only when it has something to say. |
| 171 | [towNingtek/swarm](https://github.com/towNingtek/swarm) | 0 | 2026-10-01 | 2026-10-02 | Run your own AI office platform: invite customers, give each an isolated DeepSeek Harness site, meter model use. |
| 172 | [tuoLuoSuan/dsh-skill-center](https://github.com/tuoLuoSuan/dsh-skill-center) | 0 | 2026-10-02 | 2026-10-02 | 技能中心 — 在 DeepSeek Harness 的 Web GUI 里浏览、体检并一键安装全世界的 Agent Skills。Skill Center for DSH: five public skill sources, pre-install validation, provenance, update checks and a trash. |
| 173 | [Very12345/dsh-archive-delete](https://github.com/Very12345/dsh-archive-delete) | 0 | 2026-09-29 | 2026-10-02 | Delete a conversation straight from the DSH Web GUI sidebar row, including its DSH archive-gate entry. Standalone, DSH-version-agnostic DSH plugin. |
| 174 | [Very12345/dsh-bash-windows](https://github.com/Very12345/dsh-bash-windows) | 0 | 2026-09-30 | 2026-10-02 | Git-for-Windows bash executor for DeepSeek Harness: a ctx.shell provider that runs commands through the installed Git Bash, so an agent preset can offer a bash tool on Windows without WSL. |
| 175 | [Very12345/dsh-lark-link](https://github.com/Very12345/dsh-lark-link) | 0 | 2026-09-29 | 2026-10-02 | Fork of amlyczz/dsh-lark-link — Feishu/Lark bridge for DeepSeek Harness, adding card streaming status, per-app isolation, multi-user management, session admin and site preview. |
| 176 | [Very12345/dsh-ssh-workspace](https://github.com/Very12345/dsh-ssh-workspace) | 0 | 2026-10-01 | 2026-10-02 | Remote SSH workspaces for DeepSeek Harness with SSH config discovery and project selection |
| 177 | [vitas/dsh-jev-subagent-dispatch](https://github.com/vitas/dsh-jev-subagent-dispatch) | 0 | 2026-09-27 | 2026-10-02 | Cut LLM costs: route routine tasks to cheap subagent models (DeepSeek Harness plugin) |
| 178 | [Wenaixi/dsh-plugin-dev](https://github.com/Wenaixi/dsh-plugin-dev) | 0 | 2026-10-02 | 2026-10-02 | The authoritative standard and developer skill for DeepSeek Harness (DSH 0.2.0-rc.2) &amp; Cordis plugin development. |
| 179 | [wjj-8283/dsh-opencode-go-proxy](https://github.com/wjj-8283/dsh-opencode-go-proxy) | 0 | 2026-09-15 | 2026-10-02 | 适用于OpenCode Go的反代插件，用来解决OpenCode Go需要请求头不能直接访问的问题 |
| 180 | [wjvalue/dsh-mac-keep-awake](https://github.com/wjvalue/dsh-mac-keep-awake) | 0 | 2026-10-02 | 2026-10-02 | Keep macOS awake (no idle system sleep) while a DeepSeek Harness session is running · 会话进行时不让 Mac 空闲休眠的 DSH 插件 |
| 181 | [wojiao42/dsh-memory-file](https://github.com/wojiao42/dsh-memory-file) | 0 | 2026-10-02 | 2026-10-02 | DSH ????????????????? Markdown ?????????????????????????????? ? File-backed memory for DeepSeek Harness with verifiable constraints |
| 182 | [wuwaka/dsh-rehearsal](https://github.com/wuwaka/dsh-rehearsal) | 0 | 2026-10-02 | 2026-10-02 | Upgrade rehearsal CLI for DeepSeek Harness: static peer-graph pre-flight + keyless real-session migration &amp; write-round drills in a throwaway DSH_HOME. External CLI, not a plugin. |
| 183 | [XG221B/dsh-peak-price](https://github.com/XG221B/dsh-peak-price) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin: shows whether the DeepSeek API is billed at peak or off-peak rates, with a live countdown, the official rate table, and self-updating, cross-checked data sources. |
| 184 | [Xian-JL/dsh-Xiao-theme](https://github.com/Xian-JL/dsh-Xiao-theme) | 0 | 2026-10-02 | 2026-10-02 | Xiao theme for DeepSeek Harness Web and Desktop with selectable artwork, a draggable companion, and optional official DeepSeek balance display. |
| 185 | [xieani090612/dsh-session-hud](https://github.com/xieani090612/dsh-session-hud) | 0 | 2026-10-02 | 2026-10-02 | DSH会话悬浮窗：实时显示运行中会话的当前工作与批准提示（WinUI 3，可拖动缩放、置顶、跟随系统主题）注：主要部分均为ai编写 |
| 186 | [XIMOYA/dsh-danger-reflection](https://github.com/XIMOYA/dsh-danger-reflection) | 0 | 2026-10-02 | 2026-10-02 | Danger Reflection (危险反思) — a DeepSeek Harness permission preset where the conversation's own model reviews each sandbox-escalation request instead of asking you. |
| 187 | [xk150424/dsh-agent-ping](https://github.com/xk150424/dsh-agent-ping) | 0 | 2026-10-02 | 2026-10-02 | 跨会话 @ 呼叫同伴：先经用户当场授权，再唤醒并投递给另一个 DSH 会话。 Cross-session @ for DeepSeek Harness: ask the user for approval, then wake and deliver to another session. |
| 188 | [xthreehao/dsh-hidden-session](https://github.com/xthreehao/dsh-hidden-session) | 0 | 2026-10-02 | 2026-10-02 | DSH（DeepSeek Harness）隐藏会话插件：把会话从侧边栏隐藏、可随时恢复。免构建零依赖，契约取自运行中的 0.2.0-rc.2。 |
| 189 | [xypang33-sketch/dsh-save-chat](https://github.com/xypang33-sketch/dsh-save-chat) | 0 | 2026-10-02 | 2026-10-02 | Save DSH conversation turns as Markdown: per-session collections plus a personal knowledge base the model can search on demand. Zero dependencies. |
| 190 | [Yara2090/dsh-update-center](https://github.com/Yara2090/dsh-update-center) | 0 | 2026-09-29 | 2026-10-02 | DeepSeek Harness Web 设置面板的「更新与版本」页：检测 @deepseek-ai/dsh 新版本并一键安装，自检插件完整性并可一键修复，也能停止服务。 |
| 191 | [yellowbee686/agent-harness-plugin](https://github.com/yellowbee686/agent-harness-plugin) | 0 | 2026-10-02 | 2026-10-02 | Composable context and recursive language model plugins for DeepSeek Harness |
| 192 | [YOGEMOW/dsh-archive-manager](https://github.com/YOGEMOW/dsh-archive-manager) | 0 | 2026-10-02 | 2026-10-02 | Codex-style archived-chats manager for DeepSeek Harness: search, filter, unarchive and permanently delete archived sessions. \| DSH 已归档会话管理器 |
| 193 | [yuanxinbin520/dsh-session-cleaner](https://github.com/yuanxinbin520/dsh-session-cleaner) | 0 | 2026-10-02 | 2026-10-02 | DSH session-menu plugin: thorough session deletion (including the projection-cache records DSH leaves behind) and real cross-workspace moves. |
| 194 | [yuehancn/dsh-tool-archive](https://github.com/yuehancn/dsh-tool-archive) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 195 | [yuehancn/dsh-tool-browser](https://github.com/yuehancn/dsh-tool-browser) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 196 | [yuehancn/dsh-tool-comfyui](https://github.com/yuehancn/dsh-tool-comfyui) | 0 | 2026-10-02 | 2026-10-02 | Let DeepSeek Harness generate images: call local or LAN ComfyUI workers directly from chat (status, generate, queue). |
| 197 | [yuehancn/dsh-tool-epub](https://github.com/yuehancn/dsh-tool-epub) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 198 | [yuehancn/dsh-tool-gzh-publisher](https://github.com/yuehancn/dsh-tool-gzh-publisher) | 0 | 2026-10-02 | 2026-10-02 | WeChat Official Account (公众号) pipeline for DeepSeek Harness: validate a draft against the publish gate, then push it to the draft box. |
| 199 | [yuehancn/dsh-tool-invoice](https://github.com/yuehancn/dsh-tool-invoice) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 200 | [yuehancn/dsh-tool-media](https://github.com/yuehancn/dsh-tool-media) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 201 | [yuehancn/dsh-tool-mining](https://github.com/yuehancn/dsh-tool-mining) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 202 | [yuehancn/dsh-tool-notion](https://github.com/yuehancn/dsh-tool-notion) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 203 | [yuehancn/dsh-tool-ocr](https://github.com/yuehancn/dsh-tool-ocr) | 0 | 2026-10-02 | 2026-10-02 | Extract text from images and PDFs in DeepSeek Harness: read a born-digital text layer, or OCR a scan with any engine you configure. |
| 204 | [yuehancn/dsh-tool-podcast](https://github.com/yuehancn/dsh-tool-podcast) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 205 | [yuehancn/dsh-tool-protobuf](https://github.com/yuehancn/dsh-tool-protobuf) | 0 | 2026-10-02 | 2026-10-02 | Read, audit and diff Protocol Buffer definitions inside DeepSeek Harness — without installing protoc. Six tools: outline, describe, diff, audit, next_number, status. |
| 206 | [yuehancn/dsh-tool-qrcode](https://github.com/yuehancn/dsh-tool-qrcode) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 207 | [yuehancn/dsh-tool-subtitle](https://github.com/yuehancn/dsh-tool-subtitle) | 0 | 2026-10-02 | 2026-10-02 | DeepSeek Harness plugin |
| 208 | [Yum-wu/dsh-plugin-codemode](https://github.com/Yum-wu/dsh-plugin-codemode) | 0 | 2026-10-02 | 2026-10-02 | Pi-style Code Mode for DeepSeek Harness (DSH): Programmatic Tool Calling via QuickJS-WASM sandbox |
| 209 | [zf-666888/dsh-session-id-for-desktop](https://github.com/zf-666888/dsh-session-id-for-desktop) | 0 | 2026-10-02 | 2026-10-02 | DSH 会话行菜单扩展：复制会话 ID、永久删除会话（含存储）｜DSH sidebar row-menu actions built on official slots |
| 210 | [Zilong6666/dsh-task-workspace](https://github.com/Zilong6666/dsh-task-workspace) | 0 | 2026-10-02 | 2026-10-02 | DSH task workspace convention: one folder per task, one PROGRESS.md per task (overwritten each update), and per-task git once a task runs long. |
| 211 | [zjhaaa042-cloud/dsh-mobile-notify](https://github.com/zjhaaa042-cloud/dsh-mobile-notify) | 0 | 2026-10-02 | 2026-10-02 | DSH (DeepSeek Harness) 插件：任务完成后把通知推送到手机 —— ntfy / Bark / 钉钉 / 企业微信 / 飞书 / Server酱 / PushPlus / Telegram / Qmsg酱 / 通用 webhook |
| 212 | [zywnb-2/dsh-donevoice](https://github.com/zywnb-2/dsh-donevoice) | 0 | 2026-10-02 | 2026-10-02 | dsh桌面任务提醒，根据codex等agent相同逻辑构建而成，点击桌面提醒可快速回到dsh页面。可自定义上传的音效（自带16个通知音效） |
| 213 | [zywnb-2/dsh-prompt-studio](https://github.com/zywnb-2/dsh-prompt-studio) | 0 | 2026-10-02 | 2026-10-02 | 提示词优化工坊 —— DSH 插件的多风格一键优化与发送前自动优化 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 4sa1ary9/dsh-everything-oauth
- bobostudio/deepseek-harness-desktop
- bobostudio/dsh-session-lens
- Britneycode/dsh-distillery
- Britneycode/dsh-live-room
- cczzyy-cn/subagent-model-picker
- haotian-lu-prog/dsh-dev-backup
- LeeGuanWei-a/dsh-mini-games-lee
- lionheartjie/DSH_Shell
- loonylabs-dev/dsh-cache-guard
- louisremi/dsh-download-files
- Muelsysel/DeepSeek-Harness-Desktop
- Mzy123l/dsh-remote-access-cidr
- pioneer666-user/dsh-archify-manage
- PolinniZhong/dsh-skill-trace
- Ruler4396/dsh-shredder
- ssjob123/dsh-file-panel-left
- TommyFang2077/dsh-easy-desktop
- UsamiEru/we-need-keeper
- w210548735-art/dsh-session-collaboration
- yepyeel/dsh-vision
