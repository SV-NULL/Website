'use server';

import nodemailer from 'nodemailer';

export async function contactVerzenden(
  _prevState: { success: boolean },
  formData: FormData
): Promise<{ success: boolean }> {
  const naam = formData.get('naam');
  const email = formData.get('email');
  const onderwerp = formData.get('onderwerp');
  const bericht = formData.get('bericht');

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
    to: 'svnull@che.nl',
    subject: `Contact: ${onderwerp}`,
    text: mailContent,
  });

  return { success: true };
}
