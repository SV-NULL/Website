import z from "zod";

export const VacancyFrontmatterSchema = z.object({
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
export type Vacancy = z.infer<typeof VacancyFrontmatterSchema> & {
  slug: string;
  content: string;
};
