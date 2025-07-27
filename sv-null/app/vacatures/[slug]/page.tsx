import { getVacatureBySlug, getVacatureItems } from '@/lib/content';
import Markdown from 'react-markdown';
import CTA from '@/components/CTA';
import PageTitle from '@/components/PageTitle';

export async function generateStaticParams() {
  const items = getVacatureItems();
  return items.map((v) => ({ slug: v.slug }));
}

export default async function VacatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacature = getVacatureBySlug(slug);
  if (!vacature) return <p>Vacature niet gevonden</p>;

  return (
    <div>
      <PageTitle
        title={`Vacature ${vacature.company}`} 
        subtitle="Bekijk de details van deze vacature en solliciteer direct."
      />
      <div className="flex items-center gap-4">
        <img src={vacature.logo} alt={vacature.company} className="w-24 h-24 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{vacature.title}</h1>
          <p className="text-sm text-gray-600">{vacature.company} · {vacature.type}</p>
        </div>
      </div>
      <Markdown>{vacature.content}</Markdown>
      <CTA 
        title="Interesse?" 
        text={`Ben je enthousiast over deze vacature bij ${vacature.company}? Soliciteer nu!`} 
        button={{ text: 'Soliciteren', href: vacature.applyUrl }} />
    </div>
  );
}