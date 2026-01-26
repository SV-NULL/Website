import FormField from "@/components/features/forms/form-field";
import { FormField as FormFieldType, FormValues } from "@/types/form";

export const renderFields = (
  fields: FormFieldType[],
  formValues: FormValues,
  fieldErrors: Record<string, string>,
  isSubmitting: boolean,
  handleInputChange: (name: string, value: string) => void,
  handleInputBlur: (name: string, value: string) => void,
) => {
  return fields.map((field) => {
    if (field.type === "hidden") {
      return (
        <input
          key={field.name}
          type="hidden"
          name={field.name}
          value={field.value || ""}
        />
      );
    }

    return (
      <FormField
        key={field.name}
        name={field.name}
        type={field.type || "text"}
        placeholder={field.placeholder}
        required={field.required}
        disabled={isSubmitting}
        value={field.value || formValues[field.name] || ""}
        error={fieldErrors[field.name]}
        suffix={field.suffix}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        as={field.as}
        rows={field.rows}
        className={field.className}
        description={field.description}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormField>
    );
  });
};
