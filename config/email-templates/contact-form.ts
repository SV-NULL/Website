import { EmailTemplate } from "@/types/email-template";

interface ContactData {
  name: string;
  [key: string]: unknown;
}

export const contactFormTemplate: EmailTemplate = {
  subject: (data) => {
    const { name } = data as ContactData;
    return `Nieuw contactformulier inzending van ${name}`;
  },

  sections: [
    {
      title: "CONTACT INFORMATIE",
      fields: [
        { key: "name", label: "Naam", required: true },
        { key: "email", label: "E-mailadres", required: true },
        { key: "subject", label: "Onderwerp", required: false },
        { key: "message", label: "Bericht", required: true },
      ],
    },
  ],

  footer: {
    title: "VERVOLGSTAPPEN",
    steps: [
      "Controleer of alle informatie correct is",
      "Neem contact op met de afzender indien nodig",
    ],
  },

  metadata: {
    organization: "Studievereniging NULL",
    system: "Contactformulier",
  },
};
