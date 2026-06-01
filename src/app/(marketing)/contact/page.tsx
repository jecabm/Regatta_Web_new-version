import type { Metadata } from "next";
import { ContactContent } from "@/components/marketing/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Regatta Registers team — sales, support, and demo requests.",
};

export default function ContactPage() {
  return <ContactContent />;
}
