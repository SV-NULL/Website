# Kortingssysteem voor SV NULL Lidmaatschap

Dit systeem maakt het mogelijk om kortingsacties te maken voor nieuwe leden van SV NULL.

## Hoe werkt het?

1. **Kortingen configureren**: In `config/discounts.ts` kun je nieuwe kortingen toevoegen
2. **Links genereren**: Met het script kun je veilige links genereren
3. **QR-codes maken**: Van de gegenereerde links kun je QR-codes maken
4. **Automatische verwerking**: Het formulier detecteert automatisch kortingen en toont dit in het formulier en de verstuurde email

## Kortingen beheren

### Nieuwe korting toevoegen

Bewerk `config/discounts.ts` en voeg een nieuwe korting toe:

```typescript
{
  id: "nieuw2025",           // Unieke ID voor de korting
  name: "Nieuwjaarskorting", // Naam die getoond wordt
  description: "10 euro korting voor nieuwe leden", // Beschrijving
  amount: "€10,00 korting",  // Korting amount (vrije tekst)
  startDate: "2024-01-01",   // Startdatum (YYYY-MM-DD)
  endDate: "2024-01-31",     // Einddatum (YYYY-MM-DD)
  createdAt: "2024-01-01",   // Aanmaakdatum
}
```

### Korting deactiveren

Pas de `endDate` aan naar een datum in het verleden of de `startDate` naar een datum in de toekomst.

## Links genereren

Gebruik het script om veilige links te genereren:

```bash
# TypeScript versie (aanbevolen)
npx tsx scripts/generate-discount-url.ts nieuw2025

# Met custom base URL
npx tsx scripts/generate-discount-url.ts nieuw2025 https://svnull.nl
```

Dit genereert een URL zoals:

```
https://svnull.nl/word-lid?discount=d2VsY29tZTIwMjQtc3YtbnVsbC1kaXNjb3VudC1zYWx0LTIwMjQtMTk4MTA
```

## Veiligheid

- Links zijn permanent geldig binnen de kortingsperiode
- Kortingen zijn alleen geldig tussen start- en einddatum
- Links bevatten geen gevoelige informatie
- Ongeldige of verlopen kortingen worden niet geaccepteerd

## QR-codes maken

Je kunt van de gegenereerde URLs QR-codes maken met online tools zoals:

- [QR Code Generator](https://www.qr-code-generator.com/)

## Wat gebeurt er?

1. **Student scant QR-code**: Wordt doorgestuurd naar het lidmaatschapsformulier
2. **Korting wordt getoond**: Bovenaan het formulier verschijnt een groene banner
3. **Formulier invullen**: Student vult het formulier in zoals normaal
4. **Email wordt verstuurd**: In de email naar svnull@che.nl staat duidelijk welke korting is toegepast
5. **Betaalverzoek aanpassen**: Op basis van de email kun je het juiste bedrag berekenen

## Email template

De korting verschijnt automatisch in de email onder "CONTRIBUTIE & OPMERKINGEN":

```
Toegepaste korting: Welkomstkorting (€5,00 korting)
```

## Troubleshooting

### Link werkt niet meer

Controleer of de korting nog geldig is (tussen start- en einddatum). Als de korting verlopen is, moet je de einddatum aanpassen of een nieuwe korting aanmaken.

### Korting wordt niet getoond

- Controleer of de korting `isActive: true` heeft in de configuratie
- Controleer of de link correct is gegenereerd
- Controleer of er geen typfouten in de URL staan
