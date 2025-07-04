import { getVacatureItems, VacatureItem } from '@/lib/content';
import VacatureList from '@/app/components/VacatureList';

export default function VacaturesPage() {
  const vacatures: VacatureItem[] = getVacatureItems();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold">Vacatures</h1>
      <VacatureList vacatures={vacatures} />
    </div>
  );
}