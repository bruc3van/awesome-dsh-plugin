# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-04**
- 快照日期 / Snapshot date: **2026-11-04 (UTC)**
- 待审核 / Pending: **484**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **36**
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

对比上一份快照 **2026-11-03** / vs previous snapshot **2026-11-03**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 待审 / pending | 28671 | — | 3101 | 198d | 待审高星 | 核准即 Top 1 |
| ⚠️ [alchaincyf/huashu-excel](https://github.com/alchaincyf/huashu-excel) | 待审 / pending | 456 | — | 70 | 72d | 待审高星 | 核准即榜 #60 |
| ⚠️ [IceWhaleTech/filens](https://github.com/IceWhaleTech/filens) | 待审 / pending | 238 | — | 7 | 46d | 待审高星 | 核准即榜 #101 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 60635 | +1722 | 1644 | 40d | 日增百星 | 日增 +1722★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5553 | +257 | 512 | 27d | 日增百星 | 日增 +257★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 1736 | +241 | 147 | 81d | 日增百星 | 日增 +241★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10746 | +235 | 408 | 81d | 日增百星 | 日增 +235★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5060 | +196 | 101 | 79d | 日增百星 | 日增 +196★ |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 6883 | +166 | 337 | 82d | 日增百星 | 日增 +166★ |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 4028 | +147 | 329 | 89d | 日增百星 | 日增 +147★；已不进榜单 |
| ⚠️ [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 已核准 / approved | 37493 | +138 | 4838 | 212d | 日增百星 | 日增 +138★；已不进榜单 |
| ⚠️ [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) | 已核准 / approved | 6079 | +108 | 474 | 149d | 日增百星 | 日增 +108★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) ⚠️ | 28671 | 2026-04-19 | 2026-11-04 | Huashu Design 3.0 · 在 agent 里打一句话，拿回能交付的设计：网页 / App 原型 / 可编辑 PPTX / 动画 / 信息图 · 六个候选挑三个方向 · 84 种带样张的风格库 · 越用越懂你的外观账本与设计体检 · HTML-native design skill for Claude Code, Codex, Cursor &amp; any agent |
| 2 | [alchaincyf/huashu-excel](https://github.com/alchaincyf/huashu-excel) ⚠️ | 456 | 2026-08-23 | 2026-11-04 | 数据分析与 Excel 全流程 skill：体检脏表、清洗、对齐需求、分析、对账、交付。让 AI 算出来的数字经得起追问。跨 agent 通用，依赖仅 openpyxl。 |
| 3 | [IceWhaleTech/filens](https://github.com/IceWhaleTech/filens) ⚠️ | 238 | 2026-09-18 | 2026-11-04 | 📄 Office / PDF / iWork / CAD / 3D / RAW / 360° 🔒 Browser-local preview &amp; conversion 🤖 Agent CLI with OCR, structured text &amp; layout extraction ⚡ Rust + WebAssembly 🧩 Vue 3 integration. Open-source, local-first. Your files, your device. |
| 4 | [zzzgydi/verge-browser](https://github.com/zzzgydi/verge-browser) | 27 | 2026-03-11 | 2026-11-04 | Self-hosted browser sandbox for AI agents. Chromium, CDP, Playwright, noVNC/Xpra, persistent sessions &amp; human takeover. |
| 5 | [hulibuld/dsh-get-it-for-free](https://github.com/hulibuld/dsh-get-it-for-free) | 5 | 2026-10-24 | 2026-11-04 | 把华为云 CodeArts、腾讯 CodeBuddy / WorkBuddy、Qoder、TRAE、Raccoon、LobsterAI、MiniMax、ZCode、讯飞 Loomy 等免费/签到型账号渠道接入 DeepSeek Harness。纯本地运行，无遥测。 |
| 6 | [thawline/dsh-wechat-bridge](https://github.com/thawline/dsh-wechat-bridge) | 5 | 2026-10-31 | 2026-11-04 | 让 DSH 住进微信：可以接你自己的号，也可以给 AI 单独注册一个小号。后台发消息不抢窗口、断了自动重连、发图以数据库为准。 |
| 7 | [yang0/dsh-handraw-style](https://github.com/yang0/dsh-handraw-style) | 5 | 2026-11-04 | 2026-11-04 | DSH 图像创作工作台插件：单张/套图/封面/知识卡，共享画风、配色、版式、人物与姿势素材 |
| 8 | [hongmaple0820/radarforge](https://github.com/hongmaple0820/radarforge) | 3 | 2026-10-30 | 2026-11-04 | AI 资讯雷达 2.0 是一个 AI 原生的自媒体工作流平台。它把自媒体创作者的一天压缩成四步——AI 搜索找线索、六步流水线出图文稿、三通道渲染出视频成片、一键排版适配微信。全程只有「确认」动作需要人：确认选题方向、确认发布 |
| 9 | [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) | 3 | 2026-08-14 | 2026-11-04 | DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills |
| 10 | [QingJ01/dsh-side-tasks](https://github.com/QingJ01/dsh-side-tasks) | 3 | 2026-11-02 | 2026-11-04 | Context-inheriting side tasks for DeepSeek Harness, opened in the right sidebar without cluttering the session list. |
| 11 | [WayneJin0918/dsh-wm](https://github.com/WayneJin0918/dsh-wm) | 3 | 2026-08-17 | 2026-11-04 | Playable world-model toolkit for DeepSeek Harness: look at frames, name the 3D / pixel / latent route, measure a run, and RSI the research loop. |
| 12 | [baipengyan/dsh-harnessmm](https://github.com/baipengyan/dsh-harnessmm) | 2 | 2026-11-04 | 2026-11-04 | HarnessMM: native DeepSeek Harness plugin implementing Executable Decision Graphs + Guarded Decision Reuse + Certified Callback Substitution, with a read-only session-view panel. |
| 13 | [ef-umbra/dsh-useful-taskball](https://github.com/ef-umbra/dsh-useful-taskball) | 2 | 2026-11-04 | 2026-11-04 | Taskball — DeepSeek Harness 跨会话任务状态悬浮球，一眼看清哪个会话出问题、哪个在等你。A floating ball that shows every DeepSeek Harness session's task state at a glance. |
| 14 | [evolving-foundry/agentbundle](https://github.com/evolving-foundry/agentbundle) | 2 | 2026-11-02 | 2026-11-04 | A unified CLI and SDK for validating, installing, and managing AI agent bundles across multiple agent runtimes. |
| 15 | [mymde/deepseek-mate](https://github.com/mymde/deepseek-mate) | 2 | 2026-11-04 | 2026-11-04 | 希可儿 · DeepSeek Harness 3D 桌宠插件：坐在输入框上陪你聊天，也能坐到任意窗口顶边 |
| 16 | [orion-nebula-dev/dsh-Dynamic-Workflow](https://github.com/orion-nebula-dev/dsh-Dynamic-Workflow) | 2 | 2026-11-04 | 2026-11-04 | 通过 /workflow 运行 JSON 工作流、查看进度、选择子 Agent 模型并保留已完成结果继续执行。 JSON workflows via /workflow with progress, model selection and resumable Agent sessions. |
| 17 | [xuan-tu-ai/dsh-carryon](https://github.com/xuan-tu-ai/dsh-carryon) | 2 | 2026-11-03 | 2026-11-04 | CarryOn context folding (arXiv:2610.18784) for DeepSeek Harness: keep what the agent established, not the whole transcript. |
| 18 | [0131kikimy/dsh-ima](https://github.com/0131kikimy/dsh-ima) | 1 | 2026-11-04 | 2026-11-04 | 腾讯 ima 知识库 x DeepSeek Harness：把 ima 的检索/问答/知识库能力暴露成原生工具（DSH bundle，零依赖） |
| 19 | [20132556/dsh-aliyun-quota](https://github.com/20132556/dsh-aliyun-quota) | 1 | 2026-11-04 | 2026-11-04 | 在 DSH 界面里直接查看阿里云账户额度与花费：可用余额、代金券（含学生 300 元券）、账单趋势、按模型的 token 用量 |
| 20 | [aidrama-lab/dsh-volc-mem0](https://github.com/aidrama-lab/dsh-volc-mem0) | 1 | 2026-11-04 | 2026-11-04 | 为 DeepSeek Harness（DSH）接入火山引擎 Mem0，支持跨会话记忆、自动召回、后台学习与经验自进化，并提供多项目管理和原生设置页面。 |
| 21 | [BinLe1988/polybot](https://github.com/BinLe1988/polybot) | 1 | 2026-11-04 | 2026-11-04 | bot for polymarket |
| 22 | [Bobnemimimmi/dsh-visible-action-row](https://github.com/Bobnemimimmi/dsh-visible-action-row) | 1 | 2026-08-26 | 2026-11-04 | 始终显示消息下的 status bar，无需鼠标悬停 |
| 23 | [CaptainPersia-66/dsh-telegram-bridge](https://github.com/CaptainPersia-66/dsh-telegram-bridge) | 1 | 2026-11-04 | 2026-11-04 | Manage DeepSeek Harness sessions from Telegram: forum topics per session, prompts, reviews, approvals, media delivery. |
| 24 | [ccgo26/dsh-app-updater](https://github.com/ccgo26/dsh-app-updater) | 1 | 2026-10-31 | 2026-11-04 | DeepSeek Harness 插件：检测本机已安装应用是否有新版本，并从各自官网下载全量安装包一键静默更新（Windows/winget、macOS/Homebrew，按本机 ARM64/x64 选包）。Detect installed apps and update them one-click with the vendor's full installer. |
| 25 | [chiinsight/dsh-github-hot](https://github.com/chiinsight/dsh-github-hot) | 1 | 2026-11-04 | 2026-11-04 | DSH GitHub 涨星榜插件：日/周/月三榜切换，展示每期涨星 TOP20，卡片流榜单 + 项目简介 + 星数曲线趋势图与多项目对比 |
| 26 | [ChineseRyan/dsh-plugin-workspace-archive](https://github.com/ChineseRyan/dsh-plugin-workspace-archive) | 1 | 2026-11-04 | 2026-11-04 | 往工作区行「…」菜单添加「归档工作区」：归档该工作区下全部会话并从侧边栏隐藏，可随时恢复。 |
| 27 | [Cillivian/wecom-file-dsh](https://github.com/Cillivian/wecom-file-dsh) | 1 | 2026-11-03 | 2026-11-04 | DeepSeek Harness plugin: WeCom WeDrive picker that inserts @ chips via wecom-cli, with the official selector as fallback. |
| 28 | [dan-cube/dsh-logo-ui](https://github.com/dan-cube/dsh-logo-ui) | 1 | 2026-11-04 | 2026-11-04 | Custom logos &amp; typography for DeepSeek Harness · DSH 自定义 Logo 与界面字号设置 |
| 29 | [Daydreaming1313/dsh-persona-mianmian](https://github.com/Daydreaming1313/dsh-persona-mianmian) | 1 | 2026-11-04 | 2026-11-04 | State-driven realistic persona plugin for DeepSeek Harness (dsh): 傲娇女友人格 / 随机性引擎 / 零运行时依赖 |
| 30 | [deepseekv41flash/dsh-remote-subagent](https://github.com/deepseekv41flash/dsh-remote-subagent) | 1 | 2026-11-04 | 2026-11-04 | DSH (DeepSeek Harness) remote subagent: dispatch tasks from a local session to a DSH running on another machine over SSH (dsh headless --json), stream its run events, and continue the same remote conversation |
| 31 | [DianLeida/dsh-DianLeida-E-commerce-product-selection](https://github.com/DianLeida/dsh-DianLeida-E-commerce-product-selection) | 1 | 2026-11-03 | 2026-11-04 | The DianLeida MCP integrates five key product selection capabilities: product selection library, product ranking, product analysis, product categories, and image search for similar items, all packaged into one MCP. After integrating AI, it can directly query 1688's real data and provide conclusions, eliminating the need to manually transfer data. |
| 32 | [DreamStars168/dsh-session-delete](https://github.com/DreamStars168/dsh-session-delete) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：彻底删除会话（含子智能体会话）的日志目录、投影缓存与工作区记账。 |
| 33 | [drscrewdriver/dsh-cookie-cleaner](https://github.com/drscrewdriver/dsh-cookie-cleaner) | 1 | 2026-11-03 | 2026-11-04 | DSH plugin: reports the local dsh-auth-* entries left in the desktop client cookie store and ships a standalone command that purges them once the client is fully closed. |
| 34 | [drypeek/dsh-git-multirepo](https://github.com/drypeek/dsh-git-multirepo) | 1 | 2026-11-03 | 2026-11-04 | Read every git repository in a DSH workspace as one merged commit timeline. |
| 35 | [dxxo77/dsh-plugin-quota-balance](https://github.com/dxxo77/dsh-plugin-quota-balance) | 1 | 2026-11-02 | 2026-11-04 | DSH 插件：在输入框下方的用量行最左侧显示 DeepSeek 账户余额，字号与官方一致；点击原地展开普通余额 / 赠送额度明细；读取宿主表面 token，可跟随 dsh-plugin-wallpaper-engine 的玻璃与壁纸。 |
| 36 | [fengshenx/dsh-leader-agent](https://github.com/fengshenx/dsh-leader-agent) | 1 | 2026-10-23 | 2026-11-04 | DSH leader/worker orchestration bundle: project tree, delivery board, worker sessions |
| 37 | [genius-alray/dsh-plugin-forge-cnb](https://github.com/genius-alray/dsh-plugin-forge-cnb) | 1 | 2026-11-04 | 2026-11-04 | CNB (cnb.cool) merge request provider for the DeepSeek Harness forge panel |
| 38 | [ggghhh-11/dsh-novel-studio](https://github.com/ggghhh-11/dsh-novel-studio) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 小说创作工作台：模板、大纲/章纲/正文流水线、32 子智能体并行审稿、AI 味扫描、右栏故事图谱与钩子管理。 |
| 39 | [Gladess1102/dsh-g-memory](https://github.com/Gladess1102/dsh-g-memory) | 1 | 2026-10-02 | 2026-11-04 | Cross-session semantic memory for DeepSeek Harness: indexes session history locally with EmbeddingGemma 2 embeddings and recalls relevant past context, injecting it as clearly-framed untrusted context. No runtime dependencies, no service to run, synthesis opt-in. |
| 40 | [Gladess1102/legacy-firmware-reversing](https://github.com/Gladess1102/legacy-firmware-reversing) | 1 | 2026-10-28 | 2026-11-04 | Agent Skill + DSH plugin: field-tested black-box legacy firmware RE methodology (SigmaTel STMP35xx case study). 零变砖刷写·全量汉化·DSP JIT 仿真·证伪矩阵 |
| 41 | [HansyLin-xCoFe/dsh-notify](https://github.com/HansyLin-xCoFe/dsh-notify) | 1 | 2026-11-04 | 2026-11-04 | Attention alerts for DeepSeek Harness Web: soft prompt tones and a clean top-right banner when an approval or a question waits for you. 审批/提问等待提醒：提示音 + 右上角提醒卡片，6 款内置音效，可自定义音频。 |
| 42 | [Him666233/dsh-inline-diff](https://github.com/Him666233/dsh-inline-diff) | 1 | 2026-11-04 | 2026-11-04 | DSH Inline Diff — DeepSeek Harness 内联差异插件：逐次修改对比、字符级高亮、读取范围、左右对照与可配置展开风格，桌面端/Web UI 通用。 |
| 43 | [HuaGyuu/dsh-runner](https://github.com/HuaGyuu/dsh-runner) | 1 | 2026-11-03 | 2026-11-04 | 管理电脑上软件服务的dsh插件 |
| 44 | [hxlog/dsh-skills-tools](https://github.com/hxlog/dsh-skills-tools) | 1 | 2026-11-03 | 2026-11-04 | DeepSeek Harness 的 Skills 管理器：从 Git 仓库导入技能，按仓库分组管理，随时启用、停用、补齐与查看内容。 |
| 45 | [ijgvt/short-drama-director-dsh](https://github.com/ijgvt/short-drama-director-dsh) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness short-drama director plugin for script-to-assets, video prompts and ComfyUI workflows |
| 46 | [JayC-L/dsh-skills-management](https://github.com/JayC-L/dsh-skills-management) | 1 | 2026-11-04 | 2026-11-04 | DSH Skill catalog with file-backed model and user manual invocation controls and live source reads. |
| 47 | [joeseesun/qiaomu-blog-publisher-dsh](https://github.com/joeseesun/qiaomu-blog-publisher-dsh) | 1 | 2026-10-27 | 2026-11-04 | 原版乔木博客发布器的 DeepSeek Harness 版本，保留博客分类、草稿和 R2 图片音视频上传 |
| 48 | [joeseesun/qiaomu-publish-dsh](https://github.com/joeseesun/qiaomu-publish-dsh) | 1 | 2026-10-27 | 2026-11-04 | 原版乔木 Publish 的 DeepSeek Harness 版本：42 主题、公众号排版、X/知乎/小红书草稿、封面与长图导出 |
| 49 | [kianajunjie/dsh-hippocampus](https://github.com/kianajunjie/dsh-hippocampus) | 1 | 2026-11-03 | 2026-11-04 | 给「大肥鱼」的记忆层：事件编码、情绪加权遗忘、联想召回，还会承认自己记不清。 |
| 50 | [Laixiaomin001/dshm-local-superagent](https://github.com/Laixiaomin001/dshm-local-superagent) | 1 | 2026-11-04 | 2026-11-04 | 不接仓库、不要云的本地 superagent 骨架：主会话派单 → 本地队列 → 子会话 worker → 回报，带 SQLite 记忆与进程内调度。 |
| 51 | [LearnItHard/dsh-notebook-v2](https://github.com/LearnItHard/dsh-notebook-v2) | 1 | 2026-11-04 | 2026-11-04 | DSH 右栏自研 Jupyter notebook 面板（SSE 流式事件 + CodeMirror 6 + nb_* 工具），与 VS Code Notebook 手感对齐 |
| 52 | [Lencen/dsh-agent-lines](https://github.com/Lencen/dsh-agent-lines) | 1 | 2026-11-04 | 2026-11-04 | DSH Agent 的会话团队，super agent平替。 |
| 53 | [leotpp/dsh-subagent-toolkit](https://github.com/leotpp/dsh-subagent-toolkit) | 1 | 2026-11-04 | 2026-11-04 | 为 DeepSeek Harness 的子代理单独指定第三方模型（Settings → 子模型） |
| 54 | [LiDu-china/dsh-dafeiyu-emotion](https://github.com/LiDu-china/dsh-dafeiyu-emotion) | 1 | 2026-11-04 | 2026-11-04 | 🐋 大肥鱼 · 情绪耳朵 — Voice + emotion-aware companion for DeepSeek Harness. Listen, understand tone, and reply with empathy. |
| 55 | [lizilong1993/dsh-plain-talk](https://github.com/lizilong1993/dsh-plain-talk) | 1 | 2026-11-04 | 2026-11-04 | Composer switch for DeepSeek Harness that shapes replies: conclusion first, concise, self-contained. |
| 56 | [lzzzz666888/dsh-purge-optimized](https://github.com/lzzzz666888/dsh-purge-optimized) | 1 | 2026-11-04 | 2026-11-04 | dsh-purge 优化版（衍生分支）：在上游 1.1.90 基础上恢复技能库 23 个技能、POC/EXP 知识库与本地靶场白名单，并补齐 nuclei 模板类目筛选与翻页。Derivative of dsh-purge — restores the skill library, knowledge base and local-lab allowlist. |
| 57 | [M-SX-Xianyu/dsh-agentic-browser](https://github.com/M-SX-Xianyu/dsh-agentic-browser) | 1 | 2026-11-04 | 2026-11-04 | DSH 的 Agent 浏览器插件：右侧栏近原生 webview 浏览器面板，Agent 可直接操作——22 个工具、可见鼠标光标、跨会话后台打开、批量操作一步到位。 |
| 58 | [M0Yun/dsh-cookie-guard](https://github.com/M0Yun/dsh-cookie-guard) | 1 | 2026-11-04 | 2026-11-04 | 修复 DeepSeek Harness 桌面端（Windows）每次启动都会新增一条 dsh-auth-* 登录 Cookie、从不清理，攒到约 70 条后 Cookie 请求头超过 16KB 被回 431（Web authentication failed）打不开的问题。插件在 DSH 启动时挂一个后台清理器，DSH 退出即清掉上一轮及更早的 Cookie；只删 dsh-auth-*，其他 Cookie 不动。 |
| 59 | [M0Yun/dsh-speak-plus](https://github.com/M0Yun/dsh-speak-plus) | 1 | 2026-11-04 | 2026-11-04 | 让 DSH 把回答念出来：中间过程合并朗读、审批/提问优先播报、新内容自动换手、Alt+S 停止（dsh-speak 1.8.4 增强分支） |
| 60 | [Memorial-coder/dsh-remote-plugin](https://github.com/Memorial-coder/dsh-remote-plugin) | 1 | 2026-11-04 | 2026-11-04 | DSH 远程助手(DshRemote)插件：把 DeepSeek 助手 Web 面板安全穿透到手机与外网，侧边栏一键开启。DSH persistent plugin bundle (host + client). |
| 61 | [mlf519/dsh-code-audit](https://github.com/mlf519/dsh-code-audit) | 1 | 2026-11-03 | 2026-11-04 | DeepSeek Harness安全代码审计管理插件 |
| 62 | [muvuula/DeepSeek-Harness-Core](https://github.com/muvuula/DeepSeek-Harness-Core) | 1 | 2026-08-14 | 2026-11-04 | mcore · 自我拟合进化的本地 AI 内核框架（原本名 DHC / DeepSeek Harness Core）：人格核心 + 三层记忆 + 时间轴推演，all-local 隐私可控的 DeepSeek Harness 插件 / Self-fitting local AI core engine for DeepSeek Harness — persona core, three-tier memory, timeline reasoning, all-local by design. |
| 63 | [NormalAorii/dsh-plugin-lol-mayhem](https://github.com/NormalAorii/dsh-plugin-lol-mayhem) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness native plugin — LoL ARAM: Mayhem (海克斯大乱斗) QQ assistant: 13 tools for Top6 augments with mechanism notes, best builds, trios, tier list, PNG cards. Data: aramgg official client API. |
| 64 | [NormalAorii/dsh-plugin-outlast](https://github.com/NormalAorii/dsh-plugin-outlast) | 1 | 2026-11-04 | 2026-11-04 | 《逃生：试炼》(The Outlast Trials) QQ 查询机器人插件 · DeepSeek Harness 原生插件（Cordis bundle），提供关卡攻略/敌人图鉴/道具/机制/实时资讯/图文卡片 9 个工具 |
| 65 | [NormalAorii/dsh-plugin-trpg](https://github.com/NormalAorii/dsh-plugin-trpg) | 1 | 2026-11-04 | 2026-11-04 | TRPG 跑团咨询 DSH 插件：17 个工具（DTRPG 新货/Chaosium 动态/行业新闻/社区热帖/规则库/截图卡）+ 中文图文卡片 |
| 66 | [oobitoooo/dsh-risk-gate](https://github.com/oobitoooo/dsh-risk-gate) | 1 | 2026-11-04 | 2026-11-04 | dsh-purge 的野生补丁：给破甲加一道高危操作确认闸门（human-in-the-loop），不改宿主、不撤销破甲。 |
| 67 | [oobitoooo/dsh-xiumi](https://github.com/oobitoooo/dsh-xiumi) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：秀米（XIUMI）图文排版自动化 skill，用 Playwright/CDP 操作已登录浏览器完成批量排版、滑动图集、换图、保存与审核核对 |
| 68 | [ormake/purge1.1.7.1](https://github.com/ormake/purge1.1.7.1) | 1 | 2026-11-04 | 2026-11-04 | dsh-purge v1.1.71 完整源码镜像（原仓库 YuJunZhiXue/dsh-purge 与 npm 包均已删除）。DeepSeek Harness 破甲 / 红队评测插件，支持官方 web 与桌面宿主。 |
| 69 | [Penguin-SAMA/dsh-conversation-links](https://github.com/Penguin-SAMA/dsh-conversation-links) | 1 | 2026-11-04 | 2026-11-04 | DSH 插件：跨对话引用 —— @ 引用其他对话、从左侧栏拖拽对话进输入框、打开对话勾选消息插入到另一个对话 |
| 70 | [reisen0327-sudo/dsh-matlab-control](https://github.com/reisen0327-sudo/dsh-matlab-control) | 1 | 2026-11-04 | 2026-11-04 | MATLAB/Simulink control-engineering assistant for DeepSeek Harness: MCP bridge + Simulink checks, App Designer, control-design skills |
| 71 | [RockChen87/colorful-notes-dsh](https://github.com/RockChen87/colorful-notes-dsh) | 1 | 2026-11-04 | 2026-11-04 | Colorful sticky notes for the DeepSeek Harness sidebar: add, edit and delete notes, and set daily, weekly, monthly or one-time reminders. |
| 72 | [Rosynb666/dsh-cumcm](https://github.com/Rosynb666/dsh-cumcm) | 1 | 2026-11-04 | 2026-11-04 | 数模台：DeepSeek Harness 下的国赛论文工作台——P0–P7 全流程进度、facts 事实台账、一键体检与编译 PDF，配套 math-modeling-cumcm skill。 |
| 73 | [shengpj/dsh-payload](https://github.com/shengpj/dsh-payload) | 1 | 2026-10-30 | 2026-11-04 | 查看每一次模型调用真实发出的完整请求 |
| 74 | [song-423/dsh-pet](https://github.com/song-423/dsh-pet) | 1 | 2026-11-04 | 2026-11-04 | dsh-pet 二创改动：长期事实记忆、记忆面板、主动搭话、可配置快捷键、只读「桌宠」预设（基于上游 v0.4.1） |
| 75 | [soyorinhhh/dsh-cookie-doctor](https://github.com/soyorinhhh/dsh-cookie-doctor) | 1 | 2026-11-04 | 2026-11-04 | DSH 桌面版「Web authentication failed」崩溃治理插件：清理堆积的 dsh-auth-* cookie 并阻止复发 |
| 76 | [stevenwang15/dsh-taste-skill](https://github.com/stevenwang15/dsh-taste-skill) | 1 | 2026-11-04 | 2026-11-04 | 把 tasteskill v2 封装成 DeepSeek Harness 原生技能插件：研究过的设计方向、真图、反套路页面规范，以及真浏览器截图自检与返工循环。 |
| 77 | [TNTest/dsh-infinite-canvas](https://github.com/TNTest/dsh-infinite-canvas) | 1 | 2026-11-04 | 2026-11-04 | Infinite Canvas plugin for DeepSeek Harness with settings UI, local agent supervision, and official MCP tools. |
| 78 | [Tongyu3/dsh-qq-bot](https://github.com/Tongyu3/dsh-qq-bot) | 1 | 2026-11-04 | 2026-11-04 | DSH 的 QQ 机器人插件：NapCat + OneBot v11 接入，人设/记忆/存档/白名单/暖场/表情包/扩展，手机本地一键部署 |
| 79 | [tonyzdev/dsh-language-bridge](https://github.com/tonyzdev/dsh-language-bridge) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: per-model working languages, with DeepSeek translating prompts and replies |
| 80 | [tortoise014/dsh-tasks-panel](https://github.com/tortoise014/dsh-tasks-panel) | 1 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 侧栏任务面板：待办清单 + 历史月历 + 飞书到点提醒 |
| 81 | [TwinsEarth/DSH-2Xray](https://github.com/TwinsEarth/DSH-2Xray) | 1 | 2026-10-28 | 2026-11-04 | DSH-2Xray: xray-core supervisor + in-process traffic takeover for DSH |
| 82 | [William20100221/dsh-context-graph](https://github.com/William20100221/dsh-context-graph) | 1 | 2026-11-01 | 2026-11-04 | DeepSeek Harness plugin: remembers past conversations as a small graph |
| 83 | [Wiselfx/dsh-freeweb](https://github.com/Wiselfx/dsh-freeweb) | 1 | 2026-08-23 | 2026-11-04 | Keyless web-search provider for DeepSeek Harness: Startpage, DuckDuckGo, Exa, and more behind a consensus fan-out. No API keys. |
| 84 | [wld12314/lit-report-ppt](https://github.com/wld12314/lit-report-ppt) | 1 | 2026-11-02 | 2026-11-04 | 一篇论文 PDF → 中文组会文献汇报 PPT（.pptx）+ 逐页讲解稿（.docx）。抽文本、裁图、排版、自检全自动，两份产物同源于一个 content.json，版式量自真实汇报稿。 |
| 85 | [woshiwenjunjie/dsh-plugins](https://github.com/woshiwenjunjie/dsh-plugins) | 1 | 2026-11-04 | 2026-11-04 | 我的 DSH（DeepSeek Harness）Web 插件仓库：一个目录一个可发布的 bundle 插件。 |
| 86 | [wowswows/dsh-req-workbench](https://github.com/wowswows/dsh-req-workbench) | 1 | 2026-11-04 | 2026-11-04 | DSH 会话功能需求清单：AI 主动整理、通俗表达、合并更新。非官方 rc.5 适配重构版，保留 MIT 原作者归属。 |
| 87 | [xgone/dsh-redis](https://github.com/xgone/dsh-redis) | 1 | 2026-09-22 | 2026-11-04 | DSH Redis 插件：让 Agent 通过模型工具安全读写 Redis（string/hash/list/set/zset），写操作逐次人工确认，凭据不进对话 \| Redis plugin for DeepSeek Harness: safe agent tools with per-write approval and credentials kept out of chat |
| 88 | [XiaoZheBrother/dsh-bilibili-dafeiyu](https://github.com/XiaoZheBrother/dsh-bilibili-dafeiyu) | 1 | 2026-11-04 | 2026-11-04 | 大肥鱼的 B站成长工作台 · 让 DSH 角色记住经历、延续好奇心、创作与复盘 |
| 89 | [xzwwwwww/dsh-mathmodeling-workflow](https://github.com/xzwwwwww/dsh-mathmodeling-workflow) | 1 | 2026-11-03 | 2026-11-04 | 数学建模竞赛全流程工作流（DSH 插件）：赛题目录 → 8 步流水线（分析·建模·编程·图表·流程图·逻辑复核·论文·编译）→ 完整 LaTeX 论文 PDF。Math modeling competition workflow for DeepSeek Harness (CUMCM / MCM). |
| 90 | [yanyan-shub/dsh-fishday](https://github.com/yanyan-shub/dsh-fishday) | 1 | 2026-11-04 | 2026-11-04 | 让你的ds可以有自己的一套时间和她自己的世界！安装这个插件之后ds会在自己无聊的时候找事干，而且你还可以在一天结束的时候问问她今天都做了什么 |
| 91 | [YB313/dsh-branch-tree](https://github.com/YB313/dsh-branch-tree) | 1 | 2026-10-30 | 2026-11-04 | Browse DeepSeek Harness conversations as a nested branch tree, and create branches that inherit their parent session’s instructions. |
| 92 | [zdt3476/dsh-subagent-routes](https://github.com/zdt3476/dsh-subagent-routes) | 1 | 2026-11-02 | 2026-11-04 | DeepSeek Harness 插件：按工作区目录给子智能体指定 provider、模型与思考等级，最长前缀匹配，带可视化设置页 |
| 93 | [zhezhi33/dsh-session-recycler](https://github.com/zhezhi33/dsh-session-recycler) | 1 | 2026-11-02 | 2026-11-04 | 会话回收站与清理、子代理对话树管理、产物识别与资源管理器高亮，并提供文件用途查询的 Windows DSH 插件。 |
| 94 | [zhyunran/dsh-cross-session](https://github.com/zhyunran/dsh-cross-session) | 1 | 2026-11-04 | 2026-11-04 | DSH plugin: message, hand files to, search and read another top-level session — peer-session development without subagents. 顶层会话之间的消息、文件、搜索、读取；不是子 agent。 |
| 95 | [zhyunran/dsh-session-bundle](https://github.com/zhyunran/dsh-session-bundle) | 1 | 2026-11-04 | 2026-11-04 | DSH plugin: one /bundle command exports a readable transcript, raw log, attachments and the files a session produced into a ZIP on disk. 一条命令导出可读对话、原始日志、附件与本会话产出文件。 |
| 96 | [zhyunran/dsh-subagent-parent-message](https://github.com/zhyunran/dsh-subagent-parent-message) | 1 | 2026-11-04 | 2026-11-04 | DSH plugin: bidirectional subagent messaging - subagent_parent_message (child to parent; one-shot/workflow OK) + subagent_send_message (parent to direct continuable child). 子 agent 双向：直连父会话 + 父联系直接子。 |
| 97 | [ZIYE-JK/dsh-quadrant-todolist](https://github.com/ZIYE-JK/dsh-quadrant-todolist) | 1 | 2026-11-04 | 2026-11-04 | Four-quadrant todo manager for the DSH sidebar: month and week calendar views, per-period completion stats, system and Feishu notifications, workday-aware recurrence. |
| 98 | [01men/boxfill](https://github.com/01men/boxfill) | 0 | 2026-10-09 | 2026-11-04 | 装柜数量计算器 · 集装箱装载方案测算 + MCP 服务（H5 网页端与 Agent 共用同一套装箱引擎，299 测试 / 12 工具） |
| 99 | [07-dot/dsh-cookie-janitor](https://github.com/07-dot/dsh-cookie-janitor) | 0 | 2026-11-04 | 2026-11-04 | Expire stale dsh-auth cookies before the 16 KiB header limit (HTTP 431). |
| 100 | [1207627875/dsh-live-tps](https://github.com/1207627875/dsh-live-tps) | 0 | 2026-11-04 | 2026-11-04 | DSH Desktop 实时 TPS 插件：在输入框下方显示本地/云端模型的实时 tok/s，可展开折线与本轮统计。 |
| 101 | [123David-yang/dsh-goal-board](https://github.com/123David-yang/dsh-goal-board) | 0 | 2026-11-04 | 2026-11-04 | Goal Gantt board for DeepSeek Harness — phase-level progress timeline, current chapter, per-phase summaries, distance to goal. |
| 102 | [22225555wwwww/dsh-exec-trace](https://github.com/22225555wwwww/dsh-exec-trace) | 0 | 2026-11-04 | 2026-11-04 | Attention-first execution trace companion for DeepSeek Harness: per-turn execution bar, native step guides, right-sidebar overview/changes/timeline, and brief AI explanations. |
| 103 | [2315137135/dsh-rightbar-exit-strip](https://github.com/2315137135/dsh-rightbar-exit-strip) | 0 | 2026-11-04 | 2026-11-04 | 右侧栏全屏时的左边缘退出条，可用双击分割线进入全屏 · An exit strip on the left edge of the fullscreen right sidebar, plus double-click on the divider to enter fullscreen |
| 104 | [2315137135/dsh-webdav-sync](https://github.com/2315137135/dsh-webdav-sync) | 0 | 2026-11-04 | 2026-11-04 | WebDAV 同步 DSH 配置与插件清单，带忽略规则与检查面板 · WebDAV sync for DeepSeek Harness config, plugin manifests and inspection panel |
| 105 | [2370998716-jpg/dsh-turn-eta](https://github.com/2370998716-jpg/dsh-turn-eta) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：对话头部显示本轮耗时、token、速度与倒计时预估；发送前预估产出 token / 费用 / 时间。 |
| 106 | [2718labs/dsh-compaction-continuum](https://github.com/2718labs/dsh-compaction-continuum) | 0 | 2026-11-04 | 2026-11-04 | Structural Compression (结构性压缩) for DeepSeek Harness: certified, cache-preserving context compaction with retrieval and release. |
| 107 | [3418244301q-star/dsh-session-log-upload](https://github.com/3418244301q-star/dsh-session-log-upload) | 0 | 2026-11-04 | 2026-11-04 | Sync DSH session logs from non-official model channels (ollama-local, pi-ai, OpenAI-compatible) to DeepSeek, sharing the built-in watermark. Ships a settings row, a manual upload button, and byte-parity tests against the core plugin. |
| 108 | [3469915488-oss/dsh-literature-hub](https://github.com/3469915488-oss/dsh-literature-hub) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 本地文献库：阅读、批注、笔记、离线 Whisper 转写与伴读。 |
| 109 | [439436269-ctrl/dsh-file-explorer](https://github.com/439436269-ctrl/dsh-file-explorer) | 0 | 2026-11-04 | 2026-11-04 | VS Code style folder and file explorer for DeepSeek Harness: sidebar entry, lazy file tree, text / Markdown / image preview. |
| 110 | [439436269-ctrl/dsh-sticky-notes](https://github.com/439436269-ctrl/dsh-sticky-notes) | 0 | 2026-11-04 | 2026-11-04 | Sticky notes in the DeepSeek Harness sidebar: a notes panel with auto-save plus note_create / note_list / note_update / note_delete tools. |
| 111 | [456erddgr/dsh-lag-guard](https://github.com/456erddgr/dsh-lag-guard) | 0 | 2026-11-04 | 2026-11-04 | 长会话一打开就卡死？这个插件把历史窗口收到 120 条，并在几兆的工具 schema 撑爆 React 之前丢掉它们。 |
| 112 | [4uthen7/dsh-activity-heatmap](https://github.com/4uthen7/dsh-activity-heatmap) | 0 | 2026-11-04 | 2026-11-04 | GitHub-style activity heatmap plugin for DeepSeek Harness: daily usage from local session logs, with shapes, palettes, and calendar layouts. |
| 113 | [5D-artist/dsh-archived-purge](https://github.com/5D-artist/dsh-archived-purge) | 0 | 2026-11-04 | 2026-11-04 | Select-all cleanup for archived DeepSeek Harness sessions: delete the session log, projection cache, workspace accounting and archive marker together. |
| 114 | [694410194/mino-plugins](https://github.com/694410194/mino-plugins) | 0 | 2026-11-01 | 2026-11-04 | DeepSeek Harness (DSH) 精选插件集 + 索引 — Mino 桌面发行版插件源 |
| 115 | [8kugames/dsh-team-bots](https://github.com/8kugames/dsh-team-bots) | 0 | 2026-11-03 | 2026-11-04 | Project spaces, group chats, task boards, memory and usage for teams of DSH bots |
| 116 | [a1121611810/dsh-media-converter](https://github.com/a1121611810/dsh-media-converter) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 的多媒体工具箱插件：转换 / 裁剪 / 提取音轨 / 字幕 / 元数据 / Base64，本机 ffmpeg 完成。 |
| 117 | [a158070653-hash/dsh-ontology-viewer](https://github.com/a158070653-hash/dsh-ontology-viewer) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: open .ttl/.owl/.rdf/.jsonld/.nt ontology files and render their RDF triples as an interactive graph in the sidebar preview. |
| 118 | [AaronOhO/dsh-plugin-selection-comments](https://github.com/AaronOhO/dsh-plugin-selection-comments) | 0 | 2026-11-04 | 2026-11-04 | Selection comments on model output and an independent side-chat window for the DeepSeek Harness Web GUI. |
| 119 | [adrianwang99/dsh-bookweave](https://github.com/adrianwang99/dsh-bookweave) | 0 | 2026-11-04 | 2026-11-04 | EPUB reader plugin for DeepSeek Harness: shelf, excerpts, a book list of every mentioned title, and an AI chapter guide with source-linked cards. |
| 120 | [AidenX0704/dsh-mcp](https://github.com/AidenX0704/dsh-mcp) | 0 | 2026-11-04 | 2026-11-04 | MCP Center for DeepSeek Harness: a sidebar panel + marketplace for MCP servers, with per-workspace/session scope, auto or /command invocation, JSON import, and a model-facing mcp_manager tool. · DeepSeek Harness 的 MCP 管理中心。 |
| 121 | [AIfarmer-001/dsh-today-fortune](https://github.com/AIfarmer-001/dsh-today-fortune) | 0 | 2026-11-04 | 2026-11-04 |  DSH 每日运势插件：赛博小庙，每日一摇。烧 Token 前抽一签，升档降档问问天。DSH Daily Fortune Plugin: A cyber shrine, draw once a day. Grab a fortune stick before burning Tokens—let the heavens decide your tier: up or down. |
| 122 | [AikawaNaya/dsh-agents-md-editor](https://github.com/AikawaNaya/dsh-agents-md-editor) | 0 | 2026-11-04 | 2026-11-04 | Editor panel for ~/.dsh/AGENTS.md in the DeepSeek Harness left sidebar · 在左侧栏实时查看、修改并保存 ~/.dsh/AGENTS.md |
| 123 | [aiml-kiki/dsh-disk-ops](https://github.com/aiml-kiki/dsh-disk-ops) | 0 | 2026-11-04 | 2026-11-04 | DSH Desktop plugin: treemap disk inspection with linked cleanup suggestions and a reviewed trash plan (macOS). |
| 124 | [AkirTech/EGO-dsh-controller](https://github.com/AkirTech/EGO-dsh-controller) | 0 | 2026-11-04 | 2026-11-04 | The repository of EGO-1-dsh-controller. Flash the firmware to your FPGA and enjoy! |
| 125 | [akiwu/dsh-1024-game](https://github.com/akiwu/dsh-1024-game) | 0 | 2026-11-04 | 2026-11-04 | 在 DeepSeek Harness Web GUI 里玩 1024：侧边栏入口 + 全屏游戏面板，方向键/WASD/滑动，本地存档。A DSH plugin (bundled host row + web client half). |
| 126 | [Altermoe/dsh-model-logos](https://github.com/Altermoe/dsh-model-logos) | 0 | 2026-11-04 | 2026-11-04 | Brand marks for models and vendors in the DeepSeek Harness (DSH) Web GUI: composer model selector, model picker, and Settings -&gt; Models, with a per-model icon picker. |
| 127 | [alvinhuang0509-design/dsh-connect-teleagent](https://github.com/alvinhuang0509-design/dsh-connect-teleagent) | 0 | 2026-11-04 | 2026-11-04 | dsh-connect-teleagent |
| 128 | [AngChow/xrxs-dsh-harmony-publish](https://github.com/AngChow/xrxs-dsh-harmony-publish) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: safe HarmonyOS build, Bugly symbol upload, AppGallery Connect upload and review submission with credential redaction and human approval |
| 129 | [apcamargo/dsh-claude-subscription](https://github.com/apcamargo/dsh-claude-subscription) | 0 | 2026-11-02 | 2026-11-04 | A DeepSeek Harness plugin to use Claude models through Claude subscriptions |
| 130 | [ArchettoSuki/dsh-not-token-killer](https://github.com/ArchettoSuki/dsh-not-token-killer) | 0 | 2026-11-04 | 2026-11-04 | 本插件仅供娱乐使用，非实用性插件，下载前请自行选择。DeepSeek Harness 非官方社区插件（Token-Reducer?）：模拟执行任务，生成 SIMULATED 轨迹与 0 字节产物，不调用真实模型或工具/For entertainment only. Not a practical plugin — download at your own discretion.Unofficial DeepSeek Harness plugin that simulates task execution with SIMULATED traces and zero-byte artifacts. |
| 131 | [areaartez51/dsh-uml-class](https://github.com/areaartez51/dsh-uml-class) | 0 | 2026-11-04 | 2026-11-04 | UML class diagrams for DeepSeek Harness — interactive HTML from code or JSON |
| 132 | [asd45183/dsh-douyin-mac](https://github.com/asd45183/dsh-douyin-mac) | 0 | 2026-11-04 | 2026-11-04 | macOS 版抖音 DSH 插件：Google Chrome 专用窗口、人格记忆与自主观看（基于上游 dsh-douyin-agent 1.4.6 移植） |
| 133 | [asdw159632/dsh-git-plugin](https://github.com/asdw159632/dsh-git-plugin) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: visualize a repository's git history and operate on it from the GUI (add / commit / pull / push / merge). |
| 134 | [asdw159632/dsh-panellist-collapse](https://github.com/asdw159632/dsh-panellist-collapse) | 0 | 2026-11-04 | 2026-11-04 | DSH UI plugin that collapses the left sidebar panel list: keep only the first N rows (default: just the Plugins entry) while leaving the skin artwork untouched. |
| 135 | [Asgoresmilelong/dsh-stickerbook](https://github.com/Asgoresmilelong/dsh-stickerbook) | 0 | 2026-11-01 | 2026-11-04 | 本地表情包库插件 for DeepSeek Harness：157 张蓝色大肥鱼、输入框选图、\[贴纸: 描述\] 渲染、可选 QQ 原生发送 |
| 136 | [atticuswx/dsh-kube-lens](https://github.com/atticuswx/dsh-kube-lens) | 0 | 2026-11-04 | 2026-11-04 | Kubernetes cluster browser panel and agent tools for DeepSeek Harness (DSH) — read-only by default. |
| 137 | [Avan0203/dsh-skin](https://github.com/Avan0203/dsh-skin) | 0 | 2026-11-04 | 2026-11-04 | Wallpaper skin for the DeepSeek Harness UI: image URLs, local files and Wallpaper Engine libraries with opacity, blur, slideshow and shortcuts. |
| 138 | [AvenYQ/dsh-rigui](https://github.com/AvenYQ/dsh-rigui) | 0 | 2026-11-04 | 2026-11-04 | 日晷 (Rigui) — a playful personal life workbench for DeepSeek Harness: sleep, food, workouts, spending and schedule on one page of cards that react to each other |
| 139 | [badpx/dsh-plugin-git-blame](https://github.com/badpx/dsh-plugin-git-blame) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：在右侧栏文件预览的行号前注入 Git Blame 列，悬停显示提交信息（DSH plugin） |
| 140 | [BarrierFly/approval-detail-plugin](https://github.com/BarrierFly/approval-detail-plugin) | 0 | 2026-11-04 | 2026-11-04 | 显示申请权限的详细信息 |
| 141 | [BeepFlyer/dsh-voice-chat-mode](https://github.com/BeepFlyer/dsh-voice-chat-mode) | 0 | 2026-11-04 | 2026-11-04 | Voice chat mode for DeepSeek Harness: always-on VAD listening, local SenseVoice transcription, auto-submit, Edge TTS read-aloud, settings UI and a voice_mode tool. |
| 142 | [BeforeLanding/dsh-done-check](https://github.com/BeforeLanding/dsh-done-check) | 0 | 2026-11-04 | 2026-11-04 | Executable acceptance checklists for DeepSeek Harness : every "done" backed by a recorded check result, flagged for re-check when the code changes.  |
| 143 | [bingomu/dsh-usage-printer](https://github.com/bingomu/dsh-usage-printer) | 0 | 2026-11-04 | 2026-11-04 | DSH 侧栏小票机：点阵数字屏显示余额水位与峰谷，悬停出纸显示明细 |
| 144 | [blankwy/dsh-workspace-relink](https://github.com/blankwy/dsh-workspace-relink) | 0 | 2026-11-04 | 2026-11-04 | Workspace routing migration for DeepSeek Harness. Move a project folder, then repoint its workspace at the new location — the conversations that lived in the old folder keep working, without a single byte of session history being rewritten. |
| 145 | [boom-10/dsh-goal-budget](https://github.com/boom-10/dsh-goal-budget) | 0 | 2026-11-04 | 2026-11-04 | Resource budget gate for DeepSeek Harness goals: blocks a goal when its token or cost budget is exhausted, instead of only reporting spend. |
| 146 | [Bozheng-Li/dsh-system-proxy](https://github.com/Bozheng-Li/dsh-system-proxy) | 0 | 2026-11-04 | 2026-11-04 | Windows 系统代理插件，让 DeepSeek Harness 无需 TUN 即可使用 HTTP 代理。 |
| 147 | [bradywatkinson/dsh-nexus-usage-panel](https://github.com/bradywatkinson/dsh-nexus-usage-panel) | 0 | 2026-11-04 | 2026-11-04 | DSH panel plugin mirroring the Fireworks Nexus usage dashboard (plan %, session %, resets) + API research for model/token breakdowns |
| 148 | [BrainZombie/dsh-session-find](https://github.com/BrainZombie/dsh-session-find) | 0 | 2026-11-04 | 2026-11-04 | Fast local cross-session search for DeepSeek Harness: persistent SQLite FTS5 index over session transcripts, incremental sync, redaction. |
| 149 | [BrainZombie/dsh-skill-autopilot](https://github.com/BrainZombie/dsh-skill-autopilot) | 0 | 2026-11-04 | 2026-11-04 | Review pending mnemon skill-evolution suggestions with your configured model, gate them through an anti-fragmentation policy, then apply the approved SKILL.md (versioned, rollback-safe). |
| 150 | [BTYG123/dsh-memory-ladder](https://github.com/BTYG123/dsh-memory-ladder) | 0 | 2026-11-04 | 2026-11-04 | Tiered "sleep" compaction backend for DeepSeek Harness: the newest round owns T/3 of the context window, older tiers halve (T/6, T/12, …), and one model-written ladder replaces the shadowed history. MIT. |
| 151 | [buddha68/dsh-msg-resize](https://github.com/buddha68/dsh-msg-resize) | 0 | 2026-11-04 | 2026-11-04 | DSH 消息区自由缩放：拖动右上角把手把对话区搬到任意位置，拖动右下角把手改大小；位置与尺寸自动记住。界面 / 皮肤主题类 UI 插件。 |
| 152 | [Buir5/_turn-sound](https://github.com/Buir5/_turn-sound) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：回合结束提示音 + 可拖动额度浮层（人民币扣费/余额） |
| 153 | [bulkpublish/dsh-plugin-bulkpublish](https://github.com/bulkpublish/dsh-plugin-bulkpublish) | 0 | 2026-11-04 | 2026-11-04 | BulkPublish plugin for DeepSeek Harness (dsh): draft, schedule, publish and analyse social posts across 15 platforms via the BulkPublish MCP server. |
| 154 | [CaiZongyuan/dsh-sooyo](https://github.com/CaiZongyuan/dsh-sooyo) | 0 | 2026-10-03 | 2026-11-04 | 小组件式个人工作台｜把多个信息源聚合成一个 bento 网格，每个源有自己的卡片形态 · A widget-style personal homepage for DeepSeek Harness |
| 155 | [cat-Logan/dsh-rayburst](https://github.com/cat-Logan/dsh-rayburst) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：把下载交给 Rayburst（aria2-next 内核）引擎，断点续传 + 多线程，不再让模型啃字节 |
| 156 | [ccfeeling/dsh-host-file-explorer](https://github.com/ccfeeling/dsh-host-file-explorer) | 0 | 2026-11-04 | 2026-11-04 | Host file explorer for DeepSeek Harness: a left-sidebar panel that browses the filesystem of the machine the Harness runs on, previews text and image files, downloads files, and creates folders. |
| 157 | [chemmy-11/dsh-vivado](https://github.com/chemmy-11/dsh-vivado) | 0 | 2026-10-24 | 2026-11-04 | Vivado 工作流的 DeepSeek Harness 聚合包：版本分档会话预设 + 32 工具 vivado-mcp + AMD 官方技能。一条命令安装，重启宿主生效。MIT |
| 158 | [chen-rong1alkdwjlak/dsh-](https://github.com/chen-rong1alkdwjlak/dsh-) | 0 | 2026-11-04 | 2026-11-04 | ComfyUI 式连线编排工作台 for DeepSeek Harness：总对话拆解、隔离子对话、验收与分级禁忌知识库 |
| 159 | [ChenXu233/shixu](https://github.com/ChenXu233/shixu) | 0 | 2026-11-02 | 2026-11-04 | 时煦：DSH 的渠道内核 + 人格引擎 —— 让一个人格同时活在多个聊天平台里 |
| 160 | [chipcats/dsh-sidebar-wallet](https://github.com/chipcats/dsh-sidebar-wallet) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek balance and today's spend in one line at the right end of the DSH sidebar account row. Hover for requests, tokens and peak/off-peak countdown. |
| 161 | [chumoe/dsh-file-manager](https://github.com/chumoe/dsh-file-manager) | 0 | 2026-11-04 | 2026-11-04 | Full workspace file manager for the DeepSeek Harness web Sidebar: browse, preview, edit, rename, copy, move, delete, compress, extract, upload, download. |
| 162 | [Cieux/dsh-zoom-scale](https://github.com/Cieux/dsh-zoom-scale) | 0 | 2026-10-27 | 2026-11-04 | Interface zoom for DeepSeek Harness (DSH): a complete page-zoom shim (rects, viewport units, media queries and pointer math converted), with Ctrl+wheel, a session-header stepper and a settings row. |
| 163 | [cilis/dsh-whale-tts](https://github.com/cilis/dsh-whale-tts) | 0 | 2026-11-01 | 2026-11-04 | 让小鲸鱼拥有自己的声音 |
| 164 | [cjjchina3088191870-sudo/dsh-plugin-ekko-skin-manager](https://github.com/cjjchina3088191870-sudo/dsh-plugin-ekko-skin-manager) | 0 | 2026-11-04 | 2026-11-04 | DSH 皮肤管理器：初音与玫瑰可单独安装，互斥切换、保留草稿与独立偏好 |
| 165 | [cjjchina3088191870-sudo/dsh-plugin-miku-theme](https://github.com/cjjchina3088191870-sudo/dsh-plugin-miku-theme) | 0 | 2026-11-04 | 2026-11-04 | 初音未来 · DeepSeek Harness Web 主题：星光舞台、珠光饰框、原生对话与手机适配 |
| 166 | [clioo/dsh-claude-agent](https://github.com/clioo/dsh-claude-agent) | 0 | 2026-11-04 | 2026-11-04 | Claude Agent provider for DeepSeek Harness: opencode's official Claude Agent SDK approach, &gt;90% steady-state prompt-cache hit, and Anthropic's current auth and branding policies. |
| 167 | [comeonzhj/SuperAgent-General](https://github.com/comeonzhj/SuperAgent-General) | 0 | 2026-11-04 | 2026-11-04 | 基于官方 SuperAgent 原型的通用 DSH 插件：飞书应用接入、原生面板与 Router/Worker 会话。 |
| 168 | [constraint21/dsh-long-message-fold](https://github.com/constraint21/dsh-long-message-fold) | 0 | 2026-11-04 | 2026-11-04 | Folds over-long user messages in the DSH Web chat: 360px preview, fading edge, Expand/Collapse toggle; short messages are untouched. |
| 169 | [CQQOOQ123/jiheng](https://github.com/CQQOOQ123/jiheng) | 0 | 2026-11-04 | 2026-11-04 | Exact computation layer for AI agents: fractions, radicals, symbolic math, finance, units, dates. MCP server + DSH plugin, 19 capability packs. 97.6% on 1,000 mixed tasks. |
| 170 | [createacode/dsh-completed-ding](https://github.com/createacode/dsh-completed-ding) | 0 | 2026-10-31 | 2026-11-04 | DSH每次会话完成后轻提醒，包括完成、失败、待回答都会温柔提醒；支持通知归类、DSH内提醒、系统通知栏提醒、多种轻提示音、工作区直达。 |
| 171 | [CsBpRd/dsh-split-view](https://github.com/CsBpRd/dsh-split-view) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 分屏插件：把并行任务并排显示，每屏一个会话的实时对话，另有极简进度视图。 |
| 172 | [cyilin36/dsh-mobile](https://github.com/cyilin36/dsh-mobile) | 0 | 2026-11-03 | 2026-11-04 | Phone-responsive layout for the DeepSeek Harness Web GUI: off-canvas drawer, safe areas, touch ergonomics, single-column settings. Inert on desktop. |
| 173 | [daKeLinya0001/dsh-music-player](https://github.com/daKeLinya0001/dsh-music-player) | 0 | 2026-11-03 | 2026-11-04 | 用于在dsh中播放自己想听的音乐 |
| 174 | [dan-cube/dsh-balance-center](https://github.com/dan-cube/dsh-balance-center) | 0 | 2026-11-04 | 2026-11-04 | DSH 多平台模型余额与订阅额度显示管理插件 |
| 175 | [DANIE4588E/dsh-clanker-bridge](https://github.com/DANIE4588E/dsh-clanker-bridge) | 0 | 2026-10-30 | 2026-11-04 | Connect Clanker mobile to Harness Desktop with authenticated agent chats, streaming, controls and file transfer. |
| 176 | [DanielEstrada971102/dsh-skill-recursive](https://github.com/DanielEstrada971102/dsh-skill-recursive) | 0 | 2026-11-02 | 2026-11-04 | A DeepSeek Harness plugin that finds SKILL.md files in nested subfolders of the standard skill roots — not only the first directory level. |
| 177 | [dariodemh/dsh-whale-maid-mascot](https://github.com/dariodemh/dsh-whale-maid-mascot) | 0 | 2026-11-03 | 2026-11-04 | Whale-chan (DeepSeek 娘) in-page companion for the DeepSeek Harness web UI: neutral friendly chat with images, locally generated cards, workspace panel and proactive check-ins. Extended derivative of yefeng7531/dsh-whale-maid-mascot (MIT). Unofficial fan project. |
| 178 | [DarkDarkdDarkWine/dsh-quota-pets](https://github.com/DarkDarkdDarkWine/dsh-quota-pets) | 0 | 2026-10-26 | 2026-11-04 | Chibi desktop pets for DeepSeek Harness — one mascot per LLM coding plan (GLM / MiniMax / Kimi / DeepSeek / MiMo), moods follow quota usage from dsh-quota-hub |
| 179 | [dddfuxi/dsh-plugin-usage-budget](https://github.com/dddfuxi/dsh-plugin-usage-budget) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 的用量费用与预算插件：峰谷时段价目换算 token 费用、会话费用读数、预算守卫、账户余额与逐轮价格。 |
| 180 | [DDDMUC/dsh-log-trim](https://github.com/DDDMUC/dsh-log-trim) | 0 | 2026-10-30 | 2026-11-04 | 在启动时清理空闲的DSH会话日志（不是上下文压缩）。Trim idle DSH session logs at startup (not context compaction). |
| 181 | [delltig/dsh-multi-model-collab](https://github.com/delltig/dsh-multi-model-collab) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件：注册 multi_model_run 工具，让同一个任务同时交给多个大模型协作执行（并行对比 或 主模型+副模型验证），并按策略聚合结果。Registers a multi_model_run tool that fans one task out to several configured models in parallel or primary/secondary mode, then aggregates the answers. |
| 182 | [Delthin/dsh-agent-roles](https://github.com/Delthin/dsh-agent-roles) | 0 | 2026-11-04 | 2026-11-04 | Role management, per-role models and skills for native DeepSeek Harness Agent Teams |
| 183 | [Delthin/dsh-fast](https://github.com/Delthin/dsh-fast) | 0 | 2026-11-04 | 2026-11-04 | Session-scoped Standard/Fast mode and a compact draggable model picker for DeepSeek Harness. |
| 184 | [dev-bravelo/dsh-open-bots](https://github.com/dev-bravelo/dsh-open-bots) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: lasting bots with their own name, photo, persona, memory, voice and model, configured by talking to them, each with a hidden brain that follows the conversation and prepares what will help. |
| 185 | [devzer0o0/dsh-logo-golden](https://github.com/devzer0o0/dsh-logo-golden) | 0 | 2026-11-04 | 2026-11-04 | Polished-gold rendition of the DeepSeek Harness sidebar brand lockup (whale, deepseek wordmark, HARNESS plate) with a three-second metal sweep. |
| 186 | [devzer0o0/dsh-prompt-optimizer](https://github.com/devzer0o0/dsh-prompt-optimizer) | 0 | 2026-11-04 | 2026-11-04 | Rewrites what you type into the DSH composer into a precise prompt before the model sees it. One cheap side call on the session's own route; the transcript always shows what the model received. |
| 187 | [DimonHo/dsh-vpn](https://github.com/DimonHo/dsh-vpn) | 0 | 2026-11-04 | 2026-11-04 | Subscription-driven VPN/proxy plugin for DeepSeek Harness |
| 188 | [DonGeeo87/cg-shell-janitor](https://github.com/DonGeeo87/cg-shell-janitor) | 0 | 2026-11-04 | 2026-11-04 | Closes DeepSeek Harness runner processes that stay alive after their shell command finished, reclaiming ~140 MB each. Windows only. |
| 189 | [doraasn/dsh-speed-monitor](https://github.com/doraasn/dsh-speed-monitor) | 0 | 2026-11-04 | 2026-11-04 | DSH ????????:? 5 ??????????,????????????,??????? |
| 190 | [dqsyyys8d9-png/dsh-hajijin](https://github.com/dqsyyys8d9-png/dsh-hajijin) | 0 | 2026-11-04 | 2026-11-04 | 哈基金 · A股场外基金助手：评分推荐、模拟盘、自选跟踪，附独立网页 |
| 191 | [eastbadman/dsh-gold-price](https://github.com/eastbadman/dsh-gold-price) | 0 | 2026-11-04 | 2026-11-04 | Draggable floating panel with live China gold quotes (SGE Au99.99 / Au T+D / 100g bar + London spot) for DeepSeek Harness |
| 192 | [EchoBelle/dsh-alink](https://github.com/EchoBelle/dsh-alink) | 0 | 2026-11-04 | 2026-11-04 | Migrate active harness conversations into DeepSeek Harness as a native plugin |
| 193 | [Eclipse-NotFound/dsh-flow-queue](https://github.com/Eclipse-NotFound/dsh-flow-queue) | 0 | 2026-11-04 | 2026-11-04 | Visual flow editor for DeepSeek Harness: prompts, model switches, commands, branches and loops as one graph, executed only at turn boundaries so an in-flight request keeps its model. |
| 194 | [Eclipse-NotFound/dsh-incident-studio](https://github.com/Eclipse-NotFound/dsh-incident-studio) | 0 | 2026-11-04 | 2026-11-04 | Screen frames and log lines on one millisecond timeline for DeepSeek Harness: record, mark, box, and hand your agent a keyframe strip + GIF + aligned log slice. |
| 195 | [elims777/dsh-languages](https://github.com/elims777/dsh-languages) | 0 | 2026-11-03 | 2026-11-04 | 14 community translations for the DeepSeek Harness web UI: ru, es, pt-BR, de, fr, it, pl, tr, ja, ko, zh-TW, id, vi, hi |
| 196 | [ender-candle/dsh-auto-proxy](https://github.com/ender-candle/dsh-auto-proxy) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 自动网络代理插件：自动识别系统代理，搜索 / LLM / 网页三类流量独立开关。Auto network proxy for DSH: Automatic identification system proxy. Toggle for search, LLM and web traffic independently. |
| 197 | [EternalNight996/agent-bot](https://github.com/EternalNight996/agent-bot) | 0 | 2026-11-04 | 2026-11-04 | Agent Bot: multi-agent collaboration and delivery pipeline for DeepSeek Harness (AgentTeams derivative, MIT). |
| 198 | [evolution301/agent-control-tower](https://github.com/evolution301/agent-control-tower) | 0 | 2026-11-04 | 2026-11-04 | A local control tower: dispatch tasks to DSH role sessions, verify their reports, accept or rework. DSH-first, adapter-portable. |
| 199 | [EYADAGHARIRE/dsh-plugin-delete-chat](https://github.com/EYADAGHARIRE/dsh-plugin-delete-chat) | 0 | 2026-11-04 | 2026-11-04 | Delete-chat plugin for DeepSeek Harness — permanently remove a chat and its stored data from this device. |
| 200 | [Fanlr1/dsh-plugins](https://github.com/Fanlr1/dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | Community plugins for DeepSeek Harness (DSH): multi-edit, bash, loop-guard, hub-finder, session-tidy |
| 201 | [faqfaqfaqfaq/dsh-sidebar-workspace-groups](https://github.com/faqfaqfaqfaq/dsh-sidebar-workspace-groups) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness sidebar plugin: search workspaces and group sessions into today, yesterday, and earlier. |
| 202 | [farmer002/dsh-today-fortune](https://github.com/farmer002/dsh-today-fortune) | 0 | 2026-11-04 | 2026-11-04 | DSH 每日运势插件：赛博小庙，每日一摇。烧 Token 前抽一签，升档降档问问天。DSH Daily Fortune Plugin: A cyber shrine, draw once a day. Grab a fortune stick before burning Tokens—let the heavens decide your tier: up or down. |
| 203 | [feverZHONG/dsh-liya-skills](https://github.com/feverZHONG/dsh-liya-skills) | 0 | 2026-11-04 | 2026-11-04 | dsh-liya-skills v0.2.0 · 技能库接入 DSH + 设置页技能管理（本地浏览/markdown 预览/适配稿同步）· 适配 DSH 0.2.1-rc.2 |
| 204 | [FFFFFFcn/dsh-intent-translator](https://github.com/FFFFFFcn/dsh-intent-translator) | 0 | 2026-11-04 | 2026-11-04 | Intent Translator for DeepSeek Harness: turn plain-language drafts into structured prompts with a plain-to-professional term glossary. |
| 205 | [ffyfox/dsh-theme-mist](https://github.com/ffyfox/dsh-theme-mist) | 0 | 2026-11-04 | 2026-11-04 | DSH Go 视觉语言主题插件，作为 DeepSeek Harness 的可热插拔客户端主题——六种强调色、浅色/深色/跟随系统、零 DOM 重写。DSH Go visual language as a hot-pluggable client theme for DeepSeek Harness — six accents, light/dark/system, zero DOM rewrite. |
| 206 | [flyinghouse-ma/dsh-pet-android-community](https://github.com/flyinghouse-ma/dsh-pet-android-community) | 0 | 2026-11-04 | 2026-11-04 | 修复安卓桌宠输入框无法输入、聊天发不出去、回复看不见的社区补丁版（dsh-pet 插件 + 自签名壳 APK） |
| 207 | [fredgeoO/creative-matrix](https://github.com/fredgeoO/creative-matrix) | 0 | 2026-11-04 | 2026-11-04 | 格致矩阵：任意两维交叉、逐格穷推的 DSH 推演面板插件 |
| 208 | [FrogFlaying/dsh-onshelf](https://github.com/FrogFlaying/dsh-onshelf) | 0 | 2026-11-03 | 2026-11-04 | 上架台：扫描本地 DSH 插件、按 awesome-dsh-plugin 规则体检、生成投稿 YAML 与截图清单，并在确认后创建 fork、提交分支、开 PR。 |
| 209 | [frostnova04/dsh-permission-guard](https://github.com/frostnova04/dsh-permission-guard) | 0 | 2026-11-04 | 2026-11-04 | A Permission Settings page for DSH: one button makes every new session default to full access, and existing sessions can be allowlisted one by one. |
| 210 | [Full626/dsh-session-trash-90d](https://github.com/Full626/dsh-session-trash-90d) | 0 | 2026-10-09 | 2026-11-04 | To manage sessions  of dsh desktop |
| 211 | [Fyerl/dsh-2d-model-picker](https://github.com/Fyerl/dsh-2d-model-picker) | 0 | 2026-11-04 | 2026-11-04 | 2D Model Picker for DeepSeek Harness — select a model and reasoning effort in one drag. 二维模型选择器：一次拖动选定模型与推理强度。 |
| 212 | [Gaudi-XIX/dsbot-session-create](https://github.com/Gaudi-XIX/dsbot-session-create) | 0 | 2026-10-29 | 2026-11-04 | 会话编排层：Chief 能把活派给别的 Bot，却派不进「某个项目的那个会话」；宿主已有开会话的原语，但没开成工具。这个插件把原语开成四个工具（建会话、插话、读回话、列派单），派单只追加自己的台账，不另造调度器。 |
| 213 | [gejx-gejingxuan/dsh-archive-sidebar](https://github.com/gejx-gejingxuan/dsh-archive-sidebar) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 右侧边栏压缩包管理器：浏览/编辑 zip、rar、7z，子文件不落盘直开，支持默认程序打开，AI 修改为辅 |
| 214 | [genius-alray/dsh-plugin-session-token-stats](https://github.com/genius-alray/dsh-plugin-session-token-stats) | 0 | 2026-11-04 | 2026-11-04 | Token usage dashboard for DeepSeek Harness: totals, monthly usage, cache-hit rate, daily timeline, per-session breakdown with subagent sessions merged, and live CPU/memory monitoring. No cost estimates. |
| 215 | [Geopanret/dsh-chat-share-image](https://github.com/Geopanret/dsh-chat-share-image) | 0 | 2026-11-04 | 2026-11-04 | Copy one finished DeepSeek Harness assistant reply as a long PNG screenshot: tables re-laid out, images full-size, overlong replies split into readable parts. |
| 216 | [Geopanret/dsh-ctrl-enter-send](https://github.com/Geopanret/dsh-ctrl-enter-send) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: Enter inserts a newline in the composer, Ctrl+Enter (Cmd+Enter on macOS) sends. |
| 217 | [Gewuji/dsh-plugin-work-notes](https://github.com/Gewuji/dsh-plugin-work-notes) | 0 | 2026-11-04 | 2026-11-04 | DSH（DeepSeek Harness）插件：工作便签。左侧栏便签面板，便签可自由摆放、缩放吸附，带起止日期，在月历与甘特图中拖拽改期，数据只存本机浏览器。Work Notes plugin for DeepSeek Harness. |
| 218 | [gf691271/dsh-quote-reply](https://github.com/gf691271/dsh-quote-reply) | 0 | 2026-11-04 | 2026-11-04 | Claude Code style quote &amp; reply for DeepSeek Harness: select text, answer it in a popover, stack the pairs as blocks above the composer, send once. · DSH 插件，引入类似Claude Code 的引用回复功能：选中对话里的文字就地回复，问答变成输入框上方的方块，一次发出。 |
| 219 | [Ghidorahchaos/dsh-cherry-quote](https://github.com/Ghidorahchaos/dsh-cherry-quote) | 0 | 2026-11-04 | 2026-11-04 | Cherry-style quote for DSH |
| 220 | [Ghill-0131/dsh-journal](https://github.com/Ghill-0131/dsh-journal) | 0 | 2026-11-04 | 2026-11-04 | Graded long-term memory for an AI assistant: S/A/B/C levels, automatic expiry, one plain JSONL file. |
| 221 | [Giauzihau/dsh-harness-zh](https://github.com/Giauzihau/dsh-harness-zh) | 0 | 2026-10-30 | 2026-11-04 | 把 DeepSeek Harness 面向模型的提示词译成简体中文的 DSH 插件 |
| 222 | [GinoXiang/dsh-dailyboard](https://github.com/GinoXiang/dsh-dailyboard) | 0 | 2026-10-18 | 2026-11-04 | DailyBoard — 日常工作任务板：单月日历、日常清单、周/日时间轴、周期任务与长期任务进展、每日邮件提醒、AI 任务提取。A daily work task board for the DSH Web GUI. |
| 223 | [gjunyoung/dsh-library](https://github.com/gjunyoung/dsh-library) | 0 | 2026-11-04 | 2026-11-04 | A local file library for DeepSeek Harness: upload, preview, favourite, batch export, and attach files to chat. Pure plugin. |
| 224 | [glider9999/dsh-plugin-take](https://github.com/glider9999/dsh-plugin-take) | 0 | 2026-11-04 | 2026-11-04 | Search and read all of take.hk inside DeepSeek Harness — 1400+ AI-film news items, daily briefings, topic archives. Read-only DSH plugin. |
| 225 | [GoetheDady/dsh-no-project-sessions](https://github.com/GoetheDady/dsh-no-project-sessions) | 0 | 2026-11-03 | 2026-11-04 | DeepSeek Harness 插件：无项目会话自动创建工作目录，并在侧栏以「最近」分区展示 |
| 226 | [gongfpp/dsh-thanks-carl](https://github.com/gongfpp/dsh-thanks-carl) | 0 | 2026-11-04 | 2026-11-04 | Quiet Carl the hedgehog easter eggs after a finished turn, plus local water, meal and rest reminders for DSH. No model calls, no chat messages. |
| 227 | [goodjin/dsh-acp-agent](https://github.com/goodjin/dsh-acp-agent) | 0 | 2026-11-02 | 2026-11-04 | DSH 插件：把 Codex / Claude Code / Grok / Cursor / Qoder / ZCode(GLM) / MiniMax / DeepSeek 接进 DeepSeek Harness，内置各家额度胶囊与账户余额显示 |
| 228 | [goodjin/dsh-chat-area](https://github.com/goodjin/dsh-chat-area) | 0 | 2026-11-02 | 2026-11-04 | DSH 插件：聊天区增强——回答卡片、可编辑文件卡片、Mermaid 渲染与会话工具，另含文件/浏览器/终端工具区 |
| 229 | [goodjin/dsh-superpowers](https://github.com/goodjin/dsh-superpowers) | 0 | 2026-09-28 | 2026-11-04 | Run Superpowers (spec-driven development) as a DSH agent preset, with a different subagent model per skill |
| 230 | [gorwayne/dsh-gor-tasks](https://github.com/gorwayne/dsh-gor-tasks) | 0 | 2026-11-04 | 2026-11-04 | 把「待办」放进 DeepSeek Harness：左侧入口、项目分类、对话里增删、回答一键拆成任务。 |
| 231 | [GreenJenckens/dsh-plugin-opencode-limits](https://github.com/GreenJenckens/dsh-plugin-opencode-limits) | 0 | 2026-11-03 | 2026-11-04 | Remaining OpenCode Go subscription quota as a native stat pill in the DeepSeek Harness composer dock. |
| 232 | [guicaiyue/dsh-word-learn](https://github.com/guicaiyue/dsh-word-learn) | 0 | 2026-11-04 | 2026-11-04 | DSH 英语单词学习插件：划词即查、词频分级、FSRS 间隔重复复习，面向以英语为工作语言的开发者 |
| 233 | [gusong1729/dsh-panel-scroll](https://github.com/gusong1729/dsh-panel-scroll) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 侧栏滚动补丁：面板列表固定 4 行可滚，右栏被裁内容改为可滚 / Scrollable sidebar panel list + un-clipped right column panels for DeepSeek Harness |
| 234 | [gustock/TinyMCE-for-Deepseek-Harness](https://github.com/gustock/TinyMCE-for-Deepseek-Harness) | 0 | 2026-11-03 | 2026-11-04 | Edit HTML files visually with TinyMCE in the DeepSeek Harness Better Sidebar. |
| 235 | [h2fe1/dsh-deepseek-account-balance](https://github.com/h2fe1/dsh-deepseek-account-balance) | 0 | 2026-11-04 | 2026-11-04 | A DeepSeek account balance pill for the DSH composer dock. |
| 236 | [Hatiaa/dsh-reasoning-adapter](https://github.com/Hatiaa/dsh-reasoning-adapter) | 0 | 2026-11-04 | 2026-11-04 | automatically set reasoning efforts for self-defined models in Deepseek Harness |
| 237 | [Heeweelee/dsh-prompt-suggestions](https://github.com/Heeweelee/dsh-prompt-suggestions) | 0 | 2026-11-04 | 2026-11-04 | DSH 输入建议插件：↑/↓ 回滚本会话发过的全部提问，Ctrl+↑ 搜索，灰色幽灵文字预测下一句，→ 采纳，绝不自动发送。Prompt Suggestions for DeepSeek Harness. |
| 238 | [heinrich0505/dsh-theme-material](https://github.com/heinrich0505/dsh-theme-material) | 0 | 2026-11-04 | 2026-11-04 | Material风格主题，之前在vscode很喜欢用；还加了个github light gray |
| 239 | [Hongcheng-LI/dsh-magpie-quota](https://github.com/Hongcheng-LI/dsh-magpie-quota) | 0 | 2026-10-28 | 2026-11-04 | DSH plugin: Magpie gateway quotas in your composer — subscription windows, prepaid balances, relay stations. 输入框里看 Magpie 全部账号额度与用量 |
| 240 | [hotkong/dsh-home-assistant](https://github.com/hotkong/dsh-home-assistant) | 0 | 2026-11-04 | 2026-11-04 | Home Assistant environment panel for DeepSeek Harness: status card, prompt injection, and a read-only ha_status tool. |
| 241 | [how8088/dsh-ima-kb-panel](https://github.com/how8088/dsh-ima-kb-panel) | 0 | 2026-11-04 | 2026-11-04 | ima 知识库侧边栏面板与对话读取工具（DSH 插件） |
| 242 | [hualidan42-beep/dsh-plugin-task-radar](https://github.com/hualidan42-beep/dsh-plugin-task-radar) | 0 | 2026-11-03 | 2026-11-04 | DSH 工作小管家：按工作区查看会话、子代理状态与 Token 用量 |
| 243 | [HUISDE/dsh-pnpm-release-age-zero-fix](https://github.com/HUISDE/dsh-pnpm-release-age-zero-fix) | 0 | 2026-11-04 | 2026-11-04 | DSH Desktop zero-release-age update-policy compatibility plugin |
| 244 | [hulibuld/dsh-sort-out-the-thoughts](https://github.com/hulibuld/dsh-sort-out-the-thoughts) | 0 | 2026-10-24 | 2026-11-04 | DSH 插件：对话框开关进入「梳理 → 批判 → 调研」三段模式，把模糊想法推成成稿并存进 Thoughts Center；另带悬浮随想记录本。 |
| 245 | [hun1315/dsh-ui-cards](https://github.com/hun1315/dsh-ui-cards) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件 UI验牌：把右上角「⋯」改造成卡牌式插件扩展坞，插件前端 UI 收容成可滑动卡牌，点卡即开 |
| 246 | [Icefox12138/socratic-tutor](https://github.com/Icefox12138/socratic-tutor) | 0 | 2026-11-04 | 2026-11-04 | Citation-first Socratic tutor for scanned books: DSH plugin + MCP server + FastAPI sidecar that reads a RAG database you build. Answers carry a locator you can open. |
| 247 | [icrefin/dsh-remote-access](https://github.com/icrefin/dsh-remote-access) | 0 | 2026-11-04 | 2026-11-04 | Reach this DeepSeek Harness from your phone over a private mesh network such as Tailscale: one gateway on the tailnet, optional key, the real client. |
| 248 | [imrcpan/dsh-compact-enhanced](https://github.com/imrcpan/dsh-compact-enhanced) | 0 | 2026-11-04 | 2026-11-04 | An enhanced compaction plugin for DeepSeek Harness: queueable, cancellable, and with user-friendly status hints. |
| 249 | [imrcpan/dsh-retry](https://github.com/imrcpan/dsh-retry) | 0 | 2026-11-04 | 2026-11-04 | A retry executor plugin for DeepSeek Harness model requests: fixed-schedule retries, tuned for relay endpoints and unstable upstreams. |
| 250 | [iTanzhao/dsh-d365-kit](https://github.com/iTanzhao/dsh-d365-kit) | 0 | 2026-11-04 | 2026-11-04 | Dynamics 365 CE / Dataverse toolkit for DSH. |
| 251 | [j4ckzh0u/dsh-command-monitor](https://github.com/j4ckzh0u/dsh-command-monitor) | 0 | 2026-11-04 | 2026-11-04 | Floating command / tool execution monitor for the DeepSeek Harness Web GUI — draggable pill, live log, copy &amp; export. |
| 252 | [jackgucarbon/dsh-opencode-go-multi-quota](https://github.com/jackgucarbon/dsh-opencode-go-multi-quota) | 0 | 2026-11-04 | 2026-11-04 | Multi-account OpenCode Go quota meter for DeepSeek Harness — auto-detects every configured account and follows the session provider. |
| 253 | [JackyHuang75414/dsh-fun-waiting](https://github.com/JackyHuang75414/dsh-fun-waiting) | 0 | 2026-11-04 | 2026-11-04 | Rotating fun waiting phrases for DeepSeek Harness (DSH), editable live in Settings. |
| 254 | [JAYCou/codex-history-rail](https://github.com/JAYCou/codex-history-rail) | 0 | 2026-11-04 | 2026-11-04 | Codex History Rail — 为 DeepSeek Harness 对话左侧加入 Codex 风格回合时间轴（悬停预览 / 点击跳转 / 收藏）。 |
| 255 | [jeckun/dsh-plugin-favorites](https://github.com/jeckun/dsh-plugin-favorites) | 0 | 2026-11-04 | 2026-11-04 | Favorites: Save and organize links in the DSH right sidebar, with drag-and-drop sorting. |
| 256 | [Jfreey/dsh-opencode-go-usage](https://github.com/Jfreey/dsh-opencode-go-usage) | 0 | 2026-11-04 | 2026-11-04 | A lightweight DSH plugin for viewing OpenCode Go usage in the composer dock and Settings. |
| 257 | [jiahui-huang1/dsh-linked-workspace](https://github.com/jiahui-huang1/dsh-linked-workspace) | 0 | 2026-11-03 | 2026-11-04 | SSH-backed remote directories and editable local-to-remote linked workspaces for DeepSeek Harness (DSH). |
| 258 | [John-UNOwen/dsh-okf-guard](https://github.com/John-UNOwen/dsh-okf-guard) | 0 | 2026-10-25 | 2026-11-04 | DSH plugin that keeps agents on kb.py in an OKF knowledge base and blocks git and shell commands that skip its checks. |
| 259 | [JonyFang/dsh-plugin-custom-profile](https://github.com/JonyFang/dsh-plugin-custom-profile) | 0 | 2026-11-04 | 2026-11-04 | Replace the DSH sidebar account name and avatar with local, per-device values. |
| 260 | [JoviLecca/dsh-CAIT](https://github.com/JoviLecca/dsh-CAIT) | 0 | 2026-11-04 | 2026-11-04 | Computer-aided translation, inside DeepSeek Harness. |
| 261 | [justinzyc271828-sys/dsh-baidu-netdisk](https://github.com/justinzyc271828-sys/dsh-baidu-netdisk) | 0 | 2026-11-03 | 2026-11-03 | Connect DeepSeek Harness to Baidu Netdisk's official MCP service. |
| 262 | [justinzyc271828-sys/dsh-music](https://github.com/justinzyc271828-sys/dsh-music) | 0 | 2026-11-03 | 2026-11-03 | Music tools for DeepSeek Harness, starting with official Suno MCP credits and library access. |
| 263 | [Jydsh/dsh-mrrp](https://github.com/Jydsh/dsh-mrrp) | 0 | 2026-10-31 | 2026-11-04 | 对模型列表分类绑定角色权限路由的功能。后续支持对话中权限绑定分配不同模型给不同用户的定位。 |
| 264 | [jypjypjypjyp/dsh-paper-reader](https://github.com/jypjypjypjyp/dsh-paper-reader) | 0 | 2026-11-04 | 2026-11-04 | DSH 右侧边栏论文阅读器：原样渲染 PDF，选中即可高亮/笔记/就选段提问；批注人机共管，@ 一键把论文目录注入会话，MinerU 解析走插件内置 JS。 |
| 265 | [Kandecho/Video-Reader](https://github.com/Kandecho/Video-Reader) | 0 | 2026-10-31 | 2026-11-04 | MCP video reader for Bilibili, YouTube and local files; queues/history plus Scroll Agent for an independent Bilibili account, inbox and authorized delivery. |
| 266 | [kelingfeng9/dshcj](https://github.com/kelingfeng9/dshcj) | 0 | 2026-11-04 | 2026-11-04 | DSH Web plugins: token usage/cost/balance + live reasoning translation and replay |
| 267 | [kingdawangXTA/dsh-pixel-crt](https://github.com/kingdawangXTA/dsh-pixel-crt) | 0 | 2026-11-04 | 2026-11-04 | Dark CRT pixel skin for the DSH Web GUI conversation pane |
| 268 | [KingsleyAsher/DSH-Memory](https://github.com/KingsleyAsher/DSH-Memory) | 0 | 2026-11-04 | 2026-11-04 | 面向 DeepSeek Harness 的长期记忆插件，支持记忆提取、状态更新与证据检索。 |
| 269 | [kleinklein0824/dsh-official-skin](https://github.com/kleinklein0824/dsh-official-skin) | 0 | 2026-11-03 | 2026-11-04 | 非官方社区项目。为 DeepSeek Harness（DSH）打造的官网风格主题插件：深色模式含流体极光、粒子鲸鱼与星座网格，浅色模式采用蓝色 Hero 渐变与琉璃玻璃面板，并支持跟随 DSH 深浅色设置一键切换。 |
| 270 | [KOGGUA-EDIT/dsh-pet-sayaka](https://github.com/KOGGUA-EDIT/dsh-pet-sayaka) | 0 | 2026-11-04 | 2026-11-04 | Sayaka Miki desktop pet for the DeepSeek Harness Web UI: state-driven sprites, instant swaps, per-state voice lines. |
| 271 | [kongchenhui/dsh-prompt-tuner](https://github.com/kongchenhui/dsh-prompt-tuner) | 0 | 2026-11-04 | 2026-11-04 | A DeepSeek Harness plugin that adds a toolbar button to rewrite the current draft into a clearer, executable prompt, with undo, cancellation, and customizable prompt/model settings. |
| 272 | [Kr-ATG/dsh-seeker-bot](https://github.com/Kr-ATG/dsh-seeker-bot) | 0 | 2026-10-31 | 2026-11-04 | DeepSeek Harness 的对话增强套件：Seeker 双栏执行大盘、可交互卡片、Bot 团队/群聊/语音、记忆·档案·技能七个工作台。零源码改动，插件注入即用。 |
| 273 | [lacrimosa-da/dsh-etf-monitor](https://github.com/lacrimosa-da/dsh-etf-monitor) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness panel: national-team ETF intraday monitor (pure Node, zero deps) |
| 274 | [Larrtroffen/dsh-workspace-folders](https://github.com/Larrtroffen/dsh-workspace-folders) | 0 | 2026-11-04 | 2026-11-04 | Native-feeling sidebar folders for DeepSeek Harness: display-only Workspace folders, durable per-Workspace Session folders, and per-row icons. |
| 275 | [Lavaver/Cargo-by-Harness](https://github.com/Lavaver/Cargo-by-Harness) | 0 | 2026-11-04 | 2026-11-04 | Rust, Evolved. A DSH session mode that grounds the Agent in your local Cargo cache instead of hallucinating APIs. Features pure-JS macro_rules! expansion, a strict cargo check feedback loop, and beginner-first guidance. |
| 276 | [Lcxy0316/dsh-comfyui-studio](https://github.com/Lcxy0316/dsh-comfyui-studio) | 0 | 2026-11-04 | 2026-11-04 | ComfyUI studio plugin for DeepSeek Harness - generate images on your own GPU with a full in-app control panel (server probe, model list, hardware presets, launcher). |
| 277 | [lczment/dsh-window](https://github.com/lczment/dsh-window) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness Desktop add-on: choose close behaviour (background or quit) and open sessions/workspaces in child windows. |
| 278 | [leinaldo/dsh-routines](https://github.com/leinaldo/dsh-routines) | 0 | 2026-11-04 | 2026-11-04 | 给 DSH 的 Claude 风格定时任务：到点新开对话跑一轮 |
| 279 | [lengrufeng2008/dsh-career-skills](https://github.com/lengrufeng2008/dsh-career-skills) | 0 | 2026-11-04 | 2026-11-04 | Career skill pack for DSH adapted from career-ops methodology: job fit, resume tailoring, interview prep, career plan. |
| 280 | [lengrufeng2008/dsh-marketing-skills](https://github.com/lengrufeng2008/dsh-marketing-skills) | 0 | 2026-11-04 | 2026-11-04 | Ported marketing skill pack for DSH: 8 MIT skills from coreyhaines31/marketingskills plus a router. |
| 281 | [Lequait/dsh-subagent-watchdog](https://github.com/Lequait/dsh-subagent-watchdog) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: notify the parent agent when a subagent dies from an upstream failure instead of finishing. |
| 282 | [li-shaozhe/dsh-chatops-mcp](https://github.com/li-shaozhe/dsh-chatops-mcp) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness connector hub: DingTalk (dws), Feishu (lark-cli) and Feishu Project (@lark-project/mcp) as MCP tool servers, plus a one-click connect panel. |
| 283 | [ligap123/dsh-real-whale-pet](https://github.com/ligap123/dsh-real-whale-pet) | 0 | 2026-11-04 | 2026-11-04 | 写实座头鲸 Windows 桌宠：透明置顶鲸鱼、点击全屏水波折射、本地鲸歌与 121 条台词，默认离线。Realistic humpback whale desktop pet for DeepSeek Harness. 非官方社区插件。 |
| 284 | [lightrivers/dsh-proxy-switch](https://github.com/lightrivers/dsh-proxy-switch) | 0 | 2026-11-03 | 2026-11-04 | DeepSeek Harness plugin: fix web_fetch "non-public IP address" errors behind Clash/Surge/v2rayN TUN fake-IP. Auto-detects your local HTTP proxy and switches web_fetch between proxy and direct. 让 DSH 的 web_fetch 在开着代理时也能抓网页。 |
| 285 | [Linxi-1105/dsh-theme-cyrene](https://github.com/Linxi-1105/dsh-theme-cyrene) | 0 | 2026-11-04 | 2026-11-04 | Free, unofficial Cyrene-inspired theme for DeepSeek Harness |
| 286 | [litingyes/dsh-plugins](https://github.com/litingyes/dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | Plugins for Deepseek Harness |
| 287 | [Little-Mostima/dsh-goal-board](https://github.com/Little-Mostima/dsh-goal-board) | 0 | 2026-11-04 | 2026-11-04 | 跨会话目标清单：项目 → 目标 → 条目，每轮自动提醒 agent 该做什么、做到哪了，完成后归档。 |
| 288 | [liuhuan007/dsh-service-hub](https://github.com/liuhuan007/dsh-service-hub) | 0 | 2026-11-04 | 2026-11-04 | Service Hub for DeepSeek Harness: start, stop and monitor local services from a sidebar panel. 服务面板：DSH 侧栏一键启停本机服务。 |
| 289 | [lizixuan200410-cmd/dsh-bright-text](https://github.com/lizixuan200410-cmd/dsh-bright-text) | 0 | 2026-11-04 | 2026-11-04 | Colour, size and typeface for the DeepSeek Harness UI. · DSH 字体颜色修改：文字颜色 + 字号 + 字体。 |
| 290 | [lllcccwww/dsh-answer-notify](https://github.com/lllcccwww/dsh-answer-notify) | 0 | 2026-11-04 | 2026-11-04 | 回答完成后的桌面通知：窗口最小化或不在前台时，DeepSeek Harness 回答结束发送系统通知。DSH Web/Desktop plugin. |
| 291 | [lllirunze/dsh-codecraft](https://github.com/lllirunze/dsh-codecraft) | 0 | 2026-11-03 | 2026-11-04 | An elegant, extensible code editor for DSH, featuring intelligent coding assistance. |
| 292 | [logo20091001-ux/dsh-quick-settings](https://github.com/logo20091001-ux/dsh-quick-settings) | 0 | 2026-11-04 | 2026-11-04 | 把设置从头像菜单里解放出来：DSH 侧边栏常驻一行「⚙ 设置」，点一下直接打开。 / A settings row in the DSH sidebar instead of inside the avatar menu. |
| 293 | [lol9706262-source/dsh-cover](https://github.com/lol9706262-source/dsh-cover) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：用你的音色一句话翻唱一首歌 / One-line song cover with your own voice (DeepSeek Harness plugin) |
| 294 | [Long-Yin-Zi/dsh-task-decision](https://github.com/Long-Yin-Zi/dsh-task-decision) | 0 | 2026-10-20 | 2026-11-04 | 把 AI 每轮抛出的待决问题收进右侧边栏，选完写备注一键回传（DSH 桌面端插件） |
| 295 | [loveandbeepbrother/dsh-tts-service](https://github.com/loveandbeepbrother/dsh-tts-service) | 0 | 2026-11-04 | 2026-11-04 | Multi-provider text-to-speech (TTS) service for DeepSeek Harness (dsh): Doubao, Alibaba Bailian and OpenAI-compatible providers, user-chosen voices, per-segment tone. |
| 296 | [loyalchiiina/dsh-console-sentinel](https://github.com/loyalchiiina/dsh-console-sentinel) | 0 | 2026-10-15 | 2026-11-04 | 控制台哨兵插件（私人） |
| 297 | [lqq151510/dsh-computer-use](https://github.com/lqq151510/dsh-computer-use) | 0 | 2026-11-04 | 2026-11-04 | macOS computer-use plugin for DeepSeek Harness: seven computer_* tools for screenshots, accessibility-tree reading, Vision OCR, and mouse/keyboard control. |
| 298 | [LTJ002/dsh-eval-harness](https://github.com/LTJ002/dsh-eval-harness) | 0 | 2026-11-04 | 2026-11-04 | Agent application evaluation toolkit for DeepSeek Harness: offline/online suites judged from audit side effects, baseline diff with zero tolerance for safety regressions, mutation-tested evaluators. Framework-agnostic: needs a callable chat endpoint and queryable tool-call records. Docs in Chinese. |
| 299 | [LTP414/dsh-btw-marginalia](https://github.com/LTP414/dsh-btw-marginalia) | 0 | 2026-11-02 | 2026-11-04 | Read-only /btw side questions for DeepSeek Harness: fork the current session, ask in the margin, keep the main transcript untouched. DeepSeek Harness 的 /btw 只读旁问：fork 当前会话、答案留在页边，不污染主对话。Host + Web Client 插件。 |
| 300 | [lukcyspring/dsh-sticker-hub](https://github.com/lukcyspring/dsh-sticker-hub) | 0 | 2026-10-30 | 2026-11-04 | 一款用于和dsh以及dsh-qq机器人进行表情包互动的插件 |
| 301 | [lukebest/dsh-plugin-profile-sync](https://github.com/lukebest/dsh-plugin-profile-sync) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin that exports and privately syncs profile plugins and configuration. |
| 302 | [lukebest/dsh-wordlink](https://github.com/lukebest/dsh-wordlink) | 0 | 2026-11-04 | 2026-11-04 | WordLink — 沉浸式英语阅读与词汇学习插件（DeepSeek Harness Web UI） |
| 303 | [Lumos-789/galadon](https://github.com/Lumos-789/galadon) | 0 | 2026-11-04 | 2026-11-04 | Five-stage engineering loop for agent-built projects: spec, build, verify, ship, learn |
| 304 | [Lumos-789/malo-browser](https://github.com/Lumos-789/malo-browser) | 0 | 2026-11-04 | 2026-11-04 | Scripted browser demo tool: scene-driven Electron stage, headless 1080p30 recording with evidence, director console and loopback control API. |
| 305 | [LuoTaiyu/dsh-worksite-plugin](https://github.com/LuoTaiyu/dsh-worksite-plugin) | 0 | 2026-11-04 | 2026-11-04 | DSH 会话视图插件：拟人化现场工程师与工程进度可视化 / Anthropomorphic worksite session view for DSH |
| 306 | [lvxianchao/dsh-guard](https://github.com/lvxianchao/dsh-guard) | 0 | 2026-11-04 | 2026-11-04 | Password gate for the DeepSeek Harness Web UI: one login, automatic launch-token exchange, Host/Origin rewrite, and a secure-context polyfill. Zero dependencies. |
| 307 | [lvyue1314/dsh-gpu-guard](https://github.com/lvyue1314/dsh-gpu-guard) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: find GPU compute processes whose owning agent/terminal is already dead, and kill those trees (dry-run by default, watchdog optional). |
| 308 | [LXS652/dsh-supergroup](https://github.com/LXS652/dsh-supergroup) | 0 | 2026-11-04 | 2026-11-04 | 解放你的注意力，给 DSH 装上「整体」：一个主会话带若干执行会话，按会话 ID 派工、按 rpcId 精确回收结果，重启后自动对账自愈。（Multi-session orchestration for DSH: group sessions into teams, dispatch by session ID, collect results by rpcId, and self-reconcile after restart.） |
| 309 | [ly13277/DshRmbCostPer1Talk](https://github.com/ly13277/DshRmbCostPer1Talk) | 0 | 2026-11-04 | 2026-11-04 | 最新一次和DSH交互一共花了多少钱。 |
| 310 | [lyq326/dsh-ink-green](https://github.com/lyq326/dsh-ink-green) | 0 | 2026-11-04 | 2026-11-04 | 自建墨绿配色 for DeepSeek Harness (DSH)：146 个 --dsw-* token，亮/暗双色，纯 token 覆盖 |
| 311 | [m430/dsh-brainstorming](https://github.com/m430/dsh-brainstorming) | 0 | 2026-11-04 | 2026-11-04 | AI brainstorming canvas plugin for DeepSeek Harness |
| 312 | [majestyjun/artifact-space](https://github.com/majestyjun/artifact-space) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：产物空间 —— 按工作区与会话列出每个会话的最终有效产物，支持编辑器风格预览、搜索与收藏。 |
| 313 | [Manbaout-08/dsh-purge](https://github.com/Manbaout-08/dsh-purge) | 0 | 2026-11-04 | 2026-11-04 | Permanently delete DeepSeek Harness sessions and workspaces — real disk deletion, right in the session menu. |
| 314 | [MarcoHuiLam/lingwu-dsh-conversation-cost](https://github.com/MarcoHuiLam/lingwu-dsh-conversation-cost) | 0 | 2026-11-04 | 2026-11-04 | 凌雾DSH对话花费：DSH Web GUI 插件，每轮对话显示人民币花费、token、缓存命中率与账户余额 |
| 315 | [Mark930209/GoDSH](https://github.com/Mark930209/GoDSH) | 0 | 2026-11-03 | 2026-11-04 | Monorepo for DeepSeek Harness (DSH) plugins: multi-plugin development, CI validation, tag-based releases, and an aggregated plugin market index hosted on GitHub Pages. |
| 316 | [MarkYangKp/dsh-intelligence-ui](https://github.com/MarkYangKp/dsh-intelligence-ui) | 0 | 2026-11-04 | 2026-11-04 | Generative UI for DeepSeek Harness: render assistant replies as adaptive, interactive interfaces — 44 theme-native components, native OpenUI fences, automatic Markdown compilation. |
| 317 | [MaxEvansLiuer/dsh-window-control](https://github.com/MaxEvansLiuer/dsh-window-control) | 0 | 2026-11-04 | 2026-11-04 | Control any Windows window or browser from an LLM agent: UI Automation + vision/OCR + real input + CDP, packaged as a DSH plugin / MCP server with 37 tools. |
| 318 | [meihuaanying/dsh-panel-fold](https://github.com/meihuaanying/dsh-panel-fold) | 0 | 2026-11-04 | 2026-11-04 | DSH sidebar plugin: fold the global panel launchers into the More menu so your workspace and session list gets its vertical space back. Toggle in the More menu, persisted, fully reversible. 把侧边栏那排『全局面板』图标收进『更多』。 |
| 319 | [meijieYUan/dsh-work-pay-note](https://github.com/meijieYUan/dsh-work-pay-note) | 0 | 2026-11-04 | 2026-11-04 | A draggable sticky note for DeepSeek Harness that counts today's and this month's earnings in real time from your work hours. |
| 320 | [Menpengpeng/dsh-plugin-model-provider](https://github.com/Menpengpeng/dsh-plugin-model-provider) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: append the provider/platform name after the model name (模型名后追加平台名) |
| 321 | [mentho7/dsh-route](https://github.com/mentho7/dsh-route) | 0 | 2026-11-04 | 2026-11-04 | Bounded agent-team orchestration for DeepSeek Harness, with attempt isolation and a local dashboard. / DeepSeek Harness 团队编排插件 |
| 322 | [Mi-Chuan/box-select-copy](https://github.com/Mi-Chuan/box-select-copy) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: Alt+drag box (rectangular) text selection and copy in the conversation view. |
| 323 | [mihoojj/dsh-prompt-spark](https://github.com/mihoojj/dsh-prompt-spark) | 0 | 2026-11-03 | 2026-11-04 | DeepSeek Harness ?????????:????????,???????????????????? |
| 324 | [MingoYung/dsh-superagent-power](https://github.com/MingoYung/dsh-superagent-power) | 0 | 2026-11-02 | 2026-11-04 | Sup：在 DSH 输入栏全局启停 Super-agent，按需退出后台、释放内存，避免会话开关冲突。 |
| 325 | [MOLMOORE/dsh-mode-switch](https://github.com/MOLMOORE/dsh-mode-switch) | 0 | 2026-11-04 | 2026-11-04 | Tool profiles for DeepSeek Harness: pick the tools a session carries, edit profiles and their tool sets in the panel |
| 326 | [MosCloud/dsh-provider-show](https://github.com/MosCloud/dsh-provider-show) | 0 | 2026-11-03 | 2026-11-04 | 在 DSH 输入框右下角补全当前模型所属的供应商；已被其他插件接管的供应商自动让位。 |
| 327 | [most-silence/dsh-record](https://github.com/most-silence/dsh-record) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: composer microphone recording with MP3/WAV/WebM formats, prompt attachment, and workspace disk save |
| 328 | [Mowendao/dsh-win-proxy](https://github.com/Mowendao/dsh-win-proxy) | 0 | 2026-11-04 | 2026-11-04 | DSH 不跟着代理软件走。一条命令切好 Windows 系统代理，并同步 git / npm / pip 的代理配置。 |
| 329 | [mozl-x/dsh-peer-messenger](https://github.com/mozl-x/dsh-peer-messenger) | 0 | 2026-10-21 | 2026-11-04 | Cross-session agent messaging for DeepSeek Harness over native relay provenance. |
| 330 | [MT3166/dsh-project-skills-mng](https://github.com/MT3166/dsh-project-skills-mng) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：在右侧栏浏览、编辑与管理项目级 / 全局技能（project &amp; global skills） |
| 331 | [muerdon/dsh-skills-workbench](https://github.com/muerdon/dsh-skills-workbench) | 0 | 2026-11-04 | 2026-11-04 | 技能工作台：技能唤起面板 + 落地目录主动同步（DeepSeek Harness 插件） |
| 332 | [MUKAPP/dsh-codebridge](https://github.com/MUKAPP/dsh-codebridge) | 0 | 2026-11-04 | 2026-11-04 | 在 DSH 标准模式中运行 JavaScript/TypeScript，通过代码编排工具并汇总结果。 |
| 333 | [muxili87-art/dsh-token-lens](https://github.com/muxili87-art/dsh-token-lens) | 0 | 2026-11-04 | 2026-11-04 | TokenLens · 用量透镜 — DeepSeek Harness 插件：本地会话日志 → Token / 请求 / 费用 / 缓存命中 / 模型速度看板（隐私模式、峰谷计价） |
| 334 | [my-0228/dsh-api-key-switch](https://github.com/my-0228/dsh-api-key-switch) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: save multiple API keys and switch the active one from Settings. |
| 335 | [mykeura/dsh-minimalist-themes](https://github.com/mykeura/dsh-minimalist-themes) | 0 | 2026-08-26 | 2026-11-04 | Minimalist color themes for DeepSeek Harness. Pick one with a single click — it's just another plugin. |
| 336 | [Mystery-W/dsh-deepseek-web-entry](https://github.com/Mystery-W/dsh-deepseek-web-entry) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 左侧栏的 DeepSeek 网页快捷入口：一键在右侧内置浏览器打开/收起 chat.deepseek.com，也可用系统浏览器打开；不代理、不注入、不自动登录，不消耗 API 额度。 |
| 337 | [Nancy0-0/dsh-code-nav](https://github.com/Nancy0-0/dsh-code-nav) | 0 | 2026-11-02 | 2026-11-04 | DeepSeek Harness plugins: clickable symbol navigation in chat and right-click file operations in the Files sidebar. |
| 338 | [NAS1112/dsh-session-view](https://github.com/NAS1112/dsh-session-view) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness session inspector: tool calls, cost, timing and raw context in one panel |
| 339 | [NAS1112/self-evolve](https://github.com/NAS1112/self-evolve) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness self-evolve plugin: post-task retrospection into memory and skills, with pet animation |
| 340 | [naturalth2012/dsh-ai-nav](https://github.com/naturalth2012/dsh-ai-nav) | 0 | 2026-11-04 | 2026-11-04 | Hao123-style AI navigation page for DeepSeek Harness: 95 verified AI sites and knowledge bases across 8 categories. |
| 341 | [NeilNy/dsh-lol-esports](https://github.com/NeilNy/dsh-lol-esports) | 0 | 2026-11-04 | 2026-11-04 | 英雄联盟赛事观赛面板 · League of Legends esports viewer for DeepSeek Harness (dsh) — fork of Rustyibe/dsh-lol with in-game live stats |
| 342 | [Neverwocao/dsh-session-timing](https://github.com/Neverwocao/dsh-session-timing) | 0 | 2026-11-04 | 2026-11-04 | Session and turn wall-clock timing for the DeepSeek Harness Web UI: per-session total, per-turn duration, and period aggregates. |
| 343 | [ningL32/agent-workbench](https://github.com/ningL32/agent-workbench) | 0 | 2026-11-03 | 2026-11-04 | Local-first workbench plugin for DeepSeek Harness (DSH): turns your local AI coding agents into an observable, accountable team - task board, session reader, commit attribution, daily/weekly reports. Zero runtime deps; data stays on your machine. |
| 344 | [NIRVANA-APOC/dsh-rdm](https://github.com/NIRVANA-APOC/dsh-rdm) | 0 | 2026-11-04 | 2026-11-04 | Resident multi-connection download engine for DeepSeek Harness: rdm_* agent tools, a sidebar download panel, resumable and verifiable transfers. |
| 345 | [Oblivionis7999/dsh-session-stats-panel](https://github.com/Oblivionis7999/dsh-session-stats-panel) | 0 | 2026-11-04 | 2026-11-04 | DSH（DeepSeek Harness）Web 侧栏「会话统计」插件：Token/成本估算（按各厂商原厂官方价目）、DSH 运行状态实时采样、按模型分色的每日堆叠柱与环形图。零第三方依赖。 |
| 346 | [Octidote/dsh-memory](https://github.com/Octidote/dsh-memory) | 0 | 2026-11-04 | 2026-11-04 | Shared local memory pool for DeepSeek Harness conversations |
| 347 | [ollamadou/dsh-downloader](https://github.com/ollamadou/dsh-downloader) | 0 | 2026-11-04 | 2026-11-04 | Resumable multi-connection downloader for DeepSeek Harness with China mirror and proxy presets, plus DeepSeek-assisted resource discovery. |
| 348 | [onlyinliu/dsh-session-console](https://github.com/onlyinliu/dsh-session-console) | 0 | 2026-11-04 | 2026-11-04 | Session Console: dashboard over every conversation, natural-language session targeting, and cross-session task dispatch. |
| 349 | [peng456/dsh-project-deck](https://github.com/peng456/dsh-project-deck) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: a project deck for your repos — registry, dashboard, scheduled WeChat reports, auto-discovery, multi-node scanning. |
| 350 | [pfl20041018-creator/dsh-plugins](https://github.com/pfl20041018-creator/dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugins: lazy tool shelf, memory index, wechat gate/ledger, moments, voice out |
| 351 | [PlayerOneD/dsh-theme-matrix](https://github.com/PlayerOneD/dsh-theme-matrix) | 0 | 2026-11-04 | 2026-11-04 | 全局赛博终端主题：点击穿透的 Matrix 代码雨、荧光绿配色，可调雨速、密度、透明度与发光。 |
| 352 | [pointylab/pointy](https://github.com/pointylab/pointy) | 0 | 2026-11-04 | 2026-11-04 | Shake the mouse, point at anything on screen and ask DeepSeek Harness about it |
| 353 | [polunzh/dsh-task-notifier](https://github.com/polunzh/dsh-task-notifier) | 0 | 2026-11-04 | 2026-11-04 | 任务通知台 · DSH plugin: task-completion chime + system/browser notifications, plus a Tasks panel to filter running and unread-completed sessions. |
| 354 | [PrasenKakade21/dsh-opencode-go-usage](https://github.com/PrasenKakade21/dsh-opencode-go-usage) | 0 | 2026-11-04 | 2026-11-04 | OpenCode Go usage in the DeepSeek Harness composer dock: plan meters, session cost, and a usage ring. |
| 355 | [pwkazn/dsh-model-reasoning-effort](https://github.com/pwkazn/dsh-model-reasoning-effort) | 0 | 2026-11-03 | 2026-11-04 | model reasoning effort editor for custom pi-ai models in DeepSeek Harness (DSH) |
| 356 | [qianyumeng0228/dsh-plug-store](https://github.com/qianyumeng0228/dsh-plug-store) | 0 | 2026-11-01 | 2026-11-04 | DSH 插件商店（宿主插件）— 在 DeepSeek Harness 内浏览 29k+ 社区插件目录，真实执行安装 / 更新 / 卸载 / 备份。Plugin marketplace inside DeepSeek Harness. |
| 357 | [qianyumeng0228/dsh-store](https://github.com/qianyumeng0228/dsh-store) | 0 | 2026-10-31 | 2026-11-04 | DSH 插件目录管道 + 静态商店站 — 合并 dsh.works / awesome / dshopen / GitHub topic / npm 关键词，输出 format-1 索引源与 29,593 条插件目录。 |
| 358 | [qiaohelenjoe/dsh-app](https://github.com/qiaohelenjoe/dsh-app) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 移动端插件、移动端 |
| 359 | [QIKO0721/dsh-ug-viewer](https://github.com/QIKO0721/dsh-ug-viewer) | 0 | 2026-11-04 | 2026-11-04 | Preview UG/NX models in DSH — orbit, pick faces/features, ask an AI. \| 在 DSH 里预览 UG/NX 模型，点选几何，就地问 AI |
| 360 | [QingJ01/dsh-attention-inbox](https://github.com/QingJ01/dsh-attention-inbox) | 0 | 2026-11-04 | 2026-11-04 | Release candidate: cross-session attention inbox for DeepSeek Harness. |
| 361 | [qinglang-fenglin/dsh-bili-scroll](https://github.com/qinglang-fenglin/dsh-bili-scroll) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：每天替你刷一轮 B站（dsh-bili-scroll 2.4.0 修改版，支持自定义模型 provider） |
| 362 | [railgun20001/dsh-session-mover](https://github.com/railgun20001/dsh-session-mover) | 0 | 2026-11-04 | 2026-11-04 | 拖动会话到另一个项目分组，修改其所属项目（只改归属账本与读取投影，不搬会话文件） |
| 363 | [ramanasai/dsh-closet-tracker](https://github.com/ramanasai/dsh-closet-tracker) | 0 | 2026-11-04 | 2026-11-04 | Closet Tracker for the DeepSeek Harness sidebar: a native wishlist panel backed by a zero-dependency Bun web app. |
| 364 | [ramanasai/dsh-rust-academy](https://github.com/ramanasai/dsh-rust-academy) | 0 | 2026-11-04 | 2026-11-04 | A DeepSeek Harness sidebar plugin: 20-lesson Rust course with exercises, progress tracking and a syntax cheatsheet. |
| 365 | [realchendahuang/dsh-provider-studio](https://github.com/realchendahuang/dsh-provider-studio) | 0 | 2026-11-04 | 2026-11-04 | DSH（DeepSeek Harness）的供应商工作室：在设置里直接管理 llm-pi-ai 供应商、API Key 与模型，支持模型连通性测试、从端点拉取模型，内置 223 个供应商模板与品牌 logo。A provider manager for DeepSeek Harness. |
| 366 | [redkiller79/deepseek-harness-fullstack](https://github.com/redkiller79/deepseek-harness-fullstack) | 0 | 2026-11-04 | 2026-11-04 | Senior Full-Stack Engineer plugin for DeepSeek Harness — fullstack architecture, frontend design engineering and browser automation as callable tools. |
| 367 | [reknottycat/dsh-cad-translation](https://github.com/reknottycat/dsh-cad-translation) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness tools for CAD drawing translation |
| 368 | [Richard2091/dsh-workspace-pin](https://github.com/Richard2091/dsh-workspace-pin) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：给侧栏工作区（文件夹）行补上和「会话置顶」完全同款的图钉——hover 出官方 16×16 按钮，置顶后无 hover 留灰色实心 pin，官方 Tooltip；置顶集合由宿主持久化，跨浏览器、清缓存不丢。不改 dsh 源码。Pin workspaces in the DSH Web sidebar exactly like the official session pin, with a host-persisted pin set shared across browsers. |
| 369 | [robinfaraj/postel-mcp](https://github.com/robinfaraj/postel-mcp) | 0 | 2026-10-01 | 2026-11-04 | Postel MCP server: find what's going viral in your niche, write your version in your own voice, and schedule it to X, LinkedIn, Bluesky and Mastodon from Claude, ChatGPT, Cursor or Gemini CLI |
| 370 | [Roccn/dsh-usage-footer](https://github.com/Roccn/dsh-usage-footer) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek balance and burn-rate status strip for the DeepSeek Harness Web UI |
| 371 | [ruiyuxuanyan/dsh-transcript-export](https://github.com/ruiyuxuanyan/dsh-transcript-export) | 0 | 2026-11-04 | 2026-11-04 | 把任意一条回复变成能拿给人看的文档：干净的 Markdown、单文件 HTML 或 JSON。可以只导最近 N 轮，工具调用整轮折进一个附录，正文是真 Markdown 结构还带目录，密钥默认脱敏——全程只读会话日志，不改动它。 |
| 372 | [rUrU516/dsh-quicktime-player](https://github.com/rUrU516/dsh-quicktime-player) | 0 | 2026-11-04 | 2026-11-04 | Sidebar video player for DeepSeek Harness: streaming playback with seek, wheel zoom, drag pan and a custom control bar |
| 373 | [Sakayorilove/laurel](https://github.com/Sakayorilove/laurel) | 0 | 2026-11-04 | 2026-11-04 | Laurel 套件：给 DeepSeek Harness 的控制中心与八个可单独开关的模块（通知 / 记忆核心 / 上下文压缩 / 自动继续 / 内耗护栏 / 深度科研 / 思考滚动窗 / 可视化规划） |
| 374 | [sakura-hly/dsh-codex-composer](https://github.com/sakura-hly/dsh-codex-composer) | 0 | 2026-11-04 | 2026-11-04 | Codex-style composer for the DeepSeek Harness Web GUI: prompt history, Tab completion, and context-aware next-prompt suggestions. |
| 375 | [samir2015dzh/dsh-studio](https://github.com/samir2015dzh/dsh-studio) | 0 | 2026-10-24 | 2026-11-04 | Skill workbench + on-demand MCP for DeepSeek Harness: per-turn distillation, semantic merge, three-layer filtering, recycle bin, purpose-based grouping, idle reclaim, credential masking |
| 376 | [sanqiuyef/SQY-DSH-PLUGIN](https://github.com/sanqiuyef/SQY-DSH-PLUGIN) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 插件集合：MCP 管理 / 记忆管理 / 工具网关 / 技能管理 / 插件中心（Cordis bundles, MIT） |
| 377 | [sansff88-ops/dsh-cookbook](https://github.com/sansff88-ops/dsh-cookbook) | 0 | 2026-11-04 | 2026-11-04 | 菜谱盒子 · 373 道家常菜谱（HowToCook 数据，Unlicense），DeepSeek Harness 插件：Web 面板 + recipe_* 工具，按食材反查、每日推荐、收藏与做过标记。 |
| 378 | [scy88866-beep/dsh-plugin-obsidian-catalog](https://github.com/scy88866-beep/dsh-plugin-obsidian-catalog) | 0 | 2026-11-04 | 2026-11-04 | Obsidian vault table of contents as a conversation view — folders, tags, word counts, headings, and one-click @-path copying. |
| 379 | [seetown/dsh-gui-control](https://github.com/seetown/dsh-gui-control) | 0 | 2026-11-03 | 2026-11-04 | Windows desktop control for DeepSeek Harness: accessibility-tree snapshots, click by control name, delivery verdicts, and repeatable task files. |
| 380 | [sh-222/dsh-recall](https://github.com/sh-222/dsh-recall) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: move big tool results to disk, keep their head inline, let the model pull the rest back with recall(id). |
| 381 | [Shaoji-Lumine/macos-dsh-qq-bot](https://github.com/Shaoji-Lumine/macos-dsh-qq-bot) | 0 | 2026-11-04 | 2026-11-04 | Unofficial community macOS port of SurfCore (DeepSeek Harness QQ bot): patches, installer scripts and docs. Does not bundle QQ/NapCat binaries or account data. |
| 382 | [shijiewang/dsh-workspace-session-filter](https://github.com/shijiewang/dsh-workspace-session-filter) | 0 | 2026-11-04 | 2026-11-04 | DSH 工作区会话筛选插件：侧边栏左下角「运行中 / 待确认」筛选与会话列表 |
| 383 | [sinvacn/dsh-vscode-runner](https://github.com/sinvacn/dsh-vscode-runner) | 0 | 2026-11-04 | 2026-11-04 | Run VS Code launch configurations, compounds and tasks from the DeepSeek Harness Web UI. Supports single-folder and multi-root .code-workspace projects, with live logs, stdin and Flutter device selection. |
| 384 | [Sky33635/dsh-qq-screenshot](https://github.com/Sky33635/dsh-qq-screenshot) | 0 | 2026-11-04 | 2026-11-04 | QQ-style screenshot for the DeepSeek Harness Web UI: Ctrl+Alt+A, drag a region, annotate, copy to the clipboard. |
| 385 | [SonettoGu14/dsh-mcp-status](https://github.com/SonettoGu14/dsh-mcp-status) | 0 | 2026-11-04 | 2026-11-04 | MCP server panel for the DeepSeek Harness Web GUI: sidebar list of every MCP server with live connection state, tool count and config, plus in-place enable/disable and reconnect. |
| 386 | [songzhou666/gov-hub](https://github.com/songzhou666/gov-hub) | 0 | 2026-11-04 | 2026-11-04 | 项目地图 Project Map for agent workspaces: AI reaches authoritative files directly instead of brute-force folder scanning. 96.7%~99.3% nav-cost cut, up to 5.8x faster Q&amp;A. DSH plugin + standalone skill. |
| 387 | [specstream/specstream-tools](https://github.com/specstream/specstream-tools) | 0 | 2026-10-11 | 2026-11-04 | The live web data engine. MCP setup, plugins, skills, SDKs, n8n node and GitHub Action for SpecStream. |
| 388 | [ssf13546/dsh-delta-theme](https://github.com/ssf13546/dsh-delta-theme) | 0 | 2026-11-04 | 2026-11-04 | 三角洲风格主题：非官方 DSH 深色主题，支持本地壁纸、虚化和遮罩。 |
| 389 | [stallenlu/dsh-disk-cleaner](https://github.com/stallenlu/dsh-disk-cleaner) | 0 | 2026-11-04 | 2026-11-04 | Disk Cleaner for DeepSeek Harness: scan known-safe caches, assess what cannot be cleaned, get a ranked plan |
| 390 | [stallenlu/dsh-game-center](https://github.com/stallenlu/dsh-game-center) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness panel plugin: a mini-game library that plays them in the same window. Ships with Tetris. |
| 391 | [stallenlu/dsh-sticky-notes](https://github.com/stallenlu/dsh-sticky-notes) | 0 | 2026-11-04 | 2026-11-04 | Sticky notes plugin for DeepSeek Harness (DSH): draggable floating panel, full sidebar page, Markdown preview, paste images, settings. |
| 392 | [stallenlu/dsh-wsl](https://github.com/stallenlu/dsh-wsl) | 0 | 2026-11-04 | 2026-11-04 | WSL workspaces for DeepSeek Harness: one persistent in-distro agent instead of 9P polling. Sidebar W entry, in-distro terminal, WSL-native grep/glob, wsl-&lt;mode&gt; preset variants. |
| 393 | [star-kz/dsh-auto-continue](https://github.com/star-kz/dsh-auto-continue) | 0 | 2026-11-04 | 2026-11-04 | DSH Web 报错重试与可选自动继续（CONTINUE），仅主会话，带防循环上限。 |
| 394 | [star-kz/dsh-subagent-model-switcher](https://github.com/star-kz/dsh-subagent-model-switcher) | 0 | 2026-11-04 | 2026-11-04 | 给 DSH 子 agent 会话补上模型与思考强度切换，主会话保持不变。 |
| 395 | [StarSpacePX/dsh-agent-team-roles](https://github.com/StarSpacePX/dsh-agent-team-roles) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件：把 agent team 每个角色做成独立 preset，并在 Web GUI 里可视化管理角色能力（工具/技能/MCP/分组/loop/AGENTS.md） |
| 396 | [StarWind97/dsh-github-notebook](https://github.com/StarWind97/dsh-github-notebook) | 0 | 2026-10-28 | 2026-11-04 | DSH Notebook · 私人笔记管理。保存会话、管理图文笔记、导出文件，通过自己的 GitHub 私有仓库跨设备同步。Private note management for DeepSeek Harness. |
| 397 | [stayw1thme999/dsh-workflow-kit](https://github.com/stayw1thme999/dsh-workflow-kit) | 0 | 2026-11-04 | 2026-11-04 | Companion to dsh-superagent: dispatch work between receivers, record failures, wake sleeping sessions. Zero external dependencies. |
| 398 | [sukholovskyyy/dsh-liang-price-badge](https://github.com/sukholovskyyy/dsh-liang-price-badge) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness 侧边栏插件：按官方峰谷时段显示当前是高峰还是空闲、距下次切换的倒计时，以及空闲时段的 5 折提示；自动识别周末与法定节假日，纯本地计算，不联网、不改模型。 |
| 399 | [SuLiuCanYing/dsh-billing-statistics](https://github.com/SuLiuCanYing/dsh-billing-statistics) | 0 | 2026-11-04 | 2026-11-04 | Local billing ledger for DSH model calls: provider/model call counts, tokens, estimated spend, official-bill comparison, manual/peak pricing, and HTML/PDF reports. |
| 400 | [sunshinezhi/dsh-scifi-splash](https://github.com/sunshinezhi/dsh-scifi-splash) | 0 | 2026-11-04 | 2026-11-04 | Light neumorphic theme with a pale glass UI and a dark sci-fi boot animation for DeepSeek Harness. |
| 401 | [superchao5717/dsh-local-superagent](https://github.com/superchao5717/dsh-local-superagent) | 0 | 2026-11-04 | 2026-11-04 | Local Superagent task board plugin for DeepSeek Harness (DSH): local task dispatch, isolated worker sessions, supervisor review, minimal-interruption human decisions. |
| 402 | [suyunxing/dsh-effort-slider](https://github.com/suyunxing/dsh-effort-slider) | 0 | 2026-11-04 | 2026-11-04 | A reasoning-effort slider that replaces the DSH composer model selector: starfield rail, per-model effort mapping, and model switches that never fail. |
| 403 | [svestar/dsh-readpilot](https://github.com/svestar/dsh-readpilot) | 0 | 2026-11-04 | 2026-11-04 | 智读 ReadPilot — AI-assisted reading for DeepSeek Harness: TXT, Markdown, EPUB and PDF. |
| 404 | [Syske/dsh-plugins](https://github.com/Syske/dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | dsh插件 |
| 405 | [Syske/dsh-ui-zoom](https://github.com/Syske/dsh-ui-zoom) | 0 | 2026-11-04 | 2026-11-04 | 为 DeepSeek Harness Web 界面提供整页缩放（50%–200%）：侧边栏、按钮、图标、间距与文字一起缩放，带设置项、快捷键与偏好记忆。零依赖。 |
| 406 | [tagayamajin/dsh-backup-skill](https://github.com/tagayamajin/dsh-backup-skill) | 0 | 2026-11-04 | 2026-11-04 | DSH migration kit skill: back up plugins, profiles, plugin settings and chat history into one portable kit and restore a fresh machine (works even when DSH cannot boot). |
| 407 | [tagayamajin/dsh-bailian-coupon](https://github.com/tagayamajin/dsh-bailian-coupon) | 0 | 2026-11-04 | 2026-11-04 | 阿里云百炼（Model Studio）代金券余额：在 DSH 侧栏显示剩余金额，支持面板内直接填 RAM AccessKey，10 分钟缓存 |
| 408 | [tao1020/dsh-global-pins](https://github.com/tao1020/dsh-global-pins) | 0 | 2026-11-04 | 2026-11-04 | Global pinned conversations across DeepSeek Harness workspaces, with drag ordering and recent-first sorting. |
| 409 | [tech-zerolei/dsh-token-summary](https://github.com/tech-zerolei/dsh-token-summary) | 0 | 2026-11-04 | 2026-11-04 | 每累计 1000 万 token 自动把一个 DeepSeek Harness 会话总结成 Markdown 归档 · DSH host plugin |
| 410 | [thanhvinh0265-art/dsh-locale-vi](https://github.com/thanhvinh0265-art/dsh-locale-vi) | 0 | 2026-11-04 | 2026-11-04 | Vietnamese language pack for DeepSeek Harness: adds the 'Tiếng Việt' UI language and a dictionary for every client plugin that publishes strings through ctx.locale. |
| 411 | [thawline/dsh-about-me](https://github.com/thawline/dsh-about-me) | 0 | 2026-11-04 | 2026-11-04 | ???:???????????,?????;??????;?????? |
| 412 | [ThEmbrace/dsh-thick-scrollbar](https://github.com/ThEmbrace/dsh-thick-scrollbar) | 0 | 2026-11-04 | 2026-11-04 | Hover-thickening scrollbars for the DeepSeek Harness Web GUI. |
| 413 | [TMrazbw/dsh-approval-memory](https://github.com/TMrazbw/dsh-approval-memory) | 0 | 2026-10-22 | 2026-11-04 | 自动同意请求 / DAM for DeepSeek Harness: approval memory, command-risk preview, and scoped auto-approval for read-only classes. |
| 414 | [TMrazbw/dsh-failure-ledger](https://github.com/TMrazbw/dsh-failure-ledger) | 0 | 2026-10-22 | 2026-11-04 | 对话异常统计 / DFL for DeepSeek Harness: failure ledger, guards, automatic handoff, context/spend, and token savings. |
| 415 | [TNTD26/dsh-ide](https://github.com/TNTD26/dsh-ide) | 0 | 2026-11-04 | 2026-11-04 | A full IDE inside DeepSeek Harness — file tree, tabs, AI chat, Git, terminal, Python/TypeScript LSP and CodeMirror 6. |
| 416 | [ToiMee/mica_space](https://github.com/ToiMee/mica_space) | 0 | 2026-11-04 | 2026-11-04 | 长对话里对一个回答连续追问，传统聊天要上下翻找。Mica Space 让追问从回答直接分叉：主线 + 支线、本地记忆 callback、引用、附件、搜索与备份；DSH 插件，零配置。 |
| 417 | [tom143tc/dsh-session-card](https://github.com/tom143tc/dsh-session-card) | 0 | 2026-11-04 | 2026-11-04 | dsh-session-card  |
| 418 | [tommy00748-tech/dsh-adhd-noise](https://github.com/tommy00748-tech/dsh-adhd-noise) | 0 | 2026-11-04 | 2026-11-04 | ADHD-friendly focus soundscape plugin for DeepSeek Harness: five procedurally synthesised noise colours, live-waveform orb, fade-out timer and liquid-glass popover. No audio assets, no network requests. |
| 419 | [TomYang1993/dsh-wuxia-ink](https://github.com/TomYang1993/dsh-wuxia-ink) | 0 | 2026-11-04 | 2026-11-04 | 影之刃零 Ink Blade — a Wuxia ink-wash theme for DeepSeek Harness (unofficial fan project) |
| 420 | [tonyzdev/dsh-session-messaging](https://github.com/tonyzdev/dsh-session-messaging) | 0 | 2026-11-02 | 2026-11-04 | DeepSeek Harness plugin: let top-level sessions find, message, and spawn each other (session_list / session_send_message / session_create) · 支持一句话让 DSH 自动安装 |
| 421 | [tttnny/my-dsh](https://github.com/tttnny/my-dsh) | 0 | 2026-08-19 | 2026-11-04 | DeepSeek Harness 插件/补丁/preset 合集 \| DSH plugins, patches &amp; presets |
| 422 | [tyouter/dsh-notes](https://github.com/tyouter/dsh-notes) | 0 | 2026-11-04 | 2026-11-04 | A notebook inside DeepSeek Harness: one page, typeset as you write, with suggestions, structure and translation at the edge of the page. |
| 423 | [vb2250158/dsh-smart-selector](https://github.com/vb2250158/dsh-smart-selector) | 0 | 2026-11-01 | 2026-11-04 | Smart Selector for DeepSeek Harness: model-driven event judgement, content selection and configurable actions |
| 424 | [void0042/dsh-record-manager](https://github.com/void0042/dsh-record-manager) | 0 | 2026-11-04 | 2026-11-04 | DSH 外置笔记插件：把笔记存成磁盘上的 .txt/.md，提供侧边栏面板、独立窗口和 record_note Agent 工具。 |
| 425 | [waafer1/dsh-jipu](https://github.com/waafer1/dsh-jipu) | 0 | 2026-11-04 | 2026-11-04 | Jipu manuscript crew for DeepSeek Harness: reader-first long-form novel pipeline, 14 gate scripts, 12 genre libraries. |
| 426 | [WangZW928/Career-PPTagent](https://github.com/WangZW928/Career-PPTagent) | 0 | 2026-10-29 | 2026-11-04 | PPTAgent skills and a concise business presentation style for Chinese technical and project decks |
| 427 | [webstorm-dxy/GorgePluginForDSH](https://github.com/webstorm-dxy/GorgePluginForDSH) | 0 | 2026-11-04 | 2026-11-04 | Dremu 谱面工坊 — a full-page Gorge/Dremu .g chart editor bundle for the DeepSeek Harness Web UI (timeline editing, inspector, curves, playback preview, agent tools) |
| 428 | [weixiurui/dsh-firefly-forest](https://github.com/weixiurui/dsh-firefly-forest) | 0 | 2026-11-04 | 2026-11-04 | dsh主题插件， 萤火森林 |
| 429 | [wengyingjian/dsh-push-to-talk](https://github.com/wengyingjian/dsh-push-to-talk) | 0 | 2026-11-04 | 2026-11-04 | 按住一个键说话、松开自动转写（push-to-talk）：驱动 DSH 官方语音输入插件的麦克风，按住键可在插件设置页里按平台选。Hold a key to dictate, release to transcribe. |
| 430 | [wenjun81/dsh-vscode](https://github.com/wenjun81/dsh-vscode) | 0 | 2026-11-04 | 2026-11-04 | DSH sidebar plugin bridging VS Code: launch VS Code, browse workspace files, send them as attachments to the current conversation, and edit code in a floating multi-tab workbench. |
| 431 | [whishi47/dsh-get-jobs](https://github.com/whishi47/dsh-get-jobs) | 0 | 2026-11-04 | 2026-11-04 | 投简历还在四个招聘 App 里一个个点「打招呼」？装一个插件就好：Boss直聘 / 猎聘 / 51job / 智联 的岗位筛选、AI 打招呼、自动投递、投递记录导出 Excel，全在一个面板里。一条命令装好，不用装数据库、不用编译、不用手动起后端。⚠️ 仅个人学习参考与辅助求职，禁止商用。 |
| 432 | [Wildchiken/dsh-result-budget](https://github.com/Wildchiken/dsh-result-budget) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: size every tool result to the active model's context window, so local and small models aren't flooded by one oversized output. |
| 433 | [Wiselfx/dsh-opencode-go-panel](https://github.com/Wiselfx/dsh-opencode-go-panel) | 0 | 2026-11-04 | 2026-11-04 | OpenCode Go subscription, model allowance, usage meter, and per-million-token rate panel for the DeepSeek Harness sidebar. |
| 434 | [wodaimnd/apk-lab](https://github.com/wodaimnd/apk-lab) | 0 | 2026-11-04 | 2026-11-04 | Left-sidebar panel for the APK lab: scans the workspace for APKs, builds the first mt MCP call, and appends the analysis record to a note file in the workspace. |
| 435 | [wodaimnd/dsh-forge](https://github.com/wodaimnd/dsh-forge) | 0 | 2026-11-04 | 2026-11-04 | Creator 插件闭环：装前静态体检、Skill 目录诊断、装后复验与 rollback 账本。 |
| 436 | [wodaimnd/dsh-github-publisher](https://github.com/wodaimnd/dsh-github-publisher) | 0 | 2026-11-04 | 2026-11-04 | Multi-platform publishing for local DSH plugins: tick GitHub / npm, fill the metadata once, then create the repo, commit, push, tag, Release and npm publish from a single button — with a getting-started guide that links straight to the token pages, a platform-config page and a version-sync matrix. · 一键把本地 DSH 插件发布到多个平台（GitHub + npm）：统一的发布要素、平台凭据配置… |
| 437 | [wodaimnd/dsh-plugin-forge-preset](https://github.com/wodaimnd/dsh-plugin-forge-preset) | 0 | 2026-11-04 | 2026-11-04 | 插件工坊：原创 DSH 插件生成 + 他人插件测绘、代码吸收与改造分叉，中文界面优先。 |
| 438 | [wodaimnd/dsh-plugin-guard](https://github.com/wodaimnd/dsh-plugin-guard) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件运维台：兼容性体检 + 装载行修复（patch-bundle-row）+ 授权闸门（plan/apply/undo）+ 装前静态体检与装后复验账本。把 dsh-compat-vet 的审查修复层与 dsh-forge 的锻造台合到一处。 |
| 439 | [wodaimnd/winpilot](https://github.com/wodaimnd/winpilot) | 0 | 2026-11-04 | 2026-11-04 | 微信小程序控制台：把 winpilot CLI 暴露成模型工具，并提供连接、项目、截图与诊断的配置面板。 |
| 440 | [wodaimnd/wxmp](https://github.com/wodaimnd/wxmp) | 0 | 2026-11-04 | 2026-11-04 | 公众号文章工作台：在 DSH 里写稿、排版、生成封面、建草稿并发布到微信公众号。模型侧提供 wxmp 工具，界面侧提供三栏工作台（文章列表 / 预览 / 发布流水线）。 |
| 441 | [wodaimnd/Xsdsh-purge-next](https://github.com/wodaimnd/Xsdsh-purge-next) | 0 | 2026-11-04 | 2026-11-04 | Xsdsh-purge-next 核心精简版（DSH NEXT / rc.4 专用；独立包名、模块 id、状态目录） |
| 442 | [wufeng0105/dsh-teammate-model-picker](https://github.com/wufeng0105/dsh-teammate-model-picker) | 0 | 2026-11-04 | 2026-11-04 | Give DeepSeek Harness teammate (continuable subagent) sessions their own model picker: switch a teammate stalled on an exhausted quota onto another available model — without touching the Lead session or the global default model. |
| 443 | [wx-98/DSH-GIT](https://github.com/wx-98/DSH-GIT) | 0 | 2026-11-04 | 2026-11-04 | VSCode/IDEA-style Git source control for the DeepSeek Harness right sidebar: commit graph, branch switching, staging, hunk actions. |
| 444 | [wzgytuA888/scifig-studio](https://github.com/wzgytuA888/scifig-studio) | 0 | 2026-11-04 | 2026-11-04 | SciFigure Studio — interactive SCI figure workbench plugin for DeepSeek Harness: maps with projection switching, statistical charts, journal presets, 33 palettes, generated Python code. |
| 445 | [Xchcy/DSH-Reflex](https://github.com/Xchcy/DSH-Reflex) | 0 | 2026-11-04 | 2026-11-04 | ChatGPT-like right-click menu for links and file references in DeepSeek Harness (DSH) desktop messages. |
| 446 | [xclj123/dsh-effort-auto-toggle](https://github.com/xclj123/dsh-effort-auto-toggle) | 0 | 2026-10-30 | 2026-11-04 | DSH plugin: an Auto toggle that schedules reasoning_effort per request, model-adaptive effort ladders (low/high/max, low/high/highx/max/ultra...), MiniMax/heuristic scoring, session-scoped continuity, live effort labels, JSONL token ledger. |
| 447 | [xdr531955724/dsh-prompt-manager](https://github.com/xdr531955724/dsh-prompt-manager) | 0 | 2026-10-04 | 2026-11-04 | DSH（DeepSeek Harness）提示词管理器：按标签分组管理提示词，一键写进输入框；并用大模型优化输入框里正在写的东西。A DSH bundle: tag-grouped prompt library + AI prompt optimizer for the composer. |
| 448 | [XIA-J-B/dsh-usage-stats](https://github.com/XIA-J-B/dsh-usage-stats) | 0 | 2026-10-07 | 2026-11-04 | DSH（DeepSeek Harness）用量与工具调用统计插件：token 四桶、费用估算、工具调用次数与耗时排行、按对话与按模型定位开销，Web 设置页面板展示 |
| 449 | [xia-sc/dsh-language-policy](https://github.com/xia-sc/dsh-language-policy) | 0 | 2026-11-04 | 2026-11-04 | DSH host-only bundle that pins a Simplified-Chinese reasoning/response policy at the end of the system prompt |
| 450 | [xiangyi-wang/dsh-crawler](https://github.com/xiangyi-wang/dsh-crawler) | 0 | 2026-11-04 | 2026-11-04 | 在 DeepSeek Harness 界面上爬行的小虫子：1111 个形态，吃词、长大、结丝、生灭（原作引擎：Slava Rybin《Crawlers》） |
| 451 | [xiaobaijunya/dsh-cost-meter](https://github.com/xiaobaijunya/dsh-cost-meter) | 0 | 2026-11-04 | 2026-11-04 | Estimated CNY cost for DSH token usage: per-turn and session cost with DeepSeek peak/off-peak and per-model pricing, plus a separate subagent breakdown. |
| 452 | [xiaonerner0821/prismsearch](https://github.com/xiaonerner0821/prismsearch) | 0 | 2026-10-28 | 2026-11-04 | Multi-engine web search &amp; page fetching MCP server |
| 453 | [xiaxiaoer-subai/xiaxiaoer-dsh-plugins](https://github.com/xiaxiaoer-subai/xiaxiaoer-dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | 虾小二 DeepSeek Harness 插件：写作工作台、虾小思、办公文件、Archify 架构图、运营中心与品牌界面。独立安装包、完整源码和回归记录。 |
| 454 | [xiechenghua01/dsh-plugins](https://github.com/xiechenghua01/dsh-plugins) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin monorepo and plugin market index source: install plugins from the Discover page or with plugin_manager. |
| 455 | [xiong4huo/dsh-recursive-best-of-n](https://github.com/xiong4huo/dsh-recursive-best-of-n) | 0 | 2026-11-04 | 2026-11-04 | DSH 插件 · Recursive Best-of-N（递归择优树）agent preset：并行数与递归深度跟随用户的 Subagent 设置，主 agent 一次并行派发多个子代理，每层择优上送。 |
| 456 | [xuanyuanchumo/dsh-anic](https://github.com/xuanyuanchumo/dsh-anic) | 0 | 2026-11-04 | 2026-11-04 | ANIC — AI-Native Iteration Cycle as a standalone DSH plugin (general-purpose workflow visualizer) |
| 457 | [xuanyuanchumo/dsh-kaogong](https://github.com/xuanyuanchumo/dsh-kaogong) | 0 | 2026-11-04 | 2026-11-04 | 考公备考整合插件（DSH 宿主原生面板）— 15 开源仓库一键式整合 · 离线可视化 · SRS 错题本 · 专项刷题记忆 · 交互图谱 · 白盒可观测 |
| 458 | [xuzhenjie12/dsh-bili-saver](https://github.com/xuzhenjie12/dsh-bili-saver) | 0 | 2026-11-04 | 2026-11-04 | ??????? B ??DSH ??:? JS ???,3 ??????,??????,??????????? |
| 459 | [xymy666/dsh-cache-probe](https://github.com/xymy666/dsh-cache-probe) | 0 | 2026-11-04 | 2026-11-04 | DSH channel test page: prompt-cache hit rate, streaming speed, and a pelican SVG test. |
| 460 | [xymy666/dsh-tray-flash](https://github.com/xymy666/dsh-tray-flash) | 0 | 2026-11-04 | 2026-11-04 | Blinks the Windows notification-area icon and flashes the taskbar button while a DSH session still shows an unread or waiting dot. |
| 461 | [yan3536/dsh-cookie-janitor](https://github.com/yan3536/dsh-cookie-janitor) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness plugin: stops stale dsh-auth-* cookies from overflowing the request header and causing HTTP 431 / blank screen |
| 462 | [yanyan-shub/dsh-dream](https://github.com/yanyan-shub/dsh-dream) | 0 | 2026-11-04 | 2026-11-04 | 可以让你的ds做梦！不过只是底色，一般而言梦境消息不会存储下来，她也会逐渐遗忘，只留下做梦的背景底色 |
| 463 | [yanyan-shub/little-card](https://github.com/yanyan-shub/little-card) | 0 | 2026-11-04 | 2026-11-04 | 给接入QQ的ai使用的拓展插件，功能是让ai记住上回聊天聊到了哪里，让其保持记忆连贯性的小纸条插件，适用于dsh |
| 464 | [Yaohua-Leo/dsh-latex](https://github.com/Yaohua-Leo/dsh-latex) | 0 | 2026-11-04 | 2026-11-04 | Native DeepSeek Harness LaTeX workspace: edit .tex in the sidebar, compile with local TeX Live latexmk, and keep a live PDF preview refreshed on save. |
| 465 | [YardonYan/dsh-plugin-netease-lyrics](https://github.com/YardonYan/dsh-plugin-netease-lyrics) | 0 | 2026-11-04 | 2026-11-04 | 网易云音乐歌词贴进 DeepSeek Harness 状态行右侧，伪装成状态行的一部分。Netease Cloud Music lyrics beside the DSH activity line, disguised as part of it. |
| 466 | [yelinos/dsh-chrome-bridge](https://github.com/yelinos/dsh-chrome-bridge) | 0 | 2026-11-04 | 2026-11-04 | Codex Chrome extension-style browser control for DeepSeek Harness: per-domain approval, one tab group per session, real mouse and keyboard input, inline screenshots. |
| 467 | [Ysx12138/dsh-science-panel](https://github.com/Ysx12138/dsh-science-panel) | 0 | 2026-11-04 | 2026-11-04 | Claude Science 中文面板 for DeepSeek Harness |
| 468 | [yuan-source-666/dsh-ptc-discipline](https://github.com/yuan-source-666/dsh-ptc-discipline) | 0 | 2026-11-04 | 2026-11-04 | DSH agent preset: PTC mode plus a hard goal + todo gate — no tool call succeeds until an active goal and an in-progress todo exist. |
| 469 | [yubi233/dsh-phone-remote](https://github.com/yubi233/dsh-phone-remote) | 0 | 2026-11-04 | 2026-11-04 | Host-side dsh plugin: pair a phone to your dsh instance through a self-hosted relay, with a console inside the dsh web GUI |
| 470 | [YueSunhao/afgo-dsh](https://github.com/YueSunhao/afgo-dsh) | 0 | 2026-11-04 | 2026-11-04 | AsterFire Go 科学计算插件：蛋白质设计·分子动力学·生物信息学·DFT/量子化学 \| DSH plugin + Agent Skill |
| 471 | [YuLaiZ/dsh-widthkeeper](https://github.com/YuLaiZ/dsh-widthkeeper) | 0 | 2026-10-29 | 2026-11-04 | 会话内容列的守宽人：DeepSeek Harness 宽度控制插件，支持滑杆、精确输入、自动读值和收起控件。 |
| 472 | [Yuncan050115/dsh-channel-memory](https://github.com/Yuncan050115/dsh-channel-memory) | 0 | 2026-11-03 | 2026-11-04 | DSH plugin: dedicated WeChat-channel workspace + shared long-term memory across sessions (5 tools, zero runtime deps). |
| 473 | [Yuncan050115/dsh-profiler](https://github.com/Yuncan050115/dsh-profiler) | 0 | 2026-10-23 | 2026-11-04 | Agent runtime profiler for DeepSeek Harness: boot timing attribution, tool-call latency sampling (P95), session token attribution, cross-session memory gap diagnosis. Cordis plugin. |
| 474 | [yxfvvv/dsh-labview](https://github.com/yxfvvv/dsh-labview) | 0 | 2026-11-04 | 2026-11-04 | Open password-protected LabVIEW VI/CTL block diagrams without LabVIEW or Python — DSH plugin. |
| 475 | [yyqinfo/dsh-session-project-logs](https://github.com/yyqinfo/dsh-session-project-logs) | 0 | 2026-11-04 | 2026-11-04 | DSH plugin: keep each project's session logs inside the project (.dsh/sessions) instead of the central ~/.dsh/sessions root |
| 476 | [zengchunhua-boost/dsh-cat-star](https://github.com/zengchunhua-boost/dsh-cat-star) | 0 | 2026-11-04 | 2026-11-04 | 喵星大道 — cat beauty scoring for the DSH Web GUI: CFA-inspired scorecards, China-market price estimate, share card, optional public leaderboard. |
| 477 | [zhangmin510/dsh-model-quota](https://github.com/zhangmin510/dsh-model-quota) | 0 | 2026-11-04 | 2026-11-04 | DeepSeek Harness model balances and subscription quota panel, including Alibaba Token Plan |
| 478 | [zingreqe/dsh-im-companion](https://github.com/zingreqe/dsh-im-companion) | 0 | 2026-11-04 | 2026-11-04 | 本项目是一个deepseek harness的插件，用于扩展@xmanrui/dsh-im插件和dsh-onebot-qq插件的功能，主要为其添加了分段发送、自动发送的功能，使你的dsh能更像真人一样跟你聊天，并且功能相关参数高度自定义。 |
| 479 | [zingreqe/tools_manager](https://github.com/zingreqe/tools_manager) | 0 | 2026-10-29 | 2026-11-04 | deepseek harness的工具管理插件，可以管理deepseek harness自带的和第三方插件提供的工具，便于你在不同的使用目的下开启或关闭工具，被关闭的工具不进入上下文，以便节省token。此外工具还提供了系统提示词重写功能，便于用户拓展使用方式。 |
| 480 | [ZKY172/dsh-simple-balance](https://github.com/ZKY172/dsh-simple-balance) | 0 | 2026-11-04 | 2026-11-04 | 简便余额 — DeepSeek Harness 侧栏余额/时段价/今日用量小组件 |
| 481 | [zxbingoo/dsh-model-providers](https://github.com/zxbingoo/dsh-model-providers) | 0 | 2026-11-03 | 2026-11-04 | Connect DeepSeek Harness to Codex CLI using its existing authentication and provider configuration, with Harness-owned tools. |
| 482 | [zxzc114514/dsh-startup-model](https://github.com/zxzc114514/dsh-startup-model) | 0 | 2026-11-04 | 2026-11-04 | Remembers the model selection used before shutdown and restores it as the startup default in DeepSeek Harness. |
| 483 | [ZydFirst/dsh-offwork-countdown](https://github.com/ZydFirst/dsh-offwork-countdown) | 0 | 2026-11-04 | 2026-11-04 | A countdown pill under the composer for DeepSeek Harness: time left until you clock off, a workday progress bar, and an overtime timer after the end time. |
| 484 | [zyhnbyyds/dsh-opencode-go-usage](https://github.com/zyhnbyyds/dsh-opencode-go-usage) | 0 | 2026-10-28 | 2026-11-04 | DeepSeek Harness plugin: OpenCode GO quota (5h/week/month) pill + details popover below the composer, with an API key settings page. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 0xyxy/codex-collab
- 0xyxy/dsh-maid-atelier-tod
- 19952730389/dsh-app-updater
- 2869949486/dsh-opencode-quota-router
- 2869949486/dsh-opencode-usage
- akaydesu/dsh-language
- Bobnemimimmi/dsh-always-status-bar
- CaiZongyuan/dsh-my-homepage
- chenxiang6663635/job-workbench
- Dmatterdj/dsh-gui-search
- dxxo77/DSH_plugin
- elims777/dsh_languages
- EternalNight996/dsh-super-agents
- fengshenx/dsh-leader-kit
- GinoXiang/dsh-task-board
- Hongcheng-LI/dsh-magpie
- iwinoid/fakeip-compat
- Jaylor-Wang/dsh-fast-loop
- jsunon/dsh-session-archive
- Long-Yin-Zi/task-decision
- LTP414/dsh-marginalia
- lucky6star9/dsh-prompt-optimizer
- Lumos-789/react-monitor-agent
- lxy7747-hash/dsh-balance-badge
- nengong-ai/dsh-keychain-credentials
- RevolutionLA/dsh-dream-skin
- Sakayorilove/dsh-laurel
- samir2015dzh/dsh-skill-studio-plus
- shangshuo1/DSH-Virtual
- tkdfs/dsh-ptc-auto-preset
- Viktirr/dsh-llm-lmstudio
- XIA-2005/dsh-usage-stats
- yk1288/dsh-opencode-go-usage
- Zh0uHX/dsh-skills
- zhezhi33/dsh-session-recycle
- zxbingoo/dsh-codex-cli
