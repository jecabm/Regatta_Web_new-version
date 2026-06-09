import type { Metadata } from "next";
import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Bell,
  CheckCircle2,
  ArrowRight,
  Phone,
  CalendarCheck,
  Award,
  Clock,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { client } from "@/sanity/lib/client";
import { featuredTestimonialsQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Lifting Equipment Inspections | Regatta Registers",
  description:
    "Certified lifting equipment inspections for cranes, hoists, rigging, and more. Stay compliant with AS 4991 & AS 2550. Digital reports delivered same day.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const equipmentTypes = [
  { title: "Overhead & Gantry Cranes", description: "Full structural, mechanical, and electrical assessment to AS 2550." },
  { title: "Chain & Wire Rope Hoists", description: "Load testing, brake inspection, hook and chain wear analysis." },
  { title: "Rigging Equipment", description: "Slings, shackles, hooks, swivels, rings, and below-the-hook devices." },
  { title: "Lifting Beams & Spreaders", description: "Structural integrity checks and SWL verification for beam assemblies." },
  { title: "Forklift Attachments", description: "Compliance inspections for side-shifters, clamps, and custom attachments." },
  { title: "Mobile & Tower Cranes", description: "Pre-operational inspections and ongoing compliance assessments." },
];

const steps = [
  {
    number: "01",
    title: "Book online or call us",
    description: "Tell us your equipment list and site location. We'll schedule a certified inspector for a time that suits your operation.",
  },
  {
    number: "02",
    title: "On-site inspection",
    description: "Our inspector arrives on time, assesses every item against the relevant Australian Standard, and captures findings digitally.",
  },
  {
    number: "03",
    title: "Same-day digital report",
    description: "Receive a detailed inspection report with pass/fail status, defect photos, and recommended actions — straight to your inbox.",
  },
  {
    number: "04",
    title: "Stay compliant automatically",
    description: "Regatta Registers tracks re-inspection due dates and sends automated reminders so nothing slips through the cracks.",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Certified inspectors",
    description: "All inspectors hold current certifications under AS 4991 and relevant Australian Standards.",
  },
  {
    icon: Clock,
    title: "Same-day reports",
    description: "Digital inspection reports delivered the same day — no waiting weeks for paperwork.",
  },
  {
    icon: FileText,
    title: "Audit-ready records",
    description: "Every inspection is stored securely in the cloud. Pull records instantly for audits or insurance.",
  },
  {
    icon: Bell,
    title: "Automated reminders",
    description: "Never miss a re-inspection. We track due dates and alert you before compliance lapses.",
  },
];

const stats = [
  { value: "500+", label: "Inspections completed" },
  { value: "100%", label: "AS 4991 compliant" },
  { value: "Same day", label: "Digital reports" },
  { value: "24 hr", label: "Booking turnaround" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Testimonial = {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  company?: string;
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function InspectionsLandingPage() {
  const testimonials = (await client.fetch(featuredTestimonialsQuery)) as Testimonial[];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ink-900">
        <Container size="wide" className="py-12 sm:py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
              Lifting Equipment Inspections
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Stay compliant.{" "}
              <span className="text-brand-400">Stay safe.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg md:text-xl">
              Certified inspections for cranes, hoists, rigging, and all lifting equipment —
              fully compliant with AS&nbsp;4991 and AS&nbsp;2550. Digital reports delivered the same day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book an Inspection
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                See Pricing
              </Button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-400">
              <Phone className="h-4 w-4 shrink-0" />
              Prefer to talk? Call us and we&apos;ll get you booked in today.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-ink-100 bg-white">
        <Container size="wide" className="py-10">
          <dl className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-ink-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Why compliance matters ── */}
      <Section size="wide">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why it matters"
              title="Non-compliant lifting equipment puts lives — and your business — at risk"
              description="Under Australian WHS legislation, you have a duty of care to ensure all lifting equipment is inspected and maintained in accordance with the relevant standards. Failure to comply can result in serious injury, equipment failure, costly shutdowns, and significant legal liability."
            />
            <ul className="mt-8 space-y-3">
              {[
                "AS 4991 requires periodic inspection of all lifting equipment",
                "Defective equipment must be tagged out of service immediately",
                "Inspection records must be retained and available for audit",
                "Liability falls on the person conducting the business (PCBU)",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Safety first", body: "Protect your workers from preventable lifting equipment failures." },
              { icon: ClipboardCheck, title: "Legal compliance", body: "Meet your WHS obligations and avoid enforcement action." },
              { icon: FileText, title: "Insurance protection", body: "Valid inspection records are essential for insurance claims." },
              { icon: CalendarCheck, title: "No surprises", body: "Proactive scheduling keeps equipment in service and your team productive." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-ink-100 bg-ink-50 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-ink-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── What we inspect ── */}
      <section className="bg-ink-900">
        <Container size="wide" className="py-12 sm:py-20 md:py-24">
          <SectionHeading
            eyebrow="Equipment we inspect"
            title="All lifting equipment. One platform."
            description="From single hoists to full crane fleets, our inspectors cover the complete range of lifting equipment used across mining, construction, and industrial operations."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">
              Book an Inspection
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ── How it works ── */}
      <Section muted size="wide">
        <SectionHeading
          eyebrow="How it works"
          title="From booking to report in 4 simple steps"
          description="We've made the inspection process as straightforward as possible so you can stay focused on running your operation."
        />
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-brand-100">{step.number}</span>
              <h3 className="mt-3 text-base font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Benefits ── */}
      <Section size="wide">
        <SectionHeading
          eyebrow="Why Regatta Registers"
          title="The smarter way to manage lifting equipment compliance"
        />
        <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-ink-100 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      {testimonials.length > 0 && (
        <Section muted size="wide">
          <SectionHeading
            eyebrow="What our customers say"
            title="Trusted by industrial operators across Australia"
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t._id} className="flex flex-col rounded-xl border border-ink-100 bg-white p-6">
                <Quote className="h-6 w-6 text-brand-300" aria-hidden />
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-700">{t.quote}</p>
                <div className="mt-6 border-t border-ink-100 pt-4">
                  <p className="text-sm font-semibold text-ink-900">{t.authorName}</p>
                  {(t.authorRole || t.company) && (
                    <p className="text-xs text-ink-500">
                      {[t.authorRole, t.company].filter(Boolean).join(", ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Final CTA ── */}
      <section className="bg-brand-500">
        <Container size="wide" className="py-12 text-center sm:py-16 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Ready to get your equipment inspected?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Book online in minutes or call us to speak with a certified inspector. Same-week appointments available.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-brand-600 hover:bg-brand-50"
            >
              Book an Inspection
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/free-trial"
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              Start Free Trial
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
