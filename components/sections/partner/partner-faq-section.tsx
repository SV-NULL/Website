"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Zit ik er meteen jaren aan vast?",
    answer:
      "Nee, we bieden ook contracten aan op jaarbasis. We bespreken de voorwaarden contractueel, zodat je precies weet waar je aan toe bent. Na afloop kijken we samen of we de samenwerking willen voortzetten.",
  },
  {
    question: "Wat als we geen activiteit kunnen verzinnen?",
    answer:
      "Geen zorgen! Wij hebben een vat vol ideeën en helpen je graag met het bedenken van een passende activiteit. Van technische workshops tot casual borrels - we denken graag mee over wat past bij jullie organisatie.",
  },
  {
    question: "Wanneer start het partnerschap?",
    answer:
      "Zodra we de samenwerking bevestigen, gaan we direct aan de slag. Het jaar loopt van september tot september, maar instappen gedurende het jaar is ook mogelijk.",
  },
  {
    question: "Kan ik eerst vrijblijvend kennismaken?",
    answer:
      "Absoluut! Vul het formulier hieronder in of stuur ons een mailtje. We plannen graag een vrijblijvend (digitaal) koffietje om de mogelijkheden te bespreken.",
  },
  {
    question: "Zijn er nog andere mogelijkheden?",
    answer:
      "Zeker! Heb je iets speciaals in gedachten dat niet in onze pakketten staat? Laat het ons weten, we denken graag mee over maatwerk oplossingen.",
  },
  {
    question: "Hoe bereiken jullie de studenten?",
    answer:
      "We hebben een Discord server, WhatsApp kanaal, Instagram account, en natuurlijk fysieke evenementen. Vacatures en partner-content worden gedeeld via al deze kanalen voor maximaal bereik.",
  },
];

const PartnerFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-gray-400">
            Nog twijfels? Hier beantwoorden we de meest gestelde vragen
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const panelId = `partner-faq-panel-${index}`;
            const buttonId = `partner-faq-button-${index}`;

            return (
              <div
                key={index}
                className="border border-neutral-800 rounded-xl overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  id={buttonId}
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-neutral-900 hover:bg-neutral-800/50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={panelId}
                >
                  <span className="font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerFAQSection;
