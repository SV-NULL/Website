"use client";

import { navItems } from "@/config/navigation";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerButton from "./hamburger-button";
import MobileNavigationItem from "./mobile-navigation-item";
import NavigationItem from "./navigation-item";

const Navigation = () => {
  const visible = useScrollVisibility();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileItem(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black border-b border-neutral-800 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-25">
          <Link href="/" className="relative z-50 flex-shrink-0">
            <Image
              src="/images/logo-volledig.png"
              alt="Studievereniging NULL"
              className="h-20 w-auto object-contain"
              width={180}
              height={64}
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <NavigationItem key={i} item={item} />
            ))}
          </div>

          <HamburgerButton
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </div>
      </div>

      <div
        className={`md:hidden bg-black text-white border-t border-neutral-800 overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, idx) => (
            <MobileNavigationItem
              key={idx}
              item={item}
              isOpen={openMobileItem === item.name}
              isLast={idx === navItems.length - 1}
              onToggle={() =>
                setOpenMobileItem(
                  openMobileItem === item.name ? null : item.name,
                )
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
