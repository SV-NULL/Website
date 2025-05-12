import { getPartnerItems } from '@/lib/content';
import DropdownListPage from '@/app/components/DropdownListPage';

export default function PartnersPage() {
  const items = getPartnerItems();

   return (
     <DropdownListPage
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
