import { CALENDAR_CONFIG } from "@/config/calendar";

interface CalendarUrls {
  google: string;
  outlook: string;
  apple: string;
}

/**
 * Generates calendar subscription URLs for different providers
 *
 * @param feedUrl - The base ICS feed URL
 * @returns Object containing URLs for Google, Outlook and Apple calendars
 */
export function getCalendarUrls(feedUrl: string): CalendarUrls {
  return {
    google: getGoogleCalendarUrl(feedUrl),
    outlook: getOutlookCalendarUrl(feedUrl),
    apple: getAppleCalendarUrl(feedUrl),
  };
}

/**
 * Generates Google Calendar subscription URL
 * Google Calendar uses the webcal:// protocol in the cid parameter
 *
 * @param feedUrl - The original feed URL (http or https)
 * @returns The URL to add the calendar to Google Calendar, with the feed URL as a parameter using webcal:// protocol
 */
function getGoogleCalendarUrl(feedUrl: string): string {
  const webCalUrl = convertToWebcal(feedUrl);
  return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webCalUrl)}`;
}

/**
 * Generates Outlook Calendar subscription URL
 * Outlook uses the standard http(s):// protocol
 *
 * @param feedUrl - The original feed URL (http or https)
 * @returns The URL to add the calendar to Outlook, with the feed URL as a parameter
 */
function getOutlookCalendarUrl(feedUrl: string): string {
  return `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(feedUrl)}&name=${encodeURIComponent(CALENDAR_CONFIG.DEFAULT_CALENDAR_NAME)}`;
}

/**
 * Generates Apple Calendar subscription URL
 * Apple/iOS/macOS use the webcal:// scheme to subscribe to calendars
 *
 * @param feedUrl - The original feed URL (http or https)
 * @returns The feed URL converted to use the webcal:// protocol for Apple Calendar subscription
 */
function getAppleCalendarUrl(feedUrl: string): string {
  return convertToWebcal(feedUrl);
}

/**
 * Converts http(s):// URL to webcal:// protocol
 *
 * @param url - URL to convert
 * @returns URL with webcal:// protocol
 */
function convertToWebcal(url: string): string {
  return url.replace(/^https?:\/\//, "webcal://");
}
