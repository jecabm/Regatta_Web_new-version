import type { Metadata } from "next";
import { ClipboardCheck, Smartphone, AlertTriangle, FileText, RefreshCw, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Prestart Checklist",
  description:
    "Digital prestart checklists for plant, vehicles, and equipment. Capture faults before they become incidents — on any device, anywhere.",
};

const features = [
  {
    icon: ClipboardCheck,
    title: "Digital Checklists",
    description:
      "Replace paper prestart books with digital checklists tailored to each asset type. Operators complete them on any device.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Works on phones and tablets in the field. No app install required — operators access checklists through the browser.",
  },
  {
    icon: AlertTriangle,
    title: "Fault Flagging",
    description:
      "Operators flag faults during the prestart. Failed items automatically generate a defect record and notify supervisors.",
  },
  {
    icon: FileText,
    title: "Custom Templates",
    description:
      "Build checklist templates for cranes, excavators, trucks, or any other equipment type. Add your own questions and categories.",
  },
  {
    icon: RefreshCw,
    title: "Daily Compliance",
    description:
      "Ensure every piece of plant is checked before use each day. Track completion rates and identify gaps in your compliance program.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Trail",
    description:
      "Every completed checklist is timestamped, signed, and stored permanently. Provide evidence of due diligence at any time.",
  },
];

export default function PrestartChecklistPage() {
  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Features
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Prestart Checklist
        </h1>
        <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-ink-500">
          Digital prestart checks that operators actually complete — faults captured in
          real time, defects logged automatically, and a permanent audit trail.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-trial" size="lg">Start free trial</Button>
          <Button href="/pricing" size="lg" variant="outline">View pricing</Button>
        </div>
      </Section>

      <Section muted size="wide">
        <SectionHeading
          title="Prestart compliance made simple"
          description="Catch faults before they cause incidents. Replace paper books with digital records that are instant, searchable, and audit-ready."
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
            Go paperless — starting today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Set up your first digital prestart checklist in under 10 minutes.
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
