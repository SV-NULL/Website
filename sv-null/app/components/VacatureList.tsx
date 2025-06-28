'use client';
import { useState } from 'react';
import { VacatureItem } from '@/lib/content';
import { useRouter } from 'next/navigation';
import CTA from '@/app/components/CTA';

export default function VacatureList({ vacatures }: { vacatures: VacatureItem[] }) {
  const [filter, setFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const router = useRouter();

  const filtered = vacatures.filter(
    (v) => filter === 'all' || v.type === filter
  );
  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      {/* Filter buttons */}
      <div className="py-8 flex gap-4 mb-6">
        {['all', 'bijbaan', 'stage', 'full-time'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded ${filter === type ? 'bg-gray-600 text-white' : 'bg-gray-900'}`}
            onClick={() => {
              setFilter(type);
              setVisibleCount(5);
            }}
          >
            {type === 'all' ? 'Alle' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Vacature blocks */}
      <div className="grid grid-cols-1 gap-6">
        {visible.map((v) => (
          <div
            key={v.slug}
            className="border rounded p-4 flex items-center gap-4 cursor-pointer"
            onClick={() => router.push(`/vacatures/${v.slug}`)}
          >
            <img
              src={v.logo}
              alt={v.company}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold">{v.title}</h2>
              <p className="text-sm text-gray-600">{v.company} · {v.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          <button className="px-4 py-2 bg-yellow-400 rounded"
                  onClick={() => setVisibleCount((prev) => prev + 5)}>
            Laad meer
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12">
        <CTA
          title="Vacature plaatsen?"
          text="Heb je een vacature voor onze leden? Laat het ons weten en wij plaatsen het op de site."
          button={{ text: 'Contact opnemen', href: '/contact' }}
        />
      </div>
    </>
  );
}