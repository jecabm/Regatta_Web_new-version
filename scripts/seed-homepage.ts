/**
 * One-off migration: seeds the `homePage-au` / `homePage-co` Sanity documents
 * with today's hardcoded homepage copy, so Studio editors start from the real
 * current text instead of a blank form.
 *
 * Usage: node --env-file=.env.local --experimental-strip-types scripts/seed-homepage.ts
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

/** Sanity array-of-object items require a `_key`. */
function withKeys<T extends object>(items: T[]): (T & { _key: string })[] {
  return items.map((item, i) => ({ ...item, _key: `item-${i}` }));
}

function toHomePageDoc(country: "au" | "co", content: CountryContent) {
  const { hero } = content.dictionary;
  const { why, how, industries, trustBar, liftingEquipment, cta } = content.home;

  return {
    _id: `homePage-${country}`,
    _type: "homePage",
    country,
    hero: {
      eyebrow: hero.mercuryEyebrow,
      titleLine1: hero.mercuryTitleLine1,
      titleHighlight: hero.mercuryTitleHighlight,
      titleLine2: hero.mercuryTitleLine2,
      subtitle: hero.mercurySubtitle,
      scrollHint: hero.scrollHint,
    },
    trustBar: {
      usedIn: trustBar.usedIn,
      industries: trustBar.industries,
    },
    why: {
      eyebrow: why.eyebrow,
      title: why.title,
      subtitle: why.subtitle,
      items: withKeys(why.items),
    },
    liftingEquipment: {
      eyebrow: liftingEquipment.eyebrow,
      title: liftingEquipment.title,
      titleHighlight: liftingEquipment.titleHighlight,
      subtitle: liftingEquipment.subtitle,
      features: withKeys(liftingEquipment.features),
      ctaPrimary: liftingEquipment.ctaPrimary,
      ctaSecondary: liftingEquipment.ctaSecondary,
    },
    howItWorks: {
      eyebrow: how.eyebrow,
      title: how.title,
      subtitle: how.subtitle,
      steps: withKeys(how.steps),
    },
    industries: {
      eyebrow: industries.eyebrow,
      title: industries.title,
      subtitle: industries.subtitle,
      badge: industries.badge,
      items: withKeys(industries.items),
    },
    cta: {
      title: cta.title,
      subtitle: cta.subtitle,
      primary: cta.primary,
      secondary: cta.secondary,
    },
  };
}

async function main() {
  const docs = [toHomePageDoc("au", auContent), toHomePageDoc("co", coContent)];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
