'use client';

import { useState } from 'react';
import { DropdownItem } from '@/lib/content';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

export default function DropdownList({
  items,
  title,
  footer,
}: {
  items: DropdownItem[];
  title: string;
  footer?: React.ReactNode;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="space-y-4">
        {items.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={clsx(
                'border border-gray-700 rounded-lg shadow-md transition-all cursor-pointer',
                'bg-gray-800 text-white',
                isOpen ? 'ring-2 ring-yellow-400' : 'hover:ring-1 hover:ring-yellow-500'
              )}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
                <div className="text-yellow-400">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>

              {/* Content */}
              <div
                className={clsx(
                  'overflow-hidden transition-all duration-300',
                  isOpen ? 'max-h-screen p-4 pt-0' : 'max-h-0'
                )}
              >
                {isOpen && (
                  <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
                    <div className={item.image ? 'md:w-1/2' : 'w-full'}>
                      <p className="text-gray-200 whitespace-pre-line">{item.content}</p>
                    </div>

                    {item.image && (
                      <div className="md:w-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {footer && <div className="mt-12">{footer}</div>}
    </div>
  );
}
