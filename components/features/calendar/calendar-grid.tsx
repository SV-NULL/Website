import { getUpcomingCalendarItems } from "@/lib/content";
import CalendarCard from "./calendar-card";

export default function CalendarGrid({ limit }: { limit?: number }) {
  const items = getUpcomingCalendarItems(limit);

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {items.map((activity, i) => (
        <CalendarCard key={`${activity.title}-${i}`} activity={activity} />
      ))}
    </div>
  );
}
