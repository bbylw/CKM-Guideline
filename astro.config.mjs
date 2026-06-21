// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// 动态 base 路径：自动适配 GitHub Pages 多账号/多仓库部署
// - 若存在 public/CNAME（自定义域名），网站部署在域名根目录，base = "/"
// - 否则若在 GitHub Actions 环境（GITHUB_REPOSITORY 存在），base = "/仓库名/"
// - 本地开发默认 base = "/"
function getBase() {
  // 自定义域名部署（CNAME 存在）：网站在根路径，无需 base
  const cnamePath = path.resolve(process.cwd(), "public/CNAME");
  if (fs.existsSync(cnamePath)) {
    return "/";
  }
  // GitHub Actions 子路径部署：自动推导仓库名
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
