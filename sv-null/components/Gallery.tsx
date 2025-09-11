"use client";

import Image from "next/image";

const images = [
  "./images/home/1.jpg",
  "./images/home/2.jpg",
  "./images/home/3.jpg",
  "./noindex/4.jpg",
  "./images/home/5.jpg",
  "./images/home/6.jpg",
  "./images/home/7.jpg",
  "./images/home/8.jpg",
  "./images/home/9.jpg",
];

export default function Gallery() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl relative group break-inside-avoid"
        >
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400/30 transition-colors duration-500" />
        </div>
      ))}
    </div>
  );
}
