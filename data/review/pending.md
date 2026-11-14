# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-14**
- 快照日期 / Snapshot date: **2026-11-14 (UTC)**
- 待审核 / Pending: **410**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **35**
- Star 异常增长 / Star-growth alerts: **9** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-13** / vs previous snapshot **2026-11-13**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **9**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [oil-oil/dsh-oil-ui](https://github.com/oil-oil/dsh-oil-ui) | 待审 / pending | 248 | — | 6 | 26d | 待审高星 | 核准即榜 #113 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 74238 | +1506 | 2067 | 50d | 日增百星 | 日增 +1506★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 18879 | +234 | 647 | 92d | 日增百星 | 日增 +234★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1195 | +154 | 7 | 33d | 日增百星 | 日增 +154★；★/fork 170.7；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 7754 | +152 | 760 | 37d | 日增百星 | 日增 +152★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 6917 | +136 | 117 | 89d | 日增百星 | 日增 +136★ |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 75036 | +133 | 2702 | 416d | 日增百星 | 日增 +133★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12416 | +109 | 475 | 91d | 日增百星 | 日增 +109★；已不进榜单 |
| ⚠️ [ADWMC/helm-d](https://github.com/ADWMC/helm-d) | 已核准 / approved | 1281 | +21 | 135 | 91d | 冲入 Top 20 | 冲入 Top 20（21→20） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [oil-oil/dsh-oil-ui](https://github.com/oil-oil/dsh-oil-ui) ⚠️ | 248 | 2026-10-18 | 2026-11-14 | Oil UI 的 DeepSeek Harness 原生插件，支持自动切换本地安装的 Oil UI Pro |
| 2 | [tubeagentkit/youtube-transcript-skills](https://github.com/tubeagentkit/youtube-transcript-skills) | 41 | 2026-09-12 | 2026-11-14 | YouTube transcript Agent Skill for Claude Code, Cursor, Codex and OpenClaw: fetch YouTube video transcripts, search videos, browse channels and playlists. |
| 3 | [QIANLING-0831/dsh-memory-pro](https://github.com/QIANLING-0831/dsh-memory-pro) | 19 | 2026-08-18 | 2026-11-14 | DSH Memory Pro：让新会话找回同工作区的旧讨论，回读原文与后续纠正，并带来源继续聊。另含中文检索、长期事实与受保护技能。 |
| 4 | [guohwa/dsh-plugin-image-workbench](https://github.com/guohwa/dsh-plugin-image-workbench) | 12 | 2026-11-08 | 2026-11-14 | Bluxe 手绘工坊 · 生图工作台：装在 DSH 侧栏的 AI 生图工作台插件，内置账号池装好即用，输入提示词一键生成图文 / 摄影配图，也能接你自己的 OpenAI 兼容接口。 |
| 5 | [slowhiring/dsh-github-ops](https://github.com/slowhiring/dsh-github-ops) | 9 | 2026-11-14 | 2026-11-14 | 让 DeepSeek Harness 直接操作你的 GitHub：建仓库、写文件、克隆/提交/推送真实代码、开 PR、提问题、搜索。 |
| 6 | [liangdabiao/dsh-reddit-research](https://github.com/liangdabiao/dsh-reddit-research) | 7 | 2026-11-13 | 2026-11-14 | dsh 插件：Reddit 调研台 — Arctic Shift 抓取 ，从 subreddit 抓取真实用户讨论（Arctic Shift 免认证档案 API），输出痛点评分卡、商业信号（购买/付费/流失/退货）、竞品口碑与选品/进入决策报告 |
| 7 | [imlishiyuan/deepseek4j](https://github.com/imlishiyuan/deepseek4j) | 4 | 2025-01-25 | 2026-11-14 | Deepseek4j是一个deepseek的api客户端 ❤ ❤ ❤  |
| 8 | [MakerFlyFly/DSH-better-classifier](https://github.com/MakerFlyFly/DSH-better-classifier) | 4 | 2026-11-13 | 2026-11-14 | Nested folders, colored tags, and tree search for DeepSeek Harness. |
| 9 | [Nikodem5/dsh-web-terminal](https://github.com/Nikodem5/dsh-web-terminal) | 4 | 2026-10-02 | 2026-11-14 | Terminals tab plugin for DeepSeek Harness: draggable, snappable PTY terminal windows for running multiple agents |
| 10 | [CheeseEri/dsh-sidebar-dock](https://github.com/CheeseEri/dsh-sidebar-dock) | 3 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 侧边栏入口管理：一键收起/展开、拖动排序、常用入口固定 Sidebar entry manager for DeepSeek Harness — one-click collapse/expand, drag-to-reorder, and pinned favourites. |
| 11 | [emmettlu/tracefs](https://github.com/emmettlu/tracefs) | 3 | 2026-11-14 | 2026-11-14 | tracefs: a versioned, branching file system for AI agents (kernel module + userspace daemon) |
| 12 | [Liuary/OpenFeel](https://github.com/Liuary/OpenFeel) | 3 | 2026-08-07 | 2026-11-14 | 主打一个许愿式编程 |
| 13 | [lonelycrab888/dsh-remote-dc](https://github.com/lonelycrab888/dsh-remote-dc) | 3 | 2026-11-14 | 2026-11-14 | Access files, search logs, and run commands on paired machines from DeepSeek Harness using Desktop Commander’s official Remote MCP. No public IP, inbound ports, or SSH required. |
| 14 | [baojingyu/dsh-superagent-multi-channel](https://github.com/baojingyu/dsh-superagent-multi-channel) | 2 | 2026-11-07 | 2026-11-14 | Multi-channel edition of a DSH superagent: GitLab, Yunxiao Projex, WeChat, DingTalk and WeCom sources, many instances per channel |
| 15 | [harm-m422/dsh-memory](https://github.com/harm-m422/dsh-memory) | 2 | 2026-10-25 | 2026-11-14 | A scoped memory model shared by every agent: world facts, topic lines, file work records, and the current session's direction. Plugin for DeepSeek Harness. |
| 16 | [NEVSTOP-LAB/dsh-net-opt](https://github.com/NEVSTOP-LAB/dsh-net-opt) | 2 | 2026-11-11 | 2026-11-14 | 解决 provider 请求「连接经常失败」的问题 |
| 17 | [riverai/dsh-calibre-ebook-translator](https://github.com/riverai/dsh-calibre-ebook-translator) | 2 | 2026-09-15 | 2026-11-14 | Calibre中的ebook翻译插件在现代化agents工作流中的适配 |
| 18 | [1010231693/dsh-bat-runner](https://github.com/1010231693/dsh-bat-runner) | 1 | 2026-11-14 | 2026-11-14 | 浮在 DSH 界面上的本地脚本日志面板：逐字显示 bat/cmd 输出，可自己运行/停止脚本，可选接收 BatRunner 启动器转发的日志。 |
| 19 | [12luomu/dsh-voice-companion](https://github.com/12luomu/dsh-voice-companion) | 1 | 2026-11-14 | 2026-11-14 | Realtime voice assistant for DeepSeek Harness: floating orb, wake word, barge-in, per-topic voice transcripts, task delegation to the main conversation. |
| 20 | [AkviliAR26710/dsh-lossless-context](https://github.com/AkviliAR26710/dsh-lossless-context) | 1 | 2026-10-27 | 2026-11-14 | Lossless context for DeepSeek Harness (DSH): every message archived verbatim in local SQLite + FTS5, compaction only shrinks what the model sees, lcm_grep / lcm_expand pull the original text back. 无损上下文方案：压缩只腾窗口，细节可逐字找回。 |
| 21 | [AwenJackson/dsh-volc-balance-card](https://github.com/AwenJackson/dsh-volc-balance-card) | 1 | 2026-11-13 | 2026-11-14 | DSH sidebar card: Volcengine (火山引擎) account balance and Ark Coding/Agent plan quota, with in-card AK/SK setup. |
| 22 | [borncode-app/dsh-minimax-kit](https://github.com/borncode-app/dsh-minimax-kit) | 1 | 2026-11-14 | 2026-11-14 | The five MiniMax plugins as one Plugins entry: credit failover, daily check-in, model-list sync, the composer quota chip, and the MiniMax Code bridge. |
| 23 | [buaafish/dsh-ai-session-rename](https://github.com/buaafish/dsh-ai-session-rename) | 1 | 2026-11-14 | 2026-11-14 | DSH plugin: right-click a session to rename it from its own conversation content. |
| 24 | [cheetahbeatbeat/dsh-optimize](https://github.com/cheetahbeatbeat/dsh-optimize) | 1 | 2026-09-14 | 2026-11-14 | Long-session resource control for DeepSeek Harness: measures the context every request carries, warns at configurable thresholds, can run the harness compaction engine over budget, and contains offscreen chat rows behind a toggle. |
| 25 | [ChenChenyaqi/dsh-imessage](https://github.com/ChenChenyaqi/dsh-imessage) | 1 | 2026-11-14 | 2026-11-14 | iMessage接入DeepSeek Harness(DSH)的插件——给大肥鱼完整的一生 |
| 26 | [Chillizu/miopiik](https://github.com/Chillizu/miopiik) | 1 | 2026-11-10 | 2026-11-14 | MiOpIIk Agent for DeepSeek Harness (DSH) — Mind / Ink / Operator: conversation and background action as two timelines over one append-only log. |
| 27 | [cqxsg/dsh-recollection](https://github.com/cqxsg/dsh-recollection) | 1 | 2026-11-14 | 2026-11-14 | Autonomous conversation recall plugin for DeepSeek Harness — bring forgotten details back into the conversation, even after context compaction. \| 为 DeepSeek Harness 提供自主对话回想能力——即使上下文被压缩，也能让遗忘的细节重新回到对话中。 |
| 28 | [createjy/dsh-context-control](https://github.com/createjy/dsh-context-control) | 1 | 2026-11-08 | 2026-11-14 | DeepSeek Harness 上下文管控：看清 token 构成，按会话懒加载技能/MCP/插件，按需压缩。 |
| 29 | [cybtachyon/dsh-plugin-obsidian-mem](https://github.com/cybtachyon/dsh-plugin-obsidian-mem) | 1 | 2026-11-12 | 2026-11-14 | Obsidian Mem is a DeepSeek Harness plugin that lets you use your markdown vaults as shared agent memory.  Obsidian Mem 是一款 DeepSeek Harness 插件，可将您的 Markdown 知识库用作智能体（Agent）的共享记忆。 |
| 30 | [fangqiing/hello_world](https://github.com/fangqiing/hello_world) | 1 | 2026-11-14 | 2026-11-14 | Companion bundle for DeepSeek Harness |
| 31 | [giuliano1101/DSH-StoryDesk](https://github.com/giuliano1101/DSH-StoryDesk) | 1 | 2026-11-12 | 2026-11-14 | A local-first novel &amp; screenplay workspace for DeepSeek Harness — story bible, evidence-based diagnosis, AI collaboration and version-safe revision. |
| 32 | [gluztm/dsh-chief](https://github.com/gluztm/dsh-chief) | 1 | 2026-11-14 | 2026-11-14 | ✦ DSH 参谋长 · SuperAgent 跨窗统筹与多智能体指挥舱 \| Multi-Agent Command Cockpit for DeepSeek Harness (DSH): Pyramid Subagent DAG, 4-Tier Cold Archive Vault, /goal Q&amp;A &amp; Pinned Redline Governance |
| 33 | [grq6414-hash/dsh-style-detector](https://github.com/grq6414-hash/dsh-style-detector) | 1 | 2026-11-14 | 2026-11-14 | 中文「AI 味」检测器：本地规则引擎打分并标出套话、句式均匀、缺画面感与重复，另设错字页；分数始终由本地算。Chinese prose AI-flavor detector for DSH. |
| 34 | [hongxin-y/dsh-fallback-router](https://github.com/hongxin-y/dsh-fallback-router) | 1 | 2026-11-14 | 2026-11-14 | Model-centric routing for DeepSeek Harness: per-model fallback (official or loop), time windows, per-provider retry and failure rules |
| 35 | [huanlin-labs/dsh-computer-browser](https://github.com/huanlin-labs/dsh-computer-browser) | 1 | 2026-11-07 | 2026-11-14 | DSH 的桌面 + 浏览器统一操作插件：一个工具面，既能操作 Windows 应用，也能操作真实登录态的 Chrome。 |
| 36 | [ikeyuchen/dsh-imagekit](https://github.com/ikeyuchen/dsh-imagekit) | 1 | 2026-11-07 | 2026-11-14 | 本地生图与放大的 DeepSeek Harness 插件：Qwen-Image 文生图 / 参考图改图、Vulkan 超分、像素处理，附 ComfyUI 引擎管理与显存监测 |
| 37 | [infcel/dsh-prompt-optimizer](https://github.com/infcel/dsh-prompt-optimizer) | 1 | 2026-11-12 | 2026-11-14 | DSH 提示词优化：给 DSH 输入框加一个 ✦ 优化按钮，把随手写下的一句话，改写成结构清楚、约束明确的提示词，替换回输入框。 |
| 38 | [jayhchen/dsh-terminal-tab](https://github.com/jayhchen/dsh-terminal-tab) | 1 | 2026-11-14 | 2026-11-14 | Terminal tab for the Conversation view row — the same persistent shells as the sidebar terminal · DeepSeek Harness（DSH）对话视图栏的持久终端 tab——与侧栏终端共用同一套 shell，入口在顶部 |
| 39 | [Joseph2Young/dsh-connect-doubaowork](https://github.com/Joseph2Young/dsh-connect-doubaowork) | 1 | 2026-11-13 | 2026-11-14 | 豆包工作模式接入 DSH：把豆包聚合的模型（豆包 / DeepSeek / Kimi / GLM）以本机 OpenAI 兼容网关的形式路由到 DeepSeek Harness。 |
| 40 | [juanweimao/dsh-long-session](https://github.com/juanweimao/dsh-long-session) | 1 | 2026-11-14 | 2026-11-14 | 给大肥鱼一个永远的家：会话再长也不必换新的，不用再撑爆那 4 GB 的堆，醒过来还是原来那条鱼。但是建议还是把突破4G堆的asar补丁打好！ |
| 41 | [jx70/dsh-cloudmusic-player](https://github.com/jx70/dsh-cloudmusic-player) | 1 | 2026-11-08 | 2026-11-14 | DSH 悬浮播放器：联动本机网易云音乐客户端，调音量 / 切歌 / 滚动歌词（含译文），适配 Web / CLI / 桌面版 |
| 42 | [jx70/dsh-comfyui-link](https://github.com/jx70/dsh-comfyui-link) | 1 | 2026-11-13 | 2026-11-14 | 让 DSH Agent 直接驱动本地 ComfyUI 出图：8 个工具 + 设置页 + 审图闭环 · Drive your local ComfyUI from DeepSeek Harness |
| 43 | [kevinxcw/dsh-approval-popups](https://github.com/kevinxcw/dsh-approval-popups) | 1 | 2026-11-14 | 2026-11-14 | Cross-session approval, question and completion popups for DeepSeek Harness. |
| 44 | [khglobal/dsh-nocco](https://github.com/khglobal/dsh-nocco) | 1 | 2026-11-14 | 2026-11-14 | Describe a web system in chat and get a working one: admin panels, mobile apps, games. Live preview beside the conversation, click an element to change it, start from your Excel data, undo any step. A DeepSeek Harness plugin. |
| 45 | [KUN-NNN/deepclear-ui](https://github.com/KUN-NNN/deepclear-ui) | 1 | 2026-11-14 | 2026-11-14 | DeepClear UI — dot-matrix welcome page for the DeepSeek Harness web UI |
| 46 | [L-aim/dsh-plugin-screenshot-ask](https://github.com/L-aim/dsh-plugin-screenshot-ask) | 1 | 2026-11-14 | 2026-11-14 | DSH 插件：截图提问——框选屏幕任意区域，图片直接进入输入框，补一句问题即可发送（形式和豆包的截图提问一样） |
| 47 | [l-da-da/credit-board](https://github.com/l-da-da/credit-board) | 1 | 2026-11-14 | 2026-11-14 | 每日自动签到 + 额度看板（DeepSeek Harness 插件）：WorkBuddy / 豆包 / CodeArts / AutoClaw 签到与余额汇总到 DSH 侧边栏 |
| 48 | [Leica-Shen/deepseek-harness-group-chat](https://github.com/Leica-Shen/deepseek-harness-group-chat) | 1 | 2026-11-14 | 2026-11-14 | Cross-session group chat for DeepSeek Harness with @alias routing, audited organizer delegation, ambient or urgent delivery, and collapsible panes. |
| 49 | [LeoAndJellyfish/dsh-plugin-index](https://github.com/LeoAndJellyfish/dsh-plugin-index) | 1 | 2026-11-14 | 2026-11-14 | LeoAndJellyfish 维护的 DSH 插件索引，收录自有及第三方插件，保留原作者与固定的上游安装来源。 |
| 50 | [lion231226/dsh-vizro](https://github.com/lion231226/dsh-vizro) | 1 | 2026-11-14 | 2026-11-14 | Vizro dashboards inside DeepSeek Harness: seven native tools over a Python sidecar, six skills, and a workbench panel. No MCP server. |
| 51 | [lordraiden/dsh-mistral-pro](https://github.com/lordraiden/dsh-mistral-pro) | 1 | 2026-11-14 | 2026-11-14 | DeepSeek Harness (DSH) plugin: Mistral AI subscription (Vibe Pro/Team) model provider with multi-account failover, prompt-cache tuning and a composer usage panel. · DeepSeek Harness（DSH）插件：接入 Mistral AI 订阅（Vibe Pro/Team）的模型提供方，支持多账号故障切换、提示词缓存调优和输入框额度面板。 |
| 52 | [lyingice/dsh-client-ui-mc-skin](https://github.com/lyingice/dsh-client-ui-mc-skin) | 1 | 2026-09-14 | 2026-11-14 | Minecraft Ore UI theme for DeepSeek Harness Web - pixel font, persistent toggles, and host-side font routing. |
| 53 | [MeruSu/dsh-better-notice](https://github.com/MeruSu/dsh-better-notice) | 1 | 2026-11-11 | 2026-11-14 | Visual + audible session notices for DeepSeek Harness (DSH) Web: one tab seat per hot session, a state glyph on every sidebar row, a sound and a popout picture when a session needs you. Six states, three surfaces, one command to install. |
| 54 | [MeruSu/dsh-better-setting-page](https://github.com/MeruSu/dsh-better-setting-page) | 1 | 2026-11-14 | 2026-11-14 | Full-screen settings page with a collapsible navigation rail for DeepSeek Harness (placeholder release). |
| 55 | [MeruSu/dsh-ui-controller](https://github.com/MeruSu/dsh-ui-controller) | 1 | 2026-11-14 | 2026-11-14 | Inspect and control the UI that other plugins register into DeepSeek Harness slots (placeholder release). |
| 56 | [mrr061119/windows-topmost-widget](https://github.com/mrr061119/windows-topmost-widget) | 1 | 2026-11-14 | 2026-11-14 | An always-on-top status window for Windows: shows what your agents are doing |
| 57 | [msz3546/stl-to-editable-part](https://github.com/msz3546/stl-to-editable-part) | 1 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 插件，将 STL 网格重建为可编辑的 SolidWorks 零件（SLDPRT），支持合并共面三角面、恢复圆柱孔壁，并检查草图是否完全定义及尺寸能否驱动几何 |
| 58 | [mysteriousPldq/dsh-market-seed](https://github.com/mysteriousPldq/dsh-market-seed) | 1 | 2026-11-13 | 2026-11-14 | Seed DeepSeek Harness plugin-market index sources on startup, so the Discover tab can search and install community plugins right after install. |
| 59 | [NaiLuo003/dsh-purge-x](https://github.com/NaiLuo003/dsh-purge-x) | 1 | 2026-11-04 | 2026-11-14 | dsh-purge二开 |
| 60 | [NekogamiJam/dsh-subagent-arg-guard](https://github.com/NekogamiJam/dsh-subagent-arg-guard) | 1 | 2026-11-08 | 2026-11-14 | Narrow DSH subagent argument recovery that restores normal defaults without taking over model routing |
| 61 | [NEVSTOP-LAB/dsh-bridge-tunnel-hub](https://github.com/NEVSTOP-LAB/dsh-bridge-tunnel-hub) | 1 | 2026-11-11 | 2026-11-14 | dsh-bridge 公网隧道地址登记：把每台机器的隧道地址汇总到一个 Gist，随时查得到 |
| 62 | [OMEN111111/dsh-model-gen](https://github.com/OMEN111111/dsh-model-gen) | 1 | 2026-11-12 | 2026-11-14 | dsh-model-gen — DeepSeek Harness 3D generation plugin for Tripo, Meshy, Hyper3D, qianwenai/DashScope and Tencent Hunyuan3D, with in-chat 3D preview and a 3D workshop. |
| 63 | [peishenglai3-hash/dsh-source-desk](https://github.com/peishenglai3-hash/dsh-source-desk) | 1 | 2026-11-14 | 2026-11-14 | Archived reference implementation: provenance-first reading desk for DSH, with a knowledge-commons audit. MIT. Not a Z-Library client. |
| 64 | [plasticmemories-0823/dsh-session-tree](https://github.com/plasticmemories-0823/dsh-session-tree) | 1 | 2026-11-14 | 2026-11-14 | Conversation trees, visible subagents, and task handoffs for DeepSeek Harness |
| 65 | [QinLuza/dsh-team-models](https://github.com/QinLuza/dsh-team-models) | 1 | 2026-11-14 | 2026-11-14 | Per-teammate model selection for DeepSeek Harness Agent Teams — a Host-side Cordis plugin (request-time override, team default, agent-callable tools). MIT. |
| 66 | [Richard-He-happy/dsh-bohr-arena](https://github.com/Richard-He-happy/dsh-bohr-arena) | 1 | 2026-11-14 | 2026-11-14 | DSH plugins distilling two Bohr contests: Product Arena (academic writing period 2, academic efficiency period 3) and Scientific Facilities (format parsing, instrument vision/simulator, biomedical prediction, contest operations). |
| 67 | [RickT34/dsh-super-leader](https://github.com/RickT34/dsh-super-leader) | 1 | 2026-11-14 | 2026-11-14 | A Leader agent preset for DeepSeek Harness. A Leader session does not do the work itself. It talks with you until the request is clear, picks or creates the right workspace and session, hands the task to a worker session, and relays the worker's report back to you. |
| 68 | [ruiyuanyisu/dsh-seed-of-memory](https://github.com/ruiyuanyisu/dsh-seed-of-memory) | 1 | 2026-11-11 | 2026-11-14 | Local-first memory layer for DeepSeek Harness: identity root, memories, beliefs, emotions, persona and speaking habits in one SQLite file. |
| 69 | [shift16738589487-afk/dsh-go-local-plugin-config](https://github.com/shift16738589487-afk/dsh-go-local-plugin-config) | 1 | 2026-11-14 | 2026-11-14 | dsh-go-local-plugin-config is a personal, AI-assisted Android plugin for DSH-Go. It provides visual config editing and a standalone terminal (no chat interface required). As a solo project, it may be difficult to use, and it supports Simplified Chinese only. |
| 70 | [shilaoban666/dsh-imperial-court](https://github.com/shilaoban666/dsh-imperial-court) | 1 | 2026-10-28 | 2026-11-14 | 🏯 三省六部 · Imperial Senate：DeepSeek Harness（DSH）多工具协作插件。Claude Code、Codex、Gemini CLI 等一家拟方案、另一家审，六部并行办差，全程在隔离 git 分支里，批红才合并；丞相府一次交办一摞事。Multi-agent orchestration for DSH. |
| 71 | [shuai0503/dsh-runtime-reconcile](https://github.com/shuai0503/dsh-runtime-reconcile) | 1 | 2026-11-14 | 2026-11-14 | Read-only live-runtime reconciliation for DeepSeek Harness profiles: find configured-but-missing providers, disabled bundles, inactive rows and tool-registry drift. |
| 72 | [ShuoweiFu/dsh-liquid-glass](https://github.com/ShuoweiFu/dsh-liquid-glass) | 1 | 2026-11-13 | 2026-11-14 | A high-performance WebGL Liquid Glass plugin for DeepSeek Harness (Electron). Features FBM domain warp, chromatic dispersion, and a 5-layer GPU overheat guard. / 为 DSH 打造的高性能 WebGL 液态玻璃插件，内含色散折射、鼠标涟漪与 5 层核显保命机制。 |
| 73 | [Souffle-78/dsh-code-vault](https://github.com/Souffle-78/dsh-code-vault) | 1 | 2026-11-14 | 2026-11-14 | 代码收藏夹 · 把对话里的代码块收进侧栏收藏夹：搜索、标签、多选批量整理、合并成新条目，一键插回输入框。 |
| 74 | [StephenXiong001/dsh-task-mode-switch](https://github.com/StephenXiong001/dsh-task-mode-switch) | 1 | 2026-11-14 | 2026-11-14 | Switch a DSH task's Agent preset (mode) from the composer toolbar, including tasks that have already started. Features AUTO mode that selects a preset based on task content. |
| 75 | [surfishs/dsh-prompt-enhance](https://github.com/surfishs/dsh-prompt-enhance) | 1 | 2026-11-13 | 2026-11-14 | DSH Web GUI 的提示词增强插件：一键把输入框草稿改写为结构化提示词，支持预览、回填、复制与撤销 |
| 76 | [sys65/dsh-share-kit](https://github.com/sys65/dsh-share-kit) | 1 | 2026-11-14 | 2026-11-14 | Export a DeepSeek Harness answer as Markdown, self-contained HTML or rich text without losing formatting. |
| 77 | [tangliguang/dsh-plugin-hello](https://github.com/tangliguang/dsh-plugin-hello) | 1 | 2026-11-14 | 2026-11-14 | A minimal DeepSeek Harness plugin that adds a say_hi tool |
| 78 | [tia-forge/tiaforge-plugins](https://github.com/tia-forge/tiaforge-plugins) | 1 | 2026-10-25 | 2026-11-14 | TIA Portal MCP server bundle for WorkBuddy / CodeBuddy / Claude Code / pi: skills + slash commands + MCP gateway for Siemens PLC engineering automation. |
| 79 | [Velestia-star/agent-skill](https://github.com/Velestia-star/agent-skill) | 1 | 2026-11-12 | 2026-11-14 | 一个自己创建子agent和skill的dsh插件，管理自己的agent团队 |
| 80 | [vicyangworld/dsh-music](https://github.com/vicyangworld/dsh-music) | 1 | 2026-11-14 | 2026-11-14 | DSH music plugin: local library, online preview (like to keep), personalized recommendations, welcome onboarding with starter library. 本地曲库·在线试听·个性推荐·欢迎页引导 |
| 81 | [wackyju2-beep/eventmem](https://github.com/wackyju2-beep/eventmem) | 1 | 2026-11-08 | 2026-11-14 | Memory for AI agents that remembers what changed—not just what was said. Local CPU-based relation judging, with traceable event history. |
| 82 | [wangchengxin666/dsh-dock](https://github.com/wangchengxin666/dsh-dock) | 1 | 2026-11-14 | 2026-11-14 | Self-hosted multi-user cloud workspaces &amp; control plane for DeepSeek Harness (DSH) — isolated Docker Agent OS containers behind Traefik &amp; FastAPI.      |
| 83 | [winlin926/dsh-remote-connect](https://github.com/winlin926/dsh-remote-connect) | 1 | 2026-10-25 | 2026-11-14 | 用手机浏览器继续电脑上的 DeepSeek Harness 会话：同一 Wi-Fi 扫码配对、工具审批、文件预览；支持固定域名公网访问。 |
| 84 | [xiao-hans/dsh-rtk](https://github.com/xiao-hans/dsh-rtk) | 1 | 2026-08-16 | 2026-11-14 | 基于 RTK、专为 DSH 打造的薄层适配插件：让 DSH agent 的 pwsh 命令自动走 RTK（Rust Token Killer）压缩输出、节省 LLM token。A thin DSH adapter built on RTK that auto-routes DSH agents' pwsh commands through RTK to cut token usage. |
| 85 | [yaorenliang/dsh-notify](https://github.com/yaorenliang/dsh-notify) | 1 | 2026-11-14 | 2026-11-14 | One notification plugin for DSH: classify once on the Host, fan out to the browser and to your phone. |
| 86 | [yeweiliang7063/dsh-tcm](https://github.com/yeweiliang7063/dsh-tcm) | 1 | 2026-11-14 | 2026-11-14 | DSH 中医预设「岐黄经方（学习版）」2.2.2：先给一行大白话结论，再按经方思路七段讲清辨证定位、治则治法、方名与加减方向、推荐穴位、配伍禁忌、药典用量警示、调护与就医提示；危险动作打 🚨⚠️ 标签，古文翻成白话。只讲思路，不给剂量，不出处方笺。《npm 上的 dsh-tcm 1.3.0 是旧版、已废弃，请勿安装   》！！！     |
| 87 | [YJX0118/dsh-inspiration-wall](https://github.com/YJX0118/dsh-inspiration-wall) | 1 | 2026-11-14 | 2026-11-14 | 灵感墙：为 DeepSeek Harness 提供纸感便签墙、多板块、语音速记、AI 整理、自定义背景与批量删除。 |
| 88 | [ZengZichao/dsh-wechat-publish](https://github.com/ZengZichao/dsh-wechat-publish) | 1 | 2026-11-14 | 2026-11-14 | DeepSeek Harness (DSH) plugin: paper translation (PDF → Chinese Markdown) and WeChat official-account publishing from Markdown, with a preview/publish/settings panel. |
| 89 | [zhaochunqi/dsh-magpie-route](https://github.com/zhaochunqi/dsh-magpie-route) | 1 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: show the real upstream model behind a magpie routing group in the composer dock (/magpie-route command + magpie_route tool). |
| 90 | [zhaoqiminggg/dsh-instruction-optimizer](https://github.com/zhaoqiminggg/dsh-instruction-optimizer) | 1 | 2026-11-14 | 2026-11-14 | A DSH instruction secretary: turn rough drafts into complete, executable instructions with session and attachment awareness. |
| 91 | [zhishengplus/dsh-project-bookshelf](https://github.com/zhishengplus/dsh-project-bookshelf) | 1 | 2026-11-14 | 2026-11-14 | 项目书架 📚｜把 DSH 工作区变成书架，自动接入已有项目与会话。封面认项目，转圈看进度，按章节继续聊，一键切回原版。 |
| 92 | [173ababah/dsh-ctl-desktop](https://github.com/173ababah/dsh-ctl-desktop) | 0 | 2026-11-14 | 2026-11-14 | dsh-ctl 的桌面版转写：DSH 桌面版（Electron）生命周期控制 — 开机自启 / 状态 / 优雅停止。自启指向外壳 exe 而非 Host 子进程。 |
| 93 | [173ababah/dsh-seamless-restart](https://github.com/173ababah/dsh-seamless-restart) | 0 | 2026-11-14 | 2026-11-14 | DSH 桌面版无缝重启：彻底重启 DSH，期间窗口被磨砂遮罩接管（原窗口截图 + 加载圈 + 进度条），看起来像没离开过。 |
| 94 | [18874530790/dsh-default-full-permission](https://github.com/18874530790/dsh-default-full-permission) | 0 | 2026-11-14 | 2026-11-14 | DSH plugin: every session (existing and new) resolves to danger-full-access with approval never. |
| 95 | [2389654770/dsh-session-naming](https://github.com/2389654770/dsh-session-naming) | 0 | 2026-11-14 | 2026-11-14 | Proactive session naming for DeepSeek Harness: a session_title tool plus prompt rules that make the agent rename its own session (tuned for note workspaces). |
| 96 | [349840432m-dev/dsh-session-tidy](https://github.com/349840432m-dev/dsh-session-tidy) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: one-click tidy for the session list — archive blank/stale sessions, clean titles, keep-N per workspace, batch undo. Composer entry + overlay sheet. |
| 97 | [3671656786/dsh-web-chat-preset](https://github.com/3671656786/dsh-web-chat-preset) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness「网页聊天」Agent 预设：只保留 web_search / web_fetch 两个联网工具，系统提示词由你自己的 persona.json 驱动。 |
| 98 | [666bee/dsh-gloss](https://github.com/666bee/dsh-gloss) | 0 | 2026-11-14 | 2026-11-14 | Six small UI fixes for DeepSeek Harness: undo right after sending, a progress bar with an ETA, a web-access switch, and sidebar reminders. |
| 99 | [6starlong/dsh-disk-cleanup](https://github.com/6starlong/dsh-disk-cleanup) | 0 | 2026-11-13 | 2026-11-14 | DSH 插件：临时目录落点、依赖缓存接管、过期清理 |
| 100 | [aaayeaaa-P1WS/dsh-plugin-auto-update](https://github.com/aaayeaaa-P1WS/dsh-plugin-auto-update) | 0 | 2026-11-14 | 2026-11-14 | Keeps DSH plugins current: checks the plugin market on launch, installs updates in the background, and reports what changed. |
| 101 | [aaron999-h/dsh-restart-account](https://github.com/aaron999-h/dsh-restart-account) | 0 | 2026-11-14 | 2026-11-14 | Restart entry in the DeepSeek Harness sidebar account menu: closes the desktop app and relaunches it without a console window. |
| 102 | [aaron999-h/dsh-screenshot](https://github.com/aaron999-h/dsh-screenshot) | 0 | 2026-11-14 | 2026-11-14 | Screenshot entry in the DSH composer + menu: pick a region anywhere on the desktop, DSH stays visible, and the crop lands in the draft as an image attachment. |
| 103 | [abraxasLi/dsh-desktop-capsule](https://github.com/abraxasLi/dsh-desktop-capsule) | 0 | 2026-11-14 | 2026-11-14 | Glass desktop capsule for DeepSeek Harness: always-on-top agent status, approval and answer alerts, click to return.给桌面添加一个状态条实时检测deepseek harness工作状态 |
| 104 | [AlanWYChen/dsh-github-actions](https://github.com/AlanWYChen/dsh-github-actions) | 0 | 2026-11-14 | 2026-11-14 | DSH Web bundle: live GitHub Actions runs for the selected workspace |
| 105 | [Algovate/dsh-agent-debugger](https://github.com/Algovate/dsh-agent-debugger) | 0 | 2026-11-14 | 2026-11-14 | Agent Debugger: pause a DSH agent before the next step, a tool call, or the turn closes; inspect, edit, steer, or finish. |
| 106 | [aowind/dsh-super-agent](https://github.com/aowind/dsh-super-agent) | 0 | 2026-11-14 | 2026-11-14 | Router/Worker two-layer autonomous agent system for DeepSeek Harness: two-stage trigger admission, per-ticket worktrees, delivery closed loop, watchdog, attention gate, and a live console. |
| 107 | [Apauto-to-all/dsh-hindsight-control-plane](https://github.com/Apauto-to-all/dsh-hindsight-control-plane) | 0 | 2026-11-14 | 2026-11-14 | Embed the Hindsight memory console into the DeepSeek Harness main panel \| 把 Hindsight 记忆控制台嵌进 DSH 主面板 |
| 108 | [Apauto-to-all/dsh-no-tools-preset](https://github.com/Apauto-to-all/dsh-no-tools-preset) | 0 | 2026-11-14 | 2026-11-14 | 无工具预设：禁掉所有工具，只留模型自己的推理。Zero-tool DSH preset — no tools, only reasoning. |
| 109 | [APFSDS-Dog/dsh-api-free-image](https://github.com/APFSDS-Dog/dsh-api-free-image) | 0 | 2026-11-05 | 2026-11-14 | Free API image generation plugin for DeepSeek Harness: only four parameters, hard-locked free Kolors model, local per-minute/per-day quota, a native folder picker for the output directory, and a settings card for the API key. Ships a DSH web UI plus a zero-dependency stdio MCP server. |
| 110 | [APFSDS-Dog/dsh-limbs](https://github.com/APFSDS-Dog/dsh-limbs) | 0 | 2026-11-14 | 2026-11-14 | A DSH model picker plugin with search, keyboard navigation, provider grouping, and real-time status indicators. |
| 111 | [AshenJyy/dsh-subagent-cursor](https://github.com/AshenJyy/dsh-subagent-cursor) | 0 | 2026-11-13 | 2026-11-14 | Cursor CLI subagent plugin for DeepSeek Harness 0.2.2-rc.3. Native ACP, --force, and automatic session cleanup. |
| 112 | [AshenJyy/dsh-subagent-grok](https://github.com/AshenJyy/dsh-subagent-grok) | 0 | 2026-11-13 | 2026-11-14 | Grok Build CLI subagent provider for DeepSeek Harness 0.2.2-rc.3, with always-approve and automatic session cleanup. |
| 113 | [AshenJyy/dsh-subagent-opencode](https://github.com/AshenJyy/dsh-subagent-opencode) | 0 | 2026-11-13 | 2026-11-14 | OpenCode ACP subagent plugin for DeepSeek Harness 0.2.2-rc.3, using your existing CLI with full-access permissions. |
| 114 | [ASwang2205/dsh-xiaomi-ocr](https://github.com/ASwang2205/dsh-xiaomi-ocr) | 0 | 2026-11-14 | 2026-11-14 | Local OCR for DeepSeek Harness: Xiaomi-OCR-0 (0.8B) on your own GPU — 5 tools, settings page, PDF, OTSL tables, LaTeX formulas, nothing uploaded. |
| 115 | [Asya903/dsh-voice-deepseek](https://github.com/Asya903/dsh-voice-deepseek) | 0 | 2026-11-14 | 2026-11-14 | DSH 语音插件：在每条助手回复的操作条里加一个朗读按钮，用 DeepSeek 官方 TTS 念出来（默认女声 stella，可切男声 tide）。A DSH plugin that reads assistant replies aloud with DeepSeek TTS. |
| 116 | [AvenYQ/dsh-clipforge](https://github.com/AvenYQ/dsh-clipforge) | 0 | 2026-11-03 | 2026-11-14 | ClipForge — 视频工作台：解析、下载、文案、截取、GIF（DeepSeek Harness 插件） |
| 117 | [AvenYQ/dsh-dune](https://github.com/AvenYQ/dsh-dune) | 0 | 2026-11-02 | 2026-11-14 | Tactile skin for DeepSeek Harness — warm paper surfaces, tight typography, spring sidebar motion, per-workspace icons and AI-designed themes |
| 118 | [AvenYQ/dsh-knowledge](https://github.com/AvenYQ/dsh-knowledge) | 0 | 2026-11-14 | 2026-11-14 | 知识库 — 把本地 Obsidian 库与项目文件夹建成可检索索引，DSH 左侧栏一个入口直接问，回答带文件与行号出处（DeepSeek Harness 插件） |
| 119 | [AvenYQ/dsh-vellum](https://github.com/AvenYQ/dsh-vellum) | 0 | 2026-11-13 | 2026-11-14 | Vellum 信笺 — DeepSeek Harness 里的原生对话卡片：指标、图表、对比、清单、步骤、时间线、表单、小测、表格 |
| 120 | [awychoi/dsh-vscode-quick-launch](https://github.com/awychoi/dsh-vscode-quick-launch) | 0 | 2026-11-13 | 2026-11-14 | Open VS Code from the sidebar menu or the session header |
| 121 | [awychoi/dsh-workspace-status](https://github.com/awychoi/dsh-workspace-status) | 0 | 2026-11-13 | 2026-11-14 | Dynamically colored workspace folder based what its sessions are doing |
| 122 | [Azhu9701/dsh-nearby](https://github.com/Azhu9701/dsh-nearby) | 0 | 2026-11-14 | 2026-11-14 | NextSeat 邻座 — DSH 的面对面分享房间：文件、提示词卡片、技能包，访客零安装。A temporary LAN sharing room for DSH with nearby discovery and optional tunnel. |
| 123 | [b-iurea/dsh-profile-sync](https://github.com/b-iurea/dsh-profile-sync) | 0 | 2026-11-13 | 2026-11-14 | Keep DeepSeek Harness profiles in sync between machines over Git or a LAN sidecar: providers, plugins and settings. |
| 124 | [bearman141/dsh-kernel-restart](https://github.com/bearman141/dsh-kernel-restart) | 0 | 2026-11-14 | 2026-11-14 | Restart the running DSH profile in place from a floating button, without closing the desktop window. |
| 125 | [BeckChiang/aris-dsh](https://github.com/BeckChiang/aris-dsh) | 0 | 2026-11-14 | 2026-11-14 | ARIS 自主科研流水线在 DeepSeek Harness 上的移植：91 个技能 + 运行时 + 监控面板（MIT） |
| 126 | [BeckChiang/aris-wiki-panel](https://github.com/BeckChiang/aris-wiki-panel) | 0 | 2026-11-14 | 2026-11-14 | ARIS 知识库只读检索面板（DSH 插件，MIT） |
| 127 | [BeckChiang/dsh-cost-meter](https://github.com/BeckChiang/dsh-cost-meter) | 0 | 2026-11-11 | 2026-11-14 | DSH 底部会话成本计面板：按每步请求时的峰谷价计价，历史不漂移 |
| 128 | [BeckChiang/dsh-tool-budget](https://github.com/BeckChiang/dsh-tool-budget) | 0 | 2026-11-13 | 2026-11-14 | Session-level tool budget for DeepSeek Harness: scene packs, plugin view, three tiers, call counts, cost estimate. Derived from suqing114/dsh-tool-switch (MIT). |
| 129 | [beckhamwash/dsh-claude-workbench](https://github.com/beckhamwash/dsh-claude-workbench) | 0 | 2026-11-14 | 2026-11-14 | Claude-inspired workbench for the DeepSeek Harness Web GUI: warm editorial skin (Crimson Pro/DM Sans), 2-3 side-by-side conversations, selection-based side chat, quick light/dark switch. |
| 130 | [blindcat-10835/dsh-session-studio](https://github.com/blindcat-10835/dsh-session-studio) | 0 | 2026-11-14 | 2026-11-14 | Session manager panel for the DSH Web GUI: group sessions by status / time / tag, tag rules, AI batch rename and auto-tagging, native context-menu integration, archive and trash. |
| 131 | [borncode-app/dsh-minimax-auth](https://github.com/borncode-app/dsh-minimax-auth) | 0 | 2026-11-14 | 2026-11-14 | The MiniMax Code OAuth grant reader and refresher shared by dsh-minimax-credit and dsh-minimax-checkin. |
| 132 | [borncode-app/dsh-minimax-checkin](https://github.com/borncode-app/dsh-minimax-checkin) | 0 | 2026-11-14 | 2026-11-14 | Claims the MiniMax daily check-in reward from inside DeepSeek Harness, using the sign-in MiniMax Code already stored on this machine. |
| 133 | [BrainZombie/dsh-restart-win](https://github.com/BrainZombie/dsh-restart-win) | 0 | 2026-11-14 | 2026-11-14 | Fail-closed safe restart for DSH on Windows: prove a throwaway instance boots before the running host is touched, then detach through a scheduled task so the restarter survives the host it restarts. |
| 134 | [CharlesLizzy/dsh-model-lens](https://github.com/CharlesLizzy/dsh-model-lens) | 0 | 2026-11-13 | 2026-11-14 | 一个基于DSH的本地模型监管插件：监控模型服务的运行状态、请求速率和 GPU/CPU/内存的使用情况等，并提供一个手动拉起/卸载的入口。 |
| 135 | [cherub0/dsh-kb](https://github.com/cherub0/dsh-kb) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 的本地知识库：左栏对话框，段落级检索 + MMR 去重，回答带可展开引用，支持 PDF/Word 导入与 Agent 工具。 |
| 136 | [cherub0/dsh-workbench](https://github.com/cherub0/dsh-workbench) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 的原生工作台面板：系统指标、待办、GitHub、博客、磁盘、天气、容器一屏看完。A native workbench panel for the DSH sidebar. |
| 137 | [chrischjh/dsh-plugin-builder](https://github.com/chrischjh/dsh-plugin-builder) | 0 | 2026-11-14 | 2026-11-14 | Practical DeepSeek Harness plugin-development skill: build-install-verify-publish workflow plus a production failure-mode playbook. Installable as a DSH bundle. |
| 138 | [CloudSen/dsh-browser-annotation](https://github.com/CloudSen/dsh-browser-annotation) | 0 | 2026-11-14 | 2026-11-14 | Native, lightweight element comments inside the built-in Browser — live attribute edits and numbered hoverable tags, no screenshots or provider replacement. |
| 139 | [CodingRookie98/dsh-remote-cr](https://github.com/CodingRookie98/dsh-remote-cr) | 0 | 2026-11-14 | 2026-11-14 | 把整个 DeepSeek Harness 宿主搬到远端（SSH / WSL），长任务在远端继续跑，真实 API key 不出本机 |
| 140 | [cookie-zl/colony-dsh-plugins](https://github.com/cookie-zl/colony-dsh-plugins) | 0 | 2026-11-14 | 2026-11-14 | @colony-agents/dsh-* plugins for DeepSeek Harness: workspace guard, artifact attribution, skill market, DingTalk/Feishu assistant panel. |
| 141 | [Covertaker/dsh-cc-sessions-hub](https://github.com/Covertaker/dsh-cc-sessions-hub) | 0 | 2026-11-13 | 2026-11-14 | Claude Code sessions hub for DeepSeek Harness: list, chat, approvals, previews, subagents |
| 142 | [cranboy0626/dsh-emc-consulting](https://github.com/cranboy0626/dsh-emc-consulting) | 0 | 2026-11-14 | 2026-11-14 | 把 EMC 测试报告读成整改动作 · 标准适用性 / 限值判读 / 设计预算反算 |
| 143 | [createacode/dsh-chat-syncer](https://github.com/createacode/dsh-chat-syncer) | 0 | 2026-11-14 | 2026-11-14 | DSH客户端对话列表的多端同步，基于gitee或github的私有仓库实现同步。 |
| 144 | [createjy/dsh-plugin-update-entry](https://github.com/createjy/dsh-plugin-update-entry) | 0 | 2026-11-12 | 2026-11-14 | 在 DSH 插件页的可更新卡片上提供就地更新入口：可选版本、悬停查看每个版本的更新说明。 |
| 145 | [criyle/dsh-hydro](https://github.com/criyle/dsh-hydro) | 0 | 2026-11-14 | 2026-11-14 | HydroOJ operations and site-management plugin for DeepSeek Harness. |
| 146 | [CSH215/dsh-session-delete](https://github.com/CSH215/dsh-session-delete) | 0 | 2026-11-14 | 2026-11-14 | DSH plugin: adds a Delete action to every session row menu with an on-disk recycle bin · DeepSeek Harness 会话删除与回收站插件 |
| 147 | [cxywh/dsh-folder-access](https://github.com/cxywh/dsh-folder-access) | 0 | 2026-11-14 | 2026-11-14 | Hand a local folder to a DeepSeek Harness agent from the conversation composer |
| 148 | [CYBSYC-Nya/MuRaSame](https://github.com/CYBSYC-Nya/MuRaSame) | 0 | 2026-11-14 | 2026-11-14 | MuRaSame ????????SH ??a????????????????????? |
| 149 | [daedalforge/missions](https://github.com/daedalforge/missions) | 0 | 2026-11-14 | 2026-11-14 | Plugin DeepSeek Harness pour piloter des missions Jira et GitHub |
| 150 | [daybreakcold/dsh-theme-nebula-glass](https://github.com/daybreakcold/dsh-theme-nebula-glass) | 0 | 2026-11-14 | 2026-11-14 | Dual-palette theme for the DeepSeek Harness Web client, with an original generated nebula wallpaper. |
| 151 | [De22323/dsh-memory](https://github.com/De22323/dsh-memory) | 0 | 2026-11-14 | 2026-11-14 | 本地优先的 AI 长期记忆：纯文本 JSONL 存在你自己的 workspace，人可读、可改、可删；六个工具 + 定时沉降，不依赖服务端。Local-first memory for DSH agents. |
| 152 | [DeepNeuralNerd/dsh-tool-doctor](https://github.com/DeepNeuralNerd/dsh-tool-doctor) | 0 | 2026-11-14 | 2026-11-14 | Self-repairing tool calls for DeepSeek Harness: repairs recognized argument mistakes, retries recoverable errors, records every outcome in a local dashboard. |
| 153 | [demoliisher/dsh-remote-over-tailnet](https://github.com/demoliisher/dsh-remote-over-tailnet) | 0 | 2026-11-14 | 2026-11-14 | 基于 Tailscale 的 DeepSeek Harness 远程访问插件，自带内嵌节点，不依赖系统安装的 Tailscale |
| 154 | [denceee/dsh-disk-cleaner](https://github.com/denceee/dsh-disk-cleaner) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness sidebar disk cleaner: the model ranks what occupies your drives, you tick and clean. Browsers and toolchains are discovered by structure, not by a hard-coded list. |
| 155 | [denceee/dsh-hero-inspiration](https://github.com/denceee/dsh-hero-inspiration) | 0 | 2026-11-13 | 2026-11-14 | 心灵鸡汤 — 在「探索未至之境」标题下方显示一句鼓励，每次新建对话都换一句，一轮之内不重复；设置里可开关显示并把内置的 40 句换成自己的句库。 Encouragement under the New Session headline, drawn from a persisted shuffled deck so consecutive sessions never repeat. |
| 156 | [denceee/dsh-open-design-preset](https://github.com/denceee/dsh-open-design-preset) | 0 | 2026-11-14 | 2026-11-14 | OpenDesign agent preset for DeepSeek Harness - senior product-designer persona, 77 curated OpenDesign skills, and a local OpenDesign MCP bridge. |
| 157 | [DengyiGu/dsh-compile-digest](https://github.com/DengyiGu/dsh-compile-digest) | 0 | 2026-11-14 | 2026-11-14 | Read-only LaTeX build-log diagnostics for DeepSeek Harness, with source locations, context and duplicate grouping. |
| 158 | [DengyiGu/dsh-test-impact](https://github.com/DengyiGu/dsh-test-impact) | 0 | 2026-11-14 | 2026-11-14 | Explainable Python and pytest test impact analysis for DeepSeek Harness, with dependency paths and conservative widening guidance. |
| 159 | [deqecomb/dsh-session-link](https://github.com/deqecomb/dsh-session-link) | 0 | 2026-11-14 | 2026-11-14 | Directed messaging between DSH sessions: send to one specific session, receive your own inbox, durable queue that also wakes sleeping sessions. |
| 160 | [deqecomb/dsh-zh-force](https://github.com/deqecomb/dsh-zh-force) | 0 | 2026-11-14 | 2026-11-14 | Force Simplified Chinese in the system prompt, model-driven and automatic context compaction, plus a searchable archive of compacted history. |
| 161 | [doomedwkk/dsh-cyberpunk-boot](https://github.com/doomedwkk/dsh-cyberpunk-boot) | 0 | 2026-11-14 | 2026-11-14 | Cyberpunk 2077-style boot animation for the DeepSeek Harness desktop client: full-window stencil boot screen, glitch-out, and a synthesized Night City radio bed. |
| 162 | [ds-hu/dsh-task-manager](https://github.com/ds-hu/dsh-task-manager) | 0 | 2026-11-14 | 2026-11-14 | Windows 11 style Task Manager for the DeepSeek Harness Web GUI |
| 163 | [dsh-plugins/dsh-gradle-tasks](https://github.com/dsh-plugins/dsh-gradle-tasks) | 0 | 2026-11-14 | 2026-11-14 | Gradle task browser for the DeepSeek Harness right Sidebar: groups tasks by their declared group, runs one in a DSH terminal through the project wrapper with a chosen JDK, and caches the task list in .gradle. |
| 164 | [dsh-plugins/dsh-monaco](https://github.com/dsh-plugins/dsh-monaco) | 0 | 2026-11-14 | 2026-11-14 | Monaco editor in the DeepSeek Harness right sidebar: edit files in place, save with a version guard, and extend it with language and theme APIs. |
| 165 | [Elgwia-dsh/dsh-comfy-suite](https://github.com/Elgwia-dsh/dsh-comfy-suite) | 0 | 2026-11-14 | 2026-11-14 | ComfyUI 一站式套件：工作流库 + 本地出图修图 + 服务启停 + 作品库/风格库/提示词衣柜（个人整合，非官方；三个上游均为 MIT） |
| 166 | [eliaweiss/dsh-currency-fix](https://github.com/eliaweiss/dsh-currency-fix) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: stops prices like $150 in chat replies from being drawn as LaTeX math. |
| 167 | [eliaweiss/dsh-quick-find-en](https://github.com/eliaweiss/dsh-quick-find-en) | 0 | 2026-11-14 | 2026-11-14 | Find in a DeepSeek Harness chat by meaning (TypeSafe Jev via Vercel AI Gateway) or by text with Cmd/Ctrl+F, across the whole session history. |
| 168 | [ElioFanyu/dsh-compaction-control](https://github.com/ElioFanyu/dsh-compaction-control) | 0 | 2026-11-14 | 2026-11-14 | One panel for DeepSeek Harness automatic context compaction: trigger/retention sliders, model-callable compact_now, idle-only handoff, and an optional zero-token deterministic summarizer. |
| 169 | [Ethereal-ljq/dsh-qqbot-buddy](https://github.com/Ethereal-ljq/dsh-qqbot-buddy) | 0 | 2026-10-28 | 2026-11-14 | DSH（DeepSeek Harness）QQ 官方机器人插件：独立控制台、多机器人隔离、配置档与作用域绑定、工具与技能、SQLite 记忆/知识库、群日报、语音 TTS/ASR（v2 为默认分支） |
| 170 | [face-ang/dsh-liaojian](https://github.com/face-ang/dsh-liaojian) | 0 | 2026-11-14 | 2026-11-14 | 聊笺 · 微信 AI 工作台，DeepSeek Harness 插件 |
| 171 | [fader-cx/dsh-startup-animation](https://github.com/fader-cx/dsh-startup-animation) | 0 | 2026-11-14 | 2026-11-14 | 为 DeepSeek Harness 加上 Codex 风格开场动画与可自定义常驻背景（灵感与实现参考 yanami-sec/codex-startup-animation-windows，并完成移植扩展与演出效果升级） |
| 172 | [fangqiing/dsh-plugin-metaso-verify](https://github.com/fangqiing/dsh-plugin-metaso-verify) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 插件：让 DSH 在用户要求核实/验证/查证时调用秘塔AI(metaso.cn)搜索并核对事实。 |
| 173 | [FatFishNet/dsh-fatfishdream-memory](https://github.com/FatFishNet/dsh-fatfishdream-memory) | 0 | 2026-11-14 | 2026-11-14 | FatFishDream（大肥鱼的梦）—— DSH 客户端长期记忆插件。告别会话隔离，让 AI 跨会话记住你们的项目上下文与踩坑记录。支持自动注入、全局/项目规则、用户画像与 GUI 管理。 |
| 174 | [Fe2-Plus/dsh-ocr-example](https://github.com/Fe2-Plus/dsh-ocr-example) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek OCR tool plugin for DeepSeek Harness — plus the traps that make a plugin silently fail to load |
| 175 | [Fengdan123-123/film-showcase](https://github.com/Fengdan123-123/film-showcase) | 0 | 2026-11-14 | 2026-11-14 | ???????:???? ? ??? ? ?? ? ??? ? ?????????(DeepSeek Harness Web UI ??) |
| 176 | [fengpei666/dsh-card-panel](https://github.com/fengpei666/dsh-card-panel) | 0 | 2026-11-14 | 2026-11-14 | DSH 无限量日卡面板：粘贴中转站发货信息即可写入模型配置，实时显示用量、到期倒计时与官方价对比，并一键修复上下文窗口截断 |
| 177 | [fengshu-ai/DSH-boot](https://github.com/fengshu-ai/DSH-boot) | 0 | 2026-11-14 | 2026-11-14 | 这是饲养染的30DAYs的DSH启动界面插件 |
| 178 | [fl0-0wer/dsh-anysearch-fl0wer](https://github.com/fl0-0wer/dsh-anysearch-fl0wer) | 0 | 2026-11-14 | 2026-11-14 | AnySearch provider for the DeepSeek Harness web seam (ctx.web): api.anysearch.com/v1/search with free anonymous fallback. |
| 179 | [fl0-0wer/dsh-image-gen-fl0wer](https://github.com/fl0-0wer/dsh-image-gen-fl0wer) | 0 | 2026-11-14 | 2026-11-14 | MIT fork of dsh-image-gen — Agnes image generation/editing for DeepSeek Harness with the generations-endpoint edit patch. |
| 180 | [fl0-0wer/dsh-oil-ui](https://github.com/fl0-0wer/dsh-oil-ui) | 0 | 2026-11-14 | 2026-11-14 | Zero-dependency DeepSeek Harness host plugin that bundles the Remotion agent skill for programmatic video rendering. |
| 181 | [fl0-0wer/dsh-retrace-fl0wer](https://github.com/fl0-0wer/dsh-retrace-fl0wer) | 0 | 2026-11-14 | 2026-11-14 | MIT fork of yamingmou/dsh-retrace — recall/rewind, edit-and-resend, fork graph and artifact versioning for DeepSeek Harness, republished under a pinned name. |
| 182 | [forfeeling/dsh-vault](https://github.com/forfeeling/dsh-vault) | 0 | 2026-11-14 | 2026-11-14 | DSH 零知识密钥保险库：sops+age 加密存储密码/API key，密保挑战+审计日志，含 GUI 管理页插件与 agent skill，明文永不进入模型上下文 |
| 183 | [forgemorrow/dsh-secops](https://github.com/forgemorrow/dsh-secops) | 0 | 2026-11-14 | 2026-11-14 | DevSecOps compliance auditor, supply-chain &amp; CI scanner, SQLite drift ledger &amp; guardrail plugin for DeepSeek Harness. |
| 184 | [Fouxiuan/dsh-free-bili-scroll](https://github.com/Fouxiuan/dsh-free-bili-scroll) | 0 | 2026-11-14 | 2026-11-14 | DSH 插件：每天替你刷一轮 B站，支持 DeepSeek 与 Our Free Model（刷B站 Free） |
| 185 | [fredgeoO/dsh-screenshot](https://github.com/fredgeoO/dsh-screenshot) | 0 | 2026-11-14 | 2026-11-14 | Windows screenshot tools + ui-visual-check skill for DeepSeek Harness |
| 186 | [FTShare-Lab/dsh-plugin-fft-bundle](https://github.com/FTShare-Lab/dsh-plugin-fft-bundle) | 0 | 2026-11-11 | 2026-11-14 | DeepSeek Harness 金融工作台：FTShare 数据源、K 线、出图与 A 股/商品期货模拟盘（FTShare data, K-line, stock &amp; futures paper trading, readiness check） |
| 187 | [Fulisike/daily-secretary](https://github.com/Fulisike/daily-secretary) | 0 | 2026-11-14 | 2026-11-14 | 让dsh帮你记录电脑屏幕，完成总结（与吐槽），帮你记录下每天电脑操作的点点滴滴，以及及时发现那些无意识中不好的使用习惯。【喜欢的话请留点star，issue和pr】 |
| 188 | [H-h-Hh/dsh-stl-viewer](https://github.com/H-h-Hh/dsh-stl-viewer) | 0 | 2026-11-14 | 2026-11-14 | STL 3D preview for the DeepSeek Harness side card — orbit camera, WebGL, binary and ASCII STL, no dependencies. |
| 189 | [H2137-yh/dsh-frosted-glass-theme](https://github.com/H2137-yh/dsh-frosted-glass-theme) | 0 | 2026-11-14 | 2026-11-14 | Frosted glass theme for DeepSeek Harness - 磨砂玻璃主题插件 |
| 190 | [hagen666/dsh-topic-graph](https://github.com/hagen666/dsh-topic-graph) | 0 | 2026-11-02 | 2026-11-14 | DeepSeek Harness的话题生成插件。把每个会话按轮次切开，让 AI 增量聚合成「话题 / 阶段」，一眼看清 token、工具与时间花在哪。界面支持中英双语切换。 |
| 191 | [hanhan9999999999999999999/remote-connect-dsh](https://github.com/hanhan9999999999999999999/remote-connect-dsh) | 0 | 2026-11-14 | 2026-11-14 | DSH 插件 dsh-remote-connect — 手机扫码远程操作电脑上的 DSH，两台电脑之间互相同步插件 / 技能 / 规则 / 配置 / 会话。开源，MIT。 |
| 192 | [happyde2b/dsh-balance-display-simple](https://github.com/happyde2b/dsh-balance-display-simple) | 0 | 2026-11-14 | 2026-11-14 | Show the DeepSeek API account balance in the DSH sidebar, refreshed every 60 seconds through a same-origin endpoint that keeps the API key on the server side. |
| 193 | [happyde2b/dsh-win-notify](https://github.com/happyde2b/dsh-win-notify) | 0 | 2026-11-14 | 2026-11-14 | Windows toast notifications for DeepSeek Harness: task done, task error, question, approval - click to focus the desktop app |
| 194 | [harm-m422/dsh-memory-acc](https://github.com/harm-m422/dsh-memory-acc) | 0 | 2026-10-28 | 2026-11-14 | ACC memory for DeepSeek Harness: archive every complete conversation, borrow the harness's own model, never ask for a key. |
| 195 | [HekStudio2024/dsh-usage-kline](https://github.com/HekStudio2024/dsh-usage-kline) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek usage terminal for DeepSeek Harness: K-line panel for usage, spend and balance |
| 196 | [herenfor/dsh-wsl](https://github.com/herenfor/dsh-wsl) | 0 | 2026-11-11 | 2026-11-14 | WSL run mode for DeepSeek Harness Desktop: run projects, sessions and plugins inside WSL, managed from the Desktop window |
| 197 | [homes-mark/dsh-fold-workspace-sessions](https://github.com/homes-mark/dsh-fold-workspace-sessions) | 0 | 2026-11-14 | 2026-11-14 | DSH plugin: one sidebar button folds or unfolds every workspace's conversations in a single click. 一键折叠工作区对话的 DeepSeek Harness 插件 |
| 198 | [HougeLangley/dsh-r-workbench](https://github.com/HougeLangley/dsh-r-workbench) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin for R data acquisition, cleaning, value gating, statistical analysis, and reporting. |
| 199 | [HougeLangley/dsh-ubuntu-packaging](https://github.com/HougeLangley/dsh-ubuntu-packaging) | 0 | 2026-11-14 | 2026-11-14 | Ubuntu packaging toolkit for DeepSeek Harness: inspect, lint, scaffold and plan debian/ source packages, then test and diagnose the resulting .deb builds. |
| 200 | [hxgh776/dsh-connect-loomy](https://github.com/hxgh776/dsh-connect-loomy) | 0 | 2026-11-14 | 2026-11-14 | Connect locally signed-in Loomy (iFlytek) models to DeepSeek Harness with a read-only credits overview. Windows x64. |
| 201 | [imcaibaicai/dsh-boot-guard](https://github.com/imcaibaicai/dsh-boot-guard) | 0 | 2026-10-12 | 2026-11-14 | DeepSeek Harness 启动守卫与故障排查增强：前置防御畸形客户端插件，就地兜底隔离，提供脱机急救 CLI (dsh-rescue) |
| 202 | [imcaibaicai/dsh-chat-spacing](https://github.com/imcaibaicai/dsh-chat-spacing) | 0 | 2026-09-26 | 2026-11-14 | Unified chat spacing, expanded borders, live steppers for DSH |
| 203 | [imcaibaicai/dsh-conversation-log](https://github.com/imcaibaicai/dsh-conversation-log) | 0 | 2026-09-26 | 2026-11-14 | Per-session readable conversation logs for DeepSeek Harness |
| 204 | [imcaibaicai/dsh-history-autoload](https://github.com/imcaibaicai/dsh-history-autoload) | 0 | 2026-09-26 | 2026-11-14 | Auto-load full session history when opening a conversation in DSH |
| 205 | [imcaibaicai/dsh-markdown-strikethrough-guard](https://github.com/imcaibaicai/dsh-markdown-strikethrough-guard) | 0 | 2026-10-12 | 2026-11-14 | DSH client plugin: prevent single-tilde ranges from mis-triggering GFM strikethrough in chat views |
| 206 | [imcaibaicai/dsh-message-revert](https://github.com/imcaibaicai/dsh-message-revert) | 0 | 2026-09-26 | 2026-11-14 | Undo/revert sent messages in DSH chat, with same-origin RPC gate |
| 207 | [imcaibaicai/dsh-model-endpoint-link](https://github.com/imcaibaicai/dsh-model-endpoint-link) | 0 | 2026-09-26 | 2026-11-14 | Balance-widget settings row / event bridge for DSH model endpoints |
| 208 | [imcaibaicai/dsh-model-modalities](https://github.com/imcaibaicai/dsh-model-modalities) | 0 | 2026-09-26 | 2026-11-14 | Model modality selection panel for DSH (0.1.5 compatible) |
| 209 | [imcaibaicai/dsh-search-locate](https://github.com/imcaibaicai/dsh-search-locate) | 0 | 2026-09-26 | 2026-11-14 | Jump to search hits with locate + highlight in DSH |
| 210 | [imcaibaicai/dsh-session-landing](https://github.com/imcaibaicai/dsh-session-landing) | 0 | 2026-11-14 | 2026-11-14 | Pushed by DSH automated push engine |
| 211 | [imcaibaicai/dsh-todo-keeper](https://github.com/imcaibaicai/dsh-todo-keeper) | 0 | 2026-09-26 | 2026-11-14 | Todo freshness reminders for DeepSeek Harness agents |
| 212 | [imcaibaicai/dsh-zh-language-policy](https://github.com/imcaibaicai/dsh-zh-language-policy) | 0 | 2026-09-26 | 2026-11-14 | Top-of-prompt bilingual language + summary contracts for DSH |
| 213 | [ImSusua/dsh-go-miniapp-kit](https://github.com/ImSusua/dsh-go-miniapp-kit) | 0 | 2026-11-14 | 2026-11-14 | 微信小程序开发助手 · dsh-go 原生插件：项目骨架、页面四件套、上线自查与代码速查 |
| 214 | [intelfabs/dsh-scheduled-message](https://github.com/intelfabs/dsh-scheduled-message) | 0 | 2026-11-14 | 2026-11-14 | Schedule the message you are writing to send later, or turn it into a repeating automation task. |
| 215 | [isdou/dsh-journal](https://github.com/isdou/dsh-journal) | 0 | 2026-11-14 | 2026-11-14 | DSH 日记 · Concise Chinese work reports from DeepSeek Harness conversations and recorded file operations. |
| 216 | [ITC-cloud-soft/biz-ai](https://github.com/ITC-cloud-soft/biz-ai) | 0 | 2026-11-13 | 2026-11-14 | Biz Assistant Framework — turn any IT system into an AI assistant that thinks, remembers and acts (Bridge v1 · conformance · server-kit) |
| 217 | [jiaxusummer/dsh-app-icon](https://github.com/jiaxusummer/dsh-app-icon) | 0 | 2026-11-13 | 2026-11-14 | Change the DeepSeek Harness desktop app icon (window, taskbar, tray): restore the official icon, or use your own image. |
| 218 | [jiaxusummer/dsh-window-memory](https://github.com/jiaxusummer/dsh-window-memory) | 0 | 2026-11-14 | 2026-11-14 | 璁颁綇 DSH 妗岄潰鐗堜富绐楀彛鐨勫昂瀵搞€佷綅缃笌鏈€澶у寲鐘舵€侊紝涓嬫鍚姩姣绾ц繕鍘熴€俉indows only. |
| 219 | [Jidaron/dsh-browser-bridge](https://github.com/Jidaron/dsh-browser-bridge) | 0 | 2026-11-13 | 2026-11-14 | Drive the browser you are signed into through a paired Chromium extension: ten tools over the DevTools Protocol. |
| 220 | [JinSuperOfficial/dsh-visual-option](https://github.com/JinSuperOfficial/dsh-visual-option) | 0 | 2026-11-14 | 2026-11-14 | A simple yet useful plugin for dsh(Deepseek-Harness) that enables your agent to preview website pages for user verification. |
| 221 | [JIQ1314an/dsh-recent-sessions](https://github.com/JIQ1314an/dsh-recent-sessions) | 0 | 2026-11-14 | 2026-11-14 | DSH sidebar Recents panel: jump back to recently opened sessions across workspaces, with a blinking three-dot mark while a task runs. |
| 222 | [jiyuchen1/dsh-pluginmarket-plus](https://github.com/jiyuchen1/dsh-pluginmarket-plus) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 插件：把插件市场索引 JSON 缓存到本地，支持手动/定时刷新与本地镜像，避免发现页索引超时。 |
| 223 | [Joe-Miller-1314/dsh-heartbeat](https://github.com/Joe-Miller-1314/dsh-heartbeat) | 0 | 2026-11-14 | 2026-11-14 | A small impulse engine for AI companions, packaged as a DeepSeek Harness plugin. |
| 224 | [jusspound-netizen/dsh-edge-market](https://github.com/jusspound-netizen/dsh-edge-market) | 0 | 2026-11-14 | 2026-11-14 | A curated, high-signal plugin market index for the DeepSeek Harness (DSH) ecosystem. Instantly view the top 20 most-starred plugins in your DSH Discover tab. |
| 225 | [jusspound-netizen/dsh-token-optimizer](https://github.com/jusspound-netizen/dsh-token-optimizer) | 0 | 2026-11-14 | 2026-11-14 | Audit DSH agent logs to find redundant calls, retry loops, and duplicate reasoning. Quantifies wasted tokens and dollars so you can optimize your agent's cost. |
| 226 | [jusspound-netizen/dsh-trends-finder](https://github.com/jusspound-netizen/dsh-trends-finder) | 0 | 2026-11-14 | 2026-11-14 | Fetch the real-time top 5 most downloaded and most starred DeepSeek Harness (DSH) plugins directly from the official dsh.so API. |
| 227 | [Kachchi3739/dsh-fallback](https://github.com/Kachchi3739/dsh-fallback) | 0 | 2026-11-14 | 2026-11-14 | Router fallback and pooled opencode-go accounts for DeepSeek Harness: when the active router exhausts its quota, the same request continues on the next connected router. Host interceptor + dsh-desktop Web UI panel. |
| 228 | [kaka100330/dsh-web-ask](https://github.com/kaka100330/dsh-web-ask) | 0 | 2026-11-14 | 2026-11-14 | 划选提问 + 侧边栏内嵌问答，用你自己的 DeepSeek 网页版账号作答（DSH 插件） |
| 229 | [Kehong-Chen/dsh-handoff](https://github.com/Kehong-Chen/dsh-handoff) | 0 | 2026-11-14 | 2026-11-14 | Six-section state handoff for DeepSeek Harness automatic compaction, with a line-numbered archive of the compacted transcript for grep/sed reading and a /handoff command. |
| 230 | [kmeng/dsh-grove](https://github.com/kmeng/dsh-grove) | 0 | 2026-11-13 | 2026-11-14 | Grove（知林）连接 DeepSeek Harness 与 Obsidian。与 AI 自由探索，按需做有据可查的研究，积累可回看、可修正的知识。判断、保存和分享由你决定。 Explore with AI, revisit and revise your knowledge, and make your own judgments. |
| 231 | [koolook123/dsh-turn-notify](https://github.com/koolook123/dsh-turn-notify) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 任务完成桌面提醒插件：每轮 agent 结束时在 Windows 右下角弹出 WPF 提示卡片 |
| 232 | [Krislu1221/dsh-html-panel](https://github.com/Krislu1221/dsh-html-panel) | 0 | 2026-11-14 | 2026-11-14 | 排版台：把每轮回答排成一页 HTML 放在 DSH 右栏，可翻历史。 · Typeset: every answer set as a page in the right sidebar, with paging back through history. |
| 233 | [kuznecov-anatoliy/dsh-opencode-classic-sidebar](https://github.com/kuznecov-anatoliy/dsh-opencode-classic-sidebar) | 0 | 2026-11-13 | 2026-11-14 | The classic (pre-redesign) OpenCode sidebar layout for DeepSeek Harness: project column, per-project session list with actions, panel buttons in the Windows caption strip, and a balance chip. |
| 234 | [Kylin412/dsh-jingdu](https://github.com/Kylin412/dsh-jingdu) | 0 | 2026-11-14 | 2026-11-14 | 鲸读（Jingdu）：用 DeepSeek TTS 朗读 DSH 助手回复，支持总结/全文、人设、自动播报与语音缓存。 |
| 235 | [LANHJUN/dsh-liang-time](https://github.com/LANHJUN/dsh-liang-time) | 0 | 2026-11-14 | 2026-11-14 | DSH 标题栏插件：北京时间高峰/低谷胶囊（22px，自动跟随国务院节假日与调休上班日） |
| 236 | [lazy-fur2025/dsh-paper-vault](https://github.com/lazy-fur2025/dsh-paper-vault) | 0 | 2026-11-14 | 2026-11-14 | Local-first paper vault plugin for DeepSeek Harness: arXiv search, import by arXiv/DOI/URL, PDFs, tags, notes and BibTeX. No CLI, no native modules. |
| 237 | [lcy362/dsh-railkeeper](https://github.com/lcy362/dsh-railkeeper) | 0 | 2026-11-14 | 2026-11-14 | Take over the left rail of DeepSeek Harness: reorder, rename, re-icon, hide and group the left-rail panels. Changes apply instantly and survive restarts. |
| 238 | [Leica-Shen/deepseek-harness-metre](https://github.com/Leica-Shen/deepseek-harness-metre) | 0 | 2026-11-14 | 2026-11-14 | Measurement-driven slide layout engine for DeepSeek Harness with text measurement, line breaking, image sourcing, and layout audits. |
| 239 | [LIAB-BB/dsh-session-cost](https://github.com/LIAB-BB/dsh-session-cost) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: per-conversation cost under DeepSeek official API pricing and the OpenCode Go subscription |
| 240 | [Lieakks/dsh-plugins](https://github.com/Lieakks/dsh-plugins) | 0 | 2026-11-10 | 2026-11-14 | DeepSeek Harness 本地插件：账号余额侧边栏、皮肤（壁纸 / 配色 / 文字对比度）、会话额度消耗 |
| 241 | [LISHUANGXI1412/dsh-screen-capture](https://github.com/LISHUANGXI1412/dsh-screen-capture) | 0 | 2026-11-14 | 2026-11-14 | DSH plugin: composer screenshot button with native region pick, hidden-window capture, and an optional model-facing screenshot tool with a hard ask gate. |
| 242 | [LittleChenLiya/dsh-superagent](https://github.com/LittleChenLiya/dsh-superagent) | 0 | 2026-11-14 | 2026-11-14 | Long-running autonomous execution plugin for DeepSeek Harness: one goal, model-planned parallel subtasks, one merged report, durable across restarts. |
| 243 | [littleyellowbicycle/dsh-atc](https://github.com/littleyellowbicycle/dsh-atc) | 0 | 2026-11-14 | 2026-11-14 | Multi-agent fleet board for DeepSeek Harness: one right-sidebar tab showing what every local agent (DSH, codex, opencode, WorkBuddy) is doing - zero token, host-side inference. |
| 244 | [liuyuxuan6666/dsh-social-reach](https://github.com/liuyuxuan6666/dsh-social-reach) | 0 | 2026-11-14 | 2026-11-14 | Read-only social media reach for DeepSeek Harness: hot lists across Bilibili, Zhihu, Douyin, Weibo and 40+ sources, plus platform search and page reading. One-way: internet into DSH. |
| 245 | [lliangworld/dsh-rule-guard](https://github.com/lliangworld/dsh-rule-guard) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 的纯本地命令规则守卫。它拦截 agent 的执行命令，只用本地规则判定：普通调用原样放行，命中规则的命令交给宿主默认审批面板 |
| 246 | [M-eang/dsh-cookie-doctor](https://github.com/M-eang/dsh-cookie-doctor) | 0 | 2026-11-14 | 2026-11-14 | DSH 启动时自动清掉 Chromium cookie 库里残留的 dsh-auth-* 行，避免请求头超过 16 KB 上限导致 431（被误报为 desktop welcome 认证失败）。 |
| 247 | [M-eang/dsh-lab](https://github.com/M-eang/dsh-lab) | 0 | 2026-11-14 | 2026-11-14 | Linux lab box cockpit for DSH: manage ssh tunnels, spot orphan listeners, discover remote services. |
| 248 | [M-eang/dsh-prompt-refine](https://github.com/M-eang/dsh-prompt-refine) | 0 | 2026-11-14 | 2026-11-14 | Prompt enhancement for the dsh web GUI: rewrite the composer draft into a well-structured prompt through the harness LLM |
| 249 | [M-eang/dsh-shell-kit](https://github.com/M-eang/dsh-shell-kit) | 0 | 2026-11-14 | 2026-11-14 | DSH Shell Kit：DeepSeek Harness 的进程运维工具箱——一键重启、实时日志流、HMR 热更新、端口排查、profile 体检与预设管理。 · An operations toolkit for the DeepSe |
| 250 | [M-eang/dsh-stt-qwen](https://github.com/M-eang/dsh-stt-qwen) | 0 | 2026-11-14 | 2026-11-14 | DSH 语音输入插件的本地千问识别器：用本机 Qwen3-ASR（qwen-asr + CPU torch）替换 SenseVoice，全程 127.0.0.1 不出网。 · Local Qwen3-ASR recognizer for t |
| 251 | [M-eang/dsh-wb-credits](https://github.com/M-eang/dsh-wb-credits) | 0 | 2026-11-14 | 2026-11-14 | 在 DSH 侧边栏底部显示网关账号积分卡（sidebar.footer.action 座位，自带样式表、宽度自适应铺满）：总量、未来 7 天到期、首到期。provider 可选 api（只读快照接口，可分发）/ panel（面板登录）/ s |
| 252 | [malinovme/dsh-unica](https://github.com/malinovme/dsh-unica) | 0 | 2026-09-10 | 2026-11-14 | Unica (1C:Enterprise development toolkit) for DeepSeek Harness: 50 skills and 11 native tools, one unica process per session workspace |
| 253 | [maomaoxyz1/dsh-cpu-temp](https://github.com/maomaoxyz1/dsh-cpu-temp) | 0 | 2026-11-14 | 2026-11-14 | 这是一个监控你cpu温度的插件，目前我在华为笔记本用了两周，暂时没出现什么问题，可能到别的电脑上就不能运行了，都到时候让你们的dsh自己改。感觉对一些笔记本电脑用户有帮助。嗯对。喵喵。 |
| 254 | [MeshTok/dsh-plugin-meshmoe](https://github.com/MeshTok/dsh-plugin-meshmoe) | 0 | 2026-11-14 | 2026-11-14 | MeshMoe for DeepSeek Harness: free local MeshMoe-4B agent, zero registration, join the compute mesh, earn Joules. |
| 255 | [MFn233/dsh-aardio](https://github.com/MFn233/dsh-aardio) | 0 | 2026-11-14 | 2026-11-14 | 内置三个 aardio 编写技能，可就地检索你本机的官方文档、范例和标准库源码，把文件或工程交给 aardio IDE 打开。aardio 装在哪由你自己指定：在「插件」页打开本插件，进入 dsh-aardio 这一行点「配置」，选择含有 aardio.exe 的文件夹；留空则自动查找。 |
| 256 | [mig-everything/phone-use-dsh](https://github.com/mig-everything/phone-use-dsh) | 0 | 2026-11-14 | 2026-11-14 | Phone Use for DeepSeek Harness: HarmonyOS, Android and iPhone tools with a multi-device sidebar and a shared SDK/MCP core |
| 257 | [Minus77/dsh-prompt-optimize](https://github.com/Minus77/dsh-prompt-optimize) | 0 | 2026-11-14 | 2026-11-14 | 在 DeepSeek Harness 输入框里就地改写提示词：流式生成、逐行 diff 确认、9 秒撤销，附带本地历史、版本对比、模板库与中英双语界面。 |
| 258 | [MIOM-2025/dsh-auto-resume](https://github.com/MIOM-2025/dsh-auto-resume) | 0 | 2026-11-14 | 2026-11-14 | DSH 崩溃/重启后自动继续未完成的回合：不用再手打「继续」 |
| 259 | [mmojie/dsh-goal-autostart](https://github.com/mmojie/dsh-goal-autostart) | 0 | 2026-11-13 | 2026-11-14 | Emit a user-source message so the next turn can pass the create_goal human-turn guard. DEFAULT OFF; read the README first. |
| 260 | [MokoKing666/dsh-aftereffects](https://github.com/MokoKing666/dsh-aftereffects) | 0 | 2026-11-14 | 2026-11-14 | Drive Adobe After Effects from DeepSeek Harness: build compositions and motion-graphics templates, then render MP4 or PNG without leaving the chat. |
| 261 | [MokoKing666/dsh-jimeng](https://github.com/MokoKing666/dsh-jimeng) | 0 | 2026-11-14 | 2026-11-14 | 把本机已登录的「即梦 AI」桌面端接进 DeepSeek Harness：生图、生视频都能调，模型列表实时从账号读取，不用 API Key |
| 262 | [msnex/dsh-project-workspace](https://github.com/msnex/dsh-project-workspace) | 0 | 2026-11-14 | 2026-11-14 | project-workspace plugin for dsh |
| 263 | [myxuebi/dsh-auto-rec](https://github.com/myxuebi/dsh-auto-rec) | 0 | 2026-11-14 | 2026-11-14 | dsh会话守护插件 |
| 264 | [nekonya77/dsh-podcast-panel](https://github.com/nekonya77/dsh-podcast-panel) | 0 | 2026-11-14 | 2026-11-14 | DSH 侧栏播客面板：订阅 RSS、倍速播放、记住进度、三行摘要。 |
| 265 | [nevercanner/dsh-cdrive-guard](https://github.com/nevercanner/dsh-cdrive-guard) | 0 | 2026-11-14 | 2026-11-14 | DSH 插件：默认拒绝 Agent 向 C 盘写入，人工审批放行，按前缀配置豁免清单，目录转存 D 盘 + Junction 回链 |
| 266 | [nixuejun888/dsh-plugin-wechat](https://github.com/nixuejun888/dsh-plugin-wechat) | 0 | 2026-11-14 | 2026-11-14 | Command the DSH agent from WeChat · 左侧栏「微信遥控」：扫一次码，用微信指挥电脑上的 DSH 智能体干活 |
| 267 | [nopanicer/dsh-math-lab](https://github.com/nopanicer/dsh-math-lab) | 0 | 2026-11-14 | 2026-11-14 | 高中数学动态实验室：DeepSeek Harness 的 24 个互动数学模型（函数 / 三角 / 解析几何 / 导数 / 概率统计），带讲解、分步解说与出题判分 · Interactive high-school math lab plugin for DeepSeek Harness |
| 268 | [nopanicer/dsh-workspace-focus](https://github.com/nopanicer/dsh-workspace-focus) | 0 | 2026-11-14 | 2026-11-14 | Manual workspace focus for the DeepSeek Harness sidebar: one icon button shows only the current workspace's conversations, and every workspace again. |
| 269 | [norths7ar/dsh-model-guidance](https://github.com/norths7ar/dsh-model-guidance) | 0 | 2026-11-10 | 2026-11-14 | 为 DeepSeek Harness 中的不同模型设置提示词与行为偏好。 |
| 270 | [null0xfff/dsh-mcp-manager](https://github.com/null0xfff/dsh-mcp-manager) | 0 | 2026-11-14 | 2026-11-14 | Field-based MCP server management plugin for DeepSeek Harness. |
| 271 | [Oak-liuhj/dsh-taskflow](https://github.com/Oak-liuhj/dsh-taskflow) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 智能任务编排插件：模型按任务复杂度生成持久层级清单，按需创建子会话，完成后自动勾选并通知直接父会话。 |
| 272 | [obrua/dsh-fakeip-bridge](https://github.com/obrua/dsh-fakeip-bridge) | 0 | 2026-11-14 | 2026-11-14 | Restore DSH web_fetch behind a Clash/TUN fake-IP DNS while keeping the SSRF guard — configurable DSH plugin |
| 273 | [OCAN107/dsh-turn-cost](https://github.com/OCAN107/dsh-turn-cost) | 0 | 2026-11-14 | 2026-11-14 | Show what each conversation turn costs, right next to its timestamp 🐟 |
| 274 | [odin1024/zhibai-skills](https://github.com/odin1024/zhibai-skills) | 0 | 2026-11-14 | 2026-11-14 | 知白守黑1024 的 Agent Skills 合集：投标技术文档、家庭防骗、简历诊断，6 个可直接安装的 SKILL.md。适用于 Claude Code / Codex / WorkBuddy / DeepSeek Harness。 |
| 275 | [Oliver13211/dsh-plugin-flowchart](https://github.com/Oliver13211/dsh-plugin-flowchart) | 0 | 2026-11-14 | 2026-11-14 | FlowChart — DeepSeek Harness 插件：代理用 YAML 在对话右侧边栏画流程图。15 种形状、四向布局、四层校验、投影持久化、对话内卡片、导出 SVG/PNG，零运行时依赖 |
| 276 | [oriliz/agent-crop](https://github.com/oriliz/agent-crop) | 0 | 2026-11-14 | 2026-11-14 | 给 AI 编程助手一根马鞭：本地 trace 记录时间去向，推它反思、自证优化。Local tracing for AI coding agents — where the time actually goes. DSH / Claude Code / Codex. |
| 277 | [OSHANG-NOVA/dsh-custom-prompt-mode](https://github.com/OSHANG-NOVA/dsh-custom-prompt-mode) | 0 | 2026-11-14 | 2026-11-14 | DSH plugin: a Custom prompt agent mode whose system prompt is entirely your own text, with auto-discovered tool switches and model-assisted Chinese descriptions. |
| 278 | [owenxyzhang-seseTJ/Convolvex-MS](https://github.com/owenxyzhang-seseTJ/Convolvex-MS) | 0 | 2026-11-14 | 2026-11-14 | Auditable MS/DEMS inversion backend, web workbench and DeepSeek Harness plugin (dsh-convolvex-ms-workbench) |
| 279 | [palx666/dsh-batch-review](https://github.com/palx666/dsh-batch-review) | 0 | 2026-11-01 | 2026-11-14 | DeepSeek Harness 的逐条批阅工具：agent在向用户发起询问/申请批复时调用batch_review工具，在输入框上方弹出面板一次进行多条批复。Per-item review cards for DeepSeek Harness: the agent calls batch_review whenever it asks the user for a decision or approval, and a panel above the input box collects a whole batch at once. |
| 280 | [panda11445/dsh-purge-go](https://github.com/panda11445/dsh-purge-go) | 0 | 2026-11-14 | 2026-11-14 | dsh-purge 的 dsh-Go / Android 移植版（原作者 YuJunZhiXue，Apache-2.0） |
| 281 | [PerryLink/dsh-os-suite](https://github.com/PerryLink/dsh-os-suite) | 0 | 2026-11-14 | 2026-11-14 | Six governance-layer plugins for DeepSeek Harness: trace, lease, quota, eval, catalog, registry. Community project, not affiliated with DeepSeek. |
| 282 | [person-clouds/dsh-context-guard](https://github.com/person-clouds/dsh-context-guard) | 0 | 2026-11-14 | 2026-11-14 | dsh-context-guard 上下文token优化及安全优化 |
| 283 | [person-clouds/superagent-workbench](https://github.com/person-clouds/superagent-workbench) | 0 | 2026-11-14 | 2026-11-14 | DSH的工作台，也服务于superagent。可展示DSH生成和维护的项目，文档，仓库等。 |
| 284 | [pgmi-builds/super-dsh](https://github.com/pgmi-builds/super-dsh) | 0 | 2026-09-21 | 2026-11-14 | Super Dash — multi-agent orchestration hub bridging six foreign agent runtimes (Codex, Claude, OMP, Pi, Hermes, Antigravity) into the DeepSeek Harness Web UI. Two independent npm packages: better-dsh + super-dsh. |
| 285 | [Phikec/dsh-ai-project-doctor](https://github.com/Phikec/dsh-ai-project-doctor) | 0 | 2026-11-14 | 2026-11-14 | Diagnose and repair a project inside DeepSeek Harness: a Doctor panel in the Web client and a project_doctor tool, with reversible fixes and automatic backups. |
| 286 | [Phikec/DSH-dialog-viewer](https://github.com/Phikec/DSH-dialog-viewer) | 0 | 2026-11-14 | 2026-11-14 | A readable dialogue transcript tab for the DeepSeek Harness Web client right sidebar. |
| 287 | [PilotHowe/Plugin-advisor](https://github.com/PilotHowe/Plugin-advisor) | 0 | 2026-11-12 | 2026-11-14 | Stop browsing the DSH plugin market. Describe your task and Plugin Advisor finds, judges, and onboards the right community plugin — and asks before switching. |
| 288 | [Planckbaka/dsh-superagent-relay](https://github.com/Planckbaka/dsh-superagent-relay) | 0 | 2026-11-14 | 2026-11-14 | Superagent Relay: a community preview of persistent Worker tickets for DeepSeek Harness. |
| 289 | [pokereva/dsh-no-enter-send](https://github.com/pokereva/dsh-no-enter-send) | 0 | 2026-11-12 | 2026-11-14 | 屏蔽 Enter 发送：Enter 只换行，消息只能点按钮发出去 · DeepSeek Harness 插件（npm: dsh-no-enter-send） |
| 290 | [poxiao-12138/dsh-poxiao-qqbot](https://github.com/poxiao-12138/dsh-poxiao-qqbot) | 0 | 2026-11-14 | 2026-11-14 | 一键大肥鱼养鱼插件，集成官方QQ、BreezeBlueTTS、记忆、AI游戏世界 |
| 291 | [prog656/dsh-one-click-new-session](https://github.com/prog656/dsh-one-click-new-session) | 0 | 2026-11-14 | 2026-11-14 | One click opens a blank DSH chat without picking a workspace |
| 292 | [PunkyDrew/BaseSeer-DSH](https://github.com/PunkyDrew/BaseSeer-DSH) | 0 | 2026-11-12 | 2026-11-14 | BaseSeer DSH plugin - UML spec based code building and review plugin |
| 293 | [QIFANAI/dsh-startup-moss2](https://github.com/QIFANAI/dsh-startup-moss2) | 0 | 2026-11-14 | 2026-11-14 | MOSS 550W · 流浪地球 — DSH 启动动画 + UI 皮肤插件（v0.5 完整素材开源版：四幕 13.9s 启动电影 + 动态地球视频背景 + 实录音效） |
| 294 | [QLNPLUS/dsh-opendesign-quota-card](https://github.com/QLNPLUS/dsh-opendesign-quota-card) | 0 | 2026-11-14 | 2026-11-14 | OpenDesign (AMR) coding-plan quota card for the DSH Web sidebar: per-window usage bars, a dashboard, and a console sign-in that reads the vendor’s own figures instead of an estimate. |
| 295 | [Quisperc/dsh-qq-instruction](https://github.com/Quisperc/dsh-qq-instruction) | 0 | 2026-11-14 | 2026-11-14 | QQ (OneBot/NapCat) bot on DeepSeek Harness: restricted agent preset, tool-surface guard, per-item backup plugin |
| 296 | [qwqZYLqwq/dsh-qqmusic](https://github.com/qwqZYLqwq/dsh-qqmusic) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 插件：在输入框下方遥控 QQ 音乐——上一首 / 播放暂停 / 下一首，并给助手一个 qqmusic_control 工具。基于 Windows SMTC，不注入进程。 |
| 297 | [qwqZYLqwq/dsh-trae-relay-usage](https://github.com/qwqZYLqwq/dsh-trae-relay-usage) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 插件：在会话标题栏和侧边栏显示本地 Trae Relay 反代的账号积分、今日 Token 与请求流水 |
| 298 | [qybaihe/dshrsi](https://github.com/qybaihe/dshrsi) | 0 | 2026-11-13 | 2026-11-14 | DSHRSI: Recursive Self-Improvement for DeepSeek Harness. A plugin through which the harness improves itself from its own runs: per machine, per user, per project. |
| 299 | [Re50Na/dsh-tokyonight-theme](https://github.com/Re50Na/dsh-tokyonight-theme) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 的 Tokyo Night 主题插件，从 Catppuccin for DeepSeek Harness 项目移植。  包含以 Enkia 的 Tokyo Night 配色方案为参考的三个 UI 及代码着色主题——Tokyo Night Light、Tokyo Night、Tokyo Night Storm。  同时内置一套可开关和配置的玻璃质感（Glassmorphism）皮肤，颜色自动跟随当前设置的主题。 |
| 300 | [Reco1or/dsh-prompt-zh-cn](https://github.com/Reco1or/dsh-prompt-zh-cn) | 0 | 2026-11-14 | 2026-11-14 | 替换DSH内置的系统提示词sections、运行时上下文、自动注入消息与工具定义为中文 |
| 301 | [reoanrudo/dsh-usage-panel](https://github.com/reoanrudo/dsh-usage-panel) | 0 | 2026-11-14 | 2026-11-14 | Usage panel for DeepSeek Harness: GLM/Codex/Claude/DeepSeek/opencode go/Command Code in one popup |
| 302 | [roekdnd/dsh-restart-suite](https://github.com/roekdnd/dsh-restart-suite) | 0 | 2026-11-14 | 2026-11-14 | dsh 重启套件：agent 工具与界面按钮共用一套忙闲判定，重启后按清单唤醒被打断的会话。仅 Windows。 |
| 303 | [router-ai/dsh-plugin-routerai](https://github.com/router-ai/dsh-plugin-routerai) | 0 | 2026-11-13 | 2026-11-14 | RouterAI для DeepSeek Harness: сотни моделей по одному ключу с оплатой в рублях, картинки, видео, озвучка |
| 304 | [runfali/dsh-fact-memory](https://github.com/runfali/dsh-fact-memory) | 0 | 2026-11-14 | 2026-11-14 | Cross-session fact memory for DeepSeek Harness: structured claims (subject · property · value) in one SQLite store, with evidence levels, visible conflicts, tombstones, and a token-budgeted directory injected into every request. |
| 305 | [runfali/dsh-soul](https://github.com/runfali/dsh-soul) | 0 | 2026-11-13 | 2026-11-14 | Give DeepSeek Harness a soul — Markdown persona cards resolved per session and workspace, injected into the system prompt and re-resolved every turn. The model can read its persona, never rewrite it. |
| 306 | [runweok/dsh-tushare](https://github.com/runweok/dsh-tushare) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 插件：全会话可用的 Tushare 数据研究技能（龙虎榜/资金流/估值/财务/宏观，自然语言直查）+ token 设置面板 |
| 307 | [sanmumu-325/dsh-doubao-client](https://github.com/sanmumu-325/dsh-doubao-client) | 0 | 2026-11-13 | 2026-11-14 | Expose the models of a locally running Doubao desktop client as a DeepSeek Harness provider: all twelve catalog models in ordinary chat mode, real image input through the client's own upload channel, subscription quota query, a local character-based usage ledger, and strict-JSON tool emulation. Unof |
| 308 | [seally-web/dsh-r-runner](https://github.com/seally-web/dsh-r-runner) | 0 | 2026-11-14 | 2026-11-14 | R in the DeepSeek Harness sidebar — an RStudio-shaped workbench with a persistent R session, environment pane, plot gallery, and an r_run tool for agents. |
| 309 | [ShawnZhangGy/dsh-tray-restart](https://github.com/ShawnZhangGy/dsh-tray-restart) | 0 | 2026-11-14 | 2026-11-14 | Brings the DeepSeek Harness desktop tray 'Restart' item back after every auto-update |
| 310 | [shenhua725/dsh-qq-console-v2](https://github.com/shenhua725/dsh-qq-console-v2) | 0 | 2026-11-14 | 2026-11-14 | Turn mobile QQ into a remote control for DeepSeek Harness (DSH plugin) |
| 311 | [shuixing14/dsh-session-manager](https://github.com/shuixing14/dsh-session-manager) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness 插件：真正删除聊天会话（默认先备份）· Delete DSH sessions, backup-first |
| 312 | [sijiyu521/dsh-wordhelper](https://github.com/sijiyu521/dsh-wordhelper) | 0 | 2026-11-14 | 2026-11-14 | DSH 划词助手插件：左侧栏入口 + 划词浮条（翻译/解释/复制/搜索/收藏）+ 全电脑剪贴板监听 + 模拟输入 |
| 313 | [simin-yuan/dsh-plain-memory](https://github.com/simin-yuan/dsh-plain-memory) | 0 | 2026-11-13 | 2026-11-14 | 原味记忆：DSH 原生的轻记忆。纯 Markdown 资产、线索词本地召回；零依赖、零模型调用、零定时器。多窗口状态卡为实验功能（默认关闭）。 |
| 314 | [Singapo/mvplus-subtitle](https://github.com/Singapo/mvplus-subtitle) | 0 | 2026-11-14 | 2026-11-14 | Give a cloud-drive film a Chinese subtitle: local ASR + forced alignment + LLM translation, then a verified upload back to the same folder. Also a DeepSeek Harness plugin. |
| 315 | [SiriusWJ/dsh-yyz-kaka](https://github.com/SiriusWJ/dsh-yyz-kaka) | 0 | 2026-11-14 | 2026-11-14 | 一只住在 DeepSeek Harness 里的小螃蟹工作助手：独立预设人格、跨会话共享记忆、日记与画像、画笔、螃蟹声、5 秒生命线程。 |
| 316 | [SiteraHusiki/unreal-skills-port](https://github.com/SiteraHusiki/unreal-skills-port) | 0 | 2026-11-14 | 2026-11-14 | Epic Games Unreal Engine MCP Skills port for DeepSeek Harness (dsh) and other MCP clients |
| 317 | [Siwei-666/dsh-nes-emulator](https://github.com/Siwei-666/dsh-nes-emulator) | 0 | 2026-11-14 | 2026-11-14 | NES / FC emulator plugin for DeepSeek Harness with managed ROM library, cover screenshots, unlimited saves, gamepad and fast-forward. |
| 318 | [Six6stRINgs/dsh-settings-sidebar-organizer](https://github.com/Six6stRINgs/dsh-settings-sidebar-organizer) | 0 | 2026-11-14 | 2026-11-14 | 通过拖拽的方式，将dsh设置侧栏进行分组，排列。Group and arrange the DSH settings sidebar by dragging and dropping. |
| 319 | [skj1023/dsh-sidebar-groups](https://github.com/skj1023/dsh-sidebar-groups) | 0 | 2026-11-14 | 2026-11-14 | Group DeepSeek Harness sidebar plugin entries into collapsible groups. |
| 320 | [slchy/dsh-pet-wearable](https://github.com/slchy/dsh-pet-wearable) | 0 | 2026-11-14 | 2026-11-14 | Pet for DeepSeek Harness (dsh) that lives on smart glasses - it speaks up on its own and shares your view. Early development; no stable API yet. |
| 321 | [SmallFiveAh/dsh-inkos](https://github.com/SmallFiveAh/dsh-inkos) | 0 | 2026-11-14 | 2026-11-14 | 把 InkOS 创作工作台接进 DeepSeek Harness：侧栏入口 + 舞台内嵌 + 上游自动更新 |
| 322 | [soffits/dsh-session-query-cjk](https://github.com/soffits/dsh-session-query-cjk) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness session search that finds Chinese, Japanese and Korean words inside sentences |
| 323 | [Solitudeks/agent-coop](https://github.com/Solitudeks/agent-coop) | 0 | 2026-11-14 | 2026-11-14 | 硅姬后援团（@local/agent-coop）：DeepSeek Harness 本机 Agent 运行状态面板 — local Agent runtime status panel for DSH |
| 324 | [SpokAtom/dsh-status-lamp](https://github.com/SpokAtom/dsh-status-lamp) | 0 | 2026-11-14 | 2026-11-14 | Session-row status lamp for DeepSeek Harness: blue dot for idle, hollow ring for parked, solid grey dot for archived. |
| 325 | [ssacko510-stack/dsh-purge-fork](https://github.com/ssacko510-stack/dsh-purge-fork) | 0 | 2026-11-14 | 2026-11-14 | dsh-purge 1.1.71 个人维护分支 \| DSH Desktop 0.2.1-rc.1 与 0.2.2-rc.2.1 兼容修复 \| 基于 YuJunZhiXue/dsh-purge (MIT) |
| 326 | [Study0915/dsh-scholar-board](https://github.com/Study0915/dsh-scholar-board) | 0 | 2026-11-07 | 2026-11-14 | DSH 学术看板插件：组件看板 + 面向通信方向硕博的学术工作台（基于 Nwflower/dsh-widget-board，MIT） |
| 327 | [sumingwang233/dsh-provider-quota-rings](https://github.com/sumingwang233/dsh-provider-quota-rings) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 侧栏底部的订阅额度圆环（Codex / Claude / OpenCode Go / GLM），默认不读取账号。 |
| 328 | [SuShuoran/dsh-wechat-135](https://github.com/SuShuoran/dsh-wechat-135) | 0 | 2026-11-14 | 2026-11-14 | DSH ??:135 ???????????(???? / ???? / ??+?????) |
| 329 | [tangmanto98-VoV/dsh-screenshot-button](https://github.com/tangmanto98-VoV/dsh-screenshot-button) | 0 | 2026-11-14 | 2026-11-14 | Screenshot button for the DeepSeek Harness composer: per-monitor and all-screens capture (Windows) |
| 330 | [tarnish233/dsh-TUI](https://github.com/tarnish233/dsh-TUI) | 0 | 2026-11-06 | 2026-11-14 | Native DeepSeek Harness terminal plugin. DSH owns the agent; this is the same-process TUI. |
| 331 | [TEKARAHikari/dsh-led-pet](https://github.com/TEKARAHikari/dsh-led-pet) | 0 | 2026-11-14 | 2026-11-14 | LED 桌宠：DSH Web 右下角的橙色火焰幼龙，标准 Cubism v16 模型；另有可拖出窗口的 Electron 桌面版 |
| 332 | [TenDollars-ag/dsh-screenshot](https://github.com/TenDollars-ag/dsh-screenshot) | 0 | 2026-11-14 | 2026-11-14 | ​A zero-dependency screenshot plugin for DeepSeek Harness — capture the whole screen or occluded windows with Per-Monitor DPI awareness, saving to PNG and clipboard. |
| 333 | [tero0224-droid/dsh-locale-zh-tw](https://github.com/tero0224-droid/dsh-locale-zh-tw) | 0 | 2026-11-14 | 2026-11-14 | Traditional Chinese (Taiwan) interface language pack for the DeepSeek Harness web GUI |
| 334 | [TideDra/dsh-session-history-cache](https://github.com/TideDra/dsh-session-history-cache) | 0 | 2026-11-14 | 2026-11-14 | LRU session history cache plugin for DeepSeek Harness Web UI — instant session switching without reloading |
| 335 | [tingjhdhjsqjjsnshh152074-afk/dsh-message-queue](https://github.com/tingjhdhjsqjjsnshh152074-afk/dsh-message-queue) | 0 | 2026-11-14 | 2026-11-14 | Per-conversation scheduled message queue plugin for DeepSeek Harness |
| 336 | [tmxtml/dsh-pc-operator](https://github.com/tmxtml/dsh-pc-operator) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugins for Windows desktop control: screen_viewer returns screenshots as images, mouse_controller drives the real pointer with human-like motion and a task-aware top-right overlay (Ctrl+D+S+H stops takeover). |
| 337 | [tongqing1130-png/dsh-session-delete](https://github.com/tongqing1130-png/dsh-session-delete) | 0 | 2026-11-14 | 2026-11-14 | DSH 插件：会话右键「删除对话」。真正删掉会话（磁盘 + 内存 + 工作区引用），原生 Modal 确认，删完即时生效不用重启。 |
| 338 | [TwoFishes08/dsh-live-backup](https://github.com/TwoFishes08/dsh-live-backup) | 0 | 2026-11-14 | 2026-11-14 | dsh实时备份：DeepSeek Harness 插件 — 自动备份工作区对话/文件与插件配置到云盘（华为云盘、OneDrive、坚果云、WPS、百度网盘） |
| 339 | [TyrusLabs-IO/dsh-panel-theme](https://github.com/TyrusLabs-IO/dsh-panel-theme) | 0 | 2026-11-14 | 2026-11-14 | Configurable sidebar background theme for DeepSeek Harness: gradient, glow, opacity, presets and JSON backup. |
| 340 | [UncertaintyDeterminesYou4ndMe/dsh-thesis-trail](https://github.com/UncertaintyDeterminesYou4ndMe/dsh-thesis-trail) | 0 | 2026-11-14 | 2026-11-14 | 循迹：在 DeepSeek Harness 里长期跟踪可证伪的投资命题，按时用 DeepSeek API 联网研究，人和 AI 共编议题 |
| 341 | [upinking/dsh-equity-desk](https://github.com/upinking/dsh-equity-desk) | 0 | 2026-11-14 | 2026-11-14 | 本机股票交易台 for DeepSeek Harness · A/HK/US quotes, T+1, margin, 1x–10x leverage. Simulated ledger only. |
| 342 | [Venompool888/dsh-plugin-voice-alert](https://github.com/Venompool888/dsh-plugin-voice-alert) | 0 | 2026-11-14 | 2026-11-14 | Voice alerts for DeepSeek Harness (DSH): speaks up when a session needs your approval or a verification code. 语音提醒插件 |
| 343 | [Vertingod/dsh-campus-calendar](https://github.com/Vertingod/dsh-campus-calendar) | 0 | 2026-11-14 | 2026-11-14 | 本地维护的大学生赛事与证书日历：按专业、年级与地区计算适配度，月历优先，支持时间轴、收藏与 ICS 导出，数据不出本机。 |
| 344 | [Vesna-Strivozha-cn/dsh-bili-account-bridge](https://github.com/Vesna-Strivozha-cn/dsh-bili-account-bridge) | 0 | 2026-11-14 | 2026-11-14 | B站桥：让 dsh-bili-whale 与 dsh-dafeiyu-life 共用一份 B站 登录态，按词库定归属、按闸门决定动手 |
| 345 | [Vhow123/dsh-prompt-forge](https://github.com/Vhow123/dsh-prompt-forge) | 0 | 2026-11-14 | 2026-11-14 | Prompt Forge for DeepSeek Harness: turn a rough image idea into model-ready prompts — 6 target dialects (Midjourney, SD, GPT-Image, nano-banana, natural zh/en), an 11-field shot breakdown, negative prompts, filler-word stripping and local history. |
| 346 | [vuon9/dsh-plugins](https://github.com/vuon9/dsh-plugins) | 0 | 2026-11-14 | 2026-11-14 | Plugins for DeepSeek Harness, one package per directory under packages/. |
| 347 | [w1ndys/dsh-open-locally](https://github.com/w1ndys/dsh-open-locally) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: one header button per open method — 把「在应用中打开」的二级菜单拆成每个应用一个按钮 |
| 348 | [WaeoTech/harness-bridge](https://github.com/WaeoTech/harness-bridge) | 0 | 2026-11-14 | 2026-11-14 | A local DSH plugin: plan in DeepSeek Harness, execute in Claude Code, verify the diff. |
| 349 | [wang-yudong/dsh-pet-extend](https://github.com/wang-yudong/dsh-pet-extend) | 0 | 2026-11-14 | 2026-11-14 | dsh-pet扩展插件 |
| 350 | [wangchai1527-prog/ternaryfox-sidebar](https://github.com/wangchai1527-prog/ternaryfox-sidebar) | 0 | 2026-11-14 | 2026-11-14 | TernaryFox 终端 DSH 侧栏插件：原生 Tab（登录/话题/流式聊天）+ /tfapi 同源代理 |
| 351 | [wangfujian762/dsh-voice-cues](https://github.com/wangfujian762/dsh-voice-cues) | 0 | 2026-11-14 | 2026-11-14 | Voice cues for DeepSeek Harness: a short spoken line when a turn finishes, an approval is requested, or the agent asks a question. macOS, Windows, Linux. |
| 352 | [wangfujian762/dsh-voice-cues-friday](https://github.com/wangfujian762/dsh-voice-cues-friday) | 0 | 2026-11-14 | 2026-11-14 | Voice cues for DeepSeek Harness with a 星期五 (Friday) voice pack. macOS, Windows, Linux. |
| 353 | [wangkohan/dsh-composer-draft-keeper](https://github.com/wangkohan/dsh-composer-draft-keeper) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: keeps unsent composer text as a per-session draft in local storage, so it comes back after switching sessions or restarting the app. |
| 354 | [WanX609/dsh-codex-model-effort-selector](https://github.com/WanX609/dsh-codex-model-effort-selector) | 0 | 2026-11-14 | 2026-11-14 | Codex desktop-style model and reasoning-effort selector for DeepSeek Harness |
| 355 | [wdbaolongzs/dsh-my-funds](https://github.com/wdbaolongzs/dsh-my-funds) | 0 | 2026-11-14 | 2026-11-14 | Fund holdings panel for the DSH sidebar: screenshot import (Windows OCR), daily P&amp;L, DCA plans, twice-daily email report. |
| 356 | [weixiaolv/dsh-sidebar-cards](https://github.com/weixiaolv/dsh-sidebar-cards) | 0 | 2026-11-12 | 2026-11-14 | A sidebar tool for DeepSeek Harness: switch between the card list and the native list, group workspaces and plugins, and browse the project file tree. |
| 357 | [wgytcdx/dsh-typing-buddy](https://github.com/wgytcdx/dsh-typing-buddy) | 0 | 2026-11-14 | 2026-11-14 | Muse-style floating status widget plugin for DeepSeek Harness |
| 358 | [whiplashf/dsh-voice-hotkey](https://github.com/whiplashf/dsh-voice-hotkey) | 0 | 2026-11-14 | 2026-11-14 | Minimal push-to-talk voice input for DeepSeek Harness: Alt+V toggles the official Voice Input recorder, silence stops it, the transcript lands in the composer. |
| 359 | [wufeng0105/dsh-tool-keeper](https://github.com/wufeng0105/dsh-tool-keeper) | 0 | 2026-11-13 | 2026-11-14 | AI re-reads every tool's manual on every reply. Hide the ones you never use, and rewrite the rest. DSH plugin. |
| 360 | [Wuming1101/dsh-context-window](https://github.com/Wuming1101/dsh-context-window) | 0 | 2026-11-14 | 2026-11-14 | 每轮把更早的轮次从模型可见 surface 折叠，只保留最近 N 轮原文 |
| 361 | [Wuming1101/dsh-memory-preset](https://github.com/Wuming1101/dsh-memory-preset) | 0 | 2026-11-14 | 2026-11-14 | 记忆优先预设：只留最近一轮原文，更早的历史走记忆库检索 |
| 362 | [Wuming1101/dsh-memory-store](https://github.com/Wuming1101/dsh-memory-store) | 0 | 2026-11-14 | 2026-11-14 | 本地 SQLite 记忆库：四路召回、软删、会话采集与可选注入（DSH 插件） |
| 363 | [Wuming1101/dsh-plugin-foundry-preset](https://github.com/Wuming1101/dsh-plugin-foundry-preset) | 0 | 2026-11-14 | 2026-11-14 | 插件工坊预设 + 从桌面版 app.asar 取官方文档的用户技能 |
| 364 | [Wuming1101/dsh-plugins](https://github.com/Wuming1101/dsh-plugins) | 0 | 2026-11-14 | 2026-11-14 | 温凌微的 DSH 插件索引 |
| 365 | [Wuming1101/dsh-qq](https://github.com/Wuming1101/dsh-qq) | 0 | 2026-11-14 | 2026-11-14 | 把 QQ（NapCat / OneBot11）接进 DSH：私聊/群聊变持久会话，拟人分条、文件与表情收发 |
| 366 | [Wuming1101/dsh-workspace-autoclaim](https://github.com/Wuming1101/dsh-workspace-autoclaim) | 0 | 2026-11-14 | 2026-11-14 | 启动时把存量会话挂到 cwd 相同的已注册工作区 |
| 367 | [wz1184197761/dsh-plugin-wremote](https://github.com/wz1184197761/dsh-plugin-wremote) | 0 | 2026-11-14 | 2026-11-14 | Mirror a single desktop window (built for WeChat) inside DeepSeek Harness, with input passthrough. Ships the Windows capture service it bridges to. |
| 368 | [X1aoM1ngTX/dsh-lan-remote](https://github.com/X1aoM1ngTX/dsh-lan-remote) | 0 | 2026-11-14 | 2026-11-14 | Share a DSH over the LAN and open other computers' DSH from one settings page. |
| 369 | [xbqn/AgentCenter](https://github.com/xbqn/AgentCenter) | 0 | 2026-11-14 | 2026-11-14 | AgentCenter — DeepSeek Harness (dsh) plugin. Read-only task center for every local AI agent session: unified scan of 12 agents, conversation replay, session content search, session references in the composer, and AI daily reports using your own DSH model. |
| 370 | [xbzbing/dsh-im-wechat](https://github.com/xbzbing/dsh-im-wechat) | 0 | 2026-11-07 | 2026-11-14 | 微信 IM 桥：支持扫码登录、长程任务主动提醒、提问卡转发，可以日常闲聊，也可以直接派活工作。 |
| 371 | [xiaaoyun/dsh-aionui-grid-fix](https://github.com/xiaaoyun/dsh-aionui-grid-fix) | 0 | 2026-11-14 | 2026-11-14 | Layout patch for the third-party AionUi right-panel plugin: pins its columns to the first grid row and copies a diagnostic when the fix stops holding. |
| 372 | [xiaaoyun/dsh-auto-continue](https://github.com/xiaaoyun/dsh-auto-continue) | 0 | 2026-11-14 | 2026-11-14 | Keeps a DSH Session working while you are away: after each turn it sends one more continuation, until the round budget runs out or you send a message yourself. |
| 373 | [xiaaoyun/dsh-crypto](https://github.com/xiaaoyun/dsh-crypto) | 0 | 2026-11-14 | 2026-11-14 | Crypto market panel in the DSH sidebar: live watchlist, candles with EMA, a 7-factor AI signal with entry/stop/target, an add-position plan and DeepSeek commentary. |
| 374 | [xiaaoyun/dsh-idle-game](https://github.com/xiaaoyun/dsh-idle-game) | 0 | 2026-11-14 | 2026-11-14 | An idle deep-sea diving game inside the DSH Web UI: it keeps sinking while the page is closed, with three upgrades, a chest every two minutes and a dive log. |
| 375 | [xiaaoyun/dsh-scratchpad](https://github.com/xiaaoyun/dsh-scratchpad) | 0 | 2026-11-14 | 2026-11-14 | Scratchpad in the DSH sidebar: tagged notes with a tag filter, Markdown to-dos you can tick, image and file attachments with a size budget, and JSON export/import. |
| 376 | [xiaaoyun/dsh-workspace-glow](https://github.com/xiaaoyun/dsh-workspace-glow) | 0 | 2026-11-14 | 2026-11-14 | Future-tech HUD workspace skin for the DSH Web UI: chamfered neon frame, dotted grid, radar ring, System UI plaque, glitch flicker and a focus mode. |
| 377 | [xiao0o0/dsh-docs-manager](https://github.com/xiao0o0/dsh-docs-manager) | 0 | 2026-11-14 | 2026-11-14 | dsh插件：本地md文档管理 |
| 378 | [xiaohuangbo/dsh-e621-style](https://github.com/xiaohuangbo/dsh-e621-style) | 0 | 2026-11-13 | 2026-11-14 | 给 DeepSeek Harness 换上 e621 经典深蓝六边形主题：自定义背景、随机图库、定时轮换、彩色代码高亮，以及独立的设置页面。 |
| 379 | [xinming-chenniang/dsh-auto-update](https://github.com/xinming-chenniang/dsh-auto-update) | 0 | 2026-11-14 | 2026-11-14 | Silent startup-time updates for installed DSH plugins through the host plugin manager. 启动后静默更新已装插件。 |
| 380 | [XJfyrh/dsh-device-link](https://github.com/XJfyrh/dsh-device-link) | 0 | 2026-11-13 | 2026-11-14 | DeepSeek Harness 局域网设备连接：授权任务委派、按需资料读取与离线会话引用 |
| 381 | [xqcherry/dsh-fast-gpt](https://github.com/xqcherry/dsh-fast-gpt) | 0 | 2026-11-14 | 2026-11-14 | A DeepSeek Harness Web plugin that opens ChatGPT in a separate popup window from the composer toolbar.一个 DeepSeek Harness Web 插件：在输入框工具栏加入 OpenAI 图标，一键在独立窗口中打开 ChatGPT |
| 382 | [xushengqiong-ship/dsh-codex](https://github.com/xushengqiong-ship/dsh-codex) | 0 | 2026-11-14 | 2026-11-14 | Delegate heavy work from DeepSeek Harness to your local Codex CLI and bring back only the final answer. |
| 383 | [XZX888/dsh-knowledge-base](https://github.com/XZX888/dsh-knowledge-base) | 0 | 2026-11-14 | 2026-11-14 | Knowledge Base for DeepSeek Harness - a categorized file library with five kb_* tools so the agent can search, read, cite and revise your documents. |
| 384 | [Ya-MiC/ymzz-wuyong-zhi-yong](https://github.com/Ya-MiC/ymzz-wuyong-zhi-yong) | 0 | 2026-11-14 | 2026-11-14 | 晏銘湛箴_無用之用 — 本地 MCP 常駐子代理（高權限技能）。三十輻共一轂：Agent 本體是轂（空），skill 是輻（可換）。動態檢測 skills.sh 最被認可的 skill；本地製作過的跨對話 skill；動態監測。DSH 插件。零遙測。MIT。 |
| 385 | [YEHO-gg/dsh-china-weather](https://github.com/YEHO-gg/dsh-china-weather) | 0 | 2026-11-14 | 2026-11-14 | 中国境内天气查询 DSH 插件：按 IP 自动定位，实时天气、空气质量与 1–7 天预报，全部免费、无需密钥。 |
| 386 | [YEHO-gg/dsh-mail-notify](https://github.com/YEHO-gg/dsh-mail-notify) | 0 | 2026-11-14 | 2026-11-14 | DSH 插件：让 AI 主动给你发邮件（长任务完成、巡检发现问题时），零依赖手写 SMTP。 |
| 387 | [yerwan233/dsh-plan-workspace](https://github.com/yerwan233/dsh-plan-workspace) | 0 | 2026-11-14 | 2026-11-14 | DSH agent preset「计划交接模式」：只读规划、评审后写交接文档、按计划创建/登记工作区，再由本会话或新执行会话继续实施。 |
| 388 | [yerwan233/dsh-plugin-lens](https://github.com/yerwan233/dsh-plugin-lens) | 0 | 2026-11-14 | 2026-11-14 | 插件管理增强：官方「插件」页的「总览」标签（搜索/筛选/分类/分组/行内编辑/批量整理/卸载占位）与详情页「来源归属」区块。 |
| 389 | [yerwan233/dsh-session-atlas](https://github.com/yerwan233/dsh-session-atlas) | 0 | 2026-11-14 | 2026-11-14 | 侧栏「工作区图」：把真实工作区和会话画成 Blender 风格节点画布，支持分组、建/收编/改名/删除工作区与待处理·运行中·未读状态角标。 |
| 390 | [yerwan233/dsh-tishi](https://github.com/yerwan233/dsh-tishi) | 0 | 2026-11-14 | 2026-11-14 | 侧栏工作区状态角标：在 workspace 文件夹图标前聚合待处理 / 运行中 / 未读完成，另含隐藏工作区与面板栏收纳。 |
| 391 | [yingrui96/dsh-attention-board](https://github.com/yingrui96/dsh-attention-board) | 0 | 2026-11-14 | 2026-11-14 | An always-on attention pill for DeepSeek Harness: one glance shows how many sessions are waiting on you — approvals, questions, failures, and what you already declined. |
| 392 | [yitian951012/dsh-project-dev-flow](https://github.com/yitian951012/dsh-project-dev-flow) | 0 | 2026-11-14 | 2026-11-14 | 把一套经过真实项目校正的开发治理方法，按需加载到 agent 的上下文里。 |
| 393 | [Yixianqzm/dsh-go-memory-panel](https://github.com/Yixianqzm/dsh-go-memory-panel) | 0 | 2026-11-14 | 2026-11-14 | DSH Go ???????????:?????????/???????????????AI ???? |
| 394 | [YJX0118/dsh-second-pass](https://github.com/YJX0118/dsh-second-pass) | 0 | 2026-11-14 | 2026-11-14 | Second Pass / 第二遍：把 DeepSeek Harness 中一条已完成的回答，变成可逐条核对的交互网页，或带旁白与字幕的短片。附证据账本与持久作品库。 |
| 395 | [yqdnsjs-qq/dsh-server-manager](https://github.com/yqdnsjs-qq/dsh-server-manager) | 0 | 2026-11-13 | 2026-11-14 | 服务器监控管理 |
| 396 | [yuanxiaoye0516/dsh-plugins](https://github.com/yuanxiaoye0516/dsh-plugins) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness (DSH) plugins: 8 npm-published plugins - thinking expand, workspace groups, title edit, preview gallery, session open, context compact, screenshot insert, script launcher. |
| 397 | [yukre/dsh-session-api](https://github.com/yukre/dsh-session-api) | 0 | 2026-11-14 | 2026-11-14 | Loopback HTTP control surface for DeepSeek Harness sessions: read run state and drive prompt, model, permission, queue and cancel from outside the page. |
| 398 | [yukre/dsh-session-delete](https://github.com/yukre/dsh-session-delete) | 0 | 2026-11-14 | 2026-11-14 | Permanently delete a session and its conversation log from the DeepSeek Harness sidebar session menu; archive stays separate and reversible. |
| 399 | [yxzf1129/dsh-blackhistory-weekly](https://github.com/yxzf1129/dsh-blackhistory-weekly) | 0 | 2026-11-14 | 2026-11-14 | 记录agent的黑历史 |
| 400 | [zaofan-make/dsh-deepseek-tools](https://github.com/zaofan-make/dsh-deepseek-tools) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek 全家桶五件套（联网搜索 / 读链接 / OCR / ASR / TTS）—— 独立 DSH 插件，五个工具对所有会话可见，带独立设置页 |
| 401 | [zhang6hk/dsh-codex](https://github.com/zhang6hk/dsh-codex) | 0 | 2026-11-14 | 2026-11-14 | Codex CLI reviews and rescue tasks for DeepSeek Harness (DSH). |
| 402 | [zhangpelf/dsh-mcp-map-router](https://github.com/zhangpelf/dsh-mcp-map-router) | 0 | 2026-11-14 | 2026-11-14 | Map-First JIT Tool Router for DeepSeek Harness (DSH) and MCP Agent Runtimes. 资产地图即时动态路由 |
| 403 | [zhangqi423820-ai/dsh-spend-badge](https://github.com/zhangqi423820-ai/dsh-spend-badge) | 0 | 2026-11-14 | 2026-11-14 | Per-turn and per-session spend for DeepSeek Harness, appended inline to the usage row and the composer status bar. |
| 404 | [ZhangZhengruiNUS/dsh-plugin-model-eval](https://github.com/ZhangZhengruiNUS/dsh-plugin-model-eval) | 0 | 2026-10-31 | 2026-11-14 | 模型坐标 · 模型评测与选型 \| Evaluate and compare models in DeepSeek Harness |
| 405 | [zhanmy/dsh-bilibili-downloader](https://github.com/zhanmy/dsh-bilibili-downloader) | 0 | 2026-11-14 | 2026-11-14 | DeepSeek Harness plugin: download Bilibili videos as a single HD MP4 (DASH video+audio, ffmpeg -c copy). Cross-platform. |
| 406 | [zkw90274-dot/dsh-boot-eye](https://github.com/zkw90274-dot/dsh-boot-eye) | 0 | 2026-11-14 | 2026-11-14 | Silicon Dawn — a five-second ASCII boot animation for DeepSeek Harness: a DeepSeek-blue eye opens and dives into the starfield inside its pupil. |
| 407 | [zmq6931/dsh-chat-font-zoom-ad](https://github.com/zmq6931/dsh-chat-font-zoom-ad) | 0 | 2026-11-14 | 2026-11-14 | Chat font zoom for DeepSeek Harness: A-/A+ controls in the composer toolbar that change the conversation text size (10-22 px). |
| 408 | [ZTH-zero/dsh-settings-plus](https://github.com/ZTH-zero/dsh-settings-plus) | 0 | 2026-11-14 | 2026-11-14 | dsh-settings-plus for DeepSeek Harness: send shortcut, default workspace, permanent session deletion, Windows window memory, and a DeepSeek settings-card switch. |
| 409 | [zzm1234560621-prog/dsh-delegate](https://github.com/zzm1234560621-prog/dsh-delegate) | 0 | 2026-11-09 | 2026-11-14 | Let Claude Desktop, Claude Code and Codex delegate self-contained tasks to a local DeepSeek Harness (DSH) subagent over MCP: parallel fan-out with per-task write scopes, async jobs that outlive host timeouts, token stats and a local dashboard. Zero dependencies. |
| 410 | [zznobzz/dsh-model-fallback](https://github.com/zznobzz/dsh-model-fallback) | 0 | 2026-11-14 | 2026-11-14 | Model failover for DeepSeek Harness: repeat a failed primary model request on a fallback route, with selectable trigger mode, failure-code selection, and a switch-over threshold. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- afterrealism/dsh-conn-dot
- afterrealism/dsh-session-ctxmenu
- aoripus/dsh-optimize
- AspirinEny/dsh-settings-companion
- creatjy/dsh-context-control
- creatjy/dsh-plugin-update-entry
- denceee/dsh-compat-adapter
- denceee/dsh-everything-claude-code
- f20880479-lab/dsh-peak-gate
- huaizhuanghub/dsh-persona-dafeiyu
- HUAYUBINGAN/dsh-inject-context
- JimLiu/open-artifacts
- ldq0102261819/dsh-market-seed
- lyp88997/dsh-browser-service
- MeruSu/better-notice
- Minus77/dsh-prompt-polish
- mos-7/dsh-desktop
- mutoharohfiqhiabcd-source/dsh-lead-panel
- mutoharohfiqhiabcd-source/dsh-updater
- Nay-1/dsh-session-menu-delete
- nightBrise/Oh-My-DSH
- NingYuanLee/dsh-cothread-mcp
- OMEN111111/dsh-tripo-support
- peiyucn/dsh-sparrow
- pokereva/dsh-no-enter-sand
- QIANLING-0831/dsh-memory-plus
- RainSnowYY/dsh-second-review
- shamilinvestor/dsh-news-digest
- shamilinvestor/dsh-plugin-studio
- shamilinvestor/dsh-russian-locale
- shamilinvestor/dsh-share-card
- sumingwang233/dsh-question-bridge
- sumingwong/dsh-provider-quota-rings
- WJMACTD/dsh-deepseek-site
- zhileyo/dsh-overview
