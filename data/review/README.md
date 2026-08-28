# data/review — 数据约定与审核合并流程 / Data convention & review-merge workflow

本目录是「原始数据 → 人工核实 → 用户可见页面」流水线的审核环节。**脚本只负责抓取原始数据；用户能看到的页面（CATALOG.md、TOP200.md）里的每一个新仓库，都经过维护者核实后才进入。**

This directory is the review stage of the "raw data → human verification → user-facing pages" pipeline. **Scripts only fetch raw data; every new repository that appears on the user-facing pages (CATALOG.md, TOP200.md) has been verified by the maintainer first.**

## 数据文件 / Data files

| 文件 / File | 谁写 / Written by | 作用 / Role |
| --- | --- | --- |
| `data/repositories.json` | 脚本（`scripts/update.mjs`，每日） | 原始快照：`dsh-plugin` Topic 下的全部仓库，无过滤、无审核 |
| `data/approved.json` | 维护者 / AI 审核 | 核实通过的仓库清单，`"owner/name": "YYYY-MM-DD"`。**用户可见页面的门控** |
| `data/curated.json` | 维护者 / AI 审核 | 编辑部裁决：`excluded_repos`（整体剔除 + 理由）、`leaderboard_exclusions`（只进目录不进榜单）、`market_exclusions`（可进目录/榜单、不进下游市场——desktop 客户端与 market / 商店 / 目录 / 技能商城类；规则：**市场不能包含市场**）、`category_overrides`（分类） |
| `data/leaderboard-descriptions-zh.json` | 维护者 / AI 审核 | 首页热度榜 Top 50 的中文简介：`"owner/name": "中文一句话简介"`。新核准仓库冲进首页 Top 50 时必须在此补条目，否则中文首页直接显示英文原文（`merge.mjs` 只告警不拦截）；补完后重跑 `merge.mjs`。已跌出 Top 50 的旧条目可保留，重回榜单时复用 |
| `data/review/pending.json` / `pending.md` | 脚本（`scripts/update.mjs`，每日） | 待审核队列：新增到 Topic、带简介、尚未核实的仓库（自动生成，勿手改）。含 **Star 异常增长** 告警节：对照上一份快照，日增 ≥100★ 或突然进入 / 跃升榜单的仓库单独列出，供审核时增强分析 |
| `data/market.json` | 脚本（`scripts/market.mjs`，每日 cron 与 curation 合并后） | 下游市场（dsh-desktop-safe-market）消费的精选文件：快照 + curation 的纯投影，按类目均衡发牌、≤600 条、≤500 KB。**不受 `approved.json` 门控**（只按排除名单过滤），接口约定见下游 `docs/market-json-spec.md` |
| `CATALOG.md`、`catalog/*.md`、`TOP200.md`、README 数据区 | `scripts/merge.mjs`（仅审核合并时） | 用户可见页面；**脚本不会自动更新它们**。`CATALOG.md` 是目录索引，各分类的完整名单在 `catalog/<category>.md` 分册中（单页曾达 2.14 MB，超过 GitHub 1 MB 的 Markdown 渲染上限，故拆分；生成时若某分册逼近上限会告警）。README.md / README_EN.md 有四处随合并自动刷新：「生态全景」思维导图（`<!-- dsh:panorama:start/end -->`）、「社区热度榜」Top 50 表格（`<!-- dsh:leaderboard:start/end -->`）、「作者自荐」预览（`<!-- dsh:showcase:start/end -->`，取自 `SHOWCASE.md` 末尾 10 条，**勿手工同步**——SHOWCASE.md 变更合入 main 后由 `refresh-showcase` 工作流即时重建，本地可跑 `scripts/showcase-preview.mjs`）与目录统计句（快照日期 + 收录/语言/许可证/活跃数）。此外，README 首页的「最近加入生态 / Recently joined」表随每次审核合并由维护者（或 AI）**手工轮换**：约 8 条、选自本次新核准仓库中最有代表性者，中英两表条目同步（脚本不代写）。其余内容仍手工维护 |

## 工作流 / Workflow

1. **每日自动化**（`.github/workflows/update-catalog.yml`）运行 `scripts/update.mjs`：抓取快照写 `data/repositories.json`，刷新待审核队列 `data/review/pending.*`，随后重建并提交 `data/market.json`。搜索索引有滞后（topic 页的计数常高于搜索 API 返回数），脚本会用 REST API 对账补捞「核准名单 + curated 引用 + 上一版快照中 ≥3★」但被搜索漏掉的仓库；改名仓库会在日志与 CI step summary 中提示，需人工更新 `approved.json` / `curated.json` 的 key。它**不修改任何用户可见页面**——蹭热度的仓库只会出现在待审核队列里，进不了 CATALOG 和榜单。若本次抓到的仓库数不足上一版快照的 80%（搜索索引抖动、限流吃掉整个分片等），脚本会中止且**不写任何文件**，保留昨天的快照并让工作流报红（与 `market.mjs` 的熔断同一思路）。
2. **审核**：维护者（或 AI 助手）审阅 `data/review/pending.md`，**先处理「Star 异常增长」告警节**（对照上一份快照：一天内 +100★，或突然进入 Top 200 / 名次跃升 ≥50 / 冲入 Top 20，以及待审仓 ≥100★ 且核准后将上榜）。对这些条目做增强分析后再决定，不要只看 README：核对 Star 与 fork / 提交活跃度 / 仓库年龄是否匹配（高星零 fork、创建当天几百星多为刷星）；是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜。然后对每个新仓库做决定：
   - **通过** → 加入 `data/approved.json`（`"owner/name": "2026-08-16"` 这样的日期值）
   - **剔除** → 加入 `data/curated.json` 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它实际是什么」（不使用 competing / 竞品 / market-in-market conflict 等竞争性措辞），并**同步从 `approved.json` 移除**（两份名单不得重叠，`validate-curated.mjs` 强制）。同类目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）一律整体剔除，不留目录
   - **只进目录、不进榜单** → 同时加入 `approved.json` 与 `curated.json` 的 `leaderboard_exclusions`（榜单排除同时也会排除出下游市场）。**Star 异常增长且热度并非来自 DSH 插件本身**（刷星、通用产品蹭 Topic）即使插件是真的，也走这条，理由写清 stars accrued as …
   - **desktop 客户端 / 桌面壳 / 启动器**：留在目录，但加入 `curated.json` 的 `leaderboard_exclusions`——**TOP200.md 与下游 market.json 都不出现**（榜单排除本身就会排除出下游市场）
   - **market 类（插件市场 / 商店 / 目录 / registry / 插件中心 / 技能商城，包括内置插件市场或技能市场的插件与桌面端）**：留在目录，但加入 `leaderboard_exclusions`，并在 `market_exclusions` 留底——规则很简单：**市场不能包含市场**；market 类理由统一以 “the market cannot include another market” 表述
   - **其余非插件形态（手册教程 / 文档、Docker 部署、VS Code 等编辑器扩展、配套 CLI / 移动端工具等）**与**无 DSH 安装路径的通用工具**：一律整体剔除——加入 `excluded_repos` 并**同步从 `approved.json` 移除**，不入目录、榜单与市场。凡是不满足「真插件」门槛的形态（含 .NET / 平台定制版 / 域名配套应用等），理由按「不是 DSH 插件 + 它实际是什么」
   - **本仓库自身**：同类目录站 / awesome-list 一律整体剔除（见上），唯一例外是 `bruc3van/awesome-dsh-plugin`（本列表自己）——留在目录，但不进榜单与市场（`leaderboard_exclusions`；市场侧另由 `market.mjs` 的 `SELF_EXCLUDED_REPOS` 兜底）
3. **合并**：运行 `node scripts/merge.mjs`，重新生成 `CATALOG.md`（索引）、`catalog/*.md`（各分类分册）、`TOP200.md` 与待审核队列，并就地刷新 `README.md` / `README_EN.md` 的四处数据区（生态全景思维导图计数、社区热度榜 Top 50、作者自荐预览、目录统计句与快照日期；标记注释与匹配句式之外的 README 内容不受影响）。页面里的「最近人工复核」日期取自 `approved.json` 里最新的核准日期，不是脚本的运行日期——同样的数据重复生成会得到完全一样的文件，因此 `node scripts/merge.mjs --check` 可以用来核对页面是否还和 curation 数据一致。若本次决定涉及任何排除名单（`excluded_repos` / `leaderboard_exclusions` / `market_exclusions`——榜单排除同样会改写下游市场投影），再运行 `node scripts/market.mjs --from-snapshot` 重建 `data/market.json` 并 `node scripts/validate-market.mjs` 校验（推送后 `refresh-market` 工作流也会自动重建一次）——**market.json 只能收录真实插件，desktop / awesome / market 三类绝不能出现在里面**。若 `merge.mjs` 告警首页 Top 50 有仓库缺中文简介（新核准仓进榜），到 `data/leaderboard-descriptions-zh.json` 补条目后重跑。随后**手工轮换** README.md / README_EN.md 的「最近加入生态 / Recently joined」表——从本次新核准的仓库中挑选约 8 个最有代表性的项目（关注度、功能亮点、可展示性），替换旧批次，中英两表条目与描述保持一致（本次无新核准仓库则跳过轮换）；再提交推送（推送后 `validate-curation-push` 工作流会在 main 上复跑 `validate-curated.mjs` 与 `merge.mjs --check` 兜底）。

## AI 一句话审核 / One-line AI review

对 AI 助手说：**「按 data/review/README.md 的约定，审核 data/review/pending.md 里的新仓库并合并」**——AI 应**先读 pending.md 的「Star 异常增长」节**，对标记仓做增强分析（星/fork、仓库年龄、提交活跃度、是否通用产品蹭 Topic），并在回复里向审查员单独汇报每条告警的结论与处置（进榜 / `leaderboard_exclusions` / 剔除）。然后逐仓核实（README 是否真是 DSH 插件、是否有 `dsh plugin` 安装路径、是否蹭 Topic），按上述决定规则更新 `approved.json` / `curated.json`：目录站 / awesome-list / 榜单站进 `excluded_repos`（剔除时**同步从 `approved.json` 移除**；唯一例外是本列表自身 `bruc3van/awesome-dsh-plugin`——留目录、进 `leaderboard_exclusions`）；desktop 客户端 / 桌面壳 / 启动器与 market 类（含技能商城、内置市场的桌面端）进 `leaderboard_exclusions`——**TOP200 与下游 market.json 都不出现**，market 类另在 `market_exclusions` 留底（理由 "the market cannot include another market"）；其余非插件形态（Docker 部署、手册教程、VS Code 扩展、配套工具等）与无 DSH 安装路径的通用工具进 `excluded_repos` 整体剔除（**同步从 `approved.json` 移除**，不入目录/榜单/市场）；**Star 异常且热度并非 DSH 插件本身的，核准时同时写入 `leaderboard_exclusions`**；理由按措辞规范——只写「不是插件 + 它是什么」，市场类统一 “the market cannot include another market”，榜单排除写清 stars accrued as …，不用竞争性表述。同时处理 pending.md 末尾「从快照消失的已核准仓库」节（改名 → 更新 `approved.json` 的 key；删除/转私 → 移除条目）。随后运行 `node scripts/merge.mjs`（同时刷新 README 首页的生态全景与热度榜数据）；若其告警首页 Top 50 缺中文简介（新核准仓进榜），在 `data/leaderboard-descriptions-zh.json` 补条目后重跑；任何排除名单（含 `leaderboard_exclusions`）有变动时再运行 `node scripts/market.mjs --from-snapshot` 与 `node scripts/validate-market.mjs`，确保 `data/market.json` 里没有 desktop / awesome / market 三类。**再手工轮换 README / README_EN 的「最近加入生态」表（约 8 条，选自本次新核准仓库，中英同步；本次无新核准仓库则跳过轮换）**，提交并推送。提交前跑 `node scripts/validate-curated.mjs`（0 errors 方可提交；推送后 `validate-curation-push` 工作流会在 main 上复跑它与 `merge.mjs --check` 兜底）。

Tell the AI assistant: **"Review the new repositories in data/review/pending.md per the convention in data/review/README.md, then merge"** — it should **read the Star-growth alerts section first**, do extra analysis on every flagged repo (stars vs forks/age/activity, generic product riding the topic), and report each alert's conclusion to the reviewer. Then verify each repository (real DSH plugin? `dsh plugin` install path? topic rider?) and update `approved.json` / `curated.json` by the decision rules above: directory sites / awesome-lists / leaderboards go to `excluded_repos` (**also removed from `approved.json`**; the sole exception is this list itself, `bruc3van/awesome-dsh-plugin` — stays in the catalog via `leaderboard_exclusions`); desktop clients / shells / launchers and market-class repos (skill malls, desktops with a built-in market) go to `leaderboard_exclusions` — **absent from both TOP200.md and the downstream market.json**, with a `market_exclusions` backstop entry for the market class (reason "the market cannot include another market"); other non-plugin forms (Docker packaging, handbooks, VS Code extensions, companion tooling) and generic tools with no DSH install path go to `excluded_repos` outright (**also removed from `approved.json`** — absent from the catalog, the board, and the market); **star-growth cases whose popularity is not from the DSH plugin itself go to `leaderboard_exclusions` even when approved**; reasons follow the wording convention — state only "not a plugin + what it is", use "the market cannot include another market" for the market class, "stars accrued as …" for board exclusions, and no competitive framing. Also resolve the "Approved repositories missing from the snapshot" section at the end of pending.md (update the approved.json key after a rename, drop the entry after a deletion). Then run `node scripts/merge.mjs` (which also refreshes the README ecosystem-mindmap and leaderboard data islands); if it warns that home-page Top 50 entries lack a Chinese description (a newly approved repo boarded), add them to `data/leaderboard-descriptions-zh.json` and re-run it; if any exclusion list changed (`leaderboard_exclusions` included — it also reshapes the market projection), also run `node scripts/market.mjs --from-snapshot` and `node scripts/validate-market.mjs` to confirm `data/market.json` holds no desktop / awesome / market entries. **Then manually rotate the "Recently joined" table in README/README_EN (about 8 entries chosen from the newly approved repos, kept in sync between both languages; skip the rotation when nothing was approved this round)**, commit, and push. Run `node scripts/validate-curated.mjs` before committing (0 errors required; after the push, the `validate-curation-push` workflow re-runs it plus `merge.mjs --check` on main as a backstop).

## 命令速查 / Commands

```bash
node scripts/update.mjs                 # 抓快照 + 刷新待审核队列（需 GITHUB_TOKEN）
node scripts/update.mjs --from-snapshot # 仅用现有快照刷新待审核队列
node scripts/merge.mjs                  # 审核合并：重新生成 CATALOG.md / catalog 分册 / TOP200.md / 队列
node scripts/merge.mjs --check          # 只核对：分册收录集合、重复项及 CATALOG 索引链接/计数是否一致（CI 用，不比较易波动的字节）
node scripts/top.mjs                    # 单独重新生成 TOP200.md（同样受 approved 门控）
node scripts/market.mjs --from-snapshot # 重建 data/market.json（下游市场文件）
node scripts/validate-market.mjs        # 校验 data/market.json（§8 全项检查）
node --test scripts/test-market.mjs     # market 管线单测（含熔断）
node --test scripts/test-star-anomaly.mjs  # Star 异常增长检测单测
node scripts/validate-curated.mjs       # 校验 curated.json / approved.json / 自荐区（实时 GitHub API，限流时自动降级为 warning）
node scripts/validate-curated.mjs --from-snapshot  # 同上，但用本地 data/repositories.json 快照校验引用（无需 API，适合本地日常）
```

注意：`data/review/pending.json` 里的 `first_seen` 会跨日保留（队列重写时继承），方便看到每个仓库等了多久。`pending.md` 末尾的「从快照消失的已核准仓库」列出已核准但已删除/改名的仓库，核实后从 `approved.json` 移除或改名。

`pending.md` 的「Star 异常增长」由 `scripts/update.mjs` 在抓取新快照时对照上一份 `data/repositories.json` 算出（规则在 `scripts/star-anomaly.mjs`：日增 ≥100★；已核准仓新入 Top 200 且 Δ≥50 / 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200）。告警写入 `pending.json` 的 `star_anomalies`；`merge.mjs` 只在快照日期未变时原样保留，避免审核合并把尚未处理的警告冲掉。无上一份快照时（首次运行）不告警，以免把整份榜单当成「新入榜」。每日工作流的 step summary 也会列出告警，方便审查员在 Actions 里一眼看到。

`validate-curated.mjs` 的引用检查有两种模式：默认走实时 GitHub API（CI 有 token，能发现改名/删除/私库），遇到 403/429/502/503/504 会自动重试并最终降级为 warning 而不中断；`--from-snapshot` 改用本地快照（存在性 + `dsh-plugin` topic 由快照保证，快照缺失的引用降级为 warning），本地无 token 或 API 不稳时推荐使用，最终以 CI 的实时检查为准。
