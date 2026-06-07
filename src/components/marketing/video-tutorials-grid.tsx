"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type VideoTutorial = {
  _id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnail?: { asset: { _ref: string }; alt?: string };
  duration?: string;
  category?: string;
};

function getEmbedUrl(url: string): string {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

function getThumbnailUrl(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
  return null;
}

function VideoCard({ video }: { video: VideoTutorial }) {
  const embedUrl = getEmbedUrl(video.videoUrl);
  const autoThumb = getThumbnailUrl(video.videoUrl);
  const sanityThumb = video.thumbnail?.asset
    ? urlFor(video.thumbnail).width(640).height(360).fit("crop").url()
    : null;
  const thumbSrc = sanityThumb ?? autoThumb;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-shadow hover:shadow-elevated">
      {/* Video embed / thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-ink-100">
        {thumbSrc ? (
          <>
            <Image
              src={thumbSrc}
              alt={video.thumbnail?.alt ?? video.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized={!!autoThumb}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink-900/30 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 shadow-elevated">
                <Play className="h-6 w-6 translate-x-0.5 text-white" fill="white" />
              </span>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <Play className="h-10 w-10 text-ink-300" />
          </div>
        )}
        {video.duration && (
          <span className="absolute bottom-2 right-2 rounded bg-ink-900/80 px-1.5 py-0.5 text-xs font-medium text-white">
            {video.duration}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold leading-snug text-ink-900 group-hover:text-brand-600 transition-colors">
          {video.title}
        </p>
        {video.description && (
          <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">
            {video.description}
          </p>
        )}
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          )}
        >
          <Play className="h-3.5 w-3.5" />
          Watch tutorial
        </a>
      </div>
    </div>
  );
}

export function VideoTutorialsGrid({ videos }: { videos: VideoTutorial[] }) {
  if (!videos.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}
