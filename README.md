# AI PM Personal Website (Free Edition)

这是一个无需 Node 依赖、可直接部署到 Vercel 的静态双语个人品牌站点。

## 已实现

- 中文/英文双语入口：`/zh/` 与 `/en/`
- 单页分区结构：Home/About/Insights/Cases/Projects/AI Lab/Contact
- 免费版保留项：静态 AI 实验室、飞书表单入口、基础 SEO 文件
- SEO 基础：`robots.txt`、`sitemap.xml`、页面 `meta` 与 `hreflang`

## 使用方式

1. 修改飞书表单链接：
   - 打开 `assets/site.js`
   - 替换 `FEISHU_FORM_URL` 为真实地址
2. 替换域名占位符：
   - `zh/index.html`
   - `en/index.html`
   - `robots.txt`
   - `sitemap.xml`
3. 按需替换内容（文章/案例/作品各 3 条）。

## 本地预览

推荐使用本地静态服务器预览（避免 `file://` 方式的兼容问题）：

1. 在项目目录打开终端：`/Users/ruby/Desktop/mywebsite`
2. 运行命令：`python3 -m http.server 8080`
3. 浏览器访问：
   - 中文页：`http://localhost:8080/zh/`
   - 英文页：`http://localhost:8080/en/`
4. 停止服务：终端按 `Ctrl + C`

## 部署到 Vercel

1. 将当前目录推送到 GitHub（可选，但推荐）。
2. 在 Vercel 创建新项目并导入仓库，或直接通过 CLI 上传。
3. Framework 选择 `Other`（静态站点）。
4. 部署完成后绑定自定义域名。

## 目录结构

```text
.
├── assets/
│   ├── site.js
│   └── styles.css
├── en/
│   └── index.html
├── zh/
│   └── index.html
├── index.html
├── robots.txt
├── sitemap.xml
└── vercel.json
```
