import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** Surface container. `interactive` adds a hover lift for clickable cards. */
export function Card({
  className,
  interactive,
  ...props
}: DivProps & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink-200 bg-white shadow-card",
        interactive &&
          "transition-shadow transition-colors hover:border-ink-300 hover:shadow-elevated",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-ink-900", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-1.5 text-sm leading-relaxed text-ink-500", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-t border-ink-200 px-6 py-4",
        className
      )}
      {...props}
    />
  );
}
