/**
 * 站点导航配置
 * 集中管理导航项，供 Header 与 Footer 共享
 *
 * 链接路径使用相对片段（不带前导 /），由调用方通过 import.meta.env.BASE_URL 拼接。
 * 这样可自动适配 GitHub Pages 子路径部署（如 /CKM-Guideline/overview/）。
 * 空字符串表示首页。
 */
export interface NavItem {
  label: string;
  /** 相对路径片段，如 "overview/"。首页为空字符串。 */
  path: string;
}

export const navItems: NavItem[] = [
  { label: '首页', path: '' },
  { label: '认识 CKM', path: 'overview/' },
  { label: '分期系统', path: 'staging/' },
  { label: '评估诊断', path: 'assessment/' },
  { label: '管理原则', path: 'management/' },
  { label: '药物治疗', path: 'treatment/' },
  { label: '心血管管理', path: 'cvd/' },
  { label: '特殊情况', path: 'special/' },
  { label: '资源', path: 'resources/' },
];

/** 页脚第一列链接 */
export const footerNavCol1: NavItem[] = [
  { label: '认识 CKM', path: 'overview/' },
  { label: '分期系统', path: 'staging/' },
  { label: '评估诊断', path: 'assessment/' },
  { label: '管理原则', path: 'management/' },
];

/** 页脚第二列链接 */
export const footerNavCol2: NavItem[] = [
  { label: '药物治疗', path: 'treatment/' },
  { label: '心血管管理', path: 'cvd/' },
  { label: '特殊情况', path: 'special/' },
  { label: '参考资源', path: 'resources/' },
];
