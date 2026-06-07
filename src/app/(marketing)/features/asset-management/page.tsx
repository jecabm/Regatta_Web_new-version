import type { Metadata } from "next";
import { Boxes, MapPin, FileCheck, BarChart3, History, Bell } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Asset Management",
  description:
    "Track every piece of equipment across your operation — locations, status, service history, and compliance — all in one place.",
};

const features = [
  {
    icon: Boxes,
    title: "Centralised Asset Register",
    description:
      "Every asset in one searchable register. Record make, model, serial number, purchase date, and custom attributes specific to your industry.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description:
      "Know where every asset is at all times. Assign assets to sites, zones, or individual operators and track movement history.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Certification",
    description:
      "Link inspection records, certificates, and compliance docs directly to each asset. Never miss a regulatory deadline.",
  },
  {
    icon: History,
    title: "Full Service History",
    description:
      "Every inspection, repair, and service event is logged chronologically. Audit trails are always available for regulators.",
  },
  {
    icon: BarChart3,
    title: "Utilisation Reports",
    description:
      "Identify underused assets, forecast maintenance windows, and make data-driven decisions about your fleet.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description:
      "Get notified before inspections, certifications, or service intervals fall due — never react to a lapse again.",
  },
];

export default function AssetManagementPage() {
  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Features
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Asset Management
        </h1>
        <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-ink-500">
          A complete register for every piece of equipment you own, lease, or operate —
          with compliance tracking built in from day one.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-trial" size="lg">Start free trial</Button>
          <Button href="/pricing" size="lg" variant="outline">View pricing</Button>
        </div>
      </Section>

      <Section muted size="wide">
        <SectionHeading
          title="Everything you need to manage physical assets"
          description="Built for mining, construction, and industrial operations where compliance isn't optional."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full">
              <CardHeader>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-ink-900">
        <Container className="py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to take control of your assets?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Join hundreds of industrial operators managing compliance with Regatta Registers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/free-trial" size="lg">Start free trial</Button>
            <Button
              href="/contact"
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Talk to sales
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
