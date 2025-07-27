import { getCommissieItems } from '@/lib/content';
import List from '@/components/List';
import CTA from '@/components/CTA';
import PageTitle from '@/components/PageTitle';

export default function CommissiesPage() {
  const items = getCommissieItems();

  return (
    <div>
    <PageTitle
      title="Commissies"
      subtitle="Ontdek de verschillende commissies binnen SV. NULL en hun impact op onze vereniging."
    />
    <List items={items} line={false} basePath='commissies'/>
    <CTA
      title="Lid worden van een commissie?"
      text="Neem contact met ons op met de voorzitter van de commissie via Whatsapp of Discord. Hopelijk tot snel!"
      button={null}
    />
    </div>
  );
}