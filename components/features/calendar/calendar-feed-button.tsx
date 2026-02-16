"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Rss, Copy, Check } from "lucide-react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { clsx } from "clsx";

export default function CalendarFeedButton() {
  const [feedUrl, setFeedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedUrl(`${window.location.origin}/feed.ics`);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    const url = feedUrl;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((e) => {
          console.error("Failed to copy using Clipboard API", e);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const getGoogleUrl = () => {
    const googleFeedUrl = feedUrl.replace(/^https?:\/\//, "webcal://");
    return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(googleFeedUrl)}`;
  };

  const getOutlookUrl = () => {
    return `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(feedUrl)}&name=${encodeURIComponent("s.v. NULL")}`;
  };

  const getWebCalUrl = () => {
    return feedUrl.replace(/^https?:\/\//, "webcal://");
  };

  return (
    <div className="relative inline-block text-left">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 cursor-pointer">
          <Rss className="h-4 w-4" />
          Abonneren op Agenda
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
              <MenuItem>
                {({ focus }) => (
                  <a
                    href={getGoogleUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(
                      focus ? "bg-yellow-100 text-yellow-900" : "text-gray-900",
                      "group flex w-full items-center rounded-lg px-2 py-2 text-sm",
                    )}
                  >
                    <div className="mr-2 flex w-5 items-center justify-center">
                      <Image
                        src="/images/google-calendar.png"
                        alt="Google Agenda"
                        width={18}
                        height={18}
                      />
                    </div>
                    Google Agenda
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href={getOutlookUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(
                      focus ? "bg-yellow-100 text-yellow-900" : "text-gray-900",
                      "group flex w-full items-center rounded-lg px-2 py-2 text-sm",
                    )}
                  >
                    <div className="mr-2 flex w-5 items-center justify-center">
                      <Image
                        src="/images/outlook-calendar.png"
                        alt="Outlook Agenda"
                        width={18}
                        height={18}
                      />
                    </div>
                    Outlook Agenda
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href={getWebCalUrl()}
                    className={clsx(
                      focus ? "bg-yellow-100 text-yellow-900" : "text-gray-900",
                      "group flex w-full items-center rounded-lg px-2 py-2 text-sm",
                    )}
                  >
                    <div className="mr-2 flex w-5 items-center justify-center">
                      <Image
                        src="/images/Apple_logo_black.svg"
                        alt="Apple Logo"
                        width={14}
                        height={14}
                      />
                    </div>
                    Apple standaard app
                  </a>
                )}
              </MenuItem>
            </div>
            <div className="p-2">
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2 border border-gray-100">
                <span className="flex-1 truncate font-mono text-xs text-gray-600 select-all">
                  {feedUrl || "Loading..."}
                </span>
                <button
                  onClick={copyToClipboard}
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
