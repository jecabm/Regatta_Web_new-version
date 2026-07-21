import { MercuryHero } from "@/components/marketing/hero/mercury-hero";
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
      <MercuryHero />
      <TrustBar />
      <WhySection />
      <LiftingEquipmentSection />
      <HowItWorks />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
