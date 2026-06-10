"use client";

import { Section, SectionHeading } from "@/components/ui/section";
import { useCountry } from "@/hooks/use-country";
import { useInView } from "@/hooks/use-in-view";

export function HowItWorks() {
  const { content } = useCountry();
  const { how } = content.home;
  const { ref, inView } = useInView<HTMLOListElement>();

  return (
    <Section muted size="wide">
      <SectionHeading
        eyebrow={how.eyebrow}
        title={how.title}
        description={how.subtitle}
      />
      <ol
        ref={ref}
        className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
      >
        {how.steps.map((step, i) => (
          <li
            key={step.title}
            className={`reveal-up flex gap-4 rounded-xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-elevated${inView ? " is-visible" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-sm shadow-brand-500/30">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
