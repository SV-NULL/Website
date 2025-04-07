export const dateTolocalString = (
  date: Date,
  fullMonth: boolean = false
): string => {
  return date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: fullMonth ? "long" : "short",
    day: "numeric",
  });
};
