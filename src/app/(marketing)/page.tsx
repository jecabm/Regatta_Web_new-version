import { Container } from "@/components/ui/container";
import { HeroDashboardMock } from "@/components/marketing/hero-dashboard-mock";
import { HeroHeading } from "@/components/marketing/hero-heading";
import { TrustBar } from "@/components/marketing/sections/trust-bar";
import { WhySection } from "@/components/marketing/sections/why-section";
import { LiftingEquipmentSection } from "@/components/marketing/sections/lifting-equipment-section";
import { HowItWorks } from "@/components/marketing/sections/how-it-works";
import { IndustriesSection } from "@/components/marketing/sections/industries-section";
import { TestimonialsSection } from "@/components/marketing/sections/testimonials-section";
import { CtaBand } from "@/components/marketing/sections/cta-band";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-950">
        {/* Atmospheric background layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
          {/* Primary orange glow — top-center, slow drift animation */}
          <div
            className="animate-glow-drift absolute -top-40 left-1/2 h-200 w-275 -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(242,133,0,0.14) 0%, transparent 68%)",
            }}
          />
          {/* Secondary warm glow — bottom-right corner */}
          <div
            className="absolute -bottom-24 -right-48 h-130 w-160 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(242,133,0,0.07) 0%, transparent 65%)",
            }}
          />
          {/* Subtle dot/line grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <Container className="relative pb-0 pt-16 sm:pt-24 md:pt-32">
          {/* Hero headline + CTAs */}
          <HeroHeading />

          {/* Product screenshot — browser-chrome frame */}
          <div
            className="animate-scale-up mt-12 sm:mt-16 md:mt-20"
            style={{ animationDelay: "600ms" }}
          >
            <div className="relative mx-auto max-w-5xl">
              {/* Glow halo behind the frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(242,133,0,0.14) 0%, transparent 65%)",
                }}
              />
              {/* Browser chrome */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]">
                {/* Title-bar chrome */}
                <div className="flex items-center gap-2 border-b border-white/6 bg-white/4 px-5 py-3 backdrop-blur-sm">
                  <span aria-hidden className="h-3 w-3 rounded-full bg-red-500/65" />
                  <span aria-hidden className="h-3 w-3 rounded-full bg-yellow-500/65" />
                  <span aria-hidden className="h-3 w-3 rounded-full bg-green-500/65" />
                  <div className="mx-auto flex h-6 w-60 items-center justify-center rounded-md bg-white/6 text-[11px] tracking-wide text-white/30">
                    app.regattaregisters.com
                  </div>
                </div>
                {/* Dashboard content area */}
                <div className="h-85 sm:h-105 md:h-125">
                  <HeroDashboardMock />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trust signals ─── */}
      <TrustBar />

      {/* ── Value props ───── */}
      <WhySection />

      {/* ── Feature showcase — dark ── */}
      <LiftingEquipmentSection />

      {/* ── How it works ──── */}
      <HowItWorks />

      {/* ── Industries ──────── */}
      <IndustriesSection />

      {/* ── Testimonials ────── */}
      <TestimonialsSection />

      {/* ── CTA band ─────────── */}
      <CtaBand />
    </>
  );
}
