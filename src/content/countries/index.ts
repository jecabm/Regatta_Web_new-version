import type { CountryCode } from "@/config/countries";
import type { CountryContent } from "./types";
import { auContent } from "./au";
import { coContent } from "./co";

/** Registry mapping a country code to its localized content. */
const CONTENT: Record<CountryCode, CountryContent> = {
  au: auContent,
  co: coContent,
};

export function getCountryContent(code: CountryCode): CountryContent {
  return CONTENT[code] ?? CONTENT.au;
}

export type { CountryContent } from "./types";
