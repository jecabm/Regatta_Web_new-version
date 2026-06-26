import Image from "next/image";
import { HeroDashboardMock } from "./hero-dashboard-mock";

/**
 * Laptop hero image with dashboard content overlaid on the screen.
 * Screen overlay uses id="laptop-screen" for future animation targeting.
 * Adjust the inset percentages if the overlay needs fine-tuning.
 */
export function HeroLaptopMock() {
  return (
    <div className="relative mx-auto w-full max-w-2xl select-none">
      {/* Soft glow behind the laptop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-8 -z-10 h-3/4 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.28) 0%, rgba(242,133,0,0.10) 50%, transparent 75%)",
          filter: "blur(32px)",
        }}
      />

      {/* Laptop image + screen overlay wrapper */}
      <div className="relative" style={{ aspectRatio: "510 / 855" }}>
        {/* The laptop photo */}
        <Image
          src="/laptop-hero.png"
          alt="Regatta Registers running on a laptop"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 672px"
        />

        {/* Dashboard content overlaid on the black screen area.
            Percentages measured from the image dimensions (510 × 855).
            Tweak left/top/right/bottom if the overlay needs nudging. */}
        <div
          id="laptop-screen"
          className="absolute overflow-hidden rounded-sm"
          style={{
            left: "7.5%",
            top: "2.2%",
            right: "7.5%",
            bottom: "36%",
          }}
        >
          {/* Slight dark tint so the dashboard reads on top of the screen glare */}
          <div className="absolute inset-0 z-10 bg-[#080b12]/10" aria-hidden />
          <HeroDashboardMock />
        </div>
      </div>
    </div>
  );
}
