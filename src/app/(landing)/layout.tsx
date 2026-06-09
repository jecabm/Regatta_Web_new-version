import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
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
      <main>{children}</main>
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
