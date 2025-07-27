import DropdownList from '@/components/DropdownList';
import CTA from '@/components/CTA';
import { getCalendarItems } from '@/lib/content';
import PageTitle from '@/components/PageTitle';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <div>
      <PageTitle
        title="Kalender"
        subtitle="Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!"
      />
      <DropdownList
        items={items}
        footer={
          <CTA
            title="Ook een idee voor een activiteit?"
            text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb jij een leuk idee? Laat het ons weten!"
            button={null}
          />
        }
      />
      </div>
  );
}