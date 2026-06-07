"use client";

import Link from "next/link";
import {
  QrCode,
  WifiOff,
  Sliders,
  ShieldCheck,
  Boxes,
  MapPin,
  CalendarCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

const icons = [QrCode, WifiOff, Sliders, ShieldCheck, Boxes, MapPin, CalendarCheck, CheckCircle2, Upload];

export function LiftingEquipmentSection() {
  const { content } = useCountry();
  const { liftingEquipment } = content.home;

  return (
    <section className="bg-ink-900">
      <Container size="wide" className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
            {liftingEquipment.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {liftingEquipment.title}{" "}
            <span className="text-brand-400">{liftingEquipment.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            {liftingEquipment.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liftingEquipment.features.map((feature, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/20 text-brand-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            {liftingEquipment.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/asset-management"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-white"
          >
            {liftingEquipment.ctaSecondary}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
