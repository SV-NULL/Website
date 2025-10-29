"use client";

import { ActivityItem } from "@/lib/content";
import { useEffect, useState } from "react";
import ActivityCard from "./activity-card";

export default function ActivityGrid({ limit }: { limit?: number }) {
  const [items, setItems] = useState<ActivityItem[]>([]);

  useEffect(() => {
    fetch("/api/activities")
      .then((res) => res.json())
      .then((data) => setItems(limit ? data.slice(0, limit) : data));
  }, [limit]);

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {items.map((activity, i) => (
        <ActivityCard key={`${activity.title}-${i}`} activity={activity} />
      ))}
    </div>
  );
}
