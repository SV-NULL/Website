'use client';

import PageTitle from '@/components/PageTitle';
import { partnerAanvraagVerzenden } from './actions';

export default function PartnerWordenPage() {
  return (
    <div className="px-4 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Partner Worden"
        subtitle="Interesse in een samenwerking met SV. NULL? We horen graag van je!"
      />

      <p className="text-gray-300 mb-6">
        Wij staan open voor samenwerkingen met bedrijven die onze studenten willen inspireren, uitdagen en ondersteunen in hun ontwikkeling tot ICT-professionals. 
        Als partner van SV. NULL krijg je de kans om direct in contact te komen met gemotiveerde studenten van de opleiding HBO-ICT aan de CHE.
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-2">
        <li><span className="text-white font-semibold">Toegang tot jong talent:</span> presenteer je organisatie aan toekomstige ICT-professionals.</li>
        <li><span className="text-white font-semibold">Workshops & Lezingen:</span> geef inhoudelijke sessies en deel jouw expertise.</li>
        <li><span className="text-white font-semibold">Netwerk- en borrelmomenten:</span> ontmoet studenten in een informele setting.</li>
        <li><span className="text-white font-semibold">Zichtbaarheid:</span> vergroot je merkbekendheid binnen onze community.</li>
        <li><span className="text-white font-semibold">Samen bouwen aan de toekomst:</span> draag bij aan de ontwikkeling van ICT op de CHE.</li>
      </ul>

      <p className="text-gray-300 mb-6">
        Vul het formulier hieronder in en vertel ons meer over jouw organisatie en hoe jij een bijdrage wilt leveren. We nemen snel contact met je op!
      </p>

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <a href="/privacy-cookies" className="underline text-yellow-400">Algemene Voorwaarden</a>.
      </p>

      <form action={partnerAanvraagVerzenden} method="POST" className="space-y-4 mt-8">
        <input
          name="bedrijfsnaam"
          placeholder="Bedrijfsnaam"
          required
          className="w-full p-3 rounded border border-gray-700 bg-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          name="contactpersoon"
          placeholder="Contactpersoon"
          required
          className="w-full p-3 rounded border border-gray-700 bg-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          name="email"
          type="email"
          placeholder="E-mailadres"
          required
          className="w-full p-3 rounded border border-gray-700 bg-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          name="telefoon"
          type="tel"
          placeholder="Telefoonnummer"
          className="w-full p-3 rounded border border-gray-700 bg-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="bericht"
          placeholder="Vertel kort waarom je geïnteresseerd bent in een samenwerking"
          rows={4}
          required
          className="w-full p-3 rounded border border-gray-700 bg-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold py-3 rounded shadow mt-2"
        >
          Verstuur aanvraag
        </button>
      </form>
    </div>
  );
}
