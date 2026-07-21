"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { useCountry } from "@/hooks/use-country";

/** Site footer: brand blurb, translated link groups, and legal row. */
export function Footer() {
  const { content } = useCountry();
  const f = content.dictionary.footer;
  const year = 2026;

  const groups = [
    {
      title: f.groups.product,
      items: [
        { label: f.links.overview, href: "/" },
        { label: f.links.pricing, href: "/pricing" },
        { label: f.links.freeTrial, href: "/free-trial" },
      ],
    },
    {
      title: f.groups.company,
      items: [
        { label: f.links.about, href: "/about" },
        { label: f.links.contact, href: "/contact" },
      ],
    },
    {
      title: f.groups.account,
      items: [{ label: f.links.login, href: "/login" }],
    },
    {
      title: f.groups.legal,
      items: [
        { label: f.links.termsOfService, href: "/terms-of-service" },
        { label: f.links.privacyPolicy, href: "/privacy-policy" },
        { label: f.links.cookiePolicy, href: "/cookies-privacy" },
      ],
    },
  ];

  return (
    <footer className="mt-auto border-t border-ink-200 bg-ink-50">
      <Container size="wide" className="py-14">
        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)] text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start max-w-xs mx-auto sm:mx-0">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              {f.tagline}
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-600 transition-colors hover:text-brand-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-ink-200 pt-6 text-sm text-ink-500 text-center sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8 sm:text-left">
          <p>
            © {year} {siteConfig.name}. {f.rights}
          </p>
          <p className="text-ink-400">{f.builtFor}</p>
        </div>
      </Container>
    </footer>
  );
}
