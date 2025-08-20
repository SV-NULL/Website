"use server";

import { emailService } from "@/lib/email";
import { contactSchema } from "@/lib/validation";
import { SubmissionResult } from "@/types/form";
import { createFieldErrors } from "@/utils/validation";
import nodemailer from "nodemailer";

export async function submitContactForm(
  formData: FormData
): Promise<SubmissionResult> {
  const rawData = Object.fromEntries(formData.entries());
  const validationResult = contactSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Geleive alle velden correct in the vullen.",
      fieldErrors: createFieldErrors(validationResult.error),
    };
  }

  try {
    await emailService.sendContactForm(validationResult.data);
    return { success: true };
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return {
      success: false,
      message: "Er is een fout opgetreden bij het verzenden van het formulier.",
    };
  }
}

export async function contactVerzenden(
  _prevState: { success: boolean },
  formData: FormData
): Promise<{ success: boolean }> {
  const naam = formData.get("naam");
  const email = formData.get("email");
  const onderwerp = formData.get("onderwerp");
  const bericht = formData.get("bericht");

  const mailContent = `
    Nieuw contactbericht:

    Naam: ${naam}
    E-mail: ${email}
    Onderwerp: ${onderwerp}

    Bericht:
    ${bericht}
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"Website contactformulier" <${process.env.SMTP_USER!}>`,
    to: "svnull@che.nl",
    subject: `Contact: ${onderwerp}`,
    text: mailContent,
  });

  return { success: true };
}
