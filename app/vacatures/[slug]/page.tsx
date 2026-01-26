import { JsonLd } from "@/components/features/json-ld/json-ld";
import StickySidebar from "@/components/features/vacancies/sticky-sidebar";
import { getVacatureBySlug, getVacatureItems } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  LucideIcon,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { JobPosting } from "schema-dts";

export async function generateStaticParams() {
  const items = getVacatureItems();
  return items.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vacature = getVacatureBySlug(slug);
  if (!vacature) return {};

  return constructMetadata({
    title: `${vacature.title} bij ${vacature.company}`,
    description: `Vacature voor ${vacature.title} bij ${vacature.company}. ${vacature.type}, ${vacature.hours}.`,
  });
}

export default async function VacatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vacature = getVacatureBySlug(slug);

  if (!vacature) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Vacature niet gevonden</h1>
        <Link href="/vacatures" className="text-yellow-500 hover:underline">
          Terug naar vacatures
        </Link>
      </div>
    );
  }
  const MetadataRow = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: LucideIcon;
    label: string;
    value?: string;
  }) => {
    if (!value) return null;
    return (
      <div className="flex items-start gap-4 py-3 border-b last:border-0 border-neutral-800">
        <div className="p-2 bg-yellow-400/10 text-yellow-400 rounded-lg">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">{label}</p>
          <p className="text-white font-medium">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] -mt-6">
      <JsonLd<JobPosting>
        data={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: vacature.title,
          description: vacature.content,
          datePosted: new Date().toISOString().split("T")[0],
          validThrough: new Date(new Date().setMonth(new Date().getMonth() + 3))
            .toISOString()
            .split("T")[0],
          employmentType: vacature.type,
          hiringOrganization: {
            "@type": "Organization",
            name: vacature.company,
            sameAs: vacature.applyUrl,
            logo: vacature.logo,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: vacature.location,
              streetAddress: vacature.companyAddress,
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
                  src={vacature.logo}
                  alt={vacature.company}
                  className="object-contain w-full h-full"
                  width={96}
                  height={96}
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="flex-shrink-0" />
                    {vacature.company}
                  </span>
                  {vacature.location && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="flex-shrink-0" />
                        {vacature.location}
                      </span>
                    </>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {vacature.title}
                </h1>
              </div>
            </div>
            {vacature.applyUrl && (
              <a
                href={vacature.applyUrl}
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
                {vacature.content}
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
                    value={vacature.type}
                  />
                  <MetadataRow
                    icon={Clock}
                    label="Uren per week"
                    value={vacature.hours}
                  />
                  <MetadataRow
                    icon={GraduationCap}
                    label="Ervaring / Niveau"
                    value={vacature.experience || vacature.education}
                  />
                  <MetadataRow
                    icon={MapPin}
                    label="Locatie"
                    value={vacature.location}
                  />
                </div>

                {/* Mobile apply button */}
                {vacature.applyUrl && (
                  <a
                    href={vacature.applyUrl}
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
                  Over {vacature.company}
                </h3>
                <div className="space-y-1">
                  {/* Website as metadata row if available */}
                  {vacature.applyUrl && (
                    <MetadataRow
                      icon={Globe}
                      label="Website"
                      value={new URL(vacature.applyUrl).hostname}
                    />
                  )}
                  <MetadataRow
                    icon={Phone}
                    label="Telefoon"
                    value={vacature.companyPhone}
                  />
                  <MetadataRow
                    icon={Mail}
                    label="E-mail"
                    value={vacature.companyEmail}
                  />
                  <MetadataRow
                    icon={Map}
                    label="Adres"
                    value={vacature.companyAddress}
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
