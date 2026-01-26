"use client";

import CTA from "@/components/sections/cta";
import { Vacature } from "@/types/vacatures";
import { useState } from "react";
import FilterChips from "./filter-chips";
import VacancyCard from "./vacancy-card";

type Props = {
  vacancies: Vacature[];
};

export default function VacancyList({ vacancies }: Props) {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);

  const filtered = vacancies.filter(
    (v) => filter === "all" || v.type === filter,
  );
  const visible = filtered.slice(0, visibleCount);

  const handleFilterChange = (type: string) => {
    setFilter(type);
    setVisibleCount(5);
  };

  return (
    <div>
      <FilterChips currentFilter={filter} onFilterChange={handleFilterChange} />

      {visible.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {visible.map((vacancy) => (
            <VacancyCard key={vacancy.slug} vacancy={vacancy} />
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
            className="inline-block px-6 py-2.5 rounded-xl font-medium
            bg-yellow-400 text-black border-2 border-yellow-400
            hover:bg-transparent hover:text-yellow-400
            active:bg-transparent active:text-yellow-400
            transition-all duration-300"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            Laad meer...
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
