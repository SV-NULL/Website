import CTA from '@/components/CTA';
import { getCalendarItems } from '@/lib/content';
import PageTitle from '@/components/PageTitle';
import ActivityGrid from '@/components/ActivityGrid';

export default function CalendarPage() {
  const items = getCalendarItems();

  return (
    <div className='mx-auto max-w-4xl px-8 space-y-4'>
      <PageTitle
        title="Kalender"
        subtitle="Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!"
      />

      <ActivityGrid items={items} />

      <div className="mt-12">
        <CTA
          title="Ook een idee voor een activiteit?"
          text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb jij een leuk idee? Laat het ons weten!"
          button={null}
        />
      </div>

      </div>
  );
}