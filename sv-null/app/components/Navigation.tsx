'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  XIcon,
  AlignJustify,
  ChevronDownIcon,
  ChevronRight,
} from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    {
      name: 'Vereniging',
      sub: [
        { name: 'Word lid', href: '/word-lid' },
        { name: 'Bestuur', href: '/bestuur' },
        { name: 'Commissies', href: '/commissies' },
        { name: 'Over ons', href: '/over-ons' },
      ],
      href: '/bestuur',
    },
    { name: 'Kalender', href: '/kalender' },
    {
      name: 'Opleiding',
      sub: [
        { name: 'Vakken', href: '/vakken' },
        { name: 'Studentenwelzijn', href: '/studentenwelzijn' },
      ],
      href: '/opleiding/vakken',
    },
    {
      name: 'Partners',
      sub: [
        { name: 'Huidige partners', href: '/partners' },
        { name: 'Vacatures', href: '/vacatures' },
      ],
      href: '/partners',
    },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + '/');

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo-volledig.png"
              alt="Studievereniging NULL"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 relative z-50">
            {navItems.map((item, idx) => {
              const parentActive =
                isActive(item.href || '') ||
                (item.sub ? item.sub.some((sub) => isActive(sub.href)) : false);

              if (item.sub) {
                return (
                  <div key={idx} className="relative group">
                    <button
                      className={`inline-flex items-center px-3 py-2 transition-colors ${
                        parentActive
                          ? 'text-yellow-400'
                          : 'hover:text-yellow-400'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>

                    {/* Dropdown content */}
                    <div className="absolute left-0 top-full w-44 bg-black text-white shadow-lg ring-1 ring-gray-700 rounded-md z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none invisible group-hover:visible transition-all duration-200">
                      {item.sub.map((subItem, sidx) => (
                        <Link
                          key={sidx}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-gray-800 text-yellow-400'
                              : 'hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-yellow-400'
                      : 'hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => {
              const parentActive =
                isActive(item.href || '') ||
                (item.sub ? item.sub.some((sub) => isActive(sub.href)) : false);

              return item.sub ? (
                <details key={idx} className="group bg-black">
                  <summary
                    className={`flex justify-between items-center px-3 py-2 cursor-pointer transition-colors ${
                      parentActive
                        ? 'text-yellow-400'
                        : 'hover:text-yellow-400'
                    }`}
                  >
                    {item.name}
                    <span className="ml-2">
                      <ChevronDownIcon className="w-4 h-4 group-open:hidden inline" />
                      <ChevronDownIcon className="w-4 h-4 rotate-180 group-open:inline hidden" />
                    </span>
                  </summary>
                  <div className="pl-4 bg-black">
                    {item.sub.map((subItem, sidx) => (
                      <Link
                        key={sidx}
                        href={subItem.href}
                        className={`block px-3 py-2 text-sm transition-colors ${
                          isActive(subItem.href)
                            ? 'text-yellow-400'
                            : 'hover:text-yellow-400'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 inline mr-1" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-yellow-400'
                      : 'hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
