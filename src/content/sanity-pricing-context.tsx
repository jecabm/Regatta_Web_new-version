"use client";

import { createContext, type ReactNode } from "react";
import type { CountryCode } from "@/config/countries";
import type { SanityPricingDoc } from "@/content/sanity-pricing";

export const SanityPricingContext = createContext<Partial<Record<CountryCode, SanityPricingDoc | null>>>({});

interface SanityPricingProviderProps {
  value: Partial<Record<CountryCode, SanityPricingDoc | null>>;
  children: ReactNode;
}

/** Supplies Studio-edited pricing copy (fetched server-side) to `useCountry()` for AU + CO. */
export function SanityPricingProvider({ value, children }: SanityPricingProviderProps) {
  return <SanityPricingContext.Provider value={value}>{children}</SanityPricingContext.Provider>;
}
