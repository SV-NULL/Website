import { ZodError } from "zod";

export function createFieldErrors(error: ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  error.issues.forEach((validationError) => {
    const fieldName = validationError.path[0];

    if (!fieldName || typeof fieldName !== "string") return;

    if (fieldErrors[fieldName]) {
      fieldErrors[fieldName] += `; ${validationError.message}`;
    } else {
      fieldErrors[fieldName] = validationError.message;
    }
  });

  return fieldErrors;
}
