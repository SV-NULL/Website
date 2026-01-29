import CalendarGrid from "@/components/features/calendar/calendar-grid";
import { JsonLd } from "@/components/features/json-ld/json-ld";
import CTA from "@/components/sections/cta";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { type WebPage } from "schema-dts";

export const metadata = constructMetadata({
  title: "Kalender",
  description:
    "Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!",
});

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 space-y-4">
      <JsonLd<WebPage>
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Kalender",
          description:
            "Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!",
          url: `${siteConfig.url}/kalender`,
        }}
      />
      <PageTitle
        title="Kalender"
        subtitle="Bekijk onze aankomende activiteiten en evenementen en plan ze in je agenda!"
      />
      <CalendarGrid />
      <CTA
        title="Ook een idee voor een activiteit?"
        text="Het bestuur is constant bezig met het organiseren van leuke activiteiten. Heb jij een leuk idee? Laat het ons weten!"
        className="mt-12"
      />
    </div>
  );
}
