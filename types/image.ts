import { LucideIcon } from "lucide-react";
import z from "zod";

export const ImageFrontmatterSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  isPriority: z.boolean().optional(),
});
export type Image = z.infer<typeof ImageFrontmatterSchema>;

type BaseNavItem = {
  name: string;
  href?: string;
};

type LinkNavItem = BaseNavItem & {
  type?: "link";
  sub?: NavItem[];
};

type ButtonNavItem = BaseNavItem & {
  type: "button";
  className?: string;
  onClick?: () => void;
};

export type NavItem = LinkNavItem | ButtonNavItem;

export type SocialNavItem = {
  icon: LucideIcon;
  href: string;
  label: string;
};
