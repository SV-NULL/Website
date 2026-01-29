"use client";

import { useActivePath } from "@/hooks/use-active-path";
import { NavItem } from "@/types/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  item: NavItem;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
};

const MobileNavigationItem = ({ item, isOpen, isLast, onToggle }: Props) => {
  const { isActive } = useActivePath();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>(0);

  const isParentActive =
    isActive(item.href) || item.sub?.some((s) => isActive(s.href));

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  if (!item.sub) {
    return (
      <Link
        href={item.href}
        className={`block px-3 py-3 text-lg font-medium ${isLast ? "" : "border-b border-neutral-800"} ${
          isActive(item.href) ? "text-yellow-400" : "text-white"
        }`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className={`${isLast ? "" : "border-b border-neutral-800"}`}>
      <button
        onClick={onToggle}
        className={`flex justify-between items-center w-full px-3 py-3 text-lg font-medium ${
          isParentActive ? "text-yellow-400" : "text-white"
        }`}
      >
        {item.name}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className="flex flex-col pb-2 pl-4">
          {item.sub.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              className={`flex items-center py-2 text-sm ${
                isActive(sub.href) ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationItem;
