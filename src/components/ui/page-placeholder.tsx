import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/**
 * Temporary, intentional scaffold for routes whose full content lands in
 * STEP 3. Establishes the section rhythm (eyebrow → title → lead → CTAs)
 * that the real pages will follow.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Start Free Trial", href: "/free-trial" },
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">{description}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>

        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-dashed border-ink-300 px-4 py-1.5 text-xs font-medium text-ink-400">
          Full content lands in STEP 3 — Page Rebuild
        </p>
      </Container>
    </section>
  );
}
