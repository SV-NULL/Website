export const DEFAULT_LOCALE = "nl-NL";
export const DEFAULT_TIME_ZONE = "Europe/Amsterdam";

export function formatDate(d: string) {
  const date = new Date(d);

  if (Number.isNaN(date.getTime())) return d;

  return date.toLocaleDateString(DEFAULT_LOCALE, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: DEFAULT_TIME_ZONE,
  });
}
