# Studievereniging NULL Website

Deze repository bevat de website van Studievereniging NULL, gebouwd met **Next.js** (13+) en **TailwindCSS**. De site onderscheidt:

1. **Pages gehost via Markdown + SSG**
2. **One-off pagina’s** (hardcoded React/TSX)

## 📁 Mappenstructuur

```
/ (root)
├─ app/                # Next.js 13+ "app router"
│  ├─ components/      # UI-componenten (CTA, cards, navbar, etc.)
│  ├─ layout.tsx       # Algemene layout voor alle pagina's
│  ├─ page.tsx         # Homepagina
│  └─ ...              # Pagina’s (SGG of hardcoded)
│
├─ content/            # Markdown-content voor SSG-pagina’s
│  ├─ bestuur/         # MD-bestanden voor besturen
│  ├─ commissies/      # MD-bestanden voor commissies
│  ├─ kalender/        # Activiteiten
│  ├─ partners/        # Partnerinfo
│  ├─ vacatures/       # Stage-/vacaturepagina’s
│  └─ vakken/          # Jaar-1.md t/m Jaar-4.md (cursusdata)
│
├─ lib/                # Data-loaders en frontmatter-parsing
│  └─ content.ts       # `getXXXItems()` en `getXXXBySlug()` functies
│
├─ public/             # Statische assets (afbeeldingen en documenten)
│
├─ styles/             # Globale styles en Tailwind-configuratie
│  └─ globals.css      # Base styles + Tailwind imports
│
├─ tailwind.config.js  # TailwindCSS configuratie
├─ next.config.js      # Next.js configuratie
└─ package.json        # Dependencies en scripts
```


## ⚡ SSG-pagina’s via Markdown

De volgende secties worden volledig opgebouwd via **Static Site Generation** door MD-bestanden in `/content`:

* **Bestuur**: `getBestuurItems()`, `getBestuurBySlug()`
* **Commissies**: `getCommissieItems()`, `getCommissieBySlug()`
* **Kalender**: `getCalendarItems()`, `getUpcomingCalendarItems()`
* **Partners**: `getPartnerItems()`, `PartnerFlippingCard` voor presentatie
* **Vacatures**: `getVacatureItems()`, `getVacatureBySlug()`
* **Vakken**: `getVakkenItems()`, `getVakkenBySlug()`

Plaats nieuwe content door een `.md`-bestand toe te voegen onder de overeenkomstige submap in `/content`.


## 📄 One-off Pagina’s

Deze pagina’s worden niet via Markdown gegenereerd, maar in `app/` als individuele React-componenten:

* Home (`app/page.tsx`)
* Over ons, Word lid, Contact, Studentenwelzijn, etc.
* Vakken overzicht: `app/vakken/page.tsx`
* Andere content die niet in de generieke SSG-flow past.

### Wanneer hardcoded?

Gebruik een one-off React pagina als:

* De layout en logica uniek zijn
* Geen herhaalbare Markdown-structuur past


## 🚀 Starten & Ontwikkelen

1. Clone de repo
2. `npm install`
3. `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Scripts

* `dev`: draait de development server
* `build`: bouwt de site voor productie
* `start`: serveert de productie-build


## 🌐 Deployment
De main branch wordt automatisch gedeployed op Netlify. Bij elke push naar main wordt de site live bijgewerkt.


## 🛠️ Tips

* **Nieuwe SSG-content**: voeg `.md` toe en rebuild
* **Component library**: herbruik UI in `/app/components`
* **Styling**: gebruik Tailwind-utility classes in JSX


