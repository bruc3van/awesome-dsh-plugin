# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-06**
- 快照日期 / Snapshot date: **2026-11-05 (UTC)**
- 待审核 / Pending: **0**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **0**
- Star 异常增长 / Star-growth alerts: **15** — 先看下方告警节 / see the alert section first

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

对比上一份快照 **2026-11-04** / vs previous snapshot **2026-11-04**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **15**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 待审 / pending | 27311 | — | 4528 | 618d | 待审高星 | 核准即 Top 1 |
| ⚠️ [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 待审 / pending | 4437 | — | 596 | 24d | 待审高星 | 核准即 Top 8 |
| ⚠️ [frostming/dsh-hongguo](https://github.com/frostming/dsh-hongguo) | 待审 / pending | 128 | — | 16 | 0d | 待审高星 | 核准即榜 #172；创建 0 天 |
| ⚠️ [Fishsb/dsh-voice-prompt-enhancer](https://github.com/Fishsb/dsh-voice-prompt-enhancer) | 待审 / pending | 121 | -1 | 14 | 83d | 待审高星 | 核准即榜 #181 |
| ⚠️ [diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) | 待审 / pending | 115 | — | 7 | 86d | 待审高星 | 核准即榜 #183 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 62240 | +1605 | 1680 | 41d | 日增百星 | 日增 +1605★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 10985 | +239 | 413 | 82d | 日增百星 | 日增 +239★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 5284 | +224 | 102 | 80d | 日增百星 | 日增 +224★ |
| ⚠️ [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | 已核准 / approved | 1934 | +198 | 159 | 82d | 日增百星 | 日增 +198★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 5716 | +163 | 531 | 28d | 日增百星 | 日增 +163★ |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 17433 | +162 | 603 | 83d | 日增百星 | 日增 +162★；已不进榜单 |
| ⚠️ [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 已核准 / approved | 28796 | +125 | 3112 | 199d | 日增百星 | 日增 +125★；已不进榜单 |
| ⚠️ [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 已核准 / approved | 37603 | +110 | 4847 | 213d | 日增百星 | 日增 +110★；已不进榜单 |
| ⚠️ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 已核准 / approved | 6990 | +107 | 345 | 83d | 日增百星 | 日增 +107★ |
| ⚠️ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 已核准 / approved | 4247 | +102 | 180 | 82d | 日增百星 | 日增 +102★ |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |


## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- （无 / none）
