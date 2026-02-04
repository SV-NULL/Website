import { getCalendarItems } from "@/lib/content/repositories/calendar";
import ical, {
  ICalCalendarMethod,
  ICalEventStatus,
  ICalEventTransparency,
} from "ical-generator";

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
    // If date is not determined (placeholder event), do not add to calendar
    // feed
    if (event.notDetermined) return;

    // Tentative logic:
    // 1. Explicitly flagged as not confirmed.
    // 2. OR Time is missing (AND no registration URL is present).
    // If registerUrl is present, we consider it definitive enough to drop the
    // tentative tag from title.
    const isTentative = (!event.confirmed || !event.time) && !event.registerUrl;
    let dateStr;

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
        prependText = `[Aanmelden voor ${dateStr}]`;
      } else {
        prependText = `[Aanmelden]`;
      }
    }
    const title = prependText ? `${prependText} ${event.title}` : event.title;

    const start = new Date(event.date);
    let end: Date | null = null;
    let allDay = true;

    if (event.time) {
      allDay = false;
      const times = event.time.split("-").map((t) => t.trim());
      const [startH, startM] = times[0].split(":").map(Number);

      start.setHours(startH, startM);

      if (times.length > 1) {
        const [endH, endM] = times[1].split(":").map(Number);
        end = new Date(start);
        end.setHours(endH, endM);

        // Handle crossing midnight
        if (end < start) {
          end.setDate(end.getDate() + 1);
        }
      } else {
        // Default 1 hour duration if no end time specified
        end = new Date(start);
        end.setHours(start.getHours() + 1);
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
        event.registerUrl || event.locationUrl || `https://svnull.nl/kalender`, // Prioritize register URL, then
      // location, then detail page
    });

    if (isTentative) {
      icalEvent.status(ICalEventStatus.TENTATIVE);
      icalEvent.transparency(ICalEventTransparency.TRANSPARENT);
    }

    let description = event.content;

    // Add registration link to description
    if (event.registerUrl) {
      description = `Aanmelen kan tot voor ${dateStr}: ${
        event.registerUrl
      }\n\n${description}`;
    }

    // Attach location URL if possible.
    if (event.locationUrl) {
      description = `${description}\n\nLocatie: ${event.locationUrl}`;
    }

    icalEvent.description(description);
  });

  return new Response(calendar.toString(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="calendar.ics"',
    },
  });
}
