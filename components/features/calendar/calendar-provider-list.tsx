import { CALENDAR_PROVIDER_ICONS } from "@/config/calendar";
import { getCalendarUrls } from "@/utils/calendar";
import { MenuItem } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface CalendarProvider {
  name: string;
  icon: string;
  alt: string;
  iconWidth: number;
  iconHeight: number;
  getUrl: (feedUrl: string) => string;
}

const CALENDAR_PROVIDERS: CalendarProvider[] = [
  {
    name: "Google Agenda",
    icon: CALENDAR_PROVIDER_ICONS.GOOGLE,
    alt: "Google Agenda",
    iconWidth: 18,
    iconHeight: 18,
    getUrl: (feedUrl) => getCalendarUrls(feedUrl).google,
  },
  {
    name: "Outlook Agenda",
    icon: CALENDAR_PROVIDER_ICONS.OUTLOOK,
    alt: "Outlook Agenda",
    iconWidth: 18,
    iconHeight: 18,
    getUrl: (feedUrl) => getCalendarUrls(feedUrl).outlook,
  },
  {
    name: "Apple standaard app",
    icon: CALENDAR_PROVIDER_ICONS.APPLE,
    alt: "Apple Logo",
    iconWidth: 14,
    iconHeight: 14,
    getUrl: (feedUrl) => getCalendarUrls(feedUrl).apple,
  },
];

type Props = {
  feedUrl: string;
};

const CalendarProviderList = ({ feedUrl }: Props) => {
  return (
    <div className="p-1">
      {CALENDAR_PROVIDERS.map((provider) => (
        <MenuItem key={provider.name}>
          {({ focus }) => (
            <Link
              href={provider.getUrl(feedUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                focus ? "bg-yellow-100 text-yellow-900" : "text-gray-900",
                "group flex w-full items-center rounded-lg px-2 py-2 text-sm transition-colors",
              )}
            >
              <div className="mr-2 flex w-5 items-center justify-center">
                <Image
                  src={provider.icon}
                  alt={provider.alt}
                  width={provider.iconWidth}
                  height={provider.iconHeight}
                />
              </div>
              {provider.name}
            </Link>
          )}
        </MenuItem>
      ))}
    </div>
  );
};

export default CalendarProviderList;
