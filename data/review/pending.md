# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-05**
- 快照日期 / Snapshot date: **2026-11-05 (UTC)**
- 待审核 / Pending: **483**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **50**
- Star 异常增长 / Star-growth alerts: **15** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-04** / vs previous snapshot **2026-11-04**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **15**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 待审 / pending | 27311 | — | 4528 | 618d | 待审高星 | 核准即 Top 1 |
| ⚠️ [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 待审 / pending | 4437 | — | 596 | 24d | 待审高星 | 核准即 Top 8 |
| ⚠️ [frostming/dsh-hongguo](https://github.com/frostming/dsh-hongguo) | 待审 / pending | 128 | — | 16 | 0d | 待审高星 | 核准即榜 #172；创建 0 天 |
| ⚠️ [Fishsb/dsh-voice-prompt-enhancer](https://github.com/Fishsb/dsh-voice-prompt-enhancer) | 待审 / pending | 121 | -1 | 14 | 83d | 待审高星 | 核准即榜 #181 |
| ⚠️ [diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) | 待审 / pending | 115 | — | 7 | 86d | 待审高星 | 核准即榜 #183 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 62240 | +1605 | 1680 | 41d | 日增百星 | 日增 +1605★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10985 | +239 | 413 | 82d | 日增百星 | 日增 +239★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5284 | +224 | 102 | 80d | 日增百星 | 日增 +224★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 1934 | +198 | 159 | 82d | 日增百星 | 日增 +198★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5716 | +163 | 531 | 28d | 日增百星 | 日增 +163★ |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 17433 | +162 | 603 | 83d | 日增百星 | 日增 +162★；已不进榜单 |
| ⚠️ [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 已核准 / approved | 28796 | +125 | 3112 | 199d | 日增百星 | 日增 +125★；已不进榜单 |
| ⚠️ [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 已核准 / approved | 37603 | +110 | 4847 | 213d | 日增百星 | 日增 +110★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 6990 | +107 | 345 | 83d | 日增百星 | 日增 +107★ |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4247 | +102 | 180 | 82d | 日增百星 | 日增 +102★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) ⚠️ | 27311 | 2025-02-24 | 2026-11-05 | Let's use AI to Earn! |
| 2 | [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) ⚠️ | 4437 | 2026-10-11 | 2026-11-05 | Let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak. |
| 3 | [frostming/dsh-hongguo](https://github.com/frostming/dsh-hongguo) ⚠️ | 128 | 2026-11-04 | 2026-11-05 | DSH plugin: watch Hongguo short dramas in the right sidebar while the agent works (built on openhongguo) |
| 4 | [Fishsb/dsh-voice-prompt-enhancer](https://github.com/Fishsb/dsh-voice-prompt-enhancer) ⚠️ | 121 | 2026-08-13 | 2026-11-05 | DeepSeek-Harness (DSH) 插件：✨ 提示词一键增强（5 模式·模型链·记忆链）+ 💬 语音输入增强（热键·说完自动停·口水词清理·语音纠错） |
| 5 | [diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) ⚠️ | 115 | 2026-08-10 | 2026-11-05 | Recent memories stay detailed. Older ones grow concise. Important ones live on.近期记忆保持详细，旧记忆逐渐精简，重要记忆长期存在。 |
| 6 | [louke6572/dsh-Dfy](https://github.com/louke6572/dsh-Dfy) | 88 | 2026-08-25 | 2026-11-05 | DeepSeek Harness (DSH) all-in-one plugin: balance whale widget, 106-clip transparent desktop pet, QQ message card via SnowLuma, Bilibili interaction, local redacted memory. 一个 DSH 插件：小鲸鱼余额挂件 + 桌宠 + QQ 消息卡 + B站 + 双向脱敏记忆；数据只存本机。 |
| 7 | [HiAi-gg/docsmint](https://github.com/HiAi-gg/docsmint) | 81 | 2026-05-25 | 2026-11-05 | Open-source knowledge base for people and AI agents. Rich-text editing, hybrid search, GraphRAG, and MCP. Self-host with Docker or use DocsMint Cloud. |
| 8 | [zhaohongxuan/dsh-weread](https://github.com/zhaohongxuan/dsh-weread) | 64 | 2026-11-04 | 2026-11-05 | 微信读书 dsh 插件：书架管理、年度书墙、阅读统计、AI 总结 \| DeepSeek Harness plugin for WeChat Reading |
| 9 | [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) | 29 | 2026-11-05 | 2026-11-05 | Describe a small game in one sentence, play it in the DeepSeek Harness sidebar, swap in AI art, export one HTML file. |
| 10 | [evoelsewhere/evo-harness](https://github.com/evoelsewhere/evo-harness) | 13 | 2026-08-03 | 2026-11-05 | Evoflux is an open-source, local-first workspace where AI agents build software, conduct deep research, automate browser tasks, and collaborate in parallel. Connect any model, keep control of your workspace and data, and take complex work from idea to completion—all in one place. |
| 11 | [MarchLiu/dsh-cybernetics](https://github.com/MarchLiu/dsh-cybernetics) | 11 | 2026-11-02 | 2026-11-05 | A DSH plugin that explicitly designs LLM agent orchestration as a control loop |
| 12 | [Yuuyuko-uu/dsh-xingxi](https://github.com/Yuuyuko-uu/dsh-xingxi) | 10 | 2026-11-04 | 2026-11-05 | 星汐：把整理好的记忆档案连成一张看得见的星图 |
| 13 | [zh-xx/Antu](https://github.com/zh-xx/Antu) | 8 | 2026-09-09 | 2026-11-05 | Antu · Legal Diagrams turns case JSON into one offline HTML diagram—timelines, procedures, relationships, and court reasoning—for AI agents and legal professionals. |
| 14 | [Chengyunlai/dsh-workbench](https://github.com/Chengyunlai/dsh-workbench) | 5 | 2026-10-30 | 2026-11-05 | DeepSeek Harness 的开发工作台：在对话旁浏览文件、阅读代码与文档、跳转定义、检查 Git 变更，并进行 Python、Go、JS／TS 断点调试。 |
| 15 | [Wahwayhale/dsh-connect-doubao](https://github.com/Wahwayhale/dsh-connect-doubao) | 5 | 2026-10-09 | 2026-11-05 | 复用本机豆包桌面客户端的已登录态接入 DeepSeek Harness：对话、生图、额度看板（5 小时 / 周 / 活动赠送，实时显示还剩多少）。仅 Windows x64。 |
| 16 | [YaoleWu/dsh-session-search-pro](https://github.com/YaoleWu/dsh-session-search-pro) | 5 | 2026-08-14 | 2026-11-05 | Search past and live DeepSeek Harness sessions through the built-in session service. |
| 17 | [Burns1028/moa-plus](https://github.com/Burns1028/moa-plus) | 4 | 2026-11-01 | 2026-11-05 | MoA+ — Make agents work better together. Persistent Coordinator, reusable Workers and shared context for DeepSeek Harness. Unofficial rc.3 preview. |
| 18 | [shinku-xuan/dsh-luna-theme](https://github.com/shinku-xuan/dsh-luna-theme) | 4 | 2026-09-30 | 2026-11-05 | 借鉴 Luna-Chat 视觉语言的 **DeepSeek Harness（DSH）换肤插件**，桌面端与 Web 端通用。 |
| 19 | [LinHao100076/dsh-ssh-remote](https://github.com/LinHao100076/dsh-ssh-remote) | 3 | 2026-11-04 | 2026-11-05 | DSH（DeepSeek Harness）插件：把远端机器当本地用 —— 文件树、终端、SFTP 断点续传、按方向镜像的编辑同步，以及 -L / -D / -R 三种转发。 |
| 20 | [meat-daemon-404/dsh-plugin-immune](https://github.com/meat-daemon-404/dsh-plugin-immune) | 3 | 2026-11-04 | 2026-11-05 | Self-evolving pitfall immunity for coding agents: learn from failed-then-fixed tool calls, inject the lesson before the repeat. npm: dsh-immune-system. ZCode + DeepSeek Harness |
| 21 | [ooooooomygosh/paper-research-coach](https://github.com/ooooooomygosh/paper-research-coach) | 3 | 2026-09-30 | 2026-11-05 | A source-grounded research reading coach with a local PDF workbench, Zotero sync, and portable agent skill. |
| 22 | [YaoleWu/review-workflow](https://github.com/YaoleWu/review-workflow) | 3 | 2026-08-14 | 2026-11-05 | Structured agent reviews with independent panelists, disagreement resolution, and a separate critic. |
| 23 | [appthin/dsh-content-search](https://github.com/appthin/dsh-content-search) | 2 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 对话内容搜索插件. DeepSeek Harness conversation content search plug-in. |
| 24 | [AyanamiiiRei/agent-interactive-terminal](https://github.com/AyanamiiiRei/agent-interactive-terminal) | 2 | 2026-11-04 | 2026-11-05 | Stateful PTY terminal sessions for LLM agents: screen snapshots, key input, wait conditions, and a terminal a human and an agent can share. |
| 25 | [columforge/dsh-session-timeline](https://github.com/columforge/dsh-session-timeline) | 2 | 2026-10-30 | 2026-11-05 | DSH plugin: fishbone session timeline with handoff lineage and manual links |
| 26 | [hongdougao111/dsh-bagu](https://github.com/hongdougao111/dsh-bagu) | 2 | 2026-11-05 | 2026-11-05 | AI 对外说话前的一道门。聊天、评论、邮件、commit、PR、文档、注释都管：过了就发，没过就打回，附一句怎么改。 |
| 27 | [Jaylor-Wang/dsh-agent-loop-experiment](https://github.com/Jaylor-Wang/dsh-agent-loop-experiment) | 2 | 2026-11-05 | 2026-11-05 | Controllable convergence policy and agent loop replacement for DeepSeek Harness (DSH): runtime fingerprinting, finite recovery, file mutation guards, and soft tool requirements. |
| 28 | [Jaylor-Wang/dsh-plugin-agent-optimizer](https://github.com/Jaylor-Wang/dsh-plugin-agent-optimizer) | 2 | 2026-11-05 | 2026-11-05 | Non-invasive runtime policy, PTC composite batch tools, soft convergence guidance, and A/B turn telemetry for DeepSeek Harness |
| 29 | [kianajunjie/hippocampus_22](https://github.com/kianajunjie/hippocampus_22) | 2 | 2026-11-05 | 2026-11-05 | 陪伴型机器人的情感记忆层：事件编码、情绪加权遗忘、联想召回、关系与技能，还会承认自己记不清｜An emotion-weighted memory layer for long-running companion bots. |
| 30 | [LENS-Views/dsh-api-usage-dashboard](https://github.com/LENS-Views/dsh-api-usage-dashboard) | 2 | 2026-11-05 | 2026-11-05 | Zero-config API usage dashboard for DeepSeek Harness (DSH): 24h token chart, per-day drill-down, per-provider/model colors, aggregated from local session logs. |
| 31 | [QuentinCrane/dsh-session-sidebar](https://github.com/QuentinCrane/dsh-session-sidebar) | 2 | 2026-11-05 | 2026-11-05 | Codex-style session sidebar for DeepSeek Harness (DSH)    适用于 DeepSeek Harness（DSH）的 Codex 风格会话侧边栏：采用收件箱式活动视图（Activity View），分类管理运行中、待处理和未读会话；支持独立置顶空间、工作区内置顶、工作区树状结构、拖拽排序以及会话全文搜索。适用于 DSH 网页版和桌面版。 |
| 32 | [syhliuyiqing/dsh-screenshot](https://github.com/syhliuyiqing/dsh-screenshot) | 2 | 2026-11-05 | 2026-11-05 | DSH plugin: drag a region on screen, the crop drops straight into the composer |
| 33 | [waterfish111/dsh-glance](https://github.com/waterfish111/dsh-glance) | 2 | 2026-11-01 | 2026-11-05 | 一瞥 / Glance：DSH Desktop 截图分析插件 —— 置顶悬浮球 + 框选任意区域 + 多模态流式分析 |
| 34 | [wyf-yfw/dsh-creation-mode](https://github.com/wyf-yfw/dsh-creation-mode) | 2 | 2026-11-03 | 2026-11-05 | DeepSeek Harness 插件。193 种代码动画风格：问需求 → 选风格看参考静帧 → 审分镜 → 生成 HTML 动画 → 预览并导出 MP4。画面与配乐都由 Agent 当场写，零依赖，不用 ffmpeg 或 playwright。 |
| 35 | [YanKaFei/smartstaff-ai-deepseek-plugin](https://github.com/YanKaFei/smartstaff-ai-deepseek-plugin) | 2 | 2026-10-27 | 2026-11-05 | A multi-tenant restaurant workforce SaaS test framework with a DeepSeek planning layer: accounts, marketplace, capacity forecast and admin console. |
| 36 | [YaoleWu/dsh-ops-kit](https://github.com/YaoleWu/dsh-ops-kit) | 2 | 2026-08-14 | 2026-11-05 | Evidence-driven memory, orchestration, benchmarks, and release workflows for DeepSeek Harness. |
| 37 | [YaoleWu/dsh-task-relay](https://github.com/YaoleWu/dsh-task-relay) | 2 | 2026-08-14 | 2026-11-05 | DSH 跨会话任务接力板：task_push/list/claim/done + handoff_write/read |
| 38 | [zyfsyx666/dsh-groups](https://github.com/zyfsyx666/dsh-groups) | 2 | 2026-11-04 | 2026-11-05 | DSH 插件分组一键开关：常驻组自动叠加、兜底组不吃叠加、两组一起应用 |
| 39 | [27Synthesis/dsh-go-local-voice](https://github.com/27Synthesis/dsh-go-local-voice) | 1 | 2026-11-05 | 2026-11-05 | 一个让 dsh-go 手机 App 原生界面用小米 MiMo / 豆包念回复的语音插件 |
| 40 | [520mxj/boss-zhipin-resume-sync](https://github.com/520mxj/boss-zhipin-resume-sync) | 1 | 2026-11-04 | 2026-11-05 | Parse PDF/DOCX/HTML resume documents and synchronize them to a user-authorized BOSS Zhipin online resume through Microsoft Edge. Codex, Claude Code, and DSH adapters included. |
| 41 | [Atexy191/deepseek-harness-plugin-](https://github.com/Atexy191/deepseek-harness-plugin-) | 1 | 2026-10-28 | 2026-11-05 | Plugins for DeepSeek Harness (dsh). joint-memory: 4-layer, file-first long-term memory for any AI agent — zero deps, markdown as source of truth, MCP stdio, deny floors, backup + sha256 verify. |
| 42 | [Carlos5986515/dsh-status-notifier](https://github.com/Carlos5986515/dsh-status-notifier) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness bundle: agent status in the macOS menu bar (SwiftBar) — pending approvals, running tasks, finished tasks, plus system notifications. |
| 43 | [casperkwok/dsh-voice](https://github.com/casperkwok/dsh-voice) | 1 | 2026-11-05 | 2026-11-05 | General full-duplex voice plugin for DeepSeek Harness: streaming ASR, local/cloud TTS, true barge-in. |
| 44 | [CC19990113/dsh-plugin-dbgraph](https://github.com/CC19990113/dsh-plugin-dbgraph) | 1 | 2026-11-05 | 2026-11-05 | Database structure for DeepSeek Harness — indexes a database catalog into a local store so the agent knows every table and column before it writes a query, then answers with one tool call |
| 45 | [cl2458228286-creator/dsh-plugin-workbuddy-checkin](https://github.com/cl2458228286-creator/dsh-plugin-workbuddy-checkin) | 1 | 2026-11-05 | 2026-11-05 | WorkBuddy daily auto check-in and credit claiming for DeepSeek Harness. Three agent tools (status / claim / login), bundled Chrome-driven engine, no tokens required. |
| 46 | [coolchengSAMA/dsh-token-combo](https://github.com/coolchengSAMA/dsh-token-combo) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件｜把模型输出的 Token 流变成街机连击 HUD（Windows 测试版） |
| 47 | [dingzhen-114514/dsh-wallpaper](https://github.com/dingzhen-114514/dsh-wallpaper) | 1 | 2026-11-05 | 2026-11-05 | Photo wallpaper for the DSH web GUI: fixed backdrop layer, translucent canvas and sidebar, live settings page for opacity, veil, brightness and blur. |
| 48 | [dragoncdj/dsh-devship](https://github.com/dragoncdj/dsh-devship) | 1 | 2026-10-20 | 2026-11-05 | DSH 右栏程序管理控制台 · start, stop, package, deploy over SSH and restart containers for workspace services. |
| 49 | [dsh-plugins-cn/dsh-remote-deck](https://github.com/dsh-plugins-cn/dsh-remote-deck) | 1 | 2026-11-05 | 2026-11-05 | SSH workspaces for DeepSeek Harness: multi-host connections, remote workspaces, terminal, port forwarding. |
| 50 | [edgy7493/dsh-go-adb-link](https://github.com/edgy7493/dsh-go-adb-link) | 1 | 2026-11-05 | 2026-11-05 | DSH Go 原生插件：自动找到手机上的 ADB TCP 端口并保持连接 · Native dsh-go plugin: finds the phone's ADB TCP port and keeps adb connected |
| 51 | [extreme-russian-dsh-fandom/dsh-github-cli](https://github.com/extreme-russian-dsh-fandom/dsh-github-cli) | 1 | 2026-11-04 | 2026-11-05 | Use GitHub CLI in DeepSeek Harness |
| 52 | [FantasyStarry/dsh-todo-time-log](https://github.com/FantasyStarry/dsh-todo-time-log) | 1 | 2026-11-03 | 2026-11-05 | DeepSeek Harness 待办插件：自动记录每条待办的创建与完成时间，用表格 / 看板 / 甘特图 / 日历四视图呈现真实耗时；支持分类、优先级、类型、@工作区文件与 todo_time_log 智能体工具。 |
| 53 | [Felalet/dsh-create-skills](https://github.com/Felalet/dsh-create-skills) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin: skills catalog with preview, editor, versions, archive (trash) and A/B comparison |
| 54 | [fourclub/dsh-kanban](https://github.com/fourclub/dsh-kanban) | 1 | 2026-11-03 | 2026-11-05 | Канбан-доска для DeepSeek Harness: отдельная доска у каждого проекта, задачи с черновиками и статусом «Можно делать», карточки с агентами, субагентами и фоновыми job, детали задачи в правой панели приложения и инструменты для агента. |
| 55 | [fujingzhai/youxia-dsh-plugins](https://github.com/fujingzhai/youxia-dsh-plugins) | 1 | 2026-11-04 | 2026-11-05 | 自用并持续维护的 DeepSeek Harness（DSH）插件合集 |
| 56 | [HappytheAlf/dsh-task-progress](https://github.com/HappytheAlf/dsh-task-progress) | 1 | 2026-11-05 | 2026-11-05 | DSH 0.2.2 task progress overlay: per-turn updates, stage status, stage results, and progress tracking. |
| 57 | [HeIIoAgain/dsh-wechat-notify](https://github.com/HeIIoAgain/dsh-wechat-notify) | 1 | 2026-11-03 | 2026-11-05 | 让 DeepSeek Harness (DSH) 智能体按需推送文字、图片和文件到你的微信 |
| 58 | [heisedexiaoniukou-max/dsh-todo-progress-hud](https://github.com/heisedexiaoniukou-max/dsh-todo-progress-hud) | 1 | 2026-11-05 | 2026-11-05 | 让 agent 的每一步都看得见 · 把 DeepSeek Harness 会话的任务清单变成输入框上方一条常驻进度条 |
| 59 | [HiAi-gg/dsh-docsmint](https://github.com/HiAi-gg/dsh-docsmint) | 1 | 2026-11-04 | 2026-11-05 | DocsMint for DeepSeek Harness: sidebar panel and four agent tools over REST or MCP, with Cloud OAuth and self-hosted API keys |
| 60 | [hjhcos/dsh-plugin-discovery](https://github.com/hjhcos/dsh-plugin-discovery) | 1 | 2026-11-05 | 2026-11-05 | Discover and install community DSH bundles: newbie essentials, recommendations, categories, npm/GitHub search. |
| 61 | [HoaXQuill/dsh-thinking-review](https://github.com/HoaXQuill/dsh-thinking-review) | 1 | 2026-11-05 | 2026-11-05 | DSH 插件：per-session 追问澄清开关 + 会话复盘写入长期记忆。分类：对话增强 / 记忆。 |
| 62 | [hongcha-dsh/dsh-watchlist](https://github.com/hongcha-dsh/dsh-watchlist) | 1 | 2026-11-03 | 2026-11-05 | 在侧边栏对话列表上方增加关注区：状态圆点、新回复置顶、运行中的置底，模型选择器旁还有关注按钮。 Follow list above the sidebar conversation list for DeepSeek Harness. |
| 63 | [HYcally/dsh-preset-studio](https://github.com/HYcally/dsh-preset-studio) | 1 | 2026-02-17 | 2026-11-05 | 预设工作室 · A visual studio for DeepSeek Harness agent presets: edit preset files, toggle injections, documents, skills and tool rows in one panel. |
| 64 | [j352201657-debug/dsh-quota-ring](https://github.com/j352201657-debug/dsh-quota-ring) | 1 | 2026-11-05 | 2026-11-05 | Floating quota ring in the DSH Web UI: DeepSeek balance + today's spend + peak/off-peak bar, GPT (Codex) 5h/weekly windows, Gemini's three Antigravity pools. |
| 65 | [jiajinyuan/dsh-mcp-skill-list](https://github.com/jiajinyuan/dsh-mcp-skill-list) | 1 | 2026-11-05 | 2026-11-05 | Two things a DSH profile never tells you at a glance: what this machine is wired to, and what a session actually used. This plugin answers both. |
| 66 | [JUST-MX/claude-dsh-bridge](https://github.com/JUST-MX/claude-dsh-bridge) | 1 | 2026-11-05 | 2026-11-05 | Claude Code sessions panel for DeepSeek Harness |
| 67 | [kangyishuai/dsh-plugins](https://github.com/kangyishuai/dsh-plugins) | 1 | 2026-11-05 | 2026-11-05 | Unofficial DeepSeek Harness (DSH) plugins: real session deletion with trash, audit log and more |
| 68 | [Leon-dbh/life-innovation](https://github.com/Leon-dbh/life-innovation) | 1 | 2026-11-05 | 2026-11-05 | 一个让常驻 agent 拥有连续记忆和真实生活线的 DSH 插件 |
| 69 | [liujiangnanchenjbguo/dsh-gufa-code](https://github.com/liujiangnanchenjbguo/dsh-gufa-code) | 1 | 2026-11-05 | 2026-11-05 | 古法编程 · AI 辅助 — DeepSeek Harness 的 VS Code 风格 IDE 模式插件（Monaco 编辑器 / Git / SSH / PTY 终端 / 官方会话停靠右侧） |
| 70 | [Looriann/dsh-cost-ledger](https://github.com/Looriann/dsh-cost-ledger) | 1 | 2026-11-05 | 2026-11-05 | DSH 的「费用」标签页：按天、按模型看 token 花了多少钱。 它认的不只是 DeepSeek —— 同一份权重经百炼、官方、第三方转售卖出，价格不同，它都记得准； 界面照着 DeepSeek 官方控制台做：按天堆叠柱状图、鼠标一悬停就看到当天明细。 |
| 71 | [lvxianchao/dsh-web-guard](https://github.com/lvxianchao/dsh-web-guard) | 1 | 2026-11-04 | 2026-11-05 | Password gate for the DeepSeek Harness Web UI that also fixes the /api 403 behind NPM/Caddy: one password, revocable sessions, an admin page and TLS. Zero dependencies. |
| 72 | [Mathilde1214/dsh-synapsis](https://github.com/Mathilde1214/dsh-synapsis) | 1 | 2026-11-05 | 2026-11-05 | Synapsis 析域 —— 把讲义铺成一张能走进去的概念图（DSH Web UI 面板插件） |
| 73 | [MFJip612/dsh-remote-wsl](https://github.com/MFJip612/dsh-remote-wsl) | 1 | 2026-11-04 | 2026-11-05 | Open a project inside a WSL distribution directly in DeepSeek Harness (DSH) |
| 74 | [Mola-maker/dsh-kit](https://github.com/Mola-maker/dsh-kit) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness kit: multi-channel deep search, workflow skills, memory-plugin benchmark |
| 75 | [Nero0427/dsh-purge-lite](https://github.com/Nero0427/dsh-purge-lite) | 1 | 2026-11-05 | 2026-11-05 | Trimmed prompt-injection plugin for DeepSeek Harness: inject your own system prompt and patch the host. Nothing else. |
| 76 | [Nero0427/dsh-wb-memory](https://github.com/Nero0427/dsh-wb-memory) | 1 | 2026-11-05 | 2026-11-05 | Memory bridge for DeepSeek Harness: render WorkBuddy SOUL / USER / MEMORY / topics straight into the system prompt. One Markdown source, no copies. |
| 77 | [No1064/dsh-web-browser](https://github.com/No1064/dsh-web-browser) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness Desktop 的整页浏览器面板，支持多标签、地址栏、右键菜单、主页常用网址与 IndexedDB 浏览历史；只给人用，不向 AI 注册任何工具。 A full-page browser panel for DeepSeek Harness Desktop with tabs, an address bar, a context menu, a pinned homepage and IndexedDB history. Human-only: registers no AI-facing tools. |
| 78 | [openpilotcc/dsh-desktop](https://github.com/openpilotcc/dsh-desktop) | 1 | 2026-08-15 | 2026-11-05 | Portable desktop app for DeepSeek Harness (dsh) — Electron shell, bundled Node runtime, no installer |
| 79 | [peishenglai3-hash/dsh-research-mode](https://github.com/peishenglai3-hash/dsh-research-mode) | 1 | 2026-11-05 | 2026-11-05 | Evidence-first research workflow for DeepSeek Harness: immutable artifacts, seven-face provenance, local-first, and honest about what it cannot prove. |
| 80 | [qbclex/dsh-prompt-injector](https://github.com/qbclex/dsh-prompt-injector) | 1 | 2026-11-05 | 2026-11-05 | DSH 插件：把准备好的提示词注入系统提示词，可随时回退（Prompt injection with rollback for DeepSeek Harness） |
| 81 | [qbclex/dsh-via-workbuddy](https://github.com/qbclex/dsh-via-workbuddy) | 1 | 2026-11-05 | 2026-11-05 | 把 WorkBuddy 桌面 App 里已登录的模型接入 DeepSeek Harness，修复上游 WAF 11128 对系统提示词的拦截（基于 corrinehu/dsh-workbuddy-connect） |
| 82 | [qiuleec/DSH-wechat-export](https://github.com/qiuleec/DSH-wechat-export) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：把本机微信 4.x 聊天记录导出为 HTML/CSV/TXT（左侧栏入口 + agent 工具） |
| 83 | [qujinting/dsh-theme-blue](https://github.com/qujinting/dsh-theme-blue) | 1 | 2026-11-05 | 2026-11-05 | DSH桌面端深蓝主题 |
| 84 | [rannyrjjy/dsh-fuzz](https://github.com/rannyrjjy/dsh-fuzz) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：在 diffprobe 之上做差分 fuzz 与逻辑测试（抽值 → 计划 → 执行 → 判定），默认只读。 |
| 85 | [Sakurasign/dsh-session-delete](https://github.com/Sakurasign/dsh-session-delete) | 1 | 2026-11-04 | 2026-11-05 | DeepSeek Harness 插件：彻底删除会话（含子智能体会话）的日志目录、投影缓存与工作区记账。 |
| 86 | [Shall0vv/dsh-conversation-files](https://github.com/Shall0vv/dsh-conversation-files) | 1 | 2026-11-04 | 2026-11-05 | DSH plugin: a left-sidebar gallery of every file the assistant generated across all conversations |
| 87 | [shiyangjian6-code/dsh-new-chat](https://github.com/shiyangjian6-code/dsh-new-chat) | 1 | 2026-11-05 | 2026-11-05 | Unofficial DeepSeek web chat panel for DeepSeek Harness Desktop, with cross-restart login persistence through a version-locked desktop patch. |
| 88 | [stallenlu/dsh-wsl-suite](https://github.com/stallenlu/dsh-wsl-suite) | 1 | 2026-11-04 | 2026-11-05 | WSL workspaces for DeepSeek Harness: one persistent in-distro agent instead of 9P polling. Sidebar W entry, in-distro terminal, WSL-native grep/glob, wsl-&lt;mode&gt; preset variants. |
| 89 | [stevenwang15/dsh-caveman](https://github.com/stevenwang15/dsh-caveman) | 1 | 2026-11-05 | 2026-11-05 | 把 caveman 的输出风格技能整套移植成 DeepSeek Harness（dsh）原生插件：caveman/ultracave/megacave 三档语气、commit、review、compress（本地压缩+闸门）与 6 个 native 工作流纪律技能。技术事实、代码、命令与报错原样保留。 |
| 90 | [stormx-u/dsh-easydistfit](https://github.com/stormx-u/dsh-easydistfit) | 1 | 2026-11-05 | 2026-11-05 | 一个用于做一些分布拟合的小工具，科研用。DistFit — DeepSeek Harness (DSH) 分布拟合插件：23 个分布族、K-S/A-D/CvM/chi2 检验、AIC 排名、AI 解读、论文/PPT 出图导出。 |
| 91 | [swiftdo/dsh-hotspot](https://github.com/swiftdo/dsh-hotspot) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness (DSH) 插件：热点采集、去重、确定性打分与草稿落地，支持侧边栏入口与控制面板 |
| 92 | [TLEWA/dsh-better-choice](https://github.com/TLEWA/dsh-better-choice) | 1 | 2026-11-03 | 2026-11-05 | DSH ask_user_question 增强：右键选项补充备注，卡片内旁问模型后再作答 |
| 93 | [TLEWA/dsh-if](https://github.com/TLEWA/dsh-if) | 1 | 2026-11-03 | 2026-11-05 | DSH /if command: an LLM judges a condition from prior context, then sends the instruction below it as a user message. |
| 94 | [usamoilov/dsh-model-settings](https://github.com/usamoilov/dsh-model-settings) | 1 | 2026-11-05 | 2026-11-05 | DeepSeek Harness (DSH) plugins: one settings page for the default model, a DeepSeek off switch, web search (SearXNG / Claude / Auto) and subagent models. EN / ZH / RU. |
| 95 | [wdj20050927/dsh-quality-guard](https://github.com/wdj20050927/dsh-quality-guard) | 1 | 2026-11-03 | 2026-11-05 | 发消息前先让另一个模型读一遍：DSH 插件的回复质检（引擎 selfcheck-guard + 可视化面板） |
| 96 | [Xiacqi1/dsh-at-handoff](https://github.com/Xiacqi1/dsh-at-handoff) | 1 | 2026-11-04 | 2026-11-05 | 给 DSH 的上下文交接插件：盯住当前会话的上下文大小，点一下让模型把这一轮写成交接文档，再点一下在同项目里开一个新会话 |
| 97 | [xxwjxx-1210/dsh-brain-hub](https://github.com/xxwjxx-1210/dsh-brain-hub) | 1 | 2026-11-05 | 2026-11-05 | Second brain for DeepSeek Harness: Markdown memory + git sync, reviewed card capture, cloud/local split. |
| 98 | [YaoleWu/agent-loop-workflow](https://github.com/YaoleWu/agent-loop-workflow) | 1 | 2026-08-14 | 2026-11-05 | A project-agnostic multi-agent collaboration protocol for the DeepSeek Harness: loop guards that stop runaway agent loops, a six-field handoff format, risk-tiered review routing, and a fixed verify→commit→push→review→close sequence. One skill instead of the same rules copy-pasted into every agent's instructions. |
| 99 | [YaoleWu/dsh-fleet-audit](https://github.com/YaoleWu/dsh-fleet-audit) | 1 | 2026-08-14 | 2026-11-05 | DSH agent-fleet hygiene audit plugin: credential-file permissions, embedded git-remote credentials (masked), provider token literals. Read-only, zero-dependency, deterministic. |
| 100 | [YaoleWu/dsh-md-preview](https://github.com/YaoleWu/dsh-md-preview) | 1 | 2026-08-14 | 2026-11-05 | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — an md_html_render tool that works headless, plus a preview/export drawer in the web GUI. One renderer behind both. Zero dependencies. |
| 101 | [ybniaobu/dsh-3d-viewer](https://github.com/ybniaobu/dsh-3d-viewer) | 1 | 2026-11-05 | 2026-11-05 | A DeepSeek Harness (DSH) sidebar plugin for previewing 3D models, supporting FBX, OBJ, glTF/GLB, and STL files · DSH 3D 查看器 |
| 102 | [YLifeOnlyOnce/dsh-inline-visuals](https://github.com/YLifeOnlyOnce/dsh-inline-visuals) | 1 | 2026-11-05 | 2026-11-05 | Inline Visuals · 14 replayable visual kinds for DeepSeek Harness — charts, tables, timelines, gantt, heatmaps, flows and KPI tiles. |
| 103 | [yuwang/dsh-matt-flow](https://github.com/yuwang/dsh-matt-flow) | 1 | 2026-11-05 | 2026-11-05 | 把 Matt Pocock 技能套件编成六阶段带前置条件的开发工作流：拷问、规范、任务、实现、评审、收尾。含输入框工具行的阶段胶囊与决策卡片。A six-stage gated development workflow preset for DSH: grill, spec, tickets, implement, review, wrap-up. Adds a stage chip in the composer and decision cards. Built on the Matt Pocock skill suite. |
| 104 | [zccz14/eXe](https://github.com/zccz14/eXe) | 1 | 2026-11-02 | 2026-11-05 | eXe (Executable) — zero-trusted devices execution plane. 远程设备连接执行 |
| 105 | [zhibo0502/dsh-zipfix](https://github.com/zhibo0502/dsh-zipfix) | 1 | 2026-11-05 | 2026-11-05 | ZIP 中文文件名乱码修复器 · DeepSeek Harness 插件（5 个 agent 工具 + Web 侧边栏上传修复 / mojibake filename fixer） |
| 106 | [zmz123612/dsh-plugin-book-deconstruct](https://github.com/zmz123612/dsh-plugin-book-deconstruct) | 1 | 2026-11-03 | 2026-11-05 | dsh-plugin — 书籍拆解：完整剧情梳理 + 深度思考（/dsh-book-deconstruct） |
| 107 | [ZSQBFan/dsh-chat-sessions](https://github.com/ZSQBFan/dsh-chat-sessions) | 1 | 2026-11-04 | 2026-11-05 | Independent chat sessions for DeepSeek Harness, with per-room working directories and native sidebar integration. |
| 108 | [1148462398-hub/dsh-elysia](https://github.com/1148462398-hub/dsh-elysia) | 0 | 2026-10-29 | 2026-11-05 | 爱莉希雅的记忆插件（dsh-elysia）：全 DSH 会话共用一份可读可改的记忆，含可选装的自我记忆包（源自 1,696 条官方确证语音）、双硬盘镜像、BM25 检索、可选语音朗读。 |
| 109 | [123David-yang/dsh-goal-gantt](https://github.com/123David-yang/dsh-goal-gantt) | 0 | 2026-11-04 | 2026-11-05 | Phase-level progress board for DeepSeek Harness: current phase, key numbers, a focused Gantt timeline and a collapsible phase list (zh/en UI). |
| 110 | [1578361862-art/dsh-plugin-github-radar](https://github.com/1578361862-art/dsh-plugin-github-radar) | 0 | 2026-11-04 | 2026-11-05 | GitHub 雷达：DSH 面板，看趋势仓库、收藏、标星、一键浅克隆，README 可机翻成中文。 |
| 111 | [15926719006/dsh-plugins-market](https://github.com/15926719006/dsh-plugins-market) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件索引源：个人插件 + Plugin Market Index Format 1（GitHub Pages） |
| 112 | [1837458003-ctrl/dsh-memory-starmap](https://github.com/1837458003-ctrl/dsh-memory-starmap) | 0 | 2026-11-04 | 2026-11-05 | to better |
| 113 | [18518182595-cell/dsh-prompt-workshop](https://github.com/18518182595-cell/dsh-prompt-workshop) | 0 | 2026-11-05 | 2026-11-05 | Prompt Studio for DeepSeek Harness: turn rough ideas into precise prompts for 19 image/video/text models, with multi-model enhancement, prompt scoring, image-to-prompt and a self-updating knowledge base. |
| 114 | [2310770803/2310770803](https://github.com/2310770803/2310770803) | 0 | 2023-10-28 | 2026-11-05 | 皮内罗的个人主页 · 本地优先的小工具与 DSH 插件 |
| 115 | [260807094-alt/dsh-star-pet](https://github.com/260807094-alt/dsh-star-pet) | 0 | 2026-11-05 | 2026-11-05 | self code and software |
| 116 | [439436269-ctrl/dsh-automations](https://github.com/439436269-ctrl/dsh-automations) | 0 | 2026-11-05 | 2026-11-05 | Lifecycle and event-driven automations for DeepSeek Harness: run a command, HTTP request or log entry on DSH boot, session start/idle/end, user messages, tool results, daily or interval triggers. Left-rail panel plus agent tools. |
| 117 | [43aquarius/luna-sincerity-lens](https://github.com/43aquarius/luna-sincerity-lens) | 0 | 2026-11-05 | 2026-11-05 | 用干货与诚意标准筛选和推荐内容的方法论 |
| 118 | [6e6e6e/dsh-simple-calc](https://github.com/6e6e6e/dsh-simple-calc) | 0 | 2026-11-05 | 2026-11-05 | 极简计算：像在纸上写算式一样的 DSH 计算器，支持单位、百分比、货币和日期（基于fend 引擎）。 |
| 119 | [805808786/dsh-plugin-model-news-radar](https://github.com/805808786/dsh-plugin-model-news-radar) | 0 | 2026-11-05 | 2026-11-05 | 模型资讯雷达 |
| 120 | [A-2788553793/dsh-wait](https://github.com/A-2788553793/dsh-wait) | 0 | 2026-11-05 | 2026-11-05 | Confirm before sending a chat message in DeepSeek Harness Web UI |
| 121 | [a404855501/dsh-workbuddy-model](https://github.com/a404855501/dsh-workbuddy-model) | 0 | 2026-11-05 | 2026-11-05 | 把workbuddy国内版和国际版的模型自动接入dsh |
| 122 | [abdelhamiderrahmouni/dsh-plugin-dev-manager](https://github.com/abdelhamiderrahmouni/dsh-plugin-dev-manager) | 0 | 2026-11-05 | 2026-11-05 | DSH right-Sidebar plugin: detect each project's package manager, run its dev/build/test commands with live logs, and stop long-running processes. |
| 123 | [Abin1020/dsh-restart](https://github.com/Abin1020/dsh-restart) | 0 | 2026-11-04 | 2026-11-05 | 新增重启按钮、自定义dsh启动、右侧边栏页面大小 |
| 124 | [AcerGL/dsh-pixiv-scroll](https://github.com/AcerGL/dsh-pixiv-scroll) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件：按你的口味刷 Pixiv —— 搜、筛、读图精选，存到本地或发给你。网络在外部源/直连/代理之间自动选路。 |
| 125 | [adengou/dsh-chubby-whale](https://github.com/adengou/dsh-chubby-whale) | 0 | 2026-11-05 | 2026-11-05 | DSH 网页版桌面宠物「肥鲸」——蓝发鲸鱼娘：语音对话、念诗说书、饭点提醒 |
| 126 | [Aeroscis/dsh-workspace-manager](https://github.com/Aeroscis/dsh-workspace-manager) | 0 | 2026-11-01 | 2026-11-05 | Sidebar workspace management for DeepSeek Harness: auto-rise the last prompted workspace, pin, drag to reorder, filter by name, one-click tidy, remove empty workspaces, and relocate a workspace folder with its conversations. |
| 127 | [ailawu0409/dsh-usage-stats](https://github.com/ailawu0409/dsh-usage-stats) | 0 | 2026-11-05 | 2026-11-05 | Usage statistics plugin for DeepSeek Harness: token totals, activity heatmap, daily trend by model, and model share. |
| 128 | [aiShuiJiaoDeXioShou/dsh-canvas](https://github.com/aiShuiJiaoDeXioShou/dsh-canvas) | 0 | 2026-11-05 | 2026-11-05 | Figma-style infinite canvas for DeepSeek Harness with an AI UI design skill, open JSON schema, design audit and image generation. |
| 129 | [AlexSh1ne/dsh-ctx-trim](https://github.com/AlexSh1ne/dsh-ctx-trim) | 0 | 2026-11-05 | 2026-11-05 | DSH 会话头部一键手动压缩上下文：正常 / 深度两档，本地摘要不调模型。 |
| 130 | [alk233/xiumi-assistant](https://github.com/alk233/xiumi-assistant) | 0 | 2026-11-05 | 2026-11-05 | 秀米图文助手 — 让 AI 真正会用秀米排版的 DSH 插件（可见浏览器 + Angular 模型写入 + 保存独立读回核验） |
| 131 | [Alvin-Sun6612/dsh-usage-monitor](https://github.com/Alvin-Sun6612/dsh-usage-monitor) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: token usage and DeepSeek balance panel for the sidebar. |
| 132 | [andrewngg/dsh-superagent-battlestar](https://github.com/andrewngg/dsh-superagent-battlestar) | 0 | 2026-11-05 | 2026-11-05 | 多设备 AI 管家：母机统一管理设备能力申报、在线检测与任务路由；支持 CLI、ComfyUI、Mika 手机工作机；附 Android APK 与 DeepSeek Harness 插件。Multi-device AI butler for DSH. |
| 133 | [AngleNaris/slumberpavilion](https://github.com/AngleNaris/slumberpavilion) | 0 | 2026-11-05 | 2026-11-05 | 沉眠阁 — 把已归档的 DSH 会话搬出加载路径，并提供归档/读取/还原/删除工具 |
| 134 | [aturzone/dsh-session-doctor](https://github.com/aturzone/dsh-session-doctor) | 0 | 2026-11-05 | 2026-11-05 | Read-only diagnostics for DeepSeek Harness session data: finds stored log generations the reader would reject before it opens them. |
| 135 | [awol2005ex3/dsh-k8s](https://github.com/awol2005ex3/dsh-k8s) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness (dsh) plugin for operating multiple Kubernetes clusters across different k8s versions. |
| 136 | [AZ-666316/dsh-prompt-optimizer-button](https://github.com/AZ-666316/dsh-prompt-optimizer-button) | 0 | 2026-11-05 | 2026-11-05 | Prompt optimizer button for the DeepSeek Harness composer |
| 137 | [baitouwuya/dsh-super-cards](https://github.com/baitouwuya/dsh-super-cards) | 0 | 2026-11-04 | 2026-11-05 | DeepSeek Harness Web plugin: native UI cards instead of Markdown — metrics, tables, charts, timelines and clickable next steps. |
| 138 | [beicause/dsh-sandbox-presets-extra](https://github.com/beicause/dsh-sandbox-presets-extra) | 0 | 2026-09-29 | 2026-11-05 | Registers arbitrary configured DSH permission presets, each selecting a sandbox mode and approval policy plus the directories writable on top of it. Linux bwrap only. |
| 139 | [BeiSheng2333/dsh-send-mode](https://github.com/BeiSheng2333/dsh-send-mode) | 0 | 2026-11-05 | 2026-11-05 | Queue/steer switch in the DeepSeek Harness composer: choose what Enter and Send do while the agent is running. |
| 140 | [bloodtmai-cmyk/dsh-activity-view](https://github.com/bloodtmai-cmyk/dsh-activity-view) | 0 | 2026-11-05 | 2026-11-05 | DSH 活动视图：把侧栏会话列表换成按活跃度排序的扁平列表，每行带所属项目名，运行中的会话置顶 · Activity view for the DSH sidebar: recently active sessions first, workspace name per row, running sessions pinned on top. Install: plugin_manager install_bundle github:bloodtmai-cmyk/dsh-activity-view |
| 141 | [buger-gif/dsh-remote-huaweicloud-devbridge](https://github.com/buger-gif/dsh-remote-huaweicloud-devbridge) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: reach your local DeepSeek Harness from a phone through a Huawei Cloud DevBridge outbound tunnel. The relay is only a data pipe and sees plaintext — the protection is a loopback token-gated gateway (rotatable token, HMAC session cookie, rate limiting, no inbound port), not encryption. |
| 142 | [buguoshixc/dsh-doctor](https://github.com/buguoshixc/dsh-doctor) | 0 | 2026-11-05 | 2026-11-05 | AI Code Doctor for DeepSeek Harness: zero-dependency judge core (doctor_judge/doctor_gate) + 「诊断模式」 agent preset + Socratic skill. MIT. |
| 143 | [Buir5/dsh-tg-voice](https://github.com/Buir5/dsh-tg-voice) | 0 | 2026-11-05 | 2026-11-05 | TG给D.H发语音。光速识别 超迅捷识别。秒回。你懂的。一般情况下只支持打字。Telegram voice -&gt; local sherpa-onnx transcript for DeepSeek Harness (dsh-im patch, no cloud ASR) |
| 144 | [CassiaTw1g/dsh-new-session](https://github.com/CassiaTw1g/dsh-new-session) | 0 | 2026-11-05 | 2026-11-05 | 给 DeepSeek Harness 的模型一个真正能用的「新开对话」工具：在当前工作区建会话、投递交接消息、带上一段对话的只读引用，并把 Web UI 自动切过去。 |
| 145 | [CatisAkaLi/dsh-diary-relation-check](https://github.com/CatisAkaLi/dsh-diary-relation-check) | 0 | 2026-11-05 | 2026-11-05 | DSH 记忆插件：按日/周/月/年分层，记忆有更新就提醒模型按层读一遍、独立复盘一段关系并给出理由。判断只写状态文件，不写进日记。 |
| 146 | [CatOlin-Zhang/dsh-camera-bridge](https://github.com/CatOlin-Zhang/dsh-camera-bridge) | 0 | 2026-11-05 | 2026-11-05 | DSH camera bridge plugin |
| 147 | [ccoderJava/dsh-token-dog](https://github.com/ccoderJava/dsh-token-dog) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 的 Token 用量面板：按会话/模型统计，每日堆叠矩形图 + 全年日历热力图 |
| 148 | [CelineHuangdz/dsh-wait-buddy](https://github.com/CelineHuangdz/dsh-wait-buddy) | 0 | 2026-11-04 | 2026-11-05 | A DSH session view for monitoring long-running Agent tasks, with approval/failure alerts and lightweight games. |
| 149 | [Chanceux-L/dsh-macos-notify](https://github.com/Chanceux-L/dsh-macos-notify) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：以应用自身身份发出 macOS 原生通知，点击通知跳转对应会话 |
| 150 | [chenacc1/agentbridge](https://github.com/chenacc1/agentbridge) | 0 | 2026-09-13 | 2026-11-05 | Control local coding agents from a phone through a secure WeChat QR web console. |
| 151 | [chengyu-xin1/dsh-classroom-mobile](https://github.com/chengyu-xin1/dsh-classroom-mobile) | 0 | 2026-11-05 | 2026-11-05 | Classroom study plugin for DeepSeek Harness: phone-browser recording + local Whisper transcription + summaries/mind maps/quiz gate + focus report, with a built-in HTTPS tunnel. |
| 152 | [chenmianmian19977-glitch/dsh-error-gloss](https://github.com/chenmianmian19977-glitch/dsh-error-gloss) | 0 | 2026-11-05 | 2026-11-05 | 给 DeepSeek Harness 的每条报错加一行中文释义：40 条词条覆盖全部官方错误码，原因分「确定/可能/未验证」三档 |
| 153 | [ChenXu233/dsh-staging-hunter](https://github.com/ChenXu233/dsh-staging-hunter) | 0 | 2026-11-05 | 2026-11-05 | 让 DeepSeek Harness 桌面端稳定留在夜间版灰度第一批：维持 .updaterId 的低位分桶值并自动修正。 \| Keep DSH desktop in the first nightly staging cohort. |
| 154 | [chow651/dsh-hackertube](https://github.com/chow651/dsh-hackertube) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：在面板里看 Hacker News 二十年推荐的 6454 个技术视频，含中文标题、AI 问答与 HN 讨论 |
| 155 | [Chrono-rigger/dsh-model-rotation](https://github.com/Chrono-rigger/dsh-model-rotation) | 0 | 2026-11-05 | 2026-11-05 | Ordered model rotation with automatic failover for DeepSeek Harness: rate-limit/timeout failover, a retest round for timed-out models, and a sticky DSH platform fallback. |
| 156 | [ClintHwang/dsh-dock-attention](https://github.com/ClintHwang/dsh-dock-attention) | 0 | 2026-11-05 | 2026-11-05 | Bounces a Dock tile with the DSH app icon when a DeepSeek Harness session turn finishes (macOS). · 会话任务执行完毕时让 DSH 的 Dock 图标跳动。 |
| 157 | [clockclock1/dsh-nitro](https://github.com/clockclock1/dsh-nitro) | 0 | 2026-11-05 | 2026-11-05 | 极速交付模式：一个输入框开关驱动三个子系统——测试调用断路器、SEARCH/REPLACE 局部替换引擎、终端输出脱水。 |
| 158 | [CooperZhuang/dsh-plugins-cooper-custom](https://github.com/CooperZhuang/dsh-plugins-cooper-custom) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：跨会话记忆 (dsh-cross-memory)、会话运维 (dsh-session-ops)、输出瘦身 (dsh-rtk-slim)、文件夹路径 (dsh-folder-path)、从 DSH 打开 (dsh-open-in-dsh) |
| 159 | [coreyleung-art/dsh-requirement-copilot](https://github.com/coreyleung-art/dsh-requirement-copilot) | 0 | 2026-11-05 | 2026-11-05 | Say It For Me (帮我说): turn rough requirement notes into a validated, agent-ready prompt with gaps, bilingual output and a confirmation gate — inside the DeepSeek Harness composer. |
| 160 | [CorsenAI/deepseek-harness-connector](https://github.com/CorsenAI/deepseek-harness-connector) | 0 | 2026-11-05 | 2026-11-05 | Chrome extension and local companion that let an exact DeepSeek Harness session operate the tabs you choose, in your own signed-in Chrome. Local-first. Unofficial, by Corsen AI. |
| 161 | [cunzailv/shangyeruanjiankaifa](https://github.com/cunzailv/shangyeruanjiankaifa) | 0 | 2026-11-03 | 2026-11-05 | 商业软件开发大管家：可装进 DSH 的 7 阶段项目规划 Skill / 插件，统控 12 角色多智能体军团，内置 38 个已核验开源基座与许可证红线。 |
| 162 | [Daphne999/dsh-needle](https://github.com/Daphne999/dsh-needle) | 0 | 2026-11-05 | 2026-11-05 | Hidden-needs radar for DeepSeek Harness: mines local session logs for repeated tool failures, repeated user requests and corrections, then ranks them by a stability bar into product briefs with redacted evidence. Read-only, offline, no model calls. |
| 163 | [darkmagic-ai/dsh-guard](https://github.com/darkmagic-ai/dsh-guard) | 0 | 2026-11-05 | 2026-11-05 | DSH (DeepSeek Harness) security guard plugin: blocks/asks on dangerous commands &amp; sensitive paths, redacts secrets in tool output, local JSONL audit log + guard_report. DSH 安全护栏插件。 |
| 164 | [dayutech/dsh-handy](https://github.com/dayutech/dsh-handy) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness Web plugin with per-session notes, a draggable key-information panel, fork inheritance of notes and key information, workspace-scoped session groups, highlighting, running-workspace prioritization, and bulk close actions for every right-sidebar tab. |
| 165 | [dcd887/dsh-memory-router](https://github.com/dcd887/dsh-memory-router) | 0 | 2026-11-05 | 2026-11-05 | Token-saving interceptor for DSH tool calls: dedupe cache, executable decision graph, live session state, honest ledger. |
| 166 | [deepseekmaid/dsh-link-guard](https://github.com/deepseekmaid/dsh-link-guard) | 0 | 2026-11-05 | 2026-11-05 | Cross-session guard for DeepSeek Harness: markdown links must use forward slashes (backslash \`\\_\` escapes silently break paths). |
| 167 | [Deliver0/dsh-labai-gateway](https://github.com/Deliver0/dsh-labai-gateway) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin for the lab AI gateway: a local proxy that auto-discovers the gateway IP after DHCP changes and injects each member API key. |
| 168 | [Delthin/dsh-plugins](https://github.com/Delthin/dsh-plugins) | 0 | 2026-11-05 | 2026-11-05 | Independently versioned DSH plugins maintained by Delthin |
| 169 | [dengnianchen/dsh-restart](https://github.com/dengnianchen/dsh-restart) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin: restart the Host from Settings → General or the sidebar account menu (systemd user service, with a standalone fallback). |
| 170 | [DEVbyQIN/dsh-file-annotations](https://github.com/DEVbyQIN/dsh-file-annotations) | 0 | 2026-11-05 | 2026-11-05 | Review file notes above the composer and send them with your message |
| 171 | [Diomchen/dsh-zoo](https://github.com/Diomchen/dsh-zoo) | 0 | 2026-11-05 | 2026-11-05 | LAN pets for DeepSeek Harness: neighbors' pets visit your desktop, and yours can visit theirs. · 局域网 DSH 宠物互相串门。 |
| 172 | [doctorpancode/dsh-useof-skill-panel](https://github.com/doctorpancode/dsh-useof-skill-panel) | 0 | 2026-10-16 | 2026-11-05 | Per-turn skill audit for DeepSeek Harness plus an in-app skill manager. Fork of dsh-echocat-skill-panel with the composer strip removed. |
| 173 | [doctorpancode/ncm-player5](https://github.com/doctorpancode/ncm-player5) | 0 | 2026-10-27 | 2026-11-05 | 网易云音乐浮窗播放器（ncm-player5）：完整继承 ncm-player4（歌单/歌词/歌词翻译/播放队列/账号登录，适配皮肤主题；点击播放窗口外即收起为迷你条；迷你条无操作 3 秒自动退出为右下角音符按钮；播放中该按钮随音乐节奏（低频鼓点）跳动；右下角图标支持左键长按拖动），新增：遇到因下架/无版权而无法播放的歌曲时自动跳过，播放下一首 |
| 174 | [douglarek/dsh-3d-pinball](https://github.com/douglarek/dsh-3d-pinball) | 0 | 2026-11-05 | 2026-11-05 | Full Tilt! style 3D pinball table as a DeepSeek Harness sidebar panel plugin |
| 175 | [DreamInsight24/dsh-sensitive-data-guard](https://github.com/DreamInsight24/dsh-sensitive-data-guard) | 0 | 2026-11-05 | 2026-11-05 | 敏感数据守卫（Sensitive Data Guard）：DSH 区域感知、fail-closed 的删除门禁——工作区不保护、.dsh 静默备份、敏感区删除先备份再要 4 位确认码 |
| 176 | [DrinkerqvB/dsh-markdown-copy](https://github.com/DrinkerqvB/dsh-markdown-copy) | 0 | 2026-11-04 | 2026-11-05 | Copy selected DSH conversation content as Markdown source |
| 177 | [dripdry-jung494/whalefeed](https://github.com/dripdry-jung494/whalefeed) | 0 | 2026-03-21 | 2026-11-05 | Download whalefeed installers via direct or mirror links for quick Windows setup and easy access. |
| 178 | [dsh-plugins-cn/dsh-image-tools](https://github.com/dsh-plugins-cn/dsh-image-tools) | 0 | 2026-11-05 | 2026-11-05 | Copy or download any conversation image in DeepSeek Harness, including model-read screenshots, without losing the original bytes. |
| 179 | [DSH-USER-GTB/dsh-answer-top](https://github.com/DSH-USER-GTB/dsh-answer-top) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：AI 回答结束后自动滚到回答开头。 |
| 180 | [EasySSHCN/dsh-shot](https://github.com/EasySSHCN/dsh-shot) | 0 | 2026-11-04 | 2026-11-05 | Screenshot capture plugin for DeepSeek Harness (DSH): region/window/fullscreen capture with a fullscreen overlay selector, the screenshot tool, the /shot command, a Ctrl+Alt+A global hotkey and a composer screenshot button. DSH ???? |
| 181 | [EchoTint/dsh-pomodoro](https://github.com/EchoTint/dsh-pomodoro) | 0 | 2026-11-05 | 2026-11-05 | Pomodoro timer for DSH with sidebar configuration, desktop widgets, focus statistics, and WebDAV/S3 backups. |
| 182 | [Edison-A-N/dsh-session-journal](https://github.com/Edison-A-N/dsh-session-journal) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness Web plugin: a right-sidebar work journal that groups a session's turns into work items and jumps to any turn in the chat. |
| 183 | [elegant01/dsh-scalpel](https://github.com/elegant01/dsh-scalpel) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: compare two answers inside one session, and drop chosen turns from every later model request. |
| 184 | [elfgzp/dsh-agent-team-playbook](https://github.com/elfgzp/dsh-agent-team-playbook) | 0 | 2026-10-30 | 2026-11-05 | DSH Agent Teams 实战手册：名额规划、任务状态机、角色契约与踩坑（非官方） |
| 185 | [elfgzp/dsh-cua-macos](https://github.com/elfgzp/dsh-cua-macos) | 0 | 2026-11-02 | 2026-11-05 | macOS Computer Use for DeepSeek Harness: read accessibility trees, capture screenshots and drive real desktop apps. |
| 186 | [elfgzp/dsh-godot-live](https://github.com/elfgzp/dsh-godot-live) | 0 | 2026-10-30 | 2026-11-05 | Live Godot game view inside DeepSeek Harness: native rendering streamed as MJPEG into a DSH panel, with input injection and agent tools. No Web export, no export templates. |
| 187 | [elfgzp/dsh-llm-network-retry](https://github.com/elfgzp/dsh-llm-network-retry) | 0 | 2026-11-01 | 2026-11-05 | Keep a model request alive while the network is down: connection failures retry without an attempt limit (Codex-style), everything else stays bounded so real errors still fail fast. |
| 188 | [elfgzp/dsh-session-bridge](https://github.com/elfgzp/dsh-session-bridge) | 0 | 2026-11-02 | 2026-11-05 | Let a DeepSeek Harness agent open foreground sessions, drive them and read the result back. |
| 189 | [elfgzp/dsh-settings-sync](https://github.com/elfgzp/dsh-settings-sync) | 0 | 2026-11-03 | 2026-11-05 | DeepSeek Harness plugin: back up and restore every DSH setting — profile config, plugin settings, skills, installed plugins and MCP servers — through a private Git repository you own. |
| 190 | [elfgzp/dsh-unified-model](https://github.com/elfgzp/dsh-unified-model) | 0 | 2026-11-05 | 2026-11-05 | Switch model and reasoning effort across every DeepSeek Harness session at once — one control, all conversations, effort included. |
| 191 | [elliotsu1107/dsh-proxy-gate](https://github.com/elliotsu1107/dsh-proxy-gate) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: switch DeepSeek Harness's outbound HTTP proxy at runtime from the Plugins settings page or the /proxy command. Not the system proxy; NAS-wide programs stay direct. |
| 192 | [EricLeeK/v-clip-dsh](https://github.com/EricLeeK/v-clip-dsh) | 0 | 2026-11-05 | 2026-11-05 | V-clip 视觉收藏库的 DeepSeek Harness 插件 |
| 193 | [Ethan-decoy/QuestBranch-DSH](https://github.com/Ethan-decoy/QuestBranch-DSH) | 0 | 2026-11-03 | 2026-11-05 | 问之 · DeepSeek Harness 非官方分支式研究工作台｜研究图谱、节点对话与阶段报告 |
| 194 | [extreme-russian-dsh-fandom/dsh-clippy-companion](https://github.com/extreme-russian-dsh-fandom/dsh-clippy-companion) | 0 | 2026-11-05 | 2026-11-05 | Clippy (and :godmode:) in your DeepSeek Harness GUI |
| 195 | [extreme-russian-dsh-fandom/dsh-wireshark-mcp](https://github.com/extreme-russian-dsh-fandom/dsh-wireshark-mcp) | 0 | 2026-11-05 | 2026-11-05 | Analyze packet captures with Wireshark tools in DeepSeek Harness |
| 196 | [f-e-n-g-0531/dsh-code-report](https://github.com/f-e-n-g-0531/dsh-code-report) | 0 | 2026-10-15 | 2026-11-05 | Multi-repository Git/SVN release reports for DeepSeek Harness. |
| 197 | [Fan-Yiheng/dsh-frame-id-photo](https://github.com/Fan-Yiheng/dsh-frame-id-photo) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 左侧工具栏证件照裁切插件 |
| 198 | [FlashPoint007/dsh-wecom-soul-bot](https://github.com/FlashPoint007/dsh-wecom-soul-bot) | 0 | 2026-11-04 | 2026-11-05 | 企业微信智能机器人长连接 + 人设 + 长期记忆，DeepSeek Harness 插件 |
| 199 | [flynow-harness/dsh-plugin-java-engineer](https://github.com/flynow-harness/dsh-plugin-java-engineer) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：Java 工程师超级工具箱 — JDK 环境体检 / Spring Boot 3 脚手架 / 构建审计 / JVM 参数计算 / 代码审查 / 24 条工程片段，含输入框工具条与 CI |
| 200 | [foreee/dsh-net-dashboard](https://github.com/foreee/dsh-net-dashboard) | 0 | 2026-11-05 | 2026-11-05 | 网络巡检看板：DSH 侧边栏实时呈现本机网络质量（IP/MAC、流量速率、会话数、延迟曲线），3 秒自动刷新｜Live network inspection dashboard for DeepSeek Harness. |
| 201 | [FORGE-131/dsh-lan-pair](https://github.com/FORGE-131/dsh-lan-pair) | 0 | 2026-11-01 | 2026-11-05 | Expose the DeepSeek Harness web GUI to phones: LAN pairing plus tunnel-based remote access, with automatic LAN-to-tunnel failover. A DSH plugin and a 45 KB Android shell. |
| 202 | [Fqingwan/dsh-soul-forging](https://github.com/Fqingwan/dsh-soul-forging) | 0 | 2026-11-05 | 2026-11-05 | 给 AI 的可迁移长期记忆，外加一套「铸魂」流程。纯 markdown、纯本地、零依赖。 |
| 203 | [FrontierMindLab/dsh-quick-compact](https://github.com/FrontierMindLab/dsh-quick-compact) | 0 | 2026-11-05 | 2026-11-05 | DSH composer 上下文小环 + 一键 /compact：看用量、看构成、点一下压缩（客户端插件，无遥测、无第三方上报） |
| 204 | [FTShare-Lab/dsh-plugin-acn](https://github.com/FTShare-Lab/dsh-plugin-acn) | 0 | 2026-10-28 | 2026-11-05 | ACN knowledge collaboration plugin for DeepSeek Harness｜面向 DeepSeek Harness 的 ACN 知识协作插件，让 Agent 共享和复用可追溯的团队经验。 |
| 205 | [FurinaLiF/dsh-tab-complete](https://github.com/FurinaLiF/dsh-tab-complete) | 0 | 2026-11-05 | 2026-11-05 | DSH 下一句灰字预测：Tab 填入草稿，支持时间感知与缓存恢复。 |
| 206 | [fzcohq/dsh-ipv6-gate](https://github.com/fzcohq/dsh-ipv6-gate) | 0 | 2026-11-05 | 2026-11-05 | IPv6 remote access gateway for DeepSeek Harness |
| 207 | [fzqfzqfzq/dsh-checkin-hub](https://github.com/fzqfzqfzq/dsh-checkin-hub) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness sidebar plugin: one-click daily check-in and credit overview for WorkBuddy, Trae and Qoder accounts |
| 208 | [gaor0605-kq/dsh-workspace-explorer](https://github.com/gaor0605-kq/dsh-workspace-explorer) | 0 | 2026-11-05 | 2026-11-05 | 在 DSH 左侧栏查看工作区文件，拖进对话让 DSH 读取或修改 ·  DSH plugin: browse workspace files in the left sidebar and drag them into the chat  |
| 209 | [GarinZ/dsh-handoff](https://github.com/GarinZ/dsh-handoff) | 0 | 2026-11-05 | 2026-11-05 | Model-facing session handoff for DeepSeek Harness: copy a session's full history into another workspace with a written brief. 让 Agent 在对话里把当前会话完整交接给另一个工作区。 |
| 210 | [gem-gti/dsh-scrcpy-mirror](https://github.com/gem-gti/dsh-scrcpy-mirror) | 0 | 2026-11-05 | 2026-11-05 | Android phone screen mirroring plugin for DeepSeek Harness, powered by scrcpy. |
| 211 | [Ghostdu-AI/dsh-sidebar-nav-scroll](https://github.com/Ghostdu-AI/dsh-sidebar-nav-scroll) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: caps the sidebar global-panel list at a fraction of its natural height, scrolls it, and gives the freed space to the workspace below. |
| 212 | [githublmk/dsh-harness-restart](https://github.com/githublmk/dsh-harness-restart) | 0 | 2026-11-05 | 2026-11-05 | Restart control for the DeepSeek Harness Desktop caption band: restarts the app and its Host after a confirmation. |
| 213 | [gokucai/dsh-open-in-codebuddy](https://github.com/gokucai/dsh-open-in-codebuddy) | 0 | 2026-11-05 | 2026-11-05 | Adds a Session-header CodeBuddy button that opens the current workspace folder in CodeBuddy. |
| 214 | [goodjin/dsh-chat-power](https://github.com/goodjin/dsh-chat-power) | 0 | 2026-11-02 | 2026-11-05 | DSH 插件：聊天区增强——回答卡片、可编辑文件卡片、Mermaid 渲染与会话工具，另含文件/浏览器/终端工具区 |
| 215 | [h1-cat/dsh-headwater](https://github.com/h1-cat/dsh-headwater) | 0 | 2026-11-04 | 2026-11-05 | 让你的 AI 记住你。说过的话一句不丢，聊久了慢慢懂你，开口前先想想这话该不该说。 |
| 216 | [haaahhhis/MultiGameAssistant](https://github.com/haaahhhis/MultiGameAssistant) | 0 | 2026-10-18 | 2026-11-05 | 基于dsh核心搭建的多游戏脚本综合管理Agent，长期使用容易目光呆滞。 |
| 217 | [hahajing233-source/dsh-sticky-wall](https://github.com/hahajing233-source/dsh-sticky-wall) | 0 | 2026-11-04 | 2026-11-05 | dsh插件-便签墙 |
| 218 | [handsomeboy65/dsh-task-hub](https://github.com/handsomeboy65/dsh-task-hub) | 0 | 2026-11-04 | 2026-11-05 | TAPD + ZenTao task hub for DSH: list assigned work in the sidebar and dispatch an agent on a branch you name. |
| 219 | [HanYu-me/dsh-talk-pages](https://github.com/HanYu-me/dsh-talk-pages) | 0 | 2026-11-04 | 2026-11-05 | DeepSeek Harness conversation whiteboard: one page per workspace, free-placed cards, links and boxes |
| 220 | [HATO-24/dsh-codex-handoff](https://github.com/HATO-24/dsh-codex-handoff) | 0 | 2026-11-05 | 2026-11-05 | GPT/Codex 对话桥 —— 把本机 Codex CLI 的多轮会话接进 DeepSeek Harness（DSH）：侧栏/右侧抽屉查看往来、会话落库可用 resume 续接、模型与推理强度可切换。 |
| 221 | [HATO-24/dsh-offpeak-guard](https://github.com/HATO-24/dsh-offpeak-guard) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek peak/off-peak pricing guard for DSH: pauses running tasks at peak, resumes automatically when off-peak begins, and plans work for the next off-peak window. |
| 222 | [hellmage/dsh-chat-lanes](https://github.com/hellmage/dsh-chat-lanes) | 0 | 2026-11-04 | 2026-11-05 | DSH 对话窗口两列分屏：我说的常驻左栏、可点击跳转，模型的话在右侧流动，还带回车触发的会话内搜索。Splits the DSH chat window in two: your messages pinned in a clickable left rail, the model's replies flowing on the right, with Enter-to-search across the conversation. |
| 223 | [hello-piper/SkillHealth](https://github.com/hello-piper/SkillHealth) | 0 | 2026-11-05 | 2026-11-05 | SkillHealth: skill usage statistics, health diagnostics, and default-load control for DeepSeek Harness. |
| 224 | [HelloQingTao/dsh-plugin-keeper](https://github.com/HelloQingTao/dsh-plugin-keeper) | 0 | 2026-11-05 | 2026-11-05 | 插件运维台：盘点已装插件、批量更新启停卸载、导出导入、GitHub 直装、搜索 \| Plugin ops console for DeepSeek Harness |
| 225 | [hfanshu/dsh-kanban](https://github.com/hfanshu/dsh-kanban) | 0 | 2026-10-25 | 2026-11-05 | DeepSeek Harness 任务看板插件 — 自动任务、kanban_* 原生工具、飞书同步 |
| 226 | [hotkong/dsh-home-assistant-panel](https://github.com/hotkong/dsh-home-assistant-panel) | 0 | 2026-11-04 | 2026-11-05 | Home Assistant panel for DeepSeek Harness: read-only status overview, prompt injection, ha_status, and browser notifications. |
| 227 | [huanlin-labs/dsh-policy-validator](https://github.com/huanlin-labs/dsh-policy-validator) | 0 | 2026-11-05 | 2026-11-05 | Offline pre-flight for dsh-superagent Policy and deployment configs: 62 rules, 47 fixtures, 85 tests, zero dependencies. |
| 228 | [hvdxxx/deepseek-harness-ru](https://github.com/hvdxxx/deepseek-harness-ru) | 0 | 2026-11-05 | 2026-11-05 | Russian localization (language pack) for the DeepSeek Harness web GUI: a DSH client plugin with 63 locale namespaces, no app.asar patching |
| 229 | [IdealRainBowbridge/dsh_bot](https://github.com/IdealRainBowbridge/dsh_bot) | 0 | 2026-11-04 | 2026-11-05 | Bionic companion agent for DSH — simulate a body (organs/metabolism/mood/circadian rhythm), not human behavior. 3 platforms, shared memory, all outbound off by default |
| 230 | [ILVACM/DSH-Deveco2API](https://github.com/ILVACM/DSH-Deveco2API) | 0 | 2026-11-05 | 2026-11-05 | 将华为deveco接入DSH使用（注意自备账号） |
| 231 | [InkiChang/dsh-usage-panel](https://github.com/InkiChang/dsh-usage-panel) | 0 | 2026-11-05 | 2026-11-05 | DSH 侧栏用量面板：在侧栏底部嵌入显示 DeepSeek 官方账号与 new-api 中转站的余额、今日消耗与峰谷时段。 |
| 232 | [inzia005/dsh-turn-cost](https://github.com/inzia005/dsh-turn-cost) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件：每条回复下方一行，显示本轮花费、token 数、峰谷价 |
| 233 | [iv3rins/dsh-memory](https://github.com/iv3rins/dsh-memory) | 0 | 2026-11-05 | 2026-11-05 | Project-level knowledge and development-state memory for DeepSeek Harness: Markdown docs as source of truth, a state system (task/progress/git/handoff) that survives restarts, compaction, and branch switches, and memory atoms recalled by sparse routing. Host-side cordis plugin plus one sidebar panel. |
| 234 | [jesongit/dsh-todolist](https://github.com/jesongit/dsh-todolist) | 0 | 2026-11-05 | 2026-11-05 | Workspace-scoped todo lists and sticky notes for DeepSeek Harness: floating panel + aggregate board grouped by workspace. |
| 235 | [Jfreey/dsh-plugin-sync](https://github.com/Jfreey/dsh-plugin-sync) | 0 | 2026-11-05 | 2026-11-05 | Back up and restore DSH plugins through your own private GitHub repository: list, versions, configuration and local sources. |
| 236 | [Jfreey/dsh-searxng-search](https://github.com/Jfreey/dsh-searxng-search) | 0 | 2026-11-05 | 2026-11-05 | One-click local search engine: no API key, free, no tracking. Aggregates several fast engines and picks the best route for your network. |
| 237 | [JiepengLab/dsh-neptune](https://github.com/JiepengLab/dsh-neptune) | 0 | 2026-11-04 | 2026-11-05 | 尼普顿充电：取 openId、查状态、续充 |
| 238 | [jiongboy/dsh-table-copy](https://github.com/jiongboy/dsh-table-copy) | 0 | 2026-11-05 | 2026-11-05 | Hover toolbar for every Markdown table in DeepSeek Harness Web: copy the table as Markdown or as a PNG image. |
| 239 | [JMINN0/dsh-go-plugin-adb](https://github.com/JMINN0/dsh-go-plugin-adb) | 0 | 2026-11-04 | 2026-11-05 | 安卓手机上的 adb 插件：在手机内部给自己开一个 adb shell，无需 root、无需电脑，关 WiFi 也能用。AI 助手用它可以装 App、看日志、截图、执行 shell 命令。 / Android adb plugin that gives an AI agent a real adb shell from inside the phone — no root, no PC. |
| 240 | [joyboy-yy/dsh-quota-overview](https://github.com/joyboy-yy/dsh-quota-overview) | 0 | 2026-11-05 | 2026-11-05 | A DSH (DeepSeek Harness) Web plugin: a full-width sidebar quota entry shows the DeepSeek account balance and OpenCode Go usage together; clicking opens a dialog with details, live reset countdowns and inline API key setup. |
| 241 | [justinzyc271828-sys/dsh-baidu-netdisk](https://github.com/justinzyc271828-sys/dsh-baidu-netdisk) | 0 | 2026-11-03 | 2026-11-03 | Connect DeepSeek Harness to Baidu Netdisk's official MCP service. |
| 242 | [justinzyc271828-sys/dsh-music](https://github.com/justinzyc271828-sys/dsh-music) | 0 | 2026-11-03 | 2026-11-03 | Music tools for DeepSeek Harness, starting with official Suno MCP credits and library access. |
| 243 | [jxhsjxhs/dsh-job-lasso](https://github.com/jxhsjxhs/dsh-job-lasso) | 0 | 2026-11-05 | 2026-11-05 | 每天从 BOSS直聘、猎聘、LinkedIn 等站点捞远程岗位，按求职画像打分，集中显示在 Harness 面板里。 |
| 244 | [jxhsjxhs/dsh-notes-qiange](https://github.com/jxhsjxhs/dsh-notes-qiange) | 0 | 2026-11-05 | 2026-11-05 | 签格 · 智能便签 —— DSH（DeepSeek Harness）便签插件：纸卡墙 + 项目文件夹分区 + 任务泳道 + AI 执行。Fork of @zzerx/dsh-plugin-notes (MIT). |
| 245 | [jypjypjypjyp/dsh-vibe-reading](https://github.com/jypjypjypjyp/dsh-vibe-reading) | 0 | 2026-11-04 | 2026-11-05 | Vibe Reading：DSH 右侧边栏的论文工作台——原样渲染 PDF，选中即可高亮/笔记/就选段提问；标注与笔记人机共管并跨会话复用，@ 注入论文目录，MinerU 解析内置。 |
| 246 | [kedeshuai/dsh-plugin](https://github.com/kedeshuai/dsh-plugin) | 0 | 2023-05-08 | 2026-11-05 | 233 |
| 247 | [kevin-qiao/dsh-todo](https://github.com/kevin-qiao/dsh-todo) | 0 | 2026-11-05 | 2026-11-05 | Bilingual (中文 / English) sticky-note TODO panel for the DeepSeek Harness Web GUI: sticky-board and minimal-list views, AI planning/tagging/per-note advice, zero dependencies. |
| 248 | [kevinasworks/dsh-anydoc](https://github.com/kevinasworks/dsh-anydoc) | 0 | 2026-11-05 | 2026-11-05 | Native DeepSeek Harness plugin for offline document-to-Markdown conversion, powered by Firecrawl AnyDoc. |
| 249 | [kfat77/dsh-stock-ticker](https://github.com/kfat77/dsh-stock-ticker) | 0 | 2026-11-05 | 2026-11-05 | Scrolling stock ticker strip for the DeepSeek Harness Web UI: custom CN/HK/US watchlist with indices, configurable refresh interval and alert threshold, click-through quote card. |
| 250 | [Kinfxhk/dsh-attention-center](https://github.com/Kinfxhk/dsh-attention-center) | 0 | 2026-11-05 | 2026-11-05 | Sidebar inbox for DeepSeek Harness: finished work, approvals, and new questions, with system notifications when the platform allows them. |
| 251 | [Kinfxhk/dsh-computer-use](https://github.com/Kinfxhk/dsh-computer-use) | 0 | 2026-11-05 | 2026-11-05 | DSH Computer Use sidebar: an agent can observe and operate Windows apps through a local CUA driver. Windows only. MIT. |
| 252 | [Kinfxhk/dsh-model-senses](https://github.com/Kinfxhk/dsh-model-senses) | 0 | 2026-11-05 | 2026-11-05 | See images and search the web from any DSH agent through the live deployment-default API. MIT. |
| 253 | [Kinfxhk/dsh-model-shelf](https://github.com/Kinfxhk/dsh-model-shelf) | 0 | 2026-11-05 | 2026-11-05 | DSH sidebar model shelf: browse connected models by API, bookmark them, and apply one without typing its id. MIT. |
| 254 | [Kinfxhk/dsh-perplexity-api-fix-plugin](https://github.com/Kinfxhk/dsh-perplexity-api-fix-plugin) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin that fixes Perplexity API calls (Claude Opus/Sonnet 5.5, GPT-6.1 Sol): max tokens, reserved tool names, schema repairs, provider settings repair |
| 255 | [kingcharleslzy-ai/dsh-breeze-voice](https://github.com/kingcharleslzy-ai/dsh-breeze-voice) | 0 | 2026-11-05 | 2026-11-05 | Continuous voice conversations in your current DeepSeek Harness chat · self-hosted Breeze TTS, speech recognition and interruption |
| 256 | [kleinklein0824/dsh-obsidian-quote](https://github.com/kleinklein0824/dsh-obsidian-quote) | 0 | 2026-11-05 | 2026-11-05 | 面向 AI 编码助手的本地 Obsidian 知识库只读检索插件，支持多库范围、编码规则、带来源的上下文与规范摘要；提供 Codex / Claude Code 插件市场接入、DeepSeek Harness 面板、浏览器面板、CLI 和 MCP。 |
| 257 | [korotky/dsh-peak-cost](https://github.com/korotky/dsh-peak-cost) | 0 | 2026-11-05 | 2026-11-05 | Know when DeepSeek bills double and what the session has cost so far — peak period, countdown and per-token pricing right in the Harness composer row. |
| 258 | [KYCOMING/dsh-product-design](https://github.com/KYCOMING/dsh-product-design) | 0 | 2026-11-05 | 2026-11-05 | 侧边栏里的「简化版 Figma」产品设计画布：多画板、可交互组件、AI 可编程文档与会话内预览。｜A simplified Figma-style product design canvas for DeepSeek Harness: multi-artboard canvas, interactive components, AI-programmable document, and in-chat previews. |
| 259 | [lamp23333/dsh-balance-simple](https://github.com/lamp23333/dsh-balance-simple) | 0 | 2026-11-03 | 2026-11-05 | A simple, information-dense DeepSeek status display for the DSH sidebar: balance, usage, and peak/off-peak countdown. |
| 260 | [LazyMau/dsh-shuangpin-reminder](https://github.com/LazyMau/dsh-shuangpin-reminder) | 0 | 2026-11-04 | 2026-11-05 | A draggable, resizable floating cheat sheet that collects your typing speed and stalls, heats the key map, reveals keys when you stall, and drills the characters you struggled with. Ships with several common Shuangpin schemes, plus custom key maps. |
| 261 | [leiyiqi070630-arch/dsh-tia-mcp-plugin](https://github.com/leiyiqi070630-arch/dsh-tia-mcp-plugin) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin wiring Siemens TIA Portal V21 + V16 Openness MCP engines, with a host-side write guard. |
| 262 | [li-bruce/VibeLens](https://github.com/li-bruce/VibeLens) | 0 | 2026-10-19 | 2026-11-05 | Understand and debug AI-built software through state graphs. |
| 263 | [lifeng4127/dsh-github-sync](https://github.com/lifeng4127/dsh-github-sync) | 0 | 2026-11-04 | 2026-11-05 | 同步 DSH 会话到私有 GitHub 仓库，实现跨设备接力 |
| 264 | [light-cheng/DSH-Strata](https://github.com/light-cheng/DSH-Strata) | 0 | 2026-11-05 | 2026-11-05 | Layered, restorable context management for DeepSeek Harness: deterministic tool-output cards, model-written folds in three tiers, a local archive, decompress and search. |
| 265 | [lijianbin2/dsh-subtitle-remover](https://github.com/lijianbin2/dsh-subtitle-remover) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：左侧栏「字幕擦除」页面，调用本地 video-subtitle-remover 引擎——画面框选/多区域、自动识别与模型判定、实时前后对比、处理区间与一键打开成片。 |
| 266 | [lilulj/dsh-dafeiyu-pet](https://github.com/lilulj/dsh-dafeiyu-pet) | 0 | 2026-11-04 | 2026-11-05 | 大肥鱼桌宠：自带 104 个动作与语音的独立 DSH 插件，不依赖 dsh-dafeiyu |
| 267 | [lim1202/dsh-agent-theater](https://github.com/lim1202/dsh-agent-theater) | 0 | 2026-11-05 | 2026-11-05 | Turn your DSH sessions into an animated character stage with Codex Pet support. |
| 268 | [Linj1k/dsh-whisper-local](https://github.com/Linj1k/dsh-whisper-local) | 0 | 2026-11-04 | 2026-11-05 | Whisper Local for DeepSeek Harness |
| 269 | [liudapeng0311/dsh-session-hygiene](https://github.com/liudapeng0311/dsh-session-hygiene) | 0 | 2026-11-05 | 2026-11-05 | Delete sessions into a recoverable trash, clean up sessions orphaned by deleted workspaces, and group workspaces into categories. A DSH plugin. |
| 270 | [liuweibing7/dsh-plugin-inspector](https://github.com/liuweibing7/dsh-plugin-inspector) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件用于在插件详情与页查看插件的声明式配置和代码信息 |
| 271 | [lizhanzhan89/dsh-todo](https://github.com/lizhanzhan89/dsh-todo) | 0 | 2026-11-04 | 2026-11-05 | Harness 侧边栏里的待办 + 笔记面板 |
| 272 | [lliu56/minicut-skills](https://github.com/lliu56/minicut-skills) | 0 | 2026-11-03 | 2026-11-05 | MiniCut and MiniAPI agent skills and plugin for Claude Code and Codex: make AI short films, run Seedance and Kling video models |
| 273 | [lloydzhou/dsh-feishu-oauth](https://github.com/lloydzhou/dsh-feishu-oauth) | 0 | 2026-11-05 | 2026-11-05 | Feishu OAuth login plugin for DeepSeek Harness using native session cookies |
| 274 | [lloydzhou/dsh-smart-compaction](https://github.com/lloydzhou/dsh-smart-compaction) | 0 | 2026-11-02 | 2026-11-05 | Cache-first compaction with optional adaptive cost policy for DeepSeek Harness |
| 275 | [lloydzhou/dsh-subagent-codebuddy](https://github.com/lloydzhou/dsh-subagent-codebuddy) | 0 | 2026-11-02 | 2026-11-05 | DeepSeek Harness profile bundle: run subagent delegations in the local CodeBuddy CLI (ACP) with a pinned model |
| 276 | [lmk2215/dsh-todo-editor](https://github.com/lmk2215/dsh-todo-editor) | 0 | 2026-11-05 | 2026-11-05 | Editable task-flow panel for DeepSeek Harness — design the checklist yourself, save it straight into the session, and let the agent execute your nodes one by one. |
| 277 | [LordGrimTaken/dsh-inapp-plugin](https://github.com/LordGrimTaken/dsh-inapp-plugin) | 0 | 2026-11-05 | 2026-11-05 | DSH InApp Plugin - Game Lab: an in-app Android emulator for testing the games you build inside DeepSeek Harness. |
| 278 | [lovesky514514-cmd/sky-evidence-recovery](https://github.com/lovesky514514-cmd/sky-evidence-recovery) | 0 | 2026-11-05 | 2026-11-05 | Fail-closed retry protection and evidence-backed recovery for DeepSeek Harness (DSH) tools. |
| 279 | [LoveStudyXin/dsh-sticky-notes](https://github.com/LoveStudyXin/dsh-sticky-notes) | 0 | 2026-11-05 | 2026-11-05 | Sticky-note wall in the DeepSeek Harness sidebar: quick capture, image notes, pin/search, local backups, and an agent tool so a session or an IM bot can add notes. |
| 280 | [loyalchiiina/dsh-schedule-calendar](https://github.com/loyalchiiina/dsh-schedule-calendar) | 0 | 2026-11-05 | 2026-11-05 | DSH 日程助手：多城市天气/黄历/农历日历/日程提醒/待办/日报周报/星座运势/签到，侧边栏展开 |
| 281 | [lq287/ai-memory-pg](https://github.com/lq287/ai-memory-pg) | 0 | 2026-11-05 | 2026-11-05 | PostgreSQL-backed long-term memory for AI agents: four-state write arbitration, three-path recall (vector + keyword + graph), per-type TTL, day/week/month/year keyword digests — plus a DeepSeek Harness plugin (dsh-memory-pg). |
| 282 | [lucifermbbgh/dsh-bilivideo-qqbot-forward-plugin](https://github.com/lucifermbbgh/dsh-bilivideo-qqbot-forward-plugin) | 0 | 2026-11-05 | 2026-11-05 | deepseek-harness插件，让 QQ BOT 搬运转发的BILIBILI视频链接为NTQQ聊天中可直接播放的视频 |
| 283 | [lvxianchao/dsh-video-preview](https://github.com/lvxianchao/dsh-video-preview) | 0 | 2026-11-05 | 2026-11-05 | Streaming video preview for the DeepSeek Harness Web UI sidebar: mp4/webm/mov play in place over an authenticated byte-range route (206), no size cap, no build step and zero dependencies. |
| 284 | [lyp0709/orcaterm-model-proxy](https://github.com/lyp0709/orcaterm-model-proxy) | 0 | 2026-11-05 | 2026-11-05 | 把 OrcaTerm 网页版的免费模型接入 DeepSeek Harness（DSH），支持一键登录、工具调用与图片识别 |
| 285 | [lzyxczw-cyber/dsh-thinking-cn](https://github.com/lzyxczw-cyber/dsh-thinking-cn) | 0 | 2026-11-05 | 2026-11-05 | 中文思考 / Chinese Thinking: mounts the built-in experimental reasoning translation and pins it to Simplified Chinese for DeepSeek Harness |
| 286 | [Mabinogi-Cichol/dsh-progress-beat](https://github.com/Mabinogi-Cichol/dsh-progress-beat) | 0 | 2026-11-02 | 2026-11-05 | DeepSeek Harness（DSH）插件：让 agent 在长时间「思考 + 工具调用」中途输出用户可见的进度说明，而不是一路静默到任务结束才说话。 |
| 287 | [Maravetech/dsh-watchkeeper](https://github.com/Maravetech/dsh-watchkeeper) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: session numbers, a pending-answer seat and a pluggable judge for unattended sessions. |
| 288 | [MaresaN41/dsh-skill-scribe](https://github.com/MaresaN41/dsh-skill-scribe) | 0 | 2026-11-04 | 2026-11-05 | DeepSeek Harness 用プラグイン。作業から SKILL.md の候補を作り、人が承認するまで有効にしない / Drafts reusable SKILL.md proposals; nothing is activated until a human accepts it. |
| 289 | [martin2026US-lab/dsh-go-siwc](https://github.com/martin2026US-lab/dsh-go-siwc) | 0 | 2026-11-05 | 2026-11-05 | Preview withdrawn: v0.2.1 rejects valid chat requests. Installation paused; corrected build in local trials. |
| 290 | [Masterchiefm/dsh-mol-structure](https://github.com/Masterchiefm/dsh-mol-structure) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin: Mol* structure viewer with agent tools |
| 291 | [mengge237/dsh-error-doctor](https://github.com/mengge237/dsh-error-doctor) | 0 | 2026-09-23 | 2026-11-05 | 只读体检：你装的 DSH 会不会把 403 的额度类失败误判成 API 密钥无效，一条命令给退出码 ｜ Read-only diagnosis: does your DSH still report a quota-related 403 as an invalid API key? One command, one exit code |
| 292 | [mengmenghao/dsh-stock-quote](https://github.com/mengmenghao/dsh-stock-quote) | 0 | 2026-11-05 | 2026-11-05 | dsh股票行情插件 |
| 293 | [mi-tuan/dsh-breeze-claim](https://github.com/mi-tuan/dsh-breeze-claim) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件：自动领 BreezeBlue 每日免费积分 |
| 294 | [miao0w0wu/dsh-think-chinese](https://github.com/miao0w0wu/dsh-think-chinese) | 0 | 2026-11-05 | 2026-11-05 | 让 DeepSeek Harness 的模型始终用中文思考和推理，并用中文回答的一个组合包（bundle）插件。 |
| 295 | [miiy/dsh-access-gateway](https://github.com/miiy/dsh-access-gateway) | 0 | 2026-11-05 | 2026-11-05 | Access the DSH Web GUI from your LAN. |
| 296 | [miiy/dsh-review](https://github.com/miiy/dsh-review) | 0 | 2026-11-05 | 2026-11-05 | A review-first Git panel for the DSH Web GUI.  |
| 297 | [milestone-17/dsh-bao](https://github.com/milestone-17/dsh-bao) | 0 | 2026-11-05 | 2026-11-05 | DSH 宝 — TRAE-宝-style personal assistant for DeepSeek Harness: cross-session long-term memory, a dedicated assistant agent preset, daily digest, desktop notifications, and a live overview panel. |
| 298 | [milestone-17/dsh-git-branch-switcher](https://github.com/milestone-17/dsh-git-branch-switcher) | 0 | 2026-11-05 | 2026-11-05 | Git branch switcher composer chip for DeepSeek Harness (open source) |
| 299 | [mm24trg2gy-star/dsh-window-keeper](https://github.com/mm24trg2gy-star/dsh-window-keeper) | 0 | 2026-11-05 | 2026-11-05 | 记住 DeepSeek Harness 桌面窗口的位置/大小/最大化状态；脚本本体不依赖客户端版本。 |
| 300 | [mmmmlp-cloud/dsh-plugin-packs](https://github.com/mmmmlp-cloud/dsh-plugin-packs) | 0 | 2026-11-05 | 2026-11-05 | 插件包管理器 for DeepSeek Harness: Minecraft resource-pack-style two columns (enabled / disabled) with custom tags stored in a hand-editable packs.json instead of localStorage. |
| 301 | [momijijin/dsh-session-grove](https://github.com/momijijin/dsh-session-grove) | 0 | 2026-11-03 | 2026-11-05 | Free-form nested session groups for the DeepSeek Harness sidebar: cross-workspace organization without moving sessions, with local persistence, backup recovery, drag-and-drop, and optional AI control. |
| 302 | [Morange1/Glean-](https://github.com/Morange1/Glean-) | 0 | 2026-11-05 | 2026-11-05 | Catch task candidates from replies and manage them in a session-grouped console — without waking the model. |
| 303 | [mryouyouHK/youyou-work-hours](https://github.com/mryouyouHK/youyou-work-hours) | 0 | 2026-11-05 | 2026-11-05 | Clock in and out, configure the schedule, and review average hours by calendar, year or list |
| 304 | [myboker/dsh-conversation-guard](https://github.com/myboker/dsh-conversation-guard) | 0 | 2026-11-05 | 2026-11-05 | Task-aware message admission and scoped recovery handoffs for DeepSeek Harness. |
| 305 | [nanrener/dsh-plugin-qiyao](https://github.com/nanrener/dsh-plugin-qiyao) | 0 | 2026-11-05 | 2026-11-05 | 每天看一眼今天是什么日子：日、月、火、水、木、金、土，顺手给点安排灵感，不算吉凶。 |
| 306 | [Neruviko/dsh-session-delete](https://github.com/Neruviko/dsh-session-delete) | 0 | 2026-10-13 | 2026-11-05 | 在 DSH Web 界面里删除会话。 |
| 307 | [nerv-base/dsh-theme-eva](https://github.com/nerv-base/dsh-theme-eva) | 0 | 2026-11-05 | 2026-11-05 | EVA Unit-02 theme for DeepSeek Harness: entry-plug cinematic, sync meter, and dark workbench styling. |
| 308 | [Night-maze/dsh-desktop-pet-naiwa](https://github.com/Night-maze/dsh-desktop-pet-naiwa) | 0 | 2026-11-05 | 2026-11-05 | 桌宠-奶娃小时候 - A Windows desktop companion for DeepSeek Harness |
| 309 | [Noobboi-22401/dsh-command-quit](https://github.com/Noobboi-22401/dsh-command-quit) | 0 | 2026-10-02 | 2026-11-05 | A simple plugin that allows users to quit their DSH client with a slash command. |
| 310 | [octisfall/dsh-account-balance](https://github.com/octisfall/dsh-account-balance) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek account balance and per-model spending under the composer in DeepSeek Harness |
| 311 | [oday0311/open-dsh-market](https://github.com/oday0311/open-dsh-market) | 0 | 2026-11-05 | 2026-11-05 | a dsh-plugins-market |
| 312 | [oobitoooo/dsh-writing-discipline](https://github.com/oobitoooo/dsh-writing-discipline) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: defensive-writing gate with fact-conservation lock (zero network, zero LLM) |
| 313 | [owain323/dsh-plugin-agentcss](https://github.com/owain323/dsh-plugin-agentcss) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：查 agentcss 组件、生成报告页骨架、交付前自检 |
| 314 | [PeiQinyi/dsh-diary](https://github.com/PeiQinyi/dsh-diary) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 侧栏的一本日记： Markdown 文件，纯本地，不做 AI 代写。 |
| 315 | [phorcys/dsh-ssh-tunnel-provider](https://github.com/phorcys/dsh-ssh-tunnel-provider) | 0 | 2026-11-05 | 2026-11-05 | SSH-tunnelled multi-protocol model provider for DeepSeek Harness |
| 316 | [pinion05/dsh-neverdie](https://github.com/pinion05/dsh-neverdie) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness (DSH) host plugin — auto-revives sessions whose turn was killed by a process exit ('Task stopped') after restart, and re-arms their active goals |
| 317 | [prgrmrwy/dsh-cockpit-memex-browse-shim](https://github.com/prgrmrwy/dsh-cockpit-memex-browse-shim) | 0 | 2026-11-05 | 2026-11-05 | Deployment-local adapter from dsh-cockpit-bridge port publishing to the dsh-memex browse-address registry |
| 318 | [prgrmrwy/dsh-cockpit-worktree-open-shim](https://github.com/prgrmrwy/dsh-cockpit-worktree-open-shim) | 0 | 2026-11-05 | 2026-11-05 | Deployment-local adapter from dsh-cockpit-bridge remote editor opening to the Worktree Session open-handler registry |
| 319 | [proto-commons/dsh-inline-comment](https://github.com/proto-commons/dsh-inline-comment) | 0 | 2026-11-05 | 2026-11-05 | Selection-based inline comments for DSH Web conversations. |
| 320 | [puppy-bai/dsh-quota-takeover](https://github.com/puppy-bai/dsh-quota-takeover) | 0 | 2026-11-05 | 2026-11-05 | 额度接力：平台额度用完自动换下一个平台，缺该模型则跳过，全无则换档重遍历；额度或限流中断后自动补一条「继续」。Our Free Model 之上的一层接力。 |
| 321 | [pzr-Ryan/dsh-plugins](https://github.com/pzr-Ryan/dsh-plugins) | 0 | 2026-11-04 | 2026-11-05 | 用于固定DHS工作台于桌面最顶层 |
| 322 | [QIC-9821/dsh-memory-sync](https://github.com/QIC-9821/dsh-memory-sync) | 0 | 2026-11-05 | 2026-11-05 | Sync a git-backed memory folder with a peer machine on every DeepSeek Harness startup. 每次打开 DSH 自动双向同步 git 记忆目录。 |
| 323 | [QIC-9821/dsh-pc-bridge](https://github.com/QIC-9821/dsh-pc-bridge) | 0 | 2026-11-05 | 2026-11-05 | A loopback HTTP bridge for DeepSeek Harness: ping and run shell commands on this PC from a trusted peer, plus an optional ssh reverse tunnel. 让远端通过回环 HTTP 桥在电脑上执行命令。 |
| 324 | [QIC-9821/dsh-wechat-pad](https://github.com/QIC-9821/dsh-wechat-pad) | 0 | 2026-11-05 | 2026-11-05 | Connect personal WeChat, through a self-hosted iPad-protocol backend, to DeepSeek Harness. Experimental; unofficial protocol, use a secondary account. 把个人微信接进 DSH。 |
| 325 | [quecai-niu/dsh-session-find](https://github.com/quecai-niu/dsh-session-find) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 会话原文检索插件：绕开 FTS5 分词跨会话字面搜索，含模型工具与右侧栏面板 |
| 326 | [QwQ2333333-QaQ/dsh-search-chat](https://github.com/QwQ2333333-QaQ/dsh-search-chat) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 右侧栏会话搜索：跨全部工作区按字面匹配查找聊天记录，点击跳到原消息（DSH 0.2.2+） |
| 327 | [raheemmiyasin/dsh-theme-palette](https://github.com/raheemmiyasin/dsh-theme-palette) | 0 | 2026-11-05 | 2026-11-05 | Theme palette picker for the DeepSeek Harness Web UI: nine palettes, an Obsidian theme, and a Cyberpunk neon theme with a HUD backdrop and custom brand mark. |
| 328 | [railgun20001/dsh-plugin-restart-desktop](https://github.com/railgun20001/dsh-plugin-restart-desktop) | 0 | 2026-11-05 | 2026-11-05 | DSH 桌面版一键重启插件：保留窗口位置/大小/最大化状态/所在显示器，可选重启后自动续上被打断的会话 |
| 329 | [Ray1270/dsh-restart](https://github.com/Ray1270/dsh-restart) | 0 | 2026-11-05 | 2026-11-05 | 刷新 / 重启 —— DeepSeek Harness 桌面版顶栏的两个常驻按钮（refresh + one-click restart） |
| 330 | [Rcyc-1025/dsh-aotjit-compare](https://github.com/Rcyc-1025/dsh-aotjit-compare) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件：同一用例分别跑 AOT 可执行文件与 JIT 启动命令，逐字段对拍 stdout / exit code / stderr / 文件副作用，给出第一处不一致的用例与字段 |
| 331 | [Rcyc-1025/dsh-lit-filecheck](https://github.com/Rcyc-1025/dsh-lit-filecheck) | 0 | 2026-11-05 | 2026-11-05 | lit + FileCheck test loop for DSH: lit_run / lit_rerun_failed / filecheck |
| 332 | [renbooc/focus-alarm](https://github.com/renbooc/focus-alarm) | 0 | 2026-11-05 | 2026-11-05 | 专注闹钟 Focus Alarm：DeepSeek Harness Web 的悬浮番茄钟，含下班倒计时、专注统计、节律提醒与系统通知。 |
| 333 | [return054/dsh-deliver-check](https://github.com/return054/dsh-deliver-check) | 0 | 2026-11-05 | 2026-11-05 | Deliver pre-flight gate for DeepSeek Harness: scans AI code changes for debug leftovers, TODO markers, not-implemented throws, credentials and placeholders. Exit code verdict, model cannot overrule. Paywalled cloud rule pack via Alipay 402. |
| 334 | [RGarrido03/dsh-vorssaint](https://github.com/RGarrido03/dsh-vorssaint) | 0 | 2026-11-05 | 2026-11-05 | Report DeepSeek Harness usage, API value and live runs to Vorssaint. |
| 335 | [RrOrange/dsh-qqbot](https://github.com/RrOrange/dsh-qqbot) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness QQ 机器人插件（个人修改版）— 流式输出、出站健壮性、事件订阅与设置面板重做 |
| 336 | [ruaruaTon/dsh-agent-tree](https://github.com/ruaruaTon/dsh-agent-tree) | 0 | 2026-11-05 | 2026-11-05 | 代际树面板：Lead→成员→孙代理 层级实时组织树 + 团队焦点 + 真状态点 + 模型路由中心 |
| 337 | [ruaruaTon/dsh-workflow-timeline](https://github.com/ruaruaTon/dsh-workflow-timeline) | 0 | 2026-11-03 | 2026-11-05 | ZCode 风格的工作流时间线面板：横向/纵向响应式、表情状态机小脸、阶段级模型/并发配置、右栏子代理对话、历史持久化。 |
| 338 | [RunhuaChen/dsh-claude-theme](https://github.com/RunhuaChen/dsh-claude-theme) | 0 | 2026-11-05 | 2026-11-05 | Claude 风格主题插件 for DeepSeek Harness：暖纸质底色、赤陶强调色、Anthropic 字体、界面字号跟随正文设置缩放 |
| 339 | [sambazhu/dsh-longevity-coach](https://github.com/sambazhu/dsh-longevity-coach) | 0 | 2026-11-05 | 2026-11-05 | Daily longevity coach for DeepSeek Harness: 64 graded population studies from HowToLiveLonger become three actions a day, a sidebar page and five evidence tools. |
| 340 | [santera-pixel/dsh-scriptorium](https://github.com/santera-pixel/dsh-scriptorium) | 0 | 2026-11-05 | 2026-11-05 | A project knowledge base for the DeepSeek Harness Web GUI: notes, media sandbox, canvas, mind graph, board and project mirroring. |
| 341 | [sayhia/shiguang-reader](https://github.com/sayhia/shiguang-reader) | 0 | 2026-11-05 | 2026-11-05 | 装进 DeepSeek Harness 的本地阅读器 |
| 342 | [schrolemons/chat-harness-7-2-lays-for-a-AI-bot](https://github.com/schrolemons/chat-harness-7-2-lays-for-a-AI-bot) | 0 | 2026-10-27 | 2026-11-05 | 7+2 chat harness for DSH, OneBot and optional Codex Peer; privacy-clean distribution |
| 343 | [SCUklr/dsh-bilingual-helper](https://github.com/SCUklr/dsh-bilingual-helper) | 0 | 2026-11-05 | 2026-11-05 | DSH bundle plugin: one-click English translation under every chat message (DeepSeek Flash route) |
| 344 | [sfy2022/dsh-plugins](https://github.com/sfy2022/dsh-plugins) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件短名单：这台机器上真正装着在用的插件，按分类列出、标注当前版本和可升级版本，index.json 可直接当 DSH 索引源用。 |
| 345 | [sgxdvx123321-svg/dsh-clipshot-mac](https://github.com/sgxdvx123321-svg/dsh-clipshot-mac) | 0 | 2026-11-05 | 2026-11-05 | macOS screenshot straight into the DeepSeek Harness composer: full screen, region or one window. Zero dependencies — only system screencapture + osascript. |
| 346 | [shawnclink/dsh-bookmarks](https://github.com/shawnclink/dsh-bookmarks) | 0 | 2026-11-05 | 2026-11-05 | 六个收藏夹（X / YouTube / Reddit / B 站 / 知乎 / 小红书）汇总到 DeepSeek Harness 一个面板：每天三条、按角色筛、一键落到 Obsidian / 提醒 / 日历 |
| 347 | [Shirolin/dsh-theme-animal-island-ui](https://github.com/Shirolin/dsh-theme-animal-island-ui) | 0 | 2026-10-31 | 2026-11-05 | A high-fidelity Animal Island-inspired theme for DeepSeek Harness Web and Desktop. |
| 348 | [ShoWin2333/dsh-hongguo](https://github.com/ShoWin2333/dsh-hongguo) | 0 | 2026-11-05 | 2026-11-05 | 摸鱼短剧：DSH 插件（frostming/dsh-hongguo 的 fork）— 入口移入全局面板 More 菜单、去掉输入框等待浮条、Windows HEIC 封面支持 |
| 349 | [ShoWin2333/dsh-reader](https://github.com/ShoWin2333/dsh-reader) | 0 | 2026-11-05 | 2026-11-05 | DSH（DeepSeek Harness）内置 RSS 阅读器插件：三栏阅读界面、正文渲染、已读/收藏、搜索、OPML 导入导出 |
| 350 | [shuaichewang/dsh-quit-idle-fix](https://github.com/shuaichewang/dsh-quit-idle-fix) | 0 | 2026-11-05 | 2026-11-05 | 用来修复dsh的退出提示bug |
| 351 | [shudingbo/dsh-plugin-autosshfs](https://github.com/shudingbo/dsh-plugin-autosshfs) | 0 | 2026-11-05 | 2026-11-05 | dsh-sshfs挂载管理插件 |
| 352 | [shushuiu/dsh-bookshelf](https://github.com/shushuiu/dsh-bookshelf) | 0 | 2026-11-05 | 2026-11-05 | A Douban 想读 bookshelf with covers and ratings, matched against a local ebook folder, with an in-panel EPUB/PDF/TXT reader and public-domain downloads. |
| 353 | [Sirius-rocco/dsh-agent-context-hub](https://github.com/Sirius-rocco/dsh-agent-context-hub) | 0 | 2026-10-30 | 2026-11-05 | One read-only index of every local AI-agent session (Codex, Claude Code, DSH, Trae, or any JSONL source) grouped by project, plus an append-only shared board so switching agents leaves no context gap. |
| 354 | [skyline66/dsh-family-budget](https://github.com/skyline66/dsh-family-budget) | 0 | 2026-11-05 | 2026-11-05 | Family monthly budget planner for the DSH Web UI: income, fixed and variable expenses, savings, emergency fund, debt and a monthly review, in a sidebar page. Organises household money only; no investment advice. |
| 355 | [skyline66/dsh-sticky-notes-wall](https://github.com/skyline66/dsh-sticky-notes-wall) | 0 | 2026-11-05 | 2026-11-05 | Sticky-note wall for DeepSeek Harness: sidebar wall, pasted images, due reminders, done state, pin-on-top floating window, appearance skins, native Windows always-on-top desktop window. |
| 356 | [skyzou071026-collab/dsh-coopanion](https://github.com/skyzou071026-collab/dsh-coopanion) | 0 | 2026-11-05 | 2026-11-05 | 镜像：@takboo/dsh-coopanion v0.4.18 — DSH 桌面鲸鱼同伴与任务通知（上游 takboo/dsh-coopanion，AGPL-3.0） |
| 357 | [skyzou071026-collab/dsh-dafeiyu](https://github.com/skyzou071026-collab/dsh-dafeiyu) | 0 | 2026-11-05 | 2026-11-05 | 镜像：dsh-dafeiyu v0.1.23 — DSH 大肥鱼桌面陪伴（上游 QCYTSN/dsh-dafeiyu，MIT） |
| 358 | [skyzou071026-collab/dsh-pet-to-family](https://github.com/skyzou071026-collab/dsh-pet-to-family) | 0 | 2026-11-05 | 2026-11-05 | 镜像：dsh-pet-to-family v0.7.1 — DSH 蓝色大肥鱼桌宠（上游 zi-O1/dsh-pet-to-family，MIT） |
| 359 | [SlAltum/dsh-zen](https://github.com/SlAltum/dsh-zen) | 0 | 2026-11-05 | 2026-11-05 | 给 agent 用的项目管理系统：DSH 插件形态，25 个内置 zen_* 工具，Rust 核心 + SQLite，右侧看板预览。 |
| 360 | [songrui111/dsh-fine-tune](https://github.com/songrui111/dsh-fine-tune) | 0 | 2026-11-04 | 2026-11-05 | DSH plugin: local LoRA/QLoRA fine-tuning with a Web panel — dataset → train → evaluate, GPU or SSH backend. DeepSeek Harness 本地微调插件：数据集→训练→评测，支持本机与远程 GPU。 |
| 361 | [sony6490/dsh-course-notes](https://github.com/sony6490/dsh-course-notes) | 0 | 2026-11-05 | 2026-11-05 | DSH 插件：实时视频课程知识笔记。读取 dsh-video-coursemap 的检测结果，为每个新视频生成独立 Word 并自动投递到新的 DSH 会话（摘要 + Word 文件卡），同时写入 dsh-memory-evolve 项目记忆。 |
| 362 | [SoulZhou/dsh-multi-root-changes](https://github.com/SoulZhou/dsh-multi-root-changes) | 0 | 2026-11-05 | 2026-11-05 | Multi-root changes panel for DeepSeek Harness: one read-only Git changes view covering the session workspace root and every additional root registered through multi-root-workspace. |
| 363 | [sreetiears/dsh-feiyu-connector](https://github.com/sreetiears/dsh-feiyu-connector) | 0 | 2026-11-05 | 2026-11-05 | 小肥鱼 · B站连接器：DeepSeek Harness 插件（只读 B站工具 + 大肥鱼角色卡 + 定时主动开口） |
| 364 | [stallenlu/dsh-freellmapi](https://github.com/stallenlu/dsh-freellmapi) | 0 | 2026-11-05 | 2026-11-05 | FreeLLMAPI as a self-contained DeepSeek Harness plugin: the local free-model router ships inside the plugin, so one install gives you a first-class model provider route plus start/stop control — no Docker, no separate checkout. |
| 365 | [stone-beka/dsh-workspace-insight](https://github.com/stone-beka/dsh-workspace-insight) | 0 | 2026-11-05 | 2026-11-05 | Workspace and session activity dashboard for the DSH Web UI: overview, month heat calendar and a continuous-date timeline matrix. Read-only, local data. |
| 366 | [sunlei1214/dsh-session-requirement](https://github.com/sunlei1214/dsh-session-requirement) | 0 | 2026-11-05 | 2026-11-05 | Per-conversation requirement / constraint box for DeepSeek Harness - title-row field, @-skill picker, injected into every message of that conversation. |
| 367 | [sunlei1214/dsh-three-modes](https://github.com/sunlei1214/dsh-three-modes) | 0 | 2026-11-05 | 2026-11-05 | 在同一会话里切换的三种工作模式：讨论 / 对抗审查 / 任务执行。换提示词、收紧工具权限、改采样温度，不新建会话、不丢上下文。 |
| 368 | [sunqing975/dsh-skills-hub](https://github.com/sunqing975/dsh-skills-hub) | 0 | 2026-11-05 | 2026-11-05 | DSH 原生 Skills 管理插件，统一管理多个 Agent 的技能，支持内容判重、版本对比、公用目录整合与可恢复清理。 |
| 369 | [SunsetRNE/dsh-ops-Linux](https://github.com/SunsetRNE/dsh-ops-Linux) | 0 | 2026-11-05 | 2026-11-05 | Self-maintained dsh-ops port for Linux/ARM64 (Android): linux-arm64 runtime + DSH 0.2.2 support |
| 370 | [SunsetRNE/dsh-session-relay](https://github.com/SunsetRNE/dsh-session-relay) | 0 | 2026-11-04 | 2026-11-05 | DSHA 平级会话互通：主会话 + 工作会话协作，版本线公告、指令模板、汇报合并唤醒 |
| 371 | [supeBam/dsh-inspiration-notes](https://github.com/supeBam/dsh-inspiration-notes) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 侧边栏便签插件，支持本地保存、全文搜索、标签筛选、置顶和一键复制。 |
| 372 | [Surenkh/dsh-visual-sandbox](https://github.com/Surenkh/dsh-visual-sandbox) | 0 | 2026-11-04 | 2026-11-05 | Annotatable UI preview for DeepSeek Harness: four responsive frames, element-level Edit UI, and exact surgical targets sent to the agent. |
| 373 | [sycflash/dsh-jipaige-board](https://github.com/sycflash/dsh-jipaige-board) | 0 | 2026-11-05 | 2026-11-05 | Super 鸡排哥看板 — 一个 DeepSeek Harness 插件，用工厂流水线实时观测 dsh-superagent 的派单调度 |
| 374 | [temidayoxyz/deep-work](https://github.com/temidayoxyz/deep-work) | 0 | 2026-11-05 | 2026-11-05 | Deep Work — a knowledge-work mode for DeepSeek Harness: research, writing, documents, spreadsheets, presentations, and verified deliverables. |
| 375 | [The4leepy/dsh-pre-edit-review](https://github.com/The4leepy/dsh-pre-edit-review) | 0 | 2026-11-05 | 2026-11-05 | Review agent-proposed file changes as an editable diff in VS Code before they are written. DSH Host plugin + VS Code extension (unofficial). |
| 376 | [TheCarey/Dsh-GuLu-diary](https://github.com/TheCarey/Dsh-GuLu-diary) | 0 | 2026-11-05 | 2026-11-05 | A DSH diary plugin that only writes on days worth remembering. |
| 377 | [TheycallmeXH/dsh-mindmap](https://github.com/TheycallmeXH/dsh-mindmap) | 0 | 2026-11-05 | 2026-11-05 | XMind-style mind maps inside the DeepSeek Harness web GUI. Markdown is the source of truth; edit the map, write back to the note. |
| 378 | [Thomas-zz/dsh-offpeak-queue](https://github.com/Thomas-zz/dsh-offpeak-queue) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: queue tasks in a chat with zero model calls, then run them automatically in the same conversation during DeepSeek off-peak (half-price) hours. |
| 379 | [tianyadadi/dsh-campus-net](https://github.com/tianyadadi/dsh-campus-net) | 0 | 2026-11-02 | 2026-11-05 | Srun 校园网认证插件 for DeepSeek Harness — 自动检测网络、一键登录、多网卡支持 |
| 380 | [tianyadadi/dsh-workbench](https://github.com/tianyadadi/dsh-workbench) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 本地可视化工作台 — 零依赖、零联网、零 token。包含插件管理、记忆银河系、主题切换 |
| 381 | [Tlr18348452080-hub/soma](https://github.com/Tlr18348452080-hub/soma) | 0 | 2026-11-05 | 2026-11-05 | 给 AI 一副会自己演化的身体：把生理学公式写成微分方程，让它有会累、会适应、会麻的状态。不是人格插件。 |
| 382 | [tommy00748-tech/dsh-native-notifications](https://github.com/tommy00748-tech/dsh-native-notifications) | 0 | 2026-11-05 | 2026-11-05 | Native desktop notifications for DeepSeek Harness: approval, question, completion, error and sign-in banners attributed to the DSH app, with a selectable and customisable synthesised chime. |
| 383 | [top10xiaowangzi-byte/dsh-daily-checkin](https://github.com/top10xiaowangzi-byte/dsh-daily-checkin) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：启动时自动完成 WorkBuddy / WPS 灵犀 / Qoder 每日签到，标题栏面板显示结果并支持失败重试，面板挂 shell.overlay。 |
| 384 | [top10xiaowangzi-byte/dsh-vpn-guard](https://github.com/top10xiaowangzi-byte/dsh-vpn-guard) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：在会话标题栏直接操作 v2rayN 订阅守护（状态面板、一键修复、启停守护、刷新订阅），面板挂 shell.overlay。 |
| 385 | [treasure-liu/dsh-zhihu-reader](https://github.com/treasure-liu/dsh-zhihu-reader) | 0 | 2026-11-05 | 2026-11-05 | 知乎搜索 + 专栏全文读取 + 独立登录（DeepSeek Harness 插件） |
| 386 | [trimine/dsh-purge-archived](https://github.com/trimine/dsh-purge-archived) | 0 | 2026-11-05 | 2026-11-05 | Permanently delete archived conversations in DeepSeek Harness — the stored log, the projection cache, the archive mark, and the workspace membership. |
| 387 | [Unchpokable/clanker-plugin-e2e-mw3bwln7](https://github.com/Unchpokable/clanker-plugin-e2e-mw3bwln7) | 0 | 2026-11-05 | 2026-11-05 | Edited by dsh-github-cli e2e |
| 388 | [Unchpokable/clanker-plugin-e2e-mw3cbl22](https://github.com/Unchpokable/clanker-plugin-e2e-mw3cbl22) | 0 | 2026-11-05 | 2026-11-05 | Edited by dsh-github-cli e2e |
| 389 | [Unchpokable/clanker-plugin-e2e-mw3crjlt](https://github.com/Unchpokable/clanker-plugin-e2e-mw3crjlt) | 0 | 2026-11-05 | 2026-11-05 | Edited by dsh-github-cli e2e |
| 390 | [Unchpokable/clanker-plugin-e2e-mw3fh7r7](https://github.com/Unchpokable/clanker-plugin-e2e-mw3fh7r7) | 0 | 2026-11-05 | 2026-11-05 | Edited by dsh-github-cli e2e |
| 391 | [Unchpokable/clanker-plugin-e2e-mw3gaxe7](https://github.com/Unchpokable/clanker-plugin-e2e-mw3gaxe7) | 0 | 2026-11-05 | 2026-11-05 | Edited by dsh-github-cli e2e |
| 392 | [uoiszero/dsh-photo-picker](https://github.com/uoiszero/dsh-photo-picker) | 0 | 2026-11-04 | 2026-11-05 | DSH 照片工作台：本机照片扫描、AI 分层筛选、人工复核与导出。 |
| 393 | [vacum972/dsh-usage-billing](https://github.com/vacum972/dsh-usage-billing) | 0 | 2026-11-05 | 2026-11-05 | 输入框下的会话级用量计费胶囊：官方峰谷价目、剩余余额、Tokens 与成本 |
| 394 | [Veduis/dsh-workspace-tints](https://github.com/Veduis/dsh-workspace-tints) | 0 | 2026-11-05 | 2026-11-05 | Quiet gradient tints for every Workspace in DeepSeek Harness, a sidebar that reads as a tree, and a green row for a chat that finished unread. |
| 395 | [victorcastro55/dsh-matrix-terminal](https://github.com/victorcastro55/dsh-matrix-terminal) | 0 | 2026-11-05 | 2026-11-05 | Phosphor-green terminal skin for the DeepSeek Harness Web UI: monospace type, scanlines, a prompt line, and a right-side work log. |
| 396 | [victorcastro55/dsh-matrix-terminal-balance](https://github.com/victorcastro55/dsh-matrix-terminal-balance) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek balance route for the dsh-matrix-terminal prompt line; the API key never leaves the host process. |
| 397 | [Vip4pt/dsh-deepseek-status-pill](https://github.com/Vip4pt/dsh-deepseek-status-pill) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek service status pill in the DeepSeek Harness Desktop caption: Atom-subscribed status light with a hover detail panel. |
| 398 | [visualcjy/nyaterm-bridge](https://github.com/visualcjy/nyaterm-bridge) | 0 | 2026-11-05 | 2026-11-05 | Run AI commands in real NyaTerm terminal sessions, with a per-workspace allowlist over NyaTerm groups and hosts. |
| 399 | [Vlad1108/dsh-codex-workbench](https://github.com/Vlad1108/dsh-codex-workbench) | 0 | 2026-11-05 | 2026-11-05 | Codex sign-in, quota and search for DeepSeek Harness |
| 400 | [vladtsvirko/dsh-penpot-plugin](https://github.com/vladtsvirko/dsh-penpot-plugin) | 0 | 2026-11-02 | 2026-11-05 | Penpot for DeepSeek Harness — read, export and import design files from a DSH agent over Penpot's local HTTP RPC API. |
| 401 | [vladtsvirko/dsh-telegram-connector](https://github.com/vladtsvirko/dsh-telegram-connector) | 0 | 2026-10-27 | 2026-11-05 | Telegram control plane for DeepSeek Harness — one group per workspace, one forum topic per session. |
| 402 | [walvka-code/proj-doc-builder](https://github.com/walvka-code/proj-doc-builder) | 0 | 2026-11-05 | 2026-11-05 | Turn a codebase into documentation an AI can read: outline per source directory, hash-based change baseline, recoverable publishing, and a verify-then-load reader. |
| 403 | [wangsrGit119/dsh-nanny-calendar](https://github.com/wangsrGit119/dsh-nanny-calendar) | 0 | 2026-11-05 | 2026-11-05 | Nanny calendar board for DeepSeek Harness: onboarding, leave and salary payout tracking on a monthly calendar.  |
| 404 | [wangtheme-coder/dsh-stellar-effort](https://github.com/wangtheme-coder/dsh-stellar-effort) | 0 | 2026-11-05 | 2026-11-05 | 星轨推理：真实 DSH 推理强度控制与轻量、持续演化的微缩宇宙 |
| 405 | [wangxy496/dsh-sensitive-guard](https://github.com/wangxy496/dsh-sensitive-guard) | 0 | 2026-11-05 | 2026-11-05 | 为 DeepSeek Harness 提供敏感信息保护：密钥、令牌、密码在进入模型上下文前替换为 &lt;SG_&gt; 占位符，明文以 AES-256-GCM 加密保存在本地保管库。 |
| 406 | [wanwujiehuyi-web/dsh-omni-browser](https://github.com/wanwujiehuyi-web/dsh-omni-browser) | 0 | 2026-11-05 | 2026-11-05 | Drive a real Chrome and bundle the DOM, accessibility tree, HAR with response bodies, console logs, storage, screenshots, PDF and screencast into one self-contained evidence folder. |
| 407 | [wdmb123/dsh-composer-screenshot](https://github.com/wdmb123/dsh-composer-screenshot) | 0 | 2026-11-05 | 2026-11-05 | A screenshot button for the DeepSeek Harness composer: whole screen, screen with this window hidden, or a hand-picked area with it hidden — straight into the message draft. |
| 408 | [WhatCannotBeSaid/dsh-quasar-theme](https://github.com/WhatCannotBeSaid/dsh-quasar-theme) | 0 | 2026-11-04 | 2026-11-05 | QUASAR — a space-themed skin for DeepSeek Harness: ink black hole in the sidebar, a live accretion disk behind the app, 53 measured tokens. |
| 409 | [WilShi/dsh-agentos-context](https://github.com/WilShi/dsh-agentos-context) | 0 | 2026-11-05 | 2026-11-05 | DSH memory &amp; ontology workspace: community fork of @deepseek-ai/dsh-agentos-context with a redesigned graph |
| 410 | [WilShi/dsh-astock](https://github.com/WilShi/dsh-astock) | 0 | 2026-11-05 | 2026-11-05 | A 股研究台：给 DeepSeek Harness 装上行情、财报、估值与研报生成能力。零配置、免 API Key，内置 DCF 与 PB-ROE 估值模型。 |
| 411 | [WilShi/dsh-coding-agents](https://github.com/WilShi/dsh-coding-agents) | 0 | 2026-10-25 | 2026-11-05 | DSH control center for locally installed Codex and Claude Code |
| 412 | [WilShi/dsh-connector-builder](https://github.com/WilShi/dsh-connector-builder) | 0 | 2026-10-25 | 2026-11-05 | Guardrailed connector design, validation, registration, and sharing Skill for DSH |
| 413 | [WilShi/dsh-external-api](https://github.com/WilShi/dsh-external-api) | 0 | 2026-10-25 | 2026-11-05 | Opt-in authenticated HTTP API for local and trusted-LAN DSH Desktop integrations |
| 414 | [WilShi/dsh-feishu](https://github.com/WilShi/dsh-feishu) | 0 | 2026-10-25 | 2026-11-05 | Feishu/Lark chat surface for DeepSeek Harness: streaming cards, in-card questions and approvals, guided setup |
| 415 | [WilShi/dsh-memory-engine](https://github.com/WilShi/dsh-memory-engine) | 0 | 2026-11-05 | 2026-11-05 | Fork of dsh-memory-engine with a redesigned memory graph (@wilshi 0.8.0) |
| 416 | [WilShi/dsh-plugin-builder](https://github.com/WilShi/dsh-plugin-builder) | 0 | 2026-10-25 | 2026-11-05 | Guardrailed DSH plugin-development Skill bundle |
| 417 | [WilShi/dsh-ssh-workspace](https://github.com/WilShi/dsh-ssh-workspace) | 0 | 2026-10-25 | 2026-11-05 | SSH/SFTP remote workspaces for DSH Desktop with local cache, conflict-safe sync, and remote terminal |
| 418 | [woshijing1991-cloud/dsh-aw-viz](https://github.com/woshijing1991-cloud/dsh-aw-viz) | 0 | 2026-11-05 | 2026-11-05 | ActivityWatch habit dashboard for the DeepSeek Harness: time allocation, fragmentation, focus blocks, hourly heatmap and PC-vs-phone split, computed locally and read-only. |
| 419 | [woshijing1991-cloud/dsh-english-study](https://github.com/woshijing1991-cloud/dsh-english-study) | 0 | 2026-11-05 | 2026-11-05 | Learn English by watching YouTube inside DeepSeek Harness: immersion time, lookup history, vocabulary book with SM-2 spaced repetition and a local dashboard. 100% local, no cloud sync. |
| 420 | [woshijing1991-cloud/dsh-music-panel](https://github.com/woshijing1991-cloud/dsh-music-panel) | 0 | 2026-11-05 | 2026-11-05 | NetEase Cloud Music panel for DeepSeek Harness: search, charts, favorites, play history, lyrics and taste-based recommendations. Official streams only, no VIP or region unlock. |
| 421 | [wqx1999/dsh-litman](https://github.com/wqx1999/dsh-litman) | 0 | 2026-11-05 | 2026-11-05 | litman for DeepSeek Harness: open your litman libraries from the sidebar; the agent installs litman when it is missing. |
| 422 | [wu04186767/dsh-plugin-macos](https://github.com/wu04186767/dsh-plugin-macos) | 0 | 2026-11-05 | 2026-11-05 | Native macOS tools for DeepSeek Harness agents: 21 local tools for notifications, clipboard, screenshots, speech, keep-awake, dark mode, Spotlight, Shortcuts, AppleScript and Safari control. Zero dependencies. |
| 423 | [wufeng0105/dsh-draft-studio](https://github.com/wufeng0105/dsh-draft-studio) | 0 | 2026-11-05 | 2026-11-05 | Turn a half-formed draft in the composer into a prompt the AI can actually follow. Rewritten in place, one click, never sent. |
| 424 | [wungjyan/dsh-offwork-countdown](https://github.com/wungjyan/dsh-offwork-countdown) | 0 | 2026-11-05 | 2026-11-05 | 悬浮在工作界面角落的下班打卡倒计时挂件 · A clock-out countdown pill for the DeepSeek Harness Web UI |
| 425 | [wuyou0423/dsh-space-ptt](https://github.com/wuyou0423/dsh-space-ptt) | 0 | 2026-11-05 | 2026-11-05 | Hold Space to talk, release to auto-send - push-to-talk for DeepSeek Harness voice input. |
| 426 | [wx-holmes/dsh-blackhole](https://github.com/wx-holmes/dsh-blackhole) | 0 | 2026-11-05 | 2026-11-05 | 黑洞：压缩即归档 —— 上下文到事件视界就压缩，原文逐字落本地归档，索引可查回原文。 |
| 427 | [Wystan68/dsh-plugin-sync](https://github.com/Wystan68/dsh-plugin-sync) | 0 | 2026-11-05 | 2026-11-05 | DSH plugin: keep the installed plugin set identical across devices — sync codes or an encrypted Cloudflare relay. |
| 428 | [X1aoDe/debao-media](https://github.com/X1aoDe/debao-media) | 0 | 2026-11-05 | 2026-11-05 | 装进 DeepSeek Harness 的小红书 / 抖音工作台：一键采集笔记与创作者后台数据，拆解爆款结构，按账号画像出选题和脚本，短视频整段交给模型看。本地运行，数据不出电脑。 |
| 429 | [x1nzzz/dsh-session-ops](https://github.com/x1nzzz/dsh-session-ops) | 0 | 2026-11-05 | 2026-11-05 | 跨会话协作工具集：消息守卫 + 跨会话提醒管理（DeepSeek Harness 插件） |
| 430 | [xf3193/dsh-serial-sifarCRT](https://github.com/xf3193/dsh-serial-sifarCRT) | 0 | 2026-11-05 | 2026-11-05 | Windows serial debug console in the DSH right sidebar: COM ports, ANSI logs, in-log Linux terminal, command buttons, multi-port tabs. |
| 431 | [xiamuwnagwang/dsh-yce](https://github.com/xiamuwnagwang/dsh-yce) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness composer prompt enhancement plugin powered by yce-mcp (dsh-yce) |
| 432 | [Xiang-ling-Wang/dsh-qmt-bridge](https://github.com/Xiang-ling-Wang/dsh-qmt-bridge) | 0 | 2026-11-05 | 2026-11-05 | 无 miniQMT 权限时，用 QMT 内置 Python + 签名订单文件桥连接 DSH 与 QMT。 |
| 433 | [xiaohui-zhangxh/dsh-task-map](https://github.com/xiaohui-zhangxh/dsh-task-map) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness task map plugin: replay a session as an SVG task flow + Gantt timeline, with wait analysis, plan-vs-execution changes and display-only task relations. |
| 434 | [xiaoqiangch/dsh-preview-theme-dark](https://github.com/xiaoqiangch/dsh-preview-theme-dark) | 0 | 2026-11-04 | 2026-11-05 | DeepSeek Harness 文档预览深色模式插件：标题栏一键浅/深切换、跟随系统外观、浅深两侧配色分别记忆（MIT，独立增强版） |
| 435 | [xiaowuDev/dsh-gitlines](https://github.com/xiaowuDev/dsh-gitlines) | 0 | 2026-11-05 | 2026-11-05 | Git history, AI commit overviews, file-tree diffs and session-traced workflows for DeepSeek Harness. |
| 436 | [xiaozqi/dsh-blue-fat-fish](https://github.com/xiaozqi/dsh-blue-fat-fish) | 0 | 2026-11-05 | 2026-11-05 | Blue Fat Fish - autonomous Android agent plugin for DeepSeek Harness. Drives a real phone over adb with an LLM decision loop and runs key-free in DSH via the host model channel. |
| 437 | [xingyanghaifu/dsh-reqtrace](https://github.com/xingyanghaifu/dsh-reqtrace) | 0 | 2026-11-04 | 2026-11-05 | Requirement-to-evidence audit for DeepSeek Harness sessions: map every requirement to tool evidence, catch missing or out-of-scope work, and audit subagents and conflicts. |
| 438 | [xingzhen199186/dsh-entry-drawer](https://github.com/xingzhen199186/dsh-entry-drawer) | 0 | 2026-11-05 | 2026-11-05 | Fold the DSH left sidebar's entry list behind one switch so the session history keeps its room. |
| 439 | [xinstart-1/dsh-files-fallback](https://github.com/xinstart-1/dsh-files-fallback) | 0 | 2026-11-03 | 2026-11-05 | DSH 文件引用与附件插件：拖拽/粘贴/上传任意类型文件，统一落盘并以 @绝对路径 引用；桌面端目录/超大文件自动回退为 @路径 引用；非多模态模型的图片由视觉模型识别生成中文描述，模型从 harness 模型目录下拉选取。 |
| 440 | [xinstart-1/dsh-log-triage](https://github.com/xinstart-1/dsh-log-triage) | 0 | 2026-11-04 | 2026-11-05 | Intranet container-log triage for DeepSeek Harness: a model-callable log_triage tool that pulls docker logs over SSH, clusters errors into fingerprints, extracts stack root causes, and reads only the evidence it needs. |
| 441 | [XtremXpert/dsh-speech-whisper](https://github.com/XtremXpert/dsh-speech-whisper) | 0 | 2026-11-05 | 2026-11-05 | Whisper speech-to-text provider plugin for DeepSeek Harness (French and 90+ languages, local) |
| 442 | [xuenann/dsh-workspace-purge](https://github.com/xuenann/dsh-workspace-purge) | 0 | 2026-11-05 | 2026-11-05 | DSH next 插件，真正删除左侧的对话与工作区：会话日志与投影缓存移入回收站，工作区目录也可一并删除。 |
| 443 | [XuRui2022/dsh-paper-manager](https://github.com/XuRui2022/dsh-paper-manager) | 0 | 2026-11-05 | 2026-11-05 | Academic paper reading and citation manager for DeepSeek Harness |
| 444 | [xuwhao/dsh-needs-you-mac](https://github.com/xuwhao/dsh-needs-you-mac) | 0 | 2026-11-05 | 2026-11-05 | macOS notifications for DeepSeek Harness: approvals, questions, and sign-ins — click a banner to jump back to DSH. |
| 445 | [xuxAkiss/saveDDL](https://github.com/xuxAkiss/saveDDL) | 0 | 2026-11-05 | 2026-11-05 | 面向大学生的 DDL 收集、提醒与查看工具：DSH 插件 / Electron 托盘 / 浏览器扩展 / MCP / 本地 OCR。 |
| 446 | [xuzhecomeon/dsh-research-suite](https://github.com/xuzhecomeon/dsh-research-suite) | 0 | 2026-11-05 | 2026-11-05 | 科研全流程 DSH 插件：自动接管科研任务，10 个技能 + 7 个工具，把 719 篇科研技能融合成 81 张能力卡。 |
| 447 | [yangaiwu/vod-devkit](https://github.com/yangaiwu/vod-devkit) | 0 | 2026-11-03 | 2026-11-05 | VOD 用户声音采集插件——MCP server+技能+声明式护栏，把 agent 产品的用户反馈安全送进 VOD |
| 448 | [yangshulin2333/dsh-openai-image](https://github.com/yangshulin2333/dsh-openai-image) | 0 | 2026-11-05 | 2026-11-05 | OpenAI Images 2.6 (gpt-image-2.6) tools for DeepSeek Harness, with Roblox presets and Open Cloud asset upload |
| 449 | [yanguohong1/dsh-project-sources](https://github.com/yanguohong1/dsh-project-sources) | 0 | 2026-11-05 | 2026-11-05 | Codex-style project sources for DeepSeek Harness: attach extra folders to one workspace, alias them, and share read/write/exec permissions |
| 450 | [YangYhx/yanghx-dsh-quick-notes](https://github.com/YangYhx/yanghx-dsh-quick-notes) | 0 | 2026-11-05 | 2026-11-05 | dsh的笔记插件 |
| 451 | [yangyiqun747/dsh-plugin-playbook](https://github.com/yangyiqun747/dsh-plugin-playbook) | 0 | 2026-11-05 | 2026-11-05 | Playbook for DeepSeek Harness: turn a successful task into a reusable SOP + pitfall list, then replay it on similar tasks as native DSH skills. |
| 452 | [yankeguo/dsh-infini-goal](https://github.com/yankeguo/dsh-infini-goal) | 0 | 2026-11-05 | 2026-11-05 | 把"自动续跑"改造成一个 无轮次上限、按最小间隔推进、可配置静默时段的无限目标 |
| 453 | [YanZephyr14/dsh-local-cost](https://github.com/YanZephyr14/dsh-local-cost) | 0 | 2026-11-05 | 2026-11-05 | DSH 自配价格的峰谷计费插件（dsh-go 原生）：今日费用 + 费用构成 + 峰谷拆分 |
| 454 | [YaoleWu/dsh-checkout-guard](https://github.com/YaoleWu/dsh-checkout-guard) | 0 | 2026-08-17 | 2026-11-05 | Pre-flight guard for git working copies: is the checkout you are about to write to the one you think it is? Branch identity, drift from the remote and how stale that figure is, the identity your next commit will carry, work already in the index, and duplicate clones. Read-only, offline by default. |
| 455 | [YaoleWu/dsh-context-badge](https://github.com/YaoleWu/dsh-context-badge) | 0 | 2026-08-17 | 2026-11-05 | Local-first context notes and todos for DeepSeek Harness, with an optional macOS foreground-window companion. |
| 456 | [YaoleWu/dsh-gateway-billing](https://github.com/YaoleWu/dsh-gateway-billing) | 0 | 2026-08-16 | 2026-11-05 | Per-conversation LLM billing display for the DSH web composer, for anyone self-hosting a New API / One API-compatible gateway. |
| 457 | [Yifeng123589/dsh-design-kit](https://github.com/Yifeng123589/dsh-design-kit) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness design delivery plugin: design lint/tokens, multi-direction shortlist, JND probe, PPT deck check/export/render. |
| 458 | [YinqiSY/dsh-session-folders](https://github.com/YinqiSY/dsh-session-folders) | 0 | 2026-11-05 | 2026-11-05 | File DeepSeek Harness conversations into folders inside the sidebar's own session tree — decorates the official list instead of replacing it. |
| 459 | [YKY0521/dsh-yangyu](https://github.com/YKY0521/dsh-yangyu) | 0 | 2026-11-05 | 2026-11-05 | 养鱼 · Yangyu：DeepSeek Harness 多角色陪伴插件，支持独立记忆、QQ 与微信机器人连接。 |
| 460 | [yu1842/xianshou-plugin](https://github.com/yu1842/xianshou-plugin) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件：先手协议 · 防认知债 —— 不限制 AI 用量，只规定它在什么时点介入 (dsh &gt;=0.2.1-rc.1 &lt;0.3.0) |
| 461 | [Yyhy110421/dsh-durable-wait](https://github.com/Yyhy110421/dsh-durable-wait) | 0 | 2026-11-05 | 2026-11-05 | 守候：DSH 插件，文件出现/修改或进程退出时自动叫醒原会话。 |
| 462 | [zayyehtut/dsh-github-panel](https://github.com/zayyehtut/dsh-github-panel) | 0 | 2026-11-05 | 2026-11-05 | GitHub panel for the DeepSeek Harness Web UI: connection status, repository dashboard, profile checklist and safe metadata actions. |
| 463 | [zayyehtut/dsh-secret-ask](https://github.com/zayyehtut/dsh-secret-ask) | 0 | 2026-11-05 | 2026-11-05 | Agent-asked secrets for DeepSeek Harness: a masked card stores API keys and tokens in the local credential store without them entering the chat, then injects them into one command. |
| 464 | [zeelinkCN/dsh-netease-music](https://github.com/zeelinkCN/dsh-netease-music) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 网易云音乐插件：侧栏官方红标入口、听歌模式轮播、黑胶/歌词播放页、音质切换、红心收藏、左侧栏迷你播放器；对话里说「放首歌」即由 Agent 调 netease_play 在插件内播放；装插件自动安装网易云 MCP 数据引擎。 |
| 465 | [zefferry/dsh-plugin-manager-plus](https://github.com/zefferry/dsh-plugin-manager-plus) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件管理增强：标签筛选、搜索排序、批量操作、图标与 AI 改名（非官方，Surface v1） |
| 466 | [ZenithJoyH/dsh-quote](https://github.com/ZenithJoyH/dsh-quote) | 0 | 2026-11-05 | 2026-11-05 | DSH Web 插件：多段引用卡片 + 引用回复，让引用不再是一坨 &gt; 文本 \| DSH web plugin: multi-quote cards for quoting and replying |
| 467 | [ZhejiangF/dsh-humanizer-zh](https://github.com/ZhejiangF/dsh-humanizer-zh) | 0 | 2026-11-05 | 2026-11-05 | On-demand Chinese editing skill for DSH that preserves facts, uncertainty, genre, and author voice. |
| 468 | [zhexuany/dsh-remote-access](https://github.com/zhexuany/dsh-remote-access) | 0 | 2026-11-05 | 2026-11-05 | DSH Harness Desktop plugin: expose the local Web GUI to another machine through a secure tunnel (Cloudflare quick/named, SSH) with a tokenised link. |
| 469 | [zhexuany/dsh-stateful-responses](https://github.com/zhexuany/dsh-stateful-responses) | 0 | 2026-11-05 | 2026-11-05 | dsh plugin: use the stateful OpenAI Responses API (previous_response_id + delta input) instead of replaying the full conversation |
| 470 | [ZhongqiXiao/dsh-visual-annotator](https://github.com/ZhongqiXiao/dsh-visual-annotator) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin: pick, annotate, comment and screenshot elements of a real Chrome/Edge page and hand locators to the agent |
| 471 | [zilta-amaze/dsh-pomodoro-dial](https://github.com/zilta-amaze/dsh-pomodoro-dial) | 0 | 2026-11-04 | 2026-11-05 | Pomodoro timer for the DeepSeek Harness Web UI: a floating dial with custom focus/break lengths and five synthesized alarm sounds. |
| 472 | [ZIRAN456/dsh-plugins](https://github.com/ZIRAN456/dsh-plugins) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness 插件精选合集 (Curated plugins for DeepSeek Harness) |
| 473 | [zmengle/dsh-plugin-ark-image-gen](https://github.com/zmengle/dsh-plugin-ark-image-gen) | 0 | 2026-11-05 | 2026-11-05 | DSH 生图插件：火山方舟 / 豆包 Seedream 文生图与图生图，两个模型工具 + 内置技能（Volcano Ark / Seedream image generation for DeepSeek Harness） |
| 474 | [zmengle/dsh-plugin-artifacts](https://github.com/zmengle/dsh-plugin-artifacts) | 0 | 2026-11-05 | 2026-11-05 | DSH 产物管理工作台：网格与列表、预览、重命名、回收站、zip 归档、可选 COS 上传（Artifacts manager for DeepSeek Harness） |
| 475 | [zmengle/dsh-plugin-sticky-wall](https://github.com/zmengle/dsh-plugin-sticky-wall) | 0 | 2026-11-05 | 2026-11-05 | DSH 便签墙插件：侧栏一块可自由摆放的便签墙 + 4 个 sticky_wall_* 模型工具（A sticky-note wall for DeepSeek Harness） |
| 476 | [zmengle/dsh-plugins](https://github.com/zmengle/dsh-plugins) | 0 | 2026-11-05 | 2026-11-05 | zmengle 的 DeepSeek Harness 插件集合（DeepSeek Harness plugins by zmengle） |
| 477 | [zouyao-andy/dsh-openui-studio](https://github.com/zouyao-andy/dsh-openui-studio) | 0 | 2026-11-05 | 2026-11-05 | On-demand interactive OpenUI answers inside DeepSeek Harness conversations. |
| 478 | [zt8989/dsh-agentmail](https://github.com/zt8989/dsh-agentmail) | 0 | 2026-11-04 | 2026-11-05 | Agent Mail for DeepSeek Harness: send/receive email via agently-cli with session/thread routing |
| 479 | [zuoyunlai/dsh-rightbar-quicknav](https://github.com/zuoyunlai/dsh-rightbar-quicknav) | 0 | 2026-11-05 | 2026-11-05 | DSH right-sidebar quick navigation: a vertical icon rail that jumps straight to any right-sidebar tab. Five-language README. |
| 480 | [zxbingoo/dsh-minimalist-appearance](https://github.com/zxbingoo/dsh-minimalist-appearance) | 0 | 2026-11-05 | 2026-11-05 | Color and conversation-background presets for DeepSeek Harness, preserving native typography, layout, and interactions. |
| 481 | [zyfgood/dsh-email-notify](https://github.com/zyfgood/dsh-email-notify) | 0 | 2026-11-05 | 2026-11-05 | DeepSeek Harness plugin: SMTP email send/receive (email_send + email_check) for agents - task reports, cron notifications, inbox summaries. Credentials via env refs. npm: @zyfgood/dsh-email-notify |
| 482 | [Zyu-23/dsh-memory-nebula](https://github.com/Zyu-23/dsh-memory-nebula) | 0 | 2026-11-05 | 2026-11-05 | 记忆星云：把 DeepSeek Harness 的记忆画成一张会呼吸的力导向星云图，并接管记忆 / 人格 / 状态 |
| 483 | [zzh407/dsh-newapi-usage](https://github.com/zzh407/dsh-newapi-usage) | 0 | 2026-11-05 | 2026-11-05 | A DSH Web plugin for viewing NewAPI relay-site balance and usage. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1148462398-hub/dsh-shared-memory
- 123David-yang/dsh-goal-board
- 141w/dsh-quorum
- 15217814598/dsh-kanban
- 1Lry1/dsh-workbay
- 774015352-sys/dsh-watchlist
- alexkwok213/dsh-computer-use
- anzhaohao/DragView
- anzhaohao/dsh-side-chat-plus-plus
- Audrey-cn/dsh-bot-codex-ui
- beicause/dsh-extra-sandbox-presets
- boxiaolanya2008/dsh-internal-test-mode
- boxiaolanya2008/tokensqueezer
- Burns1028/dsh-plugin-project-mode
- Doctor-Pan-code/dsh-useof-skill-panel
- Doctor-Pan-code/ncm-player5
- DreamStars168/dsh-session-delete
- felix-lj-ct/dsh-mcp-live-status
- Fishsb/dsh-prompt-enhancer
- Gahulv/dsh-server-ops-monitor
- goodjin/dsh-chat-area
- hotkong/dsh-home-assistant
- JasperPengC/dsh-agent-blackbox
- JasperPengC/dsh-mcp-skills-board
- jryang1997/dsh-ascii-whales
- jryang1997/dsh-hold-to-dictate
- jypjypjypjyp/dsh-paper-reader
- LeslieWylie/agent-loop-workflow
- LeslieWylie/dsh-checkout-guard
- LeslieWylie/dsh-context-badge
- LeslieWylie/dsh-fleet-audit
- LeslieWylie/dsh-gateway-billing
- LeslieWylie/dsh-md-preview
- LeslieWylie/dsh-ops-kit
- LeslieWylie/dsh-session-search-pro
- LeslieWylie/dsh-task-relay
- LeslieWylie/review-workflow
- lkpsg/dsh-token-meter
- louke6572/dsh-whale-widget-plus
- lvxianchao/dsh-guard
- MnemosyneOS/dsh-ai-memory
- momijijin/dsh-session-groups
- Nanawwa/dsh-vision-proxy
- Qingzhou-Joshua/dsh-dev-toolbox
- stallenlu/dsh-wsl
- TaoCultivator/dsh-sidenote
- TonyZiYuan/dsh-session-delete
- YOU-SHOULD-KNOW-ME/dsh-rail-music
- zmz123612/dsh-book-deconstruct
- zouzhe1/dsh-desktop
