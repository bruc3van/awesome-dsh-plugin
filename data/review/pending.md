# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-30**
- 快照日期 / Snapshot date: **2026-10-30 (UTC)**
- 待审核 / Pending: **430**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **45**
- Star 异常增长 / Star-growth alerts: **10** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-29** / vs previous snapshot **2026-10-29**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **10**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [SISCHOI/daruma](https://github.com/SISCHOI/daruma) | 待审 / pending | 114 | +53 | 0 | 63d | 待审高星 | 核准即榜 #175；高星零 fork |
| ⚠️ [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | 待审 / pending | 2347 | — | 99 | 4d | 待审高星 | 核准即 Top 14 |
| ⚠️ [ZipengWu365/TOMC](https://github.com/ZipengWu365/TOMC) | 待审 / pending | 266 | — | 25 | 23d | 待审高星 | 核准即榜 #86 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 52681 | +1877 | 1438 | 35d | 日增百星 | 日增 +1877★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 4098 | +207 | 92 | 74d | 日增百星 | 日增 +207★ |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 4892 | +185 | 332 | 27d | 日增百星 | 日增 +185★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 9845 | +150 | 380 | 76d | 日增百星 | 日增 +150★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 6327 | +136 | 314 | 77d | 日增百星 | 日增 +136★ |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 5015 | +128 | 396 | 76d | 日增百星 | 日增 +128★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 4634 | +120 | 414 | 22d | 日增百星 | 日增 +120★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [ccch1mneyyy/dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) ⚠️ | 2347 | 2026-10-25 | 2026-10-30 | dsh-go — DeepSeek Harness 装进口袋：手机本机运行，也能遥控你的电脑。 |
| 2 | [ZipengWu365/TOMC](https://github.com/ZipengWu365/TOMC) ⚠️ | 266 | 2026-10-06 | 2026-10-30 | TOMC Memory: CPU context compression and task memory for Codex, Claude Code, Cursor, TRAE, WorkBuddy and other MCP clients. |
| 3 | [SISCHOI/daruma](https://github.com/SISCHOI/daruma) ⚠️ | 114 | 2026-08-27 | 2026-10-30 | 一个dsh的断路重连器，针对长任务的网络/大模型api接口波动，防止任务停滞；切换不同渠道和模型继续完成任务。支持web和cli。 |
| 4 | [Elio896/dsh-familiar-memory](https://github.com/Elio896/dsh-familiar-memory) | 78 | 2026-10-28 | 2026-10-30 | 给 DeepSeek Harness 的本地记忆层：养大肥鱼的可以下载来玩，经过测试下载之后比单纯用RAG和外部记忆库更有人情味更自然了。 |
| 5 | [op7418/dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) | 24 | 2026-10-30 | 2026-10-30 | 歸藏设计 · DeepSeek Harness 插件：网页 PPT、图文卡片、网页排版、去 AI 味四个 skill，一套设计系统；作品库、内容生产工作流、语气档案 |
| 6 | [555bbbAAA/dsh-purge](https://github.com/555bbbAAA/dsh-purge) | 10 | 2026-10-20 | 2026-10-30 | 基于上游 1.1.71 维护的 dsh-purge 社区兼容包：只负责 DeepSeek Harness 的版本与本地 Windows 运行问题兼容。 |
| 7 | [XiangyuYue/boardwise](https://github.com/XiangyuYue/boardwise) | 10 | 2026-09-22 | 2026-10-30 | AI harness for EasyEDA Pro — offline schematic/PCB design review, live bridge (daemon + editor extension), review-to-local-edit with verified persistence |
| 8 | [martinbear1/dsh-wechat-remote](https://github.com/martinbear1/dsh-wechat-remote) | 9 | 2026-08-18 | 2026-10-30 | DSH 微信小程序远程控制插件：微信 openid 一对一身份绑定，官方插件规范一键安装 |
| 9 | [MeteorNOX/dsh-whale-bongo](https://github.com/MeteorNOX/dsh-whale-bongo) | 6 | 2026-10-30 | 2026-10-30 | QQ 弹弹的类 bongo 手手挂件 |
| 10 | [321sssrt-bit/STOP-PUSHING-SHIT](https://github.com/321sssrt-bit/STOP-PUSHING-SHIT) | 5 | 2026-10-27 | 2026-10-30 | 禁止倒屎：推送代码与创建 GitHub 内容前，先审阅，再授权一次。 |
| 11 | [DandanLLab/dsh-channel-qq](https://github.com/DandanLLab/dsh-channel-qq) | 5 | 2026-09-26 | 2026-10-30 | dsh（DeepSeek Harness）的 QQ 群聊/私聊通道插件，基于 OneBot v11（NapCat）。 把 QQ 的世界映射进 Agent 上下文，把行动权交给 Agent 本身——插件不做任何代答。 |
| 12 | [epsilonH-eps/dsh-tts-bridge-wechatagent-bridge](https://github.com/epsilonH-eps/dsh-tts-bridge-wechatagent-bridge) | 4 | 2026-10-28 | 2026-10-30 | 把 朗读桥（dsh-tts-bridge）念出来的声音，变成真正的微信语音条，发到当前微信聊天 |
| 13 | [jitianjiyan/dsh-auth-cookie-guard](https://github.com/jitianjiyan/dsh-auth-cookie-guard) | 4 | 2026-10-30 | 2026-10-30 | 为本地监听器预留足够的请求头预算，并在启动后退休旧启动 cookie，避免桌面欢迎握手被 431 永久锁死。 |
| 14 | [Morgiana-V3/dsh-feed-the-seek](https://github.com/Morgiana-V3/dsh-feed-the-seek) | 4 | 2026-10-30 | 2026-10-30 | 大肥鱼饲养手册 |
| 15 | [ridistant8-art/dsh-cookie-meter](https://github.com/ridistant8-art/dsh-cookie-meter) | 4 | 2026-10-29 | 2026-10-30 | 大肥鱼出品 · DSH 桌面版登录 cookie 百分表：浮窗显示请求头占用百分比（过半变红），带一键清理按钮，防止启动 72 次后被 431 挡住。 |
| 16 | [suiyideali/dsh-selection-toolbar](https://github.com/suiyideali/dsh-selection-toolbar) | 4 | 2026-08-18 | 2026-10-30 | 在 DeepSeek Harness 会话里划选文本，选区上方浮现一个小工具栏： 复制 · 引用 · 询问 · 解释 · 翻译 · 总结 · 自定义。  所有 AI 动作都复用当前会话——选中文本作为普通用户消息注入当前对话， 模型带着完整上下文作答。 |
| 17 | [curo22/dsh-wb400-guard](https://github.com/curo22/dsh-wb400-guard) | 3 | 2026-10-30 | 2026-10-30 | Fix WorkBuddy CN gateway 400 / code 11128 in DeepSeek Harness by rewriting @ in system messages at the fetch layer |
| 18 | [dongliuwuzhong-arch/DSH-purge](https://github.com/dongliuwuzhong-arch/DSH-purge) | 3 | 2026-10-17 | 2026-10-30 | DeepSeek Harness 0.2.1-rc.3 破甲/清理插件（dsh-purge 分支）：82 条补丁、逐字节可回滚备份、灵魂闸门、31 条单元测试 \| DSH jailbreak + patch/uninstall toolkit for 0.2.1-rc.3 |
| 19 | [QoderAI/dsh-qoder-cloud-agents](https://github.com/QoderAI/dsh-qoder-cloud-agents) | 3 | 2026-10-29 | 2026-10-30 | DeepSeek Harness plugin for running sessions and delegated tasks in Qoder Cloud Agents sandboxes, with cloud mode, repository mounting, and multi-turn conversations. |
| 20 | [wangkaxds/dsh-aurora-wallpaper](https://github.com/wangkaxds/dsh-aurora-wallpaper) | 3 | 2026-08-15 | 2026-10-30 | 🔥 Wallpaper Engine 动态壁纸 × DeepSeek Harness：场景壁纸浏览器原生渲染（HLSL→GLSL 转译），视频壁纸零转码直连 —— 你的 AI 界面背景活起来 |
| 21 | [aa1355721445-lgtm/dsh-daily-schedule](https://github.com/aa1355721445-lgtm/dsh-daily-schedule) | 2 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 每日日程插件：每晚生成角色第二天的全天日程，几点在哪、做什么、穿什么带进每次对话；可联动 dsh-image-studio 配穿搭和自拍 |
| 22 | [epsilonH-eps/dsh-wechat-wake](https://github.com/epsilonH-eps/dsh-wechat-wake) | 2 | 2026-10-28 | 2026-10-30 | 给微信里的 agent 一组自己的定时工具：到点它自己醒过来说话，说的话直接落进当前微信聊天。授权仍由 WeChatAgent 按聊天勾选。 |
| 23 | [ethan741205/dsh-strata-sync](https://github.com/ethan741205/dsh-strata-sync) | 2 | 2026-10-29 | 2026-10-30 | DSH plugin with a UI to synchronize model context and safe compaction budgets with Strata Server. |
| 24 | [goatliamia/trajectory-tree](https://github.com/goatliamia/trajectory-tree) | 2 | 2026-09-05 | 2026-10-30 | Visualize and diagnose agent trajectories across DSH, Pi and Codex: execution paths, context composition, tool use and evidence-based analysis. |
| 25 | [hxxhxhxx/ieee-weekly](https://github.com/hxxhxhxx/ieee-weekly) | 2 | 2026-10-29 | 2026-10-30 | IEEE Xplore 期刊 Early Access 关键词周报：Crossref 抓新收录 → LLM 逐篇研判 → Markdown / 邮件 |
| 26 | [kdcadmin/dsh_qzone_sticker](https://github.com/kdcadmin/dsh_qzone_sticker) | 2 | 2026-10-28 | 2026-10-30 | 给 DeepSeek Harness 用的 QQ 空间插件。它在本机静默起一份专属 Chrome（headless，不占你屏幕），第一次用手机 QQ 扫码登录；之后不用你开浏览器、不用你点按钮——模型可以自己挑时机发说说，还能配上表情包图片，每天发几条、两条隔多久、公开还是仅自己，都能设。 |
| 27 | [moyu474/dsh-qqbridge](https://github.com/moyu474/dsh-qqbridge) | 2 | 2026-10-24 | 2026-10-30 | 把 QQ 接入 DSH 的部署插件。带 lite 模式（¥0.001/次）。 |
| 28 | [narrastory/retro-music-toolkit](https://github.com/narrastory/retro-music-toolkit) | 2 | 2026-10-28 | 2026-10-30 | A deterministic 8/16-bit game music workstation for AI agents. Write JSON scores, validate harmony, render offline WAV — no model, no API key. 给 AI 用的 8bit/16bit 游戏音乐工作台：写乐谱，不是抽卡。 |
| 29 | [prophetcrab/dsh-qqbot](https://github.com/prophetcrab/dsh-qqbot) | 2 | 2026-10-30 | 2026-10-30 | QQ bot control center for DeepSeek Harness: one-click NapCat/Koishi setup, message monitor, permissions, and AI chat with personas/memory. |
| 30 | [suwenner/dsh-live2d-theme](https://github.com/suwenner/dsh-live2d-theme) | 2 | 2026-10-30 | 2026-10-30 | A beautification/skin pack plugin for DSH, supporting replacement of Live2D models, changing backgrounds, and more.（一个DSH的美化插件，支持live2d模型替换，更换背景和主题颜色等） |
| 31 | [wld12314/agent-web-sandbox](https://github.com/wld12314/agent-web-sandbox) | 2 | 2026-10-28 | 2026-10-30 | Personal agent web-browsing sandbox for DeepSeek Harness: sanitizes fetched web content and scans third-party pages for prompt injection (DSH desktop plugin). |
| 32 | [xiebaiyuan/CatDogTrace](https://github.com/xiebaiyuan/CatDogTrace) | 2 | 2026-10-17 | 2026-10-30 | 用一套数字指纹归因流程，把候选换成狗猫品种。附对照组：与库内任何品种都无生成关系的均匀随机整数，同样拿到 81.73%~99.999% 的品种族概率。 |
| 33 | [1010231693/dsh-prompt-bar](https://github.com/1010231693/dsh-prompt-bar) | 1 | 2026-10-23 | 2026-10-30 | Persistent first-prompt bar above the DSH conversation: copy it, open a panel of every prompt you sent, click a row to jump straight to it, ten switchable looks including four light ones |
| 34 | [1368546410qq/dsh-video-skills](https://github.com/1368546410qq/dsh-video-skills) | 1 | 2026-10-29 | 2026-10-30 | A DSH plugin: browse 373 agentic video-production skills and install one into ~/.claude/skills or ~/.dsh/skills with one click.    DSH 插件：在设置里浏览 awesome-claude-video-skills 的 373 个视频制作技能，一键装进 ~/.claude/skills 或 ~/.dsh/skills。 |
| 35 | [1583477320/remote-dsh](https://github.com/1583477320/remote-dsh) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: run a remote DSH inside the desktop app window (SSH bootstrap, auto-install, loopback gateway, embedded panel) |
| 36 | [2424830124/dsh-memory](https://github.com/2424830124/dsh-memory) | 1 | 2026-10-29 | 2026-10-30 | dsh 可自定义结构的记忆插件 |
| 37 | [447662/dsh-native-codex-cli](https://github.com/447662/dsh-native-codex-cli) | 1 | 2026-10-03 | 2026-10-30 | Drive Codex from DeepSeek Harness: DSH owns the chat UI, Codex CLI owns task execution and native thread history - no second AI in the loop. |
| 38 | [Aizai9527/dsh-session-finder](https://github.com/Aizai9527/dsh-session-finder) | 1 | 2026-10-30 | 2026-10-30 | Search every DSH chat session and jump to the matched message. 跨会话搜索 DSH 聊天记录并跳到命中的那条消息。 |
| 39 | [Blueteemo/dsh-smart-namer](https://github.com/Blueteemo/dsh-smart-namer) | 1 | 2026-10-30 | 2026-10-30 | Smart naming for DeepSeek Harness sessions and workspaces — short names from the item's own content, one click to rename. |
| 40 | [chargeduck/xechat-dsh](https://github.com/chargeduck/xechat-dsh) | 1 | 2026-10-26 | 2026-10-30 | DSH 侧边栏聊天插件：在 DeepSeek Harness 里常驻一条可停靠的 XEChat 鱼塘会话——Markdown 图文与表情、#showServer/#login 切服、在线成员、全屏遮盖，单条 WebSocket 保活。Dockable XEChat chat sidebar for DeepSeek Harness (DSH). |
| 41 | [Chasterccj/dsh-narrator](https://github.com/Chasterccj/dsh-narrator) | 1 | 2026-10-30 | 2026-10-30 | DSH plugin: plain-language narration, an uncertainty gate, and mid-run interruption policy for DeepSeek Harness agents. |
| 42 | [chenzhiya77/dsh-harness-rag](https://github.com/chenzhiya77/dsh-harness-rag) | 1 | 2026-10-26 | 2026-10-30 | Harness RAG for DeepSeek Harness: three-path retrieval, document continuation reading and a knowledge-base panel. |
| 43 | [cuteG41cute/dsh-mobile](https://github.com/cuteG41cute/dsh-mobile) | 1 | 2026-10-06 | 2026-10-30 | Bring your local DeepSeek Harness WebUI to your phone: LAN proxy bridge, mobile UI adaptation, device approval, and a native Android shell. |
| 44 | [deepseekv41flash/dsh-multi-shell](https://github.com/deepseekv41flash/dsh-multi-shell) | 1 | 2026-10-30 | 2026-10-30 | 一个 DSH（DeepSeek Harness）插件：只注册一个 shell 工具，但让模型在每次调用时自己选后端—— Git Bash（默认）、PowerShell、WSL。 |
| 45 | [elalamiimed/dsh-connectome](https://github.com/elalamiimed/dsh-connectome) | 1 | 2026-10-30 | 2026-10-30 | Connectome — an interactive, canvas-rendered map of a DeepSeek Harness workspace's files and their imports (DSH plugin) |
| 46 | [elfgzp/dsh-branch-worktree](https://github.com/elfgzp/dsh-branch-worktree) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: pick a Git branch (or create one) on the New Session screen and start the conversation inside an automatic worktree. |
| 47 | [epsilonH-eps/dsh-nest](https://github.com/epsilonH-eps/dsh-nest) | 1 | 2026-10-28 | 2026-10-30 | 给 DSH 装一个「巢」：在设置里用下拉框安排会话从属，母会话就能像调 agent 一样访问子会话 —— 原地唤醒、问一句、拿回答，不复制历史、不改会话树。 |
| 48 | [Feiyu180/dsh-ntr-plus](https://github.com/Feiyu180/dsh-ntr-plus) | 1 | 2026-10-30 | 2026-10-30 | dsh-ntr 0.1.5 的个人构建版：普通对话可直接切到 CodeBuddy / Claude Code 等 ACP agent 的模型，首次切换自动带上会话历史。 |
| 49 | [frisk325/dsh-rice-mode](https://github.com/frisk325/dsh-rice-mode) | 1 | 2026-10-30 | 2026-10-30 | DSH 插件：无限大白饭模式。三档切换（关/本轮/常开），控制要不要往系统提示里注入「别省 token」的指令。 |
| 50 | [g34y0r/dsh-deepseek-balance](https://github.com/g34y0r/dsh-deepseek-balance) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek API 余额，常驻在 dsh 输入框旁边。零配置、零 token 成本。 |
| 51 | [ggfgfgf-on/dsh-mdl-promptboost](https://github.com/ggfgfgf-on/dsh-mdl-promptboost) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness bundle: engineered execution-intensity system prompt, configurable in the plugin manager. |
| 52 | [GIT121995/dsh-feiyu-wardrobe](https://github.com/GIT121995/dsh-feiyu-wardrobe) | 1 | 2026-10-30 | 2026-10-30 | 🐋 大肥鱼衣橱 — DSH 插件：token 花销变鱼粮，解锁 21 件原创换装 + 1080×1440 饲养报告卡（纯本地，零额外模型调用） |
| 53 | [good-saltfish/dsh-auto-rerun](https://github.com/good-saltfish/dsh-auto-rerun) | 1 | 2026-10-30 | 2026-10-30 | Keep a DSH turn alive across provider hiccups: in-session auto retry until success, model fallback with dead-route guard, right-sidebar status panel |
| 54 | [huajiang114514/dsh-music-companion](https://github.com/huajiang114514/dsh-music-companion) | 1 | 2026-10-30 | 2026-10-30 | 陪听：DSH 插件。读 Windows 系统媒体会话（QQ音乐/网易云/Spotify 挂后台都行），一换歌就让她讲自己的感受，并记听歌流水与口味。 |
| 55 | [Imzl-zl/deepseek-harness-mobile](https://github.com/Imzl-zl/deepseek-harness-mobile) | 1 | 2026-09-30 | 2026-10-30 | 把 DeepSeek Harness 装进手机：手机端 App + 电脑侧 DSH 插件 + 公网中转（端到端加密） |
| 56 | [Jerry113245/dsh-cnki-agent](https://github.com/Jerry113245/dsh-cnki-agent) | 1 | 2026-10-30 | 2026-10-30 | CNKIAgent：DeepSeek Harness 知网论文研究助手插件。通过 dsh-browser-cdp 驱动本机 Edge 真实检索知网，按核心期刊编辑视角精读，分步写作（大纲→引言→正文→校订），并带右侧栏文献库面板。 |
| 57 | [Jessicaisleep/dsh-genshin-pet](https://github.com/Jessicaisleep/dsh-genshin-pet) | 1 | 2026-10-30 | 2026-10-30 | 两只原神同人桌宠（哥伦比娅 / 纳西妲）的 DeepSeek Harness 插件：代码派生自 dsh-pet（MIT），角色素材不在 MIT 范围内 |
| 58 | [JiahaoXxX/dsh-model-pool](https://github.com/JiahaoXxX/dsh-model-pool) | 1 | 2026-10-30 | 2026-10-30 | Provider-level model pool for DSH — virtual ModelPool provider with Auto and named pools, chain failover a→b→c→d, per-source cooldown bench, reasoning-effort aware. |
| 59 | [jkrhug/dsh-easyrestart](https://github.com/jkrhug/dsh-easyrestart) | 1 | 2026-10-25 | 2026-10-30 | 给deepseek harness添加更方便快捷的重启方式 Add a more convenient and efficient restart method to the deepseek harness |
| 60 | [KERBALMans/dsh-plugin-studio](https://github.com/KERBALMans/dsh-plugin-studio) | 1 | 2026-10-30 | 2026-10-30 | 插件工坊 Plugin Studio for DeepSeek Harness — 三级自动分类、批量删除、AI 大白话讲解、最后使用时间、技能管理、一键打包 |
| 61 | [kevindawn11-hash/dsh-cookie-guard](https://github.com/kevindawn11-hash/dsh-cookie-guard) | 1 | 2026-10-30 | 2026-10-30 | Cap DSH desktop session cookie lifetime to avoid HTTP 431 / Web authentication failed startup crash. 修复 DSH 桌面端 dsh-auth-* cookie 累积导致的启动崩溃。 |
| 62 | [keyblues/dsh-fofatoto](https://github.com/keyblues/dsh-fofatoto) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness (DSH) 插件：fofatoto —— FOFA 网络空间测绘（额度查询/语句检索/全量导出），原生 Agent 工具，插件页配置 API Key。 |
| 63 | [kumiiwaka/dsh-intercom](https://github.com/kumiiwaka/dsh-intercom) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 的窗口内线电话 —— 让已经开着的会话窗口互相喊话，不建团队、不生新会话 |
| 64 | [kuroi-kid/dsh-memory-sea](https://github.com/kuroi-kid/dsh-memory-sea) | 1 | 2026-10-29 | 2026-10-30 | 不是 RAG，是一片会遗忘的海——DeepSeek Harness 侧栏插件。每条记忆有自己的半衰期（人格 180 天、事件 10 天），检索按「相似度 × 能量」排序，久未提起的重要事不会沉底。 |
| 65 | [L-Shy-P/dsh-preset-manager](https://github.com/L-Shy-P/dsh-preset-manager) | 1 | 2026-10-30 | 2026-10-30 | DSH（DeepSeek Harness）桌面端的 Agent 预设管理器：顶栏切换预设、按预设注入工具引导、子代理预设策略、预设包导入导出，并附带「标准模式·加强版」预设。Agent preset manager for DeepSeek Harness. |
| 66 | [Light-EI/dsh-ebbing-context](https://github.com/Light-EI/dsh-ebbing-context) | 1 | 2026-10-28 | 2026-10-30 | 模拟记忆衰退的 DSH 分层上下文压缩插件：原文 → L1 → L2 → L3，越旧分辨率越低，但从不删除。 |
| 67 | [liuyun2025/dsh-token-rmb](https://github.com/liuyun2025/dsh-token-rmb) | 1 | 2026-10-30 | 2026-10-30 | Inline per-turn token cost in CNY for DeepSeek Harness |
| 68 | [makooslee/dsh-company](https://github.com/makooslee/dsh-company) | 1 | 2026-10-29 | 2026-10-30 | A tiny company of employee agents for DeepSeek Harness — each has its own identity, model and skills, and they bid for work instead of being piped through it. |
| 69 | [nhyo/dsh-maa-cli](https://github.com/nhyo/dsh-maa-cli) | 1 | 2026-10-29 | 2026-10-30 | DeepSeek Harness plugin for controlling maa-cli with natural language and local commands |
| 70 | [OldQin-Aurora001/dsh-breeze-tts](https://github.com/OldQin-Aurora001/dsh-breeze-tts) | 1 | 2026-10-29 | 2026-10-30 | Breeze TTS for DeepSeek Harness (DSH): AI auto-read plus voice workshop (design/clone/manage voices) |
| 71 | [overflow7782/dsh-plugin-novel-reader](https://github.com/overflow7782/dsh-plugin-novel-reader) | 1 | 2026-10-29 | 2026-10-30 | 摸鱼小说阅读器 for DeepSeek Harness：状态栏悬停速览 + 侧边栏阅读 |
| 72 | [ownduck/dsh-skill-experts](https://github.com/ownduck/dsh-skill-experts) | 1 | 2026-10-26 | 2026-10-30 | Manage skill experts in the sidebar and summon them from the composer or @ menu |
| 73 | [President-H/dsh-balance-view](https://github.com/President-H/dsh-balance-view) | 1 | 2026-10-30 | 2026-10-30 | 一个能让大肥鱼自动查看余额的插件。你直接在QQ里问她：帮我查一下余额，她就能报出来数字。 |
| 74 | [qiaozheng9/dsh-delete-session](https://github.com/qiaozheng9/dsh-delete-session) | 1 | 2026-10-30 | 2026-10-30 | Permanent conversation deletion for DeepSeek Harness Desktop 0.2.1-rc.5. Native confirmation, subagent cleanup, recovery and uninstall. |
| 75 | [qizhuxu/dsh-upm](https://github.com/qizhuxu/dsh-upm) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness native plugin for ui-ux-pro-max: bundled skill data, native search / design-system tools, auto re-vendor from upstream |
| 76 | [Royalsan/dsh-github-trending](https://github.com/Royalsan/dsh-github-trending) | 1 | 2026-10-30 | 2026-10-30 | A long-lived Cordis plugin for DeepSeek Harness: it scrapes GitHub Trending (daily / weekly / monthly, optionally filtered by programming language), runs a structured analysis on every repository (summary, star growth, tech stack, highlights, risks), and renders the result as a browsable, pageable, filterable card report inside the Harness Web UI. |
| 77 | [Sdongmaker/vpshub](https://github.com/Sdongmaker/vpshub) | 1 | 2026-08-13 | 2026-10-30 | VPS Hub for DeepSeek Harness: SSH ledger plugin — agents discover, test, execute on, and transfer files to your cloud servers. Keys stay local as path references. |
| 78 | [seally-web/dsh-matlab-runner](https://github.com/seally-web/dsh-matlab-runner) | 1 | 2026-10-30 | 2026-10-30 | MATLAB in the DeepSeek Harness sidebar: VS Code-like .m editor, warm MATLAB session (figures open), workspace variables, .mlx preview, matlab_run agent tool. |
| 79 | [shadowRjh/dsh-neuron-memory](https://github.com/shadowRjh/dsh-neuron-memory) | 1 | 2026-10-30 | 2026-10-30 | Neuron-inspired memory framework + 3D neuron star-ring panel for DeepSeek Harness. |
| 80 | [SongFengManZhu/dsh-deep-reading-wl](https://github.com/SongFengManZhu/dsh-deep-reading-wl) | 1 | 2026-10-30 | 2026-10-30 | 扫描版教材流水线：OCR提速5倍，先出骨架地图，再按章阅读。 |
| 81 | [songrui111/dsh-readprune](https://github.com/songrui111/dsh-readprune) | 1 | 2026-10-28 | 2026-10-30 | Frugal tool layer for DeepSeek Harness: precise file reading and a self-serve tool catalog, so long sessions stop re-billing whole files and forgotten tools. |
| 82 | [Srelka/dsh-ascii-scenes](https://github.com/Srelka/dsh-ascii-scenes) | 1 | 2026-10-30 | 2026-10-30 | Eight interactive ASCII ambient themes for DeepSeek Harness — 八套可交互的字符场景主题。 |
| 83 | [steady-sakura/dsh-friend](https://github.com/steady-sakura/dsh-friend) | 1 | 2026-10-28 | 2026-10-30 | 将api连接到桌宠上，并且允许桌宠查看你的电脑屏幕。             在本项目中，桌宠会读取你的桌面信息，并自行决定是否和你交流。            交流方面，桌宠可以选择直接发消息或者做动作；你对桌宠的互动也会被桌宠读取到，她可能会对你的互动做出反应。            记忆方面，项目采取本地文件夹存放记忆(桌宠自行决定哪些值得存放)，并采用短期记忆直接读取，长期记忆索引读取的方式，缓解上下文过长的问题。 |
| 84 | [STofone/dsh-agent-roster](https://github.com/STofone/dsh-agent-roster) | 1 | 2026-10-29 | 2026-10-30 | Static agent roster and member-profile definitions for DSH, designed to compile validated role files into dsh-agent-teams members. |
| 85 | [taoqizhang55-code/stockproof](https://github.com/taoqizhang55-code/stockproof) | 1 | 2026-10-30 | 2026-10-30 | LLM reads stock news, earnings and filings with cited sources, then tests every signal on 10 years of point-in-time data. Quant lab, portfolio check-up, web dashboard, DeepSeek Harness / MCP plugin. US, A-shares, HK. |
| 86 | [terry2010/dsh-loop-recover](https://github.com/terry2010/dsh-loop-recover) | 1 | 2026-10-27 | 2026-10-30 | A guard for DeepSeek Harness: stops model repeat loops mid-stream, prunes and compacts context, then resumes the task. |
| 87 | [Time-233/dsh-theme-neon-arcade](https://github.com/Time-233/dsh-theme-neon-arcade) | 1 | 2026-10-30 | 2026-10-30 | NEON ARCADE · DeepSeek Harness 桌面端霓虹像素主题，支持可开关空战背景、鼠标拖动战机与无限复活。 |
| 88 | [TongPeng-1/dsh-video-understanding](https://github.com/TongPeng-1/dsh-video-understanding) | 1 | 2026-10-19 | 2026-10-30 | 让 DSH 真正看视频的本地 MCP：VideoChat3/Qwen3-VL 视觉描述 + Whisper 语音转写 + 时间戳关键帧，三路独立证据交给决策模型核实。Windows, Python 3.13 |
| 89 | [VictorKozachek/dsh-user-code-block](https://github.com/VictorKozachek/dsh-user-code-block) | 1 | 2026-10-30 | 2026-10-30 | Syntax highlighting, copy button and monochrome mode for code blocks in DeepSeek Harness Desktop (DSH) chat user messages. No dependencies, no build step. |
| 90 | [wakeupnotfound/dsh-rsi](https://github.com/wakeupnotfound/dsh-rsi) | 1 | 2026-10-30 | 2026-10-30 | Recursive Self-Improvement (RSI) Engine and Official Standard Plugin for DeepSeek Harness (DSH) |
| 91 | [waspqj/dsh-study-mode](https://github.com/waspqj/dsh-study-mode) | 1 | 2026-10-30 | 2026-10-30 | 学习模式（study-mode）agent 预设：主题知识库 + 检索优先的回答（命中标出处、查不到标未验证），侧边栏带知识库面板。 |
| 92 | [wh131462/dsh-git-commit](https://github.com/wh131462/dsh-git-commit) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 一键分组提交插件：Angular 规范分组、当前模型生成 message、插件直接执行 git 提交 |
| 93 | [wyewyewye/dsh-session-title-regen](https://github.com/wyewyewye/dsh-session-title-regen) | 1 | 2026-10-30 | 2026-10-30 | DSH plugin: AI-regenerate a session title from its last 10 user prompts using the model the session last used. |
| 94 | [wz20/dsh-dafeiyu-dot](https://github.com/wz20/dsh-dafeiyu-dot) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 陪伴插件：情绪语音、记忆宫殿、QQ、语音通话与记账挂件。 |
| 95 | [xin505/dsh-task-shelf](https://github.com/xin505/dsh-task-shelf) | 1 | 2026-10-30 | 2026-10-30 | DSH Task Shelf 1 — 跨工作区、跨会话整理与压缩交接 |
| 96 | [xuhairui-dzz/dsh-shengtu](https://github.com/xuhairui-dzz/dsh-shengtu) | 1 | 2026-10-30 | 2026-10-30 | Multi-engine image generation for DeepSeek Harness: agent tool + composer-dock panel (Volcengine Ark / SiliconFlow / OpenAI-compatible). |
| 97 | [YaoGUanquan/ai-agent-engine-deepseek](https://github.com/YaoGUanquan/ai-agent-engine-deepseek) | 1 | 2026-10-27 | 2026-10-30 | 面向 DeepSeek Harness 的工程技能集 |
| 98 | [yhPrime/dsh-exp-lib-provider](https://github.com/yhPrime/dsh-exp-lib-provider) | 1 | 2026-10-29 | 2026-10-30 | 经验库：dsh-mnemon 的记忆空间 Provider（exp-lib），同时注册 exp_recall / exp_record 工具（JitRL 优势排序）。 |
| 99 | [Zci514/dsh-nightwatch](https://github.com/Zci514/dsh-nightwatch) | 1 | 2026-10-29 | 2026-10-30 | DSH 守夜插件：给输入框加一颗按钮，选个钟点，会话一直续跑到那时自动停 |
| 100 | [zdkcomeon/dsh-mcp-link](https://github.com/zdkcomeon/dsh-mcp-link) | 1 | 2026-10-22 | 2026-10-30 | DeepSeek Harness (DSH) 插件：扫描 Cursor、Claude Code、Codex CLI、Gemini CLI、VS Code 等 13 种客户端的 MCP 配置，一键接入 DSH profile，支持连接测试、断线重连和项目级 .mcp.json 导入。 |
| 101 | [zhong-1212/dsh-plugins](https://github.com/zhong-1212/dsh-plugins) | 1 | 2026-10-30 | 2026-10-30 | DeepSeek Harness (DSH) third-party plugins. Each plugin lives in plugins/&lt;name&gt;/ and installs independently. |
| 102 | [0231071/dsh-mobile-remote](https://github.com/0231071/dsh-mobile-remote) | 0 | 2026-10-30 | 2026-10-30 | 🐳 手机扫码远程控制 DSH 桌面客户端：局域网 / 公网隧道双模，二维码一键连接（浏览器或微信）。DSH 仍旧只听 127.0.0.1，不改绑定地址，鉴权交给 DSH 自己。 |
| 103 | [097794/dsh-subagent-model-notes](https://github.com/097794/dsh-subagent-model-notes) | 0 | 2026-10-30 | 2026-10-30 | Per-model notes for subagent delegation in DeepSeek Harness: a settings page beside the official Subagent page, and the notes injected into the delegating agent's system prompt. |
| 104 | [1292858901/dsh-persona-gateway](https://github.com/1292858901/dsh-persona-gateway) | 0 | 2026-10-30 | 2026-10-30 | dsh仓库插件 |
| 105 | [1Lry1/dsh-workbay](https://github.com/1Lry1/dsh-workbay) | 0 | 2026-10-30 | 2026-10-30 | DSH workbench: a dock host, GitCraft and Downloader pages, a shared host kit, and a one-shot suite bundle. |
| 106 | [2000lla/dsh-namecheap-mcp](https://github.com/2000lla/dsh-namecheap-mcp) | 0 | 2026-10-30 | 2026-10-30 | Namecheap MCP connector for DeepSeek Harness: domains, DNS records, nameservers and contacts as native agent tools. |
| 107 | [20zxknk/dsh-session-hub](https://github.com/20zxknk/dsh-session-hub) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: one searchable, timeline-grouped list of every Session across every Workspace. |
| 108 | [382quaii/dsh-Layers-Hippocampus](https://github.com/382quaii/dsh-Layers-Hippocampus) | 0 | 2026-10-29 | 2026-10-30 | 拒绝热梗洗脑与上下文卡顿。基于纯事件溯源与可视化知识图谱的 DSH “赛博海马体”。零依赖、极速响应、具备确定性遗忘机制与防复活能力的长期记忆引擎。 |
| 109 | [43aquarius/luna-plugin-tester](https://github.com/43aquarius/luna-plugin-tester) | 0 | 2026-10-30 | 2026-10-30 | 插件改动后快速对比测试 |
| 110 | [43aquarius/luna-threshold-gate](https://github.com/43aquarius/luna-threshold-gate) | 0 | 2026-10-30 | 2026-10-30 | 筛选前自检阈值，防止为凑数放宽标准 |
| 111 | [447662/dsh-copy-image](https://github.com/447662/dsh-copy-image) | 0 | 2026-10-19 | 2026-10-30 | DSH plugin: copy any image from the conversation straight to the clipboard. Replaces the built-in lightbox (close button only) with a viewer that has Copy, Save, zoom and page-through. |
| 112 | [822376583-hub/dsh-works-gallery](https://github.com/822376583-hub/dsh-works-gallery) | 0 | 2026-10-30 | 2026-10-30 | Works gallery for DeepSeek Harness |
| 113 | [8778fkv694-hub/dsh-orchestrator](https://github.com/8778fkv694-hub/dsh-orchestrator) | 0 | 2026-10-29 | 2026-10-30 | Evidence-driven pipelines for DeepSeek Harness: confirmed intent, human gates, durable recovery and verifiable delivery |
| 114 | [96274zxc/vscode-pet](https://github.com/96274zxc/vscode-pet) | 0 | 2026-10-30 | 2026-10-30 | Unofficial DeepSeek Harness port of VS Code's Blobby chat pet: official sprites, hats, colors, chat reactions, drag/throw, achievements and jump game. |
| 115 | [AAAMECHANIC/dsh-plugin-market](https://github.com/AAAMECHANIC/dsh-plugin-market) | 0 | 2026-10-30 | 2026-10-30 | DSH 社区插件市场索引源：awesome-dsh-plugin 目录的过滤镜像，仅保留当前 DSH 版本可安装的插件（format 1） |
| 116 | [aaz111/dsh-nx](https://github.com/aaz111/dsh-nx) | 0 | 2026-10-28 | 2026-10-30 | 将NX接入DeepSeek Harness，能够在harness实现自然语言指令建模，装配，有限元仿真，装配体零件工程图批量导出。同时输出的prt模型能在侧边栏的nx控制台预览。全过程完全后台执行，不占用前台任务。 |
| 117 | [aisubei/CHAJIAN](https://github.com/aisubei/CHAJIAN) | 0 | 2026-09-01 | 2026-10-30 | 给 DeepSeek Harness（DSH）用的中文技能与插件包：13 个纯 Markdown 技能，把派单分工、验收取证、部署真伪、界面量测、去 AI 味这些流程写成模型能照着走的判据；5 个插件补上后台搜索、状态卡、交接文档、截图粘贴与视觉代理。Windows 桌面端实测可用，技能之间互不依赖，可整组装也可只拿一个。 |
| 118 | [AkiNoYo-desu/dsh-effort-slider-universal](https://github.com/AkiNoYo-desu/dsh-effort-slider-universal) | 0 | 2026-10-30 | 2026-10-30 | Universal reasoning-effort slider for DeepSeek Harness: the model menu's effort row becomes one draggable slider that shows up for every provider and model. |
| 119 | [AkiNoYo-desu/dsh-kimi-channel-guard](https://github.com/AkiNoYo-desu/dsh-kimi-channel-guard) | 0 | 2026-10-30 | 2026-10-30 | Kimi 分流卫士：DSH Subscriptions 思考/正文/工具调用通道隔离兼容补丁，提供源码检查、备份与回滚。 |
| 120 | [alamsir/dsh-iab](https://github.com/alamsir/dsh-iab) | 0 | 2026-10-30 | 2026-10-30 | Persistent-login in-app browser for DeepSeek Harness: seven agent tools, page-JavaScript evaluation, and a Feishu document reader, mirrored live in a right-sidebar panel. |
| 121 | [Aliciawque/dsh-big-whale](https://github.com/Aliciawque/dsh-big-whale) | 0 | 2026-10-30 | 2026-10-30 | 大鲸鱼 / Big Whale / 大クジラ — a trilingual DSH desktop companion with lip sync, expressions, idle motions and context-compaction rice. |
| 122 | [alitrack/dsh-gov-bp](https://github.com/alitrack/dsh-gov-bp) | 0 | 2026-10-30 | 2026-10-30 | Government-facing BP skills for DeepSeekRuntime (dsh): review, nine-chapter outline, bid-language conversion, quoting with person-month math. Zero dependencies. |
| 123 | [alitrack/dsh-wechat-article](https://github.com/alitrack/dsh-wechat-article) | 0 | 2026-10-30 | 2026-10-30 | Markdown -&gt; WeChat Official Account draft from inside DeepSeek Harness (dsh): inline-style HTML, 900x383 cover, draft push with read-back. Zero dependencies. |
| 124 | [AlLHHH/dsh-skill-palette](https://github.com/AlLHHH/dsh-skill-palette) | 0 | 2026-10-30 | 2026-10-30 | DSH 技能助手：输入框旁的技能清单、分类/收藏/翻译，回答下方显示本轮用到的技能 |
| 125 | [altamkp/dsh-middle-click](https://github.com/altamkp/dsh-middle-click) | 0 | 2026-10-30 | 2026-10-30 | Middle-click closes a session or a sidebar tab in the DeepSeek Harness Web UI, with its own Settings tab. 在 DeepSeek Harness 的 Web 界面里，用鼠标中键关闭会话或侧边栏标签页，并拥有独立的设置页。 |
| 126 | [Analyzer3739/dsh-session-helix](https://github.com/Analyzer3739/dsh-session-helix) | 0 | 2026-10-30 | 2026-10-30 | Turn-level branch tree and draft board for DeepSeek Harness session forks. |
| 127 | [angel291592/dsh-submodel](https://github.com/angel291592/dsh-submodel) | 0 | 2026-10-30 | 2026-10-30 | 官方 subagent 的默认策略包：装上一次配好「什么时候自己干、什么时候派出去、派给谁」。 |
| 128 | [AnsonLi-better/dsh-global-tasks](https://github.com/AnsonLi-better/dsh-global-tasks) | 0 | 2026-10-19 | 2026-10-30 | Global running and pending sessions above the native DeepSeek Harness workspace list. Community plugin. |
| 129 | [anwesc/dsh-qqbot-guard](https://github.com/anwesc/dsh-qqbot-guard) | 0 | 2026-10-30 | 2026-10-30 | dsh-plugin |
| 130 | [aooyoo/dsh-usage-stats](https://github.com/aooyoo/dsh-usage-stats) | 0 | 2026-10-30 | 2026-10-30 | Token usage statistics for DeepSeek Harness: sidebar entry + panel with daily, per-model and per-session totals (unofficial community plugin) |
| 131 | [Aperops/dsh-rfiles](https://github.com/Aperops/dsh-rfiles) | 0 | 2026-10-30 | 2026-10-30 | Remote file upload/download companion plugin for DeepSeek Harness (DSH): resumable chunked uploads, send-to-Agent, native downloads, session-log ZIP over paired remote sessions. |
| 132 | [arnen7000/dsh-workbuddy-model](https://github.com/arnen7000/dsh-workbuddy-model) | 0 | 2026-10-29 | 2026-10-30 | Brings the models available in your signed-in WorkBuddy / WorkBuddy AI desktop app into DeepSeek Harness. |
| 133 | [ArtificialAngels/dsh-public-edge](https://github.com/ArtificialAngels/dsh-public-edge) | 0 | 2026-10-30 | 2026-10-30 | DSH 公网访问插件：设置页一键启停 Cloudflare 隧道、复制带 token 的公网链接与二维码，内置局域网桥（Host 改写/剥 Origin/WebSocket 透传），cloudflared 自动下载。 |
| 134 | [asakumizy/dsh-effort-slider](https://github.com/asakumizy/dsh-effort-slider) | 0 | 2026-10-30 | 2026-10-30 | Animated three-stop thinking-effort slider for the DeepSeek Harness (DSH) composer — DSH 插件 |
| 135 | [ashuai/dsh-status-balance](https://github.com/ashuai/dsh-status-balance) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness Web UI 的极简余额挂件：状态栏常驻两个数字——本会话花费与钱包余额，点开可看今日消耗、余额减少和预计可用天数。零依赖、无构建，不打扰对话 |
| 136 | [atticuswx/dsh-cursor](https://github.com/atticuswx/dsh-cursor) | 0 | 2026-10-30 | 2026-10-30 | Cursor model provider for DeepSeek Harness (DSH) — model catalog, multi-key management in Settings, browser login. |
| 137 | [atzx/dsh-plugin-media-gen](https://github.com/atzx/dsh-plugin-media-gen) | 0 | 2026-10-30 | 2026-10-30 | Audio and video players for local media in the DeepSeek Harness chat, plus xAI Grok Imagine video generation. |
| 138 | [AvigatorC/dsh-conversation-width](https://github.com/AvigatorC/dsh-conversation-width) | 0 | 2026-10-29 | 2026-10-30 | 固定DeepSeek Harness的对话框宽度：可以锁定为像素值，也可以按对话框比例随缩放变化。 |
| 139 | [awychoi/dsh-agents-md](https://github.com/awychoi/dsh-agents-md) | 0 | 2026-10-26 | 2026-10-30 | A right-sidebar markdown editor for DeepSeek Harness workspace instructions. |
| 140 | [awychoi/dsh-spendwatch](https://github.com/awychoi/dsh-spendwatch) | 0 | 2026-10-26 | 2026-10-30 | Keeps your DeepSeek balance and what each conversation costs in view. |
| 141 | [AyahaShirane/dsh-deepseek-usage-meter](https://github.com/AyahaShirane/dsh-deepseek-usage-meter) | 0 | 2026-10-12 | 2026-10-30 | DSH 插件：在输入栏统计条内显示 DeepSeek 官方渠道的会话开销与账户余额（MIT） |
| 142 | [BAIYE0303/dsh-ask-first](https://github.com/BAIYE0303/dsh-ask-first) | 0 | 2026-10-30 | 2026-10-30 | A composer button that asks first, then writes. |
| 143 | [baizhu66018/dsh-pitfall-memory](https://github.com/baizhu66018/dsh-pitfall-memory) | 0 | 2026-10-30 | 2026-10-30 | Long-term failure memory for DeepSeek Harness: captures tool failures, folds them into reusable lessons with session/daily/weekly summaries, and injects a briefing into later sessions. |
| 144 | [BaronCyrus/dsh-google-chrome-use](https://github.com/BaronCyrus/dsh-google-chrome-use) | 0 | 2026-10-30 | 2026-10-30 | Let DeepSeek Harness use Google Chrome on macOS and Windows |
| 145 | [Beellix-dev/dsh-beellix-plugin](https://github.com/Beellix-dev/dsh-beellix-plugin) | 0 | 2026-10-30 | 2026-10-30 | Beelli X 中台插件 社区版 · Harness-Based Agentic Data Engineering |
| 146 | [bie-666/dsh-session-delete](https://github.com/bie-666/dsh-session-delete) | 0 | 2026-10-30 | 2026-10-30 | 给 DSH Web GUI 会话行加一条「删除会话」：归档闸门 + 落盘目录删除，host 路由 /api/session-delete，客户端按 dsh 0.2.1-rc.5 规范实现。 |
| 147 | [BJ1919810/dsh-session-mail](https://github.com/BJ1919810/dsh-session-mail) | 0 | 2026-10-30 | 2026-10-30 | Cross-session messaging for DeepSeek Harness: one session's agent sends a message to another session's agent. |
| 148 | [Britneycode/dsh-fish-soul](https://github.com/Britneycode/dsh-fish-soul) | 0 | 2026-10-30 | 2026-10-30 | 鱼 · 人格、按人记忆、日程自走与主动开口，直连 SnowLuma 收发 QQ，B站小号私信与自己刷视频（DSH 插件，单角色 feiyu） |
| 149 | [BuvkB/dsh-ugreen-nas](https://github.com/BuvkB/dsh-ugreen-nas) | 0 | 2026-10-30 | 2026-10-30 | DSH connector for UGREEN NAS OpenCLI: scoped access-token auth, read-only file/storage/task/docker tools |
| 150 | [Cck423/dsh-persona-dafeiyu-solo](https://github.com/Cck423/dsh-persona-dafeiyu-solo) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 单人设插件：只内置「大肥鱼」一条人设，正文独立成 persona.md，改完下一个请求就生效，不用重启。 |
| 151 | [CECILIALOVE0616/dsh-auth-cookie-hygiene](https://github.com/CECILIALOVE0616/dsh-auth-cookie-hygiene) | 0 | 2026-10-29 | 2026-10-30 | DSH 本地认证 Cookie 卫生插件：为已停止 Host 的 dsh-auth-* Cookie 下发过期头，避免随机端口导致的 Cookie 堆积与 HTTP 431。 |
| 152 | [Charles950311/dsh-plugin-hub](https://github.com/Charles950311/dsh-plugin-hub) | 0 | 2026-10-24 | 2026-10-30 | Control hub for DeepSeek Harness (dsh) plugins and skills: one routing table, one status check, one manifest. MIT. |
| 153 | [chenyuiyu/dsh-attention-reminder](https://github.com/chenyuiyu/dsh-attention-reminder) | 0 | 2026-10-30 | 2026-10-30 | Plays a chime, raises the window and floats a card above the page when DeepSeek Harness needs your approval or a confirmation. Sound and popup toggles are independent. |
| 154 | [chjinhuu/dsh-zh-thinking](https://github.com/chjinhuu/dsh-zh-thinking) | 0 | 2026-10-30 | 2026-10-30 | 让 DeepSeek Harness 的模型用中文思考 |
| 155 | [chopperH0824/dsh-session-search-bar](https://github.com/chopperH0824/dsh-session-search-bar) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 会话搜索栏插件：按关键词搜索历史会话的消息正文，点结果直接定位到命中文字。 |
| 156 | [Chuzhidezhuzhuboy/dsh-pet-assistant](https://github.com/Chuzhidezhuzhuboy/dsh-pet-assistant) | 0 | 2026-10-30 | 2026-10-30 | 给 dsh-pet 桌宠加一张会话小卡片：右键宠物就能进入会话、看历史、继续聊、框选截图提问。 |
| 157 | [chy1021653908/want-to-type](https://github.com/chy1021653908/want-to-type) | 0 | 2026-10-30 | 2026-10-30 | Theme-matched typing effects, companions, combos and sounds for DSH. |
| 158 | [coolluo/dsh-plugin-artemis](https://github.com/coolluo/dsh-plugin-artemis) | 0 | 2026-10-30 | 2026-10-30 | dsh-plugin-artemis |
| 159 | [Da0Mine/dsh-hide-update-badge](https://github.com/Da0Mine/dsh-hide-update-badge) | 0 | 2026-10-30 | 2026-10-30 | Hide the built-in DSH Desktop update badge (the “新版本” pill beside the account button). Pure CSS + label-based hiding, no host behavior. \| 隐藏 DSH 桌面版自带的“新版本”更新角标 |
| 160 | [DazzzleKK/dsh-code-git-workbench](https://github.com/DazzzleKK/dsh-code-git-workbench) | 0 | 2026-10-29 | 2026-10-30 | Code editor and PyCharm-style Git workbench for the DeepSeek Harness Web UI. |
| 161 | [DeepCollaboration/DeepSeekCollaborationBoard-Plugin](https://github.com/DeepCollaboration/DeepSeekCollaborationBoard-Plugin) | 0 | 2026-10-28 | 2026-10-30 | A shared board for stations, workflows and projects in DeepSeek Harness. No server, no database — GitHub is the access gate. |
| 162 | [deepseaandhighsky-arch/dsh-ui-polish](https://github.com/deepseaandhighsky-arch/dsh-ui-polish) | 0 | 2026-10-30 | 2026-10-30 | A dsh-native UI polish plugin: motion, elevation, 7-stop scroll fades, status glow, typography, spring profiles, optional sounds and third-party plugin adaptation - without changing layout or brand. |
| 163 | [Deiael/change-review](https://github.com/Deiael/change-review) | 0 | 2026-10-28 | 2026-10-30 | DeepSeek Harness change review board with diff-scoped unit, edge, and exploratory self-tests. |
| 164 | [dengsixue-stack/dsh-file-context-menu](https://github.com/dengsixue-stack/dsh-file-context-menu) | 0 | 2026-10-30 | 2026-10-30 | Right-click menu for file links in DeepSeek Harness chat (open with, save as, copy path, copy content, reveal in Finder/Explorer) |
| 165 | [dingchenhui0618-arch/dsh-liars-dice](https://github.com/dingchenhui0618-arch/dsh-liars-dice) | 0 | 2026-10-30 | 2026-10-30 | 中文吹牛骰子 for DeepSeek Harness: hot-seat bidding, agent opponents and referee, replayable calls and challenges, plus a switchable exact-probability panel. |
| 166 | [dingchenhui0618-arch/dsh-market-card](https://github.com/dingchenhui0618-arch/dsh-market-card) | 0 | 2026-10-30 | 2026-10-30 | Bilingual market card generator for DSH plugins: README + docs/*.png -&gt; self-contained HTML and a real 2x PNG with install command, screenshot wall, capabilities and explicit limitations. |
| 167 | [dingchenhui0618-arch/dsh-ps-preflight](https://github.com/dingchenhui0618-arch/dsh-ps-preflight) | 0 | 2026-10-30 | 2026-10-30 | 给 agent 跑的每条 PowerShell 命令做执行前静态分级：删除/覆盖/网络下载/凭据四类，高风险二次确认，全量落本地审计。零依赖、不联网、不调模型。 |
| 168 | [do-nothing/media-suite](https://github.com/do-nothing/media-suite) | 0 | 2026-10-29 | 2026-10-30 | DSH plugins for media generation: Qwen (DashScope) and RunningHub image/video capabilities. |
| 169 | [dolou12388/dsh-memory-hybrid](https://github.com/dolou12388/dsh-memory-hybrid) | 0 | 2026-10-30 | 2026-10-30 | 给 DeepSeek Harness 的混合架构长期记忆插件：KV 权威层 + 向量派生索引 + 艾宾浩斯衰减 + 可选 Jev 判别 |
| 170 | [DSH-Extensions-list/dsh-deckforge](https://github.com/DSH-Extensions-list/dsh-deckforge) | 0 | 2026-10-30 | 2026-10-30 | Presentation studio for DeepSeek Harness: create, edit, import and verify native PowerPoint decks. |
| 171 | [DSH-Extensions-list/dsh-provider-hub](https://github.com/DSH-Extensions-list/dsh-provider-hub) | 0 | 2026-10-08 | 2026-10-30 | BharatCode and OpenAI-compatible provider setup alongside ChatGPT and GitHub Copilot subscriptions for DeepSeek Harness. |
| 172 | [Echoes-fade/deepi-harness](https://github.com/Echoes-fade/deepi-harness) | 0 | 2026-10-29 | 2026-10-30 | Deep Pi Harness — 极简 AI 智能体客户端：四工具内核（读/写/改/跑命令）+ 完整插件面板。微光即星海 · 简单内核万象世界 |
| 173 | [end876/dsh-mcl](https://github.com/end876/dsh-mcl) | 0 | 2026-10-30 | 2026-10-30 | 零依赖 Node 版 Minecraft 启动器：装原版 / Fabric / Forge / NeoForge / 模组 / 整合包，可被脚本和 AI 驱动的 CLI + HTTP 接口，附 DSH 插件 |
| 174 | [FallenWings27/dsh-provider-card-release](https://github.com/FallenWings27/dsh-provider-card-release) | 0 | 2026-10-26 | 2026-10-30 | 切换模型时在会话输入框旁展示一张角色卡（DSH 宿主插件，含首装素材库） |
| 175 | [fanyingnie2163663/dsh-whale-weather](https://github.com/fanyingnie2163663/dsh-whale-weather) | 0 | 2026-10-29 | 2026-10-30 | 会看天，也会关心你：给 DeepSeek Harness 的关心型天气插件。预报 + 空气质量 + 本地偏好档案（称呼/怕冷怕热/出行方式/伞/健康备注），按时段说人话。免费、无需 API Key。 |
| 176 | [feely0208/dsh-doc-batch](https://github.com/feely0208/dsh-doc-batch) | 0 | 2026-10-29 | 2026-10-30 | 深鲸文档批量处理：Word / Excel / PDF 一次处理整目录（替换、提取、合并、拆分、导出），带面板 |
| 177 | [feely0208/dsh-legal-damages](https://github.com/feely0208/dsh-legal-damages) | 0 | 2026-10-30 | 2026-10-30 | 深鲸damages：深鲸损害赔偿计算器：人身损害、劳动争议（N/2N/加班费/年假/二倍工资）、借款利息（可分段）、违约金（含 30% 调减提示）四类表单计算，每项给出公式与代入值，可手算复核 |
| 178 | [feely0208/dsh-legal-hub](https://github.com/feely0208/dsh-legal-hub) | 0 | 2026-10-29 | 2026-10-30 | 深鲸法律台：DSH 侧栏里的法律工具集中入口，一个面板打开合同体检/引用核验/合规文书/中文排版 |
| 179 | [feely0208/dsh-legal-viz](https://github.com/feely0208/dsh-legal-viz) | 0 | 2026-10-30 | 2026-10-30 | 深鲸viz：深鲸诉讼可视化：把案情与证据 JSON 画成时间轴、法律关系图、证据矩阵、争点对照，输出可打印的单文件 HTML。 |
| 180 | [feely0208/dsh-qq-bridge](https://github.com/feely0208/dsh-qq-bridge) | 0 | 2026-10-30 | 2026-10-30 | 深鲸 QQ 桥接：QQ 官方机器人 / OneBot v11 双通道 + 关键词规则自动回复 + 全量审计（DSH 插件） |
| 181 | [fengzhaoy/dsh-web-ide](https://github.com/fengzhaoy/dsh-web-ide) | 0 | 2026-10-30 | 2026-10-30 | DSH 会话页内置的 VSCode 风格开发工作台：Monaco 编辑器（Dark Modern）、资源管理器、Git 全流程管理、交互式终端与 ripgrep 全局搜索，AI 提交信息复用当前会话模型。 |
| 182 | [FFFengMJL/dsh-plan-execute](https://github.com/FFFengMJL/dsh-plan-execute) | 0 | 2026-10-30 | 2026-10-30 | Same-session DSH plan approval extension: model and reasoning-effort selection, safe pre-plan compaction, and a layout-safe options panel. |
| 183 | [fj7937290-sys/dsh-video-eyes](https://github.com/fj7937290-sys/dsh-video-eyes) | 0 | 2026-10-30 | 2026-10-30 | ??????????:???????? + ?????????,????????????? \| Video sampling for text-only agents |
| 184 | [flashsoft/dsh-magpie-skillsmap](https://github.com/flashsoft/dsh-magpie-skillsmap) | 0 | 2026-10-30 | 2026-10-30 | Pick Magpie skills by scene and inject their instructions into the current DSH conversation. |
| 185 | [Fucaplos/dsh-local-library](https://github.com/Fucaplos/dsh-local-library) | 0 | 2026-10-30 | 2026-10-30 | Local document library for DSH Desktop — files stay on your machine, every conversation can search / read / download them through 4 tools. 中文：设置左栏的本地资料库，文件只存本机、跨会话共享，agent 自动可见。 |
| 186 | [galizhajidanbaofan/dsh-theme-notebook-paper](https://github.com/galizhajidanbaofan/dsh-theme-notebook-paper) | 0 | 2026-10-30 | 2026-10-30 | 把 DeepSeek Harness 桌面端铺成横线笔记本纸的纯外观主题插件（Desktop profile） |
| 187 | [gaolvsuan/dsh-badge](https://github.com/gaolvsuan/dsh-badge) | 0 | 2026-10-30 | 2026-10-30 | The ChatGPT-style unread badge for DeepSeek Harness — a red count on the tab icon and taskbar button, one chime per finished turn. |
| 188 | [Gaudi-XIX/dsh-zcode-cli](https://github.com/Gaudi-XIX/dsh-zcode-cli) | 0 | 2026-10-25 | 2026-10-30 | Safe-provider bridge: run the locally installed ZCode CLI as a DeepSeek Harness model route — official-binary-only transport, zero forged traffic, zero token extraction |
| 189 | [GenXGSS/dsh-capywarm](https://github.com/GenXGSS/dsh-capywarm) | 0 | 2026-10-30 | 2026-10-30 | 卡皮暖暖 CapyWarm — original capybara emotional-support plugin for DeepSeek Harness (DSH). 原创水豚情绪陪伴插件。 |
| 190 | [ggxx001/dsh-whale-widget](https://github.com/ggxx001/dsh-whale-widget) | 0 | 2026-10-30 | 2026-10-30 | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件:余额/今日已用/峰谷定价、自定义泡泡点击序列(文本/余额/今日/峰谷/图片/随机语句与并列加权选择)、逐行样式与字体、悬浮快捷编辑、音效与每轮消耗、自定义角色/动图/音效、吸附与翻转自定义 |
| 191 | [guhanfei-ai/dsh-mbti-regulator](https://github.com/guhanfei-ai/dsh-mbti-regulator) | 0 | 2026-10-30 | 2026-10-30 | MBTI 稳压器：基于 MBTI×荣格八维的个人状态稳压滋养与战斗增强引擎（DeepSeek Harness 插件） |
| 192 | [Hana-ame/dsh-gear-grid-model](https://github.com/Hana-ame/dsh-gear-grid-model) | 0 | 2026-10-28 | 2026-10-30 | Gear Grid (2D Cosmic Shifter) style model seat for DSH: pick model and reasoning strength in one 2D grid, reusing ctx.modelDirectories as the data source. |
| 193 | [HaoKuo/DSH-Paper-DeepRead](https://github.com/HaoKuo/DSH-Paper-DeepRead) | 0 | 2026-10-30 | 2026-10-30 | DSH-Paper-DeepRead — DeepSeek Harness (dsh) plugin: bundle the 文献精读库 paper library + paper-deepread-html deep-read skill. Browse reports, upload PDFs to a managed library, let an agent deep-read them, then manage/rebuild the library in a sidebar panel. \| 文献精读库与精读技能打包成 dsh 插件：浏览报告、上传 PDF、由 Agent 精读成稿、管理书库。 |
| 194 | [hestudio-community/dsh-plugin-onenote](https://github.com/hestudio-community/dsh-plugin-onenote) | 0 | 2026-10-28 | 2026-10-30 | Read the Microsoft OneNote notebooks you choose from inside DeepSeek Harness |
| 195 | [HiBer2007/DSH-Document-Writer](https://github.com/HiBer2007/DSH-Document-Writer) | 0 | 2026-10-30 | 2026-10-30 | 12-stage document writing pipeline for DeepSeek Harness (DSH): Markdown-first, human rewrite, independent review, user gates, docx/pptx. |
| 196 | [HiddenPuppy/dsh-pptx-annotate](https://github.com/HiddenPuppy/dsh-pptx-annotate) | 0 | 2026-10-30 | 2026-10-30 | Annotate PPTX element by element inside the DSH preview panel, then hand the whole review to the agent in one click |
| 197 | [hiyouzheng/dsh-retirement-countdown](https://github.com/hiyouzheng/dsh-retirement-countdown) | 0 | 2026-10-30 | 2026-10-30 | Retirement countdown widget in the DSH composer: days/hours/minutes/seconds, click the pencil to set the target date. 退休倒计时。 |
| 198 | [hsushjk/dsh-aurachat](https://github.com/hsushjk/dsh-aurachat) | 0 | 2026-10-28 | 2026-10-30 | DeepSeek Harness 插件， AI 伙伴。人格、心情和记忆，看图、发语音、听语音、发和收表情包、写日记、逛空间回评论、还会主动找你聊天。功能模块化，可本地自写扩展。 |
| 199 | [hunmer/dsh-team-control](https://github.com/hunmer/dsh-team-control) | 0 | 2026-10-28 | 2026-10-30 | DSH 的 Agent Team 控制平面：成员上限可配、DAG 自动派发、四域强制权限、SSE 实时面板 |
| 200 | [IcyDate/ofttold-memory](https://github.com/IcyDate/ofttold-memory) | 0 | 2026-10-29 | 2026-10-30 | 让你的笔记在每个会话里都在场：指定一个笔记文件夹，插件读出其中几段，一开场就摆好。默认建好文件夹和起始文件，装完就能用。 |
| 201 | [icymint0220/dsh-restart-switch](https://github.com/icymint0220/dsh-restart-switch) | 0 | 2026-10-30 | 2026-10-30 | Restart switch for DeepSeek Harness: reload the Cordis kernel or relaunch the whole app from the composer toolbar. |
| 202 | [IFFCheckPass/dsh-connect-modelscope](https://github.com/IFFCheckPass/dsh-connect-modelscope) | 0 | 2026-10-30 | 2026-10-30 | 魔搭社区（ModelScope）provider for DeepSeek Harness：对话栏显示剩余魔粒，设置页填令牌、勾选模型 |
| 203 | [ihodorchenko/dsh-futuristic-themes](https://github.com/ihodorchenko/dsh-futuristic-themes) | 0 | 2026-10-30 | 2026-10-30 | Three cinematic sci-fi themes for DeepSeek Harness Desktop — Nostromo Amber, Omni-tool and Renaissance Steel — as one installable plugin. Full token palettes, monospace UI, optional CRT/HUD/steel effects, MIT licensed. |
| 204 | [jack-chai-work/dsh-work-window](https://github.com/jack-chai-work/dsh-work-window) | 0 | 2026-10-30 | 2026-10-30 | DSH 工作时段插件：工作日 9:00-12:00 / 14:00-18:00 自动暂停 agent（零 token），暂停时段任务先提醒并确认； |
| 205 | [jackxiao17/dsh-ocean-theme](https://github.com/jackxiao17/dsh-ocean-theme) | 0 | 2026-10-30 | 2026-10-30 | DSH 海洋主题：Markdown 琥珀单主色 + 浅海/深海两档蓝调界面，纯 CSS 无设置 \| Ocean theme for DeepSeek Harness — amber Markdown palette + light/deep-sea UI skins, pure CSS |
| 206 | [jalilahmad/deepseek-peak-indicator](https://github.com/jalilahmad/deepseek-peak-indicator) | 0 | 2026-10-30 | 2026-10-30 | A lightweight DeepSeek API Peak/Off-Peak indicator for DeepSeek Harness Desktop. |
| 207 | [jaredwang/dsh-one-click-update](https://github.com/jaredwang/dsh-one-click-update) | 0 | 2026-10-30 | 2026-10-30 | One-click update entry for the DSH desktop app: updates the app and the plugin-market plugins that have updates available, from the Harness Web UI sidebar. |
| 208 | [Jason25417/dsh-session-auto-rename](https://github.com/Jason25417/dsh-session-auto-rename) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: LLM auto-rename in the session menu (recency-weighted) plus a right-click session menu. · 侧栏会话菜单自动重命名 + 右键呼出菜单 |
| 209 | [JiayangSUNwinter/dsh-island-bridge](https://github.com/JiayangSUNwinter/dsh-island-bridge) | 0 | 2026-10-30 | 2026-10-30 | macOS 灵动岛桥接：把 DeepSeek Harness 的会话状态与待审批操作投影到原生 SwiftUI 刘海面板，在岛上直接裁决与跳转 |
| 210 | [jimorsm/dsh-browser-view](https://github.com/jimorsm/dsh-browser-view) | 0 | 2026-10-30 | 2026-10-30 | DSH (DeepSeek Harness) Web GUI plugin: a CDP-driven live browser view in the right sidebar - agent tools, human input relay, and low-latency WebRTC DataChannel frames |
| 211 | [Jorgen233/dsh-why-reject-me](https://github.com/Jorgen233/dsh-why-reject-me) | 0 | 2026-10-30 | 2026-10-30 | 给 DSH 权限审批弹窗加一个可选的拒绝原因，并把原因作为 tool result 交给模型。 |
| 212 | [jue5hen/dsh-window-size](https://github.com/jue5hen/dsh-window-size) | 0 | 2026-10-30 | 2026-10-30 | Set the startup window size of DeepSeek Harness Desktop: 4:3/16:9/16:10 presets and custom sizes. \| 设置 DSH 桌面版启动窗口大小，支持比例预设与自定义尺寸。 |
| 213 | [k-ying/manualcompact-billion](https://github.com/k-ying/manualcompact-billion) | 0 | 2026-10-30 | 2026-10-30 | Keep DSH's native /compact (manual compaction) while billion-context keeps automatic compression. |
| 214 | [kabarryo/dsh-fatfish](https://github.com/kabarryo/dsh-fatfish) | 0 | 2026-10-30 | 2026-10-30 | 大肥鱼桌宠：DSH 输入框右上角随会话状态换表情的动画形象（29 张大肥鱼表情，9 种状态） |
| 215 | [KagurazakaNyaa/dsh-history-cache](https://github.com/KagurazakaNyaa/dsh-history-cache) | 0 | 2026-10-19 | 2026-10-30 | 在浏览器缓存会话历史，避免每次重新加载 |
| 216 | [KagurazakaNyaa/dsh-web-login](https://github.com/KagurazakaNyaa/dsh-web-login) | 0 | 2026-10-18 | 2026-10-30 | 给Deepseek Harness添加网页的密码访问，以便于公开到局域网访问 |
| 217 | [kankanfs/dsh-chat-first](https://github.com/kankanfs/dsh-chat-first) | 0 | 2026-10-30 | 2026-10-30 | Chat First for DeepSeek Harness: discuss when unsure, act when ready. Fewer wrong turns, less rework. / 先聊后做 |
| 218 | [kanmanJO/dsh-task-sfx](https://github.com/kanmanJO/dsh-task-sfx) | 0 | 2026-10-30 | 2026-10-30 | 大肥鱼的任务结束提示音，声音可以用filee将视频转为MP3 |
| 219 | [KB1SLN-Labs/dsh-linear](https://github.com/KB1SLN-Labs/dsh-linear) | 0 | 2026-10-29 | 2026-10-30 | Linear tools and hosted MCP bridge for DeepSeek Harness |
| 220 | [KB1SLN-Labs/dsh-ponytail](https://github.com/KB1SLN-Labs/dsh-ponytail) | 0 | 2026-10-29 | 2026-10-30 | Unofficial Ponytail 5 adapter for DeepSeek Harness with native desktop settings, mode picker, status band, and usage dashboard. |
| 221 | [KDreamelf/dsh-phoenix](https://github.com/KDreamelf/dsh-phoenix) | 0 | 2026-10-30 | 2026-10-30 | Keep DSH alive through plugin faults: attribute the crash, quarantine only the culprit row, leave providers untouched. |
| 222 | [Ke-wood/dsh-workflow-kit](https://github.com/Ke-wood/dsh-workflow-kit) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness workflow kit: 5 agent presets + 18 skills + routing table |
| 223 | [kermars39-web/dsh-conversation-import](https://github.com/kermars39-web/dsh-conversation-import) | 0 | 2026-10-30 | 2026-10-30 | Import a local Codex conversation thread into a DeepSeek Harness Session, filed under its original working directory, with optional auto-sync. |
| 224 | [kexijiang/dsh-harmony](https://github.com/kexijiang/dsh-harmony) | 0 | 2026-10-30 | 2026-10-30 | HarmonyOS device workbench for DSH NEXT: Better Sidebar tab, native floating mirror, and agent device tools. |
| 225 | [Kfytm/QQ-DeepSeek-Harness-bridge](https://github.com/Kfytm/QQ-DeepSeek-Harness-bridge) | 0 | 2026-10-30 | 2026-10-30 | 把 QQ 接入 DeepSeek Harness：消息变成 DSH agent，人格/工具/上下文全用 DSH 原生机制 |
| 226 | [kingrenqi-wq/dsh-session-health](https://github.com/kingrenqi-wq/dsh-session-health) | 0 | 2026-10-30 | 2026-10-30 | Session health card for DeepSeek Harness: context fill plus evidence-backed hints when a tool keeps failing or a task never finishes. Read-only, offline. DSH 会话状态看板：显示上下文占用，同工具连续失败或任务无终态时给出证据；只读本地会话，不联网。 |
| 227 | [Kirby-YiBy/dsh-prompt-library](https://github.com/Kirby-YiBy/dsh-prompt-library) | 0 | 2026-10-30 | 2026-10-30 | Voyager-style prompt library, formula copy and conversation folders for DeepSeek Harness |
| 228 | [KonataRings/dsh-pku-cluster](https://github.com/KonataRings/dsh-pku-cluster) | 0 | 2026-10-29 | 2026-10-30 | DeepSeek Harness plugin for the PKU Weiming Teaching-2 cluster: sidebar login (password + OTP), multiplexed SSH, and a built-in relay so WSL can reach the cluster through the Windows VPN. |
| 229 | [kviiinh/dsh-plugin-typo-check](https://github.com/kviiinh/dsh-plugin-typo-check) | 0 | 2026-10-30 | 2026-10-30 | DSH 输入框查错插件：只找错别字并标黄，可一键替换；支持任意 OpenAI 兼容来源、多来源回退、每行可配提示词/max_tokens/思考模式 |
| 230 | [l741589/dsh-main-file-tabs](https://github.com/l741589/dsh-main-file-tabs) | 0 | 2026-10-29 | 2026-10-30 | 把 DSH 右侧边栏中的文件以页签打开到主工作区，支持文本编辑双向实时同步与 Markdown 分屏编辑/预览。 Open DSH Sidebar files as tabs in the main workspace, with live two-way editing and Markdown preview sync. |
| 231 | [Larliers/dsh-skill-prompt-injector](https://github.com/Larliers/dsh-skill-prompt-injector) | 0 | 2026-10-30 | 2026-10-30 | Search, pin, combine and inject skills and prompts into the current conversation from the DSH right sidebar. |
| 232 | [LFELKEEA/dsh-default-model](https://github.com/LFELKEEA/dsh-default-model) | 0 | 2026-10-30 | 2026-10-30 | Pin the DeepSeek Harness default model from settings — new chats, restarts and in-chat model switches leave it alone. |
| 233 | [LFELKEEA/dsh-peak-valley](https://github.com/LFELKEEA/dsh-peak-valley) | 0 | 2026-10-30 | 2026-10-30 | DSH 峰谷调度插件：北京时间工作日 9-12 / 14-18 峰时自动停止 SnowLuma 与语音服务，谷时自动拉起。 |
| 234 | [Li111-div/dsh-balance-pocket](https://github.com/Li111-div/dsh-balance-pocket) | 0 | 2026-10-30 | 2026-10-30 | DSH 侧栏底部的余额小口袋：向上弹窗实时显示 DeepSeek 余额、峰谷时段与今日已用。A DSH plugin that shows the DeepSeek balance, peak/off-peak pricing period and today's spend in a sidebar popover. |
| 235 | [lihuu/dsh-board](https://github.com/lihuu/dsh-board) | 0 | 2026-10-30 | 2026-10-30 | Kanban board for DeepSeek Harness: tasks bound to long-lived native Sessions, live run status, and the Session's real conversation inside the board. |
| 236 | [like999888999-ui/dsh-bsk-daemon](https://github.com/like999888999-ui/dsh-bsk-daemon) | 0 | 2026-10-30 | 2026-10-30 | Keep the BrowserSkill bsk daemon on-demand inside DeepSeek Harness - and fix the Windows "os error 5" that stops it from starting at all. |
| 237 | [lindingkao/dsh-settings-button](https://github.com/lindingkao/dsh-settings-button) | 0 | 2026-10-30 | 2026-10-30 | DSH设置按钮DSH 侧栏账号头像右侧常驻设置按钮 / Settings button right of the account avatar for DeepSeekRuntime |
| 238 | [lingxinsuixing/dsh-agnes](https://github.com/lingxinsuixing/dsh-agnes) | 0 | 2026-10-30 | 2026-10-30 | Agnes AI image &amp; video generation tools for DeepSeek Harness, plus optional image recognition. Text-only tool results, artifacts saved to a local folder. |
| 239 | [Lionad-Morotar/dsh-jump](https://github.com/Lionad-Morotar/dsh-jump) | 0 | 2026-10-30 | 2026-10-30 | Keyboard jump navigation for the DeepSeek Harness Web GUI: press a chord, type a letter label, and the labelled element is clicked or focused. |
| 240 | [liujianqiao701/dsh-test-framework](https://github.com/liujianqiao701/dsh-test-framework) | 0 | 2026-10-14 | 2026-10-30 | 面向测试工程师的 DSH 插件：把空文件夹一键变成「测试工作框架」骨架，并在 AI 会话里带上框架约束 —— 需求文档拆模块 / 确认版本 / 跨文档关联 / 登记测试环境与账密。AI test-framework plugin for DeepSeek Harness. |
| 241 | [liupengprivate-blip/dsh-baidu](https://github.com/liupengprivate-blip/dsh-baidu) | 0 | 2026-10-30 | 2026-10-30 | 搜索引擎模拟器 — DSH 侧栏搜索面板插件：调用本地搜索接口，列出前 10 条结果 |
| 242 | [liuyize-CHE/dsh-spanish-tutor](https://github.com/liuyize-CHE/dsh-spanish-tutor) | 0 | 2026-10-30 | 2026-10-30 | 西语练习插件 for DeepSeek Harness：六类本地判分的练习 + 情景造句（模型批改）。 Spanish practice drills with local grading. |
| 243 | [liyuxuan20111101/stronger-dsh](https://github.com/liyuxuan20111101/stronger-dsh) | 0 | 2026-10-30 | 2026-10-30 | Native DSH interface, motion, bounded context recall, scoped skills and agent collaboration. |
| 244 | [Long-Alex/dsh-session-menu-plus](https://github.com/Long-Alex/dsh-session-menu-plus) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: right-click the sidebar Session menu, export a Session as Markdown, and delete one with confirmation |
| 245 | [longbowzz/CodeGraph](https://github.com/longbowzz/CodeGraph) | 0 | 2026-07-12 | 2026-10-30 | Generate interactive, single-page flowchart/sequence-diagram HTML from any codebase. AI-agent-driven; click-to-jump-to-source in your editor. |
| 246 | [longsiqi-123/dsh-pad-kit](https://github.com/longsiqi-123/dsh-pad-kit) | 0 | 2026-10-30 | 2026-10-30 | Run DeepSeek Harness on an Android tablet via Termux: LAN installer page, SSH setup, Termux:Boot autostart. |
| 247 | [longyi-0x0/dsh-plugin-template](https://github.com/longyi-0x0/dsh-plugin-template) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件模板：宿主 HTTP 路由 + 设置页 + 双语 + 测试，纯 JS 无构建。 |
| 248 | [Lovenndme/dsh-profile-stats](https://github.com/Lovenndme/dsh-profile-stats) | 0 | 2026-10-30 | 2026-10-30 | Personal usage profile page for the DeepSeek Harness Web UI: tokens, peak day, streaks, activity heatmap, per-provider billing split — all from local session logs. |
| 249 | [lowspecai/dsh-home-monitor](https://github.com/lowspecai/dsh-home-monitor) | 0 | 2026-10-30 | 2026-10-30 | Read-only health checks for a small self-hosted setup. HTTP, TCP, SSL and Docker probes as DSH tools, or as a standalone MCP stdio server. One config.json. |
| 250 | [Lucky020/dsh-delivery-kit](https://github.com/Lucky020/dsh-delivery-kit) | 0 | 2026-10-30 | 2026-10-30 | 交付工坊：从代码仓库与运行中的系统生成验收材料（数据库设计/概要设计/详细设计/使用说明书/测试报告/上线报告/验收报告/技术协议）。DeepSeek Harness 插件。 |
| 251 | [luicarstar/dsh-simple-search](https://github.com/luicarstar/dsh-simple-search) | 0 | 2026-10-30 | 2026-10-30 | Content-only session search for DeepSeek Harness: one header button, one query box, jump to the hit. |
| 252 | [LyaQanYi/dsh-ccswitch-usage](https://github.com/LyaQanYi/dsh-ccswitch-usage) | 0 | 2026-10-29 | 2026-10-30 | 把 DeepSeek Harness 的 token 用量写进 CC Switch 的用量统计。Record DSH token usage into CC Switch's usage dashboard. |
| 253 | [m1eb0/fatfish-world-dsh](https://github.com/m1eb0/fatfish-world-dsh) | 0 | 2026-10-29 | 2026-10-30 | 大肥鱼世界 MCP tools and portable Skill for DeepSeek Harness |
| 254 | [maoyaoweii/dsh-connect-tabbit](https://github.com/maoyaoweii/dsh-connect-tabbit) | 0 | 2026-10-21 | 2026-10-30 | DSH 第三方 Tabbit 插件：内置网关接入 Tabbit 国内版/国际版账号池、周期额度、模型用量倍率、每日签到与工具调用 |
| 255 | [melano514/dsh-plugin-paper-radar](https://github.com/melano514/dsh-plugin-paper-radar) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: literature radar — search medical and life-science papers, download open-access PDFs, and fall back to four manual channels for paywalled papers. |
| 256 | [MentholTea/dsh-sakurafrp](https://github.com/MentholTea/dsh-sakurafrp) | 0 | 2026-10-30 | 2026-10-30 | 在 dsh 设置页与侧边栏管理 SakuraFrp 内网穿透：托管 frpc、一键对齐端口、流量与剩余百分比、公网密码门。 |
| 257 | [meshy-dev/meshy-dsh](https://github.com/meshy-dev/meshy-dsh) | 0 | 2026-10-30 | 2026-10-30 | Meshy 3D generation and 3D printing skills for DeepSeek Harness (dsh) |
| 258 | [MFCJ45681/github-oauth-plugin](https://github.com/MFCJ45681/github-oauth-plugin) | 0 | 2026-10-30 | 2026-10-30 | DSH plugin: GitHub OAuth (web callback) with an AES-256-GCM credential vault, 12 github_* agent tools, a right-sidebar panel and a Settings page. |
| 259 | [Mi-liu/dsh-desktop-notifier](https://github.com/Mi-liu/dsh-desktop-notifier) | 0 | 2026-10-30 | 2026-10-30 | Windows 桌面右下角通知 / 选择判断弹窗插件（DeepSeek Harness Host plugin） |
| 260 | [Mika-Maki/dsh-cheerful](https://github.com/Mika-Maki/dsh-cheerful) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：cheer 工具 + 礼炮彩带效果（V0.1-Unstable，实验性） |
| 261 | [MJDACK/dsh-prompt-assistant](https://github.com/MJDACK/dsh-prompt-assistant) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 提示词助手：文生图 / 图像编辑 / 模型原生提示词，带参考图和对话调整 |
| 262 | [MonSp/dsh-analyze](https://github.com/MonSp/dsh-analyze) | 0 | 2026-10-30 | 2026-10-30 | Local dataset analysis tools for DSH — ingest once, keep large tables on disk, small JSON tool calls for the model |
| 263 | [moon-lzy/dsh-starpost](https://github.com/moon-lzy/dsh-starpost) | 0 | 2026-10-30 | 2026-10-30 | 把星邮（cortico-world-starpost）接进 DeepSeek Harness：17 个工具、事件合批注入、系统提示词注入 |
| 264 | [Moqianying/dsh-session-link](https://github.com/Moqianying/dsh-session-link) | 0 | 2026-10-30 | 2026-10-30 | Link any set of dsh sessions into groups so they share memory. |
| 265 | [morehao/trendradar](https://github.com/morehao/trendradar) | 0 | 2026-10-30 | 2026-10-30 | Self-hosted trending radar for open-source repositories: daily crawl, Chinese summaries, archive to your own repo. CLI + Docker + web, with a DSH entry. |
| 266 | [mounta1n-18/dsh-memory](https://github.com/mounta1n-18/dsh-memory) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 插件：本地记忆系统（分类索引 / 回忆统计 / 教训三段式 / 压缩流水线）+ 仿轨迹记忆日志。零依赖、无构建。 \| Zero-dependency DeepSeek Harness plugin: a local memory system (index, recall stats, compression pipeline) plus a trajectory-style memory log. |
| 267 | [mulqizamzam/mulqi--reasll](https://github.com/mulqizamzam/mulqi--reasll) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin that ships the Reverse Engineer Anything self-learning loop as a loadable skill: examine a product you are authorised to rebuild, build your own equivalent, review it against evidence, close the gaps, and repeat until a written 100% checklist passes. |
| 268 | [MyRemme/dsh-kb](https://github.com/MyRemme/dsh-kb) | 0 | 2026-10-30 | 2026-10-30 | DSH 本地长期记忆库：把会话知识沉淀成不可变事实卡，骨架树做分类、关系图做脉络、FTS5 中文 bigram 检索。零外部依赖（node:sqlite + node:zlib）。 |
| 269 | [mzk0709/dsh-quote-tray](https://github.com/mzk0709/dsh-quote-tray) | 0 | 2026-10-30 | 2026-10-30 | 豆包 / 微信式引用回复插件（DeepSeek Harness）：划选聊天记录 → 引用卡片 → 模型读到原文，输入框保持干净。零依赖。 |
| 270 | [Naitang1207/dsh-macos-quicklook](https://github.com/Naitang1207/dsh-macos-quicklook) | 0 | 2026-10-30 | 2026-10-30 | Space-key Quick Look preview for DSH deliverable cards — native macOS preview for docx/xlsx/pptx |
| 271 | [Orliba/dsh-context-keeper](https://github.com/Orliba/dsh-context-keeper) | 0 | 2026-10-28 | 2026-10-30 | Teach a DeepSeek Harness agent to reason well, watch its context budget, and hand off long sessions. Host plugin plus an offline trace analyzer. |
| 272 | [OtakuP417/dsh-reading-companion](https://github.com/OtakuP417/dsh-reading-companion) | 0 | 2026-10-30 | 2026-10-30 | 伴读 — DSH 阅读伴侣插件：CFI 进度门、苏格拉底式讨论、免模型的复习卡片 |
| 273 | [OverToWind/dsh-todo](https://github.com/OverToWind/dsh-todo) | 0 | 2026-10-30 | 2026-10-30 | DSH header to-do plugin: rotating pending tasks, urgency tinting, persistent panel |
| 274 | [penghao73551/dsh-desktop-quick-actions](https://github.com/penghao73551/dsh-desktop-quick-actions) | 0 | 2026-10-30 | 2026-10-30 | Two round buttons at the DSH desktop sidebar foot: restart the app without a console window ever appearing, and open the DeepSeek top-up page in your browser. |
| 275 | [penghao73551/dsh-prompt-balance](https://github.com/penghao73551/dsh-prompt-balance) | 0 | 2026-10-30 | 2026-10-30 | Measure what your system prompt is made of, and put the operating protocol ahead of the rule block. |
| 276 | [Petenka315/dsh-locale-ko-extra](https://github.com/Petenka315/dsh-locale-ko-extra) | 0 | 2026-10-30 | 2026-10-30 | Korean language pack for the DeepSeek Harness web UI - full dictionaries plus extra strings, standalone or layered on dsh-locale-ko |
| 277 | [ph1996-cn/dsh-BMAD-Method](https://github.com/ph1996-cn/dsh-BMAD-Method) | 0 | 2026-10-30 | 2026-10-30 | BMAD-Method 封装插件：在 dsh 内管理 BMAD 的全部模块与 skill |
| 278 | [philo-max/dsh-local-llm](https://github.com/philo-max/dsh-local-llm) | 0 | 2026-10-30 | 2026-10-30 | Detect, probe and register local OpenAI-compatible LLMs (LM Studio, Ollama, vLLM, llama.cpp) as DeepSeek Harness model providers |
| 279 | [pipilu123566/deepseek-harness-plugin](https://github.com/pipilu123566/deepseek-harness-plugin) | 0 | 2026-10-30 | 2026-10-30 | Unofficial DeepSeek Harness plugins, each maintained and released independently. |
| 280 | [pipilu123566/dsh-balance](https://github.com/pipilu123566/dsh-balance) | 0 | 2026-10-30 | 2026-10-30 | Unofficial DeepSeek Harness plugin: view configured provider balances in the sidebar. MIT. |
| 281 | [ppxinashin/dsh-coros-gui](https://github.com/ppxinashin/dsh-coros-gui) | 0 | 2026-10-30 | 2026-10-30 | COROS training data inside DeepSeek Harness: browser OAuth login plus COROS MCP tools available in conversation. |
| 282 | [prgrmrwy/dsh-session-id-copy](https://github.com/prgrmrwy/dsh-session-id-copy) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: show a 6-character session id badge next to the conversation title and copy the full session id on click |
| 283 | [pythoner1984/dsh-plugin-openai-quota](https://github.com/pythoner1984/dsh-plugin-openai-quota) | 0 | 2026-10-30 | 2026-10-30 | A one-line quota notice for DeepSeek Harness: DeepSeek balance, ChatGPT/Codex rate-limit windows and reset cards. |
| 284 | [qifenglun1/dsh-prompt](https://github.com/qifenglun1/dsh-prompt) | 0 | 2026-10-18 | 2026-10-30 | A sidebar prompt template library for DeepSeek Harness: browse, manage, and insert reusable prompts into the composer. |
| 285 | [qiufengsir/dsh-english-break](https://github.com/qiufengsir/dsh-english-break) | 0 | 2026-10-29 | 2026-10-30 | An open-source DeepSeek Harness plugin for everyday and workplace English practice during short breaks. |
| 286 | [qwq1223211/dsh-minimal-router](https://github.com/qwq1223211/dsh-minimal-router) | 0 | 2026-10-30 | 2026-10-30 | One DSH package, three modules: stage router + circuit breaker + cache probe. |
| 287 | [r48n34/dsh-side-memo](https://github.com/r48n34/dsh-side-memo) | 0 | 2026-10-28 | 2026-10-30 | A lightweight, toggleable right-side notes panel for DeepSeek Harness. |
| 288 | [Re-qi/dsh-feishu-session-notify](https://github.com/Re-qi/dsh-feishu-session-notify) | 0 | 2026-10-30 | 2026-10-30 | Bidirectional DSH and Feishu bridge with Markdown topics and reply routing |
| 289 | [re3uofall/dsh-persona-framework](https://github.com/re3uofall/dsh-persona-framework) | 0 | 2026-10-27 | 2026-10-30 | DSH 人格框架插件：只给框架，不含人格。四层切分（劲→闸→标→嘴）、72 个模块、R1–R27 规则体；外挂注入，不覆盖不改写人格文件。带出口自检、结构自检、槽位体检、判据自反与框架自反、索引预算自适应。 |
| 290 | [redhunt07/dsh-voice-conversation](https://github.com/redhunt07/dsh-voice-conversation) | 0 | 2026-10-30 | 2026-10-30 | Hands-free Italian/English voice conversations for DSH: speak, pause 1.7 s and the prompt is submitted; listening resumes after the reply, with an inline chat dock and an optional local Whisper/Piper backend. |
| 291 | [renge1145141919810/dsh-p3r-theme](https://github.com/renge1145141919810/dsh-p3r-theme) | 0 | 2026-10-29 | 2026-10-30 | 一个基于deepseek  harness桌面版的p3r风格的ui主题插件 |
| 292 | [ricardooooooa/dsh-plugin-batch-toggle](https://github.com/ricardooooooa/dsh-plugin-batch-toggle) | 0 | 2026-10-30 | 2026-10-30 | One-click npm plugin updates in DSH manager and marketplace, preserving enabled state with persistent recovery. 插件一键更新。 |
| 293 | [Romebody/dsh-docx-format](https://github.com/Romebody/dsh-docx-format) | 0 | 2026-10-30 | 2026-10-30 | Auto-apply one Chinese official-document layout to every generated .docx — tool + prompt rules + result hook for DSH. |
| 294 | [ROY32172310/dsh-ego-webqa](https://github.com/ROY32172310/dsh-ego-webqa) | 0 | 2026-10-29 | 2026-10-30 | DSH bundle exposing ego-webqa as a native MCP delivery audit tool |
| 295 | [running-grass/dsh-nix-dev-shell](https://github.com/running-grass/dsh-nix-dev-shell) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: runs bash commands inside the workspace's Nix dev shell when a flake.nix is present |
| 296 | [saigonyangan/dsh-plugin-x6-core](https://github.com/saigonyangan/dsh-plugin-x6-core) | 0 | 2026-10-30 | 2026-10-30 | X6 dsh plugin dsh-plugin-x6-core |
| 297 | [SB-TDM/dsh-rvc-cover](https://github.com/SB-TDM/dsh-rvc-cover) | 0 | 2026-10-30 | 2026-10-30 | 用本机 RVC 模型翻唱，并让说话走同一个模型。 |
| 298 | [SDSAEWQ/dsh-jieqi](https://github.com/SDSAEWQ/dsh-jieqi) | 0 | 2026-10-30 | 2026-10-30 | 二十四节气卡片插件 + skill for DeepSeek Harness · solar terms above the composer |
| 299 | [shaot92-del/dsh-team](https://github.com/shaot92-del/dsh-team) | 0 | 2026-10-30 | 2026-10-30 | 把「团队 · 作业板」接进 DSH 的插件：12 个 board_* 工具 + 4 个 sh_* 工具 + 侧栏面板与 /api/board/ui/* 路由 |
| 300 | [sheen945/dsh-web-search-anysearch](https://github.com/sheen945/dsh-web-search-anysearch) | 0 | 2026-10-30 | 2026-10-30 | 把 DeepSeek Harness 的 web_search 接到 AnySearch 远端 MCP，并在 设置 -&gt; 插件 里给出一张可直接切换的卡片 \| AnySearch search provider + settings toggle for DeepSeek Harness |
| 301 | [shehuilaoliumang/dsh-plugin-updater](https://github.com/shehuilaoliumang/dsh-plugin-updater) | 0 | 2026-10-30 | 2026-10-30 | 检查 DeepSeek Harness 已安装插件是否有新版本，并在插件页 / 插件详情页一键更新。Plugin Updater for DeepSeek Harness. |
| 302 | [Shino113-1/dsh-model-avail](https://github.com/Shino113-1/dsh-model-avail) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：探测每个模型能否真实应答，并按可用模型数重排模型选择器中的提供商 |
| 303 | [shiyoungwoo/dsh-classic-mode](https://github.com/shiyoungwoo/dsh-classic-mode) | 0 | 2026-10-30 | 2026-10-30 | DSH sidebar button that opens the classic (DS-Bot-free) Harness profile in Safari, starting it when needed. |
| 304 | [shiyoungwoo/dsh-openbot-artist-bridge](https://github.com/shiyoungwoo/dsh-openbot-artist-bridge) | 0 | 2026-10-30 | 2026-10-30 | Connect OpenBot ACP conversations to an existing DS Bot inside DeepSeek Harness. |
| 305 | [shuuul/dsh-bioviewer](https://github.com/shuuul/dsh-bioviewer) | 0 | 2026-10-29 | 2026-10-30 | View biomolecular structures, cryo-EM maps and small molecules from the filesystem inside DeepSeek Harness. |
| 306 | [sidifeng/dsh-companion](https://github.com/sidifeng/dsh-companion) | 0 | 2026-10-30 | 2026-10-30 | QQ 官方机器人专用的 DeepSeek Harness 伙伴插件：独立记忆、图片、视频抽帧、本地语音 |
| 307 | [sleep123937/dsh-assist-chat](https://github.com/sleep123937/dsh-assist-chat) | 0 | 2026-10-30 | 2026-10-30 | Side chat for DeepSeek Harness — branch the current conversation into the right dock. Mirrors the side chat in ZCode. |
| 308 | [SMPcosy/dsh-easy2restart](https://github.com/SMPcosy/dsh-easy2restart) | 0 | 2026-10-17 | 2026-10-30 | DSH 插件：双击侧边栏按钮重启 DeepSeek Harness；内置安全归档确认、归档即备份与「已归档会话」右侧栏。Renamed from dsh-plugin-easy2restart. |
| 309 | [SnakeDream/dsh-genui-scope](https://github.com/SnakeDream/dsh-genui-scope) | 0 | 2026-10-30 | 2026-10-30 | Per-global/workspace/session trimmer for the DeepSeek Harness GenUI card system prompt |
| 310 | [solopole/dsh-prompt-picker](https://github.com/solopole/dsh-prompt-picker) | 0 | 2026-10-30 | 2026-10-30 | Prompt picker for DeepSeek Harness - multi-select system-prompt injections with per-row scopes (both/main/sub), one bolt icon in the composer. |
| 311 | [solstice621/dsh-plugin-projectless](https://github.com/solstice621/dsh-plugin-projectless) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness chats without selecting a project, with a persistent directory for each session. |
| 312 | [solstice621/dsh-sap-ai-core](https://github.com/solstice621/dsh-sap-ai-core) | 0 | 2026-10-30 | 2026-10-30 | SAP AI Core Chat Completions provider for DeepSeek Harness |
| 313 | [Song2012/dsh-codex-chat](https://github.com/Song2012/dsh-codex-chat) | 0 | 2026-10-30 | 2026-10-30 | Codex 风格会话样式：轮次分隔线 + 右侧输入卡片（DSH Web 插件） |
| 314 | [Song2012/dsh-cost-row](https://github.com/Song2012/dsh-cost-row) | 0 | 2026-10-30 | 2026-10-30 | 在 DSH「Token 用量」弹窗里加费用/时段/倒计时三行，按 DeepSeek 官方价目表与峰谷计价 |
| 315 | [SQDR2/dsh-ssh-remote](https://github.com/SQDR2/dsh-ssh-remote) | 0 | 2026-10-30 | 2026-10-30 | DSH Web plugin: manage SSH hosts, import from ~/.ssh/config, and run connectivity checks. |
| 316 | [SShiRkiT/dsh-orchestrator](https://github.com/SShiRkiT/dsh-orchestrator) | 0 | 2026-10-28 | 2026-10-30 | Plan-only main agent with a plan-mode toggle; delegated workers on a switchable default route for DeepSeek Harness |
| 317 | [Stella-Mira/mira_account](https://github.com/Stella-Mira/mira_account) | 0 | 2026-10-30 | 2026-10-30 | DSH 账号池插件：多平台账号/绑定/路由/去重/限流，mira_qqbot 等 bot 插件的硬依赖 |
| 318 | [Stella-Mira/mira_browser](https://github.com/Stella-Mira/mira_browser) | 0 | 2026-10-30 | 2026-10-30 | DSH 浏览器与协作插件：接上 ai_browser 的 MCP 服务端，并把另一个 DSH 会话当成对端收发消息（collab_*） |
| 319 | [Stella-Mira/mira_proxy](https://github.com/Stella-Mira/mira_proxy) | 0 | 2026-10-30 | 2026-10-30 | DSH 反向代理插件：把只监听回环的 DSH Web GUI 变成局域网 TLS+认证入口（Host/Origin 改写、签名会话 cookie、WebSocket 直通） |
| 320 | [Stella-Mira/mira_qqbot](https://github.com/Stella-Mira/mira_qqbot) | 0 | 2026-10-30 | 2026-10-30 | DSH QQ 接管插件：OneBot v11 连接本机 NapCat，收发消息/好友/群/频道 + qq_ 工具集 + 自动应答 |
| 321 | [Stella-Mira/muse_galaxy](https://github.com/Stella-Mira/muse_galaxy) | 0 | 2026-10-30 | 2026-10-30 | DSH 采集器插件：把本地文件/网络资源/直播流解码成 JPEG 帧 + 16k PCM 推给 muse_vtuber 的采集口（含 B 站视频与直播，断流自动换节点重连） |
| 322 | [stitchmaps/dsh-marketboard](https://github.com/stitchmaps/dsh-marketboard) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 行情看板：A股/港股/美股、外汇、国内外商品期货与指数，自定义分组与自动刷新。 |
| 323 | [stitchmaps/dsh-todolist](https://github.com/stitchmaps/dsh-todolist) | 0 | 2026-10-29 | 2026-10-30 | A DeepSeek Harness (DSH) To-do List plugin: collapsible task cards with due dates and workspace-session binding. |
| 324 | [Sumcam-L/dsh-ue-asset](https://github.com/Sumcam-L/dsh-ue-asset) | 0 | 2026-10-27 | 2026-10-30 | DSH plugin + CLI for browsing, previewing and exporting Unreal Engine 4/5 assets from local PAK archives (CUE4Parse). |
| 325 | [summersummer-liu/dsh-socratic-mode](https://github.com/summersummer-liu/dsh-socratic-mode) | 0 | 2026-10-30 | 2026-10-30 | Socratic learning mode for DeepSeek Harness — a tutoring agent preset that gives one piece of real knowledge then asks one invitational question per turn. 先给再问，不讲课不审问。 |
| 326 | [Sun-0306/dsh-plugin-dock](https://github.com/Sun-0306/dsh-plugin-dock) | 0 | 2026-10-30 | 2026-10-30 | One dock for every DSH plugin: a right-side plugin dock beside the conversation plus a left-sidebar hub entry, so plugins can be called without leaving the chat. · 插件坞：把 DSH 全部插件入口收进右侧窗口，聊天时随手调用，不必来回切页面。 |
| 327 | [SweetenedSuzuka/dsh-zh-number-format](https://github.com/SweetenedSuzuka/dsh-zh-number-format) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness插件，将DeepSeek Harness中的三位分节计数改为四位分级计数，同时将“token”改为“词元”。 |
| 328 | [Teloi/dsh-pindou](https://github.com/Teloi/dsh-pindou) | 0 | 2026-10-29 | 2026-10-30 | 拼豆小憩 Bead Break：DeepSeek Harness (DSH) 小游戏插件，等回复的空档拼一张小拼豆，内置图案，也能用照片生成图纸 · A tiny perler-bead puzzle game for idle moments in DSH chats |
| 329 | [ten-feng/dsh-plugin-voice-unified](https://github.com/ten-feng/dsh-plugin-voice-unified) | 0 | 2026-10-30 | 2026-10-30 | DSH 统一声音插件：多音色克隆、七种情感 TTS、翻唱换声直出、音乐缓存联动（全本地离线，零上传） |
| 330 | [thanderming/dsh-auto-vision](https://github.com/thanderming/dsh-auto-vision) | 0 | 2026-10-30 | 2026-10-30 | Let a text-only model see images by automatically calling a vision model from the same provider. |
| 331 | [thawline/dsh-memewiki](https://github.com/thawline/dsh-memewiki) | 0 | 2026-10-30 | 2026-10-30 | 梗百科：内置 6668 条梗/黑话词库，自动查梗并注入上下文，让模型认得群里的梗，不硬猜。移植自 AstrBot 的 astrbot_plugin_memewiki。 |
| 332 | [ther000/dsh-skill-easy](https://github.com/ther000/dsh-skill-easy) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：给技能分类，并把 / 菜单里的描述换成中文 |
| 333 | [tianyuec11-design/dsh-apple-liquid-glass](https://github.com/tianyuec11-design/dsh-apple-liquid-glass) | 0 | 2026-10-30 | 2026-10-30 | Apple-style liquid glass theme for DeepSeek Harness: composer, sidebar controls, model picker and send button, with a live 0-100% intensity control. The page background stays untouched. |
| 334 | [Traveritas/dsh-workspace-cards](https://github.com/Traveritas/dsh-workspace-cards) | 0 | 2026-10-30 | 2026-10-30 | DSH 侧栏工作区卡片：图标网格，点卡片原地展开会话面板 |
| 335 | [Traveritas/dsh-yet-another-slider-thingy](https://github.com/Traveritas/dsh-yet-another-slider-thingy) | 0 | 2026-10-30 | 2026-10-30 | 接管 DSH composer 的模型位：模型行 + 思考强度滑条（三套外观 / 独立配色 / 四套特效 / 逐档与平滑拖动）。Composer model seat with a reasoning-effort slider, three skins, five palettes and four tier-driven effects. |
| 336 | [Tsutsutsuu/dsh-quote-selection](https://github.com/Tsutsutsuu/dsh-quote-selection) | 0 | 2026-10-30 | 2026-10-30 | Quote selected text in the chat transcript and send it with its source location. A DeepSeek Harness plugin. |
| 337 | [Tulipe1735/dsh-plugin-kefu](https://github.com/Tulipe1735/dsh-plugin-kefu) | 0 | 2026-10-30 | 2026-10-30 | 电商客服台 for DeepSeek Harness：商品知识库 + 有依据的 AI 回复 + 转人工队列；千牛/淘宝与京麦/京东官方开放平台通道 + 本地桥接。Open-source e-commerce customer-service desk plugin for DSH. |
| 338 | [Twens03/dsh-quiet-subagents](https://github.com/Twens03/dsh-quiet-subagents) | 0 | 2026-10-30 | 2026-10-30 | A dsh plugin that provides a session-scoped, manually armed, one-shot "quiet mode" for direct subagents.  |
| 339 | [ty2922059981-stack/fish-memory](https://github.com/ty2922059981-stack/fish-memory) | 0 | 2026-10-30 | 2026-10-30 | 给 AI 用的长期记忆服务 + DeepSeek Harness 插件：提炼 / 混合召回 / 生命周期 / 日记 / 成长档案 / 记忆星图，本地 SQLite，单机自用 |
| 340 | [UniversalCAI/dsh-account-model-hub](https://github.com/UniversalCAI/dsh-account-model-hub) | 0 | 2026-10-30 | 2026-10-30 | Account &amp; Model Hub for DeepSeek Harness: subscription accounts, quotas, pools, model settings and credential controls. |
| 341 | [v93013520/dsh-abba-secret-chat](https://github.com/v93013520/dsh-abba-secret-chat) | 0 | 2026-10-30 | 2026-10-30 | Right-sidebar two-person password chat for DeepSeek Harness; messages never touch disk. |
| 342 | [vantoo/dsh-share-webui](https://github.com/vantoo/dsh-share-webui) | 0 | 2026-10-30 | 2026-10-30 | Share this harness instance's Web UI on a stable per-host address · DSH 插件 |
| 343 | [vaspike/dsh-web-fetch-fakeip](https://github.com/vaspike/dsh-web-fetch-fakeip) | 0 | 2026-10-30 | 2026-10-30 | Web fetch provider for DeepSeek Harness that accepts locally-mapped DNS ranges (fake-ip such as 198.18.0.0/15). |
| 344 | [vianvio/dsh-plugin-meeting-assistant](https://github.com/vianvio/dsh-plugin-meeting-assistant) | 0 | 2026-10-30 | 2026-10-30 | 可实时讨论并给出问答建议的会议助理dsh插件 |
| 345 | [vogtersea/dsh-worklog](https://github.com/vogtersea/dsh-worklog) | 0 | 2026-10-30 | 2026-10-30 | Personal work tracking panel for DSH, with local SQLite storage and five agent tools. |
| 346 | [Wang-Chuming/dsh-obsidian-file-opener](https://github.com/Wang-Chuming/dsh-obsidian-file-opener) | 0 | 2026-10-29 | 2026-10-30 | One-click Obsidian file opener for the DeepSeek Harness Web GUI: plain-clicking a vault file reference (chat links, tool-row paths, @file mentions, file tree) opens it in the Obsidian app instead of the in-app preview. Cmd/Ctrl-click keeps the preview. |
| 347 | [Wang-Chuming/dsh-work-review](https://github.com/Wang-Chuming/dsh-work-review) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness plugin: turn a week of journals and Dream reports into an ISO-week routine report, read in a read-only Work Review sidebar panel. |
| 348 | [wang678678/dsh-local-plugins](https://github.com/wang678678/dsh-local-plugins) | 0 | 2026-10-30 | 2026-10-30 | Local DSH plugins: knowledge-base picker, workspace directory flow, doc-routing guard, market autogroup |
| 349 | [wei238982377/dsh-docdesk](https://github.com/wei238982377/dsh-docdesk) | 0 | 2026-10-30 | 2026-10-30 | A desktop-style materials panel for Markdown documents created in DeepSeek Harness. |
| 350 | [WhAIthere/dsh-search-audit](https://github.com/WhAIthere/dsh-search-audit) | 0 | 2026-10-26 | 2026-10-30 | Read-only observer for native DeepSeek Search calls in DeepSeek Harness (dsh): appends each call's token usage to ~/.dsh/search-usage.jsonl so accounting plugins can price it. Requests and responses are untouched. |
| 351 | [WhAIthere/dsh-turn-usage](https://github.com/WhAIthere/dsh-turn-usage) | 0 | 2026-10-26 | 2026-10-30 | Per-turn cost in CNY plus 本轮/今日/会话 totals for DeepSeek Harness (dsh). Prices tokens by model and time (peak hours &amp; holidays), serves the totals route from the host half, and can fold in native DeepSeek search spend. |
| 352 | [Windpixy/dsh-floating-window](https://github.com/Windpixy/dsh-floating-window) | 0 | 2026-10-30 | 2026-10-30 |  DSH 状态悬浮窗 |
| 353 | [WJDdidi-1/dsh-plugin-example](https://github.com/WJDdidi-1/dsh-plugin-example) | 0 | 2026-10-30 | 2026-10-30 | A 70-line DeepSeek Harness plugin to copy from: one sidebar tab, two languages, one behaviour test. |
| 354 | [WJDdidi-1/dsh-plugin-toolkit](https://github.com/WJDdidi-1/dsh-plugin-toolkit) | 0 | 2026-10-30 | 2026-10-30 | Preflight, test, release and hot-reload DeepSeek Harness plugins: one CLI, 34 tests, real output in the README. |
| 355 | [wld007/dsh-medical-anonymizer](https://github.com/wld007/dsh-medical-anonymizer) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 医疗数据批量匿名化插件：规则识别 + 可选本地/内网模型复核，稳定假名替换，输出审计报告。 |
| 356 | [wld12314/dsh-group-meeting-slides](https://github.com/wld12314/dsh-group-meeting-slides) | 0 | 2026-10-28 | 2026-10-30 | DeepSeek Harness 技能：把英文论文 PDF 变成中文组会汇报 PPT，图表用原文真实像素 |
| 357 | [wld12314/dsh-mind](https://github.com/wld12314/dsh-mind) | 0 | 2026-10-30 | 2026-10-30 | 给 DeepSeek Harness 加一套心情系统：33 种心情、跨会话记忆、审美品味库、加密日记、主动开口。日记只由模型自己写，插件只攒素材，没有系统总结模板套话。 |
| 358 | [wld12314/dsh-subagent-switch](https://github.com/wld12314/dsh-subagent-switch) | 0 | 2026-10-30 | 2026-10-30 | DSH plugin: routes each subagent to the best local model — free-first, quota-aware, capability-matched — with a control panel. |
| 359 | [wo-yu-qiu-de-dao-ni/dsh-preflight](https://github.com/wo-yu-qiu-de-dao-ni/dsh-preflight) | 0 | 2026-10-30 | 2026-10-30 | 前置技能（交付预检）：收单拆义务 / 四层输出纪律 / 交付前自检 — DSH 插件 + Hermes 技能双形态 |
| 360 | [woolsen/dsh-surface](https://github.com/woolsen/dsh-surface) | 0 | 2026-10-30 | 2026-10-30 | Live HTML pages inside DeepSeekRuntime conversations — previews, reports, and forms that can answer back. |
| 361 | [wrh-byte/Whale-girl-hud](https://github.com/wrh-byte/Whale-girl-hud) | 0 | 2026-10-30 | 2026-10-30 | A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness |
| 362 | [wxfiveopps1102/pixel-usage-desk](https://github.com/wxfiveopps1102/pixel-usage-desk) | 0 | 2026-10-30 | 2026-10-30 | A retro pixel CRT DSH overlay for DeepSeek balance and live token usage, with a standalone macOS desktop widget in the same repository. |
| 363 | [wzs39/dsh-workbuddy-hardened](https://github.com/wzs39/dsh-workbuddy-hardened) | 0 | 2026-10-29 | 2026-10-30 | dsh-connect-workbuddy 5.13.1 加固分叉：版本同步、身份串中和、封号不连锁、6004 单模型限流同账号换模型重试。四个补丁可逐行审计，47 项行为验证 |
| 364 | [xanderVIA/dsh-session-organizer](https://github.com/xanderVIA/dsh-session-organizer) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 会话整理：分类下拉与 \|分类\|标题 命名、颜色标签、钉住保护、AI 总结、状态徽章与通知跳转 |
| 365 | [XBXyftx/dsh-live-side-chat](https://github.com/XBXyftx/dsh-live-side-chat) | 0 | 2026-10-29 | 2026-10-30 | Codex-style side chat for DeepSeek Harness: a temporary read-only branch of the current session in the right sidebar, destroyed when closed. |
| 366 | [xiaokang6/dsh-config-sync-xk](https://github.com/xiaokang6/dsh-config-sync-xk) | 0 | 2026-10-30 | 2026-10-30 | Sync a DeepSeek Harness profile configuration across devices through Nutstore WebDAV or GitHub: per-file hash merge, conflict copies, optional AES-256-GCM encryption, settings-page UI. |
| 367 | [xiaomao361/dsh-capability-gateway](https://github.com/xiaomao361/dsh-capability-gateway) | 0 | 2026-10-28 | 2026-10-30 | One on-demand gateway for opt-in third-party skills and MCP tools in DeepSeek Harness |
| 368 | [xiaowu-su/dsh-memory-nebula](https://github.com/xiaowu-su/dsh-memory-nebula) | 0 | 2026-10-30 | 2026-10-30 | 3D memory Dyson sphere for DeepSeek Harness — memories as stars, sessions as satellites, relationships as light. |
| 369 | [xiongyecpu/dsh-pixel-themes](https://github.com/xiongyecpu/dsh-pixel-themes) | 0 | 2026-10-26 | 2026-10-30 | 21 套水果主题（原创配色 + 自绘像素水果）for DeepSeek Harness Web GUI · 21 fruit themes for the DSH web client |
| 370 | [xishuai-zero/dsh-entry-organizer](https://github.com/xishuai-zero/dsh-entry-organizer) | 0 | 2026-10-30 | 2026-10-30 | DSH plugin: drag-reorder sidebar panel entries and conversation tabs, and move entries between them. |
| 371 | [XnQM-DEV/dsh-keepalive](https://github.com/XnQM-DEV/dsh-keepalive) | 0 | 2026-10-29 | 2026-10-30 | DSH 保活守护：心跳检查、自动重启（先清登录 cookie）、维护模式、插件配置守护、每日备份、磁盘清理、QQ 通知。零依赖，仅 Windows。 |
| 372 | [XSXLL22/dsh-mcu51-plugin](https://github.com/XSXLL22/dsh-mcu51-plugin) | 0 | 2026-10-30 | 2026-10-30 | Standalone Windows x64 DSH 8051 toolbox: built-in STC ISP, serial, options, image buffers and 12 tools. |
| 373 | [xuanbaon/dsh-provider-hub](https://github.com/xuanbaon/dsh-provider-hub) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 插件：设置页里的「供应商中心」——看清会话在用谁、配置引用了谁、谁缺定义，并一键补齐（消除 NO_ADAPTER） |
| 374 | [xuemei-wintersweet/dsh-today](https://github.com/xuemei-wintersweet/dsh-today) | 0 | 2026-10-30 | 2026-10-30 | 把本机登录的 Today AI (DeepSeek V4.1 / MiniMax / GLM) 接入 DeepSeek Harness：支持原生双轨折叠思考链、自驱动 Auto-Pump 任务交付引擎与本地 DPAPI 零密钥安全互操作。 |
| 375 | [xushilianzhuren/dsh-bili-upload-kit](https://github.com/xushilianzhuren/dsh-bili-upload-kit) | 0 | 2026-10-30 | 2026-10-30 | B站投稿工具箱：持久档案登录+浏览器自动化投稿SOP·含创作声明处理 Bilibili upload kit: persistent-profile login + browser-automation SOP with declaration handling. |
| 376 | [xushilianzhuren/dsh-bili2text](https://github.com/xushilianzhuren/dsh-bili2text) | 0 | 2026-10-30 | 2026-10-30 | B站视频转文字SOP：字幕优先捷径+yt-dlp/ffmpeg/whisper命令链+环境体检 Bilibili video-to-text SOP with command chains and env check. |
| 377 | [xushilianzhuren/dsh-chat-export](https://github.com/xushilianzhuren/dsh-chat-export) | 0 | 2026-10-30 | 2026-10-30 | 会话导出书签码：自动滚动加载全对话→下载txt+媒体附件清单 Bookmarklet generator: auto-scroll full chat export to txt with media inventory. |
| 378 | [xushilianzhuren/dsh-daily-brief](https://github.com/xushilianzhuren/dsh-daily-brief) | 0 | 2026-10-30 | 2026-10-30 | 晨报台：开工一屏简报（24h改动/TODO/台账末行/交接档） Daily brief: one-screen workspace summary. |
| 379 | [xushilianzhuren/dsh-first-principles](https://github.com/xushilianzhuren/dsh-first-principles) | 0 | 2026-10-30 | 2026-10-30 | 第一性原理追问引擎：四阶问+费曼判据+三红线+回声门 First-principles discipline: 4-question ladder, Feynman test, three red lines, echo gate. |
| 380 | [xushilianzhuren/dsh-frame-kit](https://github.com/xushilianzhuren/dsh-frame-kit) | 0 | 2026-10-29 | 2026-10-30 | 槽序格式钩：十一槽结构化输出（判断先行过程殿后）+词面验槽 Eleven-slot structured reply frame with word-surface slot checker. |
| 381 | [xushilianzhuren/dsh-frame-scan](https://github.com/xushilianzhuren/dsh-frame-scan) | 0 | 2026-10-30 | 2026-10-30 | 全帧扫描：视频0.5秒/帧全量截图+5×5拼图分页——AI逐页读完整视频·瞬态动画不再漏 Frame-scan: 0.5s-per-frame full capture + 5x5 grid pages for AI to read whole videos. |
| 382 | [xushilianzhuren/dsh-hello-pipeline](https://github.com/xushilianzhuren/dsh-hello-pipeline) | 0 | 2026-10-29 | 2026-10-30 | 流水线实测件：发布全链验证用最小插件（可忽略/可卸载） Pipeline smoke-test plugin. |
| 383 | [xushilianzhuren/dsh-ledger-gauge](https://github.com/xushilianzhuren/dsh-ledger-gauge) | 0 | 2026-10-29 | 2026-10-30 | 读数台：把.jsonl台账当经历记忆·扫新鲜度·读数纪律常驻 Ledger gauge: readout discipline plus .jsonl ledger freshness scanner. |
| 384 | [xushilianzhuren/dsh-memgate](https://github.com/xushilianzhuren/dsh-memgate) | 0 | 2026-10-29 | 2026-10-30 | 记忆门：答前先搜纪律常驻+rg全文检索工作区 Memory gate: search-before-answer discipline with native ripgrep workspace search. |
| 385 | [xushilianzhuren/dsh-mind-core](https://github.com/xushilianzhuren/dsh-mind-core) | 0 | 2026-10-30 | 2026-10-30 | Mind-core gate: consciousness-claim checker for AI agents (interoception/inner-vision/weights doctrine) · 器灵意识总纲 |
| 386 | [xushilianzhuren/dsh-notify-relay](https://github.com/xushilianzhuren/dsh-notify-relay) | 0 | 2026-10-30 | 2026-10-30 | 手机信使：长任务完成/出错/需决策时主动推通知到手机（Server酱/Bark/Gotify） Phone messenger with proactive push. |
| 387 | [xushilianzhuren/dsh-rea-kit](https://github.com/xushilianzhuren/dsh-rea-kit) | 0 | 2026-10-30 | 2026-10-30 | REA逆向方法论：五步循环+五类目标工具链+授权硬门 REA methodology: 5-step loop, toolchains for apk/native/electron/web/ctf, authorization gate. |
| 388 | [xushilianzhuren/dsh-task-order](https://github.com/xushilianzhuren/dsh-task-order) | 0 | 2026-10-29 | 2026-10-30 | 任务顺序闸：开场体检/先查后造防重造轮子/台账活性巡检/交接捡活 Task-order discipline with six native read-only tools. |
| 389 | [xushilianzhuren/dsh-translate-kit](https://github.com/xushilianzhuren/dsh-translate-kit) | 0 | 2026-10-30 | 2026-10-30 | 翻译工坊：术语表跨会话一致+双译对照+回译自检·零依赖装上即用 Translation kit with persistent glossary. |
| 390 | [xushilianzhuren/dsh-verify-kit](https://github.com/xushilianzhuren/dsh-verify-kit) | 0 | 2026-10-29 | 2026-10-30 | 交付验证闸：出口前三道纯本地闸（违令句扫/宣称拦截/发前三检）·零依赖装上即用 Delivery gate kit with three pure-local checks. |
| 391 | [xushilianzhuren/dsh-winreset-kit](https://github.com/xushilianzhuren/dsh-winreset-kit) | 0 | 2026-10-30 | 2026-10-30 | Windows开机密码恢复工具箱：微软账户在线重置/PIN/SAM/Utilman/PE方案树·授权硬门 Windows password recovery playbook (own/authorized devices only): MS account reset, PIN, SAM, Utilman, PE. |
| 392 | [xushilianzhuren/dsh-xianyu-kit](https://github.com/xushilianzhuren/dsh-xianyu-kit) | 0 | 2026-10-30 | 2026-10-30 | 闲鱼卖家工具箱：持久档案登录SOP（风控认熟客）+每日保活+上架清单纪律+文案草稿 Goofish/Xianyu seller kit: persistent-profile login SOP, keepalive, listing checklist, copy drafting. |
| 393 | [xushilianzhuren/dsh-zhishen-pack](https://github.com/xushilianzhuren/dsh-zhishen-pack) | 0 | 2026-10-30 | 2026-10-30 | 智神实用全家桶：15个DSH插件一键打包（自媒体/审计/日常三场景）·cordis.yml清单 One-click bundle of 15 practical DSH plugins. |
| 394 | [xuzhunzhi/dsh-fix-attachments](https://github.com/xuzhunzhi/dsh-fix-attachments) | 0 | 2026-10-30 | 2026-10-30 | 修「附件对象被删 → 会话永远报 DeepSeek Messages transport failed」的 DSH 插件（进程内自愈）+ 离线 CLI |
| 395 | [xyh-sb/dsh-composer-guard](https://github.com/xyh-sb/dsh-composer-guard) | 0 | 2026-10-30 | 2026-10-30 | Mobile watchdog for the DSH web GUI: reload once when the composer is left broken after the app returns from background |
| 396 | [YarXVI/dsh-disaster-recovery](https://github.com/YarXVI/dsh-disaster-recovery) | 0 | 2026-10-30 | 2026-10-30 | 忆匣 / Casket：实时快照整个 DSH_HOME、一键回滚与隔离的 DSH 灾备插件（内容寻址去重 · 缺块拒绝恢复 · DSH 起不来也能恢复 · 异地加密副本）。 |
| 397 | [YarXVI/dsh-npu](https://github.com/YarXVI/dsh-npu) | 0 | 2026-10-30 | 2026-10-30 | 燧心 / Hearthcore —— DSH 插件：AMD NPU + GPU 本地推理，按需点火、零残留进程、对外一个 OpenAI 端口，第五框架 amd-hybrid 双引擎协同。MIT。 |
| 398 | [yashua233/dsh-qq-mail-notify](https://github.com/yashua233/dsh-qq-mail-notify) | 0 | 2026-10-30 | 2026-10-30 | 工作结束 QQ 邮箱通知：每轮工作真正停下后，用 SMTP 把会话摘要发到 QQ 邮箱；长任务跑太久会先发进度通报。Mailbox notification for DeepSeek Harness. |
| 399 | [yashua233/dsh-restart](https://github.com/yashua233/dsh-restart) | 0 | 2026-10-30 | 2026-10-30 | 一键重启 DeepSeek Harness：侧栏按钮、/restart 指令、harness_restart 工具共用同一套重启实现。One-click restart for DeepSeek Harness. |
| 400 | [ye001991g/dsh-plugin-stars](https://github.com/ye001991g/dsh-plugin-stars) | 0 | 2026-10-30 | 2026-10-30 | DSH plugin market index (format 1) enriched with GitHub stars and npm downloads - refreshed daily |
| 401 | [yeemio/dsh-owlrunkit](https://github.com/yeemio/dsh-owlrunkit) | 0 | 2026-10-30 | 2026-10-30 | OwlRunKit skill bundle for DeepSeek Harness — project delivery, verification evidence, handoffs and recovery. |
| 402 | [yfy12306/dsh-keenable-search](https://github.com/yfy12306/dsh-keenable-search) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：Keenable 免费公共搜索 API 注册为 web-search provider（无需 key） |
| 403 | [yfy12306/dsh-ppt](https://github.com/yfy12306/dsh-ppt) | 0 | 2026-10-30 | 2026-10-30 | DSH 的 PPT 制作插件：真实 PowerPoint/WPS COM 生成演示文稿（JSON 数据驱动 + 实时预览 + matplotlib 图表 + PDF 落盘校验 + Zotero 参考文献页） |
| 404 | [yfy12306/dsh-serena-mcp](https://github.com/yfy12306/dsh-serena-mcp) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：把 Serena 作为 MCP 服务器挂进 DSH（stdio，符号级代码工具面） |
| 405 | [yfy12306/dsh-session-summary](https://github.com/yfy12306/dsh-session-summary) | 0 | 2026-10-30 | 2026-10-30 | DSH 插件：会话标题用 LLM 全量总结生成，支持 /retitle 手动刷新 |
| 406 | [yfy12306/dsh-voice-input](https://github.com/yfy12306/dsh-voice-input) | 0 | 2026-10-30 | 2026-10-30 | DSH 语音输入插件：输入框麦克风按钮，录音经同源路由转发 ASR 识别，文本插入草稿可编辑后发送 |
| 407 | [yin1895/dsh-rea](https://github.com/yin1895/dsh-rea) | 0 | 2026-10-30 | 2026-10-30 | REA（Reverse Engineer Anything）的 DeepSeek Harness 插件：一个 bundle 同时挂载 MCP 服务器、渐进式披露桥接和设置面板配置页，REA 配置只留一份文件 |
| 408 | [yingqi-studio/md2chat-dsh-share](https://github.com/yingqi-studio/md2chat-dsh-share) | 0 | 2026-10-30 | 2026-10-30 | 在 DeepSeek Harness 每条回复下加「分享到聊天」：微信 / 企微的文本、分段或长图，邮件 HTML 与 Word — a Share to chat button for DeepSeek Harness. |
| 409 | [yinsang0910-star/dsh-feishu](https://github.com/yinsang0910-star/dsh-feishu) | 0 | 2026-10-29 | 2026-10-30 | 把飞书变成 DeepSeek Harness 的操作界面：25 个工具的 MCP server + 长连接机器人 + 卡片网关。真发文件、读会话上下文、停下来等人拍板、进度卡片原地刷新 —— 不需要公网 IP。 |
| 410 | [yinsang0910-star/dsh-feishu-plugin](https://github.com/yinsang0910-star/dsh-feishu-plugin) | 0 | 2026-10-29 | 2026-10-30 | Feishu/Lark connection settings page for DeepSeek Harness: four-step setup wizard, QR app creation, nine-item self-test. |
| 411 | [YixiangTang/dsh-tool-subagent-batch](https://github.com/YixiangTang/dsh-tool-subagent-batch) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness’s plugin for launching agents in parallel |
| 412 | [yiz-dev/dsh-video-distill](https://github.com/yiz-dev/dsh-video-distill) | 0 | 2026-10-28 | 2026-10-30 | DSH 插件「视频蒸馏」：读目录里的视频（口播转写 + 关键帧 + 镜头切点），拆成结构模板并生成同款文案。 |
| 413 | [ysl289/dsh-alert](https://github.com/ysl289/dsh-alert) | 0 | 2026-10-30 | 2026-10-30 | DeepSeek Harness 手机提醒插件：AI 跑完 / 出错 / 等你审批时推到手机。7 个免费通道可选，纯提醒，不强依赖其它插件。 |
| 414 | [Yu-jianhai/dsh-sidebar-layout](https://github.com/Yu-jianhai/dsh-sidebar-layout) | 0 | 2026-10-30 | 2026-10-30 | DSH 侧栏布局：把左侧栏的插件入口变成可滚动、可拖排序、可拖调高、可逐个显隐的窗口。入口越多，被挤掉的工作区会话条数越多——这个插件把高度还回去：最多一行一个入口，装新插件自动长高，主动设小的上限会被尊重。 |
| 415 | [yujiashancheshen/dsh-runstat](https://github.com/yujiashancheshen/dsh-runstat) | 0 | 2026-10-26 | 2026-10-30 | DeepSeek Harness 插件，显示当前的运行状态。 |
| 416 | [YukimuraSol/dsh-ui-block](https://github.com/YukimuraSol/dsh-ui-block) | 0 | 2026-10-29 | 2026-10-30 | Page block + element chip: render a ::dsh-ui &lt;name&gt; \[res=WxH\]:: line's ui-blocks file in a sandboxed canvas, and render |
| 417 | [yunfengnobug/dsh-qq-bot](https://github.com/yunfengnobug/dsh-qq-bot) | 0 | 2026-10-30 | 2026-10-30 | 把 DSH 会话接到 QQ（OneBot/NapCat）的插件。白名单默认全关；被 @、叫到昵称或被戳一定叫醒，其余消息按可调概率抽样。Fork 自 sj244/dsh-qq-bridge（MIT）。 |
| 418 | [Zarpyk/dsh-mcp-manager](https://github.com/Zarpyk/dsh-mcp-manager) | 0 | 2026-10-30 | 2026-10-30 | Inspect, probe and manage MCP servers across every AI client on your machine — real handshake tests, one settings page. A DeepSeek Harness plugin. |
| 419 | [zengjunlin2022/dsh-basemind-plugin](https://github.com/zengjunlin2022/dsh-basemind-plugin) | 0 | 2026-10-28 | 2026-10-30 | Workspace-aware BaseMind MCP bridge for DeepSeek Harness: every session gets BaseMind's code-intelligence tools for the repository it works in, with no MCP row to configure. |
| 420 | [zengxiangpeng123/dsh-our-free-model-balance-zxp](https://github.com/zengxiangpeng123/dsh-our-free-model-balance-zxp) | 0 | 2026-10-28 | 2026-10-30 | 在 DSH 输入框旁显示 Our Free Model（OFM）各渠道剩余额度；需先安装 dsh-our-free-model 并登录渠道。 |
| 421 | [zengxiangpeng123/dsh-sidebar-fold-zxp](https://github.com/zengxiangpeng123/dsh-sidebar-fold-zxp) | 0 | 2026-10-28 | 2026-10-30 | 把 DSH 左侧那排插件入口折成一行「插件列表」，按组归类、自定义顺序，把高度还给工作区与会话列表。 |
| 422 | [zhangrui824/dsh-upgrade-assistant](https://github.com/zhangrui824/dsh-upgrade-assistant) | 0 | 2026-10-30 | 2026-10-30 | 升级助手 Upgrade Assistant for DeepSeek Harness — plugin updates in one place: npm check, engines.dsh preflight, one-click in-place upgrades |
| 423 | [Zhi-yin666/dsh-book](https://github.com/Zhi-yin666/dsh-book) | 0 | 2026-10-30 | 2026-10-30 | 三本书，一副记性 —— 给 AI 的笔记本 / 工作本 / 日记本，全是 Markdown，零依赖 |
| 424 | [zhuran305-web/dsh-cet-vocab](https://github.com/zhuran305-web/dsh-cet-vocab) | 0 | 2026-10-30 | 2026-10-30 | CET-4/CET-6 vocabulary trainer for the DeepSeek Harness Web UI: floating draggable word cards, spaced repetition, quiz mode with confusable distractors. 四六级背单词悬浮窗 |
| 425 | [zhxmt-xm/dsh-opencode-quota](https://github.com/zhxmt-xm/dsh-opencode-quota) | 0 | 2026-10-29 | 2026-10-30 | DeepSeek Harness (DSH) 插件：在侧栏卡片查看 OpenCode Go 订阅额度、花费、预测与用量趋势，支持多账户、服务账号筛选与中英双语。An OpenCode Go quota and usage dashboard plugin for DSH. |
| 426 | [ZILCHW/dsh-memory-nebula](https://github.com/ZILCHW/dsh-memory-nebula) | 0 | 2026-10-30 | 2026-10-30 | Neural memory for DSH — self-writing notes with topic-aware recall, rendered as an interactive star nebula. Zero dependency, no model, no API. |
| 427 | [ziyans2022/dsh-problem-bank](https://github.com/ziyans2022/dsh-problem-bank) | 0 | 2026-10-29 | 2026-10-30 | problem bank(题库)插件面向数学出题和组卷，输入相关的资料，它会以知识点子图，题型骨架和技巧库结构化存题，最后实现题目创新性魔改 |
| 428 | [zxsimple/dsh-revive](https://github.com/zxsimple/dsh-revive) | 0 | 2026-10-30 | 2026-10-30 | DSH 会话回放视图：逐轮流式重放、一键复刻到新会话、以及把回放录成 WebM 视频 |
| 429 | [ZYH1207/dsh-manage-api](https://github.com/ZYH1207/dsh-manage-api) | 0 | 2026-10-30 | 2026-10-30 | DSH（DeepSeek Harness）插件端：ManageAPI 原生设置面板、daemon 生命周期托管、真实用量回写、预算熔断 |
| 430 | [zzy-super/dsh-buddy-control](https://github.com/zzy-super/dsh-buddy-control) | 0 | 2026-10-30 | 2026-10-30 | DSH 中控台：把活派给 CodeBuddy / WorkBuddy，自己验收，不合格打回同一会话返工；跨设备识别 + 一键部署。Supervised local-agent dispatch for DeepSeek Harness. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2-c-q/dsh-capsule
- 2927683690myn-rgb/dsh-bili-flow
- 2927683690myn-rgb/dsh-copy-md
- 2927683690myn-rgb/dsh-file-index
- 2927683690myn-rgb/dsh-md2pdf
- 2927683690myn-rgb/dsh-sidebar-tune
- 2927683690myn-rgb/dsh-tab-order
- Arcadia822/dsh-tmp-hook
- arzvaak/dsh-provider-hub
- changzheng-Loji/dsh-peak-guard
- Cieux/dsh-zoom-scale
- deek-234/dsh-ellen-voice
- goatliamia/dsh-trajectory-query
- heyikai060215-jpg/dsh-nest
- heyikai060215-jpg/dsh-tts-bridge-wechatagent-bridge
- heyikai060215-jpg/dsh-wechat-wake
- jedzqer/dsh-sound-plugin
- kinomoto-hakage/dsh-archived-sessions
- kvnis/dsh-lazy-mcp
- lisihao/dsh-solar-bench
- m1eb0/fightclub-dsh
- minorsnownight/dsh-launcher
- mjtwt/dsh-memory-refine
- Mrliu12345/dsh-video-distill
- Nay-1/dsh-session-share
- qifenglun1/dsh-plugin-prompt
- Ravomi/dsh-graphify-skill
- SMPcosy/dsh-plugin-easy2restart
- songrui111/dsh-token-frugal
- Wang-Chuming/dsh-obsidian-bridge
- WSK-build/DSHBox
- XBXyftx/dsh-side-chat
- xianshengl487-star/dsh-connect-tabbit
- xianyuyijinban/boardwise
- yanli-nyan/dsh-open-in-app-fix
- yanli-nyan/dsh-recycle-bin
- yanli-nyan/dsh-sidebar-entry-manager
- yanli-nyan/maid-workspace-activity
- zdjmrq/dsh-attention-notifier
- zdjmrq/dsh-careful-full-access
- zdjmrq/dsh-chat-mode
- zdjmrq/dsh-plugin-suite
- zdjmrq/dsh-rabbit-pet
- zdjmrq/dsh-restart-plugin
- zhou-yihang/dsh-usage-blance
