import { JsonLd } from "@/components/features/json-ld/json-ld";
import StudyYearCard from "@/components/features/subjects/study-year-card";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getVakkenItems } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CollectionPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Vakken",
  description:
    "Bekijk alle vakken die je krijgt tijdens je studie, met toelichting en tips van (oud)leden.",
});

export default function VakkenPage() {
  const vakken = getVakkenItems();

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <JsonLd<CollectionPage>
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vakken",
          description:
            "Bekijk alle vakken die je krijgt tijdens je studie, met toelichting en tips van (oud)leden.",
          url: `${siteConfig.url}/vakken`,
        }}
      />
      <PageTitle
        title="Vakken"
        subtitle="Bekijk alle vakken die je krijgt tijdens je studie, met toelichting en tips van (oud)leden."
      />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-7 w-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white">
            Curriculum overzicht
          </h2>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 lg:p-10">
          <p className="text-gray-300 leading-relaxed mb-8">
            Hieronder vind je het volledige overzicht van het curriculum. De
            eerste twee jaar van de opleiding zijn breed opgezet, met vakken
            binnen de lijnen{" "}
            <span className="text-yellow-400 font-semibold">
              Development (DEV)
            </span>
            ,
            <span className="text-yellow-400 font-semibold">
              {" "}
              Business & IT (BIT)
            </span>{" "}
            en
            <span className="text-yellow-400 font-semibold">
              {" "}
              User Experience (UX)
            </span>
            , én een individuele stage. In het derde en vierde jaar ga je
            specialiseren en studeer je af binnen één van deze profielen.
          </p>

          <Link
            href="/images/vakken/curriculum.jpg"
            target="_blank"
            className="group block relative overflow-hidden rounded-xl border-2 border-neutral-700 hover:border-yellow-400/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <ExternalLink className="h-6 w-6" />
              </div>
            </div>
            <Image
              src="/images/vakken/curriculum.jpg"
              alt="Curriculum overzicht"
              className="w-full max-w-4xl mx-auto transition-transform duration-300 group-hover:scale-105"
              width={1117}
              height={789}
            />
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-7 w-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white">
            Vakken per studiejaar
          </h2>
        </div>

        <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8 mb-10">
          <p className="text-gray-300 leading-relaxed">
            Hier vind je per studiejaar een overzicht van de vakken die je kunt
            verwachten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vakken.map(({ slug, data }) => (
            <StudyYearCard
              key={slug}
              title={data.title}
              subtitle={data.subtitle}
              slug={slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
