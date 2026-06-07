import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postsListQuery } from "@/sanity/queries";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Industry insights, compliance guides, and product updates from the Regatta Registers team.",
};

const categoryLabels: Record<string, string> = {
  compliance: "Inspection & Compliance",
  "asset-management": "Asset Management",
  "industry-news": "Industry News",
  "product-updates": "Product Updates",
  "how-to": "How-to Guides",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = (await client.fetch(postsListQuery)) as Array<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt?: string;
    category?: string;
  }>;

  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Blog
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">
          Compliance guides, industry news, and how-to articles for industrial asset managers.
        </p>
      </Section>

      <Section muted size="wide">
        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-ink-400">No posts published yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post._id} href={`/resources/blog/${post.slug.current}`} className="group">
                <Card interactive className="h-full">
                  <CardHeader>
                    {post.category && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                        {categoryLabels[post.category] ?? post.category}
                      </span>
                    )}
                    <CardTitle className="mt-2 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    {post.excerpt && (
                      <CardDescription className="mt-2 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    )}
                    {post.publishedAt && (
                      <p className="mt-4 text-xs text-ink-400">
                        {formatDate(post.publishedAt)}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
