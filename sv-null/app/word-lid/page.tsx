import PageTitle from "@/components/PageTitle";
import WordLidForm from "@/components/word-lid/form";
import Link from "next/link";

export default function WordLidPage() {
  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <PageTitle
        title="Word lid"
        subtitle="Bekijk hoe je lid wordt van SV. NULL en wat je kunt verwachten."
      />

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

      <WordLidForm />
    </div>
  );
}
