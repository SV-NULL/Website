import { formatDate } from "@/utils/date";
import {
  AlertCircle,
  Calendar,
  Clock,
  Euro,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";

type Props = {
  notDetermined?: boolean;
  confirmed?: boolean;
  date?: Date;
  time?: string;
  dateAddition?: string;
  location?: string;
  locationUrl?: string;
  cost?: string;
  maxParticipants?: number;
  organizer?: string;
};

const ActivityCardMeta = ({
  notDetermined,
  confirmed,
  date,
  time,
  dateAddition,
  location,
  locationUrl,
  cost,
  maxParticipants,
  organizer,
}: Props) => {
  return (
    <div className="space-y-3">
      {/* Status badge */}
      <div className="flex items-center gap-2">
        {confirmed !== true && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
            <AlertCircle className="w-3 h-3" />
            Nog niet definitief
          </span>
        )}
      </div>

      {/* Datum en tijd */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <span>
            {notDetermined ? (
              <span className="font-medium">Datum nog niet bekend</span>
            ) : date ? (
              <span className="font-medium">{formatDate(date.toString())}</span>
            ) : (
              "—"
            )}{" "}
            {dateAddition && (
              <span className="text-gray-400">({dateAddition})</span>
            )}
          </span>
        </div>

        {time && !notDetermined && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="font-medium">{time}</span>
          </div>
        )}
      </div>

      {/* Locatie */}
      {location && (
        <div className="flex items-start gap-2 text-sm text-gray-300">
          <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
          {locationUrl ? (
            <Link
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-yellow-400 transition-colors underline"
            >
              {location}
            </Link>
          ) : (
            <span className="font-medium">{location}</span>
          )}
        </div>
      )}

      {/* Extra info grid */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
        {cost && (
          <div className="flex items-center gap-2">
            <Euro className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>{cost}</span>
          </div>
        )}

        {maxParticipants && (
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>Max {maxParticipants} personen</span>
          </div>
        )}
      </div>

      {/* Organisator */}
      {organizer && (
        <div className="text-xs text-gray-400">
          Georganiseerd door {organizer}
        </div>
      )}
    </div>
  );
};

export default ActivityCardMeta;
