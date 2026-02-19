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
    "Word partner van studievereniging NULL en krijg direct toegang tot 70+ gemotiveerde HBO-ICT studenten. Bekijk onze sponsorpakketten.",
});

type Props = {
  searchParams: Promise<{
    pakket?: string;
  }>;
};

export default async function PartnerWordenPage({ searchParams }: Props) {
  const { pakket } = await searchParams;

  return (
    <div className="-mt-32">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Partner worden",
          description:
            "Word partner van studievereniging NULL en krijg direct toegang tot 70+ gemotiveerde HBO-ICT studenten.",
          url: `${siteConfig.url}/partner-worden`,
        }}
      />
      <PartnerHeroSection />
      <PartnerSocialProofSection />
      <PartnerBenefitsSection />
      <PartnerSuccessStorySection />
      <PartnerPackagesSection />
      <PartnerFAQSection />
      <PartnerContactSection pakket={pakket} />
    </div>
  );
}
