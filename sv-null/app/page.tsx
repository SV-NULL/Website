import { getHomePageContent } from '@/lib/content';

export default function HomePage() {
  const { title, subtitle, values, gallery, content } = getHomePageContent();

  return (
    <main className="min-h-screen px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h2 className="text-xl text-gray-600">{subtitle}</h2>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Onze Waardes</h3>
        <ul className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          {values.map((value, index) => (
            <li key={index} className="bg-yellow-400 p-4 rounded shadow">
              {value.title}
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section className="my-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Sfeerimpressie</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sfeerfoto ${index + 1}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      <section className="text-center text-gray-500 max-w-xl mx-auto mt-12">
        <p>{content}</p>
      </section>
    </main>
  );
}