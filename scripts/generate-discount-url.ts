/**
 * Utility script to generate discount URLs for SV NULL membership
 * Usage: npx tsx scripts/generate-discount-url.ts <discount-id> [base-url]
 */

import { DISCOUNTS, generateDiscountUrl } from "../config/discounts";

const discountId = process.argv[2];
const baseUrl = process.argv[3] || "https://svnull.nl";

if (!discountId) {
  console.log(
    "Gebruik: npx tsx scripts/generate-discount-url.ts <discount-id> [base-url]"
  );
  console.log("\nBeschikbare kortingen:");
  const today = new Date().toISOString().split("T")[0];

  DISCOUNTS.forEach((discount) => {
    const isActive = today >= discount.startDate && today <= discount.endDate;
    const status = isActive ? "Actief" : "Inactief";
    console.log(
      `- ${discount.id}: ${discount.name} (${status}, geldig van ${discount.startDate} tot ${discount.endDate})`
    );
  });
  process.exit(1);
}

const discount = DISCOUNTS.find((d) => d.id === discountId);
if (!discount) {
  console.log(`Korting '${discountId}' niet gevonden.`);
  console.log("\nBeschikbare kortingen:");
  const today = new Date().toISOString().split("T")[0];

  DISCOUNTS.forEach((discount) => {
    const isActive = today >= discount.startDate && today <= discount.endDate;
    const status = isActive ? "Actief" : "Inactief";
    console.log(
      `- ${discount.id}: ${discount.name} (${status}, geldig van ${discount.startDate} tot ${discount.endDate})`
    );
  });
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const isActive = today >= discount.startDate && today <= discount.endDate;

if (!isActive) {
  console.log(
    `Waarschuwing: Korting '${discountId}' is momenteel niet actief!`
  );
  console.log(`Geldig van ${discount.startDate} tot ${discount.endDate}`);
}

const url = generateDiscountUrl(discountId, baseUrl);
console.log(`\nKorting: ${discount.name}`);
console.log(`Beschrijving: ${discount.description}`);
console.log(`Korting: ${discount.amount}`);
console.log(`\nGegenereerde URL:`);
console.log(url);
console.log(
  `\nJe kunt van deze URL een QR-code maken en deze gebruiken voor promotie.`
);
