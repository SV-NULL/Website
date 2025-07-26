import { getPartnerItems } from '@/lib/content';
import PartnerFlippingCard from '@/components/PartnerFlippingCard';
import CTA from '@/components/CTA';

export default function PartnersPage() {
  const items = getPartnerItems();

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold">Onze Partners</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <PartnerFlippingCard key={i} item={it} />
        ))}
      </div>

      <CTA
        title="Ook een partner worden?"
        text="Neem contact met ons op en wie weet kunnen we iets voor elkaar betekenen!"
        button={{ text: 'Contact opnemen', href: '/contact' }}
      />
    </div>
  );
}
