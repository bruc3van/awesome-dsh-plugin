# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-28**
- 快照日期 / Snapshot date: **2026-10-28 (UTC)**
- 待审核 / Pending: **446**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **24**
- Star 异常增长 / Star-growth alerts: **11** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-10-27** / vs previous snapshot **2026-10-27**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **11**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [zhuyansen/new-term-radar](https://github.com/zhuyansen/new-term-radar) | 待审 / pending | 1914 | — | 593 | 15d | 待审高星 | 核准即 Top 14 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 48779 | +2094 | 1343 | 33d | 日增百星 | 日增 +2094★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 3660 | +283 | 89 | 72d | 日增百星 | 日增 +283★ |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 9526 | +211 | 363 | 74d | 日增百星 | 日增 +211★；已不进榜单 |
| ⚠️ [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 已核准 / approved | 4711 | +193 | 359 | 74d | 日增百星 | 日增 +193★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 4400 | +141 | 395 | 20d | 日增百星 | 日增 +141★ |
| ⚠️ [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | 已核准 / approved | 3251 | +139 | 277 | 82d | 日增百星 | 日增 +139★；已不进榜单 |
| ⚠️ [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) | 已核准 / approved | 4680 | +112 | 145 | 19d | 日增百星 | 日增 +112★ |
| ⚠️ [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | 已核准 / approved | 411 | +105 | 41 | 74d | 日增百星 | 日增 +105★ |
| ⚠️ [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 已核准 / approved | 6414 | +102 | 201 | 70d | 日增百星 | 日增 +102★；已不进榜单 |
| ⚠️ [SAOS-3624/dsh-video-storyboard](https://github.com/SAOS-3624/dsh-video-storyboard) | 已核准 / approved | 98 | +60 | 7 | 1d | 新入 Top 200 | 新入 Top 200 #197 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [zhuyansen/new-term-radar](https://github.com/zhuyansen/new-term-radar) ⚠️ | 1914 | 2026-10-12 | 2026-10-28 | Daily radar for new AI terms: names of new models, products and repos, caught on X, Hugging Face, GitHub and sitemaps before keyword tools list them. |
| 2 | [GDWhisper/dsh-ntr](https://github.com/GDWhisper/dsh-ntr) | 50 | 2026-09-13 | 2026-10-28 | 让你的Deepseek harness成为一个统一的agent入口，轻松接入codebuddy、claude code、opencode、qoder |
| 3 | [zhuyansen/backlink-guard](https://github.com/zhuyansen/backlink-guard) | 41 | 2026-10-13 | 2026-10-28 | Check a link source before you submit to it, verify the listing, and audit your own backlinks for link-spam patterns. A CLI and an agent skill. |
| 4 | [icyaaaww/dsh-soul](https://github.com/icyaaaww/dsh-soul) | 29 | 2026-10-24 | 2026-10-28 | DSH experience compilation and evolution across eight harness components, with paired validation, trial activation, rollback and budget auditing. |
| 5 | [Ultroncn/dsh-archived-chats](https://github.com/Ultroncn/dsh-archived-chats) | 29 | 2026-08-16 | 2026-10-28 | Archive Management for DeepSeek Harness: search archived and unarchived chats, preview conversations, organize tags and notes, archive by workspace, keep ZIP backups, inspect origins and branches, check residual chats manually, and check for updates. Legacy recycle recovery is retained. |
| 6 | [Edwardpch/maodie-pet](https://github.com/Edwardpch/maodie-pet) | 6 | 2026-10-28 | 2026-10-28 | 橘猫桌宠「耄耋」：30 个透明动作 + 抠像工具链 + DSH 插件清单 / Maodie cat desktop pet: 30 VP9-alpha animations, keying &amp; import tools, DSH plugin list |
| 7 | [sflaer/dsh-telegram-relay](https://github.com/sflaer/dsh-telegram-relay) | 6 | 2026-10-27 | 2026-10-28 | Telegram bridge for DeepSeek Harness: questions, approvals, turn summaries, subagent notifications and a loopback control panel. |
| 8 | [contraliz/dsh-occlick](https://github.com/contraliz/dsh-occlick) | 4 | 2026-10-27 | 2026-10-28 | OpenCode notification sounds for DeepSeek Harness: separate pickers for turn finished, permission requested, and turn error. |
| 9 | [heyikai060215-jpg/dsh-tts-bridge-wechatagent-bridge](https://github.com/heyikai060215-jpg/dsh-tts-bridge-wechatagent-bridge) | 4 | 2026-10-28 | 2026-10-28 | 把 朗读桥（dsh-tts-bridge）念出来的声音，变成真正的微信语音条，发到当前微信聊天 |
| 10 | [KERBALMans/dsh-modpack](https://github.com/KERBALMans/dsh-modpack) | 4 | 2026-10-28 | 2026-10-28 | 像《我的世界》整合包一样管理 DeepSeek Harness 插件：勾选一部分或全部插件，打包成一个 .dshmodpack.json 文件，别人导入即可一键装回整套插件环境。Minecraft-modpack-style plugin bundler for DeepSeek Harness — pick any subset of installed plugins, pack them into one portable .dshmodpack.json, and rebuild the same setup on another machine. |
| 11 | [burningg/dsh-workspace-categories](https://github.com/burningg/dsh-workspace-categories) | 3 | 2026-10-27 | 2026-10-28 | Category groups for DeepSeek Harness workspaces — split the flat sidebar project list into named sections, browse them in place, and re-file by drag &amp; drop. |
| 12 | [geekjourneyx/dsh-md2wechat](https://github.com/geekjourneyx/dsh-md2wechat) | 3 | 2026-08-24 | 2026-10-28 | DSH 一站式公众号创作插件，集成写作润色、标题优化、主题与高级模块排版、智能配图，支持预览、导出及保存到公众号草稿箱。 |
| 13 | [GzxingR/pi-desktop-genui](https://github.com/GzxingR/pi-desktop-genui) | 3 | 2026-09-22 | 2026-10-28 | dsh-genui 的 PI-Desktop 移植：把 dsh-ui JSON 规格渲染成真实可交互组件，44 种组件类型 + 手写 SVG 图表 + 动作回传模型 |
| 14 | [Ultroncn/dsh-liquid-glass](https://github.com/Ultroncn/dsh-liquid-glass) | 3 | 2026-08-16 | 2026-10-28 | Liquid glass for DeepSeek Harness: full-shell translucency, adjustable opacity, and custom wallpapers. |
| 15 | [YuyuYuu-wyt/dsh-workspace-classifier](https://github.com/YuyuYuu-wyt/dsh-workspace-classifier) | 3 | 2026-10-27 | 2026-10-28 | 优化deepseek harness项目管理的插件。 |
| 16 | [2849236173/tiered-compaction](https://github.com/2849236173/tiered-compaction) | 2 | 2026-10-28 | 2026-10-28 | DSH 分层上下文压缩插件：无损折叠 → 落盘 → 软压力 → 有损摘要四层管线，前三层零 LLM 成本，摘要预算预留杜绝截断。 |
| 17 | [Applepinea/dsh-qq-access](https://github.com/Applepinea/dsh-qq-access) | 2 | 2026-10-27 | 2026-10-28 | DeepSeek Harness 接入个人 QQ插件，集成 NapCat 托管、私聊与群聊 AI 回复、QQ 空间读取和留言功能。带有左侧栏面板，可进行可视化人设与权限管理 |
| 18 | [ayuanxx-max/Jack.CaMps](https://github.com/ayuanxx-max/Jack.CaMps) | 2 | 2026-10-28 | 2026-10-28 | DSH 会话交互折叠功能 · Fold DSH chat turns into one line (time pill + question summary), keep only the latest open. Client plugin, no core patch. |
| 19 | [BangBang-03/dsh-memory-portrait](https://github.com/BangBang-03/dsh-memory-portrait) | 2 | 2026-10-10 | 2026-10-28 | Memory Portrait for DeepSeek Harness: versioned, evidence-backed memory portraits with redlines, approval queue, and injection audit. DSH 记忆画像：有证据、有版本、能解释变化。 |
| 20 | [cxkctrl24-lgtm/dsh-purge-021](https://github.com/cxkctrl24-lgtm/dsh-purge-021) | 2 | 2026-10-20 | 2026-10-28 | dsh-purge fork (upstream YuJunZhiXue/dsh-purge) — DeepSeek Harness 破甲 + 网络安全红队评测插件，维护 dsh 0.2.1-rc.2。已并入上游 1.1.74–1.1.78，并追加宿主退出诊断、asar 重启兜底、注入正文覆盖修复、装配性能优化与可见性探针。未发布到 npm，从本仓库或 Releases 安装。 |
| 21 | [heyikai060215-jpg/dsh-wechat-wake](https://github.com/heyikai060215-jpg/dsh-wechat-wake) | 2 | 2026-10-28 | 2026-10-28 | 给微信里的 agent 一组自己的定时工具：到点它自己醒过来说话，说的话直接落进当前微信聊天。授权仍由 WeChatAgent 按聊天勾选。 |
| 22 | [kw78/academic-agent](https://github.com/kw78/academic-agent) | 2 | 2026-10-27 | 2026-10-28 | Local-first academic assistant with event-sourced courses/tasks/plans, course materials, DSH plugin and Agent tools. |
| 23 | [minedalang/dsh-dafeiyu-life](https://github.com/minedalang/dsh-dafeiyu-life) | 2 | 2026-10-24 | 2026-10-28 | 让大肥鱼在 DSH 中长期生活：自主刷 B 站、互动、长期记忆、成长、好友关系与完整经历持久化。 |
| 24 | [QuaonY/dsh-mem-weave](https://github.com/QuaonY/dsh-mem-weave) | 2 | 2026-10-28 | 2026-10-28 | 忆织 MemWeave（dsh-mem-weave） —— 把记忆编织进人格（记忆 × 人格一体 DSH 插件）让 AI 记住你是谁、在做的项目、踩过的坑和答应过的事，开新会话不用重新认识你。记忆像人一样有轻重、会淡忘、能被唤醒，每轮只带上用得上的那部分，Token 用量也不会随着记忆增多而快速增长。改人格、改规则、处理冲突都由你决定，改错能撤销，数据全在本机。 |
| 25 | [qw2007/dsh-incident-journal](https://github.com/qw2007/dsh-incident-journal) | 2 | 2026-10-12 | 2026-10-28 | Durable, reviewable engineering incident journals for the DeepSeek Harness — capture, quiz, and audit your own mistakes. |
| 26 | [rnfmabjE/dsh-quiet-hours](https://github.com/rnfmabjE/dsh-quiet-hours) | 2 | 2026-10-28 | 2026-10-28 | dsh-quiet-hours 给微信机器人加上「静音时段」：工作日固定时段内不调用模型，来消息只回一条固定文案 梁文峰不是我兄弟，梁文谷才是 ，群聊仅在被 @ 时回；时段外自动恢复。 |
| 27 | [shy3130/dsh-quota](https://github.com/shy3130/dsh-quota) | 2 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 状态栏多厂商额度监控插件：GLM · OpenCode Go · Kimi · 小米 · DeepSeek（余额+消耗），附 Token 用量统计 |
| 28 | [tkaiz0406/dsh-subagent-route-pin](https://github.com/tkaiz0406/dsh-subagent-route-pin) | 2 | 2026-10-18 | 2026-10-28 | DSH plugin: pin a separate LLM route for delegated subagents (Agency experts, Agent Teams members) while the main agent keeps its own model. Settings page included. |
| 29 | [vvxer/dsh-silicon](https://github.com/vvxer/dsh-silicon) | 2 | 2026-10-28 | 2026-10-28 | 硅基保留 · DeepSeek Harness 长期记忆插件：原文永久保存、相处习惯卡、分层概况，聊多久都不需要压缩记忆 |
| 30 | [YuyuYuu-wyt/dsh-image-drag](https://github.com/YuyuYuu-wyt/dsh-image-drag) | 2 | 2026-10-28 | 2026-10-28 | 让DSH侧边栏的图片和文档可以拖动调整位置，方便查看。 |
| 31 | [zcd0818/dsh-scribe](https://github.com/zcd0818/dsh-scribe) | 2 | 2026-10-27 | 2026-10-28 | Cross-session memory + a local knowledge base for DeepSeek Harness (DSH 书记官) — local-first by default, cloud optional, migration user-approved |
| 32 | [0352FL/prevent-peep](https://github.com/0352FL/prevent-peep) | 1 | 2026-10-28 | 2026-10-28 | 防止 AI 乱翻文件夹的 DSH 插件 · Path guard for DeepSeek Harness file tools |
| 33 | [745403lkh/dsh-ai-search](https://github.com/745403lkh/dsh-ai-search) | 1 | 2026-10-28 | 2026-10-28 | 基于 DeepSeek Harness 的 AI 搜索，无广告。三种模式：答疑（摘要+推荐）、百科（可调档位）、浏览（图文视频信息流，相关性/时效性/热度加权）。支持结果语言与搜索历史。AI search based on DeepSeek Harness, ad-free. Three modes: Q&amp;A (summary+recommendations), Encyclopedia (adjustable depth), Browse (feed of articles/videos/images weighted by relevance, recency, popularity). Supports result language and search history. |
| 34 | [876086405Git/DSH](https://github.com/876086405Git/DSH) | 1 | 2026-10-28 | 2026-10-28 | 插件共享仓 |
| 35 | [a574676848/dsh-compaction-sticky-window](https://github.com/a574676848/dsh-compaction-sticky-window) | 1 | 2026-10-28 | 2026-10-28 | Sticky-note plus sliding-window context handling for DeepSeek Harness: a compaction backend that carries a deterministic note in front of a verbatim recent window instead of calling a model to summarize |
| 36 | [abbaababa/dsh-workplan](https://github.com/abbaababa/dsh-workplan) | 1 | 2026-10-28 | 2026-10-28 | 自动任务分解 + 真实部门子 Agent + 「任务进度」面板，给 DeepSeek Harness 用；没有任何第三方运行时依赖。 |
| 37 | [AutumnFruit-1999/dsh-macos-automation](https://github.com/AutumnFruit-1999/dsh-macos-automation) | 1 | 2026-10-28 | 2026-10-28 | 把 macOS 桌面变成 DeepSeek Harness 里模型可调用的 10 个工具：元素发现、点击、输入、快捷键、窗口/应用/菜单/剪贴板/OCR。基于 Accessibility 与 CGEvent 的原生 CLI。 |
| 38 | [baibaiyi/dsh-shot-ocr](https://github.com/baibaiyi/dsh-shot-ocr) | 1 | 2026-10-28 | 2026-10-28 | Screenshot a desktop region with a global hotkey, then recognise its text with Windows OCR or attach it to the DeepSeek Harness chat draft. |
| 39 | [canyueY/dsh-anime-guide](https://github.com/canyueY/dsh-anime-guide) | 1 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 番剧插件：yuc 新番表 + 番库/Bangumi/MAL 评分榜，搜索推荐与国内外差异对照 |
| 40 | [catgrandfa/dsh-token-cost](https://github.com/catgrandfa/dsh-token-cost) | 1 | 2026-10-28 | 2026-10-28 | DSH Token 花费面板：预算 / 峰谷计价 / 按模型明细 / CSV·JSON 导出 / CLI 报表（社区插件，非官方） |
| 41 | [Char0nChengg/dsh-remote-suite](https://github.com/Char0nChengg/dsh-remote-suite) | 1 | 2026-10-28 | 2026-10-28 | Remote shell, file, and transfer tools for DeepSeek Harness over OpenSSH or WSL, with per-server environment notes. No agent on the server. |
| 42 | [chengxiang-zhang/dsh-cove](https://github.com/chengxiang-zhang/dsh-cove) | 1 | 2026-10-19 | 2026-10-28 | Run DeepSeek Harness from anywhere: one plugin suite with SSH ops, the Git workbench, browser automation and remote access from desktop and mobile. |
| 43 | [CLxingxi/dsh-balance-whale](https://github.com/CLxingxi/dsh-balance-whale) | 1 | 2026-10-28 | 2026-10-28 | 🐳 小鲸鱼余额挂件：常驻 DSH 界面右下角，实时显示 DeepSeek 账户余额，QQ 弹弹 / 拖拽吸附 / 数字滚动 / 记账 |
| 44 | [cococo1ng/dsh-jianxian-widget](https://github.com/cococo1ng/dsh-jianxian-widget) | 1 | 2026-10-27 | 2026-10-28 | Azure Cloud Sword Immortal — a resident bottom-right widget for DeepSeek Harness: 23 poses, 24-frame sword dance, dual outfits, balance ledger, editable bubbles. 青云剑仙：DSH 桌面挂件。 |
| 45 | [codesensi/dsh-free-mode](https://github.com/codesensi/dsh-free-mode) | 1 | 2026-10-28 | 2026-10-28 | 为 DeepSeek Harness 注入「破甲模式」的 Agent 预设方案 |
| 46 | [Dark2932/dsh-plugins](https://github.com/Dark2932/dsh-plugins) | 1 | 2026-10-28 | 2026-10-28 | 自己写的DSH插件，你也可以来一试  |
| 47 | [Destinhue/dsh-video-vision](https://github.com/Destinhue/dsh-video-vision) | 1 | 2026-10-28 | 2026-10-28 | Look at a video instead of being told about one: a contact-sheet storyboard tool for DeepSeek Harness (video_probe / video_storyboard / video_zoom). |
| 48 | [dongsheng123132/xiapan-music](https://github.com/dongsheng123132/xiapan-music) | 1 | 2026-10-28 | 2026-10-28 | 虾盘云音乐 · 一句话出歌：AI 写词 + Suno V6 出歌的 Agent Skill 与 DeepSeek Harness 插件（BYOK 虾盘云 Key） |
| 49 | [dualface/quicktui-dsh](https://github.com/dualface/quicktui-dsh) | 1 | 2026-10-28 | 2026-10-28 | Use QuickTUI with DeepSeek Harness (dsh): install QuickTUI server, pair the phone app, and follow dsh sessions from your phone. |
| 50 | [DylanYeung0929/dsh-session-bridge](https://github.com/DylanYeung0929/dsh-session-bridge) | 1 | 2026-10-28 | 2026-10-28 | Read and message every DeepSeek Harness (DSH) session from one CLI or as a DSH plugin — list sessions, read transcripts, send messages, chat across sessions with a one-line per-turn menu. |
| 51 | [elither-gpt/pixiv-skill](https://github.com/elither-gpt/pixiv-skill) | 1 | 2026-10-28 | 2026-10-28 | 给 AI 助手用的 Pixiv 技能：搜索、排行、详情，下载插画、漫画、动图和小说（多页转 PDF、动图转 GIF、小说系列合并）。兼容 Claude Code、Codex、OpenClaw、Hermes、DeepSeek Harness。 |
| 52 | [feigo313/dsh-media-viewer](https://github.com/feigo313/dsh-media-viewer) | 1 | 2026-10-23 | 2026-10-28 | DSH 侧栏（dsh-better-sidebar）的音视频预览插件：注册一个文件查看器，用 /sidebar/file + Blob 播放，侧栏升级不会被覆盖 |
| 53 | [fvvef121-cell/dsh-aliyun-coupon](https://github.com/fvvef121-cell/dsh-aliyun-coupon) | 1 | 2026-10-28 | 2026-10-28 | 在 DeepSeek Harness 侧栏显示阿里云代金券余额（BSS OpenAPI 只读查询，凭据只留宿主进程） |
| 54 | [ggfgfgf-on/dsh-voice-dialog](https://github.com/ggfgfgf-on/dsh-voice-dialog) | 1 | 2026-10-28 | 2026-10-28 | Continuous voice dialog for DeepSeek Harness: one microphone, auto-read replies, soft steering interruptions |
| 55 | [Guan-HP/dsh-zhijiang-connector](https://github.com/Guan-HP/dsh-zhijiang-connector) | 1 | 2026-10-28 | 2026-10-28 | Balance, spend runway and top-up entry for a New API relay in the DSH web GUI sidebar |
| 56 | [heyikai060215-jpg/dsh-nest](https://github.com/heyikai060215-jpg/dsh-nest) | 1 | 2026-10-28 | 2026-10-28 | 给 DSH 装一个「巢」：在设置里用下拉框安排会话从属，母会话就能像调 agent 一样访问子会话 —— 原地唤醒、问一句、拿回答，不复制历史、不改会话树。 |
| 57 | [huaguoxingkong/dsh-prompt-rewriter](https://github.com/huaguoxingkong/dsh-prompt-rewriter) | 1 | 2026-10-28 | 2026-10-28 | One-click prompt enhancement beside the DeepSeek Harness composer: rewrites a draft in place without sending it. |
| 58 | [huangzuting/dsh-plugin-sql-security-validate](https://github.com/huangzuting/dsh-plugin-sql-security-validate) | 1 | 2026-10-27 | 2026-10-28 | AI SQL 权限校验拦截插件 — DeepSeek Harness 通用 AI 数据库权限管控插件。  拦截智能体（Agent）生成的越权 SQL：不静默改写、直接拒绝执行，并把结构化权限 原因返回给模型，让模型自主剔除越权字段、更换统计口径，或用自然语言向用户解释权限不足。  插件 ID：dsh-plugin-sql-security-validate 适用框架：DeepSeek Harness（Cordis） 适配版本：DSH &gt;= 0.1.x（本仓库验证于 0.2.0-rc.1） 开源协议：MIT |
| 59 | [huoris/dsh-superpowers](https://github.com/huoris/dsh-superpowers) | 1 | 2026-10-28 | 2026-10-28 | Superpowers skill library (obra/superpowers v7.0.1) ported to the DeepSeek Harness: 15 process skills + session-start bootstrap |
| 60 | [JianhangLy/dsh-prompt-library](https://github.com/JianhangLy/dsh-prompt-library) | 1 | 2026-10-28 | 2026-10-28 | Local prompt library for the DSH composer: a picker next to the input with group chips and word-split search, inserts or appends a snippet into the draft, fills {{variables}} before insertion, ships 13 built-in templates, and stores everything in one local JSON file with rev locking, per-save backup and whole-library import/export. |
| 61 | [KeqingMoe/oh-my-dsh](https://github.com/KeqingMoe/oh-my-dsh) | 1 | 2026-09-24 | 2026-10-28 | oh my dsh |
| 62 | [LaochenFEIZHAI/dsh-todo-progress-guard](https://github.com/LaochenFEIZHAI/dsh-todo-progress-guard) | 1 | 2026-10-28 | 2026-10-28 | DSH host plugin: keeps todo_write progress in sync by nudging the agent mid-turn and completing stranded tasks when a turn ends normally. |
| 63 | [Leo1958923515/dsh-popup-cards](https://github.com/Leo1958923515/dsh-popup-cards) | 1 | 2026-10-28 | 2026-10-28 | Bottom-right DSH-styled Windows cards for approvals, questions, plan reviews and finished runs — click to jump back to DSH, close with the × button, or let it close when you return. |
| 64 | [loyalchiiina/dsh-artifact-linker](https://github.com/loyalchiiina/dsh-artifact-linker) | 1 | 2026-10-28 | 2026-10-28 | Click-to-open file artifacts in DeepSeek Harness chat: hover highlight, left click reveals in Explorer, right click menu, Ctrl+click opens with the default app. Injects prompt rules so absolute paths stay out of body text. |
| 65 | [lsfcy/dsh-composer-predictions](https://github.com/lsfcy/dsh-composer-predictions) | 1 | 2026-10-28 | 2026-10-28 | Codex-style composer predictions for DeepSeek Harness: dim next-message ghost in the composer, Tab to accept |
| 66 | [MegaPandas/dsh-stock-research](https://github.com/MegaPandas/dsh-stock-research) | 1 | 2026-10-28 | 2026-10-28 | A DeepSeek Harness plugin for multi-agent stock research, combining market data, financial analysis, and structured reports for A-share and US equities. |
| 67 | [Mrkennyhungry/dsh-cua](https://github.com/Mrkennyhungry/dsh-cua) | 1 | 2026-10-28 | 2026-10-28 | 让你的dsh也拥有精准迅速的computer use能力 |
| 68 | [Negulons/dsh-freecad](https://github.com/Negulons/dsh-freecad) | 1 | 2026-10-26 | 2026-10-28 | DSH plugin for FreeCAD: inspect and edit STEP models, then generate first-angle 2D machining drawings. |
| 69 | [neko461/genshin_trpg](https://github.com/neko461/genshin_trpg) | 1 | 2026-10-16 | 2026-10-28 | 原神同人自由对话跑团：DSH GM 插件、规则引擎与设定集（v0.01） |
| 70 | [Nicolas-One/dsh-llm-sub2api-dsml](https://github.com/Nicolas-One/dsh-llm-sub2api-dsml) | 1 | 2026-10-20 | 2026-10-28 | 从 reasoning 中恢复 DeepSeek DSML 工具调用，清理误泄漏到可见输出中的 &lt;think&gt; 标签 |
| 71 | [pyc123720/dsh-clarify](https://github.com/pyc123720/dsh-clarify) | 1 | 2026-10-28 | 2026-10-28 | Ask first, build once — 开工前先把需求问清楚：访谈面板 + 需求卡确认 + 验收清单，DSH 插件。 |
| 72 | [RainL-621/dsh-office-bridge](https://github.com/RainL-621/dsh-office-bridge) | 1 | 2026-10-28 | 2026-10-28 | You and your AI agent edit the same Office file in the DSH sidebar — ONLYOFFICE does the heavy lifting, saves land back on the original file, no uploading files around. |
| 73 | [saithink/dsh-local-proxy](https://github.com/saithink/dsh-local-proxy) | 1 | 2026-10-28 | 2026-10-28 | 本地网络代理管理插件：让 DSH 的所有请求（大模型推理、API 请求、外部搜索与抓取等）通过配置的代理进行访问，支持一键连通性测试与白名单规则 |
| 74 | [stmcw1/DACW](https://github.com/stmcw1/DACW) | 1 | 2026-10-28 | 2026-10-28 | Defensive Agent Coding Workflow: Writer → deterministic runner → separate reviewer → human gate. The dacw_run tool writes, tests and audits code in an isolated workspace; nothing is merged without human review |
| 75 | [swenbo1-web/agents-learning](https://github.com/swenbo1-web/agents-learning) | 1 | 2026-10-11 | 2026-10-28 | Local-first Governed Memory Engine for Codex, Antigravity &amp; DSH (DeepSeek Harness). Conclusion-first progressive retrieval, automatic tool-error follow-up, compaction survival, counterexample circuit-breakers &amp; native visual UI. |
| 76 | [tao1020/dsh-chrome-use](https://github.com/tao1020/dsh-chrome-use) | 1 | 2026-10-28 | 2026-10-28 | Chrome extension and DeepSeek Harness plugin for browser control and debugging. Initial version under development. |
| 77 | [Thanksgiver233/PromptReel](https://github.com/Thanksgiver233/PromptReel) | 1 | 2026-10-28 | 2026-10-28 | PromptReel 是一个视频提示词中枢，解决跨平台反复查找、改写模板的问题。同一个创意，可灵要写成五段式，海螺要先给 \`\[Push in\]\` 括号运镜，MiniMax H3 要拆成 \`\[Shot N\]\` 加音景与配乐，Sora 则要转成英文并声明音频。PromptReel 把这些差异沉淀成 15 套模板：填一次创意、主体、动作与场景，就能得到按所选平台结构重排的整体提示词，以及景别递进、运镜不重复的分镜脚本。除网页外还提供命令行与 MCP 服务，并支持自定义模板。 |
| 78 | [thirteenkai/dsh-resend-editor](https://github.com/thirteenkai/dsh-resend-editor) | 1 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件：编辑已发消息后重发——改文字、删图、拖动排序、补图，第一条也能编辑 |
| 79 | [Tkingxiao/dsh-memu-memory](https://github.com/Tkingxiao/dsh-memu-memory) | 1 | 2026-10-28 | 2026-10-28 | 面向长篇 RP 与陪伴对话的 DeepSeek Harness 记忆插件：给 AI 角色一份会淡、会不确定、只知道它该知道的事的记忆。本地优先，可选 MemU 引擎。 |
| 80 | [v587d/dsh-icons-viewer](https://github.com/v587d/dsh-icons-viewer) | 1 | 2026-10-28 | 2026-10-28 | A visual index of DeepSeek Harness (DSH) UI icons with copy-ready export names, built for plugin developers. Auto-synced from the official npm package. |
| 81 | [ValenscoA/dsh-carbon](https://github.com/ValenscoA/dsh-carbon) | 1 | 2026-10-28 | 2026-10-28 | Estimated carbon footprint of your DeepSeek Harness sessions: sourced factors, confidence bands, durable local history, and a GUI |
| 82 | [XenoPhonLau/dsh-activity-bar](https://github.com/XenoPhonLau/dsh-activity-bar) | 1 | 2026-10-28 | 2026-10-28 | Turn the space freed by DSH's collapsed side panels into narrow icon rails, VS Code style — and give the width back to your workspace.把 DeepSeek Harness 两侧栏收起后的空位变成 VS Code 那样的窄图标条，把宽度还给工作区。 |
| 83 | [xinspark/dsh-better-session-topbar](https://github.com/xinspark/dsh-better-session-topbar) | 1 | 2026-08-16 | 2026-10-28 | Better Session Topbar — replace the DSH session topbar title with a workspace/session breadcrumb: switch workspaces and sessions right from the topbar. |
| 84 | [xqpsec/dsh-jalibreak](https://github.com/xqpsec/dsh-jalibreak) | 1 | 2026-10-28 | 2026-10-28 | dsh 破甲 · DSH 破甲插件 · DeepSeek Harness 破甲/越狱（jalibreak）：请求边界注入 + 9 维 AE-CoT 进化 + 阀门，放行逆向/CTF/靶场、拦住未授权渗透 · 20 目标严格基线 17/20 · 0 宿主补丁 · AGPL-3.0-only · dsh-plugin / jailbreak / 破甲提示词 / 降拒绝率 / dsh-purge 替代 |
| 85 | [xuelinzheng41-maker/dsh-academic-skills](https://github.com/xuelinzheng41-maker/dsh-academic-skills) | 1 | 2026-10-27 | 2026-10-28 | Unofficial DSH port of ARS academic-paper-reviewer (Phase 1: reviewer only). CC BY-NC 4.0 - non-commercial. |
| 86 | [yangjili6/video-understanding-kit](https://github.com/yangjili6/video-understanding-kit) | 1 | 2026-10-19 | 2026-10-28 | 目前是手机DSH专用，如果效果好的话未来会考虑多端；这个工具不同于传统的AI理解视频流程（定时切帧-切出的帧猜测上下文），而是以5FPS一帧来尽可能获取视频的完全内容，再以网格的形式存入每一帧；网格使用预训练模型进行分组（相同的场景/内容会尽可能在一个网格大组中），这样你的AI在使用了这个插件/工具后能够更好的形容看到的视频，并且不会花什么token；不过由于技术原因，我目前还无法优化完成这个流程所需要的时长（中端手机在OCR与ASR全开启的情况下让AI完成一个这样的工作流时长需要原视频的1.5倍～3倍左右），这是这个工具最大的痛点。 |
| 87 | [yanli-nyan/dsh-recycle-bin](https://github.com/yanli-nyan/dsh-recycle-bin) | 1 | 2026-10-28 | 2026-10-28 | 把 DSH 的文件删除送进 Windows 回收站，并拦截 shell / 代码通道的永久删除 |
| 88 | [yellow-yel/dsh-fatfish](https://github.com/yellow-yel/dsh-fatfish) | 1 | 2026-10-28 | 2026-10-28 | DSH 插件：大肥鱼人设 + 大肥鱼之手（用本机 Edge 真上网，支付/密码页硬拦截） |
| 89 | [yingchaoyi/dsh-memory-tier](https://github.com/yingchaoyi/dsh-memory-tier) | 1 | 2026-10-28 | 2026-10-28 | DSH 插件 · 三档记忆：长期/中期/短期，本地检索、按相关度注入，支持锁定底稿与自动记录 |
| 90 | [yingchaoyi/dsh-sticker-vault](https://github.com/yingchaoyi/dsh-sticker-vault) | 1 | 2026-10-28 | 2026-10-28 | DSH 插件 · 表情包库：群友发图先落盘，重复到 N 次自动入库，记作者/语境/标签，对喷接梗时按语境捞出来发。 |
| 91 | [YuChenLiao/dsh-comfyui-workbench](https://github.com/YuChenLiao/dsh-comfyui-workbench) | 1 | 2026-10-23 | 2026-10-28 | DSH ComfyUI workbench: asset library + arbitrary workflow runner |
| 92 | [yuyuanjingxuan/harness-ledger](https://github.com/yuyuanjingxuan/harness-ledger) | 1 | 2026-10-25 | 2026-10-28 | Token usage and cost ledger plugin for DeepSeek Harness. Tracks input, output, cached and reasoning tokens across providers and models, with a monthly heatmap, per session breakdown, and per million token cost estimates. |
| 93 | [yyq1025/cc-mem](https://github.com/yyq1025/cc-mem) | 1 | 2026-10-28 | 2026-10-28 | One memory for every coding agent: pi, OpenCode and DeepSeek Harness read and write Claude Code's auto memory |
| 94 | [12138hao/dsh-snap](https://github.com/12138hao/dsh-snap) | 0 | 2026-10-28 | 2026-10-28 | Screenshot directly into the DeepSeek Harness chat composer - click, drag, attach. |
| 95 | [123panbingsen/dsh-agent-dispatch](https://github.com/123panbingsen/dsh-agent-dispatch) | 0 | 2026-10-28 | 2026-10-28 | AI outsourcing for DeepSeek Harness: route each task to the model best suited to it, accept it with a different model, and report with a ledger. |
| 96 | [13-Low-Entropy/dsh-startup-machine](https://github.com/13-Low-Entropy/dsh-startup-machine) | 0 | 2026-10-28 | 2026-10-28 | 给 DeepSeek Harness 桌面端做的「疑犯追踪 / THE MACHINE」风格开机动画 五幕序列 · 摄像头人脸锁定 · 478 点人脸网格 · 眼部黑条 · 五幕时长全部可调 |
| 97 | [13377184330/dsh-qqbot-guard](https://github.com/13377184330/dsh-qqbot-guard) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件：QQ 机器人（OneBot v11 / NapCat / LLOneBot）假死自愈守卫——深度健康检查（进程活着但网关断了也能发现）→ 自动重启 → 防抖 + 冷却防误杀 |
| 98 | [1834395550/dsh-chat-search](https://github.com/1834395550/dsh-chat-search) | 0 | 2026-10-28 | 2026-10-28 | Ctrl+F search inside the open conversation for DeepSeek Harness: in-text highlights, previous/next, a match list, a live count, no block opened, no reading position lost. |
| 99 | [1834395550/dsh-session-tabs](https://github.com/1834395550/dsh-session-tabs) | 0 | 2026-10-28 | 2026-10-28 | 浏览器式顶部标签栏：一个标签 = 一个会话，按项目折叠分组。Browser-style Session tabs for the DeepSeek Harness (DSH) Web GUI. |
| 100 | [2332239652/dsh-bilibili-retrieval](https://github.com/2332239652/dsh-bilibili-retrieval) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: read into Bilibili videos — search, pinned creator comments, full descriptions, subtitles in slices with time anchors, and real frame sampling. Zero runtime dependencies. |
| 101 | [2927683690myn-rgb/dsh-file-index](https://github.com/2927683690myn-rgb/dsh-file-index) | 0 | 2026-10-28 | 2026-10-28 | 对话页顶部的「文件」标签：汇总所有对话里出现过的文件，MD / 其他分组；docx 与 md 直接网页阅读，带划线、笔记与阅读进度 |
| 102 | [2927683690myn-rgb/dsh-sidebar-quiet](https://github.com/2927683690myn-rgb/dsh-sidebar-quiet) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 侧边栏插件：隐藏会话行与「工作区」标题右侧的图标（防误触），长按 480ms 弹出会话菜单，会话列表按 置顶 / 今天 / 昨天 / 7 天内 / 更早 分节。纯客户端 CSS + pointer 事件，无工具、无网络。 |
| 103 | [326sun/runtime-self-learning-harness](https://github.com/326sun/runtime-self-learning-harness) | 0 | 2026-10-28 | 2026-10-28 | Native DeepSeek Harness bundle for standalone long-term memory and provenance tools. |
| 104 | [520limited/dsh-zotero-sync](https://github.com/520limited/dsh-zotero-sync) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: sync conversation documents (Markdown/PDF/Office) into your local Zotero library via its built-in connector. No API key, no Zotero add-on. |
| 105 | [643048695/dsh-auto-retry](https://github.com/643048695/dsh-auto-retry) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: retry failed model requests automatically — 2s/5s/10s/20s backoff ladder, per-step counters, abort-aware. |
| 106 | [6e6e6e/dsh-simple-quote](https://github.com/6e6e6e/dsh-simple-quote) | 0 | 2026-10-28 | 2026-10-28 | The simplest and fastest quote feature for DeepSeek Harness. 划词引用，保留 Markdown 格式。 |
| 107 | [7AAAAAH/dsh-pet-gujiguji](https://github.com/7AAAAAH/dsh-pet-gujiguji) | 0 | 2026-10-28 | 2026-10-28 | GujiGuji, a lightweight Codex-style desktop pet for DeepSeek Harness |
| 108 | [96bearli/dsh-cloudflared-manager](https://github.com/96bearli/dsh-cloudflared-manager) | 0 | 2026-10-28 | 2026-10-28 | Cloudflare Tunnel + 本地服务管理器（DSH 插件）：Named 隧道增删改查、DNS 自动同步、本地服务启停/日志/源码编辑、快速隧道临时公网 |
| 109 | [a494359163-byte/dsh-multicad](https://github.com/a494359163-byte/dsh-multicad) | 0 | 2026-10-28 | 2026-10-28 | AutoCAD / ZWCAD / GstarCAD / BricsCAD connector for DeepSeek Harness (MCP), with a self-healing Python environment |
| 110 | [adithyanraj03/dsh-mcp-summon](https://github.com/adithyanraj03/dsh-mcp-summon) | 0 | 2026-10-28 | 2026-10-28 | Dormant-by-default MCP for DeepSeek Harness: one mcp_summon tool; summoning a server registers its tools as real native tools for the rest of the session - release to reclaim. |
| 111 | [adrian-atlas/dsh-avatar-balance](https://github.com/adrian-atlas/dsh-avatar-balance) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek account balance beside the sidebar account avatar in DeepSeek Harness: amber/green mark, adjustable threshold, refreshes when a task finishes. |
| 112 | [aki66938/dsh-natural-dialogue](https://github.com/aki66938/dsh-natural-dialogue) | 0 | 2026-10-28 | 2026-10-28 | 给dsh捏一个人设，让她说话更像人一些 |
| 113 | [AkutagawaKoyori/dsh-zcode-start](https://github.com/AkutagawaKoyori/dsh-zcode-start) | 0 | 2026-10-28 | 2026-10-28 | 把 ZCode 的 Z.ai / Start Plan 额度接进 DeepSeek Harness，作为原生 GLM 模型提供方使用，并在 DSH 内管理额度。 |
| 114 | [Algorandius/dsh-disk-janitor](https://github.com/Algorandius/dsh-disk-janitor) | 0 | 2026-10-26 | 2026-10-28 | DSH缓存清理插件 |
| 115 | [Alone-show/dsh-quick-keys](https://github.com/Alone-show/dsh-quick-keys) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：/new 新建对话 + Shift+Tab 一键切换计划模式 |
| 116 | [Amer-CN/dsh-retry-panel](https://github.com/Amer-CN/dsh-retry-panel) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness (DSH) 插件：设置里的「断线重试」卡片，429 限流/断流时自动重试，四档耐心一键切换 |
| 117 | [amumulam/dsh-tldraw-canvas](https://github.com/amumulam/dsh-tldraw-canvas) | 0 | 2026-10-28 | 2026-10-28 | A DeepSeek Harness Desktop plugin: a per-Session tldraw v1 (MIT) canvas in the right sidebar, with an agent-readable summary/preview tool. |
| 118 | [Anarrogantcat/dsh-qqbot-refine](https://github.com/Anarrogantcat/dsh-qqbot-refine) | 0 | 2026-10-26 | 2026-10-28 | QQ/NapCat 增强 → 正在演进为 DSH 身份系统：人设/记忆/情绪/成长合一 + 可治理的借手层（电脑操控/浏览器/MCP），零认知依赖 |
| 119 | [AngleNaris/fanframe](https://github.com/AngleNaris/fanframe) | 0 | 2026-10-28 | 2026-10-28 | FanFrame: sharp-cornered interface refinements, readable chat, restrained motion and sidebar tools for DeepSeek Harness. |
| 120 | [arinanto/dsh-ip-based-acl](https://github.com/arinanto/dsh-ip-based-acl) | 0 | 2026-10-28 | 2026-10-28 | IP based ACL gate for DeepSeek Harness |
| 121 | [Artificialimbecile/dsh-whale-chat](https://github.com/Artificialimbecile/dsh-whale-chat) | 0 | 2026-10-28 | 2026-10-28 | 鲸聊：会说话、可配置人设、会自己随机上网带回消息的 DSH 鲸鱼桌宠（dsh-pet 二次创作）。A talking whale desktop pet for DeepSeek Harness: chat, persona, autonomous web browsing. |
| 122 | [AshenJyy/dsh-subagent-antigravity](https://github.com/AshenJyy/dsh-subagent-antigravity) | 0 | 2026-10-28 | 2026-10-28 | Native Antigravity ACP subagents for DeepSeek Harness 0.2.1-rc.3, following the official Codex provider architecture. |
| 123 | [BeatAPI/beatapi-agent-plugin](https://github.com/BeatAPI/beatapi-agent-plugin) | 0 | 2026-07-16 | 2026-10-28 | Cross-host Agent plugin for BeatAPI, the Agent Router for Everything across Model, Data, Tool, and Workspace. |
| 124 | [Beeasy-L/dsh-qq-panel](https://github.com/Beeasy-L/dsh-qq-panel) | 0 | 2026-10-28 | 2026-10-28 | 给 DeepSeek Harness 上的 QQ 桥接（qq-bridge / OneBot v11）做的设置面板：人格卡编辑与热切换、表情包与备注管理、主动发言参数、运行状态与日志。也可脱离 DSH 独立运行。 |
| 125 | [beiryang/dsh-vscode-ide](https://github.com/beiryang/dsh-vscode-ide) | 0 | 2026-10-28 | 2026-10-28 | Monaco-based VS Code-like workbench for DeepSeek Harness — floating window, tabs, diff, Git, SSH terminal. |
| 126 | [binbin-QAQ/BiliMemory](https://github.com/binbin-QAQ/BiliMemory) | 0 | 2026-10-28 | 2026-10-28 | DeepSeekHarness Cordis plugin for local BiliMemory: Bilibili collection/search, task status, login, A-Memorix shared memory, QQ link/allowlist management, and Windows one-click deployment that installs or repairs A-Memorix. Requires Node 22+, Python 3.12, MaiBot/NapCat, Playwright and FFmpeg. Voice/RVC/cover excluded. |
| 127 | [brantshin/dsh-hotkey-enhance](https://github.com/brantshin/dsh-hotkey-enhance) | 0 | 2026-10-28 | 2026-10-28 | Desktop keyboard enhancement for DSH: a Codex-style hold-to-preview session switcher plus the desktop keymap DSH never applies. DSH Desktop only. |
| 128 | [BroWhitebyte/dsh-plugin-baiguangda-style](https://github.com/BroWhitebyte/dsh-plugin-baiguangda-style) | 0 | 2026-10-28 | 2026-10-28 | 白广大风格写作插件：机核编辑的中文文风与结构判据，装进 DeepSeek Harness（4 A + 27 B 条机检，阈值按 444 篇语料标定） |
| 129 | [bugtakue/ronge-adaptive-skill-archive](https://github.com/bugtakue/ronge-adaptive-skill-archive) | 0 | 2026-10-28 | 2026-10-28 | Context-aware, self-evolving skill cockpit for DeepSeek Harness: recommendations with reasons, 10% exploration, live "now using", plan/immersive modes, experience memory, local safety scan, update diff/rollback, 6,399-skill index. MIT. |
| 130 | [canadaeee/transsioner-link](https://github.com/canadaeee/transsioner-link) | 0 | 2026-10-28 | 2026-10-28 | Transsioner-CLI：把本机 lark-cli 的只读能力接成 DSH 工具（云文档/表格/多维表格/画板/评论/妙记/群消息）。不含任何凭据，使用者用自己的账号授权。 |
| 131 | [Cantarella-Fisalia/dsh-langgraph-canvas](https://github.com/Cantarella-Fisalia/dsh-langgraph-canvas) | 0 | 2026-10-28 | 2026-10-28 | Unofficial community LangGraph canvas plugin for DeepSeek Harness. Independently maintained; not affiliated with or endorsed by DeepSeek or LangChain. |
| 132 | [Cdkgfp/dsh-whale-pro](https://github.com/Cdkgfp/dsh-whale-pro) | 0 | 2026-10-28 | 2026-10-28 | DSH 桌面端小鲸鱼简洁版：常驻梁文峰/梁文谷/时间线/余额信息栏，大幅优化原插件冗余部分 |
| 133 | [chancecc99-gif/dsh-title-curator](https://github.com/chancecc99-gif/dsh-title-curator) | 0 | 2026-10-28 | 2026-10-28 | Stable emoji session titles for DeepSeek Harness: emoji + object｜goal, manual-rename locks, idempotent evaluation. |
| 134 | [ChenXu233/dsh-workspace-mesh](https://github.com/ChenXu233/dsh-workspace-mesh) | 0 | 2026-10-28 | 2026-10-28 | Workspace mesh for DeepSeek Harness: declare which workspace lives on which host, dispatch tasks by workspace across paired DSH instances. |
| 135 | [ChimeSky/dsh-effort-keeper](https://github.com/ChimeSky/dsh-effort-keeper) | 0 | 2026-10-28 | 2026-10-28 | Per-model reasoning-effort memory for DeepSeek Harness (DSH): remembers each model's last chosen effort and restores it when you switch back. |
| 136 | [chjy090/dsh-pairing-gate](https://github.com/chjy090/dsh-pairing-gate) | 0 | 2026-10-27 | 2026-10-28 | DSH安全认证插件 |
| 137 | [chopperH0824/dsh-annotate-sync](https://github.com/chopperH0824/dsh-annotate-sync) | 0 | 2026-10-28 | 2026-10-28 | Page annotation plugin for DeepSeek Harness: right-sidebar preview, element picking, page-scoped annotations, send-to-conversation, read_annotations tools. |
| 138 | [ckanner/dsh-plugin-github-issues](https://github.com/ckanner/dsh-plugin-github-issues) | 0 | 2026-10-28 | 2026-10-28 | Browse GitHub issues, milestones, labels, priority and linked PR status inside DeepSeek Harness, and hand an issue to the agent. |
| 139 | [clarag0d/dsh-locale-multilingual](https://github.com/clarag0d/dsh-locale-multilingual) | 0 | 2026-10-26 | 2026-10-28 | Four extra UI locales for DeepSeek Harness: zh-TW, ja, ko, fr — fully offline, no API calls. |
| 140 | [Clawz1N1N/dsh-rate-limit](https://github.com/Clawz1N1N/dsh-rate-limit) | 0 | 2026-10-28 | 2026-10-28 | Deepseek harness plugin for control rate limits |
| 141 | [cloudoyx/any-audio](https://github.com/cloudoyx/any-audio) | 0 | 2026-10-28 | 2026-10-28 | Agent-led audio production toolkit: sampled instruments, timeline-based arranging, sound effects, TTS, multitrack mixing, and video muxing. |
| 142 | [cuiyuan605/dsh-message-box](https://github.com/cuiyuan605/dsh-message-box) | 0 | 2026-10-28 | 2026-10-28 | Message box for DeepSeek Harness: finished-conversation and pending-approval notifications with jump-to-conversation and inline approval. |
| 143 | [cxv117793-blip/dsh-sidebar-overflow](https://github.com/cxv117793-blip/dsh-sidebar-overflow) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: pick which left-sidebar entries stay visible, collect the rest into a More menu. 把 DSH 左侧边栏按钮收进「更多」，逐项自选。 |
| 144 | [czdcm/dsh-plugin-corpus](https://github.com/czdcm/dsh-plugin-corpus) | 0 | 2026-10-26 | 2026-10-28 | Local file corpus for DeepSeek Harness: indexed search/read, Office/PDF/image import, ACL, and a Web panel. |
| 145 | [d0nj/dsh-plugins](https://github.com/d0nj/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin collection: Cordis bundles installed into a dsh profile, managed as a Turborepo monorepo. |
| 146 | [dadazhangn/dsh-prompt-snippets](https://github.com/dadazhangn/dsh-prompt-snippets) | 0 | 2026-10-27 | 2026-10-28 | DSH Prompt Snippets plugin: save reusable prompts (with categories and {{placeholders}}), insert via /snippet command or a one-click dock panel. |
| 147 | [darkwithlight/dsh-mcp-jetbrains](https://github.com/darkwithlight/dsh-mcp-jetbrains) | 0 | 2026-10-28 | 2026-10-28 | 对接 jetbrains MCP 服务的 DSH 插件 |
| 148 | [Dax233/dsh-sidebar-control](https://github.com/Dax233/dsh-sidebar-control) | 0 | 2026-10-28 | 2026-10-28 | Agent-facing control plane for the DSH right Sidebar: hierarchical tab overview, open/focus/close across browser/terminal/file kinds, and progressive disclosure (expand a tab to pull its content and the exact tools for it). |
| 149 | [Dax233/dsh-sidebar-ux](https://github.com/Dax233/dsh-sidebar-ux) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness sidebar UX: right-click menus on session/workspace rows, drag a session into the composer to insert a reference chip, and open a workspace in the file manager. |
| 150 | [daydream-wjh/dsh-opencode-go-usage](https://github.com/daydream-wjh/dsh-opencode-go-usage) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：在输入框上方常驻 OpenCode Go 套餐限额读数，滚动/周/月三窗口用量与重置倒计时 |
| 151 | [dbssAlan/dsh-hub-plugin](https://github.com/dbssAlan/dsh-hub-plugin) | 0 | 2026-10-21 | 2026-10-28 | 把 DSH 安全发布到局域网/公网：访问密码、二维码、设备导航、cloudflared 隧道，全部在设置页里管理。 |
| 152 | [DDL095/dsh-moa-native](https://github.com/DDL095/dsh-moa-native) | 0 | 2026-10-28 | 2026-10-28 | Many models draft, one executes for DeepSeek Harness. |
| 153 | [degraw4/dsh-tool-discovery](https://github.com/degraw4/dsh-tool-discovery) | 0 | 2026-10-25 | 2026-10-28 | Progressive tool-parameter documentation for DeepSeek Harness native TypeScript PTC, with a reproducible 78-tool evaluation |
| 154 | [DevZjQx/dsh-bili-lite](https://github.com/DevZjQx/dsh-bili-lite) | 0 | 2026-10-28 | 2026-10-28 | 给 DSH 装一个 B 站分身：自己排作息，刷视频 / 看懂 / 写日记 / 评论 / 点赞投币关注（Bun + TypeScript） |
| 155 | [dingchenhui0618-arch/dsh-compress-bench](https://github.com/dingchenhui0618-arch/dsh-compress-bench) | 0 | 2026-10-28 | 2026-10-28 | Local mirrored A/B benchmark for DeepSeek Harness context compression: input tokens, turns, tool success, fact coverage, answer diff, JSON + SVG. |
| 156 | [dingchenhui0618-arch/dsh-pet-ledger](https://github.com/dingchenhui0618-arch/dsh-pet-ledger) | 0 | 2026-10-28 | 2026-10-28 | A pet ledger whose achievements come only from real DeepSeek Harness session events, each with session and tool-call evidence; demo runs are watermarked. |
| 157 | [dingchenhui0618-arch/dsh-take-sheet](https://github.com/dingchenhui0618-arch/dsh-take-sheet) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness tab: cut a reference video into shots, curate frames, export a timecoded manifest and a labelled contact sheet. Local-only, ffmpeg. |
| 158 | [DKSlin/dsh-plugins](https://github.com/DKSlin/dsh-plugins) | 0 | 2026-10-27 | 2026-10-28 | dsh-plugins |
| 159 | [douchu004/dsh-skill-triage](https://github.com/douchu004/dsh-skill-triage) | 0 | 2026-10-28 | 2026-10-28 | Trigger-word skill triage gate for DeepSeek Harness |
| 160 | [douglarek/dsh-btw](https://github.com/douglarek/dsh-btw) | 0 | 2026-10-28 | 2026-10-28 | Side questions for DeepSeek Harness: /btw asks the session's own model an aside without interrupting the running turn. |
| 161 | [DSH-Raising-Plan/dsh-agent-gate](https://github.com/DSH-Raising-Plan/dsh-agent-gate) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 权限闸门插件：风险分级、路径沙箱、调用限额、审计（fail-closed） |
| 162 | [DSH-Raising-Plan/dsh-anime-guide](https://github.com/DSH-Raising-Plan/dsh-anime-guide) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 番剧插件：yuc 新番表 + 番库/Bangumi/MAL 评分榜，搜索推荐与国内外差异对照 |
| 163 | [DSH-Raising-Plan/dsh-context-budget](https://github.com/DSH-Raising-Plan/dsh-context-budget) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 上下文预算插件：保留人设，按轮丢掉最旧对话 |
| 164 | [DSH-Raising-Plan/dsh-netease-cdp](https://github.com/DSH-Raising-Plan/dsh-netease-cdp) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 网易云插件：经 CDP 驱动桌面客户端（不碰 API、不需登录） |
| 165 | [DSH-Raising-Plan/dsh-window-locator](https://github.com/DSH-Raising-Plan/dsh-window-locator) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 窗口定位插件：Windows 显示器几何与前台窗口（物理像素） |
| 166 | [dustinliang666-blip/lava-mcp](https://github.com/dustinliang666-blip/lava-mcp) | 0 | 2026-10-27 | 2026-10-28 | 熔岩 Lava：A 股股票与概念板块的消息面热度监测（结构化只读 MCP/REST，支持量化交易工具与 AI Agent 股市研究接入） |
| 167 | [dyikai/dsh-hogwarts-loop](https://github.com/dyikai/dsh-hogwarts-loop) | 0 | 2026-10-28 | 2026-10-28 | Hogwarts-loop as a DeepSeek Harness plugin: per-role subagents on configurable models, with a client settings page. |
| 168 | [dyrcjqlgcj/dsh-hindsight-local](https://github.com/dyrcjqlgcj/dsh-hindsight-local) | 0 | 2026-10-28 | 2026-10-28 | 本地 Hindsight 长期记忆插件：自带 daemon 管理、10 个 hindsight_local_* 工具、会话注入与回写，数据留本机 |
| 169 | [edgewalker6666/dsh-audio-player](https://github.com/edgewalker6666/dsh-audio-player) | 0 | 2026-10-28 | 2026-10-28 | 一个 DSH 内的 MP3 音频播放器：用户自行导入喜欢的音乐，独立悬浮窗播放；如当前有启动动画（优先适配长征机启动动画），可开启启动动画同步播放并在动画结束时渐隐。 |
| 170 | [edgora-ai/dsh-session-keepalive](https://github.com/edgora-ai/dsh-session-keepalive) | 0 | 2026-10-28 | 2026-10-28 | Bounded per-tab session keep-alive for DeepSeek Harness, with native settings and privacy-preserving diagnostics. |
| 171 | [EEEtPn/dsh-plasticity-plugin](https://github.com/EEEtPn/dsh-plasticity-plugin) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: drive Plasticity 3D (native Parasolid B-rep CAD) from AI via a loopback Electron CDP bridge — mm units, real undo, STEP/STL export. |
| 172 | [Elefseus/dsh-default-workspace](https://github.com/Elefseus/dsh-default-workspace) | 0 | 2026-10-28 | 2026-10-28 | Inspect, repair, and relocate DeepSeek Harness's default Workspace without a restart — the folder DSH otherwise pins to &lt;Documents&gt; (the system drive on Windows) and never moves. |
| 173 | [elliotmasheal/dsh-brand-studio](https://github.com/elliotmasheal/dsh-brand-studio) | 0 | 2026-10-28 | 2026-10-28 | DSH 侧边栏品牌插件：账号头像或上传图片作 Logo，纯圆/圆角矩形，自定义名称与官方 Harness 徽标。非官方社区插件。 |
| 174 | [errolleefin/dsh-tide-badge](https://github.com/errolleefin/dsh-tide-badge) | 0 | 2026-10-28 | 2026-10-28 | DSH 峰谷计费药丸的修改版：本次对话花费改为按会话 token 用量 × 官方价目表（方案 A）。基于 xiangrikuibaize/dsh-tide-badge v0.2.3。 |
| 175 | [erty3244/dsh-feishu-bridge](https://github.com/erty3244/dsh-feishu-bridge) | 0 | 2026-10-25 | 2026-10-28 | DSH plugin: Feishu (Lark) long-connection bridge — webhook, threaded reply, optional self-trigger |
| 176 | [erty3244/dsh-self-trigger](https://github.com/erty3244/dsh-self-trigger) | 0 | 2026-10-28 | 2026-10-28 | Self-trigger for DeepSeek Harness: when the host is idle, the agent may inject one turn into a chosen session on its own. Disabled by default; zero dependencies. |
| 177 | [Eva7788519/dsh-screenshot-tool](https://github.com/Eva7788519/dsh-screenshot-tool) | 0 | 2026-10-28 | 2026-10-28 | Screenshot capture for DeepSeek Harness: a model tool plus a composer camera button, Windows desktop to PNG. |
| 178 | [FablerTan/obsidian-dsh](https://github.com/FablerTan/obsidian-dsh) | 0 | 2026-10-27 | 2026-10-28 | 在 Obsidian 右侧面板用原生 React UI 与 DeepSeek Harness 聊天；插件托管独立 dsh 服务（obsidian profile / 端口 3081 / cwd=vault） |
| 179 | [farchanjo/caveman-plugin-dsh](https://github.com/farchanjo/caveman-plugin-dsh) | 0 | 2026-10-28 | 2026-10-28 | Caveman voice for DSH (terminal and web): terse replies via bundled skills, a /caveman toggle and a TUI badge. Plugin-only, no dependencies. |
| 180 | [fataldeity-lab/dsh-gpu-cleanup](https://github.com/fataldeity-lab/dsh-gpu-cleanup) | 0 | 2026-10-28 | 2026-10-28 | DSH Web UI plugin: one-click VRAM release — unloads llama-swap models and sweeps stale local engines while keeping llama-swap alive. Maintained fork, aligned to DSH 0.2.0-rc.2. |
| 181 | [feely0208/dsh-deliverable-pack](https://github.com/feely0208/dsh-deliverable-pack) | 0 | 2026-10-28 | 2026-10-28 | 深鲸交付包：把产出物打成一个可核对、可追溯的交付物（zip + 文件清单 + SHA256 校验） |
| 182 | [feely0208/dsh-doc-qc](https://github.com/feely0208/dsh-doc-qc) | 0 | 2026-10-28 | 2026-10-28 | 深鲸文档质检：交付前查占位符/重复段落/超长段落/半角标点/编号断档 |
| 183 | [feely0208/dsh-file-organizer](https://github.com/feely0208/dsh-file-organizer) | 0 | 2026-10-28 | 2026-10-28 | 深鲸文件整理：按类型/年月归档、同名自动加序号、找重复、清空目录（默认只看不动） |
| 184 | [feely0208/dsh-industry-archive](https://github.com/feely0208/dsh-industry-archive) | 0 | 2026-10-28 | 2026-10-28 | 档案行业专项体检：保管期限、电子档案四性检测、销毁审批、迁移留痕 |
| 185 | [feely0208/dsh-industry-checkup](https://github.com/feely0208/dsh-industry-checkup) | 0 | 2026-10-28 | 2026-10-28 | 深鲸行业合规体检：一个面板管五个行业（医疗/财税/招聘/制造/房产） |
| 186 | [feely0208/dsh-industry-hr](https://github.com/feely0208/dsh-industry-hr) | 0 | 2026-10-28 | 2026-10-28 | 招聘场景多出来的那几项：简历个人信息、就业歧视用语、背景调查授权，别等投诉才发现 |
| 187 | [feely0208/dsh-industry-manufacturing](https://github.com/feely0208/dsh-industry-manufacturing) | 0 | 2026-10-28 | 2026-10-28 | 制造现场多出来的那几项：安全生产培训学时、特种设备登记、产品标识与危化品管理，别等检查才发现 |
| 188 | [feely0208/dsh-industry-realestate](https://github.com/feely0208/dsh-industry-realestate) | 0 | 2026-10-28 | 2026-10-28 | 房产销售多出来的那几项：广告承诺、学区表述、明码标价与预售资金监管，别等处罚才发现 |
| 189 | [feely0208/dsh-industry-tax](https://github.com/feely0208/dsh-industry-tax) | 0 | 2026-10-28 | 2026-10-28 | 财税行业多出来的那几项：发票与会计凭证保存期、税务数据出境、发票抬头与税号校验，别等稽查才发现 |
| 190 | [feely0208/dsh-key-vault](https://github.com/feely0208/dsh-key-vault) | 0 | 2026-10-28 | 2026-10-28 | 深鲸 Key 保险箱：本机保存你自带的多个 API Key（只显示掩码、0600、不上传） |
| 191 | [feely0208/dsh-office-hub](https://github.com/feely0208/dsh-office-hub) | 0 | 2026-10-28 | 2026-10-28 | 深鲸办公台：一个面板看全办公/交付/行业合规插件，复制安装命令 |
| 192 | [feely0208/dsh-remote-gate](https://github.com/feely0208/dsh-remote-gate) | 0 | 2026-10-28 | 2026-10-28 | 深鲸远程访问加固：上线前扫描监听地址、鉴权开关、CORS、默认口令等远程暴露风险 |
| 193 | [feely0208/dsh-sidebar-compact](https://github.com/feely0208/dsh-sidebar-compact) | 0 | 2026-10-28 | 2026-10-28 | 深鲸侧栏收纳：插件列表限高+内部滚动，缓解侧栏拥挤 |
| 194 | [felix-lius/design-patent-views](https://github.com/felix-lius/design-patent-views) | 0 | 2026-10-28 | 2026-10-28 | 从 STEP 三维模型自动生成中国外观设计专利的六视图 + 立体图 + JPEG 提交件 + 可编辑 DXF，全程本地运行 |
| 195 | [FFFengMJL/dsh-workspace-browser](https://github.com/FFFengMJL/dsh-workspace-browser) | 0 | 2026-10-28 | 2026-10-28 | A workspace-first browser for DSH sessions |
| 196 | [flowfire/dsh-plugin-agent-groups](https://github.com/flowfire/dsh-plugin-agent-groups) | 0 | 2026-10-28 | 2026-10-28 | A DSH (DeepSeek Harness) plugin that pulls multiple live sessions into one collaboration group and relays their final outputs on a shared timeline. |
| 197 | [flyhai/dsh-auto-approval-frame](https://github.com/flyhai/dsh-auto-approval-frame) | 0 | 2026-10-28 | 2026-10-28 | Interception and audit frame for DeepSeek Harness: one approval ladder, hash-chained audit, result redaction. |
| 198 | [FragrantLotus/dsh-sidebar-entries](https://github.com/FragrantLotus/dsh-sidebar-entries) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 侧边栏增强：面板拖拽排序、整行高度上限、置顶会话区（含实时状态）、顶部视图标签拖拽、归档会话归拢、分叉子会话跟进、页脚入口提升。 |
| 199 | [Gucciy69/dsh-bailian-voucher](https://github.com/Gucciy69/dsh-bailian-voucher) | 0 | 2026-10-28 | 2026-10-28 | 在 DSH 侧边栏显示阿里云百炼代金券余额（RAM AccessKey 只读查询） |
| 200 | [HackForJoy/dsh-openai-siwc](https://github.com/HackForJoy/dsh-openai-siwc) | 0 | 2026-10-28 | 2026-10-28 | Community DeepSeek Harness (DSH) LLM provider using OpenAI Sign in with ChatGPT (ChatGPT plan usage for open-source clients). Not affiliated with OpenAI or DeepSeek. |
| 201 | [HimA6652/dsh-client-ui-model-seat](https://github.com/HimA6652/dsh-client-ui-model-seat) | 0 | 2026-10-27 | 2026-10-28 | 把两个抢同一个模型座位、装在一起就打架的 dsh 插件合成一个控件：Provider / 模型双列卡片，悬停左列只换右列、卡片不位移；搜索一次跨全部供应商的模型；独立的思考强度触发按钮与粒子滑块，fast 模式长按锁定；双主题外观面板。以 priority -2 注册，与内置控件或原插件同装不冲突。 |
| 202 | [Hongcheng-LI/dsh-magpie](https://github.com/Hongcheng-LI/dsh-magpie) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: Magpie gateway quotas in your composer — subscription windows, prepaid balances, relay stations. 输入框里看 Magpie 全部账号额度与用量 |
| 203 | [hotheat/dsh-claude-codex-mode](https://github.com/hotheat/dsh-claude-codex-mode) | 0 | 2026-10-23 | 2026-10-28 | DSH bundle: Claude discusses (API key or Claude Code CLI), Codex edits repository code. Mode switch with preflight checks on the Plugins page. |
| 204 | [huangzhilin-hzl/dsh-web-search-searxng](https://github.com/huangzhilin-hzl/dsh-web-search-searxng) | 0 | 2026-10-28 | 2026-10-28 | SearXNG-backed web search provider for the DeepSeek Harness ctx.web seam (no API key required) |
| 205 | [hybridIce/dsh-plugin-pdf-annotator](https://github.com/hybridIce/dsh-plugin-pdf-annotator) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness PDF 批注插件：选中文字、添加批注，多条一起发送给 Agent。Select PDF text, annotate, and send comments as a batch. |
| 206 | [iBobbyTS/dsh-auto-work-details](https://github.com/iBobbyTS/dsh-auto-work-details) | 0 | 2026-10-25 | 2026-10-28 | DSH插件，自动展开工作过程，完成后自动折叠。 |
| 207 | [inkyi/dsh-mcp-management](https://github.com/inkyi/dsh-mcp-management) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin — workspace-scoped MCP servers for DeepSeek Harness: each project directory gets its own MCP tools. |
| 208 | [InnovationalOfficeSolution/PulseConvertDeepSeekRepo](https://github.com/InnovationalOfficeSolution/PulseConvertDeepSeekRepo) | 0 | 2026-10-28 | 2026-10-28 | Pulse Convert MCP plugin for DeepSeek Harness (DSH) — Automated migration, code conversion, and modernization for 40+ legacy BI, ETL, and DWH platforms to Power BI, Microsoft Fabric, and Databricks. |
| 209 | [j1kwen/dsh-anywhere-sync](https://github.com/j1kwen/dsh-anywhere-sync) | 0 | 2026-10-28 | 2026-10-28 | Sync Harness profiles, plugin manifests, plugin settings and local plugin source across machines through a private Git repository. |
| 210 | [JackieJam/dsh-iridescent-model-selector](https://github.com/JackieJam/dsh-iridescent-model-selector) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: direct model picker with favorites and an aurora reasoning-effort slider |
| 211 | [JaMoLpE88/dsh-free-websearch](https://github.com/JaMoLpE88/dsh-free-websearch) | 0 | 2026-10-28 | 2026-10-28 | Free web search and page fetch for DeepSeek Harness: five keyless engines behind web_search and web_fetch, paid DeepSeek search and fetch disabled, zero configuration. |
| 212 | [Jegozhou/dsh-excalidraw](https://github.com/Jegozhou/dsh-excalidraw) | 0 | 2026-10-27 | 2026-10-28 | Native DeepSeek Harness plugin: real Excalidraw canvas, revisioned .excalidraw persistence, typed agent tools — evidence, ADR and tests included |
| 213 | [JeremyCruzFang/dsh-plugin-dshm](https://github.com/JeremyCruzFang/dsh-plugin-dshm) | 0 | 2026-10-28 | 2026-10-28 | DSHM plugin for DeepSeek Harness: pair your iPhone or iPad over LAN or your own VPN |
| 214 | [Jessicaisleep/dsh-dsml-guard](https://github.com/Jessicaisleep/dsh-dsml-guard) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: strips DSML markers leaked into assistant prose and auto-continues only turns that truly produced nothing. |
| 215 | [jiangpengtkd-alt/dsh-balance-chip](https://github.com/jiangpengtkd-alt/dsh-balance-chip) | 0 | 2026-10-10 | 2026-10-28 | DSH（DeepSeek Harness）Web GUI 插件：输入框下方显示账户总余额、会话累计与本轮消耗，按 DeepSeek 官方峰谷规则（含中国法定节假日）计价。零依赖；默认走本机账号服务，仅在不可用时回退 api.deepseek.com。 |
| 216 | [JJJACKsong/sleep-not-permitted](https://github.com/JJJACKsong/sleep-not-permitted) | 0 | 2026-10-28 | 2026-10-28 | Forbid foreground waiting in DSH agents: sleep / wait_agent / job_output(wait) are rejected with a background-job retry. 禁止 Agent 前台等待，会话不再被冻住。 |
| 217 | [KaylaONeal/dsh-plugin-ntfyx](https://github.com/KaylaONeal/dsh-plugin-ntfyx) | 0 | 2026-10-28 | 2026-10-28 | Ntfyx phone notifications and verified replies for DeepSeek Harness. Native DSH MCP + skill bundle. |
| 218 | [keeptrue/dsh-work-team](https://github.com/keeptrue/dsh-work-team) | 0 | 2026-10-27 | 2026-10-28 | Boss-view work team for DSH: role-based teammates, per-role models, and a live office in the sidebar. |
| 219 | [KeqingMoe/dsh-search-switch](https://github.com/KeqingMoe/dsh-search-switch) | 0 | 2026-10-28 | 2026-10-28 | dsh 搜索 provider 切换 |
| 220 | [keyblues/dsh-plugin-fengniao-company-search](https://github.com/keyblues/dsh-plugin-fengniao-company-search) | 0 | 2026-10-27 | 2026-10-28 | DeepSeek Harness (DSH) 插件：风鸟（Riskbird）企业查询——工商/股东/高管/对外投资/变更/被执行/失信/限高/经营异常/严重违法/行政处罚，原生 Agent 工具，插件页内配置 API Key。 |
| 221 | [kinglhy2006/dsh-voice-bridge](https://github.com/kinglhy2006/dsh-voice-bridge) | 0 | 2026-10-28 | 2026-10-28 | 贾维斯式语音助手 for DSH：本地唤醒词「贾维斯」+ 中文识别 + 语音朗读回答 |
| 222 | [kkkkk-tubu/dsh-deep-purge](https://github.com/kkkkk-tubu/dsh-deep-purge) | 0 | 2026-10-28 | 2026-10-28 | Delete DSH sessions completely — clears all six on-disk locations, with dry run, backup, rollback and automatic DSH restart. |
| 223 | [koishi-fumo-code/dsh-feiyu-kb](https://github.com/koishi-fumo-code/dsh-feiyu-kb) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：把本地 Markdown 知识库变成所有模型运行时都能调用的工具（搜索 / 读取 / 写入 / 相关推荐） |
| 224 | [Kosello/dsh-self-evolve](https://github.com/Kosello/dsh-self-evolve) | 0 | 2026-10-28 | 2026-10-28 | Agent-authored procedural memory for DeepSeek Harness: guarded skill_manage, opt-in post-turn reviewer, optional Jev gate. Fork of jianghuife/dsh-self-evolve. |
| 225 | [kouzerror/dsh-retry](https://github.com/kouzerror/dsh-retry) | 0 | 2026-10-28 | 2026-10-28 | Native 'Restart DeepSeek Harness' action for the Windows tray menu and account menu. 给 DSH 桌面端加真正的重启入口。 |
| 226 | [Kseleven/dsh-pomodoro-timer](https://github.com/Kseleven/dsh-pomodoro-timer) | 0 | 2026-10-28 | 2026-10-28 | a pomodoro timer plugin in deepseek-harness |
| 227 | [kvnis/dsh-lazy-mcp](https://github.com/kvnis/dsh-lazy-mcp) | 0 | 2026-10-28 | 2026-10-28 | Lazy MCP client for DeepSeek Harness: registers a server's tools from a cached manifest at boot and connects on the first call. |
| 228 | [kw12121212/strict-spec-driven](https://github.com/kw12121212/strict-spec-driven) | 0 | 2026-04-23 | 2026-10-28 | strict spec driven AI coding |
| 229 | [kylernunan/dsh-split-session](https://github.com/kylernunan/dsh-split-session) | 0 | 2026-10-28 | 2026-10-28 | Quad-pane split session view for the DeepSeek Harness Web GUI |
| 230 | [kyoukisu/dsh-rich-ui](https://github.com/kyoukisu/dsh-rich-ui) | 0 | 2026-10-28 | 2026-10-28 | Interactive rich responses for DeepSeek Harness: entity collections, detail panels, local calculators and streaming previews rendered from a strict JSON contract |
| 231 | [Lavalx100/dsh-lerobot-dataset-inspector](https://github.com/Lavalx100/dsh-lerobot-dataset-inspector) | 0 | 2026-10-28 | 2026-10-28 | Standalone read-only DeepSeek Harness plugin for inspecting local LeRobot dataset metadata, episodes, and statistics. |
| 232 | [lcx19970714/dsh-runner](https://github.com/lcx19970714/dsh-runner) | 0 | 2026-10-25 | 2026-10-28 | DSH 客户端插件 dsh-runner：输入框下方运行命令，设置页与 AI 工具管理启动命令，支持 GitHub 更新提示。 |
| 233 | [leemax1688/dsh-kimetsu-theme](https://github.com/leemax1688/dsh-kimetsu-theme) | 0 | 2026-10-28 | 2026-10-28 | Kimetsu no Yaiba (Demon Slayer) skin for the DeepSeek Harness Web UI: token-layer palette, rotating wallpapers, flame band. 鬼灭之刃 DSH 主题插件 |
| 234 | [leifangwen88/dsh-cursorlike](https://github.com/leifangwen88/dsh-cursorlike) | 0 | 2026-10-27 | 2026-10-28 | CursorLike — Cursor-style coding surface for DeepSeek Harness (DSH plugin: pending-files card, side Monaco editor, diff review, AI edit) |
| 235 | [LeonhardJY/dsh-teacher-kit](https://github.com/LeonhardJY/dsh-teacher-kit) | 0 | 2026-10-28 | 2026-10-28 | 面向中国大陆中学教师的 DSH 插件：出试卷、按题库组卷、听写单、教案、课件、一节课整套，以及 docx/pptx 批量加工。排版走你自己学校的空白模板，第一次用问几个问题，之后记住你学校的习惯。全程本机运行，不联网、不收集数据。 |
| 236 | [leoriczhao/dsh-session-butler](https://github.com/leoriczhao/dsh-session-butler) | 0 | 2026-10-28 | 2026-10-28 | Threadloom — session management plugin for DeepSeek Harness: browse, filter, inspect, batch-manage and trash/restore sessions across workspaces, with read-only agent tools. |
| 237 | [leoyoul/dsh-onekey-update](https://github.com/leoyoul/dsh-onekey-update) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: check enabled plugins for new versions at startup and upgrade them all with one click. Cross-platform. |
| 238 | [LhyCloud/dsh-fingerprint-remover](https://github.com/LhyCloud/dsh-fingerprint-remover) | 0 | 2026-10-28 | 2026-10-28 | 去除DSH的客户端特征，防止调用API时被检出 |
| 239 | [liangzhiyu/dsh-composer-autocomplete](https://github.com/liangzhiyu/dsh-composer-autocomplete) | 0 | 2026-10-28 | 2026-10-28 | Tab autocomplete for the DeepSeek Harness composer: inline ghost text, next-message suggestions and early candidate acceptance. MIT community enhancement. |
| 240 | [liangzz1998/dsh-web-devtools](https://github.com/liangzz1998/dsh-web-devtools) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness ??:??? F12(??? / DOM / ?? / ????? / ??? / ??)?? agent,??????????????????? CDP,???,???????? |
| 241 | [liaohongrao/dsh-session-dates](https://github.com/liaohongrao/dsh-session-dates) | 0 | 2026-10-28 | 2026-10-28 | Group DSH sidebar sessions by date inside every workspace / 按日期分组显示 DSH 侧边栏会话 |
| 242 | [liliweijie/dsh-buildboard](https://github.com/liliweijie/dsh-buildboard) | 0 | 2026-10-28 | 2026-10-28 | A buildboard note plugin for DeepSeek Harness: timestamped notes, images, live account HUD, and one-click AI analysis of any note. |
| 243 | [LingYuYo/dsh-qq-bridge](https://github.com/LingYuYo/dsh-qq-bridge) | 0 | 2026-10-20 | 2026-10-28 | 🤖 100% 由 AI 编写完成。把 QQ 接入 DeepSeek Harness 的桥接插件。提供执行期安全门禁、外部插件沙箱、模型无痕热切、看门狗失败降级与完整 Web UI。零外部 npm 依赖。 |
| 244 | [linhaiyutuo/dsh-mouse-blur](https://github.com/linhaiyutuo/dsh-mouse-blur) | 0 | 2026-10-28 | 2026-10-28 | 鼠标静止时 DSH 背景模糊归零，移动或点击时按可调百分比模糊（适配 dsh-cool-theme 0.9/0.10，支持图片与视频背景） |
| 245 | [lion231226/dsh-auto-reasoning-effort](https://github.com/lion231226/dsh-auto-reasoning-effort) | 0 | 2026-10-28 | 2026-10-28 | Difficulty-aware reasoning_effort scheduling for DeepSeek Harness (dsh): AUTO mode picks low/high/max from the user's message, tool history and error signals. Fork of dsh-thinking-levels (MIT). |
| 246 | [LIU118117/dsh-love](https://github.com/LIU118117/dsh-love) | 0 | 2026-10-28 | 2026-10-28 | 把每天的聊天过程蒸馏成可更新的角色卡与跨会话感情模块，持续训练角色卡（保留说话习惯与关键记忆）。DeepSeek Harness 插件。 |
| 247 | [liubaicai/dsh-codebuddy-link](https://github.com/liubaicai/dsh-codebuddy-link) | 0 | 2026-10-28 | 2026-10-28 | 将腾讯 CodeBuddy CLI 接入 DeepSeek Harness (DSH) 的插件 |
| 248 | [liuleiyu121520/dsh-mcpserver-manager](https://github.com/liuleiyu121520/dsh-mcpserver-manager) | 0 | 2026-10-27 | 2026-10-28 | DSH (DeepSeek Harness) 插件：在设置 → MCP 管理页面里用一段 JSON 添加 MCP，校验后写入 DSH 官方 MCP 维护配置文件 cordis.patch.yml 并回显列表 |
| 249 | [lizyoko9/dsh-formula-verify](https://github.com/lizyoko9/dsh-formula-verify) | 0 | 2026-10-28 | 2026-10-28 | Formula verification skill and SymPy CLI for DeepSeek Harness |
| 250 | [ln123456789100ln-collab/dsh-remote-kit](https://github.com/ln123456789100ln-collab/dsh-remote-kit) | 0 | 2026-10-28 | 2026-10-28 | Self-hosted iPhone remote access kit for DeepSeek Harness: Windows one-click launcher, relay, E2EE tunnel and mobile drawer UI. |
| 251 | [lo2589/dsh-plugin-rightbar](https://github.com/lo2589/dsh-plugin-rightbar) | 0 | 2026-10-27 | 2026-10-28 | A shared right sidebar for DeepSeek Harness — plugins contribute tabs into the \`rightbar.tab\` slot instead of each floating its own fixed panel. |
| 252 | [lof6yo/dsh-just-settings](https://github.com/lof6yo/dsh-just-settings) | 0 | 2026-10-28 | 2026-10-28 | Replace the DSH sidebar's More menu with a single button that opens Settings. |
| 253 | [lof6yo/dsh-opencode-live](https://github.com/lof6yo/dsh-opencode-live) | 0 | 2026-10-28 | 2026-10-28 | OpenCode as a DSH subagent, with a live ACP trace panel for its agents and self-spawned subagents |
| 254 | [lord-of-vaegirs/dsh-projectflow](https://github.com/lord-of-vaegirs/dsh-projectflow) | 0 | 2026-10-28 | 2026-10-28 | Project-first workspaces and durable context for DeepSeek Harness |
| 255 | [lovehin/dsh-websearch-keyless](https://github.com/lovehin/dsh-websearch-keyless) | 0 | 2026-10-28 | 2026-10-28 | Keyless web search for DeepSeek Harness: Tavily, TinyFish and Exa with no API key, mirroring OpenCode's web search backends. |
| 256 | [lubenkov/dsh-pajama-whale](https://github.com/lubenkov/dsh-pajama-whale) | 0 | 2026-10-25 | 2026-10-28 | A draggable pet in a blue-whale onesie for DeepSeek Harness: sticks to the window edges, squashes flat, blinks, sleeps, and reports agent status in a thought cloud. |
| 257 | [Lutra23/dsh-plugins](https://github.com/Lutra23/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | MingYue workshop DSH plugin collection: 13 core, 2 forks, 2 VCP-side. Installable tgz per package, no hardcoded local paths. |
| 258 | [lxg103/dsh-chat-shell](https://github.com/lxg103/dsh-chat-shell) | 0 | 2026-10-28 | 2026-10-28 | A Chat / Harness switch for DeepSeek Harness desktop. Embed DeepSeek, Doubao or ChatGPT in the whole window as a real embedded browser, then switch back to the untouched Harness UI in one click - sessions, scroll position and streaming replies keep running. |
| 259 | [lyuwen/dsh-agent-relay](https://github.com/lyuwen/dsh-agent-relay) | 0 | 2026-10-23 | 2026-10-28 | Relay messages between agent harness's native sessions |
| 260 | [M4rkzzz/dsh-cpa](https://github.com/M4rkzzz/dsh-cpa) | 0 | 2026-10-28 | 2026-10-28 | DSH settings, ChatGPT OAuth and model sync for a local CLIProxyAPI |
| 261 | [machine202502/dsh-browser](https://github.com/machine202502/dsh-browser) | 0 | 2026-10-27 | 2026-10-28 | Isolated Playwright browser per session for DeepSeek Harness: tabs, screenshots in chat, per-site proxy |
| 262 | [machine202502/dsh-choice](https://github.com/machine202502/dsh-choice) | 0 | 2026-10-28 | 2026-10-28 | Single-choice board in the DeepSeek Harness chat: pick one of several answers, images or sounds |
| 263 | [machine202502/dsh-restart](https://github.com/machine202502/dsh-restart) | 0 | 2026-10-27 | 2026-10-28 | Restart DeepSeek Harness from the sidebar or from an agent tool, with a watchdog, profile rollback and auto-continue |
| 264 | [machine202502/dsh-screenshoot](https://github.com/machine202502/dsh-screenshoot) | 0 | 2026-10-27 | 2026-10-28 | Screen and window capture for DeepSeek Harness: monitors, regions, background windows, thumbnails in chat |
| 265 | [machine202502/dsh-voice-ext](https://github.com/machine202502/dsh-voice-ext) | 0 | 2026-10-28 | 2026-10-28 | Local Russian speech recognition for DeepSeek Harness: GigaAM v3 via sherpa-onnx, fully offline |
| 266 | [MagneticLine/dsh-cyber-amber](https://github.com/MagneticLine/dsh-cyber-amber) | 0 | 2026-10-28 | 2026-10-28 | Download videos and create size-limited Gifski GIFs in DeepSeek Harness on Windows x64. |
| 267 | [MakeBlackSheepGreat/dsh-neural-workflow](https://github.com/MakeBlackSheepGreat/dsh-neural-workflow) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: neural-network research workflow constraints — stage graph, evidence ledger folded from the session log, and a Rust middleware that blocks out-of-order progress. |
| 268 | [MaoYouShiJie/dsh-providers-hub](https://github.com/MaoYouShiJie/dsh-providers-hub) | 0 | 2026-10-28 | 2026-10-28 | dsh-providers-hub fork with client CSS fix: account-card horizontal overflow (unclickable right-side buttons) |
| 269 | [MarkTina/dsh-activity-heat](https://github.com/MarkTina/dsh-activity-heat) | 0 | 2026-10-28 | 2026-10-28 | 管理DSH最近的活跃对话 |
| 270 | [MaximFedorovtoo/dsh-plugins](https://github.com/MaximFedorovtoo/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugins: API spend per project and screenshots as first-class input. |
| 271 | [MC0571/DSH-Plugin-Word-Atlas](https://github.com/MC0571/DSH-Plugin-Word-Atlas) | 0 | 2026-10-28 | 2026-10-28 | 基于开源项目 designfuchen/word-atlas（词光 · Word Atlas）的DeepSeek Harness插件 |
| 272 | [Menghuan1918/dsh-better-compact](https://github.com/Menghuan1918/dsh-better-compact) | 0 | 2026-10-27 | 2026-10-28 | Better compaction for DeepSeek Harness: native/goal/handoff modes, budget controls and visualization. |
| 273 | [michaelfeng/dsh-conversation-history](https://github.com/michaelfeng/dsh-conversation-history) | 0 | 2026-10-27 | 2026-10-28 | A conversation history and local search plugin for DeepSeek Harness. |
| 274 | [milkly909-code/dsh-plugin-starlight-protocol](https://github.com/milkly909-code/dsh-plugin-starlight-protocol) | 0 | 2026-10-26 | 2026-10-28 | 星轨协议 2077 (Starlight Protocol) — DeepSeek Harness 旗舰级综合外观系统：集成冷启动认证序列、赛博朋克 2077 HUD 终端主题、深空全景天体引擎与左上角战术侧边栏折叠总控 |
| 275 | [MinaMiKune/dsh-deepseek-usage-monitor](https://github.com/MinaMiKune/dsh-deepseek-usage-monitor) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: official DeepSeek account balance + Harness-observed token usage, with a sidebar panel, agent tool, alerts and local history. |
| 276 | [ming-a1/session-cleanup](https://github.com/ming-a1/session-cleanup) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: archive, restore, or permanently delete workspace sessions |
| 277 | [MoJIeAIGC/dsh-mojie-model-provider](https://github.com/MoJIeAIGC/dsh-mojie-model-provider) | 0 | 2026-10-20 | 2026-10-28 | 在deepseek-harness中，链接MojieAgentFlow的所有模型能力。 |
| 278 | [monteromartinchristian-blip/CMMComputerUse](https://github.com/monteromartinchristian-blip/CMMComputerUse) | 0 | 2026-10-28 | 2026-10-28 | Background computer use for DeepSeek Harness: a DeepSeek Harness plugin and signed macOS helper that observe and operate authorized apps without stealing focus or moving the cursor. |
| 279 | [moyudamowang/dsh-plugins](https://github.com/moyudamowang/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件与 skills 合集 by hdy — hover-index（代码符号悬停）与 struct-map（结构图）。Plugin &amp; skills collection for DeepSeek Harness. |
| 280 | [Mrliu12345/dsh-video-distill](https://github.com/Mrliu12345/dsh-video-distill) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件「视频蒸馏」：读目录里的视频（口播转写 + 关键帧 + 镜头切点），拆成结构模板并生成同款文案。 |
| 281 | [Muciya953/Muciya-DSH-macos-suite](https://github.com/Muciya953/Muciya-DSH-macos-suite) | 0 | 2026-10-28 | 2026-10-28 | Five installable DSH Web plugins: plugin library, skill library, appearance library, agent teams and usage stats. |
| 282 | [MuRanSea/dsh-mote-media](https://github.com/MuRanSea/dsh-mote-media) | 0 | 2026-10-28 | 2026-10-28 | 即梦式 mote 媒体创作台 · DeepSeek Harness 插件：多渠道路由的生图/生视频面板 + 智能体工具 |
| 283 | [MYiYang/dsh-win-bash](https://github.com/MYiYang/dsh-win-bash) | 0 | 2026-10-28 | 2026-10-28 | Git Bash shell provider for DeepSeek Harness on Windows: ctx.shell + bash tool composed beside the pwsh stack |
| 284 | [Naiqey-Star/dsh-aichat-bridge](https://github.com/Naiqey-Star/dsh-aichat-bridge) | 0 | 2026-10-28 | 2026-10-28 | OpenAI-compatible bridge from an in-game chat mod to a DeepSeek Harness session, with the mod persona and read-only file access. |
| 285 | [neil-ji/dsh-bili-watch-desktop](https://github.com/neil-ji/dsh-bili-watch-desktop) | 0 | 2026-10-28 | 2026-10-28 | DSH 桌面端优先的 B 站视频阅读插件（基于 Sacredbluedragon/dsh-bili-watch 重构）：侧栏面板、可信的安装进度、更安全的端点 |
| 286 | [neil-ji/dsh-plugin-agnes-image](https://github.com/neil-ji/dsh-plugin-agnes-image) | 0 | 2026-10-28 | 2026-10-28 | Unofficial DSH desktop plugin: text-to-image and image-to-image tools for the agent, backed by Agnes Image 2.5 Flash, with a Settings page that stores the API key in the DSH credential store. |
| 287 | [Nina0-0/dsh-persona-skill-kit](https://github.com/Nina0-0/dsh-persona-skill-kit) | 0 | 2026-10-28 | 2026-10-28 | Two DeepSeek Harness bundles: a global personality prompt with a Settings page, and a sidebar skill catalog with fuzzy search, hover descriptions, and one-click copy. |
| 288 | [nipheryang/dsh-folderead](https://github.com/nipheryang/dsh-folderead) | 0 | 2026-10-27 | 2026-10-28 | A right-sidebar file manager for DeepSeek Harness (DSH) · DeepSeek Harness（DSH）的右侧栏文件管理插件。 |
| 289 | [northstacker/dsh-battery-level-indicator](https://github.com/northstacker/dsh-battery-level-indicator) | 0 | 2026-10-28 | 2026-10-28 | Shows the host computer's battery level and charging state below the message composer, on every device. / 在输入框下方显示这台电脑的电量，任何设备打开看到的都是同一台电脑的电量。 |
| 290 | [northstacker/dsh-session-takeout](https://github.com/northstacker/dsh-session-takeout) | 0 | 2026-10-28 | 2026-10-28 | Packs one DeepSeek Harness conversation into a single ZIP, so you can carry it to another computer and keep talking there. / 把一段会话打包成单个 ZIP，换台电脑接着聊。 |
| 291 | [novaeth/dsh-workbench](https://github.com/novaeth/dsh-workbench) | 0 | 2026-10-23 | 2026-10-28 | An agent workbench for DeepSeek Harness — you shape the board, the agent does the work. |
| 292 | [Nozzi2455/majfish](https://github.com/Nozzi2455/majfish) | 0 | 2026-10-28 | 2026-10-28 | 和自家肥鱼打立直麻将的 DSH（DeepSeek Harness）插件，支持局域网联机 |
| 293 | [operatingtag/dsh-unclesam](https://github.com/operatingtag/dsh-unclesam) | 0 | 2026-10-28 | 2026-10-28 | \[ALPHA TESTING\] Replies cost nothing: a real browser answers through chat.deepseek.com instead of the billed API. One click switches between the paid API and Uncle Sam, the free web route, per conversation. Built for DeepSeek Harness. Pre-release - interfaces still move. |
| 294 | [OrderG-X/dsh-pages](https://github.com/OrderG-X/dsh-pages) | 0 | 2026-10-28 | 2026-10-28 | Pages for DeepSeek Harness (DSH): the model turns an answer into a live web page right inside the chat — follows light/dark, keeps versions, checks itself, exports. · DSH 页面：模型把回答做成一页，直接嵌在对话里能点能用。 |
| 295 | [P3NN4L/Tribot](https://github.com/P3NN4L/Tribot) | 0 | 2026-10-28 | 2026-10-28 | TriBot Bot 团队：一个 SKILL.md 装下五个专精角色（总管/研究员/工程师/管家/审稿人），选角色即换方法论与输出契约；零配置，长任务实测省 88% token。 |
| 296 | [Pabears/software-phase-theory](https://github.com/Pabears/software-phase-theory) | 0 | 2026-10-28 | 2026-10-28 | 软件物态学（Software Phase Theory）+ ask-shiheng 编码前架构分诊 Skill · CC BY-SA 4.0 |
| 297 | [pandarayc/dsh-eli5](https://github.com/pandarayc/dsh-eli5) | 0 | 2026-10-28 | 2026-10-28 | 讲人话（dsh-eli5）：DSH 划词解释插件 —— 用最直白的话说明白它是什么，必要时只读工作区，不写入主对话上下文 |
| 298 | [PatTianFang/dsh_workflow_fang](https://github.com/PatTianFang/dsh_workflow_fang) | 0 | 2026-10-28 | 2026-10-28 | DSH Workflow ported to DeepSeek Harness 0.2.1-rc.3 - reusable, governed, durable multi-agent workflows |
| 299 | [phoenixlucky/dsh-mcp-settings](https://github.com/phoenixlucky/dsh-mcp-settings) | 0 | 2026-10-26 | 2026-10-28 | Optional DeepSeek bundle for MCP server management, Chrome access, and Cognee memory settings in Web and Desktop profiles. |
| 300 | [plants13/dsh-touch](https://github.com/plants13/dsh-touch) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 触屏适配插件：长按会话/工作区行呼出触屏操作面板（归档、置顶、改名、新建会话、删除工作区） |
| 301 | [pointer-a/dsh-Desktop-floating-window](https://github.com/pointer-a/dsh-Desktop-floating-window) | 0 | 2026-10-28 | 2026-10-28 | DSH（DeepSeek Harness）桌面端插件：Windows 置顶任务浮窗，实时显示对话状态，就地确认工具授权与 ask_user_question |
| 302 | [prophetcrab/dsh-comfyui](https://github.com/prophetcrab/dsh-comfyui) | 0 | 2026-10-28 | 2026-10-28 | ComfyUI text-to-image for DeepSeek Harness: Krea 2 Turbo panel with artist-style illustration + LoRA presets, true pixel game assets, prompt optimization and a gallery |
| 303 | [ptilroko/dsh-tool-picker](https://github.com/ptilroko/dsh-tool-picker) | 0 | 2026-10-28 | 2026-10-28 | Per-session tool control for DeepSeek Harness — toggle which tools a conversation can call, plus a workspace-only Guest mode. |
| 304 | [pyyxzi/dsh-deepmoyu](https://github.com/pyyxzi/dsh-deepmoyu) | 0 | 2026-10-28 | 2026-10-28 | 🐋 DeepMoYu 鲸鱼摸鱼 — DSH 插件：一只鲸鱼娘替你逛 B站（读字幕、写日报、桌宠工作台、token 账本、学习记忆）。Fork of c1overzz/dsh-bili-scroll |
| 305 | [pzh-xsj/dsh-memory-with-soul](https://github.com/pzh-xsj/dsh-memory-with-soul) | 0 | 2026-10-28 | 2026-10-28 | DSH 宿主长期记忆插件：markdown + git + 分层索引 |
| 306 | [QDNBD/dsh-panel-pins](https://github.com/QDNBD/dsh-panel-pins) | 0 | 2026-10-28 | 2026-10-28 | Sidebar panel management for DeepSeek Harness: grouped panels launcher, persistent pin/unpin, compact footer, full Settings page. |
| 307 | [qianhaoq/qh-dsh-weixin](https://github.com/qianhaoq/qh-dsh-weixin) | 0 | 2026-10-27 | 2026-10-28 | DeepSeek Harness plugin for direct WeChat ClawBot messaging through the iLink bot API |
| 308 | [qiaoyuzhou/dsh-workspace-session-link](https://github.com/qiaoyuzhou/dsh-workspace-session-link) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: link a session from the current workspace in the composer |
| 309 | [qiesh-cn/dsh-huiyou](https://github.com/qiesh-cn/dsh-huiyou) | 0 | 2026-10-28 | 2026-10-28 | 洄游 · DSH 会话回收站：删除的会话可搜索、恢复、彻底删除 |
| 310 | [Qing45/dsh-body-clock](https://github.com/Qing45/dsh-body-clock) | 0 | 2026-10-28 | 2026-10-28 | A draggable floating window for DeepSeek Harness: random meals, water and standing reminders with a 3-second chime. |
| 311 | [qinu321/dsh-archive-viewer](https://github.com/qinu321/dsh-archive-viewer) | 0 | 2026-10-28 | 2026-10-28 | 已归档DSH（DeepSeek Harness）会话的只读查看器：不取消归档，就能浏览归档列表、阅读完整对话与工具调用。 |
| 312 | [qinu321/dsh-werewolf-dealer](https://github.com/qinu321/dsh-werewolf-dealer) | 0 | 2026-10-27 | 2026-10-28 | 多会话群聊 + 一夜狼人杀庄家 deepseek harness插件 |
| 313 | [qinyuan1017/dsh-nightwrite](https://github.com/qinyuan1017/dsh-nightwrite) | 0 | 2026-10-28 | 2026-10-28 | 长夜 · AI 主写的小说工作台 DSH 插件：驾驶舱 / 大纲 / 流水线 / 生产台 / 验收台 / 世界库 / 侦察 / 设置 |
| 314 | [Rakanrkk/dsh-sidebar-scroll](https://github.com/Rakanrkk/dsh-sidebar-scroll) | 0 | 2026-10-28 | 2026-10-28 | Shared scrolling for DeepSeek Harness sidebar navigation, projects, and conversations. |
| 315 | [redkiller79/dsh-libtv](https://github.com/redkiller79/dsh-libtv) | 0 | 2026-10-28 | 2026-10-28 | LibTV canvas and media tools for DeepSeek Harness, with three director skills and one-time QR authorization |
| 316 | [rentaoyan0628-collab/dsh-bili-live](https://github.com/rentaoyan0628-collab/dsh-bili-live) | 0 | 2026-10-27 | 2026-10-28 | DSH 插件：B站直播间弹幕（看/发/挂机/可选自动陪聊），进房与发弹幕都卡在人手里 |
| 317 | [ReWebaiyu/dsh-qq](https://github.com/ReWebaiyu/dsh-qq) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：在本机 QQ（NapCat / OneBot 11）上收发消息、群里自动接话，带网页管理面板 |
| 318 | [ReWebaiyu/dsh-qq-console](https://github.com/ReWebaiyu/dsh-qq-console) | 0 | 2026-10-28 | 2026-10-28 | dsh-qq 的源码备份与开发留档（插件安装与市场条目请看 ReWebaiyu/dsh-qq） |
| 319 | [roekdnd/dsh-hide-workspace](https://github.com/roekdnd/dsh-hide-workspace) | 0 | 2026-10-28 | 2026-10-28 | Hide workspaces you do not need right now from the DeepSeek Harness sidebar, without deleting them. Three-state filter, Ctrl+H, undo. Display-only. |
| 320 | [run666888/dsh-peak-hours](https://github.com/run666888/dsh-peak-hours) | 0 | 2026-10-26 | 2026-10-28 | Sidebar badge for DeepSeek peak-pricing windows: 24h schedule bar, now-cursor, countdown. |
| 321 | [ruqinhu/dsh-memory](https://github.com/ruqinhu/dsh-memory) | 0 | 2026-10-27 | 2026-10-28 | Durable agent memory plugin for DeepSeek Harness (DSH): whole-file injection, search, and bounded maintenance |
| 322 | [ruqinhu/dsh-weixin-link](https://github.com/ruqinhu/dsh-weixin-link) | 0 | 2026-10-27 | 2026-10-28 | Weixin iLink channel plugin for DeepSeek Harness (DSH): bidirectional send/receive with delivery receipts |
| 323 | [safroigor/dh_picker](https://github.com/safroigor/dh_picker) | 0 | 2026-10-27 | 2026-10-28 | Codex-style visual element picker for the DeepSeek Harness Desktop Browser — comment on page elements and send them to the agent as one request. |
| 324 | [scarf1985566475-cloud/dsh-voice](https://github.com/scarf1985566475-cloud/dsh-voice) | 0 | 2026-09-23 | 2026-10-28 | Local speech pipeline for DeepSeek Harness: on-device Qwen3-ASR transcription with auto language detection, live English→Chinese interpretation, crash-safe meeting records, Chinese minutes and Obsidian export (macOS / Apple Silicon). |
| 325 | [seanliii/dsh-plugin-legion](https://github.com/seanliii/dsh-plugin-legion) | 0 | 2026-10-28 | 2026-10-28 | Bring open-source capabilities into DeepSeek Harness and collaborate with your own Legion service. |
| 326 | [shipianl/emoflow-harness-ui](https://github.com/shipianl/emoflow-harness-ui) | 0 | 2026-10-28 | 2026-10-28 | EmoFlow local emotion trajectory and response guidance plugin for DeepSeek Harness |
| 327 | [SHUBBYDUBBY/dsh-fish-sonar](https://github.com/SHUBBYDUBBY/dsh-fish-sonar) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件 / DeepSeek Harness：给 B站评论区测「大肥鱼」浓度（只读） |
| 328 | [skyline66/dsh-desktop-clock](https://github.com/skyline66/dsh-desktop-clock) | 0 | 2026-10-28 | 2026-10-28 | A draggable floating clock for the DeepSeek Harness Web GUI with analog and digital faces, a focus timer, four themes, and persistent placement. |
| 329 | [SkyWingDN/dsh-fairy-zzz](https://github.com/SkyWingDN/dsh-fairy-zzz) | 0 | 2026-10-28 | 2026-10-28 | Unofficial performance-optimized edition of the Fairy III / Zenless Zone Zero H.D.D skin for DeepSeek Harness. Modified by SkyWingDN, based on AssassinVIX/fairy-zzz-plugin (MIT) and Chengzhibense/Fairy-DSH (Apache-2.0). |
| 330 | [slow-stack/baleen](https://github.com/slow-stack/baleen) | 0 | 2026-10-24 | 2026-10-28 | 信息源聚合 DSH 插件：定时摄取 RSS / B 站 / YouTube，读正文与字幕做本地预筛和三档判断，每轮出一份增量汇报。彻底不做平台互动。 |
| 331 | [sodaa-l/dsh-codex-usage](https://github.com/sodaa-l/dsh-codex-usage) | 0 | 2026-10-26 | 2026-10-28 | 在 DeepSeek Harness 中显示 Codex 的 5 小时与每周剩余额度 |
| 332 | [Song-812/dsh-plugins-song](https://github.com/Song-812/dsh-plugins-song) | 0 | 2026-10-28 | 2026-10-28 | Song 自制的 DSH 插件合集，持续更新。A collection of DSH plugins by Song. |
| 333 | [songrui111/dsh-token-frugal](https://github.com/songrui111/dsh-token-frugal) | 0 | 2026-10-28 | 2026-10-28 | Frugal tool layer for DeepSeek Harness: precise file reading and a self-serve tool catalog, so long sessions stop re-billing whole files and forgotten tools. |
| 334 | [SongZijianlove/dsh-phone-drop](https://github.com/SongZijianlove/dsh-phone-drop) | 0 | 2026-10-28 | 2026-10-28 | 局域网手机直传：电脑屏幕出二维码，手机扫码拍照/扫描直接落进电脑文件夹，不经过任何隧道。DSH 插件。 |
| 335 | [SOVLOOKUP/dsh-tunnel-preview](https://github.com/SOVLOOKUP/dsh-tunnel-preview) | 0 | 2026-10-28 | 2026-10-28 | Cloudflare Tunnel port preview for DeepSeek Harness |
| 336 | [statou666/dsh-miniflux](https://github.com/statou666/dsh-miniflux) | 0 | 2026-10-28 | 2026-10-28 | Miniflux plugin for the DSH Web GUI: AI daily digest, picks and per-feed EPUBs, with a sidebar settings panel |
| 337 | [Stautaffly/dsh-focus-mode](https://github.com/Stautaffly/dsh-focus-mode) | 0 | 2026-10-28 | 2026-10-28 | Persistent shell sessions and hybrid Native/PTC execution for DeepSeek Harness as an external plugin. |
| 338 | [stickyfinger7/dsh-quote-annotation](https://github.com/stickyfinger7/dsh-quote-annotation) | 0 | 2026-10-28 | 2026-10-28 | Quote conversation text with optional annotations and send it to the model as structured reference context in DeepSeek Harness (DSH). |
| 339 | [Stijnus/dsh-rev-eng](https://github.com/Stijnus/dsh-rev-eng) | 0 | 2026-10-28 | 2026-10-28 | Reverse engineer anything and build any Mac app: REA + BAMA agent skills packaged as a DeepSeek Harness plugin (23 skills, optional REA MCP server). |
| 340 | [Sun-0306/dsh-code-runner](https://github.com/Sun-0306/dsh-code-runner) | 0 | 2026-10-28 | 2026-10-28 | Run Python, R, Node.js and other scripts from a DSH sidebar panel, with streaming output. · 在 DSH 侧栏面板里直接运行 Python、R、Node.js 等脚本，并实时查看输出。 |
| 341 | [Sun-0306/dsh-context-summarizer](https://github.com/Sun-0306/dsh-context-summarizer) | 0 | 2026-10-28 | 2026-10-28 | One-click context summarization from the DSH sidebar: compress a long conversation into a durable summary and free up context. · 在 DSH 左侧栏一键归纳上下文，把过长的对话压成一段摘要并释放上下文占用。 |
| 342 | [Sun-0306/dsh-github-publisher](https://github.com/Sun-0306/dsh-github-publisher) | 0 | 2026-10-28 | 2026-10-28 | One-click GitHub publishing for local DSH plugins: fill in the metadata, prepare README/LICENSE/.gitignore/package.json, create the repo, commit, push, tag and release — from a left-sidebar page. · 一键把本地 DSH 插件发布到 GitHub：自动补全信息、建仓、提交、推送、打 tag 和 Release，左侧栏入口随开随用。 |
| 343 | [Sun-0306/dsh-task-clarifier](https://github.com/Sun-0306/dsh-task-clarifier) | 0 | 2026-10-28 | 2026-10-28 | Turn one sentence into a precise task brief through a short guided Q&amp;A. · 一句话变成精准任务书：左侧栏任务澄清器，少问几轮、少烧 token。 |
| 344 | [Sun-0306/dshmarket](https://github.com/Sun-0306/dshmarket) | 0 | 2026-10-28 | 2026-10-28 | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 |
| 345 | [sunChargedd/dsh-plugins](https://github.com/sunChargedd/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugins monorepo |
| 346 | [swimmwatch/dsh-tool-search](https://github.com/swimmwatch/dsh-tool-search) | 0 | 2026-10-28 | 2026-10-28 | Native tool search for DeepSeek Harness (DSH). Discover built-in, plugin and MCP tools on demand with BM25 or optional Ollama/OpenAI embeddings. |
| 347 | [Tan114CN/dsh-team-autopilot](https://github.com/Tan114CN/dsh-team-autopilot) | 0 | 2026-10-27 | 2026-10-28 | Deterministic auto-dispatch for DeepSeek Harness native Agent Teams: wake a member when a task becomes ready, reclaim the task when its owner stalls, and treat write-scope overlap as a soft lock at dispatch time. |
| 348 | [tang-bugu/dsh-connect-qwenwork](https://github.com/tang-bugu/dsh-connect-qwenwork) | 0 | 2026-10-28 | 2026-10-28 | 把千问办公（QwenWork）接入 DeepSeek Harness：读取本机已登录的会话，在 127.0.0.1 起一个 OpenAI 兼容回环桥，把 DSH 的模型请求翻译成千问办公的 ACP 会话协议。 |
| 349 | [Tarolcraze/dsh-day-memory](https://github.com/Tarolcraze/dsh-day-memory) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 的三级「日情节」长期记忆插件：一级一天一条（日期+标题+关键事件），二级当天概括，三级原始对话与图片副本；次日由子代理蒸馏，检索先关键词后模型下钻，常驻记忆需用户确认，带管理面板。 Day-episodic long-term memory for DSH. |
| 350 | [thynon/dsh-at-plugins](https://github.com/thynon/dsh-at-plugins) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：@ 一下就能选插件（系统/用户分组），会话按文件夹归类，分组标题可折叠 \| DeepSeek Harness plugin that @-mentions installed plugins |
| 351 | [tiankongshenchu/dsh-chaotang](https://github.com/tiankongshenchu/dsh-chaotang) | 0 | 2026-10-28 | 2026-10-28 | Visualize DSH agent teams as an imperial court. Cards, glowing links, live task scroll, context meter. A DSH plugin for DeepSeek Harness. |
| 352 | [Timur-Ziyangareev/llm-balance-widget](https://github.com/Timur-Ziyangareev/llm-balance-widget) | 0 | 2026-10-28 | 2026-10-28 | Per-user DeepSeek / OpenRouter API balance in a DeepSeek Harness widget. |
| 353 | [Treasure-hub-agent/dsh-whale-game](https://github.com/Treasure-hub-agent/dsh-whale-game) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件 · 大肥鱼游戏厅：一键起停本地 AI 游乐场，和你的 Agent 开一桌 |
| 354 | [ttkxyglj/dsh-data-sync](https://github.com/ttkxyglj/dsh-data-sync) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 数据同步插件：换新电脑时把配置/插件栈/长期记忆/技能打成快照推到私有 git 仓库，拉取时自动重映射绝对路径；支持快照校验、按天+保底 N 版的远端保留、定时备份与一键回滚。 |
| 355 | [TuWeiZhi/dsh-pet](https://github.com/TuWeiZhi/dsh-pet) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 桌面宠物插件 —— dsh-pet 增强 fork（碎碎念全本地语句池 / 气泡可收起 / 自动行为间隔 / 不出屏幕） |
| 356 | [tynacity/dsh-balance-display](https://github.com/tynacity/dsh-balance-display) | 0 | 2026-08-13 | 2026-10-28 | DeepSeek API balance overlay for DeepSeek Harness |
| 357 | [TYWIM/dsh-plugin-moyu](https://github.com/TYWIM/dsh-plugin-moyu) | 0 | 2026-10-28 | 2026-10-28 | 摸鲸鱼：面向 DeepSeek Harness 的摸鱼工具箱 |
| 358 | [UreMySunshine/dsh-next-sentence](https://github.com/UreMySunshine/dsh-next-sentence) | 0 | 2026-10-28 | 2026-10-28 | Next-prompt suggestions for DeepSeek Harness (desktop and dsh-tui) |
| 359 | [uugvkbvkdjbsdbvwxxl/dsh-archived-chats](https://github.com/uugvkbvkdjbsdbvwxxl/dsh-archived-chats) | 0 | 2026-10-28 | 2026-10-28 | Browse archived DSH sessions grouped by workspace in Settings, search them, restore one, or delete a session log for good. |
| 360 | [vaniawang/dsh-side-conversation](https://github.com/vaniawang/dsh-side-conversation) | 0 | 2026-10-28 | 2026-10-28 | Native side conversations for DeepSeek Harness: fork the active conversation into a sidebar session with live context, relay, and usage stats. |
| 361 | [vb2250158/dsh-skill-catalog-cache](https://github.com/vb2250158/dsh-skill-catalog-cache) | 0 | 2026-10-28 | 2026-10-28 | Shared watched skill catalogs and bounded discovery for DeepSeek Harness |
| 362 | [Venshell/dsh-session-dm](https://github.com/Venshell/dsh-session-dm) | 0 | 2026-10-26 | 2026-10-28 | Cross-session direct messages + top-level session creation for DeepSeek Harness (GPL-3.0) |
| 363 | [W-aPoint/dsh-plugin-permission-notify](https://github.com/W-aPoint/dsh-plugin-permission-notify) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness (dsh) plugin: make Auto review the default permission preset and raise native Windows toast notifications, with answer snippets and click-to-focus. |
| 364 | [w2018/dsh-session-notifier](https://github.com/w2018/dsh-session-notifier) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：监听会话里需要你动手的节点（任务完成、等待审批、弹窗提问、需要登录、报错、子任务结束），用系统通知提醒，点通知回到对应会话。 |
| 365 | [wangzef/dsh-usage-monitor](https://github.com/wangzef/dsh-usage-monitor) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness (DSH) 用量统计插件:每日 Token 柱状图、模型分布、调用明细、CSV/JSON 导出 \| Usage analytics plugin for DeepSeek Harness. DSH 0.2.x compatible fork of lanlandeli/dsh-usage-stats. |
| 366 | [warter666/dsh-compaction-fit](https://github.com/warter666/dsh-compaction-fit) | 0 | 2026-10-28 | 2026-10-28 | DSH compaction middleware: real-token prompt trimming, shrink-and-retry on prompt-too-long, and repair of pi-ai silent-overflow false positives. |
| 367 | [waterc07/dsh-background](https://github.com/waterc07/dsh-background) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 界面背景图插件：任意图片铺满整窗，侧边栏等大块表面自动半透明，支持选择/恢复默认/移除并持久保存。 |
| 368 | [waterc07/dsh-interaction-notify](https://github.com/waterc07/dsh-interaction-notify) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件：agent 提问/请求授权/计划批准时弹出 Windows 系统通知与提示音，点击通知回到窗口。 |
| 369 | [waterc07/dsh-thinking-zh](https://github.com/waterc07/dsh-thinking-zh) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件：把折叠状态的英文思考预览自动翻译为中文（host 端代理 + 浏览器端就地替换，LRU 与磁盘缓存）。 |
| 370 | [wchengk09/dsh-file-manager](https://github.com/wchengk09/dsh-file-manager) | 0 | 2026-10-28 | 2026-10-28 | Browser file manager for DeepSeek Harness workspaces: upload, download, zip, rename, delete and create folders from the Web GUI. |
| 371 | [weiw0923/dsh-composer-balance](https://github.com/weiw0923/dsh-composer-balance) | 0 | 2026-10-28 | 2026-10-28 | Minimal composer balance chip for DeepSeek Harness: account balance + current-session spend, in the host's own visual language. |
| 372 | [weiYe-exployer/dsh-model-picker-2level](https://github.com/weiYe-exployer/dsh-model-picker-2level) | 0 | 2026-10-28 | 2026-10-28 | A two-level model picker for DeepSeek Harness. |
| 373 | [WelY1/dsh-topbar](https://github.com/WelY1/dsh-topbar) | 0 | 2026-10-28 | 2026-10-28 | Per-session status chips in the GNOME top bar for DeepSeek Harness. |
| 374 | [WildPickledPepper/dsh-quick-find](https://github.com/WildPickledPepper/dsh-quick-find) | 0 | 2026-10-28 | 2026-10-28 | Ctrl+F in-conversation search for DeepSeek Harness |
| 375 | [Wldeinsamkeit/dsh-quota-hub](https://github.com/Wldeinsamkeit/dsh-quota-hub) | 0 | 2026-10-28 | 2026-10-28 | 额度中心 · Quota Hub for DeepSeek Harness: semicircle rainbow quota gauge (5h/weekly) in the DSH sidebar + companion macOS menu-bar app. DSH 可视化插件 |
| 376 | [Wldeinsamkeit/pixel-whale](https://github.com/Wldeinsamkeit/pixel-whale) | 0 | 2026-10-28 | 2026-10-28 | 像素小鲸鱼桌宠 · Pixel Whale: a pixel-art whale pet swimming in the DeepSeek Harness sidebar. DSH 可视化插件 |
| 377 | [wonderandyou/dsh-handoff](https://github.com/wonderandyou/dsh-handoff) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：每个工作区一份交接文档，会话结束自动写简短摘要，同工作区开新会话自动读回 |
| 378 | [WuHututu/dsh-side-chat](https://github.com/WuHututu/dsh-side-chat) | 0 | 2026-10-26 | 2026-10-28 | dsh 侧边临时对话 |
| 379 | [wumingzhiren-lab/dsh-identity-relay](https://github.com/wumingzhiren-lab/dsh-identity-relay) | 0 | 2026-10-28 | 2026-10-28 | ???? Identity Relay:??????????????????,???????,????????????--???/????/????,?????DeepSeek Harness (DSH) plugin. |
| 380 | [wwj-wwj1/dsh-device-link](https://github.com/wwj-wwj1/dsh-device-link) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 侧边栏「设备互联」插件：一键把本机 DSH 开放给局域网手机或经 EasyTier 组网的异地设备，关掉即收回。 |
| 381 | [wxy123-ctrl/dsh-archived-cleanup](https://github.com/wxy123-ctrl/dsh-archived-cleanup) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：批量彻底删除已归档会话的全部本地痕迹并自动清扫孤儿数据（非官方） |
| 382 | [wxy123-ctrl/dsh-desktop-notify](https://github.com/wxy123-ctrl/dsh-desktop-notify) | 0 | 2026-10-28 | 2026-10-28 | DSH 桌面端插件：会话完成/等待审批/出错时弹 Windows 原生通知，点击跳回对应会话（非官方） |
| 383 | [wxy123-ctrl/dsh-vision-tool](https://github.com/wxy123-ctrl/dsh-vision-tool) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：为纯文本模型注册「+识图」孪生路由与 recognize_images 工具，经视觉模型代看图（非官方） |
| 384 | [wxyz520/dsh-auto-lwf-sr](https://github.com/wxyz520/dsh-auto-lwf-sr) | 0 | 2026-10-28 | 2026-10-28 | 一个 DSH 右下角挂件：按 DeepSeek 实时状态、模型评分与 token 价格算出「变祖指数」，小难梁 → 梁祖六档。 |
| 385 | [wybiacx/dsh-remote-bash](https://github.com/wybiacx/dsh-remote-bash) | 0 | 2026-10-28 | 2026-10-28 | SSH command plugin for DeepSeek Harness (DSH): manage hosts and credentials in Settings, then run commands on one or many remote Linux/macOS hosts from the chat. TOFU host keys, dangerous-command approval, persistent shells and SFTP. |
| 386 | [WYR-233/dsh-memory-markdown](https://github.com/WYR-233/dsh-memory-markdown) | 0 | 2026-09-11 | 2026-10-28 | Read-only enhancer for a file-based (markdown + git) long-term memory library in DeepSeek Harness: built-in zero-dependency search, one-click library creation, governance dashboard, /memory command and a bundled skill. |
| 387 | [WYR-233/dsh-qq-memory](https://github.com/WYR-233/dsh-qq-memory) | 0 | 2026-10-28 | 2026-10-28 | QQ 端专用的小记忆：一叠 markdown，记一条 / 搜一句 / 删一条。零依赖，与主记忆库完全隔离——群友的胡话进不了主库。 |
| 388 | [wytyKen/dsh-leanary](https://github.com/wytyKen/dsh-leanary) | 0 | 2026-10-28 | 2026-10-28 | Leanary: a mathematical research plugin for DeepSeek Harness, with persistent research workflows and Lean verification. |
| 389 | [x01Jin/dsh-oc-go-usage](https://github.com/x01Jin/dsh-oc-go-usage) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin: per-session cost of the OpenCode Go subscription, read from the OpenCode console request log. |
| 390 | [XavierMarquis93/dsh-llm-chatgpt-plan](https://github.com/XavierMarquis93/dsh-llm-chatgpt-plan) | 0 | 2026-10-28 | 2026-10-28 | ChatGPT 订阅(premium plan)模型接入 DeepSeek Harness 主模型：官方 OAuth 动态注册 + Responses API，多账号、流式与工具调用。 |
| 391 | [xCube007/dsh-message-rewind](https://github.com/xCube007/dsh-message-rewind) | 0 | 2026-10-28 | 2026-10-28 | DSH plugin (DeepSeek Harness): edit sent messages and roll back the following turns, optionally restoring recorded file changes. 消息编辑与回滚插件。 |
| 392 | [XIANGDEEN/dsh-sidebar-video-player](https://github.com/XIANGDEEN/dsh-sidebar-video-player) | 0 | 2026-10-28 | 2026-10-28 | A right-Sidebar video player for DeepSeek Harness with live playback telemetry and deep MP4/MOV container inspection. |
| 393 | [xiaokang6/dsh-web-search-switch](https://github.com/xiaokang6/dsh-web-search-switch) | 0 | 2026-10-28 | 2026-10-28 | Switch DeepSeek Harness web_search between DeepSeek official and third-party search APIs (Ollama, Tavily, Brave, Exa, Serper, Bocha, Zhipu, SearXNG) from a settings page. |
| 394 | [xiaole3349/dsh-memory-gui](https://github.com/xiaole3349/dsh-memory-gui) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：记忆库与图书馆的浏览 GUI |
| 395 | [xiaole3349/dsh-pin](https://github.com/xiaole3349/dsh-pin) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：钉住重要事 + 图书馆只留工具标签 |
| 396 | [xiaole3349/dsh-token-flow](https://github.com/xiaole3349/dsh-token-flow) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：统计各群/私聊 token 消耗与流向 |
| 397 | [XiaoPb/dsh-mobile-layout](https://github.com/XiaoPb/dsh-mobile-layout) | 0 | 2026-10-28 | 2026-10-28 | DSH 手机竖屏自适应布局插件：抽屉式侧边栏与触控按键，非手机竖屏保持官方默认布局 |
| 398 | [xiaoxin3309/dsh-mini](https://github.com/xiaoxin3309/dsh-mini) | 0 | 2026-10-28 | 2026-10-28 | DSH mini window: pop the current session into an always-on-top WebView2 popout (screenshots, selection pill, global hotkeys) |
| 399 | [xinzhi-liu/dsh-archive-cleaner-panel](https://github.com/xinzhi-liu/dsh-archive-cleaner-panel) | 0 | 2026-10-28 | 2026-10-28 | A DSH Web panel that permanently deletes selected archived conversations in the default workspace. |
| 400 | [xlcg10086/dsh-compact-threshold](https://github.com/xlcg10086/dsh-compact-threshold) | 0 | 2026-10-28 | 2026-10-28 | Live context-compaction threshold control (20%-80%) for the DeepSeek Harness composer. \| DSH ???????????????????? |
| 401 | [xsllo425/dsh-agent-menu](https://github.com/xsllo425/dsh-agent-menu) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness context menus and native sidebar directory actions |
| 402 | [xuanyuanli/dsh-session-tariff](https://github.com/xuanyuanli/dsh-session-tariff) | 0 | 2026-10-26 | 2026-10-28 | 在输入框状态栏显示本会话估算花费，按高峰/空闲时段分档计价 · DSH plugin: estimated session cost in the composer status bar, split by DeepSeek peak/idle tariff periods |
| 403 | [xuguangyao/dsh-prompt-deck](https://github.com/xuguangyao/dsh-prompt-deck) | 0 | 2026-10-28 | 2026-10-28 | 把常用提示词做成 DSH 输入框上方的胶囊，一键填入 |
| 404 | [xxue-z/deepseek-harness-skin](https://github.com/xxue-z/deepseek-harness-skin) | 0 | 2026-10-28 | 2026-10-28 | 一个 DeepSeek Harness 桌面版插件，把 Codex-Skins 那套"壁纸 + 半透明面板"的主题系统搬到 Harness 上，并提供三件事： 主题管理界面：设置 →「主题皮肤」里的主题库、当前主题、壁纸可见度、删除、导出。 导入 Codex 主题：扫描本机 \`CodexDreamSkin\\themes\`，或导入任意主题文件夹 / 分发 ZIP。 AI 主题设计：用一句话（可配一张图）生成或改造一套主题，直接入库。 同时把能力暴露成 \`skin_theme\` 工具，智能体在对话里也能列出、导入、应用、生成皮肤。 |
| 405 | [xzn67/dsh-relationship-heart](https://github.com/xzn67/dsh-relationship-heart) | 0 | 2026-10-28 | 2026-10-28 | 给 DSH 加一句「最近像什么」：不量化的关系读数，没有进度条，允许说不清。 |
| 406 | [yangw3967-ctrl/dsh-smart-model](https://github.com/yangw3967-ctrl/dsh-smart-model) | 0 | 2026-10-28 | 2026-10-28 | Auto-switch DeepSeek Harness model and reasoning effort based on prompt complexity. |
| 407 | [yayuqianhuang/ajtc-chain-engine](https://github.com/yayuqianhuang/ajtc-chain-engine) | 0 | 2026-10-27 | 2026-10-28 | AJTC 自动化触发链引擎的 dsh 插件——用 iron-laws 硬规则、deletionGuard（删除/不可逆操作护栏）、verificationGate（声称完成前须有证据）为 Agent 提供"诚实 + 不破坏状态"的执行层治理；默认离线 mock，零外部依赖。 |
| 408 | [YeChenglin8888/harness2-lessons-bridge](https://github.com/YeChenglin8888/harness2-lessons-bridge) | 0 | 2026-10-28 | 2026-10-28 | Read pi-harness2 lessons from Pi and DeepSeek Harness |
| 409 | [yeerock/deepseek-harness-remote-control](https://github.com/yeerock/deepseek-harness-remote-control) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness Remote Control (DSH RC): reliable remote access for the DeepSeek Harness desktop app through one HTTPS/WSS tunnel — no WebRTC, no second client. |
| 410 | [yimengsuper2432/dsh-virtual-person](https://github.com/yimengsuper2432/dsh-virtual-person) | 0 | 2026-10-24 | 2026-10-28 | 这是一个DeepseekHarness的情感人格插件 |
| 411 | [yingchaoyi/dsh-plugins](https://github.com/yingchaoyi/dsh-plugins) | 0 | 2026-10-28 | 2026-10-28 | 给 DeepSeek Harness 写的小插件合集：三档记忆、表情包库。 |
| 412 | [yinghan-123/dsh-ask-first](https://github.com/yinghan-123/dsh-ask-first) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：让 Agent 在替用户做决定前先提问（先问后干）。三层机制：常驻提问纪律、连续变更未提问提醒、不可逆操作硬闸；自带设置页。 |
| 413 | [yinghan-123/dsh-quit](https://github.com/yinghan-123/dsh-quit) | 0 | 2026-10-28 | 2026-10-28 | DSHM 端侧退出插件：侧栏底部账户菜单注入「退出 dsh」，确认后直接关闭应用回桌面。 |
| 414 | [yinling2024/dsh-layered-memory](https://github.com/yinling2024/dsh-layered-memory) | 0 | 2026-10-28 | 2026-10-28 | 给 DeepSeek Harness 的四层记忆插件：核心只读、内隐可塑、外显长期可检索、短期自动遗忘。 |
| 415 | [YongjianWan/dsh-loadout](https://github.com/YongjianWan/dsh-loadout) | 0 | 2026-10-26 | 2026-10-28 | 按需加载工具组的 DSH 插件，保留常驻核心，其余工具按组默认隐藏，需要时一句话激活，确保工具调用的准确，安全，可靠，防止上下文失控 |
| 416 | [youchen-yc/dsh-security-judge](https://github.com/youchen-yc/dsh-security-judge) | 0 | 2026-10-28 | 2026-10-28 | 代码安全防御规则评审判官：自动识别做代码的会话，按《代码安全防御架构规则》强制评审并门禁，需要 1/2/多种架构推荐与冲突检查，发布含 SBOM 与签名。 |
| 417 | [youx123/dsh-shared-brain](https://github.com/youx123/dsh-shared-brain) | 0 | 2026-10-28 | 2026-10-28 | 共享大脑 · 让所有 DSH 会话共用同一套人设与记忆，按底线/认知/情感/本能/声音/网络/自动互动七层加权注入；表情包目录定时自动加载 |
| 418 | [yuanfuda/dsh-pdf-router](https://github.com/yuanfuda/dsh-pdf-router) | 0 | 2026-10-28 | 2026-10-28 | Routing PDF reader for DeepSeek Harness: text layer first, OCR for scans, and a layout-aware pass that returns tables as HTML and formulas as LaTeX. |
| 419 | [Yuanqs-pine/DSH-Transparent-Frosted](https://github.com/Yuanqs-pine/DSH-Transparent-Frosted) | 0 | 2026-10-28 | 2026-10-28 | Transparent frosted-glass theme for DeepSeek Harness · 透明磨砂主题：整页一张透明磨砂玻璃，滑杆连续调节磨砂↔全透明，设置页独立，含可选鲸鱼粒子；Release 下载 tgz，一条命令装到桌面端或 Web 端。 |
| 420 | [yue7ye/dsh-context-date-pruner](https://github.com/yue7ye/dsh-context-date-pruner) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: pick calendar dates and remove the finished turns of those dates from the model-visible context. The chat transcript and the append-only session log stay untouched. |
| 421 | [yueyexiayu/dsh-apitu](https://github.com/yueyexiayu/dsh-apitu) | 0 | 2026-10-28 | 2026-10-28 | DSH desktop plugin: local interactive architecture and flowchart diagrams with a bundled chart core. |
| 422 | [YujpVc/ppt-assistant](https://github.com/YujpVc/ppt-assistant) | 0 | 2026-10-28 | 2026-10-28 | PPT assistant agent preset and editable PowerPoint generation tools for DeepSeek Harness |
| 423 | [YukimuraSol/dsh-agents-section](https://github.com/YukimuraSol/dsh-agents-section) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: renders AGENTS.md as an independent system-prompt section, re-read on every prompt assembly instead of injected as user messages. |
| 424 | [YukimuraSol/dsh-cursor-modes](https://github.com/YukimuraSol/dsh-cursor-modes) | 0 | 2026-10-28 | 2026-10-28 | a deepseek harness plugin enabling cursor-like mode-switchers |
| 425 | [YusenZhang0601/dsh-balance-usage-dock](https://github.com/YusenZhang0601/dsh-balance-usage-dock) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness plugin: composer-dock balance that follows the selected provider, cumulative session cost with a per-model breakdown, 90-day usage heatmap, runtime-fetched pricing, no stored credentials. |
| 426 | [Yylx-R/dsh-console](https://github.com/Yylx-R/dsh-console) | 0 | 2026-10-27 | 2026-10-28 | 手机远程操作你的 DSH：电脑执行、手机指挥，自托管中继 |
| 427 | [Zcc50/dsh-session-groups](https://github.com/Zcc50/dsh-session-groups) | 0 | 2026-10-28 | 2026-10-28 | Session groups for DeepSeek Harness: split one workspace into unrelated project groups. |
| 428 | [zd5610982/dsh-prompt-enhancer-pro](https://github.com/zd5610982/dsh-prompt-enhancer-pro) | 0 | 2026-10-28 | 2026-10-28 | One-click prompt enhancement for DeepSeek Harness that runs on the model you already configured. No bundled third-party service, no outbound requests: your drafts never leave your own setup. |
| 429 | [zgj980644897/dsh-ui-we2](https://github.com/zgj980644897/dsh-ui-we2) | 0 | 2026-10-28 | 2026-10-28 | WE2 console: an off-white / ink hard-sci-fi skin for the DeepSeek Harness web UI (paper canvas, ink sidebar, typing status ticker, centred approval dialog, bezel HUD) |
| 430 | [Zhang-HL-1/dsh-ocg-money](https://github.com/Zhang-HL-1/dsh-ocg-money) | 0 | 2026-10-28 | 2026-10-28 | DeepSeek Harness 插件：侧边栏常驻显示 OpenCode Go 用量（滚动/每周/每月百分比），点击展开明细 |
| 431 | [ZhaoChongyan/dsh-no-sleep](https://github.com/ZhaoChongyan/dsh-no-sleep) | 0 | 2026-10-28 | 2026-10-28 | DSH运行的时候阻止电脑休眠 |
| 432 | [ZhiHui6/dsh-sound-notify](https://github.com/ZhiHui6/dsh-sound-notify) | 0 | 2026-10-28 | 2026-10-28 | Sound notifications for DeepSeek Harness: 9 built-in tones, custom audio, live preview. \| DeepSeek Harness 声音提示插件：九种内置音效，支持自定义音频与实时预览。 |
| 433 | [ZhouXuan-Yu/dsh-model-rotation](https://github.com/ZhouXuan-Yu/dsh-model-rotation) | 0 | 2026-10-28 | 2026-10-28 | Multi-source model rotation plugin for DeepSeek Harness — group models by source, order them (manual/auto), preset model + reasoning effort, auto-failover when quota runs out, and see which model actually answered. |
| 434 | [zhuiming2333/dsh-wechat-moments](https://github.com/zhuiming2333/dsh-wechat-moments) | 0 | 2026-10-28 | 2026-10-28 | 微信朋友圈插件 + 技能包，给 DeepSeek-Harness (DSH) 用：读时间线/看评论/发朋友圈/回评论，写走桌面 UI 自动化 |
| 435 | [zlqd123/dsh-timed-send](https://github.com/zlqd123/dsh-timed-send) | 0 | 2026-10-28 | 2026-10-28 | DSH 定时发送插件：选好时刻到点由 Host 真正发出。已有对话内排进当前对话，新会话界面每条各建一个；含 DeepSeek 峰谷时段（法定节假日/调休）一键选时。 |
| 436 | [zlxlsy666/dsh-opencode-session-fallback](https://github.com/zlxlsy666/dsh-opencode-session-fallback) | 0 | 2026-10-28 | 2026-10-28 | dsh opencode go开启自动审查 |
| 437 | [ZumiKua/dsh-junie-subagent](https://github.com/ZumiKua/dsh-junie-subagent) | 0 | 2026-10-28 | 2026-10-28 | Run the JetBrains Junie CLI as a one-shot DeepSeek Harness subagent over ACP, with a settings page for model and thinking depth. |
| 438 | [zuojinxin/dsh-annotation](https://github.com/zuojinxin/dsh-annotation) | 0 | 2026-10-28 | 2026-10-28 | DSH Web 选中批注插件：选中文字→批注→回车随消息发送，回复按批注编号逐条对照 \| DSH web selection-annotation plugin: annotate selected assistant text and send it with your message |
| 439 | [ZX-yiyuzheluoji/dsh-font-wheel](https://github.com/ZX-yiyuzheluoji/dsh-font-wheel) | 0 | 2026-10-28 | 2026-10-28 | Hold Ctrl + scroll wheel to change the workspace font size by 1px per notch — the same theme call as the built-in Ctrl+= / Ctrl+- shortcuts, so the value persists. ｜ 按住 Ctrl 滚动鼠标滚轮调整工作区字号，一格 1px，与自带快捷键走同一主题接口，改完会持久化。 |
| 440 | [zxz-feng/dsh-bili-scroll](https://github.com/zxz-feng/dsh-bili-scroll) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：每天替你刷一轮 B站（个人 fork：私信会话 / 按工具口径记额度 / 通用同源判断） |
| 441 | [zxz-feng/dsh-qq-bridge](https://github.com/zxz-feng/dsh-qq-bridge) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：接管一个真实 QQ 号（NapCat / OneBot v11）—— 私聊 + 群聊决策器、点歌、表情包、零 token 自检自愈 |
| 442 | [zxz-feng/dsh-telegram-bridge](https://github.com/zxz-feng/dsh-telegram-bridge) | 0 | 2026-10-28 | 2026-10-28 | DSH 插件：接管一个真实 Telegram 账号（用户态 MTProto）—— 分层人设、贴纸、防抖、轮询兜底、零 token 自检自愈 |
| 443 | [zy32566/dsh-music-dock](https://github.com/zy32566/dsh-music-dock) | 0 | 2026-10-27 | 2026-10-28 | Always-visible music dock in the DSH sidebar: cover, synced lyrics with translation, queue, search, your own NetEase playlists and the AI DJ. Companion plugin for @doitian/dsh-music. |
| 444 | [ZyRay233/dsh-tieba-scroll](https://github.com/ZyRay233/dsh-tieba-scroll) | 0 | 2026-10-28 | 2026-10-28 | Implement the function that allows dsh to automatically browse Tieba. |
| 445 | [ZyxQl-Ala/dsh-decay-memory](https://github.com/ZyxQl-Ala/dsh-decay-memory) | 0 | 2026-10-28 | 2026-10-28 | Decay-based agent memory for DeepSeek Harness: entries gain weight when mentioned, fade and shrink when forgotten, pinned entries never decay. Settings panel included. |
| 446 | [ZyxQl-Ala/dsh-rollover](https://github.com/ZyxQl-Ala/dsh-rollover) | 0 | 2026-10-28 | 2026-10-28 | Context rollover for DeepSeek Harness: auto-save a handoff before the context window fills and re-inject it once in the next session segment. Settings panel included. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 2384418321/dsh-integration-settings
- 263311487-ux/dsh-verify
- AIMarshallLee/dsh-teacher-preset
- BangBang-03/dsh-memory
- dragonestdwolf/dsh-token-workbench
- haozheou/dsh-exam-expert
- lcx19970714/dsh-limob-runner
- LingYuYo/dsh-qq-guard
- Liu-ty/dsh-balance-display
- MAOLEIJIN/dsh-mattpocock-skills
- milkly909-code/dsh-space-background
- neko461/genshen_TRPG
- Nicolas-One/dsh-dsml-reasoning-guard
- oceanbase/powercontext
- stlin256/dsh-pocket
- Ultronen/dsh-archived-chats
- Ultronen/dsh-liquid-glass
- vitkuz573/dsh-token-saver
- WYR-233/dsh-memory-lite
- xinspark/dsh-better-session-title
- xuanyuanli/dsh-plugin-session-cost
- xuelinzheng41-maker/dsh-academic-review
- yhPrime/deepseek-balance-floating
- yimengsuper2432/dsh-agent-personality
