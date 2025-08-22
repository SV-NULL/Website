import { ActivityItem } from "@/lib/content";
import ActivityCardMeta from "./meta";

type Props = {
  activity: ActivityItem;
};

const ActivityCardContent = ({ activity }: Props) => {
  return (
    <div className="flex-1 p-6 min-h-[14rem] sm:min-h-[16rem] relative z-0">
      <ActivityCardMeta
        notDetermined={activity.notDetermined}
        date={activity.date}
      />

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold underline underline-offset-12 decoration-yellow-400">
        {activity.title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {activity.content}
      </p>
    </div>
  );
};

export default ActivityCardContent;
