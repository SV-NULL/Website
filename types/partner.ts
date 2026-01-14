import z from "zod";
import { ImageFrontmatterSchema } from "./image";

export const PartnerFrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  website: z.url().optional(),
  image: ImageFrontmatterSchema,
});
export type Partner = z.infer<typeof PartnerFrontmatterSchema> & {
  content: string;
};
