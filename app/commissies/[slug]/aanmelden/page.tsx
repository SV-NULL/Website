import CommissieApplicationForm from "@/components/commissie/form";
import PageTitle from "@/components/PageTitle";
import { getCommissieById } from "@/utils/commisie";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CommissieAanmeldenPage({ params }: Props) {
  const { slug } = await params;

  const commissie = getCommissieById(slug);
  if (!commissie) return notFound();

  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <PageTitle
        title={`Aanmelden voor ${commissie.title}`}
        subtitle={`Wil je je aansluiten bij de ${commissie.title}? Vul hieronder het aanmeldformulier in en we nemen zo snel mogelijk contact met je op.`}
      />

      <div className="mb-6 text-gray-300">
        <h3 className="text-lg font-semibold mb-3 text-white">
          Over deze commissie:
        </h3>
        <p className="mb-4">{commissie.content}</p>

        <Link
          href={`/commissies/${commissie.id}`}
          className="text-yellow-400 hover:text-yellow-300 underline"
        >
          Meer informatie over de {commissie.title} →
        </Link>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>
        .
      </p>

      <CommissieApplicationForm commissie={commissie} />
    </div>
  );
}
