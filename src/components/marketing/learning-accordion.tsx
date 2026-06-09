"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

import type { PortableTextBlock } from "@portabletext/types";

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
      const isGif = url.endsWith(".gif");
      return (
        <figure className="my-4">
          <div className="overflow-hidden rounded-lg border border-ink-200 bg-ink-900">
            {isGif ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt={value.caption ?? ""} className="w-full" />
            ) : (
              <video
                src={url}
                controls
                playsInline
                className="w-full"
              />
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
    <div className="w-full overflow-hidden divide-y divide-ink-200 rounded-xl border border-ink-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item._id;
        return (
          <div key={item._id} className="min-w-0">
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
                  <div className="prose prose-sm prose-slate max-w-none overflow-x-hidden prose-a:text-brand-600 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_li]:text-ink-600">
                    <PortableText value={item.answer} components={portableTextComponents} />
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
