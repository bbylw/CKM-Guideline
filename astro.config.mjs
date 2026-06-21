// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// 动态 base 路径：真正做到跨账号、跨仓库、本地与线上全自动无缝适配
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY;

  // 如果在 GitHub Actions 线上构建环境
  if (repo) {
    const repoName = repo.split("/")[1];

    // 只有当仓库名是特殊的 '用户名.github.io' 时（真正的根目录部署），才返回 '/'
    // 其他任何普通仓库（不管是谁的账号、叫什么名字），一律动态返回 '/仓库名/'
    if (repoName && !repoName.endsWith(".github.io")) {
      return `/${repoName}/`;
    }
  }

  // 本地开发环境（npm run dev）或者独立域名根目录部署，默认使用路径 '/'
  return "/";
}

export default defineConfig({
  // 保持合法的 URL 格式
  site: "https://ckm.ndjp.net",

  // 🚀 核心修复：完全动态化，不被 Git 仓库里带走的 CNAME 文件所绑架
  base: getBase(),

  outDir: "dist",
  build: {
    format: "directory", // 目录路由模式
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
