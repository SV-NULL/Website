"use server";

import nodemailer from "nodemailer";

export async function partnerAanvraagVerzenden(formData: FormData) {
  const bedrijfsnaam = formData.get("bedrijfsnaam");
  const contactpersoon = formData.get("contactpersoon");
  const email = formData.get("email");
  const telefoon = formData.get("telefoon") || "Niet opgegeven";
  const bericht = formData.get("bericht");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM!,
    to: process.env.ADMIN_EMAIL!,
    subject: `Nieuwe partneraanvraag van ${bedrijfsnaam}`,
    text: `
Bedrijf: ${bedrijfsnaam}
Contactpersoon: ${contactpersoon}
E-mail: ${email}
Telefoon: ${telefoon}

Bericht:
${bericht}
    `,
  });
}
