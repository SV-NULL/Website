"use client";

import { AlertTriangle, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const PACKAGES = [
  {
    name: "Klein",
    value: "klein",
    price: "€400",
    period: "per jaar",
    features: [
      "Logo op onze website (met link)",
      "Vermelding in jaarlijkse bedankpost op Instagram",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Middel",
    value: "middel",
    price: "€750",
    period: "per jaar",
    features: [
      "Alles uit Klein",
      "1 activiteit per jaar (workshop, borrel of lunchlezing)",
      "2 vacatures per jaar plaatsen (website + Discord/Instagram story)",
      "Logo op 1 grote activiteitsposter",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Groot",
    value: "groot",
    price: "€1100",
    period: "per jaar",
    features: [
      "Alles uit Middel",
      "1 extra activiteit per jaar (max. 1 per semester)",
      "Onbeperkt vacatures plaatsen (mits relevant)",
      "1 extra Instagram post per jaar",
      "Bedrijfspitch van 5 minuten tijdens een groot evenement",
    ],
    highlighted: true,
    badge: "Meest gekozen",
  },
  {
    name: "Hoofdsponsor",
    value: "hoofdsponsor",
    price: "€1800",
    period: "per jaar",
    features: [
      "Alles uit Groot",
      'Exclusieve titel: "Hoofdsponsor van Studievereniging NULL"',
      "Logo op alle posters en flyers",
      "Prominente plek op de website (bovenaan, groter logo)",
      "3 Instagram posts per jaar",
      "Vermelding en kort woordje tijdens ALV of introductie",
      "Mogelijkheid tot jaarlijkse hoofdsponsor-activiteit",
    ],
    highlighted: false,
    badge: null,
    warning: "Let op: slechts 1 plek beschikbaar per jaar!",
  },
];

const PartnerPackagesSection = () => {
  const router = useRouter();

  const handlePackageClick = (packageValue: string) => {
    // Update URL with package parameter and scroll to contact
    router.push(`/partner-worden?pakket=${packageValue}#contact`, {
      scroll: false,
    });

    // Smooth scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="pakketten" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Onze sponsorpakketten
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kies het pakket dat bij jouw organisatie past. Elk pakket biedt
            waardevolle exposure en connectie met onze studenten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-yellow-400/10 to-neutral-900 border-yellow-400 scale-[1.02] lg:scale-105"
                  : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                  {pkg.badge}
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-sm">/{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.warning && (
                <div className="flex items-center gap-2 p-3 bg-yellow-400/10 rounded-lg mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-yellow-400 text-sm font-medium">
                    {pkg.warning}
                  </span>
                </div>
              )}

              <button
                onClick={() => handlePackageClick(pkg.value)}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  pkg.highlighted
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                Kies {pkg.name.toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerPackagesSection;
