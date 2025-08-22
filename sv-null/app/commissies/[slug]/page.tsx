import Members from "@/components/bestuur/members/Members";
import PageTitle from "@/components/PageTitle";
import { getCommissieById } from "@/utils/commisie";
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

      {commissie.members && commissie.members.length > 0 && (
        <Members
          members={commissie.members}
          imageUrlPrefix="/images/commissies/leden/"
        />
      )}
    </div>
  );
}
