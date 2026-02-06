"use client";

import { useFeedUrl } from "@/hooks/use-feed";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { Rss } from "lucide-react";
import { Fragment } from "react";
import CalendarProviderList from "./calendar-provider-list";
import FeedUrlDisplay from "./feed-url-display";

export default function CalendarFeedButton() {
  const feedUrl = useFeedUrl();

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
            <CalendarProviderList feedUrl={feedUrl} />
            <FeedUrlDisplay feedUrl={feedUrl} />
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
