import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { AppWindow, BookOpenIcon, MailQuestionIcon } from "lucide-react";
import Link from "next/link";
import { WebPage } from "schema-dts";

const blocks = [
  {
    title: "Informatie over StudentenWelzijn",
    icon: <BookOpenIcon className="w-12 h-12" />,
    href: "https://www.che.nl/studentenwelzijn",
    description: "Persoonlijke studiebegeleiding, advies en hulp.",
  },
  {
    title: "StudentenWelzijn portaal",
    icon: <AppWindow className="w-12 h-12" />,
    href: "https://chrhogeschoolede.sharepoint.com/sites/studentenwelzijn/SitePages/Studentenwelzijn.aspx?CT=1615088928511&OR=OWA-NT&CID=abb14343-ff05-e51e-afba-8bacd48bb718",
    description: "Toegang tot portaal met hulpbronnen en contact.",
  },
  {
    title: "Contact via e‑mail",
    icon: <MailQuestionIcon className="w-12 h-12" />,
    href: "mailto:studentenwelzijn@che.nl",
    description: "Stuur een bericht naar hun direct emailadres.",
  },
];

export const metadata = constructMetadata({
  title: "Studentenwelzijn",
  description:
    "Studentenwelzijn is de plek waar je als student aanklopt met je (hulp)vraag wat betreft je studie. Zij denken met je mee en koppelen je aan de juiste persoon of dienst.",
});

export default function StudentenwelzijnPage() {
  return (
    <div className="container mx-auto px-8 space-y-4">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Studentenwelzijn",
          description:
            "Studentenwelzijn is de plek waar je als student aanklopt met je (hulp)vraag wat betreft je studie. Zij denken met je mee en koppelen je aan de juiste persoon of dienst.",
          url: `${siteConfig.url}/studentenwelzijn`,
        }}
      />
      <PageTitle
        title="Studentenwelzijn"
        subtitle="Studentenwelzijn is de plek waar je als student aanklopt met je (hulp)vraag wat betreft je studie. Zij denken met je mee en koppelen je aan de juiste persoon of dienst."
      />
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-16">
        {blocks.map((b) => (
          <Link
            key={b.title}
            href={b.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center p-6 bg-neutral-900 hover:bg-yellow-400 active:bg-yellow-400 rounded-xl transition-colors"
          >
            <div className="text-yellow-400 group-hover:text-black group-active:text-black mb-4">
              {b.icon}
            </div>
            <h2 className="text-center text-xl font-semibold group-hover:text-black group-active:text-black mb-2">
              {b.title}
            </h2>
            <p className="text-center text-gray-400 group-hover:text-black group-active:text-black">
              {b.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
