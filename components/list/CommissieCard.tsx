import { Commissie } from "@/types/commisie";
import Image from "next/image";
import Link from "next/link";

type Props = {
  commissie: Commissie;
  hasLine?: boolean;
};

const CommissieCard = ({ commissie, hasLine = false }: Props) => {
  const baseClasses = "text-white text-2xl font-bold";
  const headingClassName = hasLine
    ? `${baseClasses} mb-4 underline underline-offset-12 decoration-yellow-400`
    : `${baseClasses} mb-2`;

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          priority={commissie.image.isPriority || false}
          src={commissie.image.src}
          alt={commissie.image.alt || commissie.title}
          width={464}
          height={261}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
        <h2 className={headingClassName}>{commissie.title}</h2>
        <p className="text-sm mb-4 text-gray-300">{commissie.subtitle}</p>

        <div className="flex gap-2">
          <Link
            href={`/commissies/${commissie.id}`}
            className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors border border-neutral-600"
          >
            Meer info
          </Link>
          <Link
            href={`/commissies/${commissie.id}/aanmelden`}
            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            Aanmelden
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommissieCard;
