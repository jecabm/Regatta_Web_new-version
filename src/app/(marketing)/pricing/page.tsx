import type { Metadata } from "next";
import { PricingTiers } from "@/components/marketing/pricing-tiers";
import { SanityPricingProvider } from "@/content/sanity-pricing-context";
import { client } from "@/sanity/lib/client";
import { pricingPageQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing — Standard, Pro, and Enterprise plans, shown in your country's currency.",
};

export default async function PricingPage() {
  const [au, co] = await Promise.all([
    client.fetch(pricingPageQuery, { country: "au" }),
    client.fetch(pricingPageQuery, { country: "co" }),
  ]);

  return (
    <SanityPricingProvider value={{ au, co }}>
      <PricingTiers />
    </SanityPricingProvider>
  );
}
