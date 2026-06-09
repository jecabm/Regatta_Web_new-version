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
      <Container className="py-12 text-center sm:py-16 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-300 sm:text-lg">
          {cta.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
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
