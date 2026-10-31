# packages 映射待补清单 / Packages mapping work list

市场 feed 中尚无安装映射的仓库，按“为什么没映射”分桶。由 `node scripts/reverify-packages.mjs --write-pending` 生成于 2026-10-31；人工核实后把结论写入 `data/packages.json`（命令逐字来自 README 的标 readme-verified；占位符/特殊形态用 install_mode: manual），再重建 `market-v2.json`。本清单是快照不是门控——重建前的新增仓库不会自动出现。

## README 有多个候选包，需人工裁决 / Ambiguous（0）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |

## 仅本地或 link: 安装 / Local-only installs（67）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |
| [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | 899 | dsh plugin --profile web add "github:toby-bridges/api-relay-audit#${DSH_PLUGIN_REF}" |
| [luobosibing2/dsh-jev-plugin](https://github.com/luobosibing2/dsh-jev-plugin) | 200 | dsh plugin --profile jev add ./dist/dsh-jev-plugin-0.1.0.tgz |
| [huzhengcai471-crypto/dsh-startup-secret](https://github.com/huzhengcai471-crypto/dsh-startup-secret) | 175 | dsh plugin add 只是 |
| [yan-mc/dsh-normify](https://github.com/yan-mc/dsh-normify) | 121 | dsh plugin --profile web-desktop add &lt;dsh-normify 目录的绝对路径&gt; |
| [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) | 105 | dsh plugin --profile web add &lt;该 tgz 绝对路径&gt; → dsh plugin list 确认在列且已启用 → 提醒我刷新 DSH 页面（Ctrl+Shift+R）。遇到报错先告诉我再处理。 |
| [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | 102 | dsh plugin --profile web add . |
| [ssamurias/dsh-fish](https://github.com/ssamurias/dsh-fish) | 76 | dsh plugin add 只会自动加 dsh-base ， dsh-web-app 要自己补进 bundles 。 |
| [joeseesun/qiaomu-ui-learn-dsh](https://github.com/joeseesun/qiaomu-ui-learn-dsh) | 72 | dsh plugin --profile YOUR_PROFILE add /absolute/path/qiaomu-ui-learn-dsh-0.1.3.tgz |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | 56 | dsh plugin --profile web add /absolute/path/to/dsh-scholar |
| [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | 48 | dsh plugin --profile &lt;profile&gt; add file:C:/path/to/dsh-plugin-session-delete |
| [chenw2759-wq/dsh-ide](https://github.com/chenw2759-wq/dsh-ide) | 43 | dsh plugin --profile web add file:C:/你的路径/dsh-IDE/packages/dsh-aionui-panel |
| [zrui-c/dsh-computer-use](https://github.com/zrui-c/dsh-computer-use) | 38 | dsh plugin --profile web add --save-exact file:/path/to/DSH\\ Computer\\ Use.app/Contents/Resources/Plugin |
| [duoasa/dsh-to-figma](https://github.com/duoasa/dsh-to-figma) | 35 | dsh plugin --profile &lt;你的-profile&gt; add "file:/绝对路径/dsh-to-figma-0.3.0.tgz" |
| [liangdabiao/dsh-plugin-developer-skill](https://github.com/liangdabiao/dsh-plugin-developer-skill) | 34 | dsh plugin --profile &lt;名&gt; add file:&lt;绝对路径&gt; ；file: 是复制，改代码后要 sync_profile.py \| |
| [wonderandyou/dsh-qwen-paint](https://github.com/wonderandyou/dsh-qwen-paint) | 33 | dsh plugin --profile desktop add link:&lt;本目录&gt; （desktop profile 必须先完全退出 DSH）。 |
| [kingcharleslzy-ai/dsh-qwen-studio](https://github.com/kingcharleslzy-ai/dsh-qwen-studio) | 32 | dsh plugin --profile desktop add /absolute/path/dsh-qwen-studio-&lt;version&gt;.tgz |
| [minglink/wanxiang-knowledge](https://github.com/minglink/wanxiang-knowledge) | 31 | dsh plugin --profile web add "&lt;插件包绝对路径&gt;" |
| [hiwhalew/dsh-toolbox](https://github.com/hiwhalew/dsh-toolbox) | 30 | dsh plugin --profile toolbox add ./dist/dsh-toolbox-product-research-workbench-0.2.1.tgz |
| [loserfox/distill](https://github.com/loserfox/distill) | 27 | dsh plugin --profile web add &lt;目录\|git-url&gt; |
| [anacondakc/dsh-stock-market](https://github.com/anacondakc/dsh-stock-market) | 20 | dsh plugin --profile web add link:/absolute/path/to/dsh-stock-market |
| [lusblead/dsh-kingdom](https://github.com/lusblead/dsh-kingdom) | 16 | dsh plugin --profile web add ./dsh-kingdom-3.3.0.tgz |
| [alittlelov/dsh-soundcheck](https://github.com/alittlelov/dsh-soundcheck) | 16 | dsh plugin add ALittleLov/dsh-soundcheck |
| [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) | 16 | dsh plugin --profile demo add ./examples/hello-plugin 后 dsh --profile demo 启动，应看到加载日志和每 5 秒一次的心跳，卸载时自动清理。 |
| [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | 14 | dsh plugin add 只负责把插件装进 profile（薄 pnpm 转发器），装完不做任何验证—— |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | 13 | dsh plugin --profile &lt;profile&gt; add &lt;package-or-tarball&gt; |
| [juntaoding/flowboard](https://github.com/juntaoding/flowboard) | 12 | dsh plugin --profile web add "./flowboard-dsh-${FLOWBOARD_VERSION}.tgz" |
| [biboyang/dsh-im-bridge](https://github.com/biboyang/dsh-im-bridge) | 11 | dsh plugin --profile web add &lt;本仓库目录&gt; |
| [cheesehaqi/dsh-qq-onebot-bridge](https://github.com/cheesehaqi/dsh-qq-onebot-bridge) | 11 | dsh plugin --profile web add &lt;本目录&gt; |
| [zilize/parallax-dsh](https://github.com/zilize/parallax-dsh) | 10 | dsh plugin --profile desktop add . |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | 10 | dsh plugin --profile web add &lt;路径&gt;/background |
| [jayzz210l/deepseek-harness-for-ide](https://github.com/jayzz210l/deepseek-harness-for-ide) | 9 | dsh plugin --profile web add &lt;包名&gt; 命令，无需全局安装 DSH CLI； |
| [yyyy231209/ai-company-framework](https://github.com/yyyy231209/ai-company-framework) | 9 | dsh plugin --profile web add .\\ai-company-framework-0.3.10.tgz |
| [fan56/dsh-subagent-registry](https://github.com/fan56/dsh-subagent-registry) | 9 | dsh plugin --profile tui add ~/github/dsh-subagent-registry |
| [bingtang1019/dsh-ppt-fusion](https://github.com/bingtang1019/dsh-ppt-fusion) | 9 | dsh plugin add 带 -w ；PS 5.1 下生成文件用 Node 写（无 BOM）； \[Content_Types\].xml 路径必须 -LiteralPath ；子进程管道可用但大产物走文件契约。 |
| [justgenius-s/dsh-plugs](https://github.com/justgenius-s/dsh-plugs) | 9 | dsh plugin --profile web add ./plugins/dsh-codex |
| [chunsi-w/dsh-ctxopt-compaction](https://github.com/chunsi-w/dsh-ctxopt-compaction) | 9 | pnpm dsh plugin --profile headless add file:/absolute/path/to/dsh-ctxopt-compaction |
| [beijingwahw/dsh-conv-export](https://github.com/beijingwahw/dsh-conv-export) | 9 | dsh plugin add 通过 pnpm 把 bundle 装入 profile。 |
| [kun2-5code/dsh-plugin-template](https://github.com/kun2-5code/dsh-plugin-template) | 8 | dsh plugin add activates it as a config layer. |
| [wall1234567/dsh-rofm](https://github.com/wall1234567/dsh-rofm) | 8 | dsh plugin --profile desktop add "link:/home/&lt;you&gt;/plugins/dsh-rofm" |
| [wilburli/onlymemory-plugin](https://github.com/wilburli/onlymemory-plugin) | 8 | dsh plugin --profile web add /path/to/onlyMemory-plugin |
| [azwosile/dsh-highres-vision](https://github.com/azwosile/dsh-highres-vision) | 8 | dsh plugin --profile web add ./dsh-highres-vision |
| [acidmoon/dizzy-dsh](https://github.com/acidmoon/dizzy-dsh) | 7 | dsh plugin --profile web add &lt;包名&gt; 单独安装。 |
| [muwinds/dsh-codemode](https://github.com/muwinds/dsh-codemode) | 7 | dsh plugin --profile desktop add "link:&lt;path-to-the-checkout&gt;" |
| [br1nosense/dsh-wxauto-plugin](https://github.com/br1nosense/dsh-wxauto-plugin) | 7 | dsh plugin --profile web add &lt;dir&gt; 安装后自动加入 profile 的 dsh.profile.bundles 层栈。 |
| [xiaobbl/dsh-opencode-go-model-list](https://github.com/xiaobbl/dsh-opencode-go-model-list) | 7 | dsh plugin --profile web add . |
| [loserfox/telegram](https://github.com/loserfox/telegram) | 7 | dsh plugin --profile web add &lt;dir\|git-url&gt; |
| [xiaomengxinbb/dsh-qq-bridge](https://github.com/xiaomengxinbb/dsh-qq-bridge) | 7 | dsh plugin --profile dev add ~/dsh-qq-bridge |
| [euuuuuuzer/dsh-loop-dock](https://github.com/euuuuuuzer/dsh-loop-dock) | 6 | dsh plugin --profile web add ./dsh-loop-dock-0.1.0.tgz |
| [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | 6 | dsh plugin add "github:you/repo" 需要包根目录） |
| [ricketts-guo/dsh-off-peak-message](https://github.com/ricketts-guo/dsh-off-peak-message) | 6 | dsh plugin --profile web add --save-prod --ignore-scripts "file:$PWD/dsh-offpeak-send" |
| [xiongjiamu/dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) | 6 | dsh plugin --profile web add ./dsh-atomgit |
| [leavestring/awesome-dsh-background-plugin](https://github.com/leavestring/awesome-dsh-background-plugin) | 5 | dsh plugin --profile desktop add &lt;插件tgz或目录或包名&gt; |
| [534119219/chicheng-peak](https://github.com/534119219/chicheng-peak) | 5 | dsh plugin --profile web add D:\\Harness\\chicheng-peak |
| [gameswu/dsh-notifacation-frame](https://github.com/gameswu/dsh-notifacation-frame) | 5 | dsh plugin --profile web add "file:$(pwd)" |
| [awesome-ai-pedia/awesome-dsh-pet](https://github.com/awesome-ai-pedia/awesome-dsh-pet) | 4 | dsh plugin --profile web add /Users/icourt/Desktop/DSH-plugin/Awesome-DSH-Pet |
| [beijingwahw/dsh-companion-enterprise](https://github.com/beijingwahw/dsh-companion-enterprise) | 4 | dsh plugin add beijingwahw/dsh-companion-enterprise --profile web |
| [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | 4 | dsh plugin add can install this repo into a dsh profile: the plugin is a thin Node/cordis shell ( package.json , cordis.patch.yml , lib/ ) t |
| [xing666173/dsh-vision-hub](https://github.com/xing666173/dsh-vision-hub) | 4 | dsh plugin add xing666173/dsh-vision-hub |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | 3 | dsh plugin --profile web add ./dsh-plan-lattice-0.4.0-rc.6.tgz |
| [across2005/harness-self-evolution-plugin](https://github.com/across2005/harness-self-evolution-plugin) | 3 | dsh plugin add writes into $DSH_HOME/profiles/&lt;name&gt; , and $DSH_HOME |
| [arfcon/dsh-hub-dsh](https://github.com/arfcon/dsh-hub-dsh) | 3 | dsh plugin --profile web add "link:$HOME/.dsh/plugin-src/dsh-hub" |
| [mlte0907/dsh-teams-x](https://github.com/mlte0907/dsh-teams-x) | 3 | dsh plugin --profile web add &lt;仓库路径&gt;/dsh-teams-x-&lt;version&gt;.tgz |
| [cyzlmh/dsh-cyber-sec](https://github.com/cyzlmh/dsh-cyber-sec) | 3 | dsh plugin --profile cyber-sec add ./dist/&lt;plugins.tgz&gt; ./dist/&lt;bundle.tgz&gt; |
| [fqxxzyw/dsh-groupchat](https://github.com/fqxxzyw/dsh-groupchat) | 3 | dsh plugin --profile desktop add link:C:/plugins/dsh-groupchat |
| [pn1024/dsh-ppt-master](https://github.com/pn1024/dsh-ppt-master) | 3 | dsh plugin --profile web add link:&lt;path-to-this-directory&gt; |
| [yanwenzong1-pixel/xinlan-dsh-plugin](https://github.com/yanwenzong1-pixel/xinlan-dsh-plugin) | 3 | dsh plugin --profile web add ./dsh-quick-append |
| [1052326311/dsh-goal-quiescence](https://github.com/1052326311/dsh-goal-quiescence) | 2 | dsh plugin --profile web add ./dsh-goal-quiescence-&lt;version&gt;.tgz |

## 无 dsh plugin 安装命令 / No install command（98）

| 仓库 / Repo | ★ | Hint |
| --- | ---: | --- |
| [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | 1233 |   For OpenClaw and ClawHub installs, start here: &lt;a href="https://mem9.ai/openclaw-memory"&gt;mem9.ai/openclaw-memory&lt;/a&gt; |
| [omdsh-dev/dsh-browser](https://github.com/omdsh-dev/dsh-browser) | 946 | ## Quick install |
| [daha1216/dsh-adult-tension](https://github.com/daha1216/dsh-adult-tension) | 438 | \[超多世界\](#世界) · \[支持与赞助\](#支持与赞助) · \[体验切片\](#实录) · \[怎么开始\](#开始) · \[安装\](#安装) |
| [saos-3624/dsh-video-storyboard](https://github.com/saos-3624/dsh-video-storyboard) | 271 | ## 安装 |
| [evilevil/dsh-purge-021rc2](https://github.com/evilevil/dsh-purge-021rc2) | 190 | &gt; 本仓库以 **1.1.72（master）** 为基座，把 0.2.1-rc.2 上必崩的几处修掉，做成可直接安装的版本。**上游恢复维护后，请优先回到上游。** |
| [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) | 112 | ## 🚀 安装 |
| [jialaoliu/dsh-baton](https://github.com/jialaoliu/dsh-baton) | 110 |   &lt;picture&gt;&lt;source media="(prefers-color-scheme: dark)" srcset="./assets/readme/en/install-dark.svg"&gt;&lt;img src="./assets/readme/en/install.sv |
| [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) | 104 | /plugin install dsh@deepseek-dsh |
| [mengwex/dsh-block-ptc](https://github.com/mengwex/dsh-block-ptc) | 103 | - \[Install\](#install) |
| [xierw/dsh-beauty-skins](https://github.com/xierw/dsh-beauty-skins) | 100 | \[!\[dsh.so install\](https://www.dsh.so/badge/install/dsh-beauty-skins.svg)\](https://www.dsh.so/artifact/dsh-beauty-skins) |
| [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | 92 | - Windows 安装包 + 便携版（zip 解压即用）。 |
| [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos) | 83 | **把 DeepSeek 官方 Agent 浏览器 UI（DeepSeek Harness / dsh）装成飞牛 fnOS 常驻应用：离线安装免联网，局域网与 FN Connect 直连，自带 28001 管理面板** |
| [luowang-ui/dsh-purge-plus](https://github.com/luowang-ui/dsh-purge-plus) | 74 | ## 一行安装 |
| [zenx0x/allinluna](https://github.com/zenx0x/allinluna) | 63 | After installing All in Luna, the simplest way to use it is just to say: |
| [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) | 63 | \| **npm** \| 安装和查看包信息 · Install and inspect the package \| \[dsh-computer-use\](https://www.npmjs.com/package/dsh-computer-use) \| |
| [heigeai/deepseek-harness-skin](https://github.com/heigeai/deepseek-harness-skin) | 62 | bash scripts/install.sh /path/to/deepseek-harness |
| [sepinetam/cnki-mcp](https://github.com/sepinetam/cnki-mcp) | 61 | 帮我从 GitHub 上安装 SepineTam/cnki-mcp 这个项目的 skill，subagents 等，并通过命令行的形式初始化这个项目。 |
| [yts1919/dsh-vision-complete](https://github.com/yts1919/dsh-vision-complete) | 57 | \[!\[Install\](https://img.shields.io/badge/install-one--click-brightgreen.svg)\](#一安装4-步) |
| [insideyou-0501/dsh-mech-workbench](https://github.com/insideyou-0501/dsh-mech-workbench) | 56 | 这是一个 **Host-only bundle**（无 npm 依赖、无构建步骤），按 DSH 官方规范用 \`plugin_manager\` 安装： |
| [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | 54 | pip install -e .                       # or just run: python3 -m distill_kura.cli |
| [morluto/smokinggun](https://github.com/morluto/smokinggun) | 53 | ## Install the agent skill |
| [varsian/ghost](https://github.com/varsian/ghost) | 45 | - 一次安装一个参考音色（音频 + 转写文本）；情绪名只是事件流标签，不切换音色。 |
| [gulagala001/oh-my-dsh](https://github.com/gulagala001/oh-my-dsh) | 45 |   &lt;a href="#readme-install"&gt;&lt;img alt="DSH 0.2.1-rc.5" src="https://img.shields.io/badge/DSH-0.2.1--rc.5-0969da?style=flat-square"&gt;&lt;/a&gt; |
| [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 30 | ## 安装 |
| [morluto/gitcontribute](https://github.com/morluto/gitcontribute) | 28 | &lt;summary&gt;&lt;strong&gt;Other installation options&lt;/strong&gt;&lt;/summary&gt; |
| [lbwnb666-ai/deepseekharnessremotegateway](https://github.com/lbwnb666-ai/deepseekharnessremotegateway) | 26 |   &lt;a href="./INSTALL.md"&gt;安装说明&lt;/a&gt; · |
| [something11235/dsh-posterflow-ai](https://github.com/something11235/dsh-posterflow-ai) | 23 | 访问 **\[PosterFlow AI 在线版\](https://www.posterflow-ai.xyz)**，无需下载或安装，打开即可使用。你既可以直接使用注册即送的平台积分，也可以使用自己的API Key配置自己掌控接口。 |
| [iwaibaoli/dsh-with-pencil](https://github.com/iwaibaoli/dsh-with-pencil) | 23 | ### Install |
| [sqhlnb666/mindsea](https://github.com/sqhlnb666/mindsea) | 22 | ## 安装 |
| [yembors64632/dsh-connect](https://github.com/yembors64632/dsh-connect) | 18 |  |
| [gtaifu/dsh-wechat-bridge](https://github.com/gtaifu/dsh-wechat-bridge) | 14 | - ✅ 消费端安装实测（git 源等价版，2026-08-14）：\`npm install -g --prefix &lt;dir&gt; github:gtaifu/dsh-wechat-bridge#main\` → \`added 1 package\`、**0 运行时依赖**；产物为 \`f |
| [pazz11/jnpz](https://github.com/pazz11/jnpz) | 14 | # 一键安装（Windows） |
| [yyh-001/dsh-companion](https://github.com/yyh-001/dsh-companion) | 14 | ## 安装 |
| [hchao3335-maker/dsh-lan-gate](https://github.com/hchao3335-maker/dsh-lan-gate) | 13 | ## 安装（跟着做，三步完成） |
| [neohotaru/dsh-knowledge-canvas](https://github.com/neohotaru/dsh-knowledge-canvas) | 13 | ## Install |
| [lakeofsky347/yingliu-video-studio](https://github.com/lakeofsky347/yingliu-video-studio) | 12 | - \[安装与首次配置\](#setup) |
| [zhangx413/dsh-pbr-material](https://github.com/zhangx413/dsh-pbr-material) | 12 | node scripts\\install-into-dsh.mjs |
| [bloodtmai-cmyk/dsh-ai-hub](https://github.com/bloodtmai-cmyk/dsh-ai-hub) | 11 | 本仓库只发布源码，不提供 Harness Enterprise 的 macOS 或 Windows 安装包。客户端构建、签名和分发由具体部署者负责。 |
| [1lany2a/dsh-domain-role](https://github.com/1lany2a/dsh-domain-role) | 11 | &gt; **\`{体系根}\` 指的就是 \`framework/\`**：安装到本机后，它就是你放这套体系的那个目录。文档里的 \`{体系根}/templates/…\` 在当前仓库里读作 \`framework/templates/…\`。 |
| [nico-zhuang/dsh-nav-fold](https://github.com/nico-zhuang/dsh-nav-fold) | 10 | &gt; 动画与截图均在\[匿名示意页\](docs/preview.html)中运行真实插件生成；动画的指针输入由脚本驱动。项目和扩展面板名称为虚构数据，不包含真实会话或账号；实际图标由 DSH 与已安装插件提供。 |
| [tlyer233/dsh-vscode-review](https://github.com/tlyer233/dsh-vscode-review) | 10 | ## Install |
| [derkinl/dsh-remembers](https://github.com/derkinl/dsh-remembers) | 10 | \| **Windows** \| ✅ **支持**（install.ps1） \| |
| [wnluo/dsh-mobile-plugin](https://github.com/wnluo/dsh-mobile-plugin) | 10 | - **插件**：手机上的插件市场里搜索、安装、更新、卸载；插件自己也能升级到新版。 |
| [chipweaver/veripower](https://github.com/chipweaver/veripower) | 10 | 1. **Install and enable VeriPower** using your platform's guide: |
| [altairpaca/dshelm](https://github.com/altairpaca/dshelm) | 9 | \| npm 一键安装 \| 发布门槛 \| 尚未开放，当前只能使用下方源码预览流程 \| |
| [haoyanzhang123/dsh-plugin-control-your-schedule](https://github.com/haoyanzhang123/dsh-plugin-control-your-schedule) | 9 | &lt;a href="README.en.md"&gt;English&lt;/a&gt; · &lt;a href="#安装"&gt;安装&lt;/a&gt; · &lt;a href="#使用"&gt;使用&lt;/a&gt; · &lt;a href="#核心特性"&gt;功能&lt;/a&gt; · &lt;a href="#许可证"&gt;许可证&lt;/a&gt;&lt;/p&gt; |
| [lyl-z/dsh-armorbreak](https://github.com/lyl-z/dsh-armorbreak) | 9 | \| **DeepSeek Harness** \| Native Cordis bundle / \`armorbreak\` preset \| \[DSH installation\](docs/installation.md) \| Recorded Desktop L0; not re |
| [starry0214/dsh-memory](https://github.com/starry0214/dsh-memory) | 9 | irm https://raw.githubusercontent.com/Starry0214/dsh-memory/main/install.ps1 \| iex |
| [kobenfang/biga](https://github.com/kobenfang/biga) | 9 | npx clawhub install biga |
| [tikzen/dsh-agent-arena](https://github.com/tikzen/dsh-agent-arena) | 8 | ## 安装 |
| [lihang-lh/dsh-task-panel](https://github.com/lihang-lh/dsh-task-panel) | 8 |   - **原生 App（iOS/Android）支持**：代理先探测仓库判断任务形态——Web 用浏览器/Playwright 截图；原生 App 按平台用 \`adb exec-out screencap\`（Android 真机/模拟器）、\`xcrun simctl io\`（i |
| [haniubub/seo-toolkit](https://github.com/haniubub/seo-toolkit) | 8 | Playwright (installed by \`./setup.sh\` into a workspace-local \`pylibs/\`). |
| [clearkurt/dsh-win-terminal-inspector](https://github.com/clearkurt/dsh-win-terminal-inspector) | 8 | ## 安装（以 web profile 为例） |
| [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | 8 | **npm 发版兼容**：兼容 DSH npm 发版 \`@deepseek-ai/dsh@0.1.1-rc.1\`（v0.2.0 实机 typecheck/构建/测试通过，适配要点见下节）；旧 0.1.x 版本兼容 \`@deepseek-ai/dsh@0.0.1-rc.1\`（即 s |
| [viztor/dsh-opencode-patch](https://github.com/viztor/dsh-opencode-patch) | 8 | **1. Install** into your DSH Web profile (Node 24+): |
| [crazy222123/dsh-self-evolve](https://github.com/crazy222123/dsh-self-evolve) | 8 | 一个安装在 DSH 宿主上的记忆插件。它持续观察你的工作方式（对话、习惯、纠正、工具使用）， |
| [culeot/dsh-agent-memory](https://github.com/culeot/dsh-agent-memory) | 8 | pip install torch transformers onnxruntime numpy huggingface_hub |
| [dsh-raising-plan/dsh-mnemosyne](https://github.com/dsh-raising-plan/dsh-mnemosyne) | 8 | &gt; **更名说明**：本项目由 \`dsh-cognitive-memory\` 更名而来。旧配置键、旧环境变量与旧数据目录仍保留迁移兼容；安装时请使用新的 \`dsh-mnemosyne\`。 |
| [kingsleyasher/personal-knowledge-base](https://github.com/kingsleyasher/personal-knowledge-base) | 8 | - Historical packages are no longer offered from public download locations. Users of older versions should install 2.3.0 first, then use the |
| [dogwind221/img2img-studio](https://github.com/dogwind221/img2img-studio) | 8 | ## 安装 |
| [maple110011/dsh-obsidian-math](https://github.com/maple110011/dsh-obsidian-math) | 8 | ## Install |
| [kratoslee-6/html-ninefox](https://github.com/kratoslee-6/html-ninefox) | 8 | &gt; **下一步 · v0.8.4**：PDF 反向拆解（\`\[pdf\]\` extra，扫描件如实报错）与图片资产增强；Tauri 壳动工（决策已定：与 PyInstaller 并存）。计划见 \[v0.8.3 计划\](docs/PLAN-v0.8.3.md)。 |
| [orderg-x/dsh-mac-computer-use](https://github.com/orderg-x/dsh-mac-computer-use) | 8 | &gt; **安装**：DSH「插件」页 →「添加插件」，填 \`dsh-mac-computer-use\`（npm 包，连不上 npm 会自动换国内镜像），重启 DSH。安装包自带编好的程序（Apple 芯片和 Intel 都能用，macOS 11 起），不用编译。仅 macOS。 |
| [offzen/dsh-gitea-search](https://github.com/offzen/dsh-gitea-search) | 7 | - **Python 3 ≥ 3.10**（需安装 \`jieba\` 分词库与支持 FTS5 的系统 \`sqlite3\`）； |
| [tr1v3r/dsh-proxy](https://github.com/tr1v3r/dsh-proxy) | 7 | demo, run \`node scripts/demo.mjs\` after install. |
| [shenhuanageshei/dsh-team-link](https://github.com/shenhuanageshei/dsh-team-link) | 7 | - \[九、安装\](#九安装) |
| [guojiz/gitlearnos](https://github.com/guojiz/gitlearnos) | 7 | GitLearnOS ships an installable native bundle for the official DeepSeek Harness |
| [phoenixs57/deepseek-aix](https://github.com/phoenixs57/deepseek-aix) | 7 | - **Skin management**: new skins can be installed as plugins. |
| [dpkg-s/ai-memory-template](https://github.com/dpkg-s/ai-memory-template) | 6 | ## 快速安装 |
| [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) | 6 | - \[Install\](#install) |
| [xiaohj233/dsh-magic-context](https://github.com/xiaohj233/dsh-magic-context) | 6 | ## 安装 |
| [yusaltyfish/dsh-bongo-fish](https://github.com/yusaltyfish/dsh-bongo-fish) | 6 | ## 安装 |
| [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) | 6 |   一个官方 repository-plugin（\`.dsh-plugin\` 格式）＋同名终端 CLI：安装级 + harness 内检查， |
| [heswy/dsh-plugin-codex-bridge](https://github.com/heswy/dsh-plugin-codex-bridge) | 6 | \| 组件 \| 提供的能力 \| 安装位置 \| |
| [aegink/dsh-channel-qq](https://github.com/aegink/dsh-channel-qq) | 6 | npm install |
| [forelsket521-jpg/vvn-deepseek-harness](https://github.com/forelsket521-jpg/vvn-deepseek-harness) | 5 | 打开 vvn 的时候会自动检查并安装。 |
| [ikun666666/dsh-groupchat](https://github.com/ikun666666/dsh-groupchat) | 5 | ## 安装 |
| [loopwithai/loopwithai](https://github.com/loopwithai/loopwithai) | 5 | - **Workspace continuity** — reopen the last Workspace automatically; a fresh install starts at \`~/.lwa/workspace\`. |
| [enoughpower/dsh-harmony](https://github.com/enoughpower/dsh-harmony) | 5 | dsh-pocket 安装与使用见其 \[README\](https://github.com/shaobeichen/dsh-pocket)。 |
| [gwj001/arch-lens](https://github.com/gwj001/arch-lens) | 5 | ## 2. 安装启用（三步） |
| [mikuzjc/dsh-office-for-mso](https://github.com/mikuzjc/dsh-office-for-mso) | 4 | \| **Windows** \| ✅ 仅需 Node.js \| ✅ \`install.ps1\` \| ✅ server 启动自动 \| ✅ 系统自带 PowerShell，直接用 \| |
| [mrmaii/knotline](https://github.com/mrmaii/knotline) | 4 | npm install |
| [qulierm/orbital-agents](https://github.com/qulierm/orbital-agents) | 4 | 1. Install the package and the user presets (see below), then restart DSH Desktop so the profile |
| [coderperseus/dsh-hub](https://github.com/coderperseus/dsh-hub) | 4 | **Discover, compare, and install DeepSeek Harness community plugins.** |
| [kirbylynx/dsh-hub](https://github.com/kirbylynx/dsh-hub) | 4 | \| \`dsh-hub-plugin\` \| Preferred instance-side delivery mode. It runs inside DSH and provides the host plugin skeleton, explicit \`remote-capab |
| [534119219/dsh-custom-provider-reasoning](https://github.com/534119219/dsh-custom-provider-reasoning) | 4 | ## 安装 |
| [alldurham/foreman-dsh](https://github.com/alldurham/foreman-dsh) | 3 | ## 安装 |
| [dogtiti/dsh-plugin-subagent-bridge](https://github.com/dogtiti/dsh-plugin-subagent-bridge) | 3 | ## 安装 |
| [jasonqq/dsh-btw-plugin](https://github.com/jasonqq/dsh-btw-plugin) | 3 | ## Install |
| [arborsm/dsh-plugin-devin-bridge](https://github.com/arborsm/dsh-plugin-devin-bridge) | 3 | ## Installation |
| [devbyqin/dsh-plugin-kit](https://github.com/devbyqin/dsh-plugin-kit) | 3 | \| \`references/pitfalls.md\` \| **踩坑库**：每条都写全「症状 → 原因 → 正确写法 → 怎么验证」，覆盖模块与加载、样式、插槽、元数据、安装、发布、协作、多宿主共享 \| |
| [hackforjoy/dsh-openai-siwc](https://github.com/hackforjoy/dsh-openai-siwc) | 3 | ## Install |
| [anweat/dsh-plugin-dev-guide](https://github.com/anweat/dsh-plugin-dev-guide) | 3 | \| **插件索引（作者）** \| \[plugins.md\](./plugins.md) \| anweat 的 DSH 插件集合：安装命令 / 版本 / 说明 / 新增流程 \| |
| [exoticknight/dsh-plugin-template](https://github.com/exoticknight/dsh-plugin-template) | 3 | - \`pnpm dev\` 把当前源码链接进仓库内的隔离目录 \`.dsh-dev\` 并启动 DSH；\`pnpm smoke\` 在一次性目录中按用户的方式安装已发布版本并验证。两者都会校验隔离是否生效，绝不改动你日常使用的 DSH |
| [kongbai9420/dsh-boss-worker](https://github.com/kongbai9420/dsh-boss-worker) | 3 | &gt; 当前版本为 **\[\`0.2.0-beta.28\` · Beta 预发布版\](https://github.com/kongbai9420/dsh-boss-worker/releases/tag/v0.2.0-beta.28)**。验证范围见下文，安装包与校验文件见 Rele |
| [kestiny18/dsh-plugins](https://github.com/kestiny18/dsh-plugins) | 3 | pnpm install --frozen-lockfile |
| [oxmumu3/ai-twin-starter](https://github.com/oxmumu3/ai-twin-starter) | 3 | 原生版面向 **DeepSeek Harness Web / Desktop 0.2.1-rc.2、0.2.1-rc.3 / Node.js 22.13+**。Desktop 已验证安装启用、真实模型整理蒸馏、候选试跑与明确采用、日报和材料回流；真实 Slack 收发仍待验收，完 |
| [yanzhao77/deepseek_software](https://github.com/yanzhao77/deepseek_software) | 3 | - 两者关系 = **运行时 × 工厂**。安装预设后，DeepSeek Harness 的每个会话都能变成一座软件工厂。 |

