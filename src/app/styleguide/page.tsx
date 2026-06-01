import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Section,
  SectionHeading,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
} from "@/components/ui";
import { Mail, ShieldCheck, Wrench } from "lucide-react";

/**
 * TEMPORARY design-system preview (STEP 2 review only).
 * Remove before STEP 4. Not linked in navigation.
 */
export const metadata = { title: "Style Guide", robots: { index: false } };

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="space-y-1.5">
      <div className={`h-14 rounded-md border border-ink-200 ${className}`} />
      <p className="text-xs text-ink-500">{name}</p>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5 border-t border-ink-200 pt-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Badge variant="brand">Design System</Badge>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900">
            Regatta Registers — Style Guide
          </h1>
          <p className="mt-2 max-w-2xl text-ink-500">
            STEP 2 component preview. Industrial enterprise SaaS · Plus Jakarta
            Sans · orange primary · 8px grid.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-12 px-6 py-12">
        {/* Color tokens — literal classes so Tailwind generates them */}
        <Block title="Brand — Orange (primary action)">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            <Swatch name="brand-50" className="bg-brand-50" />
            <Swatch name="brand-100" className="bg-brand-100" />
            <Swatch name="brand-300" className="bg-brand-300" />
            <Swatch name="brand-500" className="bg-brand-500" />
            <Swatch name="brand-600" className="bg-brand-600" />
            <Swatch name="brand-700" className="bg-brand-700" />
            <Swatch name="brand-900" className="bg-brand-900" />
          </div>
        </Block>

        <Block title="Neutral — Ink (structure)">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            <Swatch name="ink-50" className="bg-ink-50" />
            <Swatch name="ink-100" className="bg-ink-100" />
            <Swatch name="ink-200" className="bg-ink-200" />
            <Swatch name="ink-400" className="bg-ink-400" />
            <Swatch name="ink-600" className="bg-ink-600" />
            <Swatch name="ink-800" className="bg-ink-800" />
            <Swatch name="ink-900" className="bg-ink-900" />
          </div>
        </Block>

        <Block title="Status">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Swatch name="success" className="bg-success" />
            <Swatch name="warning" className="bg-warning" />
            <Swatch name="danger" className="bg-danger" />
          </div>
        </Block>

        {/* Typography */}
        <Block title="Typography">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-ink-900">
              Heading 1 — Asset management
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Heading 2 — Inspections &amp; compliance
            </h2>
            <h3 className="text-xl font-semibold text-ink-900">
              Heading 3 — Section title
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-ink-600">
              Body — Manage your assets, inspections, and compliance in one
              secure place. Reduce admin time and never miss an inspection.
            </p>
            <p className="text-sm text-ink-500">Small / muted supporting text.</p>
          </div>
        </Block>

        {/* Buttons */}
        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button>
              <ShieldCheck className="h-4 w-4" /> With icon
            </Button>
          </div>
        </Block>

        {/* Badges */}
        <Block title="Badges / status">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Compliant</Badge>
            <Badge variant="warning">Due soon</Badge>
            <Badge variant="danger">Overdue</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Block>

        {/* Forms */}
        <Block title="Form controls">
          <div className="grid max-w-xl gap-5">
            <Field label="Work email" hint="We'll never share your email." required>
              <Input type="email" placeholder="you@company.com" leftIcon={<Mail />} />
            </Field>
            <Field label="Password" error="Password must be at least 8 characters">
              <Input type="password" defaultValue="123" />
            </Field>
            <Field label="Industry">
              <Select defaultValue="">
                <option value="" disabled>
                  Select an industry
                </option>
                <option>Mining</option>
                <option>Construction</option>
                <option>Lifting equipment</option>
              </Select>
            </Field>
            <Field label="Message">
              <Textarea placeholder="Tell us about your asset register…" />
            </Field>
            <Checkbox label="I agree to the terms and privacy policy" />
          </div>
        </Block>

        {/* Cards */}
        <Block title="Cards">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Automated Compliance",
                desc: "Stay audit-ready with automated alerts and secure records.",
              },
              {
                icon: Wrench,
                title: "Asset & Fleet Management",
                desc: "Track every asset and inspection in one structured place.",
              },
              {
                icon: Mail,
                title: "Real-Time Visibility",
                desc: "Know the status of every register at a glance.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} interactive>
                <CardHeader>
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-4">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Pro plan</CardTitle>
              <CardDescription>For growing inspection teams.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-ink-900">
                $199<span className="text-base font-normal text-ink-500">/mo</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button fullWidth>Start free trial</Button>
            </CardFooter>
          </Card>
        </Block>

        {/* Section pattern */}
        <Block title="Section + SectionHeading pattern">
          <div className="overflow-hidden rounded-xl border border-ink-200">
            <Section muted spacing="sm">
              <SectionHeading
                eyebrow="Why Regatta Registers"
                title="Built for industrial compliance"
                description="A centralized platform for assets, inspections, and audit-ready records."
              />
            </Section>
          </div>
        </Block>
      </div>
    </main>
  );
}
