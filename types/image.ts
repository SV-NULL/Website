import z from "zod";

export const ImageFrontmatterSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  isPriority: z.boolean().optional(),
});
export type Image = z.infer<typeof ImageFrontmatterSchema>;
