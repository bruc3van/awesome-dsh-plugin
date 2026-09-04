# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-04**
- 快照日期 / Snapshot date: **2026-09-04 (UTC)**
- 待审核 / Pending: **131**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **16**
- Star 异常增长 / Star-growth alerts: **2** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-09-03** / vs previous snapshot **2026-09-03**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **2**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [pax-beehive/dsh-hub-cli](https://github.com/pax-beehive/dsh-hub-cli) | 已核准 / approved | 215 | +113 | 5 | 9d | 日增百星 | 日增 +113★；已不进榜单 |
| ⚠️ [zhu1090093659/dsh-trading](https://github.com/zhu1090093659/dsh-trading) | 已核准 / approved | 92 | +52 | 6 | 4d | 新入 Top 200 | 新入 Top 200 #109 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [SuperJJ007/papermachine](https://github.com/SuperJJ007/papermachine) | 29 | 2026-08-24 | 2026-09-04 | The AI analyst that shows its work. Runs Python and R on your own machine, and traces every chart back to the code behind it. |
| 2 | [Amakurai/dsh-liketavern](https://github.com/Amakurai/dsh-liketavern) | 25 | 2026-08-19 | 2026-09-04 | A DeepSeek Harness (dsh) plugin — turns dsh web into a SillyTavern-style roleplay frontend: character cards, prompt presets, lorebooks, personas, BM25 long-term memory, world-state deltas, and rollback-able floor operations, all on the dsh agent runtime. |
| 3 | [Minglink/dsh-stream-market](https://github.com/Minglink/dsh-stream-market) | 10 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 内置可视化插件市场 — 极速秒开、官方 dsh:// 联动、深度本地管理与原子化彻底卸载 |
| 4 | [liangyou09/lyshell-archive](https://github.com/liangyou09/lyshell-archive) | 6 | 2026-08-12 | 2026-09-04 | AI-native terminal & SSH client — Harness launches DeepSeek / CodEx / Claude agents on PowerShell 7 in TUI or embedded Web UI, plus SFTP, serial/Telnet and a built-in MCP server. |
| 5 | [WongYuYe/dsh-appshots](https://github.com/WongYuYe/dsh-appshots) | 6 | 2021-06-16 | 2026-09-04 | Codex-style Appshots for DSH Desktop: capture the frontmost macOS window and attach it to the current chat. |
| 6 | [FeatherHunter/dsh-im-companion](https://github.com/FeatherHunter/dsh-im-companion) | 3 | 2026-09-02 | 2026-09-04 | dsh-im 辅助插件（IM Companion）：以 Agent 为单位，把飞书/微信/QQ 机器人收进 DSH 工作区，左栏绿灯、一键过滤、舰队总览、拖拽搬家，卸载即净。 |
| 7 | [FylarOpen/fylar-deepseek-harness-office-editor](https://github.com/FylarOpen/fylar-deepseek-harness-office-editor) | 3 | 2026-09-02 | 2026-09-04 | Office document preview, editing, and DOCX generation for DeepSeek Harness, powered by Fylar Office SDK. |
| 8 | [Anionex/dsh-smarter-edit](https://github.com/Anionex/dsh-smarter-edit) | 2 | 2026-09-04 | 2026-09-04 | A better approach to editing files in DSH. |
| 9 | [CJYLZS/dsh-commandcode-provider](https://github.com/CJYLZS/dsh-commandcode-provider) | 2 | 2026-08-28 | 2026-09-04 | a lightweight plugin supports commandcode coding plan in dsh |
| 10 | [dugujun3-cloud/dshos-dock](https://github.com/dugujun3-cloud/dshos-dock) | 2 | 2026-09-04 | 2026-09-04 | Workspace-OS status bar for DeepSeek Harness (DSH): task counts, latest run event, checkup date. Zero deps, read-only, .dshos/ data contract. |
| 11 | [HeShen-1/deepseek-whale-wallpaper](https://github.com/HeShen-1/deepseek-whale-wallpaper) | 2 | 2026-09-04 | 2026-09-04 | 🐋 Live dot-matrix whale wallpaper plugin for the DeepSeek Harness (dsh) web UI — 1,750 breathing WebGL2 particles, pointer vortices, light/dark themes · 深度求索 Harness 点阵鲸鱼动态壁纸插件 |
| 12 | [huenjie/dsh-paste-collapse](https://github.com/huenjie/dsh-paste-collapse) | 2 | 2026-08-27 | 2026-09-04 | dsh-plugin |
| 13 | [umineko987/dsh-search-enhance](https://github.com/umineko987/dsh-search-enhance) | 2 | 2026-08-14 | 2026-09-04 | 提供 Grok-compatible 网页搜索、保留来源分页、Context7 与 Exa 文档检索、有界网页提取、站点映射、离线研究计划和只读诊断。 |
| 14 | [weiwang988/dsh-session-spend](https://github.com/weiwang988/dsh-session-spend) | 2 | 2026-09-04 | 2026-09-04 | DSH 客户端插件：实时会话花费（¥）· 官方峰谷计价 + 节省分解 DSH client plugin: live session cost readout (¥) with official DeepSeek peak/valley pricing and savings breakdown |
| 15 | [zingzheng/dsh-gb](https://github.com/zingzheng/dsh-gb) | 2 | 2026-09-04 | 2026-09-04 | 把手机变成 DSH 的语音遥控外设 |
| 16 | [66-empty/DeepSeek-Harness-Desktop](https://github.com/66-empty/DeepSeek-Harness-Desktop) | 1 | 2026-09-04 | 2026-09-04 | Electron desktop shell for the DeepSeek Harness Web GUI; first run auto-installs a portable runtime (Node + pinned deepseek-harness), with prebuilt packs, CN mirrors and zh/en UI. DeepSeek Harness 桌面版外壳:首启自动装配运行环境,支持预构建运行包与国内镜像,界面中英双语。 |
| 17 | [Anionex/dsh-pinned-sessions](https://github.com/Anionex/dsh-pinned-sessions) | 1 | 2026-09-04 | 2026-09-04 | dsh会话置顶插件 ｜ dsh session pinning plugin, pin important DeepSeek Harness sessions in the workspace sidebar |
| 18 | [biubiu23333333/dsh-memory](https://github.com/biubiu23333333/dsh-memory) | 1 | 2026-09-04 | 2026-09-04 | dsh-memory |
| 19 | [bug-huntter/dsh-vision-plugin](https://github.com/bug-huntter/dsh-vision-plugin) | 1 | 2026-09-03 | 2026-09-04 | 让你的deepseek拥有识图能力，配置简单，易上手 |
| 20 | [chenhw7/dsh-memory](https://github.com/chenhw7/dsh-memory) | 1 | 2026-08-17 | 2026-09-04 | Cairn — long-term memory for the DeepSeek Harness (@chenhw7/dsh-memory). Persistent cross-session memory: facts, preferences, corrections, lessons. BM25 retrieval, three-layer scoping, human-confirmed writes. |
| 21 | [CJYLZS/dsh-remote-development](https://github.com/CJYLZS/dsh-remote-development) | 1 | 2026-09-04 | 2026-09-04 | Remote development for DeepSeek Harness: pick a remote workspace over SSH and let the agent work on it with the same local tools. No extra model tools, no third-party UI plugin. |
| 22 | [crazy-L118/dsh-browser-ctrl](https://github.com/crazy-L118/dsh-browser-ctrl) | 1 | 2026-09-02 | 2026-09-04 | Built-in browser plugin for dsh (DeepSeek Harness) — lets the AI drive a real local browser (Edge/Chrome via CDP): navigate, read, click, type, with screenshots embedded straight into the chat. Guest-mode isolated, zero dependencies. |
| 23 | [DAIZHISEN/dsh-prompt-enhance](https://github.com/DAIZHISEN/dsh-prompt-enhance) | 1 | 2026-09-04 | 2026-09-04 | A DSH web plugin: a star button that rewrites drafts into clearer prompts, combining PromptForge rule diagnosis with your session's default model. Bilingual (English / Chinese). |
| 24 | [ffdnm/ClashTUNWithDSH](https://github.com/ffdnm/ClashTUNWithDSH) | 1 | 2026-09-04 | 2026-09-04 | Enable DeepSeek Harness to use web_fetch normally under Clash TUN (fake-ip) mode |
| 25 | [gaishilaji/dsh-plugin-cost](https://github.com/gaishilaji/dsh-plugin-cost) | 1 | 2026-09-02 | 2026-09-04 | deepseek harness插件，展示每轮对话的总消费及消费详情。 |
| 26 | [GuoCheng24/breakthrough-harness](https://github.com/GuoCheng24/breakthrough-harness) | 1 | 2026-08-28 | 2026-09-04 | Make your research agent hard to fool — the discipline layer for agentic research: breakthrough loop, hard-to-fool harness checklist, claim-polarity gates, engineering rules with their tuition |
| 27 | [himovo/movo](https://github.com/himovo/movo) | 1 | 2026-09-01 | 2026-09-04 | Turn DeepSeek Harness into a self-hosted enterprise Agent platform with knowledge, research, content generation, governance, and admin controls. |
| 28 | [ilovedyou6666-hub/dshtools-sensevoice-input](https://github.com/ilovedyou6666-hub/dshtools-sensevoice-input) | 1 | 2026-09-03 | 2026-09-04 | 基于 SenseVoiceSmall（iic/SenseVoiceSmall）多语言语音理解模型的 DSH Desktop 本地语音输入插件。 |
| 29 | [KhaosGx/dsh-stop-service](https://github.com/KhaosGx/dsh-stop-service) | 1 | 2026-09-04 | 2026-09-04 | DSH 设置页「服务控制」：实时服务信息 + 优雅终止按钮，不留孤儿进程。 / A service panel for DeepSeek Harness Web: live host info + graceful stop. |
| 30 | [LamplitIsles/kepos-hindsight](https://github.com/LamplitIsles/kepos-hindsight) | 1 | 2026-08-28 | 2026-09-04 | hindsight memory for companion agent in dsh |
| 31 | [Leon00x/deepseek-harness-desktop](https://github.com/Leon00x/deepseek-harness-desktop) | 1 | 2026-09-04 | 2026-09-04 | Linux native desktop client for DeepSeek Harness — download & run, connects to your local Harness out of the box (Tauri 2 / WebKitGTK) |
| 32 | [lxwallac/dsh-vault-wall](https://github.com/lxwallac/dsh-vault-wall) | 1 | 2026-09-04 | 2026-09-04 | 让 DeepSeek Harness 感知不到/无法操作指定敏感路径的隔离墙插件（Vault Wall） |
| 33 | [Mandarin715/dsh-mobile-access-plugin](https://github.com/Mandarin715/dsh-mobile-access-plugin) | 1 | 2026-09-04 | 2026-09-04 | DSH 手机远程通道插件：一键生成并部署 frp 隧道 + Basic Auth 反代 + 开机自启（通用，不锁 DSH 发行版） |
| 34 | [MurasakiIzumi/dsh-ticker-jp](https://github.com/MurasakiIzumi/dsh-ticker-jp) | 1 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 的悬浮行情插件（日股改版）：在页面右上角显示一个可拖拽、可收起的半透明小窗，实时展示 TOPIX 联动 ETF 与日经225，并可自选任意 Yahoo 代码（支持自定义显示名）。 |
| 35 | [rqzhao1/dsh-wsl-launcher](https://github.com/rqzhao1/dsh-wsl-launcher) | 1 | 2026-09-03 | 2026-09-04 | Windows desktop launcher for DeepSeek Harness Web running in WSL |
| 36 | [sens-io/memobranch](https://github.com/sens-io/memobranch) | 1 | 2026-09-03 | 2026-09-04 | Git-native, auditable long-term memory for AI agents |
| 37 | [shlouai/dsh-debate](https://github.com/shlouai/dsh-debate) | 1 | 2026-09-02 | 2026-09-04 | Stop asking your agent what it thinks. Make it hold a trial. |
| 38 | [Six6stRINgs/dsh-client-ui-thinking-stats](https://github.com/Six6stRINgs/dsh-client-ui-thinking-stats) | 1 | 2026-09-03 | 2026-09-04 | 在底部Dock和每次对话尾部添加模型思考token统计的轻量化插件。A lightweight plugin that adds model thinking token statistics to the bottom Dock and the end of each conversation. |
| 39 | [supanexus/dsh-plugin-chat-enhance](https://github.com/supanexus/dsh-plugin-chat-enhance) | 1 | 2026-09-04 | 2026-09-04 | Searchable model picker with recent chips, vision capability tags, and composer image upload for DeepSeek Harness. |
| 40 | [supanexus/dsh-plugin-file-explorer](https://github.com/supanexus/dsh-plugin-file-explorer) | 1 | 2026-09-04 | 2026-09-04 | Workspace file tree and multi-tab editor in DeepSeek Harness — browse, edit, and preview files without leaving the chat UI. |
| 41 | [TT-Wang/dsh-eval-infra](https://github.com/TT-Wang/dsh-eval-infra) | 1 | 2026-09-03 | 2026-09-04 | Paired A/B evaluation infrastructure for DeepSeek Harness (dsh) components: interleaved repeated runs through the real runtime, verifier self-checks, one-variable arms, regression gating, cache- and calendar-aware cost, CLI + web UI |
| 42 | [yu-wenchao/dsh-tool-lipsync](https://github.com/yu-wenchao/dsh-tool-lipsync) | 1 | 2026-09-04 | 2026-09-04 | FreeLipSync lip-sync video plugin for DeepSeek Harness - No API key required |
| 43 | [zhang-bin-98/sci-fork](https://github.com/zhang-bin-98/sci-fork) | 1 | 2026-08-31 | 2026-09-04 | Git-native biomedical Research Graph for DeepSeek Harness, with literature-grounded expansion and auditable local project files. |
| 44 | [ZIye1208/dsh-github-mcp](https://github.com/ZIye1208/dsh-github-mcp) | 1 | 2026-09-03 | 2026-09-04 | DSH 插件：GitHub MCP 连接插件，token 存 DSH 凭据中心(.credentials.yaml)，自动捆绑安装面板插件 dsh-github-mcp-hint（可独立卸载）。 |
| 45 | [ZIye1208/dsh-github-mcp-hint](https://github.com/ZIye1208/dsh-github-mcp-hint) | 1 | 2026-09-03 | 2026-09-04 | DSH 插件：GitHub MCP 示例提示面板（设置→插件，随机 4/30 条可复制）+ 公开仓库统计（星/fork）+ gh_repo_stats 模型工具（星数/近14天克隆量） |
| 46 | [3361805598-gif/dsh-usage-insights](https://github.com/3361805598-gif/dsh-usage-insights) | 0 | 2026-09-04 | 2026-09-04 | Local-first personal usage insights for DeepSeek Harness |
| 47 | [aayan-cloud/dsh-reelsmaker](https://github.com/aayan-cloud/dsh-reelsmaker) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness plugin: turn narration lines into a finished vertical reel. Free neural voice, burned-in captions, no API keys. |
| 48 | [Alphauni-x/dsh-ds-home-bg](https://github.com/Alphauni-x/dsh-ds-home-bg) | 0 | 2026-09-02 | 2026-09-04 | Deep-navy aurora background theme for the DeepSeek Harness web UI: layered radial glows, fine grid and a drifting halftone whale, following the host Appearance setting. |
| 49 | [ALwith-ai/dsh-agent](https://github.com/ALwith-ai/dsh-agent) | 0 | 2026-08-16 | 2026-09-04 | Interactive ACP v2 bridge for DeepSeek Harness (dsh) — streaming, run-state reporting, permissions. ALwith Desktop is its reference client. |
| 50 | [Amengclass/dsh-settings-hub](https://github.com/Amengclass/dsh-settings-hub) | 0 | 2026-08-26 | 2026-09-04 | dsh plugin: take over settings shell, regroup third-party plugins under one collapsible group |
| 51 | [americanjeff/modelspoke](https://github.com/americanjeff/modelspoke) | 0 | 2026-09-04 | 2026-09-04 | Local OpenAI-compatible model-server discovery + tiered reasoning-metadata resolution for DeepSeek Harness (dsh). |
| 52 | [AndyZHENG0715/dsh-recovery](https://github.com/AndyZHENG0715/dsh-recovery) | 0 | 2026-09-03 | 2026-09-04 | DSH self-recovery: zero-dependency CLI (scan/snapshot/rollback/safemode/boot-probe/doctor) + in-process watchdog plugin. Process-external boot gate, tiered recovery ladder, safe/repair profiles. |
| 53 | [anlew07/dsh-conversation-atlas](https://github.com/anlew07/dsh-conversation-atlas) | 0 | 2026-09-04 | 2026-09-04 | Project-level conversation memory explorer for DeepSeek Harness with related memories, cross-session bridges, BM25 search, and exact chat navigation. |
| 54 | [aosi526/dsh-workbuddy-xdpool](https://github.com/aosi526/dsh-workbuddy-xdpool) | 0 | 2026-09-04 | 2026-09-04 | Merge every locally signed-in WorkBuddy account into DeepSeek Harness as one auto-failing-over model pool (multi-account rotation, live credits and model catalog). |
| 55 | [azure5100/huahua-dsh-chatroom](https://github.com/azure5100/huahua-dsh-chatroom) | 0 | 2026-09-04 | 2026-09-04 | dsh-chat/dsh-weave cross-machine group chat: Fix1-Fix4 adaptation patches + ops documentation set (sanitized) |
| 56 | [BitDG/dsh-plugins](https://github.com/BitDG/dsh-plugins) | 0 | 2026-09-02 | 2026-09-04 | Public collection of independently versioned DeepSeek Harness plugins |
| 57 | [CAI-MH/dsh-feishu-task-recorder](https://github.com/CAI-MH/dsh-feishu-task-recorder) | 0 | 2026-09-04 | 2026-09-04 | Poll Feishu (Lark) chats, extract candidate tasks, two-way sync with the task-board plugin, with a floating browser panel — DeepSeek Harness bundle. 轮询飞书会话提取任务。 |
| 58 | [CAI-MH/dsh-quality-review](https://github.com/CAI-MH/dsh-quality-review) | 0 | 2026-09-04 | 2026-09-04 | AI response quality review for DeepSeek Harness: audits each finished assistant turn with an independent reviewer model and steers the agent to fix unreasonable output (up to 2 review rounds). |
| 59 | [CAI-MH/dsh-reply-language](https://github.com/CAI-MH/dsh-reply-language) | 0 | 2026-09-04 | 2026-09-04 | Force the DeepSeek Harness model to reply in a chosen language (default Simplified Chinese), switchable anytime via tools. 强制大模型使用指定语言回复。 |
| 60 | [CatheadOwl/dsh-eval](https://github.com/CatheadOwl/dsh-eval) | 0 | 2026-09-04 | 2026-09-04 | Agent eval framework over dsh headless runs: case runner, session-trace assertions, and a scripted mock-LLM layer for plugin intent tests. |
| 61 | [CatheadOwl/dsh-extras](https://github.com/CatheadOwl/dsh-extras) | 0 | 2026-09-04 | 2026-09-04 | Out-of-tree plugin suite for deepseek-harness (dsh): markdown tooling, relates tables, review-evals dispatch. |
| 62 | [cofy-x/dsh-evolver](https://github.com/cofy-x/dsh-evolver) | 0 | 2026-09-04 | 2026-09-04 | Auditable, verifier-gated self-evolution for DeepSeek Harness. |
| 63 | [daixin315/dsh-xiaoshuang](https://github.com/daixin315/dsh-xiaoshuang) | 0 | 2026-09-04 | 2026-09-04 | 小双 for DeepSeek Harness — 六层记忆人格插件 + 浮动视频形象（跟随 agent 状态表演 + TTS） |
| 64 | [davidalmeida90/finance-agent-kit](https://github.com/davidalmeida90/finance-agent-kit) | 0 | 2026-09-04 | 2026-09-04 | Equity valuation skills and data MCPs for DeepSeek Harness and Claude Code. SEC filings, bottom-up sector beta, sourced implied ERP. |
| 65 | [dondai44423/donsetch-dsh](https://github.com/dondai44423/donsetch-dsh) | 0 | 2026-09-03 | 2026-09-04 | First-class DonSeTch plugin for DeepSeek Harness: fetch, search and crawl as native dsh tools with an auto-updating verified binary |
| 66 | [Dongfang81/dsh-oil-account](https://github.com/Dongfang81/dsh-oil-account) | 0 | 2026-09-04 | 2026-09-04 | A film-ready oil car vs EV ownership cost demo for DSH Better Sidebar. |
| 67 | [fengb3/dsh-theme-macintosh](https://github.com/fengb3/dsh-theme-macintosh) | 0 | 2026-08-28 | 2026-09-04 | DSH 主题 · 经典麦金塔 Classic Macintosh(System 7 像素复古) |
| 68 | [fenghua00/dsh-sound-effects](https://github.com/fenghua00/dsh-sound-effects) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 音效提示插件：任务完成或权限请求时播放提示音，可更换音效。 |
| 69 | [funcodingdev/dsh-community-plugins](https://github.com/funcodingdev/dsh-community-plugins) | 0 | 2026-09-02 | 2026-09-04 | DeepSeek Harness 原生社区插件管理器：在设置中发现、安装、更新和管理社区插件。 |
| 70 | [fuzz1og/dsh-model-capabilities](https://github.com/fuzz1og/dsh-model-capabilities) | 0 | 2026-09-04 | 2026-09-04 | DSH web plugin: per-model thinking-intensity tiers, modalities and gateway compat switches for custom llm-pi-ai providers, edited inside the official Models settings card |
| 71 | [gcry13067381632-jpg/dsh-qqbot](https://github.com/gcry13067381632-jpg/dsh-qqbot) | 0 | 2026-09-04 | 2026-09-04 | DSH接入腾讯官方qqbot/富媒体/表情包/多开不同预设的机器人/定时消息/远程审批 |
| 72 | [GooDAnDReaDY/dsh-dsml-artifact-guard](https://github.com/GooDAnDReaDY/dsh-dsml-artifact-guard) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness DSML artifact sanitizer for leaked protocol tags |
| 73 | [GooDAnDReaDY/dsh-moa](https://github.com/GooDAnDReaDY/dsh-moa) | 0 | 2026-09-04 | 2026-09-04 | Mixture of Agents (MoA) plugin for DeepSeek Harness with /moa slash command, file workspaces, and Live Canvas integration |
| 74 | [gunduziba/dsh-pi-markdown](https://github.com/gunduziba/dsh-pi-markdown) | 0 | 2026-09-04 | 2026-09-04 | Pi TUI 终端风格 Markdown 样式插件，专为 DeepSeek Harness Web 设计 |
| 75 | [gunduziba/dsh-tool-zg](https://github.com/gunduziba/dsh-tool-zg) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 原生 zvec-grep (zg) 代码语义搜索工具插件，支持按预设动态过滤 |
| 76 | [hansjone/netxops](https://github.com/hansjone/netxops) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness Netx Ops agent preset (UME alarms, NE, managed CLI) |
| 77 | [hongbaiqi/dsh-model-account-login](https://github.com/hongbaiqi/dsh-model-account-login) | 0 | 2026-09-03 | 2026-09-04 | Persistent DSH model-account authorization UI for ChatGPT, Claude, and other llm-pi-ai login flows |
| 78 | [HrxSpace/dsh-session-sweeper](https://github.com/HrxSpace/dsh-session-sweeper) | 0 | 2026-09-04 | 2026-09-04 | DSH 插件，扫描管理电脑本地所有终端的会话（Claude Code、Codex、Workbuddy、DSH等） |
| 79 | [huashenglian/dsh-omni-workstation](https://github.com/huashenglian/dsh-omni-workstation) | 0 | 2026-09-04 | 2026-09-04 | dsh全模态工作站插件，让模型支持视频、图片、语音的输入与输出，支持comfyui图像生成工具调用。Any-to-Any. |
| 80 | [ice5kysl/dsh-workspace-kit](https://github.com/ice5kysl/dsh-workspace-kit) | 0 | 2026-09-04 | 2026-09-04 | dsh (DeepSeek Harness) workspace kit: ⌘K Spotlight search, soft workspace archive/restore, per-workspace icons/colors, enhanced sidebar with drag reorder — Cordis bundle plugin (host tools + browser client). |
| 81 | [Islulua/dsh-code-navigator](https://github.com/Islulua/dsh-code-navigator) | 0 | 2026-09-02 | 2026-09-04 | Persistent C/C++, Python, and TypeScript code navigation for DeepSeek Harness. |
| 82 | [jaychouu/see_the_screen](https://github.com/jaychouu/see_the_screen) | 0 | 2026-09-04 | 2026-09-04 | Windows desktop automation plugin for DeepSeek Harness (DSH) agents. Part of DSH Plugin Ecosystem. |
| 83 | [jcaiagent7143-ui/linkdigest-mcp](https://github.com/jcaiagent7143-ui/linkdigest-mcp) | 0 | 2026-09-03 | 2026-09-04 | MCP server for LinkDigest — turn a Xiaohongshu, Douyin, TikTok, YouTube or X link into LLM-ready text: transcript, on-screen text, image descriptions, caption and metadata. Streamable HTTP. |
| 84 | [jhckevin/dsh-request-privacy](https://github.com/jhckevin/dsh-request-privacy) | 0 | 2026-09-04 | 2026-09-04 | Live request metadata minimization for DeepSeek Harness, covering the native DeepSeek provider with WebUI settings. |
| 85 | [kristol07/dsh-discussions-digest](https://github.com/kristol07/dsh-discussions-digest) | 0 | 2026-09-04 | 2026-09-04 | A small, evidence-first DeepSeek Harness plugin for recent activity in the official GitHub Discussions. |
| 86 | [KumarZX/dsh-memory-wrap](https://github.com/KumarZX/dsh-memory-wrap) | 0 | 2026-09-04 | 2026-09-04 | DSH plugins: idle memory wrap-up sidebar plus vault search, distill, and rules. |
| 87 | [LamplitIsles/kepos-speech](https://github.com/LamplitIsles/kepos-speech) | 0 | 2026-08-29 | 2026-09-04 | Qwen/Volcengine TTS/STT for dsh |
| 88 | [lcthe/dsh-hermes-memory](https://github.com/lcthe/dsh-hermes-memory) | 0 | 2026-08-26 | 2026-09-04 | DSH-native persistent memory and safe session-aware retrieval plugin |
| 89 | [leeseo39/dsh-we-wallpaper](https://github.com/leeseo39/dsh-we-wallpaper) | 0 | 2026-09-04 | 2026-09-04 | Wallpaper Engine assets as DeepSeek Harness dynamic background — upstream skin-center 0.3.14 source snapshot + self-built WE engine research |
| 90 | [lovezi0/dsh-visualizer-widget](https://github.com/lovezi0/dsh-visualizer-widget) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 的会话流「内联可视化」插件：模型产出 SVG / HTML 源码后，交给浏览器渲染成一张可交互的内联卡片，源码只进卡片、不回灌模型上下文。 |
| 91 | [loyalchiiina/dsh-skill-browser](https://github.com/loyalchiiina/dsh-skill-browser) | 0 | 2026-09-04 | 2026-09-04 | DSH skill library browser with floating ball panel, categories, Chinese descriptions, and an automatic skill-failure ledger (tools/result based). DSH 技能浏览器：悬浮球面板 + 分类 + 中文简介 + 技能失效台账自动登记 |
| 92 | [luoxin10086/dsh-session-doctor](https://github.com/luoxin10086/dsh-session-doctor) | 0 | 2026-09-04 | 2026-09-04 | Session doctor for DeepSeek Harness: scan/repair/watch stored session logs against loader-mirror validation, plus render-contract audit. 会话体检与修复插件。 |
| 93 | [luoxunhao/dsh-codex-project](https://github.com/luoxunhao/dsh-codex-project) | 0 | 2026-09-02 | 2026-09-04 | codex风格的项目管理，可以给dsh项目增加附加目录，访问附加目录不需要full-access权限，方便多项目开发，可配合dsh-better-sidebar插件使用。 |
| 94 | [marcemira/dsh-theme-nier-automata](https://github.com/marcemira/dsh-theme-nier-automata) | 0 | 2026-09-03 | 2026-09-04 | NieR:Automata-inspired YoRHa theme for DeepSeek Harness web |
| 95 | [mokuyoaxis/dsh-iris](https://github.com/mokuyoaxis/dsh-iris) | 0 | 2026-09-04 | 2026-09-04 | Media generation and visual understanding for DeepSeek Harness, with multi-provider routing and the integrated Iris workbench. |
| 96 | [Momojie-S/dsh-subagent-steer](https://github.com/Momojie-S/dsh-subagent-steer) | 0 | 2026-09-04 | 2026-09-04 | DSH plugin: steer_subagent - insert a new instruction into a running background subagent's current turn (step-boundary steering) or hard-restart its turn; send_message queueing stays the default |
| 97 | [nishuoyang/dsh-workbench-ecs](https://github.com/nishuoyang/dsh-workbench-ecs) | 0 | 2026-09-04 | 2026-09-04 | Alibaba Cloud Workbench CLI plugin — lets DeepSeek Harness's Agent directly control remote ECS instances. |
| 98 | [qiqiangvae/dsh-newbe-plugins](https://github.com/qiqiangvae/dsh-newbe-plugins) | 0 | 2026-09-03 | 2026-09-04 | 个人使用 DSH 的增强插件，包括收藏功能、输入锁和会话工具收纳等功能 |
| 99 | [QuanhuZeYu/dsh-idle-compactor](https://github.com/QuanhuZeYu/dsh-idle-compactor) | 0 | 2026-09-04 | 2026-09-04 | Idle-triggered context compaction plugin for DeepSeek Harness: compact a session once it goes quiet past a configurable token floor. |
| 100 | [retmon2333/dsh-background](https://github.com/retmon2333/dsh-background) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness（DSH）背景壁纸更换（单图 / 文件夹轮播）模式，可调透明、模糊、遮罩与樱花／雪花特效，侧栏与输入框也能透出壁纸 |
| 101 | [seeingrain/dsh-session-todos](https://github.com/seeingrain/dsh-session-todos) | 0 | 2026-09-03 | 2026-09-04 | 会话内待办事项：DSH 悬浮待办面板 + 服务器端跨端存储 + 会话列表未完成图标 |
| 102 | [shangfr/dsh-md-picker](https://github.com/shangfr/dsh-md-picker) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness Web GUI 插件：在会话输入框左侧添加一个「文档 + Markdown」按钮，通过系统文件选择器添加附件并转换成 Markdown 格式。 |
| 103 | [softspark/dsh-file-preview](https://github.com/softspark/dsh-file-preview) | 0 | 2026-09-04 | 2026-09-04 | Read-only in-conversation file preview for DeepSeek Harness: a session-authorized host Remote and a sanitizing browser modal, installed as one profile bundle. |
| 104 | [sxy-kumako/dsh-better-model-select](https://github.com/sxy-kumako/dsh-better-model-select) | 0 | 2026-09-04 | 2026-09-04 | DSH 插件：模型列表跟随 provider API 实时更新 + 各 provider 用量徽标 (GLM/MiniMax coding plan, DeepSeek/OpenRouter/Kimi balance) |
| 105 | [tappat225/dsh-provider-hub](https://github.com/tappat225/dsh-provider-hub) | 0 | 2026-08-28 | 2026-09-04 | 自定义参数provider面板 |
| 106 | [thomasly/dsh-markdown-preview](https://github.com/thomasly/dsh-markdown-preview) | 0 | 2026-09-04 | 2026-09-04 | DSH web plugin: live Markdown + KaTeX math preview above the composer (official slot, zero core patches) |
| 107 | [tntcannon5000/dsh-chat-fold](https://github.com/tntcannon5000/dsh-chat-fold) | 0 | 2026-09-03 | 2026-09-04 | Compact turn folding for DeepSeek Harness Web: restores collapsed completed turns in long sessions where stock folding stays disabled. |
| 108 | [UnknowCao/dsh-dock](https://github.com/UnknowCao/dsh-dock) | 0 | 2025-11-09 | 2026-09-04 | One-click desktop launcher for DSH Harness: whale exe + sidebar More menu (Settings/Reload/Full Exit) |
| 109 | [VinciBeans/dsh-web-search-anysearch](https://github.com/VinciBeans/dsh-web-search-anysearch) | 0 | 2026-09-04 | 2026-09-04 | AnySearch-backed WebSearchProvider for DeepSeek Harness (dsh): switch web_search between the official DeepSeek search endpoint and AnySearch from a Plugins settings card. |
| 110 | [wangmuy/dsh-provider-dispatcher](https://github.com/wangmuy/dsh-provider-dispatcher) | 0 | 2026-09-04 | 2026-09-04 | A generic provider dispatcher for DeepSeek Harness that lets multiple child plugins(ordinary DSH plugin) work together behind one capability. |
| 111 | [Wisdoverse/dsh-git-auth-plugin](https://github.com/Wisdoverse/dsh-git-auth-plugin) | 0 | 2026-09-04 | 2026-09-04 | GitHub, GitLab, and SSH authentication tools for DeepSeek Harness, with environment-only tokens, approval-aware writes, and safe SSH key handling. |
| 112 | [WLV-ZEDD/dsh-btw](https://github.com/WLV-ZEDD/dsh-btw) | 0 | 2026-09-03 | 2026-09-04 | DeepSeek Harness Side-Assistant Dock & Drawer |
| 113 | [wushu75/conceptnet-dsh-plugin](https://github.com/wushu75/conceptnet-dsh-plugin) | 0 | 2026-09-03 | 2026-09-04 | ConceptNet intent classification plugin for DeepSeek Harness. Classifies enterprise voice and text commands into 4 execution layers — Basic, Context-Aware, Predictive, Autonomous — at 100% accuracy. 9 languages. Token-free. No LLM required. |
| 114 | [wuwei6666/dsh-pluginGuard](https://github.com/wuwei6666/dsh-pluginGuard) | 0 | 2026-09-04 | 2026-09-04 | Plugin Guard for DeepSeek Harness (DSH): isolate broken plugins so the web UI never goes down, with one-click self-update from npm. |
| 115 | [wxj783428795/dsh-plugins](https://github.com/wxj783428795/dsh-plugins) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness 多插件开发仓库 |
| 116 | [xgone/dsh-netshell](https://github.com/xgone/dsh-netshell) | 0 | 2026-09-02 | 2026-09-04 | DSH 远程终端插件:在 Web UI 直连 SSH,危险命令三级护栏,AI 命令须真人确认,密码加密存储、不进 AI 会话 \| Remote SSH terminal plugin for DeepSeek Harness: 3-level command guard, human-approved AI commands, encrypted credentials |
| 117 | [xia-sc/dsh-opencode-go](https://github.com/xia-sc/dsh-opencode-go) | 0 | 2026-09-04 | 2026-09-04 | DeepSeek Harness LLM provider plugin for OpenCode Go (zen-go route) |
| 118 | [XiaoYuOvO/dsh-external-session](https://github.com/XiaoYuOvO/dsh-external-session) | 0 | 2026-09-04 | 2026-09-04 | Portable Git-backed external session persistence plugin for DeepSeek Harness |
| 119 | [yangbobo2021/relay-dsh-plugin-skill-creator](https://github.com/yangbobo2021/relay-dsh-plugin-skill-creator) | 0 | 2026-09-04 | 2026-09-04 | DSH plugin that turns completed conversations into reusable, validated Skill bundles |
| 120 | [Yinxe/dsh-custom-ui](https://github.com/Yinxe/dsh-custom-ui) | 0 | 2026-09-04 | 2026-09-04 | DSH 主题画廊：8 套 open-design 主题（OpenCode/Linear/Notion/Claude/NVIDIA/GitHub）全量 token 映射 + 设置页一键切换 + 偏好持久化与守护 |
| 121 | [YrracOwl/dsh-mcp-pill](https://github.com/YrracOwl/dsh-mcp-pill) | 0 | 2026-09-04 | 2026-09-04 | EN: Lifecycle-safe MCP status pill for DSH Web. 中文：面向 DSH Web 的生命周期安全 MCP 状态胶囊。 |
| 122 | [YrracOwl/dsh-subagent-conductor](https://github.com/YrracOwl/dsh-subagent-conductor) | 0 | 2026-09-04 | 2026-09-04 | EN: Lifecycle-safe subagent routing and role controls for DSH Web. 中文：面向 DSH Web 的生命周期安全子代理路由与角色控制。 |
| 123 | [YrracOwl/dsh-theme-acid-noir](https://github.com/YrracOwl/dsh-theme-acid-noir) | 0 | 2026-09-04 | 2026-09-04 | EN: Usability-first cyber-editorial themes for DSH Web. 中文：面向 DSH Web、重视可用性的赛博编辑主题。 |
| 124 | [YrracOwl/dsh-theme-cutout-clash](https://github.com/YrracOwl/dsh-theme-cutout-clash) | 0 | 2026-09-04 | 2026-09-04 | EN: Neo-brutalist and pop-art themes with calm reading surfaces for DSH Web. 中文：面向 DSH Web、兼顾安静阅读表面的新粗野主义与波普艺术主题。 |
| 125 | [YrracOwl/dsh-tool-adapt](https://github.com/YrracOwl/dsh-tool-adapt) | 0 | 2026-09-04 | 2026-09-04 | EN: Safety and compatibility layer for non-DeepSeek models in DSH Web. 中文：面向 DSH Web 非 DeepSeek 模型的安全兼容适配层。 |
| 126 | [yuandian-ailaw/yuandian_dsh_plugin](https://github.com/yuandian-ailaw/yuandian_dsh_plugin) | 0 | 2026-09-04 | 2026-09-04 | 华语元典法律数据（deepseek harness ）官方插件 |
| 127 | [zachshi-ai/newmind](https://github.com/zachshi-ai/newmind) | 0 | 2026-09-04 | 2026-09-04 | 老思想 × 新智能 实验室：每门经典思想精确解决一个 AI 真实问题。#1 知止 zhizhi — DeepSeek Harness 的行为节制层（道德经 × Agent 可靠性） |
| 128 | [ZF3373/dsh-algo-trainer](https://github.com/ZF3373/dsh-algo-trainer) | 0 | 2026-09-04 | 2026-09-04 | ICPC competitive programming training plugin for DeepSeek Harness — sync, analysis, plans, reviews, templates |
| 129 | [zgxaxdd/dsh-html-render](https://github.com/zgxaxdd/dsh-html-render) | 0 | 2026-09-04 | 2026-09-04 | Inline HTML + KaTeX renderer for DeepSeek Harness (DSH) chats - sandboxed iframes, theme-adaptive, height-accurate, zero network |
| 130 | [zhangmiao03/dsh-cloak](https://github.com/zhangmiao03/dsh-cloak) | 0 | 2026-09-04 | 2026-09-04 | Context firewall for DeepSeek Harness: credentials in tool results become opaque placeholders before they reach the model — the secret never enters context. |
| 131 | [zhm20001/dsh-diary](https://github.com/zhm20001/dsh-diary) | 0 | 2026-09-04 | 2026-09-04 | dsh 日记插件：纸感信纸风 web 页写日记，原文先落盘、AI 评注后生成 · Diary plugin for dsh (DeepSeek Harness) |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 0sour/dsh-plugins
- ALwith-ai/alwith-dsh
- BaronCyrus/dsh-ugui-preset
- CJYLZS/dsh-commandcode-plan-autosync
- FylarOpen/fylar-office-editor
- Gandufu/dsh-plugin
- jilian-dsh/dsh-rules-manager
- KKKneko/dsh-search-enhance
- LamplitIsles/kepos-tts
- Lion-1209/dsh-plugin-wiki-skills
- Lion-1209/dsh-plugin-wiki-tools
- luoxunhao/deepseek-harness-plugins
- lussey820/dsh-essentials-bundle
- Miss-zhao-source/dsh-wsl-launcher
- wangweber/dsh-my-todo
- whyitsy/dsh-plugins
