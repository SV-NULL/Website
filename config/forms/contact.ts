import { FormField } from "@/types/form";

export const CONTACT_FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    {
      name: "name",
      label: "Naam",
      placeholder: "Jan de Vries",
      required: true,
    },
    {
      name: "email",
      label: "E-mailadres",
      placeholder: "jan@example.nl",
      required: true,
    },
    {
      name: "subject",
      label: "Onderwerp",
      placeholder: "Onderwerp (optioneel)",
      required: false,
    },
    {
      name: "message",
      label: "Bericht",
      as: "textarea" as const,
      placeholder: "Je bericht...",
      required: true,
      rows: 6,
      className: "md:col-span-2",
    },
  ],
};
