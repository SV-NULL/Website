import { BookOpen, RocketIcon, Users } from "lucide-react";

const VALUES = [
  {
    icon: (
      <Users className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
    ),
    title: "Networking",
    text: "Een hechte community opbouwen en waardevolle connecties leggen met mede-studenten en het werkveld.",
  },
  {
    icon: (
      <RocketIcon className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
    ),
    title: "Undertaking",
    text: "Samen projecten, activiteiten en evenementen neerzetten die energie geven en inspireren.",
  },
  {
    icon: (
      <BookOpen className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
    ),
    title: "Lifelong Learning",
    text: "Blijven groeien via workshops, lezingen en ervaringen die je ook later van pas komen.",
  },
];

const ValuesSection = () => {
  return (
    <section
      id="waarden"
      className="bg-neutral-900 border-y border-neutral-800 py-12"
    >
      <div className="max-w-6xl mx-auto px-8 py-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Een vereniging die ergens voor staat
        </h2>
        <p className="mb-20 text-gray-300 max-w-2xl mx-auto">
          NULL staat voor{" "}
          <span className="text-yellow-400 font-semibold">Networking</span>,{" "}
          <span className="text-yellow-400 font-semibold">Undertaking</span> en{" "}
          <span className="text-yellow-400 font-semibold">
            Lifelong Learning
          </span>
          .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center p-6 bg-neutral-900 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
