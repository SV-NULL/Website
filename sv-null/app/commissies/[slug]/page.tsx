import { getCommissieBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Members from '../../components/Members';

export default async function CommissieDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const commissie = getCommissieBySlug(slug);
  if (!commissie) return notFound();

  return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">{commissie.title}</h1>
        <p className="text-gray-600 mb-6">{commissie.subtitle}</p>

        <div
          className="w-full mb-8 space-auto prose"
          dangerouslySetInnerHTML={{ __html: commissie.content }}
        />

        {commissie.members && commissie.members.length > 0 && (
          <div>
            <Members members={commissie.members} />
          </div>
        )}
      </div>
    );
}
