import type { Metadata } from "next";
import { PricingTiers } from "@/components/marketing/pricing-tiers";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing — Standard, Pro, and Enterprise plans, shown in your country's currency.",
};

export default function PricingPage() {
  return <PricingTiers />;
}
