import { siteConfig } from "@/config/site";
import {
  buildDescription,
  buildTitle,
  parseEventTimes,
} from "@/lib/calendar/build-ics";
import { getCalendarItems } from "@/lib/content/repositories/calendar";
import ical, {
  ICalCalendarMethod,
  ICalEventStatus,
  ICalEventTransparency,
} from "ical-generator";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const calendar = ical({
      name: "s.v. NULL",
      method: ICalCalendarMethod.PUBLISH,
      prodId: { company: "s.v. NULL", product: "Website" },
      timezone: "Europe/Amsterdam",
    });

    console.log(
      getCalendarItems()
        .filter((e) => e.date && !e.notDetermined)
        .filter((e) => {
          const eventDate = new Date(e.date!);
          const now = new Date();
          return eventDate >= new Date(now.getTime() - 24 * 60 * 60 * 1000);
        }),
    );

    getCalendarItems()
      .filter((e) => e.date && !e.notDetermined)
      .filter((e) => {
        const eventDate = new Date(e.date!);
        const now = new Date();
        return eventDate >= new Date(now.getTime() - 24 * 60 * 60 * 1000);
      })
      .forEach((event) => {
        const isTentative = !event.confirmed || !event.time;
        const { start, end, allDay } = parseEventTimes(event);

        const icalEvent = calendar.createEvent({
          start,
          end,
          allDay,
          summary: buildTitle(event),
          location: event.location,
          description: buildDescription(event),
          url:
            event.registerUrl ??
            event.locationUrl ??
            `${siteConfig.url}/kalender`,
          timezone: allDay ? undefined : "Europe/Amsterdam",
        });

        if (isTentative) {
          icalEvent.status(ICalEventStatus.TENTATIVE);
          icalEvent.transparency(ICalEventTransparency.TRANSPARENT);
        }
      });

    console.log(calendar.toString());

    return new Response(calendar.toString(), {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'inline; filename="calendar.ics"',
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error generating ICS feed:", error);
    return new Response(
      "Er is een fout opgetreden bij het genereren van de agenda.",
      { status: 500 },
    );
  }
}
