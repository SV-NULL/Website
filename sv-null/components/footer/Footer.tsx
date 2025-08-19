import { footerNavItems, footerSocalNavItems } from "@/config/navigation";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-4xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <FooterSection title="Socials" className="flex space-x-4">
          {footerSocalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-yellow-400 active:bg-yellow-400 transition-colors"
            >
              <item.icon className="w-5 h-5 text-white group-hover:text-black group-active:text-black" />
            </Link>
          ))}
        </FooterSection>

        <FooterSection title="Informatie" className="space-y-3">
          {footerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center hover:text-yellow-400 active:text-yellow-400"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> {item.name}
            </Link>
          ))}
        </FooterSection>

        <FooterSection
          title="Contact"
          className="not-italic space-y-3 text-gray-400"
          as="address"
        >
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" /> 6717 JS Ede
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" /> +31 06 23540641
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <Link
              href="mailto:svnull@che.nl"
              className="hover:text-yellow-400 active:text-yellow-400"
            >
              svnull@che.nl
            </Link>
          </div>
        </FooterSection>
      </div>
      <p className="text-center text-gray-500 py-4 ">
        Copyright © 2025 Studievereniging NULL
      </p>
    </footer>
  );
}
