"use client";

import Image from "next/image";
import { useState } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const open = (i: number) => {
    setCurrent(i);
    setModalOpen(true);
  };
  const close = () => setModalOpen(false);
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <figure key={i} className="cursor-pointer">
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full aspect-[16/9] object-cover object-center rounded shadow-lg"
              onClick={() => open(i)}
              width={480}
              height={270}
            />
            <figcaption className="text-sm mt-2 text-gray-600 text-center">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl"
            onClick={prev}
          >
            ‹
          </button>
          <Image
            src={images[current].src}
            alt={images[current].alt}
            className="max-w-full max-h-full object-contain rounded"
            onClick={(e) => e.stopPropagation()}
            width={1200}
            height={800}
          />
          <button
            className="absolute right-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl"
            onClick={next}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
