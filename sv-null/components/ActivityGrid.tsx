// components/ActivityGrid.tsx
"use client";

import { ActivityItem } from "@/lib/content";
import { Calendar } from "lucide-react";

export default function ActivityGrid({
  items,
  limit,
}: {
  items: ActivityItem[];
  limit?: number;
}) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {list.map((item, idx) => (
        <div
          key={`${item.title}-${idx}`}
          className="relative flex flex-col sm:flex-row bg-neutral-900 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
        >
          {/* Afbeelding */}
          <div
            className="
              flex-shrink-0 relative z-10
              w-full aspect-square
              sm:w-64 sm:h-64 sm:-mt-4 sm:-ml-4
              sm:rounded-xl overflow-hidden shadow-lg rounded-t-xl rounded-b-none
            "
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-gray-400 text-sm">
                Geen afbeelding
              </div>
            )}
          </div>

          {/* Tekstkaart */}
          <div className="flex-1 p-6 min-h-[14rem] sm:min-h-[16rem] relative z-0">
            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>
                  {item.notDetermined ? (
                    <span className="font-medium">Nog niet bekend</span>
                  ) : item.date ? (
                    formatDate(item.date)
                  ) : (
                    "—"
                  )}
                </span>
              </div>
            </div>

            {/* Titel */}
            <h3 className="mt-4 text-xl sm:text-2xl font-semibold underline underline-offset-12 decoration-yellow-400">
              {item.title}
            </h3>

            {/* Content */}
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function formatDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
