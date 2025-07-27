import { getBestuurBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Members from '@/components/Members';
import PageTitle from '@/components/PageTitle';

export default async function BestuurDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bestuur = getBestuurBySlug(slug);
  if (!bestuur) return notFound();

  return (
      <div className="grid">

        <PageTitle
          title={bestuur.title}
          subtitle={"Studiejaar " + bestuur.subtitle}
        />

        <div
          className="max-w-4xl mx-auto mb-8"
          dangerouslySetInnerHTML={{ __html: bestuur.content }}
        />

        {bestuur.members && bestuur.members.length > 0 && (
          <div>
            <Members members={bestuur.members} />
          </div>
        )}
      </div>
    );
}
