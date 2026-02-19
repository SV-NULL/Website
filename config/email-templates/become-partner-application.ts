import { EmailTemplate } from "@/types/email-template";
import { commonFormatters } from "../../utils/email/formatters";

interface PartnerData {
  companyName: string;
  [key: string]: unknown;
}

const packageLabels: Record<string, string> = {
  klein: "Klein (€400/jaar)",
  middel: "Middel (€750/jaar)",
  groot: "Groot (€1100/jaar)",
  hoofdsponsor: "Hoofdsponsor (€1800/jaar)",
  "weet-niet": "Weet ik nog niet",
};

const meetingLabels: Record<string, string> = {
  digital: "Digitaal koffietje",
  info: "Stuur eerst maar meer info",
};

export const becomePartnerApplicationTemplate: EmailTemplate = {
  subject: (data) => {
    const { companyName } = data as PartnerData;
    return `Nieuwe partner aanvraag: ${companyName}`;
  },

  sections: [
    {
      title: "BEDRIJFSINFORMATIE",
      fields: [
        { key: "name", label: "Naam", required: true },
        { key: "companyName", label: "Bedrijfsnaam", required: true },
        { key: "email", label: "E-mailadres", required: true },
        {
          key: "phone",
          label: "Telefoonnummer",
          required: false,
          formatter: commonFormatters.phoneNumber,
        },
      ],
    },
    {
      title: "INTERESSE",
      fields: [
        {
          key: "packageInterest",
          label: "Geïnteresseerd in pakket",
          required: true,
          formatter: (value) =>
            typeof value === "string"
              ? packageLabels[value] || value
              : String(value),
        },
        {
          key: "meetingPreference",
          label: "Voorkeur kennismaking",
          required: true,
          formatter: (value) =>
            typeof value === "string"
              ? meetingLabels[value] || value
              : String(value),
        },
      ],
    },
  ],

  footer: {
    title: "VERVOLGSTAPPEN",
    steps: [
      "Controleer de aanvraag op volledigheid",
      "Evalueer de aanvraag",
      "Neem contact op met de aanvrager",
    ],
  },

  metadata: {
    organization: "Studievereniging NULL",
    system: "Partner aanvraag systeem",
  },
};
