import { getVacatureItems, VacatureItem } from '@/lib/content';
import VacatureList from '@/app/components/VacatureList';

export default function VacaturesPage() {
  const vacatures: VacatureItem[] = getVacatureItems();

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Vacatures</h1>
      <VacatureList vacatures={vacatures} />
    </main>
  );
}