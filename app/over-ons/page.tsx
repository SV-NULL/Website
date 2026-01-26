import FutureGoalCard from "@/components/features/about-us/future-goal-card";
import InfoCard from "@/components/features/about-us/info-card";
import SectionWrapper from "@/components/features/about-us/section-wrapper";
import PageTitle from "@/components/ui/page-title";
import { BookOpen, Lightbulb, Target, Users } from "lucide-react";

const pageData = {
  mission: {
    title: "Missie",
    text: `Het verbinden van kennis en kunde van "ICT"-studenten aan de te Ede gevestigde Christelijk Hogeschool Ede (CHE) - met het bedrijfsleven om daarbij kennis en vaardigheden uit te wisselen waaronder ook het opdoen van werkervaring, en het verrichten van al wat hiermee verband houdt of daartoe bedordelijk kan zijn.`,
  },
  vision: {
    title: "Visie",
    text: `Studievereniging NULL streeft ernaar om studenten op het CHE te verbinden door hun liefde voor ICT. Bij NULL kan iedereen zichzelf zijn en zijn kennis delen met andere leden van de vereniging, zo bouwen ze sterke connecties en relaties met hun medestudenten en het bedrijfsleven.`,
  },
  history: {
    title: "Onze geschiedenis",
    subtitle: "Van Twijfels naar Trots: De Geboorte van SV. NULL",
    paragraphs: [
      `Onze geschiedenis begint elders, op een andere hogeschool, waar Twan de sfeer niet vond passen bij zijn visie op het studentenleven. Echter, één ding sprong eruit en liet een blijvende indruk bij hem achter - de levendige atmosfeer van hun studievereniging.`,
      `Met een missie om zelf een verschil te maken, heeft hij uiteindelijk de sprong naar de CHE gewaagd. Samen met Menno Jak, een medestudent die hij al kende en al een jaar op de opleiding zat, begon het idee om een studievereniging op te richten vorm te krijgen.`,
      `Met dit gemotiveerde team zijn we het traject ingegaan om de statuten te verkrijgen. Door onze toewijding, tijd en moeite hebben we een stevige basis opgebouwd waarop de toekomst van Studievereniging NULL kan voortbouwen.`,
      `Deze prachtige basis is het resultaat van collectieve inspanningen en enthousiasme. Het is een erfenis die we trots doorgeven aan de generaties die na ons komen. Studievereniging NULL is niet alleen een plek voor activiteiten, maar een gemeenschap die groeit op de fundamenten van passie, doorzettingsvermogen en de wil om iets bijzonders te creëren.`,
    ],
    foundersQuote: {
      title: "De oprichters",
      text: `Emma de Heer, Natalia Borowczak en Kurt Verweel waren de drijvende krachten die samen met Twan en Menno het initiatief omarmden en onze droom van een studievereniging deelden.`,
    },
  },
  future: {
    title: "Onze toekomst",
    subtitle: "Samen groeien, innoveren en verbinden",
    intro: `Met een sterke basis als fundament, kijkt Studievereniging NULL vol enthousiasme en vastberadenheid naar de toekomst. Ons doel is niet alleen om een vereniging te zijn, maar een levendige gemeenschap die blijft evolueren en bijdraagt aan de groei van elke HBO-ICT student aan de CHE.`,
    goals: [
      {
        title: "Innovatieve activiteiten",
        description:
          "We streven naar een gevarieerd en innovatief scala aan activiteiten die niet alleen vermakelijk zijn, maar ook educatief en inspirerend.",
      },
      {
        title: "Samenwerking met bedrijven",
        description:
          "Door partnerships te smeden, openen we deuren naar stages, netwerkmogelijkheden en toekomstige werkgevers voor onze leden.",
      },
      {
        title: "Community building",
        description:
          "Een bruisende community waar leden elkaar vinden voor informele bijeenkomsten, studiegroepen en gezellig samenzijn.",
      },
      {
        title: "Door studenten voor studenten",
        description:
          "We moedigen alle leden aan om actief deel te nemen, ideeën aan te dragen en leiderschapsrollen op zich te nemen.",
      },
    ],
  },
};

const icons = {
  mission: <Target className="h-8 w-8 text-yellow-400" />,
  vision: <Users className="h-8 w-8 text-yellow-400" />,
  history: <BookOpen className="h-8 w-8 text-yellow-400" />,
  future: <Lightbulb className="h-8 w-8 text-yellow-400" />,
};

export default function OverOnsPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageTitle
        title="Over ons"
        subtitle="Leer meer over de missie, visie, geschiedenis en toekomst van SV. NULL."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <InfoCard icon={icons.mission} title={pageData.mission.title}>
          {pageData.mission.text}
        </InfoCard>
        <InfoCard icon={icons.vision} title={pageData.vision.title}>
          {pageData.vision.text}
        </InfoCard>
      </div>

      <SectionWrapper
        icon={icons.history}
        title={pageData.history.title}
        gradientDirection="r"
      >
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
          {pageData.history.subtitle}
        </h3>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {pageData.history.paragraphs.slice(0, 2).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="bg-neutral-800/50 border-l-4 border-yellow-400 pl-6 py-4 my-6">
            <p className="font-semibold text-white mb-2">
              {pageData.history.foundersQuote.title}
            </p>
            <p>{pageData.history.foundersQuote.text}</p>
          </div>

          {pageData.history.paragraphs.slice(2).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        icon={icons.future}
        title={pageData.future.title}
        gradientDirection="l"
      >
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
          {pageData.future.subtitle}
        </h3>
        <p className="text-gray-300 leading-relaxed mb-8">
          {pageData.future.intro}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {pageData.future.goals.map((goal) => (
            <FutureGoalCard
              key={goal.title}
              title={goal.title}
              description={goal.description}
            />
          ))}
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
      </SectionWrapper>
    </div>
  );
}
