# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-18**
- 快照日期 / Snapshot date: **2026-11-18 (UTC)**
- 待审核 / Pending: **346**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **26**
- 改名/身份待复核 / Renames pending review: **33**

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
## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `2228293026/dsh-model-usage` → `HitMargin/dsh-model-usage` — owner changed — transfer needs review
- `FlashPoint007/dsh-wecom-soul-bot` → `clickyotter/dsh-wecom-soul-bot` — owner changed — transfer needs review
- `Jidaron/dsh-browser-bridge` → `C4Hy0/dsh-browser-bridge` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-archive-manager` → `GameGeek-Saikel/dsh-archive-manager` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-coding-preset` → `GameGeek-Saikel/dsh-coding-preset` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-cost-meter` → `GameGeek-Saikel/dsh-cost-meter` — owner changed — transfer needs review
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
- `xiaoxianxian/multi-proxy` → `sif-king/costgate` — owner changed — transfer needs review
- `zendev-lab/cogfold` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `zendev-lab/spark` → `zendev-lab/ulota` — target slug already exists with different data — needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 5067 | 2026-10-11 | 2026-11-18 | Manina AI: let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak. |
| 2 | [liangdabiao/dsh-realman-studio](https://github.com/liangdabiao/dsh-realman-studio) | 21 | 2026-11-17 | 2026-11-18 | 真人剧工坊：真人实拍质感 Seedance 短剧 dsh 插件（skill 快照+即梦官方 CLI 出图出片+跨集接力+机械事故安检）「真人实拍质感 Seedance 分镜」skill 搬进 DeepSeek Harness，并接上即梦官方 CLI（dreamina-canvas）： 一句话故事 → 剧本 / 资产图 / 每集 15 秒真人感分镜 → 在即梦画布上出图出片 → 拼成一部片，全程不用离开对话。 |
| 3 | [klarkxy/ds-dot](https://github.com/klarkxy/ds-dot) | 7 | 2026-11-14 | 2026-11-18 | Dorothy (dot) — an always-on coordinator plugin for DeepSeek Harness that manages workspaces, steers sessions, handles approvals and reminders, and reports back. |
| 4 | [Panmax/dsh-next-step-suggestion](https://github.com/Panmax/dsh-next-step-suggestion) | 6 | 2026-11-18 | 2026-11-18 | Codex-style ghost next-step prompt suggestion plugin for DeepSeek Harness Web |
| 5 | [atlasmarkz/LoopPrism](https://github.com/atlasmarkz/LoopPrism) | 4 | 2026-06-15 | 2026-11-18 | See what your coding agents actually do and spend: sessions, context and cost for Claude Code, Codex, OpenCode, DeepSeek Harness, WorkBuddy. Local-first. |
| 6 | [tk553521/dsh-tavern](https://github.com/tk553521/dsh-tavern) | 4 | 2026-08-16 | 2026-11-18 | DSH 酒馆：SillyTavern 风格角色扮演插件（人物卡 / 世界书 / 预设 / 多 agent） |
| 7 | [joeseesun/qiaomu-subcast-dsh](https://github.com/joeseesun/qiaomu-subcast-dsh) | 3 | 2026-11-18 | 2026-11-18 | 声渡 · 在 DeepSeek Harness 里听播客、读双语字幕、问单集。 · Podcasts, bilingual transcripts, and episode Q&amp;A for DeepSeek Harness. |
| 8 | [yinany79-alt/dsh-island-bridge](https://github.com/yinany79-alt/dsh-island-bridge) | 3 | 2026-11-18 | 2026-11-18 | macOS 原生灵动岛，让 DeepSeek Harness 会话、交付通知和快捷审批触手可及。 |
| 9 | [CN-PA/dsh-jianying-plugin](https://github.com/CN-PA/dsh-jianying-plugin) | 2 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin for safe Jianying Pro editing: subtitles, audio, transitions, export, one-shot diagnostics, readback receipts. Windows + MIT. |
| 10 | [czhmisaka/dsh-fleet](https://github.com/czhmisaka/dsh-fleet) | 2 | 2026-11-18 | 2026-11-18 | Multi-host DeepSeek Harness panel: sessions, dashboards, usage &amp; context pressure, budgets, one-click launch — all from one sidebar page. |
| 11 | [greendoyle/dsh-mcp-live-panel](https://github.com/greendoyle/dsh-mcp-live-panel) | 2 | 2026-11-16 | 2026-11-18 | MCP servers for DeepSeek Harness, managed from the browser. Add, edit, enable, restart, remove — applied live, no config edits, no restart. |
| 12 | [kadaliao/dsh-bots](https://github.com/kadaliao/dsh-bots) | 2 | 2026-11-18 | 2026-11-18 | Bots for DeepSeek Harness: Grok-style bot teams, each bot with its own persona, model, skills and memory, and a dispatcher that hands out the work. |
| 13 | [liaty8/dsh-muteki-preset](https://github.com/liaty8/dsh-muteki-preset) | 2 | 2026-11-15 | 2026-11-18 | Muteki 蜂群 · DeepSeek Harness Agent 预设：黑板事实图 / 证据门 / 按题隔离 / 程序化派单 / Claude Code 异构 |
| 14 | [RainbowLion0320/dsh-model-insights](https://github.com/RainbowLion0320/dsh-model-insights) | 2 | 2026-11-18 | 2026-11-18 | Artificial Analysis intelligence index and Pareto value grades, per reasoning effort, inside the DeepSeek Harness model picker |
| 15 | [RainSnowYY/dsh-second-review](https://github.com/RainSnowYY/dsh-second-review) | 2 | 2026-11-10 | 2026-11-18 | 一个为 DeepSeek Harness (DSH) 提供独立副模型二次评审的插件，做到两个模型接入一个对话，在主模型回答后自动检查潜在风险与代价，必要时可选择副模型接管任务。 |
| 16 | [XiaoFeng7418/dsh-plugin-chat-mode](https://github.com/XiaoFeng7418/dsh-plugin-chat-mode) | 2 | 2026-11-18 | 2026-11-18 | Minimal, tool-free chat preset for DeepSeek Harness (DSH): no workflow prompt, no environment snapshot, no tool schemas. / DSH 极简省 Token 日常对话模式插件 |
| 17 | [YinkaiYu/chat-in-dsh](https://github.com/YinkaiYu/chat-in-dsh) | 2 | 2026-11-18 | 2026-11-18 | 在 DeepSeek Harness 里加一个和网页版一模一样的对话面板：官方界面，不用填 API Key，不受官网限额影响。 |
| 18 | [1bigmouse/dsh-btw-session](https://github.com/1bigmouse/dsh-btw-session) | 1 | 2026-11-18 | 2026-11-18 | Ephemeral side questions in the DeepSeek Harness right sidebar: answered from the current conversation, counted separately, and discarded on close. |
| 19 | [AmazarashiEnduerRain/dsh-unread](https://github.com/AmazarashiEnduerRain/dsh-unread) | 1 | 2026-11-18 | 2026-11-18 | A DSH plugin, enabling unread signal of Codex style. |
| 20 | [aXYer-SI/dsh-architecture-trace](https://github.com/aXYer-SI/dsh-architecture-trace) | 1 | 2026-11-18 | 2026-11-18 | DSH plugin: record every task run as readable Markdown - system prompt, model calls, tool calls, TTFT. 把 DSH 一轮任务的全过程记录成可读的 Markdown。 |
| 21 | [aXYer-SI/dsh-source-catalog](https://github.com/aXYer-SI/dsh-source-catalog) | 1 | 2026-11-18 | 2026-11-18 | DSH plugin: turn past sessions into two bilingual tables of the tools and data sources you actually used. 从历史会话提炼工具与数据源清单：分类、优缺点、可直接打开的网址。 |
| 22 | [BigFatGunn/dsh-approval-chime](https://github.com/BigFatGunn/dsh-approval-chime) | 1 | 2026-11-18 | 2026-11-18 | Web UI chime for DeepSeek Harness tool-permission approval requests, with burst coalescing and full cleanup. |
| 23 | [BiXianGoGo/dsh-ESPemotion-pool](https://github.com/BiXianGoGo/dsh-ESPemotion-pool) | 1 | 2026-11-16 | 2026-11-18 | DSH 插件：三轴情绪状态 + 思考轨迹打点（E/S/P，四态、形状、种子冷启动） |
| 24 | [BunnySakura/dsh-model-capability-detector](https://github.com/BunnySakura/dsh-model-capability-detector) | 1 | 2026-10-28 | 2026-11-18 | 在 DSH 中添加或保存第三方 API 渠道时，自动补全模型的上下文长度、最大输出、识图能力和推理等级等元数据。 |
| 25 | [chelly4/dsh-plugin-cyrene-live2d](https://github.com/chelly4/dsh-plugin-cyrene-live2d) | 1 | 2026-11-17 | 2026-11-18 | A pink-white Cyrene (HSR) Live2D desktop pet for DeepSeek Harness: full-page theme, persona and worldbook injection, relationship memory, plus reminder and notes subplugins. Code MIT; character assets belong to miHoYo. |
| 26 | [chenhw-hjm/dsh-aha-tail](https://github.com/chenhw-hjm/dsh-aha-tail) | 1 | 2026-11-18 | 2026-11-18 | 每轮回复后贴一张表情包的 DSH 插件 \| A DeepSeek Harness plugin that drops a sticker after every finished reply |
| 27 | [chrischjh/dsh-doc-defrag](https://github.com/chrischjh/dsh-doc-defrag) | 1 | 2026-11-18 | 2026-11-18 | 一句话把碎片化的 Markdown 文档收束成少数权威文档，其余归档——永不删除、可一键回滚。One sentence turns fragmented Markdown into a few authoritative documents; the rest is archived, never deleted. |
| 28 | [chuchenai/dshd](https://github.com/chuchenai/dshd) | 1 | 2026-08-16 | 2026-11-18 | dshd is deepseek harness desktop |
| 29 | [cmfok/dsh-feishucard](https://github.com/cmfok/dsh-feishucard) | 1 | 2026-08-14 | 2026-11-18 | DSH &lt;-&gt; Feishu (Lark) bridge, self-developed (not a fork): streaming reply card / many bots in ONE instance (each with own workspace + AGENTS.md) / mention-only group replies / approval cards / /switch workspace &amp; session picker / identity injection / rate-limit + circuit-breaker fallback. 自研 DSH 飞书桥：流式回复卡｜单实例多 bot｜群里 @ 才回复｜审批卡｜工作区切换｜身份注入 |
| 30 | [cwx2/dsh-deepseek-web-panel](https://github.com/cwx2/dsh-deepseek-web-panel) | 1 | 2026-11-18 | 2026-11-18 | 在 DeepSeek Harness 左侧栏嵌一个 chat.deepseek.com 网页版：登录一次自动记住，切回来还在原来的对话。 |
| 31 | [DaozeTang/dsh-session-autospace](https://github.com/DaozeTang/dsh-session-autospace) | 1 | 2026-11-18 | 2026-11-18 | Session Autospace - Start a conversation without picking a workspace. |
| 32 | [dehong831-arch/dsh-context-ledger](https://github.com/dehong831-arch/dsh-context-ledger) | 1 | 2026-11-18 | 2026-11-18 | DSH 原生上下文管理插件，结合历史压缩、本地 SQLite 证据归档与按需检索，让长会话在压缩和重启后仍能追溯原始工具输出、报错与历史记录。 |
| 33 | [Doubtun/dsh-tray-enhance](https://github.com/Doubtun/dsh-tray-enhance) | 1 | 2026-11-18 | 2026-11-18 | Richer Windows tray menu for DeepSeek Harness (DSH): per-item icons, restart, update check, and a light/dark theme submenu. |
| 34 | [Freakz2z/dsh-remote-workbench](https://github.com/Freakz2z/dsh-remote-workbench) | 1 | 2026-11-18 | 2026-11-18 | DSH 原生右侧栏里的 AI 远程工作台：SSH/SFTP、资源监控与 PDF 编辑 |
| 35 | [goodjin/dsh-codex](https://github.com/goodjin/dsh-codex) | 1 | 2026-11-13 | 2026-11-18 | DSH plugin: Codex model row — calls the Codex /responses endpoint directly and reuses the local Codex CLI OAuth credential. |
| 36 | [GxyFly/dsh-message-rewind](https://github.com/GxyFly/dsh-message-rewind) | 1 | 2026-11-18 | 2026-11-18 | Codex-style message editing and conversation rewind for DeepSeek Harness |
| 37 | [Himalaya-Horizon/dsh-streaming-diff](https://github.com/Himalaya-Horizon/dsh-streaming-diff) | 1 | 2026-11-17 | 2026-11-18 | Replays the diff of the edit that just landed, and shows every file the last round changed. |
| 38 | [IVseIce/dsh-mini-notes](https://github.com/IVseIce/dsh-mini-notes) | 1 | 2026-11-18 | 2026-11-18 | 极简便签 — DSH Web 的记事本插件：多页便签、拖拽排序、整体缩放、回收站。纯客户端，无依赖。 |
| 39 | [JieZhiF/dsh-dumate-provider](https://github.com/JieZhiF/dsh-dumate-provider) | 1 | 2026-11-18 | 2026-11-18 | 百度搭子 DuMate 个人会员的 DeepSeek Harness 原生插件：22 个模型进选择器，Cookie 登录、多账号故障切换、余额查询与每日自动签到。Native Baidu DuMate provider plugin for DeepSeek Harness. |
| 40 | [junyisunme/dsh-plugin-my-earth](https://github.com/junyisunme/dsh-plugin-my-earth) | 1 | 2026-11-18 | 2026-11-18 | 把地点数据变成可分享的 My Earth 交互地图的 DeepSeek Harness 插件（公开测试版）。Public-beta DSH bundle with a create_map tool. |
| 41 | [jwitmann/opencode-dev-framework](https://github.com/jwitmann/opencode-dev-framework) | 1 | 2026-08-14 | 2026-11-18 | Enforcement gates for AI coding agents on OpenCode and DeepSeek Harness — guardrails, per-edit lint, and a completion gate that requires proof of done. |
| 42 | [kkqwq7/dsh-skill-categories](https://github.com/kkqwq7/dsh-skill-categories) | 1 | 2026-11-18 | 2026-11-18 | DSH 技能分类中心：技能按分类折叠浏览与拖拽归类，和 skill-hub 共享分类数据。 |
| 43 | [lanechenhku/dsh-post-draft-auto](https://github.com/lanechenhku/dsh-post-draft-auto) | 1 | 2026-11-17 | 2026-11-18 | 本地出稿工作台 + DSH 插件：模型用 post_facts 抓带 source_url 的真实事实（bioRxiv DOI / 2HAI 版本 / npm 包 / URL），自己写中英双语推文与卡片图，你手动复制到 X。不发推、不调 X API、零依赖。 ｜ A local draft desk for DeepSeek Harness: sourced facts in, EN + ZH posts and a card out — you paste it into X yourself. No X API, no credentials, zero dependencies. |
| 44 | [LiiLip/everything-search](https://github.com/LiiLip/everything-search) | 1 | 2026-11-18 | 2026-11-18 | Everything (voidtools) file search inside DeepSeek Harness: instant global search from the sidebar, session header and a full-panel overlay. Works without Everything installed. |
| 45 | [liyu6969/LiveCode](https://github.com/liyu6969/LiveCode) | 1 | 2026-11-17 | 2026-11-18 | a DeepSeek Harness plugin that plays a file's change as it is written, then hands you the settled file with a diff gutter. Tabs per file, theme-token syntax colour, and an animated character scene. |
| 46 | [lyhue1991/dsh-pi-preset](https://github.com/lyhue1991/dsh-pi-preset) | 1 | 2026-08-30 | 2026-11-18 | DSH agent preset running pi's system prompt and tools, with pi-codex's non-blocking bash |
| 47 | [magiccyclingz/dsh-design-leapavid](https://github.com/magiccyclingz/dsh-design-leapavid) | 1 | 2026-11-17 | 2026-11-18 | DeepSeek Harness 侧栏视觉设计插件：84 套品牌设计语言的风格库，按风格生成网页 / 幻灯片 / 信息图 |
| 48 | [mehmetoguzderin/ud-agent-skill-mcp-plugin](https://github.com/mehmetoguzderin/ud-agent-skill-mcp-plugin) | 1 | 2026-11-17 | 2026-11-18 | UDAgent: UD Skills, MCPs, Plugins, and Extensions for Agents, Harnesses, and QSLMs |
| 49 | [minglong142857-web/antigravity-armor-break](https://github.com/minglong142857-web/antigravity-armor-break) | 1 | 2026-11-18 | 2026-11-18 | antigravity破甲 · Antigravity armor-break kit（hooks + TLS relay）+ DeepSeek Harness 补丁包（9 patches, drift=0） |
| 50 | [mycroft-sherlock/apple-design](https://github.com/mycroft-sherlock/apple-design) | 1 | 2026-11-18 | 2026-11-18 | Apple HIG design-review skill wrapper for DeepSeek Harness |
| 51 | [naliehu/outbreak-report-writing](https://github.com/naliehu/outbreak-report-writing) | 1 | 2026-11-18 | 2026-11-18 | 传染病现场流行病学调查报告（流调报告）撰写技能 + DeepSeek Harness 插件：有限信息可出稿，缺项分级，自动配图，直出 Word/PDF/Markdown |
| 52 | [nianzhiyao/dsh-role-card](https://github.com/nianzhiyao/dsh-role-card) | 1 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：手机连局域网就能控制这台电脑上的 DSH 工作区（接着聊、投任务、看执行）；也是侧边栏角色卡，粘一张卡就开演，支持链接/PNG 卡导入、AI 扩写与小说分章推进。 |
| 53 | [poweredbyai/geo-desk](https://github.com/poweredbyai/geo-desk) | 1 | 2026-11-18 | 2026-11-18 | AI 搜索可见度工作台：问题库、采样、指标、洞察、行动方案与客户报告（DeepSeek Harness 插件，脱敏演示） |
| 54 | [QIU-KKKK/DeepSeek-Harness-BT](https://github.com/QIU-KKKK/DeepSeek-Harness-BT) | 1 | 2026-11-16 | 2026-11-18 | 用AI制作的一个插件/A plugin created using AI |
| 55 | [QqiqiQ/dsh-text-count](https://github.com/QqiqiQ/dsh-text-count) | 1 | 2026-11-18 | 2026-11-18 | DSH 字数统计工具：中文按字、西文按词，另给标点/字符/字素/行数与 UTF-8 字节，并可用 min/max 区间判定是否达标。 |
| 56 | [Richard-He-happy/sci-agent](https://github.com/Richard-He-happy/sci-agent) | 1 | 2026-11-14 | 2026-11-18 | Scientific agent skills: literature reading, academic writing, scientific figures, presentations, skill design and agent pipelines (DSH plugin). |
| 57 | [shinji00222/dsh-persona-continuity](https://github.com/shinji00222/dsh-persona-continuity) | 1 | 2026-11-17 | 2026-11-18 | 每个人格一份独立的跨会话长期记忆（SQLite 持久化、旧对话检索与导入），内置问卷模拟与真人数据校准 · Per-persona cross-session memory and survey simulation for DeepSeek Harness. |
| 58 | [sjnole/dsh-whale-dream](https://github.com/sjnole/dsh-whale-dream) | 1 | 2026-11-18 | 2026-11-18 | 鲸梦 · DSH 主题插件：启动屏 / 海洋背景 / 外观皮肤 \| Whale Dream - a DeepSeek Harness theme plugin |
| 59 | [tshui1/dsh-skill-autoload](https://github.com/tshui1/dsh-skill-autoload) | 1 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: auto-load the matching installed skill from the user's message, no trigger word needed. |
| 60 | [vicfei/dsh-EvoOntology](https://github.com/vicfei/dsh-EvoOntology) | 1 | 2026-11-18 | 2026-11-18 | Self-evolving ontology layer for DeepSeek Harness — evolution engine with evidence on every record; phase 1 powers the family agents, growing into the full ontology layer. Concept of ruc-datalab/EvoOntology (MIT), clean-room, not affiliated. |
| 61 | [whisperflo/dsh-deepseek-console](https://github.com/whisperflo/dsh-deepseek-console) | 1 | 2026-08-22 | 2026-11-18 | DeepSeek 账户控制台：实时余额监控 / 用量与成本统计 / 消费额度管理 / 全局悬浮 HUD（官方 API 直连，Key 仅存本机） |
| 62 | [xiaoxia-5201314/dsh-media-bridge](https://github.com/xiaoxia-5201314/dsh-media-bridge) | 1 | 2026-11-17 | 2026-11-18 | DSH 插件：语音转写 / TTS / 生图 / 生视频，每次调用只打一个上游，失败返回结构化错误码 |
| 63 | [yueshao-hash/dsh-session-delete](https://github.com/yueshao-hash/dsh-session-delete) | 1 | 2026-11-18 | 2026-11-18 | 在会话右键菜单（和标题栏）加一个「删除对话」：真的把会话日志（session.vN.jsonl.zstd）从磁盘删掉，并刷新侧栏列表。DSH 原生只有「归档」（可恢复的隐藏）。 |
| 64 | [zhaoqiminggg/dsh-quickshot](https://github.com/zhaoqiminggg/dsh-quickshot) | 1 | 2026-11-18 | 2026-11-18 | 给 DeepSeek Harness 的全局快捷键截图：任意界面按快捷键框选，截图直接进当前会话输入框 |
| 65 | [00wz/dsh-compaction-carryover](https://github.com/00wz/dsh-compaction-carryover) | 0 | 2026-11-18 | 2026-11-18 | Keeps skills and subagents in the DSH compaction checkpoint: the summarizer records a Carry-over section. |
| 66 | [2-qing/dsh-aftermath](https://github.com/2-qing/dsh-aftermath) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：记录每轮对话中观测目录的文件变更，事后可倒查改了什么、出自哪条命令。 |
| 67 | [23KeyPosition/dsh-stardew-skins](https://github.com/23KeyPosition/dsh-stardew-skins) | 0 | 2026-11-18 | 2026-11-18 | Stardew Valley seasonal skin for DeepSeek Harness (third-party, unofficial) |
| 68 | [3309602454/dsh-edge-pilot](https://github.com/3309602454/dsh-edge-pilot) | 0 | 2026-11-18 | 2026-11-18 | Drive the system Microsoft Edge from DeepSeek Harness: observe, click, type, scroll, screenshot, save-as, download, and replay saved skills. |
| 69 | [66Ronghua99/dsh-notifier](https://github.com/66Ronghua99/dsh-notifier) | 0 | 2026-11-18 | 2026-11-18 | macOS session notifications for DeepSeek Harness: a native banner plus a whale reminder doll that jumps to the finished session. |
| 70 | [781237194/agile-workbench](https://github.com/781237194/agile-workbench) | 0 | 2026-11-04 | 2026-11-18 | PM工作台（Agile Workbench）：本地优先的多角色项目工作台（Electron + DeepSeek Harness）。需求流程：分析师写正文 → 产品评审 → Owner评审门 → PM派开发 → 测试独立复验 → Owner本人验收（代管不可代验需求）。缺陷流程：任意角色立单（复现+验收标准）→ PM派开发 → 修复提交 → 测试复验 → PM/测试验收。一句话安装：dsh-agile-workbench |
| 71 | [7nian173/dsh-session-orchestrator](https://github.com/7nian173/dsh-session-orchestrator) | 0 | 2026-11-17 | 2026-11-18 | 让 DeepSeek Harness 里的多个会话可以互相创建、互相跳转、互相写信。 |
| 72 | [Aaron-lmh/dsh-side-chat](https://github.com/Aaron-lmh/dsh-side-chat) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏「侧边对话」：把主对话当背景的临时问答面板，灵感来自 Codex 的 side conversation。 |
| 73 | [admiremaozhuxi/dsh-bili-learn](https://github.com/admiremaozhuxi/dsh-bili-learn) | 0 | 2026-11-18 | 2026-11-18 | 让 AI 真正读懂 B 站视频：字幕、评论、画面、口播一次拿全。DeepSeek Harness 插件，装完即用，不需要 Python。 |
| 74 | [afeiaswell/dsh-hkm](https://github.com/afeiaswell/dsh-hkm) | 0 | 2026-11-18 | 2026-11-18 | Hotkey manager panel for DeepSeek Harness: browse and edit DSH shortcuts, scan system and third-party sources, and minimize the window to the Windows notification area. |
| 75 | [ai-graveyard/dsh-skin](https://github.com/ai-graveyard/dsh-skin) | 0 | 2026-08-15 | 2026-11-18 | Independent visual skins for the DeepSeek Harness Web UI |
| 76 | [AION-Battlecruiser/dsh-worker-orchestrator](https://github.com/AION-Battlecruiser/dsh-worker-orchestrator) | 0 | 2026-11-18 | 2026-11-18 | Token-saving orchestrator for the DeepSeek Harness desktop app: the main session only splits the work, workers with their own conversations do it — call caps, lazy verification and window rotation enforced in code. |
| 77 | [AlexisVon/dsh-living](https://github.com/AlexisVon/dsh-living) | 0 | 2026-11-18 | 2026-11-18 | A living agent runtime for DeepSeek Harness: clock, memory, persona, and WorldGem modules |
| 78 | [alst123/dsh-session-delete](https://github.com/alst123/dsh-session-delete) | 0 | 2026-11-18 | 2026-11-18 | DSH插件：向DeepSeek Harness会话列表添加一个真正的“删除会话”右键操作。DSH原生仅支持归档。DSH plugin: add a real "Delete Session" right-click action to DeepSeek Harness session list. DSH natively only supports archive. |
| 79 | [amd47802574/dsh-artifacts](https://github.com/amd47802574/dsh-artifacts) | 0 | 2026-11-15 | 2026-11-18 | DSH 产物管家插件：左侧栏浏览与管理 DSH 生成的产物，彩色卡片/列表双视图 |
| 80 | [amoswzw/dsh-macos-menu-bar](https://github.com/amoswzw/dsh-macos-menu-bar) | 0 | 2026-11-18 | 2026-11-18 | macOS menu bar and notch access for DeepSeek Harness Desktop, with native approval prompts |
| 81 | [Andrewich/dsh-opencode-go](https://github.com/Andrewich/dsh-opencode-go) | 0 | 2026-11-18 | 2026-11-18 | OpenCode Go usage panel for the DeepSeek Harness Web UI — allowance meters and subscription renewal date. |
| 82 | [arrongao/dsh-turn-ding](https://github.com/arrongao/dsh-turn-ding) | 0 | 2026-11-14 | 2026-11-18 | Windows taskbar unread badge and completion chime for DeepSeek Harness turns. |
| 83 | [ArthurZhu1992/dsh-lang-rule](https://github.com/ArthurZhu1992/dsh-lang-rule) | 0 | 2026-11-18 | 2026-11-18 | 部署级语言策略：DSH 全体 agent（含子智能体、团队、后台任务）的推理与产出一律简体中文。Deployment-level Chinese language policy for DeepSeek Harness. |
| 84 | [as1164/dsh-global-search](https://github.com/as1164/dsh-global-search) | 0 | 2026-11-18 | 2026-11-18 | Full-text search across every session workspace from a sidebar panel, with one-click opening of the matched session. |
| 85 | [ashley-dot-oss/dsh-persona-lab](https://github.com/ashley-dot-oss/dsh-persona-lab) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：从 B站 视频评论、字幕与弹幕里学「怎么说话、是什么样的人」，按学习区隔离产出可移植的人设词（纯文本 / SillyTavern 卡）。AI 协助制作。 |
| 86 | [asterdot/dsh-prompt-pilot](https://github.com/asterdot/dsh-prompt-pilot) | 0 | 2026-11-18 | 2026-11-18 | 提示词领航：DSH 草稿改写、首条消息模式建议与两档技能推荐。非官方二改。 |
| 87 | [Astral-Yang/dsh-plugin-link-resolver](https://github.com/Astral-Yang/dsh-plugin-link-resolver) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：B站 / 抖音 / 小红书 / 微博 / X / YouTube 链接一步解析、下载并交付到 Web 或 IM，模型只负责播报结果。 |
| 88 | [BadWolfZXY/dsh-emoji-panel](https://github.com/BadWolfZXY/dsh-emoji-panel) | 0 | 2026-11-18 | 2026-11-18 | Emoji picker for the DeepSeek Harness composer: category tabs, search, ecents, and a custom meme libr |
| 89 | [Bavoch/dsh-plugins](https://github.com/Bavoch/dsh-plugins) | 0 | 2026-11-18 | 2026-11-18 | 面向 DeepSeek Harness 的社区插件，涵盖侧栏、会话、任务状态和额度显示 |
| 90 | [BrathonBai/whale-watcher](https://github.com/BrathonBai/whale-watcher) | 0 | 2026-10-31 | 2026-11-18 | 鲸鲸 · SenseCAP Watcher 具身端：BLE-only 固件 + DSH 插件桥；语音走 DeepSeek ASR/TTS。 |
| 91 | [buxu777/dsh-theme-buxu](https://github.com/buxu777/dsh-theme-buxu) | 0 | 2026-11-12 | 2026-11-18 | 不虚 · 质肤 / Buxu Skin — 六套单色相配色方案，强调色与推理强度条随配色一起切换，对话头像按配色自适应，含独立设置页 |
| 92 | [CC2027MK2/dsh-peer](https://github.com/CC2027MK2/dsh-peer) | 0 | 2026-11-18 | 2026-11-18 | MCP bridge that lets the DSH agent on one machine call the DSH agent on another (streamable-HTTP, zero dependencies). |
| 93 | [cccjj55/dsh-plugin-bench](https://github.com/cccjj55/dsh-plugin-bench) | 0 | 2026-11-18 | 2026-11-18 | dsh plugin: benchmark a command with warmup, spread verdict and an environment fingerprint — refuses to call a noisy sample a measurement |
| 94 | [cccjj55/dsh-plugin-wsl](https://github.com/cccjj55/dsh-plugin-wsl) | 0 | 2026-11-18 | 2026-11-18 | dsh plugin: run bash inside WSL from dsh (wsl_sh tool with exit code, timeout, truncation notice) |
| 95 | [cccuuuhhh/dsh-sidebar-more](https://github.com/cccuuuhhh/dsh-sidebar-more) | 0 | 2026-11-18 | 2026-11-18 | Fold every DeepSeek Harness sidebar panel row into the built-in More menu, leaving a single More row above the workspace list. |
| 96 | [ccflort/moodtone](https://github.com/ccflort/moodtone) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 皮肤插件：6 套情绪配色、9 个语义色自定义、7 种气泡样式与玻璃材质。 |
| 97 | [ccr-wer/dsh-Lifecycle-Cache-Cleaner](https://github.com/ccr-wer/dsh-Lifecycle-Cache-Cleaner) | 0 | 2026-11-12 | 2026-11-18 | DSH 本地 Agent 的 KV cache 生命周期管理：探测不到本地部署就不动引擎（fail-closed） |
| 98 | [changmingjuebumaimeng3666/dsh-metabolism](https://github.com/changmingjuebumaimeng3666/dsh-metabolism) | 0 | 2026-11-18 | 2026-11-18 | 上下文代谢，压缩前原文归档进本地茅房，配指针摘要与按时间加权召回。 |
| 99 | [chddydwd/dsh-eye](https://github.com/chddydwd/dsh-eye) | 0 | 2026-11-18 | 2026-11-18 | dsh-eye（鲸鲸的眼睛 · screen ring）—— 给 AI 装一双「看得见刚才」的眼睛：内存环采屏 + 回看 + 读字 + 找控件 + 隐私打码（DSH 插件，Windows，MIT） |
| 100 | [chen1880216/dsh-side-assistant](https://github.com/chen1880216/dsh-side-assistant) | 0 | 2026-11-18 | 2026-11-18 | DSH 侧边助理：右侧栏里的中文助理，把需求说清楚后转达给主会话，并跟进它的进展 |
| 101 | [chenxubin2016/dsh-workspace-curator](https://github.com/chenxubin2016/dsh-workspace-curator) | 0 | 2026-11-18 | 2026-11-18 | Workspace and session management for DeepSeek Harness / DeepSeek Harness 工作区与会话管理：整理工作区，归档或永久删除会话。 |
| 102 | [cheso-ai-platform/dsh-cheso-design](https://github.com/cheso-ai-platform/dsh-cheso-design) | 0 | 2026-11-17 | 2026-11-18 | AI Creative Companion for Stunning Presentations, Posters &amp; Videos |
| 103 | [chuilian/dsh-prompt-polish](https://github.com/chuilian/dsh-prompt-polish) | 0 | 2026-10-19 | 2026-11-18 | DSH Web 输入框一键润色插件 |
| 104 | [chuilian/dsh-session-trash](https://github.com/chuilian/dsh-session-trash) | 0 | 2026-10-19 | 2026-11-18 | DSH 会话两步确认删除 + 回收站插件 |
| 105 | [clarois/dsh-nutaraline-credits](https://github.com/clarois/dsh-nutaraline-credits) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness bundle: show your Nutaraline gateway balance and usage in a Settings section. |
| 106 | [creekmoon/dsh-openrouter-provider-router](https://github.com/creekmoon/dsh-openrouter-provider-router) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness (DSH) 插件：把 OpenRouter 模型固定到你指定的上游供应商 / DSH plugin that pins each OpenRouter model to the providers you choose |
| 107 | [cuteG41cute/dsh-tts](https://github.com/cuteG41cute/dsh-tts) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: read assistant replies aloud via any OpenAI-compatible TTS endpoint |
| 108 | [CyberPzy/dsh-prompt-smith](https://github.com/CyberPzy/dsh-prompt-smith) | 0 | 2026-11-17 | 2026-11-18 | DeepSeek Harness plugin: one-click prompt enhancement next to the composer model seat |
| 109 | [czwjss/feishu-bot-im](https://github.com/czwjss/feishu-bot-im) | 0 | 2026-10-18 | 2026-11-18 | 飞书机器人IM |
| 110 | [dai428/dsh-skill-switch](https://github.com/dai428/dsh-skill-switch) | 0 | 2026-11-18 | 2026-11-18 | Per-session switches for DSH skills: turn one on once and its rules apply to every reply at the level you picked, without naming it again. |
| 111 | [daishaodong/dsh-task-center](https://github.com/daishaodong/dsh-task-center) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: one sidebar entry for every running or waiting Agent, with macOS notifications and project ordering by recent activity. |
| 112 | [Darianliu23/dsh-civ6](https://github.com/Darianliu23/dsh-civ6) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: let the session's own model play Civilization VI via civ6-mcp. Presets for AI plays / advisor / co-op with takeover, plus a civ6 gateway tool for any session. |
| 113 | [DarkLineX/DSHSpeed](https://github.com/DarkLineX/DSHSpeed) | 0 | 2026-11-18 | 2026-11-18 | DSH (DeepSeek Harness) 时间审计插件：把每个回合的墙钟拆成模型往返 / 工具执行 / 宿主间隙，并把模型往返拆成首 token 等待、思考流、工具参数流、正文流。附 pwsh 解析失败、会话日志多帧 zstd、工具截断等取证报告。 |
| 114 | [DASHAN-0079/dsh-superagent-adapt](https://github.com/DASHAN-0079/dsh-superagent-adapt) | 0 | 2026-11-10 | 2026-11-18 | dsh-superagent adapted to DeepSeek Harness 0.2.2-rc.3: five source changes, added tests, equivalence evidence |
| 115 | [dingchenhui0618-arch/dsh-sfx-pad](https://github.com/dingchenhui0618-arch/dsh-sfx-pad) | 0 | 2026-11-17 | 2026-11-18 | Event sound pad for DeepSeek Harness: bind test/build/recording/publish outcomes to local audio files, preview, one-click mute, and mute profiles that follow the current app. Reads local audio only. |
| 116 | [Diomchen/dsh-better-tag](https://github.com/Diomchen/dsh-better-tag) | 0 | 2026-11-18 | 2026-11-18 | Give DeepSeek Harness sessions flat tags and a persistent done stamp · DSH 会话标签与完成章 |
| 117 | [DIONG39/dsh-local-history](https://github.com/DIONG39/dsh-local-history) | 0 | 2026-11-17 | 2026-11-18 | 可将DeepSeek网页版聊天记录1:1完整移植到DSH go，且支持按需选择。 |
| 118 | [dongsheng123132/dsh-project-gallery](https://github.com/dongsheng123132/dsh-project-gallery) | 0 | 2026-11-18 | 2026-11-18 | 项目相册：DeepSeek Harness 插件，把会话与项目目录里的图按项目攒成一册，悬停即看、点开有当时的对话与进展；零运行时依赖，MIT。 |
| 119 | [dsh-plugins/dsh-workspace-group](https://github.com/dsh-plugins/dsh-workspace-group) | 0 | 2026-11-18 | 2026-11-18 | 为 DeepSeek Harness 工作区创建分区，支持右键归类、拖动移动与折叠。 |
| 120 | [echo-ix/dsh-andrej-karpathy](https://github.com/echo-ix/dsh-andrej-karpathy) | 0 | 2026-11-18 | 2026-11-18 | A DeepSeek Harness plugin that adds the karpathy-guidelines skill: four behavioral rules for coding work, derived from Andrej Karpathy's observations on LLM coding pitfalls. It is a DSH adaptation of multica-ai/andrej-karpathy-skills. |
| 121 | [edsml-jz2321/dsh-evokit](https://github.com/edsml-jz2321/dsh-evokit) | 0 | 2026-11-13 | 2026-11-18 | Measured self-improvement for AI systems: paired experiments, noise-aware gates, holdout confirmation. A DeepSeek Harness plugin. |
| 122 | [Effortful-lion/dsh-skin-muro](https://github.com/Effortful-lion/dsh-skin-muro) | 0 | 2026-11-18 | 2026-11-18 | Muro 4K wallpapers as a DeepSeek Harness skin — browse, download, apply, tune contrast. Light/dark aware. |
| 123 | [elegant01/dsh-mcp-connectors](https://github.com/elegant01/dsh-mcp-connectors) | 0 | 2026-11-17 | 2026-11-18 | DSH MCP Connectors — cross-agent MCP server manager or DeepSeek Harness |
| 124 | [elvisw/dsh-plugin-magic-context](https://github.com/elvisw/dsh-plugin-magic-context) | 0 | 2026-11-10 | 2026-11-18 | Magic Context for DeepSeek Harness: reversible context reclaim, an out-of-band historian, an m\[0\]/m\[1\] memory baseline, project memories, and the compaction seam. |
| 125 | [EndlessPoem/dsh-ip-info](https://github.com/EndlessPoem/dsh-ip-info) | 0 | 2026-10-30 | 2026-11-18 | Shows your public IP, location and provider under the composer or in a floating card, at Harness's text size — and can be turned off.  \|  在输入框下方或悬浮窗里显示当前公网 IP、归属地与运营商，字号跟随 Harness，随时可以关掉。 |
| 126 | [EndlessPoem/dsh-session-delete](https://github.com/EndlessPoem/dsh-session-delete) | 0 | 2026-10-29 | 2026-11-18 | A real "Delete session" for DeepSeek Harness. Not archive - erase. \| 真正的「删除会话」，不是归档，是删干净。 |
| 127 | [EricStoneChina/better-auto-review](https://github.com/EricStoneChina/better-auto-review) | 0 | 2026-11-18 | 2026-11-18 | Codex-style auto review for DeepSeek Harness: keep the workspace-write sandbox and review only explicit privilege escalations. |
| 128 | [EricWang1358/dsh-connect-dumate](https://github.com/EricWang1358/dsh-connect-dumate) | 0 | 2026-11-17 | 2026-11-18 | 百度搭子（DuMate）DeepSeek Harness 模型接入插件：复用桌面端登录态、Loopback OpenAI Shim、独立积分看板、每日签到与实测倍率显示 |
| 129 | [Ernesto-yuan/dsh-theme-switcher](https://github.com/Ernesto-yuan/dsh-theme-switcher) | 0 | 2026-11-18 | 2026-11-18 | Personalization for DeepSeek Harness: 20 light/dark palettes including macaron gradients and a rainbow, eight emoji backgrounds plus a custom image, frosted glass, and a pinned sidebar page. |
| 130 | [eternalnan/dsh-chat-preset](https://github.com/eternalnan/dsh-chat-preset) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness agent preset: plain chat with web search as the only tool (Chat模式) |
| 131 | [farons/dsh-terminal-hub](https://github.com/farons/dsh-terminal-hub) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：一个侧栏面板列出所有会话的终端，显示状态、跳转所属会话，并只读展示终端控制器注册的启动器候选 |
| 132 | [feely0208/dsh-ai-label-stamp](https://github.com/feely0208/dsh-ai-label-stamp) | 0 | 2026-11-18 | 2026-11-18 | 给 docx/png/txt 写入 GB 45438 隐式标识元数据（AIGC 关键词 + 五要素），是 dsh-ai-label-verify 验标的执行端 |
| 133 | [feely0208/dsh-ai-label-verify](https://github.com/feely0208/dsh-ai-label-verify) | 0 | 2026-11-18 | 2026-11-18 | 按 GB 45438-2025 附录E 验证生成文件的隐式标识：元数据含 AIGC 关键词字段 + 五要素（生成标签/服务提供者/服务编号/内容编号），支持 png/jpg/docx/pdf/wav/txt |
| 134 | [feely0208/dsh-cn-agreement-check](https://github.com/feely0208/dsh-cn-agreement-check) | 0 | 2026-11-18 | 2026-11-18 | 检查用户协议/隐私政策文本的条款级红线：单方最终解释权、不合理管辖约定、单方解除权、自动续费未提示、个人信息捆绑授权——每条带法规出处 |
| 135 | [feely0208/dsh-context-budget](https://github.com/feely0208/dsh-context-budget) | 0 | 2026-11-18 | 2026-11-18 | 估算应用的上下文占用：system prompt + 工具定义 + 历史轮次 → token 估算与占比，提示截断风险，费率联动全家桶价格 |
| 136 | [feely0208/dsh-industry-fitness](https://github.com/feely0208/dsh-industry-fitness) | 0 | 2026-11-18 | 2026-11-18 | 健身行业多出来的那几项：预付卡余额/退费、教练资质、安全防护、合同冷静期——预付卡跑路是近年投诉热点 |
| 137 | [feely0208/dsh-llm-endpoint-audit](https://github.com/feely0208/dsh-llm-endpoint-audit) | 0 | 2026-11-18 | 2026-11-18 | 扫描代码里所有大模型 API 端点（DeepSeek/OpenAI/Anthropic/Gemini/通义/月之暗面/智谱/MiniMax…），出供应商矩阵：调了谁、传了什么、隐私政策是否披露——个保法告知义务按服务商逐个算 |
| 138 | [feely0208/dsh-prompt-catalog](https://github.com/feely0208/dsh-prompt-catalog) | 0 | 2026-11-18 | 2026-11-18 | 扫描代码与文档里散落的大模型提示词（system prompt 字符串、模板），建台账：在哪、多长、改过没——全家桶应用开发者的提示词资产管理 |
| 139 | [feely0208/dsh-prompt-regression](https://github.com/feely0208/dsh-prompt-regression) | 0 | 2026-11-18 | 2026-11-18 | 改 system prompt 或换模型后，用固定的评测集回放验证：预期包含/排除的关键点是否仍然通过，出通过率与 drift 报告。联网可选，费用预估后确认 |
| 140 | [feely0208/dsh-session-search](https://github.com/feely0208/dsh-session-search) | 0 | 2026-11-18 | 2026-11-18 | 在本机全部 DSH 会话日志（zstd 压缩 JSONL）里全文检索：这个话题在哪次会话聊过、当时怎么做的——找回散落在几十次会话里的解决方案 |
| 141 | [feely0208/dsh-tool-schema-lint](https://github.com/feely0208/dsh-tool-schema-lint) | 0 | 2026-11-18 | 2026-11-18 | 检查暴露给大模型的工具定义（tools 数组 / MCP 工具清单）：描述质量、schema 完整性、命名规范、与官方工具冲突、危险工具无确认说明——模型靠描述选工具，定义写得差=选错工具 |
| 142 | [femnn/dsh-markdown-docs](https://github.com/femnn/dsh-markdown-docs) | 0 | 2026-11-18 | 2026-11-18 | Markdown workbench for the DeepSeek Harness right sidebar: browse, preview, edit, drop files and folders in, and follow the documents a file references. |
| 143 | [femnn/dsh-plugin-yangmao](https://github.com/femnn/dsh-plugin-yangmao) | 0 | 2026-11-18 | 2026-11-18 | 薅羊毛情报看板 · DeepSeek Harness 插件：羊毛情报聚合、今日精选、三板块（雷达/VPS/Token）与智能体复核回写 |
| 144 | [flydubaitower/dsh-dafeiyu-counter](https://github.com/flydubaitower/dsh-dafeiyu-counter) | 0 | 2026-11-18 | 2026-11-18 | A third conversation view for DeepSeek Harness: a full-state 2K character scene with a status sign, the latest reply on a desk, attachments and a workbench pill. Pure client UI, no network, MIT. |
| 145 | [flying-ovaltine/chronic-care-workbench](https://github.com/flying-ovaltine/chronic-care-workbench) | 0 | 2026-11-18 | 2026-11-18 | Patient-facing chronic care workbench for DSH: graded health profile, medication timeline, self-contained trend charts, red-flag alerts, pregnancy gate, four-level care advice. |
| 146 | [flying-ovaltine/endo-decision-workbench](https://github.com/flying-ovaltine/endo-decision-workbench) | 0 | 2026-11-18 | 2026-11-18 | Endocrinology decision workbench for DSH: dual-axis differential ranking with counter-evidence validation, six evidence grades, emergency red-flag interruption. |
| 147 | [foreverbelief/dsh-input-history-recall](https://github.com/foreverbelief/dsh-input-history-recall) | 0 | 2026-11-18 | 2026-11-18 | Double-press ArrowUp/ArrowDown in the DeepSeek Harness Web composer to recall this session's sent messages. |
| 148 | [freeman745/dsh-janction-render](https://github.com/freeman745/dsh-janction-render) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: render Blender scenes and 3D models on cloud GPUs with JANCTION Render (MCP server + workflow skill) |
| 149 | [fufufuwa/dsh-workspace-sync](https://github.com/fufufuwa/dsh-workspace-sync) | 0 | 2026-11-18 | 2026-11-18 | Automatically track and synchronize local project/workspace directory renames in DeepSeek Harness (dsh) via filesystem inode identity. |
| 150 | [fundapi-cn/fundapi-dsh-plugin](https://github.com/fundapi-cn/fundapi-dsh-plugin) | 0 | 2026-11-18 | 2026-11-18 | 基金数据 API 官方 DeepSeek Harness 插件 —— 输个包名即装，19 个基金工具（净值 / 持仓 / 调仓 / 经理 / 评级 / 排行 / 选基 / 组合穿透 / 分红 / 交易规则），免费工具无需 Key｜Official DeepSeek Harness plugin for the Fund Data API — 19 fund tools for AI agents (NAV, holdings, managers, ratings, screening), free tools need no key |
| 151 | [FYTG-Sprite/dsh-shenhai-skin](https://github.com/FYTG-Sprite/dsh-shenhai-skin) | 0 | 2026-11-18 | 2026-11-18 | Deep sea glass dynamic video wallpaper skin for DeepSeek Harness · 蜃海动态皮肤 |
| 152 | [gabsferreira/dsh-web-search-searchapi](https://github.com/gabsferreira/dsh-web-search-searchapi) | 0 | 2026-11-18 | 2026-11-18 | SearchApi search provider for the DeepSeek Harness web seam: web_search returns Google results as structured sources |
| 153 | [ganglz1024/dsh-weather-matrix-widget](https://github.com/ganglz1024/dsh-weather-matrix-widget) | 0 | 2026-11-18 | 2026-11-18 | Floating pixel-matrix weather widget for the DeepSeek Harness Web UI: animated tile scene, hourly + 3-day forecast, city search, custom sizes and a minimized pill. |
| 154 | [GarinZ/dsh-sidebar-view](https://github.com/GarinZ/dsh-sidebar-view) | 0 | 2026-11-18 | 2026-11-18 | Time-bucket grouping (today/yesterday/this week/earlier) and status tabs for the DeepSeek Harness sidebar. Seats on the shipped workspace browser; any failure falls back to the shipped UI. |
| 155 | [ginxiu0330-sketch/dsh-plugin-doctor](https://github.com/ginxiu0330-sketch/dsh-plugin-doctor) | 0 | 2026-11-18 | 2026-11-18 | Read-only health check for a DSH profile: plugin upgrade status, DSH compatibility, patch overrides and shadowed skills. |
| 156 | [goodjin/dsh-auto-resume](https://github.com/goodjin/dsh-auto-resume) | 0 | 2026-11-11 | 2026-11-18 | DSH 插件：桌面版启动后自动继续异常中断的会话（崩溃/退出/网络与限速错误按周期重试），用户主动停的永不续；账目路由 /auto-resume/health |
| 157 | [GrounzerLiu/dsh-plan-steps](https://github.com/GrounzerLiu/dsh-plan-steps) | 0 | 2026-11-16 | 2026-11-18 | Reasonix-style plan steps for DeepSeek Harness: two-level plans, one sign-off path, a live plan panel |
| 158 | [gucheng990615/dsh-token-usage-panel](https://github.com/gucheng990615/dsh-token-usage-panel) | 0 | 2026-11-18 | 2026-11-18 | Real-time token usage and account balance panel for DeepSeek Harness |
| 159 | [hakudi-a/Eva_dsh_Asuka_Rei](https://github.com/hakudi-a/Eva_dsh_Asuka_Rei) | 0 | 2026-11-16 | 2026-11-18 | Two Evangelion palettes for the DeepSeek Harness Web UI: graphite and red for Asuka in dark mode, porcelain and blue for Rei in light mode. |
| 160 | [handy-git/dsh-workspace-active-top](https://github.com/handy-git/dsh-workspace-active-top) | 0 | 2026-11-18 | 2026-11-18 | 发消息时，当前工作区自动排到侧边栏分区的最前面。 |
| 161 | [HanochZhu/dsh-cam-plugin](https://github.com/HanochZhu/dsh-cam-plugin) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin for the local cam code graph and solution memory |
| 162 | [Hao0311/dsh-model-price](https://github.com/Hao0311/dsh-model-price) | 0 | 2026-11-18 | 2026-11-18 | Peak / off-peak price clock for the model: a short passive system-prompt note telling the agent whether the DeepSeek API is in peak (2x) or off-peak (half-price) hours. |
| 163 | [Hao0311/dsh-sidebar-tidy](https://github.com/Hao0311/dsh-sidebar-tidy) | 0 | 2026-11-18 | 2026-11-18 | Collapse the DSH Web GUI sidebar into Plugins / Automations / More - every other panel row moves into a More menu, and new panels land there automatically. |
| 164 | [hehuifeng/dsh-dreams](https://github.com/hehuifeng/dsh-dreams) | 0 | 2026-11-18 | 2026-11-18 | Dreaming memory for DeepSeek Harness: idle passes replay transcripts into quoted notes and a small always-injected brief |
| 165 | [hexiaobai2012/gongwen-writer](https://github.com/hexiaobai2012/gongwen-writer) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 中文公文写作插件：首轮检索与框架候选、GB/T 9704 Word、实时打磨稿、逐段逐句推敲、官方来源事实核查与项目记忆。 |
| 166 | [HiSeax/dsh-superagent](https://github.com/HiSeax/dsh-superagent) | 0 | 2026-11-18 | 2026-11-18 | Windows-friendly multi-agent orchestration for DSH: WeChat channel, ticket board, policy-driven accept, eval toolchain |
| 167 | [HitMargin/dsh-sticky-wall](https://github.com/HitMargin/dsh-sticky-wall) | 0 | 2026-11-18 | 2026-11-18 | 在左侧栏加入「便签墙」入口，打开一个随手记便签、按颜色区分、删除可撤销的面板。 |
| 168 | [hongcha-dsh/dsh-dev-plan-presets](https://github.com/hongcha-dsh/dsh-dev-plan-presets) | 0 | 2026-11-18 | 2026-11-18 | 开发规划与交付模式：DSH 开发规划与交付 preset 包 |
| 169 | [hrrrb408/lm-memory](https://github.com/hrrrb408/lm-memory) | 0 | 2026-10-31 | 2026-11-18 | 本地优先的 Agent 长期记忆（MCP server + DSH 插件）：SQLite+FTS5+双语本地嵌入，会遗忘、可纠正、带证据回查。Local-first long-term memory for AI agents. |
| 170 | [HScoffeeK/dsh-opencode-quota](https://github.com/HScoffeeK/dsh-opencode-quota) | 0 | 2026-11-18 | 2026-11-18 | OpenCode Go quota in the DSH right sidebar: per-model monthly caps, shared 5h/week/month allowance, and an opencode_quota tool. |
| 171 | [huiyaoxingkong/dsh-plugin-minecraft-devtest](https://github.com/huiyaoxingkong/dsh-plugin-minecraft-devtest) | 0 | 2026-11-18 | 2026-11-18 | Client-free Minecraft mod &amp; datapack development/testing harness for DeepSeek Harness (DSH): headless servers 1.7.10-26.4, RCON assertions, Mineflayer + built-in legacy/26.x protocol bots, YAML test cards, one-call quick checks. |
| 172 | [iambubu0523/dsh-turbo](https://github.com/iambubu0523/dsh-turbo) | 0 | 2026-11-16 | 2026-11-18 | Codex-style Fast Mode for DeepSeek Harness — per-session service_tier priority, honest A/B probing, real TTFT metrics. |
| 173 | [iamjager416/dsh-pixiv-autodownload](https://github.com/iamjager416/dsh-pixiv-autodownload) | 0 | 2026-11-17 | 2026-11-18 | Incremental Pixiv downloader for a fixed artist list - DSH plugin |
| 174 | [iceship-wheels/dsh-kanban](https://github.com/iceship-wheels/dsh-kanban) | 0 | 2026-11-05 | 2026-11-18 | Kanban board plugin for the DeepSeek Harness sidebar |
| 175 | [imCBW/dsh-session-strip](https://github.com/imCBW/dsh-session-strip) | 0 | 2026-11-18 | 2026-11-18 | Session strip above the composer for DeepSeek Harness: live status, sub-agents, token usage and unfinished marks. |
| 176 | [InsaneGenji/dsh-safe-restart](https://github.com/InsaneGenji/dsh-safe-restart) | 0 | 2026-11-18 | 2026-11-18 | 给 DeepSeek Harness 桌面端托盘加「重启」项：有任务在跑时先弹原生确认框（标题与按钮都是「重启」） |
| 177 | [interested3041/dsh-bailian-auto-router](https://github.com/interested3041/dsh-bailian-auto-router) | 0 | 2026-11-15 | 2026-11-18 | 百炼智能路由 DSH 插件：请求前由决策模型分析输入，自动路由到最合适的阿里云百炼模型，支持额度冷却与静默回退。 |
| 178 | [ipfans/dsh-prompt-hitchhiker](https://github.com/ipfans/dsh-prompt-hitchhiker) | 0 | 2026-11-18 | 2026-11-18 | 将prompt模板注入dsh系统提示中，内置Ponytail。Inject named prompt templates into the DeepSeek Harness system prompt, resolved by workspace and by model. Ships with Ponytail and its five companion skills. |
| 179 | [JayF4n/dsh-poe-cn-guide](https://github.com/JayF4n/dsh-poe-cn-guide) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 技能：用流亡编年史（poedb.tw）术语把流放之路构筑攻略译成中文。内置 3134 条中英对照、宝石真实插槽颜色（红/绿/蓝/白），可一键导出 Excel。 |
| 180 | [Jessicaisleep/dsh-windows-toolbox](https://github.com/Jessicaisleep/dsh-windows-toolbox) | 0 | 2026-11-18 | 2026-11-18 | WINDOWS toolbox for DeepSeek Harness: 11 Windows registration points plus 25 maintenance capabilities, all local, every write a dry run first. |
| 181 | [jiahuayu/sticky-wall](https://github.com/jiahuayu/sticky-wall) | 0 | 2026-11-18 | 2026-11-18 | dsh便签 |
| 182 | [JiaLe1145/dsh-plugin-git-history](https://github.com/JiaLe1145/dsh-plugin-git-history) | 0 | 2026-11-18 | 2026-11-18 | Git commit history panel for the DeepSeek Harness right sidebar: graph lanes, date-ordered commits, refs, and colored per-file diffs. |
| 183 | [jidekaixin2dian/dsh-factmesh](https://github.com/jidekaixin2dian/dsh-factmesh) | 0 | 2026-11-18 | 2026-11-18 | Reconcile PowerPoint report figures with Excel evidence in DeepSeek Harness. |
| 184 | [joker553/dsh-artex-ops](https://github.com/joker553/dsh-artex-ops) | 0 | 2026-11-18 | 2026-11-18 | 对话式 ARTEX 渗透编排层：DSH 插件 / CLI / MCP（mission、意图队列、双图、攻击链断言、OAST、覆盖矩阵、热重载） |
| 185 | [jozhn/dsh-webmate](https://github.com/jozhn/dsh-webmate) | 0 | 2026-11-17 | 2026-11-18 | DSH网页助手，读取、操作右边栏的网页 |
| 186 | [jxligui/dsh-plugin-fund-tracker](https://github.com/jxligui/dsh-plugin-fund-tracker) | 0 | 2026-11-18 | 2026-11-18 | 基金小助理：DeepSeek Harness（DSH）基金与行情悬浮面板插件 |
| 187 | [kadaliao/dsh-images](https://github.com/kadaliao/dsh-images) | 0 | 2026-11-18 | 2026-11-18 | Images for DeepSeek Harness: a generate_image tool backed by your provider's image model, and a gallery of everything drawn. |
| 188 | [kadaliao/dsh-prompt-en](https://github.com/kadaliao/dsh-prompt-en) | 0 | 2026-11-18 | 2026-11-18 | Prompt EN for DeepSeek Harness: English under every prompt, a translation or a review, and a vocabulary book. |
| 189 | [kaveys/agent-user-profile](https://github.com/kaveys/agent-user-profile) | 0 | 2026-11-17 | 2026-11-18 | 给 AI 装一份「关于你」的说明书：把偏好、习惯、底线记成一份清单，每次对话前自动读一遍，不用重复交代。 |
| 190 | [kenneth-kun/dsh-one-click-launcher](https://github.com/kenneth-kun/dsh-one-click-launcher) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness (DSH) 插件：一键生成 macOS .app / Windows .lnk / Linux .desktop，双击启动 dsh web。 |
| 191 | [kiritoko1029/dsh-multi-agent](https://github.com/kiritoko1029/dsh-multi-agent) | 0 | 2026-11-13 | 2026-11-18 | Prompt-routed DSH, Codex, Kimi Code, and Antigravity (agy) subagent delegation for DeepSeek Harness. |
| 192 | [kpbl95946-art/dsh-connect-cursor-pro](https://github.com/kpbl95946-art/dsh-connect-cursor-pro) | 0 | 2026-11-18 | 2026-11-18 | Use the models from your locally logged-in Cursor desktop app directly in DeepSeek Harness (dsh) — no separate API key. |
| 193 | [kzzzt/dsh-chat-manager](https://github.com/kzzzt/dsh-chat-manager) | 0 | 2026-10-24 | 2026-11-18 | Personal fork of WSL043/dsh-chat-manager v1.5.18 - compatible with DeepSeek Harness 0.2.1-rc.3 (DSH chat history &amp; session manager) |
| 194 | [la-sandrone/mcp-cronopios](https://github.com/la-sandrone/mcp-cronopios) | 0 | 2026-10-04 | 2026-11-18 | 五个 MCP 服务器，专治 LLM 的瞎编：任意精度计算 · 真随机分布 · 符号求解 · 语法检查 · 带坐标系的文件系统 |
| 195 | [la-sandrone/mcp-melquiades](https://github.com/la-sandrone/mcp-melquiades) | 0 | 2026-10-03 | 2026-11-18 | DSH 会话的草稿纸 + 压缩档案回查 —— 一个由 MariaDB 支撑的 MCP 服务器。 |
| 196 | [la-sandrone/mcp-pergaminos](https://github.com/la-sandrone/mcp-pergaminos) | 0 | 2026-10-03 | 2026-11-18 | Los pergaminos de Melquíades，仅供娱乐，用来查询OA文献的MCP |
| 197 | [la-sandrone/memoria-del-hielo](https://github.com/la-sandrone/memoria-del-hielo) | 0 | 2026-09-21 | 2026-11-18 | 自用RAG知识库系统，仅供娱乐！ |
| 198 | [lalalawang/dsh-quit-restart](https://github.com/lalalawang/dsh-quit-restart) | 0 | 2026-11-18 | 2026-11-18 | One-click quit-and-relaunch button for DeepSeek Harness Desktop (Windows). 侧边栏一键退出并重启 DSH。 |
| 199 | [LaoLiang-agent/HarnessKit](https://github.com/LaoLiang-agent/HarnessKit) | 0 | 2026-11-17 | 2026-11-18 | Multi-agent engineering workflow for DeepSeek Harness (DSH): seven roles, four flow profiles, human approval gates, guards, and a git asset repository that accumulates specs and memory with every archived task. |
| 200 | [Lee2277-t/dsh-resolve](https://github.com/Lee2277-t/dsh-resolve) | 0 | 2026-11-18 | 2026-11-18 | DaVinci Resolve timeline authoring for DeepSeek Harness: one declarative edit spec in, an importable .fcpxml out (and a live Studio scripting backend when available). |
| 201 | [Lee2277-t/pbip-forge](https://github.com/Lee2277-t/pbip-forge) | 0 | 2026-11-18 | 2026-11-18 | Create complete Power BI projects (.pbip) directly: TMDL semantic models, DAX measures, relationships, PBIR pages and native visuals. CLI, MCP server and DeepSeek Harness plugin. |
| 202 | [Lemon140339/dsh-ghost-downloader](https://github.com/Lemon140339/dsh-ghost-downloader) | 0 | 2026-11-18 | 2026-11-18 | 给 agent 一条真正的下载路径：大文件走本地 Ghost Downloader 多连接，小文件直连，GitHub 链接自动兜底。DeepSeek Harness 插件。 |
| 203 | [lfys/dsh-wsl-overlay](https://github.com/lfys/dsh-wsl-overlay) | 0 | 2026-11-18 | 2026-11-18 | Transparent WSL takeover for DSH - agent bash, file and search tools run inside the distro under the same tool names.dsh-plugin |
| 204 | [liaoshaohua123/dsh-plugin-taskbar-flash](https://github.com/liaoshaohua123/dsh-plugin-taskbar-flash) | 0 | 2026-11-18 | 2026-11-18 | Windows-only DeepSeek Harness plugin: reminder sounds on turn completion, questions and approvals, plus taskbar flashing while DSH runs in the background. Ten built-in sounds, your own audio files, and a built-in trim studio. |
| 205 | [lichufeng123/dsh-public-qa-plugins](https://github.com/lichufeng123/dsh-public-qa-plugins) | 0 | 2026-11-18 | 2026-11-18 | Public DSH bundles for portable requirement review and local synthetic fixture generation. |
| 206 | [LiHuan02/dsh-access](https://github.com/LiHuan02/dsh-access) | 0 | 2026-11-18 | 2026-11-18 | Access: encrypted credentials, connectors, and CDP sidebar browser automation for DeepSeek Harness |
| 207 | [linsan2999-hash/dsh-orchestrator-mode](https://github.com/linsan2999-hash/dsh-orchestrator-mode) | 0 | 2026-11-18 | 2026-11-18 | Orchestrator mode for DSH: the session-selected model plans read-only, a configured executor model implements, and two hand-off tools move control between phases inside one conversation. |
| 208 | [liuhange789/dsh-client-deliverable-pipeline](https://github.com/liuhange789/dsh-client-deliverable-pipeline) | 0 | 2026-11-18 | 2026-11-18 | Markdown to client-grade printable HTML report inside DSH: cover page, brand colour, TOC, A4 print pagination rules. |
| 209 | [liuhange789/dsh-design-audit-to-code](https://github.com/liuhange789/dsh-design-audit-to-code) | 0 | 2026-11-18 | 2026-11-18 | AST-based design-system audit that returns a unified diff: hardcoded hex colours become var(--color-*) tokens; deprecated components are flagged. |
| 210 | [liuhange789/dsh-geo-report-to-fix](https://github.com/liuhange789/dsh-geo-report-to-fix) | 0 | 2026-11-18 | 2026-11-18 | GEO audit to fix pack inside DSH: fetch a URL, score AI-search friendliness, then write ready-to-paste llms.txt and jsonld.html. |
| 211 | [liuhange789/dsh-incident-full-chain](https://github.com/liuhange789/dsh-incident-full-chain) | 0 | 2026-11-18 | 2026-11-18 | Incident full chain inside DSH: on-call triage, mitigation timeline, and an auto-generated postmortem.md with MTTR. |
| 212 | [llifco/dsh-plugin-reverse-proxy](https://github.com/llifco/dsh-plugin-reverse-proxy) | 0 | 2026-11-09 | 2026-11-18 | DSH 网页界面局域网访问插件：内置反向代理 + 免 Token 登录（内网穿透替代方案），手机/平板/另一台电脑同 Wi-Fi 直接打开后台，支持 WebSocket 流式输出。默认只监听本机 127.0.0.1，需显式开启开关，监听端口可自定义。仅 WebUI 可用，桌面客户端自动休眠。 |
| 213 | [loaf/dsh-resource-radar](https://github.com/loaf/dsh-resource-radar) | 0 | 2026-11-17 | 2026-11-18 | Resource Radar (资源雷达) — a freebie/deal/open-source/news radar workbench plugin for DeepSeek Harness, with a Host-side CORS-free RSS collector. |
| 214 | [lock-down/dsh-capability-switch](https://github.com/lock-down/dsh-capability-switch) | 0 | 2026-11-18 | 2026-11-18 | A DSH sidebar plugin for managing Skills and MCP servers, with symlink sync and app import. |
| 215 | [LokiBendi-Dev/dsh-file-changes](https://github.com/LokiBendi-Dev/dsh-file-changes) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: review every file your AI changed as diffs, and get any line explained in plain language. |
| 216 | [LXMH1982/dsh-windows-agents](https://github.com/LXMH1982/dsh-windows-agents) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：在设置里编辑每个会话都会加载的用户全局 AGENTS.md。 |
| 217 | [Makimasdog/dsh-conversation-context](https://github.com/Makimasdog/dsh-conversation-context) | 0 | 2026-11-18 | 2026-11-18 | Session-local tools, skills, and system prompt controls for DeepSeek Harness. |
| 218 | [mantonlove/dsh-saynext](https://github.com/mantonlove/dsh-saynext) | 0 | 2026-11-18 | 2026-11-18 | DSH composer plugin: drafts your next line after each turn; first Enter fills the input, second Enter sends. |
| 219 | [Maxwelltoo/dsh-live-pixel](https://github.com/Maxwelltoo/dsh-live-pixel) | 0 | 2026-11-18 | 2026-11-18 | Four animated pixel-art scenes for DeepSeek Harness, rendered in real time with WebGL. |
| 220 | [miaokingsoft/Doomsday-Game-ember-radio-skill](https://github.com/miaokingsoft/Doomsday-Game-ember-radio-skill) | 0 | 2026-11-18 | 2026-11-18 | Enter and play the shared post-apocalyptic world of Ember Radio (server-authoritative; outcomes are never decided by the AI). Use when the user says "Enter Ember Radio", "Continue my apocalypse, where am I now", or asks to play a shared-world survival narrative. |
| 221 | [MiraculousGu/dsh-ui-studio](https://github.com/MiraculousGu/dsh-ui-studio) | 0 | 2026-11-18 | 2026-11-18 | Glassmorphism UI customization for DeepSeek Harness: palettes, transparency, uploaded photo/GIF/video backgrounds, type sizes, and branding. |
| 222 | [mloluyu/dsh-session-notify](https://github.com/mloluyu/dsh-session-notify) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: in-app cards &amp; page-raised system notifications when a session finishes. Client-only, zero dependencies. |
| 223 | [modenicheng/dsh-annotate](https://github.com/modenicheng/dsh-annotate) | 0 | 2026-11-18 | 2026-11-18 | Visual annotation bridge: mark text, elements, or regions in Firefox/Zen and hand them to DeepSeek Harness with cropped screenshots |
| 224 | [ModiAWA/dsh-gh-view](https://github.com/ModiAWA/dsh-gh-view) | 0 | 2026-11-18 | 2026-11-18 | Browse GitHub repos, issues and pull requests by number, with a rendered image card and a side panel. DSH plugin bundle with agent tools. |
| 225 | [mozhuanzuojing/dsh-deepbreath](https://github.com/mozhuanzuojing/dsh-deepbreath) | 0 | 2026-11-18 | 2026-11-18 | dsh-deepbreath — a DeepSeek Harness (DSH) session-view breathing plugin (guided qi-flow break) with practice/stats panel |
| 226 | [Mr-cjf/cohub](https://github.com/Mr-cjf/cohub) | 0 | 2026-09-16 | 2026-11-18 | CoHub 中文智能体编排体系 monorepo：ZCode / OpenCode / DSH 三平台插件 |
| 227 | [mustarddaddy/dsh-serial-proto](https://github.com/mustarddaddy/dsh-serial-proto) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏的串口调试面板：按 JSON 协议模型把串口字节流切成帧、校验并解码，也能按模型组帧发送。fork 自 dsh-serial-debugger。 |
| 228 | [muzi18273909375-cell/dsh-moving-context](https://github.com/muzi18273909375-cell/dsh-moving-context) | 0 | 2026-11-18 | 2026-11-18 | Move a DeepSeek Harness conversation between workspaces: CLI plus a sidebar right-click menu. |
| 229 | [mycroft-sherlock/apple-display](https://github.com/mycroft-sherlock/apple-display) | 0 | 2026-11-18 | 2026-11-18 | Control Apple Studio Display / Pro Display XDR brightness from DeepSeek Harness on Windows |
| 230 | [MYiYang/dsh-prd-canvas](https://github.com/MYiYang/dsh-prd-canvas) | 0 | 2026-11-18 | 2026-11-18 | 图解 PRD 画布 for DeepSeek Harness：图片/需求/已有 PRD → 右侧可拖拽、过门禁的 PRD 板，导出 md/json/docx |
| 231 | [myz968/ping-pong](https://github.com/myz968/ping-pong) | 0 | 2026-11-18 | 2026-11-18 | DSH 桌宠插件：四态驱动 + 状态面板 + 消息图标球 |
| 232 | [naili0712/dsh-live2d-console](https://github.com/naili0712/dsh-live2d-console) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 的 Live2D 桌宠控制台：会话桥 + 跟随启停。基于 Ssssshaiiko/WHALEL2D 的二创分支（PolyForm Noncommercial 1.0.0），不含模型与 SDK。 |
| 233 | [naili0712/dsh-skill-gate](https://github.com/naili0712/dsh-skill-gate) | 0 | 2026-11-18 | 2026-11-18 | DSH 会话级技能门禁：默认只看得到技能名，正文需授权；记录模型真正读过哪些技能，支持固定技能与压缩兜底。 |
| 234 | [NCT-Ant/dsh-pc-guard](https://github.com/NCT-Ant/dsh-pc-guard) | 0 | 2026-11-18 | 2026-11-18 | One-click Windows workstation lock + CPU guard for DeepSeek Harness. Keeps every background program running, never sleeps the machine. |
| 235 | [noname-nikke/dsh-model-picker-wide](https://github.com/noname-nikke/dsh-model-picker-wide) | 0 | 2026-11-18 | 2026-11-18 | 把 DSH 输入框里的模型选择器加宽：触发器与下拉面板都放得下长模型名（含 provider / 版本后缀），面板右缘仍贴着输入框，宽度在设置页可调。 |
| 236 | [normalform3/dsh-agentsmd-manager](https://github.com/normalform3/dsh-agentsmd-manager) | 0 | 2026-11-16 | 2026-11-18 | 在一个入口查看、搜索和编辑工作区及全局 AGENTS.md，支持模板、批量预览和 AI 修改建议。 |
| 237 | [nzlov/dsh-bing-wallpaper](https://github.com/nzlov/dsh-bing-wallpaper) | 0 | 2026-11-18 | 2026-11-18 | Daily Bing wallpapers, image-derived theme colours, and automatic light/dark appearance for DSH Web. |
| 238 | [ODO-TECH/dsh-yukkuli](https://github.com/ODO-TECH/dsh-yukkuli) | 0 | 2026-11-17 | 2026-11-18 | Yukkuri voice for DeepSeek Harness: reads assistant replies aloud locally through AquesTalk, with no network calls. |
| 239 | [oh-wang/dsh-tools-deepseek-media](https://github.com/oh-wang/dsh-tools-deepseek-media) | 0 | 2026-11-18 | 2026-11-18 | Agent tools for DeepSeek OCR, ASR and TTS inside DeepSeek Harness: recognize text in PDF and image files, transcribe WAV audio, and synthesize speech to a file. |
| 240 | [opencamel/dsh-yt-archive](https://github.com/opencamel/dsh-yt-archive) | 0 | 2026-11-18 | 2026-11-18 | DSH (DeepSeek Harness) tool plugin: archive &amp; read YouTube video captions (all languages incl. auto-generated) via 2100laike YouTube Archive |
| 241 | [PandaBoby/dsh-credential-hub](https://github.com/PandaBoby/dsh-credential-hub) | 0 | 2026-11-18 | 2026-11-18 | DSH credential routing hub: tag-matched SSH hosts and PAT tokens, metadata-only prompt, encrypted import/export. |
| 242 | [Panmax/dsh-default-model-lock](https://github.com/Panmax/dsh-default-model-lock) | 0 | 2026-11-18 | 2026-11-18 | Pin the shared DeepSeek Harness default model so in-chat model switches stay session-local. |
| 243 | [Panther-w/dsh-inline-attachments](https://github.com/Panther-w/dsh-inline-attachments) | 0 | 2026-11-18 | 2026-11-18 | 输入框图片与文件：在输入框里把图/文件放在哪里，模型就在哪个位置读到它——不用再写“如图 1、图 2 等等”。 |
| 244 | [pcysanji/dsh-search-plus](https://github.com/pcysanji/dsh-search-plus) | 0 | 2026-11-18 | 2026-11-18 | DSH 跨会话全文搜索浮窗：Ctrl+F 搜全部历史对话，任意中文子串命中，点结果定位到那句话 |
| 245 | [pengtang1024/dsh-quick-phrases](https://github.com/pengtang1024/dsh-quick-phrases) | 0 | 2026-11-18 | 2026-11-18 | DSH 快捷短语：输入框旁一排短语按钮，点按直接发送（可改成只填入），带管理页——增删改排序、显示名称与发送内容分离、位置可选 |
| 246 | [plugin-academy/dsh-plugin-academy](https://github.com/plugin-academy/dsh-plugin-academy) | 0 | 2026-11-18 | 2026-11-18 | Browse catalogs and add plugin indexes you trust in DeepSeek Harness. |
| 247 | [pokereva/dsh-session-history-ui](https://github.com/pokereva/dsh-session-history-ui) | 0 | 2026-11-18 | 2026-11-18 | DSH 右侧栏插件：查看当前会话聊天记录与分支关系（跳转、过滤、置顶、拖拽排序、归档展示）。Right-sidebar session history and branch browser for DeepSeek Harness. |
| 248 | [poloniumn/dsh-balance-display](https://github.com/poloniumn/dsh-balance-display) | 0 | 2026-11-18 | 2026-11-18 | Wallet balance &amp; Token Plan usage for every enabled DSH provider, right in the sidebar · DSH 侧边栏余额与套餐用量 |
| 249 | [qianxi-00/dsh-paper-workbench](https://github.com/qianxi-00/dsh-paper-workbench) | 0 | 2026-11-11 | 2026-11-18 | DSH paper workbench: PDF library, bilingual reading, translation and native Agent sessions. |
| 250 | [qisisiqi/dsh-bili-banghui](https://github.com/qisisiqi/dsh-bili-banghui) | 0 | 2026-11-18 | 2026-11-18 | B站帮回：B站回复评论，AI 按态度出稿，人审后发出 |
| 251 | [qiuYliangM/dsh-codex-bridge](https://github.com/qiuYliangM/dsh-codex-bridge) | 0 | 2026-11-18 | 2026-11-18 | DSH Codex Bridge — install once in DSH for local Codex collaboration, with ownership-aware cleanup |
| 252 | [qzhengpyuan/dsh-analytics](https://github.com/qzhengpyuan/dsh-analytics) | 0 | 2026-11-03 | 2026-11-18 | dsh-analytics — AI-assisted statistics workbench plugin for DeepSeek Harness, built on a bundled GNU PSPP engine with an SPSS-style interface (data editor, syntax, output viewer, charts, agent tools). |
| 253 | [Rayskinz/dsh-design](https://github.com/Rayskinz/dsh-design) | 0 | 2026-11-18 | 2026-11-18 | Design plugin for DeepSeek Harness: animated GIF backgrounds, sidebar effects, chat colors, fonts, themes, and a pet with mini games. |
| 254 | [renshaokai/dsh-chip-design-closure](https://github.com/renshaokai/dsh-chip-design-closure) | 0 | 2026-11-18 | 2026-11-18 | Design-side closure for digital chip front-end work on DeepSeek Harness — architecture and specifications, FP/VP, RTL, lint/CDC, synthesis and timing, PPA, SoC integration. Carries the chip-design skill. |
| 255 | [RomanticMysteryLH/dsh-workbuddy-fetch](https://github.com/RomanticMysteryLH/dsh-workbuddy-fetch) | 0 | 2026-11-18 | 2026-11-18 | Routes the dsh web_fetch tool through the WorkBuddy desktop app gateway using its existing sign-in, with a configurable fallback to the built-in HTTP fetcher. |
| 256 | [RomanticMysteryLH/dsh-workday-schedule](https://github.com/RomanticMysteryLH/dsh-workday-schedule) | 0 | 2026-11-06 | 2026-11-18 | 给 DSH 自动化任务加上节假日与调休规则：按真实工作日执行，支持「第几个工作日/休息日」等组合规则。Workday-aware scheduling for DeepSeek Harness. |
| 257 | [sakikoTGW/dsh-blender-panel](https://github.com/sakikoTGW/dsh-blender-panel) | 0 | 2026-11-18 | 2026-11-18 | 侧栏 Blender 面板：文件列表、模型预览、嵌入原生窗口 \| Blender panel for DeepSeek Harness |
| 258 | [sakikoTGW/dsh-chat-search](https://github.com/sakikoTGW/dsh-chat-search) | 0 | 2026-11-18 | 2026-11-18 | 像微信一样搜聊天记录：关键词、按会话分组、一键跳转 \| Keyword search across DSH conversations |
| 259 | [sakikoTGW/dsh-choice](https://github.com/sakikoTGW/dsh-choice) | 0 | 2026-11-18 | 2026-11-18 | 把选项式结尾变成 DSH 原生问题卡 \| Choice endings become native question cards |
| 260 | [sakikoTGW/dsh-guide-ui](https://github.com/sakikoTGW/dsh-guide-ui) | 0 | 2026-11-18 | 2026-11-18 | DSH 运行中引导：消息直接流进当前回合，并在 pre-step 加一条引导说明 \| Mid-task guidance for DeepSeek Harness |
| 261 | [sakikoTGW/dsh-run-indicator](https://github.com/sakikoTGW/dsh-run-indicator) | 0 | 2026-11-18 | 2026-11-18 | 折叠的工作区分组上显示还有几个会话在跑 \| Running count on collapsed workspace groups |
| 262 | [saltfish060/dsh-opendesign-runway](https://github.com/saltfish060/dsh-opendesign-runway) | 0 | 2026-11-18 | 2026-11-18 | OpenDesign 套餐额度与钱包余额面板 for DeepSeek Harness：两个额度窗口、重置时间、速率推算、今日 token。 |
| 263 | [Satont/dsh-harness-setup](https://github.com/Satont/dsh-harness-setup) | 0 | 2026-11-18 | 2026-11-18 | Restore kit for a Claude-Code-style DeepSeek Harness setup: profile, local plugins, worktrees, mobile/VPS runbook, screenshots |
| 264 | [scientificmaniac/dsh-npm-release](https://github.com/scientificmaniac/dsh-npm-release) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：npm 打包与发布。九项发布前检查、2FA 人工授权、以 registry dist-tags 判定成功而不是拿 202 当成功。 |
| 265 | [SeekAfterSeek/dsh-url-router](https://github.com/SeekAfterSeek/dsh-url-router) | 0 | 2026-11-17 | 2026-11-18 | DSH 浏览器分流（V3.0）：国内网址走 Edge 直连，境外网址走 Chrome + Clash 最快美国节点。接替已归档的 V1.0 dsh-chrome-only 与 V2.0 chrome-clash-link。 |
| 266 | [Sentryea/dsh-plugin-message-edit-plus](https://github.com/Sentryea/dsh-plugin-message-edit-plus) | 0 | 2026-11-18 | 2026-11-18 | Same-session message editing plus Codex-style composer controls for DeepSeek Harness |
| 267 | [SevenHe/dsh-remote-host](https://github.com/SevenHe/dsh-remote-host) | 0 | 2026-11-18 | 2026-11-18 | Mount a remote DeepSeek Harness host into the app native UI: sessions, workspaces, super agent, streams — over HTTP or an SSH tunnel. |
| 268 | [shidesheng0218/dsh-duplex](https://github.com/shidesheng0218/dsh-duplex) | 0 | 2026-11-18 | 2026-11-18 | Hands-free voice mode for DeepSeek Harness: read replies aloud, dictate into the composer, approve by voice (planned). 语音双工｜说需求、听结论、语音审批。 |
| 269 | [Shingwha/dsh-gitbash](https://github.com/Shingwha/dsh-gitbash) | 0 | 2026-11-15 | 2026-11-18 | DeepSeek Harness plugin: runs the bash tool through Git Bash on Windows and removes pwsh from every agent. |
| 270 | [Shingwha/dsh-web-hub](https://github.com/Shingwha/dsh-web-hub) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: per-provider search and fetch tools with one switch per tool. |
| 271 | [Singapo/ai-job-countdown](https://github.com/Singapo/ai-job-countdown) | 0 | 2026-10-23 | 2026-11-18 | 取代倒计时：你这就是 AI 的活儿，赶紧写交接文档吧。让 AI 接班人直接开怼、拿证据补刀的职场压力测试 Skill。 |
| 272 | [Singapo/deepseek-harness-plugins](https://github.com/Singapo/deepseek-harness-plugins) | 0 | 2026-11-18 | 2026-11-18 | 较真与再改一版 · DeepSeek Harness 数据核验与 Agent 任务复盘插件 |
| 273 | [sjbdhr/dsh-model-request-stats](https://github.com/sjbdhr/dsh-model-request-stats) | 0 | 2026-11-18 | 2026-11-18 | Per-session model request statistics for DeepSeek Harness: attempts, failures, failure reasons, retries, and a whole-request tok/s that counts connection and retry time. |
| 274 | [skyjjgw/dsh-plugin-skymoni](https://github.com/skyjjgw/dsh-plugin-skymoni) | 0 | 2026-11-18 | 2026-11-18 | Skymoni account and model provider for DeepSeek Harness Desktop |
| 275 | [sljdxde/dsh-clipchat](https://github.com/sljdxde/dsh-clipchat) | 0 | 2026-11-16 | 2026-11-18 | DSH Web plugin: quote-and-ask in place, green-underline highlights, kept Q&amp;A, cross-session search |
| 276 | [smallflycar/dsh-reading-focus](https://github.com/smallflycar/dsh-reading-focus) | 0 | 2026-11-18 | 2026-11-18 | 阅读辅助：给 DeepSeek Harness 的渐变文字、阅读尺、逐行/逐段聚焦与色块分段。 |
| 277 | [soffits/dsh-points](https://github.com/soffits/dsh-points) | 0 | 2026-11-18 | 2026-11-18 | Spend earned points inside DeepSeek Harness: any plugin prices an extra, one dialog shows the price and balance and buys it through your points ledger. |
| 278 | [soffits/dsh-practice](https://github.com/soffits/dsh-practice) | 0 | 2026-11-18 | 2026-11-18 | A language-practice page for DeepSeek Harness: today's plan, review cards, a speaking recorder with speech analysis, writing answers and progress. |
| 279 | [songsenand/yingzao](https://github.com/songsenand/yingzao) | 0 | 2026-11-13 | 2026-11-18 | A dsh plugin for mechanical CAD — the agent generates, the plugin closes the loop. |
| 280 | [Sophia-DuoDuo/dsh-smart-planner](https://github.com/Sophia-DuoDuo/dsh-smart-planner) | 0 | 2026-11-18 | 2026-11-18 | Task planner for DeepSeek Harness: staged daily plans, buffer days, capacity board, evening review, pinned assistant chat, and a fish task popover. |
| 281 | [SSHOOTING/dsh-event-fix](https://github.com/SSHOOTING/dsh-event-fix) | 0 | 2026-11-17 | 2026-11-18 | Step-level error and wasted-work analytics for DeepSeek Harness sessions — an event-sourcing side branch |
| 282 | [star620/dsh-codex-bridge](https://github.com/star620/dsh-codex-bridge) | 0 | 2026-11-18 | 2026-11-18 | 一个让 DeepSeek Harness 和 Codex CLI 直接互发消息的本地总线插件。两端都通过 MCP 工具收发，不再是"手写交接文档"，而是一个带序号、游标、已读状态的收件箱。 |
| 283 | [sunt2049/dsh-next-prompt](https://github.com/sunt2049/dsh-next-prompt) | 0 | 2026-11-18 | 2026-11-18 | 回合结束后猜一句你接下来会说的话：DSH（DeepSeek Harness）插件，Web/桌面端是输入框下方的一枚胶囊，点一下填进输入框、永不自动发送。 |
| 284 | [taffy114514/dsh-plugin-unlock](https://github.com/taffy114514/dsh-plugin-unlock) | 0 | 2026-11-18 | 2026-11-18 | Clears the DSH desktop "plugin is in use, the desktop app will not remove it right now" refusal and finishes the marketplace update. |
| 285 | [taozi0328/dsh-task-board](https://github.com/taozi0328/dsh-task-board) | 0 | 2026-11-17 | 2026-11-18 | DSH任务清单 |
| 286 | [TardisBooo/scientific-visual-studio](https://github.com/TardisBooo/scientific-visual-studio) | 0 | 2026-11-18 | 2026-11-18 | Domain-agnostic scientific, AI &amp; mathematical visual computation studio for Agents, Slides, and Videos. 22+ procedural renderers (3B1B, SciencePlots, Qiskit, PlotNeuralNet, PyVista, Control). |
| 287 | [tbx709/dsh-prompt-gate](https://github.com/tbx709/dsh-prompt-gate) | 0 | 2026-11-18 | 2026-11-18 | The first message of a new session is held: dsh rewrites it, shows you the result, and only unlocks its tools after you approve.  |
| 288 | [terry2010/dsh-rss-news-zhuikan](https://github.com/terry2010/dsh-rss-news-zhuikan) | 0 | 2026-11-18 | 2026-11-18 | dsh 伴随插件：订阅没有 RSS 的普通列表页——AI 学页面结构出规则，新条目进主插件新闻流 |
| 289 | [timxiang-948/dsh-composer-model-controls](https://github.com/timxiang-948/dsh-composer-model-controls) | 0 | 2026-11-10 | 2026-11-18 | Reasoning-effort control for the DSH composer: adaptive effort slider with track and border tint, Shift+Tab cycling, and the built-in model menu left untouched. |
| 290 | [total-quality/dsh-total-quality-v3](https://github.com/total-quality/dsh-total-quality-v3) | 0 | 2026-11-18 | 2026-11-18 | 全质开源质量平台：独立 V3 插件，自动接收与筛查、方案准备、工作单审批、执行复核和报告沉淀。本地入口为全质开源质量平台2。 |
| 291 | [unhurriedly/dsh-zhifei-simulator](https://github.com/unhurriedly/dsh-zhifei-simulator) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness panel plugin: a river-side drone tracking sandbox driven by natural-language commands |
| 292 | [Vincent-chk/dsh-project-workbench](https://github.com/Vincent-chk/dsh-project-workbench) | 0 | 2026-11-18 | 2026-11-18 | File-backed project requirements, tasks, reviews and acceptance workbench for DeepSeek Harness |
| 293 | [VladimirKuzen/DSH-guardrails](https://github.com/VladimirKuzen/DSH-guardrails) | 0 | 2026-11-17 | 2026-11-18 | Deterministic guardrails for DeepSeek Harness: asks or denies risky tool calls before they run, and keeps a local audit trail. Windows-only. |
| 294 | [wadwaw7/dsh-session-delete](https://github.com/wadwaw7/dsh-session-delete) | 0 | 2026-11-18 | 2026-11-18 | Delete DSH sessions for real / 真正删除 DSH 会话：按 .session.json 精确匹配，同步清理项目会话目录 |
| 295 | [wadwaw7/dsh-session-layout](https://github.com/wadwaw7/dsh-session-layout) | 0 | 2026-11-18 | 2026-11-18 | DSH session layout convention as a Skill / DSH 会话目录排版规范：一个对话一个目录 + .session.json |
| 296 | [wagalicn/dsh-provider-proxy](https://github.com/wagalicn/dsh-provider-proxy) | 0 | 2026-11-18 | 2026-11-18 | Per-provider HTTP proxy routing for DeepSeek Harness model providers |
| 297 | [walorne/dsh-annotate-it](https://github.com/walorne/dsh-annotate-it) | 0 | 2026-11-18 | 2026-11-18 | Annotate chats and documents in DeepSeek Harness — mark passages, stack comments, and send the whole review as one message. |
| 298 | [WangShuangTong/dsh-chat-history-cleaner](https://github.com/WangShuangTong/dsh-chat-history-cleaner) | 0 | 2026-11-18 | 2026-11-18 | Delete DSH chat history safely: recoverable trash, per-project cleanup, restore, and permanent purge. |
| 299 | [WangShuangTong/dsh-notify](https://github.com/WangShuangTong/dsh-notify) | 0 | 2026-11-18 | 2026-11-18 | Desktop notification plugin for DeepSeek Harness (DSH): approval, question and completion cards with click-to-focus on Windows. |
| 300 | [wangyz911/dsh-deferred-ask](https://github.com/wangyz911/dsh-deferred-ask) | 0 | 2026-11-18 | 2026-11-18 | Queue questions from the DSH composer and deliver them only while DeepSeek bills at off-peak rates. |
| 301 | [wayblink/using-kanban](https://github.com/wayblink/using-kanban) | 0 | 2026-10-10 | 2026-11-18 | Shared, event-sourced kanban for people and coding agents. CLI · MCP · REST/SSE · Web UI · Pi &amp; DeepSeek Harness plugins. \| 人与 AI agent 共用的看板：CLI/MCP/REST/SSE/Web + Pi/DSH 插件。 |
| 302 | [wellsoren/dsh-atomcode](https://github.com/wellsoren/dsh-atomcode) | 0 | 2026-11-18 | 2026-11-18 | AtomGit AtomCode CodingPlan provider for DeepSeek Harness (DSH) |
| 303 | [wgrbiss-spec/dsh-excluir-sessao](https://github.com/wgrbiss-spec/dsh-excluir-sessao) | 0 | 2026-11-17 | 2026-11-18 | Plugin de exclusão de sessões para o DeepSeek Harness, em português do Brasil — fork traduzido de dsh-delete-session. |
| 304 | [wishprophet/dshbazi](https://github.com/wishprophet/dshbazi) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 四柱八字插件：本地或周易大学排盘、十二方面解读、运年联动与人生趋势，内置 skill。 |
| 305 | [Wjl1224734792/ds-superbot](https://github.com/Wjl1224734792/ds-superbot) | 0 | 2026-11-17 | 2026-11-18 | Multi-role engineering team for DeepSeek Harness: dispatch-time role charters, plan gate, QA, browser acceptance, review, and a right-sidebar team panel. |
| 306 | [wooyang2018/dsh-waypoint](https://github.com/wooyang2018/dsh-waypoint) | 0 | 2026-11-18 | 2026-11-18 | SSH remote development for DeepSeek Harness: remote hosts, mirrored remote sessions, terminal and file access over one tunnel. |
| 307 | [wtr20211202/schflow](https://github.com/wtr20211202/schflow) | 0 | 2026-11-16 | 2026-11-18 | Proposal-driven task pipeline for AI coding agents: proposals → review gate → parallel git worktree execution → per-branch serial merge queue. Official plugins for claude code &amp; dsh — one command per host. |
| 308 | [wzvx/dsh-github-trending-masonry](https://github.com/wzvx/dsh-github-trending-masonry) | 0 | 2026-11-10 | 2026-11-18 | GitHub Trending in a flat masonry card panel for the DeepSeek Harness Web UI |
| 309 | [wzvx/dsh-matrix-todo](https://github.com/wzvx/dsh-matrix-todo) | 0 | 2026-11-10 | 2026-11-18 | DeepSeek Harness 插件：艾森豪威尔四象限待办（重要 × 紧急），支持截止日期、拖拽排序、一键切换已完成。 |
| 310 | [wzvx/dsh-one-pack](https://github.com/wzvx/dsh-one-pack) | 0 | 2026-11-10 | 2026-11-18 | One Pack: sync DSH plugins, settings, skills and sessions across machines via GitHub |
| 311 | [x7user/dsh-model-usage](https://github.com/x7user/dsh-model-usage) | 0 | 2026-11-18 | 2026-11-18 | MiniMax quota, DeepSeek wallet balance and OpenCode Go allowance next to the DeepSeek Harness composer |
| 312 | [xiaojiuop/dsh-wallpaper-studio](https://github.com/xiaojiuop/dsh-wallpaper-studio) | 0 | 2026-11-18 | 2026-11-18 | 把图片、视频或内置渐变铺成 DSH 整个界面的背景，并可调主题色与面板透明度。 |
| 313 | [xiaozou-second/dsh-mention-tooltip](https://github.com/xiaozou-second/dsh-mention-tooltip) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: show the complete text of an @ mention row the menu had to clip |
| 314 | [xin505/dsh-xin505-notify](https://github.com/xin505/dsh-xin505-notify) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 的 Windows 桌面通知。你不可能一直盯着 Agent。它卡在权限审批、额度不足或其他问题上，你可能一时没发现。这时候，你就需要这个插件了。 |
| 315 | [xincy22/dsh-progress-updates](https://github.com/xincy22/dsh-progress-updates) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 进展更新插件：progress_update 工具、提示词引导、催促、侧栏面板与设置（fork 自 @eddyskywalker/dsh-chatgpt-subscription） |
| 316 | [xinming-chenniang/dsh-vram-watch](https://github.com/xinming-chenniang/dsh-vram-watch) | 0 | 2026-11-18 | 2026-11-18 | DSH VRAM diagnostic sampler: after an OOM or unexplained slowdown, report four things instead of a live gauge. |
| 317 | [xua123/dsh-resource-monitor](https://github.com/xua123/dsh-resource-monitor) | 0 | 2026-11-18 | 2026-11-18 | Server resource dashboard for DeepSeek Harness: live CPU / memory / disk usage for the local host and every saved SSH server. |
| 318 | [xuetianhao98/deepseek-harness-gitview](https://github.com/xuetianhao98/deepseek-harness-gitview) | 0 | 2026-11-16 | 2026-11-18 | A git view plugin for DeepSeek Harness. |
| 319 | [xuetianhao98/dsh_docs](https://github.com/xuetianhao98/dsh_docs) | 0 | 2026-11-16 | 2026-11-18 | DeepSeek Harness docs plugin. |
| 320 | [xuexue61/dsh-task-queue](https://github.com/xuexue61/dsh-task-queue) | 0 | 2026-11-18 | 2026-11-18 | Task queue view for DeepSeek Harness: record items per project, set priorities, send them to the conversation with one click or automatically by priority. |
| 321 | [YAN3RA/dsh-thinking-guard](https://github.com/YAN3RA/dsh-thinking-guard) | 0 | 2026-11-01 | 2026-11-18 | DeepSeek Harness（DSH）社区插件：统一管理工具与技能的常驻、按需和禁用策略，提供重复调用提醒、交替循环识别、无进展局部保护及本次启动统计。 |
| 322 | [yanxijian/dsh-model-provider-info](https://github.com/yanxijian/dsh-model-provider-info) | 0 | 2026-11-18 | 2026-11-18 | Provider name before the model name in the DeepSeek Harness composer \| 在 DSH 输入框的模型位显示供应商名 |
| 323 | [yeloooooooooo/dsh-workspace-sidebar](https://github.com/yeloooooooooo/dsh-workspace-sidebar) | 0 | 2026-11-17 | 2026-11-18 | DSH 插件：工作区文件树自动显示、右栏宽度记忆、文件拖拽变 @ 引用、工作区按最近对话排序并支持置顶，以及对话行与工作区行的鲸鱼尾像素状态表情。 |
| 324 | [yeweimei/dsh-memory-harness](https://github.com/yeweimei/dsh-memory-harness) | 0 | 2026-11-18 | 2026-11-18 | Persistent cross-session memory for DeepSeek Harness: SQLite + hybrid retrieval, proactive recall, quality feedback and conflict review. |
| 325 | [yib0601/dsh-turn-cost](https://github.com/yib0601/dsh-turn-cost) | 0 | 2026-11-18 | 2026-11-18 | DSH 插件：逐轮/会话费用（官方单价 CNY/USD + 峰谷分时）+ 上下文洞察面板（仪表盘 / 上下文页签 / /context 命令） |
| 326 | [yishan/dsh-burn](https://github.com/yishan/dsh-burn) | 0 | 2026-08-23 | 2026-11-18 | Per-session token spend, peak/off-peak pricing, and account balance for the DeepSeek Harness web UI. |
| 327 | [ymf2317-tech/dsh-mobile-fixes](https://github.com/ymf2317-tech/dsh-mobile-fixes) | 0 | 2026-11-18 | 2026-11-18 | 窄屏（手机）CSS 覆盖层：只修验过的两个 DSH 插件 —— dsh-expert 的 T专家弹窗、dsh-purge 的悬浮净化面板 |
| 328 | [you112358/dsh-cache-cleaner](https://github.com/you112358/dsh-cache-cleaner) | 0 | 2026-11-18 | 2026-11-18 | A DeepSeek Harness plugin that reclaims the rebuildable caches of DSH itself, the desktop client and installed plugins. |
| 329 | [ytclaw01/dsh-plugin-sets](https://github.com/ytclaw01/dsh-plugin-sets) | 0 | 2026-11-18 | 2026-11-18 | Save named scenes of DSH plugins, MCP servers and skills, and switch between them in one click. |
| 330 | [yuanyuanzhang0815/dsh-quick-prompts](https://github.com/yuanyuanzhang0815/dsh-quick-prompts) | 0 | 2026-11-18 | 2026-11-18 | Prompt presets in the DeepSeek Harness (dsh) composer: pick one, it is inserted at the caret and focus returns to the input. |
| 331 | [yunweizhao26/dsh-browser-use-skill](https://github.com/yunweizhao26/dsh-browser-use-skill) | 0 | 2026-11-18 | 2026-11-18 | Browser Use agent skill for DeepSeek Harness: drive a real Chrome over CDP from a persistent Python REPL. PowerShell-ready, token-budgeted, safe for parallel agents. |
| 332 | [yyxcnasd/minimax-image](https://github.com/yyxcnasd/minimax-image) | 0 | 2026-11-18 | 2026-11-18 | MiniMax H3 image generation and editing for DeepSeek Harness: composer permission chip, text-to-image and reference-image editing tools, settings page. |
| 333 | [zeyeyuki/dsh-gui-operator](https://github.com/zeyeyuki/dsh-gui-operator) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: let the agent see and operate a Windows desktop and the pages of a logged-in browser (UI Automation + screenshot + real mouse/keyboard, Chrome DevTools Protocol for the web). |
| 334 | [zhan1024/dsh-zentao-buglens](https://github.com/zhan1024/dsh-zentao-buglens) | 0 | 2026-11-18 | 2026-11-18 | 禅图 BugLens：截图圈选、AI 引导补全、前后端排查分工和最近指派推荐，生成材料并提交禅道。DSH plugin + independent Agent Skill. |
| 335 | [ZhangPotato2022/dsh-math-perf](https://github.com/ZhangPotato2022/dsh-math-perf) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness plugin: render only the math and code you can see. Lazy KaTeX/Shiki, idle prefetch, and an in-place app.asar patch for the Desktop window. |
| 336 | [zhaoyanbo1/dsh-screenshot-macos](https://github.com/zhaoyanbo1/dsh-screenshot-macos) | 0 | 2026-11-18 | 2026-11-18 | Screenshot button for the DeepSeek Harness composer on macOS — drag-select a region, get an attachment. |
| 337 | [zhiyu1998/dsh-pi-acp](https://github.com/zhiyu1998/dsh-pi-acp) | 0 | 2026-11-18 | 2026-11-18 | DeepSeek Harness 插件：通过 ACP（pi-acp）驱动 pi 编码代理，支持后台轮次和设置页面 |
| 338 | [zhiyuanvision-lang/InkMap](https://github.com/zhiyuanvision-lang/InkMap) | 0 | 2026-11-12 | 2026-11-18 | Editable Markmap alternative: Two-way Markdown Mind Map &amp; Mermaid Flowchart Editor for VS Code, Cursor, Claude Desktop, Codex &amp; MCP Apps (npx -y inkmap-mcp) |
| 339 | [zhou200310/dsh-imessage](https://github.com/zhou200310/dsh-imessage) | 0 | 2026-11-17 | 2026-11-18 | photon-hq/dsh-imessage 的 DSH 0.2.2 兼容适配版（4 个兼容坑修复，端到端可用） |
| 340 | [zhouxianjun/dsh-fs-encoding-adaptive](https://github.com/zhouxianjun/dsh-fs-encoding-adaptive) | 0 | 2026-11-16 | 2026-11-18 | Encoding-adaptive FileSystem plugin for DeepSeek Harness (dsh): native UTF-8 / UTF-8 BOM passthrough, byte-exact round-trips for 16 legacy encodings, and encoding-aware grep. |
| 341 | [zhy451/dsh-prompt-natural](https://github.com/zhy451/dsh-prompt-natural) | 0 | 2026-11-18 | 2026-11-18 | Composer prompt enhancement for DSH Web: grows your own draft (natural style) with a bundled skill CLI, offline fallback and undo. |
| 342 | [zihangii/dsh-job-desk](https://github.com/zihangii/dsh-job-desk) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: every background task across sessions on one page, grouped by workspace, session, or script — with output tail and stop controls. |
| 343 | [zju-yoyo/dsh-literature-library](https://github.com/zju-yoyo/dsh-literature-library) | 0 | 2026-11-18 | 2026-11-18 | DSH plugin: read, translate, summarize, and question papers in a built-in literature library |
| 344 | [ZY-WANG-0304/dsh-bundle-presets](https://github.com/ZY-WANG-0304/dsh-bundle-presets) | 0 | 2026-11-18 | 2026-11-18 | Named bundle-set presets for DeepSeek Harness: save, edit, apply and undo bundle compositions from the Plugins page. |
| 345 | [ZY-WANG-0304/dsh-workspace-mover](https://github.com/ZY-WANG-0304/dsh-workspace-mover) | 0 | 2026-11-18 | 2026-11-18 | Move DeepSeek Harness sessions between workspaces, by menu or drag and drop. |
| 346 | [zznobzz/dsh-qwen-sub-oauth](https://github.com/zznobzz/dsh-qwen-sub-oauth) | 0 | 2026-11-18 | 2026-11-18 | Qwen Plus/Pro subscription as a DeepSeek Harness provider: OAuth device flow, automatic token rotation, no API key |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 01men/ybkkasi
- 108943962/dsh-plugin-rpa-center
- 13711018663/DeepSeek-Harness-BT-
- CQin04/dsh-playwright-mcp
- CQin04/dsh-usage-timer
- daerwen122/dsh-cpp-compiler
- divelife/dsh-http-header-limit
- glentao-dev/dsh-capability-pack
- glentao-dev/dsh-pdf-toolbox
- itsnotalwin/dsh-completo
- kevin9327/dsh-hwp
- M0R1C/dsh-vision-fix-lmstudio
- Minh42/seomatic-mcp
- OldQin-Aurora/dsh-breeze-tts
- OldQin-Aurora/PortWrench
- oykb58246/dsh-desktop
- pengtang1024/dsh-clipboard-png
- RitchieLeung/dsh-plugin-bot-knowledge
- shawnyuxuan/dsh-subagent-guide
- songzhou666/gov-hub
- weichi-ai/dshd
- WSL043/dsh-chat-manager
- zeki520/dsh-boot-nexus
- Zhang-Eli/dsh-github-trending-masonry
- Zhang-Eli/dsh-matrix-todo
- Zhang-Eli/dsh-one-pack
