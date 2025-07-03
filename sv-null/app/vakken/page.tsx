import Link from 'next/link';
import { getVakkenItems } from '@/lib/content';

export default function VakkenPage() {
  const vakken = getVakkenItems();

  return (
    <div className="px-6">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-6">Vakken</h1>
        <p className="mb-4 text-lg text-gray-300">
          Hieronder zijn alle vakken die je krijgt, onderverdeeld per jaar.
          Per vak vind je verhalen, projecten en adviezen van (oude) leden, hand­ige bronnen en links. 
          Zo weet je wat je kunt verwachten en kun je goed voorbereid beginnen.
        </p>
        <img
          src="/images/vakken/curriculum.jpg"
          alt="Vakken overzicht"
          className="w-full max-w-3xl mx-auto mb-8 rounded-lg shadow-md"
        />
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {vakken.map(({ slug, data }) => (
          <Link
            key={slug}
            href={`/vakken/${slug}`}
            className="group bg-gray-900 hover:bg-yellow-400 transition-colors duration-300 rounded-xl p-8 text-center shadow-md"
          >
            <h2 className="text-2xl font-semibold text-yellow-400 group-hover:text-black">
              {data.title}
            </h2>
            <p className="text-sm mt-2 text-white group-hover:text-black">
              {data.subtitle}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
