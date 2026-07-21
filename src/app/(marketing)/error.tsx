"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink-50 px-6 text-center">
      <Logo href="/" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Something went wrong
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">
          We hit an unexpected error
        </h1>
        <p className="mt-2 max-w-sm text-ink-500">
          This page failed to load. Try again, or head back to the home page.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button onClick={reset} variant="primary" size="lg">
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to home
        </Button>
      </div>
      <Link
        href="/contact"
        className="text-sm font-medium text-ink-500 hover:text-ink-900"
      >
        Contact support
      </Link>
    </div>
  );
}
