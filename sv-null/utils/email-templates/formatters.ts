export const commonFormatters = {
  dutchDate: (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("nl-NL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  },

  contribution: (value: string): string => {
    const contributionMap: Record<string, string> = {
      "10": "€10 - per schooljaar",
      "30": "€30 - voor hele studie",
    };
    return contributionMap[value] || `€${value}`;
  },

  phoneNumber: (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length === 10) {
      return cleaned.match(/.{1,2}/g)?.join(" ") ?? value;
    }
    return value;
  },

  yesNo: (value: boolean | string): string => {
    if (typeof value === "boolean") {
      return value ? "Ja" : "Nee";
    }
    return ["true", "1", "yes", "ja"].includes(value.toLowerCase())
      ? "Ja"
      : "Nee";
  },

  capitalize: (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  },

  studentEmail: (studentId: string): string => {
    return `${studentId}@student.che.nl`;
  },
};
