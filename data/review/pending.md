# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-21**
- 快照日期 / Snapshot date: **2026-11-20 (UTC)**
- 待审核 / Pending: **0**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **0**
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


## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中。同 owner 的纯改名已自动同步引用，此处多为删除/转私或同名换主——核实后从 [data/approved.json](../approved.json) 移除，或按上面的待复核节处理。

Approved but no longer present in the current snapshot. Same-owner renames were already synced automatically, so what remains is mostly deletion, privating, or a recycled slug — after checking, remove them from [data/approved.json](../approved.json) or handle them via the renames-pending-review section above.

- （无 / none）
