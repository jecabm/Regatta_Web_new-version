import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
      {/* Hero */}
      <section className="relative">
        <ContainerScroll titleComponent={<HeroHeading />}>
          <HeroDashboardMock />
        </ContainerScroll>
      </section>

      {/* Trust signals — brand-tinted bar immediately after hero */}
      <TrustBar />

      {/* Value props */}
      <WhySection />

      {/* Lifting equipment — dark feature showcase */}
      <LiftingEquipmentSection />

      {/* How it works */}
      <HowItWorks />

      {/* Industries */}
      <IndustriesSection />

      {/* Testimonials (hidden until Sanity content is added) */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
