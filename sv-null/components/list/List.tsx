import { ListItem } from "@/types/common";
import ListCard from "./ListCard";

type Props = {
  items: ListItem[];
  basePath: string;
  hasLine?: boolean;
};

export default function List({ items, basePath, hasLine = false }: Props) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <ListCard
            key={item.id}
            basePath={basePath}
            item={item}
            hasLine={hasLine}
          />
        ))}
      </div>
    </div>
  );
}
