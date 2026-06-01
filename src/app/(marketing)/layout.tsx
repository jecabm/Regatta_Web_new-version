import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Shared chrome for all public marketing pages (Home, About, Pricing, Contact).
 * Header is sticky; Footer is pinned to the bottom on short pages.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
