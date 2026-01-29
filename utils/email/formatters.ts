export const commonFormatters = {
  dutchDate: (dateString: unknown): string => {
    try {
      const date = new Date(dateString as string | number | Date);
      return date.toLocaleDateString("nl-NL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return String(dateString);
    }
  },

  contribution: (value: unknown): string => {
    const stringValue = String(value);
    const contributionMap: Record<string, string> = {
      "15": "€15 - per schooljaar",
      "40": "€40 - voor hele studie",
    };
    return contributionMap[stringValue] || `€${stringValue}`;
  },

  phoneNumber: (value: unknown): string => {
    const stringValue = String(value);
    const cleaned = stringValue.replace(/\D/g, "");
    if (cleaned.length === 10) {
      return cleaned.match(/.{1,2}/g)?.join(" ") ?? stringValue;
    }
    return stringValue;
  },

  yesNo: (value: unknown): string => {
    if (typeof value === "boolean") {
      return value ? "Ja" : "Nee";
    }
    const stringValue = String(value).toLowerCase();
    return ["true", "1", "yes", "ja"].includes(stringValue) ? "Ja" : "Nee";
  },

  capitalize: (value: unknown): string => {
    const stringValue = String(value);
    return (
      stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase()
    );
  },

  studentEmail: (studentId: unknown): string => {
    return `${studentId}@student.che.nl`;
  },
};
