import { generateEmail } from "@/utils/email-templates";
import { commonFormatters } from "@/utils/email-templates/formatters";
import { becomePartnerApplicationTemplate } from "@/utils/email-templates/templates/become-partner-application";
import { membershipApplicationTemplate } from "@/utils/email-templates/templates/membership-application";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { BecomePartnerData, MembershipApplicationData } from "./validation";

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
}

export const emailService = new EmailService();
