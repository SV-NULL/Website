import PageTitle from "@/components/PageTitle";
import { getVakkenItems } from "@/lib/content";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VakkenPage() {
  const vakken = getVakkenItems();

  return (
    <div className="container mx-auto px-4 lg:px-8">
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
            <Link
              key={slug}
              href={`/vakken/${slug}`}
              className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 hover:border-yellow-400/50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-400/5 group-hover:to-yellow-400/10 transition-colors duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 mb-3">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {data.subtitle}
                </p>

                <div className="mt-6 flex justify-center">
                  <div className="w-6 h-6 border-r-2 border-b-2 border-yellow-400/60 group-hover:border-yellow-400 transform rotate-45 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="mt-12">
        <h2 className="text-2xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Algemene Tips
        </h2>
        <p className="mt-4 text-gray-300">
          Hier vind je algemene tips en adviezen voor het succesvol afronden van je vakken.
          Vergeet niet om ook de specifieke tips per vak te bekijken!
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-300"> 
          <li>Plan je studie goed in en houd rekening met deadlines.</li>
          <li>Maak gebruik van de beschikbare bronnen en studiematerialen.</li>
          <li>Vraag hulp aan medestudenten of docenten als je ergens niet uitkomt.</li>
          <li>Neem deel aan studiegroepen voor extra ondersteuning.</li>
        </ul>
      </section> */}
    </div>
  );
}
