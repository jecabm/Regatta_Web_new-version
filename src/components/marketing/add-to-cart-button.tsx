"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

type Product = {
  _id: string;
  name: string;
  price: number;
  stripePriceId?: string;
  images?: Array<{ asset: { _ref: string }; alt?: string }>;
  inStock?: boolean;
};

export function AddToCartButton({ product, className }: { product: Product; className?: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!product.inStock) {
    return (
      <button disabled className={cn("w-full rounded-lg bg-ink-100 px-4 py-2.5 text-sm font-semibold text-ink-400 cursor-not-allowed", className)}>
        Out of Stock
      </button>
    );
  }

  function handleAdd() {
    add({
      id: product._id,
      name: product.name,
      price: product.price,
      stripePriceId: product.stripePriceId ?? "",
      image: undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      className={cn(
        "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
        added
          ? "bg-success text-white"
          : "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700",
        className
      )}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" />
          Added to cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </>
      )}
    </button>
  );
}
