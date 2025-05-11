'use client';

import { useState } from 'react';
import { DropdownItem } from '@/lib/content';

export default function DropdownListPage({
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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="border rounded-lg shadow p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </div>

            {openIndex === i && (
              <div className="mt-4 space-y-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg"
                  />
                )}
                <p className="text-gray-800 whitespace-pre-line">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {footer && <div className="mt-12">{footer}</div>}
    </div>
  );
}