# 🐳 Awesome DSH Plugins

> 用 30 秒为你的 DeepSeek Harness（DSH）找到合适的插件。
> 这不是又一个仓库清单：GitHub 上所有打着 `dsh-plugin` 标签的仓库由脚本每天自动抓取，再经人工逐个核实——真插件进目录，蹭热度的进黑名单，每条剔除理由公开可查。并告诉你每个插件适合谁、从哪里开始。

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Repositories](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbruc3van%2Fawesome-dsh-plugin%2Fmain%2Fdata%2Frepositories.json&query=%24.total_count&label=repositories&color=2563eb)](./CATALOG.md)
[![Snapshot & review queue](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
[![Refreshed](https://img.shields.io/github/last-commit/bruc3van/awesome-dsh-plugin?label=refreshed&color=10b981)](./CATALOG.md)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[English](./README_EN.md) · [全量目录](./CATALOG.md) · [Star Top 200](./TOP200.md) · [作者自荐](./SHOWCASE.md) · [推荐一个插件](./CONTRIBUTING.md) · [机器可读数据](./data/repositories.json)

**如果这个列表帮你找到一个有用的插件，欢迎点一个 Star ⭐。它能帮助更多 DSH 用户发现这个生态。**

## 🧭 用户索引

| 我想要…… | 直接去哪里 |
| --- | --- |
| 30 秒选出一个插件 | [精选推荐](#-精选推荐)：从「我想让 DSH 做什么」出发，按场景分组列出社区优秀插件 |
| 第一次装插件 | [新手入门组合](#-新手入门组合)：按当前问题选一套组合，不用一次装很多 |
| 按热度翻完整榜单 | [社区热度榜](#-社区热度榜)（首页 Top 20）· [TOP200.md](./TOP200.md)（完整 Top 200） |
| 按分类浏览全部项目 | [CATALOG.md](./CATALOG.md)（全量目录）· [生态全景](#-生态全景)（分类概览） |
| 看看作者们自己提交的新插件 | [作者自荐](#-作者自荐)（首页最近 10 条）· [SHOWCASE.md](./SHOWCASE.md)（全部） |
| 用程序消费插件数据 | [data/market.json](./data/market.json)——面向下游市场的精选文件（≤500 KB，见[接口规范](https://github.com/bruc3van/dsh-desktop-safe-market/blob/master/docs/market-json-spec.md)）；[data/repositories.json](./data/repositories.json)——每日自动快照，含星数、许可证、活跃度等元数据 |
| 收录或推荐你自己的插件 | [推荐或修正插件](#-推荐或修正插件) / [CONTRIBUTING](./CONTRIBUTING.md) |

## 🗺️ 生态全景

<!-- dsh:panorama:start -->
截至 2026-08-23 共收录 **9365** 个经核实的仓库。它们长这样：

```mermaid
mindmap
  root((DSH 插件生态 9365))
    Agent 自动化与工作流 · 3762
      定时循环与事件唤醒
      多 Agent 协作
      长期记忆与自我进化
      审批、预算与检查点
    界面与体验 · 1715
      桌面客户端与终端 TUI
      侧边栏工作台
      皮肤与桌面宠物
      通知与输入增强
    网页与浏览器 · 1352
      浏览器桥接与页面操作
      网页搜索与引用
      归档与网页取证
    设计媒体与视觉 · 499
      图片理解与 OCR
      设计画布与 UI 还原
    实用工具与其他 · 467
      文件与编码
      格式转换
    知识与研究 · 454
      知识库与跨会话记忆
      深度研究
      学术与数学
    生态与资源 · 434
      插件市场与注册表
      开发模板与脚手架
      教程与手册
    开发者工具 · 427
      Git 与 diff
      沙箱与运行时
      调试与诊断
    集成与分享 · 255
      会话导入与分享
      远程访问
      IM 与外部集成
```
<!-- dsh:panorama:end -->

按分类浏览每个分类下的全部项目，见 [CATALOG.md](./CATALOG.md)——目录按类目分册，索引页列出每一册。

## ⭐ 精选推荐

**这里不按星数排名，但优先选择社区验证的高星项目**——绝大多数推荐来自 Star Top 200：它们解决明确问题、说明完整、仍在维护且经过大量用户验证；少数是几十 Star 但无可替代的项目。从你的问题出发，找到最接近的一行，点进去就是答案；收录不等于安全或兼容性背书。想看按热度排名的完整榜单，见[社区热度榜](#-社区热度榜)。各分类条目下方附有界面截图，点击截图即可直达仓库首页。

### 🖥️ 桌面与终端

- **想要独立的桌面客户端**，而不是浏览器标签页：[dsh-desktop](https://github.com/bruc3van/dsh-desktop) —— 原汁原味的官方 Web UI，不做过多修改；关闭窗口任务照跑，常驻托盘随点随开。安装包自带官方运行时，双击即用，不用装 Node.js、也不用敲命令；智能模式自动复用本机已运行的实例，固定地址模式则直连你自己维护的地址。安全上逐层加固——窗口沙箱、导航锁定、更新链路防劫持、权限最小化，内置安全市场，精选分类600+插件，主打先审查、再安装。
- **想在终端里用 Claude Code 风格界面**：[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) —— 全屏交互终端：状态行、思考流展开、上下文/TPS 仪表；tianshu 版本还内置 TDD 与证据门工作流。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-desktop"><img src="https://github.com/bruc3van/dsh-desktop/raw/main/docs/images/marketplace.png" alt="dsh-desktop · 插件市场" width="280"></a><br>[dsh-desktop](https://github.com/bruc3van/dsh-desktop) | <a href="https://github.com/bruc3van/dsh-desktop"><img src="https://raw.githubusercontent.com/bruc3van/dsh-desktop/main/docs/images/marketplace-sec-install.png" alt="dsh-desktop · 安全安装" width="280"></a><br>[dsh-desktop](https://github.com/bruc3van/dsh-desktop) | <a href="https://github.com/ccch1mneyyy/dsh-TUI"><img src="https://raw.githubusercontent.com/ccch1mneyyy/dsh-TUI/main/screenshots/splash.png" alt="dsh-TUI" width="280"></a><br>[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) |
| <a href="https://github.com/huiliyi37/dsh-tianshu-tui"><img src="https://raw.githubusercontent.com/huiliyi37/dsh-tianshu-tui/main/docs/tui-screenshot.jpg" alt="dsh-tianshu-tui" width="280"></a><br>[dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | | |

### 🧰 界面与工作台

- **想一次安装补齐常用界面功能**：[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) —— 任务看板、Git 关系图、侧边面板、远程移动端界面、桌面宠物、实时 Token 用量统计与皮肤中心，一站式功能合集。
- **想看清上下文窗口里装了什么**：[dsh-context](https://github.com/bowenliang123/dsh-context) —— 在 Web UI 增加 Context 面板，展示上下文由什么构成、如何演化，辅助把握 token 控制与裁剪时机。
- **想把侧边栏升级成完整工作台**：[DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) —— 内置文件渲染编辑、终端、Git 与子代理，并支持第三方扩展注册新 Tab。
- **想让工作状态行活过来**：[working-activity](https://github.com/ccch1mneyyy/working-activity) —— 实时显示工具动态与进度、俏皮文案、模型自述与上下文预警，等待时不再无聊。
- **想在开发对话里直接检查和操作当前网页**：[dsh-browser](https://github.com/Lum1104/dsh-browser) —— Chrome 侧边栏扩展，让 DSH 直接操作你的浏览器：无需视觉能力，即可在当前对话里授权页面、读取并执行网页操作。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/zhu1090093659/dsh-web-ui"><img src="https://raw.githubusercontent.com/zhu1090093659/dsh-web-ui/main/docs/screenshots/13-hero-main.png" alt="dsh-web-ui" width="280"></a><br>[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | <a href="https://github.com/bowenliang123/dsh-context"><img src="https://raw.githubusercontent.com/bowenliang123/dsh-context/main/docs/context-command.png" alt="dsh-context" width="280"></a><br>[dsh-context](https://github.com/bowenliang123/dsh-context) | |

### 👀 让模型看得见、搜得到

- **想给 DSH 增加视觉理解能力**：[modlens](https://github.com/liustack/modlens) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) —— modlens 把图片转成 OCR/布局/语义结构化证据；dsh-vision-toolkit 覆盖图片问答、长截图 OCR、UI 还原与像素对比。
- **想免 Key、免 Python、粘贴即用看图**：[dsh-vision-router](https://github.com/ysr666/dsh-vision-router) —— 内置免费视觉链（五模型匿名兜底，免注册免 Key），图片轮像普通工具轮一样由模型驱动 10 个 `vision_*` 像素工具（定位、裁剪、描述、像素对比、修复、取色、OCR、抠图、矢量化、截图）连续多步执行，并输出结构化证据 JSON；一条命令安装（Web profile），Node only。
- **想让 Agent 自己搜索网页和 X，答案带引用**：[modsearch](https://github.com/liustack/modsearch) · [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) —— modsearch 在对话中直接搜索、抓取并返回带引用的结构化证据；anysearch-dsh 提供 AnySearch 搜索源与高级搜索工具，可作补充搜索后端。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/liustack/modlens"><img src="https://raw.githubusercontent.com/liustack/modlens/main/assets/demo-dsh-paste.jpg" alt="modlens" width="280"></a><br>[modlens](https://github.com/liustack/modlens) | <a href="https://github.com/Anionex/dsh-vision-toolkit"><img src="https://github.com/Anionex/dsh-vision-toolkit/raw/main/assets/dsh-view-example.png" alt="dsh-vision-toolkit" width="280"></a><br>[dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | <a href="https://github.com/ysr666/dsh-vision-router"><img src="https://github.com/ysr666/dsh-vision-router/raw/main/assets/dsh-conversation-image-qa.png" alt="dsh-vision-router" width="280"></a><br>[dsh-vision-router](https://github.com/ysr666/dsh-vision-router) |

### 🧠 记忆与无人值守

- **想给 DSH 加上可审计的跨会话记忆**：[mem9](https://github.com/mem9-ai/mem9) · [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) —— mem9 是跨会话/跨机器/跨 Agent 的持久共享记忆（混合召回 + 可视化控制台，原生支持 DeepSeek Harness 等运行时）；Mnemon 是三层记忆控制面：持久运行时上下文、可检索项目文档、可插拔长期记忆与智能路由。
- **想让 Coding 任务按计划自动运行**：[dsh-automation](https://github.com/titanwings/dsh-automation) —— 在全新 Agent Session 中按计划运行任务，定时任务由用户或 Agent 在 Web 界面创建和管理。
- **请求经常因网络波动或超时中断**，不想每次手动补一句「继续」：[dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) —— 回合因非人为原因失败后自动补发「继续」：错误分类只恢复临时性故障，自适应退避避免轰炸故障上游，继续文本可模板化，参数在插件设置卡片中调整。
- **想回退对话与工作区状态**：[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) —— 基于持久化 Change Ledger 回退到任意早期回合，对话与代码状态一起恢复。
- **想回合结束时收到桌面通知**：[dsh-notification](https://github.com/omdsh-dev/dsh-notification) —— 按结果类型（成功/失败）控制通知，支持关键词过滤，长时间任务无需盯屏。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/omdsh-dev/dsh-mnemon"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-mnemon/9196fd9991676a6bd9a84d615fcd301eb52e872a/docs/assets/media/dsh-mnemon-memory-system-demo-poster.jpg" alt="dsh-mnemon" width="280"></a><br>[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | <a href="https://github.com/titanwings/dsh-automation"><img src="https://raw.githubusercontent.com/titanwings/dsh-automation/main/docs/01-dashboard-en.png" alt="dsh-automation" width="280"></a><br>[dsh-automation](https://github.com/titanwings/dsh-automation) | |
| <a href="https://github.com/HsiangNianian/dsh-auto-continue"><img src="https://raw.githubusercontent.com/HsiangNianian/dsh-auto-continue/main/docs/demo.svg" alt="dsh-auto-continue" width="280"></a><br>[dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | <a href="https://github.com/Anionex/dsh-turn-rewind"><img src="https://raw.githubusercontent.com/Anionex/dsh-turn-rewind/main/docs/assets/turn-rewind-dialog.png" alt="dsh-turn-rewind" width="280"></a><br>[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | |

### ✍️ 对话体验细节

- **想像 Codex 一样用 @ 引用工作区文件**：[dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) —— 在输入框内按 @ 搜索工作区文件并把内容附进 prompt，免去手动复制粘贴。
- **想调节思考强度**：[dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) —— Codex 风格的思考强度滑块，以及大肥鱼跑步滑块。
- **想更顺手地阅读和操作长对话**：[dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) · [dsh-navbar](https://github.com/vlln/dsh-navbar) —— 像 Codex 一样选中文本批注，并快速跳转用户消息节点。
- **想给 DSH 上保险**：[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) —— 撤销配置与插件代码改动、密钥安全快照、一键 SAFE MODE，DSH 无法启动时也有离线 CLI/GUI 可用。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/omdsh-dev/dsh-at-file"><img src="https://github.com/omdsh-dev/dsh-at-file/raw/main/assets/screenshots/workspace-path-picker.png" alt="dsh-at-file" width="280"></a><br>[dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | <a href="https://github.com/HanaAyane/dsh-reasoning-effort"><img src="https://raw.githubusercontent.com/HanaAyane/dsh-reasoning-effort/main/assets/readme/themes.webp" alt="dsh-reasoning-effort" width="280"></a><br>[dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | <a href="https://github.com/vlln/dsh-navbar"><img src="https://raw.githubusercontent.com/vlln/dsh-navbar/main/docs/preview/navbar.png" alt="dsh-navbar" width="280"></a><br>[dsh-navbar](https://github.com/vlln/dsh-navbar) |
| <a href="https://github.com/lire1131/dsh-undo-savepoint"><img src="https://github.com/lire1131/dsh-undo-savepoint/raw/master/docs/webui-header.png" alt="dsh-undo-savepoint" width="280"></a><br>[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | | |

### 🎨 创作与乐趣

- **想换皮肤、自定义背景**：[dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) —— dsh-deep-whale 是生态内最受欢迎的鲸鱼娘皮肤系列（CC BY-NC-SA，不可商用）；DSH-Transparent-UI-Plugin 是一层高自由度的玻璃质感主题，模糊/磨砂/背景全可调，一键回到原生界面。
- **想在对话中生成交互式界面**：[dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) —— 在回复中渲染图表、表单、测验、Mermaid 和 3D 场景，或让模型生成交互式可视化卡片。
- **想让 Agent 操作真实设计画布**：[dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) —— 创建、编辑、预览和验证可交互的多页面 OpenPencil 设计稿。
- **想给工作区增加一个陪伴型宠物**：[whale-girl](https://github.com/vlln/whale-girl) · [dsh-pet](https://github.com/PC2005-cloud/dsh-pet) —— 可拖拽、投喂和玩耍的积累型鲸鱼娘；或一行命令安装现成宠物（28 个透明动画），并从 AI 视频自造专属宠物。
- **想要点乐子**：[dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · [anime-find](https://github.com/cocofhu/anime-find) · [dsh-minigames](https://github.com/lhh010/dsh-minigames) —— 把 DSH 变成 2005 年门户网站；对话内多源搜番并展示 Bangumi 评分；等模型回复时玩 18 款离线小游戏。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/Small-tailqwq/dsh-deep-whale"><img src="https://github.com/Small-tailqwq/dsh-deep-whale/raw/main/maid-atelier/preview/light.webp" alt="dsh-deep-whale" width="280"></a><br>[dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | <a href="https://github.com/WYH66666666/DSH-Transparent-UI-Plugin"><img src="https://raw.githubusercontent.com/WYH66666666/DSH-Transparent-UI-Plugin/main/assets/1.png" alt="DSH-Transparent-UI-Plugin" width="280"></a><br>[DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | <a href="https://github.com/Nagi-ovo/dsh-visualize"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-visualize/main/assets/social-preview.jpg" alt="dsh-visualize" width="280"></a><br>[dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) |
| <a href="https://github.com/ZSeven-W/dsh-openpencil"><img src="https://github.com/ZSeven-W/dsh-openpencil/raw/main/docs/images/dsh-openpencil-overview.png" alt="dsh-openpencil" width="280"></a><br>[dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | <a href="https://github.com/PC2005-cloud/dsh-pet"><img src="https://github.com/PC2005-cloud/dsh-pet/raw/main/assets/screenshots/dsh-pet-running-1.png" alt="dsh-pet" width="280"></a><br>[dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | <a href="https://github.com/Nagi-ovo/dsh-ads"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-ads/main/assets/screenshot.webp" alt="dsh-ads" width="280"></a><br>[dsh-ads](https://github.com/Nagi-ovo/dsh-ads) |
| <a href="https://github.com/cocofhu/anime-find"><img src="https://raw.githubusercontent.com/cocofhu/anime-find/main/docs/banner.jpg" alt="anime-find" width="280"></a><br>[anime-find](https://github.com/cocofhu/anime-find) | | |

### 🛠️ 开发与工作流

- **想把一个会话变成一支协作团队**：[dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) —— 当前会话作为队长：创建可续聊的子 Agent、把目标拆成带依赖的任务，并通过直达消息协调成员工作，实时 Web UI 呈现活动面板。
- **想把一次性多 Agent 调度升级为 Workflow 层**：[dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) —— 把 Claude Code 的 UltraCode 模式带给 DSH：可生成、可保存、可治理、可观察、可恢复。
- **想少点手动确认、又要安全**：[dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) —— 为 DSH 提供安全的自动权限（Safe automatic permissions）。
- **想逆向分析任何应用或二进制**：[rea](https://github.com/morluto/rea) —— 让 Agent 逆向一切：从应用行为到原生二进制（进阶用户）。
- **想把现有业务代码转成 Agent 可调用能力**：[Code2Skill](https://github.com/leechen298/Code2Skill) —— 从用户授权的前端、后端或全栈源码生成 Function、MCP Tools、业务 Skills 和离线测试，并可作为 DSH Bundle 安装。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/NanmiCoder/dsh-agent-teams"><img src="https://raw.githubusercontent.com/NanmiCoder/dsh-agent-teams/main/assets/ui.png" alt="dsh-agent-teams" width="280"></a><br>[dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | | |

### 🔀 迁移与集成

- **想把其他工具的历史会话搬进 DSH**：[dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) —— 13 源全保真导入（Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi）历史会话为可续聊 DSH 会话，并支持反向导出/同步回 Claude Code。
- **想让 DSH 接入 QQ Bot**：[dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) —— 腾讯官方插件，把 QQ Bot 接进 DeepSeek Harness。

### 🔌 远程与外部协作

- **想用手机或平板访问 DSH**：[dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) —— dsh 安卓壳 APK：WebView UI + 内嵌 Termux 运行时、SAF 目录桥、保活服务与看门狗。
- **想让外部 Agent 驱动 Harness 执行任务**：[dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) —— 在 Harness 内部启动 MCP server，让任意 MCP 客户端（如 Hermes）下发任务给 Harness 执行，实现「大脑 + 胳膊」协作。
- **想从外部设备安全访问本机 Harness / 操作远程主机**：[dsh-remote](https://github.com/flymysql/dsh-remote) —— 远程工作助手（npm v0.8.x）：多机 SSH（密码/私钥/agent/OTP/跳板机）+ 远程工作区选择 + 21 个 `rw_*` 工具（列目录/读文件/编辑/执行/搜索/端口转发/SFTP 双向同步镜像）；内置「🌐 远程文件」侧边栏（内嵌 dsh-better-sidebar）、审计日志、自更新；遵循官方安全设计，不碰 0.0.0.0。

### 💰 用量与账单

- **想查看 Token 用量与费用**：[dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) —— dsh-usage-stats 提供 GitHub 风格用量热力图、按模型拆解与 DeepSeek 账户余额；dsh-cost-meter 按官方价格同步统计本会话/当日费用。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/Ychris12138/dsh-usage-stats"><img src="https://github.com/Ychris12138/dsh-usage-stats/raw/main/docs/images/usage-panel.svg" alt="dsh-usage-stats" width="280"></a><br>[dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | <a href="https://github.com/Han-1413141/dsh-cost-meter"><img src="https://github.com/Han-1413141/dsh-cost-meter/raw/master/docs/screenshot-sidebar-footer.png" alt="dsh-cost-meter" width="280"></a><br>[dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | |

### 🌱 生态入口

- **想先审查、再安装插件（安全第一）**：[dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) —— 先审查再安装的 DSH 市场：目录来自本清单每日快照 + 人工精选，「安全安装」不执行任何命令——把安全审查提示词交给 Agent 实际读仓库代码，确认干净后由你决定是否用官方命令安装；市场默认关闭、开启才联网，插件自身没有任何执行安装的接口。
- **想在 DSH 界面里直接逛插件市场**：[dsh-market](https://github.com/dsh-market/dsh-market) · [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) · [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) —— dsh-market 把市场做进 DSH：浏览、搜索、一键安装；DSH-Plugins-Marketplace 覆盖全部 GitHub dsh-plugin 插件的一键浏览、安装与更新；dsh-plugin-hub 插件管理面板 + 市场：一键启停/检测更新/框架一键升级，覆盖全部 GitHub dsh-plugin 插件与技能。

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-desktop-safe-market"><img src="https://raw.githubusercontent.com/bruc3van/dsh-desktop-safe-market/master/assets/screenshots/marketplace.png" alt="dsh-desktop-safe-market" width="280"></a><br>[dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) | <a href="https://github.com/dsh-market/dsh-market"><img src="https://raw.githubusercontent.com/dsh-market/dsh-market/main/assets/demo-en.png" alt="dsh-market" width="280"></a><br>[dsh-market](https://github.com/dsh-market/dsh-market) | |

### 🚀 新手入门组合

不需要一次装很多。先选一个与你当前问题最接近的组合：

| 套装 | 适合 | 组合 |
| --- | --- | --- |
| 日常体验 | 第一次装插件：先装桌面客户端，再补常用输入 | [dsh-desktop](https://github.com/bruc3van/dsh-desktop) · [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) |
| 终端控 | 喜欢命令行，想要全屏交互终端 | [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) |
| 视觉与搜索 | 让纯文本模型看得见、搜得到 | [modlens](https://github.com/liustack/modlens) · [modsearch](https://github.com/liustack/modsearch) · [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) |
| 界面美化 | 换皮肤、玻璃质感、桌面宠物 | [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) · [whale-girl](https://github.com/vlln/whale-girl) |
| 多 Agent 协作 | 把复杂任务交给一支 Agent 团队 | [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) · [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) |
| 记忆与持续运行 | 跨会话记忆 + 中断自动续跑的无人值守项目 | [mem9](https://github.com/mem9-ai/mem9) · [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) |

**新手先读：** [dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) —— DSH 从 0 到 1 深度手册：安装、插件开发、性能调优与实测案例（中英双语 PDF）；想自己写插件的从 [hello-dsh](https://github.com/pingfanfan/hello-dsh) 开始——零基础插件开发教程（22 个中文技能实例）。

## 🏆 社区热度榜

按 Star 排序的社区热度参考，数据取自 2026-08-23 快照；蹭 `dsh-plugin` Topic 的非插件仓库与编辑部拉黑的仓库均已剔除，新仓库先进入[待审核队列](./data/review/pending.md)、经人工核实（[data/approved.json](./data/approved.json)）后才进入榜单，剔除清单见 [data/curated.json](./data/curated.json)。首页展示前 20 名，完整 Top 200 见 [TOP200.md](./TOP200.md)。排名反映受欢迎程度，不代表质量、兼容性或安全背书。

<!-- dsh:leaderboard:start -->
| # | 项目 | ⭐ Stars | License |
| ---: | --- | ---: | --- |
| 1 | [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | 6692 | — |
| 2 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | 5711 | Apache-2.0 |
| 3 | [liustack/modlens](https://github.com/liustack/modlens) | 3545 | MIT |
| 4 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 2706 | MIT |
| 5 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 2356 | MIT |
| 6 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 1978 | MIT |
| 7 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | 1623 | — |
| 8 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 1278 | MIT |
| 9 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | 1197 | Apache-2.0 |
| 10 | [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | 989 | MIT |
| 11 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 941 | MIT |
| 12 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 932 | Apache-2.0 |
| 13 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | 884 | MIT |
| 14 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 814 | MIT |
| 15 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | 801 | AGPL-3.0 |
| 16 | [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 680 | MIT |
| 17 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity) | 654 | MIT |
| 18 | [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | 638 | — |
| 19 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 635 | MIT |
| 20 | [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) | 621 | MIT |
<!-- dsh:leaderboard:end -->

[查看完整 Star Top 200 →](./TOP200.md)

## 🆕 最近加入生态

人工筛选的近期新项目，不定期更新：

| 项目 | 简介 | 创建日期 |
| --- | --- | --- |
| [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) | Terraria pixel-world skin: wizard companion, live dialogue, tool approval, and difficulty switching. | 2026-08-22 |
| [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | Live Android emulator or USB device stream inside a DSH conversation, driven through adb. | 2026-08-21 |
| [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | Distilled long-term memory: recall by meaning, writing gated by evidence; DSH plugin + MCP server. | 2026-08-21 |
| [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill) | Local-first Run-to-Skill plugin: turn a completed run into a reusable DSH skill. | 2026-08-19 |
| [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | Injector + task-aware reasoning-mode router kit (measured P1–P23). | 2026-08-14 |
| [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) | Task-aware reasoning-mode router with spec/mixed/react bands and phase-transition evidence. | 2026-08-14 |
| [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | 5 MB Tauri desktop client: zero environment setup, preset plugins, Windows/macOS/Linux. | 2026-08-14 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Evidence-first deep-research workspace with persistent workflow state and a research Web UI. | 2026-08-12 |

## 📣 作者自荐

插件作者按 [CONTRIBUTING](./CONTRIBUTING.md#作者自荐--self-promotion) 规范自行提交的推荐位：**不经编辑部审核，也不代表质量或安全背书**，安装前请自行评估（见下方「使用与安全」）。本区最多保留 30 条，区满后先进先出；条目若被上方[精选推荐](#-精选推荐)收录，会从本区移除、不占名额。首页只展示**最近 10 条**，完整列表见 [SHOWCASE.md](./SHOWCASE.md)。

<!-- dsh:showcase:start -->
- **[dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens)**（[@labmimors](https://github.com/labmimors) · 2026-08-15）— 把大型 MCP 工具目录保持为 `mcp_search` 和 `mcp_call` 两个模型可见接口，按需返回少量精确 schema，再以 `allowTools` / `denyTools` 同时约束搜索和调用；适合接入几十到上千个 MCP 工具的 DSH 用户，并附本地 schema 字节计算器与 CI 预算 Action。
- **[dsh-movein](https://github.com/sjh9714/dsh-movein)**（[@sjh9714](https://github.com/sjh9714) · 2026-08-16）— 把整套 Claude Code 配置一条命令搬进 DSH：技能、斜杠命令、MCP、hooks、子代理、权限规则（deny/ask 桥接 + 迁移差异报告），默认 dry run 先出搬家清单；`--reverse` 把 DSH 里长出来的技能搬回去实现双栖，v0.5 新增 doctor 搬家体检（含检测会被 DSH 静默丢弃的技能 frontmatter）与写入前自动备份、一键回滚。
- **[dsh-compressor](https://github.com/lifeodyssey/dsh-compressor)**（[@lifeodyssey](https://github.com/lifeodyssey) · 2026-08-16）— Headroom 的精简移植：压工具输出，至多少 20% 上下文，不动模型缓存。适合工具日志 / JSON / diff 把上下文撑满、又不想改已发给模型的前缀的人。
- **[dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream)**（[@Laplace-bit](https://github.com/Laplace-bit) · 2026-08-16）— DSH Web 界面丝滑流式渲染：打字机跟随 token 到达、Markdown 边流边渲染、换行滑入、不闪烁，滚动归用户，尊重 prefers-reduced-motion。
- **[dsh-win32](https://github.com/sjh9714/dsh-win32)**（[@sjh9714](https://github.com/sjh9714) · 2026-08-18）— 无需 WSL 的 DSH 原生 Windows shell 与 Workspace Write 沙箱预设。沙箱会话使用 busybox-w32，非受限会话使用 Git Bash。保留 GBK/UTF-16 读取，`doctor` 会检查预设、bundle、写入边界与已知安装问题，Windows CI 覆盖受限令牌下的持久 shell 往返与中断。
- **[dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory)**（[@Phant0Meow](https://github.com/Phant0Meow) · 2026-08-19）— 跨会话长期记忆插件：node:sqlite 七层存储（soul/user/project/fact/lesson/topic/rules），首条消息缓存友好注入，memory_* 检索/读写/整理工具，逐消息关键词命中，BM25×艾宾浩斯加权检索，夜间按窗口自动整理（dream）。
- **[dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare)**（[@lamost423](https://github.com/lamost423) · 2026-08-20）— 轨迹对比 + 实时迷宫：把 agent 真实的探索过程画在墙钟时间轴上——主干、失败/扑空的支路、折返点、子代理支路；上传 1–2 个 session log 做单跑复盘或同轴对比（按轮次自动对齐 + 支路盘点表），也可在会话页签实时看迷宫生长；判定全部是确定性规则、悬停可见依据，不调 LLM。
- **[dsh-feishu](https://github.com/PGZXB/dsh-feishu)**（[@PGZXB](https://github.com/PGZXB) · 2026-08-20）— 把 DeepSeek Harness 装进飞书：一个聊天对应一个 dsh 会话，命令面板、审批与提问全部卡片化，流式卡片实时展示，扫码一次完成配置，随时在手机/桌面指挥本地 agent；已发布 npm `@dsh-feishu/dsh-feishu`。
- **[dsh-easyrewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite)**（[@Renzic-Stone](https://github.com/Renzic-Stone) · 2026-08-21）— DSH Web 用户消息气泡内联编辑与撤回插件：单击气泡原位编辑、撤回键一键截断重发，惰性提交、无痕替换，版本翻页器回看历史版本，草稿按会话持久化并超时自动备份，界面三语（中文 / English / 日本語），纯官方扩展点实现、零源码补丁。
- **[tabbit-browser](https://github.com/Tabbit-Browser/dsh-tabbit)**（[@Tabbit-Browser](https://github.com/Tabbit-Browser) · 2026-08-21）— 让 DSH agent 接管你的 Tabbit 浏览器：通过浏览器自带的任务隔离 Playwright CLI（`tabbit-cli`）操作真实页面、真实登录态与真实交互，用于网页自动化、信息抽取、QA 与基准测试。自带 `tabbit-browser` 技能（持久任务空间、定位器与等待、截图、回执与恢复，随插件自动注册，`/tabbit-browser` 调用）与 `tabbit_browser_install` 环境预检工具（检测稳定版 ≥1.9.0 与运行时，缺失或过旧则按系统区域后台下载对应安装包）。一条命令安装：`dsh plugin --profile web add github:Tabbit-Browser/dsh-tabbit`。⚠️ 仓库暂无 LICENSE 文件（README 标注 MIT）。
<!-- dsh:showcase:end -->

[查看全部 30 条自荐 →](./SHOWCASE.md)

## 🔍 我们如何维护这个列表

- **面向使用者，而不是爬虫：** 从「我想完成什么」出发组织首页，而不是让你阅读几百行仓库名称。
- **人工推荐 + 全量索引分层：** 首页只放经过人工筛选的精选推荐与自荐预览；[CATALOG.md](./CATALOG.md) 及其分类分册收录全部经核实的仓库；新增仓库先进入[待审核队列](./data/review/pending.md)，核实后合并（约定见 [data/review/README.md](./data/review/README.md)）。
- **数据自动、页面人工：** 原始快照与待审核队列每天由脚本自动刷新；全量目录与 Top 200 热度榜只在人工核实合并后重新生成（生成逻辑见 [scripts/merge.mjs](./scripts/merge.mjs) 与 [scripts/top.mjs](./scripts/top.mjs)，可随时切回 Top 100）；首页精选推荐、自荐与最近加入由人工维护，避免刷星、蹭 Topic 等被污染的接口数据直接改写推荐内容。
- **剔除蹭热度条目：** 带 `dsh-plugin` Topic 但并非 DSH 插件的仓库（平台本体、其他 Agent 工具、同名目录站等）以及编辑部拉黑的仓库不计入目录与榜单，理由逐条记录在 [data/curated.json](./data/curated.json)（榜单另有 `leaderboard_exclusions`：保留在目录中、但不参与榜单排序的仓库），可随时复查与质疑。
- **下游市场文件：** [data/market.json](./data/market.json) 是给下游市场（如 DSH 桌面端插件市场）消费的精选小文件——在快照与 curation 之上过滤、清洗并按类目均衡发牌（≤600 条、≤500 KB），每日快照刷新与 curation 合并后自动重建；字段与生成规则见下游的[发布规范](https://github.com/bruc3van/dsh-desktop-safe-market/blob/master/docs/market-json-spec.md)。同一时序下同步生成根目录 [MARKET.md](./MARKET.md)——这份文件的只读可视化（按 Star 数排名），可在 GitHub 上直接预览市场内容，无需安装下游插件。
- **中文默认，中英双语：** 普通用户可以直接理解，英文读者也有独立入口。

截至 2026-08-23，全量目录收录 **9365** 个仓库、**28** 种主要语言；其中 **8309** 个声明了许可证，**9338** 个未归档且未禁用（目录随人工审核合并更新，最新统计以 [CATALOG.md](./CATALOG.md) 为准）。

## ⚠️ 使用与安全

第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证、安装方式和最近更新情况，并优先在隔离环境中试用。本列表仅做发现与整理，不代表 DSH 官方认可，收录也不构成安全或兼容性背书。

## 🤝 推荐或修正插件

发现遗漏、分类不准确或说明过时？欢迎提交 Issue 或 Pull Request：

- **收录你的插件：** 公开仓库只要带上 `dsh-plugin` Topic 且确实是 DSH 插件，就会在每日刷新时进入[待审核队列](./data/review/pending.md)，经我们核实后进入全量目录——**不需要给我们提 PR**。蹭 Topic 的条目会被剔除，理由记录在 [data/curated.json](./data/curated.json)。
- **作者自荐上首页：** 如果你是插件作者，可以按 [CONTRIBUTING](./CONTRIBUTING.md#作者自荐--self-promotion) 的自荐规范在 [SHOWCASE.md](./SHOWCASE.md) 末尾追加一条自荐（中英各一行），并把首页自荐预览区同步为最近 10 条，无需编辑部审核。
- **上首页推荐：** 首页的精选推荐与最近加入为人工维护页面，提 Issue 告诉我们它解决什么问题、适合谁，或直接编辑对应 Markdown 并附上理由；热度榜 [TOP200.md](./TOP200.md) 由脚本生成，如需把某仓库排除出榜单，请在 [data/curated.json](./data/curated.json) 登记 `leaderboard_exclusions` 并注明理由。

详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bruc3van/awesome-dsh-plugin&type=Date)](https://star-history.com/#bruc3van/awesome-dsh-plugin&Date)

## 🔗 相关项目

**作者维护**

- **[dsh-desktop](https://github.com/bruc3van/dsh-desktop)** — 让 Agent 安全常驻桌面的独立 DeepSeek Harness 客户端。原汁原味的官方 Web UI，不做过多修改；关窗任务照跑，常驻托盘随点随开；安装包自带官方运行时，双击即用；智能模式复用已有实例、固定地址直连自己的实例。安全上逐层加固，内置安全市场精选 600+ 插件，先审查、再安装。（其内置市场的目录数据即来自本仓库的 [`market.json`](./data/market.json)。）
- **[dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market)** — 先审查再安装的 DSH 市场（review-before-install DSH marketplace）。（消费本仓库 [`market.json`](./data/market.json) 的下游市场，DSH 桌面端内置的「插件市场」即由它实现。）

**官方仓库**

- **[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)** — DeepSeek Harness: Everything is a Plugin. 官方 `dsh` 与 Web UI 的上游项目——本目录收录的全部插件都为它而生。

## License

本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。
