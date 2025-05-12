import DropdownListPage from '@/app/components/DropdownListPage';
import { getCalendarItems } from '@/lib/content';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <DropdownListPage
      title="Kalender"
      items={items}
      footer={
        <div className="text-center mt-8 text-sm text-gray-500">
          Blokborrels: 7 · Lezingen: 3 · Gala’s: 2
        </div>
      }
    />
  );
}