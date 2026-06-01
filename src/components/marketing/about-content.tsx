"use client";

import { ShieldCheck, Smartphone, Lock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useCountry } from "@/hooks/use-country";

const valueIcons = [ShieldCheck, Smartphone, Lock];

export function AboutContent() {
  const { content } = useCountry();
  const a = content.about;

  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {a.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          {a.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">{a.intro}</p>
      </Section>

      <section className="border-y border-ink-200 bg-ink-50">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {a.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-ink-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <Section size="narrow">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            {a.mission.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {a.mission.body}
          </p>
        </div>
      </Section>

      <Section muted size="wide">
        <SectionHeading title={a.values.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {a.values.items.map((item, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <Card key={item.title} className="h-full">
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

      <section className="bg-ink-900">
        <Container className="py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {a.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            {a.cta.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">
              {a.cta.primary}
            </Button>
            <Button
              href="/pricing"
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              {a.cta.secondary}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
