import DropdownList from '@/app/components/DropdownList';
import CTA from '@/app/components/CTA';
import { getUpcomingCalendarItems } from '@/lib/content';
import Gallery, { GalleryImage } from '../app/components/Gallery';

export default function HomePage() {
  const upcomingActivities = getUpcomingCalendarItems(2);

    const gallery: GalleryImage[] = [
    { src: '/images/home/frankrijk-2023.jpg', alt: 'Frankrijkreis 2023', caption: 'Frankrijkreis 2023' },
    { src: '/images/home/chipsoft-2024.jpg', alt: 'Chipsoft Pubquiz 2024', caption: 'Chipsoft Pubquiz 2024' },
    { src: '/images/home/4ps-2022.jpg',    alt: '4PS Wiskeyproeverij 2023', caption: '4PS Wiskeyproeverij 2023' },
  ];

  return (
    <main className="space-y-16 py-8">

      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">SV. NULL</h1>
        <p className="text-xl mt-4">De studievereniging voor HBO-ICT op de CHE</p>
        <div className="mt-6 text-lg font-semibold text-gray-500 italic">
          Community • Connectie met bedrijven • Borrels • Lezingen • Reizen
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Onze waardes</h2>
        <p className="mb-6">Als studievereniging staan wij voor verbinding, groei en ondernemerschap.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded text-center">
            <div className="text-4xl mb-2">🤝</div><h3 className="font-semibold">Networking</h3>
          </div>
          <div className="p-4 border rounded text-center">
            <div className="text-4xl mb-2">🚀</div><h3 className="font-semibold">Undertaking</h3>
          </div>
          <div className="p-4 border rounded text-center">
            <div className="text-4xl mb-2">📚</div><h3 className="font-semibold">Lifelong Learning</h3>
          </div>
        </div>
      </section>

      <DropdownList
        title="Aankomende activiteiten"
        items={upcomingActivities}
        footer={
            <div className="text-center">
              <a
                href="/kalender"
                className="inline-block bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-300"
              >
                Bekijk alle activiteiten
              </a>
            </div>
        }
      />

      {/* Sfeerimpressie als gallery */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Sfeerimpressie</h2>
        {/* Gebruik hier de client-Gallery */}
        <Gallery images={gallery} />
      </section>

      {/* Waarom lid worden */}
      <CTA
        title="Waarom lid worden?"
        text="Community, connecties met bedrijven, borrels, leerzame activiteiten, commissies en meer!"
        button={{ text: "Word lid van s.v.NULL", href: "/lid-worden" }}
      />

    </main>
  );
}