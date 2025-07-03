'use client';
import Link from 'next/link';

export default function VakkenPage() {
  const years = [
    { year: 1, href: '/vakken/jaar-1', description: 'Brede basis' },
    { year: 2, href: '/vakken/jaar-2', description: 'Brede basis en praktijk' },
    { year: 3, href: '/vakken/jaar-3', description: 'Specialiseren en/of verbreden' },
    { year: 4, href: '/vakken/jaar-4', description: 'Afstudeerstages' },
  ];

  return (
    <div className="px-6">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-6">Vakken</h1>
        <p className="mb-4 text-lg text-gray-300">
          Hieronder zijn alle vakken die je krijgt, onderverdeeld per jaar. 
          Per vak vind je verhalen/projecten/adviezen van (oude) leden, zowel als handige bronnen en links. 
          Zo weet je wat je bij de vakken kunt verwachten en kun je goed voorbereid beginnen.
        </p>
        <img
          src="/images/vakken/curriculum.jpg"
          alt="Vakken overzicht"
          className="w-full max-w-3xl mx-auto mb-8 rounded-lg shadow-md"
        />
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {years.map((item) => (
          <Link
            key={item.year}
            href={item.href}
            className="group bg-gray-900 hover:bg-yellow-400 transition-colors duration-300 rounded-xl p-8 text-center shadow-md"
          >
            <h2 className="text-2xl font-semibold text-yellow-400 group-hover:text-black">Jaar {item.year}</h2>
            <p className="text-sm mt-2 text-white group-hover:text-black">
              {item.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
