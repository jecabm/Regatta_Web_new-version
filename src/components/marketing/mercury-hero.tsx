"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MercuryDashboard } from "./mercury-dashboard";

export function MercuryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Background image ──────────────────────────────────────────
  // Zooms aggressively into the laptop screen center (50% 38% of image)
  const bgScale = useTransform(scrollYProgress, [0, 0.72], [1, 1.85]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.38, 0.68], [1, 1, 0]);

  // ── Dark overlay — appears as bg fades, completing the canvas ─
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.78],
    [0.4, 0.97],
  );

  // ── Hero text ─────────────────────────────────────────────────
  const textOpacity = useTransform(scrollYProgress, [0, 0.22, 0.38], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.38], [0, -56]);

  // ── Dashboard ─────────────────────────────────────────────────
  // Starts at ~0.42 scale (matches apparent laptop screen size in the zoomed photo)
  // then grows to fill the viewport — illusion of emerging from inside the screen
  const dashOpacity = useTransform(scrollYProgress, [0.38, 0.62], [0, 1]);
  const dashScale = useTransform(scrollYProgress, [0.38, 0.68], [0.42, 1]);

  return (
    // Outer: tall so the sticky inner animates through the scroll range
    <div ref={containerRef} style={{ height: "250vh" }}>
      {/* Sticky viewport-filling container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ── Background photo ── */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            scale: bgScale,
            opacity: bgOpacity,
            transformOrigin: "50% 38%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/laptop-hero.png"
            alt=""
            className="h-full w-full object-cover object-center"
            aria-hidden
          />
        </motion.div>

        {/* ── Progressive dark overlay ── */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background: "#171721",
          }}
        />

        {/* ── Static base overlay — keeps bottom dark from the start ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,23,33,0.55) 0%, transparent 35%, transparent 55%, rgba(23,23,33,0.85) 100%)",
          }}
        />

        {/* ── Hero headline + CTA ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-start px-6 pt-36 text-center font-sans sm:pt-40 md:pt-44"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
            Industrial Asset Management
          </p>

          {/* Display headline */}
          <h1
            className="mx-auto max-w-3xl font-light text-ink-50"
            style={{ fontSize: "clamp(42px, 6vw, 65px)", lineHeight: 1.1, letterSpacing: "0.01em" }}
          >
            Command your assets.{" "}
            <span className="text-brand-500">Always</span> in control.
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-300">
            Real-time compliance, inspection tracking, and asset registers built
            for mining, construction, and heavy industry.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/free-trial"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start free trial
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-6 py-4 text-sm text-ink-50 transition-colors hover:bg-brand-500/20"
            >
              View pricing
            </a>
          </div>

          {/* Scroll nudge */}
          <motion.div
            className="absolute bottom-10 flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-ink-400">
              Scroll
            </span>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path
                d="M6 1v16M1 12l5 5 5-5"
                stroke="var(--color-ink-400)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* ── Dashboard mock — scales up from screen-size, anchored to bottom ── */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex items-end justify-center px-4 pb-0 sm:px-8 md:px-12"
          style={{
            opacity: dashOpacity,
            scale: dashScale,
            transformOrigin: "center bottom",
          }}
        >
          <div
            className="w-full overflow-hidden"
            style={{
              maxWidth: "1100px",
              height: "clamp(280px, 42vh, 520px)",
              borderRadius: "12px 12px 0 0",
              border: "1px solid #272735",
              borderBottom: "none",
              boxShadow:
                "0 -24px 80px rgba(242,133,0,0.10), 0 -8px 32px rgba(0,0,0,0.6)",
            }}
          >
            <MercuryDashboard />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
