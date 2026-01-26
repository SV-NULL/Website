import { ActivityItem } from "@/types/calendar";
import CalendarCardContent from "./content";
import CalendarCardImage from "./image";

type Props = {
  activity: ActivityItem;
};

const CalendarCard = ({ activity }: Props) => {
  return (
    <div className="relative flex flex-col sm:flex-row bg-neutral-900 rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10 border border-neutral-800 hover:border-yellow-400/30">
      <CalendarCardImage image={activity.image} title={activity.title} />
      <CalendarCardContent activity={activity} />
    </div>
  );
};

export default CalendarCard;
