"use server";

import { emailService } from "@/lib/email";
import { becomePartnerSchema } from "@/lib/validation";
import { createFieldErrors } from "@/utils/validation";

export async function submitBecomePartnerApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validationResult = becomePartnerSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Gelieve alle velden correct in te vullen.",
      fieldErrors: createFieldErrors(validationResult.error),
    };
  }

  try {
    await emailService.sendBecomePartnerApplication(validationResult.data);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return {
      success: false,
      message: "Er is een fout opgetreden bij het verzenden van het formulier.",
    };
  }
}
