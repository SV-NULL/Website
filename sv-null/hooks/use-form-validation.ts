import { membershipApplicationSchema } from "@/lib/validation";
import { useCallback, useState } from "react";

interface ValidationState {
  fieldErrors: Record<string, string>;
  touchedFields: Set<string>;
}

export function useFormValidation() {
  const [validationState, setValidationState] = useState<ValidationState>({
    fieldErrors: {},
    touchedFields: new Set(),
  });

  const validateField = useCallback((name: string, value: string) => {
    const fieldData = { [name]: value };
    const result = membershipApplicationSchema
      .pick({ [name]: true } as Parameters<
        typeof membershipApplicationSchema.pick
      >[0])
      .safeParse(fieldData);

    setValidationState((prev) => {
      const newFieldErrors = { ...prev.fieldErrors };

      if (!result.success) {
        const error = result.error.issues[0];
        if (error) {
          newFieldErrors[name] = error.message;
        }
      } else {
        delete newFieldErrors[name];
      }

      return {
        ...prev,
        fieldErrors: newFieldErrors,
      };
    });
  }, []);

  const markFieldAsTouched = useCallback((name: string) => {
    setValidationState((prev) => ({
      ...prev,
      touchedFields: new Set(prev.touchedFields).add(name),
    }));
  }, []);

  const clearValidation = useCallback(() => {
    setValidationState({
      fieldErrors: {},
      touchedFields: new Set(),
    });
  }, []);

  return {
    fieldErrors: validationState.fieldErrors,
    touchedFields: validationState.touchedFields,
    validateField,
    markFieldAsTouched,
    clearValidation,
  };
}
