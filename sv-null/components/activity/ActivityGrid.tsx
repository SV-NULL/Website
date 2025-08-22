import { ActivityItem } from "@/lib/content";
import ActivityCard from "./activity-card";

type Props = {
  items: ActivityItem[];
  limit?: number;
};

export default function ActivityGrid({ items, limit }: Props) {
  const itemsWithLimit = limit ? items.slice(0, limit) : items;

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {itemsWithLimit.map((activity, i) => (
        <ActivityCard key={`${activity.title}-${i}`} activity={activity} />
      ))}
    </div>
  );
}
