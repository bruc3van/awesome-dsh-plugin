# 市场目录安装映射 / Catalog install mappings

由 `node scripts/catalog-mappings.mjs --min-stars 5 --apply --write-report` 生成于 2026-11-19。

范围：schema 3 市场目录中尚无安装映射、且 ≥ 该星级门槛的仓库（`data/catalog-mapping-skips.json` 已裁决过的除外）。自动补充只接受「命令逐字来自 README」或「manifest 证明是本仓库插件」的条目：npm 包的 registry `repository` 必须指向本仓库；README 没有可复制命令时，以根 `package.json` / `cordis.patch.yml` 的 dsh 声明作为证据（npm 包存在则用包名，否则用仓库地址）。其余进入下方待裁决清单，供每日 AI 审核补齐。

- 本次扫描 / scanned: **21**
- 自动补充 / auto-applied: **19**（manifest 证据 4）
- 待裁决 / needs review: **2**

## 自动补充 / Auto-applied（19）

| 仓库 / Repo | ★ | 安装目标 / Targets | 证据 / Evidence |
| --- | ---: | --- | --- |
| [keli-wen/cospan](https://github.com/keli-wen/cospan) | 21 | `github:keli-wen/cospan` | README |
| [Jaylor-Wang/dsh-awesome-optimizer](https://github.com/Jaylor-Wang/dsh-awesome-optimizer) | 10 | `npm:dsh-awesome-optimizer` | README |
| [stallenlu/dsh-freellmapi](https://github.com/stallenlu/dsh-freellmapi) | 6 | `github:stallenlu/dsh-freellmapi` | README |
| [taxueseek/dsh-suggestion-chips](https://github.com/taxueseek/dsh-suggestion-chips) | 6 | `npm:dsh-suggestion-chips` | README |
| [bennett-dsh/dsh-plugin-usage](https://github.com/bennett-dsh/dsh-plugin-usage) | 5 | `github:bennett-dsh/dsh-plugin-usage#v0.6.0` | README |
| [ChimeSky/dsh-a2ui](https://github.com/ChimeSky/dsh-a2ui) | 5 | `github:ChimeSky/dsh-a2ui#v0.3.1` | README |
| [cinderzhan/dsh-media-workbench](https://github.com/cinderzhan/dsh-media-workbench) | 5 | `github:cinderzhan/dsh-media-workbench` | manifest@package.json#dsh |
| [contraliz/dsh-occlick](https://github.com/contraliz/dsh-occlick) | 5 | `github:contraliz/dsh-occlick`<br>`github:contraliz/dsh-occlick` | README |
| [dusbin/dsh-multi-tenant](https://github.com/dusbin/dsh-multi-tenant) | 5 | `github:dusbin/dsh-multi-tenant` | manifest@package.json#dsh |
| [Lng-ux/dsh-nebula-mind](https://github.com/Lng-ux/dsh-nebula-mind) | 5 | `npm:dsh-nebula-mind` | manifest@package.json (npm repository match) |
| [lonelycrab888/dsh-remote-dc](https://github.com/lonelycrab888/dsh-remote-dc) | 5 | `npm:dsh-remote-dc@0.1.1` | README |
| [lqshow/dsh-wechat-studio](https://github.com/lqshow/dsh-wechat-studio) | 5 | `npm:dsh-wechat-studio`<br>`npm:dsh-wechat-studio` | README |
| [seewhydee/dsh-emacs-bridge](https://github.com/seewhydee/dsh-emacs-bridge) | 5 | `npm:dsh-emacs-bridge` | README |
| [seolhw/dsh-guild](https://github.com/seolhw/dsh-guild) | 5 | `github:seolhw/dsh-guild` | README |
| [shenkonghui/dsh-llm-acp](https://github.com/shenkonghui/dsh-llm-acp) | 5 | `github:shenkonghui/dsh-llm-acp` | README |
| [TianzeLuo/dsh-super-agent](https://github.com/TianzeLuo/dsh-super-agent) | 5 | `github:TianzeLuo/dsh-super-agent` | README |
| [timho1047/dsh-stream-focus](https://github.com/timho1047/dsh-stream-focus) | 5 | `npm:dsh-stream-focus` | README |
| [xCube007/dsh-message-rewind](https://github.com/xCube007/dsh-message-rewind) | 5 | `npm:dsh-message-rewind` | README |
| [zyd232/dsh-compaction-policy](https://github.com/zyd232/dsh-compaction-policy) | 5 | `npm:dsh-compaction-policy` | manifest@package.json (npm repository match) |

## 待裁决 / Needs review（2）

| 仓库 / Repo | ★ | 原因 / Why not automatic | README 提示 / Hint |
| --- | ---: | --- | --- |
| [playinginzzz/Fairy-DSH-compat](https://github.com/playinginzzz/Fairy-DSH-compat) | 5 | no install command extracted; no package.json | dsh plugin --profile web add &lt;文件路径&gt; 装 |
| [WaterDJiang/wtt-dsh-plugin](https://github.com/WaterDJiang/wtt-dsh-plugin) | 5 | no install command extracted; no package.json |  |

