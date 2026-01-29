import BoardList from "@/components/features/boards/board-list";
import { JsonLd } from "@/components/features/json-ld/json-ld";
import CTA from "@/components/sections/cta";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getBoards } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { type CollectionPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Besturen",
  description:
    "Leer onze bestuursleden kennen en ontdek hun rol binnen s.v. NULL.",
});

export default function BestuurPage() {
  const boards = getBoards();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <JsonLd<CollectionPage>
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Besturen",
          description:
            "Leer onze bestuursleden kennen en ontdek hun rol binnen s.v. NULL.",
          url: `${siteConfig.url}/bestuur`,
        }}
      />
      <PageTitle
        title="Besturen"
        subtitle="Leer onze bestuursleden kennen en ontdek hun rol binnen s.v. NULL."
      />
      <BoardList boards={boards} hasLine={true} basePath="bestuur" />
      <CTA
        title="Word jij ons volgende bestuurslid?"
        text="Ben jij enthousiast, gemotiveerd en wil je je inzetten voor onze vereniging? We zijn altijd op zoek naar nieuwe bestuursleden! Halverwege het schooljaar starten we al met de werving van een nieuw bestuur. Houd de groepsapp en Discord in de gaten voor updates😄."
      />
    </div>
  );
}
