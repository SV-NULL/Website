import { Commissie } from "@/types/commisie";
import { ROLES } from "@/types/roles";
import { PERSONS } from "./person";

export const commissies: Commissie[] = [
  {
    id: "activiteiten-commissie",
    title: "Activiteiten Commissie",
    subtitle: "3 leden",
    image: {
      src: "/images/commissies/logos/logo-blauw.png",
      alt: "Activiteiten commissie logo",
      isPriority: true,
    },
    content: "De organisatoren van de activiteiten",
    members: [
      {
        person: PERSONS["TIMO_DE_ZWAAN"],
        role: ROLES.VOORZITTER,
        date: "01-09-2025",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["DENNIS_WEIJER"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
    ],
  },
  {
    id: "ad-commissie",
    title: "Ad Commissie",
    subtitle: "2 leden",
    image: {
      src: "/images/commissies/logos/logo-donkergroen.png",
      alt: "Ad Commissie logo",
      isPriority: true,
    },
    content:
      "De borrelcommisie van SV. NULL! Wij verzorgen alle blokborrels, en staan daar klaar voor jou ;)",
    members: [
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.VOORZITTER,
        date: "01-09-2023",
      },
      {
        person: PERSONS["TIMO_DE_ZWAAN"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
    ],
  },
  {
    id: "introweek-commissie",
    title: "Introweek Commissie",
    subtitle: "7 leden",
    image: {
      src: "/images/commissies/logos/logo-rood.png",
      alt: "Introweek commissie logo",
      isPriority: true,
    },
    content: "De bedenkers & organisatoren van de jaarlijkse introweek.",
    members: [
      {
        person: PERSONS["TIMO_DE_ZWAAN"],
        role: ROLES.VOORZITTER,
        date: "01-09-2024",
      },
      {
        person: PERSONS["DENNIS_WEIJER"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["ROBIN_HEIKAMP"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["ANNE_WIL_VAN_DE_BURGT"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["WILKE_VAN_DE_KAMP"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["EMMA_DE_HEER"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
    ],
  },
  {
    id: "promotie-commissie",
    title: "Promotie Commissie",
    subtitle: "5 leden",
    image: {
      src: "/images/commissies/logos/logo-paars.png",
      alt: "Promotie commissie logo",
      isPriority: true,
    },
    content: "De mensen achter de social-media designs, teksten en merch.",
    members: [
      {
        person: PERSONS["EMMA_DE_HEER"],
        role: ROLES.VOORZITTER,
        date: "01-09-2022",
      },
      {
        person: PERSONS["TRISTAN_VAN_OMMEREN"],
        role: ROLES.LID,
        date: "01-09-2025",
      },
      {
        person: PERSONS["WILKE_VAN_DE_KAMP"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["ANNE_KOSSEN"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["NATALIA_BOROWCZAK"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
    ],
  },
  {
    id: "reis-commissie",
    title: "Reis Commissie",
    subtitle: "5 leden",
    image: {
      src: "/images/commissies/logos/logo-geel.png",
      alt: "Reis commissie logo",
      isPriority: true,
    },
    content: "De verzorgers & organisatoren van de mooiste en leukste reizen!",
    members: [
      {
        person: PERSONS["TIMO_DE_ZWAAN"],
        role: ROLES.VOORZITTER,
        date: "01-09-2022",
      },
      {
        person: PERSONS["TRISTAN_VAN_OMMEREN"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.LID,
        date: "01-09-2022",
      },
      {
        person: PERSONS["ROBIN_HEIKAMP"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["WILKE_VAN_DE_KAMP"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
    ],
  },
  {
    id: "website-commissie",
    title: "Website Commissie",
    subtitle: "5 leden",
    image: {
      src: "/images/commissies/logos/logo-groen.png",
      alt: "Website commissie logo",
      isPriority: true,
    },
    content: "Het team achter de website",
    members: [
      {
        person: PERSONS["DENNIS_WEIJER"],
        role: ROLES.VOORZITTER,
        date: "01-03-2024",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["EMMA_DE_HEER"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["WILKE_VAN_DE_KAMP"],
        role: ROLES.LID,
        date: "01-09-2023",
      },
      {
        person: PERSONS["ROBIN_HEIKAMP"],
        role: ROLES.LID,
        date: "01-09-2024",
      },
    ],
  },
];
