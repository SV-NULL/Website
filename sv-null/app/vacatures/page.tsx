import { getVacatureItems, VacatureItem } from '@/lib/content';
import VacatureList from '@/components/VacatureList';
import PageTitle from '@/components/PageTitle';

export default function VacaturesPage() {
  const vacatures: VacatureItem[] = getVacatureItems();

  return (
    <div>
     <PageTitle
        title="Vacatures"
        subtitle="Bekijk openstaande vacatures van onze partners voor interessante functies en stages."
      />

      <VacatureList vacatures={vacatures} />
    </div>
  );
}