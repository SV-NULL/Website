"use client";

import { NavItem as NavItemType } from "@/types/image";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type Props = {
  item: NavItemType;
  openItem: string | null;
  setOpenItem: (name: string | null) => void;
};

export function MobileNavItem({ item, openItem, setOpenItem }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");
  const parentActive =
    isActive(item.href) || item.sub?.some((sub) => isActive(sub.href));

  const open = openItem === item.name;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open, contentRef]);

  if (item.sub) {
    return (
      <div className="bg-black">
        <button
          onClick={() => setOpenItem(open ? null : item.name)}
          className={`flex justify-between items-center w-full px-3 py-2 cursor-pointer transition-colors duration-200 group ${
            parentActive ? "text-yellow-400" : "hover:text-yellow-400"
          }`}
        >
          {item.name}
          <ChevronDownIcon
            className={`w-4 h-4 ml-2 transition-transform duration-300 group-active:text-yellow-400 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          ref={contentRef}
          style={{ height }}
          className="pl-4 overflow-hidden transition-height duration-300 ease-in-out"
        >
          <div className="flex flex-col">
            {item.sub.map((subItem, idx) => (
              <Link
                key={idx}
                href={subItem.href}
                className={`flex items-center px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive(subItem.href)
                    ? "text-yellow-400"
                    : "hover:text-yellow-400 active:text-yellow-400"
                }`}
              >
                <ChevronRight className="w-4 h-4 inline mr-1" />
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`block px-3 py-2 transition-colors duration-200 ${
        isActive(item.href)
          ? "text-yellow-400"
          : "hover:text-yellow-400 active:text-yellow-400"
      }`}
    >
      {item.name}
    </Link>
  );
}
