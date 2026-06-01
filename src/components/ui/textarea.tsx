"use client";

import * as React from "react";
import { useFieldContext } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, invalid, id, rows = 4, ...props }, ref) {
    const field = useFieldContext();
    const isInvalid = invalid ?? field?.invalid ?? false;

    return (
      <textarea
        ref={ref}
        id={id ?? field?.fieldId}
        rows={rows}
        aria-invalid={isInvalid || undefined}
        aria-describedby={field?.describedBy}
        className={cn(
          "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400",
          "transition-colors focus-visible:outline-none focus-visible:ring-2 resize-y",
          "disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-400",
          isInvalid
            ? "border-danger focus-visible:border-danger focus-visible:ring-danger/20"
            : "border-ink-200 focus-visible:border-brand-500 focus-visible:ring-brand-500/20",
          className
        )}
        {...props}
      />
    );
  }
);
