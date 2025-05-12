import DropdownList from '@/app/components/DropdownList';
import { getCalendarItems } from '@/lib/content';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <DropdownList
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