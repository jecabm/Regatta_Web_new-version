import type { Metadata } from "next";
import { AboutContent } from "@/components/marketing/about-content";
import { TeamSection } from "@/components/marketing/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our mission, industry focus, and the compliance standards that guide Regatta Registers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <TeamSection />
    </>
  );
}
