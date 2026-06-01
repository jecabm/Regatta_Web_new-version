"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Desktop nav link with active-route awareness. */
export function NavLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative text-sm font-medium transition-colors",
        isActive ? "text-ink-900" : "text-ink-600 hover:text-ink-900",
        className
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-[21px] left-0 hidden h-0.5 w-full bg-brand-500 md:block" />
      )}
    </Link>
  );
}
