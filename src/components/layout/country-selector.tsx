"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useCountry } from "@/hooks/use-country";
import type { CountryCode } from "@/config/countries";
import { cn } from "@/lib/utils";

/**
 * Nav-bar country switch. Swaps country → language + currency app-wide.
 * Accessible (listbox semantics, closes on outside-click / Escape) and works
 * on desktop and inside the mobile drawer.
 */
export function CountrySelector({ className }: { className?: string }) {
  const { code, meta, countries, content, setCountry } = useCountry();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: CountryCode) {
    setCountry(next);
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={content.dictionary.selector.label}
        className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 bg-white px-2.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
      >
        <img
          src={`https://flagcdn.com/24x18/${meta.code.toLowerCase()}.png`}
          width={24}
          height={18}
          alt={meta.code}
          className="rounded-none"
        />
        <span className="uppercase">{meta.code}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={content.dictionary.selector.label}
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-lg border border-ink-200 bg-white p-1 shadow-popover"
        >
          {countries.map((country) => {
            const selected = country.code === code;
            return (
              <li key={country.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => choose(country.code)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left text-sm transition-colors",
                    selected
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-100"
                  )}
                >
                  <img
                    src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                    width={24}
                    height={18}
                    alt={country.name}
                    className="rounded-none"
                  />
                  <span className="flex-1">
                    <span className="block font-medium">{country.name}</span>
                    <span className="block text-xs text-ink-400">
                      {country.language} · {country.currency}
                    </span>
                  </span>
                  {selected && <Check className="h-4 w-4 text-brand-600" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
