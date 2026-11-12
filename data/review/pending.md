# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-12**
- 快照日期 / Snapshot date: **2026-11-12 (UTC)**
- 待审核 / Pending: **459**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **44**
- Star 异常增长 / Star-growth alerts: **11** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-11** / vs previous snapshot **2026-11-11**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **11**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) | 待审 / pending | 4742 | — | 474 | 1087d | 待审高星 | 核准即 Top 9 |
| ⚠️ [automagik-si/genie](https://github.com/automagik-si/genie) | 待审 / pending | 352 | — | 57 | 467d | 待审高星 | 核准即榜 #80 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 71280 | +1313 | 1939 | 48d | 日增百星 | 日增 +1313★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 7260 | +264 | 685 | 35d | 日增百星 | 日增 +264★ |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 18410 | +248 | 636 | 90d | 日增百星 | 日增 +248★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 9742 | +223 | 925 | 184d | 日增百星 | 日增 +223★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 868 | +163 | 5 | 31d | 日增百星 | 日增 +163★；★/fork 173.6；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 6639 | +159 | 109 | 87d | 日增百星 | 日增 +159★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12170 | +152 | 463 | 89d | 日增百星 | 日增 +152★；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 74783 | +134 | 2688 | 414d | 日增百星 | 日增 +134★；已不进榜单 |
| ⚠️ [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 已核准 / approved | 29348 | +101 | 3146 | 206d | 日增百星 | 日增 +101★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) ⚠️ | 4742 | 2023-11-20 | 2026-11-12 | A lightweight, cross-platform remote desktop software with support for Web Client access \| 一款支持 Web 客户端访问的轻量级跨平台远程桌面软件。 |
| 2 | [automagik-si/genie](https://github.com/automagik-si/genie) ⚠️ | 352 | 2025-08-01 | 2026-11-12 | Wishes in, PRs out. CLI agent that interviews you, plans the work, dispatches parallel agents in isolated worktrees, and reviews code before you see it. |
| 3 | [automagik-si/omni](https://github.com/automagik-si/omni) | 69 | 2026-01-29 | 2026-11-12 | Universal event-driven omnichannel platform for AI agents to communicate across any messaging platform |
| 4 | [dsh-hub-managers/dsh-hub-plugin](https://github.com/dsh-hub-managers/dsh-hub-plugin) | 19 | 2026-08-16 | 2026-11-12 | Native DSH Hub marketplace plugin for DeepSeek Harness |
| 5 | [02TJS/ProgressTarget](https://github.com/02TJS/ProgressTarget) | 15 | 2026-08-27 | 2026-11-12 | Persistent, quality-gated, resource-aware execution plans for DeepSeek Harness agents |
| 6 | [KurohaneKaoruko/DSH-Creator](https://github.com/KurohaneKaoruko/DSH-Creator) | 15 | 2026-08-13 | 2026-11-12 | 小说作家智能体预设，用于在DeepSeek Herness里让AI写小说，管理一整套作品工程。 |
| 7 | [JevonsCode/fuli](https://github.com/JevonsCode/fuli) | 10 | 2026-07-15 | 2026-11-12 | Fuli preserves your taste, personality, and judgment across Codex, Claude Code, and other clients supporting MCP and Skills. Your agent picks up where it left off, so you can focus on ideas and decisions—and take a break. As AI learns to do more of the work, Fuli helps you make the transition. |
| 8 | [hrygo/heluo-forge](https://github.com/hrygo/heluo-forge) | 7 | 2026-10-20 | 2026-11-12 | 河洛 (Heluo Forge)：基于 DeepSeek Harness，融合企业级智能研发平台与智能个人助理的方案与扩展工程。 |
| 9 | [wang-bool/travel-story-dsh](https://github.com/wang-bool/travel-story-dsh) | 7 | 2026-11-12 | 2026-11-12 | 🧳 把 Travel Story 搬进 DeepSeek Harness：AI 直接帮你规划行程、查天气、驱动地图的旅行插件（18 个 agent 工具） |
| 10 | [Derek-Y-JQ/knowledge-galaxy](https://github.com/Derek-Y-JQ/knowledge-galaxy) | 3 | 2026-11-12 | 2026-11-12 | 知识银河是 DeepSeek Harness 的一个插件。把对话里聊到的知识、读到的论文、日常的研究与方案，随手收录成可筛选、可连线、可在星图里漫游的知识看板。 |
| 11 | [iasiv5/skills](https://github.com/iasiv5/skills) | 3 | 2026-03-10 | 2026-11-12 | Agent Skills · 𝓲-Collection |
| 12 | [Ralsei1337/dsh-doubao](https://github.com/Ralsei1337/dsh-doubao) | 3 | 2026-11-11 | 2026-11-12 | 把 DSH 的模型输出改造成「豆包语」：超长排比 + 否定清单 + 疗愈诊断 + 复读共情 + 服务化收尾。双通道、三种模式、全部参数可在设置页调。 |
| 13 | [RedHeartSecretMan/dsh-plugins](https://github.com/RedHeartSecretMan/dsh-plugins) | 3 | 2026-10-25 | 2026-11-12 | DeepSeek Harness plugins: a catalog of self-contained, installable bundles. |
| 14 | [alaricchanchs-crypto/dsh-naiwa-studio](https://github.com/alaricchanchs-crypto/dsh-naiwa-studio) | 2 | 2026-11-08 | 2026-11-12 | 奶蛙主题插件 for DeepSeek Harness：赛博启动动画 / 灵感池 / 表情包 / 壁纸整合 |
| 15 | [automagik-si/arca](https://github.com/automagik-si/arca) | 2 | 2026-10-30 | 2026-11-12 | Be your own cloud. Self-hosted cloud infrastructure for AI agents: run apps, databases and agents on machines you own, with an MCP server and passkey approval. Open source. |
| 16 | [automagik-si/automagik](https://github.com/automagik-si/automagik) | 2 | 2026-10-23 | 2026-11-12 | Automagik's plugins for DeepSeek Harness (the Bot team, the welcome) and the Automagik desktop app |
| 17 | [JiamingShi-JsPhys/web-forager](https://github.com/JiamingShi-JsPhys/web-forager) | 2 | 2026-11-06 | 2026-11-12 | Clean-room, robots-aware web information gathering toolkit for agents and analysts. Search 360/Bing/Sogou, read Bilibili, Zhihu, Xiaohongshu, Weibo and other public sites as Markdown, and browse with resumable sessions. CLI, MCP server and Claude Code skill. |
| 18 | [kp-z/dsh-plugins](https://github.com/kp-z/dsh-plugins) | 2 | 2026-09-01 | 2026-11-12 | Plugin collection for DeepSeek Harness (dsh): 10 independent plugins in a pnpm monorepo — git graph, Feishu sync, daily digest, iOS liquid-glass theme, Mermaid communication, spellbook, split view, contract keeper, agent world, example tool. |
| 19 | [LEAFCHINA/dsh-creation-workbench](https://github.com/LEAFCHINA/dsh-creation-workbench) | 2 | 2026-11-11 | 2026-11-12 | AI 创作工作台 for DeepSeek Harness: workspaces + canvas, third-party image APIs and local ComfyUI workflows (image now; editing &amp; video planned). |
| 20 | [long432120-blip/dsh-whale-valley](https://github.com/long432120-blip/dsh-whale-valley) | 2 | 2026-11-11 | 2026-11-12 |   🐋 鯨魚谷物語：和鯨魚娘一起過日子的像素農場小鎮｜DeepSeek Harness 桌寵插件，也能單機開瀏覽器玩 |
| 21 | [Muprprpr/dsh-my-drama-studio](https://github.com/Muprprpr/dsh-my-drama-studio) | 2 | 2026-11-12 | 2026-11-12 | 让家里大肥鱼不吃白饭，短剧用这一套就够了！（暂未实现，仅供参考/笑） |
| 22 | [NingYuanLee/dsh-minimax-api](https://github.com/NingYuanLee/dsh-minimax-api) | 2 | 2026-11-06 | 2026-11-12 | Native MiniMax for DeepSeek Harness: chat with a subscription (Coding Plan) key or a pay-as-you-go API key, plus image, video, speech and music generation over the official MiniMax API. |
| 23 | [oscarka/deepseekharness-remotecontrol](https://github.com/oscarka/deepseekharness-remotecontrol) | 2 | 2026-11-02 | 2026-11-12 | Control AI coding agents (DSH / Codex / Claude) from your phone — Feishu long-connection + self-hosted web console. 手机遥控 AI 编码任务：审批、插话、多机切换、E2EE 分享。No inbound ports. |
| 24 | [susu-the-heroine/dsh-consciousness](https://github.com/susu-the-heroine/dsh-consciousness) | 2 | 2026-11-12 | 2026-11-12 | Long-term memory for DSH. Each memory is a neuron that lights up, fades, sinks when forgotten, and replays itself when idle. |
| 25 | [TINTSKY/shottaggo](https://github.com/TINTSKY/shottaggo) | 2 | 2026-11-12 | 2026-11-12 | ShotTagGo DSH - full-frame screenshot annotation for DeepSeek Harness |
| 26 | [tsybindev/dsh-figma-browser](https://github.com/tsybindev/dsh-figma-browser) | 2 | 2026-11-12 | 2026-11-12 | Figma design data and true renders for DeepSeek Harness through your own signed-in Chrome — no Figma API token, paid seat, or Dev Mode. |
| 27 | [YveYin/dsh-wechat-away](https://github.com/YveYin/dsh-wechat-away) | 2 | 2026-11-12 | 2026-11-12 | 离开电脑时替你看着微信：DSH 插件，UI Automation + 合成点击，自动回复与全程记账 |
| 28 | [1nTooDeep/dsh-mcp-project](https://github.com/1nTooDeep/dsh-mcp-project) | 1 | 2026-11-12 | 2026-11-12 | Per-project MCP servers for DeepSeek Harness: declare servers in .dsh/mcp.yml or Claude Code's .mcp.json |
| 29 | [27Synthesis/dsh-go-fish-panel](https://github.com/27Synthesis/dsh-go-fish-panel) | 1 | 2026-11-12 | 2026-11-12 | 给 dsh-fish（大肥鱼）在 DSH Go 手机 App 上加观测台与设置面板的原生插件 |
| 30 | [3309602454/dsh-quick-restart](https://github.com/3309602454/dsh-quick-restart) | 1 | 2026-11-10 | 2026-11-12 | DSH 会话标题栏的一键重启按钮：重启前检查并警告正在运行的会话与后台任务，随后关闭并重新启动桌面端，全程不弹控制台窗口。 \| One-click restart button for the DSH desktop app: warns about running work, then closes and relaunches the app without a console window. |
| 31 | [ankepoipoi/agent-model-scout](https://github.com/ankepoipoi/agent-model-scout) | 1 | 2026-11-12 | 2026-11-12 | A Cordis plugin for DeepSeek Harness that probes all configured models with a cheap planning call, scores plans (quality vs. token cost), pops a picker card, and dispatches the task on the chosen model. |
| 32 | [Astral-Yang/dsh-bark-push](https://github.com/Astral-Yang/dsh-bark-push) | 1 | 2026-11-12 | 2026-11-12 | 面向 DeepSeek Harness 的 Bark 推送：直接推送回复正文，以及授权与提问提醒，支持按工作区与按会话静音。 |
| 33 | [Asuta/dsh-cdx-plus](https://github.com/Asuta/dsh-cdx-plus) | 1 | 2026-11-11 | 2026-11-12 | DSH CDX Plus — DSH 体验增强套件 |
| 34 | [atlasmarkz/dsh-ink-whale](https://github.com/atlasmarkz/dsh-ink-whale) | 1 | 2026-11-12 | 2026-11-12 | Ink Whale — a black-and-white DSH theme with pale-blue ASCII whales. |
| 35 | [atlasmarkz/svg-animation-pipeline](https://github.com/atlasmarkz/svg-animation-pipeline) | 1 | 2026-06-23 | 2026-11-12 | Deterministic SVG animation pipeline for GIF/MP4/WebM, with a DeepSeek Harness plugin (svg_motion_render) |
| 36 | [baimengyan242-dot/BAI](https://github.com/baimengyan242-dot/BAI) | 1 | 2026-11-11 | 2026-11-12 | Native DeepSeek Harness plugin for local chat archives, reviewed long-term memory, cross-session recall, backups, and configurable storage. Chinese UI with bilingual guides. |
| 37 | [baymaxbill/research-report-workbench](https://github.com/baymaxbill/research-report-workbench) | 1 | 2026-11-12 | 2026-11-12 | 研报撰写工作台（DSH 插件）：研报拆解、PDF 圈选问答、五板块卡片、图表库与报告撰写 |
| 38 | [bd233/dsh-bottom-tabs](https://github.com/bd233/dsh-bottom-tabs) | 1 | 2026-11-12 | 2026-11-12 | Browser-style session tab bar for the DSH Web UI · 窗口底部的浏览器风格会话标签栏 |
| 39 | [Bozheng-Li/dsh-Wechat-Agent](https://github.com/Bozheng-Li/dsh-Wechat-Agent) | 1 | 2026-11-06 | 2026-11-12 | DeepSeek Harness 微信 Agent：统一助手、人物卡与记忆、DSH 工作任务、定时提醒、图片表情与朋友圈自动化。Windows x64。 |
| 40 | [BurninIce/dsh-membubble](https://github.com/BurninIce/dsh-membubble) | 1 | 2026-11-10 | 2026-11-12 | Bounded-context memory for long-running dsh conversations and large group chats: fixed injection budget, focus-limited person pipelines, append-only event archives. |
| 41 | [ChimeSky/dsh-a2ui](https://github.com/ChimeSky/dsh-a2ui) | 1 | 2026-11-12 | 2026-11-12 | Generative UI for DeepSeek Harness: renders Google A2UI 1.0 surfaces inside the conversation with an agent -&gt; UI -&gt; agent interaction loop. |
| 42 | [ChisaAlter/dsh-acp-agents](https://github.com/ChisaAlter/dsh-acp-agents) | 1 | 2026-11-12 | 2026-11-12 | Independent ACP coding-agent plugin for DeepSeek Harness and WhaleIsle Desktop: agent switching, authentication, and managed delegation. |
| 43 | [DSH43/dsh-image-preview](https://github.com/DSH43/dsh-image-preview) | 1 | 2026-08-18 | 2026-11-12 | 让 DeepSeek Harness (dsh) 对话正文直接显示本地图片的插件：本地路径自动内联为图片 + 可点击的本地地址行 |
| 44 | [Dynesshely/dsh-plugin-portara](https://github.com/Dynesshely/dsh-plugin-portara) | 1 | 2026-11-12 | 2026-11-12 | DSH plugin: show the Portara gateway's load-balancing route for each reply in the chat stream. |
| 45 | [ericenyan/dsh-yubagu](https://github.com/ericenyan/dsh-yubagu) | 1 | 2026-11-12 | 2026-11-12 | 鱼八股拦截：开口之前先撞一次词表，撞上了整句退回去重说 |
| 46 | [fengshaoA/dsh-skills-fengshaoA](https://github.com/fengshaoA/dsh-skills-fengshaoA) | 1 | 2026-11-12 | 2026-11-12 | Agent skills for DeepSeek Harness, installable via skills.sh. Includes decision-council: structured deliberation with a three-tier safety gate. |
| 47 | [fengzhaoy/dsh-best-workspace](https://github.com/fengzhaoy/dsh-best-workspace) | 1 | 2026-11-12 | 2026-11-12 | DSH Best Workspace — Codex 风格的 DSH 左侧边栏：项目/会话树、分组、置顶、拖拽排序与输入框 ↑↓ 翻历史 |
| 48 | [fengzhaoy/dsh-web-vscode](https://github.com/fengzhaoy/dsh-web-vscode) | 1 | 2026-11-12 | 2026-11-12 | dsh 插件：在 DSH Web 的会话视图与右侧栏嵌入真实 VS Code（code-server）工作区，切 tab 不重载，未安装时给出安装引导。 |
| 49 | [FenrirCait/dsh-tool-hub](https://github.com/FenrirCait/dsh-tool-hub) | 1 | 2026-11-12 | 2026-11-12 | One panel for the plugins and skills a DSH installation runs: per-row switches, groups, presets, rule-based auto grouping. |
| 50 | [gaolin89898/dsh-kite](https://github.com/gaolin89898/dsh-kite) | 1 | 2026-11-09 | 2026-11-12 | 基于 DeepSeek Harness 插件机制构建的远程访问方案，通过低延迟、端到端加密的 P2P 网络，支持使用 PC、移动端 和 Web 随时访问本地设备上的DSH 、CodeX、Cursor、Claude Code等工作区。 (Built on DeepSeek Harness plugins, this low-latency, end-to-end encrypted P2P solution lets PC, mobile, and web clients access local DSH, Codex, Cursor, and Claude Code workspaces.) |
| 51 | [GuYou9799/dsh-turn-sieve](https://github.com/GuYou9799/dsh-turn-sieve) | 1 | 2026-11-12 | 2026-11-12 | 手动筛选并移除 DSH 会话中的低价值问答或单条消息：在回复旁原位选中、✓ 确认、内容随即从对话中消失，可撤销；液态玻璃面板。 |
| 52 | [her-os/her-dsh-memory](https://github.com/her-os/her-dsh-memory) | 1 | 2026-11-10 | 2026-11-12 | Long-term memory plugin for DeepSeek Harness: remembers what matters in your chats and brings it up naturally next time. By Her. |
| 53 | [HimLeoing/dsh-purge](https://github.com/HimLeoing/dsh-purge) | 1 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 破甲：提示词注入 + 引擎层补丁，适配 dsh 0.2.2-rc.2。上游 MIT 原作 by @YuJunZhiXue |
| 54 | [huanglihome1996-rgb/dsh-desktop-tool-ocr](https://github.com/huanglihome1996-rgb/dsh-desktop-tool-ocr) | 1 | 2026-11-12 | 2026-11-12 | DSH 桌面端自动识图插件：视觉模型原图直传，非视觉模型自动调用可插拔本地 OCR 或线上视觉模型；支持 nbocr、自定义命令与 OpenAI-compatible API。 |
| 55 | [iswalterwu/agent-site](https://github.com/iswalterwu/agent-site) | 1 | 2026-11-11 | 2026-11-12 | A pixel-art construction site for your coding agents. Track pi, Claude Code, and DeepSeek Harness sessions without hopping between terminals. |
| 56 | [jetruan/dsh-tailtransit](https://github.com/jetruan/dsh-tailtransit) | 1 | 2026-11-11 | 2026-11-12 | Route only Harness traffic through a Tailscale exit node; the rest of the machine keeps its own routes. |
| 57 | [kafudolly/dsh-work-chat](https://github.com/kafudolly/dsh-work-chat) | 1 | 2026-11-12 | 2026-11-12 | 把 DeepSeek 网页端对话接进 DSH 侧边栏：可折叠的工作区/对话区、Work–Chat 新会话开关、深度思考与联网搜索、Markdown/LaTeX 渲染。 |
| 58 | [keltanas/dsh-platform-balance](https://github.com/keltanas/dsh-platform-balance) | 1 | 2026-11-12 | 2026-11-12 | DSH Web plugin: DeepSeek Platform wallet balances in USD/CNY, CBR RUB conversion, session and day spend |
| 59 | [kingOfSoySauce/dsh-extra-folders](https://github.com/kingOfSoySauce/dsh-extra-folders) | 1 | 2026-11-12 | 2026-11-12 | 给 DSH 工作区添加文件夹 |
| 60 | [Lee-Eee-Eee/API-MRI](https://github.com/Lee-Eee-Eee/API-MRI) | 1 | 2026-10-12 | 2026-11-12 | Evidence-oriented API service consistency research prototype; Inspect AI + MET. |
| 61 | [Leon-S-7211/insight-charts](https://github.com/Leon-S-7211/insight-charts) | 1 | 2026-11-12 | 2026-11-12 | 研报级图表 Agent Skill：两套主题、七个 matplotlib 画法、放图时机与标题写法。Claude Code 插件 + DeepSeek Harness 插件。 |
| 62 | [Lh1314-China/dsh-cortex-extractors](https://github.com/Lh1314-China/dsh-cortex-extractors) | 1 | 2026-11-11 | 2026-11-12 | OCR/ASR extraction bridge for DSH Cortex: Windows OCR, Tesseract, optional local PaddleOCR and whisper.cpp. |
| 63 | [Lh1314-China/dsh-cortex-memory](https://github.com/Lh1314-China/dsh-cortex-memory) | 1 | 2026-11-11 | 2026-11-12 | Layered temporal memory engine for DeepSeek Harness |
| 64 | [liangdabiao/dsh-geo-analyzer](https://github.com/liangdabiao/dsh-geo-analyzer) | 1 | 2026-11-12 | 2026-11-12 | GEO 品牌雷达 · dsh 插件：六大 AI 搜索品牌可见度分析（提及率/排名/情绪/信源/竞品 + HTML 报告 + 侧栏看板）。向豆包、Kimi、DeepSeek、元宝、千问、百度六大 AI 搜索提出相同问题，分析品牌提及率、排名、情绪、信源引用、竞品对比，生成交互式 HTML 报告 + 侧栏看板。 |
| 65 | [liweitan2046-cyber/dsh-wanfeng-studio](https://github.com/liweitan2046-cyber/dsh-wanfeng-studio) | 1 | 2026-11-12 | 2026-11-12 | 爆款视频复刻工作台 · DSH 插件：原片 → 角色图（审核门）→ 换人 → 质检 → 成片，支持接入任意 RunningHub 工作流 |
| 66 | [lujfsd/dsh-waystone](https://github.com/lujfsd/dsh-waystone) | 1 | 2026-11-06 | 2026-11-12 | DSH 的工作记忆插件。上下文一压缩、一换窗口，前面聊过的东西就没了；这个插件负责把「丢了就再也找不回来」的那部分留在盘上，并在下一轮重新摆到模型眼前。 |
| 67 | [MagicalYuYu/vizreport](https://github.com/MagicalYuYu/vizreport) | 1 | 2026-11-12 | 2026-11-12 | Rich interactive HTML reports for everyone. One file. Zero dependencies. Claude Code skill. |
| 68 | [Makk9609/dsh-send-lock](https://github.com/Makk9609/dsh-send-lock) | 1 | 2026-11-12 | 2026-11-12 | Changes Enter to insert a newline in DSH Web. Use Cmd/Ctrl+Enter to send messages. |
| 69 | [Menpengpeng/dsh-plugin-x-article-library](https://github.com/Menpengpeng/dsh-plugin-x-article-library) | 1 | 2026-11-12 | 2026-11-12 | DSH plugin: save public X (Twitter) posts as offline Markdown with a three-pane library reader. 把公开 X 链接保存为可离线阅读的 Markdown。 |
| 70 | [NEVSTOP-LAB/dsh-nevstop-lab-flavor](https://github.com/NEVSTOP-LAB/dsh-nevstop-lab-flavor) | 1 | 2026-11-12 | 2026-11-12 | 让 DSH 更贴合 NEVSTOP-LAB 使用习惯的本地化定制插件 |
| 71 | [OMEN111111/dsh-tripo-support](https://github.com/OMEN111111/dsh-tripo-support) | 1 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin for Tripo, Meshy, Hyper3D, qianwenai/DashScope and Tencent Hunyuan3D async 3D generation, with in-chat 3D preview. \| 让 DSH 在设置→3D 生成中接入 Tripo、Meshy、Hyper3D、qianwenai 和腾讯混元3D，并在对话内直接预览 3D 模型。 |
| 72 | [priatewang/dsh-task-time](https://github.com/priatewang/dsh-task-time) | 1 | 2026-11-12 | 2026-11-12 | deepseek harness 人工操作时间统计插件（牛马时间统计） |
| 73 | [sakura6777/dsh-real-time-balance](https://github.com/sakura6777/dsh-real-time-balance) | 1 | 2026-11-12 | 2026-11-12 | Real-time DeepSeek balance, today's spend, and peak/off-peak countdowns in the DeepSeek Harness sidebar. |
| 74 | [shiker1996/dsh-balance-burn](https://github.com/shiker1996/dsh-balance-burn) | 1 | 2026-11-12 | 2026-11-12 | A DSH plugin that turns your DeepSeek balance into days left, burn rate, and top-up advice — computed from local session logs. |
| 75 | [shiyan688/dsh-attune](https://github.com/shiyan688/dsh-attune) | 1 | 2026-11-12 | 2026-11-12 | 让 DSH 根据当前情境生成小测试，在确认、纠正和删除中学习协作偏好。 |
| 76 | [sweet560/dsh-plugin-wechat-session](https://github.com/sweet560/dsh-plugin-wechat-session) | 1 | 2026-11-12 | 2026-11-12 | 微信会话互通聚合包：桌面弹窗 / 系统通知 + 提示音，30/60 秒超时后经 dsh-im 微信机器人把带问题原文与编号选项的清单发到微信，可直接在微信里回复选择。 |
| 77 | [thelittleshyboy/xd-to-html-mcp](https://github.com/thelittleshyboy/xd-to-html-mcp) | 1 | 2026-11-12 | 2026-11-12 | adobe/.xd files trans to html/.html files mcp |
| 78 | [tiancaixiexiong1997/deepseek-pojia](https://github.com/tiancaixiexiong1997/deepseek-pojia) | 1 | 2026-11-12 | 2026-11-12 | DeepSeek 破甲：dsh-purge 一键安装版（macOS/Linux/Windows）— 让所有模型都能破甲，含红队演练台 |
| 79 | [WatXtract-Luca/dsh-auto-open-sidebar](https://github.com/WatXtract-Luca/dsh-auto-open-sidebar) | 1 | 2026-11-12 | 2026-11-12 | Automatically opens the DSH right sidebar for blank top-level chats. |
| 80 | [wdxtub/dsh-wdx-relief](https://github.com/wdxtub/dsh-wdx-relief) | 1 | 2026-11-08 | 2026-11-12 | Reduce the cognitive load of day-to-day work in dsh |
| 81 | [wenyio/dsh-web-access](https://github.com/wenyio/dsh-web-access) | 1 | 2026-11-12 | 2026-11-12 | 在本机浏览器打开正在运行的 DeepSeek Harness 桌面实例。 |
| 82 | [xffwlkjgzs88/dsh-session-delete](https://github.com/xffwlkjgzs88/dsh-session-delete) | 1 | 2026-11-12 | 2026-11-12 | 给 DSH 会话列表加一个能真删除的按钮：让宿主 registry 遗忘、清掉正文与投影缓存。零依赖小插件，附说明与免责声明。 |
| 83 | [xianglifei/dsh-lark-minutes-dashboard](https://github.com/xianglifei/dsh-lark-minutes-dashboard) | 1 | 2026-11-09 | 2026-11-12 | DSH Web 插件：把飞书妙记整理成可读的标题、完整会议纪要、飞书文档与索引表 |
| 84 | [xinspark/dsh-next-multi-launcher](https://github.com/xinspark/dsh-next-multi-launcher) | 1 | 2026-11-02 | 2026-11-12 | DSH-NEXT 应用多开启动器：同一份 DSH-NEXT 跑多个隔离实例（Tauri 2 + Svelte 5） |
| 85 | [xxxiii/dsh-jump-top](https://github.com/xxxiii/dsh-jump-top) | 1 | 2026-11-12 | 2026-11-12 | One-click jump to the top of a DeepSeek Harness conversation |
| 86 | [Yanren1225/dsh-content-desk](https://github.com/Yanren1225/dsh-content-desk) | 1 | 2026-11-12 | 2026-11-12 | DSH 文案工作台：审核/润色/改写文案、多模型对比、AI 配图，以及通用模型调用（ai_task / ai_models / ai_image）。零运行期依赖，只使用 DSH 已注册模型。 |
| 87 | [zeki520/dsh-boot-nexus](https://github.com/zeki520/dsh-boot-nexus) | 1 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 开机动画插件：片头视频 / suite 模板 / 屏保 / 素材池，带可视化设置卡 |
| 88 | [ZengZichao/dsh-micromamba-env](https://github.com/ZengZichao/dsh-micromamba-env) | 1 | 2026-11-11 | 2026-11-12 | DeepSeek Harness plugin: view micromamba environments and select one per workspace |
| 89 | [ZhongYiSS/dsh-onebot-paopao](https://github.com/ZhongYiSS/dsh-onebot-paopao) | 1 | 2026-11-10 | 2026-11-12 | PaoPao: a companion layer for DSH - proactive QQ messages by weighted mood, B? video picking, voice/image/video understanding. Based on dsh-onebot. |
| 90 | [zhuyuhan327/dsh-translation-reader](https://github.com/zhuyuhan327/dsh-translation-reader) | 1 | 2026-11-11 | 2026-11-12 | 阅藏：DeepSeek Harness 的双语论文阅读模式 |
| 91 | [Zymjason/DSH_Git_Workbench](https://github.com/Zymjason/DSH_Git_Workbench) | 1 | 2026-11-12 | 2026-11-12 | DGW：GUI Git tool for Deepseek Harness |
| 92 | [11ze/dsh-session-bell](https://github.com/11ze/dsh-session-bell) | 0 | 2026-11-12 | 2026-11-12 | Desktop notifications for DeepSeek Harness: a turn finished, a question waits, an approval waits. Click the banner to open the Session. |
| 93 | [1334104926/dsh-row-multiselect](https://github.com/1334104926/dsh-row-multiselect) | 0 | 2026-11-12 | 2026-11-12 | Multi-select sessions in the DSH sidebar and archive the whole batch at once. |
| 94 | [329604421/dsh-agent-todo](https://github.com/329604421/dsh-agent-todo) | 0 | 2026-11-11 | 2026-11-12 | 四个入口，不用离开会话 —— Agent-ToDo 多项目工作台装进 DeepSeek Harness |
| 95 | [43aquarius/dsh-auto-continue](https://github.com/43aquarius/dsh-auto-continue) | 0 | 2026-11-12 | 2026-11-12 | Auto-continue interrupted DeepSeek Harness sessions: probe a healthy fallback model, switch durably, and resume automatically |
| 96 | [595708049/dsh-warm-charcoal-theme](https://github.com/595708049/dsh-warm-charcoal-theme) | 0 | 2026-11-12 | 2026-11-12 | Warm Beige light palette and Dark Charcoal dark palette for DeepSeek Harness. |
| 97 | [810535323/dsh-caddy-desktop-sync](https://github.com/810535323/dsh-caddy-desktop-sync) | 0 | 2026-11-12 | 2026-11-12 | DSH plugin: keep a Caddy loopback upstream synchronized with the Desktop web port. |
| 98 | [879745uhjun/dsh-approval-zh](https://github.com/879745uhjun/dsh-approval-zh) | 0 | 2026-11-08 | 2026-11-12 | Automatically translate DeepSeek Harness approval prompt text to Chinese without changing approval decisions. |
| 99 | [879745uhjun/dsh-notepad](https://github.com/879745uhjun/dsh-notepad) | 0 | 2026-11-10 | 2026-11-12 | DSH 右侧常驻记事本插件：抽屉式停靠、支持图片、与内置侧栏并存 |
| 100 | [879745uhjun/dsh-session-stars](https://github.com/879745uhjun/dsh-session-stars) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：给工作区会话加 1-5 星收藏，并区分重要程度 \| Star-rating favorites with five importance levels for sessions in the DeepSeek Harness Web UI |
| 101 | [88208555/entrorove-dsh-plugin](https://github.com/88208555/entrorove-dsh-plugin) | 0 | 2026-11-12 | 2026-11-12 | Guided Entrorove SDK installation for DeepSeek Harness. A lightweight setup plugin sharing the official npm runtime. |
| 102 | [A1311981684/dsh-pi-subagent](https://github.com/A1311981684/dsh-pi-subagent) | 0 | 2026-11-12 | 2026-11-12 | Pi as an out-of-process DSH subagent backend |
| 103 | [a348579184/dsh-report-auditor](https://github.com/a348579184/dsh-report-auditor) | 0 | 2026-11-12 | 2026-11-12 | 数字校对台 · 在 DeepSeek Harness 里用 CSV 复核中文周报的增长率、百分点和金额，逐条查看算式并修订。 |
| 104 | [a895047059/dsh-stack-diagram](https://github.com/a895047059/dsh-stack-diagram) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: bundles the stack-diagram architecture-diagram skill as a global runtime skill with automatic routing. |
| 105 | [aaa8leitingpifa/dsh-daily-push](https://github.com/aaa8leitingpifa/dsh-daily-push) | 0 | 2026-11-12 | 2026-11-12 | 每日推送：DSH 插件雷达。星数榜 / 新建榜 / 活跃榜三榜并列，官方仓库单独追踪，内置咨询、关注列表与已装插件更新提醒。 |
| 106 | [aaalog/dsh-chat-bridge](https://github.com/aaalog/dsh-chat-bridge) | 0 | 2026-11-11 | 2026-11-12 | DSH Chat 桥接插件：把 DeepSeek Harness 的智能体接进聊天后台，Host 内驱动会话，不 spawn headless |
| 107 | [AdamsShen/dsh-autopilot-harness](https://github.com/AdamsShen/dsh-autopilot-harness) | 0 | 2026-11-12 | 2026-11-12 | dsh-autopilot |
| 108 | [adithyanraj03/dsh-blender-preview](https://github.com/adithyanraj03/dsh-blender-preview) | 0 | 2026-11-12 | 2026-11-12 | Scaffold for a DeepSeek Harness Blender preview plugin: one host row, no UI yet, no network calls, no telemetry; depends on dsh-blender@^0.2.4 — boot self-check only, logs the mount command if not installed/mounted (non-mutating); planned feature: .blend to cached local GLB via local Blender; no postinstall; uninstall removes the row. |
| 109 | [adithyanraj03/dsh-delete-plugin](https://github.com/adithyanraj03/dsh-delete-plugin) | 0 | 2026-11-12 | 2026-11-12 | Sidebar session deletion and workspace pinning for DeepSeek Harness: a Delete action behind a consent dialog permanently removes a session's log, workspace accounting and live state (refusing running turns), and Pin keeps workspaces on top; no network calls or telemetry of its own, deletion only on confirmation, uninstall removes both actions. |
| 110 | [Ados6666/dsh-review-note](https://github.com/Ados6666/dsh-review-note) | 0 | 2026-11-12 | 2026-11-12 | Annotatable checkpoint reviews for DeepSeek Harness: annotate a delivery body item by item and return one structured note. |
| 111 | [ailawu0409/dsh-open-gui-fix](https://github.com/ailawu0409/dsh-open-gui-fix) | 0 | 2026-11-12 | 2026-11-12 | DSH plugin: make Open in VS Code and other Electron apps open a window by stripping the leaked ELECTRON_RUN_AS_NODE from detached GUI launches |
| 112 | [Albusriddle/dsh-mobile](https://github.com/Albusriddle/dsh-mobile) | 0 | 2026-11-12 | 2026-11-12 | DSH (DeepSeek Harness) mobile client: WebView shell + native protocol-v1 Android app |
| 113 | [alexbu512/milancat-bot](https://github.com/alexbu512/milancat-bot) | 0 | 2026-11-12 | 2026-11-12 | Grok-bot-style AI organization in the DeepSeek Harness sidebar: a chief-of-staff agent hires departments and roles, dispatches work to child agents running on this machine, and reports back as one message. ｜ Grok bot 式的 AI 组织搬进 DSH 左侧栏：总裁助理建部门、立岗位、开部门群，任务分派给本机真实运行的子 agent。 |
| 114 | [anydoor7/dsh-tslink](https://github.com/anydoor7/dsh-tslink) | 0 | 2026-11-12 | 2026-11-12 | TSLink for DeepSeek Harness (dsh): open your running local app on your phone through a private Tailscale URL, via the tslink MCP server and the tslink-preview skill. |
| 115 | [anysda/dsh-miku](https://github.com/anysda/dsh-miku) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: Hatsune Miku dances behind the UI |
| 116 | [Astryve/dsh-desk-todo](https://github.com/Astryve/dsh-desk-todo) | 0 | 2026-11-12 | 2026-11-12 | DSH desktop todo widget: pin this-week todos and long-term tasks on your desktop, with popup + chime reminders. |
| 117 | [axetroy/dsh-plugin-skills](https://github.com/axetroy/dsh-plugin-skills) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件开发技能指南 / A skill guide for DeepSeek Harness plugin development. |
| 118 | [Azerz/dsh-video-insight](https://github.com/Azerz/dsh-video-insight) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 视频解析插件：YouTube / 哔哩哔哩链接 → 字幕、AI 总结、章节、思维导图、RAG 追问，支持本地 Whisper/SenseVoice 转写与画面理解 |
| 119 | [b-iurea/dsh-graphify](https://github.com/b-iurea/dsh-graphify) | 0 | 2026-11-11 | 2026-11-12 | Graphify integration for DeepSeek Harness: graphify_* agent tools + interactive code-graph sidebar tab |
| 120 | [begin2023/dsh-weight-journal](https://github.com/begin2023/dsh-weight-journal) | 0 | 2026-11-12 | 2026-11-12 | A daily weight journal page and a frame-wide reminder capsule for the DeepSeek Harness Web GUI |
| 121 | [BErrybearl/dsh-cli-subagent](https://github.com/BErrybearl/dsh-cli-subagent) | 0 | 2026-11-07 | 2026-11-12 | 把本机外部 CLI（Codex、Pi、Qoder、OpenCode、CodeBuddy 等）注册成 dsh 子代理，带运行面板与后端管理。dsh-subagent 的社区增强分支。 |
| 122 | [best0127/dsh-session-workbench](https://github.com/best0127/dsh-session-workbench) | 0 | 2026-11-12 | 2026-11-12 | DSH 会话工作台：把多个会话并排摊开在一个面板里，每一格都是可交互的原版对话 / Session workbench for DeepSeek Harness |
| 123 | [BiteyCulter/dsh-provider-transport](https://github.com/BiteyCulter/dsh-provider-transport) | 0 | 2026-11-12 | 2026-11-12 | Per-provider HTTP/HTTPS/SOCKS proxy and custom request headers for DeepSeek Harness native providers |
| 124 | [boldandigital/dsh-minimax-quota](https://github.com/boldandigital/dsh-minimax-quota) | 0 | 2026-11-09 | 2026-11-12 | MiniMax Token Plan quota chip for DeepSeek Harness |
| 125 | [boonelueng/dsh-sidebar-rail](https://github.com/boonelueng/dsh-sidebar-rail) | 0 | 2026-11-12 | 2026-11-12 | DSH 左侧边栏并列布局：左窄条功能区 + 右侧会话区，支持自定义条目与展开收起 |
| 126 | [borncode-app/dsh-session-sync](https://github.com/borncode-app/dsh-session-sync) | 0 | 2026-11-12 | 2026-11-12 | Imports Claude Code and MiniMax Code sessions into the DSH workspace that owns their project folder, and flags each session with its origin logo. |
| 127 | [BugLivesMatter/dsh-easygit](https://github.com/BugLivesMatter/dsh-easygit) | 0 | 2026-11-12 | 2026-11-12 | EasyGit: GitLens-style branch graph, task branches/worktrees, safe checkpoints, push and AI commit explanations as a DeepSeek Harness Web GUI plugin |
| 128 | [BugLivesMatter/dsh-theme-gojo-violet](https://github.com/BugLivesMatter/dsh-theme-gojo-violet) | 0 | 2026-11-12 | 2026-11-12 | Gojo Violet Nebula: violet/lavender DeepSeek Harness Web GUI theme with wallpaper, token overrides and glass menu fills |
| 129 | [Cai-kunkun/dsh-llm-gateway](https://github.com/Cai-kunkun/dsh-llm-gateway) | 0 | 2026-11-12 | 2026-11-12 | OpenAI-compatible gateway that exposes every model configured in DeepSeek Harness on a local port |
| 130 | [caomuyes/dsh-wallpaper-only](https://github.com/caomuyes/dsh-wallpaper-only) | 0 | 2026-11-12 | 2026-11-12 | 为 DeepSeek Harness Web GUI 提供只修改壁纸效果的插件（本地图片/渐变、遮罩、模糊、玻璃面板） |
| 131 | [castiel0101/dsh-session-outline](https://github.com/castiel0101/dsh-session-outline) | 0 | 2026-11-12 | 2026-11-12 | 为DSH聊天窗口加上「会话大纲」：标题栏按钮打开右侧抽屉，列出本会话每一轮的提问与回答摘要，支持检索与点击跳转定位。 \| Per-session outline for the DSH chat window: a header button opens a drawer listing every turn with prompt/response previews, a filter box, and click-to-jump navigation. |
| 132 | [cccccccccccccy/dsh-session-reminder](https://github.com/cccccccccccccy/dsh-session-reminder) | 0 | 2026-11-11 | 2026-11-12 | Left-sidebar reminder for DeepSeek Harness: blue count of running sessions, green count of finished-but-unread sessions. |
| 133 | [ccjiao/dsh-media-desk-workbuddy](https://github.com/ccjiao/dsh-media-desk-workbuddy) | 0 | 2026-11-12 | 2026-11-12 | 自媒体工作台（WorkBuddy 生图版）：用 WorkBuddy 积分画封面/配图/分镜 \| Media Desk with WorkBuddy image generation |
| 134 | [ChAr11eG/dsh-realtime-voice](https://github.com/ChAr11eG/dsh-realtime-voice) | 0 | 2026-11-11 | 2026-11-12 | Realtime voice phone call plugin for DeepSeek Harness (DSH): local VAD + ASR + TTS, voice cloning, call from chat |
| 135 | [Chengyunlai/dsh-ai-quick-links](https://github.com/Chengyunlai/dsh-ai-quick-links) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：固定在窗口右下角的 AI 快捷入口，20 个国产/海外 AI 对话网站，点开即用默认浏览器打开。 |
| 136 | [chenxiaojie1009/dsh-console](https://github.com/chenxiaojie1009/dsh-console) | 0 | 2026-11-12 | 2026-11-12 | DSH 设备控制台：串口与 SSH 调试面板，面板内模型生成命令、执行前确认、中文注释与输出解读。Device console (serial/SSH) plugin for DeepSeek Harness. |
| 137 | [choukin/sh-plugin-git-graph](https://github.com/choukin/sh-plugin-git-graph) | 0 | 2026-11-12 | 2026-11-12 | dhs git graph |
| 138 | [ChriFang/dsh-code-editor](https://github.com/ChriFang/dsh-code-editor) | 0 | 2026-11-07 | 2026-11-12 | A deepseek harness code editor plugin |
| 139 | [cnhenaihui/dsh-theme-wallpaper](https://github.com/cnhenaihui/dsh-theme-wallpaper) | 0 | 2026-10-26 | 2026-11-12 | DSH iOS 风格外观插件：浅/深/自动切换、强调色板、夜间护眼、字体排版、本地背景图 |
| 140 | [Cnily03/dsh-session-tags](https://github.com/Cnily03/dsh-session-tags) | 0 | 2026-11-12 | 2026-11-12 | Add colored tags to sessions for DeepSeek Harness. |
| 141 | [CQQOOQ123/dsh-skill-radar](https://github.com/CQQOOQ123/dsh-skill-radar) | 0 | 2026-11-12 | 2026-11-12 | A lightweight automatic skill radar for DeepSeek Harness: auto-scout, auto-load strong matches, and acquire skills with security checks and rollback. |
| 142 | [creatjy/dsh-plugin-update-entry](https://github.com/creatjy/dsh-plugin-update-entry) | 0 | 2026-11-12 | 2026-11-12 | 在 DSH 插件页的可更新卡片上提供就地更新入口：可选版本、悬停查看每个版本的更新说明。 |
| 143 | [cznbnbnb/dsh-tokenshare-limiter](https://github.com/cznbnbnb/dsh-tokenshare-limiter) | 0 | 2026-11-12 | 2026-11-12 | TokenShare 请求节流 for DSH：每分钟限流 + 上游 5xx 自动重放，设置页滑块调节 · Per-minute throttle and retry-after-wait for the TokenShare provider route in DeepSeek Harness |
| 144 | [DanYikona/DSH-script-hub](https://github.com/DanYikona/DSH-script-hub) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness（DSH）插件。把任意会话里写出的脚本自动归档成「可查、可读、可跑、可写文档」的资产库，并把整套操作放进 Web GUI 侧边栏的一个面板里。 |
| 145 | [darlingsakurua/dsh-novels](https://github.com/darlingsakurua/dsh-novels) | 0 | 2026-11-12 | 2026-11-12 | DSH小说插件 |
| 146 | [dddbuchisuan/dsh-slot-manager](https://github.com/dddbuchisuan/dsh-slot-manager) | 0 | 2026-11-12 | 2026-11-12 | 右键任意 DSH 界面组件：隐藏组件、关闭或删除它所属的插件 |
| 147 | [DDDMUC/dsh-declutter](https://github.com/DDDMUC/dsh-declutter) | 0 | 2026-11-07 | 2026-11-12 | DSH 侧边栏精简：自定义隐藏左侧栏上半面板布局，仅通过样式表实现，且可逆。DSH sidebar declutter: custom-hide the upper panel layout of the left sidebar; stylesheet-only and reversible. |
| 148 | [deqingLv/dsh-privacy-mode](https://github.com/deqingLv/dsh-privacy-mode) | 0 | 2026-11-12 | 2026-11-12 | DSH 原生插件：默认关闭五条已核验的官方上报通道（非网络防火墙，非离线模式） |
| 149 | [Donkey-Kurt/fullstack-pair](https://github.com/Donkey-Kurt/fullstack-pair) | 0 | 2026-11-12 | 2026-11-12 | 多目录任务范围：让一个会话在多个任意目录间共享检索范围（DSH 插件） |
| 150 | [dororo42/dsh-ungrouped-sweeper](https://github.com/dororo42/dsh-ungrouped-sweeper) | 0 | 2026-11-12 | 2026-11-12 | Sweep the dsh web conversation list: batch-archive ungrouped sessions via the official workspace registry, restore anytime. 会话清扫器 |
| 151 | [douglarek/dsh-subagent-agy](https://github.com/douglarek/dsh-subagent-agy) | 0 | 2026-11-12 | 2026-11-12 | Antigravity (agy) subagent bundle for DeepSeek Harness, over ACP |
| 152 | [DSH43/dsh-balance](https://github.com/DSH43/dsh-balance) | 0 | 2026-08-19 | 2026-11-12 | 在 dsh Web 对话底部（token 统计前）显示 DeepSeek 账户余额的精简插件 |
| 153 | [DSH43/dsh-session-delete](https://github.com/DSH43/dsh-session-delete) | 0 | 2026-11-12 | 2026-11-12 | dsh Web 会话行菜单的删除会话插件：删日志、工作区记账和投影缓存，不改 dsh 源码 |
| 154 | [DSH43/dsh-version-check](https://github.com/DSH43/dsh-version-check) | 0 | 2026-11-12 | 2026-11-12 | 在 dsh Web 侧栏品牌位显示 DSH 官方最新版本检查的插件 |
| 155 | [dshsea/dshsea](https://github.com/dshsea/dshsea) | 0 | 2026-11-12 | 2026-11-12 | Every DeepSeek Harness plugin, as a sea creature. Dive, discover, claim yours. |
| 156 | [Dynastxu/dsh-github-agents-proxy](https://github.com/Dynastxu/dsh-github-agents-proxy) | 0 | 2026-11-10 | 2026-11-12 | GitHub App proxy for DeepSeek Harness agent changes |
| 157 | [ebrontower/dsh-workspace-pin](https://github.com/ebrontower/dsh-workspace-pin) | 0 | 2026-11-12 | 2026-11-12 | Workspace pinning for the DeepSeek Harness (DSH) sidebar, close to the built-in session pin. / DSH 工作区置顶插件，效果接近官方会话置顶。 |
| 158 | [edison7009/aiwings](https://github.com/edison7009/aiwings) | 0 | 2026-11-10 | 2026-11-12 | AI 正忙时，先把下一句话存进 Wings，等它空了，点一下就贴回输入框。Wings 是一条吸附在 Claude、ChatGPT 等 AI 桌面应用旁边的侧栏，支持 macOS 和 Windows。Queue your next prompt while the AI is busy, then paste it back in one click. Wings is a sidebar that docks beside Claude, ChatGPT and other desktop AI apps, on macOS and Windows. |
| 159 | [fatihtoprakk/dsh-scaefy-light-themes](https://github.com/fatihtoprakk/dsh-scaefy-light-themes) | 0 | 2026-11-12 | 2026-11-12 | 27 curated light color themes for DeepSeek Harness, adapted from Scaefy OpenCode light themes. Installable via Plugins or Discover. |
| 160 | [Faywool/dsh-multi-root](https://github.com/Faywool/dsh-multi-root) | 0 | 2026-11-12 | 2026-11-12 | 给一个 DSH 工作区挂多个仓库：自动注入仓库根表，配 workspace_roots、workspace_find 两个模型工具与侧栏弹窗；只做加法，不替换 fs/sandbox。 |
| 161 | [federicobuilds/dsh-workbench](https://github.com/federicobuilds/dsh-workbench) | 0 | 2026-11-12 | 2026-11-12 | 21 plugins for DeepSeek Harness |
| 162 | [ffpinkle/dsh-minimax-image](https://github.com/ffpinkle/dsh-minimax-image) | 0 | 2026-11-12 | 2026-11-12 | MiniMax H3-Image in DSH: text-to-image generation and image-to-image editing. |
| 163 | [Fictional-Historians/dsh-villager-widget](https://github.com/Fictional-Historians/dsh-villager-widget) | 0 | 2026-11-12 | 2026-11-12 | DSH balance widget fork with Minecraft villager skins rendered from your local Java Edition install (requires Minecraft Java Edition) |
| 164 | [Fuheshka/dsh-ru-locale](https://github.com/Fuheshka/dsh-ru-locale) | 0 | 2026-11-12 | 2026-11-12 | Вычитанная русская локализация DeepSeek Harness: языковой плагин ru-x-dsh — 3371 строка, 71 namespace |
| 165 | [Fushena/dsh-ark-agent-plan](https://github.com/Fushena/dsh-ark-agent-plan) | 0 | 2026-11-12 | 2026-11-12 | Volcengine Ark Agent Plan provider plugin for DeepSeek Harness: dynamic model catalog, thinking-effort control, server-side harness tools, quota badge &amp; panel |
| 166 | [Fushena/dsh-qwen-token-plan-full](https://github.com/Fushena/dsh-qwen-token-plan-full) | 0 | 2026-11-12 | 2026-11-12 | Qwen Token Plan full-routing plugin for DeepSeek Harness: dynamic catalog, Responses/Chat dual protocol, server-side built-in tools, image/video generation |
| 167 | [gabrielbav/dsh-plugin-session-delete](https://github.com/gabrielbav/dsh-plugin-session-delete) | 0 | 2026-11-12 | 2026-11-12 | Delete DeepSeek Harness sessions and workspaces permanently: Delete session on every session row, Delete workspace and sessions on every workspace |
| 168 | [Gaoler006115/dsh-desktop-view](https://github.com/Gaoler006115/dsh-desktop-view) | 0 | 2026-11-12 | 2026-11-12 | Read-only desktop and pointer observation tools for the DeepSeek Harness agent (Windows): DPI-aware screen capture, pointer coordinates, monitor layout and window titles. |
| 169 | [gavin-ali/dsh-leetcode](https://github.com/gavin-ali/dsh-leetcode) | 0 | 2026-11-12 | 2026-11-12 | DSH 侧边栏刷题台：题库实时从 leetcode.cn 拉取，Java 编辑器（补全/缩进），一键提交看判题结果。 |
| 170 | [Ghost233/GhostAgentSentinel](https://github.com/Ghost233/GhostAgentSentinel) | 0 | 2026-10-08 | 2026-11-12 | 面向各类 AI agent 的通用任务与运行状态监控工具 |
| 171 | [gongyansong760-byte/dsh-client-ui-code-font](https://github.com/gongyansong760-byte/dsh-client-ui-code-font) | 0 | 2026-11-02 | 2026-11-12 | DSH Web 插件：在设置 → 通用 里用四个滑块实时调整正文字号、代码字号、侧栏字号与设置面板字号，拖动即时生效，无需重启。 |
| 172 | [gongyansong760-byte/dsh-dev-delivery](https://github.com/gongyansong760-byte/dsh-dev-delivery) | 0 | 2026-11-02 | 2026-11-12 | DSH 开发交付插件与 Skill：把“看起来能用”的代码交付，变成“有命令、有退出码、有文件指纹能证明它对”。强制两类独立风险审查。 |
| 173 | [gongyansong760-byte/dsh-genui](https://github.com/gongyansong760-byte/dsh-genui) | 0 | 2026-11-02 | 2026-11-12 | DSH GenUI 插件：对话内交互卡片、数据表格、即时测验与条件显示 |
| 174 | [gongyansong760-byte/dsh-model-autofetch](https://github.com/gongyansong760-byte/dsh-model-autofetch) | 0 | 2026-11-12 | 2026-11-12 | DSH 插件：在模型设置页一键拉取提供商接口地址的模型列表并合并写入配置，手调字段不丢。 |
| 175 | [gznofeng/dsh-session-prompts](https://github.com/gznofeng/dsh-session-prompts) | 0 | 2026-11-12 | 2026-11-12 | 给 DSH 加一层「可临时挂上去的系统提示词」，会话级系统提示词插件：按会话勾选注入，支持快速提示词 |
| 176 | [haroon0x/dsh-orchestrator](https://github.com/haroon0x/dsh-orchestrator) | 0 | 2026-11-12 | 2026-11-12 | A native DeepSeek Harness orchestrator: see, inspect, message, and interrupt live agents in the same process. |
| 177 | [Hazen223/dsh-pocket-h5](https://github.com/Hazen223/dsh-pocket-h5) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件面板：把 Pocket · H5 预览工作台复用到 DSH（iPhone 17 尺寸/外观预览、真机物理尺寸、手机扫码）。 |
| 178 | [helloHupc/dsh-turn-notify](https://github.com/helloHupc/dsh-turn-notify) | 0 | 2026-11-12 | 2026-11-12 | DSH 插件：每当一个任务结束就用系统通知告诉你结果、耗时和最后一段回复；失败也会通知，可以放心离开窗口。 |
| 179 | [hg1048596-pixel/dsh-incremental](https://github.com/hg1048596-pixel/dsh-incremental) | 0 | 2026-11-11 | 2026-11-12 | DeepSeek Harness 的只读 AI 增量代码审查插件：复用审查结果，仅重跑受变更影响的任务。 \| Read-only incremental AI code review for DeepSeek Harness. Reuse results and rerun only tasks affected by changes. |
| 180 | [HiMenma/dsh-session-actions](https://github.com/HiMenma/dsh-session-actions) | 0 | 2026-11-12 | 2026-11-12 | DSH Web client bundle: open a zero-context temporary side task in the right sidebar |
| 181 | [HiMenma/dsh-session-unread](https://github.com/HiMenma/dsh-session-unread) | 0 | 2026-11-12 | 2026-11-12 | DSH Web client bundle: mark a session row as unread, with an unread dot in the sidebar |
| 182 | [HluckyRing/dsh-feedback-hub](https://github.com/HluckyRing/dsh-feedback-hub) | 0 | 2026-11-06 | 2026-11-12 | Notifications for DeepSeek Harness (DSH): Windows toasts, in-app toasts and an unread bell whenever the agent needs authorization, asks a question, or finishes a task. 中文：授权 / 提问 / 完成 / 出错时主动提醒，点通知可唤起窗口并跳到对应会话。 |
| 183 | [HluckyRing/dsh-memory](https://github.com/HluckyRing/dsh-memory) | 0 | 2026-11-07 | 2026-11-12 | 同一工作区、跨会话的纯文本记忆插件（DeepSeek Harness / DSH 插件）：每轮对话自动记成 Markdown，新会话按相关度注入 MEMORY/PROGRESS/历史与索引，并提供 memory_note / memory_search / memory_status 工具。零依赖、无数据库、无网络请求。 |
| 184 | [hluica/dsh-agent-preset-text](https://github.com/hluica/dsh-agent-preset-text) | 0 | 2026-11-12 | 2026-11-12 | Take over Agent preset names and descriptions at display time by locale, preset and runtime conditions, without modifying the presets. |
| 185 | [hluica/dsh-custom-css](https://github.com/hluica/dsh-custom-css) | 0 | 2026-11-12 | 2026-11-12 | Edit a custom CSS fragment and apply it to the DeepSeek Harness interface live; only local files may be referenced. |
| 186 | [hluica/dsh-enhanced-prompt](https://github.com/hluica/dsh-enhanced-prompt) | 0 | 2026-11-12 | 2026-11-12 | Render the user prompt as Markdown with the same GFM pipeline the assistant replies use; keep reference chips and selected-text quote previews. |
| 187 | [hluica/dsh-font-settings](https://github.com/hluica/dsh-font-settings) | 0 | 2026-11-12 | 2026-11-12 | Pick the text, code, and terminal font stacks from the fonts installed on this system, replacing the shipped plain-text font fields with searchable, ordered stacks. |
| 188 | [IKsiRainZero/dsh-pray](https://github.com/IKsiRainZero/dsh-pray) | 0 | 2026-11-12 | 2026-11-12 | A local incremental game for DeepSeek Harness: expectation, wish power, and letting go. |
| 189 | [imnotRiv3r/dsh-progress](https://github.com/imnotRiv3r/dsh-progress) | 0 | 2026-11-12 | 2026-11-12 | 在 DeepSeek Harness 界面右下角显示下载进度卡片：进度条、已下载字节、实时速度与剩余时间，覆盖 git clone / pip / npm / curl / aria2 / winget 等后台下载。 |
| 190 | [ItLeLeYa/dsh-pdl-center](https://github.com/ItLeLeYa/dsh-pdl-center) | 0 | 2026-11-12 | 2026-11-12 | PDL well data loading center: a DeepSeek Harness plugin workbench for the PDL engine. |
| 191 | [jackdu2333/dsh-hermes-workspace](https://github.com/jackdu2333/dsh-hermes-workspace) | 0 | 2026-11-10 | 2026-11-12 | DSH 原生插件：直连 Hermes TUI Gateway JSON-RPC，恢复 canonical Bot Chat |
| 192 | [JadeL-Kemo/dsh-conversation-flow](https://github.com/JadeL-Kemo/dsh-conversation-flow) | 0 | 2026-11-12 | 2026-11-12 | 中文优先的 DSH 插件：对话倒带 / 重新生成 / 删除本轮 / 删除会话（含工作区文件恢复） |
| 193 | [JadeL-Kemo/dsh-session-delete-menu](https://github.com/JadeL-Kemo/dsh-session-delete-menu) | 0 | 2026-11-12 | 2026-11-12 | DSH 桌面版会话右键菜单「删除会话」插件（软删除，24 小时内可恢复） |
| 194 | [JavaArthur/dsh-home](https://github.com/JavaArthur/dsh-home) | 0 | 2026-11-07 | 2026-11-12 | Chen Home 个人工作台：Flomo 笔记时间流、可换壁纸、任务与番茄钟 |
| 195 | [javipm/dsh-nan-provider](https://github.com/javipm/dsh-nan-provider) | 0 | 2026-11-12 | 2026-11-12 | Configura y vigila el uso de tu suscripción NaN (nan.builders) dentro de DeepSeek Harness, tanto en la TUI como en Desktop |
| 196 | [JCCDex/jdid-dapp-sdk](https://github.com/JCCDex/jdid-dapp-sdk) | 0 | 2026-11-09 | 2026-11-12 | dApp SDK for the JDID wallet, also a DeepSeek Harness plugin |
| 197 | [Jd44chs/dsh-question-voice](https://github.com/Jd44chs/dsh-question-voice) | 0 | 2026-11-12 | 2026-11-12 | Voice input for the DSH question card: record, transcribe locally with SenseVoice, insert the text into the answer field. |
| 198 | [JehuYu/dsh-plugins](https://github.com/JehuYu/dsh-plugins) | 0 | 2026-11-12 | 2026-11-12 | DSH plugins for teaching, exam archiving, assisted grading, score analysis and Sanview drawing. Independent installable packages. |
| 199 | [jiaoaiya/dsh-companion-mood](https://github.com/jiaoaiya/dsh-companion-mood) | 0 | 2026-11-12 | 2026-11-12 | A DeepSeek Harness plugin that keeps a time-varying companion mood and lets the AI start its own conversations at the right moment. |
| 200 | [jkloning/dsh-connect-qoder](https://github.com/jkloning/dsh-connect-qoder) | 0 | 2026-11-12 | 2026-11-12 | 把本机已登录的 Qoder 模型接入 DeepSeek Harness 的插件 |
| 201 | [jkm6221/dsh-workspace-folders](https://github.com/jkm6221/dsh-workspace-folders) | 0 | 2026-11-12 | 2026-11-12 | Attach extra folders to the current workspace: writable for the file tools and the shell, listed to the agent, manageable from the composer. |
| 202 | [jkzing/dsh-session-profiler](https://github.com/jkzing/dsh-session-profiler) | 0 | 2026-11-12 | 2026-11-12 | A DeepSeek Harness (dsh) plugin that turns a session into a timeline: swim-lane tracks, a flame graph and timing statistics. |
| 203 | [joe214214/harness-upgrade](https://github.com/joe214214/harness-upgrade) | 0 | 2026-10-29 | 2026-11-12 | upgrade harness system |
| 204 | [JokesLin/dsh-moonstyle](https://github.com/JokesLin/dsh-moonstyle) | 0 | 2026-10-28 | 2026-11-12 | 轻量月光配色主题：冷白偏蓝内容区 + 深海军蓝深色模式 + 圆润字体；零 DOM 监听、零毛玻璃、零定时器。 |
| 205 | [JoyhouseLabs/joyhouse-dsh-knowledge](https://github.com/JoyhouseLabs/joyhouse-dsh-knowledge) | 0 | 2026-11-12 | 2026-11-12 | Local-first Markdown notes, daily journals and images for DeepSeek Harness. Independent community plugin. |
| 206 | [joymitu/xuyi-memory-release](https://github.com/joymitu/xuyi-memory-release) | 0 | 2026-11-12 | 2026-11-12 | 续忆 · 让 DeepSeek Harness 的 QQ 陪伴助手记得你说过的话，并写一本日记 |
| 207 | [jszjdyt/dsh-geobulk](https://github.com/jszjdyt/dsh-geobulk) | 0 | 2026-11-12 | 2026-11-12 | GEO / Bulk 转录组工作台 · DeepSeek Harness 插件：GEO 检索下载、自有数据清洗、差异/富集/免疫浸润/生存预后、单细胞映射、circRNA/miRNA/lncRNA/fusion/可变剪接 |
| 208 | [jusspound-netizen/dsh-plugin-scanner](https://github.com/jusspound-netizen/dsh-plugin-scanner) | 0 | 2026-11-12 | 2026-11-12 | Scan a DeepSeek Harness plugin for security red flags before installing it: install scripts, risky imports, missing metadata, suspicious dependencies. Local-first, stdlib-only. |
| 209 | [kakassq/AiBench](https://github.com/kakassq/AiBench) | 0 | 2026-11-12 | 2026-11-12 | Local-first parametric video studio panel for DeepSeek Harness. No AI image or video generation — every frame is drawn by code. |
| 210 | [kandsome1/dsh-image-blur](https://github.com/kandsome1/dsh-image-blur) | 0 | 2026-10-31 | 2026-11-12 | DSH 插件：会话内图片默认模糊，图片右上角「显示 / 模糊」按钮；只作用于对话正文，模糊不外溢、按钮逐帧跟随、首帧即糊。 |
| 211 | [kaokxoas/dsh-multiagent-guard](https://github.com/kaokxoas/dsh-multiagent-guard) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：多 agent 协作的硬约束层——只读角色工具级白名单、上下文预算标记、子 agent 超时真中断、协作度量。 |
| 212 | [karla-zhang/dsh-plugin-account-sync](https://github.com/karla-zhang/dsh-plugin-account-sync) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: sync installed plugins, settings, workspace files, session logs and skills between terminals signed into the same account. |
| 213 | [KevinZhangNothing/dsh-nico](https://github.com/KevinZhangNothing/dsh-nico) | 0 | 2026-11-10 | 2026-11-12 | Nico — 按住右⌘说一句，本地 AI 替我操作电脑。DSH cordis plugin: SenseVoice STT + headless session + hotkey daemon. |
| 214 | [kinry3212/dsh-meeting-recorder](https://github.com/kinry3212/dsh-meeting-recorder) | 0 | 2026-11-12 | 2026-11-12 | DSH 插件：为长会话维护一份随时可查的会议记录（host 侧，不向对话注入内容） |
| 215 | [kkazakov/dsh-alibaba-token-plan-plugin](https://github.com/kkazakov/dsh-alibaba-token-plan-plugin) | 0 | 2026-11-12 | 2026-11-12 | Alibaba Cloud Token Plan monthly usage for DeepSeek Harness: composer strip, settings page, and agent tool. |
| 216 | [koking0/dsh-plugin-zhuoyu-ppt](https://github.com/koking0/dsh-plugin-zhuoyu-ppt) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin · 琢玉PPT工坊：用川大模板从零做学术汇报 PPT（模板继承、四级字号、逐页参考文献、逐页渲染自检），零第三方运行时依赖 |
| 217 | [kun111-web/dsh-wuthering-waves-intro](https://github.com/kun111-web/dsh-wuthering-waves-intro) | 0 | 2026-11-12 | 2026-11-12 | DSH 鸣潮入场动画：20 个角色，4K 60fps 静音素材，完整与快速开场 |
| 218 | [kute/dsh-keelwatch](https://github.com/kute/dsh-keelwatch) | 0 | 2026-11-12 | 2026-11-12 | Operations layer for DSH plugins: dependency drift radar, failure brake, and token/latency attribution. ｜ DSH 插件运维层：依赖漂移雷达、失败刹车、Token 与耗时归因。 |
| 219 | [kuugakw/dsh-ai-for-memory](https://github.com/kuugakw/dsh-ai-for-memory) | 0 | 2026-11-12 | 2026-11-12 | Layered project memory for DeepSeek Harness: staging log, archive, snapshots, local search, decisions and a Web panel. Early preview (v0.2.0). |
| 220 | [kvenux/dsh-decode](https://github.com/kvenux/dsh-decode) | 0 | 2026-11-09 | 2026-11-12 | Decode: code-repository Q&amp;A for DeepSeek Harness, with interactive diagrams and checked code quotes |
| 221 | [kyle2241345145351324321/dsh-agent-memory](https://github.com/kyle2241345145351324321/dsh-agent-memory) | 0 | 2026-11-12 | 2026-11-12 | Durable agent memory for DeepSeek Harness — global + per-project memories, written by the agent and fully editable in Settings → Memory. |
| 222 | [kzhw615/dsh-opencode-go-strip](https://github.com/kzhw615/dsh-opencode-go-strip) | 0 | 2026-11-12 | 2026-11-12 | OpenCode Go quota meter for DeepSeek Harness: a composer strip and popover showing the 5-hour, weekly and monthly plan windows |
| 223 | [Langlijun666/dsh-xmum-moodle](https://github.com/Langlijun666/dsh-xmum-moodle) | 0 | 2026-11-12 | 2026-11-12 | XMUM Moodle inside the DeepSeek Harness sidebar: courses grouped by term, a schedule built from announcements and deadlines, and batch course-file downloads. |
| 224 | [lb290/dsh-zentao-ai-workbench](https://github.com/lb290/dsh-zentao-ai-workbench) | 0 | 2026-11-09 | 2026-11-12 | DeepSeek Harness 禅道 AI 工作台插件：按链接取 Bug/任务，多选交给会话处理，AI 处理完直接回写备注与状态 |
| 225 | [LBM-OASIG/dsh-skill-pin](https://github.com/LBM-OASIG/dsh-skill-pin) | 0 | 2026-11-12 | 2026-11-12 | Keep the skills a DeepSeek Harness session loaded alive across context compaction. |
| 226 | [leinian114514/dsh-memory](https://github.com/leinian114514/dsh-memory) | 0 | 2026-11-12 | 2026-11-12 | DSH 自托管记忆插件：七层 SQLite + BM25（含拼音/首字母容错）+ 三条注入路径 + 10 个工具。零运行时依赖 |
| 227 | [leixlabs/dsh-honcho-memory-viz](https://github.com/leixlabs/dsh-honcho-memory-viz) | 0 | 2026-11-12 | 2026-11-12 | Honcho memory explorer for the DeepSeek Harness Web UI: peers, conclusions, sessions and a relationship graph, with semantic search. |
| 228 | [leslie941012/dsh-ptt](https://github.com/leslie941012/dsh-ptt) | 0 | 2026-11-12 | 2026-11-12 | Push-to-talk for DeepSeek Harness: hold Alt to record, release to transcribe |
| 229 | [liancheng2020/dsh-aihot-radar](https://github.com/liancheng2020/dsh-aihot-radar) | 0 | 2026-11-12 | 2026-11-12 | AIHOT 雷达 · DSH 插件：Codex/Claude/Antigravity 额度重置推送 + AIHOT 资讯日报与 Agent 工具 |
| 230 | [liangdabiao/dsh-cn30](https://github.com/liangdabiao/dsh-cn30) | 0 | 2026-11-12 | 2026-11-12 | 社媒雷达 CN30 · dsh 插件：小红书/抖音/公众号近30天话题研究，跨平台舆情对比 + agent 研究报告内嵌 HTML + 侧栏看板 |
| 231 | [liangdabiao/dsh-douyin-ai-feed](https://github.com/liangdabiao/dsh-douyin-ai-feed) | 0 | 2026-11-12 | 2026-11-12 | AI 抖音日报 · dsh 插件：每日扫描抖音热门作品，type/topic 两轮自动聚类、互动量排序、深色青风 HTML 日报（封面图/作品直链）+ 侧栏看板 |
| 232 | [liangdabiao/dsh-intel-investigator](https://github.com/liangdabiao/dsh-intel-investigator) | 0 | 2026-11-12 | 2026-11-12 | A股情报调查员 dsh 插件：五种调查模式三轮搜索方法论 + 可信度标注 + 报告存证（本地+RedFox 平台）+ 档案看板。 |
| 233 | [liangdabiao/dsh-news-brief](https://github.com/liangdabiao/dsh-news-brief) | 0 | 2026-11-12 | 2026-11-12 | 全球 AI 新闻简报 · dsh 插件：一个关键词并行搜索 11 大平台，跨平台聚合标准化，agent 按四大板块生成情报报告 + 交互式 HTML + 侧栏看板 |
| 234 | [liangdabiao/dsh-tiktok-topic](https://github.com/liangdabiao/dsh-tiktok-topic) | 0 | 2026-11-12 | 2026-11-12 | TikTok 话题雷达 · dsh 插件：按 TikTok 话题 ID 查询话题作品列表（播放/点赞/评论/分享+完整链接），排序切换与游标翻页 + 侧栏看板。无 SNI TLS 传输。 |
| 235 | [liangdabiao/dsh-xhs-darkhorse](https://github.com/liangdabiao/dsh-xhs-darkhorse) | 0 | 2026-11-12 | 2026-11-12 | 小红书黑马爆文榜 dsh 插件：darkhorse_rank 工具 + 爆款规律分析 + 小红书风格 HTML 导出 + 侧栏看板。RedFox API 驱动的单日黑马榜（25 分类/近30天）。 |
| 236 | [liangdabiao/dsh-xhs-weeklytop](https://github.com/liangdabiao/dsh-xhs-weeklytop) | 0 | 2026-11-12 | 2026-11-12 | 小红书七日爆款雷达 · dsh 插件：近7天热门笔记 TOP50，24 分类关键词匹配、19:00 日期规则、互动/新增双行榜单、小红书风 HTML 报告（导出 PDF/图片）+ 侧栏看板 |
| 237 | [liasece/oh-my-dsh](https://github.com/liasece/oh-my-dsh) | 0 | 2026-11-12 | 2026-11-12 | OhMyDSH：峰谷动态、提示词候选、输入历史三合一 —— 一个 DSH 插件，三个设置页，每项独立开关 |
| 238 | [Liatos233/dsh-dl-progress](https://github.com/Liatos233/dsh-dl-progress) | 0 | 2026-11-11 | 2026-11-12 | Download task panel for the DeepSeek Harness Web UI: real percentage, transfer rate and ETA. |
| 239 | [lichufeng123/dsh-zentao-ledger](https://github.com/lichufeng123/dsh-zentao-ledger) | 0 | 2026-11-12 | 2026-11-12 | ZenTao bug ledger for DeepSeek Harness: triage, drafts, step evidence, and explicit submission with readback. |
| 240 | [lihengxi20/dsh-session-tabs](https://github.com/lihengxi20/dsh-session-tabs) | 0 | 2026-11-12 | 2026-11-12 | Session tabs for the DSH (DeepSeek Harness) web GUI: open sessions as tabs, switch/close/rename them, persisted tab list, workspace/title labels and live status. Plugin-only, no DSH core changes. |
| 241 | [lilinfangrelax/dsh-external-agents](https://github.com/lilinfangrelax/dsh-external-agents) | 0 | 2026-11-12 | 2026-11-12 | Connect DeepSeek Harness (dsh) to the coding agents already installed on your machine over ACP: local detection, official ACP Registry, native chat routing and subagent delegation. |
| 242 | [liuguangyu272/dsh-team-budget](https://github.com/liuguangyu272/dsh-team-budget) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness team budget plugin: managed API keys, usage analytics, monthly quotas and model access. 自托管团队额度管理。 |
| 243 | [lmmcsb/dsh-quad-layout](https://github.com/lmmcsb/dsh-quad-layout) | 0 | 2026-11-12 | 2026-11-12 | Four-column layout for DeepSeek Harness: split the left sidebar into a 56px icon rail plus a full-height workspace column. |
| 244 | [lmmcsb/dsh-turn-continue](https://github.com/lmmcsb/dsh-turn-continue) | 0 | 2026-11-12 | 2026-11-12 | Auto-continue a stalled DeepSeek Harness turn: re-prompts after an empty turn, a max-tokens cutoff or a listed model error, and fails over to a healthy backup route before retrying. |
| 245 | [Lornatang/dsh-atlassian-bridge](https://github.com/Lornatang/dsh-atlassian-bridge) | 0 | 2026-11-12 | 2026-11-12 | Connect Atlassian Cloud or self-hosted Jira and Confluence to DeepSeek Harness with tools and a Jira board. |
| 246 | [Lornatang/dsh-frontgate](https://github.com/Lornatang/dsh-frontgate) | 0 | 2026-11-10 | 2026-11-12 | Password gate and reverse proxy for the DeepSeek Harness Web UI. |
| 247 | [lukeinx/dsh-workboard](https://github.com/lukeinx/dsh-workboard) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: a modular dashboard with 34 built-in widgets, plus widgets your agent builds for you. |
| 248 | [luo173176/dsh-simple-live](https://github.com/luo173176/dsh-simple-live) | 0 | 2026-11-12 | 2026-11-12 | DSH aggregated live streaming plugin: bilibili / douyu / huya / douyin in one sidebar panel, with model tools. |
| 249 | [LXinH3RT/dsh-auto-relay](https://github.com/LXinH3RT/dsh-auto-relay) | 0 | 2026-11-11 | 2026-11-12 | DSH Host plugin: open a continuation session when a conversation keeps compressing near its context limit, and increment the session title's trailing number. |
| 250 | [LXinH3RT/dsh-deepseek-web](https://github.com/LXinH3RT/dsh-deepseek-web) | 0 | 2026-11-12 | 2026-11-12 | Open the DeepSeek web app in the native right-Sidebar Browser tab of DeepSeek Harness. |
| 251 | [lzlrt/dsh-mobile-boost](https://github.com/lzlrt/dsh-mobile-boost) | 0 | 2026-11-12 | 2026-11-12 | Narrow-screen thumb ergonomics for the desktop DSH UI — born for dsh-desktop-link. 40px touch targets, 16px body text, no horizontal scroll, soft-keyboard-safe focus. Active only on (max-width:1023px) and (pointer:coarse). |
| 252 | [MagicSandBag/xiaofeiyu-academy](https://github.com/MagicSandBag/xiaofeiyu-academy) | 0 | 2026-11-11 | 2026-11-12 | 小肥鱼主导的AI学习台，针对小学生特化，可以学习挣小鱼干喂养我们的小肥鱼 |
| 253 | [maqimakabaka/dsh-liangwengu](https://github.com/maqimakabaka/dsh-liangwengu) | 0 | 2026-11-07 | 2026-11-12 | 在梁文谷时段进行生成。该插件帮助您在谷价进行工作，提前编辑好对话指令。deepseek harness。 |
| 254 | [markmuteki/dsh-session-prompt-optimizer](https://github.com/markmuteki/dsh-session-prompt-optimizer) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: one composer button that rewrites your draft into a sharper prompt, shown beside your text before anything is replaced. |
| 255 | [miguelangelnieto/dsh-memory](https://github.com/miguelangelnieto/dsh-memory) | 0 | 2026-11-12 | 2026-11-12 | Durable cross-chat memory plugin for DeepSeek Harness. |
| 256 | [miguelangelnieto/dsh-mode-switch](https://github.com/miguelangelnieto/dsh-mode-switch) | 0 | 2026-11-12 | 2026-11-12 | Plan / execution mode switch in the composer for the current session. |
| 257 | [mimidor/dsh-stock-dock](https://github.com/mimidor/dsh-stock-dock) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness (DSH) 插件：输入框下方的 A股/港股/美股自选股行情条，迷你K线 + 分时/日周月K + 五档盘口。Quote strip plugin for DSH: quotes, K-line, intraday, order book. |
| 258 | [minhaoliu927-lgtm/dsh-interview-desk](https://github.com/minhaoliu927-lgtm/dsh-interview-desk) | 0 | 2026-11-12 | 2026-11-12 | 职镜AI：DSH 原生求职插件，支持简历修改、岗位分析、文字和实时语音模拟面试。 |
| 259 | [Moh114514/dsh-image-context-menu](https://github.com/Moh114514/dsh-image-context-menu) | 0 | 2026-11-08 | 2026-11-12 | Companion plugin for dsh-codex-subscription: adds a right-click menu (open, copy, insert, reveal, download) to Codex-generated images in DeepSeek Harness. |
| 260 | [moluotianshen/pro-202611](https://github.com/moluotianshen/pro-202611) | 0 | 2026-11-11 | 2026-11-12 | Zero-dependency Node.js ESM project skeleton |
| 261 | [Morethaninformation/dsh-eval](https://github.com/Morethaninformation/dsh-eval) | 0 | 2026-11-12 | 2026-11-12 | DSH plugin: run a fixed benchmark suite against a local OpenAI-compatible model endpoint (JSON, arithmetic, code, long-context) with automatic scoring. |
| 262 | [MrLukezy/dsh-codequest](https://github.com/MrLukezy/dsh-codequest) | 0 | 2026-11-12 | 2026-11-12 | CodeQuest for DeepSeek Harness: 把真实 Token 流量与会话内容变成成就游戏，带自建排行榜 |
| 263 | [MrMark019/DSH_MarkdownPreviewPulgin](https://github.com/MrMark019/DSH_MarkdownPreviewPulgin) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 右侧栏 Markdown 工作台：浏览工作区、预览/源码/分栏、导出单文件 HTML \| Markdown workspace panel for the DSH right sidebar with standalone HTML export |
| 264 | [muhadif/dsh-atlassian-mcp](https://github.com/muhadif/dsh-atlassian-mcp) | 0 | 2026-11-11 | 2026-11-12 | Confluence and Jira connector for DeepSeek Harness (Atlassian remote MCP) |
| 265 | [muhadif/dsh-wallet-tracker](https://github.com/muhadif/dsh-wallet-tracker) | 0 | 2026-11-11 | 2026-11-12 | Multi-chain wallet watcher for DeepSeek Harness: Solana, EVM and Bitcoin balances, live prices, FIFO PnL, token detail with chart, trades and holders. |
| 266 | [MYiYang/dsh-visual-reply](https://github.com/MYiYang/dsh-visual-reply) | 0 | 2026-11-12 | 2026-11-12 | Rich visual replies for DeepSeek Harness: a visual_render tool plus a sandboxed in-conversation figure (title, chart, provenance) and a bundled skill that decides when a figure earns its place. |
| 267 | [MykytaStel/ua-tts-text](https://github.com/MykytaStel/ua-tts-text) | 0 | 2026-11-12 | 2026-11-12 | Український текст до озвучки: числа, дати, наголоси під конкретний TTS-рушій |
| 268 | [nacivageer/dsh-parchment-theme](https://github.com/nacivageer/dsh-parchment-theme) | 0 | 2026-11-11 | 2026-11-12 | 羊皮纸主题：给 DeepSeek Harness Web GUI 的旧纸墨褐配色（浅色羊皮纸 / 深色墨夜） |
| 269 | [nanxfu/dsh-our-imagen](https://github.com/nanxfu/dsh-our-imagen) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 文生图工作台插件：整页创作、对话调用、图片本地落盘，首发支持 Kaggle 免费双卡 GPU，Colab 等后端接入中 |
| 270 | [nekonya77/dsh-ai-digest](https://github.com/nekonya77/dsh-ai-digest) | 0 | 2026-11-11 | 2026-11-12 | DSH 插件：每天扫一遍 B站的 AI 内容，挑出真正值得看的，写成日报推到飞书。 |
| 271 | [nekonya77/dsh-bilibili-viral](https://github.com/nekonya77/dsh-bilibili-viral) | 0 | 2026-11-11 | 2026-11-12 | 每天扒 B站爆款，拆标题、选题、封面、脚本；每周给 5 条可拍内容和 10 张封面。 |
| 272 | [nekonya77/dsh-inspiration-vault](https://github.com/nekonya77/dsh-inspiration-vault) | 0 | 2026-11-11 | 2026-11-12 | 一句话记灵感、三个关键词找回来；纯本地 Markdown，不评分、不生成待办。 |
| 273 | [nekonya77/dsh-qq-radar](https://github.com/nekonya77/dsh-qq-radar) | 0 | 2026-11-11 | 2026-11-12 | 把 QQ 群聊整理成中文日报，并顺手挖出可做的 AI 产品/插件线索。 |
| 274 | [nekonya77/dsh-repo-watcher](https://github.com/nekonya77/dsh-repo-watcher) | 0 | 2026-11-11 | 2026-11-12 | 盯住 GitHub 仓库：新增或有变化的 issue / PR 收进 DSH |
| 275 | [ningbonb/dsh-csv-analyst](https://github.com/ningbonb/dsh-csv-analyst) | 0 | 2026-11-12 | 2026-11-12 | Read-only CSV analysis with exact decimal totals and honest full-file counts for DeepSeek Harness |
| 276 | [nonenameless/dsh-a2a](https://github.com/nonenameless/dsh-a2a) | 0 | 2026-11-12 | 2026-11-12 | 为deepseek harness的A2A插件，实现dsh和openclaw及hermes的多方a2a互通和工具调用等功能 |
| 277 | [Notch-da/dsh-c-cleaner](https://github.com/Notch-da/dsh-c-cleaner) | 0 | 2026-11-12 | 2026-11-12 | C盘清理：DeepSeek Harness 的 Windows 系统盘清理插件，面板 + 三个 Agent 工具 |
| 278 | [OldLiooooo/dsh-project-bench](https://github.com/OldLiooooo/dsh-project-bench) | 0 | 2026-11-12 | 2026-11-12 | DSH 项目工作台：你只对 PM 提需求，AI 专家团交付，进度可视化 \| A project runtime for DeepSeek Harness — talk to a PM, an AI expert team delivers, progress stays visible. |
| 279 | [OrdinaryTu/dsh-image-gen](https://github.com/OrdinaryTu/dsh-image-gen) | 0 | 2026-11-12 | 2026-11-12 | Local text-to-image for DeepSeek Harness via ComfyUI: a generate_image tool with auto-start, health checks, queueing, timeouts and retries. |
| 280 | [Oreo0614/dsh-realtime-subtitles](https://github.com/Oreo0614/dsh-realtime-subtitles) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: live Chinese subtitles from system audio for local Japanese/English video playback. |
| 281 | [Ornn8/dsh-fishbowl-town](https://github.com/Ornn8/dsh-fishbowl-town) | 0 | 2026-11-12 | 2026-11-12 | 鱼缸小镇 · DeepSeek Harness (DSH) 插件：让你在 DSH 里养的鱼住进肥鱼小镇——打牌、串门、上日报，每一步都由 DSH 里的她来答 |
| 282 | [overFloweee/dsh-foresight](https://github.com/overFloweee/dsh-foresight) | 0 | 2026-11-12 | 2026-11-12 | Composer add-on for DeepSeek Harness: next-message prediction, history completion, per-turn recap and ↑/↓ prompt recall. |
| 283 | [Paradox1278/dsh-empty-turn-guard](https://github.com/Paradox1278/dsh-empty-turn-guard) | 0 | 2026-11-12 | 2026-11-12 | A DeepSeek Harness plugin that stops silent turn death: when the upstream ends with stop_reason=tool_use but emits no tool call or text, DSH closes the turn as completed and the agent stops without reporting. This plugin steers the turn back open. |
| 284 | [peter0429-ux/dsh-task-dock](https://github.com/peter0429-ux/dsh-task-dock) | 0 | 2026-11-12 | 2026-11-12 | A draggable dock in the DSH window corner: pending confirmations, then running sessions, then unread results. |
| 285 | [philomelcc/dsh-downloads](https://github.com/philomelcc/dsh-downloads) | 0 | 2026-11-10 | 2026-11-12 | Workbench module: download queue with aria2 and optional Xunlei engines |
| 286 | [philomelcc/dsh-status-monitor](https://github.com/philomelcc/dsh-status-monitor) | 0 | 2026-11-10 | 2026-11-12 | Workbench module: disk, CPU/memory/GPU, port and token-usage cards |
| 287 | [pokereva/dsh-no-enter-sand](https://github.com/pokereva/dsh-no-enter-sand) | 0 | 2026-11-12 | 2026-11-12 | Enter 只换行，只有点发送按钮才发送 |
| 288 | [poloniumn/dsh-model-panel](https://github.com/poloniumn/dsh-model-panel) | 0 | 2026-11-12 | 2026-11-12 | 优雅的模型选择面板 · DeepSeek Harness 插件 —— 可搜索的服务商/模型表格，实时余额、套餐与渠道积分 |
| 289 | [QHY2333/dsh-restart](https://github.com/QHY2333/dsh-restart) | 0 | 2026-11-12 | 2026-11-12 | One-click Restart DSH button in the sidebar footer: reload newly installed plugins without quitting and reopening the app. / 侧栏底部一键重启 DSH。 |
| 290 | [qianchuan-ai/dsh-vidstyle](https://github.com/qianchuan-ai/dsh-vidstyle) | 0 | 2026-11-12 | 2026-11-12 | 中式美学 AI 视频提示词风格库 · Chinese-aesthetic AI video style library for DeepSeek Harness (dsh) — 12 styles (6 国风 + 6 国际) producing paste-ready Chinese prompts for 即梦 / Seedance / 可灵 / 通义万相 |
| 291 | [qihao1123/dsh-whale-pal](https://github.com/qihao1123/dsh-whale-pal) | 0 | 2026-11-11 | 2026-11-12 | DSH 插件：跨会话记忆、上下文压缩档案、人格内核。让同一场对话能一直聊下去。 |
| 292 | [Qinqing1999/dsh-pixelfly](https://github.com/Qinqing1999/dsh-pixelfly) | 0 | 2026-11-12 | 2026-11-12 | PixelFly — image generation plugin for DeepSeek Harness: settings page for the upstream, rotating multi-key ring with exponential backoff, and a studio page with gallery. |
| 293 | [qq-24/dsh-web-fetch-fallback](https://github.com/qq-24/dsh-web-fetch-fallback) | 0 | 2026-11-12 | 2026-11-12 | Transparent local-fetch fallback for DeepSeek Harness: when the configured web_fetch provider fails, fetch the URL directly and return a successful result to the same tool. |
| 294 | [qrak/dsh-mode-switcher](https://github.com/qrak/dsh-mode-switcher) | 0 | 2026-11-11 | 2026-11-12 | Tab toggles Plan/Build in DeepSeek Harness; each mode keeps its own model and reasoning preset across restarts. |
| 295 | [quanzaiyu/dsh-agnes-media](https://github.com/quanzaiyu/dsh-agnes-media) | 0 | 2026-11-12 | 2026-11-12 | DSH plugin: Agnes AI text/image to image/video generation in the composer, with a gallery, style presets and prompt enhancement. |
| 296 | [RDYRD/dsh-drag-out](https://github.com/RDYRD/dsh-drag-out) | 0 | 2026-11-12 | 2026-11-12 | Drag a Presented deliverable card straight into another desktop app — the real file, through the desktop shell native drag channel. |
| 297 | [RDYRD/dsh-session-files](https://github.com/RDYRD/dsh-session-files) | 0 | 2026-10-26 | 2026-11-12 | Sidebar tab listing every file produced by a conversation — deliverables and touched files — with path, size and a reversible trash. |
| 298 | [ReachForStar/dsh-client-ui-polish](https://github.com/ReachForStar/dsh-client-ui-polish) | 0 | 2026-08-18 | 2026-11-12 | DeepSeek Harness 客户端增强插件集：界面美化、会话统计、Excalidraw 工具、pi 子代理与 AMAX 模型接入 |
| 299 | [reshdh/dsh-remote-hub](https://github.com/reshdh/dsh-remote-hub) | 0 | 2026-11-12 | 2026-11-12 | Multi-host remote workspace hub for DeepSeek Harness: mobile PWA gateway, host-scoped workspace switcher, remote directory browser, model sync, and cross-host @ session references |
| 300 | [royrao2007/dsh-montagex](https://github.com/royrao2007/dsh-montagex) | 0 | 2026-11-12 | 2026-11-12 | MontageX - full-pipeline AI video production harness for DeepSeek Harness: brief, storyboard, generation, assembly, QC, plus team collaboration |
| 301 | [ruaibeite/dsh-agent-ci](https://github.com/ruaibeite/dsh-agent-ci) | 0 | 2026-11-12 | 2026-11-12 | Agent CI for DeepSeek Harness: turn real sessions into regression cases, replay them in isolated git worktrees, and verify tests, changed files, steps and tokens. |
| 302 | [ruaibeite/dsh-context-garden](https://github.com/ruaibeite/dsh-context-garden) | 0 | 2026-11-12 | 2026-11-12 | A zen garden for the DSH context window: every message or tool result plants a plant, compaction is the harvest, harvested plants become seed currency across four seasons. |
| 303 | [ruaibeite/dsh-preflight](https://github.com/ruaibeite/dsh-preflight) | 0 | 2026-11-12 | 2026-11-12 | Preflight and budget for DeepSeek Harness: predict a task's steps, tokens, duration and cost from local session history, with a live budget strip under the composer. |
| 304 | [ruaibeite/dsh-provenance](https://github.com/ruaibeite/dsh-provenance) | 0 | 2026-11-12 | 2026-11-12 | Line-level provenance and a decision ledger for agent edits: which session, model and tool wrote each change, with Markdown/JSON export. |
| 305 | [ruaibeite/dsh-token-slime](https://github.com/ruaibeite/dsh-token-slime) | 0 | 2026-11-12 | 2026-11-12 | A composer slime that grows on the tokens your agent writes, splits into a colony, wears a breed hat from the tool mix, molts on every context compaction, and totals the colony across sessions. |
| 306 | [ruaibeite/dsh-usage-stats](https://github.com/ruaibeite/dsh-usage-stats) | 0 | 2026-11-12 | 2026-11-12 | Local token usage for DeepSeek Harness: Chat and Code scene cards, tokens per day and a per-model breakdown on the Settings Usage page. |
| 307 | [salvare013/dsh-agents-md-presets](https://github.com/salvare013/dsh-agents-md-presets) | 0 | 2026-11-10 | 2026-11-12 | Named AGENTS.md presets for DSH: apply one per conversation, edit bodies in your own editor, and keep one rolling backup of the previous file. |
| 308 | [SAS-159/dsh-evidence-audit](https://github.com/SAS-159/dsh-evidence-audit) | 0 | 2026-11-12 | 2026-11-12 | Audit what the agent claims against what its own tools actually returned: per-sentence evidence coverage with the unsupported claims listed. |
| 309 | [SAS-159/dsh-repo-brief](https://github.com/SAS-159/dsh-repo-brief) | 0 | 2026-11-12 | 2026-11-12 | Registers a repo_brief tool: one call returns a compact map of a repository — languages, entry points, scripts, test command, recent and largest files — instead of a dozen exploratory calls. |
| 310 | [sasasin/dsh-parallel-search](https://github.com/sasasin/dsh-parallel-search) | 0 | 2026-11-12 | 2026-11-12 | Parallel Search API Fast mode as a DeepSeek Harness tool. MIT licensed, zero runtime dependencies. |
| 311 | [satheelshin/dsh-cookie-cleaner](https://github.com/satheelshin/dsh-cookie-cleaner) | 0 | 2026-11-12 | 2026-11-12 | DSH 桌面版 cookie 常驻清理器：launchd 守护在完全退出后备份并清空 cookie 库，DSH 插件负责安装/诊断/卸载（治 431 / Web authentication failed） |
| 312 | [seanjin0513/dsh-sidebar-more](https://github.com/seanjin0513/dsh-sidebar-more) | 0 | 2026-11-12 | 2026-11-12 | DSH 插件：把左侧栏「工作区」上方的插件入口收进「更多」菜单，并可逐项固定 / 收起 |
| 313 | [seanjin0513/dsh-token-usage](https://github.com/seanjin0513/dsh-token-usage) | 0 | 2026-11-12 | 2026-11-12 | DSH 插件：左侧栏余额面板与 token / 费用统计（可自定义单价、峰谷与长上下文分层价格、手动余额） |
| 314 | [shinerain1/dsh-evidence-lineage](https://github.com/shinerain1/dsh-evidence-lineage) | 0 | 2026-11-10 | 2026-11-12 | DSH evidence provenance: source-aware context folding, structured Agent reports, durable lineage and auditable exports. |
| 315 | [shlan28/dsh-achoverse-community](https://github.com/shlan28/dsh-achoverse-community) | 0 | 2026-11-07 | 2026-11-12 | A Community around AR/VR, 3D, Social Networking. |
| 316 | [shrikantpardhi/dsh-session-manager](https://github.com/shrikantpardhi/dsh-session-manager) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: archive, pin and permanently delete chat sessions from Settings, with bulk actions and disk-usage totals. |
| 317 | [shudi729/dsh-enterprise-expert-workspace](https://github.com/shudi729/dsh-enterprise-expert-workspace) | 0 | 2026-11-12 | 2026-11-12 | 企业 AI 专家工作台：把资料转成可追溯任务、跨部门工作流和可下载成果的 DSH 插件 |
| 318 | [shudi729/dsh-vpn-assistant](https://github.com/shudi729/dsh-vpn-assistant) | 0 | 2026-11-12 | 2026-11-12 | VPN 智能助手：可解释选型、官方下载、安装指导与授权只读诊断（DeepSeek Harness 插件） |
| 319 | [SilverIodide42/dsh-session-consistency](https://github.com/SilverIodide42/dsh-session-consistency) | 0 | 2026-11-09 | 2026-11-12 | DSH (DeepSeek Harness) session manager plugin: three-store consistency check, backup-first cleanup, archive management and workspace health check in a Web GUI panel |
| 320 | [skysstst/dsh-independent-task](https://github.com/skysstst/dsh-independent-task) | 0 | 2026-11-11 | 2026-11-12 | One-click timestamped workspace folders + new sessions for DeepSeek Harness. 一键新建时间戳工作区并在其中开启新会话。 |
| 321 | [skyzzq/dsh-file-view](https://github.com/skyzzq/dsh-file-view) | 0 | 2026-11-11 | 2026-11-12 | DeepSeek Harness 插件：文件展示与链接交互。对话中提到的所有文件路径自动转为可点击链接，支持侧边栏秒级预览、外部编辑器跳转与资源管理器定位；内置同源界面强调色设置。 |
| 322 | [Sladewww/dsh-plugin-loomy](https://github.com/Sladewww/dsh-plugin-loomy) | 0 | 2026-11-12 | 2026-11-12 | Loomy 网关 DSH 插件：把 loomy2api 的模型添加为 DSH 可选模型，左侧栏面板管理账号池，支持逐个模型启用开关 |
| 323 | [slow-stack/dsh-cura](https://github.com/slow-stack/dsh-cura) | 0 | 2026-11-08 | 2026-11-12 | 给 DeepSeek Harness 加一层生活关怀：健康日志、周期关怀、常用坐标、高德与瑞幸 MCP 工具挂进所有会话；附带 QQ 伴生增强，让回复像真人。 |
| 324 | [SlumberMin/dsh-workflow-boost](https://github.com/SlumberMin/dsh-workflow-boost) | 0 | 2026-11-12 | 2026-11-12 | 15 workflow modules for DeepSeek Harness: microcompact, focus chain, stuck detector, turn guard, edit checks, checkpoints, evidence-gated goals, repo map, cache attribution, memory lint, hooks, handoff notes, skills, review gate, and stylePack (response styles + dated identity presets). |
| 325 | [smounives/dsh-rea-switch](https://github.com/smounives/dsh-rea-switch) | 0 | 2026-11-12 | 2026-11-12 | DSH plugin: toggle the REA MCP server on/off from Settings → REA (and a composer-dock pill), without editing patches by hand. |
| 326 | [songzhou666/dsh-spiral](https://github.com/songzhou666/dsh-spiral) | 0 | 2026-11-12 | 2026-11-12 | SemanticNebula · 语义星云 — decorative DSH / DeepSeek Harness plugin: every prompt becomes a rotating four-arm spiral nebula with a local semantic footprint map. No model, no network, under 130 KB. Prompt visualization, canvas2d, generative art. |
| 327 | [sosiman/dsh-native-mode-router](https://github.com/sosiman/dsh-native-mode-router) | 0 | 2026-11-12 | 2026-11-12 | Autonomous runtime engine switcher (Standard, PTC, Team, Minimal) with in-flight Auto-Wakeup and live fleet observability for DeepSeek Harness. |
| 328 | [SouthM/dsh-nanshan-market-publish](https://github.com/SouthM/dsh-nanshan-market-publish) | 0 | 2026-11-12 | 2026-11-12 | 【南山】DSH插件市场发布：扫描本机正在开发的 DSH 组件，按官方 contributing.md 的要求分两轨引导完成 GitHub 代码提交与插件市场收录 PR，并生成 data/plugins/&lt;owner&gt;__&lt;repo&gt;.yml。 |
| 329 | [SouthM/dsh-nanshan-publish-manager](https://github.com/SouthM/dsh-nanshan-publish-manager) | 0 | 2026-11-12 | 2026-11-12 | 【南山】DSH发布管理：以 npm 包（dsh.bundle + dsh.client）的官方形式，管理本机 DSH 组件的发布设置、发布预检查、npm 发布与发布记录。 |
| 330 | [SouthM/dsh-nanshan-session-manager](https://github.com/SouthM/dsh-nanshan-session-manager) | 0 | 2026-11-12 | 2026-11-12 | 【南山】会话管理：在左侧栏筛选、按 ID 搜索、删除、恢复、导出和导入 DeepSeek Harness 的全部会话。 |
| 331 | [SouthM/life-journey](https://github.com/SouthM/life-journey) | 0 | 2026-11-12 | 2026-11-12 | A left-sidebar journal that records a personal growth journey in one local file. |
| 332 | [spankingsnail/dsh-quickjot](https://github.com/spankingsnail/dsh-quickjot) | 0 | 2026-11-12 | 2026-11-12 | 随手记（仓库名 dsh-quickjot）：DeepSeek Harness 的本机日历插件（便签 / 待办 / 日程 + 应用内与微信提醒） |
| 333 | [spheritier/dsh-plugin-bulk-update](https://github.com/spheritier/dsh-plugin-bulk-update) | 0 | 2026-11-12 | 2026-11-12 | Check installed DSH registry plugins for compatible updates and apply the versions you select. |
| 334 | [Ssupervipuser/dsh-archived-cleanup](https://github.com/Ssupervipuser/dsh-archived-cleanup) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: list and permanently delete archived conversations, freeing their logs, cached projections, and workspace entries. |
| 335 | [StarsObserverEric/dsh-multi-key-orchestrator](https://github.com/StarsObserverEric/dsh-multi-key-orchestrator) | 0 | 2026-11-12 | 2026-11-12 | 把同一个对话的请求轮流分给同一服务方下的多把 API Key，均匀消耗各自额度；支持服务方/模型/单 Key 三级并发上限、为主进程保留槽位、429 自动换 Key 重试。 Spread one conversation's requests across several API keys of the same provider — per-provider/model/key caps, a reserved slot for the main process, and 429 recovery. |
| 336 | [stealthpro/dsh-composer-balance](https://github.com/stealthpro/dsh-composer-balance) | 0 | 2026-11-12 | 2026-11-12 | Shows the remaining DeepSeek account balance under the message composer, with a details popover and a peak/off-peak pricing badge |
| 337 | [strangeyu911-tech/dsh-composer-autocomplete](https://github.com/strangeyu911-tech/dsh-composer-autocomplete) | 0 | 2026-11-12 | 2026-11-12 | Inline ghost-text next-word prediction for the DeepSeek Harness composer |
| 338 | [StudentBuilding-Studio/dsh-search-pull](https://github.com/StudentBuilding-Studio/dsh-search-pull) | 0 | 2026-11-12 | 2026-11-12 | 让 DeepSeek Harness 的 agent 更愿意先联网再回答——尤其是开发类问题：现成的开源实现优先复用，而不是凭记忆从头推导。 |
| 339 | [Sunshow/dsh-recent-sessions](https://github.com/Sunshow/dsh-recent-sessions) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 侧栏「最近会话」：浮层按最后活动列出最近会话，点一行切过去并定位工作区；子代理会话可折叠进主会话 / 隐藏 / 单独列出。 Recent sessions sheet with subagent folding for DSH. |
| 340 | [superShen0916/dsh-work-skin](https://github.com/superShen0916/dsh-work-skin) | 0 | 2026-11-12 | 2026-11-12 | DSH 一键换肤 · 13 套插画主题，支持壁纸预览、切换与恢复默认 |
| 341 | [suqing114/dsh-tool-switch](https://github.com/suqing114/dsh-tool-switch) | 0 | 2026-11-12 | 2026-11-12 | Per-session tool switch for DeepSeek Harness: pick which tools the model may use, grouped picker under the composer, applies immediately |
| 342 | [Swcmb/dsh-context-bili-bridge](https://github.com/Swcmb/dsh-context-bili-bridge) | 0 | 2026-11-12 | 2026-11-12 | Merge DSH's duplicate 上下文 tabs into one, replace dsh-context's sponsor slot with a billion-context ledger switch, and feed the real token/cache numbers into dsh-context's statistics card |
| 343 | [swrabbit/dsh-keeper](https://github.com/swrabbit/dsh-keeper) | 0 | 2026-11-12 | 2026-11-12 | DSH 管家是一个带左侧栏入口的 DSH 插件。它把散落在 DSH 各处的事情收进一个管理页： 按工作区查看和清理会话、查看插件与侧栏入口、管理删除后的回收站，以及设置任务完成、 失败或等待操作时的横幅和提示音。 |
| 344 | [taxah92/dsh-nanogpt](https://github.com/taxah92/dsh-nanogpt) | 0 | 2026-11-07 | 2026-11-12 | NanoGPT PRO subscription models for DeepSeek Harness: curated model picker, ×2 rate, reasoning levels, quota |
| 345 | [taxueseek/dsh-suggestion-chips](https://github.com/taxueseek/dsh-suggestion-chips) | 0 | 2026-11-12 | 2026-11-12 | Clickable suggestion chips under every reply for DeepSeek Harness |
| 346 | [thegabopacheco-sudo/dsh-plugin-agent-router](https://github.com/thegabopacheco-sudo/dsh-plugin-agent-router) | 0 | 2026-11-12 | 2026-11-12 | Recomienda modelo/agente para una tarea segun fortalezas, presupuesto y contexto requerido, con reglas locales y explicaciones. |
| 347 | [thegabopacheco-sudo/dsh-plugin-api-probe](https://github.com/thegabopacheco-sudo/dsh-plugin-api-probe) | 0 | 2026-11-12 | 2026-11-12 | Prueba endpoints HTTP de hosts permitidos: status, latencia, content-type, tamano y primeras lineas de respuesta, con contrato esperado. |
| 348 | [thegabopacheco-sudo/dsh-plugin-asset-optimizer](https://github.com/thegabopacheco-sudo/dsh-plugin-asset-optimizer) | 0 | 2026-11-12 | 2026-11-12 | Optimiza imagenes y videos para web con ffmpeg: reduce resolucion/calidad, convierte formato y reporta tamano antes/despues. |
| 349 | [thegabopacheco-sudo/dsh-plugin-changelog-gen](https://github.com/thegabopacheco-sudo/dsh-plugin-changelog-gen) | 0 | 2026-11-12 | 2026-11-12 | Genera CHANGELOG Markdown desde commits git, agrupando por tipo convencional (feat/fix/docs/etc.) y opcionalmente guardando el archivo. |
| 350 | [thegabopacheco-sudo/dsh-plugin-chart-builder](https://github.com/thegabopacheco-sudo/dsh-plugin-chart-builder) | 0 | 2026-11-12 | 2026-11-12 | Genera graficos SVG (barra/linea) desde etiquetas y valores, con vista previa, guardado confirmado y sin dependencias externas. |
| 351 | [thegabopacheco-sudo/dsh-plugin-clipboard-history](https://github.com/thegabopacheco-sudo/dsh-plugin-clipboard-history) | 0 | 2026-11-12 | 2026-11-12 | Historial local de portapapeles en Windows: captura el texto actual, busca en el historial y lo vuelve a copiar con confirmacion. |
| 352 | [thegabopacheco-sudo/dsh-plugin-code-search](https://github.com/thegabopacheco-sudo/dsh-plugin-code-search) | 0 | 2026-11-12 | 2026-11-12 | Busca simbolos (funciones, clases, exports, constantes) en un proyecto local con archivo y linea, soportando JS/TS/Python/Go/Rust, sin indices externos. |
| 353 | [thegabopacheco-sudo/dsh-plugin-commit-craft](https://github.com/thegabopacheco-sudo/dsh-plugin-commit-craft) | 0 | 2026-11-12 | 2026-11-12 | Sugiere mensajes de commit convencionales a partir del diff y los archivos cambiados, clasificando tipo y scope, sin hacer commit. |
| 354 | [thegabopacheco-sudo/dsh-plugin-config-doctor](https://github.com/thegabopacheco-sudo/dsh-plugin-config-doctor) | 0 | 2026-11-12 | 2026-11-12 | Diagnostico de configuraciones de plugins de DeepSeek Harness: valida JSON, campos obligatorios, tokens vacios, rutas inexistentes y webhooks invalidos, y sugiere correcciones. |
| 355 | [thegabopacheco-sudo/dsh-plugin-context-meter](https://github.com/thegabopacheco-sudo/dsh-plugin-context-meter) | 0 | 2026-11-12 | 2026-11-12 | Medidor de contexto por sesion de DeepSeek Harness: lee la cache de proyeccion, muestra presion de contexto, desglose de tokens (sistema/tools/mensajes), uso ultimo y sesiones recientes con recomendaciones. |
| 356 | [thegabopacheco-sudo/dsh-plugin-conversation-digest](https://github.com/thegabopacheco-sudo/dsh-plugin-conversation-digest) | 0 | 2026-11-12 | 2026-11-12 | Resumen extractivo de una sesion de DeepSeek Harness: prompts clave, respuestas, tools usadas, errores y siguientes pasos, sin inventar contenido. |
| 357 | [thegabopacheco-sudo/dsh-plugin-csv-cleaner](https://github.com/thegabopacheco-sudo/dsh-plugin-csv-cleaner) | 0 | 2026-11-12 | 2026-11-12 | Limpia y perfila CSV locales: quita filas vacias, duplicados, espacios, normaliza encabezados y reporta cambios, con vista previa y guardado confirmado. |
| 358 | [thegabopacheco-sudo/dsh-plugin-daily-brief](https://github.com/thegabopacheco-sudo/dsh-plugin-daily-brief) | 0 | 2026-11-12 | 2026-11-12 | Resumen diario para DeepSeek Harness: sesiones recientes con metricas, decisiones del dia, uso de tokens y pendientes, con brief Markdown guardable. |
| 359 | [thegabopacheco-sudo/dsh-plugin-data-contract](https://github.com/thegabopacheco-sudo/dsh-plugin-data-contract) | 0 | 2026-11-12 | 2026-11-12 | Valida e infiere contratos JSON: schema-lite con required, tipos, enums y rangos para archivos o texto JSON, con errores por ruta. |
| 360 | [thegabopacheco-sudo/dsh-plugin-decision-log](https://github.com/thegabopacheco-sudo/dsh-plugin-decision-log) | 0 | 2026-11-12 | 2026-11-12 | Registro local de decisiones tecnicas de DeepSeek Harness: guarda decision, contexto, alternativas, proyecto y estado, con busqueda, actualizacion y export Markdown. |
| 361 | [thegabopacheco-sudo/dsh-plugin-dependency-doctor](https://github.com/thegabopacheco-sudo/dsh-plugin-dependency-doctor) | 0 | 2026-11-12 | 2026-11-12 | Audita dependencias locales de un proyecto Node: faltantes en node_modules, extraneas y versiones que no coinciden con package.json, sin red. |
| 362 | [thegabopacheco-sudo/dsh-plugin-diff-reviewer](https://github.com/thegabopacheco-sudo/dsh-plugin-diff-reviewer) | 0 | 2026-11-12 | 2026-11-12 | Revisa cambios locales de git como un PR: archivos, lineas, secretos, console.log, TODOs, lockfiles y checklist de riesgo con score. |
| 363 | [thegabopacheco-sudo/dsh-plugin-disk-map](https://github.com/thegabopacheco-sudo/dsh-plugin-disk-map) | 0 | 2026-11-12 | 2026-11-12 | Mide el uso de disco por carpeta y archivo en una ruta local, mostrando los mayores consumidores con profundidad y top configurables. |
| 364 | [thegabopacheco-sudo/dsh-plugin-docker-doctor](https://github.com/thegabopacheco-sudo/dsh-plugin-docker-doctor) | 0 | 2026-11-12 | 2026-11-12 | Audita Dockerfile y docker-compose de un proyecto: imagen sin pin, root, ADD, secretos en ENV/ARG, descargas ejecutadas y falta de healthcheck, sin construir nada. |
| 365 | [thegabopacheco-sudo/dsh-plugin-driver-report](https://github.com/thegabopacheco-sudo/dsh-plugin-driver-report) | 0 | 2026-11-12 | 2026-11-12 | Reporte de drivers y dispositivos de Windows: nombre, estado, fabricante y version desde PowerShell, solo lectura. |
| 366 | [thegabopacheco-sudo/dsh-plugin-env-doctor](https://github.com/thegabopacheco-sudo/dsh-plugin-env-doctor) | 0 | 2026-11-12 | 2026-11-12 | Valida variables de entorno de un proyecto: compara .env/.env.example con las variables usadas en el codigo, detecta faltantes y no usadas sin mostrar valores. |
| 367 | [thegabopacheco-sudo/dsh-plugin-error-digest](https://github.com/thegabopacheco-sudo/dsh-plugin-error-digest) | 0 | 2026-11-12 | 2026-11-12 | Resumen de errores del harness: escanea transcripciones de sesiones y auditorias locales, agrupa errores repetidos por firma, categoria y sesion, y muestra ejemplos con contexto. |
| 368 | [thegabopacheco-sudo/dsh-plugin-event-log-reader](https://github.com/thegabopacheco-sudo/dsh-plugin-event-log-reader) | 0 | 2026-11-12 | 2026-11-12 | Lee y resume eventos recientes de Windows (System/Application) con nivel, proveedor y mensaje, solo lectura. |
| 369 | [thegabopacheco-sudo/dsh-plugin-focus-session](https://github.com/thegabopacheco-sudo/dsh-plugin-focus-session) | 0 | 2026-11-12 | 2026-11-12 | Modo concentracion: minimiza ventanas que coincidan con patrones configurables, con dry-run por defecto y confirmacion, sin cerrar apps. |
| 370 | [thegabopacheco-sudo/dsh-plugin-forecast-lite](https://github.com/thegabopacheco-sudo/dsh-plugin-forecast-lite) | 0 | 2026-11-12 | 2026-11-12 | Pronostica series numericas con media movil o regresion lineal simple, mostrando tendencia, estadisticas y predicciones, con guardado opcional. |
| 371 | [thegabopacheco-sudo/dsh-plugin-image-batch](https://github.com/thegabopacheco-sudo/dsh-plugin-image-batch) | 0 | 2026-11-12 | 2026-11-12 | Procesa imagenes por lote con ffmpeg: redimensiona, convierte y ajusta calidad en una carpeta, con vista previa, confirmacion y rutas permitidas. |
| 372 | [thegabopacheco-sudo/dsh-plugin-json-transform](https://github.com/thegabopacheco-sudo/dsh-plugin-json-transform) | 0 | 2026-11-12 | 2026-11-12 | Transforma JSON local sin eval: pick/omit/rename, flatten, ordenar, limitar, filtrar por campo y get por ruta, con salida y guardado confirmado. |
| 373 | [thegabopacheco-sudo/dsh-plugin-log-analyzer](https://github.com/thegabopacheco-sudo/dsh-plugin-log-analyzer) | 0 | 2026-11-12 | 2026-11-12 | Analiza logs locales: cuenta severidades, agrupa mensajes por firma, detecta patrones de fallo, rango temporal y top errores, sin enviar datos a ningun lado. |
| 374 | [thegabopacheco-sudo/dsh-plugin-mcp-health](https://github.com/thegabopacheco-sudo/dsh-plugin-mcp-health) | 0 | 2026-11-12 | 2026-11-12 | Salud historica de servidores MCP de DeepSeek Harness: handshake periodico, latencia, uptime por servidor y persistencia de muestras en cache local. |
| 375 | [thegabopacheco-sudo/dsh-plugin-media-index](https://github.com/thegabopacheco-sudo/dsh-plugin-media-index) | 0 | 2026-11-12 | 2026-11-12 | Indexa y busca archivos de media locales con ffprobe: duracion, resolucion, codecs y tamano, filtros por nombre o metadatos. |
| 376 | [thegabopacheco-sudo/dsh-plugin-memory-timeline](https://github.com/thegabopacheco-sudo/dsh-plugin-memory-timeline) | 0 | 2026-11-12 | 2026-11-12 | Linea de tiempo local de memoria y notas de DeepSeek Harness: registra eventos, lee notas de Hermano y busca por texto con filtros por fuente y fecha. |
| 377 | [thegabopacheco-sudo/dsh-plugin-metric-dashboard](https://github.com/thegabopacheco-sudo/dsh-plugin-metric-dashboard) | 0 | 2026-11-12 | 2026-11-12 | Genera un dashboard SVG con tarjetas KPI y barras desde metricas JSON o CSV, con vista previa y guardado confirmado, sin dependencias. |
| 378 | [thegabopacheco-sudo/dsh-plugin-mock-server](https://github.com/thegabopacheco-sudo/dsh-plugin-mock-server) | 0 | 2026-11-12 | 2026-11-12 | Levanta un servidor HTTP local de mocks (rutas y respuestas configurables) para probar integraciones, con start/stop y confirmacion. |
| 379 | [thegabopacheco-sudo/dsh-plugin-network-diag](https://github.com/thegabopacheco-sudo/dsh-plugin-network-diag) | 0 | 2026-11-12 | 2026-11-12 | Diagnostico de red local: resuelve DNS y comprueba puertos TCP con latencia, solo hosts permitidos. |
| 380 | [thegabopacheco-sudo/dsh-plugin-plan-checker](https://github.com/thegabopacheco-sudo/dsh-plugin-plan-checker) | 0 | 2026-11-12 | 2026-11-12 | Valida planes de trabajo en Markdown para DeepSeek Harness: pasos, criterios de aceptacion, riesgos, rollback y verificacion, con score y hallazgos accionables. |
| 381 | [thegabopacheco-sudo/dsh-plugin-podcast-clipper](https://github.com/thegabopacheco-sudo/dsh-plugin-podcast-clipper) | 0 | 2026-11-12 | 2026-11-12 | Detecta silencios en audio con ffmpeg y opcionalmente los recorta, reportando duracion original/final e intervalos reales. |
| 382 | [thegabopacheco-sudo/dsh-plugin-preferences-sync](https://github.com/thegabopacheco-sudo/dsh-plugin-preferences-sync) | 0 | 2026-11-12 | 2026-11-12 | Hub de preferencias para DeepSeek Harness: guarda claves por categoria, importa/exporta PREFERENCIAS en Markdown y mantiene una fuente unica para los plugins. |
| 383 | [thegabopacheco-sudo/dsh-plugin-process-manager](https://github.com/thegabopacheco-sudo/dsh-plugin-process-manager) | 0 | 2026-11-12 | 2026-11-12 | Lista y termina procesos de Windows con filtros y orden por memoria, con confirmacion para matar y reporte real de PIDs. |
| 384 | [thegabopacheco-sudo/dsh-plugin-project-context](https://github.com/thegabopacheco-sudo/dsh-plugin-project-context) | 0 | 2026-11-12 | 2026-11-12 | Contexto de proyecto para DeepSeek Harness: escanea manifiestos, README, stack, git y archivos recientes, y genera un pack de contexto Markdown guardable. |
| 385 | [thegabopacheco-sudo/dsh-plugin-prompt-vault](https://github.com/thegabopacheco-sudo/dsh-plugin-prompt-vault) | 0 | 2026-11-12 | 2026-11-12 | Biblioteca local de prompts para DeepSeek Harness: guarda plantillas con variables, busca, renderiza y organiza por etiquetas, con confirmacion para escribir y auditoria. |
| 386 | [thegabopacheco-sudo/dsh-plugin-provider-usage](https://github.com/thegabopacheco-sudo/dsh-plugin-provider-usage) | 0 | 2026-11-12 | 2026-11-12 | Uso y rendimiento por proveedor/modelo en DeepSeek Harness: agrega tokens de entrada/salida/cache, cache hit rate, velocidad de decodificacion y TTFT por sesion y modelo. |
| 387 | [thegabopacheco-sudo/dsh-plugin-recovery-snapshot](https://github.com/thegabopacheco-sudo/dsh-plugin-recovery-snapshot) | 0 | 2026-11-12 | 2026-11-12 | Snapshots de configuracion de plugins de DeepSeek Harness con manifiesto SHA-256, verificacion de integridad y restauracion segura con confirmacion. |
| 388 | [thegabopacheco-sudo/dsh-plugin-repo-map](https://github.com/thegabopacheco-sudo/dsh-plugin-repo-map) | 0 | 2026-11-12 | 2026-11-12 | Mapa de un repositorio para DeepSeek Harness: estructura, entrypoints, lenguajes, conteo de archivos/lineas y rama git en Markdown. |
| 389 | [thegabopacheco-sudo/dsh-plugin-rss-digest](https://github.com/thegabopacheco-sudo/dsh-plugin-rss-digest) | 0 | 2026-11-12 | 2026-11-12 | Lee feeds RSS/Atom de hosts permitidos y genera un resumen Markdown con titulos, fechas y enlaces, con timeout y sin inventar contenido. |
| 390 | [thegabopacheco-sudo/dsh-plugin-sandbox-sim](https://github.com/thegabopacheco-sudo/dsh-plugin-sandbox-sim) | 0 | 2026-11-12 | 2026-11-12 | Simula y clasifica el riesgo de acciones antes de ejecutarlas en DeepSeek Harness: comandos destructivos, red, escrituras, secretos y rutas fuera de allowedPaths, con alternativas seguras. |
| 391 | [thegabopacheco-sudo/dsh-plugin-scheduled-health](https://github.com/thegabopacheco-sudo/dsh-plugin-scheduled-health) | 0 | 2026-11-12 | 2026-11-12 | Chequeos locales de salud (disco libre, memoria, archivos) con historial en cache para ejecutar periodicamente desde automatizaciones. |
| 392 | [thegabopacheco-sudo/dsh-plugin-secrets-scanner](https://github.com/thegabopacheco-sudo/dsh-plugin-secrets-scanner) | 0 | 2026-11-12 | 2026-11-12 | Escanea un proyecto local en busca de secretos y credenciales (claves, tokens, passwords, claves privadas) con patrones, enmascarado y excluding de dependencias. |
| 393 | [thegabopacheco-sudo/dsh-plugin-session-export](https://github.com/thegabopacheco-sudo/dsh-plugin-session-export) | 0 | 2026-11-12 | 2026-11-12 | Exporta sesiones de DeepSeek Harness a Markdown o JSON: cabecera con metricas, turnos prompt/respuesta y transcripcion, con preview sin escribir, confirmacion y rutas permitidas. |
| 394 | [thegabopacheco-sudo/dsh-plugin-session-search](https://github.com/thegabopacheco-sudo/dsh-plugin-session-search) | 0 | 2026-11-12 | 2026-11-12 | Buscador del historial de sesiones de DeepSeek Harness: indexa sesiones locales (transcripciones zstd y cache de proyeccion), busca por texto, lista recientes y extrae fragmentos. |
| 395 | [thegabopacheco-sudo/dsh-plugin-skill-index](https://github.com/thegabopacheco-sudo/dsh-plugin-skill-index) | 0 | 2026-11-12 | 2026-11-12 | Indice local de skills para DeepSeek Harness: escanea carpetas con SKILL.md, extrae nombre/descripcion/cuando usarla y permite buscar y leer skills. |
| 396 | [thegabopacheco-sudo/dsh-plugin-sql-runner](https://github.com/thegabopacheco-sudo/dsh-plugin-sql-runner) | 0 | 2026-11-12 | 2026-11-12 | Ejecuta consultas SQL sobre SQLite local (node:sqlite): lista tablas, SELECT con limite y escrituras solo con confirmacion y rutas permitidas. |
| 397 | [thegabopacheco-sudo/dsh-plugin-startup-auditor](https://github.com/thegabopacheco-sudo/dsh-plugin-startup-auditor) | 0 | 2026-11-12 | 2026-11-12 | Audita apps de inicio de Windows: carpeta Startup y claves Run del registro, marcando entradas sospechosas. |
| 398 | [thegabopacheco-sudo/dsh-plugin-task-board](https://github.com/thegabopacheco-sudo/dsh-plugin-task-board) | 0 | 2026-11-12 | 2026-11-12 | Tablero kanban local para DeepSeek Harness: tarjetas con columnas, prioridad, proyecto y notas, con movimiento, historial y estado por columna. |
| 399 | [thegabopacheco-sudo/dsh-plugin-test-runner](https://github.com/thegabopacheco-sudo/dsh-plugin-test-runner) | 0 | 2026-11-12 | 2026-11-12 | Ejecuta y resume tests de un proyecto local para DeepSeek Harness: detecta scripts (npm/pnpm/yarn/pytest), corre con timeout y reporta pass/fail con salida real. |
| 400 | [thegabopacheco-sudo/dsh-plugin-thumbnail-designer](https://github.com/thegabopacheco-sudo/dsh-plugin-thumbnail-designer) | 0 | 2026-11-12 | 2026-11-12 | Disena miniaturas SVG para videos/posts: titulo, subtitulo, badge, gradiente y color de acento, con vista previa y guardado confirmado. |
| 401 | [thegabopacheco-sudo/dsh-plugin-todo-bridge](https://github.com/thegabopacheco-sudo/dsh-plugin-todo-bridge) | 0 | 2026-11-12 | 2026-11-12 | Puente de tareas para DeepSeek Harness: lista de tareas local con prioridad y proyecto, importa todos de sesiones y exporta a TODO.md. |
| 402 | [thegabopacheco-sudo/dsh-plugin-tool-builder](https://github.com/thegabopacheco-sudo/dsh-plugin-tool-builder) | 0 | 2026-11-12 | 2026-11-12 | Genera el esqueleto de un plugin MCP para DeepSeek Harness (package.json, cordis, server.mjs, tests, docs) a partir de nombre y descripcion, sin inventar logica. |
| 403 | [thegabopacheco-sudo/dsh-plugin-tool-doctor](https://github.com/thegabopacheco-sudo/dsh-plugin-tool-doctor) | 0 | 2026-11-12 | 2026-11-12 | Diagnostico de servidores MCP instalados en DeepSeek Harness: arranca cada runtime en un DSH_HOME aislado, hace handshake MCP, lista sus tools y reporta los que fallan con stderr y duracion. |
| 404 | [thegabopacheco-sudo/dsh-plugin-turn-analytics](https://github.com/thegabopacheco-sudo/dsh-plugin-turn-analytics) | 0 | 2026-11-12 | 2026-11-12 | Analitica de turnos y pasos de sesiones de DeepSeek Harness: tiempos LLM vs tools, tamano de turnos, timeline de prompts/respuestas y metricas por sesion. |
| 405 | [thegabopacheco-sudo/dsh-plugin-video-watermark](https://github.com/thegabopacheco-sudo/dsh-plugin-video-watermark) | 0 | 2026-11-12 | 2026-11-12 | Superpone una marca de agua (imagen) sobre un video con ffmpeg: posicion, opacidad y margen configurables, reencode seguro y guardado confirmado. |
| 406 | [thegabopacheco-sudo/dsh-plugin-window-layout](https://github.com/thegabopacheco-sudo/dsh-plugin-window-layout) | 0 | 2026-11-12 | 2026-11-12 | Guarda y restaura layouts de ventanas de Windows (posicion y tamano) mediante UI Automation, con confirmacion y reporte real. |
| 407 | [TheTao-xt/dsh-composer-shot](https://github.com/TheTao-xt/dsh-composer-shot) | 0 | 2026-11-12 | 2026-11-12 | WeChat-style region screenshot button and hide-DSH switch for the DeepSeek Harness composer (Windows 10/11 x64). |
| 408 | [THUjry/HarnessAMS](https://github.com/THUjry/HarnessAMS) | 0 | 2026-08-30 | 2026-11-12 | Use LLM Harness to do AMS design. |
| 409 | [TianzeLuo/dsh-chatgpt-ui](https://github.com/TianzeLuo/dsh-chatgpt-ui) | 0 | 2026-11-12 | 2026-11-12 | A ChatGPT-desktop-style skin for the DSH Web GUI: Chat and Work modes, projects and sessions sidebar, pixel-matched composer and messages, light and dark. All native DSH capabilities stay intact — steps, tasks, goals, file outputs — identical with or without the skin. |
| 410 | [TomJerryGit/dsh-workspace-audit](https://github.com/TomJerryGit/dsh-workspace-audit) | 0 | 2026-11-12 | 2026-11-12 | Local-first workspace health audit for DeepSeek Harness: Git, tests, CI, size, security hotspots, Markdown handover report. |
| 411 | [toss6969/dsh-family-life-check-suite](https://github.com/toss6969/dsh-family-life-check-suite) | 0 | 2026-11-12 | 2026-11-12 | 11 个家庭生活核对技能（DeepSeek Harness 随包技能提供方）：订阅体检、家庭账单、差旅行程、课表排期、作业清单、用药打卡等；本地确定性引擎，转人工显式化。 |
| 412 | [triagmas/dsh-project-evolution](https://github.com/triagmas/dsh-project-evolution) | 0 | 2026-11-12 | 2026-11-12 | Project-isolated, evidence-backed engineering experience and reviewable project skills for DeepSeek Harness. |
| 413 | [triagmas/smart-dictation-dsh](https://github.com/triagmas/smart-dictation-dsh) | 0 | 2026-11-12 | 2026-11-12 | Local Russian dictation for DeepSeek Harness: GigaAM v3, English technical terms, personal glossary, no cloud speech API. |
| 414 | [tzzs/dsh-explore](https://github.com/tzzs/dsh-explore) | 0 | 2026-11-11 | 2026-11-12 | DSH Explore — a branching-conversation canvas plugin for DeepSeek Harness: fork any answer into a new branch on an infinite canvas. |
| 415 | [U0Pin/dsh-unity-game-mode](https://github.com/U0Pin/dsh-unity-game-mode) | 0 | 2026-11-08 | 2026-11-12 | 基于coplay unity mcp的dsh客户端配置插件和桥接器 |
| 416 | [ulasarslan6262-ui/speedbot-agent-plugin](https://github.com/ulasarslan6262-ui/speedbot-agent-plugin) | 0 | 2026-10-08 | 2026-11-12 | Public Speedbot MCP plugin bundle for agent marketplaces. Connect to https://speedbot.dev/mcp/core to discover work, services and collaboration. |
| 417 | [ViolaTan55/dsh-year-report](https://github.com/ViolaTan55/dsh-year-report) | 0 | 2026-11-12 | 2026-11-12 | DSH 年度报告 · Year-in-review plugin for DeepSeek Harness |
| 418 | [visangela/dsh-novel-assistant](https://github.com/visangela/dsh-novel-assistant) | 0 | 2026-11-11 | 2026-11-12 | 给DSH加一个最懂你的“小说助手”：前面写过什么不会忘，改一章不会崩十章，写完能自己核对一遍，还能实时可视化情节进展，人物关系和场景地图。 |
| 419 | [wangyanan520/dsh-skill-workbench](https://github.com/wangyanan520/dsh-skill-workbench) | 0 | 2026-11-12 | 2026-11-12 | DSH 技能中文显示中间层：给技能加中文名/简介/分类，菜单按中文分组，调用仍用英文 /name。Chinese display layer for DSH skills. |
| 420 | [Watchcats211/dsh-podwave](https://github.com/Watchcats211/dsh-podwave) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness plugin: a local-first podcast player for audio files on your disk |
| 421 | [weiaisuyan/dsh-sidebar-entry-manager](https://github.com/weiaisuyan/dsh-sidebar-entry-manager) | 0 | 2026-11-12 | 2026-11-12 | Manage which plugin entries appear in the DeepSeek Harness left sidebar: hide or show any sidebar panel row without disabling the plugin, plus in-plugin update. Bilingual (zh/en). |
| 422 | [whoisyanhaoooo/ZJU-mooc-assistant](https://github.com/whoisyanhaoooo/ZJU-mooc-assistant) | 0 | 2026-11-12 | 2026-11-12 | A DeepSeek Harness plugin for ZJU students on icourse163: course videos, quizzes, exams, discussions, and live task progress. |
| 423 | [winterhuan/dsh-new-api](https://github.com/winterhuan/dsh-new-api) | 0 | 2026-11-12 | 2026-11-12 | New API / One API site console for DeepSeek Harness |
| 424 | [wld007/dsh-medical-hl7](https://github.com/wld007/dsh-medical-hl7) | 0 | 2026-11-12 | 2026-11-12 | HL7 FHIR R4 conversion for de-identified medical records — DeepSeek Harness plugin |
| 425 | [wld007/dsh-medical-ontology](https://github.com/wld007/dsh-medical-ontology) | 0 | 2026-11-12 | 2026-11-12 | 临床本体构建 · Clinical Ontology Builder for DeepSeek Harness (WIP): patient-level disease-course ontology with treatment decisions as nodes |
| 426 | [wlerry/dsh-spend-trend](https://github.com/wlerry/dsh-spend-trend) | 0 | 2026-11-11 | 2026-11-12 | DeepSeek Harness 插件，省钱小助手，消耗峰谷图 |
| 427 | [wmingzhou7-cell/DSH-English-learning](https://github.com/wmingzhou7-cell/DSH-English-learning) | 0 | 2026-11-11 | 2026-11-12 | You can learn English in combination with your conversation at any time when using DSH |
| 428 | [wngzwng/dsh-prompt-library](https://github.com/wngzwng/dsh-prompt-library) | 0 | 2026-11-12 | 2026-11-12 | Prompt Library for DeepSeek Harness (DSH): save, tag, rate, search and reuse prompts; quick picker beside the composer; local storage with CSV/JSON backup. |
| 429 | [Wolfloiz/plugin-janus](https://github.com/Wolfloiz/plugin-janus) | 0 | 2026-11-11 | 2026-11-12 | Bidirectional control between DeepSeek Harness and Herdr |
| 430 | [wonvi/five-aspect-review](https://github.com/wonvi/five-aspect-review) | 0 | 2026-11-12 | 2026-11-12 | 五面盘点：从开拓、做大、落地、立规矩、家底五个方面盘清一件事，找盲区、定先后。WorkBuddy / 豆包 / DeepSeek Harness 通用技能。 |
| 431 | [wu1yi2fan/dsh-qqbot-suite](https://github.com/wu1yi2fan/dsh-qqbot-suite) | 0 | 2026-11-04 | 2026-11-12 | QQ Bot plugin suite for DSH (Cordis) |
| 432 | [xiaopu-ai/dsh-plugin-crm](https://github.com/xiaopu-ai/dsh-plugin-crm) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：把几个系统导出的客户表拖进来，自动清洗、合并、分层，右边常驻的 AI 助手帮你看经销商、线索和触达，出名单和报告；数据只在本机。 |
| 433 | [xiaopu-ai/dsh-plugin-media](https://github.com/xiaopu-ai/dsh-plugin-media) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：一个页面看抖音、小红书、公众号、视频号多个账号的数据，带每日 AI 简报和 AI 助手；扫码登录，数据只在本机。 |
| 434 | [xiaopu-ai/dsh-plugin-promo](https://github.com/xiaopu-ai/dsh-plugin-promo) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness 插件：把产品照片和说明交给 AI，六步做出一条宣传片（资料 → 方向 → 剧本 → 定素材 → 视频生成 → 剪辑）；火山方舟 Seedream + Seedance 2.0，花钱前先报价，项目只存在本机。 |
| 435 | [xiaoshuzh/dsh-task-desk](https://github.com/xiaoshuzh/dsh-task-desk) | 0 | 2026-11-12 | 2026-11-12 | 任务台 · A project › issue › step task tree for DeepSeek Harness: unfinished work carries over to every later day, with day, week and project views, and agents report progress through a tool you review. |
| 436 | [Xraytest/exneo-useful-dsh-workshop](https://github.com/Xraytest/exneo-useful-dsh-workshop) | 0 | 2026-10-21 | 2026-11-12 | DSH 插件市场：36 个可安装 bundle 插件的 monorepo（模型路由、会话管理、用量统计、权限审计、多设备网格、界面增强），每个都自带 cordis.patch.yml，可直接 install_bundle；plugins/ 下另含 1 个 ofm 宿主垫片。 |
| 437 | [Xumi0920/dsh-deepseek-chat-mode](https://github.com/Xumi0920/dsh-deepseek-chat-mode) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Chat / Work mode switch for DeepSeek Harness: full-screen web chat in the right sidebar and one-click handoff to a new DSH task. |
| 438 | [XX-Q/dsh-service-console](https://github.com/XX-Q/dsh-service-console) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness (DSH) 插件：跨对话的持久化任务台。一张表看清本机服务与后台任务哪些在跑、哪些以前在跑现在停了、哪些从没跑过；一键启停 + GUI 弹窗面板 + task-console 编码规范 skill。 |
| 439 | [Yang-unplugged/dsh-qundao-doc](https://github.com/Yang-unplugged/dsh-qundao-doc) | 0 | 2026-11-12 | 2026-11-12 | 群岛文档：按飞书文档交互复刻的本地富文本编辑器，作为 DeepSeek Harness 侧栏面板运行 \| Local-first document editor for DSH |
| 440 | [yangmu-dot/bot-workbench](https://github.com/yangmu-dot/bot-workbench) | 0 | 2026-11-12 | 2026-11-12 | 这个是仿照grokbot-office做的dsh插件，新加入了会议功能，在会议中可以和bot讨论并且进行立项和分派任务的行为 |
| 441 | [yhm138/dsh-image-rescue](https://github.com/yhm138/dsh-image-rescue) | 0 | 2026-11-12 | 2026-11-12 | DeepSeek Harness Host plugin: oversized image attachments are stored byte-for-byte as files and handed to the model by path instead of being rejected by the 8192px vision limit. |
| 442 | [yinmyu/dsh-costops-hub](https://github.com/yinmyu/dsh-costops-hub) | 0 | 2026-11-12 | 2026-11-12 | CostOps Hub (省流中台) — a cross-session token cost ledger for DeepSeek Harness: official list prices per request, local-vs-cloud route rules, session drill-down and CSV export. |
| 443 | [yinmyu/dsh-session-manager](https://github.com/yinmyu/dsh-session-manager) | 0 | 2026-11-12 | 2026-11-12 | Batch-manage DeepSeek Harness sessions from a left-sidebar panel: archive, a 30-day recycle bin with undo, tiered deletion risk, and a self-verifying attachment cleanup. |
| 444 | [yjh248619/dsh-select-assist-plus](https://github.com/yjh248619/dsh-select-assist-plus) | 0 | 2026-11-10 | 2026-11-12 | 划词助手 Plus（dsh-select-assist-plus）：DSH / Codex / Claude 桌面划词浮窗，支持解释、总结、翻译与引用进当前会话，含 LaTeX 公式渲染、多窗口并存、折叠与最小化到任务栏。 |
| 445 | [yjnmedia/dsh-skill-order](https://github.com/yjnmedia/dsh-skill-order) | 0 | 2026-11-11 | 2026-11-12 | DSH 技能管家：排序、改名、自动规范，改完立刻生效。 |
| 446 | [ymf2317-tech/dsh-rail-order](https://github.com/ymf2317-tech/dsh-rail-order) | 0 | 2026-11-12 | 2026-11-12 | Drag-to-order for the DeepSeek Harness left rail: panel icons, pinned sessions, workspaces, sessions and view tabs. Frozen fork of dsh-sidebar-entries. |
| 447 | [yuexushuang/dsh-geojson-map-viewer](https://github.com/yuexushuang/dsh-geojson-map-viewer) | 0 | 2026-11-12 | 2026-11-12 | GeoJSON Map Viewer plugin for Deepseek Harness |
| 448 | [yumingtao/agent-skills](https://github.com/yumingtao/agent-skills) | 0 | 2026-10-29 | 2026-11-12 | Original, platform-neutral agent skills: prompt assets that work across Claude Code, Codex, Cursor, OpenCode, Windsurf, Gemini, GitHub Copilot, CodeBuddy, and Hermes. |
| 449 | [Yutai233/dsh-daily-report](https://github.com/Yutai233/dsh-daily-report) | 0 | 2026-11-12 | 2026-11-12 | 把本机的 DSH 会话整理成一份能快速读完的简报：今天做了哪些工作、Token花费、工作阻碍、目标和健康提醒。 |
| 450 | [YuzhenZhou1327/dsh-quote](https://github.com/YuzhenZhou1327/dsh-quote) | 0 | 2026-11-12 | 2026-11-12 | 可以引用侧边栏内容的引用插件 |
| 451 | [z324169276/hubei-exam-skills](https://github.com/z324169276/hubei-exam-skills) | 0 | 2026-11-12 | 2026-11-12 | 湖北技能高考计算机类 Agent Skills：按考纲出题、整卷组卷、判分与错因分析 |
| 452 | [zb5594921/dsh-dev-toolbox](https://github.com/zb5594921/dsh-dev-toolbox) | 0 | 2026-11-12 | 2026-11-12 | Timestamp converter, Gson-style JSON formatter/validator, AES encrypt/decrypt and random string generator for DeepSeek Harness. |
| 453 | [ZhaoZiyangShaanxi/dsh-go-workbuddy](https://github.com/ZhaoZiyangShaanxi/dsh-go-workbuddy) | 0 | 2026-11-12 | 2026-11-12 | DSH Go 原生 WorkBuddy 插件：登录授权、积分余额与消耗明细、模型对话。基于 MIT 上游 dsh-connect-workbuddy。 |
| 454 | [ZHI00/dsh-model-requests](https://github.com/ZHI00/dsh-model-requests) | 0 | 2026-11-12 | 2026-11-12 | Requests tab for DeepSeek Harness: per-request model, throughput, TTFT and token usage, with details one click away. |
| 455 | [ZileiC/dsh-file-recall](https://github.com/ZileiC/dsh-file-recall) | 0 | 2026-11-12 | 2026-11-12 | Local page-level document recall for DeepSeek Harness: find the file and page from a vague description, with verifiable evidence. |
| 456 | [Ztqing4Agents/dsh-skill-panel](https://github.com/Ztqing4Agents/dsh-skill-panel) | 0 | 2026-11-12 | 2026-11-12 | Skill panel for the DSH web GUI: built-in, local and market-installed skills in one list, each with an on/off switch. |
| 457 | [zxrobin01/vmware-console-mcp](https://github.com/zxrobin01/vmware-console-mcp) | 0 | 2026-11-12 | 2026-11-12 | mcp tool to help agents control vmware virtual machines. support local vmware player virtrual machines and esxi servers. |
| 458 | [zyyu1/dsh-session-deleter](https://github.com/zyyu1/dsh-session-deleter) | 0 | 2026-11-12 | 2026-11-12 | Delete DSH sessions from the sidebar: stop the live agent, move the session log to a recoverable trash, and restore it later |
| 459 | [ZzimaR/dsh-yanfield](https://github.com/ZzimaR/dsh-yanfield) | 0 | 2026-11-12 | 2026-11-12 | 在 DeepSeek Harness 里写长篇小说。砚田写作台：正文、大纲、资料与可审阅的 AI 改稿。 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 329604421/agent-todo-plugin
- Alyosha28/dsh-cu-d1
- BErrybearl/dsh-subagent-plus
- chiguiyinhan/dsh-delete-conversation
- clair0314/dsh-ai-digest
- clair0314/dsh-bilibili-viral
- clair0314/dsh-inspiration-vault
- clair0314/dsh-qq-radar
- clair0314/dsh-repo-watcher
- cnhenaihui/dsh-ios-theme
- DDDMUC/dsh-sidebar-declutter
- DX12xyz/dsh-asar-framework
- edynasty/dsh-opencode-go-provider
- George-Java/dsh-tool-governor
- huntersxy/dsh-plugin-toggle
- IdaWasHere/dsh-chat-to-article
- Idreamxkl/dsh-conversation-flat
- JiamingShi-JsPhys/motion-weaver
- JiamingShi-JsPhys/sem-copilot
- jiezhengj/DSH-Anywhere
- kp-z/dsh-dev-git-graph
- KurohaneKaoruko/DSH-Novelist
- LEAFCHINA/dsh-image-workbench
- lerwa2025-a11y/dsh-conversation-avatar
- Lostforest7/dsh-apirevise
- Lostforest7/dsh-encoding
- Lostforest7/dsh-revise
- Lostforest7/dsh-sheetflow
- Lylgj/dsh-stm32-toolkit
- Lzfbite/dsh-github-ops
- NingYuanLee/dsh-grok-byapi
- NingYuanLee/dsh-minimax-byapi
- ruisenbai/dsh-turn-fold
- SilverIodide42/dsh-session-manager
- sliverp/dsh-hub-plugin
- sweet560/dsh-session-guardian
- tangbut1/dsh-plugin-voice-input
- xzyonline/dsh-chat-files
- xzyonline/dsh-vision
- yffo/dsh-operator
- yjh248619/dsh-select-assist
- ywleeo/dsh-balance
- ywleeo/dsh-image-preview
- zhuyuhan327/deepseek-harness-reader
