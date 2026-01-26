import { contactInfo } from "@/config/contact";
import { footerNavItems, footerSocialNavItems } from "@/config/navigation";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactItem from "./contact-item";
import FooterSection from "./footer-section";
import SocialLink from "./social-link";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-4xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <FooterSection title="Socials" className="flex space-x-4">
          {footerSocialNavItems.map((item) => (
            <SocialLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </FooterSection>

        <FooterSection title="Informatie" className="space-y-3">
          {footerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center hover:text-yellow-400 active:text-yellow-400"
            >
              <ChevronRight className="w-5 h-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </FooterSection>

        <FooterSection title="Contact" className="space-y-3">
          <address className="not-italic space-y-3">
            <ContactItem icon={MapPin}>{contactInfo.address}</ContactItem>

            <ContactItem icon={Phone}>
              <Link
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {contactInfo.phone}
              </Link>
            </ContactItem>

            <ContactItem icon={Mail}>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {contactInfo.email}
              </Link>
            </ContactItem>
          </address>
        </FooterSection>
      </div>
      <p className="text-center text-gray-500 py-4 ">
        Copyright © 2025 Studievereniging NULL
      </p>
    </footer>
  );
}
