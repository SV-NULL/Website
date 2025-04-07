# Studievereniging Website — Next.js + Payload CMS

Dit project is gebaseerd op de officiële **[Payload Website Template](https://github.com/payloadcms/payload/tree/main/templates/website)**. Het combineert een moderne **Next.js frontend** met een krachtige **Payload CMS backend** voor het beheren van pagina's, posts en media.

## Vereisten

Zorg ervoor dat je de volgende software op je systeem hebt geïnstalleerd:

- [Node.js](https://nodejs.org/) (versie 14 of hoger)
- [npm](https://www.npmjs.com/)

## Installatie

Volg deze stappen om het project lokaal te draaien:

1. Clone het project
2. Navigeer in je terminal naar de directory ```/svnull```
3. Maak een eigen ```.csv``` bestand aan, hiervoor kan de ```.env.example``` worden gekopieerd.
4. Installeer de packages: ```npm install```
5. Start de development omgeving even kort om de database automatisch aan te maken ```npm run dev```
7. Start opnieuw de development omgeving ```npm run dev```
9. Bekijk de site op http://localhost:3000
10. Op de homepagina staat een link naar het admin panel, wanneer je hierop klikt vraagt Payload dat je een admin account aanmaakt, doe dit.
11. Bekijk vervolgens het admin panel op http://localhost:3000/admin

## Codebase structuur
De belangrijkste mappen en hun functie:

```/src/app```
Bevat de Next.js App Router structuur, inclusief pagina's, layout en routing.

```/src/app/(pages)```
Dynamisch gegenereerde pagina's vanuit Payload CMS content.

```/src/app/globals.css```
Globale styling via TailwindCSS.

```/src/components```
Herbruikbare React-componenten zoals Hero, Header, Footer, enzovoorts.

```/src/blocks```
Alle layout building blocks voor pagina’s (zoals CTA, Media, Archive, enz.).

```/src/collections```
Payload CMS collecties zoals Pages, Posts, Users, Media, enz.

```/src/globals```
Inhoud en configuratie van globale elementen zoals Header en Footer.

```/src/fields```
Custom veldcomponenten voor herbruikbare CMS-configuratie.

```/src/payload-types```
Automatisch gegenereerde TypeScript types van Payload-configuratie.

```/src/config```
Bevat de hoofdconfiguratie van Payload CMS (payload.config.ts).

```/src/seed```
Voorbeelddata en een seeder om de database snel te vullen tijdens ontwikkeling.



## Hoe het werkt
Deze website maakt gebruik van de officiële Payload CMS Website Template. De structuur bestaat uit een Next.js frontend (App Router) en een Payload backend waarin alle content wordt beheerd. Hieronder een overzicht van hoe de template functioneert:

### CMS (Payload)
Alle content wordt beheerd in de Payload admin interface. De belangrijkste onderdelen zijn:
* Pages: Voor het beheren van algemene pagina’s op de site.
* Posts: Voor blogberichten of andere tijdsgebonden publicaties.
* Media: Voor het uploaden en gebruiken van afbeeldingen en andere bestanden.
* Globals: Voor vaste content zoals de navigatie, footer en SEO-data.

Er is gebruikersauthenticatie aanwezig, waarmee toegang tot de admin-omgeving wordt beperkt tot ingelogde gebruikers. Rechten kunnen per collectie worden ingesteld.

### Layout Builder
Pagina’s en posts worden opgebouwd met behulp van een layout builder die blokken ondersteunt. De template bevat standaard de volgende bloktypes:
* Hero
* Content
* Media
* Call To Action
* Archive

Deze blokken kunnen in willekeurige volgorde en samenstelling worden gebruikt om pagina’s vorm te geven.

Nieuwe bloktypes of het aanpassen van bestaande blokken is mogelijk, maar vereist kennis van zowel Payload als Next.js. Dit kan complex en relatief veel werk zijn.

### Frontend (Next.js)
De frontend maakt gebruik van de App Router van Next.js en haalt content op via API-calls naar de Payload backend. Functionaliteiten:
* Server-side rendering van pagina’s
* Preview van draft content via veilige URL’s
* Automatische revalidatie van pagina’s bij wijzigingen (on-demand revalidation)
* Ondersteuning voor SEO, redirects en zoeken (via officiële Payload plugins)

### Extra functionaliteiten
Standaard bevat de template ondersteuning voor:
* Drafts en versiebeheer
* Live preview van content tijdens bewerken
* Zoekfunctionaliteit
* SEO metadata per pagina/post
* Redirectbeheer
* Dark mode (frontend)
* Publicatie inplannen via cron (Scheduled Publishing)

## Hosting en kosten
De frontend (de website zelf) is makkelijk gratis te hosten via diensten als Vercel of Netlify. Echter, voor de backend (Payload CMS) is er altijd een database nodig (bijvoorbeeld PostgreSQL of MongoDB).

Uit onderzoek blijkt dat het ***bijna niet mogelijk is om een cloud database gratis en betrouwbaar te hosten voor productie.*** Ook wanneer services een gratis tier aanbieden, zitten daar vaak strenge beperkingen aan (zoals opslaglimieten, inactiviteitstimers of geen toegang tot backups). In de praktijk komt het er vaak op neer dat je:
* Een ***betaald abonnement*** moet nemen bij bijvoorbeeld Render, Railway, Neon, PlanetScale, of MongoDB Atlas
* Of je eigen VPS moet opzetten en handmatig alles beheren (technisch en onderhoudsintensief)

De kosten hiervan kunnen sterk variëren, maar lopen al snel op naar ***€10–€30 per maand of meer***, afhankelijk van verkeer, opslag en gebruik. Het is dus belangrijk om hiermee rekening te houden als je Payload wilt inzetten voor productie.

## Screenshots

Hieronder volgen ook screenshots van deze implementatie voor het gemak (Hierbij is een pagina genaamd 'test' aangemaakt, met een hero en een content block):

***Homepagina***
![image](https://github.com/user-attachments/assets/fea9e923-f614-43b3-9cfa-ccb3d094e980)

***Admin panel***
![image](https://github.com/user-attachments/assets/3331e64c-b014-43b7-9a41-20e6aa3aa326)

***Pagina's in admin panel***
![image](https://github.com/user-attachments/assets/283f7ef3-50fe-4ae7-8612-94bf885f928f)

***Test pagina header bewerken***
![image](https://github.com/user-attachments/assets/3855f663-b11b-4ede-aa05-5368403b123e)

***Test pagina content bewerken***
![image](https://github.com/user-attachments/assets/92573428-c959-4e9b-9acb-31a504b0fd25)

***Test pagina in de front-end***
![image](https://github.com/user-attachments/assets/200a96c1-3774-48d0-8f7d-f1f673512ca3)


