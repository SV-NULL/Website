import { ActivityItem } from "@/lib/content";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import ActivityCardMeta from "./meta";

type Props = {
  activity: ActivityItem;
};

const ActivityCardContent = ({ activity }: Props) => {
  const isRegistrationClosed = activity.registerDeadline
    ? new Date(activity.registerDeadline) < new Date()
    : false;

  return (
    <div className="flex-1 p-6 min-h-[14rem] sm:min-h-[16rem] relative z-0">
      <ActivityCardMeta
        notDetermined={activity.notDetermined}
        confirmed={activity.confirmed}
        date={activity.date}
        time={activity.time}
        dateAddition={activity.dateAddition}
        location={activity.location}
        locationUrl={activity.locationUrl}
        cost={activity.cost}
        maxParticipants={activity.maxParticipants}
        organizer={activity.organizer}
      />

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold underline underline-offset-12 decoration-yellow-400">
        {activity.title}
      </h3>

      <p className="mt-3 text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {activity.content}
      </p>

      {/* Aanmelddeadline warning */}
      {activity.registerDeadline && !isRegistrationClosed && (
        <p className="mt-3 text-xs text-orange-300 flex items-center gap-1.5">
          <CalendarIcon className="w-3.5 h-3.5" />
          Aanmelden voor{" "}
          {new Date(activity.registerDeadline).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}

      {/* Aanmeldknop */}
      <div className="mt-5 flex flex-wrap gap-3">
        {activity.registerURL && (
          <>
            {isRegistrationClosed ? (
              <div className="px-4 py-2 rounded-xl font-medium bg-gray-700 text-gray-400 border-2 border-gray-600 cursor-not-allowed">
                Aanmelden gesloten
              </div>
            ) : (
              <Link
                href={activity.registerURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium
                          bg-yellow-400 text-black border-2 border-yellow-400
                          hover:bg-transparent hover:text-yellow-400
                          active:bg-transparent active:text-yellow-400
                          transition-all duration-300 shadow-lg hover:shadow-yellow-400/20"
              >
                Aanmelden
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityCardContent;
