import { getPartnerItems } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

const OurPartnersSection = () => {
  const partners = getPartnerItems();

  return (
    <section className="py-24 container mx-auto px-4 max-w-7xl border-t border-neutral-800">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-12">
          Onze partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center group/partners">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.website || "#"}
              target="_blank"
              className="group p-4 grayscale-0 group-hover/partners:grayscale hover:!grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.image.src}
                alt={partner.image.alt || partner.title}
                className="w-full h-12 object-contain transition-transform group-hover:scale-110"
                width={200}
                height={100}
              />
            </Link>
          ))}
          <Link
            href="/partner-worden"
            className="flex flex-col items-center justify-center h-20 p-4 border-2 border-dashed border-neutral-700 rounded-xl text-gray-500 hover:text-yellow-400 hover:border-yellow-400 transition-all grayscale-0 group-hover/partners:grayscale hover:!grayscale-0"
          >
            <span className="text-sm font-bold">Uw logo hier?</span>
            <span className="text-xs">Word partner</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
