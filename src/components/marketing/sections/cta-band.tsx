"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";

/** Dark conversion band used at the bottom of marketing pages. */
export function CtaBand() {
  const { content } = useCountry();
  const { cta } = content.home;

  return (
    <section className="bg-ink-900">
      <Container className="py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
          {cta.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-trial" size="lg">
            {cta.primary}
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            {cta.secondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}
