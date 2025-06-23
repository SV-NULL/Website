import { getBestuurBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Members from '../../components/Members';

export default function BestuurDetailPage({ params }: { params: { slug: string } }) {
  const bestuur = getBestuurBySlug(params.slug);

  if (!bestuur) return notFound();

  // Simuleer data (vervang later met echte members-data via frontmatter of json/yaml)
  const leden = [
    {
      name: 'Twan Meurs',
      role: 'Voorzitter',
      date: '2024-2025',
      image: '/images/bestuur/1ste-bestuur/Twan.jpg',
    },
    {
      name: 'Kurt Verweel',
      role: 'Vicevoorzitter',
      date: '2024-2025',
      image: '/images/bestuur/1ste-bestuur/Kurt.jpg',
    },
  ];

  return (
    <div className="mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">{bestuur.title}</h1>
      <p className="text-gray-600 mb-6">{bestuur.subtitle}</p>
      <div className="prose mb-8" dangerouslySetInnerHTML={{ __html: bestuur.content }} />
      <Members members={leden} />
    </div>
  );
}
