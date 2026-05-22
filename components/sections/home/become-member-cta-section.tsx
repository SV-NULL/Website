import Button from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";

const BecomeMemberCTASection = () => {
  return (
    <section className="relative max-w-4xl mx-auto my-32 px-8 text-center">
      <div className="absolute inset-0 bg-linear-to-b from-yellow-400/5 to-transparent rounded-3xl pointer-events-none" />
      <div className="relative z-10 py-4">
        <SectionBadge>Lid worden</SectionBadge>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Maak het beste van{" "}
          <span className="text-yellow-400">jouw studietijd</span>!
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Als lid van s.v. NULL doe je mee aan toffe activiteiten, leer je
          bedrijven uit de IT-wereld kennen en maak je vrienden voor het leven.
          Van gezellige borrels tot inspirerende lezingen en leuke reizen: samen
          maken we van jouw studietijd een top tijd!
        </p>
        <Button href="/word-lid">Word lid</Button>
      </div>
    </section>
  );
};

export default BecomeMemberCTASection;
