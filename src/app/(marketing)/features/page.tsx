import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/marketing/features-page-content";
import { client } from "@/sanity/lib/client";
import { featuresPageQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Centralise your asset register, digitise inspections, and stay audit-ready across every site — one platform for construction, mining, transport and plant hire teams.",
};

export default async function FeaturesPage() {
  const [au, co] = await Promise.all([
    client.fetch(featuresPageQuery, { country: "au" }),
    client.fetch(featuresPageQuery, { country: "co" }),
  ]);

  return <FeaturesPageContent sanityFeatures={{ au, co }} />;
}
