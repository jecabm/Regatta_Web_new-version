"use client";

import { Mountain, HardHat, Wrench, Factory } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { useCountry } from "@/hooks/use-country";

const icons = [Mountain, HardHat, Wrench, Factory];

/** Industries served — four cards with dark icon chips. */
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
          return (
            <div
              key={item.title}
              className="rounded-xl border border-ink-200 bg-white p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink-900 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
