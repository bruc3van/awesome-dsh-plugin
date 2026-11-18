# 2026-11-19 分类重新标定记录（Category recalibration）

## 背景与根因

目录分类长期偏差：`agents-workflows`（Agent、自动化与工作流）吞掉了 36.7%（9,982 / 27,220）的已核准仓库。根因在 [scripts/categories.mjs](../../scripts/categories.mjs) 的模式匹配——`harness` 是 `agents-workflows` 规则的触发词，而 **DSH 本身就是一个 harness**，"DeepSeek Harness" 样板语出现在几乎所有插件描述里。实测 9,982 条 agents-workflows 条目中 **7,427 条（74.4%）仅因 `harness` 一词命中**，另有约 300 条仅因 `loop`/`budget`/`approval` 等泛词误入；真正含 agent/workflow 语义的只有约 2,263 条。

由于 [scripts/render.mjs](../../scripts/render.mjs)（目录页）与 [scripts/market-pool.mjs](../../scripts/market-pool.mjs)（下游市场投影）走同一个 `categoryFor` / `categoryForRepo`，规则与 override 修正一处生效、处处生效：`catalog/*.md`、`CATALOG.md`、README 思维导图、`data/market-catalog.json`（dsh-market-pro「全部」）与 npm 包 **`awesome-dsh-plugin-feed`**。

## 方法

1. **移除 `harness` 触发词**（2026-11-18）：agents-workflows 36.7% → 9.4%（2,555 条），挤出的 ~7,400 条落入 utilities，问题平移。
2. **全量语义复审**（2026-11-18/19）：把 agents-workflows 池全部 9,980 条（name + description（含 `description_overrides`）+ topics + stars）切成 15 个批次文件，以 [Temp/category-recalibration/RUBRIC.md](../../../Temp/category-recalibration/RUBRIC.md)（十个类目定义 + 10 条难点边界，重点：**样板词（AI/agent/harness/DSH/助手）不构成分类依据，只看核心功能**）为标尺，由 15 个并行评审代理逐条裁决（不抽样）。合并校验：9,980/9,980 全覆盖、零重复、零非法类目（[merge-decisions.mjs](../../../Temp/category-recalibration/merge-decisions.mjs)）。裁决全文见 [2026-11-19-category-recalibration-decisions.json](./2026-11-19-category-recalibration-decisions.json)。
3. **v2.1 关键词精炼**：用裁决结果做数据驱动的触发词挖掘（[mine-keywords.mjs](../../../Temp/category-recalibration/mine-keywords.mjs)）：拉丁词 + CJK 2–4 元组，在裁决集上测精度（capture/(capture+late)，late = 裁决为规则序列更后类目的行），只有 **精度 ≥0.93、capture ≥15、语料波及 ≤20** 且人工抽样语义验证通过的词才晋级进规则。第一轮候选 713 个，人工核样本后**拒绝**了全部泛词（`实时`/`plan`/`screen`/`window`/`bar`/裸 `auth`——会子串命中 "author"——及 `statistics`/`消息`/`聊天`/`思考`/`推理`/`动画`/`显示`/`账户`/`monitor`/`animation` 等）。两轮全语料回归测得：裸 `skill`/`install`/`update` 曾在更大语料上误迁 4,195 条非嫌疑仓库（memsearch 因顺带提及 "Agent Skills" 被拽进生态类、简历工具被 "skills" 字样中招），全部修剪为复合词形式（`skills?[- ]?manager` / `插件管理` / `技能管理`）或删除。最终晋级约 60 个词（usage/token/余额/计费家族 → ui-experience；lark/feishu/飞书/微信/wechat → integrations；tts/asr/speech → media-vision；proxy/failover/auth/oauth/secrets → developer-tools；compaction/compression → agents-workflows；插件管理/技能管理复合词 → ecosystem-resources）。修剪后全语料非嫌疑迁移 4,195 → 1,995，残余流动抽样约 80–85% 语义正确（多为 web 端用量仪表盘 → ui-experience 的正确修正）。
4. **落地**：裁决与 v2.1 模式结果不一致的 **5,729 条**写入 [data/curated.json](../../data/curated.json) 的 `category_overrides`（[apply-recalibration.mjs](../../../Temp/category-recalibration/apply-recalibration.mjs)，写前备份于 Temp/category-recalibration/curated.backup.json）；`category_overrides` 总量 78 → 5,807。

## 配套改造

- [scripts/validate-curated.mjs](../../scripts/validate-curated.mjs)：live 模式改为**快照优先核查**——快照能证明的引用（存在性、dsh-plugin topic、archived）本地校验，只有快照里没有的引用才走 GitHub API。否则 5,807 条 override 的逐条 API 并发会打爆二级限流。
- [scripts/render.mjs](../../scripts/render.mjs) `VOLUME_SPLITS`：校准后 ui-experience 成为最大类目（9,115 条 / ~2.6 MB），原 A–L / M–Z 两册均超 850 KB 告警线、A–L 越过 GitHub 1 MB 渲染悬崖，按 owner 首字母字节占比重拆为 **A–F / G–L / M–S / T–Z** 四册（27.7% / 24.0% / 24.3% / 24.0%），旧 `ui-experience-m-z.md` 由 merge 清理。

## 结果

校准后分布（27,220 条已核准仓库，市场口径）：

| 类目 | 之前 | 之后 |
| --- | ---: | ---: |
| agents-workflows | 9,982（36.7%） | 2,222（8.2%） |
| ui-experience | 5,978（22.0%） | 9,115（33.5%） |
| utilities | 1,623（6.0%） | 3,459（12.7%） |
| web-browser | 3,363（12.4%） | 2,799（10.3%） |
| developer-tools | 1,261（4.6%） | 2,882（10.6%） |
| media-vision | 1,365（5.0%） | 1,726（6.3%） |
| integrations-sharing | 1,208（4.4%） | 1,558（5.7%） |
| knowledge-research | 1,249（4.6%） | 1,467（5.4%） |
| ecosystem-resources | 620（2.3%） | 1,329（4.9%） |
| multi-agents | 571（2.1%） | 663（2.4%） |

抽样对错验证（原诊断误标样本）：`linshufan21/dsh-api-monitor`（API 余额监测）→ developer-tools ✓；`heartleo/hn-cli`、`klarkxy/zhihu-search` → web-browser ✓。

## 验证

- `validate-curated.mjs --from-snapshot`：0 errors（1 条既有 warning：lengmoXXL/dsh-git archived，与本次无关）。
- `node scripts/merge.mjs`：28,695 条 / 17 册，无尺寸告警；`merge.mjs --check` 通过。
- `validate-packages.mjs` / `validate-market-catalog.mjs` 通过（27,487 条市场目录）。
- `validate-curated.mjs`（live API 模式，即 CI 口径）：0 errors。
- `publish-npm-feed.mjs` 干跑成功，market-catalog 19.8 MB，抽检条目均带校正类目。
- host-market 订阅索引（`data/dsh-market-index.json`）无需重建：插件条目不携带 per-plugin category，`metadata.categories` 标题映射 10 key 齐全，客户端从 market-catalog 取校正类目。

### 变基期间顺带修复的存量问题（每日快照刷新暴露，live 校验揪出）

- 改名同步 key：`yeweiliang7063/dsh-tcm` → `dsh-tcm-xueli`、`DanceElephant/dsh-codex-bridge` → `dsh-codex-skill-bridge`（override key）、`webkubor/dsh-museav-assets` → `museav-ai/dsh-museav-assets`（approved + override + packages 映射内 install/source/command 的 slug）
- 上游删除/转私，按约定移除审批与映射：`RitchieLeung/dsh-plugin-bot-issue`、`best0127/dsh-session-workbench`、`royenheart/dsh-plugin-perf`、`wsl043/dsh-chat-manager`
- 上游自行摘除 `dsh-plugin` topic（退出快照生态）：`01men/ybkkasi` 映射移除

## 遗留与后续

- **2 条与既有 override 的冲突已按本次复审裁决落定**（旧 override 均为 harness 时代的产物，描述证据支持复审结论）：
  - `lcestou/dsh-oh-my-claude` → `developer-tools`（核心功能：把 Claude Code CLI 作为模型 provider 接入，属模型接入/网关管理）
  - `chumingjun/dsh-harness-one` → `multi-agents`（multi-agent DAG 编排本体，topics 带 `multi-agent`）
- ui-experience 体积增长快（用量/计费面板是生态主流形态），下次审核合并时关注四册字节占比，逼近 850 KB 再重拆。
- agents-workflows / knowledge-research / web-browser / multi-agents 无高纯度触发词可挖（语义弥散），未来新仓仍靠模式 + 每日审核时按需 override；Temp/ 下的批次与挖掘脚本不入库（.gitignore 已排除 Temp/）。
- 订阅索引体积 4.85 MB（官方网关 5 MiB 上限的 92%）——与本次无关，但已连续告警，扩容前需与官方确认限额。
