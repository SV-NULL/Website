import z from "zod";

export const VactureFrontmatterSchema = z.object({
  title: z.string(),
  company: z.string(),
  type: z.string(),
  logo: z.string(),
  applyUrl: z.url().optional(),
});
export type Vacature = z.infer<typeof VactureFrontmatterSchema> & {
  slug: string;
  content: string;
};
