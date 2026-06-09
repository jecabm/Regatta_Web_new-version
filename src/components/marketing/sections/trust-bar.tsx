"use client";

import { ShieldCheck, Star, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

const icons = [ShieldCheck, Star, Clock];

export function TrustBar() {
  const { content } = useCountry();
  const { trustBar } = content.home;

  return (
    <section style={{ backgroundColor: "#F08421" }} className="border-y border-transparent">
      <Container size="wide" className="py-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:gap-8">
          {/* Stats row — always horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            {trustBar.stats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-black/10 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-lg font-bold leading-none text-white">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-white/75">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Used in row — always horizontal below stats */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-xs font-medium text-white/75">{trustBar.usedIn}</span>
            {trustBar.industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white"
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
