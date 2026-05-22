import z from "zod";

const courseFrontmatterSchema = z.object({
  semester: z.number().min(1).max(8),
  expertise: z.string().optional(),
  name: z.string(),
  details: z.string(),
  resources: z.array(z.string()).default([]),
});

export const CoursesFrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  courses: courseFrontmatterSchema.array().default([]),
});
export type Courses = z.infer<typeof CoursesFrontmatterSchema>;
