import ActivityGrid from "@/components/ActivityGrid";
import Gallery from "@/components/Gallery";
import RotatingText from "@/components/RotatingText";
import { getPartnerItems, getUpcomingCalendarItems } from "@/lib/content";
import { BookOpen, RocketIcon, Users, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const upcomingActivities = getUpcomingCalendarItems(2);

  const partners = getPartnerItems();

  return (
    <main>
      <section className="text-center h-screen flex-row -mb-32">
        <h1 className="pt-48 text-4xl sm:text-7xl font-bold justify-center">
          Wij zijn studievereniging <br />
          <span className="text-yellow-400">NULL</span>
        </h1>
          <div className="mt-6 inline-block overflow-hidden">
            <RotatingText />
          </div>

            {/* Scroll down indicator */}
            <a
              href="#next-section"
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center space-y-1"
            >
              <svg
                className="w-6 h-6 text-yellow-400 animate-chevron delay-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
      </section>

      <section
        id="next-section"
        className="w-screen relative left-1/2 right-1/2 -ml-[50.5vw] -mr-[50.5vw] border-y border-neutral-800 bg-neutral-900 py-12"
      >
        <div className="max-w-6xl mx-auto px-8 py-8 text-center">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Een vereniging die ergens voor staat
          </h2>
          <p className="mb-20 text-gray-300 max-w-2xl mx-auto">
            NULL staat voor <span className="text-yellow-400 font-semibold">Networking</span>,{' '}
            <span className="text-yellow-400 font-semibold">Undertaking</span> en{' '}
            <span className="text-yellow-400 font-semibold">Lifelong Learning</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
            {[
              {
                icon: <Users className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
                title: "Networking",
                text: "Een hechte community opbouwen en waardevolle connecties leggen met mede-studenten en het werkveld."
              },
              {
                icon: <RocketIcon className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
                title: "Undertaking",
                text: "Samen projecten, activiteiten en evenementen neerzetten die energie geven en inspireren."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
                title: "Lifelong Learning",
                text: "Blijven groeien via workshops, lezingen en ervaringen die je ook later van pas komen."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center p-6 bg-neutral-900 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-24">
        <p className="text-center text-yellow-600 text-xl sm:text-2xl">Kalender</p>
        <h2 className="text-center text-5xl font-bold text-yellow-400 mb-16">
          Komende activiteiten
        </h2>
        <ActivityGrid items={upcomingActivities}></ActivityGrid>
        <div className="text-center mt-8">
          <Link
            href="/kalender"
            className="inline-block px-6 py-2.5 rounded-xl font-medium
                      bg-yellow-400 text-black border-2 border-yellow-400
                      hover:bg-transparent hover:text-yellow-400
                      active:bg-transparent active:text-yellow-400
                      transition-all duration-300"
          >
            Bekijk alle activiteiten
          </Link>
        </div>
      </section>

      <section className="bg-neutral-900 w-screen relative left-1/2 right-1/2 -ml-[50.5vw] -mr-[50.5vw] py-12 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-8 pt-8 pb-8">
        <Gallery/>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-24">
        <p className="text-center text-yellow-600 text-xl sm:text-2xl">Lid worden</p>
        <h2 className="text-center text-5xl font-bold text-yellow-400 mb-12">
          Maak het beste van jouw studietijd!
        </h2>
        <p className="text-center">
          Als lid van SV. NULL doe je mee aan toffe activiteiten, leer je bedrijven uit de IT-wereld kennen en maak je vrienden voor het leven. Van gezellige borrels tot inspirerende lezingen en leuke reizen: samen maken we van jouw studietijd een top tijd!
        </p>
        <div className="text-center mt-6">
          <Link
            href="/word-lid"
            className="inline-block px-6 py-2.5 rounded-xl font-medium
                      bg-yellow-400 text-black border-2 border-yellow-400
                      hover:bg-transparent hover:text-yellow-400
                      active:bg-transparent active:text-yellow-400
                      transition-all duration-300"
          >
            Word lid
          </Link>
        </div>
      </section>

      <section className="bg-neutral-900 w-screen relative left-1/2 right-1/2 -ml-[50.5vw] -mr-[50.5vw] py-12 border-y border-neutral-800">
        <div className="max-w-4xl mx-auto px-8 pt-8 pb-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Onze partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="rounded-lg text-center group"
              >
                <Image
                  src={partner.image}
                  alt={partner.title}
                  className="mx-auto mb-4 h-20 w-full object-contain 
                            transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/partner-worden"
              className="inline-block px-6 py-2.5 rounded-xl font-medium
                        bg-yellow-400 text-black border-2 border-yellow-400
                        hover:bg-transparent hover:text-yellow-400
                        active:bg-transparent active:text-yellow-400
                        transition-all duration-300"
            >
              Ook partner worden?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
