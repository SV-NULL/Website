import DropdownList from '@/app/components/DropdownList';
import CTA from '@/app/components/CTA';
import { getCalendarItems } from '@/lib/content';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Kalender</h1>
      <DropdownList
        title=""
        items={items}
        footer={
          <CTA
            title="Ook een idee voor een activiteit?"
            text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb je zelf een leuk idee? Laat het ons weten!"
            button={null}
          />
        }
      />
      </div>
  );
}