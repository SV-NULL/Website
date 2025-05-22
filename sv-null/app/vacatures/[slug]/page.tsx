import { getVacatureBySlug, getVacatureItems } from '@/lib/content';
import Markdown from 'react-markdown';
import CTA from '@/app/components/CTA';

export async function generateStaticParams() {
  const items = getVacatureItems();
  return items.map((v) => ({ slug: v.slug }));
}

export default async function VacatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacature = getVacatureBySlug(slug);
  if (!vacature) return <p>Vacature niet gevonden</p>;

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <img src={vacature.logo} alt={vacature.company} className="w-24 h-24 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{vacature.title}</h1>
          <p className="text-sm text-gray-600">{vacature.company} · {vacature.type}</p>
        </div>
      </div>
      <Markdown>{vacature.content}</Markdown>
      <CTA title="Solliciteer nu" text="Klik op de knop om direct te solliciteren" button={{ text: 'Solliciteer', href: vacature.applyUrl }} />
    </main>
  );
}