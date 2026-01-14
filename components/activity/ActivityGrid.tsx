"use client";

import { ActivityItem } from "@/types/calendar";
import { useEffect, useState } from "react";
import ActivityCard from "./activity-card";
import ActivityCardSkeleton from "./activity-card/skeleton";

export default function ActivityGrid({ limit }: { limit?: number }) {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const skeletonLimit = limit && limit < 3 ? limit : 3;

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/activities")
      .then((res) => res.json())
      .then((data) => {
        setItems(limit ? data.slice(0, limit) : data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [limit]);

  console.log(items);

  return (
    <div className="mx-auto max-w-4xl space-y-20 sm:ml-4">
      {isLoading
        ? Array.from({ length: skeletonLimit }).map((_, i) => (
            <ActivityCardSkeleton key={`skeleton-${i}`} />
          ))
        : items.map((activity, i) => (
            <ActivityCard key={`${activity.title}-${i}`} activity={activity} />
          ))}
    </div>
  );
}
