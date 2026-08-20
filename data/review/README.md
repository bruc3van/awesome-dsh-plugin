# data/review — 数据约定与审核合并流程 / Data convention & review-merge workflow

本目录是「原始数据 → 人工核实 → 用户可见页面」流水线的审核环节。**脚本只负责抓取原始数据；用户能看到的页面（CATALOG.md、TOP200.md）里的每一个新仓库，都经过维护者核实后才进入。**

This directory is the review stage of the "raw data → human verification → user-facing pages" pipeline. **Scripts only fetch raw data; every new repository that appears on the user-facing pages (CATALOG.md, TOP200.md) has been verified by the maintainer first.**

## 数据文件 / Data files

| 文件 / File | 谁写 / Written by | 作用 / Role |
| --- | --- | --- |
| `data/repositories.json` | 脚本（`scripts/update.mjs`，每日） | 原始快照：`dsh-plugin` Topic 下的全部仓库，无过滤、无审核 |
| `data/approved.json` | 维护者 / AI 审核 | 核实通过的仓库清单，`"owner/name": "YYYY-MM-DD"`。**用户可见页面的门控** |
| `data/curated.json` | 维护者 / AI 审核 | 编辑部裁决：`excluded_repos`（整体剔除 + 理由）、`leaderboard_exclusions`（只进目录不进榜单）、`market_exclusions`（可进目录/榜单、不进下游市场——非插件形态与 market / 商店 / 目录 / 技能商城类；规则：**市场不能包含市场**）、`category_overrides`（分类） |
| `data/review/pending.json` / `pending.md` | 脚本（`scripts/update.mjs`，每日） | 待审核队列：新增到 Topic、带简介、尚未核实的仓库（自动生成，勿手改） |
| `data/market.json` | 脚本（`scripts/market.mjs`，每日 cron 与 curation 合并后） | 下游市场（dsh-desktop-safe-market）消费的精选文件：快照 + curation 的纯投影，按类目均衡发牌、≤600 条、≤500 KB。**不受 `approved.json` 门控**（只按排除名单过滤），接口约定见下游 `docs/market-json-spec.md` |
| `CATALOG.md`、`TOP200.md`、README 数据区 | `scripts/merge.mjs`（仅审核合并时） | 用户可见页面；**脚本不会自动更新它们**。README.md / README_EN.md 仅三个数据区随合并自动刷新：「生态全景」思维导图（`<!-- dsh:panorama:start/end -->` 标记界定）、「社区热度榜」Top 20 表格（`<!-- dsh:leaderboard:start/end -->` 标记界定）与目录统计句（快照日期 + 收录/语言/许可证/活跃数）。此外，README 首页的「最近加入生态 / Recently joined」表随每次审核合并由维护者（或 AI）**手工轮换**：约 8 条、选自本次新核准仓库中最有代表性者，中英两表条目同步（脚本不代写）。其余内容仍手工维护 |

## 工作流 / Workflow

1. **每日自动化**（`.github/workflows/update-catalog.yml`）运行 `scripts/update.mjs`：抓取快照写 `data/repositories.json`，刷新待审核队列 `data/review/pending.*`，随后重建并提交 `data/market.json`。搜索索引有滞后（topic 页的计数常高于搜索 API 返回数），脚本会用 REST API 对账补捞「核准名单 + curated 引用 + 上一版快照中 ≥3★」但被搜索漏掉的仓库；改名仓库会在日志与 CI step summary 中提示，需人工更新 `approved.json` / `curated.json` 的 key。它**不修改任何用户可见页面**——蹭热度的仓库只会出现在待审核队列里，进不了 CATALOG 和榜单。
2. **审核**：维护者（或 AI 助手）审阅 `data/review/pending.md`，对每个新仓库做决定：
   - **通过** → 加入 `data/approved.json`（`"owner/name": "2026-08-16"` 这样的日期值）
   - **剔除** → 加入 `data/curated.json` 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它实际是什么」（不使用 competing / 竞品 / market-in-market conflict 等竞争性措辞），并**同步从 `approved.json` 移除**（两份名单不得重叠，`validate-curated.mjs` 强制）。同类目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）一律整体剔除，不留目录
   - **只进目录、不进榜单** → 同时加入 `approved.json` 与 `curated.json` 的 `leaderboard_exclusions`（榜单排除同时也会排除出下游市场）
   - **非插件形态（desktop 客户端/桌面壳/启动器、Docker 部署、手册教程、VS Code 扩展等）**：可留在目录与榜单，但加入 `curated.json` 的 `market_exclusions` 以免进入下游市场文件
   - **market 类（插件市场 / 商店 / 目录 / registry / 插件中心 / 技能商城，包括内置插件市场或技能市场的插件与桌面端）**：可留在目录与榜单，但必须加入 `curated.json` 的 `market_exclusions`——规则很简单：**市场不能包含市场**；理由统一以 “the market cannot include another market” 表述
3. **合并**：运行 `node scripts/merge.mjs`，重新生成 `CATALOG.md`、`TOP200.md` 与待审核队列，并就地刷新 `README.md` / `README_EN.md` 的三个数据区（生态全景思维导图计数、社区热度榜 Top 20、目录统计句与快照日期；标记注释与匹配句式之外的 README 内容不受影响）。若本次决定涉及 `excluded_repos` / `market_exclusions`，再运行 `node scripts/market.mjs --from-snapshot` 重建 `data/market.json` 并 `node scripts/validate-market.mjs` 校验（推送后 `refresh-market` 工作流也会自动重建一次）——**market.json 只能收录真实插件，desktop / awesome / market 三类绝不能出现在里面**。随后**手工轮换** README.md / README_EN.md 的「最近加入生态 / Recently joined」表——从本次新核准的仓库中挑选约 8 个最有代表性的项目（关注度、功能亮点、可展示性），替换旧批次，中英两表条目与描述保持一致；再提交推送。

## AI 一句话审核 / One-line AI review

对 AI 助手说：**「按 data/review/README.md 的约定，审核 data/review/pending.md 里的新仓库并合并」**——AI 应逐仓核实（README 是否真是 DSH 插件、是否有 `dsh plugin` 安装路径、是否蹭 Topic），然后按上述决定规则更新 `approved.json` / `curated.json`：目录站 / awesome-list / 榜单站进 `excluded_repos`（剔除时**同步从 `approved.json` 移除**）；非插件形态与 market 类（含技能商城、内置市场的桌面端）进 `market_exclusions`；理由按措辞规范——只写「不是插件 + 它是什么」，市场类统一 “the market cannot include another market”，不用竞争性表述。随后运行 `node scripts/merge.mjs`（同时刷新 README 首页的生态全景与热度榜数据）；排除名单有变动时再运行 `node scripts/market.mjs --from-snapshot` 与 `node scripts/validate-market.mjs`，确保 `data/market.json` 里没有 desktop / awesome / market 三类。**再手工轮换 README / README_EN 的「最近加入生态」表（约 8 条，选自本次新核准仓库，中英同步）**，提交并推送。提交前跑 `node scripts/validate-curated.mjs`（0 errors 方可提交）。

Tell the AI assistant: **"Review the new repositories in data/review/pending.md per the convention in data/review/README.md, then merge"** — it should verify each repository (real DSH plugin? `dsh plugin` install path? topic rider?), then update `approved.json` / `curated.json` by the decision rules above: directory sites / awesome-lists / leaderboards go to `excluded_repos` (**also removed from `approved.json`**); non-plugin forms and market-class repos (skill malls, desktops with a built-in market) go to `market_exclusions`; reasons follow the wording convention — state only "not a plugin + what it is", use "the market cannot include another market" for the market class, and no competitive framing. Then run `node scripts/merge.mjs` (which also refreshes the README ecosystem-mindmap and leaderboard data islands); if the exclusion lists changed, also run `node scripts/market.mjs --from-snapshot` and `node scripts/validate-market.mjs` to confirm `data/market.json` holds no desktop / awesome / market entries. **Then manually rotate the "Recently joined" table in README/README_EN (about 8 entries chosen from the newly approved repos, kept in sync between both languages)**, commit, and push. Run `node scripts/validate-curated.mjs` before committing (0 errors required).

## 命令速查 / Commands

```bash
node scripts/update.mjs                 # 抓快照 + 刷新待审核队列（需 GITHUB_TOKEN）
node scripts/update.mjs --from-snapshot # 仅用现有快照刷新待审核队列
node scripts/merge.mjs                  # 审核合并：重新生成 CATALOG.md / TOP200.md / 队列
node scripts/top.mjs                    # 单独重新生成 TOP200.md（同样受 approved 门控）
node scripts/market.mjs --from-snapshot # 重建 data/market.json（下游市场文件）
node scripts/validate-market.mjs        # 校验 data/market.json（§8 全项检查）
node --test scripts/test-market.mjs     # market 管线单测（含熔断）
node scripts/validate-curated.mjs       # 校验 curated.json / approved.json / 自荐区（实时 GitHub API，限流时自动降级为 warning）
node scripts/validate-curated.mjs --from-snapshot  # 同上，但用本地 data/repositories.json 快照校验引用（无需 API，适合本地日常）
```

注意：`data/review/pending.json` 里的 `first_seen` 会跨日保留（队列重写时继承），方便看到每个仓库等了多久。`pending.md` 末尾的「从快照消失的已核准仓库」列出已核准但已删除/改名的仓库，核实后从 `approved.json` 移除或改名。

`validate-curated.mjs` 的引用检查有两种模式：默认走实时 GitHub API（CI 有 token，能发现改名/删除/私库），遇到 403/429/502/503/504 会自动重试并最终降级为 warning 而不中断；`--from-snapshot` 改用本地快照（存在性 + `dsh-plugin` topic 由快照保证，快照缺失的引用降级为 warning），本地无 token 或 API 不稳时推荐使用，最终以 CI 的实时检查为准。
