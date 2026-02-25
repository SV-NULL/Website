import { ActivityItem } from "@/types/calendar";
import { DateTime } from "luxon";

const nl = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("nl-NL", opts);

/**
 * Builds the event title for the calendar feed, adding prefixes for tentative events and those with registration deadlines.
 *
 * @param event The calendar event item for which to build the title.
 * @returns A string representing the event title, potentially with prefixes indicating its status.
 */
export function buildTitle(event: ActivityItem): string {
  const titlePrefix = !event.confirmed ? "[Niet definitief] " : "";

  if (event.registerUrl) {
    const deadline = event.registerDeadline
      ? new Date(event.registerDeadline)
      : null;

    if (!deadline || isNaN(deadline.getTime())) {
      return `${titlePrefix}[Aanmelden] ${event.title}`;
    }

    const dateStr = nl({ day: "numeric", month: "short" }).format(deadline);
    return `${titlePrefix}[Aanmelden voor ${dateStr}] ${event.title}`;
  }

  return `${titlePrefix}${event.title}`;
}

/**
 * Builds the event description for the calendar feed, including registration information, content, and location details.
 *
 * @param event The calendar event item for which to build the description.
 * @returns A string representing the event description, containing relevant details for calendar applications.
 */
export function buildDescription(event: ActivityItem): string {
  const parts: string[] = [];

  if (event.registerUrl) {
    if (event.registerDeadline) {
      const deadline = new Date(event.registerDeadline);
      const registrationText = !isNaN(deadline.getTime())
        ? `Aanmelden kan tot voor ${nl({ day: "numeric", month: "long" }).format(deadline)}: ${event.registerUrl}`
        : `Aanmelden kan via: ${event.registerUrl}`;
      parts.push(registrationText);
    } else {
      parts.push(`Aanmelden kan via: ${event.registerUrl}`);
    }
  }

  if (event.content) parts.push(event.content);
  if (event.locationUrl) parts.push(`Locatie: ${event.locationUrl}`);

  return parts.join("\n\n");
}

/**
 * Parses the event times for a calendar event item, determining the start and end times as well as whether it's an all-day event.
 *
 * @param event The calendar event item for which to parse the event times.
 * @returns An object containing the start and end times as DateTime objects, and a boolean indicating if it's an all-day event.
 */
export function parseEventTimes(event: ActivityItem): {
  start: DateTime;
  end: DateTime;
  allDay: boolean;
} {
  const date = event.date!;

  if (!event.time) {
    const start = DateTime.fromJSDate(date);
    return { start, end: start.plus({ days: 1 }), allDay: true };
  }

  const dateBase = date.toISOString().slice(0, 10);
  const parse = (t: string) =>
    DateTime.fromFormat(`${dateBase} ${t}`, "yyyy-MM-dd HH:mm", {
      zone: "Europe/Amsterdam",
    });

  const [startStr, endStr] = event.time.split("-").map((t) => t.trim());
  const start = parse(startStr);

  if (!start.isValid) {
    const fallbackStart = DateTime.fromJSDate(date);
    return {
      start: fallbackStart,
      end: fallbackStart.plus({ days: 1 }),
      allDay: true,
    };
  }

  let end = start.plus({ hours: 1 });
  if (!endStr) return { start, end, allDay: false };

  let endDt = parse(endStr);
  if (!endDt.isValid) return { start, end, allDay: false };

  if (endDt < start) endDt = endDt.plus({ days: 1 });
  end = endDt;

  return { start, end, allDay: false };
}
