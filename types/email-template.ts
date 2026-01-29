export interface EmailField {
  key: string;
  label: string;
  required?: boolean;
  formatter?: (value: unknown) => string;
}

export interface EmailSection {
  title: string;
  fields: EmailField[];
}

export interface EmailTemplate {
  subject: (data: unknown) => string;
  sections: EmailSection[];
  footer?: {
    title: string;
    steps: string[] | ((data: unknown) => string[]);
    note?: string;
  };
  metadata?: {
    organization?: string;
    system?: string;
  };
}

export interface EmailData {
  [key: string]: unknown;
}
