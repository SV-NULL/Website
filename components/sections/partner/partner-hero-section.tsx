import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PartnerHeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kalender/kerstborrel.jpg"
          alt="Studievereniging NULL leden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Verbind jouw bedrijf met de{" "}
          <span className="text-yellow-400">IT-toppers</span> van de toekomst
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Word partner van studievereniging NULL en krijg direct toegang tot{" "}
          <span className="text-yellow-400 font-semibold">70+</span>{" "}
          gemotiveerde HBO-ICT studenten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#pakketten"
            className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Bekijk de pakketten
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            Direct aanmelden
          </Link>
        </div>
      </div>

      <Link
        href="#social-proof"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-white/60 hover:text-yellow-400 transition-colors"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-chevron" />
      </Link>
    </section>
  );
};

export default PartnerHeroSection;
