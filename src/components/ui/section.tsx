import * as React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Soft muted background to separate alternating sections. */
  muted?: boolean;
  /** Container width track. */
  size?: "default" | "narrow" | "wide";
  /** Vertical padding rhythm. */
  spacing?: "sm" | "md" | "lg";
};

const spacingMap = {
  sm: "py-8 sm:py-12 md:py-16",
  md: "py-12 sm:py-16 md:py-20",
  lg: "py-16 sm:py-20 md:py-28",
} as const;

/** Page section: consistent vertical rhythm + centered content track. */
export function Section({
  muted,
  size = "default",
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingMap[spacing], muted && "bg-ink-50", className)}
      {...props}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Standard eyebrow → title → description heading block for sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
