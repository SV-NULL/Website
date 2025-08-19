import { z } from "zod";

export const membershipApplicationSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  dateOfBirth: z.string().min(1, "Geboortedatum is verplicht"),
  address: z.string().min(1, "Adres is verplicht"),
  postalCode: z.string().min(4, "Postcode moet minstens 4 karakters bevatten"),
  city: z.string().min(1, "Woonplaats is verplicht"),
  phoneNumber: z
    .string()
    .min(10, "Telefoonnummer moet minstens 10 cijfers bevatten"),
  discord: z.string().optional(),
  studentId: z.string().min(1, "Student ID is verplicht"),
  startYear: z.string().min(1, "Startjaar is verplicht"),
  contribution: z.enum(["10", "30"], {
    error: "Kies een geldige contributie",
  }),
  comments: z.string().optional(),
});

export type MembershipApplicationData = z.infer<
  typeof membershipApplicationSchema
>;
