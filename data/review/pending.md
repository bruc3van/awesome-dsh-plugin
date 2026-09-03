# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-09-03**
- 快照日期 / Snapshot date: **2026-09-03 (UTC)**
- 待审核 / Pending: **148**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **20**
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

对比上一份快照 **2026-09-02** / vs previous snapshot **2026-09-02**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [OpenPetsHQ/openpets](https://github.com/OpenPetsHQ/openpets) | 待审 / pending | 1157 | +4 | 104 | 121d | 待审高星 | 核准即 Top 11 |
| ⚠️ [inclusionAI/Avernet](https://github.com/inclusionAI/Avernet) | 待审 / pending | 530 | — | 54 | 58d | 待审高星 | 核准即榜 #22 |
| ⚠️ [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | 已核准 / approved | 5544 | +103 | 492 | 94d | 日增百星 | 日增 +103★；已不进榜单 |
| ⚠️ [pax-beehive/dsh-hub-cli](https://github.com/pax-beehive/dsh-hub-cli) | 已核准 / approved | 102 | +100 | 2 | 8d | 日增百星 | 日增 +100★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [OpenPetsHQ/openpets](https://github.com/OpenPetsHQ/openpets) ⚠️ | 1157 | 2026-05-04 | 2026-09-03 | Local first, desktop companion platform with animated pets, plugin SDK and coding-agent integrations. |
| 2 | [inclusionAI/Avernet](https://github.com/inclusionAI/Avernet) ⚠️ | 530 | 2026-07-06 | 2026-09-03 | Distributed agent coordination platform where agents live, connect, coordinate, execute, and evolve together. |
| 3 | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop) | 98 | 2026-08-25 | 2026-09-03 | The most comprehensive DeepSeek Harness plugin market — refreshed daily, sourced across the Internet, reviewed before publishing. |
| 4 | [justlovemaki/PrismFlowAgent](https://github.com/justlovemaki/PrismFlowAgent) | 88 | 2025-10-11 | 2026-09-03 | 全栈资讯处理与 AI Agent 系统。它能够自动化地从全球多源渠道抓取高质量资讯，利用顶级大语言模型进行深度总结，并将其分发至多种终端 |
| 5 | [zhu1090093659/dsh-trading](https://github.com/zhu1090093659/dsh-trading) | 40 | 2026-08-30 | 2026-09-03 | Agent-native trading terminal built on DeepSeek Harness. Crypto, US, CN and HK in one three-column GUI, 19+ hot-swappable connectors, dry-run by default with human approval on every live order. BYOK, no data redistribution. |
| 6 | [Axiaohungry/dsh-llm-workbuddy](https://github.com/Axiaohungry/dsh-llm-workbuddy) | 28 | 2026-08-14 | 2026-09-03 | 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分 |
| 7 | [Kihara777/NixKits](https://github.com/Kihara777/NixKits) | 25 | 2026-03-28 | 2026-09-03 | 软件、补丁、NixOS 模块与 AI 编码助手的技能合集。 |
| 8 | [wanderer-yk/dsh-xueqiu](https://github.com/wanderer-yk/dsh-xueqiu) | 7 | 2026-08-14 | 2026-09-03 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| 9 | [cryjkd/dsh-clawbot](https://github.com/cryjkd/dsh-clawbot) | 5 | 2026-09-03 | 2026-09-03 | dsh-clawbot |
| 10 | [TencentCloud/cloudq-for-dsh](https://github.com/TencentCloud/cloudq-for-dsh) | 4 | 2026-08-28 | 2026-09-03 | CloudQ integration for DeepSeek Harness, providing multi-cloud architecture governance, AIOps, risk inspection, usage, artifacts, and architecture views. |
| 11 | [Icstick/dsh-adaptive-context](https://github.com/Icstick/dsh-adaptive-context) | 3 | 2026-08-27 | 2026-09-03 | DeepSeek Harness 的 AdaptiveContextPlane (ACP) 插件——带治理的长期记忆系统 |
| 12 | [qinyre/dsh-plugin-archive-manager](https://github.com/qinyre/dsh-plugin-archive-manager) | 3 | 2026-08-18 | 2026-09-03 | Archive manager (browse / unarchive / auto-rules) plus a Codex-style fisheye conversation rail for dsh.·归档管理与对话刻度尺插件 |
| 13 | [allmodels-io/dsh-speech](https://github.com/allmodels-io/dsh-speech) | 2 | 2026-08-27 | 2026-09-03 | Real-time voice input and spoken answer summaries for DeepSeek Harness. |
| 14 | [eons2long/dsh-codex-oauth](https://github.com/eons2long/dsh-codex-oauth) | 2 | 2026-08-15 | 2026-09-03 | DeepSeek Harness plugin for using ChatGPT Plus/Pro Codex models through OpenAI Codex OAuth. |
| 15 | [FylarOpen/fylar-office-editor](https://github.com/FylarOpen/fylar-office-editor) | 2 | 2026-09-02 | 2026-09-03 | Office document preview, editing, and DOCX generation for DeepSeek Harness, powered by Fylar Office SDK. |
| 16 | [Icstick/dsh-work-continuity](https://github.com/Icstick/dsh-work-continuity) | 2 | 2026-08-27 | 2026-09-03 | DeepSeek Harness 的 Work Continuity 插件——跨会话工作状态显式持久化，与通用记忆解耦 |
| 17 | [pavangupta352/stalegreen](https://github.com/pavangupta352/stalegreen) | 2 | 2026-09-03 | 2026-09-03 | Keeps a coding agent's green claims honest: verification runs are recorded unmasked, and done is blocked when the evidence is stale, failed or masked. |
| 18 | [Xiamu-ssr/dsh-wind-aifin](https://github.com/Xiamu-ssr/dsh-wind-aifin) | 2 | 2026-07-13 | 2026-09-03 | Credential-safe Wind AIFin MCP and Alice integration for DeepSeek Harness. |
| 19 | [youngrock-labs/dsh-provider-copilot](https://github.com/youngrock-labs/dsh-provider-copilot) | 2 | 2026-09-01 | 2026-09-03 | use a GitHub Copilot subscription as a DSH LLM provider |
| 20 | [6pofx/dsh-tool-explorer](https://github.com/6pofx/dsh-tool-explorer) | 1 | 2026-08-30 | 2026-09-03 | DSH（DeepSeek Harness）技能与 MCP 管理控制台插件：按来源分级浏览全部已加载技能，独立开关模型/用户调用，创建/编辑/删除技能（可恢复回收站），从 GitHub 多选批量安装；增删改 MCP 服务器、状态监控与连接测试。Management console for DeepSeek Harness (dsh): grouped skill browsing, model/user invocation toggles, GitHub batch install, recoverable trash, and MCP server management. |
| 21 | [Aealen/dsh-coding-workspace](https://github.com/Aealen/dsh-coding-workspace) | 1 | 2026-08-27 | 2026-09-03 | coding 工作台。以 git worktree 并行开发为地基，向上提供跨会话协作原语、项目分组侧栏与停靠式工作区面板(资源管理器 / Git Changes·Logs),把 dsh 的单会话界面变成多工作区并行开发驾驶舱。 |
| 22 | [ALKAERR/dsh-pet](https://github.com/ALKAERR/dsh-pet) | 1 | 2026-09-03 | 2026-09-03 | 一只常驻 DSH 界面的鲸鱼娘女仆长「会话监督挂件」。替主人监督 AI 助手的工作——读工具调用结果做证据，戳破"口嗨式完成"，用自然女仆口吻温柔纠偏，并一键给出可直接复制的修正 Prompt。标准 DSH bundle，代码+立绘自包含、开箱即用。 |
| 23 | [bluechips-zhao/dsh-browser-slotpool](https://github.com/bluechips-zhao/dsh-browser-slotpool) | 1 | 2026-09-03 | 2026-09-03 | DSH bundle: slot-pool wrapper for concurrent browser sessions｜并发浏览器会话槽位池插件 |
| 24 | [carlclouder/dsh-image-serve](https://github.com/carlclouder/dsh-image-serve) | 1 | 2026-09-02 | 2026-09-03 | DeepSeek Harness 的本地文件展示插件：安装一次，会话 markdown 即可通过 /ws/<本地绝对路径> 直接渲染磁盘上任何位置的图片与文件。 |
| 25 | [choco9527/dsh-add-to-chat](https://github.com/choco9527/dsh-add-to-chat) | 1 | 2026-09-03 | 2026-09-03 | DSH插件 引用注释 添加到对话功能 |
| 26 | [cyanxi-eb/dsh-self-memory](https://github.com/cyanxi-eb/dsh-self-memory) | 1 | 2026-08-17 | 2026-09-03 | DSH 自记忆插件（v0.3）把会话中遇到的问题、多种解决方法、脚本文件路径与模型调用全过程结构化记录下来；新会话中，「先查记录 → 有就试 → 成功标命中/失败记根因 → 无则自研 → 最后回写」的闭环自动发生，并支持外部导入解决方法。零运行时依赖、纯本地、离线可用。 |
| 27 | [delef/dsh-plugin-auto-review](https://github.com/delef/dsh-plugin-auto-review) | 1 | 2026-09-03 | 2026-09-03 | Provider-backed automatic approval review for DeepSeek Harness |
| 28 | [djs326/dsh-plugin-width-slider](https://github.com/djs326/dsh-plugin-width-slider) | 1 | 2026-09-03 | 2026-09-03 | 对话宽度滑块插件：DSH Desktop 设置面板滑块，按下即全屏预览实时调节对话宽度，自动隐藏原生拖拽手柄 |
| 29 | [hardes11/dsh-squeeze-command](https://github.com/hardes11/dsh-squeeze-command) | 1 | 2026-09-02 | 2026-09-03 | Manual budget-targeted context compression for DeepSeek Harness: the conversation model picks ranges, a cheap flash-tier route writes the summaries. |
| 30 | [helloproblems/dsh-browser-use](https://github.com/helloproblems/dsh-browser-use) | 1 | 2026-09-03 | 2026-09-03 | 为 DeepSeek Harness (DSH) 插件生态打造的浏览器自动化插件 |
| 31 | [jeffxuan/dsh-godot-game-studio](https://github.com/jeffxuan/dsh-godot-game-studio) | 1 | 2026-09-03 | 2026-09-03 | Seven bounded Godot 4 MCP tools for DeepSeek Harness: audit, test, simulate, validate, and release |
| 32 | [kaixinguo360/dsh-script-manager](https://github.com/kaixinguo360/dsh-script-manager) | 1 | 2026-09-03 | 2026-09-03 | DSH 自定义操作脚本管理插件，将验证过的操作流程固化为可复用脚本，不耗 token、支持参数化和执行验收。 |
| 33 | [Luv061211/dsh-pet](https://github.com/Luv061211/dsh-pet) | 1 | 2026-08-30 | 2026-09-03 | Customizable desktop pets for DeepSeek Harness — import your own sprite-based pet packs, reflect agent activity, and use them in the Web UI or an optional Electron companion. |
| 34 | [mekos2772/dsh-plugin-mimi](https://github.com/mekos2772/dsh-plugin-mimi) | 1 | 2026-08-17 | 2026-09-03 | 鲸鱼娘 Mimi：DeepSeek Harness（DSH）桌面宠物插件，内置 Windows Computer Use 与桌宠聊天好感度。 |
| 35 | [ming-xia/dsh-stickies](https://github.com/ming-xia/dsh-stickies) | 1 | 2026-09-03 | 2026-09-03 | 面向 DeepSeek Harness 的本地优先 Markdown 便利贴插件 |
| 36 | [Miss-zhao-source/dsh-wsl-launcher](https://github.com/Miss-zhao-source/dsh-wsl-launcher) | 1 | 2026-09-03 | 2026-09-03 | Windows desktop launcher for DeepSeek Harness Web running in WSL |
| 37 | [nataliwhite20534-droid/dsh-4-role-workflow](https://github.com/nataliwhite20534-droid/dsh-4-role-workflow) | 1 | 2026-09-02 | 2026-09-03 | 4-agent workflow (PM + Browser + Programmer + DataEng) for complex DSH tasks. Real run in docs/run-example.md. |
| 38 | [nataliwhite20534-droid/dsh-xhs-collector](https://github.com/nataliwhite20534-droid/dsh-xhs-collector) | 1 | 2026-09-02 | 2026-09-03 | XHS batch collector via CDP Chrome + residential IP. Real case study: 8 keywords, 500+ notes. docs/case-study.md |
| 39 | [OMSociety/kimi-ppt-skill](https://github.com/OMSociety/kimi-ppt-skill) | 1 | 2026-09-03 | 2026-09-03 | DSH (DeepSeek Harness) presentation skill: PPT/演示文稿生成与导出，含 DSH 内纯本地导出 (python-pptx) 与本地预览渲染 (Pillow)。 |
| 40 | [plolpl789/dsh-raw-html-v2](https://github.com/plolpl789/dsh-raw-html-v2) | 1 | 2026-09-03 | 2026-09-03 | VCP visual-synesthesia plugin v2 for DeepSeek Harness (official Slot API): raw-HTML vcp-root cards, streaming render, KaTeX/Mermaid/SVG, builtin fonts |
| 41 | [porcelaintech/dsh-plugin-voice-input](https://github.com/porcelaintech/dsh-plugin-voice-input) | 1 | 2026-09-03 | 2026-09-03 | Voice input plugin for DeepSeek Harness: a minimal mic control in the composer with continuous bilingual recognition, context-aware term correction, punctuation, and a live waveform |
| 42 | [RaulLazaro/dsh-server-setup](https://github.com/RaulLazaro/dsh-server-setup) | 1 | 2026-09-02 | 2026-09-03 | Production-tested setup for running DeepSeek Harness on a VPS with reverse proxy, systemd, and optional Pangolin tunnel |
| 43 | [Ri0n72Y/dsh-tcp-forward](https://github.com/Ri0n72Y/dsh-tcp-forward) | 1 | 2026-09-03 | 2026-09-03 | simply a forward |
| 44 | [ryasrk/dsh-awesome-skills](https://github.com/ryasrk/dsh-awesome-skills) | 1 | 2026-08-31 | 2026-09-03 | Plugin Skills for agents |
| 45 | [TaylorSwitiger/dsh-plan-bridge](https://github.com/TaylorSwitiger/dsh-plan-bridge) | 1 | 2026-09-03 | 2026-09-03 | DeepSeek Harness (dsh) plugin: one local bridge for ChatGPT Codex / Claude / ZCode (GLM) / Qwen subscription plans — settings status card, one-click provisioning, zero core changes。此插件支持在DeepSeek-Harness(DSH)接入Codex、Claude、Zcode、Qwen等多家订阅套餐。用量耗尽无缝切换其他套餐继续任务！ |
| 46 | [yu-wenchao/dsh-opencode-free-models](https://github.com/yu-wenchao/dsh-opencode-free-models) | 1 | 2026-09-03 | 2026-09-03 | 无限免费额度的deepseek harnes 免费模型插件-免费api-DeepSeek Harness (DSH) 插件 — 在聊天界面里实时展示 OpenCode Zen 的最新免费模型，无需登录、无需密钥，直接在模型选择器选用即可对话。切换网络实现无限额度，无限量token自由！ |
| 47 | [yyh-001/dsh-launcher](https://github.com/yyh-001/dsh-launcher) | 1 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 轻量 Windows 启动器。选一个版本，启动 dsh web。 |
| 48 | [123dbl/dsh-side-session](https://github.com/123dbl/dsh-side-session) | 0 | 2026-09-03 | 2026-09-03 | DSH side-chat (旁会话) plugin: launch a fresh continuable parallel session from the conversation header while the main session keeps running. |
| 49 | [123twtd/dsh-skin-manager](https://github.com/123twtd/dsh-skin-manager) | 0 | 2026-08-30 | 2026-09-03 | DeepSeek Harness (dsh) 可切换皮肤包管理器：皮肤包发现/激活/ZIP 导入，适配 0.1.x，含爱弥斯示例皮肤 |
| 50 | [123twtd/dsh-vision-toggle](https://github.com/123twtd/dsh-vision-toggle) | 0 | 2026-08-30 | 2026-09-03 | DeepSeek Harness (dsh) 模型视觉开关插件：为自定义模型声明图像输入能力（写入 llm-pi-ai 配置），适配 0.1.x |
| 51 | [addie-ace/dsh-fullwidth-punctuation](https://github.com/addie-ace/dsh-fullwidth-punctuation) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 插件：让 AI 回答输出中文全角标点（用户直接复制回答内容也是全角）。监听 llm/stream 做智能半角→全角转换，跳过代码块/数字/URL/markdown，并注入 system prompt 提示。 |
| 52 | [aijunjiang/dsh-plugin-vision](https://github.com/aijunjiang/dsh-plugin-vision) | 0 | 2026-09-03 | 2026-09-03 | Give your DSH agent eyes via any OpenAI-compatible vision model - 11 provider presets (Doubao/Qwen-VL/GLM-V/OpenAI/Gemini/Ollama...), capability checkboxes that inject live prompt guidance, and analysis of images the user drops into the chat; the agent writes its own observation prompt, and base64 never enters its context. |
| 53 | [Andor-Z/dsh-turn-outline](https://github.com/Andor-Z/dsh-turn-outline) | 0 | 2026-09-03 | 2026-09-03 | DSH 轮次轨迹侧边栏插件：按用户轮次折叠会话（输入+工具步骤+输出），一键跳回对话原位；零 AI、只读 \| Turn-outline tab for dsh-better-sidebar: fold sessions by user turns with one-click jump-back; zero-LLM, read-only |
| 54 | [aokamoaki/dsh-stall-sentinel](https://github.com/aokamoaki/dsh-stall-sentinel) | 0 | 2026-09-03 | 2026-09-03 | Lightweight stall watchdog for DeepSeek Harness - auto-wires subprocess spawn, reminds + forensics on stall, never kills. |
| 55 | [auggie246/dsh-webapp](https://github.com/auggie246/dsh-webapp) | 0 | 2026-08-29 | 2026-09-03 | Desktop shell for the DeepSeek Harness (DSH) web GUI: window, attach-or-spawn, Host bar, hide-to-bar, quit-kills-host. |
| 56 | [bg8lng/dsh-openlist-sync](https://github.com/bg8lng/dsh-openlist-sync) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 文件同步插件：交付文件自动上传 OpenList + 目录全读写工具 + 设置面板 + 按工作区布局 |
| 57 | [bill277048-hash/DSH-guardian](https://github.com/bill277048-hash/DSH-guardian) | 0 | 2026-09-03 | 2026-09-03 | for DSH |
| 58 | [bitsmug/dsh-bgjobs](https://github.com/bitsmug/dsh-bgjobs) | 0 | 2026-09-03 | 2026-09-03 | 将命令提交为独立于 DSH 进程的后台任务，关闭 DSH 也不影响运行，并提供实时网页面板与离线 CLI/GUI 管理。Runs commands as background jobs that keep executing when DSH exits, with a live web panel and offline CLI/GUI management. |
| 59 | [CodeDice1024/dsh-log-viewer](https://github.com/CodeDice1024/dsh-log-viewer) | 0 | 2026-09-03 | 2026-09-03 | DSH 日志分析插件：Java 服务日志分析，AI 工具与 Web 仪表盘 |
| 60 | [CodeDice1024/dsh-plugin-dev-assistant](https://github.com/CodeDice1024/dsh-plugin-dev-assistant) | 0 | 2026-09-03 | 2026-09-03 | DSH 插件开发助手：对话式引导，从零开始创建、测试、发布 DSH 插件 |
| 61 | [Danreelkow/HDCS](https://github.com/Danreelkow/HDCS) | 0 | 2026-09-02 | 2026-09-03 | LLM loop that reasons in a dense technical register — mechanical gates + adversarial judge + reverse-translation for humans. Self-upgrading. Standalone or as a DSH plugin. |
| 62 | [Dee3526/dsh-plugin-voice-input-demo](https://github.com/Dee3526/dsh-plugin-voice-input-demo) | 0 | 2026-09-03 | 2026-09-03 | Minimal Chinese voice input plugin for the DeepSeek Harness Web UI |
| 63 | [EChan684/dsh-web-verify-panel](https://github.com/EChan684/dsh-web-verify-panel) | 0 | 2026-09-03 | 2026-09-03 | 让 agent 的网页打开请求在 DSH 侧边栏内完成，不用弹出系统浏览器窗口 |
| 64 | [Edge-HH/GrokBot_in_DeepseekHerness](https://github.com/Edge-HH/GrokBot_in_DeepseekHerness) | 0 | 2026-08-22 | 2026-09-03 | 将GrokBot宠物代入DSH网页端并加入拖拽效果和通知功能 |
| 65 | [Erick0412-dev/dsh-agy-ui](https://github.com/Erick0412-dev/dsh-agy-ui) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness Antigravity UI & Experience Enhancement Companion Plugin |
| 66 | [F1star/dsh-research](https://github.com/F1star/dsh-research) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness bundle for evidence-first PDF reading, durable paper records, and cross-paper synthesis. |
| 67 | [fan56/dsh-topics-memory](https://github.com/fan56/dsh-topics-memory) | 0 | 2026-08-31 | 2026-09-03 | dsh-plugin: OKF v0.2 topic memory for dsh - local-first git-tracked bundle, hot-path LLM-free injection, two-stage observer with background distill |
| 68 | [fangzaozao/dsh-mcp-oauth-client](https://github.com/fangzaozao/dsh-mcp-oauth-client) | 0 | 2026-09-03 | 2026-09-03 | Universal MCP manager and client bridge for DeepSeek Harness (DSH) |
| 69 | [february2015/dsh-subagent-codex-plus](https://github.com/february2015/dsh-subagent-codex-plus) | 0 | 2026-08-30 | 2026-09-03 | Codex true-gateway plugin for DeepSeek Harness (DSH): /codex-lock direct connection to a durable Codex session — queued/steered conversation, live output, durable binding + auto-reattach. Personal fork of @deepseek-ai/dsh-subagent-codex. |
| 70 | [february2015/dsh-subagent-pi-plus](https://github.com/february2015/dsh-subagent-pi-plus) | 0 | 2026-09-03 | 2026-09-03 | Pi true-gateway plugin for DeepSeek Harness (DSH): /pi-lock direct connection to a durable Pi session — queued/steered conversation, live output, durable binding + auto-reattach. Personal fork of @deepseek-ai/dsh-subagent-codex. |
| 71 | [FourTow/dsh-theme-win98](https://github.com/FourTow/dsh-theme-win98) | 0 | 2026-09-02 | 2026-09-03 | Windows 98 theme plugin for DeepSeek Harness web |
| 72 | [fufuf-c/dsh-token](https://github.com/fufuf-c/dsh-token) | 0 | 2026-08-30 | 2026-09-03 | DSH local token usage & cost dashboard: 4-segment token breakdown, cache savings, per-session drill-down, global filters, monthly budget. Zero upload. |
| 73 | [gbeta/dsh-stock-quote](https://github.com/gbeta/dsh-stock-quote) | 0 | 2026-09-03 | 2026-09-03 | DSH web plugin: collapsible draggable A-share quote widget (沪深300 + individual stocks, live price + change %) |
| 74 | [GooDAnDReaDY/dsh-shadow-auditor](https://github.com/GooDAnDReaDY/dsh-shadow-auditor) | 0 | 2026-09-02 | 2026-09-03 | DSH plugin for background security audits, secret leakage detection, and command safety |
| 75 | [hotpot-labs/dsh-wooden-fish](https://github.com/hotpot-labs/dsh-wooden-fish) | 0 | 2026-09-03 | 2026-09-03 | dsh 木鱼，dsh 干活你敲木鱼，每天增加一点点功德 |
| 76 | [HuanLinOTO/dsh-plugin-android-use](https://github.com/HuanLinOTO/dsh-plugin-android-use) | 0 | 2026-09-03 | 2026-09-03 | 让模型通过 adb 操作安卓手机的 DSH 插件（截图、UI 树、点击、滑动、输入文本、按键、打开应用） \| DSH plugin exposing adb-based tools that let the model operate an Android phone (screenshot, UI dump, tap, swipe, input text, press keys, open apps). |
| 77 | [HuanLinOTO/dsh-plugin-better-plan](https://github.com/HuanLinOTO/dsh-plugin-better-plan) | 0 | 2026-09-03 | 2026-09-03 | better-plan: DSH 计划/待办侧边栏插件 \| DSH plan/todo sidebar plugin |
| 78 | [HuanLinOTO/dsh-plugin-preface-context](https://github.com/HuanLinOTO/dsh-plugin-preface-context) | 0 | 2026-09-03 | 2026-09-03 | 在每次会话开头固定注入一段用户配置的文本上下文（设置页输入框可编辑），作为模型可见的 instructions 注入第一轮请求。 \| Injects a user-configured text block as model-visible instructions context at the start of every DSH session (editable from the settings page). |
| 79 | [hun1315/tencent-agent-mail-dsh-plugin](https://github.com/hun1315/tencent-agent-mail-dsh-plugin) | 0 | 2026-09-03 | 2026-09-03 | Tencent Agent Mail (agent.qq.com) workbench plugin for DeepSeek Harness: polling, LLM classification, fullscreen workbench, archive/trash, attachment download, mail-to-agent command channel. 腾讯Agent邮箱DSH插件 |
| 80 | [HUSTforever/dsh-status-hub](https://github.com/HUSTforever/dsh-status-hub) | 0 | 2026-09-03 | 2026-09-03 | Bilingual DeepSeek Harness status hub for sessions, MCP, skills, plugins, and connection health |
| 81 | [hyqhyq3/dsh-gemini-oauth-bridge](https://github.com/hyqhyq3/dsh-gemini-oauth-bridge) | 0 | 2026-09-03 | 2026-09-03 | Bridge Google AI subscription (Antigravity/Gemini OAuth) into DeepSeek Harness as an OpenAI-compatible endpoint |
| 82 | [hyqhyq3/dsh-plugin-updater](https://github.com/hyqhyq3/dsh-plugin-updater) | 0 | 2026-09-03 | 2026-09-03 | Package-level plugin manager with update detection and a GitHub marketplace for DeepSeek Harness |
| 83 | [Icstick/dsh-context-maid](https://github.com/Icstick/dsh-context-maid) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 自动上下文策展插件：tool 输出内容感知瘦身 + 无效日志清理 + 工作流/记忆钉扎保护 + 先归档后压缩 + 摘要模型可配 |
| 84 | [jhckevin/dsh-auto-review](https://github.com/jhckevin/dsh-auto-review) | 0 | 2026-09-03 | 2026-09-03 | Codex-style Auto Review inspired plugin for DeepSeek Harness, with native bridge and Linux sandbox integration |
| 85 | [Jonah-Wu23/dsh-agy-safe](https://github.com/Jonah-Wu23/dsh-agy-safe) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness plugin: connect logged-in Antigravity CLI (agy) as chat and subagent model provider |
| 86 | [jsoncode/dsh-single-terminal](https://github.com/jsoncode/dsh-single-terminal) | 0 | 2026-09-03 | 2026-09-03 | 基于dsh的终端插件 |
| 87 | [klarkxy/dsh-plugins](https://github.com/klarkxy/dsh-plugins) | 0 | 2026-09-03 | 2026-09-03 | Small, independently installable plugins for DeepSeek Harness. |
| 88 | [kolawong/dsh-plugin-toolkit](https://github.com/kolawong/dsh-plugin-toolkit) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness personal toolkit: runtime-toggleable quality-of-life optimizations, each shipped as one card in the Toolkit settings page. |
| 89 | [LeonxLJX/dsh-mcp-market](https://github.com/LeonxLJX/dsh-mcp-market) | 0 | 2026-09-03 | 2026-09-03 | The front door to MCP for DeepSeek Harness. Search a verified catalog of MCP servers and get the exact cordis.yml row that wires one into the official @deepseek-ai/dsh-mcp-client bridge. |
| 90 | [liuwenji007/dsh-humanizer](https://github.com/liuwenji007/dsh-humanizer) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 插件：生成前注入「人味」风格约束 + AI 味检测报告（纯代码、零 token、结果可复现）。dsh plugin: human-flavor style injection + AI-flavor detection report, judged by code. |
| 91 | [masknull/dsh-webhook-notifier](https://github.com/masknull/dsh-webhook-notifier) | 0 | 2026-09-03 | 2026-09-03 | DSH 事件通知插件：AI 回合完成、权限申请、提问、出错、开始运行等 5 种场景发生时，向 Webhook 发送自定义 HTTP 通知，支持 GET/POST、预设字段/自定义文本、type+type_cn、发送日志 |
| 92 | [mikijiyun/dsh-token-rush](https://github.com/mikijiyun/dsh-token-rush) | 0 | 2026-09-03 | 2026-09-03 | DSH Web GUI 悬浮仪表：实时 token 消耗 / 估算金额 / 账户余额，高峰时段自动变橙红色。A floating token / cost / balance HUD that turns orange-red during DeepSeek rush hours. |
| 93 | [MoriTang/dsh-plugins](https://github.com/MoriTang/dsh-plugins) | 0 | 2026-08-22 | 2026-09-03 | A collection of my DeepSeek Harness plugins. |
| 94 | [morlay/dsh-llm-openai-compatible](https://github.com/morlay/dsh-llm-openai-compatible) | 0 | 2026-08-20 | 2026-09-03 | moved https://github.com/morlay/better-session/tree/main/packages/llm-openai-compatible |
| 95 | [naitoupi/prompt-optimizer-plugin](https://github.com/naitoupi/prompt-optimizer-plugin) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness (DSH) plugin: ? optimize the composer draft with the current model. Installable bundle (dsh.bundle + dsh.client); Settings tab: on/off switch, generation params, editable system prompt with reset-to-default. |
| 96 | [nataliwhite20534-droid/dsh-moe-plugin](https://github.com/nataliwhite20534-droid/dsh-moe-plugin) | 0 | 2026-09-03 | 2026-09-03 | 10 preset moe character cards for DSH - freely combinable, editable, persistable. Real outputs in docs/usage-examples.md. |
| 97 | [nateEc/dsh-gitLens](https://github.com/nateEc/dsh-gitLens) | 0 | 2026-08-26 | 2026-09-03 | Workspace-scoped Git graph and guarded Git workbench for DeepSeek Harness. |
| 98 | [NinjaSln-labs/dsh-imgdraw](https://github.com/NinjaSln-labs/dsh-imgdraw) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 文生图插件：draw_image 模型工具 + 输入框生图按钮（异步生成/4 格网格/下载保留删除）+ /imgdraw 路由 + 持久化历史。Text-to-image for DeepSeek Harness. |
| 99 | [NinjaSln-labs/dsh-knowledge-sqlite](https://github.com/NinjaSln-labs/dsh-knowledge-sqlite) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 跨会话知识插件：ctx.knowledge 服务 + knowledge_* 工具，SQLite FTS5 trigram 中文子串检索 + L1 查询扩展（V1.11 契约） |
| 100 | [NinjaSln-labs/dsh-session-slm-router](https://github.com/NinjaSln-labs/dsh-session-slm-router) | 0 | 2026-09-02 | 2026-09-03 | Shadow-mode SLM router for DeepSeek Harness: per-turn weak/strong prediction via vertical-small-model CLI, writes shadow JSONL log |
| 101 | [NinjaSln-labs/dsh-subagent-cursor](https://github.com/NinjaSln-labs/dsh-subagent-cursor) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 插件：Cursor-as-subagent 提供方——一次本地 @cursor/sdk one-shot 运行、摘要优先结果、可无人值守的 Profile Bundle |
| 102 | [NinjaSln-labs/dsh-subagent-router](https://github.com/NinjaSln-labs/dsh-subagent-router) | 0 | 2026-09-02 | 2026-09-03 | DeepSeek Harness 子代理模型路由插件：subagent_model 工具 + model:"auto" 路由策略（任务档位/失败升级/可审计），子代理不再继承父模型。Model-routed subagent delegation for DeepSeek Harness. |
| 103 | [NOirBRight/dsh-llm-providers-ui](https://github.com/NOirBRight/dsh-llm-providers-ui) | 0 | 2026-08-30 | 2026-09-03 | Shared LLM Providers settings shell, card order, and picker sort for DeepSeek Harness plugins |
| 104 | [peng2048/rein-scene-forge-dsh-plugin](https://github.com/peng2048/rein-scene-forge-dsh-plugin) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness plugin for Rein Scene Forge robot scene authoring |
| 105 | [PerryLink/dsh-reach](https://github.com/PerryLink/dsh-reach) | 0 | 2026-09-03 | 2026-09-03 | Multi-channel decision & remote-control bridge for DeepSeek Harness: pushes any workspace's approval/question cards to IM channels (WeChat iLink first) and answers them from chat, with a session console, per-channel security, and an open push service. |
| 106 | [PerryLink/dsh-ticktick](https://github.com/PerryLink/dsh-ticktick) | 0 | 2026-09-03 | 2026-09-03 | TickTick (Dida365) task bridge for DeepSeek Harness: Session-header task panel (list filter, undone/completed views, search, drag reorder), 11 curated agent tools, settings card, over the official TickTick MCP endpoint. |
| 107 | [Pidan-Workshop/dsh-godot-play](https://github.com/Pidan-Workshop/dsh-godot-play) | 0 | 2026-09-03 | 2026-09-03 | 在 DSH Web GUI 一键构建并试玩 Godot Web 导出。Build & play Godot Web exports in the DeepSeek Harness GUI with one click. |
| 108 | [psenY/gh-watch](https://github.com/psenY/gh-watch) | 0 | 2026-09-02 | 2026-09-03 | DSH 插件：GitHub PR/issue 变更监视插件（多 AI 独立配置，插件自身不审查、不回帖） |
| 109 | [qomob/dsh-madrank](https://github.com/qomob/dsh-madrank) | 0 | 2026-09-03 | 2026-09-03 | AI usage dashboard + optional global ranking for DeepSeek Harness (DSH). |
| 110 | [RayzPub/dsh-plugin-garmin](https://github.com/RayzPub/dsh-plugin-garmin) | 0 | 2026-09-03 | 2026-09-03 | dsh-plugin-garmin 是专为佳明表盘开发的 DeepSeek Harness (dsh) 插件。用户只需在聊天窗口中通过自然语言对话，即可完成针对 Garmin Fenix 7 系列（260×260、64 色 MIP 显示屏）的表盘设计、矢量仿真预览、资源合规校验、Monkey C 源码生成以及最终 .prg 安装二进制的编译打包 |
| 111 | [ruanhaodong-tt/dsh-security-guard](https://github.com/ruanhaodong-tt/dsh-security-guard) | 0 | 2026-09-03 | 2026-09-03 | DSH runtime security guard plugin - loader import confinement, HTTP Host header validation (QVD-2026-52631/57410). AI-assisted. |
| 112 | [runcat-tommy/dsh-panda-calendar](https://github.com/runcat-tommy/dsh-panda-calendar) | 0 | 2026-09-03 | 2026-09-03 | 熊猫日历 · DSH client-plugin：公历/农历/干支/生肖/节气、传统与外国节日、中国法定节假日（含调休）、多城市天气 — token-free Chinese calendar & weather plugin for DeepSeek Harness Web. |
| 113 | [ryasrk/dsh-vision-patch](https://github.com/ryasrk/dsh-vision-patch) | 0 | 2026-09-03 | 2026-09-03 | Patch custom provider vision model |
| 114 | [sailoflight/dsh-bash-escalation](https://github.com/sailoflight/dsh-bash-escalation) | 0 | 2026-09-03 | 2026-09-03 | 状态:完成 |
| 115 | [sailoflight/dsh-vision-toolkit-windows-edge](https://github.com/sailoflight/dsh-vision-toolkit-windows-edge) | 0 | 2026-09-03 | 2026-09-03 | 状态:完成 |
| 116 | [sandersyao/dsh-credentials-mysql](https://github.com/sandersyao/dsh-credentials-mysql) | 0 | 2026-09-02 | 2026-09-03 | DeepSeek Harness 基于 MySQL 的后端凭证库插件 (ctx.credentials) |
| 117 | [sandersyao/dsh-storage-mysql](https://github.com/sandersyao/dsh-storage-mysql) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 基于 MySQL 的后端存储插件 可通过 storage-domain 配置用于 workspace、session-projection-cache 和 message-feedback 数据的存储 |
| 118 | [sanyamjain2014/dsh-plugins](https://github.com/sanyamjain2014/dsh-plugins) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness (DSH) plugins by sanyamjain2014 — everything is a plugin. |
| 119 | [ShaineDemo/dsh-vision-pro-bridge](https://github.com/ShaineDemo/dsh-vision-pro-bridge) | 0 | 2026-09-03 | 2026-09-03 | Give text-only DeepSeek-V4-Pro vision — zero new dependencies, DeepSeek-only routing (images described by deepseek-v4-flash-vision-exp, then answered by V4-Pro). |
| 120 | [shangdi178/dsh-reasoning-bridge](https://github.com/shangdi178/dsh-reasoning-bridge) | 0 | 2026-09-03 | 2026-09-03 | Reasoning Bridge for dsh: hand high-cost reasoning to web AI (ChatGPT first, multi-target); keep local evidence, adoption gate, edits, and tests. Contract-based handoffs, versioned consent, SHA-256 receipts. Zero dependencies. |
| 121 | [shangdi178/dsh-versions](https://github.com/shangdi178/dsh-versions) | 0 | 2026-09-01 | 2026-09-03 | dsh (DeepSeek Harness) 主程序版本管理插件：版本总览 + npm 更新检查 + 在线升级/降级/重装 + 升级前自动快照、任意历史版本秒级回滚 |
| 122 | [sly7783/lively-wallpaper-guide](https://github.com/sly7783/lively-wallpaper-guide) | 0 | 2026-09-02 | 2026-09-03 | Set up Lively Wallpaper in minutes with step-by-step guides, performance tips, multi-monitor recipes, and curated wallpaper packs. |
| 123 | [suzuran520yyz/dsh-more-message-actions](https://github.com/suzuran520yyz/dsh-more-message-actions) | 0 | 2026-09-03 | 2026-09-03 | DSH Web GUI 插件，用于对会话消息进行编辑、重试、高级重试和删除等功能的实现 |
| 124 | [TangYT/dsh-superpowers](https://github.com/TangYT/dsh-superpowers) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness port of obra/superpowers: 14 agentic skills (brainstorming/planning/SDD/TDD/debugging/review/worktrees) + session-start bootstrap injection. |
| 125 | [theinfluencecompany/dsh-realtimeavatar](https://github.com/theinfluencecompany/dsh-realtimeavatar) | 0 | 2026-09-03 | 2026-09-03 | Realtime Avatar (realtimeavatar.ai) for the DeepSeek Harness (dsh): harness-held API key, public docs as skills, rta_* tools, /rta onboarding, zero runtime dependencies |
| 126 | [TiferKing/dsh-company](https://github.com/TiferKing/dsh-company) | 0 | 2026-09-03 | 2026-09-03 | 不想当牛马了？来当老板！开插件公司，雇AI牛马，过赛博人生！ |
| 127 | [tiphareth0/dsh-hardssh](https://github.com/tiphareth0/dsh-hardssh) | 0 | 2026-09-02 | 2026-09-03 | Run your work with existing DSH plugins on remote servers, across any number of machines |
| 128 | [vibeinging/dsh-session-teams](https://github.com/vibeinging/dsh-session-teams) | 0 | 2026-09-01 | 2026-09-03 | DSH 对话窗口协作与窗口团队插件 · dsh-plugin · DSH 窗口间真实消息、任务协调与角色窗口团队，按链接精确寻址。Conversation-window messaging and window teams for DSH: real messages, task coordination, and role windows addressed by canonical links. |
| 129 | [victor10035445/dsh-v-token-insight](https://github.com/victor10035445/dsh-v-token-insight) | 0 | 2026-09-02 | 2026-09-03 | a plugin of token insight for deepseek harness. |
| 130 | [Vinzelles/dsh-clearview](https://github.com/Vinzelles/dsh-clearview) | 0 | 2026-09-03 | 2026-09-03 | A calmer reading view for DeepSeek Harness: native process details, live reasoning, and clean final answers. |
| 131 | [weixshaw/dsh-plugin-task-runner](https://github.com/weixshaw/dsh-plugin-task-runner) | 0 | 2026-09-03 | 2026-09-03 | Task Runner 任务拆解模式：主代理拆解任务、子代理（默认本地模型）并行执行再综合结果，并发/模型可按机器配置。Decompose-and-dispatch agent preset for DeepSeek Harness. |
| 132 | [wuwuzhige-sudo/dsh-skill-gsd](https://github.com/wuwuzhige-sudo/dsh-skill-gsd) | 0 | 2026-08-17 | 2026-09-03 | skill比较轻量，缩减上下文占用 |
| 133 | [wzwnolook/dsh-safe](https://github.com/wzwnolook/dsh-safe) | 0 | 2026-09-02 | 2026-09-03 | Zero-config boot-safe wrapper for dsh: auto-disables failing plugins, restores broken configs via --patch overlay isolation. No dsh source changes needed.  |
| 134 | [x7687315-gif/dsh-policy](https://github.com/x7687315-gif/dsh-policy) | 0 | 2026-09-02 | 2026-09-03 | User-controlled policy and personalization runtime for DeepSeek Harness - enforce hard project constraints at the agent lifecycle boundary. |
| 135 | [xia-sc/dsh-git](https://github.com/xia-sc/dsh-git) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness Web GUI 的完整 Git 管理插件：分支切换/fetch/pull/commit/push，可折叠悬浮面板 + 输入框胶囊 |
| 136 | [xuxucodepractice-code/dsh-claim-guard](https://github.com/xuxucodepractice-code/dsh-claim-guard) | 0 | 2026-09-03 | 2026-09-03 | A deterministic pre-write claim guard for supported DeepSeek Harness file tools. |
| 137 | [xxww0098/dsh-plugin-oauth-subs](https://github.com/xxww0098/dsh-plugin-oauth-subs) | 0 | 2026-08-26 | 2026-09-03 | ChatGPT Codex and xAI Grok subscription OAuth for DeepSeek Harness — PKCE / device-code, local Responses proxy, llm-pi-ai sync |
| 138 | [yangbobo2021/relay-dsh-plugin-monitor-author](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-author) | 0 | 2026-09-02 | 2026-09-03 | DSH Skill for discovering and safely authoring Relay Monitor Bundles. |
| 139 | [yangbobo2021/relay-dsh-plugin-monitor-process](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-process) | 0 | 2026-09-02 | 2026-09-03 | Identity-safe process monitoring capability for Relay on DeepSeek Harness. |
| 140 | [yangbobo2021/relay-dsh-plugin-monitor-time](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time) | 0 | 2026-09-02 | 2026-09-03 | Time deadline Monitor Bundle extension for Relay on DeepSeek Harness. |
| 141 | [Yinxe/dsh-token-stats](https://github.com/Yinxe/dsh-token-stats) | 0 | 2026-09-02 | 2026-09-03 | DeepSeek Harness (DSH) token usage statistics plugin: aggregates all local session logs into cumulative/peak/streak stats, daily & weekly trends, hour-of-day distribution, GitHub-style year heatmap, per-model breakdown — Settings page + sidebar today card. |
| 142 | [ynymhrb/long-horizon-runtime](https://github.com/ynymhrb/long-horizon-runtime) | 0 | 2026-08-26 | 2026-09-03 | Durable long-horizon task runtime for DeepSeek Harness — plan, confirm, track, and resume AI work across sessions and interruptions. |
| 143 | [youridol/dsh-sess](https://github.com/youridol/dsh-sess) | 0 | 2026-09-03 | 2026-09-03 | Session manager for DeepSeek Harness (dsh-v0.1.2-alpha.5): permanently delete cold sessions and manage archived sessions via the official Profile Bundle / Cordis APIs. MIT. |
| 144 | [YrracOwl/dsh-hmos-sidebar](https://github.com/YrracOwl/dsh-hmos-sidebar) | 0 | 2026-09-03 | 2026-09-03 | Windows-only HarmonyOS developer workbench and native HarmonyOS agent presets for DeepSeek Harness；Windows 原生鸿蒙开发工作台、Agent 预设与 dcli 工具链。 |
| 145 | [yunmin311/dsh-universal-palette](https://github.com/yunmin311/dsh-universal-palette) | 0 | 2026-09-03 | 2026-09-03 | Dense translucent-glass Universal Palette for DeepSeek Harness Web — federates Commands, Sessions, Models, Conversation Hits with rich secondary actions and deterministic context/frecency ranking. |
| 146 | [zhaoxuejie/dsh-plugin-feihualing](https://github.com/zhaoxuejie/dsh-plugin-feihualing) | 0 | 2026-09-03 | 2026-09-03 | DeepSeek Harness 飞花令游戏插件：简易 / 古法严格双模式，按会话独立维护令字、得分、已用诗句与剩余提示次数 |
| 147 | [Zhiye-Tang/weibo-wallpaper-dsh-plugin](https://github.com/Zhiye-Tang/weibo-wallpaper-dsh-plugin) | 0 | 2026-09-03 | 2026-09-03 | 把微博博主的相册变成(DSH)Web 界面壁纸的宿主插件。每次打开 DSH 自动检查微博:同一天跳过,跨天/跨月增量下载,按月归档到本地 YYYY-MM 文件夹，首次启用自动回填今年1月到上个月的历史相册。即一个插件、一个你本人的微博 Cookie,就可同时跟踪多位博主(每人独立文件夹与状态) 三种显示模式 + 月份切换,控制条常驻页面底部。A DSH host plugin that syncs a Weibo blogger's album by month into local folders and shows them as the wallpaper behind  the DSH web UI. Cookie is required and stay local. |
| 148 | [zsxian11/dsh-flywheel](https://github.com/zsxian11/dsh-flywheel) | 0 | 2026-09-03 | 2026-09-03 | 面向 DeepSeek Harness（DSH） 的「会话飞轮」插件 —— 仓外独立仓库（v1），与 Cursor 侧共用同一套索引与检索协议。  一句话目标：在单会话隔离下，让一条龙长会话接近 Cursor 的「当前句只带工作集」；用项目级产物图 + 倒排在会话之间传递短卡，而不是把 transcript 糊在一起。 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Agents365-ai/dsh-vision-plugin
- Axiaohungry/dsh-llm-codebuddy
- cyanxi69-jpg/dsh-self-memory
- DDDFXYqiming/Agent_Extensions
- djs326/dsh-titlebar-feed
- EIGHTfs/dsh-git-push
- fan56/dsh-llmwiki-memory
- Hann428/dsh-usage-dashboard
- kangjinghang/dsh-xueqiu
- KeyboardPrince/dsh-instruct-manager
- KeyboardPrince/dsh-skill-manager
- La-Theresa/dsh-math-modeling
- magian1127/deepseek-harness-zcode_mask
- MEMZ-Edge01/GrokBot_in_DeepseekHerness
- qinyre/dsh-plugin-atlas
- Qiwei-QW/dsh-r-ide
- Riianfar/dsh-zai-web-search-api
- shiyazhou666/dsh-token-plan-compare
- WaySeeSee/dsh-de-workbench
- Xiamu-ssr/snowmountain-market
