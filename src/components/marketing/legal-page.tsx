"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

interface LegalSection {
  heading: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  lastRevised: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
  contact: React.ReactNode;
}

const legalNavEn = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookies-privacy" },
];

const legalNavEs = [
  { label: "Términos de Servicio", href: "/terms-of-service" },
  { label: "Política de Privacidad", href: "/privacy-policy" },
  { label: "Política de Cookies", href: "/cookies-privacy" },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPage({ title, lastRevised, intro, sections, contact }: LegalPageProps) {
  const pathname = usePathname();
  const { code } = useCountry();
  const isEs = code === "co";
  const legalNav = isEs ? legalNavEs : legalNavEn;
  const contactHeading = isEs ? "Contáctanos" : "Contact Us";

  const allSections = [
    ...sections,
    { heading: contactHeading, content: contact },
  ];

  const ids = allSections.map((s) => slugify(s.heading));
  const [activeId, setActiveId] = useState<string>(ids[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visible = new Set<string>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        for (const id of ids) {
          if (visible.has(id)) {
            setActiveId(id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <Container size="wide" className="py-16 md:py-24">
      <div className="lg:grid lg:grid-cols-[200px_1fr_220px] lg:gap-10 xl:gap-14">

        {/* Left: legal page navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
              {isEs ? "Legal" : "Legal"}
            </p>
            <nav>
              <ul className="space-y-1">
                {legalNav.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={[
                          "block text-sm py-1.5 px-3 rounded-md transition-all duration-200 leading-snug border-l-2",
                          isActive
                            ? "border-transparent text-brand-600 font-semibold bg-brand-50"
                            : "border-transparent text-ink-500 hover:text-ink-800 hover:bg-ink-50",
                        ].join(" ")}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Center: main content */}
        <div className="min-w-0">
          <header className="mb-12">
            <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">
              Legal
            </p>
            <h1 className="text-4xl font-bold text-ink-900 mb-4">{title}</h1>
            <p className="text-sm text-ink-400">{isEs ? "Última revisión" : "Last Revised"}: {lastRevised}</p>
            {intro && (
              <div className="mt-6 text-ink-600 leading-relaxed">{intro}</div>
            )}
          </header>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={ids[i]} id={ids[i]} className="scroll-mt-28 border-t border-ink-100 pt-8">
                <h2 className="text-xl font-semibold text-ink-900 mb-4">{section.heading}</h2>
                <div className="text-ink-600 leading-relaxed space-y-3">{section.content}</div>
              </section>
            ))}

            <section id={ids[ids.length - 1]} className="scroll-mt-28 border-t border-ink-100 pt-8">
              <h2 className="text-xl font-semibold text-ink-900 mb-4">{contactHeading}</h2>
              <div className="text-ink-600 leading-relaxed">{contact}</div>
            </section>
          </div>
        </div>

        {/* Right: in-page section TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
              {isEs ? "En esta página" : "On this page"}
            </p>
            <nav>
              <ul className="space-y-1">
                {allSections.map((section, i) => {
                  const id = ids[i];
                  const isActive = activeId === id;
                  return (
                    <li key={id}>
                      <button
                        onClick={() => scrollTo(id)}
                        className={[
                          "w-full text-left text-sm py-1.5 px-3 rounded-md transition-all duration-200",
                          "leading-snug border-l-2",
                          isActive
                            ? "border-brand-500 text-brand-600 font-medium bg-brand-50"
                            : "border-transparent text-ink-500 hover:text-ink-800 hover:bg-ink-50",
                        ].join(" ")}
                      >
                        {section.heading}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

      </div>
    </Container>
  );
}
