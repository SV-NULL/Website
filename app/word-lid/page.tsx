import { JsonLd } from "@/components/features/json-ld/json-ld";
import DiscountAlert from "@/components/features/member/discount-alert";
import BecomeMemberForm from "@/components/features/member/form";
import PageTitle from "@/components/ui/page-title";
import { getDiscountByHash } from "@/config/discounts";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { WebPage } from "schema-dts";

type Props = {
  searchParams: Promise<{ discount?: string }>;
};

export const metadata = constructMetadata({
  title: "Word lid",
  description:
    "Bekijk hoe je lid wordt van s.v. NULL en wat je kunt verwachten. Meld je direct aan!",
});

export default async function WordLidPage({ searchParams }: Props) {
  const { discount: discountParam } = await searchParams;
  const discount = discountParam ? getDiscountByHash(discountParam) : null;

  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Word lid",
          description:
            "Bekijk hoe je lid wordt van s.v. NULL en wat je kunt verwachten. Meld je direct aan!",
          url: `${siteConfig.url}/word-lid`,
        }}
      />
      <PageTitle
        title="Word lid"
        subtitle="Bekijk hoe je lid wordt van s.v. NULL en wat je kunt verwachten."
      />

      {discount && <DiscountAlert discount={discount} />}

      <p className="mb-4 text-gray-300">
        Bij NULL maak je direct kennis met een hechte groep mede-ICT-studenten
        en krijg je toegang tot gezellige activiteiten, inspirerende lezingen en
        toffe evenementen. Werk samen aan studie- of hobbyprojecten, breid je
        netwerk uit en beslis mee over wat wij als vereniging ondernemen. Onze
        kernwaarden: <b>Networking</b>, <b>Undertaking</b> en{" "}
        <b>Lifelong Learning</b>!
      </p>

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>{" "}
        en het{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          AVG-beleid
        </Link>
        .
      </p>

      <BecomeMemberForm discount={discount} />
    </div>
  );
}
