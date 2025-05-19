import { getPartnerItems } from '@/lib/content';
import DropdownList from '@/app/components/DropdownList';

export default function PartnersPage() {
  const items = getPartnerItems();

   return (
     <DropdownList
       title="Onze Partners"
       items={items}
       footer={
        <div className="text-center mt-8 text-sm text-gray-500">
            Ook een partner worden? Neem contact met ons op en wie weet kunnen we iets voor elkaar betekenen!
            <div className="mt-3">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-300"
            >
              Neem contact op
            </a>
          </div>
        </div>
       }
     />
   );
 }
