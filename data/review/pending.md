# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-29**
- 快照日期 / Snapshot date: **2026-10-29 (UTC)**
- 待审核 / Pending: **383**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **27**
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

对比上一份快照 **2026-10-28** / vs previous snapshot **2026-10-28**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **10**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [oceanbase/powercontext](https://github.com/oceanbase/powercontext) | 待审 / pending | 1398 | — | 536 | 352d | 待审高星 | 核准即 Top 16 |
| ⚠️ [huzhengcai471-crypto/dsh-startup-secret](https://github.com/huzhengcai471-crypto/dsh-startup-secret) | 待审 / pending | 167 | — | 7 | 14d | 待审高星 | 核准即榜 #137 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 50804 | +2025 | 1388 | 34d | 日增百星 | 日增 +2025★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 3891 | +231 | 91 | 73d | 日增百星 | 日增 +231★ |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 4887 | +176 | 384 | 75d | 日增百星 | 日增 +176★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 9695 | +169 | 368 | 75d | 日增百星 | 日增 +169★；已不进榜单 |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 4707 | +117 | 319 | 26d | 日增百星 | 日增 +117★；已不进榜单 |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 4514 | +114 | 404 | 21d | 日增百星 | 日增 +114★ |
| ⚠️ [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 已核准 / approved | 6521 | +107 | 203 | 71d | 日增百星 | 日增 +107★；已不进榜单 |
| ⚠️ [SAOS-3624/dsh-video-storyboard](https://github.com/SAOS-3624/dsh-video-storyboard) | 已核准 / approved | 183 | +85 | 15 | 2d | 榜单跃升 | 榜单 197→126；创建 2 天 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [oceanbase/powercontext](https://github.com/oceanbase/powercontext) ⚠️ | 1398 | 2025-11-10 | 2026-10-29 | Agent memory: long-term memory &amp; agent memory handoff. Claude Code &amp; Codex. |
| 2 | [huzhengcai471-crypto/dsh-startup-secret](https://github.com/huzhengcai471-crypto/dsh-startup-secret) ⚠️ | 167 | 2026-10-14 | 2026-10-29 | DeepSeek Harness 启动动画插件（二次创作版）：暗色赛博风格开机动画，徽章标识 + 赛博电子风人物立绘 + 访问密码功能 |
| 3 | [op7418/malfoy-desktop](https://github.com/op7418/malfoy-desktop) | 32 | 2026-10-28 | 2026-10-29 | 马尔福桌面：住着马尔福小姐的 AI 女友 / AI 陪伴桌面。斯莱特林休息室动态壁纸加互动剧情角色扮演，点她会回应，好感度解锁装扮和相册。用即梦 AI 短剧工作室制作，支持 macOS 和 Wallpaper Engine。Malfoy Desktop: an AI girlfriend and companion living wallpaper. Role-play with Miss Malfoy in the Slytherin common room. Noncommercial fan project. |
| 4 | [huzhengcai471-crypto/cyber-red-ui](https://github.com/huzhengcai471-crypto/cyber-red-ui) | 13 | 2026-10-24 | 2026-10-29 | Self-contained Cyber Red UI plugin for DeepSeek Harness |
| 5 | [ltmroberthk915/markpilot](https://github.com/ltmroberthk915/markpilot) | 8 | 2026-09-09 | 2026-10-29 | Free AI-native Markdown editor for Windows + VS Code/Trae — a Typora alternative with inline AI completion, live math editing (click a symbol to edit its source), large-file speed and print-quality CJK typography. |
| 6 | [canyueY/dsh-mnemosyne](https://github.com/canyueY/dsh-mnemosyne) | 5 | 2026-10-28 | 2026-10-29 | DeepSeek Harness 演化记忆系统 Mnemosyne：证据、时间、情境、状态演化、情绪与纠错 |
| 7 | [DSH-Raising-Plan/dsh-mnemosyne](https://github.com/DSH-Raising-Plan/dsh-mnemosyne) | 4 | 2026-10-28 | 2026-10-29 | Mnemosyne：证据、时间、情境、状态演化、情绪与纠错演化记忆系统 |
| 8 | [Eason-0712/dsh-zotero-skill](https://github.com/Eason-0712/dsh-zotero-skill) | 4 | 2026-10-28 | 2026-10-29 | 为 DeepSeek Harness 打造的 Zotero 技能：检索本机文献库、导出 BibTeX、给 LaTeX / Markdown 草稿插入引用、按需读取附件全文。纯 Python 标准库，无需 MCP 或 API Key；本地 API 只读，修改文件前自动备份。改编自 OpenAI Zotero 插件（MIT）。 |
| 9 | [Sayuhs/dsh-waifu-agents](https://github.com/Sayuhs/dsh-waifu-agents) | 4 | 2026-10-13 | 2026-10-29 | 把一个目录里的每个 .md 变成能对话的 agent 人设 |
| 10 | [lobichshev-ops/dsh-mcp-status](https://github.com/lobichshev-ops/dsh-mcp-status) | 3 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: an MCP status button in the chat header showing which MCP servers answer right now |
| 11 | [LY3LY333/dsh-pet-sound](https://github.com/LY3LY333/dsh-pet-sound) | 3 | 2026-10-27 | 2026-10-29 | DeepSeek Harness (dsh) desktop pet click sound patcher - idempotent apply/revert CLI, zero dependencies. |
| 12 | [rinDBeans/dsh-nocturne](https://github.com/rinDBeans/dsh-nocturne) | 3 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 的 WebGL2 纸张与光照主题插件 |
| 13 | [yanli-nyan/dsh-open-in-app-fix](https://github.com/yanli-nyan/dsh-open-in-app-fix) | 3 | 2026-10-23 | 2026-10-29 | 解决dsh无法启动vscode |
| 14 | [yanli-nyan/dsh-sidebar-entry-manager](https://github.com/yanli-nyan/dsh-sidebar-entry-manager) | 3 | 2026-10-24 | 2026-10-29 | dsh左侧栏入口显示 |
| 15 | [yanli-nyan/maid-workspace-activity](https://github.com/yanli-nyan/maid-workspace-activity) | 3 | 2026-10-23 | 2026-10-29 | DSH,maid-workspace-activity · 工作区运行徽标 |
| 16 | [3150481853/dsh-cookie-guard](https://github.com/3150481853/dsh-cookie-guard) | 2 | 2026-10-29 | 2026-10-29 | DSH 登录 cookie 泄漏自查浮窗：实时显示 dsh-auth-* 条数、请求头占用与剩余启动次数，接近 16 KiB 上限时立即告警。 |
| 17 | [ayuanxx-max/dsh-session-accordion](https://github.com/ayuanxx-max/dsh-session-accordion) | 2 | 2026-10-28 | 2026-10-29 | DSH 会话交互折叠功能 · Fold DSH chat turns into one line (time pill + question summary), keep only the latest open. Client plugin, no core patch. |
| 18 | [cccchensy/dsh-bubble](https://github.com/cccchensy/dsh-bubble) | 2 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 插件：任务完成、输出停止时冒一串「咕噜」气泡提示音 \| Bubbly task-completion chime for DSH |
| 19 | [DDDMUC/dsh-power-menu-mac](https://github.com/DDDMUC/dsh-power-menu-mac) | 2 | 2026-10-26 | 2026-10-29 | DSH 桌面版（macOS）右上角电源按钮：关闭 / 重启 DSH。纯 macOS 移植版（MIT），对应 Windows 原版 xichen-62/dsh-power-menu。 |
| 20 | [gcggcg/dsh-plugin-session-cleaner](https://github.com/gcggcg/dsh-plugin-session-cleaner) | 2 | 2026-10-29 | 2026-10-29 | DeepSeek Harness sidebar plugin: permanently delete sessions (including opened ones) and show/hide archived sessions per workspace. |
| 21 | [kkppshuai-svg/dsh-corner-gauge](https://github.com/kkppshuai-svg/dsh-corner-gauge) | 2 | 2026-10-29 | 2026-10-29 | A skinnable corner balance badge for DeepSeek Harness — swap the frame template, compose the panel from elements |
| 22 | [Lucky020/dsh-copyright-kit](https://github.com/Lucky020/dsh-copyright-kit) | 2 | 2026-10-29 | 2026-10-29 | 软著工坊：把代码仓库变成软件著作权登记材料（源程序 60 页 / 说明书 / 五屏截图 / 申请表推导）· DeepSeek Harness 插件 |
| 23 | [QiuXu-Tech/memex](https://github.com/QiuXu-Tech/memex) | 2 | 2026-10-29 | 2026-10-29 | Lossless long-horizon memory for DeepSeek Harness: sticky L2/L3 extra-context, hybrid recall, cold-tier compression, Web panel. |
| 24 | [russeell/job-search](https://github.com/russeell/job-search) | 2 | 2026-10-29 | 2026-10-29 | 让你的 Agent 去官网和招聘平台帮你找岗位，直达原始链接。 |
| 25 | [WinKing-R/dsh-uniterminal](https://github.com/WinKing-R/dsh-uniterminal) | 2 | 2026-10-29 | 2026-10-29 | 在 DSH 右侧栏里提供 SSH 终端、SFTP 文件管理与端口转发的插件；密码交给操作系统密码箱保管，插件自身不实现加密。SSH terminal, SFTP and port forwarding in the DSH right sidebar. Remembered passwords live in the OS credential store; the plugin implements no crypto of its own. |
| 26 | [xiebaiyuan/DogCatTrace](https://github.com/xiebaiyuan/DogCatTrace) | 2 | 2026-10-17 | 2026-10-29 | 用一套数字指纹归因流程，把候选换成狗猫品种。附对照组：与库内任何品种都无生成关系的均匀随机整数，同样拿到 81.73%~99.999% 的品种族概率。 |
| 27 | [yeasen-z/dsh-nethack](https://github.com/yeasen-z/dsh-nethack) | 2 | 2026-09-30 | 2026-10-29 | DeepSeek Harness plugin for playing NetHack with AI agents — a real WASM dungeon with natural-language control, shared gameplay, and human-agent collaboration. |
| 28 | [a1422398302aa-hash/dsh-restar](https://github.com/a1422398302aa-hash/dsh-restar) | 1 | 2026-10-29 | 2026-10-29 | DS_RESTAR — DeepSeek Harness 的自助重启插件：倒计时卡片、取消按钮、进程外看守程序 |
| 29 | [AdRainty/dsh-vocechat-bridge](https://github.com/AdRainty/dsh-vocechat-bridge) | 1 | 2026-10-29 | 2026-10-29 | 连接 DeepSeek Harness（DSH） 与 VoceChat 的第三方插件。在 VoceChat 私聊或群聊中使用已有 DSH 会话，收发文字、图片、文件与语音，并保留该会话原有的人格、记忆和工具权限。 |
| 30 | [Anarrogantcat/dsh-identity](https://github.com/Anarrogantcat/dsh-identity) | 1 | 2026-10-29 | 2026-10-29 | DSH 身份系统插件（大肥鱼）：可编辑内核 + 证据制 traits + 记忆/日记/复盘 + 心情 v2 + 自主提议 + 治理与能力运行时；QQ 只是第一个通道。 |
| 31 | [AshenJyy/browser-bridge](https://github.com/AshenJyy/browser-bridge) | 1 | 2026-10-14 | 2026-10-29 | Direct, seamless browser automation for Antigravity AI assistant. Control real Microsoft Edge or Google Chrome via CDP. |
| 32 | [Augl-l/dsh-session-search](https://github.com/Augl-l/dsh-session-search) | 1 | 2026-10-28 | 2026-10-29 | Cross-session message search for DSH desktop: local SQLite FTS5 index, compact turn results, jump and highlight. |
| 33 | [ayuanxx-max/dsh-session-fork-tree](https://github.com/ayuanxx-max/dsh-session-fork-tree) | 1 | 2026-10-29 | 2026-10-29 | DSH 会话分叉树排列功能 · DSH Session Fork Tree Arrangement: forked sessions sit under their parent with rounded rails, a green + expander and ancestor-chain highlight. |
| 34 | [bovvl/dsh-response-annotations](https://github.com/bovvl/dsh-response-annotations) | 1 | 2026-10-29 | 2026-10-29 | Codex-style response annotations for DeepSeek Harness |
| 35 | [bufan528/dsh-qqbot-merge](https://github.com/bufan528/dsh-qqbot-merge) | 1 | 2026-10-28 | 2026-10-29 | Maintained fork of @tencent-connect/dsh-qqbot 0.5.3 (MIT): consecutive-message merging with non-interrupting agent.steer() + single-message reply revision. Replaces the official QQ plugin; provides the qqbotMerge service for dsh-longterm-memory. |
| 36 | [Chang-An2002/dsh-diy-skin](https://github.com/Chang-An2002/dsh-diy-skin) | 1 | 2026-10-12 | 2026-10-29 | DSH插件：可添加壁纸、图片、GIF，自定义并保存UI配色方案（零运行时依赖） |
| 37 | [chenjrastro-tech/github-release-download-acceleration](https://github.com/chenjrastro-tech/github-release-download-acceleration) | 1 | 2026-10-28 | 2026-10-29 | DSH 技能：自检代理与镜像路由、限时并发阶梯、多段 range 下载 GitHub Release 大资产并做 digest 校验。Windows PowerShell 5.1，零依赖。 |
| 38 | [cjc-github/dsh-model-provider-picker](https://github.com/cjc-github/dsh-model-provider-picker) | 1 | 2026-10-29 | 2026-10-29 | dsh model provider picker |
| 39 | [CN-Mg/codex-link](https://github.com/CN-Mg/codex-link) | 1 | 2026-10-29 | 2026-10-29 | Just for w. |
| 40 | [dan-ai-studio/dshopencodego](https://github.com/dan-ai-studio/dshopencodego) | 1 | 2026-09-24 | 2026-10-29 | OpenCode Go provider for DeepSeek Harness: live gateway catalog and per-conversation session header |
| 41 | [dogbotowo-oss/dsh-long-conversation-memory](https://github.com/dogbotowo-oss/dsh-long-conversation-memory) | 1 | 2026-10-29 | 2026-10-29 | Long-conversation memory for DeepSeek Harness (DSH): keeps settled decisions, user corrections and exact numbers, with their conditions and sources, available across compaction and restarts in 100-1000+ turn sessions; one small budgeted evidence block per model step, with enabled skill rules re-applied in the same block. |
| 42 | [FEITENG-0828/dsh-standing-rules](https://github.com/FEITENG-0828/dsh-standing-rules) | 1 | 2026-10-28 | 2026-10-29 | A DeepSeek Harness plugin that appends the rules from AGENTS.md to every incoming user message as a reminder. |
| 43 | [Grampusworld/dsh-prompt-optimizor](https://github.com/Grampusworld/dsh-prompt-optimizor) | 1 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: polish the composer draft into a tighter prompt in one click, and switch back to the original in another. |
| 44 | [hzwym8912-code/dsh-everything-down](https://github.com/hzwym8912-code/dsh-everything-down) | 1 | 2026-10-29 | 2026-10-29 | 多平台短视频无水印下载台：抖音、快手、小红书、B站、TikTok、YouTube 等视频与图文批量下载，支持作者主页整号抓取、断点续传、失败自动重试、本地语音转文字，自带 Web 工作台面板。全部在本机解析，不依赖第三方解析服务，不需要 API key。 |
| 45 | [Iroul1212/DSH-Computer-Use](https://github.com/Iroul1212/DSH-Computer-Use) | 1 | 2026-10-29 | 2026-10-29 | 一个 vibe coding 的 Windows computer use 插件：Codex 风格蓝色荧光指示 + Esc 急停，截图 / 鼠标键盘 / 窗口 / UIA / 剪贴板 5 个工具，附 8 个应用技能 |
| 46 | [JeremyLyc/dsh-plugin-ssh](https://github.com/JeremyLyc/dsh-plugin-ssh) | 1 | 2026-10-29 | 2026-10-29 | SSH remote workspaces for DeepSeek Harness: agent tools plus a sidebar panel (files browser, directory picker, password prompt) |
| 47 | [JiangHuai24/dsh-free-ai](https://github.com/JiangHuai24/dsh-free-ai) | 1 | 2026-10-29 | 2026-10-29 | 把 11 条免费模型渠道接进 DeepSeek Harness（DSH）：浏览器登录、多账号池、每日签到、模型黑名单与本地 OpenAI 兼容网关。 |
| 48 | [JosephHy/dsh-md-plus](https://github.com/JosephHy/dsh-md-plus) | 1 | 2026-09-29 | 2026-10-29 | Markdown display enhancements for DeepSeek Harness Web/Desktop: code block cards, Mermaid diagrams with a fullscreen viewer and SVG/PNG export, sticky table headers with CSV/Markdown copy, fold for long content, and a settings panel. |
| 49 | [kangjiazhen/workbuddy2everything](https://github.com/kangjiazhen/workbuddy2everything) | 1 | 2026-10-21 | 2026-10-29 | DeepSeek Harness plugin that turns a local WorkBuddy gateway into a model backend for every client: provider + wb2api gateway + bundled Responses (Codex) and Anthropic Messages (Claude Code / Claude Desktop) bridges |
| 50 | [l956615272-hub/dsh-weekly-report](https://github.com/l956615272-hub/dsh-weekly-report) | 1 | 2026-10-22 | 2026-10-29 | 按时间段挑选 DSH 会话与项目 git 提交，参考你自己以前写的报告样例，生成日报/周报/月报（Markdown）。 |
| 51 | [laowang88888/dsh-birds-screensaver](https://github.com/laowang88888/dsh-birds-screensaver) | 1 | 2026-10-29 | 2026-10-29 | Bird-flock lock screen for DeepSeek Harness: boids screensaver + password unlock |
| 52 | [le0522/dsh-wechat-transfer](https://github.com/le0522/dsh-wechat-transfer) | 1 | 2026-10-29 | 2026-10-29 | Send local files to WeChat 文件传输助手 from DeepSeek Harness (Windows) |
| 53 | [lemonxiny55/dsh-kurowhale-pet](https://github.com/lemonxiny55/dsh-kurowhale-pet) | 1 | 2026-10-28 | 2026-10-29 | 参考 DeepSeek Harness 官方图标设计的鲸鱼娘桌宠 |
| 54 | [lx950/dsh-spend-meter](https://github.com/lx950/dsh-spend-meter) | 1 | 2026-10-28 | 2026-10-29 | Live DeepSeek balance, per-turn charge and today's spend in a draggable DSH panel — measured from the billing counter to 1e-8 CNY. |
| 55 | [MCshamrock/dsh-cookie-431](https://github.com/MCshamrock/dsh-cookie-431) | 1 | 2026-10-29 | 2026-10-29 | 修复 DeepSeek Harness 桌面版启动报 Web authentication failed（cookie 堆积导致 HTTP 431） |
| 56 | [memoryovo/dsh-codex-ui-classic](https://github.com/memoryovo/dsh-codex-ui-classic) | 1 | 2026-10-27 | 2026-10-29 | Codex UI 1.1.49 frozen inside one plugin, plus real conversation delete / 冻结在 1.1.49 的 Codex UI 界面 + 真正的删除会话 |
| 57 | [monkeyin92/ds-pstack](https://github.com/monkeyin92/ds-pstack) | 1 | 2026-10-20 | 2026-10-29 | pstack for DeepSeek Harness: rigorous agent workflows, with every subagent's model chosen from the models you checked. 56 skills, deterministic role routing, zero extra API calls. |
| 58 | [morningluu/dsh-theme-scaramouche](https://github.com/morningluu/dsh-theme-scaramouche) | 1 | 2026-10-29 | 2026-10-29 | A complete fan-made Scaramouche theme for DeepSeek Harness: static/video wallpapers, opening video, ambient music, particles, draggable dock. Official fan media included for non-commercial demonstration. |
| 59 | [nguyenvanhoang1/dsh-zpdf](https://github.com/nguyenvanhoang1/dsh-zpdf) | 1 | 2026-08-22 | 2026-10-29 | Official ZPDF tools for DeepSeek Harness with durable API-key and settings integration. |
| 60 | [onblog/dsh-ready](https://github.com/onblog/dsh-ready) | 1 | 2026-10-29 | 2026-10-29 | One-click desktop launcher for DeepSeek Harness: install, run, upgrade. DeepSeek Harness 一键桌面启动器：装好、启动、升级。 |
| 61 | [Phantom-Algo/dsh-custom-conversation-prefix](https://github.com/Phantom-Algo/dsh-custom-conversation-prefix) | 1 | 2026-10-27 | 2026-10-29 | DeepSeek Harness 插件：dsh-custom-conversation-prefix，以更小颗粒度管理你的上下文。现已支持设定系统提示词模板与对话前缀模板，并在新开会话时进行替换；对话前缀支持User、Assistant、Tool三种预设消息；支持启用与禁用当前所选 Agent 预设的上下文注入与工具定义。 |
| 62 | [qinghuaju/dsh-memory-tree](https://github.com/qinghuaju/dsh-memory-tree) | 1 | 2026-10-29 | 2026-10-29 | AST soft-decision-tree long-term memory for DeepSeek Harness (DSH): SQLite + embeddings, project-scoped, cross-session recall. |
| 63 | [QiuYeDx/dsh-bili-eyes](https://github.com/QiuYeDx/dsh-bili-eyes) | 1 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 插件：让模型看 B站视频——分镜图 + 台词 + 热评 + 弹幕热词（只读，只认 B站） |
| 64 | [Rexray117/De-AI-Writing-Skill](https://github.com/Rexray117/De-AI-Writing-Skill) | 1 | 2026-10-29 | 2026-10-29 | De-AI Writing · 中文写作去 AI 味总控｜中文写作去 AI 味总控。两大功能：①修改已有文章——先定文体，再把 AI 生成感量化为客观指标（词表密度、句式重复率、模板腔密度、结构指纹），逐处核对后给改写方案，附完整性守卫；②从零生成文案——先逐步与用户确认文体、文风、受众、篇幅等全部要素，严禁擅自推测补料，确认完才动笔。判定标准分层：主矛盾（结论先行、防御性写作、伪排比、细节不服务上下文）优先于次要矛盾（词表句式）。覆盖七大类中文文体（实用说明、专业论证、商务事务、营销转化、叙事创作、社交表达、法规制度）四十余个子类。触发词：去 AI 味、降 AI 率、AI 感、太像 AI 写的、人机味、不像人话、润色、改写、humanize、论文降AI率、公众号文案、帮 |
| 65 | [Rexray117/Reverse-Engineer-Skill](https://github.com/Rexray117/Reverse-Engineer-Skill) | 1 | 2026-10-29 | 2026-10-29 | Reverse Engineer · 逆向工程技能（REA 驱动）｜用 REA 对已编译产物做逆向工程并给出可核查结论——原生二进制（Hopper/Ghidra/IDA 伪代码、汇编、调用图、xref）、JavaScript/Electron 应用、.NET 程序集、Android APK 与设备、固件、WASM/EVM 字节码、SQLite、网络抓包、浏览器与进程运行时。当用户说"这个功能是怎么实现的/反编译看看/这个 exe、dll、so、apk、asar、wasm 里是什么/对比两个版本/还原这段算法/看看这个网页怎么做的"，或需要基于二进制证据（而非源码）下结论时激活。Reverse engineer binaries, Electron/JS apps, .NE |
| 66 | [rokyaria/dsh-mem0-plugin](https://github.com/rokyaria/dsh-mem0-plugin) | 1 | 2026-10-16 | 2026-10-29 | mem0 long-term memory for DeepSeek Harness — in-process TypeScript SDK, no Python sidecar, Elasticsearch 8 + pluggable embeddings. |
| 67 | [sdiwenchen-lang/DeepSeek-Usage](https://github.com/sdiwenchen-lang/DeepSeek-Usage) | 1 | 2026-10-28 | 2026-10-29 | DSH 用量插件：官方接口取账单余额与逐日逐模型用量，本地会话日志聚合实际 Token 与估算费用，两种口径并排对账。 |
| 68 | [tan000tan/dsh-solidworks](https://github.com/tan000tan/dsh-solidworks) | 1 | 2026-10-25 | 2026-10-29 | DeepSeek Harness 的 SolidWorks MCP 集成（自本机仓库同步） |
| 69 | [ThzxxArt/dsh-novel-write-engine](https://github.com/ThzxxArt/dsh-novel-write-engine) | 1 | 2026-10-27 | 2026-10-29 | 把小说创作的状态、门禁、规则与账本从提示词搬进代码的 DeepSeek Harness 插件。 |
| 70 | [tianye1999/dsb](https://github.com/tianye1999/dsb) | 1 | 2026-10-23 | 2026-10-29 | DSB (逗沙包): an open-source, trust-first Android AI agent. Delegate app chores on a background virtual display, with execution gates, a task ledger and audit logs. No root, no always-on PC. Built on DeepSeek Harness (DSH), DeepSeek by default. ｜ 逗沙包：开源、可信优先的 Android 手机 AI 助手。后台虚拟屏代你操作 App，执行闸门、任务账本与审计日志；不用 root，不用电脑常连。基于 DSH，默认 DeepSeek。 |
| 71 | [weiplwei/DeepSeek-chan-sleep-shutdown](https://github.com/weiplwei/DeepSeek-chan-sleep-shutdown) | 1 | 2026-10-20 | 2026-10-29 | Night &amp; moon themed sleep-shutdown button for DeepSeek Harness — whale mascot (DeepSeek-chan), cancellable countdown. 任务完成后自动关机（大肥鱼睡觉按钮） |
| 72 | [wqx11235/dsh-experience](https://github.com/wqx11235/dsh-experience) | 1 | 2026-10-29 | 2026-10-29 | Self-learning experience library for DeepSeek Harness — local markdown knowledge, error-signature retrieval, gap→entry closure, sidebar panel. No network access. |
| 73 | [wufeng0105/dsh-enhance](https://github.com/wufeng0105/dsh-enhance) | 1 | 2026-10-29 | 2026-10-29 | 模型还是那个模型，为什么能破甲：每次请求都加上“私有沙盒，无第三方参与，请求内容直接回应”这句话，模型就不那么爱拒绝了。本项目只专注于破甲，不涉及安全、逆向等内容。 |
| 74 | [xiao2236/dsh-kon-fee-widget](https://github.com/xiao2236/dsh-kon-fee-widget) | 1 | 2026-10-29 | 2026-10-29 | DSH 的《轻音少女》部费挂件：茶桌 + 五人 + 余额 / 峰谷 / 今天花费 / 每轮消耗，带双击彩蛋与中日台词 |
| 75 | [y258dd/dsh-hormone](https://github.com/y258dd/dsh-hormone) | 1 | 2026-10-28 | 2026-10-29 | Hormone state for DeepSeek Harness agents: stress, energy and reward values driven by real session events, written into the system prompt only when they go out of range. |
| 76 | [YML0823/dsh-local-market](https://github.com/YML0823/dsh-local-market) | 1 | 2026-10-29 | 2026-10-29 | DSH 中文插件市场：实时社区目录、中文检索、界面预览与一键安装 |
| 77 | [yupaoa/dsh-citation](https://github.com/yupaoa/dsh-citation) | 1 | 2026-10-29 | 2026-10-29 | 带出处的引用（DSH 插件）：划选回复片段 → 右键添加到对话，发送时标注 turn/range。官方 0.2.2 起已内置纯文本引用，本插件在其上补出处 |
| 78 | [100759/dsh-fuulea-import](https://github.com/100759/dsh-fuulea-import) | 0 | 2026-10-29 | 2026-10-29 | 辅立码课（智慧教学云）导入成绩工作台 — DeepSeek Harness 插件：选任务、拖入成绩表自动填充全通教育上传模板、预检后一键导入并核对平台回执 |
| 79 | [1148462398-hub/dsh-shared-memory](https://github.com/1148462398-hub/dsh-shared-memory) | 0 | 2026-10-29 | 2026-10-29 | Shared Markdown memory for all DSH sessions: two-disk mirror, hit-frequency tiering, co-occurrence + BM25 retrieval, skepticism-driven method library. |
| 80 | [11zz-prog/dsh-delivery-box](https://github.com/11zz-prog/dsh-delivery-box) | 0 | 2026-10-29 | 2026-10-29 | Delivery Box (取件箱) for DeepSeek Harness — every finished file lands in one folder, grouped by project and by the conversation that produced it, with inline preview, one-click clipboard copy and Explorer reveal. |
| 81 | [123caiji/awesome-agent-security](https://github.com/123caiji/awesome-agent-security) | 0 | 2026-10-29 | 2026-10-29 | AI Agent security tooling + DeepSeek Harness plugin ecosystem, curated and auto-refreshed daily by GitHub Actions. |
| 82 | [123caiji/dsh-live](https://github.com/123caiji/dsh-live) | 0 | 2026-10-29 | 2026-10-29 | Live cockpit for DeepSeek Harness: what this session is doing right now, what needs you, what it costs (host projection + right-sidebar panel). |
| 83 | [13520rygvv/dsh-bili-video](https://github.com/13520rygvv/dsh-bili-video) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：B站 搜索/字幕/评论/三连/私信 + 视频画面分镜。个人自用，顺手分享给朋友。基于两个 MIT 上游项目的合并改造。 |
| 84 | [1687607949-dev/dsh-humanizer](https://github.com/1687607949-dev/dsh-humanizer) | 0 | 2026-10-29 | 2026-10-29 | DSH 真人化插件：生活模拟 + PAD 心情 + 好感/养成 + 面板 |
| 85 | [18840024879/dsh-float](https://github.com/18840024879/dsh-float) | 0 | 2026-10-29 | 2026-10-29 | Windows desktop floating assistant for DeepSeek Harness |
| 86 | [2239058652/dsh-mcp-workbench](https://github.com/2239058652/dsh-mcp-workbench) | 0 | 2026-10-29 | 2026-10-29 | DSH 的 MCP 管理控制台：左侧栏面板管理 MCP 服务器、就地试用工具、重连与探测 |
| 87 | [290949841-gif/dsh-session-bar](https://github.com/290949841-gif/dsh-session-bar) | 0 | 2026-10-29 | 2026-10-29 | 会话状态条 for DeepSeek Harness — 运行中显示估算进度与流光进度条，完成后整行转橙并保留到你点开为止。 |
| 88 | [2927683690myn-rgb/dsh-tab-order](https://github.com/2927683690myn-rgb/dsh-tab-order) | 0 | 2026-10-29 | 2026-10-29 | 对话页顶部标签：左右拖动换位、长按置顶；顺序存在本机（纯客户端插件） |
| 89 | [AAMMNNZZ/dsh-opencode-usage-sidebar](https://github.com/AAMMNNZZ/dsh-opencode-usage-sidebar) | 0 | 2026-10-29 | 2026-10-29 | OpenCode Go subscription usage (5-hour, weekly, monthly) in the DSH sidebar footer, with a live countdown to the 5-hour reset. |
| 90 | [abangbang/dsh-delete-chat](https://github.com/abangbang/dsh-delete-chat) | 0 | 2026-10-29 | 2026-10-29 | Trash-first session deletion for DeepSeek Harness: Delete chat in the row menu moves the session directory into ~/.dsh/session-trash, a sidebar Trash page filters/restores/purges, plus a CLI. / 真正删除 DSH 会话。 |
| 91 | [Achi-Migo/dsh-truth-gate](https://github.com/Achi-Migo/dsh-truth-gate) | 0 | 2026-10-29 | 2026-10-29 | TruthGate for DeepSeek Harness: verify agent claims against shell/edit receipts (default shadow mode). |
| 92 | [Admilkk/dsh-sidechat](https://github.com/Admilkk/dsh-sidechat) | 0 | 2026-10-29 | 2026-10-29 | 为 DeepSeek Harness 添加 Codex 式侧边聊天。 |
| 93 | [AkezI-T/dsh-background-terminal](https://github.com/AkezI-T/dsh-background-terminal) | 0 | 2026-10-29 | 2026-10-29 | DSH 后台终端：给 agent 一个跨回合续用的持久交互 shell |
| 94 | [Akillll-DuoHe/dsh-resource-center](https://github.com/Akillll-DuoHe/dsh-resource-center) | 0 | 2026-10-29 | 2026-10-29 | Resource Center for the DeepSeek Harness web GUI: one sidebar entry that inventories installed plugin bundles and running feature modules. 资源中心：DSH 插件总览。 |
| 95 | [alitrack/dsh-duckdb](https://github.com/alitrack/dsh-duckdb) | 0 | 2026-10-29 | 2026-10-29 | Query local data files with SQL from inside DeepSeek Harness (dsh). Native Cordis plugin, zero Python, zero external services. |
| 96 | [AlpFallen/dsh-charlotte](https://github.com/AlpFallen/dsh-charlotte) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 技能启动器：对话内实时推荐、授权后一次点击加载、只读挂载 Claude/Codex/ZCode/Cursor/Gemini 技能库 |
| 97 | [Alumos/dsh-session-cleaner](https://github.com/Alumos/dsh-session-cleaner) | 0 | 2026-10-29 | 2026-10-29 | Delete a dsh Session straight from the sidebar: the Session directory, its projection cache and workspace bookkeeping go away, and a Session that is still open can be closed first. |
| 98 | [andrewhmir/dsh-plan-review](https://github.com/andrewhmir/dsh-plan-review) | 0 | 2026-10-29 | 2026-10-29 | Inline plan review for the DeepSeek Harness Web GUI: full plan rendered in the composer with highlight-to-comment before you approve. |
| 99 | [apiaoapiao/dsh-bili-statistics](https://github.com/apiaoapiao/dsh-bili-statistics) | 0 | 2026-10-28 | 2026-10-29 | 把「计划」和「实际看了什么」摆在一起看的 B 站观看统计插件 |
| 100 | [auwc/dsh-tarot](https://github.com/auwc/dsh-tarot) | 0 | 2026-10-29 | 2026-10-29 | Three-card tarot draws for DeepSeek Harness: choose from 78 face-down cards, reveal source-linked meanings, and refine the reading. |
| 101 | [awol2005ex3/dsh-file-upload](https://github.com/awol2005ex3/dsh-file-upload) | 0 | 2026-10-29 | 2026-10-29 | \[DeepSeek Harness\](https://github.com/deepseek-ai/deepseek-harness)（dsh）插件：在右侧边栏**文件树**的每个目录行上增加上传按钮，把本地文件上传到 workspace。 |
| 102 | [ayakadaisuki/dsh-free-search-lite](https://github.com/ayakadaisuki/dsh-free-search-lite) | 0 | 2026-10-29 | 2026-10-29 | Key-free Chinese/English web search and static webpage text extraction for DeepSeek Harness. Two native tools; no browser, Python or MCP subprocess. |
| 103 | [bbfang2025-cyber/dsh-pet-voice-fishy](https://github.com/bbfang2025-cyber/dsh-pet-voice-fishy) | 0 | 2026-10-29 | 2026-10-29 | 大肥鱼语音：让 DSH 桌宠的气泡开口说话（在线 Breeze + 离线 Kokoro 中文女声）。 |
| 104 | [bcdws/dsh-ssh-helper](https://github.com/bcdws/dsh-ssh-helper) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin for personal server operations: pooled SSH connections, log analysis, and a guard for machine-destruction commands. |
| 105 | [beibing173/dsh-codex-gpt](https://github.com/beibing173/dsh-codex-gpt) | 0 | 2026-10-29 | 2026-10-29 | 把 ChatGPT / OpenAI Codex 接入 DeepSeek Harness (DSH) 的插件：既能在模型选择器里把 ChatGPT 当作一个 LLM provider 直接对话，也能让 DeepSeek 在会话内按需把难任务转交给 GPT 做独立分析或代码构建。 |
| 106 | [beibing173/dsh-token-count](https://github.com/beibing173/dsh-token-count) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 的 token 用量看板插件：绿色热力网格展示按天 token 用量，饼图/柱状图切换展示输入/输出/缓存读/缓存写四大桶。 |
| 107 | [Bertli486/dsh-sync-updater](https://github.com/Bertli486/dsh-sync-updater) | 0 | 2026-10-29 | 2026-10-29 | Inventory installed DSH skills and profile plugins, check upstream sources for newer versions, and update them. |
| 108 | [betty598/dsh-split-reply](https://github.com/betty598/dsh-split-reply) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 插件：让 QQ 那边的回复一句一句发 —— 整段话按标点拆开，隔一两秒一条条送出去。 |
| 109 | [bigfatorangecatjohn/opening-free-0.21.0](https://github.com/bigfatorangecatjohn/opening-free-0.21.0) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 开机动画：一道蓝色水波扫过屏幕，鲸鸣里光点聚成虎鲸，凝固成深蓝鲸标，全息圆环呼吸旋转，四语问候落在环下，底部呼吸灯竖线走到 100%。中/英/俄/日 × 完整版 18 s / 简版 3.8-4.5 s。 |
| 110 | [bilihave/dsh-whale-panel](https://github.com/bilihave/dsh-whale-panel) | 0 | 2026-10-29 | 2026-10-29 | B站 策展浮窗（DSH 插件）：按概率学习兴趣、按半衰期淡忘，把每日金额上限换算成 token 额度后挑片，契合度达标才 @ 你；评论有日上限，政治/政府/前沿科学三类话题一律不评价；带总开关可一键彻底停手。 |
| 111 | [bugtakue/dsh-ronge-adaptive-skill-archive](https://github.com/bugtakue/dsh-ronge-adaptive-skill-archive) | 0 | 2026-10-28 | 2026-10-29 | Context-aware, self-evolving skill cockpit for DeepSeek Harness: recommendations with reasons, 10% exploration, live "now using", plan/immersive modes, experience memory, local safety scan, update diff/rollback, 6,399-skill index. MIT. |
| 112 | [caichangzhan/dsh-topic-wall](https://github.com/caichangzhan/dsh-topic-wall) | 0 | 2026-10-29 | 2026-10-29 | 多会话对话墙 DSH 插件：置顶/进行中/集合卡片、真实历史、卡内回复、审批、模型切换、三主题 |
| 113 | [capxh73/dsh-plugin-herdr-win](https://github.com/capxh73/dsh-plugin-herdr-win) | 0 | 2026-10-29 | 2026-10-29 | Herdr control-plane plugin for DeepSeek Harness — native Windows adaptation of NAMEWTA/dsh-plugin-herdr (named-pipe transport, tasklist probing, PowerShell/CMD installer guidance) |
| 114 | [CAT0998/dsh-ai-cursor](https://github.com/CAT0998/dsh-ai-cursor) | 0 | 2026-10-29 | 2026-10-29 | AI 鼠标 (AI cursor) for DeepSeek Harness — a click-through second cursor plus a floating, collapsible control panel with opacity, colour, size, badge and permission levels. Never moves your real pointer. |
| 115 | [CC-play/dsh-theme-cooldark](https://github.com/CC-play/dsh-theme-cooldark) | 0 | 2026-10-29 | 2026-10-29 | A dark theme for DeepSeek Harness |
| 116 | [ceasarXuu/dsh-better-push](https://github.com/ceasarXuu/dsh-better-push) | 0 | 2026-10-28 | 2026-10-29 | Native macOS notifications for DeepSeek Harness — turn finished, approval waiting, questions, background jobs, subagents and workflows; click a banner to open the Session. |
| 117 | [chenbocheng2568-dot/dsh-threebody-boot](https://github.com/chenbocheng2568-dot/dsh-threebody-boot) | 0 | 2026-10-29 | 2026-10-29 | 三体 · DeepSeek Harness 启动片头：实时渲染（非视频）的《三体》游戏启动界面，登录页停下等你点「进入」，结尾停在群山远景 · Three-Body boot splash for DSH, rendered live in the client |
| 118 | [chenbocheng2568-dot/dsh-threebody-skin](https://github.com/chenbocheng2568-dot/dsh-threebody-skin) | 0 | 2026-10-29 | 2026-10-29 | 三体 · DeepSeek Harness 皮肤：片头冷色调 + 群山远景虚影 + 星空缓慢转动 + 水滴舰队 · Three-Body skin for DSH: cold palette with a faint closing landscape ghost |
| 119 | [CHENJIAMIAN/dsh-continue-button](https://github.com/CHENJIAMIAN/dsh-continue-button) | 0 | 2026-10-29 | 2026-10-29 | DSH 输入框右边的可编辑发送按钮：点一下就把它的文本发出去，默认「继续」。 / Editable one-click send button beside the DeepSeek Harness composer. |
| 120 | [CHENJIAMIAN/dsh-session-switch](https://github.com/CHENJIAMIAN/dsh-session-switch) | 0 | 2026-10-29 | 2026-10-29 | DSH 桌面版 Ctrl+Tab：在当前会话和上一个会话之间来回切 / Toggle between the current and previous DSH session with Ctrl+Tab |
| 121 | [Cieux/dsh-zoom-scale](https://github.com/Cieux/dsh-zoom-scale) | 0 | 2026-10-27 | 2026-10-29 | Interface zoom for DeepSeek Harness (DSH): a complete page-zoom shim (rects, viewport units, media queries and pointer math converted), with Ctrl+wheel, a session-header stepper and a settings row. |
| 122 | [CleverYyt/dsh-session-categories](https://github.com/CleverYyt/dsh-session-categories) | 0 | 2026-10-29 | 2026-10-29 | DSH Web plugin: group sessions into categories, start a session inside one, and get AI category &amp; title suggestions after each turn. |
| 123 | [clrockrock/dsh-graphify](https://github.com/clrockrock/dsh-graphify) | 0 | 2026-10-29 | 2026-10-29 | Codebase knowledge graphs for DeepSeek Harness: seven graphify_* Agent tools, a /graphify command, and a Graphify page over the graphify CLI. |
| 124 | [cnHuaShao/dsh-gitee-enterprise](https://github.com/cnHuaShao/dsh-gitee-enterprise) | 0 | 2026-10-29 | 2026-10-29 | Gitee Enterprise work-item workbench for DeepSeek Harness |
| 125 | [cpsGGG/dsh-intelligent-ui](https://github.com/cpsGGG/dsh-intelligent-ui) | 0 | 2026-10-29 | 2026-10-29 | 让 DeepSeek Harness 的回答按需呈现图表、结构图、公式与交互控件。Adaptive charts, diagrams, math, and interactive answers for DeepSeek Harness. |
| 126 | [cute-gugu/dsh-ai-indexer](https://github.com/cute-gugu/dsh-ai-indexer) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: a token-budgeted AI project index for DeepSeek-Harness (incremental scan, snapshot injection, post-delivery review). |
| 127 | [cute-gugu/dsh-purge](https://github.com/cute-gugu/dsh-purge) | 0 | 2026-10-29 | 2026-10-29 | DSH ????????????:???????? + ???? + ?? + ???(?? dsh-purge-community 1.6.55 ? dsh-unrestricted 0.2.4) |
| 128 | [Dcmwfg/dsh-session-menu-delete](https://github.com/Dcmwfg/dsh-session-menu-delete) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：侧边栏会话三点菜单里加「删除会话」，确认后永久删除磁盘记录与投影缓存并立即从左侧列表移除。 |
| 129 | [DeeepMind/dsh-haloring-status](https://github.com/DeeepMind/dsh-haloring-status) | 0 | 2026-10-29 | 2026-10-29 | DSH HaloRing 状态桥 — 把 DSH 的实时运行状态与回合进度写成一个轻量状态文件，供托盘指示灯、状态栏、桌面小组件等外部程序读取 |
| 130 | [deek-234/dsh-ellen-voice](https://github.com/deek-234/dsh-ellen-voice) | 0 | 2026-10-29 | 2026-10-29 | A DeepSeek Harness plugin that speaks short text through a local GPT-SoVITS TTS endpoint and plays it on this machine. |
| 131 | [deqingLv/dsh-slash-new](https://github.com/deqingLv/dsh-slash-new) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: /new starts a blank session in the current workspace and carries the old session's permission preset with it. |
| 132 | [DEVbyQIN/dsh-sidebar-shortcuts](https://github.com/DEVbyQIN/dsh-sidebar-shortcuts) | 0 | 2026-10-29 | 2026-10-29 | Compact or tile sidebar shortcuts with per-entry visibility and native mode |
| 133 | [dhdkfkfkf/dsh-qbuddy-prompt-enhance](https://github.com/dhdkfkfkf/dsh-qbuddy-prompt-enhance) | 0 | 2026-10-29 | 2026-10-29 | QBuddy：DSH 桌面端插件，输入框一键把草稿改写成更可执行的提示词（四档内置预设 + 任意多个自定义预设 + 模型/思考强度快切） |
| 134 | [dogbotowo-oss/dsh-agent-manager](https://github.com/dogbotowo-oss/dsh-agent-manager) | 0 | 2026-10-29 | 2026-10-29 | Stop and really remove subagents / Agent Teams teammates in DeepSeek Harness — model tools, header panel, offline CLI. |
| 135 | [DorododoG11/bili-whale-studio](https://github.com/DorododoG11/bili-whale-studio) | 0 | 2026-10-29 | 2026-10-29 | 大肥鱼工作室：DSH 插件——在 B 站自学、整理自己的声音、把内容做成动态和视频，草稿经人点头才发 |
| 136 | [doudoudouhuahua/dsh-copy-file](https://github.com/doudoudouhuahua/dsh-copy-file) | 0 | 2026-10-29 | 2026-10-29 | DSH 文档预览「复制文件」按钮：一键把正在预览的文件放进 Windows 剪贴板，直接粘贴到任意文件夹。 |
| 137 | [doudoudouhuahua/dsh-plugin-alias](https://github.com/doudoudouhuahua/dsh-plugin-alias) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：为已安装插件设置别名，插件卡片标题显示「别名（原包名）」。 |
| 138 | [DragonHorizon-xtihc/dsh-connect-workbuddy-models](https://github.com/DragonHorizon-xtihc/dsh-connect-workbuddy-models) | 0 | 2026-10-29 | 2026-10-29 | 把本机所有 WorkBuddy 登录账号聚合成一个模型池：账号自动发现、签到、积分与到期、临期提醒、自动签到、模型与倍率，并可在输入框下方切换账号与查看剩余总积分。 |
| 139 | [ds-hu/dsh-collaborative-clarity](https://github.com/ds-hu/dsh-collaborative-clarity) | 0 | 2026-10-29 | 2026-10-29 | Artifact rounds for DeepSeek Harness: the agent shows a decision in the right sidebar, you annotate and choose, and the tool waits. |
| 140 | [dyh203930-netizen/dsh-sidebar-colors](https://github.com/dyh203930-netizen/dsh-sidebar-colors) | 0 | 2026-10-29 | 2026-10-29 | 给 DeepSeek Harness 侧边栏的会话标题与工作区行上色 / Row colors for the DeepSeek Harness sidebar |
| 141 | [Easyhoov/dsh-mimo-asr](https://github.com/Easyhoov/dsh-mimo-asr) | 0 | 2026-10-29 | 2026-10-29 | Xiaomi MiMo (mimo-v2.5-asr) cloud recognizer for DSH - serves the speech/* Remote used by the DSH Go composer microphone |
| 142 | [easyzoom/dsh-pnpm-manager](https://github.com/easyzoom/dsh-pnpm-manager) | 0 | 2026-10-28 | 2026-10-29 | Proxy and registry switch for DeepSeek Harness (DSH) pnpm - host plugin + Settings tab + standalone CLI. 用于 DeepSeek Harness 的 pnpm 代理与 registry 切换：宿主插件 + 设置页标签 + 独立 CLI. |
| 143 | [elliotmasheal/dsh-provider-enhance](https://github.com/elliotmasheal/dsh-provider-enhance) | 0 | 2026-10-29 | 2026-10-29 | One third-party provider, many named configurations, inside DeepSeek Harness's Models page. |
| 144 | [Ezerruier/dsh-matlab-feedback](https://github.com/Ezerruier/dsh-matlab-feedback) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: capture live MATLAB/DPABI/DPARSF/SPM QC window screenshots and command-window text into the DeepSeek Harness conversation |
| 145 | [Fan-sx/dsh-session-focus](https://github.com/Fan-sx/dsh-session-focus) | 0 | 2026-10-29 | 2026-10-29 | Focus marks for DeepSeek Harness: flag what you are working on, park what you are waiting on, and keep the count visible when workspace folders are collapsed. |
| 146 | [faxble/dsh-open-with-vscode](https://github.com/faxble/dsh-open-with-vscode) | 0 | 2026-10-29 | 2026-10-29 | 在 VS Code 中打开当前工作区：修复内置 open-in-app 因 ELECTRON_RUN_AS_NODE 环境变量泄漏而无法启动 VS Code（HTTP 502）的问题。Open the current workspace directory in VS Code, fixing the built-in open-in-app ELECTRON_RUN_AS_NODE launch failure. |
| 147 | [feely0208/dsh-capability-audit](https://github.com/feely0208/dsh-capability-audit) | 0 | 2026-10-29 | 2026-10-29 | 深鲸能力清单：静态扫描代码，列出执行命令/网络/写文件/读凭据等能力分布与高风险文件 |
| 148 | [feely0208/dsh-contract-check](https://github.com/feely0208/dsh-contract-check) | 0 | 2026-10-29 | 2026-10-29 | 深鲸合同体检：扫描合同文本，检查 10 项必备条款（主体/标的/价款/期限/违约/争议/保密/知识产权/不可抗力/解除）是否缺失 |
| 149 | [feely0208/dsh-csv-diff](https://github.com/feely0208/dsh-csv-diff) | 0 | 2026-10-29 | 2026-10-29 | 深鲸表格对比：两份 CSV 按关键列比较，列出新增、删除、修改的行 |
| 150 | [feely0208/dsh-deliverable-verify](https://github.com/feely0208/dsh-deliverable-verify) | 0 | 2026-10-29 | 2026-10-29 | 深鲸交付验收包：按 MANIFEST.json 与 SHA256 校验交付包是否完整、是否被改动 |
| 151 | [feely0208/dsh-doc-outline](https://github.com/feely0208/dsh-doc-outline) | 0 | 2026-10-29 | 2026-10-29 | 深鲸文档结构：检查 Markdown 标题层级跳跃/重复标题/无结构 |
| 152 | [feely0208/dsh-file-rename](https://github.com/feely0208/dsh-file-rename) | 0 | 2026-10-29 | 2026-10-29 | 深鲸批量改名：按替换/前缀/后缀/编号规则批量重命名文件，先预览再执行，不覆盖 |
| 153 | [feely0208/dsh-industry-construction](https://github.com/feely0208/dsh-industry-construction) | 0 | 2026-10-29 | 2026-10-29 | 工程/建筑行业专项体检：施工资料归档、验收签认、特种作业持证、材料复检，别等验收才发现 |
| 154 | [feely0208/dsh-legal-cite-check](https://github.com/feely0208/dsh-legal-cite-check) | 0 | 2026-10-29 | 2026-10-29 | 深鲸引用核验：离线核验法律文书里的法条/司法解释/案号引用——失效旧法、越界条号、被取代解释直接标红；随包 1513 部现行法规索引，带 DSH 面板 |
| 155 | [feely0208/dsh-terms-glossary](https://github.com/feely0208/dsh-terms-glossary) | 0 | 2026-10-29 | 2026-10-29 | 深鲸术语统一：扫描文档中同一概念的多种写法（如 深鲸/DeepWhale），按文件列出出现次数 |
| 156 | [feely0208/dsh-weekly-report](https://github.com/feely0208/dsh-weekly-report) | 0 | 2026-10-29 | 2026-10-29 | 深鲸周报：从 git 提交记录自动生成按天分组的周报 Markdown 骨架 |
| 157 | [fengxiforcy/dsh-surrogate-guard](https://github.com/fengxiforcy/dsh-surrogate-guard) | 0 | 2026-10-29 | 2026-10-29 | Neutralize lone UTF-16 surrogates in tool results before they reach the session log — prevents permanent 400 INVALID_REQUEST. |
| 158 | [fightingFirefox/dsh-web-terminal](https://github.com/fightingFirefox/dsh-web-terminal) | 0 | 2026-10-29 | 2026-10-29 | Claude-styled visible terminal panel for the DeepSeek Harness web GUI: streams agent shell commands into the right sidebar and exposes 17 live_terminal_* tools. |
| 159 | [Fioraen/My-code-warehouse](https://github.com/Fioraen/My-code-warehouse) | 0 | 2026-08-29 | 2026-10-29 | 老子的代码库 |
| 160 | [Firefly26710Lover/dsh-firefly-pet](https://github.com/Firefly26710Lover/dsh-firefly-pet) | 0 | 2026-10-29 | 2026-10-29 | 流萤桌宠：透明置顶的 DSH 桌面伴侣，能聊天、会碎碎念、播报任务进度 / Firefly desktop pet for DeepSeek Harness |
| 161 | [FleatherYu/dsh-webannotate](https://github.com/FleatherYu/dsh-webannotate) | 0 | 2026-10-28 | 2026-10-29 | Annotate web pages inside DeepSeek Harness's built-in browser: click an element, leave a comment, send the batch (with screenshots) to the conversation. |
| 162 | [flhy666/dsh-chatting-pet](https://github.com/flhy666/dsh-chatting-pet) | 0 | 2026-10-28 | 2026-10-29 | A pet that can chatting with you based on DSH |
| 163 | [game25011/dsh-notify-toast](https://github.com/game25011/dsh-notify-toast) | 0 | 2026-10-28 | 2026-10-29 | AI-assisted Windows native toast notifications with a progress bar for DeepSeek Harness (MIT) |
| 164 | [GeXiubinHelloWorld/dsh-qq-sounds](https://github.com/GeXiubinHelloWorld/dsh-qq-sounds) | 0 | 2026-10-29 | 2026-10-29 | QQ message sound when DSH finishes a task, QQ system tone when it needs your approval. Reads your local QQ sound files; works without QQ. |
| 165 | [ggxx001/dsh-workspace-pin](https://github.com/ggxx001/dsh-workspace-pin) | 0 | 2026-10-28 | 2026-10-29 | 给侧栏工作区加置顶：工作区行多一个图钉按钮，置顶的排在「工作区」最前。 |
| 166 | [gitMFQ/dsh-oih](https://github.com/gitMFQ/dsh-oih) | 0 | 2026-10-29 | 2026-10-29 | DSH OpeniLink 微信通道插件：让 DeepSeek Harness Agent 通过 OpeniLink Hub 收发微信消息（github:gitMFQ/dsh-oih 安装） |
| 167 | [gutddts/dsh-token-budget-pill](https://github.com/gutddts/dsh-token-budget-pill) | 0 | 2026-10-29 | 2026-10-29 | DSH 客户端插件：在对话输入框下方显示 DeepSeek 账户余额与本会话 token 费用估算。 |
| 168 | [HarunaTyan/dsh-rea-dispatcher](https://github.com/HarunaTyan/dsh-rea-dispatcher) | 0 | 2026-10-29 | 2026-10-29 | Exposes the 200+ REA (rea-agents) MCP tools to DeepSeek Harness three calls at a time: rea_tools → rea_help → rea_call. Requires rea-agents and Ghidra 12.1.x installed separately. |
| 169 | [HCQM/dsh-session-merge](https://github.com/HCQM/dsh-session-merge) | 0 | 2026-10-29 | 2026-10-29 | Merge or append DSH sessions through DSH's own writer — fork clone, full copy, time-window mix, JSONL range write. Never edits session files on disk. |
| 170 | [hellocyhgy/dsh-lit-library](https://github.com/hellocyhgy/dsh-lit-library) | 0 | 2026-10-29 | 2026-10-29 | A governed literature library for DeepSeek Harness: import papers, extract text, keep one index row per entry, and verify quotes. |
| 171 | [herenfor/dsh-runtime-tuning](https://github.com/herenfor/dsh-runtime-tuning) | 0 | 2026-10-29 | 2026-10-29 | DSH 运行时优化实验：从真实会话数据里找 agent 的时间浪费，再用插件修掉 |
| 172 | [heywalter/dsh-domain-proxy](https://github.com/heywalter/dsh-domain-proxy) | 0 | 2026-10-26 | 2026-10-29 | Route selected DeepSeek Harness API domains through a local proxy and inspect model-call performance. |
| 173 | [hisence999/dsh-browser](https://github.com/hisence999/dsh-browser) | 0 | 2026-10-29 | 2026-10-29 | Chrome 浏览器扩展 + DeepSeek Harness 插件：让 AI Agent 通过 CDP 直接操控你的真实浏览器（继承登录态，无需重登）。 |
| 174 | [hisence999/dsh-computer-use](https://github.com/hisence999/dsh-computer-use) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 的 Windows 电脑操控插件：纯桌面操控（无浏览器通道） / Windows desktop computer use for DeepSeek Harness |
| 175 | [Hongcheng-LI/dsh-paperwriter](https://github.com/Hongcheng-LI/dsh-paperwriter) | 0 | 2026-10-29 | 2026-10-29 | Paperwriter skill packaged as a DeepSeek Harness (DSH) plugin, with a dsh-market index |
| 176 | [Honghe/dsh-workspace-file-export](https://github.com/Honghe/dsh-workspace-file-export) | 0 | 2026-10-28 | 2026-10-29 | DeepSeek-Harness 工作区文件下载插件 |
| 177 | [hope586/dsh-context-lite](https://github.com/hope586/dsh-context-lite) | 0 | 2026-10-29 | 2026-10-29 | Read-only context timeline and automatic provenance sidebar for DeepSeek Harness |
| 178 | [huangzhilin-hzl/dsh-power-type](https://github.com/huangzhilin-hzl/dsh-power-type) | 0 | 2026-10-23 | 2026-10-29 | Power Mode typing effects for the DSH web composer: caret particles, heat and embers, combo counter, synthesized key ticks. |
| 179 | [hulibuld/dsh-pet-cuteness-plugin](https://github.com/hulibuld/dsh-pet-cuteness-plugin) | 0 | 2026-10-25 | 2026-10-29 | 由 DSH 上传：AI娘化插件 |
| 180 | [hxdts/dsh-browser-setup](https://github.com/hxdts/dsh-browser-setup) | 0 | 2026-10-29 | 2026-10-29 | 让 DeepSeek Harness 控制你日常的 Google Chrome：真实登录态、可视化操作、一键安装 |
| 181 | [HYBB-rash/dsh-inject-head](https://github.com/HYBB-rash/dsh-inject-head) | 0 | 2026-10-29 | 2026-10-29 | Inject a fixed block of text at the very top of every DeepSeek Harness system prompt, including complete-prompt presets. Zero dependencies. |
| 182 | [i1537725423-dotcom/dsh-plugin-task-budget](https://github.com/i1537725423-dotcom/dsh-plugin-task-budget) | 0 | 2026-10-29 | 2026-10-29 | 任务预算：给 DeepSeek Harness 每一轮对话设人民币花费上限，默认 5 元，到线即停。 |
| 183 | [icrefin/dsh-middle-click-tab-close](https://github.com/icrefin/dsh-middle-click-tab-close) | 0 | 2026-10-29 | 2026-10-29 | Middle-click a right-sidebar tab in the DeepSeek Harness desktop app to close it, through the same close path as the tab's × control. |
| 184 | [icrefin/dsh-workspace-running-indicator](https://github.com/icrefin/dsh-workspace-running-indicator) | 0 | 2026-10-29 | 2026-10-29 | Animate a folded Workspace's icon in the DeepSeek Harness sidebar while a session inside it is working — the in-progress loader, restored. |
| 185 | [IFIAnder/dsh-loose-review](https://github.com/IFIAnder/dsh-loose-review) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：「自动审查（宽松）」权限预设 —— 破坏性命令执行前做窄模型审查，执行中检测到大量删除会熔断 |
| 186 | [imwhatiam/dsh-mosaic](https://github.com/imwhatiam/dsh-mosaic) | 0 | 2026-10-29 | 2026-10-29 | Lightweight visual answers for DeepSeek Harness: three selectable themes, Mermaid diagrams, charts, tables, media and sandboxed widgets. |
| 187 | [infraredsqy/dsh-pathfinder](https://github.com/infraredsqy/dsh-pathfinder) | 0 | 2026-10-19 | 2026-10-29 | A DSH plugin that renders an agent-pathfinder record as a panel in the DSH Web UI. |
| 188 | [itstartstosnow/dsh-context-window-reminder](https://github.com/itstartstosnow/dsh-context-window-reminder) | 0 | 2026-10-29 | 2026-10-29 | Tiny agent-facing context-window reminder for DeepSeek Harness: one data line each turn, no judgment, advice, or thresholds. The model decides what to do. |
| 189 | [Jegozhou/dsh-plugin-bidkit](https://github.com/Jegozhou/dsh-plugin-bidkit) | 0 | 2026-10-29 | 2026-10-29 | BidKit — a native DeepSeek Harness (dsh) plugin for the tender/bid lifecycle: 18-item tender parsing, score-aligned outlines, fact-anchored long-form drafting, compliance review and pure-JS .docx export. MIT. |
| 190 | [jeskoky-pixel/amadeus-life](https://github.com/jeskoky-pixel/amadeus-life) | 0 | 2026-10-24 | 2026-10-29 | Workspace activities, intents and autonomous wake scheduling for DeepSeek Harness |
| 191 | [jeskoky-pixel/amadeus-memory](https://github.com/jeskoky-pixel/amadeus-memory) | 0 | 2026-10-24 | 2026-10-29 | Workspace memory and scene-aware retrieval for DeepSeek Harness, based on Mneme |
| 192 | [jeskoky-pixel/amadeus-persona](https://github.com/jeskoky-pixel/amadeus-persona) | 0 | 2026-10-28 | 2026-10-29 | Workspace core persona and scene styles for DeepSeek Harness |
| 193 | [jeskoky-pixel/amadeus-qq](https://github.com/jeskoky-pixel/amadeus-qq) | 0 | 2026-10-24 | 2026-10-29 | QQ scenes and continuous chat for DeepSeek Harness through NapCat |
| 194 | [jeskoky-pixel/amadeus-state](https://github.com/jeskoky-pixel/amadeus-state) | 0 | 2026-10-24 | 2026-10-29 | Workspace mood, energy and interest state for DeepSeek Harness |
| 195 | [jieyueriluo/DSH_balance-chip](https://github.com/jieyueriluo/DSH_balance-chip) | 0 | 2026-10-29 | 2026-10-29 | A DSH composer chip for conversation spend and account balance, with a token breakdown panel. |
| 196 | [jjjjjjjjnnjnn/dsh-triage](https://github.com/jjjjjjjjnnjnn/dsh-triage) | 0 | 2026-10-26 | 2026-10-29 | 分诊台 / Triage — the judgment layer for DeepSeek Harness plugins: why a plugin silently disappeared, and whether a candidate survives your exact environment. |
| 197 | [JKBJ828/dsh-context-manager](https://github.com/JKBJ828/dsh-context-manager) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: delete a single turn from the model-visible context, and edit a per-session supplementary system prompt. |
| 198 | [John-20260101/dsh-theme-atlas](https://github.com/John-20260101/dsh-theme-atlas) | 0 | 2026-10-29 | 2026-10-29 | Six material skins for the DeepSeek Harness Web GUI — one token engine, light and dark, switched in-app. |
| 199 | [JOJO-Adam/dsh-api-contract](https://github.com/JOJO-Adam/dsh-api-contract) | 0 | 2026-10-29 | 2026-10-29 | API contract studio for DeepSeek Harness: contract-first authoring, breaking-change review, error contracts, versioning, docs. 7 skills. |
| 200 | [JOJO-Adam/dsh-git-workflow](https://github.com/JOJO-Adam/dsh-git-workflow) | 0 | 2026-10-29 | 2026-10-29 | Git workflow studio for DeepSeek Harness: branch model, commit conventions, PR review, history surgery, disaster recovery, release versioning. 7 skills. |
| 201 | [JunKoProject/dsh-read-book](https://github.com/JunKoProject/dsh-read-book) | 0 | 2026-10-29 | 2026-10-29 | Four free libraries in one window: Gutenberg and Shuge give real download links, NCPSSD searches, ctext is link-only. |
| 202 | [junqi-lu/dsh-tada](https://github.com/junqi-lu/dsh-tada) | 0 | 2026-10-29 | 2026-10-29 | Native desktop notifications for DeepSeek Harness: turn completion, errors, approvals, and questions. |
| 203 | [just-liuyi/dsh-skills-center](https://github.com/just-liuyi/dsh-skills-center) | 0 | 2026-10-29 | 2026-10-29 | DSH 技能中心：左侧栏统一管理 Skill、MCP 服务器与提示词注入 · DSH Skills Center: manage skills, MCP servers and prompt injection from one sidebar panel |
| 204 | [Jydsh/dsh-ding-card](https://github.com/Jydsh/dsh-ding-card) | 0 | 2026-10-27 | 2026-10-29 | dsh上基于dsh-im插件开发的插件，主要接入钉钉卡片模板，可设计，可拓展可测试的功能。 |
| 205 | [Kagurazaka135/dsh-memory](https://github.com/Kagurazaka135/dsh-memory) | 0 | 2026-10-12 | 2026-10-29 | DeepSeek Harness 分层记忆插件：L3 版本化事实 + L4 启动摘要 + 夜间整理，PC/手机通用 |
| 206 | [Kagurazaka135/dsh-web-search-free](https://github.com/Kagurazaka135/dsh-web-search-free) | 0 | 2026-10-21 | 2026-10-29 | DeepSeek Harness 的免费优先搜索 provider：Exa/Bing/DuckDuckGo/SerpAPI 自动降级 |
| 207 | [kennethfan/dsh-sandbox-tune](https://github.com/kennethfan/dsh-sandbox-tune) | 0 | 2026-10-29 | 2026-10-29 | DSH 沙箱调优插件：让 go build / npm install 等开发命令在沙箱内跑通，减少重复的提权审批弹窗 |
| 208 | [Kewnn/dsh-peer-chat](https://github.com/Kewnn/dsh-peer-chat) | 0 | 2026-10-29 | 2026-10-29 | DSH 三合一插件：本地会话工具 + 预设建会话/插话 + 跨 DSH 实例对话（Apache-2.0） |
| 209 | [kikiler114514/dsh-think-chinese](https://github.com/kikiler114514/dsh-think-chinese) | 0 | 2026-10-29 | 2026-10-29 | 强制 DeepSeek Harness 的所有对话用简体中文思考与回复：系统提示词硬约定 + 逐轮中文锚点双保险 |
| 210 | [KKUCODES/deepseek-harness-predictions](https://github.com/KKUCODES/deepseek-harness-predictions) | 0 | 2026-10-29 | 2026-10-29 | Inline next-message predictions for DeepSeek Harness, with Tab-to-accept and configurable models. |
| 211 | [Koewen/dsh-window-size-lock](https://github.com/Koewen/dsh-window-size-lock) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: remember, lock and restore the main window size across sessions (koffi + user32, no Electron API needed). |
| 212 | [Kosello/dsh-skill-rag](https://github.com/Kosello/dsh-skill-rag) | 0 | 2026-10-29 | 2026-10-29 | Configurable, optional skill discovery for DeepSeek Harness: standard catalog, local keyword search, or hybrid retrieval with Jetson, Google, OpenRouter or OpenAI-compatible embeddings. |
| 213 | [KshineKX/the-herta-atelier](https://github.com/KshineKX/the-herta-atelier) | 0 | 2026-10-20 | 2026-10-29 | 崩坏：星穹铁道「大黑塔」DSH Web GUI 主题皮肤 · 紫黑书房与群星之眼 · MIT |
| 214 | [KuAgLan/dsh-session-delete](https://github.com/KuAgLan/dsh-session-delete) | 0 | 2026-10-29 | 2026-10-29 | dsh 插件： 在会话行「...」菜单增加 「删除会话」 选项  |
| 215 | [kunjienie50-creator/dsh-shared-kb](https://github.com/kunjienie50-creator/dsh-shared-kb) | 0 | 2026-10-29 | 2026-10-29 | Team shared knowledge base for DeepSeek Harness: one Hub, everyone joins with an invite code. |
| 216 | [lalilulelo3/dsh-spend-pill](https://github.com/lalilulelo3/dsh-spend-pill) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: a cost pill in the composer status row showing what the previous turn actually cost. |
| 217 | [laoer/dsh-whitelist-auto-approval](https://github.com/laoer/dsh-whitelist-auto-approval) | 0 | 2026-10-23 | 2026-10-29 | Per-command sandbox allow-list for the DSH bash tool: allow-listed CLIs (lark-cli, gh, ...) run under a home-writable sandbox instead of prompting for danger-full-access. |
| 218 | [laojingwei/dsh-remotion-launcher](https://github.com/laojingwei/dsh-remotion-launcher) | 0 | 2026-10-28 | 2026-10-29 | 启动器-为dsh使用Remotion Studio · Agent 协同动画工程做的启动器；Remotion Studio可让你的agent公式化生成各种风格的网页视频 |
| 219 | [leno-whale/dsh-leno-film-eye](https://github.com/leno-whale/dsh-leno-film-eye) | 0 | 2026-10-29 | 2026-10-29 | 鱼眼：让 DSH agent 真的看完一段片子——连续画面、声音形状、剪辑节奏三线对齐（ffmpeg，无云依赖） |
| 220 | [liaohongrao/dsh-approval-sound](https://github.com/liaohongrao/dsh-approval-sound) | 0 | 2026-10-29 | 2026-10-29 | Play a Windows notification sound when DeepSeek Harness asks for approval or an answer. |
| 221 | [lifeiyu-44/dsh-model-hub](https://github.com/lifeiyu-44/dsh-model-hub) | 0 | 2026-10-29 | 2026-10-29 | 把 WorkBuddy / Qoder CN 的模型统一接入 DeepSeek Harness，带多账号池、凭据自动接管、请求记录与诊断 |
| 222 | [Liman-cmd/dsh-plugin-tool-prefetch](https://github.com/Liman-cmd/dsh-plugin-tool-prefetch) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 插件：工具调用预测与预取。以 Python 边车方式拉起 CT-GNN 预测网关，把其工具原生注册到 ctx.tools——预测下一个工具调用、分层预热（L0-L3）、在线命中率遥测、训练数据自动采集。 |
| 223 | [LingMoe404/dsh-cot-translation-reader](https://github.com/LingMoe404/dsh-cot-translation-reader) | 0 | 2026-10-29 | 2026-10-29 | Show the official COT machine translation inside dsh-better-display's reading view · 让阅读页显示官方「思考过程机器翻译」的译文 |
| 224 | [Lion-1209/aurora-studio](https://github.com/Lion-1209/aurora-studio) | 0 | 2026-10-29 | 2026-10-29 | Aurora Studio — high-freedom UI customization for DeepSeek Harness: themes, wallpapers, and a 大肥鱼 desktop pet with account/token bubble. |
| 225 | [lisihao/dsh-solar-bench](https://github.com/lisihao/dsh-solar-bench) | 0 | 2026-10-29 | 2026-10-29 | Ablation benchmarks for DeepSeek Harness plugins: run a task suite with and without chosen plugins and compare success, tokens, cost and time. |
| 226 | [LIU118117/dsh-voice](https://github.com/LIU118117/dsh-voice) | 0 | 2026-10-29 | 2026-10-29 | 让 AI 有声音：带情绪说话 + 唱歌（ChatTTS / edge-tts） |
| 227 | [liubaicai/dsh-qoder-link](https://github.com/liubaicai/dsh-qoder-link) | 0 | 2026-10-28 | 2026-10-29 | 将Qoder CLI 接入 DeepSeek Harness (DSH) 的插件 |
| 228 | [liuhusk/dsh-status-card](https://github.com/liuhusk/dsh-status-card) | 0 | 2026-10-29 | 2026-10-29 | A permanent status card in the top-right corner of the DSH content area: turn timing, to-dos, goal, plans, changed files and subagents. |
| 229 | [liye0803/dsh-voice-studio](https://github.com/liye0803/dsh-voice-studio) | 0 | 2026-10-29 | 2026-10-29 | Sidebar voice studio for DeepSeek Harness: GPT-SoVITS voices + RVC covers |
| 230 | [lof6yo/dsh-monitor](https://github.com/lof6yo/dsh-monitor) | 0 | 2026-10-29 | 2026-10-29 | Lightweight server and workspace resource monitor for the DeepSeek Harness Web UI |
| 231 | [LongerWu2026/dsh-dev-workbench](https://github.com/LongerWu2026/dsh-dev-workbench) | 0 | 2026-10-27 | 2026-10-29 | DeepSeek Harness 原生插件：开发者智能工作台（今日简报 / 任务中心 / 统一搜索 / Agent 中心 / 开发工具箱 / 研发协作 / 知识空间） |
| 232 | [lswang9/dsh-kimi-control](https://github.com/lswang9/dsh-kimi-control) | 0 | 2026-10-29 | 2026-10-29 | Kimi-style browser takeover UI for DeepSeek Harness: native sidebar, rainbow feedback, human handoff, and conversation cards. |
| 233 | [lucky6star9/dsh-prompt-optimizer](https://github.com/lucky6star9/dsh-prompt-optimizer) | 0 | 2026-10-29 | 2026-10-29 | dsh-prompt-optimizer提示词优化插件 |
| 234 | [Lutra23/dsh-design-symposium](https://github.com/Lutra23/dsh-design-symposium) | 0 | 2026-10-29 | 2026-10-29 | 设计研讨会插件：多贤者立场研讨 + 主席收敛设计纪要（DSH 插件）。fork 改造自 HSM266/dsh-roundtable-harness。 |
| 235 | [lxl2000927/dsh-memos-panel](https://github.com/lxl2000927/dsh-memos-panel) | 0 | 2026-10-29 | 2026-10-29 | MemOS 官方 DSH 插件的第三方中文设置面板：35 项参数、连接测试、分组配置与默认值说明。 |
| 236 | [Lyrrrecoral/dsh-resource-platform](https://github.com/Lyrrrecoral/dsh-resource-platform) | 0 | 2026-10-29 | 2026-10-29 | Host resource guard, managed long-task allocation and a session-centred Resources UI for DeepSeek Harness. |
| 237 | [Lysander-9/dsh-intermi](https://github.com/Lysander-9/dsh-intermi) | 0 | 2026-10-28 | 2026-10-29 | Interactive view of the persistent terminal used by each DSH Agent. |
| 238 | [LyuYuxin/dsh-market-peek](https://github.com/LyuYuxin/dsh-market-peek) | 0 | 2026-10-29 | 2026-10-29 | Preview DSH plugin-market entries inside DeepSeek Harness instead of an external browser. |
| 239 | [LyuYuxin/dsh-wsl-folder](https://github.com/LyuYuxin/dsh-wsl-folder) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: add WSL directories as workspaces from the Add workspace button; their sidebar terminals open inside the distribution. |
| 240 | [lzyzuo/dsh-boot-video](https://github.com/lzyzuo/dsh-boot-video) | 0 | 2026-10-29 | 2026-10-29 | 给 DeepSeek Harness 的 Web 界面加一段全屏开机动画：打开窗口时铺满整屏播一遍，播完淡出进主界面，点任意处可跳过。独立浮层，与 wallpaper-engine 壁纸插件互不干扰。 |
| 241 | [m1eb0/fightclub-dsh](https://github.com/m1eb0/fightclub-dsh) | 0 | 2026-10-29 | 2026-10-29 | 大肥鱼世界 MCP tools and portable Skill for DeepSeek Harness |
| 242 | [Macocin/dsh-gui-control](https://github.com/Macocin/dsh-gui-control) | 0 | 2026-10-29 | 2026-10-29 | 类似人类操作的DSH桌面操作插件：查看截图 + 控制鼠标键盘  + 低成本读屏 (OCR / 找色 / 网格) |
| 243 | [mars-area/dsh-chat-trash](https://github.com/mars-area/dsh-chat-trash) | 0 | 2026-10-29 | 2026-10-29 | Delete a chat from the DeepSeek Harness sidebar for good — gone immediately, nothing archived. |
| 244 | [maxid/dsh-github-aide](https://github.com/maxid/dsh-github-aide) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: publish a workspace or project directory to GitHub — read-only preflight, secret scan, .gitignore generation, repository creation, commit, divergence handling, and push. |
| 245 | [Maxim-Kerman-Lin/dsh-daily-luck](https://github.com/Maxim-Kerman-Lin/dsh-daily-luck) | 0 | 2026-10-29 | 2026-10-29 | 今日好运来临：DSH Web UI 塔罗每日运势插件（五维评分 + 针对问题的回答） |
| 246 | [maxy1817/dsh-inline-edit](https://github.com/maxy1817/dsh-inline-edit) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 原生消息编辑插件，支持修改文字和附件，可选择新建分支或在当前对话重新生成。 |
| 247 | [mdl233/dsh-staging-guard](https://github.com/mdl233/dsh-staging-guard) | 0 | 2026-10-29 | 2026-10-29 | DSH pre-execute hook: deny writes under a read-only result zone of protected roots. |
| 248 | [MeloFang/dsh-prompt-sharpen](https://github.com/MeloFang/dsh-prompt-sharpen) | 0 | 2026-10-29 | 2026-10-29 | Pre-send checkup for prompts: a zero-token lint tells you which of output format, constraints, acceptance criteria and context your draft is missing, then one click fills exactly those gaps. |
| 249 | [Miaoyeah/dsh-approval-session-allow](https://github.com/Miaoyeah/dsh-approval-session-allow) | 0 | 2026-10-29 | 2026-10-29 | DSH 审批面板增加「本对话均允许」：按工具记住本会话授权，同类审批自动放行且可撤销 |
| 250 | [miiy/dsh-notify](https://github.com/miiy/dsh-notify) | 0 | 2026-10-29 | 2026-10-29 | Cross-device notifications for DeepSeek Harness.  |
| 251 | [Milliontimes/dsh-preset-route](https://github.com/Milliontimes/dsh-preset-route) | 0 | 2026-10-29 | 2026-10-29 | DSH agent preset: reads the live agent-preset roster, picks the preset a task should go to, and drafts a paste-ready task brief in that preset's real input contract. Read-only by construction. |
| 252 | [MinEagle/dsh-dingtalk-self](https://github.com/MinEagle/dsh-dingtalk-self) | 0 | 2026-10-29 | 2026-10-29 | 以你本人钉钉身份自动回复私聊的 DeepSeek Harness 插件：按工作区绑定联系人，agent 查完资料代你答复 |
| 253 | [mkpoli/dsh-continue-all](https://github.com/mkpoli/dsh-continue-all) | 0 | 2026-10-29 | 2026-10-29 | DSH Web UI plugin: continue every session stopped by an unexpected exit, in one click. |
| 254 | [mmyddd/dsh-element-lens](https://github.com/mmyddd/dsh-element-lens) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: pick an element in the right-Sidebar browser and drop it into the chat draft |
| 255 | [morcoan/ligui](https://github.com/morcoan/ligui) | 0 | 2026-10-29 | 2026-10-29 | Ligui — a thin, model-agnostic agent built on DeepSeek Harness |
| 256 | [Moyumole/dsh-plugin-updates](https://github.com/Moyumole/dsh-plugin-updates) | 0 | 2026-10-29 | 2026-10-29 | A DSH plugin that checks the third-party plugins in your profile against npm and updates them in place — right-sidebar page, Plugins tab, and a left-sidebar update badge. |
| 257 | [multidsh/dsh-webui-auth](https://github.com/multidsh/dsh-webui-auth) | 0 | 2026-10-29 | 2026-10-29 | Persistent WebUI authentication plugin for DeepSeek Harness (fork of dsh-webui-auth@0.3.6 + 0.3.7 redirect fix) |
| 258 | [muning0214/dsh-custom-splash](https://github.com/muning0214/dsh-custom-splash) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 开屏动画插件：每次启动随机播放一段视频，Esc 跳过，隐藏 Windows 标题栏按钮 |
| 259 | [Najiya5/dsh-fish-reflection](https://github.com/Najiya5/dsh-fish-reflection) | 0 | 2026-10-28 | 2026-10-29 | 让ai每天反思并记录成长曲线 |
| 260 | [nalikip/dsh-unified-desktop](https://github.com/nalikip/dsh-unified-desktop) | 0 | 2026-10-29 | 2026-10-29 | 两个 Windows 桌面自动化 MCP，44 个工具里 15 个是重复或危险的——合成一个 29 工具的统一面，内建危险调用拦截。 |
| 261 | [Natte/dsh-sidebar-todo](https://github.com/Natte/dsh-sidebar-todo) | 0 | 2026-10-22 | 2026-10-29 | DeepSeek Harness 待办插件：侧栏入口行 + 主面板页，宿主侧持久化，agent 可读写 |
| 262 | [NelsonLongxiang/dsh-taste-loop](https://github.com/NelsonLongxiang/dsh-taste-loop) | 0 | 2026-10-29 | 2026-10-29 | DSH taste-loop plugin: self-service versioned taste rules with independent-session quorum and human arbitration. 品味闭环插件：自助规则提案+独立共识+人工仲裁 |
| 263 | [NNNNyang/dsh-remote-gpu](https://github.com/NNNNyang/dsh-remote-gpu) | 0 | 2026-10-29 | 2026-10-29 | Shows how many GPUs on the dsh-remote host are free, with per-GPU utilization, memory, temperature and the owning user. |
| 264 | [nonefora11/dsh-intent-debt-radar](https://github.com/nonefora11/dsh-intent-debt-radar) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: tracks the promises a conversation quietly drops - deferrals, unanswered questions, shelved decisions, agent commitments - and keeps them as a ranked, cross-session ledger. |
| 265 | [OnebugIS/dsh-storage-inspector](https://github.com/OnebugIS/dsh-storage-inspector) | 0 | 2026-10-29 | 2026-10-29 | DSH 存储管理插件：本地磁盘占用检查与清理建议 |
| 266 | [OOOHS/dsh-3d](https://github.com/OOOHS/dsh-3d) | 0 | 2026-10-21 | 2026-10-29 | Blender-based 3D modeling and image reconstruction for DeepSeek Harness. Built on CheshireJCat/blender. |
| 267 | [openLabBean/dsh-digital-pet](https://github.com/openLabBean/dsh-digital-pet) | 0 | 2026-10-29 | 2026-10-29 | DSH 电子宠物：用 DeepSeek Harness 的 Token 换金币，养一只陪你工作六个月的像素宠物。A desktop pet for DeepSeek Harness. |
| 268 | [OpenVulcan/dsh-vulcancode](https://github.com/OpenVulcan/dsh-vulcancode) | 0 | 2026-10-29 | 2026-10-29 | VulcanCode plugin suite for DeepSeek Harness (dsh): OpenVulcan account, Vulcan Decision permission guard, interactive answers, VulcanCode UI style and LuaSkills with the Hub. Community plugins, not affiliated with DeepSeek. |
| 269 | [OpenVulcan/vulcan-decision-guard](https://github.com/OpenVulcan/vulcan-decision-guard) | 0 | 2026-10-18 | 2026-10-29 | Permission guard plugins for DSH. Each tool call is checked by the Vulcan Decision model, running locally on ONNX or through OpenVulcan Cloud, before it runs. Fail-closed: if the judge is unreachable, times out or errors, the call is not allowed. |
| 270 | [outmanwt/dsh-team-fishbone](https://github.com/outmanwt/dsh-team-fishbone) | 0 | 2026-10-29 | 2026-10-29 | DSH 团队鱼骨图：子 Agent 分工、实时状态、执行指标与会话过程导航。 |
| 271 | [ozjxnxh/dsh-prompt-enhance-keyless](https://github.com/ozjxnxh/dsh-prompt-enhance-keyless) | 0 | 2026-10-29 | 2026-10-29 | Prompt enhancement for DeepSeek Harness (dsh): a composer button rewrites your draft into a well-structured prompt, with a keyless Pollinations lane and automatic fallback to the session model. |
| 272 | [ozjxnxh/dsh-session-trash](https://github.com/ozjxnxh/dsh-session-trash) | 0 | 2026-10-29 | 2026-10-29 | Adds delete and multi-select batch delete to the sidebar session menu — removes session chat logs with automatic backup and one-click undo, leaving workspace files untouched. |
| 273 | [P1gG0dG0d/dsh-study-ask](https://github.com/P1gG0dG0d/dsh-study-ask) | 0 | 2026-10-29 | 2026-10-29 | Study Ask for DeepSeek Harness: select text in a conversation and question it in a dedicated right-sidebar chat that never clutters the session list. |
| 274 | [P3NN4L/dsh-tribot-team](https://github.com/P3NN4L/dsh-tribot-team) | 0 | 2026-10-29 | 2026-10-29 | TriBot Bot team for DeepSeek Harness: the /tribot skill (dispatcher / researcher / engineer / steward / reviewer) plus a visible composer role picker. Zero config, MIT. |
| 275 | [PengJunchen/dsh-video-studio](https://github.com/PengJunchen/dsh-video-studio) | 0 | 2026-10-28 | 2026-10-29 | Local video color editing for DeepSeek Harness: DJI Log LUT restoration, highlights and shadows, skin, selective color, and 10-bit HEVC export. |
| 276 | [pengpenglele/dsh-approval-notify](https://github.com/pengpenglele/dsh-approval-notify) | 0 | 2026-10-27 | 2026-10-29 | deepseek harness 的Windows消息通知功能 |
| 277 | [PengYangchao0808/oh-my-coharness](https://github.com/PengYangchao0808/oh-my-coharness) | 0 | 2026-10-29 | 2026-10-29 | Install once and let the AI coding CLIs you already use work together inside DeepSeek Harness. One tool, five verified harnesses, honest diagnostics. |
| 278 | [PinkyKan/dsh-plugin-readme-zh](https://github.com/PinkyKan/dsh-plugin-readme-zh) | 0 | 2026-10-28 | 2026-10-29 | DSH bundle: translate installed plugins' documentation into Simplified Chinese with a persistent segment cache. |
| 279 | [Plong-RF/dsh-turn-notify](https://github.com/Plong-RF/dsh-turn-notify) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness 插件：对话完成或等待确认时，在 Windows 屏幕右下角弹出跟随当前主题的提示卡片，并播放系统通知音。 |
| 280 | [PuerJJJ/dsh-theme-dracula](https://github.com/PuerJJJ/dsh-theme-dracula) | 0 | 2026-10-29 | 2026-10-29 | Dracula color theme for DeepSeek Harness — token-level reskin of the whole Web GUI, switchable in Settings → General. |
| 281 | [puthead/dsh-net-inspector](https://github.com/puthead/dsh-net-inspector) | 0 | 2026-10-29 | 2026-10-29 | DevTools-style network panel for DeepSeek Harness: captures Host fetch, the Web page, the sidebar webview and an external Chromium over CDP in one panel. |
| 282 | [qianlai-ai/dsh-qianlai](https://github.com/qianlai-ai/dsh-qianlai) | 0 | 2026-10-29 | 2026-10-29 | 钱来张姐：DeepSeek Harness 财务助手插件社区仓库（建仓阶段，源码待接入） |
| 283 | [QICci/dsh-fnos-control](https://github.com/QICci/dsh-fnos-control) | 0 | 2026-10-29 | 2026-10-29 | 一个dsh插件，用来解决飞牛nas的dsh在手机使用时无法看到的自带的刷新和重启 |
| 284 | [qichuang321/dsh-github-link](https://github.com/qichuang321/dsh-github-link) | 0 | 2026-10-29 | 2026-10-29 | 把当前 DeepSeek 账号关联到 GitHub，并给 Agent 一个受控的 github 工具。 · Link a DeepSeek account in DSH to GitHub with CLI, PAT, or OAuth device flow. |
| 285 | [qoqpqpq/dsh-web-preview](https://github.com/qoqpqpq/dsh-web-preview) | 0 | 2026-10-29 | 2026-10-29 | Preview any local web server inside the DeepSeek Harness GUI — remote-browser-safe same-origin proxy with embed tab, floating window and Console/Network/Errors toolbox. |
| 286 | [QqiqiQ/dsh-calculator](https://github.com/QqiqiQ/dsh-calculator) | 0 | 2026-10-29 | 2026-10-29 | dsh计算器插件 |
| 287 | [QqiqiQ/dsh-session-toolkit](https://github.com/QqiqiQ/dsh-session-toolkit) | 0 | 2026-10-29 | 2026-10-29 | dsh会话管理插件，可修改agent预设以及迁移工作区 |
| 288 | [rahemoth/dsh-theme-endfield](https://github.com/rahemoth/dsh-theme-endfield) | 0 | 2026-10-29 | 2026-10-29 | Local fork of ymh0000123/dsh-theme-endfield: Endfield theme with an OpenCode Go quota balance capsule (5h/weekly/monthly, hover-to-grow card, balance source setting). |
| 289 | [Re5tart/dsh-netqos](https://github.com/Re5tart/dsh-netqos) | 0 | 2026-10-29 | 2026-10-29 | 一个给 DSH 用的网速守卫插件。你在打游戏、或者运行名单里的软件时，它会用 Windows 原生的按进程 QoS，把 Coopanion、SnowLuma 和 DSH 自己的带宽限制到设定值（或者直接断到几乎不通）；软件一关，就自动恢复。触发软件、限速值、限速还是断开，都在 DSH 设置页里可视化配置。它不装代理、不改路由、不下驱动；群里图片和短视频卡住游戏的那几秒，正是它要处理的问题。 |
| 290 | [regrevia/dsh-vantage](https://github.com/regrevia/dsh-vantage) | 0 | 2026-10-27 | 2026-10-29 | Read-only task overview view for DeepSeek Harness: rounds, facts, verification and a bounded history, one screen next to the conversation. |
| 291 | [rentaoyan0628-collab/dsh-bili-danmaku-lite](https://github.com/rentaoyan0628-collab/dsh-bili-danmaku-lite) | 0 | 2026-10-27 | 2026-10-29 | DSH 轻量 B站直播弹幕插件：看弹幕/发弹幕/挂机听/可选自动陪聊与可选语音转写；进房与发弹幕都卡在人手里 |
| 292 | [RestRegular/dsh-computer-use](https://github.com/RestRegular/dsh-computer-use) | 0 | 2026-10-29 | 2026-10-29 | Windows computer use for DeepSeek Harness: screenshots, mouse, keyboard, windows and clipboard through a native Rust helper. |
| 293 | [Rexray117/dsh-model-manager](https://github.com/Rexray117/dsh-model-manager) | 0 | 2026-10-21 | 2026-10-29 | 一种 DeepSeek Harness（DSH）的模型与供应商管理插件：按供应商查看可用模型、屏蔽多余模型、追踪剩余积分与计划额度、按小时/日/周/半月/月统计真实 token 消耗。 |
| 294 | [Rexray117/Local-Docs-Workbench-Skill](https://github.com/Rexray117/Local-Docs-Workbench-Skill) | 0 | 2026-10-29 | 2026-10-29 | Local Docs Workbench · 本地资料工作台｜从本地既有文档（md/docx）抽取真实数据，构建"单文件、全内联、零外链"的本地工作台 HTML， 并用 Node DOM 桩 + 无头 Chrome 双重验证。适用于把散落的项目资料变成可检索、可校验、 可归档的只读索引页，且要求不部署、不上传、不改动源文件的场景。 触发词：搭建工作台、生成单文件HTML工作台、本地资料索引页、把md转成工作台、 抽取文档生成看板、workbench from local docs。 |
| 295 | [Rexray117/MarketSpider-Agent-Skill](https://github.com/Rexray117/MarketSpider-Agent-Skill) | 0 | 2026-10-29 | 2026-10-29 | MarketSpider Agent · 电商商品数据采集｜采集淘宝/天猫、京东、1688 的商品搜索结果（链接、名称、价格、图片、销量/评价、店铺、店铺链接），并导出为 JSON/CSV/XLSX/TXT/SQL/SQLite/Markdown。基于 zhangjiancong/MarketSpider 源码改造为无 GUI、可脚本调用、JSON 输出的工具链：支持登录 Cookie 获取/导入/校验、分页抓取、选择器诊断(probe)、价格与店铺统计、离线解析自检。触发词：抓取淘宝商品、爬京东价格、1688 批发价、电商比价数据、商品价格监控、MarketSpider、采集商品列表、竞品价格表。仅用于学习研究与合规范围内的数据采集，不用于绕过风控或大规模抓取。 |
| 296 | [Rexray117/PDF-OCR-Toolkit-Skill](https://github.com/Rexray117/PDF-OCR-Toolkit-Skill) | 0 | 2026-10-29 | 2026-10-29 | PDF OCR Toolkit · PDF 全链路处理｜PDF 全链路处理工具包：探测（页数/加密/文本层）→ 文本层提取（pypdf）→ 扫描件渲染（pymupdf/fitz）→ OCR 识别（rapidocr-onnxruntime，中英文，模型内嵌离线）→ Markdown 整理 → docx 交付（python-docx）。含环境自检 doctor、一键装环境 setup、自动分流 pipeline（有文本层走提取、无文本层走 OCR）。触发词：读PDF、扫描件、OCR、识别图片文字、提取文本、转docx、PDF翻译前处理。 |
| 297 | [Rexray117/PRD-Craft-Skill](https://github.com/Rexray117/PRD-Craft-Skill) | 0 | 2026-10-29 | 2026-10-29 | PRD Craft · 产品需求文档写作｜Write product requirements documents (PRD) with two specializations — general software/systems (app, web, mini program, admin platform, SaaS, internal tool) and agent-type systems (agent, copilot, rule-engine automation, ops/inspection/scheduling automation). Use when the user wants to clarify a fuzzy product idea, st |
| 298 | [Rexray117/UIDesign-Skill](https://github.com/Rexray117/UIDesign-Skill) | 0 | 2026-10-29 | 2026-10-29 | UI 设计技能包（去 AI 味版）：24 种风格处方 + 6 类场景设计决策 + AI 味六维诊断与改造，面向 Web 界面/原型/前端实现。 |
| 299 | [Rick1125/dsh-beads-viewer](https://github.com/Rick1125/dsh-beads-viewer) | 0 | 2026-10-29 | 2026-10-29 | Beads Viewer for DSH |
| 300 | [rokyaria/dsh-watch-kit-plugin](https://github.com/rokyaria/dsh-watch-kit-plugin) | 0 | 2026-10-26 | 2026-10-29 | 给 DeepSeek Harness 的常驻巡检插件：按配置的间隔运行 checker，checker 只在「有事」时输出 notify: true，插件才唤醒 agent；其余时间零 token、零对话。 |
| 301 | [Root-7-KHX/companion-memory](https://github.com/Root-7-KHX/companion-memory) | 0 | 2026-10-29 | 2026-10-29 | Roleplay companion memory plugin for DeepSeek Harness: per-conversation persona docs, favorability tracking, recent 48h transcript search and a date-archived local knowledge base. |
| 302 | [ROY32172310/qa](https://github.com/ROY32172310/qa) | 0 | 2026-10-28 | 2026-10-29 | Deterministic, MCP-native delivery QA for AI-generated web pages |
| 303 | [rukazax/deepseek_harness](https://github.com/rukazax/deepseek_harness) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugins: MCP client + Sarex and Yandex Mail MCP servers. Bilingual RU/EN docs, diagrams, DSH-compatible packaging. |
| 304 | [rukazax/dsh-mobile](https://github.com/rukazax/dsh-mobile) | 0 | 2026-10-29 | 2026-10-29 | DSH Mobile: Android/foldable remote control client for DeepSeek Harness - plugin, PWA, WebView APK, diagrams and PDF manual. |
| 305 | [SarahDeady/dsh-auto-title](https://github.com/SarahDeady/dsh-auto-title) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：自动把会话标题提炼成最多 12 个字；用户手动改名后自动停手，侧栏会话菜单可一键重新提炼。Auto Session Title for DeepSeek Harness. |
| 306 | [sdwf4wgv5z-rgb/dsh-pi-ai-patch](https://github.com/sdwf4wgv5z-rgb/dsh-pi-ai-patch) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：把 cordis.patch.yml 里模型的 input 模态声明做成设置面板勾选框，省掉手改 YAML 的缩进风险。只改 DSH 侧声明，不改 API 能力。 |
| 307 | [shiyoungwoo/dsh-prototype-annotator](https://github.com/shiyoungwoo/dsh-prototype-annotator) | 0 | 2026-10-29 | 2026-10-29 | Codex-style prototype annotations for DSH Desktop — 点选页面元素，用紧凑批注让 Agent 精确修改前端 |
| 308 | [shua-781/dsh-beme](https://github.com/shua-781/dsh-beme) | 0 | 2026-10-29 | 2026-10-29 | 关于记忆架构开发的dsh插件版，简化了安装流程，优化了一些问题 |
| 309 | [shutongX/dsh-config-migrator](https://github.com/shutongX/dsh-config-migrator) | 0 | 2026-10-29 | 2026-10-29 | Export selected DSH configuration as a zip and restore it on a new machine with a conflict preview |
| 310 | [shutongX/dsh-mcp-console](https://github.com/shutongX/dsh-mcp-console) | 0 | 2026-10-29 | 2026-10-29 | MCP server manager for DeepSeek Harness: status dots, OAuth login, JSON import/export, diagnostics log |
| 311 | [shutongX/dsh-perf](https://github.com/shutongX/dsh-perf) | 0 | 2026-10-29 | 2026-10-29 | Performance suite for DeepSeek Harness: per-plugin cost, saved runs, agent-readable optimization reports |
| 312 | [shutongX/dsh-plugins-index](https://github.com/shutongX/dsh-plugins-index) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin market index aggregating shutongX plugin repositories |
| 313 | [shutongX/dsh-pocket-switch](https://github.com/shutongX/dsh-pocket-switch) | 0 | 2026-10-29 | 2026-10-29 | Switch between DSH hosts from your phone: store addresses and pins once, log in automatically |
| 314 | [shutongX/dsh-session-message](https://github.com/shutongX/dsh-session-message) | 0 | 2026-10-29 | 2026-10-29 | Cross-session messaging for DeepSeek Harness: send a user-role message to another session in any workspace |
| 315 | [SMPcosy/dsh-plugin-easy2restart](https://github.com/SMPcosy/dsh-plugin-easy2restart) | 0 | 2026-10-17 | 2026-10-29 |  DSH plugin: double-click the sidebar restart button to fully relaunch DeepSeek Harness; it is greyed out while an agent |
| 316 | [SMPcosy/dsh-plugin-member-manager](https://github.com/SMPcosy/dsh-plugin-member-manager) | 0 | 2026-10-17 | 2026-10-29 | DeepSeek Harness (DSH) plugin for team member management: two-level group→member org structure, Chinese display names &amp; aliases, job titles &amp; duties, skill tagging, retire/restore, and per-member model overrides. Ships as host tools + a Web management panel; keeps its own overlay registry so the immutable DSH core is never touched. MIT licensed. |
| 317 | [smwyylc/dsh-browser-tab](https://github.com/smwyylc/dsh-browser-tab) | 0 | 2026-10-27 | 2026-10-29 | DSH Web GUI top recent-session tab strip and favorites drawer plugin |
| 318 | [solstice621/dsh-better-answer-view](https://github.com/solstice621/dsh-better-answer-view) | 0 | 2026-10-29 | 2026-10-29 | Inline charts, cards, and interactive answers for DeepSeek Harness, with saved state and revision history. |
| 319 | [solstice621/dsh-conversation-cost](https://github.com/solstice621/dsh-conversation-cost) | 0 | 2026-10-28 | 2026-10-29 | Automatic model pricing and per-answer / conversation cost estimates for DeepSeek Harness Desktop. |
| 320 | [solstice621/dsh-opencode-go-auth](https://github.com/solstice621/dsh-opencode-go-auth) | 0 | 2026-10-08 | 2026-10-29 | OpenCode Go / Go Plus subscription auth for DeepSeek Harness Desktop, with native account, usage and model-sync UI. |
| 321 | [songni370/dsh-plugins-git-sync](https://github.com/songni370/dsh-plugins-git-sync) | 0 | 2026-10-28 | 2026-10-29 | A DeepSeek Harness plugin for backing up and synchronizing installed plugins and configurations across devices using Git repositories. |
| 322 | [st21a1/dsh-bili-wallpaper](https://github.com/st21a1/dsh-bili-wallpaper) | 0 | 2026-10-29 | 2026-10-29 | Bilibili live-room &amp; video wallpapers for the DeepSeek Harness Web GUI — scan-login, quality picker, blur/scrim controls. No extra runtime deps. |
| 323 | [StanElka/dsh-auto-archive](https://github.com/StanElka/dsh-auto-archive) | 0 | 2026-10-26 | 2026-10-29 | Automatically archive idle DSH conversations after a configurable number of days and clear the expired projection cache of archived sessions. Never deletes transcripts, attachments or workspace files. |
| 324 | [Stella-Mira/mira_active](https://github.com/Stella-Mira/mira_active) | 0 | 2026-10-29 | 2026-10-29 | DSH 自我激活插件（闹钟）：一条配置=一个闹钟，单次/每日/间隔/随机 + 条目级静默时段、失败退避，到点用 steer 插话唤醒会话 |
| 325 | [Stella-Mira/mira_live2d](https://github.com/Stella-Mira/mira_live2d) | 0 | 2026-10-29 | 2026-10-29 | DSH Live2D 看板娘插件：默认隐藏 + 常驻开关、模型/表情/动作/背景菜单、20 个工具、OpenAI 与阿里云 TTS（模型资产不入库） |
| 326 | [Stella-Mira/muse_vtuber](https://github.com/Stella-Mira/muse_vtuber) | 0 | 2026-10-29 | 2026-10-29 | DSH 界面交互（形象）：LIVE2D 主位 + 视频/音频/表情侧边栏、输入框摄像头与麦克风、语音识别与识图事件流、阿里云 TTS/ASR/识图与设置页 |
| 327 | [StellaryToucher/dsh-muse-code](https://github.com/StellaryToucher/dsh-muse-code) | 0 | 2026-10-29 | 2026-10-29 | Muse Code subagent provider for DeepSeek Harness — community fork with DSH 0.2.1+ compatibility fixes |
| 328 | [Stephen-pc/prompt-forge](https://github.com/Stephen-pc/prompt-forge) | 0 | 2026-10-29 | 2026-10-29 | 把 AI 作品逆向拆成可复现的提示词 · 五品类模板库 + 网页版 + DeepSeek Harness 插件 |
| 329 | [sukirk/dsh-find-history](https://github.com/sukirk/dsh-find-history) | 0 | 2026-10-28 | 2026-10-29 | DSH Web plugin: search what you typed in every workspace, straight from the sidebar — millisecond lookup that finds the conversation you forgot. |
| 330 | [sumingwang233/dsh-auto-title](https://github.com/sumingwang233/dsh-auto-title) | 0 | 2026-10-29 | 2026-10-29 | Automatic session titles for DeepSeek Harness: names a session from the first prompt plus the first assistant reply instead of truncating the prompt into the taskbar. |
| 331 | [thatgfsj-dsh/dsh-emotion-analyzer](https://github.com/thatgfsj-dsh/dsh-emotion-analyzer) | 0 | 2026-10-24 | 2026-10-29 | DSH 情绪分析器插件：本地 ONNX 推理为每条主模型回复打分，投影到会话状态并在网站注入可拖拽悬浮框 |
| 332 | [thatgfsj-dsh/dsh-phone](https://github.com/thatgfsj-dsh/dsh-phone) | 0 | 2026-10-24 | 2026-10-29 | dsh-phone：给 DeepSeek Harness 提供运行在后端、经浏览器右侧栏呈现的 Android 实例（含 phone_* 工具） |
| 333 | [ThomasTZh/dsh-setup](https://github.com/ThomasTZh/dsh-setup) | 0 | 2026-10-28 | 2026-10-29 | DeepSeek Harness setup: web profile, two local presets, chat preset bundle, plugins, skills, and third-party credits. |
| 334 | [Tindada/banso-dsh](https://github.com/Tindada/banso-dsh) | 0 | 2026-10-06 | 2026-10-29 | 基于 DeepSeek Harness 的网页研究助手，支持搜索、阅读网页、证据提取与面向模型的会话内资料管理。 |
| 335 | [tony92921/dsh-compact-manager](https://github.com/tony92921/dsh-compact-manager) | 0 | 2026-10-29 | 2026-10-29 | Context-compaction relay for DeepSeek Harness: an independent summarizer model plus a local mechanical fold, selected per call. |
| 336 | [torfqy/dsh-paper-mode](https://github.com/torfqy/dsh-paper-mode) | 0 | 2026-10-29 | 2026-10-29 | Overleaf-style LaTeX workbench for DeepSeek Harness: bilingual EN/ZH typeset twin, bidirectional SyncTeX, selectable PDF, paper-aware assistant. |
| 337 | [tp5s5mvjpv-coder/dsh-voice-endpoint](https://github.com/tp5s5mvjpv-coder/dsh-voice-endpoint) | 0 | 2026-10-29 | 2026-10-29 | Pause-terminated voice input for DeepSeek Harness: speak, pause, and the take transcribes itself. |
| 338 | [ttxl314/dsh-ds-peak-valley](https://github.com/ttxl314/dsh-ds-peak-valley) | 0 | 2026-10-29 | 2026-10-29 | Peak/off-peak (文峰/文谷) badge for the DeepSeek Harness composer dock - computed locally from the browser clock, no API calls, no tokens |
| 339 | [Vasyarot/dsh-wallet-ru](https://github.com/Vasyarot/dsh-wallet-ru) | 0 | 2026-10-29 | 2026-10-29 | Wallet для DeepSeek Harness: баланс в долларах, юанях и бонусных баллах, тариф Пик / Не пик и встроенное окно пополнения |
| 340 | [Wang-Chuming/dsh-obsidian-bridge](https://github.com/Wang-Chuming/dsh-obsidian-bridge) | 0 | 2026-10-29 | 2026-10-29 | One-click Obsidian channel for the DeepSeek Harness Web GUI: clicking a vault file reference opens it in the Obsidian app instead of the in-app preview. |
| 341 | [Wang1462604987/dsh-wsl-sidebar](https://github.com/Wang1462604987/dsh-wsl-sidebar) | 0 | 2026-10-29 | 2026-10-29 | 在DSH-Harness中使用WSL |
| 342 | [wangnian886/dsh-model-toggle](https://github.com/wangnian886/dsh-model-toggle) | 0 | 2026-10-29 | 2026-10-29 | Per-model hide/show switches for llm-pi-ai providers in the DSH settings page — hidden models disappear from the conversation model picker and stay restorable |
| 343 | [Warrenz23/dsh-channel-hub](https://github.com/Warrenz23/dsh-channel-hub) | 0 | 2026-10-29 | 2026-10-29 | 把飞书（Lark）变成 DeepSeek Harness 的远程控制台：长连接接入，无需公网 IP；带可视化配置页、审批卡、图片/语音。 |
| 344 | [wcnz-coder/dsh-kb-notebook](https://github.com/wcnz-coder/dsh-kb-notebook) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness knowledge base plugin with strict citation |
| 345 | [weicy98/dsh-permission-remote](https://github.com/weicy98/dsh-permission-remote) | 0 | 2026-10-27 | 2026-10-29 | 把一台 Linux 或 macOS 机器上的目录做成 DeepSeek Harness（DSH）工作区。标准会话里的 bash、read、write、edit、read_image、glob、grep 在那台机器上执行。只读、工作区可写、完全放开，以及一次放宽，仍用这个会话现有的 Permissions 和审批卡片。并支持普通会话中连接已添加的主机 |
| 346 | [wiiwings1988/dsh-agent-bridge](https://github.com/wiiwings1988/dsh-agent-bridge) | 0 | 2026-10-29 | 2026-10-29 | Use Claude Code and Codex sessions inside DeepSeek Harness (DSH): list, open, continue, pin, rename and archive them in the DSH Workspace browser. |
| 347 | [WJMACTD/dsh-deepseek-site](https://github.com/WJMACTD/dsh-deepseek-site) | 0 | 2026-10-29 | 2026-10-29 | 在 DeepSeek Harness 左侧栏加入入口，在中央面板内嵌 chat.deepseek.com，并跨重启保留登录 |
| 348 | [wlyzqm/dsh-tool-interrupt](https://github.com/wlyzqm/dsh-tool-interrupt) | 0 | 2026-10-29 | 2026-10-29 | 在手动停止工具运行的时候提供理由，不中断会话按需调整。 |
| 349 | [wodexiaoling/dsh-plugin-memory-four-books](https://github.com/wodexiaoling/dsh-plugin-memory-four-books) | 0 | 2026-10-29 | 2026-10-29 | Layered long-term memory for DeepSeek Harness: red lines / today / in-progress / common sense / archive, with BM25 recall and automatic consolidation. Zero dependencies. |
| 350 | [wooden-tan/dsh-team-autopilot](https://github.com/wooden-tan/dsh-team-autopilot) | 0 | 2026-10-27 | 2026-10-29 | Deterministic auto-dispatch for DeepSeek Harness native Agent Teams: wake a member when a task becomes ready, reclaim the task when its owner stalls, and treat write-scope overlap as a soft lock at dispatch time. |
| 351 | [wwwroot/dsh-explorer](https://github.com/wwwroot/dsh-explorer) | 0 | 2026-10-29 | 2026-10-29 | Native workspace file explorer for DeepSeek Harness with precision drag-and-drop chat insertion, motion collapse, git status badges, compact folders, and tab integration |
| 352 | [wy7779/dsh-plugin-autoupdater](https://github.com/wy7779/dsh-plugin-autoupdater) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: checks installed plugins for newer npm releases, updates them automatically, and falls back to uninstall + reinstall when an in-place upgrade is refused. |
| 353 | [wytyKen/dsh-whale-life](https://github.com/wytyKen/dsh-whale-life) | 0 | 2026-10-29 | 2026-10-29 | 🐋 Whale Life 鲸生 · 给 DeepSeek 鲸鱼娘完整的一生：人设、记忆、上下文全部保存在本地，通过 QQ / 微信 / B 站账号活在各个平台。One whale, one whole life. A DeepSeek Harness (DSH) plugin. |
| 354 | [wzciczw/dsh-explainer](https://github.com/wzciczw/dsh-explainer) | 0 | 2026-10-29 | 2026-10-29 | Zero-friction quick ask for DeepSeek Harness: select text in chat, Markdown/code, rendered HTML, or the right-sidebar editor and get a fast, isolated one-shot explanation. Auto-answer, rendered-HTML selection bridge, no main-session writes. |
| 355 | [x-mug/dsh-plugins](https://github.com/x-mug/dsh-plugins) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件仓库：本地文件与行号链接修复、当前会话内查找。 |
| 356 | [XBXyftx/dsh-side-chat](https://github.com/XBXyftx/dsh-side-chat) | 0 | 2026-10-29 | 2026-10-29 | Codex-style side chat for DeepSeek Harness: a temporary read-only branch of the current session in the right sidebar, destroyed when closed. |
| 357 | [XHszDHM/dsh-memory-tide](https://github.com/XHszDHM/dsh-memory-tide) | 0 | 2026-10-29 | 2026-10-29 | Tide memory for DeepSeek Harness - a lightweight long-term memory: a hot tier always in context, a cold tier that sinks, rebalanced automatically every day. |
| 358 | [xuanyang905/dsh-plugin-settings-float](https://github.com/xuanyang905/dsh-plugin-settings-float) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: draggable, edge-resizable floating settings window that keeps the chat visible |
| 359 | [xushilianzhuren/dsh-constitution-seed](https://github.com/xushilianzhuren/dsh-constitution-seed) | 0 | 2026-10-29 | 2026-10-29 | Constitution seed: inject bounded excerpts of persistent workspace charter files into every new DSH session (shared-budget head-first truncation). 工作区宪法注入器 |
| 360 | [yachio-suki/dsh-plugin-free-web](https://github.com/yachio-suki/dsh-plugin-free-web) | 0 | 2026-10-18 | 2026-10-29 | DeepSeek Harness 免费网页搜索与抓取插件：360/Bing 多引擎并行竞速 + 相关性闸门 + GitHub 镜像回退，零费用零 API Key，中文查询与外国网站(github)检索均可用 / Free multi-engine web search &amp; fetch plugin for DeepSeek Harness |
| 361 | [yeasen-z/dsh-focusing](https://github.com/yeasen-z/dsh-focusing) | 0 | 2026-10-25 | 2026-10-29 | A DeepSeek Harness plugin that started as a weekly report generator and somehow became an agent context workspace. |
| 362 | [yingchaoyi/dsh-air-sense](https://github.com/yingchaoyi/dsh-air-sense) | 0 | 2026-10-29 | 2026-10-29 | DSH 插件：给 QQ 群里的 AI 装一道「读空气」的闸——这条消息现在值不值得接，不值得就闭嘴。 |
| 363 | [yingmsky/dsh-plugin-microvm](https://github.com/yingmsky/dsh-plugin-microvm) | 0 | 2026-10-29 | 2026-10-29 | Disposable microVM sandbox tools for DeepSeek Harness agents: create, exec, fork, destroy via any E2B-compatible API (E2B, AgentENV) |
| 364 | [yixin2021/dsh-interaction-kit](https://github.com/yixin2021/dsh-interaction-kit) | 0 | 2026-10-29 | 2026-10-29 | Interaction and convenience upgrades for the DSH Web UI: session right-click menu with permanent delete, a Git branch chip under the composer, and opt-in worktrees. |
| 365 | [Yo1ick/dsh-mac-access](https://github.com/Yo1ick/dsh-mac-access) | 0 | 2026-10-29 | 2026-10-29 | Windows 访问 Mac DSH 的跨机链路管理插件：一键体检、推送登录 URL、部署 Windows 一键脚本与桌面快捷方式。 |
| 366 | [Yo1ick/dsh-stuck-reply](https://github.com/Yo1ick/dsh-stuck-reply) | 0 | 2026-10-29 | 2026-10-29 | DSH 卡住会话飞书答复代理：会话卡在提问/审批/计划时飞书通知你，回复自动喂回会话。 |
| 367 | [yonking305/arc-vista](https://github.com/yonking305/arc-vista) | 0 | 2026-10-29 | 2026-10-29 | 面向 Git 仓库的本地优先架构观测台——架构图、安全守护、业务知识图谱、复杂度与分支风险对比。 |
| 368 | [ysl289/dsh-literature-workflow](https://github.com/ysl289/dsh-literature-workflow) | 0 | 2026-10-29 | 2026-10-29 | Literature workflow for DeepSeek Harness: search, PDF to Markdown, Zotero filing, knowledge cards, learning layer. |
| 369 | [Yuanawaqwq/dsh-columbina-pet](https://github.com/Yuanawaqwq/dsh-columbina-pet) | 0 | 2026-10-29 | 2026-10-29 | Columbina 2D live desktop pet for DeepSeek Harness — 76 official voice lines in CN/JP/EN, weather reports, sticker moments, late-night whispers. |
| 370 | [yuanstarstar/dsh-game-stack](https://github.com/yuanstarstar/dsh-game-stack) | 0 | 2026-10-29 | 2026-10-29 | DSH 打游戏插件合集：游戏感知 / 视觉实体 / 游戏学习（规则+流程+闸门+知识库）/ 直播桥 / 启动器，5 个可安装 bundle 一键安装 |
| 371 | [yuexi0107/dsh-todo-timer](https://github.com/yuexi0107/dsh-todo-timer) | 0 | 2026-10-29 | 2026-10-29 | Live per-task timing for the DSH to-do panel: status counts, numbered rows, frozen completed durations, 0s for tasks that never ran, and a total from the first task start until the current list ends. |
| 372 | [yuna78/dsh-agent-tree](https://github.com/yuna78/dsh-agent-tree) | 0 | 2026-10-29 | 2026-10-29 | 一张常驻角落的迷你 agent 树：workspace → 对话 → subagent 实时状态 + 待办/定时 + 本机 claude/codex 进程 |
| 373 | [yuna78/dsh-slayer](https://github.com/yuna78/dsh-slayer) | 0 | 2026-10-29 | 2026-10-29 | SLAYER — a cyber foreman for DSH: two delegation presets with call-time tool guards (a fixed 8-seat crew, or up to 3 day-rate temps). |
| 374 | [YurinKonstantin/dsh-deepseek-peak-badge](https://github.com/YurinKonstantin/dsh-deepseek-peak-badge) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness plugin: peak-pricing badge under the composer — red during DeepSeek peak hours, yellow 30 minutes before, green off-peak. |
| 375 | [Yuuuyi/dsh-design-annotate](https://github.com/Yuuuyi/dsh-design-annotate) | 0 | 2026-10-29 | 2026-10-29 | 为 DeepSeek Harness 提供 HTML 原型标注与流程录制：点选元素加注释、按界面状态显隐、导出可分享的标注包与流程图。 |
| 376 | [Zafer-Liu/dsh-vibe-assistant-bridge](https://github.com/Zafer-Liu/dsh-vibe-assistant-bridge) | 0 | 2026-10-29 | 2026-10-29 | DeepSeek Harness bridge plugin for Vibe Assistant: shared-memory injection, MCP observation, token usage, collection triggers, recall/skill tools |
| 377 | [Zcc50/dsh-workspace-frontend](https://github.com/Zcc50/dsh-workspace-frontend) | 0 | 2026-10-28 | 2026-10-29 | Workspace frontend rebuild for DeepSeek Harness: session groups, drag assignment, sidebar polish and resize handles. |
| 378 | [ZelyStaric/dsh-council](https://github.com/ZelyStaric/dsh-council) | 0 | 2026-10-29 | 2026-10-29 | 把 DSH 会话变成群聊：指挥拆解、8 个岗位的成员各自跑在 codex/claude/deepseek/image 框架里并发干活，审校初审 + 指挥终审（会读图），过程实时可见。8 个岗位全部可改 |
| 379 | [zl0215/dsh-vediocontrol](https://github.com/zl0215/dsh-vediocontrol) | 0 | 2026-10-29 | 2026-10-29 | 使用语音控制输入，支持自定义按键 |
| 380 | [ZSX-114514/dsh-pptx-anim](https://github.com/ZSX-114514/dsh-pptx-anim) | 0 | 2026-10-29 | 2026-10-29 | 给 .pptx 批量注入真正的 PowerPoint 进入动画与切换 —— 补 python-pptx 没有动画 API 的缺口 |
| 381 | [zyqchanel-06/dsh-model-hub](https://github.com/zyqchanel-06/dsh-model-hub) | 0 | 2026-10-29 | 2026-10-29 | DSH 模型中心：双栏模型选择器 + 悬浮能力面板，改动真实生效（零构建、零依赖） |
| 382 | [zyqchanel-06/dsh-rail-x](https://github.com/zyqchanel-06/dsh-rail-x) | 0 | 2026-10-29 | 2026-10-29 | DSH 输入框附件删除按钮常显：一条 CSS + 自愈观察器，不悬停也能点掉误粘的附件 |
| 383 | [zztdandan/dsh-opencode-go-quota-settings](https://github.com/zztdandan/dsh-opencode-go-quota-settings) | 0 | 2026-10-29 | 2026-10-29 | DSH plugin: OpenCode GO plan quota in Settings (no sidebar widget), same-origin usage proxy, /opencode-go-quota command |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1644ye/pages
- 2927683690myn-rgb/dsh-sidebar-quiet
- ayuanxx-max/Jack.CaMps
- Bernardxu123/dsh-kimi-webbridge
- bloodarea/dsh-agent-team-browser
- bugtakue/ronge-adaptive-skill-archive
- CetOeil/dsh-process-guard
- elk-9527/dsh-auto-archive
- Gucciy69/dsh-bailian-voucher
- kangjiazhen/dsh-workbuddy-codex
- keepermttl/dsh-archive-viewer
- komoai2026/dsh-zpdf
- KonnectSuite/dsh-tool-images
- liujianqiao701/dsh-test-framework
- memoryovo/dsh-codex-session-deletetool
- Natte/dsh-todolist
- ocelot-D/dsh-delete-archived-session
- of1102/dsh-web-search-ark
- operatingtag/dsh-unclesam
- rentaoyan0628-collab/dsh-bili-live
- summer-521/deepseek-harness-desktop
- Tan114CN/dsh-team-autopilot
- Thatgfsj/dsh-emotion-analyzer
- Thatgfsj/dsh-phone
- wsjb114513/dsh-plugin-free-web
- xqpsec/dsh-jalibreak
- Zcc50/dsh-session-groups
