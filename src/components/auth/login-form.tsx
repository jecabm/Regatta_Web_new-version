"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/use-country";

/** Authentication UI (frontend-only). */
export function LoginForm() {
  const { content } = useCountry();
  const t = content.auth.login;

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-ink-200 bg-white p-8 shadow-card">
        <h1 className="text-2xl font-bold tracking-tight text-ink-900">
          {t.title}
        </h1>
        <p className="mt-1.5 text-sm text-ink-500">{t.subtitle}</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label={t.email}>
            <Input
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              leftIcon={<Mail />}
            />
          </Field>
          <Field label={t.password}>
            <Input
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </Field>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {t.forgot}
            </button>
          </div>
          <Button type="submit" size="lg" fullWidth>
            {t.submit}
          </Button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-ink-500">
        {t.noAccount}{" "}
        <Link
          href="/free-trial"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          {t.signUp}
        </Link>
      </p>
    </div>
  );
}
