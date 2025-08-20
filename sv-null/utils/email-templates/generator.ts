import {
  EmailData,
  EmailField,
  EmailSection,
  EmailTemplate,
} from "@/types/email-template";

export class EmailTemplateGenerator {
  private formatValue(
    value: any,
    field: EmailField,
    fallback: string = "Niet opgegeven"
  ): string {
    if (value === null || value === undefined || value === "") {
      return field.required ? "[NIET INGEVULD]" : fallback;
    }

    if (field.formatter) {
      try {
        return field.formatter(value);
      } catch (error) {
        console.warn(`Formatter error for field ${field.key}:`, error);
        return String(value);
      }
    }

    return String(value).trim();
  }

  private replacePlaceholders(text: string, data: EmailData): string {
    return text.replace(/\{(\w+)\}/g, (match, key) => {
      return data[key] || match;
    });
  }

  private renderSection(section: EmailSection, data: EmailData): string {
    const title = section.title;
    const seperator = "=".repeat(title.length);

    const fields = section.fields
      .map((field) => {
        const value = data[field.key];
        const formattedValue = this.formatValue(value, field);
        return `${field.label.padEnd(25)}: ${formattedValue}`;
      })
      .join("\n");

    return `${title}\n${seperator}\n${fields}`;
  }

  generateText(template: EmailTemplate, data: EmailData): string {
    const timestamp = new Date().toLocaleDateString("nl-NL", {
      timeZone: "Europe/Amsterdam",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const organization = template.metadata?.organization || "Organisatie";
    const system = template.metadata?.system || "Systeem";

    const headerTitle = `NIEUW BERICHT - ${organization.toUpperCase()}`;
    const header = `
${headerTitle}
${"=".repeat(headerTitle.length)}

Ontvangen op: ${timestamp}
Systeem: ${system}
`.trim();

    const sections = template.sections
      .map((section) => this.renderSection(section, data))
      .join("\n\n");

    let footer = "";
    if (template.footer) {
      const footerTitle = template.footer.title;
      const steps = template.footer.steps
        .map(
          (step, index) =>
            `${index + 1}. ${this.replacePlaceholders(step, data)}`
        )
        .join("\n");

      footer = `
${"=".repeat(60)}
${footerTitle}
${"=".repeat(footerTitle.length)}

${steps}
        `;

      if (template.footer.note) {
        footer += `\n\n${this.replacePlaceholders(template.footer.note, data)}`;
      }

      footer += `\n\n-- \nDit bericht is automatisch gegenereerd door het ${system.toLowerCase()}.`;
    }

    return `${header}\n\n${sections}${footer}`;
  }

  generateHTML(template: EmailTemplate, data: EmailData): string {
    const timestamp = new Date().toLocaleString("nl-NL", {
      timeZone: "Europe/Amsterdam",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const organization = template.metadata?.organization || "Organisatie";
    const system = template.metadata?.system || "Systeem";

    const sectionsHTML = template.sections
      .map((section) => {
        const fieldsHTML = section.fields
          .map((field) => {
            const value = data[field.key];
            const formattedValue = this.formatValue(value, field);
            const displayValue =
              field.required && (!value || value === "")
                ? '<em style="color: #dc2626;">[NIET INGEVULD]</em>'
                : formattedValue === "Niet opgegeven"
                ? '<em style="color: #6b7280;">Niet opgegeven</em>'
                : formattedValue;

            return `
          <div class="field">
            <div class="label">${field.label}:</div>
            <div class="value">${displayValue}</div>
          </div>
        `;
          })
          .join("");

        return `
        <div class="section">
          <h3>${section.title}</h3>
          ${fieldsHTML}
        </div>
      `;
      })
      .join("");

    let footerHTML = "";
    if (template.footer) {
      const stepsHTML = template.footer.steps
        .map((step) => `<li>${this.replacePlaceholders(step, data)}</li>`)
        .join("");

      footerHTML = `
        <div class="footer">
          <h3>${template.footer.title}</h3>
          <ol class="steps">${stepsHTML}</ol>
          ${
            template.footer.note
              ? `<p><small>${this.replacePlaceholders(
                  template.footer.note,
                  data
                )}</small></p>`
              : ""
          }
        </div>
      `;
    }

    return `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
        .section { margin: 20px 0; padding: 15px; border: 1px solid #e5e7eb; border-radius: 5px; }
        .section h3 { margin-top: 0; color: #1f2937; border-bottom: 2px solid #fbbf24; padding-bottom: 5px; }
        .field { display: flex; margin: 8px 0; }
        .label { font-weight: bold; width: 200px; }
        .value { flex: 1; }
        .footer { background: #f3f4f6; padding: 15px; margin-top: 20px; border-radius: 5px; }
        .steps { counter-reset: step-counter; }
        .steps li { counter-increment: step-counter; margin: 5px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${organization}</h1>
            <p>${system}</p>
            <p>Ontvangen op: ${timestamp}</p>
        </div>
        ${sectionsHTML}
        ${footerHTML}
        <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">
            Dit bericht is automatisch gegenereerd door het ${system.toLowerCase()}.
        </p>
    </div>
</body>
</html>
    `.trim();
  }
}
