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
  variant = "default",
}: {
  className?: string;
  href?: string;
  showWordmark?: boolean;
  variant?: "default" | "white";
}) {
  const src = variant === "white" ? "/RR-logo-white.png" : "/RR-logo.svg";

  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
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
