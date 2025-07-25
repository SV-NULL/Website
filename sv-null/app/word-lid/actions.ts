'use server';

import nodemailer from 'nodemailer';

export async function aanmeldingVerzenden(formData: FormData) {
  const voornaam = formData.get('voornaam');
  const achternaam = formData.get('achternaam');
  const geboortedatum = formData.get('geboortedatum');
  const adres = formData.get('adres');
  const postcode = formData.get('postcode');
  const woonplaats = formData.get('woonplaats');
  const telefoonnummer = formData.get('telefoonnummer');
  const discord = formData.get('discord');
  const email = formData.get('che-email');
  const startjaar = formData.get('startjaar');
  const contributie = formData.get('contributie');
  const opmerkingen = formData.get('opmerkingen');

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: 'svnull@che.nl',
    subject: `Nieuwe aanmelding: ${voornaam} ${achternaam}`,
    text: `
Er is een nieuw lid aangemeld via het formulier op svnull.nl:

--- Algemene informatie ---
Naam: ${voornaam} ${achternaam}
Geboortedatum: ${geboortedatum}
Adres: ${adres}, ${postcode} ${woonplaats}
Telefoonnummer: ${telefoonnummer}
Discord: ${discord || 'Niet opgegeven'}

--- Studentinformatie ---
E-mailadres: ${email}
Startjaar opleiding: ${startjaar}

--- Contributie ---
Keuze: €${contributie}
Opmerkingen: ${opmerkingen || 'Geen'}

Verstuurd op: ${new Date().toLocaleString('nl-NL')}
    `,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.error('Fout bij versturen e-mail:', error);
    throw new Error('Versturen mislukt');
  }
}
