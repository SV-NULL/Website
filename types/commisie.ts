import z from "zod";
import { MemberFrontmatterSchema } from "./common";
import { ImageFrontmatterSchema } from "./image";

export const CommissieFrontmatterSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: ImageFrontmatterSchema,
  members: MemberFrontmatterSchema.array().default([]),
});
export type Commissie = z.infer<typeof CommissieFrontmatterSchema> & {
  content: string;
};
