import z from "zod";
import { MemberFrontmatterSchema } from "./common";
import { ImageFrontmatterSchema } from "./image";

export const BestuurFrontmatterSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: ImageFrontmatterSchema,
  startDate: z.coerce.date().optional(),
  members: MemberFrontmatterSchema.array().default([]),
});
export type Bestuur = z.infer<typeof BestuurFrontmatterSchema> & {
  content: string;
};
