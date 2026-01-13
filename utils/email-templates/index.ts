import { EmailData, EmailTemplate } from "@/types/email-template";
import { EmailTemplateGenerator } from "./generator";

export function generateEmail(
  template: EmailTemplate,
  data: EmailData,
  format: "text" | "html" = "text"
): string {
  const generator = new EmailTemplateGenerator();
  return format === "html"
    ? generator.generateHTML(template, data)
    : generator.generateText(template, data);
}
