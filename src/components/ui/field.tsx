"use client";

import * as React from "react";
import { createContext, useContext, useId } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldContextValue = {
  fieldId: string;
  describedBy?: string;
  invalid: boolean;
};

const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Read the surrounding <Field> wiring so a control can auto-bind its
 * id / aria-describedby / aria-invalid. Returns null when used standalone.
 */
export function useFieldContext() {
  return useContext(FieldContext);
}

type FieldProps = {
  label?: string;
  /** Helper text shown below the control (hidden when an error is present). */
  hint?: string;
  /** Error message; presence also flips the control into its invalid styling. */
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * Composable form field: renders a label, the control, and helper/error text,
 * and wires accessibility attributes to the control via context.
 *
 *   <Field label="Email" hint="Work email" error={errors.email} required>
 *     <Input type="email" />
 *   </Field>
 */
export function Field({
  label,
  hint,
  error,
  required,
  className,
  children,
}: FieldProps) {
  const id = useId();
  const fieldId = `field-${id}`;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <FieldContext.Provider value={{ fieldId, describedBy, invalid: Boolean(error) }}>
      <div className={cn("space-y-1.5", className)}>
        {label && (
          <Label htmlFor={fieldId} required={required}>
            {label}
          </Label>
        )}
        {children}
        {error ? (
          <p id={errorId} className="text-xs font-medium text-danger">
            {error}
          </p>
        ) : (
          hint && (
            <p id={hintId} className="text-xs text-ink-500">
              {hint}
            </p>
          )
        )}
      </div>
    </FieldContext.Provider>
  );
}
