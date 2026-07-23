/** Sanity value wins only when present and non-empty; otherwise the static fallback is kept. */
export function pick<T>(sanityValue: T | undefined | null, fallback: T): T {
  if (sanityValue === undefined || sanityValue === null) return fallback;
  if (typeof sanityValue === "string" && sanityValue.trim() === "") return fallback;
  if (Array.isArray(sanityValue) && sanityValue.length === 0) return fallback;
  return sanityValue;
}
