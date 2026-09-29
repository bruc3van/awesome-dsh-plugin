# packages 映射待补清单 / Packages mapping work list

市场 feed 中尚无安装映射的仓库，按“为什么没映射”分桶。由 `node scripts/reverify-packages.mjs --write-pending` 生成于 2026-09-29；人工核实后把结论写入 `data/packages.json`（命令逐字来自 README 的标 readme-verified；占位符/特殊形态用 install_mode: manual），再重建 `market-v2.json`。本清单是快照不是门控——重建前的新增仓库不会自动出现。

## README 有多个候选包，需人工裁决 / Ambiguous（1）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |
| [webkubor/dsh-mirror](https://github.com/webkubor/dsh-mirror) | 13 | npx @deepseek-ai/dsh plugin --profile web add @dsh-plugins/dsh-user-mirror |

## 仅本地或 link: 安装 / Local-only installs（56）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |
| [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | 860 | dsh plugin --profile web add "github:toby-bridges/api-relay-audit#${DSH_PLUGIN_REF}" |
| [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | 350 | dsh plugin --profile web add /绝对路径/dsh-our-free-model |
| [shengsheng90/dsh-taskboard](https://github.com/shengsheng90/dsh-taskboard) | 330 | dsh plugin --profile web add -w /absolute/path/to/shengsheng-dsh-taskboard-&lt;version&gt;.tgz |
| [furongjun-1999/dsh-memory](https://github.com/furongjun-1999/dsh-memory) | 278 | dsh plugin --profile web add . |
| [nanmicoder/dsh-auto-mode](https://github.com/nanmicoder/dsh-auto-mode) | 164 | dsh plugin --profile web add /tmp/nanmicoder-dsh-auto-mode-0.2.0-alpha.1.tgz |
| [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | 110 | dsh plugin --profile web add . |
| [sirilee/dsh-rewind](https://github.com/sirilee/dsh-rewind) | 98 | dsh plugin --profile &lt;name&gt; add dsh-rewind-plugin@&lt;版本&gt; |
| [westfox-awa/dsh-prompt-optimizer](https://github.com/westfox-awa/dsh-prompt-optimizer) | 93 | dsh plugin --profile po061 add "$d\\dsh-external-dsh-po06-$v.tgz" |
| [plolpl789/dsh-raw-html](https://github.com/plolpl789/dsh-raw-html) | 76 | dsh plugin --profile web add "本插件路径" |
| [rison114514/dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui) | 74 | dsh plugin --profile web add ./rison-dsh-endfield-ui-1.0.1.tgz --allow-build=node-pty |
| [chiphoton/deepseek-harness-video-director](https://github.com/chiphoton/deepseek-harness-video-director) | 69 | dsh plugin --profile web add "file:$PWD" |
| [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) | 68 | dsh plugin --profile web add &lt;该 tgz 绝对路径&gt; → dsh plugin list 确认在列且已启用 → 提醒我刷新 DSH 页面（Ctrl+Shift+R）后侧边栏出现「大肥鱼的小说工坊」。遇到报错先告诉我再处理。 |
| [yan-mc/dsh-normify](https://github.com/yan-mc/dsh-normify) | 66 | dsh plugin --profile web-desktop add &lt;dsh-normify 目录的绝对路径&gt; |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | 63 | dsh plugin add 会把所有声明 bundle 的依赖加入 bundles 层导致冲突。卸载后改用 node scripts/register-plugin.mjs 精确注册。 |
| [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) | 61 | dsh plugin add 需要显式 --profile （缺省会报 required option '--profile &lt;name&gt;' not specified ），且建议钉具体版本号而非 @latest （pnpm 的 minimumReleaseAge 冷静期会让刚发 |
| [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | 59 | dsh plugin add 或插件市场安装。bundle 会自动提供 openbiliclaw 配置行；安装后仍需按下面的配置说明，把 workdir 指向本地 OpenBiliClaw 主项目目录。 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | 46 | dsh plugin --profile web add /absolute/path/to/dsh-scholar |
| [chenw2759-wq/dsh-ide](https://github.com/chenw2759-wq/dsh-ide) | 41 | dsh plugin --profile web add file:C:/你的路径/dsh-IDE/packages/dsh-aionui-panel |
| [zrui-c/dsh-computer-use](https://github.com/zrui-c/dsh-computer-use) | 31 | dsh plugin --profile web add --save-exact file:/path/to/DSH\\ Computer\\ Use.app/Contents/Resources/Plugin |
| [laplaceyoung/dsh-directorx](https://github.com/laplaceyoung/dsh-directorx) | 30 | dsh plugin --profile web add . |
| [hiwhalew/dsh-toolbox](https://github.com/hiwhalew/dsh-toolbox) | 29 | dsh plugin --profile toolbox add ./dist/dsh-toolbox-product-research-workbench-0.2.1.tgz |
| [loserfox/distill](https://github.com/loserfox/distill) | 27 | dsh plugin --profile web add &lt;目录\|git-url&gt; |
| [liangdabiao/dsh-plugin-developer-skill](https://github.com/liangdabiao/dsh-plugin-developer-skill) | 26 | dsh plugin --profile &lt;名&gt; add file:&lt;绝对路径&gt; ；file: 是复制，改代码后要 sync_profile.py \| |
| [wzxaaaa/dsh-w-plugin-ecosystem](https://github.com/wzxaaaa/dsh-w-plugin-ecosystem) | 24 | dsh plugin --profile web add .\\dsh-w-custom-plugins\\dsh-w-custom-plugins-0.3.2.tgz |
| [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) | 23 | dsh plugin add 安装目标皮肤； |
| [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | 22 | dsh plugin --profile rh-demo add ./packages/dsh-bundle |
| [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) | 22 | pnpm dsh plugin --profile web add "&lt;repo&gt;/client-plugin" |
| [anacondakc/dsh-stock-market](https://github.com/anacondakc/dsh-stock-market) | 20 | dsh plugin --profile web add link:/absolute/path/to/dsh-stock-market |
| [lanxing6480/dsh-galgame](https://github.com/lanxing6480/dsh-galgame) | 19 | dsh plugin --profile web add link:H:/Projects/DEEPSE~1/plugins/dsh-galgame ；或从 npm： dsh plugin --profile web add @lanxing/dsh-galgame 。 |
| [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | 15 | dsh plugin add 只负责把插件装进 profile（薄 pnpm 转发器），装完不做任何验证—— |
| [lusblead/dsh-kingdom](https://github.com/lusblead/dsh-kingdom) | 15 | dsh plugin --profile web add ./dsh-kingdom-3.2.0.tgz |
| [zoria-lind/dsh-token-optimizer](https://github.com/zoria-lind/dsh-token-optimizer) | 15 | dsh plugin --profile web add ./dsh-token-optimizer |
| [thanksgiver233/comm-protocol-hub](https://github.com/thanksgiver233/comm-protocol-hub) | 15 | npx -p @deepseek-ai/dsh dsh plugin --profile web add &lt;path-to-comm-protocol-hub&gt; |
| [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) | 13 | dsh plugin --profile demo add ./examples/hello-plugin 后 dsh --profile demo 启动，应看到加载日志和每 5 秒一次的心跳，卸载时自动清理。 |
| [luobosibing2/deepseek-harness-jev](https://github.com/luobosibing2/deepseek-harness-jev) | 13 | dsh plugin --profile jev add ./dist/dsh-jev-plugin-0.1.0.tgz |
| [juntaoding/flowboard](https://github.com/juntaoding/flowboard) | 12 | dsh plugin --profile web add "./flowboard-dsh-${FLOWBOARD_VERSION}.tgz" |
| [pheobe-southwood/dsh-acp-paseo](https://github.com/pheobe-southwood/dsh-acp-paseo) | 11 | dsh plugin add ），保证 stdout 协议纯净。桥在 session/new 响应里携带模型目录/模式/思考选项，把 dsh 的会话事件翻译成 ACP 更新流。详见 \[docs/architecture.md\](docs/architecture.md)。 |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | 10 | dsh plugin --profile web add &lt;路径&gt;/background |
| [weekitmo/oh-my-dsh-plugins](https://github.com/weekitmo/oh-my-dsh-plugins) | 10 | dsh plugin --profile web add ./plugins/dsh-trace |
| [biboyang/dsh-im-bridge](https://github.com/biboyang/dsh-im-bridge) | 10 | dsh plugin --profile web add &lt;本仓库目录&gt; |
| [qianling-0831/dsh-memory-plus](https://github.com/qianling-0831/dsh-memory-plus) | 10 | dsh plugin --profile &lt;profile&gt; add ./packages/dsh-memory-bundle |
| [yyyy231209/ai-company-framework](https://github.com/yyyy231209/ai-company-framework) | 9 | dsh plugin --profile web add .\\ai-company-framework-0.3.10.tgz |
| [justgenius-s/dsh-plugs](https://github.com/justgenius-s/dsh-plugs) | 8 | dsh plugin --profile web add ./plugins/dsh-codex |
| [kun2-5code/dsh-plugin-template](https://github.com/kun2-5code/dsh-plugin-template) | 8 | dsh plugin add activates it as a config layer. |
| [jayzz210l/deepseek-harness-for-ide](https://github.com/jayzz210l/deepseek-harness-for-ide) | 7 | dsh plugin --profile web add &lt;包名&gt; 命令，无需全局安装 DSH CLI； |
| [acidmoon/dizzy-dsh](https://github.com/acidmoon/dizzy-dsh) | 7 | dsh plugin --profile web add &lt;包名&gt; 单独安装。 |
| [euuuuuuzer/dsh-loop-dock](https://github.com/euuuuuuzer/dsh-loop-dock) | 6 | dsh plugin --profile web add ./dsh-loop-dock-0.1.0.tgz |
| [xiaobbl/dsh-opencode-go-model-list](https://github.com/xiaobbl/dsh-opencode-go-model-list) | 6 | dsh plugin --profile web add . |
| [leavestring/awesome-dsh-background-plugin](https://github.com/leavestring/awesome-dsh-background-plugin) | 5 | dsh plugin --profile web add ./awesome-dsh-background-plugin-0.1.9.tgz |
| [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | 5 | dsh plugin add "github:you/repo" 需要包根目录） |
| [ricketts-guo/dsh-off-peak-message](https://github.com/ricketts-guo/dsh-off-peak-message) | 5 | dsh plugin --profile web add --save-prod --ignore-scripts "file:$PWD/dsh-offpeak-send" |
| [gameswu/dsh-pref-kit](https://github.com/gameswu/dsh-pref-kit) | 5 | dsh plugin --profile web add "file:$(pwd)" |
| [gameswu/dsh-notifacation-frame](https://github.com/gameswu/dsh-notifacation-frame) | 5 | dsh plugin --profile web add "file:$(pwd)" |
| [fan56/dsh-subagent-registry](https://github.com/fan56/dsh-subagent-registry) | 4 | dsh plugin --profile tui add ~/github/dsh-subagent-registry |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | 3 | dsh plugin --profile web add ./dsh-plan-lattice-0.4.0-rc.6.tgz |
| [across2005/harness-self-evolution-plugin](https://github.com/across2005/harness-self-evolution-plugin) | 3 | dsh plugin add writes into $DSH_HOME/profiles/&lt;name&gt; , and $DSH_HOME |

## 无 dsh plugin 安装命令 / No install command（64）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |
| [minglink/dsh-infinite-gen-4](https://github.com/minglink/dsh-infinite-gen-4) | 2120 |   &lt;a href="dsh://plugin/install?id=dsh-infinite-gen-4&amp;name=%E6%97%A0%E9%99%90%E5%9B%9B%E4%BB%A3&amp;version=0.4.0&amp;repo=Minglink%2Fdsh-infinite-g |
| [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | 1218 |   For OpenClaw and ClawHub installs, start here: &lt;a href="https://mem9.ai/openclaw-memory"&gt;mem9.ai/openclaw-memory&lt;/a&gt; |
| [omdsh-dev/dsh-browser](https://github.com/omdsh-dev/dsh-browser) | 737 | ## Quick install |
| [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) | 541 | \[使用文档\](https://flizzywine.github.io/dsh-tavern/) · \[入门指南\](https://flizzywine.github.io/dsh-tavern/#a02) · \[宣传视频\](https://www.bilibili.com/vi |
| [zju-llms/openstory](https://github.com/zju-llms/openstory) | 419 | 之前各位穿越者经常反馈不知道如何安装游戏，让我们意识到了当前的门槛太高的问题。于是我们连夜开发了客户端版本，支持一键点击即玩！前往 \[release\](https://github.com/ZJU-LLMs/OpenStory/releases) 下载！快点参与到红楼梦世界来吧！ |
| [miaotofu01/study-mate](https://github.com/miaotofu01/study-mate) | 380 | npx -y @yunmiao/studymate@latest install |
| [fisfzy/dsh-ego-browser](https://github.com/fisfzy/dsh-ego-browser) | 195 | \| **dsh-better-sidebar** \| \`0.12.2\`（可选） \| \`≥ 0.17.1\` \| 未安装时自动回退浮动观察球；\`&lt; 0.12.2\` 可运行但外部链接拦截（\`urlTarget\`）静默降级 \| |
| [a1exsun/dsh-council](https://github.com/a1exsun/dsh-council) | 158 | &lt;p&gt;&lt;a href="#installation"&gt;Installation&lt;/a&gt; · &lt;a href="#how-it-works"&gt;How it works&lt;/a&gt; · &lt;a href="#configuration"&gt;Configuration&lt;/a&gt; · &lt;a hre |
| [hg1048596-pixel/dsh-recall-unread](https://github.com/hg1048596-pixel/dsh-recall-unread) | 127 | ├── plugin/                    # 静态 web profile 插件包（安装后随 DSH 加载，推荐） |
| [a86582751/dsh-nexttavern](https://github.com/a86582751/dsh-nexttavern) | 118 | &gt; **0.3 正在开发，代码会持续同步到本仓库。** 当前包含未发布的源码布局与内聚性重构；统一插件安装、启停和升级仍在实现与验收中。GitHub Releases 待 0.3 完成后发布，下方安装链接仍指向 **0.2.5**。开发进展与兼容变更见 \[CHANGELOG\](C |
| [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) | 106 | /plugin install dsh@deepseek-dsh |
| [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) | 100 | ## 🚀 安装 |
| [xierw/dsh-beauty-skins](https://github.com/xierw/dsh-beauty-skins) | 100 | \[!\[dsh.so install\](https://www.dsh.so/badge/install/dsh-beauty-skins.svg)\](https://www.dsh.so/artifact/dsh-beauty-skins) |
| [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | 97 | - Windows 安装包 + 便携版（zip 解压即用）。 |
| [aik358/dsh-auto-memory](https://github.com/aik358/dsh-auto-memory) | 81 | So we built it as an open plugin: no experimental gate, no subscription tier — install it in DSH, and every model on your machine gets its o |
| [daha1216/dsh-adult-tension](https://github.com/daha1216/dsh-adult-tension) | 76 | ## 🚀 快速安装 |
| [mrrisega/dsh-remote](https://github.com/mrrisega/dsh-remote) | 64 | &gt; **一条命令安装**：\`npx @mrrisega/dsh-remote\` |
| [zenx0x/allinluna](https://github.com/zenx0x/allinluna) | 63 | After installing All in Luna, the simplest way to use it is just to say: |
| [reddapidev/dsh-reddit-radar](https://github.com/reddapidev/dsh-reddit-radar) | 56 | ## Install |
| [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | 52 | pip install -e .                       # or just run: python3 -m distill_kura.cli |
| [heigeai/deepseek-harness-skin](https://github.com/heigeai/deepseek-harness-skin) | 52 | bash scripts/install.sh /path/to/deepseek-harness |
| [yts1919/dsh-vision-complete](https://github.com/yts1919/dsh-vision-complete) | 44 | \[!\[Install\](https://img.shields.io/badge/install-one--click-brightgreen.svg)\](#一安装4-步) |
| [plutokeating/dsh-lark-bot](https://github.com/plutokeating/dsh-lark-bot) | 41 | **前置**：本机已安装 DeepSeek Harness（\`dsh\`）并配置好 \`DEEPSEEK_API_KEY\`；Node.js ≥ 22.19；一个飞书 / Lark 账号。 |
| [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) | 39 | \| **npm** \| 安装和查看包信息 · Install and inspect the package \| \[dsh-computer-use\](https://www.npmjs.com/package/dsh-computer-use) \| |
| [sepinetam/cnki-mcp](https://github.com/sepinetam/cnki-mcp) | 36 | 帮我从 GitHub 上安装 SepineTam/cnki-mcp 这个项目的 skill，subagents 等，并通过命令行的形式初始化这个项目。 |
| [kaichencurry/dsh-design-mode](https://github.com/kaichencurry/dsh-design-mode) | 33 | pnpm install |
| [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 30 | ## 安装 |
| [pensivefei/deep-read-summarize](https://github.com/pensivefei/deep-read-summarize) | 29 | dsh.so 收录要求：公开仓库、\`dsh-plugin\` topic（或 dsh 字段）、README 安装说明、SPDX 许可证（MIT）。 |
| [mr-remon219/search-boost](https://github.com/mr-remon219/search-boost) | 28 | &gt; **Release &amp; Branch Notice**: The formerly standalone \`pi-search-boost\` and \`dsh-search-boost\` projects are merged into one codebase under  |
| [drhushi/dsh-plugin-tav2](https://github.com/drhushi/dsh-plugin-tav2) | 24 | - CJK 字体等运行时组件属于「运行时前置条件」，需用户自行安装， |
| [lbwnb666-ai/deepseekharnessremotegateway](https://github.com/lbwnb666-ai/deepseekharnessremotegateway) | 23 |   &lt;a href="./INSTALL.md"&gt;安装说明&lt;/a&gt; · |
| [gulagala001/oh-my-dsh](https://github.com/gulagala001/oh-my-dsh) | 22 | Oh My DSH 是 \[DeepSeek Harness（DSH）\](https://github.com/deepseek-ai/deepseek-harness) 的增强插件，为长任务补充上下文与记忆管理，把网页和桌面操作接入对话，并提供任务验证、草稿优化和可定制的工作界面 |
| [iwaibaoli/dsh-with-pencil](https://github.com/iwaibaoli/dsh-with-pencil) | 21 | ### Install |
| [airmetro/dsh-update-checker](https://github.com/airmetro/dsh-update-checker) | 18 | A permanent Cordis plugin for the \[DeepSeek Harness\](https://github.com/deepseek-ai/deepseek-harness) Web GUI that **auto-checks for new Dee |
| [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) | 17 |     &lt;a href="https://memorax-ai.github.io/dsh-harmony/guide/installation"&gt;&lt;strong&gt;Get started&lt;/strong&gt;&lt;/a&gt; |
| [bainianling/dsh-jailbreak-mode](https://github.com/bainianling/dsh-jailbreak-mode) | 15 | 一个独立、自研、可安装的 Cordis 插件：借鉴 DeepSeek Harness 的插件模式，把"破甲模式"（jailbreak mode）实现为对宿主 agent 会话的提示词改写。本仓库为学习交流与**获得授权的安全研究**提供源码与构建好的发布产物（tarball）。 |
| [pazz11/jnpz](https://github.com/pazz11/jnpz) | 14 | # 一键安装（Windows） |
| [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) | 14 | ## 📦 安装 |
| [hchao3335-maker/dsh-lan-gate](https://github.com/hchao3335-maker/dsh-lan-gate) | 13 | ## 安装（跟着做，三步完成） |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | 13 | 5. Replace the empty invariant installer when the package owns an authoritative event or mutable data relationship. |
| [guomonth/dsh-multi-tenant](https://github.com/guomonth/dsh-multi-tenant) | 13 | **Cell MVP alpha.** Two-user and real-model regression passed. \`0.9.0-alpha.1\` uses npm \`latest\`, a default installation channel, not a stab |
| [gtaifu/dsh-wechat-bridge](https://github.com/gtaifu/dsh-wechat-bridge) | 13 | - ✅ 消费端安装实测（git 源等价版，2026-08-14）：\`npm install -g --prefix &lt;dir&gt; github:gtaifu/dsh-wechat-bridge#main\` → \`added 1 package\`、**0 运行时依赖**；产物为 \`f |
| [nicholas023/vision-exp-tile](https://github.com/nicholas023/vision-exp-tile) | 12 | &gt; ⑤ **致谢与边界声明**：本版与上游 \[picturereader\](https://github.com/jing-hy/picturereader)（MIT；作者 @jing-hy，感谢上游作者与社区）做了共存协作优化。本插件保持**完全独立**：**不安装 pictu |
| [uynajgi/dsh-ssh](https://github.com/uynajgi/dsh-ssh) | 11 | **The harness does not need to be installed remotely.** dsh-ssh implements remote providers for two of the harness's capability seams — \`ctx |
| [altairpaca/dshelm](https://github.com/altairpaca/dshelm) | 9 | \| npm 一键安装 \| 发布门槛 \| 尚未开放，当前只能使用下方源码预览流程 \| |
| [morlay/dsh-plugin](https://github.com/morlay/dsh-plugin) | 9 | \| \`bundles/better-session/\`                  \| 聚合层：profile bundle（安装 / 使用 / 配置）                                                              |
| [tlyer233/dsh-vscode-review](https://github.com/tlyer233/dsh-vscode-review) | 9 | ## Install |
| [kobenfang/biga](https://github.com/kobenfang/biga) | 9 | npx clawhub install biga |
| [hellosky983/dsh-mc-agent](https://github.com/hellosky983/dsh-mc-agent) | 9 | - ✅ 官方版本清单（release / snapshot / 远古版本），已安装自动标记 |
| [zmm863-commits/dsh-agnes-studio](https://github.com/zmm863-commits/dsh-agnes-studio) | 9 | \| **ffmpeg + ffprobe** \| 视频拼接、字幕烧录、音画合成 \| 面板顶部提示安装方法；可设 \`AGNES_FFMPEG\` 指定路径 \| |
| [lihang-lh/dsh-task-panel](https://github.com/lihang-lh/dsh-task-panel) | 8 |   - **原生 App（iOS/Android）支持**：代理先探测仓库判断任务形态——Web 用浏览器/Playwright 截图；原生 App 按平台用 \`adb exec-out screencap\`（Android 真机/模拟器）、\`xcrun simctl io\`（i |
| [clearkurt/dsh-win-terminal-inspector](https://github.com/clearkurt/dsh-win-terminal-inspector) | 8 | ## 安装（以 web profile 为例） |
| [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | 8 | **npm 发版兼容**：兼容 DSH npm 发版 \`@deepseek-ai/dsh@0.1.1-rc.1\`（v0.2.0 实机 typecheck/构建/测试通过，适配要点见下节）；旧 0.1.x 版本兼容 \`@deepseek-ai/dsh@0.0.1-rc.1\`（即 s |
| [tikzen/dsh-agent-arena](https://github.com/tikzen/dsh-agent-arena) | 7 | ## 安装 |
| [bloodtmai-cmyk/dsh-ai-hub](https://github.com/bloodtmai-cmyk/dsh-ai-hub) | 7 | 本仓库只发布源码，不提供 Harness Enterprise 的 macOS 或 Windows 安装包。客户端构建、签名和分发由具体部署者负责。 |
| [haniubub/seo-toolkit](https://github.com/haniubub/seo-toolkit) | 7 | Playwright (installed by \`./setup.sh\` into a workspace-local \`pylibs/\`). |
| [loopwithai/loopwithai](https://github.com/loopwithai/loopwithai) | 5 | - **Workspace continuity** — reopen the last Workspace automatically; a fresh install starts at \`~/.lwa/workspace\`. |
| [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) | 5 | - \[Install\](#install) |
| [gwj001/arch-lens](https://github.com/gwj001/arch-lens) | 5 | ## 2. 安装启用（三步） |
| [kirbylynx/dsh-hub](https://github.com/kirbylynx/dsh-hub) | 4 | \| \`dsh-hub-plugin\` \| Preferred instance-side delivery mode. It runs inside DSH and provides the host plugin skeleton, explicit \`remote-capab |
| [jasonqq/dsh-btw-plugin](https://github.com/jasonqq/dsh-btw-plugin) | 3 | ## Install |
| [alldurham/foreman-dsh](https://github.com/alldurham/foreman-dsh) | 3 | ## 安装 |
| [mrmaii/knotline](https://github.com/mrmaii/knotline) | 3 | npm install |
| [neomei/dsh-roundtable](https://github.com/neomei/dsh-roundtable) | 3 | 8. \[安装\](#安装) |

