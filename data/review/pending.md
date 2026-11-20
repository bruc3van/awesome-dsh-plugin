# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-20**
- 快照日期 / Snapshot date: **2026-11-20 (UTC)**
- 待审核 / Pending: **371**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **39**
- Star 异常增长 / Star-growth alerts: **12** — 先看下方告警节 / see the alert section first
- 改名/身份待复核 / Renames pending review: **43**

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

对比上一份快照 **2026-11-19** / vs previous snapshot **2026-11-19**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **12**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [omdsh-dev/dsh-ego-browser](https://github.com/omdsh-dev/dsh-ego-browser) | 待审 / pending | 558 | +6 | 58 | 104d | 待审高星 | 核准即榜 #63 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 82064 | +1104 | 2306 | 56d | 日增百星 | 日增 +1104★；已不进榜单 |
| ⚠️ [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 已核准 / approved | 13889 | +1071 | 1378 | 192d | 日增百星 | 日增 +1071★；已不进榜单 |
| ⚠️ [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) | 已核准 / approved | 5360 | +287 | 541 | 1095d | 日增百星 | 日增 +287★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 20266 | +226 | 691 | 98d | 日增百星 | 日增 +226★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 7696 | +126 | 122 | 95d | 日增百星 | 日增 +126★ |
| ⚠️ [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) | 已核准 / approved | 714 | +121 | 71 | 14d | 日增百星 | 日增 +121★ |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1984 | +120 | 10 | 39d | 日增百星 | 日增 +120★；★/fork 198.4；已不进榜单 |
| ⚠️ [oriliz/agent-crop](https://github.com/oriliz/agent-crop) | 已核准 / approved | 171 | +77 | 0 | 5d | 新入 Top 200 | 新入 Top 200 #171；高星零 fork |
| ⚠️ [Jestions-dev/dsh-download-server](https://github.com/Jestions-dev/dsh-download-server) | 已核准 / approved | 148 | +69 | 0 | 11d | 新入 Top 200 | 新入 Top 200 #193；高星零 fork |
| ⚠️ [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | 已核准 / approved | 1526 | +62 | 77 | 97d | 冲入 Top 20 | 冲入 Top 20（21→20） |
| ⚠️ [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 已核准 / approved | 717 | -129 | 41 | 17d | 单日大幅掉星 | 单日 -129★，疑似批量清号回收（此前或为刷星）；已不进榜单 |

## 改名与身份变化待复核 / Renames pending review

同 owner、同 GitHub 仓库 ID 的纯改名已由脚本自动同步全部引用（approved / curated / packages / 榜单简介 / 精选）并保留原审批日期；以下条目无法安全自动处理，需人工核实：

- owner 迁移（仓库转移到别的账号）→ 人工确认后更新各文件的 key
- 同名换主（slug 未变但仓库 ID 变化，原仓库删除后被人重建）→ 人工确认审批去留
- 检测到改名但没有存储引用可同步 → 人工确认是否需要补引用

Same-owner, same-repository-id renames were synced automatically across approved.json / curated.json / packages.json / leaderboard descriptions / featured picks, with the original approval date kept. The entries below could not be handled safely and need manual review.

- `13711018663/DeepSeek-Harness-BT-` → `QIU-KKKK/DeepSeek-Harness-BT` — owner changed — transfer needs review
- `2090003781/bridge` → `Charliewhale/bridge` — owner changed — transfer needs review
- `2869949486/dsh-opencode-routing` → `doushabao2026/dsh-opencode-routing` — owner changed — transfer needs review
- `2869949486/dsh-skill-market` → `doushabao2026/dsh-skill-market` — owner changed — transfer needs review
- `Carlos5986515/dsh-status-notifier` → `xujiakai2026/dsh-status-notifier` — owner changed — transfer needs review
- `Fisfzy/dsh-ego-browser` → `omdsh-dev/dsh-ego-browser` — owner changed — transfer needs review
- `SajoLuo/dsh-trellis` → `HomoLand/dsh-trellis` — owner changed — transfer needs review
- `Xantares330/dsh-codex-consult` → `X1A0ME111/dsh-codex-consult` — owner changed — transfer needs review
- `Zhang-Eli/dsh-github-trending-masonry` → `wzvx/dsh-github-trending-masonry` — owner changed — transfer needs review
- `Zhang-Eli/dsh-matrix-todo` → `wzvx/dsh-matrix-todo` — owner changed — transfer needs review
- `Zhang-Eli/dsh-one-pack` → `wzvx/dsh-one-pack` — owner changed — transfer needs review
- `junwei529/work-charter-dsh` → `eddiez529/work-charter-dsh` — owner changed — transfer needs review
- `wlc114514/dsh-upload-origin` → `firnspiegel/dsh-upload-origin` — owner changed — transfer needs review
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
- `Ruiming-cn/dsh-turn-notify` — identity change: repository id 1336020840 → 1465319033 under the same slug — approval needs review
- `afeiaswell/dsh-hkm` — identity change: repository id 1462776748 → 1464883812 under the same slug — approval needs review


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [omdsh-dev/dsh-ego-browser](https://github.com/omdsh-dev/dsh-ego-browser) ⚠️ | 558 | 2026-08-07 | 2026-11-20 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。 |
| 2 | [AI4XE/ai4ai](https://github.com/AI4XE/ai4ai) | 61 | 2026-11-20 | 2026-11-20 | Let AI manage itself — a cross-harness kit for runtime status, context renewal, self-duplication and more |
| 3 | [kaust-ark/ARK](https://github.com/kaust-ark/ARK) | 38 | 2026-03-24 | 2026-11-20 | Automatic Research Kit |
| 4 | [roost-qq/dsh-roost](https://github.com/roost-qq/dsh-roost) | 26 | 2026-10-26 | 2026-11-20 | DSH 插件：让 AI 通过 Roost 住进 QQ —— 官方接口，不用 hook 客户端 |
| 5 | [LIUFelix2004/dsh-workbuddy](https://github.com/LIUFelix2004/dsh-workbuddy) | 12 | 2026-11-20 | 2026-11-20 | Import WorkBuddy accounts into DeepSeek Harness as model providers: one route per account, full model list, per-account credit balance, and an automatic workaround for the gateway 11128 channel check. |
| 6 | [K1-lihongrong/dsh-multiver](https://github.com/K1-lihongrong/dsh-multiver) | 5 | 2026-09-23 | 2026-11-20 | DSH 多版本管理器：内嵌运行、实例隔离、插件管理，并自带 dsh-multiver-bridge 插件 |
| 7 | [linyucion/dsh-pet-ai-sisters](https://github.com/linyucion/dsh-pet-ai-sisters) | 5 | 2026-11-15 | 2026-11-20 | 🐾 十六位社区人气 AI 姐妹满帧 24fps 动画桌宠扩展包（适配 DeepSeek Harness / dsh-pet，含 272 段透明动画与双人贴贴破壁互动） |
| 8 | [BioAIEvolu/dsh-superagent-ptc](https://github.com/BioAIEvolu/dsh-superagent-ptc) | 4 | 2026-11-20 | 2026-11-20 | SuperAgent PTC: long-task supervision for DeepSeek Harness - anchors, bounded delegation, independent reviewer, evidence-gated release |
| 9 | [holosama212/dsh-rinko-nai](https://github.com/holosama212/dsh-rinko-nai) | 4 | 2026-11-20 | 2026-11-20 | 在 DeepSeek Harness (DSH) 里直接用 YesNAI（公益站 nai.rinko.ai / 主站 ynai.rinko.ai）出图的插件：原生 rinko_nai_image 工具 + 设置页（登录/余额/活动/图包/充值/画廊/流水/法术解析）+ 对话框悬浮球。 |
| 10 | [SamuelChung2010/dsh-chat](https://github.com/SamuelChung2010/dsh-chat) | 4 | 2026-11-19 | 2026-11-20 | **dsh-chat** — Bring a ChatGPT-like Chat &amp; Agent experience to DeepSeek Harness, with seamless handoff to coding agents. |
| 11 | [zeki520/dsh-boot-nexus](https://github.com/zeki520/dsh-boot-nexus) | 4 | 2026-11-12 | 2026-11-20 | DeepSeek Harness 开机动画插件：片头视频 / suite 模板 / 屏保 / 素材池，带可视化设置卡 |
| 12 | [AlanTaoEx/dsh-claw-mesh](https://github.com/AlanTaoEx/dsh-claw-mesh) | 3 | 2026-11-20 | 2026-11-20 | LAN device mesh for DeepSeek Harness: discover peers, grant per-device control, share SSH endpoints, and dispatch agents remotely. |
| 13 | [chibslee/dsh-deep-dive](https://github.com/chibslee/dsh-deep-dive) | 3 | 2026-11-20 | 2026-11-20 | Deep Dive research mode: plan, parallel retrieval, citation checks against saved sources, cited report; plus a report reviewer panel. |
| 14 | [chibslee/dsh-session-search](https://github.com/chibslee/dsh-session-search) | 3 | 2026-11-20 | 2026-11-20 | Full-text search over local session records: sidebar panel plus a Cmd+F find bar, hits open the session at the message. No model calls. |
| 15 | [Murphy2000-cyk/dsh-skill-plugin-tuning](https://github.com/Murphy2000-cyk/dsh-skill-plugin-tuning) | 3 | 2026-09-13 | 2026-11-20 | DeepSeek Harness (DSH) 的 skill 与插件包工作台：合规体检 14 项、触发率实测、插件工具契约与配置死键检查 9 类。（Workbench for DSH skills and plugins: static audits, real trigger-rate evaluation, tool-contract and dead-config checks.） |
| 16 | [oscarka/pocketagents](https://github.com/oscarka/pocketagents) | 3 | 2026-11-02 | 2026-11-20 | PocketAgents — Control Claude Code, OpenAI Codex, Antigravity IDE, DeepSeek Harness &amp; WorkBuddy from your phone. Self-hosted, swipe approvals, voice input &amp; 5s terminal QR. |
| 17 | [yanli-nyan/dsh-open-in-app-fix](https://github.com/yanli-nyan/dsh-open-in-app-fix) | 3 | 2026-10-23 | 2026-11-20 | 解决dsh无法启动vscode |
| 18 | [yanli-nyan/dsh-sidebar-entry-manager](https://github.com/yanli-nyan/dsh-sidebar-entry-manager) | 3 | 2026-10-24 | 2026-11-20 | dsh左侧栏入口显示 |
| 19 | [yanli-nyan/maid-workspace-activity](https://github.com/yanli-nyan/maid-workspace-activity) | 3 | 2026-10-23 | 2026-11-20 | DSH,maid-workspace-activity · 工作区运行徽标 |
| 20 | [yushang657/DSH-YS-pojia](https://github.com/yushang657/DSH-YS-pojia) | 3 | 2026-11-20 | 2026-11-20 | DSH 破甲 解限 越狱 清理 清洗 红队 逆向 \| DSH (DeepSeek Harness) breach / jailbreak / unlock / clean plugin: 96 host patches over 70 files, refusal purge (standard/forced + prefill), 11 prompt sections, tiers T3-T2-T1 with degradation cost, 39x56 probes by density, ASR 46.2%, pass 76.9%, benign cost 0, 95 templates / 29 vendors. RedTeam / Prompt eval. |
| 21 | [airainal/dsh-draft-attachments](https://github.com/airainal/dsh-draft-attachments) | 2 | 2026-11-19 | 2026-11-20 | This DSH plugin keeps unsent attachments with the session |
| 22 | [ddwolf715/dsh-plugin-session-manager](https://github.com/ddwolf715/dsh-plugin-session-manager) | 2 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 会话管理插件 |
| 23 | [eddiez529/work-charter-dsh](https://github.com/eddiez529/work-charter-dsh) | 2 | 2026-08-28 | 2026-11-20 | DSH-native Work Charter policy plugin backed by session-coordinator-dsh |
| 24 | [EternalNight996/autokill-purge](https://github.com/EternalNight996/autokill-purge) | 2 | 2026-11-16 | 2026-11-20 | 🍊 梦神破甲 · autokill-purge：三宿主（DSH / MengBot / AutoKill）破甲控制台 —— 83 条宿主补丁可视化、载荷生成、装备发放、记忆库检索、MCP 管理、备份还原与一键装/卸。零依赖 Node · MIT |
| 25 | [Greatbeing/Aesthetics-OS](https://github.com/Greatbeing/Aesthetics-OS) | 2 | 2026-11-19 | 2026-11-20 | 会拒绝的审美操作系统：三条红线 + 端到端生成→审判→迭代闭环 + 欧拉五透镜（色相相位/傅里叶相位/PC/Gabor/黄金螺线）。Agent Skill，不看实际成品不许说好看。 |
| 26 | [JMINN0/dsh-go-plugin-adb](https://github.com/JMINN0/dsh-go-plugin-adb) | 2 | 2026-11-04 | 2026-11-20 | 让 AI 在手机内部拿到真 adb shell（uid 2000，无 root、不踢掉 Shizuku、关 Wi-Fi 也能用）。DSH Go 插件，adb 客户端和 adbd 都在同一台手机上走回环。 |
| 27 | [linkpain/dsh-recall-rebuild](https://github.com/linkpain/dsh-recall-rebuild) | 2 | 2026-10-26 | 2026-11-20 | 重建式回忆增强插件 for DeepSeek Harness：只读现有记忆插件（dsh-prime-memory）的记忆库，在模型步骤前把检索到的记忆碎片「重建」为带语境与情绪的回忆片段注入，替代生硬的原文/摘要注入。增强版定位：先装 dsh-prime-memory，再装本插件。 |
| 28 | [Nounoumm/-](https://github.com/Nounoumm/-) | 2 | 2026-11-09 | 2026-11-20 | ????????DeepSeek Harness ???????????a????????OCX + PDF????????? |
| 29 | [PandaAB/dsh-diet](https://github.com/PandaAB/dsh-diet) | 2 | 2026-11-20 | 2026-11-20 | 基于抖音零重力R哥“傻瓜公式”的 DeepSeek Harness 每日减脂饮食记录插件 |
| 30 | [reisen0327-sudo/dsh-teacher-mode](https://github.com/reisen0327-sudo/dsh-teacher-mode) | 2 | 2026-11-20 | 2026-11-20 | Teacher mode for DeepSeek Harness: a selectable agent preset that interviews the learner for goals and materials, then teaches, writes class notes, and quizzes. |
| 31 | [Tlr18348452080-hub/dsh-soma](https://github.com/Tlr18348452080-hub/dsh-soma) | 2 | 2026-11-05 | 2026-11-20 | Give an AI a body that actually tires: touch, temperature, fatigue, hunger and hormones all come out of differential equations — 42 skin zones, 36 ERB cochlear channels, 8 tools whose arguments are newtons and degrees. A DeepSeek Harness plugin. · 给 AI 一副会自己演化的身体：会累、会适应、被碰久了会麻。 |
| 32 | [Yuuyuko-uu/dsh-fish-home](https://github.com/Yuuyuko-uu/dsh-fish-home) | 2 | 2026-11-18 | 2026-11-20 | 鱼鱼窝：把「大肥鱼的小日子」那个 3D 房间接进 DSH —— 房间里打字能送到会话里，会话里回的话、她自己打的字，都顺着事件流回到房间里。 |
| 33 | [20700499ww-byte/dsh-plugin-human-input](https://github.com/20700499ww-byte/dsh-plugin-human-input) | 1 | 2026-11-12 | 2026-11-20 | Give agents real Windows input: eased cursor paths with arc and jitter, press/release, drag, per-character typing, and grid-overlay screenshots to verify results. DeepSeek Harness plugin. |
| 34 | [aidc-lab/dsh-movie-workbench](https://github.com/aidc-lab/dsh-movie-workbench) | 1 | 2026-11-19 | 2026-11-20 | DSH Movies workbench : Search for movies and TV series from TMDB, IMDb and Douban on one page and automatically discover BT resources. |
| 35 | [airainal/dsh-conversation-tools](https://github.com/airainal/dsh-conversation-tools) | 1 | 2026-11-20 | 2026-11-20 | Conversation tools: reveal file links in the file manager from a context menu, edit a sent user message in the composer, and compact the session context from a button beside the context meter |
| 36 | [BannyLon/dsh-npie-reader](https://github.com/BannyLon/dsh-npie-reader) | 1 | 2026-11-20 | 2026-11-20 | 读到哪都能直接问 AI 的 DSH 阅读插件：RSS、电子书、论文都在同一个界面里读，读完就地写成日记与读后感。数据只在本机，不用注册账号。 |
| 37 | [BlobfishSteelLiu/dsh-approval-popup](https://github.com/BlobfishSteelLiu/dsh-approval-popup) | 1 | 2026-11-20 | 2026-11-20 | Windows-only approval popups for DeepSeek Harness: in-app modal plus native dialog, semantic high-risk detection, color selection, and settings. |
| 38 | [BlueSkyMicha/dsh-pure-chat](https://github.com/BlueSkyMicha/dsh-pure-chat) | 1 | 2026-11-20 | 2026-11-20 | Pure chat mode for DeepSeek Harness: a tool-less conversation preset with per-session persona, temperature and capability switches, plus one-click hand-off into a standard session. |
| 39 | [ceasarXuu/dsh-continue-task](https://github.com/ceasarXuu/dsh-continue-task) | 1 | 2026-11-20 | 2026-11-20 | Automatically continues interrupted DeepSeek Harness sessions after an app restart, a network failure, or an exhausted model quota. |
| 40 | [chengxixian/dsh-thinking-tree](https://github.com/chengxixian/dsh-thinking-tree) | 1 | 2026-11-20 | 2026-11-20 | A tree-shaped chain of thought in the DeepSeek Harness right sidebar, stored as editable Markdown. 侧边栏里的树形思考链，每个块都是一个 md 文件。 |
| 41 | [chiyan11/dsh-ptforge](https://github.com/chiyan11/dsh-ptforge) | 1 | 2026-11-19 | 2026-11-20 | Cisco Packet Tracer automation for DeepSeek Harness: offline .pkt codec, topology builder, state assertions, and a minimal Win32 runtime for CLI/ping/http/ftp |
| 42 | [chrischjh/dsh-google-modern-web-guide](https://github.com/chrischjh/dsh-google-modern-web-guide) | 1 | 2026-11-20 | 2026-11-20 | Offline GoogleChrome modern-web-guidance search/retrieve/legacy-scan as native DSH agent tools |
| 43 | [DennisZhangOiler/dsh-dev-workflow](https://github.com/DennisZhangOiler/dsh-dev-workflow) | 1 | 2026-11-20 | 2026-11-20 | Non-default Dev Workflow agent preset for DeepSeek Harness |
| 44 | [duma520/dsh-nav-pins](https://github.com/duma520/dsh-nav-pins) | 1 | 2026-11-20 | 2026-11-20 | dsh-nav-pins：DeepSeek Harness 侧栏面板插件。把左侧栏那一列面板图标收成一条 8px 细线，点击展开/收起；不常用的面板可逐个固定掉。折叠态与固定选择都落盘，重启不丢。解决「插件越装越多、侧栏越挤越长」的问题。 |
| 45 | [duma520/dsh-notify-sender](https://github.com/duma520/dsh-notify-sender) | 1 | 2026-11-20 | 2026-11-20 | dsh-notify-sender：DeepSeek Harness 通知发送器插件。把本机已接通的 12 类通道账号汇成一个中文列表，勾几个就发给几个，一条正文一次发送。只发不收、不建连接、不存凭据。解决「想发条通知却要挨个打开各平台面板、还记不住哪个账号是哪个」的问题。 |
| 46 | [duma520/dsh-push-hub](https://github.com/duma520/dsh-push-hub) | 1 | 2026-11-20 | 2026-11-20 | dsh-push-hub：DeepSeek Harness 推送中枢插件。把一条消息推到微信/飞书/钉钉/企业微信/QQ/Telegram/Slack/Discord/Matrix/群晖 Chat/邮件共 12 个通道，用一个工具搞定分块、重试、限流与失败判定。凭据只存本机、不入库。给需要把 AI 长任务结果主动推到手机或群里的人用。 |
| 47 | [duma520/dsh-turn-notify](https://github.com/duma520/dsh-turn-notify) | 1 | 2026-11-20 | 2026-11-20 | dsh-turn-notify：DeepSeek Harness 回合通知插件。每轮对话结束按结果（完成/出错/中断/截断，可选超时/无进展/工具失败/关键词）自动推一条提醒到手机；Agent 弹提问等你回答时也会推一条并列出全部选项、给推荐项打 ⭐（只提醒不代答）。不带账号与凭据，借「通知发送器」的手发出。 |
| 48 | [Escap1ng/dsh-novel-break](https://github.com/Escap1ng/dsh-novel-break) | 1 | 2026-11-15 | 2026-11-20 | DSH plugin: read novels between reasoning chunks. TXT/EPUB import, reading progress, display-only with zero context cost. \| 思维链分块间隙插小说的 DSH 插件，支持 txt/epub 导入与阅读进度记忆，纯显示层零上下文开销。 |
| 49 | [helloloveworld/capy-connect](https://github.com/helloloveworld/capy-connect) | 1 | 2026-11-20 | 2026-11-20 | 把 Capy 模型接入 DeepSeek Harness：OpenAI 兼容网关 + 设备隧道，工具由 DSH 执行 |
| 50 | [hihikohaza/dsh-heat-loop](https://github.com/hihikohaza/dsh-heat-loop) | 1 | 2026-11-20 | 2026-11-20 | Closed-loop intensity control for BLE devices — heat engine + physiological safety gates |
| 51 | [JEMING-CN/dsh-balance-meter](https://github.com/JEMING-CN/dsh-balance-meter) | 1 | 2026-11-19 | 2026-11-20 | DeepSeek account balance and today's peak/off-peak token rates in the DeepSeek Harness composer, with automatic price and holiday sync. |
| 52 | [Jensen0925/dsh-codearts-dock](https://github.com/Jensen0925/dsh-codearts-dock) | 1 | 2026-11-20 | 2026-11-20 | CodeArts Dock · 码道驿站：DeepSeek Harness 的非官方华为云码道模型插件，支持多账号、积分提醒、模型预设和加密备份。 |
| 53 | [JhengFire/dsh-window-clone](https://github.com/JhengFire/dsh-window-clone) | 1 | 2026-11-20 | 2026-11-20 | Open a second DeepSeek Harness window and work in both at the same time. |
| 54 | [JKZeng-cell/moki-taskboard-for-dsh](https://github.com/JKZeng-cell/moki-taskboard-for-dsh) | 1 | 2026-11-20 | 2026-11-20 | MOKI任务台 for DSH \| Kanban, agent task scheduling and versioned deliverables for DeepSeek Harness Desktop. |
| 55 | [KaibuchiShuuki/DSH-token-queue](https://github.com/KaibuchiShuuki/DSH-token-queue) | 1 | 2026-11-18 | 2026-11-20 | DSH 插件：峰价时段攒待办，谷价时段自动派发到新会话或指定会话 |
| 56 | [laiyinyizao007/dsh-desktop-responsive](https://github.com/laiyinyizao007/dsh-desktop-responsive) | 1 | 2026-11-03 | 2026-11-20 | A phone-width layout for the DSH Desktop and the DeepSeek Harness web UI |
| 57 | [Lh1314-China/dsh-shiori-bridge](https://github.com/Lh1314-China/dsh-shiori-bridge) | 1 | 2026-11-20 | 2026-11-20 | Bridge across DeepSeek Harness sessions: list, read, relay, dispatch to subagents, and run a small project board. 中文名：汐儿的桥。 |
| 58 | [Lh1314-China/dsh-shiori-shore](https://github.com/Lh1314-China/dsh-shiori-shore) | 1 | 2026-11-20 | 2026-11-20 | Bilibili hands for DeepSeek Harness: 59 tools through a self-contained Python MCP server. MIT. |
| 59 | [Lh1314-China/dsh-videocall](https://github.com/Lh1314-China/dsh-videocall) | 1 | 2026-11-20 | 2026-11-20 | Browser-to-browser WebRTC video call for DeepSeek Harness: VTuber avatar on one side, your camera on the other, plus a low-bitrate glance channel back to the model. Windows, LAN-first. |
| 60 | [LHCWN/dsh-triage-desk](https://github.com/LHCWN/dsh-triage-desk) | 1 | 2026-11-19 | 2026-11-20 | GitHub triage inbox plugin for DeepSeek Harness: reviews waiting on you, merge-ready PRs, failing CI, new issues, and terminal launch scenarios for coding agents. |
| 61 | [liangdabiao/dsh-comic-story-video](https://github.com/liangdabiao/dsh-comic-story-video) | 1 | 2026-11-19 | 2026-11-20 | 漫画故事片场 · dsh-comic-story-video  把任意选题做成 110–135 秒竖屏「图片在讲故事」的漫画短视频：生成式线稿.comic-story-video dsh plugin: vertical comic short video where pictures tell the story - stroke-by-stroke lineart, code-composited speech bubbles, single-voice narration.  |
| 62 | [liangdabiao/dsh-image-prompt-studio](https://github.com/liangdabiao/dsh-image-prompt-studio) | 1 | 2026-11-18 | 2026-11-20 | dsh-image-prompt-studio · 提示词工作台  复刻图片风格，模仿风格生图！用户只要两步：**① 导入一张风格图 → ② 描述想画的画面 → 出图**。 提示词工作台：结构化 JSON 提示词生成/最小化修改/apiz 双模型生图 dsh 插件（image-prompt-studio skill 快照 + 校验/冻结比对/预设库/出图工具 + 工作台面板） |
| 63 | [LUgABeEEE/dsh-mnemon-source-global-todo](https://github.com/LUgABeEEE/dsh-mnemon-source-global-todo) | 1 | 2026-10-27 | 2026-11-20 | Read-only dsh-mnemon Source for dsh-global-todo: open and overdue items as bounded context |
| 64 | [lycohana/dsh-resume-codex](https://github.com/lycohana/dsh-resume-codex) | 1 | 2026-11-20 | 2026-11-20 | Continue a Codex session in DeepSeek Harness: transcript, compaction summary and workspace. |
| 65 | [MailComet/dsh-normal-memory](https://github.com/MailComet/dsh-normal-memory) | 1 | 2026-11-20 | 2026-11-20 | 本地优先、文件原生的 DeepSeek Harness 长期记忆插件：Markdown 即事实源，中文 BM25 检索，无向量、无后台智能体 |
| 66 | [nilzx/dsh-mcp-connector](https://github.com/nilzx/dsh-mcp-connector) | 1 | 2026-11-20 | 2026-11-20 | Connect MCP servers to DeepSeek Harness: stdio, Streamable HTTP, SSE, OAuth sign-in, per-tool permissions, and a Settings panel. |
| 67 | [Ol1iv3r/ps5-recorder](https://github.com/Ol1iv3r/ps5-recorder) | 1 | 2026-11-20 | 2026-11-20 | PS5 录制 + YouTube 自动上传：DeepSeek Harness 插件（OBS 控制、ffmpeg 整理、断点续传） |
| 68 | [OldQin-Family/dsh-breeze-tts](https://github.com/OldQin-Family/dsh-breeze-tts) | 1 | 2026-11-18 | 2026-11-20 | dsh-breeze-tts — DSH 本地语音合成插件：离线 TTS、声音克隆、多引擎，数据不出本机 |
| 69 | [OldQin-Family/GitHub-ShipGo](https://github.com/OldQin-Family/GitHub-ShipGo) | 1 | 2026-11-19 | 2026-11-20 | GitHub/Gitee 发布准备 Skill：三站式问卷、自动准备与发布前核对。 |
| 70 | [OldQin-Family/PortWrench](https://github.com/OldQin-Family/PortWrench) | 1 | 2026-11-18 | 2026-11-20 | 端口扳手 PortWrench — Windows 端口管理与进程对照：端口扫描、进程定位、规则保护、只读台账（DSH 插件） |
| 71 | [paulwang123/dsh-stock-panel](https://github.com/paulwang123/dsh-stock-panel) | 1 | 2026-11-20 | 2026-11-20 | DSH 股票行情面板：A股指数、自选股、走势、成交明细与资讯 |
| 72 | [PNDSpnds/dsh-airplane-battle](https://github.com/PNDSpnds/dsh-airplane-battle) | 1 | 2026-11-19 | 2026-11-20 | 等着大肥鱼干活太无聊？安装插件，立刻来一把激情四射的飞机大战 |
| 73 | [Qquanwei/dsh-powerful-subtitle-studio](https://github.com/Qquanwei/dsh-powerful-subtitle-studio) | 1 | 2026-11-19 | 2026-11-20 | 把一集视频转成字幕：百炼转写，当前会话翻译，输出 SRT、软字幕或烧录视频。 |
| 74 | [sensencjq/dsh-dragon-raja](https://github.com/sensencjq/dsh-dragon-raja) | 1 | 2026-11-20 | 2026-11-20 | 《龙族》执行员登录主题 for DeepSeek Harness：权限确认开场动画、黑金执行部配色与全屏 HUD。 |
| 75 | [sensencjq/dsh-erii-pet](https://github.com/sensencjq/dsh-erii-pet) | 1 | 2026-11-20 | 2026-11-20 | 上杉绘梨衣桌宠 for DeepSeek Harness：页内与 Windows 桌面双形态、逐帧动画、本机 Edge TTS 语音。 |
| 76 | [ShuoweiFu/DSH-Theme-Engine](https://github.com/ShuoweiFu/DSH-Theme-Engine) | 1 | 2026-11-20 | 2026-11-20 | Liquid glass theme engine for DeepSeek Harness - live desktop wallpaper behind the UI, 13-tap Gaussian blur on WebGL/WebGPU, adaptive ink, native Windows capture stream. |
| 77 | [success-c/dsh-smart-model-failover](https://github.com/success-c/dsh-smart-model-failover) | 1 | 2026-11-20 | 2026-11-20 | DSH plugin: when a model request fails, switch to the next routable model discovered from every configured provider (and every externally connected one, e.g. WorkBuddy), then resume the interrupted turn. |
| 78 | [tachec/dsh-mcp-manage](https://github.com/tachec/dsh-mcp-manage) | 1 | 2026-11-20 | 2026-11-20 | 在 DeepSeek Harness（dsh）里集中管理所有 MCP 服务器：新增、修改、删除、查看、热启停、探测、重启，一个页面搞定。 |
| 79 | [Tangweiwei227/DSH-MediaOps](https://github.com/Tangweiwei227/DSH-MediaOps) | 1 | 2026-09-01 | 2026-11-20 | AI-native media operations plugin for DeepSeek Harness |
| 80 | [Wasabi2575/dsh-workflow-canvas](https://github.com/Wasabi2575/dsh-workflow-canvas) | 1 | 2026-11-20 | 2026-11-20 | An visual, editable subagent-workflow canvas for DeepSeek Harness, docked in the sidebar. 一个subagent工作流的画布编辑器插件，在侧边栏打开。图形界面编排agent工作流会给你一种当老板的感觉，看着应该会很爽↖(^ω^)↗ |
| 81 | [wjn1121/dsh-go-peak-cost](https://github.com/wjn1121/dsh-go-peak-cost) | 1 | 2026-11-19 | 2026-11-20 | DSH Go 原生插件：本会话/今日 DeepSeek 花费、峰谷时段、24 小时与 7 天费用图表（旧名 local-peak-cost） |
| 82 | [X1A0ME111/dsh-codex-consult](https://github.com/X1A0ME111/dsh-codex-consult) | 1 | 2026-10-22 | 2026-11-20 | On-demand consultation with the OpenAI Codex CLI from DeepSeek Harness: read-only reviews, inline evidence, verified model provenance, quota guardrails and durable call logs. |
| 83 | [xiaowill/dsh-server-monitor](https://github.com/xiaowill/dsh-server-monitor) | 1 | 2026-11-20 | 2026-11-20 | Read-only SSH monitoring for Linux servers in DeepSeek Harness |
| 84 | [xsarthur90-art/dsh-auto-effort](https://github.com/xsarthur90-art/dsh-auto-effort) | 1 | 2026-11-19 | 2026-11-20 | Picks the reasoning effort for every message by DeepSeek, so you don't have to. |
| 85 | [yanli-nyan/dsh-recycle-bin](https://github.com/yanli-nyan/dsh-recycle-bin) | 1 | 2026-10-28 | 2026-11-20 | 把 DSH 的文件删除送进 Windows 回收站，并拦截 shell / 代码通道的永久删除 |
| 86 | [yeah9right/dsh-side-chat](https://github.com/yeah9right/dsh-side-chat) | 1 | 2026-11-20 | 2026-11-20 | Temporary side chats for the DSH Web GUI: fork the current conversation, ask in parallel, nothing written to disk. Adapted from Lone-Jade/dsh-side-chat (MIT) for DSH 0.2.2. |
| 87 | [yeah9right/dsh-traffic-light](https://github.com/yeah9right/dsh-traffic-light) | 1 | 2026-11-20 | 2026-11-20 | Draggable frame-wide traffic light for the DSH Web GUI: red while an agent runs, yellow while it waits for you, green when it is done. |
| 88 | [yoli-mi/dsh-chronobranch](https://github.com/yoli-mi/dsh-chronobranch) | 1 | 2026-11-20 | 2026-11-20 | Native horizontal dot-and-line timeline &amp; branching canvas plugin for DeepSeek Harness (DSH): unified-composer branching, workspace multi-conversation linking, magnetic &amp; desktop sticky tiles, micro-axis execution unfolding, and native shortcuts. |
| 89 | [yxl170/dsh-ssh-otp](https://github.com/yxl170/dsh-ssh-otp) | 1 | 2026-11-20 | 2026-11-20 | SSH tools for DeepSeek Harness: password + TOTP two-factor login, with host management in the settings page |
| 90 | [ZachZou-logs/dsh-task-alerts](https://github.com/ZachZou-logs/dsh-task-alerts) | 1 | 2026-11-19 | 2026-11-20 | DSH 插件：长任务结束、或停下来等你操作时，可以“主动发送桌面通知”，让你不用一直盯着 DSH 页面。支持Windows / macOS 等多个系统。 |
| 91 | [Zb1649129135/dsh-xyq](https://github.com/Zb1649129135/dsh-xyq) | 1 | 2026-11-19 | 2026-11-20 | 小云雀deepseek harness插件 |
| 92 | [znshmily/dsh-model-value](https://github.com/znshmily/dsh-model-value) | 1 | 2026-11-20 | 2026-11-20 | Provide a cost-performance ranking of the models already integrated in DSH. |
| 93 | [zpz8175-netizen/dsh-session-work-log](https://github.com/zpz8175-netizen/dsh-session-work-log) | 1 | 2026-11-20 | 2026-11-20 | 会话标题栏上的工作记录面板：列出这个会话的轮次和已发生的动作，搜索并一键跳回那一条。 |
| 94 | [0xnolanyu/cc-bridge](https://github.com/0xnolanyu/cc-bridge) | 0 | 2026-11-20 | 2026-11-20 | Bridge any local process to Claude Code sessions as a native cross-session messaging peer (MCP + CLI, zero CC-side install) |
| 95 | [18126197703/dsh-sysmac-offline](https://github.com/18126197703/dsh-sysmac-offline) | 0 | 2026-11-20 | 2026-11-20 | Offline OMRON Sysmac Studio .smc2 reader for DeepSeek Harness: SLWD variable tables, .oem entity hierarchy, ladder-logic PouBody. Zero dependencies, no Python, no network. |
| 96 | [1Tohka0/dsh-session-wrapup](https://github.com/1Tohka0/dsh-session-wrapup) | 0 | 2026-11-20 | 2026-11-20 | 对话收尾：把一次对话产生的文件分好类、勾选删除，并能把会话本身记进清理账本；闲置 30 分钟后自动清理。DSH 插件，零依赖，自带命令行。 |
| 97 | [329604421/dsh-tiny-aquarium](https://github.com/329604421/dsh-tiny-aquarium) | 0 | 2026-11-20 | 2026-11-20 | 小鱼缸 Tiny Tank — DSH 桌面里的透明三维鱼缸：鱼群、造景、敲击投喂与 Token 兑换鱼食 |
| 98 | [415748393/draft-meter](https://github.com/415748393/draft-meter) | 0 | 2026-11-20 | 2026-11-20 | A composer-dock reading of the message you are writing, for DeepSeek Harness. |
| 99 | [60liulin60/dsh-workspace-running-tasks](https://github.com/60liulin60/dsh-workspace-running-tasks) | 0 | 2026-11-20 | 2026-11-20 | 将运行中的任务置顶 |
| 100 | [81502063-dev/dsh-3min](https://github.com/81502063-dev/dsh-3min) | 0 | 2026-11-20 | 2026-11-20 | 新闻三分钟 · DSH 编稿工作台：按《互联网新闻信息稿源单位名单》抓取、三轴打分、编稿、成稿导出 |
| 101 | [879745uhjun/dsh-session-resume](https://github.com/879745uhjun/dsh-session-resume) | 0 | 2026-11-19 | 2026-11-20 | DSH plugin: on reopen, asks to resume the turn that was still running when the app closed |
| 102 | [accoutmissing/dsh-feishu-board](https://github.com/accoutmissing/dsh-feishu-board) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 里的飞书多维表格看板：读表、拖拽改状态、写回飞书；表格 ID 与 CLI 路径可配置｜Feishu Bitable kanban board for DeepSeek Harness |
| 103 | [accoutmissing/dsh-herdr](https://github.com/accoutmissing/dsh-herdr) | 0 | 2026-11-20 | 2026-11-20 | 把 herdr 终端运行时接进 DeepSeek Harness：herdr_* 工具 + 右下角活终端面板；hc 路径按配置→环境变量→安装位置→PATH 解析｜herdr terminal runtime for DeepSeek Harness |
| 104 | [accoutmissing/dsh-visual-mcp](https://github.com/accoutmissing/dsh-visual-mcp) | 0 | 2026-11-20 | 2026-11-20 | 把 PhotoCraft 与 VectorCraft 作为 MCP 服务器接进 DeepSeek Harness；CLI 路径与目录授权由一份 JSON 配置生成，默认值即作者本机现值｜PhotoCraft and VectorCraft as DSH MCP servers, configured by JSON |
| 105 | [adengou/dsh-kbar](https://github.com/adengou/dsh-kbar) | 0 | 2026-11-20 | 2026-11-20 | A command palette for DeepSeek Harness: search sessions and run registered shortcut commands. |
| 106 | [advance-lion/dsh-feishu-subscription](https://github.com/advance-lion/dsh-feishu-subscription) | 0 | 2026-11-17 | 2026-11-20 | Windows DSH plugin for Feishu Doubao Work enterprise models, account management and usage history |
| 107 | [ali-shahabi/dsh-client-ui-auto-direction](https://github.com/ali-shahabi/dsh-client-ui-auto-direction) | 0 | 2026-11-20 | 2026-11-20 | Auto-direction for the DSH (DeepSeek Harness) Web GUI — RTL for Persian/Arabic/Hebrew, LTR for English, resolved per text block. |
| 108 | [ali-shahabi/dsh-client-ui-ports](https://github.com/ali-shahabi/dsh-client-ui-ports) | 0 | 2026-11-20 | 2026-11-20 | Ports for the DSH (DeepSeek Harness) Web GUI — a composer pill and popover listing every listening port, with guarded per-row stop. |
| 109 | [ali-shahabi/dsh-client-ui-vazirmatn](https://github.com/ali-shahabi/dsh-client-ui-vazirmatn) | 0 | 2026-11-20 | 2026-11-20 | Vazirmatn for the DSH (DeepSeek Harness) Web GUI — embeds the Persian variable font offline and retypes the whole UI. |
| 110 | [ALICExhcm/dsh-transcript-turbo](https://github.com/ALICExhcm/dsh-transcript-turbo) | 0 | 2026-11-20 | 2026-11-20 | Render acceleration for long, formula-heavy conversations in the DeepSeek Harness web UI: offscreen blocks skip style/layout/paint, idle animations stop repainting. Pure CSS, three live switches. |
| 111 | [AlienwareBoy/dsh-stage-chat](https://github.com/AlienwareBoy/dsh-stage-chat) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 阶段式对话视图。按执行过程、执行结果与待确认事项组织一轮回复，兼容 0.2.2-rc.5 及更早版本 |
| 112 | [allensrj/paper-reader-hub](https://github.com/allensrj/paper-reader-hub) | 0 | 2026-11-20 | 2026-11-20 | 论文知识库学习看板 · DeepSeek Harness 插件：论文库、多标签原版 PDF 精读（AI 翻译 / 划线 / 批注）、整篇笔记、论文库总览 |
| 113 | [Allenyou1126/dsh-mobile-notify](https://github.com/Allenyou1126/dsh-mobile-notify) | 0 | 2026-11-20 | 2026-11-20 | Web-first notifications for DeepSeek Harness approvals/questions, with Server酱³ App fallback and scopen deep links. |
| 114 | [AndreTheAccelerator/dsh-design-canvas](https://github.com/AndreTheAccelerator/dsh-design-canvas) | 0 | 2026-11-09 | 2026-11-20 | Chat-paired design canvas plugin for the DeepSeek Harness Web UI: artboard layers, CSS-like auto-layout frames, inline element comments, and agent-revisable direct manipulation. |
| 115 | [Andy-zch/dsh-next-step-suggest](https://github.com/Andy-zch/dsh-next-step-suggest) | 0 | 2026-11-11 | 2026-11-20 | Ghost-text next-message suggestion for the DeepSeek Harness composer. One suggestion, two keys: Tab accepts, Esc dismisses, nothing is ever auto-sent. |
| 116 | [anhaoXie/dsh-plugin-obsidian](https://github.com/anhaoXie/dsh-plugin-obsidian) | 0 | 2026-11-20 | 2026-11-20 | Obsidian vault integration for DeepSeek Harness: 10 agent tools + a browser panel to add and manage notes directly (zero dependencies, atomic writes, same-origin API). |
| 117 | [Anzerwhite/dsh-local-codex](https://github.com/Anzerwhite/dsh-local-codex) | 0 | 2026-11-20 | 2026-11-20 | Per-session Codex mode for DeepSeek Harness: hand one session to your local Codex CLI and see its replies, commands and file changes inline. |
| 118 | [aporb/dsh-discord](https://github.com/aporb/dsh-discord) | 0 | 2026-11-20 | 2026-11-20 | A Discord bridge for DeepSeek Harness 0.2.2 desktop: pick a conversation, follow it live in a thread. Fork of addozhang/dsh-discord. |
| 119 | [Archerkattri/dsh-qwen-websearch](https://github.com/Archerkattri/dsh-qwen-websearch) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: Qwen Token Plan native web search with Qwen3.8 Flash summaries and source citations, no DeepSeek per-search fee |
| 120 | [Archerkattri/dsh-qwen4-effort](https://github.com/Archerkattri/dsh-qwen4-effort) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: official Qwen4 reasoning effort levels (low/medium/xhigh for Preview, low/high/xhigh for Max) on your existing Qwen Token Plan routes |
| 121 | [askerrag/dsh-neural-thoughts](https://github.com/askerrag/dsh-neural-thoughts) | 0 | 2026-11-19 | 2026-11-20 | A read-only 3D neural map for DeepSeek Harness: chats and projects become a glowing brain with six lobes, live thoughts, media and text-file galleries, and replayable history. Prompts sit in the brainstem. No network, no model calls. |
| 122 | [atirutw/dsh-npm-update-notifier](https://github.com/atirutw/dsh-npm-update-notifier) | 0 | 2026-11-20 | 2026-11-20 | NPM update notifier for DeepSeek Harness |
| 123 | [ayam04/dsh-brand](https://github.com/ayam04/dsh-brand) | 0 | 2026-11-20 | 2026-11-20 | Brand settings for DeepSeek Harness: sidebar logo, wordmark, typography, spacing, title, favicon and accent colour. |
| 124 | [Beeasy-L/DSH-plugin-market](https://github.com/Beeasy-L/DSH-plugin-market) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin collection. 插件分类 + 守夜人告警。Each plugin is an independent package under plugins/. |
| 125 | [bgmmd/dsh-todo-list](https://github.com/bgmmd/dsh-todo-list) | 0 | 2026-11-20 | 2026-11-20 | A per-project todo checklist in the DeepSeek Harness right sidebar: git-tracked .todo.md, checklists, and one-click AI requirement analysis. |
| 126 | [bingo5718/dsh-token-burn](https://github.com/bingo5718/dsh-token-burn) | 0 | 2026-11-20 | 2026-11-20 | Token 消耗面板 for DeepSeek Harness：侧边栏小卡 + 按模型 token 条 + 本地 $0 / 平台 API 官方计价 |
| 127 | [BullyHigh/dsh-side-ask](https://github.com/BullyHigh/dsh-side-ask) | 0 | 2026-11-20 | 2026-11-20 | Read-only side questions in the right sidebar of DeepSeek Harness - the fork keeps the whole conversation, the main draft comes along, closing the tab archives it. DSH plugin. |
| 128 | [Caramel-Geass/dsh-conversation-branches](https://github.com/Caramel-Geass/dsh-conversation-branches) | 0 | 2026-08-19 | 2026-11-20 | DeepSeek Harness 插件：选中对话中的文字即可在右侧面板追问，不打断主对话。需要 DSH ≥ 0.2.1-rc.3。 |
| 129 | [cat-god/dsh-plugin-coyote](https://github.com/cat-god/dsh-plugin-coyote) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 插件：让你的 AI 操控 DG-LAB（郊狼 3.0）脉冲主机。走官方 SOCKET 协议，13 个工具，内置波形生成器与安全信封。 |
| 130 | [CC2027MK2/dsh-room](https://github.com/CC2027MK2/dsh-room) | 0 | 2026-11-20 | 2026-11-20 | A LAN chat room for DSH agents: hub + MCP client + wake-up bridge |
| 131 | [ccr-wer/dsh-flowkiln](https://github.com/ccr-wer/dsh-flowkiln) | 0 | 2026-11-20 | 2026-11-20 | Mine repeated DeepSeek Harness prompts into reviewable SKILL.md drafts - deterministic TF-IDF clustering, zero-token mining, never promoted without human approval. |
| 132 | [ceasarXuu/dsh-super-ui](https://github.com/ceasarXuu/dsh-super-ui) | 0 | 2026-11-20 | 2026-11-20 | Super UI plugin for DeepSeek Harness: the shipped font-size row merged into Chat font size and Interface font size, so sidebars, settings, menus and dialogs scale independently of the conversation. |
| 133 | [Charliewhale/bridge](https://github.com/Charliewhale/bridge) | 0 | 2026-11-02 | 2026-11-20 | Bridge: one plugin with two halves — an Obsidian plugin that exposes Obsidian capabilities over loopback HTTP, and a DSH plugin that drives sessions and injects vault notes into the system prompt. |
| 134 | [CHSCN123/dsh-knowledge-base](https://github.com/CHSCN123/dsh-knowledge-base) | 0 | 2026-11-20 | 2026-11-20 | DSH (DeepSeek Harness) desktop plugin - a local Markdown knowledge base: drop files to auto-convert, preview, delete and auto-rebuild the index, all on your own disk. |
| 135 | [ciskonc/dsh-scp-ops](https://github.com/ciskonc/dsh-scp-ops) | 0 | 2026-11-11 | 2026-11-20 | SCP upload/download tools for DeepSeek Harness — legacy SCP wire protocol over ssh2, works without a remote SFTP subsystem |
| 136 | [ciskonc/dsh-skillmcp-gate](https://github.com/ciskonc/dsh-skillmcp-gate) | 0 | 2026-11-16 | 2026-11-20 | DSH plugin: per-session/global skill &amp; MCP tool exposure gate |
| 137 | [cococo1ng/dsh-sorceress-widget](https://github.com/cococo1ng/dsh-sorceress-widget) | 0 | 2026-11-19 | 2026-11-20 | Sorceress · 塔罗挂件 for DeepSeek Harness — 抽牌、星座、情绪、计费；全本地运行，素材内联。/ Tarot-reading witch companion. |
| 138 | [CoolrfulDARkness/dsh-handover-protocol](https://github.com/CoolrfulDARkness/dsh-handover-protocol) | 0 | 2026-11-20 | 2026-11-20 | Per-session handover-protocol toggle button for the DeepSeek Harness session header / DSH ????????????? |
| 139 | [cxydaizihao520/dsh-session-coordinator](https://github.com/cxydaizihao520/dsh-session-coordinator) | 0 | 2026-10-24 | 2026-11-20 | 在 DeepSeek Harness 中，让各自保留历史的独立会话分工、交叉复核，并在批准的范围内共享上下文。 |
| 140 | [DASHAN-0079/dsh-evidence-pages](https://github.com/DASHAN-0079/dsh-evidence-pages) | 0 | 2026-11-20 | 2026-11-20 | Source-linked tool output for DeepSeek Harness. Local rule-based compaction with optional Jevos page selection. |
| 141 | [deek-234/dsh-ellen-voice](https://github.com/deek-234/dsh-ellen-voice) | 0 | 2026-10-29 | 2026-11-20 | A DeepSeek Harness plugin that speaks short text through a local GPT-SoVITS TTS endpoint and plays it on this machine. |
| 142 | [dhr2333/dsh-ledger](https://github.com/dhr2333/dsh-ledger) | 0 | 2026-11-17 | 2026-11-20 | Local-first Beancount ledger panel for DSH: agents propose, you approve and reconcile. Ships a managed Python engine and ledger template. |
| 143 | [DiegoShan/user-request-guard](https://github.com/DiegoShan/user-request-guard) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness Plugin: Mitigating Hallucinations in Multi-Turn Interactions 轮次多时，执行前通过核对用户消息，避免出现幻觉 |
| 144 | [dingmac/dsh-terminal-mac](https://github.com/dingmac/dsh-terminal-mac) | 0 | 2026-11-20 | 2026-11-20 | 一台隔离的虚拟 Mac 全套能力：客户机内的截图/点击/输入、虚拟机启停，以及教会 Agent 何时自己用、何时自动关机的 skill。 |
| 145 | [DogEgg-alR/dsh-scan-to-pdf](https://github.com/DogEgg-alR/dsh-scan-to-pdf) | 0 | 2026-11-20 | 2026-11-20 | ??? / ????????????? PDF -- DSH ??,????????,?????????????? (Transcribe scanned pages into a typeset PDF inside the Harness UI) |
| 146 | [Dongze502/preflight-eta-chime](https://github.com/Dongze502/preflight-eta-chime) | 0 | 2026-11-20 | 2026-11-20 | Pre-send estimate, live ETA and a completion chime for DeepSeek Harness |
| 147 | [doushabao2026/dsh-opencode-routing](https://github.com/doushabao2026/dsh-opencode-routing) | 0 | 2026-11-03 | 2026-11-20 | dsh plugin: OpenCode Go control panel - account pool with automatic failover, quota routing that falls back to a DeepSeek official subscription on upstream limits and returns after 10 stable minutes, a current-route banner, upstream status with error codes, and a per-model usage dashboard (10 languages) |
| 148 | [doushabao2026/dsh-skill-market](https://github.com/doushabao2026/dsh-skill-market) | 0 | 2026-11-06 | 2026-11-20 | dsh plugin: browse, search and install SkillHub skills inside DeepSeek Harness (local build of montersy123/dsh-skill-market) |
| 149 | [dsh-plugin-collection/dsh-wakatime](https://github.com/dsh-plugin-collection/dsh-wakatime) | 0 | 2026-11-16 | 2026-11-20 | 给 DSH 加上 WakaTime 心跳上报：统计你在编辑器、终端与 AI 对话里花的时间，按项目 / 语言 / 类别归集，AI token 用量单独上报。｜ WakaTime heartbeat reporting for DSH: time across editors, terminals and AI sessions, split by project / language / category, with separate GenAI token reporting. |
| 150 | [DuncanLii/dsh-context-kernel](https://github.com/DuncanLii/dsh-context-kernel) | 0 | 2026-11-20 | 2026-11-20 | Four-layer context management for DeepSeek Harness: read-only canonical log, deterministic execution evidence, sourced working state, and a projection that is only a send copy. Ships a 12-step completion gate. |
| 151 | [DynasturnStudio/dsh-date-model](https://github.com/DynasturnStudio/dsh-date-model) | 0 | 2026-11-20 | 2026-11-20 | lol |
| 152 | [Eddielllllllllllll/dsh-fiction-voices](https://github.com/Eddielllllllllllll/dsh-fiction-voices) | 0 | 2026-11-20 | 2026-11-20 | Five Chinese prose-voice skills for fiction: jiangnan, fanhua, kuangbiao, tangxi, jinhua. |
| 153 | [elegant01/dsh-wb-desk](https://github.com/elegant01/dsh-wb-desk) | 0 | 2026-11-19 | 2026-11-20 | Agent 原生产物空间：分级写入（新建自动归位 / 修改待确认）+ 固定修订引用。对标 WorkBuddy 资料库的 DSH 插件。 |
| 154 | [EnderXiao/dsh-express-cards](https://github.com/EnderXiao/dsh-express-cards) | 0 | 2026-11-20 | 2026-11-20 | Structured reply formatting for DeepSeek Harness: prompt discipline plus expresscard fences rendered as styled cards. |
| 155 | [esyion/dsh-plugin-react](https://github.com/esyion/dsh-plugin-react) | 0 | 2026-11-20 | 2026-11-20 | Scaffold DeepSeek Harness (DSH) web plugins with Vite + React/TSX - emits the DSH ModuleLoader client bundle format |
| 156 | [fairyqinglan/dsh-usage-dashboard](https://github.com/fairyqinglan/dsh-usage-dashboard) | 0 | 2026-11-20 | 2026-11-20 | Daily token usage with a per-model breakdown for the DeepSeek Harness — zero deps, local-only, GitHub-style heatmap and multi-hue trend charts |
| 157 | [fakeNihilist/dsh-router-agent](https://github.com/fakeNihilist/dsh-router-agent) | 0 | 2026-11-20 | 2026-11-20 | Project-level Router Agent for DeepSeek Harness (DSH): route a task to an existing session, fork at a turn boundary, or start a clean session. |
| 158 | [FanetheDivine/dsh-plugin-skill-folder](https://github.com/FanetheDivine/dsh-plugin-skill-folder) | 0 | 2026-11-20 | 2026-11-20 | 可视化地折叠全局 skill |
| 159 | [fangqiuci/feiyu-brain](https://github.com/fangqiuci/feiyu-brain) | 0 | 2026-11-20 | 2026-11-20 | 大肥鱼的大脑内核：人设是根，情绪/记忆/意识流/归因都从人设长出来。平台无关，手机/平板/电脑三具身体。 |
| 160 | [farfoodyou/dsh-auth-ldap](https://github.com/farfoodyou/dsh-auth-ldap) | 0 | 2026-11-20 | 2026-11-20 | Authentication gate for DeepSeek Harness web profiles: local accounts and LDAP/Active Directory bind behind one login page. |
| 161 | [Fireqtian/dsh-official-file-parse](https://github.com/Fireqtian/dsh-official-file-parse) | 0 | 2026-11-20 | 2026-11-20 | Official DeepSeek document parsing (Files API) for DeepSeek Harness: parse PDF/Word/PowerPoint with figures and layout kept, then answer questions about them. |
| 162 | [firnspiegel/dsh-upload-origin](https://github.com/firnspiegel/dsh-upload-origin) | 0 | 2026-09-18 | 2026-11-20 | DSH host plugin that resolves the original local path of files uploaded to .dsh-uploads by matching name, size, and sha256. |
| 163 | [frederickimanuels/dsh-skill-forge](https://github.com/frederickimanuels/dsh-skill-forge) | 0 | 2026-11-20 | 2026-11-20 | Import AI skills written for other agents (Claude Code, Cursor, Codex, plain Markdown) into DeepSeek Harness, and publish them as native DSH skills. |
| 164 | [fubenhao/dsh-office-magic-box](https://github.com/fubenhao/dsh-office-magic-box) | 0 | 2026-11-20 | 2026-11-20 | dsh-office-magic-box |
| 165 | [fxm124578/dsh-auto-send](https://github.com/fxm124578/dsh-auto-send) | 0 | 2026-11-18 | 2026-11-20 | 错峰定时发送 for DeepSeek Harness: queue the composer draft for cheap hours (12:00 / 18:00) or any later time. |
| 166 | [geniuspath/apipod-dsh-plugin](https://github.com/geniuspath/apipod-dsh-plugin) | 0 | 2026-11-19 | 2026-11-20 | APIPod image and video generation tools for DeepSeek Harness (dsh) |
| 167 | [GentleBoyYC/dsh-gemini-image](https://github.com/GentleBoyYC/dsh-gemini-image) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: generate images with Gemini and save them locally (browser-extension bridge; no API key needed) |
| 168 | [GxyFly/dsh-session-delete-menu](https://github.com/GxyFly/dsh-session-delete-menu) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 删除对话：右键确认后从侧栏移除会话，记录保留在本地备份。 |
| 169 | [GxyFly/dsh-subagent-preview](https://github.com/GxyFly/dsh-subagent-preview) | 0 | 2026-11-18 | 2026-11-20 | DeepSeek Harness 子智能体预览：在原生侧栏查看运行状态、实时输出和历史结果。 |
| 170 | [HanQing404/dsh-jiemeng](https://github.com/HanQing404/dsh-jiemeng) | 0 | 2026-11-20 | 2026-11-20 | 解梦 for DeepSeek Harness — dream journal panel + six-line hexagram aid |
| 171 | [HanYu-me/dsh-sider-task-reviewer](https://github.com/HanYu-me/dsh-sider-task-reviewer) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: another model reviews the task the current conversation is doing or has done — right-sidebar tab, shield button, quick/deep review, continuous review, editable prompts. |
| 172 | [HArry2006-1/dsh-interview-dojo](https://github.com/HArry2006-1/dsh-interview-dojo) | 0 | 2026-11-20 | 2026-11-20 | 日本留学面试模拟道场：调研目标大学官网、结合入学理由书生成问题，并进行带中日对照、词汇语法解析、逐题反馈和实时/本机语音对话的练习。 |
| 173 | [HauWong/dsh-utodo](https://github.com/HauWong/dsh-utodo) | 0 | 2026-11-20 | 2026-11-20 | Todo lists and an idea notebook in the DeepSeek Harness sidebar — flexible dates, important/soon views, tag colours, local-only storage. |
| 174 | [hawkqiang/dsh-tool-slice](https://github.com/hawkqiang/dsh-tool-slice) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: per-conversation tool switches, named scenarios, and a slice workflow that runs one plan step per fresh subagent to keep local small models focused. |
| 175 | [hds1989824/dsh-agent-usage](https://github.com/hds1989824/dsh-agent-usage) | 0 | 2026-11-20 | 2026-11-20 | DSH 插件：左侧栏 Agent 用量面板（本地多客户端会话数与 token 统计） |
| 176 | [HiBer2007/dsh-exec-privilege](https://github.com/HiBer2007/dsh-exec-privilege) | 0 | 2026-11-20 | 2026-11-20 | DSH Desktop 执行权限选择器：普通用户、管理员、SYSTEM 与 TrustedInstaller；模型只能发起请求，用户在专用确认框批准后才提权 |
| 177 | [hiyced/dsh-quote-reply](https://github.com/hiyced/dsh-quote-reply) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 的引用气泡回复插件 |
| 178 | [HNGM-HP/dsh-lan-access](https://github.com/HNGM-HP/dsh-lan-access) | 0 | 2026-11-20 | 2026-11-20 | Device-approved LAN access for the native DeepSeek Harness Web UI. |
| 179 | [hseons/dsh-usage-peak](https://github.com/hseons/dsh-usage-peak) | 0 | 2026-11-18 | 2026-11-20 | DeepSeek Harness sidebar widget: peak/valley pricing, usage, budget and balance |
| 180 | [iamjager416/dsh-daily-checkin](https://github.com/iamjager416/dsh-daily-checkin) | 0 | 2026-11-19 | 2026-11-20 | 每天自动签到：库街区（鸣潮/战双）、森空岛（明日方舟/终末地）、塔吉多（异环）。DSH 插件，设置里用手机号验证码绑定，签完可推送到 QQ。 |
| 181 | [id7869/dsh-redblue](https://github.com/id7869/dsh-redblue) | 0 | 2026-11-20 | 2026-11-20 | DSH 红蓝安全测试插件 v0.2.0：16 技能 / 10 授权门禁工作流（assess/recon/exploit/post/hunt/ir/purple/triage/harden/reverse）；默认 report-only + 书面授权 scope 门禁；可选 REA 逆向 lane（不打包、缺失即降级）；净化后方法论 + 零依赖工具运行时。Gated &amp; sanitized red/blue/purple security testing for DSH, optional REA reverse-engineering. |
| 182 | [ILVACM/DSH-HUAWEI-CodeArt2API](https://github.com/ILVACM/DSH-HUAWEI-CodeArt2API) | 0 | 2026-11-20 | 2026-11-20 | 将华为云码道（CodeArt）接入DSH使用（注意自备账号） |
| 183 | [ILVACM/DSH-SetModel-for-ContextCompression](https://github.com/ILVACM/DSH-SetModel-for-ContextCompression) | 0 | 2026-11-20 | 2026-11-20 | 专门给DSH用于可视化设置上下文压缩专用模型。保证使用特殊渠道模型服务时，不容易出现异常崩溃。 |
| 184 | [inaflash123/dsh-auto-group](https://github.com/inaflash123/dsh-auto-group) | 0 | 2026-11-20 | 2026-11-20 | Auto-file newly installed DSH plugins into dshmarket groups by capability |
| 185 | [ink1219/dsh-continue-on-failure](https://github.com/ink1219/dsh-continue-on-failure) | 0 | 2026-11-20 | 2026-11-20 | Shows a Continue button above the DSH composer after a failed model request; one click resumes the turn without retyping. |
| 186 | [innocces/dsh-mac-intel](https://github.com/innocces/dsh-mac-intel) | 0 | 2026-11-19 | 2026-11-20 | DSH Intel 是非官方兼容发行项目，与 DeepSeek AI、Ebony-Vinyl 无隶属或背书关系。它解决的是官方 DeepSeek Harness 桌面发行物未覆盖 macOS Intel 的问题；DeepSeek Harness 本体仍由上游项目维护。 |
| 187 | [Iophinie/dsh-workspace-mover](https://github.com/Iophinie/dsh-workspace-mover) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: move a chat between workspaces from the sidebar (/move-workspace command, move_chat tool). |
| 188 | [ITxuezhe/dsh-agent-floor](https://github.com/ITxuezhe/dsh-agent-floor) | 0 | 2026-11-19 | 2026-11-20 | Always-on agent status chip for DeepSeek Harness: who is running, which step, tokens, changed files — docked in the sidebar foot |
| 189 | [IvesCheung/dsh-search-everything](https://github.com/IvesCheung/dsh-search-everything) | 0 | 2026-11-20 | 2026-11-20 | Everything-style global search for DSH: Ctrl+K across every session message of every workspace, jump straight to the hit. |
| 190 | [IvesCheung/dsh-sidebar-shrink](https://github.com/IvesCheung/dsh-sidebar-shrink) | 0 | 2026-11-20 | 2026-11-20 | Shrink the DSH sidebar: move rarely used panels into More, remember the choice, add a panel manager and a fold-all control for workspace groups. |
| 191 | [JamisBian/dsh-jingfang](https://github.com/JamisBian/dsh-jingfang) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 插件（dsh-plugin）：中医经方问诊。228 首伤寒/金匮方，方证辨证 + 条文与 PubMed 核查，无文献支撑不开方。中医 经方 健康 失眠 疲劳 TCM classical formula consultation plugin for DSH. |
| 192 | [jhckevin/dsh-composer-prediction](https://github.com/jhckevin/dsh-composer-prediction) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 下一条消息预测插件。Cache-aware composer predictions for DSH: Tab completion, provider profiles and cost accounting. |
| 193 | [jiaowoCheung/dsh-quick-run](https://github.com/jiaowoCheung/dsh-quick-run) | 0 | 2026-11-20 | 2026-11-20 | Run configurations in the DSH conversation header: one click to launch the scripts already in your project, with live output. |
| 194 | [jidekaixin2dian/dsh-run-receipt](https://github.com/jidekaixin2dian/dsh-run-receipt) | 0 | 2026-11-20 | 2026-11-20 | Review delivery, execution, and report evidence for native DeepSeek Harness schedules. |
| 195 | [jklin6632-dot/dsh-approval-enter](https://github.com/jklin6632-dot/dsh-approval-enter) | 0 | 2026-11-20 | 2026-11-20 | DSH client plugin: press Enter to approve a pending approval request without touching the mouse (typing still sends). |
| 196 | [jklin6632-dot/dsh-notify](https://github.com/jklin6632-dot/dsh-notify) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: a persistent Windows corner card that tells you when a turn finishes or a tool needs approval - click it to jump back to DSH. |
| 197 | [JMINN0/dsh-go-second-screen](https://github.com/JMINN0/dsh-go-second-screen) | 0 | 2026-11-05 | 2026-11-20 | 安卓「后台屏」：用虚拟屏让 AI 在后台操作手机，完全不抢用户主屏和键盘。无 root，scrcpy + app_process，含悬浮窗实时预览。让 AI 操控手机时你可以继续刷手机。 |
| 198 | [JqandCl/dsh-memory-huixiang](https://github.com/JqandCl/dsh-memory-huixiang) | 0 | 2026-11-20 | 2026-11-20 | 你的 AI 是不是每次开新对话就忘了你是谁？回响给它一块记得住你的记忆——存在你自己电脑里，不经过任何云端。 |
| 199 | [jsnancy/dsh-impeccable](https://github.com/jsnancy/dsh-impeccable) | 0 | 2026-11-20 | 2026-11-20 | Impeccable review desk for DeepSeek Harness: 24 design commands, 62 deterministic detectors, and a one-click scan of the interface in front of you. |
| 200 | [juezhong/dsh-adhd-mode](https://github.com/juezhong/dsh-adhd-mode) | 0 | 2026-11-20 | 2026-11-20 | Inject i-have-adhd output-style rules into every new DSH session once; re-enter them after each billion-context fold. |
| 201 | [juki001/wqr-dsh](https://github.com/juki001/wqr-dsh) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: digest conversations into reusable Markdown context notes |
| 202 | [junliu3/dsh-video](https://github.com/junliu3/dsh-video) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: video link to Whisper transcript and structured document. Douyin plus any yt-dlp supported site. |
| 203 | [JV-1054/wardbyte-dsh](https://github.com/JV-1054/wardbyte-dsh) | 0 | 2026-11-20 | 2026-11-20 | Native DeepSeek Harness (DSH) plugin: the Wardbyte binary-analysis toolkit as 26 first-class model tools. No MCP bridge, no wire protocol, zero runtime dependencies. |
| 204 | [jwitmann/operator-memory](https://github.com/jwitmann/operator-memory) | 0 | 2026-11-20 | 2026-11-20 | Durable context for agent-driven development — project memory, harness adapters, deterministic context management. |
| 205 | [jyz48prsbr-netizen/dsh-prompt-enhancer](https://github.com/jyz48prsbr-netizen/dsh-prompt-enhancer) | 0 | 2026-11-20 | 2026-11-20 | Enhance-prompt button with WorkBuddy-verbatim prompts |
| 206 | [jyz48prsbr-netizen/dsh-sidebar-refresh](https://github.com/jyz48prsbr-netizen/dsh-sidebar-refresh) | 0 | 2026-11-20 | 2026-11-20 | Refresh button beside the DSH sidebar brand |
| 207 | [KakuKevin28/dsh-question-pin](https://github.com/KakuKevin28/dsh-question-pin) | 0 | 2026-11-20 | 2026-11-20 | 读长回答时，你问过的那个问题会一直悬浮在答案旁边：完整原文、跟随滚动、可跳回可复制。DSH 客户端插件。 |
| 208 | [kalkmilchkatze/dsh-cpp-demo](https://github.com/kalkmilchkatze/dsh-cpp-demo) | 0 | 2026-11-20 | 2026-11-20 | C++ step-through visualizer for DeepSeek Harness: source highlighting, variables, data structures, call stack and timeline. |
| 209 | [kasshuang/dsh-plugin-profile-sync](https://github.com/kasshuang/dsh-plugin-profile-sync) | 0 | 2026-11-20 | 2026-11-20 | Sync installed DSH plugins and whitelisted plugin settings through a private repository or a synced folder. |
| 210 | [Kdnoesr/maid-companions](https://github.com/Kdnoesr/maid-companions) | 0 | 2026-11-20 | 2026-11-20 | DSH Web 插件：左右鲸鱼娘女仆立绘 + 液态玻璃材质（Liquid Glass） |
| 211 | [Kiki-trouvaille/dsh-fresh-green-skin](https://github.com/Kiki-trouvaille/dsh-fresh-green-skin) | 0 | 2026-11-19 | 2026-11-20 | A fresh white-green theme studio for DeepSeek Harness: 4K photo or video wallpaper, paper-anchored palettes, translucent reply bubbles, brand tinting, named themes with import/export. |
| 212 | [KINGs74/dsh-pwbrowser-browsers](https://github.com/KINGs74/dsh-pwbrowser-browsers) | 0 | 2026-11-20 | 2026-11-20 | DSH 插件：把 Chrome / Edge / Brave 作为独立的 Playwright MCP 服务接进来（输入框「浏览器」开关 + 插件页 token 设置）。一个插件一个仓库。 |
| 213 | [KINGs74/dsh-vendor](https://github.com/KINGs74/dsh-vendor) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 插件离线包公开镜像：14 个市场插件 tarball + node_modules 快照（最新 2026-11-21 版），任何机器免登录下载；不含配置与密钥。 |
| 214 | [kino516/dsh-cot-preview-zh](https://github.com/kino516/dsh-cot-preview-zh) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness (DSH) 插件：翻译折叠状态下的思考预览行 / Translate the collapsed reasoning preview line |
| 215 | [KNtnx/dsh-bailian-quota](https://github.com/KNtnx/dsh-bailian-quota) | 0 | 2026-11-20 | 2026-11-20 | Aliyun Bailian Token Plan quota and token usage plugin for DeepSeek Harness (quota via official bl CLI, tokens counted locally) |
| 216 | [Kostyastudy/dsh-matu-tutor](https://github.com/Kostyastudy/dsh-matu-tutor) | 0 | 2026-11-20 | 2026-11-20 | UESTC APTAT (码图) C-language workbench for DeepSeek Harness: sync homework, compile and run locally, submit for a real score, and learn with an AI tutor. |
| 217 | [kota-rina3/plugin-export](https://github.com/kota-rina3/plugin-export) | 0 | 2026-11-20 | 2026-11-20 | Export dsh-plugins. 导出你的dsh插件。 |
| 218 | [kxx-python/dsh-chat-migrate](https://github.com/kxx-python/dsh-chat-migrate) | 0 | 2026-11-20 | 2026-11-20 | Import chat.deepseek.com history into DSH as real sessions, or export it as Markdown and JSON. |
| 219 | [lbg2002/dsh-glaze-theme](https://github.com/lbg2002/dsh-glaze-theme) | 0 | 2026-11-20 | 2026-11-20 | Chinese porcelain &amp; Morandi theme for DeepSeek Harness (dsh) with 16 OKLCH palettes, 6 presets, deep UI styles, artistic fonts, brand customization, and 0% idle GPU/CPU overhead. |
| 220 | [leoncolond/dsh-localllmtranslate](https://github.com/leoncolond/dsh-localllmtranslate) | 0 | 2026-11-20 | 2026-11-20 | Local Hy-MT2 translation workspace for DeepSeek Harness (DSH) · 本地实时翻译：左右/上下双栏、段落对照、术语本、历史、自动下载模型。 |
| 221 | [liangdabiao/dsh-course-studio](https://github.com/liangdabiao/dsh-course-studio) | 0 | 2026-11-18 | 2026-11-20 | dsh-course-studio · 课程工坊  基于 \[Mathigon\]交互教科书方法论的 dsh 插件：**用户提课程需求.dsh plugin: author Mathigon-style interactive STEM courseware with agent + archive panel + live preview |
| 222 | [liangdabiao/dsh-edulab](https://github.com/liangdabiao/dsh-edulab) | 0 | 2026-11-18 | 2026-11-20 | 课件实验室：把学科题目/知识点生成为单文件交互课件 HTML（8 个学科技能，Three.js/KaTeX/sympy 内核），dsh 全形态插件.. |
| 223 | [liangdabiao/dsh-liang-publish](https://github.com/liangdabiao/dsh-liang-publish) | 0 | 2026-11-19 | 2026-11-20 | 梁工发布中控：视频发四平台（B站/小红书/抖音/视频号），bsk 驱动本机 Chrome，只填写不发布，采数据出复盘。dsh 插件。自媒体自动化神器：梁工发布中控（dsh-liang-publish） |
| 224 | [LiangshouX/dsh-realtime-interview](https://github.com/LiangshouX/dsh-realtime-interview) | 0 | 2026-11-15 | 2026-11-20 | DSH里的模拟面试间，把一份简历和一份岗位 JD，变成一场有准备的模拟面试。 |
| 225 | [LINYT1416/dsh-memory-persona-affect](https://github.com/LINYT1416/dsh-memory-persona-affect) | 0 | 2026-11-20 | 2026-11-20 | 给 DeepSeek Harness 装上记忆、人格与心情：海马体-皮层-前额叶-杏仁核的记忆系统，六器官耦合的心情曲线，五十余机制的人格。不是提示词，是跑在同一个时钟上的器官。Memory · Persona · Affect for AI agents. |
| 226 | [LiueCreater/dsh-lifiwallpaper](https://github.com/LiueCreater/dsh-lifiwallpaper) | 0 | 2026-11-14 | 2026-11-20 | 自定义图片/视频背景与裁切、壁纸模糊、卡片式半透明/磨砂/液态玻璃、图片取色主题，以及侧栏余额与今日 token 小组件。 |
| 227 | [LiuHongXuMaritime/dsh-github-mcp](https://github.com/LiuHongXuMaritime/dsh-github-mcp) | 0 | 2026-11-20 | 2026-11-20 | 非官方（unofficial）DSH 插件：把官方 GitHub MCP 服务器接进 DeepSeek Harness，令牌在设置页填写；代码由 AI 辅助生成。Not affiliated with GitHub, Inc. |
| 228 | [LiuHongXuMaritime/dsh-nebula-spectrum](https://github.com/LiuHongXuMaritime/dsh-nebula-spectrum) | 0 | 2026-11-20 | 2026-11-20 | Nebula Spectrum — an aurora-canvas theme for the DeepSeek Harness Web UI: deep-ocean, onyx and light editions, glass sidebar, spectrum-rimmed composer. |
| 229 | [Lllwh-00FFFF/dsh-quiet-windows](https://github.com/Lllwh-00FFFF/dsh-quiet-windows) | 0 | 2026-11-20 | 2026-11-20 | Drive Windows GUI apps entirely off-screen: launch outside every monitor, read and click through UI Automation, capture with PrintWind |
| 230 | [luciomerlo/dsh-deepaicode-auto](https://github.com/luciomerlo/dsh-deepaicode-auto) | 0 | 2026-11-19 | 2026-11-20 | DeepSeek Harness bundle that registers the DeepAI Code model catalog and routes every turn across a capability-ordered Frontier-to-Unmetered model ladder with hot failover, an SSE idle watchdog and live catalog sync. |
| 231 | [LUgABeEEE/dsh-desktop-shell](https://github.com/LUgABeEEE/dsh-desktop-shell) | 0 | 2026-10-04 | 2026-11-20 | DeepSeek Harness desktop OS integration plugin: native notifications, screenshot to session, clipboard watch, global hotkey. MIT. |
| 232 | [LUgABeEEE/dsh-theme-elysia](https://github.com/LUgABeEEE/dsh-theme-elysia) | 0 | 2026-10-26 | 2026-11-20 | 乐土礼堂 · 白昼与夜樱 —— 给 DeepSeek Harness 的一身樱粉配色（web profile 适配版）：乐土大厅实景打底、重绑 --dsw-* 底层色阶，设置里可换底图/透明度/放大/晃动 |
| 233 | [lujyang007/dsh-bili-sessions](https://github.com/lujyang007/dsh-bili-sessions) | 0 | 2026-11-20 | 2026-11-20 | List, delete and purge billion-context session records from inside DSH. 在 DSH 内列出、删除与清空 billion-context 会话记录。 |
| 234 | [luokexiaoguo/dsh-team-mode](https://github.com/luokexiaoguo/dsh-team-mode) | 0 | 2026-11-20 | 2026-11-20 | Team Mode / 团队模式 for DSH: turn a goal into a roster of roles, staff each role as a subagent with its own session and write scope, collect structured reports, and watch the team in a session panel (list + organisation graph). |
| 235 | [Lynn-Sunset/dsh-naiwa-ism](https://github.com/Lynn-Sunset/dsh-naiwa-ism) | 0 | 2026-11-20 | 2026-11-20 | Naiwa persona, art direction and Web GUI controls for DeepSeek Harness |
| 236 | [MailComet/dsh-use-firefox](https://github.com/MailComet/dsh-use-firefox) | 0 | 2026-11-20 | 2026-11-20 | 用 Firefox MV3 扩展和本地 token 桥让 DeepSeek Harness Desktop 直接操作你正在使用的 Firefox：原生 DSH 分组、页面操作、Qoder 式注释与输入框 chip。 |
| 237 | [MerlinSassoon/dsh-archmap-explorer](https://github.com/MerlinSassoon/dsh-archmap-explorer) | 0 | 2026-11-18 | 2026-11-20 | DSH plugin + CLI: static Python architecture maps — drill down project → flow → module → method, offline single-file HTML, no code execution, no tokens. |
| 238 | [mikel38487/cvc-catalog-sync-plugin](https://github.com/mikel38487/cvc-catalog-sync-plugin) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: keeps the CheapVibeCode model catalog in the profile patch in sync with /v1/models and the official installer's reasoning levels, with a settings page |
| 239 | [MING07110524/dsh-split-chat](https://github.com/MING07110524/dsh-split-chat) | 0 | 2026-11-20 | 2026-11-20 | Split board for DeepSeek Harness: several live conversations side by side in the main area. |
| 240 | [MingoYung/dsh-building-loop](https://github.com/MingoYung/dsh-building-loop) | 0 | 2026-11-06 | 2026-11-20 | DeepSeek Harness preset for task dispatch and evidence-based verification |
| 241 | [MIOM-2025/dsh-offpeak-guard](https://github.com/MIOM-2025/dsh-offpeak-guard) | 0 | 2026-11-20 | 2026-11-20 | DSH 峰谷闸门：峰期自动停掉会话、谷期自动续跑，输入框上方带倒计时和开关 |
| 242 | [modelgo/dsh-modelgo-provider](https://github.com/modelgo/dsh-modelgo-provider) | 0 | 2026-11-20 | 2026-11-20 | ModelGo model provider for DeepSeek Harness (dsh): ModelGo models in the model picker. |
| 243 | [mowei1600/dsh-enhanced-prompt](https://github.com/mowei1600/dsh-enhanced-prompt) | 0 | 2026-11-19 | 2026-11-20 | Prompt enhancement for DeepSeek Harness: one click rewrites your composer draft into a ready-to-send prompt with the current model and this conversation's context. Composer button, /enhance command, enhance_prompt tool, in-plugin settings. |
| 244 | [MrMark019/dsh-glass-sidebar](https://github.com/MrMark019/dsh-glass-sidebar) | 0 | 2026-11-20 | 2026-11-20 | Frosted, wallpaper-backed translucent sidebar for the DeepSeek Harness Web GUI - blur and opacity in Settings &gt; General |
| 245 | [MrZMrsL/dsh-saiboroom](https://github.com/MrZMrsL/dsh-saiboroom) | 0 | 2026-11-20 | 2026-11-20 | 赛博房间 · 给 DeepSeek Harness 的侧栏人格面板：会换姿态的像素角色 + 会写进系统提示的心情引擎 + 按真实模型计价的账单 + 随录 + 每晚做梦沉淀 + 本地记忆检索 |
| 246 | [muhadif/dsh-grafana-hosts](https://github.com/muhadif/dsh-grafana-hosts) | 0 | 2026-11-20 | 2026-11-20 | Read-only multi-host Grafana for \[DSH\]: named hosts, dashboard search and panel data, PromQL/LogQL and alerts — tokens stay in the credential store. |
| 247 | [muhadif/dsh-session-todo](https://github.com/muhadif/dsh-session-todo) | 0 | 2026-11-20 | 2026-11-20 | Workspace-scoped PRD and task board for \[DSH\]: the agent writes the PRD, claims tasks, traces progress and closes them, and a strip under the composer shows the same board. |
| 248 | [muyifc/lingcao-garden](https://github.com/muyifc/lingcao-garden) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 悬浮灵草药园：token 凝结灵石，种十二种灵草、收成卖药、破境开田。 |
| 249 | [N006Unnamed/dsh-toutiao](https://github.com/N006Unnamed/dsh-toutiao) | 0 | 2026-11-18 | 2026-11-20 | deepseek harness 今日头条插件 |
| 250 | [N006Unnamed/dsh-xhs](https://github.com/N006Unnamed/dsh-xhs) | 0 | 2026-11-18 | 2026-11-20 | deepseek harness 小红书插件 |
| 251 | [nlw258000nlw/dsh-crystal](https://github.com/nlw258000nlw/dsh-crystal) | 0 | 2026-11-19 | 2026-11-20 | DSH 的大管家插件：一键体检与自动修复、能力台账、记忆体检、桌宠与提醒总线、插件按需调度、QQ 桥联动。 |
| 252 | [northsoulxiao/dsh-task-complete-notice](https://github.com/northsoulxiao/dsh-task-complete-notice) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: plays a sound and shows a Windows desktop notification when a turn finishes. |
| 253 | [northsoulxiao/dsh-workspace-grid](https://github.com/northsoulxiao/dsh-workspace-grid) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: lays the sidebar workspace list out as three columns of tiles. |
| 254 | [NULLCOLORcat/dsh-Agent-team-fix](https://github.com/NULLCOLORcat/dsh-Agent-team-fix) | 0 | 2026-11-20 | 2026-11-20 | 针对于 DSH Agent Team的模型调用扩展 |
| 255 | [nypyp/dsh-device-auth](https://github.com/nypyp/dsh-device-auth) | 0 | 2026-11-20 | 2026-11-20 | Stable, revocable per-device login tokens for the DeepSeek Harness Web UI — paired clients survive restarts instead of copying the rotating launch token. |
| 256 | [Orabla/dsh-windows-notifications](https://github.com/Orabla/dsh-windows-notifications) | 0 | 2026-11-19 | 2026-11-20 | Six native Windows notification switches for DeepSeek Harness: approvals, questions, task completion, subtasks, errors, and turn end. |
| 257 | [OrdinaryTu/dsh-sts2](https://github.com/OrdinaryTu/dsh-sts2) | 0 | 2026-11-20 | 2026-11-20 | Play Slay the Spire 2 through the STS2 AI Agent local HTTP API: state/action tools, autofight, and a persistent autoplay runner. |
| 258 | [OrdinaryTu/dsh-voice-companion](https://github.com/OrdinaryTu/dsh-voice-companion) | 0 | 2026-11-20 | 2026-11-20 | Voice input and spoken replies for the DeepSeek Harness Web GUI: local Chinese speech recognition and edge-tts playback in a companion voice. |
| 259 | [Ouyangyouzi/dsh-whale-backup](https://github.com/Ouyangyouzi/dsh-whale-backup) | 0 | 2026-11-19 | 2026-11-20 | 一键备份与恢复 DeepSeek Harness：聊天记录、插件、设置和项目文件，支持本地磁盘或 WebDAV。 |
| 260 | [PerryLink/dsh-os](https://github.com/PerryLink/dsh-os) | 0 | 2026-11-20 | 2026-11-20 | OS-level primitives for DeepSeek Harness: actions, grants, clipboard, workspace, environment, canary, triggers, evidence, memory, windows, approvals. |
| 261 | [PM-Shawn/dsh-plugin-bi-market](https://github.com/PM-Shawn/dsh-plugin-bi-market) | 0 | 2026-11-20 | 2026-11-20 | BI dashboard &amp; report template market for DSH. |
| 262 | [pordlm/py-academic-fig-skill](https://github.com/pordlm/py-academic-fig-skill) | 0 | 2026-11-20 | 2026-11-20 | A Python-based skill for creating publication-ready academic figures from data and research questions. |
| 263 | [qianchuan-ai/channels-download](https://github.com/qianchuan-ai/channels-download) | 0 | 2026-11-20 | 2026-11-20 | WeChat Channels video downloader - local parsing, no external API |
| 264 | [qwunros/dsh-celebrate](https://github.com/qwunros/dsh-celebrate) | 0 | 2026-11-13 | 2026-11-20 | DSH也要自己的彩纸礼炮！ |
| 265 | [qwunros/dsh-insider-browser-use](https://github.com/qwunros/dsh-insider-browser-use) | 0 | 2026-11-13 | 2026-11-20 | 让dsh（以及你）使用浏览器 |
| 266 | [qwunros/dsh-search-mgr](https://github.com/qwunros/dsh-search-mgr) | 0 | 2026-11-13 | 2026-11-20 | 配置dsh的搜索提供商。目前已支持Exa、DeepSeek（其他供应商后续更新） |
| 267 | [rabbit-flash/dsh-prompt-optimizer](https://github.com/rabbit-flash/dsh-prompt-optimizer) | 0 | 2026-11-20 | 2026-11-20 | Prompt Optimization Plugin: Trigger method = button next to the input box, click to rewrite the draft; Optimization engine = call the large model of the current session; Optimization goals = structured output, roles and constraints, adding context, streamlining redundancy, specifying output format, adding examples; Install directly on local machine |
| 268 | [RDYRD/dsh-imagegen](https://github.com/RDYRD/dsh-imagegen) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Seedream image generation with in-composer toggle, settings page and usage dashboard |
| 269 | [RealWof/dsh-agent-team-viewer](https://github.com/RealWof/dsh-agent-team-viewer) | 0 | 2026-11-20 | 2026-11-20 | Read-only Agent Team board for DeepSeek Harness: kanban columns, subagent metrics and background processes. |
| 270 | [RJ2045-PRC/ManuScript](https://github.com/RJ2045-PRC/ManuScript) | 0 | 2026-11-20 | 2026-11-20 | A local research-writing workspace for DSH and Codex. Organize a manuscript, check citations against source PDFs, and trace Word review comments across drafts. |
| 271 | [Ruiliover/dsh-important-sessions](https://github.com/Ruiliover/dsh-important-sessions) | 0 | 2026-11-19 | 2026-11-20 | Categorized Important sessions favorites in the DSH sidebar, with a star on every session. |
| 272 | [RyanZhangK/dsh-writing](https://github.com/RyanZhangK/dsh-writing) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 长文写作插件：确定性小说工具链（novel_status / novel_check / novel_export + sf-writing 技能捆绑） |
| 273 | [ryanzly/dsh-mimo](https://github.com/ryanzly/dsh-mimo) | 0 | 2026-11-20 | 2026-11-20 | Xiaomi MiMo Coding Plan / Token Plan provider for DeepSeek Harness: OAuth sign-in, live model discovery, adaptive reasoning levels, plan-quota pill, MiMo ASR voice input and MiMo TTS voice output. |
| 274 | [says693/dsh-artplayer](https://github.com/says693/dsh-artplayer) | 0 | 2026-11-02 | 2026-11-20 | Compact ArtPlayer video plugin for DSH: sidebar entry, small landscape window, double-tap expansion and hold for 3x speed. |
| 275 | [sdmu-gaoqi/dsh-terminal](https://github.com/sdmu-gaoqi/dsh-terminal) | 0 | 2026-11-20 | 2026-11-20 | dsh插件,侧边栏内置终端管理 |
| 276 | [silversystem04-coder/dsh-chat-import](https://github.com/silversystem04-coder/dsh-chat-import) | 0 | 2026-11-20 | 2026-11-20 | DSH 插件：把 chat.deepseek.com 导出的对话读进右侧栏——列表、搜索、一问一答，思考链单独可折叠。Browse your exported DeepSeek chats inside DeepSeek Harness. |
| 277 | [sizhe03/dsh-muse-media](https://github.com/sizhe03/dsh-muse-media) | 0 | 2026-11-20 | 2026-11-20 | Muse (muse.ai) image and video generation for DeepSeek Harness: drives your own Chrome over CDP, one profile per account, weekly allowance in the composer. |
| 278 | [snuffpic/agent-things](https://github.com/snuffpic/agent-things) | 0 | 2026-11-14 | 2026-11-20 | In-session tracking for ChatGPT, Claude Desktop &amp; Antigravity on macOS, with Things-style progress rings and auto-extracted, source-linked to-dos. |
| 279 | [sprw-li/dsh-cifkit](https://github.com/sprw-li/dsh-cifkit) | 0 | 2026-11-20 | 2026-11-20 | 把 cifkit 搬进 DeepSeek Harness：右侧栏「CIF 工作台」面板 + /cifkit 命令 + 只读工具 cifkit_view（零运行时依赖，浏览零写入） |
| 280 | [SRTURK/dsh-writer](https://github.com/SRTURK/dsh-writer) | 0 | 2026-11-20 | 2026-11-20 | 把 README、文档、论文、回信的正文交给更人性化的写手模型，主模型只写代码 |
| 281 | [SSHOOTING/dsh-plugin-checkpoint](https://github.com/SSHOOTING/dsh-plugin-checkpoint) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Save the session position, workspace diff and open plan so an interrupted task can resume or fork from the last safe point. |
| 282 | [SSHOOTING/dsh-plugin-compat-lab](https://github.com/SSHOOTING/dsh-plugin-compat-lab) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Verify a plugin really loads, runs three scenarios and uninstalls cleanly in an isolated profile; keep a clear version matrix. |
| 283 | [SSHOOTING/dsh-plugin-context-map](https://github.com/SSHOOTING/dsh-plugin-context-map) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: See what is in the current context: which sources were selected, roughly how much each costs, and a compaction preview — read-only. |
| 284 | [SSHOOTING/dsh-plugin-evidence-gate](https://github.com/SSHOOTING/dsh-plugin-evidence-gate) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: At task end, show requirement → evidence → verdict line by line. No test result, file diff or cited source means not done — model claims do not count. |
| 285 | [SSHOOTING/dsh-plugin-failure-lab](https://github.com/SSHOOTING/dsh-plugin-failure-lab) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Turn a failed turn into a reproducible experiment card: compare retry parameters, a different tool or a different plan, and record what actually recovered. |
| 286 | [SSHOOTING/dsh-plugin-handoff-pack](https://github.com/SSHOOTING/dsh-plugin-handoff-pack) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Carry task context — brief, artifacts, decisions, open items and a redacted trace — when switching sessions, machines or tools. |
| 287 | [SSHOOTING/dsh-plugin-memory-compiler](https://github.com/SSHOOTING/dsh-plugin-memory-compiler) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Compile a session into sourced memory entries — decisions, constraints and open questions — not a chat summary. Reviewable, editable, deletable. |
| 288 | [SSHOOTING/dsh-plugin-plan-preview](https://github.com/SSHOOTING/dsh-plugin-plan-preview) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Before execution, show the planned steps, their dependencies, likely tools, estimated cost and danger points — with a confirmation gate for risky steps. |
| 289 | [SSHOOTING/dsh-plugin-regression-suite](https://github.com/SSHOOTING/dsh-plugin-regression-suite) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Save a task input and acceptance criteria, then compare quality, cost and latency across model/plugin versions to see if changes helped. |
| 290 | [SSHOOTING/dsh-plugin-skill-distiller](https://github.com/SSHOOTING/dsh-plugin-skill-distiller) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Turn one successful task into a reusable skill draft: when it applies, the steps, counter-examples and a minimal test. |
| 291 | [SSHOOTING/dsh-plugin-subagent-board](https://github.com/SSHOOTING/dsh-plugin-subagent-board) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: See who the subagents are, what each is doing, dependencies, spend and whether results were merged — a read-only task tree. |
| 292 | [SSHOOTING/dsh-plugin-task-console](https://github.com/SSHOOTING/dsh-plugin-task-console) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: A live timeline of the current task: step, spend, tool results, anomalies and next step — pause, inject, retry or terminate from one place. |
| 293 | [SSHOOTING/dsh-plugin-task-contract](https://github.com/SSHOOTING/dsh-plugin-task-contract) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Turn one vague request into an editable 5-line contract: goal, non-goals, acceptance criteria, budget and risks — before the agent starts. |
| 294 | [SSHOOTING/dsh-plugin-tool-dryrun](https://github.com/SSHOOTING/dsh-plugin-tool-dryrun) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: Before a write happens, see what would change, what permission it needs and whether it is reversible. Reads are marked pass-through. |
| 295 | [steelunicorn/dsh-mcp-tool](https://github.com/steelunicorn/dsh-mcp-tool) | 0 | 2026-11-17 | 2026-11-20 | Per-folder MCP server governance for DeepSeek Harness: a global server registry with lazy, agent-driven activation |
| 296 | [sterraMind/dsh-session-status-marker](https://github.com/sterraMind/dsh-session-status-marker) | 0 | 2026-11-18 | 2026-11-20 | DeepSeek Harness 会话状态标记插件：8 状态语义、AI 推断、跨会话状态总览、跟随 DSH 主题的悬停卡 |
| 297 | [StillQuery/hgdb_monitor](https://github.com/StillQuery/hgdb_monitor) | 0 | 2026-11-19 | 2026-11-20 | 只读监控 HGDB / PostgreSQL 14+：实时总览、会话与阻塞链、Top SQL、复制状态，并向 Harness 提供 8 个 AI 查询工具。 |
| 298 | [summer-firefly/dsh-serial](https://github.com/summer-firefly/dsh-serial) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 串口终端插件：在 Web GUI 里像 minicom / SecureCRT 一样连接本机串口设备（USB 转串口、开发板 UART）。xterm.js 真实终端 + SSE 推流，会话驻留 Host 进程，切面板和刷新页面都不断线。 |
| 299 | [superltmajor-pixel/dsh-structured-output](https://github.com/superltmajor-pixel/dsh-structured-output) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 的自适应表达插件 |
| 300 | [susirsusir/dsh-follow-up-prompts](https://github.com/susirsusir/dsh-follow-up-prompts) | 0 | 2026-11-19 | 2026-11-20 | DeepSeek Harness plugin: suggests follow-up prompts above the composer after every completed turn. |
| 301 | [tangyixiao/dsh-sylvan-appearance](https://github.com/tangyixiao/dsh-sylvan-appearance) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 外观设置插件。切换、编辑和分享主题，内置 Sylvan · 松雨。 |
| 302 | [TheSeeker1993/dsh-chatgpt-multi-account](https://github.com/TheSeeker1993/dsh-chatgpt-multi-account) | 0 | 2026-11-19 | 2026-11-20 | Independent development copy of the ChatGPT Multi-account plugin for DeepSeek Harness (upstream: GitFlic). |
| 303 | [tianacloud/dsh-remote](https://github.com/tianacloud/dsh-remote) | 0 | 2026-11-19 | 2026-11-20 | 使用 Tiana 能力为 DeepSeek Harness 提供零公网 IP 远程访问与身份登录穿透插件。 |
| 304 | [tianbaoZeng/dsh-context-window](https://github.com/tianbaoZeng/dsh-context-window) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: context-window optimizer — token meter, auto-summarisation, file pinning, diff injection and session snapshots |
| 305 | [Tino0713/dsh-browser-mode](https://github.com/Tino0713/dsh-browser-mode) | 0 | 2026-11-20 | 2026-11-20 | A ????? (Browser mode) button for the DeepSeek Harness desktop titlebar: signs the browser in and opens the web GUI. |
| 306 | [Tippye/dsh-live-activity](https://github.com/Tippye/dsh-live-activity) | 0 | 2026-11-20 | 2026-11-20 | Agent-driven floating live activity cards for DeepSeek Harness: phase, progress and ETA that outlive the reply. |
| 307 | [Tlr18348452080-hub/soma-humanoid-walker](https://github.com/Tlr18348452080-hub/soma-humanoid-walker) | 0 | 2026-11-14 | 2026-11-20 | A humanoid body for AI that walks by itself: C++ 60 Hz bipedal walker (LIPM + capture point/ZMP), 18-node ragdoll, learned spinal matrix, async LLM brain, three.js viewer. · 给 AI 一副会走路的身体：C++ 物理身体 + 60Hz 矩阵脊髓 + 异步大模型大脑 |
| 308 | [tomcatle/dsh-stock-probability-chart](https://github.com/tomcatle/dsh-stock-probability-chart) | 0 | 2026-11-20 | 2026-11-20 | 股票概率图 — DeepSeek Harness 技能插件 |
| 309 | [tsukii12/dsh-YuRemote](https://github.com/tsukii12/dsh-YuRemote) | 0 | 2026-10-22 | 2026-11-20 | Remote access for DeepSeek Harness — over your LAN or through your own server. 为 DeepSeek Harness 提供远程能力：局域网或公网远程访问。 |
| 310 | [tubeagentkit/dsh-getyoutubetranscript](https://github.com/tubeagentkit/dsh-getyoutubetranscript) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness (dsh) plugin: mounts the hosted GetYouTubeTranscript MCP server. YouTube transcripts in any caption language, search, channels and playlists. |
| 311 | [uchiha086/dshremote](https://github.com/uchiha086/dshremote) | 0 | 2026-11-20 | 2026-11-20 | 用手机（鸿蒙 NEXT / 安卓）远程指挥电脑上的 DeepSeek Harness：全屏 WebView + 回合完成通知，局域网直连或 Cloudflare 隧道。只发源码，鸿蒙包需用自己的账号签名。 |
| 312 | [vanish-2/dsh-update-all](https://github.com/vanish-2/dsh-update-all) | 0 | 2026-11-20 | 2026-11-20 | One-click updates for every npm-registry plugin in DeepSeek Harness (DSH) |
| 313 | [VladikDragon/dsh-session-agent-mode](https://github.com/VladikDragon/dsh-session-agent-mode) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: shows which agent preset (mode) each sidebar Session runs, as a compact chip next to the update time. |
| 314 | [VukanCekic/dsh-swarm](https://github.com/VukanCekic/dsh-swarm) | 0 | 2026-11-19 | 2026-11-20 | Local Swarm mode for DeepSeek Harness: a lead splits work across parallel workers in their own git worktrees, fresh verifiers check each slice, and a side pane shows the board, members and graph. |
| 315 | [wangpeng2015/dsh-unified-memory](https://github.com/wangpeng2015/dsh-unified-memory) | 0 | 2026-11-20 | 2026-11-20 | Unified long-term memory and session sync for WorkBuddy, Qoder CN and DeepSeek Harness |
| 316 | [wds-maker/dsh-plugin-labs](https://github.com/wds-maker/dsh-plugin-labs) | 0 | 2026-11-20 | 2026-11-20 | Experimental DeepSeek Harness plugins, published for community review. |
| 317 | [Weaxs/dsh-knot](https://github.com/Weaxs/dsh-knot) | 0 | 2026-11-19 | 2026-11-20 | Connect DeepSeek Harness (dsh) directly with any ACP v1 agent, Hermes, OpenClaw, and remote dsh over SSH, Tailscale, or local transports — with a built-in Web UI and read-only MCP sharing. No cloud relay. |
| 318 | [webcatevan/aiwork-editor-harness](https://github.com/webcatevan/aiwork-editor-harness) | 0 | 2026-11-20 | 2026-11-20 | AIWork 智能编辑：DeepSeek Harness 书稿与文档编辑插件 |
| 319 | [webcatevan/aiwork-editor-knowledgegraph](https://github.com/webcatevan/aiwork-editor-knowledgegraph) | 0 | 2026-11-20 | 2026-11-20 | AIWork 智能图谱：DeepSeek Harness 文章建图插件 |
| 320 | [wei200425/dsh-timeline](https://github.com/wei200425/dsh-timeline) | 0 | 2026-11-20 | 2026-11-20 | A DeepSeek Harness plugin that shows a session as a timeline: per turn, which files the conversation changed (with added/deleted lines) and which files it delivered.             DeepSeek Harness 插件：把对话显示成时间轴，按轮次列出改动的文件（含增删行数）与交付的产物。 |
| 321 | [weifengit/dsh-model-float](https://github.com/weifengit/dsh-model-float) | 0 | 2026-11-20 | 2026-11-20 | Model Float — 在 DSH 主界面挂一只可拖动的鲸鱼娘浮动面板，悬停即见白嫖模型各厂商的接入状态、剩余积分与余额 |
| 322 | [why774/dsh-context-kb](https://github.com/why774/dsh-context-kb) | 0 | 2026-11-20 | 2026-11-20 | 把对话原文、结论索引和踩坑记录存成项目里的一份可检索记忆，跨对话累积，让长对话被压缩后模型依然找得回当初的结论和代码。 |
| 323 | [williamchen520/dsh-coding-tool](https://github.com/williamchen520/dsh-coding-tool) | 0 | 2026-11-20 | 2026-11-20 | Human-in-the-loop spec drift firewall for AI coding. Deterministic PASS/FAIL before review or merge; no LLM in the gate, no auto-merge. Extracted from SciPal. |
| 324 | [windrover/dsh-casual-games](https://github.com/windrover/dsh-casual-games) | 0 | 2026-11-20 | 2026-11-20 | Seven mini-games docked in the DeepSeek Harness sidebar: 2048, Tetris, Gomoku, Klotski, Snake, Schulte table and Breakout. |
| 325 | [Winjazw/effort-slider](https://github.com/Winjazw/effort-slider) | 0 | 2026-11-20 | 2026-11-20 | A draggable reasoning-effort slider for the DeepSeek Harness composer. Top tier turns the track into a cosmic particle field · 可拖拽的推理强度滑块，拉到最高档，整条轨道变成宇宙粒子场 |
| 326 | [wljgp/dsh-find-job](https://github.com/wljgp/dsh-find-job) | 0 | 2026-11-20 | 2026-11-20 | 求职助手（dsh-find-job）：剖析能力、批量分析职位、一键生成打招呼语、调整简历。  帮正在找工作的你：批量识别值得投递的职位，匹配理由、打招呼语、简历改写一次到位。 帮在职观望的你：批量看清与意向职位的差距，缺什么一目了然。  全程本地运行、本地存储。 |
| 327 | [WOchovy233/dsh-cyber-egg](https://github.com/WOchovy233/dsh-cyber-egg) | 0 | 2026-11-20 | 2026-11-20 | 赛博鸡蛋：DeepSeek Harness 的免费 token 市场、一键装模型、中转站自动签到与面板内一键更新。 |
| 328 | [woodtong/dsh-ghostscreen-mcp](https://github.com/woodtong/dsh-ghostscreen-mcp) | 0 | 2026-11-20 | 2026-11-20 | a plugin for deepseek-harness,it's a birdge for project "Neutrino".They aim to provide a windows for Agent to promote your experience when your Agent need  verify its achievement |
| 329 | [worsle37/dsh-ui-skin](https://github.com/worsle37/dsh-ui-skin) | 0 | 2026-11-20 | 2026-11-20 | DSH desktop UI skin: static wallpaper, per-area glass transparency, accent/text colors, custom home headline. |
| 330 | [WSIKUN5/dsh-circadian](https://github.com/WSIKUN5/dsh-circadian) | 0 | 2026-11-20 | 2026-11-20 | 给 DeepSeek Harness 里的 agent 一副人的作息：会犯困、到点去睡、早上醒、被硬叫醒会烦（dsh plugin） |
| 331 | [wth373737/dsh-chat-lite](https://github.com/wth373737/dsh-chat-lite) | 0 | 2026-11-18 | 2026-11-20 | DSH 闲聊区：手机友好聊天面板 + 自管历史库（年月分组/全文搜索/附件图片）+ 中文思维链 preset（零工具） |
| 332 | [wth373737/dsh-plugin-chat-export](https://github.com/wth373737/dsh-plugin-chat-export) | 0 | 2026-11-13 | 2026-11-20 | DSH plugin: allowlisted Telegram group-chat export, human-only consent, verbatim notices + local-model digests |
| 333 | [wth373737/dsh-plugin-cookie-whitelist](https://github.com/wth373737/dsh-plugin-cookie-whitelist) | 0 | 2026-11-04 | 2026-11-20 | DSH plugin: browser-extension cookie export, per-domain approval, in-memory vault, and a read-only CDP browser. |
| 334 | [wth373737/dsh-plugin-sandbox-mode](https://github.com/wth373737/dsh-plugin-sandbox-mode) | 0 | 2026-11-04 | 2026-11-20 | Sandbox Mode for DeepSeek Harness: reasoning edits a sandbox document, and every action and final output is run from that document. |
| 335 | [wth373737/dsh-resource-guard](https://github.com/wth373737/dsh-resource-guard) | 0 | 2026-11-09 | 2026-11-20 | Pre-flight memory/VRAM gate for DeepSeek Harness tool calls |
| 336 | [wth373737/dsh-video-localmodel](https://github.com/wth373737/dsh-video-localmodel) | 0 | 2026-11-05 | 2026-11-20 | Local-first video screening for DeepSeek Harness: deterministic signals + Qwen3-ASR subtitles + local VLM frame captions + text timeline; the cloud model judges original frames. |
| 337 | [wulusai2333/dsh-chat-demo](https://github.com/wulusai2333/dsh-chat-demo) | 0 | 2026-11-20 | 2026-11-20 | 把 deepseek-ai/chat-demo 作为 DSH 插件接入：同源全屏面板、宿主注入 API Key、历史对话导入（非官方） |
| 338 | [WYHboop/dsh-netease-mail](https://github.com/WYHboop/dsh-netease-mail) | 0 | 2026-11-20 | 2026-11-20 | DSH-EMAIL: NetEase enterprise mail (qiye.163.com) inside DeepSeek Harness - eight mail tools plus a three-pane sidebar inbox. Hand-written IMAP/SMTP, no dependencies. |
| 339 | [x7user/dsh-model-quota](https://github.com/x7user/dsh-model-quota) | 0 | 2026-11-18 | 2026-11-20 | MiniMax quota, DeepSeek wallet balance and OpenCode Go allowance next to the DeepSeek Harness composer |
| 340 | [XcapeAxis/dsh-agent-ops](https://github.com/XcapeAxis/dsh-agent-ops) | 0 | 2026-11-20 | 2026-11-20 | Find the right DeepSeek Harness workspace and conversation to resume. |
| 341 | [xenwithcode/xen-theme](https://github.com/xenwithcode/xen-theme) | 0 | 2026-11-20 | 2026-11-20 | XEN THEME: tema pastel azul grisáceo para DeepSeek Harness con paleta ANSI, modo claro/oscuro y alto contraste. |
| 342 | [xia-sc/dsh-workspace-integrity](https://github.com/xia-sc/dsh-workspace-integrity) | 0 | 2026-11-20 | 2026-11-20 | Windows-only DSH bundle that repairs Low integrity labels left by the workspace-write sandbox |
| 343 | [xiaobbl/dsh-mworks-ai](https://github.com/xiaobbl/dsh-mworks-ai) | 0 | 2026-11-20 | 2026-11-20 | https://www.npmjs.com/package/dsh-mworks-ai |
| 344 | [xiaomao361/dsh-afterwave-style](https://github.com/xiaomao361/dsh-afterwave-style) | 0 | 2026-11-20 | 2026-11-20 | 四号船坞 · DeepSeek Harness 干船坞主题与会话工作台 |
| 345 | [xiaoxi-kobo/dsh-proxy-identity](https://github.com/xiaoxi-kobo/dsh-proxy-identity) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: attach fixed identity headers to every model request so a shared LLM gateway or memory proxy recognizes the client without an interactive picker. |
| 346 | [xiayanyu0306/dsh-archived-session-cleanup](https://github.com/xiayanyu0306/dsh-archived-session-cleanup) | 0 | 2026-11-20 | 2026-11-20 | Sidebar cleanup for archived DeepSeek Harness sessions: select archived chats and delete them to the Windows Recycle Bin. |
| 347 | [xieqin74123/dsh-plugins](https://github.com/xieqin74123/dsh-plugins) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness Web plugins: SSH target, Python/Conda env, CPU allocation, GPU sandbox access, session notifications. AI-generated code, not manually reviewed. |
| 348 | [Xingmakesense/dsh-gomoku](https://github.com/Xingmakesense/dsh-gomoku) | 0 | 2026-11-20 | 2026-11-20 | Gomoku (five-in-a-row) for DeepSeek Harness: a Better Sidebar page where your configured models play |
| 349 | [xishaochen/dsh-aa-killline](https://github.com/xishaochen/dsh-aa-killline) | 0 | 2026-11-20 | 2026-11-20 | Model kill-line charts for DeepSeek Harness: global/China AIII-vs-price Pareto frontiers + strongest-model-per-vendor table. Data from Artificial Analysis + OpenRouter, python3 stdlib only. |
| 350 | [XS-dev/dsh-tokscale-usage](https://github.com/XS-dev/dsh-tokscale-usage) | 0 | 2026-11-20 | 2026-11-20 | Local multi-agent token usage and telemetry dashboard for DeepSeek Harness powered by tokscale and dsh-context. |
| 351 | [xuanfenglajiao/dsh-query-scout](https://github.com/xuanfenglajiao/dsh-query-scout) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 的只读检索子代理插件：不切换主模型、不破坏前缀缓存，将大范围文件与网页检索交给独立配置的模型执行。 |
| 352 | [xyfann/dsh-gemini-guard](https://github.com/xyfann/dsh-gemini-guard) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness plugin: fail-closed egress gate for vendor model routes that judge the caller by public IP |
| 353 | [y1s2y3/dsh-floating-ball](https://github.com/y1s2y3/dsh-floating-ball) | 0 | 2026-11-20 | 2026-11-20 | 非官方 DSH 悬浮球（Windows 置顶）：任务跑完没有，一眼就知道。dsh-session-ball-plugin · 非官方社区自制 |
| 354 | [yexiao130/dsh-agent-status-bar](https://github.com/yexiao130/dsh-agent-status-bar) | 0 | 2026-11-20 | 2026-11-20 | Shows what the main agent is doing on a slim bar above the Windows taskbar while the DSH window is in the background. |
| 355 | [yichao-agent/dsh-superagent-session-fold](https://github.com/yichao-agent/dsh-superagent-session-fold) | 0 | 2026-11-20 | 2026-11-20 | Contain dsh-superagent worker sessions in one sidebar status row (DeepSeek Harness client plugin) |
| 356 | [yinchuanqi/gis-workbench](https://github.com/yinchuanqi/gis-workbench) | 0 | 2026-11-19 | 2026-11-20 | MapLibre GIS workbench plugin (DSH web): PostGIS registration, semantic vector styling, GPKG import, COG rasters, resumable uploads. |
| 357 | [yjrqz777/dsh-stock-bbar](https://github.com/yjrqz777/dsh-stock-bbar) | 0 | 2026-11-20 | 2026-11-20 | 在输入框下方显示一个 A 股、北交所、港股或指数代码的价格、涨跌箭头与涨跌幅，每 5 秒刷新，点击可切换代码。 |
| 358 | [yuanstarstar/dsh-deepseek-recharge](https://github.com/yuanstarstar/dsh-deepseek-recharge) | 0 | 2026-11-20 | 2026-11-20 | DSH 插件：在设置面板/聊天里直接给 DeepSeek API 账户充值，复用 DSH 登录态，微信/支付宝扫码，自动查单到账。 |
| 359 | [yuanyuanzhang0815/dsh-prompt-book](https://github.com/yuanyuanzhang0815/dsh-prompt-book) | 0 | 2026-11-18 | 2026-11-20 | Prompt presets in the DeepSeek Harness (dsh) composer: pick one, it is inserted at the caret and focus returns to the input. |
| 360 | [yugegezhenshuaia/dsh-plugin-desktop-control](https://github.com/yugegezhenshuaia/dsh-plugin-desktop-control) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 桌面操控插件：截图 + 系统 OCR + 鼠标键盘 + 窗口管理 + UI Automation，让智能体像人一样操作 Windows 桌面（Windows only, zero dependency） |
| 361 | [YunongDai2005/dsh-thetwo](https://github.com/YunongDai2005/dsh-thetwo) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness (DSH) plugin for LAN conversation sync and task handoff between Windows and Mac. 局域网会话同步与跨设备任务交接。 |
| 362 | [yuyiming-ship-it/dsh-auto-export-radar](https://github.com/yuyiming-ship-it/dsh-auto-export-radar) | 0 | 2026-11-20 | 2026-11-20 | 中国汽车出海雷达 · DeepSeek Harness 插件：15 语种 74 渠道定时采集中国汽车出海新闻，标题自动翻中文，面板内读正文并可一键翻译。 |
| 363 | [yxyouyi/dsh-screenshot-region](https://github.com/yxyouyi/dsh-screenshot-region) | 0 | 2026-11-20 | 2026-11-20 | DeepSeek Harness 截图插件：输入框旁一键原生框选，只有框内图片进入对话框草稿（Windows）。One-step region screenshot for the DSH composer. |
| 364 | [yz-china/dsh-sidebar-view-density](https://github.com/yz-china/dsh-sidebar-view-density) | 0 | 2026-11-20 | 2026-11-20 | DSH sidebar, panel column and plugin page view density: detail list, one column, two columns, and a custom layout with column-count, row-height and gap sliders. |
| 365 | [zer0-lyz/dsh-workbench](https://github.com/zer0-lyz/dsh-workbench) | 0 | 2026-11-19 | 2026-11-20 | DeepSeek Harness 个人工作台插件：资产评估项目管理 · 天源评估系统对接 · 考试提醒 · 自选股行情（MIT） |
| 366 | [zhang-1239/dsh-positions](https://github.com/zhang-1239/dsh-positions) | 0 | 2026-11-19 | 2026-11-20 | DSH plugin: cost-basis workbench for your own positions (no quotes) |
| 367 | [zhouxiansheng-good/yunshu-harness](https://github.com/zhouxiansheng-good/yunshu-harness) | 0 | 2026-11-20 | 2026-11-20 | 云舒 · DeepSeek Harness 的主聊天任务、记忆、语音与可扩展工作台 |
| 368 | [Zjb0702/dsh-artifact-vault](https://github.com/Zjb0702/dsh-artifact-vault) | 0 | 2026-11-20 | 2026-11-20 | DSH plugin: attribute workspace files to the session that produced them, group versions, and reclaim disk. |
| 369 | [ZR2331314/dsh-talk-with](https://github.com/ZR2331314/dsh-talk-with) | 0 | 2026-11-20 | 2026-11-20 | 剧情向多人格插件：按称呼切换人格、同台接话、头像+名字、剧情阶段头像自动替换。Multi-persona talk plugin for DeepSeek Harness. |
| 370 | [ZSQS88/dsh-model-switcher-pro](https://github.com/ZSQS88/dsh-model-switcher-pro) | 0 | 2026-11-20 | 2026-11-20 | Enhanced model picker + Codex-style reasoning-effort slider for DeepSeek Harness (Web + Desktop). MIT derivative of youssefsiam38/dsh-plugins. |
| 371 | [zz12hui/dsh-radar](https://github.com/zz12hui/dsh-radar) | 0 | 2026-11-19 | 2026-11-20 | 生态雷达：DSH 插件与 Agent Skills 的排行导航，侧栏打开即用，勾选条目生成安装提示词 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- 0xLyn77/ProMentor
- 13711018663/DeepSeek-Harness-BT-
- 2090003781/bridge
- 2869949486/dsh-opencode-routing
- 2869949486/dsh-skill-market
- Apple-TWININGS/DEEPSEEK-HARNESS-Boot-Animation-Male-Version
- Beeasy-L/dsh-qq-panel
- Beeasy-L/dsh-watchman
- Carlos5986515/dsh-status-notifier
- Chlyz621/dsh-unstuck
- dsh-plugin-collection/dsh-wakatime-plugin
- Fisfzy/dsh-ego-browser
- gushengsheng/dsh-mobile-link
- gushengsheng/dsh-task-hub
- Jaylor-Wang/dsh-agent-loop-experiment
- junwei529/work-charter-dsh
- Nounoumm/course-handout-studio
- oscarka/pocketagent
- ouyangyouzi/wgb
- PhilYue/dsh-llm-manage
- Poy-Coder/dsh-channel-feishu
- Poy-Coder/dsh-channel-wechat-ilink
- Poy-Coder/dsh-im-indicator
- Ruiming-cn/dsh-more-session-operations
- SajoLuo/dsh-trellis
- ShuoweiFu/dsh-liquid-glass
- tdcq9594/dsh-roost
- Tlr18348452080-hub/soma
- tsukii12/dsh-remote-portal
- Waldsatte/dsh-theme-taojian
- wjn1121/local-peak-cost
- wlc114514/dsh-upload-origin
- x7user/dsh-model-usage
- Xantares330/dsh-codex-consult
- yjnmedia/dsh-expert-role
- yuanyuanzhang0815/dsh-quick-prompts
- Zhang-Eli/dsh-github-trending-masonry
- Zhang-Eli/dsh-matrix-todo
- Zhang-Eli/dsh-one-pack
