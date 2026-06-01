"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  LifeBuoy,
  Globe2,
} from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

export function ContactContent() {
  const { content } = useCountry();
  const c = content.contactPage;
  const details = content.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true); // frontend-only stub
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {c.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            {c.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-card sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-success-soft text-success">
                  <CheckCircle2 className="h-6 w-6" />
                </span>
                <p className="text-lg font-semibold text-ink-900">
                  {c.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={c.form.name} required>
                    <Input required autoComplete="name" />
                  </Field>
                  <Field label={c.form.company}>
                    <Input autoComplete="organization" />
                  </Field>
                </div>
                <Field label={c.form.email} required>
                  <Input
                    type="email"
                    required
                    autoComplete="email"
                    leftIcon={<Mail />}
                  />
                </Field>
                <Field label={c.form.message} required>
                  <Textarea required rows={5} />
                </Field>
                <Button type="submit" size="lg" fullWidth>
                  {c.form.submit}
                </Button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
                {c.detailsTitle}
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-ink-700">{details.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-ink-700">{details.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <a
                    href={`mailto:${details.email}`}
                    className="text-ink-700 hover:text-brand-600"
                  >
                    {details.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
                {c.channelsTitle}
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <a
                    href={`mailto:${details.email}`}
                    className="text-ink-700 hover:text-brand-600"
                  >
                    {details.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-ink-700">{details.region}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
