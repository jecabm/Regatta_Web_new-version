/**
 * Single source of truth for site-wide metadata and navigation.
 * Keeping this centralized makes the structure i18n-ready (labels can later
 * be swapped for translation keys) and keeps the header/footer in sync.
 */

export type NavItem = {
  /** Stable key — reserved for future i18n lookups. */
  key: string;
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Regatta Registers",
  shortName: "Regatta",
  description:
    "Manage your assets, inspections, and compliance in one secure place. Cloud-based lifting-equipment, asset, and fleet inspection management for mining, construction, and industrial compliance.",
  url: "https://www.regattaregisters.com",
  locale: "en-AU",
  contactEmail: "support@regattaregisters.com",
} as const;

/** Primary navigation — MUST match the existing site structure. */
export const mainNav: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
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
    title: "Product",
    items: [
      { key: "home", label: "Overview", href: "/" },
      { key: "pricing", label: "Pricing", href: "/pricing" },
      { key: "free-trial", label: "Free Trial", href: "/free-trial" },
    ],
  },
  {
    title: "Company",
    items: [
      { key: "about", label: "About Us", href: "/about" },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Account",
    items: [{ key: "login", label: "Login", href: "/login" }],
  },
];
