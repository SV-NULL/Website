import BecomeMemberCTASection from "@/components/sections/home/become-member-cta-section";
import CalendarPreviewSection from "@/components/sections/home/calendar-preview-section";
import GallerySection from "@/components/sections/home/gallery-section";
import HeroSection from "@/components/sections/home/hero-section";
import OurPartnersSection from "@/components/sections/home/our-partners-section";
import ValuesSection from "@/components/sections/home/values-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <CalendarPreviewSection />
      <GallerySection />
      <BecomeMemberCTASection />
      <OurPartnersSection />
    </main>
  );
}
