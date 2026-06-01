/**
 * Format a price for a given locale + ISO currency (no decimals).
 * AUD → "$49"   ·   COP → "$129.000"
 */
export function formatCurrency(
  amount: number,
  locale: string,
  currency: string
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
