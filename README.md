# CKM 健康指南 · 心血管-肾脏-代谢综合征科普网站

> 基于《2026 AHA/ACC/ADA/ASN 心血管-肾脏-代谢综合征防治指南》的**中文科普网站**——用通俗语言帮助你读懂心脏、肾脏与代谢之间的联系。

一个基于 **Astro + Tailwind CSS v4** 的多页面静态网站。组件化架构、构建时优化、零运行时 JS 框架开销，输出纯静态 HTML 文件。

---

## 📖 项目简介

心血管-肾脏-代谢综合征（CKM 综合征）是一种全身性疾病——代谢危险因素（肥胖、2 型糖尿病）、慢性肾脏病与心血管系统之间相互影响，导致多器官损害。本网站把 119 页权威指南转化为面向公众与患者的科普内容，按主题组织成 9 个页面，覆盖从认识疾病、分期、评估到管理与治疗的全链条。

**内容来源**
- 原版指南：Ndumele CE, Rodriguez F, Dixon DL, 等. *2026 AHA/ACC/ADA/ASN Guideline for the Prevention, Detection, Evaluation, and Management of Cardiovascular-Kidney-Metabolic Syndrome.* J Am Coll Cardiol. 2026;87(22S):e1889–e2007. DOI: [10.1016/j.jacc.2026.02.001](https://doi.org/10.1016/j.jacc.2026.02.001)
- 本网站改编自完整中文翻译版（`CKM指南完整中文翻译.md` / `.pdf`），原文档为 119 页、600+ 条参考文献。

> ⚠️ **重要声明**：本网站为**科普内容**，不构成任何医疗建议，不能替代专业医务人员的诊断与治疗。所有临床决策应以最新原版指南为准，并由专业医务人员执行。

---

## ✨ 特性

- **9 个主题页面**，从概览到特殊人群，逻辑递进，每页底部有"下一步"导航
- **Astro 组件化架构**：BaseLayout、Header、Footer、PageHeader、Cta、Recommendation 等可复用组件
- **Tailwind CSS v4**：通过 `@tailwindcss/vite` 插件集成，使用 `@theme` 指令定义设计令牌
- **View Transitions 无感切换**：`ClientRouter` 客户端路由 + 0.28s 交叉淡入淡出，页面导航零白屏
- **零运行时 JS 框架**：Astro 默认输出纯 HTML，仅在 `public/scripts/main.js` 中保留原生 JS 交互
- **COR/LOE 徽章系统**：忠实保留指南推荐类别与证据等级，按等级配色（绿/蓝/紫/红边条）
- **完整数据表格**：PREVENT 阈值表、减重药对照表、FIB-4 随访表、HFrEF 四联疗法、白蛋白尿治疗阶梯等
- **响应式设计**：桌面端横向导航 + 移动端汉堡菜单，适配手机/平板/桌面
- **可访问性**：键盘可达、`prefers-reduced-motion` 适配、语义化 HTML、ARIA 标签
- **原版 PDF 下载**：资源页内置中英两份 PDF 的下载入口
- **打印友好**：打印时自动隐藏导航/页脚，避免分页截断
- **URL 结构保持**：`build.format: 'file'` 确保输出 `.html` 文件，与原 URL 结构完全一致

---

## 🛠 技术栈

| 层 | 技术 | 说明 |
|----|------|------|
| 框架 | Astro 5.6 | 静态站点生成器，组件化架构，零 JS by default |
| 样式 | Tailwind CSS v4 | 通过 `@tailwindcss/vite` 插件集成，`@theme` 指令定义设计令牌 |
| 自定义样式 | 原生 CSS | `src/styles/global.css` —— 设计令牌、组件类、动画 |
| 交互 | 原生 JavaScript（IIFE） | `public/scripts/main.js` —— 无框架、无依赖 |
| 配置 | TypeScript | `src/config/navigation.ts` —— 导航项集中管理 |
| 字体 | Google Fonts | Noto Serif SC（标题）+ Noto Sans SC（正文） |
| 图标 | 内联 SVG / Unicode | 无图标库依赖 |
| 构建 | Vite | Astro 内置，Tailwind v4 通过 Vite 插件运行 |

---

## 📁 目录结构

```
CKM-Guideline-main/
├── src/
│   ├── pages/                    # Astro 页面（输出 .html 文件）
│   │   ├── index.astro           # 首页：Hero + 10 条关键要点 + 分期速览 + 主题导航
│   │   ├── overview.astro        # 认识 CKM：定义、组分、相关疾病、COR/LOE 说明
│   │   ├── staging.astro         # 分期系统：0–4 期折叠面板 + 儿童青少年分期标签页
│   │   ├── assessment.astro      # 评估诊断：PREVENT 公式阈值表 + 风险增强因素 + SDOH
│   │   ├── management.astro      # 管理原则：多学科照护 + 0–3 期 + 重叠疾病表
│   │   ├── treatment.astro       # 药物治疗：减重药对照表 + GLP-1/SGLT2i + MBS + CKD
│   │   ├── cvd.astro             # 心血管管理：4 期 ASCVD + HF 四联疗法 + 房颤 + 晚期 CKD
│   │   ├── special.astro         # 特殊情况：MASLD/OSA/妊娠/VTE + 监测 + 未来方向
│   │   └── resources.astro       # 参考资源：缩略语表 + 术语 + 关键试验 + PDF 下载
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # 基础布局：HTML shell + Header + Footer + 脚本
│   │
│   ├── components/
│   │   ├── Header.astro          # 粘性导航栏（桌面 + 移动端汉堡菜单）
│   │   ├── Footer.astro          # 页脚（品牌信息 + 导航列 + 版权）
│   │   ├── PageHeader.astro      # 页面头部（面包屑 + 标题 + 描述 + 渐变背景）
│   │   ├── Cta.astro             # "下一步"行动召唤卡片
│   │   └── Recommendation.astro  # COR/LOE 推荐意见卡片（可复用组件）
│   │
│   ├── config/
│   │   └── navigation.ts         # 导航项配置（主导航 + 页脚导航）
│   │
│   └── styles/
│       └── global.css            # 全局样式（Tailwind v4 @theme + 自定义组件类）
│
├── public/                       # 静态资源（原样复制到 dist/）
│   ├── scripts/
│   │   └── main.js               # 交互脚本（移动菜单、折叠、标签页、返回顶部等）
│   ├── favicon.svg               # 站点图标
│   ├── CKM2026.pdf               # 英文原版指南（约 23 MB，119 页）
│   ├── CKM指南完整中文翻译.pdf   # 中文翻译版 PDF（约 1.6 MB）
│   ├── CKM指南完整中文翻译.md    # 中文翻译版 Markdown
│   ├── CKM指南完整中文翻译.docx  # 中文翻译版 Word 文档
│   └── CNAME                     # GitHub Pages 自定义域名配置
│
├── astro.config.mjs              # Astro 配置（site、build.format、Tailwind 插件）
├── tsconfig.json                 # TypeScript 配置（继承 astro/tsconfigs/strict）
├── package.json                  # 项目依赖与脚本
└── README.md                     # 本文件
```

---

## 📄 页面说明

| 页面 | 文件 | 对应指南章节 | 主要内容 |
|------|------|-------------|----------|
| 首页 | `index.html` | 摘要 + 关键要点 | Hero、三系统视觉、10 条 take-home、分期速览、主题导航、声明 |
| 认识 CKM | `overview.html` | 第 2 章 | 完整/简化定义、9 大组分定义、相关疾病、治疗概念、COR/LOE 解读 |
| 分期系统 | `staging.html` | 第 2.3 章 | 0–4 期折叠面板、MetS 标准、KDIGO 分级、儿童青少年分期标签页 |
| 评估诊断 | `assessment.html` | 第 3–4 章 | 诊断方法、纵向评估频率表、PREVENT 公式阈值表、风险增强因素、SDOH 工具 |
| 管理原则 | `management.html` | 第 5 章 | 四原则、多学科照护、0–3 期管理、强化生活方式、GDM、重叠疾病表 |
| 药物治疗 | `treatment.html` | 第 5.4–5.5 节 | 减重药完整对照表、GLP-1 推荐、SGLT2i/GLP-1 不良反应、MBS、CKD 用药阶梯 |
| 心血管管理 | `cvd.html` | 第 6 章 | 4 期 ASCVD（肥胖/T2D/CKD）、HF 四联疗法、HFpEF/HFrEF、房颤、晚期 CKD |
| 特殊情况 | `special.html` | 第 7–9 章 | MASLD + FIB-4、OSA、妊娠、VTE、治疗监测、未来研究方向 |
| 参考资源 | `resources.html` | 附录 | 缩略语表、术语表、12 项关键试验、参考文献、PDF 下载、方法学、声明 |

---

## 🎨 设计系统

### 配色（语义化，呼应 CKM 三大系统）

| 角色 | 色值 | 用途 |
|------|------|------|
| 主品牌 | `#0f766e`（深青绿） | 导航、按钮、强调——医疗信任感 |
| 心血管 | `#be123c`（玫红） | "心"系统标识、CVD 相关章节 |
| 肾脏 | `#b45309`（琥珀） | "肾"系统标识、CKD 相关内容 |
| 代谢 | `#0d9488`（青绿） | "代"系统标识、代谢相关内容 |
| 背景 | `#faf9f7`（暖灰） | 页面底色，非纯白 |
| 正文 | `#1c1917`（暖黑） | 主文本，非纯黑 |
| 链接/CTA | `#0369a1`（天蓝） | 链接与次级 CTA |

**COR 推荐等级配色**（用于推荐意见卡片左侧边条与徽章）：
- `#15803d` 绿 — COR 1（强推荐）
- `#0369a1` 蓝 — COR 2a（中等）
- `#7c3aed` 紫 — COR 2b（弱）*仅限此小徽章，避免 AI 模板化大面积紫色*
- `#b91c1c` 红 — COR 3（有害/无益）

设计令牌通过 Tailwind v4 的 `@theme` 指令定义在 `src/styles/global.css` 中，可统一调整。

### 字体

- **标题**：Noto Serif SC（衬线，权威感）
- **正文**：Noto Sans SC（无衬线，可读性）
- **数字**：`font-variant-numeric: tabular-nums`（等宽数字，防跳动）

### 关键组件（自定义 CSS 类）

| 类 | 用途 |
|----|------|
| `.card` / `.card-hover` | 卡片容器，hover 上浮 |
| `.recommendation[data-cor]` | 推荐意见卡片，左侧色条按 COR 等级 |
| `.cor-badge` / `.loe-badge` | 推荐类别 / 证据等级徽章 |
| `.tbl` + `.table-wrap` | 数据表格 + 横向滚动容器 |
| `.callout-info/warn/danger/note` | 提示框（4 种语义） |
| `.accordion-trigger` + `.accordion-panel` | 折叠面板 |
| `.tab-btn` + `.tab-panel` | 标签页 |
| `.stage-card` / `.stage-pill` | 分期卡片 / 分期进度条 |
| `.chip` | 小标签 |
| `.tri-dot` | 三系统圆形标识（心/肾/代） |
| `.btn-primary` / `.btn-ghost` | 按钮 |

---

## 🚀 快速开始

### 环境要求

- Node.js 18.14.1 或更高版本
- npm（随 Node.js 一同安装）

### 方式一：本地开发（推荐）

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev
```

开发服务器支持热更新，修改 `src/` 下的文件会自动刷新浏览器。

### 方式二：构建生产版本

```bash
# 构建静态站点到 dist/
npm run build

# 本地预览构建结果
npm run preview
```

构建后 `dist/` 目录包含 9 个 `.html` 文件及所有静态资源，URL 结构与原项目完全一致（`build.format: 'file'`）。

### 方式三：部署到线上

本项目是纯静态站点，`npm run build` 后 `dist/` 目录可部署到任意静态托管平台。以下是各大平台的详细教程。

> **通用配置**：构建命令 `npm run build`，发布目录 `dist/`，Node 版本 ≥ 18.14.1。

---

## 📦 部署教程

### 1. GitHub Pages

项目已包含 `public/CNAME` 文件（自定义域名 `ckm.ndjp.net`）。使用 GitHub Actions 自动部署：

**步骤：**

1. 将代码推送到 GitHub 仓库
2. 进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**
3. 在仓库根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. 推送到 `main` 分支后自动构建部署。如使用自定义域名，确保 `public/CNAME` 文件存在且 DNS 已正确解析

> **注意**：若部署在 `https://用户名.github.io/仓库名/` 子路径下（非自定义域名），需在 `astro.config.mjs` 中添加 `base: '/仓库名'`。

---

### 2. Cloudflare Pages

**方式一：Git 集成（推荐）**

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**
2. 选择 GitHub/GitLab 仓库并授权
3. 构建配置：
   - **Framework preset**：`Astro`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Environment variables**：`NODE_VERSION` = `20`
4. 点击 **Save and Deploy**，后续每次 push 自动触发部署

**方式二：Wrangler CLI 直接上传**

```bash
# 安装 Wrangler
npm install -g wrangler

# 构建并部署
npm run build
wrangler pages deploy dist --project-name=ckm-guideline
```

---

### 3. Vercel

**方式一：Git 集成（推荐）**

1. 访问 [vercel.com](https://vercel.com) → **Add New → Project**，导入 GitHub 仓库
2. Vercel 会自动识别 Astro 框架，配置如下：
   - **Framework Preset**：`Astro`
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`
3. 点击 **Deploy**，后续 push 自动部署

**方式二：Vercel CLI**

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目根目录执行
vercel

# 部署到生产环境
vercel --prod
```

---

### 4. Netlify

**方式一：Git 集成（推荐）**

1. 访问 [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. 选择 GitHub 仓库并授权
3. 构建配置：
   - **Base directory**：留空（项目根目录）
   - **Build command**：`npm run build`
   - **Publish directory**：`dist`
4. 点击 **Deploy site**

**方式二：netlify.toml 配置文件**

在项目根目录创建 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

配置后推送到仓库，Netlify 会自动读取并部署。

**方式三：Netlify CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

---

### 5. 阿里云 OSS / 腾讯云 COS

适合国内访问优化的静态托管方案。

**阿里云 OSS：**

1. 登录 [OSS 管理控制台](https://oss.console.aliyun.com)，创建 Bucket（读写权限设为**公共读**）
2. 本地构建并上传：

```bash
npm run build

# 安装 ossutil
npm install -g ossutil

# 配置 AccessKey
ossutil config

# 上传 dist/ 到 Bucket（替换 your-bucket-name 和 your-region）
ossutil cp -r dist/ oss://your-bucket-name/ --update
```

3. 绑定自定义域名：Bucket **基础设置 → 静态页面 → 默认首页设为 `index.html`**
4. （可选）开启 CDN 加速：**传输加速 → 绑定 CDN 加速域名**

**腾讯云 COS：**

```bash
npm run build

# 安装 coscmd
pip install coscmd

# 配置（替换 SecretId、SecretKey、Region、Bucket）
coscmd config -a <SecretId> -s <SecretKey> -r <Region> -b <BucketName>

# 上传
coscmd upload -r dist/ /
```

然后在 COS 控制台 **静态网站设置** 中开启静态网站功能，并绑定自定义域名。

---

### 6. Nginx（自建服务器）

适合自有服务器或 VPS 部署。

```bash
# 本地构建
npm run build

# 上传 dist/ 到服务器
scp -r dist/* user@your-server:/var/www/ckm-guideline/
```

**Nginx 配置示例**（`/etc/nginx/conf.d/ckm.conf`）：

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name ckm.ndjp.net;

    # SSL 证书（如需 HTTPS）
    # ssl_certificate     /path/to/cert.pem;
    # ssl_certificate_key /path/to/key.pem;

    root /var/www/ckm-guideline;
    index index.html;

    # 静态文件缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?|pdf|docx?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # HTML 文件不缓存（确保更新即时生效）
    location ~* \.html$ {
        add_header Cache-Control "no-cache, must-revalidate";
    }

    # Astro file 格式：/overview → overview.html
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;
}
```

配置完成后重载 Nginx：

```bash
sudo nginx -t          # 检查配置语法
sudo systemctl reload nginx
```

---

### 部署平台对比

| 平台 | 免费额度 | 自定义域名 | HTTPS | CI/CD | 国内速度 |
|------|---------|-----------|-------|-------|---------|
| GitHub Pages | ✅ 免费 | ✅ | ✅ 自动 | ✅ Actions | 一般 |
| Cloudflare Pages | ✅ 免费 | ✅ | ✅ 自动 | ✅ Git | 较好 |
| Vercel | ✅ 免费 | ✅ | ✅ 自动 | ✅ Git | 一般 |
| Netlify | ✅ 免费 | ✅ | ✅ 自动 | ✅ Git | 一般 |
| 阿里云 OSS | 按量计费 | ✅ | 需配置 | 需自建 | 优秀 |
| 腾讯云 COS | 按量计费 | ✅ | 需配置 | 需自建 | 优秀 |
| Nginx 自建 | 服务器费用 | ✅ | 需配置 | 需自建 | 取决于服务器 |

---

## ⚙️ 自定义与扩展

### 修改配色

编辑 `src/styles/global.css` 中的 `@theme` 指令，全站自动生效。例如把主品牌色从青绿改成深蓝：

```css
@theme {
  --color-brand: #1e40af;       /* 改这一行 */
  --color-brand-dark: #1e3a8a;
  --color-brand-tint: #eff6ff;
  /* ... */
}
```

Tailwind v4 会根据 `@theme` 中的令牌自动生成对应的工具类（如 `text-brand`、`bg-brand-tint`），无需额外配置。

### 新增页面

1. 在 `src/pages/` 下新建 `.astro` 文件（例如 `src/pages/new-page.astro`）
2. 使用 `BaseLayout` 作为基础布局，并填充页面内容：

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import Cta from '../components/Cta.astro';

const title = '新页面';
const description = '页面描述';
---

<BaseLayout title={title} description={description}>
  <PageHeader
    eyebrow="章节"
    title={title}
    description={description}
    gradientFrom="#f0fdfa"
    eyebrowColor="#0f766e"
  />
  <main class="mx-auto max-w-5xl px-4 py-12">
    <!-- 页面内容 -->
  </main>
  <Cta nextLabel="下一页" nextHref="/next-page.html" />
</BaseLayout>
```

3. 在 `src/config/navigation.ts` 中添加导航项（主导航 + 页脚导航）

### 修改交互

所有交互在 `public/scripts/main.js` 中，按功能分块（移动菜单、折叠、标签页、滚动 UI、当前页高亮、年份）。每个初始化函数都做了空值保护，删除对应 HTML 不会报错。脚本通过 `BaseLayout.astro` 中的 `<script is:inline src="/scripts/main.js">` 引入。

脚本同时监听 `DOMContentLoaded`（首次加载）和 `astro:page-load`（View Transitions 导航后），确保每次页面切换后交互都能正确初始化。`initScrollUI` 在重新绑定前会移除旧的 scroll 监听器，防止重复绑定。

### 页面过渡（View Transitions）

页面导航使用 Astro 的 `ClientRouter` 实现客户端路由，无需整页刷新。过渡动画为 0.28s 交叉淡入淡出，定义在 `src/styles/global.css` 的 `::view-transition-old(root)` / `::view-transition-new(root)` 中。

如需调整过渡时长或效果，编辑 `src/styles/global.css` 中的 View Transitions 区块。`prefers-reduced-motion: reduce` 用户会自动跳过动画。

---

## 🌐 浏览器兼容性

| 浏览器 | 支持情况 |
|--------|----------|
| Chrome / Edge 88+ | ✅ 完全支持 |
| Firefox 87+ | ✅ 完全支持 |
| Safari 14+ | ✅ 完全支持 |
| 移动端 Safari / Chrome | ✅ 响应式适配 |

依赖的现代特性：CSS Custom Properties、`backdrop-filter`、`grid`、ES5+ JavaScript。构建后的 HTML/CSS 兼容所有现代浏览器。

---

## 📊 内容覆盖核对

本网站覆盖指南的以下内容（详见各页面）：

- ✅ 摘要与 10 条关键要点
- ✅ 第 1 章 方法学与证据审查、写作委员会、COR/LOE 分级
- ✅ 第 2 章 定义与分类、缩略语、CKM 分期（成人 + 儿童青少年）
- ✅ 第 3 章 评估与诊断、纵向评估
- ✅ 第 4 章 风险评估、PREVENT 公式、风险增强因素
- ✅ 第 5 章 一般照护原则、多学科照护、0–4 期管理
- ✅ 第 6 章 ASCVD / HF / 房颤 / 晚期 CKD 管理
- ✅ 第 7 章 MASLD / OSA / 妊娠 / VTE
- ✅ 第 8 章 治疗监测与随访
- ✅ 第 9 章 证据空白与未来方向
- ✅ 关键临床试验（SELECT、STEP-HFpEF、FLOW、EMPA-KIDNEY、FIDELIO-DKD、STENO-2 等）
- ✅ 完整缩略语表（47 项中英对照）

---

## 📥 原始文档下载

资源页（`resources.html`）的「下载源文件」章节提供两份 PDF：

| 文档 | 大小 | 说明 |
|------|------|------|
| `CKM指南完整中文翻译.pdf` | 约 1.6 MB | 完整 119 页中文翻译，便于快速阅读 |
| `CKM2026.pdf` | 约 23 MB | JACC 官方英文原版，含 600+ 条参考文献 |

点击下载卡片即可在浏览器中打开或下载（使用 `download` 属性）。

---

## ⚖️ 使用与版权

- 本**网站代码**（HTML/CSS/JS）可自由使用、修改、分发。
- **指南原文**版权归 AHA/ACC/ADA/ASN 及原作者所有，本网站仅做科普改编与翻译引用，不主张原文版权。
- 中文翻译文档（`.md`/`.pdf`/`.docx`）供学习参考，**不构成医疗建议**。
- 若用于公开传播或商业用途，请确保符合原指南的版权与引用要求，并保留来源标注。

---

## 🙏 致谢

- **指南作者**：Chiadi E. Ndumele、Fatima Rodriguez、Dixon DL、Khan SS、Mukherjee D 等
- **出版机构**：美国心脏病学会 (ACC)、美国心脏协会 (AHA)、美国糖尿病协会 (ADA)、美国肾脏病学会 (ASN)
- **发表平台**：*Journal of the American College of Cardiology* 与 *Circulation*

---

## 📌 快速链接

| 想看… | 直接打开 |
|--------|----------|
| 整体概览 | [index.html](index.html) |
| CKM 是什么 | [overview.html](overview.html) |
| 我处于哪一期 | [staging.html](staging.html) |
| 怎么评估风险 | [assessment.html](assessment.html) |
| 怎么管理 | [management.html](management.html) |
| 用什么药 | [treatment.html](treatment.html) |
| 已有心血管病 | [cvd.html](cvd.html) |
| 特殊情况 | [special.html](special.html) |
| 缩略语/参考文献/PDF | [resources.html](resources.html) |

---

*本项目为科普目的而制作。如你有任何健康问题，请咨询 qualified 医务人员。*
