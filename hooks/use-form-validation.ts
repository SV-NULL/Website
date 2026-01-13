"use client";

import { FormValues } from "@/types/form";
import { useCallback, useState } from "react";
import { ZodObject } from "zod";

interface ValidationState {
  fieldErrors: Record<string, string>;
  touchedFields: Set<string>;
}

export function useFormValidation(schema: ZodObject) {
  const [validationState, setValidationState] = useState<ValidationState>({
    fieldErrors: {},
    touchedFields: new Set(),
  });
  const [formValues, setFormValues] = useState<FormValues>({});

  const validateField = useCallback((name: string, value: string) => {
    const fieldData = { [name]: value };
    const result = schema
      .pick({ [name]: true } as Parameters<typeof schema.pick>[0])
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

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setFormValues((prev) => ({ ...prev, [name]: value }));

      if (validationState.touchedFields.has(name)) {
        validateField(name, value);
      }
    },
    [validationState.touchedFields, validateField]
  );

  const handleInputBlur = useCallback(
    (name: string, value: string) => {
      markFieldAsTouched(name);
      validateField(name, value);
    },
    [markFieldAsTouched, validateField]
  );

  return {
    fieldErrors: validationState.fieldErrors,
    touchedFields: validationState.touchedFields,
    formValues,
    validateField,
    markFieldAsTouched,
    clearValidation,
    handleInputChange,
    handleInputBlur,
    setFormValues,
  };
}
