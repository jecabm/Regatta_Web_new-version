import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function ShopCancelPage() {
  return (
    <Section size="narrow" className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-danger-soft">
        <XCircle className="h-10 w-10 text-danger" />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900">
        Payment cancelled
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-500">
        No charges were made. Your cart has been saved — head back to the shop whenever you're ready.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button href="/shop">Return to Shop</Button>
        <Button href="/" variant="outline">Back to Home</Button>
      </div>
    </Section>
  );
}
