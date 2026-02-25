"use client";

import { useClipboard } from "@/hooks/use-clipboard";
import {
  getGoogleCalendarUrl,
  getOutlookCalendarUrl,
  toWebcal,
} from "@/lib/calendar/feed-urls";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { clsx } from "clsx";
import { Check, Copy, Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const CALENDAR_APPS = [
  {
    label: "Google Agenda",
    icon: "/images/google-calendar.png",
    iconSize: 18,
    getUrl: (feedUrl: string) => getGoogleCalendarUrl(feedUrl),
  },
  {
    label: "Outlook Agenda",
    icon: "/images/outlook-calendar.png",
    iconSize: 18,
    getUrl: (feedUrl: string) => getOutlookCalendarUrl(feedUrl),
  },
  {
    label: "Apple standaard app",
    icon: "/images/Apple_logo_black.svg",
    iconSize: 14,
    getUrl: (feedUrl: string) => toWebcal(feedUrl),
  },
];

export default function CalendarFeedButton() {
  const { copied, copy } = useClipboard();

  const feedUrl =
    typeof window !== "undefined" ? `${window.location.origin}/feed.ics` : "";

  return (
    <div className="relative inline-block text-left">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 cursor-pointer">
          <Rss className="h-4 w-4" />
          Toevoegen aan mijn agenda
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="mt-2 w-72 origin-top-left divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 sm:absolute sm:left-0">
            <div className="p-1">
              {CALENDAR_APPS.map(({ label, icon, iconSize, getUrl }) => (
                <MenuItem key={label}>
                  {({ focus }) => (
                    <Link
                      href={getUrl(feedUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className={clsx(
                        focus
                          ? "bg-yellow-100 text-yellow-900"
                          : "text-gray-900",
                        "group flex w-full items-center rounded-lg px-2 py-2 text-sm",
                      )}
                    >
                      <div className="mr-2 flex w-5 items-center justify-center">
                        <Image
                          src={icon}
                          alt={label}
                          width={iconSize}
                          height={iconSize}
                        />
                      </div>
                      {label}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </div>
            <div className="p-2">
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2 border border-gray-100">
                <span className="flex-1 truncate font-mono text-xs text-gray-600 select-all">
                  {feedUrl || "Loading..."}
                </span>
                <button
                  onClick={() => copy(feedUrl)}
                  className="text-gray-500 hover:text-black transition-colors"
                  title="Kopieer URL"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
