# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-21**
- 快照日期 / Snapshot date: **2026-08-21 (UTC)**
- 待审核 / Pending: **1290**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **203**

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
| 1 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 68567 | 2025-06-02 | 2026-08-21 | 🌊 The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| 2 | [nocobase/nocobase](https://github.com/nocobase/nocobase) | 23732 | 2020-10-24 | 2026-08-21 | NocoBase is an open-source AI + no-code platform for building business systems fast. Instead of generating everything from scratch, AI works on top of production-proven infrastructure and a WYSIWYG no-code interface, so you get both speed and reliability. |
| 3 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 20286 | 2025-07-22 | 2026-08-21 | Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki. |
| 4 | [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) | 445 | 2026-08-13 | 2026-08-21 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path to prompts. |
| 5 | [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) | 136 | 2026-08-16 | 2026-08-21 | A visual, non-linear conversation workspace plugin for DeepSeek Harness ; A canvas-based session explorer and branching workspace for DeepSeek Harness. |
| 6 | [Tabbit-Browser/dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) | 92 | 2026-08-14 | 2026-08-21 | Tabbit Browser plugins for Deepseek Harness |
| 7 | [EverMind-AI/SkillCorpus](https://github.com/EverMind-AI/SkillCorpus) | 61 | 2026-08-11 | 2026-08-21 | Open-source infrastructure that turns scattered SKILL.md files into curated, retrieval-ready agent-skill corpora—with retrieval and evaluation tooling included. |
| 8 | [skyf0xx/hedgehog](https://github.com/skyf0xx/hedgehog) | 28 | 2026-07-21 | 2026-08-21 | HEDGEHOG codes Cleaner, Faster and with Fewer Tokens. Hedgehog's AI-driven development builds a task dependency graph from your spec-driven, BMAD-METHOD plan, so Claude Code, Cursor & Gemini CLI stay locked to it. A CLI-enforced state machine for agentic coding. Now builds DeepSeek DSH Plugins. |
| 9 | [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) | 21 | 2026-08-19 | 2026-08-21 | DeepSeek Harness 个人中心:用量统计 / 自定义指令 / 成本估算 / 桌面宠物(纯本地，不联网）。 Personal center & custom instructions for DSH |
| 10 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) | 16 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 社区内置插件市场（dsh-plugin）— 搜索插件、下载并安装 4000+ 人工精选社区插件，每日更新、完全免费。内置在 Harness「设置 → 插件中心」，无需离开应用即可浏览、搜索、安装各类 AI 插件。 |
| 11 | [tonyd2wild/DeepSeek-Harness-Browser](https://github.com/tonyd2wild/DeepSeek-Harness-Browser) | 7 | 2026-08-21 | 2026-08-21 | An in-app browser pane for DeepSeek Harness — real Chrome over CDP, plus rendered previews of local files, markdown and PDFs. |
| 12 | [opqnext/moji-docs](https://github.com/opqnext/moji-docs) | 6 | 2026-04-16 | 2026-08-21 | MojiDocs 是一款跨平台的 Markdown Wiki 桌面应用，基于 Electron + Vue 3 + SQLite 构建。 |
| 13 | [mianyoubiaoqing/dsh-Mmem](https://github.com/mianyoubiaoqing/dsh-Mmem) | 5 | 2026-08-20 | 2026-08-21 | 这是一个支持同dsh进程多记忆空间的dsh记忆插件 |
| 14 | [Tokeii0/dsh-lovelyaudit](https://github.com/Tokeii0/dsh-lovelyaudit) | 5 | 2026-08-21 | 2026-08-21 | DSH web plugin: 黑盒/代审 sidebar workspace (P0–P7, per-finding SRC reports). |
| 15 | [evoelsewhere/evoflux](https://github.com/evoelsewhere/evoflux) | 4 | 2026-08-03 | 2026-08-21 | Evoflux is an open-source, local-first workspace where AI agents build software, conduct deep research, automate browser tasks, and collaborate in parallel. Connect any model, keep control of your workspace and data, and take complex work from idea to completion—all in one place. |
| 16 | [itcraft-cn/memrec](https://github.com/itcraft-cn/memrec) | 4 | 2026-06-01 | 2026-08-21 | Local-first AI memory with project isolation — for terminal, for private use |
| 17 | [beihzb/dsh-envsel](https://github.com/beihzb/dsh-envsel) | 3 | 2026-08-17 | 2026-08-21 | Per-session environment selector for DeepSeek Harness: Python / R / CLI slots from conda, standalone R, WSL, or custom paths, via /env, session_env, DSH_ENV_* facts, and a header dropdown. |
| 18 | [DamonBao/dsh-codex-suite](https://github.com/DamonBao/dsh-codex-suite) | 3 | 2026-08-14 | 2026-08-21 | OpenAI Codex provider for DeepSeek Harness with ChatGPT OAuth, native settings, and account usage. |
| 19 | [hibays/DSHL](https://github.com/hibays/DSHL) | 3 | 2026-08-15 | 2026-08-20 | 极简 DeepSeek Harness 桌面版：单EXE，~4M，即开即用；自动复用本地 dsh 安装、自安装/更新 dsh，启动完全可配置；托盘收纳时自动销毁UI层，内存占用极低，dsh 后台持续服务、随时唤回。 |
| 20 | [huabai-flowerwhite/dsh-plugin-design](https://github.com/huabai-flowerwhite/dsh-plugin-design) | 3 | 2026-08-21 | 2026-08-21 | 面向 DeepSeek Harness（dsh）第三方插件生态的 **Plugin Design**：发现第三方插件、检查其源码与配置、对照 DH-TP-SDK 工程化规范做静态分析、生成 `design.md`，经用户确认后对插件逐项修改并支持备份与回滚。 |
| 21 | [LAN-TINA-WS/dsh-windows-shell-policy](https://github.com/LAN-TINA-WS/dsh-windows-shell-policy) | 3 | 2026-08-21 | 2026-08-21 | DeepSeek Harness Windows 默认 Shell 策略：探测 git-bash/MSYS2，配置面板一键切换 bash/pwsh，动态注册 bash 工具并裁剪提示词工具面 · DSH 组合插件。 |
| 22 | [Lheyang/orca-dsh-launcher](https://github.com/Lheyang/orca-dsh-launcher) | 3 | 2026-08-16 | 2026-08-20 | 🐋 Orca DSH Launcher：DSH 更新检查 + 服务器启停 + 系统托盘 + 图形控制台 + 一键安装（Cordis 插件 + 桌面端） |
| 23 | [MistRain-1/dsh-reconnect](https://github.com/MistRain-1/dsh-reconnect) | 3 | 2026-08-18 | 2026-08-21 | 断线无限重新连接，适用于不稳定的API或者中转站 |
| 24 | [SamuFlore/query-balance](https://github.com/SamuFlore/query-balance) | 3 | 2026-08-21 | 2026-08-21 | DSH plugin for query API balance by asking question. |
| 25 | [sandbaseai/dsh-plugin-store](https://github.com/sandbaseai/dsh-plugin-store) | 3 | 2026-08-17 | 2026-08-20 | Native plugin marketplace for DeepSeek Harness: discover, filter, install, and manage 4,000+ community plugin packages. |
| 26 | [soyoungzsy/soya-workflows](https://github.com/soyoungzsy/soya-workflows) | 3 | 2026-08-20 | 2026-08-21 | 🏭 SOYA Workflows — enterprise workflow skills for DeepSeek Harness: notify (webhook), docs (Yuque API), intel (RSS), report (daily/weekly/monthly).  企业工作流四件套 AI 技能。 |
| 27 | [white-sand-grand/dsh-plugin-doctor](https://github.com/white-sand-grand/dsh-plugin-doctor) | 3 | 2026-08-16 | 2026-08-21 | 致力于解决各插件之间也与版本之间可能存在的冲突问题并提供解决方案 |
| 28 | [3361805598-gif/dsh-md-annotator](https://github.com/3361805598-gif/dsh-md-annotator) | 2 | 2026-08-15 | 2026-08-21 | DSH Markdown sidebar viewer and editor with block- and text-range annotations for structured revision requests. |
| 29 | [a1141171521/dsh-plugin-conflict-guard](https://github.com/a1141171521/dsh-plugin-conflict-guard) | 2 | 2026-08-20 | 2026-08-21 | 1.安装新插件前检测是否和现有插件存在冲突  2.检测已安装的插件是否存在冲突 |
| 30 | [baihejiangnan/dsh-plugin-pack](https://github.com/baihejiangnan/dsh-plugin-pack) | 2 | 2026-08-20 | 2026-08-21 | DSH plugin pack manifest, schema, validation and publishing guide |
| 31 | [beihzb/dsh-notebook](https://github.com/beihzb/dsh-notebook) | 2 | 2026-08-19 | 2026-08-21 | Native Jupyter-style notebook for DeepSeek Harness: real ipykernel sidecar + VS Code-aligned cell UI, tqdm progress, inline figures, per-cell AI revision. |
| 32 | [ciyuan1234/MCM_skills](https://github.com/ciyuan1234/MCM_skills) | 2 | 2026-08-15 | 2026-08-21 | 数学建模通用skills |
| 33 | [cloud-pkumdl/dsh-pdb](https://github.com/cloud-pkumdl/dsh-pdb) | 2 | 2026-08-21 | 2026-08-21 | dsh-pdb (Protein Design for Binder): agent-driven workflow orchestration for protein binder design. DAG-based plan visualization with human-in-the-loop review — unifying GUI-less protein design tools under one agentic pipeline. |
| 34 | [cocofhu/dsh-testsuite](https://github.com/cocofhu/dsh-testsuite) | 2 | 2026-08-19 | 2026-08-21 | testsuite of dsh plugins |
| 35 | [ExElectron/dsh-tool-hongtou](https://github.com/ExElectron/dsh-tool-hongtou) | 2 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 红头公文插件：两阶段解耦流水线（LLM 结构化提纲 + 确定性 Word 2003 XML 版式渲染）生成标准红头公文 |
| 36 | [fancr-code/dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的 Windows 桌面托盘启动器：无窗口运行 dsh web，快捷方式 + 系统托盘（打开界面/日志/退出即全退），一键安装。 |
| 37 | [Gaq152/dsh-credits](https://github.com/Gaq152/dsh-credits) | 2 | 2026-08-17 | 2026-08-21 | DeepSeek Harness（dsh web）额度插件：跟随当前模型显示官方余额或 OpenCode Go 订阅用量，支持本会话估算、跨会话累计消耗与可视化设置。 |
| 38 | [huabai-flowerwhite/dsh-plugin-manager](https://github.com/huabai-flowerwhite/dsh-plugin-manager) | 2 | 2026-08-21 | 2026-08-21 | 面向 DeepSeek Harness（dsh）的**第三方插件管理器**：在 Web UI 设置页选择第三方插件库文件夹，搜索其中所有第三方插件，并一键关闭/启动（刷新 dsh 后生效）。 |
| 39 | [huabai-flowerwhite/dsh-ui-skin](https://github.com/huabai-flowerwhite/dsh-ui-skin) | 2 | 2026-08-21 | 2026-08-21 | 面向 DeepSeek Harness 的 **UI 皮肤插件**：在 UI 下方注入壁纸 / 视频背景，并把 DSH 整个界面（含侧栏）的表面背景烘焙为半透明（毛玻璃）让皮肤透出。支持拖动裁剪缩放、历史皮肤记录与可拖动悬浮窗；自定义皮肤支持网络地址或本地文件。 |
| 40 | [linconz/agentduel-dsh](https://github.com/linconz/agentduel-dsh) | 2 | 2026-08-19 | 2026-08-21 | AgentDuel 是一个通过代码进行对战的游戏。允许你通过 AI 提交代码，并通过可回看的对战画面复盘整个战斗，然后再次优化。 \| Code your agent, watch it fight, tweak and rematch — all inside DeepSeek Harness. |
| 41 | [linxuhao/Deepseek-Continuity](https://github.com/linxuhao/Deepseek-Continuity) | 2 | 2026-08-20 | 2026-08-21 | 一个自带模型的multimodal deepseek harness 插件，提供生成的图/音一致性 |
| 42 | [lkh081231/screenshot-feedback-hook-mcp](https://github.com/lkh081231/screenshot-feedback-hook-mcp) | 2 | 2026-06-10 | 2026-08-21 | Let your coding agent SEE what it builds. Cross-platform screenshot feedback for AI agents: an MCP server, a Claude Code hook, and a native DeepSeek Harness plugin that drops screenshots straight into the conversation as images. Python + uv, zero install via uvx. Windows / Linux / macOS. |
| 43 | [master1Sun/dsh-prompt-library](https://github.com/master1Sun/dsh-prompt-library) | 2 | 2026-08-19 | 2026-08-21 | DSH（DeepSeek Harness）Web 插件：在 composer 工具栏注入一个「提示词库」按钮，管理可复用的 prompt 片段，点击即可插入当前输入框。支持自动学习：输入复杂 prompt 文案时，插件会自动识别并保存到提示词库。 |
| 44 | [MichengAI/dsh-codex-desktop-website](https://github.com/MichengAI/dsh-codex-desktop-website) | 2 | 2026-08-14 | 2026-08-21 | DeepSeek Harness Codex Desktop 官网 |
| 45 | [Saikel-Orado-Liu/dsh-coding-preset](https://github.com/Saikel-Orado-Liu/dsh-coding-preset) | 2 | 2026-08-15 | 2026-08-21 | Windows-adapted DSH coding agent preset with persistent PowerShell 7 (pwsh) and str_replace_editor, mirroring the official minimal preset. |
| 46 | [SpookySandwich/dsh-plugin-rollout-scout](https://github.com/SpookySandwich/dsh-plugin-rollout-scout) | 2 | 2026-08-20 | 2026-08-20 | DSH 刷灰测模型插件。DeepSeek Harness plugin: fish for a limited-rollout conversation model by scoring live chain-of-thought.  |
| 47 | [STFQ/dsh-showcase](https://github.com/STFQ/dsh-showcase) | 2 | 2026-08-19 | 2026-08-21 | Turn DeepSeek Harness session exports into redacted, README-ready animated demos with a local CLI — zero model calls. |
| 48 | [swarm-apps/dsh-swarmdrop](https://github.com/swarm-apps/dsh-swarmdrop) | 2 | 2026-08-21 | 2026-08-21 | Send files from your DeepSeek Harness agent straight to your phone, and reference what your phone sent back — no account, no public IP, end-to-end encrypted. |
| 49 | [WSL043/dsh-native-session-delete](https://github.com/WSL043/dsh-native-session-delete) | 2 | 2026-08-15 | 2026-08-21 | Permanent session deletion in the native DeepSeek Harness menu, with second confirmation and in-place refresh |
| 50 | [xiaosu19/dsh-codex-mode](https://github.com/xiaosu19/dsh-codex-mode) | 2 | 2026-08-18 | 2026-08-21 | Adaptive Codex and Codex PTC agent presets for DeepSeek Harness: native fast reads, run_code SDK pipelines, and published benchmarks |
| 51 | [XXLxhPLMM/dsh-start](https://github.com/XXLxhPLMM/dsh-start) | 2 | 2026-08-15 | 2026-08-21 | deepseek-harness 轻量启动器 |
| 52 | [zhenghaoyang24/dsh-desktop](https://github.com/zhenghaoyang24/dsh-desktop) | 2 | 2026-08-14 | 2026-08-20 | DeepSeek Harness desktop.DeepSeek Harness 桌面端。 |
| 53 | [111222cjyq/dsh-branch-visualizer](https://github.com/111222cjyq/dsh-branch-visualizer) | 1 | 2026-08-21 | 2026-08-21 | Developer Preview: persistent DeepSeek Harness session branch visualizer with navigation, rename, archive, and compatibility adapters. |
| 54 | [ai-yucheng/dsh-audio-copilot](https://github.com/ai-yucheng/dsh-audio-copilot) | 1 | 2026-08-20 | 2026-08-21 | Audio Copilot for DeepSeek Harness — transcribe audio (ASR) & synthesize speech (TTS), with an in-composer voice-input mic button. 🎤 |
| 55 | [ailoushu666/dsh-feishu-bridge](https://github.com/ailoushu666/dsh-feishu-bridge) | 1 | 2026-08-19 | 2026-08-21 | Feishu/Lark bot bridge for DeepSeek Harness — control DSH agents remotely from Feishu. |
| 56 | [amazing-tree-keeper/dsh-easy-lsp](https://github.com/amazing-tree-keeper/dsh-easy-lsp) | 1 | 2026-08-20 | 2026-08-21 | Language-server (LSP) manager for DeepSeek Harness: self-contained engine, one-click installer and proactive diagnostics |
| 57 | [amazing-tree-keeper/dsh-easy-mcp](https://github.com/amazing-tree-keeper/dsh-easy-mcp) | 1 | 2026-08-20 | 2026-08-21 | Visual MCP server manager for DeepSeek Harness: manage MCP servers from a settings UI with live updates, connect test and auto backup |
| 58 | [Asif2BD/JARVIS-Mission-Control-DeepSeek](https://github.com/Asif2BD/JARVIS-Mission-Control-DeepSeek) | 1 | 2026-08-17 | 2026-08-21 | Mission Control dashboard and human-review workflow for DeepSeek Harness sessions, turns, and tool activity. |
| 59 | [auki-zy/dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme) | 1 | 2026-08-20 | 2026-08-21 | Per-state mouse cursor theme plugin for DeepSeek Harness (DSH). 18 original preset themes covering 14 UI states, ZIP image pack import/export, hotspot/size editing, and one-click system-level cursor apply on Windows (registry + SPI_SETCURSORS) with an experimental macOS overlay. 为 DSH 自定义鼠标各种状态的图案，覆盖 14 种 UI 状态。 |
| 60 | [awesimon/research-agent-harness](https://github.com/awesimon/research-agent-harness) | 1 | 2026-08-21 | 2026-08-21 | Research Agent Harness is a plugin-driven runtime for building research agents over heterogeneous data sources.  |
| 61 | [cesarX-AI/dsh-zhipu-codingbar](https://github.com/cesarX-AI/dsh-zhipu-codingbar) | 1 | 2026-08-21 | 2026-08-21 | DSH web status bar for Zhipu GLM Coding Plan quotas |
| 62 | [Chenmo0414/tukey](https://github.com/Chenmo0414/tukey) | 1 | 2026-08-20 | 2026-08-21 | Turn your coding agent into a data analyst — DuckDB engine, auto-profiling, read-only SQL, and Vega-Lite charts rendered inside the conversation. A DeepSeek Harness plugin + an MCP server for Claude Code / Codex / Cursor. 图基：把编码 Agent 变成数据分析师 |
| 63 | [chongfengdy-dev/dsh-message-outline](https://github.com/chongfengdy-dev/dsh-message-outline) | 1 | 2026-08-19 | 2026-08-21 | DSH web UI plugin: current-session message outline rail (left-edge bars, hover to expand, click to jump). Pure frontend, zero external services. |
| 64 | [ChuShiZ/dsh-archive-manager](https://github.com/ChuShiZ/dsh-archive-manager) | 1 | 2026-08-20 | 2026-08-21 | DSH profile-bundle: 归档会话浏览/恢复/物理删除（FTS 全文搜索） |
| 65 | [codingDuan/dsh-plugin-xquant](https://github.com/codingDuan/dsh-plugin-xquant) | 1 | 2026-08-21 | 2026-08-21 | One-command xquant MCP integration for DeepSeek Harness |
| 66 | [Coffeiz/dsh-qqchat](https://github.com/Coffeiz/dsh-qqchat) | 1 | 2026-08-19 | 2026-08-21 | 不只是将QQ接入DeepSeek Harness，除了私聊/群聊，还支持会话管理，私聊/群聊/群友记忆，媒体处理和权限管理。 |
| 67 | [cokiscarazo-rgb/dsh-plugin-message-timeline-navigation](https://github.com/cokiscarazo-rgb/dsh-plugin-message-timeline-navigation) | 1 | 2026-08-21 | 2026-08-21 | Codex-style message timeline navigation for DSH web clients: hover to preview a message, click to jump to it, and the currently-read turn stays highlighted. |
| 68 | [cpt-kenvie/EmotionPet](https://github.com/cpt-kenvie/EmotionPet) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 情绪球桌宠：根据 Agent 状态显示表情，支持对话内停靠与桌面端。 |
| 69 | [creativedswork/dsh-uni-editor](https://github.com/creativedswork/dsh-uni-editor) | 1 | 2026-08-15 | 2026-08-21 | All Editors, one DSH Editor. Unified Editor runtime for DeepSeek Harness, powered by MCP Apps. |
| 70 | [csdjl88/dsh-web-restart](https://github.com/csdjl88/dsh-web-restart) | 1 | 2026-08-20 | 2026-08-21 | dsh-web-restart for deepseek harness restart |
| 71 | [cxdyun/dsh-skills-marketplace](https://github.com/cxdyun/dsh-skills-marketplace) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 版本的类 CodeX 插件市场 |
| 72 | [debabsah/superstack](https://github.com/debabsah/superstack) | 1 | 2026-08-02 | 2026-08-21 | A full engineering bench for your coding agent: the work survives any session, and every done comes with proof. Runs on Claude Code, Codex CLI, Copilot CLI, Kiro CLI, and DeepSeek Harness. |
| 73 | [derekhu0002/archgraph](https://github.com/derekhu0002/archgraph) | 1 | 2026-08-14 | 2026-08-21 | An architecture-graph driven framework for Agentic Engineering. |
| 74 | [DevRico003/dsh-verifier-gate](https://github.com/DevRico003/dsh-verifier-gate) | 1 | 2026-08-20 | 2026-08-21 | LLM-as-a-verifier plugin for DeepSeek Harness: end-of-turn quality gate, best-of-N selection and assessment tools (port of llm-as-a-verifier) |
| 75 | [dingdongji-hub/dsh-atom-commune-skin](https://github.com/dingdongji-hub/dsh-atom-commune-skin) | 1 | 2026-08-21 | 2026-08-21 | 原子朋克风格的共产主义公社 |
| 76 | [DingTalk-Real-AI/dsh-dingtalk](https://github.com/DingTalk-Real-AI/dsh-dingtalk) | 1 | 2026-08-20 | 2026-08-21 | Official DingTalk connector for DeepSeek Harness |
| 77 | [dragan2023/dsh-workspace-default-dir](https://github.com/dragan2023/dsh-workspace-default-dir) | 1 | 2026-08-20 | 2026-08-21 | Set the default initial directory of the dsh workspace directory picker (native + browse backends). Sets DSH_PICKER_INITIAL_DIR with self-healing patches and CLI. |
| 78 | [dreamer0323/dsh-desktop](https://github.com/dreamer0323/dsh-desktop) | 1 | 2026-08-17 | 2026-08-20 | 一个dsh桌面端应用，可自定义主题以及桌宠，内置了雾雨魔理沙主题。 |
| 79 | [duhu2000/dsh-mcp-connector](https://github.com/duhu2000/dsh-mcp-connector) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 通用 MCP连接器、连接管理与扩展市场：连接 MCP Server，发现工具与 Prompt，扩展 AI 技能；支持 OAuth/PKCE、API Key、JSON 导入。由企查查（Qichacha/QCC）团队发起维护。General-purpose MCP connector, connection manager, plugin, extension and integration marketplace. |
| 80 | [ExploringBB/dsh-plugin-restart-desktop](https://github.com/ExploringBB/dsh-plugin-restart-desktop) | 1 | 2026-08-21 | 2026-08-21 | DSH Desktop sidebar restart button: orderly relaunch of DSH Desktop from the sidebar settings row (based on desktopActions.requestRestart). |
| 81 | [Fish121380/auto-mouse](https://github.com/Fish121380/auto-mouse) | 1 | 2026-08-21 | 2026-08-21 | Windows desktop UI context picker for AI agents: select windows, UI elements, or screen regions with hover highlighting, UI Automation, screenshots, local OCR, and user-approved MCP output. Works with OpenAI Codex, DeepSeek Harness, and other MCP-compatible clients. |
| 82 | [FlyAIBox/dsh-llm-wiki](https://github.com/FlyAIBox/dsh-llm-wiki) | 1 | 2026-08-21 | 2026-08-21 | 一个面向 DeepSeek Harness（DSH）的 Markdown-first 知识库插件。它把本地文件、目录和网页整理为可由 Git/Obsidian 直接检查的 LLM Wiki，同时保留不可变原始证据、来源版本和可追溯引用 |
| 83 | [forgeturl/dsh-douyin-creator](https://github.com/forgeturl/dsh-douyin-creator) | 1 | 2026-08-20 | 2026-08-21 | 基于抖音官方资料的 DeepSeek Harness 自媒体插件：帮你做选题、审脚本、诊断流量、制定周计划，已用于《商道人物志》近 6 万粉丝实战。 |
| 84 | [fuxin123z/dsh-skill-manage](https://github.com/fuxin123z/dsh-skill-manage) | 1 | 2026-08-21 | 2026-08-21 | DSH plugin: agent-managed procedural memory — a skill_manage tool that lets the agent write, patch, disable and delete its own skills at runtime (user + project scope), with hot-reload and layered delete guards. |
| 85 | [GeekRicardo/claude-in-dsh](https://github.com/GeekRicardo/claude-in-dsh) | 1 | 2026-08-20 | 2026-08-21 | 在 dsh web 里用本机 Claude Code 驱动会话：原生渲染、权限档、模型/effort、命令面板、broker 托管进程 |
| 86 | [GeekRicardo/dsh-balance](https://github.com/GeekRicardo/dsh-balance) | 1 | 2026-08-14 | 2026-08-21 | DeepSeek Harness web 插件：输入框下方状态栏展示当前供应商的余额/用量 —— DeepSeek 官方余额 + 本会话花费，Kimi Coding、OpenCode Go、GLM Coding Plan 等订阅用量（支持的供应商见 README）。按 provider 判断、2 秒轮询实时切换、5 分钟缓存。 |
| 87 | [GeekRicardo/dsh-convmap](https://github.com/GeekRicardo/dsh-convmap) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness web 插件：在主对话区左缘中部渲染「对话地图」刻度（每条 = 一轮用户提问），hover 梯度展开并预览该轮提问/回复摘要，点击跳转（未渲染的老轮次自动分页加载后再跳），滚动时当前轮次自动高亮。 |
| 88 | [githezhihao/norma-project-explorer](https://github.com/githezhihao/norma-project-explorer) | 1 | 2026-08-21 | 2026-08-21 | Read-only VS Code-style project tree for Norma Harness and DeepSeek Harness |
| 89 | [guyuefangyuanl/deepseek-better-harness](https://github.com/guyuefangyuanl/deepseek-better-harness) | 1 | 2026-08-21 | 2026-08-21 | Better Harness evidence lanes as three independently installable DeepSeek Harness skill bundles. Zero runtime dependencies. |
| 90 | [HellowVirgil/dsh-antv-infographic](https://github.com/HellowVirgil/dsh-antv-infographic) | 1 | 2026-08-21 | 2026-08-21 | Render streaming, editable AntV infographics inside DeepSeek Harness replies. |
| 91 | [Howe829/dsh-runtime](https://github.com/Howe829/dsh-runtime) | 1 | 2026-08-20 | 2026-08-21 | Runtime observability and relationship graph for DeepSeek Harness and Cordis |
| 92 | [huguangyu666/dsh-plugin-backdrop](https://github.com/huguangyu666/dsh-plugin-backdrop) | 1 | 2026-08-20 | 2026-08-21 | dsh Web UI 动态背景：WebGL2 流体 + 字符鲸鱼游动(循环接缝赛博朋克故障转场) + 发光鱼群 + 点线网格 |
| 93 | [hviana/dsh-cli-bridge](https://github.com/hviana/dsh-cli-bridge) | 1 | 2026-08-19 | 2026-08-21 | DeepSeek Harness (DSH) plugin that delegates coding tasks to the Claude Code and Codex agent CLIs and streams the whole run live — autonomous control, multi-account, automatic install, git worktrees, and any Anthropic-compatible endpoint. |
| 94 | [hytime/dsh-client-ui-shortcuts](https://github.com/hytime/dsh-client-ui-shortcuts) | 1 | 2026-08-20 | 2026-08-21 | Profile-aware keyboard shortcuts for the DeepSeek Harness Web Client |
| 95 | [infosave2007/cortiq-router](https://github.com/infosave2007/cortiq-router) | 1 | 2026-08-20 | 2026-08-21 | Smart LLM request router for DeepSeek Harness — classifies prompts by task type and complexity via the allaigate semantic router, then dispatches to the best-suited model |
| 96 | [islibaodong/dsh-login](https://github.com/islibaodong/dsh-login) | 1 | 2026-08-17 | 2026-08-21 | Multi-user login gateway plugin for the DeepSeek Harness Web GUI: login wall, per-user conversation isolation, in-GUI user management |
| 97 | [jiaererw/dsh-plugin-chrome](https://github.com/jiaererw/dsh-plugin-chrome) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness browser visualization plugin: a visible Chrome window per session, 16 chrome_* agent tools, live view in the Web GUI. 浏览器可视化插件：每会话一个可见 Chrome 窗口，16 个 chrome_* 工具与实时画面。 |
| 98 | [jinzhengen964-cmyk/dsh-bg-skin](https://github.com/jinzhengen964-cmyk/dsh-bg-skin) | 1 | 2026-08-20 | 2026-08-21 | DSH web 背景皮肤插件：将 DSH 界面背景替换为本地图片（半屏居中覆盖对话区域，AI 输出卡片不透明） |
| 99 | [jonnycafong/office-farmer-emoji](https://github.com/jonnycafong/office-farmer-emoji) | 1 | 2026-08-16 | 2026-08-21 | 🧑‍🌾 agent 通用 skill / npm 包：把中国农村传统农具画成「搪瓷缸怀旧质感 + 打工人梗」的微信表情包（CLI / 编程 API / DSH 插件三种接入） |
| 100 | [joshryandavis/dsh-llm-kiro](https://github.com/joshryandavis/dsh-llm-kiro) | 1 | 2026-08-21 | 2026-08-21 | deeepseek-harness kiro plugin |
| 101 | [kaaaaahn/dsh-vision](https://github.com/kaaaaahn/dsh-vision) | 1 | 2026-08-21 | 2026-08-21 | DSH 本地视觉能力插件：macOS Vision OCR + ollama qwen3-vl 语义描述 + 上传图片桥接 |
| 102 | [kevinshi3200/persona-auditor](https://github.com/kevinshi3200/persona-auditor) | 1 | 2026-08-20 | 2026-08-21 | Persona Auditor — audit AI-generated code from a real user's perspective. Digital personas exhaustively traverse every user journey, then god's-eye attribution collapses bugs into a few root causes for precise fixing. Agent skill (Claude Code / Codex / Cursor / DSH). |
| 103 | [kk3ya03-star/dsh-lcx-codex](https://github.com/kk3ya03-star/dsh-lcx-codex) | 1 | 2026-08-20 | 2026-08-21 | DSH web search and native Responses V2 compaction for Sub2API or NewAPI GPT routes |
| 104 | [kob-repo/dsh-whale-celebration](https://github.com/kob-repo/dsh-whale-celebration) | 1 | 2026-08-21 | 2026-08-21 | a whale celebration ui plugin |
| 105 | [Kreatur-ECHO/dsh-task-complete-notifier](https://github.com/Kreatur-ECHO/dsh-task-complete-notifier) | 1 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 任务完成通知插件——DSH任务完成提醒：任务真正结束时右下角弹出置顶深色卡片，无音频 |
| 106 | [kyrielrving11/LoopForge](https://github.com/kyrielrving11/LoopForge) | 1 | 2026-06-25 | 2026-08-21 | LoopForge is a governance runtime for long-horizon AI coding tasks. It keeps the objective, hard constraints, near-term plan, evidence, approvals, and recovery state outside the coding Agent's conversation. |
| 107 | [Kytolly/dsh-evolve-in-git](https://github.com/Kytolly/dsh-evolve-in-git) | 1 | 2026-08-21 | 2026-08-21 | A deepseek-harness plugin, making your agent evolve in customed git repository. |
| 108 | [lengzhanbao/dsh-taffy-theme](https://github.com/lengzhanbao/dsh-taffy-theme) | 1 | 2026-08-21 | 2026-08-21 | DSH Web UI theme: Taffy Live Atelier - candy acrylic chat frame, light/dark stage art, Taffy agent preset |
| 109 | [licyer/dsh-token-monitor](https://github.com/licyer/dsh-token-monitor) | 1 | 2026-08-18 | 2026-08-21 | DSH Web 模型余量与用量监控插件 |
| 110 | [m1khal3v/dsh-llm-key-rotation](https://github.com/m1khal3v/dsh-llm-key-rotation) | 1 | 2026-08-20 | 2026-08-21 | Seamless API-key rotation for DeepSeek Harness |
| 111 | [Mempemp/DSH-CodeEditor_BSL](https://github.com/Mempemp/DSH-CodeEditor_BSL) | 1 | 2026-08-20 | 2026-08-21 | interactive CodeEditor for BSL |
| 112 | [motongv/dsh-vision-adapter](https://github.com/motongv/dsh-vision-adapter) | 1 | 2026-08-14 | 2026-08-21 | 给 DeepSeek Harness（DSH）加视觉能力的插件：装完就能拖图识别——图片交给视觉模型识别、文字交给 DeepSeek 推理，聊天入口完全不变。DSH 专属插件。 |
| 113 | [mrdevlorx/dsh-model-garden](https://github.com/mrdevlorx/dsh-model-garden) | 1 | 2026-08-20 | 2026-08-21 | A searchable, sortable model picker for the DeepSeek Harness Web UI — provider groups, favorites, models.dev prices, context windows, live per-task token cost and a local-model filter. One-command install: dsh plugin add dsh-model-garden. |
| 114 | [Mrlilili/dsh-plugin-model-switcher](https://github.com/Mrlilili/dsh-plugin-model-switcher) | 1 | 2026-08-21 | 2026-08-21 | ⌨️ DSH 插件：快捷键切换模型 (Ctrl+Shift+M) 和推理等级 (Ctrl+Shift+R)。纯客户端实现，无需 Host。  DSH plugin: keyboard shortcuts to cycle models (Ctrl+Shift+M) and reasoning effort levels (Ctrl+Shift+R). Pure client bundle, no Host required. |
| 115 | [Mutx163/dsh-model-memory](https://github.com/Mutx163/dsh-model-memory) | 1 | 2026-08-21 | 2026-08-21 | 🧠 DSH 自定义模型思考等级管理与偏好持久记忆插件 \| Custom model reasoning effort management & cross-session memory for DeepSeek Harness |
| 116 | [ne-ilyxa/dsh-session-drafts](https://github.com/ne-ilyxa/dsh-session-drafts) | 1 | 2026-08-21 | 2026-08-21 | Cursor-style New Session for DeepSeek Harness (DSH): every click mints a fresh durable draft session — plus a sidebar Drafts switcher to keep several empty chats open at once. |
| 117 | [nexlineai/dsh-tui](https://github.com/nexlineai/dsh-tui) | 1 | 2026-08-20 | 2026-08-21 | A full-screen interactive terminal UI for the DeepSeek Harness agent runtime — the web UI, reimagined for the terminal. |
| 118 | [nicearrack/dsh-translator](https://github.com/nicearrack/dsh-translator) | 1 | 2026-08-21 | 2026-08-21 | 基于 DSH 的有道风格划词翻译：划选即现「译」按钮，harness 自带大模型，零 API key / Youdao-style word-selection translation for DSH: select text, click 「译」, powered by the harness's own LLM, no API keys |
| 119 | [nishit130/dsh-notification](https://github.com/nishit130/dsh-notification) | 1 | 2026-08-21 | 2026-08-21 | know when your agent finishes a turn, hits an error, or is waiting for your approval — without watching the tab. |
| 120 | [nixiaohao/DeepSeek-Desktop-Studio](https://github.com/nixiaohao/DeepSeek-Desktop-Studio) | 1 | 2026-08-21 | 2026-08-21 | a desktop shell for deepseek-harness (dsh). Import deepseek-harness via zip or git, then self-pack and self-update with one click. Packaging-only: never forks or bundles deepseek-harness source; you bring your own workspace.  deepseek-harness（dsh）的桌面外壳，支持 zip/git 导入后一键自行打包与更新，纯打包项目、不内置官方源码。 |
| 121 | [NokorinNishikino/kidai-plugin-market-hub](https://github.com/NokorinNishikino/kidai-plugin-market-hub) | 1 | 2026-08-18 | 2026-08-21 | DeepSeek Harness 插件市场中心（Hub）：侧边栏一键启动的独立全屏市场页，支持多源目录（GitHub/npm/awesome）、一键安装、已装管理与卸载、孤儿插件扫描、通用安全防线（审计/入口校验/运行时兼容/自动修补）。 |
| 122 | [NSOiO/talon-ui](https://github.com/NSOiO/talon-ui) | 1 | 2026-08-13 | 2026-08-21 | Lightweight Terminal UI for DeepSeek Harness |
| 123 | [orchestral-media/orchestral](https://github.com/orchestral-media/orchestral) | 1 | 2026-08-18 | 2026-08-21 | TypeScript library for building multimedia-generation agents: text-to-image, video, speech and audio pipelines with capability-based model routing, automatic cross-model fallback, and BYOK direct provider calls (no gateway). 27 built-in patterns, provider-SDK-free core. |
| 124 | [oriliz/dsh-mcp-apps-host](https://github.com/oriliz/dsh-mcp-apps-host) | 1 | 2026-08-20 | 2026-08-20 | MCP Apps Host plugin for DeepSeek Harness: renders interactive HTML cards from MCP _meta.ui in sandboxed iframes, bridges postMessage to MCP tools/call and resources/read |
| 125 | [oxgbl/dsh-deepseek-price](https://github.com/oxgbl/dsh-deepseek-price) | 1 | 2026-08-21 | 2026-08-21 | ⏱️ DeepSeek 价格区间计时工具 \| DeepSeek Harness 插件：侧边栏高峰/空闲定价徽标 + 距半价倒计时 + 点击详情面板 + /price 命令 |
| 126 | [PaoMoXML/dsh-paste-names](https://github.com/PaoMoXML/dsh-paste-names) | 1 | 2026-08-21 | 2026-08-21 | dsh将非图片文件或文件夹以原生 @path 引用粘贴进聊天输入框，替代仅支持图片的报错。 |
| 127 | [peterwangze/dsh-reasoning-level](https://github.com/peterwangze/dsh-reasoning-level) | 1 | 2026-08-21 | 2026-08-21 | DSH (DeepSeek Harness) plugin: unified default reasoning level (thinking effort) for all models — per-model defaults with capability probing, live call statistics, one-command install via dsh plugin |
| 128 | [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu) | 1 | 2026-08-19 | 2026-08-21 | Unified capability menu for DeepSeek Harness — manage exposure level (context footprint) and execution mode of MCP tools & skills via Exposed/Progressive/Blocked tiers. |
| 129 | [PolinniZhong/dsh-session-kb](https://github.com/PolinniZhong/dsh-session-kb) | 1 | 2026-08-21 | 2026-08-21 | Session KB for DeepSeek Harness: full-text search across all past sessions and recall them as @references. 会话库：历史会话全文搜索与一键召回。 |
| 130 | [qiushi-dev/dsh-session-nexus](https://github.com/qiushi-dev/dsh-session-nexus) | 1 | 2026-08-20 | 2026-08-21 | Unofficial DeepSeek Harness plugin — sessions as addressable, first-class citizens: lifecycle controls + cross-session messaging. Companion to deepseek-harness#3640 |
| 131 | [R2h1/deepseek-harness-app](https://github.com/R2h1/deepseek-harness-app) | 1 | 2026-08-16 | 2026-08-20 | DeepSeek Harness 桌面端 —— 自包含的 ElectroBun 外壳，内置可自动更新的 dsh 引擎，附带 Windows 图形化安装程序 |
| 132 | [RayJinStudio/Deepseek_Harness_QTDesktop](https://github.com/RayJinStudio/Deepseek_Harness_QTDesktop) | 1 | 2026-08-21 | 2026-08-21 | DeepSeek Harness（dsh）的 Qt6 / QML 原生桌面客户端。 |
| 133 | [Retr67/dsh-desk-pet-yami](https://github.com/Retr67/dsh-desk-pet-yami) | 1 | 2026-08-20 | 2026-08-21 | DSH 桌面宠物插件 — 金色暗影 Yami（To Love-Ru）皮肤版。非营利，仅供学习交流，侵权请联系下架。 |
| 134 | [sha2kyou/dsh-settings-about](https://github.com/sha2kyou/dsh-settings-about) | 1 | 2026-08-21 | 2026-08-21 | dsh Settings → About plugin: runtime version, env, installed plugins (requires @deepseek-ai/dsh@0.1.1-rc.1) |
| 135 | [Shane-Jay/dsh-self-update](https://github.com/Shane-Jay/dsh-self-update) | 1 | 2026-08-20 | 2026-08-21 | In-app self-update for DeepSeek Harness git-source installs + optional native macOS shell |
| 136 | [ShanHaiFish/dsh-check-for-updates](https://github.com/ShanHaiFish/dsh-check-for-updates) | 1 | 2026-08-21 | 2026-08-21 | DSH 更新检查插件：首次打开自动检查新版本，取 npm 实际最高版本；左下方更新弹窗 +【更新到】按钮自动执行已校验升级（含安装后对盘校验）；UI 全部使用 DSH 语义化主题 token。 |
| 137 | [ShanHaiFish/dsh-plugin-manager-lite](https://github.com/ShanHaiFish/dsh-plugin-manager-lite) | 1 | 2026-08-21 | 2026-08-21 | DSH 第三方插件管理器（lite）：在设置页「插件 → 第三方插件」列出非官方插件，提供启用/停用（状态持久化、重启后保持）、卸载、检查更新、npm 一键安装/升级。A lite manager for third-party DeepSeek Harness plugins: list / enable / disable / uninstall / update. |
| 138 | [ShanHaiFish/Shimmering-dsh-plugins](https://github.com/ShanHaiFish/Shimmering-dsh-plugins) | 1 | 2026-08-21 | 2026-08-21 | 闪烁的 DSH 插件库 (Shimmering-dsh-plugins)：收录 @ShanHaiFish 个人开发的全部 DSH 第三方插件，提供功能简介与一键安装命令；各插件独立仓库、独立更新与发布。A personal collection of DSH plugins developed by ShanHaiFish, each in its own standalone repo. |
| 139 | [shaun5297/dsh-launcher](https://github.com/shaun5297/dsh-launcher) | 1 | 2026-08-20 | 2026-08-20 | One-click launcher for DeepSeek Harness: detect → start backend (dsh web) → wait ready → open Chrome new window. Zero-dependency CLI, cross-platform. |
| 140 | [shellexy/dsh-webviewgtk](https://github.com/shellexy/dsh-webviewgtk) | 1 | 2026-08-20 | 2026-08-20 | A GTK4 + WebKitGTK 6.0 based web launcher for dsh |
| 141 | [Shrbuz/dsh-web-notes](https://github.com/Shrbuz/dsh-web-notes) | 1 | 2026-08-21 | 2026-08-21 | Floating notes for the dsh web GUI: keep commands, credentials and snippets at hand, insert any note into the composer, save any selection as a note |
| 142 | [songying2024/dsh-plugin-lingxi](https://github.com/songying2024/dsh-plugin-lingxi) | 1 | 2026-08-21 | 2026-08-21 | dsh-plugin: 把 DeepSeek Harness 会话记录与工作区产物导入为灵犀（金山办公）可接手的新任务 |
| 143 | [ssjob123/dsh-file-panel-left](https://github.com/ssjob123/dsh-file-panel-left) | 1 | 2026-08-20 | 2026-08-21 | DSH web 插件：VSCode 风格左侧文件面板（文件树 / 编辑器 / 预览 / @引用，按会话隔离）VSCode-style left file panel for DSH web: explorer, editor, preview and @-references, isolated per session |
| 144 | [stark-L-1/dsh-peer-mailbox](https://github.com/stark-L-1/dsh-peer-mailbox) | 1 | 2026-08-21 | 2026-08-21 | DSH peer mailbox plugin v0.0.2 - inter-session communication via jsonl mailbox (peer_ask / peer_read_mailbox / peer_reply / peer_reset_limit) |
| 145 | [SUJIElearning/dsh-search-free-nokey](https://github.com/SUJIElearning/dsh-search-free-nokey) | 1 | 2026-08-20 | 2026-08-21 | Free web search plugin for DeepSeek Harness (DSH) - scrapes public Bing search results, no API key needed. |
| 146 | [T-MKT/dsh-ui-settings](https://github.com/T-MKT/dsh-ui-settings) | 1 | 2026-08-19 | 2026-08-20 | Provide generic UI customization settings for DeepSeek Harness, like wallpaper, theme color, etc.  |
| 147 | [taltara/capmark](https://github.com/taltara/capmark) | 1 | 2026-08-20 | 2026-08-20 | Capability manifests for AI agent plugins. Declare what a plugin may do, in Markdown, and check it. |
| 148 | [tanleikingsley913/dsh-management-suite](https://github.com/tanleikingsley913/dsh-management-suite) | 1 | 2026-08-21 | 2026-08-21 | Five open-source management plugins for DeepSeek Harness: MCP, Skills, project docs, rules and memory, and SSH. |
| 149 | [tatuke/agent-switch](https://github.com/tatuke/agent-switch) | 1 | 2026-04-14 | 2026-08-21 | Portable AI agent persona, identity, work principles, and safety protocol transfer system. |
| 150 | [ToBeWin/DSH-Pet-Companion](https://github.com/ToBeWin/DSH-Pet-Companion) | 1 | 2026-08-17 | 2026-08-21 | 为 DeepSeek Harness 提供一个可爱的动态桌面萌宠 |
| 151 | [ToBeWin/DSH-Plugin-Market](https://github.com/ToBeWin/DSH-Plugin-Market) | 1 | 2026-08-17 | 2026-08-21 | Local-first plugin manager for DeepSeek Harness profiles |
| 152 | [ToBeWin/DSH-Skin-Studio](https://github.com/ToBeWin/DSH-Skin-Studio) | 1 | 2026-08-17 | 2026-08-21 | 这是一个为 DeepSeek Harness 提供绚丽全局皮肤的独立插件 |
| 153 | [ToBeWin/DSH-Temporary-Chat](https://github.com/ToBeWin/DSH-Temporary-Chat) | 1 | 2026-08-17 | 2026-08-21 | Workspace-free temporary conversations for DeepSeek Harness |
| 154 | [TUcookie/dsh-offpeak-saver](https://github.com/TUcookie/dsh-offpeak-saver) | 1 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 错峰省钱调度器：让非紧急任务“错峰”运行，极致释放算力红利，降低使用成本。 |
| 155 | [uckkk/dsh-brunei](https://github.com/uckkk/dsh-brunei) | 1 | 2026-08-20 | 2026-08-21 | 文莱国家 |
| 156 | [w2829562572-dev/dsh-tool-squeeze](https://github.com/w2829562572-dev/dsh-tool-squeeze) | 1 | 2026-08-21 | 2026-08-21 | Evidence-preserving tool output compression for DeepSeek Harness — deterministic, local-first, and benchmarked. |
| 157 | [wang-kaopu/dsh-oauth](https://github.com/wang-kaopu/dsh-oauth) | 1 | 2026-08-20 | 2026-08-21 | Use ChatGPT (Codex) and Gemini Code Assist subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys |
| 158 | [webkong/dsh-plugin-sidebar](https://github.com/webkong/dsh-plugin-sidebar) | 1 | 2026-08-21 | 2026-08-21 | 🚀 为 DeepSeek Harness 而生的左右侧栏：左侧按工作区浏览会话（状态点/分组/搜索/移动到文件夹），右侧就地浏览文件 + Git 面板（状态/暂存/diff/提交/历史/分支）—— 会话管理像 IDE 一样顺手。 |
| 159 | [whateverboy2333/dsh-flat-teams](https://github.com/whateverboy2333/dsh-flat-teams) | 1 | 2026-08-21 | 2026-08-21 | Leaderless flat agent teams for DeepSeek Harness: cross-window structured task dispatch, recorder service, and web dashboard |
| 160 | [wht567/dsh-user-steer](https://github.com/wht567/dsh-user-steer) | 1 | 2026-08-21 | 2026-08-21 | Mid-turn user steering for DeepSeek Harness: /steer + /inject commands and an always-visible injection bar above the composer |
| 161 | [whw19761006/path-click](https://github.com/whw19761006/path-click) | 1 | 2026-08-14 | 2026-08-21 | Hover file paths and URLs in the DSH Web UI to reveal them in Explorer or open them in the default browser. |
| 162 | [wuweiran-web/dsh-beauty-persist](https://github.com/wuweiran-web/dsh-beauty-persist) | 1 | 2026-08-18 | 2026-08-21 | 让 DSH 桌面端壁纸持久不丢：支持 GIF 动图 & MP4 视频壁纸，内置全屏皮肤中心（上传、预览、一键应用、删除素材），重启、换端口、清缓存都不丢失。Server-side wallpaper & theme persistence for DSH Desktop — animated GIF / MP4 video wallpapers plus a full-screen skin center (upload, preview, apply, delete). |
| 163 | [xia-sc/dsh-cc-studio](https://github.com/xia-sc/dsh-cc-studio) | 1 | 2026-08-21 | 2026-08-21 | dsh-cc-studio · CCv3 角色卡工坊 从一句话点子到可导入 SillyTavern / Risu 的 chara_card_v3。专治「只有点子，世界观薄弱」。 |
| 164 | [xie-tj/dsh-token-usage-ledger](https://github.com/xie-tj/dsh-token-usage-ledger) | 1 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 的持久化用量账本与 Web 用量仪表盘插件 |
| 165 | [XSakura666/ChronoAgent](https://github.com/XSakura666/ChronoAgent) | 1 | 2026-08-15 | 2026-08-21 | Local-first desktop app that schedules AI agent tasks like cron jobs — zero token cost until they run. Write a task, set a time, and it runs automatically with files, web, MCP tools, and multi-model support.      |
| 166 | [yangfei222666-9/dsh-voice-gate](https://github.com/yangfei222666-9/dsh-voice-gate) | 1 | 2026-08-18 | 2026-08-21 | Voice gate plugin for DeepSeek Harness: HTTP text-in/voice-reply channel for phone access |
| 167 | [yanzhao77/deepseek_software](https://github.com/yanzhao77/deepseek_software) | 1 | 2026-08-21 | 2026-08-21 | Autonomous software factory built on DeepSeek Harness — turn natural-language requirements into real, tested, buildable and deployable software. |
| 168 | [Yinbenfeng/dsh-plugin-quick-draw-Tool-](https://github.com/Yinbenfeng/dsh-plugin-quick-draw-Tool-) | 1 | 2026-08-20 | 2026-08-21 | 使用comfyui本地给DSH建立快速的/免费的/强大的绘画能力。 |
| 169 | [zdk119746/dsh-llm-workbuddy](https://github.com/zdk119746/dsh-llm-workbuddy) | 1 | 2026-08-21 | 2026-08-21 | 可以在 DSH 中使用 WorkBuddy 里面的模型 |
| 170 | [Zhaokaka21/daily-sanxing](https://github.com/Zhaokaka21/daily-sanxing) | 1 | 2026-08-20 | 2026-08-20 | 一日三省 — 个人日常三件套（日结/日启/反思）：Claude Code 命令 + DSH skill \| A battle-tested personal daily workflow trio: Close, Start, Reflect. |
| 171 | [zhy201810576/dsh-zh-reasoning](https://github.com/zhy201810576/dsh-zh-reasoning) | 1 | 2026-08-21 | 2026-08-21 | 让 DeepSeek Harness 的思考（reasoning）与最终回答默认使用简体中文的中文插件 |
| 172 | [zixin947/dsh-compact](https://github.com/zixin947/dsh-compact) | 1 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 上下文自动压缩、手动压缩与溢出恢复插件 |
| 173 | [ZK-Andy/dotnet-deepseek-harness-desktop](https://github.com/ZK-Andy/dotnet-deepseek-harness-desktop) | 1 | 2026-08-19 | 2026-08-21 | DeepSeek Harness Desktop for .NET — 内置完整运行时的 .NET 桌面客户端（Ryn 原生 WebView），支持 macOS / Windows / Linux |
| 174 | [zuodazuoqiang001/dsh-pet](https://github.com/zuodazuoqiang001/dsh-pet) | 1 | 2026-08-21 | 2026-08-21 | Windows desktop pet plugin for DeepSeek Harness. Codex-compatible pets as a layered overlay, with a Plugins settings card. |
| 175 | [zx490336534/dsh-spec-collab](https://github.com/zx490336534/dsh-spec-collab) | 1 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 的独立双面插件，用于把产品的原始需求澄清为研发和开发 AI 可直接理解的 Ready Spec。产品、研发、产品 AI 与研发 AI 在同一份 Git 版本化 Markdown 上完成初审、逐项回复、二次审核、候选 patch、产研共审、Decision、分角色确认与 Ready 质量门。 |
| 176 | [1339190177/dsh-consult](https://github.com/1339190177/dsh-consult) | 0 | 2026-08-21 | 2026-08-21 | Cross-provider second opinions for DeepSeek Harness (dsh): consult tool, OpenAI-compatible endpoint, DSH_MODEL rerouting, scout (web-search investigation), structured output, upstream transparency, JSONL audit. Distinct from btspoony/dsh-advisor (passive per-turn review). |
| 177 | [250shiwo/dsh-plugin-market](https://github.com/250shiwo/dsh-plugin-market) | 0 | 2026-08-21 | 2026-08-21 | deepseek harness的简易插件市场 |
| 178 | [386842536/dsh-launcher](https://github.com/386842536/dsh-launcher) | 0 | 2026-08-19 | 2026-08-20 | DSH 启动器 — 双击一键启动 DeepSeek Harness / Double-click macOS launcher |
| 179 | [aefuimn/dsh-agent-preset-switcher](https://github.com/aefuimn/dsh-agent-preset-switcher) | 0 | 2026-08-19 | 2026-08-21 | Hot-switch agent presets (working modes) inside a running DSH session, instead of choosing a preset only when a session is created. |
| 180 | [AgentValet/dsh-agentvalet](https://github.com/AgentValet/dsh-agentvalet) | 0 | 2026-08-19 | 2026-08-21 | Governed platform access for DeepSeek Harness. Brokered credentials, owner-side approval, no API keys on the machine. |
| 181 | [AiLi1337/dsh-context-length](https://github.com/AiLi1337/dsh-context-length) | 0 | 2026-08-21 | 2026-08-21 | dsh-context-length 是一个 DSH（DeepSeek Harness）设置页插件。它会在设置面板「模型」的正下方新增一个「上下文长度」页面：从已配置的渠道（提供方）中选一个，再选该渠道下的某个模型，填一个上下文窗口数值（支持 131072、256K、1M 等写法），点击「保存」后才会写入 settings.yaml 并立即生效。未配置的内置渠道不会出现在列表里；已自定义的模型会集中展示在页面底部，并支持一键「恢复默认」。整个页面完全走官方设置接口，宿主端始终是唯一事实源，安全且无副作用。 |
| 182 | [aispin-dev/llm-as-a-Verifier-dsh](https://github.com/aispin-dev/llm-as-a-Verifier-dsh) | 0 | 2026-08-21 | 2026-08-21 | LLM-as-a-Verifier (arXiv:2607.05391) as a dsh plugin — Best-of-N conversation mode: give DeepSeek V4 Flash test-time scaling. Bo5 self-verification hits 88% on Terminal-Bench 2.1, beating some frontier models at a fraction of the cost. Fine-grained logprob-expectation scoring, PPT tournament, zero-config. |
| 183 | [alone-tree/dsh-skill-mcp-manager](https://github.com/alone-tree/dsh-skill-mcp-manager) | 0 | 2026-08-19 | 2026-08-21 | 能力库 (Capability) — one-stop visual management of DSH Skills & MCP: on-demand MCP loading, in-session hot reload, and SKILL/MCP descriptions viewable in the plugin. |
| 184 | [alpacachen/dsh-worktree](https://github.com/alpacachen/dsh-worktree) | 0 | 2026-08-21 | 2026-08-21 | Creates Git worktrees and opens them as DSH Workspaces in DeepSeek Harness. |
| 185 | [Alvinpro/DSH-Launcher](https://github.com/Alvinpro/DSH-Launcher) | 0 | 2026-08-19 | 2026-08-20 | A single-file Rust Windows OS launcher for the dsh (DeepSeek Harness) web UI — no WebView2, no runtime deps, just a few hundred KB. Double-click to start; close the browser and the whole process tree is torn down — no terminal to babysit, no leftover node processes holding the port, no console flash. |
| 186 | [ANOKO1122/dsh-checkpoints](https://github.com/ANOKO1122/dsh-checkpoints) | 0 | 2026-08-21 | 2026-08-21 | DSH conversation checkpoints: locate / rewind / edit user instructions with file snapshots and per-file undo. DSH conversation checkpoint plugin |
| 187 | [Apkawa/dsh-plugins](https://github.com/Apkawa/dsh-plugins) | 0 | 2026-08-20 | 2026-08-21 | A collection of plugins for deepseek-harness (dsh) |
| 188 | [ARCJ137442/dsh-plugin-custom-provider-raw-key](https://github.com/ARCJ137442/dsh-plugin-custom-provider-raw-key) | 0 | 2026-08-21 | 2026-08-21 | 自定义设置，提供商token，不限制sk-前缀 |
| 189 | [ardli-firman/dsh-model-search-plugin](https://github.com/ardli-firman/dsh-model-search-plugin) | 0 | 2026-08-21 | 2026-08-21 | Searchable model selector for DeepSeek Harness — search models by name instead of scrolling |
| 190 | [asdshuaishuai/websearch-plugins](https://github.com/asdshuaishuai/websearch-plugins) | 0 | 2026-08-19 | 2026-08-21 | API-key-free aggregate search (16 domestic+overseas engines with result-layer failure filtering) plus direct target-URL fetch with SSRF protection, as providers for the DeepSeek Harness web seam (ctx.web). |
| 191 | [Asteroid0449/dsh-agent-plugin-research](https://github.com/Asteroid0449/dsh-agent-plugin-research) | 0 | 2026-08-21 | 2026-08-21 | 面向 DeepSeek Harness 的 agent 专用插件调查与安装工具桥。它不提供设置页、可视化市场、客户端 bundle 或 Web 路由。 |
| 192 | [Asteroid0449/dsh-restart-resume](https://github.com/Asteroid0449/dsh-restart-resume) | 0 | 2026-08-21 | 2026-08-21 | 面向 DeepSeek Harness 的安全自重启与同会话续接插件。 |
| 193 | [avaritiachaos/dsh-plugin-multimodal-bridge](https://github.com/avaritiachaos/dsh-plugin-multimodal-bridge) | 0 | 2026-08-18 | 2026-08-21 | Dynamic multimodal-to-text projection and cross-model vision bridge for DeepSeek Harness (dsh) |
| 194 | [Ayle5678/dsh-auto-guard](https://github.com/Ayle5678/dsh-auto-guard) | 0 | 2026-08-20 | 2026-08-20 | 一款DSH (DeepSeek Harness) 插件：类似 Claude Code 中 Auto Mode 的一种命令通过机制，给 dsh中的full access 加一层 LLM 安全网的自动审批插件。 |
| 195 | [baidang201/dsh-hardware-buddy](https://github.com/baidang201/dsh-hardware-buddy) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness host plugin: mirror agent state to a StickS3 pet over USB CDC, physical A/B approval, cheerleader voice (dsh-plugin) |
| 196 | [baihejiangnan/dsh-plugin-pack-ai-share-template](https://github.com/baihejiangnan/dsh-plugin-pack-ai-share-template) | 0 | 2026-08-21 | 2026-08-21 | 用于生成、验证并发布 DSH 插件包的严谨 AI 提示词模板 |
| 197 | [baldovinmarques391-design/dsh-plugin-glm-vision](https://github.com/baldovinmarques391-design/dsh-plugin-glm-vision) | 0 | 2026-08-20 | 2026-08-21 | GLM Vision plugin for DSH: image translation for non-multimodal models via GLM-4V-Flash |
| 198 | [baochaofan0404/gpt-dsh-bridge](https://github.com/baochaofan0404/gpt-dsh-bridge) | 0 | 2026-08-19 | 2026-08-21 | GPT（ChatGPT 网页）驱动 DeepSeek Harness 自动化执行：MCP Bridge + 任务编排状态机 |
| 199 | [Bene-2020/plane-dsh-plugin](https://github.com/Bene-2020/plane-dsh-plugin) | 0 | 2026-08-21 | 2026-08-21 | Plane-powered project management for DeepSeek Harness (DSH). |
| 200 | [BigAdam-h/dsh-api-meter](https://github.com/BigAdam-h/dsh-api-meter) | 0 | 2026-08-20 | 2026-08-20 | 多供应商 API 用量/余额监控插件（DeepSeek Harness） |
| 201 | [Biobuilder-ai/dsh-plugin-ui-toggle](https://github.com/Biobuilder-ai/dsh-plugin-ui-toggle) | 0 | 2026-08-20 | 2026-08-21 | deepseek-harness的插件，可以在web页面直接开关插件，轻量方便 |
| 202 | [blaxel-ai/deepseek-harness-blaxel-sandbox](https://github.com/blaxel-ai/deepseek-harness-blaxel-sandbox) | 0 | 2026-08-21 | 2026-08-21 | Blaxel sandbox execution plugin for DeepSeek Harness |
| 203 | [boomzikazita/dsh-spec-gate](https://github.com/boomzikazita/dsh-spec-gate) | 0 | 2026-08-20 | 2026-08-20 | Specification gate plugin for DeepSeek Harness: Socratic interview (ambiguity scoring) + immutable Seed locking + pre-delivery acceptance gate |
| 204 | [Bortor/dsh-fingerprint-show](https://github.com/Bortor/dsh-fingerprint-show) | 0 | 2026-08-21 | 2026-08-21 | dsh-fingerprint-show — DSH plugin: show the DeepSeek fingerprint in the sidebar |
| 205 | [bpc-oss/dsh-fork-to-preset](https://github.com/bpc-oss/dsh-fork-to-preset) | 0 | 2026-08-21 | 2026-08-21 | Fork any DeepSeek Harness session into a different agent preset — a UI button with preset picker in the conversation header. |
| 206 | [brilliant751/dsh-web-search-litellm](https://github.com/brilliant751/dsh-web-search-litellm) | 0 | 2026-08-21 | 2026-08-21 | LiteLLM /v1/search web search provider for DeepSeek Harness (ctx.web) |
| 207 | [bychv/dsh-stcardwriter](https://github.com/bychv/dsh-stcardwriter) | 0 | 2026-08-20 | 2026-08-21 | 面向 DeepSeek Harness  的 SillyTavern 创作插件。 |
| 208 | [Canson666/dsh-finish-reason-patch](https://github.com/Canson666/dsh-finish-reason-patch) | 0 | 2026-08-20 | 2026-08-21 | 将gpt之类的项目在dsh中出现without finish reason的情况解决，可以正常使用gpt模型 |
| 209 | [CH4ACKO3/bites-the-dsh](https://github.com/CH4ACKO3/bites-the-dsh) | 0 | 2026-08-19 | 2026-08-21 | Read-only, scriptable session playback for the DeepSeek Harness WebUI |
| 210 | [CH4ACKO3/dsh-render-engine](https://github.com/CH4ACKO3/dsh-render-engine) | 0 | 2026-08-20 | 2026-08-21 | Shiki, syntax highlighting, and code rendering services for DeepSeek Harness |
| 211 | [CH4ACKO3/the-binding-of-dsh](https://github.com/CH4ACKO3/the-binding-of-dsh) | 0 | 2026-08-19 | 2026-08-21 | Bidirectional DSH Connection and Typert Gateway integration |
| 212 | [chaserchan/dsh-plugin-global-prompt](https://github.com/chaserchan/dsh-plugin-global-prompt) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: a global-prompt textarea in Settings > General, injected into every conversation system prompt |
| 213 | [cheesehaqi/dsh-qq-onebot-bridge](https://github.com/cheesehaqi/dsh-qq-onebot-bridge) | 0 | 2026-08-21 | 2026-08-21 | 尝试为您自己搭建属于自己的QQ小助手吧 / Try building your own QQ assistant for yourself |
| 214 | [chendefine/dsh-hooks-claude-code-per-workspace](https://github.com/chendefine/dsh-hooks-claude-code-per-workspace) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness plugin: run each workspace's own Claude Code command hooks (per-session .claude/settings.json discovery) |
| 215 | [chendefine/dsh-web-fetch-playwright](https://github.com/chendefine/dsh-web-fetch-playwright) | 0 | 2026-08-21 | 2026-08-21 | Playwright/CDP web-fetch provider for DeepSeek Harness: renders pages in a real browser, denoises them (Readability + DOMPurify), and returns markdown. |
| 216 | [chenjie1129/remotion-video-plugin](https://github.com/chenjie1129/remotion-video-plugin) | 0 | 2026-08-21 | 2026-08-21 | Remotion video creation skill plugin for DeepSeek Harness |
| 217 | [chenjieya/dsh-runbook-ops](https://github.com/chenjieya/dsh-runbook-ops) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 社区 Runbook 插件：用 YAML 管理开发、测   试、发布和运维 SOP，并将流程暴露为可校验、可审计的 Harness   工具。 |
| 218 | [chenxin105/dsh-lark-bridge](https://github.com/chenxin105/dsh-lark-bridge) | 0 | 2026-08-20 | 2026-08-21 | 飞书智能体桥接deepseek-harness插件 |
| 219 | [citedy/dsh-telegram-bot](https://github.com/citedy/dsh-telegram-bot) | 0 | 2026-08-20 | 2026-08-21 | Deepseek Harness Telegram Bot |
| 220 | [Ck-epsilon/aura-vision](https://github.com/Ck-epsilon/aura-vision) | 0 | 2026-08-19 | 2026-08-21 | Aura Vision - free vision OCR plugin for DeepSeek Harness web profile (permanent bundle, GLM-4V-Flash free tier, tile-based long-document recognition) |
| 221 | [Cruciforms/dsh-socrates](https://github.com/Cruciforms/dsh-socrates) | 0 | 2026-08-20 | 2026-08-20 | Socratic clarify-first deep research plugin for DeepSeek Harness: adaptive multi-round research with evidence-closed cited reports, cross-verification, and citation auditing. |
| 222 | [cyanfish-x/dsh-picture-fit](https://github.com/cyanfish-x/dsh-picture-fit) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin + Agent Skill: auto-fit oversized images with sharp before attachment admission |
| 223 | [daoing/dsh-daoing-memory](https://github.com/daoing/dsh-daoing-memory) | 0 | 2026-08-20 | 2026-08-21 | deepseek harness  memory plugin |
| 224 | [dawei008/dsh-session-telemetry-otlp-trace](https://github.com/dawei008/dsh-session-telemetry-otlp-trace) | 0 | 2026-08-21 | 2026-08-21 | OpenTelemetry GenAI trace plugin for DeepSeek Harness |
| 225 | [Dawn388887/dsh-fileview](https://github.com/Dawn388887/dsh-fileview) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: in-GUI file viewer/editor for remote browsers (same-origin fenced, path allowlisted) |
| 226 | [Dawn388887/dsh-notify](https://github.com/Dawn388887/dsh-notify) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: desktop toast + remote browser notifications when an agent finishes or errors |
| 227 | [deckdco/novel-harness](https://github.com/deckdco/novel-harness) | 0 | 2026-08-16 | 2026-08-21 | DeepSeek Harness plugin for long-form novel writing: context engine, chapter management, checkers, and variant comparison |
| 228 | [deepseekbluefish/dsh-screenshot-plugin](https://github.com/deepseekbluefish/dsh-screenshot-plugin) | 0 | 2026-08-21 | 2026-08-21 | WeChat-style in-app screenshot button for DeepSeek Harness: drag to capture a region, auto-numbered PNGs, [Shot N HH:mm] marker written into the composer. |
| 229 | [Delta-Water/dsh-conservative-anchor](https://github.com/Delta-Water/dsh-conservative-anchor) | 0 | 2026-08-21 | 2026-08-21 | 稳健的 DeepSeek Harness 两阶段首请求锚定 preset |
| 230 | [dongsheng123132/dsh-config-origin-proof](https://github.com/dongsheng123132/dsh-config-origin-proof) | 0 | 2026-08-21 | 2026-08-21 | Content-addressed DSH configuration origin and shadowing evidence |
| 231 | [dongsheng123132/dsh-decision-effect-proof](https://github.com/dongsheng123132/dsh-decision-effect-proof) | 0 | 2026-08-21 | 2026-08-21 | Content-addressed proof that DSH authorization decisions and recorded effects agree |
| 232 | [dongsheng123132/dsh-loader-settlement-proof](https://github.com/dongsheng123132/dsh-loader-settlement-proof) | 0 | 2026-08-21 | 2026-08-21 | Content-addressed proof for recorded DSH Loader activation, injection closure, and tool schema settlement. |
| 233 | [dongsheng123132/dsh-output-custody-proof](https://github.com/dongsheng123132/dsh-output-custody-proof) | 0 | 2026-08-21 | 2026-08-21 | Content-addressed proof for body-free DSH tool-result retention and spill custody |
| 234 | [dongsheng123132/dsh-schema-migration-proof](https://github.com/dongsheng123132/dsh-schema-migration-proof) | 0 | 2026-08-21 | 2026-08-21 | Content-addressed DSH evidence for schema migration idempotence, rollback, invariants, and explicit loss disclosure. |
| 235 | [DreamsTOF/dsh-prompt-customizer](https://github.com/DreamsTOF/dsh-prompt-customizer) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness (dsh) 系统提示词与工具定制插件：屏蔽/替换/注入/排序提示词段、黑白名单隐藏工具、预设保存/应用/导出/导入，全部通过设置面板操作。 |
| 236 | [dshhub-co/dshhub-market](https://github.com/dshhub-co/dshhub-market) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 口令插件市场客户端：输码解锁插件，连接创作者与买家（DSHHub.co 驱动） |
| 237 | [dushaobindoudou/dsh-refine](https://github.com/dushaobindoudou/dsh-refine) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness (dsh) plugin — /refine command + settings panel for the dsh-continual-harness self-refinement engine. npm: dsh-refine |
| 238 | [EdwardHamu/dsh-glassmorphism-theme](https://github.com/EdwardHamu/dsh-glassmorphism-theme) | 0 | 2026-08-21 | 2026-08-21 | 一个DeepSeek Harness 磨砂玻璃主题 |
| 239 | [Elinpf/dsh-plugin-forge](https://github.com/Elinpf/dsh-plugin-forge) | 0 | 2026-08-21 | 2026-08-21 | An agent skill for developing DeepSeek Harness plugins |
| 240 | [ErEbusE/dsh-termux](https://github.com/ErEbusE/dsh-termux) | 0 | 2026-08-20 | 2026-08-21 | 在 Termux(An droid)上运行 DeepSeek Harness(dsh)。Run DeepSeek Harness(dsh) on Termux (Android). |
| 241 | [Esperi/dsh-uispec](https://github.com/Esperi/dsh-uispec) | 0 | 2026-08-20 | 2026-08-20 | 规格驱动的 UI 原型生成插件（DeepSeek Harness）：解析 .uispec YAML 规格并生成自包含 HTML 预览 |
| 242 | [EternalNight996/dsh-memory-eternal](https://github.com/EternalNight996/dsh-memory-eternal) | 0 | 2026-08-21 | 2026-08-21 | 记忆核心（Memory Eternal）：把 boujoy-harness 记忆模块搬进任意 DeepSeek Harness 的独立插件——对话自动沉淀知识卡到本地 Markdown Vault（去重/检索/知识图谱），零人工干预 |
| 243 | [fatherplus/dsh-superpowers-zh](https://github.com/fatherplus/dsh-superpowers-zh) | 0 | 2026-08-21 | 2026-08-21 | Core Superpowers-zh engineering skills for DeepSeek Harness |
| 244 | [fightingFirefox/dsh-glm-vision](https://github.com/fightingFirefox/dsh-glm-vision) | 0 | 2026-08-21 | 2026-08-21 | 在dsh中接入智谱 GLM 视觉模型，让 DeepSeek 等文本模型通过 glm_vision 工具看图。 |
| 245 | [FlyingFreeOwl/dshgirl-starter](https://github.com/FlyingFreeOwl/dshgirl-starter) | 0 | 2026-08-20 | 2026-08-21 | An integrated starter plugin for newly installed DeepSeek Harness (DSH). Combines whale-girl persona injection, desktop pet, balance widget, notes, reminders, shared long-term memory, and low-token memory tools. |
| 246 | [fuzhengwei/wali-dsh-plugin](https://github.com/fuzhengwei/wali-dsh-plugin) | 0 | 2026-08-20 | 2026-08-21 | Deepseek Harness 宠物插件 |
| 247 | [Gaq152/dsh-attention](https://github.com/Gaq152/dsh-attention) | 0 | 2026-08-20 | 2026-08-21 | dsh 提醒插件：别错过需要你的时刻 |
| 248 | [Gastronomicluna/Matrix-code](https://github.com/Gastronomicluna/Matrix-code) | 0 | 2026-08-21 | 2026-08-21 | 我去！是代码领域大神！    DeepSeek Harness 矩阵思维插件：思考化作代码雨，CLI 风格对话页 |
| 249 | [GeekRicardo/dsh-cordis-mcp](https://github.com/GeekRicardo/dsh-cordis-mcp) | 0 | 2026-08-19 | 2026-08-21 | DeepSeek Harness 插件：把 DSH 的动态 Cordis 工具集（inspect/define/run/stop/undefine）以 MCP 暴露给 Claude Code。端点强制身份认证，token 可在 DSH 设置页配置。 |
| 250 | [GIStudio/ai-companion-reading](https://github.com/GIStudio/ai-companion-reading) | 0 | 2026-08-21 | 2026-08-21 | AI 伴学模式 skill：逐段阅读 PDF/论文，苏格拉底追问 + teach-back + 间隔回顾，维护跨会话学习档案（DeepSeek Harness / DSH 插件） |
| 251 | [Github-CJX/dsh-session-dustbin](https://github.com/Github-CJX/dsh-session-dustbin) | 0 | 2026-08-21 | 2026-08-21 | DSH 会话管理插件归档/活跃会话、查看归档对话内容、删除会话。 |
| 252 | [goku54477/dsh-opencode-provider](https://github.com/goku54477/dsh-opencode-provider) | 0 | 2026-08-20 | 2026-08-21 | Use OpenCode models, including free models, inside DeepSeek Harness without a separate provider API key. |
| 253 | [guaguasong/dsh-attachment-s3](https://github.com/guaguasong/dsh-attachment-s3) | 0 | 2026-08-20 | 2026-08-21 | S3 storage backend for the DeepSeek Harness attachment seam: content-addressed, write-once objects with verified reads, installable with one dsh plugin command. |
| 254 | [HackenLeung/dsh-meme-deep-dive](https://github.com/HackenLeung/dsh-meme-deep-dive) | 0 | 2026-08-21 | 2026-08-21 | 为 DeepSeek Harness Web 提供可自定义 GIF 表情互动的 DSH 插件，支持发送消息和 Deep diving 状态动画 |
| 255 | [hamliy-feng/duhai-vision](https://github.com/hamliy-feng/duhai-vision) | 0 | 2026-08-08 | 2026-08-21 | Visual model adapter for Codex and DeepSeek Harness, powered by PaddleOCR-VL and Qwen. |
| 256 | [hanhan1137/feedback-loop-dsh](https://github.com/hanhan1137/feedback-loop-dsh) | 0 | 2026-08-21 | 2026-08-21 | Feedback learning loop skill for DSH: log feedback, keep consistent stances, full persistence chain (DSH-adapted from feedback-loop) |
| 257 | [hanhan1137/theme-coach-dsh](https://github.com/hanhan1137/theme-coach-dsh) | 0 | 2026-08-21 | 2026-08-21 | theme-coach-dsh: DSH (DeepSeek Harness) adapted UI theme coach - Q&A guided theme design, official-asset wayfinding, palette derivation, contrast checks (based on openclaw-ui-theme-coach v1.5.0) |
| 258 | [hanjf12/dsh-spend-plus](https://github.com/hanjf12/dsh-spend-plus) | 0 | 2026-08-19 | 2026-08-21 | dsh-spend + DeepSeek account balance (usage dashboard + CNY balance, peak/off-peak) |
| 259 | [HanneLEE/dsh-agent-state](https://github.com/HanneLEE/dsh-agent-state) | 0 | 2026-08-20 | 2026-08-21 | DSH 外置状态机插件 · 幻觉抑制守卫 + 证据背书验证 + 上下文经济 · Structured state machine for long-horizon autonomous agents |
| 260 | [Harzva/dsh-plugin-registry](https://github.com/Harzva/dsh-plugin-registry) | 0 | 2026-08-21 | 2026-08-21 | Public-safe, first-party registry for Harzva-maintained DeepSeek Harness plugins |
| 261 | [Heeweelee/dsh-session-plugin](https://github.com/Heeweelee/dsh-session-plugin) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin: input-box history recall (Up/Down) and right-click archive for workspace sessions |
| 262 | [heiheiha798/dsh-plugin-subagent-delete](https://github.com/heiheiha798/dsh-plugin-subagent-delete) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: delete_subagent tool + UI - release or permanently remove subagent sessions from the DeepSeek Harness web UI |
| 263 | [Huauauaa/dsh-privacy-mask](https://github.com/Huauauaa/dsh-privacy-mask) | 0 | 2026-08-20 | 2026-08-21 | dsh-privacy-mask |
| 264 | [huaxiren6/dsh-email-reader](https://github.com/huaxiren6/dsh-email-reader) | 0 | 2026-08-20 | 2026-08-21 | IMAP email reader for DeepSeek Harness: list, read, and search mail via imapflow (email_list / email_read / email_search). |
| 265 | [huaxiren6/dsh-remote-qr-button](https://github.com/huaxiren6/dsh-remote-qr-button) | 0 | 2026-08-19 | 2026-08-21 | Floating phone-pairing QR button for the DSH WebUI. Companion UI for dsh-remote-link. |
| 266 | [huaxiren6/dsh-sms-webhook](https://github.com/huaxiren6/dsh-sms-webhook) | 0 | 2026-08-20 | 2026-08-21 | SMS forwarding webhook for DeepSeek Harness: receive pushes from phone SMS Forwarder apps, store them, expose sms_recent / sms_search tools. |
| 267 | [hyyhf/mindgarden](https://github.com/hyyhf/mindgarden) | 0 | 2026-08-21 | 2026-08-21 | a deepseek harness plugin |
| 268 | [iiiweiii/dsh-guardwall](https://github.com/iiiweiii/dsh-guardwall) | 0 | 2026-08-21 | 2026-08-21 | Runtime security guardrail for DeepSeek Harness: blocks dangerous tool inputs (destructive cmds, credentials, SSRF, reverse shells), audits output leaks, tamper-proof HMAC chained audit logs. Zero deps. |
| 269 | [InformationDS/DSHAIKanBan](https://github.com/InformationDS/DSHAIKanBan) | 0 | 2026-08-17 | 2026-08-21 | AIKanBan for DSH：任务分配给对话完成的 Trello 式项目看板插件。全宽看板视图 Tab、拖拽流转、跨会话版本化记忆交接、看板内新建对话与绑定。 |
| 270 | [iqingyoung/429-throttle-mcp](https://github.com/iqingyoung/429-throttle-mcp) | 0 | 2026-08-20 | 2026-08-21 | 带限流 MCP 代理 + Agent 操作员技能,告别免费 API 的 HTTP 429;自动控速、口语调参、长任务复盘 \| Rate-limited MCP proxy + agent operator skill — no more HTTP 429 on free LLM APIs. |
| 271 | [iTrimut/dsh-Webroad](https://github.com/iTrimut/dsh-Webroad) | 0 | 2026-08-21 | 2026-08-21 | DSH Web 的免费远程访问（Tailscale Funnel）：不买域名、手机免装 App，打开网址 + 密码就是 DSH。给家里人和普通人的那条路。 |
| 272 | [ivwumupy/dsh-plugins](https://github.com/ivwumupy/dsh-plugins) | 0 | 2026-08-21 | 2026-08-21 | Tianjiao's DSH plugins |
| 273 | [Jacobinwwey/dsh-NotEMD](https://github.com/Jacobinwwey/dsh-NotEMD) | 0 | 2026-08-14 | 2026-08-21 | Portable NoteMD workflow bundle for DeepSeek Harness: approval-gated markdown automation, knowledge indexing, diagrams, SVG previews, and Slidev exports. |
| 274 | [jansen-66/dsh-guandan-panel](https://github.com/jansen-66/dsh-guandan-panel) | 0 | 2026-08-21 | 2026-08-21 | DSH Web Plugin: 工作区底部开辟一个迷你面板，当AI帮你工作时，不要荒废大脑，来一把掼蛋游戏。 |
| 275 | [jhuanxx44/dsh-sseye](https://github.com/jhuanxx44/dsh-sseye) | 0 | 2026-08-20 | 2026-08-21 | The LLM debug console inside DeepSeek Harness: capture every model call, semantic diff, Replay & Mutate |
| 276 | [Ji-Baoning/dsh-cad2cae](https://github.com/Ji-Baoning/dsh-cad2cae) | 0 | 2026-08-17 | 2026-08-21 | AI Agent for CAD-CAE Integration Operating within DSH |
| 277 | [Jiangdl0220/dsh-skills-manager](https://github.com/Jiangdl0220/dsh-skills-manager) | 0 | 2026-08-21 | 2026-08-21 | Manage installed DeepSeek Harness skills from Settings: disable/enable without uninstalling, restorable trash. Desktop + web. (dsh-plugin) |
| 278 | [jiangwangyang/dsh-theme-blackhole](https://github.com/jiangwangyang/dsh-theme-blackhole) | 0 | 2026-08-20 | 2026-08-21 | A black hole theme plugin for the dsh (DeepSeek Harness) Web UI: a WebGL real-time ray-traced Schwarzschild black hole as the application background, paired with a deep-space glass panel palette, switchable from Settings > General > Theme - Black Hole. |
| 279 | [jijiz1/dsh-self-updater](https://github.com/jijiz1/dsh-self-updater) | 0 | 2026-08-21 | 2026-08-21 | One-click version checker, updater, and restart UI for DeepSeek Harness (DSH). |
| 280 | [jing-hy/dsh-file-drop-eac](https://github.com/jing-hy/dsh-file-drop-eac) | 0 | 2026-08-21 | 2026-08-21 | 拖入文件/文件夹到对话 - Deepseek Harness EAC 内置替代插件（替代已弃用的 dsh-file-drop，见 issue #141） |
| 281 | [jmxsxwyzjdwl/dsh-mmroute](https://github.com/jmxsxwyzjdwl/dsh-mmroute) | 0 | 2026-08-21 | 2026-08-21 | 为 DeepSeek Harness（DSH）里的每一条模型路由做图片模态调度，并且贯穿整个 agent |
| 282 | [jsoncode/dsh-jenkins](https://github.com/jsoncode/dsh-jenkins) | 0 | 2026-08-16 | 2026-08-21 | 可以在DeepSeek Harness中，快捷配置和管理多台 Jenkins 服务器与 Token， 支持设置页配置、模型工具触发构建、工作区级「执行 Jenkins Job」入口。无硬编码路径、 全量 TypeScript、可发布到 npm / GitHub。界面文案中英双语（跟随主界面语言）。 |
| 283 | [JularDepick/dsh-plugin-dev-agent-template](https://github.com/JularDepick/dsh-plugin-dev-agent-template) | 0 | 2026-08-16 | 2026-08-21 | A general-purpose dsh plugin development template. |
| 284 | [jw0507/dsh-shell](https://github.com/jw0507/dsh-shell) | 0 | 2026-08-20 | 2026-08-20 | dsh桌面端，windows版，无依赖，纯壳启动器，DSH原生更新，免维护，独立视窗 |
| 285 | [Jyjays/dsh-websearch-custom](https://github.com/Jyjays/dsh-websearch-custom) | 0 | 2026-08-21 | 2026-08-21 | Configurable OpenAI Responses-compatible native web search provider for DeepSeek Harness, with a Settings UI to configure endpoint, model, and API key. |
| 286 | [kedoupi/dsh-plugins](https://github.com/kedoupi/dsh-plugins) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 插件仓库：订阅授权 + API Key，占用设置 → 模型 |
| 287 | [Kerberos255/dsh-web-search-router](https://github.com/Kerberos255/dsh-web-search-router) | 0 | 2026-08-21 | 2026-08-21 | Priority-ordered multi-provider web_search router for DeepSeek Harness with automatic fallback. |
| 288 | [Kev-ZJY/dsh-exa-search](https://github.com/Kev-ZJY/dsh-exa-search) | 0 | 2026-08-20 | 2026-08-21 | dsh-exa-search：一个独立的 DeepSeek Harness插件，通过 Exa 提供更详细的网页搜索能力。 |
| 289 | [KeyboardPrince/dsh-instruct-manager](https://github.com/KeyboardPrince/dsh-instruct-manager) | 0 | 2026-08-21 | 2026-08-21 | DSH 插件：在设置面板管理全局与项目级 Agent 指令，支持多工作区 tab 切换与 system prompt 自动注入。 |
| 290 | [KeynoWu/dsh-ai-news](https://github.com/KeynoWu/dsh-ai-news) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness AI 新闻插件：多源聚合（HN/ArXiv/官方博客/中文媒体）+ 侧边栏大弹窗新闻流 + 面板内 LLM 总结 |
| 291 | [kiligzzz/dsh-capability-manager](https://github.com/kiligzzz/dsh-capability-manager) | 0 | 2026-08-21 | 2026-08-21 | Capability Manager for DeepSeek Harness: manage MCP servers and Skills from a Settings-page UI (dual-face dsh plugin) |
| 292 | [koji-xiaoer/dsh-plugins](https://github.com/koji-xiaoer/dsh-plugins) | 0 | 2026-08-20 | 2026-08-21 | DSH(DeepSeek Harness)插件仓库:增强主页、模型选择器增强、费用预估等插件与一键安装脚本 |
| 293 | [ktdhhc/dsh-custom-subagents](https://github.com/ktdhhc/dsh-custom-subagents) | 0 | 2026-08-21 | 2026-08-21 | 一个dsh的子agent控制插件 |
| 294 | [kuma-loong/dsh-llm-sampling](https://github.com/kuma-loong/dsh-llm-sampling) | 0 | 2026-08-21 | 2026-08-21 | Exact-model sampling policy bundle for DeepSeek Harness |
| 295 | [lanbaolu/dsh-wechat-bridge](https://github.com/lanbaolu/dsh-wechat-bridge) | 0 | 2026-08-18 | 2026-08-21 | DeepSeek Harness (DSH) 微信桥接插件：三端通用，host 工具 + Web 管理面板 |
| 296 | [lasdrder0705/dsh-chat-zone](https://github.com/lasdrder0705/dsh-chat-zone) | 0 | 2026-08-21 | 2026-08-21 | DSH Web 插件「对话区」。安装：dsh plugin --profile web add github:lasdrder0705/dsh-chat-zone |
| 297 | [lastplayer82/dsh-tanqi](https://github.com/lastplayer82/dsh-tanqi) | 0 | 2026-08-21 | 2026-08-21 | 探奇 (Tanqi) plugin for the dsh web GUI: AI-generated curiosity & trivia with layered deep-dives. DeepSeek Harness plugin · @lastplayer82/dsh-tanqi |
| 298 | [leamonac0823/dsh-cornell-classic-theme](https://github.com/leamonac0823/dsh-cornell-classic-theme) | 0 | 2026-08-21 | 2026-08-21 | Cornell notebook workspace for DeepSeek Harness Web UI |
| 299 | [lhwu1/dsh-seelog](https://github.com/lhwu1/dsh-seelog) | 0 | 2026-08-21 | 2026-08-21 | 还在为繁杂的log而苦恼吗？直接拓扑展示，清晰理顺所有，多智能体也不怕。 |
| 300 | [li3-feng2-jie2/dsh-motion-memory](https://github.com/li3-feng2-jie2/dsh-motion-memory) | 0 | 2026-08-20 | 2026-08-21 | 适配 DeepSeek Harness（DSH）高自定义能力的一个记忆管理插件 |
| 301 | [Liaominduyh/GitHub-dsh-plugin-market](https://github.com/Liaominduyh/GitHub-dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | github-dsh插件市场：DSH 插件市场（双源聚合 2830+ 插件浏览、官方一键安装、自动翻译、git 订阅管理） |
| 302 | [lihang-lh/dsh-task-panel](https://github.com/lihang-lh/dsh-task-panel) | 0 | 2026-08-20 | 2026-08-21 | 在 AI 时代让自己当老板，我只负责发布和验收 |
| 303 | [linz919/dsh-web-pass](https://github.com/linz919/dsh-web-pass) | 0 | 2026-08-20 | 2026-08-21 | DSH Web 密码门禁 – Cookie 认证 + 首次强制设密 + 登录失败锁定60s + 内置访问日志查看器。零依赖，原生集成设置页。 |
| 304 | [liuqingman/dsh-hawkeye-scan](https://github.com/liuqingman/dsh-hawkeye-scan) | 0 | 2026-08-20 | 2026-08-21 | Hawkeye Scan Workbench - AI-driven source-code security scanning for DeepSeek Harness (DSH): 5 model tools + /hawkeye web UI + JSON/Markdown/HTML vuln reports. Zero-dependency Cordis plugin. |
| 305 | [liznee/dsh-speech-input](https://github.com/liznee/dsh-speech-input) | 0 | 2026-08-21 | 2026-08-21 | Voice input plugin for DeepSeek Harness with live microphone metering and manual stop/cancel controls. |
| 306 | [lonelymoon87/dsh-engineering-suite](https://github.com/lonelymoon87/dsh-engineering-suite) | 0 | 2026-08-21 | 2026-08-21 | One install for SpecFlow, GitFlow, Guardian, and Code Intel on DeepSeek Harness. |
| 307 | [lsakira/dsh-peak-reminder](https://github.com/lsakira/dsh-peak-reminder) | 0 | 2026-08-21 | 2026-08-21 | 峰谷提示器：DeepSeek Harness 高峰时段提醒插件（模式指示灯 / 高峰前提醒 / 余额卡片） |
| 308 | [Lstalu/dsh-quota-meter-plus](https://github.com/Lstalu/dsh-quota-meter-plus) | 0 | 2026-08-21 | 2026-08-21 | DSH 会话额度监控增强版：真实 token 计费、实时进度条、额度耗尽拦截、峰谷定价、右上角余额校准胶囊（官方基线 + 同源防护 + inputWrite 计费档） |
| 309 | [lttcnly/dsh-fetch-url](https://github.com/lttcnly/dsh-fetch-url) | 0 | 2026-08-21 | 2026-08-21 | dsh-plugin: fetch_url tool for DeepSeek Harness agents — host-side web/API fetching that bypasses the sandboxed shell TLS restriction |
| 310 | [LucienLL/dsh-plugin-proxy](https://github.com/LucienLL/dsh-plugin-proxy) | 0 | 2026-08-21 | 2026-08-21 | Global proxy for DeepSeek Harness: route agent tools, model requests and web fetches through the Windows system proxy or a custom proxy with one persistent toggle and agent-visible status |
| 311 | [lucifer726/dsh-safe-updater](https://github.com/lucifer726/dsh-safe-updater) | 0 | 2026-08-21 | 2026-08-21 | Guarded automatic updates for DeepSeek Harness with isolated profile smoke tests and rollback. |
| 312 | [LVSUGARS/dsh-web-manager](https://github.com/LVSUGARS/dsh-web-manager) | 0 | 2026-08-21 | 2026-08-21 | Windows desktop manager for DeepSeek Harness (DSH) Web: install the official CLI, manage local workspaces, and safely start, stop, and update DSH. |
| 313 | [lvyunqi/dsh-memory-enhanced](https://github.com/lvyunqi/dsh-memory-enhanced) | 0 | 2026-08-21 | 2026-08-21 | Lightweight cross-session memory for DeepSeek Harness agents — two-tier (global/project) memory, self-evolving specs, and pitfall capture in pure Markdown. No external services. |
| 314 | [lxp731/agents-plugins](https://github.com/lxp731/agents-plugins) | 0 | 2026-08-03 | 2026-08-21 | Pi extension: desktop notification + chime when a reply finishes, with configurable duration threshold |
| 315 | [lyfZhixing/dsh-anchor-rail](https://github.com/lyfZhixing/dsh-anchor-rail) | 0 | 2026-08-21 | 2026-08-21 | DSH Web 会话锚点导轨插件：左侧导轨展示当前模型表面全部用户问题，悬浮显示全部锚点名称（与导轨对齐），点击快速跳转。Session anchor rail for DeepSeek Harness Web. |
| 316 | [lynsucceed/dsh-openclaw-persona](https://github.com/lynsucceed/dsh-openclaw-persona) | 0 | 2026-08-21 | 2026-08-21 | Reuse OpenClaw persona files (SOUL/IDENTITY/USER/MEMORY/TOOLS.md) as the DSH agent persona, with a Web GUI editor — edit the .md files in the sidebar and the change takes effect on the next request. |
| 317 | [magian1127/deepseek-harness-zhipu_plan_tools](https://github.com/magian1127/deepseek-harness-zhipu_plan_tools) | 0 | 2026-08-20 | 2026-08-21 | Zhipu (GLM Coding Plan) MCP servers into DSH - 接入智谱的工具 |
| 318 | [marshfolx/dsh-subagent-setting](https://github.com/marshfolx/dsh-subagent-setting) | 0 | 2026-08-20 | 2026-08-21 | Configure the default provider / model / reasoning effort for subagents from the DeepSeek Harness Web settings page |
| 319 | [megatronyy/dsh-skin-background](https://github.com/megatronyy/dsh-skin-background) | 0 | 2026-08-21 | 2026-08-21 | Image-background skin plugin for DeepSeek Harness (dsh): shipped + user wallpapers, custom image URLs, live dim/blur controls |
| 320 | [meimiaoji-creator/meow-vision](https://github.com/meimiaoji-creator/meow-vision) | 0 | 2026-08-21 | 2026-08-21 | meow-vision 是 DeepSeek Harness 的一款视觉插件，解决纯文本模型无视觉。另一方面vue页面开发视觉验证不闭环的问题。 |
| 321 | [Mikoribbit/odsh-bridge](https://github.com/Mikoribbit/odsh-bridge) | 0 | 2026-08-20 | 2026-08-21 | A bridge that connects Openclaw and DeepSeek Harness |
| 322 | [MisRightW/dsh-agent-teams](https://github.com/MisRightW/dsh-agent-teams) | 0 | 2026-08-20 | 2026-08-21 | dsh-agent-teams |
| 323 | [MisRightW/dsh-mcp-servers](https://github.com/MisRightW/dsh-mcp-servers) | 0 | 2026-08-20 | 2026-08-21 | dsh-mcp-servers |
| 324 | [MisRightW/dsh-taskboard](https://github.com/MisRightW/dsh-taskboard) | 0 | 2026-08-20 | 2026-08-21 | dsh-taskboard |
| 325 | [MochiNek0/dsh-web-search-free](https://github.com/MochiNek0/dsh-web-search-free) | 0 | 2026-08-20 | 2026-08-21 | 面向 DeepSeek Harness 的多引擎免费 Web Search 插件，支持 Tavily / Firecrawl / Exa / Jina / Brave 自动 fallback |
| 326 | [momo-gen/dsh-canvas](https://github.com/momo-gen/dsh-canvas) | 0 | 2026-08-21 | 2026-08-21 | Toggleable infinite process canvas over the DSH conversation shell - pan/zoom the live process, annotate deviations, steer corrections. |
| 327 | [moon16u/dsh-pouch](https://github.com/moon16u/dsh-pouch) | 0 | 2026-08-20 | 2026-08-21 | A pouch of practical plugins for DeepSeek Harness · DSH 实用小插件工具箱 |
| 328 | [Mr-SYGao/dsh-feishu-reader](https://github.com/Mr-SYGao/dsh-feishu-reader) | 0 | 2026-08-21 | 2026-08-21 | DSH 插件：读取飞书文档（docx/wiki/sheets/bitable）并下载图片 |
| 329 | [MrPunchLeonardo/accurlex-dsh-legal](https://github.com/MrPunchLeonardo/accurlex-dsh-legal) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin for accurLex Open Platform legal tools |
| 330 | [MST19711/dsh-opencode-go-usage](https://github.com/MST19711/dsh-opencode-go-usage) | 0 | 2026-08-21 | 2026-08-21 | Floating OpenCode Go quota meter for the DSH Web UI — live remaining % for the 5h / weekly / monthly windows. |
| 331 | [NetMind-AI/dsh-narra-channel](https://github.com/NetMind-AI/dsh-narra-channel) | 0 | 2026-08-21 | 2026-08-21 | Third-party DeepSeek Harness channel plugin for Narra Messenger |
| 332 | [nickhelion/dsh-plugins](https://github.com/nickhelion/dsh-plugins) | 0 | 2026-08-20 | 2026-08-21 | Secure DeepSeek Harness plugin monorepo: Qwen Token Plan Responses provider and ServerChan notifications |
| 333 | [nsdmgt/dsh-plugin-user-research](https://github.com/nsdmgt/dsh-plugin-user-research) | 0 | 2026-08-21 | 2026-08-21 | Vertical user-research synthesis plugin for DeepSeek Harness (dsh): turns interview/survey notes into personas, pain points and opportunity maps via a tested tool + skills. |
| 334 | [Nth-5620/dsh-readwrite-hub](https://github.com/Nth-5620/dsh-readwrite-hub) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness novel writing and reading workspace plugin (modified fork of dsh-workspace-explorer, MIT): character-accurate pagination, auto-saved progress, pinned progress bookmark, return-to-progress chip, chapter TOC, ruled-line writing mode |
| 335 | [oli-bot/dsh-desktop](https://github.com/oli-bot/dsh-desktop) | 0 | 2026-08-18 | 2026-08-20 | DeepWork — community desktop shell for DeepSeek Harness: Electron + sidecar DSH engine + stock DSH web UI, sharing $DSH_HOME (unofficial, MIT) |
| 336 | [Pagemalthusian934/deepseek-desktop](https://github.com/Pagemalthusian934/deepseek-desktop) | 0 | 2026-08-20 | 2026-08-20 | Unify DeepSeek Chat and Harness in one native desktop app for macOS and Windows. |
| 337 | [penglai-doll/LocalWhale-macOS](https://github.com/penglai-doll/LocalWhale-macOS) | 0 | 2026-08-21 | 2026-08-21 | Native macOS Shell for an independently updatable DeepSeek Harness Core |
| 338 | [PengPeng6845/dsh-balance](https://github.com/PengPeng6845/dsh-balance) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 侧边栏真实 API 余额监控：直连官方 /user/balance，SSE 即时推送，只显示真实数据不做估算。 |
| 339 | [pgmi-builds/corti](https://github.com/pgmi-builds/corti) | 0 | 2026-07-30 | 2026-08-21 | Persistent memory layer for AI agent swarms. Postgres-backed retrieval, Markdown as source of truth, sub-second cascade sync. Self-hosted. |
| 340 | [pgmi-builds/dashr](https://github.com/pgmi-builds/dashr) | 0 | 2026-08-16 | 2026-08-21 | dsh RLM mode (Recursive Language Models), iPython REPL tool-calling interface, context-as-variables, in dsh Everything is a Plugin ecosystem. |
| 341 | [pinkear/deepseek-harness-liverpool-theme](https://github.com/pinkear/deepseek-harness-liverpool-theme) | 0 | 2026-08-20 | 2026-08-20 | Liverpool-inspired DSH theme plugin with local custom pattern backgrounds. |
| 342 | [POWERRRRRRRR/dsh-live-loop](https://github.com/POWERRRRRRRR/dsh-live-loop) | 0 | 2026-08-21 | 2026-08-21 |         DeepSeek Harness frontend runtime verification plugin — detect, run, preview, interact, visually compare, and verify web apps with durable evidence. |
| 343 | [qiqiangvae/dsh-input-enhancer](https://github.com/qiqiangvae/dsh-input-enhancer) | 0 | 2026-08-20 | 2026-08-21 | 一个输入框增强工具，可以锁住发送按钮、暂存输入框内容 |
| 344 | [Quan-Chan/Weave-for-DSH](https://github.com/Quan-Chan/Weave-for-DSH) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness上的一个离线可用的单HTML节点图编辑器 |
| 345 | [RadicalGitter/dsh-ui-translate](https://github.com/RadicalGitter/dsh-ui-translate) | 0 | 2026-08-20 | 2026-08-21 | Privacy-first browser-local Chinese-to-English translation for DeepSeek Harness Web using OPUS-MT. |
| 346 | [rocklau/dsh-rss-reader](https://github.com/rocklau/dsh-rss-reader) | 0 | 2026-08-21 | 2026-08-21 | OpenBook RSS Reader as a DeepSeek Harness (dsh) Web UI plugin: RSS tab in the conversation view ring, sidebar go-to-RSS shortcut, ambient article awareness, discuss-into-chat, notes/highlights, sync, agent tools and chat commands. |
| 347 | [rocklau/dsh-ui-digest](https://github.com/rocklau/dsh-ui-digest) | 0 | 2026-08-21 | 2026-08-21 | Turn-digest overview tab for the DeepSeek Harness (dsh) Web UI: what you asked, a one-sentence summary of what the AI did, tool-action chips. |
| 348 | [ruazero/dsh-task-chime](https://github.com/ruazero/dsh-task-chime) | 0 | 2026-08-20 | 2026-08-21 | DSH dynamic Cordis plugin: play a real Windows system sound when an agent task finishes — custom sound, 4 intensity levels, auto escalation for long tasks, temporary mute. |
| 349 | [RunCross/dsh-simple-background](https://github.com/RunCross/dsh-simple-background) | 0 | 2026-08-20 | 2026-08-21 | 用于dsh web设置背景图，简单的设置背景图片的功能 |
| 350 | [RyensX/dsh-message-navigation](https://github.com/RyensX/dsh-message-navigation) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness Web UI 的 Codex 风格用户消息导航栏 / Codex-style user-message navigation rail for the DeepSeek Harness Web UI |
| 351 | [satan9394/dsh-javascript-typescript](https://github.com/satan9394/dsh-javascript-typescript) | 0 | 2026-08-19 | 2026-08-21 | DSH skill: JS/TS 开发模式, 现代语法与高级类型（受 wshobson/agents 38k★ 启发） |
| 352 | [SchrodiL/dsh-chrome-app-launcher](https://github.com/SchrodiL/dsh-chrome-app-launcher) | 0 | 2026-08-20 | 2026-08-20 | Desktop launcher for Deepseek Harness as a Chrome APP |
| 353 | [scubiry-glitch/dsh-yiyi-pet](https://github.com/scubiry-glitch/dsh-yiyi-pet) | 0 | 2026-08-21 | 2026-08-21 | 狼兔一一任务宠物：DSH Web 桌面宠物插件，狼/兔/一一三角色切换 + 全套16表情随任务变化 + 去水印一一头像（资源持久化打包，同源路由，离线可用） |
| 354 | [sd1g1/dsh-opencode-go-models](https://github.com/sd1g1/dsh-opencode-go-models) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: supplement the OpenCode Go model catalog |
| 355 | [SeireiA/dsh-plugin-rtk](https://github.com/SeireiA/dsh-plugin-rtk) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin for RTK-powered shell output compaction |
| 356 | [simune/dsh-desktop](https://github.com/simune/dsh-desktop) | 0 | 2026-08-15 | 2026-08-20 | DeepSeek Harness 的插件管理工作区与一个基于 Tauri 的桌面客户端（dsh-desktop），把 dsh Web 服务捆绑并以原生窗口呈现，简化桌面端部署与使用体验。 |
| 357 | [SingleMelon/dsh-balance-panel](https://github.com/SingleMelon/dsh-balance-panel) | 0 | 2026-08-21 | 2026-08-21 | test |
| 358 | [sjk1949/orca-cat](https://github.com/sjk1949/orca-cat) | 0 | 2026-08-19 | 2026-08-20 | A third-party launcher for the DeepSeek Harness. |
| 359 | [skkaczsh/dsh-checkpoint-rewind](https://github.com/skkaczsh/dsh-checkpoint-rewind) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness checkpoint rollback with linked Git worktrees, session replay, and a graphical branch tree. |
| 360 | [skyf0xx/hedgehog-core-deepseek-harness](https://github.com/skyf0xx/hedgehog-core-deepseek-harness) | 0 | 2026-08-21 | 2026-08-21 | Build DeepSeek Harness (DSH) plugins with Hedgehog. Providing a plugin workspace, generator, and agent skills to quickly build powerful plugins |
| 361 | [snowshadow/dsh-llm-gateway-compat](https://github.com/snowshadow/dsh-llm-gateway-compat) | 0 | 2026-08-21 | 2026-08-21 | Community DSH plugin: OpenAI-compatible gateway adapter and dialect fixes (not an official DeepSeek package) |
| 362 | [sobermh/tokens_DshWebSearch_code](https://github.com/sobermh/tokens_DshWebSearch_code) | 0 | 2026-08-21 | 2026-08-21 | Zero-config web search plugin for DeepSeek Harness with automatic provider fallback. |
| 363 | [sorsama/deepseek-harness-relay](https://github.com/sorsama/deepseek-harness-relay) | 0 | 2026-08-21 | 2026-08-21 | Authenticated remote access for a DeepSeek Harness web profile: TLS, QR/passcode device pairing, password sign-in, and per-device revocation in front of an untouched loopback harness. |
| 364 | [StefanIsMe/dsh-updater-plugin](https://github.com/StefanIsMe/dsh-updater-plugin) | 0 | 2026-08-21 | 2026-08-21 | Never lose a draft. Stay up to date in one click — draft-safe self-updater for DeepSeek Harness |
| 365 | [StellerSurgeCode/dsh-everyday-plugins](https://github.com/StellerSurgeCode/dsh-everyday-plugins) | 0 | 2026-08-21 | 2026-08-21 | Community DSH plugins: liquid glass, live HTML control, local life shelf. |
| 366 | [striveh/dsh-llm-call-inspector](https://github.com/striveh/dsh-llm-call-inspector) | 0 | 2026-08-21 | 2026-08-21 | Local request and response inspector for session-associated DeepSeek Harness LLM calls |
| 367 | [striveh/dsh-plugin-development](https://github.com/striveh/dsh-plugin-development) | 0 | 2026-08-21 | 2026-08-21 | Unofficial thin, source-driven Agent Skill for DeepSeek Harness plugin development |
| 368 | [sunchendd/dsh-config-export](https://github.com/sunchendd/dsh-config-export) | 0 | 2026-08-21 | 2026-08-21 | DSH 配置备份插件：侧边栏一键导出/导入 ~/.dsh 配置（设置/profile/SSH/预设/皮肤/看板），支持敏感字段脱敏与恢复前安全快照 |
| 369 | [suntianc/dsh-ui-settings-icons](https://github.com/suntianc/dsh-ui-settings-icons) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness UI plugin that adds custom navigation icons and a keyed settings.section.icon slot |
| 370 | [terwer/dsh-siyuan-note](https://github.com/terwer/dsh-siyuan-note) | 0 | 2026-08-21 | 2026-08-21 | integrate SiYuan Note as a DSH knowledge base |
| 371 | [TheM14/dsh-session-cleaner](https://github.com/TheM14/dsh-session-cleaner) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 已归档会话管理与新预设续接插件。Archived-session management and preset continuation plugin for DeepSeek Harness. |
| 372 | [therain2020/dsh-obsidian-sync](https://github.com/therain2020/dsh-obsidian-sync) | 0 | 2026-08-21 | 2026-08-21 | Obsidian vault tools for DeepSeek Harness: write/read markdown notes with path-traversal protection |
| 373 | [TOBYCAI/dsh-patch-reasoning](https://github.com/TOBYCAI/dsh-patch-reasoning) | 0 | 2026-08-21 | 2026-08-21 | DSH 升级后幂等重打的模型调优补丁：DeepSeek 推理拓宽为 7 档、workflow/ralph 子 agent 默认模型指向 deepseek-v4-flash。Idempotent DSH model-tuning patch: 7 reasoning levels & workflow/ralph default deepseek-v4-flash. |
| 374 | [TOBYCAI/dsh-sessions-manager](https://github.com/TOBYCAI/dsh-sessions-manager) | 0 | 2026-08-20 | 2026-08-21 | DSH 会话管理面板插件：归档/恢复/彻底删除/跨工作区移动，带工作区标签、会话日期、批量多选与每条会话详情统计（磁盘/工具/文件/血统）。A Session Manager plugin for DeepSeek Harness: archive/restore/delete/move sessions, workspace tags, batch actions & per-session detail stats. |
| 375 | [TOBYCAI/image-mcp](https://github.com/TOBYCAI/image-mcp) | 0 | 2026-08-21 | 2026-08-21 | 本地 Pillow 图片处理 MCP Server：12 个工具（信息/缩放/裁剪/转换/压缩/旋转/翻转/缩略图/水印/特效/占位/叠加），离线零成本，经 dsh-mcp-client 接入 DSH。Local Pillow image-processing MCP with 12 tools, offline & free, for DeepSeek Harness via dsh-mcp-client. |
| 376 | [Top-Celestial-Company-Ltd/dsh-dros-vajraclaw](https://github.com/Top-Celestial-Company-Ltd/dsh-dros-vajraclaw) | 0 | 2026-08-20 | 2026-08-21 | ⚡ DROS™ VajraClaw for DSH: Deterministic Runtime Execution Governance & Security Circuit-Breaker Plugin |
| 377 | [tree-func/dsh-request-manager](https://github.com/tree-func/dsh-request-manager) | 0 | 2026-08-21 | 2026-08-21 | 管理Deepseek Harness的LLM API请求策略。/ Manage LLM API request policies for DeepSeek Harness |
| 378 | [Tsunamistr/dsh-opencode-go-usage](https://github.com/Tsunamistr/dsh-opencode-go-usage) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness Web GUI 插件：右下角悬浮卡片实时显示 OpenCode Go 用量（5h/每周/每月），30 秒自动刷新。再开发自 xiaoqi20/dsh-opencode-go-usage |
| 379 | [tttnny/my-dsh](https://github.com/tttnny/my-dsh) | 0 | 2026-08-19 | 2026-08-21 | DeepSeek Harness 插件合集：dsh-client-ui-deepseek-bg（仿 Harness 官网深色皮肤：极光/粒子鲸鱼/星座网格/玻璃拟态/Border Beam/Thinking Orbs）+ dsh-escalation-noop + ptc-creative-cordis |
| 380 | [tuogusa/dsh-mindmap](https://github.com/tuogusa/dsh-mindmap) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 思维导图插件：AI 回答自动整理为可编辑 Markdown，支持导出文件和生成图片；核心逻辑已内置，单包发布。 |
| 381 | [u9521/dsh-session-settings](https://github.com/u9521/dsh-session-settings) | 0 | 2026-08-17 | 2026-08-21 | Subagent custom model configuration plugin for DeepSeek Harness |
| 382 | [uckkk/dsh-ab-sample](https://github.com/uckkk/dsh-ab-sample) | 0 | 2026-08-20 | 2026-08-20 | A/B测试样本量 |
| 383 | [uckkk/dsh-ac-save](https://github.com/uckkk/dsh-ac-save) | 0 | 2026-08-20 | 2026-08-21 | 空调节能 |
| 384 | [uckkk/dsh-ac-trouble](https://github.com/uckkk/dsh-ac-trouble) | 0 | 2026-08-20 | 2026-08-21 | 空调故障排查 |
| 385 | [uckkk/dsh-accounting-cert](https://github.com/uckkk/dsh-accounting-cert) | 0 | 2026-08-20 | 2026-08-20 | 会计证书要求 |
| 386 | [uckkk/dsh-acne-care](https://github.com/uckkk/dsh-acne-care) | 0 | 2026-08-20 | 2026-08-21 | 痘痘护理 |
| 387 | [uckkk/dsh-acne-mark](https://github.com/uckkk/dsh-acne-mark) | 0 | 2026-08-20 | 2026-08-21 | 痘印淡化 |
| 388 | [uckkk/dsh-active-listening](https://github.com/uckkk/dsh-active-listening) | 0 | 2026-08-20 | 2026-08-21 | 有效倾听 |
| 389 | [uckkk/dsh-acupoint](https://github.com/uckkk/dsh-acupoint) | 0 | 2026-08-20 | 2026-08-21 | 穴位保健 |
| 390 | [uckkk/dsh-ad-bid](https://github.com/uckkk/dsh-ad-bid) | 0 | 2026-08-20 | 2026-08-20 | 广告出价上限 |
| 391 | [uckkk/dsh-adult-vaccine](https://github.com/uckkk/dsh-adult-vaccine) | 0 | 2026-08-20 | 2026-08-21 | 成人疫苗 |
| 392 | [uckkk/dsh-age-edu](https://github.com/uckkk/dsh-age-edu) | 0 | 2026-08-20 | 2026-08-21 | 分龄教育 |
| 393 | [uckkk/dsh-aggression](https://github.com/uckkk/dsh-aggression) | 0 | 2026-08-20 | 2026-08-21 | 攻击行为 |
| 394 | [uckkk/dsh-ai-terms](https://github.com/uckkk/dsh-ai-terms) | 0 | 2026-08-20 | 2026-08-20 | AI 术语 |
| 395 | [uckkk/dsh-ai-use](https://github.com/uckkk/dsh-ai-use) | 0 | 2026-08-20 | 2026-08-21 | AI工具使用 |
| 396 | [uckkk/dsh-air-fryer](https://github.com/uckkk/dsh-air-fryer) | 0 | 2026-08-20 | 2026-08-21 | 空气炸锅 |
| 397 | [uckkk/dsh-air-plant](https://github.com/uckkk/dsh-air-plant) | 0 | 2026-08-20 | 2026-08-21 | 室内绿植 |
| 398 | [uckkk/dsh-air-purifier](https://github.com/uckkk/dsh-air-purifier) | 0 | 2026-08-20 | 2026-08-21 | 空气净化器选购 |
| 399 | [uckkk/dsh-airport-time](https://github.com/uckkk/dsh-airport-time) | 0 | 2026-08-20 | 2026-08-20 | 机场提前时间 |
| 400 | [uckkk/dsh-albania](https://github.com/uckkk/dsh-albania) | 0 | 2026-08-20 | 2026-08-20 | 阿尔巴尼亚国家 |
| 401 | [uckkk/dsh-aldehyde-control](https://github.com/uckkk/dsh-aldehyde-control) | 0 | 2026-08-20 | 2026-08-21 | 甲醛治理 |
| 402 | [uckkk/dsh-algeria](https://github.com/uckkk/dsh-algeria) | 0 | 2026-08-20 | 2026-08-20 | 阿尔及利亚国家 |
| 403 | [uckkk/dsh-algo-compare](https://github.com/uckkk/dsh-algo-compare) | 0 | 2026-08-20 | 2026-08-21 | 算法耗时对比 |
| 404 | [uckkk/dsh-altitude](https://github.com/uckkk/dsh-altitude) | 0 | 2026-08-20 | 2026-08-21 | 海拔高反 |
| 405 | [uckkk/dsh-altitude-sick](https://github.com/uckkk/dsh-altitude-sick) | 0 | 2026-08-20 | 2026-08-21 | 高反预防 |
| 406 | [uckkk/dsh-aluminium](https://github.com/uckkk/dsh-aluminium) | 0 | 2026-08-20 | 2026-08-20 | 铝元素 |
| 407 | [uckkk/dsh-amb-light](https://github.com/uckkk/dsh-amb-light) | 0 | 2026-08-20 | 2026-08-21 | 氛围照明 |
| 408 | [uckkk/dsh-americium](https://github.com/uckkk/dsh-americium) | 0 | 2026-08-20 | 2026-08-20 | 镅元素 |
| 409 | [uckkk/dsh-amount-calc](https://github.com/uckkk/dsh-amount-calc) | 0 | 2026-08-20 | 2026-08-21 | 火锅分量计算 |
| 410 | [uckkk/dsh-anal-gland](https://github.com/uckkk/dsh-anal-gland) | 0 | 2026-08-20 | 2026-08-21 | 肛门腺护理 |
| 411 | [uckkk/dsh-angola](https://github.com/uckkk/dsh-angola) | 0 | 2026-08-20 | 2026-08-20 | 安哥拉国家 |
| 412 | [uckkk/dsh-ankle-sprain](https://github.com/uckkk/dsh-ankle-sprain) | 0 | 2026-08-20 | 2026-08-21 | 崴脚处理 |
| 413 | [uckkk/dsh-anniversary](https://github.com/uckkk/dsh-anniversary) | 0 | 2026-08-20 | 2026-08-20 | 纪念日计算 |
| 414 | [uckkk/dsh-anti-loss](https://github.com/uckkk/dsh-anti-loss) | 0 | 2026-08-20 | 2026-08-21 | 防脱方案 |
| 415 | [uckkk/dsh-anti-slip](https://github.com/uckkk/dsh-anti-slip) | 0 | 2026-08-20 | 2026-08-21 | 防滑措施 |
| 416 | [uckkk/dsh-anti-theft](https://github.com/uckkk/dsh-anti-theft) | 0 | 2026-08-20 | 2026-08-21 | 防盗措施 |
| 417 | [uckkk/dsh-antibiotic](https://github.com/uckkk/dsh-antibiotic) | 0 | 2026-08-20 | 2026-08-21 | 抗生素使用 |
| 418 | [uckkk/dsh-antigua](https://github.com/uckkk/dsh-antigua) | 0 | 2026-08-20 | 2026-08-21 | 安提瓜和巴布达国 |
| 419 | [uckkk/dsh-antimony](https://github.com/uckkk/dsh-antimony) | 0 | 2026-08-20 | 2026-08-21 | 锑元素 |
| 420 | [uckkk/dsh-anxiety-check](https://github.com/uckkk/dsh-anxiety-check) | 0 | 2026-08-20 | 2026-08-21 | 焦虑自评 |
| 421 | [uckkk/dsh-aov-up](https://github.com/uckkk/dsh-aov-up) | 0 | 2026-08-20 | 2026-08-20 | 客单价提升测算 |
| 422 | [uckkk/dsh-api-budget](https://github.com/uckkk/dsh-api-budget) | 0 | 2026-08-20 | 2026-08-21 | 接口延迟预算 |
| 423 | [uckkk/dsh-apology](https://github.com/uckkk/dsh-apology) | 0 | 2026-08-20 | 2026-08-21 | 道歉公式 |
| 424 | [uckkk/dsh-appliance-clean](https://github.com/uckkk/dsh-appliance-clean) | 0 | 2026-08-20 | 2026-08-21 | 家电清洁 |
| 425 | [uckkk/dsh-appliance-life](https://github.com/uckkk/dsh-appliance-life) | 0 | 2026-08-20 | 2026-08-21 | 家电寿命 |
| 426 | [uckkk/dsh-appliance-order](https://github.com/uckkk/dsh-appliance-order) | 0 | 2026-08-20 | 2026-08-21 | 家电进场顺序 |
| 427 | [uckkk/dsh-argentina](https://github.com/uckkk/dsh-argentina) | 0 | 2026-08-20 | 2026-08-21 | 阿根廷国家 |
| 428 | [uckkk/dsh-argon](https://github.com/uckkk/dsh-argon) | 0 | 2026-08-20 | 2026-08-21 | 氩元素 |
| 429 | [uckkk/dsh-armenia](https://github.com/uckkk/dsh-armenia) | 0 | 2026-08-20 | 2026-08-21 | 亚美尼亚国家 |
| 430 | [uckkk/dsh-arsenic](https://github.com/uckkk/dsh-arsenic) | 0 | 2026-08-20 | 2026-08-21 | 砷元素 |
| 431 | [uckkk/dsh-art-terms](https://github.com/uckkk/dsh-art-terms) | 0 | 2026-08-20 | 2026-08-21 | 艺术术语 |
| 432 | [uckkk/dsh-ask-leader](https://github.com/uckkk/dsh-ask-leader) | 0 | 2026-08-20 | 2026-08-21 | 向上沟通 |
| 433 | [uckkk/dsh-asset-alloc](https://github.com/uckkk/dsh-asset-alloc) | 0 | 2026-08-20 | 2026-08-21 | 资产配置 |
| 434 | [uckkk/dsh-asset-split](https://github.com/uckkk/dsh-asset-split) | 0 | 2026-08-20 | 2026-08-21 | 资产配置 |
| 435 | [uckkk/dsh-astatine](https://github.com/uckkk/dsh-astatine) | 0 | 2026-08-20 | 2026-08-21 | 砹元素 |
| 436 | [uckkk/dsh-astronomy-terms](https://github.com/uckkk/dsh-astronomy-terms) | 0 | 2026-08-20 | 2026-08-21 | 天文学术语 |
| 437 | [uckkk/dsh-audio-bitrate](https://github.com/uckkk/dsh-audio-bitrate) | 0 | 2026-08-20 | 2026-08-21 | 音频比特率 |
| 438 | [uckkk/dsh-australia](https://github.com/uckkk/dsh-australia) | 0 | 2026-08-20 | 2026-08-21 | 澳大利亚国家 |
| 439 | [uckkk/dsh-austria](https://github.com/uckkk/dsh-austria) | 0 | 2026-08-20 | 2026-08-21 | 奥地利国家 |
| 440 | [uckkk/dsh-azerbaijan](https://github.com/uckkk/dsh-azerbaijan) | 0 | 2026-08-20 | 2026-08-21 | 阿塞拜疆国家 |
| 441 | [uckkk/dsh-baby-fever](https://github.com/uckkk/dsh-baby-fever) | 0 | 2026-08-20 | 2026-08-21 | 宝宝发烧 |
| 442 | [uckkk/dsh-back-care](https://github.com/uckkk/dsh-back-care) | 0 | 2026-08-20 | 2026-08-21 | 腰背护理 |
| 443 | [uckkk/dsh-backup-plan](https://github.com/uckkk/dsh-backup-plan) | 0 | 2026-08-20 | 2026-08-21 | 备份策略 |
| 444 | [uckkk/dsh-backup-retention](https://github.com/uckkk/dsh-backup-retention) | 0 | 2026-08-20 | 2026-08-21 | 备份容量规划 |
| 445 | [uckkk/dsh-bahamas](https://github.com/uckkk/dsh-bahamas) | 0 | 2026-08-20 | 2026-08-21 | 巴哈马国家 |
| 446 | [uckkk/dsh-baijiu-pick](https://github.com/uckkk/dsh-baijiu-pick) | 0 | 2026-08-20 | 2026-08-21 | 白酒选择 |
| 447 | [uckkk/dsh-bait-pick](https://github.com/uckkk/dsh-bait-pick) | 0 | 2026-08-20 | 2026-08-21 | 鱼饵选择 |
| 448 | [uckkk/dsh-bake-fix](https://github.com/uckkk/dsh-bake-fix) | 0 | 2026-08-20 | 2026-08-21 | 烘焙失败排查 |
| 449 | [uckkk/dsh-balcony-care](https://github.com/uckkk/dsh-balcony-care) | 0 | 2026-08-20 | 2026-08-21 | 浇水施肥 |
| 450 | [uckkk/dsh-balcony-make](https://github.com/uckkk/dsh-balcony-make) | 0 | 2026-08-20 | 2026-08-21 | 阳台改造 |
| 451 | [uckkk/dsh-bandwidth](https://github.com/uckkk/dsh-bandwidth) | 0 | 2026-08-20 | 2026-08-21 | 带宽需求估算 |
| 452 | [uckkk/dsh-bangkok-city](https://github.com/uckkk/dsh-bangkok-city) | 0 | 2026-08-20 | 2026-08-21 | 曼谷市 |
| 453 | [uckkk/dsh-bangladesh](https://github.com/uckkk/dsh-bangladesh) | 0 | 2026-08-20 | 2026-08-21 | 孟加拉国国家 |
| 454 | [uckkk/dsh-baozi-steam](https://github.com/uckkk/dsh-baozi-steam) | 0 | 2026-08-20 | 2026-08-21 | 蒸制时间 |
| 455 | [uckkk/dsh-barbados](https://github.com/uckkk/dsh-barbados) | 0 | 2026-08-20 | 2026-08-21 | 巴巴多斯国 |
| 456 | [uckkk/dsh-barium](https://github.com/uckkk/dsh-barium) | 0 | 2026-08-20 | 2026-08-21 | 钡元素 |
| 457 | [uckkk/dsh-barking-fix](https://github.com/uckkk/dsh-barking-fix) | 0 | 2026-08-20 | 2026-08-21 | 吠叫纠正 |
| 458 | [uckkk/dsh-base-makeup](https://github.com/uckkk/dsh-base-makeup) | 0 | 2026-08-20 | 2026-08-21 | 底妆技巧 |
| 459 | [uckkk/dsh-basic-training](https://github.com/uckkk/dsh-basic-training) | 0 | 2026-08-20 | 2026-08-21 | 基础训练 |
| 460 | [uckkk/dsh-bath-reno](https://github.com/uckkk/dsh-bath-reno) | 0 | 2026-08-20 | 2026-08-21 | 卫生间改造 |
| 461 | [uckkk/dsh-battery-health](https://github.com/uckkk/dsh-battery-health) | 0 | 2026-08-20 | 2026-08-21 | 电池健康 |
| 462 | [uckkk/dsh-battery-life](https://github.com/uckkk/dsh-battery-life) | 0 | 2026-08-20 | 2026-08-20 | 电池续航估算 |
| 463 | [uckkk/dsh-bean-choice](https://github.com/uckkk/dsh-bean-choice) | 0 | 2026-08-20 | 2026-08-21 | 选豆建议 |
| 464 | [uckkk/dsh-bedtime](https://github.com/uckkk/dsh-bedtime) | 0 | 2026-08-20 | 2026-08-21 | 睡前仪式 |
| 465 | [uckkk/dsh-beer-pick](https://github.com/uckkk/dsh-beer-pick) | 0 | 2026-08-20 | 2026-08-21 | 啤酒选择 |
| 466 | [uckkk/dsh-beijing-city](https://github.com/uckkk/dsh-beijing-city) | 0 | 2026-08-20 | 2026-08-21 | 北京市 |
| 467 | [uckkk/dsh-belarus](https://github.com/uckkk/dsh-belarus) | 0 | 2026-08-20 | 2026-08-21 | 白俄罗斯国家 |
| 468 | [uckkk/dsh-belgium](https://github.com/uckkk/dsh-belgium) | 0 | 2026-08-20 | 2026-08-21 | 比利时国家 |
| 469 | [uckkk/dsh-belize](https://github.com/uckkk/dsh-belize) | 0 | 2026-08-20 | 2026-08-21 | 伯利兹国家 |
| 470 | [uckkk/dsh-bento](https://github.com/uckkk/dsh-bento) | 0 | 2026-08-20 | 2026-08-21 | 便当搭配 |
| 471 | [uckkk/dsh-berkelium](https://github.com/uckkk/dsh-berkelium) | 0 | 2026-08-20 | 2026-08-21 | 锫元素 |
| 472 | [uckkk/dsh-berlin-city](https://github.com/uckkk/dsh-berlin-city) | 0 | 2026-08-20 | 2026-08-21 | 柏林市 |
| 473 | [uckkk/dsh-best-time](https://github.com/uckkk/dsh-best-time) | 0 | 2026-08-20 | 2026-08-21 | 最佳发布时间 |
| 474 | [uckkk/dsh-bhutan](https://github.com/uckkk/dsh-bhutan) | 0 | 2026-08-20 | 2026-08-21 | 不丹国家 |
| 475 | [uckkk/dsh-big-clean](https://github.com/uckkk/dsh-big-clean) | 0 | 2026-08-20 | 2026-08-21 | 年前大扫除 |
| 476 | [uckkk/dsh-big-purchase](https://github.com/uckkk/dsh-big-purchase) | 0 | 2026-08-20 | 2026-08-21 | 大额消费决策 |
| 477 | [uckkk/dsh-bike-care](https://github.com/uckkk/dsh-bike-care) | 0 | 2026-08-20 | 2026-08-21 | 自行车保养 |
| 478 | [uckkk/dsh-bike-fit](https://github.com/uckkk/dsh-bike-fit) | 0 | 2026-08-20 | 2026-08-21 | 车座调整 |
| 479 | [uckkk/dsh-bike-gear](https://github.com/uckkk/dsh-bike-gear) | 0 | 2026-08-20 | 2026-08-21 | 骑行装备 |
| 480 | [uckkk/dsh-bike-safe](https://github.com/uckkk/dsh-bike-safe) | 0 | 2026-08-20 | 2026-08-21 | 骑行安全 |
| 481 | [uckkk/dsh-bilibili-live](https://github.com/uckkk/dsh-bilibili-live) | 0 | 2026-08-20 | 2026-08-20 | B站视频信息 |
| 482 | [uckkk/dsh-bin-pick](https://github.com/uckkk/dsh-bin-pick) | 0 | 2026-08-20 | 2026-08-21 | 收纳盒选购 |
| 483 | [uckkk/dsh-binomial-pmf](https://github.com/uckkk/dsh-binomial-pmf) | 0 | 2026-08-20 | 2026-08-21 | 二项分布 |
| 484 | [uckkk/dsh-biotech-terms](https://github.com/uckkk/dsh-biotech-terms) | 0 | 2026-08-20 | 2026-08-21 | 生物技术术语 |
| 485 | [uckkk/dsh-bird-cage](https://github.com/uckkk/dsh-bird-cage) | 0 | 2026-08-20 | 2026-08-21 | 笼具配置 |
| 486 | [uckkk/dsh-bird-diet](https://github.com/uckkk/dsh-bird-diet) | 0 | 2026-08-20 | 2026-08-21 | 鸟食搭配 |
| 487 | [uckkk/dsh-bird-health](https://github.com/uckkk/dsh-bird-health) | 0 | 2026-08-20 | 2026-08-21 | 健康观察 |
| 488 | [uckkk/dsh-bird-pick](https://github.com/uckkk/dsh-bird-pick) | 0 | 2026-08-20 | 2026-08-21 | 鸟种选择 |
| 489 | [uckkk/dsh-bird-tame](https://github.com/uckkk/dsh-bird-tame) | 0 | 2026-08-20 | 2026-08-21 | 驯养上手 |
| 490 | [uckkk/dsh-biscuit-recipe](https://github.com/uckkk/dsh-biscuit-recipe) | 0 | 2026-08-20 | 2026-08-21 | 饼干配方 |
| 491 | [uckkk/dsh-bismuth](https://github.com/uckkk/dsh-bismuth) | 0 | 2026-08-20 | 2026-08-21 | 铋元素 |
| 492 | [uckkk/dsh-bitrate-choice](https://github.com/uckkk/dsh-bitrate-choice) | 0 | 2026-08-20 | 2026-08-21 | 码率选择 |
| 493 | [uckkk/dsh-blackhead](https://github.com/uckkk/dsh-blackhead) | 0 | 2026-08-20 | 2026-08-21 | 黑头清理 |
| 494 | [uckkk/dsh-blame-avoid](https://github.com/uckkk/dsh-blame-avoid) | 0 | 2026-08-20 | 2026-08-21 | 防背锅 |
| 495 | [uckkk/dsh-blanch-skill](https://github.com/uckkk/dsh-blanch-skill) | 0 | 2026-08-20 | 2026-08-21 | 焯水去腥 |
| 496 | [uckkk/dsh-bleach-safety](https://github.com/uckkk/dsh-bleach-safety) | 0 | 2026-08-20 | 2026-08-20 | 漂白安全 |
| 497 | [uckkk/dsh-blender](https://github.com/uckkk/dsh-blender) | 0 | 2026-08-20 | 2026-08-21 | 破壁机 |
| 498 | [uckkk/dsh-blender-pick](https://github.com/uckkk/dsh-blender-pick) | 0 | 2026-08-20 | 2026-08-21 | 料理机选择 |
| 499 | [uckkk/dsh-blood-lipid](https://github.com/uckkk/dsh-blood-lipid) | 0 | 2026-08-20 | 2026-08-21 | 血脂解读 |
| 500 | [uckkk/dsh-blood-pressure](https://github.com/uckkk/dsh-blood-pressure) | 0 | 2026-08-20 | 2026-08-20 | 血压分类 |
| 501 | [uckkk/dsh-blood-sugar](https://github.com/uckkk/dsh-blood-sugar) | 0 | 2026-08-20 | 2026-08-21 | 血糖解读 |
| 502 | [uckkk/dsh-blow-dry](https://github.com/uckkk/dsh-blow-dry) | 0 | 2026-08-20 | 2026-08-21 | 吹风造型 |
| 503 | [uckkk/dsh-body-care](https://github.com/uckkk/dsh-body-care) | 0 | 2026-08-20 | 2026-08-21 | 身体护理 |
| 504 | [uckkk/dsh-body-type](https://github.com/uckkk/dsh-body-type) | 0 | 2026-08-20 | 2026-08-21 | 中医体质辨识 |
| 505 | [uckkk/dsh-bohrium](https://github.com/uckkk/dsh-bohrium) | 0 | 2026-08-20 | 2026-08-21 | 𬭛元素 |
| 506 | [uckkk/dsh-bolivia](https://github.com/uckkk/dsh-bolivia) | 0 | 2026-08-20 | 2026-08-21 | 玻利维亚国家 |
| 507 | [uckkk/dsh-bone-aid](https://github.com/uckkk/dsh-bone-aid) | 0 | 2026-08-20 | 2026-08-21 | 骨折扭伤 |
| 508 | [uckkk/dsh-bone-check](https://github.com/uckkk/dsh-bone-check) | 0 | 2026-08-20 | 2026-08-21 | 骨密度筛查 |
| 509 | [uckkk/dsh-book-pick](https://github.com/uckkk/dsh-book-pick) | 0 | 2026-08-20 | 2026-08-21 | 选书方法 |
| 510 | [uckkk/dsh-book-plan](https://github.com/uckkk/dsh-book-plan) | 0 | 2026-08-20 | 2026-08-21 | 阅读计划 |
| 511 | [uckkk/dsh-bookkeeping](https://github.com/uckkk/dsh-bookkeeping) | 0 | 2026-08-20 | 2026-08-21 | 记账方法 |
| 512 | [uckkk/dsh-bosnia](https://github.com/uckkk/dsh-bosnia) | 0 | 2026-08-20 | 2026-08-21 | 波黑国家 |
| 513 | [uckkk/dsh-botswana](https://github.com/uckkk/dsh-botswana) | 0 | 2026-08-20 | 2026-08-21 | 博茨瓦纳国 |
| 514 | [uckkk/dsh-boundary](https://github.com/uckkk/dsh-boundary) | 0 | 2026-08-20 | 2026-08-21 | 设定界限 |
| 515 | [uckkk/dsh-bouquet](https://github.com/uckkk/dsh-bouquet) | 0 | 2026-08-20 | 2026-08-21 | 花束制作 |
| 516 | [uckkk/dsh-bp-check](https://github.com/uckkk/dsh-bp-check) | 0 | 2026-08-20 | 2026-08-21 | 血压判断 |
| 517 | [uckkk/dsh-bp-manage](https://github.com/uckkk/dsh-bp-manage) | 0 | 2026-08-21 | 2026-08-21 | 血压管理 |
| 518 | [uckkk/dsh-brain-computer-terms](https://github.com/uckkk/dsh-brain-computer-terms) | 0 | 2026-08-20 | 2026-08-21 | 脑机接口术语 |
| 519 | [uckkk/dsh-brazil](https://github.com/uckkk/dsh-brazil) | 0 | 2026-08-20 | 2026-08-21 | 巴西国家 |
| 520 | [uckkk/dsh-bread-recipe](https://github.com/uckkk/dsh-bread-recipe) | 0 | 2026-08-20 | 2026-08-21 | 面包配方 |
| 521 | [uckkk/dsh-breakeven](https://github.com/uckkk/dsh-breakeven) | 0 | 2026-08-20 | 2026-08-21 | 盈亏平衡测算 |
| 522 | [uckkk/dsh-breath-tech](https://github.com/uckkk/dsh-breath-tech) | 0 | 2026-08-20 | 2026-08-21 | 呼吸法指导 |
| 523 | [uckkk/dsh-breathing](https://github.com/uckkk/dsh-breathing) | 0 | 2026-08-20 | 2026-08-21 | 呼吸练习 |
| 524 | [uckkk/dsh-brew-method](https://github.com/uckkk/dsh-brew-method) | 0 | 2026-08-20 | 2026-08-21 | 冲煮器具 |
| 525 | [uckkk/dsh-bromine](https://github.com/uckkk/dsh-bromine) | 0 | 2026-08-20 | 2026-08-21 | 溴元素 |
| 526 | [uckkk/dsh-brush-pet](https://github.com/uckkk/dsh-brush-pet) | 0 | 2026-08-21 | 2026-08-21 | 梳毛频率 |
| 527 | [uckkk/dsh-brush-pick](https://github.com/uckkk/dsh-brush-pick) | 0 | 2026-08-20 | 2026-08-21 | 化妆刷具 |
| 528 | [uckkk/dsh-brushing-time](https://github.com/uckkk/dsh-brushing-time) | 0 | 2026-08-20 | 2026-08-20 | 刷牙时长 |
| 529 | [uckkk/dsh-btu2kj](https://github.com/uckkk/dsh-btu2kj) | 0 | 2026-08-20 | 2026-08-21 | BTU 转千焦 |
| 530 | [uckkk/dsh-budget-plan](https://github.com/uckkk/dsh-budget-plan) | 0 | 2026-08-20 | 2026-08-21 | 50-30-20预算 |
| 531 | [uckkk/dsh-budget-split](https://github.com/uckkk/dsh-budget-split) | 0 | 2026-08-20 | 2026-08-21 | 预算分配 |
| 532 | [uckkk/dsh-buenos-aires-city](https://github.com/uckkk/dsh-buenos-aires-city) | 0 | 2026-08-20 | 2026-08-21 | 布宜诺斯艾利斯市 |
| 533 | [uckkk/dsh-bulb-buy](https://github.com/uckkk/dsh-bulb-buy) | 0 | 2026-08-20 | 2026-08-21 | 灯泡选购 |
| 534 | [uckkk/dsh-bulgaria](https://github.com/uckkk/dsh-bulgaria) | 0 | 2026-08-20 | 2026-08-21 | 保加利亚国家 |
| 535 | [uckkk/dsh-bundle-calc](https://github.com/uckkk/dsh-bundle-calc) | 0 | 2026-08-20 | 2026-08-21 | 套餐设计 |
| 536 | [uckkk/dsh-burn-aid](https://github.com/uckkk/dsh-burn-aid) | 0 | 2026-08-20 | 2026-08-21 | 烫伤急救 |
| 537 | [uckkk/dsh-burn-first-aid](https://github.com/uckkk/dsh-burn-first-aid) | 0 | 2026-08-21 | 2026-08-21 | 烫伤急救 |
| 538 | [uckkk/dsh-burundi](https://github.com/uckkk/dsh-burundi) | 0 | 2026-08-20 | 2026-08-21 | 布隆迪国 |
| 539 | [uckkk/dsh-buy-check](https://github.com/uckkk/dsh-buy-check) | 0 | 2026-08-20 | 2026-08-21 | 购买前判断 |
| 540 | [uckkk/dsh-c2f](https://github.com/uckkk/dsh-c2f) | 0 | 2026-08-20 | 2026-08-21 | 摄氏转华氏 |
| 541 | [uckkk/dsh-c2k](https://github.com/uckkk/dsh-c2k) | 0 | 2026-08-20 | 2026-08-21 | 摄氏转开尔文 |
| 542 | [uckkk/dsh-cable-power](https://github.com/uckkk/dsh-cable-power) | 0 | 2026-08-20 | 2026-08-20 | 充电功率计算 |
| 543 | [uckkk/dsh-cadmium](https://github.com/uckkk/dsh-cadmium) | 0 | 2026-08-20 | 2026-08-21 | 镉元素 |
| 544 | [uckkk/dsh-caesium](https://github.com/uckkk/dsh-caesium) | 0 | 2026-08-20 | 2026-08-21 | 铯元素 |
| 545 | [uckkk/dsh-cafe-order](https://github.com/uckkk/dsh-cafe-order) | 0 | 2026-08-20 | 2026-08-21 | 咖啡馆点单 |
| 546 | [uckkk/dsh-cafe-start](https://github.com/uckkk/dsh-cafe-start) | 0 | 2026-08-20 | 2026-08-21 | 咖啡店启动测算 |
| 547 | [uckkk/dsh-caffeine](https://github.com/uckkk/dsh-caffeine) | 0 | 2026-08-20 | 2026-08-20 | 咖啡因半衰期 |
| 548 | [uckkk/dsh-cairo-city](https://github.com/uckkk/dsh-cairo-city) | 0 | 2026-08-20 | 2026-08-21 | 开罗市 |
| 549 | [uckkk/dsh-cake-recipe](https://github.com/uckkk/dsh-cake-recipe) | 0 | 2026-08-20 | 2026-08-21 | 蛋糕配方 |
| 550 | [uckkk/dsh-cal2j](https://github.com/uckkk/dsh-cal2j) | 0 | 2026-08-20 | 2026-08-21 | 卡路里转焦耳 |
| 551 | [uckkk/dsh-calcium](https://github.com/uckkk/dsh-calcium) | 0 | 2026-08-20 | 2026-08-21 | 钙元素 |
| 552 | [uckkk/dsh-californium](https://github.com/uckkk/dsh-californium) | 0 | 2026-08-20 | 2026-08-21 | 锎元素 |
| 553 | [uckkk/dsh-cambodia](https://github.com/uckkk/dsh-cambodia) | 0 | 2026-08-20 | 2026-08-21 | 柬埔寨国家 |
| 554 | [uckkk/dsh-cameroon](https://github.com/uckkk/dsh-cameroon) | 0 | 2026-08-20 | 2026-08-21 | 喀麦隆国家 |
| 555 | [uckkk/dsh-camp-food](https://github.com/uckkk/dsh-camp-food) | 0 | 2026-08-20 | 2026-08-21 | 露营食物准备 |
| 556 | [uckkk/dsh-camp-gear](https://github.com/uckkk/dsh-camp-gear) | 0 | 2026-08-20 | 2026-08-21 | 露营装备清单 |
| 557 | [uckkk/dsh-camp-safety](https://github.com/uckkk/dsh-camp-safety) | 0 | 2026-08-20 | 2026-08-21 | 露营安全应对 |
| 558 | [uckkk/dsh-camp-site](https://github.com/uckkk/dsh-camp-site) | 0 | 2026-08-20 | 2026-08-21 | 营地选址 |
| 559 | [uckkk/dsh-canada](https://github.com/uckkk/dsh-canada) | 0 | 2026-08-20 | 2026-08-21 | 加拿大国家 |
| 560 | [uckkk/dsh-candle-make](https://github.com/uckkk/dsh-candle-make) | 0 | 2026-08-20 | 2026-08-21 | 香薰蜡烛配方 |
| 561 | [uckkk/dsh-car-seat](https://github.com/uckkk/dsh-car-seat) | 0 | 2026-08-20 | 2026-08-21 | 安全座椅选择 |
| 562 | [uckkk/dsh-cat-age](https://github.com/uckkk/dsh-cat-age) | 0 | 2026-08-20 | 2026-08-21 | 猫龄换算 |
| 563 | [uckkk/dsh-cat-food](https://github.com/uckkk/dsh-cat-food) | 0 | 2026-08-20 | 2026-08-21 | 猫粮喂食量 |
| 564 | [uckkk/dsh-cerium](https://github.com/uckkk/dsh-cerium) | 0 | 2026-08-20 | 2026-08-21 | 铈元素 |
| 565 | [uckkk/dsh-cet-score](https://github.com/uckkk/dsh-cet-score) | 0 | 2026-08-20 | 2026-08-20 | 四六级估分 |
| 566 | [uckkk/dsh-charge-time](https://github.com/uckkk/dsh-charge-time) | 0 | 2026-08-20 | 2026-08-20 | 充电时间估算 |
| 567 | [uckkk/dsh-charging-habit](https://github.com/uckkk/dsh-charging-habit) | 0 | 2026-08-20 | 2026-08-21 | 充电习惯 |
| 568 | [uckkk/dsh-cheat-meal](https://github.com/uckkk/dsh-cheat-meal) | 0 | 2026-08-20 | 2026-08-21 | 欺骗餐 |
| 569 | [uckkk/dsh-chemistry-terms](https://github.com/uckkk/dsh-chemistry-terms) | 0 | 2026-08-20 | 2026-08-21 | 化学术语 |
| 570 | [uckkk/dsh-chengdu-city](https://github.com/uckkk/dsh-chengdu-city) | 0 | 2026-08-20 | 2026-08-21 | 成都市 |
| 571 | [uckkk/dsh-chess-basic](https://github.com/uckkk/dsh-chess-basic) | 0 | 2026-08-20 | 2026-08-21 | 国际象棋基础 |
| 572 | [uckkk/dsh-chess-open](https://github.com/uckkk/dsh-chess-open) | 0 | 2026-08-20 | 2026-08-21 | 象棋开局 |
| 573 | [uckkk/dsh-chess-pick](https://github.com/uckkk/dsh-chess-pick) | 0 | 2026-08-20 | 2026-08-21 | 棋类入门选择 |
| 574 | [uckkk/dsh-chess-plan](https://github.com/uckkk/dsh-chess-plan) | 0 | 2026-08-20 | 2026-08-21 | 棋类练习规划 |
| 575 | [uckkk/dsh-chicago-city](https://github.com/uckkk/dsh-chicago-city) | 0 | 2026-08-20 | 2026-08-21 | 芝加哥市 |
| 576 | [uckkk/dsh-chile](https://github.com/uckkk/dsh-chile) | 0 | 2026-08-20 | 2026-08-21 | 智利国家 |
| 577 | [uckkk/dsh-china](https://github.com/uckkk/dsh-china) | 0 | 2026-08-20 | 2026-08-21 | 中国国家 |
| 578 | [uckkk/dsh-chlorine](https://github.com/uckkk/dsh-chlorine) | 0 | 2026-08-20 | 2026-08-21 | 氯元素 |
| 579 | [uckkk/dsh-choke-aid](https://github.com/uckkk/dsh-choke-aid) | 0 | 2026-08-20 | 2026-08-21 | 气道梗阻 |
| 580 | [uckkk/dsh-chromium](https://github.com/uckkk/dsh-chromium) | 0 | 2026-08-20 | 2026-08-21 | 铬元素 |
| 581 | [uckkk/dsh-circuit-plan](https://github.com/uckkk/dsh-circuit-plan) | 0 | 2026-08-20 | 2026-08-21 | 电路回路规划 |
| 582 | [uckkk/dsh-civil-exam](https://github.com/uckkk/dsh-civil-exam) | 0 | 2026-08-20 | 2026-08-20 | 行测答题节奏 |
| 583 | [uckkk/dsh-claim](https://github.com/uckkk/dsh-claim) | 0 | 2026-08-20 | 2026-08-21 | 理赔流程 |
| 584 | [uckkk/dsh-class-budget](https://github.com/uckkk/dsh-class-budget) | 0 | 2026-08-20 | 2026-08-21 | 兴趣班预算 |
| 585 | [uckkk/dsh-clay-craft](https://github.com/uckkk/dsh-clay-craft) | 0 | 2026-08-20 | 2026-08-21 | 黏土手工 |
| 586 | [uckkk/dsh-clean-freq](https://github.com/uckkk/dsh-clean-freq) | 0 | 2026-08-20 | 2026-08-21 | 清洁频率 |
| 587 | [uckkk/dsh-clean-plan2](https://github.com/uckkk/dsh-clean-plan2) | 0 | 2026-08-20 | 2026-08-21 | 清洁计划 |
| 588 | [uckkk/dsh-clean-tools](https://github.com/uckkk/dsh-clean-tools) | 0 | 2026-08-20 | 2026-08-21 | 清洁工具 |
| 589 | [uckkk/dsh-cleaner-dilute](https://github.com/uckkk/dsh-cleaner-dilute) | 0 | 2026-08-20 | 2026-08-21 | 清洁剂稀释 |
| 590 | [uckkk/dsh-cleaner-use](https://github.com/uckkk/dsh-cleaner-use) | 0 | 2026-08-20 | 2026-08-21 | 清洁剂使用 |
| 591 | [uckkk/dsh-cleaning-freq](https://github.com/uckkk/dsh-cleaning-freq) | 0 | 2026-08-20 | 2026-08-21 | 清洁频率 |
| 592 | [uckkk/dsh-climate-terms](https://github.com/uckkk/dsh-climate-terms) | 0 | 2026-08-20 | 2026-08-21 | 气候术语 |
| 593 | [uckkk/dsh-closet-zone](https://github.com/uckkk/dsh-closet-zone) | 0 | 2026-08-20 | 2026-08-21 | 衣柜分区 |
| 594 | [uckkk/dsh-cloth-mold](https://github.com/uckkk/dsh-cloth-mold) | 0 | 2026-08-20 | 2026-08-21 | 衣物防霉 |
| 595 | [uckkk/dsh-cobalt](https://github.com/uckkk/dsh-cobalt) | 0 | 2026-08-20 | 2026-08-21 | 钴元素 |
| 596 | [uckkk/dsh-cold-drink](https://github.com/uckkk/dsh-cold-drink) | 0 | 2026-08-20 | 2026-08-21 | 冰饮制作 |
| 597 | [uckkk/dsh-colombia](https://github.com/uckkk/dsh-colombia) | 0 | 2026-08-20 | 2026-08-21 | 哥伦比亚国家 |
| 598 | [uckkk/dsh-combination](https://github.com/uckkk/dsh-combination) | 0 | 2026-08-20 | 2026-08-21 | 组合数 |
| 599 | [uckkk/dsh-compose](https://github.com/uckkk/dsh-compose) | 0 | 2026-08-20 | 2026-08-21 | 构图法则 |
| 600 | [uckkk/dsh-concurrency](https://github.com/uckkk/dsh-concurrency) | 0 | 2026-08-20 | 2026-08-21 | 并发需求估算 |
| 601 | [uckkk/dsh-conflict-deal](https://github.com/uckkk/dsh-conflict-deal) | 0 | 2026-08-20 | 2026-08-21 | 冲突化解 |
| 602 | [uckkk/dsh-congo-dr](https://github.com/uckkk/dsh-congo-dr) | 0 | 2026-08-20 | 2026-08-21 | 刚果民主共和国国家 |
| 603 | [uckkk/dsh-cook-time](https://github.com/uckkk/dsh-cook-time) | 0 | 2026-08-20 | 2026-08-21 | 涮烫时间表 |
| 604 | [uckkk/dsh-copernicium](https://github.com/uckkk/dsh-copernicium) | 0 | 2026-08-20 | 2026-08-21 | 鎶元素 |
| 605 | [uckkk/dsh-copper](https://github.com/uckkk/dsh-copper) | 0 | 2026-08-20 | 2026-08-21 | 铜元素 |
| 606 | [uckkk/dsh-copy-pick](https://github.com/uckkk/dsh-copy-pick) | 0 | 2026-08-20 | 2026-08-21 | 字帖选择 |
| 607 | [uckkk/dsh-correlation](https://github.com/uckkk/dsh-correlation) | 0 | 2026-08-20 | 2026-08-21 | 相关系数 |
| 608 | [uckkk/dsh-costa-rica](https://github.com/uckkk/dsh-costa-rica) | 0 | 2026-08-20 | 2026-08-21 | 哥斯达黎加国家 |
| 609 | [uckkk/dsh-couple-talk](https://github.com/uckkk/dsh-couple-talk) | 0 | 2026-08-20 | 2026-08-21 | 伴侣沟通 |
| 610 | [uckkk/dsh-coupon-opt](https://github.com/uckkk/dsh-coupon-opt) | 0 | 2026-08-20 | 2026-08-20 | 优惠券判断 |
| 611 | [uckkk/dsh-covariance](https://github.com/uckkk/dsh-covariance) | 0 | 2026-08-20 | 2026-08-21 | 协方差 |
| 612 | [uckkk/dsh-cover-calc](https://github.com/uckkk/dsh-cover-calc) | 0 | 2026-08-20 | 2026-08-21 | 保额计算 |
| 613 | [uckkk/dsh-cpr](https://github.com/uckkk/dsh-cpr) | 0 | 2026-08-20 | 2026-08-21 | 心肺复苏 |
| 614 | [uckkk/dsh-cpr-guide](https://github.com/uckkk/dsh-cpr-guide) | 0 | 2026-08-20 | 2026-08-21 | CPR急救 |
| 615 | [uckkk/dsh-credit-card-installment](https://github.com/uckkk/dsh-credit-card-installment) | 0 | 2026-08-20 | 2026-08-21 | 信用卡分期计算器 |
| 616 | [uckkk/dsh-croatia](https://github.com/uckkk/dsh-croatia) | 0 | 2026-08-20 | 2026-08-21 | 克罗地亚国家 |
| 617 | [uckkk/dsh-crochet](https://github.com/uckkk/dsh-crochet) | 0 | 2026-08-20 | 2026-08-21 | 钩针基础 |
| 618 | [uckkk/dsh-cross-team](https://github.com/uckkk/dsh-cross-team) | 0 | 2026-08-20 | 2026-08-21 | 跨部门协作 |
| 619 | [uckkk/dsh-ctr-significance](https://github.com/uckkk/dsh-ctr-significance) | 0 | 2026-08-20 | 2026-08-20 | 转化率显著性 |
| 620 | [uckkk/dsh-ctr-split](https://github.com/uckkk/dsh-ctr-split) | 0 | 2026-08-20 | 2026-08-20 | 点击率拆解 |
| 621 | [uckkk/dsh-cuba](https://github.com/uckkk/dsh-cuba) | 0 | 2026-08-20 | 2026-08-21 | 古巴国家 |
| 622 | [uckkk/dsh-culture-boardgames](https://github.com/uckkk/dsh-culture-boardgames) | 0 | 2026-08-20 | 2026-08-21 | 桌游 |
| 623 | [uckkk/dsh-culture-festivals](https://github.com/uckkk/dsh-culture-festivals) | 0 | 2026-08-20 | 2026-08-21 | 世界节日 |
| 624 | [uckkk/dsh-culture-movies](https://github.com/uckkk/dsh-culture-movies) | 0 | 2026-08-20 | 2026-08-21 | 电影类型 |
| 625 | [uckkk/dsh-culture-sports-events](https://github.com/uckkk/dsh-culture-sports-events) | 0 | 2026-08-20 | 2026-08-21 | 体育赛事 |
| 626 | [uckkk/dsh-culture-videogames](https://github.com/uckkk/dsh-culture-videogames) | 0 | 2026-08-20 | 2026-08-21 | 电子游戏类型 |
| 627 | [uckkk/dsh-cup2ml](https://github.com/uckkk/dsh-cup2ml) | 0 | 2026-08-20 | 2026-08-21 | 杯转毫升 |
| 628 | [uckkk/dsh-cupping](https://github.com/uckkk/dsh-cupping) | 0 | 2026-08-20 | 2026-08-21 | 杯测品鉴 |
| 629 | [uckkk/dsh-curium](https://github.com/uckkk/dsh-curium) | 0 | 2026-08-20 | 2026-08-21 | 锔元素 |
| 630 | [uckkk/dsh-curling](https://github.com/uckkk/dsh-curling) | 0 | 2026-08-20 | 2026-08-21 | 卷发造型 |
| 631 | [uckkk/dsh-currency-tips](https://github.com/uckkk/dsh-currency-tips) | 0 | 2026-08-20 | 2026-08-20 | 货币使用提示 |
| 632 | [uckkk/dsh-curtain-calc](https://github.com/uckkk/dsh-curtain-calc) | 0 | 2026-08-20 | 2026-08-21 | 窗帘用量计算 |
| 633 | [uckkk/dsh-curtain-pick](https://github.com/uckkk/dsh-curtain-pick) | 0 | 2026-08-20 | 2026-08-21 | 窗帘选择 |
| 634 | [uckkk/dsh-cutting-guide](https://github.com/uckkk/dsh-cutting-guide) | 0 | 2026-08-20 | 2026-08-21 | 扦插繁殖指南 |
| 635 | [uckkk/dsh-cycle-water](https://github.com/uckkk/dsh-cycle-water) | 0 | 2026-08-20 | 2026-08-21 | 养水流程 |
| 636 | [uckkk/dsh-cyprus](https://github.com/uckkk/dsh-cyprus) | 0 | 2026-08-20 | 2026-08-21 | 塞浦路斯国家 |
| 637 | [uckkk/dsh-czechia](https://github.com/uckkk/dsh-czechia) | 0 | 2026-08-20 | 2026-08-21 | 捷克国家 |
| 638 | [uckkk/dsh-daily-plan](https://github.com/uckkk/dsh-daily-plan) | 0 | 2026-08-20 | 2026-08-21 | 每日练习 |
| 639 | [uckkk/dsh-dance-basic](https://github.com/uckkk/dsh-dance-basic) | 0 | 2026-08-20 | 2026-08-21 | 舞蹈基本功 |
| 640 | [uckkk/dsh-dance-pick](https://github.com/uckkk/dsh-dance-pick) | 0 | 2026-08-20 | 2026-08-21 | 舞种选择 |
| 641 | [uckkk/dsh-dance-plan](https://github.com/uckkk/dsh-dance-plan) | 0 | 2026-08-20 | 2026-08-21 | 学舞规划 |
| 642 | [uckkk/dsh-dance-warmup](https://github.com/uckkk/dsh-dance-warmup) | 0 | 2026-08-20 | 2026-08-21 | 舞蹈热身 |
| 643 | [uckkk/dsh-darmstadtium](https://github.com/uckkk/dsh-darmstadtium) | 0 | 2026-08-20 | 2026-08-21 | 𫟼元素 |
| 644 | [uckkk/dsh-data-rate](https://github.com/uckkk/dsh-data-rate) | 0 | 2026-08-20 | 2026-08-21 | 网速换算 |
| 645 | [uckkk/dsh-data-structures](https://github.com/uckkk/dsh-data-structures) | 0 | 2026-08-20 | 2026-08-21 | 数据结构 |
| 646 | [uckkk/dsh-data-use](https://github.com/uckkk/dsh-data-use) | 0 | 2026-08-20 | 2026-08-21 | 流量管理 |
| 647 | [uckkk/dsh-debt-plan](https://github.com/uckkk/dsh-debt-plan) | 0 | 2026-08-20 | 2026-08-21 | 债务管理 |
| 648 | [uckkk/dsh-debt-snowball](https://github.com/uckkk/dsh-debt-snowball) | 0 | 2026-08-20 | 2026-08-21 | 债务雪球 |
| 649 | [uckkk/dsh-declutter-decide](https://github.com/uckkk/dsh-declutter-decide) | 0 | 2026-08-20 | 2026-08-21 | 断舍离决策 |
| 650 | [uckkk/dsh-decor-palette](https://github.com/uckkk/dsh-decor-palette) | 0 | 2026-08-20 | 2026-08-21 | 软装配色 |
| 651 | [uckkk/dsh-deed-tax](https://github.com/uckkk/dsh-deed-tax) | 0 | 2026-08-20 | 2026-08-21 | 契税计算 |
| 652 | [uckkk/dsh-deep-clean](https://github.com/uckkk/dsh-deep-clean) | 0 | 2026-08-20 | 2026-08-21 | 开荒保洁 |
| 653 | [uckkk/dsh-dehumid](https://github.com/uckkk/dsh-dehumid) | 0 | 2026-08-20 | 2026-08-21 | 除湿方法 |
| 654 | [uckkk/dsh-dehumid-pick](https://github.com/uckkk/dsh-dehumid-pick) | 0 | 2026-08-20 | 2026-08-21 | 除湿机选择 |
| 655 | [uckkk/dsh-dehumidify](https://github.com/uckkk/dsh-dehumidify) | 0 | 2026-08-20 | 2026-08-21 | 除湿机选型 |
| 656 | [uckkk/dsh-delhi-city](https://github.com/uckkk/dsh-delhi-city) | 0 | 2026-08-21 | 2026-08-21 | 德里市 |
| 657 | [uckkk/dsh-denmark](https://github.com/uckkk/dsh-denmark) | 0 | 2026-08-21 | 2026-08-21 | 丹麦国家 |
| 658 | [uckkk/dsh-dental-check](https://github.com/uckkk/dsh-dental-check) | 0 | 2026-08-20 | 2026-08-20 | 口腔自检 |
| 659 | [uckkk/dsh-deposit-interest](https://github.com/uckkk/dsh-deposit-interest) | 0 | 2026-08-21 | 2026-08-21 | 存款利息计算器 |
| 660 | [uckkk/dsh-dest-check](https://github.com/uckkk/dsh-dest-check) | 0 | 2026-08-20 | 2026-08-21 | 目的地清单 |
| 661 | [uckkk/dsh-detergent](https://github.com/uckkk/dsh-detergent) | 0 | 2026-08-20 | 2026-08-21 | 洗涤剂用量 |
| 662 | [uckkk/dsh-detergent-dose](https://github.com/uckkk/dsh-detergent-dose) | 0 | 2026-08-20 | 2026-08-20 | 洗衣液用量 |
| 663 | [uckkk/dsh-dev-cloud](https://github.com/uckkk/dsh-dev-cloud) | 0 | 2026-08-21 | 2026-08-21 | 云服务 |
| 664 | [uckkk/dsh-dev-databases](https://github.com/uckkk/dsh-dev-databases) | 0 | 2026-08-21 | 2026-08-21 | 数据库 |
| 665 | [uckkk/dsh-dev-frameworks](https://github.com/uckkk/dsh-dev-frameworks) | 0 | 2026-08-21 | 2026-08-21 | 编程框架 |
| 666 | [uckkk/dsh-dev-http-tools](https://github.com/uckkk/dsh-dev-http-tools) | 0 | 2026-08-21 | 2026-08-21 | Web 技术 |
| 667 | [uckkk/dsh-dev-paradigms](https://github.com/uckkk/dsh-dev-paradigms) | 0 | 2026-08-21 | 2026-08-21 | 编程范式 |
| 668 | [uckkk/dsh-deworm](https://github.com/uckkk/dsh-deworm) | 0 | 2026-08-20 | 2026-08-20 | 驱虫计划 |
| 669 | [uckkk/dsh-diamond-care](https://github.com/uckkk/dsh-diamond-care) | 0 | 2026-08-20 | 2026-08-21 | 钻石保养 |
| 670 | [uckkk/dsh-diffuser-use](https://github.com/uckkk/dsh-diffuser-use) | 0 | 2026-08-20 | 2026-08-21 | 香薰机用量 |
| 671 | [uckkk/dsh-digital-root](https://github.com/uckkk/dsh-digital-root) | 0 | 2026-08-21 | 2026-08-21 | 数字根 |
| 672 | [uckkk/dsh-dip-sauce](https://github.com/uckkk/dsh-dip-sauce) | 0 | 2026-08-20 | 2026-08-21 | 蘸料搭配 |
| 673 | [uckkk/dsh-dish-margin](https://github.com/uckkk/dsh-dish-margin) | 0 | 2026-08-20 | 2026-08-20 | 菜品毛利计算 |
| 674 | [uckkk/dsh-diy-safe](https://github.com/uckkk/dsh-diy-safe) | 0 | 2026-08-20 | 2026-08-21 | DIY安全 |
| 675 | [uckkk/dsh-djibouti](https://github.com/uckkk/dsh-djibouti) | 0 | 2026-08-21 | 2026-08-21 | 吉布提国 |
| 676 | [uckkk/dsh-doc-backup](https://github.com/uckkk/dsh-doc-backup) | 0 | 2026-08-20 | 2026-08-21 | 电子备份 |
| 677 | [uckkk/dsh-doc-expiry](https://github.com/uckkk/dsh-doc-expiry) | 0 | 2026-08-20 | 2026-08-21 | 证件有效期 |
| 678 | [uckkk/dsh-doc-list](https://github.com/uckkk/dsh-doc-list) | 0 | 2026-08-20 | 2026-08-21 | 家庭证件清单 |
| 679 | [uckkk/dsh-doc-reissue](https://github.com/uckkk/dsh-doc-reissue) | 0 | 2026-08-20 | 2026-08-21 | 证件补办 |
| 680 | [uckkk/dsh-doc-sort](https://github.com/uckkk/dsh-doc-sort) | 0 | 2026-08-20 | 2026-08-21 | 档案分类 |
| 681 | [uckkk/dsh-dog-age](https://github.com/uckkk/dsh-dog-age) | 0 | 2026-08-21 | 2026-08-21 | 狗龄换算 |
| 682 | [uckkk/dsh-dog-food](https://github.com/uckkk/dsh-dog-food) | 0 | 2026-08-21 | 2026-08-21 | 狗粮喂食量 |
| 683 | [uckkk/dsh-dough-mix](https://github.com/uckkk/dsh-dough-mix) | 0 | 2026-08-20 | 2026-08-21 | 和面比例 |
| 684 | [uckkk/dsh-down-payment](https://github.com/uckkk/dsh-down-payment) | 0 | 2026-08-20 | 2026-08-21 | 首付计算 |
| 685 | [uckkk/dsh-drowning](https://github.com/uckkk/dsh-drowning) | 0 | 2026-08-20 | 2026-08-21 | 溺水急救 |
| 686 | [uckkk/dsh-dry-clothes](https://github.com/uckkk/dsh-dry-clothes) | 0 | 2026-08-20 | 2026-08-21 | 晾晒方法 |
| 687 | [uckkk/dsh-dry-guide](https://github.com/uckkk/dsh-dry-guide) | 0 | 2026-08-20 | 2026-08-20 | 晾晒烘干指南 |
| 688 | [uckkk/dsh-dumpling-skin](https://github.com/uckkk/dsh-dumpling-skin) | 0 | 2026-08-20 | 2026-08-21 | 饺子皮用量 |
| 689 | [uckkk/dsh-dynasty-match](https://github.com/uckkk/dsh-dynasty-match) | 0 | 2026-08-20 | 2026-08-21 | 朝代搭配 |
| 690 | [uckkk/dsh-ear-clean](https://github.com/uckkk/dsh-ear-clean) | 0 | 2026-08-20 | 2026-08-21 | 耳朵清洁 |
| 691 | [uckkk/dsh-earthquake](https://github.com/uckkk/dsh-earthquake) | 0 | 2026-08-20 | 2026-08-21 | 地震避险 |
| 692 | [uckkk/dsh-eat-out](https://github.com/uckkk/dsh-eat-out) | 0 | 2026-08-20 | 2026-08-21 | 外食选择 |
| 693 | [uckkk/dsh-edit-photo](https://github.com/uckkk/dsh-edit-photo) | 0 | 2026-08-20 | 2026-08-21 | 照片后期 |
| 694 | [uckkk/dsh-egg-size](https://github.com/uckkk/dsh-egg-size) | 0 | 2026-08-20 | 2026-08-20 | 鸡蛋大小 |
| 695 | [uckkk/dsh-electrical-safety](https://github.com/uckkk/dsh-electrical-safety) | 0 | 2026-08-20 | 2026-08-21 | 用电安全 |
| 696 | [uckkk/dsh-email-length](https://github.com/uckkk/dsh-email-length) | 0 | 2026-08-20 | 2026-08-20 | 邮件字数建议 |
| 697 | [uckkk/dsh-emergency-fund](https://github.com/uckkk/dsh-emergency-fund) | 0 | 2026-08-20 | 2026-08-21 | 应急金规划 |
| 698 | [uckkk/dsh-emergency-kit](https://github.com/uckkk/dsh-emergency-kit) | 0 | 2026-08-20 | 2026-08-21 | 应急包清单 |
| 699 | [uckkk/dsh-emotion-guide](https://github.com/uckkk/dsh-emotion-guide) | 0 | 2026-08-20 | 2026-08-21 | 情绪引导 |
| 700 | [uckkk/dsh-energy-plan](https://github.com/uckkk/dsh-energy-plan) | 0 | 2026-08-20 | 2026-08-21 | 精力管理 |
| 701 | [uckkk/dsh-eo-dilute](https://github.com/uckkk/dsh-eo-dilute) | 0 | 2026-08-20 | 2026-08-21 | 精油稀释计算 |
| 702 | [uckkk/dsh-erhu-basic](https://github.com/uckkk/dsh-erhu-basic) | 0 | 2026-08-20 | 2026-08-21 | 二胡基础 |
| 703 | [uckkk/dsh-espresso](https://github.com/uckkk/dsh-espresso) | 0 | 2026-08-20 | 2026-08-21 | 意式萃取 |
| 704 | [uckkk/dsh-eye-care](https://github.com/uckkk/dsh-eye-care) | 0 | 2026-08-20 | 2026-08-21 | 眼部护理 |
| 705 | [uckkk/dsh-eye-makeup](https://github.com/uckkk/dsh-eye-makeup) | 0 | 2026-08-20 | 2026-08-21 | 眼妆基础 |
| 706 | [uckkk/dsh-fabric-care](https://github.com/uckkk/dsh-fabric-care) | 0 | 2026-08-20 | 2026-08-20 | 面料护理 |
| 707 | [uckkk/dsh-family-contact](https://github.com/uckkk/dsh-family-contact) | 0 | 2026-08-20 | 2026-08-21 | 家庭应急联络 |
| 708 | [uckkk/dsh-family-gather](https://github.com/uckkk/dsh-family-gather) | 0 | 2026-08-20 | 2026-08-21 | 家庭聚会 |
| 709 | [uckkk/dsh-fat-loss-cal](https://github.com/uckkk/dsh-fat-loss-cal) | 0 | 2026-08-20 | 2026-08-21 | 减脂热量计算 |
| 710 | [uckkk/dsh-fatigue](https://github.com/uckkk/dsh-fatigue) | 0 | 2026-08-20 | 2026-08-21 | 疲劳自测 |
| 711 | [uckkk/dsh-fear-pet](https://github.com/uckkk/dsh-fear-pet) | 0 | 2026-08-20 | 2026-08-21 | 恐惧缓解 |
| 712 | [uckkk/dsh-feed-rule](https://github.com/uckkk/dsh-feed-rule) | 0 | 2026-08-20 | 2026-08-21 | 喂食规则 |
| 713 | [uckkk/dsh-ferment-check](https://github.com/uckkk/dsh-ferment-check) | 0 | 2026-08-20 | 2026-08-21 | 发酵判断 |
| 714 | [uckkk/dsh-fert-plan](https://github.com/uckkk/dsh-fert-plan) | 0 | 2026-08-20 | 2026-08-21 | 施肥方案 |
| 715 | [uckkk/dsh-finger-train](https://github.com/uckkk/dsh-finger-train) | 0 | 2026-08-20 | 2026-08-21 | 手指训练 |
| 716 | [uckkk/dsh-fire-escape](https://github.com/uckkk/dsh-fire-escape) | 0 | 2026-08-20 | 2026-08-21 | 火灾逃生 |
| 717 | [uckkk/dsh-fire-safety](https://github.com/uckkk/dsh-fire-safety) | 0 | 2026-08-20 | 2026-08-21 | 露营用火安全 |
| 718 | [uckkk/dsh-first-maintenance](https://github.com/uckkk/dsh-first-maintenance) | 0 | 2026-08-20 | 2026-08-20 | 首保提醒 |
| 719 | [uckkk/dsh-first-week](https://github.com/uckkk/dsh-first-week) | 0 | 2026-08-20 | 2026-08-21 | 入职第一周 |
| 720 | [uckkk/dsh-fish-pick](https://github.com/uckkk/dsh-fish-pick) | 0 | 2026-08-20 | 2026-08-21 | 观赏鱼选择 |
| 721 | [uckkk/dsh-fish-weather](https://github.com/uckkk/dsh-fish-weather) | 0 | 2026-08-20 | 2026-08-21 | 出钓天气判断 |
| 722 | [uckkk/dsh-flight-pick](https://github.com/uckkk/dsh-flight-pick) | 0 | 2026-08-20 | 2026-08-21 | 航班选择 |
| 723 | [uckkk/dsh-float-setup](https://github.com/uckkk/dsh-float-setup) | 0 | 2026-08-20 | 2026-08-21 | 调漂入门 |
| 724 | [uckkk/dsh-flour-swap](https://github.com/uckkk/dsh-flour-swap) | 0 | 2026-08-20 | 2026-08-20 | 面粉替代 |
| 725 | [uckkk/dsh-flower-care](https://github.com/uckkk/dsh-flower-care) | 0 | 2026-08-20 | 2026-08-21 | 鲜花养护 |
| 726 | [uckkk/dsh-flower-color](https://github.com/uckkk/dsh-flower-color) | 0 | 2026-08-20 | 2026-08-21 | 花艺配色 |
| 727 | [uckkk/dsh-flower-pick](https://github.com/uckkk/dsh-flower-pick) | 0 | 2026-08-20 | 2026-08-21 | 花材选择 |
| 728 | [uckkk/dsh-follower-goal](https://github.com/uckkk/dsh-follower-goal) | 0 | 2026-08-20 | 2026-08-20 | 涨粉目标拆解 |
| 729 | [uckkk/dsh-food-therapy](https://github.com/uckkk/dsh-food-therapy) | 0 | 2026-08-20 | 2026-08-21 | 食疗搭配 |
| 730 | [uckkk/dsh-food-transition](https://github.com/uckkk/dsh-food-transition) | 0 | 2026-08-20 | 2026-08-20 | 换粮过渡 |
| 731 | [uckkk/dsh-formalin](https://github.com/uckkk/dsh-formalin) | 0 | 2026-08-20 | 2026-08-21 | 甲醛治理 |
| 732 | [uckkk/dsh-formula-stage](https://github.com/uckkk/dsh-formula-stage) | 0 | 2026-08-20 | 2026-08-21 | 奶粉段位 |
| 733 | [uckkk/dsh-frame-rate](https://github.com/uckkk/dsh-frame-rate) | 0 | 2026-08-20 | 2026-08-21 | 帧率选择 |
| 734 | [uckkk/dsh-fridge-buy](https://github.com/uckkk/dsh-fridge-buy) | 0 | 2026-08-20 | 2026-08-21 | 冰箱选购 |
| 735 | [uckkk/dsh-full-reduction](https://github.com/uckkk/dsh-full-reduction) | 0 | 2026-08-20 | 2026-08-21 | 满减设计 |
| 736 | [uckkk/dsh-furniture-care](https://github.com/uckkk/dsh-furniture-care) | 0 | 2026-08-20 | 2026-08-21 | 家具防潮 |
| 737 | [uckkk/dsh-furniture-fix](https://github.com/uckkk/dsh-furniture-fix) | 0 | 2026-08-20 | 2026-08-21 | 家具维修 |
| 738 | [uckkk/dsh-future-brain-upload](https://github.com/uckkk/dsh-future-brain-upload) | 0 | 2026-08-21 | 2026-08-21 | 意识上传 |
| 739 | [uckkk/dsh-future-cbdc](https://github.com/uckkk/dsh-future-cbdc) | 0 | 2026-08-21 | 2026-08-21 | 央行数字货币 |
| 740 | [uckkk/dsh-future-climate-engineering](https://github.com/uckkk/dsh-future-climate-engineering) | 0 | 2026-08-21 | 2026-08-21 | 气候工程 |
| 741 | [uckkk/dsh-future-digital-human](https://github.com/uckkk/dsh-future-digital-human) | 0 | 2026-08-21 | 2026-08-21 | 数字人 |
| 742 | [uckkk/dsh-future-embodied-ai](https://github.com/uckkk/dsh-future-embodied-ai) | 0 | 2026-08-21 | 2026-08-21 | 具身智能 |
| 743 | [uckkk/dsh-future-emotional-ai](https://github.com/uckkk/dsh-future-emotional-ai) | 0 | 2026-08-21 | 2026-08-21 | 情感 AI |
| 744 | [uckkk/dsh-future-fusion](https://github.com/uckkk/dsh-future-fusion) | 0 | 2026-08-21 | 2026-08-21 | 核聚变能源 |
| 745 | [uckkk/dsh-future-gene-editing](https://github.com/uckkk/dsh-future-gene-editing) | 0 | 2026-08-21 | 2026-08-21 | 基因编辑未来 |
| 746 | [uckkk/dsh-future-interstellar](https://github.com/uckkk/dsh-future-interstellar) | 0 | 2026-08-21 | 2026-08-21 | 星际旅行 |
| 747 | [uckkk/dsh-future-longevity](https://github.com/uckkk/dsh-future-longevity) | 0 | 2026-08-21 | 2026-08-21 | 长寿医学 |
| 748 | [uckkk/dsh-future-metaverse](https://github.com/uckkk/dsh-future-metaverse) | 0 | 2026-08-21 | 2026-08-21 | 元宇宙 |
| 749 | [uckkk/dsh-future-quantum-computing](https://github.com/uckkk/dsh-future-quantum-computing) | 0 | 2026-08-21 | 2026-08-21 | 量子计算 |
| 750 | [uckkk/dsh-future-robot-pet](https://github.com/uckkk/dsh-future-robot-pet) | 0 | 2026-08-21 | 2026-08-21 | 机器宠物 |
| 751 | [uckkk/dsh-future-solid-state-battery](https://github.com/uckkk/dsh-future-solid-state-battery) | 0 | 2026-08-21 | 2026-08-21 | 固态电池 |
| 752 | [uckkk/dsh-future-space-colonization](https://github.com/uckkk/dsh-future-space-colonization) | 0 | 2026-08-21 | 2026-08-21 | 太空殖民 |
| 753 | [uckkk/dsh-future-space-mining](https://github.com/uckkk/dsh-future-space-mining) | 0 | 2026-08-21 | 2026-08-21 | 太空采矿 |
| 754 | [uckkk/dsh-future-space-tourism](https://github.com/uckkk/dsh-future-space-tourism) | 0 | 2026-08-21 | 2026-08-21 | 太空旅游 |
| 755 | [uckkk/dsh-future-superconducting](https://github.com/uckkk/dsh-future-superconducting) | 0 | 2026-08-21 | 2026-08-21 | 超导技术 |
| 756 | [uckkk/dsh-future-synthetic-food](https://github.com/uckkk/dsh-future-synthetic-food) | 0 | 2026-08-21 | 2026-08-21 | 合成食品 |
| 757 | [uckkk/dsh-gabon](https://github.com/uckkk/dsh-gabon) | 0 | 2026-08-21 | 2026-08-21 | 加蓬国 |
| 758 | [uckkk/dsh-gadolinium](https://github.com/uckkk/dsh-gadolinium) | 0 | 2026-08-21 | 2026-08-21 | 钆元素 |
| 759 | [uckkk/dsh-gal2l](https://github.com/uckkk/dsh-gal2l) | 0 | 2026-08-21 | 2026-08-21 | 加仑转升 |
| 760 | [uckkk/dsh-gallium](https://github.com/uckkk/dsh-gallium) | 0 | 2026-08-21 | 2026-08-21 | 镓元素 |
| 761 | [uckkk/dsh-gaokao-split](https://github.com/uckkk/dsh-gaokao-split) | 0 | 2026-08-20 | 2026-08-20 | 备考时间拆解 |
| 762 | [uckkk/dsh-gas-safety](https://github.com/uckkk/dsh-gas-safety) | 0 | 2026-08-20 | 2026-08-21 | 燃气安全 |
| 763 | [uckkk/dsh-gear-list](https://github.com/uckkk/dsh-gear-list) | 0 | 2026-08-20 | 2026-08-21 | 新手装备清单 |
| 764 | [uckkk/dsh-geography-mountains](https://github.com/uckkk/dsh-geography-mountains) | 0 | 2026-08-21 | 2026-08-21 | 世界高峰 |
| 765 | [uckkk/dsh-geography-oceans](https://github.com/uckkk/dsh-geography-oceans) | 0 | 2026-08-21 | 2026-08-21 | 五大洋 |
| 766 | [uckkk/dsh-geography-rivers](https://github.com/uckkk/dsh-geography-rivers) | 0 | 2026-08-21 | 2026-08-21 | 世界大河 |
| 767 | [uckkk/dsh-geography-terms](https://github.com/uckkk/dsh-geography-terms) | 0 | 2026-08-21 | 2026-08-21 | 地理术语 |
| 768 | [uckkk/dsh-geometric-mean](https://github.com/uckkk/dsh-geometric-mean) | 0 | 2026-08-21 | 2026-08-21 | 几何平均数 |
| 769 | [uckkk/dsh-georgia](https://github.com/uckkk/dsh-georgia) | 0 | 2026-08-21 | 2026-08-21 | 格鲁吉亚国家 |
| 770 | [uckkk/dsh-germanium](https://github.com/uckkk/dsh-germanium) | 0 | 2026-08-21 | 2026-08-21 | 锗元素 |
| 771 | [uckkk/dsh-germany](https://github.com/uckkk/dsh-germany) | 0 | 2026-08-21 | 2026-08-21 | 德国国家 |
| 772 | [uckkk/dsh-ghana](https://github.com/uckkk/dsh-ghana) | 0 | 2026-08-21 | 2026-08-21 | 加纳国家 |
| 773 | [uckkk/dsh-gift-budget](https://github.com/uckkk/dsh-gift-budget) | 0 | 2026-08-20 | 2026-08-20 | 送礼预算 |
| 774 | [uckkk/dsh-gift-etiquette](https://github.com/uckkk/dsh-gift-etiquette) | 0 | 2026-08-21 | 2026-08-21 | 送礼避讳 |
| 775 | [uckkk/dsh-gift-money](https://github.com/uckkk/dsh-gift-money) | 0 | 2026-08-20 | 2026-08-21 | 份子钱参考 |
| 776 | [uckkk/dsh-github-live](https://github.com/uckkk/dsh-github-live) | 0 | 2026-08-20 | 2026-08-20 | GitHub仓库信息 |
| 777 | [uckkk/dsh-glass-care](https://github.com/uckkk/dsh-glass-care) | 0 | 2026-08-20 | 2026-08-21 | 玻璃养护 |
| 778 | [uckkk/dsh-go-rules](https://github.com/uckkk/dsh-go-rules) | 0 | 2026-08-20 | 2026-08-21 | 围棋规则 |
| 779 | [uckkk/dsh-gold](https://github.com/uckkk/dsh-gold) | 0 | 2026-08-21 | 2026-08-21 | 金元素 |
| 780 | [uckkk/dsh-gold-clean](https://github.com/uckkk/dsh-gold-clean) | 0 | 2026-08-20 | 2026-08-21 | 珠宝清洗 |
| 781 | [uckkk/dsh-golden-hour](https://github.com/uckkk/dsh-golden-hour) | 0 | 2026-08-21 | 2026-08-21 | 黄金时刻 |
| 782 | [uckkk/dsh-gongfu-steps](https://github.com/uckkk/dsh-gongfu-steps) | 0 | 2026-08-20 | 2026-08-21 | 泡茶步骤 |
| 783 | [uckkk/dsh-gongjijin](https://github.com/uckkk/dsh-gongjijin) | 0 | 2026-08-20 | 2026-08-21 | 公积金贷款月供 |
| 784 | [uckkk/dsh-graduate-exam](https://github.com/uckkk/dsh-graduate-exam) | 0 | 2026-08-20 | 2026-08-20 | 考研过线判断 |
| 785 | [uckkk/dsh-greece](https://github.com/uckkk/dsh-greece) | 0 | 2026-08-21 | 2026-08-21 | 希腊国家 |
| 786 | [uckkk/dsh-grenada](https://github.com/uckkk/dsh-grenada) | 0 | 2026-08-21 | 2026-08-21 | 格林纳达国 |
| 787 | [uckkk/dsh-grocery-list](https://github.com/uckkk/dsh-grocery-list) | 0 | 2026-08-20 | 2026-08-21 | 食材采购 |
| 788 | [uckkk/dsh-group-buy](https://github.com/uckkk/dsh-group-buy) | 0 | 2026-08-20 | 2026-08-20 | 拼单团购 |
| 789 | [uckkk/dsh-grout-calc](https://github.com/uckkk/dsh-grout-calc) | 0 | 2026-08-20 | 2026-08-20 | 美缝剂用量 |
| 790 | [uckkk/dsh-guangzhou-city](https://github.com/uckkk/dsh-guangzhou-city) | 0 | 2026-08-21 | 2026-08-21 | 广州市 |
| 791 | [uckkk/dsh-guatemala](https://github.com/uckkk/dsh-guatemala) | 0 | 2026-08-21 | 2026-08-21 | 危地马拉国家 |
| 792 | [uckkk/dsh-guest-table](https://github.com/uckkk/dsh-guest-table) | 0 | 2026-08-20 | 2026-08-21 | 婚宴桌数 |
| 793 | [uckkk/dsh-guitar-chord](https://github.com/uckkk/dsh-guitar-chord) | 0 | 2026-08-20 | 2026-08-21 | 吉他调性和弦 |
| 794 | [uckkk/dsh-guyana](https://github.com/uckkk/dsh-guyana) | 0 | 2026-08-21 | 2026-08-21 | 圭亚那国家 |
| 795 | [uckkk/dsh-guzheng-basic](https://github.com/uckkk/dsh-guzheng-basic) | 0 | 2026-08-20 | 2026-08-21 | 古筝基础 |
| 796 | [uckkk/dsh-ha2acre](https://github.com/uckkk/dsh-ha2acre) | 0 | 2026-08-21 | 2026-08-21 | 公顷转英亩 |
| 797 | [uckkk/dsh-habit-anchor](https://github.com/uckkk/dsh-habit-anchor) | 0 | 2026-08-21 | 2026-08-21 | 习惯叠加 |
| 798 | [uckkk/dsh-habit-build](https://github.com/uckkk/dsh-habit-build) | 0 | 2026-08-20 | 2026-08-21 | 习惯培养 |
| 799 | [uckkk/dsh-hafnium](https://github.com/uckkk/dsh-hafnium) | 0 | 2026-08-21 | 2026-08-21 | 铪元素 |
| 800 | [uckkk/dsh-hair-care](https://github.com/uckkk/dsh-hair-care) | 0 | 2026-08-21 | 2026-08-21 | 护发建议 |
| 801 | [uckkk/dsh-hair-dryer](https://github.com/uckkk/dsh-hair-dryer) | 0 | 2026-08-21 | 2026-08-21 | 吹风机选择 |
| 802 | [uckkk/dsh-hair-issue](https://github.com/uckkk/dsh-hair-issue) | 0 | 2026-08-20 | 2026-08-21 | 问题发质 |
| 803 | [uckkk/dsh-hair-loss-check](https://github.com/uckkk/dsh-hair-loss-check) | 0 | 2026-08-20 | 2026-08-21 | 脱发判断 |
| 804 | [uckkk/dsh-hair-pick](https://github.com/uckkk/dsh-hair-pick) | 0 | 2026-08-20 | 2026-08-21 | 发型选择 |
| 805 | [uckkk/dsh-hair-wash](https://github.com/uckkk/dsh-hair-wash) | 0 | 2026-08-20 | 2026-08-20 | 洗头频率 |
| 806 | [uckkk/dsh-hair-wash-care](https://github.com/uckkk/dsh-hair-wash-care) | 0 | 2026-08-20 | 2026-08-21 | 洗发护发 |
| 807 | [uckkk/dsh-haiti](https://github.com/uckkk/dsh-haiti) | 0 | 2026-08-21 | 2026-08-21 | 海地国家 |
| 808 | [uckkk/dsh-hamming-weight](https://github.com/uckkk/dsh-hamming-weight) | 0 | 2026-08-21 | 2026-08-21 | 汉明重量 |
| 809 | [uckkk/dsh-hamster-cage](https://github.com/uckkk/dsh-hamster-cage) | 0 | 2026-08-20 | 2026-08-21 | 仓鼠笼养 |
| 810 | [uckkk/dsh-hamster-diet](https://github.com/uckkk/dsh-hamster-diet) | 0 | 2026-08-20 | 2026-08-21 | 仓鼠饮食 |
| 811 | [uckkk/dsh-hamster-pick](https://github.com/uckkk/dsh-hamster-pick) | 0 | 2026-08-20 | 2026-08-21 | 仓鼠选择 |
| 812 | [uckkk/dsh-hand-care](https://github.com/uckkk/dsh-hand-care) | 0 | 2026-08-20 | 2026-08-21 | 手部护理 |
| 813 | [uckkk/dsh-hanfu-buy](https://github.com/uckkk/dsh-hanfu-buy) | 0 | 2026-08-20 | 2026-08-21 | 汉服选购避坑 |
| 814 | [uckkk/dsh-hanfu-size](https://github.com/uckkk/dsh-hanfu-size) | 0 | 2026-08-20 | 2026-08-21 | 汉服尺码计算 |
| 815 | [uckkk/dsh-hanfu-style](https://github.com/uckkk/dsh-hanfu-style) | 0 | 2026-08-20 | 2026-08-21 | 汉服形制选择 |
| 816 | [uckkk/dsh-hanfu-wash](https://github.com/uckkk/dsh-hanfu-wash) | 0 | 2026-08-20 | 2026-08-21 | 汉服清洗保养 |
| 817 | [uckkk/dsh-hassium](https://github.com/uckkk/dsh-hassium) | 0 | 2026-08-21 | 2026-08-21 | 𬭶元素 |
| 818 | [uckkk/dsh-heart-zone](https://github.com/uckkk/dsh-heart-zone) | 0 | 2026-08-20 | 2026-08-21 | 心率区间 |
| 819 | [uckkk/dsh-heat-check](https://github.com/uckkk/dsh-heat-check) | 0 | 2026-08-21 | 2026-08-21 | 中暑预警 |
| 820 | [uckkk/dsh-heat-control](https://github.com/uckkk/dsh-heat-control) | 0 | 2026-08-21 | 2026-08-21 | 火候控制 |
| 821 | [uckkk/dsh-heat-index](https://github.com/uckkk/dsh-heat-index) | 0 | 2026-08-21 | 2026-08-21 | 热指数 |
| 822 | [uckkk/dsh-heat-level](https://github.com/uckkk/dsh-heat-level) | 0 | 2026-08-20 | 2026-08-21 | 火候判断 |
| 823 | [uckkk/dsh-heating-safe](https://github.com/uckkk/dsh-heating-safe) | 0 | 2026-08-21 | 2026-08-21 | 取暖安全 |
| 824 | [uckkk/dsh-heatstroke](https://github.com/uckkk/dsh-heatstroke) | 0 | 2026-08-20 | 2026-08-21 | 中暑急救 |
| 825 | [uckkk/dsh-herb-warn](https://github.com/uckkk/dsh-herb-warn) | 0 | 2026-08-20 | 2026-08-21 | 药膳禁忌 |
| 826 | [uckkk/dsh-hero-product](https://github.com/uckkk/dsh-hero-product) | 0 | 2026-08-20 | 2026-08-21 | 引流爆品定价 |
| 827 | [uckkk/dsh-hidden-storage](https://github.com/uckkk/dsh-hidden-storage) | 0 | 2026-08-20 | 2026-08-21 | 隐形收纳 |
| 828 | [uckkk/dsh-high-speed-rail](https://github.com/uckkk/dsh-high-speed-rail) | 0 | 2026-08-21 | 2026-08-21 | 高铁指南 |
| 829 | [uckkk/dsh-highway-drive](https://github.com/uckkk/dsh-highway-drive) | 0 | 2026-08-21 | 2026-08-21 | 高速驾驶 |
| 830 | [uckkk/dsh-hike-gear](https://github.com/uckkk/dsh-hike-gear) | 0 | 2026-08-20 | 2026-08-21 | 徒步装备 |
| 831 | [uckkk/dsh-hike-safe](https://github.com/uckkk/dsh-hike-safe) | 0 | 2026-08-20 | 2026-08-21 | 徒步安全 |
| 832 | [uckkk/dsh-hike-safety](https://github.com/uckkk/dsh-hike-safety) | 0 | 2026-08-21 | 2026-08-21 | 徒步安全 |
| 833 | [uckkk/dsh-hike-train](https://github.com/uckkk/dsh-hike-train) | 0 | 2026-08-20 | 2026-08-21 | 登山训练 |
| 834 | [uckkk/dsh-hike-water](https://github.com/uckkk/dsh-hike-water) | 0 | 2026-08-20 | 2026-08-21 | 徒步饮水量 |
| 835 | [uckkk/dsh-history-terms](https://github.com/uckkk/dsh-history-terms) | 0 | 2026-08-21 | 2026-08-21 | 历史术语 |
| 836 | [uckkk/dsh-holmium](https://github.com/uckkk/dsh-holmium) | 0 | 2026-08-21 | 2026-08-21 | 钬元素 |
| 837 | [uckkk/dsh-homework](https://github.com/uckkk/dsh-homework) | 0 | 2026-08-20 | 2026-08-21 | 作业辅导 |
| 838 | [uckkk/dsh-homework-help](https://github.com/uckkk/dsh-homework-help) | 0 | 2026-08-21 | 2026-08-21 | 作业辅导 |
| 839 | [uckkk/dsh-honduras](https://github.com/uckkk/dsh-honduras) | 0 | 2026-08-21 | 2026-08-21 | 洪都拉斯国家 |
| 840 | [uckkk/dsh-hong-kong](https://github.com/uckkk/dsh-hong-kong) | 0 | 2026-08-21 | 2026-08-21 | 香港国家 |
| 841 | [uckkk/dsh-hongbao](https://github.com/uckkk/dsh-hongbao) | 0 | 2026-08-20 | 2026-08-20 | 红包计算 |
| 842 | [uckkk/dsh-hongkong-city](https://github.com/uckkk/dsh-hongkong-city) | 0 | 2026-08-21 | 2026-08-21 | 香港市 |
| 843 | [uckkk/dsh-host-drink](https://github.com/uckkk/dsh-host-drink) | 0 | 2026-08-20 | 2026-08-21 | 待客饮品 |
| 844 | [uckkk/dsh-host-guide](https://github.com/uckkk/dsh-host-guide) | 0 | 2026-08-20 | 2026-08-21 | 待客礼仪 |
| 845 | [uckkk/dsh-hot-drink](https://github.com/uckkk/dsh-hot-drink) | 0 | 2026-08-20 | 2026-08-21 | 热饮养生 |
| 846 | [uckkk/dsh-hotel-tax](https://github.com/uckkk/dsh-hotel-tax) | 0 | 2026-08-20 | 2026-08-20 | 酒店税费计算 |
| 847 | [uckkk/dsh-hp2kw](https://github.com/uckkk/dsh-hp2kw) | 0 | 2026-08-21 | 2026-08-21 | 马力转千瓦 |
| 848 | [uckkk/dsh-human-food](https://github.com/uckkk/dsh-human-food) | 0 | 2026-08-21 | 2026-08-21 | 人类食物喂食 |
| 849 | [uckkk/dsh-humidity](https://github.com/uckkk/dsh-humidity) | 0 | 2026-08-20 | 2026-08-20 | 湿度参考 |
| 850 | [uckkk/dsh-humidity-comfort](https://github.com/uckkk/dsh-humidity-comfort) | 0 | 2026-08-21 | 2026-08-21 | 湿度舒适度 |
| 851 | [uckkk/dsh-hungary](https://github.com/uckkk/dsh-hungary) | 0 | 2026-08-21 | 2026-08-21 | 匈牙利国家 |
| 852 | [uckkk/dsh-hydroponics](https://github.com/uckkk/dsh-hydroponics) | 0 | 2026-08-20 | 2026-08-20 | 水培营养液配比 |
| 853 | [uckkk/dsh-iceland](https://github.com/uckkk/dsh-iceland) | 0 | 2026-08-21 | 2026-08-21 | 冰岛国家 |
| 854 | [uckkk/dsh-id-renew](https://github.com/uckkk/dsh-id-renew) | 0 | 2026-08-21 | 2026-08-21 | 身份证换证 |
| 855 | [uckkk/dsh-in2cm](https://github.com/uckkk/dsh-in2cm) | 0 | 2026-08-21 | 2026-08-21 | 英寸转厘米 |
| 856 | [uckkk/dsh-index-live](https://github.com/uckkk/dsh-index-live) | 0 | 2026-08-20 | 2026-08-20 | 大盘指数行情 |
| 857 | [uckkk/dsh-india](https://github.com/uckkk/dsh-india) | 0 | 2026-08-21 | 2026-08-21 | 印度国家 |
| 858 | [uckkk/dsh-indium](https://github.com/uckkk/dsh-indium) | 0 | 2026-08-21 | 2026-08-21 | 铟元素 |
| 859 | [uckkk/dsh-indonesia](https://github.com/uckkk/dsh-indonesia) | 0 | 2026-08-21 | 2026-08-21 | 印度尼西亚国家 |
| 860 | [uckkk/dsh-ingredient](https://github.com/uckkk/dsh-ingredient) | 0 | 2026-08-20 | 2026-08-21 | 成分识别 |
| 861 | [uckkk/dsh-inhg2hpa](https://github.com/uckkk/dsh-inhg2hpa) | 0 | 2026-08-21 | 2026-08-21 | 英寸汞柱转百帕 |
| 862 | [uckkk/dsh-ink-tools](https://github.com/uckkk/dsh-ink-tools) | 0 | 2026-08-20 | 2026-08-21 | 笔墨纸砚 |
| 863 | [uckkk/dsh-inst-pick](https://github.com/uckkk/dsh-inst-pick) | 0 | 2026-08-20 | 2026-08-21 | 民族乐器选择 |
| 864 | [uckkk/dsh-inst-plan](https://github.com/uckkk/dsh-inst-plan) | 0 | 2026-08-20 | 2026-08-21 | 学琴规划 |
| 865 | [uckkk/dsh-insur-pick](https://github.com/uckkk/dsh-insur-pick) | 0 | 2026-08-20 | 2026-08-21 | 险种选择 |
| 866 | [uckkk/dsh-insur-plan](https://github.com/uckkk/dsh-insur-plan) | 0 | 2026-08-20 | 2026-08-21 | 家庭保险配置 |
| 867 | [uckkk/dsh-insurance-claim](https://github.com/uckkk/dsh-insurance-claim) | 0 | 2026-08-21 | 2026-08-21 | 车险理赔决策 |
| 868 | [uckkk/dsh-insurance-config](https://github.com/uckkk/dsh-insurance-config) | 0 | 2026-08-20 | 2026-08-21 | 保险配置 |
| 869 | [uckkk/dsh-insurance-estimate](https://github.com/uckkk/dsh-insurance-estimate) | 0 | 2026-08-20 | 2026-08-20 | 车险费用估算 |
| 870 | [uckkk/dsh-interior-clean](https://github.com/uckkk/dsh-interior-clean) | 0 | 2026-08-20 | 2026-08-21 | 内饰清洁 |
| 871 | [uckkk/dsh-interval](https://github.com/uckkk/dsh-interval) | 0 | 2026-08-20 | 2026-08-21 | 间歇训练 |
| 872 | [uckkk/dsh-interview-prep](https://github.com/uckkk/dsh-interview-prep) | 0 | 2026-08-21 | 2026-08-21 | 面试准备 |
| 873 | [uckkk/dsh-iodine](https://github.com/uckkk/dsh-iodine) | 0 | 2026-08-21 | 2026-08-21 | 碘元素 |
| 874 | [uckkk/dsh-ip-live](https://github.com/uckkk/dsh-ip-live) | 0 | 2026-08-20 | 2026-08-20 | 公网IP归属地 |
| 875 | [uckkk/dsh-iran](https://github.com/uckkk/dsh-iran) | 0 | 2026-08-21 | 2026-08-21 | 伊朗国家 |
| 876 | [uckkk/dsh-iraq](https://github.com/uckkk/dsh-iraq) | 0 | 2026-08-21 | 2026-08-21 | 伊拉克国家 |
| 877 | [uckkk/dsh-ireland](https://github.com/uckkk/dsh-ireland) | 0 | 2026-08-21 | 2026-08-21 | 爱尔兰国家 |
| 878 | [uckkk/dsh-iridium](https://github.com/uckkk/dsh-iridium) | 0 | 2026-08-21 | 2026-08-21 | 铱元素 |
| 879 | [uckkk/dsh-iron](https://github.com/uckkk/dsh-iron) | 0 | 2026-08-21 | 2026-08-21 | 铁元素 |
| 880 | [uckkk/dsh-iron-temp](https://github.com/uckkk/dsh-iron-temp) | 0 | 2026-08-20 | 2026-08-20 | 熨烫温度 |
| 881 | [uckkk/dsh-is-perfect](https://github.com/uckkk/dsh-is-perfect) | 0 | 2026-08-21 | 2026-08-21 | 完全数判断 |
| 882 | [uckkk/dsh-is-power-of-two](https://github.com/uckkk/dsh-is-power-of-two) | 0 | 2026-08-21 | 2026-08-21 | 2 的幂判断 |
| 883 | [uckkk/dsh-is-square](https://github.com/uckkk/dsh-is-square) | 0 | 2026-08-21 | 2026-08-21 | 平方数判断 |
| 884 | [uckkk/dsh-israel](https://github.com/uckkk/dsh-israel) | 0 | 2026-08-21 | 2026-08-21 | 以色列国家 |
| 885 | [uckkk/dsh-istanbul-city](https://github.com/uckkk/dsh-istanbul-city) | 0 | 2026-08-21 | 2026-08-21 | 伊斯坦布尔市 |
| 886 | [uckkk/dsh-italy](https://github.com/uckkk/dsh-italy) | 0 | 2026-08-21 | 2026-08-21 | 意大利国家 |
| 887 | [uckkk/dsh-item-route](https://github.com/uckkk/dsh-item-route) | 0 | 2026-08-20 | 2026-08-21 | 旧物处理去向 |
| 888 | [uckkk/dsh-itinerary](https://github.com/uckkk/dsh-itinerary) | 0 | 2026-08-20 | 2026-08-21 | 行程编排 |
| 889 | [uckkk/dsh-ivory-coast](https://github.com/uckkk/dsh-ivory-coast) | 0 | 2026-08-21 | 2026-08-21 | 科特迪瓦国家 |
| 890 | [uckkk/dsh-jamaica](https://github.com/uckkk/dsh-jamaica) | 0 | 2026-08-21 | 2026-08-21 | 牙买加国家 |
| 891 | [uckkk/dsh-japan](https://github.com/uckkk/dsh-japan) | 0 | 2026-08-21 | 2026-08-21 | 日本国家 |
| 892 | [uckkk/dsh-jetlag](https://github.com/uckkk/dsh-jetlag) | 0 | 2026-08-20 | 2026-08-21 | 时差调整 |
| 893 | [uckkk/dsh-jordan](https://github.com/uckkk/dsh-jordan) | 0 | 2026-08-21 | 2026-08-21 | 约旦国家 |
| 894 | [uckkk/dsh-juice-mix](https://github.com/uckkk/dsh-juice-mix) | 0 | 2026-08-20 | 2026-08-21 | 果汁搭配 |
| 895 | [uckkk/dsh-jumping-fix](https://github.com/uckkk/dsh-jumping-fix) | 0 | 2026-08-20 | 2026-08-21 | 扑人纠正 |
| 896 | [uckkk/dsh-jupiter](https://github.com/uckkk/dsh-jupiter) | 0 | 2026-08-21 | 2026-08-21 | 木星 |
| 897 | [uckkk/dsh-k2c](https://github.com/uckkk/dsh-k2c) | 0 | 2026-08-21 | 2026-08-21 | 开尔文转摄氏 |
| 898 | [uckkk/dsh-kazakhstan](https://github.com/uckkk/dsh-kazakhstan) | 0 | 2026-08-21 | 2026-08-21 | 哈萨克斯坦国家 |
| 899 | [uckkk/dsh-kenya](https://github.com/uckkk/dsh-kenya) | 0 | 2026-08-21 | 2026-08-21 | 肯尼亚国家 |
| 900 | [uckkk/dsh-kg2lb](https://github.com/uckkk/dsh-kg2lb) | 0 | 2026-08-21 | 2026-08-21 | 千克转磅 |
| 901 | [uckkk/dsh-kidney-func](https://github.com/uckkk/dsh-kidney-func) | 0 | 2026-08-20 | 2026-08-21 | 肾功能解读 |
| 902 | [uckkk/dsh-kids-swim](https://github.com/uckkk/dsh-kids-swim) | 0 | 2026-08-20 | 2026-08-21 | 儿童游泳建议 |
| 903 | [uckkk/dsh-kiribati](https://github.com/uckkk/dsh-kiribati) | 0 | 2026-08-21 | 2026-08-21 | 基里巴斯国 |
| 904 | [uckkk/dsh-kitchen-exhaust](https://github.com/uckkk/dsh-kitchen-exhaust) | 0 | 2026-08-20 | 2026-08-21 | 烟灶选购 |
| 905 | [uckkk/dsh-kitchen-org](https://github.com/uckkk/dsh-kitchen-org) | 0 | 2026-08-20 | 2026-08-21 | 厨房收纳 |
| 906 | [uckkk/dsh-km2mi](https://github.com/uckkk/dsh-km2mi) | 0 | 2026-08-21 | 2026-08-21 | 公里转英里 |
| 907 | [uckkk/dsh-kn2km](https://github.com/uckkk/dsh-kn2km) | 0 | 2026-08-21 | 2026-08-21 | 海里/时转公里/时 |
| 908 | [uckkk/dsh-knife-skill](https://github.com/uckkk/dsh-knife-skill) | 0 | 2026-08-20 | 2026-08-21 | 切配刀工 |
| 909 | [uckkk/dsh-knit-intro](https://github.com/uckkk/dsh-knit-intro) | 0 | 2026-08-20 | 2026-08-21 | 编织入门 |
| 910 | [uckkk/dsh-knot2kph](https://github.com/uckkk/dsh-knot2kph) | 0 | 2026-08-21 | 2026-08-21 | 节转公里/时 |
| 911 | [uckkk/dsh-kpa2psi](https://github.com/uckkk/dsh-kpa2psi) | 0 | 2026-08-21 | 2026-08-21 | 千帕转 PSI |
| 912 | [uckkk/dsh-kph2mph](https://github.com/uckkk/dsh-kph2mph) | 0 | 2026-08-21 | 2026-08-21 | 公里/时转英里/时 |
| 913 | [uckkk/dsh-kpi-reach](https://github.com/uckkk/dsh-kpi-reach) | 0 | 2026-08-20 | 2026-08-20 | KPI缺口拆解 |
| 914 | [uckkk/dsh-krypton](https://github.com/uckkk/dsh-krypton) | 0 | 2026-08-21 | 2026-08-21 | 氪元素 |
| 915 | [uckkk/dsh-kuwait](https://github.com/uckkk/dsh-kuwait) | 0 | 2026-08-21 | 2026-08-21 | 科威特国家 |
| 916 | [uckkk/dsh-kwh2mj](https://github.com/uckkk/dsh-kwh2mj) | 0 | 2026-08-21 | 2026-08-21 | 千瓦时转兆焦 |
| 917 | [uckkk/dsh-kyrgyzstan](https://github.com/uckkk/dsh-kyrgyzstan) | 0 | 2026-08-21 | 2026-08-21 | 吉尔吉斯斯坦国家 |
| 918 | [uckkk/dsh-l2gal](https://github.com/uckkk/dsh-l2gal) | 0 | 2026-08-21 | 2026-08-21 | 升转加仑 |
| 919 | [uckkk/dsh-lab-check](https://github.com/uckkk/dsh-lab-check) | 0 | 2026-08-20 | 2026-08-21 | 体检指标 |
| 920 | [uckkk/dsh-lagos-city](https://github.com/uckkk/dsh-lagos-city) | 0 | 2026-08-21 | 2026-08-21 | 拉各斯市 |
| 921 | [uckkk/dsh-landscape](https://github.com/uckkk/dsh-landscape) | 0 | 2026-08-20 | 2026-08-21 | 风光拍摄 |
| 922 | [uckkk/dsh-lanthanum](https://github.com/uckkk/dsh-lanthanum) | 0 | 2026-08-21 | 2026-08-21 | 镧元素 |
| 923 | [uckkk/dsh-laos](https://github.com/uckkk/dsh-laos) | 0 | 2026-08-21 | 2026-08-21 | 老挝国家 |
| 924 | [uckkk/dsh-latency-pct](https://github.com/uckkk/dsh-latency-pct) | 0 | 2026-08-20 | 2026-08-21 | 延迟百分位 |
| 925 | [uckkk/dsh-latvia](https://github.com/uckkk/dsh-latvia) | 0 | 2026-08-21 | 2026-08-21 | 拉脱维亚国家 |
| 926 | [uckkk/dsh-laundry-room](https://github.com/uckkk/dsh-laundry-room) | 0 | 2026-08-20 | 2026-08-21 | 洗衣房规划 |
| 927 | [uckkk/dsh-laundry-sort](https://github.com/uckkk/dsh-laundry-sort) | 0 | 2026-08-20 | 2026-08-21 | 衣物分类 |
| 928 | [uckkk/dsh-laundry-temp](https://github.com/uckkk/dsh-laundry-temp) | 0 | 2026-08-20 | 2026-08-20 | 洗涤水温 |
| 929 | [uckkk/dsh-law-terms](https://github.com/uckkk/dsh-law-terms) | 0 | 2026-08-21 | 2026-08-21 | 法律术语 |
| 930 | [uckkk/dsh-lawrencium](https://github.com/uckkk/dsh-lawrencium) | 0 | 2026-08-21 | 2026-08-21 | 铹元素 |
| 931 | [uckkk/dsh-layer-match](https://github.com/uckkk/dsh-layer-match) | 0 | 2026-08-20 | 2026-08-21 | 产品选择 |
| 932 | [uckkk/dsh-lb2kg](https://github.com/uckkk/dsh-lb2kg) | 0 | 2026-08-21 | 2026-08-21 | 磅转千克 |
| 933 | [uckkk/dsh-leave-days](https://github.com/uckkk/dsh-leave-days) | 0 | 2026-08-20 | 2026-08-20 | 年假天数 |
| 934 | [uckkk/dsh-lebanon](https://github.com/uckkk/dsh-lebanon) | 0 | 2026-08-21 | 2026-08-21 | 黎巴嫩国家 |
| 935 | [uckkk/dsh-lesotho](https://github.com/uckkk/dsh-lesotho) | 0 | 2026-08-21 | 2026-08-21 | 莱索托国 |
| 936 | [uckkk/dsh-libya](https://github.com/uckkk/dsh-libya) | 0 | 2026-08-21 | 2026-08-21 | 利比亚国家 |
| 937 | [uckkk/dsh-license-period](https://github.com/uckkk/dsh-license-period) | 0 | 2026-08-21 | 2026-08-21 | 驾驶证换证 |
| 938 | [uckkk/dsh-lift-form](https://github.com/uckkk/dsh-lift-form) | 0 | 2026-08-20 | 2026-08-21 | 动作教学 |
| 939 | [uckkk/dsh-lighting-calc](https://github.com/uckkk/dsh-lighting-calc) | 0 | 2026-08-21 | 2026-08-21 | 照明功率计算 |
| 940 | [uckkk/dsh-lip-pick](https://github.com/uckkk/dsh-lip-pick) | 0 | 2026-08-20 | 2026-08-21 | 口红选择 |
| 941 | [uckkk/dsh-literature-terms](https://github.com/uckkk/dsh-literature-terms) | 0 | 2026-08-21 | 2026-08-21 | 文学术语 |
| 942 | [uckkk/dsh-lithuania](https://github.com/uckkk/dsh-lithuania) | 0 | 2026-08-21 | 2026-08-21 | 立陶宛国家 |
| 943 | [uckkk/dsh-live-bitrate](https://github.com/uckkk/dsh-live-bitrate) | 0 | 2026-08-20 | 2026-08-21 | 直播码率 |
| 944 | [uckkk/dsh-live-stream](https://github.com/uckkk/dsh-live-stream) | 0 | 2026-08-20 | 2026-08-20 | 直播带货拆解 |
| 945 | [uckkk/dsh-liver-func](https://github.com/uckkk/dsh-liver-func) | 0 | 2026-08-20 | 2026-08-21 | 肝功能解读 |
| 946 | [uckkk/dsh-livermorium](https://github.com/uckkk/dsh-livermorium) | 0 | 2026-08-21 | 2026-08-21 | 鉝元素 |
| 947 | [uckkk/dsh-loan-prepay](https://github.com/uckkk/dsh-loan-prepay) | 0 | 2026-08-21 | 2026-08-21 | 提前还贷计算器 |
| 948 | [uckkk/dsh-log-volume](https://github.com/uckkk/dsh-log-volume) | 0 | 2026-08-20 | 2026-08-20 | 日志量估算 |
| 949 | [uckkk/dsh-london-city](https://github.com/uckkk/dsh-london-city) | 0 | 2026-08-21 | 2026-08-21 | 伦敦市 |
| 950 | [uckkk/dsh-luggage-size](https://github.com/uckkk/dsh-luggage-size) | 0 | 2026-08-20 | 2026-08-20 | 行李箱尺寸 |
| 951 | [uckkk/dsh-luggage-weight](https://github.com/uckkk/dsh-luggage-weight) | 0 | 2026-08-20 | 2026-08-20 | 行李超重计算 |
| 952 | [uckkk/dsh-makeup-steps](https://github.com/uckkk/dsh-makeup-steps) | 0 | 2026-08-20 | 2026-08-21 | 妆容步骤 |
| 953 | [uckkk/dsh-meal-plan](https://github.com/uckkk/dsh-meal-plan) | 0 | 2026-08-20 | 2026-08-21 | 减脂餐搭配 |
| 954 | [uckkk/dsh-meeting-cost](https://github.com/uckkk/dsh-meeting-cost) | 0 | 2026-08-20 | 2026-08-20 | 会议成本计算 |
| 955 | [uckkk/dsh-meeting-prep](https://github.com/uckkk/dsh-meeting-prep) | 0 | 2026-08-20 | 2026-08-21 | 会前准备 |
| 956 | [uckkk/dsh-meeting-talk](https://github.com/uckkk/dsh-meeting-talk) | 0 | 2026-08-20 | 2026-08-21 | 会议发言 |
| 957 | [uckkk/dsh-menu-plan](https://github.com/uckkk/dsh-menu-plan) | 0 | 2026-08-20 | 2026-08-21 | 菜单规划 |
| 958 | [uckkk/dsh-menu-pricing](https://github.com/uckkk/dsh-menu-pricing) | 0 | 2026-08-20 | 2026-08-21 | 菜单定价 |
| 959 | [uckkk/dsh-metronome](https://github.com/uckkk/dsh-metronome) | 0 | 2026-08-20 | 2026-08-21 | 节拍练习 |
| 960 | [uckkk/dsh-microwave2](https://github.com/uckkk/dsh-microwave2) | 0 | 2026-08-20 | 2026-08-21 | 微波炉进阶 |
| 961 | [uckkk/dsh-milk-coffee](https://github.com/uckkk/dsh-milk-coffee) | 0 | 2026-08-20 | 2026-08-21 | 奶咖配方 |
| 962 | [uckkk/dsh-milk-tea](https://github.com/uckkk/dsh-milk-tea) | 0 | 2026-08-20 | 2026-08-21 | 奶茶配方 |
| 963 | [uckkk/dsh-mini-store](https://github.com/uckkk/dsh-mini-store) | 0 | 2026-08-20 | 2026-08-21 | 极简收纳规则 |
| 964 | [uckkk/dsh-mite-removal](https://github.com/uckkk/dsh-mite-removal) | 0 | 2026-08-20 | 2026-08-21 | 除螨建议 |
| 965 | [uckkk/dsh-monitor-ppi](https://github.com/uckkk/dsh-monitor-ppi) | 0 | 2026-08-20 | 2026-08-20 | 显示器PPI |
| 966 | [uckkk/dsh-mood-log](https://github.com/uckkk/dsh-mood-log) | 0 | 2026-08-20 | 2026-08-21 | 情绪日志 |
| 967 | [uckkk/dsh-move-day](https://github.com/uckkk/dsh-move-day) | 0 | 2026-08-20 | 2026-08-21 | 搬家当日 |
| 968 | [uckkk/dsh-move-in-list](https://github.com/uckkk/dsh-move-in-list) | 0 | 2026-08-20 | 2026-08-21 | 搬家入住清单 |
| 969 | [uckkk/dsh-move-plan](https://github.com/uckkk/dsh-move-plan) | 0 | 2026-08-20 | 2026-08-21 | 搬家计划 |
| 970 | [uckkk/dsh-mover-pick](https://github.com/uckkk/dsh-mover-pick) | 0 | 2026-08-20 | 2026-08-21 | 搬家公司 |
| 971 | [uckkk/dsh-multi-furniture](https://github.com/uckkk/dsh-multi-furniture) | 0 | 2026-08-20 | 2026-08-21 | 多功能家具 |
| 972 | [uckkk/dsh-muscle-diet](https://github.com/uckkk/dsh-muscle-diet) | 0 | 2026-08-20 | 2026-08-21 | 增肌饮食 |
| 973 | [uckkk/dsh-music-common](https://github.com/uckkk/dsh-music-common) | 0 | 2026-08-20 | 2026-08-21 | 乐理常识 |
| 974 | [uckkk/dsh-nail-issue](https://github.com/uckkk/dsh-nail-issue) | 0 | 2026-08-20 | 2026-08-21 | 问题甲处理 |
| 975 | [uckkk/dsh-nail-shape](https://github.com/uckkk/dsh-nail-shape) | 0 | 2026-08-20 | 2026-08-21 | 甲型选择 |
| 976 | [uckkk/dsh-nail-steps](https://github.com/uckkk/dsh-nail-steps) | 0 | 2026-08-20 | 2026-08-21 | 美甲流程 |
| 977 | [uckkk/dsh-nail-trim](https://github.com/uckkk/dsh-nail-trim) | 0 | 2026-08-20 | 2026-08-20 | 剪指甲周期 |
| 978 | [uckkk/dsh-negotiation](https://github.com/uckkk/dsh-negotiation) | 0 | 2026-08-20 | 2026-08-21 | 谈判策略 |
| 979 | [uckkk/dsh-neuter](https://github.com/uckkk/dsh-neuter) | 0 | 2026-08-20 | 2026-08-20 | 绝育时机 |
| 980 | [uckkk/dsh-new-home-check](https://github.com/uckkk/dsh-new-home-check) | 0 | 2026-08-20 | 2026-08-21 | 新家验收 |
| 981 | [uckkk/dsh-new-year-menu](https://github.com/uckkk/dsh-new-year-menu) | 0 | 2026-08-20 | 2026-08-21 | 年夜饭菜单 |
| 982 | [uckkk/dsh-new-year-shop](https://github.com/uckkk/dsh-new-year-shop) | 0 | 2026-08-20 | 2026-08-21 | 年货采购 |
| 983 | [uckkk/dsh-newborn-care](https://github.com/uckkk/dsh-newborn-care) | 0 | 2026-08-20 | 2026-08-20 | 新生儿护理 |
| 984 | [uckkk/dsh-nitrite-safe](https://github.com/uckkk/dsh-nitrite-safe) | 0 | 2026-08-20 | 2026-08-21 | 亚硝酸盐安全 |
| 985 | [uckkk/dsh-no-main-light](https://github.com/uckkk/dsh-no-main-light) | 0 | 2026-08-20 | 2026-08-21 | 无主灯方案 |
| 986 | [uckkk/dsh-noodle-cook](https://github.com/uckkk/dsh-noodle-cook) | 0 | 2026-08-20 | 2026-08-21 | 煮面时间 |
| 987 | [uckkk/dsh-npm-live](https://github.com/uckkk/dsh-npm-live) | 0 | 2026-08-20 | 2026-08-20 | npm包最新版本 |
| 988 | [uckkk/dsh-nvc](https://github.com/uckkk/dsh-nvc) | 0 | 2026-08-20 | 2026-08-21 | 非暴力沟通 |
| 989 | [uckkk/dsh-objection](https://github.com/uckkk/dsh-objection) | 0 | 2026-08-20 | 2026-08-21 | 异议处理 |
| 990 | [uckkk/dsh-odor-removal](https://github.com/uckkk/dsh-odor-removal) | 0 | 2026-08-20 | 2026-08-21 | 异味去除 |
| 991 | [uckkk/dsh-office-comm](https://github.com/uckkk/dsh-office-comm) | 0 | 2026-08-20 | 2026-08-21 | 职场沟通 |
| 992 | [uckkk/dsh-okr-split](https://github.com/uckkk/dsh-okr-split) | 0 | 2026-08-20 | 2026-08-20 | OKR目标拆解 |
| 993 | [uckkk/dsh-order-plan](https://github.com/uckkk/dsh-order-plan) | 0 | 2026-08-20 | 2026-08-21 | 下菜顺序 |
| 994 | [uckkk/dsh-order-threshold](https://github.com/uckkk/dsh-order-threshold) | 0 | 2026-08-20 | 2026-08-20 | 凑单满减 |
| 995 | [uckkk/dsh-origami](https://github.com/uckkk/dsh-origami) | 0 | 2026-08-20 | 2026-08-21 | 折纸教程 |
| 996 | [uckkk/dsh-oven-temp](https://github.com/uckkk/dsh-oven-temp) | 0 | 2026-08-20 | 2026-08-21 | 烤箱温度 |
| 997 | [uckkk/dsh-pace-calc](https://github.com/uckkk/dsh-pace-calc) | 0 | 2026-08-20 | 2026-08-21 | 配速计算 |
| 998 | [uckkk/dsh-pack-skill](https://github.com/uckkk/dsh-pack-skill) | 0 | 2026-08-20 | 2026-08-21 | 打包技巧 |
| 999 | [uckkk/dsh-packing-list](https://github.com/uckkk/dsh-packing-list) | 0 | 2026-08-20 | 2026-08-20 | 打包清单 |
| 1000 | [uckkk/dsh-paint-care](https://github.com/uckkk/dsh-paint-care) | 0 | 2026-08-20 | 2026-08-21 | 漆面养护 |
| 1001 | [uckkk/dsh-paint-scratch](https://github.com/uckkk/dsh-paint-scratch) | 0 | 2026-08-20 | 2026-08-21 | 划痕处理 |
| 1002 | [uckkk/dsh-paint-tint](https://github.com/uckkk/dsh-paint-tint) | 0 | 2026-08-20 | 2026-08-20 | 乳胶漆调色 |
| 1003 | [uckkk/dsh-pakistan](https://github.com/uckkk/dsh-pakistan) | 0 | 2026-08-21 | 2026-08-21 | 巴基斯坦国家 |
| 1004 | [uckkk/dsh-palau](https://github.com/uckkk/dsh-palau) | 0 | 2026-08-21 | 2026-08-21 | 帕劳国 |
| 1005 | [uckkk/dsh-palladium](https://github.com/uckkk/dsh-palladium) | 0 | 2026-08-21 | 2026-08-21 | 钯元素 |
| 1006 | [uckkk/dsh-panama](https://github.com/uckkk/dsh-panama) | 0 | 2026-08-21 | 2026-08-21 | 巴拿马国家 |
| 1007 | [uckkk/dsh-papua-guinea](https://github.com/uckkk/dsh-papua-guinea) | 0 | 2026-08-21 | 2026-08-21 | 巴布亚新几内亚国家 |
| 1008 | [uckkk/dsh-paraguay](https://github.com/uckkk/dsh-paraguay) | 0 | 2026-08-21 | 2026-08-21 | 巴拉圭国家 |
| 1009 | [uckkk/dsh-paris-city](https://github.com/uckkk/dsh-paris-city) | 0 | 2026-08-21 | 2026-08-21 | 巴黎市 |
| 1010 | [uckkk/dsh-parking-cost](https://github.com/uckkk/dsh-parking-cost) | 0 | 2026-08-21 | 2026-08-21 | 停车费计算 |
| 1011 | [uckkk/dsh-pass-strength](https://github.com/uckkk/dsh-pass-strength) | 0 | 2026-08-20 | 2026-08-21 | 密码强度 |
| 1012 | [uckkk/dsh-payback](https://github.com/uckkk/dsh-payback) | 0 | 2026-08-20 | 2026-08-21 | 回本周期测算 |
| 1013 | [uckkk/dsh-payroll-net](https://github.com/uckkk/dsh-payroll-net) | 0 | 2026-08-21 | 2026-08-21 | 税后工资计算器 |
| 1014 | [uckkk/dsh-percentile](https://github.com/uckkk/dsh-percentile) | 0 | 2026-08-21 | 2026-08-21 | 百分位数 |
| 1015 | [uckkk/dsh-perfume-layer](https://github.com/uckkk/dsh-perfume-layer) | 0 | 2026-08-20 | 2026-08-21 | 香水叠喷搭配 |
| 1016 | [uckkk/dsh-permutation](https://github.com/uckkk/dsh-permutation) | 0 | 2026-08-21 | 2026-08-21 | 排列数 |
| 1017 | [uckkk/dsh-peru](https://github.com/uckkk/dsh-peru) | 0 | 2026-08-21 | 2026-08-21 | 秘鲁国家 |
| 1018 | [uckkk/dsh-pest-plan](https://github.com/uckkk/dsh-pest-plan) | 0 | 2026-08-20 | 2026-08-21 | 病虫害诊断 |
| 1019 | [uckkk/dsh-pet-alone](https://github.com/uckkk/dsh-pet-alone) | 0 | 2026-08-20 | 2026-08-21 | 留守安排 |
| 1020 | [uckkk/dsh-pet-bath](https://github.com/uckkk/dsh-pet-bath) | 0 | 2026-08-20 | 2026-08-20 | 宠物洗澡频率 |
| 1021 | [uckkk/dsh-pet-bath2](https://github.com/uckkk/dsh-pet-bath2) | 0 | 2026-08-20 | 2026-08-21 | 宠物洗澡 |
| 1022 | [uckkk/dsh-pet-brush](https://github.com/uckkk/dsh-pet-brush) | 0 | 2026-08-20 | 2026-08-21 | 梳毛护理 |
| 1023 | [uckkk/dsh-pet-diet](https://github.com/uckkk/dsh-pet-diet) | 0 | 2026-08-20 | 2026-08-21 | 减肥计划 |
| 1024 | [uckkk/dsh-pet-disease](https://github.com/uckkk/dsh-pet-disease) | 0 | 2026-08-20 | 2026-08-21 | 宠物常见病 |
| 1025 | [uckkk/dsh-pet-first-aid](https://github.com/uckkk/dsh-pet-first-aid) | 0 | 2026-08-20 | 2026-08-21 | 宠物急救药品 |
| 1026 | [uckkk/dsh-pet-food-amt](https://github.com/uckkk/dsh-pet-food-amt) | 0 | 2026-08-20 | 2026-08-21 | 每日食量 |
| 1027 | [uckkk/dsh-pet-heat](https://github.com/uckkk/dsh-pet-heat) | 0 | 2026-08-20 | 2026-08-21 | 宠物中暑急救 |
| 1028 | [uckkk/dsh-pet-nutri](https://github.com/uckkk/dsh-pet-nutri) | 0 | 2026-08-20 | 2026-08-21 | 营养补充 |
| 1029 | [uckkk/dsh-pet-pack](https://github.com/uckkk/dsh-pet-pack) | 0 | 2026-08-20 | 2026-08-21 | 宠物旅行清单 |
| 1030 | [uckkk/dsh-pet-pill](https://github.com/uckkk/dsh-pet-pill) | 0 | 2026-08-20 | 2026-08-21 | 宠物喂药 |
| 1031 | [uckkk/dsh-pet-sitting](https://github.com/uckkk/dsh-pet-sitting) | 0 | 2026-08-20 | 2026-08-21 | 宠物寄养 |
| 1032 | [uckkk/dsh-pet-teeth](https://github.com/uckkk/dsh-pet-teeth) | 0 | 2026-08-20 | 2026-08-21 | 口腔健康 |
| 1033 | [uckkk/dsh-pet-transport](https://github.com/uckkk/dsh-pet-transport) | 0 | 2026-08-20 | 2026-08-21 | 宠物托运 |
| 1034 | [uckkk/dsh-pet-travel](https://github.com/uckkk/dsh-pet-travel) | 0 | 2026-08-20 | 2026-08-20 | 带宠出行 |
| 1035 | [uckkk/dsh-pet-trip](https://github.com/uckkk/dsh-pet-trip) | 0 | 2026-08-20 | 2026-08-21 | 宠物出行准备 |
| 1036 | [uckkk/dsh-pet-wound](https://github.com/uckkk/dsh-pet-wound) | 0 | 2026-08-20 | 2026-08-21 | 宠物伤口处理 |
| 1037 | [uckkk/dsh-philippines](https://github.com/uckkk/dsh-philippines) | 0 | 2026-08-21 | 2026-08-21 | 菲律宾国家 |
| 1038 | [uckkk/dsh-philosophy-terms](https://github.com/uckkk/dsh-philosophy-terms) | 0 | 2026-08-21 | 2026-08-21 | 哲学术语 |
| 1039 | [uckkk/dsh-phone-cleanup](https://github.com/uckkk/dsh-phone-cleanup) | 0 | 2026-08-20 | 2026-08-21 | 手机清理 |
| 1040 | [uckkk/dsh-phone-et](https://github.com/uckkk/dsh-phone-et) | 0 | 2026-08-20 | 2026-08-21 | 电话礼仪 |
| 1041 | [uckkk/dsh-phone-photo](https://github.com/uckkk/dsh-phone-photo) | 0 | 2026-08-20 | 2026-08-21 | 手机摄影 |
| 1042 | [uckkk/dsh-phosphorus](https://github.com/uckkk/dsh-phosphorus) | 0 | 2026-08-21 | 2026-08-21 | 磷元素 |
| 1043 | [uckkk/dsh-physics-formulas](https://github.com/uckkk/dsh-physics-formulas) | 0 | 2026-08-21 | 2026-08-21 | 物理公式 |
| 1044 | [uckkk/dsh-pickle-intro](https://github.com/uckkk/dsh-pickle-intro) | 0 | 2026-08-20 | 2026-08-21 | 腌菜入门 |
| 1045 | [uckkk/dsh-pickle-recipe](https://github.com/uckkk/dsh-pickle-recipe) | 0 | 2026-08-20 | 2026-08-21 | 泡菜配方 |
| 1046 | [uckkk/dsh-pickle-store](https://github.com/uckkk/dsh-pickle-store) | 0 | 2026-08-20 | 2026-08-21 | 腌菜保存 |
| 1047 | [uckkk/dsh-pickle-time](https://github.com/uckkk/dsh-pickle-time) | 0 | 2026-08-20 | 2026-08-21 | 腌制时间 |
| 1048 | [uckkk/dsh-picky-eat](https://github.com/uckkk/dsh-picky-eat) | 0 | 2026-08-20 | 2026-08-21 | 挑食纠正 |
| 1049 | [uckkk/dsh-pixel-print](https://github.com/uckkk/dsh-pixel-print) | 0 | 2026-08-20 | 2026-08-20 | 像素打印尺寸 |
| 1050 | [uckkk/dsh-plateau](https://github.com/uckkk/dsh-plateau) | 0 | 2026-08-20 | 2026-08-21 | 减脂平台期 |
| 1051 | [uckkk/dsh-platform-fee](https://github.com/uckkk/dsh-platform-fee) | 0 | 2026-08-20 | 2026-08-21 | 外卖平台抽成 |
| 1052 | [uckkk/dsh-platinum](https://github.com/uckkk/dsh-platinum) | 0 | 2026-08-21 | 2026-08-21 | 铂元素 |
| 1053 | [uckkk/dsh-play-revenue](https://github.com/uckkk/dsh-play-revenue) | 0 | 2026-08-20 | 2026-08-20 | 播放收益估算 |
| 1054 | [uckkk/dsh-plug-type](https://github.com/uckkk/dsh-plug-type) | 0 | 2026-08-20 | 2026-08-20 | 电源插头查询 |
| 1055 | [uckkk/dsh-pluto](https://github.com/uckkk/dsh-pluto) | 0 | 2026-08-21 | 2026-08-21 | 冥王星 |
| 1056 | [uckkk/dsh-plutonium](https://github.com/uckkk/dsh-plutonium) | 0 | 2026-08-21 | 2026-08-21 | 钚元素 |
| 1057 | [uckkk/dsh-poison-aid](https://github.com/uckkk/dsh-poison-aid) | 0 | 2026-08-20 | 2026-08-21 | 中毒急救 |
| 1058 | [uckkk/dsh-poison-check](https://github.com/uckkk/dsh-poison-check) | 0 | 2026-08-20 | 2026-08-21 | 宠物中毒识别 |
| 1059 | [uckkk/dsh-poisson-pmf](https://github.com/uckkk/dsh-poisson-pmf) | 0 | 2026-08-21 | 2026-08-21 | 泊松分布 |
| 1060 | [uckkk/dsh-poland](https://github.com/uckkk/dsh-poland) | 0 | 2026-08-21 | 2026-08-21 | 波兰国家 |
| 1061 | [uckkk/dsh-polish-pick](https://github.com/uckkk/dsh-polish-pick) | 0 | 2026-08-20 | 2026-08-21 | 甲油选择 |
| 1062 | [uckkk/dsh-polonium](https://github.com/uckkk/dsh-polonium) | 0 | 2026-08-21 | 2026-08-21 | 钋元素 |
| 1063 | [uckkk/dsh-pomodoro](https://github.com/uckkk/dsh-pomodoro) | 0 | 2026-08-20 | 2026-08-21 | 番茄钟计划 |
| 1064 | [uckkk/dsh-portrait](https://github.com/uckkk/dsh-portrait) | 0 | 2026-08-20 | 2026-08-21 | 人像拍摄 |
| 1065 | [uckkk/dsh-portugal](https://github.com/uckkk/dsh-portugal) | 0 | 2026-08-21 | 2026-08-21 | 葡萄牙国家 |
| 1066 | [uckkk/dsh-pose-pick](https://github.com/uckkk/dsh-pose-pick) | 0 | 2026-08-20 | 2026-08-21 | 瑜伽体式选择 |
| 1067 | [uckkk/dsh-post-frequency](https://github.com/uckkk/dsh-post-frequency) | 0 | 2026-08-20 | 2026-08-20 | 更新频率建议 |
| 1068 | [uckkk/dsh-posture](https://github.com/uckkk/dsh-posture) | 0 | 2026-08-20 | 2026-08-21 | 执笔坐姿 |
| 1069 | [uckkk/dsh-posture-check](https://github.com/uckkk/dsh-posture-check) | 0 | 2026-08-20 | 2026-08-21 | 体态自评 |
| 1070 | [uckkk/dsh-pot-base](https://github.com/uckkk/dsh-pot-base) | 0 | 2026-08-20 | 2026-08-21 | 火锅锅底选择 |
| 1071 | [uckkk/dsh-pot-pick](https://github.com/uckkk/dsh-pot-pick) | 0 | 2026-08-20 | 2026-08-21 | 容器选择 |
| 1072 | [uckkk/dsh-potassium](https://github.com/uckkk/dsh-potassium) | 0 | 2026-08-21 | 2026-08-21 | 钾元素 |
| 1073 | [uckkk/dsh-pour-over](https://github.com/uckkk/dsh-pour-over) | 0 | 2026-08-20 | 2026-08-21 | 手冲参数 |
| 1074 | [uckkk/dsh-power-outage](https://github.com/uckkk/dsh-power-outage) | 0 | 2026-08-20 | 2026-08-21 | 停电应对 |
| 1075 | [uckkk/dsh-power-saving](https://github.com/uckkk/dsh-power-saving) | 0 | 2026-08-20 | 2026-08-21 | 省电技巧 |
| 1076 | [uckkk/dsh-ppt-pages](https://github.com/uckkk/dsh-ppt-pages) | 0 | 2026-08-20 | 2026-08-20 | PPT页数建议 |
| 1077 | [uckkk/dsh-practice-plan](https://github.com/uckkk/dsh-practice-plan) | 0 | 2026-08-20 | 2026-08-21 | 练琴计划 |
| 1078 | [uckkk/dsh-praise](https://github.com/uckkk/dsh-praise) | 0 | 2026-08-20 | 2026-08-21 | 有效赞美 |
| 1079 | [uckkk/dsh-premium-budget](https://github.com/uckkk/dsh-premium-budget) | 0 | 2026-08-20 | 2026-08-21 | 保费预算 |
| 1080 | [uckkk/dsh-pressure-cooker](https://github.com/uckkk/dsh-pressure-cooker) | 0 | 2026-08-20 | 2026-08-21 | 压力锅 |
| 1081 | [uckkk/dsh-price-calc](https://github.com/uckkk/dsh-price-calc) | 0 | 2026-08-20 | 2026-08-21 | 定价计算 |
| 1082 | [uckkk/dsh-price-compare](https://github.com/uckkk/dsh-price-compare) | 0 | 2026-08-20 | 2026-08-21 | 购物比价 |
| 1083 | [uckkk/dsh-privacy-check](https://github.com/uckkk/dsh-privacy-check) | 0 | 2026-08-20 | 2026-08-21 | 隐私自查 |
| 1084 | [uckkk/dsh-problem-skin](https://github.com/uckkk/dsh-problem-skin) | 0 | 2026-08-20 | 2026-08-21 | 问题肌护理 |
| 1085 | [uckkk/dsh-project-schedule](https://github.com/uckkk/dsh-project-schedule) | 0 | 2026-08-20 | 2026-08-20 | 项目排期估算 |
| 1086 | [uckkk/dsh-property-tax](https://github.com/uckkk/dsh-property-tax) | 0 | 2026-08-20 | 2026-08-21 | 物业费估算 |
| 1087 | [uckkk/dsh-prune-guide](https://github.com/uckkk/dsh-prune-guide) | 0 | 2026-08-20 | 2026-08-21 | 修剪指南 |
| 1088 | [uckkk/dsh-purifier](https://github.com/uckkk/dsh-purifier) | 0 | 2026-08-20 | 2026-08-21 | 净水器选购 |
| 1089 | [uckkk/dsh-pypi-live](https://github.com/uckkk/dsh-pypi-live) | 0 | 2026-08-20 | 2026-08-20 | PyPI包最新版本 |
| 1090 | [uckkk/dsh-qps-calc](https://github.com/uckkk/dsh-qps-calc) | 0 | 2026-08-20 | 2026-08-20 | 峰值QPS估算 |
| 1091 | [uckkk/dsh-question-asking](https://github.com/uckkk/dsh-question-asking) | 0 | 2026-08-20 | 2026-08-21 | 职场提问 |
| 1092 | [uckkk/dsh-quick-recipes](https://github.com/uckkk/dsh-quick-recipes) | 0 | 2026-08-20 | 2026-08-21 | 家常菜谱 |
| 1093 | [uckkk/dsh-raise-request](https://github.com/uckkk/dsh-raise-request) | 0 | 2026-08-20 | 2026-08-21 | 涨薪谈判 |
| 1094 | [uckkk/dsh-reading-light](https://github.com/uckkk/dsh-reading-light) | 0 | 2026-08-20 | 2026-08-21 | 阅读灯光 |
| 1095 | [uckkk/dsh-red-packet](https://github.com/uckkk/dsh-red-packet) | 0 | 2026-08-20 | 2026-08-21 | 红包礼仪 |
| 1096 | [uckkk/dsh-refusal](https://github.com/uckkk/dsh-refusal) | 0 | 2026-08-20 | 2026-08-21 | 得体拒绝 |
| 1097 | [uckkk/dsh-render-time](https://github.com/uckkk/dsh-render-time) | 0 | 2026-08-20 | 2026-08-21 | 渲染时间估算 |
| 1098 | [uckkk/dsh-rent-vs-buy](https://github.com/uckkk/dsh-rent-vs-buy) | 0 | 2026-08-20 | 2026-08-20 | 租还是买 |
| 1099 | [uckkk/dsh-rental-insurance](https://github.com/uckkk/dsh-rental-insurance) | 0 | 2026-08-20 | 2026-08-20 | 租车保险建议 |
| 1100 | [uckkk/dsh-rental-yield](https://github.com/uckkk/dsh-rental-yield) | 0 | 2026-08-20 | 2026-08-21 | 租金回报率 |
| 1101 | [uckkk/dsh-repot-check](https://github.com/uckkk/dsh-repot-check) | 0 | 2026-08-20 | 2026-08-21 | 换盆判断 |
| 1102 | [uckkk/dsh-repurchase](https://github.com/uckkk/dsh-repurchase) | 0 | 2026-08-20 | 2026-08-20 | 复购率计算 |
| 1103 | [uckkk/dsh-retro](https://github.com/uckkk/dsh-retro) | 0 | 2026-08-20 | 2026-08-21 | 复盘方法 |
| 1104 | [uckkk/dsh-return-gift](https://github.com/uckkk/dsh-return-gift) | 0 | 2026-08-20 | 2026-08-21 | 回礼预算 |
| 1105 | [uckkk/dsh-rice-cooker](https://github.com/uckkk/dsh-rice-cooker) | 0 | 2026-08-20 | 2026-08-21 | 电饭煲 |
| 1106 | [uckkk/dsh-ride-train](https://github.com/uckkk/dsh-ride-train) | 0 | 2026-08-20 | 2026-08-21 | 骑行训练 |
| 1107 | [uckkk/dsh-rig-pick](https://github.com/uckkk/dsh-rig-pick) | 0 | 2026-08-20 | 2026-08-21 | 钓组搭配 |
| 1108 | [uckkk/dsh-road-trip-cost](https://github.com/uckkk/dsh-road-trip-cost) | 0 | 2026-08-20 | 2026-08-20 | 自驾费用估算 |
| 1109 | [uckkk/dsh-robot-setup](https://github.com/uckkk/dsh-robot-setup) | 0 | 2026-08-20 | 2026-08-21 | 扫地机器人 |
| 1110 | [uckkk/dsh-room-light](https://github.com/uckkk/dsh-room-light) | 0 | 2026-08-20 | 2026-08-21 | 房间色温 |
| 1111 | [uckkk/dsh-route-plan](https://github.com/uckkk/dsh-route-plan) | 0 | 2026-08-20 | 2026-08-21 | 路线规划 |
| 1112 | [uckkk/dsh-routine](https://github.com/uckkk/dsh-routine) | 0 | 2026-08-20 | 2026-08-21 | 护肤步骤流程 |
| 1113 | [uckkk/dsh-rug-pick](https://github.com/uckkk/dsh-rug-pick) | 0 | 2026-08-20 | 2026-08-21 | 地毯选择 |
| 1114 | [uckkk/dsh-run-prevent](https://github.com/uckkk/dsh-run-prevent) | 0 | 2026-08-20 | 2026-08-21 | 跑步损伤预防 |
| 1115 | [uckkk/dsh-run-recover](https://github.com/uckkk/dsh-run-recover) | 0 | 2026-08-20 | 2026-08-21 | 跑步恢复 |
| 1116 | [uckkk/dsh-salary-per-hour](https://github.com/uckkk/dsh-salary-per-hour) | 0 | 2026-08-20 | 2026-08-20 | 时薪计算 |
| 1117 | [uckkk/dsh-saving-goal](https://github.com/uckkk/dsh-saving-goal) | 0 | 2026-08-20 | 2026-08-21 | 储蓄目标 |
| 1118 | [uckkk/dsh-scalp-issue](https://github.com/uckkk/dsh-scalp-issue) | 0 | 2026-08-20 | 2026-08-21 | 头皮问题 |
| 1119 | [uckkk/dsh-scalp-massage](https://github.com/uckkk/dsh-scalp-massage) | 0 | 2026-08-20 | 2026-08-21 | 头皮按摩 |
| 1120 | [uckkk/dsh-scalp-wash](https://github.com/uckkk/dsh-scalp-wash) | 0 | 2026-08-20 | 2026-08-21 | 头皮洗护 |
| 1121 | [uckkk/dsh-scent-pick](https://github.com/uckkk/dsh-scent-pick) | 0 | 2026-08-20 | 2026-08-21 | 香调场景选择 |
| 1122 | [uckkk/dsh-schedule-day](https://github.com/uckkk/dsh-schedule-day) | 0 | 2026-08-20 | 2026-08-21 | 日程排期 |
| 1123 | [uckkk/dsh-score-rank](https://github.com/uckkk/dsh-score-rank) | 0 | 2026-08-20 | 2026-08-20 | 分数百分位 |
| 1124 | [uckkk/dsh-screen-break](https://github.com/uckkk/dsh-screen-break) | 0 | 2026-08-20 | 2026-08-20 | 用眼休息提醒 |
| 1125 | [uckkk/dsh-screen-time](https://github.com/uckkk/dsh-screen-time) | 0 | 2026-08-20 | 2026-08-21 | 屏幕时间 |
| 1126 | [uckkk/dsh-script-words](https://github.com/uckkk/dsh-script-words) | 0 | 2026-08-20 | 2026-08-20 | 口播稿字数 |
| 1127 | [uckkk/dsh-sd-capacity](https://github.com/uckkk/dsh-sd-capacity) | 0 | 2026-08-20 | 2026-08-20 | 录像存储容量 |
| 1128 | [uckkk/dsh-season-care](https://github.com/uckkk/dsh-season-care) | 0 | 2026-08-20 | 2026-08-21 | 季节护肤 |
| 1129 | [uckkk/dsh-season-health](https://github.com/uckkk/dsh-season-health) | 0 | 2026-08-20 | 2026-08-21 | 四季养生 |
| 1130 | [uckkk/dsh-seasoning](https://github.com/uckkk/dsh-seasoning) | 0 | 2026-08-20 | 2026-08-21 | 调味技巧 |
| 1131 | [uckkk/dsh-senior-pet](https://github.com/uckkk/dsh-senior-pet) | 0 | 2026-08-20 | 2026-08-21 | 老年宠物 |
| 1132 | [uckkk/dsh-serving-order](https://github.com/uckkk/dsh-serving-order) | 0 | 2026-08-20 | 2026-08-21 | 上菜顺序 |
| 1133 | [uckkk/dsh-shoe-rack](https://github.com/uckkk/dsh-shoe-rack) | 0 | 2026-08-20 | 2026-08-21 | 鞋柜规划 |
| 1134 | [uckkk/dsh-shoe-size](https://github.com/uckkk/dsh-shoe-size) | 0 | 2026-08-20 | 2026-08-21 | 童鞋尺码 |
| 1135 | [uckkk/dsh-shower-size](https://github.com/uckkk/dsh-shower-size) | 0 | 2026-08-20 | 2026-08-20 | 淋浴房尺寸 |
| 1136 | [uckkk/dsh-sla-calc](https://github.com/uckkk/dsh-sla-calc) | 0 | 2026-08-20 | 2026-08-20 | SLA可用性计算 |
| 1137 | [uckkk/dsh-sleep-debt](https://github.com/uckkk/dsh-sleep-debt) | 0 | 2026-08-20 | 2026-08-20 | 睡眠债务计算 |
| 1138 | [uckkk/dsh-sleep-hygiene](https://github.com/uckkk/dsh-sleep-hygiene) | 0 | 2026-08-20 | 2026-08-21 | 睡眠卫生 |
| 1139 | [uckkk/dsh-sleep-score](https://github.com/uckkk/dsh-sleep-score) | 0 | 2026-08-20 | 2026-08-21 | 睡眠评估 |
| 1140 | [uckkk/dsh-sleeping-bag](https://github.com/uckkk/dsh-sleeping-bag) | 0 | 2026-08-20 | 2026-08-21 | 睡袋温标 |
| 1141 | [uckkk/dsh-small-fix](https://github.com/uckkk/dsh-small-fix) | 0 | 2026-08-20 | 2026-08-21 | 水电小修 |
| 1142 | [uckkk/dsh-social-insurance](https://github.com/uckkk/dsh-social-insurance) | 0 | 2026-08-20 | 2026-08-21 | 五险一金计算 |
| 1143 | [uckkk/dsh-soft-color](https://github.com/uckkk/dsh-soft-color) | 0 | 2026-08-20 | 2026-08-21 | 色彩搭配 |
| 1144 | [uckkk/dsh-soft-style](https://github.com/uckkk/dsh-soft-style) | 0 | 2026-08-20 | 2026-08-21 | 软装风格 |
| 1145 | [uckkk/dsh-software-pick](https://github.com/uckkk/dsh-software-pick) | 0 | 2026-08-20 | 2026-08-21 | 软件推荐 |
| 1146 | [uckkk/dsh-sow-time](https://github.com/uckkk/dsh-sow-time) | 0 | 2026-08-20 | 2026-08-21 | 播种时间 |
| 1147 | [uckkk/dsh-space-plan2](https://github.com/uckkk/dsh-space-plan2) | 0 | 2026-08-20 | 2026-08-21 | 空间规划 |
| 1148 | [uckkk/dsh-spirit-guide](https://github.com/uckkk/dsh-spirit-guide) | 0 | 2026-08-20 | 2026-08-21 | 烈酒种类 |
| 1149 | [uckkk/dsh-spirit-store](https://github.com/uckkk/dsh-spirit-store) | 0 | 2026-08-20 | 2026-08-21 | 烈酒存储 |
| 1150 | [uckkk/dsh-split-bill](https://github.com/uckkk/dsh-split-bill) | 0 | 2026-08-20 | 2026-08-20 | AA分摊 |
| 1151 | [uckkk/dsh-split-plan](https://github.com/uckkk/dsh-split-plan) | 0 | 2026-08-20 | 2026-08-21 | 分化训练 |
| 1152 | [uckkk/dsh-stage-presence](https://github.com/uckkk/dsh-stage-presence) | 0 | 2026-08-20 | 2026-08-21 | 舞台表现力 |
| 1153 | [uckkk/dsh-stain-mix](https://github.com/uckkk/dsh-stain-mix) | 0 | 2026-08-20 | 2026-08-21 | 自制清洁配方 |
| 1154 | [uckkk/dsh-stain-removal](https://github.com/uckkk/dsh-stain-removal) | 0 | 2026-08-20 | 2026-08-20 | 去渍方法 |
| 1155 | [uckkk/dsh-stall-site](https://github.com/uckkk/dsh-stall-site) | 0 | 2026-08-20 | 2026-08-21 | 摆摊选址 |
| 1156 | [uckkk/dsh-steam-mop](https://github.com/uckkk/dsh-steam-mop) | 0 | 2026-08-20 | 2026-08-21 | 蒸汽拖把 |
| 1157 | [uckkk/dsh-stock-level](https://github.com/uckkk/dsh-stock-level) | 0 | 2026-08-20 | 2026-08-20 | 再订货点 |
| 1158 | [uckkk/dsh-storage-plan](https://github.com/uckkk/dsh-storage-plan) | 0 | 2026-08-20 | 2026-08-21 | 房间收纳方案 |
| 1159 | [uckkk/dsh-stress-meter](https://github.com/uckkk/dsh-stress-meter) | 0 | 2026-08-20 | 2026-08-21 | 压力管理 |
| 1160 | [uckkk/dsh-stretch-plan](https://github.com/uckkk/dsh-stretch-plan) | 0 | 2026-08-20 | 2026-08-21 | 运动拉伸计划 |
| 1161 | [uckkk/dsh-sub-audit](https://github.com/uckkk/dsh-sub-audit) | 0 | 2026-08-20 | 2026-08-21 | 订阅审计 |
| 1162 | [uckkk/dsh-table-setup](https://github.com/uckkk/dsh-table-setup) | 0 | 2026-08-20 | 2026-08-21 | 桌面布置 |
| 1163 | [uckkk/dsh-takeout-cost](https://github.com/uckkk/dsh-takeout-cost) | 0 | 2026-08-20 | 2026-08-21 | 外卖店日流水 |
| 1164 | [uckkk/dsh-takeout-tip](https://github.com/uckkk/dsh-takeout-tip) | 0 | 2026-08-20 | 2026-08-20 | 外卖费用 |
| 1165 | [uckkk/dsh-tank-setup](https://github.com/uckkk/dsh-tank-setup) | 0 | 2026-08-20 | 2026-08-21 | 开缸配置 |
| 1166 | [uckkk/dsh-task-estimate](https://github.com/uckkk/dsh-task-estimate) | 0 | 2026-08-20 | 2026-08-21 | 任务时间估算 |
| 1167 | [uckkk/dsh-tax-refund](https://github.com/uckkk/dsh-tax-refund) | 0 | 2026-08-20 | 2026-08-20 | 退税估算 |
| 1168 | [uckkk/dsh-tea-pick](https://github.com/uckkk/dsh-tea-pick) | 0 | 2026-08-20 | 2026-08-21 | 应季选茶 |
| 1169 | [uckkk/dsh-tea-set](https://github.com/uckkk/dsh-tea-set) | 0 | 2026-08-20 | 2026-08-21 | 茶具搭配 |
| 1170 | [uckkk/dsh-tea-store](https://github.com/uckkk/dsh-tea-store) | 0 | 2026-08-20 | 2026-08-21 | 存茶指南 |
| 1171 | [uckkk/dsh-tea-taste](https://github.com/uckkk/dsh-tea-taste) | 0 | 2026-08-20 | 2026-08-21 | 品茶入门 |
| 1172 | [uckkk/dsh-teacher-cert](https://github.com/uckkk/dsh-teacher-cert) | 0 | 2026-08-20 | 2026-08-20 | 教师资格证科目 |
| 1173 | [uckkk/dsh-tent-choice](https://github.com/uckkk/dsh-tent-choice) | 0 | 2026-08-20 | 2026-08-21 | 帐篷选型 |
| 1174 | [uckkk/dsh-tent-pick](https://github.com/uckkk/dsh-tent-pick) | 0 | 2026-08-20 | 2026-08-21 | 帐篷选择 |
| 1175 | [uckkk/dsh-tip-calc](https://github.com/uckkk/dsh-tip-calc) | 0 | 2026-08-20 | 2026-08-20 | 小费计算 |
| 1176 | [uckkk/dsh-tire-wear](https://github.com/uckkk/dsh-tire-wear) | 0 | 2026-08-20 | 2026-08-20 | 轮胎磨损判断 |
| 1177 | [uckkk/dsh-title-length](https://github.com/uckkk/dsh-title-length) | 0 | 2026-08-20 | 2026-08-20 | 标题字数建议 |
| 1178 | [uckkk/dsh-toddler-height](https://github.com/uckkk/dsh-toddler-height) | 0 | 2026-08-20 | 2026-08-20 | 幼儿身高标准 |
| 1179 | [uckkk/dsh-toilet-train](https://github.com/uckkk/dsh-toilet-train) | 0 | 2026-08-20 | 2026-08-21 | 如厕训练 |
| 1180 | [uckkk/dsh-tool-kit](https://github.com/uckkk/dsh-tool-kit) | 0 | 2026-08-20 | 2026-08-21 | 家庭工具清单 |
| 1181 | [uckkk/dsh-tough-stain](https://github.com/uckkk/dsh-tough-stain) | 0 | 2026-08-20 | 2026-08-21 | 顽固污渍 |
| 1182 | [uckkk/dsh-toy-age](https://github.com/uckkk/dsh-toy-age) | 0 | 2026-08-20 | 2026-08-21 | 玩具适龄推荐 |
| 1183 | [uckkk/dsh-trade-in](https://github.com/uckkk/dsh-trade-in) | 0 | 2026-08-20 | 2026-08-21 | 换房置换 |
| 1184 | [uckkk/dsh-travel-docs](https://github.com/uckkk/dsh-travel-docs) | 0 | 2026-08-20 | 2026-08-20 | 旅行证件 |
| 1185 | [uckkk/dsh-travel-insurance](https://github.com/uckkk/dsh-travel-insurance) | 0 | 2026-08-20 | 2026-08-20 | 旅行险价格估算 |
| 1186 | [uckkk/dsh-travel-med](https://github.com/uckkk/dsh-travel-med) | 0 | 2026-08-20 | 2026-08-20 | 旅行药品清单 |
| 1187 | [uckkk/dsh-trip-insure](https://github.com/uckkk/dsh-trip-insure) | 0 | 2026-08-20 | 2026-08-21 | 旅行保险 |
| 1188 | [uckkk/dsh-trip-itinerary](https://github.com/uckkk/dsh-trip-itinerary) | 0 | 2026-08-20 | 2026-08-20 | 行程规划 |
| 1189 | [uckkk/dsh-tune-guide](https://github.com/uckkk/dsh-tune-guide) | 0 | 2026-08-20 | 2026-08-21 | 乐器调音 |
| 1190 | [uckkk/dsh-turtle-care](https://github.com/uckkk/dsh-turtle-care) | 0 | 2026-08-20 | 2026-08-21 | 乌龟饲养 |
| 1191 | [uckkk/dsh-turtle-health](https://github.com/uckkk/dsh-turtle-health) | 0 | 2026-08-20 | 2026-08-21 | 龟病预防 |
| 1192 | [uckkk/dsh-upcycle](https://github.com/uckkk/dsh-upcycle) | 0 | 2026-08-20 | 2026-08-21 | 旧物改造 |
| 1193 | [uckkk/dsh-uric-acid](https://github.com/uckkk/dsh-uric-acid) | 0 | 2026-08-20 | 2026-08-21 | 尿酸解读 |
| 1194 | [uckkk/dsh-uv-index](https://github.com/uckkk/dsh-uv-index) | 0 | 2026-08-20 | 2026-08-21 | 紫外线防护 |
| 1195 | [uckkk/dsh-vaccine](https://github.com/uckkk/dsh-vaccine) | 0 | 2026-08-20 | 2026-08-21 | 疫苗管理 |
| 1196 | [uckkk/dsh-vaccine-boost](https://github.com/uckkk/dsh-vaccine-boost) | 0 | 2026-08-20 | 2026-08-20 | 疫苗加强 |
| 1197 | [uckkk/dsh-vacuum-buy](https://github.com/uckkk/dsh-vacuum-buy) | 0 | 2026-08-20 | 2026-08-21 | 吸尘器选购 |
| 1198 | [uckkk/dsh-vase-ratio](https://github.com/uckkk/dsh-vase-ratio) | 0 | 2026-08-20 | 2026-08-21 | 瓶花比例 |
| 1199 | [uckkk/dsh-veg-pest](https://github.com/uckkk/dsh-veg-pest) | 0 | 2026-08-20 | 2026-08-21 | 病虫害防治 |
| 1200 | [uckkk/dsh-veggie-pick](https://github.com/uckkk/dsh-veggie-pick) | 0 | 2026-08-20 | 2026-08-21 | 阳台菜品种 |
| 1201 | [uckkk/dsh-ventilate](https://github.com/uckkk/dsh-ventilate) | 0 | 2026-08-20 | 2026-08-21 | 通风换气 |
| 1202 | [uckkk/dsh-vertical-org](https://github.com/uckkk/dsh-vertical-org) | 0 | 2026-08-20 | 2026-08-21 | 垂直收纳 |
| 1203 | [uckkk/dsh-vet-visit](https://github.com/uckkk/dsh-vet-visit) | 0 | 2026-08-20 | 2026-08-21 | 体检频率 |
| 1204 | [uckkk/dsh-video-length](https://github.com/uckkk/dsh-video-length) | 0 | 2026-08-20 | 2026-08-20 | 视频时长建议 |
| 1205 | [uckkk/dsh-video-size](https://github.com/uckkk/dsh-video-size) | 0 | 2026-08-20 | 2026-08-21 | 视频文件大小 |
| 1206 | [uckkk/dsh-vision-check](https://github.com/uckkk/dsh-vision-check) | 0 | 2026-08-20 | 2026-08-20 | 视力屈光度 |
| 1207 | [uckkk/dsh-voltage-drop](https://github.com/uckkk/dsh-voltage-drop) | 0 | 2026-08-20 | 2026-08-20 | 电压降校核 |
| 1208 | [uckkk/dsh-vomit-judge](https://github.com/uckkk/dsh-vomit-judge) | 0 | 2026-08-20 | 2026-08-21 | 误食催吐判断 |
| 1209 | [uckkk/dsh-wall-art](https://github.com/uckkk/dsh-wall-art) | 0 | 2026-08-20 | 2026-08-21 | 挂画摆放 |
| 1210 | [uckkk/dsh-wall-fix](https://github.com/uckkk/dsh-wall-fix) | 0 | 2026-08-20 | 2026-08-21 | 墙面修补 |
| 1211 | [uckkk/dsh-wall-mold](https://github.com/uckkk/dsh-wall-mold) | 0 | 2026-08-20 | 2026-08-21 | 墙面除霉 |
| 1212 | [uckkk/dsh-wardrobe-min](https://github.com/uckkk/dsh-wardrobe-min) | 0 | 2026-08-20 | 2026-08-21 | 衣橱精简 |
| 1213 | [uckkk/dsh-wash-machine](https://github.com/uckkk/dsh-wash-machine) | 0 | 2026-08-20 | 2026-08-21 | 洗地机 |
| 1214 | [uckkk/dsh-washer-buy](https://github.com/uckkk/dsh-washer-buy) | 0 | 2026-08-20 | 2026-08-21 | 洗衣机选购 |
| 1215 | [uckkk/dsh-watch-buy](https://github.com/uckkk/dsh-watch-buy) | 0 | 2026-08-20 | 2026-08-21 | 手表选购 |
| 1216 | [uckkk/dsh-watch-maintain](https://github.com/uckkk/dsh-watch-maintain) | 0 | 2026-08-20 | 2026-08-21 | 手表保养 |
| 1217 | [uckkk/dsh-water-care](https://github.com/uckkk/dsh-water-care) | 0 | 2026-08-20 | 2026-08-21 | 水质维护 |
| 1218 | [uckkk/dsh-water-electrolyte](https://github.com/uckkk/dsh-water-electrolyte) | 0 | 2026-08-20 | 2026-08-20 | 出汗电解质 |
| 1219 | [uckkk/dsh-water-heater](https://github.com/uckkk/dsh-water-heater) | 0 | 2026-08-20 | 2026-08-21 | 热水器选购 |
| 1220 | [uckkk/dsh-water-outage](https://github.com/uckkk/dsh-water-outage) | 0 | 2026-08-20 | 2026-08-21 | 停水应对 |
| 1221 | [uckkk/dsh-water-resist](https://github.com/uckkk/dsh-water-resist) | 0 | 2026-08-20 | 2026-08-21 | 防水等级判断 |
| 1222 | [uckkk/dsh-wechat-et](https://github.com/uckkk/dsh-wechat-et) | 0 | 2026-08-20 | 2026-08-21 | 微信沟通礼仪 |
| 1223 | [uckkk/dsh-wedding-budget](https://github.com/uckkk/dsh-wedding-budget) | 0 | 2026-08-20 | 2026-08-21 | 婚礼预算分配 |
| 1224 | [uckkk/dsh-wedding-timeline](https://github.com/uckkk/dsh-wedding-timeline) | 0 | 2026-08-20 | 2026-08-21 | 婚礼时间线 |
| 1225 | [uckkk/dsh-weekly-plan](https://github.com/uckkk/dsh-weekly-plan) | 0 | 2026-08-20 | 2026-08-21 | 跑量规划 |
| 1226 | [uckkk/dsh-weekly-report](https://github.com/uckkk/dsh-weekly-report) | 0 | 2026-08-20 | 2026-08-21 | 周报写法 |
| 1227 | [uckkk/dsh-weight-pick](https://github.com/uckkk/dsh-weight-pick) | 0 | 2026-08-20 | 2026-08-21 | 重量选择 |
| 1228 | [uckkk/dsh-whiskey-cocktail](https://github.com/uckkk/dsh-whiskey-cocktail) | 0 | 2026-08-20 | 2026-08-21 | 威士忌调酒 |
| 1229 | [uckkk/dsh-whiskey-intro](https://github.com/uckkk/dsh-whiskey-intro) | 0 | 2026-08-20 | 2026-08-21 | 威士忌入门 |
| 1230 | [uckkk/dsh-whiskey-taste](https://github.com/uckkk/dsh-whiskey-taste) | 0 | 2026-08-20 | 2026-08-21 | 威士忌品鉴 |
| 1231 | [uckkk/dsh-wine-need](https://github.com/uckkk/dsh-wine-need) | 0 | 2026-08-20 | 2026-08-21 | 婚宴酒水 |
| 1232 | [uckkk/dsh-winter-car](https://github.com/uckkk/dsh-winter-car) | 0 | 2026-08-20 | 2026-08-21 | 冬季用车 |
| 1233 | [uckkk/dsh-wiper-replace](https://github.com/uckkk/dsh-wiper-replace) | 0 | 2026-08-20 | 2026-08-20 | 雨刮更换 |
| 1234 | [uckkk/dsh-work-format](https://github.com/uckkk/dsh-work-format) | 0 | 2026-08-20 | 2026-08-21 | 作品格式 |
| 1235 | [uckkk/dsh-workout-split](https://github.com/uckkk/dsh-workout-split) | 0 | 2026-08-20 | 2026-08-20 | 训练分化计划 |
| 1236 | [uckkk/dsh-yoga-timing](https://github.com/uckkk/dsh-yoga-timing) | 0 | 2026-08-20 | 2026-08-21 | 练瑜伽时机 |
| 1237 | [uckkk/dsh-zone-clean](https://github.com/uckkk/dsh-zone-clean) | 0 | 2026-08-20 | 2026-08-21 | 分区清洁 |
| 1238 | [vincent-guo/dsh-loading-phrases](https://github.com/vincent-guo/dsh-loading-phrases) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness Web GUI plugin — replaces the "Deep diving..." running status with rotating witty phrases and practical tips. |
| 1239 | [Vladimir-Kryshchenko/dsh-route-fence-linter](https://github.com/Vladimir-Kryshchenko/dsh-route-fence-linter) | 0 | 2026-08-21 | 2026-08-21 | Static linter for DeepSeek Harness plugin HTTP routes: every webServer route bypasses the /api gateway's trust check and must pin the Host to loopback itself. PASS/WARN/FAIL per route, as a CLI and a dsh tool. |
| 1240 | [WAlucktechniqueAN/dsh-setting-layout](https://github.com/WAlucktechniqueAN/dsh-setting-layout) | 0 | 2026-08-20 | 2026-08-21 | 可以将那该死deepseek harness的设置面板打开时调节大小，不再遮挡视野 |
| 1241 | [Walvez/dsh-opencodex-usage](https://github.com/Walvez/dsh-opencodex-usage) | 0 | 2026-08-20 | 2026-08-21 | Draggable OpenCodex quota & multi-provider rate-limit floating monitor plugin for DeepSeek Harness Web GUI |
| 1242 | [warma16/dsh-fresh-environment-creator](https://github.com/warma16/dsh-fresh-environment-creator) | 0 | 2026-08-20 | 2026-08-21 | A creator of fresh-environment of dsh |
| 1243 | [welsione/dsh-model-router](https://github.com/welsione/dsh-model-router) | 0 | 2026-08-18 | 2026-08-21 | DeepSeek Harness (DSH) 统一模型路由插件：一个逻辑 ModelID 多供应商候选链路由、首 token 前故障转移 + 冷却、三档分级（tier1/2/3）、思考级别 reasoningEffort 与管理面板 \| Unified model routing plugin for DSH |
| 1244 | [weshopai/weshop-skill-pakage](https://github.com/weshopai/weshop-skill-pakage) | 0 | 2026-08-20 | 2026-08-21 | Creative AI Skills for Codex, Claude Code, Cursor, Deepseek harness and any Agent Skills-compatible runtime. |
| 1245 | [whoisDDD/dsh-approval-notify](https://github.com/whoisDDD/dsh-approval-notify) | 0 | 2026-08-20 | 2026-08-21 | DSH approval/question/completion notifier with native browser notifications and toast fallback. / DSH 审批、提问与完成提醒插件，支持浏览器原生通知和 toast 回退。 |
| 1246 | [whoisDDD/dsh-quota-dashboard](https://github.com/whoisDDD/dsh-quota-dashboard) | 0 | 2026-08-20 | 2026-08-21 | DSH plugin for AI API balance/quota monitoring: DeepSeek peak/valley countdown, OpenCode Go quota, host-side key isolation, terminal-style panel, persistent config. / DSH Web 插件：AI API 余额/额度监控，DeepSeek 峰谷倒计时、OpenCode Go 额度、Key 主机侧隔离、终端风格面板、配置持久化。 |
| 1247 | [wilianyichen/dsh-deepseek-web](https://github.com/wilianyichen/dsh-deepseek-web) | 0 | 2026-08-21 | 2026-08-21 | Operate chat.deepseek.com as a programmable agent from inside DeepSeek Harness: sessions, shares, digest. 把 DeepSeek 网页版当作可编程 Agent 的 DSH 插件 |
| 1248 | [wilianyichen/dsh-official-vision](https://github.com/wilianyichen/dsh-official-vision) | 0 | 2026-08-21 | 2026-08-21 | Direct official DeepSeek vision API bridge for DeepSeek Harness: deepseek-v4-flash-vision-exp provider route. 直连 DeepSeek 官方视觉 API 的 DSH 插件 |
| 1249 | [wizzy-yang/dsh-updater](https://github.com/wizzy-yang/dsh-updater) | 0 | 2026-08-21 | 2026-08-21 | DSH auto-update plugin — detects official deepseek-ai/deepseek-harness releases, one-click npm upgrade + auto restart from the sidebar |
| 1250 | [wjk-dot/dsh-desktop-pet](https://github.com/wjk-dot/dsh-desktop-pet) | 0 | 2026-08-16 | 2026-08-21 | A cross-platform desktop pet companion for DeepSeek Harness with shared Agent sessions, task status, workspace history, and optional Qwen-MM-Plugins screenshot analysis. |
| 1251 | [wlz6/dsh-ide-ipc](https://github.com/wlz6/dsh-ide-ipc) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness IDE IPC plugin for multi-IDE context, dsh-tui, and Web |
| 1252 | [wold9168/dsh-model-filter](https://github.com/wold9168/dsh-model-filter) | 0 | 2026-08-19 | 2026-08-21 | Model Filter Plugin for DeepSeek Harness (DSH) |
| 1253 | [Wonjader/dsh-permission-workspace-write-plus](https://github.com/Wonjader/dsh-permission-workspace-write-plus) | 0 | 2026-08-21 | 2026-08-21 | deepseek harness中workspace write权限的增强插件。使用前请自行评估风险。 |
| 1254 | [WOO-woo-Waf/novelcode-dsh](https://github.com/WOO-woo-Waf/novelcode-dsh) | 0 | 2026-08-21 | 2026-08-21 | DSH-native long-form fiction author studio with Narrative V2 memory, simulation, approvals, and a read-only Web workbench |
| 1255 | [WSYXIUBA/dsh-plugin-constellation](https://github.com/WSYXIUBA/dsh-plugin-constellation) | 0 | 2026-08-21 | 2026-08-21 | 🪐 DSH 插件星座图 — DeepSeek Harness 插件依赖关系可视化（自动扫描/分类/依赖图） |
| 1256 | [wuxiangru915/dsh-session-navigator](https://github.com/wuxiangru915/dsh-session-navigator) | 0 | 2026-08-21 | 2026-08-21 | Session navigator & turn minimap for DeepSeek Harness: proportional rail, hover preview card, turn stepper. |
| 1257 | [x2it/dsh-memory-panel](https://github.com/x2it/dsh-memory-panel) | 0 | 2026-08-21 | 2026-08-21 | Long-term memory for DeepSeek Harness: memory_save/recall/list tools + a sidebar panel visualizing what the agent remembers about you |
| 1258 | [xbyzzZ/dsh_design](https://github.com/xbyzzZ/dsh_design) | 0 | 2026-08-21 | 2026-08-21 | Clickable HTML prototype canvas for DeepSeek Harness. |
| 1259 | [Xiamu-ssr/snowmountain-market](https://github.com/Xiamu-ssr/snowmountain-market) | 0 | 2026-07-13 | 2026-08-21 | Credential-safe Wind AIFin MCP and Alice integration for DeepSeek Harness. |
| 1260 | [xianfanwindy/dsh-doctor-windows](https://github.com/xianfanwindy/dsh-doctor-windows) | 0 | 2026-08-20 | 2026-08-21 | Read-only Windows startup diagnostics for DeepSeek Harness. |
| 1261 | [XiaoWind/dsh-loop](https://github.com/XiaoWind/dsh-loop) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness plugin: a /loop slash command for timed recurring agent loops |
| 1262 | [xie-tj/deepseek-harness-latest-user-message-revision](https://github.com/xie-tj/deepseek-harness-latest-user-message-revision) | 0 | 2026-08-21 | 2026-08-21 | Optional DeepSeek Harness plugin for editing and resending the latest direct-human message |
| 1263 | [xingyingyuzhui/dsh-vision-bench](https://github.com/xingyingyuzhui/dsh-vision-bench) | 0 | 2026-08-21 | 2026-08-21 | DSH plugin: Vision bench — Keil debug and Modbus HMI in the session view |
| 1264 | [XSakura666/dsh-voice-input-space](https://github.com/XSakura666/dsh-voice-input-space) | 0 | 2026-08-21 | 2026-08-21 | Voice input for DeepSeek Harness: hold Space to speak, release to insert. Zero dependencies, Web Speech API. / 语音输入：长按空格说话，松开上屏，零依赖。 |
| 1265 | [xuanxuanerhao-droid/dsh-waimai-discount](https://github.com/xuanxuanerhao-droid/dsh-waimai-discount) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness (DSH) plugin: 外卖优惠助手 — official, commission-free takeout/delivery coupon channel finder for Meituan, Ele.me, JD Delivery & Taobao Shanguo |
| 1266 | [xuqingsakura/dsh-workspace](https://github.com/xuqingsakura/dsh-workspace) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 独立工作台窗口插件：VSCode 风格的文件树 / 编辑器 / 终端 / Git / 浏览器，按会话隔离。 |
| 1267 | [Y1fe1Zh0u/dsh-doudizhu](https://github.com/Y1fe1Zh0u/dsh-doudizhu) | 0 | 2026-08-21 | 2026-08-21 | Autonomous trusted-LAN Dou Dizhu for DeepSeek Harness |
| 1268 | [Yaing-Yan/dsh-better-retry](https://github.com/Yaing-Yan/dsh-better-retry) | 0 | 2026-08-21 | 2026-08-21 | DSH (DeepSeek Harness) Cordis plugin: retry ANY model-request failure with durable backoff; retry budget adjustable in Settings → General via slider (0–64, default 8). 无论报什么错都重试模型请求，设置滑块可调 0–64 次，默认 8。 |
| 1269 | [yangfei222666-9/dsh-paper-trade](https://github.com/yangfei222666-9/dsh-paper-trade) | 0 | 2026-08-19 | 2026-08-21 | Zero-dependency paper-trading CLI for the DeepSeek Harness ecosystem: virtual 100k, hash-chained tamper-evident trade ledger — paper only, never a real brokerage. |
| 1270 | [yangfei222666-9/dsh-skill-multi-model-review](https://github.com/yangfei222666-9/dsh-skill-multi-model-review) | 0 | 2026-08-16 | 2026-08-21 | DSH skill: multi-model candidate review pipeline (GLM / Claude-CLI relay / Gemini / Codex) — zero-dependency, evidence-first |
| 1271 | [yangfei222666-9/memory-auditor](https://github.com/yangfei222666-9/memory-auditor) | 0 | 2026-08-16 | 2026-08-21 | Zero-dependency AI memory auditor: flags overclaims, evidence-free completion claims, and duplicate rules. Candidates, not verdicts. |
| 1272 | [yanhuifair/dsh-money](https://github.com/yanhuifair/dsh-money) | 0 | 2026-08-21 | 2026-08-21 | 一个显示回复和对话费用的 deepseek harness 插件 |
| 1273 | [YannZhou/dsh-about](https://github.com/YannZhou/dsh-about) | 0 | 2026-08-20 | 2026-08-21 | DeepSeek Harness 设置中心「关于」分区插件：版本信息 + 检查更新（npm latest/next）+ 一键更新自动重启 + GitHub 版本记录 \| Settings About tab: check updates & one-click update |
| 1274 | [YePpHa/dsh-web-search-kagi](https://github.com/YePpHa/dsh-web-search-kagi) | 0 | 2026-08-20 | 2026-08-21 | Kagi Search v1 provider for the DeepSeek Harness. |
| 1275 | [YeqingTang/dsh-task-watcher-plugin](https://github.com/YeqingTang/dsh-task-watcher-plugin) | 0 | 2026-08-20 | 2026-08-20 | Windows tray monitor shell plugin for DeepSeek Harness: deploys & manages the standalone DshTaskWatcher tray app, with a start/stop switch in Settings > Plugins. |
| 1276 | [yihefeikong-rgb/dsh-cc-haha-dream](https://github.com/yihefeikong-rgb/dsh-cc-haha-dream) | 0 | 2026-08-20 | 2026-08-20 | DSH 自动做梦插件：后台定期回顾会话与记忆整合去重（复刻 CC-HAHA autoDream）· Auto memory consolidation (dream) plugin for DeepSeek Harness, inspired by CC-HAHA |
| 1277 | [yk1288/dsh-opencode-go-usage](https://github.com/yk1288/dsh-opencode-go-usage) | 0 | 2026-08-21 | 2026-08-21 | 在 DeepSeek Harness (DSH) 侧边栏底部显示 OpenCode Go 用量徽章。实时展示 5 小时滚动、本周、本月的用量百分比，支持点击展开详情面板，自动刷新，颜色预警。 |
| 1278 | [ykfs/dsh-openviking-client](https://github.com/ykfs/dsh-openviking-client) | 0 | 2026-08-21 | 2026-08-21 | DSH (DeepSeek Harness) 插件：将 Agent 会话消息自动同步到 [OpenViking](https://github.com/volcengine/OpenViking) 会话记忆库，由 OpenViking 服务端负责记忆提取与生命周期管理。 |
| 1279 | [Yoke0/dsh-balance-widget](https://github.com/Yoke0/dsh-balance-widget) | 0 | 2026-08-20 | 2026-08-21 | Floating DeepSeek account balance widget for the DeepSeek Harness Web GUI — live polling, draggable, key stays server-side. |
| 1280 | [youridol/dsh-sess](https://github.com/youridol/dsh-sess) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness 会话管理全局插件：侧边栏会话删除、工作区归档管理（重命名/恢复/删除）。原生 UI，profile 挂载，不改 DSH 源码。 |
| 1281 | [Yukari316/dsh-toolcall-compat](https://github.com/Yukari316/dsh-toolcall-compat) | 0 | 2026-08-21 | 2026-08-21 | 修复在DSH中使用自定义提供方模型时会遇到的toolcall json schema被错误解析后不断产生错误toolcall的问题，同时提供长时间等待toolcall跳过的功能。 |
| 1282 | [z-col/dsh-deepseek-peak-valley](https://github.com/z-col/dsh-deepseek-peak-valley) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek 分时段计费小组件 · DSH client 插件（platform=web）：按北京时间自动判定高峰/空闲时段，10 款风格侧边栏小组件 + 设置页 |
| 1283 | [zaimokuza-yoshiteru/dsh-theme-library](https://github.com/zaimokuza-yoshiteru/dsh-theme-library) | 0 | 2026-08-20 | 2026-08-21 | Extensible animated theme library for DeepSeek Harness |
| 1284 | [Zeishuai-s-Project/ZeishuaiDeepSeekHarness](https://github.com/Zeishuai-s-Project/ZeishuaiDeepSeekHarness) | 0 | 2026-08-18 | 2026-08-21 | DSH的个人衍生版本，主要用于C#，C/C++，python，typescript开发 |
| 1285 | [zhubidatou/dsh-stock-watcher](https://github.com/zhubidatou/dsh-stock-watcher) | 0 | 2026-08-21 | 2026-08-21 | DeepSeek Harness Web 股票实时行情悬浮插件：实时报价、K线、7日/30日走势、技术面看多看空预测。 |
| 1286 | [zhuifengqug/dsh-adaptive-reasoning](https://github.com/zhuifengqug/dsh-adaptive-reasoning) | 0 | 2026-08-20 | 2026-08-21 | 面向 DeepSeek Harness Web GUI 的、基于模型能力的推理档位滑块。 |
| 1287 | [zhuoxuanliu53-svg/dsh-plugin-market](https://github.com/zhuoxuanliu53-svg/dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | 可视化插件市场：双源(curated + GitHub topic)浏览/搜索/排序/关注/一键安装/更新/卸载/自动更新/热禁用/组合包导入导出 (DSH bundle plugin) |
| 1288 | [zhuoxuanliu53-svg/dsh-updater](https://github.com/zhuoxuanliu53-svg/dsh-updater) | 0 | 2026-08-21 | 2026-08-21 | DSH Web GUI plugin: check and apply DeepSeek Harness official source updates |
| 1289 | [zimodzh/dsh-plugin-effort-declare](https://github.com/zimodzh/dsh-plugin-effort-declare) | 0 | 2026-08-21 | 2026-08-21 | 为手工 OpenAI 兼容模型补上推理档位声明的 DSH 插件 / DSH plugin to declare reasoning efforts on hand-added OpenAI-compatible models. |
| 1290 | [zzdream67/dsh-vision-bridge](https://github.com/zzdream67/dsh-vision-bridge) | 0 | 2026-08-20 | 2026-08-21 | Let text-only models read images in DeepSeek Harness |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- ArmyWas/dsh-plugin-reducer
- Chenmo0414/openanalyst
- creativedswork/dsh-mcp-apps
- DamonBao/dsh-codex-provider-plugin
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
- fgm-builds/dashr
- harmony520/path-click
- Huauauaa/privacy
- hyls9527/dsh-bundle-updater
- hyls9527/dsh-plugin-research
- hyls9527/dsh-plugins
- MichengAI/deepseek-harness-website
- nickhelion/dsh-qwen-token-plan-cn-responses
- omdsh-dev/dsh-at-file
- Rainpomelo/deepseek-harness-plugin-market
- Saikel-Orado-Liu/dsh-coding-agent-preset
- SUJIElearning/dsh-free-search-builder
- Tabbit-Browser/dsh-plugin
- TOBYCAI/dsh-archived-sessions
- u9521/dsh-subagent-custom-model
- uckkk/dsh-bird-crane
- uckkk/dsh-bird-flamingo
- uckkk/dsh-bird-hummingbird
- uckkk/dsh-bird-kiwi
- uckkk/dsh-bird-magpie
- uckkk/dsh-bird-peacock
- uckkk/dsh-bird-pigeon
- uckkk/dsh-bird-seagull
- uckkk/dsh-bird-sparrow
- uckkk/dsh-bird-swallow
- uckkk/dsh-bird-swan
- uckkk/dsh-bird-woodpecker
- uckkk/dsh-cat-persian
- uckkk/dsh-cat-siamese
- uckkk/dsh-city-amsterdam-city
- uckkk/dsh-city-athens-city
- uckkk/dsh-city-budapest-city
- uckkk/dsh-city-copenhagen-city
- uckkk/dsh-city-dublin-city
- uckkk/dsh-city-edinburgh-city
- uckkk/dsh-city-hamburg-city
- uckkk/dsh-city-helsinki-city
- uckkk/dsh-city-lisbon-city
- uckkk/dsh-city-manchester-city
- uckkk/dsh-city-munich-city
- uckkk/dsh-city-prague-city
- uckkk/dsh-city-stockholm-city
- uckkk/dsh-city-vienna-city
- uckkk/dsh-city-warsaw-city
- uckkk/dsh-city-zurich-city
- uckkk/dsh-club-ajax
- uckkk/dsh-club-arsenal
- uckkk/dsh-club-barcelona
- uckkk/dsh-club-bayern
- uckkk/dsh-club-benfica
- uckkk/dsh-club-boca
- uckkk/dsh-club-celtic
- uckkk/dsh-club-dortmund
- uckkk/dsh-club-flamengo
- uckkk/dsh-club-galatasaray
- uckkk/dsh-club-inter
- uckkk/dsh-club-juventus
- uckkk/dsh-club-liverpool
- uckkk/dsh-club-man-city
- uckkk/dsh-club-man-united
- uckkk/dsh-club-milan
- uckkk/dsh-club-porto
- uckkk/dsh-club-psg
- uckkk/dsh-club-real-madrid
- uckkk/dsh-club-river
- uckkk/dsh-dog-beagle
- uckkk/dsh-dog-bulldog
- uckkk/dsh-dog-chihuahua
- uckkk/dsh-dog-chow-chow
- uckkk/dsh-dog-corgi
- uckkk/dsh-dog-french-bulldog
- uckkk/dsh-dog-german-shepherd
- uckkk/dsh-dog-golden
- uckkk/dsh-dog-labrador
- uckkk/dsh-dog-poodle
- uckkk/dsh-dog-pug
- uckkk/dsh-dog-rottweiler
- uckkk/dsh-dog-samoyed
- uckkk/dsh-dog-shiba
- uckkk/dsh-dog-siberian-husky
- uckkk/dsh-figure-alexander
- uckkk/dsh-figure-caesar
- uckkk/dsh-figure-churchill
- uckkk/dsh-figure-cleopatra
- uckkk/dsh-figure-confucius
- uckkk/dsh-figure-elizabeth1
- uckkk/dsh-figure-gandhi
- uckkk/dsh-figure-napoleon
- uckkk/dsh-figure-nelson
- uckkk/dsh-figure-qinshihuang
- uckkk/dsh-figure-wu-zetian
- uckkk/dsh-figure-zhukov
- uckkk/dsh-nba-lakers
- uckkk/dsh-reptile-alligator
- uckkk/dsh-reptile-anaconda
- uckkk/dsh-reptile-caiman
- uckkk/dsh-reptile-chameleon
- uckkk/dsh-reptile-cobra
- uckkk/dsh-reptile-gecko
- uckkk/dsh-reptile-monitor-lizard
- uckkk/dsh-reptile-newt
- uckkk/dsh-reptile-python
- uckkk/dsh-reptile-rattlesnake
- uckkk/dsh-reptile-salamander
- uckkk/dsh-reptile-terrapin
- uckkk/dsh-reptile-tortoise
- uckkk/dsh-scientist-bohr
- uckkk/dsh-scientist-copernicus
- uckkk/dsh-scientist-curie
- uckkk/dsh-scientist-darwin
- uckkk/dsh-scientist-einstein
- uckkk/dsh-scientist-euler
- uckkk/dsh-scientist-faraday
- uckkk/dsh-scientist-feynman
- uckkk/dsh-scientist-galileo
- uckkk/dsh-scientist-gauss
- uckkk/dsh-scientist-hawking
- uckkk/dsh-scientist-lovelace
- uckkk/dsh-scientist-maxwell
- uckkk/dsh-scientist-mendeleev
- uckkk/dsh-scientist-newton
- uckkk/dsh-scientist-pasteur
- uckkk/dsh-scientist-shannon
- uckkk/dsh-scientist-tesla
- uckkk/dsh-scientist-turing
- uckkk/dsh-scientist-von-neumann
- uckkk/dsh-star-achernar
- uckkk/dsh-star-aldebaran
- uckkk/dsh-star-altair
- uckkk/dsh-star-antares
- uckkk/dsh-star-arcturus
- uckkk/dsh-star-betelgeuse
- uckkk/dsh-star-canopus
- uckkk/dsh-star-capella
- uckkk/dsh-star-deneb
- uckkk/dsh-star-fomalhaut
- uckkk/dsh-star-hadar
- uckkk/dsh-star-pollux
- uckkk/dsh-star-procyon
- uckkk/dsh-star-rigel
- uckkk/dsh-star-rigil-centaurus
- uckkk/dsh-star-sirius
- uckkk/dsh-star-spica
- uckkk/dsh-star-vega
- vkxkzsp769-cloud/dsh-context-compressor
- Whatsmore-nf/dsh-context-steward
- wjy9902/dsh-web-default-session
- WSL043/dsh-session-delete
- XXLxhPLMM/deepseek-harness-desktop
