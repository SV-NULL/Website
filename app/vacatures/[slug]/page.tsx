import { JsonLd } from "@/components/features/json-ld/json-ld";
import MetadataRow from "@/components/features/vacancies/metadata-row";
import StickySidebar from "@/components/features/vacancies/sticky-sidebar";
import { getVacancies, getVacancyBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { type JobPosting } from "schema-dts";

export async function generateStaticParams() {
  const items = getVacancies();
  return items.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);
  if (!vacancy) return {};

  return constructMetadata({
    title: `${vacancy.title} bij ${vacancy.company}`,
    description: `Vacature voor ${vacancy.title} bij ${vacancy.company}. ${vacancy.type}, ${vacancy.hours}.`,
  });
}

export default async function VacatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] -mt-6">
      <JsonLd<JobPosting>
        data={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: vacancy.title,
          description: vacancy.content,
          datePosted: new Date().toISOString().split("T")[0],
          validThrough: new Date(new Date().setMonth(new Date().getMonth() + 3))
            .toISOString()
            .split("T")[0],
          employmentType: vacancy.type,
          hiringOrganization: {
            "@type": "Organization",
            name: vacancy.company,
            sameAs: vacancy.applyUrl,
            logo: vacancy.logo,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: vacancy.location,
              streetAddress: vacancy.companyAddress,
            },
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "EUR",
            value: {
              "@type": "QuantitativeValue",
              value: 0,
              unitText: "MONTH",
            },
          },
        }}
      />
      {/* Top Navigation */}
      <div className="bg-neutral-900 border-b border-neutral-800">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/vacatures"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Terug naar overzicht
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
        {/* Header Section */}
        <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl shadow-sm p-4 flex items-center justify-center">
                <Image
                  src={vacancy.logo}
                  alt={vacancy.company}
                  className="object-contain w-full h-full"
                  width={96}
                  height={96}
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="flex-shrink-0" />
                    {vacancy.company}
                  </span>
                  {vacancy.location && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="flex-shrink-0" />
                        {vacancy.location}
                      </span>
                    </>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {vacancy.title}
                </h1>
              </div>
            </div>
            {vacancy.applyUrl && (
              <a
                href={vacancy.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors shadow-sm cursor-pointer"
              >
                Solliciteer direct
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full" />
                Vacature omschrijving
              </h2>
              <Markdown
                components={{
                  h1: ({ ...props }) => (
                    <h1
                      className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0"
                      {...props}
                    />
                  ),
                  h2: ({ ...props }) => (
                    <h2
                      className="text-xl font-bold text-white mt-8 mb-4 border-b border-neutral-800 pb-2"
                      {...props}
                    />
                  ),
                  h3: ({ ...props }) => (
                    <h3
                      className="text-lg font-bold text-white mt-6 mb-3"
                      {...props}
                    />
                  ),
                  p: ({ ...props }) => (
                    <p
                      className="text-gray-300 leading-relaxed mb-4 last:mb-0"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul
                      className="list-disc pl-5 mb-4 text-gray-300 space-y-1"
                      {...props}
                    />
                  ),
                  ol: ({ ...props }) => (
                    <ol
                      className="list-decimal pl-5 mb-4 text-gray-300 space-y-1"
                      {...props}
                    />
                  ),
                  li: ({ ...props }) => <li className="pl-1" {...props} />,
                  strong: ({ ...props }) => (
                    <strong className="text-white font-semibold" {...props} />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2"
                      {...props}
                    />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="border-l-4 border-yellow-400/50 pl-4 py-1 my-4 italic text-gray-400 bg-neutral-950/50 rounded-r"
                      {...props}
                    />
                  ),
                  code: ({ ...props }) => (
                    <code
                      className="bg-neutral-950 px-1.5 py-0.5 rounded text-sm text-yellow-100 font-mono"
                      {...props}
                    />
                  ),
                }}
              >
                {vacancy.content}
              </Markdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <StickySidebar className="space-y-6">
              {/* Box 1: Vacature Samenvatting */}
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-neutral-800">
                  Samenvatting vacature
                </h3>
                <div className="space-y-1">
                  <MetadataRow
                    icon={Briefcase}
                    label="Dienstverband"
                    value={vacancy.type}
                  />
                  <MetadataRow
                    icon={Clock}
                    label="Uren per week"
                    value={vacancy.hours}
                  />
                  <MetadataRow
                    icon={GraduationCap}
                    label="Ervaring / Niveau"
                    value={vacancy.experience || vacancy.education}
                  />
                  <MetadataRow
                    icon={MapPin}
                    label="Locatie"
                    value={vacancy.location}
                  />
                </div>

                {/* Mobile apply button */}
                {vacancy.applyUrl && (
                  <a
                    href={vacancy.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors shadow-sm md:hidden"
                  >
                    Solliciteer direct
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Box 2: Over Bedrijf */}
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-neutral-800">
                  Over {vacancy.company}
                </h3>
                <div className="space-y-1">
                  {/* Website as metadata row if available */}
                  {vacancy.applyUrl && (
                    <MetadataRow
                      icon={Globe}
                      label="Website"
                      value={new URL(vacancy.applyUrl).hostname}
                    />
                  )}
                  <MetadataRow
                    icon={Phone}
                    label="Telefoon"
                    value={vacancy.companyPhone}
                  />
                  <MetadataRow
                    icon={Mail}
                    label="E-mail"
                    value={vacancy.companyEmail}
                  />
                  <MetadataRow
                    icon={Map}
                    label="Adres"
                    value={vacancy.companyAddress}
                  />
                </div>
              </div>
            </StickySidebar>
          </div>
        </div>
      </div>
    </div>
  );
}
