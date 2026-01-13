export function formatDate(d: string) {
  const date = new Date(d);

  if (Number.isNaN(date.getTime())) return d;

  return date.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
