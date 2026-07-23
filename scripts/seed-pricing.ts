/**
 * One-off migration: seeds the `pricingPage-au` / `pricingPage-co` Sanity documents
 * with today's hardcoded pricing copy, so Studio editors start from the real
 * current text instead of a blank form.
 *
 * Usage: npm run seed:pricing
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

function withKeys<T extends object>(items: T[]): (T & { _key: string })[] {
  return items.map((item, i) => ({ ...item, _key: `item-${i}` }));
}

function toPricingPageDoc(country: "au" | "co", content: CountryContent) {
  const { pricing } = content.dictionary;

  return {
    _id: `pricingPage-${country}`,
    _type: "pricingPage",
    country,
    hero: {
      eyebrow: pricing.eyebrow,
      title: pricing.title,
      subtitle: pricing.subtitle,
      note: pricing.note,
    },
    tiers: withKeys(
      content.pricing.tiers.map((t) => ({
        name: t.name,
        description: t.description,
        monthlyAmount: t.monthlyAmount,
        annualAmount: t.annualAmount,
        features: t.features,
        cta: t.cta,
        popular: t.popular ?? false,
      }))
    ),
    labels: {
      perMonth: pricing.perMonth,
      custom: pricing.custom,
      mostPopular: pricing.mostPopular,
      comparePlans: pricing.comparePlans,
      compareSubtitle: pricing.compareSubtitle,
      featureColumn: pricing.featureColumn,
      categories: pricing.categories,
    },
    faq: {
      title: pricing.faqTitle,
      items: withKeys(pricing.faqItems),
    },
    closing: {
      title: pricing.stillHaveQuestions,
      subtitle: pricing.stillHaveQuestionsSubtitle,
    },
  };
}

async function main() {
  const docs = [toPricingPageDoc("au", auContent), toPricingPageDoc("co", coContent)];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
