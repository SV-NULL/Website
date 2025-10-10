import { ActivityItem } from "@/lib/content";
import Link from "next/link";
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
        dateAddition={activity.dateAddition}
      />

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold underline underline-offset-12 decoration-yellow-400">
        {activity.title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {activity.content}
      </p>

      {activity.registerURL && (
        <Link
          href={activity.registerURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-3 py-1.5 rounded-xl font-medium
                      bg-yellow-400 text-black border-2 border-yellow-400
                      hover:bg-transparent hover:text-yellow-400
                      active:bg-transparent active:text-yellow-400
                      transition-all duration-300"
        >
          Aanmelden
        </Link>
      )}
    </div>
  );
};

export default ActivityCardContent;
