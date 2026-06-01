import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

/** 404 — an "empty state" for unknown routes. */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink-50 px-6 text-center">
      <Logo href="/" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">
          Page not found
        </h1>
        <p className="mt-2 max-w-sm text-ink-500">
          The page you’re looking for doesn’t exist or has moved.
        </p>
      </div>
      <Button href="/" size="lg">
        Back to home
      </Button>
      <Link href="/contact" className="text-sm font-medium text-ink-500 hover:text-ink-900">
        Contact support
      </Link>
    </div>
  );
}
