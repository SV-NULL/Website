// pages/activiteiten/index.tsx
import { GetStaticProps } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import { getAlleActiviteitenMeta } from "@/lib/activiteiten";
import Link from "next/link";

type Activiteit = {
  slug: string;
  titel: string;
  datum: string;
};

type Props = {
  activiteiten: Activiteit[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const activiteiten = getAlleActiviteitenMeta(); // Haalt de metadata op van de activiteiten

  return {
    props: {
      activiteiten,
    },
  };
};

export default function Activiteiten({ activiteiten }: Props) {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Activiteiten</h1>
      <ul className="space-y-4">
        {activiteiten.map((a) => (
          <li key={a.slug}>
            <Link href={`/activiteiten/${a.slug}`}>
              <div className="p-4 border rounded hover:bg-gray-100 hover:text-yellow-500 transition">
                <h2 className="text-xl font-semibold">{a.titel}</h2>
                <p className="text-sm text-gray-500">{a.datum}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
