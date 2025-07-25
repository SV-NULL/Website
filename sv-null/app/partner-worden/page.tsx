'use client';

import { partnerAanvraagVerzenden } from './actions';

export default function PartnerWordenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-4">Partner worden</h1>
      <p className="text-gray-300 mb-6">
        Wil je samenwerken met studievereniging NULL? We staan open voor
        partnerschappen met bedrijven die studenten willen inspireren, motiveren
        of ondersteunen in hun ICT-ontwikkeling. Vul onderstaand formulier in en we nemen spoedig contact met je op.
      </p>

      <form action={partnerAanvraagVerzenden} method="POST" className="space-y-4">
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
