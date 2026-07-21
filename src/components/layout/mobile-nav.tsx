"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/layout/country-selector";
import { Logo } from "@/components/ui/logo";
import { cn, isPathActive, isSectionActive } from "@/lib/utils";
import { mainNav, ctaNav, isNavGroup } from "@/config/site";
import { useCountry } from "@/hooks/use-country";
import type { Dictionary } from "@/content/countries/types";

type NavDict = Dictionary["nav"];

function t(nav: NavDict, key: string): string {
  const map: Record<string, keyof NavDict> = {
    home: "home",
    about: "about",
    pricing: "pricing",
    contact: "contact",
    features: "features",
    resources: "resources",
    "asset-management": "assetManagement",
    "inspection-management": "inspectionManagement",
    "multi-locations": "multiLocations",
    reports: "reports",
    "mobile-app": "mobileApp",
    blog: "blog",
    learning: "learning",
  };
  const dictKey = map[key];
  return dictKey ? nav[dictKey] : key;
}

/** Mobile-first hamburger menu + slide-down drawer. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setExpandedGroup(null);
  };
  const { content } = useCountry();
  const { nav, actions } = content.dictionary;

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger — only visible when menu is closed */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setExpandedGroup(null); }}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-md text-white hover:bg-white/10"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Full-screen overlay — portalled to <body> to escape header stacking context */}
      {open && createPortal(
        <div className="fixed inset-0 z-9999 flex flex-col bg-white">
          {/* Top bar */}
          <div className="flex h-18 shrink-0 items-center justify-between bg-ink-950 px-4">
            <Logo variant="white" />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-md text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Scrollable nav content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-1 p-4">
              <div className="flex justify-end pb-3 border-b border-ink-200 mb-1">
                <CountrySelector />
              </div>
              {mainNav.map((entry) => {
                if (isNavGroup(entry)) {
                  const isExpanded = expandedGroup === entry.key;
                  const hasActiveChild = entry.children.some((c) =>
                    isSectionActive(pathname, c.href)
                  );
                  return (
                    <div key={entry.key}>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedGroup(isExpanded ? null : entry.key)
                        }
                        aria-expanded={isExpanded}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                          hasActiveChild
                            ? "text-brand-700"
                            : "text-ink-700 hover:bg-ink-100"
                        )}
                      >
                        {t(nav, entry.key)}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-ink-400 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-2 pb-1">
                          {entry.children.map((item) => {
                            const isActive = isPathActive(pathname, item.href);
                            return (
                              <Link
                                key={item.key}
                                href={item.href}
                                onClick={close}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                  "block rounded-md px-5 py-2.5 text-sm font-medium",
                                  isActive
                                    ? "bg-brand-50 text-brand-700"
                                    : "text-ink-700 hover:bg-ink-100"
                                )}
                              >
                                {t(nav, item.key)}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                const isActive = isPathActive(pathname, entry.href);
                return (
                  <Link
                    key={entry.key}
                    href={entry.href}
                    onClick={close}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium",
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-700 hover:bg-ink-100"
                    )}
                  >
                    {t(nav, entry.key)}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Pinned bottom actions */}
          <div className="shrink-0 border-t border-ink-200 px-4 pt-6 pb-24 flex flex-col gap-3">
            <Button href={ctaNav.login.href} onClick={close} variant="outline" size="lg">
              {actions.login}
            </Button>
            <Button href={ctaNav.freeTrial.href} onClick={close} variant="primary" size="lg">
              {actions.freeTrial}
            </Button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
