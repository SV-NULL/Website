import z from "zod";
import { MemberFrontmatterSchema } from "./common";
import { ImageFrontmatterSchema } from "./image";

export const CommitteeFrontmatterSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: ImageFrontmatterSchema,
  description: z.string().optional(),
  activities: z.string().array().optional(),
  openForSignup: z.boolean().default(true),
  members: MemberFrontmatterSchema.array().default([]),
});
export type Committee = z.infer<typeof CommitteeFrontmatterSchema> & {
  content: string;
};
