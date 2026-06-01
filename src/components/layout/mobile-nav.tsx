"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/layout/country-selector";
import { cn } from "@/lib/utils";
import { mainNav, ctaNav } from "@/config/site";
import { useCountry } from "@/hooks/use-country";

/** Mobile-first hamburger menu + slide-down drawer (translated, with switch). */
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
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={close}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-100"
                  )}
                >
                  {nav[item.key as keyof typeof nav] ?? item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-3 border-t border-ink-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ink-500">
                  {selector.label}
                </span>
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
