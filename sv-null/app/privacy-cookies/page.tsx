// File: app/privacy-cookies/page.tsx
'use client';

export default function PrivacyCookiesPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-4">Privacy & Cookies</h1>

      <section className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">AVG‑beleid</h2>
        <p className="text-gray-300">
          Ons volledige AVG‑beleid lees je bij de <a href="/verenigingsdocumenten" className="text-yellow-400 underline">Verenigingsdocumenten</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p className="text-gray-300">
          Deze Next.js‑site is volledig statisch en kent geen inlogfunctie. We plaatsen daarom <strong>geen tracking‑ of analytische cookies</strong>.
          Enige cookie die mogelijk wordt gebruikt, is een technisch noodzakelijke cookie van Next.js voor bijvoorbeeld afbeelding optimalisatie of preview‑functionaliteit—maar ook deze data wordt niet opgeslagen of doorgegeven.
        </p>
        <p className="text-gray-300">
          Mochten we ooit third‑party integraties toevoegen (zoals Google Analytics), dan zullen we gebruikers expliciet informeren en om toestemming vragen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-300">
          Voor vragen over privacy of cookies kun je contact opnemen via <a href="mailto:svnull@che.nl" className="text-yellow-400 underline">svnull@che.nl</a>.
        </p>
      </section>

      <p className="text-gray-500">
        Laatst gewijzigd op: 03/07/2025. De privacyverklaring (AVG) is ongewijzigd, alleen het cookiebeleid is aangepast aan de huidige statische website.
      </p>
    </main>
  );
}
