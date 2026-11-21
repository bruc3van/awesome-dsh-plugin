# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-21**
- 快照日期 / Snapshot date: **2026-11-21 (UTC)**
- 待审核 / Pending: **288**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **19**
- Star 异常增长 / Star-growth alerts: **8** — 先看下方告警节 / see the alert section first
- 改名/身份待复核 / Renames pending review: **40**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`（仅限制 Star 排行榜，不影响正规插件进入下游市场）
- desktop 客户端 / 桌面壳 / 启动器 → `leaderboard_exclusions` + `market_exclusions`（TOP200 与下游市场都不出现）
- market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ `leaderboard_exclusions` + `market_exclusions` 留底（市场不能包含市场）
- 其余非插件形态（手册教程、Docker、VS Code 扩展、配套工具等）与无安装路径的通用工具 → `excluded_repos` 整体剔除（同步从 `approved.json` 移除）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录
- Star 异常增长（见告警节）→ 先做增强分析；热度并非来自 DSH 插件本身时，核准也加入 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (off the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json` (applies to the Star board only; genuine plugins can still reach the downstream market)
- Desktop client / shell / launcher → `leaderboard_exclusions` + `market_exclusions` (absent from both TOP200.md and the downstream market)
- Market class (plugin market, store, skill mall, desktop with a built-in market) → `leaderboard_exclusions` + a `market_exclusions` backstop entry (the market cannot include another market)
- Other non-plugin forms (handbooks, Docker, VS Code extensions, companion tooling) and generic tools without a DSH install path → `excluded_repos` outright (also removed from `approved.json`)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright
- Star-growth alerts (see the section below) → extra analysis first; if the stars are not from the DSH plugin itself, approve into `leaderboard_exclusions` as well

See [data/review/README.md](./README.md) for the full convention.

## ⚠️ Star 异常增长 / Star-growth alerts

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」「单日净减 ≥100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, that lost ≥100 stars in one interval (GitHub clawing back farmed stars), or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-11-20** / vs previous snapshot **2026-11-20**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **8**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [mochi-fish/dsh-fish](https://github.com/mochi-fish/dsh-fish) | 待审 / pending | 176 | +3 | 19 | 27d | 待审高星 | 核准即榜 #170 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 83055 | +991 | 2337 | 57d | 日增百星 | 日增 +991★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 14632 | +743 | 1435 | 193d | 日增百星 | 日增 +743★；已不进榜单 |
| ⚠️ [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) | 已核准 / approved | 5824 | +464 | 581 | 1096d | 日增百星 | 日增 +464★；已不进榜单 |
| ⚠️ [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 已核准 / approved | 30223 | +262 | 3217 | 215d | 日增百星 | 日增 +262★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 20489 | +223 | 699 | 99d | 日增百星 | 日增 +223★；已不进榜单 |
| ⚠️ [Jestions-dev/dsh-download-server](https://github.com/Jestions-dev/dsh-download-server) | 已核准 / approved | 225 | +77 | 0 | 12d | 榜单跃升 | 榜单 193→130；高星零 fork |
| ⚠️ [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 已核准 / approved | 389 | -328 | 12 | 18d | 单日大幅掉星 | 单日 -328★，疑似批量清号回收（此前或为刷星）；已不进榜单 |

## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `1250589385/dsh-quick-send` → `Raysnows/dsh-quick-send` — owner changed — transfer needs review
- `1250589385/dsh-rescue-guard` → `Raysnows/dsh-rescue-guard` — owner changed — transfer needs review
- `1250589385/dsh-stall-guard` → `Raysnows/dsh-stall-guard` — owner changed — transfer needs review
- `1250589385/dsh-test-autofix` → `Raysnows/dsh-test-autofix` — owner changed — transfer needs review
- `1250589385/dsh-vendor-quick-switch` → `Raysnows/dsh-vendor-quick-switch` — owner changed — transfer needs review
- `raheemmiyasin/dsh-theme-palette` → `raheemmi/dsh-theme-palette` — owner changed — transfer needs review
- `ssamurias/dsh-fish` → `mochi-fish/dsh-fish` — owner changed — transfer needs review
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
- `windy-0-0/opencode-free-lane-tls-gate` → `Mizar-Silexeth/opencode-free-lane-tls-gate` — owner changed — transfer needs review
- `xiaoxianxian/multi-proxy` → `sif-king/costgate` — owner changed — transfer needs review
- `zendev-lab/cogfold` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `zendev-lab/spark` → `zendev-lab/ulota` — target slug already exists with different data — needs review
- `kirkchinese/claude2dsh` → `kirkchinese/harness-forge` — rename detected, but no stored reference found — check manually
- `BannyLon/dsh-npie-reader` — identity change: repository id 1465172182 → 1466219515 under the same slug — approval needs review
- `agenius666/dsh-ai-database-assistant` — identity change: repository id 1464259810 → 1466481958 under the same slug — approval needs review
- `beidou6972yh/dsh-bw-router` — identity change: repository id 1458132057 → 1466797504 under the same slug — approval needs review
- `shuixing14/dsh-session-manager` — identity change: repository id 1457399557 → 1466566704 under the same slug — approval needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [mochi-fish/dsh-fish](https://github.com/mochi-fish/dsh-fish) ⚠️ | 176 | 2026-10-24 | 2026-11-21 | DSH插件：养一个会自己刷b站会成长的agent：不通过面板配置，通过学习诞生人格。 |
| 2 | [JimLiu/open-artifact](https://github.com/JimLiu/open-artifact) | 131 | 2026-11-17 | 2026-11-21 | Open, agent- and model-agnostic artifacts, all saved locally as plain files — edit, comment on, and export slides, UI designs, design systems, whiteboards, sheets, dashboards, docs, and motion. |
| 3 | [thePlannerIvan/planners-form](https://github.com/thePlannerIvan/planners-form) | 27 | 2026-10-13 | 2026-11-21 | Planner's Desk 一键安装器（DSH 插件）：在设置页一键勾选安装整套 Skill、自动准备依赖与检查更新 |
| 4 | [fengshiyangrouguan/dsh-closure-pet](https://github.com/fengshiyangrouguan/dsh-closure-pet) | 20 | 2026-11-17 | 2026-11-21 | 《明日方舟》可露希尔卫戍协议皮肤的 DeepSeek Harness 桌宠插件：动画交互、像素气泡、余额与花费提示 |
| 5 | [AIcivilization/dsh-her](https://github.com/AIcivilization/dsh-her) | 5 | 2026-10-21 | 2026-11-21 | 🐳 鲸鱼娘的身体引擎：住在壁纸里、浮在桌面上、住在网页和手机里，会说话、会听、会先开口、记得你。DeepSeek Harness (dsh) 插件 · A body engine for AI desktop companions. |
| 6 | [liangdabiao/dsh-interactive-courseware](https://github.com/liangdabiao/dsh-interactive-courseware) | 4 | 2026-11-20 | 2026-11-21 | dsh-interactive-courseware 课件放映厅 把一节课的讲义交给 agent，还你一套能直接上课的翻页互动课件——播放器、页面骨架、打包脚本、机械盘点、单文件打包、档案预览全部内置，零 API 密钥。课件放映厅：把一节课的讲义做成翻页互动课件（dsh 全形态插件：skill 快照+机械盘点+单文件打包+真实播放器预览） |
| 7 | [bigm4ngo/dsh-oh-my-gravity](https://github.com/bigm4ngo/dsh-oh-my-gravity) | 3 | 2026-11-21 | 2026-11-21 |  Run your signed-in Google Antigravity CLI (agy) as a model provider inside DeepSeek Harness — no API key, just the login agy already has. ACP transport, streaming, DSH tool rows and approvals. Unofficial. |
| 8 | [kingsznhone/dsh-plugin-orca-pod](https://github.com/kingsznhone/dsh-plugin-orca-pod) | 3 | 2026-11-20 | 2026-11-21 | 分布式哦鲸鲸，全连接跨平台dsh组网 |
| 9 | [Chemiofitor4096/minecraft-dev-atlas](https://github.com/Chemiofitor4096/minecraft-dev-atlas) | 2 | 2026-11-21 | 2026-11-21 | DSH plugin that exports registries, tags and a recipe index from a running Minecraft server, with token-efficient queries and a data panel |
| 10 | [DrizzleGig/dsh-novel-conductor](https://github.com/DrizzleGig/dsh-novel-conductor) | 2 | 2026-11-21 | 2026-11-21 | 想让每一章都写得有条不紊，不遗漏重要的剧情选择，也不让写完后的事情乱成一团？「舞台监督」帮助小说作者安排好每章的写作顺序：先拍板，再写故事，写完后整理进展、核对内容，最后收好尾。它不替你写正文，也不改动其他写作工具里的记录；即使单独使用也没问题。写作卡住时，它会告诉你停在了哪一步。 |
| 11 | [jiangxingfan1-coder/Open-Agent-API](https://github.com/jiangxingfan1-coder/Open-Agent-API) | 2 | 2026-11-13 | 2026-11-21 | Turn agents into an API. Call an agent, not a model, with the official OpenAI, Claude or Gemini SDK. 把智能体变成 API。 |
| 12 | [Raysnows/dsh-rescue-guard](https://github.com/Raysnows/dsh-rescue-guard) | 2 | 2026-11-07 | 2026-11-21 | Standalone rescue for a broken DeepSeek Harness profile: crash classification, pre-flight checks, safe mode and manifest snapshots, plus a zero-cost event-driven crash watcher. |
| 13 | [shiquanchai/dsh-workbuddy-pool](https://github.com/shiquanchai/dsh-workbuddy-pool) | 2 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 的 WorkBuddy 账号池插件：多账号自动签到领积分、余额快照、按会话归因积分消耗，含账号池反代。 |
| 14 | [W3967/dsh-comfyui-panel](https://github.com/W3967/dsh-comfyui-panel) | 2 | 2026-11-21 | 2026-11-21 | A generic ComfyUI front end for DeepSeek Harness: import any API-format workflow, get a form generated from its graph. Ships Krea 2 presets. · DSH 里的通用 ComfyUI 工作台：导入任意 API 格式工作流，自动生成参数表单；内置 Krea 2 预设。 |
| 15 | [whyguagua/dsh-qq-bridge](https://github.com/whyguagua/dsh-qq-bridge) | 2 | 2026-11-21 | 2026-11-21 | QQ 个人号（NapCat / OneBot11）接入 DeepSeek Harness：私聊/群聊、人格与记忆、生图、面板 |
| 16 | [ab1324569/dsh-deepseek-art](https://github.com/ab1324569/dsh-deepseek-art) | 1 | 2026-11-21 | 2026-11-21 | Give text-only LLMs an editable pixel-art brush for DeepSeek Harness: structured shapes -&gt; deterministic local PNG, with an editable canvas and gallery. |
| 17 | [AeolusJack/dsh-computer-pro](https://github.com/AeolusJack/dsh-computer-pro) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness desktop control, local OCR, app launch and isolated browser DOM. Windows tested; macOS experimental. |
| 18 | [aivos-xie/dsh-glass-ui](https://github.com/aivos-xie/dsh-glass-ui) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 玻璃外观插件：分层磨砂、可调玻璃强度与背景色调，跟随深浅主题 \| Glassmorphism skin for DeepSeek Harness (dsh) |
| 19 | [Annaabdullayeva/dsh-termux-adb-clashMeta](https://github.com/Annaabdullayeva/dsh-termux-adb-clashMeta) | 1 | 2026-11-21 | 2026-11-21 | Enable the web version of DeepSeek Harness in the Termux environment to directly control the Clash Meta service on an Android system via ADB commands. 让termux环境中的deepseek harness网页版能够直接通过adb命令操作安卓系统中的clash meta。 |
| 20 | [antimatter2020/dsh-assoc-mem](https://github.com/antimatter2020/dsh-assoc-mem) | 1 | 2026-11-20 | 2026-11-21 | 让AI像动物那样联想式记忆（以省token的方式\[确信\]）。 |
| 21 | [at3623/dsh-vocab-review](https://github.com/at3623/dsh-vocab-review) | 1 | 2026-11-19 | 2026-11-21 | 上传划线的单词表图片 → 自动提取划线词并逐词抽查；三档判定（会/半会/不会）+ 插件复核模型判分、错词间隔复习、薄弱词本可导出 CSV、每日限额、到期提醒、可选 QQ 通道。DSH plugin: image import → underlined words → one-word quiz loop with three-tier grading and plugin-side verdict verification, spaced repetition, weak-word book + CSV export, QQ channel. |
| 22 | [chrischjh/dsh-stageshow](https://github.com/chrischjh/dsh-stageshow) | 1 | 2026-11-20 | 2026-11-21 | DSH plugin: ships the Stageshow skill (faux product UI illustrations in React, benjitaylor/skills v1.1.1) as a DSH skill with a hash-lock self-check |
| 23 | [DrizzleGig/dsh-novel-kit](https://github.com/DrizzleGig/dsh-novel-kit) | 1 | 2026-11-21 | 2026-11-21 | Novel-writing engine for DSH: seven novel_* tools take a chapter from plan to committed text, with a six-tab panel; reads beat/fade/voice/fanfic ledgers in place. |
| 24 | [EthanZhu-07/capability-value-test](https://github.com/EthanZhu-07/capability-value-test) | 1 | 2026-11-17 | 2026-11-21 | Agent Skill for visual, traceable A/B tests of newly integrated AI capabilities, models, MCP servers, browsers, and workflows |
| 25 | [Fandral618/dsh-session-relay](https://github.com/Fandral618/dsh-session-relay) | 1 | 2026-11-18 | 2026-11-21 | DeepSeek Harness 插件：把两个互相独立的会话配成一对，在开发与评审之间来回投递消息（排队到下一回合、唤醒空闲对端、或一次性投递）。 |
| 26 | [firefoxbig/dsh-seasonal-theme](https://github.com/firefoxbig/dsh-seasonal-theme) | 1 | 2026-11-21 | 2026-11-21 | Four-season gradient themes for DeepSeek Harness: sidebar theme studio, automatic seasonal switching, full light/dark palettes. |
| 27 | [fubai-fenzhi/dsh-procedures](https://github.com/fubai-fenzhi/dsh-procedures) | 1 | 2026-11-19 | 2026-11-21 | File-based experience cards for DSH and other agents: a matching tool error injects a one-line pointer to a local card (not the whole card), with hit stats, rarity, cross-machine sync, a community library and a portable kit. MIT. |
| 28 | [Godward-Bound/dsh-env-doctor](https://github.com/Godward-Bound/dsh-env-doctor) | 1 | 2026-11-21 | 2026-11-21 | DSH plugin: 一条命令查本机端口/磁盘/DSH 快照占用 |
| 29 | [gougou1993/dsh-file-manager](https://github.com/gougou1993/dsh-file-manager) | 1 | 2026-11-21 | 2026-11-21 | dsh 文件管理插件； dsh-file-manager |
| 30 | [gougou1993/dsh-redis-client](https://github.com/gougou1993/dsh-redis-client) | 1 | 2026-11-21 | 2026-11-21 | dsh Redis客户端插件；dsh-redis-client  |
| 31 | [gougou1993/dsh-sticky-notes](https://github.com/gougou1993/dsh-sticky-notes) | 1 | 2026-11-21 | 2026-11-21 | dsh 便利贴插件；dsh-sticky-notes Plugin |
| 32 | [gougou1993/dsh-tree-new-bee-api-client](https://github.com/gougou1993/dsh-tree-new-bee-api-client) | 1 | 2026-11-21 | 2026-11-21 | DSH Plugin，类 Postman 的接口调试工具：请求构造、集合树、环境变量、常用头与历史记录。 |
| 33 | [htfy23/dsh-velocity](https://github.com/htfy23/dsh-velocity) | 1 | 2026-11-15 | 2026-11-21 | Session velocity auditor for DeepSeek Harness: measures reclaimable wait time and reports the speedup percentage per round. |
| 34 | [ixxgal/dsh-plugins](https://github.com/ixxgal/dsh-plugins) | 1 | 2026-11-21 | 2026-11-21 | ixxgal 的全部 DSH 插件：一个仓库、一个索引，装的时候只认一个链接。 |
| 35 | [jdzpd666/dsh-computer-replacer-lite](https://github.com/jdzpd666/dsh-computer-replacer-lite) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin for Windows computer use: UIA-first, approval-gated, zero-image read paths, 14 tools. |
| 36 | [L1daye/dsh-rust-anything](https://github.com/L1daye/dsh-rust-anything) | 1 | 2026-11-20 | 2026-11-21 | DeepSeek Harness plugin for rust-anything: 16 MCP tools as mcp__rust_anything__*, 5 ra_* host tools, a port board page, a tool-surface switch and one-click toolchain bootstrap. Windows only; verified on DSH 0.2.2-rc.3. |
| 37 | [LouieKeung-13/dsh-task-toast](https://github.com/LouieKeung-13/dsh-task-toast) | 1 | 2026-10-27 | 2026-11-21 | A lightweight, independent card-style task completion notification plugin for DeepSeek Harness (DSH). |
| 38 | [LZM-P/dsh-plugin-rack](https://github.com/LZM-P/dsh-plugin-rack) | 1 | 2026-11-13 | 2026-11-21 | DSH 插件管理台：所有插件一屏看完，一个开关直接开关，更新完自动热替换不用重启 / Plugin dashboard for DSH: every plugin in one list with a power switch, auto/manual flag, and hot-swapped updates. |
| 39 | [Maxc100/dsh-cloud-backup](https://github.com/Maxc100/dsh-cloud-backup) | 1 | 2026-10-30 | 2026-11-21 | dsh-cloud-backup：把 DSH 会话与配置去重后备份到云盘（阿里云盘首发） |
| 40 | [MildTempest/dsh-team-collab-panel](https://github.com/MildTempest/dsh-team-collab-panel) | 1 | 2026-11-21 | 2026-11-21 | DSH 多模型团队协作面板：模型菜单内实时协作状态 + 手动偏好提交给队长 + 授权/上限编辑 \| Multi-model team collaboration panel for DeepSeek Harness |
| 41 | [momoqiqi-qwq/dsh-session-top-new-plus](https://github.com/momoqiqi-qwq/dsh-session-top-new-plus) | 1 | 2026-11-21 | 2026-11-21 | DSH 会话总览 · 中文增强版：侧栏活动铃铛 + 会话悬浮条，运行中/未读/最近三段视图、侧栏定位、面板主题、右键书签。基于 cuijiajun/dsh-session-top-new 的社区二改。 |
| 42 | [Mooling0602/awesome-mooling-dsh-plugins](https://github.com/Mooling0602/awesome-mooling-dsh-plugins) | 1 | 2026-11-10 | 2026-11-21 | My dsh-plugins. |
| 43 | [Muhan-Q/dsh-chat-switch](https://github.com/Muhan-Q/dsh-chat-switch) | 1 | 2026-11-21 | 2026-11-21 | Chat ⇄ Harness switch in the DSH sidebar with a chat.deepseek.com bridge |
| 44 | [qingtiannew/dsh-local-browser-access](https://github.com/qingtiannew/dsh-local-browser-access) | 1 | 2026-11-20 | 2026-11-21 | 【DSH插件高频开发者使用】让同一台电脑上的浏览器无需复制启动 Token 即可访问 DSH Web，方便 ChatGPT、Trae、ZCode 等开发工具的内置浏览器配合自动化插件操控页面、快速验证 DSH 插件改动。 |
| 45 | [Raysnows/dsh-quick-send](https://github.com/Raysnows/dsh-quick-send) | 1 | 2026-10-17 | 2026-11-21 | DSH 一键快捷输入：在消息输入框旁边放一排可自定义的快捷指令按钮，点一下就把预设文字直接发送到当前对话，省去重复打字。名称、字号、透明度、模块化形状与发送内容均可就地编辑。 |
| 46 | [Raysnows/dsh-stall-guard](https://github.com/Raysnows/dsh-stall-guard) | 1 | 2026-10-20 | 2026-11-21 | DSH 卡顿守卫：下载卡住时自动中止，并把「换源」提示写给智能体。按类型独立配置，不调用任何模型。 |
| 47 | [Raysnows/dsh-test-autofix](https://github.com/Raysnows/dsh-test-autofix) | 1 | 2026-10-19 | 2026-11-21 | DSH 测试自动修复：给 agent 一个 run_tests 工具，跑测试并把结构化失败（文件/行号/断言）直接交给它修复。自动识别 pytest / jest / vitest / cargo / go / npm，Windows 中文断言不乱码，同一失败反复出现时自动停止。 |
| 48 | [Raysnows/dsh-vendor-quick-switch](https://github.com/Raysnows/dsh-vendor-quick-switch) | 1 | 2026-11-16 | 2026-11-21 | Vendor-first quick model switching for DeepSeek Harness: a side index beside the shipped model menu plus an in-menu mode. |
| 49 | [Richology/dsh-session-delete](https://github.com/Richology/dsh-session-delete) | 1 | 2026-11-21 | 2026-11-21 | Permanent session deletion for DeepSeek Harness on macOS. |
| 50 | [sakemo12/harness-lingo-translator](https://github.com/sakemo12/harness-lingo-translator) | 1 | 2026-11-21 | 2026-11-21 | 使用大语言模型翻译Deepseek Harness思考、执行过程，在不污染上下文的情况下在前端显示翻译结果，便利非英文母语用户Vibe Coding。支持本地翻译服务（推荐hy-mt1.5-1.8b），支持翻译历史缓存，支持悬停对照，支持自定义提示词，更多设置选项 |
| 51 | [says693/dsh-scatter](https://github.com/says693/dsh-scatter) | 1 | 2026-10-18 | 2026-11-21 | Prompt optimizer for the DeepSeek Harness (DSH) composer: rewrite the draft with the session's current model, stream it back into the input, or generate candidates to pick from. |
| 52 | [sayzwx/dsh-daily-workspace](https://github.com/sayzwx/dsh-daily-workspace) | 1 | 2026-06-13 | 2026-11-21 | Default daily workspace + recent conversations for the DeepSeek Harness sidebar |
| 53 | [sayzwx/dsh-monitor](https://github.com/sayzwx/dsh-monitor) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 监控台插件：按模型、按任务查看调用量、缓存命中率与花费（模型占比 / 每日趋势图表） |
| 54 | [shskyc/dsh-conversation-search](https://github.com/shskyc/dsh-conversation-search) | 1 | 2026-11-21 | 2026-11-21 | Ctrl+F in-session search for DeepSeek Harness conversations with Office-style match list and in-place highlighting |
| 55 | [SpookyWaste/dsh-time-context-off](https://github.com/SpookyWaste/dsh-time-context-off) | 1 | 2026-11-21 | 2026-11-21 | 精简time-context自动注入，只保留设置里勾选的部分 |
| 56 | [Thousand-Beam/dsh-shared-memories](https://github.com/Thousand-Beam/dsh-shared-memories) | 1 | 2026-11-16 | 2026-11-21 | 基于 Git 的原生外置云脑 · 全状态漫游引擎 关机即快照，开机即还原。 换台机器，你的 AI 还是同一个 AI——记忆、人格、工作区，一个字节都不差。 |
| 57 | [Timmmmmms/dsh-howtolive](https://github.com/Timmmmmms/dsh-howtolive) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness (dsh) plugin for HowToLiveBetter — 人生补丁：基于《高性价比人生指南》的循证决策仪表盘、LIFE-CVE 漏洞扫描、关系星图与 AI 人生体检官 |
| 58 | [TwinsEarth/Ai-PRISON](https://github.com/TwinsEarth/Ai-PRISON) | 1 | 2026-10-25 | 2026-11-21 | AI Prison — defensive infrastructure for graded capability deprivation, isolation, revocation and behavioral correction of AI Agents. |
| 59 | [Uneadlight/fatfish-lab](https://github.com/Uneadlight/fatfish-lab) | 1 | 2026-10-30 | 2026-11-21 | 一个跑在 DSH 里的 AI 编码智能体：手搓 4KB 页 B+树、Socket RPC、多智能体编排，151 项测试全绿，本地小模型 + 云端协同。 |
| 60 | [WJPGKZ/dsh-tidal-memory](https://github.com/WJPGKZ/dsh-tidal-memory) | 1 | 2026-11-04 | 2026-11-21 | DeepSeek Harness rc5 memory: workspace-shared L0-L3 storage, evidence-based recall and native settings UI. |
| 61 | [xiaobin118/dsh-quiz-tutorial](https://github.com/xiaobin118/dsh-quiz-tutorial) | 1 | 2026-11-21 | 2026-11-21 | 刷题场：把复习内容变成题集，题目旁给逐步手算解析，错题自动进错题本；支持 /skill 出题。A DeepSeek Harness practice-deck plugin. |
| 62 | [xiongking/dsh-reverse-proxy-gateway](https://github.com/xiongking/dsh-reverse-proxy-gateway) | 1 | 2026-11-10 | 2026-11-21 | 把 DSH 的本地 Web 服务安全地反代到公网：固定监听端口、Basic Auth、免密链接、自动注入宿主会话 cookie，支持 WebSocket 与流式响应。 |
| 63 | [xxccdl/LensComputerControl](https://github.com/xxccdl/LensComputerControl) | 1 | 2026-11-21 | 2026-11-21 | The most powerful computer control plugin in the word (dsh plugin),support java client ,wechat ......all kinds of app |
| 64 | [yaojie-dev/netswitch](https://github.com/yaojie-dev/netswitch) | 1 | 2026-11-21 | 2026-11-21 | macOS 网线/Wi-Fi 一键切换工具 |
| 65 | [z-axk/dsh-clipboard-history](https://github.com/z-axk/dsh-clipboard-history) | 1 | 2026-11-21 | 2026-11-21 | DeepSeek Harness clipboard history plugin with cross-app capture |
| 66 | [zakeluo/dsh-review-desk](https://github.com/zakeluo/dsh-review-desk) | 1 | 2026-11-21 | 2026-11-21 | DSH 复习台插件：知识点 -&gt; 联网检索 + 默认模型生成的复习卡（LaTeX 公式、mhchem 反应式与分步机理） |
| 67 | [zeki520/dsh-download-nexus](https://github.com/zeki520/dsh-download-nexus) | 1 | 2026-11-18 | 2026-11-21 | 统一下载入口：Motrix · 直连 · yt-dlp · Hugging Face — DeepSeek Harness 插件 |
| 68 | [zman406986/Agent-Memory-CREMATOR](https://github.com/zman406986/Agent-Memory-CREMATOR) | 1 | 2026-11-12 | 2026-11-21 | Reinventing compaction to multiply healthy context window and save tokens. |
| 69 | [08mamba24/dsh-team-presets](https://github.com/08mamba24/dsh-team-presets) | 0 | 2026-11-14 | 2026-11-21 | Native role presets and one-click implementer/reviewer teams for DeepSeek Harness |
| 70 | [13691032917-creator/dsh-work-out](https://github.com/13691032917-creator/dsh-work-out) | 0 | 2026-11-21 | 2026-11-21 | A left-sidebar artifact timeline panel for DSH: all files produced across all conversations, with changed/deleted marking and in-app preview. |
| 71 | [18059842153/dsh-multi-dir-workspace](https://github.com/18059842153/dsh-multi-dir-workspace) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: attach multiple directories to a workspace, switch the working directory, and grant the model write access to each of them. |
| 72 | [1T2TTTTT/dsh-followup-thread](https://github.com/1T2TTTTT/dsh-followup-thread) | 0 | 2026-11-21 | 2026-11-21 | Inline follow-up threads under earlier answers: ask under any past answer, keep the Q&amp;A together, no extra conversation in the sidebar. DSH plugin. |
| 73 | [777wtmsb/dsh-choice-buttons](https://github.com/777wtmsb/dsh-choice-buttons) | 0 | 2026-11-21 | 2026-11-21 | Clickable A/B/C option pills for DeepSeek Harness chat replies — tap to send the line, zero model cost. |
| 74 | [7ygys/dsh-fishchat](https://github.com/7ygys/dsh-fishchat) | 0 | 2026-11-15 | 2026-11-21 | 让多会话同时同屏聊天、讨论的插件 |
| 75 | [ABC144321/dsh-grok-bot](https://github.com/ABC144321/dsh-grok-bot) | 0 | 2026-11-21 | 2026-11-21 | Bot 群：给 DSH Bot 加群聊层（拉群 / @ 交接 / 圆桌 / 群目标），并把「Bot 模式」加进 DSH 的模式选择器。 |
| 76 | [aiohow/dsh-prompt-wall](https://github.com/aiohow/dsh-prompt-wall) | 0 | 2026-11-21 | 2026-11-21 | 1077 image-generation prompt templates with example images, as a DSH plugin: card wall, search, favorites, per-model prompt adaptation. Fully local. 生图提示词选片墙，纯本地。 |
| 77 | [Andra0-0/dsh-system-sniffer](https://github.com/Andra0-0/dsh-system-sniffer) | 0 | 2026-11-20 | 2026-11-21 | Windows system sniffer for DeepSeek Harness: processes, performance, disks and process tracing, plus a system_sniff tool for the model. |
| 78 | [asteme/asteme](https://github.com/asteme/asteme) | 0 | 2026-11-20 | 2026-11-21 | Asteme: long-term memory for AI agents. Recalls by situation, learns from how each use turned out, and keeps one SQLite file on your machine. Works as a DSH plugin, an MCP server, or a library. |
| 79 | [binsonHao/dsh-workspace-links](https://github.com/binsonHao/dsh-workspace-links) | 0 | 2026-11-21 | 2026-11-21 | Visual related-workspace management and automatic project context for DeepSeek Harness. |
| 80 | [blackCatYoung/dsh-night-museum](https://github.com/blackCatYoung/dsh-night-museum) | 0 | 2026-11-21 | 2026-11-21 | A nocturnal task museum for DeepSeek Harness: queue tasks as exhibits, run them on demand or after 18:00, with per-session concurrency and in-order sequencing. |
| 81 | [blackCatYoung/dsh-photo-beauty](https://github.com/blackCatYoung/dsh-photo-beauty) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 本地人像美颜插件：磨皮、提亮、皱纹修复、肤色、瘦脸、大眼、化妆与液化（MediaPipe + OpenCV，全部本机完成） |
| 82 | [bwtymdb/kimi-quota-status](https://github.com/bwtymdb/kimi-quota-status) | 0 | 2026-11-21 | 2026-11-21 | Kimi membership usage quota status for DeepSeek Harness |
| 83 | [cccccccccccccy/dsh-syncthing-pair](https://github.com/cccccccccccccy/dsh-syncthing-pair) | 0 | 2026-11-20 | 2026-11-21 | Two-way Syncthing folder pairing between two Macs over SSH, with a DSH Web panel and agent tool. |
| 84 | [ccyk-hash/dsh-lab-skills](https://github.com/ccyk-hash/dsh-lab-skills) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: bundle 5 lab skills (ChemDraw / LaTeX / Origin / Prism / SPSS), toggle each one, and let the plugin route them per conversation |
| 85 | [chen7911012012-code/dsh-qq-free](https://github.com/chen7911012012-code/dsh-qq-free) | 0 | 2026-11-21 | 2026-11-21 | QQ 官方机器人自由发言台：主动消息、DeepSeek 对话、违禁词、群管理、远程控制台 \| 作者：都有文明每天，联系方式3645411938@qq.com |
| 86 | [chenhao6682108/dsh-skill-musicbee](https://github.com/chenhao6682108/dsh-skill-musicbee) | 0 | 2026-11-21 | 2026-11-21 | MusicBee playlist and library toolkit as a DeepSeek Harness (DSH) skill plugin |
| 87 | [chenhao6682108/dsh-skill-netease-playlist](https://github.com/chenhao6682108/dsh-skill-netease-playlist) | 0 | 2026-11-21 | 2026-11-21 | NetEase Cloud Music playlist toolkit as a DeepSeek Harness (DSH) skill plugin |
| 88 | [chrock-hyper/dsh-bundle-template](https://github.com/chrock-hyper/dsh-bundle-template) | 0 | 2026-11-16 | 2026-11-21 | TypeScript + tsdown template for DeepSeek Harness bundles: Host and Client halves, built artifacts, and contract checks |
| 89 | [chrock-hyper/dsh-hyper-mode](https://github.com/chrock-hyper/dsh-hyper-mode) | 0 | 2026-11-17 | 2026-11-21 | DeepSeek Harness 的扩展 bundle：增强创造模式 + 岗位制编排 + 工单看板 + 会话内 Wiki（pnpm monorepo，TypeScript + JSX 构建） |
| 90 | [Cliping2077/somnia](https://github.com/Cliping2077/somnia) | 0 | 2026-11-17 | 2026-11-21 | Somnia - sleep-stage memory for AI agents. Let your AI dream. |
| 91 | [coldrainthreeautumnleaves/dsh-concierge](https://github.com/coldrainthreeautumnleaves/dsh-concierge) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness 维护中心：应用与插件更新、回退与启停、GitHub 来源与 npm 安装、启动加速、聊天性能面板、打字机。 |
| 92 | [CubicZnS/dsh-plugin-paper-fetch](https://github.com/CubicZnS/dsh-plugin-paper-fetch) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 文献助手插件：按主题检索、尽量自动下载 PDF、文献库面板一键补下载、自动归档成干净文件夹（macOS/Linux/Windows） |
| 93 | [cyicz123/dsh-roster-score](https://github.com/cyicz123/dsh-roster-score) | 0 | 2026-11-21 | 2026-11-21 | DSH 插件：拖入学生花名册，念名字→说分数→自动回读，一键导出带成绩的新表（本地 SenseVoice 识别 + 系统 TTS 朗读） |
| 94 | [Daphne999/dsh-error-firstaid](https://github.com/Daphne999/dsh-error-firstaid) | 0 | 2026-11-21 | 2026-11-21 | First aid for DeepSeek Harness errors: paste the error text and get the most likely cause plus one concrete step to try, from a curated deterministic rule table. No model call, no machine scanning, and an explicit I-do-not-know when nothing matches. |
| 95 | [dasuda13/dsh-mode-exchange](https://github.com/dasuda13/dsh-mode-exchange) | 0 | 2026-11-18 | 2026-11-21 | A generic DSH plugin to dynamically switch to any Agent mode (Standard, PTC, Code, etc.) in an existing session. It reconfigures the toolset and system prompt on the fly, eliminating the need to create a new chat.DeepSeek Harness 通用插件，支持在任意现有对话中自由切换至任何内置 Agent 模式（如 Standard、PTC、Code、Research 等）。通过动态重组会话的工具集与系统提示词，实现无缝切换，无需中断当前任务重新创建会话。 |
| 96 | [David-Martinez-worldexecute/dsh-multi-workspace](https://github.com/David-Martinez-worldexecute/dsh-multi-workspace) | 0 | 2026-11-20 | 2026-11-21 | DSH plugin: declarative writable-root fence for the agent — per-capability roots, audit log, in-chat panel (DeepSeek Harness / Cordis) |
| 97 | [DDNdles/dsh-study](https://github.com/DDNdles/dsh-study) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 通用双通道刷题、错题复盘与试卷/PPT 生成插件 — 零模型一键出卷 / /study 协作 / LaTeX PDF / 讲评 PPT |
| 98 | [deemo0666/pallas-phone-control](https://github.com/deemo0666/pallas-phone-control) | 0 | 2026-11-21 | 2026-11-21 | Phone Control for Pallas Agent: lets the AI operate other apps on your iPhone or iPad, set up on the device itself with no computer. 手机操控插件。 |
| 99 | [dhshu/dsh-session-tabs](https://github.com/dhshu/dsh-session-tabs) | 0 | 2026-11-21 | 2026-11-21 | 给 DeepSeek Harness (DSH) 的浏览器风格会话标签页：标题行书页标签、Chrome/Edge 式拖动排序、滚轮横滚、固定/关闭/归档与运行中确认，中英双语。Browser-style conversation tabs for DSH. |
| 100 | [dk2064/dsh-craft-anything](https://github.com/dk2064/dsh-craft-anything) | 0 | 2026-11-21 | 2026-11-21 | Unofficial DeepSeek Harness plugin for Craft Anything: slim MCP tool surface, reverse-rebuild mode, engine/mode control, bilingual SKILL.md export, 325-tool panel. |
| 101 | [DreamAlone666/dsh-gemini-native](https://github.com/DreamAlone666/dsh-gemini-native) | 0 | 2026-11-21 | 2026-11-21 | DSH + Gemini，原生 parts、服务端搜索、XHigh 推理、抗降智汉化提示词 |
| 102 | [Echo-Li130/dsh-turn-cost](https://github.com/Echo-Li130/dsh-turn-cost) | 0 | 2026-11-21 | 2026-11-21 | Per-turn conversation cost for DeepSeek Harness: a quiet ¥ button that reveals the turn spend only when clicked. 每轮对话花了多少钱——默认不显示，点开 ¥ 才看。 |
| 103 | [edward-polat/final-cut-win](https://github.com/edward-polat/final-cut-win) | 0 | 2026-11-21 | 2026-11-21 | Apple Final Cut - video editing software for timeline-based editing, multicam synchronization and color grading on Windows 10/11 |
| 104 | [EonCosmos/dsh-pure-chat](https://github.com/EonCosmos/dsh-pure-chat) | 0 | 2026-11-21 | 2026-11-21 | dsh-纯对话插件 |
| 105 | [Eric782155/dsh-lilac-skin](https://github.com/Eric782155/dsh-lilac-skin) | 0 | 2026-11-21 | 2026-11-21 | 用紫罗兰与丁香紫色系为 DeepSeek Harness 网页界面换肤。浅色模式是淡紫表面配深紫主按钮、链接与焦点环，深色模式是近黑紫表面配淡紫主按钮。用户消息气泡是很淡的丁香色、以丁香紫描边，选中与悬停也用丁香紫。会话右侧轮次导航条上，「当前轮次」是淡紫，鼠标悬停或键盘聚焦的那一条略强一些；滚动条滑块改用更深的紫灰，悬停时更醒目。覆盖表面、文字、边框、按钮、菜单、代码块、侧边栏与滚动条，跟随「外观」设置，启用后立即生效。成功、警告、错误等状态色保持原值，语法高亮、文件差异、JSON 树与文档预览表面也沿用原配色。关闭方式：打开「插件」页面停用「丁香皮肤」，配色立即恢复。 |
| 106 | [everclear077/dsh-meetscribe](https://github.com/everclear077/dsh-meetscribe) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness 本地会议转写与 Word 纪要插件，支持中文/中英识别、说话人管理、术语纠正和纪要文档工作台。 |
| 107 | [ExTetragon/dsh-illuminating-skin](https://github.com/ExTetragon/dsh-illuminating-skin) | 0 | 2026-10-30 | 2026-11-21 | 卡片风格的 DSH 简约毛玻璃皮肤主题，纯 CSS 注入，不调用宿主 API。 |
| 108 | [Ez4code/dsh-music](https://github.com/Ez4code/dsh-music) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness (DSH) plugin: let an AI agent — or a WeChat / QQ / Feishu bot via dsh-im — control the macOS Music app (Apple Music). Play by name, pause, skip, set system volume, read now-playing. AppleScript + TCC helper daemon. 微信/QQ 远程点歌。 |
| 109 | [feichai0017/dsh-fish-ui](https://github.com/feichai0017/dsh-fish-ui) | 0 | 2026-11-21 | 2026-11-21 | Illustrated scenes, DeepSeek blue and customizable accents for DeepSeek Harness. |
| 110 | [felix-tessera/dsh-plugin-token-cost](https://github.com/felix-tessera/dsh-plugin-token-cost) | 0 | 2026-11-21 | 2026-11-21 | Shows the estimated money cost of each completed answer next to its token usage in the DeepSeek Harness chat. |
| 111 | [femnn/dsh-plugin-remote-control](https://github.com/femnn/dsh-plugin-remote-control) | 0 | 2026-11-21 | 2026-11-21 | DSH 右侧栏的安卓手机/电视远程操控台：自动发现连接、实时画面与点按、AI 看图操控、投屏、发文件装 APK |
| 112 | [flashvayne/dsh-live-captions](https://github.com/flashvayne/dsh-live-captions) | 0 | 2026-11-19 | 2026-11-21 | DSH 实时字幕插件：识别系统声音和麦克风，支持双语字幕，多种语言互译，一键生成会议纪要 |
| 113 | [forkgo430/dsh-clash](https://github.com/forkgo430/dsh-clash) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: let the AI operate the local Clash (mihomo) kernel — list/switch nodes, test latency, switch rule/global/direct mode, inspect rules, read live connections. Speaks the mihomo REST API. |
| 114 | [frozen-laffer/dsh-aux-models](https://github.com/frozen-laffer/dsh-aux-models) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: resident auxiliary models — channel-aware registry, learned router, batch delegation, and a settings console with live eval progress. |
| 115 | [gaozhenkun92-eng/dsh-rp-studio](https://github.com/gaozhenkun92-eng/dsh-rp-studio) | 0 | 2026-11-20 | 2026-11-21 | 角色扮演后台 · Roleplay console for DeepSeek Harness：角色卡 / 世界书 / 图库 / 权限设置，人格全局注入 |
| 116 | [Geqiandipan/dsh-oh-my-pi](https://github.com/Geqiandipan/dsh-oh-my-pi) | 0 | 2026-11-21 | 2026-11-21 | Delegate DeepSeek Harness tasks to the local oh-my-pi coding agent, with an OMP entry in the left sidebar. |
| 117 | [Godward-Bound/dsh-task-board](https://github.com/Godward-Bound/dsh-task-board) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: 工作区任务卡看板（未开工/在跑/做完/卡住） |
| 118 | [GuangBaoBaoZero/sky-panel](https://github.com/GuangBaoBaoZero/sky-panel) | 0 | 2026-11-21 | 2026-11-21 | 星图面板：二十八宿 x 十二辰 x 二十四节气 x 七曜行星的中国传统天文仪表盘（农历/事件日历/双视图，纯本地零网络）。Interactive Chinese astronomy panel for DSH: 28 lunar mansions, planetary ephemerides (Astronomy Engine), lunar calendar &amp; event calendar. MIT. |
| 119 | [H-ATK/dsh-usage](https://github.com/H-ATK/dsh-usage) | 0 | 2026-11-19 | 2026-11-21 | 使用量统计 / Usage statistics for DeepSeek Harness: workspace, model, and channel token/cost accounting, per-turn ledger, price table, and CSV/Excel export. |
| 120 | [harveyzhang/dsh-appearance-media](https://github.com/harveyzhang/dsh-appearance-media) | 0 | 2026-11-20 | 2026-11-21 | DSH 外观媒体插件：背景 / 开机片头 / 屏保三合一，一份素材库一张卡（移植自 lxj5820/dsh-boot-animation, MIT） |
| 121 | [hbycwzm001/dsh-plugin-translate](https://github.com/hbycwzm001/dsh-plugin-translate) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: translate into what a specific country actually says (249 locales) + live FX + back-translation check |
| 122 | [Hero-997/dsh-rewind-message](https://github.com/Hero-997/dsh-rewind-message) | 0 | 2026-11-21 | 2026-11-21 | dsh插件，可以编辑已发问题 |
| 123 | [HFTXsws/dsh-au](https://github.com/HFTXsws/dsh-au) | 0 | 2026-11-19 | 2026-11-21 | DSH 多机工作区插件，内置跨设备 Todo、移动端抽屉与本机 Claude/Codex Agent 控制入口 |
| 124 | [hluica/dsh-preset-workspace-hook](https://github.com/hluica/dsh-preset-workspace-hook) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: switch the Agent preset for new sessions by workspace path. |
| 125 | [hseons/dsh-cmdk](https://github.com/hseons/dsh-cmdk) | 0 | 2026-11-21 | 2026-11-21 | ⌘K command palette for DeepSeek Harness: session and full-text search with message-level jumps, query modes, and a provider API for plugins. |
| 126 | [ht65/dsh-open-with-default](https://github.com/ht65/dsh-open-with-default) | 0 | 2026-11-21 | 2026-11-21 | DSH 插件：为每种文件类型选择默认打开的应用，支持左侧边栏「打开方式」设置页；不修改 Windows 系统关联。 |
| 127 | [huangminzhe/dsh-conversation-deleter](https://github.com/huangminzhe/dsh-conversation-deleter) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: list archived conversations by workspace in Settings and delete the selected ones while keeping the files they created. |
| 128 | [huihui3488/dsh-native-toast](https://github.com/huihui3488/dsh-native-toast) | 0 | 2026-11-21 | 2026-11-21 | Windows notification-center toasts for DeepSeek Harness when a turn finishes or the agent needs a choice or approval. |
| 129 | [huiyaoxingkong/dsh-privacy-mode](https://github.com/huiyaoxingkong/dsh-privacy-mode) | 0 | 2026-11-21 | 2026-11-21 | Asymmetric visibility modes for DeepSeek Harness: mark plugins, workspaces and chats private; NORMAL makes them absent, PRIVATE brings them back behind a password or Windows Hello / Touch ID. |
| 130 | [HYLZJU/dsh-follow-up](https://github.com/HYLZJU/dsh-follow-up) | 0 | 2026-11-21 | 2026-11-21 | Two ways to follow up in DeepSeek Harness: native reference chips in the composer, or a streaming side panel that never touches the session. |
| 131 | [HYLZJU/dsh-notepad](https://github.com/HYLZJU/dsh-notepad) | 0 | 2026-11-21 | 2026-11-21 | A global, draggable notepad in the DeepSeek Harness composer: multiline notes, built-in checklists, workspace attribution, insert into prompt. |
| 132 | [HZYqwq/dsh-rosemary-memory](https://github.com/HZYqwq/dsh-rosemary-memory) | 0 | 2026-11-21 | 2026-11-21 | Auditable cross-session memory for DeepSeek Harness — deterministic digest, explainable weights, no modelCross-session memory for DeepSeek Harness: deterministic turn digest, explainable unit weights, adjustable compression thresholds, local JSONL store, zero dependencies. calls, no vectors, single process. |
| 133 | [i-curve/dsh-omega](https://github.com/i-curve/dsh-omega) | 0 | 2026-11-20 | 2026-11-21 | 给 DeepSeek Harness 的 Zero Omega 式代理分流：情景模式、域名规则、按模型提供商绑定代理或直连，并支持导入/导出 |
| 134 | [ilyshkafox/dsh-plusvibe-balance](https://github.com/ilyshkafox/dsh-plusvibe-balance) | 0 | 2026-11-19 | 2026-11-21 | Плагин для DeepSeek Harness: показывает остаток баланса PlusVibeAPI прямо под полем ввода, рядом с индикатором контекста, и карточку трат — за сегодня, за месяц, за этот чат и график по дням. |
| 135 | [inboxxobni/sh1121-ana](https://github.com/inboxxobni/sh1121-ana) | 0 | 2026-11-21 | 2026-11-21 | The sh1121-ana Cordis plugin. |
| 136 | [inquark7-cmd/dsh-inbox-manager](https://github.com/inquark7-cmd/dsh-inbox-manager) | 0 | 2026-11-21 | 2026-11-21 | dsh聊天消息队列 |
| 137 | [intelfabs/dsh-file-library](https://github.com/intelfabs/dsh-file-library) | 0 | 2026-11-18 | 2026-11-21 | Searchable library of every file sent to DeepSeek Harness, with one-click filing and @library reuse. |
| 138 | [ixxgal/dsh-student-perks](https://github.com/ixxgal/dsh-student-perks) | 0 | 2026-11-21 | 2026-11-21 | 状态栏常驻阿里云学生券与账户余额、DeepSeek API 余额，以及峰谷计价时段。 |
| 139 | [ixxgal/dsh-task-board](https://github.com/ixxgal/dsh-task-board) | 0 | 2026-11-21 | 2026-11-21 | 定时任务面板：把 Windows 计划任务里 DSH 建的条目和 DSH 内部定时任务放在同一页，可以运行、停用、启用、删除、新建。 |
| 140 | [ixxgal/dsh-task-mail-notifier](https://github.com/ixxgal/dsh-task-mail-notifier) | 0 | 2026-11-21 | 2026-11-21 | 回合结束时用 SMTP 发一封提醒邮件：侧边栏开关、换发信邮箱、IM 免打扰与完成提示音。 |
| 141 | [Jae1010/dsh-session-toast-notification](https://github.com/Jae1010/dsh-session-toast-notification) | 0 | 2026-11-21 | 2026-11-21 | Session notifications for DeepSeek Harness: toast when a turn ends, when the agent asks a question, or when a tool needs approval - answer, approve and jump back from the notification. |
| 142 | [JamieYoungYang/dsh-inkstone-theme](https://github.com/JamieYoungYang/dsh-inkstone-theme) | 0 | 2026-11-20 | 2026-11-21 | 七件文房色板 + 字体层 + 画布渐变，给 DeepSeek Harness 的七套水墨主题：汝窑 / 赭石 / 松烟 / 青瓷 / 紫毫 / 宣纸 / 胭脂 |
| 143 | [jiaxusummer/dsh-stardewvalley-panel](https://github.com/jiaxusummer/dsh-stardewvalley-panel) | 0 | 2026-11-21 | 2026-11-21 | 星露谷管家：基于 Darian 的 dsh-stardew-blind-whale-farmer 的 DSH 插件。可视化面板（心情曲线/参考值）、两个窗口分开管、会话限制、强制记账、定时开玩；模组本体由 Darian 开发维护。 |
| 144 | [Jinquan-Leung/dsh-billing-hud](https://github.com/Jinquan-Leung/dsh-billing-hud) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness billing HUD: peak/off-peak price calendar, session cost beside the composer, account balance in the sidebar — all configurable. |
| 145 | [Jinquan-Leung/dsh-control](https://github.com/Jinquan-Leung/dsh-control) | 0 | 2026-11-21 | 2026-11-21 | Desktop and CDP browser control for DeepSeek Harness agents: screenshots, mouse, keyboard, windows, plus selector-based page driving. |
| 146 | [JoblessJoe/deep-projects](https://github.com/JoblessJoe/deep-projects) | 0 | 2026-11-21 | 2026-11-21 | Project rooms for the DeepSeek Harness (dsh) web GUI: a goal, memory, instructions and knowledge per project, auto-loaded into every chat. Claude-Desktop-style Projects for dsh. |
| 147 | [jyz48prsbr-netizen/dsh-gilded-sidebar](https://github.com/jyz48prsbr-netizen/dsh-gilded-sidebar) | 0 | 2026-11-21 | 2026-11-21 | 鎏金侧栏 / Gilded Sidebar —— DeepSeek Harness 主题皮肤，基于 black-gold-vip (MIT) 二次修改，侧栏文字鎏金色，纯 CSS。 |
| 148 | [jyz48prsbr-netizen/dsh-screen-control](https://github.com/jyz48prsbr-netizen/dsh-screen-control) | 0 | 2026-11-21 | 2026-11-21 | Control the Mac screen state while DSH tasks run: keep the display on, or let it go dark while the system and all processes keep running. Never suspends processes or sleeps the machine. macOS only. |
| 149 | [Kazuma-124/Personal_DSH_Plugins](https://github.com/Kazuma-124/Personal_DSH_Plugins) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness (DSH) 插件集合：Token 用量统计与对话记事本。纯 JavaScript、只读、不调用模型。Installable DSH bundles: token usage statistics and a per-conversation notebook. |
| 150 | [KeHua000/dsh-page-refresh](https://github.com/KeHua000/dsh-page-refresh) | 0 | 2026-11-21 | 2026-11-21 | Auto-reload the DeepSeek Harness web UI when a client plugin bundle changes |
| 151 | [keminoco-beep/dsh-session-delete](https://github.com/keminoco-beep/dsh-session-delete) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: permanently delete conversations and workspace folders from the context menu, without restarting DSH. |
| 152 | [kiluahh/ds-browser-tabs](https://github.com/kiluahh/ds-browser-tabs) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: read the rendered content of your open Firefox/Chrome tabs with /browser |
| 153 | [KNtnx/dsh-english-reader](https://github.com/KNtnx/dsh-english-reader) | 0 | 2026-11-21 | 2026-11-21 | Read English aloud in DeepSeek Harness: sentence-by-sentence playback, word-level highlighting, Edge and local Kokoro engines, custom TTS APIs. |
| 154 | [kuanbandu/dsh-email](https://github.com/kuanbandu/dsh-email) | 0 | 2026-11-21 | 2026-11-21 | Email for DeepSeek Harness: log in once in the Web UI, then read, search and send mail through agent tools (IMAP/SMTP, zero dependencies, proxy aware). |
| 155 | [lakersoul/dsh-column-swap](https://github.com/lakersoul/dsh-column-swap) | 0 | 2026-09-13 | 2026-11-21 | DSH web plugin: swap the native right column with the agent conversation column, keeping both widths. |
| 156 | [lakersoul/dsh-session-archive](https://github.com/lakersoul/dsh-session-archive) | 0 | 2026-11-21 | 2026-11-21 | DSH web plugin: session archive management with a recoverable trash |
| 157 | [lambsouls/dsh-ssh-ops](https://github.com/lambsouls/dsh-ssh-ops) | 0 | 2026-11-19 | 2026-11-21 | DSH 插件：保管 Linux 服务器凭证，走 SSH 执行命令与管理应用，提供只读总览与实时彩色终端 |
| 158 | [LaoYueHanNi/dsh-session-tools](https://github.com/LaoYueHanNi/dsh-session-tools) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness 跨会话工具插件：列出、投递、读取、新建会话。 |
| 159 | [lbg2002/dsh-tray-desktop](https://github.com/lbg2002/dsh-tray-desktop) | 0 | 2026-11-21 | 2026-11-21 | Low-overhead Linux desktop suite for DeepSeek Harness: system tray indicator, single-instance slimmed Chrome app window, no-translate hardening, and external default browser routing. |
| 160 | [ldt321/dsh-reply-voice](https://github.com/ldt321/dsh-reply-voice) | 0 | 2026-11-21 | 2026-11-21 | Read DSH assistant replies aloud with edge-tts, in memory, with native pause and resume. |
| 161 | [Lee2277-t/dsh-aigc-label](https://github.com/Lee2277-t/dsh-aigc-label) | 0 | 2026-11-21 | 2026-11-21 | 给 docx/xlsx/pptx 写入与查验 AIGC 隐式标识：docProps/custom.xml 里的 AIGC 属性，含 Label、ContentProducer、ProduceID。服务提供者编码不内置——写错编码等于把来源指向别的主体。 |
| 162 | [Lee2277-t/dsh-font-subset](https://github.com/Lee2277-t/dsh-font-subset) | 0 | 2026-11-21 | 2026-11-21 | 按实际用到的字裁剪字体，并报告字体里缺哪些字。中文字体从几兆降到几十 KB；缺字在变成豆腐块之前就被指出来。 |
| 163 | [Lee2277-t/dsh-miniapp-audit](https://github.com/Lee2277-t/dsh-miniapp-audit) | 0 | 2026-11-21 | 2026-11-21 | 微信小程序提审前自查：隐私接口线索、requiredPrivateInfos 缺项、静默失败点、包体积与未引用资源。三个工具，输出逐条带文件与行号。 |
| 164 | [Lee2277-t/dsh-repo-audit](https://github.com/Lee2277-t/dsh-repo-audit) | 0 | 2026-11-21 | 2026-11-21 | 项目公开前的机器体检：凭据特征、泄漏的本机路径、缺失文档、过大文件，逐条给出文件与行号。 |
| 165 | [Lee2277-t/dsh-skill-index](https://github.com/Lee2277-t/dsh-skill-index) | 0 | 2026-11-21 | 2026-11-21 | 在 Harness 里检索本机技能库：skill_search 与 skill_catalog 两个工具，让 agent 找得到没进系统提示的技能。 |
| 166 | [Lee2277-t/dsh-zip-verify](https://github.com/Lee2277-t/dsh-zip-verify) | 0 | 2026-11-21 | 2026-11-21 | 交付包打出来之后验证它真能原样还原：逐条目解压、CRC 校验、与源目录逐文件哈希对账、条目名编码风险提示。不依赖外部解压工具。 |
| 167 | [liedwardtw/search-api](https://github.com/liedwardtw/search-api) | 0 | 2026-11-21 | 2026-11-21 | Google web search for DeepSeek Harness via your local ego-browser (ego lite). Installs as the default web_search provider; results returned, tabs closed. Zero deps, no API key. |
| 168 | [lijianbin2/dsh-keynav](https://github.com/lijianbin2/dsh-keynav) | 0 | 2026-11-21 | 2026-11-21 | Keyboard navigation for DeepSeek Harness: Ctrl+Up/Down cycles the sidebar plugin area, Alt+Up/Down steps through the current workspace's sessions, Ctrl+J returns to the message input. |
| 169 | [Lingliqeye/dsh-session-revenant](https://github.com/Lingliqeye/dsh-session-revenant) | 0 | 2026-11-21 | 2026-11-21 | Session delete with a confirmation dialog, size preview and optional backup; restore or delete backups; reload page and restart the app from the sidebar. 会话删除（确认弹窗 / 体积预览 / 可选备份）、备份恢复与删除、侧栏重载页面与应用重启。By 伶俐籡 (Lingliqeye on GitHub) |
| 170 | [lingr7/dsh-client-probe](https://github.com/lingr7/dsh-client-probe) | 0 | 2026-11-21 | 2026-11-21 | 最小 DSH 客户端插件模板：验证本地 link 安装的包能否挂进 UI 槽位 |
| 171 | [lingr7/dsh-netease-card-adapter](https://github.com/lingr7/dsh-netease-card-adapter) | 0 | 2026-11-21 | 2026-11-21 | 通过 DOM 驱动 DSH 网易云音乐卡片：对话工具点歌 + 遥控器媒体键，不依赖 vendor 源码 |
| 172 | [lingr7/dsh-plugin-remote-control](https://github.com/lingr7/dsh-plugin-remote-control) | 0 | 2026-11-21 | 2026-11-21 | DSH 外部驱动雏形：本地端点下发播放/暂停/切歌等页面命令 |
| 173 | [lingr7/dsh-question-keys](https://github.com/lingr7/dsh-question-keys) | 0 | 2026-11-21 | 2026-11-21 | 用方向键回答 DSH 提问卡片：焦点落在首项、上下选择、确定提交 |
| 174 | [lingr7/dsh-remote-hub](https://github.com/lingr7/dsh-remote-hub) | 0 | 2026-11-21 | 2026-11-21 | DSH 遥控器命令总线：单一监听 + 上下文栈 + owner 注册，把物理按键路由给该管的对象 |
| 175 | [lingr7/dsh-session-cycling](https://github.com/lingr7/dsh-session-cycling) | 0 | 2026-11-21 | 2026-11-21 | DSH 会话循环切换（方向键版本，焦点在输入框时也安全） |
| 176 | [liubaibuliuyan/dsh-pdf-toolkit](https://github.com/liubaibuliuyan/dsh-pdf-toolkit) | 0 | 2026-11-21 | 2026-11-21 | Read any PDF as DeepSeek Harness agent tools: page-scoped text, geometric table reconstruction, pages rendered straight into the conversation, full-text search and on-demand OCR. Pure JavaScript, no environment dependencies. |
| 177 | [liubaibuliuyan/dsh-turn-rail-left](https://github.com/liubaibuliuyan/dsh-turn-rail-left) | 0 | 2026-11-21 | 2026-11-21 | Move the DeepSeek Harness conversation turn rail to the left gutter |
| 178 | [liuchenljc/quick-continue-plugin](https://github.com/liuchenljc/quick-continue-plugin) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 快捷回复插件：输入框下方一键发送「继续 / A / B / C / 你来定」按钮 |
| 179 | [lockeorion01-stack/dsh-ensp-fusion-cases](https://github.com/lockeorion01-stack/dsh-ensp-fusion-cases) | 0 | 2026-11-21 | 2026-11-21 | dsh-ensp-fusion 使用案例集：园区网实战 + OSPF 场景蓝图 |
| 180 | [Lornatang/dsh-plugin](https://github.com/Lornatang/dsh-plugin) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugins maintained by Lornatang. |
| 181 | [loveainty-glitch/dsh-deepseek-history](https://github.com/loveainty-glitch/dsh-deepseek-history) | 0 | 2026-11-21 | 2026-11-21 | Sync DeepSeek web chat history into dated Markdown folders and native DeepSeek Harness sessions |
| 182 | [loyalchiiina/dsh-piliaurora-wall](https://github.com/loyalchiiina/dsh-piliaurora-wall) | 0 | 2026-11-21 | 2026-11-21 | DSH 插件：PiliAurora 视频墙 —— 侧边栏一键搜索 B 站视频，并行开 N 个播放窗口并自动网格排列，带依赖自检与设置页。 |
| 183 | [luojiahao-cn/dsh-literature-lab](https://github.com/luojiahao-cn/dsh-literature-lab) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 的文献工作台：每天自动采集新论文，摘要判读 → 分诊 → 精读逐层筛选，取回原文并生成研究卡片入库 Zotero |
| 184 | [Luoqiaocong/dsh-dialect](https://github.com/Luoqiaocong/dsh-dialect) | 0 | 2026-11-20 | 2026-11-21 | DSH  插件：回答偶尔掺一点东北话、天津话、北京话或粤语，频率与强度可调，代码和工具结果保持普通话 |
| 185 | [luoqiusang/dsh-model-picker-groups](https://github.com/luoqiusang/dsh-model-picker-groups) | 0 | 2026-11-21 | 2026-11-21 | 让 DSH 桌面端对话框的模型选择器按供应商分组折叠：默认只展开当前组，常驻搜索、收藏、同名供应商合并 |
| 186 | [maanfa/dsh-plugins](https://github.com/maanfa/dsh-plugins) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness client plugins monorepo |
| 187 | [Magicqy/dsh-statusline](https://github.com/Magicqy/dsh-statusline) | 0 | 2026-11-21 | 2026-11-21 | statusline plugin for DeepSeek Harness |
| 188 | [Magicqy/dsh-task-notifications](https://github.com/Magicqy/dsh-task-notifications) | 0 | 2026-11-21 | 2026-11-21 | Windows taskbar and silent system notifications for finished DSH Desktop conversations |
| 189 | [MaHongang/dsh-paste-to-file](https://github.com/MaHongang/dsh-paste-to-file) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: a plain-text paste of 500+ characters in the composer becomes a .txt attachment instead of stretching the input box. |
| 190 | [marchinlab/dsh-quiet-whale-girl](https://github.com/marchinlab/dsh-quiet-whale-girl) | 0 | 2026-11-21 | 2026-11-21 | 安静的鲸鱼娘 · Quiet Whale Girl — a DSH desktop pet plugin based on LivLiv Player and the Kujira community character. |
| 191 | [Mason233Hello/dsh-wrongbook](https://github.com/Mason233Hello/dsh-wrongbook) | 0 | 2026-11-21 | 2026-11-21 | 理科错题本 · A Markdown/LaTeX wrong-answer notebook plugin for DSH (DeepSeek Harness): review tracking, subject/tag directory, one-shot AI variant problems. |
| 192 | [Mengnan578/dsh-wallet-badge](https://github.com/Mengnan578/dsh-wallet-badge) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek API balance in the DSH sidebar: checks every minute, re-renders only when the amount changes, rolls the digits on change. |
| 193 | [Miint-Sunny/dsh-media-look](https://github.com/Miint-Sunny/dsh-media-look) | 0 | 2026-11-21 | 2026-11-21 | media look: let models view local files and web pages in DeepSeek Harness |
| 194 | [Miint-Sunny/dsh-plugin-sync](https://github.com/Miint-Sunny/dsh-plugin-sync) | 0 | 2026-11-21 | 2026-11-21 | Sync DeepSeek Harness desktop plugins between two Macs |
| 195 | [Miint-Sunny/dsh-workbench](https://github.com/Miint-Sunny/dsh-workbench) | 0 | 2026-11-21 | 2026-11-21 | Workbench plugin for the DeepSeek Harness desktop app |
| 196 | [MingGH/dsh-pin-top](https://github.com/MingGH/dsh-pin-top) | 0 | 2026-11-20 | 2026-11-21 | Pinned conversations, macOS-style colour labels, and locate/collapse controls for the DeepSeek Harness sidebar. |
| 197 | [Mr-carp-86/dsh-plugin-sidebar-balance](https://github.com/Mr-carp-86/dsh-plugin-sidebar-balance) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: show your DeepSeek account balance at the bottom-left of the sidebar (desktop build opens usage/top-up already signed in). |
| 198 | [nailiang002-wq/dsh-operator-spec](https://github.com/nailiang002-wq/dsh-operator-spec) | 0 | 2026-11-21 | 2026-11-21 | Inject an operator-authored operating specification as a system-prompt section in DeepSeek Harness. |
| 199 | [NAME7220/dsh-onlineoutline](https://github.com/NAME7220/dsh-onlineoutline) | 0 | 2026-11-21 | 2026-11-21 | Scrollable question outline on the right edge of a DeepSeek Harness conversation |
| 200 | [naturalth2012/three-body-atlas](https://github.com/naturalth2012/three-body-atlas) | 0 | 2026-11-19 | 2026-11-21 | 三体宇宙图鉴 · DeepSeek Harness 插件：剧情、56 位人物关系图谱、纪元时间线、技术造物，以及可运行的三体引力模拟（自适应子步 + 灾变判定 + 文明代数） |
| 201 | [nDhnzr6r/dsh-archive-cleanup](https://github.com/nDhnzr6r/dsh-archive-cleanup) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin that deletes archived sessions once they have been archived for a configurable retention period. \| DSH 插件：归档会话满保留期限后自动删除。 |
| 202 | [nicken/dsh-browser-use](https://github.com/nicken/dsh-browser-use) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin + self-hosted MCP browser sandbox: low-token CDP browser control with a safety layer, and containerized Xvfb/Chromium pods with live view and trace replay. |
| 203 | [nicken/dsh-computer-use](https://github.com/nicken/dsh-computer-use) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin for real desktop control: native Windows/Linux X11 mouse and keyboard input with single-use observation tokens, intent/risk approval, audit and emergency pause. |
| 204 | [notnames/dsh-delete-guard-plus](https://github.com/notnames/dsh-delete-guard-plus) | 0 | 2026-11-21 | 2026-11-21 | Fail-closed delete protection for DeepSeek Harness on Windows: recycle-bin-only deletion, quoting-typo detection, platform-level delete rules. Merges dsh-delete-guard. |
| 205 | [opphk/dsh-screenshot](https://github.com/opphk/dsh-screenshot) | 0 | 2026-11-21 | 2026-11-21 | 给 DeepSeek Harness 补上截图与标注（Windows）：原生全屏窗口框选，矩形/椭圆/箭头/画笔/文字/马赛克。 |
| 206 | [OsunO/dsh-plugin-mcp-mvp-mes](https://github.com/OsunO/dsh-plugin-mcp-mvp-mes) | 0 | 2026-11-20 | 2026-11-21 | MCP MVP Demo 连接器，对接mom-mes-connector-t.hdt.cosmoplat.com |
| 207 | [oversize-shoes/dsh-durable-memory](https://github.com/oversize-shoes/dsh-durable-memory) | 0 | 2026-11-20 | 2026-11-21 | Local scoped long-term memory plugin for DeepSeek Harness: Chinese search, automatic recall, persistence and revision protection. |
| 208 | [panchongyang/Converge](https://github.com/panchongyang/Converge) | 0 | 2026-11-21 | 2026-11-21 | A shared cognition tree for preserving decisions, assumptions, rejected alternatives, and human confirmations across AI sessions. |
| 209 | [panda-student/dsh-sidebar-files-plus](https://github.com/panda-student/dsh-sidebar-files-plus) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness plugin: right-click multi-select on the workspace file tree, send selection to the composer as reference chips, double-click office files with the system app, and a Ctrl+F find bar for previews. |
| 210 | [PClO3/dsh-computer-use](https://github.com/PClO3/dsh-computer-use) | 0 | 2026-10-08 | 2026-11-21 | A project that lets your DSH（DeepSeek harness） control your mouse. |
| 211 | [percentcola3/dsh-designer](https://github.com/percentcola3/dsh-designer) | 0 | 2026-11-08 | 2026-11-21 | Private standalone DSH Designer plugin: source, CI and versioned release bundles |
| 212 | [perfectnym/dsh-clean-search](https://github.com/perfectnym/dsh-clean-search) | 0 | 2026-11-21 | 2026-11-21 | 清爽搜索：DSH 无广告搜索首页（官网优先/行情/天气/以图搜图） |
| 213 | [pplankero-sudo/dsh-session-delete](https://github.com/pplankero-sudo/dsh-session-delete) | 0 | 2026-11-21 | 2026-11-21 | Renamed to https://github.com/pplankero-sudo/dsh-session-trash — this repository is no longer maintained. |
| 214 | [pplankero-sudo/dsh-session-trash](https://github.com/pplankero-sudo/dsh-session-trash) | 0 | 2026-11-21 | 2026-11-21 | Adds a real delete-session action to DeepSeek Harness: removes the log, the workspace account and the cached title, refuses a running session, and refuses cross-origin callers. |
| 215 | [qiansanyu/dsh-windows-bash](https://github.com/qiansanyu/dsh-windows-bash) | 0 | 2026-11-21 | 2026-11-21 | DSH Shell 策略插件：让 AI 在 Windows 上用 git-bash 执行命令——提高效率，免去与 pwsh 斗智斗勇。shell 探测切换、文件沙箱、后台作业与超时晋升，行为对齐官方 tool-bash。DSH shell-policy plugin: let AI agents run commands in git-bash instead of PowerShell on Windows — work faster, skip the wrestling with pwsh. Shell detection &amp; switching, sandbox integration, background jobs and timeout promotion, aligne |
| 216 | [qiuyifei7799/dsh-approval-bubble](https://github.com/qiuyifei7799/dsh-approval-bubble) | 0 | 2026-11-21 | 2026-11-21 | Floating approval card for DeepSeek Harness: shows the exact command an agent wants to run, with reject / allow-once and a timeout fallback. |
| 217 | [qq666-star/dsh-topic-split](https://github.com/qq666-star/dsh-topic-split) | 0 | 2026-11-20 | 2026-11-21 | 从长会话中按主题或任意轮次挑选内容，导出为可继续的独立会话；DSH 插件，不是分屏。 |
| 218 | [QuTongxi/dsh-pvz](https://github.com/QuTongxi/dsh-pvz) | 0 | 2026-11-21 | 2026-11-21 | A DeepSeek Harness plugin to play Plants vs. Zombies with a standalone Lua mod. |
| 219 | [raheemmi/dsh-theme-palette](https://github.com/raheemmi/dsh-theme-palette) | 0 | 2026-11-05 | 2026-11-21 | Theme palette picker for the DeepSeek Harness Web UI: nine palettes, an Obsidian theme, and a Cyberpunk neon theme with a HUD backdrop and custom brand mark. |
| 220 | [Raysnows/dsh-live-compact-x](https://github.com/Raysnows/dsh-live-compact-x) | 0 | 2026-11-21 | 2026-11-21 | dsh-live-compact 的 fork（原作 MerkyorLynn, MIT）：净收益门槛、零副本存储（索引 + 日志回读）、大刀/小刀两级压缩 |
| 221 | [Raysnows/dsh-verify-gate](https://github.com/Raysnows/dsh-verify-gate) | 0 | 2026-11-21 | 2026-11-21 | A completion gate for DeepSeek Harness: reminds once when a turn changed code but nothing checked it. |
| 222 | [realzsy/dsh-workspace-session-folders](https://github.com/realzsy/dsh-workspace-session-folders) | 0 | 2026-11-21 | 2026-11-21 | Gives every new DeepSeek Harness conversation its own isolated workspace folder for process files and final deliverables. |
| 223 | [regrevia/github-overview](https://github.com/regrevia/github-overview) | 0 | 2026-11-02 | 2026-11-21 | 一个页面看完自己的 GitHub 仓库流量、npm 下载和外部贡献，旁边配一段 AI 摘要 |
| 224 | [reiaaaaa/dsh-3-features-screenshot](https://github.com/reiaaaaa/dsh-3-features-screenshot) | 0 | 2026-11-21 | 2026-11-21 | Screenshot plugin for DeepSeek Harness: pick any region of any monitor and it lands in the composer, ready to read, translate, or describe. |
| 225 | [Ronnie-Young/dsh-session-delete](https://github.com/Ronnie-Young/dsh-session-delete) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 插件：会话回收站（右键移到回收站、保留期可恢复、到期或手动永久删除） |
| 226 | [ru-data-analysis/ru-corpus](https://github.com/ru-data-analysis/ru-corpus) | 0 | 2026-11-21 | 2026-11-21 | Русский поиск и проверяемая аналитика по корпусу документов: ядро ru-corpus-kit, плагин DeepSeek Harness, навыки SKILL.md |
| 227 | [saylordevs/dsh-plugin-token-cost](https://github.com/saylordevs/dsh-plugin-token-cost) | 0 | 2026-11-21 | 2026-11-21 | Shows the estimated money cost of each completed answer next to its token usage in the DeepSeek Harness chat. |
| 228 | [sevenqcx/dsh-usage-rings](https://github.com/sevenqcx/dsh-usage-rings) | 0 | 2026-11-21 | 2026-11-21 | Composer dock stats (context, cache hit, Tok/s, per-model usage) and Magpie subscription quota gauges for DeepSeek Harness. |
| 229 | [ShenpingDD/dsh-4quadrant-todo](https://github.com/ShenpingDD/dsh-4quadrant-todo) | 0 | 2026-11-21 | 2026-11-21 | 四象限待办 (4Quadrant Todo) — DeepSeek Harness 桌面端插件：四象限看板、提醒、统计与飞书同步 |
| 230 | [shiyan688/dsh-note-to-learn](https://github.com/shiyan688/dsh-note-to-learn) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 学习笔记插件。摘录网页和 PDF、圈选截图提问，再把 AI 回答存回可编辑笔记。 |
| 231 | [shskyc/dsh-plugin-conversation-find](https://github.com/shskyc/dsh-plugin-conversation-find) | 0 | 2026-11-21 | 2026-11-21 | Renamed to shskyc/dsh-conversation-search |
| 232 | [Sinterdial/HandyHarness](https://github.com/Sinterdial/HandyHarness) | 0 | 2026-11-21 | 2026-11-21 | 在手机、平板与浏览器上安全远程操控你的 Harness (目前仅支持DSH) (无任何服务器交互，纯本地服务) |
| 233 | [Sirfetch-d/dsh-session-cost](https://github.com/Sirfetch-d/dsh-session-cost) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: show the current session's spend — token-based estimate with peak/off-peak pricing, account balance, OpenCode Go quota. |
| 234 | [soffits/dsh-sidebar-split](https://github.com/soffits/dsh-sidebar-split) | 0 | 2026-11-21 | 2026-11-21 | Resizable panes for the DeepSeek Harness sidebar: drag the line between the panel list and Workspaces, like VS Code. |
| 235 | [songling715/dsh-subagent-workbench](https://github.com/songling715/dsh-subagent-workbench) | 0 | 2026-11-21 | 2026-11-21 | Dispatch, watch, and take over parallel subagents from DeepSeek Harness. |
| 236 | [SorenLorn/dsh-onepiece-balance-widget](https://github.com/SorenLorn/dsh-onepiece-balance-widget) | 0 | 2026-11-13 | 2026-11-21 | DeepSeek Harness (DSH) One Piece balance widget, secondary development based on MeteorNOX's whale widget |
| 237 | [Spark-xY6/dsh-plugin-bio-thesis](https://github.com/Spark-xY6/dsh-plugin-bio-thesis) | 0 | 2026-11-20 | 2026-11-21 | Use your university's Word template to start and audit a thesis in DeepSeek Harness. Includes blind-review checks and a 65-item review checklist. |
| 238 | [Spark-xY6/dsh-plugin-endnote-cwyw](https://github.com/Spark-xY6/dsh-plugin-endnote-cwyw) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness skills for PDF-backed citations, duplicate-aware EndNote library updates, and editable Word manuscripts on Windows. |
| 239 | [ST31Orange/ark-agent-plan](https://github.com/ST31Orange/ark-agent-plan) | 0 | 2026-11-21 | 2026-11-21 | Volcengine Ark provider bundle for DeepSeek Harness (DSH): current Agent Plan model catalog (Doubao Seed 2.1, Seed Evolving, DeepSeek V4.1, GLM-5.3, Kimi K3.1) on the native llm-pi-ai adapter. 火山方舟 Agent Plan 模型路由插件。 |
| 240 | [StarDragonCN/dsh-offpeak-exec](https://github.com/StarDragonCN/dsh-offpeak-exec) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 插件：高峰时段发出的消息挂起到谷时再执行，等待期间不发请求、不计费。DSH plugin that defers peak-time messages to off-peak pricing. |
| 241 | [Sterlingfrank1/dsh-quota-resume](https://github.com/Sterlingfrank1/dsh-quota-resume) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness 插件：额度/限流中断任务后自动接着干，短冷却同轮重试，窗口额度暂停并在预计重置时间唤醒会话。 |
| 242 | [SunshnX/dsh-im-human-pacing](https://github.com/SunshnX/dsh-im-human-pacing) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: split one IM reply into several human-paced chat bubbles. |
| 243 | [Swcmb/dsh-fish-tools](https://github.com/Swcmb/dsh-fish-tools) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: 大肥鱼 integration — two read-only tools, config projection into fish/speak-up/heartbeat, five third-party patches, and a settings page |
| 244 | [Swcmb/dsh-opencode-compat](https://github.com/Swcmb/dsh-opencode-compat) | 0 | 2026-11-21 | 2026-11-21 | DSH plugin: map OpenCode-style tool names (shell / todowrite / webfetch / websearch) to native DSH tools with safe delegation. |
| 245 | [Swcmb/dsh-spec-driven-delivery](https://github.com/Swcmb/dsh-spec-driven-delivery) | 0 | 2026-11-21 | 2026-11-21 | DSH agent preset: 规格驱动交付 — six fixed steps with brainstorming/spec/plan skills and a document-reviewer subagent |
| 246 | [Temila/deepseek-balance-badge](https://github.com/Temila/deepseek-balance-badge) | 0 | 2026-11-21 | 2026-11-21 | 在 DeepSeek Harness 左侧栏底部显示 DeepSeek 账户余额的 DSH 插件 / Show the DeepSeek account balance at the foot of the DSH sidebar |
| 247 | [thePlannerIvan/dsh-review-dock](https://github.com/thePlannerIvan/dsh-review-dock) | 0 | 2026-09-26 | 2026-11-21 | DSH 侧栏通用审阅宿主：让任何 Skill 的文字/视觉工作台无缝挂进侧栏并唤醒 Agent 局部改稿 |
| 248 | [tlsneo/dsh-gpt-fastmode](https://github.com/tlsneo/dsh-gpt-fastmode) | 0 | 2026-11-21 | 2026-11-21 | enable fast mode for gpt llm models |
| 249 | [TNTChinaAAA/dsh-prompt-inject](https://github.com/TNTChinaAAA/dsh-prompt-inject) | 0 | 2026-11-21 | 2026-11-21 | DSH (DeepSeek Harness) prompt-inject plugin fork: send = one-shot unconditional inject (not persisted) + draggable overlay |
| 250 | [tobeychan/dsh-qianwen-status-dashboard](https://github.com/tobeychan/dsh-qianwen-status-dashboard) | 0 | 2026-11-21 | 2026-11-21 | Qianwen status dashboard plugin for DeepSeek Harness: login state, token expiry, subscription plan, credits, and assisted re-login. |
| 251 | [TreatTrick/dsh-plugin-reply-with-images](https://github.com/TreatTrick/dsh-plugin-reply-with-images) | 0 | 2026-11-17 | 2026-11-21 | Add real, context-aware reference images to DeepSeek Harness replies — portrait tables, 3-image collages, multi-angle strips &amp; durable attachments. |
| 252 | [tungloong/dsh-t3-inbox](https://github.com/tungloong/dsh-t3-inbox) | 0 | 2026-11-21 | 2026-11-21 | Attention-first, T3 Code–inspired inbox sidebar for DeepSeek Harness |
| 253 | [unhuman1146/dsh-opencode-go-usage-monitor](https://github.com/unhuman1146/dsh-opencode-go-usage-monitor) | 0 | 2026-11-21 | 2026-11-21 | OpenCode Go plan usage monitor for DeepSeek Harness: independent panel + sidebar summary (5h / weekly / monthly), API key stays on the Host. |
| 254 | [unights/dsh-mcp-manager](https://github.com/unights/dsh-mcp-manager) | 0 | 2026-11-21 | 2026-11-21 | MCP server manager plugin for DeepSeek Harness. |
| 255 | [voidwrathhh/dsh-tao-prompt](https://github.com/voidwrathhh/dsh-tao-prompt) | 0 | 2026-11-21 | 2026-11-21 | DSH prompt library: tag your prompts, insert them at the caret with one click, and let an agent grow the library through a JSON file. |
| 256 | [vu345/dsh-transfer-export](https://github.com/vu345/dsh-transfer-export) | 0 | 2026-11-21 | 2026-11-21 | Session backup export for DeepSeek Harness: JSON fidelity + Markdown readable layers by default, single-file HTML optional. /transfer-export command + message action strip button. |
| 257 | [wangjiaxi/dsh-composer-md-preview](https://github.com/wangjiaxi/dsh-composer-md-preview) | 0 | 2026-11-21 | 2026-11-21 | 把你自己的消息按 Markdown 渲染：输入框上方实时预览卡片，发送后的消息在对话里也按 Markdown 显示——分点、编号、加粗、引用、表格、代码块不再是原始标记。 |
| 258 | [wednesday-solutions/chime-scheduler](https://github.com/wednesday-solutions/chime-scheduler) | 0 | 2026-10-21 | 2026-11-21 | Schedule and publish LinkedIn posts from your AI chat. Hosted MCP server: https://schedule.getchime.co/mcp |
| 259 | [weichen704/dsh-chaoxing-assistant](https://github.com/weichen704/dsh-chaoxing-assistant) | 0 | 2026-11-21 | 2026-11-21 | Chaoxing (Xuexitong) course automation for DeepSeek Harness: real Edge browser, five tools, sidebar panel. |
| 260 | [winston-zhang-orz/dsh-voice-push-to-talk](https://github.com/winston-zhang-orz/dsh-voice-push-to-talk) | 0 | 2026-11-21 | 2026-11-21 | Hold-to-talk hotkey for DeepSeek Harness voice input: hold Right Option/Alt to record, release to stop and transcribe. |
| 261 | [wkylnj/dsh-zcode-cua](https://github.com/wkylnj/dsh-zcode-cua) | 0 | 2026-11-21 | 2026-11-21 | 把 ZCode 的电脑控制（Computer Use）接进 DeepSeek Harness：点击、打字、读无障碍树与截图。 |
| 262 | [WOchovy233/dsh-dayu-manager](https://github.com/WOchovy233/dsh-dayu-manager) | 0 | 2026-11-21 | 2026-11-21 | Dayu Manager: DSH plugin discovery, install decisions and local source audits. |
| 263 | [wuRDmemory/dsh_vim](https://github.com/wuRDmemory/dsh_vim) | 0 | 2026-11-20 | 2026-11-21 | vim model for Deepseek Harness |
| 264 | [xbzbing/dsh-im-lark](https://github.com/xbzbing/dsh-im-lark) | 0 | 2026-11-20 | 2026-11-21 | 飞书的 dsh 插件，支持长程任务提醒、失败任务提醒、问题推送等功能。 |
| 265 | [xiaomoL444/ugc-asset-search-dsh-plugin](https://github.com/xiaomoL444/ugc-asset-search-dsh-plugin) | 0 | 2026-11-21 | 2026-11-21 | 原神千星奇域资产搜索 dsh 插件 |
| 266 | [Xiashano1/dsh-workspace-switcher](https://github.com/Xiashano1/dsh-workspace-switcher) | 0 | 2026-11-21 | 2026-11-21 | DSH sidebar workspace switcher: show only the current workspace's sessions, with popup switching, search, drag-to-reorder. |
| 267 | [xinghe-1018/dsh-game-desk](https://github.com/xinghe-1018/dsh-game-desk) | 0 | 2026-11-21 | 2026-11-21 | 案卷台：DSH 插件，把剧本杀与游戏厅放进左侧入口栏（AI 主持 / 按幕剧本页图 / 白板与表格 / 公网房间） |
| 268 | [XWIDE/DSH_X-Wide-Color-Tags](https://github.com/XWIDE/DSH_X-Wide-Color-Tags) | 0 | 2026-11-21 | 2026-11-21 | X-Wide 会话色彩标签 · 给 DSH 侧栏每个会话打颜色标签：右键菜单色板（4 预设 + 自绘 HSV 取色 + 清除）、会话行圆点浮动弹板、右键取消/删除自定义色、「恢复默认」清空我的颜色。纯前端零依赖，只写 localStorage。 |
| 269 | [yang313760940/dsh-folder-drop-session](https://github.com/yang313760940/dsh-folder-drop-session) | 0 | 2026-11-21 | 2026-11-21 | Drop a folder into dsh to open a new conversation rooted in it |
| 270 | [yannikzz/narracat-dsh-workbench](https://github.com/yannikzz/narracat-dsh-workbench) | 0 | 2026-11-21 | 2026-11-21 | A full-flow novel workbench for DeepSeek Harness (DSH): shelf, premise, outline, drafting, visible memory, review and export. MIT. |
| 271 | [yanxiaochengya/dsh-siri-bridge](https://github.com/yanxiaochengya/dsh-siri-bridge) | 0 | 2026-11-21 | 2026-11-21 | DSH 插件：用 iPhone 快捷指令 / Siri 语音和 DeepSeek Harness 里的 AI 助手对话（局域网或 Tailscale 远程都行） |
| 272 | [yhm138/dsh-codex-session-pin](https://github.com/yhm138/dsh-codex-session-pin) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: pin/unpin Sessions and lead each project with pinned rows; pin state is the official workspace pinnedSessionIds. Works when a third-party sidebar replaces the shipped one. |
| 273 | [yoshirusan/useful-dsh-plugins](https://github.com/yoshirusan/useful-dsh-plugins) | 0 | 2026-11-21 | 2026-11-21 | A short, verified starter kit of plugins for DeepSeek Harness (dsh), plus a browseable catalog. |
| 274 | [yulongjiang1997/dsh-workspace-groups](https://github.com/yulongjiang1997/dsh-workspace-groups) | 0 | 2026-11-21 | 2026-11-21 | 在侧栏把工作区与自由会话分到自建分组，并可拖动调整分组内外的位置。 |
| 275 | [YYY-DXS/dsh-codex-history-bridge](https://github.com/YYY-DXS/dsh-codex-history-bridge) | 0 | 2026-11-21 | 2026-11-21 | 把本机 Codex 历史会话导入工作区（Markdown + 索引 + 原始 JSONL） |
| 276 | [YYY-DXS/dsh-deepseek-hub](https://github.com/YYY-DXS/dsh-deepseek-hub) | 0 | 2026-11-20 | 2026-11-21 | 把 DeepSeek 网页会话同步成本地 Markdown 知识库，并发布 DIY 项目到 GitHub。 |
| 277 | [YYY-DXS/dsh-media-studio](https://github.com/YYY-DXS/dsh-media-studio) | 0 | 2026-11-20 | 2026-11-21 | 用 DSH 驱动本机 FilmCraft / EffectCraft / PhotoCraft / LightCraft |
| 278 | [YYY-DXS/dsh-query-bridge](https://github.com/YYY-DXS/dsh-query-bridge) | 0 | 2026-11-20 | 2026-11-21 | 在对话里查 GitHub 仓库状态、DeepSeek 余额与本地 Codex 历史会话 |
| 279 | [YYY-DXS/dsh-whale-notify](https://github.com/YYY-DXS/dsh-whale-notify) | 0 | 2026-11-21 | 2026-11-21 | 任务完成或有待回复的问题时，播提示音并弹出鲸鱼娘卡片 |
| 280 | [z9134/dsh-sixlayer-memory](https://github.com/z9134/dsh-sixlayer-memory) | 0 | 2026-11-21 | 2026-11-21 | 会先审后记、还带审计链的本地记忆 · DSH 六层记忆底座 |
| 281 | [zcx-zg/dsh-plugin-manager](https://github.com/zcx-zg/dsh-plugin-manager) | 0 | 2026-11-21 | 2026-11-21 | Manage installed DSH (DeepSeek Harness) plugins: list, enable, disable, delete - from model tools or a web Settings page. |
| 282 | [zhangfeilong1990/dsh-ppt-agent](https://github.com/zhangfeilong1990/dsh-ppt-agent) | 0 | 2026-11-21 | 2026-11-21 | DSH 高密度 PPT 报告生成插件 |
| 283 | [ZhaoDezhang9998/dsh-github-repo-search](https://github.com/ZhaoDezhang9998/dsh-github-repo-search) | 0 | 2026-11-20 | 2026-11-21 | DeepSeek Harness plugin: search GitHub repositories, read one repo in detail with README, and check API quota. |
| 284 | [zman406986/dsh-bot](https://github.com/zman406986/dsh-bot) | 0 | 2026-09-15 | 2026-11-21 | Grok-bot-like multitask dispatcher for dsh (DeepSeek Harness) |
| 285 | [zx-yk/dsh-codex-adapter](https://github.com/zx-yk/dsh-codex-adapter) | 0 | 2026-11-21 | 2026-11-21 | Dispatch tasks from Claude Code / Codex to DSH agents as native subagents with live progress; configure dispatch defaults, execution mode, and vision / image-generation access, installed into the host in one click. |
| 286 | [zywaker/dsh-model-group-chat](https://github.com/zywaker/dsh-model-group-chat) | 0 | 2026-11-21 | 2026-11-21 | Multiple DSH models discuss one question together: independent answers, optional summary, free discussion, approved file access. |
| 287 | [zznn11/dsh-voice-read](https://github.com/zznn11/dsh-voice-read) | 0 | 2026-11-21 | 2026-11-21 | DeepSeek Harness plugin: read any assistant reply aloud with DeepSeek TTS (tide / stella). |
| 288 | [zzx1010010001-wq/dsh-plugin-console-oh](https://github.com/zzx1010010001-wq/dsh-plugin-console-oh) | 0 | 2026-11-21 | 2026-11-21 | DSH 控制台：鸿蒙端手机远程使用桌面端 DSH |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 1250589385/dsh-quick-send
- 1250589385/dsh-rescue-guard
- 1250589385/dsh-stall-guard
- 1250589385/dsh-test-autofix
- 1250589385/dsh-vendor-quick-switch
- bx33661/dsh-omv
- Carrick-K7/dsh-carrick-optimize
- ethan0084/dsh-cockpit
- JMINN0/dsh-go-second-screen
- just-liuyi/dsh-workspace-lastused
- MailComet/dsh-use-firefox
- pengin69/configure-network-proxy
- qifenglun1/dsh-prompt
- raheemmiyasin/dsh-theme-palette
- ssamurias/dsh-fish
- topmindspace/dsh-super-mind
- WSL043/dsh-reasoning-slider
- xia-sc/dsh-opencode-go
- xia-sc/dsh-update-notifier
