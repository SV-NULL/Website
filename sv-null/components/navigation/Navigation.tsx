"use client";

import { navItems } from "@/config/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavItem } from "./MobileNavItem";
import { NavItem } from "./NavItem";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Sticky scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black text-white border-b border-neutral-800
                  transition-transform duration-300 ${
                    visible ? "translate-y-0" : "-translate-y-full"
                  }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-volledig.png"
              alt="Studievereniging NULL"
              className="h-20 w-auto"
              width={180}
              height={80}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6 relative z-50">
            {navItems.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  mobileOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  mobileOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <div
        className={`md:hidden bg-black text-white border-t border-neutral-800 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, idx) => (
            <MobileNavItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}
