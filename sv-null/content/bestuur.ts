import { Bestuur } from "@/types/bestuur";
import { ROLES } from "@/types/roles";
import { PERSONS } from "./person";

export const bestuur: Bestuur[] = [
  {
    id: "1ste-bestuur",
    title: "1ste Bestuur",
    subtitle: "2022-2024",
    image: {
      src: "/images/bestuur/1ste-bestuur/1ste-bestuur.jpg",
      alt: "1ste Bestuur",
      isPriority: true,
    },
    content: `
        Welkom bij het eerste bestuur van Studievereniging NULL! In 2022 zijn wij begonnen met de oprichting van deze vereniging en hebben we het uitgebouwd tot wat het nu is: een bruisende gemeenschap met vele leden. We zijn trots met wat we neer hebben kunnen zetten, en we wensen de vereniging het allerbeste toe. Adios
        <br>
        <br>
        Grote dank aan het eerste bestuur, die ook na hun bestuursfunctie actief blijft in de vereniging.
        <br>
        <b>- Het tweede bestuur</b>.
    `,
    members: [
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.VOORZITTER,
        date: "2022-2024",
      },
      {
        person: PERSONS["KURT_VERWEEL"],
        role: ROLES.VICEVOORZITTER,
        date: "2022-2024",
      },
      {
        person: PERSONS["NATALIA_BOROWCZAK"],
        role: ROLES.SECRETARIS,
        date: "2022-2024",
      },
      {
        person: PERSONS["MENNO_JAK"],
        role: ROLES.PENNINGMEESTER,
        date: "2022-2024",
      },
      {
        person: PERSONS["EMMA_DE_HEER"],
        role: ROLES.PR,
        date: "2022-2024",
      },
    ],
  },
  {
    id: "2de-bestuur",
    title: "2de Bestuur",
    subtitle: "2024-2025",
    image: {
      src: "/images/bestuur/2de-bestuur/2de-bestuur.jpg",
      alt: "2de Bestuur",
      isPriority: true,
    },
    content: `
        Geïnspireerd door wat onze oprichters neer hebben gezet, nemen wij met enthousiasme het stokje over komend jaar. We zullen voor jullie klaarstaan en blijven werken aan het door laten groeien van de studievereniging.
        <br>
        <br>
        Mocht je enige vragen hebben of ons willen leren kennen,
        schiet ons gerust even aan!

    `,
    members: [
      {
        person: PERSONS["ROBIN_HEIKAMP"],
        role: ROLES.VOORZITTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["DAAN_RAVENHORST"],
        role: ROLES.VICEVOORZITTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["ANNE_WIL_VAN_DE_BURGT"],
        role: ROLES.SECRETARIS,
        date: "2024-2025",
      },
      {
        person: PERSONS["IRIS_REITSMA"],
        role: ROLES.PENNINGMEESTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["WILKE_VAN_DE_KAMP"],
        role: ROLES.PR,
        date: "2024-2025",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.INTERIM_PENNINGMEESTER,
        date: "2024-2025",
      },
    ],
  },
  {
    id: "3de-bestuur",
    title: "3de Bestuur",
    subtitle: "2025-2026",
    image: {
      src: "/images/bestuur/3de-bestuur/3de-bestuur.png",
      alt: "3de Bestuur",
      isPriority: true,
    },
    content: `
        ~~
    `,
    members: [
      {
        person: PERSONS["TIMO_DE_ZWAAN"],
        role: ROLES.VOORZITTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["DENNIS_WEIJER"],
        role: ROLES.VICEVOORZITTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["ANNE_WIL_VAN_DE_BURGT"],
        role: ROLES.SECRETARIS,
        date: "2024-2025",
      },
      {
        person: PERSONS["TWAN_MEURS"],
        role: ROLES.PENNINGMEESTER,
        date: "2024-2025",
      },
      {
        person: PERSONS["TRISTAN_VAN_OMMEREN"],
        role: ROLES.PR,
        date: "2024-2025",
      },
    ],
  },
];
