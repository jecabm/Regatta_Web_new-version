import type { CountryCode } from "@/config/countries";

/** A pricing plan, priced in the country's own currency. */
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  /** Monthly amount. `null` = custom / contact sales. */
  monthlyAmount: number | null;
  /** Annual amount (billed annually). `null` = custom / contact sales. */
  annualAmount: number | null;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/** UI translation strings (chrome + shared labels). */
export interface Dictionary {
  nav: {
    home: string;
    about: string;
    pricing: string;
    contact: string;
    features: string;
    resources: string;
    // Feature sub-items
    assetManagement: string;
    inspectionManagement: string;
    multiLocations: string;
    reports: string;
    mobileApp: string;
    // Resource sub-items
    blog: string;
    learning: string;
    // Mega menu column headings
    manageAssets: string;
    stayCompliant: string;
    fieldReady: string;
    learn: string;
  };
  actions: {
    login: string;
    freeTrial: string;
    startFreeTrial: string;
    viewPricing: string;
    getStartedFree: string;
    talkToSales: string;
    exploreFeatures: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    titleTrail: string;
    subtitle: string;
    trustSignals: string[];
    /** Cinematic scroll-driven homepage hero (mercury-hero.tsx). */
    mercuryEyebrow: string;
    mercuryTitleLine1: string;
    mercuryTitleHighlight: string;
    mercuryTitleLine2: string;
    mercurySubtitle: string;
    scrollHint: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perMonth: string;
    custom: string;
    mostPopular: string;
    note: string;
    comparePlans: string;
    compareSubtitle: string;
    featureColumn: string;
    categories: {
      core: string;
      compliance: string;
      teamLocations: string;
      enterprise: string;
      support: string;
    };
    faqTitle: string;
    stillHaveQuestions: string;
    stillHaveQuestionsSubtitle: string;
    faqItems: FaqItem[];
  };
  footer: {
    tagline: string;
    groups: { product: string; features: string; resources: string; company: string; account: string; legal: string };
    links: {
      overview: string;
      pricing: string;
      freeTrial: string;
      about: string;
      contact: string;
      login: string;
      blog: string;
      learning: string;
      termsOfService: string;
      privacyPolicy: string;
      cookiePolicy: string;
    };
    rights: string;
    builtFor: string;
  };
  selector: { label: string };
}

/** Home page sections (below the hero). */
export interface HomeContent {
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  industries: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
    badge: string;
  };
  trustBar: {
    stats: StatItem[];
    usedIn: string;
    industries: string[];
  };
  liftingEquipment: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: FeatureItem[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

/** About page. */
export interface AboutContent {
  eyebrow: string;
  title: string;
  intro: string;
  mission: { title: string; body: string };
  stats: StatItem[];
  values: { title: string; items: FeatureItem[] };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

/** Contact page copy + form labels. */
export interface ContactPageContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  form: {
    name: string;
    company: string;
    email: string;
    message: string;
    submit: string;
    success: string;
  };
  detailsTitle: string;
  channelsTitle: string;
}

/** Login + Free Trial copy + form labels. */
export interface AuthContent {
  login: {
    title: string;
    subtitle: string;
    email: string;
    password: string;
    submit: string;
    forgot: string;
    noAccount: string;
    signUp: string;
  };
  freeTrial: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perks: string[];
    formTitle: string;
    email: string;
    company: string;
    password: string;
    submit: string;
    noCard: string;
    haveAccount: string;
    login: string;
  };
}

/** Everything that differs per country. One object per country folder. */
export interface CountryContent {
  code: CountryCode;
  locale: string;
  currency: string;
  dictionary: Dictionary;
  pricing: { tiers: PricingTier[] };
  contact: { region: string; phone: string; email: string; address: string };
  home: HomeContent;
  about: AboutContent;
  contactPage: ContactPageContent;
  auth: AuthContent;
}
