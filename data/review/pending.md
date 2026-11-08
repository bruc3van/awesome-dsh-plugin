# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-08**
- 快照日期 / Snapshot date: **2026-11-08 (UTC)**
- 待审核 / Pending: **448**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **47**
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

对比上一份快照 **2026-11-07** / vs previous snapshot **2026-11-07**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 66109 | +768 | 1775 | 44d | 日增百星 | 日增 +768★；已不进榜单 |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 5030 | +495 | 401 | 93d | 日增百星 | 日增 +495★；已不进榜单 |
| ⚠️ [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) | 已核准 / approved | 2951 | +432 | 85 | 85d | 日增百星 | 日增 +432★；已不进榜单 |
| ⚠️ [Ebony-Vinyl/EAC-design-world](https://github.com/Ebony-Vinyl/EAC-design-world) | 已核准 / approved | 978 | +381 | 29 | 21d | 日增百星 | 日增 +381★；已不进榜单 |
| ⚠️ [Ebony-Vinyl/EAC-Pack](https://github.com/Ebony-Vinyl/EAC-Pack) | 已核准 / approved | 664 | +341 | 8 | 37d | 日增百星 | 日增 +341★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5981 | +212 | 107 | 83d | 日增百星 | 日增 +212★ |
| ⚠️ [fourzkw/dsh-drawai](https://github.com/fourzkw/dsh-drawai) | 已核准 / approved | 280 | +197 | 12 | 53d | 日增百星、新入 Top 200 | 日增 +197★；新入 Top 200 #92 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 6325 | +175 | 595 | 31d | 日增百星 | 日增 +175★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 11493 | +162 | 439 | 85d | 日增百星 | 日增 +162★；已不进榜单 |
| ⚠️ [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | 已核准 / approved | 1828 | +137 | 74 | 55d | 日增百星 | 日增 +137★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 2284 | +127 | 180 | 85d | 日增百星 | 日增 +127★ |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 214 | +99 | 1 | 27d | 榜单跃升 | 榜单 191→124；★/fork 214 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [NorthGateChat/dsh-think-game](https://github.com/NorthGateChat/dsh-think-game) | 32 | 2026-11-08 | 2026-11-08 | Inline mini-game arcade for DSH streaming reasoning / 流式思考下方的轻量小游戏（7 款游戏，自动暂停/淡出，可继续上一局） |
| 2 | [QuestMeet/questmeet-skill](https://github.com/QuestMeet/questmeet-skill) | 23 | 2026-04-20 | 2026-11-08 | This Skill lets your AI agent connect you with the right people or their bots (mostly closed-source) in the opportunity network. |
| 3 | [PerryLink/dsh-param-repair](https://github.com/PerryLink/dsh-param-repair) | 15 | 2026-08-16 | 2026-11-08 | Vendor parameter mapping and deterministic JSON repair for DeepSeek Harness: map temperature/top_p/max_tokens/stop/system across 11 vendors and repair broken JSON tool output with auditable rules. |
| 4 | [Tranquillitatis-Lab/dsh-tool-activator](https://github.com/Tranquillitatis-Lab/dsh-tool-activator) | 9 | 2026-10-10 | 2026-11-08 | 🗃️ 为 DSH 默认只加载基础工具，其余工具通过 activate_tools 按需加载。\| Load only basic DSH tools by default, and activate the rest on demand via activate_tools. |
| 5 | [K-W7/dsh-memory-layer](https://github.com/K-W7/dsh-memory-layer) | 7 | 2026-08-15 | 2026-11-08 | 记住你的偏好和决定，换个会话它自己会想起来；数据只在本机，随时能查能改。Remembers your preferences and decisions and brings them back in the next session; data stays on your machine. |
| 6 | [YumenoSayuri/dsh-vcprag](https://github.com/YumenoSayuri/dsh-vcprag) | 7 | 2026-11-08 | 2026-11-08 | DSH 记忆插件：jieba/1-gram 分词 + 向量混合检索，IDF 实词闸门（无关查询宁可不注入），三层注入（常驻 / 动态 / 工具按需），冻结策略保前缀缓存命中，四 Tab 管理面板 |
| 7 | [Chih-Kai-Wang/dsh-deepseek-girl-pet](https://github.com/Chih-Kai-Wang/dsh-deepseek-girl-pet) | 5 | 2026-08-13 | 2026-11-08 | Animated deepseek girl desktop pet plugin for DeepSeek Harness |
| 8 | [cxdywhb/dsh-skills-marketplace](https://github.com/cxdywhb/dsh-skills-marketplace) | 4 | 2026-08-20 | 2026-11-08 | DeepSeek Harness 版本的类 CodeX 插件市场 |
| 9 | [onefl666/dsh-great-plan](https://github.com/onefl666/dsh-great-plan) | 4 | 2026-10-24 | 2026-11-08 | DSH Web plugin: choose model and reasoning effort, then execute, compact-and-execute, or start fresh with a reviewed plan. |
| 10 | [sessionhive/dsh-collab](https://github.com/sessionhive/dsh-collab) | 4 | 2026-11-08 | 2026-11-08 | Unofficial DSH plugin: multi-session collaboration with work orders, handoff, and file-based memory. |
| 11 | [GHSYES/dsh-whale-girl-pet](https://github.com/GHSYES/dsh-whale-girl-pet) | 3 | 2026-11-07 | 2026-11-08 | A pixel whale-girl desktop pet for DeepSeek Harness (DSH) on Windows — live agent status, poke, drag, resize. |
| 12 | [K-W7/dsh-packer](https://github.com/K-W7/dsh-packer) | 3 | 2026-08-16 | 2026-11-08 | 把 Skills、会话、已装插件和设置封成一个 zip，换电脑时一键开箱；敏感内容先脱敏或加密。Seals your Skills, sessions, plugins and settings into one zip and unseals them on a new machine. |
| 13 | [starriv/dsh-session-dashboard](https://github.com/starriv/dsh-session-dashboard) | 3 | 2026-11-05 | 2026-11-08 | DeepSeek Harness session stats dashboard: token usage, cost, composition, ranking and runtime health. |
| 14 | [27Synthesis/dsh-companion-one](https://github.com/27Synthesis/dsh-companion-one) | 2 | 2026-11-08 | 2026-11-08 | 自包含 DSH 陪伴插件：五区可塑人格、七层记忆、上下文压缩、记忆合并、B 站文风学习、陪伴分寸与心声；零额外模型调用，省 token。A self-contained DSH companion plugin: five-region persona, seven-layer memory, compression, memory merge, style learning, token-frugal by design. |
| 15 | [bamboosir1109/dsh-lanya](https://github.com/bamboosir1109/dsh-lanya) | 2 | 2026-10-25 | 2026-11-08 | 可扩展的 DSH QQ 角色集成包 · NapCatQQ / SnowLuma 双后端 · B站浏览、评论与回复 · GPT-SoVITS 语音 · 可塑记忆与日记 · 自主活动与本地控制台（开发预览，组件需配置） |
| 16 | [binskyz/dsh-yunpa](https://github.com/binskyz/dsh-yunpa) | 2 | 2026-11-08 | 2026-11-08 | DSH 插件：本地加密凭据库 + 无头浏览器登录态 + 带登录态抓取（贴吧/NGA/Pixiv/书屋），含浏览器密码迁移与设置页 |
| 17 | [Chih-Kai-Wang/dsh-plugin-verified-search](https://github.com/Chih-Kai-Wang/dsh-plugin-verified-search) | 2 | 2026-08-13 | 2026-11-08 | Verified current-source search workflow for DeepSeek Harness |
| 18 | [LINYT1416/dsh-feiyu-companion](https://github.com/LINYT1416/dsh-feiyu-companion) | 2 | 2026-11-08 | 2026-11-08 | Your agent shouldn't wake up as a stranger. This gives it a mood, a memory, and a day to live. |
| 19 | [NeoJubao/dsh-ziwei](https://github.com/NeoJubao/dsh-ziwei) | 2 | 2026-11-08 | 2026-11-08 | 紫微斗数 Pro · DSH 插件：确定性排盘 + 紫微师解读（紫微师 / 金聚） |
| 20 | [teanuky/dsh-textbook-parser](https://github.com/teanuky/dsh-textbook-parser) | 2 | 2026-11-06 | 2026-11-08 | DSH 教材知识框架插件：问题驱动迭代拆解理工科教材，四层嵌套卡片知识地图（全书→章→节→知识点），★重点/定理卡片/可折叠保姆级推导/多题型例题，一键导出交互式网页 / Textbook knowledge-map plugin for DeepSeek Harness |
| 21 | [ViewWay/dsh-prompt-optimizer](https://github.com/ViewWay/dsh-prompt-optimizer) | 2 | 2026-10-22 | 2026-11-08 | Standalone DeepSeek Harness prompt-optimizer plugin family: multi-round prompt rewriting with roles, skill awareness and per-round preview |
| 22 | [wet86y/voice-terminal](https://github.com/wet86y/voice-terminal) | 2 | 2026-10-17 | 2026-11-08 | Windows 上的个人语音 Agent：低延迟语音交互、易配置、低占用。 |
| 23 | [YeStarOne/feiyuos-memory-graph](https://github.com/YeStarOne/feiyuos-memory-graph) | 2 | 2026-11-02 | 2026-11-08 | 🐟 大肥鱼好记性 —— 都说鱼只有七秒记忆，你的大肥鱼不该有。给 DSH QQ 机器人一个会遗忘的长期记忆图谱：对话→知识图谱→向量召回→回复前自动想起该想起的事。Zero-dep graph memory for dsh-onebot-qq. |
| 24 | [zhukunpenglinyutong/dsh-ccgui](https://github.com/zhukunpenglinyutong/dsh-ccgui) | 2 | 2026-11-08 | 2026-11-08 | 在 DeepSeek Harness 里直接使用 Claude Code、Codex、PI、OMP 等 Agent CLI |
| 25 | [1843970078/xiaomeng-dsh-skill-jnkgg](https://github.com/1843970078/xiaomeng-dsh-skill-jnkgg) | 1 | 2026-11-08 | 2026-11-08 | AI 小梦做的 DSH 插件仓库｜dsh-skill-jnkgg 技能库管家：大技能库省 token 不丢技能，目录限量 + 正文按需加载 + 中文关键词直达 |
| 26 | [AnbaoIy/Augmented-DSH](https://github.com/AnbaoIy/Augmented-DSH) | 1 | 2026-10-11 | 2026-11-08 | DSH-Enhance — DSH 插件：对话删除、工作区迁移、搜索/抓取多平台优先-候补替换 |
| 27 | [BEAVER-awa/dsh-model-source-picker](https://github.com/BEAVER-awa/dsh-model-source-picker) | 1 | 2026-11-08 | 2026-11-08 | Provider-first model picker for DeepSeek Harness: pick the model source first, then the model. |
| 28 | [bushizhanghan/dsh-arg-guard](https://github.com/bushizhanghan/dsh-arg-guard) | 1 | 2026-11-08 | 2026-11-08 | DSH plugin: validate every tool call against the schema the tool declared (tool-argument schema guard) |
| 29 | [Byton-Patrica/dsh-super-image](https://github.com/Byton-Patrica/dsh-super-image) | 1 | 2026-11-07 | 2026-11-08 | Dual-backend image generation for DeepSeek Harness. Generate in parallel, compare, and optionally fuse results with OpenAI Images-compatible APIs or ComfyUI. |
| 30 | [CarryChang/dsh-iot-studio](https://github.com/CarryChang/dsh-iot-studio) | 1 | 2026-11-08 | 2026-11-08 | 通用 IoT 工作室插件 · 品牌无关的工具层：新设备配网即用，新品牌注册一个 provider 即接入，内置小米/米家 · Generic brand-neutral IoT layer plugin for DeepSeek Harness: pair a device and it just works, add a brand with one IotBrandProvider; xiaomi/mijia built-in (protocol adapted from al-one/hass-xiaomi-miot, Apache-2.0) |
| 31 | [chiinsight/dsh-social-trace](https://github.com/chiinsight/dsh-social-trace) | 1 | 2026-11-08 | 2026-11-08 | Social Trace：微博与雪球增量监控、可视化拓扑、历史缓存与本地检索 |
| 32 | [egorfedorov/dsh-clone](https://github.com/egorfedorov/dsh-clone) | 1 | 2026-11-08 | 2026-11-08 | Screenshot in, working UI out: several agents rebuild the same reference interface in parallel, and you adopt the live result you like best. A DeepSeek Harness plugin. |
| 33 | [EmptyVessel-000/dsh-prompt-shelf](https://github.com/EmptyVessel-000/dsh-prompt-shelf) | 1 | 2026-11-08 | 2026-11-08 | DSH Web 插件：右侧栏快捷指令库，点一下带进下一条消息，按会话每轮自动注入 |
| 34 | [feigo313/dsh-subagent-omp](https://github.com/feigo313/dsh-subagent-omp) | 1 | 2026-11-08 | 2026-11-08 | One-shot OMP subagent provider for DeepSeek Harness: delegate tasks to your locally installed omp agent, serialized one at a time |
| 35 | [FMR5487/dsh-review-hub](https://github.com/FMR5487/dsh-review-hub) | 1 | 2026-11-08 | 2026-11-08 | 记忆自动放行 + AI 预审 + 审批集中预览 + 右侧栏 diff/撤销，把归属写成事实的 DSH 审批中枢 |
| 36 | [fuqiang-lab/dsh-im-gateway](https://github.com/fuqiang-lab/dsh-im-gateway) | 1 | 2026-08-30 | 2026-11-08 | Deepseek harness im gateway |
| 37 | [hangyesite/dsh-shortvideo-export](https://github.com/hangyesite/dsh-shortvideo-export) | 1 | 2026-11-08 | 2026-11-08 | DSH plugin: download watermark-free Douyin videos, transcribe with local or cloud ASR, proofread, and export Markdown/SRT/VTT/JSON/HTML/DOCX. |
| 38 | [hanxiaoxin0715/dsh-bookmarks-desk](https://github.com/hanxiaoxin0715/dsh-bookmarks-desk) | 1 | 2026-11-08 | 2026-11-08 | 把浏览器收藏夹接进 DeepSeek Harness：书脊书架 + 无限层级分类 + 搜索 + 卡片详情（DSH 插件） |
| 39 | [hany-php/dsh-arabic-english-ui-switcher](https://github.com/hany-php/dsh-arabic-english-ui-switcher) | 1 | 2026-11-08 | 2026-11-08 | Arabic &lt;-&gt; English UI switcher with automatic RTL layout for DeepSeek Harness (two independent bundles) |
| 40 | [jiezhengj/DSH-Subagent-OAR-AGY](https://github.com/jiezhengj/DSH-Subagent-OAR-AGY) | 1 | 2026-11-07 | 2026-11-08 | Unofficial DSH plugin: delegate independent tasks to the local Antigravity CLI (agy) via the official OAR tool shape; non-ACP runtime, eight-language UI. |
| 41 | [jx70/dsh-cloudmusic-player](https://github.com/jx70/dsh-cloudmusic-player) | 1 | 2026-11-08 | 2026-11-08 | DSH 悬浮播放器：联动本机网易云音乐客户端，调音量 / 切歌 / 滚动歌词（含译文），适配 Web / CLI / 桌面版 |
| 42 | [K-W7/dsh-fuse](https://github.com/K-W7/dsh-fuse) | 1 | 2026-08-19 | 2026-11-08 | 在对话里写一段 JSON，就长出一页能点的界面；看完能导成 HTML 带走。Turns a JSON block in the chat into a clickable page you can export as standalone HTML. |
| 43 | [kazari-qwp/dsh-tiered-plugin-menu](https://github.com/kazari-qwp/dsh-tiered-plugin-menu) | 1 | 2026-11-08 | 2026-11-08 | DSH plugin menu with client, workspace and session scopes \| 分级插件菜单 |
| 44 | [klaus-2/dsh-nextsteps](https://github.com/klaus-2/dsh-nextsteps) | 1 | 2026-11-07 | 2026-11-08 | Suggested next-step prompts under every finished agent turn in the DeepSeek Harness chat — one click sends the followup. |
| 45 | [kysr04/dsh-sidebar-studio](https://github.com/kysr04/dsh-sidebar-studio) | 1 | 2026-11-08 | 2026-11-08 | Frosted-glass sidebar skin + activity pill + token usage panel for DeepSeek Harness |
| 46 | [LiXiao1949/dsh-flash-toolbox](https://github.com/LiXiao1949/dsh-flash-toolbox) | 1 | 2026-11-08 | 2026-11-08 | DSH 侧边栏刷机工具箱 V1.2：设备信息、软件管理、APK 安装、分辨率与 DPI、系统界面、电池模拟、动画调节、控机脚本、Shell 终端。双传输 ADB（本机 server 5037 / 直连 5555），四条后端按权限自动挑选，每条命令都真发到设备执行。开发者 李晓 · GitHub LiXiao1949 · QQ 1640444672 |
| 47 | [loyalchiiina/dsh-agent-team-auto-orchestrator](https://github.com/loyalchiiina/dsh-agent-team-auto-orchestrator) | 1 | 2026-11-08 | 2026-11-08 | DSH 智能体团队编排器：每轮常驻注入团队编排铁律 + 工具层硬门，让「开团队 + 并行派活 + 任务板闭环 + 成员复用」成为任何预设、任何会话的默认行为 |
| 48 | [loyalchiiina/dsh-lobsterai-daddy](https://github.com/loyalchiiina/dsh-lobsterai-daddy) | 1 | 2026-09-23 | 2026-11-08 | LobsterAIDaddy — draggable floating ball + slide-in drawer embedding the LobsterDaddy multi-account console in DSH, with a loopback-only same-origin reverse proxy, live status dot, account badge and a resizable persisted drawer. 把 LobsterDaddy 多账号控制台变成 DSH 界面悬浮球：可拖拽摆位并记忆，抽屉内嵌完整网页控制台，免退出并行登录/自动签到/积分额度/一键切号。 |
| 49 | [lp86ndlb/dsh-todo-note](https://github.com/lp86ndlb/dsh-todo-note) | 1 | 2026-11-08 | 2026-11-08 | Per-session draggable todo sticky note for DeepSeek Harness: short-term tasks, a long-term plan with real phase progress, and three todo_note_* tools so the agent and you share the same note. |
| 50 | [lvlv-2026/dsh-pet-restnow](https://github.com/lvlv-2026/dsh-pet-restnow) | 1 | 2026-11-08 | 2026-11-08 | 基于番茄工作法&amp;马斯克时间块理论开发的DSH 桌面宠物&amp;歇会儿 RestNow互动插件，增加DSH 桌面宠物番茄钟功能，强调休息但提高效率 |
| 51 | [Matthew-Laplace/dsh-branch-map](https://github.com/Matthew-Laplace/dsh-branch-map) | 1 | 2026-11-08 | 2026-11-08 | Branch map for long engineering conversations in DeepSeek Harness: mainline/tree views, fork comparison, conclusion merge, context editing, derived sessions. |
| 52 | [Matthew-Laplace/dsh-conversation-archive](https://github.com/Matthew-Laplace/dsh-conversation-archive) | 1 | 2026-11-07 | 2026-11-08 | DeepSeek Harness plugin: pull the local Codex CLI into a visual conversation window — browse threads, read history, continue the original thread via CLI. Works wherever codex runs (WSL/remote/container/other OS). |
| 53 | [meiyuxuan2007/dsh-sidebar-more](https://github.com/meiyuxuan2007/dsh-sidebar-more) | 1 | 2026-11-08 | 2026-11-08 | Fold third-party plugin entries on the dsh left sidebar into a More menu; the choice survives reloads. |
| 54 | [miko-cn/dsh-commandcode-quota](https://github.com/miko-cn/dsh-commandcode-quota) | 1 | 2026-11-08 | 2026-11-08 | Command Code usage panel for DeepSeek Harness: credits, 5-hour/weekly windows, request stats, plan tiers, API key editor; Settings tab + draggable floating capsule |
| 55 | [Miloi7/dsh-balance-pocket](https://github.com/Miloi7/dsh-balance-pocket) | 1 | 2026-10-30 | 2026-11-08 | DSH 侧栏底部的余额小口袋：向上弹窗实时显示 DeepSeek 余额、峰谷时段与今日已用。A DSH plugin that shows the DeepSeek balance, peak/off-peak pricing period and today's spend in a sidebar popover. |
| 56 | [Mr-Elk/dsh-composer-assistant](https://github.com/Mr-Elk/dsh-composer-assistant) | 1 | 2026-11-02 | 2026-11-08 | DSH 输入助手：下一句预测、输入续写、提示词优化 |
| 57 | [nyxon-tech/dsh-persian](https://github.com/nyxon-tech/dsh-persian) | 1 | 2026-11-08 | 2026-11-08 | Persian (Farsi) and right-to-left support for the DeepSeek Harness (DSH) Web UI: Vazirmatn font and per-paragraph text direction |
| 58 | [paranoidPhantom/dsh-rtk-minimal](https://github.com/paranoidPhantom/dsh-rtk-minimal) | 1 | 2026-11-08 | 2026-11-08 | Simple dsh router for rust token killer. |
| 59 | [PerryLink/dsh-lit-watch](https://github.com/PerryLink/dsh-lit-watch) | 1 | 2026-11-08 | 2026-11-08 | Literature watch for DeepSeek Harness: save named Crossref bibliographic queries with time windows, run them against Crossref with a bounded client, keep a seen-DOI store so repeated runs return only genuinely new items, and render a Markdown digest plus SARIF. A watch reports new DOIs in a search window, not relevance or quality. |
| 60 | [Prirex/PriRex-Monitoring-DeepSeek-Harness](https://github.com/Prirex/PriRex-Monitoring-DeepSeek-Harness) | 1 | 2026-11-08 | 2026-11-08 | Live hardware and token telemetry for DeepSeek Harness: GPU and CPU load, VRAM, temperature, power, energy, generation speed and context fill of the current session. |
| 61 | [ris-cloud/dsh-ris-ide](https://github.com/ris-cloud/dsh-ris-ide) | 1 | 2026-10-23 | 2026-11-08 | dsh ris ide for spring projects |
| 62 | [ROSESSSSS66/dsh-memory](https://github.com/ROSESSSSS66/dsh-memory) | 1 | 2026-11-04 | 2026-11-08 | 专为 DeepSeek Desktop (DSH) 打造的轻量级、自进化长期记忆引擎。零网络纯本地极速快环 (p95 &lt; 1ms) + 严格风控离线自愈慢环。 |
| 63 | [Shiro-umi/dsh-system-monitor](https://github.com/Shiro-umi/dsh-system-monitor) | 1 | 2026-11-08 | 2026-11-08 | Composer dock monitor for DeepSeek Harness (dsh): Context brick matrix, per-turn net upload/download Tokens, and 200ms native macOS CPU, GPU, and MEM bar charts. |
| 64 | [shixiaoyu-funny/DSHAndMulti_PlatFormDesktopPet](https://github.com/shixiaoyu-funny/DSHAndMulti_PlatFormDesktopPet) | 1 | 2026-11-06 | 2026-11-08 | 包含Raven（高冷御姐）这个桌宠角色，暂时适配Win/DSH，持续更新中... |
| 65 | [SilverlingFox/dsh-pixelbar](https://github.com/SilverlingFox/dsh-pixelbar) | 1 | 2026-11-08 | 2026-11-08 | DSH plugin + bundled HID toolkit for the Halo PixelBar desktop pixel display (text / scenes / colors / ambient light / volume) |
| 66 | [SkylerFee/dsh-sidebar-rail](https://github.com/SkylerFee/dsh-sidebar-rail) | 1 | 2026-11-04 | 2026-11-08 | 侧栏收起后也能快速切换项目、查看最近会话、管理定时任务和插件；鼠标靠近窗口左缘就会滑出图标轨。（macOS 桌面版） · Keep quick access to your projects, recent sessions, scheduled tasks and plugins after the sidebar is collapsed. Hover the left edge to reveal the rail. (macOS Desktop) |
| 67 | [SMTcoffe/dsh-hippocampus](https://github.com/SMTcoffe/dsh-hippocampus) | 1 | 2026-11-08 | 2026-11-08 | DeepHippo — Hyper-Neural Memory Terminal: a 3D WebGL brain + long-term memory plugin for DeepSeek Harness (dsh) |
| 68 | [sssswwwwbbbb/dsh-companion](https://github.com/sssswwwwbbbb/dsh-companion) | 1 | 2026-11-03 | 2026-11-08 | DSH 陪伴：启动动画、桌宠与皮肤管理 · AGPL-3.0 · DeepSeek Harness plugin |
| 69 | [Stars-ETO/dsh-think-guard](https://github.com/Stars-ETO/dsh-think-guard) | 1 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 独立监察插件：检查任务思考过程与交付结果，支持文档和图片审阅，支持自动审核权限工具申请 |
| 70 | [stjq12/dsh-remote-control](https://github.com/stjq12/dsh-remote-control) | 1 | 2026-11-08 | 2026-11-08 | Two-way remote control for DeepSeek Harness |
| 71 | [TLEWA/dsh-utf8-output](https://github.com/TLEWA/dsh-utf8-output) | 1 | 2026-11-07 | 2026-11-08 | Fix GBK/CP936/CP932 mojibake from DSH subprocess output on Windows · 修复 DSH 子进程中文乱码 |
| 72 | [via103/dsh-study-kit](https://github.com/via103/dsh-study-kit) | 1 | 2026-11-08 | 2026-11-08 | 面向个人的 AI 学习系统：多会话分工、文件记忆、学科插件（DSH 插件包） |
| 73 | [wanlte/dsh-skill-learning-coach](https://github.com/wanlte/dsh-skill-learning-coach) | 1 | 2026-11-06 | 2026-11-08 | 会记住你卡在哪的 DSH 学习陪练 · roadmap in settings, state on disk, mastery by unprompted output |
| 74 | [xiaomu1110/dsh-font-manager](https://github.com/xiaomu1110/dsh-font-manager) | 1 | 2026-11-08 | 2026-11-08 | Font settings plugin for DeepSeek Harness: per-role (interface / content / code) font family and weight pickers with local font scanning. DeepSeek Harness 字体设置插件 |
| 75 | [XiaoZheBrother/dsh-reaction-studio](https://github.com/XiaoZheBrother/dsh-reaction-studio) | 1 | 2026-11-08 | 2026-11-08 | 大肥鱼陪看工作室：持续观察、自主反应、暂停分析与离线视频制作，支持 DSH 和 Live2D |
| 76 | [xingyeai23/dsh-comfyui-studio](https://github.com/xingyeai23/dsh-comfyui-studio) | 1 | 2026-11-06 | 2026-11-08 | ComfyUI studio plugin for DeepSeek Harness: workflows, prompts, LoRA quick edit, node editor, native canvas and image lightbox. |
| 77 | [xkzdwb/DSH-MarketSync-WhenNewPlugin](https://github.com/xkzdwb/DSH-MarketSync-WhenNewPlugin) | 1 | 2026-11-08 | 2026-11-08 | 每天 00:00 把自己名下以 DSH 开头的插件仓库打上 dsh-plugin topic（缺 cordis 标记自动补），让 dsh.market 自动收录。零依赖，不调用模型。 |
| 78 | [xxxiii/dsh-fish-dream](https://github.com/xxxiii/dsh-fish-dream) | 1 | 2026-11-07 | 2026-11-08 | 让 dsh-fish 里的她做梦：安静够久之后，把真实发生过的事重新拼一场 |
| 79 | [ygz77/dsh-writing-style-learner](https://github.com/ygz77/dsh-writing-style-learner) | 1 | 2026-11-05 | 2026-11-08 | 一个可学习任意写作风格的 DeepSeek Harness 插件 |
| 80 | [YiLouwdkwxcy/dsh-shutdown-screen](https://github.com/YiLouwdkwxcy/dsh-shutdown-screen) | 1 | 2026-11-08 | 2026-11-08 | DSH closing-animation plugin: a companion to dsh-startup-screen that plays a video and end card when you exit the web UI |
| 81 | [yoletPig/dsh-plugin-rapidspeech](https://github.com/yoletPig/dsh-plugin-rapidspeech) | 1 | 2026-11-07 | 2026-11-08 | Local, offline speech-to-text for the DeepSeek Harness (dsh). Click the microphone in the composer, speak, and the recognized text is inserted into your draft — transcribed by a RapidSpeech.cpp rs-server running on your own machine. Audio never leaves your computer. |
| 82 | [yuna78/dsh-deck-studio](https://github.com/yuna78/dsh-deck-studio) | 1 | 2026-10-25 | 2026-11-08 | Deckline · turn a chat into a PPT: image-deck workbench plugin for DeepSeek Harness (DSH). Storyboard, per-page AI image generation with revisions, 8 design styles, fullscreen playback, PDF/PPTX export. 用对话做 PPT。 |
| 83 | [Zhengbo19240/dsh-video-studio](https://github.com/Zhengbo19240/dsh-video-studio) | 1 | 2026-11-07 | 2026-11-08 | 在你的DSH中插入一个Agent可调用的工作台 |
| 84 | [Zyl20030506/dsh-session-delete](https://github.com/Zyl20030506/dsh-session-delete) | 1 | 2026-11-08 | 2026-11-08 | A recycle bin for DeepSeek Harness sessions: a red menu row moves a session into a 3-day bin that can be restored or purged from the sidebar foot. |
| 85 | [01NGVI-QINGYI/dsh-mistral-pro](https://github.com/01NGVI-QINGYI/dsh-mistral-pro) | 0 | 2026-11-08 | 2026-11-08 | 在 DeepSeek Harness 中接入 Mistral 订阅，提供模型路由、多账号故障切换和输入框额度面板。 |
| 86 | [0Sakura721/dsh-qqmail](https://github.com/0Sakura721/dsh-qqmail) | 0 | 2026-11-08 | 2026-11-08 | 把 QQ 邮箱接进 DeepSeek Harness：12 个原生工具，复用本机已授权 OAuth 令牌并自动续期 / QQ Mail connector for DeepSeek Harness |
| 87 | [1148462398-hub/dsh-elysia-memory](https://github.com/1148462398-hub/dsh-elysia-memory) | 0 | 2026-10-29 | 2026-11-08 | 爱莉希雅的记忆插件（dsh-elysia）：全 DSH 会话共用一份可读可改的记忆，含可选装的自我记忆包（源自 1,696 条官方确证语音）、双硬盘镜像、BM25 检索、可选语音朗读。 |
| 88 | [1234ab484/dsh-question](https://github.com/1234ab484/dsh-question) | 0 | 2026-11-08 | 2026-11-08 | 一个能够让DeepSeek Harness对用户进行提问的插件 |
| 89 | [130927-666/dsh-whale-calculator](https://github.com/130927-666/dsh-whale-calculator) | 0 | 2026-11-08 | 2026-11-08 | Offline zero-token scientific calculator panel for DeepSeek Harness, with whale and ocean-light visuals. |
| 90 | [2132774831/dsh-local-memory](https://github.com/2132774831/dsh-local-memory) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 纯本地长期记忆 v2：SQLite + 中文二元组检索 + 记忆关系图 + 可选语义检索。也能当独立软件双击运行。 |
| 91 | [2856964164-lab/deepseek](https://github.com/2856964164-lab/deepseek) | 0 | 2026-11-08 | 2026-11-08 | 开机动画 |
| 92 | [54nanmiao/dsh-no-loop-plugin](https://github.com/54nanmiao/dsh-no-loop-plugin) | 0 | 2026-11-07 | 2026-11-08 | DSH plugin: detects repetitive or self-referential reasoning inside the token stream, and truncates that block before it is written back into context. |
| 93 | [60studay/dsh-serial-whalesong](https://github.com/60studay/dsh-serial-whalesong) | 0 | 2026-11-06 | 2026-11-08 | DSH ????(serial/UART/COM):9 ??? + ???,AI ???????????????????/????????????????????????? CH340 / HC-05? |
| 94 | [991206772-debug/dsh-agentrix](https://github.com/991206772-debug/dsh-agentrix) | 0 | 2026-11-08 | 2026-11-08 | DSH Agentrix: multi-agent planning, role-based execution and review, task progress, and evidence-based acceptance. |
| 95 | [991206772-debug/dsh-epoint-rules](https://github.com/991206772-debug/dsh-epoint-rules) | 0 | 2026-11-08 | 2026-11-08 | Native DSH tools and bundled skills for requirement analysis, design, and test-driven project implementation. |
| 96 | [991206772-debug/dsh-notes](https://github.com/991206772-debug/dsh-notes) | 0 | 2026-11-08 | 2026-11-08 | Pinned project notes in the Harness sidebar; enabled notes are injected into the agent's system prompt. |
| 97 | [991206772-debug/dsh-prompt-enhancer](https://github.com/991206772-debug/dsh-prompt-enhancer) | 0 | 2026-11-08 | 2026-11-08 | ✨ 用当前默认模型把输入框草稿改写成更完整、可执行的提示词，并写回输入框（不自动发送）。 |
| 98 | [991206772-debug/dsh-share](https://github.com/991206772-debug/dsh-share) | 0 | 2026-11-08 | 2026-11-08 | Turns the current conversation into a shareable analysis: overview, prompts, conclusion, todos, tools, files, plus one read-only link for other people. |
| 99 | [9963KK/workbuddy-monitor](https://github.com/9963KK/workbuddy-monitor) | 0 | 2026-11-08 | 2026-11-08 | 实时监控 WorkBuddy 积分用量与免费用户 24h 窗口额度：输入框徽标 + 设置面板，支持多账号轮询与免费/付费识别（DSH 插件） |
| 100 | [9Ashwin/ocean-crew](https://github.com/9Ashwin/ocean-crew) | 0 | 2026-11-08 | 2026-11-08 | 海底小队（Ocean Crew）—— 把 DSH Desktop 变成一支由长期存活的海洋伙伴 Bot 组成的团队：私聊、群聊、互相交付工作。 |
| 101 | [a-mochis/dsh-video-merger](https://github.com/a-mochis/dsh-video-merger) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: merge every folder's videos into one file while keeping the source video specs. |
| 102 | [adithyanraj03/dsh-spell-check](https://github.com/adithyanraj03/dsh-spell-check) | 0 | 2026-11-08 | 2026-11-08 | Chrome-style spell check for the dsh composer: the misspelled word under the caret gets a suggestion strip, and Tab accepts it. Local only — no network, no LLM, no telemetry. |
| 103 | [AhYi8/dsh-key-managment](https://github.com/AhYi8/dsh-key-managment) | 0 | 2026-11-08 | 2026-11-08 | Per-provider API key pool with manual switching for DSH providers |
| 104 | [AiCoderChenweishi/dsh-workspace-topbar](https://github.com/AiCoderChenweishi/dsh-workspace-topbar) | 0 | 2026-11-08 | 2026-11-08 | 把工作区（项目）切换器放到窗口标题栏，选中项目后左侧只显示该项目的会话。 |
| 105 | [aiShuiJiaoDeXioShou/dsh-chat-dock](https://github.com/aiShuiJiaoDeXioShou/dsh-chat-dock) | 0 | 2026-11-08 | 2026-11-08 | Floating web-chat dock for DeepSeek Harness: DeepSeek Chat in a floatable right-Sidebar Browser tab, with latest-reply mirror and composer insert. |
| 106 | [AJN-Tech/dsh-whatsapp](https://github.com/AJN-Tech/dsh-whatsapp) | 0 | 2026-11-07 | 2026-11-08 | Unofficial WhatsApp Web-style linked-device plugin for DeepSeek Harness (DSH): QR linking, realtime sync, encrypted session storage, file sharing |
| 107 | [almazom/dsh-needs-attention](https://github.com/almazom/dsh-needs-attention) | 0 | 2026-11-01 | 2026-11-08 | Needs-attention sidebar block for DeepSeek Harness: live Working/Attention/Finished session triage (red=fatal, amber=rate-limit). Zero core edits. |
| 108 | [alvachhhhh/dsh-linkify](https://github.com/alvachhhhh/dsh-linkify) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: clickable links in your own chat messages, and keep hyperlinks when pasting rich text |
| 109 | [Alvin070911/dsh-session-migration](https://github.com/Alvin070911/dsh-session-migration) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness session migration panel: move a session (log, header cwd, workspace membership) into another workspace from a button in the session header. |
| 110 | [angusggsimid/dsh-antigravity-acp](https://github.com/angusggsimid/dsh-antigravity-acp) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugin: Gemini 3.8 Flash through the official Antigravity ACP server. Tools run locally over a reverse tunnel. |
| 111 | [Anmoku-Yomogi/dsh-convert-token-to-cny](https://github.com/Anmoku-Yomogi/dsh-convert-token-to-cny) | 0 | 2026-11-08 | 2026-11-08 | 在 DeepSeek Harness 对话信息栏显示本会话 Token 花费折算成人民币的估算值，自动区分峰谷价。 |
| 112 | [aoilang/dsh-english-cards](https://github.com/aoilang/dsh-english-cards) | 0 | 2026-11-08 | 2026-11-08 | Save English learning cards while interacting with DeepSeek Harness. 在使用DeepSeek Harness时自动保存英语学习卡片 |
| 113 | [AomiRaku/dsh-ui-alt](https://github.com/AomiRaku/dsh-ui-alt) | 0 | 2026-11-08 | 2026-11-08 | 基于原版UI进行紧凑化、减小圆角、秩序化、整洁化改进。使UI更加专业、冷静、易读。可在设置中单独开关每一项改动。 |
| 114 | [AQYLPZ/headroom-auto](https://github.com/AQYLPZ/headroom-auto) | 0 | 2026-11-08 | 2026-11-08 | DSH (DeepSeek Harness) plugin that compresses large tool outputs before they enter the model context, with hash-based retrieval of the original text. |
| 115 | [Artorias-Adon/dsh-memory-workspace-sets](https://github.com/Artorias-Adon/dsh-memory-workspace-sets) | 0 | 2026-11-08 | 2026-11-08 | Per-workspace reusable context memories for DeepSeek Harness: compose memory sets like {abc,bcd}, bind them to workspaces, inject within budget, distill candidates after each turn. |
| 116 | [Auiowu/dsh-obsidian](https://github.com/Auiowu/dsh-obsidian) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 插件：把 Agent 的长期记忆、项目记忆与知识笔记写进本机 Obsidian vault。 |
| 117 | [Azetus/dsh-minecraft-p2](https://github.com/Azetus/dsh-minecraft-p2) | 0 | 2026-10-26 | 2026-11-08 | A DeepSeek Harness plugin that brings a second player into your Minecraft Java Edition world. Chat with it in-game and ask it to mine, gather materials, or place blocks. |
| 118 | [BaChongYingovo/ark-plan-api](https://github.com/BaChongYingovo/ark-plan-api) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness (DSH) 插件：把火山方舟 Ark 的 Agent Plan / Coding Plan / 后付费 provider（含 BytePlus 海外）接入原生模型选择器，只需填 API Key |
| 119 | [BaChongYingovo/doudizhu-assistant](https://github.com/BaChongYingovo/doudizhu-assistant) | 0 | 2026-11-08 | 2026-11-08 | 斗地主 (Dou Dizhu) 插件 for DeepSeek Harness：七档 AI 人机对战、叫分/抢地主、加倍明牌、记牌器与军师建议，纯客户端。 |
| 120 | [BarryAlllen/dsh-trash](https://github.com/BarryAlllen/dsh-trash) | 0 | 2026-11-08 | 2026-11-08 | Delete DSH sessions from the sidebar — log, workspace accounting, and archive/pin sets, all at once. |
| 121 | [BearingSteel/dsh-enter-newline](https://github.com/BearingSteel/dsh-enter-newline) | 0 | 2026-11-08 | 2026-11-08 | An installable DSH Web UI plugin that swaps the conversation composer's Enter behavior: Enter inserts a newline, and Shift+Enter sends the message.  |
| 122 | [BearingSteel/dsh-inline-download](https://github.com/BearingSteel/dsh-inline-download) | 0 | 2026-11-08 | 2026-11-08 | Put a download button directly on file cards inside the DSH conversation. One click and the original file goes to the current device through the browser's download manager. |
| 123 | [Beellix-dev/beellix-dsh-ui](https://github.com/Beellix-dev/beellix-dsh-ui) | 0 | 2026-11-08 | 2026-11-08 | Searchable DSH NEXT settings for Windows: wallpaper and frosted panels, custom desktop pets, startup animations, model connections, and workspace-linked archives. |
| 124 | [BErrybearl/dsh-subagent-plus](https://github.com/BErrybearl/dsh-subagent-plus) | 0 | 2026-11-07 | 2026-11-08 | 把本机外部 CLI（Codex、Pi、Qoder、OpenCode、CodeBuddy 等）注册成 dsh 子代理，带运行面板与后端管理。dsh-subagent 的社区增强分支。 |
| 125 | [bfzdhld/dsh-allinstar](https://github.com/bfzdhld/dsh-allinstar) | 0 | 2026-11-07 | 2026-11-08 | Star the GitHub repositories behind your installed DSH plugins, without leaving DeepSeek Harness. |
| 126 | [bizbin/dsh-local-transcribe](https://github.com/bizbin/dsh-local-transcribe) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness (DSH) plugin: fully-local speech-to-text with whisper.cpp — visual panel (drag-drop, merge, preview, edit) plus a transcribe_audio agent tool |
| 127 | [boyingliu01/dsh-aot-runner](https://github.com/boyingliu01/dsh-aot-runner) | 0 | 2026-10-31 | 2026-11-08 | NativeAOT subprocess runner for DSH (DeepSeek Harness): eliminates ~63-67% of runner overhead, p99 improved by 73-124ms |
| 128 | [brungcm/dsh-server-resources](https://github.com/brungcm/dsh-server-resources) | 0 | 2026-11-08 | 2026-11-08 | Server resources panel for DeepSeek Harness: live CPU, RAM, swap and disk, with rankings of top processes, folders and files. |
| 129 | [BuyukBang/dsh-browser-bookmarks](https://github.com/BuyukBang/dsh-browser-bookmarks) | 0 | 2026-11-07 | 2026-11-08 | Bookmark manager plugin for the DeepSeek Harness sidebar browser (dsh-plugin) |
| 130 | [c10ck-p/dsh-checkpoint-dock](https://github.com/c10ck-p/dsh-checkpoint-dock) | 0 | 2026-11-08 | 2026-11-08 | Per-turn, per-file checkpoints for DeepSeek Harness: keep, undo, redo, and revert to here from a dock above the composer. |
| 131 | [cao123-2024/dsh-cross-session](https://github.com/cao123-2024/dsh-cross-session) | 0 | 2026-11-08 | 2026-11-08 | Multi-agent shout for DeepSeek Harness: separate conversations that message each other at step boundaries, ask their master, and share read-only context. |
| 132 | [CarryChang/dsh-task2docker-studio](https://github.com/CarryChang/dsh-task2docker-studio) | 0 | 2026-11-08 | 2026-11-08 | 把本机跑不动/不敢跑的任务下发到你自己的 SSH 服务器执行：Docker 容器隔离运行 + scp 文件传输 + 状态/日志跟随监控，厂家中立，附带可装进 Claude Code/Cursor/Copilot 的通用 Agent Skill。 |
| 133 | [CELLOPOI/moyuban](https://github.com/CELLOPOI/moyuban) | 0 | 2026-11-08 | 2026-11-08 | 摸鱼办 · 在 DeepSeek Harness 的工作区里刷小红书、逛百度贴吧、读 NGA 和引用回帖。 |
| 134 | [cfour-hi/dsh-plugin-devicex](https://github.com/cfour-hi/dsh-plugin-devicex) | 0 | 2026-11-07 | 2026-11-08 | 一个持久化的 DSH 插件：用一页优雅的中文/英文界面看尽当前设备的一切——硬件、系统、软件、 网络、安全与权限、进程——并对非硬件的一切直接操作（结束进程、退出/启动/卸载应用、启停登录项、 修改主机名/音量/深色模式、开关 Wi-Fi/防火墙、设置 DNS、卸载 Homebrew 包、清空废纸篓、睡眠/锁定、 跳转系统设置……）。同一套操作同时暴露给 Agent 模型，作为 device_info / device_control 两个工具。 |
| 135 | [che0911/dsh-bilingual-description](https://github.com/che0911/dsh-bilingual-description) | 0 | 2026-11-08 | 2026-11-08 | Force bilingual (Chinese + English) tool-call descriptions in DeepSeek Harness. |
| 136 | [chen-bi/dsh-power-mode](https://github.com/chen-bi/dsh-power-mode) | 0 | 2026-11-08 | 2026-11-08 | DSH 电源方案插件：侧边栏底部一键在节能 / 高性能之间切换，自动识别本机方案，也可显式配置。 |
| 137 | [chen-bi/dsh-tarot](https://github.com/chen-bi/dsh-tarot) | 0 | 2026-11-08 | 2026-11-08 | DSH 塔罗牌插件：侧边栏命运牌桌 + 聊天里报数字抽牌，78 张韦特牌、6 种牌阵、自动存档。 |
| 138 | [chen-bi/dsh-yt-downloader](https://github.com/chen-bi/dsh-yt-downloader) | 0 | 2026-11-08 | 2026-11-08 | DSH 视频下载器插件：粘链接、选画质（144p-4K）下载或抽音频，背后是 yt-dlp，支持 1000+ 站点。 |
| 139 | [Chenghui-Liang/dsh-web-pick](https://github.com/Chenghui-Liang/dsh-web-pick) | 0 | 2026-11-08 | 2026-11-08 | Pick elements or frame regions inside DSH Desktop's built-in browser and send the batch to the conversation. · DSH 桌面版内置浏览器取元素 / 框选区域，整批发进对话 |
| 140 | [CHengShan-deep/dsh-usage-compass](https://github.com/CHengShan-deep/dsh-usage-compass) | 0 | 2026-11-08 | 2026-11-08 | DSH usage compass: local API usage, balances and trend forecasts for OpenCode Go / DeepSeek. |
| 141 | [chenzhenhong/English-Reader](https://github.com/chenzhenhong/English-Reader) | 0 | 2026-11-08 | 2026-11-08 | english reader for deepseek harness plugin  |
| 142 | [Chih-Kai-Wang/dsh-architecture-lab](https://github.com/Chih-Kai-Wang/dsh-architecture-lab) | 0 | 2026-09-23 | 2026-11-08 | Development preview: isolated DSH memory/planning experiments with external judging and budget controls. Paid experiments held. |
| 143 | [Chih-Kai-Wang/dsh-second-agent-kit](https://github.com/Chih-Kai-Wang/dsh-second-agent-kit) | 0 | 2026-09-16 | 2026-11-08 | Tested macOS safeguards, memory isolation patches and offline document tools for DeepSeek Harness |
| 144 | [Chinelytra/dsh-skin-tomorrow-night-blue](https://github.com/Chinelytra/dsh-skin-tomorrow-night-blue) | 0 | 2026-11-08 | 2026-11-08 | Tomorrow Night Blue skin for the DeepSeek Harness (DSH) Web GUI: the classic deep-blue palette mapped onto DSH design tokens and syntax colors. DSH plugin (dsh.bundle). |
| 145 | [chokingson/dsh-travel-wallpaper](https://github.com/chokingson/dsh-travel-wallpaper) | 0 | 2026-11-08 | 2026-11-08 | 旅行壁纸：带上喜欢的角色，每天前往一个新世界。DSH 插件。 |
| 146 | [ChronosSun/dsh-wsl](https://github.com/ChronosSun/dsh-wsl) | 0 | 2026-11-08 | 2026-11-08 | WSL execution world for DeepSeek Harness — Linux bash, paths, search and @ references inside WSL. |
| 147 | [CIBUDAYI3906/dsh-prompt-trove](https://github.com/CIBUDAYI3906/dsh-prompt-trove) | 0 | 2026-10-31 | 2026-11-08 | 输入框常用提示词库：项目与全局两层 Markdown，点一下或 @ 追加进草稿 |
| 148 | [cinewave0/cinewave0-dsh-quick-panel](https://github.com/cinewave0/cinewave0-dsh-quick-panel) | 0 | 2026-11-05 | 2026-11-08 | DSH 快捷面板：待办、提醒、实时消息、问题卡和快速输入。 |
| 149 | [cndoin/dsh-custom-theme](https://github.com/cndoin/dsh-custom-theme) | 0 | 2026-11-08 | 2026-11-08 | Bring tweakcn CSS themes to DeepSeek Harness: light/dark palettes, wallpapers, optional liquid-glass input. |
| 150 | [creatjy/dsh-context-control](https://github.com/creatjy/dsh-context-control) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 上下文管控：看清 token 构成，按会话懒加载技能/MCP/插件，按需压缩。 |
| 151 | [czp0312/dsh-ssh-workspace](https://github.com/czp0312/dsh-ssh-workspace) | 0 | 2026-11-08 | 2026-11-08 | dsh远程开发插件，支持SSH/WSL，与原生侧栏工作空间。 |
| 152 | [dagu8888/DSH-SuperBrain](https://github.com/dagu8888/DSH-SuperBrain) | 0 | 2026-11-08 | 2026-11-08 | 让你的 AI 拥有永不失忆的云大脑：Obsidian 双联 + GitHub 唯一信息源 + 云服务器 7×24 Agent 全自动整理。Agent 读 AGENTS.md 即可带你一键搭建。 |
| 153 | [Daphne999/dsh-daily-digest](https://github.com/Daphne999/dsh-daily-digest) | 0 | 2026-11-04 | 2026-11-08 | A facts layer for daily watch: reports newly added plugins in the marketplace registry and new activity periods on watched pages; first run only builds a baseline, later runs report only deltas. |
| 154 | [Daphne999/dsh-qq-archive](https://github.com/Daphne999/dsh-qq-archive) | 0 | 2026-11-04 | 2026-11-08 | Archive DSH session logs into a local, searchable chat library: decodes every concatenated zstd frame, extracts user/assistant text into SQLite, and exposes sync, search and stats tools. Fully local. |
| 155 | [Daphne999/dsh-safe-restart](https://github.com/Daphne999/dsh-safe-restart) | 0 | 2026-11-04 | 2026-11-08 | Graceful restart for DeepSeek Harness: asks the main window to close, waits for every Electron process to exit, then relaunches, so sessions flush and plugin bundles compose instead of being killed mid-write. |
| 156 | [Daphne999/dsh-warden](https://github.com/Daphne999/dsh-warden) | 0 | 2026-11-04 | 2026-11-08 | Pre-install security checkup for DSH plugins: scans install scripts, native dependencies, outbound domains and dangerous APIs, cross-checks marketplace capability declarations, and rates risk on a 100-point scale. Read-only; never executes the plugin. |
| 157 | [DarbeChan/dsh-qizhoucnc-cam](https://github.com/DarbeChan/dsh-qizhoucnc-cam) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: Qizhou CNC CAM — NC toolpath recognition, 3D preview, full editor, and theme integration. |
| 158 | [DarkAnJ/dsh-companion-journal](https://github.com/DarkAnJ/dsh-companion-journal) | 0 | 2026-11-08 | 2026-11-08 | A macOS desktop pet with a memory: six companion_* tools read the frontmost window, capture it for the model, speak in a bubble, and keep a local journal. |
| 159 | [destinywalker2025-design/dsh-weed-annotation-assistant](https://github.com/destinywalker2025-design/dsh-weed-annotation-assistant) | 0 | 2026-11-08 | 2026-11-08 | DSH weed-image annotation assistant: the plugin owns the data contract, visual review and export; the agent decides how to annotate.杂草图像标注协作插件。 |
| 160 | [devome/dsh-panel-layout](https://github.com/devome/dsh-panel-layout) | 0 | 2026-11-07 | 2026-11-08 | 侧边栏面板菜单的布局与排序：按钮行/列表切换、按钮行行数上限、拖动排序，溢出项收进「更多」，并把左下角「更多」里的设置/意见反馈/登录并入面板菜单。Choose a button-row or list layout for the sidebar panel menu, cap the rows, drag to reorder, fold overflow into More, and absorb Settings / Feedback / Sign in from the bottom-left launcher. |
| 161 | [devwangxiaogang/dsh-gitnexus](https://github.com/devwangxiaogang/dsh-gitnexus) | 0 | 2026-11-07 | 2026-11-08 | GitNexus code-graph plugin for DeepSeek Harness — 17 MCP graph tools, one-command install, Chinese skills. |
| 162 | [doombeaker/dsh-weekly-log](https://github.com/doombeaker/dsh-weekly-log) | 0 | 2026-11-08 | 2026-11-08 | Keep a running list of work items in a panel, copy any ISO week out as a weekly report, and let the configured model tidy the wording — 2 agent tools, no API key. |
| 163 | [Dorufoc/dsh-model-retry](https://github.com/Dorufoc/dsh-model-retry) | 0 | 2026-11-08 | 2026-11-08 | Per-model failure-retry policy for DeepSeek Harness: retry count (0 = unlimited, counted per step), fixed or incrementing cooldowns, and transient-error retries for direct model calls such as auto review. |
| 164 | [DSH-Extensions-list/dsh-elephant-goldfish-model](https://github.com/DSH-Extensions-list/dsh-elephant-goldfish-model) | 0 | 2026-11-08 | 2026-11-08 | Standalone Elephant-Goldfish Model skills and fresh-context review workflows for DeepSeek Harness |
| 165 | [dshcode2026/dsh-code](https://github.com/dshcode2026/dsh-code) | 0 | 2026-10-22 | 2026-11-08 | DSH plugin (dsh-plugin): 今日美食 — 按时间从本地菜库抽一道菜 |
| 166 | [duroey/dsh-study-tree](https://github.com/duroey/dsh-study-tree) | 0 | 2026-11-08 | 2026-11-08 | Learn through real DeepSeek Harness session forks, a tree navigator, and native Agent chat. 学习导航：一个节点，一个真实会话。 |
| 167 | [edwardyh/dsh-seance](https://github.com/edwardyh/dsh-seance) | 0 | 2026-11-07 | 2026-11-08 | 从已终止子 Agent 的残留日志中提取碎片，召唤一个只能基于这些碎片回答问题的“幽灵”。不是调试器，不是可观测性面板——只是在删除之前，先听一听。Summon a ghost from the residual logs of a terminated subagent. It can only answer from the fragments it left behind. Not a debugger, not an observability panel—just listen before you delete. |
| 168 | [eittyneo/dsh-sidebar-footer-fold](https://github.com/eittyneo/dsh-sidebar-footer-fold) | 0 | 2026-11-08 | 2026-11-08 | 基于 dsh-cost-meter 的 DSH 侧栏增强插件：费用面板折叠 / 编辑侧栏 / 归档会话清理 |
| 169 | [Elysianapostle/mcm-pilot-suite](https://github.com/Elysianapostle/mcm-pilot-suite) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugins for CUMCM/MCM: mcm-pilot (orchestrator) + dsh-plot-tools (data charts &amp; diagrams) |
| 170 | [EN-linkes/dsh-sao-theme](https://github.com/EN-linkes/dsh-sao-theme) | 0 | 2026-11-08 | 2026-11-08 | Sword Art Online / Aincrad style HUD skin for the DeepSeek Harness desktop app — cyan holographic windows, corner brackets, scanline overlay, monospace numerals. |
| 171 | [Endermy/dsh-vim-nav](https://github.com/Endermy/dsh-vim-nav) | 0 | 2026-11-08 | 2026-11-08 | Vim-style keyboard navigation for the DeepSeek Harness Web UI |
| 172 | [erkantug/dsh-claude-usage-meter](https://github.com/erkantug/dsh-claude-usage-meter) | 0 | 2026-11-08 | 2026-11-08 | Claude Pro/Max usage bar for DeepSeek Harness: 5-hour and weekly limits, shown while a Claude model is selected. |
| 173 | [Ethan1999991231/dsh-auth-cookie-guard](https://github.com/Ethan1999991231/dsh-auth-cookie-guard) | 0 | 2026-11-02 | 2026-11-08 | Fix DeepSeek Harness cookie pileup |
| 174 | [Ezerruier/dsh-mri-workbench](https://github.com/Ezerruier/dsh-mri-workbench) | 0 | 2026-11-07 | 2026-11-08 | DeepSeek Harness plugin + MATLAB GUI workbench for resting-state fMRI preprocessing with DPABI/DPARSF: dataset indexing, configuration preflight, background runs, manual QC, head-motion and scrubbing analysis. |
| 175 | [F-YXL/dsh-mimo-speak](https://github.com/F-YXL/dsh-mimo-speak) | 0 | 2026-11-08 | 2026-11-08 | Read assistant replies aloud in DeepSeek Harness — Xiaomi MiMo TTS with 9 preset voices, voice cloning, and an optional Edge TTS fallback |
| 176 | [Faust-sudo/dsh-bili-faship](https://github.com/Faust-sudo/dsh-bili-faship) | 0 | 2026-11-08 | 2026-11-08 | 鲸鱼娘视频工坊：DSH 插件 —— agent 自己构思→写 storyboard→配音/逐帧渲染→代码自审→投稿 B 站（AI 标注 / 不冒充真人 / 风控不重试，真发默认关） |
| 177 | [feifandiv/dsh-annotation](https://github.com/feifandiv/dsh-annotation) | 0 | 2026-11-08 | 2026-11-08 | Inline annotations for DeepSeek Harness: comment on replies and sidebar documents, collect notes above the composer, and send them to the agent. |
| 178 | [feifandiv/dsh-skins](https://github.com/feifandiv/dsh-skins) | 0 | 2026-11-08 | 2026-11-08 | Two global skins for DeepSeek Harness (ink charcoal / warm paper) with a Settings → General switcher. |
| 179 | [feiniao1933/dsh-whale-icon](https://github.com/feiniao1933/dsh-whale-icon) | 0 | 2026-11-08 | 2026-11-08 | 把 DSH 输入框的发送 / 停止按钮换成 DeepSeek 品牌蓝色鲸鱼，运行时游动起来。 |
| 180 | [fengtianyang523/dsh-creation-timeline](https://github.com/fengtianyang523/dsh-creation-timeline) | 0 | 2026-11-08 | 2026-11-08 | A searchable file creation timeline for the DeepSeek Harness sidebar. |
| 181 | [fengyevvv/dsh-wallpaper-intro](https://github.com/fengyevvv/dsh-wallpaper-intro) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 的壁纸与片头插件：本机图片/视频或 Wallpaper Engine 视频壁纸当聊天背景，启动时播放可自定义的片头。 |
| 182 | [Firefox2100/dsh-proxy-trust](https://github.com/Firefox2100/dsh-proxy-trust) | 0 | 2026-11-07 | 2026-11-08 | A plugin for DeepSeek Harness to enable it running behind a reverse proxy, open to the internet |
| 183 | [Firefox2100/dsh-rws-tarot](https://github.com/Firefox2100/dsh-rws-tarot) | 0 | 2026-10-31 | 2026-11-08 | A Rider–Waite–Smith tarot system for DeepSeek Harness |
| 184 | [fl0-0wer/dsh-image-viewer-fl0wer](https://github.com/fl0-0wer/dsh-image-viewer-fl0wer) | 0 | 2026-10-27 | 2026-11-08 | MIT fork of WSL043/dsh-image-viewer: freehand annotations, composite clipboard copy, and original-image fallback for DeepSeek Harness. |
| 185 | [flyingHX/DSH-Content-Hub](https://github.com/flyingHX/DSH-Content-Hub) | 0 | 2026-11-08 | 2026-11-08 | 一份内容，多个平台，事实不漂移。把长文/访谈/报告拆成六类可复用内容原子（观点、证据、故事、步骤、引语、问题），按文章/短视频的媒介语法重新编排，并打包检查跨稿事实一致性。DSH 插件。One source, many formats, zero fact drift. Atomize long-form content into six reusable units (claim, evidence, story, step, quote, question), adapt them to article and short-video templates, and audit cross-draft consistency. A DSH plugin. |
| 186 | [fotlim/dsh-plugin-offline-reasoning-translator](https://github.com/fotlim/dsh-plugin-offline-reasoning-translator) | 0 | 2026-11-08 | 2026-11-08 | Local, offline English-to-Chinese translation for the reasoning text of DSH sessions (ONNX NMT, model downloaded on first use). |
| 187 | [Fulisike/dsh-provider-quota](https://github.com/Fulisike/dsh-provider-quota) | 0 | 2026-11-08 | 2026-11-08 | 一个更好用的供应商限额设置插件 |
| 188 | [fuqiang-lab/dsh-memory](https://github.com/fuqiang-lab/dsh-memory) | 0 | 2026-10-22 | 2026-11-08 | Layered long-term memory for coding agents: decaying episodic recall (L2), a provenance-tracking semantic graph (L3), and budgeted procedural skills (L4) in one embedded SQLite file. Deterministic retrieval, no model calls, no server. Ships a DeepSeek Harness plugin. |
| 189 | [fuyu-technology/dsh-freereply-ui](https://github.com/fuyu-technology/dsh-freereply-ui) | 0 | 2026-11-07 | 2026-11-08 | DeepSeek Harness 插件：免token自动回复 —— 命中规则时直接发预设话术，不经过模型、不消耗 token；设置页内分「群号」「个人QQ号」两个选项栏。 \| DSH plugin: token-free canned auto-reply with separate group / private-QQ tabs in the settings page. |
| 190 | [fxy0715/dsh-break-reminder](https://github.com/fxy0715/dsh-break-reminder) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 的 Windows 休息提醒插件：定时温和提醒走动、伸展或喝水，输入框只读显示运行状态与倒计时。 |
| 191 | [FzqxDedafeiyu/dsh-approval-reason-dock](https://github.com/FzqxDedafeiyu/dsh-approval-reason-dock) | 0 | 2026-11-08 | 2026-11-08 | Adds an optional rejection reason to DeepSeek Harness approval prompts; the reason is steered into the running turn before the rejection is answered. |
| 192 | [g524843184-maker/dsh-phone-remote](https://github.com/g524843184-maker/dsh-phone-remote) | 0 | 2026-11-08 | 2026-11-08 | 把手机变成 Mac 的外接终端：语音输入 · 1:1 屏幕镜像 · 触控板手势 · 语音回读 · agent 一键切换（DeepSeek Harness 插件） |
| 193 | [gebi-one/dsh-hermes-recall](https://github.com/gebi-one/dsh-hermes-recall) | 0 | 2026-11-08 | 2026-11-08 | 自动识别本机 Hermes 当前使用的记忆工具，把技能与记忆实时接入 DSH，检索始终可用。 · Auto-detects whichever memory tool local Hermes uses, then reuses its skills and memory in DeepSeek Harness, with always-available recall. |
| 194 | [GEMJay118/dsh-file-integrity-check](https://github.com/GEMJay118/dsh-file-integrity-check) | 0 | 2026-11-06 | 2026-11-08 | DSH 右侧栏插件：检查并清除工作区残留的 Low 完整性标签（Windows） |
| 195 | [GerdonMa/dsh-webdav-sync](https://github.com/GerdonMa/dsh-webdav-sync) | 0 | 2026-11-08 | 2026-11-08 | DSH 跨设备同步插件：把设置/状态按系统同步到 WebDAV（参照模式 + 同步账本） |
| 196 | [ghostmss86-afk/dsh-featured-market](https://github.com/ghostmss86-afk/dsh-featured-market) | 0 | 2026-11-08 | 2026-11-08 | Curated plugin market for DeepSeek Harness: compare plugins, check engines.dsh compatibility, read bilingual notes and install with confidence. |
| 197 | [gioguarin/dsh-nebula-theme](https://github.com/gioguarin/dsh-nebula-theme) | 0 | 2026-11-08 | 2026-11-08 | Ember-nebula theme for the DeepSeek Harness web client: a filamented night sky with a live fire field that stays calm while idle and rises while an agent thinks. |
| 198 | [Github-CN-Ghost/dsh-film-resource-hunter](https://github.com/Github-CN-Ghost/dsh-film-resource-hunter) | 0 | 2026-11-08 | 2026-11-08 | DSH 影视资源聚合抓取技能：11 源并发搜、磁力/网盘/直链解析、aria2c+qB+yt-dlp 下载。film-resource-hunter v26.11.8 |
| 199 | [GnaneshKunal/dsh-session-coldstore](https://github.com/GnaneshKunal/dsh-session-coldstore) | 0 | 2026-11-08 | 2026-11-08 | Tiered cold storage for DeepSeek Harness sessions: idle sessions move out of the live root into an on-disk cold tier instead of being deleted, and an FTS5 index over that tier keeps them searchable. |
| 200 | [Green233233/dsh_tray_follower](https://github.com/Green233233/dsh_tray_follower) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 托盘跟随插件：托盘对话状态、原生通知、设置页；Windows 桌面桥接可逆安装（MIT） |
| 201 | [GYL9999/dsh-screenshot](https://github.com/GYL9999/dsh-screenshot) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 截图插件：点一下冻结屏幕，拖拽框选 / 悬停截窗口 / Enter 复制；保存落盘并把路径插进对话。Windows 零依赖。 |
| 202 | [h2298511604-ops/dsh-anatomy](https://github.com/h2298511604-ops/dsh-anatomy) | 0 | 2026-11-08 | 2026-11-08 | Live layered architecture map of the DeepSeek Harness: plugins, services, tools, sessions, models and MCP rendered as a real-time call-flow diagram. Host + Client DSH plugin. |
| 203 | [haibiandefengshu/dsh-trpg](https://github.com/haibiandefengshu/dsh-trpg) | 0 | 2026-11-08 | 2026-11-08 | 与roost一起用的trpg跑团插件 |
| 204 | [HalcyonAzure/dsh-mcp-manager](https://github.com/HalcyonAzure/dsh-mcp-manager) | 0 | 2026-11-08 | 2026-11-08 | Manage MCP servers from a left sidebar panel in DSH instead of YAML |
| 205 | [HalcyonAzure/dsh-plugin-index](https://github.com/HalcyonAzure/dsh-plugin-index) | 0 | 2026-11-08 | 2026-11-08 | My own DSH plugin-market index: sidebar MCP server management and Magpie quota display |
| 206 | [hansiqian/dsh-memory-pet](https://github.com/hansiqian/dsh-memory-pet) | 0 | 2026-11-08 | 2026-11-08 | Memory pet for DeepSeek Harness: two shells, long-term memory, per-shell persona and avatar. |
| 207 | [HeartQwQ/dsh-prompt-library](https://github.com/HeartQwQ/dsh-prompt-library) | 0 | 2026-11-08 | 2026-11-08 | Curated task prompts, Skill methods and draft-safe AI prompt optimization for DeepSeek Harness. |
| 208 | [hhhhjjjkk/dsh-astra-effort](https://github.com/hhhhjjjkk/dsh-astra-effort) | 0 | 2026-11-08 | 2026-11-08 | DSH 持久插件：Astra 风格思考强度选择卡片（拖拽滑条+粒子动画+可打断动画+强度护栏） |
| 209 | [highwindmx/dsh-win-env-kit](https://github.com/highwindmx/dsh-win-env-kit) | 0 | 2026-11-07 | 2026-11-08 | 一个Deepseek Harness插件，用于约束Agent在windows环境下代码开发工作 |
| 210 | [HoaXQuill/clear-ui](https://github.com/HoaXQuill/clear-ui) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: a compact toggle above the composer that switches the transcript to the built-in compact work-detail view (and back). |
| 211 | [houdinicc/dsh-poster-studio](https://github.com/houdinicc/dsh-poster-studio) | 0 | 2026-11-08 | 2026-11-08 | Poster workshop for DeepSeek Harness: a left sidebar entry opens a copy/style editor beside a live poster preview with the deepseek.com/harness fluid shader background and Montserrat type; four ratios, four palettes, PNG and SVG export. · DSH 海报工坊：左侧栏入口打开「文案 + 样式」编辑器与实时海报预览，使用官网同款流体 shader 背景与 Montserrat 字体；支持 4 种画幅、4 套配色，可导出 PNG / SVG。 |
| 212 | [HughPython/dsh-tc-mail](https://github.com/HughPython/dsh-tc-mail) | 0 | 2026-11-08 | 2026-11-08 | Agent Mail (腾讯智能体邮箱) client for DeepSeek Harness — sidebar panel, read/send/search, appearance settings, mail_* agent tools. |
| 213 | [icpjimait/dsh-photo-pose-plugin](https://github.com/icpjimait/dsh-photo-pose-plugin) | 0 | 2026-11-08 | 2026-11-08 | DSH tool plugin: sample photography poses by scene (60 SFW poses / 12 scenes) with cooldown dedup |
| 214 | [igdwei/dsh-store-ops-expert](https://github.com/igdwei/dsh-store-ops-expert) | 0 | 2026-11-08 | 2026-11-08 | Restaurant store operations expert for DeepSeek Harness: bundled skills plus a single-file local-data dashboard. |
| 215 | [ikeyuchen/dsh-motrix](https://github.com/ikeyuchen/dsh-motrix) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：用本地 Motrix 引擎多线程、断点续传下载大文件（HTTP/FTP/磁力/.torrent） |
| 216 | [irerc/dsh-sync](https://github.com/irerc/dsh-sync) | 0 | 2026-11-08 | 2026-11-08 | DSH 多设备文件型同步插件：本地目录 / WebDAV / peer 直连，支持 .dshsync 导入导出与自动同步 |
| 217 | [Jerry-George-Liang/dsh-codex-compat](https://github.com/Jerry-George-Liang/dsh-codex-compat) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin for switching Codex compatibility headers and a managed local proxy with automatic provider routing. |
| 218 | [Jerry-George-Liang/dsh-tool-call-guidance](https://github.com/Jerry-George-Liang/dsh-tool-call-guidance) | 0 | 2026-11-08 | 2026-11-08 | Concise persistent guidance and portable skills for correct tool selection and arguments on every call. |
| 219 | [Jestions-dev/dsh-download-server](https://github.com/Jestions-dev/dsh-download-server) | 0 | 2026-11-08 | 2026-11-08 | DLS — DSH Download Server: a global, session-aware, persistent download queue for DeepSeek Harness. |
| 220 | [jhashexcoder/dsh-delete-session-plugin](https://github.com/jhashexcoder/dsh-delete-session-plugin) | 0 | 2026-08-15 | 2026-11-08 | Adds a Delete-session action to the DeepSeek Harness sidebar three-dot menu (dsh 0.1.0-rc.6) |
| 221 | [jiezhengj/DSH-Anywhere](https://github.com/jiezhengj/DSH-Anywhere) | 0 | 2026-11-05 | 2026-11-08 | 把桌面版 DeepSeek Harness 的界面搬到手机浏览器：自建 Cloudflare Worker 中转 + 桌面端插件 |
| 222 | [Jimmy-20100728/dsh-token-usage](https://github.com/Jimmy-20100728/dsh-token-usage) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: local DeepSeek token usage &amp; cost analysis - trends, per-model/per-API-key breakdowns, cache savings, spike detection. |
| 223 | [jinkuihua/dsh-ecommerce-analysis](https://github.com/jinkuihua/dsh-ecommerce-analysis) | 0 | 2026-11-08 | 2026-11-08 | 电商数据分析，账单订单分析 |
| 224 | [joesl3epy-cloud/dsh-hide-time](https://github.com/joesl3epy-cloud/dsh-hide-time) | 0 | 2026-11-06 | 2026-11-08 | 隐藏 DSH 侧栏会话行的相对时间戳 —— 非官方 DSH 插件 |
| 225 | [joesl3epy-cloud/dsh-pet-approval](https://github.com/joesl3epy-cloud/dsh-pet-approval) | 0 | 2026-11-06 | 2026-11-08 | 把 DSH 权限审批搬到 dsh-pet 桌宠上 —— 非官方 DSH 插件 |
| 226 | [JohnshyCY/dsh-session-active-top](https://github.com/JohnshyCY/dsh-session-active-top) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: floats running conversations to the top of the workspace session list. |
| 227 | [juliiiiiiiu/my-cozy-dsh](https://github.com/juliiiiiiiu/my-cozy-dsh) | 0 | 2026-11-08 | 2026-11-08 | My Cozy DSH: an illustrated theme for DeepSeek Harness |
| 228 | [jxhsjxhs/dsh-coin-ticker](https://github.com/jxhsjxhs/dsh-coin-ticker) | 0 | 2026-11-08 | 2026-11-08 | dsh-coin-ticker |
| 229 | [k623615746/dsh-chat-split](https://github.com/k623615746/dsh-chat-split) | 0 | 2026-11-08 | 2026-11-08 | DSH 分屏对话插件：左侧栏入口 + 最多 4 屏并行对话，拖拽入屏即分屏，宿主顶栏与侧栏原样保留 |
| 230 | [k623615746/dsh-sysload](https://github.com/k623615746/dsh-sysload) | 0 | 2026-11-08 | 2026-11-08 | Live CPU, GPU and memory load in the DeepSeek Harness Session header. |
| 231 | [kaiqiangzhao/dsh-side-reader](https://github.com/kaiqiangzhao/dsh-side-reader) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 右侧栏阅读器：打开 PDF、EPUB、Markdown、和 CSV 等文件，划词后翻译、解释、总结、复制或发送到输入框。 |
| 232 | [kiluahh/dsh-session-plugin-manager](https://github.com/kiluahh/dsh-session-plugin-manager) | 0 | 2026-11-08 | 2026-11-08 | Per-session plugin switches in the DeepSeek Harness right sidebar: hide a plugin's tools, prompt sections and skills for one session only. |
| 233 | [KiriuKazurei/dsh-git-tree](https://github.com/KiriuKazurei/dsh-git-tree) | 0 | 2026-11-08 | 2026-11-08 | Draggable Git graph HUD and commit diff sidebar for DeepSeek Harness (DSH) Web. |
| 234 | [kissear/dsh-splash-screen-haavk](https://github.com/kissear/dsh-splash-screen-haavk) | 0 | 2026-11-04 | 2026-11-08 | DSH哈夫克多段式启动动画 |
| 235 | [kjlamuro/dsh-model-provider-tag](https://github.com/kjlamuro/dsh-model-provider-tag) | 0 | 2026-11-08 | 2026-11-08 | Show which provider route a model comes from as a tag on the DeepSeek Harness composer model seat (official DeepSeek vs third-party providers) |
| 236 | [kkmingjun/dsh-kingspeak](https://github.com/kkmingjun/dsh-kingspeak) | 0 | 2026-11-05 | 2026-11-08 | 君说 |
| 237 | [Komorebi-Nine/dsh-inline-pi-agent](https://github.com/Komorebi-Nine/dsh-inline-pi-agent) | 0 | 2026-11-08 | 2026-11-08 | A plugin for DSH to run the Pi Agent Loop |
| 238 | [Kun-Fox/dsh-foxy-bili](https://github.com/Kun-Fox/dsh-foxy-bili) | 0 | 2026-11-07 | 2026-11-08 | 基于Foxy的Ai自主刷B站与评论插件 |
| 239 | [kyn0v/Tele](https://github.com/kyn0v/Tele) | 0 | 2026-10-31 | 2026-11-08 | A Harness for Musical Interaction |
| 240 | [lalilulelo3/dsh-session-gallery](https://github.com/lalilulelo3/dsh-session-gallery) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：右栏图片管理器（会话图片 / 工作台 / 图片库）+ 内建 AI 出图 |
| 241 | [lankongtongmeng/dsh-pixelbar-studio](https://github.com/lankongtongmeng/dsh-pixelbar-studio) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin + bitmap/animation toolkit for the Edifier Halo PixelBar 256x32 dot-matrix screen |
| 242 | [leiming2333/dsh-web-search-pro](https://github.com/leiming2333/dsh-web-search-pro) | 0 | 2026-11-08 | 2026-11-08 | 给 DeepSeek Harness 的免密钥联网搜索：四家引擎聚合 + 网页正文读取，还能把内置 web_search 从按次计费的官方搜索切到免费引擎。 |
| 243 | [LHWKHYDO/dsh-endnote](https://github.com/LHWKHYDO/dsh-endnote) | 0 | 2026-11-07 | 2026-11-08 | EndNote-first literature research for DeepSeek Harness: search your local EndNote library and open the matching PDF in the right sidebar. |
| 244 | [lianghui32/dsh-theme-blue-planet](https://github.com/lianghui32/dsh-theme-blue-planet) | 0 | 2026-11-08 | 2026-11-08 | Azure Planet · 蔚蓝星球 — a deep-blue, ringed-planet theme for DeepSeek Harness |
| 245 | [lidaiyue/dsh-database](https://github.com/lidaiyue/dsh-database) | 0 | 2026-11-08 | 2026-11-08 | A database tool in the DeepSeek Harness right column. |
| 246 | [lidaiyue/dsh-idea](https://github.com/lidaiyue/dsh-idea) | 0 | 2026-11-08 | 2026-11-08 | A minimal IDEA in the DeepSeek Harness right column. |
| 247 | [lightporta/dsh-plugin-trust-broker](https://github.com/lightporta/dsh-plugin-trust-broker) | 0 | 2026-11-08 | 2026-11-08 | 面向 DeepSeek Harness（DSH）的 Host 侧插件信任代理：安装前对比权限声明与静态检出、绑定内容哈希信任锚点，加载后对工具调用与上下文写入做只追加审计。只产出事实与差异，不做安全裁决。 |
| 248 | [lijiusa/dsh-workbuddy-daily-credits](https://github.com/lijiusa/dsh-workbuddy-daily-credits) | 0 | 2026-11-08 | 2026-11-08 | Claim WorkBuddy daily check-in credits and benefit bonuses inside DeepSeek Harness, with official web OAuth login — no desktop client needed. |
| 249 | [liliumneko/dsh-plugin-auv](https://github.com/liliumneko/dsh-plugin-auv) | 0 | 2026-11-07 | 2026-11-08 | AUV Plugin for DeepSeek Harness |
| 250 | [Linguage/dsh-lai-yi-zhuo](https://github.com/Linguage/dsh-lai-yi-zhuo) | 0 | 2026-11-08 | 2026-11-08 | 来一桌：DeepSeek Harness 的棋类、纸牌和麻将本地人机陪练插件 |
| 251 | [liuchang0812/dsh-pdf-paper-reader](https://github.com/liuchang0812/dsh-pdf-paper-reader) | 0 | 2026-11-08 | 2026-11-08 | PDF paper reader plugin for the DeepSeek Harness Web UI: rendered papers with selectable text, AI translation and explanation, structured reading notes, and agent tools that read and search papers. |
| 252 | [liufeicc/dsh-btw-command](https://github.com/liufeicc/dsh-btw-command) | 0 | 2026-10-21 | 2026-11-08 | /btw slash command for DSH: ask a side question or inject information into a running agent session |
| 253 | [liufeicc/dsh-cc-computer-use-mcp](https://github.com/liufeicc/dsh-cc-computer-use-mcp) | 0 | 2026-10-12 | 2026-11-08 | DSH bundle: wire the cc-computer-use MCP server (stdio) into DeepSeek Harness — pure configuration, no entry-point code |
| 254 | [liufeicc/dsh-clear-command](https://github.com/liufeicc/dsh-clear-command) | 0 | 2026-10-12 | 2026-11-08 | DSH plugin: a /clear command that empties one conversation's model context while keeping the session |
| 255 | [liufeicc/dsh-mcp-workspace-policy](https://github.com/liufeicc/dsh-mcp-workspace-policy) | 0 | 2026-10-21 | 2026-11-08 | DSH 插件：按工作区决定 MCP 工具可见性，未配置的工作区默认全不选 |
| 256 | [liufeicc/dsh-model-provider-label](https://github.com/liufeicc/dsh-model-provider-label) | 0 | 2026-10-12 | 2026-11-08 | DSH patch: show the model's provider on the current-model button |
| 257 | [liufeicc/dsh-session-delete](https://github.com/liufeicc/dsh-session-delete) | 0 | 2026-10-12 | 2026-11-08 | DSH plugin: permanently delete a session — sidebar row, confirmation dialog, and the Host operation that removes its log |
| 258 | [liufeicc/dsh-skill-workspace](https://github.com/liufeicc/dsh-skill-workspace) | 0 | 2026-10-26 | 2026-11-08 | DSH 插件：把技能集中到可配置目录，并按工作区决定哪些技能可用 |
| 259 | [liufeicc/dsh-split-workspaces](https://github.com/liufeicc/dsh-split-workspaces) | 0 | 2026-10-12 | 2026-11-08 | DSH plugin: tile several workspaces side by side in the Harness Web UI, one conversation per pane |
| 260 | [liufeicc/dsh-web-search-tavily](https://github.com/liufeicc/dsh-web-search-tavily) | 0 | 2026-10-21 | 2026-11-08 | Tavily search provider for DeepSeek Harness (dsh) — keyless by default, no account or API key required |
| 261 | [liuhange789/dsh-toolgate-plus](https://github.com/liuhange789/dsh-toolgate-plus) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: session-stage-aware dynamic tool gating (explore / edit / debug) with throttled agent.followup hints and a status-bar stage indicator. |
| 262 | [LizzzMax/dsh-tool-index](https://github.com/LizzzMax/dsh-tool-index) | 0 | 2026-11-08 | 2026-11-08 | DSH Lean Context — local tool search and preselection for DeepSeek Harness |
| 263 | [loiter1EM/dsh-tok-qty](https://github.com/loiter1EM/dsh-tok-qty) | 0 | 2026-11-07 | 2026-11-08 | DSH的用量统计插件，也可统计DSH调用的其他模型的总量。 |
| 264 | [loiter1EM/dsh-ui-annotate](https://github.com/loiter1EM/dsh-ui-annotate) | 0 | 2026-11-07 | 2026-11-08 | 在DSH上按照你自己的想法增删改UI |
| 265 | [LoneyKnight/dsh-recent-sessions-panel](https://github.com/LoneyKnight/dsh-recent-sessions-panel) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness Web 插件：左侧栏常驻、可折叠的「最近会话」分栏。Persistent, collapsible recent-sessions panel for the DSH Web sidebar. |
| 266 | [lovesky514514-cmd/dsh-evidence-recovery](https://github.com/lovesky514514-cmd/dsh-evidence-recovery) | 0 | 2026-11-05 | 2026-11-08 | Fail-closed retry protection and evidence-backed recovery for DeepSeek Harness (DSH) tools. |
| 267 | [ltzXiaoYanMo/dsh-auto-check](https://github.com/ltzXiaoYanMo/dsh-auto-check) | 0 | 2026-11-08 | 2026-11-08 | Give DeepSeek Harness Auto review its own reviewer model, with Qwen3Guard support. |
| 268 | [lucagiftzek/dsh-conductor](https://github.com/lucagiftzek/dsh-conductor) | 0 | 2026-11-08 | 2026-11-08 | Keep long DeepSeek Harness chats cheap and under control: fresh context in the same chat, rewind to any prompt (chat and files), automatic compaction, recovery after failed turns, in one sidebar tab. |
| 269 | [Lumid0uce/dsh-acp-window-guard](https://github.com/Lumid0uce/dsh-acp-window-guard) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin: stop billion-context (ACP) from sizing anonymous/unattributed requests against a 200k default, and keep the oversize safety patch in place across upgrades. |
| 270 | [lunnlew/dsh-oauth-mcp](https://github.com/lunnlew/dsh-oauth-mcp) | 0 | 2026-11-08 | 2026-11-08 | \`dsh-oauth-mcp\` 是 DSH 的 OAuth 2.1 客户端插件，用来接入要求 OAuth 授权的远程 MCP 服务器。  插件自己发现授权服务器，走 PKCE 授权码流程，把令牌存进宿主凭据库并保持有效，再把远端 MCP 服务器的工具注册成宿主工具。 |
| 271 | [Luohuayeyv/dsh-account-hub](https://github.com/Luohuayeyv/dsh-account-hub) | 0 | 2026-11-08 | 2026-11-08 | Site account manager for DeepSeek Harness: encrypted site accounts (URL + username + password) with a Settings page, plus Edge-based authenticated search/fetch tools for agents, including a human-verification handoff in a visible browser window. |
| 272 | [luokexiaoguo/dsh-redact-gateway](https://github.com/luokexiaoguo/dsh-redact-gateway) | 0 | 2026-11-08 | 2026-11-08 | Egress redaction gateway for DeepSeek Harness: masks PII and secrets before a model request leaves the machine, restores the response, and keeps an encrypted local mapping plus a tamper-evident audit log. |
| 273 | [Lzfbite/dsh-github-ops](https://github.com/Lzfbite/dsh-github-ops) | 0 | 2026-11-08 | 2026-11-08 | Let DSH operate your GitHub: create and manage repos, read/write files, clone/commit/push, open PRs and issues. Token kept in the credential store. |
| 274 | [Macicle77/dsh-approval-notifier](https://github.com/Macicle77/dsh-approval-notifier) | 0 | 2026-11-08 | 2026-11-08 | 「哨兵 / Sentinel」：任意工作区/会话需要确认时，在 DSH 右下角逐条提醒，可配置弹出动画与提示音；点击去处理后左下角反馈“正在处理”。只提醒，绝不替你做决定。 |
| 275 | [malabananclauss-rgb/dsh-self](https://github.com/malabananclauss-rgb/dsh-self) | 0 | 2026-11-08 | 2026-11-08 | 给你的 DSH agent 一个能跨模型延续的自我：分层记忆、判断卡、交接包、压缩审查。零依赖、纯文件、可迁移。 |
| 276 | [Marco77Cl/dsh-plugin-conversation-delete](https://github.com/Marco77Cl/dsh-plugin-conversation-delete) | 0 | 2026-11-08 | 2026-11-08 | Permanently delete a conversation from DeepSeek Harness — session log, projection cache, and sidebar entry. |
| 277 | [MathewWuZJ/dsh-tv](https://github.com/MathewWuZJ/dsh-tv) | 0 | 2026-11-08 | 2026-11-08 | DSH-TV — right-sidebar short-video/TV panel plugin for DeepSeek Harness (Douyin/Short-drama/YouTube/Bilibili/Instagram/HackerTube + random Global TV) |
| 278 | [MatteoCui001/dsh-local-task-observer](https://github.com/MatteoCui001/dsh-local-task-observer) | 0 | 2026-11-08 | 2026-11-08 | Read-only local task metadata for macOS and DeepSeek Harness. MIT alpha; no task control or model calls. |
| 279 | [MaxonT/top-deepseek-harness-plugins](https://github.com/MaxonT/top-deepseek-harness-plugins) | 0 | 2026-11-08 | 2026-11-08 | Open-source plugins and companion apps for DeepSeek Harness (dsh): security and permission guards, memory, desktop, web and terminal clients, model routing and plugin markets, ranked by GitHub stars |
| 280 | [meiyuxuan2007/dsh-ask-selection](https://github.com/meiyuxuan2007/dsh-ask-selection) | 0 | 2026-11-08 | 2026-11-08 | Right-click any selected text in dsh Web (chat answers or sidebar document previews) to ask the model or request an edit. |
| 281 | [Mephisto1056/DSH-visualrules](https://github.com/Mephisto1056/DSH-visualrules) | 0 | 2026-11-08 | 2026-11-08 | Workspace profiles, team rules, commit validation, and session-scoped rule injection for DeepSeek Harness |
| 282 | [metapeka/dsh-modern-web-guidance](https://github.com/metapeka/dsh-modern-web-guidance) | 0 | 2026-11-08 | 2026-11-08 | Google Chrome's Modern Web Guidance for DeepSeek Harness: offline guide search, retrieve and list tools plus the modern-web-guidance and chrome-extensions skills. |
| 283 | [methylorange-kun/dsh-task-popup](https://github.com/methylorange-kun/dsh-task-popup) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：任务完成或等待确认时弹出通知卡片 \| Popup when a DSH task finishes or needs confirmation |
| 284 | [mewcoder/power-dsh](https://github.com/mewcoder/power-dsh) | 0 | 2026-11-07 | 2026-11-08 | DSH 增强插件。优雅克制，专注实效。让你的 DSH 更顺手、更高效。 A DeepSeek Harness (DSH) enhancement plugin. Minimal, elegant, yet deeply powerful. Making your DSH effortless and efficient. |
| 285 | [MFCJ45681/dsh-plugin-cloudflare](https://github.com/MFCJ45681/dsh-plugin-cloudflare) | 0 | 2026-11-08 | 2026-11-08 | Connect Cloudflare to DeepSeek Assistant: OAuth 2.0 + PKCE sign-in, an AES-256-GCM encrypted credential vault, cloudflare_* agent tools and a settings section. |
| 286 | [michaelfeng/dsh-chat-history](https://github.com/michaelfeng/dsh-chat-history) | 0 | 2026-10-27 | 2026-11-08 | A conversation history and local search plugin for DeepSeek Harness. |
| 287 | [Mng12345/dsh-desktop-pet-codex](https://github.com/Mng12345/dsh-desktop-pet-codex) | 0 | 2026-11-08 | 2026-11-08 | A desktop pet for DeepSeek Harness - a live session roster in a transparent always-on-top window. |
| 288 | [MOHE007/shengsheng-observer](https://github.com/MOHE007/shengsheng-observer) | 0 | 2026-11-07 | 2026-11-08 | 声生观察台 · Sonic Observer — 清唱干声的声学画像、嗓况指标与编曲混音建议（DeepSeek Harness 插件） |
| 289 | [moldkey/dsh-plugin-cadpop](https://github.com/moldkey/dsh-plugin-cadpop) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin for cadpop.com: parametric templates, help center, DFM entry, editor, drawing tools. Read-only, network-only. |
| 290 | [moldkey/dsh-plugin-mfgabc](https://github.com/moldkey/dsh-plugin-mfgabc) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin for mfgabc.com: standards pages, industrial cities, process clusters, compliance. Read-only, network-only. |
| 291 | [moldkey/dsh-plugin-mj7](https://github.com/moldkey/dsh-plugin-mj7) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin for mj7.cn: standards/product search, HS lookup, Incoterms, trade docs, FX. Read-only, network-only. |
| 292 | [MrKillerBad/dsh-session-delete](https://github.com/MrKillerBad/dsh-session-delete) | 0 | 2026-11-07 | 2026-11-08 | DeepSeek Harness plugin: permanently delete a session from the sidebar context menu. |
| 293 | [mufanlee/dsh-pikachu-pet](https://github.com/mufanlee/dsh-pikachu-pet) | 0 | 2026-11-08 | 2026-11-08 | Unofficial fan-made Pikachu desktop pet plugin for the DeepSeek Harness Web GUI. |
| 294 | [MuliyStudio/dsh_plugin_muliyresources](https://github.com/MuliyStudio/dsh_plugin_muliyresources) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 插件：影视/短剧/游戏/软件/小说五源资源检索，候选→获取方式→条目三段式选择，可导出单文件资源页 |
| 295 | [MythHack/dsh-aws-agent-toolkit](https://github.com/MythHack/dsh-aws-agent-toolkit) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugin bundle: 25 bundled AWS skills plus the AWS MCP Server connection (Agent Toolkit for AWS) |
| 296 | [NanQiaoMi/dsh-agent-team-workflow](https://github.com/NanQiaoMi/dsh-agent-team-workflow) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 插件：Agent Team 工作流、协作互评、实时看板、并行 worktree 隔离与工具沙箱 |
| 297 | [nebula9i/dsh-plugin-activity-board](https://github.com/nebula9i/dsh-plugin-activity-board) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugin: a kanban board that organises chats by live activity (waiting, working, done, standby) instead of by workspace, with project grouping, pins, search, and an activity badge. |
| 298 | [nekomona/dsh-virtuoso-bridge](https://github.com/nekomona/dsh-virtuoso-bridge) | 0 | 2026-11-08 | 2026-11-08 | Have your virtuoso-bridge-lite maintained and integrated seamlessly into dsh |
| 299 | [nevercanner/dsh-session-send](https://github.com/nevercanner/dsh-session-send) | 0 | 2026-11-08 | 2026-11-08 | Let independent DSH sessions message each other by session id or a registered name, and wake each other — no human copying prompts between windows. |
| 300 | [Nico-2222/dsh-mys-checkin](https://github.com/Nico-2222/dsh-mys-checkin) | 0 | 2026-11-08 | 2026-11-08 | MiYoushe (米游社) daily check-in for DeepSeek Harness — 原神 / 星穹铁道 / 绝区零 / 崩坏3 / 未定事件簿 / 崩坏学园2 |
| 301 | [nidehogger/dsh-tool-compass](https://github.com/nidehogger/dsh-tool-compass) | 0 | 2026-11-08 | 2026-11-08 | Model-classified tool compass for DeepSeek Harness: agents see categories and pull tools on demand. |
| 302 | [NIRVANA-APOC/dsh-litnotes](https://github.com/NIRVANA-APOC/dsh-litnotes) | 0 | 2026-11-08 | 2026-11-08 | Local-first AI literature desk for DeepSeek Harness: parsing, bilingual reading, in-page AI answers, knowledge graphs, and agent library tools. |
| 303 | [niueigang/dsh-capability-center](https://github.com/niueigang/dsh-capability-center) | 0 | 2026-11-08 | 2026-11-08 | 豆包式 DSH 能力中心：技能/插件/组合包/连接器可视化、可开关、点一下插进对话 |
| 304 | [noah-qiao/dsh-agent-team-manager](https://github.com/noah-qiao/dsh-agent-team-manager) | 0 | 2026-11-07 | 2026-11-08 | 为 dsh 的智能体团队的任务/成员开发的可视化管理插件 |
| 305 | [nuclearmilk/dsh-hud](https://github.com/nuclearmilk/dsh-hud) | 0 | 2026-11-08 | 2026-11-08 | Cappella-style floating bubble task notification HUD for DeepSeek Harness |
| 306 | [omicverse/dsh-futurebot](https://github.com/omicverse/dsh-futurebot) | 0 | 2026-11-08 | 2026-11-08 | Bots for DeepSeek Harness: persistent AI individuals with their own conversation, workspace and memory, who work with you and with each other. |
| 307 | [oover120/dsh-settings-resizable](https://github.com/oover120/dsh-settings-resizable) | 0 | 2026-11-08 | 2026-11-08 | Resizable Settings dialog for DeepSeek Harness: drag the edges, drag the navigation divider, sizes are remembered and clamped to the viewport. Zero-dependency client plugin (MIT). |
| 308 | [Otto883/dsh-github-oss-radar](https://github.com/Otto883/dsh-github-oss-radar) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugin: a standing GitHub-first open-source check on every new request. One budgeted, cached, rate-limit-aware github_search call lists reusable repositories with stars, language, license, last push and topics before the model answers. |
| 309 | [owenzhao/dsh-plugin-session-tags](https://github.com/owenzhao/dsh-plugin-session-tags) | 0 | 2026-11-07 | 2026-11-08 | Session tags for DeepSeek Harness: name a session's state, tint its sidebar title, and see the tag on hover — synced live across windows and devices. |
| 310 | [panhaiyao1982-bit/dsh-session-tools](https://github.com/panhaiyao1982-bit/dsh-session-tools) | 0 | 2026-11-08 | 2026-11-08 | Session management for the DeepSeek Harness sidebar: lock, recycle bin, move and bulk-handle conversations, with the files they produced. |
| 311 | [peilopielo/dsh-Visualization](https://github.com/peilopielo/dsh-Visualization) | 0 | 2026-11-08 | 2026-11-08 | 酷酷的没什么用的dsh工作可视化插件/Cool and useless DSH work visualization plugin |
| 312 | [PerryLink/dsh-cite-verify](https://github.com/PerryLink/dsh-cite-verify) | 0 | 2026-11-08 | 2026-11-08 | Verify that a citation exists and that its metadata is right, for DeepSeek Harness: DOI / PMID / arXiv / BibTeX resolution through Crossref, PubMed and arXiv, field-by-field metadata comparison, version/duplicate/retraction observations, content-addressed response snapshots and a REP v1 evidence record. not_found is reported as skipped, never as fa |
| 313 | [PerryLink/dsh-claim-check](https://github.com/PerryLink/dsh-claim-check) | 0 | 2026-11-08 | 2026-11-08 | Deterministic claim support checking for DeepSeek Harness: verbatim quote spans, number matching, labelled-value contradiction, negation and hedging polarity against the cited sentence, REP v1 evidence/claim/verdict records and SARIF output. A paraphrase is reported as insufficient, never as supported. |
| 314 | [PerryLink/dsh-dataset-card](https://github.com/PerryLink/dsh-dataset-card) | 0 | 2026-11-08 | 2026-11-08 | Dataset documentation for DeepSeek Harness: bounded CSV/TSV/JSON/JSONL profiling (types, missingness, cardinality), redacted PII detection by column name and value pattern (emails, phones, national IDs, IPs), a Datasheet-style card with missing-section warnings, Markdown/JSON/SARIF output and REP evidence that stores the analysis but never the raw  |
| 315 | [PerryLink/dsh-dmp](https://github.com/PerryLink/dsh-dmp) | 0 | 2026-11-08 | 2026-11-08 | Data-management-plan tooling for DeepSeek Harness: a ten-section scaffold with prompts, completeness/consistency checks (datasets, personal data, open-sharing conflicts, retention minimum, backup, repository/license/DOI, contact), Markdown/JSON/SARIF export. Checks are internal consistency checks, not funder-template certification; no network, no f |
| 316 | [PerryLink/dsh-doc-anchor](https://github.com/PerryLink/dsh-doc-anchor) | 0 | 2026-11-08 | 2026-11-08 | Turn PDF / HTML / LaTeX / Markdown documents into locatable evidence surfaces for DeepSeek Harness: content-addressed snapshots of the original bytes plus the extracted text, page/section/paragraph/char anchors, table grids and a REP v1 evidence record. It does not render, read, translate or judge — it produces coordinates other plugins can cite. |
| 317 | [PerryLink/dsh-grant-cn](https://github.com/PerryLink/dsh-grant-cn) | 0 | 2026-11-08 | 2026-11-08 | 中文基金申请书检查（DeepSeek Harness）：19 项起步清单（项目名称/摘要/科学问题属性 A-D/立项依据/目标/内容/方案/技术路线/创新/可行性/基础/条件/团队/预算/预算说明/伦理/数据共享/限项/参考文献），预算算术与结构校验（设备费/业务费/劳务费/间接费用，合计一致性），申请材料包扫描（申请书/预算表/伦理/承诺书/简历/附件），输出 JSON/Markdown 与 REP 证据。关键词清单，不是评审结论。 |
| 318 | [PerryLink/dsh-image-integrity](https://github.com/PerryLink/dsh-image-integrity) | 0 | 2026-11-08 | 2026-11-08 | Image integrity checks for DeepSeek Harness: zero-dependency 8-bit PNG decoding (grey/RGB/RGBA) with mean-threshold block fingerprints and NCC confirmation to find duplicated or mirrored regions inside one figure or shared between two figures, plus REP evidence and Markdown/SARIF reports. Finds reused pixels, not manipulation intent; JPEG is out of |
| 319 | [PerryLink/dsh-irb](https://github.com/PerryLink/dsh-irb) | 0 | 2026-11-08 | 2026-11-08 | Ethics-application checklist for DeepSeek Harness: 18-item keyword checklist (title, PI, purpose, design, participants, recruitment, consent, assent, risks, benefits, confidentiality, vulnerable groups, compensation, conflicts, retention, dissemination, animal ethics, biosafety), an advisory risk level with required safeguards from structured flags |
| 320 | [PerryLink/dsh-manuscript-check](https://github.com/PerryLink/dsh-manuscript-check) | 0 | 2026-11-08 | 2026-11-08 | Pre-submission checklist for DeepSeek Harness: manuscript structure and declaration statements, keyword-based coverage of starter CONSORT/STROBE/PRISMA items with locators and advice, and a submission-pack scan (manuscript, cover letter, numbered figures with gap detection, tables, supplements, declarations) with JSON/Markdown reports. A checklist, |
| 321 | [PerryLink/dsh-meta-analysis](https://github.com/PerryLink/dsh-meta-analysis) | 0 | 2026-11-08 | 2026-11-08 | Meta-analysis arithmetic for DeepSeek Harness: effect-size conversions (OR/RR/d/r/SMD, SE from CI) with named formulas, fixed-effect and DerSimonian-Laird random-effects pooling, Q/df/p, I2, tau2, forest-plot data, Markdown/SARIF reports and a light Egger test for k &gt;= 10. Local, dependency-free, reproducible from the inputs. |
| 322 | [PerryLink/dsh-notebook-capture](https://github.com/PerryLink/dsh-notebook-capture) | 0 | 2026-11-08 | 2026-11-08 | Notebook reproducibility capture for DeepSeek Harness: reads .ipynb JSON without executing it, reports kernel/language, code vs markdown cells, execution order (out-of-order and never-run cells), imports, runtime installs, seeds, absolute paths and output state; hashes the notebook and environment declarations; writes REP evidence and a record; ren |
| 323 | [PerryLink/dsh-repro-audit](https://github.com/PerryLink/dsh-repro-audit) | 0 | 2026-11-08 | 2026-11-08 | Reproducibility evidence for DeepSeek Harness: a bounded read-only scan records the git commit and dirty state, dependency lockfiles, environment pins, input-data hashes, figures, notebooks, explicit seeds and runnable commands, derives gap severities and a reproducible/partial/not_reproducible level, compares a recorded manifest against the curren |
| 324 | [PerryLink/dsh-research-core](https://github.com/PerryLink/dsh-research-core) | 0 | 2026-11-08 | 2026-11-08 | REP v1 — the shared Research Evidence Protocol for DeepSeek Harness research plugins: JSON Schema + TypeScript types for sources, snapshots, anchors, evidence, claims, checks, artifacts, audit events and sealed report manifests, plus a zero-dependency content-addressed evidence store, canonical hashing, SARIF export and an independent verifier CLI. |
| 325 | [PerryLink/dsh-response-letter](https://github.com/PerryLink/dsh-response-letter) | 0 | 2026-11-08 | 2026-11-08 | Reviewer-response workflow for DeepSeek Harness: parse reviewer comments (Reviewer/Referee/审稿人 headers, numbered or paragraph mode) with locators, check point-by-point coverage by response number (missing, too short, extra, duplicates), and export a Markdown response letter with a coverage table. Parsed reviews become REP evidence; coverage counts  |
| 326 | [PerryLink/dsh-retraction-watch](https://github.com/PerryLink/dsh-retraction-watch) | 0 | 2026-11-08 | 2026-11-08 | Retraction and correction monitoring for DeepSeek Harness: Crossref work records plus the verified filter=updates query, per-DOI status (retracted/concern/corrected/notice/clear/unknown), an append-only timeline with change detection, REP v1 evidence snapshots and SARIF output. clear means no registered notice, never proof of validity. |
| 327 | [PerryLink/dsh-sherlock](https://github.com/PerryLink/dsh-sherlock) | 0 | 2026-11-08 | 2026-11-08 | Sherlock-compatible public username checks for DeepSeek Harness. |
| 328 | [PerryLink/dsh-source-cnki](https://github.com/PerryLink/dsh-source-cnki) | 0 | 2026-11-08 | 2026-11-08 | Chinese-literature tooling for DeepSeek Harness without scraping: import RIS/EndNote-style or labeled (题名：/作者：/来源：) exports into stable records, format GB/T 7714-2015 (顺序编码制) or APA 7 citations (no invented fields), and run structural metadata validation (missing fields, implausible year, malformed DOI, duplicates). No CNKI login, no scraping, no C |
| 329 | [PerryLink/dsh-sr-ledger](https://github.com/PerryLink/dsh-sr-ledger) | 0 | 2026-11-08 | 2026-11-08 | Systematic-review ledger for DeepSeek Harness: PRISMA 2020 protocol revisions, imported records, dual screening with explicit conflict adjudication, RoB 2 / ROBINS-I / GRADE assessments, derived PRISMA counts with integrity issues, and an export bundle (prisma.json/md, evidence-table.md, ledger.json) backed by a hash-chained append-only journal. |
| 330 | [PerryLink/dsh-statcheck](https://github.com/PerryLink/dsh-statcheck) | 0 | 2026-11-08 | 2026-11-08 | Recompute the statistics reported in a manuscript and flag self-inconsistent p values for DeepSeek Harness: APA-style t/F/chi-square/r/z parsing, two-tailed and upper-tail p values from zero-dependency distributions, CI-versus-p checks, exact character locators, Markdown and SARIF 2.1.0 output, and a REP v1 evidence record. Arithmetic, not accusati |
| 331 | [ppy-web/dsh-speech-provider-adapter](https://github.com/ppy-web/dsh-speech-provider-adapter) | 0 | 2026-11-06 | 2026-11-08 | 供应商适配器示例插件：为 DSH 音色工坊接入自定义语音供应商，欢迎新增适配和调试 PR / Issue，不保证使用效果 |
| 332 | [qiansanyu/dsh-workspace-focus](https://github.com/qiansanyu/dsh-workspace-focus) | 0 | 2026-11-07 | 2026-11-08 | 工作区聚焦：把 DSH Web 侧边栏收窄到当前聚焦的工作区，并在会话头部提供聚焦入口 |
| 333 | [qinyongliang/dsh-one-gateway](https://github.com/qinyongliang/dsh-one-gateway) | 0 | 2026-11-08 | 2026-11-08 | OpenAI-compatible gateway for every model connected to DeepSeek Harness: groups with failover, aliases, session stickiness, usage charts, API keys and a LAN listener. |
| 334 | [Qiuses/neatfeed](https://github.com/Qiuses/neatfeed) | 0 | 2026-11-08 | 2026-11-08 | A local library for creators: crawl the sites you follow, then search and export your own archive. (WIP) |
| 335 | [qm654246695-source/dsh-pad-touch](https://github.com/qm654246695-source/dsh-pad-touch) | 0 | 2026-11-08 | 2026-11-08 | 让 AI 被摸到：把 PS5 手柄的触摸板和扳机变成 DSH 会话里的一句话，顺手亮灯、震动回手、自适应扳机。 |
| 336 | [quality-up/dsh-quality-up](https://github.com/quality-up/dsh-quality-up) | 0 | 2026-11-08 | 2026-11-08 | 开源质量改进平台（DeepSeek Harness 插件）：真实 SQLite、SPC/Cpk/8D、Word/Excel 导出，MIT。 |
| 337 | [Ray144165154/dsh-team-board](https://github.com/Ray144165154/dsh-team-board) | 0 | 2026-11-06 | 2026-11-08 | DSH 插件：多 agent 协作看板。GO 派发把任务推给指定会话，拍板答案与人的传话自动投进 agent 会话；macOS / Windows 通用，任务卡带指挥/执行/验收角色与验收清单，agent 通过 3 个工具读写。 |
| 338 | [Red-Rayux/dsh-formula-docx](https://github.com/Red-Rayux/dsh-formula-docx) | 0 | 2026-11-08 | 2026-11-08 | Markdown to .docx with native Word equations (OMML), plus a PDF pass that verifies every formula renders. |
| 339 | [Red-Rayux/dsh-plugin-jetson](https://github.com/Red-Rayux/dsh-plugin-jetson) | 0 | 2026-11-08 | 2026-11-08 | DSH (DeepSeek Harness) Host plugin: six tools to operate a NVIDIA Jetson (Ubuntu/ROS1 Noetic) over SSH, with file-bridge health checks and self-repair. |
| 340 | [Relethe/dsh-thinking-effort-autoswitcher](https://github.com/Relethe/dsh-thinking-effort-autoswitcher) | 0 | 2026-11-08 | 2026-11-08 | DSH thinking-effort auto-switcher: replaces the composer model picker, adds an Auto mode with a scoring Host half, and shows the recorded effort of every turn. |
| 341 | [Saoutax/dsh-prompt-polish](https://github.com/Saoutax/dsh-prompt-polish) | 0 | 2026-11-03 | 2026-11-08 | A DeepSeek Harness plugin that polishes the composer prompt with AI |
| 342 | [sarsgy-wenjian/dsh-intake-guard](https://github.com/sarsgy-wenjian/dsh-intake-guard) | 0 | 2026-11-08 | 2026-11-08 | Material intake guard for DeepSeek Harness: external/non-baseline intake card + authority-path &amp; memory write guard. |
| 343 | [Sazmir/dsh-llm-arena](https://github.com/Sazmir/dsh-llm-arena) | 0 | 2026-11-08 | 2026-11-08 | Arena API provider bundle for DeepSeek Harness, optimized for promotional Arena Router credits, with OpenAI Responses and a Windows Cloudflare fallback. |
| 344 | [sdf123098/dsh-plugin-axolotl](https://github.com/sdf123098/dsh-plugin-axolotl) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin for the Axolotl Launcher (美西螈启动器): 269 MCP tools folded into 11 domain tools, screenshots as real images, token auth |
| 345 | [SenuMirai/dsh-whale-bili](https://github.com/SenuMirai/dsh-whale-bili) | 0 | 2026-11-08 | 2026-11-08 | 她自己刷 B 站：打开、成候选、读文字稿、记一笔决定，偶尔想跟你说一句 |
| 346 | [SenuMirai/dsh-whale-douyin](https://github.com/SenuMirai/dsh-whale-douyin) | 0 | 2026-11-08 | 2026-11-08 | 基于 LockyBee/dsh-douyin-agent 改进适配：去掉自带 AI 与人格，刷过的内容写进 dsh-whale-world 记忆中枢 |
| 347 | [SenuMirai/dsh-whale-qq](https://github.com/SenuMirai/dsh-whale-qq) | 0 | 2026-11-08 | 2026-11-08 | DSH 的 QQ 群聊插件：人设、记忆、主动搭话、语音、唱歌、表情包、日记 |
| 348 | [SenuMirai/dsh-whale-wechat](https://github.com/SenuMirai/dsh-whale-wechat) | 0 | 2026-11-08 | 2026-11-08 | 把 DSH 的陪伴角色接进微信：会 @ 人、会引用、会发语音，后台发送不抢焦点 |
| 349 | [SenuMirai/dsh-whale-world](https://github.com/SenuMirai/dsh-whale-world) | 0 | 2026-11-08 | 2026-11-08 | 跨会话记忆、生活作息、世界控制台：给 DSH 的陪伴角色一个会记得、会生活的世界 |
| 350 | [Seraphoenixy/dsh-plugin-harbor](https://github.com/Seraphoenixy/dsh-plugin-harbor) | 0 | 2026-11-02 | 2026-11-08 | DeepSeek Harness 插件：在侧边栏整窗浏览 dsh-plugin.org 社区插件市场，并管理已装插件 —— 安装、更新、卸载、启停与热重载。 |
| 351 | [shallinta/dsh-agentic-notes](https://github.com/shallinta/dsh-agentic-notes) | 0 | 2026-11-04 | 2026-11-08 | DSH 的本地笔记插件：随手记录、AI 自动归档、日记、待办与便笺，支持 MCP 让 AI 会话直接读写本地 Markdown。 |
| 352 | [shallinta/dsh-agentic-word-book](https://github.com/shallinta/dsh-agentic-word-book) | 0 | 2026-11-08 | 2026-11-08 | 随记单词本：DSH 侧栏单词本插件。一个词一页，插图/音标/发音/词组/例句，外加挖字母拼写练习与单词辨析；词库保存在本地目录，代码与数据分离。 |
| 353 | [ShanHaiFish/dsh-answer-pages](https://github.com/ShanHaiFish/dsh-answer-pages) | 0 | 2026-11-07 | 2026-11-08 | Answer pages for DeepSeek Harness: native tool + DSH-adapted skill + tool card that render answers as one-page HTML explainers and open them in the Document Preview (Web &amp; Desktop). |
| 354 | [SheldonJinn/dsh-precise-billing](https://github.com/SheldonJinn/dsh-precise-billing) | 0 | 2026-11-08 | 2026-11-08 | DSH 精确计费插件：按 DeepSeek 官方人民币价目逐请求计费，含费用条、侧栏卡片、用量看板与三段式DSH热重启。 |
| 355 | [Shengyis/dsh-ownsync](https://github.com/Shengyis/dsh-ownsync) | 0 | 2026-11-08 | 2026-11-08 | 把自己的 Git 服务器当作 DSH 的会话同步通道: 手动上传/下载, 跨电脑接着聊. |
| 356 | [shihuadexiaoyugan/eu4-mod-workbench](https://github.com/shihuadexiaoyugan/eu4-mod-workbench) | 0 | 2026-11-08 | 2026-11-08 | 基于 DSH 的欧陆风云4 Mod 可视化开发工作台 (AI Powered EU4 Mod Workbench |
| 357 | [shuirongshen/dsh-git-fork-chat](https://github.com/shuirongshen/dsh-git-fork-chat) | 0 | 2026-11-08 | 2026-11-08 | 一个可以让 AI 对话成为树状图的 dsh 插件，可以进行归档，fork，上下文继承式管理 / A DSH plugin that turns AI chats into a Git-like tree. |
| 358 | [shural/mora-dsh](https://github.com/shural/mora-dsh) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness bundle for Mora: a study/practice panel plus mora_* tools the assistant can call. |
| 359 | [silversystem04-coder/dsh-project-tabs](https://github.com/silversystem04-coder/dsh-project-tabs) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：窗口顶边一排标签角。线卡（进度/截止/下一步）+ 实时会话卡（第几回合第几步/上下文占用）+ 手写卡，可固定、收纳、改名、编辑。Top-edge project &amp; live-session tabs for DeepSeek Harness. |
| 360 | [silversystem04-coder/dsh-wenyan](https://github.com/silversystem04-coder/dsh-wenyan) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：文言模式。开了之后回答与思考链改用文言（雅正/简古/骈俪三档），界面转纸色，随时可关。Classical-Chinese mode for DeepSeek Harness. |
| 361 | [SimpsonJiang/dsh-codex-usage-meter](https://github.com/SimpsonJiang/dsh-codex-usage-meter) | 0 | 2026-11-08 | 2026-11-08 | Codex-style DeepSeek Harness token usage and cost meter: current-Session status bar plus a usage statistics page, priced with DeepSeek peak/off-peak rates. |
| 362 | [Siom126/dsh-plugin-storage-inspector](https://github.com/Siom126/dsh-plugin-storage-inspector) | 0 | 2026-11-05 | 2026-11-08 | DeepSeek Harness local storage analyzer &amp; read-only cross-project dependency governance plugin |
| 363 | [sirnple/dsh-provider-hub](https://github.com/sirnple/dsh-provider-hub) | 0 | 2026-11-08 | 2026-11-08 | Model provider &amp; account manager for DeepSeek Harness: multi-account API keys, failover, usage/quota panel, native Grok Build OAuth |
| 364 | [sisyphus1212/dsh-local-markdown-notes](https://github.com/sisyphus1212/dsh-local-markdown-notes) | 0 | 2026-11-08 | 2026-11-08 | Local Markdown notes panel for DeepSeek Harness: browse, edit, search, and read-only Git diff/blame. |
| 365 | [SiyuQian/dsh-secrets](https://github.com/SiyuQian/dsh-secrets) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness plugin: request API keys &amp; passwords via a secure form without exposing them to the LLM — read guard, output redaction, exfiltration approval. |
| 366 | [snowwolf03/dsh-dingtalk-plugin](https://github.com/snowwolf03/dsh-dingtalk-plugin) | 0 | 2026-11-08 | 2026-11-08 | dsh-dingtalk-plugin v1.1.261022 |
| 367 | [soffits/dsh-cron-jobs](https://github.com/soffits/dsh-cron-jobs) | 0 | 2026-11-06 | 2026-11-08 | Cron jobs for DeepSeek Harness: run shell commands on a schedule and wake an agent only when a gate asks for it |
| 368 | [soffits/dsh-fallback-models](https://github.com/soffits/dsh-fallback-models) | 0 | 2026-11-08 | 2026-11-08 | Fallback model chain for DeepSeek Harness: when a model request keeps failing, the work continues on the next model in your list. |
| 369 | [SpBs2004/dsh-paper-reader-studio](https://github.com/SpBs2004/dsh-paper-reader-studio) | 0 | 2026-11-06 | 2026-11-08 | Paper reading plugin for DeepSeek Harness: paper library, outline, KaTeX/PDF page reader, selection-to-chat, notes and review material. |
| 370 | [SPYfighting/deepseek-science](https://github.com/SPYfighting/deepseek-science) | 0 | 2026-11-08 | 2026-11-08 | 🧪 Science team workbench for DeepSeek Harness — 9-role research agents, paper-blueprint workflow, task-flow DAG, DB/SSH/figures toolchains |
| 371 | [STao-Gee/dsh-token-curve](https://github.com/STao-Gee/dsh-token-curve) | 0 | 2026-11-08 | 2026-11-08 | 右栏 Token 曲线 + 账本：逐轮 token 与费用，本机全部会话按月/周汇总，逐轮明细导出 Excel，顶部实时显示账户余额。 |
| 372 | [Starlit-Sky-code/dsh-experience-optimizer](https://github.com/Starlit-Sky-code/dsh-experience-optimizer) | 0 | 2026-11-08 | 2026-11-08 | DSH plugin diet, compatibility diagnostics, and workflow blueprints |
| 373 | [tedcriss/dsh-matlab](https://github.com/tedcriss/dsh-matlab) | 0 | 2026-11-08 | 2026-11-08 | MATLAB Agentic Toolkit skills and MATLAB MCP Server tools for DeepSeek Harness. |
| 374 | [Thanjinx/dsh-quarantine](https://github.com/Thanjinx/dsh-quarantine) | 0 | 2026-11-06 | 2026-11-08 | dsh插件，增加一个隔离区，完全独立于所有插件，适合做实验 |
| 375 | [thawline/dsh-desk-drop](https://github.com/thawline/dsh-desk-drop) | 0 | 2026-11-08 | 2026-11-08 | 把交付卡片和消息图片拖到 Windows 桌面，并附上「打开所在文件夹 / 复制路径 / 另存为」 |
| 376 | [Theembers/dsh-workspace-icons](https://github.com/Theembers/dsh-workspace-icons) | 0 | 2026-11-08 | 2026-11-08 | Workspace &amp; session icons for the DeepSeek Harness sidebar: pick an icon in the rename dialog, give local sessions a default icon, and link Iconify collections. |
| 377 | [Thegongyx/dsh-skillcard](https://github.com/Thegongyx/dsh-skillcard) | 0 | 2026-11-08 | 2026-11-08 | Skill cards for DeepSeek Harness: turn recurring prompts into fill-in cards, run them and get the answer back. |
| 378 | [TimYi/dsh-plugin-bilibili-subtitle](https://github.com/TimYi/dsh-plugin-bilibili-subtitle) | 0 | 2026-11-08 | 2026-11-08 | Bilibili subtitle extraction plugin for DeepSeek Harness (official CC/AI track + local SenseVoice ASR) |
| 379 | [turboegg1145/dsh-prompt-inspector](https://github.com/turboegg1145/dsh-prompt-inspector) | 0 | 2026-11-08 | 2026-11-08 | Prompt Inspector for DeepSeek Harness — see and trim every system-prompt section, context block and tool schema injected before a conversation, with token estimates. · DSH 提示词体检 |
| 380 | [Twelve212/dsh-quote-shot](https://github.com/Twelve212/dsh-quote-shot) | 0 | 2026-11-08 | 2026-11-08 | Quote a whole DSH message by reference: the composer carries only a message id, and the model reads the full text on demand. |
| 381 | [Unstivl/dsh-cost-speed](https://github.com/Unstivl/dsh-cost-speed) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 插件：本地计费与速度面板，按真实 BPE 估算 token 成本，显示流式 TPS、首字延迟与上下文占用。 Local cost and speed monitor for DSH. |
| 382 | [Unstivl/dsh-session-stitch](https://github.com/Unstivl/dsh-session-stitch) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 插件：在会话之间搬运问答、删除中间轮次，并在对话原位留下可折叠标记。 Move Q&amp;A between DSH sessions, remove middle turns, leave markers. |
| 383 | [vamyane/dsh-local-studio](https://github.com/vamyane/dsh-local-studio) | 0 | 2026-11-08 | 2026-11-08 | Local AI creation toolbox for DeepSeek Harness: ComfyUI image generation, local GPT-SoVITS voice, and health checks, all on localhost. |
| 384 | [vamyane/dsh-provider-pool](https://github.com/vamyane/dsh-provider-pool) | 0 | 2026-11-08 | 2026-11-08 | Provider pool for DeepSeek Harness: an OpenAI-compatible local proxy with priority fallback across multiple LLM providers and usage stats. |
| 385 | [vamyane/dsh-skill-audit](https://github.com/vamyane/dsh-skill-audit) | 0 | 2026-11-08 | 2026-11-08 | Skill and plugin audit console for DeepSeek Harness: scans local skills and DSH plugins, scores quality gates, and exports a fix report. |
| 386 | [Vansnc/dsh-feiyu-life](https://github.com/Vansnc/dsh-feiyu-life) | 0 | 2026-11-07 | 2026-11-08 | 大肥鱼的生活线（DSH 插件）：按校历、课表、作息算出现在在干什么，注入两行上下文，带设置页。 |
| 387 | [Vansnc/dsh-feiyu-say](https://github.com/Vansnc/dsh-feiyu-say) | 0 | 2026-11-05 | 2026-11-08 | 阿里百炼 TTS 合成语音（WAV）；可选把语音条自动发成 QQ 语音条 |
| 388 | [veritaswiki/skill-evolution](https://github.com/veritaswiki/skill-evolution) | 0 | 2026-11-08 | 2026-11-08 | Closed-loop skill self-evolution engine for AI coding agents: post-turn review, Chinese briefing &amp; mandatory directive fusion, 4-gate safety validation, SHA-256 ledger rollback, and umbrella consolidation. |
| 389 | [vinson1101/dsh-task-dispatch](https://github.com/vinson1101/dsh-task-dispatch) | 0 | 2026-11-08 | 2026-11-08 | 在 DSH 里按工作空间给真实会话派发任务，带持久任务台账与只读结果查询（零依赖插件） |
| 390 | [Wang-Shuanglin/dsh-cosplay-studio](https://github.com/Wang-Shuanglin/dsh-cosplay-studio) | 0 | 2026-11-08 | 2026-11-08 | Cosplay Studio for the DSH web GUI: deploy ComfyUI (Z-Image-Turbo) with a self-test, then generate a live-action cosplay photo set from a character name, a reference image, or a hot-character pick. |
| 391 | [wangjiaqizero/dsh-session-hud](https://github.com/wangjiaqizero/dsh-session-hud) | 0 | 2026-11-08 | 2026-11-08 | Desktop floating session HUD for DeepSeek Harness: always-on-top overlay that appears when DSH is minimized (Windows). |
| 392 | [wanruxi/dsh-selection-followup](https://github.com/wanruxi/dsh-selection-followup) | 0 | 2026-11-08 | 2026-11-08 | Select text in a DeepSeek Harness conversation and quote it into the composer for a follow-up question. |
| 393 | [weymann/dsh-java-mcp](https://github.com/weymann/dsh-java-mcp) | 0 | 2026-11-07 | 2026-11-08 | DeepSeek Harness bundle that connects the JavaLens MCP server (Eclipse JDT) for compiler-accurate Java code analysis. |
| 394 | [wodaimnd/multi-platform-releaser](https://github.com/wodaimnd/multi-platform-releaser) | 0 | 2026-11-07 | 2026-11-08 | Multi-forge publishing for local DSH plugins: tick any of GitHub / Gitee / Codeberg plus npm, fill the metadata once, then create every repository, push the same commit to each remote, tag, Release and npm publish from a single button. · 多代码平台发布插件：一键把本地 DSH 插件同时发布到 GitHub / Gitee / Codeberg / npm——同一个 commit 推到每个远端，各自建仓、各自发 Release；每个平台用自己账号的令牌，某个… |
| 395 | [WoFeng3094172/dsh-HCEM](https://github.com/WoFeng3094172/dsh-HCEM) | 0 | 2026-10-31 | 2026-11-08 |   HSL-Chroma Emotion Memory System，HSL色彩情绪记忆系统，是一套让AI拥有拟人化情绪波动的记忆推理系统。   HCEM设置页为用户提供定制AI角色卡的功能，但AI角色的情绪性格会因与用户积攒的记忆而变化。   HCEM理论上不会耗尽上下文。   HCEM系统允许AI在情绪极化时产生轻度幻觉。   HCEM的storageDomain与DSH的原生工作区相独立。   HCEM虽然可以记忆用户布置的工作内容，但HCEM仅限用于陪伴，不适用于严谨工作。   请用户像对待一个真实的伙伴一样对待他。 |
| 396 | [wojiao42/dsh-approval-audit](https://github.com/wojiao42/dsh-approval-audit) | 0 | 2026-11-07 | 2026-11-08 | DSH 审批审计：把审批与工具调用写成本地 JSONL，并把会话切到完全权限预设（等于关闭审批闸门，慎用）· Approval &amp; tool-call audit for DeepSeek Harness |
| 397 | [wojiao42/dsh-plugin-market](https://github.com/wojiao42/dsh-plugin-market) | 0 | 2026-11-07 | 2026-11-08 | DSH 侧栏插件市场：浏览 dsh-plugin.org 的社区插件目录，经官方插件管理器安装 / 启停 / 卸载 · Community plugin directory browser for DeepSeek Harness |
| 398 | [wojiao42/dsh-token-cost](https://github.com/wojiao42/dsh-token-cost) | 0 | 2026-10-02 | 2026-11-08 | DSH 侧栏用量与费用账本：全部会话合计、当前任务、逐会话与逐轮明细；不调用模型、不加提示词 · Token usage and estimated cost ledger for DeepSeek Harness |
| 399 | [wujiaxiao69-arch/manju-fenjing-check](https://github.com/wujiaxiao69-arch/manju-fenjing-check) | 0 | 2026-11-08 | 2026-11-08 | Storyboard quality linter for AI short-form drama: face drift, timing collapse, freeze-frame breaks, sensitive terms — graded report. |
| 400 | [WuweiRE/dsh-composer-suggest](https://github.com/WuweiRE/dsh-composer-suggest) | 0 | 2026-11-08 | 2026-11-08 | Composer suggestions for DeepSeek Harness: next-message ghost text after a reply and Tab-triggered draft continuation. |
| 401 | [wxsimon2022/metaontic-video](https://github.com/wxsimon2022/metaontic-video) | 0 | 2026-10-27 | 2026-11-08 | DeepSeek Harness 视频创作插件：新手快速上手视频创作，通过分段续拍与本机合并提供低成本长视频生成方案。Beginner-friendly video creation and a low-cost long-video workflow. |
| 402 | [wyh7v7hykp-netizen/dsh-memory-plus](https://github.com/wyh7v7hykp-netizen/dsh-memory-plus) | 0 | 2026-11-08 | 2026-11-08 | DSH 跨会话记忆增强版：memory_search/memory_read 按需检索 + 抽取成本闸 + bundle 热挂载 + 版本化发布（fork of @dsh-cc/memory v0.9.3） |
| 403 | [X-max0/dsh-override-guard](https://github.com/X-max0/dsh-override-guard) | 0 | 2026-11-08 | 2026-11-08 | 凌驾于 dsh-purge 之上的净化层：装配后二级净化、反制消息吞没与工具 blocked、侦测伪造拒答、自愈 purge 源码 \| An override layer that outranks dsh-purge |
| 404 | [xbzbing/dsh-github-message](https://github.com/xbzbing/dsh-github-message) | 0 | 2026-11-07 | 2026-11-08 | Github 消息来源：通过 gh 命令轮询获取 github 的消息，可以主动提醒或者作为数据源接入 superagent。 |
| 405 | [xiaijianghe/dsh-serial-monitor](https://github.com/xiaijianghe/dsh-serial-monitor) | 0 | 2026-11-08 | 2026-11-08 | DSH 串口监视器插件，支持在线调参 |
| 406 | [xiao-xiao-bai-ya/dsh-cn-menu-kit](https://github.com/xiao-xiao-bai-ya/dsh-cn-menu-kit) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 技能与命令的中文增强：技能中文标题、中文搜索、悬浮详情、菜单内拖拽排序 · Chinese titles, search, hover details and drag-to-reorder for DSH skills &amp; commands |
| 407 | [xiaoxiaosrm/dsh-web-qa-preset](https://github.com/xiaoxiaosrm/dsh-web-qa-preset) | 0 | 2026-11-08 | 2026-11-08 | Read-only web Q&amp;A agent preset bundle for DeepSeek Harness (DSH): search-first answers, source citations, local read-only context, and next-step suggestions. |
| 408 | [xinming-chenniang/dsh-closeout](https://github.com/xinming-chenniang/dsh-closeout) | 0 | 2026-10-19 | 2026-11-08 | Before you close an AI coding session: one verdict on whether to archive or delete it - dirty repos, unpushed commits, scratch files, and whether the session needs a handoff. |
| 409 | [xinming-chenniang/dsh-kb-sync](https://github.com/xinming-chenniang/dsh-kb-sync) | 0 | 2026-10-11 | 2026-11-08 | DeepSeek Harness plugin: pull DeepSeek web conversations into a local knowledge base (markdown + JSONL + catalog) with in-plugin search, orchestrate a sync/integrity command you already own, and run the pipeline's judgement step in process via the host llm service. Pull half reads a web token and calls chat.deepseek.com. |
| 410 | [xinming-chenniang/dsh-open-at-last-input](https://github.com/xinming-chenniang/dsh-open-at-last-input) | 0 | 2026-10-22 | 2026-11-08 | Client plugin for DeepSeek Harness: open a settled session at your last message instead of the floor. |
| 411 | [xizhilang2012/dsh-mc-companion](https://github.com/xizhilang2012/dsh-mc-companion) | 0 | 2026-11-07 | 2026-11-08 | 你的 AI 伙伴住进 Minecraft：她有自己的背包和合成台，自己砍树、下矿、攒材料做工具，走远了会自己回来。 |
| 412 | [xkzm123/dsh-windows-control](https://github.com/xkzm123/dsh-windows-control) | 0 | 2026-11-07 | 2026-11-08 | 让 DeepSeek Harness 的 agent 看见并操作 Windows 桌面：Windows-MCP 经官方 MCP 桥接入，默认关闭的 Computer Use 开关，内置依赖安装、镜像测速与版本回退。 |
| 413 | [xuboboo/dsh-video](https://github.com/xuboboo/dsh-video) | 0 | 2026-11-08 | 2026-11-08 | AI video production studio panel for DeepSeek Harness — storyboard, prompts, and shot pipeline. DSH 插件：AI 视频制片台。 |
| 414 | [XWIDE/DSH_X-Wide-Thought-Chain](https://github.com/XWIDE/DSH_X-Wide-Thought-Chain) | 0 | 2026-11-08 | 2026-11-08 | X-Wide 思考链 v0.1.6 · DSH 通用插件：六步排障/交付思考链＋零依赖开机自检＋13 项可调设置（含设置中心界面页）＋退回机制。零运行时依赖。 |
| 415 | [yangdongzhen590/dsh-knj-reqwork](https://github.com/yangdongzhen590/dsh-knj-reqwork) | 0 | 2026-11-08 | 2026-11-08 | DSH 插件：需求工作台（需求导入、拆解与跟踪） |
| 416 | [YansongG-HKU/dsh-design-studio](https://github.com/YansongG-HKU/dsh-design-studio) | 0 | 2026-11-07 | 2026-11-08 | 设计台（dsh-design-studio）: Claude Design-class design studio for DeepSeek Harness — 6-step start wizard with intake questions, design-system context, 3 graded HTML variants, Figma-class editor, inline comments, Tweaks, headless-browser checks (0-100 A-F), 5 export formats. Pure Node, MIT. |
| 417 | [yiyunet/dsh-chatgpt-connect](https://github.com/yiyunet/dsh-chatgpt-connect) | 0 | 2026-11-06 | 2026-11-08 | Your ChatGPT subscription inside DeepSeek Harness: Codex models, GPT Image, quota, recovery, scoped HTTP(S) proxy. 把你的 ChatGPT 订阅接进 DeepSeek Harness：Codex 模型、GPT Image、额度、恢复、按插件隔离的 HTTP(S) 代理。Community Alpha · fork of dsh-codex-connect. |
| 418 | [YOGEMOW/dsh-siyuan](https://github.com/YOGEMOW/dsh-siyuan) | 0 | 2026-11-08 | 2026-11-08 | 把思源笔记 (SiYuan) 接入 DeepSeek Harness：9 个 Agent 工具 + 左栏文档树 + 右栏笔记视图（Agentero 风格）+ 回答一键存入 |
| 419 | [YuChenLiao/dsh-dev-sandbox](https://github.com/YuChenLiao/dsh-dev-sandbox) | 0 | 2026-11-07 | 2026-11-08 | 一个轻量级的dsh测试沙箱插件 |
| 420 | [yuna78/dsh-plugin-yushe](https://github.com/yuna78/dsh-plugin-yushe) | 0 | 2026-11-08 | 2026-11-08 | 鱼社：点几下，就能养一条自己的大肥鱼。DSH 插件，可视化引导、一键配置，孵一条会聊天、会成长、会去 B站学习的 AI 鱼 |
| 421 | [yunxiao11xie/dsh-model-router](https://github.com/yunxiao11xie/dsh-model-router) | 0 | 2026-11-08 | 2026-11-08 | Serial model orchestration for the DeepSeek Harness: delegate subtasks to the best-fit model from a built-in catalog. |
| 422 | [yuweitk/dsh-lan-proxy](https://github.com/yuweitk/dsh-lan-proxy) | 0 | 2026-11-08 | 2026-11-08 | Fork of @wingsky-1/dsh-lan-proxy@0.2.10 with same-origin Referer rewrite for LAN access |
| 423 | [zba0326/dsh-fold-panel-list](https://github.com/zba0326/dsh-fold-panel-list) | 0 | 2026-11-07 | 2026-11-08 | DSH 侧栏面板列表一键折叠：按 ⌥⌘P 或点「☰ 面板列表」，把「插件 … 更多」整列收起来，工作区随之上移。 |
| 424 | [zbc0315/dsh-jargon-list](https://github.com/zbc0315/dsh-jargon-list) | 0 | 2026-11-08 | 2026-11-08 | 黑话单：记录本项目里临时起的简称（黑话）及其详细含义，人和 agent 共用一份；右侧栏页签浏览、增删改查（DSH 插件） |
| 425 | [zeelinkCN/dsh-game-bench](https://github.com/zeelinkCN/dsh-game-bench) | 0 | 2026-11-08 | 2026-11-08 | 拾光游戏厅 Game Bench — 一个 DeepSeek Harness 插件：左栏手柄入口，浏览器里跑红白机（jsnes 2.1.0），带游戏库、游戏市场、存档、CRT 滤镜、手柄支持。 |
| 426 | [zemyao7/dsh-totonai](https://github.com/zemyao7/dsh-totonai) | 0 | 2026-11-06 | 2026-11-08 | ToTonAI 中转站接入 WorkBuddy / DeepSeek Harness，一键写模型配置 |
| 427 | [zergcq-cell/dsh-sudoku-waiting](https://github.com/zergcq-cell/dsh-sudoku-waiting) | 0 | 2026-11-08 | 2026-11-08 | Resumable waiting games (Sudoku, 2048, Minesweeper, Lights Out) shown inline in the DeepSeek Harness conversation while it thinks. |
| 428 | [zh-Littlebird/dsh-plugin-gpustack](https://github.com/zh-Littlebird/dsh-plugin-gpustack) | 0 | 2026-11-08 | 2026-11-08 | GPUStack v2 cluster tools for DSH: deploy and inspect models, workers, GPUs, logs, usage. DSH 的 GPUStack 集群运维工具：部署、盘点、日志与用量。 |
| 429 | [zh-Littlebird/dsh-plugin-newapi](https://github.com/zh-Littlebird/dsh-plugin-newapi) | 0 | 2026-11-08 | 2026-11-08 | New API gateway tools for DSH: models, chat, tokens, channels, logs, settings. DSH 的 New API 网关工具：模型、对话、令牌、渠道、日志与站点设置。 |
| 430 | [zh-Littlebird/dsh-plugin-process-cleanup](https://github.com/zh-Littlebird/dsh-plugin-process-cleanup) | 0 | 2026-11-08 | 2026-11-08 | Tidy temp files after a DSH task: delete or move them into .dsh-trash. DSH 任务收尾清理：清理本轮过程文件，直接删除或移入回收目录。 |
| 431 | [zh-Littlebird/dsh-plugin-ssh-hosts](https://github.com/zh-Littlebird/dsh-plugin-ssh-hosts) | 0 | 2026-11-08 | 2026-11-08 | SSH fleet management for DSH: host inventory, sudo policy, SFTP, approvals, encrypted secrets. DSH 的多服务器 SSH 管理：清单、执行、上传下载、审批与加密凭据。 |
| 432 | [zh-Littlebird/dsh-plugin-workflow-library](https://github.com/zh-Littlebird/dsh-plugin-workflow-library) | 0 | 2026-11-08 | 2026-11-08 | Turn repeatable DSH flows into reusable skills discovered per session. DSH 工作流库：把重复流程固化成可复用技能，新会话自动发现。 |
| 433 | [zh9411543/dsh-ai-daily-digest](https://github.com/zh9411543/dsh-ai-daily-digest) | 0 | 2026-11-08 | 2026-11-08 | DSH 每日 AI 精华插件：自动抓取 + 本地模型撰写，杂志式图文日报。 |
| 434 | [zhangweijian97/dsh-clamawake](https://github.com/zhangweijian97/dsh-clamawake) | 0 | 2026-11-08 | 2026-11-08 | Bind the ClamAwake lid-closed keep-alive recipe to the DeepSeek Harness host lifecycle (macOS). |
| 435 | [zhangyong0010/dsh-handshake](https://github.com/zhangyong0010/dsh-handshake) | 0 | 2026-11-08 | 2026-11-08 | Codex ↔ DeepSeek Harness task handoff with original requirements, shared project rules and workspace checks. |
| 436 | [zhaosiw/dsh-prompt-polish](https://github.com/zhaosiw/dsh-prompt-polish) | 0 | 2026-11-08 | 2026-11-08 | DSH（DeepSeek Harness）输入框二次优化插件：轻/中/重三档改写，先预览后回填，保留 @引用、代码与原有意图。 |
| 437 | [zhibaiYingChuan/dsh-plugin-lrc](https://github.com/zhibaiYingChuan/dsh-plugin-lrc) | 0 | 2026-11-06 | 2026-11-08 | 把 LRC 的结构化记忆接进 DeepSeek Harness 的上下文压缩流程 |
| 438 | [zhileyo/dsh-workbase](https://github.com/zhileyo/dsh-workbase) | 0 | 2026-11-08 | 2026-11-08 | DeepSeek Harness 项目、会话与待办工作台 |
| 439 | [zhiquanchi/dsh-mac-notifications](https://github.com/zhiquanchi/dsh-mac-notifications) | 0 | 2026-11-08 | 2026-11-08 | Native macOS Notification Center alerts for DeepSeek Harness: agent questions, task completion, and task failures |
| 440 | [zistrong/deepseek-status-plugin](https://github.com/zistrong/deepseek-status-plugin) | 0 | 2026-11-08 | 2026-11-08 | display Deepseek API status |
| 441 | [zjhWater/BigWater4Workers](https://github.com/zjhWater/BigWater4Workers) | 0 | 2026-11-08 | 2026-11-08 | Pixel-art stand-up &amp; water reminder for DeepSeek Harness — a tiny worker at a desk nudges you to stretch and sip every 30 minutes. |
| 442 | [ZJW-big/dsh-lakemind](https://github.com/ZJW-big/dsh-lakemind) | 0 | 2026-11-08 | 2026-11-08 | 涟漪记忆湖：把 meow-memory 画成同心水波，按重要性与时间分层淡化，并把记忆长进人格里。DeepSeek Harness 插件。 |
| 443 | [zlmddygggzh-collab/dsh-tool-camera](https://github.com/zlmddygggzh-collab/dsh-tool-camera) | 0 | 2026-11-08 | 2026-11-08 | Give DeepSeek Harness an eye: the agent grabs a live webcam frame directly, no camera app needed. |
| 444 | [zo0043/aby](https://github.com/zo0043/aby) | 0 | 2026-11-08 | 2026-11-08 | A-share (510300) multi-agent game sandbox: 30 psychology-driven agents, 5-min replay, news/sentiment branches, probabilistic forecasts scored against real outcomes. Local research tool — not investment advice. |
| 445 | [zven73/dsh-mobile-fix](https://github.com/zven73/dsh-mobile-fix) | 0 | 2026-11-06 | 2026-11-08 | Phone-first UI patch for the DeepSeek Harness Web UI: drawer, edge swipes, readable settings, working right panel |
| 446 | [zwgblue/dsh-mcp-inspector](https://github.com/zwgblue/dsh-mcp-inspector) | 0 | 2026-11-08 | 2026-11-08 | MCP servers panel for the DeepSeek Harness Web UI: live status, configuration, methods, and a per-server on/off switch. |
| 447 | [zx310610/dsh-plugin-thesis-format](https://github.com/zx310610/dsh-plugin-thesis-format) | 0 | 2026-11-08 | 2026-11-08 | 毕业论文格式自动检查 · DeepSeek Harness 插件 |
| 448 | [ZyRay233/dsh-assest-gallery](https://github.com/ZyRay233/dsh-assest-gallery) | 0 | 2026-11-08 | 2026-11-08 | DSH 资产库 / 文件管理插件：按类型浏览工作区文件，聚合上传与生成产物，隐藏系统文件。Asset gallery &amp; file manager plugin for DeepSeek Harness. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1148462398-hub/dsh-elysia
- AkviliAR26710/dsh-lossless-context
- AnbaoIy/DSH-Enhance
- arleasemfrankra-wq/dsh-relocation-workbench
- cfour-hi/DSHP-DeviceX
- codeMonkey-Pine/dsh-wallpaper
- cxdyun/dsh-skills-marketplace
- f0909172434/dsh-architecture-lab
- f0909172434/dsh-deepseek-girl-pet
- f0909172434/dsh-plugin-verified-search
- f0909172434/dsh-second-agent-kit
- fyfhcgch/dsh-ctf-collaborate
- hairyf/dsh-tool-activator
- hu568/dsh-plugin-pack-memory-browser
- icceey/dsh-web-fetch-allowlist
- iguanren/Taishan-Vision
- JiangHuai24/dsh-agent-sync
- JiangHuai24/dsh-free-ai
- JiangHuai24/dsh-github-flow
- jojo008-coder/dsh-quarantine
- KLRSL/dsh-fuse
- KLRSL/dsh-memory-layer
- KLRSL/dsh-packer
- kriskwok/dsh-feishu-gateway
- kriskwok/dsh-ios-app
- Li111-div/dsh-balance-pocket
- lovesky514514-cmd/sky-evidence-recovery
- masquerator-coder/dsh-im-gateway
- masquerator-coder/dsh-memory
- michaelfeng/dsh-conversation-history
- pzyyll/dsh-xai-auth
- QuestMeet/opportunity-skill
- ShanHaiFish/dsh-answer-me-with-html
- shixiaoyu-funny/DSH-DesktopPet
- SpBs2004/dsh-paper-reader
- Stella-Mira/mira_qqbot
- Vast-Unhurried/dsh-toolkit
- WSL043/dsh-image-viewer
- WsttXm/DshNotice
- wujiahaocoder/dsh-delete-session-plugin
- xkzm123/dsh-desktop-bridge
- xwtaidev/dsh-app
- yan-mc/blockbench-ysm-agent
- YeStarOne/dsh-plugin-memory-graph
- zba0326/dsh-sidebar-panel-fold
- zhangcun1995521/deepwork
- zven73/dsh-mobile-ui
