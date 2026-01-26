"use client";

import { renderFields } from "@/components/features/forms/render-fields";
import { useForm } from "@/hooks/use-form";
import { FormField, FormSectionConfig, SubmissionResult } from "@/types/form";
import { ZodObject } from "zod";
import ErrorAlert from "./error-alert";
import FormSection from "./form-section";
import SubmitButton from "./submit-button";
import SuccessAlert from "./success-alert";

type Props = {
  sections?: FormSectionConfig[];
  fields?: FormField[];
  validationSchema: ZodObject;
  submitAction: (formData: FormData) => Promise<SubmissionResult>;
  onSuccess?:
    | "redirect"
    | "show-message"
    | ((result: SubmissionResult) => void);
  successRedirect?: string;
  successMessage?: string;
  submitButtonText: string;
  submittingText?: string;
  className?: string;
  formClassName?: string;
  sectionSpacing?: string;
};

const Form = ({
  sections,
  fields,
  validationSchema,
  submitAction,
  onSuccess = "show-message",
  successRedirect,
  successMessage = "Formulier succesvol verzonden!",
  submitButtonText,
  submittingText = "Versturen...",
  className = "mt-12",
  formClassName = "space-y-4",
  sectionSpacing = "space-y-8",
}: Props) => {
  const {
    isSubmitting,
    error,
    success,
    fieldErrors,
    formValues,
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    resetForm,
  } = useForm({
    validationSchema,
    submitAction,
    onSuccess,
    successRedirect,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleSubmit(formData);
  };

  const renderSections = () => {
    if (sections) {
      return (
        <div className={sectionSpacing}>
          {sections.map((section) => (
            <FormSection
              key={section.key}
              title={section.title}
              description={section.description}
              extraContent={section.extraContent}
            >
              {renderFields(
                section.fields,
                formValues,
                fieldErrors,
                isSubmitting,
                handleInputChange,
                handleInputBlur,
              )}
            </FormSection>
          ))}
        </div>
      );
    }

    if (fields) {
      return renderFields(
        fields,
        formValues,
        fieldErrors,
        isSubmitting,
        handleInputChange,
        handleInputBlur,
      );
    }

    return null;
  };

  return (
    <div className={className}>
      {error && <ErrorAlert message={error} />}

      {success && <SuccessAlert message={successMessage} onClose={resetForm} />}

      <form
        onSubmit={onSubmit}
        className={sections ? sectionSpacing : formClassName}
        noValidate
      >
        {renderSections()}

        <SubmitButton
          isSubmitting={isSubmitting}
          alternativeText={submitButtonText}
          alternativeLoadingText={submittingText}
        />
      </form>
    </div>
  );
};

export default Form;
