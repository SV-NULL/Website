"use client";

import { useEffect, useState } from "react";

export default function StickySidebar({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky transition-[top] duration-300 ease-in-out ${
        isNavVisible ? "top-32" : "top-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
