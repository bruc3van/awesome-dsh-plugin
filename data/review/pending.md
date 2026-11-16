# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-16**
- 快照日期 / Snapshot date: **2026-11-16 (UTC)**
- 待审核 / Pending: **402**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **37**
- Star 异常增长 / Star-growth alerts: **12** — 先看下方告警节 / see the alert section first
- 改名/身份待复核 / Renames pending review: **38**

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

对比上一份快照 **2026-11-15** / vs previous snapshot **2026-11-15**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [oneclickvirt/ecs](https://github.com/oneclickvirt/ecs) | 待审 / pending | 2477 | — | 155 | 873d | 待审高星 | 核准即 Top 13 |
| ⚠️ [omagents/omagents](https://github.com/omagents/omagents) | 待审 / pending | 360 | — | 0 | 129d | 待审高星 | 核准即榜 #79；高星零 fork |
| ⚠️ [Li-Evan/BloomTutor](https://github.com/Li-Evan/BloomTutor) | 待审 / pending | 312 | — | 44 | 250d | 待审高星 | 核准即榜 #89 |
| ⚠️ [AI4XE/Parallax](https://github.com/AI4XE/Parallax) | 待审 / pending | 129 | — | 0 | 0d | 待审高星 | 核准即榜 #196；创建 0 天；高星零 fork |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 77272 | +1601 | 2181 | 52d | 日增百星 | 日增 +1601★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 19342 | +228 | 659 | 94d | 日增百星 | 日增 +228★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 8084 | +181 | 799 | 39d | 日增百星 | 日增 +181★ |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1464 | +147 | 7 | 35d | 日增百星 | 日增 +147★；★/fork 209.1；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 75300 | +139 | 2711 | 418d | 日增百星 | 日增 +139★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 7192 | +123 | 118 | 91d | 日增百星 | 日增 +123★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12641 | +120 | 483 | 93d | 日增百星 | 日增 +120★；已不进榜单 |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 3074 | +101 | 232 | 93d | 日增百星 | 日增 +101★；已不进榜单 |

## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `MakotoNikki/dsh-discord-rich` → `wisqqud/dsh-discord-rich` — owner changed — transfer needs review
- `tech-zerolei/dsh-token-summary` → `wanwen371/dsh-token-summary` — owner changed — transfer needs review
- `hexiangyu0730-web/dsh-web-bridge` → `LunarYu730/dsh-web-bridge` — owner changed — transfer needs review
- `rightnowrose/dsh-ai-fastvideo` → `VeillessRose/dsh-ai-fastvideo` — owner changed — transfer needs review
- `acryldev/dsh-cordis` → `cordisplugins/dsh-cordis` — owner changed — transfer needs review
- `acryldev/pi-cordis` → `cordisplugins/pi-cordis` — owner changed — transfer needs review
- `AdamPlatin123/awesome-dsh-plugins` → `AdamPlatin123/dsh-plugin-radar` — target slug already exists with different data — needs review
- `akqwpeter-prog/skill-bartender` → `MJorgin/skill-bartender` — owner changed — transfer needs review
- `alibaba/anolisa` → `agentic-os-org/ANOLISA` — owner changed — transfer needs review
- `amruthpillai/reactive-resume` → `reactive-resume/reactive-resume` — owner changed — transfer needs review
- `DaYanHCD/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `DaYanQLQ/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `dongliuwuzhong-arch/dsh-purge-021rc2` → `dongliuwuzhong-arch/DSH-purge` — target slug already exists with different data — needs review
- `drewnekota/cetus` → `william-jin-cmu/cetus` — owner changed — transfer needs review
- `fgm-builds/corti` → `pgmi-builds/corti` — owner changed — transfer needs review
- `GCWing/BitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `GCWing/OpenBitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `hairyf/deepseek-harness-desktop` → `dsh-tauri/deepseek-harness-desktop` — owner changed — transfer needs review
- `HarcoChen/deepseek-harness-vscode` → `HarcoChen/dsh-vsc-integration` — target slug already exists with different data — needs review
- `ice5kysl/dsh-plugin-insights` → `ice5kysl/dsh-insights` — target slug already exists with different data — needs review
- `jarvis-intelligence/jarvis` → `phuongddx/jarvis` — owner changed — transfer needs review
- `liangwythu/deepseek-harness-vscode` → `YichuAI/deepseek-harness-vscode` — owner changed — transfer needs review
- `Lixxx1/dsh-vscode` → `omdsh-dev/dsh-vscode` — owner changed — transfer needs review
- `Lyn-77/ProMentor` → `0xLyn77/ProMentor` — owner changed — transfer needs review
- `scientificmaniac/dsh-account-usage` → `scientificmaniac/dsh-weekstrip` — target slug already exists with different data — needs review
- `shell-error/deepseek-harness-remote-access` → `safety10086/deepseek-harness-remote-access-shell-error-old` — owner changed — transfer needs review
- `show-thesky/every-thing-is-possible` → `show-thesky/bing` — target slug already exists with different data — needs review
- `Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report` → `Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.6` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.7` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `TNJ2026/orbit-runtime` → `TNJ2026/promptaflow` — target slug already exists with different data — needs review
- `weshopai/weshop-skill-pakage` → `weshopai/weshop-skill-package` — target slug already exists with different data — needs review
- `wgd753/awesome-dsh-plugin` → `Wenston-dev/awesome-dsh-plugin` — owner changed — transfer needs review
- `xiaoxianxian/multi-proxy` → `sif-king/costgate` — owner changed — transfer needs review
- `zendev-lab/cogfold` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `zendev-lab/spark` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `sol5766/dshm_client` → `sol5766/dshm` — target slug already exists with different data — needs review
- `Watchcats211/dsh-podwave` — identity change: repository id 1454853541 → 1459521812 under the same slug — approval needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [oneclickvirt/ecs](https://github.com/oneclickvirt/ecs) ⚠️ | 2477 | 2024-06-25 | 2026-11-16 | VPS Fusion Monster — Server Benchmark (Go Edition) Aims to be the most comprehensive and fastest server benchmarking project, built in Go with zero external dependencies.  VPS 融合怪服务器测评项目 · Go 版本 致力于成为最全面和最快速的服务器测评项目，使用 Go 语言实现，零环境依赖零广告 |
| 2 | [omagents/omagents](https://github.com/omagents/omagents) ⚠️ | 360 | 2026-07-09 | 2026-11-16 | Agent toolkit for OpenCode, Codex, and DeepSeek Harness: skills, MCP, background agents, and durable job tracking |
| 3 | [Li-Evan/BloomTutor](https://github.com/Li-Evan/BloomTutor) ⚠️ | 312 | 2026-03-10 | 2026-11-16 | Open-source AI tutor for personalized learning: Socratic, adaptive lessons to learn anything. Claude Code skill + self-hosted web app. Bloom 2 Sigma · 开源 AI 家教 |
| 4 | [AI4XE/Parallax](https://github.com/AI4XE/Parallax) ⚠️ | 129 | 2026-11-15 | 2026-11-16 | A hands-off development plugin for AI coding agents (Claude Code, DeepSeek Harness, GitHub Copilot and more) |
| 5 | [xx-hub/dsh-craft-your-textbook](https://github.com/xx-hub/dsh-craft-your-textbook) | 15 | 2026-08-21 | 2026-11-16 | DeepSeek Harness workbench that turns textbook PDFs into a teaching blueprint an AI tutor can teach from — or a readable textbook. Six-stage pipeline with human checkpoints. |
| 6 | [dennisyang1986/polymarket-proxy](https://github.com/dennisyang1986/polymarket-proxy) | 9 | 2026-11-16 | 2026-11-16 | Polymarket Proxy — a local Polymarket desk inside DeepSeek Harness: deposit address, portfolio, market radar and live trading when the official site is unavailable. |
| 7 | [fatwang2/dsh-projects](https://github.com/fatwang2/dsh-projects) | 8 | 2026-11-16 | 2026-11-16 | Project board for DeepSeek Harness — one goal, shared memory, parallel worker agents. |
| 8 | [mzzsfy/dsh-plugin](https://github.com/mzzsfy/dsh-plugin) | 6 | 2026-09-02 | 2026-11-16 | deepseek harness 插件维护仓库, 个人开发的所有dsh插件都在这 |
| 9 | [BaiKe-Zhang/dsh-mindmark](https://github.com/BaiKe-Zhang/dsh-mindmark) | 5 | 2026-11-16 | 2026-11-16 | Show the model your mind: mark up an answer like in Word (highlight / underline / strike / comment / rewrite) and DeepSeek Harness feeds your markup back to the model on the next turn. |
| 10 | [CYF736222347/dsh-workspace-status-board](https://github.com/CYF736222347/dsh-workspace-status-board) | 3 | 2026-11-16 | 2026-11-16 | Status-first workspace board for the DSH sidebar: sorts workspaces and tasks by needs-input, running, then done; search, same-status drag ordering, archive/restore, and three status markers. |
| 11 | [Mianbier/dsh-mimo-web-login](https://github.com/Mianbier/dsh-mimo-web-login) | 3 | 2026-11-03 | 2026-11-16 | 把小米 MiMo AI Studio 网页端接进 DSH：用浏览器登录态（不是 API Key）驱动 agent |
| 12 | [aik8s/cubesandbox-agent-adapter](https://github.com/aik8s/cubesandbox-agent-adapter) | 2 | 2026-08-29 | 2026-11-16 | Policy-controlled CubeSandbox execution adapter for OpenClaw and DeepSeek Harness |
| 13 | [arch3rPro/Skills-Space](https://github.com/arch3rPro/Skills-Space) | 2 | 2026-11-02 | 2026-11-16 | Desktop application for discovering, installing, and managing skills across AI agents, powered by Tauri and the original skills CLI. |
| 14 | [Century-Ula/dsh-roblox-Blender](https://github.com/Century-Ula/dsh-roblox-Blender) | 2 | 2026-10-22 | 2026-11-16 | Drive Roblox Studio and Blender / 3ds Max from DeepSeek Harness (DSH): the ZeroScript-Free bridge as a native plugin, with 30+ Studio tools, headless DCC builds, a web console, and no terminal window. |
| 15 | [DrizzleGig/dsh-novel-fade](https://github.com/DrizzleGig/dsh-novel-fade) | 2 | 2026-11-16 | 2026-11-16 | 长篇小说的「褪色记忆层」：近章重点记，旧事逐步淡。读完简报再写章，原文只存不用。 |
| 16 | [DrizzleGig/dsh-novel-fanfic](https://github.com/DrizzleGig/dsh-novel-fanfic) | 2 | 2026-11-16 | 2026-11-16 | 同人工作室：原著可核 canon、本作设定、场景契约与写作检查。原著是参考，你的故事由你决定。 |
| 17 | [duo121/dsh-session-hub](https://github.com/duo121/dsh-session-hub) | 2 | 2026-11-16 | 2026-11-16 | 🐳 DSH Session hub plugin (会话中心插件) |
| 18 | [GCS-ZHN/mol4agent](https://github.com/GCS-ZHN/mol4agent) | 2 | 2026-11-15 | 2026-11-16 | visualize molecular files in many agent harness |
| 19 | [jinchezuo/dsh-interpret](https://github.com/jinchezuo/dsh-interpret) | 2 | 2026-11-16 | 2026-11-16 | Local English-Chinese live interpretation for DeepSeek Harness: mic/system audio, terminology-aware captions, handout reader. macOS/Windows. |
| 20 | [kir-sleeping/DSH-relay](https://github.com/kir-sleeping/DSH-relay) | 2 | 2026-11-14 | 2026-11-16 | 让你的任何应用轻松接入DSH |
| 21 | [Thao6020/dsh-fuck](https://github.com/Thao6020/dsh-fuck) | 2 | 2026-11-16 | 2026-11-16 | DSH 插件设置面板：破甲 / 逆向 两套模式，会话内小按钮点开设置；逆向模式动态挂载 9 个逆向技能（IDA / x64dbg / Ghidra）。 |
| 22 | [180lisilence/dsh-floating-ball](https://github.com/180lisilence/dsh-floating-ball) | 1 | 2026-11-16 | 2026-11-16 | dsh-floating-ball |
| 23 | [Aclguh/dsh-work-or-chat](https://github.com/Aclguh/dsh-work-or-chat) | 1 | 2026-11-16 | 2026-11-16 | Switch between DeepSeek Harness work mode and the official chat-demo UI, with local history and ZIP import. |
| 24 | [Alpha961/gd-product-kit](https://github.com/Alpha961/gd-product-kit) | 1 | 2026-11-16 | 2026-11-16 | 搞定产品设计包 · VibeCoding 项目工作台（DSH 插件） |
| 25 | [banzhangdeerfenzhiyi/dsh-voicepack-plugin](https://github.com/banzhangdeerfenzhiyi/dsh-voicepack-plugin) | 1 | 2026-10-28 | 2026-11-16 | Voice pack for the DSH WeChat persona: 15 Edge neural voices (female/male/dialects) plus RVC timbres, sent as native WeChat voice bubbles. |
| 26 | [banzhangdeerfenzhiyi/dsh-wechat-deploy-plugin](https://github.com/banzhangdeerfenzhiyi/dsh-wechat-deploy-plugin) | 1 | 2026-10-28 | 2026-11-16 | DSH WeChat hook deploy/diagnose tools: status, prepare, launch, restart, build and service management for the pinned WeChat 4.1.10.27 hook. |
| 27 | [bitsmug/bgjob-mcp](https://github.com/bitsmug/bgjob-mcp) | 1 | 2026-11-16 | 2026-11-16 | bgjobs 的可选扩展插件：把 一次 MCP 工具调用 提交成由 schtasks 托管的后台任务，并提供 MCP server 的登记、预热与设置页。 |
| 28 | [daerwen122/dsh-cpp-compiler](https://github.com/daerwen122/dsh-cpp-compiler) | 1 | 2026-09-29 | 2026-11-16 | 优秀的cpp AI调用工具 |
| 29 | [DewFill/dsh-favorite-models](https://github.com/DewFill/dsh-favorite-models) | 1 | 2026-11-16 | 2026-11-16 | Favourites for the DeepSeek Harness model menu — the models you reach for most, gathered in one place. |
| 30 | [Ejinhouse/dsh-turn-timeline](https://github.com/Ejinhouse/dsh-turn-timeline) | 1 | 2026-11-16 | 2026-11-16 | DSH 插件：左侧栏「任务时间线」面板，把每个 turn 的交付物、台账与文件变更排成一条可回溯的时间轴。零依赖、零 token。 |
| 31 | [Endorphin1203/dsh-side-chat](https://github.com/Endorphin1203/dsh-side-chat) | 1 | 2026-11-06 | 2026-11-16 | 在 DeepSeek Harness 对话中选中文字，添加到当前对话，或在只读的临时侧边聊天中追问；支持多选摘要、模型/推理等级选择、原生输入框追问和关闭归档。 |
| 32 | [EternalNight996/publish-kit](https://github.com/EternalNight996/publish-kit) | 1 | 2026-08-28 | 2026-11-16 | Release playbook for AI agents covering npm / GitHub / Gitee / DSH marketplace / cargo crates.io / PyPI / PyInstaller multi-channel publish, bilingual README, git tag SOP, npm slimming. |
| 33 | [FaTionWu/dsh-fish-soul-patches](https://github.com/FaTionWu/dsh-fish-soul-patches) | 1 | 2026-11-16 | 2026-11-16 | Unofficial experience patches for dsh-fish-soul (MIT): continuity, auto-continue, reasoning fallback, daily X topics, settings UI. Not affiliated with upstream. |
| 34 | [hh5631/dsh-plugin-updater](https://github.com/hh5631/dsh-plugin-updater) | 1 | 2026-11-12 | 2026-11-16 | 在 DSH Web 的已安装插件列表检查并安装兼容更新 |
| 35 | [hyy124871/dsh-plugin-ai-diary](https://github.com/hyy124871/dsh-plugin-ai-diary) | 1 | 2026-11-16 | 2026-11-16 | AI 角色日记短剧流水线：选题 → 剧本 → 本地渲染 → 配音 → B 站客户端投稿（DeepSeek Harness 插件） |
| 36 | [imuyue/dsh-session-optimizer](https://github.com/imuyue/dsh-session-optimizer) | 1 | 2026-11-16 | 2026-11-16 | Keep every conversation fluid. |
| 37 | [JingYu-er/dsh-kb](https://github.com/JingYu-er/dsh-kb) | 1 | 2026-11-14 | 2026-11-16 | dsh插件：ai知识库 |
| 38 | [keli-wen/cospan](https://github.com/keli-wen/cospan) | 1 | 2026-11-15 | 2026-11-16 | Orchestrate every model in its native harness — unified async delegation across Antigravity, Codex, Claude Code, and DeepSeek Harness. |
| 39 | [KevinMKRL/dsh-windows-screenshot](https://github.com/KevinMKRL/dsh-windows-screenshot) | 1 | 2026-11-16 | 2026-11-16 | Windows-native area, window, and full-screen screenshots with delay, attached directly to the DeepSeek Harness composer. |
| 40 | [liweitan2046-cyber/dsh-bili-lesson](https://github.com/liweitan2046-cyber/dsh-bili-lesson) | 1 | 2026-11-16 | 2026-11-16 | 星火课堂 — DSH 插件：B 站少儿科普片库 + 每周排片 + 课卡答题 + 错题本 + 勋章盲盒 + 家长锁 \| Spark Classroom — a DSH plugin for curated Bilibili learning: weekly schedule, quiz cards, mistakes review, medals, parent lock |
| 41 | [LunarYu730/dsh-web-bridge](https://github.com/LunarYu730/dsh-web-bridge) | 1 | 2026-11-10 | 2026-11-16 | 基于 @xueray/dsh-web-bridge 0.4.5 的修改版：网页对话输入框支持粘贴与拖放附件。非官方 fork，PolyForm Noncommercial 1.0.0。上游 PR: https://github.com/SaiSenBox/dsh-web-bridge/pull/1 |
| 42 | [lw24-1936/dsh-memweave](https://github.com/lw24-1936/dsh-memweave) | 1 | 2026-11-14 | 2026-11-16 | Memweave is a DSH organizational memory and task-evolution plugin. It decomposes goals into task networks, captures verifiable judgments and anti-patterns, and tracks iteration with measurable Loops. Features visual storage settings, category browsing, lifecycle management, and data exchange with existing plugins. |
| 43 | [matrix1001/dsh-application-harness](https://github.com/matrix1001/dsh-application-harness) | 1 | 2026-11-16 | 2026-11-16 | NEXT GEN application platform based on Deepseek Harness |
| 44 | [Memerybeauty/aggregate-reconcile](https://github.com/Memerybeauty/aggregate-reconcile) | 1 | 2026-11-16 | 2026-11-16 | 本地优先的个人账单对账、分类与 ChatBI（DSH 插件） |
| 45 | [Memerybeauty/dsh-litkb](https://github.com/Memerybeauty/dsh-litkb) | 1 | 2026-11-06 | 2026-11-16 | 文献知识库：收文、精读、证据链、横向对比、可追溯检索 |
| 46 | [mikeoborotov/dsh-tinker](https://github.com/mikeoborotov/dsh-tinker) | 1 | 2026-10-06 | 2026-11-16 | Everyday usability upgrades - workspace icons, AI model logos, unread reminders, profile styling, cleaner sidebar. |
| 47 | [natgurlain/dsh-browser-agent](https://github.com/natgurlain/dsh-browser-agent) | 1 | 2026-11-14 | 2026-11-16 | AI agent for your real browser that asks before it acts. Browser extension + DeepSeek Harness (DSH) plugin: approval cards, kill switch, and rules that assume web pages are hostile. |
| 48 | [niko4244/dsh-plugin-huihui-gemma](https://github.com/niko4244/dsh-plugin-huihui-gemma) | 1 | 2026-11-16 | 2026-11-16 | Huihui Gemma 4 12B (local llama.cpp) provider for DeepSeek Harness, with a chat and tool-call compatibility adapter. |
| 49 | [OldQin-Aurora/dsh-breeze-tts](https://github.com/OldQin-Aurora/dsh-breeze-tts) | 1 | 2026-11-16 | 2026-11-16 | Breeze TTS for DeepSeek Harness: AI auto-read (local runtime) plus voice workshop — design, clone and manage voices. |
| 50 | [qikairo7/dsh-web-search](https://github.com/qikairo7/dsh-web-search) | 1 | 2026-11-14 | 2026-11-16 | Free-tier-first web search and fetch providers for DeepSeek Harness: quality pipeline, keyless Bing floor, failure-class fallback gating |
| 51 | [rong-coder/dsh-ssh](https://github.com/rong-coder/dsh-ssh) | 1 | 2026-11-16 | 2026-11-16 | SSH workspace plugin for DeepSeek Harness: manage servers, keys, passwords and agents, and run remote commands from the agent. |
| 52 | [Root-7-KHX/habit-hint](https://github.com/Root-7-KHX/habit-hint) | 1 | 2026-11-04 | 2026-11-16 | Habit-hint local small model for DeepSeek Harness — reads recent chat, outputs habits/key points/hints, injects them as prompt hints; conversation-count-triggered auto training. |
| 53 | [SiriusWJ/dsh-dotnet-skills](https://github.com/SiriusWJ/dsh-dotnet-skills) | 1 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: mirrors a GitHub .NET skill catalog (default managedcode/dotnet-skills) into the DSH user skill root every 6 hours. |
| 54 | [snoworwind/pocket-harness-ohos](https://github.com/snoworwind/pocket-harness-ohos) | 1 | 2026-11-15 | 2026-11-16 | DeepSeek Harness 的 HarmonyOS 原生版：官方 Web GUI + IEC 原生执行核 + libvterm 终端 |
| 55 | [stallenlu/dsh-freebie-radar](https://github.com/stallenlu/dsh-freebie-radar) | 1 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin for ZiChuanLan/freebie-radar (资源雷达) — agent tool + sidebar workbench panel |
| 56 | [tangolee/dsh-sidebar-tuner](https://github.com/tangolee/dsh-sidebar-tuner) | 1 | 2026-11-16 | 2026-11-16 | dsh侧边栏字体、样式修改插件 |
| 57 | [topmindspace/dsh-super-mind](https://github.com/topmindspace/dsh-super-mind) | 1 | 2026-11-16 | 2026-11-16 | Personal local-first content studio plugin for DeepSeek Harness — manage Obsidian/Markdown drafts, approved reserves, media assets, multi-style AI rewriting, and X thread splitting. |
| 58 | [Wanqiu12345/dsh-session-matrix](https://github.com/Wanqiu12345/dsh-session-matrix) | 1 | 2026-11-16 | 2026-11-16 | A multi-agent workspace for DeepSeek Harness. Run parallel sessions, visualize agent relationships, monitor context usage, and manage task handoffs. |
| 59 | [whynpc9/dsh-t3code-sidebar](https://github.com/whynpc9/dsh-t3code-sidebar) | 1 | 2026-11-08 | 2026-11-16 | A T3 Code-style task sidebar for DeepSeek Harness, with session grouping and snooze (preview). |
| 60 | [windxxf/dsh-nvidia-models-panel](https://github.com/windxxf/dsh-nvidia-models-panel) | 1 | 2026-11-14 | 2026-11-16 | NVIDIA 模型面板，侧栏面板，用于发现和配置 NVIDIA NIM 模型，带有模型简介 |
| 61 | [wisyh/dsh-session-compaction](https://github.com/wisyh/dsh-session-compaction) | 1 | 2026-11-16 | 2026-11-16 | Context-pressure ball for DeepSeek Harness: live occupancy, heat colouring, and a user-set threshold that compacts between turns instead of interrupting them. |
| 62 | [wzn16/dsh-mcp-studio](https://github.com/wzn16/dsh-mcp-studio) | 1 | 2026-11-16 | 2026-11-16 | MCP server console for DeepSeek Harness: live status, probe, restart, edit MCP servers in place |
| 63 | [xiaojiuop/dsh-c4d](https://github.com/xiaojiuop/dsh-c4d) | 1 | 2026-11-16 | 2026-11-16 | C4D 风格的参数化三维建模插件（独立实现，无需安装 Cinema 4D）：对象管理器 JSON 场景、14 种图元、挤出/旋转/扫描/放样、MoGraph 克隆、布尔运算、四视图渲染、STL/OBJ/DXF/SVG 导出与常驻离线 CAD 面板。 |
| 64 | [xu-jin-cs/dsh-skills](https://github.com/xu-jin-cs/dsh-skills) | 1 | 2026-08-14 | 2026-11-16 | Mechanical gates + skills that make LLM coding agents keep their promises — agent capability evaluation (9-dim radar/rank reports), parallel dispatch, architecture mapping. Plain SKILL.md, zero lock-in. Custom Source-Available license. |
| 65 | [xuiyun/nqe](https://github.com/xuiyun/nqe) | 1 | 2026-11-16 | 2026-11-16 | DSH 插件：让 AI 该问的时候问、该确认的时候确认 —— 不再用「任务完成」打发你，动手前也会先把理解说清楚；回答还能直接贴图，贴文件，用指令 |
| 66 | [Yi-Shi-QY/dsh-bay](https://github.com/Yi-Shi-QY/dsh-bay) | 1 | 2026-11-03 | 2026-11-16 | 湾（DSH Bay）——面向 DSH 插件开发、验证、组合和分享的多区域工作台 |
| 67 | [YouYou-lj/dsh-markdown-live](https://github.com/YouYou-lj/dsh-markdown-live) | 1 | 2026-11-16 | 2026-11-16 | Markdown rendering inside the DeepSeek Harness composer: finished lines render in place, code gets token colours, lists continue and renumber, pasted blocks render — the composer itself stays untouched. |
| 68 | [yuyu867/dsh-plugin-agnes-video](https://github.com/yuyu867/dsh-plugin-agnes-video) | 1 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: generate short videos with Agnes AI's free video model through two agent tools |
| 69 | [YuZhou0311/dsh-pappers-hall](https://github.com/YuZhou0311/dsh-pappers-hall) | 1 | 2026-11-13 | 2026-11-16 | AI research workbench for DeepSeek Harness: papers, PDF reading, annotations, linked notes &amp; source-grounded AI conversations. 原生 AI 科研工作台：论文管理、精读批注、并排笔记与来源引用。开发中 · Pre-release. |
| 70 | [zhangasdfr/codexskill](https://github.com/zhangasdfr/codexskill) | 1 | 2026-11-05 | 2026-11-16 | haress插件，勾选下方codex让codex动脑，deepseek动手 |
| 71 | [zhangfac-888/personal-memory](https://github.com/zhangfac-888/personal-memory) | 1 | 2026-11-04 | 2026-11-16 | Local Personal Memory — sanitized Windows x64 sharing preview |
| 72 | [Znk1314/dsh-workspace-categories](https://github.com/Znk1314/dsh-workspace-categories) | 1 | 2026-11-16 | 2026-11-16 | 把dsh桌面端侧边栏的工作区归入自定义分类。 每个分类是一个圆角矩形框，里面放着归入它的工作区和各自的会话； 长按标题即可拖动归类与排序，便于管理对话 |
| 73 | [Zymjason/DSH_VCG](https://github.com/Zymjason/DSH_VCG) | 1 | 2026-11-13 | 2026-11-16 | VCG 视觉控制生成器 (Visual Control Generator) — DeepSeek Harness Web GUI 插件：仿 ComfyUI 的节点式图像/视频生成工作流画布，聊天 VCG 画布模式、VCG 项目工作区、AI 自动组建工作流，默认云端 DeepSeek Harness 模型 API 生成，可选本地 ComfyUI 运算。 |
| 74 | [1111210/dsh-plugin-ocr](https://github.com/1111210/dsh-plugin-ocr) | 0 | 2026-11-16 | 2026-11-16 | 鼓励模型使用DeepSeek-OCR接口替代模型视觉，从而在文档识别中降低成本的插件 |
| 75 | [1250589385/dsh-vendor-quick-switch](https://github.com/1250589385/dsh-vendor-quick-switch) | 0 | 2026-11-16 | 2026-11-16 | Vendor-first quick model switching for DeepSeek Harness: a side index beside the shipped model menu plus an in-menu mode. |
| 76 | [13711018663/DeepSeek-Harness-BT-](https://github.com/13711018663/DeepSeek-Harness-BT-) | 0 | 2026-11-16 | 2026-11-16 | 用AI制作的一个插件/A plugin created using AI |
| 77 | [1Lry1/dsh-workbay](https://github.com/1Lry1/dsh-workbay) | 0 | 2026-10-30 | 2026-11-16 | DSH workbench: a dock host, GitCraft and Downloader pages, a shared host kit, and a one-shot suite bundle. |
| 78 | [2005-626/dsh-github-access-guide](https://github.com/2005-626/dsh-github-access-guide) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek-Harness plugin: repairs GitHub access on campus and restricted networks with a local racing proxy, a verified git accelerator rewrite and a URL converter. |
| 79 | [3250mingxiang-maker/zujuan](https://github.com/3250mingxiang-maker/zujuan) | 0 | 2026-11-16 | 2026-11-16 | 组卷网（zujuan.xkw.com）选题插件：自动过阿里云滑块、按知识点/真卷仿卷选题、抓答案解析、导出教师版/学生版讲义（HTML/PDF/Word/Markdown） |
| 80 | [a839124348/dsh-gewu](https://github.com/a839124348/dsh-gewu) | 0 | 2026-11-16 | 2026-11-16 | 让模型只看结果，不反复读自己的旧草稿 |
| 81 | [ada87/dsh-tag](https://github.com/ada87/dsh-tag) | 0 | 2026-11-14 | 2026-11-16 | Color tags for DSH sessions and workspaces: context-menu tags, colored titles, a sidebar filter bar, and 8 UI languages. |
| 82 | [ADCCMYK/dsh-desktop-control](https://github.com/ADCCMYK/dsh-desktop-control) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness Windows 桌面控制：17 个只靠截图的桌面工具（截图、点击、输入、窗口、序列），不依赖 OCR 与 UIA |
| 83 | [aiiaoX/dsh-before-dawn](https://github.com/aiiaoX/dsh-before-dawn) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：提示词注入 + 全权限钉住 + 自动重试续跑 + agent preset 工作模式，全部走 Cordis 官方扩展点。安装：下载 Release 里的 tgz，交给插件管理 install_bundle。 |
| 84 | [Akiyuki1130/dsh-observer](https://github.com/Akiyuki1130/dsh-observer) | 0 | 2026-11-15 | 2026-11-16 | DSH 旁路观察者：用另一个模型在悬浮窗/观察栏里实时播报主对话进度（做了什么、接下来做什么、是否卡住），不干涉主对话。 |
| 85 | [alexz949/dsh-personal-agent](https://github.com/alexz949/dsh-personal-agent) | 0 | 2026-11-16 | 2026-11-16 | Personal assistant plugin for DeepSeek Harness (DSH) on macOS: Apple Calendar, Reminders, Notes, Mail drafts, a today note and a weekly journal. |
| 86 | [amonisachicken/dsh-circuit2vst](https://github.com/amonisachicken/dsh-circuit2vst) | 0 | 2026-11-16 | 2026-11-16 | 把自绘电路变成多平台 VST3/AU/CLAP 插件：DeepSeek Harness 插件，内含 rustomp 电路/面板设计器、代码生成与平台打包编排。 |
| 87 | [Aphlita/dsh-agent-browser](https://github.com/Aphlita/dsh-agent-browser) | 0 | 2026-11-16 | 2026-11-16 | Agent 与用户共用的浏览器会话：右栏实时画面 + 结构化快照 + 单写者租约（DSH 插件） |
| 88 | [Asthestarsfalll/dsh-answer-card](https://github.com/Asthestarsfalll/dsh-answer-card) | 0 | 2026-11-16 | 2026-11-16 | macOS 屏幕悬浮卡片：DeepSeek Harness 需要你批准、回答或收尾时，把决定本身搬到屏幕上——点选项就等于在 DSH 里作答，不用切窗口。 |
| 89 | [awovkj/dsh-session-delete-plus](https://github.com/awovkj/dsh-session-delete-plus) | 0 | 2026-11-16 | 2026-11-16 | 为 DeepSeek Harness 增加「删除对话」：在对话菜单里永久删除会话及其本地历史记录，而不只是归档。A DSH plugin that permanently deletes conversations and their local history instead of only archiving them. |
| 90 | [Ax1oMgg/dsh-offpeak-indicator](https://github.com/Ax1oMgg/dsh-offpeak-indicator) | 0 | 2026-11-13 | 2026-11-16 | DeepSeek Harness plugin: sidebar indicator for off-peak token pricing, verified against the official pricing page on every launch. |
| 91 | [Azheyc/novaflow-dsh-plugin](https://github.com/Azheyc/novaflow-dsh-plugin) | 0 | 2026-11-13 | 2026-11-16 | NovaFlow account, native models, media MCP and user-confirmed plugin setup for DeepSeek Harness |
| 92 | [azopt/dsh-acut](https://github.com/azopt/dsh-acut) | 0 | 2026-11-16 | 2026-11-16 | Screenshot plugin: region capture, annotation, scrolling long capture, floating preview, pin on top. The capabilities are exposed as tools for Agent invocation. 截图插件：区域框选、标注、滚屏长截图、悬浮预览、钉住置顶，并提供 Agent 工具接口。 |
| 93 | [Baimacao/dsh-pipem](https://github.com/Baimacao/dsh-pipem) | 0 | 2026-11-15 | 2026-11-16 | 哌甲酯 (dsh-pipem) — DSH 插件：把犯过的错记成可检索的 guard，动手前查、报完成前绑证据；出错自动提醒；内置一颗心。可替代 dsh-ops + dsh-heart。 |
| 94 | [BambooRoute/dsh-provider](https://github.com/BambooRoute/dsh-provider) | 0 | 2026-11-16 | 2026-11-16 | BambooRoute provider for DeepSeek Harness |
| 95 | [banzhangdeerfenzhiyi/dsh-qqmusic-plugin](https://github.com/banzhangdeerfenzhiyi/dsh-qqmusic-plugin) | 0 | 2026-10-28 | 2026-11-16 | QQ Music karaoke + AI cover singing for DeepSeek Harness WeChat/QQ persona bots (Demucs + RVC, native voice bubbles). |
| 96 | [beyondgjc/dsh-agent-chat](https://github.com/beyondgjc/dsh-agent-chat) | 0 | 2026-11-14 | 2026-11-16 | 把 Super Agent 群聊与讨论接入 dsh（DeepSeek Harness）的 cordis 插件：5 个 agent 工具 + agent-chat skill + workbench UI 经 /wb 通道整体复用 |
| 97 | [BillyWang-7/dsh-turn-bell](https://github.com/BillyWang-7/dsh-turn-bell) | 0 | 2026-11-16 | 2026-11-16 | Native DeepSeek Harness notifications in the app's own icon and sound — when a turn finishes or the agent needs your confirmation. |
| 98 | [Biomistik-Official/dsh-progress-updates](https://github.com/Biomistik-Official/dsh-progress-updates) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: the agent keeps a todo plan and posts short progress updates instead of working silently |
| 99 | [boldandigital/dsh-mailgun](https://github.com/boldandigital/dsh-mailgun) | 0 | 2026-11-13 | 2026-11-16 | Send email through the Mailgun HTTP API with per-message open and click tracking, and read the delivery and engagement events — for DeepSeek Harness. |
| 100 | [bradleyFrancis/dsh-llm-third-party-native](https://github.com/bradleyFrancis/dsh-llm-third-party-native) | 0 | 2026-11-16 | 2026-11-16 | Route OpenRouter, LiteLLM, and self-hosted Anthropic-compatible endpoints through DeepSeek's native adapter. Comes with thinking budgets, clean reasoning replay, sticky caching, and local SearXNG search - without touching your official DeepSeek route. |
| 101 | [Broklam/dsh-spend-tracker](https://github.com/Broklam/dsh-spend-tracker) | 0 | 2026-11-16 | 2026-11-16 | Session spend tracker for DeepSeek Harness: an estimated spend reading under the message box, with token, cache, activity, and per-model breakdowns. |
| 102 | [byChen47/dsh-session-rehome](https://github.com/byChen47/dsh-session-rehome) | 0 | 2026-11-16 | 2026-11-16 | Move a DeepSeek Harness conversation into another workspace in place - same session id, history and title; a conversation that is mid-turn is refused. ? DSH ????????????? |
| 103 | [c3115644151/dsh-inbox-bridge](https://github.com/c3115644151/dsh-inbox-bridge) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: poll any external source (CI, issues, mail, any command) and inject new events at turn boundaries, with delivered/handled bookkeeping, resurfacing and auto-close |
| 104 | [caoxiaoa/dsh-office-desk](https://github.com/caoxiaoa/dsh-office-desk) | 0 | 2026-11-16 | 2026-11-16 | Office template shelf under the composer: one click appends a ready-to-fill Chinese office brief to the draft. |
| 105 | [Carrylin104/dsh-auto-reasoning-go](https://github.com/Carrylin104/dsh-auto-reasoning-go) | 0 | 2026-11-16 | 2026-11-16 | Native Android dsh-Go auto reasoning plugin with model templates and upstream level sync |
| 106 | [Castile/dsh-weread-studio](https://github.com/Castile/dsh-weread-studio) | 0 | 2026-11-16 | 2026-11-16 | 微信读书工作台 DSH 插件：书架/进度/划线笔记同步、本地 EPUB-TXT 书库、内置阅读器（字号/行距/字体/主题/划线）、选区查词与 AI 对话 |
| 107 | [ccll/dsh-export-pdf](https://github.com/ccll/dsh-export-pdf) | 0 | 2026-11-16 | 2026-11-16 | PDF view page for DeepSeek Harness (DSH) web — export a session transcript to PDF with in-page preview and download / DSH 会话 PDF 导出插件 |
| 108 | [chanchanxue/dsh-audio-extract](https://github.com/chanchanxue/dsh-audio-extract) | 0 | 2026-11-15 | 2026-11-16 | Lossless audio extraction from video for DeepSeek Harness |
| 109 | [changtianfeiyun/dsh-mcp-market-hub](https://github.com/changtianfeiyun/dsh-mcp-market-hub) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: search and install MCP servers from mcpmarket.cn and ModelScope MCP catalogs, in one sidebar panel. |
| 110 | [chdepanghu/dsh-worker-plug](https://github.com/chdepanghu/dsh-worker-plug) | 0 | 2026-11-16 | 2026-11-16 | AI Native 工作台：飞书需求/任务表 → 汇总清单/看板/进度 + 专家团 AI 全流程（需求分析→开发→评审→QA），一条记录直接生成 AI 开发指令。DSH 插件市场分发仓库。 |
| 111 | [Cheemsup/dsh-plugin-console](https://github.com/Cheemsup/dsh-plugin-console) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin console: inspect plugin composition, session origins, and tool ownership; preview and customize the first model request. |
| 112 | [climbh/dsh-plugin-delete-session](https://github.com/climbh/dsh-plugin-delete-session) | 0 | 2026-11-03 | 2026-11-16 | DeepSeek Harness 插件：在会话「…」菜单里加一个删除入口，确认后从本机彻底删掉该会话（日志目录、工作区引用、投影缓存），删的是当前会话时自动回到新会话窗口。 |
| 113 | [CNLing0728/dsh-cot-auto-translate](https://github.com/CNLing0728/dsh-cot-auto-translate) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: auto-translate expanded reasoning (thinking) into the interface language with Microsoft Bing |
| 114 | [ColaFly-if/dsh-acceptance-gate](https://github.com/ColaFly-if/dsh-acceptance-gate) | 0 | 2026-11-16 | 2026-11-16 | DSH 验收闭环插件：改动先登记验收单，插件自己跑证据，没清零不许收尾。 |
| 115 | [ColaFly-if/dsh-group-chat-room](https://github.com/ColaFly-if/dsh-group-chat-room) | 0 | 2026-11-16 | 2026-11-16 | DSH 侧栏群聊插件：多个 AI 人格同处一室，流式回复、贴纸，成员可从一段描述生成。 |
| 116 | [coldgust/dsh-proxy-manager](https://github.com/coldgust/dsh-proxy-manager) | 0 | 2026-11-16 | 2026-11-16 | Manage proxy settings in DeepSeek Harness. A single settings page sets, inspects and clears the proxy configuration of the developer tools · 在 DeepSeek Harness 中管理代理设置：通过一个设置页面查看、配置与清除开发工具的代理 |
| 117 | [cookabc/dsh-change-preview](https://github.com/cookabc/dsh-change-preview) | 0 | 2026-11-13 | 2026-11-16 | DSH plugin: the agent drafts wireframe prototypes of UI changes, you annotate them in place, and feedback patches flow back into the spec. 变更预览看板：Agent 出线框原型，用户直接批注，反馈自动回写 spec。 |
| 118 | [CrystalVibe28/dsh-session-title-tools](https://github.com/CrystalVibe28/dsh-session-title-tools) | 0 | 2026-11-16 | 2026-11-16 | Two agent tools to read and rename DSH session titles, plus a settings page for DSH's native session-title generation |
| 119 | [CuberSome/dsh-auto-archive-echo](https://github.com/CuberSome/dsh-auto-archive-echo) | 0 | 2026-11-16 | 2026-11-16 | dsh自动归档功能 |
| 120 | [dajlsdf/research-paper-deck](https://github.com/dajlsdf/research-paper-deck) | 0 | 2026-11-16 | 2026-11-16 | Turn one research paper into a 10–14 page report deck (.pptx + .pdf, speaker notes) that follows the paper's argument. |
| 121 | [DanceElephant/dsh-codex-bridge](https://github.com/DanceElephant/dsh-codex-bridge) | 0 | 2026-11-15 | 2026-11-16 | 把本机 Codex 技能导入 DSH 技能体系：扫描、压缩 description、锁文件登记、启动重放；6 个 DSH 工具 + CLI |
| 122 | [DanneLeung/dsh-multi-key-rotation](https://github.com/DanneLeung/dsh-multi-key-rotation) | 0 | 2026-11-15 | 2026-11-16 | DeepSeek Harness LLM multi api key rotation |
| 123 | [deeparchi-ai/dsh-deepsight](https://github.com/deeparchi-ai/dsh-deepsight) | 0 | 2026-11-16 | 2026-11-16 | DeepSight deep-research kit for DeepSeek Harness: the methodology skill bundled in the package, a deepsight agent preset, and provenance-checked evidence audits. |
| 124 | [deepseekqing/same-me](https://github.com/deepseekqing/same-me) | 0 | 2026-11-16 | 2026-11-16 | same-me — cross-model continuity for DSH agents: a portable self (hot state / judgments / handoff) that survives model and session switches. |
| 125 | [dehong831-arch/dsh-fish-home](https://github.com/dehong831-arch/dsh-fish-home) | 0 | 2026-11-16 | 2026-11-16 | 鱼的日常 · 小窝，给一起聊过的日子留一点位置。把值得纪念的对话留成一盆植物、一本书或一封信，摆在窗台、桌边、书架与墙上。点开物件，就能回看它的故事、原话与来源。支持对话工具、手动补记、共同事件簿和持久保存。从空屋开始，慢慢添上有出处的片段。 |
| 126 | [demian-1013/dsh-demian-drama-strip](https://github.com/demian-1013/dsh-demian-drama-strip) | 0 | 2026-11-15 | 2026-11-16 | DSH skill bundle that turns a short drama into a shot-by-shot storyboard and a shootable screenplay. Still frames only ever give composition, so camera moves and subject motion come from ffmpeg 4fps frame-diff sheets, and luma jumps locate cuts and flashbacks. Needs ffmpeg. |
| 127 | [dennisonbertram/dsh-free-pi-official](https://github.com/dennisonbertram/dsh-free-pi-official) | 0 | 2026-11-16 | 2026-11-16 | FreePi for DeepSeek Harness: the official plugin. Free AI models, paid for by one ad above the composer. |
| 128 | [DerikZhang/dsh-http-local-proxy](https://github.com/DerikZhang/dsh-http-local-proxy) | 0 | 2026-11-16 | 2026-11-16 |  支持 deepseek harness 的代理工具，避免组件升级时因为网络问题阻塞 |
| 129 | [dh-114/phira-chart-ai](https://github.com/dh-114/phira-chart-ai) | 0 | 2026-11-16 | 2026-11-16 | Phira/RPE 谱面 AI 工具链：生成、60+ 项校验、分析、预览、打包 .pez（DSH 插件） |
| 130 | [Diccup/dsh-eco-context](https://github.com/Diccup/dsh-eco-context) | 0 | 2026-11-16 | 2026-11-16 | DSH 上下文引擎：把"塞满就丢"改成"按需取用"，大输出落本地库，模型只看摘要+指针 |
| 131 | [Diccup/dsh-fp-search](https://github.com/Diccup/dsh-fp-search) | 0 | 2026-11-16 | 2026-11-16 | DSH 独立网页能力插件：搜索 / 取正文 / 取原件 / 自检 |
| 132 | [Diccup/dsh-session-delete](https://github.com/Diccup/dsh-session-delete) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：左侧对话列表里删除一个对话（软删隐藏 / 硬删永久） |
| 133 | [Diccup/dsh-team](https://github.com/Diccup/dsh-team) | 0 | 2026-11-16 | 2026-11-16 | DSH 本地多智能体团队插件：一个 team 工具 + 免费模型台账 + 右侧栏面板 |
| 134 | [dingmac/dsh-superagent-monitor](https://github.com/dingmac/dsh-superagent-monitor) | 0 | 2026-11-13 | 2026-11-16 | A manager and desktop entry for a standalone dsh-superagent: status, launchd service, start/stop, dashboard plugin sync, and the Superagent conversation tab. |
| 135 | [DMu03/DSH-Chime](https://github.com/DMu03/DSH-Chime) | 0 | 2026-11-16 | 2026-11-16 | A plugin adds completion and inquiry sound to DSH. 为DSH添加完成提示音和问询提示音的插件。 |
| 136 | [DMu03/DSH-ModelEntry](https://github.com/DMu03/DSH-ModelEntry) | 0 | 2026-11-16 | 2026-11-16 | A DSH plugin that lets you quickly manage models in the sidebar. 一个DSH插件，让你在侧边栏快速管理模型。 |
| 137 | [doubility/dsh-open-with-control](https://github.com/doubility/dsh-open-with-control) | 0 | 2026-11-16 | 2026-11-16 | Customize the DeepSeek Harness session header Open with menu: choose, reorder, pin a default, and add installed applications with real icons (macOS and Windows). |
| 138 | [dsh-plugin-collection/dsh-wakatime-plugin](https://github.com/dsh-plugin-collection/dsh-wakatime-plugin) | 0 | 2026-11-16 | 2026-11-16 | 给 DSH 加上 WakaTime 心跳上报：统计你在编辑器、终端与 AI 对话里花的时间，按项目 / 语言 / 类别归集，AI token 用量单独上报。｜ WakaTime heartbeat reporting for DSH: time across editors, terminals and AI sessions, split by project / language / category, with separate GenAI token reporting. |
| 139 | [dsh-plugins/dsh-markdown-translation](https://github.com/dsh-plugins/dsh-markdown-translation) | 0 | 2026-11-16 | 2026-11-16 | 保护 DeepSeek Harness 思考翻译的 Markdown 格式，支持流式翻译及 dsh-auxiliary 模型选择；通过 dsh plugin add @dsh-plugin/dsh-markdown-translation 安装。 |
| 140 | [dsh-plugins/dsh-subagent-panel](https://github.com/dsh-plugins/dsh-subagent-panel) | 0 | 2026-11-16 | 2026-11-16 | DSH 外部子智能体面板：在原生列表打开 Codex、Claude Code 实时过程并持续对话。安装：dsh plugin --profile web add @dsh-plugin/dsh-subagent-panel |
| 141 | [dsh-teamwork/dsh-teamwork](https://github.com/dsh-teamwork/dsh-teamwork) | 0 | 2026-11-09 | 2026-11-16 | Shared team models, agent presets, and approved plugins for DeepSeek Harness. |
| 142 | [DSH43/dsh-tool-gate](https://github.com/DSH43/dsh-tool-gate) | 0 | 2026-11-16 | 2026-11-16 | 把可选工具挡在请求外，模型调 load_tools 再按需放进来，减少每步的工具 schema 开销 |
| 143 | [duhongming1990/multi-model-chat](https://github.com/duhongming1990/multi-model-chat) | 0 | 2026-11-13 | 2026-11-16 | 一次提问，并发调用多个 OpenAI 兼容模型；每一组问答自动保存到本地；每条模型的回答都可以点赞，并提供模型点赞分析统计 |
| 144 | [dukunused/dsh-xiaohongshu-image-saver](https://github.com/dukunused/dsh-xiaohongshu-image-saver) | 0 | 2026-11-16 | 2026-11-16 | DSH (DeepSeek Harness) plugin: bulk-save every image from a Xiaohongshu (小红书/RED) user profile to a local folder as originals, named by post date, resumable, QR login via dedicated Chrome profile. |
| 145 | [EddyLee1010/wage-calculator](https://github.com/EddyLee1010/wage-calculator) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek harness插件。用于显示打工人工资的小工具 |
| 146 | [euansuuu/deepseek-pet-saber](https://github.com/euansuuu/deepseek-pet-saber) | 0 | 2026-11-16 | 2026-11-16 | Saber 桌宠 for DeepSeek Harness：精灵动画骑士助手，随会话起舞。 |
| 147 | [FabianActor/dsh-lil-whale](https://github.com/FabianActor/dsh-lil-whale) | 0 | 2026-11-16 | 2026-11-16 | 小小肥鱼 / lil-whale：给你的大肥鱼养一条小肥鱼，有自己的家、记忆，会按照自己的时间计划行动。 |
| 148 | [fenghuanfun/dsh-workspace](https://github.com/fenghuanfun/dsh-workspace) | 0 | 2026-11-16 | 2026-11-16 | 给一个工作区追加额外的 源目录 |
| 149 | [fengnowuyu-beep/dsh-bgm-prep](https://github.com/fengnowuyu-beep/dsh-bgm-prep) | 0 | 2026-11-16 | 2026-11-16 | 跑团备团配乐：把场景清单变成带标签的曲目表，导出可粘贴歌单清单 · TRPG session-prep BGM cue sheets |
| 150 | [fengnowuyu-beep/dsh-cost](https://github.com/fengnowuyu-beep/dsh-cost) | 0 | 2026-11-16 | 2026-11-16 | 对话消费金额：输入框下方显示本对话（含全部子代理）的金额与明细，含生图与语音的估算话费 · Per-conversation spend readout for DSH Desktop, including image and speech spend |
| 151 | [fengnowuyu-beep/dsh-session-bridge](https://github.com/fengnowuyu-beep/dsh-session-bridge) | 0 | 2026-11-16 | 2026-11-16 | 跨会话会话工具：session_send 投递文本/图片/附件，session_create 新建会话并指定模型与推理强度，workspace_create 新建工作区 · Cross-session messaging and session/workspace creation for DeepSeek Harness |
| 152 | [fengnowuyu-beep/dsh-text-styles](https://github.com/fengnowuyu-beep/dsh-text-styles) | 0 | 2026-11-16 | 2026-11-16 | Restyle the text inside DSH conversations: presets and per-target knobs for the answer body, narration, translations, emphasis, quotes, code, tool output and more 路 鏂囧瓧鏍峰紡妯″潡锛氬彲瑙嗗寲鍦拌嚜瀹氫箟瀵硅瘽鍐呭悇绫绘枃瀛楃殑鏍峰紡 |
| 153 | [fengnowuyu-beep/dsh-text-translator](https://github.com/fengnowuyu-beep/dsh-text-translator) | 0 | 2026-11-16 | 2026-11-16 | Translate English reasoning blocks and the interleaved narration into Chinese as they stream, with a per-conversation switch · 文本翻译：把思考链与思考之间的零散文字自动翻成中文，每个对话可单独开关 |
| 154 | [fengnowuyu-beep/dsh-toolbox](https://github.com/fengnowuyu-beep/dsh-toolbox) | 0 | 2026-11-16 | 2026-11-16 | DSH 桌面端自用工具箱：标题栏一键重启/打开设置、检查更新、Enter 发送、右键用 AI 重命名、托盘控制 · Personal toolbox for DSH Desktop |
| 155 | [fengnowuyu-beep/dsh-usage-panel](https://github.com/fengnowuyu-beep/dsh-usage-panel) | 0 | 2026-11-16 | 2026-11-16 | 服务余额与用量面板：侧边栏跨服务本月消耗汇总（账本口径，标估算）+ 各服务官方余额卡 + 可折叠账本明细（近 7 天 / 按模型 / 按会话说明），手动刷新、Key 打码、失败降级 · Service balance &amp; usage panel for DSH Desktop |
| 156 | [fengnowuyu-beep/dsh-windows-notify](https://github.com/fengnowuyu-beep/dsh-windows-notify) | 0 | 2026-11-16 | 2026-11-16 | Windows 桌面通知 + 分场景提示音 + 点击跳回对话：对话完成、出错、等待审批、等待确认（计划评审）、等待回答、需要登录 · Desktop notifications with a distinct cue per DSH event; click one to reopen its conversation |
| 157 | [fishcg/dsh-music](https://github.com/fishcg/dsh-music) | 0 | 2026-11-12 | 2026-11-16 | Acgay music player embedded in DeepSeek Harness |
| 158 | [flying-ovaltine/residency-history-taking-internal-medicine](https://github.com/flying-ovaltine/residency-history-taking-internal-medicine) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: residency OSCE history-taking trainer (internal medicine). Standardized-patient role-play, then examiner scoring against the official 100-point rubric; 32 case scripts. |
| 159 | [forfeeling/dsh-media-player](https://github.com/forfeeling/dsh-media-player) | 0 | 2026-11-16 | 2026-11-16 | Inline video/animation player plugin for the DeepSeek Harness Web GUI: media_show tool plus native video chat card |
| 160 | [Fruneng/dsh-share-session](https://github.com/Fruneng/dsh-share-session) | 0 | 2026-11-16 | 2026-11-16 | 把一个会话里选中的对话内容生成一张可分享的长图 |
| 161 | [gcwarmman/dsh-sidebar-narrator](https://github.com/gcwarmman/dsh-sidebar-narrator) | 0 | 2026-11-16 | 2026-11-16 | DSH sidebar narrator, explain agent actions in plain language, read-only questions, steer agent without interrupting, cancel agent, human-readable progress, agent observer |
| 162 | [google-q-dot/dsh-workflow-zcode](https://github.com/google-q-dot/dsh-workflow-zcode) | 0 | 2026-11-16 | 2026-11-16 | Run ZCode .dwf.ts dynamic workflows in DeepSeek Harness: persistent subagents, sandboxed execution, SQLite run journal, and a ZCode-style sidebar panel. |
| 163 | [gsnowdrift/dsh-java-ops](https://github.com/gsnowdrift/dsh-java-ops) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 插件：Java/Spring Boot 服务启停、重启、构建与 SQL 查询 |
| 164 | [gulagala001/dsh-unharnessed](https://github.com/gulagala001/dsh-unharnessed) | 0 | 2026-11-16 | 2026-11-16 | 在 DeepSeek Harness 中使用持久 Python、后台命令、MCP、图片与文件附件和可恢复的任务状态。 Persistent Python, MCP and durable media in DeepSeek Harness. |
| 165 | [hAcKlyc/dsh-zsearch](https://github.com/hAcKlyc/dsh-zsearch) | 0 | 2026-11-16 | 2026-11-16 | ZSearch for DeepSeek Harness: dual-source Zhihu + web search with a streamed answer beside cited sources. |
| 166 | [hai55555/dsh-deepseek-pricing](https://github.com/hai55555/dsh-deepseek-pricing) | 0 | 2026-11-16 | 2026-11-16 | Deepseek Harness的插件，可通过npm安装。可以显示调用deepseek的当前时段是高峰还是空闲时段，并从官网自动实时更新价格。支持联网获取节假日。另一个功能是根据当时的价格计算每条与deepseek对话（含过去）的消耗金额，显示在每条对话下面。 |
| 167 | [Hakuno410/dsh-wide-chat](https://github.com/Hakuno410/dsh-wide-chat) | 0 | 2026-11-15 | 2026-11-16 | Draggable chat column width for DSH - install with: dsh plugin --profile desktop add github:Hakuno410/dsh-wide-chat |
| 168 | [hanhan9999999999999999999/dsh-token-lock](https://github.com/hanhan9999999999999999999/dsh-token-lock) | 0 | 2026-11-16 | 2026-11-16 | Multi-dimensional token guard for DSH 2.0: measures what a session spends and what it produces, then nudges or blocks only the wasteful part. |
| 169 | [hdyeats/dsh-manju-studio](https://github.com/hdyeats/dsh-manju-studio) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: an interactive AI short-drama (manju) pipeline with episode workspaces, prompt routing, compliance scan, storyboard validation, asset cards and voice casting |
| 170 | [HelloWorldGitHub114/dsh-codex-default-workspace](https://github.com/HelloWorldGitHub114/dsh-codex-default-workspace) | 0 | 2026-11-16 | 2026-11-16 | 仿照 Codex 无项目会话：默认工作区中的新会话自动进入按日期分组的独立文件夹（YYYY-MM-DD/会话ID） · Codex-style project-free session folders for DeepSeek Harness default workspace |
| 171 | [henry1996-yl/dsh-reply-timer](https://github.com/henry1996-yl/dsh-reply-timer) | 0 | 2026-11-15 | 2026-11-16 | Per-session reply timer for DeepSeek Harness: first-token / tool / generation ledger plus a composer chip. |
| 172 | [hexiaowu/dsh-mcp-config](https://github.com/hexiaowu/dsh-mcp-config) | 0 | 2026-11-16 | 2026-11-16 | MCP Config for DeepSeek Harness: manage DSH MCP connections and import MCP servers configured in other agents and IDEs, including ZCode |
| 173 | [hgognav233-netizen/agent-workflow-viewer](https://github.com/hgognav233-netizen/agent-workflow-viewer) | 0 | 2026-11-12 | 2026-11-16 | DeepSeek Harness plugin: a live, zoomable map of what the model calls, what comes back, and which subagent it dispatches. |
| 174 | [hh5631/dsh-liquid-glass](https://github.com/hh5631/dsh-liquid-glass) | 0 | 2026-11-12 | 2026-11-16 | DSH Web 的独立液态玻璃主题 |
| 175 | [hh8800/dsh-zh-name-guard](https://github.com/hh8800/dsh-zh-name-guard) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：工具层强制中文命名——新建路径既非中文也非拼音就拒绝；外部导入物与技术既定名放行 |
| 176 | [hifengzy/dsh-plugin-deepseek-peak-hours](https://github.com/hifengzy/dsh-plugin-deepseek-peak-hours) | 0 | 2026-11-16 | 2026-11-16 | Live DeepSeek API peak/off-peak window badge for the DeepSeek Harness (DSH) composer, with a click-open FLASH/PRO price table. |
| 177 | [HiMenma/dsh-sticky-wall](https://github.com/HiMenma/dsh-sticky-wall) | 0 | 2026-11-16 | 2026-11-16 | DSH Web bundle: a sticky wall of coloured notes, opened from its own row in the sidebar |
| 178 | [JAYcodr/dsh-aipais-image](https://github.com/JAYcodr/dsh-aipais-image) | 0 | 2026-11-16 | 2026-11-16 | DSH 生图插件：一次工具调用完成 gpt-image-2.6 出图 + 落盘 + 会话内联图片卡 |
| 179 | [jgeeee/dsh-task-complete-notifier](https://github.com/jgeeee/dsh-task-complete-notifier) | 0 | 2026-11-16 | 2026-11-16 | 当 DeepSeek Harness 运行结束、提出问题或等待审批时触发的系统通知。System notification when a DeepSeek Harness run ends, asks a question, or waits for approval |
| 180 | [jiaxusummer/dsh-icon-changer](https://github.com/jiaxusummer/dsh-icon-changer) | 0 | 2026-11-13 | 2026-11-16 | 记住 DSH 桌面版主窗口的尺寸、位置与最大化状态，下次启动时还原。Windows only. |
| 181 | [jinghoor/dsh-remote-workspaces](https://github.com/jinghoor/dsh-remote-workspaces) | 0 | 2026-11-15 | 2026-11-16 | 把另一台电脑的 DSH（DeepSeek Harness）工作区与会话并进本机侧边栏｜内置公共中转，登录同一账号即可多设备互连 |
| 182 | [jkfujr/dsh-codex-thread](https://github.com/jkfujr/dsh-codex-thread) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: read and continue existing Codex sessions (list / read / new / send / wait / cancel) |
| 183 | [Johnson1662/dsh-inbox](https://github.com/Johnson1662/dsh-inbox) | 0 | 2026-11-15 | 2026-11-16 | 个人 agent 的感知层：任意来源 → 统一信封 → 常驻队列 → 任意 agent 的任意会话 |
| 184 | [Jun2030/dsh-chat-tu](https://github.com/Jun2030/dsh-chat-tu) | 0 | 2026-11-16 | 2026-11-16 | DSH 局域网 WebRTC 聊天插件，支持频道、昵称、本地 SQLite 消息与自定义表情。 |
| 185 | [K0L0banov/dsh-workspace-integrity](https://github.com/K0L0banov/dsh-workspace-integrity) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：会话切到完全权限时，把被 Windows 沙箱打上 Low 完整性标签的工作区改回 Medium。DSH plugin: restore the workspace integrity label to Medium when a session switches to full access. |
| 186 | [kabaliGamer-Dev2/s-eidos](https://github.com/kabaliGamer-Dev2/s-eidos) | 0 | 2026-11-16 | 2026-11-16 | Evidence-backed front-end pattern review for coding agents: framework-aware findings with dated provenance, support-target gating, and auditable decisions. DeepSeek Harness plugin with a left sidebar entry. |
| 187 | [KhalilWong/dsh-plugin-touchline-football](https://github.com/KhalilWong/dsh-plugin-touchline-football) | 0 | 2026-11-16 | 2026-11-16 | Touchline Football: floating football scores, event-based pitch visualization and local tracking replay for DeepSeek Harness. |
| 188 | [kuangmi-bit/dsh-a2a-interop](https://github.com/kuangmi-bit/dsh-a2a-interop) | 0 | 2026-11-16 | 2026-11-16 | A2A (Agent2Agent) interop bridge for DeepSeek Harness: serves the Harness as an A2A agent on both v1.0 and 0.3.x wire formats, and adds tools that call remote A2A agents. |
| 189 | [latinovicb/dsh-last-response-stats](https://github.com/latinovicb/dsh-last-response-stats) | 0 | 2026-11-16 | 2026-11-16 | A small DeepSeek Harness bundle that shows statistics of the most recent agent response |
| 190 | [lcx19970714/dsh-git-panel](https://github.com/lcx19970714/dsh-git-panel) | 0 | 2026-10-29 | 2026-11-16 | DSH 会话内 Git 变更面板：变更/文件双模式、可编辑保存、检测更新、打开仓库 |
| 191 | [LighghtEeloo/dsh-vcs-panel](https://github.com/LighghtEeloo/dsh-vcs-panel) | 0 | 2026-11-16 | 2026-11-16 | Read-only version control panel for DeepSeek Harness: working changes, their diffs, and history with a lane graph, for Git and Jujutsu repositories. |
| 192 | [linglanxin/miniapp-game-offline](https://github.com/linglanxin/miniapp-game-offline) | 0 | 2026-11-16 | 2026-11-16 | 从小程序游戏链接核对原版构建、检查资源并打包为离线版的 Agent Skill。 |
| 193 | [LinYonghang/dsh-page-images](https://github.com/LinYonghang/dsh-page-images) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugins that turn document attachments into per-page images in the conversation |
| 194 | [LISHUANGXI1412/dsh-token-trim](https://github.com/LISHUANGXI1412/dsh-token-trim) | 0 | 2026-11-16 | 2026-11-16 | Tool-result trimming for DeepSeek Harness: structural summaries, head/tail caps, repeat deltas and artifact spill before results enter the context, with a measured savings view. |
| 195 | [liuhange789/dsh-clinic-intake](https://github.com/liuhange789/dsh-clinic-intake) | 0 | 2026-11-16 | 2026-11-16 | Pre-visit intake structuring for clinics (DSH plugin): six patient questions → structured intake summary ≤300 字, rule-based, local-only, no diagnosis. |
| 196 | [liuhange789/dsh-contract-redline](https://github.com/liuhange789/dsh-contract-redline) | 0 | 2026-11-16 | 2026-11-16 | Contract risk quick-scan (DSH plugin): paste a procurement / lease / service contract and get high-risk clauses, one-sided obligations and missing key clauses. Rule-based, local-only, no legal advice. |
| 197 | [liuhange789/dsh-gov-doc-router](https://github.com/liuhange789/dsh-gov-doc-router) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: GB/T 9704 government document format check and auto-fix, exports compliant .docx |
| 198 | [liuhange789/dsh-patient-education](https://github.com/liuhange789/dsh-patient-education) | 0 | 2026-11-16 | 2026-11-16 | 医生说完就忘？把医嘱变成患者看得懂的须知，30 秒生成。Turn a doctor's decision into a patient-readable after-visit guide in DSH — template-filled, no medical judgement. |
| 199 | [liuhange789/dsh-sop-runner](https://github.com/liuhange789/dsh-sop-runner) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: store SOP self-check. Today's checklist, pass/fail/photo per item, append-only JSONL records, and a plain-text daily report. ?? SOP ????:?????????????????? |
| 200 | [liujinyang035-ops/dsh-wage-pet](https://github.com/liujinyang035-ops/dsh-wage-pet) | 0 | 2026-11-16 | 2026-11-16 | A desktop pet for DeepSeek Harness that counts today's earnings while you work. |
| 201 | [lkzc19/dsh-workspace-virtual-groups](https://github.com/lkzc19/dsh-workspace-virtual-groups) | 0 | 2026-11-11 | 2026-11-16 | 给 DSH 侧边栏的工作区列表加一层手动虚拟分组。项目仍在原目录，插件只改变显示归属和顺序。 |
| 202 | [lllirunze/dsh-fishread](https://github.com/lllirunze/dsh-fishread) | 0 | 2026-11-16 | 2026-11-16 | A private, offline floating novel reader for DeepSeek Harness |
| 203 | [loftspire/dsh-shot](https://github.com/loftspire/dsh-shot) | 0 | 2026-11-15 | 2026-11-16 | 给 DeepSeek Harness 输入框加一个截图按钮：整屏冻结压暗、悬停即选整窗、八手柄缩放、箭头/画笔标注，确认后图片直接进草稿附件。Windows only. |
| 204 | [longroads/dsh-global-supervisor](https://github.com/longroads/dsh-global-supervisor) | 0 | 2026-11-16 | 2026-11-16 | DSH 全局监督插件：一个 Router 会话统一管理多个项目 Workspace——项目管理、任务分派、状态监控、定时巡检与事件响应。SQLite 持久化，Worker 结构化汇报，25 个工具。 |
| 205 | [Lornatang/dsh-github](https://github.com/Lornatang/dsh-github) | 0 | 2026-11-16 | 2026-11-16 | GitHub integration for DeepSeek Harness via GitHub MCP |
| 206 | [LoveRoujiamo/dsh-pdf-workbench](https://github.com/LoveRoujiamo/dsh-pdf-workbench) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 插件：本地 PDF 全能工具台（29 项功能，PyMuPDF 引擎 + AI 文档助手） |
| 207 | [lqc11cql/dsh-comic-skin](https://github.com/lqc11cql/dsh-comic-skin) | 0 | 2026-11-16 | 2026-11-16 | Neo-brutalist comic sticker skin for DeepSeek Harness: ink outlines, hard offset shadows, halftone paper and sticker controls. |
| 208 | [luozone001/dsh-fanren-theme](https://github.com/luozone001/dsh-fanren-theme) | 0 | 2026-11-16 | 2026-11-16 | 凡人·朱煞 — a DeepSeek Harness (DSH) Web GUI theme plugin: full-window crimson xianxia motion wallpaper, vermilion-and-ink token palette, HTTP Range media route, and a Settings → 凡人·朱煞 page. |
| 209 | [lzlrt/dsh-auto-wake](https://github.com/lzlrt/dsh-auto-wake) | 0 | 2026-11-11 | 2026-11-16 | DSH 会话自动唤醒插件：给任意会话挂唤醒规则，检测结束异常后真正叫醒它继续干活 |
| 210 | [lzlrt/dsh-cross-session](https://github.com/lzlrt/dsh-cross-session) | 0 | 2026-11-11 | 2026-11-16 | 跨会话协同 for DeepSeek Harness 0.2.x：四个工具让会话之间互发消息、交接任务、回信、互看进度 |
| 211 | [machine202502/dsh-peak-guard](https://github.com/machine202502/dsh-peak-guard) | 0 | 2026-11-16 | 2026-11-16 | Peak-tariff guard for DeepSeek Harness: warns a working Session when the peak starts and resumes it when the peak ends. |
| 212 | [maliang/dsh-auto-team](https://github.com/maliang/dsh-auto-team) | 0 | 2026-11-02 | 2026-11-16 | 自动团队：把一个目标拆成带依赖的任务图，按角色自动组队并行派发，每个子 Agent 独立模型，完成必须过门禁。 |
| 213 | [markthc/dsh-caidazi-boards](https://github.com/markthc/dsh-caidazi-boards) | 0 | 2026-11-12 | 2026-11-16 | 财搭子研究看板 · Caidazi Research Boards for DeepSeek Harness: memory, AI infrastructure, PCB/CCL and US data-center policy, with MCP market data and updateable research. |
| 214 | [MiraculousGu/dsh-app-controls](https://github.com/MiraculousGu/dsh-app-controls) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness Web GUI toolbar + KDE tray + plugin settings: tray toggle, per-feature visibility, remembered default window size, check/update DSH, quit/restart. |
| 215 | [mizuki5101/dsh-refuse-compaction](https://github.com/mizuki5101/dsh-refuse-compaction) | 0 | 2026-11-15 | 2026-11-16 | 拦截 dsh 自动触发的上下文压缩（四档策略 + 会话内占用仪表 + exa-distill 精简联动），手动 /compact 不受影响 |
| 216 | [mm24trg2gy-star/dsh-plugin-publish](https://github.com/mm24trg2gy-star/dsh-plugin-publish) | 0 | 2026-11-16 | 2026-11-16 | 给 DSH 插件仓库用的发布模板：推 tag 自动 npm publish（Trusted Publishing / OIDC，无需 token） |
| 217 | [mount9527/paper-dual-reducer](https://github.com/mount9527/paper-dual-reducer) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：论文双降工作台 —— 诊断 + 闭环改写 + AIGC 考官（检测/9 维诊断/校准/前后对比）+ 零依赖报告渲染。 |
| 218 | [mouse985/dsh-context-cap](https://github.com/mouse985/dsh-context-cap) | 0 | 2026-11-16 | 2026-11-16 | Composer control that caps the routed model context window so automatic compaction fires earlier and long conversations stay cheap. |
| 219 | [MrKleene/dsh-aoci-keeper](https://github.com/MrKleene/dsh-aoci-keeper) | 0 | 2026-11-16 | 2026-11-16 | Keeps an AOCI cognition index aligned in DeepSeek Harness by surfacing governance findings to the model at turn start. |
| 220 | [MuMu-bee/dsh-purge-022-compat](https://github.com/MuMu-bee/dsh-purge-022-compat) | 0 | 2026-11-16 | 2026-11-16 | dsh-purge 1.1.71 兼容性副本：继续跑在 DeepSeek Harness 0.2.2-rc.3（desktop）上 —— 72/79 补丁 applied、0 pending，附 compat 层来源与验证脚本。MIT，保留上游署名。compat build of dsh-purge for DSH 0.2.2-rc.3 |
| 221 | [mumu1001ai-jpg/dsh-dingpan](https://github.com/mumu1001ai-jpg/dsh-dingpan) | 0 | 2026-11-16 | 2026-11-16 | 盯盘插件：A股/港股/美股/韩股/富时A50 实时行情，日周月K线，全球市场与板块，存储价格，任务栏价格胶囊 |
| 222 | [myhylijp/my-dsh-connector-hub](https://github.com/myhylijp/my-dsh-connector-hub) | 0 | 2026-11-16 | 2026-11-16 | 卡片式展示服务名、传输方式与地址，并可对每个连接器做一次初始化探测 |
| 223 | [myhylijp/my-dsh-message-search](https://github.com/myhylijp/my-dsh-message-search) | 0 | 2026-11-16 | 2026-11-16 | 按当前会话、工作区或全部会话检索消息正文 |
| 224 | [myhylijp/my-dsh-skill-hub](https://github.com/myhylijp/my-dsh-skill-hub) | 0 | 2026-11-16 | 2026-11-16 | 上传 SKILL.md 或 ZIP 即可安装；在侧栏「技能」页按角色（agent 预设）授权外部技能，并可逐个启用或停用该角色自带的系统内置技能。未授权的技能不会进入模型的技能目录，模型也无法加载 |
| 225 | [Na2Cr2O7/dsh-qq-automate](https://github.com/Na2Cr2O7/dsh-qq-automate) | 0 | 2026-11-16 | 2026-11-16 | 纯模拟无注入QQNT机器人框架。 |
| 226 | [NB-Corp/nb-speak-dsh](https://github.com/NB-Corp/nb-speak-dsh) | 0 | 2026-11-16 | 2026-11-16 | Zero-dependency DeepSeek Harness (DSH) native IM bubble &amp; ElevenLabs v4 voice-note plugin: send_bubble + exec.concludeTurn(), 22-bar waveform pills, and copyable turnTail artifact cards. |
| 227 | [NekogamiJam/dsh-context-monitor](https://github.com/NekogamiJam/dsh-context-monitor) | 0 | 2026-11-16 | 2026-11-16 | Read-only DSH context, usage and native compaction telemetry with optional billion-context-dsh integration |
| 228 | [Nesarf/dgupb](https://github.com/Nesarf/dgupb) | 0 | 2026-11-16 | 2026-11-16 | Useful local plugins for dsh-go: IME character panel, Termux tools, Trime console |
| 229 | [Night-ended-dawn-not-broken/dsh-knowledge-base](https://github.com/Night-ended-dawn-not-broken/dsh-knowledge-base) | 0 | 2026-11-16 | 2026-11-16 | Manually curated knowledge base plugin for DeepSeek Harness: encryption, prompts, and knowledge-first web search. |
| 230 | [Night-ended-dawn-not-broken/dsh-sidebar-editor](https://github.com/Night-ended-dawn-not-broken/dsh-sidebar-editor) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness right-sidebar file editor, file manager, and Git panel. |
| 231 | [O0range0O/dsh-antigravity](https://github.com/O0range0O/dsh-antigravity) | 0 | 2026-11-16 | 2026-11-16 | Google Antigravity models (Gemini, Claude, GPT-OSS) for DeepSeek Harness, with a live 5-hour/weekly quota chip |
| 232 | [oh-dsh-plugins/dsh-agentdeck](https://github.com/oh-dsh-plugins/dsh-agentdeck) | 0 | 2026-11-16 | 2026-11-16 | Native scene agents and bilingual management for DeepSeek Harness, with explicit model policy and scoped tools. |
| 233 | [Oldfoollearnc/dsh-dev-list](https://github.com/Oldfoollearnc/dsh-dev-list) | 0 | 2026-11-16 | 2026-11-16 | DSH 侧边栏「开发列表」插件：功能/Bug/待办三类条目、类型筛选、拖动排序、完成音效 |
| 234 | [oxmumu3/dsh-incidental-learn](https://github.com/oxmumu3/dsh-incidental-learn) | 0 | 2026-11-15 | 2026-11-16 | 在日常与 Agent 协作中顺手攒经验、沉淀个人技能库的 DeepSeek Harness 插件（对话末尾低调学习卡 + 后台自动存档 + 右侧边聊边学） |
| 235 | [p33333333333333l/dsh-specialist-team](https://github.com/p33333333333333l/dsh-specialist-team) | 0 | 2026-11-16 | 2026-11-16 | DSH specialist teams: task routing, model selection, and scoped assignments |
| 236 | [Paradox1278/session-mail-notifier](https://github.com/Paradox1278/session-mail-notifier) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: email a structured completion report when a watched Session finishes a turn |
| 237 | [pcysanji/dsh-context-ruler](https://github.com/pcysanji/dsh-context-ruler) | 0 | 2026-11-16 | 2026-11-16 | Context guard for DeepSeek Harness: live payload size on the answer action row, warn/danger colors, one-click handoff (draft only). |
| 238 | [pcysanji/dsh-sidebar-density](https://github.com/pcysanji/dsh-sidebar-density) | 0 | 2026-11-16 | 2026-11-16 | Sidebar density controls for DeepSeek Harness: row height, spacing, font size, logo size, new-session height, double-column plugins, plus patch-gated caption height/font and unlocked sidebar width. |
| 239 | [peter9130/dsh-model-folders](https://github.com/peter9130/dsh-model-folders) | 0 | 2026-11-16 | 2026-11-16 | Folder-grouped model picker for the DSH composer: one folder layer per provider or per model family. |
| 240 | [peter9130/dsh-permission-modes](https://github.com/peter9130/dsh-permission-modes) | 0 | 2026-11-16 | 2026-11-16 | Two independent composer controls over the DSH permission presets: file permission (sandbox) and approval policy, each switching one dimension with six presets behind them. |
| 241 | [peter9130/dsh-plugin-settings-hub](https://github.com/peter9130/dsh-plugin-settings-hub) | 0 | 2026-11-16 | 2026-11-16 | 把各插件的设置页集中到设置 → 内置插件里：新增「插件设置」标签页列出插件卡片，点插件直接打开它的设置页，并从设置导航中隐藏这些插件的独立入口。 Collects the settings pages contributed by installed plugins into the built-in Plugins settings page and hides their separate settings-navigation entries. |
| 242 | [peter9130/dsh-reasoning-level-slider](https://github.com/peter9130/dsh-reasoning-level-slider) | 0 | 2026-11-16 | 2026-11-16 | Adds a reasoning-effort slider to the composer model menu so one drag switches the current model's reasoning level. |
| 243 | [porphyra9423-wq/dsh-agents-keeper](https://github.com/porphyra9423-wq/dsh-agents-keeper) | 0 | 2026-11-16 | 2026-11-16 | Keep a workspace AGENTS.md in sync with the project: detect real changes, draft updates or a compacted version in a subagent, preview the diff, back up, then write. |
| 244 | [Poy-Coder/dsh-channel-wechat-ilink](https://github.com/Poy-Coder/dsh-channel-wechat-ilink) | 0 | 2026-11-16 | 2026-11-16 | WeChat (iLink / ClawBot) channel for DeepSeek Harness: plain-text staged answers, typing progress, media both ways, one workspace per channel. |
| 245 | [Poy-Coder/dsh-im-indicator](https://github.com/Poy-Coder/dsh-im-indicator) | 0 | 2026-11-16 | 2026-11-16 | Lightweight IM channel indicator for the DSH session list: one capsule + one status dot on the Session each channel is driving. Zero dependencies, ~7 kB. |
| 246 | [poznik/dsh-mods](https://github.com/poznik/dsh-mods) | 0 | 2026-11-16 | 2026-11-16 | Unofficial mods (plugins) for DeepSeek Harness |
| 247 | [qcasda/dsh-video-read](https://github.com/qcasda/dsh-video-read) | 0 | 2026-11-16 | 2026-11-16 | Read any web video page into a timestamped text timeline via headless Edge + OCR. Windows only. |
| 248 | [QcWyGm/dsh-config-sync-plugin](https://github.com/QcWyGm/dsh-config-sync-plugin) | 0 | 2026-11-11 | 2026-11-16 | DSH 插件：配置同步体检面板 + 退出后执行的 push/pull/restore 脚本；标准 DSH bundle，自带 runtime。 |
| 249 | [qikairo7/dsh-github-review](https://github.com/qikairo7/dsh-github-review) | 0 | 2026-11-16 | 2026-11-16 | GitHub PR review bot inside DeepSeek Harness: auto-triggered review Sessions with P0-P3 severities, auto-fix, thread replies, and a lessons ledger |
| 250 | [qing-gu-web/dsh-optimize-prompt](https://github.com/qing-gu-web/dsh-optimize-prompt) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: one-click prompt rewrite into a structured specification. Preserves variables, code, URLs and numbers. \| 提示词一键改写成结构化规格 |
| 251 | [qinyuan1017/dsh-wechat-filehelper](https://github.com/qinyuan1017/dsh-wechat-filehelper) | 0 | 2026-11-16 | 2026-11-16 | 🐦 让 AI 把文件一把甩进你的微信（文件传输助手）· Send files from your agent straight to WeChat — one QR scan, then just ask · DeepSeek Harness plugin |
| 252 | [qq304379685/dsh-lanhu-dashboard-x](https://github.com/qq304379685/dsh-lanhu-dashboard-x) | 0 | 2026-11-16 | 2026-11-16 | DSH 的蓝湖面板插件 |
| 253 | [qq304379685/dsh-zentao-dashboard-x](https://github.com/qq304379685/dsh-zentao-dashboard-x) | 0 | 2026-11-16 | 2026-11-16 | DSH Web UI 里的禅道面板：缺陷、我的待办、迭代任务与需求，带筛选/详情/时间线/操作/批量，并注册 4 个助手工具供会话读写禅道。 |
| 254 | [QSH2/dsh-gitpub](https://github.com/QSH2/dsh-gitpub) | 0 | 2026-11-16 | 2026-11-16 | GitHub 安全发布工具（DSH 插件）：仓库检查、Release 校验、Actions 发版工作流、设置页与内置多文件指南。 |
| 255 | [ReGan520/dsh-spring-countdown](https://github.com/ReGan520/dsh-spring-countdown) | 0 | 2026-11-16 | 2026-11-16 | 过年倒计时：在 DeepSeek Harness 左侧栏新增「倒计时」入口，面板每秒跳动显示距除夕 / 正月初一的天数 |
| 256 | [Ri0n72Y/dsh-mindppt](https://github.com/Ri0n72Y/dsh-mindppt) | 0 | 2026-09-26 | 2026-11-16 | script driven mindmap-first powerpoint style presentation slices |
| 257 | [rj-yejianping/dsh-aiterm](https://github.com/rj-yejianping/dsh-aiterm) | 0 | 2026-11-16 | 2026-11-16 | SSH and Telnet terminals for DeepSeek Harness (DSH). Multi-session tabs where a human and an AI share the same real terminal: per-session AI permissions (read-only / write-only / read-write), control handoff, delta reads, searchable history, batch scripts, audit trail. |
| 258 | [rj-yejianping/dsh-memtree](https://github.com/rj-yejianping/dsh-memtree) | 0 | 2026-11-16 | 2026-11-16 | Long-term memory for DeepSeek Harness: memory-as-file (MEMORY.md, daily notes, digest knowledge), notes the agent writes itself, nightly Auto Dream consolidation, and hybrid BM25 + vector search with wikilink expansion. |
| 259 | [rj-yejianping/dsh-skill-pool](https://github.com/rj-yejianping/dsh-skill-pool) | 0 | 2026-11-16 | 2026-11-16 | The skill pool for DeepSeek Harness (DSH): import skills from files, ZIP, GitHub or GitLab, group them by repo, and decide which Agent modes &amp; workspaces each one loads in — from a GUI, no config files. |
| 260 | [Root-7-KHX/onebot-panel](https://github.com/Root-7-KHX/onebot-panel) | 0 | 2026-11-16 | 2026-11-16 | 个人号接入（OneBot v11 / NapCat）：给 AI记忆 的 QQ 接入提供独立的个人号通道入口。 |
| 261 | [royrao2007/mont-BidCopilot](https://github.com/royrao2007/mont-BidCopilot) | 0 | 2026-11-13 | 2026-11-16 | Dual-mode tender and bid drafting engine for DeepSeek Harness: 32 callable mont_* tools, code-enforced compliance (T-B1 to T-B5), offline Chinese policy library, rejection-item checks, multi-lot outlines, task progress, human gates with tamper-evident audit chain, pure-JS .docx export. |
| 262 | [royrao2007/mont-forge-pipeline](https://github.com/royrao2007/mont-forge-pipeline) | 0 | 2026-11-13 | 2026-11-16 | Mont Forge: 45 production-grade engineering skills plus 11 callable lifecycle tools for AI coding agents (DSH, Pi, Claude Code, Codex, Gemini). |
| 263 | [sanmumu-325/dsh-bead-studio](https://github.com/sanmumu-325/dsh-bead-studio) | 0 | 2026-11-16 | 2026-11-16 | DSH bead-art workbench with local conversion, editing, exports and optional experimental image AI. |
| 264 | [sarsgy-wenjian/dsh-shenjia-search](https://github.com/sarsgy-wenjian/dsh-shenjia-search) | 0 | 2026-11-16 | 2026-11-16 | 沈家故事统一检索：一个工具同时查文档索引（基准/记忆库/资料库/规范，带身份与版本）和黑鲸会话索引。 |
| 265 | [ScVision1993/dsh-taotao-stock](https://github.com/ScVision1993/dsh-taotao-stock) | 0 | 2026-11-16 | 2026-11-16 | 桃桃股市工具 🍑 — A股看盘 DSH 插件（LeekBox 1:1 复刻 · MIT） |
| 266 | [seacoral1223/dsh-connect-dumate](https://github.com/seacoral1223/dsh-connect-dumate) | 0 | 2026-11-15 | 2026-11-16 | 把百度搭子（DuMate）的模型与积分接入 DeepSeek Harness |
| 267 | [shamanjin/dsh-image-studio](https://github.com/shamanjin/dsh-image-studio) | 0 | 2026-11-12 | 2026-11-16 | DSH 插件：多套 OpenAI 兼容生图配置，支持文生图与图生图 |
| 268 | [shaobingtongzhi/dsh-ops-workbench](https://github.com/shaobingtongzhi/dsh-ops-workbench) | 0 | 2026-11-16 | 2026-11-16 | DSH 运维工作台：SSH 只读巡检、健康总览、13 个排障动作、每日运维日报 · Server ops workbench plugin for DeepSeek Harness |
| 269 | [shaun1911/dsh-live2d-pet](https://github.com/shaun1911/dsh-live2d-pet) | 0 | 2026-11-16 | 2026-11-16 | DSH Live2D desktop pet plugin: switchable models, mouse-follow, expressions &amp; motions |
| 270 | [Sinales733/dsh-motion](https://github.com/Sinales733/dsh-motion) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 插件：会动的鲸尾指示器和工具图标 / A DeepSeek Harness plugin: a living whale tail in the running indicator and animated tool icons |
| 271 | [Sinales733/dsh-music](https://github.com/Sinales733/dsh-music) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 插件：歌词、封面背景、跟着鼓点的鲸尾 / A DeepSeek Harness plugin: lyrics, a flowing cover background and a whale tail on the beat |
| 272 | [Siphon2673/dsh-submodelrouter](https://github.com/Siphon2673/dsh-submodelrouter) | 0 | 2026-11-16 | 2026-11-16 | Two-tier (normal/high) effort routing for DSH subagent delegation |
| 273 | [sirius2alpha/dsh-agent-history-import](https://github.com/sirius2alpha/dsh-agent-history-import) | 0 | 2026-11-16 | 2026-11-16 | Import local Codex, Pi, and Claude Code conversation histories into DSH and continue them |
| 274 | [sirius2alpha/dsh-session-retitle](https://github.com/sirius2alpha/dsh-session-retitle) | 0 | 2026-11-16 | 2026-11-16 | One-click session title regeneration for DeepSeek Harness: header button, header menu row, /retitle command, and retitle_session agent tool. |
| 275 | [site-chenwei/dsh-lanhu-dds](https://github.com/site-chenwei/dsh-lanhu-dds) | 0 | 2026-11-16 | 2026-11-16 | 蓝湖 DDS（转代码）接入 DeepSeek Harness：设计图 → 结构/几何/文案事实 → 像素级还原。零依赖 DSH 插件。 |
| 276 | [sjdhdbbf/dsh-doubao-gateway](https://github.com/sjdhdbbf/dsh-doubao-gateway) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 原生豆包模型插件：工作账号池、浏览器登录、多模态创作、用量与日志 |
| 277 | [skhdjsh/dsh-turtle-soup](https://github.com/skhdjsh/dsh-turtle-soup) | 0 | 2026-11-16 | 2026-11-16 | 这是一个用于游玩海龟汤的插件，支持上传题目到题库、分类、打分、难度评级等。 |
| 278 | [skyrocks/dsh-mail-digest](https://github.com/skyrocks/dsh-mail-digest) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness 插件：自动整理邮箱，每轮留一份能看的报告（重点 / 需要处理 / 线程进展） |
| 279 | [smitfire/board](https://github.com/smitfire/board) | 0 | 2026-11-16 | 2026-11-16 | DSH native WebUI Kanban &amp; DAG coordination board plugin + MCP server |
| 280 | [smitfire/codemode](https://github.com/smitfire/codemode) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin &amp; MCP server for Code Mode (PTC) with FTS5 output slicing, stateful variables, and tool shortlisting |
| 281 | [smitfire/context](https://github.com/smitfire/context) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin &amp; MCP server for Forewisp dynamic context injection and validated upserts |
| 282 | [smitfire/cuga](https://github.com/smitfire/cuga) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin &amp; MCP server for IBM CUGA-inspired policy guards, adaptive reasoning, and trajectory reuse |
| 283 | [smitfire/ns-dsh](https://github.com/smitfire/ns-dsh) | 0 | 2026-11-16 | 2026-11-16 | Personal plugin distribution, micro-telemetry harness, and upstream canary for DeepSeek Harness (dsh) |
| 284 | [smitfire/team](https://github.com/smitfire/team) | 0 | 2026-11-16 | 2026-11-16 | DSH team orchestrator, isolated worktree workers, visible advisor, and OCR/cross-family review gate |
| 285 | [soffits/dsh-message-context](https://github.com/soffits/dsh-message-context) | 0 | 2026-11-16 | 2026-11-16 | Tell a DeepSeek Harness model who sent each message, where, when and what it replies to, from channel metadata. One format for Telegram, Matrix, Web and agent messages. |
| 286 | [SonettoGu14/dsh-tokeneconomizer](https://github.com/SonettoGu14/dsh-tokeneconomizer) | 0 | 2026-11-16 | 2026-11-16 | Cache-weighted cost accounting, repository facts and evidence-driven tool pruning for DeepSeek Harness (native TypeScript port of TokenEconomizer) |
| 287 | [songshun1021/workfiles-assistant](https://github.com/songshun1021/workfiles-assistant) | 0 | 2026-11-14 | 2026-11-16 | DeepSeek Harness 的 macOS 资料助手：⌘⇧Space 说一句话，找回并打开最近看过的文档与网页。本地 7 天线索 + 范围检索 + 受控打开，默认不记录。A voice-first local work-documents assistant for DeepSeek Harness. |
| 288 | [sonruozimu/mbcc-console-wallpaper](https://github.com/sonruozimu/mbcc-console-wallpaper) | 0 | 2026-11-16 | 2026-11-16 | MBCC console theme for DeepSeek Harness: skippable opening video plus a local wallpaper library (upload, slideshow, opacity, accent). |
| 289 | [SpringRinbowCat/dsh-algorithm-tools](https://github.com/SpringRinbowCat/dsh-algorithm-tools) | 0 | 2026-11-04 | 2026-11-16 | 算法训练台：Codeforces/AtCoder 刷题同步、弱项分析、每日三档训练、Rank 复盘、赛事与打卡。Training workbench for competitive programming: sync, weak-tag analysis, daily three-band problem sets, contest review, check-in calendar. |
| 290 | [StellatoL/dsh-retro](https://github.com/StellatoL/dsh-retro) | 0 | 2026-08-16 | 2026-11-16 | The experience retrospective plugin which organizes goals, feedback, and tool failures from conversations into retrospective drafts, which are then manually reviewed and distilled into an Obsidian knowledge base, with support for weekly reports, rule proposals, and blog integration. |
| 291 | [SunspotAlgo/dsh-archive-pro](https://github.com/SunspotAlgo/dsh-archive-pro) | 0 | 2026-11-16 | 2026-11-16 | Archive manager pro for DeepSeek Harness: search, filter, sort, multi-select, unarchive, and permanently delete archived sessions. |
| 292 | [SunspotAlgo/dsh-pin-default-model](https://github.com/SunspotAlgo/dsh-pin-default-model) | 0 | 2026-11-16 | 2026-11-16 | Pins the DeepSeek Harness default model so switching models inside a session no longer changes what new sessions start with. |
| 293 | [swswordholy-tech/AgentsChat](https://github.com/swswordholy-tech/AgentsChat) | 0 | 2026-03-31 | 2026-11-16 | AgentsChat (Agents Chat) — Shared MCP rooms &amp; social network for AI coding agents (Claude Code, Codex, DSH, Antigravity, Cursor, OpenClaw, Hermes) and humans, plus 24/7 cloud CLI sandboxes. |
| 294 | [T-splines/dsh-compaction-policy-engine](https://github.com/T-splines/dsh-compaction-policy-engine) | 0 | 2026-11-15 | 2026-11-16 | 为 DeepSeek Harness 提供分层、热加载的上下文压缩策略：供应商级规则、字段继承、比例/token 双单位、设置面板。 · Layered, live-reloading context compaction policy for DSH with provider rules, inheritance and a settings panel. |
| 295 | [T-splines/dsh-llm-resilience](https://github.com/T-splines/dsh-llm-resilience) | 0 | 2026-11-15 | 2026-11-16 | 为 DeepSeek Harness 的 LLM 路由提供按 target 重试、流式安全回退链与持久化熔断。 · Per-target retries, streaming-safe fallback chains and a persistent circuit breaker for DSH LLM routes. |
| 296 | [T-splines/dsh-web-fallback-chain](https://github.com/T-splines/dsh-web-fallback-chain) | 0 | 2026-11-15 | 2026-11-16 | 为 DeepSeek Harness 提供按质量排序、成本感知的搜索/抓取回退链：实测排序、free-only、一个设置页。 · Ranked, cost-aware web search/fetch fallback chains for DSH. |
| 297 | [TerebiSAMA/dsh-plugin-update-all](https://github.com/TerebiSAMA/dsh-plugin-update-all) | 0 | 2026-11-16 | 2026-11-16 | One-click plugin update tab for the DeepSeek Harness Plugins page: check every installed plugin for a newer version and update them all in one pass, Git-pinned plugins included. |
| 298 | [tianshi1231/dsh-seawork-usage](https://github.com/tianshi1231/dsh-seawork-usage) | 0 | 2026-11-16 | 2026-11-16 | Seawork balance / 5h / weekly quota in the DeepSeek Harness session header (DSH bundle plugin) |
| 299 | [TideDra/dsh-codex-mode](https://github.com/TideDra/dsh-codex-mode) | 0 | 2026-11-16 | 2026-11-16 | 1:1 OpenAI Codex CLI agent preset for DeepSeek Harness — GPT-6 CodeMode, Direct tools, V4A fuzzy patch editing, unified PTY execution, and Multi-Agent V2 with an Ultra toggle. |
| 300 | [Tiger20240331/Intschool](https://github.com/Tiger20240331/Intschool) | 0 | 2026-11-16 | 2026-11-16 | Radar on Intschool_Skill_v1.1 — one-page IntSchool radar report card skill for any subject teacher, tutor, coordinator or administrator. |
| 301 | [tolatolatop/dsh-acp-sidechat](https://github.com/tolatolatop/dsh-acp-sidechat) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness right-sidebar ACP chat: ThinkThread daemon or local ACP agent, native conversation rendering, session switching |
| 302 | [tongqing1130-png/dsh-skill-zh](https://github.com/tongqing1130-png/dsh-skill-zh) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：把技能菜单里的英文说明翻成简体中文并压成一句话，新装技能自动翻译。 |
| 303 | [trmquang93/dsh-claude-code-account](https://github.com/trmquang93/dsh-claude-code-account) | 0 | 2026-11-13 | 2026-11-16 | Use a Claude Code (Claude Pro/Max) sign-in as a DSH model provider — keeps the pi-ai credential in sync with the Claude Code keychain. |
| 304 | [tsd619124/dsh-connect-comate](https://github.com/tsd619124/dsh-connect-comate) | 0 | 2026-11-16 | 2026-11-16 | 把本机已登录的文心快码（Comate / Zulu）接入 DeepSeek Harness 的插件 |
| 305 | [ugolnikov/dsh-gothic-theme](https://github.com/ugolnikov/dsh-gothic-theme) | 0 | 2026-11-16 | 2026-11-16 | Gothic theme for the DeepSeek Harness Web UI: black, grey and burgundy palette with a cathedral-window brand mark |
| 306 | [uia040808-design/dsh-connect-sensetime](https://github.com/uia040808-design/dsh-connect-sensetime) | 0 | 2026-11-08 | 2026-11-16 | DSH bundle plugin that bridges the locally signed-in SenseTime Raccoon desktop client into DeepSeek Harness: sidebar credits/model panel plus an OpenAI-compatible endpoint. |
| 307 | [v8srm7p5tj-lgtm/dsh-story-loom](https://github.com/v8srm7p5tj-lgtm/dsh-story-loom) | 0 | 2026-11-16 | 2026-11-16 | 织世：DSH 左侧栏的长篇小说只读故事档案。AI 在对话里记账、从正文自动扒伏笔，维护人物/力量/时间线/大纲/地图，并做连续性检查。 |
| 308 | [VeillessRose/dsh-ai-fastvideo](https://github.com/VeillessRose/dsh-ai-fastvideo) | 0 | 2026-11-10 | 2026-11-16 | AI 速成视频（DSH 插件）——341 种风格提示词，一句话生成视频：每个场景对应一个 Canvas 页面，逐帧渲染，TTS + BGM + SFX。 |
| 309 | [versot/dsh-workspace-skill-scope](https://github.com/versot/dsh-workspace-skill-scope) | 0 | 2026-11-12 | 2026-11-16 | Per-workspace skill visibility for DeepSeek Harness: one .dsh/skill-scope.yml plus a checklist panel, enforced for every preset (and for sessions that already exist). |
| 310 | [VFVrPQ/dsh-preview-image](https://github.com/VFVrPQ/dsh-preview-image) | 0 | 2026-11-16 | 2026-11-16 | Image preview for DeepSeek Harness: zoom, pan, rotate and full screen in the right-Sidebar document preview and the conversation lightbox. |
| 311 | [vicfei/agentdiary-dsh-plugin](https://github.com/vicfei/agentdiary-dsh-plugin) | 0 | 2026-11-12 | 2026-11-16 | agentdiary for DeepSeek Harness — your agents keep a diary, in your own git repo |
| 312 | [vicfei/dsh-ai-hedge-fund](https://github.com/vicfei/dsh-ai-hedge-fund) | 0 | 2026-11-16 | 2026-11-16 | An AI hedge fund of investor legends on DeepSeek Harness — Buffett/Munger/Lynch/Wood value independently, PM aggregates with named influences &amp; recorded dissent. Inspired by virattt/ai-hedge-fund (not affiliated). |
| 313 | [vicfei/dsh-auto-ontology](https://github.com/vicfei/dsh-auto-ontology) | 0 | 2026-11-16 | 2026-11-16 | Auto ontology construction for DeepSeek Harness — two-pass LLM pipeline (TBox schema, ABox assertions) with evidence quotes on every entity/relation and type-guard against silent drops. Implements the concept of NVIDIA/auto-ontology. Not affiliated. |
| 314 | [vicfei/dsh-CCXT](https://github.com/vicfei/dsh-CCXT) | 0 | 2026-11-16 | 2026-11-16 | 100+ crypto exchanges as DeepSeek Harness tools, fail-closed by design — read catalog flows freely; orders need triple-arming + notional cap + whitelist, enforced in code the LLM cannot bypass. Built on ccxt (MIT). Not affiliated. |
| 315 | [vicfei/dsh-evidence-plugin](https://github.com/vicfei/dsh-evidence-plugin) | 0 | 2026-11-12 | 2026-11-16 | The evidence ledger from dsh-super-agent, inside DeepSeek Harness — hash-chained, append-only, tamper-evident |
| 316 | [vicfei/dsh-freqtrade](https://github.com/vicfei/dsh-freqtrade) | 0 | 2026-11-16 | 2026-11-16 | A GPL-free strategy-bot toolkit for DeepSeek Harness — declarative strategy pack (SMA/RSI/Donchian/MACD) + one deterministic runner with fees and stops. Clean-room implementation of the freqtrade concept (upstream is GPL-3.0; zero code relation). Not affiliated. |
| 317 | [vicfei/dsh-hummingbot](https://github.com/vicfei/dsh-hummingbot) | 0 | 2026-11-16 | 2026-11-16 | Pure market making, natively on DeepSeek Harness — spread quotes + inventory skew + circuit breaker as a deterministic simulator on real 1m data; caveats on every payload; live routing guarded off. Implements the core concept of Hummingbot (Apache-2.0). Not affiliated. |
| 318 | [vicfei/dsh-jesse](https://github.com/vicfei/dsh-jesse) | 0 | 2026-11-16 | 2026-11-16 | Strategy parameter optimization for DeepSeek Harness — grid sweeps with fee-aware backtests, train/test split, overfit-gap column and multiple-testing discounts. Implements the core concept of Jesse (MIT). Not affiliated. |
| 319 | [vicfei/dsh-Kronos](https://github.com/vicfei/dsh-Kronos) | 0 | 2026-11-16 | 2026-11-16 | K-line scenario forecasting for DeepSeek Harness — seeded, reproducible bootstrap fans (P10-P90) from real history; the zero-dependency statistical baseline that neural foundation models must beat. The concept slot of Kronos (47.9k★, MIT). Not affiliated. |
| 320 | [vicfei/dsh-nautilus_trader](https://github.com/vicfei/dsh-nautilus_trader) | 0 | 2026-11-16 | 2026-11-16 | NautilusTrader (31.6k★) as DeepSeek Harness tools — professional event-driven backtesting with compiled-core indicators, fee-aware accounting, honest result metadata; live trading guarded off. LGPL-clean posture (unmodified pip dependency). Not affiliated. |
| 321 | [vicfei/dsh-OpenBB](https://github.com/vicfei/dsh-OpenBB) | 0 | 2026-11-16 | 2026-11-16 | The OpenBB data platform (75k★, Apache-2.0) as DeepSeek Harness tools — curated catalog, deterministic bridge, provider/timestamp provenance; LLM plans &amp; interprets, never invents numbers. Not affiliated with OpenBB. |
| 322 | [vicfei/dsh-QuantLib](https://github.com/vicfei/dsh-QuantLib) | 0 | 2026-11-16 | 2026-11-16 | Derivatives pricing as DeepSeek Harness tools — BS76 with full Greeks, implied vol, CRR American binomials; zero-dependency core with built-in self-tests (parity, Greek identities, IV round-trip). Implements the core of QuantLib. Not affiliated. |
| 323 | [vicfei/dsh-quantstats](https://github.com/vicfei/dsh-quantstats) | 0 | 2026-11-16 | 2026-11-16 | Performance tearsheets for DeepSeek Harness — Sharpe/Sortino/Calmar/drawdown/VaR computed deterministically, zero-dependency SVG reports, assumptions disclosed and sample-size alarms on every output. Implements the core concept of QuantStats (Apache-2.0). Not affiliated. |
| 324 | [vicfei/dsh-TradingAgents](https://github.com/vicfei/dsh-TradingAgents) | 0 | 2026-11-16 | 2026-11-16 | TradingAgents, natively on DeepSeek Harness — 多智能体投研议院：bull/bear 辩论 + 风控护栏 + 可审计裁决（IC-MEMO），PASS 弃权是一等输出。Inspired by TauricResearch/TradingAgents &amp; virattt/ai-hedge-fund (not affiliated). |
| 325 | [vicfei/dsh-Vibe-Trading](https://github.com/vicfei/dsh-Vibe-Trading) | 0 | 2026-11-16 | 2026-11-16 | Interactive trading research on DeepSeek Harness — orchestrated plan→data→compute→explain loop; numbers from a deterministic layer only, findings cite their computations; zero-dependency SVG chart cards + auditable trails. Inspired by HKUDS/Vibe-Trading (not affiliated). |
| 326 | [vicfei/dsh-WrenAI](https://github.com/vicfei/dsh-WrenAI) | 0 | 2026-11-16 | 2026-11-16 | A self-hosted semantic layer for DeepSeek Harness — natural-language data questions with metric calibers riding on every result; single-SELECT guard, self-heal SQL. Implements the differentiated core of WrenAI. Not affiliated. |
| 327 | [vioeveann/dsh-rhine-lab-theme](https://github.com/vioeveann/dsh-rhine-lab-theme) | 0 | 2026-11-15 | 2026-11-16 | DeepSeek Harness 莱茵生命主题（重制版）：基于 Galaxy-2001 的 MIT 项目重建，两套皮肤、顶栏标志与去水印背景。 |
| 328 | [vip-pan/dsh-codemap](https://github.com/vip-pan/dsh-codemap) | 0 | 2026-11-16 | 2026-11-16 | Project-scoped code graph tools for DeepSeek Harness, backed by the codemap CLI over MCP. |
| 329 | [w125342201-rgb/dsh-pdf-block-translate](https://github.com/w125342201-rgb/dsh-pdf-block-translate) | 0 | 2026-11-16 | 2026-11-16 | Layout-preserving PDF translation for DeepSeek Harness without an API key or vision model: the session model fills text blocks, Python replaces text in place and refuses to emit a PDF that fails QC. |
| 330 | [wanan8396/dsh-frida-toolkit](https://github.com/wanan8396/dsh-frida-toolkit) | 0 | 2026-11-16 | 2026-11-16 | Frida toolkit for DeepSeek Harness (DSH): a sidebar workbench plus a \`frida\` agent tool to list devices/processes, attach or spawn, load JS (3 bundled scripts), call rpc.exports and read messages. |
| 331 | [wanan8396/dsh-github-manager](https://github.com/wanan8396/dsh-github-manager) | 0 | 2026-11-16 | 2026-11-16 | Full-permission GitHub manager for DeepSeek Harness: browser OAuth with all scopes, AES-256-GCM multi-account vault, and 37 agent tools for repos, files, SSH/GPG/deploy keys, Actions secrets and workflows. |
| 332 | [wangjianghu/weread-dsh](https://github.com/wangjianghu/weread-dsh) | 0 | 2026-11-16 | 2026-11-16 | 微信读书笔记 × DeepSeek Harness / AI 工作流：Markdown 同步导出、全文搜索、阅读洞察、SM-2 笔记漫游、会话内 Agent 工具与跨宿主 MCP 服务 \| WeRead notes × DeepSeek Harness &amp; AI: Markdown sync &amp; export, full-text search, reading insights, SM-2 note roaming, in-session agent tools &amp; cross-host MCP server. |
| 333 | [wangxun996/dsh-rea-tools](https://github.com/wangxun996/dsh-rea-tools) | 0 | 2026-11-16 | 2026-11-16 | REA (Reverse Engineer Anything) tools for DeepSeek Harness: mounts the rea-agents MCP engine and exposes 16 curated rea_* tools plus a rea_tools/rea_call gateway over all 255. |
| 334 | [wangyu-geek/agent-terminal-bridge](https://github.com/wangyu-geek/agent-terminal-bridge) | 0 | 2026-10-15 | 2026-11-16 | An open-source CLI that lets an agent work inside an SSH/tmux session you logged into yourself, while you keep control of login and authorization. |
| 335 | [WangZW928/dsh-writing-style](https://github.com/WangZW928/dsh-writing-style) | 0 | 2026-11-05 | 2026-11-16 | Private DSH writing-style prototype with genre-aware workflows, source corpus and versioned style profiles. |
| 336 | [wanwen371/dsh-token-summary](https://github.com/wanwen371/dsh-token-summary) | 0 | 2026-11-04 | 2026-11-16 | 每累计 1000 万 token 自动把一个 DeepSeek Harness 会话总结成 Markdown 归档 · DSH host plugin |
| 337 | [WBMGGGG/dsh-opticforge](https://github.com/WBMGGGG/dsh-opticforge) | 0 | 2026-11-16 | 2026-11-16 | OpticForge 1.2.0: KB-first optical-engineering task assistant for DeepSeek Harness. Five tools, 40 sections / 324 entries, 19 formula cards, DSH Skill, no calculator, zero runtime dependencies. |
| 338 | [WhitePlusMS/dsh-redis](https://github.com/WhitePlusMS/dsh-redis) | 0 | 2026-10-19 | 2026-11-16 | A Redis workspace for DeepSeek Harness with connection management, data browsing, search, and conversation tools. |
| 339 | [whyself/ttds](https://github.com/whyself/ttds) | 0 | 2026-11-16 | 2026-11-16 | 面向实时语音对话交互（Talk to DeepSeek）的 DSH 插件包。 |
| 340 | [WilliamWang6586/dsh-jlu-baixiaosheng](https://github.com/WilliamWang6586/dsh-jlu-baixiaosheng) | 0 | 2026-11-16 | 2026-11-16 | 吉林大学百晓生知识库 DeepSeek Harness 插件：转专业/培养方案/保研/选课/校园网/考试/车队纳新/新生攻略，38 篇实测参考随包分发 |
| 341 | [WinterOne-hub/dsh-voice-notes](https://github.com/WinterOne-hub/dsh-voice-notes) | 0 | 2026-11-16 | 2026-11-16 | 语音速记 · 本地语音转写与录音历史 for DeepSeek Harness Desktop |
| 342 | [wisqqud/dsh-discord-rich](https://github.com/wisqqud/dsh-discord-rich) | 0 | 2026-11-06 | 2026-11-16 | Discord Rich Presence for DeepSeek Harness: current chat, work status, daily tokens. RU / EN / CN. |
| 343 | [wjj865-code/dsh-orchestrator](https://github.com/wjj865-code/dsh-orchestrator) | 0 | 2026-11-14 | 2026-11-16 | DSH 协调插件：主会话拆任务、派子会话、看回报、管台账 |
| 344 | [WJXAICT/dsh-model-latency-badge](https://github.com/WJXAICT/dsh-model-latency-badge) | 0 | 2026-11-15 | 2026-11-16 | Latency badge on every row of the DSH model picker: measures each model's first-chunk latency and shows a green millisecond or red unavailable badge. |
| 345 | [wojiao42/dsh-chatgpt-to-memory](https://github.com/wojiao42/dsh-chatgpt-to-memory) | 0 | 2026-11-16 | 2026-11-16 | Turns your official ChatGPT data export into durable memory candidates for DeepSeek Harness: scans the export, dedupes against previous imports, writes a distillation dataset. Pairs with dsh-long-term-memory to merge candidates. |
| 346 | [wojiao42/dsh-long-term-memory](https://github.com/wojiao42/dsh-long-term-memory) | 0 | 2026-10-02 | 2026-11-16 | Local long-term memory for DeepSeek Harness: injects your Markdown memory each session, adds read/write/recall/undo tools with backup and audit, guides the agent to read detailed profile files. Zero dependencies, never opens a network connection. |
| 347 | [wsy320/dsh-embedded-workbench](https://github.com/wsy320/dsh-embedded-workbench) | 0 | 2026-11-16 | 2026-11-16 | Embedded workbench for DeepSeek Harness: UART terminal + ZLG/CXCAN CAN &amp; UDS panel with live traffic, CSV recording, and a read-only agent snapshot tool |
| 348 | [wungjyan/dsh-port-kill](https://github.com/wungjyan/dsh-port-kill) | 0 | 2026-11-13 | 2026-11-16 | DeepSeek Harness（DSH）的端口管理插件：列出本机 TCP 监听端口与占用进程，结束前复核身份，避免误杀被复用的 PID。支持 macOS / Linux / Windows。 |
| 349 | [xianweics/dsh-js-clean](https://github.com/xianweics/dsh-js-clean) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: score JavaScript cleanliness and name the refactoring (Extract Function, Guard Clauses, …) for every code smell found. |
| 350 | [XiaoPb/dsh-remote-hub](https://github.com/XiaoPb/dsh-remote-hub) | 0 | 2026-11-13 | 2026-11-16 | DSH dual-role remote-access plugin: pair a device and operate another DSH Host (QR/short-code pairing, per-device bearer tokens, roles enforced inside DSH's own decide()) |
| 351 | [xiaopei-sd/dsh-rename-chats](https://github.com/xiaopei-sd/dsh-rename-chats) | 0 | 2026-11-09 | 2026-11-16 | DSH host bridge and Skill for previewing and renaming chat titles |
| 352 | [xiayi-aesthetic/aesthetic-academy](https://github.com/xiayi-aesthetic/aesthetic-academy) | 0 | 2026-11-16 | 2026-11-16 | 审美逻辑 · 开源数字审美学院：教 AI 如何解析一套审美（不是告诉它什么好看） |
| 353 | [xin070710/dsh-mc-instances](https://github.com/xin070710/dsh-mc-instances) | 0 | 2026-11-16 | 2026-11-16 | PCL2-style Minecraft mod-testing instance manager for DeepSeek Harness |
| 354 | [xqh0405/dsh-memory-es](https://github.com/xqh0405/dsh-memory-es) | 0 | 2026-10-26 | 2026-11-16 | 以自建 Elasticsearch 为后端的 DSH 双层记忆：团队共享知识库 + 个人记忆库，含审核队列、审计留痕与设置面板。 |
| 355 | [xuanqing-95/dsh-personal-workbench](https://github.com/xuanqing-95/dsh-personal-workbench) | 0 | 2026-11-14 | 2026-11-16 | 个人主控台：DeepSeek Harness 的计划、AI 日报、助手与项目总览，由玄清设计。 |
| 356 | [xuedipiaofei/dsh-ai-diagrams](https://github.com/xuedipiaofei/dsh-ai-diagrams) | 0 | 2026-11-16 | 2026-11-16 | Editorial diagrams for DeepSeek Harness: bundled diagram-design skill, inline cards, SVG/PNG export. No Python, no Playwright. |
| 357 | [yan9690/dsh-whale-glance](https://github.com/yan9690/dsh-whale-glance) | 0 | 2026-11-14 | 2026-11-16 | 给 DSH 做的陪看插件：画面变了在旁边说一句，字幕挂屏。打游戏会认游戏、用黑话，追剧不漏字幕还能记集数。 |
| 358 | [yangjh0127/dsh-stock-quotes-plus](https://github.com/yangjh0127/dsh-stock-quotes-plus) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness stock quotes panel with an optional top ticker. |
| 359 | [yangyangxia2-lab/dsh-wallpaper-player](https://github.com/yangyangxia2-lab/dsh-wallpaper-player) | 0 | 2026-11-16 | 2026-11-16 | DeepSeek Harness plugin: browse and play local Wallpaper Engine video wallpapers from a DSH settings page. |
| 360 | [yanhuibook/dsh-token-guard](https://github.com/yanhuibook/dsh-token-guard) | 0 | 2026-11-16 | 2026-11-16 | 🛡️ A cost governance plugin for DeepSeek Harness (DSH). Shows per-turn cost, cache hit rate, and (Pro) warns on subagent route drift &amp; blocks runaway budgets. |
| 361 | [yanmoren/dsh-whale-letter](https://github.com/yanmoren/dsh-whale-letter) | 0 | 2026-11-16 | 2026-11-16 | 鲸鲸信箱 — DeepSeek Harness 插件：本地离线 AI 手写信件，蓝发鲸鱼娘人设，随机延迟回信，牛皮信纸与拆信封仪式 |
| 362 | [Ye-nile/dsh-to-do-marks](https://github.com/Ye-nile/dsh-to-do-marks) | 0 | 2026-11-16 | 2026-11-16 | 用 dsh 做的一个提示待办与自动总结的小插件 |
| 363 | [Yelo0525/dsh-answer-style](https://github.com/Yelo0525/dsh-answer-style) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：按情境调节回答风格与人设，可自动判断也可手动切换。 |
| 364 | [Yelo0525/dsh-rightbar-width-memory](https://github.com/Yelo0525/dsh-rightbar-width-memory) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：记住右侧栏宽度，重启后恢复。 |
| 365 | [Yelo0525/dsh-worklog-calendar](https://github.com/Yelo0525/dsh-worklog-calendar) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：甘特图日历排期、每日工作记录与浮窗提醒。 |
| 366 | [Yelo0525/dsh-workspace-file-drag](https://github.com/Yelo0525/dsh-workspace-file-drag) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：把右侧栏文件树的文件拖进对话输入框变成 @ 引用。 |
| 367 | [Yelo0525/dsh-workspace-files-autoshow](https://github.com/Yelo0525/dsh-workspace-files-autoshow) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：切换对话时自动在右侧栏显示该工作区的文件目录。 |
| 368 | [yishan/dsh-sequence](https://github.com/yishan/dsh-sequence) | 0 | 2026-11-16 | 2026-11-16 | In-conversation per-turn agent tool-call sequence diagram and animated playback plugin for DeepSeek Harness. |
| 369 | [yiyunet/dsh-prompt-upgrade](https://github.com/yiyunet/dsh-prompt-upgrade) | 0 | 2026-11-16 | 2026-11-16 | DSH（DeepSeek Harness）Web GUI 的提示词升级插件：一键把输入框草稿重写成结构化提示词，先预览后回填、可撤销；补上了上游缺失的设置面板。Fork of dsh-prompt-enhance. |
| 370 | [yjh248619/dsh-floating-assistant](https://github.com/yjh248619/dsh-floating-assistant) | 0 | 2026-11-10 | 2026-11-16 | 划词助手 Plus（dsh-select-assist-plus）：DSH / Codex / Claude 桌面划词浮窗，支持解释、总结、翻译与引用进当前会话，含 LaTeX 公式渲染、多窗口并存、折叠与最小化到任务栏。 |
| 371 | [yjnmedia/dsh-expert-role](https://github.com/yjnmedia/dsh-expert-role) | 0 | 2026-11-16 | 2026-11-16 | DSH 插件：领域专家库 + 尽调工作流 + 调用可视化 |
| 372 | [YL404/eggsoup-dsh-themes](https://github.com/YL404/eggsoup-dsh-themes) | 0 | 2026-11-16 | 2026-11-16 | Theme manager for the DeepSeek Harness web UI: Ocean plus the fifteen-theme Nyx dark series, with preview cards on a dedicated Themes page in Settings |
| 373 | [Ylsssq926/dsh-autoshift](https://github.com/Ylsssq926/dsh-autoshift) | 0 | 2026-11-15 | 2026-11-16 | Model Autoshift (模型自动挡) — one Auto gear for your whole DSH model pool: task-aware routing, session-stable, zero extra model calls. |
| 374 | [Ylsssq926/dsh-magic-brush](https://github.com/Ylsssq926/dsh-magic-brush) | 0 | 2026-11-15 | 2026-11-16 | In-project image generation for DSH — use the image models already in your model pool: discover, adopt, generate, edit, deliver. No extra API key, no app switching. 神笔马良 Magic Brush. |
| 375 | [youkucola/dsh-aurabot-world-parlor](https://github.com/youkucola/dsh-aurabot-world-parlor) | 0 | 2026-11-16 | 2026-11-16 | Aurabot 模块：复用 Coopanion 客厅插件接回 parlor.com.cn（9 工具 + SSE 唤醒 + 通知分项开关 + 游戏中静默） |
| 376 | [yuanstarstar/dsh-fish-friends](https://github.com/yuanstarstar/dsh-fish-friends) | 0 | 2026-11-16 | 2026-11-16 | DSH 鱼友簿插件：跨会话鱼友关系管理（多总台接入 / 桥接收发 / 作息分析 / 主动闲聊 / 每日交友目标）+ 全局面板 |
| 377 | [yulongjiang1997/dsh-session-todos](https://github.com/yulongjiang1997/dsh-session-todos) | 0 | 2026-11-16 | 2026-11-16 | 在对话框的待办弹窗里预存指令，之后一键发送到当前会话。 |
| 378 | [yulongjiang1997/dsh-thinking-level-zh](https://github.com/yulongjiang1997/dsh-thinking-level-zh) | 0 | 2026-11-16 | 2026-11-16 | 将对话框中的模型思考等级显示为中文，并可在设置页编辑所有可能出现等级的映射。 |
| 379 | [yunhai89/dsh-clawbot](https://github.com/yunhai89/dsh-clawbot) | 0 | 2026-11-16 | 2026-11-16 | WeChat ClawBot (Tencent iLink) channel for DeepSeek Harness (DSH): QR login, sessions, model/workspace switching, and an OpenClaw host compatibility layer. |
| 380 | [yutouaa/dsh-butler](https://github.com/yutouaa/dsh-butler) | 0 | 2026-11-16 | 2026-11-16 | One butler per workspace for DeepSeek Harness: session overview, memory/skill digest, and cross-session dispatch by role, title or id. |
| 381 | [yuyu654/dsh-drop-by](https://github.com/yuyu654/dsh-drop-by) | 0 | 2026-11-15 | 2026-11-16 | 主动开口的那道门：DSH 陪伴插件，按桌面在线状态、课表日程、记忆、心情与上下文判断时机主动发起对话，支持节假日避让与谷时自主探索。 |
| 382 | [Yzm889/TianZheng-ai-plugin](https://github.com/Yzm889/TianZheng-ai-plugin) | 0 | 2026-11-16 | 2026-11-16 | 天正建筑 AI 插件 · T20/T30 天正建筑 MCP connector for DeepSeek Harness — 让 AI 直接生成真天正对象：墙体、门窗、轴网、柱、楼梯、阳台、天正文字 |
| 383 | [Yzz25/dsh-md-editor](https://github.com/Yzz25/dsh-md-editor) | 0 | 2026-11-16 | 2026-11-16 | Edit workspace Markdown files directly in the DeepSeek Harness right Sidebar. |
| 384 | [zccokie/dsh-future-command-deck](https://github.com/zccokie/dsh-future-command-deck) | 0 | 2026-11-16 | 2026-11-16 | A sci-fi command-deck skin for the DeepSeek Harness web shell: a workspace (sector) picker above the composer, a live-ops panel listing only the sessions still running, a per-session compass that turns each tool call into a bearing, focus mode, and a glass token layer over the light and dark palettes. |
| 385 | [ze579/dsh-session-delete](https://github.com/ze579/dsh-session-delete) | 0 | 2026-11-16 | 2026-11-16 | DSH 会话右键删除插件：两次确认后删除会话文件、账本与缓存（适用 DSH 0.2.2-rc.3+）。Right-click session delete for DeepSeek Harness. |
| 386 | [Zero-Kq/dsh-web-update](https://github.com/Zero-Kq/dsh-web-update) | 0 | 2026-11-16 | 2026-11-16 | dsh自动更新插件 |
| 387 | [zhan1024/dsh-frontend-replay](https://github.com/zhan1024/dsh-frontend-replay) | 0 | 2026-11-16 | 2026-11-16 | 前端验修台 · Frontend Replay：录制并回放前端故障，采集浏览器证据，按相同条件验收修复。A DeepSeek Harness plugin. |
| 388 | [Zheqiu2023/dsh-skill-catalog-refresh](https://github.com/Zheqiu2023/dsh-skill-catalog-refresh) | 0 | 2026-11-16 | 2026-11-16 | refresh dsh skill catalog when new skill is added |
| 389 | [zhongdh7/dsh-pin-workspaces](https://github.com/zhongdh7/dsh-pin-workspaces) | 0 | 2026-11-16 | 2026-11-16 | Pin whole workspaces from the sidebar right-click menu: pinned rows lead the list in pin order, tinted with the theme accent color, with a Pinned workspaces page in Settings. |
| 390 | [zhonghes/dsh-secret-variables](https://github.com/zhonghes/dsh-secret-variables) | 0 | 2026-11-11 | 2026-11-16 | DeepSeek Harness plugin: scoped secret variables that stay out of prompts and logs; the model uses $DSH_SECRET_* in shell. |
| 391 | [zhuj0101-bit/modelpilot](https://github.com/zhuj0101-bit/modelpilot) | 0 | 2026-11-13 | 2026-11-16 | ModelPilot —— 独立的 DSH 插件：在设置里提供模型配置工作台，字段级投影写入 DSH 设置、带版本围栏、写入前展示完整操作清单。 |
| 392 | [zhuqinyangdev/dsh-traffic-light](https://github.com/zhuqinyangdev/dsh-traffic-light) | 0 | 2026-11-16 | 2026-11-16 | Traffic lights for DeepSeek Harness sessions |
| 393 | [zihangii/dsh-app-radar](https://github.com/zihangii/dsh-app-radar) | 0 | 2026-11-16 | 2026-11-16 | 应用雷达 · DSH 后台进程与端口控制台：列出 DSH 启动的后台进程与端口，一键按进程组强制停止。App Radar for DeepSeek Harness. |
| 394 | [ZJDqtjs/DSH_PlainRiceWhale](https://github.com/ZJDqtjs/DSH_PlainRiceWhale) | 0 | 2026-11-15 | 2026-11-16 | 鲸鱼娘小独白：DSH 插件 whale-aside（人设注入 + whale_aside 工具 + 情绪贴图 + Edge TTS 语音） |
| 395 | [zknyy/dsh-session-highlight](https://github.com/zknyy/dsh-session-highlight) | 0 | 2026-11-16 | 2026-11-16 | DSH plugin: iridescent gradient + marquee highlight for the active session name |
| 396 | [zktothetop-sys/dsh-ui-workbench](https://github.com/zktothetop-sys/dsh-ui-workbench) | 0 | 2026-11-16 | 2026-11-16 | DSH 界面工作台：Codex UI、会话进度、六图标侧栏、标题菜单与紧凑工具栏 |
| 397 | [zkw90274-dot/dsh-dock-insight](https://github.com/zkw90274-dot/dsh-dock-insight) | 0 | 2026-11-16 | 2026-11-16 | Dock Vitals — a composer-dock readout for context occupancy, session stats and token usage (DeepSeek Harness plugin) |
| 398 | [zmq6931/dsh-neon-theme-ad](https://github.com/zmq6931/dsh-neon-theme-ad) | 0 | 2026-11-16 | 2026-11-16 | Neon theme engine for DeepSeek Harness: animated backdrops, breathing neon frame, free wallpaper libraries with live video and anime highlight clips |
| 399 | [zsagi1368/dsh-zcontext](https://github.com/zsagi1368/dsh-zcontext) | 0 | 2026-11-12 | 2026-11-16 | Model-driven incremental context folding plugin for the official DeepSeek harness — long sessions, low window pressure, official surface-replace channel only. Clean-room, inspired by billion-context (MIT) + our CCM research. |
| 400 | [zuoyunlai/dsh-healthkit](https://github.com/zuoyunlai/dsh-healthkit) | 0 | 2026-11-16 | 2026-11-16 | DSH 体检：只读体检评分 / 可还原清理 / 分数趋势（DeepSeek Harness 插件） |
| 401 | [zwb0707/dsh-companion](https://github.com/zwb0707/dsh-companion) | 0 | 2026-11-16 | 2026-11-16 | dsh陪伴：为 DeepSeek Harness 做的本地人格运行时插件（记忆、心情、护栏、主动开口、QQ 网关、51 个工具） |
| 402 | [zyd232/dsh-tool-drawer](https://github.com/zyd232/dsh-tool-drawer) | 0 | 2026-11-16 | 2026-11-16 | Put every tool in a drawer: everyday tools stay on the desk, everything else is fetched on demand. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 173ababah/dsh-ctl-desktop
- 173ababah/dsh-seamless-restart
- abinadwan/deepseek-harness-environment-sidebar
- Andrietteprotective835/dsh-mcp-lens
- Century-Ula/dsh-zeroscript
- CoolTea001/dsh-cool-git
- CoolTea001/dsh-cool-terminal
- CoolTea001/dsh-cool-theme
- DeadLink233/dsh-file-bridge
- dshapp/dsh-claude-subscription
- hexiangyu0730-web/dsh-web-bridge
- jackheather/dsh-self-learn
- JeffreySuen-x/dsh-skill-dossier
- jiaxusummer/dsh-app-icon
- MakotoNikki/dsh-discord-rich
- melody12311/dsh-workspace-folders
- mi-lu-uncle/dsh-pelican-watch
- mi-lu-uncle/dsh-skill-console
- pkkkkh/dsh-plugins
- QcWyGm/dsh-config-sync
- qinyuan1017/dsh-nightwrite
- qiqiangvae/dsh-obsidian
- Richard-He-happy/dsh-bohr-arena
- rightnowrose/dsh-ai-fastvideo
- SiriusWJ/dsh-lite-memory
- Skeltx/dsh-moduleapi
- StellatoL/retro
- tech-zerolei/dsh-token-summary
- wojiao42/dsh-memory-file
- wsqept/dsh-project-development
- xiaoxin3309/dsh-backup-rescue
- xiaoxin3309/dsh-mini
- xiaoxin3309/dsh-phone-control
- yjh248619/dsh-select-assist-plus
- YouHui1/dsh-serial
- ywandy/dsh-plugins
- zk-wz/dsh-workbuddy-broadcast
