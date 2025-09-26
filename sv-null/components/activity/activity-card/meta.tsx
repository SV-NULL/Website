import { formatDate } from "@/utils/date";
import { Calendar } from "lucide-react";

type Props = {
  notDetermined?: boolean;
  date?: string;
  dateAddition?: string;
};

const ActivityCardMeta = ({ notDetermined, date, dateAddition }: Props) => {
  return (
    <div className="flex flex-wrap gap-6 text-sm text-gray-300 items-center">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-yellow-400" />
        <span>
          {notDetermined ? (
            <span className="font-medium">Nog niet bekend</span>
          ) : date ? (
            formatDate(date)
          ) : (
            "—"
          )}{" "}
          {dateAddition && dateAddition}
        </span>
      </div>
    </div>
  );
};

export default ActivityCardMeta;
