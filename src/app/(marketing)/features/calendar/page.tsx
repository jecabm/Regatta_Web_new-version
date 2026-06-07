import type { Metadata } from "next";
import { CalendarDays, Bell, Users, RefreshCw, ClipboardList, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Never miss an inspection, service, or compliance deadline. Regatta's calendar keeps your entire operation on schedule.",
};

const features = [
  {
    icon: CalendarDays,
    title: "Compliance Calendar",
    description:
      "A unified view of every upcoming inspection, certification renewal, and service event across all your assets and sites.",
  },
  {
    icon: Bell,
    title: "Advance Notifications",
    description:
      "Automated email and in-app alerts days or weeks before a deadline so your team has time to prepare.",
  },
  {
    icon: Users,
    title: "Team Scheduling",
    description:
      "Assign inspections to specific team members or contractors. Everyone sees what's due and who is responsible.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Events",
    description:
      "Set recurring schedules for regular maintenance cycles. The calendar auto-generates the next due date after each completion.",
  },
  {
    icon: ClipboardList,
    title: "Linked to Asset Records",
    description:
      "Every calendar event is linked directly to the asset record. Complete an event and the asset history updates automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready History",
    description:
      "A permanent log of completed, missed, and rescheduled events — exactly what regulators need to see.",
  },
];

export default function CalendarPage() {
  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Features
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Calendar
        </h1>
        <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-ink-500">
          One calendar for every inspection, certification, and service event across your
          entire fleet — so nothing falls through the cracks.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-trial" size="lg">Start free trial</Button>
          <Button href="/pricing" size="lg" variant="outline">View pricing</Button>
        </div>
      </Section>

      <Section muted size="wide">
        <SectionHeading
          title="Stay ahead of every deadline"
          description="Proactive scheduling keeps your team compliant and your assets operational."
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
            Never miss a compliance deadline again
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Set it up once — Regatta keeps the schedule running automatically.
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
