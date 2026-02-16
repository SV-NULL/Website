import { getCalendarItems } from "@/lib/content/repositories/calendar";
import ical, {
  ICalCalendarMethod,
  ICalEventStatus,
  ICalEventTransparency,
} from "ical-generator";
import { DateTime } from "luxon";

export const dynamic = "force-dynamic";

export async function GET() {
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

    const isTentative = (!event.confirmed || !event.time) && !event.registerUrl;
    let dateStr;
    let dateStrLong;

    let prependText = isTentative ? "[Niet definitief] " : "";
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

        prependText = `[Aanmelden voor ${dateStr}]`;
      } else {
        prependText = `[Aanmelden]`;
      }
    }
    const title = prependText ? `${prependText} ${event.title}` : event.title;

    let start: Date | DateTime = new Date(event.date);
    let end: Date | DateTime | null = null;
    let allDay = true;

    if (event.time) {
      allDay = false;
      const dateStrBase = event.date.toISOString().slice(0, 10);
      const times = event.time.split("-").map((t) => t.trim());
      const startTimeStr = times[0];

      const startDt = DateTime.fromFormat(
        `${dateStrBase} ${startTimeStr}`,
        "yyyy-MM-dd HH:mm",
        { zone: "Europe/Amsterdam" },
      );
      start = startDt;

      if (times.length > 1) {
        const endTimeStr = times[1];
        let endDt = DateTime.fromFormat(
          `${dateStrBase} ${endTimeStr}`,
          "yyyy-MM-dd HH:mm",
          { zone: "Europe/Amsterdam" },
        );

        if (endDt < startDt) {
          endDt = endDt.plus({ days: 1 });
        }
        end = endDt;
      } else {
        end = startDt.plus({ hours: 1 });
      }
    }

    const icalEvent = calendar.createEvent({
      start: start,
      end: end,
      allDay: allDay,
      summary: title,
      description: event.content,
      location: event.location,
      url:
        event.registerUrl || event.locationUrl || `https://svnull.nl/kalender`,
      timezone: !allDay ? "Europe/Amsterdam" : undefined,
    });

    if (isTentative) {
      icalEvent.status(ICalEventStatus.TENTATIVE);
      icalEvent.transparency(ICalEventTransparency.TRANSPARENT);
    }

    let description = event.content;

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
}
