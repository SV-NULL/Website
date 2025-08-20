import PageTitle from "@/components/PageTitle";
import { BookOpen, Lightbulb, Target, Users } from "lucide-react";

export default function OverOnsPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageTitle
        title="Over ons"
        subtitle="Leer meer over de missie, visie, geschiedenis en toekomst van SV. NULL."
      />

      {/* Missie & Visie Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <section className="group bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-300 hover:border-yellow-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-yellow-400">Missie</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            et verbinden van kennis en kunde van &quot;ICT&quot;-studenten aan
            de te Ede gevestigde Christelijk Hogeschool Ede (CHE) - met het
            bedrijfsleven om daarbij kennis en vaardigheden uit te wisselen
            waaronder ook het opdoen van werkervaring, en het verrichten van al
            wat hiermee verband houdt of daartoe bedordelijk kan zijn.
          </p>
        </section>

        <section className="group bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-300 hover:border-yellow-400/20">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-yellow-400">Visie</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Studievereniging NULL streeft ernaar om studenten op het CHE te
            verbinden door hun liefde voor ICT. Bij NULL kan iedereen zichzelf
            zijn en zijn kennis delen met andere leden van de vereniging, zo
            bouwen ze sterke connecties en relaties met hun medestudenten en het
            bedrijfsleven.
          </p>
        </section>
      </div>

      {/* Geschiedenis Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-8 w-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Onze geschiedenis</h2>
        </div>

        <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            Van Twijfels naar Trots: De Geboorte van SV. NULL
          </h3>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Onze geschiedenis begint elders, op een andere hogeschool, waar
              Twan de sfeer niet vond passen bij zijn visie op het
              studentenleven. Echter, één ding sprong eruit en liet een
              blijvende indruk bij hem achter - de levendige atmosfeer van hun
              studievereniging.
            </p>

            <p>
              Met een missie om zelf een verschil te maken, heeft hij
              uiteindelijk de sprong naar de CHE gewaagd. Samen met Menno Jak,
              een medestudent die hij al kende en al een jaar op de opleiding
              zat, begon het idee om een studievereniging op te richten vorm te
              krijgen.
            </p>

            <div className="bg-neutral-800/50 border-l-4 border-yellow-400 pl-6 py-4 my-6">
              <p className="font-semibold text-white mb-2">De oprichters</p>
              <p>
                Emma de Heer, Natalia Borowczak en Kurt Verweel waren de
                drijvende krachten die samen met Twan en Menno het initiatief
                omarmden en onze droom van een studievereniging deelden.
              </p>
            </div>

            <p>
              Met dit gemotiveerde team zijn we het traject ingegaan om de
              statuten te verkrijgen. Door onze toewijding, tijd en moeite
              hebben we een stevige basis opgebouwd waarop de toekomst van
              Studievereniging NULL kan voortbouwen.
            </p>

            <p>
              Deze prachtige basis is het resultaat van collectieve inspanningen
              en enthousiasme. Het is een erfenis die we trots doorgeven aan de
              generaties die na ons komen. Studievereniging NULL is niet alleen
              een plek voor activiteiten, maar een gemeenschap die groeit op de
              fundamenten van passie, doorzettingsvermogen en de wil om iets
              bijzonders te creëren.
            </p>
          </div>
        </div>
      </section>

      {/* Toekomst Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="h-8 w-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Onze toekomst</h2>
        </div>

        <div className="bg-gradient-to-l from-neutral-900/50 to-neutral-800/30 border border-neutral-700 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            Samen groeien, innoveren en verbinden
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            Met een sterke basis als fundament, kijkt Studievereniging NULL vol
            enthousiasme en vastberadenheid naar de toekomst. Ons doel is niet
            alleen om een vereniging te zijn, maar een levendige gemeenschap die
            blijft evolueren en bijdraagt aan de groei van elke HBO-ICT student
            aan de CHE.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/30 border border-neutral-600 rounded-lg p-6">
              <h4 className="font-bold text-yellow-400 mb-3">
                Innovatieve activiteiten
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We streven naar een gevarieerd en innovatief scala aan
                activiteiten die niet alleen vermakelijk zijn, maar ook
                educatief en inspirerend.
              </p>
            </div>

            <div className="bg-neutral-800/30 border border-neutral-600 rounded-lg p-6">
              <h4 className="font-bold text-yellow-400 mb-3">
                Samenwerking met bedrijven
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Door partnerships te smeden, openen we deuren naar stages,
                netwerkmogelijkheden en toekomstige werkgevers voor onze leden.
              </p>
            </div>

            <div className="bg-neutral-800/30 border border-neutral-600 rounded-lg p-6">
              <h4 className="font-bold text-yellow-400 mb-3">
                Community building
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Een bruisende community waar leden elkaar vinden voor informele
                bijeenkomsten, studiegroepen en gezellig samenzijn.
              </p>
            </div>

            <div className="bg-neutral-800/30 border border-neutral-600 rounded-lg p-6">
              <h4 className="font-bold text-yellow-400 mb-3">
                Door studenten voor studenten
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We moedigen alle leden aan om actief deel te nemen, ideeën aan
                te dragen en leiderschapsrollen op zich te nemen.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-600">
            <p className="text-gray-300 leading-relaxed text-center">
              <span className="font-semibold text-white">
                Welkom bij de toekomst van Studievereniging NULL!
              </span>
              <br className="hidden sm:block" />
              Samen creëren we een vereniging die reflecteert wie we zijn én wie
              we willen worden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
