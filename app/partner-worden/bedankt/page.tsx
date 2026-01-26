import ThankYouLayout from "@/components/features/thank-you/thank-you-layout";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Bedankt voor je aanmelding",
  description: "Bedankt voor je interesse om partner te worden van s.v. NULL.",
  noIndex: true,
});

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
