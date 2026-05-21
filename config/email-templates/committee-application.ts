import { EmailTemplate } from "@/types/email-template";

interface CommitteeData {
  committeeName: string;
  name: string;
  [key: string]: unknown;
}

export const committeeApplicationTemplate: EmailTemplate = {
  subject: (data) => {
    const { committeeName, name } = data as CommitteeData;
    return `Nieuwe commissie aanmelding voor ${committeeName} van ${name}`;
  },

  sections: [
    {
      title: "COMMISSIE AANMELDING",
      fields: [
        { key: "committeeName", label: "Commissie", required: true },
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
