import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postsListQuery } from "@/sanity/queries";
import { Section } from "@/components/ui/section";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
  };
}

export async function generateStaticParams() {
  const posts = (await client.fetch(postsListQuery)) as Array<{ slug: { current: string } }>;
  return posts.map((p) => ({ slug: p.slug.current }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <Section size="narrow">
      <Link
        href="/resources/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-10">
        {post.category && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {post.category}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          {post.title}
        </h1>
        {post.publishedAt && (
          <p className="mt-4 text-sm text-ink-400">{formatDate(post.publishedAt)}</p>
        )}
        {post.excerpt && (
          <p className="mt-5 text-lg leading-relaxed text-ink-600">{post.excerpt}</p>
        )}
      </header>

      {post.body && (
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline">
          <PortableText value={post.body} />
        </div>
      )}
    </Section>
  );
}
