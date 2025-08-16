import CTA from "@/components/CTA";
import List from "@/components/List";
import PageTitle from "@/components/PageTitle";
import { getCommissies } from "@/utils/commisie";

export default function CommissiesPage() {
  const commissies = getCommissies();

  return (
    <div>
      <PageTitle
        title="Commissies"
        subtitle="Ontdek de verschillende commissies binnen SV. NULL en hun impact op onze vereniging."
      />
      <List items={commissies} line={false} basePath="commissies" />
      <CTA
        title="Lid worden van een commissie?"
        text="Neem contact op met de voorzitter van de commissie via Whatsapp of Discord. Hopelijk tot snel!"
        button={null}
      />
    </div>
  );
}
