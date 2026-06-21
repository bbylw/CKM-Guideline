/* ===================================================================
   CKM 健康科普网站 — 交互脚本
   功能：移动菜单、折叠面板、标签页、返回顶部、阅读进度、平滑滚动
   兼容 Astro View Transitions（astro:page-load 事件）
   =================================================================== */
(function () {
  "use strict";

  var scrollHandler = null;
  var toTopHandler = null;

  /* ---------- 移动端导航 ---------- */
  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      const icon = toggle.querySelector("[data-nav-icon]");
      if (icon) icon.textContent = open ? "✕" : "☰";
    });

    // 点击链接后关闭
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        const icon = toggle.querySelector("[data-nav-icon]");
        if (icon) icon.textContent = "☰";
      });
    });
  }

  /* ---------- 折叠面板 ---------- */
  function initAccordion() {
    document
      .querySelectorAll("[data-accordion-trigger]")
      .forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          const panel = trigger.nextElementSibling;
          if (!panel || !panel.classList.contains("accordion-panel")) return;
          const open = trigger.getAttribute("aria-expanded") === "true";
          trigger.setAttribute("aria-expanded", String(!open));
          panel.classList.toggle("open", !open);
        });
      });
  }

  /* ---------- 标签页 ---------- */
  function initTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      const btns = group.querySelectorAll("[data-tab-btn]");
      const panels = group.querySelectorAll("[data-tab-panel]");
      btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const target = btn.getAttribute("data-tab-btn");
          btns.forEach(function (b) {
            b.setAttribute("aria-selected", String(b === btn));
          });
          panels.forEach(function (p) {
            p.classList.toggle(
              "active",
              p.getAttribute("data-tab-panel") === target,
            );
          });
        });
      });
    });
  }

  /* ---------- 返回顶部 + 阅读进度 ---------- */
  function initScrollUI() {
    // 移除旧的监听器，防止 View Transitions 导航后重复绑定
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
      scrollHandler = null;
    }

    const toTop = document.getElementById("toTop");
    const progress = document.getElementById("progress");
    const doc = document.documentElement;

    function onScroll() {
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (progress) progress.style.width = pct + "%";
      if (toTop) toTop.classList.toggle("show", scrollTop > 500);
    }

    scrollHandler = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------- 当前页高亮 ---------- */
  function highlightCurrent() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === path) link.setAttribute("aria-current", "page");
    });
  }

  /* ---------- 年份 ---------- */
  function setYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function initAll() {
    initMobileNav();
    initAccordion();
    initTabs();
    initScrollUI();
    highlightCurrent();
    setYear();
  }

  // 首次加载
  document.addEventListener("DOMContentLoaded", initAll);
  // Astro View Transitions 每次导航后触发
  document.addEventListener("astro:page-load", initAll);
})();
