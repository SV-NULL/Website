import { getCommissieBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Members from '@/components/Members';
import PageTitle from '@/components/PageTitle';

export default async function CommissieDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const commissie = getCommissieBySlug(slug);
  if (!commissie) return notFound();

  return (
      <div>
        <PageTitle
          title={commissie.title}
          subtitle={commissie.content}
        />

        {commissie.members && commissie.members.length > 0 && (
          <div>
            <Members members={commissie.members} />
          </div>
        )}
      </div>
    );
}
