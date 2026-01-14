"use server";

import { GENERIC_FORM_MESSAGES } from "@/config/messages";
import { emailService } from "@/lib/email";
import { membershipApplicationSchema } from "@/lib/validation";
import { createFieldErrors } from "@/utils/validation";

export async function submitMembershipApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  const discountId = formData.get("discountId") as string | null;
  const discountName = formData.get("discountName") as string | null;
  const discountAmount = formData.get("discountAmount") as string | null;

  const {
    discountId: _,
    discountName: __,
    discountAmount: ___,
    ...dataForValidation
  } = rawData;

  const validationResult =
    membershipApplicationSchema.safeParse(dataForValidation);

  if (!validationResult.success) {
    return {
      success: false,
      message: GENERIC_FORM_MESSAGES.INCORRECT_FORM_FIELDS,
      fieldErrors: createFieldErrors(validationResult.error),
    };
  }

  try {
    const membershipData = {
      ...validationResult.data,
      discount: discountId
        ? {
            id: discountId,
            name: discountName,
            amount: discountAmount,
          }
        : undefined,
    };

    await emailService.sendMembershipApplication(membershipData);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return {
      success: false,
      message: GENERIC_FORM_MESSAGES.FORM_ERROR,
    };
  }
}
