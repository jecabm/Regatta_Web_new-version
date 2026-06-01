"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  COUNTRIES,
  DEFAULT_COUNTRY,
  getCountryMeta,
  isCountryCode,
  type CountryCode,
} from "@/config/countries";
import { getCountryContent } from "@/content/countries";

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

  return {
    code,
    meta: getCountryMeta(code),
    content: getCountryContent(code),
    countries: COUNTRIES,
    setCountry: select,
  };
}
