"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CountrySelector } from "@/components/layout/country-selector";
import { CartButton } from "@/components/layout/cart-button";
import { mainNav, ctaNav, isNavGroup, type NavGroup } from "@/config/site";
import { useCountry } from "@/hooks/use-country";
import type { Dictionary } from "@/content/countries/types";
import { cn } from "@/lib/utils";

type NavDict = Dictionary["nav"];

/** Map a nav item key (kebab-case from site.ts) to the Dictionary.nav property. */
function t(nav: NavDict, key: string): string {
  const map: Record<string, keyof NavDict> = {
    home: "home",
    about: "about",
    pricing: "pricing",
    contact: "contact",
    features: "features",
    resources: "resources",
    "asset-management": "assetManagement",
    calendar: "calendar",
    "multi-locations": "multiLocations",
    "prestart-checklist": "prestartChecklist",
    blog: "blog",
    learning: "learning",
  };
  const dictKey = map[key];
  return dictKey ? nav[dictKey] : key;
}

function MegaMenuPanel({
  group,
  nav,
  onClose,
}: {
  group: NavGroup;
  nav: NavDict;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const columns = group.columns ?? [];
  const hasFeatured = !!group.featured;

  return (
    <div
      role="menu"
      className="absolute inset-x-0 top-full z-50 border-b border-ink-200 bg-white shadow-elevated"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div
          className={cn(
            "grid gap-6",
            hasFeatured
              ? columns.length === 1
                ? "grid-cols-1 lg:grid-cols-[1fr_280px]"
                : "grid-cols-1 lg:grid-cols-[repeat(2,1fr)_280px]"
              : `grid-cols-1 md:grid-cols-${columns.length}`,
          )}
        >
          {/* Content columns */}
          <div
            className={cn("grid gap-8", columns.length > 1 && "grid-cols-2")}
          >
            {columns.map((col, ci) => (
              <div key={col.headingKey ?? ci}>
                {col.headingKey && (
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {nav[col.headingKey as keyof NavDict] ?? col.headingKey}
                  </p>
                )}
                <ul className="space-y-1">
                  {col.items.map((item) => {
                    const active = pathname.startsWith(item.href);
                    return (
                      <li key={item.key}>
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={onClose}
                          className={cn(
                            "group flex flex-col rounded-lg px-3 py-3 transition-colors",
                            active ? "bg-brand-50" : "hover:bg-ink-50",
                          )}
                        >
                          <span
                            className={cn(
                              "text-sm font-semibold",
                              active ? "text-brand-700" : "text-ink-900",
                            )}
                          >
                            {t(nav, item.key)}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 text-xs leading-relaxed text-ink-500">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured panel */}
          {group.featured && (
            <div className="rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {group.featured.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-bold leading-snug text-ink-900">
                {group.featured.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {group.featured.description}
              </p>
              <Link
                href={group.featured.href}
                onClick={onClose}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                {group.featured.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Sticky marketing header with full-width mega menu for Features and Resources. */
export function Header() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const pathname = usePathname();
  const { content } = useCountry();
  const { nav, actions } = content.dictionary;

  const close = useCallback(() => setActiveKey(null), []);

  // Close when the route changes
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (activeKey !== null) setActiveKey(null);
  }

  // Close on outside click / Escape
  useEffect(() => {
    if (!activeKey) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function onClick(e: MouseEvent) {
      const header = document.getElementById("site-header");
      if (header && !header.contains(e.target as Node)) close();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [activeKey, close]);

  const activeGroup =
    mainNav.filter(isNavGroup).find((g) => g.key === activeKey) ?? null;

  return (
    <header
      id="site-header"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      {/* Nav bar row */}
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 sm:px-8">
        <Logo variant="white" />

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {mainNav.map((entry) => {
            if (isNavGroup(entry)) {
              const isActive =
                activeKey === entry.key ||
                entry.children.some((c) => pathname.startsWith(c.href));
              return (
                <button
                  key={entry.key}
                  type="button"
                  onClick={() =>
                    setActiveKey((k) => (k === entry.key ? null : entry.key))
                  }
                  aria-expanded={activeKey === entry.key}
                  aria-haspopup="menu"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-400"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {t(nav, entry.key)}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeKey === entry.key && "rotate-180",
                    )}
                  />
                </button>
              );
            }
            return (
              <NavLink
                key={entry.key}
                href={entry.href}
                label={t(nav, entry.key)}
                className="text-white/70 hover:text-white"
              />
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CountrySelector />
          <CartButton />
          <Button
            href={ctaNav.login.href}
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            {actions.login}
          </Button>
          <Button href={ctaNav.freeTrial.href} variant="primary" size="sm">
            {actions.freeTrial}
          </Button>
        </div>

        {/* Mobile-only: country selector + hamburger grouped on the right */}
        <div className="flex items-center gap-1 md:hidden">
          <CountrySelector />
          <MobileNav />
        </div>
      </div>

      {/* Mega menu panel — rendered at header level so it spans full width */}
      {activeGroup && activeGroup.columns && (
        <MegaMenuPanel group={activeGroup} nav={nav} onClose={close} />
      )}
    </header>
  );
}
