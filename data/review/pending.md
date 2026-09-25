# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-25**
- 快照日期 / Snapshot date: **2026-09-25 (UTC)**
- 待审核 / Pending: **103**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **29**
- Star 异常增长 / Star-growth alerts: **4** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-24** / vs previous snapshot **2026-09-24**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [anywhere-labs/Agents-Anywhere](https://github.com/anywhere-labs/Agents-Anywhere) | 待审 / pending | 1202 | — | 128 | 125d | 待审高星 | 核准即 Top 13 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 9476 | +392 | 377 | 42d | 日增百星 | 日增 +392★；已不进榜单 |
| ⚠️ [dream-num/univer-workspace](https://github.com/dream-num/univer-workspace) | 已核准 / approved | 926 | +253 | 84 | 41d | 日增百星 | 日增 +253★；已不进榜单 |
| ⚠️ [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 已核准 / approved | 7211 | +118 | 520 | 94d | 日增百星 | 日增 +118★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [anywhere-labs/Agents-Anywhere](https://github.com/anywhere-labs/Agents-Anywhere) ⚠️ | 1202 | 2026-05-22 | 2026-09-25 | 跨设备的开源Agent工作台 |
| 2 | [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | 80 | 2026-09-24 | 2026-09-25 | 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 Muse Spark 1.3、MiMo V2.6 在内的前沿模型——完全免费，不限量。 All you do is install this plugin in dsh: no login, no sign-up, no API key — the frontier models are just there, Muse Spark 1.3 and MiMo V2.6 among them. Completely free, with no usage cap. |
| 3 | [lyhue1991/dsh-soup](https://github.com/lyhue1991/dsh-soup) | 12 | 2026-08-19 | 2026-09-25 | dsh 体验增强四件套 = Jupyter风格SideBar + 中央文件预览Tab + 多行GoalBar + 实时Token流速徽标 |
| 4 | [TH060419/gatherthread](https://github.com/TH060419/gatherthread) | 3 | 2026-08-25 | 2026-09-25 | GatherThread 共序：本地 AI 编程 Agent 多人联机协作、实时共享上下文。Self-hostable collaboration for local AI coding agents, Codex Desktop connector & DeepSeek Harness plugin. |
| 5 | [yumiao-dev/dsh-chat-thinking-editor](https://github.com/yumiao-dev/dsh-chat-thinking-editor) | 3 | 2026-09-20 | 2026-09-25 | DSH 插件：直接在 DeepSeek Harness 对话里编辑任意 AI 消息的正文与思维链（thinking）。保留 AI 的聪明，让 AI 完全符合你的心意。🐛 修复选中删除联动清空问题。\| DeepSeek Harness plugin to edit any assistant reply + reasoning/thinking chain. Make the AI output truly yours. |
| 6 | [2861292267/DSH-Official-WorkBuddy-Credit-Proxy](https://github.com/2861292267/DSH-Official-WorkBuddy-Credit-Proxy) | 2 | 2026-09-25 | 2026-09-25 | DSH 官方版 · WorkBuddy 积分反代 —— 把本机 WorkBuddy 账号合并为自动故障转移的模型池，接入 DeepSeek Harness 官方版（含 DSH 内核 0.1.7 兼容修复、启动自动同步账号、卡片内 OAuth 扫码添加） |
| 7 | [Andersen216/dsh-whale-girl-live2d](https://github.com/Andersen216/dsh-whale-girl-live2d) | 2 | 2026-09-25 | 2026-09-25 | 鲸鱼娘桌宠：DSH Web 界面里的 Live2D 桌宠（模型素材非商业，CC BY-NC-SA 4.0） |
| 8 | [bakasbk/dsh-connect-comate](https://github.com/bakasbk/dsh-connect-comate) | 2 | 2026-09-24 | 2026-09-25 | Connect the locally signed-in WPS Comate account to DeepSeek Harness as a model provider, via a secure loopback shim (reverse-proxy style). 通过安全回环 shim（反向代理），把本机已登录的 WPS Comate 账号接入 DeepSeek Harness 作为模型来源。 |
| 9 | [Lixiuxiu559/AgentForge](https://github.com/Lixiuxiu559/AgentForge) | 2 | 2026-09-23 | 2026-09-25 | 通用 agent 工作流与工程技能集，同时作为 Claude Code 插件与 DeepSeek Harness 插件分发。实施编排 + 三轴 diff 评审 + 复杂度审计 + 突变测试，零外部依赖。 |
| 10 | [xyavid/dsh-prompt-polish](https://github.com/xyavid/dsh-prompt-polish) | 2 | 2026-09-11 | 2026-09-25 | DeepSeek Harness Web 插件：输入框模型名旁的小星星按钮，一键把草稿改写成结构化的可执行提示词并写回 |
| 11 | [ZhaoAndy821/dsh-zcode-connector](https://github.com/ZhaoAndy821/dsh-zcode-connector) | 2 | 2026-09-25 | 2026-09-25 | Drive the ZCode (Z.ai) desktop client as a model channel from DeepSeek Harness over CDP — the app mints its own attestation, so account-bound quota is spent by the first-party client. |
| 12 | [CheeseFox259/dsh-better-composer](https://github.com/CheeseFox259/dsh-better-composer) | 1 | 2026-09-22 | 2026-09-25 | DSH Web Composer enhancement: live Markdown presentation, paste-to-clip, and a full-history context map — all through public composer seams. |
| 13 | [CroissanTTs/dsh-harness-jarvis](https://github.com/CroissanTTs/dsh-harness-jarvis) | 1 | 2026-09-24 | 2026-09-25 | 贾维斯 · 常驻桌面的悬浮窗桌面助手 / 桌面宠物 —— DSH Desktop 的粒子光球：快速审批权限、⌃⌥J 快速对话。A floating-window desktop assistant & desktop pet for DSH Desktop. |
| 14 | [Dessera/dsh-ultracode](https://github.com/Dessera/dsh-ultracode) | 1 | 2026-09-19 | 2026-09-25 | Ultracode session mode for DeepSeek Harness: a three-position composer control that arms automatic multi-agent workflow orchestration by injecting an arming banner ahead of the user's own message. |
| 15 | [EphoReal/my-skin-for-DeepSeek-Harness](https://github.com/EphoReal/my-skin-for-DeepSeek-Harness) | 1 | 2026-08-15 | 2026-09-25 | DeepSeek Harness 皮肤扩展插件 Skin plugin |
| 16 | [ggfgfgf-on/dsh-trajectory-anchor](https://github.com/ggfgfgf-on/dsh-trajectory-anchor) | 1 | 2026-09-25 | 2026-09-25 | A DeepSeek Harness plugin that stops agents from drifting off-task: it locks in the good first-round behavior, watches every step, and pulls the agent back when it degrades. |
| 17 | [Hercules-debug/huixuan-assistant](https://github.com/Hercules-debug/huixuan-assistant) | 1 | 2026-09-24 | 2026-09-25 | 面向消费者的商品选购辅助工具 · DeepSeek Harness 插件 |
| 18 | [huzhengbang2007/dsh-orca-glass](https://github.com/huzhengbang2007/dsh-orca-glass) | 1 | 2026-09-25 | 2026-09-25 | Liquid-glass SVG refraction layer for DeepSeek Harness Web + orca-scene skin |
| 19 | [Ink-dark/dsh-adversarial-review-preset](https://github.com/Ink-dark/dsh-adversarial-review-preset) | 1 | 2026-09-25 | 2026-09-25 | DeepSeek Harness agent preset for adversarial review: presumes the artifact is wrong, demands a citable authority and file:line for every finding, refuses to edit tests to pass, and asks before changing anything.DeepSeek Harness「对抗式审查」Agent 预设：预设被审查对象是错的，每条结论必须给出权威依据与文件行号；严禁改测试让其通过，修改任何文件前先征求同意。 |
| 20 | [jghwwnq/dsh-model-audit](https://github.com/jghwwnq/dsh-model-audit) | 1 | 2026-09-25 | 2026-09-25 | Unofficial local plugin for DeepSeek Harness: compares the requested model with the model the upstream response declares (DeepSeek Messages, GPT Responses, Chat Completions). |
| 21 | [mattcarvercom/dsh-unified-memory](https://github.com/mattcarvercom/dsh-unified-memory) | 1 | 2026-09-25 | 2026-09-25 | Long-term memory for DeepSeek Harness in Claude Code's format: private, overlay, or shared with Claude Code, with provenance on every file |
| 22 | [nzl153/dsh-prompt-suggestions](https://github.com/nzl153/dsh-prompt-suggestions) | 1 | 2026-09-25 | 2026-09-25 | DeepSeek Harness 输入框的下一句建议：助手回复完，空输入框里出现一句灰色建议，按 Tab 填入 |
| 23 | [Rice00/dsh-tree-view](https://github.com/Rice00/dsh-tree-view) | 1 | 2026-09-22 | 2026-09-25 | Tree-view conversation branching for DeepSeek Harness: one sidebar entry, branch and switch versions inside a tree, promote a branch to a formal session, rename branches. A fork of dsh-plugin-message-edit (MIT). |
| 24 | [SenmuuuuW/dsh-diagnostic-tutor](https://github.com/SenmuuuuW/dsh-diagnostic-tutor) | 1 | 2026-09-24 | 2026-09-25 | Diagnosis-first AI learning runtime for DeepSeek Harness — map what you need, learn interactively, and move to the next best step. |
| 25 | [wangcangxing/ai-eight-honors-eight-shames](https://github.com/wangcangxing/ai-eight-honors-eight-shames) | 1 | 2026-09-20 | 2026-09-25 | 面向 AI 编码代理的八荣八耻工作准则 — DSH 原生 Skill，含安装与配置指南 |
| 26 | [xbzbing/dsh-git-panel](https://github.com/xbzbing/dsh-git-panel) | 1 | 2026-09-24 | 2026-09-25 | DSH 插件：Web GUI 里的 IDE 风格 Git 面板——分支/提交历史总览、变更提交与 amend、代码与图片新旧差异对照、输入框分支标记 \| DSH plugin: an IDE-style Git panel for the Web GUI — branches & history, commit/amend for local changes, code & image before/after diffs, an input-bar branch marker |
| 27 | [yembors64632/dsh-connect](https://github.com/yembors64632/dsh-connect) | 1 | 2026-09-25 | 2026-09-25 | DSH 插件：一个插件接入 WorkBuddy / Trae / Qoder 三渠道模型，带统一状态面板、一键签到与渠道管理 |
| 28 | [3289192-bot/dsh-cache-bricks](https://github.com/3289192-bot/dsh-cache-bricks) | 0 | 2026-09-24 | 2026-09-25 | Cache Bricks for DeepSeek Harness — visualize prompt-cache health and request activity. |
| 29 | [Au1314/dsh-style-hub](https://github.com/Au1314/dsh-style-hub) | 0 | 2026-09-25 | 2026-09-25 | deepseek harness主题插件 |
| 30 | [azazo1/dsh-deep-diving-back](https://github.com/azazo1/dsh-deep-diving-back) | 0 | 2026-09-25 | 2026-09-25 | 把 DSH 0.1.6 及以前那个蓝色流光的深度求索中运行标志加回来, 并保留 steer 是否已并入请求的上下位置语义 |
| 31 | [Azhe0306/dsh-connectors](https://github.com/Azhe0306/dsh-connectors) | 0 | 2026-09-25 | 2026-09-25 | DSH 连接器三件套：会话标题栏余额小组件 · 浏览器自动化接入 · Windows 桌面操控（截屏/窗口/鼠标/键盘）。 |
| 32 | [Bingtang1019/dsh-ppt-fusion](https://github.com/Bingtang1019/dsh-ppt-fusion) | 0 | 2026-09-22 | 2026-09-25 | dsh-ppt-fusion (FlashMade): fuse pptwise DSH-native front end with ppt-master native DrawingML engine |
| 33 | [blueberrymaid/dsh-midtalk](https://github.com/blueberrymaid/dsh-midtalk) | 0 | 2026-09-24 | 2026-09-25 | 给正在跑的回合插话：/say 无损，/cut 中止当前步并留下恢复卡。Interject into a running DSH turn without losing work: /say queues losslessly at the next step boundary, /cut aborts the step and leaves a structured recovery card. |
| 34 | [chenpengfei/dsh-daily-brief](https://github.com/chenpengfei/dsh-daily-brief) | 0 | 2026-09-25 | 2026-09-25 | 每日简报的 DeepSeek Harness 插件 |
| 35 | [ClearLeaf13/dsh-local-llm-connect](https://github.com/ClearLeaf13/dsh-local-llm-connect) | 0 | 2026-09-23 | 2026-09-25 | 把本地 llama.cpp 管理器里的模型接入 DeepSeek Harness — bring local llama.cpp manager models into DeepSeek Harness |
| 36 | [CNyaotian-Lunar/dsh-peak-gate](https://github.com/CNyaotian-Lunar/dsh-peak-gate) | 0 | 2026-09-25 | 2026-09-25 | DSH 插件：按 DeepSeek 峰谷分时计价，在高峰时段给 token 花销踩刹车（拦大任务 / 压缩输出上限 / 让模型少说废话），并提供一键放行口令 |
| 37 | [CNyaotian-Lunar/dsh-time-inject](https://github.com/CNyaotian-Lunar/dsh-time-inject) | 0 | 2026-09-25 | 2026-09-25 | DSH 插件：每个 turn 首个 step 往模型上下文追加一条单行中文时间读数（当前时间 / 星期 / 时区 / 距上条消息） |
| 38 | [ColorlessBoy/dsh-opencode-usage](https://github.com/ColorlessBoy/dsh-opencode-usage) | 0 | 2026-09-22 | 2026-09-25 | See your OpenCode Go quota before it runs out — one quiet pill in the DeepSeek Harness Web composer dock. |
| 39 | [CSlawyer1985/dsh-jev-router](https://github.com/CSlawyer1985/dsh-jev-router) | 0 | 2026-09-25 | 2026-09-25 | DSH 插件 · 用 Jev（TypeSafe System One）判定推理强度：默认只切思考强度（零缓存代价），自动模型路由出厂关闭 + 硬门禁 + 成本闸。作者 chenshi.ai |
| 40 | [damlys99/dsh-morning-paper](https://github.com/damlys99/dsh-morning-paper) | 0 | 2026-09-25 | 2026-09-25 | A computed front page for a session you left running: what happened, what broke, and what is waiting on you — folded from the durable session log, never written by a model. |
| 41 | [deskomor/dsh-sub-providers](https://github.com/deskomor/dsh-sub-providers) | 0 | 2026-09-25 | 2026-09-25 | Clean-room DSH plugin: use Claude and ChatGPT (Codex) subscriptions as LLM provider routes — OAuth login, streaming chat, model catalogs, and subscription usage display. No API keys. |
| 42 | [EnRaiha/dsh-drill-kit](https://github.com/EnRaiha/dsh-drill-kit) | 0 | 2026-09-25 | 2026-09-25 | The drill for DeepSeek Harness: a bug-fix pipeline with gates, evidence and a reviewed PR — plugin, shared c2g/PR cores, Kilo+Hermes frontends, docs |
| 43 | [EphoReal/Tokan-dsh-token-analytics](https://github.com/EphoReal/Tokan-dsh-token-analytics) | 0 | 2026-08-31 | 2026-09-25 | 精准 Token 洞察，实时追踪，智能优化提示和用量归因 Sharp token insights, real‑time tracking, smart optimization signals & attribution  |
| 44 | [etony668/dsh-balance](https://github.com/etony668/dsh-balance) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek API 余额常驻显示（侧边栏「设置」旁）· DeepSeek API balance badge beside Settings in the DSH sidebar |
| 45 | [fellow99/dsh-desktop](https://github.com/fellow99/dsh-desktop) | 0 | 2026-08-14 | 2026-09-25 | An Electron-based desktop wrapper for deepseek-harness. |
| 46 | [frederico-kluser/dsh-guard-messenger](https://github.com/frederico-kluser/dsh-guard-messenger) | 0 | 2026-08-20 | 2026-09-25 | Plugin Cordis para o DeepSeek Harness: controle remoto pelo Telegram — túnel autenticado, chats de agentes, worktrees e métricas de tarefas. |
| 47 | [fzy3232/dsh-chinese-language](https://github.com/fzy3232/dsh-chinese-language) | 0 | 2026-09-19 | 2026-09-25 | Keep DeepSeek Harness agents thinking and answering in Simplified Chinese: a token-lean system-prompt section plus a runtime-context reminder that also reaches long or resumed sessions. |
| 48 | [GitHub-Xzhi/dsh-simple-worktree-plus](https://github.com/GitHub-Xzhi/dsh-simple-worktree-plus) | 0 | 2026-09-25 | 2026-09-25 | dsh-simple-worktree加强版 |
| 49 | [H-xie/zotero4DSH](https://github.com/H-xie/zotero4DSH) | 0 | 2026-09-25 | 2026-09-25 | Zotero 文献全文检索插件（DeepSeek Harness plugin） |
| 50 | [havoc-rao/dsh-git-commit-agent](https://github.com/havoc-rao/dsh-git-commit-agent) | 0 | 2026-09-25 | 2026-09-25 | DSH plugin: a dedicated agent that plans exact Git commits from real repo state, binds approval to an immutable plan revision, and commits via a restricted, verified git executor. |
| 51 | [hbgdjb/dsh-mimo-quota](https://github.com/hbgdjb/dsh-mimo-quota) | 0 | 2026-09-25 | 2026-09-25 | MIMO Quota Panel —— DeepSeek Harness 的模型额度面板：会话日志逐调用自动记账，一屏展示 Token 用量、消费金额、请求次数、趋势波形、模型构成，支持按模型/粒度/时间范围/项目·对话统计切换，内置可编辑定价与 DeepSeek 峰谷价自动套算。 |
| 52 | [Hermannmayer/dsh-worktree-bar](https://github.com/Hermannmayer/dsh-worktree-bar) | 0 | 2026-09-25 | 2026-09-25 | Workspace and branch status above the composer, a start-screen git worktree checkbox, and per-project worktree preparation - for the DeepSeek Harness Web UI. |
| 53 | [huanxingyunmo/dsh-inform](https://github.com/huanxingyunmo/dsh-inform) | 0 | 2026-08-25 | 2026-09-25 | dsh-inform 是一款为 deepseek harness开发的任务提醒插件，能够在 DSH 完成任务、需要批准 或 需要回答 时自动调用系统通知发出提醒 |
| 54 | [HunLongBaiZe/dsh-deep-purge](https://github.com/HunLongBaiZe/dsh-deep-purge) | 0 | 2026-09-25 | 2026-09-25 | 彻底删除 DSH 会话：日志 + 投影缓存 + 工作区记账 + 引用计数式附件回收 \| Thorough session purge for DeepSeek Harness |
| 55 | [Iambatman1928/dsh-lawkb-ui](https://github.com/Iambatman1928/dsh-lawkb-ui) | 0 | 2026-09-25 | 2026-09-25 | ???????? lawkb-ui:??????????????????? AI ??(DSH ??) |
| 56 | [itchenshi/dsh-gateway-models](https://github.com/itchenshi/dsh-gateway-models) | 0 | 2026-09-21 | 2026-09-25 | DeepSeek Harness plugin for gateway routes: declares the OpenCode Go and Command Code route protocol + endpoint (so the API address never has to be typed) and completes their model lists. The OpenCode Go half puts DeepSeek V4.1 first; the Command Code half syncs all 81 models from its public catalog. Also adds the x-opencode-session header. |
| 57 | [jackControls/dsh-nbcad-plate](https://github.com/jackControls/dsh-nbcad-plate) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness plugin: 2D plate prints to noBS CAD scripts and STEP files (skill + CAD tools + native print probe) |
| 58 | [janpauldahlke/dsh-slot-health](https://github.com/janpauldahlke/dsh-slot-health) | 0 | 2026-09-24 | 2026-09-25 | DeepSeek Harness (dsh) plugin: live local LLM endpoint health in the web rightbar. llama.cpp slots (busy/TTFT/wedged, /metrics) + Ollama MODELS (loaded vs empty). Engine fingerprinted by response shape. Installable dsh.bundle. |
| 59 | [jwhs648/dsh-team-lead](https://github.com/jwhs648/dsh-team-lead) | 0 | 2026-09-23 | 2026-09-25 | DeepSeek Harness 智能体团队的队长 skill + 队员模型路由插件（member-model）：让队长按任务分工，为每位 fresh 队员指定并核实模型。支持 dsh 0.1.7-rc.1 / rc.2。 |
| 60 | [kahomesl/dsh-client-ui-job-stats](https://github.com/kahomesl/dsh-client-ui-job-stats) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness 的会话后台任务统计：右侧边栏的一个标签页，累计记录本会话跑过的每一个任务。 |
| 61 | [Lichangfocus/focus-workspace](https://github.com/Lichangfocus/focus-workspace) | 0 | 2026-09-25 | 2026-09-25 | 开源个人 Agent：基于 DeepSeek Harness 打造最好用的、面向超级用户的个人 Agent 产品 |
| 62 | [Locietta/dsh-rewind-retry](https://github.com/Locietta/dsh-rewind-retry) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness plugin: Retry, Edit prompt, and Continue actions for chat turns (rewind by forking the session) |
| 63 | [lyaoliu/dsh-approval-core](https://github.com/lyaoliu/dsh-approval-core) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness 自动审批决策管道：例行沙箱越界自动放行，危险/拿不准/失败一律转人工（fail-safe）；学习受约束可一键清空；含分级配置 UI 与块级撤销审查视图。fork 自 dsh-approval-gate 的加固版。 |
| 64 | [martyartem/dsh-plannotator](https://github.com/martyartem/dsh-plannotator) | 0 | 2026-09-25 | 2026-09-25 | Review a file, a folder or a web page in the Plannotator browser UI from DeepSeek Harness, and get the annotations back as a message. |
| 65 | [masknull/dsh-acl-sandbox-patch](https://github.com/masknull/dsh-acl-sandbox-patch) | 0 | 2026-09-25 | 2026-09-25 | DSH 0.1.7 Windows ACL 沙箱在非系统盘工作区下全部命令 spawn 前失败的临时修复插件——不动任何系统 ACL，恢复 workspace-write。 \| Temporary fix for the DSH 0.1.7 Windows ACL sandbox failing on non-system-drive workspaces (grantWrite / SetNamedSecurityInfoW Win32 5) — restores workspace-write without touching system ACLs. 支持 DSH 0.1.7-rc.1+。 |
| 66 | [MCXCC303/dsh-clawd](https://github.com/MCXCC303/dsh-clawd) | 0 | 2026-09-25 | 2026-09-25 | A pixel pet for the DeepSeek Harness Web GUI. |
| 67 | [mengqi1436/dsh-db-tool](https://github.com/mengqi1436/dsh-db-tool) | 0 | 2026-09-25 | 2026-09-25 | DSH plugin: chat-driven database admin tool (8 databases, per-project grants, danger confirmation, sidebar console) |
| 68 | [mengqi1436/DSH-Rtk-rewrite](https://github.com/mengqi1436/DSH-Rtk-rewrite) | 0 | 2026-09-25 | 2026-09-25 | DSH中通过Rtk进行改写 |
| 69 | [NickyWooden/dsh-halo](https://github.com/NickyWooden/dsh-halo) | 0 | 2026-09-23 | 2026-09-25 | deepseek harness plugin for halo blog,Publish session as a blog with one click |
| 70 | [Number444/dsh-kimicode-usage](https://github.com/Number444/dsh-kimicode-usage) | 0 | 2026-09-25 | 2026-09-25 | A DeepSeek Harness (dsh) plugin that shows your Kimi Code quota |
| 71 | [omorisunn/dsh-vibrancy](https://github.com/omorisunn/dsh-vibrancy) | 0 | 2026-09-25 | 2026-09-25 | Frosted-glass (acrylic) surfaces for the DeepSeek Harness Desktop app - a plugin-only wallpaper blur, no shell change required |
| 72 | [oranskyx/dsh-tingxue](https://github.com/oranskyx/dsh-tingxue) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness 双模式插件：人格化 QQ 对话（LanceDB 长期记忆 + 自建关系图谱）+ 用完即焚的隔离文件处理会话 |
| 73 | [qcsjjjjj/dsh-github-accel](https://github.com/qcsjjjjj/dsh-github-accel) | 0 | 2026-09-25 | 2026-09-25 | GitHub accelerator for DSH: hosts takeover + per-domain loopback SNI passthrough (no TLS MITM, no certificate install), a local CONNECT proxy and a PAC fallback. |
| 74 | [qcsjjjjj/dsh-planner](https://github.com/qcsjjjjj/dsh-planner) | 0 | 2026-09-25 | 2026-09-25 | Calendar + per-day plan cards for the DeepSeek Harness Web GUI, with recurring plans and model-facing tools for the agent. No build step, no runtime dependencies. |
| 75 | [qikairo7/dsh-gemini-pool](https://github.com/qikairo7/dsh-gemini-pool) | 0 | 2026-09-25 | 2026-09-25 | DSH 用上 Gemini 的方式 —— 让你的 Google AI Pro 订阅成为编程模型池：多模态 / 前端生成 / 生图 / 多账号调度 |
| 76 | [qikairo7/dsh-usage-panel](https://github.com/qikairo7/dsh-usage-panel) | 0 | 2026-09-24 | 2026-09-25 | Session-level token usage & cost panel plugin for DeepSeek Harness (DSH) |
| 77 | [refkitjs/dsh-plugin](https://github.com/refkitjs/dsh-plugin) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness (dsh) plugin for refkit: license-normalized creative reference search across 23 sources, a strict-deny use-gate, and a web card with license and use-verdict badges |
| 78 | [renjie2026/dsh-skills](https://github.com/renjie2026/dsh-skills) | 0 | 2026-09-25 | 2026-09-25 | 给 AI 助手的 DeepSeek Harness 插件与皮肤开发技能：dsh-plugin-author（插件全流程 + 8 类真实故障模式）+ dsh-theme-skin-author（皮肤 JSON/token 契约与配色规范） \| Agent skills for authoring DeepSeek Harness plugins and theme skins |
| 79 | [renjie2026/dsh-theme-gallery](https://github.com/renjie2026/dsh-theme-gallery) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness 桌面版主题皮肤画廊插件 —— 一个插件管全部皮肤（JSON 数据驱动，内置 山青婷彩 / 梦海游鱼），npm/tarball 安装零构建授权 \| A community theme gallery plugin for DeepSeek Harness: JSON-defined skins with full-screen coverage |
| 80 | [s1lverex/dsh-plugin-blender](https://github.com/s1lverex/dsh-plugin-blender) | 0 | 2026-09-25 | 2026-09-25 | Blender for DeepSeek Harness: headless render/convert tools for 3D models plus a three.js viewer panel in the workbench sidebar |
| 81 | [SanYe-SanJiu/dsh-power-switch](https://github.com/SanYe-SanJiu/dsh-power-switch) | 0 | 2026-09-22 | 2026-09-25 | 一个Deepseek Harness 的进程结束插件，在左下角会有关闭按钮，本插件还同时有页面切换，在应用模式时关闭进程会自动关闭当前页面，标签页模式则不行 |
| 82 | [sequoiayunus-hue/dsh-subagent-model-config](https://github.com/sequoiayunus-hue/dsh-subagent-model-config) | 0 | 2026-09-25 | 2026-09-25 | Configure per-teammate model & reasoning effort for DeepSeek Harness native agent teams — settings UI, zero official-file modification. 为 DSH 原生 Team 编队队员可视化配置模型与推理档位。 |
| 83 | [shangheweibao/dsh-theme-gallery](https://github.com/shangheweibao/dsh-theme-gallery) | 0 | 2026-09-25 | 2026-09-25 | A community theme gallery for DeepSeek Harness: JSON-defined skins with full-screen coverage and sidebar scenery, selectable from the sidebar panel |
| 84 | [snylonue/dsh-direnv](https://github.com/snylonue/dsh-direnv) | 0 | 2026-09-25 | 2026-09-25 | direnv support for dsh |
| 85 | [TianJie52009/Tdsh-emoji](https://github.com/TianJie52009/Tdsh-emoji) | 0 | 2026-09-24 | 2026-09-25 | Add widely-supported Unicode emoji to DeepSeek Harness (dsh) replies; coexists with dsh-kaomoji. |
| 86 | [toddpan/dsh-webapi](https://github.com/toddpan/dsh-webapi) | 0 | 2026-09-03 | 2026-09-25 | DSH plugin — drive DeepSeek Harness over HTTP: 47 REST + SSE routes (workspaces, sessions, streaming, stats, todos, models, settings, skills, files) + OpenAI-compatible /chat/completions. / DSH 插件：把 DSH 开放成 47 条 REST + SSE 接口与 OpenAI 兼容端点，供三方客户端与 Agent 集成。 |
| 87 | [toddpan/dsh-xiaozhi](https://github.com/toddpan/dsh-xiaozhi) | 0 | 2026-09-25 | 2026-09-25 | 把小智（Xiaozhi）语音助手接入 DSH Web：DSH 作为 MCP 工具提供方，把 35 个 DSH Web 接口封装成 16 个语音友好工具，自带 DSH Web 设置页。 · Connect the Xiaozhi voice assistant to DSH Web as an MCP tool provider: 35 DSH Web endpoints woven into 16 voice-friendly tools, with a DSH Web settings page. |
| 88 | [VCPr0j3k7/dsh-desktop-settings](https://github.com/VCPr0j3k7/dsh-desktop-settings) | 0 | 2026-09-25 | 2026-09-25 | Settings page for the DeepSeek Harness desktop shell — README translation, GitHub proxy, market cache, and account top-up |
| 89 | [VCPr0j3k7/dsh-index-tap-bridge](https://github.com/VCPr0j3k7/dsh-index-tap-bridge) | 0 | 2026-09-25 | 2026-09-25 | Make tapIndex-based DSH plugins work in the official DeepSeek Harness desktop shell |
| 90 | [VCPr0j3k7/dsh-mcp-manager](https://github.com/VCPr0j3k7/dsh-mcp-manager) | 0 | 2026-09-25 | 2026-09-25 | Graphical MCP server manager for the DeepSeek Harness desktop shell — add, remove, toggle, test, and scan Model Context Protocol servers |
| 91 | [VCPr0j3k7/dsh-plugin-market](https://github.com/VCPr0j3k7/dsh-plugin-market) | 0 | 2026-09-25 | 2026-09-25 | Discover and install DSH plugins from the GitHub topic dsh-plugin — browse, read READMEs with optional Chinese translation, install in one click |
| 92 | [VCPr0j3k7/dsh-skill-manager](https://github.com/VCPr0j3k7/dsh-skill-manager) | 0 | 2026-09-25 | 2026-09-25 | Skill manager UI for the DeepSeek Harness desktop shell — list, create, import, and open agent skills |
| 93 | [vladimirzz487/dsh-medical-ui-design](https://github.com/vladimirzz487/dsh-medical-ui-design) | 0 | 2026-09-25 | 2026-09-25 | 个人设计且在使用的医院内部软件界面设计规范 |
| 94 | [weibaohui/dsh-gaokao](https://github.com/weibaohui/dsh-gaokao) | 0 | 2026-09-18 | 2026-09-25 | dsh 插件 · 梦回高三：桌面小黑板高考倒计时（双击收成竖条），AI 干活时随机抽背知识点卡；Markdown 开放知识卡框架——按 学科/分类 放 md 即自动加载，支持关联跳转/收藏/重点学科/导入自己的知识库。 |
| 95 | [windwhiterain/dsh-model-proxy](https://github.com/windwhiterain/dsh-model-proxy) | 0 | 2026-09-25 | 2026-09-25 | Per-model outbound proxy routing for DeepSeek Harness: send only the models you name through a proxy, with a direct fallback while it is unavailable. |
| 96 | [wjingshan/dsh-plan-guard](https://github.com/wjingshan/dsh-plan-guard) | 0 | 2026-09-25 | 2026-09-25 | DSH 的规划 skill + 写时断言插件：前者让模型动手前想清楚，后者在它重踩旧坑时当场拦住。不建通用体系，只固化真实发生过的事。 |
| 97 | [xiaozhuyuqing/dsh-repeat-guard](https://github.com/xiaozhuyuqing/dsh-repeat-guard) | 0 | 2026-09-18 | 2026-09-25 | Tell your deepseek-v4.1-flash: "shut up! Stop looping!"  |
| 98 | [xs2966/dsh-termux-notify](https://github.com/xs2966/dsh-termux-notify) | 0 | 2026-09-25 | 2026-09-25 | Deepseek Harness在Temux环境中使用的通知插件，通过Termux:API给手机发送消息通知或TTS语音通知。 |
| 99 | [youbuwei/dsh-zhipu-mcp](https://github.com/youbuwei/dsh-zhipu-mcp) | 0 | 2026-09-25 | 2026-09-25 | 智谱 BigModel MCP（联网搜索/网页读取/开源仓库）的 DeepSeek Harness 独立插件 · Zhipu BigModel MCP as a standalone DeepSeek Harness plugin |
| 100 | [zchuxi/dsh-restart-task](https://github.com/zchuxi/dsh-restart-task) | 0 | 2026-09-25 | 2026-09-25 | DSH Web 插件：三段式回合恢复（同轮静默重试 / 输出超限同轮续写 / 可选新一轮继续），输入框为空时发送键变成「继续」。A three-tier recovery policy for broken turns for DSH. |
| 101 | [ZhangBo-cmd/dsh-pricing-badge](https://github.com/ZhangBo-cmd/dsh-pricing-badge) | 0 | 2026-09-25 | 2026-09-25 | DeepSeek Harness (DSH) plugin: shows the DeepSeek API peak/off-peak pricing period, current model output price, and account balance in the Web UI. Click to open a price reference for DeepSeek and third-party models. |
| 102 | [zhaoguoqiang-hub/dsh-soul-engine](https://github.com/zhaoguoqiang-hub/dsh-soul-engine) | 0 | 2026-09-25 | 2026-09-25 | 可审计的明文 Markdown 记忆账本插件（DSH / DeepSeek Harness）：14 个 soul_* 工具 + 轮首账本注入 + 零 token 自维护 + 心跳唤醒 |
| 103 | [zlZayn/dsh-workbuddy-bridge](https://github.com/zlZayn/dsh-workbuddy-bridge) | 0 | 2026-09-25 | 2026-09-25 | DSH 插件：把 WorkBuddy 桌面 App 里的模型接入 DeepSeek Harness，零配置直接用。（原生嵌入"设置-插件-插件配置"） |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Bigesila-B/dsh-media-forge
- birew83538-oss/dsh-chat-thinking-editor
- ClearLeaf13/dsh-llamacpp-connect
- csiroqa/dsh-archive-viewer
- csiroqa/dsh-backup-sync
- csiroqa/dsh-command-opt
- csiroqa/dsh-hotkeys
- csiroqa/dsh-plugin-forge
- csiroqa/dsh-plugin-usage-report
- csiroqa/dsh-schedule
- d4551/cloudflare-dsh
- d4551/DeepTail
- dingminhua/dsh-sub-cli
- fellow99/deepseek-harness-desktop
- fthuu/my-skin-for-DeepSeek-Harness
- fthuu/Tokan-dsh-token-analytics
- hpyperry/dsh-cajita
- hpyperry/dsh-ref-lib
- IQzhan/deepseek-harness-model-router
- itchenshi/dsh-opencode-go-path
- jackovibe/dsh-codex-pin
- kurenai-studio/kurenai
- mobaixingyao/dsh-inform
- NEVSTOP-LAB/dsh-version-inspector
- nmsl1234/dsh-privacy-gate
- Saidoua/dsh-rs
- shaun5297/dsh-launcher
- w2310670047-code/ai-eight-honors-eight-shames
- zaimokuza-yoshiteru/dsh-plugin-hub
