"use client";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CountrySelector } from "@/components/layout/country-selector";
import { mainNav, ctaNav } from "@/config/site";
import { useCountry } from "@/hooks/use-country";

/** Sticky marketing header: logo, translated nav, country switch + CTAs. */
export function Header() {
  const { content } = useCountry();
  const { nav, actions } = content.dictionary;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              label={nav[item.key as keyof typeof nav] ?? item.label}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CountrySelector />
          <Button href={ctaNav.login.href} variant="ghost" size="sm">
            {actions.login}
          </Button>
          <Button href={ctaNav.freeTrial.href} variant="primary" size="sm">
            {actions.freeTrial}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
