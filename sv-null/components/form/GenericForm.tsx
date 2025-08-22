"use client";

import { useGenericForm } from "@/hooks/use-generic-form";
import { FormField, FormSectionConfig, SubmissionResult } from "@/types/form";
import { renderFields } from "@/utils/form/render-fields";
import { ZodObject } from "zod";
import ErrorAlert from "./ErrorAlert";
import FormSection from "./FormSection";
import SubmitButton from "./SubmitButton";
import SuccessAlert from "./SuccessAlert";

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

const GenericForm = ({
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
  } = useGenericForm({
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
            >
              {renderFields(
                section.fields,
                formValues,
                fieldErrors,
                isSubmitting,
                handleInputChange,
                handleInputBlur
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
        handleInputBlur
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

export default GenericForm;
