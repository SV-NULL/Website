import { getPartnerItems } from '@/lib/content';
import DropdownList from '@/app/components/DropdownList';

export default function PartnersPage() {
  const items = getPartnerItems();

   return (
     <DropdownList
       title="Onze Partners"
       items={items}
       footer={
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-300"
          >
            Ook partner worden?
          </a>
        </div>
       }
     />
   );
 }
