import FormField from "@/components/form/FormField";
import { FormField as FormFieldType, FormValues } from "@/types/form";

export const renderFields = (
  fields: FormFieldType[],
  formValues: FormValues,
  fieldErrors: Record<string, string>,
  isSubmitting: boolean,
  handleInputChange: (name: string, value: string) => void,
  handleInputBlur: (name: string, value: string) => void
) => {
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
