/**
 * Single source of truth for site-wide metadata and navigation.
 * Keeping this centralized makes the structure i18n-ready (labels can later
 * be swapped for translation keys) and keeps the header/footer in sync.
 */

export type NavItem = {
  key: string;
  label: string;
  href: string;
  description?: string;
};

export type MegaColumn = {
  /** Key into Dictionary.nav for the translated column heading. */
  headingKey?: string;
  items: NavItem[];
};

export type MegaFeatured = {
  eyebrow: string;
  heading: string;
  description: string;
  href: string;
  cta: string;
};

export type NavGroup = {
  key: string;
  label: string;
  children: NavItem[];
  columns?: MegaColumn[];
  featured?: MegaFeatured;
};

export type NavEntry = NavItem | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "children" in entry;
}

export const siteConfig = {
  name: "Regatta Registers",
  shortName: "Regatta",
  description:
    "Manage your assets, inspections, and compliance in one secure place. Cloud-based lifting-equipment, asset, and fleet inspection management for mining, construction, and industrial compliance.",
  url: "https://www.regattaregisters.com",
  locale: "en-AU",
  contactEmail: "support@regattaregisters.com",
} as const;

/** Primary navigation. */
export const mainNav: NavEntry[] = [
  {
    key: "features",
    label: "Features",
    children: [
      { key: "asset-management", label: "Asset Management", href: "/features#asset-management" },
      { key: "inspection-management", label: "Inspection Management", href: "/features#inspection-management" },
      { key: "multi-locations", label: "Multi Locations", href: "/features#multi-locations" },
      { key: "reports", label: "Reports", href: "/features#reports" },
      { key: "mobile-app", label: "Offline Inspections", href: "/features#mobile-app" },
    ],
    columns: [
      {
        headingKey: "manageAssets",
        items: [
          {
            key: "asset-management",
            label: "Asset Management",
            href: "/features#asset-management",
            description: "Centralised register for every piece of equipment you own or operate.",
          },
          {
            key: "multi-locations",
            label: "Multi Locations",
            href: "/features#multi-locations",
            description: "Manage compliance across multiple sites from a single dashboard.",
          },
        ],
      },
      {
        headingKey: "stayCompliant",
        items: [
          {
            key: "inspection-management",
            label: "Inspection Management",
            href: "/features#inspection-management",
            description: "Digital checklists tailored to equipment type, from pre-start to sign-off.",
          },
          {
            key: "reports",
            label: "Reports",
            href: "/features#reports",
            description: "Real-time compliance dashboards and audit-ready exports.",
          },
        ],
      },
      {
        headingKey: "fieldReady",
        items: [
          {
            key: "mobile-app",
            label: "Offline Inspections",
            href: "/features#mobile-app",
            description: "Complete inspections from the field, online or offline.",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "See it in action",
      heading: "Everything you need to run a compliant operation",
      description:
        "From asset registers to daily prestart checks — Regatta Registers connects your whole compliance workflow in one place.",
      href: "/free-trial",
      cta: "Start free trial",
    },
  },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  {
    key: "resources",
    label: "Resources",
    children: [
      { key: "blog", label: "Blog", href: "/resources/blog" },
      { key: "learning", label: "Learning Centre", href: "/resources/learning" },
    ],
    columns: [
      {
        headingKey: "learn",
        items: [
          {
            key: "blog",
            label: "Blog",
            href: "/resources/blog",
            description: "Compliance guides, industry news, and how-to articles.",
          },
          {
            key: "learning",
            label: "Learning Centre",
            href: "/resources/learning",
            description: "Step-by-step guides and video walkthroughs for the platform.",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "New",
      heading: "Learning Centre",
      description:
        "Video walkthroughs and FAQs to help your team get the most out of Regatta Registers.",
      href: "/resources/learning",
      cta: "Explore guides",
    },
  },
  { key: "shop", label: "Shop", href: "/shop" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

/** Conversion / auth actions shown as buttons in the header. */
export const ctaNav = {
  login: { key: "login", label: "Login", href: "/login" },
  freeTrial: { key: "free-trial", label: "Free Trial", href: "/free-trial" },
} as const;

/** Footer link groups. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Features",
    items: [
      { key: "asset-management", label: "Asset Management", href: "/features#asset-management" },
      { key: "inspection-management", label: "Inspection Management", href: "/features#inspection-management" },
      { key: "multi-locations", label: "Multi Locations", href: "/features#multi-locations" },
      { key: "reports", label: "Reports", href: "/features#reports" },
      { key: "mobile-app", label: "Offline Inspections", href: "/features#mobile-app" },
    ],
  },
  {
    title: "Resources",
    items: [
      { key: "blog", label: "Blog", href: "/resources/blog" },
      { key: "learning", label: "Learning Centre", href: "/resources/learning" },
    ],
  },
  {
    title: "Company",
    items: [
      { key: "pricing", label: "Pricing", href: "/pricing" },
      { key: "about", label: "About Us", href: "/about" },
      { key: "contact", label: "Contact", href: "/contact" },
      { key: "free-trial", label: "Free Trial", href: "/free-trial" },
    ],
  },
  {
    title: "Account",
    items: [{ key: "login", label: "Login", href: "/login" }],
  },
];
