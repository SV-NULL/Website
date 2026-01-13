import ThankYouLayout from "@/components/bedankt/ThankYouLayout";
import { getCommissieById } from "@/utils/commisie";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CommissieAanmeldenBedanktPage({ params }: Props) {
  const { slug } = await params;

  const commissie = getCommissieById(slug);
  if (!commissie) return notFound();

  const nextSteps = [
    `We hebben je aanmelding voor de ${commissie.title} ontvangen en zullen deze zo snel mogelijk beoordelen.`,
    "De commissievoorzitter neemt binnenkort contact met je op voor een eventuele kennismaking.",
    `Na goedkeuring word je officieel lid van de ${commissie.title}!`,
  ];

  return (
    <ThankYouLayout
      title="Bedankt voor je aanmelding!"
      subtitle={`Je aanmelding voor de ${commissie.title} is succesvol verzonden. We nemen binnenkort contact met je op.`}
      steps={nextSteps}
    />
  );
}
