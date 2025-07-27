import CTA from '@/components/CTA';
import List from '@/components/List';
import PageTitle from '@/components/PageTitle';
import { getBestuurItems } from '@/lib/content';

export default function BestuurPage() {
  const items = getBestuurItems();

  return (
    <div>
    <PageTitle
      title="Besturen"
      subtitle="Leer onze bestuursleden kennen en ontdek hun rol binnen SV. NULL."
    />
    <List items={items} line={true} basePath='bestuur'/>
    <CTA
      title="Word jij ons volgende bestuurslid?"
      text="Ben jij enthousiast, gemotiveerd en wil je je inzetten voor onze vereniging? We zijn altijd op zoek naar nieuwe bestuursleden! Halverwege het schooljaar starten we al met de werving van een nieuw bestuur. Houd de groepsapp en Discord in de gaten voor updates😄."
      button={null}
    />
    </div>
  );
}