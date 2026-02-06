import { CALENDAR_CONFIG } from "@/config/calendar";
import { useEffect, useState } from "react";

/**
 * Hook to get the calendar feed URL, with a delay to avoid hydration mismatch warnings.
 *
 * @returns {string} The calendar feed URL.
 */
export function useFeedUrl() {
  const [feedUrl, setFeedUrl] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedUrl(
        `${window.location.origin}${CALENDAR_CONFIG.DEFAULT_FEED_PATH}`,
      );
    }, CALENDAR_CONFIG.HYDRATION_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return feedUrl;
}
