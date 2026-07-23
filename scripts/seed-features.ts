/**
 * One-off migration: seeds the `featuresPage-au` / `featuresPage-co` Sanity documents
 * with today's hardcoded Features page copy, so Studio editors start from the real
 * current text instead of a blank form.
 *
 * Usage: npm run seed:features
 */
import { createClient } from "@sanity/client";
import {
  heroEn,
  heroEs,
  sectionsEn,
  sectionsEs,
  closingCtaEn,
  closingCtaEs,
  type TextSection,
} from "../src/content/features-page-copy.ts";

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

const sectionIdToKey = {
  "asset-management": "assetManagement",
  "inspection-management": "inspectionManagement",
  "multi-locations": "multiLocations",
  reports: "reports",
  "mobile-app": "mobileApp",
} as const;

function toSectionCopy(section: TextSection) {
  return {
    eyebrow: section.eyebrow,
    title: section.title,
    description: section.description,
    bullets: section.bullets,
    ctaLabel: section.ctaLabel,
  };
}

function toFeaturesPageDoc(
  country: "au" | "co",
  hero: typeof heroEn,
  sections: TextSection[],
  closingCta: typeof closingCtaEn
) {
  return {
    _id: `featuresPage-${country}`,
    _type: "featuresPage",
    country,
    hero,
    sections: Object.fromEntries(
      sections.map((s) => [sectionIdToKey[s.id as keyof typeof sectionIdToKey], toSectionCopy(s)])
    ),
    closingCta,
  };
}

async function main() {
  const docs = [
    toFeaturesPageDoc("au", heroEn, sectionsEn, closingCtaEn),
    toFeaturesPageDoc("co", heroEs, sectionsEs, closingCtaEs),
  ];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
