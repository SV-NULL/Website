import { LucideIcon } from "lucide-react";

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
