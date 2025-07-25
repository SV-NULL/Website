import DropdownList from '@/app/components/DropdownList';
import CTA from '@/app/components/CTA';
import { getPartnerItems, getUpcomingCalendarItems } from '@/lib/content';
import Gallery, { GalleryImage } from '../app/components/Gallery';
import { Users, RocketIcon, BookOpen } from 'lucide-react';

export default function HomePage() {
  const upcomingActivities = getUpcomingCalendarItems(2);

  const gallery: GalleryImage[] = [
    { src: '/images/home/frankrijk-2023.jpg', alt: 'Frankrijkreis 2023', caption: 'Frankrijkreis 2023' },
    { src: '/images/home/chipsoft-2024.jpg', alt: 'Chipsoft Pubquiz 2024', caption: 'Chipsoft Pubquiz 2024' },
    { src: '/images/home/4ps-2022.jpg',    alt: '4PS Wiskeyproeverij 2023', caption: '4PS Wiskeyproeverij 2023' },
  ];

  const partners = getPartnerItems();

  return (
    <main className="space-y-16 py-8">

      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">SV. NULL</h1>
        <p className="text-xl mt-4">De studievereniging voor HBO-ICT op de CHE</p>
        <div className="mt-6 text-lg font-semibold text-yellow-400 italic">
          Community • Connectie met bedrijven • Borrels • Lezingen • Reizen
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Onze waardes</h2>
        <p className="mb-6 text-gray-300">
          Als studievereniging staan wij voor verbinding, groei en ondernemerschap.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Users className="w-16 h-16 text-yellow-400" />, label: 'Networking' },
            { icon: <RocketIcon className="w-16 h-16 text-yellow-400" />, label: 'Undertaking' },
            { icon: <BookOpen className="w-16 h-16 text-yellow-400" />, label: 'Lifelong Learning' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="text-center py-6"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-gray-800">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {label.split(' ').map((word, wi) => (
                  <span key={wi}>
                    {word.split('').map((ch, ci) => {
                      // eerste letter van élk woord geel
                      const isFirst = ci === 0;
                      return isFirst
                        ? <span key={ci} className="text-yellow-400 text-2xl">{ch}</span>
                        : ch;
                    })}
                    {wi < label.split(' ').length - 1 && ' '}
                  </span>
                ))}
              </h3>
            </div>
          ))}
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
        button={{ text: "Word lid van NULL", href: "/lid-worden" }}
      />

      {/* Nieuwe sectie: Onze partners */}
      <section className="py-12 text-white">
        <h2 className="text-3xl font-bold mb-6">Onze partners</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="p-4 rounded-lg text-center border border-gray-700">
              <img src={partner.image} alt={partner.title} className="mx-auto mb-4 h-16" />
            </div>
          ))}
        </div>
        </section>
        {/* CTA: partner worden */}
          <CTA
            title="Ook partner worden?"
            text="Sluit je aan bij SV. NULL en vergroot jouw zichtbaarheid bij HBO-ICT studenten."
            button={{ text: 'Word partner', href: '/partner-worden' }}
          />

    </main>
  );
}