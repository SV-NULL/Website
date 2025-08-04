"use client";
import CTA from "@/components/CTA";
import { VacatureItem } from "@/lib/content";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VacatureList({
  vacatures,
}: {
  vacatures: VacatureItem[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const router = useRouter();

  const filtered = vacatures.filter(
    (v) => filter === "all" || v.type === filter
  );
  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6 sm:flex sm:flex-wrap">
        {["all", "bijbaan", "stage", "full-time"].map((type) => (
          <button
            key={type}
            className={`max-w-50 px-4 py-2 rounded ${
              filter === type ? "bg-gray-600 text-white" : "bg-gray-900"
            }`}
            onClick={() => {
              setFilter(type);
              setVisibleCount(5);
            }}
          >
            {type === "all"
              ? "Alle"
              : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {visible.map((v) => (
            <div
              key={v.slug}
              className="border rounded p-4 flex items-center gap-4 cursor-pointer hover:border-yellow-400 hover:shadow-lg transition"
              onClick={() => router.push(`/vacatures/${v.slug}`)}
            >
              <Image
                src={v.logo}
                alt={v.company}
                className="w-16 h-16 object-contain"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-2xl font-semibold">{v.title}</h3>
                <p className="text-sm text-gray-600">
                  {v.company} · {v.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-lg py-12">
          Geen vacatures gevonden.
        </div>
      )}

      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          <button
            className="px-4 py-2 bg-yellow-400 rounded"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            Laad meer
          </button>
        </div>
      )}

      <CTA
        title="Vacature plaatsen?"
        text="Heb je een vacature voor onze leden? Laat het ons weten en wij plaatsen het op de site."
        button={{ text: "Contact opnemen", href: "/contact" }}
      />
    </div>
  );
}
