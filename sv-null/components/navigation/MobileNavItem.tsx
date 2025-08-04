"use client";

import { NavItem as NavItemType } from "@/types/image";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: NavItemType;
};

export function MobileNavItem({ item }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");
  const parentActive =
    isActive(item.href) || item.sub?.some((sub) => isActive(sub.href));

  if (item.sub) {
    return (
      <details className="group bg-black">
        <summary
          className={`flex justify-between items-center px-3 py-2 cursor-pointer transition-colors ${
            parentActive ? "text-yellow-400" : "hover:text-yellow-400"
          }`}
        >
          {item.name}
          <span className="ml-2">
            <ChevronDownIcon className="w-4 h-4 group-open:hidden inline" />
            <ChevronDownIcon className="w-4 h-4 rotate-180 group-open:inline hidden" />
          </span>
        </summary>
        <div className="pl-4 bg-black">
          {item.sub.map((subItem, idx) => (
            <Link
              key={idx}
              href={subItem.href}
              className={`block px-3 py-2 text-sm transition-colors ${
                isActive(subItem.href)
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              <ChevronRight className="w-4 h-4 inline mr-1" />
              {subItem.name}
            </Link>
          ))}
        </div>
      </details>
    );
  }

  return (
    <Link
      href={item.href}
      className={`block px-3 py-2 transition-colors ${
        isActive(item.href) ? "text-yellow-400" : "hover:text-yellow-400"
      }`}
    >
      {item.name}
    </Link>
  );
}
