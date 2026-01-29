import { EmailTemplate } from "@/types/email-template";

interface CommissieData {
  commissieName: string;
  name: string;
  [key: string]: unknown;
}

export const commissieApplicationTemplate: EmailTemplate = {
  subject: (data) => {
    const { commissieName, name } = data as CommissieData;
    return `Nieuwe commissie aanmelding voor ${commissieName} van ${name}`;
  },

  sections: [
    {
      title: "COMMISSIE AANMELDING",
      fields: [
        { key: "commissieName", label: "Commissie", required: true },
        { key: "name", label: "Naam", required: true },
        { key: "email", label: "Student E-mail", required: true },
        { key: "motivation", label: "Motivatie", required: true },
      ],
    },
  ],

  footer: {
    title: "VERVOLGSTAPPEN",
    steps: [
      "Controleer of alle informatie correct is",
      "Plan eventueel een kennismakingsgesprek",
    ],
  },

  metadata: {
    organization: "Studievereniging NULL",
    system: "Commissie Aanmeldformulier",
  },
};
