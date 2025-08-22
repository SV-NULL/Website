import { submitContactForm } from "@/app/contact/actions";
import { contactSchema } from "@/lib/validation";
import { SubmissionResult } from "@/types/form";
import { useState } from "react";
import { useFormValidation } from "./use-form-validation";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    fieldErrors,
    formValues,
    validateField,
    handleInputChange,
    handleInputBlur,
    setFormValues,
  } = useFormValidation(contactSchema);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const result: SubmissionResult = await submitContactForm(formData);

      if (!result.success) {
        setError(result.message || "Er is een onbekende fout opgetreden");
        if (result.fieldErrors) {
          Object.entries(result.fieldErrors).forEach(([name]) => {
            validateField(name, formValues[name] || "");
          });
        }
      } else {
        setSuccess(true);
        setFormValues({});
      }
    } catch {
      setError("Er is een netwerkfout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    // Form state
    isSubmitting,
    error,
    success,
    fieldErrors,
    formValues,

    // Form handlers
    handleSubmit,
    handleInputChange,
    handleInputBlur,
  };
}
