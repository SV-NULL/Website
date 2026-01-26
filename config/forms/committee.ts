import { FormField } from "@/types/form";

export const COMMITTEE_FORM_FIELDS: FormField[] = [
  {
    name: "name",
    placeholder: "Naam",
    required: true,
  },
  {
    name: "studentId",
    placeholder: "Student ID",
    suffix: "@student.che.nl",
    required: true,
  },
  {
    name: "motivation",
    as: "textarea" as const,
    placeholder: "Waarom wil je je graag aansluiten bij deze commissie?",
    required: true,
    rows: 6,
  },
];
