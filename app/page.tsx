import { JsonLd } from "@/components/features/json-ld/json-ld";
import BecomeMemberCTASection from "@/components/sections/home/become-member-cta-section";
import CalendarPreviewSection from "@/components/sections/home/calendar-preview-section";
import GallerySection from "@/components/sections/home/gallery-section";
import HeroSection from "@/components/sections/home/hero-section";
import OurPartnersSection from "@/components/sections/home/our-partners-section";
import ValuesSection from "@/components/sections/home/values-section";
import { siteConfig } from "@/config/site";
import { WebSite } from "schema-dts";

export default function HomePage() {
  return (
    <main>
      <JsonLd<WebSite>
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo-volledig.png`,
            sameAs: [
              siteConfig.links.instagram,
              siteConfig.links.linkedin,
              siteConfig.links.github,
            ],
          },
        }}
      />
      <HeroSection />
      <ValuesSection />
      <CalendarPreviewSection />
      <GallerySection />
      <BecomeMemberCTASection />
      <OurPartnersSection />
    </main>
  );
}
