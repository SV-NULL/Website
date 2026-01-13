"use client";

import PageTitle from "@/components/PageTitle";
import {
  Calendar,
  Cookie,
  Eye,
  FileText,
  Lock,
  Mail,
  Shield,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyCookiesPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageTitle
        title="Privacy & Cookies"
        subtitle="Lees hier ons privacybeleid en cookiegebruik. Wij respecteren jouw privacy en zijn transparant over gegevensverzameling."
      />

      {/* Table of Contents */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-6 w-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">Overzicht</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Algemene voorwaarden",
              icon: "📋",
              href: "#algemene-voorwaarden",
            },
            { title: "AVG-beleid", icon: "🛡️", href: "#avg-beleid" },
            { title: "Cookies", icon: "🍪", href: "#cookies" },
            { title: "Contact", icon: "📞", href: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200 p-3 rounded-lg hover:bg-neutral-800/30"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Privacy Policy Sections */}
      <div className="space-y-8 mb-16">
        {/* Algemene voorwaarden */}
        <section
          id="algemene-voorwaarden"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Algemene voorwaarden
            </h2>
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Toestemmingsverklaring
              </h3>
              <p>
                Wanneer je een formulier verstuurt — zoals bij{" "}
                <span className="text-white font-semibold">
                  &quot;Word lid&quot;
                </span>
                ,{" "}
                <span className="text-white font-semibold">
                  &quot;Partner worden&quot;
                </span>{" "}
                of{" "}
                <span className="text-white font-semibold">
                  &quot;Contact&quot;
                </span>{" "}
                — geef je toestemming om de ingevulde gegevens te gebruiken voor
                de afhandeling van je bericht of aanvraag.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-yellow-400" />
                  Gegevensdoelen
                </h4>
                <p className="text-sm">
                  We gebruiken deze gegevens{" "}
                  <span className="text-yellow-400 font-semibold">
                    alleen voor dat doel
                  </span>{" "}
                  en bewaren ze niet langer dan nodig.
                </p>
              </div>

              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-yellow-400" />
                  Beveiliging
                </h4>
                <p className="text-sm">
                  De informatie wordt{" "}
                  <span className="text-yellow-400 font-semibold">
                    niet gedeeld met derden
                  </span>
                  , tenzij dit nodig is om je verzoek te verwerken.
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/20 border border-neutral-700/50 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">
                Onderscheid in formulieren
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Bij het{" "}
                    <span className="text-yellow-400 font-semibold">
                      Word lid‑formulier
                    </span>{" "}
                    valt dit onder ons{" "}
                    <Link
                      href="/verenigingsdocumenten"
                      className="text-yellow-400 underline hover:text-yellow-300"
                    >
                      AVG‑beleid
                    </Link>
                    , waarin staat hoe we omgaan met gegevens van leden.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Bij andere formulieren valt de verwerking{" "}
                    <span className="text-white font-semibold">niet onder</span>{" "}
                    dat ledenbeleid en blijven jouw gegevens beschermd volgens
                    bovenstaande voorwaarden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AVG-beleid */}
        <section
          id="avg-beleid"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">AVG‑beleid</h2>
          </div>
          <div className="bg-gradient-to-r from-yellow-400/10 to-neutral-800/30 border border-yellow-400/30 rounded-lg p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FileText className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">
                Volledige AVG-documentatie
              </h3>
            </div>
            <div className="text-center space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Ons volledige AVG‑beleid bevat gedetailleerde informatie over
                hoe wij omgaan met persoonsgegevens van leden, inclusief rechten
                en procedures.
              </p>
              <Link
                href="/verenigingsdocumenten"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                <FileText className="h-5 w-5" />
                Lees het volledige AVG-beleid
              </Link>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section
          id="cookies"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">Cookies</h2>
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                ✅ Privacy-vriendelijk
              </h3>
              <p>
                Deze website is volledig statisch en kent geen inlogfunctie. We
                plaatsen daarom{" "}
                <span className="text-white font-semibold">
                  geen tracking‑ of analytische cookies
                </span>
                .
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">
                  🔧 Technische cookies
                </h4>
                <p className="text-sm">
                  Enige cookie die mogelijk wordt gebruikt, is een technisch
                  noodzakelijke cookie van de website voor bijvoorbeeld
                  afbeelding optimalisatie — maar ook deze data wordt niet
                  opgeslagen of doorgegeven.
                </p>
              </div>

              <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">
                  🔮 Toekomstige wijzigingen
                </h4>
                <p className="text-sm">
                  Mochten we ooit third‑party integraties toevoegen (zoals
                  Google Analytics), dan zullen we gebruikers{" "}
                  <span className="text-yellow-400 font-semibold">
                    expliciet informeren
                  </span>{" "}
                  en om toestemming vragen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">Contact</h2>
          </div>
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-lg p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  Vragen over privacy?
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Voor vragen over privacy, cookies, of gegevensbescherming kun je
                altijd contact met ons opnemen.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Neem contact op
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Last modified notice */}
      <div className="bg-gradient-to-r from-neutral-900/30 to-neutral-800/30 border border-neutral-700 rounded-xl p-6 lg:p-8">
        <div className="flex items-center justify-center gap-3">
          <Calendar className="h-5 w-5 text-gray-500" />
          <p className="text-gray-500 text-center">
            Laatst gewijzigd op:{" "}
            <span className="text-gray-400 font-semibold">27 juli 2025</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            <span className="text-sm">
              De privacyverklaring (AVG) is ongewijzigd, het cookiebeleid is
              aangepast en algemene voorwaarden zijn toegevoegd.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
