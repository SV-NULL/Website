import { LucideIcon } from "lucide-react";
import z from "zod";

export const ImageFrontmatterSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  isPriority: z.boolean().optional(),
});
export type Image = z.infer<typeof ImageFrontmatterSchema>;

export type NavItem = {
  name: string;
  href: string;
  sub?: NavItem[];
};

export type SocialNavItem = {
  icon: LucideIcon;
  href: string;
};
