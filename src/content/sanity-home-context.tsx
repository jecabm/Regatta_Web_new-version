"use client";

import { createContext, type ReactNode } from "react";
import type { CountryCode } from "@/config/countries";
import type { SanityHomeDoc } from "@/content/sanity-home";

export const SanityHomeContext = createContext<Partial<Record<CountryCode, SanityHomeDoc | null>>>({});

interface SanityHomeProviderProps {
  value: Partial<Record<CountryCode, SanityHomeDoc | null>>;
  children: ReactNode;
}

/** Supplies Studio-edited homepage copy (fetched server-side) to `useCountry()` for AU + CO. */
export function SanityHomeProvider({ value, children }: SanityHomeProviderProps) {
  return <SanityHomeContext.Provider value={value}>{children}</SanityHomeContext.Provider>;
}
