"use client";

import * as React from "react";
import { useFieldContext } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Force invalid styling (otherwise inherited from a surrounding <Field>). */
  invalid?: boolean;
  /** Icon rendered inside the field, leading edge. */
  leftIcon?: React.ReactNode;
};

const controlBase =
  "h-11 w-full rounded-md border bg-white text-sm text-ink-900 placeholder:text-ink-400 " +
  "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
  "disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-400";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, invalid, leftIcon, id, ...props }, ref) {
    const field = useFieldContext();
    const isInvalid = invalid ?? field?.invalid ?? false;

    const control = (
      <input
        ref={ref}
        id={id ?? field?.fieldId}
        aria-invalid={isInvalid || undefined}
        aria-describedby={field?.describedBy}
        className={cn(
          controlBase,
          leftIcon ? "pl-10 pr-3.5" : "px-3.5",
          isInvalid
            ? "border-danger focus-visible:border-danger focus-visible:ring-danger/20"
            : "border-ink-200 focus-visible:border-brand-500 focus-visible:ring-brand-500/20",
          className
        )}
        {...props}
      />
    );

    if (!leftIcon) return control;

    return (
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-items-center text-ink-400 [&_svg]:h-4 [&_svg]:w-4">
          {leftIcon}
        </span>
        {control}
      </div>
    );
  }
);
