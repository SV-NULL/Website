"use client";

import { ListItem } from "@/lib/content";
import Link from "next/link";

export default function List({
  items,
  line,
  basePath,
}: {
  items: ListItem[];
  line: boolean;
  basePath: string;
}) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <Link key={item.slug} href={`/${basePath}/${item.slug}`}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-opacity-25 flex flex-col justify-end p-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <h2
                  className={
                    line === true
                      ? "text-white underline underline-offset-12 decoration-yellow-400"
                      : "text-white"
                  }
                >
                  {item.title}
                </h2>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
