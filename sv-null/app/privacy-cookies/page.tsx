"use client";

import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function PrivacyCookiesPage() {
  return (
    <main className="px-6 mx-auto space-y-8">
      <PageTitle
        title="Privacy & Cookies"
        subtitle="Lees hier ons privacybeleid en cookiegebruik."
      />

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Algemene voorwaarden
        </h2>
        <p className="text-gray-300">
          Wanneer je een formulier verstuurt — zoals bij “Word lid”, “Partner
          worden” of “Contact” — geef je toestemming om de ingevulde gegevens te
          gebruiken voor de afhandeling van je bericht of aanvraag.
        </p>
        <p className="text-gray-300">
          We gebruiken deze gegevens alleen voor dat doel en bewaren ze niet
          langer dan nodig. De informatie wordt niet gedeeld met derden, tenzij
          dit nodig is om je verzoek te verwerken.
        </p>
        <p className="text-gray-300">
          Bij het <b>Word lid‑formulier</b> valt dit onder ons{" "}
          <Link
            href="/verenigingsdocumenten"
            className="text-yellow-400 underline"
          >
            AVG‑beleid
          </Link>
          , waarin staat hoe we omgaan met gegevens van leden.
        </p>
        <p className="text-gray-300">
          Bij andere formulieren valt de verwerking <b>niet onder</b> dat
          ledenbeleid en blijven jouw gegevens beschermd volgens bovenstaande
          voorwaarden. Door het formulier te verzenden ga je akkoord met deze
          voorwaarden.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          AVG‑beleid
        </h2>
        <p className="text-gray-300">
          Ons volledige AVG‑beleid lees je bij de{" "}
          <Link
            href="/verenigingsdocumenten"
            className="text-yellow-400 underline"
          >
            Verenigingsdocumenten
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Cookies
        </h2>
        <p className="text-gray-300">
          Deze Next.js‑site is volledig statisch en kent geen inlogfunctie. We
          plaatsen daarom <strong>geen tracking‑ of analytische cookies</strong>
          . Enige cookie die mogelijk wordt gebruikt, is een technisch
          noodzakelijke cookie van Next.js voor bijvoorbeeld afbeelding
          optimalisatie of preview‑functionaliteit—maar ook deze data wordt niet
          opgeslagen of doorgegeven.
        </p>
        <p className="text-gray-300">
          Mochten we ooit third‑party integraties toevoegen (zoals Google
          Analytics), dan zullen we gebruikers expliciet informeren en om
          toestemming vragen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Contact
        </h2>
        <p className="text-gray-300">
          Voor vragen over privacy of cookies kun je contact opnemen via{" "}
          <Link href="/contact" className="text-yellow-400 underline">
            Contact
          </Link>
          .
        </p>
      </section>

      <p className="text-gray-500">
        Laatst gewijzigd op: 27/07/2025. De privacyverklaring (AVG) is
        ongewijzigd, het cookiebeleid is aangepast en algemene voorwaarden zijn
        toegevoegd.
      </p>
    </main>
  );
}
