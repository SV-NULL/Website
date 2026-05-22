import CommitteeApplicationForm from "@/components/features/committees/form";
import { JsonLd } from "@/components/features/json-ld/json-ld";
import Members from "@/components/features/members/members";
import { siteConfig } from "@/config/site";
import { getCommitteeById } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { CheckCircle, ChevronLeft, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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
    description: committee.description ?? committee.content,
  });
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-7 bg-yellow-400 rounded-full shrink-0" />
      <h2 className="text-2xl font-bold text-white">{children}</h2>
    </div>
  );
}

export default async function CommissieDetailPage({ params }: Props) {
  const { slug } = await params;

  const committee = getCommitteeById(slug);
  if (!committee) return notFound();

  const memberCount = committee.members?.length ?? 0;

  return (
    <div className="container mx-auto px-8 max-w-5xl pb-24">
      <div className="pt-8">
        <Link
          href="/commissies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="font-medium">Terug naar alle commissies</span>
        </Link>
      </div>

      <JsonLd<Organization>
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: committee.title,
          description: committee.description ?? committee.content,
          url: `${siteConfig.url}/commissies/${slug}`,
          member: committee.members?.map((member) => ({
            "@type": "Person",
            name: member.person.name,
            jobTitle: member.role,
          })),
        }}
      />

      {/* Hero */}
      <header className="flex flex-col sm:flex-row items-start gap-8 mt-12 mb-16">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0">
          <Image
            src={committee.image.src}
            alt={committee.image.alt ?? committee.title}
            fill
            priority={committee.image.isPriority}
            className="object-contain p-4"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {committee.title}
            </h1>
            {memberCount > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                <Users className="w-3 h-3" />
                {memberCount} {memberCount === 1 ? "lid" : "leden"}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            {committee.content}
          </p>
        </div>
      </header>

      {/* Description */}
      {committee.description && (
        <section className="mb-12">
          <SectionHeading>Over de commissie</SectionHeading>
          <p className="text-gray-300 leading-relaxed text-lg pl-4">
            {committee.description}
          </p>
        </section>
      )}

      {/* Activities */}
      {committee.activities && committee.activities.length > 0 && (
        <section className="mb-12">
          <SectionHeading>Wat doen wij?</SectionHeading>
          <ul className="space-y-3 pl-4">
            {committee.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  {activity}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Members */}
      {memberCount > 0 && (
        <section className="mb-16">
          <SectionHeading>Leden</SectionHeading>
          <Members
            members={committee.members}
            imageUrlPrefix="/images/commissies/leden/"
          />
        </section>
      )}

      {/* Inline sign-up */}
      {committee.openForSignup && (
        <section
          id="aanmelden"
          className="relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <SectionHeading>Aanmelden</SectionHeading>
            <p className="text-gray-300 mb-2 pl-4">
              Wil je je aansluiten bij de {committee.title}? Vul het formulier
              in en we nemen zo snel mogelijk contact met je op.
            </p>
            <p className="text-sm text-gray-500 mb-6 pl-4">
              Met het versturen accepteer je onze{" "}
              <Link
                href="/privacy-cookies"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Algemene Voorwaarden
              </Link>
              .
            </p>
            <CommitteeApplicationForm committee={committee} />
          </div>
        </section>
      )}
    </div>
  );
}
