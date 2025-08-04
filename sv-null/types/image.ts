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
