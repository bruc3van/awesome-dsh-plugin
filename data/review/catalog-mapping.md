# 市场目录安装映射 / Catalog install mappings

由 `node scripts/catalog-mappings.mjs --min-stars 5 --apply --write-report` 生成于 2026-11-20。

范围：schema 3 市场目录中尚无安装映射、且 ≥ 该星级门槛的仓库（`data/catalog-mapping-skips.json` 已裁决过的除外）。自动补充只接受「命令逐字来自 README」或「manifest 证明是本仓库插件」的条目：npm 包的 registry `repository` 必须指向本仓库；README 没有可复制命令时，以根 `package.json` / `cordis.patch.yml` 的 dsh 声明作为证据（npm 包存在则用包名，否则用仓库地址）。其余进入下方待裁决清单，供每日 AI 审核补齐。

- 本次扫描 / scanned: **93**
- 自动补充 / auto-applied: **59**（manifest 证据 20）
- 待裁决 / needs review: **34**

## 自动补充 / Auto-applied（59）

| 仓库 / Repo | ★ | 安装目标 / Targets | 证据 / Evidence |
| --- | ---: | --- | --- |
| [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 38643 | `github:alchaincyf/nuwa-skill` | README |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 29883 | `github:alchaincyf/huashu-design` | README |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 10590 | `npm:@wxg-prc-cpg/browser-skill-dsh-plugin` | README |
| [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 7363 | `github:MeteorNOX/DeepSeek-Balance-Whale-Widget` | README |
| [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | 6555 | `github:QingYunA/answer-me-with-html` | README |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | 5106 | `npm:dsh-esp32agent` | README |
| [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | 3827 | `npm:@agentscope-ai/reme-dsh-plugin` | README |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2909 | `npm:@zilliz/memsearch-dsh` | README |
| [oneclickvirt/ecs](https://github.com/oneclickvirt/ecs) | 2481 | `npm:dsh-plugin-goecs` | README |
| [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) | 2078 | `npm:cc-safety-net` | manifest@package.json (npm repository match) |
| [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 1864 | `npm:dsh-windows-mcp` | manifest@package.json (npm repository match) |
| [woniuniuniu/dsh-media-desk](https://github.com/woniuniuniu/dsh-media-desk) | 1570 | `npm:dsh-media-desk`<br>`npm:dsh-media-desk` | README |
| [LiPu-jpg/Openwrite](https://github.com/LiPu-jpg/Openwrite) | 999 | `npm:dsh-openwrite` | manifest@package.json (npm repository match) |
| [keli-wen/agy-staff](https://github.com/keli-wen/agy-staff) | 900 | `github:keli-wen/agy-staff` | README |
| [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) | 846 | `npm:dsh-marktext` | README |
| [chenxiachan/thoughtdag](https://github.com/chenxiachan/thoughtdag) | 797 | `npm:dsh-thoughtdag` | README |
| [Clearailhc/clearai-dsh](https://github.com/Clearailhc/clearai-dsh) | 702 | `npm:clearai-dsh@0.6.0`<br>`github:Clearailhc/clearai-dsh` | README |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | 678 | `github:adoresever/graph-memory#v1.6.0-beta.17` | README |
| [gitroomhq/postiz-agent](https://github.com/gitroomhq/postiz-agent) | 579 | `github:gitroomhq/postiz-agent#path:/plugins/dsh-postiz` | README |
| [alchaincyf/huashu-excel](https://github.com/alchaincyf/huashu-excel) | 474 | `github:alchaincyf/huashu-excel` | README |
| [zhuzhaoyun/Molio](https://github.com/zhuzhaoyun/Molio) | 451 | `npm:dsh-plugin-molio` | README |
| [oneclickvirt/oneclickvirt](https://github.com/oneclickvirt/oneclickvirt) | 384 | `github:oneclickvirt/oneclickvirt` | README |
| [omagents/omagents](https://github.com/omagents/omagents) | 360 | `npm:@omagents/omagents-dsh` | README |
| [chenkezhen480/dsh-world](https://github.com/chenkezhen480/dsh-world) | 350 | `npm:dsh-world` | manifest@package.json (npm repository match) |
| [Li-Evan/BloomTutor](https://github.com/Li-Evan/BloomTutor) | 323 | `github:Li-Evan/BloomTutor` | README |
| [huaguoxingkong/dsh-prompt-rewriter](https://github.com/huaguoxingkong/dsh-prompt-rewriter) | 289 | `npm:dsh-prompt-rewriter`<br>`npm:dsh-prompt-rewriter`<br>`github:huaguoxingkong/dsh-prompt-rewriter` | README |
| [Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) | 274 | `github:devin-axis/jev-dsh-decision` | manifest@package.json#dsh |
| [JayCRL/MobileVC](https://github.com/JayCRL/MobileVC) | 213 | `github:JayCRL/MobileVC` | README |
| [jaccen/Awesome-Gaussian-Skills](https://github.com/jaccen/Awesome-Gaussian-Skills) | 189 | `github:jaccen/awesome-gaussian-skills` | manifest@package.json#dsh |
| [AI4XE/Parallax](https://github.com/AI4XE/Parallax) | 136 | `npm:parallax-dsh` | manifest@package.json (npm repository match) |
| [SISCHOI/daruma](https://github.com/SISCHOI/daruma) | 121 | `npm:dsh-daruma` | README |
| [Elio896/dsh-familiar-memory](https://github.com/Elio896/dsh-familiar-memory) | 107 | `github:elio896/dsh-familiar-memory` | manifest@package.json#dsh |
| [Ethereal-Space-one/code2kb-agent-toolkit](https://github.com/Ethereal-Space-one/code2kb-agent-toolkit) | 85 | `npm:code2kb-dsh` | README |
| [fysh1010/mcp-server-fanqie](https://github.com/fysh1010/mcp-server-fanqie) | 57 | `npm:@fysh925/mcp-server-fanqie` | manifest@package.json (npm repository match) |
| [KurutoDenzeru/tersio](https://github.com/KurutoDenzeru/tersio) | 35 | `npm:@krtclcdy/tersio` | manifest@package.json (npm repository match) |
| [liangdabiao/dsh-realman-studio](https://github.com/liangdabiao/dsh-realman-studio) | 32 | `github:liangdabiao/dsh-realman-studio` | manifest@package.json#dsh |
| [YinkaiYu/chat-in-dsh](https://github.com/YinkaiYu/chat-in-dsh) | 30 | `npm:chat-in-dsh` | manifest@package.json (npm repository match) |
| [Darianliu23/dsh-stardew-blind-whale-farmer](https://github.com/Darianliu23/dsh-stardew-blind-whale-farmer) | 28 | `github:darianliu23/dsh-stardew-blind-whale-farmer` | manifest@package.json#dsh |
| [PivisYYY/pivis-health](https://github.com/PivisYYY/pivis-health) | 24 | `github:PivisYYY/pivis-health` | README |
| [LinYanZhi/dsh-mesh](https://github.com/LinYanZhi/dsh-mesh) | 22 | `npm:@linyanzhi/dsh-mesh` | README |
| [thawline/dsh-wechat-bridge](https://github.com/thawline/dsh-wechat-bridge) | 22 | `github:thawline/dsh-wechat-bridge` | README |
| [hyun20202023-ui/dsh-qfish](https://github.com/hyun20202023-ui/dsh-qfish) | 20 | `npm:qfish` | README |
| [kadaliao/dsh-bots](https://github.com/kadaliao/dsh-bots) | 18 | `npm:@kadaliao/dsh-bots` | manifest@package.json (npm repository match) |
| [02TJS/ProgressTarget](https://github.com/02TJS/ProgressTarget) | 15 | `npm:dsh-progress-target` | README |
| [antibrow/dsh-antibrow](https://github.com/antibrow/dsh-antibrow) | 13 | `github:antibrow/dsh-antibrow` | manifest@package.json#dsh |
| [Memorial-coder/dsh-remote-plugin](https://github.com/Memorial-coder/dsh-remote-plugin) | 12 | `github:Memorial-coder/dsh-remote-plugin` | README |
| [JiamingShi-JsPhys/chelate-shell](https://github.com/JiamingShi-JsPhys/chelate-shell) | 11 | `npm:chelate-shell` | manifest@package.json (npm repository match) |
| [martinbear1/dsh-wechat-remote](https://github.com/martinbear1/dsh-wechat-remote) | 11 | `github:martinbear1/dsh-wechat-remote` | manifest@package.json#dsh |
| [dsh-labs/kivotos](https://github.com/dsh-labs/kivotos) | 10 | `npm:kivotos` | README |
| [LUgABeEEE/minas-webdav](https://github.com/LUgABeEEE/minas-webdav) | 9 | `npm:dsh-minas-webdav` | README |
| [chanyuenpang/dsh-cindy-host](https://github.com/chanyuenpang/dsh-cindy-host) | 8 | `npm:dsh-cindy-host` | manifest@package.json (npm repository match) |
| [Imzl-zl/deepseek-harness-mobile](https://github.com/Imzl-zl/deepseek-harness-mobile) | 8 | `npm:dsh-mobile-connector`<br>`npm:dsh-mobile-connector` | README |
| [klarkxy/ds-dot](https://github.com/klarkxy/ds-dot) | 7 | `npm:ds-dot` | README |
| [meat-daemon-404/agent-immune](https://github.com/meat-daemon-404/agent-immune) | 6 | `npm:dsh-immune-system` | manifest@package.json (npm repository match) |
| [Panmax/dsh-next-step-suggestion](https://github.com/Panmax/dsh-next-step-suggestion) | 6 | `npm:dsh-next-step-suggestion` | README |
| [ziui1008/dsh-chat-pro](https://github.com/ziui1008/dsh-chat-pro) | 6 | `github:ziui1008/dsh-chat-pro` | manifest@package.json#dsh |
| [321sssrt-bit/STOP-PUSHING-SHIT](https://github.com/321sssrt-bit/STOP-PUSHING-SHIT) | 5 | `npm:dsh-stop-pushing-shit@0.1.3` | README |
| [afeack/dsh-mobile-harness](https://github.com/afeack/dsh-mobile-harness) | 5 | `npm:dsh-mobile-harness` | README |
| [Hariketsu/dsh-herdr-bridge](https://github.com/Hariketsu/dsh-herdr-bridge) | 5 | `npm:dsh-herdr-bridge` | README |

## 待裁决 / Needs review（34）

| 仓库 / Repo | ★ | 原因 / Why not automatic | README 提示 / Hint |
| --- | ---: | --- | --- |
| [reactive-resume/reactive-resume](https://github.com/reactive-resume/reactive-resume) | 45922 | no install command extracted; package.json declares no dsh bundle |  |
| [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | 37073 | no install command extracted; package.json declares no dsh bundle |  |
| [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 12818 | no install command extracted; package.json declares no dsh bundle |  |
| [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) | 8022 | no install command extracted; no package.json |  |
| [kunkundi/crossdesk](https://github.com/kunkundi/crossdesk) | 5073 | no install command extracted; no package.json |  |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | 3796 | no install command extracted; no package.json |  |
| [anywhere-labs/Agents-Anywhere](https://github.com/anywhere-labs/Agents-Anywhere) | 3585 | no install command extracted; no package.json |  |
| [chuspeeism/dashi-taskboard](https://github.com/chuspeeism/dashi-taskboard) | 3510 | no install command extracted; package.json declares no dsh bundle |  |
| [agentic-os-org/ANOLISA](https://github.com/agentic-os-org/ANOLISA) | 682 | no install command extracted; no package.json |  |
| [chainbase-labs/Agentkey](https://github.com/chainbase-labs/Agentkey) | 652 | no install command extracted; package.json declares no dsh bundle |  |
| [aerovato/operator-memory](https://github.com/aerovato/operator-memory) | 519 | no install command extracted; package.json declares no dsh bundle |  |
| [runzhliu/welink](https://github.com/runzhliu/welink) | 325 | no install command extracted; no package.json |  |
| [LiarMTTT/TavernWeave](https://github.com/LiarMTTT/TavernWeave) | 226 | no install command extracted; no package.json | dsh plugin --profile &lt;profile&gt; add &lt;本地路径\|tarball\|git 地址\|包名&gt; ； desktop profile 由 Desktop shell 管理，不要直接调用 CLI。 |
| [tencentmusic/modus](https://github.com/tencentmusic/modus) | 217 | no install command extracted; no package.json |  |
| [AIpRoBuilder/FlowX](https://github.com/AIpRoBuilder/FlowX) | 204 | no install command extracted; no package.json |  |
| [Finderchangchang/brewreel](https://github.com/Finderchangchang/brewreel) | 189 | no install command extracted; no package.json |  |
| [regrevia/Envoy](https://github.com/regrevia/Envoy) | 158 | no install command extracted; no package.json |  |
| [tiwe0/GeoChat](https://github.com/tiwe0/GeoChat) | 128 | no install command extracted; package.json declares no dsh bundle |  |
| [fangqian616/consensus-pipeline](https://github.com/fangqian616/consensus-pipeline) | 120 | no install command extracted; no package.json | npx -p @deepseek-ai/dsh dsh plugin --profile web add file:./consensus-pipeline/dsh-plugin |
| [sysevol-ai/CodeNib](https://github.com/sysevol-ai/CodeNib) | 102 | unsupported source url:git+https://github.com/sysevol-ai/CodeNib.git#main&amp;path:/plugins/dsh; no package.json | dsh plugin --profile web add "git+https://github.com/sysevol-ai/CodeNib.git#main&amp;path:/plugins/dsh" |
| [Old-Friends-Gathering/sedimem](https://github.com/Old-Friends-Gathering/sedimem) | 101 | no install command extracted; package.json declares no dsh bundle |  |
| [justlovemaki/PrismFlowAgent](https://github.com/justlovemaki/PrismFlowAgent) | 98 | no install command extracted; package.json declares no dsh bundle | dsh plugin --profile web add --allow-build=sharp &lt;path-or-url-to-prismflow-dsh.tgz&gt; |
| [0xLyn77/ProMentor](https://github.com/0xLyn77/ProMentor) | 82 | no install command extracted; no package.json |  |
| [HiSeax/dsh-windows-superagent](https://github.com/HiSeax/dsh-windows-superagent) | 28 | no install command extracted; package.json declares no dsh bundle | dsh plugin --profile superagent add "link:$PWD\\packages\\dsh-windows-superagent" |
| [oceanjustinlin/qimen](https://github.com/oceanjustinlin/qimen) | 28 | npm xuanxue-dsh declares no repository (authorship unproven); package.json declares no dsh bundle | dsh plugin --profile web add xuanxue-dsh 安装；同样尚未发布到 npm。 |
| [zzzgydi/verge-browser](https://github.com/zzzgydi/verge-browser) | 28 | no install command extracted; no package.json |  |
| [stlin256/DSH-Harmony](https://github.com/stlin256/DSH-Harmony) | 20 | no install command extracted; package.json declares no dsh bundle |  |
| [Chenamel/deterministic-pixel-art](https://github.com/Chenamel/deterministic-pixel-art) | 16 | no install command extracted; no package.json |  |
| [alibaba-damo-academy/yugoo-design](https://github.com/alibaba-damo-academy/yugoo-design) | 10 | no install command extracted; package.json declares no dsh bundle |  |
| [wudidiandian/dsh-solo](https://github.com/wudidiandian/dsh-solo) | 8 | no install command extracted; package.json declares no dsh bundle |  |
| [liaty8/dsh-muteki-preset](https://github.com/liaty8/dsh-muteki-preset) | 6 | no install command extracted; no package.json |  |
| [Zoragyx/dsh-phone-pair](https://github.com/Zoragyx/dsh-phone-pair) | 6 | no install command extracted; no package.json |  |
| [hongmaple0820/radarforge](https://github.com/hongmaple0820/radarforge) | 5 | no install command extracted; package.json declares no dsh bundle |  |
| [LeoLourson/MacroStress-DSH](https://github.com/LeoLourson/MacroStress-DSH) | 5 | no install command extracted; no package.json |  |

