import type { Metadata } from "next";
import { MapPin, Building2, SlidersHorizontal, Users, BarChart3, Lock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Multi Locations",
  description:
    "Manage assets and compliance across multiple sites from a single dashboard — built for enterprise and multi-site operators.",
};

const features = [
  {
    icon: Building2,
    title: "Multiple Sites",
    description:
      "Add unlimited sites, depots, or project locations. Each site has its own asset list, team, and compliance calendar.",
  },
  {
    icon: MapPin,
    title: "Location-Based Views",
    description:
      "Filter your entire register by location in one click. See what assets are at each site and their current status.",
  },
  {
    icon: SlidersHorizontal,
    title: "Centralised Control",
    description:
      "Head-office admins see everything across all sites while site managers see only what's relevant to them.",
  },
  {
    icon: Users,
    title: "Site-Level Teams",
    description:
      "Assign users to one or more locations. Permissions and notifications are scoped to the sites each user manages.",
  },
  {
    icon: BarChart3,
    title: "Cross-Site Reporting",
    description:
      "Compare compliance rates, overdue items, and asset utilisation across all your locations in one report.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description:
      "Control who can view, edit, or approve records at each site. Keep sensitive data visible only to the right people.",
  },
];

export default function MultiLocationsPage() {
  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Features
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Multi Locations
        </h1>
        <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-ink-500">
          One platform to manage compliance across every site in your operation —
          from a single depot to a national enterprise fleet.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-trial" size="lg">Start free trial</Button>
          <Button href="/pricing" size="lg" variant="outline">View pricing</Button>
        </div>
      </Section>

      <Section muted size="wide">
        <SectionHeading
          title="Built for operators who run multiple sites"
          description="Whether you have two locations or twenty, Regatta scales without extra complexity."
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
            Managing multiple sites just got simpler
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            One login. Every location. Full compliance visibility.
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
