"use client";

import { createContext, type ReactNode } from "react";
import type { CountryCode } from "@/config/countries";
import type { SanityContactDoc } from "@/content/sanity-contact";

export const SanityContactContext = createContext<Partial<Record<CountryCode, SanityContactDoc | null>>>({});

interface SanityContactProviderProps {
  value: Partial<Record<CountryCode, SanityContactDoc | null>>;
  children: ReactNode;
}

/** Supplies Studio-edited Contact copy (fetched server-side) to `useCountry()` for AU + CO. */
export function SanityContactProvider({ value, children }: SanityContactProviderProps) {
  return <SanityContactContext.Provider value={value}>{children}</SanityContactContext.Provider>;
}
