import type { Metadata } from "next";
import { AboutContent } from "@/components/marketing/about-content";
import { TeamSection } from "@/components/marketing/team-section";
import { SanityAboutProvider } from "@/content/sanity-about-context";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our mission, industry focus, and the compliance standards that guide Regatta Registers.",
};

export default async function AboutPage() {
  const [au, co] = await Promise.all([
    client.fetch(aboutPageQuery, { country: "au" }),
    client.fetch(aboutPageQuery, { country: "co" }),
  ]);

  return (
    <SanityAboutProvider value={{ au, co }}>
      <AboutContent />
      <TeamSection />
    </SanityAboutProvider>
  );
}
