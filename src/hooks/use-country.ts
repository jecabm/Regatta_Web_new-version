"use client";

import { useCallback, useContext, useSyncExternalStore } from "react";
import {
  COUNTRIES,
  DEFAULT_COUNTRY,
  getCountryMeta,
  isCountryCode,
  type CountryCode,
} from "@/config/countries";
import { getCountryContent } from "@/content/countries";
import { SanityHomeContext } from "@/content/sanity-home-context";
import { mergeHomeContent } from "@/content/sanity-home";
import { SanityPricingContext } from "@/content/sanity-pricing-context";
import { mergePricingContent } from "@/content/sanity-pricing";
import { SanityAboutContext } from "@/content/sanity-about-context";
import { mergeAboutContent } from "@/content/sanity-about";
import { SanityContactContext } from "@/content/sanity-contact-context";
import { mergeContactContent } from "@/content/sanity-contact";

const STORAGE_KEY = "rr-country";

/**
 * Module-level store so the selected country persists across client-side
 * navigation without a context provider, and survives reloads via
 * localStorage. SSR/first paint always uses DEFAULT_COUNTRY (see
 * getServerSnapshot) so hydration is consistent; a returning user's stored
 * choice is applied right after hydration.
 */
let currentCode: CountryCode = DEFAULT_COUNTRY;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isCountryCode(stored)) currentCode = stored;
  } catch {
    // localStorage may be unavailable (private mode) — fall back to default.
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): CountryCode {
  return currentCode;
}

function getServerSnapshot(): CountryCode {
  return DEFAULT_COUNTRY;
}

/** Switch the active country app-wide and persist the choice. */
export function setCountry(code: CountryCode) {
  if (code === currentCode) return;
  currentCode = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // ignore persistence failures
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = getCountryMeta(code).locale;
  }
  listeners.forEach((listener) => listener());
}

/** Read the active country, its metadata, and its localized content. */
export function useCountry() {
  const code = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const select = useCallback((next: CountryCode) => setCountry(next), []);
  const homeOverrides = useContext(SanityHomeContext);
  const pricingOverrides = useContext(SanityPricingContext);
  const aboutOverrides = useContext(SanityAboutContext);
  const contactOverrides = useContext(SanityContactContext);

  let merged = mergePricingContent(
    mergeHomeContent(getCountryContent(code), homeOverrides[code]),
    pricingOverrides[code]
  );
  merged.about = mergeAboutContent(merged.about, aboutOverrides[code]);
  merged = mergeContactContent(merged, contactOverrides[code]);

  return {
    code,
    meta: getCountryMeta(code),
    content: merged,
    countries: COUNTRIES,
    setCountry: select,
  };
}
