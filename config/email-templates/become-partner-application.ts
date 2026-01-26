import { EmailTemplate } from "@/types/email-template";
import { commonFormatters } from "../../utils/email/formatters";

export const becomePartnerApplicationTemplate: EmailTemplate = {
  subject: (data) => `Nieuwe partner aanvraag: ${data.companyName}`,

  sections: [
    {
      title: "BEDRIJFSINFORMATIE",
      fields: [
        { key: "companyName", label: "Bedrijfsnaam", required: true },
        { key: "contactPerson", label: "Contactpersoon", required: true },
        { key: "email", label: "E-mailadres", required: true },
        {
          key: "phone",
          label: "Telefoonnummer",
          required: false,
          formatter: commonFormatters.phoneNumber,
        },
        { key: "message", label: "Motivatie", required: true },
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
