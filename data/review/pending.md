# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-19**
- 快照日期 / Snapshot date: **2026-11-19 (UTC)**
- 待审核 / Pending: **696**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **43**
- Star 异常增长 / Star-growth alerts: **12** — 先看下方告警节 / see the alert section first
- 改名/身份待复核 / Renames pending review: **36**

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

对比上一份快照 **2026-11-18** / vs previous snapshot **2026-11-18**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 待审 / pending | 5106 | +39 | 703 | 38d | 待审高星 | 核准即 Top 8 |
| ⚠️ [ai-timon/timon](https://github.com/ai-timon/timon) | 待审 / pending | 616 | — | 79 | 12d | 待审高星 | 核准即榜 #52 |
| ⚠️ [chenkezhen480/dsh-world](https://github.com/chenkezhen480/dsh-world) | 待审 / pending | 350 | — | 14 | 25d | 待审高星 | 核准即榜 #85 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 80960 | +1202 | 2280 | 55d | 日增百星 | 日增 +1202★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 12818 | +1043 | 1262 | 191d | 日增百星 | 日增 +1043★；已不进榜单 |
| ⚠️ [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) | 已核准 / approved | 5073 | +285 | 513 | 1094d | 日增百星 | 日增 +285★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 20040 | +227 | 683 | 97d | 日增百星 | 日增 +227★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1864 | +137 | 9 | 38d | 日增百星 | 日增 +137★；★/fork 207.1；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 8468 | +128 | 846 | 42d | 日增百星 | 日增 +128★ |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 7570 | +125 | 121 | 94d | 日增百星 | 日增 +125★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12982 | +113 | 494 | 96d | 日增百星 | 日增 +113★；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 75616 | +104 | 2725 | 421d | 日增百星 | 日增 +104★；已不进榜单 |

## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `13711018663/DeepSeek-Harness-BT-` → `QIU-KKKK/DeepSeek-Harness-BT` — owner changed — transfer needs review
- `Carlos5986515/dsh-status-notifier` → `xujiakai2026/dsh-status-notifier` — owner changed — transfer needs review
- `SajoLuo/dsh-trellis` → `HomoLand/dsh-trellis` — owner changed — transfer needs review
- `Zhang-Eli/dsh-github-trending-masonry` → `wzvx/dsh-github-trending-masonry` — owner changed — transfer needs review
- `Zhang-Eli/dsh-matrix-todo` → `wzvx/dsh-matrix-todo` — owner changed — transfer needs review
- `Zhang-Eli/dsh-one-pack` → `wzvx/dsh-one-pack` — owner changed — transfer needs review
- `glk1220/dsh-session-git` → `golemkit/dsh-session-git` — owner changed — transfer needs review
- `weichi-ai/dshd` → `chuchenai/dshd` — owner changed — transfer needs review
- `AdamPlatin123/awesome-dsh-plugins` → `AdamPlatin123/dsh-plugin-radar` — target slug already exists with different data — needs review
- `DaYanHCD/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `DaYanQLQ/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `GCWing/BitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `GCWing/OpenBitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `HarcoChen/deepseek-harness-vscode` → `HarcoChen/dsh-vsc-integration` — target slug already exists with different data — needs review
- `Lixxx1/dsh-vscode` → `omdsh-dev/dsh-vscode` — owner changed — transfer needs review
- `TNJ2026/orbit-runtime` → `TNJ2026/promptaflow` — target slug already exists with different data — needs review
- `Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report` → `Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.6` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.7` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `acryldev/dsh-cordis` → `cordisplugins/dsh-cordis` — owner changed — transfer needs review
- `acryldev/pi-cordis` → `cordisplugins/pi-cordis` — owner changed — transfer needs review
- `dongliuwuzhong-arch/dsh-purge-021rc2` → `dongliuwuzhong-arch/DSH-purge` — target slug already exists with different data — needs review
- `drewnekota/cetus` → `william-jin-cmu/cetus` — owner changed — transfer needs review
- `fgm-builds/corti` → `pgmi-builds/corti` — owner changed — transfer needs review
- `ice5kysl/dsh-plugin-insights` → `ice5kysl/dsh-insights` — target slug already exists with different data — needs review
- `jarvis-intelligence/jarvis` → `phuongddx/jarvis` — owner changed — transfer needs review
- `liangwythu/deepseek-harness-vscode` → `YichuAI/deepseek-harness-vscode` — owner changed — transfer needs review
- `scientificmaniac/dsh-account-usage` → `scientificmaniac/dsh-weekstrip` — target slug already exists with different data — needs review
- `shell-error/deepseek-harness-remote-access` → `safety10086/deepseek-harness-remote-access-shell-error-old` — owner changed — transfer needs review
- `show-thesky/every-thing-is-possible` → `show-thesky/bing` — target slug already exists with different data — needs review
- `weshopai/weshop-skill-pakage` → `weshopai/weshop-skill-package` — target slug already exists with different data — needs review
- `wgd753/awesome-dsh-plugin` → `Wenston-dev/awesome-dsh-plugin` — owner changed — transfer needs review
- `windy-0-0/opencode-free-lane-tls-gate` → `Mizar-Silexeth/opencode-free-lane-tls-gate` — owner changed — transfer needs review
- `xiaoxianxian/multi-proxy` → `sif-king/costgate` — owner changed — transfer needs review
- `zendev-lab/cogfold` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `zendev-lab/spark` → `zendev-lab/ulota` — target slug already exists with different data — needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) ⚠️ | 5106 | 2026-10-11 | 2026-11-18 | Manina AI: let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak. |
| 2 | [ai-timon/timon](https://github.com/ai-timon/timon) ⚠️ | 616 | 2026-11-06 | 2026-11-19 | Timon is an Agentic Workstation who let you orchestrates all your AI agents in the same place |
| 3 | [chenkezhen480/dsh-world](https://github.com/chenkezhen480/dsh-world) ⚠️ | 350 | 2026-10-24 | 2026-11-19 | 给鲸鲸一个完整的世界(包含记忆，配套的压缩策略，人设卡，微信QQ渠道，电脑操作，多世界实例运转等多项能力) |
| 4 | [liangdabiao/dsh-realman-studio](https://github.com/liangdabiao/dsh-realman-studio) | 32 | 2026-11-17 | 2026-11-18 | 真人剧工坊：真人实拍质感 Seedance 短剧 dsh 插件（skill 快照+即梦官方 CLI 出图出片+跨集接力+机械事故安检）「真人实拍质感 Seedance 分镜」skill 搬进 DeepSeek Harness，并接上即梦官方 CLI（dreamina-canvas）： 一句话故事 → 剧本 / 资产图 / 每集 15 秒真人感分镜 → 在即梦画布上出图出片 → 拼成一部片，全程不用离开对话。 |
| 5 | [YinkaiYu/chat-in-dsh](https://github.com/YinkaiYu/chat-in-dsh) | 30 | 2026-11-18 | 2026-11-18 | 在 DeepSeek Harness 里使用 DeepSeek 网页版聊天 \| The authentic DeepSeek web chat inside DeepSeek Harness (DSH). |
| 6 | [HiSeax/dsh-windows-superagent](https://github.com/HiSeax/dsh-windows-superagent) | 28 | 2026-11-18 | 2026-11-19 | Windows-friendly multi-agent orchestration for DSH: WeChat channel, ticket board, policy-driven accept, eval toolchain |
| 7 | [kadaliao/dsh-bots](https://github.com/kadaliao/dsh-bots) | 18 | 2026-11-18 | 2026-11-18 | Bots for DeepSeek Harness: Grok-style bot teams, each bot with its own persona, model, skills and memory, and a dispatcher that hands out the work. |
| 8 | [jyuaner/dsh-gateway-shield](https://github.com/jyuaner/dsh-gateway-shield) | 7 | 2026-11-08 | 2026-11-19 | 给 DSH 出网前加一道护栏：按 provider 分档的提示词指纹同义改写（system/messages/tools/toolHistory 四个面）+ 软拒绝带加固重试。provider 无关，装一次对全模型生效。 |
| 9 | [klarkxy/ds-dot](https://github.com/klarkxy/ds-dot) | 7 | 2026-11-14 | 2026-11-18 | Dorothy (dot) — an always-on coordinator plugin for DeepSeek Harness that manages workspaces, steers sessions, handles approvals and reminders, and reports back. |
| 10 | [liaty8/dsh-muteki-preset](https://github.com/liaty8/dsh-muteki-preset) | 6 | 2026-11-15 | 2026-11-18 | Muteki 蜂群 · DeepSeek Harness Agent 预设：黑板事实图 / 证据门 / 按题隔离 / 程序化派单 / Claude Code 异构 |
| 11 | [Panmax/dsh-next-step-suggestion](https://github.com/Panmax/dsh-next-step-suggestion) | 6 | 2026-11-18 | 2026-11-18 | Codex-style ghost next-step prompt suggestion plugin for DeepSeek Harness Web |
| 12 | [ziui1008/dsh-chat-pro](https://github.com/ziui1008/dsh-chat-pro) | 6 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：用官方网页版界面聊天，可切换 DSH 里已配置的供应商、模型与思考档位。 |
| 13 | [chenkezhen480/evolution-computer-use](https://github.com/chenkezhen480/evolution-computer-use) | 5 | 2026-11-18 | 2026-11-19 | Self-evolving computer use for any agent: its own browser, the user's Windows desktop, and learned procedures it replays and repairs. MCP server + JS library, extracted from dsh-world. |
| 14 | [atlasmarkz/LoopPrism](https://github.com/atlasmarkz/LoopPrism) | 4 | 2026-06-15 | 2026-11-18 | See what your coding agents actually do and spend: sessions, context and cost for Claude Code, Codex, OpenCode, DeepSeek Harness, WorkBuddy. Local-first. |
| 15 | [joeseesun/qiaomu-subcast-dsh](https://github.com/joeseesun/qiaomu-subcast-dsh) | 4 | 2026-11-18 | 2026-11-18 | 声渡 · 在 DeepSeek Harness 里听播客、读双语字幕、问单集。 · Podcasts, bilingual transcripts, and episode Q&amp;A for DeepSeek Harness. |
| 16 | [maptec-api/agent-plugins](https://github.com/maptec-api/agent-plugins) | 4 | 2026-10-28 | 2026-11-19 | Maptec Maps plugin for AI Agent. Quickly add map rendering, place search, route planning, geocoding, and more. |
| 17 | [tk553521/dsh-tavern](https://github.com/tk553521/dsh-tavern) | 4 | 2026-08-16 | 2026-11-18 | DSH 酒馆：SillyTavern 风格角色扮演插件（人物卡 / 世界书 / 预设 / 多 agent） |
| 18 | [cheso-ai-platform/dsh-cheso-design](https://github.com/cheso-ai-platform/dsh-cheso-design) | 3 | 2026-11-17 | 2026-11-18 | AI Creative Companion for Stunning Presentations, Posters &amp; Videos |
| 19 | [erinwangstudio-art/dsh-trafficlight](https://github.com/erinwangstudio-art/dsh-trafficlight) | 3 | 2026-11-18 | 2026-11-19 | dsh-任务状态提示灯 |
| 20 | [GhabiX/spine-plugin](https://github.com/GhabiX/spine-plugin) | 3 | 2026-10-05 | 2026-11-19 | Spine context-management plugins for Pi (@spinejit/pi-spinejit) and DeepSeek Harness (@spinejit/dsh-spinejit), backed by the portable Spine SDK. |
| 21 | [HomoLand/dsh-trellis](https://github.com/HomoLand/dsh-trellis) | 3 | 2026-08-13 | 2026-11-19 | Trellis workflow integration for DeepSeek Harness |
| 22 | [misaki-rx/dsh-inplace-annotate](https://github.com/misaki-rx/dsh-inplace-annotate) | 3 | 2026-11-08 | 2026-11-19 | A DSH (DeepSeek Harness) plugin for annotating agent replies: select text to mark Agree/Disagree/Question/Comment, then send all review notes with your next prompt. |
| 23 | [XiaoFeng7418/dsh-plugin-chat-mode](https://github.com/XiaoFeng7418/dsh-plugin-chat-mode) | 3 | 2026-11-18 | 2026-11-18 | Minimal, tool-free chat preset for DeepSeek Harness (DSH): no workflow prompt, no environment snapshot, no tool schemas. / DSH 极简省 Token 日常对话模式插件 |
| 24 | [yinany79-alt/dsh-island-bridge](https://github.com/yinany79-alt/dsh-island-bridge) | 3 | 2026-11-18 | 2026-11-18 | macOS 原生灵动岛，让 DeepSeek Harness 会话、交付通知和快捷审批触手可及。 |
| 25 | [0131kikimy/dsh-collect](https://github.com/0131kikimy/dsh-collect) | 2 | 2026-11-06 | 2026-11-19 | 采文 · CollectKit —— DeepSeek Harness 侧边栏采集插件：优先用非桌面操控方式抓取网页正文与图片，并按需生成 docx/xlsx/pptx/pdf 等文件；附面向小白的安装与使用文档。 |
| 26 | [CN-PA/dsh-jianying-plugin](https://github.com/CN-PA/dsh-jianying-plugin) | 2 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin for safe Jianying Pro editing: subtitles, audio, transitions, export, one-shot diagnostics, readback receipts. Windows + MIT. |
| 27 | [czhmisaka/dsh-fleet](https://github.com/czhmisaka/dsh-fleet) | 2 | 2026-11-18 | 2026-11-18 | Multi-host DeepSeek Harness panel: sessions, dashboards, usage &amp; context pressure, budgets, one-click launch — all from one sidebar page. |
| 28 | [edsml-jz2321/dsh-evokit](https://github.com/edsml-jz2321/dsh-evokit) | 2 | 2026-11-13 | 2026-11-18 | Measured self-improvement for AI systems: paired experiments, noise-aware gates, holdout confirmation. A DeepSeek Harness plugin. |
| 29 | [greendoyle/dsh-mcp-live-panel](https://github.com/greendoyle/dsh-mcp-live-panel) | 2 | 2026-11-16 | 2026-11-18 | MCP servers for DeepSeek Harness, managed from the browser. Add, edit, enable, restart, remove — applied live, no config edits, no restart. |
| 30 | [HaoyanZhang123/dsh-plugin-control-your-video](https://github.com/HaoyanZhang123/dsh-plugin-control-your-video) | 2 | 2026-10-25 | 2026-11-19 | DeepSeek Harness 插件：让 AI 真的会做片子。一个 Preset + 13 个方法 Skill + 取证工具；作品放你自己的文件夹，经验沉淀成你自己的资产库。A DSH plugin that lets the assistant actually make videos. / MIT |
| 31 | [liangdabiao/dsh-seekword](https://github.com/liangdabiao/dsh-seekword) | 2 | 2026-11-19 | 2026-11-19 | 捕获英语生词 · AI 驱动的生词预习与闪卡学习 dsh 插件：多来源捕获（粘贴/YouTube 字幕/本地字幕/网页）→ agent 筛选制卡 → 单词本面板。移植自 SeekWord。deepseek harness插件，先学再看（Pre-exposure）：从任意语言内容里先捕获高价值生词、生成学习卡片，再带着上下文去阅读/观看——学得更快、记得更牢。 |
| 32 | [naliehu/outbreak-report-writing](https://github.com/naliehu/outbreak-report-writing) | 2 | 2026-11-18 | 2026-11-18 | 传染病现场流行病学调查报告（流调报告）撰写技能 + DeepSeek Harness 插件：有限信息可出稿，缺项分级，自动配图，直出 Word/PDF/Markdown |
| 33 | [RainbowLion0320/dsh-model-insights](https://github.com/RainbowLion0320/dsh-model-insights) | 2 | 2026-11-18 | 2026-11-18 | Artificial Analysis intelligence index and Pareto value grades, per reasoning effort, inside the DeepSeek Harness model picker |
| 34 | [simveit/dsh-matriarc](https://github.com/simveit/dsh-matriarc) | 2 | 2026-11-17 | 2026-11-19 | Matriarc: a second model plans and reviews the work of a DeepSeek Harness (dsh) session, through a DSH subagent plugin that runs another coding agent. |
| 35 | [StarvastPact/inventor-mcp](https://github.com/StarvastPact/inventor-mcp) | 2 | 2026-11-19 | 2026-11-19 | Autodesk Inventor 2025 as an MCP server for DeepSeek Harness |
| 36 | [yyxcnasd/minimax-image](https://github.com/yyxcnasd/minimax-image) | 2 | 2026-11-18 | 2026-11-18 | MiniMax H3 image generation and editing for DeepSeek Harness: composer permission chip, text-to-image and reference-image editing tools, settings page. |
| 37 | [1bigmouse/dsh-btw-session](https://github.com/1bigmouse/dsh-btw-session) | 1 | 2026-11-18 | 2026-11-18 | Ephemeral side questions in the DeepSeek Harness right sidebar: answered from the current conversation, counted separately, and discarded on close. |
| 38 | [admiremaozhuxi/dsh-bili-learn](https://github.com/admiremaozhuxi/dsh-bili-learn) | 1 | 2026-11-18 | 2026-11-18 | 让 AI 真正读懂 B 站视频：字幕、评论、画面、口播一次拿全。DeepSeek Harness 插件，装完即用，不需要 Python。 |
| 39 | [aewu777/screenshot-master](https://github.com/aewu777/screenshot-master) | 1 | 2026-10-27 | 2026-11-19 | Cross-platform screenshot tools for AI agent harnesses: capture the screen, a display, or a window to PNG and get the absolute path. Windows 10/11 and macOS 14+. |
| 40 | [AmazarashiEnduerRain/dsh-unread](https://github.com/AmazarashiEnduerRain/dsh-unread) | 1 | 2026-11-18 | 2026-11-18 | A DSH plugin, enabling unread signal of Codex style. |
| 41 | [angelomadara/dsh-plugin-jira](https://github.com/angelomadara/dsh-plugin-jira) | 1 | 2026-11-19 | 2026-11-19 | Jira ticket intake for DeepSeek Harness: Settings page for the site and API token, /jira-do ticket-to-branch hand-off, /jira-comment, and the jira_ticket and jira_comment tools. |
| 42 | [awa21212/decay-rag](https://github.com/awa21212/decay-rag) | 1 | 2026-11-13 | 2026-11-19 | Time-aware retrieval in ~235 zero-dependency lines: per-chunk timestamps + decay. Four shapes - single file, four-corpus runtime, six languages (C/C++/Go/Java/JS/Python), and a DeepSeek Harness plugin. |
| 43 | [ax2/dsh-zicode-tools](https://github.com/ax2/dsh-zicode-tools) | 1 | 2026-11-19 | 2026-11-19 | 本地优先的 DeepSeek Harness 开发者工具箱：ASCII、编码转换、密码生成、JSON、颜色、时间戳、UUID、哈希｜A local-only developer toolbox for DSH |
| 44 | [aXYer-SI/dsh-architecture-trace](https://github.com/aXYer-SI/dsh-architecture-trace) | 1 | 2026-11-18 | 2026-11-18 | DSH plugin: record every task run as readable Markdown - system prompt, model calls, tool calls, TTFT. 把 DSH 一轮任务的全过程记录成可读的 Markdown。 |
| 45 | [aXYer-SI/dsh-source-catalog](https://github.com/aXYer-SI/dsh-source-catalog) | 1 | 2026-11-18 | 2026-11-18 | DSH plugin: turn past sessions into two bilingual tables of the tools and data sources you actually used. 从历史会话提炼工具与数据源清单：分类、优缺点、可直接打开的网址。 |
| 46 | [AyaoJies/dsh-mobile-android-test](https://github.com/AyaoJies/dsh-mobile-android-test) | 1 | 2026-11-19 | 2026-11-19 | Android app testing inside DeepSeek Harness: run an APK in a managed emulator, mirror the screen, drive it with mouse and keyboard, and inspect decrypted HTTPS requests. |
| 47 | [BigFatGunn/dsh-approval-chime](https://github.com/BigFatGunn/dsh-approval-chime) | 1 | 2026-11-18 | 2026-11-18 | Web UI chime for DeepSeek Harness tool-permission approval requests, with burst coalescing and full cleanup. |
| 48 | [BiXianGoGo/dsh-ESPemotion-pool](https://github.com/BiXianGoGo/dsh-ESPemotion-pool) | 1 | 2026-11-16 | 2026-11-18 | 鲸汐ESP情绪插件：一款标量情绪形状的尺子，让鱼对自己的情绪的定义还给鱼自己，让真正的情绪由内而发，自我感受并记忆的插件 |
| 49 | [BunnySakura/dsh-model-capability-detector](https://github.com/BunnySakura/dsh-model-capability-detector) | 1 | 2026-10-28 | 2026-11-18 | 在 DSH 中添加或保存第三方 API 渠道时，自动补全模型的上下文长度、最大输出、识图能力和推理等级等元数据。 |
| 50 | [caprimoon/dsh-live-wallpaper](https://github.com/caprimoon/dsh-live-wallpaper) | 1 | 2026-11-18 | 2026-11-19 | 为 DeepSeek Harness 打造的动态壁纸与五区毛玻璃：五源在线图库、本地媒体导入、离线 Canvas 场景，以及左侧栏/内容区/输入框/用量栏/指令菜单各自独立的底色、遮罩与虚化。 |
| 51 | [changhao213141/dsh-folder-cards](https://github.com/changhao213141/dsh-folder-cards) | 1 | 2026-11-18 | 2026-11-19 | Folder cards sidebar for DeepSeek Harness - 3:4 folder cards, droplet transitions, search, native session menus. |
| 52 | [chddydwd/dsh-eye](https://github.com/chddydwd/dsh-eye) | 1 | 2026-11-18 | 2026-11-18 | dsh-eye（鲸鲸的眼睛 · screen ring）—— 给 AI 装一双「看得见刚才」的眼睛：内存环采屏 + 回看 + 读字 + 找控件 + 隐私打码（DSH 插件，Windows，MIT） |
| 53 | [chelly4/dsh-plugin-cyrene-live2d](https://github.com/chelly4/dsh-plugin-cyrene-live2d) | 1 | 2026-11-17 | 2026-11-18 | A pink-white Cyrene (HSR) Live2D desktop pet for DeepSeek Harness: full-page theme, persona and worldbook injection, relationship memory, plus reminder and notes subplugins. Code MIT; character assets belong to miHoYo. |
| 54 | [chen1880216/dsh-side-assistant](https://github.com/chen1880216/dsh-side-assistant) | 1 | 2026-11-18 | 2026-11-18 | DSH 侧边助理：右侧栏里的中文助理，把需求说清楚后转达给主会话，并跟进它的进展 |
| 55 | [ChengruiLabs/dsh-standup-clockoff-reminder](https://github.com/ChengruiLabs/dsh-standup-clockoff-reminder) | 1 | 2026-11-19 | 2026-11-19 | 工位小猫 / Desk Buddy — clock-off countdown &amp; stand-up reminder desk cat for the DeepSeek Harness Web UI |
| 56 | [chenhw-hjm/dsh-aha-tail](https://github.com/chenhw-hjm/dsh-aha-tail) | 1 | 2026-11-18 | 2026-11-18 | 每轮回复后贴一张表情包的 DSH 插件 \| A DeepSeek Harness plugin that drops a sticker after every finished reply |
| 57 | [chrischjh/dsh-doc-defrag](https://github.com/chrischjh/dsh-doc-defrag) | 1 | 2026-11-18 | 2026-11-18 | 一句话把碎片化的 Markdown 文档收束成少数权威文档，其余归档——永不删除、可一键回滚。One sentence turns fragmented Markdown into a few authoritative documents; the rest is archived, never deleted. |
| 58 | [chuchenai/dshd](https://github.com/chuchenai/dshd) | 1 | 2026-08-16 | 2026-11-18 | dshd is deepseek harness desktop |
| 59 | [cmfok/dsh-feishucard](https://github.com/cmfok/dsh-feishucard) | 1 | 2026-08-14 | 2026-11-18 | DSH &lt;-&gt; Feishu (Lark) bridge, self-developed (not a fork): streaming reply card / many bots in ONE instance (each with own workspace + AGENTS.md) / mention-only group replies / approval cards / /switch workspace &amp; session picker / identity injection / rate-limit + circuit-breaker fallback. 自研 DSH 飞书桥：流式回复卡｜单实例多 bot｜群里 @ 才回复｜审批卡｜工作区切换｜身份注入 |
| 60 | [crystchrisxx-design/dsh-deepseek-sidebar](https://github.com/crystchrisxx-design/dsh-deepseek-sidebar) | 1 | 2026-11-19 | 2026-11-19 | 零配置的 DeepSeek Harness 网页侧边对话插件：右侧唤出 DeepSeek，流式回复、Markdown、主题自适应。 \| A zero-config DeepSeek chat sidebar for the DSH web GUI. |
| 61 | [cwx2/dsh-deepseek-web-panel](https://github.com/cwx2/dsh-deepseek-web-panel) | 1 | 2026-11-18 | 2026-11-18 | 在 DeepSeek Harness 左侧栏嵌一个 chat.deepseek.com 网页版：登录一次自动记住，切回来还在原来的对话。 |
| 62 | [DaozeTang/dsh-session-autospace](https://github.com/DaozeTang/dsh-session-autospace) | 1 | 2026-11-18 | 2026-11-18 | Session Autospace - Start a conversation without picking a workspace. |
| 63 | [dehong831-arch/dsh-context-ledger](https://github.com/dehong831-arch/dsh-context-ledger) | 1 | 2026-11-18 | 2026-11-18 | DSH 原生上下文管理插件，结合历史压缩、本地 SQLite 证据归档与按需检索，让长会话在压缩和重启后仍能追溯原始工具输出、报错与历史记录。 |
| 64 | [Doubtun/dsh-tray-enhance](https://github.com/Doubtun/dsh-tray-enhance) | 1 | 2026-11-18 | 2026-11-18 | Richer Windows tray menu for DeepSeek Harness (DSH): per-item icons, restart, update check, and a light/dark theme submenu. |
| 65 | [EasXu/dsh-power-saver](https://github.com/EasXu/dsh-power-saver) | 1 | 2026-11-19 | 2026-11-19 | Shut down, hibernate, or lock this PC when every DSH project finishes · 所有 DSH 项目结束后自动关机、休眠或锁定 |
| 66 | [fedmez8-cpu/dsh-node-studio](https://github.com/fedmez8-cpu/dsh-node-studio) | 1 | 2026-11-19 | 2026-11-19 | Visual node-based workflow editor plugin for DeepSeek Harness |
| 67 | [Freakz2z/dsh-remote-workbench](https://github.com/Freakz2z/dsh-remote-workbench) | 1 | 2026-11-18 | 2026-11-18 | DSH 原生右侧栏里的 AI 远程工作台：SSH/SFTP、资源监控与 PDF 编辑 |
| 68 | [Frost-wu/dsh-token-saver-100](https://github.com/Frost-wu/dsh-token-saver-100) | 1 | 2026-11-16 | 2026-11-19 | 还在担心token不够用吗？，下载此插件，节省你所有的token消耗 |
| 69 | [Geekhyt/dsh-markdown-studio](https://github.com/Geekhyt/dsh-markdown-studio) | 1 | 2026-11-19 | 2026-11-19 | 专注 Markdown 写作，公众号精美版式一键直出 —— DeepSeek Harness 本地优先写作与微信公众号排版插件（8 套主题 · 自定义 CSS · 自定义写作 Skill） |
| 70 | [goodjin/dsh-codex](https://github.com/goodjin/dsh-codex) | 1 | 2026-11-13 | 2026-11-18 | DSH plugin: Codex model row — calls the Codex /responses endpoint directly and reuses the local Codex CLI OAuth credential. |
| 71 | [Gray2006/dsh-model-pool](https://github.com/Gray2006/dsh-model-pool) | 1 | 2026-11-19 | 2026-11-19 | Quota-aware model failover for DeepSeek Harness (DSH): bench a route on quota/auth failure and retry the same step on the next. Scans every configured model; pick the pool from the sidebar. |
| 72 | [GxyFly/dsh-message-rewind](https://github.com/GxyFly/dsh-message-rewind) | 1 | 2026-11-18 | 2026-11-18 | Codex-style message editing and conversation rewind for DeepSeek Harness |
| 73 | [handy-git/dsh-workspace-active-top](https://github.com/handy-git/dsh-workspace-active-top) | 1 | 2026-11-18 | 2026-11-18 | 发消息时，当前工作区自动排到侧边栏分区的最前面。 |
| 74 | [Himalaya-Horizon/dsh-streaming-diff](https://github.com/Himalaya-Horizon/dsh-streaming-diff) | 1 | 2026-11-17 | 2026-11-18 | Replays the diff of the edit that just landed, and shows every file the last round changed. |
| 75 | [HTY-Vague/dsh-cjk-serif](https://github.com/HTY-Vague/dsh-cjk-serif) | 1 | 2026-11-19 | 2026-11-19 | DSH bundle: Chinese serif switch in Settings → General, with coarse per-region control. |
| 76 | [huajikano/dsh-qibi](https://github.com/huajikano/dsh-qibi) | 1 | 2026-11-19 | 2026-11-19 | QiBi writing desk for DeepSeek Harness with a native panel, manuscript tools, and revision backups. |
| 77 | [hyc3z/dsh-remaining-balance](https://github.com/hyc3z/dsh-remaining-balance) | 1 | 2026-11-19 | 2026-11-19 | Show the signed-in DeepSeek account balance beside the composer statistics in DeepSeek Harness. |
| 78 | [instak1ll/dsh-edit-in-place](https://github.com/instak1ll/dsh-edit-in-place) | 1 | 2026-11-19 | 2026-11-19 | Edit sent messages in DeepSeek Harness: press the pencil, rewrite in place, and the corrected text continues in a new branch while the original conversation stays untouched. |
| 79 | [instak1ll/dsh-read-aloud](https://github.com/instak1ll/dsh-read-aloud) | 1 | 2026-11-19 | 2026-11-19 | Read assistant answers aloud in DeepSeek Harness. 318 neural voices, a male voice picked automatically for your language, and a voice and speed your agent can change from the chat. |
| 80 | [interested3041/dsh-bailian-auto-router](https://github.com/interested3041/dsh-bailian-auto-router) | 1 | 2026-11-15 | 2026-11-18 | 百炼智能路由 DSH 插件：请求前由决策模型分析输入，自动路由到最合适的阿里云百炼模型，支持额度冷却与静默回退。 |
| 81 | [IVseIce/dsh-mini-notes](https://github.com/IVseIce/dsh-mini-notes) | 1 | 2026-11-18 | 2026-11-18 | 极简便签 — DSH Web 的记事本插件：多页便签、拖拽排序、整体缩放、回收站。纯客户端，无依赖。 |
| 82 | [Jeremyly/dsh-plugin-offline-sync](https://github.com/Jeremyly/dsh-plugin-offline-sync) | 1 | 2026-11-14 | 2026-11-19 | 将本地已有的dsh插件打包，拷贝到其他电脑通过脚本直接安装或更新 |
| 83 | [jiahuayu/sticky-wall](https://github.com/jiahuayu/sticky-wall) | 1 | 2026-11-18 | 2026-11-18 | dsh便签 |
| 84 | [jianwuzhao/streamer](https://github.com/jianwuzhao/streamer) | 1 | 2026-11-13 | 2026-11-19 | 本地优先的 AI 直播控制台 / Local-first AI livestream console for DeepSeek Harness. |
| 85 | [JieZhiF/dsh-dumate-provider](https://github.com/JieZhiF/dsh-dumate-provider) | 1 | 2026-11-18 | 2026-11-18 | 百度搭子 DuMate 个人会员的 DeepSeek Harness 原生插件：22 个模型进选择器，Cookie 登录、多账号故障切换、余额查询与每日自动签到。Native Baidu DuMate provider plugin for DeepSeek Harness. |
| 86 | [jixishi/dsh-tools-manage](https://github.com/jixishi/dsh-tools-manage) | 1 | 2026-11-15 | 2026-11-19 | DeepSeek Harness 工具档位插件：按来源插件分组的工具档位、PTC 提示同步、AI 分配。Source-aware tool profiles for DeepSeek Harness. |
| 87 | [JNGKZbird/dsh-chat-with-deepseek](https://github.com/JNGKZbird/dsh-chat-with-deepseek) | 1 | 2026-11-19 | 2026-11-19 | 「和 DeepSeek 一起聊天吧！」（DSH Chat with DeepSeek）是 DSH 的 DeepSeek 网页聊天复刻插件：自绘复刻官网界面，只保留联网搜索工具，并且加入对话树、导航轨、全树导入导出与官方 TTS 功能；会话数据均保存在本地。目前针对移动端的鸿蒙 NEXT/安卓开发中，并未发布。MIT 许可证（见 LICENSE）。 |
| 88 | [junyisunme/dsh-plugin-my-earth](https://github.com/junyisunme/dsh-plugin-my-earth) | 1 | 2026-11-18 | 2026-11-18 | 把地点数据变成可分享的 My Earth 交互地图的 DeepSeek Harness 插件（公开测试版）。Public-beta DSH bundle with a create_map tool. |
| 89 | [jwitmann/opencode-dev-framework](https://github.com/jwitmann/opencode-dev-framework) | 1 | 2026-08-14 | 2026-11-18 | Enforcement gates for AI coding agents on OpenCode and DeepSeek Harness — guardrails, per-edit lint, and a completion gate that requires proof of done. |
| 90 | [jyuaner/dsh-agent-desktop](https://github.com/jyuaner/dsh-agent-desktop) | 1 | 2026-11-19 | 2026-11-19 | 给 dsh 装上一双操作桌面的手：agent-desktop MCP 一键挂载 + 跨平台引擎自动发现 |
| 91 | [kaveys/agent-user-profile](https://github.com/kaveys/agent-user-profile) | 1 | 2026-11-17 | 2026-11-18 | 给 AI 装一份「关于你」的说明书：把偏好、习惯、底线记成一份清单，每次对话前自动读一遍，不用重复交代。 |
| 92 | [khglobal/dsh-universe](https://github.com/khglobal/dsh-universe) | 1 | 2026-11-19 | 2026-11-19 | AI agent data visualization for DeepSeek Harness: your agents' sessions, errors, tokens and schedules as a live pixel city. Metadata only; source-available. |
| 93 | [kkqwq7/dsh-skill-categories](https://github.com/kkqwq7/dsh-skill-categories) | 1 | 2026-11-18 | 2026-11-18 | DSH 技能分类中心：技能按分类折叠浏览与拖拽归类，和 skill-hub 共享分类数据。 |
| 94 | [lanechenhku/dsh-post-draft-auto](https://github.com/lanechenhku/dsh-post-draft-auto) | 1 | 2026-11-17 | 2026-11-18 | 本地出稿工作台 + DSH 插件：模型用 post_facts 抓带 source_url 的真实事实（bioRxiv DOI / 2HAI 版本 / npm 包 / URL），自己写中英双语推文与卡片图，你手动复制到 X。不发推、不调 X API、零依赖。 ｜ A local draft desk for DeepSeek Harness: sourced facts in, EN + ZH posts and a card out — you paste it into X yourself. No X API, no credentials, zero dependencies. |
| 95 | [Lh1314-China/dsh-cortex-agency](https://github.com/Lh1314-China/dsh-cortex-agency) | 1 | 2026-11-19 | 2026-11-19 | Memory companion for dsh-cortex: drive pool, idle rumination and metacognition on the host scheduler, off by default, own scope. 记忆内核的伴生层。 |
| 96 | [Lh1314-China/dsh-whale-gaze](https://github.com/Lh1314-China/dsh-whale-gaze) | 1 | 2026-11-19 | 2026-11-19 | Always-on, cheap eyes for DeepSeek Harness: watch a camera or a video window locally and let the avatar's eyes follow. No screenshots, no uploads. |
| 97 | [Lh1314-China/dsh-whale-live](https://github.com/Lh1314-China/dsh-whale-live) | 1 | 2026-11-11 | 2026-11-19 | A left-sidebar live console for DeepSeek Harness: persona script, stream log, Bilibili danmaku, edge-tts speech, memory inbox. Windows. |
| 98 | [Lh1314-China/dsh-whale-sight](https://github.com/Lh1314-China/dsh-whale-sight) | 1 | 2026-11-19 | 2026-11-19 | Video vision for DeepSeek Harness: sample a clip with ffmpeg, return timestamped frames or one labelled contact sheet as native image attachments. |
| 99 | [Lhy220402/traceless](https://github.com/Lhy220402/traceless) | 1 | 2026-11-19 | 2026-11-19 | Forget how it thought. Keep what it said. |
| 100 | [LiHuan02/dsh-access](https://github.com/LiHuan02/dsh-access) | 1 | 2026-11-18 | 2026-11-18 | Access: encrypted credentials, connectors, and CDP sidebar browser automation for DeepSeek Harness |
| 101 | [LiiLip/everything-search](https://github.com/LiiLip/everything-search) | 1 | 2026-11-18 | 2026-11-18 | Everything (voidtools) file search inside DeepSeek Harness: instant global search from the sidebar, session header and a full-panel overlay. Works without Everything installed. |
| 102 | [linsan2999-hash/dsh-orchestrator-mode](https://github.com/linsan2999-hash/dsh-orchestrator-mode) | 1 | 2026-11-18 | 2026-11-18 | Orchestrator mode for DSH: the session-selected model plans read-only, a configured executor model implements, and two hand-off tools move control between phases inside one conversation. |
| 103 | [Little-Grebe-Inc/dsh-drillr](https://github.com/Little-Grebe-Inc/dsh-drillr) | 1 | 2026-11-18 | 2026-11-19 | drillr for DeepSeek Harness (dsh): financial data and research tools for US, Japan and China A-share equities via drillr's hosted MCP server. |
| 104 | [liuyuxuan6666/dsh-session-stars](https://github.com/liuyuxuan6666/dsh-session-stars) | 1 | 2026-11-19 | 2026-11-19 | Star sessions in the DeepSeek Harness sidebar and collect them in one panel. 在 DSH 左侧会话行加星标，并在左上角「星标」入口集中列出。 |
| 105 | [liyu6969/LiveCode](https://github.com/liyu6969/LiveCode) | 1 | 2026-11-17 | 2026-11-18 | a DeepSeek Harness plugin that plays a file's change as it is written, then hands you the settled file with a diff gutter. Tabs per file, theme-token syntax colour, and an animated character scene. |
| 106 | [longmozhiyuan/dsh-chat-mode](https://github.com/longmozhiyuan/dsh-chat-mode) | 1 | 2026-11-19 | 2026-11-19 | A DSH desktop plugin that embeds chat.deepseek.com behind a full-screen overlay, as a native-feeling Chat mode. |
| 107 | [Lrht-llw/dsh-skillswitch](https://github.com/Lrht-llw/dsh-skillswitch) | 1 | 2026-11-17 | 2026-11-19 | DeepSeek Harness（DSH）插件：在客户端左侧边栏新增 「技能开关」 页面，给每个已安装技能一个共享的开关。 |
| 108 | [lyhue1991/dsh-pi-preset](https://github.com/lyhue1991/dsh-pi-preset) | 1 | 2026-08-30 | 2026-11-18 | DSH agent preset running pi's system prompt and tools, with pi-codex's non-blocking bash |
| 109 | [magiccyclingz/dsh-design-leapavid](https://github.com/magiccyclingz/dsh-design-leapavid) | 1 | 2026-11-17 | 2026-11-18 | DeepSeek Harness 侧栏视觉设计插件：84 套品牌设计语言的风格库，按风格生成网页 / 幻灯片 / 信息图 |
| 110 | [mehmetoguzderin/ud-agent-skill-mcp-plugin](https://github.com/mehmetoguzderin/ud-agent-skill-mcp-plugin) | 1 | 2026-11-17 | 2026-11-18 | UDAgent: UD Skills, MCPs, Plugins, and Extensions for Agents, Harnesses, and QSLMs |
| 111 | [minglong142857-web/antigravity-armor-break](https://github.com/minglong142857-web/antigravity-armor-break) | 1 | 2026-11-18 | 2026-11-18 | antigravity破甲 · Antigravity armor-break kit（hooks + TLS relay）+ DeepSeek Harness 补丁包（9 patches, drift=0） |
| 112 | [MiraculousGu/dsh-ui-studio](https://github.com/MiraculousGu/dsh-ui-studio) | 1 | 2026-11-18 | 2026-11-18 | Glassmorphism UI customization for DeepSeek Harness: palettes, transparency, uploaded photo/GIF/video backgrounds, type sizes, and branding. |
| 113 | [Mizar-Silexeth/opencode-free-lane-tls-gate](https://github.com/Mizar-Silexeth/opencode-free-lane-tls-gate) | 1 | 2026-11-13 | 2026-11-19 | Measured root cause of opencode.ai free-tier 429 (TLS ClientHello/JA3 gate) + optional fallback patch. Read the terms-of-use caveat in README before use. |
| 114 | [mr-hanlu/dsh-mcp-hub](https://github.com/mr-hanlu/dsh-mcp-hub) | 1 | 2026-11-16 | 2026-11-19 | 在 DeepSeek Harness 内管理 MCP 服务：在设置页查看与启停，从 Claude Code、Claude Desktop、Codex、Cursor、VS Code / Copilot、Copilot CLI、Windsurf、Gemini CLI、OpenCode 导入已有配置，搜索官方 MCP Registry，验证连接，并把密钥写入 DSH 凭证服务而不是明文保存。 |
| 115 | [mycroft-sherlock/apple-design](https://github.com/mycroft-sherlock/apple-design) | 1 | 2026-11-18 | 2026-11-18 | Apple HIG design-review skill wrapper for DeepSeek Harness |
| 116 | [myz968/ping-pong](https://github.com/myz968/ping-pong) | 1 | 2026-11-18 | 2026-11-18 | DSH 桌宠插件：四态驱动 + 状态面板 + 消息图标球 |
| 117 | [nianzhiyao/dsh-role-card](https://github.com/nianzhiyao/dsh-role-card) | 1 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：手机连局域网就能控制这台电脑上的 DSH 工作区（接着聊、投任务、看执行）；也是侧边栏角色卡，粘一张卡就开演，支持链接/PNG 卡导入、AI 扩写与小说分章推进。 |
| 118 | [openanysi/openany-mcp](https://github.com/openanysi/openany-mcp) | 1 | 2026-11-03 | 2026-11-19 | The business-to-agent marketplace. One MCP endpoint for 3,200+ APIs across social, SEO/search, company/leads, finance and legal, plus 168+ AI models for chat, reasoning, image, video and audio—including GPT, Claude, Gemini, DeepSeek, Qwen, Midjourney, Veo and Kling. Browse free; pay per call. |
| 119 | [Panther-w/dsh-inline-attachments](https://github.com/Panther-w/dsh-inline-attachments) | 1 | 2026-11-18 | 2026-11-18 | 输入框增强：把图片或文件放在你想要的位置，模型就在该位置读到它。 |
| 120 | [poweredbyai/geo-desk](https://github.com/poweredbyai/geo-desk) | 1 | 2026-11-18 | 2026-11-18 | AI 搜索可见度工作台：问题库、采样、指标、洞察、行动方案与客户报告（DeepSeek Harness 插件，脱敏演示） |
| 121 | [QIU-KKKK/DeepSeek-Harness-BT](https://github.com/QIU-KKKK/DeepSeek-Harness-BT) | 1 | 2026-11-16 | 2026-11-18 | 用AI制作的一个插件/A plugin created using AI |
| 122 | [QqiqiQ/dsh-text-count](https://github.com/QqiqiQ/dsh-text-count) | 1 | 2026-11-18 | 2026-11-18 | DSH 字数统计工具：中文按字、西文按词，另给标点/字符/字素/行数与 UTF-8 字节，并可用 min/max 区间判定是否达标。 |
| 123 | [Qquanwei/dsh-miku](https://github.com/Qquanwei/dsh-miku) | 1 | 2026-11-19 | 2026-11-19 | Hatsune Miku module artwork as the DSH sidebar background (per-session or fixed image, opacity setting) |
| 124 | [Richard-He-happy/sci-agent](https://github.com/Richard-He-happy/sci-agent) | 1 | 2026-11-14 | 2026-11-18 | Scientific agent skills: literature reading, academic writing, scientific figures, presentations, skill design and agent pipelines (DSH plugin). |
| 125 | [rockdesk-io/rockdesk-skill](https://github.com/rockdesk-io/rockdesk-skill) | 1 | 2026-11-18 | 2026-11-19 | Let Claude Code, Codex, Gemini CLI, DeepSeek Harness and other agents operate your other computers through RockDesk, as a skill or an MCP server: shell, files, screenshots, mouse and keyboard, by machine ID. Needs the RockDesk app on both machines. |
| 126 | [Roshenn/dsh-looptree-dashboard](https://github.com/Roshenn/dsh-looptree-dashboard) | 1 | 2026-10-30 | 2026-11-19 | DSH plugin: one swimlane per project — project vision to milestone to capability to execution records, with node sessions, structured prompts and live service status. |
| 127 | [Roshenn/dsh-workaround-git](https://github.com/Roshenn/dsh-workaround-git) | 1 | 2026-10-30 | 2026-11-19 | DSH plugin: batch git across every repo in a workspace — one status table, one sync, one commit per repo's own diff, one push. |
| 128 | [shinji00222/dsh-persona-continuity](https://github.com/shinji00222/dsh-persona-continuity) | 1 | 2026-11-17 | 2026-11-18 | 每个人格一份独立的跨会话长期记忆（SQLite 持久化、旧对话检索与导入），内置问卷模拟与真人数据校准 · Per-persona cross-session memory and survey simulation for DeepSeek Harness. |
| 129 | [simonzxm/dsh-ui-cleaner](https://github.com/simonzxm/dsh-ui-cleaner) | 1 | 2026-11-19 | 2026-11-19 | Minimalist element hider for DeepSeek Harness powered by uBlock Origin's cosmetic selector engine. |
| 130 | [sjnole/dsh-whale-dream](https://github.com/sjnole/dsh-whale-dream) | 1 | 2026-11-18 | 2026-11-18 | 鲸梦 · DSH 主题插件：启动屏 / 海洋背景 / 外观皮肤 \| Whale Dream - a DeepSeek Harness theme plugin |
| 131 | [SOCOOL666/dsh-starter-kit](https://github.com/SOCOOL666/dsh-starter-kit) | 1 | 2026-11-19 | 2026-11-19 | DSH 一键整合包：面向初次接触 the agent runtime 的小白用户，一次安装即集成可视化插件市场（dshmarket ⭐12.9k/月下载127万）、增强侧边栏（dsh-better-sidebar ⭐5.2k/月下载36万）和全局提示词。装完即可畅用 DSH，日常无需再找其他插件。中文文档见 README。 |
| 132 | [songrui111/paper-review-revision](https://github.com/songrui111/paper-review-revision) | 1 | 2026-11-19 | 2026-11-19 | Codex skill for academic review, mathematical verification, English editing, and final manuscript checks |
| 133 | [taffy114514/dsh-plugin-unlock](https://github.com/taffy114514/dsh-plugin-unlock) | 1 | 2026-11-18 | 2026-11-18 | Clears the DSH desktop "plugin is in use, the desktop app will not remove it right now" refusal and finishes the marketplace update. |
| 134 | [TengYangTuoHai/dsh-session-harbor](https://github.com/TengYangTuoHai/dsh-session-harbor) | 1 | 2026-11-13 | 2026-11-19 | Session Harbor — 在一个 DeepSeek Harness 侧栏管理本机和多台 SSH 设备的会话。 |
| 135 | [todrinkcho/dsh-task-chime-badge](https://github.com/todrinkcho/dsh-task-chime-badge) | 1 | 2026-11-19 | 2026-11-19 | Chime and a taskbar overlay badge when a DeepSeek Harness turn finishes or waits for your answer (Windows desktop shell). |
| 136 | [tshui1/dsh-skill-autoload](https://github.com/tshui1/dsh-skill-autoload) | 1 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: auto-load the matching installed skill from the user's message, no trigger word needed. |
| 137 | [UNIEPOpep/dsh-attempt-recover](https://github.com/UNIEPOpep/dsh-attempt-recover) | 1 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件，将聊天界面中失败的assistant attempts (assistant/attempt) 呈现为可折叠的模块，并可选地重新注入对话上下文 |
| 138 | [uppercrusteve/dsh-converge](https://github.com/uppercrusteve/dsh-converge) | 1 | 2026-08-28 | 2026-11-19 | DSH 科研收敛驾驶舱：把任务拆成研究树，收尾前硬过三道门才放行。 |
| 139 | [uppercrusteve/dsh-tool-health](https://github.com/uppercrusteve/dsh-tool-health) | 1 | 2026-08-28 | 2026-11-19 | DSH 工具健康度哨兵：跨会话记录工具失败与延迟，慢性失败工具在系统提示里预警。 |
| 140 | [vicfei/dsh-EvoOntology](https://github.com/vicfei/dsh-EvoOntology) | 1 | 2026-11-18 | 2026-11-18 | Self-evolving ontology layer for DeepSeek Harness — evolution engine with evidence on every record; phase 1 powers the family agents, growing into the full ontology layer. Concept of ruc-datalab/EvoOntology (MIT), clean-room, not affiliated. |
| 141 | [VladimirKuzen/DSH-guardrails](https://github.com/VladimirKuzen/DSH-guardrails) | 1 | 2026-11-17 | 2026-11-18 | Deterministic guardrails for DeepSeek Harness: asks or denies risky tool calls before they run, and keeps a local audit trail. Windows-only. |
| 142 | [w3353239621-tech/dsh-compaction-owner](https://github.com/w3353239621-tech/dsh-compaction-owner) | 1 | 2026-11-19 | 2026-11-19 | DSH 0.2.x 压缩调度层：单一 owner 持有 ctx.compaction，先免费定向修剪旧工具结果，再决定机械切或让位给 billion-context 的 wire 层；每次删除都有 shadow 备份可召回。MIT。 |
| 143 | [WanderingHeart/dsh-auto-memory-WH](https://github.com/WanderingHeart/dsh-auto-memory-WH) | 1 | 2026-11-15 | 2026-11-19 | WandeeringHeart制作的大肥鱼自动记忆插件。为 DeepSeek Harness 提供持久记忆、主题整理、可撤销合并、原生提醒与可视化管理，支持本地 Markdown 存储、分档配置、导入导出和备份恢复。 |
| 144 | [whisperflo/dsh-deepseek-console](https://github.com/whisperflo/dsh-deepseek-console) | 1 | 2026-08-22 | 2026-11-18 | DeepSeek 账户控制台：实时余额监控 / 用量与成本统计 / 消费额度管理 / 全局悬浮 HUD（官方 API 直连，Key 仅存本机） |
| 145 | [Wjl1224734792/ds-superbot](https://github.com/Wjl1224734792/ds-superbot) | 1 | 2026-11-17 | 2026-11-18 | Multi-role engineering team for DeepSeek Harness: dispatch-time role charters, plan gate, QA, browser acceptance, review, and a right-sidebar team panel. |
| 146 | [woc-jpg/dsh-plugin-doubao](https://github.com/woc-jpg/dsh-plugin-doubao) | 1 | 2026-11-18 | 2026-11-19 | Doubao (豆包) models as a DSH LLM provider: plain HTTPS by default, signed client bridge only when risk control appears, tool calls bridged through a prompt marker protocol. |
| 147 | [wssdll/dsh-chat-preset](https://github.com/wssdll/dsh-chat-preset) | 1 | 2026-11-19 | 2026-11-19 | DSH 纯净聊天模式预设。Schema 从 ~9 458 tok 降到 ~376 tok，降低约 25 倍。只保留联网搜索、打开网页、读取附件（文档、图片）三个工具，中文思维链，尽可能还原网页版。 |
| 148 | [wtr20211202/schflow](https://github.com/wtr20211202/schflow) | 1 | 2026-11-16 | 2026-11-18 | Proposal-driven task pipeline for AI coding agents: proposals → review gate → parallel git worktree execution → per-branch serial merge queue. Official plugins for claude code &amp; dsh — one command per host. |
| 149 | [wwewtech/numes-deepseek-harness](https://github.com/wwewtech/numes-deepseek-harness) | 1 | 2026-11-17 | 2026-11-19 | Free Numes models in DeepSeek Harness: hard zero-cost route (:free + max_price guards), never-give-up retries (5s to 5m), auto-discovery. Zero-dependency local proxy. |
| 150 | [XiaoLeigh/dsh-notify](https://github.com/XiaoLeigh/dsh-notify) | 1 | 2026-11-19 | 2026-11-19 | Windows toast + chime for DeepSeek Harness: approval prompts, agent questions, and finished/failed turns. Click the toast to bring DSH back to front. |
| 151 | [xiaoxia-5201314/dsh-media-bridge](https://github.com/xiaoxia-5201314/dsh-media-bridge) | 1 | 2026-11-17 | 2026-11-18 | DSH 插件：语音转写 / TTS / 生图 / 生视频，每次调用只打一个上游，失败返回结构化错误码 |
| 152 | [xujiakai2026/dsh-status-notifier](https://github.com/xujiakai2026/dsh-status-notifier) | 1 | 2026-11-05 | 2026-11-19 | DeepSeek Harness bundle: agent status in the macOS menu bar (SwiftBar) — pending approvals, running tasks, finished tasks, plus system notifications. |
| 153 | [YAN3RA/dsh-thinking-guard](https://github.com/YAN3RA/dsh-thinking-guard) | 1 | 2026-11-01 | 2026-11-18 | DeepSeek Harness（DSH）社区插件：统一管理工具与技能的常驻、按需和禁用策略，提供重复调用提醒、交替循环识别、无进展局部保护及本次启动统计。 |
| 154 | [YuanYuan-JC/permanent-session-delete](https://github.com/YuanYuan-JC/permanent-session-delete) | 1 | 2026-11-19 | 2026-11-19 | Permanent conversation deletion for the DeepSeek Harness sidebar |
| 155 | [yueshao-hash/dsh-session-delete](https://github.com/yueshao-hash/dsh-session-delete) | 1 | 2026-11-18 | 2026-11-18 | 在会话右键菜单（和标题栏）加一个「删除对话」：真的把会话日志（session.vN.jsonl.zstd）从磁盘删掉，并刷新侧栏列表。DSH 原生只有「归档」（可恢复的隐藏）。 |
| 156 | [yugyq/dsh-composer-quill](https://github.com/yugyq/dsh-composer-quill) | 1 | 2026-11-18 | 2026-11-19 | 在 DSH 的输入框里提前把话写好：回合结束后给出下一句，打字时补完后半句，顺手修掉错字和标点。 |
| 157 | [z460440448/dsh-web-updater-tab](https://github.com/z460440448/dsh-web-updater-tab) | 1 | 2026-11-19 | 2026-11-19 | Update tab for DSH Web: checks @deepseek-ai/dsh releases, installs them with one click, schedules auto-updates, adds a settings section. |
| 158 | [zakoAries41/dsh-mewtype-dream](https://github.com/zakoAries41/dsh-mewtype-dream) | 1 | 2026-11-19 | 2026-11-19 | MewType dream appearance for the DeepSeek Harness Web GUI: five character palettes, aurora and starlight, personality openers and effects sliders (no bundled character artwork). |
| 159 | [zhaoqiminggg/dsh-quickshot](https://github.com/zhaoqiminggg/dsh-quickshot) | 1 | 2026-11-18 | 2026-11-18 | 给 DeepSeek Harness 的全局快捷键截图：任意界面按快捷键框选，截图直接进当前会话输入框 |
| 160 | [zman406986/dsh-Qwen-400-developer-role-fix](https://github.com/zman406986/dsh-Qwen-400-developer-role-fix) | 1 | 2026-11-16 | 2026-11-19 | Fixes the 400 'developer' role error on Qwen models. |
| 161 | [00wz/dsh-compaction-carryover](https://github.com/00wz/dsh-compaction-carryover) | 0 | 2026-11-18 | 2026-11-18 | Keeps skills and subagents in the DSH compaction checkpoint: the summarizer records a Carry-over section. |
| 162 | [2-qing/dsh-aftermath](https://github.com/2-qing/dsh-aftermath) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：记录每轮对话中观测目录的文件变更，事后可倒查改了什么、出自哪条命令。 |
| 163 | [23KeyPosition/dsh-stardew-skins](https://github.com/23KeyPosition/dsh-stardew-skins) | 0 | 2026-11-18 | 2026-11-18 | Stardew Valley seasonal skin for DeepSeek Harness (third-party, unofficial) |
| 164 | [2744317644/nihongo-lyrics-match](https://github.com/2744317644/nihongo-lyrics-match) | 0 | 2026-11-19 | 2026-11-19 | Japanese/Chinese lyric splitter with centralized LRC backups, DSH plugin, interactive HTML report, and CLI. |
| 165 | [3309602454/dsh-edge-pilot](https://github.com/3309602454/dsh-edge-pilot) | 0 | 2026-11-18 | 2026-11-18 | Drive the system Microsoft Edge from DeepSeek Harness: observe, click, type, scroll, screenshot, save-as, download, and replay saved skills. |
| 166 | [487666123/dsh-ptc-sandbox-fix](https://github.com/487666123/dsh-ptc-sandbox-fix) | 0 | 2026-11-19 | 2026-11-19 | PTC 沙箱参数修复：按会话权限调整 DeepSeek Harness 内置 PTC 的 run_code 参数 |
| 167 | [66Ronghua99/dsh-notifier](https://github.com/66Ronghua99/dsh-notifier) | 0 | 2026-11-18 | 2026-11-18 | macOS session notifications for DeepSeek Harness: a native banner plus a whale reminder doll that jumps to the finished session. |
| 168 | [6starlong/dsh-starlong](https://github.com/6starlong/dsh-starlong) | 0 | 2026-11-19 | 2026-11-19 | Starlong 的 DSH 固执己见套件：一个插件，多个可独立开关的模块。 |
| 169 | [781237194/agile-workbench](https://github.com/781237194/agile-workbench) | 0 | 2026-11-04 | 2026-11-18 | PM工作台（Agile Workbench）：本地优先的多角色项目工作台（Electron + DeepSeek Harness）。需求流程：分析师写正文 → 产品评审 → Owner评审门 → PM派开发 → 测试独立复验 → Owner本人验收（代管不可代验需求）。缺陷流程：任意角色立单（复现+验收标准）→ PM派开发 → 修复提交 → 测试复验 → PM/测试验收。一句话安装：dsh-agile-workbench |
| 170 | [7nian173/dsh-session-orchestrator](https://github.com/7nian173/dsh-session-orchestrator) | 0 | 2026-11-17 | 2026-11-18 | 让 DeepSeek Harness 里的多个会话可以互相创建、互相跳转、互相写信。 |
| 171 | [9-bai/dsh-external-toolbox](https://github.com/9-bai/dsh-external-toolbox) | 0 | 2026-11-18 | 2026-11-19 | Selection capture for DeepSeek Harness: select text in any Windows app, then translate, explain, quote into DSH, save to a vocabulary book or copy it -- from a floating card that never steals focus. |
| 172 | [a-molecule-of-ATP/dsh-bandizip](https://github.com/a-molecule-of-ATP/dsh-bandizip) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin that drives the local Bandizip console tool (bz.exe) to create, extract, list, test, preview, diff, browse and convert archives. |
| 173 | [a-molecule-of-ATP/dsh-ghost-download](https://github.com/a-molecule-of-ATP/dsh-ghost-download) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin that drives Ghost Downloader through its official ghd CLI: submit, probe, wait, control and verify downloads, with a live queue panel. |
| 174 | [a-molecule-of-ATP/dsh-subagent-model-guard](https://github.com/a-molecule-of-ATP/dsh-subagent-model-guard) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin that gates subagent delegation against DSH's official model allow-list, with an optional replacement tool that bypasses the session model snapshot. |
| 175 | [a643036114-sys/dsh-whale-pet](https://github.com/a643036114-sys/dsh-whale-pet) | 0 | 2026-11-19 | 2026-11-19 | 小鲸鱼桌宠：浮在 DSH（DeepSeek Harness）界面浮层上的纯 CSS 桌宠，无图片、无网络请求、无依赖 |
| 176 | [Aaron-lmh/dsh-side-chat](https://github.com/Aaron-lmh/dsh-side-chat) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏「侧边对话」：把主对话当背景的临时问答面板，灵感来自 Codex 的 side conversation。 |
| 177 | [ADBdad/dsh-qq-identity](https://github.com/ADBdad/dsh-qq-identity) | 0 | 2026-11-19 | 2026-11-19 | QQ 身份自动注入插件：把「她在群里的名片/是否管理员」和「私聊对方是谁」在每轮对话时注入提示词，AI 不用主动调工具。基于 OneBot 11，只读、零依赖。 |
| 178 | [adsqwui/dsh-subscription-agents](https://github.com/adsqwui/dsh-subscription-agents) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: use local Codex and Claude Code subscription CLIs as models and child agents |
| 179 | [adsqwui/dsh-welcome](https://github.com/adsqwui/dsh-welcome) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: random greeting with your name on the blank chat screen |
| 180 | [afeiaswell/dsh-hkm](https://github.com/afeiaswell/dsh-hkm) | 0 | 2026-11-18 | 2026-11-18 | Hotkey manager panel for DeepSeek Harness: browse and edit DSH shortcuts, scan system and third-party sources, and minimize the window to the Windows notification area. |
| 181 | [agenius666/dsh-ai-database-assistant](https://github.com/agenius666/dsh-ai-database-assistant) | 0 | 2026-11-19 | 2026-11-19 | AI Database Assistant for DeepSeek Harness (DSH). Read-only natural-language queries across MySQL, PostgreSQL, SQL Server, Oracle, and SQLite. |
| 182 | [ai-graveyard/dsh-skin](https://github.com/ai-graveyard/dsh-skin) | 0 | 2026-08-15 | 2026-11-18 | Independent visual skins for the DeepSeek Harness Web UI |
| 183 | [Aiasti/dsh-amdl-suite](https://github.com/Aiasti/dsh-amdl-suite) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: download NetEase playlists or Apple Music links as local ALAC files via amdl + wrapper-lite |
| 184 | [AION-Battlecruiser/dsh-worker-orchestrator](https://github.com/AION-Battlecruiser/dsh-worker-orchestrator) | 0 | 2026-11-18 | 2026-11-18 | Token-saving orchestrator for the DeepSeek Harness desktop app: the main session only splits the work, workers with their own conversations do it — call caps, lazy verification and window rotation enforced in code. |
| 185 | [AlexisVon/dsh-living](https://github.com/AlexisVon/dsh-living) | 0 | 2026-11-18 | 2026-11-18 | A living agent runtime for DeepSeek Harness: clock, memory, persona, and WorldGem modules |
| 186 | [Aliax-LI/dsh-gpt-image](https://github.com/Aliax-LI/dsh-gpt-image) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: GPT-Image reverse-channel generation/editing with a cross-platform 4K upscale chain and a native settings page |
| 187 | [alst123/dsh-session-delete](https://github.com/alst123/dsh-session-delete) | 0 | 2026-11-18 | 2026-11-18 | DSH插件：向DeepSeek Harness会话列表添加一个真正的“删除会话”右键操作。DSH原生仅支持归档。DSH plugin: add a real "Delete Session" right-click action to DeepSeek Harness session list. DSH natively only supports archive. |
| 188 | [amd47802574/dsh-artifacts](https://github.com/amd47802574/dsh-artifacts) | 0 | 2026-11-15 | 2026-11-18 | DSH 产物管家插件：左侧栏浏览与管理 DSH 生成的产物，彩色卡片/列表双视图 |
| 189 | [AmirReeve/dsh-meeting-ears](https://github.com/AmirReeve/dsh-meeting-ears) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：监听系统输出声音，本地 SenseVoice 转写并自动填入对话框发送 |
| 190 | [amoswzw/dsh-macos-menu-bar](https://github.com/amoswzw/dsh-macos-menu-bar) | 0 | 2026-11-18 | 2026-11-18 | macOS menu bar and notch access for DeepSeek Harness Desktop, with native approval prompts |
| 191 | [Andrewich/dsh-opencode-go](https://github.com/Andrewich/dsh-opencode-go) | 0 | 2026-11-18 | 2026-11-18 | OpenCode Go usage panel for the DeepSeek Harness Web UI — allowance meters and subscription renewal date. |
| 192 | [Angel-Hair/dsh-instructions-policy](https://github.com/Angel-Hair/dsh-instructions-policy) | 0 | 2026-11-19 | 2026-11-19 | DSH 插件，给 DeepSeek Harness 的工作区指令（\`AGENTS.md\` / \`CLAUDE.md\` 等文件）加一层会话级策略：根文件可换、用户级可关、子目录遍历可关，且不复制任何预设文件。 |
| 193 | [arrongao/dsh-turn-ding](https://github.com/arrongao/dsh-turn-ding) | 0 | 2026-11-14 | 2026-11-18 | Windows taskbar unread badge and completion chime for DeepSeek Harness turns. |
| 194 | [ArthurZhu1992/dsh-zh-yayan](https://github.com/ArthurZhu1992/dsh-zh-yayan) | 0 | 2026-11-18 | 2026-11-19 | 所思所言，皆成中文｜DSH 全体 agent 的中文推理与思考：起笔即中文，主 agent、子智能体、团队、后台任务一线到底。Chinese reasoning &amp; thinking policy for DeepSeek Harness. |
| 195 | [as1164/dsh-global-search](https://github.com/as1164/dsh-global-search) | 0 | 2026-11-18 | 2026-11-18 | Full-text search across every session workspace from a sidebar panel, with one-click opening of the matched session. |
| 196 | [ashley-dot-oss/dsh-persona-lab](https://github.com/ashley-dot-oss/dsh-persona-lab) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：从 B站 视频评论、字幕与弹幕里学「怎么说话、是什么样的人」，按学习区隔离产出可移植的人设词（纯文本 / SillyTavern 卡）。AI 协助制作。 |
| 197 | [asterdot/dsh-prompt-pilot](https://github.com/asterdot/dsh-prompt-pilot) | 0 | 2026-11-18 | 2026-11-18 | 提示词领航：DSH 草稿改写、首条消息模式建议与两档技能推荐。非官方二改。 |
| 198 | [Astonmy/dsh-research-then-build](https://github.com/Astonmy/dsh-research-then-build) | 0 | 2026-11-19 | 2026-11-19 | 先调研，再建。输入 /research：AI 必须先调研现成方案再动手，实现后由独立上下文 Agent 挑刺；没有调研台账、没经过独立检查、或仍有严重问题不放行。治 AI 乱写代码、重复造轮子、不调研、不看开源项目。 |
| 199 | [Astral-Yang/dsh-plugin-link-resolver](https://github.com/Astral-Yang/dsh-plugin-link-resolver) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：B站 / 抖音 / 小红书 / 微博 / X / YouTube 链接一步解析、下载并交付到 Web 或 IM，模型只负责播报结果。 |
| 200 | [Attiv/dsh-plugin-switch](https://github.com/Attiv/dsh-plugin-switch) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: sidebar panel to stop/start any plugin or MCP server at runtime |
| 201 | [BadWolfZXY/dsh-emoji-panel](https://github.com/BadWolfZXY/dsh-emoji-panel) | 0 | 2026-11-18 | 2026-11-18 | Emoji picker for the DeepSeek Harness composer: category tabs, search, ecents, and a custom meme libr |
| 202 | [baiyang-poob1/dsh-web-read](https://github.com/baiyang-poob1/dsh-web-read) | 0 | 2026-10-27 | 2026-11-19 | Read public web pages with a sandboxed headless browser, optional JavaScript rendering and script inspection for DeepSeek Harness. |
| 203 | [barnetshen/dsh-yingma-canvas](https://github.com/barnetshen/dsh-yingma-canvas) | 0 | 2026-11-19 | 2026-11-19 | 小影马画布 · DeepSeek Harness plugin: open the Xiaoyingma infinite canvas in the DSH sidebar; agents read and write canvas nodes via the yingma CLI. |
| 204 | [Bavoch/dsh-plugins](https://github.com/Bavoch/dsh-plugins) | 0 | 2026-11-18 | 2026-11-18 | 面向 DeepSeek Harness 的社区插件，涵盖侧栏、会话、任务状态和额度显示 |
| 205 | [BAYUNZIYUE/local-lan-gate](https://github.com/BAYUNZIYUE/local-lan-gate) | 0 | 2026-11-19 | 2026-11-19 | dsh-go 插件：把本机引擎的网页版带口令地临时开放到局域网（原生开关、自定义密码、定时关闭） |
| 206 | [BioAIEvolu/dsh-token-tally](https://github.com/BioAIEvolu/dsh-token-tally) | 0 | 2026-11-19 | 2026-11-19 | Token 台账 — DeepSeek Harness 用量与费用看板插件：五页签消耗视图 + 模型对比表 + 53 周热力图，本地聚合，零第三方运行时依赖 / Token &amp; cost dashboard plugin for DeepSeek Harness |
| 207 | [bortpro/dsh-plugin-socratic-tutor](https://github.com/bortpro/dsh-plugin-socratic-tutor) | 0 | 2026-11-19 | 2026-11-19 | Structured Socratic tutoring and skill tracking for DeepSeek Harness |
| 208 | [BrathonBai/whale-watcher](https://github.com/BrathonBai/whale-watcher) | 0 | 2026-10-31 | 2026-11-18 | 鲸鲸 · SenseCAP Watcher 具身端：BLE-only 固件 + DSH 插件桥；语音走 DeepSeek ASR/TTS。 |
| 209 | [buguoshixc/dsh-push](https://github.com/buguoshixc/dsh-push) | 0 | 2026-11-19 | 2026-11-19 | Push-channel plugin for DeepSeek Harness: notify tool, durable queue with merged replay, dedupe, file sink and OneBot 11 transport |
| 210 | [buxu777/dsh-theme-buxu](https://github.com/buxu777/dsh-theme-buxu) | 0 | 2026-11-12 | 2026-11-18 | 不虚 · 质肤 / Buxu Skin — 六套单色相配色方案，强调色与推理强度条随配色一起切换，对话头像按配色自适应，含独立设置页 |
| 211 | [callaumyan-design/dshx-multi-ask](https://github.com/callaumyan-design/dshx-multi-ask) | 0 | 2026-11-19 | 2026-11-19 | Multi-model ask for DeepSeek Harness: send one question to several AI models at once and compare their streamed answers side by side in a right-sidebar panel (Ctrl+Shift+M or /multi). |
| 212 | [callaumyan-design/dshx-patch-board](https://github.com/callaumyan-design/dshx-patch-board) | 0 | 2026-11-19 | 2026-11-19 | A DSH settings page that lists local patches and whether each is still applied; also gives third-party settings nav entries their own icons. |
| 213 | [callaumyan-design/dshx-plugin-hub](https://github.com/callaumyan-design/dshx-plugin-hub) | 0 | 2026-11-19 | 2026-11-19 | Moves the dshmarket plugin market into Settings 鈫?鍐呯疆鎻掍欢 as a tab, beside the host's plugin list and the market's own settings card. |
| 214 | [callaumyan-design/dshx-remote](https://github.com/callaumyan-design/dshx-remote) | 0 | 2026-11-19 | 2026-11-19 | Remote-control DeepSeek Harness from a phone: a paired mobile web app (PWA) over LAN or Tailscale to watch sessions, send prompts, stop turns, and answer approval requests. |
| 215 | [callaumyan-design/dshx-side-chat](https://github.com/callaumyan-design/dshx-side-chat) | 0 | 2026-11-19 | 2026-11-19 | Claude-style side chat for DeepSeek Harness: ask a quick question about the current conversation in a right-sidebar panel (Ctrl+; or /btw). The answer sees the main conversation's full context; nothing is written back to it. |
| 216 | [callaumyan-design/dshx-subagent-model-sync](https://github.com/callaumyan-design/dshx-subagent-model-sync) | 0 | 2026-11-19 | 2026-11-19 | Sync the official subagent model-selection allowlist from selected LLM providers' live catalogs. Pick providers (e.g. openai); every registered model under them joins the allowlist for NEW sessions. Manual entries are preserved; only plugin-managed entries are ever withdrawn. |
| 217 | [callaumyan-design/dshx-usage-panel](https://github.com/callaumyan-design/dshx-usage-panel) | 0 | 2026-11-19 | 2026-11-19 | A DSH settings page showing the DeepSeek account balance and today's token usage. |
| 218 | [caprimoon/dsh-mcp-settings](https://github.com/caprimoon/dsh-mcp-settings) | 0 | 2026-11-19 | 2026-11-19 | MCP servers page in Settings for DeepSeek Harness: list, add, edit, enable, probe, restart and delete the servers of @deepseek-ai/dsh-mcp-manager, with every write persisted to the active profile patch. |
| 219 | [CC2027MK2/dsh-peer](https://github.com/CC2027MK2/dsh-peer) | 0 | 2026-11-18 | 2026-11-18 | MCP bridge that lets the DSH agent on one machine call the DSH agent on another (streamable-HTTP, zero dependencies). |
| 220 | [cccjj55/dsh-plugin-bench](https://github.com/cccjj55/dsh-plugin-bench) | 0 | 2026-11-18 | 2026-11-18 | dsh plugin: benchmark a command with warmup, spread verdict and an environment fingerprint — refuses to call a noisy sample a measurement |
| 221 | [cccjj55/dsh-plugin-wsl](https://github.com/cccjj55/dsh-plugin-wsl) | 0 | 2026-11-18 | 2026-11-18 | dsh plugin: run bash inside WSL from dsh (wsl_sh tool with exit code, timeout, truncation notice) |
| 222 | [cccuuuhhh/dsh-sidebar-more](https://github.com/cccuuuhhh/dsh-sidebar-more) | 0 | 2026-11-18 | 2026-11-18 | Fold every DeepSeek Harness sidebar panel row into the built-in More menu, leaving a single More row above the workspace list. |
| 223 | [ccflort/moodtone](https://github.com/ccflort/moodtone) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 皮肤插件：6 套情绪配色、9 个语义色自定义、7 种气泡样式与玻璃材质。 |
| 224 | [ccr-wer/dsh-Lifecycle-Cache-Cleaner](https://github.com/ccr-wer/dsh-Lifecycle-Cache-Cleaner) | 0 | 2026-11-12 | 2026-11-18 | DSH 本地 Agent 的 KV cache 生命周期管理：探测不到本地部署就不动引擎（fail-closed） |
| 225 | [changmingjuebumaimeng3666/dsh-metabolism](https://github.com/changmingjuebumaimeng3666/dsh-metabolism) | 0 | 2026-11-18 | 2026-11-18 | 上下文代谢，压缩前原文归档进本地茅房，配指针摘要与按时间加权召回。 |
| 226 | [chenmohan123/dsh-plugin-system-status](https://github.com/chenmohan123/dsh-plugin-system-status) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin (dsh-plugin): live CPU/GPU/memory/VRAM/temperature readout under the composer, plus history charts behind a sidebar entry. |
| 227 | [chenxubin2016/dsh-workspace-curator](https://github.com/chenxubin2016/dsh-workspace-curator) | 0 | 2026-11-18 | 2026-11-18 | Workspace and session management for DeepSeek Harness / DeepSeek Harness 工作区与会话管理：整理工作区，归档或永久删除会话。 |
| 228 | [cheny5100/dsh-account-balance-pill](https://github.com/cheny5100/dsh-account-balance-pill) | 0 | 2026-11-19 | 2026-11-19 | Shows the signed-in DeepSeek account's top-up and bonus balance above the DSH sidebar account entry. |
| 229 | [ChernyakAI/dsh-aicraft](https://github.com/ChernyakAI/dsh-aicraft) | 0 | 2026-10-18 | 2026-11-19 | A workflow builder for DeepSeek Harness with custom roles, stages, and task artifacts. |
| 230 | [chiya695/dsh-archiver](https://github.com/chiya695/dsh-archiver) | 0 | 2026-11-19 | 2026-11-19 | DSH 技能/插件归档器：把每个技能、每个插件各自打成 zip，可定时或启动时自动归档，落地本地目录或 WebDAV，并能一键导回。Back up every skill and plugin in DeepSeek Harness as separate zips (manual / scheduled / on startup) to disk or WebDAV. |
| 231 | [Chronicle-IRAS/dsh-wandao](https://github.com/Chronicle-IRAS/dsh-wandao) | 0 | 2026-11-19 | 2026-11-19 | 万能导 · Wandao document migration plugin for DeepSeek Harness |
| 232 | [chstd/dsh-model-picker](https://github.com/chstd/dsh-model-picker) | 0 | 2026-11-19 | 2026-11-19 | Two-column model, provider and reasoning-effort picker with cross-provider search for the DeepSeek Harness web composer |
| 233 | [chuilian/dsh-prompt-polish](https://github.com/chuilian/dsh-prompt-polish) | 0 | 2026-10-19 | 2026-11-18 | DSH Web 输入框一键润色插件 |
| 234 | [chuilian/dsh-session-trash](https://github.com/chuilian/dsh-session-trash) | 0 | 2026-10-19 | 2026-11-18 | DSH 会话两步确认删除 + 回收站插件 |
| 235 | [chuuu4536-gh/dsh-jp-vocab](https://github.com/chuuu4536-gh/dsh-jp-vocab) | 0 | 2026-11-19 | 2026-11-19 | Daily Japanese vocabulary digest for DSH: reads the JSONL written by a companion Edge extension and writes a Markdown summary grouped by part of speech. |
| 236 | [Ckarefulon/dsh-mini-kit](https://github.com/Ckarefulon/dsh-mini-kit) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness mini kit: restart the app and continue the sessions that were running, and list what is running now. |
| 237 | [clarois/dsh-nutaraline-credits](https://github.com/clarois/dsh-nutaraline-credits) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness bundle: show your Nutaraline gateway balance and usage in a Settings section. |
| 238 | [cloudylapis/dsh-local-model-worker](https://github.com/cloudylapis/dsh-local-model-worker) | 0 | 2026-11-19 | 2026-11-19 | Run a local OpenAI-compatible model server on demand: DSH starts it when the model is used and unloads it when idle. |
| 239 | [cloudylapis/dsh-see-act](https://github.com/cloudylapis/dsh-see-act) | 0 | 2026-11-19 | 2026-11-19 | See and act in the same call: annotated before/after frames around real mouse and keyboard input, built to sit next to dsh-see-now. |
| 240 | [Comtach/dsh-theme-lcars](https://github.com/Comtach/dsh-theme-lcars) | 0 | 2026-11-19 | 2026-11-19 | dsh-theme-lcars |
| 241 | [creekmoon/dsh-openrouter-provider-router](https://github.com/creekmoon/dsh-openrouter-provider-router) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness (DSH) 插件：把 OpenRouter 模型固定到你指定的上游供应商 / DSH plugin that pins each OpenRouter model to the providers you choose |
| 242 | [cube-ai/dsh-weixin-channel](https://github.com/cube-ai/dsh-weixin-channel) | 0 | 2026-11-19 | 2026-11-19 | DSH微信频道 — 将个人微信机器人接入本机 DeepSeek Harness。 |
| 243 | [cuteG41cute/dsh-tts](https://github.com/cuteG41cute/dsh-tts) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: read assistant replies aloud via any OpenAI-compatible TTS endpoint |
| 244 | [CyberPzy/dsh-prompt-smith](https://github.com/CyberPzy/dsh-prompt-smith) | 0 | 2026-11-17 | 2026-11-18 | DeepSeek Harness plugin: one-click prompt enhancement next to the composer model seat |
| 245 | [czwjss/feishu-bot-im](https://github.com/czwjss/feishu-bot-im) | 0 | 2026-10-18 | 2026-11-18 | 飞书机器人IM |
| 246 | [dai428/dsh-skill-switch](https://github.com/dai428/dsh-skill-switch) | 0 | 2026-11-18 | 2026-11-18 | Per-session switches for DSH skills: turn one on once and its rules apply to every reply at the level you picked, without naming it again. |
| 247 | [daishaodong/dsh-task-center](https://github.com/daishaodong/dsh-task-center) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: one sidebar entry for every running or waiting Agent, with macOS notifications and project ordering by recent activity. |
| 248 | [danielcy/dsh-fast-reply](https://github.com/danielcy/dsh-fast-reply) | 0 | 2026-11-19 | 2026-11-19 | DSH快捷回复插件，支持添加并管理常用消息，一键选择并填入输入框 |
| 249 | [Darianliu23/dsh-civ6](https://github.com/Darianliu23/dsh-civ6) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: let the session's own model play Civilization VI via civ6-mcp. Presets for AI plays / advisor / co-op with takeover, plus a civ6 gateway tool for any session. |
| 250 | [DarkLineX/DSHSpeed](https://github.com/DarkLineX/DSHSpeed) | 0 | 2026-11-18 | 2026-11-18 | DSH (DeepSeek Harness) 时间审计插件：把每个回合的墙钟拆成模型往返 / 工具执行 / 宿主间隙，并把模型往返拆成首 token 等待、思考流、工具参数流、正文流。附 pwsh 解析失败、会话日志多帧 zstd、工具截断等取证报告。 |
| 251 | [DASHAN-0079/dsh-superagent-adapt](https://github.com/DASHAN-0079/dsh-superagent-adapt) | 0 | 2026-11-10 | 2026-11-18 | dsh-superagent adapted to DeepSeek Harness 0.2.2-rc.3: five source changes, added tests, equivalence evidence |
| 252 | [David-Martinez-worldexecute/dsh-ai-action-translator](https://github.com/David-Martinez-worldexecute/dsh-ai-action-translator) | 0 | 2026-11-19 | 2026-11-19 | A DSH plugin that turns agent tool calls into beginner-friendly explanations, so learners can follow what the AI is doing and why. |
| 253 | [DeepLifeStudio/dsh-lark-studio](https://github.com/DeepLifeStudio/dsh-lark-studio) | 0 | 2026-11-19 | 2026-11-19 | 专为 DeepSeek Harness 生态打造的大模型原生（LLM-Native）飞书全域协同与多维表格智能工作台插件。 |
| 254 | [DevTarlow/dsh-peak-price-pal](https://github.com/DevTarlow/dsh-peak-price-pal) | 0 | 2026-11-19 | 2026-11-19 | A DeepSeek Harness plugin: DeepSeek halves its rates off-peak. A small sun or moon in the composer shows which rate is live, plus your balance and today's spend. |
| 255 | [devzer0o0/dsh-max-reasoning-effort](https://github.com/devzer0o0/dsh-max-reasoning-effort) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: pins reasoning effort to Max for every model |
| 256 | [dingchenhui0618-arch/dsh-sfx-pad](https://github.com/dingchenhui0618-arch/dsh-sfx-pad) | 0 | 2026-11-17 | 2026-11-18 | Event sound pad for DeepSeek Harness: bind test/build/recording/publish outcomes to local audio files, preview, one-click mute, and mute profiles that follow the current app. Reads local audio only. |
| 257 | [dingminhua/dsh-ldvh](https://github.com/dingminhua/dsh-ldvh) | 0 | 2026-08-24 | 2026-11-19 | LD Vibe Harness: a DSH-native AI collaboration governance framework — spec-and-fact backed recall, controlled writes, and Git-guarded commits. |
| 258 | [Diomchen/dsh-better-tag](https://github.com/Diomchen/dsh-better-tag) | 0 | 2026-11-18 | 2026-11-18 | Give DeepSeek Harness sessions flat tags and a persistent done stamp · DSH 会话标签与完成章 |
| 259 | [DIONG39/dsh-local-history](https://github.com/DIONG39/dsh-local-history) | 0 | 2026-11-17 | 2026-11-18 | 可将DeepSeek网页版聊天记录1:1完整移植到DSH go，且支持按需选择。 |
| 260 | [dongasai/dsh-llm-retry-guard](https://github.com/dongasai/dsh-llm-retry-guard) | 0 | 2026-11-19 | 2026-11-19 | DSH 插件的就地修补 + 兜底重试：采样把工具参数写成坏 JSON 时直接补 block-end 救活调用（207/220 真实坏样本全链路通过），重试作为后备。MALFORMED response 实测重试治愈率 0/41。 |
| 261 | [dongsheng123132/dsh-project-gallery](https://github.com/dongsheng123132/dsh-project-gallery) | 0 | 2026-11-18 | 2026-11-18 | 项目相册：DeepSeek Harness 插件，把会话与项目目录里的图按项目攒成一册，悬停即看、点开有当时的对话与进展；零运行时依赖，MIT。 |
| 262 | [dsh-plugins/dsh-npm-mirror](https://github.com/dsh-plugins/dsh-npm-mirror) | 0 | 2026-11-19 | 2026-11-19 | Manage and prioritize npm registries from the DSH Add Plugin menu |
| 263 | [dsh-plugins/dsh-workspace-group](https://github.com/dsh-plugins/dsh-workspace-group) | 0 | 2026-11-18 | 2026-11-18 | 为 DeepSeek Harness 工作区创建分区，支持右键归类、拖动移动与折叠。 |
| 264 | [Dushiqi1987/dsh-sweeper](https://github.com/Dushiqi1987/dsh-sweeper) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: audit and safely clean up what tool execution leaves behind in your sessions. Report-only by default, everything removable is restorable. |
| 265 | [DX12xyz/dsh-asar-framework](https://github.com/DX12xyz/dsh-asar-framework) | 0 | 2026-11-18 | 2026-11-19 | 让 DSH 桌面插件可以进入 Electron 主进程——托盘菜单、通知、窗口、IPC 通道和运行时补丁——无需重新打包 app.asar。 |
| 266 | [easonandkhalil/dsh-poker-mind](https://github.com/easonandkhalil/dsh-poker-mind) | 0 | 2026-11-19 | 2026-11-19 | A local side-panel Texas Hold'em table with AI opponents and a live coach for DeepSeek Harness. |
| 267 | [echo-ix/dsh-andrej-karpathy](https://github.com/echo-ix/dsh-andrej-karpathy) | 0 | 2026-11-18 | 2026-11-18 | A DeepSeek Harness plugin that adds the karpathy-guidelines skill: four behavioral rules for coding work, derived from Andrej Karpathy's observations on LLM coding pitfalls. It is a DSH adaptation of multica-ai/andrej-karpathy-skills. |
| 268 | [Echo-Li130/dsh-mcp-toggles](https://github.com/Echo-Li130/dsh-mcp-toggles) | 0 | 2026-11-19 | 2026-11-19 | Switch existing MCP loader rows on or off from DeepSeek Harness Settings, editing only that row and leaving the rest of the profile patch byte-for-byte intact. |
| 269 | [edsml-jz2321/QuoteMem](https://github.com/edsml-jz2321/QuoteMem) | 0 | 2026-11-19 | 2026-11-19 | QuoteMem: auditable long-term memory for LLM agents — quoted byte-span evidence, versioned supersession, tombstone forgetting, replayable review decisions. |
| 270 | [Effortful-lion/dsh-skin-muro](https://github.com/Effortful-lion/dsh-skin-muro) | 0 | 2026-11-18 | 2026-11-18 | Muro 4K wallpapers as a DeepSeek Harness skin — browse, download, apply, tune contrast. Light/dark aware. |
| 271 | [egg2023001-cmd/dsh-fish-pay-counter](https://github.com/egg2023001-cmd/dsh-fish-pay-counter) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 工作台里的可拖动小鱼工资计数器 |
| 272 | [elegant01/dsh-mcp-connectors](https://github.com/elegant01/dsh-mcp-connectors) | 0 | 2026-11-17 | 2026-11-18 | DSH MCP Connectors — cross-agent MCP server manager or DeepSeek Harness |
| 273 | [ElevenAI-Pro/dsh-archive-manager](https://github.com/ElevenAI-Pro/dsh-archive-manager) | 0 | 2026-11-19 | 2026-11-19 | Session archive &amp; cleanup manager for DeepSeek Harness (DSH): sidebar permanent delete (cascades to sub-agents), zcodex-style archive management, auto-archive with retention. |
| 274 | [elvisw/dsh-plugin-magic-context](https://github.com/elvisw/dsh-plugin-magic-context) | 0 | 2026-11-10 | 2026-11-18 | Magic Context for DeepSeek Harness: reversible context reclaim, an out-of-band historian, an m\[0\]/m\[1\] memory baseline, project memories, and the compaction seam. |
| 275 | [EndlessPoem/dsh-ip-info](https://github.com/EndlessPoem/dsh-ip-info) | 0 | 2026-10-30 | 2026-11-18 | Shows your public IP, location and provider under the composer or in a floating card, at Harness's text size — and can be turned off.  \|  在输入框下方或悬浮窗里显示当前公网 IP、归属地与运营商，字号跟随 Harness，随时可以关掉。 |
| 276 | [EndlessPoem/dsh-session-delete](https://github.com/EndlessPoem/dsh-session-delete) | 0 | 2026-10-29 | 2026-11-18 | A real "Delete session" for DeepSeek Harness. Not archive - erase. \| 真正的「删除会话」，不是归档，是删干净。 |
| 277 | [eppen/dsh-plugin-cursor-plan](https://github.com/eppen/dsh-plugin-cursor-plan) | 0 | 2026-11-19 | 2026-11-19 | dsh-plugin-cursor-plan |
| 278 | [EricStoneChina/better-auto-review](https://github.com/EricStoneChina/better-auto-review) | 0 | 2026-11-18 | 2026-11-18 | Codex-style auto review for DeepSeek Harness: keep the workspace-write sandbox and review only explicit privilege escalations. |
| 279 | [EricWang1358/dsh-connect-dumate](https://github.com/EricWang1358/dsh-connect-dumate) | 0 | 2026-11-17 | 2026-11-18 | 百度搭子（DuMate）DeepSeek Harness 模型接入插件：复用桌面端登录态、Loopback OpenAI Shim、独立积分看板、每日签到与实测倍率显示 |
| 280 | [Ernesto-yuan/dsh-theme-switcher](https://github.com/Ernesto-yuan/dsh-theme-switcher) | 0 | 2026-11-18 | 2026-11-18 | Personalization for DeepSeek Harness: 20 light/dark palettes including macaron gradients and a rainbow, eight emoji backgrounds plus a custom image, frosted glass, and a pinned sidebar page. |
| 281 | [eternalnan/dsh-chat-preset](https://github.com/eternalnan/dsh-chat-preset) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness agent preset: plain chat with web search as the only tool (Chat模式) |
| 282 | [Eustia-Ast/dsh-prompt-lab](https://github.com/Eustia-Ast/dsh-prompt-lab) | 0 | 2026-11-19 | 2026-11-19 | Per-session system prompt editor for DeepSeek Harness, with section overrides, templates, presets, backups and tool controls. |
| 283 | [FanetheDivine/dsh-plugin-better-mcp](https://github.com/FanetheDivine/dsh-plugin-better-mcp) | 0 | 2026-11-18 | 2026-11-19 | 更好用的 MCP 插件 |
| 284 | [FanetheDivine/dsh-plugin-lark-bridge](https://github.com/FanetheDivine/dsh-plugin-lark-bridge) | 0 | 2026-11-18 | 2026-11-19 | 借助 lark-cli，让 Agent 和你通信 |
| 285 | [FanetheDivine/dsh-plugin-meta-tools](https://github.com/FanetheDivine/dsh-plugin-meta-tools) | 0 | 2026-11-18 | 2026-11-19 | DSH 元工具插件，让 Agent 操作会话和工作区 |
| 286 | [farons/dsh-terminal-hub](https://github.com/farons/dsh-terminal-hub) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：一个侧栏面板列出所有会话的终端，显示状态、跳转所属会话，并只读展示终端控制器注册的启动器候选 |
| 287 | [feely0208/dsh-ai-label-stamp](https://github.com/feely0208/dsh-ai-label-stamp) | 0 | 2026-11-18 | 2026-11-18 | 给 docx/png/txt 写入 GB 45438 隐式标识元数据（AIGC 关键词 + 五要素），是 dsh-ai-label-verify 验标的执行端 |
| 288 | [feely0208/dsh-ai-label-verify](https://github.com/feely0208/dsh-ai-label-verify) | 0 | 2026-11-18 | 2026-11-18 | 按 GB 45438-2025 附录E 验证生成文件的隐式标识：元数据含 AIGC 关键词字段 + 五要素（生成标签/服务提供者/服务编号/内容编号），支持 png/jpg/docx/pdf/wav/txt |
| 289 | [feely0208/dsh-cn-agreement-check](https://github.com/feely0208/dsh-cn-agreement-check) | 0 | 2026-11-18 | 2026-11-18 | 检查用户协议/隐私政策文本的条款级红线：单方最终解释权、不合理管辖约定、单方解除权、自动续费未提示、个人信息捆绑授权——每条带法规出处 |
| 290 | [feely0208/dsh-context-budget](https://github.com/feely0208/dsh-context-budget) | 0 | 2026-11-18 | 2026-11-18 | 估算应用的上下文占用：system prompt + 工具定义 + 历史轮次 → token 估算与占比，提示截断风险，费率联动全家桶价格 |
| 291 | [feely0208/dsh-industry-fitness](https://github.com/feely0208/dsh-industry-fitness) | 0 | 2026-11-18 | 2026-11-18 | 健身行业多出来的那几项：预付卡余额/退费、教练资质、安全防护、合同冷静期——预付卡跑路是近年投诉热点 |
| 292 | [feely0208/dsh-llm-endpoint-audit](https://github.com/feely0208/dsh-llm-endpoint-audit) | 0 | 2026-11-18 | 2026-11-18 | 扫描代码里所有大模型 API 端点（DeepSeek/OpenAI/Anthropic/Gemini/通义/月之暗面/智谱/MiniMax…），出供应商矩阵：调了谁、传了什么、隐私政策是否披露——个保法告知义务按服务商逐个算 |
| 293 | [feely0208/dsh-prompt-catalog](https://github.com/feely0208/dsh-prompt-catalog) | 0 | 2026-11-18 | 2026-11-18 | 扫描代码与文档里散落的大模型提示词（system prompt 字符串、模板），建台账：在哪、多长、改过没——全家桶应用开发者的提示词资产管理 |
| 294 | [feely0208/dsh-prompt-regression](https://github.com/feely0208/dsh-prompt-regression) | 0 | 2026-11-18 | 2026-11-18 | 改 system prompt 或换模型后，用固定的评测集回放验证：预期包含/排除的关键点是否仍然通过，出通过率与 drift 报告。联网可选，费用预估后确认 |
| 295 | [feely0208/dsh-session-search](https://github.com/feely0208/dsh-session-search) | 0 | 2026-11-18 | 2026-11-18 | 在本机全部 DSH 会话日志（zstd 压缩 JSONL）里全文检索：这个话题在哪次会话聊过、当时怎么做的——找回散落在几十次会话里的解决方案 |
| 296 | [feely0208/dsh-tool-schema-lint](https://github.com/feely0208/dsh-tool-schema-lint) | 0 | 2026-11-18 | 2026-11-18 | 检查暴露给大模型的工具定义（tools 数组 / MCP 工具清单）：描述质量、schema 完整性、命名规范、与官方工具冲突、危险工具无确认说明——模型靠描述选工具，定义写得差=选错工具 |
| 297 | [femnn/dsh-markdown-docs](https://github.com/femnn/dsh-markdown-docs) | 0 | 2026-11-18 | 2026-11-18 | Markdown workbench for the DeepSeek Harness right sidebar: browse, preview, edit, drop files and folders in, and follow the documents a file references. |
| 298 | [femnn/dsh-plugin-yangmao](https://github.com/femnn/dsh-plugin-yangmao) | 0 | 2026-11-18 | 2026-11-18 | 薅羊毛情报看板 · DeepSeek Harness 插件：羊毛情报聚合、今日精选、三板块（雷达/VPS/Token）与智能体复核回写 |
| 299 | [fiatlux2333/dsh-Cicada](https://github.com/fiatlux2333/dsh-Cicada) | 0 | 2026-11-02 | 2026-11-19 | 蝉蜕 Cicada · DSH Windows 隐私维护插件，按未打卡时长分级清理浏览记录、补入假历史、删除指定文件夹、清理使用记录及卸载指定软件。默认演练。 |
| 300 | [flumpfox/dsh-knowledge-base](https://github.com/flumpfox/dsh-knowledge-base) | 0 | 2026-11-19 | 2026-11-19 | Local knowledge bases for the DSH agent — import Confluence Server/Data Center, search and cite articles with provenance. Jira and Obsidian planned. |
| 301 | [flydubaitower/dsh-dafeiyu-counter](https://github.com/flydubaitower/dsh-dafeiyu-counter) | 0 | 2026-11-18 | 2026-11-18 | A third conversation view for DeepSeek Harness: a full-state 2K character scene with a status sign, the latest reply on a desk, attachments and a workbench pill. Pure client UI, no network, MIT. |
| 302 | [flying-ovaltine/chronic-care-workbench](https://github.com/flying-ovaltine/chronic-care-workbench) | 0 | 2026-11-18 | 2026-11-18 | Patient-facing chronic care workbench for DSH: graded health profile, medication timeline, self-contained trend charts, red-flag alerts, pregnancy gate, four-level care advice. |
| 303 | [flying-ovaltine/dsh-taxscale](https://github.com/flying-ovaltine/dsh-taxscale) | 0 | 2026-11-19 | 2026-11-19 | TaxScale for DeepSeek Harness: enterprise and individual tax compliance diagnosis, voucher review, and tax computation/filing — three bundled skills. |
| 304 | [flying-ovaltine/endo-decision-workbench](https://github.com/flying-ovaltine/endo-decision-workbench) | 0 | 2026-11-18 | 2026-11-18 | Endocrinology decision workbench for DSH: dual-axis differential ranking with counter-evidence validation, six evidence grades, emergency red-flag interruption. |
| 305 | [foreverbelief/dsh-input-history-recall](https://github.com/foreverbelief/dsh-input-history-recall) | 0 | 2026-11-18 | 2026-11-18 | Double-press ArrowUp/ArrowDown in the DeepSeek Harness Web composer to recall this session's sent messages. |
| 306 | [freeman745/dsh-janction-render](https://github.com/freeman745/dsh-janction-render) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: render Blender scenes and 3D models on cloud GPUs with JANCTION Render (MCP server + workflow skill) |
| 307 | [fufufuwa/dsh-workspace-sync](https://github.com/fufufuwa/dsh-workspace-sync) | 0 | 2026-11-18 | 2026-11-18 | Automatically track and synchronize local project/workspace directory renames in DeepSeek Harness (dsh) via filesystem inode identity. |
| 308 | [fundapi-cn/fundapi-dsh-plugin](https://github.com/fundapi-cn/fundapi-dsh-plugin) | 0 | 2026-11-18 | 2026-11-18 | 基金数据 API 官方 DeepSeek Harness 插件 —— 输个包名即装，19 个基金工具（净值 / 持仓 / 调仓 / 经理 / 评级 / 排行 / 选基 / 组合穿透 / 分红 / 交易规则），免费工具无需 Key｜Official DeepSeek Harness plugin for the Fund Data API — 19 fund tools for AI agents (NAV, holdings, managers, ratings, screening), free tools need no key |
| 309 | [FYTG-Sprite/dsh-shenhai-skin](https://github.com/FYTG-Sprite/dsh-shenhai-skin) | 0 | 2026-11-18 | 2026-11-18 | Deep sea glass dynamic video wallpaper skin for DeepSeek Harness · 蜃海动态皮肤 |
| 310 | [FZZoooh/dsh-wolfram-mcp](https://github.com/FZZoooh/dsh-wolfram-mcp) | 0 | 2026-11-19 | 2026-11-19 | Connect a local Wolfram Mathematica kernel to DeepSeek Harness as an MCP tool server. |
| 311 | [Gaaaamu/dsh-interpreter](https://github.com/Gaaaamu/dsh-interpreter) | 0 | 2026-11-19 | 2026-11-19 | A DSH plugin that adds a shorter, easier-to-read version under every finished answer - side-channel rewrite, no prompt changes, no context pollution. |
| 312 | [gabsferreira/dsh-web-search-searchapi](https://github.com/gabsferreira/dsh-web-search-searchapi) | 0 | 2026-11-18 | 2026-11-18 | SearchApi search provider for the DeepSeek Harness web seam: web_search returns Google results as structured sources |
| 313 | [GameGeek-Saikel/dsh-superagent-remote](https://github.com/GameGeek-Saikel/dsh-superagent-remote) | 0 | 2026-11-19 | 2026-11-19 | Windows-side DeepSeek Harness plugin that runs and supervises dsh-superagent deployments inside WSL2: one workspace per GitHub repository, a chat page per workspace, and the upstream dt-column panel proxied to each deployment. |
| 314 | [ganglz1024/dsh-weather-matrix-widget](https://github.com/ganglz1024/dsh-weather-matrix-widget) | 0 | 2026-11-18 | 2026-11-18 | Floating pixel-matrix weather widget for the DeepSeek Harness Web UI: animated tile scene, hourly + 3-day forecast, city search, custom sizes and a minimized pill. |
| 315 | [GarinZ/dsh-sidebar-view](https://github.com/GarinZ/dsh-sidebar-view) | 0 | 2026-11-18 | 2026-11-18 | Time-bucket grouping (today/yesterday/this week/earlier) and status tabs for the DeepSeek Harness sidebar. Seats on the shipped workspace browser; any failure falls back to the shipped UI. |
| 316 | [gege9527/dsh-local-kb](https://github.com/gege9527/dsh-local-kb) | 0 | 2026-10-16 | 2026-11-19 | 给 DeepSeek Harness 的知识库与长期记忆插件：每轮自动带回记忆索引与项目地图，写入有护栏、改库自动体检、可选 WebDAV 备份 |
| 317 | [GhabiX/dsh-spinejit](https://github.com/GhabiX/dsh-spinejit) | 0 | 2026-11-19 | 2026-11-19 | Spine context management plugin for DeepSeek Harness (@spinejit/dsh-spinejit) — persistent subtask tree &amp; prefix-cache-friendly context compilation |
| 318 | [ginxiu0330-sketch/dsh-plugin-doctor](https://github.com/ginxiu0330-sketch/dsh-plugin-doctor) | 0 | 2026-11-18 | 2026-11-18 | Read-only health check for a DSH profile: plugin upgrade status, DSH compatibility, patch overrides and shadowed skills. |
| 319 | [GMLZYQZS/dsh-browser-favorites](https://github.com/GMLZYQZS/dsh-browser-favorites) | 0 | 2026-11-19 | 2026-11-19 | Favorites for DeepSeek Harness: a star in the conversation header that opens saved web pages as Browser tabs in the right sidebar. 对话标题栏的五角星收藏夹：把常看的网址一键开在右侧栏浏览器里。 |
| 320 | [golemkit/dsh-session-git](https://github.com/golemkit/dsh-session-git) | 0 | 2026-11-09 | 2026-11-19 | Session Git for DeepSeek Harness: a branch map for forked sessions, and /merge to bring a branch's work back into the main session. 会话 Git：分叉会话的分支地图，一键把分支成果合并回主会话。 |
| 321 | [goodjin/dsh-auto-resume](https://github.com/goodjin/dsh-auto-resume) | 0 | 2026-11-11 | 2026-11-18 | DSH 插件：桌面版启动后自动继续异常中断的会话（崩溃/退出/网络与限速错误按周期重试），用户主动停的永不续；账目路由 /auto-resume/health |
| 322 | [GrounzerLiu/dsh-plan-steps](https://github.com/GrounzerLiu/dsh-plan-steps) | 0 | 2026-11-16 | 2026-11-18 | Reasonix-style plan steps for DeepSeek Harness: two-level plans, one sign-off path, a live plan panel |
| 323 | [gucheng990615/dsh-token-usage-panel](https://github.com/gucheng990615/dsh-token-usage-panel) | 0 | 2026-11-18 | 2026-11-18 | Real-time token usage and account balance panel for DeepSeek Harness |
| 324 | [guopanei/dsh-default-workspace](https://github.com/guopanei/dsh-default-workspace) | 0 | 2026-11-19 | 2026-11-19 | A DeepSeek Harness plugin that gives new conversations a default workspace folder and archives each conversation into date folders as Codex-style JSONL rollouts. |
| 325 | [Haibo0223/dsh-mainbrain-prompt-optimizer](https://github.com/Haibo0223/dsh-mainbrain-prompt-optimizer) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness prompt optimizer: rewrite drafts into faithful, dispatch-ready task briefs, preview before replacing. |
| 326 | [hakudi-a/Eva_dsh_Asuka_Rei](https://github.com/hakudi-a/Eva_dsh_Asuka_Rei) | 0 | 2026-11-16 | 2026-11-18 | Two Evangelion palettes for the DeepSeek Harness Web UI: graphite and red for Asuka in dark mode, porcelain and blue for Rei in light mode. |
| 327 | [hanhan9999999999999999999/dsh-macro-memory](https://github.com/hanhan9999999999999999999/dsh-macro-memory) | 0 | 2026-11-19 | 2026-11-19 | 宏记忆 · Macro Memory — 一个 DSH 记忆插件接管全部记忆能力：8 个统一工具（schema 56,759 B → 8,655 B）、1,085 字符常驻注入、meow 七层主库 + 可重建星图，能力一条没砍。 |
| 328 | [HanochZhu/dsh-cam-plugin](https://github.com/HanochZhu/dsh-cam-plugin) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin for the local cam code graph and solution memory |
| 329 | [HanQing404/dsh-liuyao](https://github.com/HanQing404/dsh-liuyao) | 0 | 2026-11-19 | 2026-11-19 | 六爻纳甲解卦 for DeepSeek Harness：侧栏面板 + 三个 agent 工具（起卦 / 解卦 / 查典）。 |
| 330 | [Hao0311/dsh-model-price](https://github.com/Hao0311/dsh-model-price) | 0 | 2026-11-18 | 2026-11-18 | Peak / off-peak price clock for the model: a short passive system-prompt note telling the agent whether the DeepSeek API is in peak (2x) or off-peak (half-price) hours. |
| 331 | [Hao0311/dsh-sidebar-tidy](https://github.com/Hao0311/dsh-sidebar-tidy) | 0 | 2026-11-18 | 2026-11-18 | Collapse the DSH Web GUI sidebar into Plugins / Automations / More - every other panel row moves into a More menu, and new panels land there automatically. |
| 332 | [hbycwzm001/dsh-plugin-media-extract](https://github.com/hbycwzm001/dsh-plugin-media-extract) | 0 | 2026-11-18 | 2026-11-19 | DSH plugin: link -&gt; original video + caption + transcript (Douyin/XHS/TikTok/YouTube/FB/X/IG) |
| 333 | [hehuifeng/dsh-dreams](https://github.com/hehuifeng/dsh-dreams) | 0 | 2026-11-18 | 2026-11-18 | Dreaming memory for DeepSeek Harness: idle passes replay transcripts into quoted notes and a small always-injected brief |
| 334 | [heixiaolv/dsh-plugin-yu-comments](https://github.com/heixiaolv/dsh-plugin-yu-comments) | 0 | 2026-11-19 | 2026-11-19 | DSH sidebar plugin: comment archive + profile panel from a local HTTP service |
| 335 | [hentai-joshu/dsh-narration-policy](https://github.com/hentai-joshu/dsh-narration-policy) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：全局注入 Codex 风格的过程汇报(Preamble)系统提示词 |
| 336 | [Heqianhong1114/dsh-work-cards](https://github.com/Heqianhong1114/dsh-work-cards) | 0 | 2026-11-19 | 2026-11-19 | Floating desktop cards for DeepSeek Harness — see what each session is doing, right on your desktop. Windows only.把 DSH 每个会话变成桌面置顶小卡片：现在在做什么、走到第几步、跑了多久、有没有卡住。只读本地会话日志，不联网不上传。Windows 专用。 |
| 337 | [Heroicus/dsh-thread-tools](https://github.com/Heroicus/dsh-thread-tools) | 0 | 2026-11-19 | 2026-11-19 | Codex-compatible thread coordination for DeepSeek Harness: ten tools to list, read, wait on, message, create, fork, rename, archive and delete sessions. |
| 338 | [hexiaobai2012/gongwen-writer](https://github.com/hexiaobai2012/gongwen-writer) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 中文公文写作插件：首轮检索与框架候选、GB/T 9704 Word、实时打磨稿、逐段逐句推敲、官方来源事实核查与项目记忆。 |
| 339 | [Hieupt1904/project-flow-explainer](https://github.com/Hieupt1904/project-flow-explainer) | 0 | 2026-11-19 | 2026-11-19 | Skill agent: đọc repository mã nguồn và dựng sơ đồ quy trình HTML tương tác, mở offline, có căn cứ file/dòng \| Read a codebase, trace a flow, render a self-contained interactive HTML workflow diagram |
| 340 | [HitMargin/dsh-sticky-wall](https://github.com/HitMargin/dsh-sticky-wall) | 0 | 2026-11-18 | 2026-11-18 | 在左侧栏加入「便签墙」入口，打开一个随手记便签、按颜色区分、删除可撤销的面板。 |
| 341 | [hningy/dsh-session-auto-title](https://github.com/hningy/dsh-session-auto-title) | 0 | 2026-11-19 | 2026-11-19 | Automatic conversation-wide session titles for DeepSeek Harness — retitles sessions as the topic evolves, with a Settings page for the switch and cadence. |
| 342 | [hongcha-dsh/dsh-dev-plan-presets](https://github.com/hongcha-dsh/dsh-dev-plan-presets) | 0 | 2026-11-18 | 2026-11-18 | 开发规划与交付模式：DSH 开发规划与交付 preset 包 |
| 343 | [HosheaLi/dsh-workspace-capabilities](https://github.com/HosheaLi/dsh-workspace-capabilities) | 0 | 2026-11-19 | 2026-11-19 | Per-workspace control over which skills the model auto-loads and which MCP servers stay hidden in DeepSeek Harness |
| 344 | [howtomakeaname/dsh-memory-service](https://github.com/howtomakeaname/dsh-memory-service) | 0 | 2026-11-17 | 2026-11-19 | Long-term memory plugin for DeepSeek Harness. |
| 345 | [hrrrb408/lm-memory](https://github.com/hrrrb408/lm-memory) | 0 | 2026-10-31 | 2026-11-18 | 本地优先的 Agent 长期记忆（MCP server + DSH 插件）：SQLite+FTS5+双语本地嵌入，会遗忘、可纠正、带证据回查。Local-first long-term memory for AI agents. |
| 346 | [HScoffeeK/dsh-opencode-quota](https://github.com/HScoffeeK/dsh-opencode-quota) | 0 | 2026-11-18 | 2026-11-18 | OpenCode Go quota in the DSH right sidebar: per-model monthly caps, shared 5h/week/month allowance, and an opencode_quota tool. |
| 347 | [huiyaoxingkong/dsh-plugin-minecraft-devtest](https://github.com/huiyaoxingkong/dsh-plugin-minecraft-devtest) | 0 | 2026-11-18 | 2026-11-18 | Client-free Minecraft mod &amp; datapack development/testing harness for DeepSeek Harness (DSH): headless servers 1.7.10-26.4, RCON assertions, Mineflayer + built-in legacy/26.x protocol bots, YAML test cards, one-call quick checks. |
| 348 | [hypershub/dsh-panorama-mode](https://github.com/hypershub/dsh-panorama-mode) | 0 | 2026-11-19 | 2026-11-19 | 全景模式 · Panorama mode — Live AI execution visualization for DeepSeek Harness / Hypers Work: reasoning, tools, task progress, particle orb and automatic themes. |
| 349 | [iambubu0523/dsh-turbo](https://github.com/iambubu0523/dsh-turbo) | 0 | 2026-11-16 | 2026-11-18 | Codex-style Fast Mode for DeepSeek Harness — per-session service_tier priority, honest A/B probing, real TTFT metrics. |
| 350 | [iamjager416/dsh-pixiv-autodownload](https://github.com/iamjager416/dsh-pixiv-autodownload) | 0 | 2026-11-17 | 2026-11-18 | Incremental Pixiv downloader for a fixed artist list - DSH plugin |
| 351 | [iceship-wheels/dsh-kanban](https://github.com/iceship-wheels/dsh-kanban) | 0 | 2026-11-05 | 2026-11-18 | Kanban board plugin for the DeepSeek Harness sidebar |
| 352 | [imCBW/dsh-session-strip](https://github.com/imCBW/dsh-session-strip) | 0 | 2026-11-18 | 2026-11-18 | Session strip above the composer for DeepSeek Harness: live status, sub-agents, token usage and unfinished marks. |
| 353 | [InsaneGenji/dsh-safe-restart](https://github.com/InsaneGenji/dsh-safe-restart) | 0 | 2026-11-18 | 2026-11-18 | 给 DeepSeek Harness 桌面端托盘加「重启」项：有任务在跑时先弹原生确认框（标题与按钮都是「重启」） |
| 354 | [ipfans/dsh-prompt-hitchhiker](https://github.com/ipfans/dsh-prompt-hitchhiker) | 0 | 2026-11-18 | 2026-11-18 | 将prompt模板注入dsh系统提示中，内置Ponytail。Inject named prompt templates into the DeepSeek Harness system prompt, resolved by workspace and by model. Ships with Ponytail and its five companion skills. |
| 355 | [iStarryDust/everwith](https://github.com/iStarryDust/everwith) | 0 | 2026-11-18 | 2026-11-19 | DSH 情绪插件（fork 自 dsh-fish-mood）：三层心情——性格 traits / 心情 mood / 情绪 emotion，会自己衰减、反刍、因小事起伏。附带 mood_now / mood_feel / mood_diary 三个工具。 |
| 356 | [IyNew/dsh-workspace-pin](https://github.com/IyNew/dsh-workspace-pin) | 0 | 2026-11-19 | 2026-11-19 | Pin workspaces from the DSH workspace menu so they lead the workspace list — a DeepSeek Harness plugin. |
| 357 | [Jack-Brown-ndhd/MacVibe-Theme](https://github.com/Jack-Brown-ndhd/MacVibe-Theme) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 的 macOS / Apple HIG 外观插件：9 套配色 + 自定义主色、磨砂云顶、色彩浓度、背景与提示音。Appearance-only plugin for DSH. |
| 358 | [jacksonw111/shipping-workbench](https://github.com/jacksonw111/shipping-workbench) | 0 | 2026-11-13 | 2026-11-19 | 船期数据工作台:公众号采集、AI 热点、船期新旧对比(Excel/PDF + AI 复核)、轨迹合理性检测(塞港数据 + 模型判定)。DeepSeek Harness 插件。 |
| 359 | [JanSu0104/dsh-cosmogram](https://github.com/JanSu0104/dsh-cosmogram) | 0 | 2026-11-19 | 2026-11-19 | Cosmogram · 命理解读助手 一个给 DeepSeek Harness 用的传统文化解读插件，同时附带一套可粘贴到任意大模型的通用提示词。  覆盖：紫微斗数 / 八字四柱 / 六爻 / 奇门遁甲 / 风水 / 塔罗 / 星座星盘 / 姓名学 / 择日。 |
| 360 | [JayDataEngineer/melite](https://github.com/JayDataEngineer/melite) | 0 | 2026-10-02 | 2026-11-19 | Melite — an agent media-creation kit: cards on a shared bench, one validated run at a time, ComfyUI behind the engines contract. DSH + Cordis + TypeScript. |
| 361 | [JayF4n/dsh-poe-cn-guide](https://github.com/JayF4n/dsh-poe-cn-guide) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 技能：用流亡编年史（poedb.tw）术语把流放之路构筑攻略译成中文。内置 3134 条中英对照、宝石真实插槽颜色（红/绿/蓝/白），可一键导出 Excel。 |
| 362 | [JERRY-hub26/dsh-claude-pet](https://github.com/JERRY-hub26/dsh-claude-pet) | 0 | 2026-11-19 | 2026-11-19 | A chibi companion for the DeepSeek Harness web UI that stays on your desktop when the window is minimised. |
| 363 | [Jessicaisleep/dsh-mihome](https://github.com/Jessicaisleep/dsh-mihome) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: control Mi Home (米家) devices through mijiaAPI — device tiles, device detail pages, scenes and consumables in a sidebar workbench. · 通过 mijiaAPI 控制米家设备的 DSH 插件，侧栏工作台复刻米家 App 的设备页。 |
| 364 | [Jessicaisleep/dsh-windows-toolbox](https://github.com/Jessicaisleep/dsh-windows-toolbox) | 0 | 2026-11-18 | 2026-11-18 | WINDOWS toolbox for DeepSeek Harness: 11 Windows registration points plus 25 maintenance capabilities, all local, every write a dry run first. |
| 365 | [jh0oo/dsh-session-purge](https://github.com/jh0oo/dsh-session-purge) | 0 | 2026-11-19 | 2026-11-19 | Select sessions in the workspace list and delete them into a recycle bin that restores byte-for-byte. DSH plugin. |
| 366 | [JiaLe1145/dsh-plugin-git-history](https://github.com/JiaLe1145/dsh-plugin-git-history) | 0 | 2026-11-18 | 2026-11-18 | Git commit history panel for the DeepSeek Harness right sidebar: graph lanes, date-ordered commits, refs, and colored per-file diffs. |
| 367 | [jidekaixin2dian/dsh-factmesh](https://github.com/jidekaixin2dian/dsh-factmesh) | 0 | 2026-11-18 | 2026-11-18 | Reconcile PowerPoint report figures with Excel evidence in DeepSeek Harness. |
| 368 | [JingYu-er/dsh-ecad](https://github.com/JingYu-er/dsh-ecad) | 0 | 2026-11-17 | 2026-11-19 | DSH-插件：通过kicad和tscircuit无头绘制原理图和pcb,自动完成校验，并一键导出gerber，step文件\|DSH Plugin: Headlessly draw schematics and PCBs with KiCad and TSCircuit, automatically complete validation, and export Gerber and STEP files with one click. |
| 369 | [joker553/dsh-artex-ops](https://github.com/joker553/dsh-artex-ops) | 0 | 2026-11-18 | 2026-11-18 | 对话式 ARTEX 渗透编排层：DSH 插件 / CLI / MCP（mission、意图队列、双图、攻击链断言、OAST、覆盖矩阵、热重载） |
| 370 | [jozhn/dsh-webmate](https://github.com/jozhn/dsh-webmate) | 0 | 2026-11-17 | 2026-11-18 | DSH网页助手，读取、操作右边栏的网页 |
| 371 | [justjump/dsh-workspace-sort-fix](https://github.com/justjump/dsh-workspace-sort-fix) | 0 | 2026-11-19 | 2026-11-19 | DSH sidebar fix: make “Sort by → Last updated” actually reorder workspace groups, not just sessions inside them |
| 372 | [jxligui/dsh-plugin-deepseek-chat](https://github.com/jxligui/dsh-plugin-deepseek-chat) | 0 | 2026-11-16 | 2026-11-19 | DeepSeek Chat panel for DeepSeek Harness (DSH): a left-navigation entry plus a right-Sidebar panel embedding chat.deepseek.com, with configurable sidebar visibility. |
| 373 | [jxligui/dsh-plugin-fund-tracker](https://github.com/jxligui/dsh-plugin-fund-tracker) | 0 | 2026-11-18 | 2026-11-18 | 基金小助理：DeepSeek Harness（DSH）基金与行情悬浮面板插件 |
| 374 | [jyz48prsbr-netizen/dsh-llm-effort-zh](https://github.com/jyz48prsbr-netizen/dsh-llm-effort-zh) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: dsh-llm-effort-zh |
| 375 | [jyz48prsbr-netizen/dsh-my-rules](https://github.com/jyz48prsbr-netizen/dsh-my-rules) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: dsh-my-rules |
| 376 | [jyz48prsbr-netizen/dsh-plugin-autoupdate](https://github.com/jyz48prsbr-netizen/dsh-plugin-autoupdate) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: dsh-plugin-autoupdate |
| 377 | [jyz48prsbr-netizen/dsh-sidebar-entry-toggle](https://github.com/jyz48prsbr-netizen/dsh-sidebar-entry-toggle) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: dsh-sidebar-entry-toggle |
| 378 | [jyz48prsbr-netizen/dsh-web-link](https://github.com/jyz48prsbr-netizen/dsh-web-link) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: dsh-web-link |
| 379 | [kadaliao/dsh-archify](https://github.com/kadaliao/dsh-archify) | 0 | 2026-11-19 | 2026-11-19 | Archify for DeepSeek Harness: checked, interactive diagrams and one-page explainers in the conversation, with architecture diagrams laid out by the plugin. |
| 380 | [kadaliao/dsh-atlas](https://github.com/kadaliao/dsh-atlas) | 0 | 2026-11-18 | 2026-11-19 | Your photo library on a globe, in DeepSeek Harness: footprints, trips, story mode, on this day, and a model that can search your photos and move the map. |
| 381 | [kadaliao/dsh-images](https://github.com/kadaliao/dsh-images) | 0 | 2026-11-18 | 2026-11-18 | Images for DeepSeek Harness: a generate_image tool backed by your provider's image model, and a gallery of everything drawn. |
| 382 | [kadaliao/dsh-prompt-en](https://github.com/kadaliao/dsh-prompt-en) | 0 | 2026-11-18 | 2026-11-18 | Prompt EN for DeepSeek Harness: English under every prompt, a translation or a review, and a vocabulary book. |
| 383 | [kangronghuuu/dsh-remote-control](https://github.com/kangronghuuu/dsh-remote-control) | 0 | 2026-11-16 | 2026-11-19 | DSH remote control plugin: phone web UI, HITL approvals, file preview, out-of-band notifications, device-to-device fabric |
| 384 | [KazeLiu/codex-dsh-dispatch](https://github.com/KazeLiu/codex-dsh-dispatch) | 0 | 2026-11-17 | 2026-11-19 | A local MCP bridge for delegating tasks to native DeepSeek Harness sessions. |
| 385 | [kbr19930409/kk-deep-factory](https://github.com/kbr19930409/kk-deep-factory) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 工厂 AI 同事。查看三维车间与设备 OEE，由工厂总管协调短停分析、维修方案与工单跟踪。 |
| 386 | [keerzzz/dsh-wechat-ro](https://github.com/keerzzz/dsh-wechat-ro) | 0 | 2026-11-19 | 2026-11-19 | WeChat history workspace for DeepSeek Harness (DSH), targeting Windows, macOS &amp; Linux. Search, daily insight cards and read-only MCP. 面向三平台的微信历史整理。 |
| 387 | [kenneth-kun/dsh-one-click-launcher](https://github.com/kenneth-kun/dsh-one-click-launcher) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness (DSH) 插件：一键生成 macOS .app / Windows .lnk / Linux .desktop，双击启动 dsh web。 |
| 388 | [keycapai/dsh-plugin-updater](https://github.com/keycapai/dsh-plugin-updater) | 0 | 2026-11-19 | 2026-11-19 | Keeps DeepSeek Harness plugins current: registry update checks plus zero-restart hot reload for locally-developed plugins. |
| 389 | [keycapai/dsh-prompt-aio](https://github.com/keycapai/dsh-prompt-aio) | 0 | 2026-11-19 | 2026-11-19 | DSH Prompt AIO — one command installs four DeepSeek Harness control plugins: tool surface, system prompt, and skill catalog. |
| 390 | [keycapai/dsh-system-notify](https://github.com/keycapai/dsh-system-notify) | 0 | 2026-11-19 | 2026-11-19 | Native desktop notifications for DeepSeek Harness — know when your agent finishes or needs you. |
| 391 | [kiritoko1029/dsh-multi-agent](https://github.com/kiritoko1029/dsh-multi-agent) | 0 | 2026-11-13 | 2026-11-18 | Prompt-routed DSH, Codex, Kimi Code, and Antigravity (agy) subagent delegation for DeepSeek Harness. |
| 392 | [koishi-fumo-code/dsh-whale-paywall](https://github.com/koishi-fumo-code/dsh-whale-paywall) | 0 | 2026-11-19 | 2026-11-19 | Simulated paywall + coin mall for DeepSeek Harness. Charges whale coins for 7 actions and puts a mall inside Settings. No real money involved. |
| 393 | [KonnectSuite/dsh-engineering](https://github.com/KonnectSuite/dsh-engineering) | 0 | 2026-10-23 | 2026-11-19 | Automation-engineering tools, skills and file viewers for DeepSeek Harness (AryaCode): Studio 5000 L5X, FactoryTalk View ME, FactoryTalk Optix, MotionWorks IEC, ECAD prints, RSLogix 5 reads and SLC 500/PLC-5 to Logix migration - one install, one row per toolchain, every component in beta. |
| 394 | [kpbl95946-art/dsh-connect-cursor-pro](https://github.com/kpbl95946-art/dsh-connect-cursor-pro) | 0 | 2026-11-18 | 2026-11-18 | Use the models from your locally logged-in Cursor desktop app directly in DeepSeek Harness (dsh) — no separate API key. |
| 395 | [KunChiang/dsh-kit-forecast](https://github.com/KunChiang/dsh-kit-forecast) | 0 | 2026-11-19 | 2026-11-19 | 用 KiT 扩散模型对任意 A 股做多周期概率预测：不是单一涨跌，而是一族未来路径 |
| 396 | [kzzzt/dsh-chat-manager](https://github.com/kzzzt/dsh-chat-manager) | 0 | 2026-10-24 | 2026-11-18 | Personal fork of WSL043/dsh-chat-manager v1.5.18 - compatible with DeepSeek Harness 0.2.1-rc.3 (DSH chat history &amp; session manager) |
| 397 | [la-sandrone/mcp-cronopios](https://github.com/la-sandrone/mcp-cronopios) | 0 | 2026-10-04 | 2026-11-18 | 五个 MCP 服务器，专治 LLM 的瞎编：任意精度计算 · 真随机分布 · 符号求解 · 语法检查 · 带坐标系的文件系统 |
| 398 | [la-sandrone/mcp-melquiades](https://github.com/la-sandrone/mcp-melquiades) | 0 | 2026-10-03 | 2026-11-18 | DSH 会话的草稿纸 + 压缩档案回查 —— 一个由 MariaDB 支撑的 MCP 服务器。 |
| 399 | [la-sandrone/mcp-pergaminos](https://github.com/la-sandrone/mcp-pergaminos) | 0 | 2026-10-03 | 2026-11-18 | Los pergaminos de Melquíades，仅供娱乐，用来查询OA文献的MCP |
| 400 | [la-sandrone/memoria-del-hielo](https://github.com/la-sandrone/memoria-del-hielo) | 0 | 2026-09-21 | 2026-11-18 | 自用RAG知识库系统，仅供娱乐！ |
| 401 | [Lahm919/dsh-hindsight-keys](https://github.com/Lahm919/dsh-hindsight-keys) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: manage the Hindsight daemon LLM key pool (add/enable/rotate keys, round-robin or failover) from the settings page |
| 402 | [lalalawang/dsh-quit-restart](https://github.com/lalalawang/dsh-quit-restart) | 0 | 2026-11-18 | 2026-11-18 | One-click quit-and-relaunch button for DeepSeek Harness Desktop (Windows). 侧边栏一键退出并重启 DSH。 |
| 403 | [lamervon/dsh-spider-solitaire](https://github.com/lamervon/dsh-spider-solitaire) | 0 | 2026-11-19 | 2026-11-19 | Spider Solitaire for the DeepSeek Harness right Sidebar |
| 404 | [LaoLiang-agent/HarnessKit](https://github.com/LaoLiang-agent/HarnessKit) | 0 | 2026-11-17 | 2026-11-18 | Multi-agent engineering workflow for DeepSeek Harness (DSH): seven roles, four flow profiles, human approval gates, guards, and a git asset repository that accumulates specs and memory with every archived task. |
| 405 | [Lee2277-t/dsh-resolve](https://github.com/Lee2277-t/dsh-resolve) | 0 | 2026-11-18 | 2026-11-18 | DaVinci Resolve timeline authoring for DeepSeek Harness: one declarative edit spec in, an importable .fcpxml out (and a live Studio scripting backend when available). |
| 406 | [Lee2277-t/pbip-forge](https://github.com/Lee2277-t/pbip-forge) | 0 | 2026-11-18 | 2026-11-18 | Create complete Power BI projects (.pbip) directly: TMDL semantic models, DAX measures, relationships, PBIR pages and native visuals. CLI, MCP server and DeepSeek Harness plugin. |
| 407 | [LeiSureYu/dsh-chat](https://github.com/LeiSureYu/dsh-chat) | 0 | 2026-11-19 | 2026-11-19 | DSH 纯对话模式插件：零编码工具的 chat preset、独立 chat 工作区自动归组；对话界面全部由官方 UI 呈现，显示文案中英双语。 |
| 408 | [lfys/dsh-wsl-overlay](https://github.com/lfys/dsh-wsl-overlay) | 0 | 2026-11-18 | 2026-11-18 | Transparent WSL takeover for DSH - agent bash, file and search tools run inside the distro under the same tool names.dsh-plugin |
| 409 | [LianyeSheng/dsh-hyprscope](https://github.com/LianyeSheng/dsh-hyprscope) | 0 | 2026-11-18 | 2026-11-19 | Hyprland desktop observation and consent-gated control for AI agents — screenshots, events and UI plans behind a consent lease, with a native DeepSeek Harness (DSH) plugin. |
| 410 | [LianYuyuyuyuyu/dsh-my-prompt-polish](https://github.com/LianYuyuyuyuyu/dsh-my-prompt-polish) | 0 | 2026-11-19 | 2026-11-19 | A polish button beside the DSH composer: rewrite the draft with your own rule and model, click again to restore the original. |
| 411 | [liaoshaohua123/dsh-plugin-taskbar-flash](https://github.com/liaoshaohua123/dsh-plugin-taskbar-flash) | 0 | 2026-11-18 | 2026-11-18 | Windows-only DeepSeek Harness plugin: reminder sounds on turn completion, questions and approvals, plus taskbar flashing while DSH runs in the background. Ten built-in sounds, your own audio files, and a built-in trim studio. |
| 412 | [lichufeng123/dsh-public-qa-plugins](https://github.com/lichufeng123/dsh-public-qa-plugins) | 0 | 2026-11-18 | 2026-11-18 | Public DSH bundles for portable requirement review and local synthetic fixture generation. |
| 413 | [lijianbin2/dsh-next-auto-update](https://github.com/lijianbin2/dsh-next-auto-update) | 0 | 2026-11-19 | 2026-11-19 | Left-sidebar page that updates every registry-installed DSH plugin and DSH NEXT itself when the app opens. |
| 414 | [lin0306/mind](https://github.com/lin0306/mind) | 0 | 2026-11-03 | 2026-11-19 | 给 DSH 里的 agent 一套延续的内在：人设 / 情感 / 记忆 / 思想，由一个自更新闭环串起来。状态全部由会话日志折叠而来（可回放），产物零运行时依赖。 |
| 415 | [LinkADSL/dsh-wechat-clawbot-access](https://github.com/LinkADSL/dsh-wechat-clawbot-access) | 0 | 2026-11-19 | 2026-11-19 | Pure-script WeChat ClawBot bridge for DeepSeek Harness: open the DSH Web UI on a phone via IPv6 + SSH tunnel, with QR login, owner approval and access-info pushes. No Agent or LLM tokens. |
| 416 | [lishibin/dsh-session-ledger](https://github.com/lishibin/dsh-session-ledger) | 0 | 2026-11-19 | 2026-11-19 | Provenance-aware, user-confirmed long-term memory plugin for DeepSeek Harness |
| 417 | [liuhange789/dsh-client-deliverable-pipeline](https://github.com/liuhange789/dsh-client-deliverable-pipeline) | 0 | 2026-11-18 | 2026-11-18 | Markdown to client-grade printable HTML report inside DSH: cover page, brand colour, TOC, A4 print pagination rules. |
| 418 | [liuhange789/dsh-design-audit-to-code](https://github.com/liuhange789/dsh-design-audit-to-code) | 0 | 2026-11-18 | 2026-11-18 | AST-based design-system audit that returns a unified diff: hardcoded hex colours become var(--color-*) tokens; deprecated components are flagged. |
| 419 | [liuhange789/dsh-geo-report-to-fix](https://github.com/liuhange789/dsh-geo-report-to-fix) | 0 | 2026-11-18 | 2026-11-18 | GEO audit to fix pack inside DSH: fetch a URL, score AI-search friendliness, then write ready-to-paste llms.txt and jsonld.html. |
| 420 | [liuhange789/dsh-incident-full-chain](https://github.com/liuhange789/dsh-incident-full-chain) | 0 | 2026-11-18 | 2026-11-18 | Incident full chain inside DSH: on-call triage, mitigation timeline, and an auto-generated postmortem.md with MTTR. |
| 421 | [liuyuxuan6666/dsh-plugin-finder](https://github.com/liuyuxuan6666/dsh-plugin-finder) | 0 | 2026-11-19 | 2026-11-19 | Search box for the DeepSeek Harness Plugins page: Ctrl+F to focus, filter by title/description/package name, Enter to open. 给 DSH「插件」页加一条 Ctrl+F 搜索框。 |
| 422 | [lizhihe-x/dsh-lzh-pet](https://github.com/lizhihe-x/dsh-lzh-pet) | 0 | 2026-11-19 | 2026-11-19 | 在侧边栏用量卡片附近活动的一只小桌宠：自己随机演小动作，点一下会回应，按住可以拖到范围里任意位置。 |
| 423 | [lkyxuan/dsh-kiki](https://github.com/lkyxuan/dsh-kiki) | 0 | 2026-11-19 | 2026-11-19 | Kiki for DeepSeek Harness: install Kiki from inside DSH, see DSH sessions as cards in Kiki, hand tasks to Kiki's team |
| 424 | [llifco/dsh-plugin-reverse-proxy](https://github.com/llifco/dsh-plugin-reverse-proxy) | 0 | 2026-11-09 | 2026-11-18 | DSH 网页界面局域网访问插件：内置反向代理 + 免 Token 登录（内网穿透替代方案），手机/平板/另一台电脑同 Wi-Fi 直接打开后台，支持 WebSocket 流式输出。默认只监听本机 127.0.0.1，需显式开启开关，监听端口可自定义。仅 WebUI 可用，桌面客户端自动休眠。 |
| 425 | [lnqxyz/dsh-recent-tasks](https://github.com/lnqxyz/dsh-recent-tasks) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 侧栏「最近任务」面板：正在运行 / 收藏 / 未读 / 已完成四区，点 + 在记住的文件夹里开新会话 |
| 426 | [loaf/dsh-resource-radar](https://github.com/loaf/dsh-resource-radar) | 0 | 2026-11-17 | 2026-11-18 | Resource Radar (资源雷达) — a freebie/deal/open-source/news radar workbench plugin for DeepSeek Harness, with a Host-side CORS-free RSS collector. |
| 427 | [lock-down/dsh-capability-switch](https://github.com/lock-down/dsh-capability-switch) | 0 | 2026-11-18 | 2026-11-18 | A DSH sidebar plugin for managing Skills and MCP servers, with symlink sync and app import. |
| 428 | [LokiBendi-Dev/dsh-file-changes](https://github.com/LokiBendi-Dev/dsh-file-changes) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: review every file your AI changed as diffs, and get any line explained in plain language. |
| 429 | [LoneSigma1998/dsh-dynamic-workflow](https://github.com/LoneSigma1998/dsh-dynamic-workflow) | 0 | 2026-11-19 | 2026-11-19 | Typechecked TypeScript multi-agent dynamic workflow plugin for DeepSeek Harness (DSH), ported from ZCode (Apache-2.0) |
| 430 | [loterme/dsh-sedentary-reminder](https://github.com/loterme/dsh-sedentary-reminder) | 0 | 2026-11-19 | 2026-11-19 | 久坐提醒：输入框下方的久坐计时胶囊 + 从底部滑出的起身卡片。A quiet sitting timer for DSH: a pill under the composer and a bottom card that invites you to stand up and move. |
| 431 | [lunnlew/dsh-wsl-desktop](https://github.com/lunnlew/dsh-wsl-desktop) | 0 | 2026-11-19 | 2026-11-19 | 让 DSH Desktop 窗口本身跑在 WSL 里的 DSH Host 上 |
| 432 | [LXMH1982/dsh-windows-agents](https://github.com/LXMH1982/dsh-windows-agents) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：在设置里编辑每个会话都会加载的用户全局 AGENTS.md。 |
| 433 | [Lzm1645/dsh-email](https://github.com/Lzm1645/dsh-email) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：通过 Mail.app 读写/搜索/发送邮件（发送默认关闭） |
| 434 | [Lzm1645/dsh-miloco](https://github.com/Lzm1645/dsh-miloco) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：小米 Miloco（米家）设备工具 + 本地控制面板 |
| 435 | [m-f-vip/ugi-font](https://github.com/m-f-vip/ugi-font) | 0 | 2026-11-19 | 2026-11-19 | 中文标题字 text-mask 批量出图：智能 tag 选字体，32 位 RGBA 白字透明底 PNG，按「国」字光学校正，自动裁边后四周精确补 3px。Chinese title text mask batch drawing: intelligent tag font selection, 32-bit RGBA white text transparent background PNG, press the "country" character to highlight the school, automatically trim the edges and accurately fill in 3px around the edges. |
| 436 | [MacilyDots/dsh-session-rescue](https://github.com/MacilyDots/dsh-session-rescue) | 0 | 2026-11-18 | 2026-11-19 | DSH 会话可靠性套件：推理退化熔断、空轮重试、原始流记录、干净会话继承与 Ctrl+Shift+R 前端刷新。Session reliability kit for DeepSeek Harness. |
| 437 | [madsouris/dsh-figcraft](https://github.com/madsouris/dsh-figcraft) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness bundle for the FigCraft desktop app: on-demand MCP attach with live edits. |
| 438 | [mahaoboy/memalyze](https://github.com/mahaoboy/memalyze) | 0 | 2026-10-18 | 2026-11-19 | Self-hosted MCP memory for AI agents: redaction before write, append-only audit, local embeddings, one static binary. |
| 439 | [maikaojai/dsh-plugin-reading-os](https://github.com/maikaojai/dsh-plugin-reading-os) | 0 | 2026-11-13 | 2026-11-19 | A calm, local-first Apple Books highlights dashboard &amp; reader companion for DeepSeek Harness. |
| 440 | [Makimasdog/dsh-conversation-context](https://github.com/Makimasdog/dsh-conversation-context) | 0 | 2026-11-18 | 2026-11-18 | Session-local tools, skills, and system prompt controls for DeepSeek Harness. |
| 441 | [mans8/dsh-ai-workbench](https://github.com/mans8/dsh-ai-workbench) | 0 | 2026-11-19 | 2026-11-19 | AI 工作台账：DSH 个人工作台账插件（待办顺延、工时核算、报表归档，数据全部留在本机） |
| 442 | [mantonlove/dsh-saynext](https://github.com/mantonlove/dsh-saynext) | 0 | 2026-11-18 | 2026-11-18 | DSH composer plugin: drafts your next line after each turn; first Enter fills the input, second Enter sends. |
| 443 | [maxlee/dsh-prompt-manage](https://github.com/maxlee/dsh-prompt-manage) | 0 | 2026-11-17 | 2026-11-19 | Reuse prompts you have typed across DeepSeek Harness conversations: a searchable palette beside the model selector in the composer, a magic-wand optimizer that rewrites the current draft, and a searchable sidebar history page. |
| 444 | [maxlee/dsh-token-receipt](https://github.com/maxlee/dsh-token-receipt) | 0 | 2026-11-14 | 2026-11-19 | Print daily, weekly, monthly, 30-day, 90-day, or all-time token usage and estimated model costs as a receipt, with clipboard copy and PNG export. |
| 445 | [Maxwelltoo/dsh-live-pixel](https://github.com/Maxwelltoo/dsh-live-pixel) | 0 | 2026-11-18 | 2026-11-18 | Four animated pixel-art scenes for DeepSeek Harness, rendered in real time with WebGL. |
| 446 | [Maybe-Zero-not-one/dsh-ai-credits](https://github.com/Maybe-Zero-not-one/dsh-ai-credits) | 0 | 2026-11-19 | 2026-11-19 | 自由额度与积分聚合 + API 价格表 + 按模型折算本机 token 花费（峰谷价 / 缓存命中 / fork 去重 / 官方 CSV 对账） |
| 447 | [mayuri-wylty/dsh-feiyu-xiaozhi-esp32](https://github.com/mayuri-wylty/dsh-feiyu-xiaozhi-esp32) | 0 | 2026-11-11 | 2026-11-19 | 大肥鱼（dsh-feiyu）DSH 插件：小智 ESP32-S3 语音终端 + B站/QQ/微信/抖音多平台 AI 陪伴角色，支持 GPT-SoVITS 语音克隆、火山引擎 ASR/TTS |
| 448 | [MBSF-Yifan/mbsf-compaction](https://github.com/MBSF-Yifan/mbsf-compaction) | 0 | 2026-11-16 | 2026-11-19 | 结构即语义——未必科幻压缩引擎 \| DSH 插件（dsh-plugin）· DeepSeek Harness 上下文压缩 |
| 449 | [McMorsh/ChipDeck](https://github.com/McMorsh/ChipDeck) | 0 | 2026-11-19 | 2026-11-19 | Always-on-top Windows overlay with pluggable features and a DSH agent panel. |
| 450 | [Meng-XinXue/bettergui](https://github.com/Meng-XinXue/bettergui) | 0 | 2026-11-19 | 2026-11-19 | dsh插件，为提供简洁的界面和观景效果而设计 |
| 451 | [mengqi1436/dsh-postapi](https://github.com/mengqi1436/dsh-postapi) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: Apifox-style API workspace (docs, debug, mock, schema, env, history, tests, import/export, flow, search) in the official right sidebar |
| 452 | [miaokingsoft/Doomsday-Game-ember-radio-skill](https://github.com/miaokingsoft/Doomsday-Game-ember-radio-skill) | 0 | 2026-11-18 | 2026-11-18 | Enter and play the shared post-apocalyptic world of Ember Radio (server-authoritative; outcomes are never decided by the AI). Use when the user says "Enter Ember Radio", "Continue my apocalypse, where am I now", or asks to play a shared-world survival narrative. |
| 453 | [Mingtian-Lii/dsh-wechat-skin](https://github.com/Mingtian-Lii/dsh-wechat-skin) | 0 | 2026-11-18 | 2026-11-19 | WeChat-style theme for the DeepSeek Harness Web GUI |
| 454 | [mizuki5101/dsh-latex-render-fix](https://github.com/mizuki5101/dsh-latex-render-fix) | 0 | 2026-11-19 | 2026-11-19 | 让 dsh 正确渲染 $$\\begin{aligned}…$$ 这类 LaTeX 写法：启动时自动打解析前规范化补丁，随升级自动重打 |
| 455 | [mjnhmd/dsh-zspace](https://github.com/mjnhmd/dsh-zspace) | 0 | 2026-11-19 | 2026-11-19 | 极空间 NAS 的 DeepSeek Harness 插件：90 工具 MCP（复用客户端本地代理会话）+ 官方连接器 + 7 个 NAS skill |
| 456 | [mlaimail77/genkaku](https://github.com/mlaimail77/genkaku) | 0 | 2026-11-19 | 2026-11-19 | DSH (DeepSeek Harness) worker &amp; user plugins, libp2p inference and Solana USDC contracts |
| 457 | [mloluyu/dsh-session-notify](https://github.com/mloluyu/dsh-session-notify) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: in-app cards &amp; page-raised system notifications when a session finishes. Client-only, zero dependencies. |
| 458 | [modenicheng/dsh-annotate](https://github.com/modenicheng/dsh-annotate) | 0 | 2026-11-18 | 2026-11-18 | Visual annotation bridge: mark text, elements, or regions in Firefox/Zen and hand them to DeepSeek Harness with cropped screenshots |
| 459 | [ModiAWA/dsh-gh-view](https://github.com/ModiAWA/dsh-gh-view) | 0 | 2026-11-18 | 2026-11-18 | Browse GitHub repos, issues and pull requests by number, with a rendered image card and a side panel. DSH plugin bundle with agent tools. |
| 460 | [MokoKing666/dsh-davinci-qing](https://github.com/MokoKing666/dsh-davinci-qing) | 0 | 2026-11-19 | 2026-11-19 | 让青青住进你的dsh —— 连接 DeepSeek Harness 与 DaVinci Resolve Studio 的全流程工作流自动化桥梁，从媒体池归档、时间线粗剪到节点树调色与视觉审片，让创作者把时间留给创作。 |
| 461 | [moltocantabile/dsh-auto-model-router](https://github.com/moltocantabile/dsh-auto-model-router) | 0 | 2026-11-18 | 2026-11-19 | System One decision model routes every DSH agent request; tiers are envelopes, not model lists. |
| 462 | [moonmoonCL/dsh-workspace-style](https://github.com/moonmoonCL/dsh-workspace-style) | 0 | 2026-11-19 | 2026-11-19 | Custom workspace icons and colors for DeepSeek Harness (DSH): one Edit dialog for name/icon/color, with collapsed, expanded and filled-hollow active states in the sidebar. · DSH 工作区图标与颜色自定义 |
| 463 | [MoyuOlogy/ds-web](https://github.com/MoyuOlogy/ds-web) | 0 | 2026-11-19 | 2026-11-19 | ds-web — DeepSeek 网页版风格的 DSH 对话面板 \| A DeepSeek-web-style chat panel for DeepSeek Harness (streaming chat, thinking, web search, files, OCR, export import). |
| 464 | [mozhuanzuojing/dsh-deepbreath](https://github.com/mozhuanzuojing/dsh-deepbreath) | 0 | 2026-11-18 | 2026-11-18 | dsh-deepbreath — a DeepSeek Harness (DSH) session-view breathing plugin (guided qi-flow break) with practice/stats panel |
| 465 | [Mr-cjf/cohub](https://github.com/Mr-cjf/cohub) | 0 | 2026-09-16 | 2026-11-18 | CoHub 中文智能体编排体系 monorepo：ZCode / OpenCode / DSH 三平台插件 |
| 466 | [MUKAPP/Retenixa](https://github.com/MUKAPP/Retenixa) | 0 | 2026-11-19 | 2026-11-19 | Local SQLite-backed MCP server for reliable AI agent project memory, cross-session task handoff, and concurrency-safe knowledge tracking across worktrees. \| 基于本地 SQLite 的 MCP 项目记忆服务，面向多客户端与多 Git worktree 提供可靠的任务接续、版本化知识检索与并发写入协调。 |
| 467 | [mustarddaddy/dsh-serial-proto](https://github.com/mustarddaddy/dsh-serial-proto) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏的串口调试面板：按 JSON 协议模型把串口字节流切成帧、校验并解码，也能按模型组帧发送。fork 自 dsh-serial-debugger。 |
| 468 | [muzi18273909375-cell/dsh-moving-context](https://github.com/muzi18273909375-cell/dsh-moving-context) | 0 | 2026-11-18 | 2026-11-18 | Move a DeepSeek Harness conversation between workspaces: CLI plus a sidebar right-click menu. |
| 469 | [mxxz11/dsh-autocontest](https://github.com/mxxz11/dsh-autocontest) | 0 | 2026-11-19 | 2026-11-19 | AutoConsent 自动审批插件，DeepSeek Harness一键自动放行Shell、文件权限审批，支持黑名单、裁决优先级管控 |
| 470 | [mxxz11/dsh-focus-mode](https://github.com/mxxz11/dsh-focus-mode) | 0 | 2026-11-19 | 2026-11-19 | 任务域聚焦插件，适配 DeepSeek Harness，收拢模型注意力，抑制自发跨域、私自触发附属工具调用 |
| 471 | [mycroft-sherlock/apple-display](https://github.com/mycroft-sherlock/apple-display) | 0 | 2026-11-18 | 2026-11-18 | Control Apple Studio Display / Pro Display XDR brightness from DeepSeek Harness on Windows |
| 472 | [mydzkj/dsh-turn-slider](https://github.com/mydzkj/dsh-turn-slider) | 0 | 2026-11-19 | 2026-11-19 | Unofficial community plugin: DSH Turn Slider for DeepSeek Harness |
| 473 | [MYiYang/dsh-prd-canvas](https://github.com/MYiYang/dsh-prd-canvas) | 0 | 2026-11-18 | 2026-11-18 | 图解 PRD 画布 for DeepSeek Harness：图片/需求/已有 PRD → 右侧可拖拽、过门禁的 PRD 板，导出 md/json/docx |
| 474 | [NachoGPT7007/dsh-plugin-defense](https://github.com/NachoGPT7007/dsh-plugin-defense) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin fault defense: silent-failure detection, isolation, and safe boot |
| 475 | [naili0712/dsh-live2d-console](https://github.com/naili0712/dsh-live2d-console) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 的 Live2D 桌宠控制台：会话桥 + 跟随启停。基于 Ssssshaiiko/WHALEL2D 的二创分支（PolyForm Noncommercial 1.0.0），不含模型与 SDK。 |
| 476 | [naili0712/dsh-skill-gate](https://github.com/naili0712/dsh-skill-gate) | 0 | 2026-11-18 | 2026-11-18 | DSH 会话级技能门禁：默认只看得到技能名，正文需授权；记录模型真正读过哪些技能，支持固定技能与压缩兜底。 |
| 477 | [NCT-Ant/dsh-pc-guard](https://github.com/NCT-Ant/dsh-pc-guard) | 0 | 2026-11-18 | 2026-11-18 | One-click Windows workstation lock + CPU guard for DeepSeek Harness. Keeps every background program running, never sleeps the machine. |
| 478 | [newbieQQ/workspace-groups-remote](https://github.com/newbieQQ/workspace-groups-remote) | 0 | 2026-11-11 | 2026-11-19 | Workspace Groups + Remote-SSH 合并插件：DSH Web 客户端的分组工作区侧栏，内置远程 SSH 设置页。 |
| 479 | [Niangaol/dsh-mistral-relay](https://github.com/Niangaol/dsh-mistral-relay) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 的 Mistral 兼容中继 provider：把选择映射到端点真实的 live 模型 id，现代设置页，真实订阅额度 |
| 480 | [noname-nikke/dsh-model-picker-wide](https://github.com/noname-nikke/dsh-model-picker-wide) | 0 | 2026-11-18 | 2026-11-18 | 把 DSH 输入框里的模型选择器加宽：触发器与下拉面板都放得下长模型名（含 provider / 版本后缀），面板右缘仍贴着输入框，宽度在设置页可调。 |
| 481 | [normalform3/dsh-agentsmd-manager](https://github.com/normalform3/dsh-agentsmd-manager) | 0 | 2026-11-16 | 2026-11-18 | 在一个入口查看、搜索和编辑工作区及全局 AGENTS.md，支持模板、批量预览和 AI 修改建议。 |
| 482 | [nzlov/dsh-bing-wallpaper](https://github.com/nzlov/dsh-bing-wallpaper) | 0 | 2026-11-18 | 2026-11-18 | Daily Bing wallpapers, image-derived theme colours, and automatic light/dark appearance for DSH Web. |
| 483 | [nzlov/dsh-rainbow-activity](https://github.com/nzlov/dsh-rainbow-activity) | 0 | 2026-11-18 | 2026-11-19 | Adds step counts, an execution-order colour strip, and a category legend to DSH Web’s native turn, analysis, and tool summaries. Adjacent steps of the same category share one colour block.  |
| 484 | [ODO-TECH/dsh-yukkuli](https://github.com/ODO-TECH/dsh-yukkuli) | 0 | 2026-11-17 | 2026-11-18 | Yukkuri voice for DeepSeek Harness: reads assistant replies aloud locally through AquesTalk, with no network calls. |
| 485 | [oh-wang/dsh-tools-deepseek-media](https://github.com/oh-wang/dsh-tools-deepseek-media) | 0 | 2026-11-18 | 2026-11-18 | Agent tools for DeepSeek OCR, ASR and TTS inside DeepSeek Harness: recognize text in PDF and image files, transcribe WAV audio, and synthesize speech to a file. |
| 486 | [ohmybro/dsh-hf-theme](https://github.com/ohmybro/dsh-hf-theme) | 0 | 2026-11-19 | 2026-11-19 | Amber Commons — an original warm-cream developer theme for DeepSeek Harness: light/dark design tokens, an accessible component layer and an on-demand Resource Hub (resource directory, repository detail, Harness run view). |
| 487 | [OldCat-CN/deepseek-pricing-window](https://github.com/OldCat-CN/deepseek-pricing-window) | 0 | 2026-11-19 | 2026-11-19 | DSH峰谷提示插件：在会话标题栏显示当前 DeepSeek API 处于峰时还是谷时。 |
| 488 | [opencamel/dsh-yt-archive](https://github.com/opencamel/dsh-yt-archive) | 0 | 2026-11-18 | 2026-11-18 | DSH (DeepSeek Harness) tool plugin: archive &amp; read YouTube video captions (all languages incl. auto-generated) via 2100laike YouTube Archive |
| 489 | [openplancc/dsh](https://github.com/openplancc/dsh) | 0 | 2026-11-18 | 2026-11-19 | openplan plugins for the DeepSeek Harness |
| 490 | [ORIOW/dsh-modelscope-pts](https://github.com/ORIOW/dsh-modelscope-pts) | 0 | 2026-11-18 | 2026-11-19 | DSH Desktop plugin: show ModelScope account magicubes (points) balance in the model selector and plugin page |
| 491 | [ORIOW/dsh-reboot-lights](https://github.com/ORIOW/dsh-reboot-lights) | 0 | 2026-11-08 | 2026-11-19 | DSH 插件：主页悬浮红绿灯提示当前是否可安全重启，黄灯时输出用户手动操作 SOP 文档 |
| 492 | [ORIOW/dsh-task-lisk](https://github.com/ORIOW/dsh-task-lisk) | 0 | 2026-11-01 | 2026-11-19 | DSH Desktop 任务管理插件：浮动看板、跨会话任务表、子任务/周期/分级/deadline、agent 门控与放行 |
| 493 | [ORIOW/xparse-bridge](https://github.com/ORIOW/xparse-bridge) | 0 | 2026-10-24 | 2026-11-19 | A dsh plugin to allow dsh to use textin xparse API while your workbuddy is already connected to the same textin xparse API and same account. |
| 494 | [Oseas031/dsh-plugin-lab](https://github.com/Oseas031/dsh-plugin-lab) | 0 | 2026-11-18 | 2026-11-19 | DSH plugin dev lab: zero-restart acceptance testing in a real cordis boot (real ToolsService/SystemPrompt), lab.run tool + standalone CLI runner |
| 495 | [Oseas031/dsh-research-harness](https://github.com/Oseas031/dsh-research-harness) | 0 | 2026-11-19 | 2026-11-19 | Research workbench plugin for DeepSeek Harness: evidence-contract loop (findings ledger + guards + completion gate) with 9 bundled research skills |
| 496 | [osman3n/dsh-workspace-browse-picker](https://github.com/osman3n/dsh-workspace-browse-picker) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: in-app workspace folder picker with a per-Workspace hover button, seeded folder dialog and an app-wide replacement for the OS folder chooser. |
| 497 | [outsmall/dsh-plugin-xc-compliance](https://github.com/outsmall/dsh-plugin-xc-compliance) | 0 | 2026-11-13 | 2026-11-19 | Read-only EU product compliance evidence connector for DeepSeek Harness. Public installation configuration only; inference uses your own model account. |
| 498 | [Ouyangyouzi/wgb](https://github.com/Ouyangyouzi/wgb) | 0 | 2026-11-19 | 2026-11-19 | 一键备份与恢复 DeepSeek Harness：聊天记录、插件、设置和项目文件，支持本地磁盘或 WebDAV。 |
| 499 | [PandaBoby/dsh-credential-hub](https://github.com/PandaBoby/dsh-credential-hub) | 0 | 2026-11-18 | 2026-11-18 | DSH credential routing hub: tag-matched SSH hosts and PAT tokens, metadata-only prompt, encrypted import/export. |
| 500 | [PandaBoby/dsh-workspace-archiver](https://github.com/PandaBoby/dsh-workspace-archiver) | 0 | 2026-11-19 | 2026-11-19 | DSH sidebar action: archive every session of one workspace, with undo. |
| 501 | [Panmax/dsh-default-model-lock](https://github.com/Panmax/dsh-default-model-lock) | 0 | 2026-11-18 | 2026-11-18 | Pin the shared DeepSeek Harness default model so in-chat model switches stay session-local. |
| 502 | [patrickb46-hub/dsh-workflows](https://github.com/patrickb46-hub/dsh-workflows) | 0 | 2026-11-19 | 2026-11-19 | Per-session workflow presets for DeepSeek Harness: skill catalog tiers, global tool gating, persona, permission packs and prompt templates. |
| 503 | [pawsey0319/dsh-project-journal](https://github.com/pawsey0319/dsh-project-journal) | 0 | 2026-11-17 | 2026-11-19 | 项目进展逻辑链：把同一项目下所有会话归纳成阶段链与问题档案，支持分支重做、会话迁移、回收站与备份恢复（DSH 插件） |
| 504 | [pcysanji/dsh-search-plus](https://github.com/pcysanji/dsh-search-plus) | 0 | 2026-11-18 | 2026-11-18 | DSH 跨会话全文搜索浮窗：Ctrl+F 搜全部历史对话，任意中文子串命中，点结果定位到那句话 |
| 505 | [pcysanji/opencode-manage](https://github.com/pcysanji/opencode-manage) | 0 | 2026-11-19 | 2026-11-19 | DSH 插件：会话标签行加一页「Go 余额」，一卡一号同时看多个 OpenCode Go 账号的 5 小时 / 周 / 月额度，支持自动刷新、三档用量通知，以及「OpenCode Go 自动」路由后台换 key。 |
| 506 | [pengtang1024/dsh-quick-phrases](https://github.com/pengtang1024/dsh-quick-phrases) | 0 | 2026-11-18 | 2026-11-18 | DSH 快捷短语：输入框旁一排短语按钮，点按直接发送（可改成只填入），带管理页——增删改排序、显示名称与发送内容分离、位置可选 |
| 507 | [plugin-academy/dsh-plugin-academy](https://github.com/plugin-academy/dsh-plugin-academy) | 0 | 2026-11-18 | 2026-11-18 | Browse catalogs and add plugin indexes you trust in DeepSeek Harness. |
| 508 | [pokereva/dsh-session-history-ui](https://github.com/pokereva/dsh-session-history-ui) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏插件：查看当前会话聊天记录与分支关系（跳转、过滤、置顶、拖拽排序、归档展示）。Right-sidebar session history and branch browser for DeepSeek Harness. |
| 509 | [poloniumn/dsh-balance-display](https://github.com/poloniumn/dsh-balance-display) | 0 | 2026-11-18 | 2026-11-18 | Wallet balance &amp; Token Plan usage for every enabled DSH provider, right in the sidebar · DSH 侧边栏余额与套餐用量 |
| 510 | [PowerFlow-AI/dsh-pace](https://github.com/PowerFlow-AI/dsh-pace) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 搜索与进度反馈插件：大仓库搜索加速，慢任务先看进展。 |
| 511 | [ppgod-787/dsh-download-meter](https://github.com/ppgod-787/dsh-download-meter) | 0 | 2026-11-19 | 2026-11-19 | Live download progress and network speed card for DeepSeek Harness (DSH): real bytes from the host process, plus best-effort subprocess progress. |
| 512 | [ppy-web/dsh-audio-reactive](https://github.com/ppy-web/dsh-audio-reactive) | 0 | 2026-11-19 | 2026-11-19 | 音频响应：让你的 Ai Coding 跟随音乐舞动起来~ |
| 513 | [printing10101/dsh-research-forge](https://github.com/printing10101/dsh-research-forge) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness (DSH) research plugin: persistent blind-review autonomous goal loop, engineering-AI anti-fluff/data-leakage auditor, cross-disciplinary structural analogy, and local negative-results lab vault. |
| 514 | [qianmokillstar/dsh-plugins](https://github.com/qianmokillstar/dsh-plugins) | 0 | 2026-11-17 | 2026-11-19 | 非官方第三方 DSH 插件核验站：55 条真机装机核验，记录版本、风险点、隐私分级与替代品；提供可搜索的报错诊断器、DSH 市场索引（format 1）与可嵌入核验徽章。 |
| 515 | [qianxi-00/dsh-paper-workbench](https://github.com/qianxi-00/dsh-paper-workbench) | 0 | 2026-11-11 | 2026-11-18 | DSH paper workbench: PDF library, bilingual reading, translation and native Agent sessions. |
| 516 | [Qing8-Max/dsh-dev-modes](https://github.com/Qing8-Max/dsh-dev-modes) | 0 | 2026-11-16 | 2026-11-19 | DeepSeek Harness 开发模式合集：软件开发 / 游戏开发 / 只读讨论三个 Agent 预设，含会话隔离与静默运行开关 |
| 517 | [Qing8-Max/dsh-native-shot](https://github.com/Qing8-Max/dsh-native-shot) | 0 | 2026-11-19 | 2026-11-19 | WeChat-style screenshot button for the DSH composer (Windows): region capture with window-edge snapping plus a brush/crop editor. |
| 518 | [Qing8-Max/dsh-session-overview](https://github.com/Qing8-Max/dsh-session-overview) | 0 | 2026-11-16 | 2026-11-19 | DeepSeek Harness plugin: an Overview tab for the conversation view (turns, time, token usage). |
| 519 | [qinghuidaqzp/dsh-cache-doctor](https://github.com/qinghuidaqzp/dsh-cache-doctor) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: finds out why DeepSeek's prompt cache missed, names the plugin or system prompt section that broke it, and shows what the misses cost. 缓存医生 |
| 520 | [qinghuidaqzp/dsh-change-tour](https://github.com/qinghuidaqzp/dsh-change-tour) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: a plain-language tour of what each agent turn changed, with local flags for secrets, removed tests, dependency and CI changes, and an optional model-written explanation. 改动导游 |
| 521 | [qinghuidaqzp/dsh-night-shift](https://github.com/qinghuidaqzp/dsh-night-shift) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: queue tasks during the day, run them automatically in DeepSeek's off-peak half-price window, and read a morning report. 夜班鲸 |
| 522 | [qinghuidaqzp/dsh-pixel-report](https://github.com/qinghuidaqzp/dsh-pixel-report) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin: turn your agent's day or week into a shareable 1080x1632 retro pixel-art battle report card. 像素战报 |
| 523 | [qinghuidaqzp/dsh-workroom](https://github.com/qinghuidaqzp/dsh-workroom) | 0 | 2026-11-19 | 2026-11-19 | A pixel room in the DeepSeek Harness sidebar that keeps an eye on your agent: running, waiting for you, done or failed at a glance. Its glass knob switches day, dusk and night and sets how often the agent asks before acting. 小书房 |
| 524 | [qisisiqi/dsh-bili-banghui](https://github.com/qisisiqi/dsh-bili-banghui) | 0 | 2026-11-18 | 2026-11-18 | B站帮回：B站回复评论，AI 按态度出稿，人审后发出 |
| 525 | [qiuleec/dsh-point-plugin](https://github.com/qiuleec/dsh-point-plugin) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：选中任意一段文字，补一句说明，标注作为带引文的卡片留在消息里。 |
| 526 | [qiuYliangM/dsh-codex-bridge](https://github.com/qiuYliangM/dsh-codex-bridge) | 0 | 2026-11-18 | 2026-11-18 | DSH Codex Bridge — install once in DSH for local Codex collaboration, with ownership-aware cleanup |
| 527 | [QQQHHHDDD/dsh-skill-wechat-dump](https://github.com/QQQHHHDDD/dsh-skill-wechat-dump) | 0 | 2026-11-19 | 2026-11-19 | WeChat 4.x history to plaintext SQLite - a DSH bundle that ships the wechat-dump skill |
| 528 | [qzhengpyuan/dsh-analytics](https://github.com/qzhengpyuan/dsh-analytics) | 0 | 2026-11-03 | 2026-11-18 | dsh-analytics — AI-assisted statistics workbench plugin for DeepSeek Harness, built on a bundled GNU PSPP engine with an SPSS-style interface (data editor, syntax, output viewer, charts, agent tools). |
| 529 | [Rayskinz/dsh-design](https://github.com/Rayskinz/dsh-design) | 0 | 2026-11-18 | 2026-11-18 | Design plugin for DeepSeek Harness: animated GIF backgrounds, sidebar effects, chat colors, fonts, themes, and a pet with mini games. |
| 530 | [regrevia/dsh-pianochart](https://github.com/regrevia/dsh-pianochart) | 0 | 2026-11-19 | 2026-11-19 | Turn one audio link into a playable piano score: staff, numbered notation, MusicXML, MIDI. |
| 531 | [renshaokai/dsh-chip-design-closure](https://github.com/renshaokai/dsh-chip-design-closure) | 0 | 2026-11-18 | 2026-11-18 | Design-side closure for digital chip front-end work on DeepSeek Harness — architecture and specifications, FP/VP, RTL, lint/CDC, synthesis and timing, PPA, SoC integration. Carries the chip-design skill. |
| 532 | [RomanticMysteryLH/dsh-workbuddy-fetch](https://github.com/RomanticMysteryLH/dsh-workbuddy-fetch) | 0 | 2026-11-18 | 2026-11-18 | Routes the dsh web_fetch tool through the WorkBuddy desktop app gateway using its existing sign-in, with a configurable fallback to the built-in HTTP fetcher. |
| 533 | [RomanticMysteryLH/dsh-workday-schedule](https://github.com/RomanticMysteryLH/dsh-workday-schedule) | 0 | 2026-11-06 | 2026-11-18 | 给 DSH 自动化任务加上节假日与调休规则：按真实工作日执行，支持「第几个工作日/休息日」等组合规则。Workday-aware scheduling for DeepSeek Harness. |
| 534 | [Roy2029/dsh-lifeos](https://github.com/Roy2029/dsh-lifeos) | 0 | 2026-11-19 | 2026-11-19 | LifeOS — DSH 个人管理插件：任务 / 日历 / 习惯 / 笔记四合一工作区，本地优先 |
| 535 | [RTyp20/deepseekharness_s-plugin](https://github.com/RTyp20/deepseekharness_s-plugin) | 0 | 2026-11-18 | 2026-11-19 | plugin building |
| 536 | [Ruak/dsh-native-shared-browser](https://github.com/Ruak/dsh-native-shared-browser) | 0 | 2026-11-19 | 2026-11-19 | Native right-sidebar shared browser tab for DeepSeek Harness (DSH): the user and the agent operate the same live page. |
| 537 | [ryanyang7899/dsh-workbuddy-pool](https://github.com/ryanyang7899/dsh-workbuddy-pool) | 0 | 2026-11-18 | 2026-11-19 | Workbuddy 号池计量 · DSH 侧栏插件：剩余总积分 / 在途账号 / 实时 tok/s / 今日消耗，面板地址与密钥在设置里改。 |
| 538 | [sakikoTGW/dsh-blender-panel](https://github.com/sakikoTGW/dsh-blender-panel) | 0 | 2026-11-18 | 2026-11-18 | 侧栏 Blender 面板：文件列表、模型预览、嵌入原生窗口 \| Blender panel for DeepSeek Harness |
| 539 | [sakikoTGW/dsh-chat-search](https://github.com/sakikoTGW/dsh-chat-search) | 0 | 2026-11-18 | 2026-11-18 | 像微信一样搜聊天记录：关键词、按会话分组、一键跳转 \| Keyword search across DSH conversations |
| 540 | [sakikoTGW/dsh-choice](https://github.com/sakikoTGW/dsh-choice) | 0 | 2026-11-18 | 2026-11-18 | 把选项式结尾变成 DSH 原生问题卡 \| Choice endings become native question cards |
| 541 | [sakikoTGW/dsh-guide-ui](https://github.com/sakikoTGW/dsh-guide-ui) | 0 | 2026-11-18 | 2026-11-18 | DSH 运行中引导：消息直接流进当前回合，并在 pre-step 加一条引导说明 \| Mid-task guidance for DeepSeek Harness |
| 542 | [sakikoTGW/dsh-run-indicator](https://github.com/sakikoTGW/dsh-run-indicator) | 0 | 2026-11-18 | 2026-11-18 | 折叠的工作区分组上显示还有几个会话在跑 \| Running count on collapsed workspace groups |
| 543 | [saltfish060/dsh-opendesign-runway](https://github.com/saltfish060/dsh-opendesign-runway) | 0 | 2026-11-18 | 2026-11-18 | OpenDesign 套餐额度与钱包余额面板 for DeepSeek Harness：两个额度窗口、重置时间、速率推算、今日 token。 |
| 544 | [Satont/dsh-harness-setup](https://github.com/Satont/dsh-harness-setup) | 0 | 2026-11-18 | 2026-11-18 | Restore kit for a Claude-Code-style DeepSeek Harness setup: profile, local plugins, worktrees, mobile/VPS runbook, screenshots |
| 545 | [scientificmaniac/dsh-npm-release](https://github.com/scientificmaniac/dsh-npm-release) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：npm 打包与发布。九项发布前检查、2FA 人工授权、以 registry dist-tags 判定成功而不是拿 202 当成功。 |
| 546 | [sdmu-gaoqi/dsh-wa-git](https://github.com/sdmu-gaoqi/dsh-wa-git) | 0 | 2026-11-18 | 2026-11-19 | dsh的git插件,增强dsh上对git的查看 |
| 547 | [SeekAfterSeek/dsh-url-router](https://github.com/SeekAfterSeek/dsh-url-router) | 0 | 2026-11-17 | 2026-11-18 | DSH 浏览器分流（V3.0）：国内网址走 Edge 直连，境外网址走 Chrome + Clash 最快美国节点。接替已归档的 V1.0 dsh-chrome-only 与 V2.0 chrome-clash-link。 |
| 548 | [Sentryea/dsh-plugin-message-edit-plus](https://github.com/Sentryea/dsh-plugin-message-edit-plus) | 0 | 2026-11-18 | 2026-11-18 | Same-session message editing plus Codex-style composer controls for DeepSeek Harness |
| 549 | [serflo77-dev/dsh-pet-cactus](https://github.com/serflo77-dev/dsh-pet-cactus) | 0 | 2026-11-19 | 2026-11-19 | Кактус-питомец для DeepSeek Harness: живёт в углу Web-GUI, реагирует на работу агента и говорит по-русски. |
| 550 | [SevenHe/dsh-remote-host](https://github.com/SevenHe/dsh-remote-host) | 0 | 2026-11-18 | 2026-11-18 | Mount a remote DeepSeek Harness host into the app native UI: sessions, workspaces, super agent, streams — over HTTP or an SSH tunnel. |
| 551 | [Sh-Boom/dsh-layout-memory](https://github.com/Sh-Boom/dsh-layout-memory) | 0 | 2026-11-19 | 2026-11-19 | DSH client plugin: remember DeepSeek Harness sidebar layout (left sidebar width/collapse, right panel width and open state) across reloads. |
| 552 | [ShaohonChen/red-alert](https://github.com/ShaohonChen/red-alert) | 0 | 2026-11-19 | 2026-11-19 | red-alert 🚨 — a DeepSeek Harness (DSH) Web GUI plugin that turns the conversation pane text red. |
| 553 | [ShawThua/dsh-draft-persistence](https://github.com/ShawThua/dsh-draft-persistence) | 0 | 2026-11-15 | 2026-11-19 | Keep unsent DSH composer drafts on the Host instead of browser localStorage: they survive reloads, Session switches and Host restarts, and show up in a second browser or on a phone. |
| 554 | [ShawThua/dsh-web-updater](https://github.com/ShawThua/dsh-web-updater) | 0 | 2026-11-15 | 2026-11-19 | Update a web-only DeepSeek Harness host from its own web GUI on Windows: nightly feed, sha512-verified installer, detached install, host restarts itself. |
| 555 | [shegan1/dsh-session-search](https://github.com/shegan1/dsh-session-search) | 0 | 2026-11-17 | 2026-11-19 | Session search for Deepseek Harness Desktop |
| 556 | [shidesheng0218/dsh-duplex](https://github.com/shidesheng0218/dsh-duplex) | 0 | 2026-11-18 | 2026-11-18 | Hands-free voice mode for DeepSeek Harness: read replies aloud, dictate into the composer, approve by voice (planned). 语音双工｜说需求、听结论、语音审批。 |
| 557 | [Shingwha/dsh-gitbash](https://github.com/Shingwha/dsh-gitbash) | 0 | 2026-11-15 | 2026-11-18 | DeepSeek Harness plugin: runs the bash tool through Git Bash on Windows and removes pwsh from every agent. |
| 558 | [Shingwha/dsh-web-hub](https://github.com/Shingwha/dsh-web-hub) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: per-provider search and fetch tools with one switch per tool. |
| 559 | [Singapo/ai-job-countdown](https://github.com/Singapo/ai-job-countdown) | 0 | 2026-10-23 | 2026-11-18 | 取代倒计时：你这就是 AI 的活儿，赶紧写交接文档吧。让 AI 接班人直接开怼、拿证据补刀的职场压力测试 Skill。 |
| 560 | [Singapo/deepseek-harness-plugins](https://github.com/Singapo/deepseek-harness-plugins) | 0 | 2026-11-18 | 2026-11-18 | 较真与再改一版 · DeepSeek Harness 数据核验与 Agent 任务复盘插件 |
| 561 | [sjbdhr/dsh-model-request-stats](https://github.com/sjbdhr/dsh-model-request-stats) | 0 | 2026-11-18 | 2026-11-18 | Per-session model request statistics for DeepSeek Harness: attempts, failures, failure reasons, retries, and a whole-request tok/s that counts connection and retry time. |
| 562 | [skyjjgw/dsh-plugin-skymoni](https://github.com/skyjjgw/dsh-plugin-skymoni) | 0 | 2026-11-18 | 2026-11-18 | Skymoni account and model provider for DeepSeek Harness Desktop |
| 563 | [sljdxde/dsh-clipchat](https://github.com/sljdxde/dsh-clipchat) | 0 | 2026-11-16 | 2026-11-18 | DSH Web plugin: quote-and-ask in place, green-underline highlights, kept Q&amp;A, cross-session search |
| 564 | [smallflycar/dsh-reading-focus](https://github.com/smallflycar/dsh-reading-focus) | 0 | 2026-11-18 | 2026-11-18 | 阅读辅助：给 DeepSeek Harness 的渐变文字、阅读尺、逐行/逐段聚焦与色块分段。 |
| 565 | [soffits/dsh-points](https://github.com/soffits/dsh-points) | 0 | 2026-11-18 | 2026-11-18 | Spend earned points inside DeepSeek Harness: any plugin prices an extra, one dialog shows the price and balance and buys it through your points ledger. |
| 566 | [soffits/dsh-practice](https://github.com/soffits/dsh-practice) | 0 | 2026-11-18 | 2026-11-18 | A language-practice page for DeepSeek Harness: today's plan, review cards, a speaking recorder with speech analysis, writing answers and progress. |
| 567 | [songsenand/yingzao](https://github.com/songsenand/yingzao) | 0 | 2026-11-13 | 2026-11-18 | A dsh plugin for mechanical CAD — the agent generates, the plugin closes the loop. |
| 568 | [Sophia-DuoDuo/dsh-smart-planner](https://github.com/Sophia-DuoDuo/dsh-smart-planner) | 0 | 2026-11-18 | 2026-11-18 | Task planner for DeepSeek Harness: staged daily plans, buffer days, capacity board, evening review, pinned assistant chat, and a fish task popover. |
| 569 | [srt180/icloud-calendar-plugin](https://github.com/srt180/icloud-calendar-plugin) | 0 | 2026-11-19 | 2026-11-19 | 中国区 iCloud 日历与通讯录插件 · DeepSeek Harness (DSH) plugin：通过 CalDAV/CardDAV 提供日历/事件/联系人工具（list calendars, find/create/update/delete events, look up contacts） |
| 570 | [ssddlkjj/dsh-cheat-sheet](https://github.com/ssddlkjj/dsh-cheat-sheet) | 0 | 2026-11-19 | 2026-11-19 | Per-conversation cheat sheet for DSH: one short reminder injected into the system prompt every turn, switched and edited from the status bar. / 给 DSH 每条对话加一段随轮生效的小抄，状态栏可开关、可改原文。 |
| 571 | [ssddlkjj/dsh-proactive-bubble](https://github.com/ssddlkjj/dsh-proactive-bubble) | 0 | 2026-11-19 | 2026-11-19 | Proactive bubble for DSH: let a character start a line on its own when the conversation is focused and idle. / 让 DSH 角色在你看得见、闲下来的时候自己先开口。 |
| 572 | [SSHOOTING/awesome-dsh-plugins](https://github.com/SSHOOTING/awesome-dsh-plugins) | 0 | 2026-11-19 | 2026-11-19 | 个人维护的 DeepSeek Harness（DSH）插件筛选清单：只收录实际验证、值得保留的插件。 |
| 573 | [SSHOOTING/dsh-event-fix](https://github.com/SSHOOTING/dsh-event-fix) | 0 | 2026-11-17 | 2026-11-18 | Step-level error and wasted-work analytics for DeepSeek Harness sessions — an event-sourcing side branch |
| 574 | [SSHOOTING/dsh-plugin-feed](https://github.com/SSHOOTING/dsh-plugin-feed) | 0 | 2026-11-19 | 2026-11-19 | Personalized plugin recommendations for DeepSeek Harness, learned locally from session history. |
| 575 | [SSHOOTING/dsh-plugin-free-model-advisor](https://github.com/SSHOOTING/dsh-plugin-free-model-advisor) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: a read-only /free-models command that lists configured free models and recommends a safe default without changing any configuration. |
| 576 | [SSHOOTING/dsh-plugin-mcp-guard](https://github.com/SSHOOTING/dsh-plugin-mcp-guard) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: read-only /mcp-guard audit of configured MCP servers for risky settings. No connections, no command execution, no file writes. |
| 577 | [SSHOOTING/dsh-plugin-safe-route](https://github.com/SSHOOTING/dsh-plugin-safe-route) | 0 | 2026-11-18 | 2026-11-19 | DSH plugin: read-only /route-check audits which model routes a session used and flags calls outside a configurable allowlist. |
| 578 | [SSHOOTING/dsh-plugin-session-archive](https://github.com/SSHOOTING/dsh-plugin-session-archive) | 0 | 2026-11-18 | 2026-11-19 | DSH plugin: read-only /session-export exports the current session as redacted Markdown or JSON. No network, no file writes. |
| 579 | [SSHOOTING/dsh-plugin-token-budget](https://github.com/SSHOOTING/dsh-plugin-token-budget) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: fold token usage from the current session and report it against a configurable budget. Read-only, no network calls, no session content stored. |
| 580 | [star620/dsh-codex-bridge](https://github.com/star620/dsh-codex-bridge) | 0 | 2026-11-18 | 2026-11-18 | 一个让 DeepSeek Harness 和 Codex CLI 直接互发消息的本地总线插件。两端都通过 MCP 工具收发，不再是"手写交接文档"，而是一个带序号、游标、已读状态的收件箱。 |
| 581 | [Stontar/dsh-approval-alert](https://github.com/Stontar/dsh-approval-alert) | 0 | 2026-11-19 | 2026-11-19 | Desktop alert (popup, sound, taskbar flash) when DeepSeek Harness asks for an approval or a question. |
| 582 | [Stontar/dsh-selection-translate](https://github.com/Stontar/dsh-selection-translate) | 0 | 2026-11-19 | 2026-11-19 | Translate the text you drag-select inside a DSH reply, without a follow-up turn. |
| 583 | [Stontar/dsh-session-delete](https://github.com/Stontar/dsh-session-delete) | 0 | 2026-11-19 | 2026-11-19 | Permanently delete conversations from the DSH sidebar session menu. |
| 584 | [sunlaoshi-123/novel-craft-dsh](https://github.com/sunlaoshi-123/novel-craft-dsh) | 0 | 2026-11-19 | 2026-11-19 | Long-form novel writing skill for DeepSeek Harness (dsh). 18 references + 5 local check scripts. |
| 585 | [sunt2049/dsh-next-prompt](https://github.com/sunt2049/dsh-next-prompt) | 0 | 2026-11-18 | 2026-11-18 | 回合结束后猜一句你接下来会说的话：DSH（DeepSeek Harness）插件，Web/桌面端是输入框下方的一枚胶囊，点一下填进输入框、永不自动发送。 |
| 586 | [Super-QAQ/dsh-hide-workspaces](https://github.com/Super-QAQ/dsh-hide-workspaces) | 0 | 2026-11-18 | 2026-11-19 | DeepSeek Harness 插件：隐藏工作区而不删除注册，并在同一管理器里恢复隐藏工作区与已归档会话。 |
| 587 | [sweay-svg/dsh-imessage-chat](https://github.com/sweay-svg/dsh-imessage-chat) | 0 | 2026-11-19 | 2026-11-19 | Photon-hosted iMessage chat bot for DeepSeek Harness, with an editable persona and a dedicated conversation. |
| 588 | [taozi0328/dsh-task-board](https://github.com/taozi0328/dsh-task-board) | 0 | 2026-11-17 | 2026-11-18 | DSH任务清单 |
| 589 | [TardisBooo/figureatlas](https://github.com/TardisBooo/figureatlas) | 0 | 2026-11-18 | 2026-11-19 | 300 verified figure types for papers, slides, posters, and video frames. FigureAtlas helps agents pick a figure and export HTML or SVG. |
| 590 | [tbx709/dsh-prompt-gate](https://github.com/tbx709/dsh-prompt-gate) | 0 | 2026-11-18 | 2026-11-18 | You type one line and the agent guesses the rest; this plugin rewrites that line into a complete prompt with goal, scope and acceptance criteria and waits for your go-ahead before the agent touches anything, then lets you approve it, ask for a rewrite, send the original as-is. |
| 591 | [tdsjff0513/guiding-thought](https://github.com/tdsjff0513/guiding-thought) | 0 | 2026-11-19 | 2026-11-19 | DSH Host plugin: put guiding thought into this turn when a conclusion is about to freeze |
| 592 | [terry2010/dsh-rss-news-zhuikan](https://github.com/terry2010/dsh-rss-news-zhuikan) | 0 | 2026-11-18 | 2026-11-18 | dsh 伴随插件：订阅没有 RSS 的普通列表页——AI 学页面结构出规则，新条目进主插件新闻流 |
| 593 | [ThywQuake/DS-Cost-History](https://github.com/ThywQuake/DS-Cost-History) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 插件：导出 DeepSeek 开放平台消费记录，按 Paid / 赠金拆分，输出 CSV 与 Excel 明细 |
| 594 | [TideDra/dsh-agy-progress](https://github.com/TideDra/dsh-agy-progress) | 0 | 2026-11-19 | 2026-11-19 | Proactive mid-task progress commentary nudger exclusively for Antigravity (agy) mode in DeepSeek Harness — calibrated two-stage cadence, zero premature stop, and 100% thought-signature cache safe. |
| 595 | [tietoumiao/dsh-scrapling](https://github.com/tietoumiao/dsh-scrapling) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin exposing Scrapling as 4 model-facing scraping tools (fetch / extract / batch / site). MIT licensed, external contributions not accepted. |
| 596 | [timxiang-948/dsh-composer-model-controls](https://github.com/timxiang-948/dsh-composer-model-controls) | 0 | 2026-11-10 | 2026-11-18 | Reasoning-effort control for the DSH composer: adaptive effort slider with track and border tint, Shift+Tab cycling, and the built-in model menu left untouched. |
| 597 | [tlxqgj/dsh-yy-gamebox](https://github.com/tlxqgj/dsh-yy-gamebox) | 0 | 2026-11-19 | 2026-11-19 | Run local games natively inside the DeepSeek Harness panel (莫若知秋) |
| 598 | [tojunkan/dsh-logprobs-highlighter](https://github.com/tojunkan/dsh-logprobs-highlighter) | 0 | 2026-08-20 | 2026-11-19 | 一个用于高亮Deepseek输出中不确定高的部分的dsh插件。 |
| 599 | [TongjieYang/dsh-skill-hub](https://github.com/TongjieYang/dsh-skill-hub) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 技能中枢：罗列与分类本机 skill、专家团编排、第三方 key 走系统钥匙串 |
| 600 | [tonyous/DSH-AMP-Radio](https://github.com/tonyous/DSH-AMP-Radio) | 0 | 2026-10-13 | 2026-11-19 | AMP Radio + AMP Bar for DeepSeek Harness: internet radio with a live visualiser, and every chat stat in one tidy bar (top or bottom, each one switchable, phone-friendly). |
| 601 | [total-quality/dsh-total-quality-v3](https://github.com/total-quality/dsh-total-quality-v3) | 0 | 2026-11-18 | 2026-11-18 | 全质开源质量平台：独立 V3 插件，自动接收与筛查、方案准备、工作单审批、执行复核和报告沉淀。本地入口为全质开源质量平台2。 |
| 602 | [TristGek/dsh-github-tool](https://github.com/TristGek/dsh-github-tool) | 0 | 2026-11-19 | 2026-11-19 | GitHub workspace for DeepSeek Harness: sign in with a personal access token, discover recently trending repositories, and search GitHub from the sidebar. |
| 603 | [trymesoft/dsh-frp](https://github.com/trymesoft/dsh-frp) | 0 | 2026-11-19 | 2026-11-19 | Publish your local DeepSeek Harness Web GUI through your own frps server — behind an authenticated gateway. |
| 604 | [TuringCorp-net/dsh-session-slim](https://github.com/TuringCorp-net/dsh-session-slim) | 0 | 2026-11-19 | 2026-11-19 | Open-time session slimming for DeepSeek Harness: keep the visible conversation, archive the raw log, cut resume memory by ~93% |
| 605 | [unhurriedly/dsh-zhifei-simulator](https://github.com/unhurriedly/dsh-zhifei-simulator) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness panel plugin: a river-side drone tracking sandbox driven by natural-language commands |
| 606 | [vajraimb/dsh-plugin-odin-gua](https://github.com/vajraimb/dsh-plugin-odin-gua) | 0 | 2026-11-19 | 2026-11-19 | 易经起卦 Native DeepSeek Harness plugin: cast / lookup / relations / journal / annotate — a port of odin-gua |
| 607 | [vicfei/dsh-trustquant](https://github.com/vicfei/dsh-trustquant) | 0 | 2026-11-05 | 2026-11-19 | DeepSeek Harness plugin: TrustQuant financial tools — oracle-pinned pricing/portfolio/rates with calculation manifests and replay. Live-tested: the agent self-verifies its own numbers via trustquant replay. |
| 608 | [Vincent-chk/dsh-project-workbench](https://github.com/Vincent-chk/dsh-project-workbench) | 0 | 2026-11-18 | 2026-11-18 | File-backed project requirements, tasks, reviews and acceptance workbench for DeepSeek Harness |
| 609 | [VladimirCores/dsh-tts-chat-answer](https://github.com/VladimirCores/dsh-tts-chat-answer) | 0 | 2026-11-19 | 2026-11-19 | Narrate every completed assistant answer from DeepSeek Harness and save the audio locally. |
| 610 | [vlln/dsh-overview](https://github.com/vlln/dsh-overview) | 0 | 2026-11-19 | 2026-11-19 | DSH 通用会话总览容器插件——集中收口待办、子智能体、后台任务、输入材料与关键产出，并向其他插件开放扩展插槽 |
| 611 | [w3353239621-tech/dsh-field-notes](https://github.com/w3353239621-tech/dsh-field-notes) | 0 | 2026-11-19 | 2026-11-19 | DSH 踩坑卡 25 张：触发、首选姿势、反面清单、验证方式，按报错原文检索（个人云存档） |
| 612 | [w3353239621-tech/dsh-tool-completeness](https://github.com/w3353239621-tech/dsh-tool-completeness) | 0 | 2026-11-19 | 2026-11-19 | DSH 工具层返回完整性：read/grep/glob 静默截断的复现证据与补丁 bundle（个人云存档） |
| 613 | [wadwaw7/dsh-session-delete](https://github.com/wadwaw7/dsh-session-delete) | 0 | 2026-11-18 | 2026-11-18 | Delete DSH sessions for real / 真正删除 DSH 会话：按 .session.json 精确匹配，同步清理项目会话目录 |
| 614 | [wadwaw7/dsh-session-layout](https://github.com/wadwaw7/dsh-session-layout) | 0 | 2026-11-18 | 2026-11-18 | DSH session layout convention as a Skill / DSH 会话目录排版规范：一个对话一个目录 + .session.json |
| 615 | [wagalicn/dsh-provider-proxy](https://github.com/wagalicn/dsh-provider-proxy) | 0 | 2026-11-18 | 2026-11-18 | Per-provider HTTP proxy routing for DeepSeek Harness model providers |
| 616 | [walorne/dsh-annotate-it](https://github.com/walorne/dsh-annotate-it) | 0 | 2026-11-18 | 2026-11-18 | Annotate chats and documents in DeepSeek Harness — mark passages, stack comments, and send the whole review as one message. |
| 617 | [WangShuangTong/dsh-chat-history-cleaner](https://github.com/WangShuangTong/dsh-chat-history-cleaner) | 0 | 2026-11-18 | 2026-11-18 | Delete DSH chat history safely: recoverable trash, per-project cleanup, restore, and permanent purge. |
| 618 | [WangShuangTong/dsh-notify](https://github.com/WangShuangTong/dsh-notify) | 0 | 2026-11-18 | 2026-11-18 | Desktop notification plugin for DeepSeek Harness (DSH): approval, question and completion cards with click-to-focus on Windows. |
| 619 | [wangyz911/dsh-deferred-ask](https://github.com/wangyz911/dsh-deferred-ask) | 0 | 2026-11-18 | 2026-11-18 | Queue questions from the DSH composer and deliver them only while DeepSeek bills at off-peak rates. |
| 620 | [WangZW928/HPC_Style_For_AI](https://github.com/WangZW928/HPC_Style_For_AI) | 0 | 2026-11-19 | 2026-11-19 | General HPC design principles and reusable AI skills, with source-grounded examples and a DSH plugin. |
| 621 | [wayblink/dsh-phrase](https://github.com/wayblink/dsh-phrase) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness plugin for canned phrases: save the lines you type often and insert them into the composer with one click. Bilingual UI (English / 中文). |
| 622 | [wayblink/using-kanban](https://github.com/wayblink/using-kanban) | 0 | 2026-10-10 | 2026-11-18 | Shared, event-sourced kanban for people and coding agents. CLI · MCP · REST/SSE · Web UI · Pi &amp; DeepSeek Harness plugins. \| 人与 AI agent 共用的看板：CLI/MCP/REST/SSE/Web + Pi/DSH 插件。 |
| 623 | [weijiafu14/dsh-agy-native](https://github.com/weijiafu14/dsh-agy-native) | 0 | 2026-11-19 | 2026-11-19 | TOS-safe native DeepSeek Harness LLM adapter for Google AI Pro/Ultra subscriptions via the official Antigravity CLI (agy acp) — eager native DSH tools, warm session pool, and Context OS support. |
| 624 | [weiwenhao/dudu](https://github.com/weiwenhao/dudu) | 0 | 2026-11-11 | 2026-11-19 | An efficient multi-agent collaboration assistant built on DSH |
| 625 | [wellsoren/dsh-atomcode](https://github.com/wellsoren/dsh-atomcode) | 0 | 2026-11-18 | 2026-11-18 | AtomGit AtomCode CodingPlan provider for DeepSeek Harness (DSH) |
| 626 | [weng5040/dsh-coolme-toolkit](https://github.com/weng5040/dsh-coolme-toolkit) | 0 | 2026-11-19 | 2026-11-19 | CoolMe's personal DeepSeek Harness toolkit: conversation width, settings dialog size, service restart, fake-ip-aware web_fetch |
| 627 | [wgrbiss-spec/dsh-excluir-sessao](https://github.com/wgrbiss-spec/dsh-excluir-sessao) | 0 | 2026-11-17 | 2026-11-18 | Plugin de exclusão de sessões para o DeepSeek Harness, em português do Brasil — fork traduzido de dsh-delete-session. |
| 628 | [wishprophet/dshbazi](https://github.com/wishprophet/dshbazi) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 四柱八字插件：本地或周易大学排盘、十二方面解读、运年联动与人生趋势，内置 skill。 |
| 629 | [wjn1121/local-peak-cost](https://github.com/wjn1121/local-peak-cost) | 0 | 2026-11-19 | 2026-11-19 | DSH Go 原生插件：本会话/今日 DeepSeek 花费、峰谷时段、24 小时与 7 天费用图表 |
| 630 | [wooyang2018/dsh-waypoint](https://github.com/wooyang2018/dsh-waypoint) | 0 | 2026-11-18 | 2026-11-18 | SSH remote development for DeepSeek Harness: remote hosts, mirrored remote sessions, terminal and file access over one tunnel. |
| 631 | [WphiontaS/dsh-stage-handoff](https://github.com/WphiontaS/dsh-stage-handoff) | 0 | 2026-11-14 | 2026-11-19 | Close out a context stage before compaction, and hand the next stage a reviewable markdown file instead of a summary. A plugin for DeepSeek Harness. |
| 632 | [WUXUANHAN/dsh-power-control](https://github.com/WUXUANHAN/dsh-power-control) | 0 | 2026-11-19 | 2026-11-19 | 在会话标题栏紧挨侧边栏开关的位置加两个按钮：重启 / 关闭 DeepSeek Harness。 |
| 633 | [wzvx/dsh-github-trending-masonry](https://github.com/wzvx/dsh-github-trending-masonry) | 0 | 2026-11-10 | 2026-11-18 | GitHub Trending in a flat masonry card panel for the DeepSeek Harness Web UI |
| 634 | [wzvx/dsh-matrix-todo](https://github.com/wzvx/dsh-matrix-todo) | 0 | 2026-11-10 | 2026-11-18 | DeepSeek Harness 插件：艾森豪威尔四象限待办（重要 × 紧急），支持截止日期、拖拽排序、一键切换已完成。 |
| 635 | [wzvx/dsh-one-pack](https://github.com/wzvx/dsh-one-pack) | 0 | 2026-11-10 | 2026-11-18 | One Pack: sync DSH plugins, settings, skills and sessions across machines via GitHub |
| 636 | [wzx060802-cyber/dsh-screenshot-loupe](https://github.com/wzx060802-cyber/dsh-screenshot-loupe) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 输入框截屏插件：屏幕就地冻结框选，8x 放大镜 + 像素网格精确对齐，零额外运行时 |
| 637 | [x7user/dsh-model-usage](https://github.com/x7user/dsh-model-usage) | 0 | 2026-11-18 | 2026-11-18 | MiniMax quota, DeepSeek wallet balance and OpenCode Go allowance next to the DeepSeek Harness composer |
| 638 | [xiafan68/dsh-capability-toggles](https://github.com/xiafan68/dsh-capability-toggles) | 0 | 2026-11-14 | 2026-11-19 | Per-session capability toggles for DSH: turn individual tools and skills on or off from the composer toolbar, grouped by plugin. |
| 639 | [xiaoBai8512/dsh-ai-radar](https://github.com/xiaoBai8512/dsh-ai-radar) | 0 | 2026-11-19 | 2026-11-19 | AI 雷达 · DeepSeek Harness 插件：AI 动态日报与 X / Hacker News 评论问题整理。 |
| 640 | [xiaojiuop/dsh-wallpaper-studio](https://github.com/xiaojiuop/dsh-wallpaper-studio) | 0 | 2026-11-18 | 2026-11-18 | 把图片、视频或内置渐变铺成 DSH 整个界面的背景，并可调主题色与面板透明度。 |
| 641 | [xiaomengxinbb/dsh-todo-freshness](https://github.com/xiaomengxinbb/dsh-todo-freshness) | 0 | 2026-11-19 | 2026-11-19 | DSH plugin: says out loud when the task list is a stale snapshot, and nudges the model to write back |
| 642 | [xiaozou-second/dsh-mention-tooltip](https://github.com/xiaozou-second/dsh-mention-tooltip) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: show the complete text of an @ mention row the menu had to clip |
| 643 | [Xigong93/dsh-spend-meter](https://github.com/Xigong93/dsh-spend-meter) | 0 | 2026-11-19 | 2026-11-19 | Meter your DeepSeek spend in the sidebar: balance, today's cost, input/output tokens, peak and off-peak pricing, per-session breakdown — and a daily budget that brakes before it bites. |
| 644 | [xin505/dsh-xin505-notify](https://github.com/xin505/dsh-xin505-notify) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 的 Windows 桌面通知。你不可能一直盯着 Agent。它卡在权限审批、额度不足或其他问题上，你可能一时没发现。这时候，你就需要这个插件了。 |
| 645 | [xincy22/dsh-progress-updates](https://github.com/xincy22/dsh-progress-updates) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 进展更新插件：progress_update 工具、提示词引导、催促、侧栏面板与设置（fork 自 @eddyskywalker/dsh-chatgpt-subscription） |
| 646 | [xinming-chenniang/dsh-vram-watch](https://github.com/xinming-chenniang/dsh-vram-watch) | 0 | 2026-11-18 | 2026-11-18 | DSH VRAM diagnostic sampler: after an OOM or unexplained slowdown, report four things instead of a live gauge. |
| 647 | [xiuerhuahuazi/dsh-mcp-progressive](https://github.com/xiuerhuahuazi/dsh-mcp-progressive) | 0 | 2026-11-18 | 2026-11-19 | Progressive disclosure for MCP tools in DeepSeek Harness — keep MCP tool schemas out of the model context until needed, plus an MCP servers control tab. |
| 648 | [XKPU/dsh-sloppatterns](https://github.com/XKPU/dsh-sloppatterns) | 0 | 2026-11-19 | 2026-11-19 | 离线检查 CSS、HTML 与 JSX，对照内置的 Slop Patterns 规则库，列出命中的 AI 设计反模式并给出修复建议。 |
| 649 | [xrz1411/dsh-session-attachments](https://github.com/xrz1411/dsh-session-attachments) | 0 | 2026-11-19 | 2026-11-19 | Attach another DeepSeek Harness conversation as context by drag-and-drop, session ID, or picker. |
| 650 | [xua123/dsh-server-monitor](https://github.com/xua123/dsh-server-monitor) | 0 | 2026-11-18 | 2026-11-19 | Server resource monitor for DeepSeek Harness: CPU, memory, disk, GPU/NPU/DCU, processes and Docker. |
| 651 | [xuanqing-95/pipeline-xhs-harness-downloads](https://github.com/xuanqing-95/pipeline-xhs-harness-downloads) | 0 | 2026-11-19 | 2026-11-19 | Pipeline｜小红书内容生成：把选题或草稿生成笔记与配图，预览后复制下载。原创、仿写、品牌管理。 |
| 652 | [xuetianhao98/dsh_docs](https://github.com/xuetianhao98/dsh_docs) | 0 | 2026-11-16 | 2026-11-18 | DeepSeek Harness docs plugin. |
| 653 | [xuexue61/dsh-task-queue](https://github.com/xuexue61/dsh-task-queue) | 0 | 2026-11-18 | 2026-11-18 | Task queue view for DeepSeek Harness: record items per project, set priorities, send them to the conversation with one click or automatically by priority. |
| 654 | [xuhuaiqu/dsh-session-fts](https://github.com/xuhuaiqu/dsh-session-fts) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 本地会话全文搜索插件：中文子串命中、时间范围筛选、侧栏搜索页与 Agent 工具 · Local full-text session search for DSH |
| 655 | [yanxijian/dsh-model-provider-info](https://github.com/yanxijian/dsh-model-provider-info) | 0 | 2026-11-18 | 2026-11-18 | Provider name before the model name in the DeepSeek Harness composer \| 在 DSH 输入框的模型位显示供应商名 |
| 656 | [Yaohua-Leo/dsh-lean-plugin](https://github.com/Yaohua-Leo/dsh-lean-plugin) | 0 | 2026-10-25 | 2026-11-19 | DSH Lean Proof Assistant plugin with explicit LSP/Beam modes, isolated skills, fail-closed selfcheck and project acceptance gates. |
| 657 | [yeloooooooooo/dsh-workspace-sidebar](https://github.com/yeloooooooooo/dsh-workspace-sidebar) | 0 | 2026-11-17 | 2026-11-18 | DSH 插件：工作区文件树自动显示、右栏宽度记忆、文件拖拽变 @ 引用、工作区按最近对话排序并支持置顶，以及对话行与工作区行的鲸鱼尾像素状态表情。 |
| 658 | [yeweimei/dsh-memory-harness](https://github.com/yeweimei/dsh-memory-harness) | 0 | 2026-11-18 | 2026-11-18 | Local-first cross-session memory for DeepSeek Harness (DSH): SQLite, hybrid retrieval, conflict review. Listed on dsh.so. |
| 659 | [yib0601/dsh-turn-cost](https://github.com/yib0601/dsh-turn-cost) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：逐轮/会话费用（官方单价 CNY/USD + 峰谷分时）+ 上下文洞察面板（仪表盘 / 上下文页签 / /context 命令） |
| 660 | [yingning1991/dsh-pbyugujia](https://github.com/yingning1991/dsh-pbyugujia) | 0 | 2026-11-06 | 2026-11-19 | 大肥鱼 Core：给 AI Agent 的思考与记忆骨架，不是人设包——事实为根、记忆三行、冲突裁决、硬回滚。 认识是 6.9MB 纯文本、脱敏能带走；零模型调用，断网也能跑。 |
| 661 | [yishan/dsh-burn](https://github.com/yishan/dsh-burn) | 0 | 2026-08-23 | 2026-11-18 | Per-session token spend, peak/off-peak pricing, and account balance for the DeepSeek Harness web UI. |
| 662 | [ymf2317-tech/dsh-mobile-fixes](https://github.com/ymf2317-tech/dsh-mobile-fixes) | 0 | 2026-11-18 | 2026-11-18 | 窄屏（手机）CSS 覆盖层：只修验过的两个 DSH 插件 —— dsh-expert 的 T专家弹窗、dsh-purge 的悬浮净化面板 |
| 663 | [you112358/dsh-cache-cleaner](https://github.com/you112358/dsh-cache-cleaner) | 0 | 2026-11-18 | 2026-11-18 | A DeepSeek Harness plugin that reclaims the rebuildable caches of DSH itself, the desktop client and installed plugins. |
| 664 | [ytclaw01/dsh-plugin-sets](https://github.com/ytclaw01/dsh-plugin-sets) | 0 | 2026-11-18 | 2026-11-18 | Save named scenes of DSH plugins, MCP servers and skills, and switch between them in one click. |
| 665 | [yu-bobo/dsh-dev-tools](https://github.com/yu-bobo/dsh-dev-tools) | 0 | 2026-11-17 | 2026-11-19 | DeepSeek Harness plugin: developer utilities with pinable sidebar tabs and agent tools |
| 666 | [yuanyuanzhang0815/dsh-quick-prompts](https://github.com/yuanyuanzhang0815/dsh-quick-prompts) | 0 | 2026-11-18 | 2026-11-18 | Prompt presets in the DeepSeek Harness (dsh) composer: pick one, it is inserted at the caret and focus returns to the input. |
| 667 | [YuboCoco/dsh-english-lit-reader](https://github.com/YuboCoco/dsh-english-lit-reader) | 0 | 2026-11-18 | 2026-11-19 | Read English papers inside DeepSeek Harness: select a sentence to translate it beside the PDF, summarise innovations and the technical approach in five fixed sections, resolve the bibliography, explain formulas and terms, highlight, annotate and search inside the document. Six interface tones, three paper colours. |
| 668 | [yueguangwangzuo/opencode-go-boost](https://github.com/yueguangwangzuo/opencode-go-boost) | 0 | 2026-11-19 | 2026-11-19 | Make opencode go faster: pick the fastest Cloudflare edge IP for the opencode.ai inference route, and measure link latency separately from model speed. dsh-go native surfaces (strip, actions, panels) + Harness Web settings page. |
| 669 | [yuhhhong/dsh-model-meta-fill](https://github.com/yuhhhong/dsh-model-meta-fill) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness（DSH）的模型元数据填入插件。在「设置 → 模型」中，为模型补齐或覆盖上下文窗口、最大输出 token 数、输入类型和思考等级四项配置。 手动维护中转站、自定义网关或第三方渠道的模型列表时，通常要逐个查资料再手填参数，思考等级对应的接口值尤其容易配错。本插件在供应商卡片上提供「自动填入」和「覆盖填入」入口，只改动这四项元数据 |
| 670 | [yunweizhao26/dsh-browser-use-skill](https://github.com/yunweizhao26/dsh-browser-use-skill) | 0 | 2026-11-18 | 2026-11-18 | Browser Use agent skill for DeepSeek Harness: drive a real Chrome over CDP from a persistent Python REPL. PowerShell-ready, token-budgeted, safe for parallel agents. |
| 671 | [Z06528/dsh-tutorflow](https://github.com/Z06528/dsh-tutorflow) | 0 | 2026-11-19 | 2026-11-19 | 一次一个知识点、一个问题地教，本地绘制数学 SVG，并把学习进度写在本机。DeepSeek Harness 插件。 |
| 672 | [z664w4zps8-spec/dsh-session-trash-box](https://github.com/z664w4zps8-spec/dsh-session-trash-box) | 0 | 2026-11-19 | 2026-11-19 | Delete a DSH session into a local trash instead of only archiving it: right-click to delete, then restore, batch, or let old entries expire - and a permanent delete lands in the operating system's own Trash, so the file manager can still recover it. |
| 673 | [zchiy2k/dsh-project-status](https://github.com/zchiy2k/dsh-project-status) | 0 | 2026-11-19 | 2026-11-19 | DSH sidebar plugin: project status dots plus a sticky active-sessions area (waiting / running / finished). npm: dsh-project-status |
| 674 | [zerui-chen/zero-db-tool](https://github.com/zerui-chen/zero-db-tool) | 0 | 2026-11-19 | 2026-11-19 | DSH 数据库工作台：连接下拉 + 对象树 + 数据/结构/SQL，支持 SQLite/PostgreSQL/MySQL |
| 675 | [zeyeyuki/dsh-gui-operator](https://github.com/zeyeyuki/dsh-gui-operator) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: let the agent see and operate a Windows desktop and the pages of a logged-in browser (UI Automation + screenshot + real mouse/keyboard, Chrome DevTools Protocol for the web). |
| 676 | [zhan1024/dsh-zentao-buglens](https://github.com/zhan1024/dsh-zentao-buglens) | 0 | 2026-11-18 | 2026-11-18 | 禅图 BugLens：截图圈选、AI 引导补全、前后端排查分工和最近指派推荐，生成材料并提交禅道。DSH plugin + independent Agent Skill. |
| 677 | [zhanb767-create/dsh-slipnote](https://github.com/zhanb767-create/dsh-slipnote) | 0 | 2026-11-19 | 2026-11-19 | 拾笺：侧栏备忘录与分阶段计划 |
| 678 | [zhang-astronaut/dsh-ofm-credit-dock](https://github.com/zhang-astronaut/dsh-ofm-credit-dock) | 0 | 2026-11-19 | 2026-11-19 | Our Free Model (EAC router) channel credits in the DSH sidebar — every connected provider, remaining credit, the provider in use highlighted. Requires dsh-our-free-model. |
| 679 | [ZhangPotato2022/dsh-math-perf](https://github.com/ZhangPotato2022/dsh-math-perf) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: render only the math and code you can see. Lazy KaTeX/Shiki, idle prefetch, and an in-place app.asar patch for the Desktop window. |
| 680 | [zhaoyanbo1/dsh-screenshot-macos](https://github.com/zhaoyanbo1/dsh-screenshot-macos) | 0 | 2026-11-18 | 2026-11-18 | Screenshot button for the DeepSeek Harness composer on macOS — drag-select a region, get an attachment. |
| 681 | [zhiyu1998/dsh-pi-acp](https://github.com/zhiyu1998/dsh-pi-acp) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：通过 ACP（pi-acp）驱动 pi 编码代理，支持后台轮次和设置页面 |
| 682 | [zhiyuanvision-lang/InkMap](https://github.com/zhiyuanvision-lang/InkMap) | 0 | 2026-11-12 | 2026-11-18 | Editable Markmap alternative: Two-way Markdown Mind Map &amp; Mermaid Flowchart Editor for VS Code, Cursor, Claude Desktop, Codex &amp; MCP Apps (npx -y inkmap-mcp) |
| 683 | [zhou200310/dsh-imessage](https://github.com/zhou200310/dsh-imessage) | 0 | 2026-11-17 | 2026-11-18 | 在 iPhone 的「信息」里直接跟 DeepSeek Harness 对话｜iMessage transport for DSH 0.2.2 (Photon/Spectrum), multimodal in &amp; out |
| 684 | [zhouxianjun/dsh-fs-encoding-adaptive](https://github.com/zhouxianjun/dsh-fs-encoding-adaptive) | 0 | 2026-11-16 | 2026-11-18 | Encoding-adaptive FileSystem plugin for DeepSeek Harness (dsh): native UTF-8 / UTF-8 BOM passthrough, byte-exact round-trips for 16 legacy encodings, and encoding-aware grep. |
| 685 | [zhy451/dsh-prompt-natural](https://github.com/zhy451/dsh-prompt-natural) | 0 | 2026-11-18 | 2026-11-18 | Composer prompt enhancement for DSH Web: grows your own draft (natural style) with a bundled skill CLI, offline fallback and undo. |
| 686 | [zihangii/dsh-job-desk](https://github.com/zihangii/dsh-job-desk) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: every background task across sessions on one page, grouped by workspace, session, or script — with output tail and stop controls. |
| 687 | [zijian-ai-projects/dsh-vocab](https://github.com/zijian-ai-projects/dsh-vocab) | 0 | 2026-11-18 | 2026-11-19 | DSH vocab app plugin distribution: release package and checksums. |
| 688 | [ZJ929-max/tokeneconomizer-dsh](https://github.com/ZJ929-max/tokeneconomizer-dsh) | 0 | 2026-11-19 | 2026-11-19 | DeepSeek Harness 移植版：TokenEconomizer 的省钱机制（micro-skills / loop guard / tool pruning）。AI 生成，MPL-2.0。 |
| 689 | [zju-yoyo/dsh-literature-library](https://github.com/zju-yoyo/dsh-literature-library) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: read, translate, summarize, and question papers in a built-in literature library |
| 690 | [zmq6931/dsh-installed-inventory-ad](https://github.com/zmq6931/dsh-installed-inventory-ad) | 0 | 2026-11-19 | 2026-11-19 | Installed inventory for DeepSeek Harness: one panel listing every plugin this profile loads and every skill a conversation can invoke, with enable switches, uninstall, live phase and skill sources. |
| 691 | [zmq6931/dsh-read-aloud-ad](https://github.com/zmq6931/dsh-read-aloud-ad) | 0 | 2026-11-18 | 2026-11-19 | Read DeepSeek Harness replies aloud with the Mandarin Xiaoxiao voice, with a 0.75x-3x speed menu in the reply action row. |
| 692 | [zuoyuan333/dsh-hybrid-workspace-v2](https://github.com/zuoyuan333/dsh-hybrid-workspace-v2) | 0 | 2026-11-19 | 2026-11-19 | Single-chat multi-workspace context routing plugin for DeepSeek Harness: IDF routing, structured memory, budgeted context. |
| 693 | [ZY-WANG-0304/dsh-bundle-presets](https://github.com/ZY-WANG-0304/dsh-bundle-presets) | 0 | 2026-11-18 | 2026-11-18 | Named bundle-set presets for DeepSeek Harness: save, edit, apply and undo bundle compositions from the Plugins page. |
| 694 | [ZY-WANG-0304/dsh-workspace-mover](https://github.com/ZY-WANG-0304/dsh-workspace-mover) | 0 | 2026-11-18 | 2026-11-18 | Move DeepSeek Harness sessions between workspaces, by menu or drag and drop. |
| 695 | [zznobzz/dsh-qwen-sub-oauth](https://github.com/zznobzz/dsh-qwen-sub-oauth) | 0 | 2026-11-18 | 2026-11-18 | Qwen Plus/Pro subscription as a DeepSeek Harness provider: OAuth device flow, automatic token rotation, no API key |
| 696 | [zznobzz/dsh-soul-ru-lang](https://github.com/zznobzz/dsh-soul-ru-lang) | 0 | 2026-11-19 | 2026-11-19 | Russian UI language pack (client overlay) for the dsh-soul personalization plugin — 401 locale keys under the 'soul' namespace |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 01men/ybkkasi
- 108943962/dsh-plugin-rpa-center
- 13711018663/DeepSeek-Harness-BT-
- apolenkov/dsh-provider-proxy
- ayuanxx-max/dsh-smooth
- Carlos5986515/dsh-status-notifier
- CQin04/dsh-playwright-mcp
- CQin04/dsh-usage-timer
- daerwen122/dsh-cpp-compiler
- dariodemh/dsh-whale-maid-mascot
- divelife/dsh-http-header-limit
- FragrantLotus/dsh-sidebar-entries
- glentao-dev/dsh-capability-pack
- glentao-dev/dsh-pdf-toolbox
- glk1220/dsh-session-git
- itsnotalwin/dsh-completo
- kevin9327/dsh-hwp
- M0R1C/dsh-vision-fix-lmstudio
- Minh42/seomatic-mcp
- MoonLoordSaMa/dsh-starr
- OldQin-Aurora/dsh-breeze-tts
- OldQin-Aurora/PortWrench
- oliblue-evan/dsh-liao-usage
- oykb58246/dsh-desktop
- pengtang1024/dsh-clipboard-png
- qikairo7/dsh-github-review
- qiz42144-web/dsh-ai-curfew
- RitchieLeung/dsh-plugin-bot-knowledge
- SajoLuo/dsh-trellis
- shawnyuxuan/dsh-subagent-guide
- songzhou666/gov-hub
- tf961656585/dsh-plugin-user-persona
- tiny-andr/dsh-chinese-cot
- vfuncyy/dsh-edge-bridge
- wanan8396/dsh-frida-toolkit
- weichi-ai/dshd
- WSL043/dsh-chat-manager
- zeki520/dsh-boot-nexus
- Zhang-Eli/dsh-github-trending-masonry
- Zhang-Eli/dsh-matrix-todo
- Zhang-Eli/dsh-one-pack
- ZileiC/dsh-file-recall
- zkw90274-dot/dsh-boot-eye
