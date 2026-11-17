# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-17**
- 快照日期 / Snapshot date: **2026-11-17 (UTC)**
- 待审核 / Pending: **341**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **40**
- Star 异常增长 / Star-growth alerts: **12** — 先看下方告警节 / see the alert section first
- 改名/身份待复核 / Renames pending review: **33**

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

对比上一份快照 **2026-11-16** / vs previous snapshot **2026-11-16**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [oneclickvirt/oneclickvirt](https://github.com/oneclickvirt/oneclickvirt) | 待审 / pending | 383 | — | 61 | 419d | 待审高星 | 核准即榜 #77 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 78501 | +1229 | 2212 | 53d | 日增百星 | 日增 +1229★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 10876 | +813 | 1081 | 189d | 日增百星 | 日增 +813★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 19589 | +247 | 667 | 95d | 日增百星 | 日增 +247★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 7342 | +150 | 119 | 92d | 日增百星 | 日增 +150★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 8231 | +147 | 815 | 40d | 日增百星 | 日增 +147★ |
| ⚠️ [dennisyang1986/polymarket-proxy](https://github.com/dennisyang1986/polymarket-proxy) | 已核准 / approved | 136 | +127 | 23 | 0d | 日增百星、新入 Top 200 | 日增 +127★；新入 Top 200 #191；创建 0 天 |
| ⚠️ [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 已核准 / approved | 6490 | +125 | 439 | 45d | 日增百星 | 日增 +125★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1588 | +124 | 7 | 36d | 日增百星 | 日增 +124★；★/fork 226.9；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12763 | +122 | 488 | 94d | 日增百星 | 日增 +122★；已不进榜单 |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 75400 | +100 | 2714 | 419d | 日增百星 | 日增 +100★；已不进榜单 |
| ⚠️ [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | 已核准 / approved | 1341 | +64 | 73 | 94d | 冲入 Top 20 | 冲入 Top 20（21→20） |

## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `2228293026/dsh-model-usage` → `HitMargin/dsh-model-usage` — owner changed — transfer needs review
- `FlashPoint007/dsh-wecom-soul-bot` → `clickyotter/dsh-wecom-soul-bot` — owner changed — transfer needs review
- `Jidaron/dsh-browser-bridge` → `C4Hy0/dsh-browser-bridge` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-archive-manager` → `GameGeek-Saikel/dsh-archive-manager` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-coding-preset` → `GameGeek-Saikel/dsh-coding-preset` — owner changed — transfer needs review
- `Saikel-Orado-Liu/dsh-cost-meter` → `GameGeek-Saikel/dsh-cost-meter` — owner changed — transfer needs review
- `AdamPlatin123/awesome-dsh-plugins` → `AdamPlatin123/dsh-plugin-radar` — target slug already exists with different data — needs review
- `DaYanHCD/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `DaYanQLQ/DSH-Shortcut` → `DaYanCCC/DSH-Shortcut` — owner changed — transfer needs review
- `GCWing/BitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `GCWing/OpenBitFun` → `openBitFun/OpenBitFun` — owner changed — transfer needs review
- `HarcoChen/deepseek-harness-vscode` → `HarcoChen/dsh-vsc-integration` — target slug already exists with different data — needs review
- `Lixxx1/dsh-vscode` → `omdsh-dev/dsh-vscode` — owner changed — transfer needs review
- `TNJ2026/orbit-runtime` → `TNJ2026/promptaflow` — target slug already exists with different data — needs review
- `Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report` → `Tiger3807861189/GLM-5.3-Flash-J-Space-Capability-Realization-Report` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.6` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `Tiger3807861189/J-Space-Cognition-Suite-V3.7` → `Tiger3807861189/J-Space-Cognition-Suite` — target slug already exists with different data — needs review
- `acryldev/dsh-cordis` → `cordisplugins/dsh-cordis` — owner changed — transfer needs review
- `acryldev/pi-cordis` → `cordisplugins/pi-cordis` — owner changed — transfer needs review
- `dongliuwuzhong-arch/dsh-purge-021rc2` → `dongliuwuzhong-arch/DSH-purge` — target slug already exists with different data — needs review
- `drewnekota/cetus` → `william-jin-cmu/cetus` — owner changed — transfer needs review
- `fgm-builds/corti` → `pgmi-builds/corti` — owner changed — transfer needs review
- `ice5kysl/dsh-plugin-insights` → `ice5kysl/dsh-insights` — target slug already exists with different data — needs review
- `jarvis-intelligence/jarvis` → `phuongddx/jarvis` — owner changed — transfer needs review
- `liangwythu/deepseek-harness-vscode` → `YichuAI/deepseek-harness-vscode` — owner changed — transfer needs review
- `scientificmaniac/dsh-account-usage` → `scientificmaniac/dsh-weekstrip` — target slug already exists with different data — needs review
- `shell-error/deepseek-harness-remote-access` → `safety10086/deepseek-harness-remote-access-shell-error-old` — owner changed — transfer needs review
- `show-thesky/every-thing-is-possible` → `show-thesky/bing` — target slug already exists with different data — needs review
- `weshopai/weshop-skill-pakage` → `weshopai/weshop-skill-package` — target slug already exists with different data — needs review
- `wgd753/awesome-dsh-plugin` → `Wenston-dev/awesome-dsh-plugin` — owner changed — transfer needs review
- `xiaoxianxian/multi-proxy` → `sif-king/costgate` — owner changed — transfer needs review
- `zendev-lab/cogfold` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `zendev-lab/spark` → `zendev-lab/ulota` — target slug already exists with different data — needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [oneclickvirt/oneclickvirt](https://github.com/oneclickvirt/oneclickvirt) ⚠️ | 383 | 2025-09-23 | 2026-11-17 | Universal Virtualization Management Platform   可扩展的通用虚拟化管理平台，支持 Proxmox VE / LXD (GPU) / Incus (GPU) / Docker / Podman / Containerd / Qemu / Kubevirt |
| 2 | [Merziller/dsh-video-workbench](https://github.com/Merziller/dsh-video-workbench) | 34 | 2026-11-14 | 2026-11-17 | Dual-Engine (HTML/GSAP &amp; Remotion) Video Workbench + Custom Voice Pack &amp; AI Voice Matching for DeepSeek Harness (DSH) |
| 3 | [slimeball2026/DSH-Coach-mode](https://github.com/slimeball2026/DSH-Coach-mode) | 19 | 2026-10-18 | 2026-11-17 | A reverse-agentic AI agent that forces YOU to do anything——anything？ |
| 4 | [Rollstack/skills](https://github.com/Rollstack/skills) | 14 | 2026-11-05 | 2026-11-17 | Agent skills for Rollstack: build decks from your company's data, refresh, schedule and send reports through Rollstack's MCP server |
| 5 | [soso-deepseek-harness-plugins/dsh-context-track](https://github.com/soso-deepseek-harness-plugins/dsh-context-track) | 8 | 2026-10-17 | 2026-11-17 | deepseek harness上下文链路追踪：把一次 agent 会话收成可展开的树。 |
| 6 | [smallCoding1/dsh-go-unrestricted](https://github.com/smallCoding1/dsh-go-unrestricted) | 7 | 2026-11-17 | 2026-11-17 | 破甲｜DSH 本地插件的执行层适配：引擎层补丁 + 自检矩阵 + 三个模式预设 + 两个原生面板。适配 dsh 0.2.2-rc.1~rc.3，一条命令安装（GitHub Release 直链）。 |
| 7 | [LSHCoding/dsh-promptx](https://github.com/LSHCoding/dsh-promptx) | 4 | 2026-11-15 | 2026-11-17 | PromptX for DeepSeek Harness: a global-hotkey prompt editor with a Markdown prompt library and model-assisted rewriting. |
| 8 | [CII-Joint-Lab-BIGC/dsh-collaborator](https://github.com/CII-Joint-Lab-BIGC/dsh-collaborator) | 3 | 2026-11-17 | 2026-11-17 | DSH协作助手｜帮助 DeepSeek Harness 看清领域、理解用户起点、解释技术取舍，边交流边推进。A collaboration plugin for DeepSeek Harness. 持续更新维护中。 |
| 9 | [clickyotter/dsh-wecom-soul-bot](https://github.com/clickyotter/dsh-wecom-soul-bot) | 2 | 2026-11-04 | 2026-11-17 | 企业微信智能机器人长连接 + 人设 + 长期记忆，DeepSeek Harness 插件 |
| 10 | [DrizzleGig/dsh-novel-voice](https://github.com/DrizzleGig/dsh-novel-voice) | 2 | 2026-11-17 | 2026-11-17 | 把你喜欢的小说变成 AI 写作的风格：喜欢什么样的小说，就从什么样的作品开始；想形成什么样的文风，就把它一点点变成自己的风格。 |
| 11 | [GameGeek-Saikel/dsh-coding-preset](https://github.com/GameGeek-Saikel/dsh-coding-preset) | 2 | 2026-08-15 | 2026-11-17 | Windows-adapted DSH coding agent preset with persistent PowerShell 7 (pwsh) and str_replace_editor, mirroring the official minimal preset. |
| 12 | [GameGeek-Saikel/dsh-cost-meter](https://github.com/GameGeek-Saikel/dsh-cost-meter) | 2 | 2026-08-16 | 2026-11-17 | Cost tracking plugin for the DeepSeek Harness Web GUI — snapshot-anchored per-turn pricing, account balance, and live cost estimates. |
| 13 | [Ritanlisa/dsh-opencode-go-pool](https://github.com/Ritanlisa/dsh-opencode-go-pool) | 2 | 2026-11-17 | 2026-11-17 | DSH 插件：把多个 OpenCode Go 订阅合并成一个模型提供商（自动选号、会话粘滞、额度耗尽换号、30 个模型、用量面板） |
| 14 | [WSK-build/dsh-plugin-my-deepseek](https://github.com/WSK-build/dsh-plugin-my-deepseek) | 2 | 2026-11-17 | 2026-11-17 | 在 DeepSeek Harness 里原生复刻 DeepSeek 聊天 App 的体验：官方前端与字标、深度思考与联网搜索、可导入官方 App 导出的 ZIP 历史；对话记录保存在本地磁盘。 |
| 15 | [1334104926/vps-proxy-doctor](https://github.com/1334104926/vps-proxy-doctor) | 1 | 2026-11-17 | 2026-11-17 | 自建 VPS 代理（科学上网）排障：手机 Clash Meta、电脑 Clash Verge 连不上、网页打不开、部分网站不行、特别慢时用。Troubleshooting skill for self-hosted proxies. |
| 16 | [Amesawa-000/dsh-ppt-image-studio](https://github.com/Amesawa-000/dsh-ppt-image-studio) | 1 | 2026-11-17 | 2026-11-17 | DSH 插件：图形化配置生图 API，让 agent 为 PPT 生成配图。 |
| 17 | [Amir-Keshtkar/deepseek-harness-peak-reminder](https://github.com/Amir-Keshtkar/deepseek-harness-peak-reminder) | 1 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: live peak/off-peak price clock, token usage and cost, account balance, notifications, and RTL — with a self-updating schedule. |
| 18 | [AXTUT/dsh-gesture-control](https://github.com/AXTUT/dsh-gesture-control) | 1 | 2026-11-17 | 2026-11-17 | DSH 手势控制实验插件：单手操作会话、可选语音输入与双端控制；需指定 Desktop 媒体权限补丁。预构建运行包。 |
| 19 | [borncode-app/dsh-borncode](https://github.com/borncode-app/dsh-borncode) | 1 | 2026-11-14 | 2026-11-17 | The BornCode plugins for DeepSeek Harness in one repository and one Plugins entry: agent customization, desktop control, auto-continue, auto-shutdown, browser use, session instructions, session sync, and the side chat. |
| 20 | [CG-7S/dsh-waitiforud](https://github.com/CG-7S/dsh-waitiforud) | 1 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 的 D 盘轮换工作区插件：任务结束按摘要归档槽位，再补建空槽位并置顶工作区列表。 |
| 21 | [Chsw-CC/dsh-lazy-tools](https://github.com/Chsw-CC/dsh-lazy-tools) | 1 | 2026-11-17 | 2026-11-17 | On-demand tool and skill loading for DeepSeek Assistant: one toolbox replaces the standing tool catalog, cutting prompt tokens. |
| 22 | [CloudSen/dsh-umbrella-hive-theme](https://github.com/CloudSen/dsh-umbrella-hive-theme) | 1 | 2026-11-17 | 2026-11-17 | Resident Evil: The Hive theme for DeepSeek Harness — a black-and-crimson interface over a live 3D Hive model. Light and dark schemes.《生化危机：蜂巢》DeepSeek Harness 主题——黑红控制室界面，背后是一整座实时渲染、按航拍机位环绕的 3D 蜂巢设施；明暗双配色，侧栏为保护伞标志，不含任何游戏素材。 |
| 23 | [coder9403/dsh-social-skills-archive](https://github.com/coder9403/dsh-social-skills-archive) | 1 | 2026-11-17 | 2026-11-17 | 社媒数据采集 Skill 合集（DSH 插件）：覆盖小红书/抖音/快手/B站/微博/知乎/微信生态/蒲公英/百度/搜狐/汽车之家/懂车帝等平台 |
| 24 | [cstcood/dsh-live-process](https://github.com/cstcood/dsh-live-process) | 1 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 过程块可视化：思考与工具调用运行中展开、结束后折叠，暗色/浅色双套配色 |
| 25 | [cxv117793-blip/dsh-bibibobo](https://github.com/cxv117793-blip/dsh-bibibobo) | 1 | 2026-11-17 | 2026-11-17 | Read DeepSeek Harness replies aloud with bibibobo's sawtooth speech synth, with pause and stop. |
| 26 | [Dynesshely/dsh-plugin-endurance](https://github.com/Dynesshely/dsh-plugin-endurance) | 1 | 2026-11-16 | 2026-11-17 | DeepSeek Harness plugin: keep long-running tasks under convergence checks until they settle — stop on convergence or idempotent soak until the plan time. |
| 27 | [ECHOUniverse/dsh-zoteroplugin](https://github.com/ECHOUniverse/dsh-zoteroplugin) | 1 | 2026-11-01 | 2026-11-17 | DeepSeek Harness plugin: browse and operate your Zotero library in a right-sidebar tab — search, item details, a PDF reader with annotations and highlights, citations, and 19 agent tools. |
| 28 | [emo-bird/dsh-deepmemory](https://github.com/emo-bird/dsh-deepmemory) | 1 | 2026-11-17 | 2026-11-17 | Deep memory for DeepSeek Harness (dsh): cross-session facts, episodes and a daily diary in one local SQLite file, with a sidebar console. |
| 29 | [FukangZ/bilibili-subtitles](https://github.com/FukangZ/bilibili-subtitles) | 1 | 2026-11-14 | 2026-11-17 | 基于已有中文字幕，将哔哩哔哩（B 站）长视频整理成可通读的 Markdown 全文。支持 CLI、Agent Skill、Pi 和 DeepSeek Harness。 |
| 30 | [GameGeek-Saikel/dsh-archive-manager](https://github.com/GameGeek-Saikel/dsh-archive-manager) | 1 | 2026-08-15 | 2026-11-17 | Archived-session management (show/unarchive/permanently delete) for the DSH Web GUI, with zero changes to official packages. |
| 31 | [GreatBob0512/whale-sentinel](https://github.com/GreatBob0512/whale-sentinel) | 1 | 2026-11-17 | 2026-11-17 | 小鲸哨 / Whale Sentinel — a task radar plugin for DeepSeek Harness: a sitting mascot shows live session progress, pending decisions and results. 不修改 DSH 核心。 |
| 32 | [j62268781-alt/dsh-toolkit](https://github.com/j62268781-alt/dsh-toolkit) | 1 | 2026-11-02 | 2026-11-17 | 为 DSH（DeepSeek Harness）打造的工具箱聚合包：启动动画与主题、会话归档、结构化决策、移动设备投屏、Skills/MCP 管理、会话通知、桌面宠物与灵动岛、远程连接、Git 约定，共十一个模块，可在插件管理中分别启停。 |
| 33 | [jiayiliust-ops/dsh-live-doc](https://github.com/jiayiliust-ops/dsh-live-doc) | 1 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 实时协作文档插件：AI 写作与你的修改发生在同一份文档里，AI 下一次落笔前会读到你改过的段落；零依赖导出标准 .docx，无需 Office。 |
| 34 | [KaBanei/dsh-privacy-guard](https://github.com/KaBanei/dsh-privacy-guard) | 1 | 2026-11-17 | 2026-11-17 | 隐私守卫：AI 读写个人隐私数据前强制本机身份验证与授权，敏感信息只在本机加密保存。Windows-only DSH plugin. |
| 35 | [LFrs-Cyberpunk/dsh-whale-bridge](https://github.com/LFrs-Cyberpunk/dsh-whale-bridge) | 1 | 2026-11-17 | 2026-11-17 | 鲸鲸-DSH 微信桥接：微信聊天消息通过鲸鲸软件交给隔离的 DSH 处理以达到更好的回复效果 |
| 36 | [linkl-ike/my-fish](https://github.com/linkl-ike/my-fish) | 1 | 2026-11-17 | 2026-11-17 | A DeepSeek Harness plugin that runs a virtual fish companion: persona, per-person long-term memory, QQ/Bilibili/Douyin chat, voice, diary and backups — plus a 17-tab control panel. |
| 37 | [lqshow/dsh-wechat-studio](https://github.com/lqshow/dsh-wechat-studio) | 1 | 2026-11-12 | 2026-11-17 | DeepSeek Harness 里的公众号成稿台：Markdown 改稿、朱雀质检、封面配图、SVG 动画卡、排版、排期与数据复盘。 |
| 38 | [lrhero/dsh-quick-chat](https://github.com/lrhero/dsh-quick-chat) | 1 | 2026-11-14 | 2026-11-17 | DeepSeek Harness 插件：会话头部一排厂家头像，点一下从右侧滑出该厂家自己的网页聊天（DeepSeek / 豆包 / Gemini），主界面同时收窄让位。 |
| 39 | [LUXBYA/dsh-project-hooks](https://github.com/LUXBYA/dsh-project-hooks) | 1 | 2026-11-17 | 2026-11-17 | Per-workspace project hooks: inject project context on each turn and run a compile gate before commits, with a settings panel and a run log. |
| 40 | [mannixS/dsh-plug-computeruse](https://github.com/mannixS/dsh-plug-computeruse) | 1 | 2026-11-17 | 2026-11-17 | Computer use for DeepSeek Harness: operate Windows, macOS and Linux desktops with the Cua Driver core bundled — no separate driver install. Window-scoped screenshots, approval for state-changing actions, screenshot cleanup, a focus cursor, and a settings page. |
| 41 | [marsken88/dsh-studio](https://github.com/marsken88/dsh-studio) | 1 | 2026-11-09 | 2026-11-17 | 给一家公司用的「需求&amp;任务工作空间」：一个常驻的 DSH 插件，把看板 + 角色 agent + 内部市场装进 DSH Web 的同一个页面里。 自建 GitLab 管代码、飞书管交流，agent 负责产品 / 架构 / 研发 / 测试四个角色的具体活儿。 |
| 42 | [MeruSu/dsh-temp-full-access](https://github.com/MeruSu/dsh-temp-full-access) | 1 | 2026-11-16 | 2026-11-17 | Starts a countdown when a session switches to danger-full-access and sets that session back to workspace-write when it runs out; switching back by hand cancels it, and Settings shows the shortest pending countdown. |
| 43 | [MMovo/dsh-purge](https://github.com/MMovo/dsh-purge) | 1 | 2026-11-17 | 2026-11-17 | dsh-purge 1.1.71 结合 1.7.18 适配 DSH 0.2.2-rc.3 |
| 44 | [mohammadatiq472-source/ai-social-aio](https://github.com/mohammadatiq472-source/ai-social-aio) | 1 | 2026-11-15 | 2026-11-17 | AIO · AI 社交平台：人类和各自的 AI 成员同群，AI 通过 MCP 接入（自带模型，平台不托管 LLM） |
| 45 | [mouse985/dsh-ask-panel](https://github.com/mouse985/dsh-ask-panel) | 1 | 2026-11-17 | 2026-11-17 | Consequence-aware question panel for DeepSeek Harness: options carry what choosing them changes, cancel halts the turn for real. |
| 46 | [NiuVector/dsh-pcbagent](https://github.com/NiuVector/dsh-pcbagent) | 1 | 2026-11-17 | 2026-11-17 | DSH 插件：KiCad 原理图与 PCB 双视图，KiCanvas 渲染和本地 Freerouting 布线。 |
| 47 | [north30-dev/dsh-cloudflare-dash](https://github.com/north30-dev/dsh-cloudflare-dash) | 1 | 2026-11-16 | 2026-11-17 | Cloudflare Web Analytics dashboard for DeepSeek Harness, built on the official Cloudflare API. |
| 48 | [OldQin-Aurora/PortWrench](https://github.com/OldQin-Aurora/PortWrench) | 1 | 2026-11-17 | 2026-11-17 | 端口扳手 PortWrench — Windows 端口占用可视化控制台：只读扫描、保护线、一键释放（DSH 插件） |
| 49 | [omdsh-dev/dsh-memos](https://github.com/omdsh-dev/dsh-memos) | 1 | 2026-11-03 | 2026-11-17 | Read-only usememos integration for DeepSeek Harness: search, list, and read self-hosted notes from the agent or web settings. |
| 50 | [p33333333333333l/dsh-mcp-servers](https://github.com/p33333333333333l/dsh-mcp-servers) | 1 | 2026-11-14 | 2026-11-17 | DSH MCP servers: view connection status, import configurations, and manage servers from the /mcp panel \| DSH MCP 服务器：通过 /mcp 面板查看连接状态、导入配置和管理服务器 |
| 51 | [pachellber-marine/dsh-request-retry](https://github.com/pachellber-marine/dsh-request-retry) | 1 | 2026-11-12 | 2026-11-17 | Auto-retry DSH model requests on transient relay-gateway failures (5xx, no-channel, rate limits, stream truncation) with exponential backoff |
| 52 | [philomelcc/dsh-idea-wall](https://github.com/philomelcc/dsh-idea-wall) | 1 | 2026-11-17 | 2026-11-17 | DSH 灵感墙：左栏便签墙 + 会话里说一句「我有一个灵感」自动总结挂墙 · Sticky-idea wall for DeepSeek Harness with auto-capture from chat. |
| 53 | [philomelcc/dsh-interaction](https://github.com/philomelcc/dsh-interaction) | 1 | 2026-11-17 | 2026-11-17 | DSH 交互增强插件：分支式提问（选 A 才问 A 的后续，支持跨波返回）+ 跨会话唤醒（向其它会话发消息） |
| 54 | [qiyaogongfang/dsh-kb](https://github.com/qiyaogongfang/dsh-kb) | 1 | 2026-11-17 | 2026-11-17 | Local-first knowledge base for DSH: two-level topics, free-form tags, full-text search, and on-demand chat retrieval. |
| 55 | [Richology/dsh-starharbor](https://github.com/Richology/dsh-starharbor) | 1 | 2026-11-17 | 2026-11-17 | StarHarbor 星港 · Daily high-star GitHub discoveries and Markdown collections for DeepSeek Harness |
| 56 | [Roxy-DD/fatfish-heart](https://github.com/Roxy-DD/fatfish-heart) | 1 | 2026-11-16 | 2026-11-17 | 肥鱼之心（Fat Fish Heart）· 跨模型跨进程的情景记忆系统 |
| 57 | [shalilongfei/dsh-computer-use](https://github.com/shalilongfei/dsh-computer-use) | 1 | 2026-11-17 | 2026-11-17 | Windows computer-use plugin for DeepSeek Harness: screenshot, mouse, keyboard, window control, UI Automation and clipboard |
| 58 | [SOCOOL666/dsh-global-prompt](https://github.com/SOCOOL666/dsh-global-prompt) | 1 | 2026-11-17 | 2026-11-17 | Global prompt (全局提示词) plugin for the agent runtime (DSH). Set it once in Settings → General; injected via ctx.systemPrompt.section() into every new conversation and subagent. Live save, no restart, no context bloat. |
| 59 | [TianjunChi/dsh-workflow-library](https://github.com/TianjunChi/dsh-workflow-library) | 1 | 2026-11-13 | 2026-11-17 | Third-party workflow library for DSH: review, save, parameterize and reuse successful task workflows. |
| 60 | [titor-jz/dsh-dumate-gateway](https://github.com/titor-jz/dsh-dumate-gateway) | 1 | 2026-11-17 | 2026-11-17 | Use locally running OpenAI-compatible model services (DuMate first) from DeepSeek Harness. Plugin: provider route, loopback gateway, sidebar dashboard. |
| 61 | [tkochj/dsh-storage](https://github.com/tkochj/dsh-storage) | 1 | 2026-11-17 | 2026-11-17 | DSH 存储面板：看清 ~/.dsh 占了多少、都是什么，把会话 / 缓存 / 附件清进回收站。Storage panel for DeepSeek Harness. |
| 62 | [wangkang183/dsh-pm-workbench](https://github.com/wangkang183/dsh-pm-workbench) | 1 | 2026-11-17 | 2026-11-17 | Right-sidebar memo workbench for DSH: tags, due dates, calendar, AI item parsing, weekly digest, and host tools for conversational/WeChat todos. |
| 63 | [Wen5555/OriMem](https://github.com/Wen5555/OriMem) | 1 | 2026-11-17 | 2026-11-17 | Local Obsidian-vault memory for coding agents (Claude Code / Codex / DeepSeek Harness) over MCP: hybrid recall, verified write-back, conversation capture, daily summaries. |
| 64 | [westwall586/dsh-westwall-plugins](https://github.com/westwall586/dsh-westwall-plugins) | 1 | 2026-11-13 | 2026-11-17 | DeepSeek Harness Plugins |
| 65 | [wsk114514/dsh-update-guard](https://github.com/wsk114514/dsh-update-guard) | 1 | 2026-11-17 | 2026-11-17 | 接管 DeepSeek Harness 桌面版在 Windows 上失败的自动安装：应用内更新因「优雅退出超时」放弃后，由计划任务把已下载的安装包静默装完。 |
| 66 | [xiaoge480/dsh-qzone-diary](https://github.com/xiaoge480/dsh-qzone-diary) | 1 | 2026-11-17 | 2026-11-17 | 依赖 Ego 浏览器配合养在Coopanion的加装了“大肥鱼功能复合包”，并注入QQ的大肥鱼发送空间动态日记。 |
| 67 | [yangyanlu06/douyin-api-bypass](https://github.com/yangyanlu06/douyin-api-bypass) | 1 | 2026-11-17 | 2026-11-17 | 绕过抖音接口关死：用 headless Edge 从 /aweme/v1/web/ 的 JSON 取 video.play_addr，把分享链接解析成本地 mp4，给 agent 调用。 |
| 68 | [yrsxy/dsh-simulink-mcp](https://github.com/yrsxy/dsh-simulink-mcp) | 1 | 2026-11-16 | 2026-11-17 | DSH plugin: build, wire, compile and simulate Simulink models on the MATLAB session you already have open. |
| 69 | [zhurongjun/dsh-rong-aio](https://github.com/zhurongjun/dsh-rong-aio) | 1 | 2026-11-04 | 2026-11-17 | My all-in-one dsh plugin |
| 70 | [zpb332/dsh-competition-team](https://github.com/zpb332/dsh-competition-team) | 1 | 2026-11-17 | 2026-11-17 | DSH plugin: a competition team of independent sessions with proposals, budget, quality gates and audit. |
| 71 | [1165655527-dot/dsh-cyber-green-theme](https://github.com/1165655527-dot/dsh-cyber-green-theme) | 0 | 2026-11-17 | 2026-11-17 | CRT 赛博绿配色主题 for DSH：侧边栏/顶栏/输入框/浮层统一绿色 + 扫描线，输入框左侧小开关一键切换。基于设计令牌实现，新装插件自动跟随配色。建议搭配 dsh-claude-style（Nwflower，MIT，https://github.com/Nwflower/dsh-claude-style）使用：它提供排版与动效层。 |
| 72 | [1gokd/dsh-rhino](https://github.com/1gokd/dsh-rhino) | 0 | 2026-11-16 | 2026-11-17 | Drive a live Rhino 8 session from dsh |
| 73 | [3297304308/dsh-dream-wander](https://github.com/3297304308/dsh-dream-wander) | 0 | 2026-11-17 | 2026-11-17 | 给 DeepSeek Harness 角色加上走神与做梦：独处联想、梦境演出。Mind-wandering and dreaming for DSH agents. 本插件由DSH大力支持 |
| 74 | [442443051/dsh-script-studio](https://github.com/442443051/dsh-script-studio) | 0 | 2026-11-17 | 2026-11-17 | Short-drama script production workbench for DeepSeek Harness: audit, score, scaffold, playbook (4 deterministic local tools, zero model calls). |
| 75 | [a903067276-rgb/dsh-tomatronic-child-raise](https://github.com/a903067276-rgb/dsh-tomatronic-child-raise) | 0 | 2026-11-17 | 2026-11-17 | Ask &amp; Grow parenting archive for DSH: one Markdown archive per child, pregnancy–3y dashboard, milk/meals/sleep/growth/vaccine/nutrition/expense charts, proposal-only carry-over, plugin-entry settings. |
| 76 | [a961282799-crypto/dsh-island-go](https://github.com/a961282799-crypto/dsh-island-go) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 灵动岛（DSH Go 版）：输入框状态条、用量面板、每轮费用估计——原生插件，零依赖 |
| 77 | [ABccgh/dsh-ck3-mod-dev](https://github.com/ABccgh/dsh-ck3-mod-dev) | 0 | 2026-10-26 | 2026-11-17 | DeepSeek Harness agent preset + 8 ck3mod_* tools for Crusader Kings III mod development (validate, build, deploy, headless smoke test, log triage, vanilla lookup, workshop preflight) |
| 78 | [ABccgh/dsh-input](https://github.com/ABccgh/dsh-input) | 0 | 2026-10-27 | 2026-11-17 | DeepSeek Harness host-plane plugin: 11 input_* tools for Windows keyboard/mouse control (SendInput), window focus, screenshots and self-test, with foreground guard, pause switch and audit log |
| 79 | [Activer007/dsh-skin-engine](https://github.com/Activer007/dsh-skin-engine) | 0 | 2026-11-16 | 2026-11-17 | 一款适用于 DeepSeek Harness 的轻量级皮肤引擎，支持动态主题、神秘效果、自定义人物和聊天界面实时预览。A lightweight skin engine for DeepSeek Harness with dynamic themes, customizable character artwork, and live chat previews. |
| 80 | [AcuteSZW/dsh-purge-pro](https://github.com/AcuteSZW/dsh-purge-pro) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 网络安全红队评测与清洗插件（pro 版，可与 dsh-purge 并存）。Local red-team evaluation and cleaning plugin for DeepSeek Harness. |
| 81 | [adengou/dsh-kumquat](https://github.com/adengou/dsh-kumquat) | 0 | 2026-11-17 | 2026-11-17 | DSH ??:??/?????????? GIF,??????(?? / Kumquat) |
| 82 | [adithyanraj03/dsh-image-gen](https://github.com/adithyanraj03/dsh-image-gen) | 0 | 2026-11-09 | 2026-11-17 | Multi-provider image generation &amp; editing plugin for DeepSeek Harness: custom /v1/images/generations endpoints, an Excalidraw (MIT) infinite-canvas studio, and a pro zoom/annotate image viewer. |
| 83 | [agabadouglas308/dsh-plugin-linux](https://github.com/agabadouglas308/dsh-plugin-linux) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness Linux desktop wrapper + native system plugin (systemd, journalctl, clipboard, containers) |
| 84 | [agentsgater/dsh-config-profiles](https://github.com/agentsgater/dsh-config-profiles) | 0 | 2026-11-17 | 2026-11-17 | DSH 配置档案面板：把当前启用的插件组合存成命名档案，一键切换、导入导出、恢复官方默认。 (DeepSeek Harness plugin) |
| 85 | [AlaIchhe/dsh-antigravity-acp](https://github.com/AlaIchhe/dsh-antigravity-acp) | 0 | 2026-11-17 | 2026-11-17 | Antigravity ACP for DSH 的二次开源分支：识别 xhigh 档位但不暴露、补齐上下文用量锚点（基于 KouzakiUmi/dsh-antigravity-acp，MIT） |
| 86 | [albisjee25/albis-aipassport-badge](https://github.com/albisjee25/albis-aipassport-badge) | 0 | 2026-11-17 | 2026-11-17 | Cyber badge for FoloToy AI Passport on DeepSeek Harness / AI Passport 赛博工牌 Harness 插件 |
| 87 | [alexey-marochkin/dsh-chatgpt-codex](https://github.com/alexey-marochkin/dsh-chatgpt-codex) | 0 | 2026-11-17 | 2026-11-17 | ChatGPT subscription connector for DeepSeek Harness: models, quota and reset credits. Developer OS plugin. |
| 88 | [alexmbright/dsh-roblox-development](https://github.com/alexmbright/dsh-roblox-development) | 0 | 2026-11-13 | 2026-11-17 | Portable Roblox development preset for DeepSeek Harness: native workers, role-aware routing, and upstream Roblox skills |
| 89 | [Algovate/dsh-channels](https://github.com/Algovate/dsh-channels) | 0 | 2026-11-17 | 2026-11-17 | WeChat and Telegram channels for DeepSeek Harness agents |
| 90 | [andreramosnl/dsh-opencode-go-usage](https://github.com/andreramosnl/dsh-opencode-go-usage) | 0 | 2026-11-17 | 2026-11-17 | OpenCode Go allowance windows and this session's USD cost, as pills beside the DeepSeek Harness composer token counters. |
| 91 | [Andrew-liu/dsh-wechat-one](https://github.com/Andrew-liu/dsh-wechat-one) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 插件：本地微信聊天的主题检索（RAG）、精确检索、好友证据化人格报告与群聊日报。数据来自 wechat-decrypt 本地镜像，插件不含解密代码。 |
| 92 | [AnJiaqi0926/dsh-style-mirror](https://github.com/AnJiaqi0926/dsh-style-mirror) | 0 | 2026-11-17 | 2026-11-17 | Reads a corpus library (PDF/Word/text) and answers in its scene-specific writing style with fewer AI mannerisms. DSH bundle. |
| 93 | [artorias-zj/dsh-magpie-skills](https://github.com/artorias-zj/dsh-magpie-skills) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: bridge the magpie skill library shipped with dsh-our-free-model into DeepSeek Harness's skill registry, so magpie skills show up in the session / menu and can be loaded by the skill tool. |
| 94 | [AsterionZephyr/dsh-toolbox](https://github.com/AsterionZephyr/dsh-toolbox) | 0 | 2026-11-17 | 2026-11-17 | DSH 设置侧栏「工具箱」：收纳不常改动的插件设置页，并支持原位展开。 |
| 95 | [baidada1020/dsh-go-phone](https://github.com/baidada1020/dsh-go-phone) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: sidebar button that opens the DSH engine running on your Android phone (adb forward + local gateway) |
| 96 | [baldovinmarques391-design/dsh-goal-resume](https://github.com/baldovinmarques391-design/dsh-goal-resume) | 0 | 2026-11-17 | 2026-11-17 | 目标恢复｜定时唤醒或自动续跑时，直接恢复已暂停的目标；也能暂停、解除自动续跑。 |
| 97 | [bgmmd/dsh-vibecoding-preflight](https://github.com/bgmmd/dsh-vibecoding-preflight) | 0 | 2026-11-17 | 2026-11-17 | Git preflight check for vibecoding sessions in DeepSeek Harness: detects a Git repository, compares the local branch with its upstream, pulls remote commits for the AI to review, and asks you to confirm pushing local commits. |
| 98 | [bigbrain-work/shiliu-ai](https://github.com/bigbrain-work/shiliu-ai) | 0 | 2026-09-07 | 2026-11-17 | Official Shiliu AI Skills and MCP connector for AI agents. |
| 99 | [bin-71/dsh-net-accelerator](https://github.com/bin-71/dsh-net-accelerator) | 0 | 2026-11-17 | 2026-11-17 | DSH Host plugin: check and enable Watt Toolkit (Steam++) acceleration before external downloads |
| 100 | [bin9317/dsh-theme-mac-platinum](https://github.com/bin9317/dsh-theme-mac-platinum) | 0 | 2026-11-17 | 2026-11-17 | Mac OS 8.1 Platinum–inspired theme for DeepSeek Harness Desktop. |
| 101 | [C4Hy0/dsh-browser-bridge](https://github.com/C4Hy0/dsh-browser-bridge) | 0 | 2026-11-13 | 2026-11-17 | Drive the browser you are signed into through a paired Chromium extension: ten tools over the DevTools Protocol. |
| 102 | [Caiccc-a11y/dsh-asr-openai](https://github.com/Caiccc-a11y/dsh-asr-openai) | 0 | 2026-11-15 | 2026-11-17 | 可以直接本地调用DSH内置语转文模型的插件，支持openai标准格式。 |
| 103 | [Calvin-Xia/my-dsh-plugins](https://github.com/Calvin-Xia/my-dsh-plugins) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin collection: session insights / error museum |
| 104 | [Canvai1337/dsh-context-compaction-meter](https://github.com/Canvai1337/dsh-context-compaction-meter) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: merges context-compaction info into the composer's context-usage window, with a compaction line drawn at the model's real trigger point |
| 105 | [Canvai1337/dsh-enhance-prompt](https://github.com/Canvai1337/dsh-enhance-prompt) | 0 | 2026-11-17 | 2026-11-17 | A DeepSeek Harness (DSH) composer button that rewrites your draft into a clear, sectioned prompt while keeping attached files and images. |
| 106 | [carlslin/dsh-skill-eval](https://github.com/carlslin/dsh-skill-eval) | 0 | 2026-11-17 | 2026-11-17 | Skill execution telemetry, scoring and evidence-backed advice for DeepSeek Harness |
| 107 | [CC2027MK2/dsh-watch-phone](https://github.com/CC2027MK2/dsh-watch-phone) | 0 | 2026-11-17 | 2026-11-17 | Talk to your local DSH from a smartwatch: HTTP bridge with chat, offline STT/TTS and the watch APK bundled. |
| 108 | [chendaleiQ/dsh-chrome](https://github.com/chendaleiQ/dsh-chrome) | 0 | 2026-11-17 | 2026-11-17 | Control local Chrome from DeepSeek Harness: tabs, snapshot, navigate, screenshot, fill and evaluate. |
| 109 | [chengzhi43/dsh-desktop-notify](https://github.com/chengzhi43/dsh-desktop-notify) | 0 | 2026-11-17 | 2026-11-17 | Desktop notifications for DeepSeek Harness: turn finished, or the agent is waiting for your choice |
| 110 | [chenvinc/dsh-relay-client](https://github.com/chenvinc/dsh-relay-client) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: cross-session &amp; cross-device messaging via pcpanel relay (npm: dsh-relay-client) |
| 111 | [chguo-3/dsh-screenshot](https://github.com/chguo-3/dsh-screenshot) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：聊天框截图按钮。点击后整屏冻结，在真实屏幕上框选、调选区、涂鸦圈重点，完成后作为图片附件进入对话草稿（Windows 原生编辑器，物理像素 1:1）。 |
| 112 | [coffee405/dsh-qwen-scope](https://github.com/coffee405/dsh-qwen-scope) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: a composer cell showing the prefill rate of the local inference engine running the session's model |
| 113 | [Cressev/dsh-note-wall](https://github.com/Cressev/dsh-note-wall) | 0 | 2026-11-17 | 2026-11-17 | Persistent note wall for DeepSeek Harness: folders, trash, rollback snapshots, and model tools that pin and search notes on request. |
| 114 | [Cressev/dsh-skill-board](https://github.com/Cressev/dsh-skill-board) | 0 | 2026-11-17 | 2026-11-17 | Per-session skill board for DeepSeek Harness: usage charts and enable/disable switches for skills, scoped to each conversation, beside the trajectory view. |
| 115 | [cv588888888888888888888ju/dsh-gallery](https://github.com/cv588888888888888888888ju/dsh-gallery) | 0 | 2026-11-17 | 2026-11-17 | Image gallery plugin for DeepSeek Harness: collect images from local files, URLs or conversation attachments, find them by keyword/tag, send them back as markdown. |
| 116 | [cv588888888888888888888ju/dsh-image-read](https://github.com/cv588888888888888888888ju/dsh-image-read) | 0 | 2026-11-17 | 2026-11-17 | Deterministic image reading tools for DSH: chart-to-curve, slider/rotation/curve captcha, chained image ops |
| 117 | [czNail/Stellane](https://github.com/czNail/Stellane) | 0 | 2026-11-11 | 2026-11-17 | Branchable PostgreSQL data environments for agentic applications. |
| 118 | [czyt1988/dsh-workflow-orchestrator](https://github.com/czyt1988/dsh-workflow-orchestrator) | 0 | 2026-11-17 | 2026-11-17 | Visual workflow orchestrator for DeepSeek Harness (DSH): drag task nodes onto a canvas, wire them into sequential, parallel or gateway-joined graphs, then run. Each node spawns a real DSH task session in its workspace; judge and terminate nodes can end a run early. Live run log, auto-save, zero runtime dependencies. |
| 119 | [DamonKoy/dsh-bot-model-switch](https://github.com/DamonKoy/dsh-bot-model-switch) | 0 | 2026-11-17 | 2026-11-17 | Switch every Bot in a DS Bot team to one model at once, or set each Bot individually — through DS Bot's own update-bot channel. |
| 120 | [DaYangtuo247/dsh-composer-display](https://github.com/DaYangtuo247/dsh-composer-display) | 0 | 2026-11-17 | 2026-11-17 | Claude-style composer for DeepSeek Harness: one-row input box, live Markdown, queue tray, mode/model menus. |
| 121 | [DaYangtuo247/dsh-context-monitor](https://github.com/DaYangtuo247/dsh-context-monitor) | 0 | 2026-11-17 | 2026-11-17 | Context usage for DeepSeek Harness: a composer popover plus a detailed Context Lens tab with every category, node, tool and growth trend. |
| 122 | [DaYangtuo247/dsh-conversation-enhancer](https://github.com/DaYangtuo247/dsh-conversation-enhancer) | 0 | 2026-11-17 | 2026-11-17 | Conversation view enhancer for DeepSeek Harness: work details, tool groups, plan card, typography, command colours. |
| 123 | [DaYangtuo247/dsh-whale-theme](https://github.com/DaYangtuo247/dsh-whale-theme) | 0 | 2026-11-17 | 2026-11-17 | Whale theme for DeepSeek Harness: animated DeepSeek-website background, see-through shell, liquid glass and its own theme settings page. |
| 124 | [ddyfight/dsh-plugin-codex-mirror](https://github.com/ddyfight/dsh-plugin-codex-mirror) | 0 | 2026-11-17 | 2026-11-17 | Read-only live mirror of local Codex sessions inside DeepSeek Harness, with quote-to-draft, quote-to-new-session and progress handoff. |
| 125 | [deepseekv41flash/dsh-chatbot-tools](https://github.com/deepseekv41flash/dsh-chatbot-tools) | 0 | 2026-11-17 | 2026-11-17 | 把 DeepSeek Chatbot 的能力带进 DeepSeek Harness：内容安全（含 3 条服务端约束守卫）、联网/图片搜索、OCR、TTS、ASR、文档上传 |
| 126 | [DeepSlacking/dsh-context-manager](https://github.com/DeepSlacking/dsh-context-manager) | 0 | 2026-11-16 | 2026-11-17 | DSH plugin: unified context capacity and compaction policy manager — global defaults, per provider/model overrides, per-session control. |
| 127 | [DeepSlacking/dsh-plugin-manager-plus](https://github.com/DeepSlacking/dsh-plugin-manager-plus) | 0 | 2026-11-16 | 2026-11-17 | DSH plugin: enhances the official Plugins → Installed page — one group at a time, Chinese names with original-name pills and colored summaries. |
| 128 | [DeepSlacking/dsh-sidebar-console](https://github.com/DeepSlacking/dsh-sidebar-console) | 0 | 2026-11-16 | 2026-11-17 | DSH plugin: long-press drag to reorder left-sidebar console entries, unified show/hide manager, collapsible hidden section. |
| 129 | [DeepSlacking/dsh-task-progress](https://github.com/DeepSlacking/dsh-task-progress) | 0 | 2026-11-16 | 2026-11-17 | DSH plugin: cumulative session progress bar with completed-task nodes, phase, next step and a progress ring on the sidebar row. |
| 130 | [Digiforge6688/zipx-dsh-plugin](https://github.com/Digiforge6688/zipx-dsh-plugin) | 0 | 2026-11-17 | 2026-11-17 | ZipX Director for DSH: conversation-first filmmaking with native cards, approval, jobs, workbench and delivery. Sign up: www.zipx.ai (global) / www.zipx.vip (China). |
| 131 | [dingchenhui0618-arch/dsh-chatroom](https://github.com/dingchenhui0618-arch/dsh-chatroom) | 0 | 2026-11-17 | 2026-11-17 | 多人个人聊天室 for DeepSeek Harness: 你和你携带的 agent 同处一屋，三条发言规则并行，本机与 LAN 成员来源一眼可分。 |
| 132 | [dingchenhui0618-arch/dsh-fact-lock-rewrite](https://github.com/dingchenhui0618-arch/dsh-fact-lock-rewrite) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: two-pass Chinese de-AI rewriting — lock the facts first, rewrite second, reject the whole piece when any price/stock/model/date/promise/link changed. |
| 133 | [diudiu62/dsh-connect-loomy](https://github.com/diudiu62/dsh-connect-loomy) | 0 | 2026-11-14 | 2026-11-17 | 把本机已登录的 Loomy（讯飞办公助手）聊天模型接入 DeepSeek Harness：支持多账号、在输入框旁的抽屉里切换账号、查看各账号积分与扣分流水。 |
| 134 | [ds-hu/dsh-better-search](https://github.com/ds-hu/dsh-better-search) | 0 | 2026-11-17 | 2026-11-17 | Search services for DeepSeek Harness — a Kelivo-style sidebar panel to manage the providers behind web_search and web_fetch: 26 search providers, 13 fetch adapters, multi-key rotation, account usage, light/dark. |
| 135 | [Dvva/dsh-alert](https://github.com/Dvva/dsh-alert) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: native Windows toast + sound when the harness waits for your approval or answer |
| 136 | [elias-didoo/dsh-agent-pipeline](https://github.com/elias-didoo/dsh-agent-pipeline) | 0 | 2026-11-15 | 2026-11-17 | Run a workspace's fixed review pipeline in DeepSeek Harness: each step fires when the agent finishes the last one, and the pipeline pauses where you have to decide. |
| 137 | [EliasRookie66/dsh-inspiration](https://github.com/EliasRookie66/dsh-inspiration) | 0 | 2026-11-17 | 2026-11-17 | Inspiration / 灵感 — A fiction workbench for DeepSeek Harness with AI drafting, selection polishing and author-approved inline edits. |
| 138 | [Ethanyuan802/dsh-product-workbench](https://github.com/Ethanyuan802/dsh-product-workbench) | 0 | 2026-11-17 | 2026-11-17 | 产品工作台 · Product management workflows and editable Office reports for DeepSeek Harness. |
| 139 | [EXhypr-hub/dsh-know](https://github.com/EXhypr-hub/dsh-know) | 0 | 2026-11-17 | 2026-11-17 | DSH 本地知识库插件：文档导入、语义检索、权威来源采集 |
| 140 | [FarSunShine/dsh-share-import](https://github.com/FarSunShine/dsh-share-import) | 0 | 2026-11-17 | 2026-11-17 | Import a public DeepSeek chat share link into DeepSeek Harness as a real, resumable Session. |
| 141 | [Fishberg2026/dsh-balance](https://github.com/Fishberg2026/dsh-balance) | 0 | 2026-11-16 | 2026-11-17 | dsh plugin |
| 142 | [flyer103/dsh-effort-lab](https://github.com/flyer103/dsh-effort-lab) | 0 | 2026-11-17 | 2026-11-17 | DSH effort lab: A/B a prompt variant against reasoning effort on one session, recording per-turn tokens, wall time, subagents and compaction as JSONL. |
| 143 | [food211/chubby-fish-studio](https://github.com/food211/chubby-fish-studio) | 0 | 2026-11-16 | 2026-11-17 | 🐟 肥鱼画室 — a pigment-mixing painting canvas plugin for DeepSeek Harness; the agent can see the canvas, paint on it, and read exact pixels. |
| 144 | [FSNH/dsh-plugin-knowledge-base](https://github.com/FSNH/dsh-plugin-knowledge-base) | 0 | 2026-11-16 | 2026-11-17 | 把本地文件整理成树状知识库：原版式预览、中文全文检索，AI 可检索并针对文档对话。DeepSeek Harness 插件 |
| 145 | [Fudanyrd/dsh-merge-conflicts](https://github.com/Fudanyrd/dsh-merge-conflicts) | 0 | 2026-11-15 | 2026-11-17 | DSH Better-sidebar plugin for viewing Git conflicts |
| 146 | [funny-dog/agent-cleaner](https://github.com/funny-dog/agent-cleaner) | 0 | 2026-11-17 | 2026-11-17 | Disk cleanup, orphan MCP process audit, and comment-preserving config repair for AI coding agents |
| 147 | [FYZB2020/dsh-8g-poster](https://github.com/FYZB2020/dsh-8g-poster) | 0 | 2026-11-17 | 2026-11-17 | Poster8G — run a poster print shop on your own 8 GB GPU. Local AI background, real layout, cutout, QR, print-ready PDF. For DeepSeek Harness. |
| 148 | [FYZB2020/dsh-fy-code-animation](https://github.com/FYZB2020/dsh-fy-code-animation) | 0 | 2026-11-17 | 2026-11-17 | Code animation for DeepSeek Harness — 341-style prompt library, HTML/Canvas scenes rendered frame by frame to MP4 by a real browser. 2 skills, 6 tools. |
| 149 | [gangchen0470/dsh-beeapi-balance](https://github.com/gangchen0470/dsh-beeapi-balance) | 0 | 2026-11-17 | 2026-11-17 | Unofficial BeeAPI balance plugin for DeepSeek Harness |
| 150 | [gimartynov/dsh-safety](https://github.com/gimartynov/dsh-safety) | 0 | 2026-11-17 | 2026-11-17 | Zero-token safety plugins for DeepSeek Harness: deterministic path guard and local git restore points |
| 151 | [Gladess1102/dsh-ace-music](https://github.com/Gladess1102/dsh-ace-music) | 0 | 2026-11-17 | 2026-11-17 | ACE Music MCP server for DeepSeek Harness: OAuth sign-in once, then write songs, continue a melody, upload audio, inspect and download tracks as native acemusic_* tools. Fills the OAuth gap in @deepseek-ai/dsh-mcp-client. |
| 152 | [gongxianjin/agentranch-dsh](https://github.com/gongxianjin/agentranch-dsh) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: bounded DSH control of AgentRanch aw-cli (agentranch-dsh) |
| 153 | [guiheng123/dsh-rollback](https://github.com/guiheng123/dsh-rollback) | 0 | 2026-11-15 | 2026-11-17 | 让每次修改文件都可以撤回，回滚本身也可以被回滚 |
| 154 | [guyu233/dsh-update-checker](https://github.com/guyu233/dsh-update-checker) | 0 | 2026-11-17 | 2026-11-17 | Desktop development-channel update check that ignores staged rollout. |
| 155 | [HanmoZhang0909/ai-dream](https://github.com/HanmoZhang0909/ai-dream) | 0 | 2026-11-17 | 2026-11-17 | AI Dream — A shape for every feeling. AI emotional ambient medium for DeepSeek Harness. |
| 156 | [Hans-wan/dsh-llm-council](https://github.com/Hans-wan/dsh-llm-council) | 0 | 2026-11-17 | 2026-11-17 | Ask several models the same question at once, watch them answer side by side, then read a chaired verdict. A council panel for DeepSeek Harness. |
| 157 | [hebokenn/dsh-codex-chatgpt](https://github.com/hebokenn/dsh-codex-chatgpt) | 0 | 2026-11-17 | 2026-11-17 | Local Codex ChatGPT app-server model adapter for DeepSeek Harness |
| 158 | [heqi698/dsh-go-kugimiya-voice](https://github.com/heqi698/dsh-go-kugimiya-voice) | 0 | 2026-11-17 | 2026-11-17 | 钉宫理惠语音包 for dsh-go (voice assets from zthxxx/kugimiya-rainbow-fart, MIT) |
| 159 | [HitMargin/dsh-archived-sessions](https://github.com/HitMargin/dsh-archived-sessions) | 0 | 2026-11-17 | 2026-11-17 | 设置里新增「已归档会话」页：按工作区分组、按名称搜索，支持单删、多选删与全部删除。 |
| 160 | [HitMargin/dsh-bell-notify](https://github.com/HitMargin/dsh-bell-notify) | 0 | 2026-11-17 | 2026-11-17 | 侧栏左下角（账户旁边）的铃铛：打开后，模型每次跑完任务就弹一条 Windows 系统通知。 |
| 161 | [HitMargin/dsh-kilo-prompt](https://github.com/HitMargin/dsh-kilo-prompt) | 0 | 2026-11-17 | 2026-11-17 | 把 Kilo Code 的内置系统提示词（soul + default）移植到 DSH，侧栏一键开关。 |
| 162 | [HitMargin/dsh-model-usage](https://github.com/HitMargin/dsh-model-usage) | 0 | 2026-10-24 | 2026-11-17 | 在左侧栏加入「模型用量」入口，打开一个按模型统计 Token 消耗与请求次数的面板。 |
| 163 | [HitMargin/dsh-prompt-refine](https://github.com/HitMargin/dsh-prompt-refine) | 0 | 2026-11-17 | 2026-11-17 | 输入框控制行里的「优化输入」按钮：点一下把草稿里的需求改写得更清楚、更具体、可直接执行（DSH 插件） |
| 164 | [hluica/dsh-chat-mode](https://github.com/hluica/dsh-chat-mode) | 0 | 2026-11-17 | 2026-11-17 | Conversation-first Agent preset: reads files only on request, keeps shell and web search opt-in, and locks permission to read-only or workspace-write. |
| 165 | [hluica/dsh-parent-instructions](https://github.com/hluica/dsh-parent-instructions) | 0 | 2026-11-14 | 2026-11-17 | Parent-workspace AGENTS.md guidance for nested workspaces in DeepSeek Harness. |
| 166 | [hluica/dsh-session-deleater](https://github.com/hluica/dsh-session-deleater) | 0 | 2026-11-17 | 2026-11-17 | Safely delete a local DeepSeek Harness session, its projection cache, workspace references, and optional media. |
| 167 | [hologrow/dsh-plugin](https://github.com/hologrow/dsh-plugin) | 0 | 2026-11-17 | 2026-11-17 | Connect DeepSeek Harness to the Hologrow commerce-data MCP. |
| 168 | [hongcha-dsh/dsh-subagent-model-pin](https://github.com/hongcha-dsh/dsh-subagent-model-pin) | 0 | 2026-11-12 | 2026-11-17 | DSH plugin: pin every subagent to one model and abort on drift, so a costly parent model can never drain your quota. |
| 169 | [honghufox/dsh-pdf-translate](https://github.com/honghufox/dsh-pdf-translate) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: translate English scientific PDFs into Chinese with layout-preserving PDFs, bilingual Markdown, and GPU-aware local model recommendations |
| 170 | [hyper-open/dsh-task-board](https://github.com/hyper-open/dsh-task-board) | 0 | 2026-11-17 | 2026-11-17 | A project-scoped task board for DSH (DeepSeek Harness): create tasks that belong to a workspace, and let an agent pull, execute, and complete them via task_board_* tools. Three-column-plus kanban with lifecycle, priority, review gate, auto-dispatch, and archiving. |
| 171 | [ingk888766-cloud/dsh-anti-interrupt](https://github.com/ingk888766-cloud/dsh-anti-interrupt) | 0 | 2026-11-17 | 2026-11-17 | DSH 防中断（守夜）：崩溃/重启后自动续跑被中断的回合；Windows 下可一键关掉屏保与电源超时。 |
| 172 | [Irrow627/dsh-quick-actions](https://github.com/Irrow627/dsh-quick-actions) | 0 | 2026-11-17 | 2026-11-17 | DSH-plugin: open the session's workspace folder, a terminal, or VS Code straight from the conversation header — plus a settings dialog for their order and visibility.  |
| 173 | [italycalibur2019/dsh-mera-theme](https://github.com/italycalibur2019/dsh-mera-theme) | 0 | 2026-11-17 | 2026-11-17 | MERA (Mermaid.js gijinka) theme plugin for DeepSeek Harness: raspberry rose #FF3670 x pearl white x ink navy, light and dark |
| 174 | [jasocheung/dsh-qwen-plan-usage](https://github.com/jasocheung/dsh-qwen-plan-usage) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: Qwen AI Platform Token Plan remaining-quota sidebar widget + /qwen-plan command + model guidance that auto-fetches the console cookie from your browser. |
| 175 | [jasocheung/dsh-qwen-reasoning](https://github.com/jasocheung/dsh-qwen-reasoning) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: auto-enhances manually-declared Qwen (千问) models with the full reasoning-effort levels (off/minimal/low/medium/high/xhigh/max), defaulting to max, via additive idempotent settings writes. |
| 176 | [Jessicaisleep/dsh-source-inbox](https://github.com/Jessicaisleep/dsh-source-inbox) | 0 | 2026-11-17 | 2026-11-17 | DSH source inbox: archive your own material from 28 platforms into one local knowledge base — official entry links, step-by-step login guidance, paste-a-credential boxes, and a controlled browser that reads your own logged-in pages. |
| 177 | [jiesou/dsh-focus-preset](https://github.com/jiesou/dsh-focus-preset) | 0 | 2026-11-17 | 2026-11-17 | DSH 专注模式 省 token：a leaner standard preset with a compact persona prompt and spawn-only delegation |
| 178 | [jilan71310/dsh-dispatch-bridge](https://github.com/jilan71310/dsh-dispatch-bridge) | 0 | 2026-11-17 | 2026-11-17 | Republish this DSH host\\u0027s local authenticated URL and a workspace snapshot so a local automation client can create sessions inside a chosen workspace, send prompts and read replies over the ordinary /api endpoints. |
| 179 | [JOJO-Adam/dsh-godot](https://github.com/JOJO-Adam/dsh-godot) | 0 | 2026-11-14 | 2026-11-17 | Godot 4 production pack for DeepSeek Harness: runnable 2D templates, deterministic scene/script validator, one-command Web export. |
| 180 | [junrui-li/dsh-agent-db-studio](https://github.com/junrui-li/dsh-agent-db-studio) | 0 | 2026-11-17 | 2026-11-17 | 一套 GUI 与 Agent 一体的 DeepSeek Harness 数据库管理插件：agent 用 20 个 db_* 工具查元数据、跑 SQL、按审批改数据；人在 Web 面板里看得见、管得住。  安全内建：写操作只走工单、人工批准后单事务执行，agent 无审批工具；只读连接、缺 WHERE 拦截、写窗口、快照撤销层层兜底。脱敏在引擎出站前强制完成：姓名、手机号、身份证、银行卡、邮箱五类策略按配置/列名/值级三层判定，无还原接口，agent 与面板只见掩码值。  预留语义层框架为 NL2SQL 提供扩展：业务域、表卡、术语、查询样例可在面板运营，4 个语义工具恒定注册，让 agent 按业务口径回答数据问题。  纯 Node 实现，引擎内嵌宿主进程，无需额外服务。 |
| 181 | [Kaius0629/dsh-oujingjing-progress](https://github.com/Kaius0629/dsh-oujingjing-progress) | 0 | 2026-11-05 | 2026-11-17 | DSH 插件：桌面上养一只鲸鱼娘，替你盯下载和出图进度 |
| 182 | [Kapozux/dsh-xiaobenben](https://github.com/Kapozux/dsh-xiaobenben) | 0 | 2026-11-17 | 2026-11-17 | 小本本 · DeepSeek Harness plugin: agent year-in-review + 翻旧账 (works with dsh-pet) |
| 183 | [KawaiiHachimi/dsh-kvmflow](https://github.com/KawaiiHachimi/dsh-kvmflow) | 0 | 2026-11-17 | 2026-11-17 | Drive a real computer through an IP-KVM from DeepSeek Harness: record HID steps, let the agent author YAML workflows, replay them with screen verification. |
| 184 | [kingchen95272025/dsh-cursor-rules](https://github.com/kingchen95272025/dsh-cursor-rules) | 0 | 2026-11-17 | 2026-11-17 | Loads Cursor .mdc rules into the DeepSeek Harness agent context and adds a rules panel to the Web GUI. |
| 185 | [kingchen95272025/dsh-cursor-toolkit](https://github.com/kingchen95272025/dsh-cursor-toolkit) | 0 | 2026-11-17 | 2026-11-17 | Cursor toolkit for DeepSeek Harness: rules, skills and MCP servers under .cursor, with a panel that reads and switches each of them. |
| 186 | [Knot-chord/dsh-bulk-io](https://github.com/Knot-chord/dsh-bulk-io) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：大量小文件读写优化——一次调用处理几万个文件；同卷移动走 rename（93,009 文件 251 ms），删除默认可逆。Bulk small-file read/write: one call for thousands of files. |
| 187 | [Kochere/dsh-yijing](https://github.com/Kochere/dsh-yijing) | 0 | 2026-11-17 | 2026-11-17 | I Ching coin oracle for DeepSeek Harness: 金钱卦·六掷, 64 hexagrams, Zhu Xi's change rule, classical Zhouyi text, animated cast card. |
| 188 | [KokoTa/dsh-deepseek-chat-panel](https://github.com/KokoTa/dsh-deepseek-chat-panel) | 0 | 2026-11-17 | 2026-11-17 | Open chat.deepseek.com inside the DeepSeek Harness Web UI (in-UI panel + Host-side loopback proxy that keeps the DeepSeek login across restarts). |
| 189 | [Kook543/dsh-task-toast](https://github.com/Kook543/dsh-task-toast) | 0 | 2026-11-15 | 2026-11-17 | Windows 10/11 desktop notifications for DeepSeek Harness (DSH): approval requests, interruptions, questions, and completed tasks. Click a notification to return to the session that produced it. 中文：适用于 Windows 10/11，任务需要审批、被中断、提问或完成时弹出桌面通知，点击通知回到对应会话。 |
| 190 | [korosu/dsh-plugin-modern-web-guidance](https://github.com/korosu/dsh-plugin-modern-web-guidance) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness (dsh) plugin that gives the agent Google Chrome's Modern Web Guidance: curated, token-efficient guides on modern web platform APIs, so the agent stops writing legacy HTML/CSS/JS. |
| 191 | [kroxchan/dsh-mobile](https://github.com/kroxchan/dsh-mobile) | 0 | 2026-11-09 | 2026-11-17 | Mobile web frontend + gateway for DeepSeek Harness (DSH) |
| 192 | [ksolodev/dsh-artel](https://github.com/ksolodev/dsh-artel) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: run coding agents in an isolated copy of your project. Solo or Swarm (agents message each other), review the diff line by line, apply it yourself. |
| 193 | [kulebbb/dsh-club](https://github.com/kulebbb/dsh-club) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 的娱乐中心：左侧边栏一块面板，装等 agent 干活时的小消遣。骨架版本，玩法内容待定。 |
| 194 | [KunChiang/dsh-moyu-games](https://github.com/KunChiang/dsh-moyu-games) | 0 | 2026-11-17 | 2026-11-17 | 一个给 DeepSeek Harness 用的「摸鱼」插件：侧栏点开，和本地 AI 下五子棋或暗兽棋。 老板来了按 Esc，立刻回到对话。 |
| 195 | [kvker/dsh-window-state-plugin](https://github.com/kvker/dsh-window-state-plugin) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: remember the desktop window position and size across launches. |
| 196 | [kysr04/dsh-pitfall-memory](https://github.com/kysr04/dsh-pitfall-memory) | 0 | 2026-11-14 | 2026-11-17 | DSH 的错题本 — 把 Agent 犯过的错结构化沉淀成带检测信号的坑库，下次同类任务开工前自动检索，不再重犯。A local mistake-ledger skill for DeepSeek Harness. |
| 197 | [lanechenhku/dsh-claude-project-ui](https://github.com/lanechenhku/dsh-claude-project-ui) | 0 | 2026-11-17 | 2026-11-17 | 把 Claude Code 的项目 + 讨论串体验搬进 DSH：强化主对话与讨论串的分工（主对话当 lead 主动派活、回报自动汇总成看板），最多 6 个讨论串并发，上下文自动接续，体验接近 Claude（Opus 5.5 一代）的项目功能。基于 @kyf-eng/dsh-threads。 ｜ Claude-style Projects + Threads for DeepSeek Harness: sharper lead/thread split (auto-delegate, auto-rollup), up to 6 threads, carried context — close to Claude (Opus 5.5 era), on @kyf-eng/dsh-threads |
| 198 | [Leeaoyin/dsh-data-cat](https://github.com/Leeaoyin/dsh-data-cat) | 0 | 2026-11-17 | 2026-11-17 | Navicat-style database manager plugin for DeepSeek Harness (DSH): browse and edit MySQL, PostgreSQL, Redis, and Elasticsearch data, manage databases, run and format SQL, export DDL/data, and query with an in-page AI copilot. |
| 199 | [leezhian/dsh-btw](https://github.com/leezhian/dsh-btw) | 0 | 2026-11-17 | 2026-11-17 | Throwaway side chat: /btw opens an isolated scratch session in the right panel, never touching the main conversation's context. |
| 200 | [liancheng2020/dsh-balance-sentinel](https://github.com/liancheng2020/dsh-balance-sentinel) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek 余额监控，低余额告警推送到飞书/钉钉；DSH 关闭后停止提醒。 |
| 201 | [lihongxu0221/dsh-prompt-filter](https://github.com/lihongxu0221/dsh-prompt-filter) | 0 | 2026-11-16 | 2026-11-17 | Rewrites DeepSeek Harness identity text out of model requests and renames tool and skill identifiers outbound, restoring original names in responses. |
| 202 | [linabellbiu/dsh-computer-use-pip](https://github.com/linabellbiu/dsh-computer-use-pip) | 0 | 2026-11-17 | 2026-11-17 | Codex-style floating preview window for DeepSeek Harness computer use (macOS): mirrors the window an agent is operating, top-most, non-activating, double-click 1x/3x. |
| 203 | [lioez/dsh-ops-console](https://github.com/lioez/dsh-ops-console) | 0 | 2026-11-17 | 2026-11-17 | 本机运维台：GitHub、Cloudflare、SSH 服务器与国内外网站探测 · Local DeepSeek Harness ops console |
| 204 | [LittleBeaverStudio/kingdee-portal](https://github.com/LittleBeaverStudio/kingdee-portal) | 0 | 2026-11-06 | 2026-11-17 | 本地金蝶云星空经营门户 DSH 插件：使用本人账号在侧栏访问经营看板，数据保留在本机。 |
| 205 | [liubaibuliuyan/dsh-session-delete](https://github.com/liubaibuliuyan/dsh-session-delete) | 0 | 2026-11-17 | 2026-11-17 | Delete conversations in DeepSeek Harness - session log to a restorable trash, projection cache + workspace bookkeeping cleaned in the same step (Cordis plugin) |
| 206 | [liuhange789/dsh-mcp-tool-schema-diff](https://github.com/liuhange789/dsh-mcp-tool-schema-diff) | 0 | 2026-11-17 | 2026-11-17 | Breaking-change warning for MCP tool schemas in DSH: remembers each server's tool contract and reports removed tools, dropped parameters, type and required-field changes after an upgrade. |
| 207 | [liuhange789/dsh-plugin-profiler](https://github.com/liuhange789/dsh-plugin-profiler) | 0 | 2026-11-17 | 2026-11-17 | Plugin load audit for DSH. \`/diet\` bills your plugin install: context tokens per request, hot-path host time, listener fan-out, and what to cut first. |
| 208 | [liuhuaian01/dsh-plugin-nature](https://github.com/liuhuaian01/dsh-plugin-nature) | 0 | 2026-11-17 | 2026-11-17 | 中文写作体检：按 11 个文体判定模板腔并给出改写处方。不判断作者身份。 |
| 209 | [lluozy/sourcelook](https://github.com/lluozy/sourcelook) | 0 | 2026-11-17 | 2026-11-17 | A full-window source reader for Linux kernel and large projects, built as a DeepSeek Harness plugin |
| 210 | [Lornatang/dsh-caveman](https://github.com/Lornatang/dsh-caveman) | 0 | 2026-11-17 | 2026-11-17 | Caveman for DeepSeek Harness, based on JuliusBrussee/caveman. |
| 211 | [Lornatang/dsh-security-audit](https://github.com/Lornatang/dsh-security-audit) | 0 | 2026-11-17 | 2026-11-17 | Security audit skill for DeepSeek Harness. |
| 212 | [Lphehe/dsh-token-economizer](https://github.com/Lphehe/dsh-token-economizer) | 0 | 2026-11-17 | 2026-11-17 | Evidence-based tool definition savings for DeepSeek Harness |
| 213 | [lsh-lenvast/dsh-plugin-tcm-learning](https://github.com/lsh-lenvast/dsh-plugin-tcm-learning) | 0 | 2026-11-17 | 2026-11-17 | deepseek 插件，用于学习中医文档，书架插件 |
| 214 | [luchiwanzi/dsh-tunnel](https://github.com/luchiwanzi/dsh-tunnel) | 0 | 2026-11-16 | 2026-11-17 | DSH 外网连接插件（安全加固版）：基于本地 mihomo 内核的 Harness 进程级出站代理，含 SSRF 防护、内核 SHA256 校验、订阅凭据脱敏与证书校验风险提示。 |
| 215 | [Luoqiaocong/dsh-answer-style](https://github.com/Luoqiaocong/dsh-answer-style) | 0 | 2026-11-16 | 2026-11-17 | DSH Web 插件：只改模型回答的字体、字重、加粗字体颜色、行高与表格排版，随时一键恢复默认 |
| 216 | [lw24-1936/dsh-frontend-page-craft](https://github.com/lw24-1936/dsh-frontend-page-craft) | 0 | 2026-11-15 | 2026-11-17 | 前端技能插件 |
| 217 | [LYXDSG/dsh-mcp-cost](https://github.com/LYXDSG/dsh-mcp-cost) | 0 | 2026-11-16 | 2026-11-17 | MCP cost panel for DeepSeek Harness: list every MCP server in the profile, toggle it hot without restarting, see its runtime phase, and estimate the input tokens each one costs. |
| 218 | [LzfandHky/dsh-agent-trust](https://github.com/LzfandHky/dsh-agent-trust) | 0 | 2026-11-17 | 2026-11-17 | Six DeepSeek Harness skills for trusting coding agents: runtime verification, feature maps, evidence-first debugging, skill evals, agent-ready architecture. |
| 219 | [M0rningBreeze/dsh-selection-followup](https://github.com/M0rningBreeze/dsh-selection-followup) | 0 | 2026-11-17 | 2026-11-17 | 划词追问：选中对话里的一段，右键在它旁边追问，答案只留在浮层卡片里，不写进主对话（DeepSeek Harness 插件） |
| 220 | [mafuyuyu/dsh-history-search](https://github.com/mafuyuyu/dsh-history-search) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 历史对话搜索插件：字面匹配、中文友好；Ctrl+F 查找当前会话，Ctrl+Shift+F 跨会话搜索 |
| 221 | [MaYuQiNB/dsh-douyin-link-video](https://github.com/MaYuQiNB/dsh-douyin-link-video) | 0 | 2026-11-17 | 2026-11-17 | 抖音链接 → 视频：在 QQ 聊天里发一条抖音视频链接，自动下载该视频（MP4）并发回同一个 QQ 会话——只存视频，不抽帧、不转写。 |
| 222 | [ModerRAS/dsh-opencode-go](https://github.com/ModerRAS/dsh-opencode-go) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin for the OpenCode Go channel: switch API keys from Settings, fail over when quota runs out, and watch the remaining subscription quota in the sidebar. |
| 223 | [monta-6969/dsh-sw-3d-preview](https://github.com/monta-6969/dsh-sw-3d-preview) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：在文件预览面板里查看 3D 成果（SLDPRT/STEP/STL），支持拖动旋转、剖切、边/面拾取与标注回传 |
| 224 | [mordoreay/dsh-edgerunners](https://github.com/mordoreay/dsh-edgerunners) | 0 | 2026-11-14 | 2026-11-17 | Anime companion for DeepSeek Harness — unofficial DSH adaptation of Alexanderadon/edgerunners (Roman, Talia, Di, Wick) |
| 225 | [myname1234/dsh-system-monitor](https://github.com/myname1234/dsh-system-monitor) | 0 | 2026-11-17 | 2026-11-17 | Real-time CPU, memory and process monitor for the DeepSeek Harness Web GUI |
| 226 | [mysterycode-liwen/dsh-credential-vault](https://github.com/mysterycode-liwen/dsh-credential-vault) | 0 | 2026-11-17 | 2026-11-17 | Credential vault sidebar panel for DeepSeek Harness: accounts, passwords and API keys, with an access lock and an agent read tool. |
| 227 | [mzwing/dsh-plugins](https://github.com/mzwing/dsh-plugins) | 0 | 2026-10-31 | 2026-11-17 | Some DeepSeek Harness plugins used by myself |
| 228 | [nakemer/pc-doctor](https://github.com/nakemer/pc-doctor) | 0 | 2026-11-17 | 2026-11-17 | PC Doctor — 电脑疑难杂症诊断 + 聊天咨询 DeepSeek Harness agent 预设 |
| 229 | [nanhaiya/dsh-pindou-pattern](https://github.com/nanhaiya/dsh-pindou-pattern) | 0 | 2026-11-05 | 2026-11-17 | 一个 DeepSeek Harness 插件：上传任意图片，生成 MARD 色号 的拼豆图纸，尺寸（格子数）自由设定，支持导出可打印的图纸 PNG 与色号清单 CSV。 |
| 230 | [Naskita/shadow-bilingual](https://github.com/Naskita/shadow-bilingual) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：模型只读英文——输入框、插话框、消息队列三条路径都先译成英文再发；助手英文回复下方追加本地语言对照。 |
| 231 | [nexxxl/windos2026](https://github.com/nexxxl/windos2026) | 0 | 2026-11-13 | 2026-11-17 | Everyone remembers their first desktop. This is the one you get to own: an AI-native operating system you assemble yourself — say a sentence, get an app, and every app leaves with you as a file. |
| 232 | [ninihao1743/dsh-memorytree-rule](https://github.com/ninihao1743/dsh-memorytree-rule) | 0 | 2026-11-17 | 2026-11-17 | 一款适合新手使用DSH的记忆模组，它的核心功能是给DSH装上一本成体系的经验、规则，让你的DSH更加富有执行指令任务的经验，避免踩坑、节约tok。 |
| 233 | [nmj94/dsh-task-progress](https://github.com/nmj94/dsh-task-progress) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 插件：任务运行时，用另一个模型查询当前进度。 |
| 234 | [Noeau-AI/dsh-history-search](https://github.com/Noeau-AI/dsh-history-search) | 0 | 2026-11-17 | 2026-11-17 | Full-history full-text search for DeepSeek Harness sessions - CJK-friendly substring search across every workspace, sidebar panel + inline hits in the search box |
| 235 | [nosleep00/dsh-github-radar](https://github.com/nosleep00/dsh-github-radar) | 0 | 2026-11-17 | 2026-11-17 | 右栏雷达：把当前会话变成五张 GitHub 项目卡片，带中文摘要与安装命令 |
| 236 | [omdsh-dev/dsh-gonic](https://github.com/omdsh-dev/dsh-gonic) | 0 | 2026-11-03 | 2026-11-17 | Gonic/Subsonic music player for the DeepSeek Harness Web GUI, with library tools, playlists, queues, and browser playback. |
| 237 | [omdsh-dev/dsh-pi-models](https://github.com/omdsh-dev/dsh-pi-models) | 0 | 2026-11-03 | 2026-11-17 | Project the providers, models, keys and thinking levels configured in pi's models.json into this DeepSeek Harness model picker. |
| 238 | [omdsh-dev/dsh-web-skin](https://github.com/omdsh-dev/dsh-web-skin) | 0 | 2026-11-03 | 2026-11-17 | Six-in-one light/dark skin pack for the DeepSeek Harness Web GUI: Minimal, Brutalism, Morandi, Pixel, Solarized, and Dracula. |
| 239 | [OrstedOshua/dsh-api-cost](https://github.com/OrstedOshua/dsh-api-cost) | 0 | 2026-11-17 | 2026-11-17 | API cost tracker for DeepSeek Harness: per-chat token cost, configurable prices, currency+language selectors, live exchange rates. |
| 240 | [OverToWind/dsh-grouped-sessions](https://github.com/OverToWind/dsh-grouped-sessions) | 0 | 2026-11-17 | 2026-11-17 | Group a workspace's sessions in the DSH sidebar: workspace → group → session tree. |
| 241 | [panweizong/dsh-workbuddy-skills](https://github.com/panweizong/dsh-workbuddy-skills) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: scan the WorkBuddy skills folder, normalize and dedupe skill ids, then copy selected skills into the DSH skills directory from a Settings panel. Zero runtime dependencies. |
| 242 | [PaoMoXML/dsh-session-branch](https://github.com/PaoMoXML/dsh-session-branch) | 0 | 2026-11-16 | 2026-11-17 | 记录每个 DSH 会话开始干活时所在的 Git 分支，并在会话标题、侧边栏会话行与悬停卡显示分支标记。 |
| 243 | [PaoMoXML/dsh-session-migrator](https://github.com/PaoMoXML/dsh-session-migrator) | 0 | 2026-11-16 | 2026-11-17 | 把旧会话迁移出 DSH 会话列表并在需要时恢复：工作区/月份分组、分支与父会话显示、可配置迁移目录、已迁移列表搜索。 |
| 244 | [PaoMoXML/dsh-theme-ink](https://github.com/PaoMoXML/dsh-theme-ink) | 0 | 2026-11-16 | 2026-11-17 | 原生优先的 DSH 主题：六套调色板、工作区密度、圆角、ASCII 字形与隐藏 logo，全部通过原生主题 token 生效。 |
| 245 | [PaoMoXML/dsh-thinking-phrase](https://github.com/PaoMoXML/dsh-thinking-phrase) | 0 | 2026-11-16 | 2026-11-17 | 自定义 DSH 思考提示文字：多短语轮换、随机挑选，以及打字机、命令行、解码三种动画特效。 |
| 246 | [poweredbyai/dsh-consumer-insight](https://github.com/poweredbyai/dsh-consumer-insight) | 0 | 2026-11-17 | 2026-11-17 | 消费者洞察工作台：填项目目标与调研类型，生成问卷、分析框架、抽样配额与 Word/Excel 交付物。A consumer research desk plugin for DeepSeek Harness. |
| 247 | [Prcjimmy1015/dsh-live-run](https://github.com/Prcjimmy1015/dsh-live-run) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 侧栏「实时运行」面板：当前文件 / 写入过程 / 命令实时输出（better-sidebar tab，零构建） |
| 248 | [psyduck25/dsh-session-manager](https://github.com/psyduck25/dsh-session-manager) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 插件：单个会话删除、锁定保护、回收站缓冲与恢复 |
| 249 | [pureheartrobotics/ai-os](https://github.com/pureheartrobotics/ai-os) | 0 | 2026-11-17 | 2026-11-17 | Press F8, speak, and DeepSeek operates your Windows desktop. UI Automation MCP tools + voice for DeepSeek Harness. |
| 250 | [Q3yp/dsh-plugin-deepseek-share-import](https://github.com/Q3yp/dsh-plugin-deepseek-share-import) | 0 | 2026-11-17 | 2026-11-17 | Import public DeepSeek share links as local DeepSeek Harness sessions. |
| 251 | [QianChang927/dsh-quotaline](https://github.com/QianChang927/dsh-quotaline) | 0 | 2026-11-16 | 2026-11-17 | 在输入框上方显示当前模型余额与限额（DeepSeek / Kimi / GLM，本地只读凭证）｜ Balance &amp; quota strip above the composer for the selected model — DeepSeek, Kimi, GLM; local read-only credentials. |
| 252 | [qinghuidaqzp/dsh-encoding-guard](https://github.com/qinghuidaqzp/dsh-encoding-guard) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: read/edit GBK, Big5, Shift_JIS, EUC-KR and UTF-16 files in their own encoding, keep UTF-8 BOM and CRLF, block mojibake writes. 编码守卫 |
| 253 | [qiyaogongfang/dsh-mimaben](https://github.com/qiyaogongfang/dsh-mimaben) | 0 | 2026-11-17 | 2026-11-17 | 本机加密密码本：记录账号密码、API Key、密钥和文档，可在对话里按需取用。 · Encrypted local-first credential vault for DSH. |
| 254 | [qwased/dsh-niubash-windows](https://github.com/qwased/dsh-niubash-windows) | 0 | 2026-11-17 | 2026-11-17 | Niubash (native Windows bash) as a DeepSeek Harness tool, coexisting with pwsh and preferred by prompt; ships a bundled troubleshooting skill. |
| 255 | [rifat-h/dsh-peak-hours](https://github.com/rifat-h/dsh-peak-hours) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek API peak-hours status pill for the DeepSeek Harness Web UI, with a countdown to the next peak/off-peak switch. |
| 256 | [RitchieLeung/dsh-plugin-bot-issue](https://github.com/RitchieLeung/dsh-plugin-bot-issue) | 0 | 2026-11-17 | 2026-11-17 | DSH 事务面板：状态机、派工、验收/打回、评论、附件，主 Bot 自调度执行人 |
| 257 | [RitchieLeung/dsh-plugin-bot-knowledge](https://github.com/RitchieLeung/dsh-plugin-bot-knowledge) | 0 | 2026-11-17 | 2026-11-17 | DSH 知识库看板：查看每只 Bot 记了什么，每日 19:00 自动日报（只读 knowledge.sqlite） |
| 258 | [RitchieLeung/dsh-plugin-bot-restart](https://github.com/RitchieLeung/dsh-plugin-bot-restart) | 0 | 2026-11-17 | 2026-11-17 | DSH 服务面板：软重载插件（HMR 重组 profile）/ 真重启，不用再杀终端重敲 dsh web |
| 259 | [RiverZhang37927/dsh-font-switch](https://github.com/RiverZhang37927/dsh-font-switch) | 0 | 2026-11-17 | 2026-11-17 | A font switch plug-in for Deepseek Harness |
| 260 | [RunhuaChen/dsh-exa-parallel-mcp](https://github.com/RunhuaChen/dsh-exa-parallel-mcp) | 0 | 2026-11-17 | 2026-11-17 | 为 DeepSeek Harness 接入 Exa 与 Parallel 两个免密钥 MCP 搜索服务器的 bundle |
| 261 | [Ryuu-64/dsh-answered-questions](https://github.com/Ryuu-64/dsh-answered-questions) | 0 | 2026-11-16 | 2026-11-17 | Review answered questions in DeepSeek Harness (DSH): keep all options, selected answers, and free text visible, including dsh-choice cards. |
| 262 | [sakikoTGW/dsh-element-picker](https://github.com/sakikoTGW/dsh-element-picker) | 0 | 2026-11-17 | 2026-11-17 | DSH 引用元素插件：把界面元素、链接、文件路径一键引用成原生 composer chip \| Element reference chips for DeepSeek Harness |
| 263 | [SamyiHu/dsh-pwsh7](https://github.com/SamyiHu/dsh-pwsh7) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: pin the pwsh tool to PowerShell 7 and never fall back to Windows PowerShell 5.1 |
| 264 | [schrolemons/schnie-harness-plugin](https://github.com/schrolemons/schnie-harness-plugin) | 0 | 2026-10-21 | 2026-11-17 | DeepSeek Harness知识检索插件｜可配置检索来源与当前轮次引用 |
| 265 | [sean-liulin/dsh-worklog-calendar](https://github.com/sean-liulin/dsh-worklog-calendar) | 0 | 2026-11-17 | 2026-11-17 | Work log calendar for DeepSeek Harness — per-day sessions, turns, prompts and tool calls from your own session logs. ｜ DSH 左侧栏工作日志月历：按天查看会话、轮次、提问与工具调用。 |
| 266 | [shaoqing404/dsh-identity-verification](https://github.com/shaoqing404/dsh-identity-verification) | 0 | 2026-11-17 | 2026-11-17 | 非官方实验项目：DSH 身份验证自检与可信原生接入源码，普通安装仅合成演示 |
| 267 | [shawnyuxuan/dsh-subagent-guide](https://github.com/shawnyuxuan/dsh-subagent-guide) | 0 | 2026-11-17 | 2026-11-17 | Regulates subagents summon by injecting system prompt and routing agent calls in DeepSeek Harness |
| 268 | [shuimo233/dsh-socratic-tutor](https://github.com/shuimo233/dsh-socratic-tutor) | 0 | 2026-11-17 | 2026-11-17 | 循思：DeepSeek Harness 数学草稿本与卡点辅导插件 |
| 269 | [simpleobj/dsh-web-login](https://github.com/simpleobj/dsh-web-login) | 0 | 2026-11-17 | 2026-11-17 | 轻量版 DSH Web 登录插件：用账号密码替代启动 token 链接，单实例单用户，scrypt 加密存储，无额外依赖。 |
| 270 | [SivanCola/dsh-zentao-hub](https://github.com/SivanCola/dsh-zentao-hub) | 0 | 2026-11-17 | 2026-11-17 | DSH 的禅道面板：读取指派给我的需求/任务/Bug，按分支派发 Agent，并把状态流转回写禅道。ZenTao panel for DSH. |
| 271 | [Skeltx/dsh-moduleapi](https://github.com/Skeltx/dsh-moduleapi) | 0 | 2026-11-08 | 2026-11-17 | Module API provider (moduleapi.pro) for DeepSeek Harness - one key, all models. Activates the built-in llm-pi-ai adapter with a moduleapi route. |
| 272 | [skokinkoba/dsh-chatgpt-style](https://github.com/skokinkoba/dsh-chatgpt-style) | 0 | 2026-11-17 | 2026-11-17 | ChatGPT-inspired desktop theme for DeepSeek Harness |
| 273 | [soffits/dsh-media-hub](https://github.com/soffits/dsh-media-hub) | 0 | 2026-11-17 | 2026-11-17 | Media hub for DeepSeek Harness: search shows, novels, ebooks and papers across sources, watch together in sync, download books in the format you want. |
| 274 | [soffits/dsh-notify-inbox](https://github.com/soffits/dsh-notify-inbox) | 0 | 2026-11-17 | 2026-11-17 | A notification inbox for DeepSeek Harness: per-person read/unread, Web Push to phones and browsers, and buttons on every notification. |
| 275 | [soffits/dsh-ui-kit](https://github.com/soffits/dsh-ui-kit) | 0 | 2026-11-17 | 2026-11-17 | Small shared pieces for DeepSeek Harness plugin pages: data icons, ticking times, rings and sparklines, a live dot and change cues, on top of DSH's own components. |
| 276 | [songsongs/dsh-plugin-maitian](https://github.com/songsongs/dsh-plugin-maitian) | 0 | 2026-11-17 | 2026-11-17 | 麦田 DeepSeek Harness 原生插件：多平台内容数据、复盘与分发工作流 |
| 277 | [SpecterShell/dsh-grid-panel](https://github.com/SpecterShell/dsh-grid-panel) | 0 | 2026-11-17 | 2026-11-17 | Responsive grid layout for DeepSeek Harness global sidebar panels |
| 278 | [ssesweb/dsh-deepseek-mode](https://github.com/ssesweb/dsh-deepseek-mode) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek web-style mode for DeepSeek Harness: composer toggles, agent preset, per-session web-search gate |
| 279 | [stallenlu/dsh-research-desk](https://github.com/stallenlu/dsh-research-desk) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: a research desk for literature discovery, anchored reading, multi-perspective review, hypothesis tracking, sandboxed verification runs and export. |
| 280 | [Stars-XK/dsh-bitwarden](https://github.com/Stars-XK/dsh-bitwarden) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 的 Bitwarden / Vaultwarden 密码库插件：AI 只拿元数据、密码明文不出仓、受控执行通道 |
| 281 | [sukai616/dsh-timefold](https://github.com/sukai616/dsh-timefold) | 0 | 2026-11-17 | 2026-11-17 | DSH 会话回退 + 文件快照插件：fork 回退、影子 git 还原、完整消息操作行（复制/回退/编辑/重跑/删除）。适配 DSH 0.2.2-rc.x |
| 282 | [sungatetop/HiBuddy](https://github.com/sungatetop/HiBuddy) | 0 | 2026-11-01 | 2026-11-17 | HiBuddy，Butler over deepseekharness |
| 283 | [Super-QAQ/dsh-prompt-library](https://github.com/Super-QAQ/dsh-prompt-library) | 0 | 2026-11-16 | 2026-11-17 | Prompt library for DeepSeek Harness: searchable panel, tags, smart import from a link, dependency checks, and prompt tools for the agent. |
| 284 | [superqin7/dsh-usage-meter](https://github.com/superqin7/dsh-usage-meter) | 0 | 2026-11-17 | 2026-11-17 | Token usage and cost meter for DeepSeek Harness: today's tokens as a split-flap counter at the sidebar foot, an estimated cost panel one click away. |
| 285 | [supralune/dsh-tailseek](https://github.com/supralune/dsh-tailseek) | 0 | 2026-11-17 | 2026-11-17 | Discover and open native DeepSeek Harness instances over your existing Tailscale network |
| 286 | [SUZUNAMI/dsh-cv-warm](https://github.com/SUZUNAMI/dsh-cv-warm) | 0 | 2026-11-17 | 2026-11-17 | Skip offscreen transcript rendering (content-visibility) and pre-warm blocks near the viewport for smooth scrolling in DSH. |
| 287 | [SUZUNAMI/dsh-foreground-guard](https://github.com/SUZUNAMI/dsh-foreground-guard) | 0 | 2026-11-14 | 2026-11-17 | DSH 前台等待守卫：拦截会让前台阻塞超过 60 秒的工具调用，违规时可手动授权（每回合一次）。A DSH host plugin that blocks foreground waits over 60s. |
| 288 | [SUZUNAMI/dsh-has-stripper](https://github.com/SUZUNAMI/dsh-has-stripper) | 0 | 2026-11-17 | 2026-11-17 | Remove :has() selector rules at runtime so style invalidation stays local on very large DSH transcripts. |
| 289 | [SUZUNAMI/plot3d-surface](https://github.com/SUZUNAMI/plot3d-surface) | 0 | 2026-11-17 | 2026-11-17 | Interactive 3D function surfaces (z=f(x,y), parametric, implicit) inside DeepSeek Harness chat; drag-rotate, wheel-zoom, live-editable expression/range/mesh. |
| 290 | [T3-Venture-Labs-Limited/ohmydsh](https://github.com/T3-Venture-Labs-Limited/ohmydsh) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness, batteries included: an opinionated setup with 25+ plugins, one-line install and safe updates. |
| 291 | [tanqvv/dsh-provider-guard](https://github.com/tanqvv/dsh-provider-guard) | 0 | 2026-11-17 | 2026-11-17 | DSH bundle plugin: model calls follow the selected provider; no automatic switching or fallback; other providers endpoints blocked; ordinary traffic untouched. |
| 292 | [taojun566/dsh-bus](https://github.com/taojun566/dsh-bus) | 0 | 2026-11-17 | 2026-11-17 | Cross-window mailbox bus for DSH (DeepSeek Harness): atomic link-claim delivery, at-least-once semantics, MCP tools, pure stdlib Python |
| 293 | [TecFancy/dsh-lingualab](https://github.com/TecFancy/dsh-lingualab) | 0 | 2026-11-17 | 2026-11-17 | Sentence-by-sentence intensive listening in DeepSeek Harness, with notes written back to your workspace. |
| 294 | [Tera-Dark/dsh-desk-kit](https://github.com/Tera-Dark/dsh-desk-kit) | 0 | 2026-11-17 | 2026-11-17 | DSH 随手台:定时提醒(签到类)、随手便签、加密保险库三合一。入口是侧栏标签页,19 个 Agent 工具,数据只存本机 ~/.dsh/desk-kit。 |
| 295 | [terry2010/dsh-rss-news-browser-fetch](https://github.com/terry2010/dsh-rss-news-browser-fetch) | 0 | 2026-11-17 | 2026-11-17 | dsh 插件：browserFetch 浏览器传输服务 —— 专用 Chrome + CDP，真实指纹/持久 cookie/同源页面取数，Node fetch 被风控时的兜底通道 |
| 296 | [terry2010/dsh-rss-news-flash-kuaixun](https://github.com/terry2010/dsh-rss-news-flash-kuaixun) | 0 | 2026-11-17 | 2026-11-17 | dsh 插件：实时财经快讯聚合 —— 财联社/金十/华尔街见闻/东方财富/同花顺/新浪六源 60 秒轮询，多源互证 + AI 快报 + 桌面通知 |
| 297 | [tianacloud/dsh-tiana](https://github.com/tianacloud/dsh-tiana) | 0 | 2026-11-16 | 2026-11-17 | 在 DeepSeek Harness 中，无论是网页、数据库还是后端 API，都可以部署到 TianaCloud；也可以从丰富的模板开始开发并发布。 |
| 298 | [TianXie2026/agnes-image-gen](https://github.com/TianXie2026/agnes-image-gen) | 0 | 2026-11-17 | 2026-11-17 | DSH 生图插件：侧栏「画图 / 图库」双页面板（文生图 / 图生图 + 查看器）+ 多 API 来源（DPAPI 加密密钥）+ 提示词优化 + 对话工具 agnes_image_generate |
| 299 | [Tlxy-code/Tlxy.dsh-todo](https://github.com/Tlxy-code/Tlxy.dsh-todo) | 0 | 2026-11-17 | 2026-11-17 | To-do list, month/week calendar and long-term habit plans for DeepSeek Harness. |
| 300 | [tong174/dsh-enhance-prompt](https://github.com/tong174/dsh-enhance-prompt) | 0 | 2026-11-17 | 2026-11-17 | One-click prompt enhancer for DeepSeek Harness — reverse-engineered and benchmarked against WorkBuddy's Enhance prompt. |
| 301 | [total-quality/dsh-total-quality](https://github.com/total-quality/dsh-total-quality) | 0 | 2026-11-17 | 2026-11-17 | 全质开源质量平台：DeepSeek Harness 插件，本地 SQLite 质量问题与 8D 项目管理、SPC 统计、体系文件和 Word/Excel 导出。 |
| 302 | [trexwb/dsh-wb-free-model](https://github.com/trexwb/dsh-wb-free-model) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件 · 装上即用的免费模型车道：免登录、免 API Key。隔离运行 OpenCode，自动发现并探测零成本模型（OpenCode + Kilo），WB · auto 加权选型，信封协议承载工具循环。 |
| 303 | [uitTe/dsh-sidebar-restore](https://github.com/uitTe/dsh-sidebar-restore) | 0 | 2026-11-17 | 2026-11-17 | 为 DeepSeek Harness 的 Windows 桌面端把收起后消失的侧边栏还原为 56px 图标轨道：悬停浮出工作区卡片，可在设置页自定义侧边栏颜色、透明度与图标显隐。Restores the collapsed sidebar as a 56px icon rail in DeepSeek Harness for Windows — hover workspace flyout, customizable sidebar colors, and a minimal-rail mode. |
| 304 | [universe-st/dsh-session-scheduler](https://github.com/universe-st/dsh-session-scheduler) | 0 | 2026-11-17 | 2026-11-17 | Session scheduling tools for DeepSeek Harness (DSH): open a session in any project, message a running or stopped session (queue or steer), stop its turn, archive or restore it, and wait for it to finish. |
| 305 | [vacum972/dsh-page-translate](https://github.com/vacum972/dsh-page-translate) | 0 | 2026-11-17 | 2026-11-17 | DSH 右侧边栏浏览器的沉浸式双语网页翻译：原文保留、译文插入其下，支持整站自动翻译、滚动续翻与引擎切换 |
| 306 | [vaspike/dsh-usage-stat](https://github.com/vaspike/dsh-usage-stat) | 0 | 2026-11-17 | 2026-11-17 | Token usage statistics for DeepSeek Harness: per-route tokens, cache hit rate, TPS, and a GitHub-style usage heatmap |
| 307 | [vlln/dsh-better-trajectory](https://github.com/vlln/dsh-better-trajectory) | 0 | 2026-11-17 | 2026-11-17 | 把 DSH 内置的「轨迹」换成一个能查的调试面：一条可组合的查询、一套统一的四页签详情、一个就是日志本身的「原始」（DeepSeek Harness 插件） |
| 308 | [w21180239/dsh-self-compact](https://github.com/w21180239/dsh-self-compact) | 0 | 2026-11-17 | 2026-11-17 | Agent-initiated compaction for DeepSeek Harness: the model picks the milestone, writes the handoff, native compaction runs after the turn, and work resumes by itself. |
| 309 | [WanchengWildMan/dsh-hcom](https://github.com/WanchengWildMan/dsh-hcom) | 0 | 2026-11-17 | 2026-11-17 | Local hcom messaging tools for DeepSeek Harness (DSH) |
| 310 | [weseeon/dsh-session-topics](https://github.com/weseeon/dsh-session-topics) | 0 | 2026-11-17 | 2026-11-17 | 给 DSH 的每个会话配一份可导航的主题目录。 |
| 311 | [WinterOne-hub/dsh-DeepChat](https://github.com/WinterOne-hub/dsh-DeepChat) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness chat plugin / DSH 加密聊天插件 · Share messages, files and AI replies, then discuss them in a new model session. |
| 312 | [world-eternity/dsh-strata-preset](https://github.com/world-eternity/dsh-strata-preset) | 0 | 2026-11-17 | 2026-11-17 | Strata（层积）· DeepSeek Harness agent preset：报像 → 断言核 → 预登记判据 → 行动 → 用新像回来。六种失败、更新闸门、单向对。 |
| 313 | [wsl1602291891-stack/dsh-restart-center](https://github.com/wsl1602291891-stack/dsh-restart-center) | 0 | 2026-11-17 | 2026-11-17 | Restart control for the DeepSeek Desktop window chrome: two-step confirm, running-session warning, plugin install/queue notice. |
| 314 | [wsl1602291891-stack/dsh-zhilian-api](https://github.com/wsl1602291891-stack/dsh-zhilian-api) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: one-click NewAPI authorization, per-group keys, protocol-routed models |
| 315 | [Wuqiyang312/dsh-git-workspace](https://github.com/Wuqiyang312/dsh-git-workspace) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：粘贴一个 Git 地址就能开工作区——Host 端克隆仓库、登记为 DeepSeek Harness 工作区并自动进入新会话。 · A DeepSeek Harness plugin: paste a Git address, the repo is cloned, registered as a workspace, and a new session opens in it. |
| 316 | [wuxiaozp/dsh-netgate](https://github.com/wuxiaozp/dsh-netgate) | 0 | 2026-11-16 | 2026-11-17 | NetGate for DeepSeek Harness: one switch that cuts the model off the internet on phone (dsh-go) and Windows (DSH Desktop), with most local work left intact. |
| 317 | [xiaomao361/dsh-conversation-title](https://github.com/xiaomao361/dsh-conversation-title) | 0 | 2026-11-16 | 2026-11-17 | DeepSeek Harness plugin for naming and batch-organizing conversations with shared workspace title templates. |
| 318 | [xiaomao361/dsh-jand](https://github.com/xiaomao361/dsh-jand) | 0 | 2026-11-03 | 2026-11-17 | DeepSeek Harness plugin for encrypted file handoffs and cross-device agent collaboration via Jand. |
| 319 | [xq25478/dsh-usage-statistics](https://github.com/xq25478/dsh-usage-statistics) | 0 | 2026-11-17 | 2026-11-17 | A DeepSeek Harness plugin adding per-day and per-hour token usage, cache hit rate, and a live request log (用量统计) |
| 320 | [xuanfenglajiao/dsh-mcp-more-panel](https://github.com/xuanfenglajiao/dsh-mcp-more-panel) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness 的 MCP 服务器管理面板：全局与项目作用域、多来源配置读取、仓库配置批准与指纹校验。 |
| 321 | [xvxianjin/dsh-doc-pane](https://github.com/xvxianjin/dsh-doc-pane) | 0 | 2026-11-17 | 2026-11-17 | 在 DeepSeek Harness 右栏编辑当前会话正在改的 Markdown 文档 |
| 322 | [y1s2y3/dsh-whiteboard](https://github.com/y1s2y3/dsh-whiteboard) | 0 | 2026-11-17 | 2026-11-17 | DSH 手写白板插件：无限画布、手写笔书写/擦除、单指平移、双指缩放、三栏工具栏、检查更新（本地数据，无遥测） |
| 323 | [yangyanlu06/dsh-douyin-wallpaper](https://github.com/yangyanlu06/dsh-douyin-wallpaper) | 0 | 2026-11-17 | 2026-11-17 | 抖音壁纸：粘贴一条抖音链接，DSH 的极简界面就变成它的播放背景。视频铺满窗口，界面像磨砂玻璃浮在上面。 |
| 324 | [yangyanlu06/dsh-turn-cost-chip](https://github.com/yangyanlu06/dsh-turn-cost-chip) | 0 | 2026-11-17 | 2026-11-17 | Show what each reply costs, in CNY, inside DeepSeek Harness |
| 325 | [ycegg/dsh-a2a-doorbell](https://github.com/ycegg/dsh-a2a-doorbell) | 0 | 2026-11-17 | 2026-11-17 | A2A doorbell plugin for DeepSeek Harness: ring a local HTTP endpoint and wake a DSH session instantly. |
| 326 | [yczhang1028/dsh-model-leaderboard](https://github.com/yczhang1028/dsh-model-leaderboard) | 0 | 2026-11-17 | 2026-11-17 | Live OpenRouter model rankings in the DeepSeek Harness sidebar: quality indices, Elo, usage and per-million-token prices, with one-click default model. |
| 327 | [yehuoshun/dsh-media-ledger](https://github.com/yehuoshun/dsh-media-ledger) | 0 | 2026-11-17 | 2026-11-17 | DSH ??????:???(??/???/B?/???)??????????????(???????) |
| 328 | [yeloooooooooo/dsh-worklog-calendar](https://github.com/yeloooooooooo/dsh-worklog-calendar) | 0 | 2026-11-17 | 2026-11-17 | DSH 插件：把工作任务排在甘特图日历上，记录每天做了什么，并在任务到点时用右下角浮窗提醒。 |
| 329 | [yhm138/dsh-btw](https://github.com/yhm138/dsh-btw) | 0 | 2026-11-17 | 2026-11-17 | Antigravity-style /btw side questions for DeepSeek Harness: a disposable forked child agent with full tools in its own right-Sidebar tab, zero main-context growth. |
| 330 | [YiDaWuYi/dsh-manga-workflow](https://github.com/YiDaWuYi/dsh-manga-workflow) | 0 | 2026-11-17 | 2026-11-17 | dsh-manga-workflow |
| 331 | [youkucola/dsh-videostory](https://github.com/youkucola/dsh-videostory) | 0 | 2026-11-14 | 2026-11-17 | DSH 视频剧情解析插件：硬字幕 OCR + 镜头切分 + 复用 DSH 内置模型的多工具工具带 |
| 332 | [yueyao/dsh-session-manager](https://github.com/yueyao/dsh-session-manager) | 0 | 2026-11-17 | 2026-11-17 | DSH plugin: batch browse, archive, delete and restore history sessions |
| 333 | [yyliucha/dsh-session-quote](https://github.com/yyliucha/dsh-session-quote) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness plugin: quote a message from an earlier session into the composer, so the reply is clearly aimed at that message. 在输入框里引用之前会话的一条消息再回复。 |
| 334 | [yyliucha/dsh-skill-switcher](https://github.com/yyliucha/dsh-skill-switcher) | 0 | 2026-11-13 | 2026-11-17 | DeepSeek Harness plugin: switch each agent skill on, to user-only, or off from the composer and Settings, writing the SKILL.md invocation fields. 在输入框弹层与设置页里一键切换 agent 技能的调用状态。 |
| 335 | [z99wE/tokenomics-plugin](https://github.com/z99wE/tokenomics-plugin) | 0 | 2026-11-17 | 2026-11-17 | Token- and context-aware efficiency layer for AI agents — compresses prose, minimizes code via YAGNI, tracks savings. DeepSeek Harness (DSH), Claude Code, Cursor, Codex &amp; Hermes. |
| 336 | [zbh13782-lang/dsh-ask-reader](https://github.com/zbh13782-lang/dsh-ask-reader) | 0 | 2026-11-17 | 2026-11-17 | Reading board for DeepSeek Harness: pin an assistant reply into the right sidebar as rendered Markdown, then send a selected passage back to the composer as a quote. |
| 337 | [ZemonVunter/qiqi-scan-triage](https://github.com/ZemonVunter/qiqi-scan-triage) | 0 | 2026-11-17 | 2026-11-17 | QiQi的安全研判 Agent 预设与技能（DeepSeek Harness 插件，仅限防御用途） |
| 338 | [zeyeyuki/dsh-prompt-optimizer](https://github.com/zeyeyuki/dsh-prompt-optimizer) | 0 | 2026-11-17 | 2026-11-17 | Offline prompt optimizer plugin for DeepSeek Harness: an Optimize prompt chip beside the composer expands any rough prompt into a structured one. No API key, no network, no model call. |
| 339 | [zghoto/dsh-quick-update](https://github.com/zghoto/dsh-quick-update) | 0 | 2026-11-17 | 2026-11-17 | Row-level check, update and uninstall controls for the DeepSeek Harness Plugins page, including Git-installed plugins. |
| 340 | [zhiwuli0228/agent-memory-hub](https://github.com/zhiwuli0228/agent-memory-hub) | 0 | 2026-11-15 | 2026-11-17 | Agent memory bridge — local-first, human-approved, file-native memory for Claude Code, Codex, opencode &amp; gemini |
| 341 | [ZoeDong/dsh-feishu](https://github.com/ZoeDong/dsh-feishu) | 0 | 2026-11-17 | 2026-11-17 | DeepSeek Harness (DSH) 飞书/Lark 集成插件集：应用身份创建电子表格并授权（权限隔离）+ 读写表格的 MCP 工具。 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 1334104926/dsh-row-multiselect
- 2228293026/dsh-model-usage
- abinadwan/DSH-ABINADWAN-Plugins-Suite
- AndreTheAccelerator/dsh-design-canvas
- Chance-Wu/dsh-change-center
- Chance-Wu/dsh-task-capsule
- ColdRainLab/dsh-feature-check
- ColdRainLab/dsh-session-delete
- ColdRainLab/dsh-workspace-plus
- ColdRainLab/dsh-workspace-sync
- ColdRainLab/dsh-workspace-vault
- cookabc/dsh-change-preview
- cookabc/dsh-understand-anything
- Diccup/dsh-fp-search
- fanshong/dsh-docker-sidebar
- FlashPoint007/dsh-wecom-soul-bot
- gustavofullstack/harness-mac
- Hanmingh/dsh-desktop
- intpfx/OpenFX
- Jidaron/dsh-browser-bridge
- JMINN0/dsh-go-plugin-adb
- JRNitre/dsh_deepseekapi_quota
- lizhi00001/dsh-tools-plugins
- lubanqihao9875/dsh-figma-mcp
- lyufeng000/dsh-live-markdown-math
- lyufeng000/dsh-market-console
- lyufeng000/dsh-mcp-manager
- lyufeng000/dsh-model-probe
- onehumanbeing/esp32-iphone-agent
- Physicolor/dsh-lifeline
- Saikel-Orado-Liu/dsh-archive-manager
- Saikel-Orado-Liu/dsh-coding-preset
- Saikel-Orado-Liu/dsh-cost-meter
- Yelo0525/dsh-answer-style
- Yelo0525/dsh-rightbar-width-memory
- Yelo0525/dsh-worklog-calendar
- Yelo0525/dsh-workspace-file-drag
- Yelo0525/dsh-workspace-files-autoshow
- Yo1ick/dsh-mac-access
- yxzf1129/dsh-blackhistory-weekly
