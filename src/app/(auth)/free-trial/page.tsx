import type { Metadata } from "next";
import { FreeTrialContent } from "@/components/auth/free-trial-content";

export const metadata: Metadata = {
  title: "Free Trial",
  description:
    "Start your free Regatta Registers trial — no setup costs, no credit card required.",
};

export default function FreeTrialPage() {
  return <FreeTrialContent />;
}
