"use client";

import { useState, useCallback } from "react";
import {
  Search, X, ChevronDown, ThumbsUp, ThumbsDown, Heart,
  MessagesSquare, LayoutGrid, Rocket, Building2, ClipboardList,
  ClipboardCheck, Database, Shield, CreditCard,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import type { PortableTextBlock } from "@portabletext/types";

/* ── PortableText renderers (images + videos from Sanity) ─────────── */
const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-4">
        <div className="overflow-hidden rounded-lg border border-ink-200">
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt ?? ""}
            width={900}
            height={600}
            className="w-full object-contain"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-2 text-center text-xs text-ink-400">{value.caption}</figcaption>
        )}
      </figure>
    ),
    videoFile: ({ value }: { value: { file?: { asset?: { url?: string } }; caption?: string } }) => {
      const url = value.file?.asset?.url;
      if (!url) return null;
      const isGif = url.toLowerCase().endsWith(".gif");
      return (
        <figure className="my-4">
          <div className="overflow-hidden rounded-lg border border-ink-200 bg-ink-900">
            {isGif ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt={value.caption ?? ""} className="w-full" />
            ) : (
              <video src={url} controls playsInline className="w-full" />
            )}
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-ink-400">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

/* ── Types ─────────────────────────────────────────────────────────── */
type FaqItem = {
  _id: string;
  question: string;
  answer?: PortableTextBlock[];
  category?: string;
  order?: number;
};

/* ── Category config ────────────────────────────────────────────────── */
const CATEGORY_CONFIG: Record<string, { label: string; Icon: React.ElementType }> = {
  "getting-started": { label: "Getting Started",       Icon: Rocket },
  "create-company":  { label: "Company",               Icon: Building2 },
  registers:         { label: "Registers",             Icon: ClipboardList },
  inspections:       { label: "Inspections",           Icon: ClipboardCheck },
  "asset-register":  { label: "Asset Register",        Icon: Database },
  compliance:        { label: "Compliance & Reporting", Icon: Shield },
  account:           { label: "Account & Billing",     Icon: CreditCard },
};

/* ── Search highlight ───────────────────────────────────────────────── */
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-brand-100 text-brand-800 rounded px-0.5 font-inherit">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  );
}

/* ── Was this helpful? ──────────────────────────────────────────────── */
function HelpfulVote() {
  const [vote, setVote] = useState<"y" | "n" | null>(null);
  return (
    <div className="flex items-center gap-3 border-t border-dashed border-ink-200 pt-3 mt-1">
      {vote === null ? (
        <>
          <span className="text-sm text-ink-500 font-medium">Was this helpful?</span>
          <button
            onClick={() => setVote("y")}
            className="inline-flex items-center gap-1.5 h-8 px-3 border border-ink-300 rounded-lg text-sm font-semibold text-ink-500 bg-white hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          >
            <ThumbsUp className="h-3.5 w-3.5" /> Yes
          </button>
          <button
            onClick={() => setVote("n")}
            className="inline-flex items-center gap-1.5 h-8 px-3 border border-ink-300 rounded-lg text-sm font-semibold text-ink-500 bg-white hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          >
            <ThumbsDown className="h-3.5 w-3.5" /> No
          </button>
        </>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-sm text-ink-500 font-medium">
          <Heart className="h-3.5 w-3.5 text-brand-500" />
          {vote === "y" ? "Thanks for your feedback!" : "Thanks — we'll keep improving this answer."}
        </span>
      )}
    </div>
  );
}

/* ── Single accordion card ──────────────────────────────────────────── */
function FaqCard({
  item,
  open,
  onToggle,
  query,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  query: string;
}) {
  return (
    <div
      className={cn(
        "bg-white border rounded-xl overflow-hidden transition-all duration-200",
        open ? "border-brand-500 shadow-sm" : "border-ink-200 hover:border-ink-300"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 text-left px-6 py-5"
      >
        <span className="flex-1 text-base font-semibold leading-snug text-ink-900">
          <Highlight text={item.question} query={query} />
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200",
            open ? "rotate-180 text-brand-500" : "text-ink-400"
          )}
        />
      </button>

      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-[1800px]" : "max-h-0")}>
        <div className="px-6 pb-6 flex flex-col gap-4">
          {item.answer && (
            <div className="prose prose-sm prose-slate max-w-none overflow-x-hidden prose-a:text-brand-600 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_li]:text-ink-600">
              <PortableText value={item.answer} components={portableTextComponents} />
            </div>
          )}
          <HelpfulVote />
        </div>
      </div>
    </div>
  );
}

/* ── Main exported component ────────────────────────────────────────── */
export function LearningFaq({ items }: { items: FaqItem[] }) {
  const [query, setQuery]     = useState("");
  const [cat, setCat]         = useState("all");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();

  const filtered = items.filter((item) => {
    if (cat !== "all" && item.category !== cat) return false;
    if (!q) return true;
    return item.question.toLowerCase().includes(q);
  });

  /* When searching with few results, auto-open them — computed, no effect needed */
  const effectiveOpenIds = q && filtered.length <= 6
    ? new Set(filtered.map((f) => f._id))
    : openIds;

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  /* Build sidebar entries from the categories that actually have items */
  const usedCats = [...new Set(items.map((i) => i.category).filter(Boolean))] as string[];
  const counts: Record<string, number> = { all: items.length };
  usedCats.forEach((c) => { counts[c] = items.filter((i) => i.category === c).length; });

  const sidebarCats = [
    { id: "all", label: "All topics", Icon: LayoutGrid },
    ...usedCats.filter((c) => CATEGORY_CONFIG[c]).map((c) => ({ id: c, ...CATEGORY_CONFIG[c] })),
  ];

  const activeCatLabel = sidebarCats.find((c) => c.id === cat)?.label ?? "";

  return (
    <div>
      {/* Search bar */}
      <div className="flex items-center gap-3 bg-white border-[1.5px] border-ink-200 rounded-full px-5 h-14 max-w-[560px] mb-8 shadow-sm focus-within:border-brand-500 transition-colors">
        <Search className="h-5 w-5 text-ink-400 shrink-0" />
        <input
          className="flex-1 border-0 outline-none bg-transparent text-base text-ink-900 placeholder:text-ink-400"
          placeholder="Search for answers…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink-100 text-ink-500 hover:bg-ink-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[248px_1fr] gap-7 items-start">

        {/* ── Sidebar (vertical on desktop, horizontal pills on mobile) ── */}
        <aside className="lg:sticky lg:top-24">
          <p className="hidden lg:block text-xs font-bold uppercase tracking-widest text-ink-400 px-3 pb-2">
            Topics
          </p>

          {/* Mobile: horizontal wrapping pills */}
          <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0.5">
            {sidebarCats.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => { setCat(id); setOpenIds(new Set()); }}
                className={cn(
                  "flex items-center gap-2 text-left text-sm font-medium rounded-lg transition-colors",
                  "px-3 py-2 lg:px-3 lg:py-2.5 lg:w-full",
                  cat === id
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-ink-500 hover:bg-ink-100 hover:text-ink-900"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 whitespace-nowrap">{label}</span>
                <span
                  className={cn(
                    "text-xs tabular-nums rounded-full min-w-[22px] text-center px-1.5 py-px border",
                    cat === id
                      ? "bg-white border-brand-300 text-brand-700"
                      : "bg-ink-50 border-ink-200 text-ink-400"
                  )}
                >
                  {counts[id] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* ── Articles column ── */}
        <div className="min-w-0">
          <div className="flex items-center justify-between mb-4 text-sm text-ink-400 font-medium">
            <span>
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              {cat !== "all" ? ` in ${activeCatLabel.toLowerCase()}` : ""}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center gap-3 bg-white border border-dashed border-ink-200 rounded-xl">
              <Search className="h-8 w-8 text-ink-300" />
              <p className="font-semibold text-ink-900">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-sm text-ink-500">Try a different term, or browse a topic on the left.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((item) => (
                <FaqCard
                  key={item._id}
                  item={item}
                  open={effectiveOpenIds.has(item._id)}
                  onToggle={() => toggle(item._id)}
                  query={q}
                />
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 p-5 bg-white border border-ink-200 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-brand-50 inline-flex items-center justify-center shrink-0">
              <MessagesSquare className="h-5 w-5 text-brand-500" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-ink-900">Still need a hand?</p>
              <p className="text-sm text-ink-500">Our team typically replies within a few hours.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors whitespace-nowrap"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
