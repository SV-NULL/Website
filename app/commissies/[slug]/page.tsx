import { JsonLd } from "@/components/features/json-ld/json-ld";
import Members from "@/components/features/members/members";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getCommitteeById } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Organization } from "schema-dts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const committee = getCommitteeById(slug);
  if (!committee) return {};

  return constructMetadata({
    title: committee.title,
    description: committee.content,
  });
}

export default async function CommissieDetailPage({ params }: Props) {
  const { slug } = await params;

  const committee = getCommitteeById(slug);
  if (!committee) return notFound();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <JsonLd<Organization>
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: committee.title,
          description: committee.content,
          url: `${siteConfig.url}/commissies/${slug}`,
          member: committee.members?.map((member) => ({
            "@type": "Person",
            name: member.person.name,
            jobTitle: member.role,
          })),
        }}
      />
      <PageTitle title={committee.title} subtitle={committee.content} />

      {/* Aanmelden CTA */}
      <section className="bg-neutral-900 mt-16 p-6 rounded text-center space-y-2 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-yellow-400">
          Wil je lid worden van deze commissie?
        </h3>
        <p className="text-gray-300">
          Sluit je aan bij de {committee.title} en help mee met het organiseren
          van toffe activiteiten!
        </p>
        <Link
          href={`/commissies/${committee.id}/aanmelden`}
          className="mt-2 inline-block px-6 py-2.5 rounded-xl font-medium
                    bg-yellow-400 text-black border-2 border-yellow-400
                    hover:bg-transparent hover:text-yellow-400
                    active:bg-transparent active:text-yellow-400
                    transition-all duration-300"
        >
          Meld je aan →
        </Link>
      </section>

      {committee.members && committee.members.length > 0 && (
        <Members
          members={committee.members}
          imageUrlPrefix="/images/commissies/leden/"
        />
      )}
    </div>
  );
}
