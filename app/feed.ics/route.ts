import { siteConfig } from "@/config/site";
import { getCalendarItems } from "@/lib/content/repositories/calendar";
import ical, {
  ICalCalendarMethod,
  ICalEventStatus,
  ICalEventTransparency,
} from "ical-generator";
import { DateTime } from "luxon";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const calendar = ical({
      name: "s.v. NULL",
      method: ICalCalendarMethod.PUBLISH,
      prodId: { company: "s.v. NULL", product: "Website" },
      timezone: "Europe/Amsterdam",
    });

    const events = getCalendarItems();

    events.forEach((event) => {
      if (!event.date) return;
      if (event.notDetermined) return;

      const isTentative = !event.confirmed || !event.time;
      let dateStr: string | undefined;
      let dateStrLong: string | undefined;

      let titlePrefix = isTentative ? "[Niet definitief] " : "";
      if (event.registerUrl) {
        const deadline = event.registerDeadline
          ? new Date(event.registerDeadline)
          : null;

        if (deadline && !isNaN(deadline.getTime())) {
          const formatter = new Intl.DateTimeFormat("nl-NL", {
            day: "numeric",
            month: "short",
          });
          dateStr = formatter.format(deadline);

          const formatterLong = new Intl.DateTimeFormat("nl-NL", {
            day: "numeric",
            month: "long",
          });
          dateStrLong = formatterLong.format(deadline);

          titlePrefix = `[Aanmelden voor ${dateStr}]`;
        } else {
          titlePrefix = `[Aanmelden]`;
        }
      }
      const title = titlePrefix ? `${titlePrefix} ${event.title}` : event.title;

      let start = DateTime.fromJSDate(event.date);
      let end: DateTime | null = null;
      let allDay = true;

      if (event.time) {
        const dateStrBase = event.date.toISOString().slice(0, 10);
        const times = event.time.split("-").map((t) => t.trim());
        const startTimeStr = times[0];

        const startDt = DateTime.fromFormat(
          `${dateStrBase} ${startTimeStr}`,
          "yyyy-MM-dd HH:mm",
          { zone: "Europe/Amsterdam" },
        );

        if (startDt.isValid) {
          allDay = false;
          start = startDt;
          end = startDt.plus({ hours: 1 });

          if (times.length > 1) {
            const endTimeStr = times[1];
            let endDt = DateTime.fromFormat(
              `${dateStrBase} ${endTimeStr}`,
              "yyyy-MM-dd HH:mm",
              { zone: "Europe/Amsterdam" },
            );

            if (endDt.isValid) {
              if (endDt < startDt) {
                endDt = endDt.plus({ days: 1 });
              }
              end = endDt;
            }
          }
        }
      }

      if (allDay && !end) {
        end = start.plus({ days: 1 });
      }

      const icalEvent = calendar.createEvent({
        start: start,
        end: end,
        allDay: allDay,
        summary: title,
        location: event.location,
        url:
          event.registerUrl ||
          event.locationUrl ||
          `${siteConfig.url}/kalender`,
        timezone: !allDay ? "Europe/Amsterdam" : undefined,
      });

      if (isTentative) {
        icalEvent.status(ICalEventStatus.TENTATIVE);
        icalEvent.transparency(ICalEventTransparency.TRANSPARENT);
      }

      let description = event.content || "";

      if (event.registerUrl) {
        if (dateStrLong) {
          description = `Aanmelden kan tot voor ${dateStrLong}: ${
            event.registerUrl
          }\n\n${description}`;
        } else {
          description = `Aanmelden kan via: ${event.registerUrl}\n\n${description}`;
        }
      }

      if (event.locationUrl) {
        description = `${description}\n\nLocatie: ${event.locationUrl}`;
      }

      icalEvent.description(description);
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
    console.error("Error generating ICS feed:", error);
    return new Response(
      "Er is een fout opgetreden bij het genereren van de agenda.",
      { status: 500 },
    );
  }
}
