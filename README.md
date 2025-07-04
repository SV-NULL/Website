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
Bevat content.ts voor het lezen en verwerken van de markdown bestanden.

```/pages```

Bevat de Next.js pagina’s:
* index.tsx — Homepagina
* activiteiten.tsx — Overzicht van alle activiteiten
* activiteiten/[slug].tsx — Detailpagina voor een activiteit
* contact.tsx — Contactpagina

```/content```

Bevat alle .md bestanden die gebruikt worden als inhoud voor de website:
* activiteiten/ — Map met één .md bestand per activiteit (bijv. introductie.md, borrel.md, etc.)

```/public```

Voor statische bestanden (zoals afbeeldingen of bestanden).

```/styles```

Bevat globale stijlen en Tailwind-configuratie:
* globals.css — Globale Tailwind-imports en basisstijlen

```tailwind.config.js```

TailwindCSS configuratie.

```next.config.js```

Next.js configuratiebestand.

```package.json```

Projectconfiguratie en scripts.

## Hoe de inhoud wordt geladen
De inhoud van de website wordt geschreven in Markdown en opgeslagen in de map ```content/.``` De metadata (zoals titel en datum) wordt uit de YAML frontmatter gelezen en samen met de inhoud omgezet naar HTML met behulp van remark.

Voor activiteiten wordt automatisch elke ```.md``` file in ```content/activiteiten/``` ingelezen, zodat je eenvoudig nieuwe activiteiten kunt toevoegen door daar een bestand toe te voegen.