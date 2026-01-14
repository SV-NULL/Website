import ActivityCardSkeleton from "./activity-card/skeleton";

type Props = {
  limit?: number;
};

const ActivityGridSkeleton = ({ limit }: Props) => {
  return (
    <div className="space-y-20">
      {Array.from({ length: limit || 3 }).map((_, i) => (
        <ActivityCardSkeleton key={`skeleton-${i}`} />
      ))}
    </div>
  );
};

export default ActivityGridSkeleton;
