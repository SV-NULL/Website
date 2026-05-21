import { FormField } from "@/types/form";

export const PARTNER_FORM_FIELDS: Record<string, FormField[]> = {
  GENERAL: [
    {
      name: "companyName",
      label: "Bedrijfsnaam",
      placeholder: "Acme B.V.",
      required: true,
    },
    {
      name: "contactPerson",
      label: "Contactpersoon",
      placeholder: "Jan de Vries",
      required: true,
    },
    {
      name: "email",
      label: "E-mailadres",
      placeholder: "jan@acme.nl",
      required: true,
    },
    {
      name: "phone",
      label: "Telefoonnummer",
      placeholder: "06 12345678 (optioneel)",
      required: false,
    },
    {
      name: "message",
      label: "Bericht",
      as: "textarea" as const,
      placeholder:
        "Vertel kort waarom je geïnteresseerd bent in een samenwerking",
      required: true,
      rows: 4,
      className: "md:col-span-2",
    },
  ],
};
