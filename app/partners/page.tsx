import CTA from "@/components/CTA";
import PageTitle from "@/components/PageTitle";
import PartnerFlippingCard from "@/components/PartnerFlippingCard";
import { getPartnerItems } from "@/lib/content";
import Link from "next/link";

export default function PartnersPage() {
  const items = getPartnerItems();

  return (
    <div className="mx-auto px-8 space-y-4 max-w-6xl">
      <PageTitle
        title="Partners"
        subtitle="Maak kennis met onze gewaardeerde partners die SV. NULL ondersteunen."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <PartnerFlippingCard key={i} item={it} />
        ))}
        <Link
          href="/partner-worden"
          className="flex flex-col gap-1 items-center justify-center p-4 border-2 border-dashed border-neutral-700 rounded-xl text-gray-500 hover:text-yellow-400 hover:border-yellow-400 transition-all"
        >
          <div className="text-sm font-bold">Uw logo hier?</div>
          <div className="text-xs">Word partner</div>
        </Link>
      </div>

      <CTA
        title="Ook een partner worden?"
        text="Bekijk onze partnerpagina voor meer informatie over wat een partnerschap inhoudt en hoe we samen kunnen werken."
        button={{ text: "Bekijk de mogelijkheden", href: "/partner-worden" }}
      />
    </div>
  );
}
