import { getBestuurBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Members from '../../components/Members';

export default async function BestuurDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bestuur = getBestuurBySlug(slug);
  if (!bestuur) return notFound();

  return (
    <div className="mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">{bestuur.title}</h1>
      <p className="text-gray-600 mb-6">{bestuur.subtitle}</p>
      <div className="prose mb-8" dangerouslySetInnerHTML={{ __html: bestuur.content }} />
      {bestuur.members && bestuur.members.length > 0 && <Members members={bestuur.members} />}
    </div>
  );
}
