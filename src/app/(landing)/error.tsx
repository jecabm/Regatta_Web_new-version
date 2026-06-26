"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function LandingError({
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
    <>
      <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
          <Logo />
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden text-sm font-medium text-ink-600 hover:text-ink-900 sm:block"
            >
              Contact us
            </Link>
            <Button href="/free-trial" size="sm">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Something went wrong
        </p>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-ink-900">
            We hit an unexpected error
          </h1>
          <p className="mt-2 max-w-sm text-ink-500">
            This page failed to load. Try again or contact us for help.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={reset} variant="primary" size="lg">
            Try again
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </main>
      <footer className="border-t border-ink-100 bg-ink-50 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-ink-400 sm:px-8">
          © {new Date().getFullYear()} Regatta Registers. All rights reserved.{" "}
          <Link href="/" className="hover:text-ink-600">
            Back to main site
          </Link>
        </div>
      </footer>
    </>
  );
}
