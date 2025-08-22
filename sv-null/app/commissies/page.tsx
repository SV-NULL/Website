import CTA from "@/components/CTA";
import List from "@/components/list/List";
import PageTitle from "@/components/PageTitle";
import { getCommissies } from "@/utils/commisie";

export default function CommissiesPage() {
  const commissies = getCommissies();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Commissies"
        subtitle="Ontdek de verschillende commissies binnen SV. NULL en hun impact op onze vereniging."
      />
      <List items={commissies} hasLine={false} basePath="commissies" />
      <CTA
        title="Lid worden van een commissie?"
        text="Neem contact op met de voorzitter van de commissie via Whatsapp of Discord. Hopelijk tot snel!"
        button={null}
      />
    </div>
  );
}
