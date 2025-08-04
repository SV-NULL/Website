import { NavItem } from "@/types/image";

export const navItems: NavItem[] = [
  {
    name: "Vereniging",
    href: "/bestuur",
    sub: [
      { name: "Word lid", href: "/word-lid" },
      { name: "Bestuur", href: "/bestuur" },
      { name: "Commissies", href: "/commissies" },
      { name: "Over ons", href: "/over-ons" },
    ],
  },
  { name: "Kalender", href: "/kalender" },
  {
    name: "Opleiding",
    href: "/opleiding/vakken",
    sub: [
      { name: "Vakken", href: "/vakken" },
      { name: "Studentenwelzijn", href: "/studentenwelzijn" },
    ],
  },
  {
    name: "Partners",
    href: "/partners",
    sub: [
      { name: "Huidige partners", href: "/partners" },
      { name: "Vacatures", href: "/vacatures" },
      { name: "Partner worden", href: "/partner-worden" },
    ],
  },
  { name: "Contact", href: "/contact" },
];
