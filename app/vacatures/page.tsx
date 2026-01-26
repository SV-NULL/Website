import { JsonLd } from "@/components/features/json-ld/json-ld";
import VacancyList from "@/components/features/vacancies/vacancy-list";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getVacatureItems } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { CollectionPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Vacatures",
  description:
    "Bekijk openstaande vacatures van onze partners voor interessante functies en stages.",
});

export default function VacanciesPage() {
  const vacancies = getVacatureItems();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <JsonLd<CollectionPage>
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vacatures",
          description:
            "Bekijk openstaande vacatures van onze partners voor interessante functies en stages.",
          url: `${siteConfig.url}/vacatures`,
        }}
      />
      <PageTitle
        title="Vacatures"
        subtitle="Bekijk openstaande vacatures van onze partners voor interessante functies en stages."
      />

      <VacancyList vacancies={vacancies} />
    </div>
  );
}
