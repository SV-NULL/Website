import { getPartnerItems } from '@/lib/content';
import PartnerFlippingCard from '@/components/PartnerFlippingCard';
import CTA from '@/components/CTA';
import PageTitle from '@/components/PageTitle';

export default function PartnersPage() {
  const items = getPartnerItems();

  return (
    <div className="px-6 max-w-6xl mx-auto space-y-12">
      <PageTitle
        title="Partners"
        subtitle="Maak kennis met onze gewaardeerde partners die SV. NULL ondersteunen."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <PartnerFlippingCard key={i} item={it} />
        ))}
      </div>

      <CTA
        title="Ook een partner worden?"
        text="Bekijk onze partnerpagina voor meer informatie over wat een partnerschap inhoudt en hoe we samen kunnen werken."
        button={{ text: 'Bekijk de mogelijkheden', href: '/partner-worden' }}
      />
    </div>
  );
}
