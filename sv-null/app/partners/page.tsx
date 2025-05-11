import { getPartnerItems } from '@/lib/content';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function PartnersPage() {
  const partners = getPartnerItems();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Onze partners</h1>

      {partners.map((partner, idx) => (
        <div key={idx} className="mb-8 border-b pb-6">
          <h2 className="text-xl font-semibold">{partner.title}</h2>
          <p className="text-gray-600 mb-2">{partner.subtitle}</p>

          {partner.image && (
            <Image
              src={`${partner.image}`}
              alt={partner.title}
              width={500}
              height={300}
              className="rounded mb-3"
            />
          )}

          <div className="prose">
            <Markdown>{partner.content}</Markdown>
          </div>
        </div>
      ))}

      <div className="mt-10">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-300"
        >
          Ook partner worden?
        </a>
      </div>
    </div>
  );
}
