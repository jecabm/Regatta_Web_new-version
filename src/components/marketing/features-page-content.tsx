"use client";

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
import { useCountry } from "@/hooks/use-country";
import {
  mergeFeaturesClosingCta,
  mergeFeaturesHero,
  mergeFeaturesSections,
  type SanityFeaturesDoc,
} from "@/content/sanity-features";
import type { CountryCode } from "@/config/countries";
import {
  subNavEn,
  subNavEs,
  heroEn,
  heroEs,
  closingCtaEn,
  closingCtaEs,
  sectionsEn,
  sectionsEs,
  type TextSection,
} from "@/content/features-page-copy";

const mockupEn = {
  assetManagement: {
    editCategory: "Edit Category: Lifting Equipment",
    categoryNameLabel: "Category Name*",
    categoryNameValue: "Lifting Equipment",
    descriptionLabel: "Description",
    descriptionValue: "Cranes, hoists and rigging gear",
    templateAttributes: "Template Attributes",
    safeWorkingLoad: "Safe Working Load",
    number: "Number",
  },
  inspection: {
    inspectionProgress: "Inspection Progress",
    checklist: [
      { label: "Vehicle Condition", sub: "0 / 6 Questions" },
      { label: "Crane Structure", sub: "0 / 6 Questions" },
      { label: "Hoisting System", sub: "0 / 6 Questions" },
    ],
    nextStep: "Next Step",
  },
  multiLocations: {
    branchesList: "Branches List",
    branch: "Branch",
    address: "Address",
    contact: "Contact",
  },
  reports: {
    complianceStatus: "Compliance Status",
    exportPdf: "Export PDF",
    total: "Total",
    legend: [
      { label: "Completed", pct: "81%", color: "bg-success" },
      { label: "Scheduled", pct: "13%", color: "bg-info" },
      { label: "Due soon", pct: "6%", color: "bg-brand-500" },
      { label: "Overdue", pct: "1%", color: "bg-danger" },
    ],
  },
  offline: {
    startInspection: "Start Inspection",
    scanQrCode: "Scan QR Code",
    searchPlaceholder: "Search by name, ID…",
    compliant: "Compliant",
    assets: [
      { id: "CRA.MOC-0006", name: "Mobile Crane", location: "Airport" },
      { id: "MHE.PAJ-0003", name: "Pallet Jack 001", location: "Airport" },
    ],
  },
};

const mockupEs = {
  assetManagement: {
    editCategory: "Editar categoría: Equipos de izaje",
    categoryNameLabel: "Nombre de la categoría*",
    categoryNameValue: "Equipos de izaje",
    descriptionLabel: "Descripción",
    descriptionValue: "Grúas, aparejos y equipos de izaje",
    templateAttributes: "Atributos de la plantilla",
    safeWorkingLoad: "Carga de trabajo segura",
    number: "Número",
  },
  inspection: {
    inspectionProgress: "Progreso de la inspección",
    checklist: [
      { label: "Estado del vehículo", sub: "0 / 6 preguntas" },
      { label: "Estructura de la grúa", sub: "0 / 6 preguntas" },
      { label: "Sistema de izaje", sub: "0 / 6 preguntas" },
    ],
    nextStep: "Siguiente paso",
  },
  multiLocations: {
    branchesList: "Lista de sucursales",
    branch: "Sucursal",
    address: "Dirección",
    contact: "Contacto",
  },
  reports: {
    complianceStatus: "Estado de cumplimiento",
    exportPdf: "Exportar PDF",
    total: "Total",
    legend: [
      { label: "Completadas", pct: "81%", color: "bg-success" },
      { label: "Programadas", pct: "13%", color: "bg-info" },
      { label: "Por vencer", pct: "6%", color: "bg-brand-500" },
      { label: "Vencidas", pct: "1%", color: "bg-danger" },
    ],
  },
  offline: {
    startInspection: "Iniciar inspección",
    scanQrCode: "Escanear código QR",
    searchPlaceholder: "Buscar por nombre, ID…",
    compliant: "Conforme",
    assets: [
      { id: "CRA.MOC-0006", name: "Grúa móvil", location: "Aeropuerto" },
      { id: "MHE.PAJ-0003", name: "Transpaleta 001", location: "Aeropuerto" },
    ],
  },
};

const branchRows = [
  { name: "Melbourne HQ", address: "Dockside Rd, VIC", contact: "J. Thompson" },
  { name: "Brisbane Depot", address: "River Tce, QLD", contact: "A. Nguyen" },
  { name: "Perth Yard", address: "Harbour Dr, WA", contact: "S. Clarke" },
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

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "asset-management": Boxes,
  "inspection-management": ClipboardCheck,
  "multi-locations": MapPin,
  reports: BarChart3,
  "mobile-app": Smartphone,
};

const sectionIdToKey = {
  "asset-management": "assetManagement",
  "inspection-management": "inspectionManagement",
  "multi-locations": "multiLocations",
  reports: "reports",
  "mobile-app": "mobileApp",
} as const;

interface FeaturesPageContentProps {
  sanityFeatures?: Partial<Record<CountryCode, SanityFeaturesDoc | null>>;
}

export function FeaturesPageContent({ sanityFeatures }: FeaturesPageContentProps = {}) {
  const { code } = useCountry();
  const isEs = code === "co";
  const override = sanityFeatures?.[code];

  const subNav = isEs ? subNavEs : subNavEn;
  const hero = mergeFeaturesHero(isEs ? heroEs : heroEn, override);
  const closingCta = mergeFeaturesClosingCta(isEs ? closingCtaEs : closingCtaEn, override);
  const mockup = isEs ? mockupEs : mockupEn;

  const baseSections = isEs ? sectionsEs : sectionsEn;
  const mergedSectionCopy = mergeFeaturesSections(
    Object.fromEntries(
      baseSections.map((s) => [sectionIdToKey[s.id as keyof typeof sectionIdToKey], s])
    ) as unknown as Parameters<typeof mergeFeaturesSections>[0],
    override
  );
  const sections: TextSection[] = baseSections.map((s) => ({
    ...s,
    ...mergedSectionCopy[sectionIdToKey[s.id as keyof typeof sectionIdToKey]],
  }));

  const visuals: Record<string, React.ReactNode> = {
    "asset-management": (
      <BrowserFrame url="app.regattaregisters.com/assets/categories">
        <p className="text-sm font-bold text-ink-900">{mockup.assetManagement.editCategory}</p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-ink-500">{mockup.assetManagement.categoryNameLabel}</p>
            <div className="mt-1 h-9 rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-700">
              {mockup.assetManagement.categoryNameValue}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink-500">{mockup.assetManagement.descriptionLabel}</p>
            <div className="mt-1 h-9 rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-400">
              {mockup.assetManagement.descriptionValue}
            </div>
          </div>
          <div className="rounded-lg border border-ink-200 p-3">
            <p className="text-xs font-semibold text-ink-500">{mockup.assetManagement.templateAttributes}</p>
            <div className="mt-2 flex items-center gap-2 border-t border-ink-100 pt-2 text-xs text-ink-500">
              <span className="flex-1 rounded border border-ink-200 bg-white px-2 py-1.5">
                {mockup.assetManagement.safeWorkingLoad}
              </span>
              <span className="rounded border border-ink-200 bg-white px-2 py-1.5">{mockup.assetManagement.number}</span>
            </div>
          </div>
        </div>
      </BrowserFrame>
    ),
    "inspection-management": (
      <PhoneFrame title={isEs ? "Inspección" : "Inspection"}>
        <p className="text-xs text-ink-400">
          {isEs ? "Grúa móvil" : "Mobile Crane"} · CRA.MOC-0006
        </p>
        <div className="mt-3 rounded-lg border border-ink-200 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-ink-700">{mockup.inspection.inspectionProgress}</span>
            <span className="text-brand-600">0%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-ink-100">
            <div className="h-full w-0 rounded-full bg-brand-500" />
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {mockup.inspection.checklist.map((s) => (
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
          {mockup.inspection.nextStep}
        </Button>
      </PhoneFrame>
    ),
    "multi-locations": (
      <BrowserFrame url="app.regattaregisters.com/branches">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-ink-900">{mockup.multiLocations.branchesList}</p>
          <span className="flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold text-white">
            <MapPin className="h-3 w-3" aria-hidden />
            MELBOURNE
          </span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-ink-200">
          <div className="grid grid-cols-3 bg-ink-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            <span>{mockup.multiLocations.branch}</span>
            <span>{mockup.multiLocations.address}</span>
            <span>{mockup.multiLocations.contact}</span>
          </div>
          {branchRows.map((row) => (
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
    reports: (
      <BrowserFrame url="app.regattaregisters.com/reports">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-ink-900">{mockup.reports.complianceStatus}</p>
          <span className="flex items-center gap-1 rounded-md border border-ink-200 px-2.5 py-1 text-[11px] font-semibold text-ink-500">
            <Download className="h-3 w-3" aria-hidden />
            {mockup.reports.exportPdf}
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
              <span className="-mt-1 text-[9px] font-semibold uppercase text-ink-400">{mockup.reports.total}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 text-xs">
            {mockup.reports.legend.map((row) => (
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
    "mobile-app": (
      <PhoneFrame title={mockup.offline.startInspection}>
        <Button size="sm" fullWidth className="gap-1.5">
          <QrCode className="h-4 w-4" aria-hidden />
          {mockup.offline.scanQrCode}
        </Button>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-2.5 py-2 text-xs text-ink-400">
            <Search className="h-3.5 w-3.5" aria-hidden />
            {mockup.offline.searchPlaceholder}
          </div>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-500 text-white">
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {mockup.offline.assets.map((a) => (
            <div key={a.id} className="rounded-lg border border-ink-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-ink-400">ID: {a.id}</span>
                <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">
                  {mockup.offline.compliant}
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
  };

  return (
    <>
      {/* Hero */}
      <section id="overview" className="scroll-mt-32 py-16 sm:py-20 md:py-28">
        <Container size="narrow" className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            {hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#asset-management" size="lg" variant="outline">
              {hero.ctaSecondary}
            </Button>
          </div>
          <p className="mt-6 text-xs text-ink-400">{hero.trust}</p>
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
                <div className="flex w-full flex-1 justify-center">{visuals[section.id]}</div>
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
                  <Button href="/free-trial" variant="outline" className="mt-2 gap-1.5">
                    {section.ctaLabel}
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
            {closingCta.badge}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {closingCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">{closingCta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">
              {closingCta.ctaPrimary}
            </Button>
            <Button
              href="#overview"
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              {closingCta.ctaSecondary}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
