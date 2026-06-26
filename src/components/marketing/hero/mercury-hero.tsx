"use client";

import { useRef, useEffect } from "react";
import { MercuryDashboard } from "@/components/marketing/mercury-dashboard";

export function MercuryHero() {
  const zoneRef      = useRef<HTMLDivElement>(null);
  const landscapeRef = useRef<HTMLDivElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const dashRef      = useRef<HTMLDivElement>(null);
  const hintRef      = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const zone      = zoneRef.current!;
    const landscape = landscapeRef.current!;
    const overlay   = overlayRef.current!;
    const content   = contentRef.current!;
    const dash      = dashRef.current!;
    const hint      = hintRef.current!;
    if (!zone || !landscape || !overlay || !content || !dash || !hint) return;

    const clamp    = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const lerp     = (a: number, b: number, t: number) => a + (b - a) * t;
    const mapRange = (v: number, inA: number, inB: number, outA: number, outB: number) => {
      const t = clamp((v - inA) / (inB - inA), 0, 1);
      return lerp(outA, outB, t);
    };
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    let ticking = false;

    function update() {
      ticking = false;
      const maxScroll = zone.offsetHeight - window.innerHeight;
      const p = clamp(window.scrollY / maxScroll, 0, 1);

      // Landscape: gentle zoom out
      const lScale = mapRange(p, 0, 0.80, 1.05, 1.0);
      landscape.style.transform = `scale(${lScale})`;

      // Text: fades out early, drifts up
      const textT = easeOut(clamp((p - 0.08) / (0.35 - 0.08), 0, 1));
      content.style.opacity   = String(1 - textT);
      content.style.transform = `translateY(${-32 * textT}px)`;

      // Scroll hint: gone by p=0.10
      hint.style.opacity = String(mapRange(p, 0, 0.10, 1, 0));

      // Dark overlay: deepens as dashboard rises
      overlay.style.opacity = String(mapRange(p, 0.18, 0.68, 0, 0.92));

      // Dashboard: starts large + transparent, scales DOWN to 1Ã— at full opacity
      const dashT    = easeOut(clamp((p - 0.22) / (0.68 - 0.22), 0, 1));
      let   dScale   = lerp(1.32, 1.0, dashT);
      const dOpacity = clamp(dashT * 1.4, 0, 1);

      // Phase 3: gentle settle
      if (p > 0.82) dScale = mapRange(p, 0.82, 1.0, 1.0, 0.97);

      dash.style.transform = `scale(${dScale})`;
      dash.style.opacity   = String(dOpacity);
    }

    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* â”€â”€ Scroll zone: 340vh so sticky hero animates through full range â”€â”€ */
    <div ref={zoneRef} style={{ height: "340vh", position: "relative" }}>

      {/* â”€â”€ Sticky hero â”€â”€ */}
      <header style={{
        position: "sticky", top: 0,
        height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        background: "#0e0e0e",
      }}>

        {/* â”€â”€ Background video (landscape wrap) â”€â”€ */}
        <div ref={landscapeRef} style={{
          position: "absolute", inset: "-12%",
          transformOrigin: "center center",
          willChange: "transform",
          transform: "scale(1.05)",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(30,30,30,0.65) 0%, rgba(14,14,14,0.80) 100%)",
          }} />
          <video
            autoPlay loop muted playsInline preload="auto"
            poster="/laptop-hero.png"
            aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          >
            <source src="/hero-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Bottom fade â€” blends into dashboard */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
          }} />
        </div>

        {/* â”€â”€ Dark overlay â”€â”€ */}
        <div ref={overlayRef} style={{
          position: "absolute", inset: 0,
          background: "rgba(10,10,10,0.72)",
          opacity: 0,
          pointerEvents: "none",
          willChange: "opacity",
          zIndex: 4,
        }} />

        {/* â”€â”€ Hero text content â”€â”€ */}
        <div ref={contentRef} style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 820,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          willChange: "opacity, transform",
          padding: "0 24px",
        }}>
          <p style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 13,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 28,
            textTransform: "uppercase",
          }}>
            Industrial Asset Management Platform
          </p>

          <h1 style={{
            fontSize: "clamp(44px, 5.5vw, 66px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            marginBottom: 28,
          }}>
            Command your assets.<br />
            <span style={{ color: "var(--color-brand-500, #f28500)" }}>Always</span> in control.
          </h1>

          <p style={{
            fontSize: 18,
            fontWeight: 400,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.6,
            maxWidth: 520,
            marginBottom: 40,
            letterSpacing: "-0.01em",
          }}>
            Real-time compliance, inspection tracking, and asset registers built
            for mining, construction, and heavy industry.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/free-trial" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-brand-500, #f28500)",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 14, fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.18s",
            }}>
              Start free trial
            </a>
            <a href="/pricing" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.10)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.30)",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 14, fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.18s",
            }}>
              View pricing
            </a>
          </div>
        </div>

        {/* â”€â”€ Scroll hint â”€â”€ */}
        <div ref={hintRef} style={{
          position: "absolute", bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.45)",
          fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
          zIndex: 6,
          animation: "scrollPulse 2s ease-in-out infinite",
        }}>
          <style>{`@keyframes scrollPulse { 0%,100%{opacity:.4;transform:translateX(-50%) translateY(0)} 50%{opacity:1;transform:translateX(-50%) translateY(6px)} }`}</style>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={14} height={14}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          Scroll
        </div>

        {/* â”€â”€ Dashboard reveal â”€â”€ */}
        <div ref={dashRef} style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "72px 24px 24px",
          zIndex: 10,
          pointerEvents: "none",
          willChange: "transform, opacity",
          transform: "scale(1.32)",
          transformOrigin: "center center",
          opacity: 0,
        }}>
          {/* â”€â”€ Dashboard â”€â”€ */}
          <div style={{
            position: "relative",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            width: "100%",
            maxWidth: 1150,
            overflow: "hidden",
            boxShadow: "0 -8px 48px rgba(0,0,0,0.25), 0 24px 64px rgba(0,0,0,0.4)",
            height: "clamp(420px, 68vh, 580px)",
          }}>
            <MercuryDashboard />
          </div>
        </div>

      </header>
    </div>
  );
}
