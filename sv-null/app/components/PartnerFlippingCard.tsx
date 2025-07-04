'use client';

import { useState, useEffect } from 'react';
import { PartnerItem } from '@/lib/content';
import clsx from 'clsx';

interface PartnerFlippingCardProps {
  item: PartnerItem;
}

export default function PartnerFlippingCard({ item }: PartnerFlippingCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(hasTouch);
  }, []);

  const handleToggle = () => setFlipped((v) => !v);

  return (
    <div
      className="w-full aspect-square perspective cursor-pointer"
      onPointerDown={handleToggle}
      onMouseEnter={!isTouch ? () => setFlipped(true) : undefined}
      onMouseLeave={!isTouch ? () => setFlipped(false) : undefined}
      style={{ touchAction: 'manipulation' }}
    >
      <div
        className={clsx(
          'relative w-full h-full transition-transform duration-500 transform-style-preserve-3d will-change-transform',
          flipped && 'rotate-y-180'
        )}
      >

        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            {item.subtitle && (
              <p className="text-sm text-gray-400 mb-2">{item.subtitle}</p>
            )}
            <p className="text-gray-200 line-clamp-5 whitespace-pre-line">
              {item.content}
            </p>
          </div>
          {item.website && (
            <a
              href={item.website}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-block px-3 py-1 text-sm bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500 transition"
            >
              Bekijk website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
