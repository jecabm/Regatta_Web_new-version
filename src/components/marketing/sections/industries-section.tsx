"use client";

import { Mountain, HardHat, Wrench, Factory } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";

const icons = [Mountain, HardHat, Wrench, Factory];

// Interleaved: grey cards use ink-only gradients, orange cards use brand-only gradients.
// No cross-family mixing — each card is internally consistent.
const cards = [
  {
    // Grey — ink gradient
    bg: "bg-gradient-to-br from-ink-600 to-ink-800",
    iconChip: "bg-brand-500/25 text-brand-400",
    divider: "bg-white/10",
    badge: "text-white/30",
  },
  {
    // Orange — brand gradient
    bg: "bg-gradient-to-br from-brand-500 to-brand-700",
    iconChip: "bg-white/20 text-white",
    divider: "bg-white/20",
    badge: "text-white/40",
  },
  {
    // Grey — ink gradient (slightly deeper)
    bg: "bg-gradient-to-br from-ink-700 to-ink-900",
    iconChip: "bg-brand-400/30 text-brand-300",
    divider: "bg-white/10",
    badge: "text-white/30",
  },
  {
    // Orange — brand gradient (deeper)
    bg: "bg-gradient-to-br from-brand-600 to-brand-800",
    iconChip: "bg-white/20 text-white",
    divider: "bg-white/20",
    badge: "text-white/40",
  },
];

/** Industries served — rich gradient cards. */
export function IndustriesSection() {
  const { content } = useCountry();
  const { industries } = content.home;

  return (
    <Section size="wide">
      <SectionHeading
        eyebrow={industries.eyebrow}
        title={industries.title}
        description={industries.subtitle}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          const card = cards[i % cards.length];
          return (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-2xl ${card.bg} p-6`}
            >
              {/* Subtle dot texture */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />

              <span className={`relative grid h-11 w-11 place-items-center rounded-xl ${card.iconChip}`}>
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="relative mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/75">
                {item.description}
              </p>

              <div className={`relative mt-6 h-px ${card.divider}`} />
              <p className={`relative mt-4 text-xs font-medium uppercase tracking-wider ${card.badge}`}>
                {industries.badge}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Button href="/free-trial" size="lg">
          {content.home.cta.primary}
        </Button>
      </div>
    </Section>
  );
}
