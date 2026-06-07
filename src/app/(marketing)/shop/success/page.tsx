"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function ShopSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section size="narrow" className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-soft">
        <CheckCircle2 className="h-10 w-10 text-success" />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900">
        Order confirmed!
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-500">
        Thank you for your purchase. You'll receive a confirmation email shortly with your order details and tracking information.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button href="/shop">Continue Shopping</Button>
        <Button href="/" variant="outline">Back to Home</Button>
      </div>
    </Section>
  );
}
