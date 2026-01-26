import BecomeMemberForm from "@/components/features/member/form";
import PageTitle from "@/components/ui/page-title";
import { getDiscountByHash } from "@/config/discounts";
import Link from "next/link";

interface WordLidPageProps {
  searchParams: Promise<{ discount?: string }>;
}

export default async function WordLidPage({ searchParams }: WordLidPageProps) {
  const { discount: discountParam } = await searchParams;
  const discount = discountParam ? getDiscountByHash(discountParam) : null;
  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Word lid"
        subtitle="Bekijk hoe je lid wordt van SV. NULL en wat je kunt verwachten."
      />

      {discount && (
        <div className="mb-6 p-4 bg-green-700 border border-green-600 rounded-lg">
          <h3 className="font-semibold text-green-100 mb-2">
            🎉 Kortingsactie actief!
          </h3>
          <p className="text-green-200">
            <strong>{discount.name}:</strong> {discount.description}
          </p>
          <p className="text-green-100 font-medium mt-1">
            Korting: {discount.amount}
          </p>
        </div>
      )}

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
