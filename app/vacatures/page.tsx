import PageTitle from "@/components/PageTitle";
import VacatureList from "@/components/VacatureList";
import { getVacatureItems } from "@/lib/content";

export default function VacaturesPage() {
  const vacatures = getVacatureItems();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Vacatures"
        subtitle="Bekijk openstaande vacatures van onze partners voor interessante functies en stages."
      />

      <VacatureList vacatures={vacatures} />
    </div>
  );
}
