"use client";

import Button from "@/components/ui/button";
import { useActivePath } from "@/hooks/use-active-path";
import { NavItem } from "@/types/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import NavLink from "./nav-link";

type Props = {
  item: NavItem;
};

const NavigationItem = ({ item }: Props) => {
  const { isActive, isParentActive } = useActivePath();
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = `px-3 py-2 transition-colors duration-200 focus:outline-none ${
    isParentActive(item) ? "text-yellow-400" : "hover:text-yellow-400"
  }`;

  if (item.type === "button") {
    return (
      <Button
        href={item.href}
        onClick={item.onClick}
        className={item.className}
      >
        {item.name}
      </Button>
    );
  }

  if (!item.sub) {
    return (
      <NavLink href={item.href} className={baseClasses}>
        {item.name}
      </NavLink>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        className={`inline-flex items-center ${baseClasses}`}
        aria-expanded={isOpen}
      >
        {item.name}
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full w-48 pt-2 transition-all duration-200 ease-out origin-top-left ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
      >
        <div className="bg-black border border-neutral-800 rounded-lg shadow-xl overflow-hidden">
          {item.sub.map((sub, idx) => (
            <NavLink
              key={idx}
              href={sub.href}
              className={`block px-4 py-2 text-sm transition-colors ${sub.href && isActive(sub.href) ? "bg-neutral-800 text-yellow-400" : "text-white hover:bg-neutral-900 hover:text-yellow-400"}`}
            >
              {sub.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationItem;
