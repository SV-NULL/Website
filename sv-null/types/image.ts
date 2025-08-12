import { LucideIcon } from "lucide-react";

export type Image = {
  src: string;
  alt?: string;
  isPriority?: boolean;
};

export type NavItem = {
  name: string;
  href: string;
  sub?: NavItem[];
};

export type SocialNavItem = {
  icon: LucideIcon;
  href: string;
};
