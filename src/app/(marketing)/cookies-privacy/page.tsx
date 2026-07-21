import type { Metadata } from "next";
import { CookiePolicyContent } from "@/components/marketing/legal/cookie-policy-content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Regatta Registers — how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
