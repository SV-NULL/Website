import { getCalendarItems } from "@/lib/content/repositories/calendar";
import ical, {
  ICalCalendarMethod,
  ICalEventStatus,
  ICalEventTransparency,
} from "ical-generator";
import { DateTime } from "luxon";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "short",
});

const dateFormatterLong = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
});

export async function GET() {
  const calendar = ical({
    name: "s.v. NULL",
    method: ICalCalendarMethod.PUBLISH,
    prodId: { company: "s.v. NULL", product: "Website" },
    timezone: "Europe/Amsterdam",
  });

  const events = getCalendarItems();

  events.forEach((event) => {
    if (!event.date || event.notDetermined) return;

    const isTentative = (!event.confirmed || !event.time) && !event.registerUrl;

    let prependText = "";
    if (event.registerUrl) {
      const deadline = event.registerDeadline
        ? new Date(event.registerDeadline)
        : null;

      if (deadline && !isNaN(deadline.getTime())) {
        prependText = `[Aanmelden voor ${dateFormatter.format(deadline)}]`;
      } else {
        prependText = `[Aanmelden]`;
      }
    } else if (isTentative) {
      prependText = `[Niet definitief]`;
    }

    const title = prependText ? `${prependText} ${event.title}` : event.title;

    let start = new Date(event.date);
    let end: Date | null = null;
    let allDay = true;

    if (event.time) {
      allDay = false;
      const dateStrBase = event.date.toISOString().slice(0, 10);
      const [startTimeStr, endTimeStr] = event.time
        .split("-")
        .map((t) => t.trim());

      const startDt = DateTime.fromFormat(
        `${dateStrBase} ${startTimeStr}`,
        "yyyy-MM-dd HH:mm",
        { zone: "Europe/Amsterdam" },
      );
      start = startDt.toJSDate();

      if (endTimeStr) {
        let endDt = DateTime.fromFormat(
          `${dateStrBase} ${endTimeStr}`,
          "yyyy-MM-dd HH:mm",
          { zone: "Europe/Amsterdam" },
        );

        if (endDt < startDt) {
          endDt = endDt.plus({ days: 1 });
        }
        end = endDt.toJSDate();
      } else {
        end = startDt.plus({ hours: 1 }).toJSDate();
      }
    }

    let description = event.content;

    if (event.registerUrl) {
      const deadline = event.registerDeadline
        ? new Date(event.registerDeadline)
        : null;

      const deadlineText =
        deadline && !isNaN(deadline.getTime())
          ? `Aanmelden kan tot voor ${dateFormatterLong.format(deadline)}: ${event.registerUrl}`
          : `Aanmelden kan via: ${event.registerUrl}`;

      description = `${deadlineText}\n\n${description}`;
    }

    if (event.locationUrl) {
      description = `${description}\n\nLocatie: ${event.locationUrl}`;
    }

    const icalEvent = calendar.createEvent({
      start,
      end,
      allDay,
      summary: title,
      description,
      location: event.location,
      url:
        event.registerUrl || event.locationUrl || `https://svnull.nl/kalender`,
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
}
