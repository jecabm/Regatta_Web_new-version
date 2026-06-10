import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postsListQuery } from "@/sanity/queries";
import { Section } from "@/components/ui/section";

type ImageAsset = { url?: string };
type CoverImage = { asset?: ImageAsset; alt?: string };
type BodyImage = { _type: "image"; asset?: ImageAsset; alt?: string; caption?: string };

const portableTextComponents = {
  types: {
    image: ({ value }: { value: BodyImage }) => {
      if (!value?.asset?.url) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
            <Image
              src={value.asset.url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-ink-400">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

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
  const post = await client.fetch(postBySlugQuery, { slug }) as {
    title: string;
    category?: string;
    publishedAt?: string;
    excerpt?: string;
    coverImage?: CoverImage;
    body?: unknown[];
    seoTitle?: string;
    seoDescription?: string;
  } | null;
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

      {post.coverImage?.asset?.url && (
        <div className="relative mb-10 h-72 w-full overflow-hidden rounded-xl sm:h-96">
          <Image
            src={post.coverImage.asset.url}
            alt={post.coverImage.alt ?? post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      {post.body && (
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline">
          <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} components={portableTextComponents} />
        </div>
      )}
    </Section>
  );
}
