import Typewriter from "@/components/ui/typewriter";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const WORDS = [
  "HBO-ICT op de CHE",
  "Community",
  "Connectie met bedrijven",
  "Borrels",
  "Leerzame activiteiten",
  "Commissies",
  "Reizen",
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 -mt-32">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Wij zijn studievereniging <br />
          <span className="text-yellow-400">NULL</span>
        </h1>

        <div className="mt-6 inline-block overflow-hidden">
          <Typewriter textBefore="Dé studievereniging voor" words={WORDS} />
        </div>
      </div>

      <Link
        href="#waarden"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center space-y-1"
      >
        <ChevronDown className="w-7 h-7 text-yellow-400 animate-chevron delay-200" />
      </Link>
    </section>
  );
};

export default HeroSection;
