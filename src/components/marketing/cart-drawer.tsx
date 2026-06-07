"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { X, ShoppingCart, Plus, Minus, Trash2, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

function formatPrice(dollars: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(dollars);
}

type Props = { open: boolean; onClose: () => void };

export function CartDrawer({ open, onClose }: Props) {
  const { items, total, remove, increment, decrement, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            stripePriceId: i.stripePriceId,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            image: i.image,
          })),
          successUrl: `${window.location.origin}/shop/success`,
          cancelUrl: `${window.location.origin}/shop`,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer */}
      <div
        ref={ref}
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-popover transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-ink-700" />
            <h2 className="text-base font-semibold text-ink-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="rounded-full bg-brand-500 px-2 py-0.5 text-xs font-semibold text-white">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingCart className="h-10 w-10 text-ink-200" />
              <p className="text-sm text-ink-400">Your cart is empty.</p>
              <Button variant="ghost" size="sm" onClick={onClose}>
                Continue shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  {item.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-ink-200 bg-ink-50">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-semibold leading-snug text-ink-900">{item.name}</p>
                    <p className="text-sm text-brand-600 font-medium">{formatPrice(item.price)}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="grid h-6 w-6 place-items-center rounded border border-ink-200 text-ink-500 hover:bg-ink-50 transition-colors"
                        aria-label="Decrease"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-ink-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="grid h-6 w-6 place-items-center rounded border border-ink-200 text-ink-500 hover:bg-ink-50 transition-colors"
                        aria-label="Increase"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => remove(item.id)}
                        className="ml-auto text-ink-300 hover:text-danger transition-colors"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink-200 px-5 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-500">Subtotal</span>
              <span className="text-base font-bold text-ink-900">{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-ink-400">Shipping calculated at checkout. AU & NZ delivery.</p>
            <Button fullWidth loading={loading} onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
            <button
              onClick={clear}
              className="w-full text-center text-xs text-ink-400 hover:text-ink-600 transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
