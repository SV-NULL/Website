import Button from "@/components/ui/button";

const BecomeMemberCTASection = () => {
  return (
    <section className="max-w-4xl mx-auto my-24 px-8">
      <p className="text-center text-yellow-600 text-xl sm:text-2xl">
        Lid worden
      </p>
      <h2 className="text-center text-4xl font-bold text-yellow-400 mb-12">
        Maak het beste van jouw studietijd!
      </h2>
      <p className="text-center">
        Als lid van SV. NULL doe je mee aan toffe activiteiten, leer je
        bedrijven uit de IT-wereld kennen en maak je vrienden voor het leven.
        Van gezellige borrels tot inspirerende lezingen en leuke reizen: samen
        maken we van jouw studietijd een top tijd!
      </p>
      <div className="text-center mt-12">
        <Button href="/word-lid">Word lid</Button>
      </div>
    </section>
  );
};

export default BecomeMemberCTASection;
