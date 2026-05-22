import { Committee } from "@/types/committee";
import { ROLES } from "@/types/roles";
import { PERSONS } from "./person";

export const committees: Committee[] = [
  {
    id: "activiteiten-commissie",
    title: "Activiteiten Commissie",
    subtitle: "3 leden",
    image: {
      src: "/images/commissies/logos/logo-blauw.png",
      alt: "Activiteiten commissie logo",
      isPriority: true,
    },
    content: "De organisatoren van alle activiteiten van s.v. NULL.",
    description:
      "De Activiteiten Commissie is het kloppende hart van s.v. NULL. Zij organiseren uiteenlopende evenementen die het verenigingsleven levendig houden. Van gezellige uitjes tot workshops en bijzondere ervaringen. Als lid van deze commissie leer je hoe je evenementen van A tot Z organiseert en draag je direct bij aan de sfeer binnen de vereniging.",
    activities: [
      "Organiseren van sociale evenementen, uitjes en bijzondere ervaringen",
      "Coördineren van workshops, bedrijfsbezoeken en kennissessies",
      "Plannen en uitvoeren van ledenactiviteiten door het hele jaar heen",
      "Samenwerken met andere commissies voor gecombineerde evenementen",
    ],
    openForSignup: true,
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
    content: "De borrelcommissie van s.v. NULL.",
    description:
      "De Ad Commissie is verantwoordelijk voor de gezelligheid bij borrels. Na elk tentamenblok organiseren zij de blokborrel: hét moment om even bij te komen met je medestudenten. De commissie regelt alles van drank en hapjes tot de locatie en de sfeer. Zin om meer gezelligheid in het verenigingsleven te brengen? Dan is dit jouw plek!",
    activities: [
      "Organiseren van alle blokborrels na elk tentamenblok",
      "Regelen van drank, hapjes en een passende locatie",
      "Bedenken en uitvoeren van thema-avonden en speciale borrelevenementen",
      "Zorgen voor een ontspannen en gezellige sfeer voor alle leden",
    ],
    openForSignup: true,
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
    content: "De bedenkers & organisatoren van de jaarlijkse introductieweek.",
    description:
      "De Introweek Commissie organiseert de jaarlijkse introductieweek voor nieuwe studenten. Deze week staat volledig in het teken van kennismaken: met je medestudenten, met de opleiding HBO-ICT en met s.v. NULL. De commissie bedenkt het programma, regelt de activiteiten en zorgt ervoor dat eerstejaars zich meteen welkom voelen. Een verantwoordelijke en tegelijk superleuke commissie om deel van uit te maken!",
    activities: [
      "Plannen en uitvoeren van de volledige introductieweek voor eerstejaars",
      "Begeleiden en verwelkomen van nieuwe leden van de opleiding",
      "Organiseren van kennismakingsspellen, activiteiten en sociale momenten",
      "Samenwerken met de opleiding en andere commissies voor een soepele introductie",
    ],
    openForSignup: true,
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
    content: "Het creatieve team achter de uitstraling van s.v. NULL.",
    description:
      "De Promotie Commissie verzorgt de zichtbaarheid en uitstraling van s.v. NULL. Van social-media posts tot merch en grafisch ontwerp. Zij zijn het creatieve team dat bepaalt hoe de vereniging naar buiten treedt. Ben je creatief, heb je oog voor design of wil je ervaring opdoen met branding en communicatie? Dan ben je van harte welkom!",
    activities: [
      "Ontwerpen en produceren van social-media content voor Instagram en LinkedIn",
      "Creëren en beheren van s.v. NULL-merch voor leden",
      "Grafisch ontwerp voor evenementen, posters en promotie-uitingen",
      "Bewaken en versterken van de huisstijl en identiteit van de vereniging",
    ],
    openForSignup: true,
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
    content: "De organisatoren van de mooiste reizen van s.v. NULL.",
    description:
      "De Reis Commissie organiseert de mooiste reizen voor leden van s.v. NULL. Van een dagtrip in Nederland tot een meerdaagse groepsreis naar het buitenland. De Reis Commissie maakt onvergetelijke ervaringen mogelijk. Je leert hoe je een reis van begin tot eind organiseert: van bestemming kiezen en budget bewaken tot het volledige programma uitwerken.",
    activities: [
      "Budgetbeheer",
      "Volledig organiseren van reizen voor alle leden",
      "Regelen van logistiek, vervoer, accommodatie en activiteitenplanning",
    ],
    openForSignup: true,
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
    subtitle: "6 leden",
    image: {
      src: "/images/commissies/logos/logo-groen.png",
      alt: "Website commissie logo",
      isPriority: true,
    },
    content: "Het team achter de website van s.v. NULL.",
    description:
      "De Website Commissie bouwt en onderhoudt de website van s.v. NULL. Het team bestaat uit studenten die hun technische kennis inzetten voor de vereniging, en daarmee ook direct praktijkervaring opdoen. Van nieuwe features tot bugfixes en design-verbeteringen: jij draagt bij aan een toegankelijke, moderne website voor alle doelgroepen van de vereniging.",
    activities: [
      "Ontwikkelen en onderhouden van de verenigingswebsite (Next.js, TypeScript, Tailwind)",
      "Implementeren van nieuwe features en UX-verbeteringen",
      "Zorgen voor een snelle, toegankelijke en moderne website",
      "Samenwerken met andere commissies voor digitale communicatie en content",
    ],
    openForSignup: true,
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
      {
        person: PERSONS["TIM_WASSINK"],
        role: ROLES.LID,
        date: "01-01-2026",
      },
    ],
  },
];
