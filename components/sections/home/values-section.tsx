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
      className="relative border-y border-neutral-800/60 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/60 to-neutral-900/90 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-80 bg-yellow-400/3 rounded-full blur-3xl will-change-transform pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-8 text-center">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center text-center p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl transition-colors duration-300 hover:scale-105 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.07)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none will-change-transform" />
              <div className="relative z-10">
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
