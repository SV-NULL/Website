"use client";

import { submitBecomePartnerApplication } from "@/app/partner-worden/actions";
import { FORM_FIELDS } from "@/content/partners/partner-worden/form";
import { useFormValidation } from "@/hooks/use-form-validation";
import { becomePartnerSchema } from "@/lib/validation";
import { SubmissionResult } from "@/types/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ErrorAlert from "../form/ErrorAlert";
import FormField from "../form/FormField";
import SubmitButton from "../form/SubmitButton";

const PartnerWordenForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    fieldErrors,
    formValues,
    validateField,
    handleInputChange,
    handleInputBlur,
  } = useFormValidation(becomePartnerSchema);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result: SubmissionResult = await submitBecomePartnerApplication(
      formData
    );

    if (!result.success) {
      setError(result.message || "Er is een onbekende fout opgetreden");
      if (result.fieldErrors) {
        Object.entries(result.fieldErrors).forEach(([name]) => {
          validateField(name, formValues[name] || "");
        });
      }
    } else {
      router.push("/partner-worden/bedankt");
      return;
    }

    setIsSubmitting(false);
  };

  const renderFields = (fields: (typeof FORM_FIELDS)[0]) => {
    return fields.map((field) => (
      <FormField
        key={field.name}
        name={field.name}
        type={field.type || "text"}
        placeholder={field.placeholder}
        required={field.required}
        disabled={isSubmitting}
        value={formValues[field.name] || ""}
        error={fieldErrors[field.name]}
        suffix={field.suffix}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        as={field.as}
        rows={field.rows}
        className={field.className}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormField>
    ));
  };

  return (
    <div className="mt-12">
      {error && <ErrorAlert message={error} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        {renderFields(FORM_FIELDS.GENERAL)}

        <SubmitButton
          isSubmitting={isSubmitting}
          alternativeText="Verstuur aanvraag"
          alternativeLoadingText="Versturen..."
        />
      </form>
    </div>
  );
};

export default PartnerWordenForm;
