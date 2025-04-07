# Studievereniging Website (Next.js App Router)

Dit project is een statische website voor een studievereniging, gebouwd met **Next.js (App Router)** en **TailwindCSS**. De website bevat verschillende pagina's, zoals een homepagina, activiteitenpagina, detailpagina's en een contactpagina. De activiteitengegevens worden geladen uit een array in de code.

## Vereisten

Zorg ervoor dat je de volgende software op je systeem hebt geïnstalleerd:

- [Node.js](https://nodejs.org/) (versie 18.17 of hoger aanbevolen voor App Router)
- [npm](https://www.npmjs.com/) (of yarn/pnpm)

## Installatie

Volg deze stappen om het project lokaal te draaien:

1.  Clone het project
2.  Navigeer in je terminal naar de projectdirectory (`/svnull`)
3.  Installeer de packages: `npm install`
4.  Start de development omgeving: `npm run dev`
5.  Bekijk de site op http://localhost:3000

## Codebase structuur

De codebase is als volgt opgebouwd met de Next.js App Router:

`/app`
Bevat de applicatie routes en UI. Dit is de kern van de App Router structuur.

- `layout.tsx` — De root layout die geldt voor de hele applicatie. Bevat vaak de `<html>` en `<body>` tags en importeert globale stijlen. Kan ook gedeelde UI zoals de Navbar bevatten.
- `page.tsx` — De UI voor de homepagina (route `/`).
- `/activiteiten/page.tsx` — De UI voor de activiteiten overzichtspagina (route `/activiteiten`).
- `/activiteiten/[slug]/page.tsx` — De UI voor de detailpagina van een specifieke activiteit (dynamische route, bijv. `/activiteiten/introductie`). De `[slug]` map is de dynamische parameter.
- `/contact/page.tsx` — De UI voor de contactpagina (route `/contact`).
- `not-found.tsx` — Custom 404 error pagina die getoond wordt als een route niet bestaat.
- (Optioneel) `/activiteiten/layout.tsx` — Een specifieke layout die alleen geldt voor de routes binnen `/activiteiten` (nu niet geïmplementeerd).

`/components`
Bevat herbruikbare React componenten, vaak Server Components of Client Components ("use client").

- `Navbar.tsx` — Navigatiecomponent, wordt gebruikt in `app/layout.tsx`.
- (Andere herbruikbare UI-elementen)

`/lib`
Bevat databronnen en kernlogica, zoals:

- `activities.ts` — Definieert de lijst met activiteiten (als een array van objecten) en bevat functies om deze data op te halen (bijv. `getActivityBySlug`).

`/types`
Bevat TypeScript type definities, zoals:

- `activities.ts` — Definitie van het `Activity` type.

`/utils`
Bevat hulpfuncties voor specifieke taken, zoals:

- `date.ts` — Functies voor het formatteren of manipuleren van datums.

`/public`
Voor statische bestanden die direct toegankelijk zijn via de root URL (zoals afbeeldingen, favicon, of logo's).

`/styles` (of direct in /app)

`tailwind.config.js`
TailwindCSS configuratiebestand.

`next.config.js`
Next.js configuratiebestand.

`package.json`
Projectconfiguratie, dependencies en scripts.

## Hoe de inhoud wordt geladen

De inhoud voor de activiteiten wordt gedefinieerd als een array van JavaScript-objecten in het bestand `lib/activities.ts`. Elke activiteit heeft eigenschappen zoals `slug`, `title`, `date`, en `content`, gedefinieerd volgens het type in `types/activities.ts`.

Het bestand `lib/activities.ts` bevat ook functies, zoals `getActivityBySlug`, om specifieke activiteiten op te zoeken op basis van hun `slug`.

In de App Router worden deze functies en de data-array geïmporteerd en gebruikt binnen de Server Components (de `page.tsx` bestanden) om de benodigde data te verkrijgen tijdens het renderen op de server.

Voor de detailpagina van een activiteit gebruikt de dynamische route `app/activiteiten/[slug]/page.tsx` de `slug` parameter uit de URL om de juiste activiteit op te zoeken in de array via de `getActivityBySlug` functie. Als een activiteit met de gegeven slug niet wordt gevonden, kan Next.js worden geconfigureerd om de `app/not-found.tsx` pagina te tonen.

## Screenshots

Hieronder volgen ook screenshots van deze implementatie voor het gemak:

![image](https://github.com/user-attachments/assets/01b49480-e182-430e-995d-60069bb0fa1f)

![image](https://github.com/user-attachments/assets/4e1bbe56-970c-4ed6-bfd7-73a8d591e11a)

![image](https://github.com/user-attachments/assets/954147a4-1003-48b6-8bb8-481b599b8b99)

![image](https://github.com/user-attachments/assets/3624e36a-06c0-4207-9351-1e2063059e88)
