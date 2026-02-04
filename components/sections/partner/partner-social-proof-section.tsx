import { getPartnerItems } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

const PartnerSocialProofSection = () => {
  const partners = getPartnerItems();

  return (
    <section
      id="social-proof"
      className="py-16 bg-neutral-900 border-y border-neutral-800"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-center text-lg font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Deze bedrijven gingen je al voor
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.image.src}
                alt={partner.image.alt || partner.title}
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-110"
                width={150}
                height={60}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSocialProofSection;
