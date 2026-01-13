import ThankYouLayout from "@/components/bedankt/ThankYouLayout";

const memberThankYouData = {
  subtitle: "Je aanmelding is succesvol verstuurd.",
  steps: [
    "We hebben je aanmelding ontvangen en gaan deze beoordelen.",
    "Je ontvangt binnen 3 werkdagen een bevestiging per e-mail.",
    "Na goedkeuring krijg je een betaalverzoek voor de contributie.",
    "Welkom bij NULL! Je krijgt toegang tot onze Discord en activiteiten.",
  ],
};

export default function BedanktPage() {
  return (
    <ThankYouLayout
      subtitle={memberThankYouData.subtitle}
      steps={memberThankYouData.steps}
    />
  );
}
