import { Quote } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { featuredTestimonialsQuery } from "@/sanity/queries";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, CardHeader } from "@/components/ui/card";

type Testimonial = {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  company?: string;
};

export async function TestimonialsSection() {
  const testimonials = (await client.fetch(featuredTestimonialsQuery)) as Testimonial[];
  if (testimonials.length === 0) return null;

  return (
    <Section muted size="wide">
      <SectionHeading
        eyebrow="What our customers say"
        title="Trusted by industrial operators across Australia"
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t._id} className="flex h-full flex-col">
            <CardHeader className="flex-1">
              <Quote className="h-6 w-6 text-brand-300" aria-hidden />
              <p className="mt-4 text-base leading-relaxed text-ink-700">{t.quote}</p>
            </CardHeader>
            <div className="border-t border-ink-100 px-6 py-4">
              <p className="text-sm font-semibold text-ink-900">{t.authorName}</p>
              {(t.authorRole || t.company) && (
                <p className="text-xs text-ink-500">
                  {[t.authorRole, t.company].filter(Boolean).join(", ")}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
