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
    <div className="mx-auto max-w-3xl px-4 pb-4">
      <Badge variant="brand">{hero.badge}</Badge>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
        {hero.titleLead}{" "}
        <span className="text-brand-500">{hero.titleHighlight}</span>{" "}
        {hero.titleTrail}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
        {hero.subtitle}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/free-trial" size="lg">
          {actions.startFreeTrial}
        </Button>
        <Button href="/pricing" variant="outline" size="lg">
          {actions.viewPricing}
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        {hero.trustSignals.map((s) => (
          <span key={s} className="flex items-center gap-1.5 text-sm text-ink-400">
            <Check className="h-3.5 w-3.5 text-success" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
