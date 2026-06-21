// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// 动态 base 路径：自动适配 GitHub Pages 多账号/多仓库部署
// GitHub Actions 构建时会注入 GITHUB_REPOSITORY 环境变量（格式：owner/repo）
// 据此自动推导 base 路径，本地开发默认为 "/"
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo) {
    const repoName = repo.split("/")[1];
    // owner.github.io 仓库部署在根路径，无需 base
    if (repoName && !repoName.endsWith(".github.io")) {
      return `/${repoName}/`;
    }
  }
  return "/";
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
