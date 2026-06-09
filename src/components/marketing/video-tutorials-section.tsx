"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, ArrowLeft, Clock, ChevronRight } from "lucide-react";

type VideoTutorial = {
  _id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnail?: { asset?: { url?: string }; alt?: string };
  duration?: string;
  startTime?: number;
  endTime?: number;
  category?: string;
  order?: number;
  featured?: boolean;
};

const CATEGORY_LABELS: Record<string, string> = {
  "getting-started": "Getting Started",
  "create-company": "Company Setup",
  registers: "Registers",
  inspections: "Inspections & Maintenance",
  "asset-register": "Asset Register",
  compliance: "Compliance & Reporting",
  account: "Account & Billing",
  other: "Other",
};

function isMp4(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url) || url.includes("cdn.shopify.com/videos");
}

// ── HTML5 video player for direct MP4/video files ─────────────────────────────

function Mp4Player({
  url,
  title,
  startTime,
  endTime,
}: {
  url: string;
  title: string;
  startTime?: number;
  endTime?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  // Seek to startTime and enforce endTime cap on every track change
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleLoaded = () => {
      if (startTime != null) el.currentTime = startTime;
      el.play().catch(() => undefined);
    };

    const handleTimeUpdate = () => {
      if (endTime != null && el.currentTime >= endTime) {
        el.pause();
      }
    };

    el.addEventListener("loadedmetadata", handleLoaded);
    el.addEventListener("timeupdate", handleTimeUpdate);

    // If already loaded (same src, track changed), seek immediately
    if (el.readyState >= 1) {
      if (startTime != null) el.currentTime = startTime;
      el.play().catch(() => undefined);
    }

    return () => {
      el.removeEventListener("loadedmetadata", handleLoaded);
      el.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [url, startTime, endTime]);

  return (
    <video
      ref={ref}
      src={url}
      title={title}
      controls
      playsInline
      className="absolute inset-0 h-full w-full bg-ink-900"
    />
  );
}

function getEmbedUrl(url: string, startTime?: number, endTime?: number): string {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    const params = new URLSearchParams({ autoplay: "1", rel: "0" });
    if (startTime != null) params.set("start", String(Math.round(startTime)));
    if (endTime != null) params.set("end", String(Math.round(endTime)));
    return `https://www.youtube.com/embed/${ytMatch[1]}?${params}`;
  }
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    const params = new URLSearchParams({ autoplay: "1" });
    if (startTime != null) params.set("t", String(Math.round(startTime)));
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?${params}`;
  }
  return url;
}

function getYtThumbnail(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
  return null;
}

function thumbSrc(video: VideoTutorial): string | null {
  return video.thumbnail?.asset?.url ?? getYtThumbnail(video.videoUrl);
}

// ── Library view ─────────────────────────────────────────────────────────────

function LibraryView({
  videos,
  onWatch,
}: {
  videos: VideoTutorial[];
  onWatch: (id: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(videos.map((v) => v.category ?? "other"))),
  ];

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => (v.category ?? "other") === activeCategory);

  return (
    <div>
      {/* Category filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              activeCategory === cat
                ? "bg-brand-500 text-white"
                : "border border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:bg-ink-50",
            ].join(" ")}
          >
            {cat === "all"
              ? "All tutorials"
              : (CATEGORY_LABELS[cat] ?? cat)}
          </button>
        ))}
      </div>

      {/* Video cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => {
          const thumb = thumbSrc(video);
          const isYtThumb = !video.thumbnail?.asset?.url;
          return (
            <div
              key={video._id}
              className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Thumbnail */}
              <button
                className="relative aspect-video w-full overflow-hidden bg-ink-100"
                onClick={() => onWatch(video._id)}
                aria-label={`Play ${video.title}`}
              >
                {thumb ? (
                  <Image
                    src={thumb}
                    alt={video.thumbnail?.alt ?? video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized={isYtThumb}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Play className="h-10 w-10 text-ink-300" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-ink-900/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 shadow-lg">
                    <Play className="h-5 w-5 translate-x-0.5 text-white" fill="white" />
                  </span>
                </div>
                {video.duration && (
                  <span className="absolute bottom-2 right-2 rounded bg-ink-900/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                )}
                {video.category && (
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-ink-700">
                    {CATEGORY_LABELS[video.category] ?? video.category}
                  </span>
                )}
              </button>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold leading-snug text-ink-900 transition-colors group-hover:text-brand-600">
                  {video.title}
                </p>
                {video.description && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">
                    {video.description}
                  </p>
                )}
                <button
                  onClick={() => onWatch(video._id)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch tutorial
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Course view (Option A: featured player + sidebar playlist) ────────────────

function CourseView({
  videos,
  activeId,
  onSelect,
  onBack,
}: {
  videos: VideoTutorial[];
  activeId: string;
  onSelect: (id: string) => void;
  onBack: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  const active = videos.find((v) => v._id === activeId) ?? videos[0];
  const thumb = thumbSrc(active);
  const isYtThumb = !active.thumbnail?.asset?.url;
  const mp4 = isMp4(active.videoUrl);

  const handleSelect = useCallback((id: string) => {
    onSelect(id);
    // For MP4 the Mp4Player remounts and seeks automatically; for iframes we reset the poster
    if (!mp4) setPlaying(false);
  }, [onSelect, mp4]);

  return (
    <div>
      {/* Breadcrumb */}
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
      >
        <ArrowLeft className="h-4 w-4" />
        All tutorials
      </button>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* ── Left: featured player ── */}
        <div className="min-w-0 flex-1">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink-900">
            {/* MP4 — always mounted, seeks on track change */}
            {mp4 ? (
              playing ? (
                <Mp4Player
                  key={activeId}
                  url={active.videoUrl}
                  title={active.title}
                  startTime={active.startTime}
                  endTime={active.endTime}
                />
              ) : (
                <>
                  {thumb && (
                    <Image src={thumb} alt={active.title} fill className="object-cover" unoptimized={isYtThumb} priority />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40">
                    <button
                      onClick={() => setPlaying(true)}
                      className="grid h-16 w-16 place-items-center rounded-full bg-brand-500 shadow-xl transition-transform hover:scale-105 active:scale-95"
                      aria-label="Play tutorial"
                    >
                      <Play className="h-7 w-7 translate-x-0.5 text-white" fill="white" />
                    </button>
                  </div>
                  {active.duration && (
                    <span className="absolute bottom-3 right-3 rounded bg-ink-900/80 px-2 py-1 text-xs font-medium text-white">
                      {active.duration}
                    </span>
                  )}
                </>
              )
            ) : /* YouTube / Vimeo iframe */ playing ? (
              <iframe
                src={getEmbedUrl(active.videoUrl, active.startTime, active.endTime)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <>
                {thumb && (
                  <Image src={thumb} alt={active.title} fill className="object-cover" unoptimized={isYtThumb} priority />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40">
                  <button
                    onClick={() => setPlaying(true)}
                    className="grid h-16 w-16 place-items-center rounded-full bg-brand-500 shadow-xl transition-transform hover:scale-105 active:scale-95"
                    aria-label="Play tutorial"
                  >
                    <Play className="h-7 w-7 translate-x-0.5 text-white" fill="white" />
                  </button>
                </div>
                {active.duration && (
                  <span className="absolute bottom-3 right-3 rounded bg-ink-900/80 px-2 py-1 text-xs font-medium text-white">
                    {active.duration}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Lesson meta below player */}
          <div className="mt-5">
            {active.category && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {CATEGORY_LABELS[active.category] ?? active.category}
              </p>
            )}
            <h3 className="text-xl font-bold tracking-tight text-ink-900">
              {active.title}
            </h3>
            {active.description && (
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {active.description}
              </p>
            )}
          </div>
        </div>

        {/* ── Right: playlist rail ── */}
        {videos.length > 1 && (
          <div className="w-full lg:w-80 xl:w-96">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
              {active.category
                ? (CATEGORY_LABELS[active.category] ?? active.category)
                : "More tutorials"}
              <span className="ml-2 text-ink-300">
                {videos.length} {videos.length === 1 ? "lesson" : "lessons"}
              </span>
            </h4>
            <div className="overflow-hidden rounded-xl border border-ink-200 bg-white">
              {videos.map((video) => {
                const isActive = video._id === activeId;
                const t = thumbSrc(video);
                const ytThumb = !video.thumbnail?.asset?.url;
                return (
                  <button
                    key={video._id}
                    onClick={() => handleSelect(video._id)}
                    className={[
                      "flex w-full items-start gap-3 border-b border-ink-100 p-3 text-left transition-colors last:border-b-0",
                      isActive
                        ? "border-l-2 border-l-brand-500 bg-brand-50 pl-2.5"
                        : "hover:bg-ink-50",
                    ].join(" ")}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md bg-ink-100">
                      {t && (
                        <Image
                          src={t}
                          alt={video.title}
                          fill
                          className="object-cover"
                          unoptimized={ytThumb}
                        />
                      )}
                      <div
                        className={[
                          "absolute inset-0 flex items-center justify-center",
                          isActive ? "bg-brand-500/70" : "bg-ink-900/20",
                        ].join(" ")}
                      >
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={[
                          "line-clamp-2 text-xs font-semibold leading-snug",
                          isActive ? "text-brand-700" : "text-ink-800",
                        ].join(" ")}
                      >
                        {video.title}
                      </p>
                      {video.duration && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-ink-400">
                          <Clock className="h-3 w-3" />
                          {video.duration}
                        </p>
                      )}
                    </div>

                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Public export ─────────────────────────────────────────────────────────────

export function VideoTutorialsSection({ videos }: { videos: VideoTutorial[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (!videos.length) return null;

  if (activeId) {
    const active = videos.find((v) => v._id === activeId);
    if (!active) {
      return (
        <LibraryView videos={videos} onWatch={(id) => setActiveId(id)} />
      );
    }
    const categoryVideos = videos.filter(
      (v) => (v.category ?? "other") === (active.category ?? "other")
    );
    return (
      <CourseView
        videos={categoryVideos}
        activeId={activeId}
        onSelect={(id) => setActiveId(id)}
        onBack={() => setActiveId(null)}
      />
    );
  }

  return <LibraryView videos={videos} onWatch={(id) => setActiveId(id)} />;
}
