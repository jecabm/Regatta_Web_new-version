import { MercuryHero } from "@/components/marketing/hero/mercury-hero";
import { TrustBar } from "@/components/marketing/sections/trust-bar";
import { WhySection } from "@/components/marketing/sections/why-section";
import { LiftingEquipmentSection } from "@/components/marketing/sections/lifting-equipment-section";
import { HowItWorks } from "@/components/marketing/sections/how-it-works";
import { IndustriesSection } from "@/components/marketing/sections/industries-section";
import { TestimonialsSection } from "@/components/marketing/sections/testimonials-section";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { SanityHomeProvider } from "@/content/sanity-home-context";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries";

export default async function HomePage() {
  const [au, co] = await Promise.all([
    client.fetch(homePageQuery, { country: "au" }),
    client.fetch(homePageQuery, { country: "co" }),
  ]);

  return (
    <SanityHomeProvider value={{ au, co }}>
      <MercuryHero />
      <TrustBar />
      <WhySection />
      <LiftingEquipmentSection />
      <HowItWorks />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaBand />
    </SanityHomeProvider>
  );
}
