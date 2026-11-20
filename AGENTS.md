# AGENTS.md

项目级维护约定与备忘（供日常审核与开发参考）。

## 核心策展口径（已与代码对齐）

- **榜单排除与市场排除已解耦**：
  - `data/curated.json` 中的 `leaderboard_exclusions` **仅控制 Star 排行榜**（`TOP200.md` 与 README Top 50），不影响正规插件进入官方发现页订阅索引（`data/dsh-market-index.json`）和下游 `dsh-market-pro` 市场。
  - `data/curated.json` 中的 `market_exclusions` 控制下游市场排除（与 `excluded_repos` 和 `SELF_EXCLUDED_REPOS` 一起生效）。
- **可安装 DSH 插件放行原则**：
  - 凡是可安装的 DSH 插件——包括远程控制 / 移动端配套 / IM 双向桥接 / 邮箱桥接，以及双宿主/多宿主分发插件——均直接核准进 `data/approved.json`（进目录、进榜、进市场），不按形态排除。
  - 桌面客户端 / 桌面壳 / 启动器 / 纯独立 App、插件市场/商店/技能商城套娃、免费模型引流与已停更损坏包，必须**同时写入 `leaderboard_exclusions` 与 `market_exclusions`**。
  - 原有高星通用项目贴 `dsh-plugin` Topic 或星数异常但插件本身可用的仓库，仅写入 `leaderboard_exclusions`（不上 Star 榜，但允许进市场）。

## 常用本地校验命令

使用 Node.js 22：

```sh
node scripts/merge.mjs
node scripts/validate-curated.mjs --from-snapshot
node scripts/merge.mjs --check
node scripts/validate-packages.mjs
node scripts/validate-market-catalog.mjs
node scripts/host-market/validate-index.mjs
node --test scripts/test-*.mjs
npm test --prefix scripts/host-market
```

## 运维备忘

- **Schema 3（`data/market-catalog.json`）下线触发条件**：当 `market-catalog.json` 体积触达 `scripts/validate-market-catalog.mjs` 中的 24 MB 硬上限导致 `publish-npm-feed.yml` 报红时，**直接下线 schema 3 兼容版**，仅保留紧凑的 schema 4 主源 `data/market-catalog-v4.json`（与 `data/packages.json`）。
