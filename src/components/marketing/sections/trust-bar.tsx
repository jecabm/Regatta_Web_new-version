"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useCountry } from "@/hooks/use-country";

const carouselLogosByCountry = {
  au: [
    { src: "/clients/Australia/Crane-Reliability-logo.png",           alt: "Crane Reliability", className: "h-16" },
    { src: "/clients/Australia/Technical-Inspection-services-logo.png", alt: "Technical Inspection Services", className: "h-16" },
    { src: "/clients/Australia/all-lifting.png",                      alt: "All Lifting", className: "h-10" },
  ],
  co: [
    { src: "/clients/Colombia/Jiw-Soluciones-Logo.png",   alt: "Jiw Soluciones", className: "h-16" },
    { src: "/clients/Colombia/Servi-Dotaciones-logo.png", alt: "Servi Dotaciones", className: "h-16" },
  ],
};

export function TrustBar() {
  const { content, code } = useCountry();
  const { trustBar } = content.home;

  const carouselLogos = carouselLogosByCountry[code] ?? carouselLogosByCountry.au;
  // Two identical sets — translate -50% lands exactly back at the start
  const logos = [...carouselLogos, ...carouselLogos];

  return (
    <section className="border-y border-transparent" style={{ backgroundColor: "#F4F6FA" }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee { animation: marquee 10s linear infinite; }
      `}</style>
      <Container size="wide" className="py-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:gap-8">

          {/* Logo carousel */}
          <div
            className="relative w-full overflow-hidden lg:flex-1"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div className="logo-marquee flex w-max items-center gap-20">
              {logos.map((logo, i) => (
                <div key={i} className="flex shrink-0 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className={`w-auto object-contain opacity-90 grayscale brightness-50 ${logo.className}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Used in row */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-xs font-medium text-ink-400">{trustBar.usedIn}</span>
            {trustBar.industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600"
              >
                {name}
              </span>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
