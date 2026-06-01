import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroDashboardMock } from "@/components/marketing/hero-dashboard-mock";
import { HeroHeading } from "@/components/marketing/hero-heading";
import { WhySection } from "@/components/marketing/sections/why-section";
import { HowItWorks } from "@/components/marketing/sections/how-it-works";
import { IndustriesSection } from "@/components/marketing/sections/industries-section";
import { CtaBand } from "@/components/marketing/sections/cta-band";

export default function HomePage() {
  return (
    <>
      {/* Hero — scroll-reveal product dashboard (country-aware copy) */}
      <section className="relative">
        <ContainerScroll titleComponent={<HeroHeading />}>
          <HeroDashboardMock />
        </ContainerScroll>
      </section>

      <WhySection />
      <HowItWorks />
      <IndustriesSection />
      <CtaBand />
    </>
  );
}
