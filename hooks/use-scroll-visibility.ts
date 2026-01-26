"use client";

import { useEffect, useState } from "react";

export function useScrollVisibility(threshold = 80) {
  const [visible, setVisibile] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY;
        const isAboveThreshold = currentScrollY < threshold;

        setVisibile(isScrollingUp || isAboveThreshold);
        setLastScrollY(currentScrollY);
      });
      ticking = false;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return visible;
}
