import { ListItem } from "@/types/common";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  basePath: string;
  board: ListItem;
  hasLine?: boolean;
};

const BoardCard = ({ basePath, board, hasLine = false }: Props) => {
  return (
    <Link
      href={`/${basePath}/${board.id}`}
      className="group relative block overflow-hidden rounded-2xl shadow-lg bg-neutral-900 h-full"
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <Image
          src={board.image.src}
          alt={board.image.alt || board.title}
          priority={board.image.isPriority}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h2
          className={clsx(
            "text-white text-2xl font-bold transition-all",
            hasLine
              ? "mb-3 underline underline-offset-8 decoration-yellow-400 decoration-2"
              : "mb-1",
          )}
        >
          {board.title}
        </h2>

        {board.subtitle && (
          <p className="text-gray-200 text-sm line-clamp-2">{board.subtitle}</p>
        )}
      </div>
    </Link>
  );
};

export default BoardCard;
