import { getUpcomingCalendarItems } from "@/lib/content";
import ActivityCard from "./activity-card";

export default async function ActivityGrid({ limit }: { limit?: number }) {
  const items = await getUpcomingCalendarItems(limit);

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {items.map((activity, i) => (
        <ActivityCard key={`${activity.title}-${i}`} activity={activity} />
      ))}
    </div>
  );
}
