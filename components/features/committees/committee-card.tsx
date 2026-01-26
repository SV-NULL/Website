import { Commissie } from "@/types/commisie";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  committee: Commissie;
  hasLine?: boolean;
};

const CommitteeCard = ({ committee, hasLine = false }: Props) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-lg">
      <Link
        href={`/commissies/${committee.id}`}
        className="relative aspect-video w-full overflow-hidden block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={committee.image.src}
          alt={committee.image.alt || committee.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={committee.image.isPriority}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
      </Link>

      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white pointer-events-none">
        <h2
          className={clsx(
            "text-white text-2xl font-bold transition-all",
            hasLine
              ? "mb-3 underline underline-offset-8 decoration-yellow-400 decoration-2"
              : "mb-2",
          )}
        >
          {committee.title}
        </h2>
        <p className="text-sm mb-5 text-gray-200 line-clamp-2">
          {committee.subtitle}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/commissies/${committee.id}`}
            className="flex-1 pointer-events-auto bg-neutral-800 hover:bg-neutral-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors border border-neutral-600"
          >
            Meer info
          </Link>
          <Link
            href={`/commissies/${committee.id}/aanmelden`}
            className="flex-1 pointer-events-auto bg-yellow-400 hover:bg-yellow-300 text-black text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            Aanmelden
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CommitteeCard;
