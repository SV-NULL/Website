import { getPartnerItems } from '@/lib/content';
import CTA from '@/app/components/CTA';
import DropdownList from '@/app/components/DropdownList';

export default function PartnersPage() {
  const items = getPartnerItems();

   return (
     <DropdownList
       title="Onze Partners"
       items={items}
       footer={
        <CTA
          title="Ook een partner worden?"
          text="Neem contact met ons op en wie weet kunnen we iets voor elkaar betekenen!"
          button={{ text: "Neem contact op", href: "/contact" }}
        />
       }
     />
   );
 }
