"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollVisibility(threshold = 80) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrollingUp = currentScrollY < lastScrollY.current;
          const isAboveThreshold = currentScrollY < threshold;

          setVisible(isScrollingUp || isAboveThreshold);

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return visible;
}
