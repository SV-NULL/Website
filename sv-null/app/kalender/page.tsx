import DropdownList from '@/app/components/DropdownList';
import CTA from '@/app/components/CTA';
import { getCalendarItems } from '@/lib/content';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-8">
      <DropdownList
        title="Kalender"
        items={items}
        footer={
          <CTA
            title="Ook een idee voor een activiteit?"
            text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb je zelf een leuk idee? Laat het ons weten!"
            button={null}
          />
        }
      />
    </main>
  );
}