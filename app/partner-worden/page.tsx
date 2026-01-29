import { JsonLd } from "@/components/features/json-ld/json-ld";
import BecomePartnerForm from "@/components/features/partners/become-partner-form";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { type WebPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Partner worden",
  description:
    "Interesse in een samenwerking met s.v. NULL? We horen graag van je!",
});

export default function PartnerWordenPage() {
  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Partner worden",
          description:
            "Interesse in een samenwerking met s.v. NULL? We horen graag van je!",
          url: `${siteConfig.url}/partner-worden`,
        }}
      />
      <PageTitle
        title="Partner worden"
        subtitle="Interesse in een samenwerking met s.v. NULL? We horen graag van je!"
      />

      <p className="text-gray-300 mb-6">
        Wij staan open voor samenwerkingen met bedrijven die onze studenten
        willen inspireren, uitdagen en ondersteunen in hun ontwikkeling tot
        ICT-professionals. Als partner van SV. NULL krijg je de kans om direct
        in contact te komen met gemotiveerde studenten van de opleiding HBO-ICT
        aan de CHE.
      </p>

      <ul className="text-gray-300 list-disc list-inside mb-6 space-y-2">
        <li>
          <span className="text-white font-semibold">
            Toegang tot jong talent:
          </span>{" "}
          presenteer je organisatie aan toekomstige ICT-professionals.
        </li>
        <li>
          <span className="text-white font-semibold">
            Workshops & Lezingen:
          </span>{" "}
          geef inhoudelijke sessies en deel jouw expertise.
        </li>
        <li>
          <span className="text-white font-semibold">
            Netwerk- en borrelmomenten:
          </span>{" "}
          ontmoet studenten in een informele setting.
        </li>
        <li>
          <span className="text-white font-semibold">Zichtbaarheid:</span>{" "}
          vergroot je merkbekendheid binnen onze community.
        </li>
        <li>
          <span className="text-white font-semibold">
            Samen bouwen aan de toekomst:
          </span>{" "}
          draag bij aan de ontwikkeling van ICT op de CHE.
        </li>
      </ul>

      <p className="text-gray-300 mb-6">
        Vul het formulier hieronder in en vertel ons meer over jouw organisatie
        en hoe jij een bijdrage wilt leveren. We nemen snel contact met je op!
      </p>

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>
        .
      </p>

      <BecomePartnerForm />
    </div>
  );
}
