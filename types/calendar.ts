import z from "zod";

export const ActivityItemFrontmatterSchema = z.object({
  title: z.string(),
  image: z.string().optional(),
  date: z.date().optional(),
  time: z.string().optional(),
  dateAddition: z.string().optional(),
  notDetermined: z.boolean().optional(),
  confirmed: z.boolean().optional().default(true),
  location: z.string().optional(),
  locationUrl: z.url().optional(),
  registerUrl: z.url().optional(),
  registerDeadline: z.date().optional(),
  maxParticipants: z.number().optional(),
  cost: z.string().optional(),
  organizer: z.string().optional(),
});
export type ActivityItem = z.infer<typeof ActivityItemFrontmatterSchema> & {
  content: string;
};
