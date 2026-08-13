# 贡献指南 / Contributing

感谢你帮助维护 Awesome DSH Plugin。

Thank you for helping maintain Awesome DSH Plugin.

## 收录标准 / Inclusion criteria

- 仓库必须公开，并带有 `dsh-plugin` GitHub Topic。
- 项目说明应准确、简洁，不使用无法核实的宣传语。
- 请披露归档、许可证缺失或明显安全风险等重要状态。
- A repository must be public and carry the `dsh-plugin` GitHub topic.
- Descriptions should be accurate and concise, without unverifiable marketing claims.
- Important status such as archival, missing license, or evident security risk should be disclosed.

## 推荐一个插件 / Recommending a plugin

人工推荐、场景导航和分类覆盖写在 `data/curated.json`。这是唯一需要手工编辑的文件；不要直接修改生成后的推荐区块。

Curated recommendations, scenario navigation, and category overrides live in `data/curated.json`. It is the only file you need to edit by hand; do not modify generated recommendation sections directly.

**只改 `data/curated.json` 的 PR 不要提交生成文件。** `README.md`、`README_EN.md`、`CATALOG.md` 和 `data/repositories.json` 由每日 `update-catalog` 工作流统一刷新；随 PR 附带它们会产生大量噪音 diff，并与自动提交冲突。

**Pull requests that only touch `data/curated.json` should not include generated files.** `README.md`, `README_EN.md`, `CATALOG.md`, and `data/repositories.json` are refreshed by the daily `update-catalog` workflow; committing them alongside a curation change creates a large noise diff and conflicts with the automated commit.

提交前本地自检 / Check your change locally before submitting:

```bash
node scripts/validate-curated.mjs
```

它会校验分类名、双语字段，并通过 GitHub API 确认被引用的仓库公开、未归档且带有 `dsh-plugin` Topic。同样的检查会在 PR 上自动运行。

It validates category names and bilingual fields, and confirms through the GitHub API that every referenced repository is public, not archived, and carries the `dsh-plugin` topic. The same check runs automatically on pull requests.

## 更新数据 / Refreshing data

刷新最新 GitHub 数据并重新生成页面：

```bash
node scripts/update.mjs
```

仅使用现有快照重新生成页面：

```bash
node scripts/update.mjs --from-snapshot
```

刚创建的仓库会晚于 `data/repositories.json` 快照，因此 `--from-snapshot` 会提示该条目缺失并跳过它；这属于正常现象，用完整的 `node scripts/update.mjs` 验证即可。

A newly created repository is younger than the stored `data/repositories.json` snapshot, so `--from-snapshot` reports it as missing and skips it. That is expected — verify with a full `node scripts/update.mjs` run instead.

## 修改生成逻辑 / Changing the generator

改动 `scripts/` 时，请在 PR 中附带重新生成的 `README.md`、`README_EN.md` 和 `CATALOG.md`，以便审阅者看到输出变化。

When changing `scripts/`, include the regenerated `README.md`, `README_EN.md`, and `CATALOG.md` in the pull request so reviewers can see how the output changes.
