import { FormField } from "@/types/form";

export const FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    {
      name: "firstName",
      label: "Voornaam",
      placeholder: "Jan",
      required: true,
    },
    {
      name: "lastName",
      label: "Achternaam",
      placeholder: "de Vries",
      required: true,
    },
    {
      name: "dateOfBirth",
      label: "Geboortedatum",
      type: "date",
      required: true,
    },
    {
      name: "address",
      label: "Adres",
      placeholder: "Straatnaam 1",
      required: true,
    },
    {
      name: "postalCode",
      label: "Postcode",
      placeholder: "1234 AB",
      required: true,
    },
    { name: "city", label: "Woonplaats", placeholder: "Ede", required: true },
    {
      name: "phoneNumber",
      label: "Telefoonnummer",
      placeholder: "06 12345678",
      required: true,
    },
    {
      name: "discord",
      label: "Discord",
      placeholder: "gebruikersnaam (optioneel)",
      required: false,
    },
  ],
  STUDENT: [
    {
      name: "studentId",
      label: "Studentenmail",
      placeholder: "jhdevries",
      required: true,
      suffix: "@student.che.nl",
      description:
        "Vul het eerste gedeelte van je studentenmail in (voor de @)",
    },
    {
      name: "startYear",
      label: "Startjaar opleiding",
      as: "select" as const,
      placeholder: "Selecteer je startjaar",
      required: true,
      options: [
        { value: "2025", label: "2025" },
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020 of eerder", label: "2020 of eerder" },
      ],
    },
  ],
  CONTRIBUTION: [
    {
      name: "contribution",
      label: "Contributie",
      as: "select" as const,
      placeholder: "Kies je contributie",
      required: true,
      options: [
        { value: "15", label: "€15 – per schooljaar" },
        { value: "40", label: "€40 – voor hele studie" },
      ],
    },
    {
      name: "comments",
      label: "Opmerkingen",
      as: "textarea" as const,
      placeholder: "Opmerkingen (optioneel)",
      required: false,
      rows: 4,
      className: "md:col-span-2",
    },
  ],
} as const;
