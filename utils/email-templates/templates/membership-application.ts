import { EmailTemplate } from "@/types/email-template";
import { commonFormatters } from "../formatters";

export const membershipApplicationTemplate: EmailTemplate = {
  subject: (data) => `Nieuwe aanmelding: ${data.firstName} ${data.lastName}`,

  sections: [
    {
      title: "ALGEMENE INFORMATIE",
      fields: [
        { key: "firstName", label: "Voornaam", required: true },
        { key: "lastName", label: "Achternaam", required: true },
        {
          key: "dateOfBirth",
          label: "Geboortedatum",
          required: true,
          formatter: commonFormatters.dutchDate,
        },
        { key: "address", label: "Adres", required: true },
        { key: "postalCode", label: "Postcode", required: true },
        { key: "city", label: "Woonplaats", required: true },
        {
          key: "phoneNumber",
          label: "Telefoonnummer",
          required: true,
          formatter: commonFormatters.phoneNumber,
        },
        { key: "email", label: "E-mailadres", required: true },
        { key: "discord", label: "Discord gebruikersnaam", required: false },
      ],
    },
    {
      title: "STUDENTINFORMATIE",
      fields: [
        { key: "studentId", label: "Student ID", required: true },
        { key: "startYear", label: "Startjaar opleiding", required: true },
      ],
    },
    {
      title: "CONTRIBUTIE & OPMERKINGEN",
      fields: [
        {
          key: "contribution",
          label: "Gekozen contributie",
          required: true,
          formatter: commonFormatters.contribution,
        },
        {
          key: "discount",
          label: "Toegepaste korting",
          required: false,
          formatter: (discount) =>
            discount
              ? `${discount.name} (${discount.amount})`
              : "Geen korting toegepast",
        },
        { key: "comments", label: "Opmerkingen", required: false },
      ],
    },
  ],

  footer: {
    title: "VERVOLGSTAPPEN",
    steps: (data) => {
      const baseSteps = [
        "Controleer de bovenstaande gegevens op juistheid",
        "Voeg het nieuwe lid toe aan de ledenlijst",
        "Stuur een welkomstmail naar {email}",
      ];

      const paymentStep = data.discount
        ? `Verstuur een betaalverzoek van € {contribution} minus de korting (${data.discount.amount})`
        : "Verstuur een betaalverzoek van € {contribution}";

      const finalSteps = [
        "Voeg toe aan relevante Discord kanalen (indien Discord username opgegeven)",
      ];

      return [...baseSteps, paymentStep, ...finalSteps];
    },
  },

  metadata: {
    organization: "Studievereniging NULL",
    system: "Lidmaatschapsaanmeldingssysteem",
  },
};
