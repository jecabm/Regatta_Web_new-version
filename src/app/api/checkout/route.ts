import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

type LineItem = {
  stripePriceId?: string;
  name: string;
  price: number; // dollars
  quantity: number;
  image?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { items, successUrl, cancelUrl }: { items: LineItem[]; successUrl: string; cancelUrl: string } =
      await req.json();

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      // If the product has a Stripe Price ID configured in Sanity, use it directly
      if (item.stripePriceId) {
        return { price: item.stripePriceId, quantity: item.quantity };
      }

      // Otherwise create a dynamic price on the fly
      return {
        quantity: item.quantity,
        price_data: {
          currency: "aud",
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            ...(item.image ? { images: [item.image] } : {}),
          },
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: { allowed_countries: ["AU", "NZ"] },
      automatic_tax: { enabled: false },
      metadata: { source: "regatta-registers-website" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
