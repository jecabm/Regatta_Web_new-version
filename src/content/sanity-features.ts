import { pick } from "@/lib/content-merge";

export interface FeaturesHero {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trust: string;
}

export interface FeatureSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
}

export interface FeaturesClosingCta {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const SECTION_KEYS = [
  "assetManagement",
  "inspectionManagement",
  "multiLocations",
  "reports",
  "mobileApp",
] as const;
type SectionKey = (typeof SECTION_KEYS)[number];

/** Shape returned by `featuresPageQuery` — every field optional since Studio editors may leave fields blank. */
export interface SanityFeaturesDoc {
  country?: "au" | "co";
  hero?: Partial<FeaturesHero>;
  sections?: Partial<Record<SectionKey, Partial<FeatureSectionCopy>>>;
  closingCta?: Partial<FeaturesClosingCta>;
}

function mergeSection(base: FeatureSectionCopy, override?: Partial<FeatureSectionCopy>): FeatureSectionCopy {
  return {
    eyebrow: pick(override?.eyebrow, base.eyebrow),
    title: pick(override?.title, base.title),
    description: pick(override?.description, base.description),
    bullets: pick(override?.bullets, base.bullets),
    ctaLabel: pick(override?.ctaLabel, base.ctaLabel),
  };
}

export function mergeFeaturesHero(base: FeaturesHero, override?: SanityFeaturesDoc | null): FeaturesHero {
  const h = override?.hero;
  return {
    badge: pick(h?.badge, base.badge),
    title: pick(h?.title, base.title),
    subtitle: pick(h?.subtitle, base.subtitle),
    ctaPrimary: pick(h?.ctaPrimary, base.ctaPrimary),
    ctaSecondary: pick(h?.ctaSecondary, base.ctaSecondary),
    trust: pick(h?.trust, base.trust),
  };
}

export function mergeFeaturesSections(
  base: Record<SectionKey, FeatureSectionCopy>,
  override?: SanityFeaturesDoc | null
): Record<SectionKey, FeatureSectionCopy> {
  const overrideSections = override?.sections;
  return SECTION_KEYS.reduce((acc, key) => {
    acc[key] = mergeSection(base[key], overrideSections?.[key]);
    return acc;
  }, {} as Record<SectionKey, FeatureSectionCopy>);
}

export function mergeFeaturesClosingCta(
  base: FeaturesClosingCta,
  override?: SanityFeaturesDoc | null
): FeaturesClosingCta {
  const c = override?.closingCta;
  return {
    badge: pick(c?.badge, base.badge),
    title: pick(c?.title, base.title),
    subtitle: pick(c?.subtitle, base.subtitle),
    ctaPrimary: pick(c?.ctaPrimary, base.ctaPrimary),
    ctaSecondary: pick(c?.ctaSecondary, base.ctaSecondary),
  };
}
