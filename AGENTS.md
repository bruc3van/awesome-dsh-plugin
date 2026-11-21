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

- **Schema 3（`data/market-catalog.json`）已下线（2026-11-22）**：install 映射全量清洗（+7,459 条）使 schema 3 投影突破 24 MB 硬上限，按既有协议直接下线，**仅保留 schema 4 主源 `data/market-catalog-v4.json`**（与 `data/packages.json`）。npm feed（`awesome-dsh-plugin-feed`）不再携带 schema 3 文件；`dsh-market-pro <= 1.2.4` 的旧客户端需升级到 v4 消费。schema 2 于 2026-11-18 下线，schema 3 于 2026-11-22 下线——此后唯一目录源即 schema 4。
- **npm 安装目标版本策略（2026-11-21）**：npm 目标一律**无版本钉**（registry 决定装 latest；`@next` 等 channel dist-tag 保留，`@latest` 归一为无版本）；github/url 目标逐字遵循项目 README（tag/SHA/路径原样）。`reverify-packages.mjs` 的命令等价性对 add 目标做版本钉不敏感比较（宿主兼容性 runner 钉不受影响）。
- **GitHub 目标裸地址策略（2026-11-21 深夜，覆盖前条 github 部分）**：官方安装框输入仅两种——**包名**与 **GitHub 仓库地址**，且下游有 AI 安装兜底（仓库地址经提示词交 Agent 判断安装）。因此 github 目标一律记**裸仓库地址** `github:owner/repo`：`#tag`/`#SHA`/分支钉全部剥离，仅保留 monorepo 子包定位 `#path:`（结构信息，非版本）；install 字段为 `https://github.com/owner/repo[#path]`。`reverify-packages.mjs` 对 github token 做 bare/归一化（大小写、首尾斜杠不敏感）比较。README 占位符钉版（`#<commit-sha>`）的仓按裸地址直接记录，不再转 manual。
