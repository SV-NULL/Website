import z from "zod";
import { Image } from "./image";
import { PersonFrontmatterSchema } from "./person";
import { ROLES } from "./roles";

export const MemberFrontmatterSchema = z.object({
  person: PersonFrontmatterSchema,
  role: z.enum(Object.values(ROLES)),
  date: z.string(),
});
export type Member = z.infer<typeof MemberFrontmatterSchema>;

export interface ListItem {
  id: string;
  image: Image;
  title: string;
  subtitle: string;
}
