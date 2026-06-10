"use client";

import { Boxes, Activity, Truck, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useCountry } from "@/hooks/use-country";
import { useInView } from "@/hooks/use-in-view";

const icons = [Boxes, Activity, Truck, ShieldCheck];

export function WhySection() {
  const { content } = useCountry();
  const { why } = content.home;
  const { ref, inView } = useInView();

  return (
    <Section size="wide">
      <SectionHeading
        eyebrow={why.eyebrow}
        title={why.title}
        description={why.subtitle}
      />
      <div
        ref={ref}
        className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
      >
        {why.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={item.title}
              className={`reveal-up${inView ? " is-visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Card interactive className="h-full">
                <CardHeader>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
