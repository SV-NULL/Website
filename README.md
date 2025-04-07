# Studievereniging Website

Dit project is een statische website voor een studievereniging, gebouwd met **Next.js** en **TailwindCSS**. De website bevat verschillende pagina's, zoals een homepagina, activiteitenpagina, detailpagina's en een contactpagina. De inhoud wordt dynamisch geladen uit Markdown-bestanden.

## Vereisten

Zorg ervoor dat je de volgende software op je systeem hebt geïnstalleerd:

- [Node.js](https://nodejs.org/) (versie 14 of hoger)
- [npm](https://www.npmjs.com/)

## Installatie

Volg deze stappen om het project lokaal te draaien:

1. Clone het project
2. Navigeer in je terminal naar de directory /svnull
3. Installeer de packages: ```npm install```
4. Start de development omgeving ```npm run dev```
5. Bekijk de site op http://localhost:3000

## Codebase structuur
De codebase is als volgt opgebouwd:

```/components```
Bevat herbruikbare componenten zoals:
* Navbar.tsx — Navigatiecomponent bovenaan de pagina.

```/lib```
Bevat hulpfuncties en logica, zoals:
* markdown.ts — Leest en verwerkt Markdown-bestanden met metadata.
* activiteiten.ts — Logica voor het ophalen en tonen van activiteiten.

```/pages```

Bevat de Next.js pagina’s (routes):
* index.tsx — Homepagina
* activiteiten.tsx — Overzicht van alle activiteiten
* activiteiten/[slug].tsx — Detailpagina voor een activiteit
* contact.tsx — Contactpagina

```/content```

Bevat alle .md bestanden die gebruikt worden als inhoud voor de website:
* home.md — Inhoud voor de homepagina
* activiteiten/ — Map met één .md bestand per activiteit (bijv. introductie.md, borrel.md, etc.)

```/public```

Voor statische bestanden (zoals afbeeldingen of logo's).

```/styles```

Bevat globale stijlen en Tailwind-configuratie:
* globals.css — Globale Tailwind-imports en basisstijlen

```tailwind.config.js```

TailwindCSS configuratie.

```next.config.js```

Next.js configuratiebestand.

```package.json```

Projectconfiguratie en scripts.

## Screenshots

Hieronder volgen ook screenshots van deze implementatie voor het gemak:

![image](https://github.com/user-attachments/assets/01b49480-e182-430e-995d-60069bb0fa1f)

![image](https://github.com/user-attachments/assets/4e1bbe56-970c-4ed6-bfd7-73a8d591e11a)

![image](https://github.com/user-attachments/assets/954147a4-1003-48b6-8bb8-481b599b8b99)

![image](https://github.com/user-attachments/assets/3624e36a-06c0-4207-9351-1e2063059e88)



