import { Building2, Lightbulb, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Building2,
    title: "Employer branding",
    description:
      "Laat zien wie je bent voordat studenten hun diploma halen. Wees top-of-mind bij de start van hun carrière.",
  },
  {
    icon: Users,
    title: "Collega's werven",
    description:
      "Plaats je vacatures in onze exclusieve Discord en op de site. Direct contact, zonder recruiters ertussen.",
  },
  {
    icon: Lightbulb,
    title: "Kennis en innovatie delen",
    description:
      "Organiseer een lunchlezing of hackathon en zie hoe onze studenten jullie uitdagingen aanpakken.",
  },
];

const PartnerBenefitsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Wat levert het jou op?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Als partner van NULL krijg je directe toegang tot de
            IT-professionals van morgen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefitsSection;
