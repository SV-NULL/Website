import { getUpcomingCalendarItems } from "@/lib/content";

export const revalidate = 3600;

export async function GET() {
  const items = getUpcomingCalendarItems();
  return Response.json(items, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
