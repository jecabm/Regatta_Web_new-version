import type { CountryContent } from "@/content/countries/types";

/** Australia — English, AUD. */
export const auContent: CountryContent = {
  code: "au",
  locale: "en-AU",
  currency: "AUD",
  dictionary: {
    nav: { home: "Home", about: "About Us", pricing: "Pricing", contact: "Contact" },
    actions: {
      login: "Login",
      freeTrial: "Free Trial",
      startFreeTrial: "Start Free Trial",
      viewPricing: "View Pricing",
    },
    hero: {
      badge: "Asset · Inspection · Compliance",
      titleLead: "Manage your assets, inspections, and",
      titleHighlight: "compliance",
      titleTrail: "in one secure place",
      subtitle:
        "A cloud platform for lifting equipment, asset, and fleet inspection management across mining, construction, and industrial compliance.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple, transparent pricing that scales with you",
      subtitle:
        "From single inspectors to organisation-wide deployments with full customisation.",
      perMonth: "/mo",
      custom: "Custom",
      mostPopular: "Most popular",
      note: "All prices in AUD. No setup costs. Cancel anytime.",
    },
    footer: {
      tagline:
        "Asset, inspection, and compliance management for mining, construction, and industrial environments.",
      groups: { product: "Product", company: "Company", account: "Account" },
      links: {
        overview: "Overview",
        pricing: "Pricing",
        freeTrial: "Free Trial",
        about: "About Us",
        contact: "Contact",
        login: "Login",
      },
      rights: "All rights reserved.",
      builtFor: "Built for industrial compliance.",
    },
    selector: { label: "Select country" },
  },
  pricing: {
    tiers: [
      {
        id: "standard",
        name: "Standard",
        description: "For individual inspectors getting started.",
        amount: 49,
        features: ["1 user", "Asset register", "Inspection scheduling", "CSV import"],
        cta: "Start Free Trial",
      },
      {
        id: "pro",
        name: "Pro",
        description: "For growing inspection teams.",
        amount: 199,
        features: [
          "6 users",
          "Everything in Standard",
          "Custom forms",
          "Automated compliance alerts",
          "Priority support",
        ],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For organisation-wide deployments.",
        amount: null,
        features: [
          "Unlimited users",
          "Everything in Pro",
          "Full customisation",
          "SSO & advanced security",
          "Dedicated success manager",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  contact: {
    region: "Australia",
    phone: "+61 2 8000 0000",
    email: "support@regattaregisters.com",
    address: "Sydney, NSW, Australia",
  },
  home: {
    why: {
      eyebrow: "Why Regatta Registers",
      title: "Everything your compliance team needs",
      subtitle:
        "Centralise assets, automate inspections, and stay audit-ready across every site.",
      items: [
        {
          title: "Centralised Management",
          description:
            "Manage all assets, registers, and inspection records in one secure system.",
        },
        {
          title: "Real-Time Visibility",
          description:
            "See the live status of every asset and inspection at a glance.",
        },
        {
          title: "Asset & Fleet Management",
          description:
            "Track equipment, fleets, and components across multiple sites.",
        },
        {
          title: "Automated Compliance",
          description:
            "Never miss an inspection with automated scheduling and alerts.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Up and running in six steps",
      subtitle:
        "No setup costs. Import your existing registers and scale as you grow.",
      steps: [
        { title: "No setup costs", description: "Start free — no upfront fees or hardware required." },
        { title: "Structure setup", description: "Configure your sites, asset types, and teams." },
        { title: "Custom forms", description: "Build inspection forms that match your procedures." },
        { title: "Scale assets", description: "Add assets individually or in bulk as you grow." },
        { title: "Track & inspect", description: "Schedule, assign, and complete inspections on any device." },
        { title: "Import existing data", description: "Bring your current registers in via CSV import." },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Built for heavy, regulated environments",
      subtitle: "Trusted across the industries where compliance can't slip.",
      items: [
        { title: "Mining", description: "Asset registers and inspections for demanding mine sites." },
        { title: "Construction", description: "Keep plant and equipment compliant across projects." },
        { title: "Lifting Equipment", description: "Manage cranes, slings, and rigging with full traceability." },
        { title: "Industrial Compliance", description: "Standardise records and stay audit-ready." },
      ],
    },
    cta: {
      title: "Ready to take control of your compliance?",
      subtitle: "Start your free trial today — no credit card required.",
      primary: "Start Free Trial",
      secondary: "Request Demo",
    },
  },
  about: {
    eyebrow: "About Us",
    title: "Built for the realities of industrial compliance",
    intro:
      "Regatta Registers helps asset-heavy operations replace paper and spreadsheets with a single, audit-ready system for assets, inspections, and compliance.",
    mission: {
      title: "Our mission",
      body:
        "To make compliance effortless for the industries that keep the world running — so teams spend less time on admin and more time on safe, productive work.",
    },
    stats: [
      { value: "10k+", label: "Assets tracked" },
      { value: "98%", label: "On-time inspections" },
      { value: "4", label: "Industries served" },
      { value: "24/7", label: "Secure access" },
    ],
    values: {
      title: "What we stand for",
      items: [
        { title: "Compliance first", description: "Every feature is designed to keep you audit-ready." },
        { title: "Built for the field", description: "Fast, simple, and reliable on any device, anywhere." },
        { title: "Secure by design", description: "Your records are protected with enterprise-grade security." },
      ],
    },
    cta: {
      title: "Let's talk about your operation",
      subtitle: "See how Regatta Registers fits your compliance workflow.",
      primary: "Request Demo",
      secondary: "View Pricing",
    },
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Talk to the Regatta Registers team",
    subtitle:
      "Questions about deployment, compliance workflows, or pricing? We're here to help.",
    form: {
      name: "Full name",
      company: "Company",
      email: "Work email",
      message: "How can we help?",
      submit: "Send message",
      success: "Thanks — we'll be in touch shortly.",
    },
    detailsTitle: "Company details",
    channelsTitle: "Support channels",
  },
  auth: {
    login: {
      title: "Welcome back",
      subtitle: "Sign in to manage your assets and inspections.",
      email: "Email",
      password: "Password",
      submit: "Sign in",
      forgot: "Forgot password?",
      noAccount: "New to Regatta Registers?",
      signUp: "Start a free trial",
    },
    freeTrial: {
      eyebrow: "Free Trial",
      title: "Get started in minutes",
      subtitle:
        "Spin up your workspace, import existing data, and see compliance tracking work end to end.",
      perks: [
        "No setup costs",
        "Import your existing registers",
        "Full access during the trial",
      ],
      formTitle: "Create your account",
      email: "Work email",
      company: "Company name",
      password: "Password",
      submit: "Start free trial",
      noCard: "No credit card required.",
      haveAccount: "Already have an account?",
      login: "Log in",
    },
  },
};
