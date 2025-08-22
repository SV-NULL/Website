"use server";

import { GENERIC_FORM_MESSAGES } from "@/config/messages";
import { emailService } from "@/lib/email";
import { contactSchema } from "@/lib/validation";
import { SubmissionResult } from "@/types/form";
import { createFieldErrors } from "@/utils/validation";

export async function submitContactForm(
  formData: FormData
): Promise<SubmissionResult> {
  const rawData = Object.fromEntries(formData.entries());
  const validationResult = contactSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: GENERIC_FORM_MESSAGES.INCORRECT_FORM_FIELDS,
      fieldErrors: createFieldErrors(validationResult.error),
    };
  }

  try {
    await emailService.sendContactForm(validationResult.data);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return {
      success: false,
      message: GENERIC_FORM_MESSAGES.FORM_ERROR,
    };
  }
}
