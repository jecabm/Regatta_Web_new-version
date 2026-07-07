import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * Usage: cn("px-4", isActive && "bg-brand-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Whether `pathname` (from next/navigation's usePathname, which never
 * includes a hash) matches a nav `href`. Hrefs pointing at an in-page
 * anchor (e.g. "/features#asset-management") deliberately never match —
 * usePathname can't distinguish which section of the page is in view, so
 * highlighting one of several same-page anchors as "active" would be
 * misleading. Only the parent route/group should light up for those.
 */
export function isPathActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Whether `pathname` falls within the route a nav `href` points at,
 * ignoring any hash anchor. Use this for group-level "am I in this
 * section at all" checks (e.g. bolding a parent menu trigger); use
 * `isPathActive` for highlighting one specific leaf link.
 */
export function isSectionActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  return path === "/" ? pathname === "/" : pathname.startsWith(path);
}
