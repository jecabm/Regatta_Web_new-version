"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { CartDrawer } from "@/components/marketing/shop/cart-drawer";

export function CartButton() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative grid h-9 w-9 place-items-center rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label={`Open cart (${count} items)`}
      >
        <ShoppingCart className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
            {count > 9 ? "9+" : count}
          </span>
        )}
      </button>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
