"use client";

import { submitMembershipApplication } from "@/app/word-lid/actions";
import { FORM_FIELDS } from "@/content/vereniging/word-lid/form";
import { useFormValidation } from "@/hooks/use-form-validation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import ErrorAlert from "../form/ErrorAlert";
import FormField from "../form/FormField";
import FormSection from "../form/FormSection";
import SubmitButton from "../form/SubmitButton";

interface SubmissionResult {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
}

interface FormValues {
  [key: string]: string;
}

const WordLidForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({});

  const { fieldErrors, touchedFields, validateField, markFieldAsTouched } =
    useFormValidation();

  const router = useRouter();

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setFormValues((prev) => ({ ...prev, [name]: value }));

      if (touchedFields.has(name)) {
        validateField(name, value);
      }
    },
    [touchedFields, validateField]
  );

  const handleInputBlur = useCallback(
    (name: string, value: string) => {
      markFieldAsTouched(name);
      validateField(name, value);
    },
    [markFieldAsTouched, validateField]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result: SubmissionResult = await submitMembershipApplication(
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
      router.push("/word-lid/bedankt");
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

      <form onSubmit={handleSubmit} className=" space-y-8">
        <FormSection title="Algemene informatie">
          {renderFields(FORM_FIELDS.GENERAL)}
        </FormSection>
        <FormSection title="Studentinformatie">
          {renderFields(FORM_FIELDS.STUDENT)}
        </FormSection>
        <FormSection
          title="Contributie"
          description="Lid worden van NULL kost €10 per schooljaar of €30 voor je hele studie. Je krijgt na inschrijving een betaalverzoek."
        >
          {renderFields(FORM_FIELDS.CONTRIBUTION)}
        </FormSection>

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default WordLidForm;
