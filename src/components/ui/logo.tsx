import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Brand lockup.
 */
export function Logo({
  className,
  href = "/",
  showWordmark = true,
}: {
  className?: string;
  href?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/RR-logo.svg"
        alt=""
        aria-hidden
        width={132}
        height={76}
        priority
        className={cn(showWordmark ? "h-10 w-auto" : "h-9 w-auto")}
      />
    </Link>
  );
}
