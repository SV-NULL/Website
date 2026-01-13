import CTA from "@/components/CTA";
import CommissieCard from "@/components/list/CommissieCard";
import PageTitle from "@/components/PageTitle";
import { getCommissies } from "@/utils/commisie";

export default function CommissiesPage() {
  const commissies = getCommissies();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Commissies"
        subtitle="Ontdek de verschillende commissies binnen SV. NULL en hun impact op onze vereniging."
      />

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {commissies.map((commissie) => (
            <CommissieCard
              key={commissie.id}
              commissie={commissie}
              hasLine={false}
            />
          ))}
        </div>
      </div>

      <CTA
        title="Lid worden van een commissie?"
        text="Kies een commissie die je interessant vindt en meld je aan via het formulier. We nemen snel contact met je op!"
      />
    </div>
  );
}
