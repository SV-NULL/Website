import CTA from "@/components/CTA";
import List from "@/components/list/List";
import PageTitle from "@/components/PageTitle";
import { getBestuur } from "@/utils/bestuur";

export default function BestuurPage() {
  const bestuur = getBestuur();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Besturen"
        subtitle="Leer onze bestuursleden kennen en ontdek hun rol binnen SV. NULL."
      />
      <List items={bestuur} hasLine={true} basePath="bestuur" />
      <CTA
        title="Word jij ons volgende bestuurslid?"
        text="Ben jij enthousiast, gemotiveerd en wil je je inzetten voor onze vereniging? We zijn altijd op zoek naar nieuwe bestuursleden! Halverwege het schooljaar starten we al met de werving van een nieuw bestuur. Houd de groepsapp en Discord in de gaten voor updates😄."
      />
    </div>
  );
}
