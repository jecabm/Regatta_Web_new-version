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
  ];

  return (
    <footer className="mt-auto border-t border-ink-200 bg-ink-50">
      <Container size="wide" className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
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

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-200 pt-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {f.rights}
          </p>
          <p className="text-ink-400">{f.builtFor}</p>
        </div>
      </Container>
    </footer>
  );
}
