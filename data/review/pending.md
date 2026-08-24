# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-24**
- 快照日期 / Snapshot date: **2026-08-24 (UTC)**
- 待审核 / Pending: **351**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **79**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`
- 非插件形态 / market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ 加入 `curated.json` 的 `market_exclusions`（市场不能包含市场）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`
- Non-plugin form / market class (plugin market, store, skill mall, desktop with a built-in market) → `market_exclusions` in `curated.json` (the market cannot include another market)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [titanwings/distilly](https://github.com/titanwings/distilly) | 23902 | 2026-03-30 | 2026-08-24 | Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）. |
| 2 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | 19594 | 2026-08-13 | 2026-08-24 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| 3 | [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) | 5893 | 2026-08-12 | 2026-08-24 | DeepSeek Harness（DSH）Web 插件聚合生态包 · 一切皆插件，创意工坊分发（dsh-market.com） |
| 4 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | 3340 | 2024-08-29 | 2026-08-24 | ReMe: Memory Management Kit for Agents - Remember Me, Refine Me. |
| 5 | [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2496 | 2026-02-09 | 2026-08-24 | A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex), backed by Markdown and Milvus. |
| 6 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) | 68 | 2026-08-16 | 2026-08-24 | 🖥️ Agent-project workbench for DeepSeek Harness — sidebar app drawer + dockable split workspace + a live control room watching every project. |
| 7 | [1692775560/dsh-Mimir-Academic-research](https://github.com/1692775560/dsh-Mimir-Academic-research) | 53 | 2026-08-20 | 2026-08-24 | Mimir — 一站式科研工作台插件：LaTeX 论文边写边编译、arXiv 文献管理、实验追踪、指标图表、GPU 服务器 SSH 任务编排，管理科研全周期。An open-source research workbench plugin for the whole research cycle. |
| 8 | [JingxuanC/causal-memory](https://github.com/JingxuanC/causal-memory) | 47 | 2026-07-26 | 2026-08-24 | Causal memory layer for AI agents — MCP server that records decision→outcome relationships. Survives compaction. |
| 9 | [BeforeWave/dsh-with-chatgpt](https://github.com/BeforeWave/dsh-with-chatgpt) | 26 | 2026-08-21 | 2026-08-24 | Bring ChatGPT’s reasoning to your local codebase. Work directly, or delegate larger tasks to DSH. |
| 10 | [lizhiyao/oh-my-knowledge](https://github.com/lizhiyao/oh-my-knowledge) | 17 | 2026-03-24 | 2026-08-24 | OMK — Evidence-backed evaluation and observability for prompts, RAG, skills, agents, and workflows. Native Codex, Claude Code, and DeepSeek Harness support. |
| 11 | [plolpl789/dsh-raw-html](https://github.com/plolpl789/dsh-raw-html) | 12 | 2026-08-21 | 2026-08-24 | VCP visual-synesthesia protocol plugin for DeepSeek Harness: render agent HTML output as real UI (cards / KaTeX math / Mermaid diagrams / built-in calligraphy fonts / zero-JS interactions), plug-and-play on any DSH environment |
| 12 | [Rain-kl/dsh-preset-plus](https://github.com/Rain-kl/dsh-preset-plus) | 12 | 2026-08-24 | 2026-08-24 | DSH 预设编辑器插件, 支持一键破甲. |
| 13 | [KelaoHu/dsh-lowtide](https://github.com/KelaoHu/dsh-lowtide) | 10 | 2026-08-23 | 2026-08-24 | Time-shifting task delegation for DeepSeek Harness (dsh): plan tasks at leisure, they run unattended off-peak, come back to a report. Human-adjudicated, desktop + web. |
| 14 | [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) | 10 | 2026-08-14 | 2026-08-24 | 一个DSH局域网内访问插件：让 DeepSeek Harness 可在局域网内被其他设备访问的 DSH 插件。同一局域网下，手机/平板/电脑打开浏览器即可直接访问你某台设备上的 DSH——无需 SSH、无需内网穿透，npm 一键安装。 |
| 15 | [daha1216/dsh-adult-tension](https://github.com/daha1216/dsh-adult-tension) | 9 | 2026-08-19 | 2026-08-24 | DeepSeek Harness 成年人(18+/adult)互动叙事 Skill：NPC 活人感（有记忆/立场/底线）、自带破甲、数百项素材库、随机开局可预锁、时间推进、全维 YAML 存档。 |
| 16 | [fishzjp/qa-skills](https://github.com/fishzjp/qa-skills) | 7 | 2026-06-24 | 2026-08-24 | 让 AI 像资深测试工程师一样工作：全生命周期 QA Agent Skills 框架——方法论 + 10 Skills + 可复现 Benchmark（Claude Code 等 Agent 可用） |
| 17 | [Chinesezjc/dsh-tool-todo-tree](https://github.com/Chinesezjc/dsh-tool-todo-tree) | 6 | 2026-08-13 | 2026-08-24 | Nested (tree-shaped) todo_write tool plugin for DeepSeek Harness (DSH) — the mutually-exclusive alternative to the flat dsh-tool-todo |
| 18 | [iamfitzwu/dsh-localhost-cost](https://github.com/iamfitzwu/dsh-localhost-cost) | 5 | 2026-08-24 | 2026-08-24 | DeepSeek cost projection plugin for local-model developers |
| 19 | [lo2589/deepseek-harness-media](https://github.com/lo2589/deepseek-harness-media) | 5 | 2026-08-14 | 2026-08-24 | use glm/minimax/openai/claude api in your deepseek harness |
| 20 | [sensedeal/cue-skills](https://github.com/sensedeal/cue-skills) | 5 | 2026-05-20 | 2026-08-24 | Cue Skills for Agents |
| 21 | [monotykamary/dsh-factory](https://github.com/monotykamary/dsh-factory) | 4 | 2026-08-23 | 2026-08-24 | Durable dependency-graph task factory for DeepSeek Harness: recurring Agent work, safe checkout lanes, first-class queues, Triage, and artifacts. |
| 22 | [ai4paper/apaper-plugin](https://github.com/ai4paper/apaper-plugin) | 3 | 2026-05-15 | 2026-08-24 | Claude Code plugin for academic paper authoring: bundles writing/figure/PDF skills with the apaper-mcp server. |
| 23 | [EasyTZ/Deepseek-Harness-Desktop](https://github.com/EasyTZ/Deepseek-Harness-Desktop) | 3 | 2026-08-20 | 2026-08-24 | Deepseek-Harness-Desktop |
| 24 | [edge-sky/dsh-oauth-adapter](https://github.com/edge-sky/dsh-oauth-adapter) | 3 | 2026-08-22 | 2026-08-24 | A OAuth adapter for DSH |
| 25 | [Lukeknow0/dsh-side-chat](https://github.com/Lukeknow0/dsh-side-chat) | 3 | 2026-08-21 | 2026-08-24 | Read-only side chat plugin for DeepSeek Harness (DSH) — ask temporary questions with inherited context while the parent agent keeps running. |
| 26 | [lxfu1/dsh-plugin-chart](https://github.com/lxfu1/dsh-plugin-chart) | 3 | 2026-08-21 | 2026-08-24 | DeepSeek Harness plugin that bundles the AntV chart visualization skill and a native chart-generation tool. |
| 27 | [NOirBRight/dsh-mobile](https://github.com/NOirBRight/dsh-mobile) | 3 | 2026-08-15 | 2026-08-24 | Android client and Host pairing plugin for DeepSeek Harness |
| 28 | [rayafriandion/dsh-oc-tui](https://github.com/rayafriandion/dsh-oc-tui) | 3 | 2026-08-15 | 2026-08-24 | The plugin can use terminal UI like opencode/claude code and other CLI/TUI agents. |
| 29 | [vonweller/dsh-skillhub](https://github.com/vonweller/dsh-skillhub) | 3 | 2026-08-24 | 2026-08-24 | Browse skillhub.cn skills and install selected ones into ~/.dsh/skills |
| 30 | [yinhcao/yinchao-ai-music-skill](https://github.com/yinhcao/yinchao-ai-music-skill) | 3 | 2026-08-20 | 2026-08-24 | AI 音乐生成 Agent Skill：支持文字/歌词生成歌曲、参考音频创作、BGM 与歌曲续写 |
| 31 | [yyyy231209/ai-company-framework](https://github.com/yyyy231209/ai-company-framework) | 3 | 2026-08-18 | 2026-08-24 | Company Is a Word. 一句话开一家AI公司 - open-source multi-agent orchestration framework for non-developers. 小白5分钟拥有自己的AI公司，可DIY任意行业、调教子Agent、无限家公司，支持飞书遥控。MIT |
| 32 | [AlexKaiqi/dsh-multi-model-provider](https://github.com/AlexKaiqi/dsh-multi-model-provider) | 2 | 2026-08-17 | 2026-08-24 | 多模型支持 |
| 33 | [Azzygoatcoder/agent-useful-skills](https://github.com/Azzygoatcoder/agent-useful-skills) | 2 | 2026-06-17 | 2026-08-24 | 模块化 AI 科研/工程技能 monorepo（DeepSeek Harness / Claude Code 通用）— plugins/ + skills/ + bin 脚本 + LaTeX 模板，验证环驱动 |
| 34 | [crazy-L118/dsh-deepseek-balance-widget](https://github.com/crazy-L118/dsh-deepseek-balance-widget) | 2 | 2026-08-19 | 2026-08-24 | DeepSeek balance widget for the dsh web sidebar |
| 35 | [Flycat43/liang-desktop-pet](https://github.com/Flycat43/liang-desktop-pet) | 2 | 2026-08-23 | 2026-08-24 | An unofficial desktop companion UI for DeepSeek Harness.梁圣 |
| 36 | [Jarad-z/dsh-goalmesh](https://github.com/Jarad-z/dsh-goalmesh) | 2 | 2026-08-23 | 2026-08-24 | Goal-driven multi-agent orchestration for DeepSeek Harness — bounded DAG scheduling, nested delegation, typed evidence, and durable trajectory UI. |
| 37 | [LINinLIN-0079/godot-asset-planner-public](https://github.com/LINinLIN-0079/godot-asset-planner-public) | 2 | 2026-08-21 | 2026-08-24 | Godot asset & project-goal management for DeepSeek Harness: godot_* model tools, /gap REST API, and a better-sidebar UI with asset manager, scene-tree viewer and Git panel. / DeepSeek Harness 的 Godot 资产与项目目标统一管理插件：godot_* 模型工具 + /gap REST 路由 + better-sidebar 界面（资产管理器 / 场景树查看器 / Git 版本控制）。 |
| 38 | [Shizuku-keop/dsh-micro-inversion-standard](https://github.com/Shizuku-keop/dsh-micro-inversion-standard) | 2 | 2026-08-24 | 2026-08-24 | 一个可复用的 DSH Agent Preset：双阶段、Token 精益的编码智能体模式。  核心目标：把模型思维链的起手习惯从 "let me" 翻转为 "we need"，同时把上下文占用与 Token 消耗压到最低，并保持供应商 KV Cache 对未变前缀持续命中。 |
| 39 | [SoMarkAI/dsh-tool-somark](https://github.com/SoMarkAI/dsh-tool-somark) | 2 | 2026-08-14 | 2026-08-24 | SoMark document parser tool (somark_parse) plugin for DeepSeek Harness |
| 40 | [Tannnnhauser/pivot-web-search](https://github.com/Tannnnhauser/pivot-web-search) | 2 | 2026-05-02 | 2026-08-24 | Resilient multi-provider web search & content extraction for Claude Code, DeepSeek Harness, and any MCP host — quota-aware failover, JS rendering, and a CLI. |
| 41 | [tingfeng347/dsh-vscode-workbench](https://github.com/tingfeng347/dsh-vscode-workbench) | 2 | 2026-08-23 | 2026-08-24 | 在 DeepSeek Harness 中叠加 VS Code 风格的本地开发工作台。 |
| 42 | [ZekaiShi/evo-subagent](https://github.com/ZekaiShi/evo-subagent) | 2 | 2026-08-22 | 2026-08-24 | Unified DeepSeek Harness plugin: role-based subagent routing + per-agent evolution (prefercmd/memory as knowledge allow/deny lists), so repeated tasks start from proven commands and save tokens. Unified subagent routing and evolution: prefercmd/memory serve as knowledge allow/deny lists, saving tokens. |
| 43 | [zilliztech/dsh-milvus](https://github.com/zilliztech/dsh-milvus) | 2 | 2026-08-18 | 2026-08-24 | DeepSeek Harness(DSH) plugin for Milvus |
| 44 | [0neKbyte/dsh-approval-assistant_0neKbyte](https://github.com/0neKbyte/dsh-approval-assistant_0neKbyte) | 1 | 2026-08-23 | 2026-08-24 | deepseek 审批+问答+完成时添加提醒，可设置浏览器、系统通知、弹窗通知，可自拟音效 |
| 45 | [1Lyn-en/dsh-whale](https://github.com/1Lyn-en/dsh-whale) | 1 | 2026-08-15 | 2026-08-24 | DeepSeek Harness 极简回复插件，提供六档精简模式与 CyberUI 主题，可节省 60–75% 输出 Token｜A DSH plugin with six brevity modes and a CyberUI theme. |
| 46 | [AlexKaiqi/dsh-session-assistant](https://github.com/AlexKaiqi/dsh-session-assistant) | 1 | 2026-08-20 | 2026-08-24 | Session-scoped full-duplex voice assistant for DeepSeek Harness with safe drafting, explicit Agent submission, and optional knowledge curation. |
| 47 | [alextangson/dsh-dispatch](https://github.com/alextangson/dsh-dispatch) | 1 | 2026-08-23 | 2026-08-24 | 📱 Dispatch tasks to DeepSeek Harness (dsh) from your phone — approvals on your lock screen, isolated git worktrees, E2E encrypted, self-hostable. Like Claude Code Dispatch, for dsh. |
| 48 | [anonRTtty/dsh-api-balance-displayer-plugin](https://github.com/anonRTtty/dsh-api-balance-displayer-plugin) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek API 余额显示插件 / DeepSeek API balance display for DeepSeek Harness |
| 49 | [ateen18/dsh-plugin-security-review](https://github.com/ateen18/dsh-plugin-security-review) | 1 | 2026-08-18 | 2026-08-24 | Security review gate for DeepSeek Harness (dsh) plugins: static pre-install vetting of malicious code, vulnerabilities and supply-chain risks (with deobfuscation decoding), runtime audit, optional tool-call guard, and a one-click web review/install/uninstall panel. |
| 50 | [AxelGoal/Deepharn](https://github.com/AxelGoal/Deepharn) | 1 | 2026-08-23 | 2026-08-24 | Un escritorio propio para DeepSeek Harness en macOS: frontend nuevo sobre su API, concha nativa en Swift y dos plugins. |
| 51 | [bao-hp/dsh-check-update](https://github.com/bao-hp/dsh-check-update) | 1 | 2026-08-24 | 2026-08-24 | Check for DSH updates with changelog and backup. |
| 52 | [bf185003/dsh-favicon-status](https://github.com/bf185003/dsh-favicon-status) | 1 | 2026-08-21 | 2026-08-24 | Browser tab status indicator plugin for DeepSeek Harness (dsh web): paints the document favicon from the sessions list projection - green done / amber waiting / blue running, spinning while work executes. |
| 53 | [bluechips-zhao/dsh-receipt](https://github.com/bluechips-zhao/dsh-receipt) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek Harness 对话使用情况记录超市小票插件：按模型统计的令牌使用量、调用次数、耗时和成本 \| Conversation usage receipt plugin for DeepSeek Harness: per-model token usage, calls, time and cost |
| 54 | [cdxDNRF/dsh-wishadel-theme](https://github.com/cdxDNRF/dsh-wishadel-theme) | 1 | 2026-08-14 | 2026-08-24 | dsh主题维什戴尔风格 |
| 55 | [chenjie1129/deepseek-harness-reliability-governor](https://github.com/chenjie1129/deepseek-harness-reliability-governor) | 1 | 2026-08-23 | 2026-08-24 | Evidence-gated completion and trusted code verification for DeepSeek Harness agents |
| 56 | [Chinesezjc/dsh-tool-owned-render](https://github.com/Chinesezjc/dsh-tool-owned-render) | 1 | 2026-08-14 | 2026-08-24 | Design note and interactive prototype for tool-owned render: each tool owns its own result presentation, composing shared layout primitives instead of a central render-kind union. |
| 57 | [chumingjun/harness-one](https://github.com/chumingjun/harness-one) | 1 | 2026-08-20 | 2026-08-24 | Visual AI workflow orchestrator for DeepSeek Harness (dsh): multi-agent DAGs, live execution, recovery, and Feishu integration. |
| 58 | [CJL-1995/dsh-session-health](https://github.com/CJL-1995/dsh-session-health) | 1 | 2026-08-23 | 2026-08-24 | a plugin that can judge your Agent session is healthy or not |
| 59 | [cslht11/dsh-custom-patches](https://github.com/cslht11/dsh-custom-patches) | 1 | 2026-08-18 | 2026-08-24 | DSH (DeepSeek Harness) 自定义增强补丁集：输入历史 + 编辑最后一条消息并重新生成。Custom enhancements for the DeepSeek Harness Web GUI via compiled-artifact patches. |
| 60 | [cslht11/dsh-ssh-remote](https://github.com/cslht11/dsh-ssh-remote) | 1 | 2026-08-20 | 2026-08-24 | DeepSeek Harness SSH 远程工作区插件（多机并行）：同时连接多台服务器，Agent 直接查看/编辑/执行远程文件。基于 flymysql/dsh-remote (MIT) 适配 0.1.1-rc.2 |
| 61 | [DaiYuhangSustc/dsh-cae-plugin](https://github.com/DaiYuhangSustc/dsh-cae-plugin) | 1 | 2026-08-24 | 2026-08-24 | Mochi 🐶 — natural-language CAE plugin for DeepSeek Harness: one sentence in, a full CAD → mesh → solve → post-process pipeline out (CalculiX FEA + OpenFOAM CFD). \| 自然语言驱动的 CAE插件：一句话跑通 CAD → 网格 → 求解 → 后处理全链路（CalculiX 结构 + OpenFOAM CFD）。 |
| 62 | [dlssjdyka0019/dsh-launcher](https://github.com/dlssjdyka0019/dsh-launcher) | 1 | 2026-08-24 | 2026-08-24 | 管理多个隔离的 DeepSeek Harness (DSH) 实例的 Windows 桌面工具 |
| 63 | [dong3434/dsh-auto-maintenance](https://github.com/dong3434/dsh-auto-maintenance) | 1 | 2026-08-24 | 2026-08-24 | DSH Auto Maintenance System - Diagnosis, Fix, Backup, Monitor |
| 64 | [etony668/dsh-task-board](https://github.com/etony668/dsh-task-board) | 1 | 2026-08-23 | 2026-08-24 | DSH 项目任务看板插件：会话「任务看板」视图 + 父子任务树工具与技能 + 本地 JSON 存储（CodexFF 移植） |
| 65 | [eversko/dsh-blackbox](https://github.com/eversko/dsh-blackbox) | 1 | 2026-08-24 | 2026-08-24 | Privacy-safe flight recorder and incident reports for DeepSeek Harness. |
| 66 | [FAVKTOXIC/dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass) | 1 | 2026-08-23 | 2026-08-24 | Apple Liquid Glass theme for DeepSeek Harness |
| 67 | [FloatingLifeTL/dsh-plugin_session-manager-custom](https://github.com/FloatingLifeTL/dsh-plugin_session-manager-custom) | 1 | 2026-08-22 | 2026-08-24 | DeepSeek Harness Web plugin for local session data management |
| 68 | [GM-HZ/dsh-dag-workflow](https://github.com/GM-HZ/dsh-dag-workflow) | 1 | 2026-08-23 | 2026-08-24 | Durable DAG workflows for DeepSeek Harness: Agent-guided templates, SQLite recovery, plugin nodes, and XYFlow Canvas. |
| 69 | [HeyBobChan/canon-deepseek-harness-plugin](https://github.com/HeyBobChan/canon-deepseek-harness-plugin) | 1 | 2026-08-23 | 2026-08-24 | Canon integration plugin for DeepSeek Harness |
| 70 | [Hou-DL/dsh-token-heatmap](https://github.com/Hou-DL/dsh-token-heatmap) | 1 | 2026-08-24 | 2026-08-24 | Local Token heatmap plugin for DSH Web — GitHub-style calendar views, per-hour/week/month/quarter/year, fully local, zero billing. |
| 71 | [huyang218/dsh-plugins](https://github.com/huyang218/dsh-plugins) | 1 | 2026-08-18 | 2026-08-24 | Plugins for DeepSeek Harness (dsh) — 18 build-free ESM bundles: model-facing tools, runtime wrappers and web UI extensions. Installable by name, URL or local path from the dsh CLI, dsh Desktop or dsh Android. |
| 72 | [hw-cola/dsh-message-enhancer](https://github.com/hw-cola/dsh-message-enhancer) | 1 | 2026-08-24 | 2026-08-24 | DSH插件，消息功能增强 |
| 73 | [imkelt/DSH-RAG](https://github.com/imkelt/DSH-RAG) | 1 | 2026-08-22 | 2026-08-24 | Local knowledge bases with explicit, source-backed retrieval for DeepSeek Harness Web. |
| 74 | [joekytc/dsh-swarm](https://github.com/joekytc/dsh-swarm) | 1 | 2026-08-20 | 2026-08-24 | Run multi-agent task pipelines on DSH like a team — plan, execute, review, and deliver code through a visual kanban with provable completion. |
| 75 | [JohnnyTing/dsh-official-homepage-theme](https://github.com/JohnnyTing/dsh-official-homepage-theme) | 1 | 2026-08-24 | 2026-08-24 | 复刻 DeepSeek Harness 官方首页主题插件 |
| 76 | [joshryandavis/dsh-llm-aws-kiro](https://github.com/joshryandavis/dsh-llm-aws-kiro) | 1 | 2026-08-21 | 2026-08-24 | deeepseek-harness kiro provider |
| 77 | [Kian-Oraish/dsh-prompt-enhance](https://github.com/Kian-Oraish/dsh-prompt-enhance) | 1 | 2026-08-23 | 2026-08-24 | 增强提示词魔法棒:DSH Web 对话输入框的灵活自适应提示词增强插件 |
| 78 | [liustack/summono](https://github.com/liustack/summono) | 1 | 2026-08-17 | 2026-08-24 | One click and DeepSeek Harness is running — the free launcher & installer for AI harnesses. 一键安装启动 DeepSeek Harness。 |
| 79 | [LongSir0419/dsh-git-branch-manage](https://github.com/LongSir0419/dsh-git-branch-manage) | 1 | 2026-08-24 | 2026-08-24 | DSH bundle: 当前 Git 分支徽标。在会话 header 与新会话欢迎页显示当前分支，支持切换、新建、更新、拉取、推送、删除（仅本地分支，IDEA 风格目录树）。 |
| 80 | [Lxd-Ashe/dsh-codex-theme](https://github.com/Lxd-Ashe/dsh-codex-theme) | 1 | 2026-08-24 | 2026-08-24 | Codex themes (light + dark) for the DeepSeek Harness (DSH) web GUI as a configurable appearance plugin |
| 81 | [maxmilian/dsh-forge](https://github.com/maxmilian/dsh-forge) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek Harness tools for self-hosted Gitea and Forgejo instances |
| 82 | [maxmilian/dsh-sonarqube](https://github.com/maxmilian/dsh-sonarqube) | 1 | 2026-08-24 | 2026-08-24 | Read-only SonarQube Community Build tools for DeepSeek Harness |
| 83 | [mjw-git/dsh-pet](https://github.com/mjw-git/dsh-pet) | 1 | 2026-08-24 | 2026-08-24 | Desktop pet plugin for DeepSeek Harness (dsh) — grows with your agent token usage; XP economy, custom spritesheets, SSE status push, one-command install |
| 84 | [ML-QSeek/SurvX](https://github.com/ML-QSeek/SurvX) | 1 | 2026-06-24 | 2026-08-24 | SurvX — A paradigm for building intelligent systems where behavior is driven by data change. It unifies capability units (F), structured entities (Matter), and self-evolving entities (Ego) under one architecture that works with or without AI. A prototype exploring XGI (Xenogenic General Intelligence) and the future of development. |
| 85 | [MrElysium/convoport](https://github.com/MrElysium/convoport) | 1 | 2026-08-23 | 2026-08-24 | Capture AI conversations from any web chat, keep them 100% local, and port them into any agent as live sessions — not dead exports. |
| 86 | [NaNQiQ/deepseek-harness-remote-ssh](https://github.com/NaNQiQ/deepseek-harness-remote-ssh) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek Harness（DSH）的远程 SSH 执行环境扩展插件，可在本地与远程 Linux/Unix 环境之间切换，让 DSH 原生文件、搜索、Shell 与终端工具直接在远端运行，无需修改 DSH 源码或在服务器安装额外 Agent。 |
| 87 | [NEVSTOP-LAB/dsh-version-inspector](https://github.com/NEVSTOP-LAB/dsh-version-inspector) | 1 | 2026-08-23 | 2026-08-24 | DSH 版本信息插件，在 DSH 设置面板新增「版本信息」页，以紧凑多列树展示 DeepSeek Harness、插件与依赖的版本，支持按包名/版本过滤与 day/dark |
| 88 | [nexsjournal/dsh-imagegen-plugin](https://github.com/nexsjournal/dsh-imagegen-plugin) | 1 | 2026-08-17 | 2026-08-24 | 给 DeepSeek Harness（DSH）加上第三方生图/改图能力的插件：对话召唤 + 设置卡片，支持 OpenAI 兼容 / 阿里百炼 / Replicate / fal.ai |
| 89 | [nikoart-liu/dsh-open-in-x](https://github.com/nikoart-liu/dsh-open-in-x) | 1 | 2026-08-24 | 2026-08-24 | 在 DeepSeek Harness Web 界面中，把当前会话的工作目录直接交给本机外部应用打开。 |
| 90 | [pc439527/dsh-model-provider](https://github.com/pc439527/dsh-model-provider) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek Harness Model Selector UX Enhancement Plugin: show each model's provider (providerId:modelId identity, provider-grouped catalog, shadowed composer model seat) |
| 91 | [puesite/dsh-telegram-notify](https://github.com/puesite/dsh-telegram-notify) | 1 | 2026-08-23 | 2026-08-24 | DSH/EAC Telegram 通知 + 聊天 + 远程批准插件 |
| 92 | [shangshuo1/DSH-Virtual](https://github.com/shangshuo1/DSH-Virtual) | 1 | 2026-08-24 | 2026-08-24 | Manage multiple isolated DeepSeek Harness (dsh) instances like virtual machines. Rust/egui native desktop app. |
| 93 | [shendeguize/Remote_DSH_Center](https://github.com/shendeguize/Remote_DSH_Center) | 1 | 2026-08-20 | 2026-08-24 | One-page local manager and CLI for local and remote dsh web instances, with SSH tunnels for remote hosts. |
| 94 | [Shizuku-keop/dsh-plugin-brainstorm-visualizer](https://github.com/Shizuku-keop/dsh-plugin-brainstorm-visualizer) | 1 | 2026-08-24 | 2026-08-24 | DeepSeek Harness Brainstorming Visualization Plugin Seamlessly combining AI divergent reasoning with visual interaction, built specifically for solving complex problems |
| 95 | [SLin-code/dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) | 1 | 2026-08-24 | 2026-08-24 | DSH自定义壁纸/皮肤插件——Custom wallpapers and translucent skins for DeepSeek Harness Web |
| 96 | [StabCut/dsh-edit-regenerate](https://github.com/StabCut/dsh-edit-regenerate) | 1 | 2026-08-18 | 2026-08-24 | DSH plugin: edit a user message in conversation history and regenerate from the revised prompt in a forked session. |
| 97 | [StabCut/dsh-plugin-restart-desktop](https://github.com/StabCut/dsh-plugin-restart-desktop) | 1 | 2026-08-21 | 2026-08-24 | DSH Desktop sidebar restart button: orderly relaunch of DSH Desktop from the sidebar settings row (based on desktopActions.requestRestart). |
| 98 | [TaoruiLiu19/DSHwork](https://github.com/TaoruiLiu19/DSHwork) | 1 | 2026-08-15 | 2026-08-24 | DeepSeek Harness Desktop Client |
| 99 | [Tianbuyu-wwx/dsh-hermes-link](https://github.com/Tianbuyu-wwx/dsh-hermes-link) | 1 | 2026-08-23 | 2026-08-24 | Bidirectional bridge between Hermes Agent and DeepSeek Harness (DSH). v0.2.4 — single-bundle Cordis plugin replacing the archived hermes-foundation/-oneshot-arbitrate/-dispatch-bridge triad. |
| 100 | [TianyiTwT/dsh-image-zoom](https://github.com/TianyiTwT/dsh-image-zoom) | 1 | 2026-08-23 | 2026-08-24 | **Smart image splitting and zooming for Vision-Language Models (VLMs) inside [DeepSeek Harness (dsh)](https://github.com/deepseek-ai/deepseek-harness).** |
| 101 | [wangbobo-coder/gitee-ai-employee](https://github.com/wangbobo-coder/gitee-ai-employee) | 1 | 2026-08-24 | 2026-08-24 | Gitee AI 员工：在 issue 里 @ 机器人并指定目标分支，它自动克隆仓库开发、提交 PR，可自动合并并关闭 issue。Issue-driven Gitee AI developer for DeepSeek Harness. |
| 102 | [wenbobodley/dsh-guandan](https://github.com/wenbobodley/dsh-guandan) | 1 | 2026-08-23 | 2026-08-24 | 掼蛋 Guandan card game plugin for DeepSeek Harness (DSH) - 掼蛋-中联储卫 / GUANDAN-中联储卫 |
| 103 | [Whale-Zhang/dsh-cron-tasks](https://github.com/Whale-Zhang/dsh-cron-tasks) | 1 | 2026-08-24 | 2026-08-24 | Scheduled tasks for DeepSeek Harness: sidebar jobs, isolated run history, cron/at schedules. |
| 104 | [wuzhigouno-collab/dsh-rp-composer](https://github.com/wuzhigouno-collab/dsh-rp-composer) | 1 | 2026-08-23 | 2026-08-24 | TriComposer · DSH web 端 RP 结构化输入插件：台词/动作/心理分框填空、模板组装发送，从输入层消除 AI 对玩家言行的成分误识别。Structured tri-channel input composer for LLM roleplay on DeepSeek Harness. |
| 105 | [xiaoso456/dsh-run-config](https://github.com/xiaoso456/dsh-run-config) | 1 | 2026-08-23 | 2026-08-24 | Run configuration management for DeepSeek Harness (DSH) — IDEA-style run control for the web GUI: reusable LLM prompts and background commands, one click to launch. |
| 106 | [Xinyi21yf/deepseek-harness-plugins](https://github.com/Xinyi21yf/deepseek-harness-plugins) | 1 | 2026-08-23 | 2026-08-24 | Personal DeepSeek Harness plugins, designs, and learning notes |
| 107 | [xuc865/dsh-librarian](https://github.com/xuc865/dsh-librarian) | 1 | 2026-08-23 | 2026-08-24 | a dsh plugin that helps you to automatically generate, evolve and manage your dsh plugins |
| 108 | [yafangwang9/dsh-voice-plugin](https://github.com/yafangwang9/dsh-voice-plugin) | 1 | 2026-08-24 | 2026-08-24 | Voice input plugin for DeepSeek Harness |
| 109 | [yangdongzhen590/dsh-knj-scheduler](https://github.com/yangdongzhen590/dsh-knj-scheduler) | 1 | 2026-08-23 | 2026-08-24 | Cron task scheduler for DeepSeek Harness: create a new session with your prompt on a schedule. |
| 110 | [yu502950715yang/dsh-use-wallpaper](https://github.com/yu502950715yang/dsh-use-wallpaper) | 1 | 2026-08-17 | 2026-08-24 | DSH Web GUI 壁纸背景插件：从本机 Wallpaper Engine 壁纸库加载背景，wasm 渲染 scene 壁纸 |
| 111 | [zeropointnine/dsh-compact-and-branch](https://github.com/zeropointnine/dsh-compact-and-branch) | 1 | 2026-08-23 | 2026-08-24 | Compact a session and continue the work in a new one |
| 112 | [zhaoan2308184882-spec/deepseek-harness-plugins](https://github.com/zhaoan2308184882-spec/deepseek-harness-plugins) | 1 | 2026-08-24 | 2026-08-24 | Unofficial community plugins for DeepSeek Harness: Codex provider and role model router |
| 113 | [zheng16965/dsh-deliverables-toggle](https://github.com/zheng16965/dsh-deliverables-toggle) | 1 | 2026-08-24 | 2026-08-24 | 为 DeepSeek Harness 对话产物列表增加主动展开与收起功能的 Web UI 插件。 |
| 114 | [zzj8442-blip/dsh-mobile-remote](https://github.com/zzj8442-blip/dsh-mobile-remote) | 1 | 2026-08-24 | 2026-08-24 | 📡 手机远程遥控 DeepSeek Harness：实时进度 / 审批 / 对话（PWA + PIN 配对 + Tailscale 外网支持） |
| 115 | [01men/ybkk-AIOS](https://github.com/01men/ybkk-AIOS) | 0 | 2026-08-21 | 2026-08-24 | 企业 AI 资源统一管理平台 —— 13 个 dsh/cordis 插件（IAM/OIDC/MCP/Skill 市场/Agent/审计/计费/插件市场），dsh plugin add 可直接安装 |
| 116 | [0QwQ0/dsh-discord-richpresence](https://github.com/0QwQ0/dsh-discord-richpresence) | 0 | 2026-08-22 | 2026-08-24 | dsh-plugin: push vague, user-configurable DSH interaction states to local Discord as Rich Presence |
| 117 | [0QwQ0/dsh-ui-auth](https://github.com/0QwQ0/dsh-ui-auth) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness Web UI 认证网关插件：登录门禁、用户管理、管理员专属模型/Key 配置、数据隔离 · Authentication gate for the DeepSeek Harness Web UI: login gate, user management, admin-only model/API-key config, data isolation |
| 118 | [0w0miki/dsh-question-rail](https://github.com/0w0miki/dsh-question-rail) | 0 | 2026-08-23 | 2026-08-24 | 给Deepseek Harness滚动条加上提问节点 |
| 119 | [0xrushmoon/dsh-plugin](https://github.com/0xrushmoon/dsh-plugin) | 0 | 2026-08-24 | 2026-08-24 | dsh-plugin |
| 120 | [12398k/dsh-opencode-go-dashboard](https://github.com/12398k/dsh-opencode-go-dashboard) | 0 | 2026-08-24 | 2026-08-24 | dsh-opencode-go-dashboard |
| 121 | [988hj7tczd-oss/dsh-a11y-scan](https://github.com/988hj7tczd-oss/dsh-a11y-scan) | 0 | 2026-08-24 | 2026-08-24 | DSH native accessibility (WCAG) scanner: runs axe-core over local HTML files / build output / URLs and reports violations as Markdown/HTML/JSON |
| 122 | [988hj7tczd-oss/dsh-asciinema](https://github.com/988hj7tczd-oss/dsh-asciinema) | 0 | 2026-08-24 | 2026-08-24 | DSH plugin: record terminal/tool output as asciinema v2 (.cast), replay with an offline embedded player, and export HTML |
| 123 | [988hj7tczd-oss/dsh-dep-vuln-scan](https://github.com/988hj7tczd-oss/dsh-dep-vuln-scan) | 0 | 2026-08-24 | 2026-08-24 | Scan project lockfiles (npm/pnpm/yarn/pip/go/cargo/maven/gradle) against the free OSV API and report confirmed dependency vulnerabilities with fix versions |
| 124 | [988hj7tczd-oss/dsh-invoice-tools](https://github.com/988hj7tczd-oss/dsh-invoice-tools) | 0 | 2026-08-24 | 2026-08-24 | DSH native tools: parse Chinese e-invoice PDFs into structured JSON with amount cross-check, and generate expense reports (Markdown / xlsx) |
| 125 | [988hj7tczd-oss/dsh-lsp-packs](https://github.com/988hj7tczd-oss/dsh-lsp-packs) | 0 | 2026-08-24 | 2026-08-24 | Out-of-the-box per-language LSP configuration packs for DeepSeek Harness: 12 Cordis plugins (one per language) reusing the shared @deepseek-ai/dsh-lsp-stdio + @deepseek-ai/dsh-tool-lsp base |
| 126 | [988hj7tczd-oss/dsh-math-olympiad](https://github.com/988hj7tczd-oss/dsh-math-olympiad) | 0 | 2026-08-24 | 2026-08-24 | DSH skill bundle: competition math (IMO/Putnam/USAMO/AIME) solved with pure reasoning, adversarial verification in a fresh subagent, and calibrated confidence |
| 127 | [988hj7tczd-oss/dsh-mcp-tunnel](https://github.com/988hj7tczd-oss/dsh-mcp-tunnel) | 0 | 2026-08-24 | 2026-08-24 | DSH plugin: expose a local MCP server to remote agents via outbound-only tunnel (mcp-proxy + cloudflared Quick Tunnel) and register the public URL into dsh-mcp-client |
| 128 | [988hj7tczd-oss/dsh-modernize-code](https://github.com/988hj7tczd-oss/dsh-modernize-code) | 0 | 2026-08-24 | 2026-08-24 | DSH skill pack: legacy code modernization workflow (preflight -> assess -> map -> transform) with Cordis mount plugin, offline Python scripts and smoke tests |
| 129 | [988hj7tczd-oss/dsh-pr-description](https://github.com/988hj7tczd-oss/dsh-pr-description) | 0 | 2026-08-24 | 2026-08-24 | DSH native tool: analyze the current branch diff and generate a Conventional Commits PR title, description and self-review checklist |
| 130 | [988hj7tczd-oss/dsh-receipts](https://github.com/988hj7tczd-oss/dsh-receipts) | 0 | 2026-08-24 | 2026-08-24 | Mine local DSH session logs (JSONL) into personal usage & impact receipts: Markdown day/week/month reports plus a self-contained HTML receipt |
| 131 | [988hj7tczd-oss/dsh-skill-creator](https://github.com/988hj7tczd-oss/dsh-skill-creator) | 0 | 2026-08-24 | 2026-08-24 | One-shot DSH skill (SKILL.md) generator: capture intent, draft, validate, package and distribute skills from inside a DeepSeek Harness session |
| 132 | [988hj7tczd-oss/dsh-workflow-templates](https://github.com/988hj7tczd-oss/dsh-workflow-templates) | 0 | 2026-08-24 | 2026-08-24 | DSH preset workflow template library: 12 reusable orchestration script templates with list/search/run/validate tools |
| 133 | [afoxsss/dsh-conversation-map](https://github.com/afoxsss/dsh-conversation-map) | 0 | 2026-08-24 | 2026-08-24 | 会话地图（Conversation Minimap）—— DeepSeek Harness (dsh) Web 客户端插件。 |
| 134 | [AKI2253/Sidor_Character](https://github.com/AKI2253/Sidor_Character) | 0 | 2026-08-24 | 2026-08-24 | SIDOR 人设卡 —— DeepSeek Harness 附属插件：批量导入人设卡（.persona.md / 酒馆角色卡），自由加载/更换人设，会话内即时应用 + Agent 预设持久化。 |
| 135 | [alex-dsh-plugin/open-in-vscode](https://github.com/alex-dsh-plugin/open-in-vscode) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (dsh) Web 插件：工作区一键打开 VSCode，对话内文件路径点击跳转 VSCode（支持 文件:行:列） |
| 136 | [AlexKaiqi/dsh-realtime-voice](https://github.com/AlexKaiqi/dsh-realtime-voice) | 0 | 2026-08-20 | 2026-08-24 | Full-duplex realtime voice-agent plugin for DeepSeek Harness, with OpenAI Realtime (WebRTC) and Doubao Duplex (WebSocket) adapters. |
| 137 | [aliuguofa/dsh-traffic-light](https://github.com/aliuguofa/dsh-traffic-light) | 0 | 2026-08-24 | 2026-08-24 | 一个 DeepSeek Harness Web UI 插件：在聊天输入框区域显示一盏红 / 黄 / 绿三色信号灯，实时反映当前会话的状态，点击可查看详情。 |
| 138 | [Alphainfix/wechat-clawbot](https://github.com/Alphainfix/wechat-clawbot) | 0 | 2026-08-24 | 2026-08-24 | 💬 A DeepSeek Harness plugin that brings your DSH agent into WeChat — chat with it from anywhere: native photo understanding, two-way file transfer, long-term memory, scheduled reminders, and permission approvals answered right in the chat. |
| 139 | [anaksunamu/dsh-vidfetch](https://github.com/anaksunamu/dsh-vidfetch) | 0 | 2026-08-24 | 2026-08-24 | Give your DeepSeek Harness agent an on-demand video downloader |
| 140 | [B1lli/dsh-learning-bundle](https://github.com/B1lli/dsh-learning-bundle) | 0 | 2026-08-22 | 2026-08-24 | Proof-carrying correction learning for DSH: explicit adoption, scoped recall, and reconstructable delivery. |
| 141 | [bigfurma-bot/dsh-attention](https://github.com/bigfurma-bot/dsh-attention) | 0 | 2026-08-22 | 2026-08-24 | Approval attention watcher for DeepSeek Harness: bell sound + tab-title flash whenever an approval needs the owner's decision |
| 142 | [bigfurma-bot/dsh-todos](https://github.com/bigfurma-bot/dsh-todos) | 0 | 2026-08-22 | 2026-08-24 | Persistent shared to-do list for DeepSeek Harness: web UI tab + agent tools over one JSON store, writable from both sides |
| 143 | [bigfurma-bot/dsh-voice-dictation](https://github.com/bigfurma-bot/dsh-voice-dictation) | 0 | 2026-08-22 | 2026-08-24 | Push-to-talk voice dictation for DeepSeek Harness: mic button in the composer transcribes via local Parakeet STT into your message draft |
| 144 | [bigfurma-bot/dsh-websearch-mcp](https://github.com/bigfurma-bot/dsh-websearch-mcp) | 0 | 2026-08-22 | 2026-08-24 | Local web search for DeepSeek Harness via MCP — Bing/Brave/DuckDuckGo scraping, no API keys, agent-installable |
| 145 | [c2j/dsh-swarmforge](https://github.com/c2j/dsh-swarmforge) | 0 | 2026-08-23 | 2026-08-24 | SwarmForge migrate as a DeepSeek Harness Plugin |
| 146 | [CarlMarkswx/deepseek-multimodel](https://github.com/CarlMarkswx/deepseek-multimodel) | 0 | 2026-08-24 | 2026-08-24 | Unified vision and image-generation plugin suite for DeepSeek Harness |
| 147 | [Carrick-K7/dsh-ai-quota](https://github.com/Carrick-K7/dsh-ai-quota) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin: AI subscription quotas & balances (Codex, Kimi, DeepSeek, OpenCode Go) — model tool, Settings page, composer chip |
| 148 | [chancoki/dsh-model-search-plugin](https://github.com/chancoki/dsh-model-search-plugin) | 0 | 2026-08-24 | 2026-08-24 | 为 DeepSeek Harness (DSH) Web GUI 提供模型搜索功能的插件——在模型选择弹窗中添加关键字搜索框，快速筛选模型。 |
| 149 | [CLASSLU/dsh-telegram-bridge](https://github.com/CLASSLU/dsh-telegram-bridge) | 0 | 2026-08-24 | 2026-08-24 | Telegram bridge for DeepSeek Harness (dsh): chat with your DSH agent from Telegram — access control, skills, workspace browsing, file transfer. |
| 150 | [Cloud-J/dsh-chat-jumper](https://github.com/Cloud-J/dsh-chat-jumper) | 0 | 2026-08-24 | 2026-08-24 | dsh对话导航 |
| 151 | [CochraneK/dsh-gate-game-plugin](https://github.com/CochraneK/dsh-gate-game-plugin) | 0 | 2026-08-24 | 2026-08-24 | Logo-eating mini-game + one-click lock button for DeepSeek Harness web UI |
| 152 | [coeasy/dsh-go](https://github.com/coeasy/dsh-go) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness 插件市场导航站 |
| 153 | [cofy-x/dsh-console](https://github.com/cofy-x/dsh-console) | 0 | 2026-08-24 | 2026-08-24 | A TypeScript and React/Ink terminal frontend for DeepSeek Harness. |
| 154 | [Cyning12/dsh-coding-kit](https://github.com/Cyning12/dsh-coding-kit) | 0 | 2026-08-16 | 2026-08-24 | DSH plugin + gate CLI for ICVO coding standards. Load ≠ inject: call apply_coding_standards. CLI: npx dsh-coding-kit |
| 155 | [da-beda/dsh-lockstep](https://github.com/da-beda/dsh-lockstep) | 0 | 2026-08-24 | 2026-08-24 | Pin-aware updater for DeepSeek Harness. Check lockfile drift, plan pin bumps, never float to latest. |
| 156 | [DevViking-Persike/dsh-subscriptions](https://github.com/DevViking-Persike/dsh-subscriptions) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness plugin: use your own Claude and ChatGPT/Codex subscriptions as model providers, over each vendor's OAuth sign-in |
| 157 | [DK-Zhu/dsh-consult](https://github.com/DK-Zhu/dsh-consult) | 0 | 2026-08-21 | 2026-08-24 | Evidence-first multi-model consultation for DeepSeek Harness: 2–5 independently configured models review the same evidence, and the main agent synthesizes their anonymous opinions. |
| 158 | [DreamZhongJu/dsh-smart-model-router](https://github.com/DreamZhongJu/dsh-smart-model-router) | 0 | 2026-08-23 | 2026-08-24 | A configurable Smart Model Router bundle for DeepSeek Harness (DSH). |
| 159 | [DSHCorrectover/ccs-runtime-verifier](https://github.com/DSHCorrectover/ccs-runtime-verifier) | 0 | 2026-08-22 | 2026-08-23 | CCS Runtime Verifier Skill — 7-dimension runtime verification for MCP tool calls. Structure, Schema, Latency, Cost, Identity, Integrity, Security checks. |
| 160 | [dshworks/dsh-ego-browser](https://github.com/dshworks/dsh-ego-browser) | 0 | 2026-08-24 | 2026-08-24 | ego lite browser automation for dsh that remembers — recall a site's learned tools, promote a working script into a new one, hand the user the keyboard for real. 7 tools, host-only, MIT. |
| 161 | [emeryxu1-blip/dsh-matrix-skin](https://github.com/emeryxu1-blip/dsh-matrix-skin) | 0 | 2026-08-22 | 2026-08-24 | Black-first Matrix hacker skin for DeepSeek Harness (DSH) Web — live session-powered code rain and readable provider reasoning. |
| 162 | [emircanerkul/dsh-terminal](https://github.com/emircanerkul/dsh-terminal) | 0 | 2026-08-18 | 2026-08-24 | Workspace-aware web terminal plugin for the DeepSeek Harness (dsh). Runs a streaming PTY terminal at /terminal and embeds a split-pane terminal dock powered by xterm.js. |
| 163 | [ErrorLst/dsh-code-pipeline](https://github.com/ErrorLst/dsh-code-pipeline) | 0 | 2026-08-23 | 2026-08-24 | DSH bundle plugin: 为 code-pipeline 预设（PTC 流水线）动态注入阶段子代理工具（subagent_plan / subagent_impl / subagent_review），各阶段 provider/model/思考等级可在设置页实时配置 |
| 164 | [esonx/dsh-project-j4agent](https://github.com/esonx/dsh-project-j4agent) | 0 | 2026-08-24 | 2026-08-24 | Jira-like Agent-native Project Management for DSH |
| 165 | [Ever0330/universal-vision](https://github.com/Ever0330/universal-vision) | 0 | 2026-08-24 | 2026-08-24 | Universal vision-model plugin for DeepSeek Harness, enabling image description using any configured vision model. |
| 166 | [Evhye38496/dsh-perfscope](https://github.com/Evhye38496/dsh-perfscope) | 0 | 2026-08-23 | 2026-08-24 | One-click health check & score for your DeepSeek Harness plugins. Scan -> Score -> Fix -> Share. PerfScope for dsh. |
| 167 | [EvieHe/dsh-resume-headless](https://github.com/EvieHe/dsh-resume-headless) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (dsh) bundle: headless one-shot session resume. `dsh --profile headless --resume <session-id> "task"` continues a persisted session (history and turn numbering carry on), prints and exits. Overrides the official headless runner via ctx.agents.resume(); install with `dsh plugin add github:EvieHe/dsh-resume-headless#v0.1.1`. |
| 168 | [flg1217/dsh-quick-commands](https://github.com/flg1217/dsh-quick-commands) | 0 | 2026-08-24 | 2026-08-24 | User-defined slash commands for DeepSeek Harness: configure quick commands (name + prompt) in the settings panel; /name inserts a chip that expands to the prompt on send. |
| 169 | [FMDD61/dsh-oauth-copilot](https://github.com/FMDD61/dsh-oauth-copilot) | 0 | 2026-08-23 | 2026-08-24 | GitHub Copilot OAuth sign-in and model route for DeepSeek Harness |
| 170 | [Freakz2z/dsh-evidence-ledger](https://github.com/Freakz2z/dsh-evidence-ledger) | 0 | 2026-08-24 | 2026-08-24 | Local append-only evidence ledger for DeepSeek Harness |
| 171 | [Frog755/dsh-hybrid-memory](https://github.com/Frog755/dsh-hybrid-memory) | 0 | 2026-08-24 | 2026-08-24 | Hybrid memory plugin for DeepSeek Harness (DSH): L1 frozen-snapshot memory (MEMORY.md/USER.md, prefix-cache friendly) + L2 searchable knowledge base (facts + SQLite FTS5) + L3 multi-tool import (Hermes/Claude/Codex/WorkBuddy). 混合记忆插件：L1 冻结快照 + L2 可检索知识库 + L3 多工具导入。数据本地存储。 |
| 172 | [Frog755/dsh-wallpaper](https://github.com/Frog755/dsh-wallpaper) | 0 | 2026-08-15 | 2026-08-24 | Persistent wallpaper plugin for DeepSeek Harness with opacity, blur, and a fixed web origin. |
| 173 | [FuqiangCraft/dsh-desktop](https://github.com/FuqiangCraft/dsh-desktop) | 0 | 2026-08-24 | 2026-08-24 | Desktop companion plugin and native shell for DeepSeek Harness (DSH) |
| 174 | [gausszhou/dsh-opencode-session-id](https://github.com/gausszhou/dsh-opencode-session-id) | 0 | 2026-08-22 | 2026-08-24 | dsh session IDs for opencode, zero config. |
| 175 | [gausszhou/dsh-where-am-i](https://github.com/gausszhou/dsh-where-am-i) | 0 | 2026-08-20 | 2026-08-24 | Neofetch for DeepSeek Harness. |
| 176 | [genesis-agents/dsh-plugins](https://github.com/genesis-agents/dsh-plugins) | 0 | 2026-08-22 | 2026-08-24 | Plugins for DeepSeek Harness: a source library that reads 72 feeds and publishes podcasts, digests and reports, plus web search over Serper, Tavily and Brave |
| 177 | [Guard42/dsh-humanize](https://github.com/Guard42/dsh-humanize) | 0 | 2026-08-24 | 2026-08-24 | Humanize 模式 — humanfia 流理念 × DeepSeek Harness 的 agent 预设：Flow 编排 · SHA-256 流锁 · HMAC 评审门禁 · 事件回放恢复 · 一行命令安装 · 可定制领域变体 |
| 178 | [Hanmiao33/dsh-bubble-explain](https://github.com/Hanmiao33/dsh-bubble-explain) | 0 | 2026-08-23 | 2026-08-24 | bubble-explain |
| 179 | [having5548/dsh-notify](https://github.com/having5548/dsh-notify) | 0 | 2026-08-23 | 2026-08-24 | Universal notification plugin for DeepSeek Harness: in-app toasts, native Windows toasts, one-click approval from the action center |
| 180 | [hecailiaoPFS/firecrawl-research-engine](https://github.com/hecailiaoPFS/firecrawl-research-engine) | 0 | 2026-08-24 | 2026-08-24 | Deep technical research & verification skill for LLM agents: Firecrawl search-first, graceful degradation, anti-hallucination citations. Works with DSH / Claude Code / Codex / Cursor. |
| 181 | [heiheiha798/dsh-plugin-response-window](https://github.com/heiheiha798/dsh-plugin-response-window) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) web plugin: wrap each prompt-to-prompt turn's response (tool calls + assistant text) in a bounded-height scrollable window/slide, Grok-build style. |
| 182 | [helibeiqi/dsh-csp-runtime](https://github.com/helibeiqi/dsh-csp-runtime) | 0 | 2026-08-23 | 2026-08-24 | Cognitive State Protocol (CSP) v0.1 — the cross-framework interop layer that makes AI thinking state serializable, persistable, and transferable. Host-side Cordis plugin for the DSH ecosystem. |
| 183 | [hnlisf/dsh-crypto-analyst](https://github.com/hnlisf/dsh-crypto-analyst) | 0 | 2026-08-24 | 2026-08-24 | 加密货币深度调研智能体 DSH 插件：5 步思维链研报 + 报告工作台 + 数据可视化 + MD/PDF 导出 |
| 184 | [Hoemr/dsh-better-overleaf](https://github.com/Hoemr/dsh-better-overleaf) | 0 | 2026-08-24 | 2026-08-24 | Overleaf tab for DSH better-sidebar: direct-CDP login, project mirrors under <workspace>/overleaf/, git/API sync, sidebar file preview |
| 185 | [Hoemr/dsh-quicklook](https://github.com/Hoemr/dsh-quicklook) | 0 | 2026-08-24 | 2026-08-24 | QuickLook-style space-key large preview for DSH better-sidebar: press Space on the active file tab for an instant image/PDF/text overlay |
| 186 | [Huasecc/dsh-usage](https://github.com/Huasecc/dsh-usage) | 0 | 2026-08-15 | 2026-08-24 | DeepSeek 用量面板—DSHWeb GUI 余额与Token用量仪表盘 |
| 187 | [Huauauaa/dsh-chatbi](https://github.com/Huauauaa/dsh-chatbi) | 0 | 2026-08-24 | 2026-08-24 | a chatbi dsh |
| 188 | [icyaaaww/dsh-adaptive-model-router](https://github.com/icyaaaww/dsh-adaptive-model-router) | 0 | 2026-08-24 | 2026-08-24 | Deterministic per-turn adaptive model routing for DeepSeek Harness |
| 189 | [icyaaaww/dsh-tool-failure-circuit-breaker](https://github.com/icyaaaww/dsh-tool-failure-circuit-breaker) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin that blocks repeated identical failed tool calls |
| 190 | [imlishiyuan/dsh-keep-running](https://github.com/imlishiyuan/dsh-keep-running) | 0 | 2026-08-24 | 2026-08-24 | A watchdog plugin for DeepSeek Harness: on a **quota / rate-limit (HTTP 429)** error, it automatically creates a fixed-interval scheduled task that keeps delivering a "continue the task" prompt until it succeeds or you take over. DeepSeek Harness 的 watchdog 插件：遇到 **配额/限流（HTTP 429）** 时，自动创建一个固定间隔的定时任务，到点持续投递「继续任务」的提示，直到任务成功或你手动接手。 |
| 191 | [ivvan3016/dsh-ui-task-notify](https://github.com/ivvan3016/dsh-ui-task-notify) | 0 | 2026-08-23 | 2026-08-24 | endows dsh with the ability to notify after the task is completed |
| 192 | [J0ss077/dsh-always-require-tools-approval](https://github.com/J0ss077/dsh-always-require-tools-approval) | 0 | 2026-08-24 | 2026-08-24 | Stop. Confirm. Run. A DeepSeek Harness plugin that pauses selected tools and waits for your explicit approval before every execution. |
| 193 | [jadehare/dsh-model-controller](https://github.com/jadehare/dsh-model-controller) | 0 | 2026-08-21 | 2026-08-24 | 为 DeepSeek Harness 提供基于关键词和语义分类的动态模型路由插件，可按任务自动选择模型与推理强度。 |
| 194 | [jiaoTaiLang404/dsh-model-ocean-selector](https://github.com/jiaoTaiLang404/dsh-model-ocean-selector) | 0 | 2026-08-24 | 2026-08-24 | A DeepSeek Harness plugin with a vertical model list and an animated Three.js particle reasoning-effort control |
| 195 | [jiesou/dsh-nous-portal-free-provider](https://github.com/jiesou/dsh-nous-portal-free-provider) | 0 | 2026-08-24 | 2026-08-24 | Nous Portal free-tier provider for dsh |
| 196 | [JinRyu-online/dsh-svn-plugin](https://github.com/JinRyu-online/dsh-svn-plugin) | 0 | 2026-08-24 | 2026-08-24 | 面向 DeepSeek Harness Web GUI 的 SVN（Subversion）版本控制面板插件。以独立 tab 融入 dsh-better-sidebar 右侧边栏 |
| 197 | [jinzheng8115/dsh-Minesweeper](https://github.com/jinzheng8115/dsh-Minesweeper) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness minesweeper plugin — agent tool set + human panel sharing one board. 扫雷插件：agent 工具集与人类面板共享同一棋盘。 |
| 198 | [jo32/dsh-hackernews-reader](https://github.com/jo32/dsh-hackernews-reader) | 0 | 2026-08-23 | 2026-08-24 | A dsh-plugin Hacker News reader with app-scoped AI conversations for DeepDeck. |
| 199 | [jo32/dsh-nga-reader](https://github.com/jo32/dsh-nga-reader) | 0 | 2026-08-23 | 2026-08-24 | A dsh-plugin NGA reader with app-scoped AI conversations for DeepDeck. |
| 200 | [JoaquinDG/dsh-governor](https://github.com/JoaquinDG/dsh-governor) | 0 | 2026-08-23 | 2026-08-24 | Behavioural supervision for DeepSeek Harness agents: retry storms, reasoning-budget burn, and a backstop that survives host suspend. |
| 201 | [jony5933/codex-dsh-bridge](https://github.com/jony5933/codex-dsh-bridge) | 0 | 2026-08-24 | 2026-08-24 | A visible, workspace-aware Codex to DeepSeek Harness Web Host bridge. |
| 202 | [jsoncode/dsh-get-balance](https://github.com/jsoncode/dsh-get-balance) | 0 | 2026-08-23 | 2026-08-24 | 余额与费用查询插件，支持多账号查询，实时token实时统计，中英双语，界面交互直观、开箱即用 |
| 203 | [JularDepick/dsh-system-monitor-plugin](https://github.com/JularDepick/dsh-system-monitor-plugin) | 0 | 2026-08-23 | 2026-08-24 | A plugin for dsh: monitor the resource utilization of dsh system processes and report the results to the user in the form of charts. |
| 204 | [kuanfu0430/dsh-sidebar-branch-chat](https://github.com/kuanfu0430/dsh-sidebar-branch-chat) | 0 | 2026-08-24 | 2026-08-24 | Adds a Branch Chat tab to dsh-better-sidebar: independent archived sessions with a context digest and the same tools as the main agent. |
| 205 | [launchmaniac/dsh-media-tools](https://github.com/launchmaniac/dsh-media-tools) | 0 | 2026-08-23 | 2026-08-24 | OpenRouter image, video, and speech generation as deepseek-harness tools — an out-of-tree profile bundle, no fork required |
| 206 | [law-star-cn/lawstar-dsh-mcp](https://github.com/law-star-cn/lawstar-dsh-mcp) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin for LawStar MCP (legal-data): one-click API Key connect |
| 207 | [lcohvne-tomorin/dsh-background](https://github.com/lcohvne-tomorin/dsh-background) | 0 | 2026-08-23 | 2026-08-24 | Custom background wallpaper plugin for DeepSeek Harness chat page — upload local image or image link, tune opacity and dark overlay, scope to chat area or full screen. |
| 208 | [leonardoxr/dsh-auto-chat-titles](https://github.com/leonardoxr/dsh-auto-chat-titles) | 0 | 2026-08-22 | 2026-08-24 | Semantic, configurable chat titles for DeepSeek Harness |
| 209 | [leonardoxr/dsh-claude-usage](https://github.com/leonardoxr/dsh-claude-usage) | 0 | 2026-08-24 | 2026-08-24 | Anthropic Claude plan usage indicator for DeepSeek Harness |
| 210 | [leonardoxr/dsh-codex-usage](https://github.com/leonardoxr/dsh-codex-usage) | 0 | 2026-08-22 | 2026-08-24 | OpenAI Codex plan usage indicator for DeepSeek Harness |
| 211 | [leonardoxr/dsh-coding-tools](https://github.com/leonardoxr/dsh-coding-tools) | 0 | 2026-08-23 | 2026-08-24 | Secure bounded coding tools for DeepSeek Harness |
| 212 | [leonardoxr/dsh-companion](https://github.com/leonardoxr/dsh-companion) | 0 | 2026-08-22 | 2026-08-24 | Read-only workspace and session JSON API plugin for DeepSeek Harness native clients. |
| 213 | [leonardoxr/dsh-harness-updater](https://github.com/leonardoxr/dsh-harness-updater) | 0 | 2026-08-24 | 2026-08-24 | Claude Code / Codex CLI update detection, prompting, and one-click channel updates for DeepSeek Harness |
| 214 | [leonardoxr/dsh-image-preview](https://github.com/leonardoxr/dsh-image-preview) | 0 | 2026-08-23 | 2026-08-24 | Inline read_image previews for DeepSeek Harness |
| 215 | [leonardoxr/dsh-native](https://github.com/leonardoxr/dsh-native) | 0 | 2026-08-22 | 2026-08-24 | Native desktop and iOS shell for trusted HTTPS web apps, with saved servers and first-class DeepSeek Harness support. |
| 216 | [leonardoxr/dsh-plugin-manager](https://github.com/leonardoxr/dsh-plugin-manager) | 0 | 2026-08-24 | 2026-08-24 | Safe loopback-only Web UI for managing DeepSeek Harness profile plugins |
| 217 | [leonardoxr/dsh-status-bar-config](https://github.com/leonardoxr/dsh-status-bar-config) | 0 | 2026-08-23 | 2026-08-24 | Configurable conversation statistics row for DeepSeek Harness |
| 218 | [leonardoxr/dsh-workspace-git](https://github.com/leonardoxr/dsh-workspace-git) | 0 | 2026-08-22 | 2026-08-24 | DeepSeek Harness plugin for cloning Git repositories as workspaces |
| 219 | [lhh666-6/dsh-copy-fix](https://github.com/lhh666-6/dsh-copy-fix) | 0 | 2026-08-23 | 2026-08-24 | Fix DSH Desktop copy buttons by bridging clipboard writes to the Electron main process. |
| 220 | [lhh666-6/dsh-paste-file](https://github.com/lhh666-6/dsh-paste-file) | 0 | 2026-08-23 | 2026-08-24 | Paste/drop files into the DSH composer, save them under the current workspace, and insert relative paths. |
| 221 | [lhh666-6/dsh-update-check](https://github.com/lhh666-6/dsh-update-check) | 0 | 2026-08-23 | 2026-08-24 | DSH update checker for the DSH Desktop installer channel and GitHub source releases, with one-click download/update. |
| 222 | [lhh666-6/dsh-usage-cost](https://github.com/lhh666-6/dsh-usage-cost) | 0 | 2026-08-23 | 2026-08-24 | Real-time DeepSeek token usage and cost meter for DSH: status-bar capsule plus detail panel, local-only persistence. |
| 223 | [libiwolve/dsh-experience-library](https://github.com/libiwolve/dsh-experience-library) | 0 | 2026-08-24 | 2026-08-24 | dsh-experience-library: 更有经验的 DeepSeek - 经验验证固化层(实时采集/加工/三层检验/技能书/benchmark验证) |
| 224 | [lispking/dsh-devpanel](https://github.com/lispking/dsh-devpanel) | 0 | 2026-08-24 | 2026-08-24 | A developer toolkit for the DeepSeek Harness (DSH) web console: a real multi-tab PTY terminal plus an AI-output file browser. |
| 225 | [little3tar/dsh-backup](https://github.com/little3tar/dsh-backup) | 0 | 2026-08-23 | 2026-08-24 | 由于 dsh 的自定义范围太大，很难通过一个插件或者程序来完美备份自己的配置，所以我觉得可以通过 ai 来分析哪些配置需要备份、可以备份，以及在新的环境中如何恢复。有了这个 skills 导出的配置文件，任意 agent 都可以帮助恢复 dsh 的配置。 |
| 226 | [lizhi00001/dsh-tools-plugins](https://github.com/lizhi00001/dsh-tools-plugins) | 0 | 2026-08-24 | 2026-08-24 | 将简短或模糊的指令改写为结构化 Prompt |
| 227 | [lmh-2026/dsh-periscope](https://github.com/lmh-2026/dsh-periscope) | 0 | 2026-08-23 | 2026-08-24 | DSH plugin: keep text-only DeepSeek models (V4-Flash / V4-Pro) and auto-route image-bearing requests to the official vision model (deepseek-v4-flash-vision-exp) - no manual model switching. |
| 228 | [lory69060/cn-intel-mcp-dsh](https://github.com/lory69060/cn-intel-mcp-dsh) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin: China hard-tech supply chain intelligence (MCP: signal board / track record / Q&A) |
| 229 | [lsh2002/dsh-custom-fonts](https://github.com/lsh2002/dsh-custom-fonts) | 0 | 2026-08-24 | 2026-08-24 | deepseek-harness的修改字体插件 |
| 230 | [LucienLL/dsh-peak-price-panel](https://github.com/LucienLL/dsh-peak-price-panel) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness plugin: peak/off-peak price watch, live account balance with tiered low-balance alerts, and a top-up button for the main web UI |
| 231 | [LucienLL/dsh-service-watchdog](https://github.com/LucienLL/dsh-service-watchdog) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin: restart/status of the DSH web service with a detached self-healing watchdog, second-confirmation, and login autostart |
| 232 | [LucienLL/dsh-session-id](https://github.com/LucienLL/dsh-session-id) | 0 | 2026-08-24 | 2026-08-24 | Show and copy the current session ID in the DeepSeek Harness web UI header |
| 233 | [lunarmoon26/harness-alchemist](https://github.com/lunarmoon26/harness-alchemist) | 0 | 2026-08-23 | 2026-08-24 | One scaffold, five agent harnesses — portable coding-agent plugins for Claude Code, Codex, OpenCode, Antigravity, and DeepSeek Harness. |
| 234 | [luweiyabo/dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness Web UI 的开源鲸鱼桌宠插件，支持 Agent 状态感知、94 种透明动画、点击拖拽、屏幕漫游、自定义动作与触发规则。 |
| 235 | [Mars-Sea/dsh-deeppilot](https://github.com/Mars-Sea/dsh-deeppilot) | 0 | 2026-08-24 | 2026-08-24 | Native iPhone companion plugin for DeepSeek Harness — sessions, approvals, questions, notifications, and secure remote access. |
| 236 | [mhwww/DSH-Wallpaper-Engine](https://github.com/mhwww/DSH-Wallpaper-Engine) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness (dsh) 背景图片插件：内置默认图 / 自定义上传 / Wallpaper Engine 创意工坊一键应用 / 视频壁纸 ffmpeg 高清抽帧 |
| 237 | [mienfong/dsh-session-mgr](https://github.com/mienfong/dsh-session-mgr) | 0 | 2026-08-24 | 2026-08-24 | Session manager for the DeepSeek Harness web UI: move, archive, restore, backup/export and import conversations across workspaces. Trilingual (English / 简体 / 繁體). |
| 238 | [ming-14/dsh-forwarder](https://github.com/ming-14/dsh-forwarder) | 0 | 2026-08-23 | 2026-08-24 | Make DeepSeek Harness (DSH) accessible over the local area network for other devices such as phones and tablets to access |
| 239 | [MisRightW/dsh-taskboard](https://github.com/MisRightW/dsh-taskboard) | 0 | 2026-08-20 | 2026-08-21 | dsh-taskboard |
| 240 | [Missher12/dsh-missher-memory](https://github.com/Missher12/dsh-missher-memory) | 0 | 2026-08-23 | 2026-08-24 | Project-scoped reviewed long-project memory for DeepSeek Harness |
| 241 | [mjn96/dsh-rhine-theme](https://github.com/mjn96/dsh-rhine-theme) | 0 | 2026-08-24 | 2026-08-24 | 明日方舟莱茵生命美术风格的deepseek harness皮肤主题 |
| 242 | [Modellix/dsh-modellix-web-tools](https://github.com/Modellix/dsh-modellix-web-tools) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin for Modellix Web Search and Web Fetch. |
| 243 | [Monicaxixi/dsh-loglens](https://github.com/Monicaxixi/dsh-loglens) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness dsh-plugin for bounded, cursor-aware log inspection |
| 244 | [NattoCB/dsh-plugin-pin-session](https://github.com/NattoCB/dsh-plugin-pin-session) | 0 | 2026-08-23 | 2026-08-24 | Pin sessions in the DeepSeek Harness web GUI: Pinned Sessions group above the sidebar list + Pin/Unpin in the session row menu. |
| 245 | [NevermindZZT/dsh-manager-plugin](https://github.com/NevermindZZT/dsh-manager-plugin) | 0 | 2026-08-23 | 2026-08-24 | dsh manger 远程工具对应使用的 dsh 插件，直接完成 dsh 远程访问 |
| 246 | [nicecx/dsh-macos-calendar](https://github.com/nicecx/dsh-macos-calendar) | 0 | 2026-08-24 | 2026-08-24 | DSH host-side plugin: real macOS Calendar integration (create/list/query/delete events via AppleScript) for DeepSeek Harness agents |
| 247 | [nicecx/dsh-matrix-skin](https://github.com/nicecx/dsh-matrix-skin) | 0 | 2026-08-24 | 2026-08-24 | Night-friendly Matrix dark-green skin for the DeepSeek Harness web GUI (standalone mirror of upstream dsh-web-ui packages/skins/matrix) |
| 248 | [nicecx/dsh-relay](https://github.com/nicecx/dsh-relay) | 0 | 2026-08-18 | 2026-08-24 | DSH plugin: relay approval & question requests to any chat channel — iMessage, Email, WeChat built-in; Telegram/DingTalk/Feishu/Slack via a common adapter contract (src/channels/types.js) |
| 249 | [niushuanan/xiaozhuang-dsh](https://github.com/niushuanan/xiaozhuang-dsh) | 0 | 2026-08-23 | 2026-08-24 | Plugin-enhanced DeepSeek Harness distribution with Computer Use, Teamwork, model usage, and multi-worktree development. |
| 250 | [NONAME-2121237/dsh-timeline](https://github.com/NONAME-2121237/dsh-timeline) | 0 | 2026-08-24 | 2026-08-24 | DSH web plugin: interaction timeline rail for long conversations (fork-independent successor of dsh-history) |
| 251 | [NonchalantLudens/dsh-side-dir](https://github.com/NonchalantLudens/dsh-side-dir) | 0 | 2026-08-23 | 2026-08-24 | Project directory preview for the DeepSeek Harness web GUI — details-panel file tree + read-only file preview via a fenced /dirpreview command |
| 252 | [open-dsh-plugins/dsh-open-in-app](https://github.com/open-dsh-plugins/dsh-open-in-app) | 0 | 2026-08-20 | 2026-08-24 | dsh web-UI plugin: open the current session's workspace folder with an installed app (Finder, Terminal, VS Code, Ghostty, Zed, ...) — icons included |
| 253 | [pan17/dsh-minimax-usage](https://github.com/pan17/dsh-minimax-usage) | 0 | 2026-08-24 | 2026-08-24 | DSH plugin: floating MiniMax Token Plan usage bubble in the Web UI |
| 254 | [paulalesius/dsh-openai-api](https://github.com/paulalesius/dsh-openai-api) | 0 | 2026-08-24 | 2026-08-24 | OpenAI-compatible /v1/chat/completions (streaming and non-streaming) and /v1/models endpoint on the DSH web server. |
| 255 | [pharaohnie/dsh-context-mode](https://github.com/pharaohnie/dsh-context-mode) | 0 | 2026-08-23 | 2026-08-24 | DSH 原生 Cordis 插件：知识库(FTS5)、路由强制、会话记忆、沙箱执行(Think-in-Code)——context-window 减负 |
| 256 | [qingmumingyang/dsh-doc-toolkit](https://github.com/qingmumingyang/dsh-doc-toolkit) | 0 | 2026-08-23 | 2026-08-24 | DSH 文档读写工具包 - PDF/DOCX/XLSX/CSV 读写与 PDF 导出（利用dsh制作的，希望能帮到你们） |
| 257 | [qiqiangvae/dsh-my-favorites](https://github.com/qiqiangvae/dsh-my-favorites) | 0 | 2026-08-24 | 2026-08-24 | dsh 收藏夹插件，可以收藏网址和会话，支持快捷键切换会话 |
| 258 | [Qiwei-QW/dsh-r-ide](https://github.com/Qiwei-QW/dsh-r-ide) | 0 | 2026-08-22 | 2026-08-24 | A four-pane R IDE (Editor / Console / Environment / Plots) integrated into DeepSeek Harness as a tab of [dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar), with one dedicated R process per conversation. |
| 259 | [RagnarPitla/dsh-field-guide](https://github.com/RagnarPitla/dsh-field-guide) | 0 | 2026-08-24 | 2026-08-24 | An evidence-badged field guide to DeepSeek Harness (dsh), plus a working plugin. Every claim marked with how it was verified. Independent and unofficial. |
| 260 | [Rannist/balance-dsh](https://github.com/Rannist/balance-dsh) | 0 | 2026-08-23 | 2026-08-24 | DSH 插件：显示 DeepSeek 账户余额 + 会话 token/费用，含高峰/空闲计费 |
| 261 | [rayadesune/DeepSeek-Harness-chat-billing](https://github.com/rayadesune/DeepSeek-Harness-chat-billing) | 0 | 2026-08-17 | 2026-08-24 | 类原生计费插件 |
| 262 | [RichDavidMu/create-dsh-plugin](https://github.com/RichDavidMu/create-dsh-plugin) | 0 | 2026-08-20 | 2026-08-24 | Scaffold a DeepSeek Harness plugin project — a working plugin with one model-facing tool, a profile bundle that mounts it, dsh's own toolchain, and documentation an agent can follow without reading dsh's source. |
| 263 | [rickyfu0625-cell/dsh-billing-dashboard](https://github.com/rickyfu0625-cell/dsh-billing-dashboard) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness 用量看板插件：余额 / 消费 / token / 7 日趋势 / 一键充值 |
| 264 | [robbin810130/dsh-rtk](https://github.com/robbin810130/dsh-rtk) | 0 | 2026-08-24 | 2026-08-24 | Community DSH plugin that applies explicit RTK command-output filtering to bash tools at boot. |
| 265 | [runfali/dsh-config-center](https://github.com/runfali/dsh-config-center) | 0 | 2026-08-24 | 2026-08-24 | dsh 扩展管理中心：WebUI 内统一管理 插件 / Skill / MCP -- bundle 安装移除、cordis.patch.yml 行增删改、SKILL.md 编辑、MCP 动态挂载即时生效。零侵入 bundle 插件，不改 dsh 源码。 |
| 266 | [runfali/dsh-export-kit](https://github.com/runfali/dsh-export-kit) | 0 | 2026-08-24 | 2026-08-24 | dsh 对话导出套件：一键将对话导出为 Markdown / TXT / JSON / CSV / PNG 长图 / PDF，附公式复制（LaTeX / MathML / Word 兼容）、设置备份与全会话归档。零侵入 bundle 插件，不改 Harness 源码。 |
| 267 | [runfali/dsh-mem0-plugins](https://github.com/runfali/dsh-mem0-plugins) | 0 | 2026-08-24 | 2026-08-24 | dsh 持久化记忆插件 - 依托自建的 mem0‑graph 服务器实现自动回忆与回写。 |
| 268 | [runfali/dsh-paperclip](https://github.com/runfali/dsh-paperclip) | 0 | 2026-08-24 | 2026-08-24 | dsh 零侵入式 bundle 插件：📎 输入框上传按钮 + 待发送文件浮层（仅文件名，可移除）· read_document 多格式读取工具（txt / pdf / docx / xlsx / json / md / ini / conf，支持 offset/limit 分页）· 设置 → 通用设置一个开关。标准 Cordis bundle 插件，不改 DSH 源码，内容寻址落盘去重，深浅色主题自适应。 |
| 269 | [RyensX/dsh-remote-gateway](https://github.com/RyensX/dsh-remote-gateway) | 0 | 2026-08-23 | 2026-08-24 | 为 DeepSeek Harness 提供安全的反向代理。/ Provides a secure reverse proxy for DeepSeek Harness. |
| 270 | [SaitoAsuka1121/dsh-client-ui-elasticsearch](https://github.com/SaitoAsuka1121/dsh-client-ui-elasticsearch) | 0 | 2026-08-24 | 2026-08-24 | dsh elasticsearch plugin |
| 271 | [sch246/dsh-warm-minimal](https://github.com/sch246/dsh-warm-minimal) | 0 | 2026-08-24 | 2026-08-24 | DSH 温暖极简模式：会话创建即写入一条高质量首轮轨迹（we/let's 风格），真实输入从第二轮开始，AGENTS.md 与技能目录自然注入 |
| 272 | [scientisbo/dsh-codex-usage](https://github.com/scientisbo/dsh-codex-usage) | 0 | 2026-08-23 | 2026-08-24 | Codex 用量 · 订阅配额 + DeepSeek 余额聚合（DeepSeek Harness host 插件） \| Codex subscription quota & DeepSeek balance aggregator for DeepSeek Harness |
| 273 | [scientisbo/dsh-deepseek-usage](https://github.com/scientisbo/dsh-deepseek-usage) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek 用量 · 余额面板（DeepSeek Harness Web 客户端插件） \| A clean DeepSeek usage & balance panel for DeepSeek Harness |
| 274 | [shaomingbo/dsh-attention](https://github.com/shaomingbo/dsh-attention) | 0 | 2026-08-23 | 2026-08-24 | Desktop attention alerts for DeepSeek Harness Web: tab title, favicon, sound, and native OS notifications. |
| 275 | [shaomingbo/dsh-session-reference-copy](https://github.com/shaomingbo/dsh-session-reference-copy) | 0 | 2026-08-23 | 2026-08-24 | Copy canonical cross-session references from the DeepSeek Harness Web session header. |
| 276 | [SkuraSshly/dsh-done-badge](https://github.com/SkuraSshly/dsh-done-badge) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) task completion badge: native Windows taskbar counter (ITaskbarList3) while the window is away, auto-clears on return. Subagent sessions excluded. |
| 277 | [SLin-code/dsh-skill-manager](https://github.com/SLin-code/dsh-skill-manager) | 0 | 2026-08-24 | 2026-08-24 | Minimal, security-focused local Skill Manager for DeepSeek Harness Web. |
| 278 | [Slymaster/dsh-theme-lab](https://github.com/Slymaster/dsh-theme-lab) | 0 | 2026-08-24 | 2026-08-24 | Unofficial modular themes and starter kit for DeepSeek Harness. |
| 279 | [soarGuo/dsh-auto-vision](https://github.com/soarGuo/dsh-auto-vision) | 0 | 2026-08-24 | 2026-08-24 | Bridges images into text for non-vision DeepSeek Harness models — your message stays untouched, zero manual setup. |
| 280 | [SpringNyan/dsh-public-proxy](https://github.com/SpringNyan/dsh-public-proxy) | 0 | 2026-08-22 | 2026-08-24 | A DeepSeek Harness plugin that exposes the DSH Web UI for LAN access |
| 281 | [SunNull/dsh-relay](https://github.com/SunNull/dsh-relay) | 0 | 2026-08-16 | 2026-08-24 | Cloud relay for DeepSeek Harness: expose your home dsh instance to any device with full real-time sync (out-of-tree plugin + wire-trunk architecture) |
| 282 | [sunnystarye-ui/dsh-plugin-text-quote](https://github.com/sunnystarye-ui/dsh-plugin-text-quote) | 0 | 2026-08-24 | 2026-08-24 | Codex-style text annotation for DeepSeek Harness conversations / 对话文字批注插件 |
| 283 | [sunzhentao/dsh--prompt--enhance](https://github.com/sunzhentao/dsh--prompt--enhance) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness提示词增强插件 |
| 284 | [svcomplex-dev/dsh-svw-waveform](https://github.com/svcomplex-dev/dsh-svw-waveform) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin for viewing and analyzing VCD/FST waveforms with SVW. |
| 285 | [tatselkrik/dsh-web-search-ddg](https://github.com/tatselkrik/dsh-web-search-ddg) | 0 | 2026-08-24 | 2026-08-24 | Keyless DuckDuckGo web search provider for DeepSeek Harness (ctx.web seam) — no API keys, no accounts, zero tokens per search. Strict-mode scraping, redirect unwrapping, dedupe, entity-safe parsing, committed builds, one-command profile install. |
| 286 | [termanli/dsh-fulltext-search](https://github.com/termanli/dsh-fulltext-search) | 0 | 2026-08-24 | 2026-08-24 | A DSH (DeepSeek Harness) Web GUI plugin that searches file contents in the current session working directory from the sidebar file manager (dsh-better-sidebar), returning file + line number + matching line preview. |
| 287 | [Tieboyh/dsh-chat-enhancer](https://github.com/Tieboyh/dsh-chat-enhancer) | 0 | 2026-08-24 | 2026-08-24 | Focused conversation enhancements for DeepSeek Harness Web, starting with zoomable fullscreen Mermaid diagrams. |
| 288 | [Tieboyh/dsh-notes-markdown](https://github.com/Tieboyh/dsh-notes-markdown) | 0 | 2026-08-24 | 2026-08-24 | Editable Markdown notes in the DeepSeek Harness sidebar |
| 289 | [Tieboyh/dsh-usage-center](https://github.com/Tieboyh/dsh-usage-center) | 0 | 2026-08-24 | 2026-08-24 | Native DSH settings page for daily provider usage, subscription quotas, balances, and API price estimates. |
| 290 | [tuofangzhe/dsh-plugins](https://github.com/tuofangzhe/dsh-plugins) | 0 | 2026-08-24 | 2026-08-24 | Community plugin registry for DeepSeek Harness (DSH) plugins, Skills & MCP — DSH 插件目录与中文安装配置教程 · 52dsh.com |
| 291 | [uckkk/dsh-fat-loss-cal](https://github.com/uckkk/dsh-fat-loss-cal) | 0 | 2026-08-20 | 2026-08-21 | 减脂热量计算 |
| 292 | [uckkk/dsh-future-cbdc](https://github.com/uckkk/dsh-future-cbdc) | 0 | 2026-08-21 | 2026-08-21 | 央行数字货币 |
| 293 | [uckkk/dsh-future-fusion](https://github.com/uckkk/dsh-future-fusion) | 0 | 2026-08-21 | 2026-08-21 | 核聚变能源 |
| 294 | [uckkk/dsh-future-longevity](https://github.com/uckkk/dsh-future-longevity) | 0 | 2026-08-21 | 2026-08-21 | 长寿医学 |
| 295 | [uckkk/dsh-gift-etiquette](https://github.com/uckkk/dsh-gift-etiquette) | 0 | 2026-08-21 | 2026-08-21 | 送礼避讳 |
| 296 | [uckkk/dsh-k2c](https://github.com/uckkk/dsh-k2c) | 0 | 2026-08-21 | 2026-08-21 | 开尔文转摄氏 |
| 297 | [uckkk/dsh-kenya](https://github.com/uckkk/dsh-kenya) | 0 | 2026-08-21 | 2026-08-21 | 肯尼亚国家 |
| 298 | [uckkk/dsh-palau](https://github.com/uckkk/dsh-palau) | 0 | 2026-08-21 | 2026-08-21 | 帕劳国 |
| 299 | [udsy19/dsh-toolcall-stream-repair](https://github.com/udsy19/dsh-toolcall-stream-repair) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness plugin: repairs malformed streaming tool-call deltas before they reach the block assembler |
| 300 | [Unintendedz/dsh-session-workspace](https://github.com/Unintendedz/dsh-session-workspace) | 0 | 2026-08-23 | 2026-08-24 | Move cold DeepSeek Harness sessions between registered workspaces |
| 301 | [valkia/dsh-plugin-computer-use](https://github.com/valkia/dsh-plugin-computer-use) | 0 | 2026-08-24 | 2026-08-24 | Computer Use plugin for DeepSeek Harness using Open Computer Use MCP |
| 302 | [valkia/dsh-plugin-git-log](https://github.com/valkia/dsh-plugin-git-log) | 0 | 2026-08-24 | 2026-08-24 | Git Log commit graph and history workbench for DeepSeek Harness |
| 303 | [viethoang35/dsh-chat-bridge](https://github.com/viethoang35/dsh-chat-bridge) | 0 | 2026-08-22 | 2026-08-24 | Chat bridge that connects Telegram (WhatsApp, Zalo, Viber, ... ) to DeepSeek Harness via its headless CLI |
| 304 | [vikasranax/dsh-plugin-cats](https://github.com/vikasranax/dsh-plugin-cats) | 0 | 2026-08-23 | 2026-08-24 | A DeepSeek Harness plugin that fetches random cat facts from a public API. |
| 305 | [vinokok/dsh-external-access-guide](https://github.com/vinokok/dsh-external-access-guide) | 0 | 2026-08-24 | 2026-08-24 | 远程 VPS 上部署 DSH 并通过 HTTPS 安全开放外网访问 \| Deploy DSH on a remote VPS and expose it securely over HTTPS |
| 306 | [viplocco/dsh-delete-message](https://github.com/viplocco/dsh-delete-message) | 0 | 2026-08-22 | 2026-08-24 | DeepSeek Harness 消息级删除插件，用于避免用户误发或错误的消息污染模型上下文。 |
| 307 | [wang-junjian/dsh-github-trending](https://github.com/wang-junjian/dsh-github-trending) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness 插件 GitHub Trending |
| 308 | [wangzhanchao883/dsh-screenshot-capture](https://github.com/wangzhanchao883/dsh-screenshot-capture) | 0 | 2026-08-24 | 2026-08-24 | Point-and-shoot screenshot capture plugin for DeepSeek Harness: clipboard watcher + system floating window (comment & key-point, copy/save-doc/save-image) + instant OCR (Tongyi Qianwen) + Obsidian per-day merging + evening AI organization. 指哪拍哪 · DSH 截图即存插件:剪贴板监听 + 系统级悬浮窗 + 即时 OCR + Obsidian 按天合并 + 晚间 AI 整理 |
| 309 | [WayneYu430/dsh-voice-plugin](https://github.com/WayneYu430/dsh-voice-plugin) | 0 | 2026-08-24 | 2026-08-24 | a full duplex voice mode for DSH |
| 310 | [wertyBSd/dsh-local-llm](https://github.com/wertyBSd/dsh-local-llm) | 0 | 2026-08-20 | 2026-08-24 | Local LLM integration plugin for DeepSeek Harness |
| 311 | [Wike-CHI/dsh-mobile](https://github.com/Wike-CHI/dsh-mobile) | 0 | 2026-08-24 | 2026-08-24 | Mobile device capability plugin for DeepSeek Harness: MobileService seam, mock/mobile-mcp providers, agent tools (observe/open_app/tap/type/back), tiered execution policy |
| 312 | [Wilfred-wei/dsh-fingerprint-relay](https://github.com/Wilfred-wei/dsh-fingerprint-relay) | 0 | 2026-08-23 | 2026-08-24 | DSH plugin: managed local fingerprint relays so DSH can reach providers that gate on the client's TLS fingerprint |
| 313 | [wowyuarm/dsh-agent-team](https://github.com/wowyuarm/dsh-agent-team) | 0 | 2026-08-23 | 2026-08-24 | Help humans organize tasks and let agents collaborate: durable Workspaces, Channels, Tasks, and managed Agent members for DeepSeek Harness |
| 314 | [WSL043/dsh-native-deepseek-balance](https://github.com/WSL043/dsh-native-deepseek-balance) | 0 | 2026-08-24 | 2026-08-24 | Compact, private DeepSeek API cash balance for DeepSeek Harness |
| 315 | [wuruihi/dsh-memory-loader](https://github.com/wuruihi/dsh-memory-loader) | 0 | 2026-08-24 | 2026-08-24 | DSH plugin: deterministic two-level memory injection (global + project MEMORY.md + today's notes) at session start |
| 316 | [wyouwd1/dsh-opencode-models](https://github.com/wyouwd1/dsh-opencode-models) | 0 | 2026-08-24 | 2026-08-24 | Manage OpenCode Zen free-tier and Go-tier models in DeepSeek Harness: live listings from opencode.ai, drift per route, four agent tools plus an OpenCode Models settings section. |
| 317 | [XIAOke8698/dsh-lego-plugin](https://github.com/XIAOke8698/dsh-lego-plugin) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness（DSH）Web 界面插件的乐高式可视化视图 |
| 318 | [XiaoluoFoxington/dsh-theme-hacker-terminal](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal) | 0 | 2026-08-24 | 2026-08-24 | Hacker-terminal skin for the dsh web GUI: pure black, high-contrast green, right-angle geometry, monospace font, full-width conversation, OLED-safe, scrollbars on Gecko/Blink/WebKit. |
| 319 | [xiaoyaoPanPan/dsh-media](https://github.com/xiaoyaoPanPan/dsh-media) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (dsh) 插件：把挂载目录变成可检索的媒体库 - 视频/图片自动打标、语义检索、系统打开与资源管理器定位 |
| 320 | [xie-tj/dsh-subagent](https://github.com/xie-tj/dsh-subagent) | 0 | 2026-08-24 | 2026-08-24 | Named subagent profiles with configurable model routing and reasoning for DeepSeek Harness |
| 321 | [Xinlong-Wu/dsh-auto-review](https://github.com/Xinlong-Wu/dsh-auto-review) | 0 | 2026-08-20 | 2026-08-24 | adds an auto-review permission preset to DeepSeek Harness. Same Codex auto review |
| 322 | [xiong18166089606-design/dsh-trade-assistant](https://github.com/xiong18166089606-design/dsh-trade-assistant) | 0 | 2026-08-24 | 2026-08-24 | 外贸询盘回复与多语言产品文案工具（DeepSeek Harness 插件）- 询盘解析、回复结构、本地化文案，零模型依赖 |
| 323 | [xswt442-cmd/dsh-instance-manager](https://github.com/xswt442-cmd/dsh-instance-manager) | 0 | 2026-08-23 | 2026-08-24 | DSH 常驻插件：侧边栏面板统一查看并停止本机 3080–3129 端口的 dsh 实例 \| Sidebar panel to list and gracefully stop local dsh web instances (ports 3080-3129) |
| 324 | [xtd1145/dsh-full-access-switch](https://github.com/xtd1145/dsh-full-access-switch) | 0 | 2026-08-23 | 2026-08-24 | DSH one-time Full access switch: no per-session confirmation for new workspaces/conversations |
| 325 | [xuan666-lab/dsh-openrouter-provider-advisor](https://github.com/xuan666-lab/dsh-openrouter-provider-advisor) | 0 | 2026-08-24 | 2026-08-24 | DSH plugin that ranks OpenRouter providers by cost, speed, context, and reliability, then switches the active route. |
| 326 | [xusuyang030218/dsh-preview-ui](https://github.com/xusuyang030218/dsh-preview-ui) | 0 | 2026-08-24 | 2026-08-24 | DSH (DeepSeek Harness) file preview & editor plugin: in-browser workspace file tree, multi-format preview, online editing, version history, search. DSH 文件预览插件。 |
| 327 | [yangdongzhen590/dsh-knj-menu](https://github.com/yangdongzhen590/dsh-knj-menu) | 0 | 2026-08-23 | 2026-08-24 | Third-party menu manager for DeepSeek Harness: collects plugin menu entries with fold/collapse and pinned items. |
| 328 | [yangdongzhen590/dsh-knj-workflow](https://github.com/yangdongzhen590/dsh-knj-workflow) | 0 | 2026-08-23 | 2026-08-24 | Config-driven development-task orchestration plugin for DeepSeek Harness: workflows + task management + stage progress UI. |
| 329 | [yangwuan55/dsh-feishu-integration](https://github.com/yangwuan55/dsh-feishu-integration) | 0 | 2026-08-24 | 2026-08-24 | Bidirectional Feishu/Lark integration for DeepSeek Harness: summaries, reply routing, binding UI, and QR provisioning. |
| 330 | [yaopushen/dsh-plugin-background-tasks](https://github.com/yaopushen/dsh-plugin-background-tasks) | 0 | 2026-08-23 | 2026-08-24 | Antigravity-style run_command for DeepSeek Harness: 10s sync window, auto background promotion, completion reports |
| 331 | [Yicijiuhaobala/dsh-session-delete](https://github.com/Yicijiuhaobala/dsh-session-delete) | 0 | 2026-08-24 | 2026-08-24 | Adds a "Delete session" item to the DSH session-row context menu (next to rename/fork/archive) — permanently removes session logs from disk, with live-session protection. |
| 332 | [Yiklek/dsh-settings-manager](https://github.com/Yiklek/dsh-settings-manager) | 0 | 2026-08-23 | 2026-08-24 | DSH web plugin: manage how plugin sections appear in the global Settings dialog — show/hide, reorder, rename, and make the settings navigation scrollable — without touching upstream. |
| 333 | [yongshuai0314/dsh-readcache](https://github.com/yongshuai0314/dsh-readcache) | 0 | 2026-08-23 | 2026-08-24 | 为 DSH read 工具提供版本令牌校验的进程内结果缓存 \| Version-token-validated in-process result cache for the DSH read tool |
| 334 | [yumm007/dsh-reveal-files](https://github.com/yumm007/dsh-reveal-files) | 0 | 2026-08-23 | 2026-08-24 | A dual-face DeepSeek Harness plugin that adds a folder icon next to the "Produces" row |
| 335 | [Yurzi/dsh-pdf-mineru](https://github.com/Yurzi/dsh-pdf-mineru) | 0 | 2026-08-24 | 2026-08-24 | Provider-independent DSH PDF parsing tools powered by MinerU. |
| 336 | [YuYangOUC/dsh-power-button](https://github.com/YuYangOUC/dsh-power-button) | 0 | 2026-08-24 | 2026-08-24 | Self-contained power control for DeepSeek Harness: sidebar power button, restart/shutdown engine. |
| 337 | [yxie2/dsh-petrinet](https://github.com/yxie2/dsh-petrinet) | 0 | 2026-08-24 | 2026-08-24 | Workflow-net runtime for DeepSeek Harness: resource-aware concurrency, native loops and fan-out, static soundness checking before a plan becomes durable, and process mining over its own event log. |
| 338 | [YYfather/dsh-balance](https://github.com/YYfather/dsh-balance) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness 余额与开销插件：状态栏显示 DeepSeek/MiMo 余额与逐请求计费开销（本会话/本次活跃/最近一次/上次对话），支持多模型+峰谷定价与花费超线提醒 |
| 339 | [YYfather/dsh-mimo-plugin](https://github.com/YYfather/dsh-mimo-plugin) | 0 | 2026-08-23 | 2026-08-24 | MiMo (Xiaomi) tools as a standard DeepSeek Harness Cordis dynamic plugin: web search, image/audio/video understanding, ASR transcription, TTS, voice design and voice cloning, with a first-use API key setup card and Settings page. |
| 340 | [YYfather/dsh-token-vault](https://github.com/YYfather/dsh-token-vault) | 0 | 2026-08-23 | 2026-08-24 | Secure credential vault for DeepSeek Harness: tokens never leave the host — the agent runs gh/npm/npx/node/git with the token injected in the environment. Manage from 设置 → 凭证库 / 市场 → 已安装. |
| 341 | [yzhangjy/dsh-path-anonymizer](https://github.com/yzhangjy/dsh-path-anonymizer) | 0 | 2026-08-23 | 2026-08-24 | DSH plugin: anonymize workspace-external file paths before model requests, with user confirmation |
| 342 | [yzhangjy/dsh-pattern-search](https://github.com/yzhangjy/dsh-pattern-search) | 0 | 2026-08-23 | 2026-08-24 | DSH plugin: regex pattern search over the current conversation — /pattern-search window + pattern_search tool to observe model output behavior |
| 343 | [zaimokuza-yoshiteru/dsh-acp-adapter](https://github.com/zaimokuza-yoshiteru/dsh-acp-adapter) | 0 | 2026-08-24 | 2026-08-24 | ACP adapter plugin for DeepSeek Harness |
| 344 | [zergtant/dsh-remote-access](https://github.com/zergtant/dsh-remote-access) | 0 | 2026-08-23 | 2026-08-24 | DeepSeek Harness (dsh) 远程访问插件：提供 TLS、登录认证、会话保护和 HTTP/WebSocket 透明反代，支持局域网及 FRP ，cloudflare隧道等远程访问。 |
| 345 | [zhulianxing/dsh-clawpay](https://github.com/zhulianxing/dsh-clawpay) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) plugin |
| 346 | [zhulianxing/dsh-kankan-mail](https://github.com/zhulianxing/dsh-kankan-mail) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) plugin |
| 347 | [zhulianxing/dsh-lookhere](https://github.com/zhulianxing/dsh-lookhere) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) plugin |
| 348 | [zhulianxing/dsh-starstack](https://github.com/zhulianxing/dsh-starstack) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness (DSH) plugin |
| 349 | [ziduup/dsh-programming-mode](https://github.com/ziduup/dsh-programming-mode) | 0 | 2026-08-24 | 2026-08-24 | DeepSeek Harness 编程模式组合包：标准模式之上强制执行 Superpowers 工程纪律(TDD、系统化调试、先计划后编码、完成前验证、代码审查)，内置全套 superpowers 技能，dsh plugin add 一键安装。 |
| 350 | [zsagi1368/dsh-webstack](https://github.com/zsagi1368/dsh-webstack) | 0 | 2026-08-23 | 2026-08-24 | WebStack (网栈) — integrated web search & fetch kernel plugin for DeepSeek Harness (DSH). 免费池开箱即搜 · SSRF 四道闸 · 双语诊断 |
| 351 | [zslzxy/aitoubiaoling-bid-review](https://github.com/zslzxy/aitoubiaoling-bid-review) | 0 | 2026-08-23 | 2026-08-24 | AI投标灵标书审核 Skill：稳定审核非扫描 PDF/DOCX 的商务标、技术标与通用文档风险 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- CarlMarkswx/dsh-imagen
- cdxDNRF/wishadel-theme
- daha1216/dsh-skill-adult-tension-narrative
- DaoCaoRenH/dsh-plugin-manager
- dsh-external/chat-width
- dsh-external/dsh-agent-teams
- dsh-external/dsh-at-file
- dsh-external/dsh-automation
- dsh-external/dsh-bash-encoding
- dsh-external/dsh-better-browser
- dsh-external/dsh-book2skill
- dsh-external/dsh-computer-use
- dsh-external/dsh-custom-tool
- dsh-external/dsh-cyber-sec
- dsh-external/dsh-daily-fortune
- dsh-external/dsh-deepcel
- dsh-external/dsh-deeplink
- dsh-external/dsh-doctor
- dsh-external/dsh-easy-ctx-manager
- dsh-external/dsh-fun-ticker
- dsh-external/dsh-fun-typewriter
- dsh-external/dsh-fun-weather
- dsh-external/dsh-genui
- dsh-external/dsh-grok-tui
- dsh-external/dsh-handoff
- dsh-external/dsh-input-history
- dsh-external/dsh-island
- dsh-external/dsh-minigames
- dsh-external/dsh-my-rsi
- dsh-external/dsh-notification
- dsh-external/dsh-nowledge-mem
- dsh-external/dsh-open-in-vscode
- dsh-external/dsh-openmaic
- dsh-external/dsh-paste-input
- dsh-external/dsh-pet
- dsh-external/dsh-pet-corner
- dsh-external/dsh-pi-adapter
- dsh-external/dsh-plan-execute
- dsh-external/dsh-plannotator
- dsh-external/dsh-plugin-guide
- dsh-external/dsh-qq2006
- dsh-external/dsh-revive
- dsh-external/dsh-session-hub
- dsh-external/dsh-spotlight
- dsh-external/dsh-STAGE
- dsh-external/dsh-STAR
- dsh-external/dsh-tps
- dsh-external/dsh-turn-rewind
- dsh-external/dsh-ui-progress
- dsh-external/dsh-ui-whale
- dsh-external/dsh-vision-toolkit
- dsh-external/dsh-visualize
- dsh-external/dsh-webui-live-html
- dsh-external/oh-my-dsh
- ExploringBB/dsh-edit-regenerate
- ExploringBB/dsh-plugin-restart-desktop
- FloatingLifeTL/dsh-plugin-session-manager-custom
- fryghost/deepseek-eyes
- GM-HZ/dsh-workflow
- gubai-future/dsh-background-web
- Hed1an/dsh-bring-local-llm
- JIAQI23333/dsh-visual-plan
- joshryandavis/dsh-llm-kiro
- lesliechowsh/dsh-memo
- liustack/aimanager
- lo2589/deepseek-harness-meida
- lvyunqi/dsh-memory-enhanced
- mhwww/dsh-bg-image
- mianyoubiaoqing/MistyMoon-DSH
- Mrzhailiming/deepseek-pet
- rayafriandion/deepseek-harness-tui
- saurtone/dsh-tool-somark
- sd3247930/SkyDome
- trewvip-arch/dsh-open-in-app
- ubggyhjb/mathmodel-agent
- ZekaiShi/smart-subagent
- zhouzhencheng07/dsh-free-search
- zhouzhencheng07/dsh-memory
- zhu1090093659/dsh-web-ui
