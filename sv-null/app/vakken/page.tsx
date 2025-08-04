import PageTitle from "@/components/PageTitle";
import { getVakkenItems } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export default function VakkenPage() {
  const vakken = getVakkenItems();

  return (
    <div>
      <PageTitle
        title="Vakken"
        subtitle="Bekijk alle vakken die je krijgt tijdens je studie, met toelichting en tips van (oud)leden."
      />

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Curriculum overzicht
        </h2>
        <p>
          Hieronder vind je het volledige overzicht van het curriculum. De
          eerste twee jaar van de opleiding zijn breed opgezet, met vakken
          binnen de lijnen Development (DEV), Business & IT (BIT) en User
          Experience (UX), én een individuele stage. In het derde en vierde jaar
          ga je specialiseren en studeer je af binnen één van deze profielen:
          DEV, BIT of UX.
        </p>
        <a href="/images/vakken/curriculum.jpg" target="_blank">
          <Image
            src="/images/vakken/curriculum.jpg"
            alt="Vakken overzicht"
            className="w-full max-w-2xl mx-auto mt-6 rounded-lg shadow-md hover:opacity-80 transition"
            width={1117}
            height={789}
          />
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Vakken per studiejaar
        </h2>
        <p>
          Hier vind per studiejaar een overzicht van de vakken die je kunt
          verwachten.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {vakken.map(({ slug, data }) => (
            <Link
              key={slug}
              href={`/vakken/${slug}`}
              className="group bg-gray-900 hover:bg-yellow-400 transition-colors duration-300 rounded-xl p-8 text-center shadow-md"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 group-hover:text-black">
                {data.title}
              </h2>
              <p className="text-sm mt-2 text-white group-hover:text-black">
                {data.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
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
