import CTA from "@/components/CTA";
import PageTitle from "@/components/PageTitle";
import { getVacatureBySlug, getVacatureItems } from "@/lib/content";
import Image from "next/image";
import Markdown from "react-markdown";

export async function generateStaticParams() {
  const items = getVacatureItems();
  return items.map((v) => ({ slug: v.slug }));
}

export default async function VacatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vacature = getVacatureBySlug(slug);
  if (!vacature) return <p>Vacature niet gevonden</p>;

  return (
    <div className="container mx-auto px-8">
      <PageTitle
        title={`Vacature ${vacature.company}`}
        subtitle="Bekijk de details van deze vacature en solliciteer direct."
      />
      <div className="flex items-center gap-4">
        <Image
          src={vacature.logo}
          alt={vacature.company}
          className="w-24 h-24 object-contain"
          width={96}
          height={96}
        />
        <div>
          <h1 className="text-2xl font-bold">{vacature.title}</h1>
          <p className="text-sm text-gray-600">
            {vacature.company} · {vacature.type}
          </p>
        </div>
      </div>
      <Markdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-bold text-white underline underline-offset-12 decoration-yellow-400 my-6"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-300 leading-relaxed mb-4" {...props} />
          ),
        }}
      >
        {vacature.content}
      </Markdown>
      <CTA
        title="Interesse?"
        text={`Ben je enthousiast over deze vacature bij ${vacature.company}? Soliciteer nu!`}
        button={{ text: "Soliciteren", href: vacature.applyUrl }}
      />
    </div>
  );
}
