"use client";

import { createContext, type ReactNode } from "react";
import type { CountryCode } from "@/config/countries";
import type { SanityAboutDoc } from "@/content/sanity-about";

export const SanityAboutContext = createContext<Partial<Record<CountryCode, SanityAboutDoc | null>>>({});

interface SanityAboutProviderProps {
  value: Partial<Record<CountryCode, SanityAboutDoc | null>>;
  children: ReactNode;
}

/** Supplies Studio-edited About copy (fetched server-side) to `useCountry()` for AU + CO. */
export function SanityAboutProvider({ value, children }: SanityAboutProviderProps) {
  return <SanityAboutContext.Provider value={value}>{children}</SanityAboutContext.Provider>;
}
