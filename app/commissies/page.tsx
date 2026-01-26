import CommitteeCard from "@/components/features/committees/committee-card";
import CTA from "@/components/sections/cta";
import PageTitle from "@/components/ui/page-title";
import { getCommittees } from "@/lib/content";

export default function CommissiesPage() {
  const committees = getCommittees();

  return (
    <div className="container mx-auto px-8 space-y-4">
      <PageTitle
        title="Commissies"
        subtitle="Ontdek de verschillende commissies binnen SV. NULL en hun impact op onze vereniging."
      />

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {committees.map((committee) => (
            <CommitteeCard
              key={committee.id}
              committee={committee}
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
