import { Activity } from "@/types/activities";

export const activities: Activity[] = [
  {
    slug: "introweekend",
    title: "Introweekend 2025",
    date: new Date("2025-08-15"),
    content:
      "Een gezellig weekend om kennis te maken met de vereniging en haar leden. We kamperen op een boerderij met leuke spellen, een kampvuur en natuurlijk nog even geen school!",
  },
  {
    slug: "kerstdiner",
    title: "Kerstdiner 2025",
    date: new Date("2025-12-20"),
    content:
      "Een gezellig kerstdiner op school met hapjes, drankjes en een pubquiz waar leuke prijzen te winnen zijn! ",
  },
];

export const getActivityBySlug = (slug: string): Activity | undefined => {
  return activities.find((activity) => activity.slug === slug);
};
