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
}
