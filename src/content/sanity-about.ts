import type { AboutContent, FeatureItem, StatItem } from "@/content/countries/types";
import { pick } from "@/lib/content-merge";

/** Shape returned by `aboutPageQuery` — every field optional since Studio editors may leave fields blank. */
export interface SanityAboutDoc {
  country?: "au" | "co";
  hero?: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    secondaryIntro?: string;
  };
  stats?: StatItem[];
  mission?: {
    title?: string;
    body?: string;
  };
  values?: {
    title?: string;
    items?: FeatureItem[];
  };
  cta?: {
    title?: string;
    subtitle?: string;
    primary?: string;
    secondary?: string;
  };
}

/** Layers Studio-edited About copy over the static per-country defaults. */
export function mergeAboutContent(base: AboutContent, override?: SanityAboutDoc | null): AboutContent {
  if (!override) return base;

  return {
    eyebrow: pick(override.hero?.eyebrow, base.eyebrow),
    title: pick(override.hero?.title, base.title),
    intro: pick(override.hero?.intro, base.intro),
    secondaryIntro: pick(override.hero?.secondaryIntro, base.secondaryIntro),
    stats: pick(override.stats, base.stats),
    mission: {
      title: pick(override.mission?.title, base.mission.title),
      body: pick(override.mission?.body, base.mission.body),
    },
    values: {
      title: pick(override.values?.title, base.values.title),
      items: pick(override.values?.items, base.values.items),
    },
    cta: {
      title: pick(override.cta?.title, base.cta.title),
      subtitle: pick(override.cta?.subtitle, base.cta.subtitle),
      primary: pick(override.cta?.primary, base.cta.primary),
      secondary: pick(override.cta?.secondary, base.cta.secondary),
    },
  };
}
