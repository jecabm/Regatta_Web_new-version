import type { Metadata } from "next";
import { ContactContent } from "@/components/marketing/contact-content";
import { SanityContactProvider } from "@/content/sanity-contact-context";
import { client } from "@/sanity/lib/client";
import { contactPageQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Regatta Registers team — sales, support, and demo requests.",
};

export default async function ContactPage() {
  const [au, co] = await Promise.all([
    client.fetch(contactPageQuery, { country: "au" }),
    client.fetch(contactPageQuery, { country: "co" }),
  ]);

  return (
    <SanityContactProvider value={{ au, co }}>
      <ContactContent />
    </SanityContactProvider>
  );
}
