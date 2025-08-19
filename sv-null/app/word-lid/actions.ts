"use server";

import { EmailService } from "@/lib/email";
import { membershipApplicationSchema } from "@/lib/validation";
import { createFieldErrors } from "@/utils/validation";

const emailService = new EmailService();

export async function submitMembershipApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validationResult = membershipApplicationSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Gelieve alle velden correct in te vullen.",
      fieldErrors: createFieldErrors(validationResult.error),
    };
  }

  try {
    await emailService.sendMembershipApplication(validationResult.data);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return {
      success: false,
      message: "Er is een fout opgetreden bij het verzenden van de e-mail.",
    };
  }
}
