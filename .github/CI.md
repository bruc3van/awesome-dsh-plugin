# CI 与发布流程

所有时间均为 Asia/Singapore（UTC+8）。GitHub 定时运行可能延迟，不能靠时间先后表达依赖。

```mermaid
flowchart TD
  Daily[每日 22:17 抓取快照与 review queue] --> V2[Refresh v2 market feed]
  Curation[审批 / 策展 / 生成器变更] --> V2
  Expand[每日 00:12 / 手动扩容映射] --> V2
  Mapping[packages / featured 变更] --> V2
  V2 --> Feed[data/market-v2.json + MARKET.md]
  V2 --> NPM[npm OIDC 发布]
  V2 --> Host[宿主索引生成与验证]
  HostCode[宿主生成器变更 / 每日 22:47 / 手动] --> Host
  Host --> Artifact[本次运行的 validated-market artifact]
  Artifact --> Publish[原子推送 main 与 market-release]
  Publish -. main 前进时最多两次重新生成 .-> Host
```

图中的跨工作流箭头使用 `workflow_run`，只接受成功的 main 运行。扩容是独立入口，不再跟在宿主发布之后，避免形成循环或超过 GitHub 的三层级联限制。最长正常链为「快照/扩容 → v2 → npm、宿主」。

`GITHUB_TOKEN` 提交不会触发一般的 `push` 工作流，因此不能用「扩容提交 packages.json → push」衔接发布。显式 `workflow_dispatch` 可以使用该 token，宿主冲突恢复用它发起全新运行。

| 工作流文件 | 触发 | 职责 |
| --- | --- | --- |
| `update-catalog.yml` | 每日 22:17、手动 | 更新快照、待审核队列；不自动审批或更新人工目录 |
| `expand-subscription-mappings.yml` | 每日 00:12、手动 | 未满 1000 时补充可核实映射、保存待复核项目；成功后衔接 v2 |
| `refresh-market-v2.yml` | 快照或扩容成功、策展/映射/精选/生成依赖变更、手动 | 从快照、审批、策展、安装映射与精选直接生成并校验 v2 和预览 |
| `refresh-host-market.yml` | v2 成功、宿主代码/索引变更、每日 22:47、手动 | 无写凭证生成；独立发布 job 验证 artifact 后原子发布 |
| `publish-npm-feed.yml` | v2 成功、手动 | 回归测试、digest 去重、OIDC 发布，并刷新 jsDelivr 的 latest 与无版本别名缓存；不取消进行中的发布 |
| `refresh-showcase.yml` | SHOWCASE.md 变更、手动 | 更新中英文 README 展示区 |
| `reverify-packages.yml` | 每周一 23:33、手动 | 在线复核映射；仅报告，不改映射 |
| `entry-check.yml` | 每周三 14:17、脚本变更、手动 | 静态 ENTRY 只读报告；只查 npm 发布物，不参与门禁（Node 24） |
| `validate-pr.yml` | PR 打开、更新、改标题/标签等 | 从 base 执行规则校验，不执行 PR 代码 |
| `validate-curated.yml` | 相关 PR、main 脚本/工作流变更、手动 | actionlint、两组测试、在线策展校验、目录同步及 feed 生成验证 |
| `validate-curation-push.yml` | main 审批/策展变更、手动 | 直接合入 main 时的策展与目录同步兜底 |

## 并发和故障恢复

- 各写入工作流保留独立 concurrency group；共享一个组会让不同类型的 pending 任务相互淘汰。工作流开始时读取最新 main，避免队列中旧事件生成旧数据。
- v2、展示页、快照和扩容推送最多尝试三次。遇到 main 前进时，从新 tip 重新生成；扩容重试保留 GitHub API token。最后一次失败后不再生成一份不会推送的数据。
- 宿主发布始终使用本次验证的 artifact，`main` 和 `market-release` 同时推进；不 rebase 或强推旧产物。main 前进导致失败时，显式排队全新生成，最多自动重试两次。权限错误、dispatch 失败、重试耗尽仍报红。排队成功只表示已交接，需查看后续运行确认最终发布。
- npm 发布串行完成；digest 相同则退出，版本冲突由现有脚本重新读取 registry 并重试。取消运行不能撤销已经发送的 registry 请求。
- 工作流校验不等于发布前统一审批门：独立的 main 校验和发布入口可能并行。保护规则、npm trusted publisher 配置、外部服务可用性仍由实际远端运行确认。

## 本地检查与维护

本地检查使用 Node.js 22（`entry-check` 工作流用 Node 24，因为 `dsh-standards@1.6.8` 要求 `>=24.9`）：

```sh
npm ci --ignore-scripts --prefix scripts/host-market
node --test scripts/test-*.mjs
npm test --prefix scripts/host-market
node scripts/validate-curated.mjs --from-snapshot
node scripts/merge.mjs --check
node scripts/validate-packages.mjs
```

CI 的策展校验使用 GitHub API；`--from-snapshot` 只适用于本地离线验证。宿主测试会启动临时 localhost HTTP 服务。`workflows.test.mjs` 检查触发链无环、深度及 bot 提交后的发布衔接；`publication.test.mjs` 用临时 bare Git 仓库验证原子推送、main 并发更新、权限拒绝和重试上限。

若 `merge.mjs --check` 报目录漂移，运行 `node scripts/merge.mjs`，检查并提交目录、榜单、README 自动区域及 stats 的生成差异；不要绕过同步检查。它会沿用现有审批结果，不新增审批。快照变化可引起分类和计数漂移，因此这一检查可能再次提示需要同步。

若 packages 校验报仓库消失或改名，核实上游后修正映射，不能为了让发布变绿而静默删除记录。网络、源包完整性、数量熔断等失败仍应阻断发布。日常定时任务不能保证外部依赖永远成功。

GitHub 机制参考：[工作流触发与 GITHUB_TOKEN](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)、[workflow_run 级联限制](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run)。
