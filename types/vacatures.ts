import z from "zod";

export const VacatureFrontmatterSchema = z.object({
  title: z.string(),
  company: z.string(),
  type: z.string(),
  logo: z.string(),
  applyUrl: z.url().optional(),
  hours: z.string().optional(),
  location: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  companyPhone: z.string().optional(),
  companyEmail: z.string().optional(),
  companyAddress: z.string().optional(),
});
export type Vacature = z.infer<typeof VacatureFrontmatterSchema> & {
  slug: string;
  content: string;
};
