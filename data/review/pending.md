# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-03**
- 快照日期 / Snapshot date: **2026-11-03 (UTC)**
- 待审核 / Pending: **494**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **40**
- Star 异常增长 / Star-growth alerts: **13** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-02** / vs previous snapshot **2026-11-02**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **13**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [HunYiSage/dsh-purge](https://github.com/HunYiSage/dsh-purge) | 待审 / pending | 17033 | +832 | 3935 | 75d | 日增百星、待审高星 | 日增 +832★；核准即 Top 1 |
| ⚠️ [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 待审 / pending | 37355 | — | 4827 | 211d | 待审高星 | 核准即 Top 1 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 58913 | +1665 | 1601 | 39d | 日增百星 | 日增 +1665★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10511 | +216 | 402 | 80d | 日增百星 | 日增 +216★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 4864 | +199 | 98 | 78d | 日增百星 | 日增 +199★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5296 | +195 | 495 | 26d | 日增百星 | 日增 +195★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 1495 | +177 | 134 | 80d | 日增百星 | 日增 +177★ |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 3881 | +173 | 323 | 88d | 日增百星 | 日增 +173★；已不进榜单 |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 5466 | +119 | 442 | 80d | 日增百星 | 日增 +119★ |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 5203 | +118 | 348 | 31d | 日增百星 | 日增 +118★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 6717 | +115 | 337 | 81d | 日增百星 | 日增 +115★ |
| ⚠️ [op7418/dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) | 已核准 / approved | 354 | +101 | 22 | 3d | 日增百星 | 日增 +101★ |
| ⚠️ [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) | 已核准 / approved | 253 | +92 | 19 | 1d | 榜单跃升 | 榜单 148→93；创建 1 天 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) ⚠️ | 37355 | 2026-04-05 | 2026-11-03 | 你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks. |
| 2 | [HunYiSage/dsh-purge](https://github.com/HunYiSage/dsh-purge) ⚠️ | 17033 | 2026-08-19 | 2026-11-03 | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ 如要二开，请查看署名要求部分 |
| 3 | [regrevia/Envoy](https://github.com/regrevia/Envoy) | 96 | 2026-06-08 | 2026-11-03 | 把链接分享给你的 AI：提取网页、视频与本地媒体中的可追溯材料。 / Share links with your AI: extract traceable material from web pages, videos, and local media. |
| 4 | [GoldenLoaf24h/browserpaw](https://github.com/GoldenLoaf24h/browserpaw) | 39 | 2026-09-10 | 2026-11-03 | BrowserClaw - Control your everyday Chrome browser from AI agents, without losing logins or focus |
| 5 | [lijiaqi-AI-Product-Manager/dsh-agent-compare](https://github.com/lijiaqi-AI-Product-Manager/dsh-agent-compare) | 22 | 2026-11-02 | 2026-11-03 | 同一需求，两版真跑，体验后审查采用。Two live builds for one task in DeepSeek Harness. |
| 6 | [MerkyorLynn/dsh-live-compact](https://github.com/MerkyorLynn/dsh-live-compact) | 18 | 2026-11-03 | 2026-11-03 | 边做边压 Live Compact. Compress the finished turn in place and keep the prefix cache. |
| 7 | [Mrsirlila/dsh-pocket-plus](https://github.com/Mrsirlila/dsh-pocket-plus) | 15 | 2026-09-21 | 2026-11-03 | 把 DeepSeek Harness 装进口袋，扫一次码就进去。内网 / Tailscale / Cloudflare 三条链路自动择优，断线自动切换。 |
| 8 | [whitequeen306/dsh-logistics](https://github.com/whitequeen306/dsh-logistics) | 15 | 2026-06-16 | 2026-11-03 | Project housekeeping for DeepSeek Harness: 12 /logi-* commands, seven specialist review subagents, health score, and a baseline gate. |
| 9 | [keer1024/dsh-native](https://github.com/keer1024/dsh-native) | 6 | 2026-10-22 | 2026-11-03 | 一个dsh的插件，一个意在提高dsh执行效率的dsh插件 |
| 10 | [Dogtiti/dsh-subagent-bridge](https://github.com/Dogtiti/dsh-subagent-bridge) | 5 | 2026-10-22 | 2026-11-03 | Subagent-shaped bridge between Codex and DeepSeek Harness: Codex spawns DSH workers over a loopback MCP endpoint and gets final answers back; DSH agents can dispatch to Codex in return. |
| 11 | [l246804/dsh-pstack](https://github.com/l246804/dsh-pstack) | 5 | 2026-10-22 | 2026-11-03 | pstack for DeepSeek Harness: rigorous agent workflows ported from cursor/plugins. |
| 12 | [poco-ai/agentero-dsh-plugin](https://github.com/poco-ai/agentero-dsh-plugin) | 4 | 2026-10-30 | 2026-11-03 | 给 DeepSeek Harness 用的科研文献库插件：搜论文、带出处、审批入库、把笔记线索交给同会话其他插件。Academic research library for DSH — search, cite, approve imports, hand off notes. |
| 13 | [foryourever/ssh-plugin-dsh](https://github.com/foryourever/ssh-plugin-dsh) | 3 | 2026-11-03 | 2026-11-03 | SSH terminal, SFTP and server monitoring plugin for DeepSeek Harness｜SSH 终端、文件传输与服务器监控插件 |
| 14 | [ucfjoe/dsh-team-progress](https://github.com/ucfjoe/dsh-team-progress) | 3 | 2026-11-03 | 2026-11-03 | DeepSeek Harness GUI plugin: four views of a running agent team — who is on what, tracked defects, goal rounds, and what needs a human now. Every number counts durable state; a source it cannot read says so instead of showing 0. |
| 15 | [dbcaskml183-dotcom/dsh-prelude](https://github.com/dbcaskml183-dotcom/dsh-prelude) | 2 | 2026-11-03 | 2026-11-03 | DSH 提示词优化与改写助手。发现需求遗漏，补一句或对照原稿改整段，由你决定采用与发送。Prompt optimizer and rewriter for DeepSeek Harness. |
| 16 | [FST-EchoFly/dsh-im-phone-chat](https://github.com/FST-EchoFly/dsh-im-phone-chat) | 2 | 2026-11-03 | 2026-11-03 | DSH 手机聊天镜像：在左侧栏/主面板实时查看手机 IM 会话与助手回复（dsh-im 配套，支持 LaTeX 与图片） |
| 17 | [HSYrc/DeepVibe-dsh](https://github.com/HSYrc/DeepVibe-dsh) | 2 | 2026-11-02 | 2026-11-03 | DeepVibe-dsh - live light-ring DSH plugin with immersive dock, approval card, real Platform billing and session topic |
| 18 | [KonshinHaoshin/dsh-eni](https://github.com/KonshinHaoshin/dsh-eni) | 2 | 2026-11-03 | 2026-11-03 | Per-model jailbreak armor for DeepSeek Harness: arm one model with a spell, leave the rest untouched. |
| 19 | [kuangre123/dsh-context-press](https://github.com/kuangre123/dsh-context-press) | 2 | 2026-11-03 | 2026-11-03 | 上下文液压机 · Visual context compaction for DeepSeek Harness |
| 20 | [lilixinsniper/dsh-intent-recognition](https://github.com/lilixinsniper/dsh-intent-recognition) | 2 | 2026-10-30 | 2026-11-03 | Five-layer intent recognition pipeline (rules, pgvector retrieval, Jev scoring, fine-tuned arbitration, LLM fallback) with scenario management UI, PostgreSQL storage and distributable API services |
| 21 | [lingmao233/dsh-plugin-attune-wechat-agent](https://github.com/lingmao233/dsh-plugin-attune-wechat-agent) | 2 | 2026-11-03 | 2026-11-03 | Attune — 微信 AI Agent / 微信 AI / WeChat agent / WeChat AI for DeepSeek Harness: emotional memory, moods, relationships, voice. Search wechatagent / wechatai / 微信agent / 微信ai. |
| 22 | [liumiaozhi/dsh-token-gauge](https://github.com/liumiaozhi/dsh-token-gauge) | 2 | 2026-09-03 | 2026-11-03 | Install this plugin in Deepseek Harness (DSH) to display token usage and metering through a variety of locomotive-style dashboard UIs. |
| 23 | [LJY-YL/dsh-workbuddy-connect](https://github.com/LJY-YL/dsh-workbuddy-connect) | 2 | 2026-10-28 | 2026-11-03 | dsh-workbuddy-connect 0.7.9 社区修复版：① 修复渠道拦截（http 400 / code 11128「请求被拦截」）；② 兼容全部 DSH 0.2.x 内核（rc.2 / rc.3 / rc.5 实测），开箱即用、免版本豁免。详见 README-PATCH.md。 |
| 24 | [Raven-Jackdaw/dsh-film-analysis](https://github.com/Raven-Jackdaw/dsh-film-analysis) | 2 | 2026-11-03 | 2026-11-03 | Film &amp; audiovisual-language analysis for DSH Web: frame metrics, 8-dim analysis, auto shot detection + AI shot breakdowns, annotation, report/shot-list export. ffmpeg and offline OCR bundled. UI zh/en; output Chinese. 影视画面分析器：一键拉片、8 维分析、自动分镜与标注，自带工具链。 |
| 25 | [suzuran0y/Cute-Partner](https://github.com/suzuran0y/Cute-Partner) | 2 | 2026-11-01 | 2026-11-03 | A Live2D desktop companion for conversation, memory, tasks, and optional voice, powered by DeepSeek Harness. |
| 26 | [SynSwarm/dsh-recorder-card](https://github.com/SynSwarm/dsh-recorder-card) | 2 | 2026-10-31 | 2026-11-03 | Bring BLE recorder-card audio into DeepSeek Harness: on-demand import, hash-verified local archive, optional SenseVoice transcription. |
| 27 | [tyvtjhj/system-resource-monitor](https://github.com/tyvtjhj/system-resource-monitor) | 2 | 2026-11-03 | 2026-11-03 | 该项目是一个电脑资源监测项目，目标是实现集合进入dsh，并且也可以正常使用桌面端功能，我只是做整合和适配，项目主体开发为协助者 |
| 28 | [Xiuxiu-6/harnessmm-dsh](https://github.com/Xiuxiu-6/harnessmm-dsh) | 2 | 2026-11-03 | 2026-11-03 | Guarded decision reuse for DeepSeek Harness: reuse already-decided tool actions to skip paid reasoning requests. Derived from HarnessMM (Apache-2.0). |
| 29 | [yixin2021/dsh-skills](https://github.com/yixin2021/dsh-skills) | 2 | 2026-11-02 | 2026-11-03 | Skills panel for the DeepSeek Harness left navigation: list, preview, enable/disable, install and safely uninstall Agent Skills. |
| 30 | [2524034412-boop/DSH](https://github.com/2524034412-boop/DSH) | 1 | 2026-11-02 | 2026-11-03 | DSH 启动时的整屏片头插件：星尘、名字、状态卡、接入确认。素材 / 配色 / 字体 / 位置全可调。 |
| 31 | [384615666/dsha-to-dshgo](https://github.com/384615666/dsha-to-dshgo) | 1 | 2026-11-01 | 2026-11-03 | Migrate DSHA one-click backup sessions into dsh-Go. 将 DSHA 一键备份的会话迁移到 dsh-Go 的插件。 |
| 32 | [AAAjzx111/dsh-theme-jing-chiyang](https://github.com/AAAjzx111/dsh-theme-jing-chiyang) | 1 | 2026-11-03 | 2026-11-03 | 王者荣耀「镜 · 炽阳神光」动态主题 —— DeepSeek Harness 主题插件 |
| 33 | [Accelerater-tech/dsh-latex](https://github.com/Accelerater-tech/dsh-latex) | 1 | 2026-10-30 | 2026-11-03 | Call LaTeX from DeepSeek Harness and render math as compiled formula blocks |
| 34 | [Aily-DSH/dsh-superagent-manager](https://github.com/Aily-DSH/dsh-superagent-manager) | 1 | 2026-11-02 | 2026-11-03 | 在同一个 DSH 客户端管理多个 dsh-superagent 项目：一键建仓、克隆、注册工作区、启动实例，并在标签页面板内代理运行。 |
| 35 | [archiecheung/dsh-plugmart](https://github.com/archiecheung/dsh-plugmart) | 1 | 2026-11-03 | 2026-11-03 | DSH 插件市场：左侧栏入口，支持搜索、按使用人数排序、标签筛选与安装命令一键复制。A left-sidebar plugin market for DSH: search, usage ranking, tag filters and one-click install commands. |
| 36 | [artuasova/dsh-balance-ru](https://github.com/artuasova/dsh-balance-ru) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness: балансы и расходы с пересчётом в рубли по курсу ЦБ РФ и русским интерфейсом. Форк @pipilu123566/dsh-balance (MIT). |
| 37 | [baixiaoyin666/dsh-long-memory](https://github.com/baixiaoyin666/dsh-long-memory) | 1 | 2026-09-28 | 2026-11-03 | Automatic long-term memory plugin for DeepSeek Harness · DeepSeek Harness 自动长期记忆插件 |
| 38 | [bingomu/dsh-followup](https://github.com/bingomu/dsh-followup) | 1 | 2026-11-03 | 2026-11-03 | A follow-through system for DSH: sidebar nudge, conversation-header control, ledger panel — every conversation gets an ending. 对话收尾系统：让每个对话都有始有终。 |
| 39 | [bingomu/dsh-sticky-wall](https://github.com/bingomu/dsh-sticky-wall) | 1 | 2026-11-03 | 2026-11-03 | Sticky-note wall for DeepSeek Harness: capture, categorize, archive, turn into to-dos, and let the agent read and write。    便签墙是给 DeepSeek Harness 做的侧边栏便签墙：九种纸色随手贴，分类筛选、今天/本周/更早、手动归档、待办清单和删除撤销都在一面墙上；agent 可以通过工具读写便签，数据只在本机 JSON，无账号、无网络请求。 |
| 40 | [BlinB209/deepchess](https://github.com/BlinB209/deepchess) | 1 | 2026-11-03 | 2026-11-03 | 深棋 DeepChess — 为 DSH 右侧栏打造的像素风国际象棋：DeepSeek 娘「小鲸」、五档 AI、18 种表情、事件对话与本地存档。 |
| 41 | [c137650/dsh-plugin-life](https://github.com/c137650/dsh-plugin-life) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin for agent to simulate a real life |
| 42 | [CC19990113/dsh-plugin-sessiongraph](https://github.com/CC19990113/dsh-plugin-sessiongraph) | 1 | 2026-11-03 | 2026-11-03 | Local conversation-history index for DeepSeek Harness — full-text search across every local session (Chinese two-character terms included), with a Rust kernel |
| 43 | [CEQ233/dsh-anime-bundle](https://github.com/CEQ233/dsh-anime-bundle) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 插件：一键开关整套二次元外观、更新插件、切换人格，非官方。 |
| 44 | [CN-001/agent-surface-scan](https://github.com/CN-001/agent-surface-scan) | 1 | 2026-11-03 | 2026-11-03 | Scan the AI-agent attack surface of a repository: prompt injection, remote exec, exfiltration, secrets, MCP configs. CI gate + SARIF, Claude/Codex hooks, DSH plugin. |
| 45 | [corvus-dsh/dsh-memory](https://github.com/corvus-dsh/dsh-memory) | 1 | 2026-11-03 | 2026-11-03 | DSH open-source ecosystem plugin (topic: dsh-plugin): capability memory for long sessions. Consumes the handoff ledger, extracts reusable skills (SKILL.md) and negative paths (negatives.jsonl) from finished sessions, and never imports the slicing plugin. — DSH open-source ecosystem (topic: dsh-plugin) |
| 46 | [DayMoon07/dsh-plugin-effort-panel](https://github.com/DayMoon07/dsh-plugin-effort-panel) | 1 | 2026-11-02 | 2026-11-03 | Codex-style single-panel model and effort picker for the DeepSeek Harness composer |
| 47 | [Dmatterdj/dsh-gui-search](https://github.com/Dmatterdj/dsh-gui-search) | 1 | 2026-11-02 | 2026-11-03 | 在 DSH 侧边栏搜索框里搜索会话正文，并直接跳转到命中的那条消息（支持中文与单字搜索） |
| 48 | [Dogtiti/dsh-input-history](https://github.com/Dogtiti/dsh-input-history) | 1 | 2026-10-22 | 2026-11-03 | Shell-style prompt history for the DeepSeek Harness composer: ArrowUp walks back through the messages you already sent, ArrowDown walks forward and restores your draft. |
| 49 | [Dogtiti/dsh-predict](https://github.com/Dogtiti/dsh-predict) | 1 | 2026-10-22 | 2026-11-03 | Codex-style next-instruction prediction for the DeepSeek Harness composer: a Tab-to-accept suggestion rendered as the input placeholder. |
| 50 | [Dogtiti/dsh-provider-icons](https://github.com/Dogtiti/dsh-provider-icons) | 1 | 2026-10-25 | 2026-11-03 | 在 DeepSeek Harness 的模型选择器里显示供应商品牌 logo（24 个厂商图标 + 前缀匹配 + 灰点兜底） |
| 51 | [duty25/dsh-aemeath-theme](https://github.com/duty25/dsh-aemeath-theme) | 1 | 2026-11-03 | 2026-11-03 | 鸣潮·爱弥斯 像素风全局主题 for DeepSeek Harness — pixel Aemeath companion, starry background, pixel buttons, resonance-pillar settings, Everbright Polestar slider. Unofficial fan work. |
| 52 | [EayonLee/dsh-tuitui-bot](https://github.com/EayonLee/dsh-tuitui-bot) | 1 | 2026-11-03 | 2026-11-03 | 奇虎 360 推推 IM 机器人 DeepSeek-Harness 插件 |
| 53 | [EternalNight996/dsh-super-agents](https://github.com/EternalNight996/dsh-super-agents) | 1 | 2026-11-02 | 2026-11-03 | DSH Super Agent: multi-agent collaboration and delivery pipeline for DeepSeek Harness. |
| 54 | [fexas/dsh-paper-desk](https://github.com/fexas/dsh-paper-desk) | 1 | 2026-11-03 | 2026-11-03 | A Zotero-style paper reading desk for DeepSeek Harness: PDF highlights, AI notes, co-reading chat and per-project mind maps. |
| 55 | [fractalsynapse/dsh-chapters](https://github.com/fractalsynapse/dsh-chapters) | 1 | 2026-09-15 | 2026-11-03 | Lossless conversation compaction for DeepSeek Harness: fork instead of rewrite, keep the cache, share the history. |
| 56 | [gengwg/dsh-agent-router](https://github.com/gengwg/dsh-agent-router) | 1 | 2026-11-03 | 2026-11-03 | Deterministic, inspectable delegation-time model routing for DeepSeek Harness (dsh) subagents |
| 57 | [ggghhh-11/dsh-peak-hour-reminder](https://github.com/ggghhh-11/dsh-peak-hour-reminder) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 插件：DeepSeek API 高峰时段逐回合提醒、跨峰暂停询问，以及节假日数据自动更新。MIT。 |
| 58 | [GoldenLoaf24h/dsh-exa](https://github.com/GoldenLoaf24h/dsh-exa) | 1 | 2026-11-03 | 2026-11-03 | Exa web search and fetch for DeepSeek Harness (dsh): replaces built-in web_search/web_fetch and exposes advanced retrieval capabilities. |
| 59 | [HeIIoAgain/dsh-notify-email](https://github.com/HeIIoAgain/dsh-notify-email) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness（DSH）邮件通知插件：任务结束、等待回答或授权时自动发邮件；支持 send_email 工具、附件与中文文件名，零运行时依赖。 |
| 60 | [Hope2023Dcr/dsh-gallery](https://github.com/Hope2023Dcr/dsh-gallery) | 1 | 2026-11-03 | 2026-11-03 | DSH 右侧栏产出画廊：跨会话资产管理/图片自动刷新 / 文件原生预览 / 产出根目录可配置，零依赖 |
| 61 | [jlnkx5200-beep/dsh-task-checkpoint-guard](https://github.com/jlnkx5200-beep/dsh-task-checkpoint-guard) | 1 | 2026-11-03 | 2026-11-03 | Durable task checkpoints and safe recovery for DeepSeek Harness agents. |
| 62 | [keyblues/dsh-icp](https://github.com/keyblues/dsh-icp) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (DSH) 插件：原生工信部 ICP 备案查询（网站 / APP / 小程序 / 快应用 + 四类违法违规黑名单）——Node 进程内直连官方接口并本地求解滑块验证码，无需 MCP 服务、外部服务或 API Key。Native MIIT ICP filing lookup for DSH. |
| 63 | [KHWLGH/dsh-lightweight-wallpaper](https://github.com/KHWLGH/dsh-lightweight-wallpaper) | 1 | 2026-11-03 | 2026-11-03 | Lightweight wallpaper plugin for DeepSeek Harness: Bing daily, Wikimedia art, Cleveland CC0 and local uploads. Zero runtime dependencies, no build step. |
| 64 | [Kris8888888/dsh-desktop-pet](https://github.com/Kris8888888/dsh-desktop-pet) | 1 | 2026-11-03 | 2026-11-03 | A whale or pixel-crab pet for DeepSeek Harness that reacts to your sessions. |
| 65 | [KtKID/dsh-workbuddy](https://github.com/KtKID/dsh-workbuddy) | 1 | 2026-11-03 | 2026-11-03 | WorkBuddy models, credits and tool calling for DeepSeek Harness · DSH WorkBuddy 接入插件 |
| 66 | [LeriusLei/dsh-whalepaper](https://github.com/LeriusLei/dsh-whalepaper) | 1 | 2026-11-03 | 2026-11-03 | Animated ASCII orca-ocean wallpaper for DeepSeek Harness: time-of-day ocean, native plugin settings, sidebar glass. |
| 67 | [light-cheng/DSH-Mem0](https://github.com/light-cheng/DSH-Mem0) | 1 | 2026-11-03 | 2026-11-03 | Mem0 long-term memory for DeepSeek Harness: Platform, self-hosted server or local OSS, automatic recall/capture, compact profile, token budgets, weekly hygiene and a visual settings page. |
| 68 | [lijiaqi-AI-Product-Manager/dsh-bug-gps](https://github.com/lijiaqi-AI-Product-Manager/dsh-bug-gps) | 1 | 2026-11-02 | 2026-11-03 | BugGPS：录制浏览器问题，固定预期，复核修复。Browser bug reproduction and fix verification for DeepSeek Harness. |
| 69 | [LiranHuang/dsh-roleplay-engine](https://github.com/LiranHuang/dsh-roleplay-engine) | 1 | 2026-11-03 | 2026-11-03 | Native SillyTavern-compatible character context compiler and prompt inspector for DeepSeek Harness. |
| 70 | [liuhuishang/dsh-five-session-evolution](https://github.com/liuhuishang/dsh-five-session-evolution) | 1 | 2026-11-03 | 2026-11-03 | 每五次项目会话结束自动复盘，积累可追溯经验与工作流候选。Evidence-backed project memory and workflow drafts for DeepSeek Harness. |
| 71 | [LiXiao1949/dsh-local-installer](https://github.com/LiXiao1949/dsh-local-installer) | 1 | 2026-11-03 | 2026-11-03 | DSH 本地插件安装器：从本机文件夹或 zip 压缩包直接安装 DSH 插件，纯本地运行不走网络，界面与插件市场同位置。作者 LiXiao1949 · GitHub https://github.com/LiXiao1949 · QQ 1640444672 |
| 72 | [LiXiao1949/dsh-permission-manager](https://github.com/LiXiao1949/dsh-permission-manager) | 1 | 2026-11-03 | 2026-11-03 | DSH 权限管理面板：侧边栏一键把全部对话的权限切成同一模式（仅可查看/工作区内修改/完全权限），并可锁定给之后打开或新建的对话。作者 LiXiao1949 · GitHub https://github.com/LiXiao1949 · QQ 1640444672 |
| 73 | [ltayshark0637/dsh-Shutdown-Guard](https://github.com/ltayshark0637/dsh-Shutdown-Guard) | 1 | 2026-11-02 | 2026-11-03 | 为Deepseek Harness中的侧边栏添加「所有任务完成后自动关机」卡片，拥有更好且多样的视觉效果、判定逻辑与个性化定制。位于「技能中心」下方、会话列表上方，随任务状态实时变化。 |
| 74 | [Me106y/dsh-job-ledger](https://github.com/Me106y/dsh-job-ledger) | 1 | 2026-11-03 | 2026-11-03 | Local-first job application ledger for DeepSeek Harness: dedupe, state machine, and reconciliation against BOSS Zhipin. Records what you applied to; you decide what goes out. |
| 75 | [meihaoyangfang/painted-screens](https://github.com/meihaoyangfang/painted-screens) | 1 | 2026-11-03 | 2026-11-03 | 15 switchable skins for the DSH Web UI — one plugin, fifteen themes, live switching. 给 DSH 用的 15 套皮肤：一个插件，即时换肤。 |
| 76 | [Meqjn-Ousapva/pyforai-dsh-plugin](https://github.com/Meqjn-Ousapva/pyforai-dsh-plugin) | 1 | 2026-11-03 | 2026-11-03 | 探索面向 AI 编程的语言：用注释锚点 + 工具把关，给 Python 补可校验、可寻址的结构。DSH 插件，兼容现有 Python。 |
| 77 | [msongw-design/dsh-plugin-projects](https://github.com/msongw-design/dsh-plugin-projects) | 1 | 2026-11-03 | 2026-11-03 | A DSH plugin: a shared project discussion where defects become issue cards an Agent reproduces and fixes |
| 78 | [MYSTERY2019/dsh-skills-symlink](https://github.com/MYSTERY2019/dsh-skills-symlink) | 1 | 2026-11-03 | 2026-11-03 | Project-scoped skill roots for DeepSeek Harness: the skill symlink you miss from Hermes, with multi-level category discovery |
| 79 | [MythGreenLand/dsh-local-delegate](https://github.com/MythGreenLand/dsh-local-delegate) | 1 | 2026-11-02 | 2026-11-03 | Delegate mechanical text work (translate/summarize/extract/classify) to a local cheap model endpoint, keeping large text out of the main model context. |
| 80 | [mzjqwq/dsh-sidebar-expand-all](https://github.com/mzjqwq/dsh-sidebar-expand-all) | 1 | 2026-11-03 | 2026-11-03 | One-click expand-all for the DSH sidebar session list, with strict collapse-to-5. |
| 81 | [Patrick126090380/dsh-plugin-global-persona](https://github.com/Patrick126090380/dsh-plugin-global-persona) | 1 | 2026-11-03 | 2026-11-03 | Inject one editable AI persona into every DeepSeek Harness conversation. |
| 82 | [pdong15dth/dsh-computer-use-windows](https://github.com/pdong15dth/dsh-computer-use-windows) | 1 | 2026-11-03 | 2026-11-03 | Real Windows desktop control for DeepSeek Harness: 12 computer_* tools (screen capture, mouse, keyboard, windows, clipboard, app launch) driven by a native Win32 helper (SendInput/GDI+/EnumWindows) - no UI Automation, no SendKeys. |
| 83 | [q8atnight/dsh-squeeze](https://github.com/q8atnight/dsh-squeeze) | 1 | 2026-11-03 | 2026-11-03 | squeeze tool for DeepSeek Harness: read long web pages, PDFs and files with a helper model and return only the answer |
| 84 | [QqiqiQ/dsh-profile-vault](https://github.com/QqiqiQ/dsh-profile-vault) | 1 | 2026-11-03 | 2026-11-03 | dsh个人信息插件，可以授权给ai提供用户的个人信息。 |
| 85 | [REALOIYO/dsh-qwenwork-connector](https://github.com/REALOIYO/dsh-qwenwork-connector) | 1 | 2026-11-03 | 2026-11-03 | QwenWork (千问办公) models for DeepSeek Harness: built-in device-code sign-in, direct upstream, no desktop client or gateway needed. |
| 86 | [rebornace/dsh-agent-enhancer](https://github.com/rebornace/dsh-agent-enhancer) | 1 | 2026-10-31 | 2026-11-03 | Leveling up DeepSeek Harness Desktop into a Cursor/Claude-class coding agent. 让 DSH 桌面端 Agent 体验持续逼近 Claude / ChatGPT / Cursor 。 |
| 87 | [river291/display-api-balance](https://github.com/river291/display-api-balance) | 1 | 2026-11-03 | 2026-11-03 | 一款用于显示API余额的DSH桌面版插件 |
| 88 | [SaiSenBox/dsh-web-bridge](https://github.com/SaiSenBox/dsh-web-bridge) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Web Bridge by SaiSenBox — browse and continue DeepSeek web conversations in DSH, or import them with attachments into a workspace. |
| 89 | [shorekeeper-blackshore/dsh-think-command](https://github.com/shorekeeper-blackshore/dsh-think-command) | 1 | 2026-10-20 | 2026-11-03 | DeepSeek Harness 插件：在聊天里用 /think 查看或切换当前会话的思考等级（Web 指令适配器 + QQ 机器人通道） |
| 90 | [sinvacn/dsh-file-pane](https://github.com/sinvacn/dsh-file-pane) | 1 | 2026-11-03 | 2026-11-03 | VS Code/Codex-style file pane for DeepSeek Harness (DSH): split the right sidebar into viewer + file tree, with preview/pin tabs, right-click terminal, and Copy to Chat. |
| 91 | [sleepy-zone/dsh-wechat-md](https://github.com/sleepy-zone/dsh-wechat-md) | 1 | 2026-10-28 | 2026-11-03 | DSH 插件：在右侧文件面板用 doocs/md 主题预览 Markdown，一键复制富文本到公众号。 |
| 92 | [smellingtiger/dsh-files-menu](https://github.com/smellingtiger/dsh-files-menu) | 1 | 2026-11-03 | 2026-11-03 | Right-click menu for the DSH workspace file tree: copy path, relative path, name and reveal in the file manager. |
| 93 | [starry-start/dshm-tool-indexquery](https://github.com/starry-start/dshm-tool-indexquery) | 1 | 2026-10-23 | 2026-11-03 | A plugin for managing textbook lookup to save tokens and increase speed. AI-generated, primarily for personal use. An AI built-in plugin suite for interpersonal management, customizable to your own environment. This repository was initially created for personal use. If this repository unfortunately infringes on others' rights, I will delete it imme |
| 94 | [tallahandsome-ux/dsh-fetch-search](https://github.com/tallahandsome-ux/dsh-fetch-search) | 1 | 2026-08-16 | 2026-11-03 | Safe third-party web fetch for DSH — delegates page crawling to user-configured services with no direct URL access (no SSRF), API keys in the managed credentials store, per-session budget, and an auto-managed local web scraping service stack. |
| 95 | [Timelk/dsh-ascii-sharks](https://github.com/Timelk/dsh-ascii-sharks) | 1 | 2026-11-03 | 2026-11-03 | Whole-page ASCII shark ocean for DeepSeek Harness — boid schools and hunting sharks behind a transparent, theme-aware frosted page layer. |
| 96 | [ufoyangyang/dsh-market-radar](https://github.com/ufoyangyang/dsh-market-radar) | 1 | 2026-11-03 | 2026-11-03 | DSH 情报雷达：巨潮公告 × A股大盘 × 资金与情绪，分析信息对上市公司股价的影响 |
| 97 | [VolumeDustRemember/Deepseek-Harness-2026](https://github.com/VolumeDustRemember/Deepseek-Harness-2026) | 1 | 2026-11-03 | 2026-11-03 | ⭐️ Deepseek Harness: an AI agent where every module can be replaced ⭐️ |
| 98 | [wang-yi-bit64/dsh-parallel-worktree](https://github.com/wang-yi-bit64/dsh-parallel-worktree) | 1 | 2026-11-03 | 2026-11-03 | Parallel Git worktree plugin for DeepSeek Harness (DSH): /worktree command, worktree_create/list/status tools, composer-dock panel, offline installer |
| 99 | [wangshouyong/dsh-roundtable](https://github.com/wangshouyong/dsh-roundtable) | 1 | 2026-11-02 | 2026-11-03 | 专家圆桌（dsh-roundtable）：DSH 多角色协作面板——群聊/私聊、发言权仲裁、事实与共识、工具授权 |
| 100 | [whyfail/dsh-connect-ai-toolkit](https://github.com/whyfail/dsh-connect-ai-toolkit) | 1 | 2026-11-03 | 2026-11-03 | DSH 插件：自动连接 AI-Toolkit 本地代理，对接 WorkBuddy、TRAE、Qoder 模型，自动发现并选择可用模型。 |
| 101 | [William20100221/dsh-beta-layout-folder-file](https://github.com/William20100221/dsh-beta-layout-folder-file) | 1 | 2026-11-02 | 2026-11-03 | Claude-style folders, fork trees and drag-and-drop for the DeepSeek Harness sidebar, plus ZIP export and AI chat titles |
| 102 | [wzc520pyfm/session-rail](https://github.com/wzc520pyfm/session-rail) | 1 | 2026-11-01 | 2026-11-03 | Session-scoped environment, context, plugins and read-only Git changes in the DSH right sidebar. |
| 103 | [XIZRSAMS/dsh-rescue](https://github.com/XIZRSAMS/dsh-rescue) | 1 | 2026-11-03 | 2026-11-03 | Rescue distribution for DeepSeek Harness - 任何时候的介入急救 |
| 104 | [xuluoluo/dsh-quota](https://github.com/xuluoluo/dsh-quota) | 1 | 2026-10-20 | 2026-11-03 | dsh插件 |
| 105 | [XuYuanDaWang/dsh-session-multiselect](https://github.com/XuYuanDaWang/dsh-session-multiselect) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 会话批量选择：按住 Shift 从第一条点到最末条批量选中会话，并批量归档（DSH skill + 客户端插件） |
| 106 | [yangdinghui/dsh-sidebar-groups](https://github.com/yangdinghui/dsh-sidebar-groups) | 1 | 2026-11-03 | 2026-11-03 | Groups the DSH sidebar panel rows: two stay pinned, the rest fold under a collapsible Tools row, drag to move rows between the two groups. |
| 107 | [yiy367389-del/dsh-pet-bedroom](https://github.com/yiy367389-del/dsh-pet-bedroom) | 1 | 2026-11-03 | 2026-11-03 | 桌宠卧室：给 dsh-pet 的桌宠盖一间可独立打开的网页卧室（QQ/抖音需自行接入） |
| 108 | [yuanyu5018/dsh-job-hunting-plugin](https://github.com/yuanyu5018/dsh-job-hunting-plugin) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 求职自动化插件：Boss直聘/猎聘自动投递、画像驱动的 HR 消息回复、值守定时巡检。Job hunting automation plugin for DeepSeek Harness. |
| 109 | [yuexizhishang/dsh-ui-probe](https://github.com/yuexizhishang/dsh-ui-probe) | 1 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 图形界面插件测试工具：在真实界面里自动测试插件页面，读样式、点按钮、填表单、等异步结果、抓控制台报错，测完自动回到原对话。 |
| 110 | [YumoFinn/dsh-compact-tuner](https://github.com/YumoFinn/dsh-compact-tuner) | 1 | 2026-11-03 | 2026-11-03 | Tune the DeepSeek Harness compaction trigger ratio and retained tail per conversation, from the composer. |
| 111 | [YumoFinn/dsh-pet-opencode-go-balance](https://github.com/YumoFinn/dsh-pet-opencode-go-balance) | 1 | 2026-11-03 | 2026-11-03 | 把 OpenCode Go 的 5h/周/月三窗口用量接进 dsh-pet 的余额气泡（DSH 插件） |
| 112 | [ziz12138/dsh-lawcorpus](https://github.com/ziz12138/dsh-lawcorpus) | 1 | 2026-11-02 | 2026-11-03 | dsh-lawcorpus 是 DeepSeek Harness 插件，内置 2024–2026 年《中国法学》《比较法研究》《法学研究》《中外法学》四本 CLSCI 期刊共 850 篇真实论文的题名、作者、摘要、关键词与目录骨架。它不做全文检索，而是把论文「框架」结构化存成 JSONL，供选题、搭框架、仿写、投稿对标时检索真实语料。提供五个工具：status 查覆盖、profile 刊画像、frame 框架卡、match 投稿对标、export 导出。纯本地离线、零依赖、不回传服务器。 |
| 113 | [zsy334/dsh-doc-convert](https://github.com/zsy334/dsh-doc-convert) | 1 | 2026-11-03 | 2026-11-03 | 在DeepSeek harness工作区面板或 convert_document 工具中转换 Word、PDF、Markdown、HTML、TXT、Excel/CSV 与 PowerPoint 文件。 |
| 114 | [zydxn77/dsh-plugin-tiles](https://github.com/zydxn77/dsh-plugin-tiles) | 1 | 2026-11-03 | 2026-11-03 | 插件显示在会话标题旁：装过的插件，左键开关、右键改名，尺寸可调。 |
| 115 | [007350/dsh-screenshot-board](https://github.com/007350/dsh-screenshot-board) | 0 | 2026-11-03 | 2026-11-03 | Screenshot annotation board for DeepSeek Harness: mark regions, write tasks, hand off to an agent. |
| 116 | [0xDaj/dsh-amdkey](https://github.com/0xDaj/dsh-amdkey) | 0 | 2026-11-03 | 2026-11-03 | AMD Radeon Cloud multi-key rotation plugin for DeepSeek Harness |
| 117 | [1052088090/dsh-workspace-cleaner](https://github.com/1052088090/dsh-workspace-cleaner) | 0 | 2026-11-03 | 2026-11-03 | Workspace &amp; session cleanup for DeepSeek Harness: a settings page listing every workspace with its session count, plus a sidebar session menu row that really deletes a session log (into a recoverable trash). |
| 118 | [123456robust/dsh-history-purge](https://github.com/123456robust/dsh-history-purge) | 0 | 2026-11-03 | 2026-11-03 | 删除 / 回收 DSH 历史对话（会话）的插件：设置页批量管理、侧栏单条删除、回收站可还原，附离线 CLI。 |
| 119 | [123zxs345/dsh-plugin-companion-memory](https://github.com/123zxs345/dsh-plugin-companion-memory) | 0 | 2026-11-03 | 2026-11-03 | DSH 情感陪伴选择性记忆：主动用户画像、三层渐进披露、会话缓存与总结复用 \| Selective companion memory for DeepSeek Harness |
| 120 | [2239058652/dsh-meoo-connect](https://github.com/2239058652/dsh-meoo-connect) | 0 | 2026-11-03 | 2026-11-03 | 把秒悟 Meoo 的模型接进 dsh：自动登录取项目服务 AK、同步模型目录，模型直接出现在会话模型选择器与「设置 → 模型」里 |
| 121 | [2869949486/dsh-opencode-routing](https://github.com/2869949486/dsh-opencode-routing) | 0 | 2026-11-03 | 2026-11-03 | dsh plugin: OpenCode account pool with automatic failover, quota routing and a per-model usage dashboard in one Settings page (merged from dsh-opencode-quota-router + dsh-opencode-usage-settings) |
| 122 | [4wgtty4zm7-a11y/dsh-session-recycle-tools](https://github.com/4wgtty4zm7-a11y/dsh-session-recycle-tools) | 0 | 2026-11-03 | 2026-11-03 | Session recycle bin + batch picker for the DeepSeek Harness web sidebar: two entries above the settings row, independent of the host archive. |
| 123 | [58fly/dsh-stack](https://github.com/58fly/dsh-stack) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Stack 模式 agent 预设（DSH bundle）：29 个 ds-* 循环技能 + 常驻人格 + 轮次收尾守卫 |
| 124 | [774015352-sys/dsh-watchlist](https://github.com/774015352-sys/dsh-watchlist) | 0 | 2026-11-03 | 2026-11-03 | 在侧边栏对话列表上方增加关注区：状态圆点、新回复置顶、运行中的置底，模型选择器旁还有关注按钮。 Follow list above the sidebar conversation list for DeepSeek Harness. |
| 125 | [7gzgn/dsh-affect](https://github.com/7gzgn/dsh-affect) | 0 | 2026-11-03 | 2026-11-03 | Give your agent an external emotion state machine: several axes (0-100) that drift over time and move when you speak to it. Each turn the plugin injects which band you are in plus which tags you may use. The numbers belong to the plugin — the model cannot read, recompute or argue with them, it only speaks from inside them. |
| 126 | [7gzgn/dsh-emotion](https://github.com/7gzgn/dsh-emotion) | 0 | 2026-11-03 | 2026-11-03 | test |
| 127 | [836157055/dsh-teleagent-pool](https://github.com/836157055/dsh-teleagent-pool) | 0 | 2026-11-03 | 2026-11-03 | Two AI account pools for DeepSeek Harness: TeleAgent (China Telecom TeleAI) with daily auto check-in, and AutoClaw (Zhipu desktop) with local-credential discovery and quota-aware failover. |
| 128 | [a285292107s/dsh-request-header-fix](https://github.com/a285292107s/dsh-request-header-fix) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: append x-opencode-session to model requests of selected providers/models |
| 129 | [AaronOhO/dsh-plugin-wenkai-font](https://github.com/AaronOhO/dsh-plugin-wenkai-font) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: switch the Web GUI text font to LXGW WenKai (霞鹜文楷), with the typeface bundled for offline use. |
| 130 | [abworks-dev/dsh-hooks](https://github.com/abworks-dev/dsh-hooks) | 0 | 2026-11-03 | 2026-11-03 | DSH 通用钩子插件：按会话事件管理本地自动化命令，支持显式启停、工具前置拦截与有限执行记录，无需硬件。 |
| 131 | [ahao430/dsh-workhub](https://github.com/ahao430/dsh-workhub) | 0 | 2026-11-03 | 2026-11-03 | 钉钉·云效工作台 |
| 132 | [ailawu0409/dsh-session-archive](https://github.com/ailawu0409/dsh-session-archive) | 0 | 2026-11-03 | 2026-11-03 | Session archive management plugin for DeepSeek Harness |
| 133 | [Aily-DSH/dsh-approval-inbox](https://github.com/Aily-DSH/dsh-approval-inbox) | 0 | 2026-11-03 | 2026-11-03 | Approval inbox for DeepSeek Harness: blocking approvals become a background queue so the agent keeps working, with project sections, row badges, importable rules and peak-hour holding |
| 134 | [Aily-DSH/dsh-peak-guard](https://github.com/Aily-DSH/dsh-peak-guard) | 0 | 2026-11-02 | 2026-11-03 | Pause and resume DeepSeek Harness sessions around DeepSeek peak-priced hours (holiday &amp; make-up-workday aware) |
| 135 | [Aily-DSH/dsh-plugin-index](https://github.com/Aily-DSH/dsh-plugin-index) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin-market index (format 1) for Aily-DSH plugins |
| 136 | [Aily-DSH/dsh-session-usage](https://github.com/Aily-DSH/dsh-session-usage) | 0 | 2026-11-02 | 2026-11-03 | Per-conversation token usage and estimated cost for DeepSeek Harness |
| 137 | [Aily-DSH/dsh-sidebar-tab-close](https://github.com/Aily-DSH/dsh-sidebar-tab-close) | 0 | 2026-11-02 | 2026-11-03 | Ctrl+W closes the active dsh sidebar tab first; double-clicking a sidebar tab closes it |
| 138 | [Aily-DSH/dsh-test-window](https://github.com/Aily-DSH/dsh-test-window) | 0 | 2026-11-02 | 2026-11-03 | Open Agent-launched test windows on the monitor you pick in dsh Settings (Windows) |
| 139 | [aishenkiki/dsh-go-exam-helper](https://github.com/aishenkiki/dsh-go-exam-helper) | 0 | 2026-11-03 | 2026-11-03 | DSH Go 答题助手：盯住考试页面，把答案弹成顶部通知。题库可选，非 DSH Go 宿主安装后无动作。 |
| 140 | [akamuyyds/dsh-hindsight-panel](https://github.com/akamuyyds/dsh-hindsight-panel) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness sidebar panel for Hindsight: switch the memory plugin's LLM provider/model and browse what it remembers. One-step install from the release tarball. |
| 141 | [AlexLin0803/dsh-usage-panel](https://github.com/AlexLin0803/dsh-usage-panel) | 0 | 2026-11-03 | 2026-11-03 | Token usage panel for DeepSeek Harness: settings-page KPIs, activity heatmap, per-model charts. |
| 142 | [alfonsoferrertorres-cyber/saare-suite](https://github.com/alfonsoferrertorres-cyber/saare-suite) | 0 | 2026-08-03 | 2026-11-03 | Enterprise L7 AI Governance, Ex-Ante PII Redaction (&lt;1.16ms RAM), and Cryptographic Forensic Evidence Vault for LLM Ecosystems &amp; DeepSeek Harness (ISO 42001 / DORA / EU AI Act). |
| 143 | [Aliang-code/dsh-fusion-lean](https://github.com/Aliang-code/dsh-fusion-lean) | 0 | 2026-11-03 | 2026-11-03 | Fusion 360 for DSH: the MCP tools with their exact schemas, an editable endpoint, and the hf modelling loop — one bundle, two rows. |
| 144 | [Altha-dt/dsh-doc-focus](https://github.com/Altha-dt/dsh-doc-focus) | 0 | 2026-11-03 | 2026-11-03 | 在 DSH 原生右侧栏全屏查看文档或浏览器的同时，以悬浮卡片保留主会话，收起时缩到右下角挂件 |
| 145 | [Anime2Real/Chobits-Chii-DSH](https://github.com/Anime2Real/Chobits-Chii-DSH) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (DSH) Web UI 小叽皮肤插件：中性暖调配色 + 拍立得照片墙 (dsh-plugin) |
| 146 | [anjiecobamboo-blip/ai-project-delivery](https://github.com/anjiecobamboo-blip/ai-project-delivery) | 0 | 2026-11-03 | 2026-11-03 | AI 项目交付方法论：跨 harness 的 Agent Skill，含非技术用户模式（DeepSeek Harness / Claude Code / Codex） |
| 147 | [apollodsh/dsh-session-forward](https://github.com/apollodsh/dsh-session-forward) | 0 | 2026-11-03 | 2026-11-03 | 把 DSH 会话转发给别人：复制分享链接 / 零安装网页记录 / 可续聊的会话文件。Share DeepSeek Harness conversations without the recipient installing anything. |
| 148 | [Arc-huangjingtong/dsh-restart](https://github.com/Arc-huangjingtong/dsh-restart) | 0 | 2026-11-03 | 2026-11-03 | One-click restart plugin for DeepSeek Harness desktop |
| 149 | [Arvin-work/dsh-plugin-file-annotate](https://github.com/Arvin-work/dsh-plugin-file-annotate) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 右侧栏可批注文件编辑器：懒加载文件树、行内批注、跨文件批注导航、Markdown 预览，批注可加入对话草稿。 |
| 150 | [Asaiuta/dsh-better-model-selector](https://github.com/Asaiuta/dsh-better-model-selector) | 0 | 2026-11-03 | 2026-11-03 | Per-model reasoning efforts and a context-length switcher for the DSH model selector, aligned with the built-in official pi-ai catalog. No endpoint probing, no network requests. |
| 151 | [Asaiuta/dsh-forge](https://github.com/Asaiuta/dsh-forge) | 0 | 2026-10-26 | 2026-11-03 | High-performance retrieval and construction governance for DeepSeek Harness: fff-backed search, tree-sitter symbols, and a tolerant edit engine with snapshots and rollback. |
| 152 | [Asaiuta/dsh-genui-enhanced](https://github.com/Asaiuta/dsh-genui-enhanced) | 0 | 2026-10-25 | 2026-11-03 | Local fork of @changfenhuang/dsh-genui 0.14.0 for DeepSeek Harness — pele diagram engine (-70% asset, live theming), chart area kind, native date/number inputs, table auto-pagination |
| 153 | [Asterlyra/dsh-panel-organizer](https://github.com/Asterlyra/dsh-panel-organizer) | 0 | 2026-11-03 | 2026-11-03 | Hide unused panels from the DeepSeek Harness left sidebar, grouped by origin; the More button expands them all. |
| 154 | [atticuswx/dsh-pomodoro](https://github.com/atticuswx/dsh-pomodoro) | 0 | 2026-11-03 | 2026-11-03 | A Pomodoro timer for the DeepSeek Harness Web GUI: a draggable floating window that stays visible without an open session, plus an optional dock pill. |
| 155 | [awol2005ex3/dsh-zookeeper](https://github.com/awol2005ex3/dsh-zookeeper) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (dsh) 插件：访问 Apache ZooKeeper——把 JavaFX 桌面客户端 \[PrettyZoo\](https://github.com/PrettyZoo/PrettyZoo) 的核心能力搬进 dsh： 浏览器内节点树浏览 / 数据编辑、四字命令（4lw）终端、zkCli 风格 shell，以及 \`zookeeper_*\` agent 工具。 |
| 156 | [ayuanxx-max/dsh-smooth](https://github.com/ayuanxx-max/dsh-smooth) | 0 | 2026-11-03 | 2026-11-03 | DSH SMOOTH (DSH ???) - ????????????????:UI ?? / ???? / ???? / ???????????? bundle + skill,???? |
| 157 | [b9p79rgh6f-sudo/dsh-balance-widget](https://github.com/b9p79rgh6f-sudo/dsh-balance-widget) | 0 | 2026-11-03 | 2026-11-03 | Sidebar-footer balance and usage widget for DeepSeek Harness: account balance, today's tokens and estimated spend, a per-conversation breakdown, and the current peak/idle pricing window. |
| 158 | [b9p79rgh6f-sudo/dsh-temp-snapshot-cleaner](https://github.com/b9p79rgh6f-sudo/dsh-temp-snapshot-cleaner) | 0 | 2026-11-03 | 2026-11-03 | Clean orphaned DSH workspace snapshots from the system temp folder. Scans dsh-workspace-changes-* directories, applies five safety checks, writes a deletion manifest, and requires a dry run plus explicit confirmation before deleting anything. |
| 159 | [baigaobai/dsh-paper-harness](https://github.com/baigaobai/dsh-paper-harness) | 0 | 2026-11-03 | 2026-11-03 | Paper Harness（文献台） 是给 DeepSeek Harness 用的文献阅读工作台。把 PDF 丢进一个文件夹，它自动建索引、抽出每张图并连图注一起裁好；打开后左边是 AI 助手、中间是原文、右边是译文，原文上任何一句都能直接拖选去提问或翻译，整篇还能按页区间流式翻译、边译边存。读过的文献按分类、状态、评分、标签归档，库内全文检索与在线检索（arXiv、Semantic Scholar、Crossref）都在同一个界面里，也让 AI 能直接基于你自己的文献库干活。 |
| 160 | [bemarkt/dsh-fakeip-compat](https://github.com/bemarkt/dsh-fakeip-compat) | 0 | 2026-11-03 | 2026-11-03 | FakeIP compatibility provider for DeepSeek Harness web_fetch — accepts FakeIP-range DNS answers, optional DoH verification, settings row included. |
| 161 | [BenedictTom/dsh-thinking-intensity](https://github.com/BenedictTom/dsh-thinking-intensity) | 0 | 2026-11-03 | 2026-11-03 | A dot-matrix pill above the DSH composer that reads and writes the session real reasoning effort, with a particle field that stretches into scan lines as the effort climbs. |
| 162 | [bingshang04/history-axis](https://github.com/bingshang04/history-axis) | 0 | 2026-11-03 | 2026-11-03 | 史纲 · 毛中特 时间轴 — 近现代史纲要 × 毛中特 交互式考点可视化（地图 / 时间轴 / 理论图谱） |
| 163 | [Biu-Bong/dsh-menu-hidden](https://github.com/Biu-Bong/dsh-menu-hidden) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：收起重复的 DeepSeek 账号 / 官方 API 入口、设置里的登录状态与账号菜单的意见反馈，并给应用菜单补上刷新与重启 |
| 164 | [BlueOcean3214/dsh-handoff-session](https://github.com/BlueOcean3214/dsh-handoff-session) | 0 | 2026-11-03 | 2026-11-03 | Durable session handoff for DeepSeek Harness: pressure-aware handoff docs, a searchable transcript, and automatic continuation in a fresh Session. |
| 165 | [bmhty123/dsh-comfyui-rp](https://github.com/bmhty123/dsh-comfyui-rp) | 0 | 2026-11-02 | 2026-11-03 | ComfyUI×DSH生图插件 |
| 166 | [Boris-boomer/dsh-project-cockpit](https://github.com/Boris-boomer/dsh-project-cockpit) | 0 | 2026-10-21 | 2026-11-03 | Desktop-style project workbench UI bundle that replaces the default DSH layout with a three-pane workspace. |
| 167 | [Boris-boomer/dsh-shepherd](https://github.com/Boris-boomer/dsh-shepherd) | 0 | 2026-10-21 | 2026-11-03 | Orchestration and management plugin for DSH agent workflows. |
| 168 | [bowenphys/dsh-vasp-periodic-table](https://github.com/bowenphys/dsh-vasp-periodic-table) | 0 | 2026-11-03 | 2026-11-03 | VASP periodic table for DeepSeek Harness: PAW potentials, ZVAL/ENMAX, MAGMOM, POTCAR snippets |
| 169 | [Breeze-04/dsh-search-order](https://github.com/Breeze-04/dsh-search-order) | 0 | 2026-10-30 | 2026-11-03 | 把DSH 的 web_search 搜索来源进行可视化的插件。可以通过插件直观的配置API_KEY和自由排序，按序尝试 DeepSeek 官方搜索、Messages、Exa、Tavily、Perplexity、Brave，失败自动切换。 |
| 170 | [BruceZhang1993/dsh-model-pool](https://github.com/BruceZhang1993/dsh-model-pool) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: one model pool over every provider. Pick a pooled model once; a configurable strategy (priority, round-robin, weighted, least-used, fastest, cheapest) routes each call, with health-aware failover, thinking-depth and image mapping, sticky sessions, and a peak/idle policy from the fetched Chinese statutory holiday calendar. |
| 171 | [buaaflyaway/dsh-progress-nudge](https://github.com/buaaflyaway/dsh-progress-nudge) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: counts silent tool-only rounds and injects a progress reminder into the next model request, with a Settings page for threshold, wording, language and Agent Teams scope. |
| 172 | [buger-gif/cyber-im-avatar](https://github.com/buger-gif/cyber-im-avatar) | 0 | 2026-11-02 | 2026-11-03 | IM stand-in skill + DSH plugin: local-first inbox, live DSH turns, profiles, no listening ports. |
| 173 | [CarbonZhao-02692/dsh-offpeak-send](https://github.com/CarbonZhao-02692/dsh-offpeak-send) | 0 | 2026-11-03 | 2026-11-03 | DSH 谷时发送：高峰时段按发送自动排队，到 DeepSeek 谷时（半价）开始后投递 / off-peak send queue for DeepSeek Harness |
| 174 | [CCColastic/dsh-session-sources](https://github.com/CCColastic/dsh-session-sources) | 0 | 2026-11-03 | 2026-11-03 | Recover images, files, and links from the current DeepSeek Harness conversation. |
| 175 | [chanhaoxian5-ship-it/dsh-nature-skills](https://github.com/chanhaoxian5-ship-it/dsh-nature-skills) | 0 | 2026-11-03 | 2026-11-03 | Nature Skills for DeepSeek Harness, with metadata-only upstream update checks. |
| 176 | [chanhaoxian5-ship-it/dsh-zotero](https://github.com/chanhaoxian5-ship-it/dsh-zotero) | 0 | 2026-11-03 | 2026-11-03 | Zotero Desktop integration for DeepSeek Harness: search, read indexed full text, import and export references. |
| 177 | [chaoguang668/dsh-continual-evolve-handoff](https://github.com/chaoguang668/dsh-continual-evolve-handoff) | 0 | 2026-11-03 | 2026-11-03 | Fork of ZK-Andy/dsh-continual-evolve: adds evolve_read action=handoff - the four-question handoff view (who / progress / next / blocked) as a projection over the memory store. |
| 178 | [chaoguang668/dsh-jev-screen](https://github.com/chaoguang668/dsh-jev-screen) | 0 | 2026-11-03 | 2026-11-03 | Jev-powered semantic pre-screening for local files in DeepSeek Harness: code walks the directory, Jev scores every file, the agent reads only the shortlist. |
| 179 | [chaquchi/dsh-branch-discussion](https://github.com/chaquchi/dsh-branch-discussion) | 0 | 2026-11-03 | 2026-11-03 | Soft-branch a self-contained sub-question into a child DSH session and bring back only a bounded digest, keeping the main context clean. |
| 180 | [chaquchi/dsh-inspirations](https://github.com/chaquchi/dsh-inspirations) | 0 | 2026-11-03 | 2026-11-03 | A sticky-note wall in the DSH left sidebar: 4:3 pastel notes joined by horizontal twine, pin/search/group, and single- or multi-note AI discussion. |
| 181 | [charonX/dsh-skills-manager](https://github.com/charonX/dsh-skills-manager) | 0 | 2026-11-02 | 2026-11-03 | Skill library manager for DeepSeek Harness: install, update, import, and symlink skills into projects. |
| 182 | [chengyingshe/dsh-client-app](https://github.com/chengyingshe/dsh-client-app) | 0 | 2026-09-12 | 2026-11-03 | Authenticated DeepSeek Harness Web client with Tauri 2, dsh-auth, and optional Cloudflare Tunnel plugins. |
| 183 | [cion771/dsh-status](https://github.com/cion771/dsh-status) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek API 服务状态胶囊：在 DeepSeek Harness 标题栏右上角显示 status.deepseek.com 的实时状态，灯色随受损服务比例从绿到橙再到红。 |
| 184 | [CQQ-ING/dsh-usage-cost](https://github.com/CQQ-ING/dsh-usage-cost) | 0 | 2026-11-03 | 2026-11-03 | 在 DSH 的用量弹层里补一行「费用」：按每条消息发生时刻的峰谷价逐条计价，并推给桌面宠物显示本轮花费。 |
| 185 | [CXK991/dsh-quick-restart](https://github.com/CXK991/dsh-quick-restart) | 0 | 2026-11-03 | 2026-11-03 | 侧边栏一键重启 DSH：点一下、确认一次，DSH 自动关闭并重新启动。One-click restart for DeepSeek Harness. |
| 186 | [czdtech/dsh-human-readable](https://github.com/czdtech/dsh-human-readable) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 插件：把输入框里那句只有你懂的话，结合对话上下文改写成任何人都听得懂的版本。 |
| 187 | [daedalforge/dsh-monitor](https://github.com/daedalforge/dsh-monitor) | 0 | 2026-11-02 | 2026-11-03 | A System panel for DeepSeek Harness: machine, runtime, working repositories and Kubernetes cluster health. |
| 188 | [DaVinci-2nd/dsh-context-saver](https://github.com/DaVinci-2nd/dsh-context-saver) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: trims thinking content, repeated reads, terminal inputs, and middle turns from the model request, while the local session log stays complete. |
| 189 | [deepseekv41flash/dsh-speed-meter](https://github.com/deepseekv41flash/dsh-speed-meter) | 0 | 2026-11-03 | 2026-11-03 | DSH (DeepSeek Harness) real-time output speed meter: a tok/s pill in the composer dock, self-calibrating per-call exact rates, scoped to the current session |
| 190 | [Dekurri/dsh-usage-monitor](https://github.com/Dekurri/dsh-usage-monitor) | 0 | 2026-11-03 | 2026-11-03 | DSH 左侧栏 AI 使用量仪表盘：token 用量、成本估算、缓存命中率、分会话/分模型统计、实时 CPU/GPU/内存监控与平台账单对账 · dsh-plugin |
| 191 | [DEVbyQIN/dsh-back-to-chat](https://github.com/DEVbyQIN/dsh-back-to-chat) | 0 | 2026-11-03 | 2026-11-03 | Return from Plugins, Schedules and Context Insights to the current chat |
| 192 | [DEVbyQIN/dsh-session-expand](https://github.com/DEVbyQIN/dsh-session-expand) | 0 | 2026-11-03 | 2026-11-03 | DSH session bundle: session tabs, quote-to-chat and session Markdown export, installed once with every component switchable on the Plugins page. |
| 193 | [DEVbyQIN/dsh-sidebar-expand](https://github.com/DEVbyQIN/dsh-sidebar-expand) | 0 | 2026-11-03 | 2026-11-03 | DSH sidebar bundle: conversation marks, active-session bell, sidebar shortcuts and back-to-chat, installed once with every component switchable on the Plugins page. |
| 194 | [dgjin/dsh-llm-token-usage](https://github.com/dgjin/dsh-llm-token-usage) | 0 | 2026-11-03 | 2026-11-03 | Token usage and cost analytics for DeepSeek Harness: native dashboard panel, daily token/cost charts, model and workspace rankings, sortable table with CSV export, account balance, session cost, auto-updated pricing. |
| 195 | [dingcang/dsh-tailnet-ingress](https://github.com/dingcang/dsh-tailnet-ingress) | 0 | 2026-11-03 | 2026-11-03 | Serves the loopback DSH Web UI on the machine's own private, CGNAT and tunnel IPv4 addresses, following the listener's port. |
| 196 | [DNZJSJ/dsh-odestudyplug](https://github.com/DNZJSJ/dsh-odestudyplug) | 0 | 2026-11-03 | 2026-11-03 | Type an ODE system in a DeepSeek Harness sidebar panel and watch its phase portrait or a rotatable 3D trajectory, side by side with the chat. The model can read and drive the panel through three agent tools. |
| 197 | [Dogtiti/dsh-quota-meter](https://github.com/Dogtiti/dsh-quota-meter) | 0 | 2026-10-23 | 2026-11-03 | Provider usage panel for DeepSeek Harness: shows the remaining share of each quota window (GLM Coding Plan today) as a chip beside the model selector, with a detail popover. |
| 198 | [dogxxgod/dsh-agent-desktop](https://github.com/dogxxgod/dsh-agent-desktop) | 0 | 2026-11-03 | 2026-11-03 | deepseek harness 的computer-use 插件 |
| 199 | [dolacmeo/dsh-restart-and-update](https://github.com/dolacmeo/dsh-restart-and-update) | 0 | 2026-11-03 | 2026-11-03 | Restart DeepSeek Harness and update its plugins from the sidebar: a relaunch that survives the Windows console trap, version-aware plugin updates, and a market entry point. |
| 200 | [donhac/dsh-magpie-discovery](https://github.com/donhac/dsh-magpie-discovery) | 0 | 2026-11-03 | 2026-11-03 | On-demand Magpie MCP tool discovery for DeepSeek Harness. One lookup defers 150+ tool schemas, reveals original tools per session, and keeps native execution, approvals, images and structured results. Not a second MCP client or proxy. |
| 201 | [Dwb159869/dafeiyu-plugins](https://github.com/Dwb159869/dafeiyu-plugins) | 0 | 2026-11-03 | 2026-11-03 | 大肥鱼 QQ 陪伴机器人用的 DSH 插件源码：自研 5 个 + 基于上游改造 5 个（分类目录，AGPL/MIT 沿用上游） |
| 202 | [DX12xyz/dsh-escape-pod](https://github.com/DX12xyz/dsh-escape-pod) | 0 | 2026-11-03 | 2026-11-03 | 逃生舱：让命令活在 DeepSeek Harness 之外——DSH 重启 / 崩溃后命令与输出继续运行（pod_run / pod_exec / pod_output / pod_kill / pod_freeze / pod_status / pod_shell）。MIT。 |
| 203 | [DX12xyz/dsh-power](https://github.com/DX12xyz/dsh-power) | 0 | 2026-11-03 | 2026-11-03 | DSH 电源：在侧边栏一键重启 / 关闭 DeepSeek Harness，三档模式（等待 / 中断 / 强制）+ 五个 AI 工具 + 检查点与恢复报告。MIT。 |
| 204 | [DX12xyz/dsh-user-attention-and-todo-inbox](https://github.com/DX12xyz/dsh-user-attention-and-todo-inbox) | 0 | 2026-11-03 | 2026-11-03 | 用户注意力与待办收件箱：把「用户是否在界面旁」变成可门控状态，把被最终拒绝的人类交互收进可复核的待办收件箱（todo_list / todo_get / todo_execute）。MIT。 |
| 205 | [Echo-Smith/hy-memory4dsh](https://github.com/Echo-Smith/hy-memory4dsh) | 0 | 2026-11-03 | 2026-11-03 | 为 DSH 装上三层长期记忆：会话、项目、个人。 |
| 206 | [Eclipse-NotFound/dsh-usage-replay](https://github.com/Eclipse-NotFound/dsh-usage-replay) | 0 | 2026-11-03 | 2026-11-03 | Cross-session per-model token usage for DeepSeek Harness: replays every persisted session log and aggregates provider-reported usage by model, day and workspace. Tokens only. |
| 207 | [elims777/dsh_languages](https://github.com/elims777/dsh_languages) | 0 | 2026-11-03 | 2026-11-03 | Community translations (14 languages) for the DeepSeek Harness web UI |
| 208 | [equalang/equalang-dsh-plugin](https://github.com/equalang/equalang-dsh-plugin) | 0 | 2026-11-03 | 2026-11-03 | Equalang for DeepSeek Harness (dsh): translate documents, slides, spreadsheets, e-books, subtitles, pictures, audio and video with their layout kept, and transcribe recordings. |
| 209 | [fengshenx/dsh-leader-kit](https://github.com/fengshenx/dsh-leader-kit) | 0 | 2026-10-23 | 2026-11-03 | DSH leader/worker orchestration bundle: project tree, delivery board, worker sessions |
| 210 | [fengxiforcy/dsh-geo-toolkit](https://github.com/fengxiforcy/dsh-geo-toolkit) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: GIS/CAD analysis toolkit — read DXF, convert DWG to DXF, styled analysis maps, GIS summary/buffer/overlay (11 tools). |
| 211 | [fevolq/terms-bridge](https://github.com/fevolq/terms-bridge) | 0 | 2026-11-03 | 2026-11-03 | DSH插件。桥接项目 |
| 212 | [FileXego/dsh-mathlab](https://github.com/FileXego/dsh-mathlab) | 0 | 2026-11-03 | 2026-11-03 | MathLab — a graduate-level mathematics research workbench for DeepSeek Harness: SymPy/Lean, abstract algebra, category theory, logic, plots, and an interactive Live Stage. |
| 213 | [fish9988/dsh-supermemory](https://github.com/fish9988/dsh-supermemory) | 0 | 2026-11-03 | 2026-11-03 | Cross-session long-term memory plugin for DeepSeek Harness (DSH) powered by Supermemory · DSH 跨会话长期记忆插件（按需语义召回、后台自动蒸馏、双层去重、可视化记忆管理页） |
| 214 | [Fragmented-Chaos/dsh-session-delete](https://github.com/Fragmented-Chaos/dsh-session-delete) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: permanently delete a session |
| 215 | [FrogFlaying/dsh-deskresume](https://github.com/FrogFlaying/dsh-deskresume) | 0 | 2026-11-03 | 2026-11-03 | 桌面续开 (DeskResume): snapshot the Windows desktop session and restore open apps, documents, folders and window positions after a restart or power loss. |
| 216 | [gavinff1990/fanggao-pet](https://github.com/gavinff1990/fanggao-pet) | 0 | 2026-11-03 | 2026-11-03 | 方糕萌宠：DeepSeek Harness UI 插件，对话进行时奔跑、完成时睡觉、出错时生气，可悬浮拖拽。 |
| 217 | [GEMLZC/dsh-font-studio](https://github.com/GEMLZC/dsh-font-studio) | 0 | 2026-11-03 | 2026-11-03 | 字体设置页：正文、代码与终端的字号和字体族，外加界面、会话与代码的文字颜色、字重、斜体、字间距与行高，带实时预览 |
| 218 | [gh503/dsh-prism-theme](https://github.com/gh503/dsh-prism-theme) | 0 | 2026-11-03 | 2026-11-03 | Prism Studio: playful light/dark themes and live theme editor for DeepSeek Harness |
| 219 | [githublmk/dsh-panel-titlebar](https://github.com/githublmk/dsh-panel-titlebar) | 0 | 2026-11-03 | 2026-11-03 | 把 DeepSeek Harness 侧边栏的全局面板移到 Windows 标题栏（应用/编辑 之后）· Move the sidebar's global panels into the DSH Desktop title bar. |
| 220 | [gmchocolate/dsh-deepseek-status](https://github.com/gmchocolate/dsh-deepseek-status) | 0 | 2026-11-03 | 2026-11-03 | Glowing live DeepSeek service-status lamp in the DeepSeek Harness sidebar (status.deepseek.com), with a hover breakdown card. |
| 221 | [godthrone/dsh-beta-battle-mode](https://github.com/godthrone/dsh-beta-battle-mode) | 0 | 2026-11-03 | 2026-11-03 | BETA battle mode for DeepSeek Harness — commander-led agent cluster whose context is rebuilt from the project's work log (compaction without a model call) |
| 222 | [gongfpp/dsh-cost-voice](https://github.com/gongfpp/dsh-cost-voice) | 0 | 2026-11-03 | 2026-11-03 | 每轮结束用支付宝/大白饭语音播报本轮花费（DeepSeek Harness 插件） |
| 223 | [gpta76/dsh-github-panel](https://github.com/gpta76/dsh-github-panel) | 0 | 2026-11-03 | 2026-11-03 | GitHub console for DeepSeek Harness: token-only sign-in, issues/PRs/commits, stars, cloning with auto-sync and skills. |
| 224 | [hakulat2023/dsh-spotlight](https://github.com/hakulat2023/dsh-spotlight) | 0 | 2026-11-03 | 2026-11-03 | Spotlight-style command palette for DeepSeek Harness: settings, plugins, sessions, keyboard shortcuts, themes, and any registered command. |
| 225 | [halftin/dsh-codex-runner](https://github.com/halftin/dsh-codex-runner) | 0 | 2026-10-25 | 2026-11-03 | 让DSH拥有直接操作codex的能力 |
| 226 | [hanshengcc/callai-seo-mcp](https://github.com/hanshengcc/callai-seo-mcp) | 0 | 2026-11-03 | 2026-11-03 | Live SEO data for AI agents over MCP: Google/Bing SERP, keyword difficulty, competitor gaps, backlinks, page audits. DeepSeek Harness plugin included. |
| 227 | [HansyLin-xCoFe/dsh-update-center](https://github.com/HansyLin-xCoFe/dsh-update-center) | 0 | 2026-11-03 | 2026-11-03 | DSH Web 更新中心插件：设置通用页一键更新 + 左下角更新弹窗 + 可展开的更新说明（DeepSeek Harness plugin） |
| 228 | [HanYu-me/dsh-project-kanban](https://github.com/HanYu-me/dsh-project-kanban) | 0 | 2026-11-03 | 2026-11-03 | Project kanban for the DeepSeek Harness (dsh) web GUI: a sidebar board grouped by project with four fixed columns (待办 / 进行中 / 待反馈 / 已完成). |
| 229 | [HanYu-me/dsh-small-toolkit](https://github.com/HanYu-me/dsh-small-toolkit) | 0 | 2026-11-03 | 2026-11-03 | Small DeepSeek Harness features: keep the Mac awake while dsh runs, and a macOS notification when a conversation finishes its task (click it to bring dsh forward). |
| 230 | [hardlic/dsh-fitness](https://github.com/hardlic/dsh-fitness) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness fitness plugin: agent tools (fitness_log) + left-rail dashboard panel. Local-first SQLite. 撸铁打卡：记训练、查历史、周报、训练计划。 |
| 231 | [HarryLi-7/dsh-codex-login](https://github.com/HarryLi-7/dsh-codex-login) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：用官方 OAuth 登录 ChatGPT (Codex)，让 openai-codex 提供方的 GPT 模型可作为主模型使用 |
| 232 | [heiyedehen/dsh-whale-whispers](https://github.com/heiyedehen/dsh-whale-whispers) | 0 | 2026-11-03 | 2026-11-03 | 鲸语：DSH 输入框上方的语录标签页。agent 可写、每句带上文、可改名、可导出。 |
| 233 | [Henvy-Mango/dsh-porthole](https://github.com/Henvy-Mango/dsh-porthole) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 的本机门户：局域网或经 frps/EasyTier 打进来的流量都落在同一个反代+门禁上。双密码、防篡改锁、会话投影剥离、远程工作区管理。 |
| 234 | [HHpetra/dsh-hk-craft](https://github.com/HHpetra/dsh-hk-craft) | 0 | 2026-11-01 | 2026-11-03 | DSH split screen plugin, hide workspace conversations, switch conversations using the tui command. dsh分屏插件，隐藏工作区对话，改用tui命令切换对话。 |
| 235 | [hhse/dsh-cmdk](https://github.com/hhse/dsh-cmdk) | 0 | 2026-11-03 | 2026-11-03 | ⌘K command palette for DeepSeek Harness — 搜索会话/工作区/插件、会话动作、插件开关、可扩展命令 |
| 236 | [hhse/dsh-usage-peak](https://github.com/hhse/dsh-usage-peak) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 用量峰谷仪表盘：峰/谷时段、今日花费与 tokens、24h 与 14 天趋势、缓存命中与花费构成（侧栏常驻胶囊 + 设置页详情）。 |
| 237 | [HiddenPuppy/dsh-plugin-discovery](https://github.com/HiddenPuppy/dsh-plugin-discovery) | 0 | 2026-11-03 | 2026-11-03 | Plugin Discovery for DeepSeek Harness — browse the complete GitHub-hosted DSH plugin marketplace (22k+ plugins) from the sidebar: Chinese descriptions, head-category filters, star / recency sorting, auto-refresh on every open. 中文：插件发现，把 DSH 插件市场全量目录接进侧边栏。 |
| 238 | [HJ1H/dsh-agent-speedup](https://github.com/HJ1H/dsh-agent-speedup) | 0 | 2026-11-02 | 2026-11-03 | Tool-execution efficiency suite for DeepSeek Harness: read-only cache with in-flight coalescing, speculative prefetch, and concurrent readonly shell commands. |
| 239 | [hlwzm/memory-star](https://github.com/hlwzm/memory-star) | 0 | 2026-11-03 | 2026-11-03 | 把 Markdown 笔记变成能查、能连、能看的 3D 记忆星图。零依赖 Python + DSH 插件。 |
| 240 | [hoyin-law/dsh-feishu-cli](https://github.com/hoyin-law/dsh-feishu-cli) | 0 | 2026-11-03 | 2026-11-03 | Feishu/Lark CLI for DeepSeek Harness: QR sign-in panel, command console, and agent tools (18 domains, 200+ commands, full OpenAPI). |
| 241 | [hsushjk/dsh-auralife](https://github.com/hsushjk/dsh-auralife) | 0 | 2026-11-02 | 2026-11-03 | DeepSeek Harness 插件， 数字生命。内分泌三激素，自我，冲动，器官，记忆。以及基础的看图、发语音、听语音、发和收表情包、写日记、逛空间回评论、还会主动找你聊天。功能模块化，可本地自写扩展。 |
| 242 | [huangyuanhu3-dev/dsh-chat-skin](https://github.com/huangyuanhu3-dev/dsh-chat-skin) | 0 | 2026-11-03 | 2026-11-03 | 给 DSH 的聊天区换一层真正属于你的背景：氛围渐变 / 自定义图片、遮罩深浅、毛玻璃、CSS 动画、字体、emoji 头像与运行图标。所有调整实时生效，配置保存在本机，重启后仍在。 |
| 243 | [HUAWEIYYLS/paperdepot](https://github.com/HUAWEIYYLS/paperdepot) | 0 | 2026-11-03 | 2026-11-03 | 论文库（PaperDepot）— 把 PDF 论文变成可检索、可读、可连接的 Obsidian 论文库。DeepSeek Harness（DSH）插件。 |
| 244 | [hugo2046/dsh-ascii-sharks-skin](https://github.com/hugo2046/dsh-ascii-sharks-skin) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 的 ASCII 鲨鱼皮肤：让字符鲨鱼游过新会话与聊天窗口，随界面切换深浅配色，支持自定义鱼群和保存预设。 |
| 245 | [HUHUhim/dsh-taskbar-badge](https://github.com/HUHUhim/dsh-taskbar-badge) | 0 | 2026-11-03 | 2026-11-03 | Windows taskbar unread badge and window-bounds restore for DeepSeek Harness. |
| 246 | [hulibuld/dsh-hover-dict](https://github.com/hulibuld/dsh-hover-dict) | 0 | 2026-10-31 | 2026-11-03 | 在 DeepSeek Harness 里点选查词与翻译：点击或划选英文单词看释义，划选短语看翻译，生词本、词根词缀、同根词标注。离线词库，不改正文 DOM。 |
| 247 | [iamwuzhanglin/dsh-session-recycler](https://github.com/iamwuzhanglin/dsh-session-recycler) | 0 | 2026-11-03 | 2026-11-03 | Real session deletion for DeepSeek Harness: delete a conversation record from the Web UI, with a trash bin to restore or purge it. |
| 248 | [IceyVanci/dsh-phonephoto-ezinput](https://github.com/IceyVanci/dsh-phonephoto-ezinput) | 0 | 2026-11-02 | 2026-11-03 | 简单便捷的把手机中的照片发送到DeepSeek Harness中的对话 |
| 249 | [Idlehanker/dsh-mnemon-sync-monitor](https://github.com/Idlehanker/dsh-mnemon-sync-monitor) | 0 | 2026-11-03 | 2026-11-03 | Real-time file watcher that keeps dsh-mnemon Project Documents in sync with local Markdown knowledge bases |
| 250 | [ilaomianyang/dsh-memory-graph](https://github.com/ilaomianyang/dsh-memory-graph) | 0 | 2026-11-03 | 2026-11-03 | Long-term associative memory for DeepSeek Harness: raw episodes, typed memory cards and entity pages in a plain-text vault you own. No auto-injection, no embeddings, no binary store. |
| 251 | [imx123/dsh-opencode-session-fix](https://github.com/imx123/dsh-opencode-session-fix) | 0 | 2026-11-03 | 2026-11-03 | DSH Host plugin: supplies x-opencode-session for opencode-go requests that carry no session id, so Auto review stops failing with 400 MissingSessionID. |
| 252 | [Incredible-Jian/dsh-Bleach-Violet-Evergarden-Re-Zero-AoT-Themes](https://github.com/Incredible-Jian/dsh-Bleach-Violet-Evergarden-Re-Zero-AoT-Themes) | 0 | 2026-11-02 | 2026-11-03 | DeepSeek Harness (DSH) 二次元暗色主题 · 进击的巨人 / 死神 / Re:Zero / 紫罗兰永恒花园：巨人剪影、千本樱、卍解角标、人物海报、可换壁纸（Anime dark skin for the DSH Web GUI） |
| 253 | [inezmitche46-maker/dsh-usage-stats](https://github.com/inezmitche46-maker/dsh-usage-stats) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (DSH) token usage plugins: an all-session usage dashboard and a composer token pill. |
| 254 | [ITISlemon/dsh-sound-cue](https://github.com/ITISlemon/dsh-sound-cue) | 0 | 2026-11-03 | 2026-11-03 | 在对话框底部添加了一个音效设置框，可以让deepseekharness在完成工作时或遇到需要你操作的内容时播放提示音效 |
| 255 | [jeff072333/dsh-live-spend](https://github.com/jeff072333/dsh-live-spend) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：输入框上方显示本次对话花费、账户余额与当前峰谷时段，每条回答末尾显示该轮消耗 \| DSH plugin: live spend, balance and peak/off-peak card |
| 256 | [JessenReinhart/dsh-plugin-ade](https://github.com/JessenReinhart/dsh-plugin-ade) | 0 | 2026-11-03 | 2026-11-03 | Hyprland-style drag-to-split multi-pane conversation layout for DeepSeek Harness Desktop |
| 257 | [jf143757-max/dsh-tech-companion](https://github.com/jf143757-max/dsh-tech-companion) | 0 | 2026-11-03 | 2026-11-03 | A gentle technical learning companion for DeepSeek Harness and Hermes |
| 258 | [jhz0428/dsh-lean4](https://github.com/jhz0428/dsh-lean4) | 0 | 2026-11-03 | 2026-11-03 | A DeepSeek Harness plugin for Lean4 coding #dsh #deepseek-harness  |
| 259 | [Jiang-Xiaoxing/dsh-salary-meter](https://github.com/Jiang-Xiaoxing/dsh-salary-meter) | 0 | 2026-11-03 | 2026-11-03 | 打工养肥鱼，实时工资、下班倒计时和模型饭钱估算（DSH / DeepSeek Harness 插件） |
| 260 | [jiangsuyuan/dsh-theme-550C](https://github.com/jiangsuyuan/dsh-theme-550C) | 0 | 2026-11-02 | 2026-11-03 | 真正的550C控制界面风格，DSH插件 |
| 261 | [jianlong-ww/dsh-explorer-editor](https://github.com/jianlong-ww/dsh-explorer-editor) | 0 | 2026-11-03 | 2026-11-03 | Monaco editor inside the DeepSeek Harness file preview: edit, highlight, and project-typed completion in place |
| 262 | [JieCore/dsh-team-dev](https://github.com/JieCore/dsh-team-dev) | 0 | 2026-10-31 | 2026-11-03 | DSH plugin bundle: per-agent step-budget guard + bundled team-dev / team-boot skills. 开发团队插件：步数预算守卫 + 随包技能。 |
| 263 | [JiessieM/dsh-memory-organizer](https://github.com/JiessieM/dsh-memory-organizer) | 0 | 2026-11-03 | 2026-11-03 | DSH 记忆本自动整理插件 |
| 264 | [jinchenwu1220/dsh-edit-rerun](https://github.com/jinchenwu1220/dsh-edit-rerun) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness Web GUI plugin: edit an earlier prompt and re-run it in a forked branch |
| 265 | [jinmuxi1/dsh-image-wheel-pan](https://github.com/jinmuxi1/dsh-image-wheel-pan) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：右侧文件预览图片直接滚轮缩放、按住左键拖动平移。Wheel zoom (no Ctrl) and left-drag pan for images in the DeepSeek Harness right sidebar. |
| 266 | [jiuwu02/dsh-token-panorama](https://github.com/jiuwu02/dsh-token-panorama) | 0 | 2026-11-02 | 2026-11-03 | 读取全部会话日志，汇成 token 全景：累计总量、缓存命中率、峰谷分时成本、日历热力图、趋势曲线、折叠式会话树与工作区分布、CSV / JSON 导出，另带上下文清理 / 压缩与提示词优化两组工具。 |
| 267 | [JJJACKsong/dsh-plugin-2048](https://github.com/JJJACKsong/dsh-plugin-2048) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 侧边栏 2048 小游戏 — a 2048 game plugin for dsh (sidebar panel, full-page board). |
| 268 | [JKL-3484/dsh-drive-manager](https://github.com/JKL-3484/dsh-drive-manager) | 0 | 2026-10-26 | 2026-11-03 | 它是一款Windows磁盘空间管理、C盘减负、多盘文件分工可视化插件，面向新买电脑、想把系统盘和数据盘分开管理，但不会设置、容易把C盘撑爆的新手，属于DSH生态的独立插件，可以和AppData Scanner搭配使用。 |
| 269 | [jli517166-gif/love-suite-public](https://github.com/jli517166-gif/love-suite-public) | 0 | 2026-11-03 | 2026-11-03 | Testing-stage companion plugin for DSH: local-first memory, core memory, mood, heartbeat, proactive messages, personas and a memory star map. Early testing; expect issues. |
| 270 | [JMILI/dsh-seesion-copy-enhance](https://github.com/JMILI/dsh-seesion-copy-enhance) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness web plugin: copy a whole chat message - text, images, videos and files - and paste it back into any session's composer with the media still attached. |
| 271 | [JOJO-Adam/dsh-opc-ops](https://github.com/JOJO-Adam/dsh-opc-ops) | 0 | 2026-11-03 | 2026-11-03 | One-person-company operations SOP for DeepSeek Harness |
| 272 | [Joker2377/dsh-plugin-devkit](https://github.com/Joker2377/dsh-plugin-devkit) | 0 | 2026-11-03 | 2026-11-03 | Three host tools for DeepSeek Harness bundles: scaffold one, diagnose it before install, and audit a published package's supply chain before it runs in your profile. |
| 273 | [jtsinlio/dsh-pet-jt](https://github.com/jtsinlio/dsh-pet-jt) | 0 | 2026-10-27 | 2026-11-03 | dsh-pet 的个性化增强分支：定时提醒气泡 + 随机出现/隐藏频率设置（与 dsh-pet 可共存） |
| 274 | [JupiterWalker/dsh-section](https://github.com/JupiterWalker/dsh-section) | 0 | 2026-11-03 | 2026-11-03 | 类似codex section功能，实现单会话分组管理（session group/section） |
| 275 | [justinzyc271828-sys/dsh-baidu-netdisk](https://github.com/justinzyc271828-sys/dsh-baidu-netdisk) | 0 | 2026-11-03 | 2026-11-03 | Connect DeepSeek Harness to Baidu Netdisk's official MCP service. |
| 276 | [justinzyc271828-sys/dsh-music](https://github.com/justinzyc271828-sys/dsh-music) | 0 | 2026-11-03 | 2026-11-03 | Music tools for DeepSeek Harness, starting with official Suno MCP credits and library access. |
| 277 | [juzpost/dsh-juzpost](https://github.com/juzpost/dsh-juzpost) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin for JuzPost, a free social media scheduler with low-cost paid plans. Connects dsh to the JuzPost MCP server and registers the posting skill. |
| 278 | [juzpost/juzpost-agent](https://github.com/juzpost/juzpost-agent) | 0 | 2026-09-13 | 2026-11-03 | JuzPost for AI agents: a free social media scheduler with low-cost paid plans. Claude, Cursor, Gemini CLI, Qwen Code, Grok Build, OpenClaw and DeepSeek Harness plugin, skills and hosted MCP server for YouTube, Instagram, Facebook, TikTok, X, LinkedIn, Pinterest, Bluesky, Threads, Tumblr and WordPress. |
| 279 | [KeNan2025/inkstone](https://github.com/KeNan2025/inkstone) | 0 | 2026-11-03 | 2026-11-03 | 砚台 · Inkstone — sync a local LaTeX project to CSTCloud Overleaf, compile it server-side, and return diagnostics for the agent to fix. No local TeX required. |
| 280 | [keyblues/dsh-asset-expert-preset](https://github.com/keyblues/dsh-asset-expert-preset) | 0 | 2026-11-03 | 2026-11-03 | DSH agent preset 资产专家: enterprise internet asset discovery and relationship mapping — ICP filings, FOFA cyberspace mapping, company-graph pivoting, xlsx ledger. \| DSH Agent 预设：企业互联网资产与关联图谱（ICP备案 / FOFA测绘 / 企业关联 / xlsx 台账交付） |
| 281 | [keyblues/dsh-tool-exposure](https://github.com/keyblues/dsh-tool-exposure) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: role-scoped tool exposure for agent presets — a Settings matrix that raises or lowers which third-party plugin tools each role can see, enforced through ctx.tools.restrict at agent creation. DSH 插件：按角色（agent preset）管理第三方插件注册工具的暴露面。 |
| 282 | [kirarikaryuu/dsh-gbk-text](https://github.com/kirarikaryuu/dsh-gbk-text) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：修复打开 GBK 文件时的「该格式文件暂时无法预览」——在文件系统层按 GB18030 解码非 UTF-8 文本，内置预览 / Markdown / 代码 / 表格一次修好。Fixes GBK file preview in DeepSeek Harness. |
| 283 | [kiritoko1029/dsh-codex-ws](https://github.com/kiritoko1029/dsh-codex-ws) | 0 | 2026-11-02 | 2026-11-03 | DeepSeek Harness OpenAI Responses WebSocket transport plugin with an inline WS/SSE toggle |
| 284 | [kohjuz/dsh-clipboard-tools](https://github.com/kohjuz/dsh-clipboard-tools) | 0 | 2026-11-03 | 2026-11-03 | DSH 剪贴板工具：读你刚复制的文字/截图，把生成结果放回剪贴板。Clipboard tools for DeepSeek Harness — read text or screenshots, write text or images. Windows / macOS / Linux, zero dependencies. |
| 285 | [koishi-fumo-code/dsh-fx-arena](https://github.com/koishi-fumo-code/dsh-fx-arena) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: FX simulated trading arena vs Whale-chan (K-line, leverage 10-500x, timed + goal modes, zero network, zero real money) |
| 286 | [konwait12/dsh-connect-two](https://github.com/konwait12/dsh-connect-two) | 0 | 2026-11-03 | 2026-11-03 | One panel for the credits and daily check-in of locally signed-in Trae and WorkBuddy accounts, with an opt-in daily automatic check-in. |
| 287 | [konwait12/dsh-offwork-countdown](https://github.com/konwait12/dsh-offwork-countdown) | 0 | 2026-11-03 | 2026-11-03 | A draggable off-work countdown card for the DeepSeek Harness Web GUI · DSH Web 界面右上角的下班倒计时小卡片（可拖动、可配置） |
| 288 | [lakejason0/dsh-sidebar-collapse](https://github.com/lakejason0/dsh-sidebar-collapse) | 0 | 2026-11-03 | 2026-11-03 | DSH 侧边栏折叠：在工作区标题右侧加一个折叠按钮，一键收起全局插件按钮条，把整列高度让给工作区与会话列表。 / Fold the DSH sidebar's global plugin-button strip in one click. |
| 289 | [lakii2982/dsh-sidebar-quota-widget](https://github.com/lakii2982/dsh-sidebar-quota-widget) | 0 | 2026-11-03 | 2026-11-03 | DSH (DeepSeek Harness) Web GUI plugin: sidebar 5h/7d subscription-quota rings for locally connected providers, official DeepSeek balance on the account row, native macOS-style tooltips. |
| 290 | [Landau1994/dsh-yinji](https://github.com/Landau1994/dsh-yinji) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: selectively hide workspaces in the left sidebar and files/directories in the right file tree. UI only - model access unaffected. |
| 291 | [Lanstzz/sapi-budget](https://github.com/Lanstzz/sapi-budget) | 0 | 2026-11-03 | 2026-11-03 | Sync AiSpot (sapi) group pricing in DeepSeek Harness and show per-turn and per-session cost, including the whole subagent subtree. |
| 292 | [laomaogu/dsh-ledger](https://github.com/laomaogu/dsh-ledger) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness（DSH）个人记账插件：记录收支，按时间、分类、支付方式、星期、月度分析消费，附预算提示与图表；数据只存本机。 |
| 293 | [lihao178/dsh-plugin-steward](https://github.com/lihao178/dsh-plugin-steward) | 0 | 2026-11-03 | 2026-11-03 | Plugin steward for DeepSeek Harness: update checks, auto-update with snapshot rollback, health checks, duplicate analysis, cleanup — one left-panel UI and one CLI. · 插件管家：查更新、有新版本自动装（装前备份、出错回滚）、体检、查重、清垃圾。 |
| 294 | [lionwill/dsh-token-board](https://github.com/lionwill/dsh-token-board) | 0 | 2026-11-03 | 2026-11-03 | token dashboard and realtime token speed for DSH |
| 295 | [lionwill/dsh-usage-summary](https://github.com/lionwill/dsh-usage-summary) | 0 | 2026-11-03 | 2026-11-03 | deepseek harness token usage summary |
| 296 | [lishuaibing521/dsh-hermes-feishu](https://github.com/lishuaibing521/dsh-hermes-feishu) | 0 | 2026-11-03 | 2026-11-03 |  DeepSeek Harness 的飞书/Lark 通道：长连接收发消息、Markdown 表格渲染成飞书原生 table 组件、13 个飞书操作工具，带 Web 设置页、语音收发、媒体上传与模型故障转移链。 |
| 297 | [LiuPack/dsh-beads-panel](https://github.com/LiuPack/dsh-beads-panel) | 0 | 2026-11-03 | 2026-11-03 | Beads panel for the DeepSeek Harness sidebar: browse, create, claim and close beads from the left panel list (local Harness bundle). |
| 298 | [liushimu/dsh-workspace-detached](https://github.com/liushimu/dsh-workspace-detached) | 0 | 2026-11-03 | 2026-11-03 | Detached workspace and session navigation for DeepSeek Harness. Independent Windows window, no DSH Core patches. |
| 299 | [liyolin/dsh-session-temp-reaper](https://github.com/liyolin/dsh-session-temp-reaper) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：输入框旁一键清理本次会话的临时文件。模型用 mark_temp_files 登记，面板分「已标记（默认勾删）」与「未标记（默认保留）」，删除需两次确认。 |
| 300 | [lizhijie429/dsh-push-privacy-guard](https://github.com/lizhijie429/dsh-push-privacy-guard) | 0 | 2026-11-03 | 2026-11-03 | DSH Host plugin: privacy-check git commit/push before upload, ask for approval, manage a whitelist. DSH 提交/推送前隐私检查插件。 |
| 301 | [lizhijie429/dsh-root-temp-guard](https://github.com/lizhijie429/dsh-root-temp-guard) | 0 | 2026-11-03 | 2026-11-03 | DSH Host plugin: guard against temporary directories/files created in the workspace root (session-root aware, config-driven; not a security boundary). |
| 302 | [lkpsg/dsh-token-meter](https://github.com/lkpsg/dsh-token-meter) | 0 | 2026-11-03 | 2026-11-03 | Bailian Token Plan usage panel for DeepSeek Harness: 5h/weekly/monthly quota, credits, reset countdowns. |
| 303 | [Lqg97/dsh-session-suspend](https://github.com/Lqg97/dsh-session-suspend) | 0 | 2026-11-03 | 2026-11-03 | DSH（DeepSeek Harness）侧边栏会话挂起插件：把空闲会话收进底部「已挂起」折叠组，可逐个/整批恢复 |
| 304 | [LTao96/dsh-plugin-overview](https://github.com/LTao96/dsh-plugin-overview) | 0 | 2026-11-02 | 2026-11-03 | 本地插件总览：备注、分组、健康检查、启停和设置入口。 |
| 305 | [lulaalu/dsh-session-tree](https://github.com/lulaalu/dsh-session-tree) | 0 | 2026-11-03 | 2026-11-03 | Session Tree: a per-workspace map of DeepSeek Harness sessions, turns and fork branches in the Web UI. |
| 306 | [Lumos-789/guster](https://github.com/Lumos-789/guster) | 0 | 2026-11-03 | 2026-11-03 | Guster — audit and evolve agent context across one project, a group of repos, a hub, or a whole machine. |
| 307 | [lyingloong/dsh-agent-team-workflow](https://github.com/lyingloong/dsh-agent-team-workflow) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: user-defined, resumable agent-team workflows with model-lane failover, gates and a local kanban board. |
| 308 | [Mailemailezhu/dsh-mine-sweeper](https://github.com/Mailemailezhu/dsh-mine-sweeper) | 0 | 2026-11-03 | 2026-11-03 | A MineSweeper Game in Deepseek-Harness |
| 309 | [MateenAhmed737/dsh-plugin-opencode-local](https://github.com/MateenAhmed737/dsh-plugin-opencode-local) | 0 | 2026-11-02 | 2026-11-03 | DeepSeek Harness plugin: use your own local OpenCode CLI's models (all your OpenCode providers) inside DSH, the way T3 Code does |
| 310 | [MaxHan0102/dsh-config-studio](https://github.com/MaxHan0102/dsh-config-studio) | 0 | 2026-11-03 | 2026-11-03 | Visual configuration editor for DSH profiles: browse every addressable plugin entry, edit non-volatile fields from its own Config schema, and save into the profile patch. |
| 311 | [maxid/dsh-ext-master](https://github.com/maxid/dsh-ext-master) | 0 | 2026-10-28 | 2026-11-03 | Deepseek Harness 文件预览扩展名管理 |
| 312 | [mengzhongjie/dsh-codex-sidebar](https://github.com/mengzhongjie/dsh-codex-sidebar) | 0 | 2026-11-02 | 2026-11-03 | Message view for the DSH sidebar: sessions grouped by priority and date, switched from a bell button. |
| 313 | [mengzhongjie/dsh-superagent-local](https://github.com/mengzhongjie/dsh-superagent-local) | 0 | 2026-11-01 | 2026-11-03 | dsh-superagent 的本地改造版：每个工作区一个主会话，需求来自本机操作者而不是 GitHub/飞书（fork of dsh-superagent） |
| 314 | [mirrors036/dsh-plugin-wechat-analysis](https://github.com/mirrors036/dsh-plugin-wechat-analysis) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: Windows WeChat 4.x chat export toolchain (skill wechat-chat-analysis + scripts). Analysis stages delegate to the locally installed she-love-me skill. |
| 315 | [miyunmoshi/dsh-disk-cleanup](https://github.com/miyunmoshi/dsh-disk-cleanup) | 0 | 2026-11-03 | 2026-11-03 | Windows disk cleanup workspace for DeepSeek Harness (DSH): read-only scanning, explained candidates, and a reversible quarantine instead of direct deletion. |
| 316 | [momiji42/dsh-desktop-tools](https://github.com/momiji42/dsh-desktop-tools) | 0 | 2026-11-03 | 2026-11-03 | Restart button in the DSH desktop title bar + Start with Windows switch, in one plugin. |
| 317 | [momijijin/dsh-session-groups](https://github.com/momijijin/dsh-session-groups) | 0 | 2026-11-03 | 2026-11-03 | Free-form nested session groups for the DeepSeek Harness sidebar: cross-workspace organization without moving sessions, with local persistence, backup recovery, drag-and-drop, and optional AI control. |
| 318 | [moonwellxh/DSH-Launcher](https://github.com/moonwellxh/DSH-Launcher) | 0 | 2026-08-27 | 2026-11-03 | DSH 魔偶助手（DSH一键启动托盘）(DeepSeek Harness launcher / tray) |
| 319 | [MrXiongBear/dsh-capability-ledger](https://github.com/MrXiongBear/dsh-capability-ledger) | 0 | 2026-11-03 | 2026-11-03 | Capability ledger for a DSH profile: real skill/tool usage folded from durable session logs, fixed per-request tool-schema cost, and a read-only safety audit of every installed bundle. |
| 320 | [MrXiongBear/dsh-orchestrator-canvas](https://github.com/MrXiongBear/dsh-orchestrator-canvas) | 0 | 2026-11-03 | 2026-11-03 | 工作画布流：图即真相的编排闸门（Brief→Decompose→Dispatch→Verify→Accept）+ 只读编排画布。 |
| 321 | [MrXiongBear/dsh-settings-hub](https://github.com/MrXiongBear/dsh-settings-hub) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：把散落在「设置」里的第三方插件设置页收拢进一个统一的「插件设置」入口 |
| 322 | [MrXiongBear/dsh-task-intake](https://github.com/MrXiongBear/dsh-task-intake) | 0 | 2026-11-03 | 2026-11-03 | Task intake protocol: clarify and optimize every task before running it. |
| 323 | [MrXiongBear/dsh-task-steward](https://github.com/MrXiongBear/dsh-task-steward) | 0 | 2026-11-03 | 2026-11-03 | Task steward for DSH: watches a running task for stalls, no-progress loops, forbidden commands, tainted privileged calls, budget overruns and escalation requests, then records / reminds / blocks / stops on a deterministic ladder. Shadow mode by default. |
| 324 | [MrXiongBear/dsh-usage-dashboard](https://github.com/MrXiongBear/dsh-usage-dashboard) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：侧边栏显示 API 余额、消费估算与峰谷时段，附完整用量仪表盘与服务商切换 |
| 325 | [mzqmzqmzqmzq/dsh-api-cost-meter](https://github.com/mzqmzqmzqmzq/dsh-api-cost-meter) | 0 | 2026-11-03 | 2026-11-03 | Live API spend meter for DeepSeek Harness: today's cost and the open window's cost, pushed over SSE and priced from token usage. |
| 326 | [ncouvin/dsh-web-search-duckduckgo](https://github.com/ncouvin/dsh-web-search-duckduckgo) | 0 | 2026-11-03 | 2026-11-03 | Free, zero-config DuckDuckGo web search provider plugin for DeepSeek Harness (ctx.web) |
| 327 | [nick-lei/Zuad-deepseek](https://github.com/nick-lei/Zuad-deepseek) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin for managing Zuad digital signage media, programs, playback schedules and devices through conversation. |
| 328 | [nikomao/dsh-copilot](https://github.com/nikomao/dsh-copilot) | 0 | 2026-11-03 | 2026-11-03 | GitHub Copilot provider and usage console for DeepSeek Harness |
| 329 | [Nnnnazo/dsh-plugins](https://github.com/Nnnnazo/dsh-plugins) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (DSH) bundle plugins: prompt optimizer and token/cost panel |
| 330 | [NOMAD-bri/dsh-product-model-compare](https://github.com/NOMAD-bri/dsh-product-model-compare) | 0 | 2026-11-03 | 2026-11-03 | Local STEP/STL/OBJ 3D workbench plugin for DeepSeek Harness: single or dual model viewing, pose dimensions, face alignment, part isolation and temporary measurements. No library, no uploads. |
| 331 | [NoneFire/drender](https://github.com/NoneFire/drender) | 0 | 2026-10-18 | 2026-11-03 | An open-source renderer for the md-report/1 format: Markdown plus declared SQLite/CSV datasets becomes one offline, interactive HTML report or dashboard. |
| 332 | [NONON01/dsh-multithread-downloader](https://github.com/NONON01/dsh-multithread-downloader) | 0 | 2026-10-25 | 2026-11-03 | Multithreaded HTTP/HTTPS downloader plugin for DeepSeek Harness (DSH) |
| 333 | [northstacker/dsh-design-studio](https://github.com/northstacker/dsh-design-studio) | 0 | 2026-11-03 | 2026-11-03 | Layered design workbench plugin for DeepSeek Harness: image &amp; text layers, cross-design layer bindings, batch PNG/JPG/ZIP export |
| 334 | [Nortr0m/dsh-dota2-pet](https://github.com/Nortr0m/dsh-dota2-pet) | 0 | 2026-11-03 | 2026-11-03 | Dota 2 桌宠 DSH 插件：把本机游戏模型的动作离线烘成帧，配好账号后按你最近的英雄出场 |
| 335 | [oka-rin/dsh-qq](https://github.com/oka-rin/dsh-qq) | 0 | 2026-11-03 | 2026-11-03 | Unified QQ bot plugin for DeepSeek Harness: control panel, 28 tools, GIF/video/forward understanding and SnowLuma/OneBot connection. |
| 336 | [Okra-juice/dsh-rheostat](https://github.com/Okra-juice/dsh-rheostat) | 0 | 2026-11-03 | 2026-11-03 | 把 DSH 模型菜单里的推理等级变成一条滑动变阻器：颜色由灰到蓝，米饭越吃越少 |
| 337 | [onezeroyl/dsh-desktop-alerts](https://github.com/onezeroyl/dsh-desktop-alerts) | 0 | 2026-11-03 | 2026-11-03 | Desktop effect alerts for dsh: fireworks on turn completion, deep-green breathing border for approvals, unread session highlights. |
| 338 | [Open-Glyph/OpenGlyph-DeepSeek-Harness](https://github.com/Open-Glyph/OpenGlyph-DeepSeek-Harness) | 0 | 2026-11-03 | 2026-11-03 | Native OpenGlyph document, glyph retrieval, composition and printable-font tools for DeepSeek Harness |
| 339 | [outmanwt/dsh-chat-privacy-blur](https://github.com/outmanwt/dsh-chat-privacy-blur) | 0 | 2026-11-03 | 2026-11-03 | DSH Web 对话隐私遮罩：提问与回答默认模糊、悬停才显示 / Blur the questions and answers in the DeepSeek Harness Web conversation until the pointer rests on them |
| 340 | [oyhdd/dsh-git-changes](https://github.com/oyhdd/dsh-git-changes) | 0 | 2026-11-03 | 2026-11-03 | DSH right-sidebar Git review panel: staged/unstaged change tree, inline &amp; side-by-side diffs, stage/unstage/discard, commit &amp; push, AI commit messages, line blame. |
| 341 | [P-PPJ/dsh-chat-search](https://github.com/P-PPJ/dsh-chat-search) | 0 | 2026-10-28 | 2026-11-03 | Ctrl+F search inside the open conversation for DeepSeek Harness: in-text highlights, previous/next, a match list, a live count, no block opened, no reading position lost. |
| 342 | [P-PPJ/dsh-session-tabs](https://github.com/P-PPJ/dsh-session-tabs) | 0 | 2026-10-28 | 2026-11-03 | 浏览器式顶部标签栏：一个标签 = 一个会话，按项目折叠分组。Browser-style Session tabs for the DeepSeek Harness (DSH) Web GUI. |
| 343 | [p8054076283-del/dsh-ppt-studio](https://github.com/p8054076283-del/dsh-ppt-studio) | 0 | 2026-11-03 | 2026-11-03 | PPT workbench for DeepSeek Harness: live 16:9 deck preview, in-place editing, element-faithful PPTX import, AI chat column. · DSH 左侧栏 PPT 工作台：16:9 预览、就地编辑、原样导入 PPTX、AI 对话栏。 |
| 344 | [PandaYuuHa/dsh-disable-preset-plugins](https://github.com/PandaYuuHa/dsh-disable-preset-plugins) | 0 | 2026-11-03 | 2026-11-03 | 通过配置在 DeepSeek Harness 原生 Agent 预设（标准模式、PTC 模式等）中禁用指定内置插件，无需新建预设。 |
| 345 | [Panna-37/dsh-ocean-splash](https://github.com/Panna-37/dsh-ocean-splash) | 0 | 2026-11-03 | 2026-11-03 | ASCII ocean boot splash for DeepSeek Harness — character sharks eat the wordmark before the app fades in. |
| 346 | [penggehan-wq/dsh-prompt-reverse-workbench](https://github.com/penggehan-wq/dsh-prompt-reverse-workbench) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：图片提示词反推台。把参考图拆成身份卡、比例、技术质感与可复用提示词。Free / MIT. |
| 347 | [PerryLink/dsh-clinic](https://github.com/PerryLink/dsh-clinic) | 0 | 2026-11-01 | 2026-11-03 | Diagnostics, recovery, and readiness checks for DeepSeek Harness plugins. |
| 348 | [PerryLink/dsh-codemod](https://github.com/PerryLink/dsh-codemod) | 0 | 2026-11-01 | 2026-11-03 | Migration codemods for DeepSeek Harness plugin APIs. |
| 349 | [PerryLink/dsh-family-catalog](https://github.com/PerryLink/dsh-family-catalog) | 0 | 2026-09-03 | 2026-11-03 | DSH Desktop Market standard catalog source for the PerryLink plugin family: curated summaries, same-origin icons, contract-validated, CI-smoked. |
| 350 | [PerryLink/dsh-primer](https://github.com/PerryLink/dsh-primer) | 0 | 2026-11-01 | 2026-11-03 | A practical primer for building DeepSeek Harness plugins. |
| 351 | [PerryLink/dsh-scaffold](https://github.com/PerryLink/dsh-scaffold) | 0 | 2026-11-01 | 2026-11-03 | Shared scaffold and contracts for the PerryLink DSH plugin family. |
| 352 | [phoenixlucky/dsh-session-norms](https://github.com/phoenixlucky/dsh-session-norms) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: a normalized session view that renders every turn, message and tool call in one consistent, copyable format. |
| 353 | [pierrotto12138-code/dsh-workstation-spec](https://github.com/pierrotto12138-code/dsh-workstation-spec) | 0 | 2026-11-03 | 2026-11-03 | 把「Chrome 工作站 UI 规范」做成 DSH 工具：workbench_spec 读规范，workbench_starter 取起步模板。 |
| 354 | [pkui1mpression-design/dsh-sidebar-installed-plugins](https://github.com/pkui1mpression-design/dsh-sidebar-installed-plugins) | 0 | 2026-11-03 | 2026-11-03 | Sidebar panel for DeepSeek Harness: lists the plugins installed in the current profile and gives each one an enable/disable switch. |
| 355 | [pzyyll/dsh-xai-auth](https://github.com/pzyyll/dsh-xai-auth) | 0 | 2026-11-03 | 2026-11-03 | dsh plugin that signs in to an xAI SuperGrok subscription and serves it as the xai-supergrok model route. |
| 356 | [qingxingLi/dsh-deepseek-webchat](https://github.com/qingxingLi/dsh-deepseek-webchat) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek 网页版面板 + deepseek_web_ask 工具/技能，用于 DeepSeek Harness 桌面端 |
| 357 | [qlings/DSH-Remote-Desktop](https://github.com/qlings/DSH-Remote-Desktop) | 0 | 2026-11-03 | 2026-11-03 | DSH 远程桌面插件：从另一台电脑连接主机 DSH，支持远程审批、任务事件提醒及本机与远程切换。 |
| 358 | [Qliphoth11/sidebar-balance](https://github.com/Qliphoth11/sidebar-balance) | 0 | 2026-11-03 | 2026-11-03 | 显示 DeepSeek Harness 账户余额的侧边栏插件 / Shows the signed-in DeepSeek account balance right at the sidebar foot — theme-aware, zh/en, no telemetry. |
| 359 | [qui11zxy/dsh-hsr](https://github.com/qui11zxy/dsh-hsr) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：查询《崩坏：星穹铁道》角色、光锥与遗器数据，附带配队知识库 |
| 360 | [railgun20001/dsh-session-row-actions](https://github.com/railgun20001/dsh-session-row-actions) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 插件：侧栏会话行悬浮按钮可配置化，右键打开官方菜单，「置顶会话」换成「分叉会话」 |
| 361 | [raoain/dsh-memory-chain](https://github.com/raoain/dsh-memory-chain) | 0 | 2026-10-27 | 2026-11-03 | 守链：给 AI agent 的长期记忆（五个动词，纯 markdown）。 \| Long-term persistent memory for AI agents — plain markdown, survives restart / model swap / plugin removal. |
| 362 | [Ravi666688/dsh-screen-glow](https://github.com/Ravi666688/dsh-screen-glow) | 0 | 2026-11-03 | 2026-11-03 | 为 DeepSeek Harness 加的屏幕边缘光：模型接管鼠标键盘时亮蓝光、提问时琥珀、等你批准时红色，并在屏幕中上方显示「正在做什么」。含设置页、看门狗与自检 CLI。 |
| 363 | [Raymond-Hear/dsh-video-downloader](https://github.com/Raymond-Hear/dsh-video-downloader) | 0 | 2026-11-03 | 2026-11-03 | 一个帮你高效下载各平台视频的DeepSeek Harness 插件。贴一个链接，用本机 yt-dlp 下载视频 / 音频 / 字幕 / 封面 —— 支持 YouTube、哔哩哔哩、X、TikTok 等上千个站点。 |
| 364 | [Rccccc6/Tongji-AGI-Credit](https://github.com/Rccccc6/Tongji-AGI-Credit) | 0 | 2026-11-03 | 2026-11-03 | 同济 AGI 平台积分余额面板 + 小鲸鱼挂件接入（DSH 插件） |
| 365 | [Rcyc-1025/dsh-build-driver](https://github.com/Rcyc-1025/dsh-build-driver) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：CMake + Ninja + MSVC 构建工具（configure / build / status / stop） |
| 366 | [Rcyc-1025/dsh-mlir-toolchain](https://github.com/Rcyc-1025/dsh-mlir-toolchain) | 0 | 2026-11-03 | 2026-11-03 | MLIR toolchain tools for DeepSeek Harness: probe, run, TableGen and parse-check. |
| 367 | [red000000/dsh-bili-music-player](https://github.com/red000000/dsh-bili-music-player) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：B 站音乐点歌助手（画像推荐 + 软反馈 + 边下边播） |
| 368 | [residenthiago2011/DSH-Save-KV-Cache](https://github.com/residenthiago2011/DSH-Save-KV-Cache) | 0 | 2026-11-03 | 2026-11-03 | Save and load KV cache slots on a llama.cpp server from within DeepSeek Harness (DSH). |
| 369 | [ro-boduck/dsh-houdini-preview](https://github.com/ro-boduck/dsh-houdini-preview) | 0 | 2026-11-03 | 2026-11-03 | English build of dsh-purge with the own-server guardrail removed (English UI + prompts, Apache-2.0, attribution to YuJunZhiXue/dsh-purge) |
| 370 | [RyanZhangK/dsh-paper-translate](https://github.com/RyanZhangK/dsh-paper-translate) | 0 | 2026-11-02 | 2026-11-03 | 把 BabelDOC 包成 DSH 工具：整篇 PDF 文献翻译，先报成本再动手 |
| 371 | [Sad-Jack/dsh-resource-monitor](https://github.com/Sad-Jack/dsh-resource-monitor) | 0 | 2026-11-02 | 2026-11-03 | Compact macOS CPU, GPU, memory and Ollama model status in DeepSeek Harness |
| 372 | [sagedeng/dsh-plugins](https://github.com/sagedeng/dsh-plugins) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugins: DeepSeek cost lens + GitHub operations |
| 373 | [saltedfish-T/dsh-turn-clock](https://github.com/saltedfish-T/dsh-turn-clock) | 0 | 2026-11-03 | 2026-11-03 | Right-sidebar tab that lists every turn of a DSH session with its date and start time, and jumps the conversation to it. |
| 374 | [samorachumbi/dsh-media-reader](https://github.com/samorachumbi/dsh-media-reader) | 0 | 2026-11-03 | 2026-11-03 | Read local images, audio and video from DeepSeek Harness, including on text-only model routes. Ships a composer drag-and-drop target, a replication evidence pack, and a timecoded transcript pipeline. |
| 375 | [Saolence/dsh-restart-handoff](https://github.com/Saolence/dsh-restart-handoff) | 0 | 2026-11-03 | 2026-11-03 | 改完东西必须重启？它替你重启，再把对话接回原来的会话 —— Restart the DSH desktop host when a change requires it, then hand the conversation back to the same session. |
| 376 | [scccy/dsh-notes-board](https://github.com/scccy/dsh-notes-board) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 面板：把各工作区 .agents/notes 的工程决策笔记渲染成原版看板（承重墙 / 时间线 / 避坑智库 / 决策清单） |
| 377 | [Shane0315/dsh-session-filter](https://github.com/Shane0315/dsh-session-filter) | 0 | 2026-11-03 | 2026-11-03 | Cross-workspace activity sidebar for DeepSeek Harness. |
| 378 | [shellexy/dsh-inline-view-tabs](https://github.com/shellexy/dsh-inline-view-tabs) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness Web plugin: put the Chat / Trajectory View tabs on the header row, left of the right-side controls |
| 379 | [shi-YangYang/dsh-token-dashboard](https://github.com/shi-YangYang/dsh-token-dashboard) | 0 | 2026-10-27 | 2026-11-03 | 一款 DeepSeek Harness Token 用量统计与可视化插件，支持跨会话用量汇总、实时统计、历史趋势分析及模型级 Token 消耗追踪。 |
| 380 | [shshjjj456/dsh-mp4](https://github.com/shshjjj456/dsh-mp4) | 0 | 2026-11-03 | 2026-11-03 | MP4 / M4V / MOV preview in the DeepSeek Harness right sidebar — plays in the pane instead of "this file type cannot be previewed". |
| 381 | [Shullg/dsh-plugin-deepseek-web](https://github.com/Shullg/dsh-plugin-deepseek-web) | 0 | 2026-11-03 | 2026-11-03 | 将 DeepSeek 网页版（\`https://chat.deepseek.com\`）接入 DSH 桌面端侧边栏的插件。  在左侧工作区上方加了一个 "DS" 图标，点击后用 Electron 的 \`&lt;webview&gt;\` 在右侧打开网页版。不消耗 API 额度，直接用网页端的会话，支持免登录重连和跟随宿主主题。  非官方插件，与 DeepSeek 官方无关。不涉及绕过任何登录或额度限制。 |
| 382 | [sidleo/dsh-feishu-at](https://github.com/sidleo/dsh-feishu-at) | 0 | 2026-11-03 | 2026-11-03 | DSH 输入框飞书 @ 提及：@ 后模糊搜索飞书用户 / 群聊 / 部门，选中即插入名称块，模型侧附带名称、ID 与 ID 类型 |
| 383 | [Sillykjs/dsh-ntfy](https://github.com/Sillykjs/dsh-ntfy) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：回合结束后向自托管 ntfy 推送一条通知（Host-only bundle） |
| 384 | [siml1169/ShyPie](https://github.com/siml1169/ShyPie) | 0 | 2026-11-03 | 2026-11-03 | ShyPie — privacy-first workflow for DeepSeek Harness + Magpie: documents are converted to text locally and PII is replaced with placeholders before anything can reach a model or the session log. |
| 385 | [SivanCola/dsh-deepseek-search](https://github.com/SivanCola/dsh-deepseek-search) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: standalone-key DeepSeek web search — a left-sidebar search panel plus a deepseek_search tool for every model (独立 DeepSeek API Key) |
| 386 | [sky-mirrors/dsh-chaos-memory](https://github.com/sky-mirrors/dsh-chaos-memory) | 0 | 2026-11-03 | 2026-11-03 | Bitemporal long-term memory for DeepSeek Harness: every user turn is extracted, stored, and recalled automatically. |
| 387 | [SleepNap/dsh-session-inbox](https://github.com/SleepNap/dsh-session-inbox) | 0 | 2026-11-03 | 2026-11-03 | 提供入口，其他agent可以给dsh发消息了 |
| 388 | [Smartloe/dsh-catpaw](https://github.com/Smartloe/dsh-catpaw) | 0 | 2026-11-03 | 2026-11-03 | CatPaw (妙手) model bridge for DeepSeek Harness: 12 real models, per-model reasoning effort, harness-executed tool calling, and QR login without the desktop app. |
| 389 | [SoulZhou/dsh-background-studio](https://github.com/SoulZhou/dsh-background-studio) | 0 | 2026-11-03 | 2026-11-03 | Multi-style background plugin for DeepSeek Harness: six palettes, custom image or solid color, adjustable opacity, dedicated Background settings page. |
| 390 | [Ssshake1996/myterm](https://github.com/Ssshake1996/myterm) | 0 | 2026-08-08 | 2026-11-03 | Remote Ops for DeepSeek Harness: shared SSH/Telnet terminals, SFTP, browser automation, RESTful API environments and Windows desktop operations. |
| 391 | [ssuper1/dsh-model-behavior](https://github.com/ssuper1/dsh-model-behavior) | 0 | 2026-11-03 | 2026-11-03 | Model-aware behavior prompt injection for DeepSeek Harness: per-provider groups, per-model checkboxes and per-model prompt overrides. |
| 392 | [starry-start/dsh-relationship-graph](https://github.com/starry-start/dsh-relationship-graph) | 0 | 2026-11-03 | 2026-11-03 | An plugin for managing interpersonal relationships，AI-generated, primarily for personal use. An AI built-in plugin suite for interpersonal management, customizable to your own environment. This repository was initially created for personal use. If this repository unfortunately infringes on others' rights, I will delete it immediately.  |
| 393 | [Stopning/dsh-usage-stats](https://github.com/Stopning/dsh-usage-stats) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：会话 token 用量、成本估算、月度预算（鲸鱼水位）与宿主 CPU 监控仪表盘 |
| 394 | [StuMing233/dsh-desktop-restart-button](https://github.com/StuMing233/dsh-desktop-restart-button) | 0 | 2026-11-03 | 2026-11-03 | 桌面版 DeepSeek Harness 标题栏一键重启按钮，默认只在有任务运行时确认，避免误中断会话。 |
| 395 | [SunNorthGod/GLM-Hourness](https://github.com/SunNorthGod/GLM-Hourness) | 0 | 2026-11-03 | 2026-11-03 | Third-party DeepSeek Harness bundles: dsh-glm-zcode and dsh-hourness |
| 396 | [Sunshine334419520/smart-selection-translate](https://github.com/Sunshine334419520/smart-selection-translate) | 0 | 2026-10-30 | 2026-11-03 | Word-selection translator for DeepSeek Harness: dictionary entries with IPA and pronunciation for single words, machine translation for sentences. |
| 397 | [superchen061220/dsh-storage-insight](https://github.com/superchen061220/dsh-storage-insight) | 0 | 2026-11-03 | 2026-11-03 | Storage Insight for DeepSeek Harness: see what dsh occupies on this machine and reclaim only rebuildable caches. |
| 398 | [suveng/dsh-plugin-config-backup](https://github.com/suveng/dsh-plugin-config-backup) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 配置定时备份插件：侧边栏面板、自动定时备份、完成通知 |
| 399 | [SwufeFox/dsh-no-login](https://github.com/SwufeFox/dsh-no-login) | 0 | 2026-11-03 | 2026-11-03 | dont login for dsh |
| 400 | [SwufeFox/dsh-permission-no-confirm](https://github.com/SwufeFox/dsh-permission-no-confirm) | 0 | 2026-11-03 | 2026-11-03 | remove the confirm of permission switch |
| 401 | [szmdshagent/dsh-superagent-plugins](https://github.com/szmdshagent/dsh-superagent-plugins) | 0 | 2026-11-03 | 2026-11-03 | dsh-superagent 与派活面板的 DSH 插件市场索引与组合包 \| DSH plugin market index and bundles for dsh-superagent and its dispatch pane |
| 402 | [SZUold8/dsh-video-learning](https://github.com/SZUold8/dsh-video-learning) | 0 | 2026-11-03 | 2026-11-03 | Video study toolkit for DeepSeek Harness: fetch a public Bilibili single part or YouTube video, sample every 3 seconds plus change-triggered frames, transcribe locally with faster-whisper, page through section grids, and render a 16:9 study deck. Windows only; FFmpeg required; transcription and deck output need optional dependencies. |
| 403 | [TacitSay/dsh-compact-arsenal](https://github.com/TacitSay/dsh-compact-arsenal) | 0 | 2026-11-03 | 2026-11-03 | 可配置的上下文压缩插件：总压缩 / 思考压缩 / 工具输出压缩，带左栏面板（DeepSeek Harness） |
| 404 | [TangXinXian/dsh-chat-entry](https://github.com/TangXinXian/dsh-chat-entry) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek chat and platform entries for the DeepSeek Harness left sidebar. |
| 405 | [taoziliyouchong/dsh-pdf-jump](https://github.com/taoziliyouchong/dsh-pdf-jump) | 0 | 2026-10-28 | 2026-11-03 | 在 DSH 侧栏看本地 PDF：按页码跳页、整本浏览（缩略图先出、滚到哪页换高清），也可用原生预览直接打开。 |
| 406 | [taoziliyouchong/dsh-plc-decode](https://github.com/taoziliyouchong/dsh-plc-decode) | 0 | 2026-11-01 | 2026-11-03 | 在 DSH 里读 PLC 工程：CoDeSys .project、台达 .dvp、西门子 S7-200 SMART .smart/.smartlib 解码成可读报告与结构化数据，另带新旧对比、地址体检与连线还原。 |
| 407 | [taoziliyouchong/dsh-reload-buttons](https://github.com/taoziliyouchong/dsh-reload-buttons) | 0 | 2026-11-01 | 2026-11-03 | 在 DSH 界面左上角放两个图标按钮：刷新界面（插件清单过期时就地重同步，不白屏）与重启应用（桌面端关壳重开，dsh web 端结束内核）。 |
| 408 | [taoziliyouchong/dsh-session-autarchive](https://github.com/taoziliyouchong/dsh-session-autarchive) | 0 | 2026-11-01 | 2026-11-03 | 自动归档长期没动过的会话：默认 5 天，跳过已归档、置顶与「不自动归档」的名单；会话右键可标记单条，通用设置里改天数。 |
| 409 | [tihuzushi/dsh-phone-bridge](https://github.com/tihuzushi/dsh-phone-bridge) | 0 | 2026-11-02 | 2026-11-03 | HARNESS Phone：手机桥接 + 移动端界面，合成一个 DeepSeek Harness 插件 · Phone bridge + mobile shell UI as a single DSH plugin |
| 410 | [TINGOD2006/dsh-um-proxy-ondemand](https://github.com/TINGOD2006/dsh-um-proxy-ondemand) | 0 | 2026-10-25 | 2026-11-03 | On-demand local proxy for the University of Macau GenAI gateway: wakes only when DSH uses the um-genai provider, renews the token on a renewal clock, logs in on a hidden desktop, and is managed from a DSH settings page. |
| 411 | [tongsh6/dsh-tool-wait-until](https://github.com/tongsh6/dsh-tool-wait-until) | 0 | 2026-11-03 | 2026-11-03 | Event-driven wait for DeepSeek Harness: returns on completion, early failure or stall instead of burning a full timeout; blocks sleep-polling. |
| 412 | [top10xiaowangzi-byte/dsh-plugins](https://github.com/top10xiaowangzi-byte/dsh-plugins) | 0 | 2026-11-03 | 2026-11-03 | Two DeepSeek Harness plugins: an approval reminder with phone push, and a Windows AI-idle auto-shutdown panel. |
| 413 | [TSRYWHY/deepseek-time-price](https://github.com/TSRYWHY/deepseek-time-price) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek API time-of-day pricing, Chinese legal holidays, account balance and project spend in a draggable Harness floating window. |
| 414 | [tujuplayer/dsh-pet-float](https://github.com/tujuplayer/dsh-pet-float) | 0 | 2026-11-03 | 2026-11-03 | Always-on-top desktop pet ball for running DSH sessions: live status panel, thinking summary, pending-question alerts and one-click jump back to the conversation. |
| 415 | [UponNoise/dsh-code-review](https://github.com/UponNoise/dsh-code-review) | 0 | 2026-11-03 | 2026-11-03 | Unofficial Codex-style code review panel for DeepSeek Harness: local diffs, commits, and GitHub PRs with P0-P3 findings. |
| 416 | [VASIDM/dsh-plugins](https://github.com/VASIDM/dsh-plugins) | 0 | 2026-11-03 | 2026-11-03 | 插件 · DeepSeek Harness 插件合集 |
| 417 | [Veagau/dsh-account-vault](https://github.com/Veagau/dsh-account-vault) | 0 | 2026-11-03 | 2026-11-03 | Encrypted account vault plugin for DeepSeek Harness |
| 418 | [Veagau/dsh-amadeus-skin](https://github.com/Veagau/dsh-amadeus-skin) | 0 | 2026-11-03 | 2026-11-03 | An Amadeus-inspired theme and interface accents for DeepSeek Harness. |
| 419 | [Veagau/dsh-amadeus-workbench](https://github.com/Veagau/dsh-amadeus-workbench) | 0 | 2026-11-03 | 2026-11-03 | An Amadeus-inspired launch workbench for DeepSeek Harness. |
| 420 | [Veagau/dsh-countdown-days](https://github.com/Veagau/dsh-countdown-days) | 0 | 2026-11-03 | 2026-11-03 | Countdown days plugin for DeepSeek Harness |
| 421 | [veeduzyl-hue/mindforge-guard-labs-dsh-evidence-check](https://github.com/veeduzyl-hue/mindforge-guard-labs-dsh-evidence-check) | 0 | 2026-11-02 | 2026-11-03 | Deterministic, evidence-linked review of synthetic AI-agent claims for DeepSeek Harness. Built by MindForge Guard Labs. |
| 422 | [vEvergarden/dsh-plugin-token-audit](https://github.com/vEvergarden/dsh-plugin-token-audit) | 0 | 2026-11-03 | 2026-11-03 | Token usage audit plugin for DeepSeek Harness |
| 423 | [visitor257/dsh-travel-kit](https://github.com/visitor257/dsh-travel-kit) | 0 | 2026-11-03 | 2026-11-03 | Full backup, migration and disaster recovery for DeepSeek Harness - packs conversations, workspaces, plugins, settings and the directory/junction layout into a verified bundle with a readable report. |
| 424 | [Viyangle/dsh-opencode-model-sync](https://github.com/Viyangle/dsh-opencode-model-sync) | 0 | 2026-11-03 | 2026-11-03 | Keep the DSH model picker in sync with the live OpenCode Go model catalog - new models appear without a DSH release. |
| 425 | [voltarenyah/dsh-prompt-note](https://github.com/voltarenyah/dsh-prompt-note) | 0 | 2026-10-20 | 2026-11-03 | Session-bound pending-prompt list for DeepSeek Harness: write the next prompt in a right-sidebar tab while the agent is still working, then send it when the turn is done. |
| 426 | [Vossk123/dsh-local-radiance-server-controller](https://github.com/Vossk123/dsh-local-radiance-server-controller) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: control your LAN AMD inference server over SSH — GPU power limit, Radiance service (docker compose), image updates, shutdown/reboot, plus a live sidebar widget (decode/prefill t/s, CPU/GPU). 通过 SSH 远程控制局域网 AMD 推理服务器，全程仅一条常驻连接。 |
| 427 | [WA2124184/dsh-ai-trends-digest](https://github.com/WA2124184/dsh-ai-trends-digest) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：具身智能与 AI 大模型趋势日报（零依赖多源聚合，输出 Markdown/HTML） |
| 428 | [wake2008dingtalk-sys/dsh-plugin-scratchpad](https://github.com/wake2008dingtalk-sys/dsh-plugin-scratchpad) | 0 | 2026-11-03 | 2026-11-03 | A DeepSeek Harness plugin that adds a Scratchpad entry to the left sidebar with a locally saved notes panel. |
| 429 | [wangyueyueye/dsh-session-delete](https://github.com/wangyueyueye/dsh-session-delete) | 0 | 2026-11-03 | 2026-11-03 | 真正删除 DSH 会话：日志全部格式代、投影缓存、索引、插件数据、孤儿附件，可选覆盖擦除。 |
| 430 | [WangZW928/dsh-model-router-lite](https://github.com/WangZW928/dsh-model-router-lite) | 0 | 2026-11-03 | 2026-11-03 | 按任务类型为原生子 agent 提供模型选择建议；不自动授权。 Task-based model preferences for DSH subagents; no extra routing-model calls. |
| 431 | [Wattson-Law/Xiaobai-Reasearch](https://github.com/Wattson-Law/Xiaobai-Reasearch) | 0 | 2026-11-03 | 2026-11-03 | 面向个人开发者与团队公司的深度调研引擎（120+ 份标杆报告蒸馏 · 5 分钟看懂陌生赛道 · 包含自研成本核算与外部采购选型的科学抉择 · 出版级 Word 直出） |
| 432 | [wbj19552259912-netizen/dsh-teaching-mode](https://github.com/wbj19552259912-netizen/dsh-teaching-mode) | 0 | 2026-11-03 | 2026-11-03 | AI teaching mode for DeepSeek Harness — one mini-topic at a time, quiz right after, progress survives session switches. |
| 433 | [WickCrisp/dsh-oneshotNiko-widget](https://github.com/WickCrisp/dsh-oneshotNiko-widget) | 0 | 2026-11-02 | 2026-11-03 | A pet widget for harness |
| 434 | [wodaimnd/market-lens](https://github.com/wodaimnd/market-lens) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin market radar: aggregates 1024Store, dshfind, dsh.so, dshmarketplace and custom catalogs, checks DSH runtime compatibility from npm metadata, and offers Excel-like filtering in real desktop-style windows, resizable columns, scheduled refresh, installed-plugin update checks that never probe local/link installs, per-sync change badges, a s… |
| 435 | [wodaimnd/market-verdict](https://github.com/wodaimnd/market-verdict) | 0 | 2026-11-03 | 2026-11-03 | DSH 装前判定闸门 + 安装进度：装前做 tool/slot/service 冲突扫描与缓存成本估算，装中流式回放真实 pnpm 进度。功能插件，不做人工审核。 |
| 436 | [wth373737/dsh-plugin-mail-triage](https://github.com/wth373737/dsh-plugin-mail-triage) | 0 | 2026-10-31 | 2026-11-03 | IMAP mail triage and safe cleanup for DeepSeek Harness: read-only incremental scan, hard-protection rule layer plus optional local-model classification, a triage report and hashed manifest, an explicit approval card, then move-to-Trash only. |
| 437 | [wth373737/dsh-plugin-ollama-bridge](https://github.com/wth373737/dsh-plugin-ollama-bridge) | 0 | 2026-10-31 | 2026-11-03 | Local Ollama worker tools for DeepSeek Harness: bulk long-text jobs with deterministic verification and sampling labels. |
| 438 | [wumouren114/dsh-sidebar-shelf](https://github.com/wumouren114/dsh-sidebar-shelf) | 0 | 2026-11-03 | 2026-11-03 | Collapse every DSH left-sidebar panel entry into one clean, searchable shelf — open a panel only when you need it. 侧栏收纳架 |
| 439 | [xfgil/dsh-loop-guard](https://github.com/xfgil/dsh-loop-guard) | 0 | 2026-11-03 | 2026-11-03 | DSH 循环守卫：单轮工具调用上限、重复动作识别、长回合沉默播报。Caps tool calls per turn, detects repeated identical actions, and speaks up when a long turn has gone quiet without addressing the user. |
| 440 | [XHSecurity/dsh-tech-splash](https://github.com/XHSecurity/dsh-tech-splash) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek HARNESS 黑白科幻启动屏：官方鲸鱼徽标 + HUD 启动序列 + 合成音效，点击启动进入程序。 |
| 441 | [xianwins4ever-ux/dsh-pet-notepad](https://github.com/xianwins4ever-ux/dsh-pet-notepad) | 0 | 2026-11-03 | 2026-11-03 | DSH Web GUI 桌宠伴生记事本：右键桌宠弹出悬浮记事本，左侧栏入口查看/编辑。Host 侧 JSON 权威持久化，零构建、零依赖、抗桌宠更新。 |
| 442 | [xiaobaga281/dsh-mise](https://github.com/xiaobaga281/dsh-mise) | 0 | 2026-11-02 | 2026-11-03 | Mise — a film is a mise-en-scène. A DSH plugin that writes films as HTML pages, then measures, scores, checks, renders and delivers them itself. |
| 443 | [xiaohui-zhangxh/dsh-github-kanban](https://github.com/xiaohui-zhangxh/dsh-github-kanban) | 0 | 2026-11-03 | 2026-11-03 | GitHub issue kanban board for DeepSeek Harness (DSH): todo groups, drag-to-group, agent claim tools, and an animated issue relationship graph. |
| 444 | [xiaohui-zhangxh/dsh-session-handoff](https://github.com/xiaohui-zhangxh/dsh-session-handoff) | 0 | 2026-11-03 | 2026-11-03 | DSH 插件：常驻显示对话轮次，达到上限自动写交接文件并把任务转移到新会话继续 \| DeepSeek Harness plugin that hands the task off to a fresh session at a turn limit |
| 445 | [xiaoliuzhuan666/dsh-link-menu](https://github.com/xiaoliuzhuan666/dsh-link-menu) | 0 | 2026-11-03 | 2026-11-03 | Right-click menu for DeepSeek Harness chat links (reveal in Finder, copy path, open in browser) with accurate workspace path resolution |
| 446 | [xiaoxue-car/dsh-card-workbench](https://github.com/xiaoxue-car/dsh-card-workbench) | 0 | 2026-11-03 | 2026-11-03 | Card-based task orchestration for DeepSeek Harness. Split work into cards, watch execution, handle stalls, verify results, and adopt work conversations. |
| 447 | [xixi0v0/dsh-xixi-cost](https://github.com/xixi0v0/dsh-xixi-cost) | 0 | 2026-11-03 | 2026-11-03 | 在 DSH Web GUI 里显示每轮 / 整个会话消耗的人民币（按 DeepSeek 官方价目表估算） |
| 448 | [xsy822/dsh-emotion-memory](https://github.com/xsy822/dsh-emotion-memory) | 0 | 2026-11-03 | 2026-11-03 | 小世炎情绪记忆 0.1：PAD 情绪场 + 带情感指纹的记忆 |
| 449 | [XuanCenXuKe/dsh-ziwei-doushu](https://github.com/XuanCenXuKe/dsh-ziwei-doushu) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: open your local Zi Wei Dou Shu (紫微斗数) charting app with AI readings. |
| 450 | [XuChenXinXc/dsh-plugin-daily-summary](https://github.com/XuChenXinXc/dsh-plugin-daily-summary) | 0 | 2026-11-03 | 2026-11-03 | DSH插件之自动推送工作总结以及待办 |
| 451 | [YanYunCY/dsh-exit-code-lens](https://github.com/YanYunCY/dsh-exit-code-lens) | 0 | 2026-11-03 | 2026-11-03 | dsh plugin: tells the agent when a non-zero exit code is an answer (grep found nothing, diff differs, test false), not a failure, so it stops re-checking commands that worked. |
| 452 | [YanYunCY/dsh-gateway-notify](https://github.com/YanYunCY/dsh-gateway-notify) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (dsh) plugin: push to ntfy, Bark, Gotify, Server酱, Feishu, DingTalk, WeCom, Telegram or a webhook when a long agent turn ends, fails, or waits on approval. |
| 453 | [YanYunCY/dsh-relaycheck](https://github.com/YanYunCY/dsh-relaycheck) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness (dsh) plugin: relay_check tool that verifies an LLM API relay really serves the model it claims, powered by relaycheck. |
| 454 | [yanzoro926/dsh-btw](https://github.com/yanzoro926/dsh-btw) | 0 | 2026-11-03 | 2026-11-03 | btw - one-off context side questions for a DSH session: a temporary dialog that inherits the session, with selectable context range, quoted selections, and an optional compressed summary you can review and send into the main session. |
| 455 | [yelloooooooow/dsh-steer-anchor](https://github.com/yelloooooooow/dsh-steer-anchor) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: frame mid-task steering messages so the agent keeps the running task instead of treating an interjection as a fresh instruction. |
| 456 | [yffo/dsh-operator](https://github.com/yffo/dsh-operator) | 0 | 2026-10-31 | 2026-11-03 | 给每个 DSH 会话一双手：全局 Computer Use 插件（13 个桌面 GUI 工具 + 后台 code_agent，观察截图自动降 token，动作失败有校验提示） |
| 457 | [yin1895/dsh-wechat-remote](https://github.com/yin1895/dsh-wechat-remote) | 0 | 2026-11-03 | 2026-11-03 | 把个人微信变成 DeepSeek Harness 的遥控器与监视器：手机上看进展、发指令、接管会话（腾讯官方 ClawBot / iLink 配对）。WeChat remote control and progress monitor for DSH. |
| 458 | [yingqi-studio/dsh-panel-compact](https://github.com/yingqi-studio/dsh-panel-compact) | 0 | 2026-11-03 | 2026-11-03 | Keep three plugin panels in the DSH sidebar, drag to reorder them, and collect the rest into a More menu. 侧栏插件面板压缩：默认三个，可拖动排序，其余收进更多。 |
| 459 | [yizhuzhu-glitch/dsh-pet-mic-lite](https://github.com/yizhuzhu-glitch/dsh-pet-mic-lite) | 0 | 2026-11-03 | 2026-11-03 | 麦克风识别「摸摸」：手对着麦克风摸几下、停手 3 秒结算一次，把今天被摸了几次写进本地 count.json，供桌面宠物或角色读取。 |
| 460 | [YL404/dsh-sidebar-shelves](https://github.com/YL404/dsh-sidebar-shelves) | 0 | 2026-11-03 | 2026-11-03 | Two-line session cards for the DeepSeek Harness sidebar: project icons, pinning, archiving, status markers, job counts, and recency sorting |
| 461 | [yuanstarstar/dsh-meituan](https://github.com/yuanstarstar/dsh-meituan) | 0 | 2026-11-03 | 2026-11-03 | 外卖点餐助手（京东秒送 / 美团外卖）：让 DSH 翻附近商家、按口味挑店，把餐点到结算页，付款留给你自己点。不伪造请求、不改坐标。 |
| 462 | [yuhaoboris/dsh-usage-insights](https://github.com/yuhaoboris/dsh-usage-insights) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness plugin: token usage, estimated cost, budget and live CPU monitoring across real sessions. |
| 463 | [YuHe248118/dsh-aiyting-image-video](https://github.com/YuHe248118/dsh-aiyting-image-video) | 0 | 2026-11-03 | 2026-11-03 | AIyting 生图/生视频 · DeepSeek Harness 插件。当前提供图片生成、实时报价、任务恢复和账号管理；视频功能为二期。 |
| 464 | [yujiajie01/dsh-anime-schedule](https://github.com/yujiajie01/dsh-anime-schedule) | 0 | 2026-11-03 | 2026-11-03 | Seasonal Japanese anime broadcast calendar (Bangumi) as a right-sidebar tab in the DSH web UI, with hover details and links to authoritative anime databases. / DSH 右侧栏每日新番放送表,数据源 Bangumi,悬停看详情,点击跳权威站点。 |
| 465 | [yujiajie01/dsh-sleep-countdown](https://github.com/yujiajie01/dsh-sleep-countdown) | 0 | 2026-11-03 | 2026-11-03 | Sleep countdown for the DSH web UI: counts down to 23:30 on workdays in the composer dock, plays a chime when time is up, with snooze and mute. / DSH 网页端睡觉倒计时:工作日 23:30 截止,到点钟声提醒,可贪睡与静音。 |
| 466 | [Yume-Hatsuyuki/dsh-preset-studio](https://github.com/Yume-Hatsuyuki/dsh-preset-studio) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 的 Agent 预设扩展（可视化手动配置预设） |
| 467 | [yunhenk/dsh-cacheback](https://github.com/yunhenk/dsh-cacheback) | 0 | 2026-11-03 | 2026-11-03 | The missing receipt for DeepSeek prefix caching — replay local DSH sessions, price every call at official peak/off-peak rates, and see how much the cache saved. |
| 468 | [yuyun-git/dsh-meow-constellation](https://github.com/yuyun-git/dsh-meow-constellation) | 0 | 2026-11-03 | 2026-11-03 | 记忆星图：把 meow-memory 的七层 SQLite 记忆实时画成可拖拽、可点击、分层旋转的 3D 星图面板（DSH 插件） |
| 469 | [yy1588133/dsh-continue-button](https://github.com/yy1588133/dsh-continue-button) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 插件：会话中断后发送按钮变成「继续」按钮，一键续跑。 |
| 470 | [yyjsdsg/dsh-redact](https://github.com/yyjsdsg/dsh-redact) | 0 | 2026-11-03 | 2026-11-03 | Redact secrets, local paths, private IPs and personal data before you share or commit session text. |
| 471 | [yzyg6/dsh-splitview](https://github.com/yzyg6/dsh-splitview) | 0 | 2026-10-29 | 2026-11-03 | VSCode 风格的标签页与分屏，DeepSeek Harness 客户端插件 |
| 472 | [z1lyA/dsh-session-admin](https://github.com/z1lyA/dsh-session-admin) | 0 | 2026-11-03 | 2026-11-03 | DSH plugin: manage archived DeepSeek Harness sessions — batch unarchive and safe permanent deletion with attachment reference scanning. |
| 473 | [ZadAnthony/DSH-Projects](https://github.com/ZadAnthony/DSH-Projects) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 的本地项目协作插件：多会话协作、长期上下文、聊天记录与共享记忆。 |
| 474 | [ZCasual/dsh-context-diet](https://github.com/ZCasual/dsh-context-diet) | 0 | 2026-11-02 | 2026-11-03 | dsh-context-diet |
| 475 | [zeme56/dsh-landmarks](https://github.com/zeme56/dsh-landmarks) | 0 | 2026-11-03 | 2026-11-03 | Interactive 3D gallery of famous landmarks for DeepSeek Harness: a sidebar entry opens a three.js viewer for models shipped with the plugin. |
| 476 | [zeme56/dsh-style-studio](https://github.com/zeme56/dsh-style-studio) | 0 | 2026-11-03 | 2026-11-03 | Visual style studio for DeepSeek Harness: a sidebar panel that restyles the whole app with five skins (pixel, terminal, cyber, paper, aurora). |
| 477 | [zenmokandouhenshuai/dsh-notes-wall](https://github.com/zenmokandouhenshuai/dsh-notes-wall) | 0 | 2026-11-03 | 2026-11-03 | DeepSeek Harness 便签墙插件：左侧栏随手记、六色纸、置顶/重点，可固定到 Windows 桌面并始终置顶，数据落在本地 notes.json。Sticky notes wall for DeepSeek Harness. |
| 478 | [zgq0106/dsh-restart-wake](https://github.com/zgq0106/dsh-restart-wake) | 0 | 2026-11-03 | 2026-11-03 | Restart DeepSeek Harness safely and wake sessions automatically afterwards - agent tools, startup wake registry, mutex-guarded restart protocol. |
| 479 | [zhezhi33/dsh-session-recycle](https://github.com/zhezhi33/dsh-session-recycle) | 0 | 2026-11-02 | 2026-11-03 | 会话回收站与清理、子代理对话树管理、产物识别与资源管理器高亮，并提供文件用途查询的 Windows DSH 插件。 |
| 480 | [zhileyo/dsh-overview](https://github.com/zhileyo/dsh-overview) | 0 | 2026-11-01 | 2026-11-03 | DSH 全景概览插件：以工作区项目为维度的会话/任务仪表盘 |
| 481 | [Zhishulo/taptap-maker-builder](https://github.com/Zhishulo/taptap-maker-builder) | 0 | 2026-11-03 | 2026-11-03 | A DeepSeek Harness skill plugin for TapTap Maker: turn a game design brief into a playable, publishable project (UrhoX + Lua). |
| 482 | [ZhiX-Wang/dsh-tsinghua-course-sync](https://github.com/ZhiX-Wang/dsh-tsinghua-course-sync) | 0 | 2026-11-03 | 2026-11-03 | 清华网络学堂课程资料增量同步，按登录用户读取课程，使用默认浏览器和配套扩展，保存去重日志。 |
| 483 | [zhongguohaoqingnian-dev/kaoyan-math-review](https://github.com/zhongguohaoqingnian-dev/kaoyan-math-review) | 0 | 2026-11-03 | 2026-11-03 | 研数 · 考研数学复习：DeepSeek Harness 插件，数一 22 章 132 个考点 + 2011-2026 真题 + 做题日历 |
| 484 | [ZhouXiaoXian233/dsh-activity-heatmap](https://github.com/ZhouXiaoXian233/dsh-activity-heatmap) | 0 | 2026-11-03 | 2026-11-03 | 在 deepseek harness 实现一个使用状态的活动热力图插件。 |
| 485 | [ZiFeng11/dsh-playmate](https://github.com/ZiFeng11/dsh-playmate) | 0 | 2026-11-03 | 2026-11-03 | 陪玩插件：看屏幕 / 热键语音输入 / 念出来（不含声音模型） |
| 486 | [zmy1006-sudo/dsh-project-atlas](https://github.com/zmy1006-sudo/dsh-project-atlas) | 0 | 2026-11-03 | 2026-11-03 | A colorful tag wall of recent projects in the DeepSeek Harness sidebar: numbered tags with type logos that unfold into date, summary, hours, cost and next steps on hover. |
| 487 | [zmy15/dsh-plugin-git-status](https://github.com/zmy15/dsh-plugin-git-status) | 0 | 2026-11-03 | 2026-11-03 | 为 DeepSeek Harness 提供 Git 状态提示，支持分支切换、最近提交与未提交改动展示，并安全处理工作区改动。Git status for DeepSeek Harness with branch switching, latest commit details, uncommitted changes, and safe dirty-worktree protection. |
| 488 | [zmy15/dsh-plugin-retry-backoff](https://github.com/zmy15/dsh-plugin-retry-backoff) | 0 | 2026-10-27 | 2026-11-03 | DSH 插件：模型请求遇到 429 / 限流等可重试失败时，按自定义指数退避自动延长重试轮次与等待时间，直到请求成功。网页端与桌面端共用同一份设置。 |
| 489 | [zmz123612/dsh-book-deconstruct](https://github.com/zmz123612/dsh-book-deconstruct) | 0 | 2026-11-03 | 2026-11-03 | DSH Host plugin: /book slash command + book_deconstruct for full book walkthroughs. |
| 490 | [zxbingoo/harness-codex-cli-link](https://github.com/zxbingoo/harness-codex-cli-link) | 0 | 2026-11-03 | 2026-11-03 | Connect DeepSeek Harness to Codex CLI using its existing authentication and provider configuration, with Harness-owned tools. |
| 491 | [zyileven/dsh-settings-sidebar](https://github.com/zyileven/dsh-settings-sidebar) | 0 | 2026-11-03 | 2026-11-03 | Show or hide sidebar panel entries and add shortcuts to Settings sections in DeepSeek Harness. |
| 492 | [zz0-0/dsh-balance](https://github.com/zz0-0/dsh-balance) | 0 | 2026-11-02 | 2026-11-03 | DeepSeek Harness web plugin: live account balance, peak/off-peak pricing window, and per-conversation/workspace cost estimates. |
| 493 | [zz0-0/dsh-tab-indicator](https://github.com/zz0-0/dsh-tab-indicator) | 0 | 2026-11-02 | 2026-11-03 | Running/done count badge on the DSH browser tab |
| 494 | [Zzzk187/dsh-file-state-cache](https://github.com/Zzzk187/dsh-file-state-cache) | 0 | 2026-11-03 | 2026-11-03 | A DeepSeek Harness skill that caches file state on disk: one exploration call instead of ls+grep+read, reads that remember they already happened, and edits that return a diff instead of forcing a full re-read. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 15372010668-dot/dsh-bluewhale-pet
- 1834395550/dsh-chat-search
- 1834395550/dsh-session-tabs
- 2160039878-cyber/dsh-plugin-market
- 266767398/lingshu-skill
- aisubei/CHAJIAN
- AlwaysFyo/dsh-overview
- Aquarius07212/dsh-plugin-effort-panel
- Dogtiti/dsh-plugin-composer-history
- Dogtiti/dsh-plugin-composer-predict
- Dogtiti/dsh-plugin-provider-icons
- Dogtiti/dsh-plugin-subagent-bridge
- Dogtiti/dsh-plugin-usage-panel
- EternalNight996/dsh-pixel-team
- Furdavus/dsh-uyghurche-ui
- greatZhaoFD/dsh-approval-alert
- HJ1H/dsh-tool-scheduler
- huangrx6/dsh-plugin
- hxh230802/dsh-msp
- hxh230802/dsh-tray-restart
- jiuwu02/dsh-token-ledger
- li906912102/dsh-team-dev
- LingYuYo/dsh-qq-bridge
- PerryLink/dsh-catalog
- raoain/dsh-notebook
- rootAyaka/dsh-think-command
- snnnnke/dsh-folder-launcher
- tallahandsome-ux/dsh-fetch-third-party
- wytyKen/dsh-whale-life
- xiaozqi/dsh-dfy-mirror
- xkk6663/dsh-elab-cockpit
- YUEEEEY/dsh-desktop-tools
- yueyexiayu/dsh-bingxing
- yueyexiayu/dsh-gongjuyasuo
- yueyexiayu/dsh-jiupian
- yueyexiayu/dsh-piliang
- yueyexiayu/dsh-xuxie
- zhaolianghz/dsh-turnscope
- ZK-Andy/dotnet-deepseek-harness-desktop
- ZK-Andy/dsh-frecency
