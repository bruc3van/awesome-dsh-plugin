# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-20**
- 快照日期 / Snapshot date: **2026-08-20 (UTC)**
- 待审核 / Pending: **153**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **0**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`
- 非插件形态 / market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ 加入 `curated.json` 的 `market_exclusions`（市场不能包含市场）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`
- Non-plugin form / market class (plugin market, store, skill mall, desktop with a built-in market) → `market_exclusions` in `curated.json` (the market cannot include another market)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) | 12 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 社区内置插件市场（dsh-plugin）— 搜索插件、下载并安装 4000+ 人工精选社区插件，每日更新、完全免费。内置在 Harness「设置 → 插件中心」，无需离开应用即可浏览、搜索、安装各类 AI 插件。 |
| 2 | [hibays/DSHL](https://github.com/hibays/DSHL) | 3 | 2026-08-15 | 2026-08-20 | 极简 DeepSeek Harness 桌面版：单EXE，~4M，即开即用；自动复用本地 dsh 安装、自安装/更新 dsh，启动完全可配置；托盘收纳时自动销毁UI层，内存占用极低，dsh 后台持续服务、随时唤回。 |
| 3 | [Lheyang/orca-dsh-launcher](https://github.com/Lheyang/orca-dsh-launcher) | 3 | 2026-08-16 | 2026-08-20 | 🐋 Orca DSH Launcher：DSH 更新检查 + 服务器启停 + 系统托盘 + 图形控制台 + 一键安装（Cordis 插件 + 桌面端） |
| 4 | [sandbaseai/dsh-plugin-store](https://github.com/sandbaseai/dsh-plugin-store) | 3 | 2026-08-17 | 2026-08-20 | Native plugin marketplace for DeepSeek Harness: discover, filter, install, and manage 4,000+ community plugin packages. |
| 5 | [fancr-code/dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的 Windows 桌面托盘启动器：无窗口运行 dsh web，快捷方式 + 系统托盘（打开界面/日志/退出即全退），一键安装。 |
| 6 | [zhenghaoyang24/dsh-desktop](https://github.com/zhenghaoyang24/dsh-desktop) | 2 | 2026-08-14 | 2026-08-20 | DeepSeek Harness desktop.DeepSeek Harness 桌面端。 |
| 7 | [dreamer0323/dsh-desktop](https://github.com/dreamer0323/dsh-desktop) | 1 | 2026-08-17 | 2026-08-20 | 一个dsh桌面端应用，可自定义主题以及桌宠，内置了雾雨魔理沙主题。 |
| 8 | [R2h1/deepseek-harness-app](https://github.com/R2h1/deepseek-harness-app) | 1 | 2026-08-16 | 2026-08-20 | DeepSeek Harness 桌面端 —— 自包含的 ElectroBun 外壳，内置可自动更新的 dsh 引擎，附带 Windows 图形化安装程序 |
| 9 | [386842536/dsh-launcher](https://github.com/386842536/dsh-launcher) | 0 | 2026-08-19 | 2026-08-20 | DSH 启动器 — 双击一键启动 DeepSeek Harness / Double-click macOS launcher |
| 10 | [Alvinpro/DSH-Launcher](https://github.com/Alvinpro/DSH-Launcher) | 0 | 2026-08-19 | 2026-08-20 | A single-file Rust Windows OS launcher for the dsh (DeepSeek Harness) web UI — no WebView2, no runtime deps, just a few hundred KB. Double-click to start; close the browser and the whole process tree is torn down — no terminal to babysit, no leftover node processes holding the port, no console flash. |
| 11 | [Ayle5678/dsh-auto-guard](https://github.com/Ayle5678/dsh-auto-guard) | 0 | 2026-08-20 | 2026-08-20 | 一款DSH (DeepSeek Harness) 插件：类似 Claude Code 中 Auto Mode 的一种命令通过机制，给 dsh中的full access 加一层 LLM 安全网的自动审批插件。 |
| 12 | [BigAdam-h/dsh-api-meter](https://github.com/BigAdam-h/dsh-api-meter) | 0 | 2026-08-20 | 2026-08-20 | 多供应商 API 用量/余额监控插件（DeepSeek Harness） |
| 13 | [boomzikazita/dsh-spec-gate](https://github.com/boomzikazita/dsh-spec-gate) | 0 | 2026-08-20 | 2026-08-20 | Specification gate plugin for DeepSeek Harness: Socratic interview (ambiguity scoring) + immutable Seed locking + pre-delivery acceptance gate |
| 14 | [Cruciforms/dsh-socrates](https://github.com/Cruciforms/dsh-socrates) | 0 | 2026-08-20 | 2026-08-20 | Socratic clarify-first deep research plugin for DeepSeek Harness: adaptive multi-round research with evidence-closed cited reports, cross-verification, and citation auditing. |
| 15 | [DevRico003/dsh-verifier](https://github.com/DevRico003/dsh-verifier) | 0 | 2026-08-20 | 2026-08-20 | LLM-as-a-verifier plugin for DeepSeek Harness: end-of-turn quality gate, best-of-N selection and assessment tools (port of llm-as-a-verifier) |
| 16 | [Esperi/dsh-uispec](https://github.com/Esperi/dsh-uispec) | 0 | 2026-08-20 | 2026-08-20 | 规格驱动的 UI 原型生成插件（DeepSeek Harness）：解析 .uispec YAML 规格并生成自包含 HTML 预览 |
| 17 | [jw0507/dsh-shell](https://github.com/jw0507/dsh-shell) | 0 | 2026-08-20 | 2026-08-20 | dsh桌面端，windows版，无依赖，纯壳启动器，DSH原生更新，免维护，独立视窗 |
| 18 | [Liaominduyh/GitHub-dsh-plugin-market](https://github.com/Liaominduyh/GitHub-dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | github-dsh插件市场：DSH 插件市场（双源聚合 2830+ 插件浏览、官方一键安装、自动翻译、git 订阅管理） |
| 19 | [oli-bot/dsh-desktop](https://github.com/oli-bot/dsh-desktop) | 0 | 2026-08-18 | 2026-08-20 | DeepWork — community desktop shell for DeepSeek Harness: Electron + sidecar DSH engine + stock DSH web UI, sharing $DSH_HOME (unofficial, MIT) |
| 20 | [oriliz/dsh-mcp-apps-host](https://github.com/oriliz/dsh-mcp-apps-host) | 0 | 2026-08-20 | 2026-08-20 | MCP Apps Host plugin for DeepSeek Harness: renders interactive HTML cards from MCP _meta.ui in sandboxed iframes, bridges postMessage to MCP tools/call and resources/read |
| 21 | [Pagemalthusian934/deepseek-desktop](https://github.com/Pagemalthusian934/deepseek-desktop) | 0 | 2026-08-20 | 2026-08-20 | Unify DeepSeek Chat and Harness in one native desktop app for macOS and Windows. |
| 22 | [pinkear/deepseek-harness-liverpool-theme](https://github.com/pinkear/deepseek-harness-liverpool-theme) | 0 | 2026-08-20 | 2026-08-20 | Liverpool-inspired DSH theme plugin with local custom pattern backgrounds. |
| 23 | [SchrodiL/dsh-chrome-app-launcher](https://github.com/SchrodiL/dsh-chrome-app-launcher) | 0 | 2026-08-20 | 2026-08-20 | Desktop launcher for Deepseek Harness as a Chrome APP |
| 24 | [shaun5297/dsh-launcher](https://github.com/shaun5297/dsh-launcher) | 0 | 2026-08-20 | 2026-08-20 | One-click launcher for DeepSeek Harness: detect → start backend (dsh web) → wait ready → open Chrome new window. Zero-dependency CLI, cross-platform. |
| 25 | [shellexy/dsh-webviewgtk](https://github.com/shellexy/dsh-webviewgtk) | 0 | 2026-08-20 | 2026-08-20 | A GTK4 + WebKitGTK 6.0 based web launcher for dsh |
| 26 | [simune/dsh-desktop](https://github.com/simune/dsh-desktop) | 0 | 2026-08-15 | 2026-08-20 | DeepSeek Harness 的插件管理工作区与一个基于 Tauri 的桌面客户端（dsh-desktop），把 dsh Web 服务捆绑并以原生窗口呈现，简化桌面端部署与使用体验。 |
| 27 | [sjk1949/orca-cat](https://github.com/sjk1949/orca-cat) | 0 | 2026-08-19 | 2026-08-20 | A third-party launcher for the DeepSeek Harness. |
| 28 | [sol5766/dshm_client](https://github.com/sol5766/dshm_client) | 0 | 2026-08-20 | 2026-08-20 | deepseek harnes HarmonyOS PC client |
| 29 | [SpookySandwich/dsh-plugin-rollout-scout](https://github.com/SpookySandwich/dsh-plugin-rollout-scout) | 0 | 2026-08-20 | 2026-08-20 | DSH 刷灰测模型插件。DeepSeek Harness plugin: fish for a limited-rollout conversation model by scoring live chain-of-thought.  |
| 30 | [T-MKT/dsh-ui-settings](https://github.com/T-MKT/dsh-ui-settings) | 0 | 2026-08-19 | 2026-08-20 | Provide general UI settings for DeepSeek Harness, suiting your personalization.  |
| 31 | [taltara/capmark](https://github.com/taltara/capmark) | 0 | 2026-08-20 | 2026-08-20 | Capability manifests for AI agent plugins. Declare what a plugin may do, in Markdown, and check it. |
| 32 | [uckkk/dsh-ab-sample](https://github.com/uckkk/dsh-ab-sample) | 0 | 2026-08-20 | 2026-08-20 | A/B测试样本量 |
| 33 | [uckkk/dsh-accounting-cert](https://github.com/uckkk/dsh-accounting-cert) | 0 | 2026-08-20 | 2026-08-20 | 会计证书要求 |
| 34 | [uckkk/dsh-ad-bid](https://github.com/uckkk/dsh-ad-bid) | 0 | 2026-08-20 | 2026-08-20 | 广告出价上限 |
| 35 | [uckkk/dsh-ai-terms](https://github.com/uckkk/dsh-ai-terms) | 0 | 2026-08-20 | 2026-08-20 | AI 术语 |
| 36 | [uckkk/dsh-airport-time](https://github.com/uckkk/dsh-airport-time) | 0 | 2026-08-20 | 2026-08-20 | 机场提前时间 |
| 37 | [uckkk/dsh-albania](https://github.com/uckkk/dsh-albania) | 0 | 2026-08-20 | 2026-08-20 | 阿尔巴尼亚国家 |
| 38 | [uckkk/dsh-algeria](https://github.com/uckkk/dsh-algeria) | 0 | 2026-08-20 | 2026-08-20 | 阿尔及利亚国家 |
| 39 | [uckkk/dsh-aluminium](https://github.com/uckkk/dsh-aluminium) | 0 | 2026-08-20 | 2026-08-20 | 铝元素 |
| 40 | [uckkk/dsh-americium](https://github.com/uckkk/dsh-americium) | 0 | 2026-08-20 | 2026-08-20 | 镅元素 |
| 41 | [uckkk/dsh-angola](https://github.com/uckkk/dsh-angola) | 0 | 2026-08-20 | 2026-08-20 | 安哥拉国家 |
| 42 | [uckkk/dsh-anniversary](https://github.com/uckkk/dsh-anniversary) | 0 | 2026-08-20 | 2026-08-20 | 纪念日计算 |
| 43 | [uckkk/dsh-aov-up](https://github.com/uckkk/dsh-aov-up) | 0 | 2026-08-20 | 2026-08-20 | 客单价提升测算 |
| 44 | [uckkk/dsh-battery-life](https://github.com/uckkk/dsh-battery-life) | 0 | 2026-08-20 | 2026-08-20 | 电池续航估算 |
| 45 | [uckkk/dsh-bilibili-live](https://github.com/uckkk/dsh-bilibili-live) | 0 | 2026-08-20 | 2026-08-20 | B站视频信息 |
| 46 | [uckkk/dsh-bleach-safety](https://github.com/uckkk/dsh-bleach-safety) | 0 | 2026-08-20 | 2026-08-20 | 漂白安全 |
| 47 | [uckkk/dsh-blood-pressure](https://github.com/uckkk/dsh-blood-pressure) | 0 | 2026-08-20 | 2026-08-20 | 血压分类 |
| 48 | [uckkk/dsh-brushing-time](https://github.com/uckkk/dsh-brushing-time) | 0 | 2026-08-20 | 2026-08-20 | 刷牙时长 |
| 49 | [uckkk/dsh-cable-power](https://github.com/uckkk/dsh-cable-power) | 0 | 2026-08-20 | 2026-08-20 | 充电功率计算 |
| 50 | [uckkk/dsh-caffeine](https://github.com/uckkk/dsh-caffeine) | 0 | 2026-08-20 | 2026-08-20 | 咖啡因半衰期 |
| 51 | [uckkk/dsh-cet-score](https://github.com/uckkk/dsh-cet-score) | 0 | 2026-08-20 | 2026-08-20 | 四六级估分 |
| 52 | [uckkk/dsh-charge-time](https://github.com/uckkk/dsh-charge-time) | 0 | 2026-08-20 | 2026-08-20 | 充电时间估算 |
| 53 | [uckkk/dsh-city-oslo-city](https://github.com/uckkk/dsh-city-oslo-city) | 0 | 2026-08-20 | 2026-08-20 | 奥斯陆市 |
| 54 | [uckkk/dsh-civil-exam](https://github.com/uckkk/dsh-civil-exam) | 0 | 2026-08-20 | 2026-08-20 | 行测答题节奏 |
| 55 | [uckkk/dsh-coupon-opt](https://github.com/uckkk/dsh-coupon-opt) | 0 | 2026-08-20 | 2026-08-20 | 优惠券判断 |
| 56 | [uckkk/dsh-ctr-significance](https://github.com/uckkk/dsh-ctr-significance) | 0 | 2026-08-20 | 2026-08-20 | 转化率显著性 |
| 57 | [uckkk/dsh-ctr-split](https://github.com/uckkk/dsh-ctr-split) | 0 | 2026-08-20 | 2026-08-20 | 点击率拆解 |
| 58 | [uckkk/dsh-currency-tips](https://github.com/uckkk/dsh-currency-tips) | 0 | 2026-08-20 | 2026-08-20 | 货币使用提示 |
| 59 | [uckkk/dsh-dental-check](https://github.com/uckkk/dsh-dental-check) | 0 | 2026-08-20 | 2026-08-20 | 口腔自检 |
| 60 | [uckkk/dsh-detergent-dose](https://github.com/uckkk/dsh-detergent-dose) | 0 | 2026-08-20 | 2026-08-20 | 洗衣液用量 |
| 61 | [uckkk/dsh-deworm](https://github.com/uckkk/dsh-deworm) | 0 | 2026-08-20 | 2026-08-20 | 驱虫计划 |
| 62 | [uckkk/dsh-dish-margin](https://github.com/uckkk/dsh-dish-margin) | 0 | 2026-08-20 | 2026-08-20 | 菜品毛利计算 |
| 63 | [uckkk/dsh-dry-guide](https://github.com/uckkk/dsh-dry-guide) | 0 | 2026-08-20 | 2026-08-20 | 晾晒烘干指南 |
| 64 | [uckkk/dsh-egg-size](https://github.com/uckkk/dsh-egg-size) | 0 | 2026-08-20 | 2026-08-20 | 鸡蛋大小 |
| 65 | [uckkk/dsh-email-length](https://github.com/uckkk/dsh-email-length) | 0 | 2026-08-20 | 2026-08-20 | 邮件字数建议 |
| 66 | [uckkk/dsh-fabric-care](https://github.com/uckkk/dsh-fabric-care) | 0 | 2026-08-20 | 2026-08-20 | 面料护理 |
| 67 | [uckkk/dsh-figure-genghis](https://github.com/uckkk/dsh-figure-genghis) | 0 | 2026-08-20 | 2026-08-20 | 成吉思汗 |
| 68 | [uckkk/dsh-figure-lincoln](https://github.com/uckkk/dsh-figure-lincoln) | 0 | 2026-08-20 | 2026-08-20 | 林肯 |
| 69 | [uckkk/dsh-figure-mao](https://github.com/uckkk/dsh-figure-mao) | 0 | 2026-08-20 | 2026-08-20 | 毛泽东 |
| 70 | [uckkk/dsh-figure-petra1](https://github.com/uckkk/dsh-figure-petra1) | 0 | 2026-08-20 | 2026-08-20 | 彼得大帝 |
| 71 | [uckkk/dsh-first-maintenance](https://github.com/uckkk/dsh-first-maintenance) | 0 | 2026-08-20 | 2026-08-20 | 首保提醒 |
| 72 | [uckkk/dsh-flour-swap](https://github.com/uckkk/dsh-flour-swap) | 0 | 2026-08-20 | 2026-08-20 | 面粉替代 |
| 73 | [uckkk/dsh-follower-goal](https://github.com/uckkk/dsh-follower-goal) | 0 | 2026-08-20 | 2026-08-20 | 涨粉目标拆解 |
| 74 | [uckkk/dsh-food-transition](https://github.com/uckkk/dsh-food-transition) | 0 | 2026-08-20 | 2026-08-20 | 换粮过渡 |
| 75 | [uckkk/dsh-gaokao-split](https://github.com/uckkk/dsh-gaokao-split) | 0 | 2026-08-20 | 2026-08-20 | 备考时间拆解 |
| 76 | [uckkk/dsh-gift-budget](https://github.com/uckkk/dsh-gift-budget) | 0 | 2026-08-20 | 2026-08-20 | 送礼预算 |
| 77 | [uckkk/dsh-github-live](https://github.com/uckkk/dsh-github-live) | 0 | 2026-08-20 | 2026-08-20 | GitHub仓库信息 |
| 78 | [uckkk/dsh-graduate-exam](https://github.com/uckkk/dsh-graduate-exam) | 0 | 2026-08-20 | 2026-08-20 | 考研过线判断 |
| 79 | [uckkk/dsh-group-buy](https://github.com/uckkk/dsh-group-buy) | 0 | 2026-08-20 | 2026-08-20 | 拼单团购 |
| 80 | [uckkk/dsh-grout-calc](https://github.com/uckkk/dsh-grout-calc) | 0 | 2026-08-20 | 2026-08-20 | 美缝剂用量 |
| 81 | [uckkk/dsh-hair-wash](https://github.com/uckkk/dsh-hair-wash) | 0 | 2026-08-20 | 2026-08-20 | 洗头频率 |
| 82 | [uckkk/dsh-hongbao](https://github.com/uckkk/dsh-hongbao) | 0 | 2026-08-20 | 2026-08-20 | 红包计算 |
| 83 | [uckkk/dsh-hotel-tax](https://github.com/uckkk/dsh-hotel-tax) | 0 | 2026-08-20 | 2026-08-20 | 酒店税费计算 |
| 84 | [uckkk/dsh-humidity](https://github.com/uckkk/dsh-humidity) | 0 | 2026-08-20 | 2026-08-20 | 湿度参考 |
| 85 | [uckkk/dsh-hydroponics](https://github.com/uckkk/dsh-hydroponics) | 0 | 2026-08-20 | 2026-08-20 | 水培营养液配比 |
| 86 | [uckkk/dsh-index-live](https://github.com/uckkk/dsh-index-live) | 0 | 2026-08-20 | 2026-08-20 | 大盘指数行情 |
| 87 | [uckkk/dsh-insurance-estimate](https://github.com/uckkk/dsh-insurance-estimate) | 0 | 2026-08-20 | 2026-08-20 | 车险费用估算 |
| 88 | [uckkk/dsh-ip-live](https://github.com/uckkk/dsh-ip-live) | 0 | 2026-08-20 | 2026-08-20 | 公网IP归属地 |
| 89 | [uckkk/dsh-iron-temp](https://github.com/uckkk/dsh-iron-temp) | 0 | 2026-08-20 | 2026-08-20 | 熨烫温度 |
| 90 | [uckkk/dsh-kpi-reach](https://github.com/uckkk/dsh-kpi-reach) | 0 | 2026-08-20 | 2026-08-20 | KPI缺口拆解 |
| 91 | [uckkk/dsh-laundry-temp](https://github.com/uckkk/dsh-laundry-temp) | 0 | 2026-08-20 | 2026-08-20 | 洗涤水温 |
| 92 | [uckkk/dsh-leave-days](https://github.com/uckkk/dsh-leave-days) | 0 | 2026-08-20 | 2026-08-20 | 年假天数 |
| 93 | [uckkk/dsh-live-stream](https://github.com/uckkk/dsh-live-stream) | 0 | 2026-08-20 | 2026-08-20 | 直播带货拆解 |
| 94 | [uckkk/dsh-log-volume](https://github.com/uckkk/dsh-log-volume) | 0 | 2026-08-20 | 2026-08-20 | 日志量估算 |
| 95 | [uckkk/dsh-luggage-size](https://github.com/uckkk/dsh-luggage-size) | 0 | 2026-08-20 | 2026-08-20 | 行李箱尺寸 |
| 96 | [uckkk/dsh-luggage-weight](https://github.com/uckkk/dsh-luggage-weight) | 0 | 2026-08-20 | 2026-08-20 | 行李超重计算 |
| 97 | [uckkk/dsh-meeting-cost](https://github.com/uckkk/dsh-meeting-cost) | 0 | 2026-08-20 | 2026-08-20 | 会议成本计算 |
| 98 | [uckkk/dsh-monitor-ppi](https://github.com/uckkk/dsh-monitor-ppi) | 0 | 2026-08-20 | 2026-08-20 | 显示器PPI |
| 99 | [uckkk/dsh-nail-trim](https://github.com/uckkk/dsh-nail-trim) | 0 | 2026-08-20 | 2026-08-20 | 剪指甲周期 |
| 100 | [uckkk/dsh-neuter](https://github.com/uckkk/dsh-neuter) | 0 | 2026-08-20 | 2026-08-20 | 绝育时机 |
| 101 | [uckkk/dsh-newborn-care](https://github.com/uckkk/dsh-newborn-care) | 0 | 2026-08-20 | 2026-08-20 | 新生儿护理 |
| 102 | [uckkk/dsh-npm-live](https://github.com/uckkk/dsh-npm-live) | 0 | 2026-08-20 | 2026-08-20 | npm包最新版本 |
| 103 | [uckkk/dsh-okr-split](https://github.com/uckkk/dsh-okr-split) | 0 | 2026-08-20 | 2026-08-20 | OKR目标拆解 |
| 104 | [uckkk/dsh-order-threshold](https://github.com/uckkk/dsh-order-threshold) | 0 | 2026-08-20 | 2026-08-20 | 凑单满减 |
| 105 | [uckkk/dsh-packing-list](https://github.com/uckkk/dsh-packing-list) | 0 | 2026-08-20 | 2026-08-20 | 打包清单 |
| 106 | [uckkk/dsh-paint-tint](https://github.com/uckkk/dsh-paint-tint) | 0 | 2026-08-20 | 2026-08-20 | 乳胶漆调色 |
| 107 | [uckkk/dsh-pet-bath](https://github.com/uckkk/dsh-pet-bath) | 0 | 2026-08-20 | 2026-08-20 | 宠物洗澡频率 |
| 108 | [uckkk/dsh-pet-travel](https://github.com/uckkk/dsh-pet-travel) | 0 | 2026-08-20 | 2026-08-20 | 带宠出行 |
| 109 | [uckkk/dsh-pixel-print](https://github.com/uckkk/dsh-pixel-print) | 0 | 2026-08-20 | 2026-08-20 | 像素打印尺寸 |
| 110 | [uckkk/dsh-play-revenue](https://github.com/uckkk/dsh-play-revenue) | 0 | 2026-08-20 | 2026-08-20 | 播放收益估算 |
| 111 | [uckkk/dsh-plug-type](https://github.com/uckkk/dsh-plug-type) | 0 | 2026-08-20 | 2026-08-20 | 电源插头查询 |
| 112 | [uckkk/dsh-post-frequency](https://github.com/uckkk/dsh-post-frequency) | 0 | 2026-08-20 | 2026-08-20 | 更新频率建议 |
| 113 | [uckkk/dsh-ppt-pages](https://github.com/uckkk/dsh-ppt-pages) | 0 | 2026-08-20 | 2026-08-20 | PPT页数建议 |
| 114 | [uckkk/dsh-project-schedule](https://github.com/uckkk/dsh-project-schedule) | 0 | 2026-08-20 | 2026-08-20 | 项目排期估算 |
| 115 | [uckkk/dsh-pypi-live](https://github.com/uckkk/dsh-pypi-live) | 0 | 2026-08-20 | 2026-08-20 | PyPI包最新版本 |
| 116 | [uckkk/dsh-qps-calc](https://github.com/uckkk/dsh-qps-calc) | 0 | 2026-08-20 | 2026-08-20 | 峰值QPS估算 |
| 117 | [uckkk/dsh-rent-vs-buy](https://github.com/uckkk/dsh-rent-vs-buy) | 0 | 2026-08-20 | 2026-08-20 | 租还是买 |
| 118 | [uckkk/dsh-rental-insurance](https://github.com/uckkk/dsh-rental-insurance) | 0 | 2026-08-20 | 2026-08-20 | 租车保险建议 |
| 119 | [uckkk/dsh-repurchase](https://github.com/uckkk/dsh-repurchase) | 0 | 2026-08-20 | 2026-08-20 | 复购率计算 |
| 120 | [uckkk/dsh-road-trip-cost](https://github.com/uckkk/dsh-road-trip-cost) | 0 | 2026-08-20 | 2026-08-20 | 自驾费用估算 |
| 121 | [uckkk/dsh-salary-per-hour](https://github.com/uckkk/dsh-salary-per-hour) | 0 | 2026-08-20 | 2026-08-20 | 时薪计算 |
| 122 | [uckkk/dsh-score-rank](https://github.com/uckkk/dsh-score-rank) | 0 | 2026-08-20 | 2026-08-20 | 分数百分位 |
| 123 | [uckkk/dsh-screen-break](https://github.com/uckkk/dsh-screen-break) | 0 | 2026-08-20 | 2026-08-20 | 用眼休息提醒 |
| 124 | [uckkk/dsh-script-words](https://github.com/uckkk/dsh-script-words) | 0 | 2026-08-20 | 2026-08-20 | 口播稿字数 |
| 125 | [uckkk/dsh-sd-capacity](https://github.com/uckkk/dsh-sd-capacity) | 0 | 2026-08-20 | 2026-08-20 | 录像存储容量 |
| 126 | [uckkk/dsh-shower-size](https://github.com/uckkk/dsh-shower-size) | 0 | 2026-08-20 | 2026-08-20 | 淋浴房尺寸 |
| 127 | [uckkk/dsh-sla-calc](https://github.com/uckkk/dsh-sla-calc) | 0 | 2026-08-20 | 2026-08-20 | SLA可用性计算 |
| 128 | [uckkk/dsh-sleep-debt](https://github.com/uckkk/dsh-sleep-debt) | 0 | 2026-08-20 | 2026-08-20 | 睡眠债务计算 |
| 129 | [uckkk/dsh-split-bill](https://github.com/uckkk/dsh-split-bill) | 0 | 2026-08-20 | 2026-08-20 | AA分摊 |
| 130 | [uckkk/dsh-stain-removal](https://github.com/uckkk/dsh-stain-removal) | 0 | 2026-08-20 | 2026-08-20 | 去渍方法 |
| 131 | [uckkk/dsh-stock-level](https://github.com/uckkk/dsh-stock-level) | 0 | 2026-08-20 | 2026-08-20 | 再订货点 |
| 132 | [uckkk/dsh-takeout-tip](https://github.com/uckkk/dsh-takeout-tip) | 0 | 2026-08-20 | 2026-08-20 | 外卖费用 |
| 133 | [uckkk/dsh-tax-refund](https://github.com/uckkk/dsh-tax-refund) | 0 | 2026-08-20 | 2026-08-20 | 退税估算 |
| 134 | [uckkk/dsh-teacher-cert](https://github.com/uckkk/dsh-teacher-cert) | 0 | 2026-08-20 | 2026-08-20 | 教师资格证科目 |
| 135 | [uckkk/dsh-tip-calc](https://github.com/uckkk/dsh-tip-calc) | 0 | 2026-08-20 | 2026-08-20 | 小费计算 |
| 136 | [uckkk/dsh-tire-wear](https://github.com/uckkk/dsh-tire-wear) | 0 | 2026-08-20 | 2026-08-20 | 轮胎磨损判断 |
| 137 | [uckkk/dsh-title-length](https://github.com/uckkk/dsh-title-length) | 0 | 2026-08-20 | 2026-08-20 | 标题字数建议 |
| 138 | [uckkk/dsh-toddler-height](https://github.com/uckkk/dsh-toddler-height) | 0 | 2026-08-20 | 2026-08-20 | 幼儿身高标准 |
| 139 | [uckkk/dsh-travel-docs](https://github.com/uckkk/dsh-travel-docs) | 0 | 2026-08-20 | 2026-08-20 | 旅行证件 |
| 140 | [uckkk/dsh-travel-insurance](https://github.com/uckkk/dsh-travel-insurance) | 0 | 2026-08-20 | 2026-08-20 | 旅行险价格估算 |
| 141 | [uckkk/dsh-travel-med](https://github.com/uckkk/dsh-travel-med) | 0 | 2026-08-20 | 2026-08-20 | 旅行药品清单 |
| 142 | [uckkk/dsh-trip-itinerary](https://github.com/uckkk/dsh-trip-itinerary) | 0 | 2026-08-20 | 2026-08-20 | 行程规划 |
| 143 | [uckkk/dsh-vaccine-boost](https://github.com/uckkk/dsh-vaccine-boost) | 0 | 2026-08-20 | 2026-08-20 | 疫苗加强 |
| 144 | [uckkk/dsh-video-length](https://github.com/uckkk/dsh-video-length) | 0 | 2026-08-20 | 2026-08-20 | 视频时长建议 |
| 145 | [uckkk/dsh-vision-check](https://github.com/uckkk/dsh-vision-check) | 0 | 2026-08-20 | 2026-08-20 | 视力屈光度 |
| 146 | [uckkk/dsh-voltage-drop](https://github.com/uckkk/dsh-voltage-drop) | 0 | 2026-08-20 | 2026-08-20 | 电压降校核 |
| 147 | [uckkk/dsh-water-electrolyte](https://github.com/uckkk/dsh-water-electrolyte) | 0 | 2026-08-20 | 2026-08-20 | 出汗电解质 |
| 148 | [uckkk/dsh-wiper-replace](https://github.com/uckkk/dsh-wiper-replace) | 0 | 2026-08-20 | 2026-08-20 | 雨刮更换 |
| 149 | [uckkk/dsh-workout-split](https://github.com/uckkk/dsh-workout-split) | 0 | 2026-08-20 | 2026-08-20 | 训练分化计划 |
| 150 | [YeqingTang/dsh-task-watcher-plugin](https://github.com/YeqingTang/dsh-task-watcher-plugin) | 0 | 2026-08-20 | 2026-08-20 | Windows tray monitor shell plugin for DeepSeek Harness: deploys & manages the standalone DshTaskWatcher tray app, with a start/stop switch in Settings > Plugins. |
| 151 | [yihefeikong-rgb/dsh-cc-haha-dream](https://github.com/yihefeikong-rgb/dsh-cc-haha-dream) | 0 | 2026-08-20 | 2026-08-20 | DSH 自动做梦插件：后台定期回顾会话与记忆整合去重（复刻 CC-HAHA autoDream）· Auto memory consolidation (dream) plugin for DeepSeek Harness, inspired by CC-HAHA |
| 152 | [Zhaokaka21/daily-sanxing](https://github.com/Zhaokaka21/daily-sanxing) | 0 | 2026-08-20 | 2026-08-20 | 一日三省 — 个人日常三件套（日结/日启/反思）：Claude Code 命令 + DSH skill \| A battle-tested personal daily workflow trio: Close, Start, Reflect. |
| 153 | [zhuoxuanliu53-svg/dsh-plugin-market](https://github.com/zhuoxuanliu53-svg/dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | 可视化插件市场：双源(curated + GitHub topic)浏览/搜索/排序/关注/一键安装/更新/卸载/自动更新/热禁用/组合包导入导出 (DSH bundle plugin) |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- （无 / none）
