"use client";

import { useRef, useEffect } from "react";

export function MercuryHero() {
  const zoneRef      = useRef<HTMLDivElement>(null);
  const landscapeRef = useRef<HTMLDivElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const dashRef      = useRef<HTMLDivElement>(null);
  const hintRef      = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const zone      = zoneRef.current!;
    const landscape = landscapeRef.current!;
    const overlay   = overlayRef.current!;
    const content   = contentRef.current!;
    const dash      = dashRef.current!;
    const hint      = hintRef.current!;
    const video     = videoRef.current!;
    if (!zone || !landscape || !overlay || !content || !dash || !hint || !video) return;

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

      // Video scrub — only the portion where it's visible (p 0 → 0.68)
      if (video.readyState >= 2 && video.duration) {
        const videoPortion = clamp(p / 0.68, 0, 1);
        video.currentTime = videoPortion * video.duration;
      }

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

      // Dashboard: starts large + transparent, scales DOWN to 1× at full opacity
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
    /* ── Scroll zone: 340vh so sticky hero animates through full range ── */
    <div ref={zoneRef} style={{ height: "340vh", position: "relative" }}>

      {/* ── Sticky hero ── */}
      <header style={{
        position: "sticky", top: 0,
        height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        background: "#0e0e0e",
      }}>

        {/* ── Background video (landscape wrap) ── */}
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
            ref={videoRef}
            muted playsInline preload="auto"
            poster="/laptop-hero.png"
            aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          >
            <source src="/hero-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Bottom fade — blends into dashboard */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
          }} />
        </div>

        {/* ── Dark overlay ── */}
        <div ref={overlayRef} style={{
          position: "absolute", inset: 0,
          background: "rgba(10,10,10,0.72)",
          opacity: 0,
          pointerEvents: "none",
          willChange: "opacity",
          zIndex: 4,
        }} />

        {/* ── Hero text content ── */}
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

        {/* ── Scroll hint ── */}
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

        {/* ── Dashboard reveal ── */}
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
          {/* ── Figma Dashboard ── */}
          <div style={{
            background: "#ffffff",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            width: "100%",
            maxWidth: 1150,
            overflow: "hidden",
            boxShadow: "0 -8px 48px rgba(0,0,0,0.25), 0 24px 64px rgba(0,0,0,0.4)",
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            height: "clamp(420px, 68vh, 580px)",
          }}>

            {/* ── Sidebar ── */}
            <div style={{ background: "#fff", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Logo */}
              <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
                {/* RR logo mark */}
                <div style={{ width: 32, height: 32, background: "#f28500", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1 1h7c2.2 0 4 1.8 4 4s-1.8 4-4 4H1V1z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 9l4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 1h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#0f172a", lineHeight: 1 }}>Regatta</div>
                  <div style={{ fontSize: 9, color: "#94a3b8", lineHeight: 1, marginTop: 2 }}>Registers</div>
                </div>
              </div>

              {/* Nav */}
              <div style={{ flex: 1, padding: "10px 0", overflowY: "auto" }}>
                {/* Section: Dashboard */}
                <div style={{ padding: "6px 14px 4px", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Dashboard</div>
                {[
                  { label: "Home", active: true, icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
                  { label: "Calendar", active: false, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                ].map(({ label, active, icon }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", margin: "1px 6px", borderRadius: 6, background: active ? "#fff7ed" : "transparent", cursor: "default" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={active ? "#f28500" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
                    <span style={{ fontSize: 11, color: active ? "#f28500" : "#475569", fontWeight: active ? 600 : 400 }}>{label}</span>
                  </div>
                ))}

                {/* Section: Lifting Equipment */}
                <div style={{ padding: "10px 14px 4px", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Lifting Equipment</div>
                {["Registers", "Test Certificates", "Records", "Visual Inspection", "General"].map(label => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 14px", margin: "1px 6px", borderRadius: 6, cursor: "default" }}>
                    <span style={{ fontSize: 11, color: "#475569" }}>{label}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                ))}

                {/* Section: Asset Management */}
                <div style={{ padding: "10px 14px 4px", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Asset Management</div>
                {["Asset", "General"].map(label => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 14px", margin: "1px 6px", borderRadius: 6, cursor: "default" }}>
                    <span style={{ fontSize: 11, color: "#475569" }}>{label}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                ))}

                {/* Section: Settings */}
                <div style={{ padding: "10px 14px 4px", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Settings</div>
                {["Companies", "Users"].map(label => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 14px", margin: "1px 6px", borderRadius: 6, cursor: "default" }}>
                    <span style={{ fontSize: 11, color: "#475569" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Main content ── */}
            <div style={{ display: "flex", flexDirection: "column", background: "#f8fafc", overflow: "hidden" }}>

              {/* Top bar */}
              <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "8px 20px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                {/* Search */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f1f5f9", borderRadius: 6, padding: "5px 10px", flex: "0 0 160px" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>
                  <span style={{ fontSize: 10, color: "#94a3b8" }}>Search</span>
                </div>
                <span style={{ fontSize: 10, color: "#64748b" }}>FAQ</span>
                <span style={{ fontSize: 10, color: "#64748b" }}>Support</span>
                <div style={{ flex: 1 }} />
                <span style={{ fontSize: 10, color: "#475569" }}>Brisbane – Rocklea</span>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path strokeLinecap="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                </div>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#f28500", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>JB</div>
              </div>

              {/* Scrollable content */}
              <div style={{ flex: 1, overflowY: "auto", padding: "14px 20px", display: "flex", flexDirection: "column", gap: 12 }}>

                {/* Greeting + New Inspection */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Good morning, James 👋</div>
                    <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>Thursday, 11 June 2026 · Brisbane – Rocklea</div>
                  </div>
                  <div style={{ background: "#f28500", color: "#fff", borderRadius: 8, padding: "7px 14px", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <span style={{ fontSize: 14, lineHeight: 1 }}>+</span> New Inspection
                  </div>
                </div>

                {/* Quick actions */}
                <div style={{ display: "flex", gap: 8 }}>
                  {["Add Asset", "Book Equipment", "Generate Report", "Schedule Maintenance"].map(a => (
                    <div key={a} style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 7, padding: "6px 12px", fontSize: 10, color: "#475569", fontWeight: 500, whiteSpace: "nowrap", cursor: "default" }}>{a}</div>
                  ))}
                </div>

                {/* KPI cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                  {[
                    { label: "Total Assets",      value: "248",  sub: "↑ 12 added this month",      accent: "#f28500", border: "#fed7aa" },
                    { label: "Inspections Due",   value: "34",   sub: "8 overdue · action needed",  accent: "#ef4444", border: "#fecaca" },
                    { label: "Compliance Rate",   value: "91%",  sub: "↑ 2% vs last month",         accent: "#22c55e", border: "#bbf7d0" },
                    { label: "Open Bookings",     value: "16",   sub: "Next 7 days scheduled",      accent: "#8b5cf6", border: "#ddd6fe" },
                  ].map(({ label, value, sub, accent, border }) => (
                    <div key={label} style={{ background: "#fff", border: `1px solid #e2e8f0`, borderTop: `3px solid ${border}`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 9, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: accent, letterSpacing: "-0.02em" }}>{value}</div>
                      <div style={{ fontSize: 9, color: "#64748b", marginTop: 3 }}>{sub}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom two columns */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}>

                  {/* Left: tables */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                    {/* Inspections Due */}
                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ padding: "10px 14px 6px", fontSize: 10, fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Inspections Due</div>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
                        <thead>
                          <tr style={{ background: "#f8fafc" }}>
                            {["Asset", "Category", "Due Date", "Status", ""].map(h => (
                              <th key={h} style={{ padding: "5px 10px", textAlign: "left", color: "#94a3b8", fontWeight: 600, fontSize: 9, letterSpacing: "0.04em", borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { asset: "Forklift Toyota 8FBE",  cat: "Forklift",  date: "Today",        status: "Overdue",    sc: ["#fef2f2","#ef4444"] },
                            { asset: "Crane Liebherr LTM",    cat: "Crane",     date: "12 Jun 2026",  status: "Due Today",  sc: ["#fff7ed","#f28500"] },
                            { asset: "Excavator CAT 320",     cat: "Excavator", date: "14 Jun 2026",  status: "Scheduled",  sc: ["#eff6ff","#3b82f6"] },
                            { asset: "Truck Volvo FH16",      cat: "Truck",     date: "15 Jun 2026",  status: "Scheduled",  sc: ["#eff6ff","#3b82f6"] },
                            { asset: "Crane Tadano GR-1000",  cat: "Crane",     date: "18 Jun 2026",  status: "In Progress",sc: ["#f5f3ff","#8b5cf6"] },
                          ].map(({ asset, cat, date, status, sc }) => (
                            <tr key={asset} style={{ borderBottom: "1px solid #f1f5f9" }}>
                              <td style={{ padding: "6px 10px", color: "#0f172a", fontWeight: 500 }}>{asset}</td>
                              <td style={{ padding: "6px 10px", color: "#64748b" }}>{cat}</td>
                              <td style={{ padding: "6px 10px", color: "#64748b" }}>{date}</td>
                              <td style={{ padding: "6px 10px" }}>
                                <span style={{ background: sc[0], color: sc[1], borderRadius: 999, padding: "2px 8px", fontSize: 9, fontWeight: 600 }}>{status}</span>
                              </td>
                              <td style={{ padding: "6px 10px" }}>
                                <span style={{ color: "#64748b", fontSize: 9, fontWeight: 500, border: "1px solid #e2e8f0", borderRadius: 4, padding: "2px 6px" }}>View</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div style={{ padding: "6px 14px", fontSize: 9, color: "#f28500", fontWeight: 600 }}>View all inspections →</div>
                    </div>

                    {/* Recent Bookings */}
                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ padding: "10px 14px 6px", fontSize: 10, fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Recent Bookings</div>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
                        <thead>
                          <tr style={{ background: "#f8fafc" }}>
                            {["Asset", "Booked By", "Date", "Duration", "Status"].map(h => (
                              <th key={h} style={{ padding: "5px 10px", textAlign: "left", color: "#94a3b8", fontWeight: 600, fontSize: 9, letterSpacing: "0.04em", borderBottom: "1px solid #e2e8f0" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { asset: "Forklift Toyota 8FBE", by: "M. Johnson", date: "11 Jun", dur: "4hrs", status: "Active",    sc: ["#f0fdf4","#22c55e"] },
                            { asset: "Crane Liebherr LTM",   by: "S. Williams",date: "11 Jun", dur: "8hrs", status: "Active",    sc: ["#f0fdf4","#22c55e"] },
                            { asset: "Excavator CAT 320",    by: "R. Brown",   date: "12 Jun", dur: "6hrs", status: "Confirmed", sc: ["#eff6ff","#3b82f6"] },
                            { asset: "Truck Volvo FH16",     by: "T. Davis",   date: "13 Jun", dur: "2hrs", status: "Pending",   sc: ["#fff7ed","#f28500"] },
                          ].map(({ asset, by, date, dur, status, sc }) => (
                            <tr key={asset + by} style={{ borderBottom: "1px solid #f1f5f9" }}>
                              <td style={{ padding: "6px 10px", color: "#0f172a", fontWeight: 500 }}>{asset}</td>
                              <td style={{ padding: "6px 10px", color: "#64748b" }}>{by}</td>
                              <td style={{ padding: "6px 10px", color: "#64748b" }}>{date}</td>
                              <td style={{ padding: "6px 10px", color: "#64748b" }}>{dur}</td>
                              <td style={{ padding: "6px 10px" }}>
                                <span style={{ background: sc[0], color: sc[1], borderRadius: 999, padding: "2px 8px", fontSize: 9, fontWeight: 600 }}>{status}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right: Asset Health + Schedule */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                    {/* Asset Health Summary */}
                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "12px 14px" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Asset Status Overview</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", marginTop: 8 }}>Asset Health Summary</div>
                      <div style={{ fontSize: 9, color: "#94a3b8", marginBottom: 10 }}>248 total assets across all categories</div>
                      {[
                        { label: "Operational",    count: 189, pct: 76, color: "#22c55e" },
                        { label: "Attention",       count: 34,  pct: 14, color: "#f28500" },
                        { label: "Out of Service",  count: 16,  pct: 6,  color: "#ef4444" },
                        { label: "Scheduled",       count: 9,   pct: 4,  color: "#8b5cf6" },
                      ].map(({ label, count, pct, color }) => (
                        <div key={label} style={{ marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontSize: 10, color: "#475569" }}>{label}</span>
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#0f172a" }}>{count}</span>
                          </div>
                          <div style={{ height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                            <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
                          </div>
                          <div style={{ fontSize: 8, color: "#94a3b8", marginTop: 1 }}>{pct}%</div>
                        </div>
                      ))}
                    </div>

                    {/* Upcoming Schedule */}
                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "12px 14px", flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Upcoming Schedule</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", marginTop: 6 }}>Next 7 Days</div>
                      <div style={{ fontSize: 9, color: "#94a3b8", marginBottom: 8 }}>Jun 11 – 17, 2026</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {[
                          { day: "Today",  time: "08:00", desc: "Forklift Annual Inspection",      today: true  },
                          { day: "Today",  time: "14:00", desc: "Crane LTM — Booking: M. Johnson", today: true  },
                          { day: "Thu 12", time: "09:00", desc: "Excavator CAT — Scheduled Inspect",today: false },
                          { day: "Fri 13", time: "10:00", desc: "Truck Volvo — Booking: T. Davis",  today: false },
                          { day: "Mon 16", time: "07:30", desc: "Compliance Report Due — Q2 2026",  today: false },
                        ].map(({ day, time, desc, today }) => (
                          <div key={desc} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: today ? "#f28500" : "#cbd5e1", marginTop: 3, flexShrink: 0 }} />
                            <div>
                              <div style={{ fontSize: 9, color: today ? "#f28500" : "#64748b", fontWeight: 600 }}>{day} {time}</div>
                              <div style={{ fontSize: 9, color: "#475569" }}>{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}
