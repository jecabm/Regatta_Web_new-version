"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";
import { useInView } from "@/hooks/use-in-view";

export function CtaBand() {
  const { content } = useCountry();
  const { cta } = content.home;
  const { ref, inView } = useInView(0.3);

  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Orange glow — centered behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-96 w-full max-w-2xl rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(242,133,0,0.18) 0%, transparent 65%)",
          }}
        />
      </div>

      <Container className="relative py-16 text-center sm:py-20 md:py-28">
        <div
          ref={ref}
          className={`reveal-up${inView ? " is-visible" : ""}`}
        >
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
        </div>
      </Container>
    </section>
  );
}
