"use client";

import { submitContactForm } from "@/app/contact/actions";
import { CONTACT_FORM_FIELDS } from "@/config/forms/contact";
import { CONTACT_FORM_MESSAGES } from "@/config/messages";
import { contactSchema } from "@/lib/validation";
import Form from "../forms/form";

const ContactForm = () => {
  return (
    <Form
      fields={CONTACT_FORM_FIELDS.GENERAL}
      validationSchema={contactSchema}
      submitAction={submitContactForm}
      onSuccess="show-message"
      successMessage={CONTACT_FORM_MESSAGES.SUCCESS}
      submitButtonText={CONTACT_FORM_MESSAGES.SUBMIT_BUTTON}
      submittingText={CONTACT_FORM_MESSAGES.SUBMITTING}
    />
  );
};

export default ContactForm;
