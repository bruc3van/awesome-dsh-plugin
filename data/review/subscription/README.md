> 兼容规则更正：历史核验按“必须显式 engines.dsh”执行，其中 497 个 needs_upstream_declaration 结论不代表插件不兼容，已被官方 dshRange 规则取代。当前收录数量与逐目标排除原因请以 data/dsh-market-index.report.json 为准。历史源码证据保留，不视为新规则下重新核验完成。

# 订阅来源核验

[最新完成的 600 仓库分批核验](28cd5ad09527/README.md)

- [主目录外第 1 批 200 个仓库](outside-2026-10-18-batch-1/README.md)
- [主目录外第 2 批 200 个仓库](outside-2026-10-18-batch-2/README.md)
- [主目录外第 3 批 200 个仓库](outside-2026-10-18-batch-3/README.md)
- [待 AI 核实的映射](mapping-pending.md)

每批 200；固定输入、逐仓库证据、人工分发判断和映射修正均可追溯。来源取证不等于安装测试或安全认证。

## 自动补映射（5 MiB 网关字节预算）——持续扩容

`scripts/host-market/expand-mappings.mjs` 由每日映射任务 `fill-catalog-mappings.yml` 在目录补齐之后**每天运行 1 批**（200 仓、独立证据目录 `expand-<日期>-<时>b1`；原每 3 小时的 `expand-subscription-mappings.yml` 已并入）；只考虑通过 `scripts/mapping-gate.mjs` 的仓库——**≥5★ 且快照前 90 天内有 push**；同一天的终局结论（无可安装证据 / 仅手动安装 / 旧版声明 / 模板占位）以及 `data/catalog-mapping-skips.json` 中的已裁决跳过项均会被记住，后续批次直接跳过这些仓库深挖新仓。

`scripts/host-market/expand-mappings.mjs`（由 `fill-catalog-mappings.yml` 调用）的执行流程：

1. 读取已有分批证据中仍未映射、且元数据合格的仓库；
2. 按 Star 再核验下一批最多 200 个未映射已核准仓库；
3. **只追加** `data/packages.json` 新 key，不改已有映射，不代填 `engines.dsh`；自动映射按**上游文档意图**区分跟踪与固定：README 写明无版本（或 `@latest`）npm 形式 → 写入**跟踪式目标** `npm:包名`，每日重新核验并把线上输出固定到当时的精确版本或 commit；README 带引用的 Git 目标按文档原样记录；README 只给固定版本 → 写入已核验的精确版本；Git 无 README 安装文档（repo-fallback）→ 跟踪仓库本身，由每日核验固定 head commit。条目里人工固定的 `@版本` / `#tag` / `#commit` 是**手工固定项**，保持原意、永不改写；
4. 身份可追溯（npm `repository`/`homepage` 对上 GitHub、包名与仓库一致、或 README 写明该包；Git 来源经本仓库固定提交取证）的条目自动写入；未声明 `engines.dsh` 按官方 dshRange 视为不受限，可以自动映射；
5. 模板/占位包名、npm 身份对不上仓库的条目写入 `mapping-pending.md`，不自动上架。

随后 `refresh-host-market` 会再做安装来源核验；自动映射不是安全审查或实机兼容保证。

## AI 核实映射

对 AI 助手说：**「按 data/review/subscription/README.md 的约定，审核 mapping-pending.md 并补映射」**

- 只处理表中仓库；已有 `packages.json` 条目不要改。
- 核对该 npm 包是否就是这个 GitHub 仓库（维护者/作者、包名、README 安装目标、repository 重定向）。对得上再写入映射；对不上保持待审，不要猜。
- 不要给上游代填 `engines.dsh`。未声明范围可以按官方不受限规则映射，并在 `verified_via` / `note` 写明依据。
- 模板、示例、占位 `@your-scope` 不要写入。
- 写入后运行 `node scripts/validate-packages.mjs`，不要手改订阅索引或 `packages.json` 之外的生成物。
