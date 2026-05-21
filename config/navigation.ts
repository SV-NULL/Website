import { NavItem, SocialNavItem } from "@/types/navigation";
import { Github, Instagram, Linkedin } from "lucide-react";

export const navItems: NavItem[] = [
  { name: "Over ons", href: "/over-ons" },
  { name: "Kalender", href: "/kalender" },
  {
    name: "Opleiding",
    sub: [
      { name: "Vakken", href: "/vakken" },
      { name: "Vacatures", href: "/vacatures" },
      { name: "Studentenwelzijn", href: "/studentenwelzijn" },
      { name: "Bestuur", href: "/bestuur" },
      { name: "Commissies", href: "/commissies" },
    ],
  },
  {
    name: "Partners",
    sub: [
      { name: "Huidige partners", href: "/partners" },
      { name: "Partner worden", href: "/partner-worden" },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "Lid worden", href: "/word-lid", type: "button", className: "mr-2" },
  { name: "Partner worden", href: "/partner-worden", type: "button" },
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

export const footerSocialNavItems: SocialNavItem[] = [
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
