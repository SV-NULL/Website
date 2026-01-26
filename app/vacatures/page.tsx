import VacancyList from "@/components/features/vacancies/vacancy-list";
import PageTitle from "@/components/ui/page-title";
import { getVacatureItems } from "@/lib/content";

export default function VacanciesPage() {
  const vacancies = getVacatureItems();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Vacatures"
        subtitle="Bekijk openstaande vacatures van onze partners voor interessante functies en stages."
      />

      <VacancyList vacancies={vacancies} />
    </div>
  );
}
