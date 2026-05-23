var t = [
	[
		1,
		"WebC.site",
		"面向 AI 辅助开发设计的 Web Components 组件库与开发规范。"
	],
	[
		2,
		"特性",
		"- **跨框架**：基于原生 Web Components 构建，兼容 React、Vue、Svelte、Solid 等前端框架。\n- **无样式**：逻辑与样式解耦，支持仅引入逻辑以自定义样式。\n- **免构建与构建双模式**：\n  - **免构建（CDN 模式）**：在浏览器中直接通过 CDN 引用 JS 与 CSS 文件。\n  - **构建模式（本地命令行）**：提供本地命令行工具，按需将组件源码集成至项目。\n- **在线调试**：提供组件预览与“在线调试”入口，支持直接调试免构建组件。"
	],
	[
		2,
		"快速上手",
		""
	],
	[
		3,
		"1. CDN 引入（免构建模式）",
		"在免构建场景下，可通过 CDN 直接在浏览器中引用 JS 与 CSS 文件。\n\n适用于无需开发环境配置、直接引用的轻量化场景。\n\n以 `Scroll`（虚拟滚动条）组件为例："
	],
	[
		4,
		"使用 jsdelivr",
		"```html\n<link href=\"//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.css\" rel=\"stylesheet\" />\n<script type=\"module\">\n  import \"//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.js\";\n<\/script>\n```"
	],
	[
		4,
		"使用 npmmirror（中国大陆镜像源）",
		"```html\n<link href=\"//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.css\" rel=\"stylesheet\" />\n<script type=\"module\">\n  import \"//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.js\";\n<\/script>\n```\n\n> [!TIP]\n> **自定义 CSS 变量（重写样式与替换背景资源）**\n> 如需重写默认样式，可引用前缀为 `_` 的样式文件（该文件不包含 `var.css` 声明）：\n\n```html\n<link href=\"//cdn.jsdelivr.net/npm/webc.site@0.1.23/_Scroll.css\" rel=\"stylesheet\" />\n```"
	],
	[
		3,
		"2. 构建模式",
		"支持摇树优化与按需引入以减少构建体积，并支持静态资源优化（如 SVG 资源内联与去重）。\n\n源码会直接下载至本地，便于直接修改源码二次开发。\n\n例如添加 `Scroll`（虚拟滚动条）组件：\n\n```bash\nbunx webc.add Scroll\n```"
	],
	[
		4,
		"运行后生成文件如下",
		"添加组件后，本地项目将生成以下目录结构与文件（使用只需导入 `lib/<组件名>.js` 即可，会自动引入组件下的 JS 与 CSS）：\n\n```text\n├── lib/\n│   ├── <组件名>.js                # 组件入口文件\n│   ├── <组件名>/                  # 组件源码编译目录\n│   │   ├── index.js              # 组件 JavaScript 逻辑文件\n│   │   └── index.css             # 组件 CSS 样式文件（Stylus 编译产物）\n│   ├── css/                      # 公共样式目录\n│   │   └── <样式名>.css           # 公共 Stylus 样式编译出的 CSS（如 reset.css）\n│   └── x/                        # 依赖的公共基础模块目录（按需下载）\n│       └── <模块名>.js\n└── public/\n    └── com/\n        └── <组件名>/              # 组件静态资源目录\n            └── <资源名>.svg       # 组件引用的 SVG 静态资源\n```"
	],
	[
		3,
		"3. SVG 资源优化",
		"在 Vite 构建配置中，推荐配合使用 [vite-plugin-svg-var](https://www.npmjs.com/package/vite-plugin-svg-var) 插件优化 SVG 资源加载。"
	],
	[
		4,
		"核心功能",
		"构建或开发阶段，插件在项目入口 JS（匹配 `/page/entry/**/*.js`）中注入 CSS 变量样式，并将 CSS/Stylus/Svelte 中引用的本地 SVG 路径（如 `url(\"/com/Scroll/cursor/grab.svg\")`）自动替换为 `var(--grabSvg)` 形式，以减少网络请求。"
	],
	[
		4,
		"特性",
		"- **UTF-8 编码**：将 SVG 转为 UTF-8 编码的 `data:image/svg+xml`（而不是 base64）并写入 CSS 变量，降低编码体积，提升压缩率。\n- **内容去重**：内容相同的 SVG 文件仅生成单个 CSS 变量，避免资源冗余。\n- **热更新**：监听 `public` 目录变动，在新增、修改或删除 SVG 文件时，重新计算 CSS 变量并触发热重载。"
	],
	[
		3,
		"4. 中文字体分片",
		"为了优化中文字体在 Web 端的加载体验，组件库引入了中文字体分片包 **[18s](https://www.npmjs.com/package/18s)**。\n\n- **按需分片加载**：通过中文字体分片技术，将体积庞大的中文字体（如思源黑体）和代码/等宽字体（如 JetBrains Mono）切分为 128KB 左右的 WOFF2 小分片，浏览器根据页面实际显示的字符按需下载分片，显著缩短中文字体加载的白屏与闪烁时间。\n- **内容寻址与长缓存**：字体分片基于其内容的 MD5 Base64url 哈希值命名，防止命名冲突，并提升 CDN 缓存命中率。\n- **可变字重支持**：引入的思源黑体（别名 `t`，为 text 的缩写）与 JetBrains Mono（别名 `c`，为 code 的缩写）均为**可变字体（Variable Fonts）**。可变字体允许使用 `font-variation-settings` 属性对字重进行精准的连续调节，例如 `font-variation-settings: \"wght\" 500`。关于可变字体的详细介绍和使用技巧，可参考 [MDN 可变字体指南](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) 以及 [MDN font-variation-settings 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variation-settings)。\n- **项目结构**：\n  - 构建工作区位于 **[font-gen](https://github.com/webc-site/font-gen)** (包含原始 TTF 字体、分片及样式重写脚本等)。\n  - 编译后发布的分发资源及文档位于 **[font](https://github.com/webc-site/font)**。\n- **全局样式集成**：\n  在基础样式重置文件 **[styl/reset.styl](https://github.com/webc-site/webc-zh/blob/main/styl/reset.styl)** 中通过 `@import` 引入了 `18s` 包的合并样式，并为全局和代码元素配置了字体别名与字重设置：\n\n```stylus\n  // 引入 18s 合并后的字体样式映射表\n  @import url('//cdn.jsdelivr.net/npm/18s@0.2.9/_.css')\n\n  // 全局正文字体配置（思源黑体，别名 t 为 text 缩写，使用 font-variation-settings 精准配置可变字重）\n  html, :host\n    font-family t, ui-sans-serif, ...\n    font-variation-settings 'wght' 500\n\n  // 代码及等宽字体配置（JetBrains Mono，别名 c 为 code 缩写，同样精准配置可变字重）\n  code, kbd, samp, pre\n    font-family c, ui-monospace, ...\n    font-variation-settings 'wght' 400\n```"
	],
	[
		2,
		"人工智能驱动开发",
		""
	],
	[
		3,
		"1. 状态与逻辑解耦",
		"AI 通过自动化浏览器（如 Antigravity）进行开发与调试时，常因交互链路长、鉴权限制以及对后端数据的依赖而导致调试中断。\n\n为提效，采用以下设计规范：\n\n- **不调用后端**：组件内部不直接调用后端接口，数据交互均通过异步回调函数向外暴露。\n- **数据模拟**：在 `Demo.svelte` 中传入模拟数据，以展现组件在多种状态下的交互表现，免除鉴权及后端环境依赖。"
	],
	[
		3,
		"2. 组件架构与本地调试",
		"组件采用独立目录结构，每个组件文件夹内包含其全部的逻辑、样式及静态资源（如 SVG）。\n\n- **按需添加**：支持通过命令行独立拉取组件。\n- **隔离调试**：执行以下命令，针对指定组件启动开发服务，调试入口为该组件目录下的 `Demo.svelte`：\n  ```bash\n  ./comDev.sh com/<组件名>\n  ```"
	],
	[
		3,
		"3. Agent 提示词配置",
		"开发提示词配置参见 [.agents/skills/com/SKILL.md](.agents/skills/com/SKILL.md)。在谷歌反重力（Antigravity）环境下，使用 `/com` 命令即可调用。\n\n![](https://i-01.eu.org/1779351273.avif)"
	],
	[
		3,
		"4. OpenCode 集成",
		"项目在 **[bin](https://github.com/webc-site/webc-zh/tree/main/bin)** 目录下提供了可以直接在终端调用的命令行工具，并结合 **[ai](https://github.com/webc-site/webc-zh/tree/main/ai)** 目录下的 AI 提效工具实现自动化提效：\n\n- **[bin/gci](https://github.com/webc-site/webc-zh/blob/main/bin/gci)**：自动生成提交信息并执行提交的 Git 工具。\n\n执行时，脚本将按顺序运行以下任务以完成提交：\n\n1. **提取与优化内联 SVG**：调用 [ai/svelteSvg.js](https://github.com/webc-site/webc-zh/blob/main/ai/svelteSvg.js) 提取并优化 Svelte 模板中的内联 SVG 资源，防止源码因 AI 生成的内联 SVG 而臃肿（见下文原理）。\n2. **提取并分析代码差异**：通过 [ai/lib/gci.js](https://github.com/webc-site/webc-zh/blob/main/ai/lib/gci.js)（基于 `@opencode-ai/sdk` 封装的统一 AI 会话接口 [ai/lib/ai.js](https://github.com/webc-site/webc-zh/blob/main/ai/lib/ai.js)）分析未提交修改，生成清晰的代码差异数据。\n3. **生成提交信息并自动提交**：将代码差异传递给大语言模型，由 AI 自动阅读并理解改动，生成规范的提交信息后自动执行代码提交。"
	],
	[
		3,
		"5. Svelte 内联 SVG 自动提取",
		""
	],
	[
		4,
		"背景",
		"人工智能在编写页面时，喜欢直接将 SVG 矢量图以内联方式写入CSS。这种做法会导致：\n\n- Svelte 源码极度臃肿，严重降低代码可读性与后期维护体验，浪费词元，降低人工智能开发的效率。\n- 相同的 SVG 资源无法复用，无法进行静态资源去重，并且无法享受 CDN 缓存。"
	],
	[
		4,
		"实现原理",
		"为了解决上述痛点，项目提供了自动提取脚本 **[ai/svelteSvg.js](https://github.com/webc-site/webc-zh/blob/main/ai/svelteSvg.js)**（在代码提交或通过 `bin/gci` 触发时运行）：\n\n1. **正则扫描**：自动匹配 Svelte 文件中的内联 SVG Data URI（`data:image/svg+xml...`）。\n2. **AI 智能命名**：将 SVG 代码和组件路径提交给大语言模型，AI 自动根据 SVG 形状、组件语义生成简洁、规范的小驼峰文件名（如 `search.svg`）。\n3. **资源压缩与修复**：\n   - 使用 SVGO 压缩 SVG 内容，精简路径。\n   - 若压缩失败，调用 AI 自动修复 SVG 语法错误，之后再次压缩。\n4. **资源持久化**：将优化后的 SVG 写入 `public/svg/` 目录。\n5. **路径重写**：将 Svelte 模板中的内联 Data URI 替换为 `/svg/xxx.svg` 相对路径。\n6. **结合构建优化**：配合 [vite-plugin-svg-var](https://www.npmjs.com/package/vite-plugin-svg-var) 插件，在构建时将 CSS/Svelte 中引用的 `/svg/xxx.svg` 转换为全局 CSS 变量引用，确保最终不产生多余的 HTTP 请求，并实现内容去重。"
	],
	[
		2,
		"开发工具",
		""
	],
	[
		3,
		"1. 环境变量自动设置 - mise",
		"项目使用 [mise](https://mise.jdx.dev/) 自动设置环境变量。配置文件 **[.mise.toml](https://github.com/webc-site/webc-zh/blob/main/.mise.toml)** 将 `bin` 目录加入到 `PATH`，并自动加载 `.env.sh` 环境变量。"
	],
	[
		3,
		"2. 代码提交钩子",
		"项目集成了 [Husky](https://typicode.github.io/husky/) 与 [lint-staged](https://github.com/okonet/lint-staged)，在提交代码时会自动触发校验、格式化以及资源优化，确保代码质量并减少包体积。"
	],
	[
		4,
		"触发流程",
		"在提交代码时，[.husky/pre-commit](https://github.com/webc-site/webc-zh/blob/main/.husky/pre-commit) 钩子会按以下顺序执行：\n\n1. **全局校验与扫描**：执行 [sh/hook/fmt.sh](https://github.com/webc-site/webc-zh/blob/main/sh/hook/fmt.sh) 进行全量代码格式化与死代码扫描。\n2. **暂存文件优化**：执行 `lint-staged` 对暂存区文件根据后缀名分别调用针对性的优化脚本（配置见 [package.json](https://github.com/webc-site/webc-zh/blob/main/package.json) 中的 `lint-staged` 部分）。\n3. **自动更新暂存区**：如果环境变量 `$S` 未设置，脚本会自动运行 `git add -u` 将格式化和优化后的最新修改加入暂存区，保证提交内容的一致性。"
	],
	[
		4,
		"钩子脚本与功能介绍",
		""
	],
	[
		5,
		"格式校验",
		"[sh/hook/fmt.sh](https://github.com/webc-site/webc-zh/blob/main/sh/hook/fmt.sh)\n\n- **`oxfmt`**：使用 Rust 编写的高性能格式化工具快速美化代码。\n- **`oxlint --fix`**：使用高性能校验工具扫描并自动修复可修复的 JavaScript 代码问题。\n- **`knip-bun`**：分析并输出未使用的文件、导出项和依赖，辅助代码瘦身。"
	],
	[
		5,
		"优化代码",
		"- `**/*.svg` — [sh/hook/svg.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/svg.js)\n  对暂存的 SVG 矢量图进行压缩与规范化（使用 SVGO 引擎），删除多余元数据并精简路径，减小文件体积。\n- `**/*.svelte` — [sh/hook/svelte.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/svelte.js)\n  1. **自动修正导入路径**：调用 [importFix.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/importFix.js) 将所有相对导入路径（如 `./`、`../`）统一重写为项目绝对别名（如 `~/` 或 `x/`）。\n  2. **格式化校验**：使用 `fmt_svelte` 进行格式化，若包含语法或结构错误将拒绝提交。\n  3. **SVG 内联压缩**：通过 [svelteSvgMinify.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/svelteSvgMinify.js) 自动压缩 Svelte 模板中包含的内联 SVG 标签和样式中引用的编码数据。\n- `**/*.styl` — [sh/hook/styl.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/styl.js)\n  1. **自动修正引入路径**：重写 `@import` 中的相对路径。\n  2. **代码格式化**：调用 `stylus-supremacy` 配合项目根目录的 [supremacy.yml](https://github.com/webc-site/webc-zh/blob/main/supremacy.yml) 对 Stylus 样式代码进行格式化。\n- `**/*.js` — [sh/hook/js.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/js.js)\n  **自动修正导入路径**：调用 [importFix.js](https://github.com/webc-site/webc-zh/blob/main/sh/hook/importFix.js) 统一重写 JS 文件中的相对导入路径。"
	]
];
export { t as default };
