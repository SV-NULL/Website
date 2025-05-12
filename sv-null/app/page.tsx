import { getHomePageContent, getUpcomingCalendarItems } from "@/lib/content";
import CTA from "@/app/components/CTA";
import DropdownList from "@/app/components/DropdownList";

export default function HomePage() {
  const home = getHomePageContent();
  const upcomingActivities = getUpcomingCalendarItems(2);

  return (
    <main className="space-y-16 px-4 py-8 max-w-5xl mx-auto">

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">{home.title}</h1>
        <p className="text-xl mt-4">{home.subtitle}</p>
        <div className="mt-6 text-lg font-semibold">
          {/* Simpele roterende woorden placeholder */}
          <span className="text-gray-500 italic">
            {home.rotatingWords.join(" • ")}
          </span>
        </div>
      </section>

      {/* Onze waardes */}
      <section>
        <h2 className="text-3xl font-bold mb-4">{home.valuesTitle}</h2>
        <p className="mb-6">{home.valuesText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {home.values.map((value, index) => (
            <div key={index} className="p-4 border rounded text-center">
              <div className="text-4xl mb-2">{value.icon}</div>
              <h3 className="font-semibold">{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Galerij */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Sfeerimpressie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {home.gallery.map((img, idx) => (
            <figure key={idx} className="text-center">
              <img
                src={img.src}
                alt={img.caption}
                className="rounded shadow w-full h-auto"
              />
              <figcaption className="text-sm mt-2 text-gray-600">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Aankomende activiteiten */}
      <DropdownList
        title="Kalender"
        items={upcomingActivities}
        footer={
        <div className="mt-6 text-center">
          <a
            href="/kalender"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Bekijk alle activiteiten
          </a>
        </div>
        }
      />

      {/* CTA - Waarom lid worden */}
      <CTA
        title={home.ctaTitle}
        text={home.ctaText}
        button={home.ctaButton}
      />
    </main>
  );
}