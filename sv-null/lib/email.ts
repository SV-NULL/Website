import { generateEmail } from "@/utils/email-templates";
import { commonFormatters } from "@/utils/email-templates/formatters";
import { membershipApplicationTemplate } from "@/utils/email-templates/templates/membership-application";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { MembershipApplicationData } from "./validation";

export class EmailService {
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
      from: {
        name: "Studievereniging NULL",
        address: process.env.SMTP_USER!,
      },
      to: "svnull@che.nl",
      subject: membershipApplicationTemplate.subject(emailData),
      text: generateEmail(membershipApplicationTemplate, emailData, "text"),
      html: generateEmail(membershipApplicationTemplate, emailData, "html"),
      priority: "high",
    };

    return this.transporter.sendMail(mailOptions);
  }
}
