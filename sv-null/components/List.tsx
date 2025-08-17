import { ListItem } from "@/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: ListItem[];
  basePath: string;
  line?: boolean;
};

export default function List({ items, basePath, line = false }: Props) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <Link key={item.id} href={`/${basePath}/${item.id}`}>
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
                <h2
                  className={
                    line === true
                      ? "text-white text-2xl mb-4 font-bold underline underline-offset-12 decoration-yellow-400"
                      : "text-white text-2xl mb-2 font-bold"
                  }
                >
                  {item.title}
                </h2>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
