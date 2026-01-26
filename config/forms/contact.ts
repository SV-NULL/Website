import { FormField } from "@/types/form";

export const CONTACT_FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    { name: "name", placeholder: "Naam", required: true },
    { name: "email", placeholder: "E-mailadres", required: true },
    { name: "subject", placeholder: "Onderwerp (optioneel)", required: false },
    {
      name: "message",
      as: "textarea" as const,
      placeholder: "Je bericht...",
      required: true,
      rows: 6,
    },
  ],
};
