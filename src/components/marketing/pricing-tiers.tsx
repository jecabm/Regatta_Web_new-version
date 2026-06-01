"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Country-aware pricing: tiers + prices formatted in the local currency. */
export function PricingTiers() {
  const { content } = useCountry();
  const { pricing } = content.dictionary;
  const tiers = content.pricing.tiers;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {pricing.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {pricing.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            {pricing.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                "flex flex-col p-6",
                tier.popular && "ring-2 ring-brand-500"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink-900">
                  {tier.name}
                </h2>
                {tier.popular && (
                  <Badge variant="brand">{pricing.mostPopular}</Badge>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {tier.description}
              </p>

              <div className="mt-5">
                {tier.amount === null ? (
                  <span className="text-3xl font-bold tracking-tight text-ink-900">
                    {pricing.custom}
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold tracking-tight text-ink-900">
                      {formatCurrency(tier.amount, content.locale, content.currency)}
                    </span>
                    <span className="text-base font-normal text-ink-500">
                      {pricing.perMonth}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-ink-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  href={tier.amount === null ? "/contact" : "/free-trial"}
                  variant={tier.popular ? "primary" : "outline"}
                  fullWidth
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-400">{pricing.note}</p>
      </Container>
    </section>
  );
}
