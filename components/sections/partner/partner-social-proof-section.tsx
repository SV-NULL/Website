import { getPartnerItems } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

const PartnerSocialProofSection = () => {
  const partners = getPartnerItems();
  const extendedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <section
      id="social-proof"
      className="py-16 bg-neutral-900 border-y border-neutral-800"
    >
      <div className="container mx-auto px-6 max-w-5xl mb-10">
        <h2 className="text-center text-lg font-semibold text-gray-400 uppercase tracking-widest">
          Deze partners gingen je al voor
        </h2>
      </div>

      <div className="w-full relative flex overflow-x-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 min-w-full items-center pr-16 md:pr-32">
          {extendedPartners.map((partner, index) => (
            <Link
              key={`${partner.title}-${index}`}
              href={partner.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 group/item p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              aria-hidden={index >= partners.length}
              tabIndex={index >= partners.length ? -1 : undefined}
            >
              <Image
                src={partner.image.src}
                alt={partner.image.alt || partner.title}
                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover/item:scale-110 brightness-0 invert"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSocialProofSection;
