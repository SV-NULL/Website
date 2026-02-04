import { JsonLd } from "@/components/features/json-ld/json-ld";
import PartnerBenefitsSection from "@/components/sections/partner/partner-benefits-section";
import PartnerContactSection from "@/components/sections/partner/partner-contact-section";
import PartnerFAQSection from "@/components/sections/partner/partner-faq-section";
import PartnerHeroSection from "@/components/sections/partner/partner-hero-section";
import PartnerPackagesSection from "@/components/sections/partner/partner-packages-section";
import PartnerSocialProofSection from "@/components/sections/partner/partner-social-proof-section";
import PartnerSuccessStorySection from "@/components/sections/partner/partner-success-story-section";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { type WebPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Partner worden | Verbind met IT-talent",
  description:
    "Word partner van Studievereniging NULL en krijg direct toegang tot 70+ gemotiveerde HBO-ICT studenten. Bekijk onze sponsorpakketten.",
});

export default function PartnerWordenPage() {
  return (
    <div className="-mt-32">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Partner worden",
          description:
            "Word partner van Studievereniging NULL en krijg direct toegang tot 70+ gemotiveerde HBO-ICT studenten.",
          url: `${siteConfig.url}/partner-worden`,
        }}
      />

      {/* Hero Section */}
      <PartnerHeroSection />

      {/* Social Proof - Partner Logos */}
      <PartnerSocialProofSection />

      {/* Benefits - What's in it for you */}
      <PartnerBenefitsSection />

      {/* Success Story / Testimonial */}
      <PartnerSuccessStorySection />

      {/* Packages / Pricing */}
      <PartnerPackagesSection />

      {/* FAQ Section */}
      <PartnerFAQSection />

      {/* Contact Form */}
      <PartnerContactSection />
    </div>
  );
}
