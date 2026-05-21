import { FormField } from "@/types/form";

export const COMMITTEE_FORM_FIELDS: FormField[] = [
  {
    name: "name",
    label: "Naam",
    placeholder: "Jan de Vries",
    required: true,
  },
  {
    name: "studentId",
    label: "Studentenmail",
    placeholder: "jhdevries",
    suffix: "@student.che.nl",
    required: true,
    description: "Vul het eerste gedeelte van je studentenmail in (voor de @)",
  },
  {
    name: "motivation",
    label: "Motivatie",
    as: "textarea" as const,
    placeholder: "Waarom wil je je graag aansluiten bij deze commissie?",
    required: true,
    rows: 6,
    className: "md:col-span-2",
  },
];
