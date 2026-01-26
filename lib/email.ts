import { becomePartnerApplicationTemplate } from "@/config/email-templates/become-partner-application";
import { commissieApplicationTemplate } from "@/config/email-templates/commissie-application";
import { contactFormTemplate } from "@/config/email-templates/contact-form";
import { membershipApplicationTemplate } from "@/config/email-templates/membership-application";
import { generateEmail } from "@/utils/email";
import { commonFormatters } from "@/utils/email/formatters";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import {
  BecomePartnerData,
  CommissieApplicationData,
  ContactData,
  MembershipApplicationData,
} from "./validation";

const DEFAULT_FROM = {
  name: "Studievereniging NULL",
  address: process.env.SMTP_USER!,
};
const DEFAULT_TO = "svnull@che.nl";

class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
  }

  async sendMembershipApplication(data: MembershipApplicationData) {
    const emailData = {
      ...data,
      email: commonFormatters.studentEmail(data.studentId),
    };

    const mailOptions: MailOptions = {
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: membershipApplicationTemplate.subject(emailData),
      text: generateEmail(membershipApplicationTemplate, emailData, "text"),
      html: generateEmail(membershipApplicationTemplate, emailData, "html"),
      priority: "high",
    };

    return this.transporter.sendMail(mailOptions);
  }

  async sendBecomePartnerApplication(data: BecomePartnerData) {
    const mailOptions: MailOptions = {
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: becomePartnerApplicationTemplate.subject(data),
      text: generateEmail(becomePartnerApplicationTemplate, data, "text"),
      html: generateEmail(becomePartnerApplicationTemplate, data, "html"),
      priority: "high",
    };

    return this.transporter.sendMail(mailOptions);
  }

  async sendContactForm(data: ContactData) {
    const mailOptions: MailOptions = {
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: contactFormTemplate.subject(data),
      text: generateEmail(contactFormTemplate, data, "text"),
      html: generateEmail(contactFormTemplate, data, "html"),
      priority: "high",
    };

    return this.transporter.sendMail(mailOptions);
  }

  async sendCommissieApplication(data: CommissieApplicationData) {
    const emailData = {
      ...data,
      email: commonFormatters.studentEmail(data.studentId),
    };

    const mailOptions: MailOptions = {
      from: DEFAULT_FROM,
      to: DEFAULT_TO,
      subject: commissieApplicationTemplate.subject(emailData),
      text: generateEmail(commissieApplicationTemplate, emailData, "text"),
      html: generateEmail(commissieApplicationTemplate, emailData, "html"),
      priority: "high",
    };

    return this.transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailService();
