import { ZodObject } from "zod";

export interface SubmissionResult {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
}

export interface FormValues {
  [key: string]: string;
}

export interface FormField {
  name: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  as?: "select" | "textarea";
  options?: { value: string; label: string }[];
  suffix?: string;
  rows?: number;
  className?: string;
  value?: string;
}

export interface FormSectionConfig {
  key: string;
  title: string;
  description?: string;
  fields: FormField[];
}

export interface FormConfig {
  sections: FormSectionConfig[];
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
}
