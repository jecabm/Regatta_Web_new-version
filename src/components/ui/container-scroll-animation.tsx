"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Scroll-driven 3D card reveal (adapted from Aceternity's ContainerScroll).
 * As the section scrolls into view the framed "screen" rotates flat and
 * scales up. Tokenized to the Regatta Registers palette.
 */
export function ContainerScroll({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Tuned for a top-of-page hero: progress runs 0 → 1 as the section's top
  // travels from the top of the viewport to scrolled fully past it, so the
  // card starts tilted and flattens smoothly as the user scrolls down.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Start smaller and grow toward natural size as the user scrolls in.
  const scaleDimensions = (): [number, number] =>
    isMobile ? [0.7, 0.95] : [0.85, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[52rem] items-start justify-center px-2 pt-24 md:h-[70rem] md:px-20 md:pt-36",
        className
      )}
    >
      <div
        className="relative w-full pb-10 md:pb-20"
        style={{ perspective: "1000px" }}
      >
        <CardTitle translate={translate}>{titleComponent}</CardTitle>
        <CardFrame rotate={rotate} scale={scale}>
          {children}
        </CardFrame>
      </div>
    </div>
  );
}

function CardTitle({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {children}
    </motion.div>
  );
}

function CardFrame({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto mt-10 h-[26rem] w-full max-w-5xl rounded-[30px] border-4 border-ink-700 bg-ink-900 p-2 shadow-2xl md:mt-16 md:h-[36rem] md:p-4"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white">
        {children}
      </div>
    </motion.div>
  );
}
