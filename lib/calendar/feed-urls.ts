/**
 * Convert an HTTP(S) URL to a webcal URL for calendar apps that support it.
 *
 * @param url The original HTTP or HTTPS URL of the calendar feed.
 * @returns The modified URL with the webcal scheme, or the original URL if it doesn't start with http or https.
 */
export const toWebcal = (url: string) =>
  url.replace(/^https?:\/\//, "webcal://");

/**
 * Generate a Google Calendar URL for adding a calendar feed, using the webcal scheme.
 *
 * @param feedUrl The original HTTP or HTTPS URL of the calendar feed.
 * @returns A URL that can be used to add the calendar feed to Google Calendar.
 */
export const getGoogleCalendarUrl = (feedUrl: string) =>
  `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(toWebcal(feedUrl))}`;

/**
 *  Generate an Outlook Calendar URL for adding a calendar feed, using the webcal scheme.
 *
 * @param feedUrl The original HTTP or HTTPS URL of the calendar feed.
 * @returns A URL that can be used to add the calendar feed to Outlook Calendar.
 */
export const getOutlookCalendarUrl = (feedUrl: string) =>
  `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(feedUrl)}&name=${encodeURIComponent("s.v. NULL")}`;
