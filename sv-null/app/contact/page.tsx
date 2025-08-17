"use client";

import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { useFormState } from "react-dom";
import { contactVerzenden } from "./actions";

export default function ContactPage() {
  const [state, formAction] = useFormState(contactVerzenden, {
    success: false,
  });

  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Contact"
        subtitle="Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op."
      />

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>
        .
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
            className="w-full p-3 rounded border border-neutral-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            name="email"
            type="email"
            placeholder="E-mailadres"
            required
            className="w-full p-3 rounded border border-neutral-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <input
          name="onderwerp"
          placeholder="Onderwerp"
          required
          className="w-full p-3 rounded border border-neutral-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="bericht"
          placeholder="Je bericht..."
          rows={6}
          required
          className="w-full p-3 rounded border border-neutral-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <div className="pt-6 text-center">
          <button
            type="submit"
            className="px-16 py-3 rounded-xl font-semibold w-full md:w-fit
              bg-yellow-400 text-black border-2 border-yellow-400
              hover:bg-transparent hover:text-yellow-400
              active:bg-transparent active:text-yellow-400
              transition-all duration-300"
          >
            Verstuur bericht
          </button>
        </div>
      </form>
    </div>
  );
}
