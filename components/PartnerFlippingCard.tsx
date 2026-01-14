"use client";

import { Partner } from "@/types/partner";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PartnerFlippingCardProps {
  item: Partner;
}

export default function PartnerFlippingCard({
  item,
}: PartnerFlippingCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);
  }, []);

  const handleToggle = () => setFlipped((v) => !v);

  return (
    <div
      className="w-full aspect-square perspective cursor-pointer"
      onPointerDown={handleToggle}
      onMouseEnter={!isTouch ? () => setFlipped(true) : undefined}
      onMouseLeave={!isTouch ? () => setFlipped(false) : undefined}
      style={{ touchAction: "manipulation" }}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-600 transform-style-preserve-3d will-change-transform",
          flipped && "rotate-y-180",
        )}
      >
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-neutral-900 p-6">
          <Image
            src={item.image.src}
            alt={item.image.alt || item.title}
            className="max-w-full max-h-full object-contain"
            width={400}
            height={400}
          />
        </div>

        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-white text-2xl">{item.title}</h2>
            <p className="text-gray-200 whitespace-pre-line text-sm lg:text-lg">
              {item.content}
            </p>
          </div>
          {item.website && (
            <Link
              href={item.website}
              target="_blank"
              rel="noopener"
              onClick={(e) => e.stopPropagation()}
              className="w-fit inline-block px-6 py-2.5 rounded-xl
                bg-yellow-400 text-black border-2 border-yellow-400
                hover:bg-transparent hover:text-yellow-400
                active:bg-transparent active:text-yellow-400
                transition-all duration-300 text-sm text-center align-center"
            >
              Bekijk website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
