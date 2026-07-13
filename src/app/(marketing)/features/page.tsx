import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/marketing/features-page-content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Centralise your asset register, digitise inspections, and stay audit-ready across every site — one platform for construction, mining, transport and plant hire teams.",
};

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
