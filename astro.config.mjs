// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// 动态 base 路径：真正完美兼顾「独立域名根部署」与「他人Fork子目录适配」
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY;

  // 如果在 GitHub Actions 线上构建环境
  if (repo) {
    const [owner, repoName] = repo.split("/");

    // 核心安全锁：只有当你自己的账号 (bbylw) 且仓库里有 CNAME 文件时，
    // 才判定启用了独立的自定义域名（如 ckm.ndjp.net），此时网站在根路径，返回 "/"
    const cnamePath = path.resolve(process.cwd(), "public/CNAME");
    if (fs.existsSync(cnamePath) && owner === "bbylw") {
      return "/";
    }

    // 如果是其他人 fork/clone 了你的仓库，owner 变成了他们自己，
    // 此时代码会完美绕过上面的锁，自动动态返回 '/仓库名/' 适配他们的 GitHub Pages 子路径！
    if (repoName && !repoName.endsWith(".github.io")) {
      return `/${repoName}/`;
    }
  }

  // 本地开发环境（npm run dev）默认使用路径 '/'
  return "/";
}

// 动态 site 配置：让打包产物里的 sitemap 也能完美兼容多账号
function getSite() {
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo) {
    const [owner] = repo.split("/");
    if (owner === "bbylw") return "https://ckm.ndjp.net";
    return `https://${owner}.github.io`;
  }
  return "https://ckm.ndjp.net";
}

export default defineConfig({
  // 动态站点域名
  site: getSite(),

  // 🚀 终极动态路径逻辑
  base: getBase(),

  outDir: "dist",
  build: {
    format: "directory", // 目录路由模式
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
