"use client";

import * as React from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  /** Inline label shown to the right of the box. */
  label?: React.ReactNode;
};

/** Accessible checkbox with an optional inline label. */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className, label, id, ...props }, ref) {
    const generatedId = useId();
    const checkboxId = id ?? `checkbox-${generatedId}`;

    const input = (
      <input
        ref={ref}
        id={checkboxId}
        type="checkbox"
        className={cn(
          "h-4 w-4 shrink-0 rounded border-ink-300 text-brand-500 accent-brand-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );

    if (!label) return input;

    return (
      <label
        htmlFor={checkboxId}
        className="flex cursor-pointer items-start gap-2.5 text-sm text-ink-700"
      >
        <span className="mt-0.5">{input}</span>
        <span>{label}</span>
      </label>
    );
  }
);
