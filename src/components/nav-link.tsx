"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  // Highlight the link when the current path matches the href, or when it is a
  // nested route (e.g. /meals stays active on /meals/[slug] and /meals/share).
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-foreground transition-colors hover:text-orange-500",
        isActive && "font-semibold text-orange-500"
      )}
    >
      {children}
    </Link>
  );
}
