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

De codebase is als volgt opgebouwd:
/svnull
│
├── /components             # Bevat herbruikbare componenten zoals Navbar en andere UI-elementen
│   ├── Navbar.tsx          # Navigatiebalk component
│
├── /lib                    # Bevat logica en utility functies
│   ├── markdown.ts         # Functies voor het inlezen van en verwerken van Markdown-bestanden
│   ├── activiteiten.ts     # Functies voor het ophalen en verwerken van activiteiten
│
├── /pages                  # Alle pagina's van de website
│   ├── /index.tsx          # Homepagina
│   ├── /activiteiten.tsx   # Activiteitenpagina
│   ├── /contact.tsx        # Contactpagina
│
├── /public                 # Bevat statische bestanden zoals afbeeldingen
│
├── /styles                 # CSS-bestanden (inclusief globals.css voor Tailwind)
│   ├── globals.css         # Globale stijlen (waar Tailwind wordt geïmporteerd)
│
├── tailwind.config.js      # Configuratiebestand voor TailwindCSS
├── next.config.js          # Configuratiebestand voor Next.js
├── package.json            # Projectconfiguratie en afhankelijkheden
