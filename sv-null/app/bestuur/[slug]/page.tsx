import Members from "@/components/Members";
import PageTitle from "@/components/PageTitle";
import { getBestuurById } from "@/utils/bestuur";
import { notFound } from "next/navigation";

export default async function BestuurDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bestuur = getBestuurById(slug);
  if (!bestuur) return notFound();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title={bestuur.title}
        subtitle={"Studiejaar " + bestuur.subtitle}
      />

      <div
        className="max-w-4xl mx-auto mb-8"
        dangerouslySetInnerHTML={{ __html: bestuur.content }}
      />

      {bestuur.members && bestuur.members.length > 0 && (
        <div>
          <Members
            members={bestuur.members}
            imageUrlPrefix={`/images/bestuur/${bestuur.id}/`}
          />
        </div>
      )}
    </div>
  );
}
