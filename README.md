# WebC.site

[组件库在线预览](https://webc-zh.github.io)

面向 AI 辅助开发设计的 Web Components 组件库与开发规范。

## 特性

- **跨框架**：基于原生 Web Components 构建，兼容 React、Vue、Svelte、Solid 等前端框架。
- **无样式**：逻辑与样式解耦，支持仅引入逻辑以自定义样式。
- **免构建与构建双模式**：
  - **免构建（CDN 模式）**：在浏览器中直接通过 CDN 引用 JS 与 CSS 文件。
  - **构建模式（本地命令行）**：提供本地命令行工具，按需将组件源码集成至项目。
- **在线调试**：提供组件预览与“在线调试”入口，支持直接调试免构建组件。

## 快速上手

### 1. CDN 引入（免构建模式）

在免构建场景下，可通过 CDN 直接在浏览器中引用 JS 与 CSS 文件。

适用于无需开发环境配置、直接引用的轻量化场景。

以 `Scroll`（虚拟滚动条）组件为例：

#### 使用 jsdelivr

```html
<link href="//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.css" rel="stylesheet"/>
<script type="module"&lt;
  import "//cdn.jsdelivr.net/npm/webc.site@0.1.23/Scroll.js";
</script>
```

#### 使用 npmmirror（中国大陆镜像源）

```html
<link href="//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.css" rel="stylesheet"/>
<script type="module"&lt;
  import "//registry.npmmirror.com/webc.site/0.1.23/files/Scroll.js";
</script>
```

> [!TIP]
> **自定义 CSS 变量（重写样式与替换背景资源）**
> 如需重写默认样式，可引用前缀为 `_` 的样式文件（该文件不包含 `var.css` 声明）：

```html
<link href="//cdn.jsdelivr.net/npm/webc.site@0.1.23/_Scroll.css" rel="stylesheet" />
```

### 2. 构建模式

支持摇树优化与按需引入以减少构建体积，并支持静态资源优化（如 SVG 资源内联与去重）。

源码会直接下载至本地，便于直接修改源码二次开发。

例如添加 `Scroll`（虚拟滚动条）组件：

```bash
bunx webc.add Scroll
```

#### 运行后生成文件如下

添加组件后，本地项目将生成以下目录结构与文件（使用只需导入 `lib/<组件名>.js` 即可，会自动引入组件下的 JS 与 CSS）：

```text
├── lib/
│   ├── <组件名>.js                # 组件入口文件
│   ├── <组件名>/                  # 组件源码编译目录
│   │   ├── index.js              # 组件 JavaScript 逻辑文件
│   │   └── index.css             # 组件 CSS 样式文件（Stylus 编译产物）
│   ├── css/                      # 公共样式目录
│   │   └── <样式名>.css           # 公共 Stylus 样式编译出的 CSS（如 reset.css）
│   └── x/                        # 依赖的公共基础模块目录（按需下载）
│       └── <模块名>.js
└── public/
    └── com/
        └── <组件名>/              # 组件静态资源目录
            └── <资源名>.svg       # 组件引用的 SVG 静态资源
```

### 3. SVG 资源优化 (`vite-plugin-svg-var`)

在 Vite 构建配置中，推荐配合使用 [vite-plugin-svg-var](https://www.npmjs.com/package/vite-plugin-svg-var) 插件优化 SVG 资源加载。

#### 核心功能

构建或开发阶段，插件在项目入口 JS（匹配 `/page/entry/**/*.js`）中注入 CSS 变量样式，并将 CSS/Stylus/Svelte 中引用的本地 SVG 路径（如 `url("/com/Scroll/cursor/grab.svg")`）自动替换为 `var(--grabSvg)` 形式，以减少网络请求。

#### 特性

- **UTF-8 编码**：将 SVG 转为 UTF-8 编码的 `data:image/svg+xml`（而不是 base64）并写入 CSS 变量，降低编码体积，提升压缩率。
- **内容去重**：内容相同的 SVG 文件仅生成单个 CSS 变量，避免资源冗余。
- **热更新**：监听 `public` 目录变动，在新增、修改或删除 SVG 文件时，重新计算 CSS 变量并触发热重载。

## AI 驱动开发规范

### 1. 状态与逻辑解耦

AI 通过自动化浏览器（如 Antigravity）进行开发与调试时，常因交互链路长、鉴权限制以及对后端数据的依赖而导致调试中断。

为提效，采用以下设计规范：

- **不调用后端**：组件内部不直接调用后端接口，数据交互均通过异步回调函数向外暴露。
- **数据模拟**：在 `Demo.svelte` 中传入模拟数据，以展现组件在多种状态下的交互表现，免除鉴权及后端环境依赖。

### 2. 组件架构与本地调试

组件采用独立目录结构，每个组件文件夹内包含其全部的逻辑、样式及静态资源（如 SVG）。

- **按需添加**：支持通过命令行独立拉取组件。
- **隔离调试**：执行以下命令，针对指定组件启动开发服务，调试入口为该组件目录下的 `Demo.svelte`：
  ```bash
  ./comDev.sh com/<组件名>
  ```

### 3. 智能体提示词配置

开发提示词配置参见 [.agents/skills/com/SKILL.md](.agents/skills/com/SKILL.md)。在谷歌反重力（Antigravity）环境下，使用 `/com` 命令即可调用。

![](https://i-01.eu.org/1779351273.avif)
