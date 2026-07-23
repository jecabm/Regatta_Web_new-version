import type { CountryContent, FeatureItem, StepItem } from "@/content/countries/types";
import { pick } from "@/lib/content-merge";

/** Shape returned by `homePageQuery` — every field optional since Studio editors may leave fields blank. */
export interface SanityHomeDoc {
  country?: "au" | "co";
  hero?: {
    eyebrow?: string;
    titleLine1?: string;
    titleHighlight?: string;
    titleLine2?: string;
    subtitle?: string;
    scrollHint?: string;
  };
  trustBar?: {
    usedIn?: string;
    industries?: string[];
  };
  why?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items?: FeatureItem[];
  };
  liftingEquipment?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    features?: FeatureItem[];
    ctaPrimary?: string;
    ctaSecondary?: string;
  };
  howItWorks?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    steps?: StepItem[];
  };
  industries?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    badge?: string;
    items?: FeatureItem[];
  };
  cta?: {
    title?: string;
    subtitle?: string;
    primary?: string;
    secondary?: string;
  };
}

/**
 * Layers Studio-edited homepage copy over the static per-country defaults.
 * Field-by-field so an editor leaving a field blank doesn't blank out the page.
 */
export function mergeHomeContent(base: CountryContent, override?: SanityHomeDoc | null): CountryContent {
  if (!override) return base;

  return {
    ...base,
    dictionary: {
      ...base.dictionary,
      hero: {
        ...base.dictionary.hero,
        mercuryEyebrow: pick(override.hero?.eyebrow, base.dictionary.hero.mercuryEyebrow),
        mercuryTitleLine1: pick(override.hero?.titleLine1, base.dictionary.hero.mercuryTitleLine1),
        mercuryTitleHighlight: pick(override.hero?.titleHighlight, base.dictionary.hero.mercuryTitleHighlight),
        mercuryTitleLine2: pick(override.hero?.titleLine2, base.dictionary.hero.mercuryTitleLine2),
        mercurySubtitle: pick(override.hero?.subtitle, base.dictionary.hero.mercurySubtitle),
        scrollHint: pick(override.hero?.scrollHint, base.dictionary.hero.scrollHint),
      },
    },
    home: {
      ...base.home,
      trustBar: {
        usedIn: pick(override.trustBar?.usedIn, base.home.trustBar.usedIn),
        industries: pick(override.trustBar?.industries, base.home.trustBar.industries),
        stats: base.home.trustBar.stats,
      },
      why: {
        eyebrow: pick(override.why?.eyebrow, base.home.why.eyebrow),
        title: pick(override.why?.title, base.home.why.title),
        subtitle: pick(override.why?.subtitle, base.home.why.subtitle),
        items: pick(override.why?.items, base.home.why.items),
      },
      liftingEquipment: {
        eyebrow: pick(override.liftingEquipment?.eyebrow, base.home.liftingEquipment.eyebrow),
        title: pick(override.liftingEquipment?.title, base.home.liftingEquipment.title),
        titleHighlight: pick(override.liftingEquipment?.titleHighlight, base.home.liftingEquipment.titleHighlight),
        subtitle: pick(override.liftingEquipment?.subtitle, base.home.liftingEquipment.subtitle),
        features: pick(override.liftingEquipment?.features, base.home.liftingEquipment.features),
        ctaPrimary: pick(override.liftingEquipment?.ctaPrimary, base.home.liftingEquipment.ctaPrimary),
        ctaSecondary: pick(override.liftingEquipment?.ctaSecondary, base.home.liftingEquipment.ctaSecondary),
      },
      how: {
        eyebrow: pick(override.howItWorks?.eyebrow, base.home.how.eyebrow),
        title: pick(override.howItWorks?.title, base.home.how.title),
        subtitle: pick(override.howItWorks?.subtitle, base.home.how.subtitle),
        steps: pick(override.howItWorks?.steps, base.home.how.steps),
      },
      industries: {
        eyebrow: pick(override.industries?.eyebrow, base.home.industries.eyebrow),
        title: pick(override.industries?.title, base.home.industries.title),
        subtitle: pick(override.industries?.subtitle, base.home.industries.subtitle),
        badge: pick(override.industries?.badge, base.home.industries.badge),
        items: pick(override.industries?.items, base.home.industries.items),
      },
      cta: {
        title: pick(override.cta?.title, base.home.cta.title),
        subtitle: pick(override.cta?.subtitle, base.home.cta.subtitle),
        primary: pick(override.cta?.primary, base.home.cta.primary),
        secondary: pick(override.cta?.secondary, base.home.cta.secondary),
      },
    },
  };
}
