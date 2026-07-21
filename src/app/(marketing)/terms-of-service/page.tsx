import type { Metadata } from "next";
import { TermsOfServiceContent } from "@/components/marketing/legal/terms-of-service-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Regatta Registers — the legal agreement governing your use of our platform.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
