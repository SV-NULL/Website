import { NavItem, SocialNavItem } from "@/types/image";
import { Github, Instagram, Linkedin } from "lucide-react";

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

export const footerNavItems: NavItem[] = [
  {
    name: "Statuten",
    href: "/statuten",
  },
  {
    name: "Verenigingsdocumenten",
    href: "/verenigingsdocumenten",
  },
  {
    name: "Privacy & Cookies",
    href: "/privacy-cookies",
  },
];

export const footerSocalNavItems: SocialNavItem[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/s.v.null/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/studievereniging-null",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/SV-NULL", label: "GitHub" },
];
