export interface Discount {
  id: string;
  name: string;
  description: string;
  amount: string; // Description such as "5 euro discount" or "50% discount"
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format
  createdAt: string;
}

export const DISCOUNTS: Discount[] = [
  {
    id: "NULL2026",
    name: "Introweek korting",
    description:
      "5 euro korting voor nieuwe leden die zich inschrijven voor 4 jaar lidmaatschap tijdens de introweek.",
    amount: "€5,00 korting",
    startDate: "2026-08-31",
    endDate: "2026-09-12",
    createdAt: "2026-08-31",
  },
];

export function generateDiscountHash(discountId: string): string {
  const salt = process.env.DISCOUNT_SALT;
  if (!salt) {
    throw new Error("DISCOUNT_SALT environment variable is not set");
  }

  const combined = `${discountId}-${salt}`;

  return Buffer.from(combined, "utf8").toString("base64url");
}

export function getDiscountByHash(hash: string): Discount | null {
  const salt = process.env.DISCOUNT_SALT;
  if (!salt) {
    throw new Error("DISCOUNT_SALT environment variable is not set");
  }

  const today = new Date().toISOString().split("T")[0];

  for (const discount of DISCOUNTS) {
    if (today < discount.startDate || today > discount.endDate) continue;

    const combined = `${discount.id}-${salt}`;
    const expectedHash = Buffer.from(combined, "utf8").toString("base64url");

    if (expectedHash === hash) {
      return discount;
    }
  }

  return null;
}

export function generateDiscountUrl(
  discountId: string,
  baseUrl: string = "",
): string {
  const hash = generateDiscountHash(discountId);
  return `${baseUrl}/word-lid?discount=${hash}`;
}
