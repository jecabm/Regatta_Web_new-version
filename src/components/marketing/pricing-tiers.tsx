"use client";

import { useState } from "react";
import { Check, Minus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

// Comparison table rows — feature names are technical product terms, kept in English across locales.
// Category labels come from content.dictionary.pricing.categories.
const comparisonRows = [
  {
    categoryKey: "core" as const,
    rows: [
      { feature: "Asset register", standard: true, pro: true, enterprise: true },
      { feature: "Users", standard: "1", pro: "6", enterprise: "Unlimited" },
      { feature: "Inspections & checklists", standard: true, pro: true, enterprise: true },
      { feature: "CSV / bulk import", standard: true, pro: true, enterprise: true },
      { feature: "QR code scanning", standard: true, pro: true, enterprise: true },
      { feature: "Offline mode", standard: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "compliance" as const,
    rows: [
      { feature: "Compliance calendar", standard: true, pro: true, enterprise: true },
      { feature: "Automated alerts", standard: false, pro: true, enterprise: true },
      { feature: "Audit trail & history", standard: true, pro: true, enterprise: true },
      { feature: "Custom compliance standards", standard: false, pro: true, enterprise: true },
      { feature: "Regulatory report export", standard: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "teamLocations" as const,
    rows: [
      { feature: "Multiple locations / sites", standard: false, pro: true, enterprise: true },
      { feature: "Role-based access control", standard: false, pro: true, enterprise: true },
      { feature: "Equipment booking", standard: false, pro: true, enterprise: true },
      { feature: "Team management", standard: false, pro: true, enterprise: true },
    ],
  },
  {
    categoryKey: "enterprise" as const,
    rows: [
      { feature: "Custom forms & fields", standard: false, pro: "Limited", enterprise: true },
      { feature: "SSO / SAML", standard: false, pro: false, enterprise: true },
      { feature: "API access", standard: false, pro: false, enterprise: true },
      { feature: "Dedicated success manager", standard: false, pro: false, enterprise: true },
      { feature: "Custom SLA", standard: false, pro: false, enterprise: true },
    ],
  },
  {
    categoryKey: "support" as const,
    rows: [
      { feature: "Email support", standard: true, pro: true, enterprise: true },
      { feature: "Priority support", standard: false, pro: true, enterprise: true },
      { feature: "Onboarding assistance", standard: false, pro: true, enterprise: true },
    ],
  },
];

type CellValue = boolean | string;

function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  if (value === true)
    return (
      <td
        className={cn(
          "px-4 py-3.5 text-center",
          highlight && "bg-brand-50"
        )}
      >
        <Check className="mx-auto h-4 w-4 text-success" />
      </td>
    );
  if (value === false)
    return (
      <td
        className={cn(
          "px-4 py-3.5 text-center text-ink-300",
          highlight && "bg-brand-50"
        )}
      >
        <Minus className="mx-auto h-4 w-4" />
      </td>
    );
  return (
    <td
      className={cn(
        "px-4 py-3.5 text-center text-sm font-medium text-ink-700",
        highlight && "bg-brand-50"
      )}
    >
      {value}
    </td>
  );
}

type FaqItemProps = { q: string; a: string };
function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-ink-900">{q}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-ink-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-ink-600">{a}</p>
      )}
    </div>
  );
}

/** Country-aware pricing: tiers, comparison table, and FAQ. */
export function PricingTiers() {
  const { content } = useCountry();
  const { pricing, actions } = content.dictionary;
  const tiers = content.pricing.tiers;

  return (
    <>
      {/* Tier cards */}
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
                  <h2 className="text-lg font-semibold text-ink-900">{tier.name}</h2>
                  {tier.popular && <Badge variant="brand">{pricing.mostPopular}</Badge>}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{tier.description}</p>

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
                      <span className="text-base font-normal text-ink-500">{pricing.perMonth}</span>
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

      {/* Comparison table */}
      <section className="border-t border-ink-200 bg-ink-50 py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {pricing.comparePlans}
            </h2>
            <p className="mt-3 text-ink-500">{pricing.compareSubtitle}</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-ink-200 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-ink-200">
                  <th className="px-4 py-4 text-left font-semibold text-ink-900">{pricing.featureColumn}</th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={cn(
                        "px-4 py-4 text-center font-semibold",
                        tier.popular
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-900"
                      )}
                    >
                      {tier.name}
                      {tier.popular && (
                        <span className="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs text-brand-700">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((group) => (
                  <>
                    <tr key={group.categoryKey} className="bg-ink-50">
                      <td
                        colSpan={4}
                        className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink-400"
                      >
                        {pricing.categories[group.categoryKey]}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-ink-100">
                        <td className="px-4 py-3.5 text-ink-700">{row.feature}</td>
                        <Cell value={row.standard} highlight={false} />
                        <Cell value={row.pro} highlight={true} />
                        <Cell value={row.enterprise} highlight={false} />
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl text-center mb-10">
              {pricing.faqTitle}
            </h2>
            {pricing.faqItems.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-ink-900 p-8 text-center">
            <h3 className="text-xl font-bold text-white">{pricing.stillHaveQuestions}</h3>
            <p className="mt-2 text-ink-300">{pricing.stillHaveQuestionsSubtitle}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/free-trial" size="lg">{actions.startFreeTrial}</Button>
              <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                {actions.talkToSales}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
