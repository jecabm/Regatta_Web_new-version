"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { useFieldContext } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

/** Native select, styled to match the design system with a custom chevron. */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className, invalid, id, children, ...props }, ref) {
    const field = useFieldContext();
    const isInvalid = invalid ?? field?.invalid ?? false;

    return (
      <div className="relative">
        <select
          ref={ref}
          id={id ?? field?.fieldId}
          aria-invalid={isInvalid || undefined}
          aria-describedby={field?.describedBy}
          className={cn(
            "h-11 w-full appearance-none rounded-md border bg-white pl-3.5 pr-10 text-sm text-ink-900",
            "transition-colors focus-visible:outline-none focus-visible:ring-2",
            "disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-400",
            isInvalid
              ? "border-danger focus-visible:border-danger focus-visible:ring-danger/20"
              : "border-ink-200 focus-visible:border-brand-500 focus-visible:ring-brand-500/20",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute inset-y-0 right-3 my-auto h-4 w-4 text-ink-400"
          aria-hidden
        />
      </div>
    );
  }
);
