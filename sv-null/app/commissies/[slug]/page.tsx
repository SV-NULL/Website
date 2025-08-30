import Members from "@/components/bestuur/members/Members";
import PageTitle from "@/components/PageTitle";
import { getCommissieById } from "@/utils/commisie";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CommissieDetailPage({ params }: Props) {
  const { slug } = await params;

  const commissie = getCommissieById(slug);
  if (!commissie) return notFound();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle title={commissie.title} subtitle={commissie.content} />

      {/* Aanmelden CTA */}
      <section className="bg-neutral-900 mt-16 p-6 rounded text-center space-y-2 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-yellow-400">
          Wil je lid worden van deze commissie?
        </h3>
        <p className="text-gray-300">
          Sluit je aan bij de {commissie.title} en help mee met het organiseren
          van toffe activiteiten!
        </p>
        <Link
          href={`/commissies/${commissie.id}/aanmelden`}
          className="mt-2 inline-block px-6 py-2.5 rounded-xl font-medium
                    bg-yellow-400 text-black border-2 border-yellow-400
                    hover:bg-transparent hover:text-yellow-400
                    active:bg-transparent active:text-yellow-400
                    transition-all duration-300"
        >
          Meld je aan →
        </Link>
      </section>

      {commissie.members && commissie.members.length > 0 && (
        <Members
          members={commissie.members}
          imageUrlPrefix="/images/commissies/leden/"
        />
      )}
    </div>
  );
}
