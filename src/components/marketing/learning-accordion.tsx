"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";

import type { PortableTextBlock } from "@portabletext/types";

type Item = {
  _id: string;
  question: string;
  answer?: PortableTextBlock[];
  videoUrl?: string;
  category?: string;
};

export function LearningAccordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-ink-200 rounded-xl border border-ink-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item._id;
        return (
          <div key={item._id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item._id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-ink-900">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-ink-400 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                {item.videoUrl && (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center gap-2 rounded-lg bg-brand-50 px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch video walkthrough
                  </a>
                )}
                {item.answer && (
                  <div className="prose prose-sm prose-slate max-w-none prose-a:text-brand-600">
                    <PortableText value={item.answer} />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
