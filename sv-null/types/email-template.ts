export interface EmailField {
  key: string;
  label: string;
  required?: boolean;
  formatter?: (value: any) => string;
}

export interface EmailSection {
  title: string;
  fields: EmailField[];
}

export interface EmailTemplate {
  subject: (data: any) => string;
  sections: EmailSection[];
  footer?: {
    title: string;
    steps: string[] | ((data: any) => string[]);
    note?: string;
  };
  metadata?: {
    organization?: string;
    system?: string;
  };
}

export interface EmailData {
  [key: string]: any;
}
