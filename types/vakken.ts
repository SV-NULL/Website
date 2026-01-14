import z from "zod";

const coursesFrontmatterSchema = z.object({
  semester: z.number().min(1).max(8),
  expertise: z.string().optional(),
  name: z.string(),
  details: z.string(),
  resources: z.array(z.string()).default([]),
});

export const VakkenFrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  courses: coursesFrontmatterSchema.array().default([]),
});
export type Vakken = z.infer<typeof VakkenFrontmatterSchema>;
