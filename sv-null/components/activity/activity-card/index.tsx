import { ActivityItem } from "@/lib/content";
import ActivityCardContent from "./content";
import ActivityCardImage from "./image";

type Props = {
  activity: ActivityItem;
};

const ActivityCard = ({ activity }: Props) => {
  return (
    <div className="relative flex flex-col sm:flex-row bg-neutral-900 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
      <ActivityCardImage image={activity.image} title={activity.title} />
      <ActivityCardContent activity={activity} />
    </div>
  );
};

export default ActivityCard;
