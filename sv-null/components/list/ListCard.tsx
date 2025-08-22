import { ListItem } from "@/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  basePath: string;
  item: ListItem;
  hasLine?: boolean;
};

const ListCard = ({ basePath, item, hasLine = false }: Props) => {
  const baseClasses = "text-white text-2xl font-bold";
  const headingClassName = hasLine
    ? `${baseClasses} mb-4 underline underline-offset-12 decoration-yellow-400`
    : `${baseClasses} mb-2`;

  return (
    <Link href={`/${basePath}/${item.id}`}>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            priority={item.image.isPriority || false}
            src={item.image.src}
            alt={item.image.alt || item.title}
            width={464}
            height={261}
            className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-opacity-25 flex flex-col justify-end p-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h2 className={headingClassName}>{item.title}</h2>
          <p className="text-sm">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
