# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-06**
- 快照日期 / Snapshot date: **2026-10-06 (UTC)**
- 待审核 / Pending: **121**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **22**
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

对比上一份快照 **2026-10-05** / vs previous snapshot **2026-10-05**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **2**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 2167 | +521 | 52 | 11d | 日增百星 | 日增 +521★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 680 | +46 | 41 | 50d | 冲入 Top 20 | 冲入 Top 20（23→20） |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [EricWang1358/dsh-web-studyhub](https://github.com/EricWang1358/dsh-web-studyhub) | 45 | 2026-09-12 | 2026-10-06 | StudyHub: a DeepSeek Harness (DSH) plugin that turns your own material into questions and spaced review · 把自己的资料变成题目与间隔复习的 DSH 学习插件 |
| 2 | [alienzhou/html-workbench](https://github.com/alienzhou/html-workbench) | 33 | 2026-08-11 | 2026-10-06 | Local visual editor for existing HTML, with interactive previews and AI collaboration. Available as a DeepSeek Harness plugin and agent skill. 本地 HTML 可视化编辑、交互预览与 AI 协作，支持 DeepSeek Harness 插件和 Agent Skill。 |
| 3 | [BotHarness/BotHarness](https://github.com/BotHarness/BotHarness) | 5 | 2026-09-16 | 2026-10-06 | DeepSeekBot: the open-source GrokBot alternative, built on DeepSeek Harness (DSH). PersonaBots with their own identity, persona and Git-backed memory you can share via GitHub; group chat, task delegation, and IM identities on Lark/Feishu, Slack, Discord and WeChat. Works with other DSH plugins. Bot marketplace: market.botharness.ai. MIT. |
| 4 | [Celebrate-W/dsh-topic-trail](https://github.com/Celebrate-W/dsh-topic-trail) | 4 | 2026-09-12 | 2026-10-06 | 会话工作线索悬浮窗：把和 AI 的长对话实时提炼成可跳转的「线索」，并用 DeepSeek 生成话题、进度与阶段历程 |
| 5 | [Sev7eEn7/sieve](https://github.com/Sev7eEn7/sieve) | 3 | 2026-10-04 | 2026-10-06 | DeepSeek Harness（DSH）上下文管理与 token 优化插件：工具输出过滤、历史上下文裁剪、技能按需披露；离线回放请求载荷减少 30% 以上（按字符数）。 |
| 6 | [alexdoandev/jev-laya-dsh](https://github.com/alexdoandev/jev-laya-dsh) | 2 | 2026-10-02 | 2026-10-06 | User → Jev(Laya) → Agent — a local System-1 decision layer for DeepSeek Harness agents. Laya (open, Jev-compatible) routes prompts, gates risky tool calls and swaps models in milliseconds. 100% local, $0/token. MIT. |
| 7 | [KAIROSLLL/dsh-users-open-source](https://github.com/KAIROSLLL/dsh-users-open-source) | 2 | 2026-10-06 | 2026-10-06 | DSH（DeepSeek Harness）插件「开源用户」：修复了deepseek harness不能自动开源用户代码的问题的插件。（并非） |
| 8 | [TommyFang2077/dsh-linux-desktop](https://github.com/TommyFang2077/dsh-linux-desktop) | 2 | 2026-08-15 | 2026-10-06 | 非官方 DeepSeek Harness Linux 桌面适配：复用固定官方 Electron、内核与 WebUI 源码，构建 x86_64 deb/rpm，支持系统托盘、应用市场及 GitHub Actions 签名的独立内核／桌面更新。 |
| 9 | [yi-yezhiqiu/dsh-prompt-market](https://github.com/yi-yezhiqiu/dsh-prompt-market) | 2 | 2026-10-06 | 2026-10-06 | DeepSeek Harness 提示词市场插件：对话框内一键浏览、搜索、收藏提示词，选中即写入输入框。零后端、免构建、数据只存本机。 \| A prompt marketplace for DSH: browse, search and insert prompts straight into the composer. |
| 10 | [2034126171/dsh-boot-animation-sound](https://github.com/2034126171/dsh-boot-animation-sound) | 1 | 2026-10-06 | 2026-10-06 | DSH 开机动画：声音不需要全屏。触发时机（启动应用/页面刷新/新对话/任意会话）与播放频率（每次/每天一次/只播一次/限播 N 次）可自选。 |
| 11 | [2NF/dsh-profile-bridge](https://github.com/2NF/dsh-profile-bridge) | 1 | 2026-10-06 | 2026-10-06 | 桌面版看不到你在别的 profile 里装的插件？一键让 DeepSeek Harness 桌面版改用你已有的 profile（目录链接 + 自动备份 + 随时还原）｜Make the DSH Desktop app use an existing plugin profile — one click, fully reversible. |
| 12 | [AL-Yichen/dsh-fullscreen-input](https://github.com/AL-Yichen/dsh-fullscreen-input) | 1 | 2026-10-06 | 2026-10-06 | A fullscreen input plugin for DeepSeek Harness. |
| 13 | [aomk20201110-commits/CST_AI](https://github.com/aomk20201110-commits/CST_AI) | 1 | 2026-10-06 | 2026-10-06 | Safe, resumable automation and analysis plugin for CST Studio Suite. |
| 14 | [Chaos-Paradox/dsh-web-search-searxng](https://github.com/Chaos-Paradox/dsh-web-search-searxng) | 1 | 2026-10-06 | 2026-10-06 | Self-hosted SearXNG metasearch web-search plugin for DeepSeek Harness — no API key, adds a Plugins-page settings card. \| DeepSeek Harness 插件：通过自托管 SearXNG 元搜索提供网页搜索，无需 API Key，附带设置页插件配置卡片。 |
| 15 | [chillBnetley/dsh-model-router](https://github.com/chillBnetley/dsh-model-router) | 1 | 2026-10-06 | 2026-10-06 | Question-type-aware model routing for DeepSeek Harness |
| 16 | [Civitasv/praxis](https://github.com/Civitasv/praxis) | 1 | 2026-10-05 | 2026-10-06 | Build with AI. Develop taste. |
| 17 | [himi-li/dsh-reasoning-loop-guard](https://github.com/himi-li/dsh-reasoning-loop-guard) | 1 | 2026-10-06 | 2026-10-06 | Detects verbatim reasoning loops in DSH LLM streams and cuts them early. Zero-dependency Cordis plugin with a fire journal and a reasoning_loop_log tool. |
| 18 | [HuanLinOTO/dsh-plugin-better-sidebar-plugin-audio](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-audio) | 1 | 2026-10-06 | 2026-10-06 | dsh-better-sidebar 的音频预览：可缩放波形 + 实时频谱 + 全曲频谱图，自带 HTTP Range 流式媒体路由 \| Audio preview for dsh-better-sidebar: zoomable waveform, live spectrum, whole-file spectrogram, with its own Range-capable streaming media route |
| 19 | [iasiv5/dsh-skins](https://github.com/iasiv5/dsh-skins) | 1 | 2026-09-04 | 2026-10-06 | DeepSeek Harness Web 界面主题/皮肤管理插件，可切换多种视觉风格。 |
| 20 | [jiangzeyuan/dsh-rivermind](https://github.com/jiangzeyuan/dsh-rivermind) | 1 | 2026-10-05 | 2026-10-06 | RiverMind：基于 DeepSeek Harness 的德州扑克 Agent 训练场，让 AI 玩家拥有独立策略、长期记忆和可追溯的决策 |
| 21 | [KLRSL/dsh-fuse](https://github.com/KLRSL/dsh-fuse) | 1 | 2026-08-19 | 2026-10-06 | dsh-fuse：UI 设计与代码规范一体化 DSH 插件（v1.3.0）——设计令牌 + fence 页面级 UI 渲染 + 逐条就地微调 + 截图走查。UI design &amp; code-standards plugin for DeepSeek Harness. |
| 22 | [Linicc/dsh-plugin-guard](https://github.com/Linicc/dsh-plugin-guard) | 1 | 2026-10-06 | 2026-10-06 | Stop malformed plugin mounts from failing every DeepSeek request with REQUEST_EXTENSION — a guard for DeepSeek Harness. |
| 23 | [Link258QAQ/dsh-plugin-genshin-launch](https://github.com/Link258QAQ/dsh-plugin-genshin-launch) | 1 | 2026-10-06 | 2026-10-06 | DSH 插件：启动 DSH 时识别端口，并把《原神》启动器安装包下载到桌面；带 224MB 体积安全闸，下载失败自动改为打开官方下载页。 |
| 24 | [luoyuejun9/dsh-skin-rotation](https://github.com/luoyuejun9/dsh-skin-rotation) | 1 | 2026-10-06 | 2026-10-06 | Random skin rotation for DeepSeek Harness: a different installed skin on every launch, with an on/off switch inside Settings -&gt; Skins. |
| 25 | [Nana7mi0721/dsh-comfyui-agent](https://github.com/Nana7mi0721/dsh-comfyui-agent) | 1 | 2026-10-02 | 2026-10-06 | DSH（DeepSeek Harness）ComfyUI 插件：让 Agent 直接驱动本机 ComfyUI 出图 —— 文生图/图生图、跑画布工作流、节点与模型查询、看图与上传，兼容 DSH 0.2.0-rc.2。 |
| 26 | [Pegasus-Yang/DSH-Test-Plugin](https://github.com/Pegasus-Yang/DSH-Test-Plugin) | 1 | 2026-10-04 | 2026-10-06 | 在 DeepSeek Harness（DSH）的当前对话 中完成测试规划、UI/API 操作、证据采集、确定性断言和报告生成的插件。 |
| 27 | [purezhi/dsh-plugin-pando](https://github.com/purezhi/dsh-plugin-pando) | 1 | 2026-08-22 | 2026-10-06 | 复刻 confirmo for DeepSeek Harness |
| 28 | [qlheric/dsh-code-atlas](https://github.com/qlheric/dsh-code-atlas) | 1 | 2026-10-05 | 2026-10-06 | dsh 的代码图谱：tree-sitter WASM 符号索引 + 仓库地图 + 每文件一行 F/R/A/S 认知层（零原生编译） |
| 29 | [qlheric/dsh-toolbox](https://github.com/qlheric/dsh-toolbox) | 1 | 2026-10-05 | 2026-10-06 | 十个零依赖确定性工具，一个包给 dsh：json / calculator / encoding / diff / time / csv / regex / stat / markdown / schema |
| 30 | [TCOTC/dsh-plugin-default-workspace](https://github.com/TCOTC/dsh-plugin-default-workspace) | 1 | 2026-10-06 | 2026-10-06 | DSH plugin: pin the no-context fallback Workspace of new Sessions to one fixed folder (browser-side uiWorkspace policy, no host code). |
| 31 | [weiiiiis/dsh-cost-plugins](https://github.com/weiiiiis/dsh-cost-plugins) | 1 | 2026-10-05 | 2026-10-06 | 看住你在 DeepSeek Harness 上花的钱：侧边栏余额 + 每条回答的花费｜Per-answer cost &amp; balance for DeepSeek Harness |
| 32 | [xxszyh/dsh-gui-handoff](https://github.com/xxszyh/dsh-gui-handoff) | 1 | 2026-10-06 | 2026-10-06 | A DeepSeek Harness skill: hand a command-line-verified operation over to the user's GUI — drive it once, verify with ground truth, hand back a self-contained illustrated tutorial. |
| 33 | [1021summer/dsh-session-search](https://github.com/1021summer/dsh-session-search) | 0 | 2026-10-06 | 2026-10-06 | Full-text search for DeepSeek Harness sessions with precise message navigation. |
| 34 | [1Ecc/dsh-lenovo-toolkit](https://github.com/1Ecc/dsh-lenovo-toolkit) | 0 | 2026-08-28 | 2026-10-06 | 联想专业工具集 · DeepSeek Harness 插件。电池健康检测（macOS/Windows）：容量、循环次数、双口径健康度、SVG 衰减趋势图与系统官方电池报告。Lenovo professional toolkit for DeepSeek Harness. |
| 35 | [2132774831/dsh-memory-plugin](https://github.com/2132774831/dsh-memory-plugin) | 0 | 2026-10-06 | 2026-10-06 | 这是我为 DSH （DeepSeek Harness） 制作的一款插件，可以进行跨对话记忆支持手动导入 |
| 36 | [3likofj/dsh-anagenesis](https://github.com/3likofj/dsh-anagenesis) | 0 | 2026-10-06 | 2026-10-06 | 该插件是 DSH 上的可编程记忆编排层 + 自我进化引擎 |
| 37 | [439436269-ctrl/dsh-pinned-sessions](https://github.com/439436269-ctrl/dsh-pinned-sessions) | 0 | 2026-10-06 | 2026-10-06 | DSH 插件：侧栏内联的「置顶」会话分组（原生度量 + 就地搜索）。A pinned-session group in the DeepSeek Harness sidebar. |
| 38 | [adwhispr/dsh-plugin-adwhispr](https://github.com/adwhispr/dsh-plugin-adwhispr) | 0 | 2026-10-05 | 2026-10-06 | AdWhispr for DeepSeek Harness: competitor ad research, winning-ad cloning, and Meta / Google / TikTok ad launch and management |
| 39 | [AllShadowAnan/dsh-context-compressor](https://github.com/AllShadowAnan/dsh-context-compressor) | 0 | 2026-10-06 | 2026-10-06 | User-set absolute context ceiling for DeepSeek Harness: auto-compacts a session once it reaches a configured token limit. External plugin with a dedicated Settings page. |
| 40 | [andershfranzen/dsh-brand-a5](https://github.com/andershfranzen/dsh-brand-a5) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness web plugin: the a5 mark instead of the whale |
| 41 | [anweat/jev-websearch-eval](https://github.com/anweat/jev-websearch-eval) | 0 | 2026-10-06 | 2026-10-06 | Independent offline evaluation of the Bocha Jev decision model in a web-search evidence pipeline (vs. rule baseline and Laya): tasks, metadata-only snapshots, LLM-draft labels, judge outputs, reports |
| 42 | [ButterHost69/dsh-login-gateway](https://github.com/ButterHost69/dsh-login-gateway) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness (dsh) plugin: username, password and TOTP login front door for the Web UI, for tunneled or public deployments. |
| 43 | [ButterHost69/dsh-mermaid-diagram](https://github.com/ButterHost69/dsh-mermaid-diagram) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness (dsh) plugin: a Mermaid diagram tool for the model, rendered as a diagram card in the Web UI. |
| 44 | [Cai-Chengyu/dsh-docx-export](https://github.com/Cai-Chengyu/dsh-docx-export) | 0 | 2026-10-06 | 2026-10-06 | Export generated text as a real Word .docx from any DeepSeek Harness session — zero dependencies. |
| 45 | [CHENKEYI-MAKER/dsh-team-reporter](https://github.com/CHENKEYI-MAKER/dsh-team-reporter) | 0 | 2026-10-06 | 2026-10-06 | DSH plugin: reports local token usage to a team dashboard you run yourself. |
| 46 | [ChenYueqi2024/dsh-memory](https://github.com/ChenYueqi2024/dsh-memory) | 0 | 2026-10-05 | 2026-10-06 | Cross-session project memory for DeepSeek Harness (dsh) - native Cordis plugin. Xiamen University final project. |
| 47 | [chubbyclaw-com/dsh-acp-full](https://github.com/chubbyclaw-com/dsh-acp-full) | 0 | 2026-10-06 | 2026-10-06 | ChubbyClaw patch over @deepseek-ai/dsh-acp: a DeepSeek Harness profile that also reports AIR subagent and async-task background work over ACP. |
| 48 | [Colin900726/dsh-lan-web-access](https://github.com/Colin900726/dsh-lan-web-access) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness（dsh）的局域网 Web 访问插件 —— 在局域网或异地组网（如 Tailscale）环境里，让多台设备用浏览器同时访问同一台 dsh 主机 |
| 49 | [ComeCaramelos/dsh-custom-provider](https://github.com/ComeCaramelos/dsh-custom-provider) | 0 | 2026-09-23 | 2026-10-06 | DSH plugin that adds a "No API key required" toggle to custom providers configuration |
| 50 | [d0ublecl1ck/dsh-flow](https://github.com/d0ublecl1ck/dsh-flow) | 0 | 2026-10-06 | 2026-10-06 | 心流优先的 DSH 插件：把动作改回直觉——定位当前会话、复制会话 ID、链接交给系统默认程序（含 localhost）、行内代码右键打开或复制。 |
| 51 | [Deanyu148/dsh-balance-inquiry](https://github.com/Deanyu148/dsh-balance-inquiry) | 0 | 2026-10-04 | 2026-10-06 | 余额看板，可以添加多个按量计费/Token plan，同时查询余额。\| Balance dashboard, allowing the addition of multiple pay-as-you-go/Token plans, while simultaneously checking balances. |
| 52 | [Deanyu148/dsh-import-newapi](https://github.com/Deanyu148/dsh-import-newapi) | 0 | 2026-10-06 | 2026-10-06 | Import the copied connection information from the new API site with a single click \| 一键从new api站点导入复制的连接信息 |
| 53 | [DeepseekDays/dsh-ofm-model-manager](https://github.com/DeepseekDays/dsh-ofm-model-manager) | 0 | 2026-10-06 | 2026-10-06 | Per-model enable/disable and renaming for every provider in DeepSeek Harness — disabled models leave the model picker, custom names replace the built-in ones. Preferences live in the profile and apply immediately. |
| 54 | [DeepseekDays/dsh-provider-toggle](https://github.com/DeepseekDays/dsh-provider-toggle) | 0 | 2026-10-06 | 2026-10-06 | One-click enable/disable switch for every model provider in DeepSeek Harness - disabled providers leave the model picker. DSH 模型提供商一键开关：在「设置 → 模型」每行「编辑」左侧放一个开关，关掉即从模型选择栏消失。 |
| 55 | [DiaryOfUranus/dsh-second-brain](https://github.com/DiaryOfUranus/dsh-second-brain) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness（DSH）第二大脑载入器：把有硬上限、带时间戳的脑快照（身份＋状态指纹＋未决项＋指针与边界）注入每个新会话；只读、零写入、fail-loud、零依赖。 \| Second Brain loader for DSH — a bounded, timestamped snapshot of your local brain in every session prompt; read-only, zero-dependency. |
| 56 | [dyf189/dsh-screenshot](https://github.com/dyf189/dsh-screenshot) | 0 | 2026-10-06 | 2026-10-06 | A deepseek harness conversation screenshot plugin. |
| 57 | [Elec11/dsh-trello](https://github.com/Elec11/dsh-trello) | 0 | 2026-10-06 | 2026-10-06 | Trello plugin for Deepseek-harness |
| 58 | [fatedawn/dsh-ops-skill](https://github.com/fatedawn/dsh-ops-skill) | 0 | 2026-08-15 | 2026-10-06 | Portable operations skill for diagnosing and safely remediating DeepSeek Harness runtime issues. |
| 59 | [Fivezy2005/dsh-plugin-updater](https://github.com/Fivezy2005/dsh-plugin-updater) | 0 | 2026-10-06 | 2026-10-06 | Update every third-party plugin in the current DSH profile — npm and GitHub-only installs the built-in Plugins page never sees. |
| 60 | [forwardzz/dsh-opencode-session-sync](https://github.com/forwardzz/dsh-opencode-session-sync) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness 插件：把 OpenCode 桌面端（opencode.db）的历史会话按各自原本的工作目录导入为 DSH 原生会话 |
| 61 | [Fourteenth-Night/dsh-aoci](https://github.com/Fourteenth-Night/dsh-aoci) | 0 | 2026-10-06 | 2026-10-06 | AOCI-CODE cognition layer for DeepSeek Harness (DSH): one-shot /aoci &lt;path&gt;  gives agents governed, Git-versioned repository/database cognition via a dynamic MCP bridge (aoci_rules/overview/maintain), with auto-maintenance and compaction-contract recovery. MIT; AOCI-CODE binary not bundled. |
| 62 | [hanzheng-dev/dsh-access-phone-remote](https://github.com/hanzheng-dev/dsh-access-phone-remote) | 0 | 2026-10-06 | 2026-10-06 | 把手机变成你电脑的遥控器：推送 / 传文件 / 位置 / 可扩展动作，还能在手机上跟电脑里的 AI 对话。数据全部留在自己电脑上，零 npm 依赖。出门在外可配 Tailscale。 · Turn your phone into a remote console for your own PC. Everything stays local. Configure Tailscale for remote access. |
| 63 | [HarLin97/dsh-ipad-remote](https://github.com/HarLin97/dsh-ipad-remote) | 0 | 2026-10-06 | 2026-10-06 | Share the desktop DeepSeek Harness UI with phones, tablets and other computers, behind a six-digit PIN. |
| 64 | [hbgdjb/dsh-entry-transition](https://github.com/hbgdjb/dsh-entry-transition) | 0 | 2026-10-06 | 2026-10-06 | Entry Transition —— 打开工作台时的一次性入场动画：标识逐字擦出，退场时反色色块扫过全屏。深浅主题自动镜像，只动合成层。装上即用，零配置。 |
| 65 | [himoew/dsh-user-style](https://github.com/himoew/dsh-user-style) | 0 | 2026-10-06 | 2026-10-06 | 让 AI 记住「你喜欢怎么被对待」：可编辑的用户工作风格档案，在每次对话开始前注入系统提示词。悬浮面板 + 三层作用域（全局/工作区/仅本会话）+ 4 套内置预设 + 一键安装脚本。 |
| 66 | [hireseeker/hireseeker-cli](https://github.com/hireseeker/hireseeker-cli) | 0 | 2026-10-02 | 2026-10-06 | Клиент для сайта https://hireseeker.ru позволяет искать вакансии на платформе с помощью собственной среды разработки, без необходимости открывать сайт и браузер |
| 67 | [hwangjunjie/dsh-session-move](https://github.com/hwangjunjie/dsh-session-move) | 0 | 2026-09-05 | 2026-10-06 | Manage DeepSeek Harness sessions from the Web UI: drag &amp; drop / menu move to another folder, permanently delete, and AI-rename by summarizing the conversation. Includes agent tools. |
| 68 | [jamesct/dsh-file-manager](https://github.com/jamesct/dsh-file-manager) | 0 | 2026-10-05 | 2026-10-06 | a dsh plugin for file manager in current sidebar |
| 69 | [JessenReinhart/dsh-time-context](https://github.com/JessenReinhart/dsh-time-context) | 0 | 2026-10-06 | 2026-10-06 | Temporal grounding for DSH models: injects exact current local time and previous-message recency into every prompt |
| 70 | [JiewiW/dsh-cot-anchor](https://github.com/JiewiW/dsh-cot-anchor) | 0 | 2026-10-05 | 2026-10-06 | 思考锚点：从模型上一段思考中提取已确立结论，在工具结果后注入，减少重复推导；并可识别打转与伪工具调用 |
| 71 | [jiuaiwo/dsh-expert](https://github.com/jiuaiwo/dsh-expert) | 0 | 2026-10-06 | 2026-10-06 | T专家 — DeepSeek Harness 插件：22 分类 / 623 位专家名册（中文名与简介全量覆盖），@ 菜单召唤子代理 |
| 72 | [jiuaiwo/dsh-helper](https://github.com/jiuaiwo/dsh-helper) | 0 | 2026-10-06 | 2026-10-06 | 辅助补丁 — DeepSeek Harness 插件：任意会话把文件投递到微信、cron 定时任务、活动呼吸灯、完成提示音、一键重启 |
| 73 | [kagurazakayashi/dsh-delete-session](https://github.com/kagurazakayashi/dsh-delete-session) | 0 | 2026-08-14 | 2026-10-06 | A DeepSeek Harness Web plugin for quickly and thoroughly deleting sessions. 快速彻底删除会话的 DeepSeek Harness Web 插件。 |
| 74 | [Kfytm/attention-scheduler](https://github.com/Kfytm/attention-scheduler) | 0 | 2026-10-06 | 2026-10-06 | 注意力调度与记忆检索规则 \| DSH Skill：减轻上下文幻觉（检索触发、注入预算、写回白名单、L0/L1 成本归属），支持 dsh plugin 一键安装 |
| 75 | [kkaporn/dsh-session-composer](https://github.com/kkaporn/dsh-session-composer) | 0 | 2026-10-06 | 2026-10-06 | 用 GUI 组装一个会话的插件组合，存成 DSH 原生预设。Assemble a session plugin set in the GUI, saved as a native DSH agent preset. |
| 76 | [kuixiu/dsh-pet](https://github.com/kuixiu/dsh-pet) | 0 | 2026-10-06 | 2026-10-06 | A Q-style kitten overlay for the DeepSeek Harness Web UI, with a live peak/off-peak pricing badge and per-turn cost. |
| 77 | [lcy0121/dsh-plugin-compat-check](https://github.com/lcy0121/dsh-plugin-compat-check) | 0 | 2026-10-06 | 2026-10-06 | 在安装前判断一个 DSH 插件在你这一版 DeepSeek Harness 上是否真的可用 / Check whether a DeepSeek Harness plugin actually works on your version, before installing it |
| 78 | [lhpaul/dsh-harness](https://github.com/lhpaul/dsh-harness) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness plugin + runtime patch: per-session multi-folder workspace roots from .code-workspace files, multi-root @ completion, user-approved root grants, and a Web Roots tab (macOS Seatbelt) |
| 79 | [LimiChan-2026/dsh-plugins](https://github.com/LimiChan-2026/dsh-plugins) | 0 | 2026-10-06 | 2026-10-06 | Plugins for DeepSeek Harness (DSH). Currently: dsh-model-fold, collapsible provider groups in the composer model picker. |
| 80 | [lucky01222/dsh-workbench-shell](https://github.com/lucky01222/dsh-workbench-shell) | 0 | 2026-09-29 | 2026-10-06 | Conversation and plugin navigation for official DeepSeek Harness Web |
| 81 | [lucky01222/dsh-workbench-theme](https://github.com/lucky01222/dsh-workbench-theme) | 0 | 2026-09-30 | 2026-10-06 | Light/dark theme with APTX logo and optional artwork panels for official DeepSeek Harness Web |
| 82 | [Lujinan991/dsh-imagegen](https://github.com/Lujinan991/dsh-imagegen) | 0 | 2026-10-06 | 2026-10-06 | 为DSH（DeepSeek Harness）打造的 AI 图像生成插件 |
| 83 | [moazzamak/dsh-train-dashboard](https://github.com/moazzamak/dsh-train-dashboard) | 0 | 2026-10-05 | 2026-10-06 | A right-pane training dashboard for the DeepSeek Harness: runs a command of yours that writes a JSON snapshot of a training run, and charts it, one series at a time, with the age of the numbers always on screen. |
| 84 | [mostkia/dsh-htmlui](https://github.com/mostkia/dsh-htmlui) | 0 | 2026-10-06 | 2026-10-06 | HTML session UI for DeepSeek Harness: any HTML/CSS/JS rendered in a sandboxed iframe, in five placements, talking back to the model over POST + SSE |
| 85 | [myh2026/dsh-plugin-org](https://github.com/myh2026/dsh-plugin-org) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness plugin: mount the org agent harness (team dispatch / task queue / tools) into dsh as callable tools. |
| 86 | [Nana7mi0721/anima-style-lora-workflow-bundle](https://github.com/Nana7mi0721/anima-style-lora-workflow-bundle) | 0 | 2026-10-04 | 2026-10-06 | DeepSeek Harness 插件包：Anima 风格 LoRA 数据集全流程引擎，覆盖抓图下载 → 去重筛选 → 文字检测修补 → 重排编号 → 打标洗标 → 训练配置。自带 anima_status/anima_stage/anima_job/anima_doctor 四个工具、Agent 预设与图形设置页，另有一套可脱离 DSH 独立运行的 15 阶段 Python CLI。 |
| 87 | [Nishikinov/dsh-sidebar-settings-button](https://github.com/Nishikinov/dsh-sidebar-settings-button) | 0 | 2026-10-06 | 2026-10-06 | DSH plugin: puts a Settings row in the sidebar header, immediately before Plugins, and opens the native Settings panel in one click. |
| 88 | [opdsh/dsh-gh-pages-artifacts](https://github.com/opdsh/dsh-gh-pages-artifacts) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness plugin: let agents publish HTML pages and Markdown documents as shareable artifacts on GitHub Pages |
| 89 | [pengin69/configure-network-proxy](https://github.com/pengin69/configure-network-proxy) | 0 | 2026-10-06 | 2026-10-06 | Windows git/Node layered proxy configuration skill for AI agents: probe endpoints, configure per layer, verify by measurement, print exact rollback |
| 90 | [popingalex/dsh-reference-render](https://github.com/popingalex/dsh-reference-render) | 0 | 2026-10-05 | 2026-10-06 | 域中立的结构化引用渲染：行内 chip、悬浮预览、打开官方右侧栏。｜ Domain-neutral structured reference chips, hover preview, and host sidebar open for DeepSeek Harness. |
| 91 | [praisethefacts/dsh-plugin-google-classroom](https://github.com/praisethefacts/dsh-plugin-google-classroom) | 0 | 2026-10-06 | 2026-10-06 | Google Classroom MCP bundle for DeepSeek Harness: read-only courses, coursework, due dates, announcements, rosters and submissions as mcp__google-classroom__* tools. |
| 92 | [quonaro/dsh-plugin-devin](https://github.com/quonaro/dsh-plugin-devin) | 0 | 2026-10-06 | 2026-10-06 | Unofficial Devin CLI bridge for DeepSeek Harness: devin delegation tool, /devin command, and a Devin LLM provider route with ACP model discovery |
| 93 | [Ragnoryok1/dsh-plugin-doctor](https://github.com/Ragnoryok1/dsh-plugin-doctor) | 0 | 2026-10-06 | 2026-10-06 | Diagnostics for DeepSeek Harness plugins: finds plugins that failed to load, rows a failed update left behind, unmanaged entries - plus a disk scan for update leftovers. |
| 94 | [rongqingwen/dsh-approval-sound](https://github.com/rongqingwen/dsh-approval-sound) | 0 | 2026-10-06 | 2026-10-06 | Audible alert for the DSH Web GUI the moment a prompt is waiting for you — approval panels and ask-user-question panels alike, with per-seam voices or your own uploaded audio. |
| 95 | [ryukeilee/dsh-evolution](https://github.com/ryukeilee/dsh-evolution) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek DSH 的独立 Evolution bundle 预发布；promotion 的 host 代码不是安全沙箱。 |
| 96 | [sailoumili/dsh-session-remover](https://github.com/sailoumili/dsh-session-remover) | 0 | 2026-10-06 | 2026-10-06 | DSH 插件：侧栏会话行菜单增加「删除对话」与「批量删除」，把对话及其子代理会话移入 Windows 回收站，可从回收站还原。 \| DSH plugin: adds Delete conversation and Batch delete to the sidebar session menu; a conversation and its subagent sessions move to the Windows recycle bin and can be restored. |
| 97 | [shuxidemosheng/dsh-plan-mode-plus](https://github.com/shuxidemosheng/dsh-plan-mode-plus) | 0 | 2026-10-06 | 2026-10-06 | ZCode-style plan mode for DeepSeek Harness: model-initiated enter_plan_mode, hard read-only enforcement, four-phase planning workflow |
| 98 | [simonwen-oss/windows-context-menu-cleanup](https://github.com/simonwen-oss/windows-context-menu-cleanup) | 0 | 2026-10-06 | 2026-10-06 | Reliably remove unwanted Windows Explorer right-click menu entries (Baidu Netdisk, Thunder/Xunlei, Sogou Input) with verification and rollback. PowerShell, no dependencies. |
| 99 | [SOH4C4759/dsh-plugin-restart](https://github.com/SOH4C4759/dsh-plugin-restart) | 0 | 2026-10-06 | 2026-10-06 | One-click restart for the DeepSeek Harness desktop app: a sidebar-footer button plus a detached supervisor that relaunches the whole app, so a rebuilt plugin or profile change takes effect immediately. |
| 100 | [SOH4C4759/dsh-plugin-skill-autoroute](https://github.com/SOH4C4759/dsh-plugin-skill-autoroute) | 0 | 2026-10-06 | 2026-10-06 | Automatic skill routing for DeepSeek Harness: one deterministic routing pass per user instruction, injected as a ranked brief, an auto-loaded SKILL.md body, or a forced router-skill call. |
| 101 | [SOH4C4759/dsh-ui-sound](https://github.com/SOH4C4759/dsh-ui-sound) | 0 | 2026-10-06 | 2026-10-06 | DSH Web UI sound effects for DeepSeek Harness 0.2.0 - community port of dsh-plugin-uisfx: interface-interaction + task-status cues, 78 cues x 12 packs, per-scenario settings page. |
| 102 | [sxwer001/dsh-coding-plan-quota](https://github.com/sxwer001/dsh-coding-plan-quota) | 0 | 2026-10-06 | 2026-10-06 | Quota ring in the DSH composer bar that tracks OpenCode Go and 14 other coding-plan quotas or balances, cycles 5-hour weekly and monthly windows on click, and colours itself by urgency. |
| 103 | [Teresa-CoCo/ohmydsh](https://github.com/Teresa-CoCo/ohmydsh) | 0 | 2026-10-06 | 2026-10-06 | OMP-flavoured DeepSeek Harness (dsh) distribution: TUI by default, desktop surface over one shared backend, preset OMP working modes, CI that tracks upstream dsh releases. |
| 104 | [TestFox000/dsh-deepseek-peak-whale](https://github.com/TestFox000/dsh-deepseek-peak-whale) | 0 | 2026-10-06 | 2026-10-06 | 会说话的小鲸鱼娘 |
| 105 | [ThatSimpleTech/dsh-airlock](https://github.com/ThatSimpleTech/dsh-airlock) | 0 | 2026-10-06 | 2026-10-06 | Run DSH (DeepSeek Harness) on macOS inside a kernel sandbox, with every DeepSeek upload removed and Brave, Tavily or SearXNG search instead |
| 106 | [TLNing260310/dsh-compaction-fidelity](https://github.com/TLNing260310/dsh-compaction-fidelity) | 0 | 2026-10-04 | 2026-10-06 | DSH 上下文压缩保真层：跨语言保真指纹、项目架构回查锚点、350K 默认压缩线，MIT 协议。 \| DSH context-compaction fidelity layer: cross-lingual fingerprints, architecture retrieval, 350K default line, MIT. |
| 107 | [tu1918/dsh-git-plugin](https://github.com/tu1918/dsh-git-plugin) | 0 | 2026-09-14 | 2026-10-06 | DSH Web GUI git panel: a resident right-sidebar tab for reviewing, staging, committing, and syncing the session workspace |
| 108 | [tuibe/dsh-deepseek-theme-studio](https://github.com/tuibe/dsh-deepseek-theme-studio) | 0 | 2026-10-06 | 2026-10-06 | DSH Web GUI client theme plugin — frosted glass / fluid / quantised effects in DeepSeek's visual language. 100 adjustable parameters. |
| 109 | [vowa-antilamer/dsh-copilot-quota](https://github.com/vowa-antilamer/dsh-copilot-quota) | 0 | 2026-10-06 | 2026-10-06 | GitHub Copilot quota indicator for the DeepSeek Harness web GUI: the remaining chat, completion and AI-credit quota of the signed-in account, shown next to the composer. |
| 110 | [w32394045-dotcom/dsh-github](https://github.com/w32394045-dotcom/dsh-github) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness 的 GitHub 接入插件：设置里登录账号，agent 用它真实干活（12 个工具 + 云计算与成本护栏）。token 不经过模型上下文。 |
| 111 | [WayAero/dsh-esp-buddy](https://github.com/WayAero/dsh-esp-buddy) | 0 | 2026-08-22 | 2026-10-06 | DeepSeek Harness 的 ESP32-S3 Buddy 插件：通过 BLE 显示会话、Token 与上下文状态，支持触摸审批、电脑校时和角色包传输。 |
| 112 | [WayAero/esp32s3-buddy](https://github.com/WayAero/esp32s3-buddy) | 0 | 2026-10-05 | 2026-10-06 | ESP32-S3 桌面 AI 伙伴：触摸审批、工作状态、角色动画与蓝牙校时，支持 DeepSeek Harness 和 Claude Code。 |
| 113 | [weixshaw/dsh-rss](https://github.com/weixshaw/dsh-rss) | 0 | 2026-10-06 | 2026-10-06 | DSH（DeepSeek Harness）RSS 阅读器插件：分组订阅、FreshRSS 账号同步、图片本地代理、BYOK AI 摘要/翻译/问答、播客与全文抓取 |
| 114 | [whateverboy2333/dsh-round-table](https://github.com/whateverboy2333/dsh-round-table) | 0 | 2026-10-06 | 2026-10-06 | Round-table meetings, editable task cards and member workflows for DeepSeek Harness desktop. |
| 115 | [winniesi/dsh-clear-ungrouped](https://github.com/winniesi/dsh-clear-ungrouped) | 0 | 2026-10-06 | 2026-10-06 | DeepSeek Harness plugin: one-click clear (archive) for the sidebar's Ungrouped conversations, with confirm and undo. |
| 116 | [xiex16070-jpg/dsh-prompt-enhance](https://github.com/xiex16070-jpg/dsh-prompt-enhance) | 0 | 2026-10-06 | 2026-10-06 | One-click prompt enhancement for the DeepSeek Harness composer: a chip beside the model selector rewrites the draft into a structured prompt using the session's own model. |
| 117 | [xraywu/dsh-service-monitor](https://github.com/xraywu/dsh-service-monitor) | 0 | 2026-10-06 | 2026-10-06 | Deepseek Harness 插件 - 常用第三方 Agent 服务余额监控 |
| 118 | [yee114514/dsh-gandi](https://github.com/yee114514/dsh-gandi) | 0 | 2026-10-06 | 2026-10-06 | 让 DSH 的 agent 在你的Gandi IDE里做 Scratch 项目 |
| 119 | [yuzuqiang/advanced-compact](https://github.com/yuzuqiang/advanced-compact) | 0 | 2026-10-06 | 2026-10-06 | Adaptive context compaction plugin for DeepSeek Harness — final 0.1.22 release, verification and headless benchmarks |
| 120 | [zhp282515-wq/dsh-plugin-agnes-image](https://github.com/zhp282515-wq/dsh-plugin-agnes-image) | 0 | 2026-10-06 | 2026-10-06 | Agnes image generation for DeepSeek Harness: an agnes_image tool plus a settings-page console (model switching, API key management, prompt presets, history gallery). |
| 121 | [zhz8888/dsh-radeon-cloud-patcher](https://github.com/zhz8888/dsh-radeon-cloud-patcher) | 0 | 2026-10-05 | 2026-10-06 | 为 DSH 接入 AMD Radeon Cloud 模型 provider，支持逐模型设置思考档位 \| Adds AMD Radeon Cloud as a model provider for DeepSeek Harness with per-model reasoning effort levels. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 14185638/dsh-mcp-manager
- 14185638/dsh-sound-alerts
- ADkun/adg-multi-agent
- ADkun/dsh-auto-stop
- ADkun/dsh-convergence-notice
- ADkun/dsh-windows-notifier
- d0ublecl1ck/dsh-external-link
- DarkskyX15/dsh-client-ui-m3-theme
- Degurechaff57/dsh-openapi
- Depar7ure/dsh-desktop-web-refresh
- dragon43pp/dsh-ops-skill
- jipika/dsh-cron
- jipika/dsh-hide-buttons
- KouzakiUmi/dsh-tool-discovery
- luoyukun3-oss/dsh-todo-panel
- luoyukun3-oss/gh-my-posts
- luzonghao/dsh-input-light
- luzonghao/dsh-sidebar-light
- purezhi/dsh-plugin-confirmo
- TommyFang2077/pi-workbench
- tommyhedgerow/Mimir
- yukitakasama/dsh-context-lens
