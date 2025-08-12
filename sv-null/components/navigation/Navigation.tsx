"use client";

import { navItems } from "@/config/navigation";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavItem } from "./MobileNavItem";
import { NavItem } from "./NavItem";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-volledig.png"
              alt="Studievereniging NULL"
              className="h-20 w-auto"
              width={180}
              height={80}
            />
          </Link>

          <div className="hidden md:flex space-x-6 relative z-50">
            {navItems.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XIcon className="h-6 w-6 text-white" />
              ) : (
                <AlignJustify className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              <MobileNavItem key={idx} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
