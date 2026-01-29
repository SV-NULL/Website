import ContactForm from "@/components/features/contact/form";
import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { type ContactPage as ContactPageSchema } from "schema-dts";
export const metadata = constructMetadata({
  title: "Contact",
  description:
    "Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op.",
});

export default function ContactPage() {
  return (
    <div className="px-8 max-w-4xl mx-auto text-white">
      <JsonLd<ContactPageSchema>
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact",
          description:
            "Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op.",
          url: `${siteConfig.url}/contact`,
        }}
      />
      <PageTitle
        title="Contact"
        subtitle="Heb je vragen, suggesties of wil je kennismaken? Laat hieronder je bericht achter. We nemen zo snel mogelijk contact met je op."
      />

      <p className="text-sm text-gray-400 mb-6">
        Met het versturen van dit formulier accepteer je onze{" "}
        <Link href="/privacy-cookies" className="underline text-yellow-400">
          Algemene Voorwaarden
        </Link>
        .
      </p>

      <ContactForm />
    </div>
  );
}
