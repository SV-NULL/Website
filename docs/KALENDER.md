# Kalender Documentatie

## Overzicht

De kalender op de website is nu volledig dynamisch en filtert automatisch oude evenementen zonder dat je de website opnieuw hoeft te deployen. Daarnaast kunnen kalender items veel meer informatie bevatten om leden volledig te informeren.

## Hoe het werkt

### Dynamische filtering

- De kalender pagina is nu een **Client Component** (`use client`)
- Filtering op datum gebeurt in de browser, niet tijdens de build
- Oude events verdwijnen automatisch zonder redeployment
- De website blijft snel omdat alleen de filtering client-side gebeurt

## Kalender item aanmaken

Maak een nieuw `.md` bestand in de `content/kalender/` folder.

### Voorbeeld: Volledige configuratie

```markdown
---
title: "Herfst/winter bierproeverij"
date: 2025-10-30
time: "19:00 - 22:00"
notDetermined: false
confirmed: true
location: "Café De Proeflokaal"
locationUrl: "https://maps.google.com/?q=Café+De+Proeflokaal+Amsterdam"
cost: "€12,50 voor leden, €15 voor niet-leden"
maxParticipants: 30
organizer: "BorrelCie"
image: "/images/kalender/bierproeverij.jpg"
registerURL: https://forms.office.com/e/4JFp8znZxk
registerDeadline: 2025-10-28T23:59:00
---

De dagen worden korter, dus is het tijd voor een gezellige bierproeverij! 🍻

Samen proeven we verschillende herfst- en winterbiertjes, met natuurlijk wat lekkere hapjes erbij. Een perfecte avond om nieuwe smaken te ontdekken en bij te praten met studiegenoten.

We starten om 19:00 uur met een welkomstdrankje, waarna we onder begeleiding van een biersommelier verschillende speciaalbieren gaan proeven. De avond wordt afgesloten met een gezellige borrel.
```

## Velden Uitleg

### Verplicht

- **`title`**: Titel van het evenement
- **`date`**: Datum in formaat `YYYY-MM-DD` (bijv. `2025-10-30`)
- **`content`**: De markdown content onder de frontmatter (beschrijving)

### Optioneel - Basis informatie

- **`time`**: Tijd van het event (bijv. `"19:00 - 22:00"`)
- **`dateAddition`**: Extra toelichting bij datum (bijv. `"tentamen week"`)
- **`image`**: Pad naar de afbeelding (bijv. `"/images/kalender/event.jpg"`)

### Optioneel - Status

- **`notDetermined`**: `true` als datum/details nog niet zeker zijn
- **`confirmed`**: `true` voor bevestigde events, `false` voor voorlopige plannen
  - Als `confirmed: false` OF `notDetermined: true` → toont "Nog niet definitief" badge (oranje)
  - Als `confirmed: true` EN `notDetermined: false` → toont "✓ Bevestigd" badge (groen)

### Optioneel - Locatie

- **`location`**: Naam van de locatie (bijv. `"Café De Proeflokaal"`)
- **`locationUrl`**: Google Maps link naar de locatie
  - Formaat: `https://maps.google.com/?q=Naam+Van+Locatie+Stad`
  - Of gebruik Google Maps → Deel → Link kopiëren

### Optioneel - Aanmelding

- **`registerURL`**: Link naar aanmeldformulier
- **`registerDeadline`**: Deadline voor aanmelden in formaat `YYYY-MM-DDTHH:MM:SS`
  - Voorbeeld: `2025-10-28T23:59:00` (28 okt 2025, 23:59)
  - Na deze datum toont de website "Aanmelden gesloten"

### Optioneel - Extra informatie

- **`cost`**: Kosten van het event
  - Voorbeelden: `"Gratis"`, `"€5 voor leden"`, `"€10"`, `"€12,50 voor leden, €15 voor niet-leden"`
- **`maxParticipants`**: Maximum aantal deelnemers (getal)
- **`organizer`**: Organiserende commissie of persoon (bijv. `"BorrelCie"`, `"Het Bestuur"`)

## Voorbeelden

### Voorbeeld 1: Definitieve activiteit met aanmelding

```markdown
---
title: "1ste blokborrel"
date: 2025-11-14
time: "18:00 - 23:00"
confirmed: true
location: "Studievereniging SV NULL (lokaal A1.12)"
cost: "Gratis voor leden"
organizer: "Het Bestuur"
image: "/images/kalender/blokborrel-1.jpg"
---

Semesters? Leuk idee van de opleiding. Wij houden het liever bij blokken!

We starten om 18:00 uur met een ALV en gaan daarna gezellig borrelen.
```

### Voorbeeld 2: Voorlopige activiteit

```markdown
---
title: "Op reis"
date: 2026-03-01
notDetermined: true
confirmed: false
cost: "Nog niet bekend (waarschijnlijk €150-250)"
organizer: "ReisCie"
image: "/images/kalender/reis.jpg"
---

Onze Reiscommissie is hard aan het werk om dit jaar weer een leuke trip te plannen.

De datum, locatie en exacte kosten worden binnenkort bekendgemaakt.
```

### Voorbeeld 3: Event met aanmeldlimiet

```markdown
---
title: "Workshop Git & GitHub"
date: 2025-11-20
time: "16:00 - 18:00"
confirmed: true
location: "PC-zaal B2.03"
cost: "Gratis"
maxParticipants: 20
organizer: "StudieSuccesCie"
registerURL: https://forms.office.com/e/abc123
registerDeadline: 2025-11-18T23:59:00
image: "/images/kalender/workshop.jpg"
---

Leer de basis van Git en GitHub in deze hands-on workshop!

Neem je eigen laptop mee. Geen ervaring vereist, we beginnen vanaf het begin.
```

## Tips

### Voor een goede gebruikerservaring:

1. **Wees compleet**: Vul zoveel mogelijk velden in zodat leden niet hoeven te vragen
2. **Wees duidelijk over status**:
   - Gebruik `confirmed: true` als alles 100% zeker is
   - Gebruik `notDetermined: true` of `confirmed: false` als details nog kunnen wijzigen
3. **Locatie met link**: Voeg altijd een Google Maps link toe als de locatie niet bekend is bij leden
4. **Aanmelddeadline**: Stel altijd een deadline in bij events met beperkte plekken
5. **Kosten transparant**: Vermeld altijd de kosten, ook als het gratis is
6. **Organisator**: Vermeld wie het organiseert, dan weten leden wie ze kunnen bereiken

### Datum formatting:

- Datum: `YYYY-MM-DD` (bijv. `2025-10-30`)
- Deadline: `YYYY-MM-DDTHH:MM:SS` (bijv. `2025-10-28T23:59:00`)
- Tijd: Vrije tekst (bijv. `"19:00 - 22:00"`, `"Vanaf 20:00"`)

### Google Maps link maken:

1. Open Google Maps
2. Zoek de locatie
3. Klik op "Delen"
4. Kopieer de link
5. Of gebruik: `https://maps.google.com/?q=Naam+Van+Locatie+Stad`

## Technische details

### Client-side filtering

De kalender pagina gebruikt `use client` en `useMemo` om de filtering te doen:

```tsx
const upcomingItems = useMemo(() => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return allItems.filter((item) => {
    if (!item.date) return false;
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate >= now;
  });
}, [allItems]);
```

Dit betekent:

- Items worden gefilterd in de browser
- Geen server-side rendering voor de lijst
- Automatische updates wanneer de datum verandert
- Blijft snel omdat het alleen filtering is, geen data fetching

### Performance

- De markdown files worden nog steeds server-side geladen (build time)
- Alleen de filtering gebeurt client-side
- Minimale impact op performance
- De `useMemo` hook voorkomt onnodige herberekeningen

## Veelgestelde vragen

**Q: Moet ik de website redeployen als een event is geweest?**  
A: Nee! De filtering gebeurt automatisch in de browser. Events verdwijnen vanzelf na de datum.

**Q: Wat als de datum nog niet bekend is?**  
A: Zet `notDetermined: true` en gebruik een geschatte datum. De badge "Nog niet definitief" maakt het duidelijk.

**Q: Kan ik de aanmeldknop later toevoegen?**  
A: Ja! Voeg gewoon `registerURL` toe aan de frontmatter en deploy. De knop verschijnt automatisch.

**Q: Hoe stop ik aanmeldingen?**  
A: Zet een `registerDeadline`. Na deze datum toont de website "Aanmelden gesloten".

**Q: Moet ik alle velden invullen?**  
A: Nee, alleen `title`, `date` en content zijn verplicht. Vul alleen in wat relevant is.
