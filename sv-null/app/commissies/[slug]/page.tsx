import Members from "@/components/Members";
import PageTitle from "@/components/PageTitle";
import { getCommissieById } from "@/utils/commisie";
import { notFound } from "next/navigation";

export default async function CommissieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const commissie = getCommissieById(slug);
  if (!commissie) return notFound();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle title={commissie.title} subtitle={commissie.content} />

      {commissie.members && commissie.members.length > 0 && (
        <div>
          <Members
            members={commissie.members}
            imageUrlPrefix="/images/commissies/leden/"
          />
        </div>
      )}
    </div>
  );
}
