"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";

/** Country-aware hero copy + CTAs (used as the ContainerScroll title). */
export function HeroHeading() {
  const { content } = useCountry();
  const { hero, actions } = content.dictionary;

  return (
    <div className="mx-auto w-full max-w-3xl px-2 pb-4 sm:px-4">
      <Badge variant="brand">{hero.badge}</Badge>
      <h1 className="mt-5 text-3xl font-extrabold leading-snug tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:text-6xl">
        {hero.titleLead}{" "}
        <span className="text-brand-500">{hero.titleHighlight}</span>{" "}
        {hero.titleTrail}
      </h1>
      <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-ink-500 sm:px-0 sm:text-base lg:text-lg">
        {hero.subtitle}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/free-trial" size="lg" fullWidth className="sm:w-auto">
          {actions.startFreeTrial}
        </Button>
        <Button href="/pricing" variant="outline" size="lg" fullWidth className="sm:w-auto">
          {actions.viewPricing}
        </Button>
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href="/pricing"
          className="flex w-full max-w-77.5 flex-col items-center rounded-lg bg-ink-900 px-5 py-3 text-center transition-opacity hover:opacity-90"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Get started today
          </span>
          <span className="text-3xl font-bold text-white">$49/month</span>
        </a>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {hero.trustSignals.map((s) => (
          <span key={s} className="flex items-center gap-1.5 text-xs text-ink-400 sm:text-sm">
            <Check className="h-3.5 w-3.5 text-success" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
