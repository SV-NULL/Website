import { notFound } from 'next/navigation';
import { getVakkenBySlug } from '@/lib/content';

export default async function VakkenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vak = getVakkenBySlug(slug);
  if (!vak) return notFound();

  return (
    <div className="px-6 space-y-8">
      <h1 className="text-4xl font-bold">{vak.title}</h1>
      <p className="text-gray-300 mb-12">{vak.description}</p>

      {vak.courses.map((c, i) => (
        <section key={i}>
          <h2 className="text-2xl font-bold">
            Semester {c.semester} –
            {c.expertise ? `  (${c.expertise}) ` : ' '}
            {c.name}
          </h2>
          <p className="mt-4">
            {c.details}
            <br />
          </p>
          <p className="mt-4">
            <span className="font-semibold">Handige bronnen of advies:</span>
          </p>
          <ul className="list-disc pl-6 mt-1">
            {c.resources.map((r, j) => (
              <li key={j}>{r}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
