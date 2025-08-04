import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { aanmeldingVerzenden } from "./actions";

export default function WordLidPage() {
  return (
    <div className="px-4 max-w-4xl mx-auto text-white">
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

      <form action={aanmeldingVerzenden} className="space-y-6">
        {/* Algemene informatie */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Algemene informatie
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="voornaam"
            placeholder="Voornaam"
            required
            className="form-input"
          />
          <input
            name="achternaam"
            placeholder="Achternaam"
            required
            className="form-input"
          />
          <input
            name="geboortedatum"
            type="date"
            required
            className="form-input"
          />
          <input
            name="adres"
            placeholder="Adres"
            required
            className="form-input"
          />
          <input
            name="postcode"
            placeholder="Postcode"
            required
            className="form-input"
          />
          <input
            name="woonplaats"
            placeholder="Woonplaats"
            required
            className="form-input"
          />
          <input
            name="telefoonnummer"
            placeholder="Telefoonnummer"
            required
            className="form-input"
          />
          <input
            name="discord"
            placeholder="Discord-username (optioneel)"
            className="form-input"
          />
        </div>

        {/* Studentinformatie */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Studentinformatie
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="che-email"
            type="email"
            placeholder="CHE e-mailadres"
            required
            className="form-input"
          />
          <select name="startjaar" required className="form-input">
            <option value="">Startjaar van de opleiding</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020 of eerder">2020 of eerder</option>
          </select>
        </div>

        {/* Contributie */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
          Contributie
        </h2>
        <p className="text-sm text-gray-400">
          Lid worden van NULL kost €10 per schooljaar of €30 voor je hele
          studie. Je krijgt na inschrijving een betaalverzoek.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <select name="contributie" required className="form-input">
            <option value="">Kies je contributie</option>
            <option value="10">€10 – per schooljaar</option>
            <option value="30">€30 – voor hele studie</option>
          </select>
          <textarea
            name="opmerkingen"
            placeholder="Opmerkingen (optioneel)"
            rows={4}
            className="form-input md:col-span-2"
          />
        </div>

        {/* Versturen */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold py-3 rounded shadow mt-4"
        >
          Aanmelden
        </button>
      </form>
    </div>
  );
}
