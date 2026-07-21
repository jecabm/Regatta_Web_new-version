"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function AuthError({
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
    <div className="flex min-h-screen flex-col bg-ink-50">
      <header className="flex items-center justify-between px-6 py-5 sm:px-8">
        <Logo />
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Something went wrong
        </p>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink-900">
            We couldn&apos;t load this page
          </h1>
          <p className="mt-2 max-w-sm text-ink-500">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <Button onClick={reset} variant="primary">
          Try again
        </Button>
      </main>
    </div>
  );
}
