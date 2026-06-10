"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useCountry } from "@/hooks/use-country";

/** Cinematic dark-hero heading — staggered page-load animations. */
export function HeroHeading() {
  const { content } = useCountry();
  const { hero, actions } = content.dictionary;

  return (
    <div className="mx-auto max-w-3xl px-2 pb-4 text-center sm:px-4">
      {/* Badge */}
      <div
        className="animate-fade-slide-up inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400"
        style={{ animationDelay: "0ms" }}
      >
        {hero.badge}
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-slide-up mt-6 text-4xl font-extrabold leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animationDelay: "100ms" }}
      >
        {hero.titleLead}{" "}
        <span className="relative inline-block text-brand-400">
          {hero.titleHighlight}
          {/* underline glow accent */}
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(242,133,0,0.6) 50%, transparent)",
            }}
          />
        </span>{" "}
        {hero.titleTrail}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-slide-up mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base lg:text-lg"
        style={{ animationDelay: "220ms" }}
      >
        {hero.subtitle}
      </p>

      {/* CTA buttons */}
      <div
        className="animate-fade-slide-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        style={{ animationDelay: "340ms" }}
      >
        {/* Primary — solid brand */}
        <Link
          href="/free-trial"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-500/40 sm:w-auto"
        >
          {actions.startFreeTrial}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
        {/* Secondary — glass */}
        <Link
          href="/pricing"
          className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:w-auto"
        >
          {actions.viewPricing}
        </Link>
      </div>

      {/* Price callout — glassmorphic tile */}
      <div
        className="animate-fade-slide-up mt-4 flex justify-center"
        style={{ animationDelay: "440ms" }}
      >
        <Link
          href="/pricing"
          className="flex w-full max-w-72 flex-col items-center rounded-xl border border-white/10 bg-white/6 px-5 py-3.5 text-center backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            Get started today
          </span>
          <span className="mt-0.5 text-3xl font-bold text-white">$49/month</span>
        </Link>
      </div>

      {/* Trust signals */}
      <div
        className="animate-fade-slide-up mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        style={{ animationDelay: "540ms" }}
      >
        {hero.trustSignals.map((s) => (
          <span key={s} className="flex items-center gap-1.5 text-xs text-ink-400 sm:text-sm">
            <Check className="h-3.5 w-3.5 text-success" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
