import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productBySlugQuery, productsQuery } from "@/sanity/queries";
import { Section } from "@/components/ui/section";
import { AddToCartButton } from "@/components/marketing/add-to-cart-button";
import { ShieldCheck, Truck, RefreshCw } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  description?: import("@portabletext/types").PortableTextBlock[];
  images?: Array<{ asset: { _ref: string }; alt?: string }>;
  price: number;
  compareAtPrice?: number;
  stripePriceId?: string;
  inStock?: boolean;
  category?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export async function generateStaticParams() {
  const products = (await client.fetch(productsQuery)) as Product[];
  return products.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = (await client.fetch(productBySlugQuery, { slug })) as Product | null;
  if (!product) return {};
  return {
    title: product.seoTitle ?? product.name,
    description: product.seoDescription ?? product.shortDescription,
  };
}

function formatPrice(dollars: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(dollars);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = (await client.fetch(productBySlugQuery, { slug })) as Product | null;
  if (!product) notFound();

  const images = product.images ?? [];
  const mainImage = images[0]
    ? urlFor(images[0]).width(800).height(800).fit("crop").url()
    : null;

  const savings =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? product.compareAtPrice - product.price
      : null;

  return (
    <Section size="wide" spacing="md">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-ink-200 bg-ink-50">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={images[0]?.alt ?? product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-ink-200">
                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className="relative h-20 w-20 overflow-hidden rounded-lg border border-ink-200 bg-ink-50"
                >
                  <Image
                    src={urlFor(img).width(160).height(160).fit("crop").url()}
                    alt={img.alt ?? `${product.name} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          {product.category && (
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              {product.category}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {product.name}
          </h1>

          {product.shortDescription && (
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              {product.shortDescription}
            </p>
          )}

          {/* Pricing */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-bold text-ink-900">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-ink-400 line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
            {savings && (
              <span className="rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
                Save {formatPrice(savings)}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <div className="mt-6">
            <AddToCartButton product={product} className="max-w-xs py-3 text-base" />
          </div>

          {/* Trust signals */}
          <div className="mt-8 space-y-3 rounded-xl border border-ink-200 bg-ink-50 p-5">
            <div className="flex items-center gap-3 text-sm text-ink-600">
              <ShieldCheck className="h-4 w-4 shrink-0 text-success" />
              <span>Secure checkout powered by Stripe</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-600">
              <Truck className="h-4 w-4 shrink-0 text-brand-500" />
              <span>Ships to Australia and New Zealand</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-600">
              <RefreshCw className="h-4 w-4 shrink-0 text-ink-400" />
              <span>30-day returns on all orders</span>
            </div>
          </div>

          {/* Full description */}
          {product.description && (
            <div className="mt-8 prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-ink-900 prose-p:text-ink-600 prose-a:text-brand-600">
              <PortableText value={product.description} />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
