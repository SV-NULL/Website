import { ListItem } from "@/types/common";
import BoardCard from "./board-card";

type Props = {
  boards: ListItem[];
  basePath: string;
  hasLine?: boolean;
};

export default function BoardList({
  boards,
  basePath,
  hasLine = false,
}: Props) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {boards.map((board) => (
          <BoardCard
            key={board.id}
            basePath={basePath}
            board={board}
            hasLine={hasLine}
          />
        ))}
      </div>
    </div>
  );
}
