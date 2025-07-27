'use client';

import { useFormState } from 'react-dom';
import { contactVerzenden } from './actions';
import PageTitle from '@/components/PageTitle';

export default function ContactPage() {
  const [state, formAction] = useFormState(contactVerzenden, { success: false });

  return (
    <div className="px-4 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Contact"
        subtitle="Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op."
      />

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <a href="/privacy-cookies" className="underline text-yellow-400">Algemene Voorwaarden</a>.
      </p>

      {state.success && (
        <div className="mb-6 p-4 rounded bg-green-700 text-white border border-green-500">
          ✅ Bericht succesvol verzonden. We nemen snel contact met je op.
        </div>
      )}

      <form action={formAction} className="space-y-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="naam"
            placeholder="Naam"
            required
            className="w-full p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            name="email"
            type="email"
            placeholder="E-mailadres"
            required
            className="w-full p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <input
          name="onderwerp"
          placeholder="Onderwerp"
          required
          className="w-full p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <textarea
          name="bericht"
          placeholder="Je bericht..."
          rows={6}
          required
          className="w-full p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold py-3 rounded shadow mt-2"
        >
          Verstuur Bericht
        </button>
      </form>
    </div>
  );
}
