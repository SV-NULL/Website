import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageContainer from "@/components/ui/page-container";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { type WebPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Privacy & Cookies",
  description:
    "Lees hier ons privacybeleid en cookiegebruik. Wij respecteren jouw privacy en zijn transparant over gegevensverzameling.",
});

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="flex items-center gap-3 mb-6">
      <div className="w-1 h-7 bg-yellow-400 rounded-full shrink-0" />
      <h2 className="text-2xl font-bold text-white">{children}</h2>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 shrink-0" />
      <span className="text-gray-300 leading-relaxed">{children}</span>
    </li>
  );
}

export default function PrivacyCookiesPage() {
  return (
    <PageContainer className="pb-24">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy & Cookies",
          description:
            "Lees hier ons privacybeleid en cookiegebruik. Wij respecteren jouw privacy en zijn transparant over gegevensverzameling.",
          url: `${siteConfig.url}/privacy-cookies`,
        }}
      />
      <PageTitle
        title="Privacy & Cookies"
        subtitle="Wij gaan zorgvuldig om met jouw gegevens en zijn transparant over hoe we dat doen."
      />

      {/* TOC */}
      <nav className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mb-12">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Op deze pagina
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { label: "Algemene voorwaarden", href: "#algemene-voorwaarden" },
            { label: "AVG-beleid", href: "#avg-beleid" },
            { label: "Cookies", href: "#cookies" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 py-1.5 group"
            >
              <div className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-yellow-400 transition-colors duration-200" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="space-y-16">
        {/* Algemene voorwaarden */}
        <section id="algemene-voorwaarden">
          <SectionHeading id="algemene-voorwaarden-heading">
            Algemene voorwaarden
          </SectionHeading>
          <div className="space-y-5 pl-4">
            <p className="text-gray-300 leading-relaxed">
              Wanneer je een formulier verstuurt, zoals bij{" "}
              <span className="text-white font-medium">Word lid</span>,{" "}
              <span className="text-white font-medium">Partner worden</span> of{" "}
              <span className="text-white font-medium">Contact</span>, geef je
              toestemming om de ingevulde gegevens te gebruiken voor de
              afhandeling van je bericht of aanvraag.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We gebruiken deze gegevens uitsluitend voor dat doel en bewaren ze
              niet langer dan nodig. De informatie wordt niet gedeeld met
              derden, tenzij dit strikt noodzakelijk is om je verzoek te
              verwerken.
            </p>
            <ul className="space-y-3 mt-4">
              <BulletItem>
                Bij het{" "}
                <span className="text-white font-medium">
                  Word lid-formulier
                </span>{" "}
                valt de verwerking onder ons{" "}
                <Link
                  href="/verenigingsdocumenten"
                  className="text-yellow-400 hover:text-yellow-300 underline"
                >
                  AVG-beleid
                </Link>
                , dat beschrijft hoe we omgaan met gegevens van leden.
              </BulletItem>
              <BulletItem>
                Bij andere formulieren (contact, partner, commissie-aanmelding)
                valt de verwerking niet onder dat ledenbeleid en worden jouw
                gegevens beschermd volgens bovenstaande voorwaarden.
              </BulletItem>
            </ul>
          </div>
        </section>

        {/* AVG-beleid */}
        <section id="avg-beleid">
          <SectionHeading id="avg-beleid-heading">AVG-beleid</SectionHeading>
          <div className="space-y-5 pl-4">
            <p className="text-gray-300 leading-relaxed">
              Ons volledige AVG-beleid bevat gedetailleerde informatie over hoe
              wij omgaan met persoonsgegevens van leden, inclusief je rechten
              als betrokkene en de procedures die we hanteren.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Het volledige document is te vinden op de pagina{" "}
              <Link
                href="/verenigingsdocumenten"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Verenigingsdocumenten
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section id="cookies">
          <SectionHeading id="cookies-heading">Cookies</SectionHeading>
          <div className="space-y-5 pl-4">
            <p className="text-gray-300 leading-relaxed">
              Deze website is volledig statisch en kent geen inlogfunctie. We
              plaatsen daarom geen tracking- of analytische cookies.
            </p>
            <ul className="space-y-3">
              <BulletItem>
                De enige cookie die mogelijk wordt gebruikt is een technisch
                noodzakelijke cookie van Next.js voor beeldoptimalisatie. Ook
                deze data wordt niet opgeslagen of doorgegeven aan derden.
              </BulletItem>
              <BulletItem>
                Mochten we ooit third-party integraties toevoegen (zoals Google
                Analytics), dan informeren we gebruikers expliciet en vragen we
                toestemming voordat er iets geplaatst wordt.
              </BulletItem>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <SectionHeading id="contact-heading">Contact</SectionHeading>
          <div className="space-y-5 pl-4">
            <p className="text-gray-300 leading-relaxed">
              Heb je vragen over ons privacybeleid, de verwerking van jouw
              gegevens, of wil je gebruik maken van je rechten (zoals inzage,
              correctie of verwijdering)? Neem dan contact met ons op via de{" "}
              <Link
                href="/contact"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                contactpagina
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      {/* Last modified */}
      <div className="mt-16 pt-8 border-t border-neutral-800 flex items-center gap-3 text-gray-500 text-sm">
        <Calendar className="w-4 h-4 shrink-0" />
        <p>
          Laatst gewijzigd op{" "}
          <span className="text-gray-400">27 juli 2025</span> — cookiebeleid
          aangepast, algemene voorwaarden toegevoegd.
        </p>
      </div>
    </PageContainer>
  );
}
