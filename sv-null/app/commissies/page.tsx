import { getCommissieItems } from '@/lib/content';
import List from '@/components/List';
import CTA from '@/components/CTA';

export default function CommissiesPage() {
  const items = getCommissieItems();

  return (
    <div>
    <List items={items} title="Commissies" basePath='commissies'/>
    <CTA
      title="Lid worden van een commissie?"
      text="Neem contact met ons op met de voorzitter van de commissie via Whatsapp of Discord. Hopelijk tot snel!"
      button={null}
    />
    </div>
  );
}