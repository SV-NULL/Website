import ActivityGrid from "@/components/activity/ActivityGrid";
import ActivityGridSkeleton from "@/components/activity/ActivityGridSkeleton";
import CTA from "@/components/CTA";
import PageTitle from "@/components/PageTitle";
import { Suspense } from "react";

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 space-y-4">
      <PageTitle
        title="Kalender"
        subtitle="Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!"
      />

      <Suspense fallback={<ActivityGridSkeleton />}>
        <ActivityGrid />
      </Suspense>

      <CTA
        title="Ook een idee voor een activiteit?"
        text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb jij een leuk idee? Laat het ons weten!"
        className="mt-12"
      />
    </div>
  );
}
