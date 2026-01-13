import { MessageSquareWarning } from "lucide-react";

type Props = {
  message: string;
};

const ErrorAlert = ({ message }: Props) => {
  return (
    <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
      <div className="flex items-center space-x-2">
        <MessageSquareWarning className="w-5 h-5 text-red-500 flex-shrink-0" />
        <p className="text-red-400">{message}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
