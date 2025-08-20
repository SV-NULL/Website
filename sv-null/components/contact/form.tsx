"use client";

import { submitContactForm } from "@/app/contact/actions";
import { FORM_FIELDS } from "@/content/contact/form";
import { useFormValidation } from "@/hooks/use-form-validation";
import { contactSchema } from "@/lib/validation";
import { SubmissionResult } from "@/types/form";
import { useState } from "react";
import ErrorAlert from "../form/ErrorAlert";
import FormField from "../form/FormField";
import SubmitButton from "../form/SubmitButton";

const ContactForm = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
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

      {success && (
        <div className="mb-6 p-4 rounded bg-green-700 text-white border border-green-500">
          ✅ Bericht succesvol verzonden. We nemen snel contact met je op.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {renderFields(FORM_FIELDS.GENERAL)}

        <SubmitButton
          isSubmitting={isSubmitting}
          alternativeText="Verstuur bericht"
          alternativeLoadingText="Versturen..."
        />
      </form>
    </div>
  );
};

export default ContactForm;
