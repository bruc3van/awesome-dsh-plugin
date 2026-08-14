# Awesome DSH Plugins

> 用 30 秒找到适合你的 DeepSeek Harness 插件。
> 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Repositories](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbruc3van%2Fawesome-dsh-plugin%2Fmain%2Fdata%2Frepositories.json&query=%24.total_count&label=repositories&color=2563eb)
[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[English](./README_EN.md) · [浏览全量目录](./CATALOG.md) · [Star Top 100](./TOP100.md) · [推荐一个插件](./CONTRIBUTING.md) · [机器可读数据](./data/repositories.json)

**如果这个列表帮你找到一个有用的插件，欢迎点一个 Star ⭐。它能帮助更多 DSH 用户发现这个生态。**

## 你想让 DSH 做什么？

| 我想要…… | 推荐从这里开始 | 为什么 |
| --- | --- | --- |
| 想要独立的桌面客户端，而不是浏览器标签页 | [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 开箱即用的桌面体验：自动复用本机已运行的实例，或用内置运行时一键启动，无需安装 Node.js/CLI；支持远程实例连接、托盘常驻和异常恢复。 |
| 更方便地管理和发现插件 | [plugin-registry](https://github.com/vlln/plugin-registry) | 在浏览器面板中管理 repository 插件，并提供开发引导。 |
| 把现有业务代码转成 Agent 可调用能力 | [Code2Skill](https://github.com/leechen298/Code2Skill) | 从用户授权的前端、后端或全栈源码生成 Function、MCP Tools、业务 Skills 和离线测试，并可作为 DSH Bundle 安装。 |
| 看清后台任务进度 | [dsh-task-status](https://github.com/vlln/dsh-task-status) | 在对话页显示任务进度和实时输出 tail。 |
| 定时或按事件唤醒 Agent | [dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 覆盖周期任务，以及文件、命令、HTTP、进程和 Webhook 事件。 |
| 请求经常因网络波动或超时中断，不想每次都手动补一句「继续」 | [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | 监听实时事件流，回合因非人为原因失败后自动补发「继续」：错误分类只恢复临时性故障，自适应退避避免对故障上游狂轰滥炸，支持模板化继续文本与浏览器通知，参数可在插件设置卡片中调整。 |
| 更顺手地阅读和操作长对话 | [dsh-navbar](https://github.com/vlln/dsh-navbar) · [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 快速跳转用户消息节点，并像 Codex 一样选中文本批注。 |
| 像 Codex 一样用 @ 引用工作区文件 | [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | 在输入框内按 @ 搜索工作区文件并把内容附进 prompt，免去手动复制粘贴。 |
| 在对话中生成交互式界面 | [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 在回复中渲染图表、表单、测验、Mermaid 和 3D 场景。 |
| 让 Agent 操作真实设计画布 | [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | 创建、编辑、预览和验证可交互的多页面 OpenPencil 设计稿。 |
| 给 DSH 增加视觉理解能力 | [modlens](https://github.com/liustack/modlens) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) · [dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | modlens 把图片转成 OCR/布局/语义结构化证据；dsh-vision-toolkit 覆盖图片问答、长截图 OCR、UI 还原与像素对比；纯文本模型也可经 Luna 转写桥接继续处理图片。 |
| 让 Agent 自己搜索网页和 X，答案带引用 | [modsearch](https://github.com/liustack/modsearch) | 在对话中直接搜索、抓取并返回带引用的结构化证据，纯文本模型也能基于来源回答。 |
| 在开发对话里直接检查和操作当前网页 | [dsh-browser-bridge](https://github.com/ycp424c/dsh-browser-bridge) | 把完整 DSH Web 嵌进 Chrome 侧边栏，按 prompt 显式授权当前标签页，DSH 能在同一对话里读取 DOM、样式、console 报错并操作页面，无需另开浏览器专用对话。 |
| 把侧边栏升级成完整工作台 | [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 内置文件渲染编辑、终端、Git 与子代理，并支持第三方扩展注册新 Tab。 |
| 在终端里用 Claude Code 风格界面 | [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | 全屏交互终端：状态行、思考流展开、上下文/TPS 仪表；tianshu 版本还内置 TDD 与证据门工作流。 |
| 给 DSH 加上可审计的跨会话记忆 | [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) · [dsh-mneme](https://github.com/modusensus/dsh-mneme) | 五轨记忆 + 技能自进化；或 SQLite + 可编辑 Markdown 的记忆镜像，记忆透明可改。 |
| 回合结束时收到桌面通知 | [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 按结果类型（成功/失败）控制通知，支持关键词过滤，长时间任务无需盯屏。 |
| 回退对话与工作区状态 | [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 基于持久化 Change Ledger 回退到任意早期回合，对话与代码状态一起恢复。 |
| 给工作区增加一个陪伴型宠物 | [whale-girl](https://github.com/vlln/whale-girl) | 可拖拽、投喂和玩耍的积累型鲸鱼娘桌面伙伴。 |
| 把其他工具的历史会话搬进 DSH | [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 全保真导入 Claude Code / Codex / ChatGPT / Cursor 的聊天记录（含工具调用/思考块），导入后可直接续聊。 |
| 换皮肤、自定义背景 | [dsh-skin](https://github.com/KinGao294/dsh-skin) · [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | dsh-skin 一键切换多套 --dsw-alias-* 配色并支持半透明壁纸（Codex 风格）；dsh-deep-whale 是生态内最受欢迎的鲸鱼娘皮肤系列（CC BY-NC-SA，不可商用）。 |
| 查看 Token 用量与费用 | [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) · [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | 按官方政策自动计价（含峰谷时段），逐条消息记账，显示账号余额；界面语言自动切换人民币/美元。 |
| 让外部 Agent 驱动 Harness 执行任务 | [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | 在 Harness 内部启动 MCP server，让任意 MCP 客户端（如 Hermes）下发任务给 Harness 执行，实现「大脑 + 胳膊」协作。 |
| 从外部设备安全访问本机 Harness | [dsh-remote](https://github.com/flymysql/dsh-remote) | 打印当前实例的精确连接命令：SSH 本地转发、autossh 保活、反向隧道（NAT 友好）与带 --trusted-host 的反向代理，设置页一键复制；遵循官方安全设计，不碰 0.0.0.0。 |

## 第一次使用 DSH 插件？
- [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) — 完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究的技能路由包。
- [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - Complete reverse-skill pack (85 SKILL.md) as a DeepSeek Harness Cordis plugin: reverse engineering, authorized pentesting and security-research skill router.

不需要一次装很多。先选一个与你当前问题最接近的组合：

### 日常体验套装

先解决插件管理、后台状态和长对话导航这三个最常见的问题。

[plugin-registry](https://github.com/vlln/plugin-registry) · [dsh-task-status](https://github.com/vlln/dsh-task-status) · [dsh-navbar](https://github.com/vlln/dsh-navbar)

### 自动化套装

同时拥有定时循环和事件驱动唤醒，适合长时间、无人值守任务。

[dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel)

### 视觉与搜索套装

让纯文本模型看得见、搜得到：图片结构化证据 + 带引用的网页搜索，配合原生视觉工具箱覆盖更多视觉任务。

[modlens](https://github.com/liustack/modlens) · [modsearch](https://github.com/liustack/modsearch) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)

### 创作与界面套装

让 Agent 生成交互式 UI、操作真实设计画布，并理解视觉内容。

[dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)

### 记忆与持续运行套装

沉淀可审计的跨会话记忆，并在回合中断后自动续跑，适合长时间无人值守项目。

[dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) · [dsh-mneme](https://github.com/modusensus/dsh-mneme) · [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue)

## 编辑推荐

这里不是按 Stars 自动排名。我们优先选择解决明确问题、说明完整、仍在维护且具有代表性的项目。收录不等于安全或兼容性背书。

### [dsh-desktop — DSH 的独立桌面客户端](https://github.com/bruc3van/dsh-desktop)

社区维护的非官方桌面客户端，直接加载官方 Web UI：自动复用本机已运行的实例，也可用安装包内置的 dsh 运行时一键启动，无需额外安装 Node.js 或 CLI；支持智能连接、远程实例连接、托盘常驻和异常恢复。

`桌面客户端` `开箱即用` `智能连接`

### [plugin-registry — 从看仓库到真正管理插件](https://github.com/vlln/plugin-registry)

面向普通用户的可视化插件管理入口，同时给开发者提供 make-dsh-plugin 引导。适合第一次进入 DSH 插件生态的人。

`新手友好` `插件管理` `开发引导`

### [DSH-better-sidebar — 侧边栏的完整工作台](https://github.com/omdsh-dev/DSH-better-sidebar)

目前最受欢迎的侧边栏增强（460+ Star）：内置文件渲染编辑、终端、Git 与子代理，并支持第三方扩展注册新 Tab，把侧边栏变成日常开发的主界面。

`侧边栏` `工作台` `可扩展`

### [dsh-sentinel — 让 Loop 从定时升级为事件驱动](https://github.com/fuhefei/dsh-sentinel)

监听文件、命令、HTTP、进程或 Webhook，在条件满足时唤醒 DSH。适合自动化监控、长任务和无人值守工作流。

`事件驱动` `持久监控` `自动化`

### [dsh-task-status — 不再猜后台任务跑到哪了](https://github.com/vlln/dsh-task-status)

把后台任务进度和实时输出 tail 放回对话页面，尤其适合构建、下载、测试等长时间命令。

`后台任务` `实时输出` `可观察性`

### [dsh-notification — 回合完成桌面通知](https://github.com/omdsh-dev/dsh-notification)

回合完成后发送桌面通知，按成功/失败等结果分别控制，支持关键词包含/排除规则；长时间任务不用一直盯着页面。

`桌面通知` `无人值守` `关键词规则`

### [dsh-annotation — 像 Codex 一样批注对话内容](https://github.com/omdsh-dev/dsh-annotation)

选中文字、添加批注并随消息发送，回复可以逐条对照 Annotation，适合审稿、代码评审和精确反馈。

`批注` `精确反馈` `零核心改动`

### [dsh-at-file — Codex 风格的 @ 文件引用](https://github.com/omdsh-dev/dsh-at-file)

在输入框里按 @ 搜索工作区文件，把内容直接附进 prompt，不用手动复制粘贴；官方 bundle，零核心改动，与 navbar/annotation 一起补全长对话体验。

`@file` `工作区` `输入体验`

### [dsh-genui — 让回复变成可交互界面](https://github.com/omdsh-dev/dsh-genui)

在对话中直接呈现图表、表单、测验、Mermaid、3D 场景，并把用户操作重新送回模型。

`生成式 UI` `交互` `可视化`

### [DSH OpenPencil — 让 Agent 操作真实设计画布](https://github.com/ZSeven-W/dsh-openpencil)

连接 DSH 与 OpenPencil，让 Agent 理解画布结构、节点和组件关系，直接创建、修改、预览并验证可编辑的多页面设计，而不是只返回一张图片。

`设计画布` `多页面` `可编辑`

### [modlens — 把图片变成结构化证据的视觉插件](https://github.com/liustack/modlens)

生态内 Star 最高的第三方插件（900+ Star，MIT）：粘贴图片即可得到带 OCR、布局与语义的结构化 JSON 证据，让纯文本模型也能可靠地看图；配套 Web UI，与 modsearch 同一作者。

`视觉` `OCR` `结构化证据`

### [modsearch — 网页搜索与引用证据桥](https://github.com/liustack/modsearch)

让 DSH 直接搜索网页和 X，返回带引用的结构化 JSON 证据（搜索/抓取/引用），纯文本模型也能基于证据回答；与 modlens 组成「看」+「搜」组合。

`搜索` `引用` `证据`

### [dsh-vision-toolkit — 给纯文本模型补上视觉工具箱](https://github.com/Anionex/dsh-vision-toolkit)

覆盖图片问答、长截图 OCR、UI 还原、视觉定位、像素对比和 Artifacts，适合前端与视觉任务。

`视觉理解` `OCR` `UI 还原`

### [whale-girl — 陪你 Vibe Coding 的鲸鱼娘](https://github.com/vlln/whale-girl)

可拖拽、投喂和玩耍的 DSH Web GUI 桌面宠物，为长时间 Agent 工作增加一点陪伴感。

`桌面宠物` `陪伴` `Web UI`

### [dsh-mneme — 记忆主权还给你：可读可改的跨会话记忆](https://github.com/modusensus/dsh-mneme)

SQLite + 可人工编辑的 Markdown 镜像，记忆不再黑盒；autoDream 后台自动去重/合并/裁决，越用越精炼。记忆这回事不该让 agent 一个人说了算。

`记忆主权` `跨会话记忆` `autoDream`

### [dsh-memory-evolve — 跨会话记忆与后台自我进化](https://github.com/csyangwen/dsh-memory-evolve)

纯插件实现的五轨长期记忆：git 分支感知、回合内自我审查、技能自我进化与技能管理器、四轨待办与会话搜索——零核心修改、零运行时依赖，卸载即净。

`长期记忆` `自进化` `零依赖`

### [dsh-TUI — 给 DSH 补上全屏终端体验](https://github.com/ccch1mneyyy/dsh-TUI)

Claude Code 风格的全屏交互终端插件：像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条与 TPS 仪表，npm 一键安装，为偏爱 CLI 的用户补上 DSH 官方尚缺的 TUI 体验。

`终端 TUI` `全屏交互` `CLI 优先`

### [dsh-tianshu-tui — 终端 UI + 工程证据门工作流](https://github.com/huiliyi37/dsh-tianshu-tui)

官方 Harness 上的交互式终端 UI（Apache-2.0）：在 TUI 之外内置 TDD 与「证据门」等工作流，把一次性多 Agent 调度升级为可治理的工程过程。

`终端 TUI` `TDD` `证据门`

### [dsh-web-ui — DSH Web UI 插件与皮肤合集](https://github.com/zhu1090093659/dsh-web-ui)

一站式功能合集：任务看板、Git 关系图、侧边面板、远程移动端界面、桌面宠物、实时 Token 用量统计与皮肤中心，一次安装覆盖多个常见的界面与体验诉求。注意：仓库未声明许可证。

`功能合集` `皮肤中心` `移动端`

### [dsh-auto-continue — 请求中断后自动「继续」](https://github.com/HsiangNianian/dsh-auto-continue)

网络波动、超时或宿主崩溃导致回合失败后，自动向会话发送「继续」续跑：错误分类（认证/余额等永久性错误跳过）、自适应退避、模板化继续文本与浏览器通知，全部可在插件设置卡片中调整，无人值守也能自己爬起来。

`自动续跑` `无人值守` `错误分类`

## 社区热度榜（Star 排序）

按 Star 排序的社区热度参考，经人工复核后不定期更新；蹭 `dsh-plugin` Topic 的非插件仓库已剔除（清单见 [data/curated.json](./data/curated.json)）。完整榜单见 [TOP100.md](./TOP100.md)；排名反映受欢迎程度，不代表质量、兼容性或安全背书。

| # | 项目 | ⭐ Stars | License | 更新 |
| ---: | --- | ---: | --- | --- |
| 1 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | 1126 | — | 2026-08-14 |
| 2 | [liustack/modlens](https://github.com/liustack/modlens) | 930 | MIT | 2026-08-14 |
| 3 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 580 | MIT | 2026-08-14 |
| 4 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 466 | MIT | 2026-08-14 |
| 5 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | 330 | — | 2026-08-14 |
| 6 | [morluto/rea](https://github.com/morluto/rea) | 290 | MIT | 2026-08-14 |
| 7 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 254 | MIT | 2026-08-14 |
| 8 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 240 | — | 2026-08-14 |
| 9 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | 169 | — | 2026-08-14 |
| 10 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 119 | BSD-3-Clause | 2026-08-14 |
| 11 | [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | 105 | — | 2026-08-14 |
| 12 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | 98 | Apache-2.0 | 2026-08-14 |

## 最近加入生态

人工筛选的近期新项目，不定期更新：

| 项目 | 简介 | 创建日期 |
| --- | --- | --- |
| [mbj733/dsh-hermes-memory](https://github.com/mbj733/dsh-hermes-memory) | DSH (DeepSeek Harness) agent preset + plugin: Hermes-style cross-session memory & autonomous skill learning. | 2026-08-14 |
| [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | Role-based model routing plugin for DeepSeek Harness: planner/subagent roles plus a settings card and composer summary | 2026-08-14 |
| [Yee-h/dsh-zen-proxy](https://github.com/Yee-h/dsh-zen-proxy) | dsh plugin: in-process proxy that injects official OpenCode Zen client headers, enabling Zen free models in dsh without the 429 FreeUsageLimitError | 2026-08-14 |
| [khiqwq/dsh-credentials-system](https://github.com/khiqwq/dsh-credentials-system) | System-bound encrypted credential provider for DeepSeek Harness | 2026-08-14 |
| [CodePrometheus/dsh-observability](https://github.com/CodePrometheus/dsh-observability) | Observability for DeepSeek Harness (dsh), use the OpenTelemetry Protocol | 2026-08-14 |
| [mixin-ai/dsh-file-changes](https://github.com/mixin-ai/dsh-file-changes) | DeepSeek Harness web plugin: per-turn file-change panel with diff viewing and filesystem reveal | 2026-08-14 |
| [pineapple880066/dsh-desktop-pets](https://github.com/pineapple880066/dsh-desktop-pets) | Codex-style desktop pets for DeepSeek Harness (dsh-plugin) | 2026-08-14 |
| [sherconan/dsh-web-recon](https://github.com/sherconan/dsh-web-recon) | 网页系统侦察 · DeepSeek Harness 插件：摸清一个网页系统怎么运作，只摸一次。抓真实接口与可访问性树，固化成可复用的作战手册。零依赖，不用 Playwright。 | 2026-08-14 |

## 为什么维护这个列表？

- **面向使用者，而不是爬虫：** 从“我想完成什么”出发，而不是让你阅读几百行仓库名称。
- **人工推荐 + 全量索引：** 首页提供选择建议，[CATALOG.md](./CATALOG.md) 保留完整 Topic 快照。
- **剔除蹭热度条目：** 带 `dsh-plugin` Topic 但并非 DSH 插件的仓库（平台本体、其他 Agent 工具、同名目录站等）不计入目录与榜单，理由记录在 [data/curated.json](./data/curated.json)。
- **中文默认，中英双语：** 普通用户可以直接理解，英文读者也有独立入口。
- **数据自动、页面人工：** 全量目录与原始快照每天自动刷新；首页推荐与榜单由人工参考 [data/repositories.json](./data/repositories.json) 复核后修改，避免刷星、蹭 Topic 等被污染的接口数据直接改写本页。

截至 2026-08-14，全量目录收录 **1026** 个仓库、**16** 种主要语言；其中 **861** 个声明了许可证，**1024** 个未归档且未禁用（以上统计每日自动更新，以 [CATALOG.md](./CATALOG.md) 为准）。

## 使用与安全

第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证、安装方式和最近更新情况，并优先在隔离环境中试用。本列表仅做发现与整理，不代表 DSH 官方认可。

## 推荐或修正插件

发现遗漏、分类不准确或说明过时？欢迎提交 Issue 或 Pull Request。公开仓库只要带有 `dsh-plugin` Topic 且确实是 DSH 插件，就会自动进入全量目录（蹭 Topic 的条目会被剔除）；首页的场景推荐、编辑推荐与榜单为人工维护页面，修改请直接编辑对应 Markdown 并附上理由。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License

本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。