/**
 * 站点导航配置
 * 集中管理导航项，供 Header 与 Footer 共享
 */
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: '首页', href: '/index.html' },
  { label: '认识 CKM', href: '/overview.html' },
  { label: '分期系统', href: '/staging.html' },
  { label: '评估诊断', href: '/assessment.html' },
  { label: '管理原则', href: '/management.html' },
  { label: '药物治疗', href: '/treatment.html' },
  { label: '心血管管理', href: '/cvd.html' },
  { label: '特殊情况', href: '/special.html' },
  { label: '资源', href: '/resources.html' },
];

/** 页脚第一列链接 */
export const footerNavCol1: NavItem[] = [
  { label: '认识 CKM', href: '/overview.html' },
  { label: '分期系统', href: '/staging.html' },
  { label: '评估诊断', href: '/assessment.html' },
  { label: '管理原则', href: '/management.html' },
];

/** 页脚第二列链接 */
export const footerNavCol2: NavItem[] = [
  { label: '药物治疗', href: '/treatment.html' },
  { label: '心血管管理', href: '/cvd.html' },
  { label: '特殊情况', href: '/special.html' },
  { label: '参考资源', href: '/resources.html' },
];
