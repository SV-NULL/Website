import { FormField } from "@/types/form";

export const FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    { name: "firstName", placeholder: "Voornaam", required: true },
    { name: "lastName", placeholder: "Achternaam", required: true },
    { name: "dateOfBirth", type: "date", required: true, description: "Vul hier je geboortedatum in" },
    { name: "address", placeholder: "Adres", required: true },
    { name: "postalCode", placeholder: "Postcode", required: true },
    { name: "city", placeholder: "Woonplaats", required: true },
    { name: "phoneNumber", placeholder: "Telefoonnummer", required: true },
    {
      name: "discord",
      placeholder: "Discord-username (optioneel)",
      required: false,
    },
  ],
  STUDENT: [
    {
      name: "studentId",
      placeholder: "Studentenmail",
      required: true,
      suffix: "@student.che.nl",
      description: "Vul het eerste gedeelte van je studentenmail in (voor de @)",
    },
    {
      name: "startYear",
      as: "select" as const,
      placeholder: "Startjaar van de opleiding",
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
      as: "textarea" as const,
      placeholder: "Opmerkingen (optioneel)",
      required: false,
      rows: 4,
      className: "md:col-span-2",
    },
  ],
} as const;
