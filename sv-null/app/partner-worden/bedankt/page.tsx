import ThankYouLayout from "@/components/bedankt/ThankYouLayout";

const partnerThankYouData = {
  subtitle: "Je aanmelding om partner te worden is succesvol verstuurd.",
  steps: [
    "We hebben je aanmelding ontvangen en gaan deze beoordelen.",
    "Je ontvangt binnen 3 werkdagen bericht van ons per e-mail.",
  ],
};

export default function BedanktPage() {
  return (
    <ThankYouLayout
      subtitle={partnerThankYouData.subtitle}
      steps={partnerThankYouData.steps}
    />
  );
}
