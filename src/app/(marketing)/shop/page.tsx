import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productsQuery } from "@/sanity/queries";
import { Section } from "@/components/ui/section";
import { AddToCartButton } from "@/components/marketing/shop/add-to-cart-button";

export const metadata: Metadata = {
  title: "Shop",
  description: "QR code labels, inspection tools, and compliance accessories for industrial asset management.",
};

function formatPrice(dollars: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(dollars);
}

type Product = {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  images?: Array<{ asset: { _ref: string }; alt?: string }>;
  price: number;
  compareAtPrice?: number;
  stripePriceId?: string;
  inStock?: boolean;
  featured?: boolean;
  category?: string;
};

export default async function ShopPage() {
  const products = (await client.fetch(productsQuery)) as Product[];

  return (
    <>
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Shop</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Compliance Accessories
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">
          QR code labels, inspection tools, and safety accessories to complement your Regatta Registers account.
        </p>
      </Section>

      <Section muted size="wide">
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-ink-400">Products coming soon — check back shortly.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const thumbSrc = product.images?.[0]
                ? urlFor(product.images[0]).width(600).height(600).fit("crop").url()
                : null;

              return (
                <div
                  key={product._id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card hover:shadow-elevated transition-shadow"
                >
                  {/* Image */}
                  <Link href={`/shop/${product.slug.current}`} className="block">
                    <div className="relative aspect-square w-full overflow-hidden bg-ink-50">
                      {thumbSrc ? (
                        <Image
                          src={thumbSrc}
                          alt={product.images?.[0]?.alt ?? product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-ink-200">
                          <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                          <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <Link href={`/shop/${product.slug.current}`}>
                      <h2 className="text-base font-semibold text-ink-900 group-hover:text-brand-600 transition-colors leading-snug">
                        {product.name}
                      </h2>
                    </Link>
                    {product.shortDescription && (
                      <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">
                        {product.shortDescription}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-lg font-bold text-ink-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-ink-400 line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
}
