import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import {
  Building,
  Calendar,
  Eye,
  FileText,
  Scale,
  UserCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { WebPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Statuten",
  description:
    "Lees hier de statuten van s.v. NULL. Deze bevatten de formele regels en richtlijnen die onze vereniging bestuurt.",
});

export default function StatutenPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Statuten",
          description:
            "Lees hier de statuten van s.v. NULL. Deze bevatten de formele regels en richtlijnen die onze vereniging bestuurt.",
          url: `${siteConfig.url}/statuten`,
        }}
      />
      <PageTitle
        title="Statuten"
        subtitle="Lees hier de statuten van s.v. NULL. Deze bevatten de formele regels en richtlijnen die onze vereniging bestuurt."
      />

      {/* Table of Contents */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-6 w-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">Inhoudsopgave</h2>
        </div>
        <div className="grid grid-rows-8 grid-flow-col gap-x-6 gap-y-1">
          {[
            "Art. 1 – Naam en zetel",
            "Art. 2 – Doel",
            "Art. 3 – Lidmaatschap",
            "Art. 4 – Einde lidmaatschap",
            "Art. 5 – Aspirant-leden",
            "Art. 6 – Donateurs",
            "Art. 7 – Contributie van de leden",
            "Art. 8 – Bestuur: samenstelling",
            "Art. 9 – Bestuur: einde functie",
            "Art. 10 – Bestuur: vergadering",
            "Art. 11 – Bestuur: leiding vergadering",
            "Art. 12 – Bestuur: taken en bevoegdheden",
            "Art. 13 – Vertegenwoordiging",
            "Art. 14 – Verslaggeving en verantwoording",
            "Art. 15 – Algemene vergadering: bevoegdheid",
            "Art. 16 – Algemene vergadering: oproeping",
            "Art. 17 – Algemene vergadering: toegang",
            "Art. 18 – Algemene vergadering: besluitvorming",
            "Art. 19 – Algemene vergadering: leiding",
            "Art. 20 – Statutenwijziging",
            "Art. 21 – Fusie, splitsing, omzetting",
            "Art. 22 – Ontbinding",
            "Art. 23 – Vereffening",
            "Art. 24 – Reglementen",
          ].map((item, index) => (
            <Link
              key={index}
              href={`#artikel-${index + 1}`}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm py-1 block"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Key Articles */}
      <div className="space-y-8 mb-16">
        {/* Artikel 1 */}
        <section
          id="artikel-1"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Artikel 1 – Naam en zetel
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              De vereniging draagt de naam:{" "}
              <span className="text-white font-semibold">
                Studievereniging NULL
              </span>
            </p>
            <p>
              De vereniging is gevestigd in de gemeente{" "}
              <span className="text-white font-semibold">Ede</span>.
            </p>
          </div>
        </section>

        {/* Artikel 2 */}
        <section
          id="artikel-2"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Artikel 2 – Doel
            </h2>
          </div>
          <div className="text-gray-300 leading-relaxed bg-neutral-800/30 rounded-lg p-6">
            <p>
              De vereniging heeft als doel: het{" "}
              <span className="text-yellow-400 font-semibold">
                verbinden van kennis en kunde
              </span>{" "}
              van &quot;ICT&quot;-studenten aan de te Ede gevestigde{" "}
              <span className="text-white font-semibold">
                Christelijke Hogeschool Ede (CHE)
              </span>{" "}
              - met adres Oude Kerkweg 100, 6717 JS Ede- met het bedrijfsleven
              om daarbij kennis en vaardigheden uit te wisselen waaronder ook
              het{" "}
              <span className="text-yellow-400 font-semibold">
                opdoen van werkervaring
              </span>
              , en het verrichten van al wat hiermee verband houdt of daartoe
              bevorderlijk kan zijn.
            </p>
          </div>
        </section>

        {/* Artikel 3 */}
        <section
          id="artikel-3"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Artikel 3 – Lidmaatschap
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 mb-6">
              <h3 className="text-yellow-400 font-semibold mb-2">
                Wie kan lid worden?
              </h3>
              <p>
                Natuurlijke personen die &quot;ICT&quot; student zijn aan de
                CHE, die het doel en de statuten van de vereniging
                onderschrijven en daadwerkelijk willen meewerken aan de
                verenigingsactiviteiten.
              </p>
            </div>

            <details className="group">
              <summary className="cursor-pointer bg-neutral-800/30 p-4 rounded-lg hover:bg-neutral-800/50 transition-colors">
                <span className="font-semibold text-white">
                  Volledige lidmaatschapsvoorwaarden (klik om uit te klappen)
                </span>
              </summary>
              <div className="mt-4 pl-4 border-l-2 border-yellow-400/30">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    Lid van de vereniging kunnen zijn: natuurlijke personen die
                    &quot;ICT&quot; student zijn aan de CHE, die het doel en de
                    statuten van de vereniging onderschrijven en daadwerkelijk
                    willen meewerken aan de verenigingsactiviteiten. Het
                    lidmaatschap is persoonlijk en niet voor overgang vatbaar.
                  </li>
                  <li>
                    Leden zijn zij die zich als lid bij het bestuur hebben
                    aangemeld en door het bestuur als zodanig tot de vereniging
                    zijn toegelaten. Bij niet-toelating door het bestuur kan de
                    algemene vergadering alsnog tot toelating besluiten. De
                    algemene vergadering kan haar bevoegdheden hiertoe delegeren
                    aan een door haar ingestelde commissie.
                  </li>
                  <li>
                    Een lid kan door het bestuur voor een periode van ten
                    hoogste drie maanden worden geschorst als een lid in strijd
                    handelt met de statuten, reglementen of besluiten van de
                    vereniging, of de vereniging op onredelijke wijze benadeelt.
                    Gedurende deze periode van schorsing kan het lid zijn
                    lidmaatschapsrechten niet uitoefenen. Zijn
                    lidmaatschapsverplichtingen blijven bestaan.
                  </li>
                  <li>
                    De secretaris van het bestuur houdt een ledenregister bij,
                    waarin de namen en adressen van alle leden zijn opgenomen.
                    Als een lid heeft ingestemd met de oproeping tot een
                    algemene vergadering door middel van communicatie langs
                    elektronische weg, wordt het adres dat door het lid voor dit
                    doel is bekend gemaakt, in het ledenregister opgenomen.
                  </li>
                  <li>
                    Binnen één maand nadat het lid van het besluit tot schorsing
                    in kennis is gesteld, kan dat lid tegen dat besluit in hoger
                    beroep gaan bij de algemene vergadering en daar verweer
                    voeren. Het bestuur is verplicht hiertoe de algemene
                    vergadering bijeen te roepen binnen vier weken na ontvangst
                    van het beroepschrift. Gedurende de beroepstermijn en
                    hangende het beroep blijft het lid geschorst.
                  </li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        {/* Artikel 4 - Einde lidmaatschap */}
        <section
          id="artikel-4"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 4 – Einde lidmaatschap
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Het lidmaatschap eindigt door:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>het overlijden van het lid;</li>
              <li>schriftelijke/digitale opzegging door het lid;</li>
              <li>opzegging door de vereniging;</li>
              <li>
                één jaar na uitschrijving van de studie HBO-ict van de
                Christelijke Hogeschool Ede.
              </li>
            </ol>
            <p>
              Opzegging van het lidmaatschap door het lid kan alleen
              plaatsvinden tegen het einde van een boekjaar, op voorwaarde dat
              dit schriftelijk en met inachtneming van een opzeggingstermijn van
              ten minste een maand gebeurt. Opzegging kan met onmiddellijke
              ingang als redelijkerwijs van het lid niet gevergd kan worden het
              lidmaatschap te laten voortduren. De contributie voor het lopende
              jaar blijft het lid verschuldigd. Te late opzegging heeft tot
              gevolg dat het lidmaatschap – met inbegrip van de daaraan
              verbonden verplichtingen – pas eindigt aan het eind van het
              volgende boekjaar, tenzij het bestuur op grond van bijzondere
              omstandigheden anders besluit. Een lid kan zich door opzegging
              niet onttrekken aan een besluit waardoor de financiële
              verplichting van de leden wordt verzwaard, behalve in het geval
              omschreven in de volgende alinea. Een lid kan zijn lidmaatschap
              met onmiddellijke ingang opzeggen binnen een maand nadat een
              besluit waarbij zijn rechten zijn beperkt of zijn verplichtingen
              zijn verzwaard, hem bekend is geworden of is medegedeeld; het
              besluit is dan niet op hem van toepassing.
            </p>
            <p>
              Een lid kan zijn lidmaatschap met onmiddellijke ingang opzeggen
              binnen een maand nadat hem een besluit tot omzetting van de
              vereniging in een andere rechtsvorm, tot fusie of tot splitsing is
              meegedeeld. In dat geval blijft hij de oorspronkelijk voor dat
              jaar vastgestelde contributie verschuldigd. Opzegging van het
              lidmaatschap door de vereniging vindt plaats door het bestuur,
              door middel van een schriftelijk bericht aan het lid, met
              vermelding van de reden(en) van opzegging. Opzegging is mogelijk:
            </p>
            <ul>
              <li>
                als een lid niet meer voldoet aan de statutaire vereisten voor
                het lidmaatschap;
              </li>
              <li>
                of als een lid – ondanks schriftelijke aanmaning – zijn
                verplichtingen ten opzichte van de vereniging niet nakomt;
              </li>
              <li>
                of wanneer redelijkerwijs van de vereniging niet gevergd kan
                worden het lidmaatschap te laten voortduren.
              </li>
            </ul>
            <p>
              Bij het opzeggingsbesluit wordt ook de datum van beëindiging van
              het lidmaatschap vastgesteld. De contributie voor het lopende jaar
              blijft verschuldigd. Ontzetting uit het lidmaatschap vindt plaats
              door het bestuur, door middel van een schriftelijk bericht aan het
              lid, met vermelding van de reden(en) en de ontzetting. Ontzetting
              is alleen mogelijk als een lid in strijd handelt of heeft
              gehandeld met de statuten, reglementen of besluiten van de
              vereniging, of de vereniging op onredelijke wijze benadeelt of
              heeft benadeeld. De ontzetting gaat onmiddellijk in. De
              contributie voor het lopende jaar blijft verschuldigd. Binnen één
              maand nadat het lid van het besluit tot opzegging of ontzetting in
              kennis is gesteld, kan dat het lid tegen dat besluit in beroep
              gaan bij de algemene vergadering en daar verweer voeren. Het
              bestuur is verplicht hiertoe de algemene vergadering bijeen te
              roepen binnen vier weken na ontvangst van het beroepschrift.
              Gedurende de beroepstermijn en hangende het beroep is het lid
              waarvan het lidmaatschap is opgezegd, geschorst. Aan de eis van
              schriftelijkheid van een opzegging of een bericht van ontzetting
              wordt niet voldaan als de opzegging of het bericht van ontzetting
              uitsluitend elektronisch is gecommuniceerd.
            </p>
          </div>
        </section>

        {/* Artikel 5 - Aspirant-leden */}
        <section
          id="artikel-5"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 5 – Aspirant-leden
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                De algemene vergadering kan besluiten tot het instellen van het
                aspirant-lidmaatschap. Aspirant-leden zijn geen lid, hebben geen
                stemrecht, maar kunnen wel deelnemen aan activiteiten van de
                vereniging. Er kunnen verschillende categorieën aspirant-leden
                zijn. Aspirant-leden hebben alleen toegang tot de algemene
                vergadering als die vergadering dat besluit. Zij hebben daar
                geen stemrecht.
              </li>
              <li>
                De in deze statuten voor leden getroffen regelingen over
                toelating, opzegging en ontzetting met de gevolgen daarvan, zijn
                zoveel mogelijk ook van toepassing op de aspirant-leden.
              </li>
              <li>
                De aan het aspirant-lidmaatschap verbonden financiële bijdrage
                per boekjaar, wordt door de algemene vergadering vastgesteld.
                Daarbij kunnen de aspirant-leden verplicht worden een opdracht
                tot automatische betaling van de periodieke bijdrage te
                verstrekken.
              </li>
              <li>
                Het bestuur houdt een register bij waarin de namen, geboortedata
                en adressen van de aspirant-leden zijn vermeld.
              </li>
            </ol>
          </div>
        </section>

        {/* Artikel 6 - Donateurs */}
        <section
          id="artikel-6"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 6 – Donateurs
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Donateurs zijn zij, die door het bestuur als zodanig zijn
              toegelaten. Er kunnen verschillende categorieën donateurs zijn.
              Donateurs zijn gebonden aan de statuten, reglementen en besluiten
              van de vereniging. Zij hebben alleen toegang tot de algemene
              vergadering als die vergadering dat besluit. Zij hebben daar geen
              stemrecht. De in deze statuten voor leden getroffen regeling over
              toelating en opzegging met de gevolgen daarvan, zijn zoveel
              mogelijk ook van toepassing op donateurs. De algemene vergadering
              stelt het minimumbedrag vast dat, hetzij per boekjaar, hetzij
              eenmalig, door een donateur aan de vereniging is verschuldigd. De
              secretaris houdt een register bij waarin de namen en adressen van
              de donateurs zijn vermeld.
            </p>
          </div>
        </section>

        {/* Artikel 7 - Contributie */}
        <section
          id="artikel-7"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 7 – Contributie van de leden
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De leden betalen een jaarlijkse contributie, waarvan de hoogte
              wordt vastgesteld door de algemene vergadering. De leden kunnen
              daarbij in categorieën worden ingedeeld die een verschillende
              contributie betalen. Het bestuur is bevoegd om, wegens bijzondere
              omstandigheden, een lid geheel of gedeeltelijk ontheffing te
              verlenen van het betalen van contributie in enig jaar. De algemene
              vergadering kan besluiten dat de jaarlijkse contributie in
              gedeelten kan worden betaald en kan daaraan voorwaarden verbinden.
            </p>
          </div>
        </section>

        {/* Artikel 8 - Bestuur */}
        <section
          id="artikel-8"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Artikel 8 – Bestuur: samenstelling
            </h2>
          </div>
          <div className="text-gray-300 leading-relaxed">
            <div className="bg-neutral-800/30 rounded-lg p-6 mb-4">
              <p className="mb-4">
                De vereniging wordt bestuurd door een bestuur dat bestaat uit
                ten minste{" "}
                <span className="text-yellow-400 font-semibold">
                  drie natuurlijke personen
                </span>
                .
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-neutral-700/30 p-4 rounded-lg text-center">
                  <h4 className="text-yellow-400 font-semibold mb-2">
                    Voorzitter
                  </h4>
                  <p className="text-sm text-gray-400">(Praeses)</p>
                </div>
                <div className="bg-neutral-700/30 p-4 rounded-lg text-center">
                  <h4 className="text-yellow-400 font-semibold mb-2">
                    Secretaris
                  </h4>
                  <p className="text-sm text-gray-400">(Ab Actis)</p>
                </div>
                <div className="bg-neutral-700/30 p-4 rounded-lg text-center">
                  <h4 className="text-yellow-400 font-semibold mb-2">
                    Penningmeester
                  </h4>
                  <p className="text-sm text-gray-400">(Questor)</p>
                </div>
              </div>
            </div>
            <p>
              De vereniging wordt bestuurd door een bestuur dat bestaat uit ten
              minste drie natuurlijke personen. De algemene vergadering stelt
              het aantal bestuursleden vast. Het bestuur heeft een voorzitter
              (praeses), secretaris (ab actis) en penningmeester (questor). Het
              bestuur voorziet zelf in de verdeling van de functies, tenzij de
              algemene vergadering zich het recht voorbehoudt de voorzitter te
              benoemen. De functies van secretaris en penningmeester kunnen in
              één persoon worden verenigd. Voor ieder van hen kan het bestuur
              uit zijn midden een plaatsvervanger aanwijzen, die bij
              ontstentenis of belet de functie vervult van degene voor wie hij
              als plaatsvervanger is aangewezen. Een niet-voltallig bestuur
              behoudt zijn bevoegdheden. Het bestuur draagt er zorg voor dat de
              algemene vergadering zo spoedig mogelijk in de vacatures kan
              voorzien. De algemene vergadering benoemt de bestuursleden. Deze
              benoeming vindt plaats bij besluit genomen met een meerderheid van
              ten minste twee / derde van de uitgebrachte stemmen. Deze
              benoeming vindt plaats uit de leden van de vereniging. De
              benoeming van bestuursleden vindt plaats uit een voordracht. Het
              bestuur is bevoegd een voordracht op te maken. De voordracht van
              het bestuur wordt bij de oproeping voor de algemene vergadering
              meegedeeld. De voordracht is bindend. Aan de voordracht kan
              evenwel het bindend karakter worden ontnomen door een besluit van
              de algemene vergadering, met ten minste twee derden van de
              uitgebrachte stemmen genomen. In die vergadering moet ten minste
              de helft van de leden aanwezig of vertegenwoordigd zijn. Als de
              algemene vergadering het bindend karakter aan de voordracht heeft
              ontnomen, is zij vrij in de benoeming. De algemene vergadering is
              ook vrij in de benoeming als de voordracht niet uiterlijk bij de
              oproeping voor de algemene vergadering door het bestuur is
              meegedeeld. De wissel van een nieuwe bestuurder vindt plaats op de
              laatste algemene ledenvergadering van het verenigingsjaar.
            </p>
            <ol className="pt-2 list-decimal pl-6 space-y-2">
              <li>
                Bestuurders worden benoemd voor een periode van ten hoogste één
                jaar. Bestuurders treden af volgens een door het bestuur op te
                maken rooster. Een volgens rooster aftredende bestuurder is
                onmiddellijk herbenoembaar.
              </li>
              <li>
                De in een tussentijds vacature benoemde bestuurder neemt op het
                rooster de plaats in van degene in wiens vacature hij werd
                benoemd.
              </li>
            </ol>
          </div>
        </section>

        {/* Artikel 9 - Bestuur einde functie */}
        <section
          id="artikel-9"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 9 – Bestuur: einde functie, schorsing
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Een bestuurslidmaatschap eindigt:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>door aftreden van een bestuurslid;</li>
              <li>door overlijden van een bestuurslid;</li>
              <li>
                door ondercuratelestelling van een bestuurslid of onder
                bewindstelling van zijn gehele vermogen;
              </li>
              <li>
                wanneer het bestuurslid niet langer lid is van de vereniging;
              </li>
              <li>
                door ontslag van het bestuurslid op grond van een besluit van
                algemene vergadering bij besluit genomen met een meerderheid van
                ten minste twee / derde van de uitgebrachte stemmen in een
                vergadering waarin ten minste de helft van de leden aanwezig of
                vertegenwoordigd is;
              </li>
              <li>
                wanneer het bestuurslid in staat van faillissement wordt
                verklaard, een regeling in het kader van de
                schuldsaneringsregeling natuurlijke personen op hem van
                toepassing wordt verklaard of hij surseance van betaling
                verkrijgt;
              </li>
            </ol>
            <p>
              Een en ander met inachtneming van het hierna bepaalde. Een
              bestuurslid kan te alle tijde door de algemene vergadering worden
              geschorst. Deze schorsing vindt plaats bij besluit genomen met een
              meerderheid van ten minste twee / derde van de uitgebrachte
              stemmen in een vergadering waarin ten minste de helft van de leden
              aanwezig of vertegenwoordigd is. De schorsing beloopt ten hoogste
              drie maanden en kan door de algemene vergadering eenmaal met die
              termijn worden verlengd. Volgt gedurende de schorsing geen
              ontslag, dan is de schorsing na het verloop van de termijn
              geëindigd. Het bestuurslid wordt in de gelegenheid gesteld zich in
              de betreffende algemene vergadering te verantwoorden en kan zich
              daarin door een raadsman laten bijstaan.
            </p>
          </div>
        </section>

        {/* Artikel 10 - Bestuur vergadering */}
        <section
          id="artikel-10"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 10 – Bestuur: bijeenroeping, vergadering, besluitvorming
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Iedere bestuurder is bevoegd een vergadering van het bestuur
              bijeen te roepen. De bijeenroeping van de vergaderingen van het
              bestuur vindt schriftelijk plaats, met inachtneming van een
              termijn van ten minste zeven dagen, de dag van bijeenroeping en
              die van de vergadering niet meegerekend, onder opgave van de dag,
              het aanvangstijdstip en de plaats van de vergadering en van de te
              behandelen onderwerpen (agenda). De bestuurder die voor dit doel
              een adres aan de vereniging bekend heeft gemaakt, kan tot de
              vergadering van het bestuur worden opgeroepen door een langs
              elektronische weg aan dat adres gezonden leesbaar en
              reproduceerbaar bericht. De vergadering van het bestuur wordt
              gehouden op de plaats te bepalen door degene die de vergadering
              bijeenroept. Als wordt gehandeld in strijd met een van de
              bepalingen van de twee vorige leden kan het bestuur toch
              rechtsgeldige besluiten nemen, als alle bestuurders in de
              vergadering aanwezig of vertegenwoordigd zijn. Een bestuurder kan
              aan een ander bestuurder schriftelijk volmacht verlenen om zich in
              de vergadering te laten vertegenwoordigen. Een elektronisch
              vastgelegde volmacht geldt als een schriftelijke volmacht. Een
              bestuurder kan alleen één medebestuurder in de vergadering
              vertegenwoordigen. In de vergadering van het bestuur heeft iedere
              bestuurder één stem. Voor zover in deze statuten geen grotere
              meerderheid is voorgeschreven, worden de besluiten door het
              bestuur genomen met volstrekte meerderheid van de uitgebrachte
              stemmen. Bij staking van stemmen is de stem van de voorzitter
              doorslaggevend.
            </p>
          </div>
        </section>

        {/* Artikel 11 - Bestuur leiding vergadering */}
        <section
          id="artikel-11"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 11 – Bestuur: leiding van de vergadering, notulen
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De voorzitter leidt de vergaderingen van het bestuur; bij zijn
              afwezigheid voorziet de vergadering zelf in haar leiding. De
              voorzitter van de vergadering bepaalt de wijze waarop de
              stemmingen in de vergadering worden gehouden. Het in de
              vergadering uitgesproken oordeel van de voorzitter van de
              vergadering over de uitslag van een stemming is beslissend.
              Hetzelfde geld voor de inhoud van een genomen besluit, voor zover
              werd gestemd over een niet schriftelijk vastgelegd voorstel. Wordt
              onmiddellijk na het uitspreken van het oordeel van de voorzitter
              de juistheid daarvan betwist, dan vindt een nieuwe stemming
              plaats, als de meerderheid van de vergadering of, als de
              oorspronkelijke stemming niet hoofdelijk of schriftelijk
              plaatsvond, een stemgerechtigde aanwezige dit verlangt. Door deze
              nieuwe stemming vervallen de rechtsgevolgen van de oorspronkelijke
              stemming. Van het verhandelde in de vergadering van het bestuur
              worden notulen gehouden door de secretaris of door de voorzitter
              van de vergadering aangewezen persoon. De notulen worden – nadat
              zij zijn vastgesteld – door de voorzitter en de notulist van de
              vergadering ondertekend. Het bestuur kan ook op andere wijze dan
              in een vergadering besluiten nemen als alle bestuurder zich
              schriftelijk vóór het voorstel hebben verklaard. Onder een
              schriftelijke verklaring wordt ook begrepen een langs
              elektronische weg gezonden leesbaar en reproduceerbaar bericht,
              aan het adres dat het bestuur voor dit doel heeft vastgesteld en
              aan alle bestuurder bekend heeft gemaakt. Het bestuur wordt
              geadviseerd door een Raad van Advies. De Raad van Advies bestaat
              uit oud-bestuursleden en maximaal één ander ouderejaars lid dan
              wel oud-lid. De Raad van Advies heeft tot taak het bestuur te
              adviseren, met neme met betrekking tot beleidsmatige onderwerpen.
              De Raad van Advies kent haar eigen leden. Als de Raad van Advies
              geen leden kent, worden nieuwe leden door het bestuur aangewezen.
            </p>
          </div>
        </section>

        {/* Artikel 12 - Bestuur taken */}
        <section
          id="artikel-12"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 12 – Bestuur: taken en bevoegdheden
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Het bestuur is belast met het besturen van de vereniging. Iedere
              bestuurder is tegenover de vereniging verplicht tot een
              behoorlijke vervulling van de hem opgedragen taak. Het bestuur is
              verplicht van de vermogenstoestand van de vereniging en van alles
              met betrekking tot de werkzaamheden van de vereniging, naar de
              eisen die voortvloeien uit deze werkzaamheden, op zodanige wijze
              een administratie te voeren en de daartoe behorende boeken,
              bescheiden en andere gegevensdragers op zodanige wijze te bewaren,
              dat te allen tijde de rechten en verplichtingen van de vereniging
              kunnen worden gekend. Het bestuur is verplicht de bedoelde boeken,
              bescheiden en andere gegevensdragers gedurende zeven jaren te
              bewaren.
            </p>
            <p>
              Het bestuur is bevoegd te besluiten tot het aangaan van
              overeenkomsten tot verkrijging, vervreemding en bezwaring van
              registergoederen, en tot het aangaan van overeenkomsten waarbij de
              vereniging zich als borg of hoofdelijk schuldenaar verbindt, zich
              voor een derde sterk maakt of zich tot zekerheidstelling voor de
              schuld van een derde verbindt. Het bestuur heeft de goedkeuring
              nodig van de algemene vergadering voor het besluiten tot het
              aangaan van overeenkomsten als hiervoor omschreven. Deze beperking
              van de bevoegdheid van het bestuur kan aan derden worden
              tegengeworpen. De algemene vergadering kan bij een daartoe
              strekkend besluit duidelijk te omschrijven andere dan hiervoor
              omschreven besluiten van het bestuur aan haar goedkeuring
              onderwerpen. Een dergelijk besluit van de algemene vergadering
              wordt onmiddellijk aan het bestuur medegedeeld. Op het ontbreken
              van deze goedkeuring kan tegen en door derden geen beroep worden
              gedaan.
            </p>
          </div>
        </section>

        {/* Artikel 13 - Vertegenwoordiging */}
        <section
          id="artikel-13"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 13 – Vertegenwoordiging
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Tot vertegenwoordiging van de vereniging zijn bevoegd:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>het gehele bestuur samen;</li>
              <li>twee gezamenlijk handelende bestuurders.</li>
            </ol>
            <p>
              Een individuele bestuurder kan de vereniging niet
              vertegenwoordigen, tenzij het bestuur uit één bestuurder bestaat.
              De in het vorig lid van dit artikel opgenomen bevoegdheid van het
              bestuur en bestuurders tot vertegenwoordiging van de vereniging
              bestaat ook als tussen de vereniging en een of meer bestuurders
              een tegenstrijdig belang bestaat. Het bestuur kan besluiten tot
              het verlenen van incidentele dan wel door lopende volmacht aan een
              of meer bestuurders en/of aan anderen, zowel samen als
              afzonderlijk, om de vereniging binnen de grenzen van die volmacht
              te vertegenwoordigen. In alle gevallen waarin de vereniging een
              tegenstrijdig belang heeft met een of meer bestuurders kan de
              algemene vergadering een of meer personen aanwijzen om de
              vereniging te vertegenwoordigen.
            </p>
          </div>
        </section>

        {/* Artikel 14 - Verslaggeving */}
        <section
          id="artikel-14"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 14 – Verslaggeving en verantwoording
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Het boekjaar van de vereniging loopt van één september tot en met
              éénendertig augustus. Het bestuur brengt op een algemene
              vergadering binnen zes maanden na afloop van het boekjaar,
              verlening van deze termijn door de algemene vergadering
              uitgezonderd, een bestuursverslag uit over de gang van zaken in de
              vereniging en over het gevoerde beleid. Hij legt de balans en
              staat van baten en lasten met een toelichting ter goedkeuring aan
              de vergadering over. Deze stukken worden ondertekend door de
              bestuurders. Ontbreekt de ondertekening van een of meer van hen,
              dan wordt daarvan onder opgave van reden melding gemaakt. Als de
              vereniging een of meer ondernemingen in stand houdt, die op grond
              van de wet in het handelsregister moeten worden ingeschreven,
              wordt op de staat van baten en lasten de netto-omzet van deze
              onderneming vermeld. Het bestuur legt de jaarstukken ter
              goedkeuring voor aan de algemene vergadering. Wordt over de
              getrouwheid van deze stukken geen verklaring van een accountant
              als bedoeld in artikel 2:393 lid 1 Burgerlijk Wetboek overlegd,
              dan worden daaraan voorafgaand de jaarstukken gecontroleerd door
              een door de algemene vergadering te benomen controlecommissie van
              ten minste twee leden die geen deel mogen uitmaken van het
              bestuur. Een lid van de controlecommissie kan ten hoogste twee
              achtereenvolgende jaren zitting hebben in de controlecommissie.
              Het bestuur is verplicht om de controlecommissie inzage te geven
              in de gehele boekhouding en de daarop betrekking hebbende
              bescheiden en om alle door haar gewenste inlichtingen te
              verstrekken. Als de commissie dat voor een juiste vervulling van
              haar taak noodzakelijk acht, kan zij zich laten bijstaan door een
              externe deskundige. De commissie brengt van haar onderzoek verslag
              uit aan de algemene vergadering, vergezeld van een advies tot al
              of niet goedkeuring van de jaarstukken. Nadat de jaarstukken zijn
              goedgekeurd door de algemene vergadering wordt het voorstel gedaan
              om kwijting te verlenen aan het bestuur voor de door hem daarmee
              afgelegde rekening en verantwoording. In een vergadering te houden
              vóór de afloop van het boekjaar stelt het bestuur een begroting
              van de baten en lasten van het volgende boekjaar vast.
            </p>
          </div>
        </section>

        {/* Artikel 15 - Algemene Vergadering */}
        <section
          id="artikel-15"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">
              Artikel 15 – Algemene vergadering: bevoegdheid
            </h2>
          </div>
          <div className="text-gray-300 leading-relaxed">
            <div className="bg-neutral-800/30 rounded-lg p-6">
              <p className="mb-4">
                Aan de algemene vergadering komen in de vereniging{" "}
                <span className="text-yellow-400 font-semibold">
                  alle bevoegdheden toe
                </span>
                , die niet door de wet of de statuten aan het bestuur zijn
                opgedragen. Jaarlijks, uiterlijk zes maanden na afloop van het
                boekjaar, wordt een algemene vergadering – de jaarvergadering –
                gehouden.
              </p>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">
                  Jaarvergadering behandelt o.a.:
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Bestuursverslag over het afgelopen boekjaar</li>
                  <li>
                    Voorstel tot het al of niet goedkeuren van de jaarstukken
                    over het afgelopen boekjaar
                  </li>
                  <li>Voorstel tot verlenen van kwijting aan het bestuur</li>
                  <li>
                    De benoeming van de leden van de controlecommissie voor het
                    nieuwe boekjaar
                  </li>
                  <li>
                    De benoeming van bestuursleden als er in het bestuur
                    vacatures bestaan
                  </li>
                  <li>
                    Voorstellen van het bestuur of de leden, zoals aangekondigd
                    bij de oproeping voor de vergadering. Uiterlijk één maand
                    voor het verstrijken van het boekjaar, legt het bestuur aan
                    de algemene vergadering de begroting voor het komende
                    boekjaar ter goedkeuring voor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Artikel 16 - Algemene vergadering oproeping */}
        <section
          id="artikel-16"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 16 – Algemene vergadering: oproeping
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De algemene vergadering wordt bijeengeroepen door het bestuur. Een
              aantal leden, samen bevoegd tot het uitbrengen van ten minste een
              tiende deel van de stemmen, kan het bestuur schriftelijk verzoeken
              een algemene vergadering bijeen te roepen binnen vier werken na
              dat verzoek. Als het bestuur niet binnen veertien dagen na
              ontvangst van dat verzoek de uitnodiging tot de vergadering heeft
              laten uitgaan, kunnen de verzoekers zelf de vergadering
              bijeenroepen. Aan de eis van schriftelijkheid van het verzoek
              bedoeld in de vorige alinea wordt ook voldaan als het verzoek
              elektronisch is vastgelegd. De oproeping tot de algemene
              vergadering vindt plaats door middel van:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>een publicatie in het verenigingsorgaan;</li>
              <li>
                een schriftelijk bericht aan de adressen van de leden volgens
                het ledenregister.
              </li>
            </ol>
            <p>
              De bijeenroeping kan, als een lid hiermee instemt, ook
              plaatsvinden door een langs elektronische weg toegezonden leesbaar
              en reproduceerbaar bericht aan het adres dat door het lid voor dit
              doel is bekend gemaakt. De termijn van oproeping bedraagt ten
              minste veertien dagen, de dag van de oproeping en de dag van de
              vergadering niet meegerekend. Naast de plaats, datum en tijd van
              de vergadering, moet de oproeping een agenda bevatten waaruit
              blijkt welke onderwerpen aan de orde worden gesteld.
            </p>
          </div>
        </section>

        {/* Artikel 17 - Algemene vergadering toegang */}
        <section
          id="artikel-17"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 17 – Algemene vergadering: toegang en stemrecht
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Toegang tot de algemene vergadering hebben alle niet-geschorste
              leden van het bestuur en van de vereniging. De vergadering kan
              besluiten ook andere personen tot (een deel van) de vergadering
              toe te laten. Geschorste leden en leden van wie het lidmaatschap
              is opgezegd of die uit het lidmaatschap zijn ontzet, hebben
              toegang tot dat deel van de vergadering waar het beroep tegen
              schorsing, opzegging of ontzetting aan de orde is. Ieder gewoon
              lid en ieder erelid heeft één stem. Een geschorst lid heeft geen
              stemrecht. Een stemgerechtigd lid kan een ander stemgerechtigd lid
              volmacht geven namens hen te stemmen. Deze volmacht moet
              schriftelijk worden gegeven en vóór de stemming aan het bestuur
              worden overgelegd. Aan de eis van schriftelijkheid van de volmacht
              wordt voldaan als de volmacht elektronisch is vastgelegd.
            </p>
          </div>
        </section>

        {/* Artikel 18 - Algemene vergadering besluitvorming */}
        <section
          id="artikel-18"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 18 – Algemene vergadering: besluitvorming
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Voor zover in deze statuten niet anders is bepaald, wordt een
              besluit genomen met volstrekte meerderheid van stemmen van de in
              de vergadering aanwezige en vertegenwoordigde leden, ongeacht hun
              aantal. Blanco en ongeldige stemmen tellen niet mee voor de
              besluitvorming maar tellen wel mee voor het bepalen van een in
              deze statuten voorgeschreven quorum. Het in de vergadering
              uitgesproken oordeel van de voorzitter over de uitslag van een
              stemming is beslissend. Hetzelfde geldt voor de inhoud van een
              genomen besluit, voor zover werd gestemd over een niet
              schriftelijk vastgelegd voorstel. Wordt onmiddellijk na het
              uitspreken van het oordeel van de voorzitter de juistheid daarvan
              betwist, dan vindt een nieuwe stemming plaats als de meerderheid
              van de vergadering of, als de oorspronkelijke stemming niet
              hoofdelijk of schriftelijk plaatsvond, een stemgerechtigde
              aanwezige dit verlangt. Door deze nieuwe stemming vervallen de
              rechtsgevolgen van de oorspronkelijke stemming. Als bij stemming
              over de verkiezing van een persoon bij eerste stemming geen
              meerderheid wordt verkregen, dan zal een nieuwe stemming plaats
              hebben. Als ook dan geen meerderheid verkregen wordt, zal bij een
              tussenstemming worden beslist tussen welke personen zal worden
              herstemd. Staken de stemmen bij verkiezing van personen, dan
              beslist het lot. Als de stemmen staken over een voorstel dan niet
              over de verkiezing van personen gaat, is het voorstel verworpen.
              Alle stemmingen vinden mondeling plaats, tenzij de voorzitter of
              ten minste drie leden vóór de stemming laat of laten weten een
              schriftelijke stemming te verlangen. Schriftelijke stemming vindt
              plaats bij ongetekende, gesloten stembriefjes. Besluitvorming bij
              acclamatie is mogelijk tenzij een lid hoofdelijke stemming
              verlangt. Een stemgerechtigd lid kan zijn stemrecht ook uitoefenen
              door middel van een elektronisch communicatiemiddel, op voorwaarde
              dat de stemgerechtigde via het elektronisch communicatiemiddel kan
              worden geïdentificeerd, rechtstreeks kan kennisnemen van de
              verhandelingen op de vergadering en het stemrecht kan uitoefenen.
              Het bestuur kan voorwaarden stellen aan het gebruik van het
              elektronisch communicatiemiddel. Deze voorwaarden worden bij de
              oproeping bekend gemaakt. Een eenstemmig besluit van alle leden,
              ook al zijn deze niet in een vergadering bijeen, heeft dezelfde
              kracht als een besluit van de algemene vergadering, als dit met
              voorkennis van het bestuur is genomen. Als in een vergadering alle
              leden aanwezig of vertegenwoordigd zijn, kunnen – mits met
              algemene stemmen – geldige besluiten worden genomen over alle aan
              de orde komende onderwerpen, ook al is het onderwerp niet of niet
              op de voorgeschreven wijze bij de oproeping aangekondigd of heeft
              de oproeping niet op rechtsgeldige wijze plaatsgevonden.
            </p>
          </div>
        </section>

        {/* Artikel 19 - Algemene vergadering leiding */}
        <section
          id="artikel-19"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 19 – Algemene vergadering: leiding en notulen
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Een algemene vergadering wordt geleid door de voorzitter van de
              vereniging. Ontbreekt de voorzitter, dan wijst het bestuur een
              ander bestuurslid aan als voorzitter van de vergadering. Wordt ook
              op deze wijze niet in het voorzitterschap voorzien, dan voorziet
              de vergadering zelf in haar leiding. Van het verhandelde in elke
              vergadering worden door de secretaris of een ander door de
              voorzitter van de vergadering daartoe aangewezen persoon notulen
              gehouden, die door de voorzitter en de notulist door ondertekening
              worden vastgesteld.
            </p>
          </div>
        </section>

        {/* Artikel 20 - Statutenwijziging */}
        <section
          id="artikel-20"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 20 – Statutenwijziging
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De statuten van de vereniging kunnen worden gewijzigd door een
              besluit van de algemene vergadering. Wanneer aan de algemene
              vergadering een voorstel tot wijziging van de statuten zal worden
              gedaan, moet dat steeds bij de oproeping tot de algemene
              vergadering worden vermeld. Degene die de oproeping tot de
              algemene vergadering ter behandeling van een voorstel tot
              statutenwijziging hebben gedaan, moeten ten minste vijf dagen vóór
              de vergadering een afschrift van dat voorstel, waarin de
              voorgestelde wijziging woordelijk is opgenomen, op een daartoe
              geschikte plaats voor de leden ter inzage leggen. Dit afschrift
              moet ter inzage liggen tot na afloop van de dag waarop de
              vergadering wordt gehouden. Een besluit tot statutenwijziging moet
              worden genomen met een meerderheid van ten minste twee / derde van
              de uitgebrachte stemmen. In die vergadering moet ten minste de
              helft van de leden aanwezig of vertegenwoordigd zijn. Is het
              vereiste aantal leden niet aanwezig of vertegenwoordigd, dan kan
              een nieuwe algemene vergadering worden bijeengeroepen waarin het
              besluit kan worden genomen met een meerderheid van ten minste twee
              / derde van de uitgebrachte stemmen, onafhankelijk van het aantal
              op deze vergadering aanwezige of vertegenwoordigde leden. Bij
              oproeping voor de nieuwe vergadering moet worden vermeld dat en
              waarom een besluit kan worden genomen, onafhankelijk van het
              aantal op de vergadering aanwezige of vertegenwoordigde leden. De
              hiervoor bedoelde tweede vergadering wordt niet eerder dan vier
              weken en niet later dan zes weken na de eerste vergadering
              gehouden. Een statutenwijziging wordt van kracht onmiddellijk
              nadat deze in een notariële akte is vastgelegd. Iedere bestuurder
              is bevoegd om een statutenwijziging bij notariële akte vast te
              leggen. Een authentieke afschrift van de akte van wijziging en een
              doorlopende tekst van de gewijzigde statuten moeten worden
              neergelegd bij het handelsregister.
            </p>
          </div>
        </section>

        {/* Artikel 21 - Fusie, splitsing, omzetting */}
        <section
          id="artikel-21"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 21 – Fusie, splitsing, omzetting
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Op een besluit van de algemene vergadering tot fusie of splitsing
              in de zin van titel 7 van Boek 2 Burgerlijk Wetboek en op een
              besluit van de algemene vergadering tot omzetting van de
              vereniging in een andere rechtsvorm overeenkomstige artikel 2:18
              Burgerlijke Wetboek, is het bepaalde in het vorige artikel zoveel
              mogelijk van overeenkomstige toepassing, onverminderd de eisen van
              de wet.
            </p>
          </div>
        </section>

        {/* Artikel 22 - Ontbinding */}
        <section
          id="artikel-22"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 22 – Ontbinding
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De vereniging kan worden ontbonden door een besluit van de
              algemene vergadering. Het in deze statuten bepaalde over een
              besluit tot statutenwijziging is van overeenkomstige toepassing op
              een besluit tot ontbinding. Bij het besluit tot ontbinding wordt
              de bestemming van een eventueel batig liquidatiesaldo vastgesteld.
              Als de vereniging op het tijdstip van haar ontbinding geen baten
              meer heeft, houdt zij op te bestaan. In dat geval doet het bestuur
              daarvan opgave aan het handelsregister. De boeken en stukken van
              de ontbonden vereniging blijven gedurende zeven jaar nadat de
              vereniging heeft opgehouden te bestaan onder bewaring van de door
              het bestuur bij het besluit tot ontbinding aangewezen persoon.
              Binnen acht dagen na het ingaan van zijn bewaarplicht moet de
              aangewezen bewaarder zijn naam en adres opgeven aan het
              handelsregister. De vereniging wordt bovendien ontbonden door:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                insolventie nadat de vereniging in staat van faillissement is
                verklaard of door opheffing van het faillissement wegens de
                toestand van de boedel;
              </li>
              <li>
                een daartoe strekkende rechterlijke uitspraak in de bij de wet
                genoemde gevallen.
              </li>
            </ol>
          </div>
        </section>

        {/* Artikel 23 - Vereffening */}
        <section
          id="artikel-23"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 23 – Vereffening
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Het bestuur is belast met de vereffening van het vermogen van de
              vereniging, voor zover bij het ontbindingsbesluit geen ander
              vereffenaar(s) is (zijn) aangewezen. Na het besluit tot ontbinding
              bevindt de vereniging zich in liquidatie. De vereniging blijft na
              haar ontbinding voortbestaan als en voor zover dit voor de
              vereffening van haar vermogen nodig is. Gedurende de vereffening
              blijven de bepalingen van de statuten voor zoveel mogelijk en
              nodig van kracht. In stukken en aankondigingen die van de
              vereniging uitgaan, moet ‘in liquidatie’ aan de naam van de
              vereniging worden toegevoegd. Een batig saldo na vereffening
              krijgt een bestemming die zoveel mogelijk in overeenstemming is
              met het doel van de vereniging. Deze bestemming wordt vastgesteld
              bij het ontbindingsbesluit, of bij het ontbreken daarvan, door de
              vereffenaar(s). De vereffening eindigt op het tijdstip waarop geen
              aan de vereffenaars bekende baten meer aanwezig zijn. De
              vereniging houdt bij vereffening op te bestaan op het tijdstip
              waarop de vereffening eindigt. De vereffenaars doen daarvan opgave
              aan het handelsregister.
            </p>
          </div>
        </section>

        {/* Artikel 24 - Reglementen */}
        <section
          id="artikel-24"
          className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Artikel 24 – Reglementen
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              De algemene vergadering kan een of meer reglementen vaststellen.
              Een reglement kan nadere regels geven over onder meer het
              lidmaatschap, de introductie van nieuwe leden, de contributie, de
              werkzaamheden van het bestuur, werkgroepen of commissies, de
              vergaderingen. Een reglement mag niet in strijd zijn met de wet of
              met de statuten en mag geen bepaling bevatten die bij statuten
              behoren te worden geregeld.
            </p>
          </div>
        </section>
      </div>

      <div className="flex items-center justify-center gap-3 pt-6 border-t border-neutral-700">
        <Calendar className="h-5 w-5 text-gray-500" />
        <span className="text-gray-500 text-sm">
          Laatst gewijzigd op: 29 november 2022
        </span>
      </div>
    </div>
  );
}
