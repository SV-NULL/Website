import DropdownList from '@/app/components/DropdownList';
import CTA from '@/app/components/CTA';
import { getCalendarItems } from '@/lib/content';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <DropdownList
      title="Kalender"
      items={items}
      footer={
        // <div className="text-center mt-8 text-sm text-gray-500">
        //     Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb je zelf een leuk idee? Laat het ons weten!
        //     <div className="mt-3">
        //     <a
        //       href="/contact"
        //       className="inline-block bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-300"
        //     >
        //       Neem contact op
        //     </a>
        //   </div>
        // </div>

        <CTA
          title="Ook een idee voor een activiteit?"
          text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb je zelf een leuk idee? Laat het ons weten!"
          button={null}
        />
      }
    />
  );
}