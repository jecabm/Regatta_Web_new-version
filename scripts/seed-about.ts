/**
 * One-off migration: seeds the `aboutPage-au` / `aboutPage-co` Sanity documents
 * with today's hardcoded About page copy, so Studio editors start from the real
 * current text instead of a blank form.
 *
 * Usage: npm run seed:about
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

function toAboutPageDoc(country: "au" | "co", content: CountryContent) {
  const { about } = content;

  return {
    _id: `aboutPage-${country}`,
    _type: "aboutPage",
    country,
    hero: {
      eyebrow: about.eyebrow,
      title: about.title,
      intro: about.intro,
      secondaryIntro: about.secondaryIntro,
    },
    stats: withKeys(about.stats),
    mission: {
      title: about.mission.title,
      body: about.mission.body,
    },
    values: {
      title: about.values.title,
      items: withKeys(about.values.items),
    },
    cta: {
      title: about.cta.title,
      subtitle: about.cta.subtitle,
      primary: about.cta.primary,
      secondary: about.cta.secondary,
    },
  };
}

async function main() {
  const docs = [toAboutPageDoc("au", auContent), toAboutPageDoc("co", coContent)];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
