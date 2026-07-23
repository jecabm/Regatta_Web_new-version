/**
 * One-off migration: seeds the `contactPage-au` / `contactPage-co` Sanity documents
 * with today's hardcoded Contact page copy, so Studio editors start from the real
 * current text instead of a blank form.
 *
 * Usage: npm run seed:contact
 */
import { createClient } from "@sanity/client";
import { auContent } from "../src/content/countries/au/index.ts";
import { coContent } from "../src/content/countries/co/index.ts";
import type { CountryContent } from "../src/content/countries/types.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID / DATASET / API_VERSION in .env.local");
}
if (!token) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

function toContactPageDoc(country: "au" | "co", content: CountryContent) {
  const { contactPage, contact } = content;

  return {
    _id: `contactPage-${country}`,
    _type: "contactPage",
    country,
    hero: {
      eyebrow: contactPage.eyebrow,
      title: contactPage.title,
      subtitle: contactPage.subtitle,
    },
    form: {
      name: contactPage.form.name,
      company: contactPage.form.company,
      email: contactPage.form.email,
      message: contactPage.form.message,
      submit: contactPage.form.submit,
      success: contactPage.form.success,
    },
    detailsTitle: contactPage.detailsTitle,
    channelsTitle: contactPage.channelsTitle,
    contactInfo: {
      region: contact.region,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
    },
  };
}

async function main() {
  const docs = [toContactPageDoc("au", auContent), toContactPageDoc("co", coContent)];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
