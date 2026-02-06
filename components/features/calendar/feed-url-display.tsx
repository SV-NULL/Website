import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";

type Props = {
  feedUrl: string;
};

const FeedUrlDisplay = ({ feedUrl }: Props) => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="p-2">
      <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2 border border-gray-100">
        <span className="flex-1 truncate font-mono text-xs text-gray-600 select-all">
          {feedUrl || "Loading..."}
        </span>
        <button
          onClick={() => copyToClipboard(feedUrl)}
          className="text-gray-500 hover:text-black transition-colors flex-shrink-0"
          title="Kopieer URL"
          aria-label="Kopieer feed URL naar klembord"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FeedUrlDisplay;
