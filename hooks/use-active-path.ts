"use client";

import { NavItem } from "@/types/navigation";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function useActivePath() {
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => pathname === href || pathname?.startsWith(`${href}/`),
    [pathname],
  );

  const isParentActive = (item: NavItem): boolean => {
    if (item.type === "button") return false;
    return (
      ((!!item.href && isActive(item.href)) ||
        item.sub?.some((s) => !!s.href && isActive(s.href))) ??
      false
    );
  };

  return { isActive, isParentActive };
}
