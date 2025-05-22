import { getPartnerItems } from '@/lib/content';
import CTA from '@/app/components/CTA';
import DropdownList from '@/app/components/DropdownList';

export default function PartnersPage() {
  const items = getPartnerItems();

   return (
    <main className="p-8 max-w-4xl mx-auto space-y-8">
      <DropdownList
        title="Onze Partners"
        items={items}
        footer={
          <CTA
            title="Ook een partner worden?"
            text="Neem contact met ons op en wie weet kunnen we iets voor elkaar betekenen!"
            button={{ text: "Contact opnemen", href: "/contact" }}
          />
        }
      />
     </main>
   );
 }
