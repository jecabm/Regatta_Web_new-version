"use client";

import { ShieldCheck, Star, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

const icons = [ShieldCheck, Star, Clock];

export function TrustBar() {
  const { content } = useCountry();
  const { trustBar } = content.home;

  return (
    <section className="border-y border-brand-100 bg-brand-50">
      <Container size="wide" className="py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustBar.stats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-lg font-bold leading-none text-ink-900">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-ink-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-xs font-medium text-ink-400">{trustBar.usedIn}</span>
            {trustBar.industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-ink-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
