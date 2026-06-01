"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";

/** Conversion-focused signup flow (frontend-only). */
export function FreeTrialContent() {
  const { content } = useCountry();
  const t = content.auth.freeTrial;

  return (
    <div className="grid w-full max-w-4xl gap-10 md:grid-cols-2 md:items-center">
      {/* Value column */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {t.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          {t.subtitle}
        </p>
        <ul className="mt-6 space-y-3">
          {t.perks.map((perk) => (
            <li
              key={perk}
              className="flex items-center gap-3 text-sm text-ink-700"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-success-soft text-success">
                <Check className="h-3.5 w-3.5" />
              </span>
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Signup card */}
      <div className="rounded-xl border border-ink-200 bg-white p-8 shadow-card">
        <h2 className="text-lg font-semibold text-ink-900">{t.formTitle}</h2>
        <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label={t.email}>
            <Input type="email" autoComplete="email" />
          </Field>
          <Field label={t.company}>
            <Input autoComplete="organization" />
          </Field>
          <Field label={t.password}>
            <Input type="password" autoComplete="new-password" />
          </Field>
          <Button type="submit" size="lg" fullWidth>
            {t.submit}
          </Button>
          <p className="text-center text-xs text-ink-400">{t.noCard}</p>
        </form>
        <p className="mt-5 text-center text-sm text-ink-500">
          {t.haveAccount}{" "}
          <Link
            href="/login"
            className="font-semibold text-brand-600 hover:text-brand-700"
          >
            {t.login}
          </Link>
        </p>
      </div>
    </div>
  );
}
