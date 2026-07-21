import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/marketing/legal/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Regatta Registers — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
