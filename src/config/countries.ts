/**
 * Country registry — the single place to register supported countries.
 * Add a new country here + a matching folder in src/content/countries/<code>/
 * and register it in src/content/countries/index.ts. Nothing else to change.
 */

export type CountryCode = "au" | "co";

export interface CountryMeta {
  code: CountryCode;
  /** Display name shown in the selector. */
  name: string;
  /** Emoji flag. */
  flag: string;
  /** Human-readable language label. */
  language: string;
  /** BCP-47 locale used for number/currency formatting + <html lang>. */
  locale: string;
  /** ISO 4217 currency code. */
  currency: string;
}

export const COUNTRIES: CountryMeta[] = [
  {
    code: "au",
    name: "Australia",
    flag: "🇦🇺",
    language: "English",
    locale: "en-AU",
    currency: "AUD",
  },
  {
    code: "co",
    name: "Colombia",
    flag: "🇨🇴",
    language: "Español",
    locale: "es-CO",
    currency: "COP",
  },
];

export const DEFAULT_COUNTRY: CountryCode = "au";

export function isCountryCode(value: string): value is CountryCode {
  return COUNTRIES.some((c) => c.code === value);
}

export function getCountryMeta(code: CountryCode): CountryMeta {
  return COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0];
}
