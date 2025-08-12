"use client";

import { NavItem as NavItemType } from "@/types/image";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type Props = {
  item: NavItemType;
};

export function NavItem({ item }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  const parentActive =
    isActive(item.href) || item.sub?.some((sub) => isActive(sub.href));

  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const openMenu = () => {
    clearTimeout(timeoutRef.current as unknown as number);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  if (item.sub) {
    return (
      <div
        className="relative"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onFocus={openMenu}
        onBlur={closeMenu}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className={`inline-flex items-center px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
            parentActive ? "text-yellow-400" : "hover:text-yellow-400"
          }`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={`submenu-${item.name}`}
        >
          {item.name}
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </button>

        {open && (
          <div
            id={`submenu-${item.name}`}
            role="menu"
            aria-label={item.name}
            className="absolute left-0 top-full w-44 mt-1 bg-black text-white shadow-lg ring-1 ring-gray-700 rounded-md z-50"
          >
            {item.sub.map((subItem, idx) => (
              <Link
                key={idx}
                href={subItem.href}
                role="menuitem"
                className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  isActive(subItem.href)
                    ? "bg-gray-800 text-yellow-400"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
        isActive(item.href) ? "text-yellow-400" : "hover:text-yellow-400"
      }`}
    >
      {item.name}
    </Link>
  );
}
