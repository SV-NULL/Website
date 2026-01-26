import ThankYouLayout from "@/components/features/thank-you/thank-you-layout";
import { getCommitteeById } from "@/lib/content";
import { notFound } from "next/navigation";

import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const committee = getCommitteeById(slug);
  if (!committee) return {};

  return constructMetadata({
    title: `Bedankt voor je aanmelding - ${committee.title}`,
    description: `Bedankt voor je aanmelding voor de ${committee.title} bij s.v. NULL.`,
    noIndex: true,
  });
}

export default async function CommissieAanmeldenBedanktPage({ params }: Props) {
  const { slug } = await params;

  const committee = getCommitteeById(slug);
  if (!committee) return notFound();

  const nextSteps = [
    `We hebben je aanmelding voor de ${committee.title} ontvangen en zullen deze zo snel mogelijk beoordelen.`,
    "De commissievoorzitter neemt binnenkort contact met je op voor een eventuele kennismaking.",
    `Na goedkeuring word je officieel lid van de ${committee.title}!`,
  ];

  return (
    <ThankYouLayout
      title="Bedankt voor je aanmelding!"
      subtitle={`Je aanmelding voor de ${committee.title} is succesvol verzonden. We nemen binnenkort contact met je op.`}
      steps={nextSteps}
    />
  );
}
