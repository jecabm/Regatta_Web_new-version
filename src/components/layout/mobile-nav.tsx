"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/layout/country-selector";
import { cn } from "@/lib/utils";
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
    calendar: "calendar",
    "multi-locations": "multiLocations",
    "prestart-checklist": "prestartChecklist",
    blog: "blog",
    learning: "learning",
  };
  const dictKey = map[key];
  return dictKey ? nav[dictKey] : key;
}

/** Mobile-first hamburger menu + slide-down drawer. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const { content } = useCountry();
  const { nav, actions, selector } = content.dictionary;

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-md text-ink-700 hover:bg-ink-100"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-t border-ink-200 bg-white shadow-elevated">
          <nav className="flex flex-col gap-1 p-4">
            {mainNav.map((entry) => {
              if (isNavGroup(entry)) {
                return (
                  <div key={entry.key}>
                    <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {t(nav, entry.key)}
                    </p>
                    {entry.children.map((item) => {
                      const isActive = pathname.startsWith(item.href);
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
                );
              }
              const isActive =
                entry.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(entry.href);
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

            <div className="mt-3 flex flex-col gap-3 border-t border-ink-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ink-500">{selector.label}</span>
                <CountrySelector />
              </div>
              <Button href={ctaNav.login.href} onClick={close} variant="outline" size="lg">
                {actions.login}
              </Button>
              <Button href={ctaNav.freeTrial.href} onClick={close} variant="primary" size="lg">
                {actions.freeTrial}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
