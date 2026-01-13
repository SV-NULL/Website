"use server";

import { GENERIC_FORM_MESSAGES } from "@/config/messages";
import { emailService } from "@/lib/email";
import { becomePartnerSchema } from "@/lib/validation";
import { createFieldErrors } from "@/utils/validation";

export async function submitBecomePartnerApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validationResult = becomePartnerSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: GENERIC_FORM_MESSAGES.INCORRECT_FORM_FIELDS,
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
      message: GENERIC_FORM_MESSAGES.INCORRECT_FORM_FIELDS,
    };
  }
}
