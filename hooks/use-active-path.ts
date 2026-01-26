"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function useActivePath() {
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => pathname === href || pathname?.startsWith(`${href}/`),
    [pathname],
  );

  return { isActive };
}
