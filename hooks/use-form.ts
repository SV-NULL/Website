"use client";

import { GENERIC_FORM_MESSAGES } from "@/config/messages";
import { SubmissionResult } from "@/types/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodObject } from "zod";
import { useFormValidation } from "./use-form-validation";

type Props = {
  validationSchema: ZodObject;
  submitAction: (formData: FormData) => Promise<SubmissionResult>;
  onSuccess?:
    | "redirect"
    | "show-message"
    | ((result: SubmissionResult) => void);
  successRedirect?: string;
};

export function useForm({
  validationSchema,
  submitAction,
  onSuccess = "show-message",
  successRedirect,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const {
    fieldErrors,
    formValues,
    validateField,
    handleInputChange,
    handleInputBlur,
    setFormValues,
  } = useFormValidation(validationSchema);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const result: SubmissionResult = await submitAction(formData);

      if (!result.success) {
        setError(result.message || GENERIC_FORM_MESSAGES.UNKNOWN_ERROR);

        if (result.fieldErrors) {
          Object.entries(result.fieldErrors).forEach(([name]) => {
            validateField(name, formValues[name] || "");
          });
        }
      } else {
        if (onSuccess === "redirect" && successRedirect) {
          router.push(successRedirect);
          return;
        } else if (onSuccess === "show-message") {
          setSuccess(true);
          setFormValues({});
        } else if (typeof onSuccess === "function") {
          onSuccess(result);
        }
      }
    } catch {
      setError(GENERIC_FORM_MESSAGES.NETWORK_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormValues({});
    setError(null);
    setSuccess(false);
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
    resetForm,
  };
}
