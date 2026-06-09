import { cn } from "@/lib/utils";

type VideoBackgroundProps = {
  src: string;
  /** Tailwind bg overlay — defaults to a dark semi-transparent layer */
  overlay?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Section wrapper that plays a looping muted video behind its children.
 * Children sit above the video via relative z-10.
 */
export function VideoBackground({
  src,
  overlay = "bg-ink-900/65",
  className,
  children,
}: VideoBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background video */}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for contrast */}
      <div className={cn("absolute inset-0", overlay)} />

      {/* Content above the video */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
