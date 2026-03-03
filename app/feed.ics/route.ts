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

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export async function GET() {
  try {
    const calendar = ical({
      name: "s.v. NULL",
      method: ICalCalendarMethod.PUBLISH,
      prodId: { company: "s.v. NULL", product: "Website" },
      timezone: "Europe/Amsterdam",
    });

    getCalendarItems()
      .filter((e) => e.date != null && !e.notDetermined)
      .filter((e) => {
        const eventDate = new Date(e.date!);
        const now = new Date();
        return eventDate >= new Date(now.getTime() - ONE_DAY_IN_MS);
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
    const errorCode = "ICS_GENERATION_ERROR";
    console.error(`[${errorCode}] Error generating ICS feed:`, error);

    const body = JSON.stringify({
      error: "An error occurred while generating the calendar feed.",
      message_nl: "Er is een fout opgetreden bij het genereren van de agenda.",
      code: errorCode,
    });

    return new Response(body, {
      status: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
}
