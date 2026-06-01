"use client";

import { Boxes, Activity, Truck, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useCountry } from "@/hooks/use-country";

const icons = [Boxes, Activity, Truck, ShieldCheck];

/** "Why choose us" — four value cards. */
export function WhySection() {
  const { content } = useCountry();
  const { why } = content.home;

  return (
    <Section size="wide">
      <SectionHeading
        eyebrow={why.eyebrow}
        title={why.title}
        description={why.subtitle}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card key={item.title} interactive className="h-full">
              <CardHeader>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-4">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
