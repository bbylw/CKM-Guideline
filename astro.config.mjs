// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// 动态 base 路径：终极移植方案
// 完全依赖 GitHub Actions 注入的 GITHUB_REPOSITORY 环境变量（格式：owner/repo）
// - 本地开发（无 GITHUB_REPOSITORY）：base = "/"
// - GitHub Actions 构建：
//   - 仓库名为 *.github.io（用户名根仓库）：base = "/"（域名根路径部署）
//   - 其他仓库名：base = "/仓库名/"（子路径部署）
// 如需独立二级域名根部署，使用 *.github.io 仓库即可自动 fallback 到 "/"
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) return "/";

  const repoName = repo.split("/")[1];
  if (!repoName) return "/";

  // owner.github.io 仓库部署在根路径
  if (repoName.endsWith(".github.io")) return "/";

  // 普通仓库部署在子路径
  return `/${repoName}/`;
}

// https://astro.build/config
export default defineConfig({
  site: "https://ckm.ndjp.net",
  // 动态 base：线上自动适配仓库名，本地为 "/"
  base: getBase(),
  // 构建输出目录
  outDir: "dist",
  // 目录路由模式：overview/ → overview/index.html
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
