import type { Metadata } from "next";
import {
  Boxes,
  ClipboardCheck,
  MapPin,
  BarChart3,
  Smartphone,
  Check,
  Search,
  QrCode,
  SlidersHorizontal,
  Download,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Centralise your asset register, digitise inspections, and stay audit-ready across every site — one platform for construction, mining, transport and plant hire teams.",
};

const subNav = [
  { href: "#overview", label: "Overview" },
  { href: "#asset-management", label: "Asset Management" },
  { href: "#inspection-management", label: "Inspection Management" },
  { href: "#multi-locations", label: "Multi Locations" },
  { href: "#reports", label: "Reports" },
  { href: "#mobile-app", label: "Offline Inspections" },
];

/** Small "browser window" chrome used to frame desktop mockups. */
function BrowserFrame({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-elevated",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink-400 ring-1 ring-inset ring-ink-100">
          {url}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

/** Small "phone" chrome used to frame mobile mockups. */
function PhoneFrame({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border-8 border-ink-900 bg-white shadow-elevated",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 pb-1 pt-2 text-[11px] font-semibold text-ink-900">
        <span>9:41</span>
        <span className="h-1.5 w-14 rounded-full bg-ink-900" />
        <span>●●●</span>
      </div>
      <div className="px-4 pb-5">
        <p className="mb-3 text-sm font-bold text-ink-900">{title}</p>
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-800">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type FeatureSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  reverse?: boolean;
  visual: React.ReactNode;
};

const sections: FeatureSection[] = [
  {
    id: "asset-management",
    eyebrow: "Asset Management",
    title: "Organise every asset from one central platform.",
    description:
      "Create, manage and monitor your equipment throughout its entire lifecycle. Keep inspection records, maintenance history and compliance status organised in a single, always-current register.",
    bullets: [
      "Centralised asset register across every site",
      "Custom inspection & maintenance templates",
      "Full asset history and audit trail",
      "Automatic compliance and renewal tracking",
      "Multi-site visibility from one dashboard",
    ],
    cta: { label: "Explore Asset Management", href: "/free-trial" },
    visual: (
      <BrowserFrame url="app.regattaregisters.com/assets/categories">
        <p className="text-sm font-bold text-ink-900">Edit Category: Lifting Equipment</p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-ink-500">Category Name*</p>
            <div className="mt-1 h-9 rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-700">
              Lifting Equipment
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink-500">Description</p>
            <div className="mt-1 h-9 rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-400">
              Cranes, hoists and rigging gear
            </div>
          </div>
          <div className="rounded-lg border border-ink-200 p-3">
            <p className="text-xs font-semibold text-ink-500">Template Attributes</p>
            <div className="mt-2 flex items-center gap-2 border-t border-ink-100 pt-2 text-xs text-ink-500">
              <span className="flex-1 rounded border border-ink-200 bg-white px-2 py-1.5">
                Safe Working Load
              </span>
              <span className="rounded border border-ink-200 bg-white px-2 py-1.5">Number</span>
            </div>
          </div>
        </div>
      </BrowserFrame>
    ),
  },
  {
    id: "inspection-management",
    eyebrow: "Inspection Management",
    title: "Digitise every inspection, from pre-start to sign-off.",
    description:
      "Replace paper checklists with structured digital forms tailored to each asset type. Capture evidence on the spot and get an instant, auditable record every time.",
    bullets: [
      "Daily, monthly and annual inspection scheduling",
      "Digital checklists tailored to equipment type",
      "Photo evidence attached to every record",
      "Instant pass, fail or flag outcomes",
      "Automatic reminders before due dates",
      "Fully digital, paperless records",
    ],
    cta: { label: "Explore Inspections", href: "/free-trial" },
    reverse: true,
    visual: (
      <PhoneFrame title="Inspection">
        <p className="text-xs text-ink-400">Mobile Crane · CRA.MOC-0006</p>
        <div className="mt-3 rounded-lg border border-ink-200 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-ink-700">Inspection Progress</span>
            <span className="text-brand-600">0%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-ink-100">
            <div className="h-full w-0 rounded-full bg-brand-500" />
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {[
            { label: "Vehicle Condition", sub: "0 / 6 Questions" },
            { label: "Crane Structure", sub: "0 / 6 Questions" },
            { label: "Hoisting System", sub: "0 / 6 Questions" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-lg border border-ink-100 bg-ink-50 px-3 py-2.5"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-brand-200 bg-white text-[10px] font-bold text-brand-600">
                0%
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-ink-900">{s.label}</p>
                <p className="text-[11px] text-ink-400">{s.sub}</p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-ink-300" aria-hidden />
            </div>
          ))}
        </div>
        <Button size="sm" fullWidth className="mt-3">
          Next Step
        </Button>
      </PhoneFrame>
    ),
  },
  {
    id: "multi-locations",
    eyebrow: "Multi Locations",
    title: "Manage every site from one platform.",
    description:
      "One platform to manage compliance across every site in your operation — from a single depot to a national enterprise fleet.",
    bullets: [
      "Switch between sites in seconds",
      "Consolidated compliance view across all locations",
      "Location-specific asset and inspection records",
      "Centralised reporting across your whole fleet",
      "Scales from a single depot to national operations",
    ],
    cta: { label: "Explore Multi Locations", href: "/free-trial" },
    visual: (
      <BrowserFrame url="app.regattaregisters.com/branches">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-ink-900">Branches List</p>
          <span className="flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold text-white">
            <MapPin className="h-3 w-3" aria-hidden />
            MELBOURNE
          </span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-ink-200">
          <div className="grid grid-cols-3 bg-ink-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            <span>Branch</span>
            <span>Address</span>
            <span>Contact</span>
          </div>
          {[
            { name: "Melbourne HQ", address: "Dockside Rd, VIC", contact: "J. Thompson" },
            { name: "Brisbane Depot", address: "River Tce, QLD", contact: "A. Nguyen" },
            { name: "Perth Yard", address: "Harbour Dr, WA", contact: "S. Clarke" },
          ].map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-3 border-t border-ink-100 px-3 py-2.5 text-xs text-ink-700"
            >
              <span className="font-semibold">{row.name}</span>
              <span className="text-ink-500">{row.address}</span>
              <span className="text-ink-500">{row.contact}</span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    ),
  },
  {
    id: "reports",
    eyebrow: "Reports",
    title: "Turn inspection data into audit-ready reporting.",
    description:
      "Real-time dashboards surface compliance status across sites, while exportable reports give clients, auditors and regulators the evidence they need — without the spreadsheet chase.",
    bullets: [
      "Real-time compliance dashboards",
      "Exportable reports for audits and clients",
      "Inspection trends across sites and teams",
      "Overdue and upcoming inspection alerts",
      "Custom report templates",
    ],
    cta: { label: "Explore Reports", href: "/free-trial" },
    reverse: true,
    visual: (
      <BrowserFrame url="app.regattaregisters.com/reports">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-ink-900">Compliance Status</p>
          <span className="flex items-center gap-1 rounded-md border border-ink-200 px-2.5 py-1 text-[11px] font-semibold text-ink-500">
            <Download className="h-3 w-3" aria-hidden />
            Export PDF
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-6 rounded-lg border border-ink-200 p-4">
          <div
            className="grid h-24 w-24 shrink-0 place-items-center rounded-full"
            style={{
              background:
                "conic-gradient(var(--color-success) 0% 81%, var(--color-info) 81% 94%, var(--color-brand-500) 94% 99%, var(--color-danger) 99% 100%)",
            }}
          >
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center">
              <span className="text-lg font-extrabold text-ink-900">507</span>
              <span className="-mt-1 text-[9px] font-semibold uppercase text-ink-400">Total</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 text-xs">
            {[
              { label: "Completed", pct: "81%", color: "bg-success" },
              { label: "Scheduled", pct: "13%", color: "bg-info" },
              { label: "Due soon", pct: "6%", color: "bg-brand-500" },
              { label: "Overdue", pct: "1%", color: "bg-danger" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <span className={cn("h-2 w-2 rounded-full", row.color)} />
                <span className="text-ink-600">{row.label}</span>
                <span className="font-semibold text-ink-900">{row.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    ),
  },
  {
    id: "mobile-app",
    eyebrow: "Offline Inspections",
    title: "Built for the field, not just the office.",
    description:
      "Complete inspections from a job site, warehouse floor or mine pit — online or off. Designed for gloved hands, bright sunlight and patchy signal, with everything syncing automatically once you're back online.",
    bullets: [
      "Complete inspections online or offline",
      "Capture photos and notes on site",
      "Scan QR and barcode tags from your phone",
      "Syncs automatically when back online",
      "Built for gloved hands and outdoor conditions",
    ],
    cta: { label: "Explore Offline Inspections", href: "/free-trial" },
    visual: (
      <PhoneFrame title="Start Inspection">
        <Button size="sm" fullWidth className="gap-1.5">
          <QrCode className="h-4 w-4" aria-hidden />
          Scan QR Code
        </Button>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-2.5 py-2 text-xs text-ink-400">
            <Search className="h-3.5 w-3.5" aria-hidden />
            Search by name, ID…
          </div>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-500 text-white">
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {[
            { id: "CRA.MOC-0006", name: "Mobile Crane", location: "Airport" },
            { id: "MHE.PAJ-0003", name: "Pallet Jack 001", location: "Airport" },
          ].map((a) => (
            <div key={a.id} className="rounded-lg border border-ink-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-ink-400">ID: {a.id}</span>
                <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">
                  Compliant
                </span>
              </div>
              <p className="mt-1 text-sm font-extrabold text-ink-900">{a.name}</p>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-ink-400">
                <MapPin className="h-3 w-3" aria-hidden />
                {a.location}
              </div>
            </div>
          ))}
        </div>
      </PhoneFrame>
    ),
  },
];

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "asset-management": Boxes,
  "inspection-management": ClipboardCheck,
  "multi-locations": MapPin,
  reports: BarChart3,
  "mobile-app": Smartphone,
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section id="overview" className="scroll-mt-32 py-16 sm:py-20 md:py-28">
        <Container size="narrow" className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            Asset Management &amp; Inspection Platform
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
            Powerful tools to simplify asset management.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            Centralise your asset register, digitise inspections, and stay audit-ready across
            every site — one platform for construction, mining, transport and plant hire teams.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">
              Book a Demo
            </Button>
            <Button href="#asset-management" size="lg" variant="outline">
              View Features
            </Button>
          </div>
          <p className="mt-6 text-xs text-ink-400">
            Trusted by inspection and compliance teams across Australian construction, mining and
            logistics sites.
          </p>
        </Container>
      </section>

      {/* Sticky sub-nav */}
      <div className="sticky top-18 z-40 border-y border-ink-100 bg-white/90 py-3 backdrop-blur">
        <Container>
          <nav
            aria-label="Feature sections"
            className="flex justify-center gap-2 overflow-x-auto scrollbar-none"
          >
            {subNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap rounded-full border border-ink-200 px-3.5 py-1.5 text-sm font-semibold text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Feature sections */}
      {sections.map((section, i) => {
        const Icon = sectionIcons[section.id];
        return (
          <section
            key={section.id}
            id={section.id}
            className={cn("scroll-mt-32 py-16 sm:py-20 md:py-28", i % 2 === 1 && "bg-ink-50")}
          >
            <Container size="wide">
              <div
                className={cn(
                  "flex flex-col items-center gap-10 md:gap-16 lg:flex-row",
                  section.reverse && "lg:flex-row-reverse"
                )}
              >
                <div className="flex w-full flex-1 justify-center">{section.visual}</div>
                <div className="flex w-full flex-1 flex-col items-start gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
                    <Icon className="h-4 w-4" aria-hidden />
                    {section.eyebrow}
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-base leading-relaxed text-ink-600">{section.description}</p>
                  <BulletList items={section.bullets} />
                  <Button href={section.cta.href} variant="outline" className="mt-2 gap-1.5">
                    {section.cta.label}
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container size="narrow" className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-300">
            Get Started
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See it in action for your fleet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Book a personalised walkthrough with our team and find out how Regatta Registers can
            simplify compliance across every site.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">
              Book a Demo
            </Button>
            <Button
              href="#overview"
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              View Features
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
