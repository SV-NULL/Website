import z from "zod";
import { ImageFrontmatterSchema } from "./image";

export const PersonFrontmatterSchema = z.object({
  name: z.string(),
  image: ImageFrontmatterSchema,
});
export type Person = z.infer<typeof PersonFrontmatterSchema>;
