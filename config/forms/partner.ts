import { FormField } from "@/types/form";

export const PARTNER_FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    { name: "companyName", placeholder: "Bedrijfsnaam", required: true },
    { name: "contactPerson", placeholder: "Contactpersoon", required: true },
    { name: "email", placeholder: "E-mailadres", required: true },
    {
      name: "phone",
      placeholder: "Telefoonnummer (optioneel)",
      required: false,
    },
    {
      name: "message",
      as: "textarea" as const,
      placeholder:
        "Vertel kort waarom je geïntresseerd bent in een samenwerking",
      required: true,
      rows: 4,
    },
  ],
};
